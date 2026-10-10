import type { Post } from "../posts";

/**
 * GTO-Solver-Serie 8 (de) – A♦K♠2♥, 3-Bet-Pot (BB 3-bettet, BTN callt).
 * Quelle: lib/posts-en/3bet-pot-cbet.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B/§4-B-2
 *   (Lernspot-Ergebnis vom 2026-08-20) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 8 (title fest, Long-Tail «C-Bet im 3-Bet-Pot A-K-2» – redaktionell).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md (Spotname, Set/Drilling, Keine Made Hand).
 * Grenzen: nur erste Flop-Entscheidung des BB · kein Knoten für die Reaktion des BTN oder einen Raise · ohne Rake.
 * Check 0,0% = Bildschirmwert (Rohausgabe: Rest auf 41 Combos, max. K♥K♦ 0,09%).
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "A-K-2: Die ganze Range bettet",
  seoTitle: "3-Bet-Pot auf A-K-2: Warum niemand checkt – SPR 4",
  desc: "Im 3-Bet-Pot auf A-K-2 bettet jede der 63 Combos. Nicht weil die Range stark ist, sondern weil dem Caller Pocket-Asse und -Könige fehlen.",
  tldr: "Auf A♦K♠2♥ im 3-Bet-Pot bettet der Big Blind seine ganze Range: Der Check rundet auf 0,0%, und keine der 63 Combos checkt auch nur 0,1% der Zeit. In den sieben Spots davor war sein Standard der Check, in 76,2% bis 99,9% der Fälle. Umgedreht hat das vor allem die Preflop-Aktion: Der Big Blind hat ge-3-bettet, statt zu callen, also gehört ihm die Spitze dieses Flops, während der Button seine Pocket-Asse und -Könige per 4-Bet aus der Range genommen hat. Und bei einer SPR von 4,0 gibt es keine spätere Street, auf die man ausweichen könnte.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster für den 3-Bet-Pot auf A♦K♠2♥: Jede Hand in der Range des Big Blinds ist in den Farben der beiden Bets eingefärbt, Check steht bei 0,0%",
  tags: ["a-k-2 flop", "c-bet im 3-bet-pot", "3-bet-pot", "spr poker", "was ist spr poker", "effektiver stack poker", "gto", "poker"],
  content: `
In den sieben Spots vor diesem lautete die Antwort des Big Blinds (BB) fast immer: checken. Selbst auf dem [9-8-7-Flop](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp"), wo das Anspielen am meisten zählte, bettete er nur in 23,7% der Fälle. Überall sonst checkte er zwischen 88,8% und 99,9%.

Hier macht er das Gegenteil: **Der Big Blind bettet seine ganze Range** – alle 63 Combos, jede in mindestens 99,9% der Fälle.

Geändert hat sich vor allem die Preflop-Aktion: Der Big Blind hat **ge-3-bettet**, statt zu callen, also liegen 22,5bb im Pot statt 5,5bb. (⚠ Auch das Board ist ein anderes – Spot ① war A♥7♦2♣, hier ist es A♦K♠2♥ –, das ist also kein kontrollierter Vergleich, in dem nur die Preflop-Aktion variiert.) Dieser Unterschied stellt den ganzen Flop auf den Kopf. Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster.


:::stripe
Spot | BB 3-bettet → BTN callt (heads-up)
Flop | A♦ K♠ 2♥ (Rainbow)
Pot · Stack | Pot 22,5bb · effektiver Stack 89bb · **SPR 4,0**
Ergebnis | BB bettet 100% – Check steht bei 0,0%
:::

> **Kurze Antwort**
> Der Big Blind bettet seine ganze Range. Die kleine Size (7,4bb, 33% des Pots) wählt er in 57,8% der Fälle, die große (14,9bb, 66%) in 42,2%. Das liegt nicht daran, dass jede Hand stark wäre – 38,1% der Range sind ein Pocket Pair unter dem König. Es liegt daran, dass **der Button (BTN) seine Pocket-Asse und -Könige schon vor dem Flop per 4-Bet aus der Range genommen hat**: Die Spitze dieses Boards gehört einem einzigen Spieler, und bei einer Stack-to-Pot-Ratio (SPR) von 4,0 gibt es keine spätere Street, für die sich ein Check aufzuheben lohnt.

## Unter welchen Bedingungen entstanden diese Zahlen?

★**Die Bedingungen sind andere als in den ersten sieben Spots.** Pot, Stack und Rollen haben sich alle geändert, deshalb kommt die Tabelle zuerst.

![Pokertisch mit Flop A♦K♠2♥: Nur Big Blind und BTN sind noch im Pot (22,5bb), beide mit 89bb Stack – der Big Blind (OOP) hat preflop ge-3-bettet und handelt zuerst](/images/gto-3bp-ace-king-scene-de.webp "A♦K♠2♥ · BTN eröffnet, SB foldet, BB 3-bettet auf 11bb, BTN callt – der Big Blind handelt zuerst")

| Bedingung | Dieser Spot (3-Bet-Pot) | ①–⑦ (Single Raised Pot) |
|---|---|---|
| Preflop-Aktion | BTN eröffnet → **BB 3-bettet auf 11bb** → BTN callt | BTN eröffnet auf 2,5bb → BB callt |
| OOP (out of position, handelt zuerst) | **BB – der 3-Bettor** | BB – der Caller |
| IP (in Position) | BTN – der Caller | BTN – der Open-Raiser |
| Pot | **22,5bb** | 5,5bb |
| Effektiver Stack | **89bb** | 97,5bb |
| **SPR** | **4,0** | 17,7 |
| Bet Sizes | Etwa 1/3 und 2/3 des Pots | Etwa 33% und 75% (⑦ hatte nur eine Size) |
| Rake | Nicht berücksichtigt | Nicht berücksichtigt |
| Geprüft | 20.08.2026 | ①–④ 19.08.2026 · ⑤–⑦ 20.08.2026 |

Die 22,5bb im Pot sind ==11 aus der 3-Bet + 11 aus dem Call + 0,5 des gefoldeten Small Blinds==, und der effektive Stack ist ==100 − 11 = 89bb==.

## Checkt der Big Blind hier wirklich 0%?

**0,0% auf dem Bildschirm.** Die Rohausgabe enthält zwar einen Rest – 41 der 63 Combos tragen einen Hauch von Check, am meisten K♥K♦ mit 0,09%, zusammen weniger als ein Hundertstel einer Combo. Das ist Rauschen des Solvers, keine Strategie, also lies es als null. Stattdessen verteilen sich die Bets auf zwei Sizes: 57,8% nehmen die kleine mit 7,4bb, 42,2% die große mit 14,9bb. In den sieben Single Raised Pots davor war der Standard des Big Blinds das Gegenteil – in jedem einzelnen.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Bet 7,4bb (33% vom Pot) | **57,8%** | 36,6 |
| Bet 14,9bb (66% vom Pot) | 42,2% | 26,4 |
| Check | **0,0%** | **0,0** |

(Die Prozentwerte und die Combo-Zahlen des Solvers werden unterschiedlich aggregiert und lassen sich nicht exakt ineinander umrechnen – ==36,6 ÷ 63 = 58,1%== gegenüber den angezeigten 57,8%. **Die Werte oben sind so zitiert, wie das Panel sie zeigt.** Das Ergebnis von 0 Combos ist davon nicht betroffen.)

0,0% heißt nicht, dass Checken verboten ist. Es heißt, dass **in diesem Spielbaum und mit diesen Ranges der Check-EV jeder Combo unter ihrem Bet-EV lag.**

In den früheren Spots behielt die unterlegene Aktion noch einen Rest – 0,2%, 0,1%. Hier bekommt der Check nicht einmal den.

## Warum bettet im 3-Bet-Pot auf A-K-2 die ganze Range?

**Weil dem Big Blind die Spitze dieses Boards uneingeschränkt gehört.** Drei Hände machen auf A-K-2 ein Set, und er hält zwei davon. Wenn der Spieler, der zuerst handeln muss, auch viel öfter die beste Hand hält, schützt ein Check nichts, was eine Bet nicht besser schützt. Die Kategorientabelle zeigt, wie weit das reicht.

| Kategorie | BB (OOP) | Combos | BTN (IP) | Combos |
|---|---|---|---|---|
| Set | **9,5%** | 6 | 2,3% | **3** |
| Zwei Paare | **14,3%** | 9 | 6,9% | 9 |
| Top Pair (ein Ass) | **33,3%** | 21 | 20,8% | 27 |
| Second Pair (ein König) | 4,8% | 3 | **11,5%** | 15 |
| Underpair | 38,1% | 24 | **46,2%** | 60 |
| Keine Made Hand | **0,0%** | **0** | 12,3% | 16 |

(Auf dem Bildschirm hat der Big Blind überhaupt keine Zeile „Keine Made Hand“ – eine Kategorie mit 0% wird nicht angezeigt.)

Schau auf die oberste Zeile. **Drei Hände machen auf A-K-2 ein Set – AA, KK und 22 –, und der Button hält nur die letzte.** (Im Panel des Solvers heißt diese Zeile *Set/Drilling*. Auf einem Board ohne Paar ist ein Pocket Pair, das eine Boardkarte trifft, ein **Set** – den Unterschied zu Trips erklärt der [Spot mit gepaartem Board](/de/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-de.webp").) Der Button 4-bettet seine Pocket-Asse und -Könige vor dem Flop, also stehen seine Sets bei drei Combos gegen sechs beim Big Blind.

Das ist der ganze Spot. Wenn dein Gegner fast nie die beste Hand haben kann, kannst du auch mit den Teilen deiner Range betten, die überhaupt nicht stark sind – und 38,1% dieser Range sind ein Pocket Pair *unter* dem König.

**„Keine Made Hand: 0,0%“ ist nicht der Grund, auch wenn es naheliegt.** Dieselbe 3-Bet-Range auf einem niedrigen Board zeigt etwas anderes: Auf dem [8-5-2-Flop](/de/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-de.webp") später in dieser Serie sind 48,2% der Big-Blind-Range A-High ganz ohne Paar – und trotzdem checkt er nur **2,0%**. Von 0% Luft auf 48% Luft bewegt sich der Check um zwei Prozentpunkte. Was einen Check entstehen lässt, ist nicht, wie viel Luft du hältst, sondern ob sich das Board gegen den 3-Bettor wendet.

:::note[⚠ Das ist das Spiegelbild des [A-High-Flops im Single Raised Pot](/de/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-de.webp"). Dort war der Big Blind der **gedeckelte** Spieler – kein AA, AK oder AQ, weil er diese Hände ge-3-bettet hätte –, und er checkte 98,2%. Dieselbe A-High-Textur, vertauschte Plätze: Wer ge-3-bettet hat, behält die Spitze.]:::

## Was ist die SPR im Poker – und was ändert eine SPR von 4?

**SPR steht für Stack-to-Pot-Ratio: der effektive Stack geteilt durch den Pot zu Beginn des Flops.** Hier sind es ==89 ÷ 22,5 = 4,0==, der Stack dahinter ist also nur viermal so groß wie das, was schon in der Mitte liegt. Genau diese Zahl macht aus einer Flop-Entscheidung eine Entscheidung über den ganzen Stack, weil kein Platz mehr bleibt, die Frage aufzuschieben.

| Situation | Pot | Effektiver Stack | SPR |
|---|---|---|---|
| Single Raised Pot (①–⑦) | 5,5bb | 97,5bb | **17,7** |
| 3-Bet-Pot (dieser Spot) | 22,5bb | 89bb | **4,0** |

Die Zahl zählt, weil sie dir sagt, **wie viele Bets noch übrig sind** – nicht, wie viel Geld. Nimm die 66%-Size, die der Solver hier anbietet, und spiel sie Street für Street durch:

- Flop **14,9bb** → gecallt, der Pot liegt bei 52,3bb, 74,1bb bleiben übrig
- Turn **34,5bb** → gecallt, 39,6bb bleiben übrig
- River **39,6bb** all-in

**Drei Bets, und der Stack ist weg: ==14,9 + 34,5 + 39,6 = 89,0==.** Zwei Bets bringen dich auf 49,4bb, also 55,5% des Stacks – nicht alles. Willst du, dass die drei Bets mit demselben Anteil auf jeder Street genau im All-in landen, liegt dieser Anteil bei ==etwa 54% des Pots==.

Spielst du dieselben drei Bets in einem Single Raised Pot, hast du ==3,67 + 8,56 + 19,96 = 32,2bb== investiert, ein Drittel des Stacks. **Das ist der eigentliche Unterschied zwischen SPR 17,7 und SPR 4,0** – nicht das Geld, sondern die Zahl der Entscheidungen, die dir noch bleiben. Und wenn es keine spätere Street gibt, auf die du ausweichen kannst, kann ein Check nichts mehr kaufen.

## Warum wird die kleine Size öfter gewählt?

**Wegen der Form der Range, nicht wegen der Stacktiefe.** Alle 63 Combos hier sind ein Paar oder besser, also **fehlt der untere Teil der Range komplett**, und sie zerfällt nie in „Nuts oder nichts“. Ohne Luft, die man der großen Size zur Seite stellen könnte, wird die ganze Range zur kleinen geschoben – deshalb gehen 57,8% davon mit einem Drittel des Pots raus. („Condensed“ ist die übliche Bezeichnung für eine Range ohne unteren *und* ohne oberen Teil; sie passt hier nicht, weil diese Range die Spitze des Boards uneingeschränkt besitzt – beide oberen Sets, AA und KK, alle sechs Combos.)

A-K-2 Rainbow bietet fast nichts, worauf man ziehen könnte, also muss auch kein Draw zur Kasse gebeten werden. Von beiden Gründen ist es die Form der Range, die die Arbeit macht.

⚠ **„Kurze Stacks, also kleine Bets“ ist nicht der Grund.** Zwei spätere Spots dieser Serie haben genau dieselbe SPR von 4,0 und feuern fast immer die *große* Size – Q-T-7 mit **98,4%** und [8-5-2](/de/blog/3bet-pot-low-board) mit **97,8%** –, und zwar aus zwei verschiedenen Gründen. Q-T-7 ist ein nasses Board, also ist eine große Bet das, was den Draws einen Preis setzt. 8-5-2 ist trocken wie dieses, aber seine Range teilt sich in Overpairs und A-High mit fast nichts dazwischen, und eine polarisierte Form bettet groß. Gleiche Stacktiefe, entgegengesetztes Sizing, und keiner der beiden Gründe ist die Tiefe.

**Und die große Size ist auch nicht „der Anteil der starken Hände“.** Zähl die Combos, die einen ganzen Stack in die Mitte bringen können – Sets, Zwei Paare und Top Pair –, und du kommst auf ==6 + 9 + 21 = 36 Combos, 57,1%==, mehr als die 42,2%, die groß betten.

Das verräterische Detail: **Die Combo-Zahlen sind keine ganzen Zahlen** – 26,4 groß und 36,6 klein. Würden ganze Kategorien einer Size zugeteilt, wären beide Zahlen ganzzahlig. **Dieselbe Hand mischt zwischen den beiden Sizes**, und 42,2% heißt „42,2% der Range“ – nicht „eine bestimmte Stufe“. Die Size unlesbar zu machen, ist genau der Zweck.

## Was hält der Button wirklich?

**Fast die Hälfte seiner Calling-Range – 46,2% – ist ein Pocket Pair ohne Ass und ohne König** – er läuft also direkt in ein Board, das beides zeigt.

![Infografik zur Range-Zusammensetzung auf A♦K♠2♥ im 3-Bet-Pot: Der Big Blind hält anteilig mehr Sets, Zwei Paare und Top Pair, während sich die Range des Buttons bei mittleren Pocket Pairs ballt](/images/gto-3bp-ace-king-ranges-de.webp "A-K-2 im 3-Bet-Pot · der Big Blind behält die Spitze des Boards, die Range des Buttons ballt sich in der Mitte")

Underpairs machen 46,2% aus, also 60 Combos: QQ bis 33, zehn Paare mit je sechs Combos. Auf dieser Textur können sie keine zwei Barrels callen.

Eine Einschränkung muss man aussprechen: Diese 130 Combos sind die **Calling-Range, die diese Berechnung vorgegeben bekam** – eine Preflop-Einstellung, die im Spielbaum festgeschrieben ist, keine Verteidigung, die der Solver selbst ermittelt hat. Echte Gegner folden mittlere Pocket Pairs und callen stattdessen mit A-Q, A-J und K-Q. Gegen so einen Spieler gibt es die 46,2% nicht – schau dir also an, womit dein Gegner wirklich gecallt hat, bevor du diese Zahlen in ein Live-Spiel mitnimmst.

## Wie reagiert der Button auf eine C-Bet über ein Drittel des Pots?

**Gegen diese Continuation Bet (C-Bet) bis zum Ende zu callen, ist schwer.** Die Underpairs des Buttons liegen sowohl unter dem Ass als auch unter dem König, und bei einer SPR von 4,0 bleibt nicht mehr viel Abstand, bis der Stack weg ist.

⚠ *Welche* Bet das All-in ist, hängt von der Size ab. Bei zwei Dritteln sind es 14,9 → 34,5 → 39,6, genau drei. Bei der Bet über **7,4bb (ein Drittel)**, um die es in diesem Abschnitt geht, kommen drei Bets auf ==7,4 + 12,3 + 20,4 = 40,1bb==, nur 45% des Stacks. Und den Turn-Knoten gibt es in dieser Berechnung nicht – der Lernspot endet bei der ersten Aktion am Flop, alles ab hier ist also aus der Range-Zusammensetzung abgelesen.

Gegen 7,4bb in einen Pot von 22,5bb braucht es etwa ==22,5 ÷ (22,5 + 7,4) = 75,3%== der Range, damit ein reiner Bluff keinen Gewinn macht – die **Mindestverteidigungsfrequenz (MDF)**. Die Hände des Buttons, die A-K-2 tatsächlich getroffen haben, summieren sich aber nur auf ==20,8 + 11,5 + 6,9 + 2,3 = 41,5%==. 🪶 Beachte, dass die 2,3% Sets **22** sind – gepaart mit der Zwei, nicht mit Ass oder König. Zählst du nur die Hände, die ein Ass oder einen König gepaart haben, kommst du auf **39,2%**.

⚠ **In diesem Spot steht die Prämisse hinter der MDF allerdings auf schwachen Füßen.** Die MDF ist die Frequenz, die einen **reinen Bluff ohne jede Equity** indifferent macht – und die Betting-Range des Big Blinds enthält **0,0% ohne Made Hand, keine einzige Combo.** Eine Range ganz ohne ungepaarte Hand lässt wenig von dem reinen Bluffen übrig, das die MDF voraussetzt, also geht die Tendenz zu **mehr** Folds, nicht zu weniger. ⚠ Zwei Einschränkungen halten das ehrlich: ① „0% ohne Made Hand“ ist nicht „0% Bluffs“ – ein schwaches Underpair in der Betting-Range kann die Arbeit eines Bluffs oder einer Protection Bet übernehmen; ② der Reaktionsknoten des Buttons ist in dieser Berechnung nicht enthalten, die tatsächliche optimale Verteidigungsfrequenz lässt sich hier also nicht bestätigen. Lies die 41,5% deshalb nicht als „also mit mittleren Pocket Pairs weitermachen“. Ob die kleine Size diesen 60 Combos überhaupt den nötigen Preis bietet, ist zweifelhaft: Gegen die ganze Range des Big Blinds halten nur QQ und JJ mehr als die 19,8%, die sie verlangt, während 99 bis 33 bei 7,6%–9,2% liegen. So oder so ist der Grund für die Size die **Form der Range** aus dem vorigen Abschnitt; das hier ist ein Nebeneffekt.

:::note[⚠ Die MDF vereinfacht die Bet zu einem reinen Bluff. Sie sagt nur dann etwas aus, wenn der Gegner tatsächlich Bluffs hat – wo die Betting-Range wie hier bis ganz unten aus einem Paar oder Besserem besteht, gerät die Annahme des reinen Bluffs ins Wanken, und die Zahl ist nur ein grober Anhaltspunkt. Wäge in der Praxis auch ab, wie gut sich eine Hand auf späteren Streets hält.]:::

## Warum liegt die EQR bei 109,6%, obwohl der Big Blind out of position ist?

**Weil ein ausreichend großer Range-Vorteil (Range Advantage) die Position überwiegt.** Das ist der erste Spot der Serie, in dem der Spieler out of position mehr realisiert als seine Equity – 68,9% gegen 31,1% ist eine ganz andere Größenordnung als in den Single Raised Pots, wo der Spieler out of position bei **45,1% bis 48,5%** gegen **51,5% bis 54,9%** lag.

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68,9%** | 31,1% |
| EV (bb) | 16,99 | 5,51 |
| **Equity-Realisierung (EQR)** | **109,6%** | 78,7% |

In einem Pot von 22,5bb sind 68,9% Equity ==22,5 × 68,9% = 15,50bb== wert. Tatsächlich sammelt der Big Blind **16,99bb** ein, und ==16,99 ÷ 15,50== ist seine Equity-Realisierung: **109,6%**.

:::pull[Position vergrößert einen Vorteil. Sie erschafft keinen.]:::

Die 78,7% des Buttons sind dafür kein eigener Beleg – sie sind dieselbe Tatsache von der anderen Seite gesehen: Die beiden EVs ergeben zusammen den Pot, also drückt eine Realisierung über 100% auf der einen Seite die andere zwangsläufig darunter. Interessant ist die Größe der Lücke. In ①–⑦ realisierte der Spieler out of position zwischen **77,9% und 93,2%**; hier liegt er über 100%, weil alles, was der Button foldet, im Stack des Big Blinds landet. Warum Position normalerweise Geld wert ist, erklärt [Spielen in Position](/de/blog/holdem-position-play).

## Was ändert sich am Tisch?

- **Hör auf zu überlegen, ob du im 3-Bet-Pot c-betten sollst – aber nur heads-up.** Auf einem trockenen A-High-Board, auf dem der 3-Bettor die Spitze hält, bettet die ganze Range, und die einzige Frage ist die Size. Kommt ein Cold-Caller mit und sehen drei Spieler den Flop, stimmt „alles betten“ nicht mehr; nimm für jeden zusätzlichen Spieler zuerst die Underpairs heraus.
- **Zähl deine SPR, bevor der Flop kommt.** Ein größerer Pot heißt weniger übrige Bets, nicht weniger Geld. **SPR 4 ist der Bereich, in dem drei große Bets den Stack aufbrauchen** – eine vierte gibt es nicht. Zähl die Bets, die dir bleiben, und wähl dann die Size.
- **★Die ganze Range zu betten ist nicht dasselbe, wie mit der ganzen Range den Stack reinzustellen.** 38,1% dessen, was hier bettet, sind ein Pocket Pair unter dem König. Selbst innerhalb dieser Gruppe trennt es sich: QQ schlägt mehr als die Hälfte der Calling-Range des Buttons und ist eine Hand, mit der du den Turn checkst, während TT und 99 als Erste gehen, wenn ein Raise kommt.
- **★Top Pair trennt sich nach dem Kicker.** Diese 21 Combos enthalten **A5s und A4s** – Hände, die als Blocker ge-3-bettet wurden, mit dem schlechtesten Kicker, den es gibt. Die Range, die 89bb callt, ist eng – **22 und A-K im Kern**, dazu je nach Gegner ein starkes Top Pair wie A-Q. **A-4 schlägt davon nichts.** Die Sets (AA, KK) schlagen alles davon. **A-K liegt dazwischen**: Es splittet gegen das A-K des Buttons und verliert gegen 22, also gilt „SPR 4, also alles rein“ bedingungslos nur für **AA und KK** – ob A-K dazugehört, hängt davon ab, wie weit der Gegner callt.
- **★Wird der Flop geraist, ist die Hand genau dort entschieden.** Bei SPR 4 bindet ein Raise den Rest des Stacks. Das ist kein Spot, um zu callen und den Turn abzuwarten: Entscheide genau dort zwischen All-in und Fold – Sets gehen rein, niedrige Underpairs und Top Pair mit schwachem Kicker tendieren zum Fold. ⚠ Das ist eine Richtlinie, abgeleitet aus der SPR und den Handklassen, kein Ergebnis des Solvers: Dieses Beispiel hat keinen Knoten für den Fall eines Raises, die genauen Grenzen zwischen All-in, Call und Fold lassen sich also nicht bestätigen. Zwei Paare (A-K) hängen davon ab, wie weit die Raising-Range ist: Gegen eine Raising-Range aus Sets und A-K liegen sie nie vorne.
- **Übertrag „Check 0%“ nicht auf jeden 3-Bet-Pot.** Was das ändert, ist eher das Board als die Range: Dieselbe 3-Bet-Range checkt auf [8-5-2](/de/blog/3bet-pot-low-board) 2,0%, und auf einem Board, das gegen den 3-Bettor läuft, taucht ein echter Check auf. **„Ein Ass und ein König zusammen“ hat in diesem Beispiel diese Null erzeugt – keine Bedingung, die jeder 3-Bet-Pot erfüllen muss.** Wie du die 3-Bet-Range überhaupt aufbaust, steht in der [3-Bet-Strategie](/de/blog/holdem-3bet).

:::readnext[Weiterlesen]
/de/blog/low-board-check-raise | 6-5-2: Erst checken, dann Check-Raise | /images/gto-srp-low-rainbow-oop-de.webp
/de/blog/paired-board-strategy | 6-6-3: Mehr Trips, trotzdem 97% Check | /images/gto-srp-paired-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **A-High-Board, Vorteil für den 3-Bettor** → **⚡ Ergebnisse ansehen**.

Schau zuerst auf die Kopfzeile: **Pot 22,5bb · Stack 89bb**. Dort diese Werte statt der 5,5bb und 97,5bb der früheren Spots zu sehen, ist dieser ganze Artikel auf einen Blick. Dann such die Zeile, die fehlt: Das Panel **Hände** listet für den Big Blind nur **fünf** Kategorien, und die fehlende ist „Keine Made Hand“. Darüber, in der Aktionsleiste, zeigt der Check-Chip **0,0% / 0,0 Combos**.

Öffne dann den **GTO-Trainer** in der Seitenleiste: Er teilt dir eine Hand nach den echten Range-Gewichten aus und zeigt dir, wie viele Big Blinds deine Aktion kostet. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

## FAQ

**Q. Wofür steht SPR beim Poker?**

A. Für Stack-to-Pot-Ratio. Was sie in der Praxis misst, ist eher, wie viele Bets noch übrig sind, als wie viele Chips – dasselbe Buy-in von 100bb ergibt hier 4,0 und in einem Single Raised Pot 17,7, und diese beiden Zahlen spielen sich völlig unterschiedlich. Lies sie als die Zahl der Entscheidungen, die dir noch gehören.

**Q. Wie viele Bets hast du bei einer SPR von 4?**

A. Drei, und die dritte ist all-in. Zwei Drittel des Pots am Flop und am Turn ergeben 14,9 → 34,5bb, und die 39,6bb, die übrig bleiben, sind etwa ein Drittel des Pots am River – die dritte Bet ist also genau der Rest des 89bb-Stacks. Hörst du nach zwei auf, hast du 49,4bb investiert – etwas mehr als die Hälfte. Wählst du eine größere Size, kommst du in zwei Bets dorthin – und genau darum geht es: Die Size, die du wählst, entscheidet, wie viele Entscheidungen dir noch gehören.

**Q. Sollte der 3-Bettor im 3-Bet-Pot immer c-betten?**

A. Auf diesem Board ja – der Solver checkt 0,0%. Die Bedingung ist aber eher das Board als die Range: Dieselbe 3-Bet-Range hat auf 8-5-2 48,2% A-High und checkt trotzdem nur 2,0%, während ein Board, das den Caller begünstigt, echte Checks hervorbringt. Was genau diese Null erzeugt, sind ein Ass und ein König, die zusammen kommen und dem Spieler, der gecallt hat, die Spitze der Range nehmen.

**Q. Warum hat der Button hier kein AA und kein KK?**

A. Die Calling-Range dieses Beispiels enthält sie nicht – die meisten AA und KK werden stattdessen ge-4-bettet. Das ist eine Preflop-Einstellung, die im Spielbaum festgeschrieben ist, nichts, was der Solver selbst ermittelt hat, und echte Berechnungen behalten manchmal ein paar davon in der Calling-Range, um deren Spitze zu schützen. Ändere das, und die Set-Zeile bewegt sich mit.

**Q. Warum bettet der Big Blind öfter klein als groß?**

A. Wegen der Form der Range – alle 63 Combos sind ein Paar oder besser, der untere Teil fehlt also, sie zerfällt nie in „Nuts oder nichts“, und eine solche Range bettet klein. **Nicht weil der Stack kurz ist:** Der [Q-T-7-Spot](/de/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-de.webp") hat dieselbe SPR von 4,0 und nimmt die große Size in 98,4% der Fälle.

**Q. Gelten diese Zahlen bei meinem Limit?**

A. Nutze sie als Ausgangspunkt, wenn die Bedingungen passen. Diese Berechnung erlaubte nur zwei Bet Sizes, ein Drittel und zwei Drittel des Pots – in einem Spiel mit Overbets verteilen sich die Frequenzen also anders. Dasselbe gilt für eine andere 3-Bet-Range oder Stacktiefe, und Rake ist in der Berechnung nicht enthalten.
`.trim(),
};

export default POST;
