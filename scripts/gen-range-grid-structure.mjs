/**
 * 13×13 레인지 차트 "읽는 법" 그리드 생성기 (holdem-range-meaning §차트 섹션용)
 *
 * 형제 글(holdem-starting-hand-range)의 액션 차트(레이즈/상황/폴드)와 **다른 목적**이다.
 * 이 그림은 그리드의 **구조**를 가르친다 — 대각선=포켓 페어 / 위=수딧 / 아래=오프수딧.
 * (클러스터 글끼리 같은 이미지를 쓰지 않는다는 규칙에 따라 새로 만든다.)
 *
 * 169칸 라벨은 손으로 적지 않고 규칙으로 생성한다(오타·§13 사고 방지).
 *   i==j → 포켓 페어 / i<j → 수딧(높은랭크+낮은랭크+s) / i>j → 오프수딧(+o)
 *
 * 실행: node scripts/gen-range-grid-structure.mjs
 *   → public/images/holdem-range-grid-structure.webp (1200×675, quality 65)
 */
import { writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const R = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const cells = [];
for (let i = 0; i < 13; i++) {
  cells.push(`<div class="ax">${R[i]}</div>`);
  for (let j = 0; j < 13; j++) {
    if (i === j) cells.push(`<div class="c p">${R[i]}${R[i]}</div>`);
    else if (i < j) cells.push(`<div class="c s">${R[i]}${R[j]}s</div>`);
    else cells.push(`<div class="c o">${R[j]}${R[i]}o</div>`);
  }
}
const header = ['<div class="ax"></div>', ...R.map((r) => `<div class="ax">${r}</div>`)].join('');

const html = `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><style>
* { margin:0; padding:0; box-sizing:border-box; }
html,body { background:#0B1F17; }
.stage {
  position:relative; width:1200px; height:675px; overflow:hidden; padding:26px 44px 30px;
  background:
    radial-gradient(ellipse 900px 500px at 50% -10%, rgba(46,125,70,0.26), rgba(46,125,70,0) 65%),
    linear-gradient(160deg,#0B1F17 0%,#13291D 100%);
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  display:flex; flex-direction:column; align-items:center;
}
h1 { color:#C9A227; font-size:34px; font-weight:800; text-align:center; text-shadow:0 2px 12px rgba(0,0,0,.45); margin-bottom:4px; }
.sub { color:#A9B5A6; font-size:15px; font-weight:600; margin-bottom:14px; }
.wordmark { position:absolute; right:44px; bottom:18px; color:#C9A227; font-size:15px; font-weight:800; letter-spacing:.04em; opacity:.9; }
.chart-wrap { display:flex; align-items:center; gap:40px; }
.grid { display:grid; grid-template-columns:repeat(14, 36px); grid-auto-rows:36px; gap:2px; }
.ax { display:flex; align-items:center; justify-content:center; color:#C9A227; font-size:15px; font-weight:800; }
.c { display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; border-radius:4px; }
.p { background:#C9A227; color:#0B1F17; }
.s { background:#2E7D46; color:#EAF3EC; }
.o { background:#37423A; color:#A9B5A6; }
.legend { display:flex; flex-direction:column; gap:16px; background:rgba(0,0,0,.28); border:2px solid rgba(201,162,39,.55); border-radius:16px; padding:24px 26px; }
.li { display:flex; align-items:center; gap:13px; }
.sw { width:28px; height:28px; border-radius:6px; flex:none; }
.sw.p { background:#C9A227; } .sw.s { background:#2E7D46; } .sw.o { background:#37423A; }
.lt { color:#F2EEE3; font-size:18px; font-weight:700; white-space:nowrap; }
.ln { color:#A9B5A6; font-size:13px; font-weight:600; }
</style></head><body>
<div class="stage">
  <h1>레인지 차트 보는 법</h1>
  <div class="sub">169칸의 자리마다 뜻이 정해져 있다</div>
  <div class="chart-wrap">
    <div class="grid">${header}${cells.join('')}</div>
    <div class="legend">
      <div class="li"><div class="sw p"></div><div><div class="lt">대각선 = 포켓 페어</div><div class="ln">AA · KK · 22</div></div></div>
      <div class="li"><div class="sw s"></div><div><div class="lt">위쪽 = 수딧</div><div class="ln">AKs · 같은 무늬</div></div></div>
      <div class="li"><div class="sw o"></div><div><div class="lt">아래쪽 = 오프수딧</div><div class="ln">AKo · 다른 무늬</div></div></div>
    </div>
  </div>
  <div class="wordmark">♠HoldemMaster</div>
</div></body></html>`;

const tmpHtml = 'scripts/gen-range-grid-structure.html';
const tmpPng = 'scripts/_range-grid.png';
writeFileSync(tmpHtml, html);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
await page.goto('file://' + process.cwd().replace(/\\/g, '/') + '/' + tmpHtml);
await page.waitForTimeout(400);
await page.screenshot({ path: tmpPng, clip: { x: 0, y: 0, width: 1200, height: 675 } });
await browser.close();

const out = 'public/images/holdem-range-grid-structure.webp';
const buf = readFileSync(tmpPng);
await sharp(buf).resize(1200, 675).webp({ quality: 65, effort: 6 }).toFile(out);
unlinkSync(tmpPng);
const kb = (readFileSync(out).length / 1024).toFixed(1);
console.log(`생성: ${out} (${kb}KB) · 169칸 규칙 생성`);
if (+kb > 60) console.log('⚠ 60KB 초과 — quality를 낮춰 재압축 필요');
