/**
 * 홀덤마스터 GTO 솔버 «교육 예제» 13개 스팟을 라이브에서 직접 캡처·추출한다.
 * GTO 솔버 스팟 해설 시리즈(13편)의 1차 데이터 소스.
 *
 *   node scripts/capture-solver-spots.mjs            # 전체 13개 (한국어 화면)
 *   node scripts/capture-solver-spots.mjs srp-paired # 일부만
 *   node scripts/capture-solver-spots.mjs --lang=en  # 영어 화면 → <key>-oop-en.png
 *
 * 산출물 (기본 out 디렉터리):
 *   <key>-oop.png   첫 액션 플레이어의 «전략 화면»(보드별로 다름 — 히어로 이미지용)
 *   <key>-ip.png    상대 «레인지 화면»(액션 없음)
 *   ※ --lang=en 이면 파일명에 -en 이 붙고 data.json 은 data-en.json 이 된다
 *   data.json       액션 빈도 · 핸드/드로우 분류 · EQ/EV/EQR (양쪽 다)
 *
 * ── 알아둘 것 ─────────────────────────────────────────────
 * 1. 🔴 2026-08-08 이전에 쓰던 `참고자료/스팟캡처`의 `_ip` 캡처 26장은
 *    **보드가 달라도 전부 같은 그림**이었다(픽셀 차이 0.12~0.21%). 프리플랍 레인지 화면이라
 *    보드별 정보가 0이다. 그걸 "벳으로 가는 핸드"로 설명하면 사실오류다. 이 스크립트로 다시 뽑아라.
 * 2. `document.documentElement.style.zoom`을 쓰면 매트릭스 셀 라벨이 셀보다 커져 글자가 겹친다
 *    (앱이 window.innerWidth로 폰트를 정한다). 고해상도가 필요하면 **deviceScaleFactor**를 써라.
 * 3. `visibility:hidden`으로 UI를 가리면 그 요소는 innerText에서 빠진다 →
 *    셀렉터·데이터 추출이 조용히 망가진다. **추출 → 좌표 측정 → 숨김 → 촬영** 순서를 지킬 것.
 * 4. 「결과 바로 보기」는 플랍 루트 노드만 보여준다. IP의 C벳 전략은 여기 없다
 *    (있는 것은 IP의 레인지와 EQ/EV/EQR뿐). IP 액션을 쓰려면 「직접 계산」이 필요하다.
 */
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = process.env.SOLVER_CAPTURE_OUT || path.join(ROOT, '.solver-captures');
mkdirSync(OUT, { recursive: true });

/** 교육 예제 목록의 «표시 순서» — 원본 마크다운 파일명과 1:1 */
const SPOTS = [
  'srp-dry-ace', 'srp-dry-king', 'srp-broadway', 'srp-middle-connected',
  'srp-monotone', 'srp-paired', 'srp-low-rainbow',
  '3bp-ace-king', '3bp-dynamic', '3bp-low',
  'sb-king-mid', 'sb-connected', 'sb-paired-ace',
].map((key, i) => ({ key, i }));

const args = process.argv.slice(2);
const langArg = args.find(a => a.startsWith('--lang='));
const LANG = langArg ? langArg.split('=')[1] : 'ko';
const only = args.filter(a => !a.startsWith('--'));
const targets = only.length ? SPOTS.filter(s => only.includes(s.key)) : SPOTS;

/**
 * 🔴 화면 문자열은 로케일마다 다르다. 셀렉터가 전부 innerText 기반이라
 *    이 사전을 안 갈면 «조용히 0건»이 된다(에러가 아니라 빈 결과가 나온다).
 *    새 로케일을 추가할 땐 라이브 화면에서 여덟 개를 **직접 읽어서** 채워라.
 */
const L10N = {
  ko: { url: 'https://solver.holdemmaster.com',
        back: '← 목록', spots: '교육 예제', view: '⚡ 결과 바로 보기',
        noDraw: '드로우 없음', combos: '콤보', hands: '핸드', draws: '드로우',
        all: '전체', summary: '요약', barWidth: '바 너비' },
  en: { url: 'https://solver.holdemmaster.com/?lang=en',
        back: '← Back', spots: 'Study Spots', view: '⚡ View results',
        noDraw: 'No Draw', combos: 'combos', hands: 'Hands', draws: 'Draws',
        all: 'All', summary: 'Summary', barWidth: 'Bar Width' },
};
const T = L10N[LANG];
if (!T) { console.error('지원하지 않는 로케일:', LANG, '· 아는 것:', Object.keys(L10N).join(', ')); process.exit(1); }
const SUF = LANG === 'ko' ? '' : '-' + LANG;
console.log('로케일', LANG, '· URL', T.url, '· 파일 접미', SUF || '(없음)');

