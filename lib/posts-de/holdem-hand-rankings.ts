import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Pokerhände-Reihenfolge im Texas Hold'em — von der besten zur schlechtesten, mit Wahrscheinlichkeiten",
  seoTitle: "Poker Reihenfolge — welche Hand schlägt welche + Kicker",
  desc: "Flush getroffen und trotzdem verloren? Meist eine übersehene Regel. Alle 10 Pokerhände von der besten zur schlechtesten, mit Wahrscheinlichkeiten und Kickern.",
  tldr: "Die Reihenfolge der Pokerhände von der besten zur schlechtesten lautet: Royal Flush, Straight Flush, Vierling, Full House, Flush, Straße, Drilling, Zwei Paare, Paar und High Card.",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "14 Min.",
  emoji: "🃏",
  image: "/images/holdem-hand-rankings-hero.webp",
  imageAlt: "Royal Flush — 10 J Q K A in Pik auf einem Pokertisch mit Chip-Stacks und Dealer-Button",
  tags: ["pokerhände reihenfolge", "poker reihenfolge der hände", "texas holdem hände", "was schlägt was poker", "poker kicker", "poker gleichstand", "beste pokerhände", "poker blätter reihenfolge"],
  content: `
Du bist heads-up am River. Dein Flush ist da, du bist dir sicher, dass er der beste ist — und dann ==r:schiebt der Dealer den Pot auf die andere Seite==. Das Board war gepaart, dein Gegner hatte ein Full House, und du hast es überhaupt nicht kommen sehen.

Fast jeder „Ich dachte, ich gewinne“-Moment läuft auf dasselbe hinaus: ==die **Reihenfolge der Pokerhände** nicht schnell genug zu lesen==. Die Reihenfolge selbst lernt man in fünf Minuten. Sie live zu lesen, unter Druck, an einem gepaarten oder verbundenen Board — ==das erklärt kaum jemand richtig==.

Dieser Leitfaden löst beides. Du bekommst die komplette Reihenfolge mit den echten Wahrscheinlichkeiten, alle Split-Regeln, drei echte Board-Aufgaben zum Üben von „finde deine besten fünf Karten“ und eine 1-Sekunden-Routine, um jedes Board am Tisch zu lesen.

---

## Pokerhände-Reihenfolge: die komplette Liste auf einen Blick

Fang hier an. Das ist die gesamte Rangfolge, von der stärksten zur schwächsten Hand, mit der langfristigen Wahrscheinlichkeit, jede Hand bis zum River im Texas Hold'em zu treffen.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Hand | Auch genannt | Was es ist | Wahrscheinlichkeit (bis River) |
|:---|:---|:---|:---|:---:|
| **1** | Royal Flush | „Broadway-Flush“ | A-K-Q-J-10 in einer Farbe | 0,0032% |
| **2** | Straight Flush | „Steel Wheel“ (A-5) | 5 in Folge, eine Farbe | 0,0279% |
| **3** | Vierling | „Quads“ | Vier Karten gleichen Werts | 0,168% |
| **4** | Full House | „Boat“ / „Full Boat“ | Drilling + Paar | 2,60% |
| **5** | Flush | — | Beliebige 5 einer Farbe | 3,03% |
| **6** | Straße | — | 5 in Folge, gemischte Farben | 4,62% |
| **7** | Drilling | „Trips“ / „Set“ | Drei Karten gleichen Werts | 4,83% |
| **8** | Zwei Paare | — | Zwei verschiedene Paare | 23,5% |
| **9** | Paar | — | Zwei Karten gleichen Werts | 43,8% |
| **10** | High Card | „Kein Paar“ | Überhaupt keine Kombination | 17,4% |

</div>

> **Die eine Regel, die Diskussionen beendet**
> Paar und High Card machen zusammen rund 61% aller Sieben-Karten-Hände bis zum River aus. Große Hände wirken häufig, weil man sie sich merkt — aber die meisten Pots werden mit einem Paar und einem [Kicker](/de/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp") entschieden.

:::quiz:::

---

## Kartenstärke: die Grundlage in 30 Sekunden

Vor den Händen brauchst du die Kartenstärke. Nur zwei Dinge.

### Wertereihenfolge (von hoch nach niedrig)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

Das Ass ist die stärkste Karte und die einzige, die die Regeln biegt: Es spielt hoch (A-K-Q-J-10) *und* niedrig (A-2-3-4-5, das „Wheel“). Es kann nicht durch die Mitte herumlaufen — Q-K-A-2-3 ist **keine** Straße.

### Farben haben keinen Wert

Im Standard-Texas-Hold'em **schlägt keine Farbe eine andere**. Pik schlägt nicht Herz. Die Farbe zählt nur, um einen Flush zu *bilden*, nie um einen Gleichstand zu entscheiden. Haben zwei Spieler dieselben fünf Karten in verschiedenen Farben, wird der Pot geteilt — jedes Mal.

---

## Die 10 Pokerhände erklärt

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10, alle in Pik:::

**A♠ K♠ Q♠ J♠ 10♠** — der höchste Straight Flush und die beste Hand im Poker.

Sie kann nicht geschlagen werden; der einzige mögliche Gleichstand ist ein Royal Flush, der komplett auf dem Board liegt und allen gemeinsam gehört — dann wird der Pot geteilt. Du siehst ihn etwa einmal alle 31.000 Hände, daher treffen ihn viele Spieler jahrelang nicht. Wenn du ihn hast, ist deine einzige Aufgabe, so viele Chips wie möglich hineinzubekommen.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — fünf Herz in Folge:::

**9♥ 8♥ 7♥ 6♥ 5♥** — fünf Karten in Folge, alle einer Farbe.

Nur ein höherer Straight Flush oder ein Royal Flush schlägt ihn. Die niedrigste Version, A-2-3-4-5 in einer Farbe, heißt **„Steel Wheel“**. Treffen zwei Straight Flushes aufeinander, gewinnt der mit der höheren obersten Karte.

### #3 — Vierling (Quads)

:::hand[8♣,8♦,8♥,8♠,K♥] Vierling — vier Achten + Kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — alle vier Karten gleichen Werts.

Zwischen zwei Vierlingen gewinnt der höhere Vierling. Liegt der Vierling *auf dem Board* (alle vier geteilt), entscheidet der höchste **Kicker** — und der Ass-Kicker hat das Sagen.

### #4 — Full House (Boat)

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — drei Damen + zwei Fünfen:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — ein Drilling plus ein Paar.

Vergleiche **zuerst den Drilling**: QQQ55 schlägt JJJ99, weil Damen über Buben stehen, egal wie groß das Paar ist. Nur wenn die Drillinge gleich sind, vergleichst du die Paare.

> **Der häufigste Cooler**
> Sobald sich das Board paart, prüfe auf ein Full House, bevor du dich mit einem Flush oder einer Straße festlegst. „Mein Nut-Flush hat gegen ein Full House verloren“ ist der mit Abstand häufigste Bad Beat im Hold'em.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — fünf Karo:::

**A♦ J♦ 8♦ 6♦ 2♦** — beliebige fünf Karten einer Farbe, Reihenfolge egal.

Zwei Flushes werden Karte für Karte von oben verglichen: A-J-8-6-2 schlägt A-J-8-5-2, weil die 6 über der 5 steht. Vier Karten einer Farbe sind **kein** Flush — du brauchst fünf.

### #6 — Straße

:::hand[7♠,6♥,5♣,4♦,3♠] Straße — fünf in Folge, gemischte Farben:::

**7♠ 6♥ 5♣ 4♦ 3♠** — fünf Karten in Folge, Farben gemischt.

- **Die Nuts:** A-K-Q-J-10 („Broadway“) ist die höchste Straße.
- **Das Wheel:** A-2-3-4-5 ist die niedrigste Straße (das Ass spielt niedrig).
- **Verboten:** Sie kann nicht herumlaufen — K-A-2-3-4 ist keine Straße.

Zwischen zwei Straßen gewinnt die mit der höheren obersten Karte.

### #7 — Drilling (Trips / Set)

:::hand[J♣,J♠,J♥,A♦,4♠] Drilling — drei Buben + Kicker:::

**J♣ J♠ J♥ A♦ 4♠** — drei Karten gleichen Werts.

Es gibt zwei Wege, ihn zu bilden, und der Unterschied zählt:

- **Set:** ein Pocket-Paar plus eine passende Board-Karte (z. B. du hältst J♣ J♠, das Board bringt J♥). Versteckt und gefährlich.
- **Trips:** ein Paar auf dem Board plus eine deiner Karten. Für den Gegner leichter zu lesen und häufiger geteilt.

Ein Set holt mehr Chips, weil niemand es kommen sieht.

### #8 — Zwei Paare

:::hand[10♠,10♥,8♣,8♦,A♠] Zwei Paare — Zehnen und Achten + Ass-Kicker:::

**10♠ 10♥ 8♣ 8♦ A♠** — zwei verschiedene Paare.

Vergleich in dieser Reihenfolge: **höheres Paar → niedrigeres Paar → Kicker**. KK99-A schlägt QQJJ-A, weil Könige über Damen stehen, bevor irgendetwas anderes geprüft wird.

### #9 — Paar

:::hand[K♠,K♦,9♥,6♣,2♠] Paar — Könige + drei Kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — zwei Karten gleichen Werts.

Die häufigste fertige Hand im Hold'em. Zwei gleiche Paare entscheiden sich über die Kicker: **Wert des Paars → Kicker 1 → Kicker 2 → Kicker 3**, von hoch nach niedrig. Hier passieren die meisten „dieselbe Hand“-Niederlagen — achte auf deinen Kicker.

### #10 — High Card

:::hand[A♣,Q♠,9♥,5♦,3♣] High Card — keine Kombination:::

**A♣ Q♠ 9♥ 5♦ 3♣** — nichts verbindet sich.

Beim Showdown gewinnt die höchste Karte, dann die nächste, und so weiter über alle fünf. Stimmen alle fünf überein, wird geteilt. Das bleibt dir, wenn ein Bluff gecallt wird und nichts trifft.

---

## Wie Kicker und Splits wirklich funktionieren

![Poker-Showdown — die besten fünf Karten zweier Spieler im Vergleich](/images/holdem-hand-rankings-showdown.webp "Beim Showdown holt die beste Fünf-Karten-Hand den Pot")

Das ist der Teil, der echte Pots entscheidet — und den die meisten Tabellen überspringen. Wenn zwei Spieler **denselben Handtyp** haben, arbeite genau diese Reihenfolge ab:

1. **Vergleiche den Handtyp.** Ein Flush schlägt immer eine Straße, ein Full House schlägt immer einen Flush usw.
2. **Vergleiche die Karten, die die Hand bilden.** Ein Ass-Paar schlägt ein Königs-Paar; ein Flush mit Dame schlägt einen mit Bube.
3. **Vergleiche die Kicker.** Ist die fertige Hand gleich, entscheiden die übrigen Karten, eine nach der anderen von oben.
4. **Immer noch identisch? Pot wird geteilt.** Farben brechen niemals den Gleichstand.

Das Abzeichen rechts zeigt, ob der **Kicker zur Entscheidung der Hand verwendet wird**.

:::tiebreak
Royal Flush|Immer Gleichstand (Split)|-Kein Kicker
Straight Flush|Nur die höchste Karte|-Kein Kicker
Vierling|Wert des Vierlings → 5. Karte|+Kicker zählt
Full House|Wert des Drillings → des Paars|-Kein Kicker
Flush|Alle 5, von hoch nach niedrig|+Kicker zählt
Straße|Nur die höchste Karte|-Kein Kicker
Drilling|Wert des Drillings → 2 Kicker|+Kicker zählt
Zwei Paare|Höheres → niedrigeres Paar → Kicker|+Kicker zählt
Paar|Wert des Paars → 3 Kicker|+Kicker zählt
High Card|Alle 5, von hoch nach niedrig|+Kicker zählt
:::

Ein **Kicker** ist einfach eine Karte, die nicht Teil deiner fertigen Hand ist, aber trotzdem zum Brechen von Gleichständen genutzt wird. Bei A-A-K gegen A-A-Q haben beide ein Ass-Paar — der König-Kicker gewinnt. Deshalb achten Profis so sehr auf die *Qualität* ihrer hohen Karten, nicht nur darauf, ob sie ein Paar getroffen haben. Alle Gleichstand-Regeln je Hand an einem Ort findest du im [Kicker- und Tiebreaker-Leitfaden](/de/blog/holdem-tiebreak-rules); stimmen die besten fünf Karten exakt überein, wird der Pot [geteilt](/de/blog/holdem-split-pot-rules).

---

## Lies das Board: 3 echte Aufgaben

![K-K-K-A-4-Board auf einem Pokertisch — erkennst du das Full House vor dem Dealer?](/images/holdem-hand-rankings-board-puzzle.webp "Poker-Board-Aufgabe — finde deine besten fünf Karten")

Die Reihenfolge zu kennen ist nicht dasselbe wie sie schnell zu lesen. Hier sind drei echte Situationen. Decke die Antwort ab, finde deine besten fünf Karten aus den sieben und prüfe nach.

### Aufgabe 1 — Das versteckte Full House

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 Karten):::

Du hältst **Q♥ Q♦**. Was ist deine beste Hand?

→ Das Board zeigt bereits zwei Paare (A-A und K-K). Deine zwei Damen plus die Q♠ auf dem Board ergeben einen **Drilling Damen**, und zusammen mit den Assen auf dem Board hast du ein **Full House — QQQ + AA**. Das sind deine besten fünf. Anfänger hängen an „Ist AAKK + Q nicht nur zwei Paare?“ — nein. Sobald du einen Drilling hast, nimmst du das Full House. **Full House schlägt zwei Paare.**

### Aufgabe 2 — Der Flush, der eigentlich besser ist

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 Karten):::

Du hältst **6♥ 2♣**. Das Board hat vier Herz.

→ Deine 6♥ ist die fünfte Herz, also denkst du „Flush“. Aber sieh dir die Folge an: **10♥ 9♥ 8♥ 7♥ 6♥** sind fünf Herz *in Folge* — ein **Straight Flush mit Zehn hoch**, Hand #2. (Tausche die 6♥ gegen eine K♥ und die Herz sind 7-8-9-10-K — nicht mehr verbunden, also fällt es auf einen einfachen Flush mit König hoch zurück.) Prüfe immer, ob deine Flush-Karten auch *aufeinanderfolgend* sind, bevor du einen Straight Flush annimmst.

### Aufgabe 3 — Wenn geteilt werden muss

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 Karten):::

Du hältst **A♥ 3♣**. Das Board bringt bereits einen Drilling Könige.

→ Deine A♥ paart sich mit der A♠ auf dem Board und gibt dir ein **Full House, KKK + AA**. Hält dein Gegner aber ebenfalls ein einzelnes Ass, hat er *dasselbe* Full House und ihr teilt (nur das exakte Pocket-Paar A-A macht ein größeres Full House, Asse voll). Hat er kein Ass und nur ein kleineres Paar, gewinnt dein Full House. Die Lektion: Wenn das Board fast die ganze Arbeit macht, ist deine Hand oft nur eine zusätzliche Karte wert.

---

## Schnelle Antworten auf die Duelle, über die alle streiten

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Duell | Gewinnt | Warum |
|------|------|------|
| Flush vs Straße | **Flush** | #5 schlägt #6 |
| Full House vs Flush | **Full House** | #4 schlägt #5 |
| Drilling vs Zwei Paare | **Drilling** | #7 schlägt #8 |
| Straße vs Drilling | **Straße** | #6 schlägt #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (Ass hoch)** | Das Wheel ist die niedrigste Straße |
| Gleiches Paar, Kicker K vs J | **Kicker K** | Höherer Kicker gewinnt |
| Vierling vs Full House | **Vierling** | #3 schlägt #4 |

</div>

---

## Warum die Reihenfolge so ist, wie sie ist

Die Rangfolge ist nicht willkürlich — sie ist ==reine Wahrscheinlichkeit==. ==g:**Je schwerer eine Hand zu treffen ist, desto höher steht sie.**== Ein Flush steht über einer Straße, weil es in einem Deck mit 52 Karten schlicht weniger Wege gibt, fünf Karten einer Farbe zu bilden, als fünf in Folge in beliebigen Farben. Dieses eine Prinzip erklärt die gesamte Rangfolge.

Es erklärt auch die große Ausnahme, der du begegnen wirst: Im **Short Deck (6+) Hold'em**, wo die 2en bis 5en entfernt werden, werden Flushes schwerer als Full Houses — also schlägt dort ein ==r:**Flush ein Full House**==. Die Mathematik hat sich geändert, also hat sich die Reihenfolge geändert. Mehr zu den Unterschieden je Variante unten.

---

## Die 1-Sekunden-Routine zum Board-Lesen

![Infografik eines gepaarten Boards 9♥ Q♥ 9♠ 8♣ 7♠ — Paare und mögliche Straßen lesen, um die besten fünf Karten zu finden](/images/holdem-hand-rankings-board-read.webp "Wie man ein Poker-Board schnell liest — Farben, Straßen, Paare der Reihe nach")

Wenn die Time Bank läuft, gehe diesen Scan jedes Mal in dieser Reihenfolge durch, sobald das Board komplett ist:

**1. Zuerst die Farben** — liegen drei oder mehr Karten einer Farbe auf dem Board? Wenn ja, ist ==ein Flush möglich==. Sieh dir deine Farbe an.

**2. Dann die Verbindung** — gibt es Karten nahe beieinander im Wert (wie 8-9-10)? Wenn ja, ==lebt eine Straße==.

**3. Zuletzt die Paare** — ist das Board gepaart? ==r:Wenn ja, sind Full Houses und Vierlinge im Spiel, und dein Flush oder deine Straße kann in Gefahr sein.==

Trainierte Spieler lesen das Board in genau dieser Reihenfolge — zuerst die Gefahr (Flush/Straße auf dem Board), dann ob das Board gepaart ist (was alles bedroht). Mach es zur Gewohnheit und du hörst auf, am River leichtfertig zu callen.

---

## In 3 Schritten merken

| Schritt | Was tun | Zeit |
|------|------|------|
| **1** | Lerne drei Gruppen: Premium (#1-3), Mitte (#4-6), Häufig (#7-10) | 1 Tag |
| **2** | Übe nur die verwirrenden Duelle: Flush vs Straße, Full House vs Flush | 3 Tage |
| **3** | Sieh Poker-Streams und nenne den Sieger, bevor der Dealer ihn ansagt | 1-2 Wochen |

Erst zu gruppieren verhindert, dass die Reihenfolge wie zehn zufällige Dinge wirkt. Die verwirrenden Duelle aus Schritt 2 verursachen 90% der Anfängerfehler, also übe sie ausgiebig.

---

## Handreihenfolge je Spielvariante

Die Reihenfolge ist in fast allen Poker-Varianten gleich, mit einigen wichtigen Eigenheiten.

| Spiel | Handreihenfolge | Hauptunterschied |
|------|------|------|
| **Texas Hold'em** | Standard (dieser Guide) | Nutze 0-2 deiner Hole Cards |
| **Omaha** | Standard | Du musst *genau* 2 deiner 4 Hole Cards nutzen |
| **Seven-Card Stud** | Standard | Keine Gemeinschaftskarten |
| **Short Deck (6+)** | Angepasst | Flush schlägt Full House; oft zählt A-6-7-8-9 als Straße |

Fazit: Lerne die Standard-Reihenfolge einmal und sie trägt dich durch fast jedes Spiel. Merke dir nur Omahas „genau zwei“-Regel und die Aufwertung des Flushs im Short Deck.

---

:::readnext[Weiterlesen]
/de/blog/holdem-flush-vs-straight | Schlägt ein Flush eine Straße? | /images/holdem-flush-vs-straight-hero.webp
/de/blog/holdem-tiebreak-rules | Kicker- und Tiebreaker-Regeln | /images/holdem-tiebreak-hero.webp
:::

## Häufige Fragen

**Q. Was ist ein Flush im Poker?**

A. Ein Flush sind beliebige fünf Karten derselben Farbe — zum Beispiel A♦ J♦ 8♦ 6♦ 2♦ — unabhängig von der Reihenfolge. Er steht auf #5, über einer Straße und unter einem Full House. Halten zwei Spieler einen Flush, gewinnt die höchste Karte; Farben brechen nie den Gleichstand.

**Q. Was ist ein Full House im Poker?**

A. Ein Full House (ein „Boat“) ist ein Drilling plus ein Paar, etwa Q-Q-Q-5-5. Es steht auf #4 und schlägt Flush und Straße. Zwischen zwei Full Houses entscheidet zuerst der höhere Drilling — QQQ-55 schlägt also JJJ-99, egal wie groß das Paar ist.

**Q. Was ist eine Straße im Poker?**

A. Eine Straße sind fünf Karten in aufeinanderfolgender Wertreihenfolge mit gemischten Farben, etwa 7-6-5-4-3. Sie steht auf #6. Das Ass kann hoch (10-J-Q-K-A, „Broadway“) oder niedrig (A-2-3-4-5, das „Wheel“) spielen, aber eine Straße kann nicht um die Ecke herumlaufen — Q-K-A-2-3 ist keine Straße.

**Q. Schlägt ein Flush eine Straße im Poker?**

A. Ja. Ein Flush ist #5 und eine Straße #6, also gewinnt der Flush immer — siehe [warum ein Flush eine Straße schlägt](/de/blog/holdem-flush-vs-straight). Er steht höher, weil fünf Karten einer Farbe statistisch schwerer zu treffen sind als fünf in Folge.

**Q. Schlägt ein Full House einen Flush?**

A. Ja. Ein Full House (#4) schlägt einen Flush (#5) und eine Straße. Es verliert nur gegen Vierling, Straight Flush und Royal Flush.

**Q. Was schlägt eine Straße im Poker?**

A. Flush, Full House, Vierling, Straight Flush und Royal Flush schlagen alle eine Straße — und eine höhere Straße ebenfalls. Eine Straße (#6) schlägt trotzdem Drilling, zwei Paare, Paar und High Card.

**Q. Was schlägt einen Flush im Poker?**

A. Ein Full House, Vierling, Straight Flush oder Royal Flush schlägt einen Flush. Gegen einen anderen Flush gewinnt die höhere oberste Karte. Ein Flush (#5) schlägt trotzdem eine Straße und alles darunter.

**Q. Was schlägt ein Full House im Poker?**

A. Nur drei Hände schlagen ein Full House: Vierling, Straight Flush und Royal Flush. Ein höheres Full House gewinnt ebenfalls — und der Drilling wird vor dem Paar verglichen, also schlägt KKK-22 ein QQQ-AA.

**Q. Was schlägt einen Royal Flush im Poker?**

A. Nichts. Ein Royal Flush (A-K-Q-J-10 in einer Farbe) ist die bestmögliche Hand im Poker. Er kann nicht geschlagen werden — der einzige „Gleichstand“ ist ein Royal Flush, der komplett auf dem Board liegt und allen gemeinsam gehört, wodurch der Pot geteilt wird.

**Q. Was schlägt einen Straight Flush im Poker?**

A. Nur ein höherer Straight Flush oder ein Royal Flush (der einfach der Ass-hoch-Straight-Flush ist). Ein Straight Flush (#2) schlägt Vierling und jede Hand darunter.

**Q. Was ist ein Kicker?**

A. Ein Kicker ist eine Karte, die nicht Teil deiner fertigen Hand ist, aber Gleichstände bricht. Bei zwei gleichen Paaren gewinnt die höchste Seitenkarte (der Kicker). Der beste mögliche Kicker ist das Ass.

**Q. Können zwei Spieler dieselbe Hand haben?**

A. Ja. Sind die besten fünf Karten beider Spieler im Wert identisch, wird der Pot geteilt („chopped“). Farben brechen im Texas Hold'em nie den Gleichstand.

**Q. Muss man beide eigenen Hole Cards nutzen?**

A. Im Hold'em nein — du bildest deine besten fünf aus jeder Kombination deiner zwei Hole Cards und der fünf Gemeinschaftskarten, sogar mit null davon. (Omaha ist anders: Du musst genau zwei nutzen.)

**Q. Was ist der Unterschied zwischen Set und Trips?**

A. Beides sind Drillinge. Ein *Set* ist ein Pocket-Paar plus eine Board-Karte (gut versteckt); *Trips* sind ein Paar auf dem Board plus eine deiner Karten (leichter zu lesen). Sets holen mehr Chips.

**Q. Was ist die höchste Hand im Poker?**

A. Der Royal Flush (A-K-Q-J-10 in einer Farbe). Er ist unschlagbar — der einzige Gleichstand ist ein Royal Flush, der komplett auf dem Board liegt und den sich alle für einen Split-Pot teilen.

**Q. Ist ein Drilling besser als zwei Paare?**

A. Ja. Ein Drilling ist #7 und zwei Paare sind #8, also gewinnt der Drilling. Zwei Paare schlagen nur Paar und High Card.

**Q. Schlägt ein Straight Flush einen Vierling?**

A. Ja. Ein Straight Flush (#2) schlägt einen Vierling (#3) — fünf Karten in Folge einer Farbe übertreffen Quads. Das Einzige über einem Straight Flush ist ein Royal Flush, der einfach dessen Ass-hoch-Version ist.

**Q. Was ist die niedrigste (schlechteste) Hand im Poker?**

A. Die schlechtestmögliche Hand ist 7-5-4-3-2 in gemischten Farben („Sieben hoch“). Es ist das niedrigste High-Card-Blatt, das weder Paar, Straße noch Flush ist — die klassische „du hast nichts“-Hand.

**Q. Kann man drei Paare im Poker haben?**

A. Nein. Eine Pokerhand besteht immer aus fünf Karten, sie kann also höchstens zwei Paare enthalten. Ergeben deine Hole Cards und das Board über sieben Karten drei Paare, zählen nur deine besten zwei Paare für die Hand — eine Karte des dritten Paars kann noch den Kicker-Platz füllen, wenn sie deine höchste übrige Karte ist, aber es wird nie eine „Drei-Paare“-Hand.

**Q. Kann man ein Ass als 1 im Poker verwenden?**

A. Ja. Das Ass spielt hoch und niedrig, also ist A-2-3-4-5 (das „Wheel“) eine legale Straße — die niedrigstmögliche. Um die Ecke herumlaufen geht aber nicht: K-A-2-3-4 ist keine Straße.

---

## Die 3 Dinge, die du dir merken solltest

1. **Die Reihenfolge:** Royal Flush > Straight Flush > Vierling > Full House > Flush > Straße > Drilling > Zwei Paare > Paar > High Card.
2. **Die Falle:** Ein Flush (#5) schlägt eine Straße (#6) — und jedes gepaarte Board kann ein Full House verstecken, das beide schlägt.
3. **Die Realität:** Die meisten Pots werden mit Paar oder High Card gewonnen, also ist dein Kicker mehr wert, als du denkst.

Lerne die Reihenfolge an einem Nachmittag, übe die verwirrenden Duelle und führe an jedem Board den Scan „Farben → Straßen → Paare“ durch. Tu das, und du schiebst nie wieder den Pot auf die falsche Seite.

Wenn du die Rangfolge kennst, ist der nächste natürliche Schritt zu wissen, mit welchen Händen du überhaupt einsteigst.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Duell</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Schlägt ein Flush eine Straße?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Mathematik, die Fehllesungen und jede Gleichstand-Regel</div>
  </a>
  <a href="/de/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kicker- und Tiebreaker-Regeln</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Gleiches Paar — wer gewinnt? Kicker- und Split-Pot-Regeln</div>
  </a>
  <a href="/de/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wann wird ein Pot geteilt?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chop-Regeln und die 5 Gleichstand-Situationen erklärt</div>
  </a>
  <a href="/de/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Anfänger-Guide</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas-Hold'em-Regeln für Anfänger</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle Regeln vom Austeilen bis zum Showdown</div>
  </a>
  <a href="/de/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board-Lesen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie man das Board im Hold'em liest</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Finde deine besten 5 aus 7 — nasses vs. trockenes Board</div>
  </a>
</div>
`.trim(),
};
