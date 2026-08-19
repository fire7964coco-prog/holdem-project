/**
 * 모바일 성능 통제 측정 — 랩 편차를 피해 «같은 조건에서 n회 중앙값» 으로 비교한다.
 *
 * ★왜 PSI 대신 이걸 쓰나 ([[perf-lessons-lcp-and-bundle]])
 *   PSI 는 리포트를 캐시하고 랩 편차가 크다. 같은 URL 을 두 번 재면 점수가 20점 널뛴다.
 *   판정은 **Playwright + CDP 통제 조건 · 중앙값**으로 낸다.
 *
 * 사용법:
 *   node scripts/perf-compare.mjs <URL> [<URL> ...] [--runs 4]
 *
 * 스로틀: Lighthouse 모바일과 같은 값(1.6Mbps ↓ / 750Kbps ↑ / RTT 150ms · CPU 4배 감속).
 */
import { chromium } from "playwright";

const args = process.argv.slice(2);
const runsIdx = args.indexOf("--runs");
const RUNS = runsIdx >= 0 ? Number(args[runsIdx + 1]) : 4;
const URLS = args.filter((a, i) => a.startsWith("http") && i !== runsIdx + 1);
if (!URLS.length) {
  console.error("사용법: node scripts/perf-compare.mjs <URL> [...] [--runs 4]");
  process.exit(1);
}

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmt = (n, d = 0) => (n == null ? "—" : n.toFixed(d));

async function measure(browser, url) {
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send("Network.enable");
  await cdp.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  });
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });

  // 전송량 집계 — 렌더를 막는 자원이 무엇인지 보려면 종류별로 나눠야 한다
  const bytes = { document: 0, script: 0, stylesheet: 0, image: 0, font: 0, other: 0 };
  page.on("response", async (res) => {
    try {
      const t = res.request().resourceType();
      const len = Number(res.headers()["content-length"] || 0);
      const key = bytes[t] != null ? t : "other";
      bytes[key] += len;
    } catch {}
  });

  /* 🔴 LCP 는 **로드 전에 관찰자를 걸어야** 잡힌다.
     `getEntriesByType("largest-contentful-paint")` 를 나중에 부르면 빈 배열이 와서
     조용히 NaN 이 된다 — 2026-08-19 에 실제로 그렇게 «LCP 측정 실패»를 «값 없음»으로 오독했다. */
  await page.addInitScript(() => {
    window.__lcp = null;
    new PerformanceObserver((l) => {
      const es = l.getEntries();
      const last = es[es.length - 1];
      window.__lcp = {
        t: last.startTime,
        el: last.element ? last.element.tagName : last.url || "?",
        cls: last.element ? String(last.element.className || "").slice(0, 30) : "",
      };
    }).observe({ type: "largest-contentful-paint", buffered: true });
  });

  await page.goto(url, { waitUntil: "load", timeout: 90000 });
  // LCP 는 상호작용 전까지 갱신된다 — 조금 기다렸다 확정값을 읽는다
  await page.waitForTimeout(2500);

  const m = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const fcp = performance.getEntriesByName("first-contentful-paint")[0];
    return {
      ttfb: nav ? nav.responseStart : null,
      domContent: nav ? nav.domContentLoadedEventEnd : null,
      load: nav ? nav.loadEventEnd : null,
      fcp: fcp ? fcp.startTime : null,
      lcp: window.__lcp ? window.__lcp.t : null,
      lcpEl: window.__lcp ? window.__lcp.el + (window.__lcp.cls ? "." + window.__lcp.cls : "") : null,
      transferHtml: nav ? nav.transferSize : null,
    };
  });

  await ctx.close();
  return { ...m, bytes };
}

const browser = await chromium.launch();
const results = [];
for (const url of URLS) {
  const runs = [];
  process.stdout.write(`측정 ${url}\n  `);
  for (let i = 0; i < RUNS; i++) {
    runs.push(await measure(browser, url));
    process.stdout.write(`${i + 1} `);
  }
  process.stdout.write("\n");
  results.push({
    url,
    ttfb: median(runs.map((r) => r.ttfb).filter(Number.isFinite)),
    fcp: median(runs.map((r) => r.fcp).filter(Number.isFinite)),
    lcp: median(runs.map((r) => r.lcp).filter(Number.isFinite)),
    load: median(runs.map((r) => r.load).filter(Number.isFinite)),
    html: median(runs.map((r) => r.transferHtml).filter(Number.isFinite)),
    lcpEl: runs[runs.length - 1].lcpEl,
    bytes: runs[runs.length - 1].bytes,
  });
}
await browser.close();

console.log("\n" + "=".repeat(96));
console.log(`모바일 390×844 · 1.6Mbps/RTT150 · CPU 4x · n=${RUNS} 중앙값`);
console.log("=".repeat(96));
console.log(
  "페이지".padEnd(38) + "TTFB".padStart(8) + "FCP".padStart(9) + "LCP".padStart(9) + "load".padStart(9) + "HTML전송".padStart(11)
);
for (const r of results) {
  const name = r.url.replace(/^https?:\/\/[^/]+/, "").slice(0, 37);
  console.log(
    name.padEnd(38) +
      (fmt(r.ttfb) + "ms").padStart(8) +
      (fmt(r.fcp) + "ms").padStart(9) +
      (fmt(r.lcp) + "ms").padStart(9) +
      (fmt(r.load) + "ms").padStart(9) +
      ((r.html / 1024).toFixed(0) + "KB").padStart(11)
  );
}
console.log("\n종류별 전송량(마지막 회차 · content-length 기준)");
for (const r of results) {
  const b = r.bytes;
  const kb = (n) => (n / 1024).toFixed(0) + "KB";
  console.log(
    "  " + r.url.replace(/^https?:\/\/[^/]+/, "").slice(0, 40).padEnd(42) +
      `doc ${kb(b.document)} · js ${kb(b.script)} · css ${kb(b.stylesheet)} · img ${kb(b.image)} · font ${kb(b.font)}`
  );
  console.log("      LCP 요소: " + (r.lcpEl ?? "—"));
}
