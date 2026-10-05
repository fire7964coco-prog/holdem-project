// `/ja/hand-chart` 사전 — 공용 차트(`components/hand-chart/hand-chart-tool.tsx`)의 일본어 문자열.
// ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md). EN 정본 = HAND_CHART_DICT_EN,
//   뜻 정본(타입 vs 콤보 기준 표기·각주) = ko `app/hand-chart/hand-chart-client.tsx`.
// 🔴 차트 값은 공개 자료 합의 레인지 — «GTO 차트/솔버가 계산한» 금지(EN의 «GTO»는 상속 문구라 따르지 않는다).
//
// 헤드텀 근거(DataForSEO google_ads search_volume · Japan 2392 / ja · 2026-10-05 실측 · 연평균):
//   ポーカー レンジ表 1,600 · ポーカー ハンドレンジ 1,300 · ポーカー ハンドレンジ表 1,000 · プリフロップ レンジ表 480 ·
//   ポーカー スターティングハンド表 90 · スターティングハンド表 90.
//   → 도구가 헤드텀 주인(사장님 10-05 원칙) = 「ハンドレンジ表」을 title 머리에, 「スターティングハンド表」는 H1 괄호·keywords로.
//   글 `holdem-starting-hands-chart` seoTitle(「8割は降りる? — ポーカー スターティングハンド表とレンジ」)과 다른 제목.
// 용어: docs/translation-terms-ja.md §92-95(포지션 약칭 영어 관용) · ja 코퍼스 「アンダーザガン(UTG)」 등 ·
//   app/ja/calculator/dict.ts 「ポケットペア/スーテッド/オフスート」 · 「コンボ」(ja 코퍼스 363회).
import type { HandChartDict } from "@/components/hand-chart/dict";

