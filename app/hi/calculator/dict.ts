import type { CalcDict } from "@/components/calculator/dict";

// HI (हिन्दी · India) 계산기 사전 — 공용 도구(components/calculator/calculator-tool.tsx)의 모든 화면 문자열.
//
// ★2026-09-19 재조준 — 근거 docs/keyword-bank/hi-calculator.md.
// 🔴 머리어는 **영어를 유지한다**(id·ms는 자국어로 «교체»했지만 hi는 반대 판정이다 — 뱅크 §5):
//    `poker odds calculator` = India 390(id·ms의 4.3배) · 힌디어 도구구(`पोकर कैलकुलेटर` 등)는 **전부 볼륨 null**이고
//    자동완성 확장이 0건일 뿐 아니라 **구글이 데바나가리 시드를 영어 쿼리로 치환해서 돌려준다**(뱅크 §2-A).
//    🔴 판별의 축은 «자국어 SERP가 비었나»가 아니라 «그 자리에 수요가 있나»다 — 인구 14억에서 데바나가리 `पोकर`는
//    880으로 잡히는데 도구구만 null이다. ms(인구 3,200만)의 «해상도 아래»(§3-L ①)로는 설명되지 않는다.
//    → 2026-09-16 사장님 지시(「계산기라는 현지 용어가 없으면 그냥 영어로」)를 실측이 «확인»한 것이다.
// 🔴 단 힌디어 SERP는 비어 있다 — `पोकर कैलकुलेटर` 유기 결과 **9개 중 5개가 translate.google.com**(기계번역)이고
//    #8조차 「हिंदी में देखने के लिए क्लिक करें」를 단 영어 페이지다(뱅크 §3-B). 그 자리를 먹는 수단은 제목이 아니라
//    **본문·H2·FAQ가 힌디어 원문인 것**이다.
//
// 문체(docs/keyword-bank/hi-posting-reference.md §1 · docs/translation-terms-hi.md):
//   쉬운 데바나가리 산문 + 라틴 포커 용어 · `आप` 존댓말 · 족보는 라틴 정본(Royal Flush … High Card).
// 코퍼스 실측(lib/posts-hi/*.ts 21편 · 361,525 UTF-16 · 뱅크 §4-A):
//   bet 821 : बेट 1 · pot 508 : पॉट 156 · check 378 : चेक 0 · raise 308 : रेज 0 · call 283 : कॉल 3 ·
//   equity 186 : इक्विटी 0 · chip(s) 142 : चिप 0 · draw 152 : ड्रॉ 0 → **도구 용어는 라틴이 정본**.
//   🔴 예외 둘: **बोर्ड 313 : board 137**(산문은 데바나가리가 지배형) · **हैंड 606 : hand 47 : हाथ 19**(패 = हैंड).
// 숫자: 소수점 «.» · 천단위 «,» — 🔴 `numberLocale: "en-US"`다. 코퍼스는 100,000·198,000처럼 서양식 묶음을 쓰고
//   **लाख 묶음(1,00,000)은 0건**이라 `hi-IN`을 쓰면 ICU가 코퍼스와 어긋나게 찍는다.
//   % 앞 공백 없음(**붙여 씀 1,611 : 반각 0 : 고정공백 0**) → `percentGap` 키를 넣지 않는다(게이트 G항 ·
//   🔴 데바나가리 선례가 없어 이 측정이 유일한 근거다 — hi는 09-19까지 G항 「미검사」 로케일이었다).
export const CALC_DICT_HI: CalcDict = {
  numberLocale: "en-US",

  // 🔴 app/hi/calculator/page.tsx metadata와 «같은 문자열»이어야 한다(check:seo-sync).
  seo: {
    title: "Poker Odds Calculator — equity, pot odds और ICM",
    description:
      "मुफ़्त Texas Hold'em कैलकुलेटर: हैंड बनाम हैंड equity, pot odds, implied odds, outs, हैंड रैंकिंग, SPR, M value, ICM deal और chip chop — 9 टूल।",
    path: "/hi/calculator",
  },

  hero: {
    badges: ["पूरी तरह मुफ़्त", "बिना साइन-अप"],
    h1: "Poker Odds Calculator",
    h1Sub: "Equity, ICM और pot odds — सब एक ही पोकर कैलकुलेटर में",
    lead: "दो हैंड भरें और देखें कौन जीतता है — फिर pot odds, outs, ICM deal, SPR, tournament M और push/fold range जाँचें। नौ मुफ़्त Hold'em कैलकुलेटर, और जहाँ गिनती तेज़ी से हो सके वहाँ हर street पर सटीक गिनती।",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot Odds", "🃏 हैंड रैंकिंग", "📊 Starting Hand", "📐 SPR", "🏆 M Value", "📈 ICM", "⚡ Push/Fold"],
  },

  equity: {
    label: "Equity", sub: "हैंड बनाम हैंड",
    hero: "आपका हैंड",
    opp: "विरोधी {n}",
    random: "कोई भी हैंड",
    board: "बोर्ड",
    pickerHint: "पहले कोई सीट या बोर्ड चुनें, फिर उसके कार्ड चुनें।",
    addPlayer: "+ विरोधी जोड़ें", removePlayer: "− विरोधी हटाएँ",
    needTwo: "हर हैंड को 2 कार्ड दें (या विरोधी को «कोई भी हैंड» पर रखें)।",
    boardCount: "Preflop के लिए बोर्ड खाली छोड़ें, या उसमें 3 (flop), 4 (turn) या 5 (river) कार्ड भरें।",
    th: { player: "खिलाड़ी", hand: "हैंड", win: "जीत", tie: "बराबरी", equity: "Equity" },
    exactNote: "सटीक — सभी {n} संभव runout गिने गए।",
    mcNote: "Monte Carlo — {n} बेतरतीब runout; हर बार परिणाम लगभग ±0.3 अंक तक बदल सकता है।",
    winner: "{p} {hand} से जीतता है",
    chop: "बराबरी — {n} हैंड एक जैसे {hand} से pot बाँटते हैं",
    showdownNote: "Showdown — बोर्ड पूरा है, इसलिए यही आख़िरी परिणाम है।",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Draw के odds" },
    pot: { label: "Pot Odds", sub: "Call या fold" },
    hand: { label: "हैंड रैंकिंग", sub: "कार्ड चुनें" },
    starting: { label: "Starting Hand", sub: "Open की ताक़त" },
    spr: { label: "SPR", sub: "Stack/pot अनुपात" },
    m: { label: "Tournament M", sub: "M value" },
    icm: { label: "ICM", sub: "Prize equity" },
    pushfold: { label: "Push/Fold", sub: "Nash चार्ट" },
  },

  workspace: {
    chooseCalculator: "कैलकुलेटर चुनें",
    resetInputs: "इनपुट रीसेट करें",
    resetAria: "{label} रीसेट करें",
    resetMessage: "{label} के इनपुट रीसेट हो गए।",
  },

  cardPicker: {
    clearAll: "सब साफ़ करें",
  },

  outs: {
    drawType: "Draw का प्रकार",
    presets: [
      { label: "अपना इनपुट" },
      // ★딜러 렌즈 — EN 09-17 정정: «Nut flush draw»가 아니라 «Flush draw»다(nut이든 아니든 outs 9).
      { label: "Flush draw", desc: "एक suit के 4 कार्ड → 5वाँ चाहिए (nut flush हो या न हो, 9 outs)" },
      { label: "Open-ended straight draw (OESD)", desc: "जैसे 5-6-7-8, 4 या 9 चाहिए" },
      { label: "Flush + gutshot combo", desc: "9 flush + 3 gutshot (दोहराव हटाकर)" },
      { label: "Gutshot straight", desc: "जैसे 5-6-8-9, सिर्फ़ 7 चाहिए" },
      // 🔴 overcard의 정의 — «बोर्ड पर न आए» (EN 옛 문안 «not on board»)는 틀렸다. 정본 = «बोर्ड के हर कार्ड से ऊँचे».
      //    정정한 로케일 = pt·de·fr·id·ms(+hi) / 옛 문안 = EN·es·ja·zh·zh-hant(브리프 §5).
      { label: "दो overcards", desc: "बोर्ड के हर कार्ड से ऊँचे 2 rank × 3-3 कार्ड — made हैंड के सामने इन्हें बहुत घटाकर गिनें: overcard pair बन जाए तब भी अक्सर हार होती है" },
      { label: "Two pair → full house", desc: "जैसे A-K-x बोर्ड पर A-K → 2 ace और 2 king बचे" },
      { label: "One pair → trips", desc: "उस rank के 2 कार्ड बचे हैं" },
      { label: "Flush + OESD (monster)", desc: "9 flush + 8 straight (2 दोहराव)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    // ★2026-09-17 तीसरी street (flop → अगला एक कार्ड) — flop पर एक bet झेलते समय यही आँकड़ा चाहिए
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Flop से अगले कार्ड पर draw लगने की संभावना",
    outsCount: "Outs की संख्या: {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Rule of 4",
    ruleOf2: "Rule of 2",
    chanceFlop: "Flop से river तक draw पूरा होने की संभावना (दोनों कार्ड — यानी all-in)",
    chanceTurn: "Turn से river पर draw पूरा होने की संभावना",
    exact: " (सटीक)",
    ruleMental: "Rule of {n} (मन में हिसाब):",
    exactNote: "बड़े फ़ॉन्ट में दिख रहा आँकड़ा सटीक है",
    verdict: { great: "बहुत अच्छा 🔥", good: "अच्छा ✅", fair: "ठीक-ठाक ⚠️", poor: "कमज़ोर ❌", veryPoor: "बहुत कमज़ोर 💀" },
  },

  pot: {
    // ★딜러 렌즈 — «जो bet आप झेल रहे हैं वह भी इसमें शामिल है»가 EN 정본(옛 문안엔 이 조건이 없었다).
    potSize: "Pot का आकार (जो bet आप झेल रहे हैं, वह भी जोड़कर)",
    callAmount: "आपके call की रकम",
    potOddsCaption: "Pot odds (कम से कम ज़रूरी equity)",
    orHigher: "इससे ज़्यादा equity हो तो call फ़ायदेमंद है",
    equityLabel: "आपके हैंड की equity: {v}",
    sliderGutshot: "Gutshot 8.7%",
    // ★딜러 렌즈 — 9 outs का turn → river का सटीक आँकड़ा 19.6% है (19% नहीं).
    sliderFlush: "Flush 19.6%",
    impliedToggle: "Implied odds {toggle}",
    close: "बंद करें ▲",
    add: "जोड़ें ▼",
    extraWinnings: "Draw लगने पर अपेक्षित अतिरिक्त जीत: {v}",
    none: "कुछ नहीं",
    impliedCaption: "Implied odds (अतिरिक्त जीत के साथ)",
    impliedNote: "{n} की अतिरिक्त जीत जोड़कर कम से कम ज़रूरी equity",
    needImplied: "implied odds {n}%",
    needPot: "pot odds {n}%",
    verdict: {
      call: { title: "Call (फ़ायदेमंद)", body: "आपकी equity {eq}% > {need} → लंबे समय में फ़ायदा" },
      even: { title: "Break-even (EV 0)", body: "आपकी equity {eq}% = {need} → call से न फ़ायदा, न नुकसान। फ़ैसला pot odds से बाहर की बातों पर करें, जैसे position और विरोधी की आदतें" },
      fold: { title: "Fold की सलाह", body: "आपकी equity {eq}% < {need} → लंबे समय में नुकसान" },
    },
  },

  handEval: {
    pickerLabel: "कार्ड चुनें (5–7)",
    emptyTitle: "हैंड जाँचने के लिए 5 या ज़्यादा कार्ड चुनें",
    emptyHint: "7 कार्ड होने पर सबसे अच्छा 5-कार्ड संयोजन अपने आप मिल जाता है",
    bestFrom: "{n} कार्ड में से सबसे अच्छा हैंड",
    rankNames: [
      "High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight",
      "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush",
    ],
    resultNames: [
      "High Card 🃏", "One Pair 1️⃣", "Two Pair ✌️", "Three of a Kind 3️⃣", "Straight ➡️",
      "Flush 🌊", "Full House 🏠", "Four of a Kind 💎", "Straight Flush 🌟", "Royal Flush 👑",
    ],
    axis: ["High Card", "One Pair", "Flush", "Quads", "Royal"],
  },

  starting: {
    pickerLabel: "अपने 2 hole कार्ड चुनें",
    emptyPrompt: "अपने 2 hole कार्ड चुनें",
    // 🔴 §3-I — 옛 문안 「बहुत कमज़ोर हैंड / आम तौर पर fold」은 **사실 오류**였다: 표 밖 122개에는 K9s·Q9s·A9o처럼
    //    CO/BTN에서 여는 핸드가 들어 있다.
    // 🔴 09-20 — 코드가 폴백 티어를 계산하게 바꿨다(calculator-tool.tsx `fallbackTier`): K9s·A9o는 Tier 4,
    //    J2o·72o는 Tier 5. 그래서 «Tier 5는 표 밖이라는 뜻»이라는 단서는 **이제 거짓**이라 뺀다.
    unknownDesc: "मुख्य opening चार्ट में नहीं है",
    // 🔴 3분기 — 폴백은 표 밖 **122개 전부**를 받는다(실측: suited 54 · ace-offsuit 8 · 나머지 offsuit 60 · pair 0).
    //    🔴 **«दो broadway»로 쓰면 그 팔은 공집합이 된다**: offsuit broadway 10개(AKo AQo AJo ATo KQo KJo KTo
    //    QJo QTo JTo)가 전부 HAND_TABLE **안**이다. → id의 「dua kartu broadway (**K9o**)」는 실제 오류다(9는 broadway가 아니다 · id 정정 대상).
    //    🔴 **그렇다고 팔을 «ace-offsuit만»으로 좁히면 반대쪽이 열린다**(딜러 렌즈 09-19가 반증):
    //    K9o·Q9o·J9o·T9o(·98o)가 «나머지 = fold»로 떨어져 **BTN 표준 오픈이 전 포지션 폴드**가 된다.
    //    ms의 라벨 「Ace offsuit **atau dua kad tinggi**」는 이 자리를 덮고 있어 오류가 아니다(브리프 §3-L의 «ms 정정» 서술이 과했다).
    //    → hi는 «두 장 다 9 이상»이라는 **셀 수 있는 조건**으로 못박는다.
    //    🔴 그 조건이 실제로 덮는 표 밖 집합 = **{K9o · Q9o · J9o · T9o} 넷**(A9o는 앞 절 «Ace offsuit»가 흡수한다).
    //    **98o는 8을 들고 있어 이 조건에 안 들어간다** — 3분기 fold로 남는다(교열 렌즈 09-19가 내 열거 오류를 잡았다).
    //    98o까지 살리려면 조건을 «8 이상»으로 넓혀야 하는데 그러면 87o·K8o~T8o가 같이 끌려와 재검토가 필요하다 → EN 회灌 후보로 둔다.
    //    🔴 그리고 1분기 뒤 절에 «बाक़ी»가 없으면 43s·32s·75s·64s·53s·42s가 **두 절에 동시에 걸린다**(같은 렌즈 · ms와 공유하는 결함).
    //    🔴 **그런데 «बाक़ी»만 넣으면 반대쪽이 또 열린다**(2차 교열 09-19): 그 여섯이 통째로 «CO/BTN 오픈»으로 확정돼
    //    32s·42s까지 열린다 → 연결자 갈래에 **«작은 쪽 카드 3 이상»**이라는 바닥을 박았다(그 갈래 = 75s·64s·53s·43s 넷).
    // 🔴 09-20 EN 정본으로 교체 — 위 이중 조건(«둘째 카드 6 이상» 또는 «connector/one-gapper 작은 쪽 3 이상»)은
    //    43s·53s·64s·75s를 «3 이상 → open»과 «둘째 카드 2–5 → fold» **두 절에 동시에** 걸리게 했다(hi 회차 자기모순 · 09-20 발견).
    //    EN이 «작은 쪽 3 이상» 한 조건으로 다시 썼고, CO는 «6 이상»으로 좁혀 10-3s·93s의 CO 오픈 누수를 닫았다.
    //    🪶 43s 역전도 같이 해소됐다 — 코드가 43s를 Tier 4로 계산해 표 안 54s·65s와 같은 급이 됐다.
    unknownAction: "Suited: सब आप तक fold कर दें तो BTN से कोई भी suited हैंड open करें; CO से सिर्फ़ suited king, ऐसे हैंड जिनके दोनों कार्ड 8 या ऊपर हों (Q8s, 10-8s), और 54s तक के connector। Offsuit: सिर्फ़ BTN से — कोई भी ace (A9o, A5o) या ऐसा हैंड जिसके दोनों कार्ड 9 या ऊपर हों (K9o, 10-9o)। बाक़ी सब (J2o, 93o, 72o): fold",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — मज़बूत", "🥉 Tier 3 — खेलने लायक", "⚠️ Tier 4 — Marginal", "🚫 Tier 5 — कमज़ोर"],
    recommendedAction: "सुझाई गई कार्रवाई:",
    axis: ["Premium", "मज़बूत", "खेलने लायक", "Marginal", "कमज़ोर"],
    summaryTitle: "हैंड tier का सार",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "हमेशा raise" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "ज़्यादातर positions से raise" },
      { hands: "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s K9s Q9s J9s", action: "Late position से raise" },
      { hands: "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s", action: "LP में चुनकर खेलें" },
      { hands: "कमज़ोर offsuit हैंड (J2o, 93o, 72o)", action: "आम तौर पर fold" },
    ],
    // 🔴 §3-I — «EP में call» जैसे वाक्य open limp की सलाह बन जाते हैं। प्रिस्क्रिप्शन = «किस चीज़ पर call है
    //    यह साफ़ लिखो + open limp मना करो». 🔴 **선례 8로케일이 이미 그 형이다**(ja·zh·zh-hant·es·pt·fr·id·ms ·
    //    de만 EN 옛 문안 그대로 — 교열 렌즈 09-19가 축어로 셌다). 브리프 §3-L ⑤의 «7로케일»은 de를 뺀 수를 잘못 옮긴 것이다.
    hands: {
      AA: { desc: "सबसे अच्छा हैंड। हर स्पॉट में raise करें", action: "हमेशा raise/re-raise (3-bet)" },
      KK: { desc: "बस flop पर ace से सावधान रहें", action: "हमेशा raise/re-raise" },
      QQ: { desc: "JJ से मज़बूत, पर इसे ज़रूरत से ज़्यादा मज़बूत न मानें", action: "हमेशा raise; deep होने पर सावधान" },
      JJ: { desc: "Flop पर overcards से सावधान रहें", action: "किसी भी position से raise" },
      "1010": { desc: "Flop पर overcards आने से कीमत घटती है", action: "किसी भी position से raise — open limp कभी नहीं" },
      AKs: { desc: "सबसे अच्छा drawing हैंड। Pot बड़ा करें", action: "हमेशा raise/re-raise" },
      AKo: { desc: "AKs से कमज़ोर, पर फिर भी premium", action: "हमेशा raise; re-raise पर call कर सकते हैं" },
      AQs: { desc: "मज़बूत हैंड; position में ज़्यादा कीमती", action: "ज़्यादातर positions से raise" },
      AJs: { desc: "BTN/CO पर बढ़िया, UTG से कमज़ोर", action: "Mid/late से raise; UTG से या तो raise या fold — limp कभी नहीं" },
      A10s: { desc: "सबसे अच्छे suited aces में से एक", action: "LP में raise; EP से fold, जब तक टेबल बहुत passive न हो" },
      KQs: { desc: "ऊँचे flush + straight draw की संभावना", action: "ज़्यादातर positions से raise" },
      KJs: { desc: "मज़बूत drawing हैंड", action: "LP में raise; EP से raise या fold — limp कभी नहीं" },
      "99": { desc: "मध्यम pair, overcard वाले flop से सावधान", action: "ज़्यादातर positions से raise; deep में सावधान" },
      "88": { desc: "अच्छी set संभावना वाला pocket pair", action: "LP में raise; EP में सामने raise हो तो call, और first in हों तो raise या fold — open limp नहीं" },
      AQo: { desc: "AQs से कमज़ोर, पर फिर भी मज़बूत; position मायने रखता है", action: "Mid/late position से raise" },
      AJo: { desc: "EP में कमज़ोर, LP में मज़बूत", action: "CO/BTN से raise, EP में सावधान" },
      KQo: { desc: "सबसे अच्छा offsuit connector", action: "LP में raise; EP में first in हों तो raise या fold, और किसी की raise के सामने आम तौर पर fold — open limp नहीं" },
      K10s: { desc: "Suited king, LP में मज़बूत", action: "LP में raise, EP में fold" },
      QJs: { desc: "मज़बूत two-way draws", action: "LP में raise, deep होने पर ज़्यादा कीमती" },
      J10s: { desc: "सबसे अच्छे suited connectors में से एक", action: "LP में raise; position हो तो एक raise पर call" },
      "109s": { desc: "मज़बूत suited connector", action: "First in हों तो LP से raise; position के साथ एक raise पर call" },
      "77": { desc: "Set-mining हैंड, overcards से सावधान", action: "LP में raise; EP में सामने raise हो तो call, और first in हों तो raise या fold — open limp नहीं" },
      A9s: { desc: "Flush की संभावना वाला suited ace", action: "LP में raise" },
      K9s: { desc: "Suited king; king की pair भी dominated हो सकती है", action: "आपसे पहले सब fold करें तो CO/BTN से open-raise करें; raise का सामना हो तो position, कीमत और effective stacks को ध्यान में रखें" },
      Q9s: { desc: "Straight की संभावना वाली suited queen; बेहतर kicker वाली queens से सावधान", action: "आपसे पहले सब fold करें तो CO/BTN से open-raise करें; raise का सामना हो तो position, कीमत और effective stacks को ध्यान में रखें" },
      J9s: { desc: "Straight और flush की संभावना वाला suited one-gapper", action: "आपसे पहले सब fold करें तो CO/BTN से open-raise करें; raise का सामना हो तो position, कीमत और effective stacks को ध्यान में रखें" },
      "66": { desc: "Set-mining; implied odds चाहिए", action: "Raise पर call तब, जब आप दोनों के पास call की रकम का ~15× पीछे बचा हो; LP में raise" },
      // 🪶 ✅ 2026-09-21(회차 Q10) 해소 — EN 55에도 «~15×»가 들어갔다. hi는 그 전부터 66 문형을 승계해 두고 있었다.
      "55": { desc: "Set के बिना कम कीमत", action: "First in हों तो LP से raise; LP में एक raise पर call तब, जब आप दोनों के पास call की रकम का ~15× पीछे बचा हो" },
      A8s: { desc: "मध्यम suited ace", action: "LP में खेलें, EP में fold" },
      A7s: { desc: "मध्यम suited ace", action: "सिर्फ़ LP में खेलें" },
      A6s: { desc: "मध्यम suited ace", action: "सिर्फ़ LP में खेलें" },
      A5s: { desc: "Wheel + ace-blocker की कीमत; पसंदीदा 3-bet bluff", action: "सिर्फ़ LP; implied odds मायने रखते हैं" },
      A4s: { desc: "Wheel draw वाला suited ace", action: "सिर्फ़ LP" },
      A3s: { desc: "Wheel card + nut flush draw, A2s से एक पायदान ऊपर", action: "सिर्फ़ BTN/SB" },
      A2s: { desc: "Wheel + nut flush, पर कमज़ोर", action: "सिर्फ़ BTN" },
      KJo: { desc: "Domination का ख़तरा; सिर्फ़ LP", action: "CO/BTN से raise, re-raise पर fold" },
      QJo: { desc: "मध्यम connectivity; position चाहिए", action: "सिर्फ़ LP" },
      "98s": { desc: "मज़बूत suited connector", action: "First in हों तो LP से raise; position के साथ raise पर call" },
      // 🪶 ✅ 2026-09-21(회차 Q10) 해소 — EN 87s도 «Raise first in from LP» 형이 됐다. hi는 그 전부터 맞춰 두고 있었다.
      "87s": { desc: "अच्छा suited connector", action: "First in हों तो LP से raise; position के साथ raise पर call" },
      "76s": { desc: "Suited connector", action: "First in हों तो LP से raise; raise पर call सिर्फ़ position और deep stacks के साथ" },
      "44": { desc: "Set के बिना लगभग कोई कीमत नहीं", action: "First in हों तो LP से raise; LP में एक raise पर call तब, जब आप दोनों के पास call की रकम का ~15× पीछे बचा हो" },
      "33": { desc: "Set-mine करना होगा; speculative", action: "First in हों तो LP से raise; बाक़ी हालात में सिर्फ़ deep stacks वाले multiway pots में" },
      "22": { desc: "सबसे छोटा pocket pair", action: "First in हों तो LP से raise; बाक़ी हालात में सिर्फ़ deep stacks वाले multiway pots में" },
      K10o: { desc: "K-10 offsuit, कमज़ोर", action: "कभी-कभी BTN से" },
      Q10o: { desc: "कम connectivity वाला offsuit", action: "सिर्फ़ BTN" },
      J10o: { desc: "ठीक-ठाक offsuit, पर असुरक्षित", action: "कभी-कभी BTN से" },
      Q10s: { desc: "मज़बूत suited broadway, position में अच्छा खेलता है", action: "LP में raise; EP से fold" },
      A10o: { desc: "Marginal offsuit ace, domination का ख़तरा", action: "सिर्फ़ LP" },
      "65s": { desc: "Suited connector; multiway/implied odds चाहिए", action: "First in हों तो LP से raise; raise पर call सिर्फ़ position और deep stacks के साथ" },
      "54s": { desc: "छोटा suited connector; speculative", action: "First in हों तो LP से raise; raise पर call सिर्फ़ position के साथ, सस्ते multiway pots में" },
    },
  },

  spr: {
    // ★딜러 렌즈 — effective stack = «दोनों में से छोटा stack»(옛 문안 「आपका」는 틀렸다).
    effectiveStack: "Effective stack (दोनों stacks में से जो छोटा हो)",
    potSize: "अभी pot का आकार",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ pot",
    zones: {
      low: {
        label: "कम SPR (committed)",
        // 🔴 §3-I — EN का आख़िरी वाक्य ग़ायब था, जिससे गीले बोर्ड पर भी TPTK से stack-off की सलाह बन जाती थी।
        desc: "Pot का बड़ा हिस्सा पहले ही अंदर है। सूखे flop पर top pair top kicker या उससे बेहतर हैंड हो तो बाक़ी chips भी अंदर डालने की योजना बनाएँ — इस गहराई पर fold करना अक्सर बड़ी गलती होती है। लेकिन जोड़े वाले, तीन-flush या तीन-straight बोर्ड पर, या ऐसी action के सामने जो सिर्फ़ set या straight ही बना सकती है, one pair आख़िर में one pair ही रहता है।",
        actions: [["TPTK+", "All-in पर विचार करें"], ["Draws", "Pot odds ज़रूरी हैं"], ["कमज़ोर हैंड", "सावधानी से fold"]],
      },
      mid: {
        label: "मध्यम SPR (लचीला)",
        desc: "यह two pair या उससे बेहतर जैसे मज़बूत हैंड खेलने का ज़ोन है। अपना stack बचाना अहम हो जाता है।",
        // 🔴 §3-I — «परिस्थिति देखकर खेलें»·«जोखिम और इनाम तौलें» D-टाइप सलाह थी (कैलकुलेटर की सबसे बुरी सलाह).
        actions: [["Two pair+", "Value bet"], ["One pair", "एक-दो street, फिर pot control"], ["Draws", "Fold equity हो तो semi-bluff; न हो तो छोड़ दें"]],
      },
      high: {
        label: "ऊँचा SPR (गहरा होता हुआ)",
        desc: "Stacks गहरे हो रहे हैं। Draws और मज़बूत बने हुए हैंड की तुलनात्मक कीमत बढ़ती है।",
        actions: [["Set+", "मज़बूती से खेलें"], ["Draws", "Implied odds बढ़ते हैं"], ["One pair/TPTK", "सावधानी से आगे बढ़ें"]],
      },
      deep: {
        label: "बहुत ऊँचा SPR (deep)",
        desc: "यह deep-stack खेल है। Position, draw की संभावना और विरोधी की range पढ़ना बहुत मायने रखता है।",
        actions: [["Nut हैंड", "बड़ा bet कर सकते हैं"], ["Draws", "बहुत ऊँचे implied odds"], ["कमज़ोर बने हुए हैंड", "सावधान, bluff का शिकार हो सकते हैं"]],
      },
    },
    legend: ["Committed", "लचीला", "गहरा होता हुआ", "Deep"],
  },

  m: {
    inputs: { stack: "आपका stack", bb: "Big blind", sb: "Small blind", ante: "Ante" },
    players: "टेबल पर खिलाड़ी: {v}",
    headsUp: "2 (heads-up)",
    orbitCaption: "Orbit की लागत (एक चक्कर के blinds)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    mCaption: "M value (Harrington का M)",
    zones: {
      // ★딜러 렌즈 — «जो सबसे अच्छा हैंड मिले» = «आप तक आने वाले हैंड में से सबसे अच्छा», न कि «premium का इंतज़ार».
      //   पहले pot खुला न हो, यह शर्त भी EN में है (zh-hant 네이티브 렌즈가 잡은 자리 · 브리프 §3-E).
      dead: { name: "💀 Dead zone", desc: "Fold equity ख़त्म हो चुकी है — all-in ही इकलौता विकल्प है, इसलिए blinds आप तक पहुँचने से पहले जो सबसे अच्छा हैंड आप तक आए उसी से shove करें, और ऐसा स्पॉट चुनें जहाँ pot अभी किसी ने खोला न हो।", action: "अभी all-in" },
      red: { name: "🔴 Red zone", desc: "आपको जल्द double up करना होगा। Push/fold रणनीति अपनाएँ — अच्छे हैंड से shove करें, बाक़ी fold करें।", action: "Push/fold" },
      orange: { name: "🟠 Orange zone", desc: "आपका stack घट रहा है। Range को सिर्फ़ मज़बूत हैंड तक सीमित रखें और open-shove के मौक़े देखें।", action: "Tight range" },
      yellow: { name: "🟡 Yellow zone", desc: "दबाव बढ़ रहा है। आपको सक्रिय होकर chips जुटाने होंगे — अच्छे स्पॉट मिलें तो आक्रामक खेलें।", action: "आक्रामक खेलें" },
      green: { name: "🟢 Green zone", desc: "आपके पास आरामदायक stack है। पूरी रणनीति का इस्तेमाल करें — position play और bluff से stack बढ़ाएँ।", action: "पूरी रणनीति" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " tournament stacks को ICM के अनुसार अपेक्षित prize money में बदलता है। Call या fold तय करने के लिए हर संभावित नतीजे (जीत, tie या हार) के बाद की value को उसकी वास्तविक संभावना से गुणा करें और कुल की तुलना fold के बाद की value से करें। Bust होने पर वास्तव में मिलने वाला prize गिनें, अपने-आप शून्य नहीं।",
    numPlayers: "खिलाड़ियों की संख्या",
    paidPlaces: "Paid places (ITM)",
    stacksTitle: "खिलाड़ियों के chip stacks",
    total: "कुल {n}",
    decStack: "खिलाड़ी {n} का stack घटाएँ",
    stackInput: "खिलाड़ी {n} का chip stack",
    incStack: "खिलाड़ी {n} का stack बढ़ाएँ",
    prizesTitle: "Prizes",
    decPrize: "स्थान {n} का prize घटाएँ",
    prizeInput: "स्थान {n} का prize",
    incPrize: "स्थान {n} का prize बढ़ाएँ",
    currencyNote: "Prize की रकम किसी भी currency में भरें।",
    resultTitle: "ICM परिणाम",
    th: { player: "खिलाड़ी", chips: "Chips", chipPct: "Chip %", icmValue: "ICM value", icmPct: "ICM %", diff: "अंतर", chop: "Chip chop" },
    playerCell: "{medal} P{n}",
    diffPlus: "+अंतर",
    // ★딜러 렌즈 — «short-stack बचाव ज़ोन, coin flip से बचें»는 틀렸다: risk premium이 가장 큰 쪽은 **중간 stack**이고,
    //   blind에 먹힐 만큼 짧은 stack은 예외다(EN 정본).
    diffPlusNote: "ICM के अनुसार prize pool में आपका हिस्सा आपके chip share से अधिक है। सिर्फ़ यह चिन्ह नहीं बताता कि call करना चाहिए या fold।",
    diffMinus: "−अंतर",
    diffMinusNote: "ICM के अनुसार prize pool में आपका हिस्सा आपके chip share से कम है। सिर्फ़ यह चिन्ह नहीं बताता कि आक्रामक खेलना फ़ायदेमंद है।",
    diffUnit: "pp",
    empty: "Stacks और prizes शून्य से अधिक रखें। Prizes बड़े से छोटे क्रम में हों; बराबर prizes भी स्वीकार हैं।",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "बिना ante",
    bbAnteOn: "BB ante ON",
    table: "टेबल",
    headsUp: "Heads-Up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "स्थिति",
    sbShove: "SB: shove या fold",
    bbCall: "BB: shove पर call",
    position: "Position {hint}",
    firstInHint: "(first-in — आपके सामने सब fold)",
    effectiveStack: "Effective stack: {v}",
    captionHuPush: "{stack}bb पर SB जिन हैंड से shove करता है",
    captionHuCall: "{stack}bb पर BB जिन हैंड से shove call करता है",
    captionMw: "{table}-max टेबल पर {pos} से first-in shove, {stack}bb",
    withAnte: " (ante के साथ)",
    combosSuffix: " / {total} combos",
    legendPush: "Push (all-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "तिरछी रेखा = pairs · ऊपर दाईं ओर = suited · नीचे बाईं ओर = offsuit",
      p1: "ग्रिड ",
      strong2: "rank के क्रम में है, ताक़त के नहीं",
      p2: ", इसलिए एक ही पंक्ति में highlight वाले और बिना highlight वाले खानों का बारी-बारी दिखना सामान्य है — AQo, KQo और QQ पास-पास हैं, पर ताक़त के क्रम में नहीं। A5s का शामिल होना और A6s का बाहर रहना भी सही है: A5s से ",
      strong3: "wheel straight (A-2-3-4-5)",
      p3: " बनता है, जो कम kicker से ज़्यादा मायने रखता है।",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Nash equilibrium, heads-up (SB बनाम BB)",
      p1: ": माना गया है कि SB या तो shove करता है या fold। Ante सेटिंग हर खिलाड़ी के लिए 0.125bb जोड़ती है (big-blind ante के बराबर, ≈12.5%)। Stack जितना छोटा, ranges उतनी चौड़ी — और ~3-4bb से नीचे BB सही तौर पर SB के shove से ",
      em: "ज़्यादा चौड़ी",
      p2: " range से call करता है, pot odds की वजह से।",
    },
    mwNote: {
      strong: "{table}-max first-in shove चार्ट",
      p1: ": आपके सामने सब fold कर चुके हैं और आप या तो shove करते हैं या fold। यह ",
      strong2: "शुद्ध chip-EV",
      p2: " वाला Nash-शैली का equilibrium है — पीछे बैठे खिलाड़ियों की calling ranges एक साथ solve होती हैं — इस मानक अनुमान के साथ कि call हुआ pot पहले caller के साथ heads-up तय होता है (कई callers वाले pot नहीं गिने जाते)। आपके पीछे जितने कम खिलाड़ी बचते हैं (UTG → BTN → SB), stack जितना छोटा होता है और ante ON (हर खिलाड़ी 0.125bb) होने पर ranges चौड़ी होती हैं। शुद्ध chip-EV होने से early position (UTG/MP) की 10bb ranges आम तौर पर चलने वाले नियमों से tight निकलती हैं (छोटे pairs fold) — असल खेल में ICM और विरोधियों के हिसाब से समायोजन करें।",
    },
    readMore: "Tournament में stack के दबाव और ICM की बुनियाद के लिए हमारी",
    shortStackLink: { slug: "holdem-tournament-vs-cash-game", text: "tournament बनाम cash game गाइड" },
    readMoreEnd: " पढ़ें।",
  },

  icmGuide: {
    bubble: {
      badge: "ICM गाइड",
      h2: "ICM कैलकुलेटर कैसे इस्तेमाल करें — 3 मिनट का bubble उदाहरण",
      intro: "मान लीजिए चार खिलाड़ी बचे हैं और तीन को prize मिलेगा (bubble)। Stacks 60,000 / 40,000 / 30,000 / 20,000 हैं और prizes $500 / $300 / $200। इन्हें कैलकुलेटर में भरें, और हर खिलाड़ी का chip share बनाम उसकी असली prize value (ICM) सामने आ जाती है:",
      th: { player: "खिलाड़ी", chipPct: "Chip %", icmPct: "ICM %", diff: "अंतर" },
      rows: [
        { player: "🥇 Chip leader", chip: "40.0%", icm: "33.3%", diff: "-6.7 अंक", up: false },
        { player: "🥈 दूसरा", chip: "26.7%", icm: "27.2%", diff: "+0.6 अंक", up: true },
        { player: "🥉 तीसरा", chip: "20.0%", icm: "22.9%", diff: "+2.9 अंक", up: true },
        { player: "चौथा (short stack)", chip: "13.3%", icm: "16.6%", diff: "+3.3 अंक", up: true },
      ],
      keyPoint: {
        // 🔴 शर्त वाला हिस्सा (blinds निगल जाने वाले) `text` में आगे रखा गया है, ताकि «survival value बचाने» वाले
        //    मक़सद से टकराकर न पढ़ा जाए (브리프 §5 · zh·ja가 푼 형).
        text: "तालिका दिखाती है कि {b1}, यानी 6.7 प्रतिशत अंक का अंतर; यह call/fold की सीमा नहीं है। बीच वाले stacks का risk premium अक्सर सबसे अधिक होता है, इसलिए उन्हें cover करने वाला leader {b2}, अगर ranges इसकी अनुमति दें। Short stacks को {b3}। फ़ैसला stacks, prizes और विरोधियों पर निर्भर है, सिर्फ़ अंतर के चिन्ह पर नहीं।",
        b1: "chip leader की ICM value (33.3%) उसके chip share (40%) से कम है",
        b2: "बीच वाले stacks पर दबाव डाल सकता है",
        b3: "calls ध्यान से चुनने चाहिए; blinds से ख़त्म होने वाले बहुत छोटे stacks अपवाद हैं",
      },
    },
    deal: {
      // ★2026-09-17 재조준 — 옛 예시(3명 · 50/30/20 · $750/$618)는 EN이 카니발 때문에 폐기한 것이다.
      //   새 예시 = 4명 · 45/25/18/12 · $2,300(1,000/600/400/300) · 값 출처 scripts/calc-icm-example.ts.
      badge: "Prize का बँटवारा",
      h2: "ICM chop कैलकुलेटर — final-table deal की असली कीमत",
      intro: "चार खिलाड़ी बचे हैं और deal पर बात हो रही है। Stacks 450,000 / 250,000 / 180,000 / 120,000 (45% / 25% / 18% / 12%) हैं और $2,300 prize money बचा है, जो $1,000 / $600 / $400 / $300 में बँटता है। इन्हें ऊपर ICM कैलकुलेटर में भरें — उसका Chip chop कॉलम दोनों आँकड़े साथ-साथ रख देता है:",
      th: { player: "खिलाड़ी", chop: "Chip chop", icm: "ICM deal", diff: "अंतर" },
      rows: [
        { player: "🥇 Chip leader (45%)", chop: "$1,035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 दूसरा (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 तीसरा (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "चौथा (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        // ★pt 네이티브 렌즈 — «next payout» = «अगला दिया जाने वाला prize», न कि «अगली prize छलाँग». मान कोष्ठक में।
        text: "सीधा chip chop chip share के हिसाब से बाँटता है और {b1}; ICM deal हर खिलाड़ी के हर स्थान पर finish करने की संभावना को दर्शाता है और {b2}। ऊपर सबसे छोटे stack को chips के हिसाब से $276 मिलते हैं, पर ICM के हिसाब से $458 — {b3}। बात शुरू करने से पहले दोनों आँकड़े निकाल लें। टेबल पर जिसे «chip chop» कहा जाता है वह अक्सर save-and-chop होता है — पहले हर किसी को अगला दिया जाने वाला prize (यहाँ चौथे स्थान के $300) दे दिया जाता है और सिर्फ़ बची रकम chips के हिसाब से बँटती है — और उसका नतीजा इस कॉलम वाले सीधे बँटवारे से नहीं, ICM से मिलता-जुलता होता है। ICM यह भी मानकर चलता है कि सबका कौशल बराबर है और यह नहीं देखता कि अगले blinds कौन भरेगा, इसलिए बड़ा stack अपने ICM आँकड़े से ऊपर मोलभाव करेगा।",
        b1: "chip leader के पक्ष में जाता है",
        b2: "short stacks के लिए ज़्यादा fair है",
        b3: "$182 ज़्यादा",
      },
      // 🔴 EN का `holdem-icm` लिंक hi में मौजूद नहीं है (EN 9 slugs में से hi में सिर्फ़ 1 है) →
      //    코퍼스에 실재하는 글로 대체(게이트 F항).
      // 🪶 코퍼스가 얇아 이 슬러그가 한 페이지에서 4자리(pushfold · 여기 · quickRef⑥ · related[0])에 쓰인다.
      //    여기 한 자리만 «chip의 가치» 축으로 앵커를 달리 쓴다(교열 렌즈 09-19 · 브리프 §3-L ⑧).
      //    🪶 나머지 두 자리(quickRef⑥ · related[0])는 «Tournament या cash game»으로 **동일 유지**다 — 범위를 과장하지 마라(2차 교열).
      linkLead: "एक ही chip की कीमत tournament और cash game में अलग क्यों होती है, यह बताती है हमारी गाइड —",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Tournament में chip की कीमत" },
    },
  },

  // ★2026-09-17 빠른 참조 6표 — 🔴 모든 값 = scripts/calc-reference-tables.ts 출력(09-17). 손으로 고치지 마라(§13 언어 불변).
  // 🔴 링크: EN 9슬러그 중 hi에 실재하는 것은 `holdem-tournament-vs-cash-game` 하나뿐이다 →
  //    ①②는 비우고 ③④⑤는 hi 코퍼스의 실제 글로 대체한다(게이트 F항 · 브리프 §3-J 「없는 게 정답」).
  quickRef: [
    {
      badge: "झटपट संदर्भ",
      h2: "Equity कैलकुलेटर संदर्भ — preflop all-in मैचअप",
      intro: "जब दो हैंड preflop all-in जाते हैं तब की equity, मैचअप के हर suit संयोजन का औसत लेकर (पहले से गणना की गई: हर एक के लिए पूरे 1,712,304 बोर्ड)। कोई एक ख़ास संयोजन लगभग एक अंक तक अलग हो सकता है — सटीक कार्ड ऊपर equity कैलकुलेटर में भरें।",
      th: ["मैचअप", "हैंड A", "हैंड B", "बराबरी"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81.9%", "18.1%", "0.5%"],
        ["AA vs AKs", "87.9%", "12.1%", "1.3%"],
        ["AA vs 87s", "77.5%", "22.5%", "0.3%"],
        ["AA vs 72o", "88.2%", "11.8%", "0.4%"],
        ["KK vs AKs", "65.9%", "34.1%", "0.8%"],
        ["QQ vs AKo", "56.8%", "43.2%", "0.4%"],
        ["QQ vs AKs", "54.0%", "46.0%", "0.4%"],
        ["JJ vs TT", "82.0%", "18.0%", "0.4%"],
        ["TT vs A9o", "72.2%", "27.8%", "0.4%"],
        ["TT vs 87s", "80.3%", "19.7%", "0.5%"],
        ["22 vs AKo", "52.6%", "47.4%", "0.6%"],
        ["AKo vs AQo", "74.4%", "25.6%", "4.7%"],
        ["AKs vs QJs", "63.5%", "36.5%", "0.5%"],
        ["AKo vs JTs", "59.5%", "40.5%", "0.5%"],
      ],
      note: "Equity यानी pot में आपका औसत हिस्सा, बराबरी (chop) को भी गिनकर। Pair बनाम दो overcards क्लासिक race है; ऊँचे pair के सामने छोटा pair लगभग 4.5 के मुक़ाबले 1 का underdog होता है।",
    },
    {
      badge: "झटपट संदर्भ",
      h2: "Pocket aces बनाम बेतरतीब हैंड — विरोधियों की संख्या के हिसाब से",
      intro: "जब सब preflop all-in हों तो AA कितनी बार जीतता है, N बेतरतीब हैंड के सामने (Monte Carlo, हर पंक्ति पर 8,000,000 runout)। पहले दो callers aces की लगभग 10-10 अंक कीमत ले जाते हैं; उसके बाद हर एक की कीमत घटती जाती है।",
      th: ["विरोधी", "AA की equity"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85.2%"], ["2", "73.4%"], ["3", "63.8%"], ["4", "55.9%"],
        ["5", "49.2%"], ["6", "43.6%"], ["7", "38.7%"], ["8", "34.6%"],
      ],
      // 🔴 EN «no longer a favorite» = «जीतने की संभावना 50% से नीचे» (दांव की शब्दावली) —
      //    «अब सबसे अच्छा हैंड नहीं रहा» लिख देने पर वाक्य झूठ हो जाता है (49.2% बाक़ी पाँच के ~10% के सामने भारी बढ़त है).
      note: "इसीलिए aces के साथ heads-up pot ही चाहिए: पाँच बेतरतीब हैंड के सामने Hold'em के सबसे अच्छे starting हैंड के जीतने की संभावना भी 50% से नीचे चली जाती है (49.2%, और बाक़ी हिस्सा पाँचों में बँटता है) — हैंड फिर भी सबसे मज़बूत रहता है, क्योंकि बाक़ी हर खिलाड़ी के पास लगभग 10% ही है। ऊपर equity कैलकुलेटर में किसी विरोधी को «कोई भी हैंड» पर रखकर किसी भी हैंड की इसी तरह जाँच कर सकते हैं (तीन विरोधियों तक)।",
    },
    {
      badge: "झटपट संदर्भ",
      h2: "Outs कैलकुलेटर संदर्भ — outs की संख्या के हिसाब से draw odds",
      intro: "आपका draw पूरा होने की संभावना: flop → river (दो कार्ड आने बाक़ी), flop → turn (सिर्फ़ अगला कार्ड) और turn → river (एक कार्ड) — सटीक आँकड़ा, साथ में Rule of 4 और 2 का अनुमान। पहले outs गिनें, फिर पंक्ति में आगे पढ़ें।",
      th: ["Outs", "आम draw", "Flop → river", "Flop → turn", "Turn → river", "Rule of 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4.3%", "2.1%", "2.2%", "4% · 2%"],
        ["2", "Pocket pair → set", "8.4%", "4.3%", "4.3%", "8% · 4%"],
        ["3", "एक overcard", "12.5%", "6.4%", "6.5%", "12% · 6%"],
        ["4", "Gutshot straight", "16.5%", "8.5%", "8.7%", "16% · 8%"],
        ["5", "Pair → two pair या trips", "20.4%", "10.6%", "10.9%", "20% · 10%"],
        ["6", "दो overcards", "24.1%", "12.8%", "13.0%", "24% · 12%"],
        ["7", "–", "27.8%", "14.9%", "15.2%", "28% · 14%"],
        ["8", "Open-ended straight", "31.5%", "17.0%", "17.4%", "32% · 16%"],
        ["9", "Flush draw", "35.0%", "19.1%", "19.6%", "36% · 18%"],
        ["10", "Gutshot + दो overcards", "38.4%", "21.3%", "21.7%", "40% · 20%"],
        ["11", "Open-ended + एक overcard", "41.7%", "23.4%", "23.9%", "44% · 22%"],
        ["12", "Flush draw + gutshot", "45.0%", "25.5%", "26.1%", "48% · 24%"],
        ["13", "–", "48.1%", "27.7%", "28.3%", "52% · 26%"],
        ["14", "Open-ended + दो overcards", "51.2%", "29.8%", "30.4%", "56% · 28%"],
        ["15", "Flush draw + open-ended", "54.1%", "31.9%", "32.6%", "60% · 30%"],
        ["16", "–", "57.0%", "34.0%", "34.8%", "64% · 32%"],
        ["17", "–", "59.8%", "36.2%", "37.0%", "68% · 34%"],
        ["18", "–", "62.4%", "38.3%", "39.1%", "72% · 36%"],
        ["19", "–", "65.0%", "40.4%", "41.3%", "76% · 38%"],
        ["20", "–", "67.5%", "42.6%", "43.5%", "80% · 40%"],
      ],
      note: "दो-कार्ड वाला आँकड़ा सिर्फ़ तब लागू होता है जब आप दोबारा पैसे दिए बिना दोनों कार्ड देखेंगे (यानी all-in)। Flop पर एक bet झेल रहे हों तो flop → turn वाला कॉलम देखें: 9 outs = 19.1%। Overcards सबसे कम भरोसेमंद outs हैं — made हैंड के सामने एक overcard pair बन जाए तब भी अक्सर हार होती है, इसलिए उन्हें घटाकर गिनें। Draw की कीमत असल हैंड में कैसे तय होती है, यह है",
      link: { slug: "3bet-pot-bet-sizing", text: "3-bet pot में bet sizing" },
      linkTail: " में।",
    },
    {
      badge: "झटपट संदर्भ",
      h2: "Pot odds कैलकुलेटर संदर्भ — call के लिए कितनी equity चाहिए",
      intro: "Pot में इस आकार का bet झेलते समय call को break-even होने के लिए कम से कम इतनी equity चाहिए: call ÷ (bet के बाद का pot + call)। यह दोनों तरह से दिखाया गया है — odds के रूप में और उनसे बनने वाली ज़रूरी equity के रूप में; कैलकुलेटर equity वाला रूप बताता है। इसे ऊपर outs वाली तालिका के सटीक आँकड़ों से मिलाकर देखें।",
      th: ["Bet का आकार", "Odds (X : 1)", "ज़रूरी equity"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ pot", "5 : 1", "16.7%"],
        ["⅓ pot", "4 : 1", "20.0%"],
        ["½ pot", "3 : 1", "25.0%"],
        ["⅔ pot", "2.5 : 1", "28.6%"],
        ["¾ pot", "2.33 : 1", "30.0%"],
        ["Pot", "2 : 1", "33.3%"],
        ["1.5× pot", "1.67 : 1", "37.5%"],
        ["2× pot", "1.5 : 1", "40.0%"],
        ["3× pot", "1.33 : 1", "42.9%"],
      ],
      note: "Flush draw (दो कार्ड बाक़ी हों तो 35.0%, अगले एक कार्ड पर 19.1%) flop पर pot-size bet को सिर्फ़ तब call कर सकता है जब वह all-in हो। वरना implied odds कैलकुलेटर — pot odds टैब का toggle — आगे जीतने की उम्मीद वाली रकम जोड़ देता है, बशर्ते विरोधी के पास chips पीछे बचे हों और ऐसा हैंड हो जो पैसे देगा; nuts का draw न हो तो इसे बहुत घटाकर गिनें। पहली बार pot odds का हिसाब कैसे लगाते हैं, इसका उदाहरण है",
      link: { slug: "texas-holdem-rules-for-beginners", text: "टेक्सस होल्डम कैसे खेलें" },
      linkTail: " में।",
    },
    {
      badge: "झटपट संदर्भ",
      h2: "SPR कैलकुलेटर संदर्भ — कितना मज़बूत हैंड चाहिए",
      intro: "SPR यानी effective stack ÷ अभी का pot, जहाँ effective stack दोनों stacks में से छोटा वाला है — यानी जितना दोनों में से कोई भी जीत या हार सकता है। यह जितना कम होगा, उस stack का उतना हिस्सा पहले ही लगा हुआ है और उतने कमज़ोर हैंड से आप stack off कर सकते हैं; जितना ज़्यादा होगा, बड़े pot के लिए आपको उतना ही nuts के क़रीब होना चाहिए। ज़ोन को flop की योजना की तरह पढ़ें: गीले या जोड़े वाले बोर्ड पर one pair आख़िर में one pair ही है।",
      th: ["SPR", "ज़ोन", "हैंड की ताक़त · कार्रवाई"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Committed", "सूखे flop पर top pair top kicker या बेहतर: सब अंदर डालने की योजना बनाएँ — इस गहराई पर fold करना अक्सर बड़ी गलती होती है"],
        ["4 ≤ SPR < 8", "लचीला", "Value के लिए two pair या बेहतर; one pair से एक-दो street, फिर pot control"],
        ["8 ≤ SPR < 15", "गहरा होता हुआ", "Sets और उससे बेहतर हैंड stack के लिए खेलते हैं; draws के implied odds बढ़ते हैं"],
        ["SPR ≥ 15", "Deep", "बड़े pot सिर्फ़ nut-श्रेणी के हैंड से — कमज़ोर बने हुए हैंड bluff का निशाना बनते हैं"],
      ],
      note: "ऊपर का SPR कैलकुलेटर किसी भी stack और pot को इन्हीं चार ज़ोन में बदल देता है। 3-bet pot में SPR कैसे गिरता है और उससे योजना कैसे बदलती है, यह है",
      link: { slug: "3bet-pot-cbet", text: "3-bet pot में c-bet" },
      linkTail: " में।",
    },
    {
      badge: "झटपट संदर्भ",
      h2: "M value कैलकुलेटर — tournament के पाँच ज़ोन",
      intro: "M यानी आपका stack ÷ एक orbit की लागत (small blind + big blind + सारे antes): बिना कोई हैंड खेले आप कितने चक्कर टिक सकते हैं। ज़ोन नौ या दस खिलाड़ियों वाली भरी टेबल मानकर बने हैं; कम खिलाड़ी हों तो पहले M को (खिलाड़ी ÷ 10) से गुणा करें — यही Harrington का Effective M है — यानी छह खिलाड़ियों की final table पर M 10 असल में 6 जैसा खेलता है («Tournament M» टैब कच्चा M दिखाता है; यह बदलाव आपको ख़ुद करना है)।",
      th: ["ज़ोन", "M", "रणनीति"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Dead zone", "< 1", "Fold equity ख़त्म — blinds पहुँचने से पहले जो सबसे अच्छा हैंड आप तक आए उसी से shove करें, हो सके तो first in"],
        ["🔴 Red zone", "1–5", "Push/fold: अच्छे हैंड से shove, बाक़ी fold, जल्द double up करें"],
        ["🟠 Orange zone", "6–9", "Range को मज़बूत हैंड तक समेटें और open-shove के मौक़े देखें"],
        ["🟡 Yellow zone", "10–19", "दबाव बढ़ा है — अच्छे स्पॉट में आक्रामक होकर chips जुटाएँ"],
        ["🟢 Green zone", "20+", "आरामदायक stack — पूरी रणनीति, position play और bluff"],
      ],
      note: "Tournament के stack chips में नहीं, orbits और blinds में क्यों नापे जाते हैं, यह है",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Tournament या cash game" },
      linkTail: " में।",
    },
  ],

  guide: {
    badge: "कैलकुलेटर",
    h2: "9 Hold'em कैलकुलेटर कैसे इस्तेमाल करें",
    cards: [
      { icon: "🎲", title: "Equity कैलकुलेटर (हैंड बनाम हैंड)", body: "2–4 हैंड और कोई भी बोर्ड भरकर हर हैंड की जीत %, बराबरी % और equity देखें। सारे हैंड पता हों तो flop और turn की पूरी गिनती सटीक होती है; preflop पर, या «कोई भी हैंड» वाले विरोधी के साथ, यह 60,000 runout का नमूना लेता है और यह बात बता भी देता है।" },
      { icon: "🎯", title: "Outs कैलकुलेटर", body: "Flop या turn पर आपका draw पूरा होने की संभावना सटीक निकालता है। Rule of 4 और 2 का shortcut और सटीक आँकड़ा, दोनों एक साथ देखें।" },
      { icon: "💰", title: "Pot odds और implied odds", body: "Call या fold का फ़ैसला गणित से लें; implied odds वाला toggle आगे की streets पर जीतने की उम्मीद वाली रकम जोड़ देता है।" },
      { icon: "🃏", title: "हैंड रैंकिंग जाँच", body: "कार्ड चुनकर हैंड की रैंक देखें। 7 कार्ड तक भरें, यह सबसे अच्छा 5-कार्ड संयोजन अपने आप ढूँढ लेता है।" },
      { icon: "📊", title: "Starting hand की ताक़त", body: "अपने दो hole कार्ड चुनें और देखें कि 169 हैंड में यह कौन-सा है और position के हिसाब से सुझाई गई कार्रवाई क्या है।" },
      { icon: "📐", title: "SPR (Stack-to-Pot Ratio)", body: "Stack और pot का अनुपात बताता है कि आपको कितना मज़बूत हैंड चाहिए। SPR जितना कम, मज़बूत हैंड से commit होना उतना सही।" },
      { icon: "🏆", title: "Tournament M value", body: "Harrington का M आपके tournament stack पर दबाव मापता है। Green/yellow/orange/red/dead ज़ोन के साथ आपकी रणनीति पूरी तरह बदल जाती है।" },
      { icon: "📈", title: "ICM कैलकुलेटर", body: "Independent Chip Model tournament chips को असली prize money की कीमत में बदलता है, और बग़ल में chip chop का कॉलम भी रखता है — bubble के फ़ैसलों और final-table deal की बातचीत के पीछे यही आँकड़े होते हैं।" },
      { icon: "⚡", title: "Nash push/fold चार्ट", body: "Heads-up, 6-max और 9-max के लिए 13×13 Nash चार्ट: 1–25bb पर किन हैंड से open-shove करें और किनसे call। Tournament के आख़िरी चरण के लिए ज़रूरी।" },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "ICM कैलकुलेटर और Hold'em कैलकुलेटर — अक्सर पूछे जाने वाले सवाल",
    q: "Q. {q}",
  },

  related: {
    badge: "और गहराई में",
    h2: "गणित समझ आ जाए, तो ये गाइड पढ़ें",
    // 🔴 EN `related`의 8슬러그는 hi에 **하나도 없다**(0/8) — 그래서 **전부 hi 코퍼스에서** 골랐다(개수만 EN과 동일 = 8).
    //    🪶 «EN 9슬러그 중 1개 실재»는 **다른 집합**이다(related 8 + quickRef·pushfold가 쓰는 tournament-vs-cash-game).
    //    두 수를 섞어 적지 마라(교열 렌즈 09-19).
    links: [
      { slug: "holdem-tournament-vs-cash-game", title: "Tournament या cash game", desc: "ICM, bubble और chip value का फ़र्क़" },
      { slug: "texas-holdem-rules-for-beginners", title: "टेक्सस होल्डम कैसे खेलें", desc: "नियम, chips और pot odds का पहला उदाहरण" },
      { slug: "3bet-pot-bet-sizing", title: "3-bet pot में bet sizing", desc: "Draws की कीमत और एक कार्ड के odds" },
      { slug: "3bet-pot-cbet", title: "3-bet pot में c-bet", desc: "SPR गिरने पर योजना कैसे बदलती है" },
      { slug: "holdem-hand-rankings", title: "पोकर हैंड रैंकिंग", desc: "सबसे मज़बूत से सबसे कमज़ोर तक, संभावनाओं के साथ" },
      { slug: "holdem-betting-actions", title: "Betting actions", desc: "Check, call, bet, raise और fold के नियम" },
      { slug: "holdem-all-in-rules", title: "All-in नियम और side pot", desc: "Shove के बाद आप क्या जीत सकते हैं" },
      { slug: "holdem-blind-meaning", title: "Blinds क्या होते हैं", desc: "SB, BB, ante और orbit की लागत" },
    ],
  },
};
