// `/de/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 컴포넌트(화면)가 같은 배열을 쓴다.
// ★2026-09-18 8 → 18문항(EN 17 명제 + de 고유 1). 근거 = `docs/keyword-bank/de-calculator.md` §3·§6·§8.
//   질문은 전부 **계산기형**이다 — 독일어 SERP의 경쟁 FAQ는 «Was ist…?/Wie berechnet man…?» 정의형이 지배하는데,
//   그 자리는 형제 글이 이미 갖고 있다(뱅크 §6 grep):
//   ① «Wie berechnet man Pot Odds schnell?» = `holdem-pot-odds` FAQ 축어 → 여기서는 «Welche Formel benutzt der Pot-Odds-Rechner?»
//   ② «Brauche ich einen Equity-Rechner?» = `holdem-equity` FAQ 축어 → 이 질문은 **쓰지 않는다**(정면 충돌)
//   ③ «die Faustregel» 정의 = `holdem-outs`·`holdem-probability` H2 축어 → 여기서는 «Wie genau ist die Faustregel …?»(정확도)
//   ④ «Wie wird ICM berechnet?» = `holdem-icm` H2+FAQ 축어 → 여기서는 «Wie benutze ich den ICM-Rechner?»
//   ✖ PAA «Wie hoch ist die Wahrscheinlichkeit, einen Royal Flush zu bekommen?»는 확률표 의도 = `holdem-probability` 소유(미채택).
//   ✖ 경쟁 FAQ «Kannst du den Poker Rechner beim Online-Poker verwenden?»(888poker.de)는 사이트 약관 문제 → 다루지 않는다.
//   ✖ Omaha 문항(자동완성 «poker rechner omaha» · PAS)은 넣지 않았다 — «못 한다»는 답은 수요를 못 채운다(뱅크 §7).
// de 고유 1 = «Darf man am Pokertisch einen Rechner benutzen?» — 1차 출처 `docs/sources/tda-2024-rules-v1.txt`
//   Rule 5-A·5-C·5-D(2024판). 🔴 2022판은 «live hand 중»만 금지했지만 2024판 5-D는 «at the table» 전체다 —
//   되돌리지 마라(zh-hant 회차 교훈). 합법성 축은 열지 않는다(정보 제공만 · es·zh-hant·pt 선례).
// §13: 모든 수치는 EN(`app/en/calculator/faq.ts`)과 동일 — 81,9% · 87,9% · 66% · 35,0% · 19,1% · 19,6% ·
//   23,1% · 3.000 ÷ 13.000 · 33,3% · 25% · 60.000 · 1,7 Mio. · 990 · 44 · 40% · 13,3% · 16,6% · $276 · $458.
//   숫자만 de-DE 포맷(소수 콤마 · 천단위 점 — 코퍼스 실측 3.399 : 179). 통화 $ 유지 = terms-de §3-A 기준 3.
export const CALCULATOR_FAQ_DE: { q: string; a: string }[] = [
  {
    q: "Wie rechnet ein Poker-Odds-Rechner?",
    a: "Er teilt jede Karte aus, die noch kommen kann, und zählt, wie oft welche Hand gewinnt. Sind alle Hände bekannt, zählt dieser Rechner am Flop und am Turn jeden möglichen Runout exakt durch (heads-up 990 am Flop, 44 am Turn; mit mehr Spielern weniger, und am River steht das Board schon). Preflop gibt es pro Matchup 1,7 Millionen Boards, und ein Gegner mit zufälliger Hand vervielfacht das noch einmal – in diesen Spots zieht er stattdessen 60.000 zufällige Runouts als Stichprobe und weist das unter dem Ergebnis aus; der Wert schwankt dann von Rechnung zu Rechnung um etwa 0,3 Punkte.",
  },
  {
    q: "Wie stehen die Odds bei AA gegen KK?",
    a: "Pocket Asse gewinnen preflop etwa 82% gegen Pocket Könige (81,9% im Mittel über alle Farbkombinationen, dazu 0,5% Split). AA gegen AK suited steht etwa 88 zu 12, und KK gegen AK suited etwa 66 zu 34.",
  },
  {
    q: "Ist AK gegen ein Pocket Pair ein Coinflip?",
    a: "Nah dran gegen jedes Paar unter Assen und Königen, aber nie genau 50/50. AK offsuit hat etwa 46–47% Equity gegen 22–44, rund 45% gegen 55–99 und rund 43% gegen TT–QQ; mit AK suited kommen etwa 2,5–3 Punkte dazu. Gegen KK fällt es auf etwa 30% und gegen AA auf etwa 7% – der Begriff passt also nur auf die Paare, über denen Ass und König beide stehen.",
  },
  {
    // ★SEO 렌즈 09-18: 「Wie genau ist die Faustregel …?」는 `holdem-probability` FAQ 축어(「Wie genau ist die
    //   Faustregel bei vielen Outs?」)이고 **근거 수치 두 개(60% ↔ 54,1%)까지 같았다** → «도구 vs 암산의 차이»로 튼다.
    q: "Warum weicht die Faustregel von der Zahl im Rechner ab?",
    a: "Weil der Rechner jede noch kommende Karte durchzählt und die Faustregel rundet: × 4 am Flop, × 2 am Turn. Die × 4-Hälfte bleibt bis 9 Outs innerhalb von etwa einem Punkt und driftet danach rund einen Punkt pro Out ab; die × 2-Hälfte liegt zu niedrig, und zwar umso mehr, je mehr Outs du hast: bei 9 Outs etwa 1,6 Punkte, bei 15 Outs etwa 2,6. Und × 4 gilt ohnehin nur, wenn du beide Karten siehst, ohne noch einmal zu zahlen. Am Tisch reicht die Faustregel – zum Nachrechnen danach nimm die exakten Werte je Street aus der Outs-Tabelle weiter oben.",
  },
  {
    // ★SEO 렌즈 09-18: 「Wie oft trifft ein Flushdraw …?」는 `holdem-probability` H2 축어
    //   (「Wie oft triffst du deinen Flushdraw bis zum River?」 L118)이고 `holdem-drawing-odds` FAQ도 같은 세 숫자를 갖는다
    //   → 우리 고유 기능(스트리트 3열 — 독일어 SERP에 0곳)으로 튼다.
    q: "Warum zeigt der Outs-Rechner für einen Flushdraw drei verschiedene Prozentwerte?",
    a: "Weil drei verschiedene Fragen dahinterstecken. Mit 9 Outs kommt ein Flushdraw vom Flop bis zum River in 35,0% der Fälle an – diese Zahl gilt aber nur, wenn du beide Karten siehst, ohne noch einmal zu zahlen. Stehst du am Flop vor einer Bet, zählt die nächste Karte allein: 19,1%. Und vom Turn zum River sind es 19,6%. Der Rechner gibt dir alle drei, damit du nicht die All-in-Zahl auf einen Spot anwendest, in dem noch Setzrunden kommen.",
  },
  {
    q: "Welche Formel benutzt der Pot-Odds-Rechner?",
    a: "Call-Betrag ÷ (Pot nach der Bet + Call-Betrag) = die Mindest-Equity, die du brauchst. Ein Call von 3.000 in einen Pot, in dem inklusive der Bet schon 10.000 liegen, ergibt 3.000 ÷ 13.000 ≈ 23,1%; der Call ist also profitabel, wenn deine Equity über 23,1% liegt. Eine potgroße Bet verlangt immer 33,3%, eine halbe 25%.",
  },
  {
    q: "Welche Pot Odds brauche ich, um mit einem Flushdraw zu callen?",
    a: "Stehst du am Flop vor einer einzelnen Bet, zählt nur die nächste Karte: 9 Outs treffen in 19,1% der Fälle, du brauchst also Pot Odds besser als etwa 4,2 zu 1 – oder Implied Odds, die die Lücke schließen, was Chips hinter dem Gegner und eine Hand voraussetzt, die auch zahlt. Rabattiere stark, wenn du nicht auf die Nuts ziehst: ein zweitbester Flush, der bezahlt wird, verliert weit mehr, als er gewinnt. Siehst du garantiert beide Karten (ein All-in), gilt stattdessen der Wert von 35,0%.",
  },
  {
    q: "Wie benutze ich den Implied-Odds-Rechner?",
    a: "Öffne den Tab „Pot Odds“ und schalte „Implied Odds“ an, dann gib den Betrag ein, den du zusätzlich auf späteren Streets zu gewinnen erwartest, wenn du triffst. Der Rechner addiert ihn zum Pot und senkt die Equity, die dein Call jetzt braucht. Bleib bei diesem Betrag ehrlich: Er zählt nur, wenn dein Gegner so viel dahinter hat und auch wirklich zahlt, sobald dein Draw ankommt.",
  },
  {
    q: "Wie prüfe ich, welche Pokerhand gewinnt?",
    a: "Gib im Tab „Equity“ beide Hole Cards und alle fünf Boardkarten ein: Bei komplettem Board nennt er den Gewinner und die gewinnende Hand oder meldet einen Split Pot. Willst du nur eine einzelne Hand bewerten, gib 5–7 Karten in den Tab „Hand-Ranking“ ein – die beste Fünf-Karten-Kombination findet er automatisch.",
  },
  {
    q: "Wie benutze ich den ICM-Rechner?",
    a: "Gib Spielerzahl, Stacks und die Auszahlungen für Platz 1–6 ein. Für Call oder Fold gewichtest du deinen Wert nach jedem möglichen Ausgang (Sieg, Split oder Niederlage) mit dessen tatsächlicher Wahrscheinlichkeit und vergleichst die Summe mit deinem Wert nach einem Fold. Bei einem Bust zählt das tatsächlich ausgezahlte Preisgeld, nicht automatisch null.",
  },
  {
    q: "Was bedeutet der „ICM-Wert“ in diesem Rechner?",
    a: "Der ICM-Wert ist dein erwarteter Anteil am verbleibenden Preisgeld, berechnet aus den Wahrscheinlichkeiten der möglichen Platzierungen. Er ist kein garantierter Gewinn und muss nicht deinem Chipanteil entsprechen.",
  },
  {
    q: "Wann sollte man den ICM-Rechner benutzen?",
    a: "Immer dann, wenn die Auszahlungen an der Platzierung hängen und das Geld nah ist: auf der Bubble, am Final Table, wenn ein Deal vorgeschlagen wird, und in Satellites, wo jeder Platz gleich viel zahlt. Für Cash Games gilt er nicht – dort ist ein Chip immer seinen Nennwert wert.",
  },
  {
    // ★SEO 렌즈 09-18: 「Ist ICM dasselbe wie Chip-EV?」는 `holdem-icm` FAQ 「Was ist der Unterschied zwischen
    //   ICM und Chip EV?」 + H2 L107의 긍정/부정 반전형이었다 → «이 도구가 무엇을 세는가»로 튼다.
    q: "Rechnet dieser Rechner in Chips oder in Preisgeld?",
    a: "ICM bewertet Preisgeld, Chip-EV dagegen Chips. Ein Call kann in Chips profitabel sein und trotzdem erwartetes Preisgeld verlieren. Bei einem Bust zählt das tatsächlich erhaltene Preisgeld; bereits gesicherte Auszahlungen verschwinden nicht.",
  },
  {
    q: "Ich bin Chipleader – warum liegt mein ICM-Wert unter meinem Chipanteil?",
    a: "Der Sieger erhält nur den ersten Preis, nicht den ganzen Preispool. Dadurch kann der Preisgeldanteil des Leaders kleiner als sein Chipanteil sein. Im Bubble-Beispiel sind es 40% der Chips und 33,3% des Preisgeldes. Das ist keine Regel für jede Auszahlungsstruktur.",
  },
  {
    q: "Wie berechne ich einen ICM-Deal am Final Table?",
    a: "Gib die aktuellen Stacks und die verbleibenden Preisgelder ein; der „ICM-Wert“ jedes Spielers ist der Ausgangsbetrag für den Deal. In der Praxis lässt der Tisch meist eine vereinbarte Summe stehen – oft die Lücke zwischen Platz 1 und 2 –, um die weitergespielt wird, und der Floor stoppt die Uhr und bestätigt, dass alle verbliebenen Spieler einverstanden sind, bevor etwas ausgezahlt wird.",
  },
  {
    // ★SEO 렌즈 09-18: 「Was ist der Unterschied zwischen Chip Chop und ICM Deal?」는 `holdem-icm` FAQ
    //   「Was ist ein ICM Deal, und wie unterscheidet er sich von einem Chip Chop?」와 거의 축어였다
    //   (답의 «중간형=save-and-chop» 설명 순서까지 같았다) → «왜 두 열을 나란히 보여주나»로 튼다.
    q: "Warum zeigt der Rechner Chip Chop und ICM Deal nebeneinander?",
    a: "Damit du die Lücke siehst, bevor du verhandelst: Im Beispiel oben bekommt der kürzeste Stack nach Chips $276, nach ICM aber $458. Was ein Raum mit „Chip Chop“ meint, ist dabei unterschiedlich – vielerorts bekommt zuerst jeder das nächste auszuzahlende Preisgeld und nur der Rest wird nach Chips geteilt, was nahe bei ICM landet und nicht bei der rohen Aufteilung dieser Spalte. Frag also nach, welche der beiden Rechnungen am Tisch gemeint ist.",
  },
  {
    // ★SEO 렌즈 09-18: 「Warum sollte ich auf der Bubble mehr folden?」는 `holdem-bubble` FAQ
    //   「Solltest du an der Bubble folden?」와 같은 의도였다(우리 쪽이 «왜»라 오히려 더 개념형) →
    //   «이 도구로 그걸 어떻게 보이나»로 튼다. 절차 축어는 FAQ 10이 갖고 여기서는 결과만 말한다.
    q: "Wie sehe ich im Rechner, dass ein Call an der Bubble verliert?",
    a: "Ein Call kann an der Bubble in Chips gewinnen und trotzdem erwartetes Preisgeld kosten. Vergleiche die mit den tatsächlichen Wahrscheinlichkeiten gewichteten Werte aller Ausgänge mit dem Fold-Wert; die Tabelle allein zeigt diesen Vergleich nicht. Mittelstacks tragen oft die höchste Risikoprämie, während ein Stack kurz vor dem Wegblinden eine Ausnahme ist. Opens und Re-Shoves nur nach Stackabdeckung und gegnerischen Call-Ranges erweitern, nicht automatisch.",
  },
  {
    q: "Darf man am Pokertisch einen Rechner benutzen?",
    a: "In Turnieren nach TDA-Regeln nicht. Die Fassung 2024 der Regeln der Poker Tournament Directors Association (Regel 5) hält fest, dass Betting-Apps, Charts und andere Poker-Strategie-Tools am Tisch nicht benutzt werden dürfen und ein Spieler auch von keiner anderen Person oder Quelle Strategiedaten erhalten oder verwenden darf; wer eine lebende Hand hat, darf zudem kein elektronisches oder Kommunikationsgerät bedienen oder damit interagieren, und all das unterliegt ohnehin den Hausregeln und den Vorgaben der Glücksspielaufsicht. Dieser Rechner ist also fürs Vorbereiten davor, fürs Nachrechnen danach und fürs Lernen – am Tisch zählen die Faustregel im Kopf und die Tabellen oben, die du dir eingeprägt hast.",
  },
];
