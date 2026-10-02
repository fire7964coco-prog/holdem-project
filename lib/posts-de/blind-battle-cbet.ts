import type { Post } from "../posts";

/**
 * GTO-Solver-Serie 11 (de) – K♥T♦6♠, Blind vs. Blind (SB eröffnet auf 3bb, BB callt).
 * Quelle: lib/posts-en/blind-battle-cbet.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B/§4-B-2
 *   (Lernspot-Ergebnis vom 2026-08-08) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 11 (title fest, «C-Bet Blind vs. Blind» K-T-6 – redaktionell;
 *   de-Hauptartikel der BvB-Achse). Keine generische Small-Blind-Strategie- oder Equity-Realization-H2 (Pillar-Themen).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md + .solver-captures/data-de.json (Spotname „K-High mit einer Zehn“,
 *   „OOP (SB (Open-Raiser))“, Zeile „Set/Drilling“, „Keine Made Hand“, „Backdoor-FD“).
 * Grenzen: nur erste Flop-Entscheidung des SB · nur eine Bet Size (33%) · kein Knoten nach einem Raise · ohne Rake.
 * 362,1 / 175,9 Combos = Panelwerte wie in EN übernommen (nicht neu bewertet).
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "K-T-6: C-Bet im Blind vs. Blind",
  seoTitle: "Blind vs. Blind auf K-T-6: Der Small Blind bettet 67,4%",
  desc: "Blind vs. Blind auf K-T-6 handelt der Small Blind ohne Position zuerst – und bettet 67,4%. So zieht ein Range-Vorteil die Equity-Realisierung über 100%.",
  tldr: "Nach einem Open des Small Blinds und einem Call des Big Blinds bettet der Small Blind auf dem Flop K♥T♦6♠ in 67,4% der Fälle und checkt in 32,6%. In den sieben Single Raised Pots weiter vorne in dieser Serie bettete der Spieler out of position nur 0,1% bis 23,7% – und geändert haben sich zwei Dinge, nicht eines. Hier ist der Spieler out of position der Raiser statt der Caller, und das Board begünstigt seine Range. Zusammen heben sie die Equity-Realisierung out of position auf 103,1%.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster für Blind vs. Blind auf dem Rainbow-Flop K♥T♦6♠: Die Range des Small Blinds, der größte Teil des Rasters ist orange für die Bet eingefärbt",
  tags: ["k-t-6 flop", "blind vs blind poker", "c-bet blind vs blind", "sb vs bb flop", "gto", "poker"],
  content: `
In den sieben Single Raised Pots weiter vorne in dieser Serie wiederholte sich immer wieder eine Regel: **Wer zuerst handelt, checkt.** Am häufigsten bettete der Spieler out of position (OOP), also ohne Position, auf dem [verbundenen 9-8-7-Board](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp") – mit 23,7% –, und die anderen sechs kamen auf höchstens 11,2%. Die einzigen Ausnahmen waren die 3-Bet-Pots.

Das hier ist kein 3-Bet-Pot. Es ist eine ganz normale Hand: Der Small Blind (SB) eröffnet auf 3bb, der Big Blind (BB) callt. Und **der Spieler, der zuerst handelt, bettet 67,4%.**

Was hat sich geändert? Der Pot ist mit 6bb klein, die Stacks sind 97bb tief. Geändert hat sich, **wer zuerst handelt und welche Range das Board begünstigt – beides gleichzeitig.** Jede Zahl unten stammt aus dem [GTO-Solver von HoldemMaster](/de/solver).


:::stripe
Spot | SB eröffnet auf 3bb → BB callt (Blind vs. Blind)
Flop | K♥ T♦ 6♠ (Rainbow)
Pot · Stack | Pot 6bb · effektiver Stack 97bb · **SPR 16,2**
Ergebnis | SB bettet **67,4%** – der erste Single Raised Pot, in dem der Spieler out of position häufiger anspielt als nicht
:::

> **Kurze Antwort**
> Blind vs. Blind auf K-T-6 lautet die erste Aktion des Small Blinds **Bet 67,4%, Check 32,6%**. Das ist die Umkehrung der 0,1%–23,7% aus den Spots ① bis ⑦, und anders sind **zwei Dinge**, nicht eines: Der Spieler out of position ist hier **der Raiser statt der Caller**, und das Board ist ein König mit einem Broadway-Kicker. Der Sitz allein erklärt es nicht – derselbe Small Blind als Raiser bettet auf [einem 7-6-5-Board](/de/blog/blind-battle-connected-board) später in dieser Serie nur **9,6%**. Hier passen beide zusammen: Der Preflop-Aggressor handelt auch zuerst und hält Range-Vorteil und Reihenfolge der Aktion gleichzeitig in der Hand. Das Ergebnis ist eine **Equity-Realisierung out of position von 103,1%** – das erste Mal in einem Single Raised Pot, dass sie über 100% liegt.

## Unter welchen Bedingungen entstanden diese Zahlen?

★**Die Bedingungen haben sich wieder geändert.** Pot, Stack und Rollen unterscheiden sich alle von den früheren Spots, deshalb kommt die Tabelle zuerst.

![Pokertisch mit Flop K♥T♦6♠: Nur Small Blind und Big Blind sind noch im Pot (6bb), beide mit 97bb Stack – der Small Blind (OOP) hat preflop eröffnet und handelt zuerst](/images/gto-sb-king-mid-scene-de.webp "K♥T♦6♠ · Preflop: alle folden bis zum SB, SB eröffnet auf 3bb, BB callt – der Small Blind handelt zuerst")

| Bedingung | Dieser Spot (Blind vs. Blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (3-Bet-Pot) |
|---|---|---|---|
| Preflop-Aktion | **SB eröffnet auf 3bb → BB callt** | BTN eröffnet auf 2,5bb → BB callt | BB 3-bettet auf 11bb → BTN callt |
| OOP (out of position, handelt zuerst) | **SB – der Open-Raiser** | BB – der Caller | BB – der 3-Bettor |
| IP (in Position) | BB – der Caller | BTN – der Open-Raiser | BTN – der Caller |
| Pot | **6bb** | 5,5bb | 22,5bb |
| Effektiver Stack | **97bb** | 97,5bb | 89bb |
| SPR | **16,2** | 17,7 | 4,0 |
| Bet Sizes | Etwa ein Drittel des Pots, **nur eine Size** | Etwa ein Drittel und drei Viertel (⑦ hatte nur eine) | Etwa ein Drittel und zwei Drittel |
| Rake | Nicht berücksichtigt | Nicht berücksichtigt | Nicht berücksichtigt |
| Geprüft | 08.08.2026 (Ergebnis des Lernspots) | ①–④ 19.08.2026 · ⑤–⑦ 20.08.2026 | ⑧⑨ 20.08.2026 · ⑩ 08.08.2026 |

Die 6bb im Pot sind ==die 3 des SB plus die 3 des BB==. Beide Blinds sind schon in der Hand, also liegt kein toter Blind daneben. Der effektive Stack ist ==100 − 3 = 97bb==.

Die Anzeige ist in **Big Blinds** – Bets erscheinen als „Bet 2bb (33% vom Pot)“, Betrag und Anteil am Pot zusammen, und der EV als „EV (bb)“.

## Wie oft bettet der Small Blind wirklich?

**67,4% Bet, 32,6% Check.** Von 538 Combos gehen 362,1 in die Bet.

| Erste Aktion des SB | Frequenz | Combos |
|---|---|---|
| Bet 2bb (33% vom Pot) | **67,4%** | 362,1 |
| Check | 32,6% | 175,9 |

Neben den Rest der Serie gestellt, ist der Abstand offensichtlich.

| Spot | Wer ist out of position | Bet-Frequenz OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB (Caller) | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB (Caller) | 3,0%–3,2% |
| **7♦6♦5♣ Blind vs. Blind (⑫)** | **SB (Open-Raiser)** | **9,6%** |
| Q♠9♠2♠ monoton (⑤) | BB (Caller) | 11,2% |
| 9♥8♥7♣ verbunden (④) | BB (Caller) | 23,7% |
| **K♥T♦6♠ Blind vs. Blind (⑪)** | **SB (Open-Raiser)** | **67,4%** |
| **A♠A♥6♦ Blind vs. Blind (⑬)** | **SB (Open-Raiser)** | **80,1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB (3-Bettor) | 98%–100% |

**Lies das nicht als „Nur der Sitz zählt“.** Derselbe Sitz – Small Blind als Open-Raiser – ergibt 9,6% bei ⑫, 67,4% hier und 80,1% bei ⑬: eine **Spanne von 70,5 Prozentpunkten**. Und die 9,6% von ⑫ liegen *unter* den Callern bei ⑤ (11,2%) und ④ (23,7%). Das Bild einer Klippe zwischen Callern und Aggressoren entsteht nur, wenn du diese beiden Zeilen löschst. Sicher ist, dass **die 3-Bet-Pots (98%–100%) für sich stehen**; den Rest der Spanne bestimmen **Sitz und Board zusammen**.

## Warum setzt der Small Blind auf K-T-6 zuerst – ohne Position?

**Weil das der Sitz ist, an dem der Preflop-Aggressor auch am Flop zuerst handelt.** ⚠ In dieser Serie kommt jede Bet-Frequenz über 50% von einem Sitz, an dem der Preflop-Aggressor zuerst handelt, aber der Sitz garantiert nichts, und auch ein Caller kann einen Teil der Zeit anspielen (23,7% bei ④). Dieselbe Struktur ergibt **9,6%** [bei ⑫](/de/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-de.webp") und **80,1%** [bei ⑬](/de/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-de.webp"). Der Sitz öffnet die Tür; das Board entscheidet, wie weit du hindurchgehst.

In einer normalen Hand fallen diese beiden auseinander. Wenn der Button (BTN) eröffnet und der Big Blind callt, **ist der Aggressor der Button, aber zuerst handelt der Big Blind.** Daraus entsteht die Struktur „erst Check, dann Continuation Bet (C-Bet)“, und genau so sahen ① bis ⑦ alle aus.

Blind gegen Blind fallen die beiden in eins. Der Small Blind hat geraist, und der Small Blind ist am Flop zuerst dran. **Range-Vorteil und Reihenfolge der Aktion landen beim selben Spieler.**

| | Preflop-Aggressor | Zuerst am Flop | Bet OOP |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | getrennt → 0,1%–23,7% |
| SB vs BB (⑪ K-T-6) | **SB** | **SB** | zusammen → **67,4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | zusammen, und trotzdem → **9,6%** |

⚠ **Lösch die dritte Zeile nicht.** „Zusammen“ **öffnet die Tür, ohne zu entscheiden, wie weit du gehst** – [⑫](/de/blog/blind-battle-connected-board) hat eine Sitzstruktur, die mit dieser bis aufs letzte Detail identisch ist, und bettet 9,6%. Ohne die Überschneidung spielst du kaum je an (die erste Zeile); mit ihr brauchst du immer noch **ein Board, das zu deiner Range passt**, bevor du tatsächlich bettest.

Die Equity gibt diesem Vorteil eine Zahl. **SB 55,3% gegen BB 44,7%.** In ① bis ⑦ lag der Spieler out of position bei 45,1%–48,5%, immer unter der Hälfte – die entgegengesetzte Richtung.

:::pull[Ob du zuerst bettest, entscheidet nicht die fehlende Position – den Großteil der Arbeit macht, wie deine Range auf genau dieses Board trifft.]:::

Keine Position zu haben, gilt für den Big Blind in ①–⑦ genauso wie für den Small Blind hier. Was sie trennt, ist **das Verhältnis zwischen Range und Board** – ⚠ und das lässt sich nicht auf „die Range“ allein reduzieren. Auf [dem 7-6-5-Board](/de/blog/blind-battle-connected-board) ist die Range *buchstäblich identisch*, und der Check steigt auf 90,4%.

## Warum hier 67%, wenn es im 3-Bet-Pot 100% sind?

**Weil die Verteidigungsrange des Big Blinds weit ist.** Genau hier trennt sich dieser Spot von der 100%-Bet im 3-Bet-Pot.

Die beiden Ranges sind hier fast gleich groß: **538 Combos beim SB, 525 beim BB.** So viele Hände sind mitgegangen, statt zu folden. Der Small Blind hat nur auf 3bb erhöht, also musste der Big Blind – der schon 1bb drin hatte – nur 2bb nachlegen, und der Preis war gut genug, um weit zu verteidigen.

Gegen eine weite Range **kannst du nicht alles darauf setzen, dass sie foldet.** Deshalb bleiben 32,6% als Check zurück.

Die checkenden Hände haben eigene Aufgaben. **Hände, die zu schwach zum Betten sind**, und **Hände, die checken, um eine Bet zu provozieren**, stecken beide darin. Liest der Gegner diesen Check als Schwäche und feuert, wartet ein [Check-Raise](/de/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-de.webp").

:::note[⚠ Dieser Lernspot wurde mit einer einzigen Bet Size – einem Drittel des Pots – als einziger Option berechnet. Nimm eine größere Size in den Spielbaum auf, und die 67,4% selbst können sich verschieben. Lies es als „klein und breit ist die Antwort *unter diesen Bedingungen*“.]:::

## Wie unterscheiden sich die beiden Ranges?

**Die starken Klassen liegen beim Small Blind, die Hände ohne Made Hand beim Big Blind.**

![Infografik zur Range-Zusammensetzung auf K-T-6: Die Handklassen von Small Blind und Big Blind im Vergleich](/images/gto-sb-king-mid-ranges-de.webp "K-T-6 Blind vs. Blind · Zusammensetzung nach Klassen – der Big Blind hält rund 10 Prozentpunkte mehr Hände ohne Made Hand")

| Kategorie | SB (OOP · Open-Raiser) | BB (IP · Caller) |
|---|---|---|
| Set/Drilling | **1,7%** | 0,6% |
| Zwei Paare | 2,4% | **2,5%** |
| Overpair (AA) | **1,1%** | 0,0% |
| Top Pair (K) | **15,6%** | 10,9% |
| Second Pair (T) | 11,7% | **13,7%** |
| Weak Pair | 6,1% | **8,0%** |
| Underpair | **10,0%** | 8,0% |
| A-High | **26,8%** | 22,1% |
| Keine Made Hand | 24,5% | **34,3%** |

Zwei Zellen entscheiden es. **Top Pair steht 15,6% zu 10,9% zugunsten des Small Blinds, und Hände ohne Made Hand stehen 24,5% zu 34,3% – fast 10 Prozentpunkte mehr beim Big Blind.**

⚠ Lies „keine Made Hand“ aber nicht als „hat nichts“. Der Solver zählt Draws auf einer eigenen Achse – **die vier Zeilen unten schließen sich gegenseitig aus, und jede Spalte ergibt 100%.**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| Beidseitiger Straßendraw (OESD) | 3,0% | 2,3% |
| Gutshot | **16,4%** | **16,0%** |
| Backdoor-Flushdraw | 17,8% | **21,1%** |
| Kein Draw | **62,8%** | 60,6% |

**Eine Flushdraw-Zeile gibt es überhaupt nicht** – das Board ist Rainbow, also kann keiner der beiden auf diesem Flop vier Karten zu einem Flush halten. Stattdessen haben sie einen dicken Anteil Backdoor-Flushdraws, und ein Backdoor braucht Runner-Runner, kommt also selten an.

Die 3,0% OESD ergeben ==0,030 × 538 = etwa 16 Combos==, und auf diesem Board macht genau eine Hand einen OESD: **Q-J** (K-Q-J-T, braucht ein Ass oder eine Neun – **acht Outs**). Sechzehn ist genau die Zahl der Q-J-Combos. Die Gutshot-Zeile ist dicker, weil A-Q, A-J, Q-9, J-9, 9-8 und 8-7 alle dort landen.

Trotzdem: Wenn ein Drittel der gegnerischen Range nicht einmal ein Paar hat und dein eigenes oberes Ende schwerer ist, ist klein und breit betten der Standard.

Die Sets zeigen in dieselbe Richtung. Drei Pocket Pairs machen auf diesem Board ein Set – K-K, T-T und 6-6 –, und **der Small Blind hält alle drei, neun Combos (1,7%), während dem Big Blind nur 6-6 bleibt, drei Combos (0,6%).** Der Big Blind 3-bettet K-K und T-T gegen ein Open des Small Blinds, statt zu callen. Overpairs gehören aus demselben Grund dem Small Blind: A-A, sechs Combos.

## Wie kommt die Equity-Realisierung out of Position auf 103,1%?

**Weil der Range-Vorteil den Positionsvorteil *knapp* überwiegt.** Leg die Zahlen dieses Spots auf die ganze Serie, und die Antwort zeigt sich.

| Kennzahl | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55,3% | 44,7% |
| EV (bb) | 3,42 | 2,58 |
| **Equity-Realisierung (EQR)** | **103,1%** | 96,1% |

Der Pot ist 6bb groß, also beträgt der Anteil des Small Blinds ==6 × 55,3% = 3,318bb==, während sein tatsächlicher EV bei 3,42bb liegt. Das ergibt ==3,42 ÷ 3,318 ≈ 103,1%==.

Nimm sieben Spots aus der Serie und ordne sie nach EQR:

| Spot | Wer ist out of position | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ trocken (①) | Caller | 45,1% | 84,0% |
| 6♠5♥2♦ niedrig (⑦) | Caller | 48,3% | 84,3% |
| 9♥8♥7♣ verbunden (④) | Caller | 48,5% | 93,2% |
| **K♥T♦6♠ Blind vs. Blind (⑪)** | **Open-Raiser** | **55,3%** | **103,1%** |
| 8♦5♣2♠ 3-Bet-Pot (⑩) | 3-Bettor | 58,6% | 106,9% |
| A♦K♠2♥ 3-Bet-Pot (⑧) | 3-Bettor | 68,9% | 109,6% |
| Q♥T♥7♠ 3-Bet-Pot (⑨) | 3-Bettor | 58,3% | 117,8% |

**Jede Zeile über 100% gehört jemandem, der nicht der Caller ist.** ⚠ Lies es nicht rückwärts – **„nicht der Caller“ heißt nicht „über 100%“.** [Das 7-6-5-Board](/de/blog/blind-battle-connected-board), das in dieser Tabelle fehlt, ist derselbe Small Blind als Open-Raiser mit **85,3%** – mitten unter den Callern. Und dieser Spot liegt von allen am nächsten an der Linie: 103,1% liegen nur knapp darüber.

⚠ **Eine höhere EQR heißt auch nicht, dass der Vorteil größer ist.** Lies die Rangfolge, wie sie dasteht – der größte Range-Vorteil in der Tabelle, ⑧ mit **68,9%** Equity, landet bei **109,6%**, *unter* den **117,8%** von ⑨ bei **58,3%** Equity – zehn Prozentpunkte weniger. Die EQR ist ==EV ÷ (Equity × Pot)==, also ist **die Equity der Nenner**: Je niedriger sie ist, desto größer das Verhältnis bei gleichem EV. Es stimmt, dass der Vorteil eines einzelnen Open-Raises bei 103,1% stehen bleibt; der Grund ist aber nicht „er hätte 117,8% erreichen können“.

Die 96,1% des Big Blinds sind die andere Seite derselben Geschichte. **Position – und trotzdem unter seinem Anteil.** Warum Position normalerweise etwas einbringt und wann sie nicht reicht, steht in [Warum Position zählt](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Was ändert sich am Tisch?

- **Blind gegen Blind gilt nicht automatisch „keine Position, also Check“.** Hast du aus dem Small Blind eröffnet, gehört dir der **Preflop**-Range-Vorteil, und der Solver bettet auf diesem Board 67,4%. **Aber du liest trotzdem das Board** – ein König mit Broadway-Kicker passt zum Open-Raiser, und auf Boards, die zum Caller passen, kommt der Check selbst von diesem Sitz zurück. Das [verbundene Board 7♦6♦5♣](/de/blog/blind-battle-connected-board) ist genau das: Derselbe Small Blind bettet nur 9,6%.
- **Die Size ist ein Drittel des Pots.** Wenn der Big Blind 525 Combos verteidigt, ist klein und breit richtig. ⚠ Mach daraus nicht „groß betten ist schlechter“ – **dieser Lernspot hatte nur die 33%-Size im Spielbaum.** Ohne eine berechnete größere Size ist „was wäre, wenn ich groß gebettet hätte“ eine Frage, die diese Berechnung nicht beantworten kann. [Der A-A-6-Spot](/de/blog/ace-paired-board-strategy) später in der Serie hat zusätzlich 75% zur Auswahl.
- **★Bei einer Stack-to-Pot-Ratio (SPR) von 16,2 leg vorher fest, was ein Raise bedeutet.** Wer 67,4% seiner Range bettet, bekommt oft einen Raise, und mit **sechzehn Pots** dahinter ist das kein Spot, um mit Top Pair den ganzen Stack reinzustellen. Das ist die Umkehrung eines 3-Bet-Pots bei SPR 4,0, wo „Raise“ hieß „der Stack geht rein“. Hier deckt Callen und einen Turn sehen einen viel größeren Teil deiner Range ab, und außerhalb der neun Set-Combos und **Zwei Paare (K-T, K-6, T-6)** gibt es wenig Grund, dich festzulegen. 🪶 Beachte, dass **A-A *unter* Zwei Paaren liegt** – nicht weil der König auf dem Board es „festnagelt“, sondern weil ein Overpair in der Rangfolge der Pokerhände immer noch ein Paar ist, und ein Paar verliert gegen Zwei Paare. Die Klassentabelle listet die Kategorien in genau dieser Reihenfolge, Set → Zwei Paare → Overpair (die 1,7% · 2,4% · 1,1% daneben sind Anteile an der Range, keine Rangfolge der Stärke). ⚠ Der Knoten nach einem Raise ist in dieser Berechnung nicht enthalten – das hier ist also ein Urteil aus der SPR, keine Zahl des Solvers.
- **Verteidigst du den Big Blind, denk daran, was dich das 3-Betten von K-K und T-T kostet.** Das Ergebnis ist genau die Struktur auf diesem Board: Das einzige Set des Big Blinds ist 6-6. Die Calling-Range wird um genau so viel dünner.
- **Lies die 32,6% Checks nicht als Schwäche.** Hände, die check-raisen, sind darunter gemischt. Die allgemeinen Maßstäbe aus der [C-Bet-Strategie](/de/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") lohnt es sich, für diesen Sitz noch einmal zu prüfen.

:::readnext[Weiterlesen]
/de/blog/3bet-pot-low-board | 8-5-2: Overpairs halten den Druck | /images/gto-3bp-low-oop-de.webp
/de/blog/blind-battle-connected-board | 7-6-5: Die C-Bet fällt auf 9,6% | /images/gto-sb-connected-oop-de.webp
:::

## Prüf es selbst nach

Jede Zahl hier findest du wieder: Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **K-High mit einer Zehn** → **⚡ Ergebnisse ansehen**. Willst du denselben Spot stattdessen als Aufgabe spielen, öffne den [GTO-Trainer](/de/solver) in der Seitenleiste – er teilt dir eine zufällige Hand aus, und sobald du eine Aktion wählst, zeigt er die gemischte Frequenz und den **EV-Verlust (bb)** deiner Wahl. Ohne Login bleibt dein Verlauf auf diesem Gerät; mit Login kannst du den Verlauf aus Lernspots und täglichen Aufgaben im Konto speichern und auf anderen Geräten weiterführen.

Schau zuerst auf die Spielerbeschriftung oben: **„OOP (SB (Open-Raiser))“**. Sobald du siehst, dass sie sich vom „OOP (BB (Caller))“ der früheren Spots unterscheidet, ist sofort klar, was dieser Artikel mit „die Rolle hat sich geändert“ meint. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

**Q. Sollte der Small Blind Blind vs. Blind immer c-betten?**

A. Nicht immer. Auf diesem Board bettet der Solver 67,4% und lässt 32,6% als Check. Das ist aber eine andere Welt als ein normaler Single Raised Pot, in dem der Spieler out of position 0,1%–23,7% bettet. **Wenn sich die Rolle ändert, ändert sich der Standard.** Denk daran, dass K-T-6 ein Board ist, das zum Open-Raiser passt – so wie in den früheren Spots ein Board-Typ 0,1% von 23,7% getrennt hat, fällt die Bet-Frequenz des Small Blinds auf Boards, die zum Caller passen.

**Q. Ist es beim Poker immer schlecht, out of position zu sein?**

A. Schlecht, aber nicht entscheidend. In diesem Spot holt der Small Blind ohne Position 103,1% seines Equity-Anteils, während der Big Blind mit Position nur 96,1% einsammelt. Ein ausreichend großer Range-Vorteil wiegt einen Positionsvorteil auf. Umgekehrt gilt: Eine schwache Range realisiert selbst in Position schlecht.

**Q. Warum nur ein Drittel des Pots betten?**

A. Weil die Verteidigungsrange des Gegners weit ist. Die beiden Ranges sind fast gleich groß, 538 Combos zu 525. Gegen jemanden, von dem du keinen Fold erwarten kannst, bringt breiter Druck mit kleiner Size mehr. Denk daran, dass dieser Lernspot nur die 33%-Size als Kandidaten hatte.

**Q. Warum ist 6-6 auf diesem Board das einzige Set des Big Blinds?**

A. Weil K-K und T-T gegen ein Open des Small Blinds ge-3-bettet statt gecallt werden. Die Calling-Range des Big Blinds behält also nur 6-6, drei Combos (0,6%), während der Small Blind K-K, T-T und 6-6 hält, also neun (1,7%). A-A fehlt dem Big Blind aus demselben Grund.
`.trim(),
};

export default POST;
