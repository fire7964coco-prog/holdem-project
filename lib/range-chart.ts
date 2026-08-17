/**
 * `:::rangechart:::` 디렉티브의 데이터 — 포지션별 오픈 레인지 막대 차트.
 *
 * ★2026-08-17 신설. 그 전까지 이 값과 주석은 `lib/render-markdown.ts` 안에 **하드코딩**돼 있었고
 *   그래서 두 가지가 동시에 깨져 있었다(de 검수 지시서 W13·W14):
 *   ① **본문과 값이 어긋났다** — 컴포넌트 UTG 12 / CO 28 / BTN 40 ↔ 본문 표 13 / 27 / 43.
 *      독자가 한 화면에서 두 세트의 숫자를 봤다.
 *   ② **주석이 통째로 영어**였다. 렌더러가 하나뿐이라 이 디렉티브를 쓰는 전 로케일이
 *      같은 영어 문장을 받았고, 로케일화가 원리상 불가능한 구조였다.
 *
 * 🔴 **값의 출처는 이 파일이 아니라 «글 본문 표»다.** 아래 PCT 는 그 표를 옮긴 것이고,
 *    `scripts/check-rangechart.mjs` 가 매 실행마다 8개 로케일 본문과 대조한다.
 *    값을 바꾸려면 **본문 표를 먼저 고치고** 그 다음 여기를 맞춰라. 반대로 하면 게이트가 빨간불이다.
 *
 * 🔴 **없는 좌석을 만들지 마라.** 구판에는 LJ·HJ·SB·BB 행이 있었는데
 *    - 본문에는 중간 좌석이 «MP ~17%» **하나**뿐이라 LJ 16 / HJ 20 분할은 근거가 없었고,
 *    - 이 글은 **SB·BB 오픈 레인지를 아예 다루지 않는다** — SB 35% / BB ~40% def 는 출처가 없었다.
 *    그래서 네 행(본문 표와 1:1)만 남겼다. 되살리려면 **본문에 근거를 먼저 만들어라.**
 *    ⚠ `/hand-chart` 도구의 값(UTG 12·HJ 20·CO 29·BTN 42·SB 56)을 여기로 옮기지도 마라 —
 *      그건 그 도구 자체 169핸드 그리드에서 계산된 별개 데이터이고,
 *      `app/hand-chart/page.tsx` 주석이 SB 56%는 솔버 실측(46.6%)과 9.4%p 다르다고 못박아 뒀다.
 */

/** 좌석 순서 = 본문 표와 같은 순서(UTG → BTN). 독자가 표와 줄 단위로 대조할 수 있게 한다. */
export const RANGE_CHART_SEATS = [
  { id: "UTG", pct: 13, color: "rgba(255,255,255,0.42)", bg: "rgba(255,255,255,0.06)" },
  { id: "MP", pct: 17, color: "rgba(212,175,55,0.55)", bg: "rgba(212,175,55,0.08)" },
  { id: "CO", pct: 27, color: "rgba(212,175,55,0.8)", bg: "rgba(212,175,55,0.12)" },
  { id: "BTN", pct: 43, color: "rgba(212,175,55,1)", bg: "rgba(212,175,55,0.18)" },
] as const;

export type RangeChartSeatId = (typeof RANGE_CHART_SEATS)[number]["id"];

type SeatCopy = { label: string; note: string };
type ChartCopy = { title: string; seats: Record<RangeChartSeatId, SeatCopy> };

/**
 * 라벨은 **각 로케일 본문 표의 표기를 그대로** 가져왔다(미러 3단계: 기존 어휘 재사용).
 * 주석은 그 글이 이미 하는 주장만 짧게 옮긴 것이다 — 새 사실을 넣지 않는다:
 *   · UTG 뒤 8명 = 9맥스 기준, 본문이 직접 쓴다
 *   · CO 는 **포스트플랍**에 버튼만 뒤에 남는다(프리플랍은 BTN·SB·BB 셋이 뒤다 — 국면을 흐리지 마라)
 *   · BTN 은 포스트플랍 매 스트리트 마지막 행동
 */
