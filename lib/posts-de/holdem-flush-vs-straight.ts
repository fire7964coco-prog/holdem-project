import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Schlägt ein Flush eine Straße? Die Mathematik und die Fehleinschätzungen",
  seoTitle: "Schlägt ein Flush eine Straße? Ja — und was schlägt einen Flush",
  desc: "Straße vorgeschoben — und ein Flush holt den Pot? Ein Flush schlägt immer eine Straße. Hier die Mathematik, was einen Flush schlägt, und 3 Boards, die täuschen.",
  tldr: "Ein Flush (fünf Karten einer Farbe — ~0,197% aller Fünf-Karten-Deals) schlägt im Texas Hold'em immer eine Straße (fünf in Folge, ~0,392%) — weil ein Flush etwa doppelt so schwer zu treffen ist.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "11 Min.",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Infografik: Ace-High-Flush A♠ J♠ 9♠ 6♠ 2♠ neben einer Neun-hohen Straße mit goldenem FLUSH WINS Badge, das erklärt, warum ein Flush höher rangiert",
  tags: ["schlägt ein flush eine straße", "flush vs straße", "was schlägt einen flush", "was ist ein straight flush", "warum schlägt ein flush eine straße", "flush vs full house", "höherer flush", "unterschied flush und straße"],
  content: `
Der erste große Pot, den ich je in einem Live-Cashgame verloren habe, lief genau so ab: Ich traf am River eine Zehn-hohe Straße, schob sie vor, als wäre sie Gold — und ein stiller Regular drehte zwei Herz-Karten um. ==r:Der Dealer schob den Pot in die andere Richtung==, und ich habe diese Hand die ganze Heimfahrt lang nochmal durchgespielt.

Wenn dir das gerade passiert ist, lautet die kurze Antwort: ==g:ja — ein Flush schlägt eine Straße, jedes einzelne Mal==. Die interessanten Teile sind das *Warum*, was sonst noch einen Flush schlägt, und die drei Board-Situationen, in denen Spieler es live am Tisch immer noch falsch machen.

---

### Die kurze Antwort

:::stripe
Flush > Straße | Keine Ausnahmen im Standard-Texas-Hold'em
5.108 vs 10.200 | Fünf-Karten-Flush-Kombinationen vs Straßen-Kombinationen — der Flush ist ~2× seltener
#5 vs #6 | Wo Flush und Straße in der 10-Hand-Rangfolge stehen
:::

> **Schnelle Antwort**
> Ein **Flush schlägt immer eine Straße** im Texas Hold'em — keine Ausnahmen im Standardspiel. Ein Flush (fünf Karten einer Farbe) ist statistisch schwerer zu treffen als eine Straße (fünf Karten in Folge): etwa **5.108** Fünf-Karten-Kombinationen gegenüber **10.200**.

---

## Schlägt ein Flush eine Straße? Wo die beiden Hände stehen

Ja — und es ist keine Auslegungssache. ==Der Flush steht eine Stufe über der Straße, und das ändert sich im Standard-Hold'em nie.== Hier die Nachbarschaft rund um die beiden Hände, die am häufigsten verwechselt werden:

| Rang | Hand | Beispiel |
|------|------|------|
| #2 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Full House | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Flush** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Straße** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Drilling | Q♠ Q♥ Q♦ 7♠ 3♣ |

Du willst alle zehn Hände mit Wahrscheinlichkeiten, Beispielen und Board-Rätseln? Das findest du im [vollständigen Guide zur Pokerhände-Reihenfolge](/de/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — dieser Artikel zoomt auf das Duell Flush gegen Straße und seine engsten Nachbarn.

---

## Warum schlägt ein Flush eine Straße? Die Mathematik

Handstärke im Poker entscheidet eine einzige Sache: **wie schwer die Hand zu treffen ist**. Je seltener sie ist, desto höher rangiert sie. Nichts an der Reihenfolge ist willkürlich — es ist reine Häufigkeit.

Zähl die 2.598.960 möglichen Fünf-Karten-Hände aus einem 52-Karten-Deck, und die Reihenfolge ergibt sich von selbst:

| Hand | Kombinationen | Wahrscheinlichkeit | Urteil |
|:---|:---:|:---:|:---|
| Vierling | 624 | 0,024% | Schlägt Flush |
| Full House | 3.744 | 0,144% | Schlägt Flush |
| **Flush** | **5.108** | **0,197%** | **Schlägt Straße ✅** |
| **Straße** | **10.200** | **0,392%** | **Verliert gegen Flush ❌** |
| Drilling | 54.912 | 2,11% | Verliert gegen Straße |

Eine Straße hat rund ==r:**doppelt** so viele Wege zustande zu kommen wie ein Flush==, also taucht sie doppelt so oft auf — was sie zur schwächeren Hand macht. Dieselbe Häufigkeitsregel erklärt die gesamte Leiter; die genauen Zahlen für jede Hand stehen im [Poker-Odds- und Wahrscheinlichkeits-Chart](/de/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Warum sich das falsch anfühlt

Eine Straße braucht nur fünf Ränge in Folge, und ==**die Farben spielen keine Rolle**==. Diese Freiheit erzeugt eine riesige Zahl an Kombinationen. Ein Flush ist das Gegenteil: Jede der fünf Karten muss ==**dieselbe Farbe**== teilen, und nur eine von vier Farben schafft das zur selben Zeit. ==g:Weit weniger Wege dorthin bedeuten, dass der Flush seltener ist — und das Seltenere gewinnt immer.==

:::tip[Wenn du einen Flushdraw hältst und dein Gegner auf eine Straße zieht, bist du in bester Verfassung — selbst wenn **beide** Draws ankommen, schlägt dein Flush seine Straße im Showdown.]:::

---

## 3 Board-Situationen, die Spieler immer noch täuschen

![Board zeigt 8♥ 7♥ 6♥ 5♠ A♣ — drei Herz auf dem Board bedeuten, dass ein Flush möglich ist, selbst wenn du eine Straße hältst](/images/holdem-flush-vs-straight-board.webp "Drei Karten gleicher Farbe auf dem Board — Flushdraw möglich gegen deine Straße")

Die Regel zu kennen ist nicht dasselbe wie sie live zu lesen — genau diese Fähigkeit trainiert [das Board lesen](/de/blog/holdem-reading-the-board). Das sind die drei Situationen, in denen der Fehler tatsächlich passiert.

### Situation 1 — Du triffst eine Straße, aber das Board zeigt drei einer Farbe

:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 Karten):::

Du hältst **9♠ 10♠** für eine saubere **6-7-8-9-10 Straße**. Fühlt sich stark an — aber das Board zeigt **drei Herz**. Hält dein Gegner zwei Herz-Karten, hat er einen Flush, und **Flush schlägt Straße**. Sobald drei oder mehr einer Farbe auf dem Board liegen, ist ein Flush möglich; kalkuliere deine Bets und Calls entsprechend.

### Situation 2 — Draw auf Straße und Flush gleichzeitig

:::hand[8♥,7♥,6♠,2♣] Board (4 Karten, Turn):::

Du hältst **9♥ 5♥**. Du hast bereits die **5-6-7-8-9 Straße** — warum also weiter auf die Herz-Karten schielen? Weil du außerdem **vier zum Flush** hältst (9♥ 8♥ 7♥ 5♥): Jedes Herz am River upgradet deine Straße zum Flush, und die **6♥ speziell** komplettiert einen **5-6-7-8-9 Straight Flush (#2)**, der alles zermalmt. Wenn du gratis auf eine größere Hand ziehen kannst, spiel mit diesem Upgrade im Hinterkopf.

### Situation 3 — Du hast den Flush, er zeigt eine Straße

:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 Karten):::

Du hältst **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, einen Ace-High-Flush. Dein Gegner zeigt **10♥ 8♦** für eine 7-8-9-10-J Straße und sagt sie selbstbewusst an. Zuck nicht: Dein Flush ist höher. Flush über Straße, immer.

---

## Was schlägt einen Flush im Poker?

Dein Flush ist Favorit gegen den Großteil des Decks — aber genau **vier Handtypen** (plus ein höherer Flush) schlagen ihn:

:::compare
Schlägt deinen Flush | Verliert gegen deinen Flush
Full House (#4) | Straße (#6)
Vierling (#3) | Drilling (#7)
Straight Flush (#2) | Zwei Paare (#8)
Royal Flush (#1) | Paar & High Card (#9–#10)
Ein höherer Flush | Jeder niedrigere Flush
:::

Das Matchup, über das nach Flush vs Straße am meisten gestritten wird, ist **Flush vs Full House** — und das Boat gewinnt. Das Warnzeichen ist ein **gepaartes Board**. Schau dir das an:

:::hand[K♠,9♠,9♥,4♠,2♦] Board (5 Karten):::

Du hältst **A♠ 5♠** für den Nut-Flush: **A♠ K♠ 9♠ 5♠ 4♠**. Dein Gegner hält **K♦ 9♦** und zeigt **9♦ 9♠ 9♥ K♦ K♠** — Neunen full of Kings. ==r:Full House schlägt Flush==, und kein Flush überlebt das. Auf einem ungepaarten Board wird dein Ace-High-Flush nur von einem Straight Flush geschlagen; in dem Moment, in dem das Board paart, kommen Full Houses und Vierlinge ins Spiel.

Wenn zwei Spieler denselben Handtyp halten, entscheidet der Vergleich Karte für Karte über den Gewinner — das komplette System steht in den [Poker-Tie-Breaker- und Kicker-Regeln](/de/blog/holdem-tiebreak-rules).

---

## Flush vs Flush, Straße vs Straße — Wer gewinnt bei Gleichstand?

Ja, ein Flush kann absolut höher sein als ein anderer. **Die Farben sind irrelevant** — vergleiche die fünf Karten von oben nach unten, die höchste zuerst:

| Spieler | Flush | Ergebnis |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Gewinnt** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Verliert |

Das Ass von Spieler A übertrumpft den König von Spieler B schon auf der allerersten Karte, also gewinnt A. Ein Pik-Flush schlägt **nicht** einen Herz-Flush — nur die Ränge zählen.

Straßen sind noch einfacher: Vergleiche nur die **höchste Karte** — es gibt keinen Kicker.

- **A-K-Q-J-10** (Ass hoch, „Broadway") ist die stärkste Straße.
- **A-2-3-4-5** (das „Wheel", Ass spielt niedrig) ist die schwächste.

| Spieler | Straße | Ergebnis |
|--------|------|------|
| A | Q-J-10-9-8 | **Gewinnt** |
| B | J-10-9-8-7 | Verliert |

Die Dame übertrumpft den Buben, also gewinnt A. Sind die besten fünf Karten beider Spieler im Rang identisch, ist es ein [Split Pot](/de/blog/holdem-split-pot-rules).

---

## Was ist ein Straight Flush? Wenn beides auf einmal passiert

![9♥ 8♥ 7♥ 6♥ 5♥ — ein Straight Flush in Herz, die #2-Hand im Poker](/images/holdem-flush-vs-straight-sf.webp "Straight Flush — fünf Herz in Folge, nur von einem Royal Flush geschlagen")

Ein **Straight Flush** ist fünf *aufeinanderfolgende* Karten *einer Farbe* — wie 9♥ 8♥ 7♥ 6♥ 5♥. Es ist die **#2-Hand im Poker**, nur von einem Royal Flush geschlagen (der einfach der Ace-High-Straight-Flush ist, A-K-Q-J-10 suited). Mit gerade mal **36 Kombinationen (~0,00139%)** ist er seltener als alles außer dem Royal selbst.

Der Haken: ==die *gleichen fünf Karten* müssen sowohl suited als auch in Folge sein==. Achte auf den Unterschied auf dem Board **8♥ 7♥ 6♥ Q♠ 3♦**:

- Hältst du **K♥ 2♥** → deine fünf Herz sind K-8-7-6-2. Nicht aufeinanderfolgend — das ist ==ein simpler Flush, kein Straight Flush==.
- Hältst du **10♥ 9♥** → deine fünf Herz sind 10-9-8-7-6. Aufeinanderfolgend *und* suited — ==g:ein 10-hoher Straight Flush==.

Wenn deine Straße einige Karten nutzt und dein Flush andere, addierst du sie nicht — du spielst einfach die höhere der beiden, den Flush.

---

## Die eine echte Ausnahme: Short Deck

Im **Short Deck (6+) Hold'em** werden die Zweien bis Fünfen aus dem Deck entfernt. Mit weniger Karten wird ein Flush *schwerer* zu treffen als ein Full House — deshalb verschiebt sich in dieser Variante die Rangfolge, und ein ==r:**Flush schlägt ein Full House**==. Das Prinzip ändert sich nie: ==die seltenere Hand gewinnt==. Nur das Deck hat sich geändert. Im Standard-Texas-Hold'em mit einem vollen 52-Karten-Deck ==g:schlägt ein Flush eine Straße und verliert gegen ein Full House, jedes Mal==.

---

:::readnext[Weiterlesen]
/de/blog/holdem-tiebreak-rules | Kicker- & Tie-Breaker-Regeln | /images/holdem-tiebreak-hero.webp
/de/blog/holdem-split-pot-rules | Wann wird ein Pot geteilt? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Schlägt ein Flush eine Straße im Poker?**

A. Ja. Ein Flush ist die #5-Hand und eine Straße die #6, also gewinnt ein Flush im Standard-Texas-Hold'em immer. Fünf Karten einer Farbe sind statistisch schwerer zu treffen als fünf in Folge, und die seltenere Hand rangiert immer höher.

**Q. Schlägt eine Straße einen Flush?**

A. Nein. Eine Straße (#6) schlägt im Standard-Texas-Hold'em nie einen Flush (#5). Es ist eine häufige Verwechslung, weil sich eine Straße schwerer zu komplettieren anfühlen kann, aber ein Flush ist rund doppelt so selten — der Flush holt also immer den Pot.

**Q. Warum schlägt ein Flush eine Straße?**

A. Reine Mathematik. Eine Straße ignoriert die Farben, also gibt es etwa 10.200 Wege, eine zu treffen, gegenüber nur 5.108 Wegen zu einem Flush. Der Flush ist etwa doppelt so selten, und im Poker rangiert die seltenere Hand immer höher.

**Q. Was schlägt einen Flush im Poker?**

A. Ein Full House, ein Vierling, ein Straight Flush und ein Royal Flush schlagen alle einen Flush — und das tut auch ein höherer Flush (bessere Topkarte). Alles darunter (Straße, Drilling, Zwei Paare, Paar, High Card) verliert gegen ihn.

**Q. Was schlägt eine Straße im Poker?**

A. Ein Flush, Full House, Vierling, Straight Flush und Royal Flush schlagen alle eine Straße — plus jede höhere Straße. Eine Straße schlägt weiterhin einen Drilling und alles darunter. Die komplette Reihenfolge von der besten zur schlechtesten steht in der [vollständigen Pokerhände-Reihenfolge](/de/blog/holdem-hand-rankings).

**Q. Kann man einen höheren Flush haben als ein anderer Spieler?**

A. Ja. Zwei Flushes werden Karte für Karte von oben nach unten verglichen, also schlägt ein Ace-High-Flush („Nut"-Flush) einen King-High-Flush. Stimmen die Topkarten überein, entscheidet die zweithöchste, und so weiter durch alle fünf.

**Q. Spielt die Farbe eines Flushs eine Rolle?**

A. Nein. Texas Hold'em hat keine Farb-Rangfolge. Farben spielen nur beim *Treffen* eines Flushs eine Rolle, nie beim Vergleich von Händen — wenn zwei Flushes aufeinandertreffen (im Hold'em immer dieselbe Farbe, da sie sich Boardkarten teilen), entscheiden nur die Ränge, und identische Ränge teilen den Pot.

**Q. Können ein Flush und eine Straße jemals gleichstehen oder den Pot teilen?**

A. Nein. Eine Hand ist immer über der anderen eingestuft, also gewinnt der Flush einfach. Ein Split passiert nur zwischen zwei Händen exakt gleichen Rangs mit exakt denselben fünf Kartenwerten.

---

## Die Kernpunkte zum Mitnehmen

1. **Flush (#5) schlägt Straße (#6)** — keine Ausnahmen im Standard-Hold'em.
2. Er gewinnt, weil er etwa **doppelt so selten** ist: 5.108 Flush-Kombinationen vs 10.200 Straßen-Kombinationen.
3. Achte auf das Board: **drei einer Farbe** bedeuten, dass ein Flush möglich ist, ein **gepaartes Board** bedeutet, dass ein Full House deinen Flush schlagen kann, und suited *plus* verbunden ist ein Straight Flush.

Zementiere die komplette Reihenfolge mit der [vollständigen Pokerhände-Reihenfolge](/de/blog/holdem-hand-rankings), lern im [Tie-Breaker- und Kicker-Guide](/de/blog/holdem-tiebreak-rules), wie knappe Hände entschieden werden, und wenn du ganz neu bist, verbindet der [Anfänger-Guide zu den Texas Hold'em Regeln](/de/blog/texas-holdem-rules-for-beginners) alles miteinander.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pokerhände</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pokerhände-Reihenfolge — von der besten zur schlechtesten</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle 10 Hände mit Wahrscheinlichkeiten, Beispielen und Board-Rätseln</div>
  </a>
  <a href="/de/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kicker- & Tie-Breaker-Regeln</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Gleicher Flush oder gleiche Straße — wer gewinnt den Pot?</div>
  </a>
  <a href="/de/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wann wird ein Pot geteilt?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 Chop-Situationen inklusive identischer Flushes</div>
  </a>
</div>
`.trim(),
};
