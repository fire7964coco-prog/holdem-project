/**
 * capture-solver-spots.mjs가 뽑은 data.json으로 «레인지 구성 비교» 인포그래픽을 만든다.
 * 두 플레이어의 핸드 등급 분포를 나란히 놓아, 그 보드에서 누가 왜 유리한지를 한 장으로 보여준다.
 *
 *   node scripts/capture-solver-spots.mjs
 *   node scripts/make-solver-range-charts.mjs        → <key>-ranges.png (1200×675 @2x)
 *
 * 글자가 들어가는 그림이므로 이미지 생성 AI를 쓰지 않는다(§9-1: 철자 깨짐). HTML+Playwright다.
 * 문구는 이 파일이 만들고 숫자는 솔버에서 온다 — 오탈자·수치 조작의 여지가 없다.
 */
import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = process.env.SOLVER_CAPTURE_OUT || path.join(ROOT, '.solver-captures');
const data = JSON.parse(readFileSync(path.join(DIR, 'data.json'), 'utf8'));

const SUIT = { '♠': '#e2e8f0', '♥': '#f87171', '♦': '#60a5fa', '♣': '#4ade80' };
const num = (s) => parseFloat(String(s).replace('%', '')) || 0;

/** "OOP (BB (콜러))" → "BB · 콜러 (OOP)" */
const shortLabel = (s, fallback) => {
  const m = /^(OOP|IP)\s*\((.+?)\s*\((.+?)\)\)$/.exec(s || '');
  return m ? `${m[2]} · ${m[3]} (${m[1]})` : fallback;
};

const boardHtml = (board) => (board.match(/[AKQJT2-9][♠♥♦♣]/g) || [])
  .map(c => `<span class="card"><b style="color:${SUIT[c[1]]}">${c[0]}</b><i style="color:${SUIT[c[1]]}">${c[1]}</i></span>`).join('');

/** 두 플레이어의 분류 목록을 «순서를 지키며» 합친다 (한쪽에만 있는 등급은 0%로) */
function mergeRows(oop, ip) {
  const a = ip.hands.map(h => h.label), b = oop.hands.map(h => h.label);
  const order = []; const push = l => { if (!order.includes(l)) order.push(l); };
  let bi = 0;
  for (const l of a) {
    while (bi < b.length && !a.includes(b[bi])) push(b[bi++]);
    if (bi < b.length && b[bi] === l) bi++;
    push(l);
  }
  while (bi < b.length) push(b[bi++]);
  const get = (arr, l) => { const f = arr.find(x => x.label === l); return f ? num(f.pct) : 0; };
  return order.map(l => ({ label: l, x: get(oop.hands, l), y: get(ip.hands, l) }));
}

function html(d) {
  const [, title, board] = d.oop.header.split('|').map(s => s.trim());
  const nameX = shortLabel(d.oop.players?.[0], 'OOP');
  const nameY = shortLabel(d.oop.players?.[1], 'IP');
  const rows = mergeRows(d.oop, d.ip);
  const max = Math.max(...rows.flatMap(r => [r.x, r.y]), 10);
  const rowH = Math.min(58, Math.floor(428 / rows.length));
  const barH = Math.max(7, Math.round(rowH * 0.30));

  const body = rows.map(r => `
    <div class="row" style="height:${rowH}px"><div class="lab">${r.label}</div><div class="bars">
      <div class="bl"><div class="bar a" style="width:${(r.x / max * 100).toFixed(1)}%;height:${barH}px"></div><span class="v va">${r.x.toFixed(1)}%</span></div>
      <div class="bl"><div class="bar b" style="width:${(r.y / max * 100).toFixed(1)}%;height:${barH}px"></div><span class="v vb">${r.y.toFixed(1)}%</span></div>
    </div></div>`).join('');

  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1200px;height:675px;overflow:hidden;color:#e8e6df;
       background:radial-gradient(120% 100% at 15% 0%,#16211b 0%,#0d1310 60%,#0a0f0c 100%);
       font-family:'Pretendard','Malgun Gothic','Segoe UI',sans-serif}
  .wrap{padding:34px 44px 0}
  .top{display:flex;align-items:center;gap:16px;border-bottom:1px solid rgba(212,175,55,.3);padding-bottom:16px}
  h1{font-size:31px;font-weight:800;letter-spacing:-.5px}
  .board{display:flex;gap:7px;margin-left:auto}
  .card{display:inline-flex;align-items:center;background:#111814;border:1px solid #2b3a32;border-radius:7px;padding:5px 10px;font-size:24px;font-weight:800;line-height:1}
  .card i{font-style:normal;margin-left:2px}
  .legend{display:flex;gap:22px;margin:15px 0 6px;font-size:16px;color:#b9c4bd;align-items:center}
  .dot{display:inline-block;width:13px;height:13px;border-radius:3px;margin-right:7px;vertical-align:-1px}
  .rows{height:428px;display:flex;flex-direction:column;justify-content:center}
  .row{display:flex;align-items:center;gap:16px}
  .lab{width:200px;font-size:17px;color:#d7dbd5;text-align:right;flex:none}
  .bars{flex:1;display:flex;flex-direction:column;justify-content:center;gap:4px}
  .bl{display:flex;align-items:center;gap:9px}
  .bar{border-radius:3px;min-width:2px}
  .a{background:linear-gradient(90deg,#2f9e6b,#4ade80)}
  .b{background:linear-gradient(90deg,#a9832a,#e7c15c)}
  .v{font-size:14px;font-weight:700;font-variant-numeric:tabular-nums}
  .va{color:#7fe0a8}.vb{color:#eccb72}
  .foot{position:absolute;left:44px;right:44px;bottom:24px;display:flex;align-items:center;gap:26px;
        border-top:1px solid rgba(212,175,55,.3);padding-top:14px;font-size:16px;color:#c3ccc5}
  .foot b{color:#f0ead8}
  .mark{margin-left:auto;font-size:15px;color:#d4af37;font-weight:700;opacity:.9}
  </style></head><body><div class="wrap">
    <div class="top"><h1>레인지 구성 — ${title}</h1><div class="board">${boardHtml(board)}</div></div>
    <div class="legend">
      <span><i class="dot" style="background:#4ade80"></i>${nameX}</span>
      <span><i class="dot" style="background:#e7c15c"></i>${nameY}</span>
      <span style="margin-left:auto;color:#8b968f;font-size:14px">홀덤마스터 GTO 솔버 계산값 · 레이크 미고려</span>
    </div>
    <div class="rows">${body}</div>
    <div class="foot">
      <span>에퀴티 <b>${d.oop.total[3]}</b> · <b>${d.ip.total[3]}</b></span>
      <span>에퀴티 실현율 <b>${d.oop.total[5]}</b> · <b>${d.ip.total[5]}</b></span>
      <span class="mark">♠ holdemmaster.com</span>
    </div>
  </div></body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
for (const [key, d] of Object.entries(data)) {
  if (!d.oop?.total || !d.ip?.total) { console.error('✘', key, '데이터 불완전 — 다시 캡처할 것'); continue; }
  await page.setContent(html(d), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(DIR, `${key}-ranges.png`) });
  console.log('✔', key);
}
await browser.close();
