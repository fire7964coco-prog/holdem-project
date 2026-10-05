import type { HandChartDict } from "@/components/hand-chart/dict";

/**
 * `/zh-hant/hand-chart` 번체(대만 우선) 사전 — ★2026-10-05 신설(로케일 도구 확장 회차 1).
 * 용어 = docs/translation-terms-zh-hant.md(UTG=槍口位 · CO=關煞位 · 同花/不同花 · 起手牌範圍)
 *        → lib/posts-zh-hant/holdem-positions.ts(Hijack=切入位 HJ · Lojack=劫機位 LJ)·holdem-starting-hands-chart.ts(按鈕位)
 *        → app/zh-hant/calculator/dict.ts(口袋對·起手牌).
 * 헤드텀 근거(DFS google_ads search_volume · Taiwan 2158 · 2026-10-05 실측):
 *   「翻前範圍表」90 · 「翻前範圍」50 · 「德州撲克起手牌」20 · 「德州撲克起手牌表」10 · 「起手牌表」·「起手牌範圍」·「德州撲克手牌表」 null.
 *   → H1 = 사이트 정본 헤드텀 「德州撲克起手牌表」, title 뒤에 볼륨 1위 「翻前範圍表」를 붙였다.
 *   글 seoTitle(「80%起手牌都該蓋？德州撲克起手牌表怎麼選」)과 겹치지 않게 도구 = «지금 표를 본다» 축.
 * 🔴 차트 = 공개 자료 합의 레인지. «GTO 차트·솔버가 계산한» 표현 금지(외부 기준 인용·솔버 제품명만 허용).
 */
export const HAND_CHART_DICT_ZH_HANT: HandChartDict = {
  numberLocale: "zh-TW",
  seo: {
    title: "德州撲克起手牌表｜依位置看的翻前範圍表",
    description:
      "槍口位約12%、按鈕位約42%。169種起手牌依5個位置上色，點一下位置就只亮出能開池的牌，組合占比也一起列出，免費線上看。",
    path: "/zh-hant/hand-chart",
    keywords: ["德州撲克起手牌表", "翻前範圍表", "翻前範圍", "起手牌範圍", "德州撲克起手牌", "位置範圍"],
  },
  hero: {
    badge: "♠ 互動式起手牌工具",
    h1: "德州撲克起手牌表",
    lead: "169種起手牌依位置（UTG → SB）分色。點一個位置，就只亮出那個位置可以開池加注的手牌。",
    handsUnit: "種起手牌",
    positionsUnit: "個位置",
    tapHint: "點擊 · 滑過即看",
  },
  filter: {
    caption: "選擇位置 → 可玩的手牌會亮起",
    basisNote: ["各位置的 % 是", { b: "169種中的占比" }, "（以組合計算的占比也一起寫在下方表格裡）"],
    showAll: "全部顯示",
    selected: "{pos} 開池範圍 · {count} / 169（{pct}%）",
    handsCount: "{n}種",
  },
  positions: ["槍口位（UTG）", "切入位（HJ）", "關煞位（CO）", "按鈕位（BTN）", "小盲位（SB）"],
  typePct: "約{n}",
  grid: {
    swipe: "← 左右滑動查看完整表格 →",
    pocketPair: "口袋對",
    suited: "同花",
    offsuit: "不同花",
    openFrom: "{pos} 起即可開池",
    legendNote: "右上三角 = 同花（s） · 對角線 = 口袋對 · 左下三角 = 不同花（o）",
  },
  legend: {
    heading: "顏色說明",
    seatLine: "169種中 {pct}",
    fold: "蓋牌",
    foldSub: "所有位置",
  },
  table: {
    heading: "各位置開池範圍一覽",
    swipe: "← 左右滑動查看「範圍 · 代表手牌」",
    position: "位置",
    hands: "手牌數",
    handsSub: "（169種中）",
    range: "範圍",
    rangeSub: "類型 / 組合",
    examples: "代表手牌",
    comboCell: "/ 組合 {pct}",
    notes: [
      [
        "* ",
        { b: "這裡有兩種算法。" },
        "「169種中12%」是以手牌",
        { b: "類型" },
        "計算（169種裡占幾種）；",
        { b: "組合" },
        "算法則是1,326個具體組合裡占幾個。同一個範圍，兩種算法的數字不一樣——AA是1種但有6個組合，AKo是1種卻有12個組合。解算器和策略文章通常用組合算法（",
        { href: "/zh-hant/blog/holdem-starting-hands-chart", text: "起手牌表文章" },
        "裡的百分比就是以1,326個組合計算的）。",
      ],
      [
        "* 這是標準開池範圍的近似值。實際的解算器結果會隨開池尺寸、籌碼深度和對手範圍而變——例如",
        { href: "/zh-hant/solver", text: "HoldemMaster GTO 解算器" },
        "的盲注對抗範例中，SB 開池在3bb尺寸下是46.6%（92種、618個組合）。實戰中請再依牌桌風格和籌碼深度調整。",
      ],
    ],
  },
  why: {
    heading: "為什麼位置決定你玩哪些牌",
    items: [
      {
        title: "位置 = 資訊量",
        desc: "按鈕位（BTN）翻牌後永遠最後行動。先看完所有人的下注和過牌再決定，同一手牌的獲利能力會高得多。",
      },
      {
        title: "UTG 後面還有8個人",
        desc: "9人桌在槍口位開池加注時，你不知道後面8個人會怎麼反應。被再加注的機率高，同花連張這類投機牌很難兌現價值，所以要收緊到強牌為主。",
      },
      {
        title: "同花的價值",
        desc: "同花手牌比同點數的不同花手牌大約多3~5%的勝率。這就是A8s在切入位可以開池、A8o卻要等到按鈕位的原因。",
      },
      {
        title: "小盲位的兩難",
        desc: "小盲位翻牌後永遠第一個行動。即使範圍比按鈕位還寬，能兌現的勝率也比較低，中等強度手牌的獲利能力跟著下降。",
      },
    ],
  },
  faqHeading: "常見問題",
  related: {
    heading: "下一步 — 相關文章",
    items: [
      { href: "/zh-hant/blog/holdem-starting-hands-chart", tag: "深度指南", title: "德州撲克起手牌表——最強起手牌、位置範圍與6人桌打法", desc: "每個位置開哪些牌、為什麼這樣開" },
      { href: "/zh-hant/blog/holdem-when-to-fold", tag: "蓋牌", title: "德州撲克何時該蓋牌？", desc: "最被低估的贏牌技巧" },
      { href: "/zh-hant/blog/holdem-position-play", tag: "位置", title: "德州撲克位置怎麼打？", desc: "為什麼按鈕位是最賺錢的座位" },
      { href: "/zh-hant/blog/holdem-hand-rankings", tag: "牌型", title: "德州撲克牌型大小完整教學", desc: "從皇家同花順到高牌，10種牌型一次看" },
      { href: "/zh-hant/calculator", tag: "工具", title: "撲克機率計算器", desc: "任何手牌的精確勝率與底池賠率" },
    ],
  },
};
