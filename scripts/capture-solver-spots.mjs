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

/** 교육 예제 목록의 «표시 순서» — 원본 마크다운 파일명과 1:1 */
const SPOTS = [
  'srp-dry-ace', 'srp-dry-king', 'srp-broadway', 'srp-middle-connected',
  'srp-monotone', 'srp-paired', 'srp-low-rainbow',
  '3bp-ace-king', '3bp-dynamic', '3bp-low',
  'sb-king-mid', 'sb-connected', 'sb-paired-ace',
].map((key, i) => ({ key, i }));

const args = process.argv.slice(2);

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
  ja: { url: 'https://solver.holdemmaster.com/?lang=ja',
        back: '← 一覧へ', spots: '学習スポット', view: '⚡ 結果をすぐ見る',
        noDraw: 'ドローなし', combos: 'コンボ', hands: 'ハンド', draws: 'ドロー',
        all: 'すべて', summary: 'サマリー', barWidth: 'バーの幅' },   // 2026-09-02 라이브 ?lang=ja 화면에서 직접 읽음
  es: { url: 'https://solver.holdemmaster.com/?lang=es',
        back: '← Lista', spots: 'Spots de estudio', view: '⚡ Ver resultados',
        noDraw: 'Sin proyecto', combos: 'combos', hands: 'Manos', draws: 'Proyectos',
        all: 'Todo', summary: 'Resumen', barWidth: 'Ancho de barra' },   // 2026-09-02 라이브 ?lang=es 화면에서 직접 읽음(Playwright innerText)
  pt: { url: 'https://solver.holdemmaster.com/?lang=pt',
        back: '← Lista', spots: 'Spots de estudo', view: '⚡ Ver resultados',
        noDraw: 'Sem draw', combos: 'combos', hands: 'Mãos', draws: 'Draws',
        all: 'Tudo', summary: 'Resumo', barWidth: 'Largura da barra' }, // 2026-09-15 라이브 PT DOM 축어 · 결과 숫자도 소수 쉼표
  id: { url: 'https://solver.holdemmaster.com/?lang=id',
        back: '← Kembali', spots: 'Spot belajar', view: '⚡ Lihat hasil',
        noDraw: 'Tanpa draw', combos: 'combo', hands: 'Hand', draws: 'Draw',
        all: 'Semua', summary: 'Ringkasan', barWidth: 'Lebar batang:' }, // 2026-09-15 라이브 ID DOM 축어 · 결과 숫자도 소수 쉼표
  ms: { url: 'https://solver.holdemmaster.com/?lang=ms',
        back: '← Kembali', spots: 'Spot belajar', view: '⚡ Lihat hasil',
        noDraw: 'Tiada draw', combos: 'combo', hands: 'Tangan', draws: 'Draw',
        all: 'Semua', summary: 'Ringkasan', barWidth: 'Lebar bar:' }, // 2026-09-15 라이브 MS DOM 축어 · 결과 숫자는 소수점
  hi: { url: 'https://solver.holdemmaster.com/?lang=hi',
        back: '← वापस', spots: 'अभ्यास स्पॉट', view: '⚡ परिणाम देखें',
        noDraw: 'Draw नहीं', combos: 'combos', hands: 'हैंड', draws: 'Draws',
        all: 'सभी', summary: 'सारांश', barWidth: 'बार की चौड़ाई:' }, // 2026-09-15 라이브 HI DOM 축어 · 결과 숫자는 소수점
  zh: { url: 'https://solver.holdemmaster.com/?lang=zh',
        back: '← 列表', spots: '教学案例', view: '⚡ 直接看结果',
        noDraw: '无听牌', combos: '组合', hands: '手牌', draws: '听牌',
        all: '全部', summary: '汇总', barWidth: '柱宽' },   // 2026-09-03 라이브 ?lang=zh 화면에서 직접 읽음(Playwright innerText)
  'zh-hant': { url: 'https://solver.holdemmaster.com/?lang=zh-hant',
        back: '← 列表', spots: '教學案例', view: '⚡ 直接看結果',
        noDraw: '無聽牌', combos: '組合', hands: '手牌', draws: '聽牌',
        all: '全部', summary: '彙總', barWidth: '長條寬' },   // 2026-09-03 라이브 ?lang=zh-hant 화면에서 직접 읽음(Playwright innerText · 간체와 다른 자리: 彙總·長條寬·無聽牌)
};
function parseCaptureArgs(argv) {
  const unknownOptions = argv.filter(a => a.startsWith('--') && a !== '--selftest' && !a.startsWith('--lang='));
  if (unknownOptions.length) throw new Error(`지원하지 않는 옵션: ${unknownOptions.join(', ')}`);
  const langs = argv.filter(a => a.startsWith('--lang='));
  if (langs.length > 1) throw new Error('--lang은 한 번만 지정한다');
  const lang = langs.length ? langs[0].slice('--lang='.length) : 'ko';
  if (!Object.hasOwn(L10N, lang)) throw new Error(`빈 값 또는 지원하지 않는 로케일: ${lang}`);
  const requested = argv.filter(a => !a.startsWith('--'));
  if (requested.some(key => !key.trim() || !SPOTS.some(spot => spot.key === key))) {
    throw new Error(`빈 값 또는 알 수 없는 스팟: ${requested.join(', ')}`);
  }
  if (new Set(requested).size !== requested.length) throw new Error('중복 스팟은 지정할 수 없다');
  const selected = requested.length ? SPOTS.filter(spot => requested.includes(spot.key)) : SPOTS;
  if (!selected.length) throw new Error('캡처 대상이 비어 있다');
  return { lang, targets: selected };
}
let selection;
try { selection = parseCaptureArgs(args); }
catch (err) {
  console.error(err.message);
  console.error('사용법: node scripts/capture-solver-spots.mjs [--lang=hi] [spot-key ...] 또는 --selftest');
  process.exit(2);
}
const { lang: LANG, targets } = selection;
const T = L10N[LANG];
const SUF = LANG === 'ko' ? '' : '-' + LANG;
console.log('로케일', LANG, '· URL', T.url, '· 파일 접미', SUF || '(없음)');

