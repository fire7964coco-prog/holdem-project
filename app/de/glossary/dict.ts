// /de/glossary — Poker-Begriffe-Lexikon (도구 확장 회차 2 · 2026-10-05)
//
// 정의 출처: 글 축어 38개 · 번역 8개(Board · Flop · Offsuit · Outs · Preflop · River · SPR · Turn)
// - 축어 = lib/posts-de/holdem-glossary.ts 표·짧은 답 문안(1~3문장 잘라 씀 · 한정어 보존).
//   Bluff = 표의 «Bluff / Semi-Bluff» 행 앞절, Semi-Bluff = 같은 행 전체.
//   Position = 짧은 답 첫 문장 + «In / Out of Position» 행.
// - 번역 = EN desc를 de 코퍼스 표기(Community Cards · Setzrunde · Flushdraw · Open-Ender · Made Hand)로.
//   Flop/Turn/River는 글에서 한 행(«Flop / Turn / River»)으로 묶여 있어 분리 축어가 불가 → 번역.
// - EN 용어 수 = 46(glossary-data.ts 실측). 같은 순서·같은 cat.
//
// seo.title 근거(DataForSEO google_ads search_volume · DE/de · 2026-10-05 1회):
//   poker begriffe 260 · pokerbegriffe 260 · poker begriffe erklärt 40 · poker glossar 10 · poker lexikon 10
//   → 헤드텀 «Poker-Begriffe». 글 seoTitle(«Von den Nuts bis zum Fish – Poker-Begriffe erklärt»)과 다른 문장.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_DE: GlossaryDict = {
  sortLocale: "de-DE",
  grouping: "letter",
  seo: {
    title: "Poker-Begriffe von A bis Z — Texas-Hold'em-Lexikon",
    description:
      "Poker-Begriffe zum Nachschlagen: Nuts, Outs, Pot Odds, 3-Bet, C-Bet, ICM, SPR, Kicker, Tilt und mehr. Durchsuche oder filtere 45+ Texas-Hold'em-Begriffe.",
    keywords:
      "poker begriffe, pokerbegriffe, poker begriffe erklärt, poker glossar, poker lexikon, texas holdem begriffe, was sind nuts poker, outs poker, pot odds, 3-bet bedeutung",
    path: "/de/glossary",
  },
  hero: {
    badge: "♠ {n} Begriffe · durchsuchbar von A bis Z",
    h1: "Poker-Begriffe",
    leadBefore: "Jeder Texas-Hold'em-Begriff, den du am Tisch hörst – ",
    leadStrong: "Nuts, Outs, Pot Odds, 3-Bet, ICM",
    leadAfter: " und mehr – klar und korrekt erklärt. Suche oder filtere nach Kategorie.",
  },
  searchPlaceholder: "Begriff suchen (z. B. Nuts, Pot Odds, Outs)...",
  allLabel: "Alle",
  cats: { Action: "Aktionen", Hand: "Hände", Position: "Position", Math: "Mathe", Board: "Board", Slang: "Slang" },
  empty: { title: "Keine Begriffe für „{q}“ gefunden.", hint: "Versuch ein anderes Stichwort oder eine andere Kategorie." },
  related: {
    ariaLabel: "Weiterführende Guides",
    heading: "Weiterlernen",
    items: [
      { href: "/de/blog/texas-holdem-rules-for-beginners", label: "Die Regeln", desc: "Blinds, Showdown, die Grundlagen" },
      { href: "/de/blog/holdem-hand-rankings", label: "Hand-Rankings", desc: "Alle 10 Hände in Reihenfolge" },
      { href: "/de/blog/holdem-strategy", label: "Strategie", desc: "Position, Pot Odds, Bluffen" },
      { href: "/de/hand-chart", label: "Starthände", desc: "Opening-Ranges nach Position" },
      { href: "/de/calculator", label: "Rechner", desc: "Odds, Pot Odds, ICM" },
    ],
  },
  terms: [
    { term: "3-Bet", cat: "Action", desc: "Der Re-Raise nach einem Open (die dritte Bet, wenn man die Blinds als erste zählt). Die Blinds sind Bet 1, der Open-Raise ist Bet 2, also ist der Re-Raise die 3-Bet (nicht der erste Raise)." },
    { term: "All-in", cat: "Action", desc: "Alle deine Chips einsetzen; du kannst nur den Teil des Pots gewinnen, den du gedeckt hast.", aka: ["Jam", "Shove"] },
    { term: "Ante", cat: "Action", desc: "Ein kleiner Pflichteinsatz, um den Pot zu füttern, getrennt von den Blinds – im modernen Turnier meist als Big Blind Ante von einem einzigen Spieler gezahlt." },
    { term: "Backdoor", cat: "Board", desc: "Ein Draw, der zwei aufeinanderfolgende Karten braucht (Turn und River)." },
    { term: "Bad Beat", cat: "Slang", desc: "Als großer Favorit gegen einen Glücksdraw verlieren." },
    { term: "Bankroll", cat: "Slang", desc: "Das Geld, das insgesamt fürs Poker beiseitegelegt ist – nicht die Chips auf dem Tisch." },
    { term: "Blinds", cat: "Action", desc: "Die Pflichteinsätze von SB und BB, die die Action starten – auch der Name für Stake-Level.", aka: ["Small Blind", "Big Blind"] },
    { term: "Bluff", cat: "Action", desc: "Ein Bluff bettet eine schwache Hand, um bessere zum Folden zu bewegen.", aka: ["bluffen"] },
    { term: "Board", cat: "Board", desc: "Die Community Cards in der Mitte des Tisches. Ein „nasses“ Board ist drawlastig und gefährlich; ein „trockenes“ Board bietet wenige Draws.", aka: ["Community Cards", "Gemeinschaftskarten"] },
    { term: "Button (BTN)", cat: "Position", desc: "Die Dealer-Position; handelt postflop zuletzt – der beste Platz am Tisch.", aka: ["Button", "Dealer-Button"] },
    { term: "Call", cat: "Action", desc: "Die aktuelle Bet ausgleichen, um in der Hand zu bleiben.", aka: ["callen", "mitgehen"] },
    { term: "Check", cat: "Action", desc: "Die Aktion weitergeben, ohne zu setzen – nur möglich, wenn du keinen Einsatz mehr ausgleichen musst.", aka: ["checken", "schieben"] },
    { term: "Check-Raise", cat: "Action", desc: "Checken, dann raisen, nachdem ein Gegner bettet – eine starke, täuschende Linie (in modernen Cardrooms erlaubt)." },
    { term: "Continuation Bet (C-Bet)", cat: "Action", desc: "Eine „Continuation Bet“ auf dem Flop vom Spieler, der preflop geraist hat.", aka: ["C-Bet", "Cbet"] },
    { term: "Cooler", cat: "Slang", desc: "Eine große Hand, die ohne Fehlspiel gegen eine noch größere verliert." },
    { term: "Draw", cat: "Hand", desc: "Eine Hand, die sich verbessern muss – z. B. ein Flushdraw (vier Karten zum Flush) oder ein Straßendraw.", aka: ["Flushdraw", "Straßendraw"] },
    { term: "Equity", cat: "Math", desc: "Dein prozentualer Anteil am Pot gerade jetzt, gemessen an deiner Gewinnwahrscheinlichkeit." },
    { term: "Flop", cat: "Board", desc: "Die ersten drei Community Cards, gleichzeitig ausgeteilt, gefolgt von der zweiten Setzrunde." },
    { term: "Fold", cat: "Action", desc: "Deine Hand und jeden Anspruch auf den Pot aufgeben.", aka: ["folden", "aussteigen", "Muck"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal – eine ausbalancierte, unausbeutbare Strategie aus Solvern.", aka: ["Game Theory Optimal"] },
    { term: "Gutshot", cat: "Hand", desc: "Ein Straßendraw mit einer Lücke in der Mitte, der genau einen Rang braucht (4 Outs).", aka: ["Inside Straight Draw"] },
    { term: "Range", cat: "Math", desc: "Die gesamte Menge an Händen, die ein Spieler in einem Spot halten kann; Profis denken in Ranges, nicht in einzelnen Händen.", aka: ["Hand Range", "Handrange"] },
    { term: "ICM", cat: "Math", desc: "Das Independent Chip Model – rechnet Turnier-Chips nahe den Pay-Jumps in echte Geld-Equity um.", aka: ["Independent Chip Model"] },
    { term: "Kicker", cat: "Hand", desc: "Eine Beikarte, die Gleichstände zwischen ansonsten gleichen Händen bricht.", aka: ["Beikarte"] },
    { term: "Limp", cat: "Action", desc: "Preflop einsteigen, indem du nur den Big Blind callst statt zu raisen – meist ein schwaches, passives Spiel.", aka: ["limpen"] },
    { term: "Nuts", cat: "Hand", desc: "Die bestmögliche Hand auf dem aktuellen Board (kann sich auf späteren Streets ändern).", aka: ["The Nuts"] },
    { term: "Offsuit", cat: "Hand", desc: "Zwei Karten unterschiedlicher Farbe (z. B. A♠K♦). Etwas schwächer als die suited Version derselben Hand, weil sie viel seltener einen Flush macht.", aka: ["off"] },
    { term: "Outs", cat: "Math", desc: "Die Karten, die noch im Deck sind und dich zur Gewinnerhand verbessern. Ein Flushdraw hat 9 Outs, ein Open-Ender hat 8." },
    { term: "Overpair", cat: "Hand", desc: "Ein Pocket Pair, das höher ist als jede Karte auf dem Board." },
    { term: "Position", cat: "Position", desc: "Die Position sagt, wann du an der Reihe bist. Du bist in Position, wenn du nach deinem Gegner handelst, out of Position, wenn du zuerst handelst.", aka: ["In Position", "Out of Position"] },
    { term: "Pot", cat: "Board", desc: "Die gesamten Chips, um die gespielt wird." },
    { term: "Pot Odds", cat: "Math", desc: "Das Verhältnis des Pots zu den Kosten eines Calls.", aka: ["Potodds"] },
    { term: "Preflop", cat: "Board", desc: "Die erste Setzrunde, bevor Community Cards liegen – jeder Spieler hat nur seine zwei Hole Cards.", aka: ["Pre-Flop"] },
    { term: "Rake", cat: "Slang", desc: "Der Anteil des Hauses an den meisten Pots." },
    { term: "Raise", cat: "Action", desc: "Die aktuelle Bet erhöhen und andere zwingen, mehr mitzugehen oder zu folden.", aka: ["raisen", "erhöhen"] },
    { term: "River", cat: "Board", desc: "Die fünfte und letzte Community Card, gefolgt von der letzten Setzrunde vor dem Showdown." },
    { term: "Semi-Bluff", cat: "Action", desc: "Ein Bluff bettet eine schwache Hand, um bessere zum Folden zu bewegen; ein Semi-Bluff tut das mit einem Draw, der sich noch verbessern kann." },
    { term: "Set", cat: "Hand", desc: "Ein Drilling aus einem Pocket Pair + einer Board-Karte (gut getarnt).", aka: ["Drilling"] },
    { term: "Showdown", cat: "Board", desc: "Die Hände nach der letzten Bet aufdecken, um den Gewinner zu ermitteln." },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio – effektiver Stack ÷ Pot. Ein niedriger SPR spricht dafür, sich mit starken Made Hands festzulegen; ein hoher SPR belohnt Draws und Postflop-Können.", aka: ["Stack-to-Pot Ratio"] },
    { term: "Stack", cat: "Slang", desc: "Die Chips vor einem Spieler." },
    { term: "Tilt", cat: "Slang", desc: "Emotional getriebenes schlechtes Spiel, meist nach einem Verlust." },
    { term: "Trips", cat: "Hand", desc: "Ein Drilling aus einer Hole Card + einem Paar auf dem Board (schwächere Kicker-Kontrolle).", aka: ["Drilling"] },
    { term: "Turn", cat: "Board", desc: "Die vierte Community Card, nach dem Flop ausgeteilt, gefolgt von einer eigenen Setzrunde." },
    { term: "Value Bet", cat: "Action", desc: "Eine Bet mit einer starken Hand in der Hoffnung, von einer schwächeren gecallt zu werden.", aka: ["Valuebet"] },
    { term: "Wheel", cat: "Hand", desc: "Die A-2-3-4-5-Straße, die niedrigste Straße (das Ass spielt tief).", aka: ["The Wheel"] },
  ],
};
