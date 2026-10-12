"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 독일어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 키·분기·숫자는 EN과 1:1, 문장만 독일어로 재저작.
 * 용어 출처 = `docs/translation-terms-de.md`(du체 §4 · 족보 §1 · 숫자 §3 · „…“/– §7-10)
 *   → `app/de/calculator/dict.ts`(Equity·Pot Odds·Outs·Flushdraw·Straßendraw·Drilling·Vierling) → de 코퍼스.
 * 헤드텀 실측(DataForSEO Google Ads search_volume live · DE/de · 2026-10-12):
 *   poker simulator 390 · poker trainer 140 · poker training 140 · poker equity 70 ·
 *   poker simulator kostenlos 20 · poker gewinnwahrscheinlichkeit 10 · pot odds trainer 10 · poker equity simulator (데이터 없음)
 *   → 제목 머리 = 「Poker-Simulator」(계산기 헤드텀 「Poker-Rechner」와 분리).
 * 숫자: 천단위 마침표·소수점 콤마(terms §3) — 문자열로 넘어오는 소수(gap·err·avgErr)는 표시만 콤마로 바꾼다(값 불변).
 */

const DE_NAMES: HandNames = {
  categories: ["High Card", "Paar", "Zwei Paare", "Drilling", "Straße", "Flush", "Full House", "Vierling", "Straight Flush"],
  drawingDead: "Drawing Dead",
  flushDraw: "Flushdraw",
  straightDraw: "Straßendraw",
};

/** 표시용 — 천단위 마침표 */
const n = (x: number) => x.toLocaleString("de-DE");
/** 표시용 — 소수점 콤마 («—» 등은 그대로) */
const dez = (s: string) => s.replace(".", ",");

