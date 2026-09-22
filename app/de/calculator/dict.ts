import type { CalcDict } from "@/components/calculator/dict";

/**
 * `/de/calculator` 사전 — ★2026-09-17 신설. 공용 컴포넌트 `components/calculator/calculator-tool.tsx`가
 * 이 객체 하나로 화면 전체를 그린다(EN 원문 = `components/calculator/dict.ts`의 CALC_DICT_EN).
 *
 * 용어 출처(우선순위 순): `docs/translation-terms-de.md` → `lib/posts-de/holdem-glossary.ts` →
 * de 코퍼스 실사용(grep). 판단 —
 *   · 핵심명은 사장님 승인 CTA 「Poker-Odds-Rechner」(`components/intl-blog-post-client.tsx:30`).
 *     코퍼스는 「Poker-Rechner」(5)·「ICM-Rechner」(4)를 더 자주 쓰지만 H1·title은 승인명을 유지한다.
 *   · 「Pot Odds」는 단독 명사(코퍼스 149), 합성어에서만 하이픈(「Pot-Odds-Formel」 · terms §5).
 *   · 족보는 terms §1대로 독일어(Paar·Zwei Paare·Drilling·Straße·Vierling) + 영어 유지(Flush·Full House·
 *     Straight Flush·Royal Flush·High Card) — `holdem-hand-rankings.ts` 표와 동일.
 *   · ★2026-09-18 재조준(뱅크 `docs/keyword-bank/de-calculator.md`): 4-2 법칙은 **「Faustregel」이 정본**이다 —
 *     「Regel der 4 und 2」 계열은 **자동완성 전멸**이고, PAS는 「Poker Wahrscheinlichkeiten Faustregel」·
 *     「Poker outs faustregel」 둘 다 실재하며, 코퍼스도 Faustregel 33 : 「Regel der 2 und 4」 6 : 「der 4 und 2」 2다
 *     (`holdem-outs` H2 축어 = 「Outs im Kopf umrechnen: die Faustregel」).
 *     🔴 이름과 «연산 순서»는 코퍼스에서 갈라져 있다 — 이름은 「Regel der 2 und 4」(6건)지만 **연산 병기는 8/8이 4 → 2**다
 *     (`holdem-outs` 「Outs × 4 am Flop, × 2 am Turn」 · `holdem-probability` 「am Flop mit 4 und am Turn mit 2」).
 *     이 페이지는 이름을 안 쓰기로 했으므로(자동완성 전멸) 남는 것은 연산뿐 → 「× 4 … × 2」가 맞다.
 *   · M 존 이름은 `holdem-short-stack.ts`의 표(Grün·Gelb·Orange·Rot·Tot)와 맞췄다. 「M-Ratio」(코퍼스 5).
 *   · 포지션 약어 LP는 코퍼스에 0건이라 「spät/früh(e Position)」로 풀었다(EP·CO·BTN·UTG는 그대로).
 *   · 숫자는 de-DE(천단위 「.」·소수점 「,」·「%」 공백 없음) — §13 수치는 전부 EN과 동일.
 *   · 인용부호 „…“ · 대시 「–」(terms §7-10).
 */
