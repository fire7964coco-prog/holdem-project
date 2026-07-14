import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "Wann wird der Pot geteilt? Chop-Regeln beim Hold'em",
  seoTitle: "Hand gewonnen, nur die Hälfte bekommen? Split Pot & Chop",
  desc: "Kann man beim Poker unentschieden spielen? Wann der Pot geteilt wird: identische Fünf-Karten-Hände, das Board spielt, Odd-Chip-Regel und Chops im Nebenpot.",
  tldr: "Ja — Pokerhände können unentschieden sein. Ein Pot wird geteilt (ein Chop), wenn zwei oder mehr Spieler im Showdown die identische beste Fünf-Karten-Hand zeigen. Die Farbe entscheidet nie, und ein übrig gebliebener Odd Chip geht an den ersten unentschiedenen Spieler links vom Dealer-Button.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Split Pot beim Poker — Board 8♠ 8♥ 8♦ A♣ K♠ mit J♠ 10♥ gegen 5♣ 2♦, die Chips durch eine goldene Linie geteilt, weil keine Hand das Board schlägt",
  tags: ["split pot poker", "kann man beim poker unentschieden", "geteilter pot", "wann wird der pot geteilt", "odd chip regel poker", "board spielt", "texas holdem chop"],
  content: `
In meiner Anfangszeit am Pokertisch führte ich jede Straße — preflop geraist, am Flop und Turn gebettet, am River gecallt. Ich drehte J-10 um. Mein Gegner drehte **5-2** um. "Ich gewinne, oder?" Der Dealer sagte nichts und zeigte auf das Board: ==**8-8-8-A-K**==. ==r:Keine unserer Hole Cards schlug den Drilling Achten mit Ass-König-Kicker==, also teilte der Dealer den Pot kommentarlos in zwei Hälften.

Die Hälfte eines Pots zu bekommen, von dem du sicher warst, ihn gewonnen zu haben, ist ein Schock. Aber ==g:Split Pots folgen klaren Regeln== — und sie beantworten die Frage, die Anfänger am häufigsten stellen: **Kann man beim Poker unentschieden spielen?** Ja. Hier stehen alle Fälle, in denen es passiert.

---

> **Kurze Antwort**
> Ein Pot wird **geteilt** (auch **Chop** genannt), wenn zwei oder mehr Spieler im Showdown die **identische beste Fünf-Karten-Hand** haben. Die Chips werden gleichmäßig aufgeteilt. Die Farbe entscheidet nie, und ein übrig gebliebener Odd Chip geht an den ersten unentschiedenen Spieler links vom Dealer-Button.

---

### Die wichtigsten Zahlen

:::stripe
5 | Situationen, in denen ein Hold'em-Pot geteilt wird
0 | Unentschieden, das beim Texas Hold'em je über die Farbe entschieden wurde
1 | Odd Chip — geht an den ersten unentschiedenen Sitz links vom Button
:::

---

## Was ist ein Split Pot beim Poker? (Und ist ein "Chop" dasselbe?)

Ein **Split Pot** entsteht, wenn zwei oder mehr Spieler im Showdown die identische beste Fünf-Karten-Hand haben, sodass der Dealer die Chips gleichmäßig zwischen ihnen aufteilt. Ein **Chop** — oder ein "geteilter Pot" — ist im Tischjargon genau dasselbe ("wir choppen"). Regelbücher sagen Split; Spieler sagen Chop. Beides wird gesucht, also wirst du beide Begriffe synonym verwendet sehen.

Die Grundlage: Deine Hand sind immer die ==**besten fünf Karten**== aus sieben — deine zwei Hole Cards plus die fünf auf dem Board. Wo jede Fünf-Karten-Hand rangiert, steht in der [kompletten Poker-Reihenfolge der Hände](/de/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:Wenn die besten Fünf zweier Spieler im Rang identisch sind, ist keiner "mehr" Gewinner== — der Pot wird geteilt, Punkt.

---

## Kann man beim Poker unentschieden spielen? Die 5 Situationen, die den Pot teilen

Ja — Unentschieden ist beim Texas Hold'em ein normales, regelkonformes Ergebnis, und es kommt häufiger vor, als Anfänger erwarten. Weil sich alle dieselben fünf Gemeinschaftskarten teilen, landen zwei Spieler oft bei denselben besten Fünf. So passiert es in fünf Fällen.

### 1. Identische beste fünf Karten
Zwei Spieler machen exakt dieselbe Fünf-Karten-Hand — dieselben Ränge, selbst wenn ihre Hole Cards in der Farbe abweichen.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Spieler A | Spieler B |
|---|---|---|
| **Hole** | K♠ 7♣ | K♥ 2♦ |
| **Board** | K♦ K♣ Q♥ Q♦ J♠ | (dasselbe) |
| **Beste Fünf** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → Split== |

</div>

Beide machen das Full House KKK-QQ aus dem Board plus einem König. ==r:Die Farben dieser Könige spielen keine Rolle.==

### 2. Das Board spielt
Die fünf Gemeinschaftskarten sind bereits die stärkste Hand für alle Verbliebenen — das ist der 8-8-8-A-K-Pot aus meiner Geschichte. Es ist der mit Abstand häufigste Split, deshalb bekommt er unten einen eigenen Abschnitt.

### 3. Dieselbe Straße
Zwei Straßen mit derselben höchsten Karte sind unentschieden, unabhängig von der Farbe. Auf einem Board aus 7♣ 6♦ 5♥ K♠ 2♣ machen sowohl A mit 9♠ 8♠ als auch B mit 9♥ 8♦ die 9-8-7-6-5 — dieselbe Höhe, also **Split**.

### 4. Derselbe Flush
Es gibt keine Rangfolge der Farben, also sind zwei Flushes mit denselben fünf Rängen unentschieden. In der Praxis heißt das fast immer, dass das **Board selbst** ein Fünf-Karten-Flush ist. Auf K♠ J♠ 8♠ 4♠ 2♠, wenn A A♥ Q♦ hält und B 10♥ 9♦, hat keiner ein Pik — beide spielen den K-J-8-4-2-Flush des Boards und **choppen**.

==r:Aber prüfe, bevor du es annimmst:== jedes Pik in deiner Hand, das höher ist als das niedrigste Pik auf dem Board, verbessert den Flush. Hier macht sogar die bescheidene 3♠ die K-J-8-4-3 und ==g:gewinnt den ganzen Pot== — und A♠ macht den Nut-Flush.

### 5. Identisch bis zum letzten Kicker
Paare und Zwei Paare werden meist über Kicker entschieden — aber wenn auch die Kicker übereinstimmen, ist es ein Split. Board A♦ Q♠ 9♣ 6♥ 2♠ mit A♠ K♦ gegen A♥ K♣ ergibt für beide Spieler ==g:A-A-K-Q-9== → **Split**. Wenn die Kicker sich *unterscheiden*, gewinnt der höhere alles — wie genau dieser Vergleich Hand für Hand funktioniert, steht in den [Tie-Breaker- und Kicker-Regeln](/de/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Können zwei Spieler denselben Pot gewinnen? Wenn das Board spielt

Ja — und dafür braucht es nicht einmal zwei Monsterhände. Wenn die fünf Gemeinschaftskarten bereits die bestmöglichen Fünf für alle noch Verbliebenen bilden, ==**spielt das Board**== und jeder verbliebene Spieler teilt sich den Pot, egal ob das zwei Spieler sind oder fünf.

Das ist meine 8-8-8-A-K-Hand: meine J-10 und seine 5-2 spielten beide den Drilling Achten des Boards mit Ass-König-Kicker — identische Fünf, automatischer Chop. Der Extremfall ist ein Board wie A♠ K♠ Q♠ J♠ 10♠ (ein Royal Flush): keine Hole Cards können es verbessern, also ==g:choppen alle Verbliebenen==.

> **Der Check:** Schlägt *deine* beste Fünf — mit mindestens einer Hole Card — die eigenen Fünf des Boards? Wenn ja, spielst du deine Hand. Wenn nicht, spielt das Board und du choppst wahrscheinlich. Die vollständige Methode, ein Board so zu scannen, steht in [wie du das Board liest und deine besten 5 findest](/de/blog/holdem-reading-the-board).

:::tip[Wenn das Board spielt und jemand am River bettet, denk vor dem Call nach: Wenn das Beste, was du erreichen kannst, ein Unentschieden ist, kaufst du dir mit einem Call meist nur einen Teil deiner eigenen Chips zurück. Calle nur, wenn deine Hole Cards die genaue Hand des Gegners realistisch schlagen können.]:::

---

## 3 Dinge, die ein Unentschieden beim Poker nie brechen

![Pik-Royal-Flush = Herz-Royal-Flush mit einem goldenen Gleichheitszeichen dazwischen — die Farbe entscheidet beim Texas Hold'em nie über einen Gewinner](/images/holdem-split-pot-suit-equals.webp "Identische Ränge werden immer geteilt — keine Rangfolge der Farben beim Texas Hold'em")

Das sind die Irrtümer hinter den meisten "Moment, warum ist das ein Split?!"-Diskussionen.

### ❌ "Meine Farbe ist höher, also gewinne ich"
==r:Ein Pik-Flush schlägt **nicht** einen Herz-Flush.== Texas Hold'em hat keine Rangfolge der Farben — ==identische Ränge werden geteilt, Punkt==. (Das bringt Spieler durcheinander, die von Spielen kommen, die Farben *doch* ranken.)

### ❌ "Meine Hole Cards sind höher, also gewinne ich"
Board 9♠ 8♦ 7♣ 6♥ 5♠ — eine fertige Straße. Du hältst A♠ K♦; dein Gegner hält 2♣ 3♥. ==r:**Split.**== Ihr beide spielt die 9-8-7-6-5 des Boards, weil ==r:deine großen Hole Cards nie in die besten Fünf gelangen==. Eine hohe Hole Card zählt nur, wenn sie tatsächlich als Kicker spielt — [was ein Kicker ist und wann er spielt](/de/blog/holdem-kicker) zieht diese Linie präzise.

### ❌ "Ich habe beide Karten benutzt und sie nur eine"
==r:Wie viele Hole Cards du benutzt, ist irrelevant.== Das Einzige, was zählt, sind die stärksten fünf von sieben. ==g:Wenn beide Spieler auf denselben besten Fünf landen, ist es ein Chop, egal wie du dorthin gekommen bist.==

---

## Wer bekommt den zusätzlichen Chip? Die Odd-Chip-Regel

Manchmal lässt sich ein Pot nicht gleichmäßig teilen — ein Pot aus 101 Chips zwischen zwei Spielern sind 50 pro Person mit einem Chip Rest, und halbe Chips gibt es nicht. Die Standardregel:

> ==Der übrig gebliebene Odd Chip geht an den ersten unentschiedenen Spieler **links vom Dealer-Button**== (der früheste gewinnende Sitz im Uhrzeigersinn vom Dealer aus).

Bei einem Drei-Wege-Split mit zwei Odd Chips bekommen die zwei frühesten Sitze im Uhrzeigersinn je einen. ==r:Hausregeln können abweichen== — einige Card Rooms vergeben den Odd Chip stattdessen über die höchste Karte oder die Farbe — wenn also echtes Geld auf dem Spiel steht, frag den Floor. ==g:Online weist die Software ihn automatisch nach Position zu.==

---

## Werden auch Nebenpots geteilt? Unentschieden, wenn jemand All-in ist

Wenn jemand All-in ist, bilden die Chips einen ==**Hauptpot**== (alle sind berechtigt) plus einen oder mehrere ==**Nebenpots**== (nur die tieferen Stacks, die weiter gesetzt haben). Jeder Pot wird ==**separat**== vergeben — oder gechoppt —, basierend auf der besten Hand unter den für diesen Pot berechtigten Spielern.

Ein durchgerechnetes Beispiel: A ist All-in mit 100; B und C legen je 300 nach. Das ergibt einen **Hauptpot von 300** (100 × 3) und einen **Nebenpot von 400** (200 + 200, nur B und C). Das Board läuft A♦ J♥ 7♠ 4♣ 2♥ aus:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Spieler | Hole | Beste Fünf | Ergebnis |
|---|---|---|---|
| A (All-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | choppt den Hauptpot → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | choppt Hauptpot (150) + gewinnt Nebenpot (400) |
| C | K♦ K♠ | K-K-A-J-7 | verliert beide → 0 |

</div>

A und B sind mit Assen und identischen Kickern unentschieden, also ==g:teilen sie den Hauptpot==; der Nebenpot wird nur zwischen B und C ausgespielt, und Bs Asse schlagen Cs Könige klar. ==r:Ein All-in-Spieler kann immer nur die Pots gewinnen oder choppen, zu denen er tatsächlich beigetragen hat.== Wie diese Pots überhaupt gebildet werden — Capping, Berechtigung zum Re-Raise, Showdown-Reihenfolge — steht im [Leitfaden zu All-in-Regeln und Nebenpots](/de/blog/holdem-all-in-rules).

---

## Wird der Pot je zur Hälfte High, zur Hälfte Low geteilt?

Nicht beim Texas Hold'em. Du hast vielleicht von "Split-Pot-Spielen" wie Omaha Hi-Lo oder Stud Hi-Lo gehört, bei denen **jeder** Pot dafür ausgelegt ist, zwischen der besten High-Hand und der besten qualifizierenden Low-Hand (Eight-or-Better) geteilt zu werden. Das ist eine andere Spielfamilie. ==Standard-Hold'em ist High-only== — der Pot wird *nur* geteilt, wenn die besten Fünf-Karten-Hände wirklich unentschieden sind.

---

:::readnext[Weiterlesen]
/de/blog/holdem-reading-the-board | Wie du das Board liest & deine besten 5 findest | /images/holdem-reading-the-board-hero.webp
/de/blog/holdem-all-in-rules | All-in-Regeln & Nebenpots erklärt | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Wann wird ein Pot beim Poker geteilt?**

A. Ein Pot wird geteilt, wenn zwei oder mehr Spieler im Showdown die identische beste Fünf-Karten-Hand haben; die Chips werden gleichmäßig unter ihnen aufgeteilt.

**Q. Teilt man den Pot, wenn beide Spieler dieselbe Hand haben?**

A. Nur, wenn die vollständigen besten Fünf unentschieden sind — dasselbe Paar mit denselben Kickern, oder dieselbe Straße, derselbe Flush oder dasselbe Full House. Wenn irgendein Kicker abweicht, gewinnt der höhere Kicker den ganzen Pot, statt zu teilen.

**Q. Was bedeutet "geteilter Pot" beim Poker?**

A. Ein geteilter Pot ist im Tischjargon einfach ein Split Pot. "Chop" sagen die Spieler; "Split Pot" ist der Begriff aus dem Regelbuch — beides bedeutet, den Pot gleichmäßig unter den unentschiedenen Händen aufzuteilen.

**Q. Entscheidet die Farbe je, wer einen Split gewinnt?**

A. Nein. Texas Hold'em hat keine Rangfolge der Farben, also werden identische Fünf-Karten-Hände immer geteilt, unabhängig von der Farbe.

**Q. Wer bekommt den Odd Chip, wenn sich ein Pot nicht gleichmäßig teilen lässt?**

A. Standardregel: der erste unentschiedene Spieler links vom Dealer-Button. Einige Card Rooms vergeben ihn stattdessen über die höchste Karte oder die Farbe, Hausregeln können also abweichen — online übernimmt das die Software automatisch.

**Q. Können mehr als zwei Spieler einen Pot teilen?**

A. Ja. Wenn drei oder mehr Spieler alle die identische beste Fünf-Karten-Hand halten, wird der Pot gleichmäßig unter ihnen aufgeteilt — am häufigsten, wenn das Board für alle spielt.

**Q. Wie werden Split Pots gehandhabt, wenn jemand All-in ist?**

A. Der Pot bricht in einen Hauptpot und Nebenpots auf; jeder wird separat vergeben oder gechoppt, basierend auf der besten Hand unter den für diesen bestimmten Pot berechtigten Spielern.

**Q. Ist ein Turnier-Chop dasselbe wie ein Split Pot?**

A. Nein — dasselbe Wort, zwei verschiedene Dinge. Ein Split Pot im Showdown ist automatisch: Wenn Hände unentschieden sind, teilt der Dealer die Chips. Ein Turnier-"Chop" ist ein freiwilliger Deal unter den verbliebenen Spielern, um den Preispool aufzuteilen, meist nach Chip Counts oder [ICM](/de/blog/holdem-icm), und er passiert nur, wenn alle zustimmen. Siehe [Turnier vs. Cashgame](/de/blog/holdem-tournament-vs-cash-game), wie sich Turnier-Auszahlungen unterscheiden.

---

## Die wichtigsten Punkte

1. Ja, ==**du kannst beim Poker unentschieden spielen**== — ein Pot wird geteilt (gechoppt), sobald zwei oder mehr Spieler die ==**identischen besten Fünf von sieben**== teilen.
2. ==r:**Farben, höhere Hole Cards und wie viele Karten du benutzt hast**== brechen ein Unentschieden nie.
3. Der ==**Odd Chip**== geht an den ersten unentschiedenen Spieler links vom Button, und ==**Nebenpots**== werden getrennt vom Hauptpot abgerechnet.

Frisch die Reihenfolge in der [kompletten Reihenfolge der Hände](/de/blog/holdem-hand-rankings) auf, meistere knappe Hände im [Kicker- und Tie-Breaker-Leitfaden](/de/blog/holdem-tiebreak-rules), und kläre den klassischen Streit in [schlägt ein Flush eine Straße](/de/blog/holdem-flush-vs-straight).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Reihenfolge der Hände</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Reihenfolge der Hände — von der besten zur schlechtesten</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle 10 Hände mit Wahrscheinlichkeiten, Beispielen und Board-Rätseln</div>
  </a>
  <a href="/de/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tie-Breaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kicker- & Tie-Breaker-Regeln</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wie Kicker Showdowns mit gleicher Hand entscheiden</div>
  </a>
  <a href="/de/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Duell</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Schlägt ein Flush eine Straße?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Mathematik und Board-Spots für die häufigste Verwirrung</div>
  </a>
</div>
`.trim(),
};
