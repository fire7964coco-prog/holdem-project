import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "Was ist ein Kicker beim Poker — Regeln, Zählen & das dominierte Ass",
  seoTitle: "Was ist ein Kicker beim Poker? Die Karte, die Pots gewinnt",
  desc: "Der Kicker ist die Beikarte, die beim Poker Gleichstände bricht — welche Hände einen haben und wie viele, warum A9 gegen AK verliert und die Vierling-Ausnahme.",
  tldr: "Ein Kicker ist die höchste Beikarte, die nicht zu deiner eigentlichen Hand gehört — er bricht den Gleichstand, wenn zwei Spieler denselben Rang teilen. Ein Paar nutzt 3 Kicker, Zwei Paare 1, Drilling 2; Straße, Flush und Full House haben keinen. Deshalb schlägt AK das AQ, wenn das Board ein Ass pairt.",
  category: "hand-rankings",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "Zwei Spieler decken beim Showdown A-K und A-Q auf, ein Ass liegt auf dem Board — der König als Kicker entscheidet, wer den Pot gewinnt",
  tags: ["kicker poker", "was ist ein kicker beim poker", "kicker regeln", "hat ein flush einen kicker", "das board spielen", "dominiertes ass", "kicker karte", "hat ein vierling einen kicker"],
  content: `
Die Hand, die mir endlich beigebracht hat, was ein Kicker ist, hat mich ein volles Buy-in gekostet. Ich hielt ==b:A♠ 9♣==, das Board pairte mein Ass, und ich bin all-in gegangen, weil ich dachte, Top Pair sei Gold wert. Er drehte ==b:A♥ K♦== um — dasselbe Paar Asse, aber sein König überragte meine Neun, und der Pot rutschte auf seine Seite. Ich hatte nicht gegen eine bessere *Hand* verloren, sondern gegen eine bessere ==Beikarte.== Diese Beikarte ist der Kicker, und er entscheidet mehr Pots, als jeder Anfänger ahnt.

==Ein Kicker ist der Tiebreaker, der im Poker selbst eingebaut ist — wenn zwei Spieler denselben Rang halten, gewinnt die höchste übrige Karte.== Die meisten Leitfäden geben dir eine Ein-Zeilen-Definition und ein AK-gegen-AQ-Beispiel. Dieser hier gibt dir das ganze Bild: genau welche Hände einen Kicker haben (und wie viele), die eine Ausnahme, die alle falsch machen, und warum „das Board spielen" bedeutet, dass dein Kicker plötzlich überhaupt keine Rolle mehr spielt.

Wo ein Kicker ins größere Bild der [Pokerhände-Reihenfolge](/de/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") passt, ist einfach: Er kommt erst *dann* ins Spiel, wenn zwei Spieler im Rang gleichauf sind — er schlägt nie eine höherrangige Hand.

---

### Kicker auf einen Blick

:::stripe
3 | Kicker in einer Hand mit einem Paar
1 | Kicker bei Zwei Paaren (und Vierling)
0 | Kicker bei einer Straße, einem Flush oder Full House
:::

---

## Was ist ein Kicker beim Poker?

**Ein Kicker ist die höchste Karte in deiner Fünf-Karten-Hand, die nicht Teil deiner gerankten Kombination ist — er entscheidet über den Sieger, wenn zwei Spieler denselben Rang teilen.** Er wird auch „Beikarte" genannt. Poker ist immer ein Fünf-Karten-Spiel (deine besten fünf aus sieben im Hold'em), also werden, sobald dein Paar oder Drilling feststeht, die übrigen Plätze mit Kickern gefüllt.

Der Kerngedanke: Ein Kicker ==schlägt nie eine höherrangige Hand.== Ein Paar Könige mit einer Zwei als Kicker zerlegt trotzdem ein Paar Zehnen mit einem Ass als Kicker — zuerst der Rang, der Kicker nur als Tiebreaker. Kicker sind nur dann wichtig, wenn die ==r:Ränge identisch sind==: Paar gegen dasselbe Paar, Drilling gegen denselben Drilling.

Angenommen, du hältst A-K und dein Gegner hält A-Q, und das Board pairt ein Ass. Ihr habt beide „ein Paar Asse" — identischer Rang. Jetzt entscheiden die Beikarten, und dein König überkickt seine Dame. Niemand hat die bessere Hand gemacht; der Kicker hat einfach seinen stillen Job erledigt.

---

## Welche Pokerhände haben einen Kicker — und welche nicht

**Nur Hände, die weniger als fünf Karten für ihre Kombination nutzen, haben Kicker — alles, was alle fünf Karten von allein füllt, hat keinen.** Das ist die Tabelle, die die Konkurrenz in Absätzen vergräbt. Hier ist sie auf einen Blick:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | Hat einen Kicker? | Kicker-Karten |
|:---|:---:|:---:|
| High Card | Ja — alle fünf werden der Reihe nach verglichen | bis zu 4 |
| Ein Paar | ✅ Ja | 3 |
| Zwei Paare | ✅ Ja | 1 |
| Drilling | ✅ Ja | 2 |
| Vierling | ✅ Ja (selten relevant) | 1 |
| Straße | ❌ Nein | — |
| Flush | ❌ Nein* | — |
| Full House | ❌ Nein | — |
| Straight Flush / Royal Flush | ❌ Nein | — |

</div>

Die Logik ist reine Rechnerei: **Kombinationskarten + Kicker ergeben immer fünf.** Ein Paar nutzt 2 Karten, also füllen 3 Kicker den Rest. Eine Straße, ein Flush oder ein Full House nutzt bereits alle fünf, also bleibt nichts zum Kicken übrig — zwei Straßen oder zwei Full Houses werden über die Ränge *in ihnen* entschieden, nicht über eine Beikarte.

==*Flushes sind das Sternchen:== streng genommen hat ein Flush keinen „Kicker". Wenn zwei Flushes aufeinandertreffen, vergleichst du alle fünf Karten von hoch nach niedrig (ein Ass-hoher Flush schlägt einen König-hohen Flush). Umgangssprachlich nennen die Leute die oberste Karte einen „Kicker", aber genau genommen ist es ein Fünf-Karten-High-Card-Vergleich. Die vollständige Tiebreaker-Reihenfolge für jede Hand findest du in [wie Gleichstände beim Poker gebrochen werden](/de/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Wie viele Kicker nutzt jede Hand?

**Ein Paar nutzt drei Kicker, ein Drilling nutzt zwei, und Zwei Paare und Vierling nutzen nur einen.** Zu wissen, wie viele es sind, verrät dir genau, wie tief ein Tiebreaker laufen kann.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | Kombination | + Kicker | = 5 Karten |
|:---|:---:|:---:|:---:|
| Ein Paar | 2 | 3 | ✅ |
| Drilling | 3 | 2 | ✅ |
| Zwei Paare | 4 | 1 | ✅ |
| Vierling | 4 | 1 | ✅ |

</div>

Das ist beim Showdown wichtig, weil Kicker ==der Reihe nach verglichen werden, der höchste zuerst.== Bei einem Paar gehst du, wenn die ersten Kicker gleich sind, zum zweiten weiter, dann zum dritten. Zwei Spieler können dasselbe Paar *und* denselben Top-Kicker halten und werden trotzdem durch die dritte Karte getrennt — genau deshalb ist „mein Kicker war gut" nicht immer gut genug.

---

## AK vs AQ: Wie ein Kicker den Sieger entscheidet

Spielen wir es Karte für Karte durch, damit die Mechanik konkret wird.

Das Board ist ==b:A♣ 9♦ 5♠ 2♥ 7♣==. Du hältst ==b:A♠ K♠==, dein Gegner hält ==b:A♦ Q♦==.

- **Du:** A♠ K♠ + Board → ein Paar Asse. Beste fünf = ==g:A♠ A♣ K♠ 9♦ 7♣== (Paar Asse, Kicker K-9-7).
- **Gegner:** A♦ Q♦ + Board → ebenfalls ein Paar Asse. Beste fünf = ==A♦ A♣ Q♦ 9♦ 7♣== (Kicker Q-9-7).

Dasselbe Paar, also vergleiche die Kicker von oben nach unten: dein ==g:K schlägt seine Q.== Du gewinnst, A-A-K-9-7 über A-A-Q-9-7. Die 9 und die 7 kommen nicht einmal ins Spiel — der erste Kicker hat es entschieden.

:::note[Beachte, dass beide Hände die 9 und die 7 vom Board teilen. Kicker können auch vom Board kommen: Wenn die höchste Beikarte eine Gemeinschaftskarte ist, füllt sie die Hand *beider* Spieler und die nächste Karte entscheidet. Deine Hole Card ist nur dann ein Kicker, wenn sie schlägt, was schon auf dem Board liegt.]:::

---

## Das Board spielen: Wenn dein Kicker nicht mitspielt

**Wenn die fünf Gemeinschaftskarten bereits die bestmögliche Hand bilden und deine Hole Cards sie nicht verbessern können, „spielst du das Board" — und es gibt überhaupt keinen Kicker.** Alle, die noch in der Hand sind, nutzen die identischen fünf Karten, also wird der Pot geteilt.

Das Board ist ==b:10♠ J♦ Q♣ K♥ A♠== — eine fertige Zehn-bis-Ass-Straße (Broadway), in gemischten Farben, sodass kein Flush möglich ist.

- Du hältst ==b:2♣ 3♦==. Deine besten fünf sind die Board-Straße; die 2 und die 3 bringen nichts.
- Dein Gegner hält ==b:4♥ 5♦==. Dieselbe Geschichte — die Board-Straße ist auch seine besten fünf.

Keiner von euch kann höher als bis zum Ass gehen, also „spielt ihr beide das Board" und ==g:teilt den Pot.== Eine Straße hat keinen Kicker, also sind diese Hole Cards totes Gewicht. Wenn du hörst „das Board spielt", ist genau das gemeint — und es ist der eine Fall, in dem eine stark aussehende Hole Card exakt nichts wert ist. (Mehr zum Erkennen solcher Runouts in [das Board lesen](/de/blog/holdem-reading-the-board).)

---

## Das dominierte Ass: Warum A9 gegen AK verliert

**Eine Hand ist „dominiert", wenn sie eine Karte mit einer stärkeren Hand teilt und die Kicker-Schlacht fast jedes Mal verliert, wenn sie trifft — die klassische Falle ist ein schwaches Ass wie A9 gegen AK.** Hier hören Kicker auf, Trivialwissen zu sein, und fangen an, Geld zu kosten.

![Zwei Starthände nebeneinander auf grünem Filz — A-K neben A-9 — die zeigen, wie dasselbe Ass mit einem schwächeren Kicker zur dominierten Falle wird](/images/holdem-kicker-dominated.webp "Dasselbe Ass, anderes Schicksal: Der Kicker ist es, der eine Premium-Hand von einer dominierten trennt")

Zurück zu meinem Buy-in. Board ==b:A♦ 7♣ 2♥ Q♠ 4♦==, keine Straße oder Flush in Sicht.

- **A9:** A♠ 9♣ → Paar Asse, beste fünf ==A♠ A♦ Q♠ 9♣ 7♣==.
- **AK:** A♥ K♦ → Paar Asse, beste fünf ==g:A♥ A♦ K♦ Q♠ 7♣==.

Wieder dasselbe Paar — und meine 9 bekam nicht einmal eine Stimme. Sie wurde durch die Dame des Boards zum zweiten Kicker heruntergedrückt, und der Vergleich wurde beim ersten Kicker entschieden: sein K über die Q des Boards — sodass mein „Kicker" für alles, was zählte, ==r:tot== war, bevor die Hand überhaupt begann. Das ist Dominanz: Wenn du dein Ass triffst, zahlst du oft nur ein größeres Ass aus. Genau deshalb behandelt die [Starthände-Tabelle](/de/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") A9 offsuit so viel vorsichtiger als AK — der Kicker ist der Unterschied zwischen einer Premium-Hand und einer Falle.

---

## Hat ein Vierling einen Kicker?

**Ja — ein Vierling hat einen Ein-Karten-Kicker, aber er entscheidet im Hold'em fast nie eine Hand, weil der Vierling meistens auf dem Board geteilt wird.** Das ist die Ausnahme, die die meisten Leitfäden vermasseln, indem sie den Vierling zu den „Fünf-Karten-Händen ohne Kicker" zählen.

Die Mathematik ist klar: Vier Karten bilden den Vierling, eine Karte ist der Kicker. Er zählt nur, wenn zwei Spieler irgendwie auf demselben Vierling gleichauf sind — was im Hold'em erfordert, dass alle vier auf dem Board liegen (da es von jedem Rang nur vier gibt). Wenn das Board ==b:5♠ 5♥ 5♦ 5♣ K♦== ist, hat jeder einen Vierling Fünfen, und die fünfte Karte ist der Kicker: Ein Spieler mit einem Ass spielt ==g:5-5-5-5-A== und schlägt einen Spieler, der die ==5-5-5-5-K== vom Board nimmt. Selten, aber real — und bei den Grenzfällen recht zu haben, ist das, was einen vertrauenswürdigen Leitfaden von einem schwammigen unterscheidet.

---

:::readnext[Weiterlesen]
/de/blog/holdem-hand-rankings | Pokerhände-Reihenfolge (komplette Ordnung) | /images/holdem-hand-rankings-hero.webp
/de/blog/holdem-tiebreak-rules | Wie Gleichstände beim Poker gebrochen werden | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. Was ist ein Kicker beim Poker?**

A. Ein Kicker ist die höchste Beikarte in deiner Fünf-Karten-Hand, die nicht Teil deiner gerankten Kombination ist. Er bricht Gleichstände, wenn zwei Spieler denselben Rang teilen — zum Beispiel schlägt A-K das A-Q, wenn das Board ein Ass pairt, weil der König als Kicker die Dame überragt. Ein Kicker schlägt nie eine höherrangige Hand.

**Q. Hat ein Flush einen Kicker?**

A. Nein. Ein Flush nutzt alle fünf Karten, also gibt es keinen separaten Kicker. Wenn zwei Flushes aufeinandertreffen, vergleichst du alle fünf Karten von hoch nach niedrig — ein Ass-hoher Flush schlägt einen König-hohen Flush. Manchmal nennen die Leute die oberste Karte umgangssprachlich einen „Kicker", aber es ist eigentlich ein Fünf-Karten-Vergleich.

**Q. Hat eine Straße einen Kicker?**

A. Nein. Eine Straße besteht aus fünf aufeinanderfolgenden Karten, also ist sie bereits vollständig. Wenn zwei Spieler dieselbe Straße machen, teilen sie den Pot — zusätzliche Hole Cards zählen nicht. Nur eine höhere Straße schlägt eine niedrigere.

**Q. Hat ein Full House einen Kicker?**

A. Nein. Ein Full House ist ein Drilling plus ein Paar — alle fünf Karten. Gleichstände werden zuerst über den Rang des Drillings gebrochen, dann über das Paar, nie über eine Beikarte.

**Q. Hat ein Vierling einen Kicker?**

A. Ja, ein Vierling hat einen Ein-Karten-Kicker, aber er zählt im Hold'em selten. Er entscheidet eine Hand nur, wenn zwei Spieler auf dem exakt selben Vierling gleichauf sind — was erfordert, dass alle vier Karten auf dem Board liegen — und dann gewinnt die höchste fünfte Karte.

**Q. Wie viele Kicker sind in einer Pokerhand?**

A. Es kommt auf die Hand an: Ein Paar nutzt drei Kicker, ein Drilling nutzt zwei, und Zwei Paare und Vierling nutzen je einen. Straße, Flush, Full House und Straight Flush haben keine Kicker, weil sie bereits alle fünf Karten füllen.

**Q. Was ist ein guter Kicker beim Poker?**

A. Ein hoher — ein Ass oder König als Kicker ist stark, während ein niedriger Kicker wie eine Neun dich „dominiert" zurücklässt. Deshalb sind AK und AQ weit besser als A9 oder A5: Wenn alle ihr Ass pairen, gewinnt der größte Kicker den Pot.

**Q. Was bedeutet „das Board spielen"?**

A. Das Board spielen bedeutet, dass die fünf Gemeinschaftskarten deine beste Hand sind und deine Hole Cards sie nicht verbessern können. Da alle dieselben fünf Karten nutzen, wird der Pot geteilt. Es gibt keinen Kicker, weil das Board bereits eine vollständige Fünf-Karten-Hand bildet.

**Q. Zählen Kicker im Texas Hold'em?**

A. Eine Menge. Weil alle die Gemeinschaftskarten teilen, machen Spieler häufig dasselbe Paar oder denselben Drilling, und der Kicker entscheidet diese Pots. Hände mit starken Kickern zu wählen (und dominierte zu folden) ist ein Kernbestandteil des gewinnenden Spiels.

---

## Die 3 Dinge zum Merken

1. **Kicker = Beikarte, nur Tiebreaker.** Er entscheidet Gleichstände zwischen gleichen Rängen und schlägt nie eine höherrangige Hand.
2. **Kombination + Kicker = fünf.** Ein Paar hat 3 Kicker, Drilling 2, Zwei Paare und Vierling 1; Straße, Flush und Full House haben keinen.
3. **Kicker entscheiden echtes Geld.** Dominanz (A9 vs AK) und das Board spielen laufen beide auf den Kicker hinaus — wähle Hände mit starken Beikarten und wisse, wann deine tot ist.

Hast du den Kicker richtig verstanden, hört eine ganze Kategorie von „Wie habe ich das verloren?"-Händen auf, ein Rätsel zu sein. Von hier aus schau dir die komplette [Pokerhände-Reihenfolge](/de/blog/holdem-hand-rankings) an oder die vollständigen [Tiebreaker-Regeln](/de/blog/holdem-tiebreak-rules) für jeden Handtyp.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pokerhände-Reihenfolge</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die komplette Ordnung, unter der ein Kicker sitzt</div>
  </a>
  <a href="/de/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie Gleichstände gebrochen werden</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Komplette Tiebreaker-Reihenfolge für jede Hand</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starthände</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthände-Tabelle</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum Asse mit schwachem Kicker gefoldet werden</div>
  </a>
  <a href="/de/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board lesen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie man das Board liest</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Erkenne, wann du das Board spielst</div>
  </a>
</div>
`.trim(),
};

export default POST;
