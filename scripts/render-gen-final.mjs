/**
 * scripts/gen-*.html → public/images/<name>.webp (최종 산출)
 *
 * `render-gen-batch.mjs`는 **미리보기 전용**(q72 · scripts/_prev-*.webp)이다.
 * 최종 반영은 CLAUDE.md §9-2-A의 **q82**로 나가야 하므로 이 스크립트를 쓴다.
 *
 * 사용:
 *   node scripts/render-gen-final.mjs <name> [<name> ...]
 *     → scripts/gen-<name>.html 을 렌더해 public/images/<name>.webp 로 저장
 *
 * 🔴 이름은 **정확히** 지정한다(부분일치 금지) — 무관한 이미지 수백 개를
 *    같이 덮어써 커밋에 섞이는 사고를 막는다(posting.mdc 「이미지 규칙」).
 * 🔴 Windows sharp 파일락: 버퍼로 만들어 한 번에 write 한다(§15).
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { existsSync, statSync } from "node:fs";
import { writeFile } from "node:fs/promises";

const names = process.argv.slice(2);
if (!names.length) {
  console.error("사용: node scripts/render-gen-final.mjs <name> [<name> ...]");
  process.exit(1);
}

const missing = names.filter((n) => !existsSync(resolve(`scripts/gen-${n}.html`)));
if (missing.length) {
  console.error("gen HTML 없음: " + missing.map((n) => `scripts/gen-${n}.html`).join(", "));
  process.exit(1);
}

const browser = await chromium.launch();
for (const name of names) {
  const src = resolve(`scripts/gen-${name}.html`);
  const out = resolve(`public/images/${name}.webp`);
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(src).href, { waitUntil: "networkidle" });
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
  await page.close();
  const webp = await sharp(png).resize(1200, 675).webp({ quality: 82, effort: 6 }).toBuffer();
  await writeFile(out, webp);
  console.log(`public/images/${name}.webp  1200x675  ${Math.round(statSync(out).size / 1024)}KB`);
}
await browser.close();
console.log(`\n완료 ${names.length}장 — 다음: npm run check:images`);
