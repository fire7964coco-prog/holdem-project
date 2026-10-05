// /zh/glossary — 简体中文 扑克术语词典 (★2026-10-05 로케일 도구 확장 회차 2)
//
// 정의 출처: 글 축어 37개 · 번역 9개 (Board · Flop · Offsuit · Outs · Position · Preflop · River · SPR · Turn)
// - 축어 = lib/posts-zh/holdem-glossary.ts 표 문안(링크·굵게 표시만 벗김 · «见 …» 링크 괄호는 삭제).
// - Flop/Turn/River는 글에 «翻牌 / 转牌 / 河牌» 묶음 1행뿐이라 EN desc를 번역했다(글 문안과 모순 없음).
// - 3-Bet = 글 표 «3bet» 행 + «3bet 的数法» 행 이어붙임. Semi-Bluff = «诈唬 / 半诈唬» 행 전체, Bluff = 그 앞 절.
// - 표기: offsuit=非同花(코퍼스 47:11), outs/SPR 표기는 코퍼스 따름.
// - EN 용어 수 = 46개(app/en/glossary/glossary-data.ts 실측 · 브리프의 47은 착오로 보임) → 같은 46개·같은 순서·같은 cat.
//
// seo.title 헤드텀: DataForSEO google_ads search_volume (말레이시아 2458 · zh_CN · 2026-10-05 1회)
//   德州扑克术语 10 · 德扑术语 10(간헐) · 扑克术语 / 德州扑克术语大全 / 扑克术语表 = 데이터 없음
//   → 볼륨 있는 «德州扑克术语»를 앞머리로. 글 seoTitle(«从 nuts 到 fish——看得懂的德州扑克术语大全»)과는 다른 문장(词典=찾아보는 도구).

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_ZH: GlossaryDict = {
  sortLocale: "zh-CN",
  grouping: "category",
  seo: {
    title: "德州扑克术语词典——德扑术语中英对照，按分类一键查",
    description:
      "可搜索的德州扑克术语词典：nuts、outs、底池赔率、3bet、c-bet、ICM、SPR、踢脚、上头等常用德扑术语，中英对照，按动作、牌型、位置等分类筛选。",
    keywords:
      "德州扑克术语, 德扑术语, 扑克术语, 德州扑克术语英文, 扑克术语表, nuts 是什么意思, outs 补牌, 底池赔率, 3bet 是什么, c-bet, ICM, SPR",
    path: "/zh/glossary",
  },
  hero: {
    badge: "♠ {n} 个术语 · 中英对照可搜索",
    h1: "德州扑克术语词典",
    leadBefore: "牌桌上会听到的德扑术语——",
    leadStrong: "nuts、outs、底池赔率、3bet、ICM",
    leadAfter: " 等等——用大白话讲清楚。可直接搜索，也可按分类筛选。",
  },
  searchPlaceholder: "搜索术语（如 nuts、底池赔率、outs）...",
  allLabel: "全部",
  cats: { Action: "动作", Hand: "牌型", Position: "位置", Math: "数学", Board: "牌面", Slang: "黑话" },
  empty: { title: "没有找到与“{q}”相关的术语。", hint: "换个关键词或分类试试。" },
  related: {
    ariaLabel: "相关指南",
    heading: "继续学习",
    items: [
      { href: "/zh/blog/texas-holdem-rules-for-beginners", label: "德州扑克规则", desc: "盲注、摊牌、基本流程" },
      { href: "/zh/blog/holdem-hand-rankings", label: "牌型大小", desc: "10 种牌型从大到小" },
      { href: "/zh/blog/holdem-strategy", label: "策略", desc: "位置、底池赔率、诈唬" },
      { href: "/zh/hand-chart", label: "起手牌表", desc: "按位置的开池范围" },
      { href: "/zh/calculator", label: "计算器", desc: "胜率、底池赔率、ICM" },
    ],
  },
  terms: [
    { term: "3bet", cat: "Action", aka: ["3-Bet", "3-bet", "three-bet", "再加注"], desc: "一次开池之后的再加注（第 3 次下注，把盲注算作第 1 次）。盲注是第 1 次下注、开池加注是第 2 次，所以再加注才是 3bet（不是第一次加注）。" },
    { term: "all in（全下）", cat: "Action", aka: ["All-in", "allin", "全下", "Jam", "Shove"], desc: "把你全部筹码押进去；你只能赢下你所覆盖的那部分底池。" },
    { term: "前注（Ante）", cat: "Action", aka: ["Ante", "大盲前注"], desc: "传统上是每个人都交的一小笔强制下注，用来起底池，跟盲注分开算——如今大多数锦标赛改用大盲前注，由一个座位替全桌交。" },
    { term: "后门听牌（Backdoor）", cat: "Board", aka: ["Backdoor", "后门"], desc: "需要连着两张牌才能凑成的听牌（转牌和河牌都得来）。" },
    { term: "bad beat", cat: "Slang", aka: ["Bad Beat", "爆冷"], desc: "作为大热门却被对手一张幸运牌翻盘。" },
    { term: "bankroll（资金）", cat: "Slang", aka: ["Bankroll", "资金"], desc: "你为打扑克整体留出的钱——不是桌上的筹码。" },
    { term: "盲注（Blinds）", cat: "Action", aka: ["Blinds", "Blind", "SB", "BB", "小盲", "大盲"], desc: "用来开启行动的强制 SB/BB 下注——也是级别档位的叫法。" },
    { term: "诈唬（Bluff）", cat: "Action", aka: ["Bluff"], desc: "诈唬是用弱牌下注逼走更好的牌。" },
    { term: "牌面（Board）", cat: "Board", aka: ["Board", "公共牌"], desc: "桌子中间的公共牌。“湿润”的牌面听牌多、很危险；“干燥”的牌面几乎没有听牌。" },
    { term: "按钮位（Button / BTN）", cat: "Position", aka: ["Button", "BTN", "庄家位", "庄位"], desc: "庄家位；翻后最后行动——全桌最好的座位。" },
    { term: "跟注（Call）", cat: "Action", aka: ["Call"], desc: "跟上当前的下注以留在这手牌里。" },
    { term: "过牌（Check）", cat: "Action", aka: ["Check"], desc: "不下注就把行动权让出去——只有你不需要再补筹码跟上下注时才可以过。" },
    { term: "过牌加注（Check-raise）", cat: "Action", aka: ["Check-Raise", "check raise"], desc: "先过牌，等对手下注后再加注——一条强力、有欺骗性的线（现代牌房都合法）。" },
    { term: "c-bet（持续下注）", cat: "Action", aka: ["C-Bet", "cbet", "Continuation Bet", "持续下注"], desc: "翻前加注的那个人在翻牌圈打出的“持续下注”。" },
    { term: "cooler", cat: "Slang", aka: ["Cooler", "冤家牌"], desc: "一手大牌无失误地输给了更大的牌。" },
    { term: "听牌（Draw）", cat: "Hand", aka: ["Draw", "同花听牌", "顺子听牌"], desc: "还需要变强的一手牌——比如同花听牌（差一张凑同花）或顺子听牌。" },
    { term: "胜率 / 权益（Equity）", cat: "Math", aka: ["Equity", "胜率", "权益"], desc: "你此刻在底池里占的百分比份额。" },
    { term: "翻牌（Flop）", cat: "Board", aka: ["Flop", "翻牌圈"], desc: "最先发出的三张公共牌，同时翻开，随后进行第二轮下注。" },
    { term: "弃牌（Fold）", cat: "Action", aka: ["Fold", "Muck"], desc: "放弃你的牌，也放弃对底池的一切主张。" },
    { term: "GTO", cat: "Math", aka: ["Game Theory Optimal", "博弈论最优"], desc: "博弈论最优（Game Theory Optimal）——来自求解器的一套平衡、不可被剥削的策略。" },
    { term: "卡顺听牌（Gutshot）", cat: "Hand", aka: ["Gutshot", "卡顺", "内听顺"], desc: "缺中间一张点数的内听顺子（4 张 outs）。" },
    { term: "range（范围）", cat: "Math", aka: ["Hand Range", "Range", "范围"], desc: "一名玩家在某个局面下可能拿着的全部牌的集合；高手想的是范围，而不是单一的牌。" },
    { term: "ICM", cat: "Math", aka: ["Independent Chip Model", "独立筹码模型"], desc: "独立筹码模型（Independent Chip Model）——在临近奖金跳档时把锦标赛筹码换算成真钱权益。" },
    { term: "踢脚（Kicker）", cat: "Hand", aka: ["Kicker", "踢脚牌"], desc: "一张用来在牌力相同的牌之间分胜负的边张。" },
    { term: "平跟入池（Limp）", cat: "Action", aka: ["Limp", "平跟", "溜入"], desc: "翻前只跟大盲、不加注就入池——通常是一种偏弱、被动的打法。" },
    { term: "nuts（坚果牌）", cat: "Hand", aka: ["Nuts", "the nuts", "坚果", "坚果牌"], desc: "在当前牌面下能拿到的最强牌（后面的街可能会改变它）。" },
    { term: "非同花（Offsuit）", cat: "Hand", aka: ["Offsuit", "不同花", "o"], desc: "两张不同花色的牌（例如 A♠K♦）。比同一手牌的同花版本略弱，因为它凑成同花的可能性小得多。" },
    { term: "outs（补牌）", cat: "Math", aka: ["Outs", "补牌"], desc: "牌堆里剩下的、能让你的牌变成赢牌的那些牌。同花听牌有 9 张 outs；两头顺听牌有 8 张。" },
    { term: "超对（Overpair）", cat: "Hand", aka: ["Overpair"], desc: "一对比牌面上每一张牌都大的口袋对子。" },
    { term: "位置（Position）", cat: "Position", aka: ["Position", "有位置", "无位置", "In position", "Out of position"], desc: "你在下注顺序里行动的先后。越晚行动（“有位置”）优势越大，因为你能先看到对手怎么做再做决定。" },
    { term: "底池（Pot）", cat: "Board", aka: ["Pot", "锅"], desc: "正在争夺的全部筹码。" },
    { term: "底池赔率（Pot odds）", cat: "Math", aka: ["Pot Odds"], desc: "底池与一次跟注成本的比值。" },
    { term: "翻前（Preflop）", cat: "Board", aka: ["Preflop", "Pre-Flop", "翻牌前"], desc: "第一轮下注，在发出任何公共牌之前，此时每名玩家手里只有自己的两张底牌。" },
    { term: "抽水（Rake）", cat: "Slang", aka: ["Rake"], desc: "牌房从大多数底池里抽的一份。" },
    { term: "加注（Raise）", cat: "Action", aka: ["Raise"], desc: "提高当前的下注额，逼别人跟更多或弃牌。" },
    { term: "河牌（River）", cat: "Board", aka: ["River", "河牌圈"], desc: "第五张也是最后一张公共牌，随后进行摊牌前的最后一轮下注。" },
    { term: "半诈唬（Semi-bluff）", cat: "Action", aka: ["Semi-Bluff", "semibluff"], desc: "诈唬是用弱牌下注逼走更好的牌；半诈唬则是用一手还能变强的听牌来做同样的事。" },
    { term: "set（暗三条）", cat: "Hand", aka: ["Set", "暗三条"], desc: "用一对口袋对子 + 一张公共牌组成的三条（隐蔽性极好）。" },
    { term: "摊牌（Showdown）", cat: "Board", aka: ["Showdown"], desc: "最后一注之后亮牌决定赢家。" },
    { term: "SPR（筹码底池比）", cat: "Math", aka: ["SPR", "Stack-to-Pot Ratio", "筹码底池比"], desc: "Stack-to-Pot Ratio——有效筹码 ÷ 底池。SPR 低时，更适合用强成手牌投入筹码；SPR 高时，听牌和翻后技术更吃香。" },
    { term: "筹码量（Stack）", cat: "Slang", aka: ["Stack", "深筹码", "短筹码"], desc: "一名玩家面前的筹码。" },
    { term: "上头（Tilt）", cat: "Slang", aka: ["Tilt"], desc: "被情绪带偏的糟糕打法，通常发生在输牌之后。" },
    { term: "trips（明三条）", cat: "Hand", aka: ["Trips", "明三条"], desc: "用一张底牌 + 牌面上已有的一对组成的三条（容易输在踢脚上）。" },
    { term: "转牌（Turn）", cat: "Board", aka: ["Turn", "转牌圈"], desc: "翻牌之后发出的第四张公共牌，随后有它自己的一轮下注。" },
    { term: "价值下注（Value bet）", cat: "Action", aka: ["Value Bet", "价值注"], desc: "用一手强牌下注，指望被更差的牌跟。" },
    { term: "轮子（The wheel）", cat: "Hand", aka: ["Wheel", "The Wheel"], desc: "A-2-3-4-5 的顺子，最小的顺子（A 当 1 用）。" },
  ],
};
