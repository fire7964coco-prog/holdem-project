#!/usr/bin/env node
/**
 * GTO 시리즈 «스팟 장면» 이미지 — 누가 어디 앉아 있고, 프리플랍에 무엇이 있었고, 팟·스택이 얼마이며,
 * 누가 먼저 행동하는지를 테이블 위에 한 장으로 보여 준다. 결과 수치는 넣지 않는다(그건 솔버 캡처의 몫).
 *
 * 2026-10-02 de 시범으로 신설(사장님 «이미지는 독자의 이해를 돕는 목적» · 의도적 편차 = EN 대비 본문 이미지 +1).
 * 재료 = 유튜브 폴더 테이블 키트 kit-v1(테이블 PNG · 카드 SVG · 칩 PNG · 딜러 버튼 SVG).
 * 글자는 이미지 AI가 아니라 HTML 레이어로 찍는다(§9-1) — 로케일 사전만 갈면 같은 장면이 나온다.
 *
 *   node scripts/make-gto-spot-scenes.mjs --lang=de                 # 13장 전부
 *   node scripts/make-gto-spot-scenes.mjs --lang=de srp-dry-ace     # 필요한 스팟만
 *   node scripts/make-gto-spot-scenes.mjs --selftest
 * 출력: public/images/gto-<key>-scene-<lang>.webp (1200×675 · q82)
 * 키트 위치는 GTO_SCENE_KIT 환경변수로 바꿀 수 있다.
 */
import { chromium } from 'playwright';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const ROOT = process.cwd();
const KIT = process.env.GTO_SCENE_KIT
  || path.join(os.homedir(), 'Downloads', '유튜브', 'productions', 'shared-assets', 'poker-scene', 'kit-v1');

// 그룹별 조건 — 값의 정본은 docs/gto-solver-series-spec.md §4-B · 원문 계약 §3.
// (open/threeBet = 프리플랍 금액 bb · pot·stack = 플랍 시작 시점)
const GROUPS = {
  srp: { seats: ['BTN', 'BB'], oop: 'BB', ip: 'BTN', folded: ['UTG', 'HJ', 'CO', 'SB'], pot: 5.5, stack: 97.5, line: 'srp' },
  '3bp': { seats: ['BTN', 'BB'], oop: 'BB', ip: 'BTN', folded: ['UTG', 'HJ', 'CO', 'SB'], pot: 22.5, stack: 89, line: '3bp' },
  bvb: { seats: ['SB', 'BB'], oop: 'SB', ip: 'BB', folded: ['UTG', 'HJ', 'CO', 'BTN'], pot: 6, stack: 97, line: 'bvb' },
};
const SPOTS = [
  ['srp-dry-ace', 'srp', 'Ah 7d 2c'], ['srp-dry-king', 'srp', 'Ks 8d 3c'], ['srp-broadway', 'srp', 'Qs Jd Ts'],
  ['srp-middle-connected', 'srp', '9h 8h 7c'], ['srp-monotone', 'srp', 'Qs 9s 2s'], ['srp-paired', 'srp', '6c 6d 3h'],
  ['srp-low-rainbow', 'srp', '6s 5h 2d'], ['3bp-ace-king', '3bp', 'Ad Ks 2h'], ['3bp-dynamic', '3bp', 'Qh Th 7s'],
  ['3bp-low', '3bp', '8d 5c 2s'], ['sb-king-mid', 'bvb', 'Kh Td 6s'], ['sb-connected', 'bvb', '7d 6d 5c'],
  ['sb-paired-ace', 'bvb', 'As Ah 6d'],
].map(([key, group, board]) => ({ key, group, board: board.split(' ') }));

const L10N = {
  de: {
    decimal: ',',
    pot: 'Pot', stack: 'Stack', flop: 'Flop',
    firstToAct: 'handelt zuerst',
    lines: {
      srp: 'Preflop: BTN eröffnet auf 2,5bb · SB foldet · BB callt',
      '3bp': 'Preflop: BTN eröffnet · SB foldet · BB 3-bettet auf 11bb · BTN callt',
      bvb: 'Preflop: alle folden bis zum SB · SB eröffnet auf 3bb · BB callt',
    },
  },
};

const fmt = (n, dec) => String(n).replace('.', dec);
const SUIT_OK = /^[AKQJT2-9][shdc]$/;

