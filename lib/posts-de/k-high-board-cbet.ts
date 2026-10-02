import type { Post } from "../posts";

/**
 * GTO-Solver-Beispielserie Teil 2, deutsche Fassung: K♠8♦3♣, trockenes K-High-Board.
 * Quelle: lib/posts-en/k-high-board-cbet.ts (EN updated 2026-09-26) - Struktur, Zahlen und Hinweise 1:1.
 * Zahlen: Lernspot «Trockenes K-High-Board» (Solver-Ergebnis vom 2026-08-19), Spec §4-B.
 * Keyword-Pack: docs/keyword-bank/de-gto-series.md §5 Zeile 2 («trockenes K-High-Board», redaktioneller Longtail).
 * Grenzen: nur die erste Entscheidung des BB am Flop ist vorberechnet; BTN-C-Bet und BB-Reaktion sind Interpretation.
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 */
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "K-8-3: Der Big Blind checkt 99,8%",
  seoTitle: "Trockenes K-High-Board K-8-3: 99,8% Check im Big Blind",
  desc: "Auf K-8-3 checkt der Big Blind 99,8% – ein noch reinerer Range-Check als auf A-High. Eine fehlende Hand erklärt es, die Equity-Realisierung den Rest.",
  tldr: "Auf K♠8♦3♣ nach einem Open vom Button und einem Call des Big Blinds checkt der Big Blind 99,8% seiner Range – ein noch reinerer Range-Check als die 98,2% auf einem A-High-Flop. Zwei Dinge sind die Ursache: Der Big Blind hat hier kein Overpair, weil er AA preflop 3-bettet, und die Equity-Realisierung teilt sich 80,7% zu 116,7%.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "9 Min.",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster für den trockenen K-High-Flop K♠8♦3♣: Das 13×13-Raster des Big Blinds ist fast vollständig grün für Check",
  tags: ["k-8-3 flop", "trockenes k-high-board", "k-high flop", "range-check", "check-back-range", "backdoor-draw", "gto", "poker"],
  content: `
Der Flop kommt **K♠ 8♦ 3♣**, Rainbow. Du hältst K9 im Big Blind (BB) – Top Pair. Dass du die Ass-High-Version checkst, hast du schon gelernt. Ein König ist doch sicher etwas anderes?

Ist er. **Hier wird noch konsequenter gecheckt.** Der Big Blind checkt ==99,8%==, noch vollständiger als die 98,2% auf [dem A-High-Flop](/de/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-de.webp"). Beide Bet Sizes zusammen kommen auf 0,2% – eine Combo von 474.

Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster, abgelesen am 19.08.2026 aus dem Ergebnis des Lernspots.


:::stripe
Spot | BTN eröffnet auf 2,5bb → BB callt (Heads-up)
Flop | K♠ 8♦ 3♣ (Rainbow)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb
Ergebnis | BB checkt 99,8% – reiner als auf dem A-High-Flop
:::

> **Kurze Antwort**
> Checke alles und rechne damit, danach weit verteidigen zu müssen. Eine Combo von 474 spielt an (eine Donk Bet), also betrachte das Anspielen hier als nicht vorhanden. Zwei Dinge machen diesen Check reiner als auf dem A-High-Flop: Der Big Blind hat auf diesem Board **kein Overpair** – AA wird preflop ge-3-bettet –, und die Equity-Realisierung teilt sich **80,7% zu 116,7%**, obwohl die Equity fast ausgeglichen ist.

## Unter welchen Bedingungen sind diese Zahlen entstanden?

Der Button (BTN) eröffnet auf 2,5bb, der Big Blind callt, alle anderen folden – zwei Spieler, ein Pot von 5,5bb, 97,5bb dahinter. Die Ranges sind Näherungen des 100bb-Onlinestandards, der Flop ist K♠ 8♦ 3♣ mit drei verschiedenen Farben, und der Solver hat zwei Bet Sizes zur Verfügung, etwa ein Drittel und drei Viertel des Pots. Rake ist nicht berücksichtigt.

![Pokertisch mit Flop K♠8♦3♣: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-dry-king-scene-de.webp "K♠8♦3♣ · die Ausgangslage: BTN eröffnet, BB callt, der BB handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet auf 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen des 100bb-Onlinestandards |
| Flop | K♠ 8♦ 3♣, Rainbow (alle drei Farben verschieden) |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb |
| Bet Sizes | Etwa 33% und 75% des Pots |
| Rake | Nicht berücksichtigt |
| Geprüft | 19.08.2026, Ergebnis des Lernspots |

Der Pot beträgt ==2,5 Open + 2,5 Call + 0,5 des gefoldeten Small Blinds = 5,5bb==, und der effektive Stack ist 100bb minus das Open von 2,5bb.

## Wie oft checkt der Big Blind auf K-8-3?

**99,8%.** Die restlichen 0,2% teilen sich auf die beiden Bet Sizes auf.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **99,8%** | 473,0 |
| Bet 1,8bb (33% vom Pot) | 0,1% | 0,6 |
| Bet 4,1bb (75% vom Pot) | 0,1% | 0,4 |

Eine Combo von 474 – eher ein Rundungsartefakt als eine Strategie. **Auf einem trockenen K-High-Flop hat der Big Blind überhaupt kein Anspielen**, und in der Praxis verlierst du nichts, wenn du es so behandelst.

## Warum checkt der Big Blind auf K-8-3 noch öfter als auf A-7-2?

**Weil der Big Blind hier kein Overpair hat – und es auf dem A-High-Flop gar kein Overpair zu halten gibt.** Auf K-8-3 ist AA das einzige Pocket Pair über dem Board – und AA 3-bettet der Big Blind preflop, also kommt es hier nie an. Overpairs: **0,0% beim Big Blind, 1,3% beim Button.**

Auf A-7-2 gibt es diese Spalte für niemanden: Über einem Ass liegt nichts. Beiden Ranges fehlt also dasselbe, und ihre Obergrenzen sehen ähnlich aus. Auf einem K-High-Board gehört die Obergrenze einem einzigen Spieler.

Die Sets sagen dasselbe. Die Pocket Pairs, die hier ein Set floppen, sind KK, 88 und 33 – und **der Big Blind hat nur 88 und 33.**

| Pocket Pair, das ein Set floppt | BB | BTN |
|---|---|---|
| KK | ❌ (wird preflop ge-3-bettet) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Anteil an der Range** | **1,3%** | **1,9%** |

Die Zählung der Hände passt exakt zum Solver. Der Big Blind hat 88 und 33 mit je drei Combos – sechs von 474, also 1,27%. Der Button hat zusätzlich KK und kommt auf neun von 480, also 1,88%.

## Wie unterscheiden sich die beiden Ranges?

**Die starken Kategorien liegen beim Button (in Position, IP), die schwachen beim Big Blind (out of position, OOP).** Nebeneinander ist der Unterschied offensichtlich.

![Infografik zur Range-Zusammensetzung: Handkategorien von Big Blind und Button auf einem trockenen K-High-Board, grüne und goldene Balken nebeneinander](/images/gto-srp-dry-king-ranges-de.webp "K♠8♦3♣ · Verteilung der Kategorien – die Spitze der Range gehört dem Button")

| Kategorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Drilling – hier immer ein Set | 1,3% | **1,9%** |
| Zwei Paare | **0,8%** | 0,4% |
| Overpair | 0,0% | **1,3%** |
| Top Pair (K) | 12,7% | **14,4%** |
| Second Pair (8) | **10,8%** | 10,0% |
| Weak Pair | **3,2%** | 2,5% |
| Underpair | 8,9% | **11,3%** |
| A-High | 27,0% | **30,0%** |
| Keine Made Hand | **35,4%** | 28,3% |

Lies die Tabelle von oben nach unten. **Jede Kategorie an der Spitze der Range – Sets, Overpairs, Top Pair – gehört dem Button, und die schwächste, keine Made Hand, wiegt beim Big Blind 7,1 Prozentpunkte mehr.** Vorne liegt der Big Blind bei Zwei Paaren, Second Pair und Weak Pair. **Zwei Paare sind auf diesem Board die zweitbeste Kategorie**, noch vor einem Overpair, und der Big Blind hat doppelt so viel davon – aber 0,8% von 474 Combos sind **vier Hände.** Sie tragen die Range nicht, weil es davon so gut wie nichts gibt, nicht weil sie schwach wären. Die anderen beiden sind tatsächlich nur Mittelmaß. Mit einer so geformten Range zuerst zu betten heißt: Deine schwache Hälfte bezahlt die starke Hälfte des Gegners aus.

## Warum ist fast ein Drittel beider Ranges A-High?

**Das passiert auf jedem Board ohne Ass.** A-High macht 27,0% der Range des Big Blinds aus und 30,0% der Range des Buttons, also jeweils fast ein Drittel. Auf A-7-2 gibt es diese Gruppe nicht, weil jedes Ass dort sofort Top Pair ist. Der Kontrast lautet also nicht „K-High gegen alles andere“, sondern **„Boards mit Ass gegen Boards ohne Ass“** – auf dem 8-5-2-Flop später in dieser Serie, gelöst mit einer 3-Bet-Range, steigt A-High auf **48,2%**.

Genau diese Gruppe macht den Flop interessant. AQ und AJ haben kein Paar, schlagen aber jede Hand in der Spalte „keine Made Hand“ des Gegners, haben also Showdown Value. Am Button sind sie keine automatischen Continuation Bets (C-Bets): Einen Teil der Zeit checken sie zurück und nehmen den kostenlosen Showdown mit.

Das beste A-High des Big Blinds ist hier AJ – sein AQ 3-bettet er preflop –, und dieses AJ ist weniger wert, als es am Button wäre, weil es ohne Position schwerer ist, bis zum Showdown zu kommen. **Ähnliche Karten, je nach Platz ein anderer Wert** – und genau das misst der nächste Abschnitt.

## Warum steht die EQR bei 81 zu 117, wenn die Equity 46 zu 54 beträgt?

**Equity ist, wie oft du den Pot gewinnst; Equity-Realisierung ist, wie viel davon du tatsächlich einsammelst.** Das ist nicht dieselbe Zahl.

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,3% | 53,7% |
| EV (bb) | 2,06 | 3,44 |
| **Equity-Realisierung (EQR)** | **80,7%** | **116,7%** |

Die Rechnung: Der Pot beträgt 5,5bb, also liegt der Equity-Anteil des Big Blinds bei ==5,5 × 46,3% = 2,55bb==, sein tatsächlicher Erwartungswert (EV) aber bei 2,06bb – dieses Verhältnis sind die 80,7%. Der Anteil des Buttons liegt bei 2,95bb gegenüber einem EV von 3,44bb, deshalb landet er über 100%.

:::note[Die EQR-Werte in dieser Serie sind die, die auf dem Bildschirm des Solvers stehen. Rechnest du sie aus der gerundeten Equity und dem gerundeten EV desselben Bildschirms nach, kannst du um ein Zehntel Prozentpunkt danebenliegen – das ist Rundung, kein Widerspruch.]:::

Der A-High-Flop lag bei 84,0% zu 113,1%. **Dieselbe trockene Textur, eine größere Lücke auf dem K-Board.** Aber nicht, weil dieses Board *ruhiger* wäre – die beiden größten EQR-Lücken dieser Serie gehören Boards voller Draws: dem [Two-Tone-Flop Q-J-T](/de/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-de.webp") mit 41,5 Prozentpunkten und dem 3-Bet-Pot auf Q-T-7 mit 42,7. Was die Lücke hier öffnet, ist **eine einzige Spalte ganz oben** – auf A-7-2 hat keiner der beiden ein Overpair, auf K-8-3 hat der Button 1,3% und der Big Blind keines. Warum der Platz selbst so viel wert ist, erklärt [Spielen mit Position](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Gibt es auf K-8-3 wirklich keine Draws?

**Überhaupt keine.** K, 8 und 3 haben drei verschiedene Farben und liegen zu weit auseinander, um sich zu verbinden, also gibt es für keinen der beiden einen Flushdraw und keinen beidseitigen Straßendraw (OESD) – **und auch keinen Gutshot.** Ein Straßendraw am Flop braucht zwei Boardkarten innerhalb einer Folge von fünf Rängen, weil du selbst nur zwei Karten hältst, und von K bis 8 sind es fünf Ränge Abstand, ebenso von 8 bis 3. Keine solche Folge enthält zwei davon.

| Draw | BB | BTN |
|---|---|---|
| Backdoor-Flushdraw (braucht noch zwei Karten einer Farbe) | 27,8% | 22,3% |
| Kein Draw | **72,2%** | **77,7%** |

Übrig bleiben Backdoors. Der **Backdoor-Flushdraw**, den die Tabelle zählt, braucht Turn *und* River in derselben Farbe, deshalb kommt er nur in ==10/47 × 9/46 = etwa 4,2%== der Fälle an. Die Tabelle zählt sie nicht, aber es gibt auch **Backdoor-Straßendraws** – QJ, JT und T9 über den König des Boards, 67 und 65 über die Acht, 54 über die Drei. Das zählt trotzdem: Wenn du Bluffs auswählen musst, **schlägt eine Hand mit Backdoor eine Hand mit nichts**, denn bringt der Turn diese Farbe, hältst du einen echten Draw und einen Grund, noch einmal zu feuern – die Grundlage für eine Delayed C-Bet am Turn.

## Solltest du auf einem K-High-Flop immer c-betten?

**Mit kleiner Size fast, aber „immer“ ist für eine Gruppe von Händen das falsche Wort.** Der Big Blind hat 35,4% ohne Made Hand – das Drittel der Range, das am ehesten foldet, auch wenn es nicht komplett folden kann: Gegen eine Bet von einem Drittel des Pots behält eine ausgeglichene Verteidigung etwa 75% der Range (Mindestverteidigungsfrequenz, MDF), also gehen einige dieser Hände trotzdem weiter. (Die Reaktion des Big Blinds liefert diese Berechnung nicht.) Und **72,2% der gesamten Range haben keinen Draw** – achte auf den Nenner: Diese Zahl zählt die ganze Range, Top Pair (12,7%), Second Pair (10,8%) und Sets eingeschlossen, ist also keine Teilmenge des Blocks ohne Made Hand. Sie bedeutet, dass sich das Bild auf späteren Streets wahrscheinlich nicht ändert. Mit dem größten Teil deiner Range etwa ein Drittel des Pots zu betten, ist der Standard.

Der gängige Rat lautet, dass A-High-Hände mit Showdown Value zurückchecken sollten. Auf diesem Board ist das **halb richtig**. Mit kleiner Size mischen AQ und AJ oft genug Bets ein – sie bringen Hände wie QJ, JT und T9 zum Folden, die zwei lebende Karten, aber kein Paar halten, und ein Ass auf einer späteren Street gibt ihnen das beste Paar auf dem Board. Checken kostet sie aber auch wenig, deshalb besteht die **Check-back-Range** hier zu einem großen Teil aus ihnen. Weder „immer betten“ noch „immer zurückchecken“ ist richtig; die Frequenz ist die Antwort.

:::note[⚠ Dieser Abschnitt interpretiert die Range-Zusammensetzung; er zeigt keine vom Solver berechnete Frequenz. Der Lernspot berechnet nur die erste Aktion am Flop vor – die des Big Blinds –, deshalb steht die exakte C-Bet-Frequenz des Buttons nicht auf diesem Bildschirm. Öffne „Diesen Spot selbst berechnen“ und lass den Spielbaum durchrechnen, um sie zu bekommen.]:::

## Was ändert sich am Tisch?

- **Hast du heads-up einen Raise gecallt und kommt ein trockener K-High-Flop, ist Anspielen keine Option.** Auch nicht mit einem König. Die Range-Check-Logik vom A-High-Flop gilt hier stärker, nicht schwächer. Die Bedingung ist aber die **Form deiner Range**, nicht die Form des Boards – wo die Spitze deiner Range dicker ist als die des Gegners, spielt der Big Blind sehr wohl an. Das Gegenbeispiel ist der [9-8-7-Flop](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp"), auf dem der Big Blind in **23,7%** der Fälle anspielt.
- **Checken ist nicht Check-Fold.** Gegen die kleine C-Bet geht der Big Blind weit mit – jeder König, die Achten, die Underpairs, A-High mit Backdoor. Top Pair ist ein Call; für Check-Raises bieten sich vor allem 88, 33 und die Zwei Paare an (die Reaktion auf die C-Bet liefert diese Berechnung nicht).
- **Gib AQ und AJ am Button keine feste Behandlung.** Klein betten und zurückchecken sind beide vertretbar; passe den Mix daran an, ob dieser Gegner Overcards tatsächlich foldet.
- **Lies den Check nicht als Schwäche – gegen einen ausgeglichenen Gegner.** Diese Check-Range enthält immer noch die Sets (88, 33) und 12,7% Top Pair. Bei niedrigen Limits ist oft das Gegenteil wahr, weil viele Spieler ihre starken Hände einfach anspielen – also bette weiter auf Value und betrachte den Check-Raise als gelegentliche Kosten.

:::readnext[Weiterlesen]
/de/blog/a-high-board-cbet | A-7-2: Top Pair und trotzdem Check | /images/gto-srp-dry-ace-oop-de.webp
/de/blog/holdem-continuation-bet | Continuation Bet (C-Bet): Wann du am Flop feuerst, wie viel und wann du checkst | /images/holdem-continuation-bet-hero.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Trockenes K-High-Board** → **⚡ Ergebnisse ansehen** – dieser Bildschirm erscheint ohne Wartezeit. Stell danach die Auswahl **Spieler:** auf **IP (BTN (Open-Raiser))** – die Tabelle zur Range-Zusammensetzung oben ist direkt aus diesem Panel abgelesen, und der Vergleich beider Seiten ist der schnellste Weg zu sehen, warum eine von ihnen nicht betten kann.

Wenn du den Spot trainieren statt nur lesen willst, öffne den **GTO-Trainer** in der Seitenleiste: Er teilt dir eine Hand nach den echten Range-Gewichten aus, du wählst eine Aktion, und er zeigt dir, wie viele Big Blinds dich diese Entscheidung kostet. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

## FAQ

**Q. Warum bettet der Big Blind auf K-8-3 so gut wie nie?**

A. Weil die stärksten Hände, die dieses Board zulässt, in der Calling-Range fehlen: Das höchste Set (KK) und das einzige Overpair (AA) sind beide nicht dabei, während sich Hände ohne Made Hand auf 35,4% stapeln. Der Big Blind hat zwar Sets mit 88 und 33 und ein paar Zwei Paare, aber nicht genug davon, um ein Anspielen zu tragen. Wer mit einer so geformten Range anspielt, baut einen Pot, den jemand anderes gewinnt. Der Solver checkt 99,8%.

**Q. Was ist für den Big Blind schlimmer, ein A-High-Flop oder ein K-High-Flop?**

A. K-High. Die Equity ist sogar höher – 46,3% gegenüber 45,1% auf A-7-2 –, aber die Equity-Realisierung ist niedriger, 80,7% gegenüber 84,0%. Der Big Blind gewinnt den Pot hier öfter und sammelt weniger davon ein.

**Q. Was ist eine Check-back-Range?**

A. Die Hände, die der Spieler in Position bewusst nicht bettet – um einen kostenlosen Showdown zu sehen oder damit seine Check-Range nicht nur aus Schwäche besteht. Auf diesem Flop besteht sie zu einem großen Teil aus A-High-Händen wie AQ und AJ, die die Luft des Gegners schlagen, durch eine Bet aber wenig gewinnen.

**Q. Wie viel ist ein Backdoor-Flushdraw wert?**

A. Etwa 4,2%, dass er vom Flop aus ankommt – für sich allein also kein Grund zu callen. Sein Wert liegt in der Bluff-Auswahl: Eine Hand, die am Turn einen echten Draw dazubekommt, gibt dir einen Grund weiterzubetten – genau daher kommen Delayed C-Bets.

**Q. Kann ich diese Zahlen bei jedem Limit verwenden?**

A. Als Ausgangspunkt, wenn die Bedingungen passen: Heads-up, 100bb, Standard-Ranges für Open und Call, kein Rake. Auf diesem Board solltest du vor allem die Position des Openers im Blick behalten – kam der Raise aus Under the Gun statt vom Button, hält diese Range noch mehr Könige und Asse, und die Lage des Big Blinds ist schlechter als hier gezeigt.
`.trim(),
};

export default POST;
