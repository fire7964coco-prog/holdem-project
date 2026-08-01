/**
 * 카드 랭크 강도 — 언어중립 인포그래픽 (2026-08-01)
 *
 * 왜 이 1장만 만드나:
 *  핸드오프 0-F는 "6,845~12,958px가 7.2화면 시각 공백"이라며 이미지 3~4장을 요구했다.
 *  384×832 라이브에서 다시 재보니 **그 구간은 이 글에서 가장 촘촘한 구간**이었다 —
 *  :::hand::: 카드 블록이 10개(9,525~14,381, 평균 간격 540px = 0.65화면) 깔려 있다.
 *  첫 측정이 img/table/figure만 세는 바람에 div로 렌더되는 카드 블록을 통째로 놓친 것이다.
 *  (RankingTable을 놓쳤던 것과 같은 실수 — 핸드오프 §3-1)
 *
 *  전 구간을 다시 훑어 2화면 이상 비는 곳은 두 군데였고, 그중 손댈 값어치가 있는 건 한 곳이다:
 *   · 6,027 → 8,130 (2.3화면) — 「카드 한 장씩의 강도」. 랭크 순서가 텍스트 한 줄뿐이다 → 이 그림
 *   · 23,463 → 25,259 (2.2화면) — FAQ 본문. 문답 구간이라 그림이 붙을 자리가 아니다 → 안 만든다
 *
 * 글자를 넣지 않는 이유(§9-1 + images-shared-18-languages):
 *  이미지는 18개 언어가 공유한다. 카드·화살표·색만 쓰면 RTL 포함 전 언어에서 그대로 재사용되고,
 *  AI가 글자를 깨뜨릴 여지도 0이 된다. 어제 만든 holdem-kicker-showdown-neutral.webp와 같은 전략.
 *
 * §13 검산 (전부 손으로 확인):
 *  · 상단 13장  A♠ K♥ Q♦ J♣ 10♠ 9♥ 8♦ 7♣ 6♠ 5♥ 4♦ 3♣ 2♠ — 랭크 13종 각 1장, 중복 없음
 *  · 하단 좌    A♥ K♦ Q♣ J♠ 10♥ = A-K-Q-J-10 브로드웨이, 무늬 4종 섞임 → 플러시 아님. 최고 스트레이트
 *  · 하단 우    5♣ 4♠ 3♥ 2♦ A♣ = 5-4-3-2-A 휠, 무늬 4종 섞임 → 플러시 아님. 최저 스트레이트
 *  · 상단과 하단은 서로 다른 무늬를 써서 한 화면에 같은 카드가 두 번 보이지 않게 했다
 *
 * 실행: node scripts/gen-rank-strength-neutral.mjs
 */
import { writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const RED = '#C0392B';
const BLACK = '#1A1A1A';
const SUIT = { s: ['♠', BLACK], h: ['♥', RED], d: ['♦', RED], c: ['♣', BLACK] };
const GOLD = '#C9A227';
const MUTED = '#A9B5A6';

const card = (code, cls = '') => {
  const r = code.slice(0, -1);
  const [sym, col] = SUIT[code.slice(-1)];
  return `<div class="cd ${cls}"><span class="rk" style="color:${col}">${r}</span><span class="su" style="color:${col}">${sym}</span></div>`;
};

// A(강) → 2(약). 랭크가 내려갈수록 살짝 작아지고 어두워진다 = 순서를 글자 없이 전달한다.
const LADDER = ['As', 'Kh', 'Qd', 'Jc', '10s', '9h', '8d', '7c', '6s', '5h', '4d', '3c', '2s'];
const ladder = LADDER.map((c, i) => {
  const t = i / (LADDER.length - 1);          // 0 = A, 1 = 2
  const scale = (1 - t * 0.26).toFixed(3);
  const fade = (1 - t * 0.42).toFixed(3);
  return `<div class="slot" style="transform:scale(${scale});opacity:${fade}">${card(c, i === 0 ? 'top' : '')}</div>`;
}).join('');

const BROADWAY = ['Ah', 'Kd', 'Qc', 'Js', '10h'];
const WHEEL = ['5c', '4s', '3h', '2d', 'Ac'];

const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#0B1F17}
.stage{position:relative;width:1200px;height:675px;overflow:hidden;
 background:radial-gradient(ellipse 950px 520px at 50% -8%,rgba(46,125,70,.28),rgba(46,125,70,0) 66%),linear-gradient(160deg,#0B1F17 0%,#13291D 100%);
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Malgun Gothic",Helvetica,Arial,sans-serif;
 display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px;padding:38px 46px}
.cd{background:#FDFBF4;border-radius:7px;display:flex;flex-direction:column;align-items:center;justify-content:center;
 box-shadow:0 3px 8px rgba(0,0,0,.4);width:66px;height:92px}
.cd .rk{font-size:29px;font-weight:800;line-height:1}
.cd .su{font-size:23px;line-height:1;margin-top:3px}
.cd.top{box-shadow:0 0 0 3px ${GOLD},0 4px 16px rgba(201,162,39,.45)}
.ladder{display:flex;align-items:center;justify-content:center;gap:4px}
.slot{display:flex}
/* 강 → 약 방향을 색 띠로 한 번 더 말해준다 (글자 없이) */
.bar{width:940px;height:7px;border-radius:4px;
 background:linear-gradient(90deg,${GOLD} 0%,rgba(201,162,39,.55) 34%,rgba(169,181,166,.38) 72%,rgba(169,181,166,.16) 100%)}
.arrows{display:flex;align-items:center;justify-content:space-between;width:940px;color:${MUTED};font-size:26px;font-weight:800}
.arrows .l{color:${GOLD}}
.pairs{display:flex;align-items:stretch;justify-content:center;gap:34px}
.pl{display:flex;flex-direction:column;align-items:center;gap:12px;padding:18px 26px 20px;border-radius:16px;border:2px solid;position:relative}
.pl.hi{border-color:${GOLD};background:rgba(201,162,39,.11)}
.pl.lo{border-color:rgba(169,181,166,.32);background:rgba(255,255,255,.03)}
.pl .cds{display:flex;gap:8px}
.pl .cd{width:58px;height:81px}
.pl .cd .rk{font-size:25px}.pl .cd .su{font-size:20px}
.badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);width:34px;height:34px;border-radius:50%;
 display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:800}
.hi .badge{background:${GOLD};color:#0B1F17}
.lo .badge{background:#3A4740;color:#9AA79E}
.wordmark{position:absolute;right:38px;bottom:16px;color:${GOLD};font-size:15px;font-weight:800;letter-spacing:.03em;opacity:.88}
</style></head><body>
<div class="stage">
  <div class="ladder">${ladder}</div>
  <div class="bar"></div>
  <div class="arrows"><span class="l">▲</span><span>▼</span></div>
  <div class="pairs">
    <div class="pl hi"><div class="badge">▲</div><div class="cds">${BROADWAY.map((c) => card(c)).join('')}</div></div>
    <div class="pl lo"><div class="badge">▼</div><div class="cds">${WHEEL.map((c) => card(c)).join('')}</div></div>
  </div>
</div></body></html>`;

const OUT = 'public/images/holdem-rank-strength-neutral.webp';
const browser = await chromium.launch();
const tmpHtml = 'scripts/_rank-tmp.html';
const tmpPng = 'scripts/_rank-tmp.png';
writeFileSync(tmpHtml, html.replace('</div></body>', '<div class="wordmark">♠ holdemmaster.com</div></div></body>'));
const p = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
await p.goto('file://' + process.cwd().replace(/\\/g, '/') + '/' + tmpHtml);
await p.waitForTimeout(350);
await p.screenshot({ path: tmpPng, clip: { x: 0, y: 0, width: 1200, height: 675 } });
await p.close();
await browser.close();
await sharp(readFileSync(tmpPng)).resize(1200, 675).webp({ quality: 66, effort: 6 }).toFile(OUT);
unlinkSync(tmpPng);
unlinkSync(tmpHtml);
console.log(`생성: ${OUT} (${(readFileSync(OUT).length / 1024).toFixed(1)}KB)`);
