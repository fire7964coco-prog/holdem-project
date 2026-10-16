"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 힌디어(hi-IN)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 일곱 번째 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작(형제 = pt·fr·id·ms·vi·tr).
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 독자 = 인도(आप 존댓말 · 쉬운 데바나가리 산문 + 라틴 포커 용어 — docs/translation-terms-hi.md · 계산기 사전과 같은 register).
 * 용어 출처: docs/translation-terms-hi.md → app/hi/calculator/dict.ts(족보 = 라틴 정본 · «विरोधी» · «बराबरी» · «बोर्ड» · «हैंड») →
 *   lib/posts-hi 21편 + 계산기 사전 코퍼스 빈도(10-13 grep):
 *   equity 162(इक्विटी 1) · fold 219 · call 438 · check 335 · raise 422 · all-in 158 · showdown 95 · बराबरी 7(टाई 14 · 계산기 = बराबरी) ·
 *   pot odds 18(पॉट ऑड्स 0) · implied odds 14 · कॉम्बो 297(combo 18) · range 467(रेंज 0) · बोर्ड 337(board 145) ·
 *   विरोधी 49(प्रतिद्वंद्वी 75 · 계산기 = विरोधी) · top pair 36 · overpair 68 · overcard 18 · flush draw 24 · straight draw 17 ·
 *   street 53(स्ट्रीट 7) · stack 234 · bluff 80 · प्रतिशत अंक 5 · अभ्यास 72.
 *   «%p» = «प्रतिशत अंक»(퀴즈 점수 «पॉइंट»과 갈라 쓴다 — MA-521 fr «points» 혼동 선례).
 * 숫자 = 서양식(`fmtNum` en-US «1,000» · 소수점 «.» · % 뒤붙임 «35%» — 계산기 numberLocale "en-US"와 같음 · लाख 묶음 0건).
 *   → 공용 UI 퍼센트 표기와 어긋남이 없다(tr·fr·id·vi와 달리 `dec` 불필요).
 * 솔버 메뉴명 «Flop अध्ययन» = 솔버 앱 flop-study-labels.ts hi.title 축어.
 * 헤드텀 실측(DFS India · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md §hi.
 */

const n = (x: number) => x.toLocaleString("en-US");

const HI_NAMES: HandNames = {
  categories: ["High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Straight draw",
};

const HI_UI: QuizUI = {
  names: HI_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "आप",
  folded: "Fold किया",
  raise: "Raise",
  call: "Call",
  bet: "Bet",
  check: "Check",
  allIn: "All-in",
  tableNote: "6-max या 9 खिलाड़ियों की टेबल · चुनें कि flop कितने खिलाड़ी देखेंगे (2–6)",
  playersBtn: (k) => `${k} खिलाड़ी`,
  playersLabel: "खिलाड़ी",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "विरोधियों का स्टाइल",
  styleHint: "विरोधियों का स्टाइल — सिर्फ़ flop से आगे के action नियम बदलता है; preflop range वही रहती हैं",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Aggressive" },
  loading: "कार्ड फेंटे जा रहे हैं, हिसाब चल रहा है…",

  myEquity: "आपकी equity",
  vsOpponents: (k) => (k === 0 ? "कोई विरोधी नहीं बचा" : `${k} ${k === 1 ? "विरोधी" : "विरोधियों"} के ख़िलाफ़`),
  basisSeat: "seat के हिसाब वाली range के ख़िलाफ़",
  basisRange: "उनके action से मेल खाते हैंड के ख़िलाफ़",
  roleOpen: "Open",
  roleDefend: "Defend",
  winShort: "जीत",
  tieShort: "बराबरी",
  loseShort: "हार",
  revealedLabel: "👀 खुले हुए असली हैंड के ख़िलाफ़",
  revealedNote: (gap) =>
    `ऊपर वाला नंबर यह मानकर चलता है कि आप विरोधियों के कार्ड नहीं देख सकते — दोनों में ${gap} प्रतिशत अंक का फ़र्क़ इसी वजह से है। असली टेबल पर आप फ़ैसला ऊपर वाले नंबर से ही लेते हैं।`,

  potOddsTitle: "Pot odds — call को break-even रखने के लिए ज़रूरी equity",
  potLabel: "Pot",
  potBeforeLabel: "Pot (bet से पहले)",
  toCallLabel: "Call की रक़म",
  requiredLabel: "ज़रूरी equity",
  noBet: "किसी ने bet नहीं किया। अगला कार्ड आप मुफ़्त में देख रहे हैं।",
  noBetAllIn: (river) =>
    river
      ? "हैंड में बचे सभी खिलाड़ी पहले ही all-in हैं, bet करने के लिए chips नहीं बचे। हैंड सीधे showdown पर जाता है।"
      : "हैंड में बचे सभी खिलाड़ी पहले ही all-in हैं, bet करने के लिए chips नहीं बचे। बाक़ी कार्ड खुलेंगे, फिर हैंड showdown पर जाएगा।",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "फिर भी, अगर हैंड बनने पर आप और ज़्यादा जीत सकते हैं (implied odds), तो call सही हो सकता है।",

  revealBtn: (next) => `अगला: ${next} →`,
  newHandBtn: "नया हैंड बाँटें 🔄",
  showCards: "👀 विरोधियों के कार्ड देखें",
  hideCards: "🙈 विरोधियों के कार्ड छिपाएँ",

  wonByFold: (pot) => `सबने fold किया — ${n(pot)} chips का pot आपका`,
  splitLabel: (names) => `Pot बँट गया — ${names.length > 1 ? names.slice(0, -1).join(", ") + " और " + names[names.length - 1] : names[0]} बराबरी पर`,
  winLabel: (name, cat) => `${name} जीता · ${cat}`,
  winLabelHero: (cat) => `आप जीते · ${cat}`,

  reviewTitle: "📋 समीक्षा — आपको कहाँ fold करना चाहिए था?",
  reviewCols: ["Street", "आपकी equity", "ज़रूरी", "फ़ैसला"],
  reviewNoMistake: "✅ शुरू से आख़िर तक call सही था।",
  reviewMistake: (street) => `⚠️ ${street} पर पहुँचकर fold करना ही सही फ़ैसला था। हैंड वहीं छोड़ देना चाहिए था।`,
  reviewInvested: (invested, pot) => `आपने लगाए: ${n(invested)} · आख़िरी pot ${n(pot)}`,

  formulaTitle: "📐 यह नंबर कहाँ से आता है",
  outsLabel: (k) => `${k} कार्ड जो आपका हैंड ${k === 1 ? "बनाता या बेहतर करता है" : "बनाते या बेहतर करते हैं"}`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `flush के लिए ${o.flush}` : "",
      o.straight > 0 ? `straight के लिए ${o.straight}` : "",
      o.set > 0 ? `set या trips के लिए ${o.set}` : "",
      o.twoPair > 0 ? `two pair के लिए ${o.twoPair}` : "",
      o.over > 0 ? `overcard से pair बनाने के लिए ${o.over}` : "",
      both > 0 ? (both === 1 ? "1 कार्ड दो समूहों में आता है (एक ही बार गिना गया)" : `${both} कार्ड दो समूहों में आते हैं (एक ही बार गिने गए)`) : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "इनमें से कोई कार्ड आने की संभावना (टेबल पर लगाया जाने वाला हिसाब)",
  winLabel2: "Pot में आपकी equity (simulation · बराबरी पर pot में आपका हिस्सा भी गिना जाता है)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "ये दोनों अलग चीज़ें नापते हैं। ऊपर वाला बताता है कि आपका हैंड बनने की संभावना कितनी है; नीचे वाला बताता है कि जीतकर pot में से आपको कितना हिस्सा मिलता है (बराबरी पर मिलने वाला हिस्सा भी गिना जाता है)। हैंड बनने पर भी हार सकते हैं अगर विरोधी का हैंड और मज़बूत हो जाए, और हैंड न बने तब भी जीत सकते हैं। फ़ैसला नीचे वाले नंबर से होता है।",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `अभी preflop है, इसलिए «outs × 2/4» वाला शॉर्टकट अभी लागू नहीं होता। ऊपर की equity ${k} हैंड के simulation से आती है, जिसमें हर विरोधी अपनी seat से pot में आने लायक हैंड के साथ खेलता है।`
      : `इस टूल के गिने हुए outs में से आपके पास कोई नहीं है — कोई कार्ड flush या straight पूरा नहीं करता, न आपके हैंड को एक श्रेणी ऊपर (set, two pair या overcard से pair) ले जाता है — इसलिए «outs × 2/4» वाला शॉर्टकट यहाँ लागू नहीं होता। ऊपर की equity ${k} हैंड के simulation से आती है, उन सभी हैंड के ख़िलाफ़ जो आपके देखे गए action से मेल खाते हैं।`,
  foldWinNote: "सभी विरोधियों ने fold किया, pot आपका है। ऊपर का 100% किसी simulation का नतीजा नहीं — यह इस हैंड का नतीजा है।",
  riverNote: "यह river है; अब कोई कार्ड खुलना बाक़ी नहीं, इसलिए «outs × 2/4» वाला शॉर्टकट लागू नहीं होता। ऊपर की equity आपके आख़िरी हैंड की तुलना उन सभी हैंड से करती है जो आपके देखे गए action से मेल खाते हैं।",
  chartTitle: "📈 हर street पर equity — सभी कार्ड खुले होने पर",
  resultTabs: ["📋 समीक्षा", "📈 Equity का सफ़र", "🃏 हिसाब"],
  solverTitle: (info) =>
    info.kind === "spot" ? "यही spot GTO सॉल्वर में देखें" : info.kind === "notReady" ? "मिलता-जुलता spot GTO सॉल्वर में देखें" : "Heads-up spot GTO सॉल्वर में देखें",
  solverOpen: "सॉल्वर में «Flop अध्ययन» खोलें",
  solverNote: (info) => {
    const gto = "सॉल्वर दिखाता है कि दोनों खिलाड़ी GTO खेलें तो flop की रणनीति क्या होगी (पहले से गणना किए गए नतीजे · 6-max 100bb · सिर्फ़ flop); इसलिए वहाँ की range, bet size और विरोधी के नियम इस simulator से अलग हैं।";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} open · ${info.caller} call (सॉल्वर में single-raised pot) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — यह लिंक सॉल्वर के «Flop अध्ययन» में यही दो position और यही flop खोलता है। ${gto}`
          : `${info.opener} open · ${info.caller} call — यह हैंड flop से पहले ख़त्म हो गया, इसलिए सिर्फ़ position की जोड़ी खुलती है। Flop के तीन कार्ड सॉल्वर में ख़ुद चुनें। ${gto}`;
      case "notReady":
        return `सॉल्वर के «Flop अध्ययन» में «${info.opener} open · ${info.caller} call» की जोड़ी के लिए पहले से गणना किए गए नतीजे अभी उपलब्ध नहीं हैं। पास की कोई position जोड़ी चुनें, या सॉल्वर में ख़ुद गणना करें।`;
      case "multiway":
        return `यह flop ${info.players} खिलाड़ियों ने देखा। सॉल्वर के पहले से गणना किए गए नतीजे सिर्फ़ heads-up pot के लिए हैं, इसलिए यह हैंड जैसा है वैसा नहीं खुल सकता — «Flop अध्ययन» में एक विरोधी वाली कोई जोड़ी चुनें।`;
      case "table9":
        return "सॉल्वर के पहले से गणना किए गए नतीजे 6-max टेबल के लिए हैं, इसलिए 9 खिलाड़ियों की टेबल का हैंड जैसा है वैसा नहीं खुल सकता — «Flop अध्ययन» में सबसे पास की position जोड़ी चुनें।";
    }
  },
  solverLang: "hi",
  fmtNum: n,
  chartRangeLegend: "आपको दिखने वाली",
  chartNote: "ठोस रेखाएँ सभी हैंड खुले होने पर हर seat की equity हैं; टूटी रेखा वह equity है जो आपको विरोधियों के कार्ड जाने बिना स्क्रीन पर दिखती है। Fold करने वाले खिलाड़ी की रेखा उस street से एक street पहले रुक जाती है जिस पर उसने fold किया।",
  quizToggle: "🎯 क्विज़",
  quizGuessTitle: "आपकी equity कितनी है?",
  quizGuessHint: "स्लाइडर से अपना अंदाज़ा सेट करें",
  quizSubmit: "जाँचें",
  quizCallSubmit: "Call → जाँचें",
  quizFoldSubmit: "Fold → जाँचें",
  quizResult: (guess, err, points) => `आपका अंदाज़ा ${guess}% · ${err} प्रतिशत अंक का अंतर · ${points} पॉइंट`,
  quizChoiceResult: (ok, verdict) => (ok ? `सही फ़ैसला (${verdict})` : `ग़लत — सही जवाब ${verdict}`),
  quizNotCounted: "क्विज़ के आँकड़ों में नहीं जोड़ा गया — आप equity या विरोधियों के कार्ड पहले ही देख चुके थे",
  quizStats: (s) => `${s.hands} हैंड · औसत अंतर ${s.avgErr} प्रतिशत अंक · ${s.hits}/${s.decisions} सही फ़ैसले · ${n(s.points)} पॉइंट`,
  quizReset: "रीसेट",
  quizResetConfirm: "इस ब्राउज़र में सेव किया गया क्विज़ रिकॉर्ड मिटा दें? इसे वापस नहीं लाया जा सकेगा।",
  quizInvite: "यह रिकॉर्ड अपने अकाउंट में रखने और हर फ़ोन या कंप्यूटर पर देखने के लिए लॉग इन करें।",
  quizInviteLink: "लॉग इन",
  quizGuessCol: "अंदाज़ा",
  quizChoiceCol: "चुनाव",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `इस हैंड में: औसत अंतर ${avgErr} प्रतिशत अंक${decisions > 0 ? ` · ${hits}/${decisions} सही फ़ैसले` : ""} · ${points} पॉइंट`,
  quizGuessLegend: "आपका अंदाज़ा",
  customToggle: "✍️ हैंड बनाएँ",
  customTitle: "हैंड बनाएँ — अपना खेला हुआ हैंड दोबारा खेलें",
  customHint: "किसी खाने पर टैप करें, फिर नीचे से कार्ड चुनें। ख़ाली खाने बेतरतीब भरे जाते हैं; विरोधियों को अब भी उनकी position की range से हैंड मिलते हैं।",
  customPos: "आपकी position",
  customRandom: "बेतरतीब",
  customHero: "आपका हैंड",
  customBoard: "बोर्ड",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "यह हैंड बाँटें →",
  customClear: "सब हटाएँ",
  customClose: "बंद करें",
  customOff: "बेतरतीब हैंड पर लौटें",
  customActive: "आपका बनाया हैंड · नए हैंड में ये कार्ड बने रहते हैं",
  customEdit: "बदलें",
  shareBtn: "इस हैंड का लिंक कॉपी करें",
  shareCopied: "कॉपी हो गया। लिंक खोलने वाला हर व्यक्ति यही हैंड preflop से, यही कार्ड और यही equity के साथ खेलेगा।",
  shareManual: "अपने-आप कॉपी नहीं हो सका। नीचे का पता कॉपी करें।",
  sharedActive: "शेयर किया गया हैंड · वही कार्ड और वही equity जो भेजने वाले को मिली थी (क्विज़ के आँकड़ों में नहीं जुड़ता)",
  sharedInvalid: "शेयर किया गया लिंक पढ़ा नहीं जा सका, इसलिए यह नया बेतरतीब हैंड है (हो सकता है लिंक अधूरा हो या उसे बदल दिया गया हो)",
  rangeToggle: "विरोधी की range दिखाएँ",
  rangeTitle: "विरोधी की range — अब तक के action से मेल खाते हैंड",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} कॉम्बो → अब ${cur} कॉम्बो (${pct}% बचे)`,
  // MA-524 ② 처방 꼴: 색 = 칸별 잔존 «비율»(콤보 «수» 아님).
  rangeLegend: ["अब भी range में (गहरा = ज़्यादा हिस्सा बचा)", "Action से बाहर हुए", "कभी range में नहीं थे", "असली हैंड", "आपके हैंड या बोर्ड से blocked"],
  rangeNote: "Range विरोधी की position वाली preflop range से शुरू होती है, और हर street पर हर वह हैंड हटा दिया जाता है जो विरोधी के नियमों के हिसाब से अलग action लेता। ऊपर की equity भी यही range इस्तेमाल करती है। आपके हैंड या बोर्ड से टकराने वाले कॉम्बो नहीं गिने जाते।",
  quizKinds: ["Equity का अंदाज़ा + फ़ैसला", "सिर्फ़ फ़ैसला (call या fold?)"],
  decideTitle: "Call या fold?",
  decideHint: "विरोधियों के कार्ड देखे बिना call या fold चुनें। Fold चुनने पर भी हैंड आख़िर तक चलता है। यह मोड क्विज़ के आँकड़ों में नहीं जुड़ता।",
  decideSummary: (hits, decisions) => `इस हैंड में: pot odds के हिसाब से ${hits}/${decisions} सही फ़ैसले`,
  actualCol: "कार्ड पता होते तो",
  actualSummary: (hits, decisions) => `विरोधियों के कार्ड पता होते तो सही फ़ैसले: ${hits}/${decisions} — सिर्फ़ संदर्भ के लिए। टेबल पर पैमाना विरोधियों के कार्ड देखे बिना pot odds ही है।`,

  ruleTitle: "यह simulator क्या मानकर चलता है",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">विरोधी सिर्फ़ नीचे दिए नियमों पर चलते हैं, और किसी बात पर नहीं।</b> कोई असली खिलाड़ी
        ऐसे नहीं खेलता — position, विरोधी, stack की गहराई और टेबल इमेज सब कुछ बदल देते हैं। इसे भौतिकी के
        सवाल में «घर्षण को नज़रअंदाज़ करें» वाली मान्यता की तरह समझें।
      </p>
      <p className="mb-1">
        अभी विरोधियों का स्टाइल: <b className="text-foreground">{HI_UI.styleNames[style]}</b> (पूरी टेबल एक ही स्टाइल में खेलती है · ऊपर के चुनाव से बदलें)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Two pair या उससे बेहतर → <b className="text-foreground">{style === "aggressive" ? "pot के 150% का raise (overbet)" : "pot के बराबर raise"}</b></li>
        {style === "standard" && <li>Pair, या flush/straight draw → <b className="text-foreground">आधे pot का bet</b></li>}
        {style === "tight" && <>
          <li>Hole कार्ड से बना top pair या उससे बेहतर pair (overpair समेत), या flush/straight draw → <b className="text-foreground">आधे pot का bet</b></li>
          <li>उससे कमज़ोर हर pair (सिर्फ़ बोर्ड पर बना pair भी) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>Pair, flush/straight draw, या बोर्ड के हर कार्ड से ऊँचा hole कार्ड (overcard) → <b className="text-foreground">आधे pot का bet</b></li>}
        {style === "aggressive" && <>
          <li>Flush/straight draw → <b className="text-foreground">raise (semi-bluff)</b></li>
          <li>Pair → <b className="text-foreground">आधे pot का bet</b></li>
          <li>न pair, न draw, पर overcard है → <b className="text-foreground">raise (bluff)</b></li>
        </>}
        <li>बाक़ी सब → <b className="text-foreground">fold</b> (लाइव गेम की तरह कार्ड बिना दिखाए फेंके जाते हैं)</li>
      </ul>
      <p className="mb-2">
        नियम ऊपर से नीचे जाँचे जाते हैं; जो पहली पंक्ति मेल खाती है वही action तय करती है। Draw का मतलब है flop या turn पर कम से कम एक hole कार्ड इस्तेमाल करने वाला चार कार्ड का flush या straight (river पर कोई draw नहीं होता)।{" "}
        {style === "aggressive" && "Aggressive स्टाइल का हर raise — semi-bluff और bluff समेत — pot का 150% होता है। "}
        कोई raise करे तो हैंड में बचा हर खिलाड़ी उतना call करता है; बचे हुए stack से बड़ा bet
        उसी stack तक घटा दिया जाता है: खिलाड़ी all-in हो जाता है। All-in के बाद कोई fold नहीं करता — बोर्ड के बाक़ी कार्ड खुलते हैं और हैंड showdown पर जाता है। Check-raise नहीं होता — हर विरोधी नियमों के हिसाब से हर street पर एक बार action लेता है; check करके बाद में दोबारा जवाब देने का कोई चरण नहीं है। सीट के लेबल हर street का सार हैं: जिस सीट ने रकम तय की उस पर “Bet” दिखता है, और हैंड में बचे बाक़ी सभी पर “Call” — क्रम में उनकी जगह चाहे जो हो। यहाँ आप कभी bet नहीं करते; river तक सिर्फ़ call करते हैं।
        Preflop range (नीचे) स्टाइल कोई भी हो, वही रहती हैं।
      </p>
      <p className="mb-2">
        <b className="text-foreground">आपकी equity ऐसे निकाली जाती है जैसे आप विरोधियों के कार्ड नहीं देख सकते।</b> Flop से
        आगे हर विरोधी की range वे हैंड हैं जो position के हिसाब से उसकी preflop range (नीचे) में से, चुने गए स्टाइल के नियमों पर
        वही action लेते जो आपने देखे — Normal विरोधियों में raise के बाद range में सिर्फ़ two pair और उससे बेहतर बचते हैं;
        Aggressive विरोधियों में draw और overcard वाले bluff भी range में रहते हैं। स्क्रीन पर fold करने वाले खिलाड़ी
        भी हिसाब से हट जाते हैं।
      </p>
      <p className="mb-2">
        <b className="text-foreground">विरोधियों के preflop हैंड उनकी position की range से आते हैं।</b> Pot में मौजूद
        खिलाड़ियों में preflop पर जो सबसे पहले action लेता है उसे open करने वाला माना जाता है; बाक़ी सबको उस open के ख़िलाफ़ call या 3-bet से
        defend करने वाला माना जाता है (open range · defend range)। ये range कई खुले स्रोतों से मिलाकर बनाई गई 6-max
        100bb cash game की आम सहमति वाली range हैं; सीमा पर खड़े हैंड 25/50/75% के अनुपात में मिलाए जाते हैं। जिन हालात की
        तालिका नहीं है (UTG के open के ख़िलाफ़ HJ · UTG, HJ या CO के open के ख़िलाफ़ SB) उनमें और तीसरे खिलाड़ी से आगे सबसे पास की
        defend तालिका इस्तेमाल होती है। 9 खिलाड़ियों की कोई अलग तालिका नहीं है: 9 खिलाड़ियों की टेबल पर UTG, UTG+1, UTG+2 और LJ, 6-max की UTG
        तालिका इस्तेमाल करते हैं; बाक़ी हर seat 6-max की उसी नाम वाली तालिका इस्तेमाल करती है (कोई early position दूसरी early position के
        open को, या HJ ऐसे open को defend करे तो CO vs UTG तालिका लगती है) — इसलिए 9 खिलाड़ियों की टेबल की पहली तीन
        seat की range असल से ज़्यादा चौड़ी निकलती है। सिर्फ़ आपका हैंड बेतरतीब है (अगर आपने ख़ुद न बनाया हो) — यह टूल
        आपको किन्हीं भी दो कार्ड के साथ river तक खेलने देता है। यहाँ 3-bet से pot का आकार नहीं बदलता (सरलीकरण)।
      </p>
      <p className="mb-2">
        <b className="text-foreground">फ़ैसला सिर्फ़ pot odds पर टिका है।</b> Implied odds नहीं गिने जाते;
        विरोधियों की आदतें और bluff भी range में सिर्फ़ उतने ही आते हैं जितने चुने गए स्टाइल के नियम कहते हैं। ख़ासकर draw अक्सर
        तब भी call को सही ठहराते हैं जब अकेले pot odds थोड़ी कम पड़ती हों।
      </p>
      <p>
        हर खिलाड़ी {ANTE} ante डालता है और {n(STACK)} के stack से शुरू करता है। आप कभी fold नहीं करते — मक़सद यही है:
        river देखकर हैंड की समीक्षा करना। Equity एक तय sample संख्या वाला simulation अनुमान है:{" "}
        preflop पर <b className="text-foreground">{n(SAMPLES.preflop)} simulation</b>, flop से आगे{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simulation</b> (standard error लगभग 0.25–0.35 प्रतिशत अंक)।
        हर हैंड एक तय random seed इस्तेमाल करता है, इसलिए वही हैंड हर डिवाइस पर वही नंबर दिखाता है। बराबरी पर pot
        बराबरी वाले खिलाड़ियों में बराबर बँटता है (दो खिलाड़ी बराबर हों तो आधा-आधा)।
      </p>
      <p className="mt-2">
        <b className="text-foreground">जब आप विरोधियों के कार्ड खोलते हैं</b>, तो हर seat को वह equity दिखती है जो सभी हैंड पता होने पर बनती है। Flop से
        आगे यह हिसाब बाक़ी हर कार्ड को एक-एक करके, बिल्कुल सटीक गिनता है (सिर्फ़ preflop पर {n(SAMPLES.known)} simulation होते हैं)
        और यह स्क्रीन की equity या call/fold फ़ैसले में बिल्कुल शामिल नहीं होता — असली टेबल पर यह जानकारी
        आपके पास नहीं होती।
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 क्विज़ चालू होने पर</b>, जवाब देने तक equity और फ़ैसला छिपे रहते हैं। «Equity का अंदाज़ा + फ़ैसला» में
        आप हर street पर अपनी equity का अंदाज़ा लगाते हैं, और जिन street पर किसी ने bet किया हो, वहाँ call या fold भी चुनते हैं।
        «सिर्फ़ फ़ैसला (call या fold?)» में अंदाज़ा नहीं होता: आप सिर्फ़ उन street पर call या fold चुनते हैं जहाँ किसी ने bet किया हो, और
        यह मोड क्विज़ के आँकड़ों में नहीं जुड़ता। सही जवाब ऊपर वाली «आपकी equity» है (विरोधियों के कार्ड
        देखे बिना निकला नंबर), और हर अंदाज़े को <b className="text-foreground">100 − 4 × अंतर (प्रतिशत अंक)</b>
        {" "}पॉइंट मिलते हैं, जिन्हें पूरी संख्या में राउंड किया जाता है और जो शून्य से नीचे नहीं जाते (अंतर 25 प्रतिशत अंक या ज़्यादा हो तो शून्य)। आपका call/fold चुनाव pot odds वाले फ़ैसले से मेल खाए तो सही गिना जाता है।
        आपके कुल आँकड़े इस ब्राउज़र में सेव रहते हैं; लॉग इन किया हो तो आपके अकाउंट में भी सेव होते हैं और दूसरे डिवाइस पर भी
        दिखते हैं (कार्ड और बोर्ड सेव नहीं होते)।
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ हैंड बनाएँ</b> से आप अपनी position, hole कार्ड और बोर्ड चुनकर असल में खेला गया
        कोई हैंड दोबारा खेल सकते हैं। ख़ाली खाने बेतरतीब भरे जाते हैं। विरोधियों के कार्ड आप नहीं चुन सकते — असली
        टेबल पर भी आपको पता नहीं होते — इसलिए उनके कार्ड अब भी position की range से आते हैं और स्क्रीन की equity
        वही «कार्ड पता नहीं» वाली मान्यता बनाए रखती है। बोर्ड पहले से चुना हो तब भी हर street की equity सिर्फ़
        उस समय तक खुले कार्ड इस्तेमाल करती है। एक ही हैंड बार-बार खेलने से जवाब याद हो सकते हैं, इसलिए आपके बनाए हैंड
        क्विज़ के रिकॉर्ड में नहीं जुड़ते।
      </p>
    </>
  ),
  footer: (
    <>
      हिसाब कैसे निकलता है, यह जानना है?{" "}
      <a href="/hi/calculator" className="text-primary underline">Pot odds और outs का कैलकुलेटर →</a>
      {" · "}
      <a href="/hi/hand-chart" className="text-primary underline">हर position का हैंड चार्ट</a>
      {" · "}
      <a href="/hi/blog/holdem-betting-actions" className="text-primary underline">Betting actions की गाइड</a>
    </>
  ),
};

export default function WinRateQuizClientHi() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Poker Simulator 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">विरोधियों के कार्ड देखे बिना खेलें — फिर देखें कि कहाँ fold करना चाहिए था</p>
      </div>
      <WinRateSimulator ui={HI_UI} />
    </div>
  );
}
