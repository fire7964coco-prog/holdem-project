import type { Post } from "../posts";

/**
 * GTO-Solver-Serie 10 (de) – 8♦5♣2♠, 3-Bet-Pot (BB 3-bettet, BTN callt).
 * Quelle: lib/posts-en/3bet-pot-low-board.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B/§4-B-2
 *   (Lernspot-Ergebnis vom 2026-08-08) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 10 (title fest, Long-Tail «niedriges Board im 3-Bet-Pot» – redaktionell).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md (Spotname «Niedriges, trockenes Board», Set/Drilling, Backdoor-FD, Kein Draw).
 * Grenzen: nur erste Flop-Entscheidung des BB · kein Knoten für die Reaktion des BTN oder einen Raise · ohne Rake.
 * 97,8% = Frequenz der großen Size (2/3 Pot), nicht die Summe aller Bets.
 * Mit dem Board gepaart: nur A5s (3 Combos) · die 36 Overpairs sind davon getrennt.
 * Bildunterschrift der Range-Grafik: «fast doppelt so viele Overpairs» folgt EN «nearly double» (nicht neu bewertet).
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "8-5-2: Overpairs halten den Druck",
  seoTitle: "3-Bet-Pot auf 8-5-2: Nur 3 Combos treffen – 97,8% Bet",
  desc: "Im 3-Bet-Pot auf 8-5-2 paaren nur drei Combos der Big-Blind-Range das Board – und trotzdem bettet er in 97,8% der Fälle zwei Drittel Pot. Hier ist der Grund.",
  tldr: "Nach einer 3-Bet des Big Blinds und einem Call des Buttons bekommt der Flop 8♦5♣2♠ in 97,8% der Fälle eine Bet über zwei Drittel des Pots. Das Seltsame: Von den 83 Combos des Big Blinds haben genau drei mit diesem Board ein Paar gemacht – die A5s –, und keines von 88, 55 oder 22 ist überhaupt in der Range. Die Bet geht trotzdem raus, weil die Range in 36 Combos Overpairs und 40 Combos A-High zerfällt, mit fast nichts dazwischen – nur die drei A5s. Eine polarisierte Form bettet groß.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster für den Rainbow-Flop 8♦5♣2♠ im 3-Bet-Pot: Das Raster des Big Blinds ist fast vollständig in der Farbe der großen Bet eingefärbt",
  tags: ["8-5-2 flop", "niedriges board im 3-bet-pot", "overpair poker", "polarisierte range poker", "3-bet-pot", "gto", "poker"],
  content: `
Der Flop kommt **8♦ 5♣ 2♠**. Du hast vor dem Flop ge-3-bettet, das Board ist so trocken, wie es nur geht, und du hältst A-K. Kein Paar, und nichts Besseres als Backdoor-Draws. **Genau hier fühlt sich ein Check selbstverständlich an.**

Der Solver macht das Gegenteil. **Er bettet 14,9bb – zwei Drittel des Pots – in 97,8% der Fälle.** Und das ist keine Aussage über A-K. Von den 83 Combos des Big Blinds (BB) haben genau ==drei== mit diesem Board tatsächlich ein *Paar* gemacht.

Warum eine Range, die hier kaum etwas getroffen hat, trotzdem die große Size feuert, erklären die Zahlen unten. Alle stammen aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster.


:::stripe
Spot | BB 3-bettet → BTN callt (heads-up)
Flop | 8♦ 5♣ 2♠ (Rainbow, unverbunden)
Pot · Stack | Pot 22,5bb · effektiver Stack 89bb · **SPR 4,0**
Ergebnis | Zwei Drittel Pot 97,8% – drei Combos haben mit dem Board gepaart
:::

> **Kurze Antwort**
> Auf 8-5-2 im 3-Bet-Pot bettet der Big Blind in 97,8% der Fälle **zwei Drittel des Pots**. Doch von seinen 83 Combos haben nur **drei – die A5s – mit dem Board gepaart**, und 88, 55 und 22 sind gar nicht in der Range. Die Bet geht trotzdem raus, weil die Range in **36 Combos Overpairs (43,4%) und 40 Combos A-High (48,2%)** zerfällt, mit fast nichts dazwischen. Sehr stark oder gar nichts – wenn die Mitte leer ist, steigt die Size.

## Unter welchen Bedingungen entstanden diese Zahlen?

Derselbe 3-Bet-Pot wie in den Spots [A-K-2](/de/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-de.webp") und [Q-T-7](/de/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-de.webp"). Nur das Board hat sich geändert.

![Pokertisch mit Flop 8♦5♣2♠: Nur Big Blind und BTN sind noch im Pot (22,5bb), beide mit 89bb Stack – der Big Blind (OOP) hat preflop ge-3-bettet und handelt zuerst](/images/gto-3bp-low-scene-de.webp "8♦5♣2♠ · BTN eröffnet, SB foldet, BB 3-bettet auf 11bb, BTN callt – der Big Blind handelt zuerst")

| Bedingung | Einstellung |
|---|---|
| Preflop-Aktion | BTN eröffnet → **BB 3-bettet auf 11bb** → BTN callt |
| OOP · IP | OOP (out of position, handelt zuerst) = Big Blind (3-Bettor) · IP (in Position) = Button (BTN, Caller) |
| Flop | 8♦ 5♣ 2♠ (drei verschiedene Farben) |
| Pot · effektiver Stack | Pot 22,5bb · effektiver Stack 89bb (**SPR 4,0** – Stack-to-Pot-Ratio) |
| Bet Sizes | Etwa ein Drittel des Pots (7,4bb) und zwei Drittel (14,9bb) |
| Rake | Nicht berücksichtigt |
| Geprüft | 08.08.2026 (Ergebnis des Lernspots) |

Die 22,5bb im Pot sind ==11 aus der 3-Bet + 11 aus dem Call + 0,5 des gefoldeten Small Blinds==. Die Anzeige ist in **Big Blinds** – der EV steht als „EV (bb)“, und jede Bet zeigt den Betrag zusammen mit ihrem Anteil am Pot.

## Wie oft bettet der 3-Bettor wirklich?

**Mit der großen Size, in 97,8% der Fälle.** Fast genauso wie auf dem nassen Board im vorigen Spot (98,4%).

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Bet 14,9bb (66% vom Pot) | **97,8%** | 81,1 |
| Check | 2,0% | 1,7 |
| Bet 7,4bb (33% vom Pot) | 0,3% | 0,2 |

Hier wird es seltsam. **[Q-T-7](/de/blog/3bet-pot-bet-sizing), voller Draws, und dieses Board, das fast keine hat, nutzen dieselbe Size in fast derselben Frequenz.** Im vorigen Spot sollte die große Size den Draws des Gegners einen Preis setzen. Hier gibt es keine Draws, die man zur Kasse bitten könnte. **Der Grund ist ein anderer, das Ergebnis nicht.**

## Haben wirklich nur drei Combos mit dem Board gepaart – und wo sind die Overpairs?

**Ja – drei Combos A5s.** Die 36 Overpairs zählen dabei nicht mit: Sie waren schon vor dem Flop ein Paar und haben keine Boardkarte gepaart. Alle 83 Combos im Überblick:

| Kategorie | Anteil | Combos | Was es ist |
|---|---|---|---|
| Overpair | 43,4% | 36 | AA · KK · QQ · JJ · TT · 99 |
| A-High | 48,2% | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Second Pair (5) | 3,6% | 3 | **A5s** |
| K-High | 4,8% | 4 | KQs |
| **Set/Drilling** | **0%** | **0** | 88, 55 und 22 stehen in keiner 3-Bet-Range |
| **Top Pair (8)** | **0%** | **0** | Keine Hand der Range hält eine Acht |

Die Combos ergeben ganze Zahlen. Die 36 Overpair-Combos sind sechs Pocket Pairs von 99 bis AA, je sechs Combos. **Jedes Pocket Pair über der Acht wird zum Overpair – genau das macht ein niedriges Board.** A5s sind drei Combos statt vier, weil die 5♣ auf dem Board liegt; übrig bleiben A♠5♠, A♥5♥ und A♦5♦.

Es gibt außerdem genau einen Gutshot. **Die vier Combos A4s** sind eine Karte – eine Drei – vom Wheel A-2-3-4-5 entfernt. Das Panel **Draws** des Solvers teilt sich in drei Zeilen, die sich gegenseitig ausschließen: **Gutshot 4,8% · Backdoor-FD (Backdoor-Flushdraw) 16,9% (14 Combos) · Kein Draw 78,3%.** Das heißt *nicht* „78,3% sind alles, was nach dem Gutshot übrig bleibt“. Alle drei müssen addiert werden, um auf 100 zu kommen, und die 16,9% Backdoor liegen dazwischen (der Backdoor-Flushdraw braucht Turn und River in seiner Farbe – runner-runner –, also kommt er nur in etwa 4,2% der Fälle an).

## Warum groß betten mit einer Range, die kaum getroffen hat?

**Weil die Range in „sehr stark“ und „gar nichts“ zerfällt, mit einer leeren Mitte.** Wenn die Mitte fehlt, steigt die Size.

Die 36 Overpair-Combos nehmen die gesamte Spitze der Big-Blind-Range ein. **Mit AA oder KK schlagen dich nur die neun Set-Combos des Buttons.** Am anderen Ende schlagen die 40 A-High-Combos im Showdown fast nichts **gegen die Range, die eine große Bet callt** – gegen alle 144 Combos des Buttons sieht das Bild allerdings anders aus, denn 58,3% davon haben dieses Board ebenfalls verfehlt.

⚠ Behandle die Overpairs aber nicht als einen Block. Der Button hält eigene Overpairs – 16,7%, 24 Combos QQ, JJ, TT und 99 –, also verliert die 99 des Big Blinds gegen 18 davon, TT gegen 12, JJ gegen 6. **Die Rangfolge läuft auch innerhalb der Zeile „Overpair“.**

| Form der Range | Size |
|---|---|
| Stark, mittel und schwach gleichmäßig verteilt (eine Range Bet) | Klein – die mittleren Hände müssen gecallt werden |
| **Stark oder nichts (polarisiert)** | **Groß – ohne Mitte gibt es nichts zu schützen** |

Die SPR von 4 zeigt, wie weit diese Size reicht – sie ist nicht ihr *Grund*; der Grund ist die polarisierte Form oben. Mit nur 89bb dahinter **leeren zweimal zwei Drittel Pot und dann der Rest am River den Stack genau**: 14,9bb am Flop, 34,5bb am Turn, 39,6bb am River. Die ersten beiden ergeben ==14,9 + 34,5 = 49,4bb==, also 55,5% des 89bb-Stacks.

⚠ **Das ist nicht dasselbe wie „fang klein an, und du verlierst den Weg, alles in die Mitte zu bekommen“.** Den verlierst du nicht. Mit 7,4bb als Start: gecallt, liegt der Pot bei 37,3 mit 81,6 dahinter; zwei Drittel davon am Turn sind 24,6, danach ein Pot von 86,5 und ein Stack von 57,0; das River-All-in über 57,0 sind 65,9% des Pots. **Und die Size wird ohnehin nicht von der Stacktiefe bestimmt** – das [A-K-2-Board](/de/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-de.webp") hat dieselbe SPR von 4,0 und nimmt in 57,8% der Fälle die **kleine** Size. Was hier die große Size erzeugt, ist die polarisierte Range, nicht die SPR.

Und die 40 A-High-Combos **gewinnen, sobald der Gegner foldet.** 58,3% der Button-Range sind auf diesem Board A-High, K-High oder keine Made Hand. ⚠ „Verfehlt“ ist allerdings nicht „foldet“ – **der Knoten, wie der Button auf eine Bet reagiert, ist in dieser Berechnung nicht enthalten**, es ergibt sich also keine Fold-Frequenz, und die A-High-Hände des Buttons reichen von A-K bis A-T, was ihnen etwas Showdown-Wert lässt. Wann ein Bluff wirklich profitabel ist, steht in der [Bluff-Strategie](/de/blog/holdem-strategy).

## Warum liegen alle Sets beim Caller?

**Weil 88, 55 und 22 in keiner 3-Bet-Range stehen, wohl aber in einer Calling-Range.** Das ist der erste Spot der Serie, in dem die Spitze des Boards komplett dem Spieler in Position gehört.

![Infografik zur Range-Zusammensetzung auf 8-5-2 im 3-Bet-Pot: Die Handkategorien von Big Blind und Button im Vergleich](/images/gto-3bp-low-ranges-de.webp "8-5-2 im 3-Bet-Pot · Verteilung der Kategorien – Sets nur beim Button, fast doppelt so viele Overpairs beim Big Blind")

| Kategorie | BB (3-Bettor) | BTN (Caller) |
|---|---|---|
| **Set/Drilling** | **0,0%** | **6,3%** (9 Combos) |
| Overpair | **43,4%** | 16,7% |
| Top Pair (8) | 0,0% | 2,1% |
| Second Pair (5) | 3,6% | – |
| Underpair | – | **16,7%** |
| A-High | **48,2%** | 36,1% |
| K-High · keine Made Hand | 4,8% | **22,2%** |

Die neun Combos des Buttons sind 88, 55 und 22, je drei – von jedem Rang liegt eine Karte auf dem Board, also schrumpft jedes Pocket Pair von sechs Combos auf drei. 🪶 Die Tabelle und der Bildschirm des Solvers nennen diese Zeile beide **„Set/Drilling“**. Auf 8-5-2 ist nur ein **Set** möglich, weil das Board kein Paar zeigt (Trips heißt: eine Karte auf der Hand zu einem gepaarten Board). Die App-Bezeichnung ist so zitiert, wie sie erscheint – lies sie als *Set*.

**Diese Form zählt am Tisch.** Alle Sets liegen auf der anderen Seite, und der Big Blind hat nichts darüber – seine Overpairs sind hier also nicht die Nuts.

⚠ Mach daraus nicht „wenn ein Raise zurückkommt, schlägt das Overpair nichts“. Zwei Gründe. Erstens ist **der Knoten für die Reaktion auf einen Raise in dieser Berechnung nicht enthalten** – der Lernspot endet bei der ersten Aktion am Flop. Zweitens stimmt es ohnehin nicht: Um gegen eine Range Bet mit 97,8% zu raisen, brauchst du Bluffs zwischen dem Value (neun Set-Combos), und **AA und KK schlagen alles in dieser Raising-Range außer diesen neun Combos.**

## Warum realisiert der Caller hier mehr Equity als in den beiden Spots davor?

**Die Equity-Realisierung (EQR) des Buttons steigt in derselben 3-Bet-Pot-Struktur auf 90,3%.** In den beiden Spots davor waren es 78,7% und 75,1%. ⚠ Es ist nicht so, dass nur der Button gestiegen wäre – die beiden EVs ergeben zusammen den Pot, also ist **bei festen Equities der Realisierungsgewinn der einen Seite der Verlust der anderen.** Über verschiedene Boards hinweg bewegen sich auch die Equities, deshalb ist dieser Zusammenhang nicht automatisch – aber hier ist genau das passiert: Der Big Blind fiel von 117,8% auf 106,9%. Hier sind das zumindest zwei Seiten derselben Tatsache.

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,6% | 41,4% |
| EV (bb) | 14,09 | 8,41 |
| **EQR** | **106,9%** | **90,3%** |

| 3-Bet-Pot, drei Boards | EQR BB | EQR BTN |
|---|---|---|
| A♦K♠2♥ trocken (⑧) | 109,6% | 78,7% |
| Q♥T♥7♠ Two-Tone (⑨) | 117,8% | 75,1% |
| **8♦5♣2♠ niedrig (⑩)** | **106,9%** | **90,3%** |

Der Grund ist, wo die Sets liegen. **Der Button ist der einzige Spieler, der eines halten kann**, und diese neun Combos holen ganze Stacks. Seine 16,7% Underpairs – 77, 66, 44, 33 – liegen ebenfalls vor A-High, was ihnen einen Grund gibt, die Bet zu bezahlen.

**Auf einem niedrigen Board bleibt der 3-Bettor vorne, setzt diesen Vorsprung aber am schlechtesten in Geld um.** Seine Equity von 58,6% liegt sogar knapp über den 58,3% auf Q-T-7, während die **Realisierung** von 117,8% auf 106,9% fällt. ⚠ Lies die Bewegung um 15,2 Prozentpunkte auf der Seite des **Buttons** (⑨ 75,1% → ⑩ 90,3%) nicht als „das, was der Gegner mit nach Hause nimmt“ – die EQR ist das Verhältnis der *realisierten* Equity, kein Anteil am Pot. Nach dem tatsächlichen Anteil verbucht dieser Button ==8,41 ÷ 22,5 = 37,4%== gegenüber ==7,04 ÷ 22,5 = 31,3%== in ⑨ – ein Abstand von **6,1 Prozentpunkten**.

## Was ändert sich am Tisch?

- **Greif auf einem niedrigen, trockenen Board nicht reflexhaft zu „nichts getroffen, also checke ich“.** Im 3-Bet-Pot hat auch dein Gegner verfehlt – **58,3%** der Button-Range haben hier kein Paar gemacht. ⚠ Rechne diese 58,3% nicht in einen Fold-Anteil um; der Reaktionsknoten ist in dieser Berechnung nicht enthalten. Der Grund zu betten ist nicht „er foldet“, sondern **„meine Range ist polarisiert, also verdient die große Size ihr Geld“.**
- **Behandle ein Overpair aber nicht als die Nuts, wenn ein Raise zurückkommt.** Alle neun Set-Combos liegen auf der anderen Seite, und der Button hält außerdem 24 Combos QQ bis 99. **Deine 99 und TT sind Overpairs, die gegen Overpairs verlieren.**
- **Gegen jemanden, der selten foldet, streich den A-High-Anteil.** Die 97,8% beruhen darauf, dass ein großer Teil der gegnerischen Range verfehlt hat. ⚠ Noch einmal: „58,3% verfehlt“ ist nicht „58,3% folden“ – aus dieser Berechnung ergibt sich keine Fold-Frequenz, und die 36,1% A-High des Buttons sind die Familie A-K, A-Q, A-J, A-T ohne schwache Asse. 🪶 Gegen 14,9bb in einen Pot von 22,5bb liegt die Mindestverteidigungsfrequenz (MDF) bei **60,2%**, aber das ist ein **Ausgangspunkt, keine Call-Quote** – die MDF behandelt die Bet als reinen Bluff ohne jede Equity, während die Range, die hier bettet, 36 Overpair-Combos enthält; diese Annahme hält also nicht. Ob die tatsächlich optimale Verteidigung darunter liegt, beantwortet diese Berechnung nicht. Gegen eine Calling Station verwandelt zwei- und dreimaliges Feuern mit A-High den ganzen Bluff-Anteil in Verluste; beschränk dich stattdessen beim Value auf die Overpairs.
- **Vom Button aus sind kleine Pocket Pairs hier mehr wert als irgendwo sonst in dieser Serie.** 88, 55 und 22 machen Sets, und 77, 66, 44 und 33 liegen alle vor A-High. Das ist das genaue Gegenteil des [A-K-2-Spots](/de/blog/3bet-pot-cbet), wo die Underpairs hilflos waren. Darüber entscheidet, wie die 3-Bet-Range aufgebaut ist – und das steht in der [3-Bet-Strategie](/de/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp").
- **Zähl die SPR, bevor du bettest.** Bei SPR 4 leeren zweimal zwei Drittel Pot (14,9 → 34,5) plus ein River-All-in über 39,6 die 89bb exakt. Sobald du am Flop bettest, ist der Rest des Stacks nur noch ein oder zwei Bets entfernt – entscheide also vor dieser ersten Bet, auf welchen Turns und Rivers du weiterfeuerst. Turn und River sind in dieser Berechnung nicht enthalten, und ein Runout oder ein Gegner kann die Antwort noch ändern.

:::readnext[Weiterlesen]
/de/blog/3bet-pot-bet-sizing | Q-T-7: 98,4% mit derselben Size | /images/gto-3bp-dynamic-oop-de.webp
/de/blog/blind-battle-cbet | K-T-6: C-Bet im Blind vs. Blind | /images/gto-sb-king-mid-oop-de.webp
:::

## Prüf es selbst nach

Jede Zahl hier findest du so: Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Niedriges, trockenes Board** → **⚡ Ergebnisse ansehen**. Willst du denselben Spot stattdessen als Aufgabe spielen, öffne den [GTO-Trainer](/de/solver) in der Seitenleiste – er teilt dir eine zufällige Hand aus, und sobald du eine Aktion wählst, zeigt er die gemischte Frequenz und den **EV-Verlust (bb)** deiner Wahl. Ohne Login bleibt dein Verlauf auf diesem Gerät; mit Login kannst du den Verlauf aus Lernspots und täglichen Aufgaben im Konto speichern und auf anderen Geräten weiterführen.

Such im Panel **Hände** nach der **fehlenden Zeile „Set/Drilling“**. Stell dann **Spieler** auf **IP (BTN (Caller))**, und sie erscheint mit 6,3%. Diese eine Zeile erzählt die ganze Geschichte, wem die Spitze dieses Boards gehört. Kostenlos, nichts zu installieren, kein Konto.

**Q. Solltest du im 3-Bet-Pot auf einem niedrigen Board mit A-K eine Continuation Bet (C-Bet) spielen?**

A. Ja. Auf 8-5-2 hat A-K kein Paar und keinen direkten Draw (nur Backdoor-Draws – ein Runner-Runner-Wheel, dazu ein Backdoor-Flushdraw für die drei suited Combos), und trotzdem setzt der Solver die ganze Range in 97,8% der Fälle mit der großen Size. Der Grund: Die Range des Big Blinds ist **polarisiert – Overpairs oder A-High, ungefähr halb und halb** –, und wenn die Mitte leer ist, steigt die Size, und die ganze Range nutzt sie. Dass 58,3% der gegnerischen Range kein Paar gemacht haben, hilft, aber lies das nicht als „58,3% folden“; der Reaktionsknoten ist in dieser Berechnung nicht enthalten.

**Q. Was bedeutet eine polarisierte Range?**

A. Eine Range nur aus sehr starken Händen und Händen ohne alles, ohne Mitte. Hier hält der Big Blind 43,4% Overpairs und 48,2% A-High mit fast nichts dazwischen. Ohne mittlere Hände, die gecallt werden sollen, gibt es keinen Grund mehr, die Size klein zu halten.

**Q. Warum hat der 3-Bettor keine Sets?**

A. Weil kleine Pocket Pairs wie 88, 55 und 22 vor dem Flop gecallt oder gefoldet statt ge-3-bettet werden. Deshalb liegen alle neun Set-Combos auf diesem Board beim Button. Darum wackelt das Gefühl „im 3-Bet-Pot dominiere ich“ auf einem niedrigen Flop.

**Q. Kann ich diese Zahlen direkt im Live-Spiel nutzen?**

A. Nutze sie als Ausgangspunkt, wenn die Bedingungen passen. Mischt deine 3-Bet-Range kleine Pocket Pairs oder Suited Connectors bei, ändert sich die Zusammensetzung auf diesem Board und mit ihr die Verteilung der Sizes. Rake ist in der Berechnung nicht enthalten.
`.trim(),
};

export default POST;