const DE_UI: QuizUI = {
  names: DE_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Du",
  folded: "Gefoldet",
  raise: "Raise",
  call: "Call",
  check: "Check",
  tableNote: "6-max- oder 9er-Tisch · wähle, wie viele Spieler den Flop sehen (2–6)",
  playersBtn: (k) => `${k} Spieler`,
  playersLabel: "Spieler",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Gegnertyp",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Aggro" },
  loading: "Mischen und durchrechnen …",

  myEquity: "Deine Equity",
  vsOpponents: (k) => (k === 0 ? "niemand mehr im Pot" : `gegen ${k} Gegner`),
  basisSeat: "gegen positionsbasierte Ranges",
  basisRange: "gegen Hände, die zu den Aktionen passen",
  roleOpen: "Opener",
  roleDefend: "Defend",
  winShort: "Win",
  tieShort: "Split",
  loseShort: "Lose",
  revealedLabel: "👀 Gegen die aufgedeckten Hände",
  revealedNote: (gap) =>
    `Die Zahl oben geht davon aus, dass du ihre Karten nicht siehst – deshalb liegen beide Zahlen ${dez(gap)} Prozentpunkte auseinander. Entscheiden würdest du am Tisch nach der oberen Zahl.`,

  potOddsTitle: "Pot Odds – so viel Equity braucht ein Call, um break-even zu sein",
  potLabel: "Pot",
  potBeforeLabel: "Pot (vor dem Einsatz)",
  toCallLabel: "Zu callen",
  requiredLabel: "Benötigte Equity",
  noBet: "Niemand hat gesetzt. Du siehst die nächste Karte gratis.",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "Wenn du beim Treffer aber noch mehr gewinnen kannst (Implied Odds), kann ein Call trotzdem richtig sein.",

  revealBtn: (next) => `${next} aufdecken →`,
  newHandBtn: "Neue Hand austeilen 🔄",
  showCards: "👀 Gegnerkarten ansehen",
  hideCards: "🙈 Gegnerkarten verdecken",

  wonByFold: (pot) => `Alle haben gefoldet – du gewinnst den Pot von ${n(pot)}`,
  splitLabel: (names) => `Split Pot – ${names.join(" · ")} teilen sich den Pot`,
  winLabel: (name, cat) => `${name} gewinnt · ${cat}`,

  reviewTitle: "📋 Analyse – wo hättest du folden sollen?",
  reviewCols: ["Street", "Deine Equity", "Benötigt", "Entscheidung"],
  reviewNoMistake: "✅ Callen war bis zum Schluss richtig.",
  reviewMistake: (street) => `⚠️ Schon am ${street} war Folden richtig. Da hättest du aussteigen sollen.`,
  reviewInvested: (invested, pot) => `Dein Einsatz ${n(invested)} · Pot am Ende ${n(pot)}`,

  formulaTitle: "📐 Woher diese Zahl kommt",
  outsLabel: (k) =>
    k > 1 ? `${k} Karten vervollständigen oder verbessern deine Hand` : `${k} Karte vervollständigt oder verbessert deine Hand`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} für den Flush` : "",
      o.straight > 0 ? `${o.straight} für die Straße` : "",
      o.set > 0 ? `${o.set} für Set oder Drilling` : "",
      o.twoPair > 0 ? `${o.twoPair} für Zwei Paare` : "",
      o.over > 0 ? `${o.over} für ein Paar mit einer Overcard` : "",
      both > 0 ? `${both} davon zählen für zwei Wege (nur einmal gezählt)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Chance, dass eine dieser Karten kommt (Faustregel)",
  winLabel2: "Chance, dass du den Pot gewinnst (simuliert)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Die beiden Zahlen messen Verschiedenes: oben die Chance, dass du TRIFFST, unten die Chance, dass du GEWINNST. Du kannst treffen und trotzdem verlieren, wenn sich ein Gegner noch stärker verbessert – und du kannst danebenliegen und trotzdem gewinnen. Das Urteil richtet sich nach der unteren Zahl.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Wir sind noch preflop, deshalb greift die Faustregel „Outs × 2/4“ noch nicht. Die Equity oben stammt aus ${k.replace(/,/g, ".")} durchgespielten Händen gegen die Hände, mit denen jeder Gegner von seiner Position aus plausibel in den Pot gehen würde.`
      : `Du hast weder Flushdraw noch Straßendraw und keine Karte, die dich eine Handkategorie höher zu Set, Zwei Paaren oder einem Overcard-Paar bringt – deshalb greift die Faustregel „Outs × 2/4“ hier nicht. Die Equity oben stammt aus ${k.replace(/,/g, ".")} durchgespielten Händen gegen jede Hand, die zu den gesehenen Aktionen passt.`,
  chartTitle: "📈 Equity Street für Street – alle Karten offen",
  resultTabs: ["📋 Analyse", "📈 Verlauf", "🃏 Odds"],
  solverTitle: "Diese Situation im GTO-Solver ansehen",
  solverOpen: "„Flops studieren“ im Solver öffnen",
  solverNote: (info) => {
    const gto = "Dort siehst du die Flop-Strategie, wenn beide Spieler GTO spielen (vorberechnete Ergebnisse · 6-max 100bb · nur Flop) – Ranges, Bet-Größen und Gegnerregeln unterscheiden sich also von diesem Simulator.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} Open · ${info.caller} Call · Flop ${info.flop.map((c) => c.rank + c.suit).join("")} – öffnet dieselben Positionen und denselben Flop unter „Flops studieren“ im Solver. ${gto}`
          : `${info.opener} Open · ${info.caller} Call – diese Hand endete vor dem Flop, deshalb öffnet sich nur das Positions-Duell. Wähle die drei Flop-Karten im Solver selbst. ${gto}`;
      case "notReady":
        return `${info.opener} Open · ${info.caller} Call ist unter „Flops studieren“ im Solver noch nicht vorberechnet. Wähle ein benachbartes Positions-Duell oder rechne die Situation im Solver selbst.`;
      case "multiway":
        return `${info.players} Spieler haben diesen Flop gesehen. Die vorberechneten Ergebnisse des Solvers decken nur Heads-up-Pots ab, deshalb lässt sich diese Hand nicht direkt öffnen – wähle unter „Flops studieren“ ein Duell gegen einen Gegner.`;
      case "table9":
        return "Die vorberechneten Ergebnisse des Solvers gelten für 6-max-Tische, deshalb lässt sich eine Hand vom 9er-Tisch nicht direkt öffnen – wähle unter „Flops studieren“ das nächstliegende Positions-Duell.";
    }
  },
  solverLang: "de",
  chartRangeLegend: "Was du gesehen hast",
  chartNote: "Die durchgezogenen Linien zeigen die Equity jeder Position mit allen Händen offen; die gestrichelte Linie ist die Equity, die du auf dem Bildschirm ohne Kenntnis der Gegnerkarten gesehen hast. Bei einem Spieler, der foldet, endet die Linie in der Setzrunde vor dem Fold.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Wie hoch ist deine Equity?",
  quizGuessHint: "Stell deinen Tipp mit dem Schieberegler ein",
  quizSubmit: "Auflösen",
  quizCallSubmit: "Call → auflösen",
  quizFoldSubmit: "Fold → auflösen",
  quizResult: (guess, err, points) => `Dein Tipp ${guess}% · ${dez(err)} Pp. daneben · ${points} Punkte`,
  quizChoiceResult: (ok, verdict) => (ok ? `Richtig entschieden (${verdict})` : `Falsch – richtig wäre ${verdict} gewesen`),
  quizStats: (s) =>
    `${s.hands} ${s.hands === 1 ? "Hand" : "Hände"} · Ø ${dez(s.avgErr)} Pp. daneben · ${s.hits}/${s.decisions} richtig · ${n(s.points)} Punkte`,
  quizReset: "Zurücksetzen",
  quizResetConfirm: "Die in diesem Browser gespeicherte Quiz-Statistik löschen? Das lässt sich nicht rückgängig machen.",
  quizInvite: "Melde dich an, um die Statistik in deinem Konto zu speichern und auf jedem Handy oder PC zu sehen.",
  quizInviteLink: "Anmelden",
  quizGuessCol: "Tipp",
  quizChoiceCol: "Wahl",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Diese Hand: Ø Abweichung ${dez(avgErr)} Pp.${decisions > 0 ? ` · ${hits}/${decisions} Entscheidungen richtig` : ""} · ${points} Punkte`,
  quizGuessLegend: "Dein Tipp",
  customToggle: "✍️ Hand eingeben",
  customTitle: "Hand eingeben – spiel eine eigene Hand nach",
  customHint: "Tippe auf ein Feld und wähle unten eine Karte. Leere Felder werden zufällig ausgeteilt, und die Gegner bekommen weiterhin Hände aus ihren Positions-Ranges.",
  customPos: "Deine Position",
  customRandom: "Zufällig",
  customHero: "Deine Hand",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Diese Hand austeilen →",
  customClear: "Alles löschen",
  customClose: "Schließen",
  customOff: "Zurück zu Zufallshänden",
  customActive: "Deine eingegebene Hand · neue Hände behalten die gewählten Karten",
  customEdit: "Bearbeiten",

  ruleTitle: "Welche Annahmen dieser Simulator trifft",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Die Gegner folgen ausschließlich den Regeln unten.</b> Echte Spieler spielen nie
        so – Position, Gegner, Stacktiefe und Tisch-Image ändern alles. Betrachte es wie die Annahme
        „ohne Reibung“ in einer Physikaufgabe.
      </p>
      <p className="mb-1">
        Aktueller Gegnertyp: <b className="text-foreground">{DE_UI.styleNames[style]}</b> (der ganze Tisch spielt denselben Stil · änderbar in der Auswahl oben)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Zwei Paare oder besser → <b className="text-foreground">{style === "aggressive" ? "Raise auf 150% des Pots (Overbet)" : "Raise in Pot-Größe"}</b></li>
        {style === "standard" && <li>Ein Paar oder ein Flush-/Straßendraw → <b className="text-foreground">Bet in Höhe des halben Pots</b></li>}
        {style === "tight" && <>
          <li>Top Pair oder besser mit einer Hole Card (Overpairs eingeschlossen) oder ein Flush-/Straßendraw → <b className="text-foreground">Bet in Höhe des halben Pots</b></li>
          <li>Jedes schwächere Paar (auch ein Paar, das nur auf dem Board liegt) → <b className="text-foreground">Fold</b></li>
        </>}
        {style === "loose" && <li>Ein Paar, ein Flush-/Straßendraw oder eine Hole Card, die höher ist als jede Board-Karte (Overcard) → <b className="text-foreground">Bet in Höhe des halben Pots</b></li>}
        {style === "aggressive" && <>
          <li>Flush-/Straßendraw → <b className="text-foreground">Raise (Semi-Bluff)</b></li>
          <li>Ein Paar → <b className="text-foreground">Bet in Höhe des halben Pots</b></li>
          <li>Kein Paar und kein Draw, aber eine Overcard → <b className="text-foreground">Raise (Bluff)</b></li>
        </>}
        <li>Alles andere → <b className="text-foreground">Fold</b> (Karten in den Muck, wie live)</li>
      </ul>
      <p className="mb-2">
        {style === "aggressive" && "Jeder Raise im aggressiven Stil – Semi-Bluffs und Bluffs eingeschlossen – beträgt 150% des Pots. "}
        Wenn jemand raist, callen alle noch beteiligten Spieler diesen Raise, und ein Einsatz über dem restlichen
        Stack wird als All-in gedeckelt. Check-Raises gibt es nicht – du setzt hier nie selbst, du callst einfach bis zum River.
        Die Preflop-Ranges (unten) sind bei jedem Stil gleich.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Deine Equity wird so berechnet, als würdest du die Gegnerkarten nicht sehen.</b> Ab
        dem Flop besteht die Range jedes Gegners aus den Händen seiner positionsbasierten Preflop-Range (unten), die
        nach den Regeln des gewählten Stils genau die gesehenen Aktionen gemacht hätten – gegen normale Gegner bleiben nach
        einem Raise nur Zwei Paare oder besser übrig, gegen aggressive Gegner auch Draws und Overcard-Bluffs. Spieler, die
        auf dem Bildschirm folden, fallen auch aus der Rechnung.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Die Preflop-Hände der Gegner stammen aus positionsbasierten Ranges.</b> Von den
        Spielern im Pot gilt derjenige, der preflop zuerst handelt, als Opener; alle anderen gelten als Spieler, die dieses
        Open mit einem Call oder einer 3-Bet verteidigt haben (Opening-Range · Verteidigungs-Range). Die Ranges sind
        Konsens-Ranges für 6-max-Cashgames mit 100bb, abgeglichen über mehrere öffentliche Quellen; Grenzhände werden zu
        25/50/75% gemischt. Wo es keinen Chart gibt (HJ gegen ein UTG-Open · SB gegen ein Open von UTG, HJ oder CO) und ab dem
        dritten Spieler springt der nächstliegende Verteidigungs-Chart ein. Für 9er-Tische gibt es keine Charts, deshalb
        nutzen am 9-max-Tisch UTG, UTG+1, UTG+2 und LJ den 6-max-UTG-Chart und alle anderen Positionen den 6-max-Chart mit
        demselben Namen (verteidigt eine frühe Position das Open einer anderen frühen Position oder verteidigt der HJ es, gilt
        der Chart CO gegen UTG) – die ersten drei Positionen eines 9er-Tischs fallen dadurch breiter aus, als sie in Wirklichkeit sind. Zufällig ist nur deine eigene Hand (außer du gibst sie selbst ein) – mit dem Tool kannst
        du jede beliebige Starthand bis zum River spielen. Eine 3-Bet ändert hier die Pot-Größe nicht (vereinfacht).
      </p>
      <p className="mb-2">
        <b className="text-foreground">Das Urteil beruht allein auf den Pot Odds.</b> Implied Odds fließen nicht ein, und
        Gegnertendenzen und Bluffs stecken nur so weit in den Ranges, wie es die Regeln des gewählten Stils vorsehen. Gerade
        Draws rechtfertigen oft einen Call, auch wenn die reinen Pot Odds knapp nicht reichen.
      </p>
      <p>
        Jeder zahlt eine Ante von {ANTE} und startet mit einem Stack von {n(STACK)}. Du foldest nie – genau darum geht es,
        damit du den River siehst und die Hand analysieren kannst. Die Equity ist ein simulierter Schätzwert mit fester
        Stichprobengröße:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} Durchläufe</b> preflop und{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} Durchläufe</b> ab dem Flop (Standardfehler etwa 0,25–0,35 Prozentpunkte).
        Jede Hand nutzt einen festen Zufalls-Seed, deshalb zeigt dieselbe Hand auf jedem Gerät dieselben Zahlen. Bei Gleichstand
        wird der Pot durch die Zahl der beteiligten Spieler geteilt (bei zwei Spielern je die Hälfte).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Wenn du die Gegnerkarten aufdeckst</b>, bekommt jede Position ihre Equity mit allen
        bekannten Händen. Ab dem Flop wird dabei jede verbleibende Karte exakt durchgezählt (nur preflop sind es{" "}
        {n(SAMPLES.known)} simulierte Durchläufe), und diese Zahl fließt nie in die angezeigte Equity oder das
        Call/Fold-Urteil ein – an einem echten Tisch hättest du diese Information nicht.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Mit eingeschaltetem Quiz</b> bleiben Equity und Urteil in jeder Setzrunde verborgen,
        bis du deine Equity schätzt. In Setzrunden, in denen jemand setzt, wählst du außerdem Call oder Fold. Die Lösung ist
        „Deine Equity“ oben (die Zahl ohne Kenntnis der Gegnerkarten), und jeder Tipp bringt{" "}
        <b className="text-foreground">100 − 4 × Abweichung (Prozentpunkte)</b> Punkte (null ab 25 Prozentpunkten Abweichung).
        Eine Call/Fold-Wahl gilt als richtig, wenn sie dem Pot-Odds-Urteil entspricht. Deine Gesamtstatistik bleibt in
        diesem Browser gespeichert; wenn du angemeldet bist, wird sie zusätzlich in deinem Konto gesichert und begleitet
        dich auf andere Geräte (Karten und Board werden nicht gespeichert).
      </p>
      <p className="mt-2">
        Mit <b className="text-foreground">✍️ Hand eingeben</b> wählst du deine Position, deine Hole Cards und das Board, um
        eine tatsächlich gespielte Hand nachzuspielen. Leere Felder werden zufällig ausgeteilt. Die Karten der Gegner kannst
        du nicht wählen – an einem echten Tisch kennst du sie auch nicht –, deshalb stammen sie weiterhin aus den
        positionsbasierten Ranges, und die angezeigte Equity behält dieselbe Annahme „Karten unbekannt“. Auch wenn das Board
        vorab festgelegt ist, nutzt die Equity jeder Setzrunde nur die bis dahin ausgeteilten Karten. Weil man sich beim
        Nachspielen derselben Hand die Lösungen merken könnte, zählen eingegebene Hände nicht zur Quiz-Statistik.
      </p>
    </>
  ),
  footer: (
    <>
      Die Mathematik dahinter?{" "}
      <a href="/de/blog/holdem-pot-odds" className="text-primary underline">Pot Odds berechnen →</a>
      {" · "}
      <a href="/de/blog/holdem-position-play" className="text-primary underline">Warum Position zählt</a>
      {" · "}
      <a href="/de/calculator" className="text-primary underline">Poker-Rechner</a>
    </>
  ),
};

export default function WinRateQuizClientDe() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Poker-Simulator 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Spiel blind – und finde heraus, wo du hättest folden sollen</p>
      </div>
      <WinRateSimulator ui={DE_UI} />
    </div>
  );
}