function validate() {
  for (const s of SPOTS) {
    assert.equal(s.board.length, 3, `${s.key}: 플랍 3장`);
    for (const c of s.board) assert.match(c, SUIT_OK, `${s.key}: 카드 표기 ${c}`);
    assert.equal(new Set(s.board).size, 3, `${s.key}: 같은 카드 중복`);
    const g = GROUPS[s.group];
    assert.ok(g, `${s.key}: 그룹`);
    assert.ok(g.seats.includes(g.oop) && g.seats.includes(g.ip), `${s.key}: OOP/IP 좌석`);
  }
  // 팟·스택 산수(원문 계약 §3): SRP 2.5+2.5+0.5 · 3BP 11+11+0.5 · BvB 3+3
  assert.equal(2.5 + 2.5 + 0.5, GROUPS.srp.pot); assert.equal(100 - 2.5, GROUPS.srp.stack);
  assert.equal(11 + 11 + 0.5, GROUPS['3bp'].pot); assert.equal(100 - 11, GROUPS['3bp'].stack);
  assert.equal(3 + 3, GROUPS.bvb.pot); assert.equal(100 - 3, GROUPS.bvb.stack);
}

if (process.argv.includes('--selftest')) {
  validate();
  assert.equal(fmt(5.5, ','), '5,5'); assert.equal(fmt(97, ','), '97');
  assert.throws(() => { const b = ['Ah', 'Ah', '2c']; assert.equal(new Set(b).size, 3); });
  console.log('✔ 13스팟 보드 표기·중복·OOP/IP · 팟/스택 산수 · 소수 표기');
  process.exit(0);
}

const langArg = process.argv.find((a) => a.startsWith('--lang='));
const LANG = langArg ? langArg.slice(7) : null;
if (!LANG || !L10N[LANG]) { console.error('--lang=<' + Object.keys(L10N).join('|') + '> 필수'); process.exit(2); }
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const unknown = only.filter((k) => !SPOTS.some((s) => s.key === k));
if (unknown.length) { console.error('알 수 없는 스팟:', unknown.join(', ')); process.exit(2); }
if (!existsSync(KIT)) { console.error('키트 없음:', KIT); process.exit(1); }
validate();
const T = L10N[LANG];
const kit = (p) => pathToFileURL(path.join(KIT, p)).href;

// 좌석 좌표(1200×675 캔버스 · 6max 시계방향 UTG→HJ→CO→BTN→SB→BB)
const SEAT_XY = { UTG: [330, 92], HJ: [870, 92], CO: [1082, 330], BTN: [870, 580], SB: [330, 580], BB: [118, 330] };

