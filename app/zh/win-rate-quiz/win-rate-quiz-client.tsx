"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 간체 중국어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 키·분기·인자·계산은 EN과 1:1, 문장만 재저작.
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`) — 숫자·좌석·팟오즈는 전 언어 동일(§13).
 * 용어 출처 = docs/translation-terms-zh.md(족보 §2 · 포지션 영문 주도 · 补牌（outs） 병기)
 *   → app/zh/calculator/dict.ts(「胜率（equity）」·「底池赔率（跟注所需胜率）」·「同花听牌」·「隐含赔率」)
 *   → app/zh/solver(Flop study = 「翻牌查询」) → lib/posts-zh 코퍼스(开池·防守·半池·诈唬·半诈唬).
 * 헤드텀 실측(2026-10-12 · DFS Google Ads search_volume live · language zh_CN):
 *   CN(2156)·SG(2702)·MY(2458) 세 곳 모두 — 德州扑克练习 10 · 德州扑克胜率 10 · 德州扑克训练 10(바닥값),
 *   德州扑克模拟器 · 德州扑克胜率模拟器 · 德扑模拟器 = 값 없음. 볼륨으로는 판정 불가 → 카니발 회피 축(模拟器)으로 결정.
 */

const ZH_NAMES: HandNames = {
  categories: ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "四条", "同花顺"],
  drawingDead: "已无补牌",
  flushDraw: "同花听牌",
  straightDraw: "顺子听牌",
};

const ZH_UI: QuizUI = {
  names: ZH_NAMES,
  streets: ["翻牌前", "翻牌", "转牌", "河牌"],
  hero: "你",
  folded: "已弃牌",
  raise: "加注",
  call: "跟注",
  check: "过牌",
  allIn: "已全下",
  tableNote: "6人桌或9人桌 · 可选几个人看翻牌（2–6人）",
  playersBtn: (n) => `${n}人`,
  playersLabel: "人数",
  tableBtn: (n) => `${n}人桌`,
  styleLabel: "对手风格",
  styleHint: "对手风格——只改变翻牌起的行动规则，翻牌前范围不变",
  styleNames: { standard: "常规", tight: "紧", loose: "松", aggressive: "凶" },
  loading: "洗牌中，正在计算胜率…",

  myEquity: "你的胜率",
  vsOpponents: (n) => (n === 0 ? "对手已全部弃牌" : `对 ${n} 名对手`),
  basisSeat: "按各位置的范围计算",
  basisRange: "按符合对手动作的手牌计算",
  roleOpen: "开池",
  roleDefend: "防守",
  winShort: "赢",
  tieShort: "平",
  loseShort: "输",
  revealedLabel: "👀 按亮出的手牌计算",
  revealedNote: (gap) =>
    `上面的数字是在看不到对手底牌的前提下算的，所以差了 ${gap}%p。实际做决定时，该看的是上面那个数字。`,

  potOddsTitle: "底池赔率——跟注不亏所需的胜率",
  potLabel: "底池",
  potBeforeLabel: "底池（下注前）",
  toCallLabel: "需跟注",
  requiredLabel: "所需胜率",
  noBet: "没人下注，你可以免费看下一张牌。",
  noBetAllIn: (river) =>
    river
      ? "剩下的人都已全下，没有筹码可以再下注，直接摊牌。"
      : "剩下的人都已全下，没有筹码可以再下注。发完余下的公共牌后摊牌。",
  verdictCall: "跟注",
  verdictFold: "弃牌",
  impliedNote: "不过，如果成牌后还能多赢（隐含赔率），跟注仍可能是对的。",

  revealBtn: (next) => `发${next} →`,
  newHandBtn: "发新的一手 🔄",
  showCards: "👀 偷看对手底牌",
  hideCards: "🙈 盖回对手底牌",

  wonByFold: (pot) => `其他人全部弃牌——你拿下 ${pot.toLocaleString("en-US")} 的底池`,
  splitLabel: (names) => `平分底池——${names.join(" · ")} 打平`,
  winLabel: (name, cat) => `${name} 获胜 · ${cat}`,

  reviewTitle: "📋 复盘——该在哪里弃牌？",
  reviewCols: ["街", "你的胜率", "所需胜率", "判定"],
  reviewNoMistake: "✅ 这一手一路跟到底都是对的。",
  reviewMistake: (street) => `⚠️ 到${street}时，弃牌就已经是正确选择了。那里就是你该撤的地方。`,
  reviewInvested: (invested, pot) => `你投入了 ${invested.toLocaleString("en-US")} · 最终底池 ${pot.toLocaleString("en-US")}`,

  formulaTitle: "📐 这个数字是怎么来的",
  outsLabel: (n) => `有 ${n} 张牌能让你成牌或变强`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `成同花 ${o.flush} 张` : "",
      o.straight > 0 ? `成顺子 ${o.straight} 张` : "",
      o.set > 0 ? `成三条 ${o.set} 张` : "",
      o.twoPair > 0 ? `成两对 ${o.twoPair} 张` : "",
      o.over > 0 ? `高张成对 ${o.over} 张` : "",
      both > 0 ? `其中 ${both} 张同时算在两项里（只算一次）` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "这些牌出现的概率（速算法）",
  winLabel2: "你在底池中的胜率（模拟·平局按平分到的份额计）",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "这两个数字量的不是同一件事。上面是“中牌”的概率，下面是你“赢”下底池的份额（平局按平分到的份额计）。中了牌也可能因为对手变得更强而输，没中也可能赢。判定用的是下面那个数字。",
  noDrawNote: (basis, n) =>
    basis === "seat"
      ? `现在还在翻牌前，“补牌 × 2/4”速算法还用不上。上面的胜率，是让你对上每名对手从其位置可能会入池的手牌，模拟 ${n} 手得出的。`
      : `本工具计算的补牌——能凑成同花或顺子，或让你的牌型升一级、变成三条、两对或高张对子的牌——一张也没有，所以“补牌 × 2/4”速算法在这里用不上。上面的胜率，是让你对上所有符合你看到的动作的手牌，模拟 ${n} 手得出的。`,
  foldWinNote: "对手全部弃牌，底池归你。上面的 100% 不是模拟出来的数字，而是这手牌的结果。",
  riverNote: "已经到河牌，后面没有牌要发，“补牌 × 2/4”速算法用不上。上面的胜率，是把你最终的牌型与所有符合你看到的动作的手牌比较得出的。",
  chartTitle: "📈 每条街的胜率——全部亮牌",
  resultTabs: ["📋 复盘", "📈 胜率走势", "🃏 概率"],
  solverTitle: (info) =>
    info.kind === "spot" ? "在 GTO 求解器里查看这个局面" : info.kind === "notReady" ? "在 GTO 求解器里查看相近的局面" : "在 GTO 求解器里查看单挑局面",
  solverOpen: "打开求解器的翻牌查询",
  solverNote: (info) => {
    const gto = "那里显示的是双方都按 GTO 打时的翻牌策略（预先计算的结果 · 6人桌 100bb · 只到翻牌），所以范围、下注尺寸和对手规则都和这个模拟器不同。";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} 开池 · ${info.caller} 跟注（按求解器的单次加注底池） · 翻牌 ${info.flop.map((c) => c.rank + c.suit).join("")}——在求解器的翻牌查询里打开同样的位置和同样的翻牌。${gto}`
          : `${info.opener} 开池 · ${info.caller} 跟注——这一手在翻牌前就结束了，所以只打开这组位置对局。翻牌的三张请在求解器里自己选。${gto}`;
      case "notReady":
        return `${info.opener} 开池 · ${info.caller} 跟注——这组对局在求解器的翻牌查询里还没有预先计算。请选一组相近的位置对局，或在求解器里自己计算。`;
      case "multiway":
        return `这个翻牌有 ${info.players} 人看到。求解器的预先计算结果只覆盖单挑底池，所以这一手无法直接打开——请在翻牌查询里选一组一对一的对局。`;
      case "table9":
        return "求解器的预先计算结果是按6人桌算的，所以9人桌的这一手无法直接打开——请在翻牌查询里选最接近的位置对局。";
    }
  },
  solverLang: "zh",
  chartRangeLegend: "你看到的",
  chartNote: "实线是全部亮牌时各座位的胜率；虚线是你在不知道对手底牌时在屏幕上看到的胜率。弃牌玩家的线画到弃牌前一条街为止。",
  quizToggle: "🎯 测验",
  quizGuessTitle: "你的胜率是多少？",
  quizGuessHint: "用滑块选出你的估计",
  quizSubmit: "看答案",
  quizCallSubmit: "跟注 → 看答案",
  quizFoldSubmit: "弃牌 → 看答案",
  quizResult: (guess, err, points) => `你估 ${guess}% · 差 ${err}%p · ${points} 分`,
  quizChoiceResult: (ok, verdict) => (ok ? `判断正确（${verdict}）` : `判断错误——正确答案是${verdict}`),
  quizStats: (s) => `${s.hands} 手 · 平均误差 ${s.avgErr}%p · 判断 ${s.hits}/${s.decisions} 正确 · ${s.points.toLocaleString("en-US")} 分`,
  quizReset: "重置",
  quizResetConfirm: "要清除保存在这个浏览器里的测验记录吗？清除后无法恢复。",
  quizInvite: "登录后，这份记录会存进你的账号，手机和电脑上都能看到。",
  quizInviteLink: "登录",
  quizGuessCol: "估计",
  quizChoiceCol: "选择",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `这一手：平均误差 ${avgErr}%p${decisions > 0 ? ` · 判断 ${hits}/${decisions} 正确` : ""} · ${points} 分`,
  quizGuessLegend: "你的估计",
  customToggle: "✍️ 设定手牌",
  customTitle: "设定手牌——重打你打过的一手",
  customHint: "先点一个牌位，再从下方选牌。空着的位置会随机发牌，对手的手牌照样从各自位置的范围里发。",
  customPos: "你的位置",
  customRandom: "随机",
  customHero: "你的手牌",
  customBoard: "公共牌",
  customBoardSlots: ["翻牌", "翻牌", "翻牌", "转牌", "河牌"],
  customStart: "按这手牌发牌 →",
  customClear: "全部清空",
  customClose: "关闭",
  customOff: "回到随机发牌",
  customActive: "你设定的手牌 · 发新的一手也保留你选的这些牌",
  customEdit: "修改",

  ruleTitle: "这个模拟器的前提",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">对手只按下面的规则行动，别无其他。</b>真人绝不会这样打——位置、对手、筹码深度和牌桌形象都会改变一切。把它当成物理题里的“忽略摩擦力”就好。
      </p>
      <p className="mb-1">
        当前对手风格：<b className="text-foreground">{ZH_UI.styleNames[style]}</b>（全桌同一种风格 · 可在上方切换）
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>两对或更好 → <b className="text-foreground">{style === "aggressive" ? "加注到底池的 150%（超池）" : "满池加注"}</b></li>
        {style === "standard" && <li>一对，或同花/顺子听牌 → <b className="text-foreground">下注半池</b></li>}
        {style === "tight" && <>
          <li>用底牌组成、顶对或更好的一对（含超对），或同花/顺子听牌 → <b className="text-foreground">下注半池</b></li>
          <li>比这弱的对子（包括只是公共牌成对） → <b className="text-foreground">弃牌</b></li>
        </>}
        {style === "loose" && <li>一对、同花/顺子听牌，或有一张底牌比所有公共牌都大（高张） → <b className="text-foreground">下注半池</b></li>}
        {style === "aggressive" && <>
          <li>同花/顺子听牌 → <b className="text-foreground">加注（半诈唬）</b></li>
          <li>一对 → <b className="text-foreground">下注半池</b></li>
          <li>没对子也没听牌，但有高张 → <b className="text-foreground">加注（诈唬）</b></li>
        </>}
        <li>其他情况 → <b className="text-foreground">弃牌</b>（和现场一样直接盖牌）</li>
      </ul>
      <p className="mb-2">
        规则从上往下看，按第一条符合的执行。听牌只算翻牌或转牌上、至少用到一张底牌的四张同花/顺子形状（河牌没有听牌）。
        {style === "aggressive" && "“凶”风格的每一次加注，包括半诈唬和诈唬，都是底池的 150%。"}
        有人加注时，仍在牌局里的所有玩家都会跟注这个加注额；超过剩余筹码的下注按全下封顶。全下之后没有人弃牌，发完剩下的公共牌直接摊牌。没有过牌加注——每名对手每条街只按规则行动一次，没有先过牌、再回应的环节。你在这里从不下注，只是一路跟到河牌。翻牌前范围（见下文）不随风格改变。
      </p>
      <p className="mb-2">
        <b className="text-foreground">你的胜率是在看不到对手底牌的前提下算的。</b>从翻牌开始，每名对手的范围，是他按位置的翻牌前范围（见下文）里、在所选风格规则下会做出你看到的这些动作的手牌——对上“常规”对手，一次加注只剩两对或更好；对上“凶”对手，听牌和高张诈唬也会留在范围里。屏幕上弃牌的玩家也会从计算中移除。
      </p>
      <p className="mb-2">
        <b className="text-foreground">对手翻牌前的手牌来自按位置划分的范围。</b>在入池的玩家里，翻牌前最先行动的人视为开池者，其余所有人视为用跟注或 3bet 防守了这次开池（开池范围 · 防守范围）。这些范围是对照多个公开资料交叉核对的 6人桌 100bb 现金局共识范围，边缘手牌按 25/50/75% 混合。没有对应图表的情形（HJ 面对 UTG 开池 ·
        SB 面对 UTG、HJ 或 CO 开池）以及第三名起的玩家，用最接近的防守图表代替。没有9人桌图表，所以在9人桌上，
        UTG、UTG+1、UTG+2 和 LJ 使用6人桌的 UTG 图表，其余座位使用6人桌同名位置的图表（前位防守另一个前位的开池，或 HJ 防守前位开池时，用 CO vs UTG 图表）——因此9人桌前三个位置的范围会比实际更宽。只有你自己的手牌是随机的（除非你自己设定）——这个工具让你拿任意两张牌一路打到河牌。3bet 在这里不改变底池大小（简化处理）。
      </p>
      <p className="mb-2">
        <b className="text-foreground">判定只看底池赔率。</b>不计隐含赔率；对手倾向和诈唬，也只在所选风格的规则范围内反映到范围里。尤其是听牌，即使单看底池赔率略差一点，跟注也常常是对的。
      </p>
      <p>
        每人先下 {ANTE} 的前注，起始筹码 {STACK.toLocaleString("en-US")}。你从不弃牌——这正是重点，这样你才能看到河牌并复盘。胜率是固定样本数的模拟估计值：翻牌前{" "}
        <b className="text-foreground">{SAMPLES.preflop.toLocaleString("en-US")} 次</b>，翻牌起{" "}
        <b className="text-foreground">{SAMPLES.postflop.toLocaleString("en-US")} 次</b>（标准误差约 0.25–0.35%p）。每一手都用固定的随机种子，所以同一手牌在任何设备上显示的数字都一样。平局按分底池的人数平分（两人平局各得一半）。
      </p>
      <p className="mt-2">
        <b className="text-foreground">亮出对手底牌时</b>，会显示所有手牌已知时各座位的胜率。从翻牌开始，这会把剩下的每一张牌都精确算一遍（只有翻牌前是 {SAMPLES.known.toLocaleString("en-US")} 次模拟），而且它不会进入屏幕上的胜率，也不影响跟注/弃牌判定——真实牌桌上你不会有这个信息。
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 打开测验后</b>，每条街的胜率和判定都会先隐藏，直到你估出自己的胜率。有人下注的街，你还要选跟注或弃牌。答案是上面的“你的胜率”（看不到对手底牌时的数字），每次估计得分为{" "}
        <b className="text-foreground">100 − 4 × 误差（%p）</b>（误差 25%p 或以上记 0 分）。跟注/弃牌的选择与底池赔率判定一致即算正确。累计成绩保存在这个浏览器里，登录后也会存进你的账号，换设备也能接着看（牌和公共牌不保存）。
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ 设定手牌</b>可以选你的位置、底牌和公共牌，重打你实际打过的一手。空着的位置随机发牌。对手的牌不能选——真实牌桌上你也不知道——所以仍从按位置划分的范围里发，屏幕上的胜率也保持“看不到底牌”的前提。即使公共牌提前设好，每条街的胜率也只用到已经发出的牌。重打同一手会让你背下答案，所以设定的手牌不计入测验记录。
      </p>
    </>
  ),
  footer: (
    <>
      想弄懂背后的计算？{" "}
      <a href="/zh/blog/holdem-pot-odds" className="text-primary underline">底池赔率怎么算 →</a>
      {" · "}
      <a href="/zh/blog/holdem-position-play" className="text-primary underline">为什么位置这么重要</a>
      {" · "}
      <a href="/zh/calculator" className="text-primary underline">概率计算器</a>
    </>
  ),
};

export default function WinRateQuizClientZh() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">胜率模拟器 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">像真牌局一样看不到对手底牌打一手——再看你该在哪里弃牌</p>
      </div>
      <WinRateSimulator ui={ZH_UI} />
    </div>
  );
}
