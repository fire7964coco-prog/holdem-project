import type { Post } from "../posts";

/**
 * GTO-Solver-Serie Nr. 7, deutsche Fassung – 6♠5♥2♦, niedriges Rainbow-Board.
 * Quelle: lib/posts-en/low-board-check-raise.ts (EN updated 2026-09-26). Vertrag: docs/de-gto-source-contract.md §5
 *   (zwei Berechnungen: A = vorberechneter Lernspot, nur erste Flop-Entscheidung · B = separate Neuberechnung vom 2026-08-20
 *   für die Knoten nach dem Check). Zahlen: docs/gto-solver-series-spec.md §4-B / §4-B-3.
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 7 (Check-Raise am Flop 6-5-2 – redaktionell, keine Volumenbasis).
 * App-Beschriftungen: docs/solver-app-verbatim-de-2026-10-02.md (Spotname „Niedriges Rainbow-Board“, Zeile „Set/Drilling“).
 *   Der App-Beschreibungstext zu diesem Spot ist keine Strategiequelle. „GTO-Trainer“ wie in den Geschwistern der Serie.
 * Grenzen: nur eine Bet Size (33%) · Check-Raise-Zahlen nur aus Berechnung B · ohne Rake.
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "6-5-2: Erst checken, dann Check-Raise",
  seoTitle: "Check-Raise am Flop 6-5-2: Warum der BB erst checkt",
  desc: "Auf 6-5-2 macht genau eine Hand eine Straße, und keiner hält sie. Deshalb checkt der Big Blind 96,8% – und spart seine Aggression für den Check-Raise.",
  tldr: "Auf dem niedrigen Rainbow-Flop 6♠5♥2♦ checkt der Big Blind 96,8% und spielt nur 3,2% an – obwohl seine Equity von 48,3% die zweithöchste der sieben Spots ist, in denen er verteidigt. Nur eine Hand macht hier eine Straße, 4-3, und keine der beiden Ranges hält sie. Niemand hat die stärksten Hände für sich, also spielt niemand out of position an. Die Action kommt später: Rechnet man denselben Spielbaum separat über den Flop hinaus, check-raist der Big Blind eine Bet von 1,8bb in 14,9% der Fälle, fast alles davon Draws.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "11 Min.",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-de.webp",
  imageAlt: "Ergebnis des HoldemMaster-GTO-Solvers für den niedrigen Rainbow-Flop 6♠5♥2♦: Das 13×13-Raster des Big Blinds ist fast vollständig grün für Check, mit einem dünnen orangen Streifen für Leads",
  tags: [
    "check-raise poker",
    "check-raise am flop",
    "wann check-raisen",
    "6-5-2 flop",
    "niedriges rainbow-board",
    "gutshot",
    "gto",
  ],
  content: `
Der Flop ist **6♠ 5♥ 2♦**. Drei niedrige Karten, drei verschiedene Farben – also kein Flushdraw, und für einen Flush bräuchte es beide noch kommenden Karten.

Es sieht nach einem Board aus, das der Big Blind (BB) gegen den Open-Raise des Buttons (BTN) angreifen sollte. Seine Equity liegt hier bei **48,3%** – die zweithöchste der sieben Spots dieser Serie, in denen er verteidigt, vor den 45,1% auf dem [A-High-Flop](/de/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-de.webp") und den 46,3% auf dem K-High-Flop.

Er spielt in **3,2%** der Fälle an.

Der Grund ist eine einzige Hand. **Genau eine Holding macht auf 6-5-2 eine Straße, und keiner der beiden Spieler hat sie.** Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster.


:::stripe
Spot | BTN eröffnet auf 2,5bb → BB callt (heads-up)
Flop | 6♠ 5♥ 2♦ (niedrig, Rainbow)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb (SPR etwa 17,7)
Ergebnis | BB checkt 96,8% – hohe Equity, aber kein Vorsprung bei den stärksten Händen
:::

> **Kurze Antwort**
> Checken – und dann beim Raise zuschlagen. Nicht die Equity gibt dir das Recht, als Erster zu betten, sondern ein Vorsprung bei den stärksten Händen, und dieses Board gibt keiner Seite einen. Sobald der Button bettet, darf der Big Blind der Aggressor sein: Er check-raist mit jedem Set, das er hält, und füllt den Rest dieses Raises mit Straßendraws – der Gruppe, von der er mehr hat als der Button, und genau die setzt er hier ein.

## Unter welchen Bedingungen entstanden diese Zahlen?

Der Button eröffnet auf 2,5bb, der Big Blind callt, alle anderen folden. Zwei Spieler, ein Pot von 5,5bb, 97,5bb dahinter. Der Big Blind spielt out of position (OOP) und handelt nach dem Flop zuerst; der Button sitzt in Position (IP). **Ein Unterschied zu den früheren Spots dieser Serie: Es gibt nur eine Bet Size.**

![Pokertisch mit Flop 6♠5♥2♦: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-low-rainbow-scene-de.webp "6♠5♥2♦ · BTN eröffnet auf 2,5bb, SB foldet, BB callt – der Big Blind handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet auf 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen des 100bb-Onlinestandards |
| Flop | 6♠ 5♥ 2♦ (Rainbow – drei verschiedene Farben) |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb (SPR etwa 17,7) |
| Bet Size | Etwa 33% des Pots – **nur eine Size** |
| Rake | Nicht berücksichtigt |
| Geprüft | 20.08.2026 |

Der Pot von 5,5bb setzt sich aus ==2,5 Open + 2,5 Call + 0,5 des gefoldeten Small Blinds== zusammen, und der effektive Stack ist ==100 − 2,5 = 97,5bb==.

**Die einzelne Bet Size ist wichtig, wenn du den Bildschirm liest.** Frühere Spots boten 33% und 75%; dieser wurde nur mit 33% berechnet, deshalb **gibt es in der gesamten Ausgabe keine Zeile „Bet 4,1bb“.** Es fehlt nichts – die Option war nie im Spielbaum.

## Wie oft checkt der Big Blind auf 6-5-2?

**96,8%.** Von 487 Combos gehen 15,3 als Bet raus, und 471,7 checken.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **96,8%** | 471,7 |
| Bet 1,8bb (33% vom Pot) | **3,2%** | 15,3 |

Diese 3,2% sind nicht eine bestimmte Hand, die einen Stab wagt. Sie sind dünn über die ganze Range verteilt, und genau so sieht eine nahezu indifferente Aktion aus – der Poker-Solver sagt dir, dass die Entscheidung in beide Richtungen fast nichts wert ist.

## Warum spielt der Big Blind hier 3,2% an, auf 9-8-7 aber 23,7%?

**Weil Equity und das Recht, als Erster zu betten, zwei verschiedene Dinge sind.** Stell die sieben Spots nebeneinander, und die Reihenfolge gerät komplett durcheinander.

| Flop | Nr. | Equity BB | Lead BB |
|---|---|---|---|
| Q♠J♦T♠ Broadway (Two-Tone) | ③ | 46,7% | 0,1% |
| K♠8♦3♣ trocken | ② | 46,3% | 0,2% |
| A♥7♦2♣ trocken | ① | 45,1% | 1,9% |
| 6♣6♦3♥ gepaart | ⑥ | 47,2% | 3,0% |
| **6♠5♥2♦ niedrig, Rainbow** | **⑦** | **48,3%** | **3,2%** |
| Q♠9♠2♠ monoton | ⑤ | 47,7% | 11,2% |
| 9♥8♥7♣ verbunden | ④ | 48,5% | 23,7% |

Das Board mit der niedrigsten Equity (45,1%) spielt öfter an als das Broadway-Board (46,7%). Der [monotone Flop](/de/blog/monotone-board-strategy) hat **weniger** Equity als dieser – 47,7% gegen 48,3% – und spielt mehr als dreimal so oft an.

Leg jetzt ⑦ neben ④. Der Equity-Abstand beträgt **0,2 Prozentpunkte**. Der Abstand beim Lead: **3,2% gegen 23,7%.**

**Der Unterschied sind die Straßen.** Auf [9-8-7](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp") kommt der Big Blind mit 24 Combos fertiger Straßen an – J-T, T-6 suited und 6-5 suited. Auf 6-5-2 komplettiert nur **4-3** eine Straße und füllt ==2-3-4-5-6==. Um die Straße am anderen Ende zu bauen, bräuchtest du 7, 8 und 9 – **drei Karten, und du hältst nur zwei.**

Und 4-3 ist in keiner der beiden Ranges. **Im Kategorien-Panel des Poker-Solvers gibt es überhaupt keine Zeile „Straße“**, und 43s und 43o sind in beiden Rastern ausgegraut – die Hand kommt in diesem Spot in keiner Form an.

:::pull[Eine Hand macht auf diesem Board eine Straße, und keiner der beiden Spieler hat sie je ausgeteilt bekommen.]:::

## Wie unterscheiden sich die beiden Ranges auf 6-5-2?

**Der Big Blind gewinnt bei den Paaren und verliert alles darüber.** Er hält mehr Top Pair, mehr Second Pair und mehr schwache Paare als der Button; Sets und Zwei Paare liegen exakt gleichauf; und seine Overpairs erreichen kaum die Hälfte der Overpairs des Buttons. Fast drei Viertel beider Ranges haben gar kein Paar – deshalb ist das hier ein Kampf um Overcards statt um Value, und deshalb wird die Hand, die ihn gewinnt, meist noch von einem Draw gejagt.

![Range-Zusammensetzung auf einem niedrigen Rainbow-Board: Der Big Blind liegt bei den Paaren vorn, der Button bei den Overpairs](/images/gto-srp-low-rainbow-ranges-de.webp "6♠5♥2♦ · woraus der Check-Raise tatsächlich besteht")

| Kategorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Drilling – hier immer ein Set | 1,8% | 1,8% |
| Zwei Paare | 0,4% | 0,4% |
| Overpair | 4,9% | **9,5%** |
| Top Pair (eine Sechs) | **7,4%** | 5,4% |
| Second Pair (eine Fünf) | **6,2%** | 4,2% |
| Weak Pair | **3,7%** | 2,4% |
| Underpair | **2,5%** | 2,4% |
| A-High | 23,0% | **28,6%** |
| K-High | **15,6%** | 14,3% |
| Keine Made Hand | **34,5%** | 31,0% |

Zähl Top Pair, Second Pair und Weak Pair zusammen, und der Big Blind führt **17,3% zu 12,0%**. Das ist ein echter Vorsprung – und es ist die falsche Art Vorsprung, um damit *anzuspielen*, denn keine dieser Hände will den Pot bei der ersten Aktion out of position aufbauen. Es sind Check-Call- und Check-Raise-Hände.

Zwei Zeilen erklären den ganzen Spot:

- **Die Zeile „Set/Drilling“ steht bei beiden Spielern auf 1,8%.** 🪶 So heißt die Zeile in der App – 6-5-2 hat kein Paar, also steckt in dieser Zeile immer ein **Set** (ein Pocket Pair plus die passende Boardkarte; Trips wären eine Karte auf der Hand zu einem Paar auf dem Board). Nur 66, 55 und 22 machen eins, und jedes davon hat genau ==3 Combos==, weil von jedem Rang eine Karte auf dem Board liegt. Neun Combos auf jeder Seite. **Die beste Hand auf diesem Flop ist genau halbiert.**
- **Overpairs: 4,9% gegen 9,5%** – fast das Doppelte. Ein Overpair ist hier jedes Pocket Pair über der Sechs, also 77 bis AA. Der Big Blind 3-bettet JJ und besser vor dem Flop, damit bleiben ihm **77 bis TT und sonst nichts.** Der Button behält die ganze Spitze dieser Liste.

## Warum liegt die Equity bei 48,3%, die EQR aber nur bei 84,3%?

**Weil Equity das ist, was dir gehört, und EQR das, was du einsammelst.**

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,3% | 51,7% |
| EV (bb) | 2,24 | 3,26 |
| **Equity-Realisierung (EQR)** | **84,3%** | **114,7%** |

In einem Pot von 5,5bb sind 48,3% Equity ==5,5 × 48,3% = 2,66bb== wert. Tatsächlich sammelt der Big Blind **2,24bb** ein, und ==2,24 ÷ 2,66== ist seine Equity-Realisierung: **84,3%**. Die 51,7% des Buttons sind 2,84bb wert, und er sammelt 3,26bb ein – **114,7%**. (Die Werte auf dem Bildschirm sind gerundet. Teilst du die gerundeten Zahlen selbst, landest du ein Zehntel daneben; der Poker-Solver rechnet mit ungerundeten Werten.)

Der Vergleichswert ist der [A-High-Flop](/de/blog/a-high-board-cbet), wo der Big Blind **45,1%** Equity hatte und **84,0%** realisierte. Hier hat er gut drei Punkte mehr Equity und behält praktisch denselben Anteil davon. Auf 9-8-7 dagegen realisierte der Big Blind **93,2%** – weil er auf diesem Flop Straßen hielt und deshalb selbst out of position betten konnte.

**Position ist mehr wert als drei Punkte Equity, wenn deine Range bei den stärksten Händen keinen Vorsprung hat.** Das ist die ganze Lücke.

## Wann solltest du auf 6-5-2 check-raisen – und wie oft?

**Wenn der Button bettet – und oft.** Gegen eine Bet von 1,8bb raist der Big Blind in **14,9%** der Fälle.

:::note[⚠ **Dieser Abschnitt verwendet eine separate Berechnung, nicht das vorberechnete Ergebnis des Beispiels.** Der Lernspot in der App zeigt nur den Flop – er endet bei der ersten Entscheidung, und seine Aktions-Chips lassen sich nicht anklicken, die Antworten auf eine Bet sind darin also nicht enthalten. Um sie zu bekommen, haben wir denselben Spielbaum nachgebaut (Bet 33%, Raise 60%, Pot 5,5bb, Stack 97,5bb) und durchgerechnet: **190 Iterationen, Exploitability 0,16 in den internen Einheiten der Engine (Zehntel eines Big Blinds) – 0,016bb oder 0,29% des Pots von 5,5bb.** Jede Zahl in den beiden Tabellen unten stammt aus diesem Lauf, nicht aus dem Lernspot.]:::

Zuerst, was der Button macht, wenn zu ihm gecheckt wird:

| BTN nach dem Check | Frequenz | Combos |
|---|---|---|
| Bet 1,8bb (33% vom Pot) | **63,0%** | 316,5 |
| Check-back | 37,0% | 186,5 |

Dann die Antwort des Big Blinds:

| BB gegen eine Bet von 1,8bb | Frequenz | Combos |
|---|---|---|
| **Raise auf 7,3bb** | **14,9%** | 69,7 |
| Call | **65,6%** | 314,6 |
| Fold | 19,5% | 93,2 |

(Eine Unstimmigkeit sollte man benennen: Die Prozentwerte der App und ihre eigenen Combo-Zahlen weichen an diesem Knoten leicht voneinander ab – 69,7 Combos sind ==69,7 ÷ 477,5 = 14,6%== der 477,5, die diesen Knoten erreicht haben, nicht 14,9%. Die Prozentwerte oben sind so zitiert, wie das Panel sie anzeigt. Die Lücke beträgt ein Drittel Prozentpunkt und ändert nichts, aber wenn du selbst rechnest und auf 14,6% kommst, weißt du jetzt, warum.)

Zwei Dinge fallen auf.

**Der Raise beträgt 60% des Pots, kein Pot-Sized Raise.** Das verwechselt man leicht. Ein Raise auf 7,3bb entspricht zwar dem, was schon in der Mitte liegt – ==5,5 + 1,8 = 7,3== –, aber ein *Pot-Sized* Raise bedeutet, den Pot **nach** deinem Call zu raisen: ==5,5 + 1,8 + 1,8 = 9,1==, damit lägest du bei **10,9bb**. Was 7,3 tatsächlich ist: ==(7,3 − 1,8) ÷ 9,1 = 60%== des Pots, passend zur Raise Size von 60% im Spielbaum, und knapp über das Vierfache der Bet (==7,3 ÷ 1,8 = 4,06==).

**Der Big Blind foldet nur 19,5%,** macht also in **80,5%** der Fälle weiter. Gegen eine Bet von 1,8bb in 5,5bb liegt die Break-even-Marke für die Verteidigung, die Mindestverteidigungsfrequenz (MDF), bei ==5,5 ÷ (5,5 + 1,8) = 75,3%== – der Anteil, den du behalten musst, damit ein reiner Bluff nicht automatisch Gewinn macht. Der Poker-Solver geht darüber hinaus, weil ein so niedriges und trockenes Board fast jeder Hand etwas gibt, woran sie sich festhalten kann.

:::note[Ein ehrlicher Vorbehalt zu diesem Lauf: Seine Lead-Frequenz an der **Wurzel** kam auf **2,0%** statt der 3,2% des Lernspots, mit 9,5 Combos statt 15,3. Alles andere – die Kategorien, die Draws, Equity, EV und EQR – stimmte bis auf die Nachkommastelle überein. Anspielen ist hier eine Entscheidung mit einem EV nahe null, deshalb wandert sie zwischen Berechnungen. Behandle 3,2% und 2,0% als dieselbe Antwort: *fast nie*. Dein eigener Lauf landet ebenfalls irgendwo in diesem Bereich.]:::

## Woraus besteht der Check-Raise?

**Aus jedem Set, beiden Zwei-Paar-Combos und danach fast nur aus Straßendraws.**

Wir haben alle 487 Zeilen der Detailtabelle gelesen, nicht nur den ersten Bildschirm. Nach Raise-Frequenz sortiert, teilt sich die Spitze dieser Liste ungewöhnlich sauber auf.

| Hand | Was sie hat | Raise |
|---|---|---|
| 66 · 55 · 22 | Set – **alle neun Combos** | **100%** |
| 65s | Zwei Paare – es gibt nur 6♦5♦ und 6♣5♣, weil 6♠ und 5♥ auf dem Board liegen | **100%** |
| 64s | Top Pair **und** Gutshot | **100%** – bei zwei seiner drei Combos |
| 98s | Gutshot auf die Sieben – Equity **35,8%** | 99%+ |
| 87s | OESD, die Vier oder die Neun – Equity **46,2%** | 80%–83% |
| J4s · Q4s | Gutshot auf die Drei und sonst nichts | 67%–90% |
| 54s | Second Pair und Gutshot | 74%–75% |

Lies die zweite Spalte von oben nach unten, und das Muster ist nicht zu übersehen. **Unterhalb von Zwei Paaren hält jede Hand im Raise einen Straßendraw** – die beiden, die zusätzlich ein Paar haben (64s und 54s), raisen wegen des Draws, nicht wegen des Paares:

- **98s** hält 5-6-8-9 und braucht die ==7==.
- **87s** hält 5-6-7-8 und nimmt ==die 4 oder die 9== – der einzige beidseitige Straßendraw (OESD) **in dieser Range**. ⚠ Nicht der einzige, den das Board zulässt: **74 macht 4-5-6-7** und wartet auf die 3 oder die 8, ein OESD wie aus dem Lehrbuch, und 84 ist ein doppelter Gutshot mit denselben acht Outs. Die 0,8% in der Draw-Tabelle bedeuten, dass die Ranges dieses Poker-Solvers kein 74 suited enthalten – nicht, dass das Board nur einen OESD hat.
- **J4s, Q4s, 54s und 64s** halten alle 2-4-5-6 und brauchen die ==3==.

**Keine einzige Hand an der Spitze dieser Liste wurde wegen ihrer hohen Karte ausgewählt.**

Diese sieben Zeilen sind die Spitze der sortierten Liste, und sie machen etwa 30 der 69,7 raisenden Combos aus. Der Rest des Raises kommt aus derselben Range mit niedrigeren Frequenzen – gut zu wissen, bevor du schließt, dass hier *sonst nichts* je raist.

Und sieh dir an, wie wenig davon Value ist. Sets und Zwei Paare machen zusammen **2,2%** der Range aus – ==2,2% × 487 ≈ 11 Combos== – von den 69,7, die raisen. Selbst wenn du die beiden Hände mitzählst, die außerdem das Board paaren, ist **weniger als eine von vier raisenden Combos eine fertige Hand.** Deshalb funktioniert der Raise auch dann, wenn er gecallt wird: Der Großteil der Range, die das Geld investiert hat, kann sich noch verbessern.

Und Straßendraws sind genau das, wofür der Poker-Solver diesen Vorsprung ausgibt.

| Draw | BB | BTN |
|---|---|---|
| Beidseitiger Straßendraw (OESD) | 0,8% | 0,8% |
| **Gutshot** | **18,5%** | 13,9% |
| Backdoor-Flushdraw | **20,5%** | 18,5% |
| Kein Draw | 60,2% | **66,8%** |

**Gutshots: 18,5% gegen 13,9%.** Da die Sets mit je 1,8% gleich verteilt sind und die Overpairs bei 4,9% gegen 9,5% liegen, kommt der größte Teil der Raising-Range aus der Gutshot-Zeile – der Poker-Solver stützt sich auf die Gruppe, von der der Big Blind mehr hat, aber nicht die ganze Gruppe raist: 18,5% von 487 sind etwa 90 Gutshot-Combos, mehr als die 69,7 raisenden Combos insgesamt, und selbst J4s und Q4s weit oben in der Liste raisen nur 67%–90%.

## Ist 6-5-2 ein nasses oder ein trockenes Board?

**Trocken an der Spitze, nass in der Mitte.** Ein **nasses Board** (Wet Board) ist eines, das Draws verteilt – Karten, die sich für Straßen oder Flushes verbinden, sodass Hände, die hinten liegen, noch einen Weg zum Gewinnen haben. Ein trockenes Board verteilt fast keine. Auf 6-5-2 wirkt die Unterscheidung in beide Richtungen zugleich, deshalb sagt das Etikett allein hier nichts.

Es gibt keinen Flushdraw, und – wie oben gezeigt – keine fertige Straße in einer der beiden Ranges. In diesem Sinn ist das Board knochentrocken: Die Obergrenze ist ein Set, und beide Spieler erreichen sie gleich oft.

Aber **19,3% der Big-Blind-Range halten einen Straßendraw** (0,8% OESD plus 18,5% Gutshots), und weitere 20,5% bekommen einen Backdoor-Flushdraw. Nur 60,2% haben keins von beidem. Viele Hände haben also einen Grund weiterzuspielen, auch ohne fertige Hand.

Diese Kombination – eine niedrige Obergrenze und ein breiter Boden – erzeugt die Zahlen oben. Niemand kann ein Monster betten, weil niemand eins hat, und niemand foldet viel, weil fast jeder ein Out hat. Ein Board wie [Q♠9♠2♠](/de/blog/monotone-board-strategy) ist das Gegenteil: eine hohe Obergrenze, bei der beide Spieler fürchten, der andere habe sie schon erreicht. Was du betten kannst, folgt der Obergrenze, nicht dem Boden – dasselbe Prinzip, das der Guide zur [Continuation Bet](/de/blog/holdem-continuation-bet) an anderen Texturen durchgeht.

## Was ändert sich am Tisch?

- **Hör auf, niedrige Rainbow-Boards anzuspielen, nur weil du „etwas getroffen“ hast.** 48,3% Equity sind kein Grund. Auf 6-5-2 spielt die ganze Range 3,2% an, und die Hände, die es tun, sind kaum darauf festgelegt. Der Lead hat hier eine einzige Size, ein Drittel des Pots, also braucht der Button nur **19,8%** für einen Call – und seine A-High- und K-High-Hände, zusammen **42,9%** der Range, liegen über dieser Marke. Du bringst sie nicht zum Folden, und unter dem, was callt, sind auch Hände, die dich schlagen.
- **Check-raise deine Sets, alle.** Alle neun Set-Combos raisen zu 100%. Ein Set hier langsam zu spielen – wenn der Button genauso viele hat – verschenkt den einen großen Pot, den du gewinnen würdest.
- **Wähle deine Bluffs nach dem Draw aus, nicht nach der hohen Karte.** Die Raising-Range besteht aus Gutshots. Ein Ass ohne Draw – A-J, A-9 – gehört in die Calling-Range, die 65,6%, nicht in den Raise. (A-K kommt in diesem Spot nie an: Die Verteidigungsrange des Big Blinds endet bei A-J.)
- **Folde nicht zu oft gegen eine kleine Bet.** Gegen 1,8bb in 5,5bb behält der Poker-Solver **80,5%** seiner Range, mehr als die Break-even-Marke von 75,3%. K-High und schwache Paare gegen eine einzige kleine Bet wegzuwerfen, ist auf einem Board wie diesem die am leichtesten auszunutzende Gewohnheit.

:::readnext[Weiterlesen]
/de/blog/paired-board-strategy | 6-6-3: Mehr Trips, trotzdem 97% Check | /images/gto-srp-paired-oop-de.webp
/de/blog/monotone-board-strategy | Monotoner Flop: Der Nut Flush checkt | /images/gto-srp-monotone-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Niedriges Rainbow-Board** → **⚡ Ergebnisse ansehen**.

Achte auf das, was *fehlt*: **Scroll durch das Panel „Hände“ und such die fehlende Zeile „Straße“.** Öffne dann das Raster und sieh dir die Zellen 43s und 43o an – bei beiden Spielern ausgegraut. Dieses Fehlen ist der ganze Artikel.

Für die Check-Raise-Zahlen musst du einen Schritt weiter gehen, denn der Lernspot zeigt nur den Flop. Klick auf **Diesen Spot selbst berechnen**, behalte den Spielbaum, den er lädt, und rechne ihn durch. Wenn die Berechnung fertig ist, klick in der oberen Leiste auf **Check** und dann auf **Bet**.

Öffne danach den **GTO-Trainer** in der Seitenleiste: Er teilt dir eine Hand nach den echten Range-Gewichten aus und bewertet deine Aktion in verlorenen Big Blinds. Kostenlos, nichts zu installieren, kein Konto.

## FAQ

**Q. Wann ist ein Check-Raise im Poker sinnvoll?**

A. Wenn deine Range Hände hat, die von einem größeren Pot profitieren, und genug Draws, um sie auszubalancieren. Auf 6♠5♥2♦ sind das 14,9% der Big-Blind-Range gegen eine Bet von 1,8bb: jedes Set, beide Combos von Zwei Paaren und ein Block Gutshots. Die Frage ist nicht „Habe ich eine gute Hand?“, sondern „Will diese Hand, dass der Pot wächst, und finde ich Bluffs, die sich verbessern, wenn sie gecallt werden?“

**Q. Warum bettet der Big Blind auf einem niedrigen Board nicht als Erster?**

A. Weil nicht die Equity das Recht verschafft, als Erster zu betten, sondern ein Vorsprung bei den stärksten Händen – und dieses Board gibt keiner Seite einen. Die Sets sind 1,8% zu 1,8% verteilt, und die eine Holding, die sie schlagen würde, 4-3, liegt außerhalb beider Ranges. Ohne eine Hand, die das Beste des Gegners schlägt, gibt es nichts, womit man einen Pot aufbauen könnte, deshalb spielt der Big Blind nur 3,2% an.

**Q. Warum ist die Strategie bei fast gleicher Equity so anders als auf 9-8-7?**

A. Weil die Spitze einer Range entscheidet, wer zuerst bettet, nicht ihr Durchschnitt. Auf 9-8-7 kommt der Big Blind mit 24 Combos fertiger Straßen an; auf 6-5-2 hält keine der beiden Ranges eine. Zwei Zehntel eines Equity-Punkts Unterschied, und die Leads liegen bei 23,7% gegen 3,2%.

**Q. Mit welchen Händen check-raist du auf 6-5-2?**

A. Mit allen neun Set-Combos (66, 55, 22), beiden Combos von 65 suited und danach mit Straßendraws: 98s für den Gutshot auf die Sieben, 87s für den OESD sowie J4s, Q4s, 54s und 64s für den Gutshot auf die Drei. Keine davon wurde wegen einer hohen Karte gewählt – der Raise ist von oben bis unten auf Draws gebaut.

**Q. Ist ein Check-Raise erlaubt – und ist er unhöflich?**

A. Erlaubt ist er in fast jedem Casino und in normalen Onlinespielen – nur eine private Heimrunde hat vielleicht noch eine eigene Hausregel –, und die Regel selbst erklärt der Guide zu den [Poker-Aktionen](/de/blog/holdem-betting-actions). Die Sorge um die Etikette ist ein Überbleibsel: Manche alten Heimrunden haben den Check-Raise per Hausregel verboten, und das Stigma hat die Regel überlebt. Nur noch wenige Runden spielen heute so, und die Zahlen oben sind der Grund – nimm dem Big Blind auf diesem Flop den Check-Raise weg, und du streichst 14,9% seiner Range, ohne etwas an ihre Stelle zu setzen.

**Q. Gelten diese Zahlen auch bei meinem Limit?**

A. Nimm die Frequenzen auf dieser Seite als Ausgangspunkt für passende Bedingungen: heads-up, 100bb, ein Button-Open auf 2,5bb mit Standard-Verteidigungsranges, ohne Rake. Ein Detail gilt nur für dieses Beispiel – der Spot wurde mit einer einzigen Bet Size von 33% berechnet, der Poker-Solver kann also nie eine größere wählen. Gib ihm zwei Sizes, und die Frequenzen verschieben sich, auch wenn der eigentliche Grund für den Check derselbe bleibt.
`.trim(),
};

export default POST;
