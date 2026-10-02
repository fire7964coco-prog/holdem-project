import type { Post } from "../posts";

/**
 * GTO-Solver-Beispielserie Teil 6, deutsche Fassung: 6♣6♦3♥, niedriges gepaartes Board.
 * Quelle: lib/posts-en/paired-board-strategy.ts (EN updated 2026-09-26) - Struktur, Zahlen und Hinweise 1:1.
 * Zahlen: Lernspot «Gepaartes Board» (Solver-Ergebnis vom 2026-08-20), Spec §4-B / §4-B-2.
 * Vertrag: docs/de-gto-source-contract.md §4 Zeile 6 · Brief: docs/de-gto-series-translation-brief.md
 * Keyword-Pack: docs/keyword-bank/de-gto-series.md §5 Zeile 6 («gepaartes Board 6-6-3», redaktioneller Longtail).
 * Begriffe: Trips = eine Sechs auf der Hand + Paar auf dem Board; Set = Pocket Pair + Boardkarte; App-Zeile «Set/Drilling» wörtlich.
 * Grenzen: nur die erste Entscheidung des BB am Flop ist vorberechnet; keine BB-Reaktion auf eine Bet, kein Check-Raise-EV, ohne Rake.
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "6-6-3: Mehr Trips, trotzdem 97% Check",
  seoTitle: "Gepaartes Board 6-6-3: Mehr Trips, trotzdem 97% Check",
  desc: "Auf 6-6-3 hält der Caller mehr Trips als der Raiser – 26 Combos gegen 20 – und checkt trotzdem 97%. Was ein gepaartes Board wirklich belohnt.",
  tldr: "Auf dem niedrigen gepaarten Flop 6♣6♦3♥ checkt der Big Blind 97,0%. Das Seltsame daran: Er hält mehr Trips als der Button – 26 Combos mit einer Sechs gegen 20. Er checkt trotzdem, weil nur 18,4% seiner Range mehr als das Paar des Boards haben, und die übrigen 81,6% sind ein Duell der hohen Karten, das der Button gewinnt. Was wirklich an Wert gewinnt, ist jedes Pocket Pair über einer Sechs – TT hat hier 76,0% Equity.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-de.webp",
  imageAlt: "Ergebnis des HoldemMaster-GTO-Solvers für den gepaarten Flop 6♣6♦3♥: Das 13×13-Raster des Big Blinds ist fast vollständig grün für Check, im Panel stehen die Zeilen Vierling 0,2% und Full House 0,6%",
  tags: ["6-6-3 flop", "gepaartes board 6-6-3", "trips vs set", "pocket pairs gepaartes board", "mindestverteidigungsfrequenz", "gto", "poker"],
  content: `
Der Flop kommt **6♣ 6♦ 3♥** – niedrige Karten, und darunter ein Paar. Es sieht aus wie ein Board, das niemand getroffen hat.

Hältst du dort TT, liegt deine Equity bei **76,0%**. Dasselbe TT hat preflop gegen AK rund 54–57%, dieser Flop ist für TT also *besser* als der übliche Coinflip. Hältst du A9, hast du nichts – aber vier Fünftel der Range deines Gegners haben auch nichts außer dem Paar des Boards, und wer sofort foldet, wirft den Pot weg.

**Ein Board, das niemand getroffen hat, ist in Wahrheit ein Duell darum, wessen hohe Karten besser sind.** Auf dem [A-High-Flop](/de/blog/a-high-board-cbet) und dem [K-High-Flop](/de/blog/k-high-board-cbet) ging es darum, wer getroffen hat; hier kämpfen zwei Ranges gegeneinander, die größtenteils nicht getroffen haben. Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster.


:::stripe
Spot | BTN eröffnet auf 2,5bb → BB callt (Heads-up)
Flop | 6♣ 6♦ 3♥ (niedriges gepaartes Board)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb
Ergebnis | BB checkt 97,0% – obwohl er mehr Trips hält
:::

> **Kurze Antwort**
> Checke fast alles – und verteidige deutlich weiter, als es sich richtig anfühlt. Eine Sechs auf der Hand ist kein Grund anzuspielen: Ein Lead bringt nur Hände zum Folden, die du ohnehin schlägst, also bleiben die Sechsen in der Checking-Range, und der Big Blind checkt hier **97,0%**. Wirklich an Wert gewinnen auf diesem Flop die Pocket Pairs über einer Sechs, und aufhören zu folden solltest du mit A-High und den besseren K-High-Händen.

## Unter welchen Bedingungen entstanden diese Zahlen?

Der Button (BTN) eröffnet auf 2,5bb, der Big Blind (BB) callt, alle anderen folden – zwei Spieler, ein Pot von 5,5bb, 97,5bb dahinter, die üblichen Näherungen für 100bb-Onlinespiel, zwei Bet Sizes zur Auswahl mit etwa einem Drittel und drei Vierteln des Pots, Rake nicht berücksichtigt. Ändern sich die Ranges oder das Sizing, ändern sich die Frequenzen mit.

![Pokertisch mit Flop 6♣6♦3♥: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-paired-scene-de.webp "6♣6♦3♥ · BTN eröffnet auf 2,5bb, SB foldet, BB callt – der Big Blind handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet auf 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen des 100bb-Onlinestandards |
| Flop | 6♣ 6♦ 3♥ (gepaartes Board, drei verschiedene Farben) |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb |
| Bet Sizes | Etwa 33% und 75% des Pots |
| Rake | Nicht berücksichtigt |
| Geprüft | 20.08.2026, Ergebnis des Lernspots |

## Trips oder Set – auf einem gepaarten Board sind es Trips

**Ein Set ist ein Pocket Pair, das zu einer Boardkarte passt; Trips sind eine Karte auf deiner Hand, die zu einem Paar auf dem Board passt.** Beides ist derselbe Rang – ein Drilling (Three of a Kind), in der [Reihenfolge der Pokerhände](/de/blog/holdem-hand-rankings) unter einem Eintrag geführt –, aber die beiden spielen sich völlig unterschiedlich.

Jeder andere Single-Raised-Flop dieser Serie hat Sets hervorgebracht (das einzige andere gepaarte Board, A♠A♥6♦, kommt später in der Blind-vs.-Blind-Gruppe): Auf A-7-2 brauchte der Big Blind 77 oder 22 auf der Hand. Hier bringt das Board sein eigenes Paar mit, also **macht jede einzelne Sechs Trips**, und nur 66 als Pocket Pair macht einen Vierling.

| Deine Hand auf 6♣6♦3♥ | Was du hast |
|---|---|
| A6, K6s, 96s … jede einzelne Sechs | **Trips** – drei Sechsen |
| 66 | **Vierling** |
| 33 | **Full House** – Dreien voll mit Sechsen |
| TT, 99, 88, 77 … | **Zwei Paare** – dein Paar plus die Sechsen des Boards |

Der Unterschied zählt, weil Trips weit häufiger sind als ein Set und **dein Gegner sie genauso leicht halten kann.** Ein Set ist selten und meist die beste Hand; Trips auf einem gepaarten Board sind geteiltes Terrain – genau deshalb behandelt der Poker-Solver sie nicht als Freibrief zum Betten.

## Wie spielt der Big Blind ein niedriges gepaartes Board?

**Check 97,0%.** Auf 6♣6♦3♥ spielt der Big Blind insgesamt nur in 3,0% der Fälle an – 2,0% mit 4,1bb und 1,0% mit 1,8bb – und gibt die Initiative sofort an den Spieler zurück, der eröffnet hat. Einen zweiten Blick wert ist, welche der beiden Sizes er wählt, wenn er doch bettet, denn das ist der eine Flop der Serie, auf dem sich die Antwort umdreht.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **97,0%** | 471,7 |
| Bet 4,1bb (75% vom Pot) | **2,0%** | 9,6 |
| Bet 1,8bb (33% vom Pot) | 1,0% | 4,7 |

**Die große Bet kommt häufiger vor als die kleine** – zum ersten Mal in dieser Serie. Auf den beiden Boards, auf denen das Anspielen tatsächlich eine Rolle spielte, lag die kleine Size mit mehr als zwei zu eins vorn: 16,8% gegen 6,9% auf [dem 9-8-7-Donk-Bet-Spot](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp"), 8,0% gegen 3,2% auf dem [monotonen Flop](/de/blog/monotone-board-strategy). Hier kehrt sich das um, und die Tabelle pro Hand weiter unten zeigt, warum.

## Warum checkt der Big Blind, obwohl er mehr Trips hält?

**Weil Trips nur 5,3% der Range ausmachen.** Die übrigen 94,7% sind größtenteils das eigene Sechserpaar des Boards plus eine hohe Karte – und auf dieser Achse liegt der Button vorn.

Zuerst die Zählung. Mit 6♣ und 6♦ auf dem Board bleiben nur 6♠ und 6♥ übrig – jede *suited* 6x-Hand besteht also aus zwei Combos, A6 offsuit aus sechs. Die ganze Kategorie läuft über nur zwei Karten.

| 6x-Hand | BB (Calling-Range) | BTN (Opening-Range) |
|---|---|---|
| A6 (suited + offsuit) | ✅ 8 Combos | ✅ 8 Combos |
| K6s · Q6s | ✅ 4 Combos | ✅ 4 Combos |
| **J6s · T6s · 96s** | ✅ **6 Combos** | ❌ nicht in der Opening-Range |
| 86s · 76s · 65s · 64s | ✅ 8 Combos | ✅ 8 Combos |
| **Gesamt** | **26 Combos = 5,3%** | **20 Combos = 4,0%** |

**Der Unterschied sind J6s, T6s und 96s – sechs Combos.** Der Big Blind verteidigt sie günstig; der Button eröffnet sie nie.

Jetzt weite den Blick, und das Bild dreht sich.

![Infografik zur Range-Zusammensetzung: Handkategorien von Big Blind und Button auf einem niedrigen gepaarten Board im Vergleich, grüne und goldene Balken nebeneinander](/images/gto-srp-paired-ranges-de.webp "6♣6♦3♥ · Kategorien im Vergleich – Trips sprechen für den Caller, Zwei Paare und A-High für den Opener")

| Kategorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Vierling (66) | 0,2% | 0,2% |
| Full House (33) | 0,6% | 0,6% |
| Set/Drilling – hier immer Trips (eine Sechs) | **5,3%** | 4,0% |
| Zwei Paare | 12,3% | **15,5%** |
| A-High | 26,3% | **31,9%** |
| K-High | **16,5%** | 15,1% |
| Keine Made Hand | **38,7%** | 32,7% |

**Alles, was über das eigene Paar des Boards hinausgeht, macht beim Big Blind 18,4% aus und beim Button 20,3%.** Die übrigen **81,6%** der Big-Blind-Range sind das Sechserpaar des Boards plus eine hohe Karte – und dieses Duell gewinnt der Button, sein A-High-Anteil liegt bei 31,9% gegen 26,3%.

Ein Lead scheitert hier von beiden Enden: Mit einer Sechs bringst du nur die Hände zum Folden, die du ohnehin schlägst, und mit allem anderen zeigst du eine Range, die keinen Raise aushält. Also bleiben die Sechsen stattdessen in der Checking-Range.

## Equity 47 zu 53 – warum steht die EQR dann bei 84 zu 115?

**Weil das Board beide Ranges auf dieselbe Weise trifft, die beiden Spieler ihren Anteil aber nicht auf dieselbe Weise einsammeln.** Auf 6-6-3 hält fast jeder das Sechserpaar des Boards und sonst nichts, deshalb liegt die rohe Equity nah beieinander. Was jede Seite tatsächlich einfährt, liegt überhaupt nicht nah beieinander.

| Kennzahl | Big Blind (OOP) | Button (IP) |
|---|---|---|
| Equity | 47,2% | 52,8% |
| EV (bb) | 2,17 | 3,33 |
| **Equity-Realisierung (EQR)** | **83,7%** | **114,5%** |

Der Anteil des Big Blinds am Pot beträgt ==5,5 × 47,2% = 2,60bb==, und er verbucht 2,17bb – ==2,17 ÷ 2,60 ≈ 83,7%==. Der Anteil des Buttons liegt bei 2,90bb gegenüber einem Erwartungswert (EV) von 3,33bb, er sammelt also **114,5%** ein – mehr, als seine Gewinnwahrscheinlichkeit wert ist.

Die Lücke von **30,8 Prozentpunkten** entspricht fast genau den 29,1 Punkten des [trockenen A-High-Boards](/de/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-de.webp"). **Ein gepaartes Board spielt sich wie ein trockenes** – in beiden Ranges sind vier von fünf Händen dasselbe Sechserpaar mit einer anderen hohen Karte, die Hand verläuft also ruhig, und der Spieler, der zuletzt handelt, sieht, welche hohe Karte aufgetaucht ist, bevor er sich entscheidet. Dieser Vorteil ist die ganze Lücke.

:::note[Jede EQR in dieser Serie ist der Wert, den der GTO-Solver anzeigt. Teilst du die gerundete Equity und den gerundeten EV selbst, landest du innerhalb eines Zehntelpunkts daneben – das ist Rundung, kein Widerspruch.]:::

## Wie stark sind Pocket Pairs auf 6-6-3?

**Fast jedes Pocket Pair ist hier Zwei Paare.** TT macht T-T-6-6-3. Aus dem Muster fallen nur die beiden, die zum Board passen: 66 ist ein Vierling, 33 ein Full House.

| Hand | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76,0% | 6,66 | 159,4% | 97,7% |
| 99 | 72,6% | 5,68 | 142,4% | 96,1% |
| 88 | 69,9% | 4,96 | 128,9% | 94,8% |
| 77 | 68,5% | 4,63 | 123,0% | 94,7% |
| 55 | 63,7% | 3,82 | 108,9% | 93,8% |
| 44 | 61,8% | 3,42 | 100,5% | 93,9% |
| 22 | 50,4% | 1,83 | 66,0% | 95,8% |

(Durchschnitt über die sechs Combos jeder Hand; einzelne Combos weichen um etwa einen Zehntelpunkt ab.)

**TT mit 76,0% ist die Spitze der Big-Blind-Range**, sobald du die Sechsen, 33 und 66 beiseitelässt – denn JJ und besser werden preflop ge-3-bettet und sehen diesen Flop nie.

**Aber nach unten bricht es ein.** 44 realisiert genau seinen Equity-Anteil – EQR 100,5% – und macht trotzdem 3,42bb gegenüber dem Range-Durchschnitt von 2,17bb, ist also keine Grenzhand. 22 ist die Hand, die bricht: 50,4% Equity, EQR 66,0%, 1,83bb.

**Die Trennlinie ist die Drei, nicht die Sechs.** 55 und 44 liegen beide unter der Sechs und realisieren trotzdem ihren vollen Anteil. Eine Zwei liegt unter *beiden* Rängen des Boards, also verliert 22 gegen 33, gegen jede Hand mit einer Drei, und eine zweite Drei am Turn oder River entwertet es (Counterfeit), sodass du nur noch das Board spielst – auf 6-6-3-3-K ist 22 bloß das Zwei-Paar des Boards (nur eine Zwei auf der anderen Street rettet es). Die Regel, die wirklich hält, lautet nicht „kleine Paare sind auf niedrigen Boards in Ordnung“, sondern **„jedes Paar über der Drei ist in Ordnung – nur die Zweien brechen ein.“**

Eine weitere Gruppe zählt als Zwei Paare, und sie wird leicht übersehen: **jede Hand mit einer Drei.** A3 spielt als Sechsen und Dreien mit einem Ass – das schlägt 22 und verliert gegen jedes Paar über der Drei.

## Wie viele Vierlinge und Full Houses gibt es hier wirklich?

**Eine Combo Vierling, drei Combos Full House.** Du kannst beides von Hand zählen.

- **Vierling (66)** – mit 6♣ und 6♦ auf dem Board bleibt als einzige Kombination ==6♠6♥==. 0,2% von 486 Combos sind 1,0 – und die Tabelle pro Hand hat genau eine Zeile.
- **Full House (33)** – mit 3♥ auf dem Board bleiben ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0,6% × 486 = 2,9.

Auch 63 macht ein Full House, aber weder 63 suited noch 63 offsuit ist in einer der beiden Ranges, **also ist 33 die gesamte Full-House-Kategorie** auf diesem Flop.

Diese vier Combos erklären, warum sich gepaarte Boards gefährlich anfühlen. Öffne die Detailtabelle und lies die Spalte EQR: 6♠6♥ realisiert **359,7%** seines Equity-Anteils (19,78bb EV), und die drei 33 kommen auf **309,8%, 309,8% und 309,5%** – das Drei- bis Vierfache ihres Anteils am Pot. Selten – aber wenn eine davon trifft, gehen die Stacks rein.

## Warum ist die große Bet häufiger als die kleine?

**Weil Trips und Vierling die große Size wählen, wenn sie überhaupt betten.** Hand für Hand:

| Hand | Bet 4,1bb (75% vom Pot) | Bet 1,8bb (33% vom Pot) | Check |
|---|---|---|---|
| K♠6♠ | **7,8%** | 0,3% | 92,0% |
| Q♥6♥ | **7,9%** | 0,7% | 91,5% |
| J♥6♥ | **9,0%** | 3,3% | 87,7% |
| 6♠6♥ (Vierling) | **9,6%** | 0,0% | 90,4% |
| T♠T♥ (Zwei Paare) | 0,8% | 1,7% | 97,5% |

Trips und Vierling nehmen gelegentlich auch die kleine Size – K♠6♠ 0,3%, Q♥6♥ 0,7%, J♥6♥ 3,3% –, aber die große Size liegt um ein Mehrfaches darüber. Die einzige Zeile mit glatten 0,0% ist 6♠6♥, und **das ist ein Vierling, keine Trips.** Zwei Paare wie TT betten kaum, und wenn doch, dann klein.

Es kommt darauf an, womit der Gegner callen kann. Eine Sechs ist hier kaum zu schlagen, es geht also darum, einen Pot aufzubauen – und weil die meisten Sechsen ohnehin checken, **haben die wenigen, die betten, jeden Grund, groß zu gehen.** Zwei Paare liegen hinter jeder Sechs und allen drei 33, sie haben also kein Interesse an einem großen Pot. Die Klasse, die einen großen Pot will, verweigert die kleine Size; die Klasse, die nur einen Call will, verweigert die große.

⚠ **Lies das nicht als „je besser der Kicker, desto größer die Bet“ – die Tabelle läuft andersherum.** Die Frequenz der großen Bet verläuft K♠6♠ 7,8% < Q♥6♥ 7,9% < **J♥6♥ 9,0%**: Der schwächste Kicker bettet am meisten. Trips-Blocker erklären es auch nicht. Welche Sechs du auch hältst, sie entfernt die Trips des Buttons in ihrer eigenen Farbe – K♠6♠, Q♥6♥ und J♥6♥ lassen dem Button jeweils genau 10 seiner 20 –, und der Kicker entfernt nichts weiter, weil der Button K6 und Q6 nur suited eröffnet und deine Sechs diese Farbe schon belegt hat. Die Tabelle zeigt den berechneten Mix; die Ursache einer so kleinen Lücke isoliert sie nicht.

Und die Sechsen machen nicht den Großteil der großen Bets aus. Sie sind 26 von 486 Combos und tragen etwa 1,2 der rund 9,6 Combos mit großer Bet bei – etwa ein Achtel (13,0%). Der größte Teil des Rests kommt von Händen ganz ohne Sechs.

Der Big Blind spielt nur in 3,0% der Fälle an, am Tisch wirst du das also selten erleben. Als saubere Demonstration eines Prinzips taugt es trotzdem: **Die Size wird von der Range gewählt, nicht von der Hand.**

## Solltest du A-High gegen eine [Continuation Bet (C-Bet)](/de/blog/holdem-continuation-bet) folden?

**Viel seltener, als es sich anfühlt.** Nur 18,4% deiner Range haben mehr als das Paar des Boards, wer also alles andere foldet, verschenkt den Pot.

Gegen eine Bet von 1,8bb in einen Pot von 5,5bb musst du ungefähr ==5,5 ÷ (5,5 + 1,8) = 75,3%== der Zeit weitermachen, damit ein reiner Bluff keinen Gewinn macht. Diese Schätzung heißt **Mindestverteidigungsfrequenz (MDF)**.

Rechnest du jedes A-High (26,3%) und jedes K-High (16,5%) zu diesen 18,4% dazu, kommst du erst auf **61,2%** – unter 75,3%.

⚠ **Spring von dort nicht zu „also musst du mehr verteidigen“.** Die MDF behandelt die Bet des Gegners als reinen Bluff ohne Equity, aber ein Bluff am Flop hat noch zwei Streets vor sich, er hat also durchaus Equity. Und der Spieler out of position realisiert seine Equity schlecht. ⚠ Was dieser Lernspot dir nicht sagen kann, ist, wo das echte Optimum liegt: Er ist **nur bis zur ersten Aktion am Flop** berechnet, die Reaktion des Big Blinds auf eine Bet ist also nicht enthalten, und ob die optimale Verteidigung über oder unter der MDF liegt, **lässt sich aus diesem Material nicht ablesen.**

Wofür diese Rechnung also taugt, ist nicht „triff die 75%“, sondern **„folde nicht wegen einer einzigen hohen Karte“.** Viele der A-High- und K-High-Hände sind hier weiterhin Calls, und sie alle gegen eine einzige kleine C-Bet zu folden, ist genau die Gewohnheit, die ausgenutzt wird.

(Auf einem gepaarten Board hat niemand wörtlich nur A-High: Du hältst immer das Sechserpaar des Boards. „A-High“ heißt hier dieses Paar mit einem Ass als deiner besten Karte.)

:::note[Die MDF vereinfacht die Bet des Gegners zu einem reinen Bluff. In der Praxis hängt die richtige Frequenz auch davon ab, wie gut deine Hand ihre Equity auf späteren Streets realisiert – nutze sie also als Ausgangspunkt, nicht als feste Regel. Die Pot-Odds-Seite derselben Rechnung steht unter [Pot Odds](/de/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), und die [Verteidigung gegen die 3-Bet](/de/blog/holdem-3bet) arbeitet preflop mit derselben Formel.]:::

## Was ändert sich am Tisch?

- **Unterschätze mittlere Pocket Pairs auf niedrigen gepaarten Boards nicht.** 77 bis TT haben hier 68–76% Equity, die Spitze der Calling-Range. Aber der Boden ist real: 44 und 55 schlagen immer noch den Range-Durchschnitt, während 22 nur zwei Drittel dessen behält, was seine Equity wert ist, weil es unter beiden Rängen des Boards liegt.
- **Gefloppte Trips sind kein Grund anzuspielen.** Die Sechsen spielen in 6,8% der Fälle an – öfter als jede Hand mit Zwei Paaren oder nur einer hohen Karte, nur seltener als die 33-Full-Houses (8,8%) und die einzige Vierling-Combo (9,6%) – und sie checken trotzdem in neun von zehn Fällen. Ein Lead bringt nur die Hände zum Folden, die du ohnehin schlägst; ein Check lässt diese Hände das Geld selbst in den Pot bringen und lässt dir einen Check-Raise oder einen Call-down offen. ⚠ Was diese Berechnung dir nicht sagen kann, ist, *wie viel* mehr die Check-Raise-Linie einbringt: Der Lernspot rechnet **nur die erste Aktion am Flop** vor, die C-Bet-Frequenz des Buttons und ein EV für den Check-Raise existieren darin schlicht nicht.
- **Folde A-High nicht gegen eine einzige kleine Bet.** 79,7% der Range des Buttons haben ebenfalls nichts über das Paar des Boards hinaus – A-High 31,9%, K-High 15,1% und keine Made Hand 32,7%.
- **Dein Kicker entscheidet die Hand.** Nur drei Combos schlagen Trips direkt – die drei Full Houses mit 33. (Ein Vierling fällt weg: Sobald du selbst eine Sechs hältst, kann es 6♠6♥ nicht geben, aus den vier Combos des Full-House-Abschnitts werden von deinem Platz aus also drei.) Und selbst das gilt nur, wenn dein Kicker ein Ass ist. Der zweite Kicker ist durch die 3 des Boards festgelegt, die eine Karte neben deiner Sechs ist also die ganze Hand: Mit 76s dominieren dich A6, K6, Q6 und 86 des Buttons allesamt. Trips mit schwachem Kicker sind ein Bluffcatcher, keine Hand, mit der du einen Pot aufbaust.

:::readnext[Weiterlesen]
/de/blog/monotone-board-strategy | Monotoner Flop: Der Nut Flush checkt | /images/gto-srp-monotone-oop-de.webp
/de/blog/donk-bet-strategy | 9-8-7: Hier ist die Donk Bet richtig | /images/gto-srp-middle-connected-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Gepaartes Board** → **⚡ Ergebnisse ansehen**.

Achte auf **die einzelne Zeile 6♠6♥** in der Detailtabelle – der einzige Vierling, den dieses Board zulässt, und mit **359,7%** die höchste Equity-Realisierung der ganzen Serie (an zweiter Stelle steht das 88 des Buttons im [3-Bet-Pot auf einem niedrigen Board](/de/blog/3bet-pot-low-board) mit **346,0%**; auf der Seite des Big Blinds folgt 6♥6♣ auf dem [niedrigen Rainbow-Flop](/de/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-de.webp") mit **318,9%**). Vergleiche sie mit den drei 33-Zeilen direkt darunter, und du siehst, wie wenige Combos die absolute Spitze eines gepaarten Boards tatsächlich enthält.

Öffne danach den **GTO-Trainer** in der Seitenleiste: Er teilt dir eine Hand nach den echten Range-Gewichten aus und benotet deine Aktion in verlorenen Big Blinds. Kostenlos, nichts zu installieren, kein Konto.

## FAQ

**Q. Warum sind Trips auf einem gepaarten Board schwächer als ein Set?**

A. Weil das Board sie jedem in die Hand gibt. Ein Set braucht ein Pocket Pair, das zu einer Boardkarte passt; für Trips reicht eine Karte, die zum bereits liegenden Paar passt – deshalb hält der Button hier 20 Combos davon gegen 26 beim Big Blind. Dazu kommt, dass dein zweiter Kicker vom Board festgelegt ist: Eine Sechs mit schwachem Kicker wird von einer Sechs mit besserem Kicker dominiert. Der [Rang](/de/blog/holdem-hand-rankings) ist identisch – die Situation nicht.

**Q. Was werden Pocket Pairs auf einem 6-6-3-Board?**

A. Fast immer Zwei Paare: TT spielt als T-T-6-6-3. Die Ausnahmen sind 66, ein Vierling, und 33, ein Full House. Zwei Paare sind aber nicht gleich Zwei Paare – 22 ist ein Zweierpaar unter beiden Boardkarten, verliert also gegen jedes andere Pocket Pair und fällt auf 50,4% Equity.

**Q. Warum hält der Caller mehr Trips als der Raiser?**

A. Weil der Big Blind schon teilweise investiert hat und Hände verteidigt, die der Button nie eröffnet. J6s, T6s und 96s sind genau diese Gruppe – sechs zusätzliche Combos, und das ist die gesamte Lücke von 26 zu 20. Er checkt trotzdem, weil Trips nur 5,3% seiner Range ausmachen.

**Q. Was ist die Mindestverteidigungsfrequenz (MDF)?**

A. Eine Schätzung, wie oft du weitermachen musst, damit ein reiner Bluff keinen Gewinn macht: Pot ÷ (Pot + Bet). Gegen eine Bet von 1,8bb in 5,5bb sind das 75,3%. Sie setzt voraus, dass die Bet ein reiner Bluff ist, was echte Gegner selten sind – sie sagt dir also ungefähr, wie viel du nicht folden darfst, nicht genau, wie viel du callen musst.

**Q. Wie oft kommt ein gepaarter Flop?**

A. In etwa **17,2%** der Fälle – ungefähr jeder sechste Flop. Die drei Flopkarten verfehlen sich nur, wenn die zweite Karte den Rang der ersten meidet und die dritte beide: ==(48 ÷ 51) × (44 ÷ 50) = 82,8%==, der Rest ist gepaart oder mehr. Ein gepaartes Board ist also keine Kuriosität, bei der du es dir leisten kannst, keinen Plan zu haben – du sitzt in jeder Session in einem. (Das *häufigere* Ereignis ist es allerdings nicht: Eine ungepaarte Hand verfehlt den Flop komplett in ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67,6%== der Fälle, paart sich also in **32,4%** – eher doppelt so oft, wie sich das Board paart.)

**Q. Gelten diese Zahlen bei meinem Limit?**

A. Nutze sie als Ausgangspunkt, wenn die Bedingungen passen: Heads-up, 100bb, ein Open von 2,5bb am Button mit Standard-Ranges zur Verteidigung, kein Rake. Eine Abweichung solltest du kennen: Gegen einen Gegner, der auf gepaarten Boards selten c-bettet, lohnt es sich, öfter anzuspielen als die 3,0% des Solvers, denn sonst wird der Pot ohnehin bis zum Ende durchgecheckt.
`.trim(),
};

export default POST;
