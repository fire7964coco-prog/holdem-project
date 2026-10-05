/**
 * `/de/hand-chart` FAQ — 화면(`<details>`)과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-05 회차 1 신설. 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «Typ 42% vs Combo 35,4%» 판).
 */
export const HAND_CHART_FAQ_DE: { q: string; a: string }[] = [
  {
    q: "Muss ich mich exakt an die Starthände-Tabelle halten?",
    a: "Die Tabelle ist ein Ausgangspunkt. Am 6-Max-Tisch spielst du jede Position ein bis zwei Plätze lockerer als am 9-Max-Tisch. Mit Antes erweiterst du die gesamte Range um 5–8%. An Tischen mit vielen schwachen Spielern ist es oft profitabler, enger zu spielen und den Value zu maximieren.",
  },
  {
    q: "Gibt es wirklich genau 169 Starthände?",
    a: "Ja. Ohne Farben zu unterscheiden gibt es genau 169 Handtypen: 13 Pocket Pairs, 78 suited Hände und 78 Offsuit-Hände. Im echten Deck sind es insgesamt 1.326 Kombinationen (Combos).",
  },
  {
    q: "Warum fehlt der Big Blind in der Tabelle?",
    a: "Der BB hat bereits 1 Big Blind investiert und spielt deshalb keine Open-Raises, sondern „Verteidigung“ (Call oder Re-Raise). Eine BB-Defense-Range hängt komplett von der Position und der Raise-Größe des Openers ab und braucht ein eigenes Chart.",
  },
  {
    q: "Ist es okay, am Button 42% der Hände zu öffnen?",
    a: "Zuerst muss die Bezugsgröße stimmen. Die 42% dieser Tabelle sind der Anteil an den 169 Handtypen, die 40–50% am Button aus GTO-Quellen dagegen der Anteil an 1.326 Combos. In Combos umgerechnet liegt die Button-Range dieser Tabelle bei 35,4% – also sogar enger als dieser GTO-Bereich. 42% sind also nicht zu weit; gegen tighte oder unerfahrene Gegner ist es in der Praxis aber oft profitabler, sich stärker auf Premium-Hände zu konzentrieren. Die Tabelle ist eine ausgewogene Grundlinie.",
  },
  {
    q: "Was mache ich, wenn ich eine 3-Bet bekomme?",
    a: "Deine Open-Range und deine Range gegen eine 3-Bet sind nicht dieselbe. In der Regel antwortest du auf eine 3-Bet mit Premium-Händen wie AA–JJ und AKs–AQs plus einigen Bluffs – suited Wheel-Assen wie A5s und A4s, die AA/AK blocken und den Nut Flush machen können. Den Rest foldest du.",
  },
];