function html(spot) {
  const g = GROUPS[spot.group];
  const seat = (pos) => {
    const [x, y] = SEAT_XY[pos];
    const live = g.seats.includes(pos);
    const role = pos === g.oop ? 'OOP' : pos === g.ip ? 'IP' : '';
    const first = pos === g.oop;
    return `<div class="seat ${live ? 'live' : 'out'} ${first ? 'first' : ''}" style="left:${x}px;top:${y}px">
      <div class="pos">${pos}${role ? `<span class="role">${role}</span>` : ''}</div>
      ${live ? `<div class="stk">${fmt(g.stack, T.decimal)} bb</div>` : ''}
      ${first ? `<div class="act">▶ ${T.firstToAct}</div>` : ''}
    </div>`;
  };
  const backs = (pos) => {
    const [x, y] = SEAT_XY[pos];
    const dx = x < 600 ? 120 : -120, dy = y < 337 ? 70 : y > 337 ? -78 : 0;
    const bx = pos === 'BB' ? x + 130 : pos === 'CO' ? x - 130 : x + dx;
    const by = pos === 'BB' || pos === 'CO' ? y : y + dy;
    return `<div class="backs" style="left:${bx}px;top:${by}px"><img src="${kit('cards/back-emerald.svg')}"><img src="${kit('cards/back-emerald.svg')}"></div>`;
  };
  const [bx, by] = SEAT_XY.BTN;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1200px;height:675px;overflow:hidden;font-family:"Segoe UI",Inter,Arial,sans-serif;
    background:radial-gradient(ellipse at 50% 45%,#16382b 0%,#0d2219 60%,#0a1912 100%);color:#e8efe9;position:relative}
  .table{position:absolute;left:80px;top:62px;width:1040px}
  .seat{position:absolute;transform:translate(-50%,-50%);min-width:170px;padding:9px 14px;border-radius:14px;text-align:center;
    background:linear-gradient(#1d2a24,#121b17);border:2px solid #3a4a41;box-shadow:0 6px 18px rgba(0,0,0,.45)}
  .seat.out{opacity:.38;min-width:96px;padding:7px 12px}
  .seat.live{border-color:#c9a24a}
  .seat.first{border-color:#f2c45a;box-shadow:0 0 0 4px rgba(242,196,90,.25),0 0 26px rgba(242,196,90,.45)}
  .pos{font-weight:800;font-size:28px;letter-spacing:.5px;display:flex;gap:8px;justify-content:center;align-items:center}
  .seat.out .pos{font-size:17px;font-weight:700}
  .role{font-size:13px;font-weight:700;padding:2px 7px;border-radius:6px;background:#2b3a32;color:#cfd8d2}
  .stk{font-size:25px;font-weight:700;color:#f2d38a;margin-top:2px}
  .act{position:absolute;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:19px;font-weight:800;color:#1a1408;
    background:#f2c45a;border-radius:8px;padding:3px 12px;top:-36px}
  .backs{position:absolute;transform:translate(-50%,-50%);display:flex}
  .backs img{width:44px;margin-left:-14px;filter:drop-shadow(0 3px 4px rgba(0,0,0,.5))}
  .board{position:absolute;left:600px;top:350px;transform:translate(-50%,-50%);display:flex;gap:12px}
  .board img{width:92px;filter:drop-shadow(0 5px 8px rgba(0,0,0,.45))}
  .board .slot{width:92px;height:129px;border-radius:9px;border:2px dashed rgba(255,255,255,.18)}
  .pot{position:absolute;left:600px;top:236px;transform:translate(-50%,-50%);display:flex;align-items:center;gap:10px;
    padding:7px 18px;border-radius:999px;background:rgba(8,18,13,.82);border:1.5px solid #c9a24a}
  .pot img{width:44px}
  .pot b{font-size:30px;color:#f2d38a}.pot span{font-size:20px;color:#b9c4bd}
  .dealer{position:absolute;width:40px;left:${bx - 150}px;top:${by - 10}px}
  .line{position:absolute;left:24px;top:14px;font-size:19px;color:#c7d1ca;background:rgba(8,18,13,.7);padding:6px 12px;border-radius:8px}
  .wm{position:absolute;right:22px;bottom:14px;font-size:15px;font-weight:700;color:#d4af37}
  </style></head><body>
  <img class="table" src="${kit('table/table-emerald-alpha-v1.png')}">
  <div class="line">${T.lines[g.line]}</div>
  <div class="pot"><img src="${kit('exports/chips/stack-gold-3.png')}"><span>${T.pot}</span><b>${fmt(g.pot, T.decimal)} bb</b></div>
  <div class="board">${spot.board.map((c) => `<img src="${kit(`cards/${c}.svg`)}">`).join('')}<div class="slot"></div><div class="slot"></div></div>
  ${g.seats.map(backs).join('')}
  ${Object.keys(SEAT_XY).map(seat).join('')}
  <img class="dealer" src="${kit('ui/dealer.svg')}">
  <div class="wm">♠ holdemmaster.com</div>
  </body></html>`;
}

const targets = only.length ? SPOTS.filter((s) => only.includes(s.key)) : SPOTS;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });
const shots = [];
for (const spot of targets) {
  // file:// 부품을 쓰려면 페이지 자체도 file://이어야 한다(about:blank의 setContent는 Windows에서 node가 죽었다)
  const tmp = path.join(os.tmpdir(), `gto-scene-${spot.key}.html`);
  writeFileSync(tmp, html(spot), 'utf8');
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
  await page.evaluate(() => Promise.all([...document.images].map((i) => i.decode().catch(() => { throw new Error('이미지 로드 실패: ' + i.src); }))));
  shots.push([spot, await page.screenshot({ type: 'png' })]);
}
await browser.close();
// 🔴 sharp는 브라우저를 닫은 뒤에 불러온다 — 정적 import로 chromium과 같이 올리면 Windows에서 node가
//    출력 없이 0xC0000409로 죽었다(2026-10-02 재현 · 최소 재현에서 «닫은 뒤 동적 import»는 정상).
const sharp = (await import('sharp')).default;
const done = [];
for (const [spot, png] of shots) {
  const out = path.join(ROOT, 'public', 'images', `gto-${spot.key}-scene-${LANG}.webp`);
  await sharp(png).webp({ quality: 82, effort: 6 }).toFile(out);
  const kb = Math.round(readFileSync(out).length / 1024);
  console.log(`✔ ${path.basename(out)} ${kb}KB · ${spot.board.join(' ')}`);
  done.push(spot.key);
}
console.log(`생성 범위 (${done.length}/${targets.length})`);
