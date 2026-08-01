/**
 * 홀덤 족보 순위 10단계 정리표 v4 (holdem-hand-rankings 본문 첫 이미지 = LCP)
 *
 * 왜 다시 만드나 (2026-08-01 검수):
 *  - 기존 holdem-jokbo-rankings-v3.webp는 **820×780**으로 규격(1200×675)에서 벗어나 있고,
 *    하단 "holdemmaster.com — 홀덤족보 순위 10가지 완전 정리표" 줄이 **캔버스 끝에 반쯤 잘려** 있다(§9-1 잘림).
 *  - 설명문이 영어였다("A, K, Q, J, 10 in same suit."). 이 이미지는 KO 글에서만 쓰므로 한국어가 맞다.
 *  - 확률을 함께 실어 본문 표(7장 기준)와 같은 값을 그림에서도 볼 수 있게 한다.
 *
 * ★카드 10줄은 v3와 **완전히 동일**하다. 2026-07-31에 사장님이 직접 육안 검증한 조합이라
 *   임의로 바꾸지 않는다(§13). 바뀐 것은 캔버스 크기·설명 언어·확률 표기·워터마크뿐이다.
 *
 * ★확률은 **7장 기준**이다(분모 C(52,7)=133,784,560). 본문 itemList·확률표와 같은 값이어야 한다.
 *   5장(교과서) 값을 섞으면 이 글의 훅("투페어가 하이카드보다 흔하다")이 무너진다.
 *
 * 실행: node scripts/gen-jokbo-rankings-table.mjs
 */
import { writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const RED = '#C0392B';
const BLACK = '#1A1A1A';
const SUIT = { s: ['♠', BLACK], h: ['♥', RED], d: ['♦', RED], c: ['♣', BLACK] };
const GOLD = '#C9A227';

/** v3와 동일한 카드 구성 (변경 금지) + 7장 기준 확률 */
const ROWS = [
  { n: 1, name: '로열 플러시', desc: '같은 무늬 A K Q J 10', pct: '0.0032%', cards: ['Ah', 'Kh', 'Qh', 'Jh', '10h'] },
  { n: 2, name: '스트레이트 플러시', desc: '같은 무늬 연속 5장', pct: '0.0279%', cards: ['9d', '8d', '7d', '6d', '5d'] },
  { n: 3, name: '포카드', desc: '같은 숫자 4장', pct: '0.168%', cards: ['8c', '8d', '8h', '8s', 'Kd'] },
  { n: 4, name: '풀하우스', desc: '트리플 + 원페어', pct: '2.60%', cards: ['Qc', 'Qd', 'Qh', '5s', '5c'] },
  { n: 5, name: '플러시', desc: '같은 무늬 5장', pct: '3.03%', cards: ['Ah', 'Jh', '8h', '6h', '2h'] },
  { n: 6, name: '스트레이트', desc: '무늬 무관 연속 5장', pct: '4.62%', cards: ['7c', '6d', '5s', '4c', '3s'] },
  { n: 7, name: '트리플', desc: '같은 숫자 3장', pct: '4.83%', cards: ['Jc', 'Jd', 'Jh', 'Ac', '4s'] },
  { n: 8, name: '투페어', desc: '페어 2쌍', pct: '23.5%', cards: ['10s', '10h', '8c', '8s', 'As'] },
  { n: 9, name: '원페어', desc: '같은 숫자 2장', pct: '43.8%', cards: ['Ks', 'Kc', '9d', '6s', '2s'] },
  { n: 10, name: '하이카드', desc: '아무 조합 없음', pct: '17.4%', cards: ['Ad', 'Qs', '9c', '5d', '3s'] },
];

const card = (code) => {
  const r = code.slice(0, -1);
  const [sym, col] = SUIT[code.slice(-1)];
  return `<div class="cd"><span class="rk" style="color:${col}">${r}</span><span class="su" style="color:${col}">${sym}</span></div>`;
};

const rowHtml = (r) => `
<div class="row">
  <div class="badge">${r.n}</div>
  <div class="meta">
    <div class="nm">${r.name}</div>
    <div class="ds">${r.desc}</div>
  </div>
  <div class="cards">${r.cards.map(card).join('')}</div>
  <div class="pct">${r.pct}</div>
</div>`;

const col = (rows) => `<div class="col">${rows.map(rowHtml).join('')}</div>`;

const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#0B1F17}
.stage{position:relative;width:1200px;height:675px;overflow:hidden;padding:20px 26px 34px;
 background:radial-gradient(ellipse 980px 520px at 50% -10%,rgba(46,125,70,.26),rgba(46,125,70,0) 66%),linear-gradient(160deg,#0B1F17 0%,#13291D 100%);
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Malgun Gothic",Helvetica,Arial,sans-serif;
 display:flex;flex-direction:column;align-items:center}
h1{color:${GOLD};font-size:29px;font-weight:800;text-align:center;text-shadow:0 2px 12px rgba(0,0,0,.45);line-height:1.2}
.sub{color:#A9B5A6;font-size:13px;font-weight:600;margin:4px 0 12px}
.grid{display:flex;gap:20px;width:100%;flex:1;padding-bottom:8px}
.col{flex:1;display:flex;flex-direction:column;justify-content:space-between}
.row{display:flex;align-items:center;gap:11px;padding:9px 12px;border-radius:12px;
 background:rgba(255,255,255,.035);border:1px solid rgba(201,162,39,.16)}
.badge{width:29px;height:29px;flex:none;border-radius:50%;background:rgba(201,162,39,.9);color:#0B1F17;
 font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center}
.meta{width:130px;flex:none}
.nm{color:#F2EFE6;font-size:16px;font-weight:800;line-height:1.15;word-break:keep-all}
.ds{color:#93A08F;font-size:11.5px;font-weight:600;margin-top:2px;word-break:keep-all}
.cards{display:flex;gap:5px;flex:1;justify-content:center}
.cd{width:44px;height:62px;background:#FDFBF4;border-radius:6px;display:flex;flex-direction:column;
 align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0,0,0,.35)}
.rk{font-size:20px;font-weight:800;line-height:1}
.su{font-size:16px;line-height:1;margin-top:1px}
.pct{width:60px;flex:none;text-align:right;color:${GOLD};font-size:15px;font-weight:800}
.foot{position:absolute;left:0;right:0;bottom:11px;text-align:center;color:#8A968C;font-size:11.5px;font-weight:600}
.wordmark{position:absolute;right:26px;bottom:10px;color:${GOLD};font-size:13px;font-weight:800;letter-spacing:.03em;opacity:.9}
</style></head><body>
<div class="stage">
  <h1>홀덤 족보 순위 10단계</h1>
  <div class="sub">1위(강함) → 10위(약함) · 확률은 홀덤 7장 기준 · 카드는 예시</div>
  <div class="grid">${col(ROWS.slice(0, 5))}${col(ROWS.slice(5))}</div>
  <div class="foot">만들기 어려운 순서가 그대로 강한 순서다</div>
  <div class="wordmark">♠ holdemmaster.com</div>
</div></body></html>`;

const tmpHtml = 'scripts/_jokbo-tmp.html';
const tmpPng = 'scripts/_jokbo-tmp.png';
writeFileSync(tmpHtml, html);
const browser = await chromium.launch();
const p = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
await p.goto('file://' + process.cwd().replace(/\\/g, '/') + '/' + tmpHtml);
await p.waitForTimeout(400);
await p.screenshot({ path: tmpPng, clip: { x: 0, y: 0, width: 1200, height: 675 } });
await browser.close();

const out = 'public/images/holdem-jokbo-rankings-v4.webp';
await sharp(readFileSync(tmpPng)).resize(1200, 675).webp({ quality: 70, effort: 6 }).toFile(out);
unlinkSync(tmpPng);
unlinkSync(tmpHtml);
console.log(`생성: ${out} (${(readFileSync(out).length / 1024).toFixed(1)}KB)`);
