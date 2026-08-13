/**
 * 족보(Pokerblätter) 순서 — 1페이지 인쇄용 PDF 생성기 (HTML/CSS → Chromium).
 *
 * ★왜 «전용» PDF인가 (2026-08-13, §6 축 B3):
 *   `holdem-hand-rankings` de의 다운로드 앵커는 「Pokerblätter-Reihenfolge als PDF」인데
 *   링크 대상이 **룰 PDF**(`texas-holdem-rules-for-beginners-de.pdf`)였다. 링크는 안 깨졌지만
 *   **자산이 남의 이름표를 달고 있었다** — 파일명·내부 제목·푸터가 전부 형제 글을 가리킨다.
 *   그리고 이 클러스터는 **SERP가 PDF를 직접 랭크한다**(검수장 실측: poker.de의
 *   `reihenfolge-der-poker-haende.pdf`가 4위, 동호회 PDF까지 상위).
 *   실측 볼륨(German/Germany, 12개월): `poker reihenfolge pdf` **260** ·
 *   `poker regeln pdf zum ausdrucken` **70** · `pokerblätter pdf` 20.
 *
 * 🔴 **확률은 7장 기준이다** — 교과서의 5장 값과 다르다. 특히 High Card(17,4%)가
 *   Zwei Paare(23,5%)보다 «드물다». 기준을 안 밝히면 그 자체가 사실오류가 된다
 *   (프로젝트 규칙 §13 · `poker-probability-5card-vs-7card`).
 *   값의 출처는 각 로케일 `holdem-hand-rankings` 본문 표이며 **검수를 통과한 수치다.**
 *   합계 검산: 0,0032+0,0279+0,168+2,60+3,03+4,62+4,83+23,5+43,8+17,4 = 99,98% (반올림 오차).
 *
 * 산출물: public/downloads/poker-hand-rankings-<lang>.pdf
 * 재생성: node scripts/generate-hand-rankings-pdf.mjs        (전체)
 *        node scripts/generate-hand-rankings-pdf.mjs de     (지정 언어만)
 *
 * ⚠ 용지는 언어별이다(de·ko = A4 / en = Letter). `generate-beginner-pdf.mjs`와 같은 규칙.
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DOWNLOADS = join(ROOT, "public", "downloads");
const FAVICON = join(ROOT, "public", "favicon.svg");

function faviconDataUrl() {
  const svg = readFileSync(FAVICON, "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg, "utf8").toString("base64")}`;
}

const SUIT = { spade: "&#9824;", heart: "&#9829;", diamond: "&#9830;", club: "&#9827;" };
const isRed = (s) => s === "heart" || s === "diamond";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * 10개 족보의 «구조»는 언어와 무관하다 — 예시 카드·무늬·확률은 여기 한 번만 둔다.
 * 언어별 CONTENT는 «이름과 설명»만 갖는다. 이렇게 갈라야 번역이 수치를 흔들지 못한다.
 */
/**
 * 🔴 예시 카드는 **`holdem-hand-rankings` 본문의 `:::hand[...]`와 같은 카드다.**
 *   독자는 이 PDF를 인쇄해 놓고 같은 글을 읽는다 — 두 곳의 예시가 다르면 «다른 자료»로 읽힌다.
 *   본문 예시는 §13 검산을 이미 통과한 조합이라, 여기서 새로 짜지 않고 그대로 가져온다.
 *   (혼합 무늬 핸드는 무늬 기호를 안 찍는다. 플러시 계열만 단일 무늬를 표시한다.)
 */
const HANDS = [
  { rank: 1,  cards: ["A", "K", "Q", "J", "10"], suit: "spade",   prob: "0,0032%" },
  { rank: 2,  cards: ["9", "8", "7", "6", "5"],  suit: "heart",   prob: "0,0279%" },
  { rank: 3,  cards: ["8", "8", "8", "8", "K"],  suit: null,      prob: "0,168%"  },
  { rank: 4,  cards: ["Q", "Q", "Q", "5", "5"],  suit: null,      prob: "2,60%"   },
  { rank: 5,  cards: ["A", "J", "8", "6", "2"],  suit: "diamond", prob: "3,03%"   },
  { rank: 6,  cards: ["7", "6", "5", "4", "3"],  suit: null,      prob: "4,62%"   },
  { rank: 7,  cards: ["J", "J", "J", "A", "4"],  suit: null,      prob: "4,83%"   },
  { rank: 8,  cards: ["10", "10", "8", "8", "A"], suit: null,     prob: "23,5%"   },
  { rank: 9,  cards: ["K", "K", "9", "6", "2"],  suit: null,      prob: "43,8%"   },
  { rank: 10, cards: ["A", "Q", "9", "5", "3"],  suit: null,      prob: "17,4%"   },
];