const extractDocument = (T) => {
  const txt = (e) => (e?.innerText || '').trim();
  const all = [...document.querySelectorAll('div,section')];
  const headerEl = all.filter(e => txt(e).startsWith(T.back) && txt(e).length < 200)[0];
  const cardsEl = all.filter(e => { const t = txt(e); return t.includes(T.combos) && t.length < 140; })[0];
  const panelEl = all.filter(e => { const t = txt(e); return t.includes(T.noDraw) && t.length < 400; })[0];

  const actions = [];
  if (cardsEl) {
    const L = txt(cardsEl).split('\n').map(s => s.trim()).filter(Boolean);
    for (let i = 0; i < L.length; i++) {
      if (/^\d+([.,]\d+)?%$/.test(L[i]) && L[i + 1] === T.combos) actions.push({ name: L[i - 1], freq: L[i] });
      else if (/^\d+([.,]\d+)?%$/.test(L[i]) && /^\d/.test(L[i + 1] || '')) actions.push({ name: L[i - 1], freq: L[i], combos: L[i + 1] });
    }
  }

  const hands = [], draws = [];
  if (panelEl) {
    const L = txt(panelEl).split('\n').map(s => s.trim()).filter(Boolean);
    let sec = null;
    for (let i = 0; i < L.length; i++) {
      if (L[i] === T.hands) { sec = hands; continue; }
      if (L[i] === T.draws) { sec = draws; continue; }
      if (/^\d+([.,]\d+)?%$/.test(L[i]) && sec) sec.push({ label: L[i - 1], pct: L[i] });
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
};
const extract = (page) => page.evaluate(extractDocument, T);

function validateResults(oop, ip) {
  for (const [side, d] of [['oop', oop], ['ip', ip]]) {
    if (!d.header || d.players.length !== 2 || !d.hands.length || !d.draws.length || !d.total || !d.head) {
      throw new Error(`${side}: 필수 결과 데이터가 비어 있음 — UI 라벨/셀렉터를 확인할 것`);
    }
  }
  if (!oop.actions.length) throw new Error('OOP 액션 빈도가 비어 있음 — 숫자 표기/셀렉터를 확인할 것');
}

// 라이브 의존 없이 각 로케일의 표시값·분류·합계 추출과 빈 결과 거부를 검증한다.
if (args.includes('--selftest')) {
  const { strict: assert } = await import('node:assert');
  assert.equal(parseCaptureArgs([]).targets.length, SPOTS.length);
  assert.deepEqual(parseCaptureArgs(['--lang=hi', 'srp-paired']).targets.map(s => s.key), ['srp-paired']);
  for (const argv of [['missing-spot'], ['srp-paired', 'missing-spot'], ['srp-paired', 'srp-paired'],
    [''], [' '], ['--lang='], ['--lang=hi', '--lang=ms'], ['--targets=']]) {
    assert.throws(() => parseCaptureArgs(argv));
  }
  console.log('✔ 요청 범위: 전체/일부 허용, 빈 값·미지·중복·잘못된 옵션 거부');
  const testBrowser = await chromium.launch();
  try {
    const testPage = await testBrowser.newPage();
    for (const [locale, labels] of Object.entries(L10N)) {
      const value = ['pt', 'id'].includes(locale) ? '98,2%' : '98.2%';
      await testPage.setContent(`<div>${labels.back}<br>Board A-high<br>A♥7♦2♣</div>
        <select><option>OOP (BB (caller))</option><option>IP (BTN (opener))</option></select>
        <section>Check<br>${value}<br>455.5<br>${labels.combos}</section>
        <section>${labels.hands}<br>Top Pair<br>20.7%<br>${labels.draws}<br>${labels.noDraw}<br>71.3%</section>
        <table><tr><th>${labels.hands}</th><th>EQ</th></tr><tr><td>${labels.all}</td><td>45.1%</td></tr></table>`);
      const result = await testPage.evaluate(extractDocument, labels);
      assert.deepEqual(result.actions, [{ name: 'Check', freq: value, combos: '455.5' }]);
      assert.deepEqual(result.hands, [{ label: 'Top Pair', pct: '20.7%' }]);
      assert.deepEqual(result.draws, [{ label: labels.noDraw, pct: '71.3%' }]);
      assert.deepEqual(result.total, [labels.all, '45.1%']);
      validateResults(result, { ...result, actions: [] }); // IP의 행동 전략 없음은 정상이다.
      assert.throws(() => validateResults({ ...result, hands: [] }, result));
      assert.throws(() => validateResults({ ...result, actions: [] }, result));
      assert.throws(() => validateResults(result, { ...result, total: null }));
      console.log(`✔ ${locale}: 액션·분류·합계 추출, 누락 거부`);
    }
  } finally { await testBrowser.close(); }
  process.exit(0);
}

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

// Validate the complete request before creating output directories or opening a browser.
console.log(`요청 범위 (${targets.length}): ${targets.map(s => s.key).join(', ')}`);
mkdirSync(OUT, { recursive: true });
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
    validateResults(oop, ip);
    await hideChrome();
    await page.screenshot({ path: path.join(OUT, `${spot.key}-ip${SUF}.png`), clip });

    results[spot.key] = { oop, ip };
    console.log(`✔ ${spot.key} — ${oop.header.split('|')[1]?.trim() || ''} ${oop.header.split('|')[2]?.trim() || ''}`);
  } catch (e) {
    console.error(`✘ ${spot.key}:`, e.message);
  }
}

const completed = Object.keys(results);
if (completed.length) writeFileSync(path.join(OUT, `data${SUF}.json`), JSON.stringify(results, null, 2), 'utf8');
else console.error('✘ 완료된 캡처가 없어 기존 data 파일을 보존한다');
await browser.close();
console.log(`완료 범위 (${completed.length}/${targets.length}): ${completed.join(', ') || '(없음)'}`);
if (completed.length) console.log('\nsaved →', OUT);
if (completed.length !== targets.length) process.exitCode = 1;
