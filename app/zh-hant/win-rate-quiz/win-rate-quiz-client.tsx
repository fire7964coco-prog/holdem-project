"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 번체 중국어(대만)판 승률 시뮬레이터 (2026-10-14 신설 · tool-lanes 🅰).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 키·분기·인자·계산은 EN과 1:1, 문장만 재저작.
 * 틀 = `app/zh/win-rate-quiz/win-rate-quiz-client.tsx`(간체) — 글자 변환이 아니라 대만 어휘로 재저작.
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`) — 숫자·좌석·팟오즈는 전 언어 동일(§13).
 * 용어 출처 = docs/tool-lanes/wrq-zhhant-brief.md §2(lib/posts-zh-hant 60편 grep 2026-10-14):
 *   fold = 蓋牌(527 ↔ 棄牌 136) · board = 公牌(299 ↔ 公共牌 7 · terms Q6-a) · solver = 解算器(167 ↔ 求解器 1) ·
 *   Flop study = 「翻牌查詢」(/zh-hant/solver 앱 탭 축어) · review = 檢討 · drawing dead = 聽死牌(sixpoker666 축어) ·
 *   상대 스타일 = 一般·緊·鬆·兇(Normal = 一般 — 常規는 대만에서 «regular» 연상 · 아스트라 A-교차).
 * 숫자 = 35.4%·1,000(코퍼스 실측) → 퍼센트 로케일 키 미지정 · toLocaleString("en-US").
 */

const ZH_HANT_NAMES: HandNames = {
  categories: ["高牌", "一對", "兩對", "三條", "順子", "同花", "葫蘆", "四條", "同花順"],
  drawingDead: "聽死牌",
  flushDraw: "同花聽牌",
  straightDraw: "順子聽牌",
};

const ZH_HANT_UI: QuizUI = {
  names: ZH_HANT_NAMES,
  streets: ["翻牌前", "翻牌", "轉牌", "河牌"],
  hero: "你",
  folded: "已蓋牌",
  raise: "加注",
  call: "跟注",
  check: "過牌",
  allIn: "已全下",
  tableNote: "6人桌或9人桌 · 可選幾個人看翻牌（2–6人）",
  playersBtn: (n) => `${n}人`,
  playersLabel: "人數",
  tableBtn: (n) => `${n}人桌`,
  styleLabel: "對手風格",
  styleHint: "對手風格——只改變翻牌起的行動規則，翻牌前範圍不變",
  styleNames: { standard: "一般", tight: "緊", loose: "鬆", aggressive: "兇" },
  loading: "洗牌中，正在計算勝率…",

  myEquity: "你的勝率",
  vsOpponents: (n) => (n === 0 ? "對手都蓋牌了" : `對上 ${n} 名對手`),
  basisSeat: "依各位置的範圍計算",
  basisRange: "依符合對手動作的手牌計算",
  roleOpen: "開池",
  roleDefend: "防守",
  winShort: "贏",
  tieShort: "平",
  loseShort: "輸",
  revealedLabel: "👀 依亮出的手牌計算",
  revealedNote: (gap) =>
    `上面的數字是在看不到對手底牌的前提下算的，所以差了 ${gap}%p。真正做決定時，要看的是上面那個數字。`,

  potOddsTitle: "底池賠率——跟注不虧需要的勝率",
  potLabel: "底池",
  potBeforeLabel: "底池（下注前）",
  toCallLabel: "要跟",
  requiredLabel: "所需勝率",
  noBet: "沒人下注，你可以免費看下一張牌。",
  noBetAllIn: (river) =>
    river
      ? "剩下的人都已全下，沒有籌碼可以再下注，直接攤牌。"
      : "剩下的人都已全下，沒有籌碼可以再下注。發完剩下的公牌後攤牌。",
  verdictCall: "跟注",
  verdictFold: "蓋牌",
  impliedNote: "不過，如果成牌後還能多贏一些（隱含賠率），跟注仍然可能是對的。",

  revealBtn: (next) => `發${next} →`,
  newHandBtn: "發新的一手 🔄",
  showCards: "👀 偷看對手底牌",
  hideCards: "🙈 蓋回對手底牌",

  wonByFold: (pot) => `其他人都蓋牌了——你拿下 ${pot.toLocaleString("en-US")} 的底池`,
  splitLabel: (names) => `平分底池——${names.join(" · ")} 平手`,
  winLabel: (name, cat) => `${name} 獲勝 · ${cat}`,

  reviewTitle: "📋 檢討——該在哪裡蓋牌？",
  reviewCols: ["街", "你的勝率", "所需勝率", "判定"],
  reviewNoMistake: "✅ 這一手一路跟到底都是對的。",
  reviewMistake: (street) => `⚠️ 到了${street}，蓋牌就已經是正確選擇。那就是你該放手的時機。`,
  reviewInvested: (invested, pot) => `你投入了 ${invested.toLocaleString("en-US")} · 最後底池 ${pot.toLocaleString("en-US")}`,

  formulaTitle: "📐 這個數字是怎麼來的",
  outsLabel: (n) => `有 ${n} 張牌能讓你成牌或變強`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `成同花 ${o.flush} 張` : "",
      o.straight > 0 ? `成順子 ${o.straight} 張` : "",
      o.set > 0 ? `成三條 ${o.set} 張` : "",
      o.twoPair > 0 ? `成兩對 ${o.twoPair} 張` : "",
      o.over > 0 ? `高張成對 ${o.over} 張` : "",
      both > 0 ? `其中 ${both} 張同時算在兩項裡（只算一次）` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "這些牌出現的機率（速算法）",
  winLabel2: "你在底池裡的勝率（模擬 · 平手按分到的份額計）",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "這兩個數字代表的意思不同。上面是「中牌」的機率，下面是你「贏」下底池的份額（平手按分到的份額計）。中了牌也可能因為對手變得更強而輸，沒中也可能贏。判定用的是下面那個數字。",
  noDrawNote: (basis, n) =>
    basis === "seat"
      ? `現在還在翻牌前，「補牌 × 2/4」速算法還用不上。上面的勝率，是讓你對上每名對手從他的位置可能會入池的手牌，模擬 ${n} 手得出的。`
      : `本工具計算的補牌——能湊成同花或順子，或讓你的牌型升級成三條、兩對或高張對子的牌——一張也沒有，所以「補牌 × 2/4」速算法在這裡用不上。上面的勝率，是讓你對上所有符合你看到的動作的手牌，模擬 ${n} 手得出的。`,
  foldWinNote: "對手都蓋牌了，底池歸你。上面的 100% 不是模擬出來的數字，而是這手牌的結果。",
  riverNote: "已經到河牌，後面沒有牌要發，「補牌 × 2/4」速算法用不上。上面的勝率，是把你最後的牌型和所有符合你看到的動作的手牌比較得出的。",
  chartTitle: "📈 每條街的勝率——全部亮牌",
  resultTabs: ["📋 檢討", "📈 勝率走勢", "🃏 機率"],
  solverTitle: (info) =>
    info.kind === "spot" ? "在 GTO 解算器裡看這個局面" : info.kind === "notReady" ? "在 GTO 解算器裡看相近的局面" : "在 GTO 解算器裡看單挑局面",
  solverOpen: "打開解算器的翻牌查詢",
  solverNote: (info) => {
    const gto = "那裡顯示的是雙方都照 GTO 打時的翻牌策略（預先計算的結果 · 6人桌 100bb · 只到翻牌），所以範圍、下注尺寸和對手規則都和這個模擬器不一樣。";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} 開池 · ${info.caller} 跟注（以解算器的單次加注底池計） · 翻牌 ${info.flop.map((c) => c.rank + c.suit).join("")}——會在解算器的翻牌查詢裡打開同樣的位置和同樣的翻牌。${gto}`
          : `${info.opener} 開池 · ${info.caller} 跟注——這一手在翻牌前就結束了，所以只打開這組位置對局。翻牌的三張請在解算器裡自己選。${gto}`;
      case "notReady":
        return `${info.opener} 開池 · ${info.caller} 跟注——這組對局在解算器的翻牌查詢裡還沒有預先計算。請選一組相近的位置對局，或在解算器裡自己算。`;
      case "multiway":
        return `這個翻牌有 ${info.players} 人看到。解算器的預先計算結果只涵蓋單挑底池，所以這一手沒辦法直接打開——請在翻牌查詢裡選一組一對一的對局。`;
      case "table9":
        return "解算器的預先計算結果是以6人桌算的，所以9人桌的這一手沒辦法直接打開——請在翻牌查詢裡選最接近的位置對局。";
    }
  },
  solverLang: "zh-hant",
  chartRangeLegend: "你看到的",
  chartNote: "實線是全部亮牌時各座位的勝率；虛線是你在不知道對手底牌時，在螢幕上看到的勝率。蓋牌玩家的線畫到他蓋牌前一條街為止。",
  quizToggle: "🎯 測驗",
  quizGuessTitle: "你的勝率是多少？",
  quizGuessHint: "拖曳滑桿，選出你的估計",
  quizSubmit: "看答案",
  quizCallSubmit: "跟注 → 看答案",
  quizFoldSubmit: "蓋牌 → 看答案",
  quizResult: (guess, err, points) => `你估 ${guess}% · 差 ${err}%p · ${points} 分`,
  quizChoiceResult: (ok, verdict) => (ok ? `判斷正確（${verdict}）` : `判斷錯誤——正確答案是${verdict}`),
  quizNotCounted: "你已經看過勝率或對手底牌，這次不計入測驗紀錄",
  quizStats: (s) => `${s.hands} 手 · 平均誤差 ${s.avgErr}%p · 判斷正確 ${s.hits}/${s.decisions} · ${s.points.toLocaleString("en-US")} 分`,
  quizReset: "重設",
  quizResetConfirm: "要清除存在這個瀏覽器裡的測驗紀錄嗎？清除後無法復原。",
  quizInvite: "登入後，這份紀錄會存進你的帳號，手機和電腦都看得到。",
  quizInviteLink: "登入",
  quizGuessCol: "估計",
  quizChoiceCol: "選擇",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `這一手：平均誤差 ${avgErr}%p${decisions > 0 ? ` · 判斷正確 ${hits}/${decisions}` : ""} · ${points} 分`,
  quizGuessLegend: "你的估計",
  customToggle: "✍️ 設定手牌",
  customTitle: "設定手牌——重打你打過的一手",
  customHint: "先點一個牌位，再從下方選牌。空著的位置會隨機發牌，對手的底牌照樣從各自位置的範圍裡發。",
  customPos: "你的位置",
  customRandom: "隨機",
  customHero: "你的底牌",
  customBoard: "公牌",
  customBoardSlots: ["翻牌", "翻牌", "翻牌", "轉牌", "河牌"],
  customStart: "照這手牌發牌 →",
  customClear: "全部清空",
  customClose: "關閉",
  customOff: "回到隨機發牌",
  customActive: "你設定的手牌 · 發新的一手也會保留你選的這些牌",
  customEdit: "修改",
  shareBtn: "複製這手牌的連結",
  shareCopied: "已複製。打開連結的人會從翻牌前開始打這手牌，牌和勝率都和你一樣。",
  shareManual: "沒辦法自動複製，請手動複製下面的網址。",
  sharedActive: "別人分享的一手 · 牌和勝率與分享者相同（不計入你的測驗紀錄）",
  sharedInvalid: "讀不到分享連結，已改發新的一手（連結可能不完整或被改過）",
  rangeToggle: "看對手範圍",
  rangeTitle: "對手範圍——符合到目前為止行動的手牌",
  rangeCombos: (pre, cur, pct) => `翻牌前 ${pre} 個組合 → 現在 ${cur} 個組合（剩 ${pct}%）`,
  rangeLegend: ["仍在範圍內（顏色越深越多）", "因行動被排除", "本來就不在範圍內", "實際底牌", "被你的底牌或公牌佔用"],
  rangeNote: "從這個位置的翻牌前範圍出發，每條街都排除照對手規則會做出不同行動的手牌。上面的勝率也是用這個範圍算的。和你的底牌、公牌衝突的組合已經拿掉。",
  quizKinds: ["估勝率 + 做決定", "只做決定（換你會怎麼打？）"],
  decideTitle: "換你會怎麼打？",
  decideHint: "在不知道對手底牌的情況下，選擇跟注或蓋牌。就算選了蓋牌，這一手也會打到最後。這個模式不計入測驗紀錄。",
  decideSummary: (hits, decisions) => `這一手：${decisions} 次決定中，照底池賠率判斷正確 ${hits} 次`,
  actualCol: "知道底牌時",
  actualSummary: (hits, decisions) => `如果知道對手底牌，判斷正確 ${hits}/${decisions}——僅供參考。實戰裡判斷的標準，是不知道底牌時的底池賠率。`,

  ruleTitle: "這個模擬器的前提",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">對手的每個動作，都只照下面的規則決定。</b>真人絕不會這樣打——位置、對手、籌碼深度和牌桌形象都會改變一切。把它當成物理題裡的「忽略摩擦力」就好。
      </p>
      <p className="mb-1">
        目前的對手風格：<b className="text-foreground">{ZH_HANT_UI.styleNames[style]}</b>（全桌同一種風格 · 可在上方切換）
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>兩對或更好 → <b className="text-foreground">{style === "aggressive" ? "加注到底池的 150%（超池）" : "滿池加注"}</b></li>
        {style === "standard" && <li>一對，或同花／順子聽牌 → <b className="text-foreground">下注半池</b></li>}
        {style === "tight" && <>
          <li>用底牌組成、頂對或更好的一對（含超對），或同花／順子聽牌 → <b className="text-foreground">下注半池</b></li>
          <li>比這弱的對子（包括只是公牌成對） → <b className="text-foreground">蓋牌</b></li>
        </>}
        {style === "loose" && <li>一對、同花／順子聽牌，或有一張底牌比所有公牌都大（高張） → <b className="text-foreground">下注半池</b></li>}
        {style === "aggressive" && <>
          <li>同花／順子聽牌 → <b className="text-foreground">加注（半詐唬）</b></li>
          <li>一對 → <b className="text-foreground">下注半池</b></li>
          <li>沒對子也沒聽牌，但有高張 → <b className="text-foreground">加注（詐唬）</b></li>
        </>}
        <li>其他情況 → <b className="text-foreground">蓋牌</b>（和現場一樣，牌不亮出來直接蓋掉）</li>
      </ul>
      <p className="mb-2">
        規則由上往下判斷，採用第一條符合的規則。聽牌只算翻牌或轉牌上、至少用到一張底牌的四張同花／順子形狀（河牌沒有聽牌）。
        {style === "aggressive" && "「兇」風格的每一次加注，包括半詐唬和詐唬，都是底池的 150%。"}
        有人加注時，還在牌局裡的所有玩家都會跟這個加注額；超過剩餘籌碼的下注以全下為上限。全下之後沒有人蓋牌，發完剩下的公牌直接攤牌。沒有過牌加注——每名對手每條街只照規則行動一次，沒有先過牌、再回應的環節。你在這裡從不下注，只是一路跟到河牌。翻牌前範圍（見下文）不隨風格改變。
      </p>
      <p className="mb-2">
        <b className="text-foreground">你的勝率是在看不到對手底牌的前提下算的。</b>從翻牌開始，每名對手的範圍，是他依位置的翻牌前範圍（見下文）裡、在所選風格規則下會做出你看到的這些動作的手牌——對上「一般」對手，一次加注就只剩兩對或更好；對上「兇」對手，聽牌和高張詐唬也會留在範圍裡。螢幕上蓋牌的玩家也會從計算中移除。
      </p>
      <p className="mb-2">
        <b className="text-foreground">對手翻牌前的手牌，來自依位置劃分的範圍。</b>入池的玩家裡，翻牌前最先行動的人視為開池者，其他所有人視為用跟注或 3bet 防守這次開池（開池範圍 · 防守範圍）。這些範圍是對照多個公開資料交叉核對的 6人桌 100bb 現金桌共識範圍，邊緣手牌以 25/50/75% 混合。沒有對應圖表的情況（HJ 面對 UTG 開池 ·
        SB 面對 UTG、HJ 或 CO 開池）以及第三名起的玩家，用最接近的防守圖表代替。沒有9人桌圖表，所以在9人桌上，UTG、UTG+1、UTG+2 和 LJ 使用6人桌的 UTG 圖表，其他座位使用6人桌同名位置的圖表（前位防守另一個前位的開池，或 HJ 防守前位開池時，用 CO vs UTG 圖表）——因此9人桌前三個位置的範圍會比實際更寬。只有你自己的底牌是隨機的（除非你自己設定）——這個工具讓你拿任意兩張牌一路打到河牌。3bet 在這裡不改變底池大小（簡化處理）。
      </p>
      <p className="mb-2">
        <b className="text-foreground">判定只看底池賠率。</b>不計隱含賠率；對手的傾向和詐唬，也只有所選風格的規則涵蓋到的部分，才會反映在範圍裡。尤其是聽牌，就算單看底池賠率稍微差一點，跟注也常常是對的。
      </p>
      <p>
        每人先下 {ANTE} 的前注，起始籌碼 {STACK.toLocaleString("en-US")}。你從不蓋牌——這正是重點，這樣你才看得到河牌、做檢討。勝率是固定樣本數的模擬估計值：翻牌前{" "}
        <b className="text-foreground">{SAMPLES.preflop.toLocaleString("en-US")} 次</b>，翻牌起{" "}
        <b className="text-foreground">{SAMPLES.postflop.toLocaleString("en-US")} 次</b>（標準誤差約 0.25–0.35%p）。每一手都用固定的隨機種子，所以同一手牌在任何裝置上顯示的數字都一樣。平手時按分底池的人數平分（兩人平手各得一半）。
      </p>
      <p className="mt-2">
        <b className="text-foreground">亮出對手底牌時</b>，會顯示所有底牌都已知時各座位的勝率。從翻牌開始，這會把剩下的每一張牌都精確算過一遍（只有翻牌前是 {SAMPLES.known.toLocaleString("en-US")} 次模擬），而且這些數字不會算進螢幕上的勝率，也不影響跟注／蓋牌判定——真實牌桌上你不會有這個資訊。
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 打開測驗後</b>，每條街的勝率和判定都會先藏起來，直到你估出自己的勝率。有人下注的街，你還要選跟注或蓋牌。答案是上面的「你的勝率」（看不到對手底牌時的數字），每次估計的得分是{" "}
        <b className="text-foreground">100 − 4 × 誤差（%p）</b>（誤差 25%p 以上記 0 分）。跟注／蓋牌的選擇和底池賠率判定一致就算正確。累計成績存在這個瀏覽器裡，登入後也會存進你的帳號，換裝置也能接著看（底牌和公牌不會存）。
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ 設定手牌</b>可以選你的位置、底牌和公牌，重打你真的打過的一手。空著的位置隨機發牌。對手的牌不能選——真實牌桌上你也不知道——所以仍從依位置劃分的範圍裡發，螢幕上的勝率也維持「看不到底牌」的前提。就算公牌事先設好，每條街的勝率也只用到已經發出的牌。重打同一手會讓你背下答案，所以設定的手牌不計入測驗紀錄。
      </p>
    </>
  ),
  footer: (
    <>
      想搞懂背後的計算？{" "}
      <a href="/zh-hant/blog/holdem-pot-odds" className="text-primary underline">底池賠率怎麼算 →</a>
      {" · "}
      <a href="/zh-hant/blog/holdem-position-play" className="text-primary underline">為什麼位置比牌更重要</a>
      {" · "}
      <a href="/zh-hant/calculator" className="text-primary underline">機率計算器</a>
    </>
  ),
};

export default function WinRateQuizClientZhHant() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">德州撲克練習模擬器 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">像真牌局一樣看不到底牌，打完再檢討你該在哪裡蓋牌</p>
      </div>
      <WinRateSimulator ui={ZH_HANT_UI} />
    </div>
  );
}