const CONTENT = {
  de: {
    dir: "ltr",
    pageSize: "A4",
    fileName: "poker-hand-rankings-de.pdf",
    fontStack: "'Helvetica Neue', Arial, sans-serif",
    title: "Pokerblätter-Reihenfolge",
    subtitle: "Alle 10 Hände von stark nach schwach – zum Ausdrucken (A4)",
    brand: "holdemmaster.com",
    headers: ["#", "Hand", "Beispiel", "Was es ist", "Wahrsch."],
    probNote:
      "Wahrscheinlichkeit = wie oft du dieses Blatt aus 7 Karten (2 Hole Cards + 5 Boardkarten) bis zum River triffst.",
    // 🔴 이 한 줄이 없으면 표가 «틀린 표»가 된다 — 7장 기준에선 High Card가 Zwei Paare보다 드물다.
    highCardNote:
      "Achtung: Aus 7 Karten ist High Card seltener (17,4%) als Zwei Paare (23,5%) – du triffst fast immer irgendetwas. Die Reihenfolge oben ist die Stärke, nicht die Häufigkeit.",
    tiebreak:
      "Gleichstand: Gleicher Handtyp? Es entscheiden die höchsten Karten, danach der Kicker. Sind alle fünf Karten identisch, wird der Pot geteilt.",
    footer: "holdemmaster.com/de/blog/holdem-hand-rankings",
    names: [
      ["Royal Flush", "A-K-Q-J-10 in einer Farbe"],
      ["Straight Flush", "5 in Folge, eine Farbe"],
      ["Vierling", "Vier Karten gleichen Werts"],
      ["Full House", "Drilling + Paar"],
      ["Flush", "Beliebige 5 einer Farbe"],
      ["Straße", "5 in Folge, gemischte Farben"],
      ["Drilling", "Drei Karten gleichen Werts"],
      ["Zwei Paare", "Zwei verschiedene Paare"],
      ["Paar", "Zwei Karten gleichen Werts"],
      ["High Card", "Überhaupt keine Kombination"],
    ],
  },
};

function renderCards(cards, suit) {
  const spans = cards.map((c) => `<span class="card">${esc(c)}</span>`).join("");
  const s = suit ? ` <span class="suit ${isRed(suit) ? "red" : "blk"}">${SUIT[suit]}</span>` : "";
  return spans + s;
}

