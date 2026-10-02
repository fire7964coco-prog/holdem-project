import type { Post } from "../posts";

/**
 * GTO-Solver-Serie Nr. 12, deutsche Fassung – 7♦6♦5♣, Blind vs. Blind (SB Open-Raiser vs. BB Caller).
 * Quelle: lib/posts-en/blind-battle-connected-board.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B/§4-B-2
 *   (Lernspot-Ergebnis vom 08.08.2026, Detailtabelle am 21.08.2026 abgelesen) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 12 (Board-Textur Blind vs. Blind 7-6-5 – redaktionell). Kontrollierter Vergleich zu Nr. 11: nur das Board ist anders.
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md (Spotname „Verbundenes Low-Board, Two-Tone“, „K-High mit einer Zehn“, Zeile Set/Drilling, OOP (SB (Open-Raiser))).
 * Grenzen: nur erste Flop-Entscheidung des SB · eine einzige Bet Size (33%) · kein Knoten nach dem Check oder nach einem Raise · ohne Rake.
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "7-6-5: Die C-Bet fällt auf 9,6%",
  seoTitle: "Blind vs. Blind auf 7-6-5: Warum die C-Bet auf 9,6% fällt",
  desc: "Nur drei Karten sind anders. Auf 7-6-5 bettet der Small Blind, der ein Board vorher 67,4% bettete, nur noch 9,6% – Board-Textur im Poker in Reinform.",
  tldr: "Nach einem Open-Raise des Small Blinds und einem Call des Big Blinds setzt der Small Blind auf dem Flop 7♦6♦5♣ nur in 9,6% der Fälle und checkt in 90,4%. Pot, Stack, SPR, Bet Size und beide Ranges sind identisch mit dem vorherigen Spot – nur die drei Boardkarten haben sich geändert, und die Bet ist von 67,4% auf 9,6% eingebrochen. Der Range-Vorteil aus dem Preflop war ein Vorteil bei hohen Karten, und ein niedriges, verbundenes Board löscht ihn komplett aus. Die Equity des Small Blinds kippt auf 49,6% gegen 50,4%, und seine Realisierung out of position fällt auf 85,3%.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster auf dem Two-Tone-Flop 7♦6♦5♣: Das Raster des Small Blinds ist fast vollständig grün für den Check, nur schmale orange Streifen für die Bet",
  tags: [
    "7-6-5 flop",
    "board-textur poker",
    "board-textur blind vs. blind",
    "verbundenes low-board",
    "overpair verbundenes board",
    "gto",
    "poker",
  ],
  content: `
Im vorherigen Spot bettete der Small Blind (SB) gegen den Big Blind (BB) **67,4% ohne Position**. Der Grund: Auf diesem Platz handelt der Preflop-Aggressor auch zuerst, Range-Vorteil und Reihenfolge der Aktionen fallen also auf denselben Spieler.

Sollte der Small Blind im Blind vs. Blind also einfach immer betten? Dieser Spot ist die Antwort.

**Der Pot ist derselbe mit 6bb, der effektive Stack derselbe mit 97bb, und die einzige Bet Size im Spielbaum ist weiterhin ein Drittel des Pots.** Auch beide Ranges sind dieselben wie im vorherigen Spot. Geändert haben sich nur **drei Boardkarten**. Und die Bet des Small Blinds – als Open-Raiser ist es seine Continuation Bet (C-Bet) – bricht auf **9,6%** ein. Jede Zahl unten stammt aus dem [GTO-Solver von HoldemMaster](/de/solver).


:::stripe
Spot | SB eröffnet auf 3bb → BB callt (Blind vs. Blind)
Flop | 7♦ 6♦ 5♣ (verbunden · Two-Tone)
Pot · Stack | Pot 6bb · effektiver Stack 97bb · SPR 16,2
Ergebnis | SB bettet **9,6%** – derselbe Platz, der ein Board vorher 67,4% bettete
:::

> **Kurze Antwort**
> Auf dem verbundenen Board 7-6-5 im Blind vs. Blind ist die erste Aktion des Small Blinds **Bet 9,6%, Check 90,4%**. Pot, Stack, SPR, Bet Size und beide Ranges sind **identisch** mit dem vorherigen Spot (K♥T♦6♠) – nur das Board hat sich geändert, und die Bet fiel von 67,4% auf 9,6%. Der Range-Vorteil des Open-Raisers ist ein Vorteil bei **hohen Karten**, und auf einem Board aus 5, 6 und 7 ist dieser Vorteil komplett weg. Die Equity **kippt sogar auf 49,6% gegen 50,4%**, und die Equity-Realisierung des Small Blinds fällt von 103,1% auf **85,3%**.

## Unter welchen Bedingungen entstanden diese Zahlen?

**Sie sind identisch mit dem vorherigen Spot.** Weil es hier genau um „gleiche Bedingungen, anderes Ergebnis“ geht, lohnt es sich festzuhalten, was gleich ist und was nicht.

![Pokertisch mit Flop 7♦6♦5♣: Nur Small Blind und Big Blind sind noch im Pot (6bb), beide mit 97bb Stack – der Small Blind (OOP) hat preflop eröffnet und handelt zuerst](/images/gto-sb-connected-scene-de.webp "7♦6♦5♣ · Preflop: alle folden bis zum SB, SB eröffnet auf 3bb, BB callt – der Small Blind handelt zuerst")

| Bedingung | Dieser Spot ⑫ | Vorheriger Spot ⑪ | Gleich? |
|---|---|---|---|
| Preflop-Aktion | SB eröffnet auf 3bb → BB callt | SB eröffnet auf 3bb → BB callt | **gleich** |
| OOP (out of position, handelt zuerst) | SB – der Open-Raiser | SB – der Open-Raiser | **gleich** |
| Pot | 6bb | 6bb | **gleich** |
| Effektiver Stack | 97bb | 97bb | **gleich** |
| SPR | 16,2 | 16,2 | **gleich** |
| Bet Sizes | Eine Size, etwa ein Drittel des Pots | Eine Size, etwa ein Drittel des Pots | **gleich** |
| Range des SB | 572 Combos | 538 Combos | gleiche Range (nur die Blocker des Boards unterscheiden sich) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ T♦ 6♠** | **anders** |
| Rake | Nicht berücksichtigt | Nicht berücksichtigt | – |
| Geprüft | 08.08.2026 (Ergebnis des Lernspots) | 08.08.2026 | – |

Die 6bb im Pot sind ==die 3 des SB plus die 3 des BB==. Der effektive Stack ist ==100 − 3 = 97bb==, die SPR also ==97 ÷ 6 = 16,2==.

Die Combo-Zahlen unterscheiden sich – 572 gegen 538 –, aber nicht, weil die Ranges verschieden wären, sondern weil **Karten auf dem Board die Combos löschen, die sie verwendet hätten.** Ein Board aus K, T und 6 nimmt einer Range, die voller Broadway-Karten steckt, mehr weg.

Die Anzeige ist in **Big Blinds** – Bets heißen „Bet 2bb (33% vom Pot)“, und der EV steht als „EV (bb)“ da.

## Wie oft bettet der Small Blind auf 7-6-5?

**9,6% Bet, 90,4% Check.** Von 572 Combos gehen nur 55 in die Bet; die übrigen 517 checken.

| Erste Aktion des SB | Frequenz | Combos |
|---|---|---|
| Bet 2bb (33% vom Pot) | **9,6%** | 55,0 |
| Check | **90,4%** | 517,0 |

Ordnet man das in die Serie ein, sieht man, wo dieser Spot steht.

| Spot | Wer ist out of position | Bet-Frequenz OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB – Caller | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB – Caller | 3,0%–3,2% |
| **7♦6♦5♣ Blind vs. Blind (⑫)** | **SB – Open-Raiser** | **9,6%** |
| Q♠9♠2♠ monoton (⑤) | BB – Caller | 11,2% |
| 9♥8♥7♣ verbunden (④) | BB – Caller | 23,7% |
| K♥T♦6♠ Blind vs. Blind (⑪) | SB – Open-Raiser | 67,4% |
| A♠A♥6♦ Blind vs. Blind (⑬) | SB – Open-Raiser | 80,1% |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB – 3-Bettor | 98%–100% |

**Die „Rolle“ allein erklärt diese Tabelle nicht.** Derselbe Open-Raiser taucht bei 67,4% und bei 9,6% auf. Sagte der vorherige Spot „Wenn sich die Rolle ändert, ändert sich der Standard“, dann ist dieser hier der Nachsatz: **Das Board nimmt diesen Standard wieder zurück.**

## Warum werden aus 67,4% nur 9,6%, wenn sich nur der Flop ändert?

**Weil der Vorteil des Open-Raisers ein Vorteil bei hohen Karten ist.** Der Small Blind konnte auf 3bb eröffnen, weil seine Range voller Asse, Könige und Damen steckt und schwer an Broadway-Kombinationen ist – und keine einzige dieser Karten berührt 5, 6 oder 7.

Das vorherige Board war das Gegenteil. **Die höchste Karte war ein König**, und König-Kombinationen gibt es auf der Seite des Open-Raisers weit mehr. Leg dieselbe Range auf ein niedriges, verbundenes Board, und diese Struktur kehrt sich um.

| | K♥T♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Höchste Boardkarte | **K** – die Karte des Open-Raisers | **7** – die Karte des Callers |
| Equity des SB | **55,3%** | **49,6%** |
| EQR des SB | **103,1%** | **85,3%** |
| Bet-Frequenz des SB | **67,4%** | **9,6%** |

:::pull[Der Range-Vorteil wird preflop gewonnen, aber ob er realisiert wird, entscheiden drei Karten auf dem Flop.]:::

Der vorherige Artikel endete mit dem Satz *„Auf Boards, die zum Caller passen, kommt der Check selbst von diesem Sitz zurück.“* Das hier ist dieser Fall, und die Zahl, die der Solver daran schreibt, ist **9,6%**.

## Warum begünstigt dieses Board den Big Blind?

**Weil die Calling-Range des Big Blinds Hände dazunimmt, die der Small Blind nie eröffnet und die 7-6-5 treffen – darunter T7o, 97o, 87o, 76o, 74s und 43s –, und zwar zusätzlich zu den Straßen, Sets und Zwei Paaren, die beide Ranges halten.** Die obersten fünf Zeilen unten sind die Klassen, die dieses Board tatsächlich treffen, und abgesehen von den Overpairs führt der Small Blind in keiner einzigen.

![Infografik zur Range-Zusammensetzung auf 7-6-5: die Handklassen von Small Blind und Big Blind im direkten Vergleich](/images/gto-sb-connected-ranges-de.webp "7-6-5 Blind vs. Blind · Zusammensetzung nach Klassen – bei Top Pair steht es 6,8% zu 11,2% zugunsten des Big Blinds")

| Klasse | SB (OOP · Open-Raiser) | BB (IP, in Position · Caller) |
|---|---|---|
| Straße | 2,8% (16 Combos) | **3,7% (20 Combos)** |
| Set/Drilling | 1,6% (9 Combos) | 1,7% (9 Combos) |
| Zwei Paare | 1,2% (7 Combos) | **2,4% (13 Combos)** |
| Overpair | **7,3% (42 Combos)** | 2,2% (12 Combos) |
| Top Pair (7) | 6,8% (39 Combos) | **11,2% (60 Combos)** |
| Second Pair (6) | 5,8% | **6,2%** |
| Weak Pair | 4,2% | **6,2%** |
| Underpair | 3,1% | **3,4%** |
| A-High | **25,2%** | 18,7% |
| K-High | **16,1%** | 15,7% |
| Keine Made Hand | 25,9% | **28,5%** |

Drei Zellen entscheiden es.

- **Top Pair steht bei 39 Combos gegen 60.** Der Big Blind hat anderthalbmal so viele Siebener. Die Opening-Range des Small Blinds ist ohne Offsuit-Hände wie T-7, 9-7 und 8-7 gebaut, während der Big Blind – der schon 1bb investiert hat – nur 2bb nachlegt und jede davon behält.
- **Straßen stehen bei 16 Combos gegen 20.** Beide halten 9-8 (das macht 9-8-7-6-5), aber der Big Blind hat zusätzlich 4-3 suited für 7-6-5-4-3. In der Opening-Range des Small Blinds gibt es kein 4-3 suited.
- **Zwei Paare stehen bei 7 Combos gegen 13.** Alle sechs Combos von 7-6 offsuit gehören allein dem Big Blind.

Die Sets sind die Ausnahme. Beide halten 7-7, 6-6 und 5-5, **jeweils genau neun Combos.** (Im Panel heißt diese Zeile *Set/Drilling*; auf diesem ungepaarten Board sind es ausschließlich Sets – ein Pocket Pair plus Boardkarte.) Dass es 1,6% gegen 1,7% heißt, liegt nur daran, dass die Range des Big Blinds mit 534 Combos kleiner ist und dieselben neun deshalb einen etwas größeren Anteil ausmachen.

Die einzige Klasse, in der der Small Blind führt, sind die **Overpairs, 42 Combos (7,3%)** gegen 12 (2,2%) beim Big Blind – alles ab T-T aufwärts wird gegen einen Open-Raise des Small Blinds ge-3-bettet, also bleiben nur 8-8 und 9-9 in der Calling-Range.

Das Problem: **Ein Overpair ist auf diesem Board keine starke Hand.** Die Hände in der Range des Gegners, die es **schon jetzt schlagen**, kommen auf ==9 Sets + 13 Zwei Paare + 20 Straßen = 42 Combos==. Die 60 Combos Top Pair, die gerade dahinterliegen, können bis zum River zu Zwei Paaren oder Trips werden, und auch die Draws sind auf der Seite des Big Blinds dichter.

| Draw | SB | BB |
|---|---|---|
| Combo Draw | 3,0% | **3,7%** |
| Flushdraw | **2,8%** | 2,6% |
| Beidseitiger Straßendraw (OESD) | 21,2% | **24,9%** |
| Gutshot | 19,4% | **23,8%** |
| Backdoor-Flushdraw | **21,0%** | 15,5% |
| Kein Draw | **32,7%** | 29,4% |

**OESDs stehen bei 21,2% gegen 24,9%, Gutshots bei 19,4% gegen 23,8%.** Zählt man nur echte Draws – Combo Draw, Flushdraw, OESD, Gutshot –, kommt der Small Blind auf **46,4% gegen 55,0% beim Big Blind**. Selbst der noch nicht fertige Teil der Big-Blind-Range ist also der Teil, der eher *wachsen* wird.

🪶 **Der Small Blind führt in genau zwei Zellen**: Flushdraws mit 2,8% zu 2,6% und Backdoor-Flushdraws mit 21,0% zu 15,5%. Das Erste ist ein Abstand von 0,2 Prozentpunkten, praktisch ein Gleichstand; das Zweite braucht Runner-Runner in derselben Farbe und kommt nur in etwa 4,2% der Fälle an. Erst alle sechs Zeilen zusammen ergeben 100%, also hör nicht bei „Kein Draw“ auf, diese Tabelle zu lesen.

## Der Open-Raiser liegt bei der Equity hinten – wie kann das sein?

**Weil A-High und K-High auf diesem Board fast nichts wert sind.** 41,3% der Range des Small Blinds sind A-High oder K-High (25,2 + 16,1), und über 5-6-7 sind diese Kombinationen schlicht hohe Karten.

| Kennzahl | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 49,6% | **50,4%** |
| EV (bb) | 2,54 | **3,46** |
| **Equity-Realisierung (EQR)** | **85,3%** | **114,4%** |

Der Pot beträgt 6bb, der Anteil des Small Blinds ist also ==6 × 49,6% = 2,976bb==, während der tatsächliche EV bei 2,54bb liegt – das sind ==2,54 ÷ 2,976 = 85,3%==. Die beiden EVs zusammen ergeben ==2,54 + 3,46 = 6,0bb==, genau den Pot.

**Die Equity ist mit 49,6 zu 50,4 fast ausgeglichen, die Realisierung aber klafft weit auseinander: 85,3% gegen 114,4%.** Diese Lücke ist der Wert der Position. Im vorherigen Spot hat der Range-Vorteil sie mehr als ausgeglichen, und der Small Blind realisierte 103,1%; hier ist kein Vorteil mehr übrig, der sie ausgleichen könnte.

Ordnet man die EQR out of position von **sechs ausgewählten Spots** von niedrig nach hoch, landet dieser hier zwischen den Callern. (Das tatsächliche Ende der ganzen Serie bilden ③ mit 77,9%, ② mit 80,7% und ⑥ mit 83,7%, alles Caller-Plätze; die Tabelle unten ist ein Ausschnitt, bei dem dieses Ende abgeschnitten ist.)

| Spot | Wer ist out of position | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ trocken (①) | Caller | 45,1% | 84,0% |
| 6♠5♥2♦ niedrig (⑦) | Caller | 48,3% | 84,3% |
| **7♦6♦5♣ Blind vs. Blind (⑫)** | **Open-Raiser** | **49,6%** | **85,3%** |
| 9♥8♥7♣ verbunden (④) | Caller | 48,5% | 93,2% |
| K♥T♦6♠ Blind vs. Blind (⑪) | Open-Raiser | 55,3% | 103,1% |
| 8♦5♣2♠ 3-Bet-Pot (⑩) | 3-Bettor | 58,6% | 106,9% |

**Ein Open-Raiser, mitten zwischen den Callern.** Über die ganze Serie gibt es **fünf** Caller-Plätze unter diesem (③ 77,9 · ② 80,7 · ⑥ 83,7 · ① 84,0 · ⑦ 84,3), er liegt also nicht am unteren Ende. Der Punkt bleibt trotzdem: **Derselbe Open-Raiser-Platz zeigt bei ⑪ 103,1% und hier 85,3%.** Den Wert bestimmt das Board, nicht der Platz.

## Welche Hände tragen die wenigen Bets auf 7-6-5?

**Kein Block, sondern eine dünne Schicht, verteilt über die ganze Range.** Nirgends in der Matrix ist eine Zelle komplett orange; die meisten tragen einen schmalen orangen Streifen. Selbst A-A und K-K sind überwiegend grün.

Drei Arten von Zellen tragen einen sichtbar dickeren Streifen. (Die Frequenzen unten sind Combo-Durchschnitte der jeweiligen Handklasse, gezählt am 21.08.2026, indem die Live-Tabelle pro Hand bis ganz unten gelesen wurde.)

- **8-8 – bettet 39,5%, die Klasse mit der höchsten Bet-Frequenz.** Auf 7-6-5 ist ein Achterpaar **gleichzeitig ein Overpair und ein OESD** (8-7-6-5 wird mit einer Vier oder einer Neun fertig). Wert und Draw in einer Hand, also gibt es zwei Gründe zu betten. Gemessen liegt die Equity bei 73,4%–75,2% und die EQR bei 133%–138%.
- **A-7 suited und K-7 suited** – Top Pair mit einer Sieben. Sie werden nicht wegen ihrer Stärke gewählt, sondern weil **dünner Value mit einem Ass- oder König-Blocker kommt** (ein A-High oder K-High weniger in der Range des Gegners). Top Pair liegt auf diesem Board sogar hinten, 39 Combos gegen 60.
- **K-4 suited und Q-4 suited** – eine Vier in derselben Farbe. Nimm zu 7-6-5 eine Vier dazu, und du hältst ==4-5-6-7==, einen OESD, der mit einer Drei oder einer Acht fertig wird. Im Klassendurchschnitt sind das 30,9% für Q-4s und 27,1% für K-4s, aber **als einzelne Combos kommen Q♠4♠ und Q♥4♥ auf 54,7%, den höchsten Wert im ganzen Spot.**

Die 9,6% entstehen, indem ein wenig Value mit ein paar Draws gemischt wird. Das Achterpaar führt die Klassenrangliste an, weil **eine Hand beide Aufgaben gleichzeitig erledigt.** ⚠ Eine allgemeine Regel ist das allerdings nicht – **keine der stärksten einzelnen Combos tut beides** (Q♥4♥ und Q♠4♠ mit 54,7% sind reine Draws, A♣7♣ mit 54,4% ist dünner Value mit Blocker, und danach kommt T♣9♣ mit 52,2%, ein Gutshot). Die beste einzelne Combo der Doppelrolle-Hand, 8♦8♣, liegt mit 47,1% sogar *darunter*. **Die 9,6% wurden nicht nach einem einzigen Kriterium ausgewählt.** **Und 90,4% Check heißt nicht, dass der Small Blind dieses Board aufgibt** – bei dünnem Value wie A♣7♣ und K♣7♣ liegen Bet und Check innerhalb von 0,03bb beieinander, mit dem Check gibt er also fast nichts her. ⚠ Such den Grund aber nicht im Pot von 6bb, im Stack von 97bb oder in der SPR von 16,2 – diese drei sind **exakt dieselben Konstanten** auf [⑪ K-T-6](/de/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-de.webp") und auf [dem A-A-6-Board](/de/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-de.webp") später in der Serie, wo derselbe Small Blind 67,4% und 80,1% bettet. Was die 9,6% erzeugt hat, ist nicht der Stack, sondern **drei Boardkarten**.

:::note[⚠ Dieser Lernspot wurde mit einer einzigen Bet Size – einem Drittel des Pots – als einziger Option berechnet. Gib im Spielbaum eine größere Size frei, und die 9,6% können sich verschieben. Lies sie als „unter diesen Bedingungen gibt es fast nichts, was sich zu betten lohnt, nicht einmal klein“.]:::

## Was ändert sich am Tisch?

- **Mach aus „Es ist Blind vs. Blind, also bette ich“ keine Regel.** Die 67,4% des vorherigen Spots und die 9,6% hier hat das Board getrennt, nicht der Platz. Selbst wenn du aus dem Small Blind eröffnet hast: Sobald der Flop niedrig und verbunden kommt – 5, 6, 7, 8 –, ist die Initiative in dieser Hand schon auf die andere Seite des Tisches gewandert.
- **Nimm ein Overpair nicht als Grund, einen großen Pot aufzubauen.** Die 42 Overpair-Combos des Small Blinds sind dreieinhalbmal so viele wie beim Big Blind, aber auf einem Board, auf dem der Gegner 42 Combos hält, die sie schon schlagen, ist das keine Hand für zwei oder drei Barrels. Das ist kein Argument gegen eine einzelne kleine Bet – der Punkt ist, **es nicht als Hand zu behandeln, mit der du den Stack reinstellst**. ⚠ Es heißt auch nicht „folde, sobald ein Raise kommt“. Die Range des Gegners enthält 24,9% OESDs, 23,8% Gutshots und 3,7% Combo Draws, ein Raise am Flop kann also nicht nur Value sein, und ein Overpair gegen den Raise eines drawlastigen Gegners automatisch wegzuwerfen, ist selbst eine ausnutzbare Gewohnheit. **Den Stack nicht reinzustellen und zu folden, sind zwei verschiedene Dinge.** Und den Knoten Bet-dann-Raise gibt es in dieser Berechnung nicht, daraus kommt also keine Frequenz. Diese Serie landet immer wieder bei derselben Schlussfolgerung: [Ein verbundenes Board stutzt den Vorteil des Preflop-Aggressors](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp").
- **Halte A-High nicht für Stärke.** Ein Viertel der Range des Small Blinds ist A-High, und auf diesem Board kann das meiste davon nur ein Paar treffen (A4 und A8 bekommen einen OESD dazu, die A♦x♦-Hände einen Flushdraw). Wenn die Draws des Gegners ankommen, sind es meist Straßen – der Unterschied liegt nicht in der Chance, sich zu verbessern, sondern darin, **was die Verbesserung wert ist**. Die Equity von 49,6% ist das Ergebnis.
- **Leg vorher fest, was du nach dem Check machst.** Wenn du 90,4% in einen Check geschickt hast, ist die nächste echte Frage, womit du gegen die Bet des Gegners callst und womit du [check-raist](/de/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-de.webp"). ⚠ **Diese Antwort steht nicht in dieser Berechnung** – der Lernspot rechnet nur die **erste Aktion am Flop**, die Knoten nach einem Check (die Bet-Frequenz des Big Blinds, der Check-Raise des Small Blinds) existieren also schlicht nicht. Willst du einen Spot, in dem ein Check-Raise tatsächlich berechnet wurde, ist das niedrige Rainbow-Board das einzige in der Serie mit neu berechneten Frequenzen – **allerdings ist der Platz ein anderer** (dort ist der Big Blind der Caller gegen einen Button).

:::readnext[Weiterlesen]
/de/blog/blind-battle-cbet | K-T-6: C-Bet im Blind vs. Blind | /images/gto-sb-king-mid-oop-de.webp
/de/blog/ace-paired-board-strategy | A-A-6: Die C-Bet steigt auf 80,1% | /images/gto-sb-paired-ace-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Verbundenes Low-Board, Two-Tone** → **⚡ Ergebnisse ansehen** – dort erscheint jede Zahl aus diesem Artikel. Willst du denselben Spot stattdessen als Aufgabe spielen, öffne den [GTO-Trainer](/de/solver) in der Seitenleiste – er teilt dir eine zufällige Hand aus, und sobald du eine Aktion wählst, zeigt er die gemischte Frequenz und den **EV-Verlust (bb)** deiner Wahl. Ohne Login bleibt dein Verlauf auf diesem Gerät; mit Login kannst du den Verlauf aus Lernspots und täglichen Aufgaben im Konto speichern und auf anderen Geräten weiterführen.

**Klick zwischen diesem Spot und „K-High mit einer Zehn“ hin und her**, dem vorherigen Spot. Die Spielerauswahl zeigt bei beiden „OOP (SB (Open-Raiser))“, Pot und Stack sind identisch – und die Matrix wechselt komplett die Farbe. Kürzer zeigt nichts in dieser Serie, was ein Board tatsächlich bewirkt. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

**Q. Warum ändert dieselbe Range von Board zu Board ihren Wert?**

A. Weil sich eine Range auf bestimmte Karten konzentriert. Die Opening-Range des Small Blinds steckt voller Asse, Könige und Damen, sie gewinnt also auf hohen Boards; die Calling-Range des Big Blinds steckt voller Connectors und niedriger suited Hände, sie gewinnt also auf niedrigen, verbundenen Boards. Leg dieselben beiden Ranges auf K♥T♦6♠, und der Small Blind hat 55,3% Equity; leg sie auf 7♦6♦5♣, und sie fällt auf 49,6%. Die Ranges haben sich nicht bewegt – nur das Board.

**Q. Du hast aus dem Small Blind eröffnet, und der Flop kommt niedrig und verbunden. Was jetzt?**

A. Meistens checkst du. Der Solver schickt auf 7♦6♦5♣ 90,4% in einen Check. Selbst die 9,6%, die betten, verteilen sich dünn auf **8-8, ein Overpair, das zugleich ein OESD ist** (39,5% im Klassendurchschnitt, der höchste Wert hier), auf Top Pair (A-7s, K-7s) und auf eine Vier in derselben Farbe, die einen OESD macht (K-4s, Q-4s). Aufgeben ist das aber nicht – bei den dünnen Value-Händen ist der Check ungefähr so viel wert wie die Bet (innerhalb von 0,03bb), und was nach dem Check passiert, Calls und Check-Raises eingeschlossen, ist nicht Teil dieser Berechnung.

**Q. Der Small Blind hat dreieinhalbmal so viele Overpairs (42 gegen 12 Combos). Warum bettet er nur 9,6%?**

A. Weil der Gegner auf diesem Board vieles hält, was ein Overpair schlägt: 42 Combos aus Sets, Zwei Paaren und Straßen, dazu 24,9% OESDs und 23,8% Gutshots. Selbst die 60 Combos Top Pair, die gerade hinten liegen, halten Karten, die das bis zum River umdrehen. Ein Overpair heißt hier „jetzt vorne, aber kaum mehr als einmal Geld reinzubringen“. ⚠ Such den Grund nicht in der SPR von 16,2 – ein Pot von 6bb, ein Stack von 97bb und eine SPR von 16,2 sind **dieselben Konstanten** auf den Boards [K-T-6](/de/blog/blind-battle-cbet) und [A-A-6](/de/blog/ace-paired-board-strategy), wo derselbe Small Blind 67,4% und 80,1% bettet. Was die 9,6% erzeugt hat, ist nicht der Stack, sondern drei Boardkarten.

**Q. Welcher der beiden Spots ist der Standard im Blind vs. Blind?**

A. Keiner. Das Paar existiert, um zu zeigen, dass derselbe Platz je nach Board 9,6% und 67,4% an entgegengesetzten Enden hervorbringt. Was du an den Tisch mitnehmen solltest, ist nicht „Small Blind, also bette ich“, sondern **zu wessen Range die höchste Boardkarte gehört**. Ein König, eine Dame oder ein Ass – dann gehört sie dem Open-Raiser; eine Folge aus 5, 6, 7 oder 8 – dann gehört sie dem Caller.
`.trim(),
};

export default POST;
