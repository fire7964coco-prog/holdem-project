import type { HandChartDict } from "@/components/hand-chart/dict";

/**
 * `/zh/hand-chart` 간체 사전 — ★2026-10-05 신설(로케일 도구 확장 회차 1).
 * 용어 = docs/translation-terms-zh.md(UTG=枪口位 · HJ=劫持位 · CO 영문 주도 「CO（关煞位）」 · 同花/非同花)
 *        → lib/posts-zh/holdem-starting-hands-chart.ts·holdem-positions.ts 실표기 → app/zh/calculator/dict.ts(口袋对子·起手牌).
 * 헤드텀 근거(DFS google_ads search_volume · Singapore 2702 · 2026-10-05 실측):
 *   「翻前范围表」10 · 「德州扑克翻前范围表」10 · 「德州扑克起手牌」10 · 「德州扑克起手牌表」·「起手牌表」·「起手牌范围」 null.
 *   전부 바닥값이라 볼륨으로 못 가른다 → 사이트 기존 정본(글 태그 「德州扑克起手牌表」 · keyword-bank/zh-strategy.md의
 *   「德州扑克起手牌范围」·「翻前范围表」)을 따라 H1 = 起手牌表, title 뒤에 «翻前开池范围»를 붙였다.
 *   글 seoTitle(「80%的起手牌都该弃？德扑起手牌表怎么选」)과 겹치지 않게 도구 = «지금 표를 본다» 축.
 * 🔴 차트 = 공개 자료 합의 레인지. «GTO 차트·솔버가 계산한» 표현 금지(외부 기준 인용·솔버 제품명만 허용).
 */
export const HAND_CHART_DICT_ZH: HandChartDict = {
  numberLocale: "zh-CN",
  seo: {
    title: "德州扑克起手牌表 — 5个位置的翻前开池范围",
    description:
      "枪口位约12%，按钮位约42%。169种起手牌按5个位置上色，点一下位置就只亮出能开池的牌，组合占比一并列出，免费在线查看。",
    path: "/zh/hand-chart",
    keywords: ["德州扑克起手牌表", "起手牌范围", "翻前范围表", "德州扑克翻前范围表", "开池范围", "按钮位范围", "枪口位范围"],
  },
  hero: {
    badge: "♠ 互动起手牌工具",
    h1: "德州扑克起手牌表",
    lead: "169种起手牌按位置（UTG → SB）分色。点一个位置，就只高亮那个位置可以开池加注的手牌。",
    handsUnit: "种起手牌",
    positionsUnit: "个位置",
    tapHint: "点击 · 悬停即看",
  },
  filter: {
    caption: "选择位置 → 高亮可玩的手牌",
    basisNote: ["各位置的 % 是", { b: "169种中的占比" }, "（按组合计算的占比一并写在下方表格里）"],
    showAll: "全部显示",
    selected: "{pos} 开池范围 · {count} / 169（{pct}%）",
    handsCount: "{n}种",
  },
  positions: ["枪口位（UTG）", "劫持位（HJ）", "CO（关煞位）", "按钮位（BTN）", "小盲位（SB）"],
  typePct: "约{n}",
  grid: {
    swipe: "← 左右滑动查看完整表格 →",
    pocketPair: "口袋对子",
    suited: "同花",
    offsuit: "非同花",
    openFrom: "{pos} 起即可开池",
    legendNote: "右上三角 = 同花（s） · 对角线 = 口袋对子 · 左下三角 = 非同花（o）",
  },
  legend: {
    heading: "颜色说明",
    seatLine: "169种中 {pct}",
    fold: "弃牌",
    foldSub: "所有位置",
  },
  table: {
    heading: "各位置开池范围一览",
    swipe: "← 左右滑动查看「范围 · 代表手牌」",
    position: "位置",
    hands: "手牌数",
    handsSub: "（169种中）",
    range: "范围",
    rangeSub: "类型 / 组合",
    examples: "代表手牌",
    comboCell: "/ 组合 {pct}",
    notes: [
      [
        "* ",
        { b: "这里有两种口径。" },
        "「169种中12%」是按手牌",
        { b: "类型" },
        "算的（169种里占几种）；",
        { b: "组合" },
        "口径则是1,326个具体组合里占几个。同一个范围，两种口径的数字不一样——AA是1种但有6个组合，AKo是1种却有12个组合。求解器和策略文章通常用组合口径（",
        { href: "/zh/blog/holdem-starting-hands-chart", text: "起手牌表文章" },
        "里的百分比就是按1,326个组合计算的）。",
      ],
      [
        "* 这是标准开池范围的近似值。实际的求解器结果会随开池尺寸、筹码深度和对手范围而变——例如",
        { href: "/zh/solver", text: "HoldemMaster GTO 求解器" },
        "的盲注对抗示例中，SB 开池在3bb尺寸下是46.6%（92种、618个组合）。实战中请再结合牌桌风格和筹码深度调整。",
      ],
    ],
  },
  why: {
    heading: "为什么位置决定你玩哪些牌",
    items: [
      {
        title: "位置 = 信息量",
        desc: "按钮位（BTN）翻牌后永远最后行动。先看完所有人的下注和过牌再做决定，同一手牌的盈利能力会高得多。",
      },
      {
        title: "UTG 身后还有8个人",
        desc: "9人桌在枪口位开池加注时，你不知道后面8个人会怎么反应。被再加注的概率高，同花连张这类投机牌很难兑现价值，所以要收紧到强牌为主。",
      },
      {
        title: "同花的价值",
        desc: "同花手牌比同点数的非同花手牌大约多3~5%的胜率。这就是A8s在劫持位可以开池、A8o却要等到按钮位的原因。",
      },
      {
        title: "小盲位的两难",
        desc: "小盲位翻牌后永远第一个行动。即使范围比按钮位还宽，能兑现的胜率也更低，中等强度手牌的盈利能力随之下降。",
      },
    ],
  },
  faqHeading: "常见问题",
  related: {
    heading: "下一步 — 相关文章",
    items: [
      { href: "/zh/blog/holdem-starting-hands-chart", tag: "深度指南", title: "德州扑克起手牌表 & 最强起手牌一览", desc: "每个位置开哪些牌、为什么这样开" },
      { href: "/zh/blog/holdem-when-to-fold", tag: "弃牌", title: "德州扑克什么时候弃牌", desc: "闷声赢最多的一项技术" },
      { href: "/zh/blog/holdem-position-play", tag: "位置", title: "位置策略：有位置 vs 没位置", desc: "为什么按钮位是最赚钱的座位" },
      { href: "/zh/blog/holdem-hand-rankings", tag: "牌型", title: "德州扑克牌型大小排名", desc: "从皇家同花顺到高牌，10种牌型全收录" },
      { href: "/zh/calculator", tag: "工具", title: "德州扑克概率计算器", desc: "任意手牌的精确胜率与底池赔率" },
    ],
  },
};
