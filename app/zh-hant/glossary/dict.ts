// /zh-hant/glossary — 繁體中文（台灣）德州撲克術語查詢 (★2026-10-05 로케일 도구 확장 회차 2)
//
// 정의 출처: 글 축어 37개 · 번역 9개 (Board · Flop · Offsuit · Outs · Position · Preflop · River · SPR · Turn)
// - 축어 = lib/posts-zh-hant/holdem-glossary.ts 표 문안(링크·굵게 표시만 벗김 · «見 …» 링크 괄호는 삭제).
// - Flop/Turn/River는 글에 «翻牌／轉牌／河牌» 묶음 1행뿐이라 EN desc를 번역했다(글 문안과 모순 없음).
// - 3-Bet = 글 표 «3-bet» 행 + «3-bet 的數法» 행 이어붙임. Semi-Bluff = «詐唬／半詐唬» 행 전체, Bluff = 그 앞 절.
// - 표기: offsuit=不同花(코퍼스 56:2 · translation-terms-zh-hant «Natural8=不同花»), Preflop=翻牌前（Pre-Flop）, Outs=補牌（Outs）.
// - EN 용어 수 = 46개(app/en/glossary/glossary-data.ts 실측 · 브리프의 47은 착오로 보임) → 같은 46개·같은 순서·같은 cat.
//
// seo.title 헤드텀: DataForSEO google_ads search_volume (대만 2158 · zh_TW · 2026-10-05 1회)
//   德州撲克術語 480 · 撲克術語 20 · 德州撲克術語英文 20 · 德州撲克術語大全 / 撲克術語表 = 데이터 없음
//   → «德州撲克術語»를 앞머리로, «中英對照»(英文 수요)를 보조로. 글 seoTitle(«從 Nuts 到 Fish——德州撲克術語中英對照大全»)과는 다른 문장.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_ZH_HANT: GlossaryDict = {
  sortLocale: "zh-TW",
  grouping: "category",
  seo: {
    title: "德州撲克術語查詢——撲克術語中英對照，可搜尋、按分類篩選",
    description:
      "可搜尋的德州撲克術語查詢工具：堅果、補牌、底池賠率、3-bet、C-bet、ICM、SPR、踢腳牌、上頭等常用術語，中英對照，按動作、牌型、位置等分類篩選。",
    keywords:
      "德州撲克術語, 撲克術語, 德州撲克術語英文, 德州撲克術語大全, 撲克術語表, Nuts 意思, 補牌 Outs, 底池賠率, 3-bet 是什麼, C-bet, ICM, SPR",
    path: "/zh-hant/glossary",
  },
  hero: {
    badge: "♠ {n} 個術語 · 中英對照可搜尋",
    h1: "德州撲克術語查詢",
    leadBefore: "牌桌上會聽到的德州撲克術語——",
    leadStrong: "堅果、補牌、底池賠率、3-bet、ICM",
    leadAfter: " 等等——用白話講清楚。可直接搜尋，也可按分類篩選。",
  },
  searchPlaceholder: "搜尋術語（例如 Nuts、底池賠率、補牌）...",
  allLabel: "全部",
  cats: { Action: "動作", Hand: "牌型", Position: "位置", Math: "數學", Board: "牌面", Slang: "俚語" },
  empty: { title: "找不到與「{q}」相關的術語。", hint: "換個關鍵字或分類試試看。" },
  related: {
    ariaLabel: "相關指南",
    heading: "繼續學習",
    items: [
      { href: "/zh-hant/blog/texas-holdem-rules-for-beginners", label: "德州撲克規則", desc: "盲注、攤牌、基本流程" },
      { href: "/zh-hant/blog/holdem-hand-rankings", label: "牌型大小", desc: "10 種牌型由大到小" },
      { href: "/zh-hant/blog/holdem-strategy", label: "策略", desc: "位置、底池賠率、詐唬" },
      { href: "/zh-hant/hand-chart", label: "起手牌表", desc: "依位置的開池範圍" },
      { href: "/zh-hant/calculator", label: "計算機", desc: "勝率、底池賠率、ICM" },
    ],
  },
  terms: [
    { term: "3-bet", cat: "Action", aka: ["3-Bet", "3bet", "three-bet", "再加注"], desc: "開池之後的再加注（把盲注算成第一次下注，這是第三次）。盲注是第 1 次下注、開池加注是第 2 次，所以再加注才是 3-bet（不是第一次加注）。" },
    { term: "全下（All-in）", cat: "Action", aka: ["All-in", "allin", "Jam", "Shove"], desc: "押上你全部的籌碼；你只能贏你有蓋到的那部分底池。" },
    { term: "底注（Ante）", cat: "Action", aka: ["Ante", "前注", "大盲底注"], desc: "傳統上是每個人都交、用來墊底池的小額強制注，和盲注分開——現今多數錦標賽改用大盲底注，由一個座位替全桌交。" },
    { term: "後門（Backdoor）", cat: "Board", aka: ["Backdoor", "後門聽牌"], desc: "需要兩張接連的牌（轉牌和河牌）才能成。" },
    { term: "Bad Beat（爆冷門）", cat: "Slang", aka: ["Bad Beat", "爆冷門", "爆冷"], desc: "你是大熱門，卻被一張幸運牌超車輸掉。" },
    { term: "本金／資金（Bankroll）", cat: "Slang", aka: ["Bankroll", "本金", "資金"], desc: "你整體撥給撲克的錢——不是桌上的籌碼。" },
    { term: "盲注（Blinds）", cat: "Action", aka: ["Blinds", "Blind", "SB", "BB", "小盲", "大盲"], desc: "開場的 SB/BB 強制注——也是級別的名稱（$1/$2）。" },
    { term: "詐唬（Bluff）", cat: "Action", aka: ["Bluff"], desc: "詐唬是拿弱牌下注逼走更好的牌。" },
    { term: "牌面（Board）", cat: "Board", aka: ["Board", "公牌"], desc: "桌面中間的公牌。「濕」的牌面聽牌多、很危險；「乾」的牌面幾乎沒有聽牌。" },
    { term: "按鈕位（Button, BTN）", cat: "Position", aka: ["Button", "BTN", "莊家位", "莊家按鈕位"], desc: "莊家位置；翻牌後最後行動——全桌最好的座位。" },
    { term: "跟注（Call）", cat: "Action", aka: ["Call"], desc: "跟上目前的下注，留在這手牌裡。" },
    { term: "過牌（Check）", cat: "Action", aka: ["Check"], desc: "不下注、把行動權讓給下一位——只有你不需要再補籌碼跟上下注時才行。" },
    { term: "過牌加注（Check-raise）", cat: "Action", aka: ["Check-Raise", "check raise"], desc: "先過牌，等對手下注後再加注——強而有欺騙性的一手（現代撲克室合法）。" },
    { term: "C-bet（持續下注）", cat: "Action", aka: ["C-Bet", "cbet", "Continuation Bet", "持續下注"], desc: "翻牌前加注的人，在翻牌圈接著下的注。" },
    { term: "Cooler（冤家牌）", cat: "Slang", aka: ["Cooler", "冤家牌"], desc: "大牌輸給更大的牌、卻沒有任何失誤——是撲克裡最無奈的一種輸法。" },
    { term: "聽牌（Draw）", cat: "Hand", aka: ["Draw", "同花聽牌", "順子聽牌"], desc: "還需要改善的牌——例如同花聽牌（差一張成同花）或順子聽牌。" },
    { term: "勝率／權益（Equity）", cat: "Math", aka: ["Equity", "勝率", "權益"], desc: "你此刻占底池的百分比。" },
    { term: "翻牌（Flop）", cat: "Board", aka: ["Flop", "翻牌圈"], desc: "最先發出的三張公牌，同時翻開，接著進行第二輪下注。" },
    { term: "蓋牌（Fold）", cat: "Action", aka: ["Fold", "棄牌"], desc: "放棄你的牌，也放棄對底池的一切主張。" },
    { term: "GTO（賽局理論最佳解）", cat: "Math", aka: ["GTO", "Game Theory Optimal", "納許均衡"], desc: "解算器算出的平衡、不可被剝削的策略（納許均衡）。" },
    { term: "卡順（Gutshot）", cat: "Hand", aka: ["Gutshot", "內順"], desc: "內順聽牌，只差中間一張（4 張補牌）。" },
    { term: "範圍（Range）", cat: "Math", aka: ["Hand Range", "Range"], desc: "一名玩家在某個局面可能持有的所有手牌；高手用範圍思考，不是單一手牌。" },
    { term: "ICM（獨立籌碼模型）", cat: "Math", aka: ["ICM", "Independent Chip Model"], desc: "把錦標賽籌碼換算成真實獎金權益的模型，在泡沫期和決賽桌尤其重要。" },
    { term: "踢腳牌（Kicker）", cat: "Hand", aka: ["Kicker", "踢腳"], desc: "用來分辨相同牌型大小的旁牌。" },
    { term: "跛入（Limp）", cat: "Action", aka: ["Limp", "平跟"], desc: "翻牌前只跟大盲、不加注就入池——通常是弱、被動的打法。" },
    { term: "堅果（The Nuts）", cat: "Hand", aka: ["Nuts", "the nuts", "堅果牌"], desc: "目前牌面下最強的可能牌型（後面的牌可能會改變它）。" },
    { term: "不同花（Offsuit）", cat: "Hand", aka: ["Offsuit", "非同花", "o"], desc: "兩張不同花色的牌（例如 A♠K♦）。比同一手牌的同花版本稍弱，因為它成同花的機會小得多。" },
    { term: "補牌（Outs）", cat: "Math", aka: ["Outs", "補牌數"], desc: "牌堆裡剩下、能讓你的牌變成贏牌的那些牌。同花聽牌有 9 張補牌；兩頭順有 8 張。" },
    { term: "超對（Overpair）", cat: "Hand", aka: ["Overpair"], desc: "比牌面上每一張都大的口袋對。" },
    { term: "位置（Position）", cat: "Position", aka: ["Position", "有利位置", "不利位置", "In position", "Out of position"], desc: "你在下注順序裡行動的先後。越晚行動（「有利位置」）優勢越大，因為你能先看到對手怎麼做再做決定。" },
    { term: "底池（Pot）", cat: "Board", aka: ["Pot"], desc: "大家在爭的全部籌碼。" },
    { term: "底池賠率（Pot odds）", cat: "Math", aka: ["Pot Odds"], desc: "底池對上跟注成本的比率。" },
    { term: "翻牌前（Pre-Flop）", cat: "Board", aka: ["Preflop", "Pre-Flop", "翻前"], desc: "第一輪下注，在發出任何公牌之前，這時每位玩家手上只有自己的兩張底牌。" },
    { term: "抽水（Rake）", cat: "Slang", aka: ["Rake"], desc: "撲克室收的一小份：現金局從大多數底池抽，錦標賽則含在買入費裡。" },
    { term: "加注（Raise）", cat: "Action", aka: ["Raise"], desc: "把目前的下注加大，逼別人跟更多或蓋牌。" },
    { term: "河牌（River）", cat: "Board", aka: ["River", "河牌圈"], desc: "第五張也是最後一張公牌，接著進行攤牌前的最後一輪下注。" },
    { term: "半詐唬（Semi-bluff）", cat: "Action", aka: ["Semi-Bluff", "semibluff"], desc: "詐唬是拿弱牌下注逼走更好的牌；半詐唬是拿還能成的聽牌去做。" },
    { term: "暗三條（Set）", cat: "Hand", aka: ["Set"], desc: "用口袋對 + 一張公牌做成的三條（藏得很深）。" },
    { term: "攤牌（Showdown）", cat: "Board", aka: ["Showdown"], desc: "最後一注結束後亮牌決定贏家。" },
    { term: "SPR（籌碼底池比）", cat: "Math", aka: ["SPR", "Stack-to-Pot Ratio", "籌碼底池比"], desc: "Stack-to-Pot Ratio——有效籌碼 ÷ 底池。SPR 低時，較適合拿強成牌投入籌碼；SPR 高時，聽牌和翻牌後的技術更吃香。" },
    { term: "籌碼量（Stack）", cat: "Slang", aka: ["Stack", "深籌碼", "短籌碼"], desc: "一名玩家面前的籌碼。" },
    { term: "上頭／傾斜（Tilt）", cat: "Slang", aka: ["Tilt", "上頭", "傾斜"], desc: "情緒失控導致的爛打，通常在輸牌之後。" },
    { term: "明三條（Trips）", cat: "Hand", aka: ["Trips"], desc: "用一張底牌 + 牌面上的一對做成的三條（容易輸在踢腳牌上）。" },
    { term: "轉牌（Turn）", cat: "Board", aka: ["Turn", "轉牌圈"], desc: "翻牌之後發出的第四張公牌，接著有它自己的一輪下注。" },
    { term: "價值下注（Value bet）", cat: "Action", aka: ["Value Bet"], desc: "拿強牌下注，希望被更差的牌跟。" },
    { term: "輪子（The Wheel）", cat: "Hand", aka: ["Wheel", "The Wheel"], desc: "A-2-3-4-5 的順子，最小的順子（A 當小）。" },
  ],
};
