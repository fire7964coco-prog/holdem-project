import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Gleiche Hand beim Poker — wer gewinnt? So werden Ties entschieden",
  seoTitle: "Gleiches Paar — wer gewinnt? Poker Tie-Breaker Regeln",
  desc: "Gleiches Paar und trotzdem verloren? So werden Ties beim Poker entschieden — wer bei gleichem Paar gewinnt, wann die 5. Karte zählt und wann geteilt wird.",
  tldr: "Ties werden in fester Reihenfolge entschieden: zuerst der Handrang, dann die Karten, die die Hand bilden, dann die Kicker von hoch nach niedrig. Gleiches Paar → der höhere erste Kicker gewinnt; identische fünf Karten → geteilter Pot. Farben entscheiden einen Tie niemals.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Poker-Showdown: A♠ K♦ gegen A♥ 9♣ mit Board A♦ Q♠ 7♥ 3♣ 2♦ — gleiches Ass-Paar, der Kicker entscheidet den Sieger",
  tags: ["poker tie breaker regeln", "wie werden ties beim poker entschieden", "wer gewinnt gleiches paar poker", "zwei paare tie poker", "zählt die 5. karte beim poker", "poker kicker", "höhere straße", "texas holdem ties"],
  content: `
Du drehst ein Ass-Paar um. Dein Gegner auch. Der Dealer zählt einen Moment lang die Beikarten — und schiebt dann den ganzen Pot zu *ihm*. ==r:Gleiches Paar. Wie hast du verloren?==

Ich habe genau diesen Moment mehr Spiele aufhalten sehen als jede andere Regel: Jemand steht halb auf, der Dealer klopft auf den Filz, und der ganze Tisch wartet auf eine Erklärung. Hier ist sie. Jeder Tie beim Texas Hold'em wird durch ein festes Verfahren entschieden, das eine Ebene unter den [Poker-Handrängen](/de/blog/holdem-hand-rankings) liegt — die Ränge sagen dir, *welche Hand* gewinnt; die Tie-Breaker-Regeln sagen dir, *welcher Spieler* gewinnt, wenn beide Hände denselben Rang haben.

Die meiste Arbeit erledigt eine einzige Karte: der ==**Kicker**==. Die vollständige Definition — welche Hände einen haben und wie viele — findest du unter [was ist ein Kicker beim Poker](/de/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Dieser Guide ist das *Verfahren*: genau wie Ties bei gleichem Paar, Zwei Paaren, Drilling, Straßen und Flushes entschieden werden — und die fünfte Karte, die jeder vergisst.

---

### Ties auf einen Blick

:::stripe
3 | Schritte, die jeden Tie beim Hold'em entscheiden
1 | Kicker-Slot in einer Zwei-Paare-Hand
0 | Ties, die je durch die Farbe entschieden werden
:::

---

## Wie werden Ties beim Poker entschieden? Die 3-Schritt-Reihenfolge

**Ties werden in fester Reihenfolge entschieden: zuerst der Handrang vergleichen, dann die Karten, die die Hand bilden, dann die Kicker von hoch nach niedrig — und stimmen alle fünf Karten immer noch überein, wird der Pot geteilt.** Jeder Showdown durchläuft dieselben drei Prüfungen:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Schritt | Vergleich | Detail |
|:---:|---|---|
| **1** | Handrang | Die höhere Kategorie gewinnt immer (ein Flush schlägt eine Straße usw.) |
| **2** | Die Karten, die die Hand bilden | Gleicher Rang? Das höhere Paar / der höhere Drilling / die höchste Karte gewinnt |
| **3** | Kicker, höchster zuerst | Der erste Unterschied gewinnt den Pot |

</div>

Wenn Schritt 1 es entscheidet, erreichst du Schritt 2 nie. Gehen in Schritt 3 die Karten aus, sind die Hände identisch und ==g:der Pot wird geteilt== — wie die Chips dann aufgeteilt werden (ungerade Chips, Three-Way-Chops, Side Pots) gehört ins Gebiet der [Split-Pot-Regeln](/de/blog/holdem-split-pot-rules). Schritt 2 und 3 sind die Stellen, an denen die Streitereien passieren, also gehen wir genau dorthin.

---

## Wer gewinnt, wenn zwei Spieler das gleiche Paar haben?

**Der höhere erste Kicker gewinnt. Ein Paar nutzt drei Kicker, die nacheinander von oben verglichen werden — der erste Unterschied entscheidet den Pot.**

Nimm die Hand aus dem Foto oben:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Spieler A:** A♠ K♦  ·  **Spieler B:** A♥ 9♣
**Board:** A♦ Q♠ 7♥ 3♣ 2♦

| Spieler | Beste Fünf | Kicker | Ergebnis |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Gewinnt** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Verliert |

</div>

Gleiches Ass-Paar, also treten die Kicker der Reihe nach gegeneinander an: ==g:K schlägt Q — Kampf vorbei.== B's Neun ist als zweiter Kicker immer noch *in* der Hand, aber der Vergleich kommt nie so weit.

Beachte, dass B's oberster Kicker die Dame vom **Board** ist, nicht die 9, die er hält. ==r:Ein Kicker zählt nur, wenn er tatsächlich in deinen besten fünf landet== — eine höhere Board-Karte drückt deine Hole Card die Liste hinunter. Deshalb zählt die zweite Karte, mit der du startest, genauso viel wie das Ass selbst: A-K und A-9 sind hier beide „ein Ass-Paar", und nur eine davon gewinnt (Starthand-Tabelle).

---

## Poker Tie-Breaker Regeln für jede Hand

**Jeder Handrang hat seine eigene Vergleichsreihenfolge — einige gehen bis zu den Kickern, andere werden komplett durch die Karten entschieden, die sie bilden.** Das Badge zeigt, ob ein Kicker ins Spiel kommt:

:::tiebreak
Royal Flush|Immer ein Tie (geteilter Pot)|-Kein Kicker
Straight Flush|Nur die höchste Karte|-Kein Kicker
Vierling|Vierling-Rang → 5. Karte|+Kicker
Full House|Drilling-Rang → Paar-Rang|-Kein Kicker
Flush|Alle 5 vergleichen, hoch nach niedrig|+Kicker
Straße|Nur die höchste Karte|-Kein Kicker
Drilling|Drilling-Rang → 2 Kicker|+Kicker
Zwei Paare|Hohes Paar → tiefes Paar → Kicker|+Kicker
Paar|Paar-Rang → 3 Kicker|+Kicker
High Card|Alle 5 vergleichen, hoch nach niedrig|+Kicker
:::

Die drei Zeilen, die am Tisch die meisten Streitereien auslösen:

- **Drillinge nutzen zwei Kicker, den oberen zuerst.** Auf einem Board A♣ A♥ 7♦ 5♣ 2♠ macht ein Spieler mit A♠ J♠ A-A-A-==g:J==-7 und schlägt A♦ 10♦ mit A-A-A-==r:10==-7 — der Bube überragt die Zehn, und die gemeinsame 7 wird nicht einmal geprüft.
- **Full Houses haben keinen Kicker.** Zuerst der Drilling-Rang, dann das Paar: K-K-K-A-A schlägt K-K-K-Q-Q beim Paar.
- **Flushes vergleichen alle fünf Karten — ==r:niemals Farben==.** Ein Ass-hoher Flush schlägt einen König-hohen Flush; identische Ränge teilen. Das komplette Matchup (und die Boards, die die Leute täuschen) findest du unter [schlägt ein Flush eine Straße](/de/blog/holdem-flush-vs-straight).

---

## Wer gewinnt, wenn beide Spieler Zwei Paare haben?

**Vergleiche das höhere Paar, dann das tiefere Paar, dann den einzelnen Kicker — in dieser Reihenfolge.** Zwei Paare tragen genau einen Kicker, also gibt es nach den Paaren selbst nur noch eine Karte, über die man streiten kann.

Auf einem Board **K♦ 9♣ 9♠ 5♦ 2♥** macht K♠ Q♦ die Hand K♠ K♦ 9♣ 9♠ ==g:Q♦== und K♥ J♥ macht K♥ K♦ 9♣ 9♠ ==r:J♥==. Gleiche Könige-und-Neunen, also entscheidet der einzelne Kicker: ==g:Dame über Bube.==

Dann gibt es die Falle, die um echtes Geld entscheidet — das ==r:**Counterfeiting**==:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Du:** 5♠ 4♠  ·  **Gegner:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — deine Zwei Paare (Fünfen und Vieren) führen gegen sein König-Paar
**Turn 9♠, River 9♥** — finales Board 5♦ 4♥ K♣ 9♠ 9♥

| Spieler | Beste Fünf | Hand |
|--------|-----------|------|
| Du | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Neunen und Fünfen — deine Vieren sind weg |
| Gegner | K♦ K♣ 9♠ 9♥ A♣ | **Könige und Neunen — gewinnt** |

</div>

Das gepaarte Neuner-Board hat *beiden* Spielern ein besseres zweites Paar in die Hand gedrückt — deine Vieren wurden ==r:counterfeited==, und der einzig verbleibende Vergleich war das Top-Paar: Könige über Neunen. Die Hand, die am Flop führte, verliert den Pot, ohne dass einer der Spieler seine eigenen Karten verbessert.

---

## Kannst du eine höhere Straße haben? (Wo das Wheel steht)

**Ja — Straßen werden rein nach ihrer höchsten Karte gewertet, und das Ass-tiefe Wheel ist die niedrigste Straße im Spiel.**

Auf einem Board 4♦ 3♣ 2♠ K♦ Q♥ macht ein Spieler mit A♠ 5♠ das Wheel: 5-4-3-2-A. Ein Spieler mit 6♥ 5♥ macht 6-5-4-3-2. ==r:Das Ass spielt im Wheel *tief*==, also sitzt A-2-3-4-5 ganz unten auf der Straßen-Leiter — ==g:die Sechs-hohe Straße gewinnt.== Zwei Straßen mit derselben höchsten Karte sind identisch, und identische Hände teilen.

Zwei Dinge, die das Wheel *nicht* kann: Das Ass kann sich nicht in der Mitte herumwickeln (Q-K-A-2-3 ist nichts), und es kann nicht gleichzeitig hoch und tief sein. Flushes folgen der parallelen Regel — alle fünf Karten von oben verglichen, Farben irrelevant — mit den Details drüben unter [Flush vs. Straße](/de/blog/holdem-flush-vs-straight).

---

## Zählt die 5. Karte beim Poker?

**Ja — immer wenn die ersten vier Karten zweier Hände identisch sind, ist die fünfte Karte der ganze Pot.**

Board **A♥ K♣ Q♦ 4♣ 2♥**, und es steht A♠ 8♠ gegen A♦ 7♦. Beide haben ein Ass-Paar. Erster Kicker: der K vom Board — Tie. Zweiter Kicker: die Q vom Board — Tie. Dritter Kicker: ==g:8 schlägt 7.== Die buchstäbliche fünfte Karte der Hand hat gerade alles darüber entschieden.

Dieselbe Logik läuft bei Pots mit Vierling auf dem Board: Alle teilen sich vier Karten, also ist die fünfte der gesamte Showdown. Und sie läuft bei High-Card- und Flush-Ties, wo jede Karte bis zur letzten verglichen wird. Die fünfte Karte hört erst dann auf zu zählen, wenn das Board sie überragt — was das letzte Puzzleteil ist.

---

## Wenn dein Kicker nicht spielt — und der Pot geteilt wird

![Infografik: Das Board A-K-Q-J-10 ist die beste Fünf für alle, also kann eine 9-7-Hand es nicht schlagen und der Pot wird geteilt](/images/holdem-tiebreak-best5.webp "Beste Fünf aus sieben: Wenn das Board bereits die beste Hand ist, fallen deine Hole Cards heraus")

**Wenn deine Hole Cards die eigene beste Fünf des Boards nicht knacken können, spielen sie nicht — und wenn das für alle gilt, wird der Pot geteilt.**

Nimm das Board oben: A♠ K♥ Q♣ J♦ 10♠, Broadway bereits komplett. Deine 9♥ 7♠ *macht* zwar eine Straße — K-Q-J-10-9 — aber sie ist **niedriger** als die Ass-hohe Straße, die auf dem Filz liegt, also ist deine beste Fünf das Board selbst. Genauso wie bei allen anderen.

Die subtilere Variante ist, wenn deine Hand spielt, dein Kicker aber nicht. Board A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ gegen A♦ 2♦. Beide paaren das Ass, und beide Kicker-Slots füllen sich vom Board — A-A-K-Q-J für jeden Spieler. Die 3 und die 2 sind totes Gewicht; identische beste Fünf, ==g:Chop.==

![Infografik: Auf einem A-K-Q-J-9-Board spielen A-3 und A-2 beide A-A-K-Q-J, also teilen die identischen Hände den Pot](/images/holdem-tiebreak-split.webp "Wenn die besten Fünf Rang für Rang übereinstimmen, wird der Pot geteilt — Farben brechen den Tie niemals")

Solche Runouts vor dem River-Bet zu erkennen, ist eine eigene Fähigkeit — das ist das [Lesen des Boards](/de/blog/holdem-reading-the-board). Und was mit den Chips passiert, sobald Hände unentschieden sind — gleiche Anteile, der ungerade Chip, Three-Way-Chops, All-in-Side-Pots — steht alles im [Guide zu den Split-Pot-Regeln](/de/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Weiterlesen]
/de/blog/holdem-kicker | Was ist ein Kicker beim Poker? | /images/holdem-kicker-hero.webp
/de/blog/holdem-split-pot-rules | Wann wird ein Pot geteilt? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Wie werden Ties beim Poker entschieden?**

A. In fester Reihenfolge: zuerst der Handrang, dann die Karten, die die Hand bilden (das höhere Paar, der Drilling oder die höchste Karte), dann die Kicker von hoch nach niedrig. Stimmen alle fünf Karten im Rang überein, wird der Pot geteilt — Farben werden nie verwendet.

**Q. Wer gewinnt, wenn zwei Spieler das gleiche Paar haben?**

A. Der Spieler, dessen beste Fünf den höheren Kicker hat. Ein Paar trägt drei Kicker, die von oben nach unten verglichen werden — der erste Unterschied gewinnt den Pot. Stimmen alle drei überein, ist es ein Split.

**Q. Wer gewinnt, wenn beide Spieler Zwei Paare haben?**

A. Vergleiche zuerst das höhere Paar, dann das tiefere Paar, dann den einzelnen Kicker. Asse-und-Dreien schlagen Könige-und-Damen, weil das obere Paar vor allem anderen geprüft wird.

**Q. Zählt die 5. Karte beim Poker?**

A. Ja. Wenn die ersten vier Karten beider Hände identisch sind, entscheidet die fünfte Karte den ganzen Pot — der dritte Kicker eines Paars, die niedrigste Karte eines Flushes, die Beikarte zum Vierling auf dem Board. Sie hört erst auf zu zählen, wenn die Karten des Boards deine Hole Card überragen.

**Q. Kann man beim Poker ein Ass als 1 verwenden?**

A. Ja, aber nur in der Straße A-2-3-4-5 (dem „Wheel"), wo es als niedrigste Karte spielt — was das Wheel zur niedrigsten Straße im Spiel macht. Das Ass kann sich nicht in der Mitte herumwickeln: Q-K-A-2-3 ist keine Straße.

**Q. Kann man eine höhere Straße haben als ein anderer Spieler?**

A. Ja — Straßen werden rein nach ihrer höchsten Karte gewertet, also schlägt 6-5-4-3-2 das A-5-Wheel, und Broadway (A-K-Q-J-10) schlägt sie alle. Gleiche höchste Karten bedeuten identische Straßen und einen geteilten Pot.

**Q. Entscheiden Farben beim Texas Hold'em jemals einen Tie?**

A. Nein. Es gibt beim Hold'em keine Farbwertung — stimmen zwei beste Fünf-Karten-Hände Rang für Rang überein, wird der Pot unabhängig von den Farben geteilt.

**Q. Was passiert, wenn beide Spieler exakt dieselbe Hand haben?**

A. Der Pot wird gleichmäßig geteilt — ein „Chop". Wie die Chips physisch aufgeteilt werden, wer den ungeraden Chip bekommt und wie Side Pots abgerechnet werden, ist in den [Split-Pot-Regeln](/de/blog/holdem-split-pot-rules) abgedeckt.

---

## Das Wichtigste

1. Jeder Tie läuft dasselbe Verfahren: ==**Handrang → gebildete Karten → Kicker → Split**== — keine Ausnahmen, keine Farben.
2. Ein Kicker zählt nur, wenn er ==g:deine beste Fünf bildet== — Board-Karten können ihn ersetzen, und ein doppelt gepaartes Board kann deine Zwei Paare komplett counterfeiten.
3. Straßen werten nach ihrer höchsten Karte (das Wheel ist die niedrigste), Flushes vergleichen alle fünf — und wenn nichts die Hände trennt, wird der Pot gechoppt.

Verinnerliche die komplette Reihenfolge mit den [vollständigen Handrängen](/de/blog/holdem-hand-rankings), lerne die Beikarte selbst kennen unter [was ist ein Kicker](/de/blog/holdem-kicker), und sieh genau, wie unentschiedene Pots aufgeteilt werden, im [Split-Pot-Guide](/de/blog/holdem-split-pot-rules).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was ist ein Kicker beim Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Beikarte selbst — welche Hände einen haben und wie viele</div>
  </a>
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Handränge</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Handränge — von beste bis schlechteste</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle 10 Hände mit Odds, Beispielen und Board-Rätseln</div>
  </a>
  <a href="/de/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Matchup</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Schlägt ein Flush eine Straße?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Mathematik, Board-Spots und Tie-Fälle für die Verwechslung Nr. 1</div>
  </a>
  <a href="/de/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wann wird ein Pot geteilt?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 Chop-Situationen und 3 Dinge, von denen Spieler fälschlich glauben, sie würden gewinnen</div>
  </a>
</div>
`.trim(),
};