export const HAND_CHART_DICT_JA: HandChartDict = {
  numberLocale: "ja-JP",
  seo: {
    title: "ポーカー ハンドレンジ表 — ポジション別169ハンド早見表",
    description:
      "169種類のスターティングハンドを、UTG・HJ・CO・BTN・SBのポジション別に色分けしたハンドレンジ表。席をタップすると、オープンできる手だけが光ります。",
    path: "/ja/hand-chart",
    keywords: [
      "ポーカー ハンドレンジ表",
      "ポーカー レンジ表",
      "プリフロップ レンジ表",
      "ポーカー スターティングハンド表",
      "ポーカー ハンドレンジ",
      "オープンレンジ ポジション別",
    ],
  },
  hero: {
    badge: "♠ スターティングハンドのインタラクティブ表",
    h1: "ポーカー ハンドレンジ表(スターティングハンド表)",
    lead: "169種類のハンドすべてを、ポジション別(UTG → SB)に色分けしました。ポジションをタップすると、その席からオープンできるハンドだけがハイライトされます。",
    handsUnit: "ハンド",
    positionsUnit: "ポジション",
    tapHint: "タップ・ホバーですぐ確認",
  },
  filter: {
    caption: "ポジションを選ぶ → プレイできるハンドがハイライト",
    basisNote: [
      "各ポジションの%は",
      { b: "169種類中の割合" },
      "です(コンボ基準は下の表に併記しています)",
    ],
    showAll: "すべて表示",
    selected: "{pos}のオープンレンジ · {count} / 169({pct}%)",
    handsCount: "{n}ハンド",
  },
  positions: [
    "アンダーザガン(UTG)",
    "ハイジャック(HJ)",
    "カットオフ(CO)",
    "ボタン(BTN)",
    "スモールブラインド(SB)",
  ],
  typePct: "約{n}",
  grid: {
    swipe: "← 左右にスワイプして表全体を見る →",
    pocketPair: "ポケットペア",
    suited: "スーテッド",
    offsuit: "オフスート",
    openFrom: "{pos}以降でオープン",
    legendNote: "右上の三角 = スーテッド(s) · 対角線 = ポケットペア · 左下の三角 = オフスート(o)",
  },
  legend: {
    heading: "色の見方",
    seatLine: "169種類中 {pct}",
    fold: "フォールド",
    foldSub: "全ポジション",
  },
  table: {
    heading: "ポジション別オープンレンジ",
    swipe: "← 左右にスワイプして「レンジ · 代表ハンド」を見る",
    position: "ポジション",
    hands: "ハンド数",
    handsSub: "(169種類中)",
    range: "レンジ",
    rangeSub: "種類 / コンボ",
    examples: "代表ハンド",
    comboCell: "/ コンボ {pct}",
    notes: [
      [
        "* ",
        { b: "基準が2つあります。" },
        "「169種類中12%」はハンドの",
        { b: "種類" },
        "基準(169種類のうち何種類か)で、",
        { b: "コンボ" },
        "基準は1,326通りの組み合わせのうち何通りかです。同じレンジでも値が変わります — AAは1種類でも6コンボ、AKoは1種類でも12コンボあるからです。ソルバーや戦略記事はふつうコンボ基準を使います(詳しくは",
        { href: "/ja/blog/holdem-starting-hands-chart", text: "スターティングハンド表の記事" },
        ")。",
      ],
      [
        "* 標準的なオープンレンジの近似値です。実際のソルバーの計算値はオープンサイズ・スタック・相手のレンジによって変わります — たとえば",
        { href: "/ja/solver", text: "HoldemMaster GTOソルバー" },
        "のブラインド戦の例では、SBのオープンは3bb基準で46.6%(92種類・618コンボ)です。実戦ではテーブルの傾向とスタックの深さも加味して調整してください。",
      ],
    ],
  },
  why: {
    heading: "ポジションがハンド選択を左右する理由",
    items: [
      {
        title: "ポジション = 情報",
        desc: "ボタン(BTN)はフロップ以降、常に最後にアクションします。全員のベットやチェックを先に見られるので、同じハンドでもはるかに利益が出やすくなります。",
      },
      {
        title: "UTGの後ろには8人いる",
        desc: "9人テーブルのUTGからオープンレイズすると、後ろの8人がどう動くか分かりません。リレイズされる可能性が高いため、スーテッドコネクターのような投機的なハンドは価値を実現しにくく、プレミアムハンドに絞るべきです。",
      },
      {
        title: "スーテッドの価値",
        desc: "スーテッドのハンドは、同じ数字のオフスートより約3〜5%エクイティが高くなります。だからA8sはハイジャックからオープンできても、A8oはボタンまで待つのです。",
      },
      {
        title: "SBのジレンマ",
        desc: "スモールブラインドはフロップ以降、常に最初にアクションします。ボタンより広いレンジでも実現できるエクイティが少ないため、中程度の強さのハンドは利益が出にくくなります。",
      },
    ],
  },
  faqHeading: "よくある質問",
  related: {
    heading: "次に読む — 関連ガイド",
    items: [
      { href: "/ja/blog/holdem-starting-hands-chart", tag: "詳しい解説", title: "ポーカーのスターティングハンド表 — 打つべき手・降りる手", desc: "どの席でどのハンドを打つか、その理由まで" },
      { href: "/ja/blog/holdem-when-to-fold", tag: "フォールド", title: "ポーカーの降りどき — 一番地味に勝ちを積み上げるスキル", desc: "静かに一番勝ちを積み上げる規律" },
      { href: "/ja/blog/holdem-position-play", tag: "ポジション", title: "ポジションの立ち回り — インポジションとアウトオブポジション", desc: "なぜボタンが一番儲かる席なのか" },
      { href: "/ja/blog/holdem-hand-rankings", tag: "役", title: "ポーカーの役一覧 — 強い順・早見表・確率とキッカーの決まり方", desc: "ロイヤルフラッシュからハイカードまで10の役" },
      { href: "/ja/calculator", tag: "ツール", title: "ポーカー勝率計算機", desc: "どのハンドでもエクイティとポットオッズを正確に" },
    ],
  },
};
