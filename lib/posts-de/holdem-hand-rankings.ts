import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Pokerhände-Reihenfolge im Texas Hold'em — von der besten zur schlechtesten, mit Wahrscheinlichkeiten",
  seoTitle: "Geglaubt zu gewinnen und den Pot verloren? — Pokerhände",
  desc: "Du hast einen Flush getroffen und trotzdem den Pot verloren? Fast immer steckt eine einzige übersehene Regel dahinter. Hier sind alle 10 Pokerhände von der besten zur schlechtesten, die echten Wahrscheinlichkeiten und wie Kicker und Splits den Sieger bestimmen.",
  tldr: "Die Reihenfolge der Pokerhände von der besten zur schlechtesten lautet: Royal Flush, Straight Flush, Vierling, Full House, Flush, Straße, Drilling, Zwei Paare, Paar und High Card.",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-06-09",
  keepImagesInBody: true,
  readTime: "14 Min.",
  emoji: "🃏",
  tags: ["pokerhände", "pokerhände reihenfolge", "poker rangfolge", "texas holdem hände", "welche hand gewinnt poker", "kicker poker", "split pot regeln", "beste pokerhände"],
  content: `
Du bist heads-up am River. Dein Flush ist da, du bist dir sicher, dass er der beste ist — und dann schiebt der Dealer den Pot auf die andere Seite. Das Board war gepaart, dein Gegner hatte ein Full House, und du hast es überhaupt nicht kommen sehen.

Fast jeder „Ich dachte, ich gewinne“-Moment läuft auf dasselbe hinaus: die **Reihenfolge der Pokerhände** nicht schnell genug zu lesen. Die Reihenfolge lernt man in fünf Minuten. Schwierig ist es, sie live zu lesen, unter Druck, an einem gepaarten oder verbundenen Board — und genau das erklärt kaum jemand richtig.

Dieser Leitfaden löst beides. Du bekommst die komplette Reihenfolge mit den echten Wahrscheinlichkeiten, alle Split-Regeln, drei echte Board-Aufgaben zum Üben von „finde deine besten fünf Karten“ und eine 1-Sekunden-Routine, um jedes Board zu lesen.

---

## Pokerhände-Reihenfolge: die komplette Liste

Fang hier an. Das ist die gesamte Reihenfolge, von der stärksten zur schwächsten Hand, mit der ungefähren Wahrscheinlichkeit, jede Hand bis zum River im Texas Hold'em zu treffen.

| # | Hand | Auch genannt | Was es ist | Wahrscheinlichkeit (bis River) |
|------|------|------|------|------|
| **1** | Royal Flush | „Royal“ | A-K-Q-J-10 in einer Farbe | 0,0032 % |
| **2** | Straight Flush | „Steel Wheel“ (A-5) | 5 in Folge, eine Farbe | 0,0279 % |
| **3** | Vierling | „Four of a Kind“ | Vier Karten gleichen Werts | 0,168 % |
| **4** | Full House | „Full“ | Drilling + Paar | 2,60 % |
| **5** | Flush | — | 5 Karten einer Farbe | 3,03 % |
| **6** | Straße | „Straight“ | 5 in Folge, gemischte Farben | 4,62 % |
| **7** | Drilling | „Set“ / „Trips“ | Drei Karten gleichen Werts | 4,83 % |
| **8** | Zwei Paare | — | Zwei verschiedene Paare | 23,5 % |
| **9** | Paar | — | Zwei Karten gleichen Werts | 43,8 % |
| **10** | High Card | „Nichts“ | Keine Kombination | 17,4 % |

> **Die Regel, die Diskussionen beendet**
> Paar und High Card machen zusammen rund 61 % aller Sieben-Karten-Hände bis zum River aus. Große Hände wirken häufig, weil man sie sich merkt — aber die meisten Pots werden mit einem Paar und einem Kicker entschieden.

:::quiz:::

---

## Kartenstärke: die Grundlage in 30 Sekunden

Vor den Händen brauchst du die Kartenstärke. Nur zwei Dinge.

### Wertereihenfolge (von hoch nach niedrig)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

Das Ass ist die stärkste Karte und die einzige, die die Regel bricht: Es spielt hoch (A-K-Q-J-10) und niedrig (A-2-3-4-5, das „Wheel“). Aber es kann nicht durch die Mitte herumlaufen: Q-K-A-2-3 ist **keine** Straße.

### Farben haben keinen Wert

Im Standard-Texas-Hold'em **schlägt keine Farbe eine andere**. Pik schlägt nicht Herz. Die Farbe zählt nur, um einen Flush zu *bilden*, nie zum Brechen eines Gleichstands. Haben zwei Spieler dieselben fünf Karten in verschiedenen Farben, wird der Pot geteilt — jedes Mal.

---

## Die 10 Pokerhände erklärt

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10 in Pik:::

**A♠ K♠ Q♠ J♠ 10♠** — der höchste Straight Flush und die beste Hand im Poker.

Sie kann nicht geschlagen werden; der einzige mögliche Gleichstand ist ein Royal Flush, der komplett auf dem Board liegt und allen gemeinsam gehört — dann wird der Pot geteilt. Sie kommt etwa einmal alle 31.000 Hände vor, daher treffen viele Spieler sie jahrelang nicht. Wenn du sie hast, ist deine einzige Aufgabe, so viele Chips wie möglich hineinzubekommen.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — fünf Herz in Folge:::

**9♥ 8♥ 7♥ 6♥ 5♥** — fünf Karten in Folge, alle einer Farbe.

Nur ein höherer Straight Flush oder ein Royal Flush schlägt ihn. Die niedrigste Version, A-2-3-4-5 in einer Farbe, heißt „Steel Wheel“. Treffen zwei Straight Flushes aufeinander, gewinnt der mit der höheren Karte.

### #3 — Vierling

:::hand[8♣,8♦,8♥,8♠,K♥] Vierling — vier Achten + Kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — alle vier Karten gleichen Werts.

Zwischen zwei Vierlingen gewinnt der höhere Wert. Liegen alle vier *auf dem Board*, entscheidet der höchste **Kicker** — und das Ass hat das Sagen.

### #4 — Full House

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — drei Damen + zwei Fünfen:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — ein Drilling plus ein Paar.

Vergleiche **zuerst den Drilling**: QQQ55 schlägt JJJ99, weil Damen über Buben stehen, egal wie groß das Paar ist. Das Paar wird nur verglichen, wenn der Drilling gleich ist.

> **Der häufigste „Cooler“**
> Sobald sich das Board paart, suche nach einem Full House, bevor du dich auf einen Flush oder eine Straße festlegst. „Mein Nut-Flush hat gegen ein Full House verloren“ ist der häufigste Bad Beat im Hold'em.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — fünf Karo:::

**A♦ J♦ 8♦ 6♦ 2♦** — fünf Karten einer Farbe, unabhängig von der Reihenfolge.

Zwei Flushes werden Karte für Karte von oben verglichen: A-J-8-6-2 schlägt A-J-8-5-2, weil die 6 über der 5 steht. Vier Karten einer Farbe sind **kein** Flush: Du brauchst fünf.

### #6 — Straße

:::hand[7♠,6♥,5♣,4♦,3♠] Straße — fünf in Folge, gemischte Farben:::

**7♠ 6♥ 5♣ 4♦ 3♠** — fünf Karten in Folge, gemischte Farben.

- **Die höchste:** A-K-Q-J-10 („Broadway“) ist die höchste Straße.
- **Das Wheel:** A-2-3-4-5 ist die niedrigste (das Ass spielt niedrig).
- **Verboten:** Sie kann nicht herumlaufen — K-A-2-3-4 ist keine Straße.

Zwischen zwei Straßen gewinnt die mit der höheren Karte.

### #7 — Drilling (Set / Trips)

:::hand[J♣,J♠,J♥,A♦,4♠] Drilling — drei Buben + Kicker:::

**J♣ J♠ J♥ A♦ 4♠** — drei Karten gleichen Werts.

Es gibt zwei Wege, ihn zu bilden, und der Unterschied zählt:

- **Set:** ein Paar auf der Hand plus eine Board-Karte (z. B. du hältst J♣ J♠ und das Board bringt J♥). Versteckt und gefährlich.
- **Trips:** ein Paar auf dem Board plus eine deiner Karten. Für den Gegner leichter zu lesen und häufiger geteilt.

Das Set holt mehr Chips, weil niemand es kommen sieht.

### #8 — Zwei Paare

:::hand[10♠,10♥,8♣,8♦,A♠] Zwei Paare — Zehnen und Achten + Ass-Kicker:::

**10♠ 10♥ 8♣ 8♦ A♠** — zwei verschiedene Paare.

Vergleich in dieser Reihenfolge: **höheres Paar → niedrigeres Paar → Kicker**. KK99-A schlägt QQJJ-A, weil Könige über Damen stehen, bevor man irgendetwas anderes ansieht.

### #9 — Paar

:::hand[K♠,K♦,9♥,6♣,2♠] Paar — Könige + drei Kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — zwei Karten gleichen Werts.

Die häufigste fertige Hand im Hold'em. Zwei gleiche Paare entscheiden sich über die Kicker: **Wert des Paars → Kicker 1 → Kicker 2 → Kicker 3**, von hoch nach niedrig. Hier passieren die meisten „dieselbe Hand“-Niederlagen: achte auf deinen Kicker.

### #10 — High Card

:::hand[A♣,Q♠,9♥,5♦,3♣] High Card — keine Kombination:::

**A♣ Q♠ 9♥ 5♦ 3♣** — nichts verbindet sich.

Beim Showdown gewinnt die höchste Karte, dann die nächste, und so weiter über alle fünf. Stimmen alle fünf überein, wird geteilt. Das bleibt dir, wenn ein Bluff gecallt wird und nichts trifft.

---

## Wie Kicker und Splits wirklich funktionieren

![Poker-Showdown — die besten fünf Karten zweier Spieler im Vergleich](/images/holdem-hand-rankings-showdown.webp "Beim Showdown holt die beste Fünf-Karten-Hand den Pot")

Das ist der Teil, der echte Pots entscheidet — und den die meisten Tabellen überspringen. Wenn zwei Spieler **denselben Handtyp** haben, folge genau dieser Reihenfolge:

1. **Vergleiche den Handtyp.** Ein Flush schlägt immer eine Straße, ein Full House schlägt immer einen Flush usw.
2. **Vergleiche die Karten, die die Hand bilden.** Ein Ass-Paar schlägt ein Königs-Paar; ein Flush mit Ass schlägt einen mit Bube.
3. **Vergleiche die Kicker.** Ist die fertige Hand gleich, entscheiden die übrigen Karten, eine nach der anderen von oben.
4. **Immer noch identisch? Pot wird geteilt.** Farben brechen niemals den Gleichstand.

Das Abzeichen rechts zeigt, ob der **Kicker zur Entscheidung der Hand verwendet wird**.

:::tiebreak
Royal Flush|Immer Split (Pot geteilt)|-Kein Kicker
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

Ein **Kicker** ist einfach eine Karte, die nicht Teil deiner fertigen Hand ist, aber den Gleichstand bricht. Bei A-A-K gegen A-A-Q haben beide ein Ass-Paar — der König-Kicker gewinnt. Deshalb achten gute Spieler so sehr auf die *Qualität* ihrer hohen Karten, nicht nur darauf, ob sie ein Paar treffen.

---

## Lies das Board: 3 echte Aufgaben

Die Reihenfolge zu kennen ist nicht dasselbe wie sie schnell zu lesen. Hier sind drei echte Situationen. Decke die Antwort ab, finde deine besten fünf Karten aus den sieben und prüfe nach.

### Aufgabe 1 — Das versteckte Full House

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 Karten):::

Du hältst **Q♥ Q♦**. Was ist deine beste Hand?

→ Das Board zeigt bereits zwei Paare (A-A und K-K). Deine zwei Damen plus die Q♠ auf dem Board ergeben einen **Drilling Damen**, und zusammen mit den Assen auf dem Board hast du ein **Full House — QQQ + AA**. Das sind deine besten fünf. Anfänger hängen an „Ist AAKK + Q nicht nur zwei Paare?“ — nein. Sobald du einen Drilling hast, nimmst du das Full House. **Full House schlägt zwei Paare.**

### Aufgabe 2 — Der Flush, der eigentlich besser ist

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 Karten):::

Du hältst **K♥ 2♣**. Das Board hat vier Herz.

→ Deine K♥ ist die fünfte Herz, also denkst du „Flush“. Aber sieh dir die Folge an: **K♥ 10♥ 9♥ 8♥ 7♥** sind fünf Herz *in Folge* — ein **Straight Flush mit König**, Hand #2. Prüfe immer, ob deine Flush-Karten auch verbunden sind, bevor du annimmst, es sei nur ein Flush.

### Aufgabe 3 — Wenn geteilt werden muss

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 Karten):::

Du hältst **A♥ 3♣**. Das Board bringt bereits einen Drilling Könige.

→ Deine A♥ paart sich mit der A♠ auf dem Board und gibt dir ein **Full House, KKK + AA**. Hält dein Gegner aber ebenfalls ein einzelnes Ass, hat er dasselbe Full House und es wird geteilt (nur ein exaktes Pocket-Paar A-A macht ein größeres Full House, Asse voll). Hat er kein Ass, sondern nur ein kleineres Paar, gewinnt dein Full House. Die Lektion: Wenn das Board fast die ganze Arbeit macht, ist deine Hand oft nur eine zusätzliche Karte wert.

---

## Schnelle Antworten auf die Duelle, über die alle streiten

| Duell | Gewinnt | Warum |
|------|------|------|
| Flush vs Straße | **Flush** | #5 schlägt #6 |
| Full House vs Flush | **Full House** | #4 schlägt #5 |
| Drilling vs Zwei Paare | **Drilling** | #7 schlägt #8 |
| Straße vs Drilling | **Straße** | #6 schlägt #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (Ass hoch)** | Das Wheel ist die niedrigste Straße |
| Gleiches Paar, Kicker K vs J | **Kicker K** | Höherer Kicker gewinnt |
| Vierling vs Full House | **Vierling** | #3 schlägt #4 |

---

## Warum die Reihenfolge so ist

Die Rangfolge ist nicht willkürlich — sie ist reine Wahrscheinlichkeit. **Je schwerer eine Hand zu treffen ist, desto höher steht sie.** In einem Deck mit 52 Karten gibt es schlicht weniger Wege, fünf Karten einer Farbe zu bilden, als fünf in Folge in beliebigen Farben — deshalb steht der Flush über der Straße. Dieses eine Prinzip erklärt die gesamte Rangfolge.

Es erklärt auch die große Ausnahme, der du begegnen wirst: Im **Short Deck (6+) Hold'em**, wo die Karten 2 bis 5 entfernt werden, werden Flushes schwerer als Full Houses — also schlägt dort ein **Flush ein Full House**. Die Mathematik ändert sich, die Reihenfolge ändert sich. Mehr zu den Unterschieden je Variante unten.

---

## Die 1-Sekunden-Routine zum Board-Lesen

Wenn die Zeit drängt, gehe das jedes Mal in dieser Reihenfolge durch, sobald das Board komplett ist:

**1. Zuerst die Farben** — liegen drei oder mehr Karten einer Farbe auf dem Board? Wenn ja, ist ein Flush möglich. Sieh dir deine Farbe an.

**2. Dann die Verbindung** — gibt es Karten nahe beieinander im Wert (wie 8-9-10)? Wenn ja, lebt die Straße.

**3. Zuletzt die Paare** — ist das Board gepaart? Wenn ja, sind Full Houses und Vierlinge im Spiel, und dein Flush oder deine Straße kann in Gefahr sein.

Trainierte Spieler lesen das Board in dieser Reihenfolge — zuerst die Gefahr (Flush/Straße auf dem Board), dann ob das Board gepaart ist (was alles bedroht). Mach es zur Gewohnheit und du hörst auf, am River leichtfertig zu callen.

---

## In 3 Schritten merken

| Schritt | Was tun | Zeit |
|------|------|------|
| **1** | Lerne drei Gruppen: Premium (#1-3), Mitte (#4-6), Häufig (#7-10) | 1 Tag |
| **2** | Übe nur die verwirrenden Duelle: Flush vs Straße, Full House vs Flush | 3 Tage |
| **3** | Sieh Poker-Streams und nenne den Sieger vor dem Dealer | 1-2 Wochen |

Erst zu gruppieren verhindert, dass die Reihenfolge wie zehn zufällige Dinge wirkt. Die verwirrenden Duelle aus Schritt 2 verursachen 90 % der Anfängerfehler, also übe sie ausgiebig.

---

## Handreihenfolge je Spielvariante

Die Reihenfolge ist in fast allen Poker-Varianten gleich, mit einigen wichtigen Eigenheiten.

| Spiel | Reihenfolge | Hauptunterschied |
|------|------|------|
| **Texas Hold'em** | Standard (dieser Guide) | Nutze 0-2 deiner Karten |
| **Omaha** | Standard | Du musst *genau* 2 deiner 4 Karten nutzen |
| **Seven-Card Stud** | Standard | Keine Gemeinschaftskarten |
| **Short Deck (6+)** | Angepasst | Flush schlägt Full House; manchmal zählt A-6-7-8-9 als Straße |

Fazit: Lerne die Standard-Reihenfolge einmal und sie passt in fast jedem Spiel. Merke dir nur die „genau zwei“-Regel bei Omaha und die Aufwertung des Flushs im Short Deck.

---

## Häufige Fragen

**Q. Schlägt ein Flush eine Straße im Poker?**

A. Ja. Der Flush ist #5 und die Straße #6, also gewinnt der Flush immer. Er steht höher, weil fünf Karten einer Farbe schwerer zu treffen sind als fünf in Folge.

**Q. Schlägt ein Full House einen Flush?**

A. Ja. Das Full House (#4) schlägt den Flush (#5) und die Straße. Es verliert nur gegen Vierling, Straight Flush und Royal Flush.

**Q. Was ist ein Kicker?**

A. Ein Kicker ist eine Karte, die nicht Teil deiner fertigen Hand ist, aber den Gleichstand bricht. Bei zwei gleichen Paaren gewinnt die höchste Seitenkarte (der Kicker). Der beste mögliche Kicker ist das Ass.

**Q. Können zwei Spieler dieselbe Hand haben?**

A. Ja. Sind die besten fünf Karten beider im Wert identisch, wird der Pot geteilt. Farben brechen im Texas Hold'em nie den Gleichstand.

**Q. Muss man beide eigenen Karten nutzen?**

A. Im Hold'em nein — du bildest deine besten fünf aus jeder Kombination deiner zwei Karten und der fünf Gemeinschaftskarten, sogar mit null davon. (Omaha ist anders: Du musst genau zwei nutzen.)

**Q. Was ist der Unterschied zwischen Set und Trips?**

A. Beides sind Drillinge. Ein *Set* ist ein Paar auf der Hand plus eine Board-Karte (gut versteckt); *Trips* sind ein Paar auf dem Board plus eine deiner Karten (leichter zu lesen). Das Set holt mehr Chips.

**Q. Was ist die beste Hand im Poker?**

A. Der Royal Flush (A-K-Q-J-10 in einer Farbe). Er kann nicht geschlagen werden — der einzige „Gleichstand“ ist ein Royal Flush, der komplett auf dem Board liegt und allen gemeinsam gehört, wodurch der Pot geteilt wird.

**Q. Ist ein Drilling besser als zwei Paare?**

A. Ja. Der Drilling ist #7 und zwei Paare sind #8, also gewinnt der Drilling. Zwei Paare schlagen nur Paar und High Card.

---

## Die 3 Dinge, die du dir merken solltest

1. **Die Reihenfolge:** Royal Flush > Straight Flush > Vierling > Full House > Flush > Straße > Drilling > Zwei Paare > Paar > High Card.
2. **Die Falle:** Der Flush (#5) schlägt die Straße (#6) — und jedes gepaarte Board kann ein Full House verstecken, das beide schlägt.
3. **Die Realität:** Die meisten Pots werden mit Paar oder High Card gewonnen, also ist dein Kicker mehr wert, als du denkst.

Lerne die Reihenfolge an einem Nachmittag, übe die verwirrenden Duelle und führe an jedem Board den Scan „Farben → Straßen → Paare“ durch. Tu das, und du schiebst nie wieder den Pot auf die falsche Seite.
`.trim(),
};
