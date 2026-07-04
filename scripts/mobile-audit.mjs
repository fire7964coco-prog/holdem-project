// Phase 0 mobile audit: measure horizontal overflow + capture screenshots for EN blog posts.
// Usage: node scripts/mobile-audit.mjs [slug1 slug2 ...]  (default = all EN slugs)
import { chromium } from "playwright";
import { readdirSync, readFileSync, mkdirSync } from "fs";

const BASE = process.env.AUDIT_BASE || "http://localhost:3100";
const WIDTHS = [360, 390]; // iPhone SE, iPhone 14
const OUT = "tmp/mobile-audit";
mkdirSync(OUT, { recursive: true });

// collect EN slugs from lib/posts-en/*.ts
const files = readdirSync("lib/posts-en").filter((f) => f.endsWith(".ts") && f !== "index.ts");
let slugs = process.argv.slice(2);
if (!slugs.length) {
  slugs = files
    .map((f) => (readFileSync(`lib/posts-en/${f}`, "utf8").match(/slug:\s*"([a-z0-9-]+)"/) || [])[1])
    .filter(Boolean);
}
// screenshot only these representative posts (table/directive heavy + long)
const SHOT = new Set(["holdem-rake", "holdem-drawing-odds", "holdem-straddle", "holdem-probability", "holdem-outs"]);

const browser = await chromium.launch();
const results = [];
for (const slug of slugs) {
  const row = { slug };
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
    const url = `${BASE}/en/blog/${slug}`;
    const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => null);
    if (!resp || resp.status() >= 400) { row[`w${w}`] = `HTTP ${resp ? resp.status() : "ERR"}`; await page.close(); continue; }
    // measure overflow + list offenders
    const data = await page.evaluate((vw) => {
      const docW = document.documentElement.scrollWidth;
      const over = docW - vw;
      const offenders = [];
      if (over > 1) {
        for (const el of document.querySelectorAll("main *, article *")) {
          const r = el.getBoundingClientRect();
          if (r.right > vw + 1 && r.width > 40) {
            offenders.push({
              tag: el.tagName.toLowerCase(),
              cls: (el.className || "").toString().slice(0, 40),
              right: Math.round(r.right),
              w: Math.round(r.width),
            });
          }
        }
      }
      // widest table scroll containers (expected horizontal scroll, not page overflow)
      const scrollers = [...document.querySelectorAll(".overflow-x-auto, .blog-scroll-x")].map((el) => ({
        childW: Math.round(el.firstElementChild?.scrollWidth || el.scrollWidth),
      }));
      return { docW, over, offenders: offenders.slice(0, 6), scrollers };
    }, w);
    row[`w${w}`] = data.over > 1 ? `OVERFLOW +${data.over}px` : "ok";
    row[`w${w}_off`] = data.offenders;
    if (w === 360 && SHOT.has(slug)) {
      await page.screenshot({ path: `${OUT}/${slug}-360.png`, fullPage: true });
    }
    await page.close();
  }
  results.push(row);
  const flag = (row.w360 !== "ok" || row.w390 !== "ok") ? "⚠️ " : "  ";
  console.log(`${flag}${slug.padEnd(34)} 360:${String(row.w360).padEnd(16)} 390:${row.w390}`);
}
await browser.close();

const bad = results.filter((r) => r.w360 !== "ok" || r.w390 !== "ok");
console.log(`\n=== ${bad.length}/${results.length} posts with horizontal overflow ===`);
for (const r of bad) {
  const off = (r.w360_off || r.w390_off || []).map((o) => `${o.tag}.${o.cls}(${o.w}px→${o.right})`).join(" | ");
  if (off) console.log(`  ${r.slug}: ${off}`);
}
