/**
 * holdem-hand-rankings 경화용 이미지 3종 (2026-08-01)
 *
 * 왜 만드나:
 *  - 본문 14,073자에 이미지 3장뿐 → 6,845~12,958px 구간이 7.2화면 시각 공백 (핸드오프 0-F 발견3)
 *  - 기존 holdem-hand-rankings-showdown.webp는 보드(10♥9♣7♦4♠2♦)로는 성립할 수 없는
 *    스페이드 로열플러시를 양쪽이 5장씩 들고 있다. 그런데 캡션은 "두 플레이어의 베스트 5장"이다.
 *    → 18개 언어가 같은 이미지를 같은 캡션으로 쓰고 있어 §13 신뢰 리스크.
 *
 * 카드는 전부 아래 주석의 검산 결과다(임의 생성 금지 — §13).
 *
 *  ① showdown : 보드 Q♦9♦4♦9♠2♣ / A: A♦J♦ → 다이아 A-Q-J-9-4 플러시
 *                                  / B: Q♠9♣ → 9♦9♠9♣ + Q♦Q♠ = 9 풀하우스(Q)
 *                → 풀하우스 > 플러시, B 승. 도입부 경험담(플러시인데 보드 페어)과 같은 장면.
 *                → **언어중립(글자 0)**: 18개 언어가 공유할 수 있게 라벨을 넣지 않는다.
 *  ② best5    : 보드 A♠A♦K♥K♣Q♠ / 홀 Q♥Q♦ → QQQ + AA = 풀하우스 (본문 상황 1과 동일)
 *  ③ kicker   : 보드 A♣7♦3♠9♥2♦ / A: A♠K♠(키커 K) vs B: A♥J♥(키커 J) → K > J로 A 승
 *                (보드에 페어·플러시·스트레이트 없음. 하트 3장뿐이라 플러시 불성립)
 *
 * 실행: node scripts/gen-hand-rankings-images.mjs
 */
import { writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const RED = '#C0392B';
const BLACK = '#1A1A1A';
const SUIT = { s: ['♠', BLACK], h: ['♥', RED], d: ['♦', RED], c: ['♣', BLACK] };
const GOLD = '#C9A227';
const MUTED = '#A9B5A6';

/** 'Qd' → 카드 div. size: lg | md | sm, dim=쓰지 않는 카드 */
const card = (code, size = 'md', dim = false) => {
  const r = code.slice(0, -1);
  const [sym, col] = SUIT[code.slice(-1)];
  return `<div class="cd ${size}${dim ? ' dim' : ''}"><span class="rk" style="color:${col}">${r}</span><span class="su" style="color:${col}">${sym}</span></div>`;
};
const row = (codes, size = 'md', dims = []) =>
  codes.map((c, i) => card(c, size, dims.includes(i))).join('');

const BASE = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#0B1F17}
.stage{position:relative;width:1200px;height:675px;overflow:hidden;
 background:radial-gradient(ellipse 950px 520px at 50% -8%,rgba(46,125,70,.28),rgba(46,125,70,0) 66%),linear-gradient(160deg,#0B1F17 0%,#13291D 100%);
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Malgun Gothic",Helvetica,Arial,sans-serif;
 display:flex;flex-direction:column;align-items:center}
h1{color:${GOLD};font-size:34px;font-weight:800;text-align:center;text-shadow:0 2px 12px rgba(0,0,0,.45)}
.sub{color:${MUTED};font-size:15px;font-weight:600;text-align:center}
.cd{background:#FDFBF4;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 3px 8px rgba(0,0,0,.4)}
.cd.lg{width:82px;height:114px}
.cd.md{width:64px;height:90px}
.cd.sm{width:50px;height:70px}
.cd.dim{opacity:.28}
.lg .rk{font-size:36px}.lg .su{font-size:30px}
.md .rk{font-size:29px}.md .su{font-size:24px}
.sm .rk{font-size:23px}.sm .su{font-size:19px}
.rk{font-weight:800;line-height:1}
.su{line-height:1;margin-top:3px}
.cards{display:flex;gap:10px;justify-content:center;align-items:center}
.tag{color:${MUTED};font-size:14px;font-weight:700;letter-spacing:.02em}
.wordmark{position:absolute;right:40px;bottom:18px;color:${GOLD};font-size:15px;font-weight:800;letter-spacing:.03em;opacity:.88}
`;

const page = (body, extra = '') => `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><style>${BASE}${extra}</style></head><body>${body}</body></html>`;

/* ───────────────── ① 쇼다운 (언어중립 — 글자 없음) ───────────────── */
const showdown = page(`
<div class="stage" style="justify-content:center;gap:40px;padding:30px 44px">
  <div class="felt"></div>
  <div class="cards" style="gap:14px;position:relative">${row(['Qd', '9d', '4d', '9s', '2c'], 'lg')}</div>
  <div class="panels" style="position:relative">
    <div class="pl lose">
      <div class="cards">${row(['Ad', 'Jd'], 'md')}</div>
      <div class="best">${row(['Ad', 'Qd', 'Jd', '9d', '4d'], 'sm')}</div>
      <div class="mark">✕</div>
    </div>
    <div class="vs">VS</div>
    <div class="pl win">
      <div class="cards">${row(['Qs', '9c'], 'md')}</div>
      <div class="best">${row(['9d', '9s', '9c', 'Qd', 'Qs'], 'sm')}</div>
      <div class="mark">✓</div>
    </div>
  </div>
</div>`, `
.panels{display:flex;align-items:center;gap:30px}
.pl{position:relative;display:flex;flex-direction:column;align-items:center;gap:14px;padding:20px 26px 22px;border-radius:18px;border:2px solid}
.pl.lose{border-color:rgba(169,181,166,.32);background:rgba(255,255,255,.03)}
.pl.win{border-color:${GOLD};background:rgba(201,162,39,.11);box-shadow:0 0 30px rgba(201,162,39,.22)}
.best{display:flex;gap:7px;padding-top:13px;border-top:1px dashed rgba(255,255,255,.16)}
.mark{position:absolute;top:-17px;right:-14px;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:800}
.lose .mark{background:#3A4740;color:#9AA79E}
.win .mark{background:${GOLD};color:#0B1F17}
.vs{color:${MUTED};font-size:26px;font-weight:800;letter-spacing:.06em;opacity:.75}
/* 히어로(LCP)라 여백을 줄이고 카드를 키운다 */
.cd.lg{width:100px;height:140px}
.cd.md{width:78px;height:109px}
.cd.sm{width:60px;height:84px}
.lg .rk{font-size:44px}.lg .su{font-size:37px}
.md .rk{font-size:35px}.md .su{font-size:29px}
.sm .rk{font-size:27px}.sm .su{font-size:23px}
.felt{position:absolute;left:50%;top:-320px;transform:translateX(-50%);width:1500px;height:760px;border-radius:50%;
 background:radial-gradient(ellipse at 50% 70%,rgba(46,125,70,.22),rgba(46,125,70,0) 70%)}
`);

/* ───────────────── ② 7장 → 베스트 5장 ───────────────── */
const best5 = page(`
<div class="stage" style="justify-content:center;gap:20px;padding:32px 60px">
  <h1>7장 중에서 베스트 5장 고르기</h1>
  <div class="sub">보드 5장 + 내 홀카드 2장 = 7장 · 이 중 가장 강한 5장만 내 패가 된다</div>

  <div class="grp">
    <div class="tag">보드 5장</div>
    <div class="cards">${row(['As', 'Ad', 'Kh', 'Kc', 'Qs'], 'md')}</div>
  </div>
  <div class="grp">
    <div class="tag">내 홀카드</div>
    <div class="cards">${row(['Qh', 'Qd'], 'md')}</div>
  </div>

  <div class="arrow">▼</div>

  <div class="grp best">
    <div class="tag" style="color:${GOLD}">베스트 5장 — 풀하우스</div>
    <div class="cards">${row(['Qh', 'Qd', 'Qs', 'As', 'Ad'], 'md')}</div>
    <div class="note">퀸 트리플 + 에이스 페어 · 남은 K♥ K♣는 쓰지 않는다</div>
  </div>
</div>`, `
.grp{display:flex;flex-direction:column;align-items:center;gap:9px}
.grp.best{padding:16px 34px 14px;border:2px solid ${GOLD};border-radius:16px;background:rgba(201,162,39,.10)}
.arrow{color:${GOLD};font-size:21px;opacity:.8;line-height:1}
.note{color:${MUTED};font-size:13.5px;font-weight:600;margin-top:3px}
`);

/* ───────────────── ③ 키커 ───────────────── */
const kicker = page(`
<div class="stage" style="justify-content:center;gap:20px;padding:32px 56px">
  <h1>같은 원페어, 키커가 승부를 가른다</h1>
  <div class="sub">둘 다 에이스 페어 · 족보가 같으면 남은 카드를 높은 순으로 비교한다</div>

  <div class="grp">
    <div class="tag">공용 보드</div>
    <div class="cards">${row(['Ac', '7d', '3s', '9h', '2d'], 'md')}</div>
  </div>

  <div class="panels">
    <div class="pl win">
      <div class="tag" style="color:${GOLD}">키커 K — 승</div>
      <div class="cards">${row(['As', 'Ks'], 'md')}</div>
      <div class="best">${row(['Ac', 'As', 'Ks', '9h', '7d'], 'sm')}</div>
    </div>
    <div class="pl lose">
      <div class="tag">키커 J — 패</div>
      <div class="cards">${row(['Ah', 'Jh'], 'md')}</div>
      <div class="best">${row(['Ac', 'Ah', 'Jh', '9h', '7d'], 'sm')}</div>
    </div>
  </div>
  <div class="note">페어(A)가 같아 세 번째 카드부터 비교 · K > J</div>
</div>`, `
.grp{display:flex;flex-direction:column;align-items:center;gap:9px}
.panels{display:flex;gap:26px;align-items:stretch}
.pl{display:flex;flex-direction:column;align-items:center;gap:11px;padding:15px 26px 17px;border-radius:16px;border:2px solid}
.pl.win{border-color:${GOLD};background:rgba(201,162,39,.11)}
.pl.lose{border-color:rgba(169,181,166,.3);background:rgba(255,255,255,.03)}
.best{display:flex;gap:6px;padding-top:11px;border-top:1px dashed rgba(255,255,255,.16)}
.note{color:${MUTED};font-size:13.5px;font-weight:600}
`);

const JOBS = [
  { html: showdown, out: 'public/images/holdem-showdown-flush-vs-fullhouse.webp', q: 68 },
  { html: best5, out: 'public/images/holdem-best5-from-seven.webp', q: 66 },
  { html: kicker, out: 'public/images/holdem-kicker-compare.webp', q: 66 },
];

const browser = await chromium.launch();
for (const job of JOBS) {
  const wm = '<div class="wordmark">♠ holdemmaster.com</div>';
  const html = job.html.replace('</div></body>', wm + '</div></body>');
  const tmpHtml = 'scripts/_gen-tmp.html';
  const tmpPng = 'scripts/_gen-tmp.png';
  writeFileSync(tmpHtml, html);
  const p = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
  await p.goto('file://' + process.cwd().replace(/\\/g, '/') + '/' + tmpHtml);
  await p.waitForTimeout(350);
  await p.screenshot({ path: tmpPng, clip: { x: 0, y: 0, width: 1200, height: 675 } });
  await p.close();
  await sharp(readFileSync(tmpPng)).resize(1200, 675).webp({ quality: job.q, effort: 6 }).toFile(job.out);
  unlinkSync(tmpPng);
  unlinkSync(tmpHtml);
  console.log(`생성: ${job.out} (${(readFileSync(job.out).length / 1024).toFixed(1)}KB)`);
}
await browser.close();
