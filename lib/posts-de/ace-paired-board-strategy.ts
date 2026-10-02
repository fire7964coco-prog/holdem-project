import type { Post } from "../posts";

/**
 * GTO-Solver-Serie 13 (de) – A♠A♥6♦, Blind vs. Blind (SB eröffnet auf 3bb, BB callt).
 * Quelle: lib/posts-en/ace-paired-board-strategy.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B/§4-B-2
 *   (Lernspot-Ergebnis vom 2026-08-08, Live-Nachmessung 2026-08-21) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 13 (title fest, Long-Tail «A-A-6 gepaartes Ass Blind vs. Blind» – redaktionell).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md (Spotname «Board mit gepaartem Ass», Zeile Set/Drilling = hier Trips).
 * Grenzen: nur erste Flop-Entscheidung des SB · kein Knoten nach einem Check oder für die Reaktion des BB · ohne Rake.
 * Vergleich mit 6-6-3: dort BB (Caller) gegen BTN – Positionen und Ranges sind andere, nicht nur das Board.
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "A-A-6: Die C-Bet steigt auf 80,1%",
  seoTitle: "A-A-6-Flop: Warum der Small Blind 80,1% bettet",
  desc: "Ein gepaarter Flop wird zu 3% gebettet, ein anderer zu 80,1%. Auf A-A-6 gehört das Ass dem Raiser – und die Trips, die dich schlagen, fehlen beim Caller.",
  tldr: "Nach einem Open des Small Blinds und einem Call des Big Blinds bettet der Small Blind den Flop A♠A♥6♦ in 80,1% der Fälle (79,6% mit einem Drittel des Pots, 0,5% mit drei Vierteln, Check 19,8%). Das ist die Umkehrung der 3,0%, die der Big Blind als Caller gegen den Button auf dem gepaarten Board 6♣6♦3♥ bettete – und den Unterschied macht weniger, dass das Board gepaart ist, als welche Karte sich gepaart hat und zu wessen Range sie passt (neben dem Board haben sich auch Sitz und Ranges geändert). Hände, die mit einem Ass Trips machen, stehen bei 88 Combos gegen 66, und 16 dieser Combos, A-K und A-Q, fehlen in der Calling-Range komplett.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster auf dem Flop A♠A♥6♦: Das Raster des Small Blinds ist fast vollständig orange für die Bet",
  tags: ["a-a-6 flop", "board mit gepaartem ass", "blind vs blind a-a-6", "gto", "poker"],
  content: `
Oft hört man, auf gepaarten Boards werde nicht gebettet. Auf dem [gepaarten Board 6-6-3](/de/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-de.webp") weiter vorn in dieser Serie bettete der Spieler, der zuerst handelt – dort der Big Blind als Caller gegen den Button –, nur **3,0%**.

Auch dieses Board ist gepaart. A♠ A♥ 6♦. Und der Small Blind (SB) bettet **80,1%** – als Open-Raiser ist das seine Continuation Bet (C-Bet).

Die Bedingungen sind dieselben wie in den beiden Spots davor – ein Pot von 6bb, ein effektiver Stack von 97bb, der Small Blind als Open-Raiser gegen den Big Blind (BB). Ein Board vorher [bettete er von genau diesem Platz nur 9,6%](/de/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-de.webp"). Dieser Spot ist das andere Ende. Jede Zahl unten stammt aus dem [GTO-Solver von HoldemMaster](/de/solver).


:::stripe
Spot | SB eröffnet auf 3bb → BB callt (Blind vs. Blind)
Flop | A♠ A♥ 6♦ (gepaart · kein Flushdraw möglich)
Pot · Stack | Pot 6bb · effektiver Stack 97bb · SPR 16,2
Ergebnis | SB bettet **80,1%** – gegen 3,0% auf dem gepaarten Board 6-6-3
:::

> **Kurze Antwort**
> Auf dem gepaarten Board A-A-6 ist die erste Aktion des Small Blinds **Bet 80,1%, Check 19,8%** (79,6% der Range mit einem Drittel des Pots). Das ist die Umkehrung der 3,0% auf 6-6-3, und den Unterschied macht **weniger, dass das Board gepaart ist, als welche Karte sich gepaart hat und zu wessen Range sie passt** – neben dem Board haben sich auch Sitz und Ranges geändert. Hände, die mit einem Ass Trips machen, stehen bei **88 Combos gegen 66**, und davon **gibt es A-K und A-Q – 16 Combos – in der Calling-Range des Big Blinds überhaupt nicht.** Sie wurden vor dem Flop ge-3-bettet.

## Unter welchen Bedingungen entstanden diese Zahlen?

★**Dieselben wie in den beiden Spots davor, nur gibt es zwei Bet Sizes.** In den Spots ⑪ und ⑫ gab es nur ein Drittel des Pots; hier sind zusätzlich drei Viertel offen.

![Pokertisch mit Flop A♠A♥6♦: Nur Small Blind und Big Blind sind noch im Pot (6bb), beide mit 97bb Stack – der Small Blind (OOP) handelt zuerst](/images/gto-sb-paired-ace-scene-de.webp "A♠A♥6♦ · Preflop: alle folden bis zum SB · SB eröffnet auf 3bb · BB callt – der Small Blind handelt zuerst")

| Bedingung | Dieser Spot ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥T♦6♠ |
|---|---|---|---|
| Preflop-Aktion | SB eröffnet auf 3bb → BB callt | gleich | gleich |
| OOP (out of position, handelt zuerst) | SB – der Open-Raiser | gleich | gleich |
| Pot · effektiver Stack | 6bb · 97bb | gleich | gleich |
| SPR | 16,2 | gleich | gleich |
| **Bet Sizes** | **Zwei: etwa 33% und 75% des Pots** | Eine, 33% | Eine, 33% |
| Range des SB | 503 Combos | 572 Combos | 538 Combos |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ T♦ 6♠ |
| Rake | Nicht berücksichtigt | Nicht berücksichtigt | Nicht berücksichtigt |
| Geprüft | 08.08.2026 (Ergebnis des Lernspots) | 08.08.2026 | 08.08.2026 |

Die 6bb im Pot sind ==die 3 des SB plus die 3 des BB==, der effektive Stack ist ==100 − 3 = 97bb==, und die SPR ist ==97 ÷ 6 = 16,2==. Alle drei Spots verwenden dieselbe Range, und **nur die Zahl der Combos schrumpft um das, was das Board herausnimmt** – zwei Asse auf dem Flop streichen sehr viele Ass-Kombinationen, deshalb ist 503 die kleinste der drei Zahlen.

Angezeigt wird in **Big Blinds** – Bets erscheinen als „Bet 4,5bb (75% vom Pot)“, der EV als „EV (bb)“.

## Wie oft bettet der Small Blind hier?

**79,6% mit der kleinen Size, 0,5% mit der großen und 19,8% Checks.** Zusammen ergeben die Bets 80,1%, und 403 der 503 Combos gehen hinein.

| Erste Aktion des SB | Frequenz | Combos |
|---|---|---|
| Bet 4,5bb (75% vom Pot) | 0,5% | 2,7 |
| Bet 2bb (33% vom Pot) | **79,6%** | 400,4 |
| Check | 19,8% | 99,8 |

Stellt man die Serie nebeneinander, sieht man, wo dieser Spot landet.

| Spot | Wer ist out of position | Bet-Frequenz OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB-Caller | 0,1%–1,9% |
| **6♣6♦3♥ gepaartes Board (⑥)** | BB-Caller | **3,0%** |
| 6♠5♥2♦ niedrig (⑦) | BB-Caller | 3,2% |
| 7♦6♦5♣ Blind vs. Blind (⑫) | SB-Open-Raiser | 9,6% |
| Q♠9♠2♠ monoton (⑤) | BB-Caller | 11,2% |
| 9♥8♥7♣ verbunden (④) | BB-Caller | 23,7% |
| K♥T♦6♠ Blind vs. Blind (⑪) | SB-Open-Raiser | 67,4% |
| **A♠A♥6♦ gepaartes Board (⑬)** | **SB-Open-Raiser** | **80,1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB-3-Bettor | 98%–100% |

**Die beiden gepaarten Boards liegen nahe an entgegengesetzten Enden der Tabelle.** Das Etikett „gepaartes Board“ entscheidet also keine Strategie.

## Warum betten zwei gepaarte Flops so unterschiedlich – 3,0% gegen 80,1%?

**Nicht die Zahl der Trips, sondern der *Rest der Range*.** Der Spot 6-6-3 ist hier das entscheidende Gegenbeispiel, denn dort **hielt der Spieler, der zuerst handelt, mehr Trips** und bettete trotzdem nur 3,0%.

⚠ Ein kontrollierter Vergleich ist das nicht: Auf 6-6-3 handelte der Big Blind als Caller gegen den Button zuerst, auf A-A-6 der Small Blind als Open-Raiser gegen den Big Blind. Neben dem Board haben sich also auch Positionen und Ranges geändert – die erste Zeile der Tabelle zeigt es.

| | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Wer handelt zuerst | BB – der Caller | **SB – der Open-Raiser** |
| Anteil Trips | BB 5,3% gegen BTN 4,0% – **der Spieler, der zuerst handelt, hat mehr** | SB 17,5% gegen BB 13,1% – der Spieler, der zuerst handelt, hat mehr |
| Equity OOP | 47,2% | **56,2%** |
| EQR OOP | 83,7% | **104,1%** |
| Bet-Frequenz OOP | **3,0%** | **80,1%** |

Auf 6-6-3 hatte der Big Blind günstig mit Händen verteidigt, die der Button nie eröffnet – J-6s, T-6s, 9-6s –, deshalb kamen seine Combos mit einer Sechs auf 26 (5,3%) gegen 20 (4,0%) beim Gegner. **Und trotzdem bettete er 3,0%.** Zählst du jede Hand, die etwas über das Paar des Boards legt, kommst du auf **18,4% beim Big Blind gegen 20,3% beim Button** – der Button liegt vorn. Vorn lag der Big Blind nur in einer Zeile, den Trips. Und die übrigen 81,6%, das Duell „Sechserpaar des Boards plus eine hohe Karte“, gingen ebenfalls in die andere Richtung: A-High 26,3% gegen 31,9%.

Hier läuft auch der Rest zugunsten des Small Blinds. K-High steht bei 22,3% gegen 18,2%, und Hände, die komplett verfehlt haben, bei 39,8% gegen 51,5% – **11,7 Prozentpunkte mehr beim Gegner.**

:::pull[Was die Bet-Frequenz festlegt, ist nicht die Zahl der Combos in deiner obersten Klasse. Es ist die Frage, ob deine ganze Range besser ist als seine.]:::

Das Ass ist die Karte, die der Preflop-Aggressor häufiger hält – in diesem Spot 95 Combos gegen 72, **etwa 1,3-mal so viele.** Fällt diese Karte zweimal auf den Flop, kippen die Spitze der Range und der Rest **in dieselbe Richtung**, und genau dann steigt die Bet-Frequenz auf 80%.

## Wer hat auf A-A-6 mehr Trips?

**88 Combos (17,5%) beim Small Blind, 66 (13,1%) beim Big Blind, der in Position (IP) handelt.** Aber **was fehlt**, zählt mehr als die Anzahl. (Im Panel des Solvers heißt diese Zeile „Set/Drilling“ – auf diesem gepaarten Board sind das Trips: ein Ass auf der Hand plus das Ass-Paar des Boards, kein Set aus Pocket Pair und Boardkarte.)

![Infografik zur Range-Zusammensetzung auf A♠A♥6♦: Handkategorien von Small Blind und Big Blind im Vergleich, grüne und goldene Balken nebeneinander](/images/gto-sb-paired-ace-ranges-de.webp "A-A-6 Blind vs. Blind · Zusammensetzung nach Kategorien – verfehlte Hände 39,8% gegen 51,5%")

| Kategorie | SB (OOP · Open-Raiser) | BB (IP · Caller) |
|---|---|---|
| Vierling | **0,2% (1 Combo)** | 0,0% (0 Combos) |
| Full House | 1,8% (9 Combos) | 1,8% (9 Combos) |
| Set/Drilling | **17,5% (88 Combos)** | 13,1% (66 Combos) |
| Zwei Paare | **18,5% (93 Combos)** | 15,4% (78 Combos) |
| K-High | **22,3% (112 Combos)** | 18,2% (92 Combos) |
| Keine Made Hand | 39,8% (200 Combos) | **51,5% (260 Combos)** |

Drei Zeilen sind der ganze Spot.

- **In den Trips des Big Blinds gibt es kein A-K und kein A-Q.** Gegen ein Open von 3bb aus dem Small Blind werden diese Hände ge-3-bettet statt gecallt. Die oberen Trips, die nur der Small Blind hält, sind ==8 Combos A-K + 8 A-Q + 6 A-J offsuit = 22 Combos==. Gleiche Trips, und das Kicker-Duell ist schon entschieden.
- **Vierlinge gehören allein dem Small Blind.** Mit A♠ und A♥ auf dem Board bleiben nur A♦ und A♣, also ist A-A **genau eine Combo**. Der Big Blind 3-bettet A-A und hält null.
- **Mehr als die Hälfte der Big-Blind-Range ist nichts.** 260 Combos (51,5%) haben verfehlt. Das ist der Pool, auf den eine Bet drückt, keine Fold-Rate: Gegen ein Drittel des Pots sagt die Mindestverteidigungsfrequenz (MDF), dass etwa 75% der Range weitergehen sollten, ein ausgeglichener Gegner foldet also eher ein Viertel. (Die Reaktion des BB ist nicht in dieser Berechnung enthalten.)

Nur Full Houses sind exakt gleich: Beide halten ==3 Combos 6-6 + 6 Combos A-6 = 9==. **Nimm diese eine Zelle weg, und jede Klasse darüber kippt zum Small Blind, während nur der Boden – die verfehlten Hände – beim Big Blind 11,7 Prozentpunkte schwerer wiegt.**

Die Equity zeigt das Ergebnis.

| Kennzahl | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56,2%** | 43,8% |
| EV (bb) | 3,51 | 2,49 |
| **Equity-Realisierung (EQR)** | **104,1%** | 94,8% |

Der Pot liegt bei 6bb, der Anteil des Small Blinds ist also ==6 × 56,2% = 3,372bb==, sein tatsächlicher EV 3,51bb – das ergibt ==3,51 ÷ 3,372 = 104,1%==. Die beiden EVs ergeben zusammen ==3,51 + 2,49 = 6,0bb==, genau den Pot.

**Die Equity-Realisierung liegt über 100% – ganz ohne Position.** Es ist der **höchste Wert der drei Blind-vs.-Blind-Spots** – ⑪ mit 103,1%, ⑫ mit 85,3%, dieser mit **104,1%**. Er ist der zweite von ihnen, der über 100% kommt, und weil der Range-Vorteil hier schärfer ist, liegt er ein Stück über ⑪. (Auch die 3-Bet-Pots kommen out of position über 100%, mit 106,9%–117,8% – diesen Vorteil hat die 3-Bet geschaffen.)

## Warum wird die große Size fast nie gewählt?

**Weil der Vorteil *breit* ist, nicht *tief*.** Die Bet über drei Viertel des Pots bekommt 0,5%, nur 2,7 Combos. Praktisch gibt es nur eine Size.

In den 3-Bet-Pots war es umgekehrt. Auf dem [niedrigen Board 8-5-2](/de/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-de.webp") nahm der Big Blind in 97,8% der Fälle zwei Drittel des Pots, weil sich diese Range grob in zwei Hälften teilte – **Overpairs oder A-High**, eine polarisierte Form. Eine Range, die zu den Extremen gezogen ist, verlangt eine große Size.

Dieser Spot ist anders. Die Range des Small Blinds verläuft **kontinuierlich** – Trips 17,5%, Zwei Paare 18,5%, K-High 22,3%, verfehlt 39,8%. Bei dieser Form ist es mehr wert, die ganze Range mit kleiner Size hineinzuschieben: Die 51,5% verfehlten Hände des Gegners sind das, worauf eine kleine Bet drückt – ein Bluff über 2bb in einen Pot von 6bb braucht nur 25% Folds, um den Break-even zu erreichen –, und die Bet selbst riskiert jetzt nur 2bb, auch wenn die 97bb dahinter auf Turn und River noch ins Spiel kommen können.

:::note[⚠ Dieser Lernspot wurde mit zwei Size-Kandidaten berechnet, 33% und 75%. Füg eine kleinere hinzu – ein Fünftel oder ein Viertel des Pots –, und die 79,6% könnten dorthin wandern. Lies das als „die kleinere der angebotenen Sizes“, nicht als „33% ist die Antwort“.]:::

## Welche Hände machen die 19,8% Checks aus?

**Nicht eine Klasse, die geschlossen zurückgehalten wird, sondern ein Stück aus jeder.** Live gemessen am 21.08.2026 checken die Pocket Pairs **K-K 72,4%, Q-Q 66,2%, J-J 42,0% und T-T 21,6%** – K-K und Q-Q tendieren also zum Check, aber **T-T bettet schon 78%.** Die 99,8 checkenden Combos lassen sich auch nicht als „mittlere Stärke“ zusammenfassen: **Verfehlte Hände sind mit etwa 44% die größte Gruppe**, danach K-High mit etwa 27%, Zwei Paare mit etwa 17% und Trips mit etwa 11%. Am dichtesten sammelt sich das Grün in **offsuit Händen mit zwei hohen Karten** wie Q-9o, Q-Jo, Q-To und J-9o. Die Zellen mit einem Ass und 6-6 sind überwiegend orange.

Der Grund liegt darin, **wer dich callt.** K-K macht mit den Assen des Boards Zwei Paare, aber **mit einer Bet ist damit wenig Wert zu holen.** ⚠ Übersetz das nicht in „die schlechteren Hände folden und nur bessere Trips callen“ – **die eigene Tabelle dieses Artikels widerlegt das.** Die 78 Combos Zwei Paare des Big Blinds sind sieben Ränge Pocket Pairs (42) plus Sechs-x (36), **alle unter K-K**, und seine 92 Combos K-High liegen ebenfalls darunter; gegen eine Bet über ein Drittel des Pots folden diese 170 Combos (33,7% der Range) nicht alle. Die Trips und Full Houses, die K-K schlagen, kommen dagegen auf **75 Combos (14,9%) – weniger.** Der Wert ist nicht deshalb dünn, weil die schwachen Hände alle folden, sondern weil **dieser breite Teil zwar callt, dir aber nicht in einen großen Pot folgt** – Zwei Paare und K-High erkennen ohne große Mühe, dass sie hinter K-K liegen, und je größer du bettest, desto mehr bleiben nur Trips übrig. ⚠ Zur Klarstellung: **Ein weiteres Ass auf Turn oder River dreht K-K nicht um** – mit A-A-A-6 auf dem Board wird K-K zu einem *Full House, Asse über Könige* (A-A-A-K-K), und nichts in diesen 170 Combos schlägt das. Ein Check lässt dagegen Raum für die 260 verfehlten Combos des Big Blinds zu bluffen, und dann verdient ein Call sein Geld – **unter der Annahme, dass der Gegner Bluffs beimischt.** ⚠ Wie oft der Big Blind nach einem Check tatsächlich blufft, steht nicht in dieser Berechnung (der Lernspot endet bei der ersten Aktion am Flop); es ist eine Interpretation, abgeleitet aus der Range-Zusammensetzung.

**Dazu passt, dass die Trips fast vollständig in die Bet gehen.** Die 88 Combos mit einem Ass brauchen Wert von K-High und verfehlten Händen des Gegners, also gibt es wenig Grund zu checken. ⚠ „Vollständig“ ist trotzdem falsch – live gemessen am 21.08.2026 checken die **94 Combos mit einem Ass** (88 Trips plus die 6 Combos A-6, die ein Full House machen) zwischen **0,1% und 26,0%, im Schnitt 12,3%**, und **keine einzige Combo checkt exakt 0%.** Am stetigsten gemischt wird dort, wo das Ass mit einer niedrigen Karte zusammensteht (A♣8♣ mit 19,4%, A♣7♣ mit 20,9% und A-5 bis A-2 offsuit mit durchschnittlich 20,1%).

## Was ändert sich am Tisch?

- **Mach aus „gepaartes Board heißt Check“ keine Regel.** Auf 6-6-3 sind es 3,0%, auf A-A-6 80,1%. Der Test ist nicht, ob das Board gepaart ist, und **auch nicht, wie viele Combos dieses Rangs du hältst** – auf 6-6-3 hielt der Big Blind die Sechsen dichter (5,3% gegen 4,0%) und bettete trotzdem nur 3,0%. Der Test ist, **ob deine Range *als Ganzes* besser ist als seine.** Die Bet erreichte hier 80%, weil Spitze und Rest **in dieselbe Richtung** kippten.
- **Mit zwei Assen auf dem Board halte dein Ass nicht für wertlos.** Wenn der Gegner A-K und A-Q 3-bettet, neigt sich das Kicker-Duell schon zu deinen Gunsten. **Das setzt allerdings voraus, dass er 3-bettet** – gegen einen Tisch, der mit A-K und A-Q immer nur callt, bricht die Prämisse zusammen; bette Trips mit schwachem Kicker also, aber halte dich aus einem großen Raise-Krieg heraus.
- **Kleine Size, hohe Frequenz.** Wenn die Range kontinuierlich verläuft, ist es besser, breit mit einem Drittel des Pots zu betten. Die große Size ist das Werkzeug für [eine Range, die in stark und schwach zerfällt](/de/blog/3bet-pot-low-board) – wobei selbst innerhalb der 3-Bet-Pots der Grund auf [einem Board voller Draws](/de/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-de.webp") ein anderer ist: Dort soll eine große Bet den Gegner bei einem schlechten Preis halten. **Beachte auch, dass 80,1% eine Heads-up-Berechnung sind** – ist mehr als ein Gegner noch dabei, kürze die Bets mit den verfehlten Händen deutlich und konzentriere dich auf Trips und Zwei Paare.
- **Bette K-K und Q-Q nicht, „weil sie stark sind“.** Auf diesem Board finden sie kaum einen Call von etwas Schlechterem. Besser ist es, zu checken und die Bluffs des Gegners zu fangen. ⚠ Das ist **ein Urteil, abgeleitet aus der Range-Zusammensetzung**, kein Wert, den diese Serie gemessen hat – der Lernspot zeigt nur die Frequenz der ersten Aktion am Flop, und für diesen Spot gibt es keinen Knoten nach einem Check (der einzige Check-dann-Bet-Knoten der Serie ist die Neuberechnung am [niedrigen Rainbow-Board](/de/blog/low-board-check-raise)). **Außerdem setzt es voraus, dass der Gegner Bluffs beimischt** – gegen jemanden, der fast nie blufft, ist eine Bet nach deinem Check meist ein Ass, und Folden ist besser, als dich festzubeißen.

:::readnext[Weiterlesen]
/de/blog/blind-battle-connected-board | 7-6-5: Die C-Bet fällt auf 9,6% | /images/gto-sb-connected-oop-de.webp
/de/blog/a-high-board-cbet | A-7-2: Top Pair und trotzdem Check | /images/gto-srp-dry-ace-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Board mit gepaartem Ass** → **⚡ Ergebnisse ansehen** – dort erscheint jede Zahl aus diesem Artikel. Willst du denselben Spot stattdessen als Aufgabe spielen, öffne den [GTO-Trainer](/de/solver) in der Seitenleiste: Er teilt dir eine zufällige Hand aus, und sobald du eine Aktion wählst, zeigt er die gemischte Frequenz und den **EV-Verlust (bb)** deiner Wahl. Ohne Login bleibt dein Verlauf auf diesem Gerät; mit Login kannst du den Verlauf aus Lernspots und täglichen Aufgaben im Konto speichern und auf anderen Geräten weiterführen.

**Klick dich im Wechsel mit dem gepaarten Board 6-6-3 durch.** Beides sind gepaarte Boards, und die Matrizen haben entgegengesetzte Farben. Arbeite die Lernspots einmal durch, und es bleibt eine Erkenntnis: Schau zuerst nicht darauf, **was für ein Board** es ist, sondern darauf, **an wessen Range dieses Board andockt**. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

**Q. Was sind Trips im Poker, und worin unterscheiden sie sich von einem Set?**

A. Trips entstehen, wenn das Board zwei Karten desselben Rangs zeigt und du eine weitere Karte dieses Rangs auf der Hand hältst. Auf A-A-6 zählen die meisten Hände mit einem einzelnen Ass dazu (**A-6 macht keine Trips, sondern ein Full House** – es paart zusätzlich die Sechs des Boards), und in diesem Spot sind das 88 Combos (17,5%) beim Small Blind und 66 (13,1%) beim Big Blind. Ein *Set* entsteht umgekehrt, aus einem Pocket Pair mit einer weiteren Karte dieses Rangs auf dem Board. Beachte, dass 6-6 hier mit der Sechs des Boards zwar ein Set macht, das Ass-Paar des Boards aber darüber liegt, also ist die fertige Hand ein **Full House**.

**Q. Wenn du auch mit Händen bettest, die verfehlt haben – ist das nicht Bluffen?**

A. Hand für Hand gesehen ja. Aber in GTO heißt Bluffen nicht „mit dieser Hand täusche ich“, sondern **„wie viel Prozent Bluffs stecken in meiner Range“.** Der Solver vergibt kein Bluff-Label an eine Hand; er legt **für jede Hand eine Frequenz** fest, und die Bet-Frequenz der Range ist einfach der Durchschnitt dieser Frequenzen über ihre Combos. Wenn 51,5% der gegnerischen Range verfehlt haben, findet eine kleine Bet reichlich, worauf sie drücken kann, und wenn sie diese Hände nicht zum Folden bringt, kassieren die 88 Combos Trips des Small Blinds. Wert und Bluff gehen mit derselben Size raus, also kann der Gegner sie nicht unterscheiden.

**Q. Wie wahrscheinlich ist es, dass der Gegner auf einem Board wie A-A-6 ein Ass hält?**

A. In diesem Spot sind es **72 der 505 Combos des Big Blinds (14,3%)** – 66 Combos Trips plus die 6 Combos A-6, die ein Full House machen. Mit A♠ und A♥ auf dem Board bleiben nur zwei Asse übrig, also ist es weniger, als es sich anfühlt. Der Small Blind hält dagegen **95 Combos (18,9%)**: 88 Trips, 6 A-6 und 1 A-A. Dasselbe Board gibt unterschiedliche Antworten, je nachdem, wer vor dem Flop angegriffen hat.

**Q. Welche Erkenntnis zieht sich durch diese Serie?**

A. Dass **„zuerst handeln ist ein Nachteil“ nur halb stimmt.** Der Big Blind als Caller bettete in den Spots ① bis ⑦ nur 0,1%–23,7%, aber vom selben Platz, der zuerst handelt, bettet der 3-Bettor im 3-Bet-Pot 98%–100%, und der Small Blind als Open-Raiser im Blind vs. Blind bewegt sich je nach Board zwischen 9,6% und 80,1%. Nicht der Platz, sondern **das Verhältnis von Range und Board** bestimmt die Frequenz. Alle diese Spots kannst du selbst in den Lernspots des [GTO-Solvers von HoldemMaster](/de/solver) durchklicken.
`.trim(),
};

export default POST;
