// 순환 이음새 캡처: 스크롤해서 «처음부터 다시»가 나올 때까지 내려가 그 자리를 찍는다.
// 실행(레포 루트): node .claude/skills/screen-review/scripts/seam-shoot.mjs [base]  · ONLY_D=1이면 데스크톱 홈만   (기본 https://www.holdemmaster.com)
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const base = process.argv[2] || "https://www.holdemmaster.com";
const out = "tmp/screen/seam"; // 비추적
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const [w, h, tag] of (process.env.ONLY_D ? [[1440, 900, "d"]] : [[1440, 900, "d"], [390, 844, "m"]])) {
  for (const path of (process.env.ONLY_D ? ["/"] : ["/", "/blog"])) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 600 });
    const page = await ctx.newPage();
    const warns = [];
    page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") warns.push(m.text().slice(0, 200)); });
    await page.goto(base + path, { waitUntil: "networkidle", timeout: 90000 });
    const name = `${tag}-${path === "/" ? "home" : "blog"}`;
    // 초기 HTML 상태: 블로그 카드 수 / hidden 수 / 버튼
    const initial = await page.evaluate(() => {
      const links = [...document.querySelectorAll('a[href^="/blog/"]')].map((a) => a.getAttribute("href"));
      const hidden = document.querySelectorAll("[hidden]").length;
      const btn = [...document.querySelectorAll("button")].map((b) => b.textContent.trim()).filter((t) => /더 보기|처음부터/.test(t));
      return { blogLinks: new Set(links).size, hidden, btn };
    });
    let found = null;
    for (let i = 0; i < 80 && !found; i++) {
      if (i === 0) await page.mouse.move(w / 2, h / 2); await page.mouse.wheel(0, 2500);
      await page.waitForTimeout(350);
      found = await page.evaluate(() => {
        const el = [...document.querySelectorAll("span,div,p,button")].find((e) => e.children.length === 0 && /처음부터 다시/.test(e.textContent));
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { y: r.top + window.scrollY, text: el.textContent.trim() };
      });
    }
    const docH = await page.evaluate(() => document.documentElement.scrollHeight);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (found) {
      await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 500)), found.y);
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${out}/${name}-seam.png` });
      // 이음새 뒤 첫 카드 3장 제목 (1번부터 다시 이어지는지)
    }
    const after = await page.evaluate(() => {
      const el = [...document.querySelectorAll("span,div,p,button")].find((e) => e.children.length === 0 && /처음부터 다시/.test(e.textContent));
      if (!el) return null;
      const all = [...document.querySelectorAll('a[href^="/blog/"]')];
      const pos = el.getBoundingClientRect().top + window.scrollY;
      const after = all.filter((a) => a.getBoundingClientRect().top + window.scrollY > pos).map((a) => a.getAttribute("href"));
      const before = all.filter((a) => a.getBoundingClientRect().top + window.scrollY < pos).map((a) => a.getAttribute("href"));
      return { first3After: [...new Set(after)].slice(0, 3), first3Overall: [...new Set(before)].slice(0, 3), cardsBefore: new Set(before).size };
    });
    const dupKey = warns.filter((t) => /same key|duplicate/i.test(t));
    console.log(JSON.stringify({ name, initial, found: found ? found.text : null, seamY: found?.y, docH, overflow, after, dupKey, otherWarns: warns.filter((t) => !/google-analytics|same key/.test(t)).slice(0, 5) }, null, 1));
    await ctx.close();
  }
}
await browser.close();