export const RANGE_CHART_COPY: Record<string, ChartCopy> = {
  en: {
    title: "Opening range by position — action folds to you",
    seats: {
      UTG: { label: "UTG (Early)", note: "Tightest seat — eight players still act behind you" },
      MP: { label: "MP (Middle)", note: "Add mid pairs and suited broadways" },
      CO: { label: "CO (Cutoff)", note: "Only the button acts after you postflop" },
      BTN: { label: "BTN (Button)", note: "Acts last on every postflop street" },
    },
  },
  ko: {
    title: "포지션별 오픈 레인지 — 앞이 다 폴드했을 때",
    seats: {
      UTG: { label: "UTG (얼리)", note: "가장 타이트 — 뒤에 여덟 명이 남는다" },
      MP: { label: "MP (미들)", note: "미들 페어와 수딧 브로드웨이를 더한다" },
      CO: { label: "CO (컷오프)", note: "포스트플랍에 버튼만 뒤에 남는다" },
      BTN: { label: "BTN (버튼)", note: "포스트플랍 매 스트리트 마지막 행동" },
    },
  },
  de: {
    title: "Open-Range nach Position — alle vor dir folden",
    seats: {
      UTG: { label: "UTG (Früh)", note: "Engster Sitz — acht Spieler handeln noch hinter dir" },
      MP: { label: "MP (Mitte)", note: "Mittlere Paare und Suited Broadways kommen dazu" },
      CO: { label: "CO (Cutoff)", note: "Postflop handelt nur noch der Button nach dir" },
      BTN: { label: "BTN (Button)", note: "Handelt auf jeder Postflop-Street zuletzt" },
    },
  },
  es: {
    title: "Rango de apertura por posición — todos foldean antes que tú",
    seats: {
      UTG: { label: "UTG (Temprana)", note: "El asiento más cerrado: quedan ocho jugadores detrás" },
      MP: { label: "MP (Media)", note: "Suma pares medios y broadways del mismo palo" },
      CO: { label: "CO (Cutoff)", note: "Postflop solo actúa el botón después de ti" },
      BTN: { label: "BTN (Button)", note: "Actúa último en cada calle postflop" },
    },
  },
  pt: {
    title: "Range de abertura por posição — todos foldam antes de você",
    seats: {
      UTG: { label: "UTG (Inicial)", note: "O assento mais fechado: ainda há oito jogadores atrás" },
      MP: { label: "MP (Meio)", note: "Entram os pares médios e os broadways suited" },
      CO: { label: "CO (Cutoff)", note: "No pós-flop só o button age depois de você" },
      BTN: { label: "BTN (Button)", note: "Age por último em todas as ruas pós-flop" },
    },
  },
  id: {
    title: "Range pembukaan per posisi — semua fold sebelum Anda",
    seats: {
      UTG: { label: "UTG (Awal)", note: "Kursi paling ketat — masih ada delapan pemain di belakang" },
      MP: { label: "MP (Tengah)", note: "Tambah pair menengah dan suited broadway" },
      CO: { label: "CO (Cutoff)", note: "Pascaflop hanya button yang bertindak setelah Anda" },
      BTN: { label: "BTN (Button)", note: "Bertindak terakhir di setiap street pascaflop" },
    },
  },
  ja: {
    title: "ポジション別オープンレンジ — 前が全員フォールドしたとき",
    seats: {
      UTG: { label: "UTG(アーリー)", note: "最もタイト — 後ろにまだ8人残る" },
      MP: { label: "MP(ミドル)", note: "ミドルペアとスーテッドブロードウェイを追加" },
      CO: { label: "CO(カットオフ)", note: "ポストフロップで後ろに残るのはボタンだけ" },
      BTN: { label: "BTN(ボタン)", note: "ポストフロップは毎ストリート最後に行動" },
    },
  },
  zh: {
    title: "各位置的开牌范围 — 前面全部弃牌时",
    seats: {
      UTG: { label: "UTG（前面位置）", note: "最紧的位置——身后还有八名玩家" },
      MP: { label: "MP（中间位置）", note: "加入中对和同花百老汇" },
      CO: { label: "CO（关煞位）", note: "翻后只有按钮位在你之后行动" },
      BTN: { label: "BTN（按钮位）", note: "翻后每条街都最后行动" },
    },
  },
  "zh-hant": {
    title: "各位置的開牌範圍 — 前面全部棄牌時",
    seats: {
      UTG: { label: "UTG（槍口位／前位）", note: "最緊的位置——身後還有八名玩家" },
      MP: { label: "MP（中位）", note: "加入中對與同花百老匯" },
      CO: { label: "CO（關煞位）", note: "翻後只有按鈕位在你之後行動" },
      BTN: { label: "BTN（按鈕位）", note: "翻後每條街都最後行動" },
    },
  },
};

/** 없는 로케일은 EN 으로 떨어진다 — 빈 차트를 내보내는 것보다 낫다. */
export function rangeChartCopy(locale?: string): ChartCopy {
  return (locale && RANGE_CHART_COPY[locale]) || RANGE_CHART_COPY.en;
}