const extract = (page) => page.evaluate((T) => {
  const txt = (e) => (e?.innerText || '').trim();
  const all = [...document.querySelectorAll('div,section')];
  const headerEl = all.filter(e => txt(e).startsWith(T.back) && txt(e).length < 200)[0];
  const cardsEl = all.filter(e => { const t = txt(e); return t.includes(T.combos) && t.length < 140; })[0];
  const panelEl = all.filter(e => { const t = txt(e); return t.includes(T.noDraw) && t.length < 400; })[0];

  const actions = [];
  if (cardsEl) {
    const L = txt(cardsEl).split('\n').map(s => s.trim()).filter(Boolean);
    for (let i = 0; i < L.length; i++) {
      if (/^\d+(\.\d+)?%$/.test(L[i]) && L[i + 1] === T.combos) actions.push({ name: L[i - 1], freq: L[i] });
      else if (/^\d+(\.\d+)?%$/.test(L[i]) && /^\d/.test(L[i + 1] || '')) actions.push({ name: L[i - 1], freq: L[i], combos: L[i + 1] });
    }
  }

  const hands = [], draws = [];
  if (panelEl) {
    const L = txt(panelEl).split('\n').map(s => s.trim()).filter(Boolean);
    let sec = null;
    for (let i = 0; i < L.length; i++) {
      if (L[i] === T.hands) { sec = hands; continue; }
      if (L[i] === T.draws) { sec = draws; continue; }
      if (/^\d+(\.\d+)?%$/.test(L[i]) && sec) sec.push({ label: L[i - 1], pct: L[i] });
    }
  }

  let head = null, total = null;
  for (const tb of document.querySelectorAll('table')) {
    const rows = [...tb.querySelectorAll('tr')];
    const tr = rows.find(r => (r.cells[0]?.innerText || '').trim() === T.all);
    if (tr) { head = [...rows[0].cells].map(c => c.innerText.trim()); total = [...tr.cells].map(c => c.innerText.trim()); break; }
  }

  const sel = [...document.querySelectorAll('select')].find(s => /OOP/.test(s.innerText));
  const players = sel ? [...sel.options].map(o => o.text) : [];

  return { header: txt(headerEl).replace(/\n+/g, ' | '), players, actions, hands, draws, head, total };
}, T);

const rects = (page) => page.evaluate((T) => {
  const all = [...document.querySelectorAll('div,section')];
  const t = e => (e?.innerText || '');
  const header = all.filter(e => t(e).trim().startsWith(T.back) && t(e).length < 200)[0];
  const matrix = all.filter(e => t(e).includes('AKo') && t(e).includes('22') && t(e).length < 1500)[0];
  const right = all.filter(e => t(e).includes(T.noDraw) && t(e).length < 400)[0];
  const r = e => { const b = e.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; };
  return { header: r(header), matrix: r(matrix), right: r(right) };
}, T);

process.on('unhandledRejection', e => { console.error('UNHANDLED', e); process.exit(1); });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1500, height: 1300 }, deviceScaleFactor: 2 });
await page.goto(T.url, { waitUntil: 'networkidle' });

const hideChrome = () => page.evaluate((T) => {
  const bar = [...document.querySelectorAll('div')]
    .filter(e => (e.innerText || '').trim().startsWith(T.summary) && (e.innerText || '').includes(T.barWidth) && (e.innerText || '').length < 90).pop();
  if (bar) bar.style.visibility = 'hidden';
  for (const tb of document.querySelectorAll('table')) if ((tb.innerText || '').includes('EQR')) tb.style.visibility = 'hidden';
}, T);
const showChrome = () => page.evaluate(() => {
  for (const e of document.querySelectorAll('[style*="visibility: hidden"]')) e.style.visibility = '';
});

const results = {};
for (const spot of targets) {
  try {
    await page.evaluate((T) => {
      const back = [...document.querySelectorAll('button')].find(x => x.innerText.trim() === T.back);
      if (back) return back.click();
      [...document.querySelectorAll('button')].find(x => x.innerText.trim().startsWith(T.spots))?.click();
    }, T);
    await page.waitForFunction((v) => [...document.querySelectorAll('button')].filter(b => b.innerText.trim() === v).length >= 13, T.view, { timeout: 15000 });
    await page.waitForTimeout(300);
    await page.evaluate(({ i, v }) => {
      [...document.querySelectorAll('button')].filter(b => b.innerText.trim() === v)[i].click();
    }, { i: spot.i, v: T.view });
    await page.waitForFunction((v) => document.body.innerText.includes(v), T.noDraw, { timeout: 25000 });
    await page.waitForTimeout(700);

    await showChrome(); await page.waitForTimeout(200);
    const oop = await extract(page);
    const R = await rects(page);          // ⚠ hideChrome «전에» 재야 한다 (주석 3번)
    await hideChrome();
    const clip = {
      x: Math.round(R.header.x) - 6,
      y: Math.round(R.header.y) - 8,
      width: Math.round(R.right.x + R.right.w - R.header.x) + 12,
      height: Math.round(R.matrix.y + R.matrix.h - R.header.y) + 16,
    };
    await page.screenshot({ path: path.join(OUT, `${spot.key}-oop${SUF}.png`), clip });

    await page.evaluate(() => {
      const sel = [...document.querySelectorAll('select')].find(s => /OOP/.test(s.innerText));
      Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(sel, 'ip');
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await showChrome(); await page.waitForTimeout(300);
    const ip = await extract(page);
    await hideChrome();
    await page.screenshot({ path: path.join(OUT, `${spot.key}-ip${SUF}.png`), clip });

    results[spot.key] = { oop, ip };
    console.log(`✔ ${spot.key} — ${oop.header.split('|')[1]?.trim() || ''} ${oop.header.split('|')[2]?.trim() || ''}`);
  } catch (e) {
    console.error(`✘ ${spot.key}:`, e.message);
  }
}

writeFileSync(path.join(OUT, `data${SUF}.json`), JSON.stringify(results, null, 2), 'utf8');
await browser.close();
console.log('\nsaved →', OUT);