function renderHtml(c, favicon) {
  const rows = HANDS.map((h, i) => {
    const [name, what] = c.names[i];
    return `<tr>
      <td class="rk">${h.rank}</td>
      <td class="nm">${esc(name)}</td>
      <td class="ex">${renderCards(h.cards, h.suit)}</td>
      <td class="wt">${esc(what)}</td>
      <td class="pb">${esc(h.prob)}</td>
    </tr>`;
  }).join("\n");

  return `<!doctype html>
<html lang="${c.lang ?? "de"}" dir="${c.dir}">
<head>
<meta charset="utf-8" />
<style>
  @page { size: ${c.pageSize}; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --felt: #0d3d2b; --green: #1c8059; --ink: #1f242e; --gray: #6b7380;
    --border: #d6dee6; --row-alt: #f6f9fb; --red: #c72129;
    --amber-bg: #fcf5e6; --amber-line: #d99933; --gold: #dfac2a;
  }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: ${c.fontStack}; color: var(--ink); }
  .page { width: 210mm; height: 297mm; overflow: hidden; position: relative; }

  .header { background: var(--felt); color: #fff; padding: 20px 16mm; display: flex; align-items: center; gap: 14px; }
  .logo { width: 34px; height: 34px; flex: 0 0 auto; }
  .htext { flex: 1 1 auto; }
  .htitle { font-size: 23px; font-weight: 700; letter-spacing: -0.2px; }
  .hsub { font-size: 10.5px; color: #d2e8de; margin-top: 5px; }
  .brand { text-align: right; flex: 0 0 auto; }
  .brand .url { font-weight: 700; font-size: 10.5px; color: var(--gold); }
  .brand .suits { margin-top: 5px; font-size: 14px; }
  .hs { margin-left: 4px; }
  .blk { color: #f2f2f2; } .red { color: #ff6b6e; }

  /* 🔴 치수는 «A4 한 장을 채우도록» 잡혀 있다. 첫 렌더가 하단 1/3을 비워 인쇄물로는
     미완성으로 보였다 — 새 주장을 덧붙이는 대신 **읽기 크기를 키워** 채웠다.
     테이블에서 눈으로 보는 인쇄물이라 큰 글씨가 곧 품질이다.
     ⚠ 값을 바꾸면 반드시 다시 렌더해 «한 장을 넘지 않는지» 눈으로 확인할 것. */
  .body { padding: 34px 16mm 0; }

  table { width: 100%; border-collapse: collapse; }
  thead th {
    background: var(--felt); color: #fff; font-size: 11px; letter-spacing: 0.6px;
    text-transform: uppercase; padding: 12px 9px; text-align: left;
  }
  thead th:first-child { text-align: center; width: 34px; }
  thead th:last-child { text-align: right; width: 86px; }
  tbody td { padding: 15px 9px; border-bottom: 1px solid var(--border); font-size: 14.5px; vertical-align: middle; }
  tbody tr:nth-child(even) { background: var(--row-alt); }
  .rk { text-align: center; font-weight: 700; color: var(--green); width: 34px; font-size: 15px; }
  .nm { font-weight: 700; white-space: nowrap; }
  .wt { color: var(--gray); font-size: 13px; }
  .pb { text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .card {
    display: inline-block; min-width: 25px; padding: 3px 5px; margin-right: 4px;
    border: 1px solid var(--border); border-radius: 3px; background: #fff;
    font-size: 13px; font-weight: 700; text-align: center;
  }
  .suit { font-size: 15px; }
  .suit.red { color: var(--red); } .suit.blk { color: var(--ink); }

  .note {
    margin-top: 20px; padding: 14px 16px; background: var(--amber-bg);
    border-left: 4px solid var(--amber-line); font-size: 12.5px; line-height: 1.6;
  }
  .note + .note { margin-top: 11px; }
  .note b { color: var(--ink); }

  .foot {
    position: absolute; left: 16mm; right: 16mm; bottom: 12mm;
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid var(--border); padding-top: 9px;
    font-size: 10px; color: var(--gray);
  }
  .foot .u { color: var(--green); font-weight: 700; }
</style>
</head>
<body>
  <div class="page">
    <div class="header">
      <img class="logo" src="${favicon}" alt="" />
      <div class="htext">
        <div class="htitle">${esc(c.title)}</div>
        <div class="hsub">${esc(c.subtitle)}</div>
      </div>
      <div class="brand">
        <div class="url">${esc(c.brand)}</div>
        <div class="suits">
          <span class="hs blk">${SUIT.spade}</span><span class="hs red">${SUIT.heart}</span><span class="hs red">${SUIT.diamond}</span><span class="hs blk">${SUIT.club}</span>
        </div>
      </div>
    </div>

    <div class="body">
      <table>
        <thead><tr>${c.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>
${rows}
        </tbody>
      </table>

      <div class="note"><b>${esc(c.probNote)}</b></div>
      <div class="note">${esc(c.highCardNote)}</div>
      <div class="note">${esc(c.tiebreak)}</div>
    </div>

    <div class="foot">
      <span>${esc(c.brand)}</span>
      <span class="u">${esc(c.footer)}</span>
    </div>
  </div>
</body>
</html>`;
}

async function renderPdf(lang, favicon, browser) {
  const c = CONTENT[lang];
  if (!c) throw new Error(`Unknown language: ${lang}`);
  const page = await browser.newPage();
  await page.setContent(renderHtml(c, favicon), { waitUntil: "networkidle" });
  const out = join(DOWNLOADS, c.fileName);
  await page.pdf({ path: out, format: c.pageSize, printBackground: true, preferCSSPageSize: true });
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
      console.log(`✅ ${lang} → ${out}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
