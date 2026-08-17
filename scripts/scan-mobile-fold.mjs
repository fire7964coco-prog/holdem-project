/**
 * 모바일 첫 화면 인벤토리 + sticky 겹침 회귀 스캐너
 *
 * 사용법:
 *   node scripts/scan-mobile-fold.mjs                          # 라이브 · 기본 경로 묶음
 *   node scripts/scan-mobile-fold.mjs --base http://localhost:3003
 *   node scripts/scan-mobile-fold.mjs /calculator /ranking     # 경로 직접 지정
 *
 * 왜 필요한가 (2026-08-17):
 *   `/calculator`에서 회귀를 하나 찾았다 — 08-04에 만든 sticky 바(z-40)가 08-05에
 *   헤더가 68→100px로 높아지면서 **가시 0px**이 돼 있었다. 헤더도 sticky top-0이고
 *   z-50이라 그 뒤로 숨은 것이다. **아무도 재검증하지 않았다.**
 *
 *   🔴 이 유형은 «각각은 옳은 두 커밋»이 만든다. 코드 리뷰로는 안 잡히고
 *      **렌더된 화면을 재야만** 잡힌다. 그래서 스크립트로 남긴다.
 *
 * 무엇을 보나:
 *   ① 첫 화면(0~fold)에서 상시 크롬이 먹는 px과 비율
 *   ② 스크롤 후 화면 상단에 붙은 sticky/fixed들 — **높은 z가 낮은 z를 가리는 쌍**
 *   ③ 본문 첫 요소가 어디서 시작하는지
 *
 * 판정 규칙: `fullyHidden`이 true면 그 요소는 **자리만 먹고 역할은 0**이다. 회귀다.
 */
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const bi = args.indexOf('--base');
const BASE = bi >= 0 && args[bi + 1] ? args[bi + 1] : 'https://www.holdemmaster.com';
const paths = args.filter((a, i) => a.startsWith('/') && i !== bi + 1);

const TARGETS = paths.length ? paths : [
  '/',                                        // 홈 (모바일 56.7% ↔ 데스크톱 73.1%)
  '/blog/holdem-tournament-how-to-enter',     // 최대 격차 44p
  '/calculator',                              // 08-17 처방 대상
  '/tournaments',                             // 모바일 손실 절대량 1위
  '/ranking',                                 // 모바일이 이기는 자리 (대조군)
  '/rules',
  '/glossary',
  '/en/blog/holdem-tournament',               // 다국어 블로그
];

const VW = 390, VH = 844;

const probe = () => {
  const VH = window.innerHeight;
  const el2row = (el) => {
    const r = el.getBoundingClientRect(), c = getComputedStyle(el);
    return {
      cls: (el.className || '').toString().slice(0, 48) || `<${el.tagName.toLowerCase()}>`,
      pos: c.position, z: c.zIndex === 'auto' ? 0 : +c.zIndex,
      top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height),
    };
  };
  const pinned = [...document.querySelectorAll('body *')].filter((el) => {
    const c = getComputedStyle(el);
    return (c.position === 'sticky' || c.position === 'fixed') && el.getBoundingClientRect().height > 15;
  });

  const out = { docHeight: Math.round(document.documentElement.scrollHeight) };

  // ① 진입 시 상·하단 크롬
  window.scrollTo(0, 0);
  const atTop = pinned.map(el2row);
  const topChrome = atTop.filter((r) => r.top <= 2 && r.bottom > 0);
  const botChrome = atTop.filter((r) => r.bottom >= VH - 2 && r.top < VH);
  out.chrome = {
    topPx: topChrome.length ? Math.max(...topChrome.map((r) => r.bottom)) : 0,
    bottomPx: botChrome.length ? VH - Math.min(...botChrome.map((r) => r.top)) : 0,
  };
  out.chrome.totalPx = out.chrome.topPx + out.chrome.bottomPx;
  out.chrome.pctOfFold = Math.round((out.chrome.totalPx / VH) * 100);

  return out;
};

const probeAfterScroll = () => {
  const el2row = (el) => {
    const r = el.getBoundingClientRect(), c = getComputedStyle(el);
    return {
      cls: (el.className || '').toString().slice(0, 48) || `<${el.tagName.toLowerCase()}>`,
      z: c.zIndex === 'auto' ? 0 : +c.zIndex,
      top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height),
    };
  };
  const pinned = [...document.querySelectorAll('body *')].filter((el) => {
    const c = getComputedStyle(el);
    return (c.position === 'sticky' || c.position === 'fixed') && el.getBoundingClientRect().height > 15;
  });
  const rows = pinned.map(el2row).filter((r) => r.top < 200 && r.bottom > 0);

  // 높은 z가 낮은 z를 가리는 쌍
  const covered = [];
  for (const a of rows) for (const b of rows) {
    if (a === b || a.z <= b.z) continue;
    const ov = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    if (ov > 5) covered.push({
      hidden: b.cls, hiddenZ: b.z, hiddenH: b.h,
      by: a.cls, byZ: a.z, overlapPx: Math.round(ov),
      fullyHidden: ov >= b.h - 2,
    });
  }
  return { topPinned: rows, covered };
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: VW, height: VH } });

console.log(`\n${'='.repeat(84)}`);
console.log(`모바일 첫 화면 스캔 · ${VW}×${VH} · ${BASE}`);
console.log('='.repeat(84));

let regressions = 0;
for (const p of TARGETS) {
  try {
    await page.goto(BASE + p, { waitUntil: 'networkidle', timeout: 45000 });
  } catch {
    console.log(`\n▸ ${p}\n  ✖ 로드 실패`);
    continue;
  }
  const top = await page.evaluate(probe);
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(500);
  const scrolled = await page.evaluate(probeAfterScroll);

  console.log(`\n▸ ${p}`);
  console.log(`  문서 ${top.docHeight}px (${(top.docHeight / VH).toFixed(1)}화면) · ` +
    `상시 크롬 상 ${top.chrome.topPx} + 하 ${top.chrome.bottomPx} = ${top.chrome.totalPx}px (화면의 ${top.chrome.pctOfFold}%)`);

  for (const r of scrolled.topPinned) {
    console.log(`    z${String(r.z).padStart(3)}  ${String(r.top).padStart(4)}~${String(r.bottom).padStart(4)}  h${String(r.h).padStart(4)}  ${r.cls}`);
  }
  for (const c of scrolled.covered) {
    const mark = c.fullyHidden ? '🔴 완전히 가려짐 (자리만 먹고 역할 0 = 회귀)' : `🟡 ${c.overlapPx}px 가려짐`;
    if (c.fullyHidden) regressions++;
    console.log(`    ${mark}\n       숨은 것 : z${c.hiddenZ} h${c.hiddenH} ${c.hidden}\n       가린 것 : z${c.byZ} ${c.by}`);
  }
}

console.log(`\n${'='.repeat(84)}`);
console.log(regressions ? `🔴 완전히 가려진 sticky ${regressions}건 — 위 목록을 판정하라` : '✅ 완전히 가려진 sticky 0건');
console.log('='.repeat(84) + '\n');

await browser.close();
