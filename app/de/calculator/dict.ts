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
 *   · 4-2 법칙은 코퍼스 다수형 「Regel der 4 und 2」/「Regel der 2 und 4」 중 EN 순서(4 → 2)를 따랐다.
 *   · M 존 이름은 `holdem-short-stack.ts`의 표(Grün·Gelb·Orange·Rot·Tot)와 맞췄다. 「M-Ratio」(코퍼스 5).
 *   · 포지션 약어 LP는 코퍼스에 0건이라 「spät/früh(e Position)」로 풀었다(EP·CO·BTN·UTG는 그대로).
 *   · 숫자는 de-DE(천단위 「.」·소수점 「,」·「%」 공백 없음) — §13 수치는 전부 EN과 동일.
 *   · 인용부호 „…“ · 대시 「–」(terms §7-10).
 */
export const CALC_DICT_DE: CalcDict = {
  numberLocale: "de-DE",

  seo: {
    title: "Poker-Odds-Rechner – Outs, Pot Odds, Equity, SPR & ICM",
    description:
      "Kostenloser Hold'em-Rechner: Outs & Draw-Odds, Pot Odds, Hand-Ranking, Starthand-Stärke, SPR, Turnier-M, ICM und Push/Fold-Nash-Charts – 8 Tools in einem.",
    path: "/de/calculator",
  },

  hero: {
    badges: ["Kostenloses Tool", "In Echtzeit"],
    h1: "Poker-Odds-Rechner",
    h1Sub: "Jede Hold'em-Zahl an einem Ort",
    lead: "Outs · Pot Odds · Hand-Ranking · Starthand-Stärke · SPR · Turnier-M · ICM · Nash-Push/Fold-Chart – die Mathematik, die du am Tisch brauchst, sofort.",
    chips: ["🎯 Outs", "💰 Pot Odds", "🃏 Hand-Ranking", "📊 Starthand", "📐 SPR", "🏆 M-Ratio", "📈 ICM", "⚡ Push/Fold"],
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
      { label: "Nut-Flushdraw", desc: "4 Karten einer Farbe → die 5. fehlt" },
      { label: "Open-Ended Straßendraw (OESD)", desc: "z. B. 5-6-7-8, du brauchst eine 4 oder 9" },
      { label: "Flush + Gutshot (Kombi)", desc: "9 Flush + 3 Gutshot (Überschneidung abgezogen)" },
      { label: "Gutshot", desc: "z. B. 5-6-8-9, nur eine 7 hilft" },
      { label: "Zwei Overcards", desc: "2 hohe Ränge, die nicht auf dem Board liegen × 3 pro Rang" },
      { label: "Zwei Paare → Full House", desc: "z. B. A-K auf einem A-K-x-Board → 2 Asse + 2 Könige übrig" },
      { label: "Ein Paar → Drilling", desc: "2 Karten des Rangs sind noch im Deck" },
      { label: "Flush + OESD (Monster)", desc: "9 Flush + 8 Straße (2 doppelt)" },
    ],
    outsSuffix: " ({n} Outs)",
    street: "Street",
    afterFlopBtn: "🃏 Nach dem Flop",
    afterTurnBtn: "🔄 Nach dem Turn",
    outsCount: "Anzahl Outs: {v}",
    afterFlop: "Nach dem Flop",
    afterTurn: "Nach dem Turn",
    ruleOf4: "Regel der 4",
    ruleOf2: "Regel der 2",
    chanceFlop: "Trefferchance nach dem Flop",
    chanceTurn: "Trefferchance nach dem Turn",
    exact: " (exakt)",
    ruleMental: "Regel der {n} (Kopfrechnen):",
    exactNote: "Der Wert oben ist die exakte Zahl",
    verdict: { great: "Stark 🔥", good: "Gut ✅", fair: "Mäßig ⚠️", poor: "Schwach ❌", veryPoor: "Sehr schwach 💀" },
  },

  pot: {
    potSize: "Aktuelle Potgröße",
    callAmount: "Dein Call-Betrag",
    potOddsCaption: "Pot Odds (benötigte Mindest-Equity)",
    orHigher: "oder mehr macht den Call profitabel",
    equityLabel: "Deine Hand-Equity: {v}",
    sliderGutshot: "Gutshot 8,7%",
    sliderFlush: "Flush 19%",
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
      even: { title: "Break-even (EV 0)", body: "Deine Equity {eq}% = {need} → der Call gewinnt und verliert nichts. Entscheide nach Faktoren jenseits der Pot Odds, etwa Position und Gegnertyp" },
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
    unknownDesc: "Sehr schwache Hand",
    unknownAction: "Meist folden",
    tierNames: ["🥇 Stufe 1 – Premium", "🥈 Stufe 2 – Stark", "🥉 Stufe 3 – Spielbar", "⚠️ Stufe 4 – Marginal", "🚫 Stufe 5 – Schwach"],
    recommendedAction: "Empfohlene Aktion:",
    axis: ["Premium", "Stark", "Spielbar", "Marginal", "Schwach"],
    summaryTitle: "Übersicht der Hand-Stufen",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Immer raisen" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Aus den meisten Positionen raisen" },
      { hands: "AJo KQo K10s QJs J10s 10-9s 77 A9s", action: "Aus später Position raisen" },
      { hands: "66–55 A8s–A2s KJo QJo Suited Connectors", action: "Selektiv in später Position" },
      { hands: "44–22 schwache Offsuit-Hände", action: "Meist folden" },
    ],
    hands: {
      AA: { desc: "Die beste Hand. Raise in jedem Spot", action: "Immer raisen/re-raisen (3-Bet)" },
      KK: { desc: "Nur vor einem Ass auf dem Flop in Acht nehmen", action: "Immer raisen/re-raisen" },
      QQ: { desc: "Stärker als JJ, aber nicht überbewerten", action: "Immer raisen; deep vorsichtig" },
      JJ: { desc: "Auf Overcards am Flop achten", action: "Aus jeder Position raisen" },
      "1010": { desc: "Verliert Wert, wenn Overcards floppen", action: "Mittel/spät raisen, früh Call erwägen" },
      AKs: { desc: "Die beste Draw-Hand. Bau den Pot auf", action: "Immer raisen/re-raisen" },
      AKo: { desc: "Schwächer als AKs, aber immer noch Premium", action: "Immer raisen; kann einen Re-Raise callen" },
      AQs: { desc: "Starke Hand; in Position mehr wert", action: "Aus den meisten Positionen raisen" },
      AJs: { desc: "Stark auf BTN/CO, schwach aus UTG", action: "Mittel/spät raisen, früh Call erwägen" },
      A10s: { desc: "Eines der besten Suited Aces", action: "Spät raisen, früh callen" },
      KQs: { desc: "Hoher Flush + Straßendraw-Potenzial", action: "Aus den meisten Positionen raisen" },
      KJs: { desc: "Starke Draw-Hand", action: "Spät raisen, früh callen" },
      "99": { desc: "Mittleres Paar, auf Overcard-Flops achten", action: "Meist raisen; deep vorsichtig" },
      "88": { desc: "Pocket Pair mit gutem Set-Potenzial", action: "Spät raisen, früh Call erwägen" },
      AQo: { desc: "Offsuit schwächer; Position entscheidet", action: "Aus mittlerer/später Position raisen" },
      AJo: { desc: "Früh schwach, spät stark", action: "CO/BTN raisen, früh vorsichtig" },
      KQo: { desc: "Bester Offsuit-Connector", action: "Spät raisen, früh Call/Fold" },
      K10s: { desc: "Suited König, spät stark", action: "Spät raisen, früh folden" },
      QJs: { desc: "Starke Draws in beide Richtungen", action: "Spät raisen, deep mehr wert" },
      J10s: { desc: "Einer der besten Suited Connectors", action: "Spät raisen, früh nach Pot Odds callen" },
      "109s": { desc: "Starker Suited Connector", action: "Spät raisen/callen" },
      "77": { desc: "Set-Mining-Hand, auf Overcards achten", action: "Spät raisen, früh callen" },
      A9s: { desc: "Suited Ace mit Flush-Potenzial", action: "Spät raisen" },
      "66": { desc: "Set-Mining; braucht Pot Odds", action: "Spät callen/raisen, am besten multiway" },
      "55": { desc: "Ohne Set wenig Wert", action: "Spät callen, nur Single-Raised Pots" },
      A8s: { desc: "Mittleres Suited Ace", action: "Spät spielen, früh folden" },
      A7s: { desc: "Mittleres Suited Ace", action: "Nur spät spielen" },
      A6s: { desc: "Mittleres Suited Ace", action: "Nur spät spielen" },
      A5s: { desc: "Wheel + Ass-Blocker; beliebter 3-Bet-Bluff", action: "Nur spät; Implied Odds zählen" },
      A4s: { desc: "Suited Ace mit Wheel-Draw", action: "Nur spät" },
      A3s: { desc: "Unteres Ende der Suited Aces", action: "Nur BTN/SB" },
      A2s: { desc: "Wheel + Nut-Flush, aber schwach", action: "Nur BTN" },
      KJo: { desc: "Dominations-Risiko; nur spät", action: "CO/BTN raisen, auf Re-Raise folden" },
      QJo: { desc: "Mäßig verbunden; braucht Position", action: "Nur spät" },
      "98s": { desc: "Starker Suited Connector", action: "Spät callen/raisen" },
      "87s": { desc: "Guter Suited Connector", action: "Spät callen" },
      "76s": { desc: "Suited Connector", action: "Spät nach Pot Odds callen" },
      "44": { desc: "Ohne Set fast wertlos", action: "Nur billig callen" },
      "33": { desc: "Muss set-minen; spekulativ", action: "Multiway-Pots, nur billige Calls" },
      "22": { desc: "Niedrigstes Pocket Pair", action: "Multiway-Pots, nur billige Calls" },
      K10o: { desc: "K-10 offsuit, schwach", action: "Gelegentlich vom BTN" },
      Q10o: { desc: "Offsuit, wenig verbunden", action: "Nur BTN" },
      J10o: { desc: "Ordentlich offsuit, aber verwundbar", action: "Gelegentlich vom BTN" },
      Q10s: { desc: "Starker Suited Broadway, spielt sich gut in Position", action: "Spät raisen, früh nach Pot Odds callen" },
      A10o: { desc: "Marginales Offsuit-Ass, dominationsanfällig", action: "Nur spät" },
      "65s": { desc: "Suited Connector; will Multiway/Implied Odds", action: "Spät callen" },
      "54s": { desc: "Niedriger Suited Connector; spekulativ", action: "Spät callen, billige Multiway-Pots" },
    },
  },

  spr: {
    effectiveStack: "Effektiver Stack (deiner)",
    potSize: "Aktuelle Potgröße",
    caption: "SPR (Stack-to-Pot-Ratio)",
    stackDivPot: "Stack ÷ Pot",
    zones: {
      low: {
        label: "Niedriger SPR (committed)",
        desc: "Ein großer Teil des Pots liegt schon drin. Mit Top Pair Top Kicker oder besser ist All-in eine Option – folden kann hier ein Fehler sein.",
        actions: [["TPTK+", "All-in erwägen"], ["Draws", "Pot Odds sind Pflicht"], ["Schwache Hände", "Vorsichtig folden"]],
      },
      mid: {
        label: "Mittlerer SPR (flexibel)",
        desc: "Die Zone für starke Hände wie Zwei Paare oder besser. Deinen Stack zu schützen wird jetzt wichtig.",
        actions: [["Zwei Paare+", "Value betten"], ["Ein Paar", "Nach Gefühl spielen"], ["Draws", "Risiko gegen Ertrag abwägen"]],
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
    orbitCaption: "Orbit-Kosten (Blinds pro Runde)",
    orbitFormula: "BB {bb} + SB {sb} + Ante {ante}×{players}",
    mCaption: "M-Ratio (Harringtons M)",
    zones: {
      dead: { name: "💀 Tote Zone", desc: "Du musst sofort all-in gehen. Auf eine bessere Hand zu warten ist nicht mehr drin – shove die beste Hand, die du bekommst.", action: "Jetzt all-in" },
      red: { name: "🔴 Rote Zone", desc: "Du brauchst bald ein Double-up. Spiel Push/Fold – shove deine guten Hände, fold den Rest.", action: "Push/Fold" },
      orange: { name: "🟠 Orange Zone", desc: "Dein Stack schrumpft. Verenge deine Range auf starke Hände und such nach Spots für einen Open-Shove.", action: "Enge Range" },
      yellow: { name: "🟡 Gelbe Zone", desc: "Der Druck steigt. Du musst aktiv Chips sammeln – spiel aggressiv, wenn gute Spots kommen.", action: "Aggressiv spielen" },
      green: { name: "🟢 Grüne Zone", desc: "Du hast einen komfortablen Stack. Nutze das volle Arsenal – bau deinen Stack mit Positionsspiel und Bluffs auf.", action: "Volles Arsenal" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " rechnet aus, was deine Turnierchips wirklich in Geld wert sind. Selbst der Chipleader hat einen ICM-Wert unter seinem Chipanteil, während Short Stacks mehr wert sind als ihrer. Nutze es für Call/Fold-Entscheidungen am Final Table und auf der Bubble.",
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
    th: { player: "Spieler", chips: "Chips", chipPct: "Chip %", icmValue: "ICM-Wert", icmPct: "ICM %", diff: "Diff." },
    playerCell: "{medal} S{n}",
    diffPlus: "+Diff.",
    diffPlusNote: "ICM-Wert über Chipanteil → Short-Stack-Schutzzone, Coinflips meiden",
    diffMinus: "−Diff.",
    diffMinusNote: "ICM-Wert unter Chipanteil → die Aggression des Chipleaders zahlt sich stärker aus",
    empty: "Setze Stacks und Preisgelder über null, um das ICM-Ergebnis zu sehen.",
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
      p1: ": Der SB shovt annahmegemäß entweder oder foldet. Die Ante-Einstellung addiert 0,125bb pro Spieler (entspricht einer Big Blind Ante, ≈12,5%). Die Ranges werden breiter, je kürzer die Stacks sind – und unter ~3–4bb callt der BB korrekterweise ",
      em: "weiter",
      p2: ", als der SB shovt, wegen der Pot Odds.",
    },
    mwNote: {
      strong: "{table}-max First-in-Shove-Chart",
      p1: ": Alle vor dir haben gefoldet, und du shovst oder foldest. Es ist ein ",
      strong2: "reines Chip-EV",
      p2: "-Gleichgewicht nach Nash – die Calling-Ranges der Spieler hinter dir werden gleichzeitig gelöst – mit der üblichen Näherung, dass ein gecallter Pot heads-up gegen den ersten Caller entschieden wird (Pots mit mehreren Callern werden ignoriert). Die Ranges werden breiter, je weniger Spieler hinter dir sitzen (UTG → BTN → SB), je kürzer die Stacks sind und mit Antes AN (0,125bb pro Spieler). Weil es reines Chip-EV ist, fallen die 10bb-Ranges aus früher Position (UTG/MP) enger aus als gängige Faustregeln (kleine Paare folden) – in der Praxis nach ICM und Gegnern anpassen.",
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
      keyPoint: {
        text: "Der springende Punkt: {b1} – um 6,7 Punkte. Weil der Sieg nur das Preisgeld für Platz 1 bringt, gewinnt der Leader mit einem Coinflip weniger Preisgeldwert, als der Chipstand vermuten lässt. Auf der Bubble sollte der Leader also {b2}, während der Short Stack (13,3% Chips → 16,6% ICM) mehr wert ist als seine Chips und {b3} sollte, um diesen Überlebenswert zu schützen.",
        b1: "der ICM-Wert des Chipleaders (33,3%) liegt unter seinem Chipanteil (40%)",
        b2: "Druck auf die Short Stacks machen",
        b3: "unnötige All-in-Calls vermeiden",
      },
    },
    deal: {
      badge: "Preisgeld aufteilen",
      h2: "ICM Deal vs. Chip Chop – so wird der Preispool geteilt",
      intro: "Jetzt sind noch drei Spieler übrig und reden über einen Deal. Bei Stacks von 50% / 30% / 20% und $1.500 verbleibendem Preisgeld teilen die beiden Methoden sehr unterschiedlich auf:",
      th: { player: "Spieler", chop: "Chip Chop", icm: "ICM Deal", diff: "Diff." },
      rows: [
        { player: "🥇 Chipleader (50%)", chop: "$750", icm: "$618", diff: "-$132", up: false },
        { player: "🥈 2. (30%)", chop: "$450", icm: "$485", diff: "+$35", up: true },
        { player: "🥉 Short Stack (20%)", chop: "$300", icm: "$397", diff: "+$97", up: true },
      ],
      summary: {
        text: "Ein Chip Chop teilt nach Chipanteil und {b1}; ein ICM Deal spiegelt die Platzierungswahrscheinlichkeiten wider und ist {b2}. Oben bekommt der Short Stack beim Chip Chop $300, beim ICM Deal aber rund $397 – {b3}. Verlange einen ICM Deal, wenn du kurz bist; schlag einen Chip Chop vor, wenn du der Leader bist.",
        b1: "begünstigt den Chipleader",
        b2: "fairer gegenüber Short Stacks",
        b3: "$97 mehr",
      },
    },
  },

  guide: {
    badge: "Tools",
    h2: "So nutzt du die 8 Hold'em-Rechner",
    cards: [
      { title: "Outs-Rechner", body: "Berechnet exakt, wie wahrscheinlich dein Draw am Flop oder Turn ankommt. Du siehst die Faustregel der 4 und 2 und die exakte Zahl auf einen Blick." },
      { title: "Pot Odds & Implied Odds", body: "Entscheide Call oder Fold mit Mathematik. Ist dein Gegner deep, rechne Implied Odds dazu – für eine genauere Entscheidung." },
      { title: "Hand-Ranking", body: "Wähle Karten und prüfe den Rang der Hand. Bis zu 7 Karten eingeben – die beste 5-Karten-Kombination wird automatisch gefunden." },
      { title: "Starthand-Stärke", body: "Wähle deine zwei Hole Cards und sieh, welche der 169 Hände es ist und welche Aktion je Position empfohlen wird." },
      { title: "SPR (Stack-to-Pot-Ratio)", body: "Das Verhältnis von Stack zu Pot sagt dir, wie stark deine Hand sein muss. Je niedriger der SPR, desto eher lohnt es sich, mit einer starken Hand zu committen." },
      { title: "Turnier-M", body: "Harringtons M misst den Druck auf deinen Turnierstack. Zwischen grüner, gelber, oranger, roter und toter Zone ändert sich deine Strategie komplett." },
      { title: "ICM-Rechner", body: "Das Independent Chip Model rechnet Turnierchips in echten Preisgeldwert um – unverzichtbar für Call/Fold-Entscheidungen und Deal-Gespräche auf der Bubble und am Final Table." },
      { title: "Nash-Push/Fold-Chart", body: "Ein 13×13-Heads-up-Chart aus dem Nash-Gleichgewicht: welche Hände du bei 1–25bb open-shovst und welche du callst. Pflicht für die späte Turnierphase." },
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
    links: [
      { slug: "holdem-tournament", title: "Wie funktioniert ein Pokerturnier?", desc: "Buy-in, Blinds, Bubble und Final Table" },
      { slug: "holdem-equity", title: "Equity im Poker erklärt", desc: "Win%, Fold Equity und Realization" },
      { slug: "holdem-pot-odds", title: "Pot Odds berechnen", desc: "Call/Fold-Spots in Mathematik verwandeln" },
      { slug: "holdem-outs", title: "Outs zählen im Poker", desc: "Outs je Draw und die Regel der 4 und 2" },
      { slug: "holdem-probability", title: "Poker Wahrscheinlichkeiten Tabelle", desc: "Die Kernzahlen hinter jeder Hand" },
      { slug: "holdem-starting-hands-chart", title: "Poker Starthände Chart", desc: "Welche Hände du aus welcher Position spielst" },
    ],
  },
};