export const CALC_DICT_DE: CalcDict = {
  numberLocale: "de-DE",

  seo: {
    // ★2026-09-18 재조준. 앞머리 = 승인 CTA 「Poker-Odds-Rechner」(50 · 🟢 볼륨 0이 아니다) — 그 안에
    // 자국어 머리어 「poker rechner」 260과 영문 머리어 「poker odds calculator」 590의 토큰이 둘 다 들어간다.
    // 둘째 토큰 「Wahrscheinlichkeiten」 = 「poker wahrscheinlichkeiten rechner」 210. 형제 글이 소유한 것은
    // 「Wahrscheinlichkeiten 〈Tabelle〉」(holdem-probability title)이지 「Rechner」가 아니다 — 분리 성립(뱅크 §6).
    // 🔴 「Quoten(rechner)」 금지 = 스포츠베팅 오염(210 ↔ poker quotenrechner 0 · 뱅크 §1-A).
    title: "Poker-Odds-Rechner – Equity, Wahrscheinlichkeiten & ICM",
    description:
      "Kostenloser Poker-Rechner: Hand-gegen-Hand-Equity, Pot Odds, Outs, Hand-Ranking, Starthände, SPR, Turnier-M, ICM Deal und Chip Chop. 9 Tools, ohne Anmeldung.",
    path: "/de/calculator",
  },

  // ★2026-09-18 히어로 재조준(교열·네이티브 렌즈) — 옛 판은 ① badges[1]이 EN·선례 4로케일에 없는 「In Echtzeit」였고
  //   ② h1Sub에 키워드가 0개였으며 ③ lead가 «칩 나열»이라 이번 회차의 표제 기능(Equity 탭)을 한 글자도 말하지 않았다.
  //   EN·es·pt·ja·zh-hant는 전부 리드를 「두 핸드를 넣고 누가 이기는지 봐라」로 연다.
  hero: {
    badges: ["Kostenloses Tool", "Ohne Anmeldung"],
    h1: "Poker-Odds-Rechner",
    h1Sub: "Equity, Wahrscheinlichkeiten, ICM und Pot Odds an einem Ort",
    lead: "Gib zwei Hände ein und sieh sofort, wer gewinnt – danach Pot Odds, Outs, ICM-Deals, SPR, Turnier-M und Push/Fold-Ranges. Neun kostenlose Hold'em-Rechner, die überall dort exakt durchzählen, wo das schnell genug geht.",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot Odds", "🃏 Hand-Ranking", "📊 Starthand", "📐 SPR", "🏆 M-Ratio", "📈 ICM", "⚡ Push/Fold"],
  },

  // ★2026-09-18 Equity 탭 신설 — 영문 머리어 「poker odds calculator」 590·「poker equity calculator」 210의 의도.
  // 🔴 「Runouts」는 de 코퍼스 축어다(「den einen Runout geliefert」·「solcher Runouts」) — 「Runden」으로 옮기지 마라.
  //    코퍼스의 Runde 100+는 전부 베팅 라운드/오빗이다(pt 「rodada」 함정 §3-G 동형).
  // 🔴 탭 이름(「Equity」) ≠ 페이지 이름(「Poker-Odds-Rechner」) — 「탭을 쓰라」는 문장은 탭 라벨로 지목한다(§3-B).
  equity: {
    label: "Equity", sub: "Hand gegen Hand",
    hero: "Deine Hand",
    opp: "Gegner {n}",
    random: "Zufällige Hand",
    board: "Board",
    pickerHint: "Wähle einen Platz oder das Board und dann die Karten.",
    addPlayer: "+ Gegner hinzufügen", removePlayer: "− Gegner entfernen",
    needTwo: "Gib jeder Hand 2 Karten (oder markiere einen Gegner als zufällige Hand).",
    boardCount: "Lass das Board für Preflop leer, oder gib ihm 3 (Flop), 4 (Turn) oder 5 (River) Karten.",
    th: { player: "Spieler", hand: "Hand", win: "Win %", tie: "Split", equity: "Equity" },
    exactNote: "Exakt – alle {n} möglichen Runouts durchgezählt.",
    mcNote: "Monte Carlo – {n} zufällige Runouts; das Ergebnis schwankt von Rechnung zu Rechnung um etwa ±0,3 Punkte.",
    winner: "{p} gewinnt mit {hand}",
    chop: "Split Pot – {n} Hände teilen den Pot mit {hand}",
    showdownNote: "Showdown – das Board ist komplett, das ist also das Endergebnis.",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Draw-Odds" },
    pot: { label: "Pot Odds", sub: "Call/Fold" },
    hand: { label: "Hand-Ranking", sub: "Karten wählen" },
    starting: { label: "Starthand", sub: "Preflop-Stärke" },
    spr: { label: "SPR", sub: "Stack/Pot-Ratio" },
    m: { label: "Turnier-M", sub: "M-Ratio" },
    icm: { label: "ICM", sub: "Preisgeld-Equity" },
    pushfold: { label: "Push/Fold", sub: "Nash-Chart" },
  },

  workspace: {
    chooseCalculator: "Rechner wählen",
    resetInputs: "Eingaben zurücksetzen",
    resetAria: "{label} zurücksetzen",
    resetMessage: "Eingaben für {label} zurückgesetzt.",
  },

  cardPicker: {
    clearAll: "Alle löschen",
  },

  outs: {
    drawType: "Draw-Typ",
    presets: [
      { label: "Eigene Eingabe" },
      // ★딜러 렌즈: Nut-Flushdraw → Flushdraw(아웃츠 9는 넛이든 아니든 같다) · 오버카드 정의 정정(브리프 §5)
      { label: "Flushdraw", desc: "4 Karten einer Farbe → die 5. fehlt (9 Outs, ob Nut-Flush oder nicht)" },
      { label: "Open-Ended Straßendraw (OESD)", desc: "z. B. 5-6-7-8, du brauchst eine 4 oder 9" },
      { label: "Flush + Gutshot (Kombi)", desc: "9 Flush + 3 Gutshot (Überschneidung abgezogen)" },
      { label: "Gutshot", desc: "z. B. 5-6-8-9, nur eine 7 hilft" },
      { label: "Zwei Overcards", desc: "2 Karten höher als jede Karte auf dem Board × 3 pro Rang – gegen eine fertige Hand stark rabattieren: eine gepaarte Overcard verliert oft trotzdem" },
      { label: "Zwei Paare → Full House", desc: "z. B. A-K auf einem A-K-x-Board → 2 Asse + 2 Könige übrig" },
      { label: "Ein Paar → Drilling", desc: "2 Karten des Rangs sind noch im Deck" },
      { label: "Flush + OESD (Monster)", desc: "9 Flush-Outs + 8 Straßen-Outs (2 doppelt)" },
    ],
    outsSuffix: " ({n} Outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → River",
    afterTurnBtn: "🔄 Turn → River",
    // ★2026-09-18 세 번째 Street(Flop → Turn) — 플롭에서 한 번의 Bet을 마주했을 때 필요한 숫자
    flopOneBtn: "🎯 Flop → Turn",
    afterFlopOne: "Flop → Turn",
    chanceFlopOne: "Trefferchance auf der nächsten Karte vom Flop aus",
    outsCount: "Anzahl Outs: {v}",
    afterFlop: "Flop → River",
    afterTurn: "Turn → River",
    ruleOf4: "Faustregel × 4",
    ruleOf2: "Faustregel × 2",
    chanceFlop: "Trefferchance bis zum River vom Flop aus (beide Karten – ein All-in)",
    chanceTurn: "Trefferchance auf dem River vom Turn aus",
    exact: " (exakt)",
    ruleMental: "Faustregel × {n} (Kopfrechnen):",
    exactNote: "Die groß dargestellte Zahl ist der exakte Wert",
    verdict: { great: "Stark 🔥", good: "Gut ✅", fair: "Mäßig ⚠️", poor: "Schwach ❌", veryPoor: "Sehr schwach 💀" },
  },

  pot: {
    // ★딜러 렌즈: 팟 라벨은 «마주한 Bet을 포함한» 값이다 · orHigher는 «같으면 EV 0»과 어긋나지 않게(브리프 §5)
    potSize: "Potgröße (inklusive der Bet, die du callen musst)",
    callAmount: "Dein Call-Betrag",
    potOddsCaption: "Pot Odds (benötigte Mindest-Equity)",
    orHigher: "– darüber wird der Call profitabel",
    equityLabel: "Deine Hand-Equity: {v}",
    sliderGutshot: "Gutshot 8,7%",
    sliderFlush: "Flush 19,6%",
    impliedToggle: "Implied Odds {toggle}",
    close: "Schließen ▲",
    add: "Hinzufügen ▼",
    extraWinnings: "Erwarteter Zusatzgewinn (wenn du triffst): {v}",
    none: "Keiner",
    impliedCaption: "Implied Odds (mit Zusatzgewinn)",
    impliedNote: "Benötigte Mindest-Equity, {n} extra eingerechnet",
    needImplied: "Implied Odds {n}%",
    needPot: "Pot Odds {n}%",
    verdict: {
      call: { title: "Call (profitabel)", body: "Deine Equity {eq}% > {need} → langfristig profitabel" },
      even: { title: "Break-even (EV 0)", body: "Deine Equity {eq}% = {need} → der Call bringt weder Gewinn noch Verlust. Entscheide nach Faktoren jenseits der Pot Odds, etwa Position und Gegnertyp" },
      fold: { title: "Fold empfohlen", body: "Deine Equity {eq}% < {need} → langfristig Verlust" },
    },
  },

  handEval: {
    pickerLabel: "Karten wählen (5–7)",
    emptyTitle: "Wähle 5 oder mehr Karten, um die Hand zu bewerten",
    emptyHint: "Bei 7 Karten wird die beste 5-Karten-Kombination automatisch gefunden",
    bestFrom: "Beste Hand aus {n} Karten",
    rankNames: [
      "High Card", "Paar", "Zwei Paare", "Drilling", "Straße",
      "Flush", "Full House", "Vierling", "Straight Flush", "Royal Flush",
    ],
    resultNames: [
      "High Card 🃏", "Paar 1️⃣", "Zwei Paare ✌️", "Drilling 3️⃣", "Straße ➡️",
      "Flush 🌊", "Full House 🏠", "Vierling 💎", "Straight Flush 🌟", "Royal Flush 👑",
    ],
    axis: ["High Card", "Paar", "Flush", "Vierling", "Royal"],
  },

  starting: {
    pickerLabel: "Wähle deine 2 Hole Cards",
    emptyPrompt: "Wähle deine 2 Hole Cards",
    unknownDesc: "Nicht in der Kern-Opening-Range",
    unknownAction: "Suited: Wenn alle vor dir gefoldet haben, öffne vom BTN jede Suited-Hand; vom CO nur die Suited Kings, zwei Karten ab 8 (Q8s, 10-8s) und Connectors bis 54s. Offsuit: nur vom BTN – jedes Ass (A9o, A5o) oder zwei Karten ab 9 (K9o, 10-9o). Alles andere (J2o, 93o, 72o): folden",
    tierNames: ["🥇 Stufe 1 – Premium", "🥈 Stufe 2 – Stark", "🥉 Stufe 3 – Spielbar", "⚠️ Stufe 4 – Marginal", "🚫 Stufe 5 – Schwach"],
    recommendedAction: "Empfohlene Aktion:",
    axis: ["Premium", "Stark", "Spielbar", "Marginal", "Schwach"],
    summaryTitle: "Übersicht der Hand-Stufen",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Immer raisen" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Aus den meisten Positionen raisen" },
      { hands: "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s", action: "Aus später Position raisen" },
      { hands: "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s", action: "Selektiv in später Position" },
      { hands: "schwache Offsuit-Hände (J2o, 93o, 72o)", action: "Meist folden" },
    ],
    hands: {
      AA: { desc: "Die beste Hand. Raise in jedem Spot", action: "Immer raisen/re-raisen (3-Bet)" },
      KK: { desc: "Nur ein Ass auf dem Flop ist gefährlich", action: "Immer raisen/re-raisen" },
      QQ: { desc: "Stärker als JJ, aber nicht überbewerten", action: "Immer raisen; bei tiefen Stacks vorsichtig" },
      JJ: { desc: "Auf Overcards am Flop achten", action: "Aus jeder Position raisen" },
      "1010": { desc: "Verliert Wert, wenn Overcards floppen", action: "Aus jeder Position raisen – niemals open-limpen" },
      AKs: { desc: "Die beste Draw-Hand. Bau den Pot auf", action: "Immer raisen/re-raisen" },
      AKo: { desc: "Schwächer als AKs, aber immer noch Premium", action: "Immer raisen; kann einen Re-Raise callen" },
      AQs: { desc: "Starke Hand; in Position mehr wert", action: "Aus den meisten Positionen raisen" },
      AJs: { desc: "Stark auf BTN/CO, schwach aus UTG", action: "Mittel/spät raisen; aus UTG raisen oder folden – niemals limpen" },
      A10s: { desc: "Eines der besten Suited Aces", action: "Spät raisen; aus früher Position folden, außer der Tisch ist passiv" },
      KQs: { desc: "Hoher Flush + Straßendraw-Potenzial", action: "Aus den meisten Positionen raisen" },
      KJs: { desc: "Starke Draw-Hand", action: "Spät raisen; aus früher Position folden oder raisen – niemals limpen" },
      "99": { desc: "Mittleres Paar, auf Overcard-Flops achten", action: "Meist raisen; bei tiefen Stacks vorsichtig" },
      "88": { desc: "Pocket Pair mit gutem Set-Potenzial", action: "Spät raisen; früh einen Raise callen, first-in raisen oder folden – niemals open-limpen" },
      AQo: { desc: "Offsuit schwächer; Position entscheidet", action: "Aus mittlerer/später Position raisen" },
      AJo: { desc: "Früh schwach, spät stark", action: "CO/BTN raisen, früh vorsichtig" },
      KQo: { desc: "Bester Offsuit-Connector", action: "Spät raisen; früh: wenn noch niemand eingestiegen ist, raisen oder folden – gegen einen Raise meist folden" },
      K10s: { desc: "Suited König, spät stark", action: "Spät raisen, früh folden" },
      QJs: { desc: "Starke Draws in beide Richtungen", action: "Spät raisen, deep mehr wert" },
      J10s: { desc: "Einer der besten Suited Connectors", action: "Spät raisen; einen einzelnen Raise in Position callen" },
      "109s": { desc: "Starker Suited Connector", action: "Spät first-in raisen; einen einzelnen Raise in Position callen" },
      "77": { desc: "Set-Mining-Hand, auf Overcards achten", action: "Spät raisen; früh einen Raise callen, first-in raisen oder folden – niemals open-limpen" },
      A9s: { desc: "Suited Ace mit Flush-Potenzial", action: "Spät raisen" },
      "66": { desc: "Set-Mining – braucht Implied Odds", action: "Spät raisen; einen Raise callen, wenn du und der Raiser je ~15× den Call hinter euch habt" },
      "55": { desc: "Ohne Set wenig Wert", action: "Spät first-in raisen; einen einzelnen Raise spät callen, wenn du und der Raiser je ~15× den Call hinter euch habt" },
      A8s: { desc: "Mittleres Suited Ace", action: "Spät spielen, früh folden" },
      A7s: { desc: "Mittleres Suited Ace", action: "Nur spät spielen" },
      A6s: { desc: "Mittleres Suited Ace", action: "Nur spät spielen" },
      A5s: { desc: "Wheel + Ass-Blocker; beliebter 3-Bet-Bluff", action: "Nur spät; Implied Odds zählen" },
      A4s: { desc: "Suited Ace mit Wheel-Draw", action: "Nur spät" },
      A3s: { desc: "Wheel-Karte + Nut-Flush-Draw, eine Spur über A2s", action: "Nur BTN/SB" },
      A2s: { desc: "Wheel + Nut-Flush, aber schwach", action: "Nur BTN" },
      KJo: { desc: "Gefahr, dominiert zu werden; nur spät", action: "CO/BTN raisen, auf Re-Raise folden" },
      QJo: { desc: "Nur mäßige Connectivity; braucht Position", action: "Nur spät" },
      "98s": { desc: "Starker Suited Connector", action: "Spät first-in raisen; einen Raise in Position callen" },
      "87s": { desc: "Guter Suited Connector", action: "Spät first-in raisen; einen Raise in Position callen" },
      "76s": { desc: "Suited Connector", action: "Spät first-in raisen; einen Raise nur in Position und mit tiefen Stacks callen" },
      "44": { desc: "Ohne Set fast wertlos", action: "Spät first-in raisen; einen einzelnen Raise spät callen, wenn du und der Raiser je ~15× den Call hinter euch habt" },
      "33": { desc: "Muss set-minen; spekulativ", action: "Spät first-in raisen; sonst nur Multiway-Pots mit tiefen Stacks" },
      "22": { desc: "Niedrigstes Pocket Pair", action: "Spät first-in raisen; sonst nur Multiway-Pots mit tiefen Stacks" },
      K10o: { desc: "K-10 offsuit, schwach", action: "Gelegentlich vom BTN" },
      Q10o: { desc: "Offsuit, kaum Connectivity", action: "Nur BTN" },
      J10o: { desc: "Ordentlich offsuit, aber anfällig", action: "Gelegentlich vom BTN" },
      Q10s: { desc: "Starker Suited Broadway, spielt sich gut in Position", action: "Spät raisen; aus früher Position folden" },
      A10o: { desc: "Marginales Offsuit-Ass, wird leicht dominiert", action: "Nur spät" },
      "65s": { desc: "Suited Connector; will Multiway/Implied Odds", action: "Spät first-in raisen; einen Raise nur in Position und mit tiefen Stacks callen" },
      "54s": { desc: "Niedriger Suited Connector; spekulativ", action: "Spät first-in raisen; einen Raise nur in Position und in billigen Multiway-Pots callen" },
    },
  },

  spr: {
    // ★딜러 렌즈: 유효 스택 = «둘 중 더 짧은 쪽»(내 스택이 아니다) · SPR low는 «마른 보드»·«플랜» 명시
    effectiveStack: "Effektiver Stack (der kürzere der beiden Stacks)",
    potSize: "Aktuelle Potgröße",
    caption: "SPR (Stack-to-Pot-Ratio)",
    stackDivPot: "Stack ÷ Pot",
    zones: {
      low: {
        label: "Niedriger SPR (committed)",
        desc: "Ein großer Teil des Stacks steckt schon im Pot. Mit Top Pair Top Kicker oder besser auf einem trockenen Flop: plane, den Rest reinzubekommen – bei dieser Tiefe ist Folden oft der größere Fehler. Auf gepaarten Boards, Drei-Flush- oder Drei-Straßen-Boards – oder gegen Action, die nur ein Set oder eine Straße macht – bleibt ein Paar ein Paar.",
        actions: [["TPTK+", "All-in erwägen"], ["Draws", "Pot Odds sind Pflicht"], ["Schwache Hände", "Vorsichtig folden"]],
      },
      mid: {
        label: "Mittlerer SPR (flexibel)",
        desc: "Die Zone für starke Hände wie Zwei Paare oder besser. Deinen Stack zu schützen wird jetzt wichtig.",
        actions: [["Zwei Paare+", "Value betten"], ["Ein Paar", "Ein bis zwei Streets, dann Pot Control"], ["Draws", "Semi-Bluff mit Fold Equity; ohne sie aufgeben"]],
      },
      high: {
        label: "Hoher SPR (wird deep)",
        desc: "Die Stacks werden tief. Draws und starke Made Hands gewinnen relativ an Wert.",
        actions: [["Set+", "Stark spielen"], ["Draws", "Implied Odds steigen"], ["Ein Paar/TPTK", "Mit Vorsicht weiter"]],
      },
      deep: {
        label: "Sehr hoher SPR (deep)",
        desc: "Das ist Deep-Stack-Poker. Position, Draw-Potenzial und das Lesen gegnerischer Ranges zählen enorm.",
        actions: [["Nut-Hände", "Groß betten möglich"], ["Draws", "Sehr hohe Implied Odds"], ["Schwache Made Hands", "Vorsicht, anfällig für Bluffs"]],
      },
    },
    legend: ["Committed", "Flexibel", "Wird deep", "Deep"],
  },

  m: {
    inputs: { stack: "Dein Stack", bb: "Big Blind", sb: "Small Blind", ante: "Ante" },
    players: "Spieler am Tisch: {v}",
    headsUp: "2 (Heads-up)",
    orbitCaption: "Kosten pro Orbit (Blinds + Antes)",
    orbitFormula: "BB {bb} + SB {sb} + Ante {ante}×{players}",
    mCaption: "M-Ratio (Harringtons M)",
    zones: {
      // ★딜러 렌즈 + §3-E: «die beste Hand, die du bekommst» = 받는 패 중 쓸 만한 것(프리미엄을 기다리라는 뜻이 아니다)
      dead: { name: "💀 Tote Zone", desc: "Deine Fold Equity ist weg. Shove die beste spielbare Hand, die dir noch ausgeteilt wird, bevor die Blinds dich erreichen – am besten first-in.", action: "Jetzt all-in" },
      red: { name: "🔴 Rote Zone", desc: "Du brauchst bald ein Double-up. Spiel Push/Fold – shove deine guten Hände, fold den Rest.", action: "Push/Fold" },
      orange: { name: "🟠 Orange Zone", desc: "Dein Stack schrumpft. Verenge deine Range auf starke Hände und such nach Spots für einen Open-Shove.", action: "Enge Range" },
      yellow: { name: "🟡 Gelbe Zone", desc: "Der Druck steigt. Du musst aktiv Chips sammeln – spiel aggressiv, wenn gute Spots kommen.", action: "Aggressiv spielen" },
      green: { name: "🟢 Grüne Zone", desc: "Du hast einen komfortablen Stack. Nutze das volle Arsenal – bau deinen Stack mit Positionsspiel und Bluffs auf.", action: "Volles Arsenal" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " rechnet Turnierstacks in erwartetes Preisgeld nach ICM um. Für Call oder Fold gewichtest du deinen Wert nach jedem möglichen Ausgang (Sieg, Split oder Niederlage) mit dessen tatsächlicher Wahrscheinlichkeit und vergleichst die Summe mit deinem Wert nach einem Fold. Bei einem Bust zählt das tatsächlich ausgezahlte Preisgeld, nicht automatisch null.",
    numPlayers: "Anzahl Spieler",
    paidPlaces: "Bezahlte Plätze",
    stacksTitle: "Chipstacks der Spieler",
    total: "gesamt {n}",
    decStack: "Stack von Spieler {n} verringern",
    stackInput: "Chipstack von Spieler {n}",
    incStack: "Stack von Spieler {n} erhöhen",
    prizesTitle: "Preisgelder",
    decPrize: "Preisgeld für Platz {n} verringern",
    prizeInput: "Preisgeld für Platz {n}",
    incPrize: "Preisgeld für Platz {n} erhöhen",
    currencyNote: "Preisgelder in beliebiger Währung eingeben.",
    resultTitle: "ICM-Ergebnis",
    th: { player: "Spieler", chips: "Chips", chipPct: "Chip %", icmValue: "ICM-Wert", icmPct: "ICM %", diff: "Diff.", chop: "Chip Chop" },
    playerCell: "{medal} S{n}",
    diffPlus: "+Diff.",
    // ★딜러 렌즈: «Short Stack은 무조건 조심»이 아니다 — 리스크 프리미엄이 가장 큰 쪽은 **미들 스택**이고,
    //   블라인드에 먹힐 만큼 짧은 스택은 오히려 지킬 게 적다(EN diffPlusNote 정정 동형).
    diffPlusNote: "Dein ICM-Anteil am Preispool liegt über deinem Chipanteil. Das Vorzeichen allein sagt nicht, ob du callen oder folden solltest.",
    diffMinus: "−Diff.",
    diffMinusNote: "Dein ICM-Anteil am Preispool liegt unter deinem Chipanteil. Das Vorzeichen allein sagt nicht, ob Aggression profitabel ist.",
    diffUnit: "pp",
    empty: "Stacks und Preisgelder müssen positiv sein. Ordne die Auszahlungen absteigend; gleiche Beträge sind erlaubt.",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "Ohne Ante",
    bbAnteOn: "BB-Ante AN",
    table: "Tisch",
    headsUp: "Heads-up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Szenario",
    sbShove: "SB: shoven oder folden",
    bbCall: "BB: einen Shove callen",
    position: "Position {hint}",
    firstInHint: "(first-in – alle vor dir haben gefoldet)",
    effectiveStack: "Effektiver Stack: {v}",
    captionHuPush: "Hände, die der SB bei {stack}bb shovt",
    captionHuCall: "Hände, mit denen der BB bei {stack}bb einen Shove callt",
    captionMw: "First-in-Shove aus Position {pos} am {table}-max-Tisch, {stack}bb",
    withAnte: " (mit Ante)",
    combosSuffix: " / {total} Kombos",
    legendPush: "Push (All-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Diagonale = Paare · oben rechts = suited · unten links = offsuit",
      p1: "Das Raster ist nach ",
      strong2: "Rang sortiert, nicht nach Stärke",
      p2: ", deshalb ist es normal, dass sich markierte und unmarkierte Zellen in einer Zeile abwechseln – AQo, KQo und QQ liegen nebeneinander, aber nicht in Stärke-Reihenfolge. Dass A5s drin ist und A6s nicht, stimmt ebenfalls: A5s macht die",
      strong3: "Wheel-Straße (A-2-3-4-5)",
      p3: ", und das wiegt den niedrigeren Kicker auf.",
    },
    cellTitle: "{hand} – {action}",
    cell: { push: "Push", call: "Call", fold: "Fold" },
    huNote: {
      strong: "Nash-Gleichgewicht, Heads-up (SB vs. BB)",
      p1: ": Vereinfachend wird angenommen, dass der SB entweder shovt oder foldet. Die Ante-Einstellung addiert 0,125bb pro Spieler (entspricht einer Big Blind Ante, ≈12,5%). Die Ranges werden breiter, je kürzer die Stacks sind – und unter ~3–4bb callt der BB korrekterweise ",
      em: "breiter",
      p2: ", als der SB shovt, wegen der Pot Odds.",
    },
    mwNote: {
      strong: "{table}-max First-in-Shove-Chart",
      p1: ": Alle vor dir haben gefoldet, und du shovst oder foldest. Es ist ein ",
      strong2: "reines Chip-EV",
      p2: "-Gleichgewicht nach Nash – die Calling-Ranges der Spieler hinter dir werden gleichzeitig gelöst – mit der üblichen Näherung, dass ein gecallter Pot heads-up gegen den ersten Caller entschieden wird (Pots mit mehreren Callern werden ignoriert). Die Ranges werden breiter, je weniger Spieler hinter dir sitzen (UTG → BTN → SB), je kürzer die Stacks sind und mit Antes AN (0,125bb pro Spieler). Weil es reines Chip-EV ist, fallen die 10bb-Ranges aus früher Position (UTG/MP) enger aus, als gängige Empfehlungen nahelegen (kleine Paare folden) – in der Praxis nach ICM und Gegnern anpassen.",
    },
    readMore: "Die Grundlagen für kurze Stacks findest du in unserem",
    shortStackLink: { slug: "holdem-short-stack", text: "Short-Stack-Strategie-Guide" },
    readMoreEnd: ".",
  },

  icmGuide: {
    bubble: {
      badge: "ICM-Guide",
      h2: "So nutzt du den ICM-Rechner – ein Bubble-Beispiel in 3 Minuten",
      intro: "Sagen wir, vier Spieler sind übrig und drei werden bezahlt (die Bubble). Die Stacks sind 60.000 / 40.000 / 30.000 / 20.000, die Preisgelder $500 / $300 / $200. Gib das in den Rechner ein und du bekommst für jeden Spieler den Chipanteil neben seinem echten Preisgeldwert (ICM):",
      th: { player: "Spieler", chipPct: "Chip %", icmPct: "ICM %", diff: "Diff." },
      rows: [
        { player: "🥇 Chipleader", chip: "40,0%", icm: "33,3%", diff: "-6,7 Pkt.", up: false },
        { player: "🥈 2.", chip: "26,7%", icm: "27,2%", diff: "+0,6 Pkt.", up: true },
        { player: "🥉 3.", chip: "20,0%", icm: "22,9%", diff: "+2,9 Pkt.", up: true },
        { player: "4. (Short Stack)", chip: "13,3%", icm: "16,6%", diff: "+3,3 Pkt.", up: true },
      ],
      // ★브리프 §5 회灌: EN b3 끝의 조건절(「unless the blinds are about to eat it」)이 뒤의 목적절과 어긋나게 읽힌다
      //   → 조건절을 text 쪽으로 앞당기고 볼드는 술어로 끝내지 않는다(§3-B 「{b3}는 술어로 끝내지 마라」).
      keyPoint: {
        text: "Die Tabelle zeigt: {b1}, um 6,7 Prozentpunkte. Das ist keine Call/Fold-Schwelle. Mittelstacks tragen oft die höchste Risikoprämie; ein Leader, der sie covert, kann {b2}, wenn die Ranges es erlauben. Short Stacks sollten {b3}. Entscheidend sind Stacks, Auszahlungen und Gegner, nicht das Vorzeichen allein.",
        b1: "der ICM-Wert des Chipleaders (33,3%) liegt unter seinem Chipanteil (40%)",
        b2: "Druck auf Mittelstacks ausüben",
        b3: "Calls sorgfältig wählen; ein Stack kurz vor dem Wegblinden ist eine Ausnahme",
      },
    },
    // ★2026-09-18 재조준 — 옛 예시(50/30/20 · $1.500 · 618/485/397)는 `lib/posts-de/holdem-icm.ts`
    //   「ICM Deal vs Chip Chop」 절과 표·문장(L170 축어 「$97 mehr」)까지 같아 카니발이었다.
    //   새 예시 = EN 동형(4명 · 45/25/18/12 · $2.300 = 1.000/600/400/300 · `scripts/calc-icm-example.ts`).
    deal: {
      badge: "ICM-Deal-Rechner",
      h2: "ICM-Deal-Rechner – was ein Final-Table-Deal wirklich wert ist",
      intro: "Jetzt sind noch vier Spieler übrig und reden über einen Deal. Die Stacks sind 450.000 / 250.000 / 180.000 / 120.000 (45% / 25% / 18% / 12%), und es sind noch $2.300 Preisgeld offen, ausgezahlt als $1.000 / $600 / $400 / $300. Gib das oben in den ICM-Rechner ein, und seine Spalte „Chip Chop“ stellt die beiden Zahlen nebeneinander:",
      th: { player: "Spieler", chop: "Chip Chop", icm: "ICM Deal", diff: "Diff." },
      rows: [
        { player: "🥇 Chipleader (45%)", chop: "$1.035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 2. (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 3. (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "4. (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        text: "Ein roher Chip Chop teilt nach Chipanteil und {b1}; ein ICM Deal spiegelt die Wahrscheinlichkeit jedes Spielers wider, auf jedem Platz zu landen, und ist {b2}. Hier bekommt der kürzeste Stack nach Chips $276, nach ICM aber $458 – {b3}. Rechne beide Zahlen aus, bevor du verhandelst. Was am Tisch „Chip Chop“ genannt wird, ist oft ein Save-and-Chop: Zuerst bekommt jeder das nächste auszuzahlende Preisgeld (hier die $300 für Platz 4), und nur der Rest wird nach Chips geteilt – das landet nahe bei ICM, nicht bei der rohen Aufteilung in dieser Spalte. Und ICM unterstellt gleiches Können und ignoriert, wer als Nächstes die Blinds zahlt, also wird der Big Stack über seiner ICM-Zahl verhandeln wollen.",
        b1: "begünstigt den Chipleader",
        b2: "fairer gegenüber Short Stacks",
        b3: "$182 mehr",
      },
      linkLead: "Das Modell hinter diesen Zahlen – mit Bubble Factor und Deal-Etikette – steht im",
      link: { slug: "holdem-icm", text: "ICM-Guide" },
    },
  },

  // ★2026-09-18 빠른 참조 6표 — 🔴 모든 값 = EN 사전(`components/calculator/dict.ts`)과 동일, 소수 구분자만 de-DE.
  //   손으로 고치지 마라(§13 수치 언어 불변 · 게이트 `npm run check:calc-parity -- de`가 numL로 대조한다).
  //   H2는 「…-Rechner: …」 형 — 🔴 「Tabelle」 단독 H2는 형제 글(holdem-probability «Poker Wahrscheinlichkeiten
  //   Tabelle») 소유라 쓰지 않는다(뱅크 §6). 「Faustregel」도 H2에 올리지 않는다(holdem-outs·probability H2 소유).
  quickRef: [
    {
      badge: "Schnellreferenz",
      h2: "Equity-Rechner: Preflop-All-in-Matchups",
      intro: "Equity, wenn zwei Hände preflop all-in gehen – gemittelt über jede Farbkombination des Matchups (offline vorberechnet: alle 1.712.304 Boards pro Zeile). Eine bestimmte Kombination kann um etwa einen Punkt abweichen – gib die genauen Karten oben im Tab „Equity“ ein.",
      th: ["Matchup", "Hand A", "Hand B", "Split"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81,9%", "18,1%", "0,5%"],
        ["AA vs AKs", "87,9%", "12,1%", "1,3%"],
        ["AA vs 87s", "77,5%", "22,5%", "0,3%"],
        ["AA vs 72o", "88,2%", "11,8%", "0,4%"],
        ["KK vs AKs", "65,9%", "34,1%", "0,8%"],
        ["QQ vs AKo", "56,8%", "43,2%", "0,4%"],
        ["QQ vs AKs", "54,0%", "46,0%", "0,4%"],
        ["JJ vs TT", "82,0%", "18,0%", "0,4%"],
        ["TT vs A9o", "72,2%", "27,8%", "0,4%"],
        ["TT vs 87s", "80,3%", "19,7%", "0,5%"],
        ["22 vs AKo", "52,6%", "47,4%", "0,6%"],
        ["AKo vs AQo", "74,4%", "25,6%", "4,7%"],
        ["AKs vs QJs", "63,5%", "36,5%", "0,5%"],
        ["AKo vs JTs", "59,5%", "40,5%", "0,5%"],
      ],
      note: "Die Equity ist dein durchschnittlicher Anteil am Pot, Splits eingerechnet. Ein niedriges Paar gegen zwei Overcards ist das klassische Rennen und kommt einem echten Coinflip am nächsten; ein Paar gegen ein höheres Paar ist mit etwa 4,5 zu 1 Underdog. Die vollständige Odds-Tabelle, Street für Street, steht in",
      link: { slug: "holdem-probability", text: "Poker Wahrscheinlichkeiten Tabelle" },
      linkTail: ".",
    },
    {
      badge: "Schnellreferenz",
      h2: "Asse gegen zufällige Hände – nach Zahl der Gegner",
      intro: "Wie oft AA gewinnt, wenn preflop alle all-in sind gegen N zufällige Hände (Monte Carlo, 8.000.000 Runouts pro Zeile). Die ersten beiden Caller kosten die Asse je rund 10 Punkte; danach kostet jeder weitere weniger.",
      th: ["Gegner", "AA-Equity"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85,2%"], ["2", "73,4%"], ["3", "63,8%"], ["4", "55,9%"],
        ["5", "49,2%"], ["6", "43,6%"], ["7", "38,7%"], ["8", "34,6%"],
      ],
      note: "Genau deshalb wollen Asse einen Heads-up-Pot: gegen fünf zufällige Hände ist die beste Starthand im Hold'em kein Favorit mehr auf den Pot (49,2%, die anderen fünf teilen sich den Rest). Setz im Tab „Equity“ einen Gegner auf „Zufällige Hand“, um jede Hand genauso zu testen (bis zu drei Gegner). Warum große Hände in Multiway-Pots schrumpfen, steht in",
      link: { slug: "holdem-equity", text: "Equity im Poker erklärt" },
      linkTail: ".",
    },
    {
      badge: "Schnellreferenz",
      h2: "Outs-Rechner: Draw-Odds nach Zahl der Outs",
      intro: "Wie wahrscheinlich dein Draw ankommt: Flop → River (zwei Karten kommen noch), Flop → Turn (nur die nächste Karte) und Turn → River (eine Karte) – exakt, daneben die Schätzung mit der Faustregel. Erst Outs zählen, dann die Zeile lesen.",
      th: ["Outs", "Typischer Draw", "Flop → River", "Flop → Turn", "Turn → River", "Faustregel 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4,3%", "2,1%", "2,2%", "4% · 2%"],
        ["2", "Pocket Pair → Set", "8,4%", "4,3%", "4,3%", "8% · 4%"],
        ["3", "Eine Overcard", "12,5%", "6,4%", "6,5%", "12% · 6%"],
        ["4", "Gutshot", "16,5%", "8,5%", "8,7%", "16% · 8%"],
        ["5", "Paar → Zwei Paare oder Drilling", "20,4%", "10,6%", "10,9%", "20% · 10%"],
        ["6", "Zwei Overcards", "24,1%", "12,8%", "13,0%", "24% · 12%"],
        ["7", "–", "27,8%", "14,9%", "15,2%", "28% · 14%"],
        ["8", "Open-Ended Straßendraw", "31,5%", "17,0%", "17,4%", "32% · 16%"],
        ["9", "Flushdraw", "35,0%", "19,1%", "19,6%", "36% · 18%"],
        ["10", "Gutshot + zwei Overcards", "38,4%", "21,3%", "21,7%", "40% · 20%"],
        ["11", "Open-Ended + eine Overcard", "41,7%", "23,4%", "23,9%", "44% · 22%"],
        ["12", "Flushdraw + Gutshot", "45,0%", "25,5%", "26,1%", "48% · 24%"],
        ["13", "–", "48,1%", "27,7%", "28,3%", "52% · 26%"],
        ["14", "Open-Ended + zwei Overcards", "51,2%", "29,8%", "30,4%", "56% · 28%"],
        ["15", "Flushdraw + Open-Ended", "54,1%", "31,9%", "32,6%", "60% · 30%"],
        ["16", "–", "57,0%", "34,0%", "34,8%", "64% · 32%"],
        ["17", "–", "59,8%", "36,2%", "37,0%", "68% · 34%"],
        ["18", "–", "62,4%", "38,3%", "39,1%", "72% · 36%"],
        ["19", "–", "65,0%", "40,4%", "41,3%", "76% · 38%"],
        ["20", "–", "67,5%", "42,6%", "43,5%", "80% · 40%"],
      ],
      note: "Der Zwei-Karten-Wert gilt nur, wenn du beide Karten siehst, ohne noch einmal zu zahlen (ein All-in). Stehst du am Flop vor einer Bet, nimm die Spalte Flop → Turn: 9 Outs = 19,1%. Overcards sind die unzuverlässigsten Outs – gegen eine fertige Hand verliert eine gepaarte Overcard oft trotzdem, also rabattiere sie. Wie du Outs zählst, ohne doppelt zu zählen, steht in",
      link: { slug: "holdem-outs", text: "Outs zählen im Poker" },
      linkTail: ".",
    },
    {
      badge: "Schnellreferenz",
      // ★SEO 렌즈 09-18: 옛 H2 「…welche Equity ein Call braucht」는 `holdem-pot-odds` H2
      //   「Wie viel Equity brauchst du zum Callen?」와 의도가 같았고, 그 글의 7행 표와 이 9행 표가 상위집합이었다
      //   → 개념(«얼마가 필요한가») 축은 형제 글에 두고, 여기는 «입력 → 출력» 도구 축으로 튼다.
      h2: "Pot-Odds-Rechner: Pot und Call eingeben, Mindest-Equity ablesen",
      intro: "Stehst du vor einer Bet dieser Größe, ist das die Mindest-Equity, mit der ein Call Break-even läuft: Call ÷ (Pot nach der Bet + Call). Beides ist angegeben – als Odds und als die Equity, die sie verlangen; der Rechner gibt die Equity-Form aus. Vergleiche sie mit den exakten Odds deines Draws in der Outs-Tabelle darüber.",
      th: ["Bet-Größe", "Odds (X : 1)", "Benötigte Equity"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ Pot", "5 : 1", "16,7%"],
        ["⅓ Pot", "4 : 1", "20,0%"],
        ["½ Pot", "3 : 1", "25,0%"],
        ["⅔ Pot", "2,5 : 1", "28,6%"],
        ["¾ Pot", "2,33 : 1", "30,0%"],
        ["Pot", "2 : 1", "33,3%"],
        ["1,5× Pot", "1,67 : 1", "37,5%"],
        ["2× Pot", "1,5 : 1", "40,0%"],
        ["3× Pot", "1,33 : 1", "42,9%"],
      ],
      note: "Ein Flushdraw (35,0% mit zwei kommenden Karten, 19,1% auf der nächsten) callt eine potgroße Bet am Flop nur dann, wenn es all-in geht. Sonst rechnet der Implied-Odds-Rechner – der Schalter im Tab „Pot Odds“ – das Geld dazu, das du später noch zu gewinnen erwartest, vorausgesetzt dein Gegner hat Chips dahinter und eine Hand, die zahlt; rabattiere stark, wenn du nicht auf die Nuts ziehst. Die 10-Sekunden-Methode für jeden Spot steht in",
      link: { slug: "holdem-pot-odds", text: "Pot Odds berechnen" },
      linkTail: ".",
    },
    {
      badge: "Schnellreferenz",
      h2: "SPR-Rechner: wie stark deine Hand sein muss",
      intro: "Der SPR ist effektiver Stack ÷ aktueller Pot, wobei der effektive Stack der kürzere der beiden Stacks ist – alles, was einer der beiden Spieler gewinnen oder verlieren kann. Je niedriger er ist, desto mehr von diesem Stack steckt schon drin und desto schwächer darf die Hand sein, mit der du ihn riskierst; je höher, desto näher an den Nuts musst du für einen großen Pot sein. Lies die Zonen als Flop-Planung: auf einem nassen oder gepaarten Board bleibt ein Paar ein Paar.",
      th: ["SPR", "Zone", "Handstärke · Aktion"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Committed", "Top Pair Top Kicker oder besser auf einem trockenen Flop: plane, den Rest reinzubekommen – bei dieser Tiefe ist Folden oft der größere Fehler"],
        ["4 ≤ SPR < 8", "Flexibel", "Zwei Paare oder besser für Value; ein Paar spielt ein bis zwei Streets, dann Pot Control"],
        ["8 ≤ SPR < 15", "Wird deep", "Sets und besser spielen um Stacks; Draws gewinnen Implied Odds"],
        ["SPR ≥ 15", "Deep", "Große Pots nur mit Nut-Klasse – schwache fertige Hände sind Bluff-Ziele"],
      ],
      note: "Der SPR-Rechner oben macht aus jedem Stack und Pot eine dieser vier Zonen. Ranges nach Stacktiefe findest du in",
      link: { slug: "holdem-short-stack", text: "Short Stack & Push/Fold" },
      linkTail: ".",
    },
    {
      badge: "Schnellreferenz",
      h2: "M-Ratio-Rechner: die fünf Turnierzonen",
      intro: "M ist dein Stack ÷ die Kosten eines Orbits (Small Blind + Big Blind + alle Antes): wie viele Orbits du überlebst, ohne eine Hand zu spielen. Die Zonen setzen einen vollen Neuner- oder Zehnertisch voraus; short-handed multiplizierst du M zuerst mit (Spieler ÷ 10) – Harringtons Effective M –, ein M von 10 an einem Final Table zu sechst spielt sich also wie eine 6 (der Tab „Turnier-M“ zeigt das rohe M; diese Umrechnung machst du selbst).",
      th: ["Zone", "M", "Strategie"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Tote Zone", "< 1", "Die Fold Equity ist weg – shove die beste spielbare Hand, die du noch bekommst, bevor die Blinds dich erreichen, am besten first-in"],
        ["🔴 Rote Zone", "1–5", "Push/Fold: shove deine guten Hände, fold den Rest, du brauchst bald ein Double-up"],
        ["🟠 Orange Zone", "6–9", "Auf starke Hände verengen und nach Spots für einen Open-Shove suchen"],
        ["🟡 Gelbe Zone", "10–19", "Der Druck steigt – sammle in guten Spots aggressiv Chips"],
        ["🟢 Grüne Zone", "20+", "Komfortabler Stack – volles Arsenal, Positionsspiel und Bluffs"],
      ],
      note: "Warum Turnierstacks in Orbits und Blinds gemessen werden statt in Chips, steht in",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Turnier oder Cash Game?" },
      linkTail: ".",
    },
  ],

  guide: {
    badge: "Tools",
    h2: "So nutzt du die 9 Hold'em-Rechner",
    cards: [
      { icon: "🎲", title: "Equity-Rechner (Hand gegen Hand)", body: "Gib 2–4 Hände und ein beliebiges Board ein, und du bekommst Win %, Split % und Equity jeder Hand. Sind alle Hände bekannt, werden Flop und Turn exakt durchgezählt; preflop oder gegen eine zufällige Hand zieht der Rechner 60.000 Runouts als Stichprobe und weist das unter dem Ergebnis aus." },
      { icon: "🎯", title: "Outs-Rechner", body: "Berechnet exakt, wie wahrscheinlich dein Draw am Flop oder Turn ankommt. Du siehst die Faustregel (× 4 und × 2) und die exakte Zahl auf einen Blick." },
      { icon: "💰", title: "Pot Odds & Implied Odds", body: "Entscheide mit Mathe, ob du callst oder foldest; der Implied-Odds-Schalter rechnet das Geld dazu, das du auf späteren Streets noch zu gewinnen erwartest." },
      { icon: "🃏", title: "Hand-Ranking", body: "Wähle Karten und prüfe den Rang der Hand. Bis zu 7 Karten eingeben – die beste 5-Karten-Kombination wird automatisch gefunden." },
      { icon: "📊", title: "Starthand-Stärke", body: "Wähle deine zwei Hole Cards und sieh, welche der 169 Hände es ist und welche Aktion je Position empfohlen wird." },
      { icon: "📐", title: "SPR (Stack-to-Pot-Ratio)", body: "Das Verhältnis von Stack zu Pot sagt dir, wie stark deine Hand sein muss. Je niedriger der SPR, desto eher lohnt es sich, mit einer starken Hand zu committen." },
      { icon: "🏆", title: "Turnier-M", body: "Harringtons M misst den Druck auf deinen Turnierstack. Zwischen grüner, gelber, oranger, roter und toter Zone ändert sich deine Strategie komplett." },
      { icon: "📈", title: "ICM-Rechner", body: "Das Independent Chip Model rechnet Turnierchips in echten Preisgeldwert um – mit einer Chip-Chop-Spalte daneben: die Zahlen hinter Bubble-Entscheidungen und Deal-Gesprächen am Final Table." },
      { icon: "⚡", title: "Nash-Push/Fold-Chart", body: "Ein 13×13-Nash-Chart für Heads-up, 6-max und 9-max: welche Hände du bei 1–25bb open-shovst und welche du callst. Pflicht für die späte Turnierphase." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "ICM-Rechner & Hold'em-Rechner – häufige Fragen",
    q: "Q. {q}",
  },

  related: {
    badge: "Tiefer einsteigen",
    h2: "Guides für danach, wenn die Mathematik sitzt",
    // ★2026-09-18 6 → 8(EN과 «개수» 동일이 규율 — translation-link-structure-equals-en).
    //   holdem-icm · holdem-short-stack · holdem-implied-odds 편입, holdem-tournament 제외(EN 정본과 동형).
    links: [
      { slug: "holdem-icm", title: "Was ist ICM im Poker?", desc: "Chip-EV vs. Preisgeld-EV, Bubble Factor, Deals" },
      { slug: "holdem-equity", title: "Equity im Poker erklärt", desc: "Win%, Fold Equity und Realization" },
      { slug: "holdem-pot-odds", title: "Pot Odds berechnen", desc: "Call/Fold-Spots in Mathematik verwandeln" },
      { slug: "holdem-outs", title: "Outs zählen im Poker", desc: "Outs je Draw und die Faustregel" },
      { slug: "holdem-probability", title: "Poker Wahrscheinlichkeiten Tabelle", desc: "Die Kernzahlen hinter jeder Hand" },
      { slug: "holdem-starting-hands-chart", title: "Poker Starthände Chart", desc: "Welche Hände du aus welcher Position spielst" },
      { slug: "holdem-short-stack", title: "Short Stack & Push/Fold", desc: "Wie du ein Push/Fold-Chart nutzt – und wo es endet" },
      { slug: "holdem-implied-odds", title: "Implied Odds erklärt", desc: "Wann ein schlechter Preis trotzdem ein guter Call ist" },
    ],
  },
};
