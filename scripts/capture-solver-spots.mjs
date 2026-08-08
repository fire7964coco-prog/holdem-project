/**
 * 홀덤마스터 GTO 솔버 «교육 예제» 13개 스팟을 라이브에서 직접 캡처·추출한다.
 * GTO 솔버 스팟 해설 시리즈(13편)의 1차 데이터 소스.
 *
 *   node scripts/capture-solver-spots.mjs            # 전체 13개
 *   node scripts/capture-solver-spots.mjs srp-paired # 일부만
 *
 * 산출물 (기본 out 디렉터리):
 *   <key>-oop.png   첫 액션 플레이어의 «전략 화면»(보드별로 다름 — 히어로 이미지용)
 *   <key>-ip.png    상대 «레인지 화면»(액션 없음)
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

const only = process.argv.slice(2);
const targets = only.length ? SPOTS.filter(s => only.includes(s.key)) : SPOTS;

const extract = (page) => page.evaluate(() => {
  const txt = (e) => (e?.innerText || '').trim();
  const all = [...document.querySelectorAll('div,section')];
  const headerEl = all.filter(e => txt(e).startsWith('← 목록') && txt(e).length < 200)[0];
  const cardsEl = all.filter(e => { const t = txt(e); return t.includes('콤보') && t.length < 140; })[0];
  const panelEl = all.filter(e => { const t = txt(e); return t.includes('드로우 없음') && t.length < 400; })[0];

  const actions = [];
  if (cardsEl) {
    const L = txt(cardsEl).split('\n').map(s => s.trim()).filter(Boolean);
    for (let i = 0; i < L.length; i++) {
      if (/^\d+(\.\d+)?%$/.test(L[i]) && L[i + 1] === '콤보') actions.push({ name: L[i - 1], freq: L[i] });
      else if (/^\d+(\.\d+)?%$/.test(L[i]) && /^\d/.test(L[i + 1] || '')) actions.push({ name: L[i - 1], freq: L[i], combos: L[i + 1] });
    }
  }

  const hands = [], draws = [];
  if (panelEl) {
    const L = txt(panelEl).split('\n').map(s => s.trim()).filter(Boolean);
    let sec = null;
    for (let i = 0; i < L.length; i++) {
      if (L[i] === '핸드') { sec = hands; continue; }
      if (L[i] === '드로우') { sec = draws; continue; }
      if (/^\d+(\.\d+)?%$/.test(L[i]) && sec) sec.push({ label: L[i - 1], pct: L[i] });
    }
  }

  let head = null, total = null;
  for (const tb of document.querySelectorAll('table')) {
    const rows = [...tb.querySelectorAll('tr')];
    const tr = rows.find(r => (r.cells[0]?.innerText || '').trim() === '전체');
    if (tr) { head = [...rows[0].cells].map(c => c.innerText.trim()); total = [...tr.cells].map(c => c.innerText.trim()); break; }
  }

  const sel = [...document.querySelectorAll('select')].find(s => /OOP/.test(s.innerText));
  const players = sel ? [...sel.options].map(o => o.text) : [];

  return { header: txt(headerEl).replace(/\n+/g, ' | '), players, actions, hands, draws, head, total };
});

const rects = (page) => page.evaluate(() => {
  const all = [...document.querySelectorAll('div,section')];
  const t = e => (e?.innerText || '');
  const header = all.filter(e => t(e).trim().startsWith('← 목록') && t(e).length < 200)[0];
  const matrix = all.filter(e => t(e).includes('AKo') && t(e).includes('22') && t(e).length < 1500)[0];
  const right = all.filter(e => t(e).includes('드로우 없음') && t(e).length < 400)[0];
  const r = e => { const b = e.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; };
  return { header: r(header), matrix: r(matrix), right: r(right) };
});

process.on('unhandledRejection', e => { console.error('UNHANDLED', e); process.exit(1); });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1500, height: 1300 }, deviceScaleFactor: 2 });
await page.goto('https://solver.holdemmaster.com', { waitUntil: 'networkidle' });

const hideChrome = () => page.evaluate(() => {
  const bar = [...document.querySelectorAll('div')]
    .filter(e => (e.innerText || '').trim().startsWith('요약') && (e.innerText || '').includes('바 너비') && (e.innerText || '').length < 90).pop();
  if (bar) bar.style.visibility = 'hidden';
  for (const tb of document.querySelectorAll('table')) if ((tb.innerText || '').includes('EQR')) tb.style.visibility = 'hidden';
});
const showChrome = () => page.evaluate(() => {
  for (const e of document.querySelectorAll('[style*="visibility: hidden"]')) e.style.visibility = '';
});

const results = {};
for (const spot of targets) {
  try {
    await page.evaluate(() => {
      const back = [...document.querySelectorAll('button')].find(x => x.innerText.trim() === '← 목록');
      if (back) return back.click();
      [...document.querySelectorAll('button')].find(x => x.innerText.trim().startsWith('교육 예제'))?.click();
    });
    await page.waitForFunction(() => [...document.querySelectorAll('button')].filter(b => b.innerText.trim() === '⚡ 결과 바로 보기').length >= 13, null, { timeout: 15000 });
    await page.waitForTimeout(300);
    await page.evaluate((i) => {
      [...document.querySelectorAll('button')].filter(b => b.innerText.trim() === '⚡ 결과 바로 보기')[i].click();
    }, spot.i);
    await page.waitForFunction(() => document.body.innerText.includes('드로우 없음'), null, { timeout: 25000 });
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
    await page.screenshot({ path: path.join(OUT, `${spot.key}-oop.png`), clip });

    await page.evaluate(() => {
      const sel = [...document.querySelectorAll('select')].find(s => /OOP/.test(s.innerText));
      Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set.call(sel, 'ip');
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await showChrome(); await page.waitForTimeout(300);
    const ip = await extract(page);
    await hideChrome();
    await page.screenshot({ path: path.join(OUT, `${spot.key}-ip.png`), clip });

    results[spot.key] = { oop, ip };
    console.log(`✔ ${spot.key} — ${oop.header.split('|')[1]?.trim() || ''} ${oop.header.split('|')[2]?.trim() || ''}`);
  } catch (e) {
    console.error(`✘ ${spot.key}:`, e.message);
  }
}

writeFileSync(path.join(OUT, 'data.json'), JSON.stringify(results, null, 2), 'utf8');
await browser.close();
console.log('\nsaved →', OUT);
