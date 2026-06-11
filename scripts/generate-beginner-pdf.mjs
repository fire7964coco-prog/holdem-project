/**
 * Texas Hold'em Rules for Beginners - 공용 PDF 치트시트 생성기 (HTML/CSS -> Chromium).
 *
 * Playwright(Chromium)로 HTML/CSS를 렌더링해 PDF로 출력한다.
 * 저수준 PDF 바이트 작성 방식 대비 다국어 폰트/줄바꿈/RTL/페이지 나눔이 안정적이다.
 *
 * 산출물: public/downloads/<fileName>
 * 재생성: node scripts/generate-beginner-pdf.mjs           (전체 언어)
 *        node scripts/generate-beginner-pdf.mjs en ko     (지정 언어만)
 *
 * 새 언어 추가: 아래 CONTENT 객체에 언어 키를 추가하면 끝.
 *  - fontStack 에 해당 언어 시스템 폰트를 넣으면 한/일/중/아랍 등도 렌더 가능.
 *  - dir: "rtl" 지정 시 아랍어 방향 처리.
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DOWNLOADS = join(ROOT, "public", "downloads");
const FAVICON = join(ROOT, "public", "favicon.svg");

// 파비콘(SVG)을 data URL로 인라인 → 외부 자원 없이 렌더
function faviconDataUrl() {
  const svg = readFileSync(FAVICON, "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg, "utf8").toString("base64")}`;
}

// ── 언어별 콘텐츠 데이터 ─────────────────────────────────
// 한국어 등 새 언어는 같은 형태로 키만 추가하면 된다.
const CONTENT = {
  en: {
    dir: "ltr",
    fileName: "texas-holdem-rules-for-beginners.pdf",
    fontStack: "'Helvetica Neue', Arial, sans-serif",
    brand: "holdemmaster.com",
    title: "Texas Hold'em Rules for Beginners",
    subtitle: "A one-page cheat sheet: hand rankings, game flow, and the basics",
    page2Title: "Play, Bet, and Win - Beginner Reference",
    footer1: "holdemmaster.com - Texas Hold'em Rules for Beginners",
    footer2: "Full guide: holdemmaster.com/en/blog/texas-holdem-rules-for-beginners",
    pageLabel: (n, total) => `Page ${n} of ${total}`,
    howItWorks: {
      heading: "How the Game Works",
      paras: [
        "Each player gets 2 private hole cards. Five community cards are shared in the middle.",
        "You make the best 5-card hand from any mix of the two - use 2, 1, or even 0 hole cards.",
        "There are 4 betting rounds: preflop, flop, turn, river. Best hand at showdown wins the pot, or you win earlier if everyone else folds.",
      ],
    },
    handRankings: {
      heading: "Hand Rankings",
      hint: "strongest at the top",
      headers: ["", "HAND", "EXAMPLE", "WHAT IT MEANS"],
      rows: [
        ["Royal Flush", ["A", "K", "Q", "J", "10"], "spade", "Best possible hand"],
        ["Straight Flush", ["9", "8", "7", "6", "5"], "heart", "5 in a row, one suit"],
        ["Four of a Kind", ["Q", "Q", "Q", "Q"], null, "Four of the same rank"],
        ["Full House", ["K", "K", "K", "7", "7"], null, "Three of a kind + a pair"],
        ["Flush", ["A", "J", "8", "5", "2"], "diamond", "5 same suit, any order"],
        ["Straight", ["10", "9", "8", "7", "6"], null, "5 in a row, mixed suits"],
        ["Three of a Kind", ["8", "8", "8"], null, "Trips, also called a set"],
        ["Two Pair", ["A", "A", "9", "9"], null, "Two different pairs"],
        ["One Pair", ["J", "J"], null, "One matching pair"],
        ["High Card", ["A", "K", "7", "4", "2"], null, "No combination made"],
      ],
      tiebreak:
        "Tie-breaker: same hand type? Compare the highest cards. Identical 5 cards split the pot.",
    },
    bettingRounds: {
      heading: "The Four Betting Rounds",
      steps: [
        ["PREFLOP", "0 cards", "Act on your 2 hole cards"],
        ["FLOP", "3 cards", "First shared cards appear"],
        ["TURN", "+1 card", "Fourth community card"],
        ["RIVER", "+1 card", "Fifth and final card"],
      ],
      showdown:
        "Showdown: if two or more players remain after the river, the best 5-card hand wins the pot.",
    },
    whoActsFirst: {
      heading: "Who Acts First?",
      rows: [
        ["Preflop:", "first player left of the big blind acts first."],
        ["After flop:", "first player left of the dealer button (button acts last)."],
      ],
      memory:
        "Memory trick: before the flop -> left of BB. After the flop -> left of the button.",
    },
    bettingActions: {
      heading: "Betting Actions",
      hint: "the only four things you can do",
      actions: [
        ["Fold", "Give up the hand."],
        ["Check", "Pass with no bet live."],
        ["Call", "Match the current bet."],
        ["Bet / Raise", "Add chips or increase the bet."],
      ],
    },
    startingHands: {
      heading: "Strong Starting Hands",
      hint: "play these with confidence",
      line: "AA  KK  QQ  JJ   —   AK  AQ   —   TT-77   —   suited broadways (KQs, QJs, JTs)",
    },
    chipSetup: {
      heading: "Simple Home-Game Chip Setup",
      hint: "200 value = 100 big blinds at 1/2",
      headers: ["CHIP", "VALUE", "PER PLAYER", "TOTAL"],
      rows: [
        ["White", "1", "20", "20"],
        ["Red", "5", "16", "80"],
        ["Blue", "25", "4", "100"],
      ],
    },
    mistakes: {
      heading: "Common Beginner Mistakes",
      items: [
        "Thinking you must use both hole cards - the best 5 cards win, period.",
        "Forgetting the action order changes after the flop.",
        "Playing any ace; weak aces make second-best pairs.",
        "Chasing every draw - continue only when the price is right.",
      ],
    },
    tip: "Tip: print one copy per player and keep it beside the table for your first few sessions.",
  },

  ko: {
    dir: "ltr",
    fileName: "texas-holdem-rules-for-beginners-ko.pdf",
    fontStack: "'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
    brand: "holdemmaster.com",
    title: "텍사스 홀덤 초보 규칙",
    subtitle: "한 장으로 보는 치트시트: 족보, 게임 흐름, 기본기",
    page2Title: "플레이 · 베팅 · 승리 - 초보 레퍼런스",
    footer1: "holdemmaster.com · 텍사스 홀덤 초보 규칙",
    footer2: "전체 가이드: holdemmaster.com/blog/texas-holdem-rules-for-beginners",
    pageLabel: (n, total) => `${total}쪽 중 ${n}쪽`,
    howItWorks: {
      heading: "게임은 이렇게 진행돼요",
      paras: [
        "각자 개인 카드(홀카드) 2장을 받고, 테이블 중앙에 모두가 함께 쓰는 공용 카드 5장이 열립니다.",
        "이 둘을 섞어 가장 강한 5장을 만듭니다 - 개인 카드를 2장, 1장, 0장 써도 됩니다.",
        "베팅은 프리플랍·플랍·턴·리버 네 번. 쇼다운에서 가장 강한 족보가 팟을 가져가고, 그 전에 모두 폴드하면 바로 이깁니다.",
      ],
    },
    handRankings: {
      heading: "족보 순위",
      hint: "위로 갈수록 강함",
      headers: ["", "족보", "예시", "의미"],
      rows: [
        ["로열플러시", ["A", "K", "Q", "J", "10"], "spade", "가장 강한 핸드"],
        ["스트레이트플러시", ["9", "8", "7", "6", "5"], "heart", "같은 무늬 5연속"],
        ["포카드", ["Q", "Q", "Q", "Q"], null, "같은 숫자 4장"],
        ["풀하우스", ["K", "K", "K", "7", "7"], null, "트리플 + 페어"],
        ["플러시", ["A", "J", "8", "5", "2"], "diamond", "같은 무늬 5장"],
        ["스트레이트", ["10", "9", "8", "7", "6"], null, "무늬 섞인 5연속"],
        ["트리플", ["8", "8", "8"], null, "같은 숫자 3장(셋)"],
        ["투페어", ["A", "A", "9", "9"], null, "서로 다른 페어 2개"],
        ["원페어", ["J", "J"], null, "같은 숫자 2장"],
        ["하이카드", ["A", "K", "7", "4", "2"], null, "아무 조합도 없음"],
      ],
      tiebreak:
        "동점 처리: 같은 족보면 높은 카드부터 비교. 5장이 완전히 같으면 팟을 나눕니다.",
    },
    bettingRounds: {
      heading: "네 번의 베팅 라운드",
      steps: [
        ["프리플랍", "0장", "개인 카드 2장으로 액션"],
        ["플랍", "3장", "첫 공용 카드 공개"],
        ["턴", "+1장", "네 번째 공용 카드"],
        ["리버", "+1장", "다섯 번째 마지막 카드"],
      ],
      showdown:
        "쇼다운: 리버까지 2명 이상 남으면, 가장 강한 5장 족보가 팟을 가져갑니다.",
    },
    whoActsFirst: {
      heading: "누가 먼저 액션하나요?",
      rows: [
        ["프리플랍:", "빅블라인드 왼쪽 플레이어부터 액션합니다."],
        ["플랍 이후:", "버튼 왼쪽의 남은 첫 플레이어부터 (버튼은 마지막)."],
      ],
      memory: "암기 팁: 플랍 전엔 BB 왼쪽, 플랍 후엔 버튼 왼쪽부터.",
    },
    bettingActions: {
      heading: "베팅 액션",
      hint: "할 수 있는 건 이 네 가지뿐",
      actions: [
        ["폴드", "핸드를 포기한다."],
        ["체크", "베팅 없이 차례를 넘긴다."],
        ["콜", "현재 베팅을 맞춘다."],
        ["벳 / 레이즈", "칩을 걸거나 더 올린다."],
      ],
    },
    startingHands: {
      heading: "강한 스타팅 핸드",
      hint: "자신 있게 플레이",
      line: "AA  KK  QQ  JJ   —   AK  AQ   —   TT-77   —   수티드 브로드웨이 (KQs, QJs, JTs)",
    },
    chipSetup: {
      heading: "간단 홈게임 칩 세팅",
      hint: "200칩 = 100BB (블라인드 1/2)",
      headers: ["칩", "가치", "1인당", "합계"],
      rows: [
        ["흰색", "1", "20", "20"],
        ["빨강", "5", "16", "80"],
        ["파랑", "25", "4", "100"],
      ],
    },
    mistakes: {
      heading: "초보가 자주 하는 실수",
      items: [
        "개인 카드 2장을 꼭 써야 한다고 생각하기 - 기준은 최고의 5장.",
        "플랍 이후 액션 순서가 바뀌는 걸 잊기.",
        "에이스면 다 플레이하기 - 약한 에이스는 두 번째로 좋은 페어만 만든다.",
        "모든 드로우를 따라가기 - 가격이 맞을 때만 콜.",
      ],
    },
    tip: "팁: 한 부씩 인쇄해 처음 몇 판은 테이블 옆에 두고 보세요.",
  },
};

// ── HTML 빌드 ───────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const SUIT = { spade: "&#9824;", heart: "&#9829;", diamond: "&#9830;", club: "&#9827;" };
const isRed = (s) => s === "heart" || s === "diamond";

function renderCards(cards, suit) {
  const cardSpans = cards.map((c) => `<span class="card">${esc(c)}</span>`).join("");
  const suitSpan = suit
    ? ` <span class="suit ${isRed(suit) ? "red" : "blk"}">${SUIT[suit]}</span>`
    : "";
  return cardSpans + suitSpan;
}

function renderHtml(c, favicon, langCode = "en") {
  const hr = c.handRankings;
  const handRows = hr.rows
    .map(
      (r, i) => `
      <tr class="${i % 2 ? "alt" : ""}">
        <td class="rank"><span class="badge">${i + 1}</span></td>
        <td class="hand">${esc(r[0])}</td>
        <td class="example">${renderCards(r[1], r[2])}</td>
        <td class="note">${esc(r[3])}</td>
      </tr>`
    )
    .join("");

  const rounds = c.bettingRounds.steps
    .map(
      (s) => `
      <div class="round">
        <div class="round-head">${esc(s[0])}</div>
        <div class="round-body">
          <div class="round-cards">${esc(s[1])}</div>
          <div class="round-desc">${esc(s[2])}</div>
        </div>
      </div>`
    )
    .join("");

  const whoRows = c.whoActsFirst.rows
    .map(
      (r) => `<div class="who-row"><span class="who-k">${esc(r[0])}</span> <span class="who-v">${esc(r[1])}</span></div>`
    )
    .join("");

  const actions = c.bettingActions.actions
    .map(
      (a) => `<div class="action"><span class="action-k">${esc(a[0])}</span><span class="action-v">${esc(a[1])}</span></div>`
    )
    .join("");

  const chip = c.chipSetup;
  const chipHead = chip.headers.map((h) => `<th>${esc(h)}</th>`).join("");
  const chipRows = chip.rows
    .map(
      (r, i) =>
        `<tr class="${i % 2 ? "alt" : ""}">${r
          .map((v, j) => `<td class="${j === 0 ? "b" : ""}">${esc(v)}</td>`)
          .join("")}</tr>`
    )
    .join("");

  const mistakes = c.mistakes.items
    .map((m) => `<li>${esc(m)}</li>`)
    .join("");

  const headerSuits = `
    <span class="hs blk">${SUIT.spade}</span>
    <span class="hs red">${SUIT.heart}</span>
    <span class="hs red">${SUIT.diamond}</span>
    <span class="hs blk">${SUIT.club}</span>`;

  return `<!doctype html>
<html lang="${langCode}" dir="${c.dir}">
<head>
<meta charset="utf-8" />
<style>
  @page { size: Letter; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --felt: #0d3d2b;
    --green: #1c8059;
    --green-bg: #e6f5ee;
    --ink: #1f242e;
    --gray: #6b7380;
    --border: #d6dee6;
    --row-alt: #f6f9fb;
    --red: #c72129;
    --amber-bg: #fcf5e6;
    --amber-line: #d99933;
    --gold: #dfac2a;
  }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: ${c.fontStack}; color: var(--ink); }
  .page {
    width: 8.5in; height: 11in; overflow: hidden;
    padding: 0 0 0.5in 0; position: relative;
  }
  .page.first { page-break-after: always; }

  /* 헤더 */
  .header { background: var(--felt); color: #fff; padding: 22px 0.55in; display: flex; align-items: center; gap: 14px; }
  .header.slim { padding: 13px 0.55in; }
  .logo { width: 34px; height: 34px; flex: 0 0 auto; }
  .logo.sm { width: 28px; height: 28px; }
  .htext { flex: 1 1 auto; }
  .htitle { font-size: 21px; font-weight: 700; letter-spacing: -0.2px; }
  .htitle.sm { font-size: 15px; }
  .hsub { font-size: 10.5px; color: #d2e8de; margin-top: 4px; }
  .brand { text-align: right; flex: 0 0 auto; }
  .brand .url { font-weight: 700; font-size: 10.5px; color: var(--gold); }
  .brand .suits { margin-top: 5px; font-size: 14px; }
  .hs { margin-left: 4px; }
  .blk { color: #f2f2f2; }
  .red { color: #ff6b6e; }
  .brand .blk { color: #fff; }

  /* 본문 영역 */
  .body { padding: 30px 0.6in 0; }
  .body.p2 { padding-top: 34px; }

  h2.sec { font-size: 14.5px; color: var(--green); font-weight: 700; border-bottom: 1.5px solid var(--green); padding-bottom: 8px; margin-top: 30px; }
  h2.sec:first-child { margin-top: 0; }
  h2.sec .hint { font-weight: 400; font-size: 10px; color: var(--gray); margin-left: 8px; }
  p.lead { font-size: 10.8px; line-height: 1.85; margin-top: 14px; }
  .muted { color: var(--gray); font-size: 9.5px; margin-top: 14px; }

  /* 핸드 랭킹 표 */
  table { width: 100%; border-collapse: collapse; margin-top: 14px; border: 1px solid var(--border); }
  thead th { background: var(--felt); color: #fff; font-size: 9.5px; text-align: left; padding: 9px 10px; font-weight: 700; }
  tbody td { font-size: 10.2px; padding: 9.5px 10px; border-top: 1px solid var(--border); }
  tbody tr.alt { background: var(--row-alt); }
  td.rank { width: 38px; }
  .badge { display: inline-block; min-width: 24px; text-align: center; background: var(--green); color: #fff; font-weight: 700; font-size: 10px; border-radius: 3px; padding: 3px 5px; }
  td.hand { font-weight: 700; }
  td.example { color: var(--gray); letter-spacing: 0.5px; white-space: nowrap; }
  .card { margin-right: 3px; }
  .suit { font-size: 12px; }
  .suit.red { color: var(--red); }
  .suit.blk { color: var(--ink); }

  /* 4 베팅 라운드 */
  .rounds { display: flex; gap: 12px; margin-top: 18px; }
  .round { flex: 1; background: var(--green-bg); border-radius: 4px; overflow: hidden; }
  .round-head { background: var(--green); color: #fff; font-size: 9.5px; font-weight: 700; padding: 6px 10px; letter-spacing: 0.5px; }
  .round-body { padding: 11px 10px 13px; }
  .round-cards { font-size: 12px; font-weight: 700; }
  .round-desc { font-size: 8px; color: var(--gray); margin-top: 7px; line-height: 1.4; }
  p.showdown { font-size: 10px; margin-top: 18px; }

  /* Who acts first 박스 */
  .who { background: var(--green-bg); border-left: 4px solid var(--green); border-radius: 0 4px 4px 0; padding: 20px 22px; margin-top: 20px; }
  .who-row { font-size: 11px; line-height: 2.0; }
  .who-k { font-weight: 700; }
  .who-mem { font-size: 9.8px; font-weight: 700; color: var(--green); margin-top: 12px; }

  /* 액션 2열 */
  .actions { display: grid; grid-template-columns: 1fr 1fr; row-gap: 16px; column-gap: 16px; margin-top: 16px; }
  .action-k { color: var(--green); font-weight: 700; font-size: 10.5px; display: inline-block; width: 82px; }
  .action-v { font-size: 10px; }

  /* 스타팅 핸드 */
  p.hands { font-size: 12px; font-weight: 700; margin-top: 16px; letter-spacing: 0.3px; }

  /* 실수 박스 */
  .mistakes { background: var(--amber-bg); border-left: 4px solid var(--amber-line); border-radius: 0 4px 4px 0; padding: 20px 22px 20px 38px; margin-top: 18px; }
  .mistakes li { font-size: 10.2px; line-height: 1.9; }
  .mistakes li::marker { color: var(--amber-line); }

  p.tip { font-size: 10px; font-weight: 700; color: var(--green); margin-top: 24px; }

  /* 푸터 */
  .footer { position: absolute; left: 0.55in; right: 0.55in; bottom: 0.3in; border-top: 1px solid var(--border); padding-top: 8px; display: flex; justify-content: space-between; font-size: 8.5px; color: var(--gray); }
</style>
</head>
<body>
  <!-- 페이지 1 -->
  <section class="page first">
    <div class="header">
      <img class="logo" src="${favicon}" alt="" />
      <div class="htext">
        <div class="htitle">${esc(c.title)}</div>
        <div class="hsub">${esc(c.subtitle)}</div>
      </div>
      <div class="brand">
        <div class="url">${esc(c.brand)}</div>
        <div class="suits">${headerSuits}</div>
      </div>
    </div>
    <div class="body">
      <h2 class="sec">${esc(c.howItWorks.heading)}</h2>
      ${c.howItWorks.paras.map((p) => `<p class="lead">${esc(p)}</p>`).join("")}

      <h2 class="sec">${esc(hr.heading)}<span class="hint">${esc(hr.hint)}</span></h2>
      <table>
        <thead><tr>${hr.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${handRows}</tbody>
      </table>
      <p class="muted">${esc(hr.tiebreak)}</p>

      <h2 class="sec">${esc(c.bettingRounds.heading)}</h2>
      <div class="rounds">${rounds}</div>
      <p class="showdown">${esc(c.bettingRounds.showdown)}</p>
    </div>
    <div class="footer"><span>${esc(c.footer1)}</span><span>${esc(c.pageLabel(1, 2))}</span></div>
  </section>

  <!-- 페이지 2 -->
  <section class="page">
    <div class="header slim">
      <img class="logo sm" src="${favicon}" alt="" />
      <div class="htext"><div class="htitle sm">${esc(c.page2Title)}</div></div>
      <div class="brand"><div class="url">${esc(c.brand)}</div></div>
    </div>
    <div class="body p2">
      <h2 class="sec">${esc(c.whoActsFirst.heading)}</h2>
      <div class="who">
        ${whoRows}
        <div class="who-mem">${esc(c.whoActsFirst.memory)}</div>
      </div>

      <h2 class="sec">${esc(c.bettingActions.heading)}<span class="hint">${esc(c.bettingActions.hint)}</span></h2>
      <div class="actions">${actions}</div>

      <h2 class="sec">${esc(c.startingHands.heading)}<span class="hint">${esc(c.startingHands.hint)}</span></h2>
      <p class="hands">${esc(c.startingHands.line)}</p>

      <h2 class="sec">${esc(chip.heading)}<span class="hint">${esc(chip.hint)}</span></h2>
      <table>
        <thead><tr>${chipHead}</tr></thead>
        <tbody>${chipRows}</tbody>
      </table>

      <h2 class="sec">${esc(c.mistakes.heading)}</h2>
      <ul class="mistakes">${mistakes}</ul>

      <p class="tip">${esc(c.tip)}</p>
    </div>
    <div class="footer"><span>${esc(c.footer2)}</span><span>${esc(c.pageLabel(2, 2))}</span></div>
  </section>
</body>
</html>`;
}

// ── PDF 출력 ────────────────────────────────────────────
async function renderPdf(lang, favicon, browser) {
  const c = CONTENT[lang];
  if (!c) throw new Error(`Unknown language: ${lang}`);
  const html = renderHtml(c, favicon, lang);
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  const out = join(DOWNLOADS, c.fileName);
  await page.pdf({
    path: out,
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
  return out;
}

async function main() {
  if (!existsSync(DOWNLOADS)) mkdirSync(DOWNLOADS, { recursive: true });
  const requested = process.argv.slice(2);
  const langs = requested.length ? requested : Object.keys(CONTENT);
  const favicon = faviconDataUrl();
  const browser = await chromium.launch();
  try {
    for (const lang of langs) {
      const out = await renderPdf(lang, favicon, browser);
      console.log(`PDF written [${lang}]: ${out}`);
    }
  } finally {
    await browser.close();
  }
}

export { CONTENT, renderHtml, faviconDataUrl };

// 직접 실행 시에만 생성 (import 시에는 동작 안 함)
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
