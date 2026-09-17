// `/de/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 컴포넌트(화면)가 같은 배열을 쓴다.
// ★2026-09-17 신설. EN 8문항(`app/en/calculator/faq.ts`)의 재저작 — 수치는 전부 EN과 동일(§13):
// 35% · 19,6% · 23,1% · 3.000 ÷ 13.000 · $397 vs $300 · 33,3% · 16,6% · 13,3% · 40% · 6,7 Punkte.
// 통화 $ 유지 = terms-de §3-A 기준 3(추상·토너먼트 예시 · `holdem-icm.ts`와 동일) · 숫자는 de-DE 포맷.
// 문항 주형 「Wie berechne ich …?」「Was ist … im Poker?」 = terms-de §7-6.
export const CALCULATOR_FAQ_DE: { q: string; a: string }[] = [
  {
    q: "Wie benutze ich den ICM-Rechner?",
    a: "Gib die Anzahl der Spieler, den Chipstack jedes Spielers und die Auszahlungsstruktur (Platz 1–6) ein. Der Rechner zeigt sofort, wie viel jeder Stack tatsächlich in Preisgeld wert ist – nutze das für Call/Fold-Entscheidungen und Deal-Verhandlungen auf der Bubble und am Final Table.",
  },
  {
    q: "Was ist ICM im Poker?",
    a: "ICM steht für Independent Chip Model – ein mathematisches Modell, das Turnierchips in ihre echte Preisgeld-Erwartung umrechnet. Der Kern: Wer seine Chips verdoppelt, verdoppelt damit nicht seine Preisgeld-Equity.",
  },
  {
    q: "Ich bin Chipleader – warum liegt mein ICM-Wert unter meinem Chipanteil?",
    a: "Weil der Sieg trotzdem nur das Preisgeld für Platz 1 bringt, nicht den ganzen Preispool. Im Bubble-Beispiel unten hat ein Leader mit 40% der Chips einen ICM-Wert von nur 33,3% (6,7 Punkte weniger), während der kürzeste Stack (13,3% der Chips) 16,6% wert ist – mehr als sein Chipanteil.",
  },
  {
    q: "Wie berechne ich einen ICM Deal am Final Table?",
    a: "Das verbleibende Preisgeld wird im Verhältnis der ICM-Werte aller Spieler aufgeteilt. Der „ICM-Wert“, den dieser Rechner ausgibt – nachdem du die aktuellen Stacks und die verbleibenden Preisgelder eingegeben hast –, ist genau der faire Deal-Betrag.",
  },
  {
    q: "Was ist der Unterschied zwischen Chip Chop und ICM Deal?",
    a: "Ein Chip Chop teilt das Preisgeld nach rohem Chipanteil und begünstigt den Chipleader. Ein ICM Deal spiegelt die Wahrscheinlichkeit jedes Spielers wider, auf jedem Platz zu landen, und ist deshalb fairer gegenüber Short Stacks. Im Beispiel unten bekommt der Short Stack beim ICM Deal rund $397 statt $300 beim Chip Chop – verlange als Short Stack immer einen ICM Deal.",
  },
  {
    q: "Warum sollte ich auf der Bubble mehr folden?",
    a: "Auf der Bubble ist der ICM-Wert, den du beim Busten verlierst, größer als der Wert, den du beim Gewinnen dazubekommst. Ein Call, der in Chip EV profitabel ist, kann in Preisgeld-EV (ICM) Verlust bringen – vor allem Mittelstacks sollten Coinflips meiden.",
  },
  {
    q: "Wie schätze ich die Equity aus meinen Outs?",
    a: "Multipliziere die Outs am Flop mit 4 und am Turn mit 2 – das ergibt einen ungefähren Prozentwert. Ein Flushdraw mit 9 Outs liegt zum Beispiel am Flop bei etwa 35% und am Turn bei 19,6%. Die exakten Zahlen liefert der Outs-Rechner oben.",
  },
  {
    q: "Wie lautet die Pot-Odds-Formel?",
    a: "Call-Betrag ÷ (Pot + Call-Betrag) = die Mindest-Equity, die du brauchst. Ein Call von 3.000 in einen Pot von 10.000 ergibt zum Beispiel 3.000 ÷ 13.000 ≈ 23,1%, der Call ist also profitabel, wenn deine Equity über 23,1% liegt.",
  },
];
