/**
 * 프리플랍 핸드 4등급 카드 인포그래픽 (when-to-fold-preflop-holdem용)
 *
 * 왜 다시 만드나: 기존 blog-fold-hand-tiers.webp는 **3티어**만 보여주는데
 * 본문과 캡션은 **4등급**을 말한다(2026-08-02 검수에서 발견). 게다가 명칭이
 * 본문 "등급" / 이미지 "티어" / 형제 글 "Tier"로 셋이 갈려 있었다 → 본문 기준 "등급"으로 통일.
 *
 * 카드는 본문 4등급 목록에서 그대로 가져온다(임의 생성 금지 — §13).
 *   1등급 AA·KK·AKs / 2등급 TT·AQs·KQs / 3등급 77·ATo·JTs / 4등급 55·A9o·K9o
 * 각 칸은 서로 다른 판의 예시라 칸끼리 카드가 겹쳐도 무방하다(캡션에 명시).
 *
 * 실행: node scripts/gen-fold-hand-tiers-4.mjs
 */
import { writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const RED = '#C0392B';
const BLACK = '#1A1A1A';
const S = { s: ['♠', BLACK], h: ['♥', RED], d: ['♦', RED], c: ['♣', BLACK] };

const TIERS = [
  { n: '1등급', desc: '프리미엄 · 어디서든 레이즈', color: '#C9A227', bg: 'rgba(201,162,39,0.13)',
    hands: [[['A', 's'], ['A', 'h']], [['K', 's'], ['K', 'd']], [['A', 'd'], ['K', 'd']]] },
  { n: '2등급', desc: '강한 핸드 · 대부분 포지션에서 오픈', color: '#2E7D46', bg: 'rgba(46,125,70,0.15)',
    hands: [[['T', 's'], ['T', 'h']], [['A', 'c'], ['Q', 'c']], [['K', 'h'], ['Q', 'h']]] },
  { n: '3등급', desc: '포지션 의존 · 뒷자리일수록 가치↑', color: '#B7791F', bg: 'rgba(183,121,31,0.13)',
    hands: [[['7', 's'], ['7', 'd']], [['A', 'c'], ['T', 'd']], [['J', 'h'], ['T', 'h']]] },
  { n: '4등급', desc: '초보는 폴드', color: '#6B7280', bg: 'rgba(107,114,128,0.13)',
    hands: [[['5', 's'], ['5', 'c']], [['A', 'd'], ['9', 'c']], [['K', 's'], ['9', 'd']]] },
];

const card = ([r, su]) => {
  const [sym, col] = S[su];
  return `<div class="cd"><span class="rk" style="color:${col}">${r}</span><span class="su" style="color:${col}">${sym}</span></div>`;
};
const rows = TIERS.map((t) => `
  <div class="row">
    <div class="lbl"><div class="tn" style="color:${t.color}">${t.n}</div><div class="td">${t.desc}</div></div>
    ${t.hands.map((h) => `<div class="cell" style="background:${t.bg};border-color:${t.color}">${h.map(card).join('')}</div>`).join('')}
  </div>`).join('');

const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#0B1F17}
.stage{position:relative;width:1200px;height:675px;overflow:hidden;padding:26px 54px 30px;
 background:radial-gradient(ellipse 900px 500px at 50% -10%,rgba(46,125,70,.26),rgba(46,125,70,0) 65%),linear-gradient(160deg,#0B1F17 0%,#13291D 100%);
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;display:flex;flex-direction:column}
h1{color:#C9A227;font-size:33px;font-weight:800;text-align:center;text-shadow:0 2px 12px rgba(0,0,0,.45);margin-bottom:3px}
.sub{color:#A9B5A6;font-size:14px;font-weight:600;text-align:center;margin-bottom:16px}
.row{display:flex;align-items:center;gap:16px;margin-bottom:11px}
.lbl{width:236px;flex:none;text-align:right;padding-right:6px}
.tn{font-size:21px;font-weight:800;line-height:1.15}
.td{color:#A9B5A6;font-size:12.5px;font-weight:600;margin-top:2px}
.cell{flex:1;display:flex;gap:9px;justify-content:center;align-items:center;padding:9px 0;border:1.5px solid;border-radius:12px}
.cd{width:56px;height:78px;background:#FDFBF4;border-radius:7px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.35)}
.rk{font-size:26px;font-weight:800;line-height:1}
.su{font-size:21px;line-height:1;margin-top:2px}
.note{color:#8A968C;font-size:12.5px;text-align:center;margin-top:6px}
.wordmark{position:absolute;right:44px;bottom:16px;color:#C9A227;font-size:14px;font-weight:800;letter-spacing:.04em;opacity:.9}
</style></head><body>
<div class="stage">
  <h1>프리플랍 핸드 4등급 — 어디까지 잡고 갈까</h1>
  <div class="sub">위로 갈수록 강하다 · 아래로 갈수록 과감하게 버린다</div>
  ${rows}
  <div class="note">각 칸은 서로 다른 판의 예시 핸드입니다</div>
  <div class="wordmark">♠HoldemMaster</div>
</div></body></html>`;

const tmpHtml = 'scripts/gen-fold-hand-tiers-4.html';
const tmpPng = 'scripts/_fold-tiers.png';
writeFileSync(tmpHtml, html);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
await page.goto('file://' + process.cwd().replace(/\\/g, '/') + '/' + tmpHtml);
await page.waitForTimeout(400);
await page.screenshot({ path: tmpPng, clip: { x: 0, y: 0, width: 1200, height: 675 } });
await browser.close();

const out = 'public/images/blog-fold-hand-tiers.webp';
await sharp(readFileSync(tmpPng)).resize(1200, 675).webp({ quality: 65, effort: 6 }).toFile(out);
unlinkSync(tmpPng);
console.log(`생성: ${out} (${(readFileSync(out).length / 1024).toFixed(1)}KB)`);
