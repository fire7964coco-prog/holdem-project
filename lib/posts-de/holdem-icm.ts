import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "Was ist ICM im Poker? Das Independent Chip Model, erklärt",
  seoTitle: "Deine Chips sind nicht ihren Nennwert wert — ICM erklärt",
  desc: "Im Turnier sind deine Chips kein Bargeld — nur der Sieg zahlt den ersten Platz. ICM (das Independent Chip Model) macht aus deinem Stack echtes Preisgeld.",
  tldr: "ICM (Independent Chip Model) rechnet deinen Turnier-Chipstack in seinen echten Preisgeldwert um, anhand der Payouts und aller Stacks. Weil du nur ein einziges erstes Preisgeld gewinnst, verdoppelt das Verdoppeln deiner Chips nie dein Geld — deshalb ist der Stack des Chipleaders weniger wert als sein Chipanteil, und Short Stacks sind mehr wert. Diese Lücke ist der Grund, warum du an der Bubble Hände foldest, die im Cash Game leichte Calls wären.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 Min.",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Poker-Chips am Final Table vor einer Payout-Leiter gestapelt, die zeigen, dass ein größerer Chipstack sich nicht eins zu eins in einen größeren Anteil am Preisgeld umrechnet",
  tags: ["poker icm", "was ist icm im poker", "icm poker bedeutung", "icm vs chip ev", "icm deal", "chip chop vs icm", "wie wird icm berechnet", "icm poker strategie"],
  content: `
Das erste Mal, als ICM mich Geld kostete, wusste ich nicht einmal, dass es existiert. Wir waren noch zu viert, drei wurden bezahlt, und ich schaute auf Pocket Jacks mit einem mittleren Stack herunter. Ich shovte, der Chipleader callte mit Ass-Zehn, und ich bustete an der Bubble für nichts. ==Im Cash Game ist dieser Shove in Ordnung. An dieser Bubble war er eine Katastrophe== — und der Grund dafür ist die einzige wichtigste Idee im Turnierpoker.

==Chips in einem Turnier sind kein Geld. Du gewinnst immer nur *ein* erstes Preisgeld, also verdoppelt das Verdoppeln deines Stacks nie das, was du tatsächlich wert bist.== ICM — das Independent Chip Model — ist die Mathematik, die deinen Chipberg in die echten Dollar verwandelt, die er repräsentiert, und sobald du es siehst, ergeben Calls und Folds, die sich falsch anfühlten, plötzlich Sinn. Dieser Guide führt dich von "wofür steht ICM" bis zum Aufteilen eines Final-Table-Deals, mit jeder Zahl durchgerechnet, damit du sie selbst prüfen kannst.

ICM lebt speziell im [Turnierspiel](/de/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") — es ist der Grund, warum spätes MTT-Spiel überhaupt nicht wie ein Cash Game aussieht.

---

### ICM auf einen Blick

:::stripe
Chips ≠ Geld | Du gewinnst nur ein erstes Preisgeld
Chipleader | WENIGER wert als sein Chipanteil
Short Stack | MEHR wert als sein Chipanteil
:::

---

## Was ist ICM im Poker?

**ICM (das Independent Chip Model) rechnet einen Chipstack in seinen echten Preisgeldwert um, anhand der verbleibenden Payouts und der Stackgröße jedes Spielers.** Es beantwortet eine Frage: ==wenn das Turnier gerade jetzt mit diesen Stacks endete, wie viel ist mein Anteil am Preispool tatsächlich in Dollar wert?==

Es funktioniert, indem es schätzt, wie oft jeder Spieler auf jeder bezahlten Position landet — erster, zweiter, dritter und so weiter — ausgehend von seinem Chipanteil, und dann diese Wahrscheinlichkeiten mit den Payouts multipliziert. Je größer dein Stack, desto öfter landest du weit oben; aber weil ==das Top-Preisgeld gedeckelt ist, kaufen zusätzliche Chips immer weniger Geld.==

Der entscheidende mentale Wandel: Im Cash Game ist ein Chip ein Dollar, Punkt. Im Turnier ist ein Chip ein *Lottoschein* auf einen festen Satz Preise. ICM bepreist diesen Schein. Es gilt nur für Turniere und Sit-and-gos — [niemals für Cash Games](/de/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), wo deine Chips bereits ihrem Nennwert entsprechen.

---

## Warum deine Chips in Geld nicht ihren Nennwert wert sind

**Weil Preisgeld "kopflastig" ist und unter dir festgeschrieben liegt.** Sagen wir, drei Preise zahlen $50 / $30 / $20. In dem Moment, in dem du im Geld bist, sind dir mindestens $20 garantiert — also sind die Chips, die diese $20 schützen, kostbar, während die Chips, die nach dem ersten Platz greifen, ein Preisgeld jagen, das du nur einmal gewinnen kannst.

Das lässt die Chip-zu-Geld-Kurve ==knicken==: die ersten Chips (Überleben) sind viel wert, die letzten Chips (der Griff nach dem Sieg) sind weniger wert. Ein Spieler mit der Hälfte der Chips besitzt nicht die Hälfte des Preispools — er besitzt merklich weniger, weil er nicht besser als erster werden kann, aber er *kann* immer noch busten.

Dreh es um, und der Short Stack ist der Gewinner dieser Mathematik. Er hat bereits einen echten Anspruch auf die Pay Jumps unter ihm, also ist ==jeder seiner Chips mehr als der Nennwert wert==. Diese eine Asymmetrie — Big Stack in Chips überbewertet, Short Stack unterbewertet — treibt jede ICM-Entscheidung an, die du je treffen wirst.

---

## Wie wird ICM berechnet? (Das Malmuth–Harville-Modell)

**ICM ordnet jedem Spieler seine Wahrscheinlichkeit zu, auf jeder Position zu landen, rein basierend auf der Stackgröße, und multipliziert dann mit den Payouts.** Die Methode wird oft Malmuth–Harville-Modell genannt — die Finish-Wahrscheinlichkeits-Mathematik stammt aus David Harvilles Arbeit zu Pferderennquoten aus den 1970ern, die Mason Malmuth auf Poker anwandte.

Die Regel ist einfach und rekursiv:

- Deine Chance, **1.** zu werden = dein Stack ÷ Gesamtchips.
- Deine Chance, **2.** zu werden = die Summe, über jeden anderen Spieler, der 1. werden könnte, aus (seiner Gewinnchance) × (dein Stack ÷ den ohne ihn verbleibenden Chips).
- Mach so für jede tiefere Position weiter.

Machen wir es echt. Drei Spieler sind übrig, die Preise sind ==$50 / $30 / $20== ($100 Pool), und die Stacks sind:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Platz | Leader (5.000 · 50%) | Middle (3.000 · 30%) | Short (2.000 · 20%) |
|:--|:--:|:--:|:--:|
| 1. | 50,0% | 30,0% | 20,0% |
| 2. | 33,9% | 37,5% | 28,6% |
| 3. | 16,1% | 32,5% | 51,4% |

</div>

Nimm die 2.-Platz-Zahl des Leaders, damit du die Rekursion siehst: wenn Middle als Erster gewinnt (30% der Zeit), nimmt der Leader dann 5.000 der 7.000 verbleibenden Chips = 71,4%, und 0,30 × 0,714 = 21,4%; wenn Short als Erster gewinnt (20%), nimmt der Leader 5.000 von 8.000 = 62,5%, und 0,20 × 0,625 = 12,5%. Addiere sie: ==33,9%== der Zeit wird der Leader Zweiter.

Multipliziere jetzt jede Zeile mit den Payouts, und du bekommst den Dollarwert jedes Stacks:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Spieler | Chip % | ICM-Wert | ICM % | vs Chips |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50,0% | ==$38,39== | 38,4% | ==r:−11,6== |
| Middle | 30,0% | $32,75 | 32,8% | ==g:+2,8== |
| Short | 20,0% | $28,86 | 28,9% | ==g:+8,9== |

</div>

Da steht es in Zahlen: der Leader hat ==die Hälfte der Chips, aber nur 38,4% des Geldes==, während die 20% Chips des Short Stacks 28,9% wert sind. Du musst das nicht am Tisch von Hand rechnen — der [ICM-Rechner](/calculator) macht es sofort — aber die Mechanik einmal zu sehen, ist es, was die Strategie hängen lässt.

---

## ICM vs Chip EV — Was ist der Unterschied?

**Chip EV misst eine Entscheidung in gewonnenen oder verlorenen Chips; ICM (oder "$EV") misst sie in echtem Preisgeld. Sie stimmen früh überein und trennen sich spät hart.** Früh in einem Turnier, mit winzigen Pay Jumps weit weg, ist ein Chip im Grunde ein Chip — du spielst [Chip EV](/de/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") und akkumulierst unerbittlich. Nahe am Geld und am Final Table übernimmt ICM.

Der klassische Konflikt ist ein marginaler All-in. Im Chip EV kann ein Coinflip um einen großen Pot in Ordnung oder sogar gut sein — du gewinnst so viele Chips, wie du verlierst. Im ICM kann es ein klarer ==Fold== sein, weil Busten dich festgeschriebenes Preisgeld kostet, das du nicht zurückbekommst, während die Chips, die du gewinnen würdest, weniger als den Nennwert wert sind.

Das ist genau der Fehler, den ich mit diesen Jacks machte: ein feiner Chip-EV-Shove, ein verlierender ICM-Shove. ==Chip EV fragt "wird das meinen Stack aufbauen?" ICM fragt "wird das meine Bankroll aufbauen?"== — und nur die zweite zahlt aus.

---

## Die "ICM-Steuer": Warum Chips zu verlieren mehr schmerzt, als zu gewinnen hilft

**Die "ICM-Steuer" ist die Lücke zwischen deinem Chipprozentsatz und deinem echten Geldprozentsatz — Wert, der in dem Moment verschwindet, in dem die Stacks kopflastig werden.** Im durchgerechneten Beispiel sagen die Chips des Leaders 50%, aber das Geld sagt 38,4%: eine ==ICM-Steuer von 11,6 Punkten== darauf, der Big Stack zu sein.

Die Steuer zeigt sich in jedem All-in als **Risk Premium** — die zusätzliche Equity, die du *über* dem Chip-EV-Break-even brauchst, bevor ein Call in Dollar tatsächlich profitabel ist. Wenn die Chip-Mathematik sagt, du brauchst 40% zum Callen, verlangt ICM vielleicht 48-50%, weil die Kehrseite (Busten, verlorene Pay-Jump-Equity) den Vorteil (Chips weniger als Nennwert wert) überwiegt.

Der Spieler, der das am stärksten spürt, ist der **Medium Stack an der Bubble** — groß genug, um echte Equity zu verlieren, nicht kurz genug, um gezwungen zu sein. Er trägt das höchste Risk Premium und sollte am tightesten spielen. Der Big Stack trägt das *niedrigste* Risk Premium, was der ganze Motor hinter ICM-Druck ist.

---

![Ein mittlerer Turnierstack foldet an der Money-Bubble gegen den Shove eines Big Stacks, Chips und eine Payout-Leiter im Bild — der Moment, in dem ICM-Druck einen normalen Call in einen Fold verwandelt](/images/holdem-icm-pressure.webp "ICM-Druck: der Medium Stack foldet, weil Busten festgeschriebenes Preisgeld kostet, das die Chips nicht zurückkaufen können")

## Bubble Factor & Risk Premium: Wie ICM deine Shoves und Calls verändert

**Der "Bubble Factor" misst, wie viel mehr das Verlieren deiner Chips dich kostet, als das Gewinnen derselben Chips hilft — und er schnellt direkt vor jedem Pay Jump nach oben.** Ein Bubble Factor von 1,0 bedeutet, Chips und Geld bewegen sich zusammen (frühes Spiel). Ein Bubble Factor von 1,5 bedeutet, ein verlorener Pot schmerzt 1,5× so sehr, wie ein identischer gewonnener Pot hilft — also brauchst du einen viel größeren Edge, um dich einzumischen.

Zwei praktische Regeln folgen daraus:

- **Big Stack: angreifen.** Dein niedriges Risk Premium lässt dich unerbittlich [openen und 3-betten](/de/blog/holdem-3bet) gegen Spieler, die nicht callen können, ohne ihr Turnierleben zu riskieren. Das ist "ICM-Druck ausüben", und es ist der zuverlässigste Weg, Chips am Final Table zu gewinnen.
- **Medium und Short Stacks: engt eure Calling Range ein, aber shovt weiterhin zuerst.** Derjenige zu sein, der All-in geht (mit Fold Equity), ist weit besser, als derjenige zu sein, der abcallen muss. Unter Druck sollte eure Calling Range hart schrumpfen, während eure Open-Shoving Range aggressiv bleibt.

Der Albtraum-Sitzplatz ist der Medium Stack, der angeshovt wird — der Hände foldet, die so stark sind wie manche, die du im Cash Game snap-callen würdest. Das ist keine Schwäche; das ist ICM.

---

## ICM Deal vs Chip Chop: Wie man einen Final-Table-Preispool aufteilt

**Ein Chip Chop teilt das verbleibende Geld nach rohem Chipprozentsatz auf; ein ICM Deal teilt es nach dem ICM-Dollarwert jedes Spielers auf. Der Chip Chop begünstigt Big Stacks, der ICM Deal ist fairer gegenüber Short Stacks.** Wenn Spieler sich einigen, ein Turnier früh zu beenden und die Preise aufzuteilen, sind das die zwei Methoden auf dem Tisch — und den Unterschied zu kennen, ist echtes Geld wert.

Sagen wir, drei Spieler mit 50% / 30% / 20% der Chips teilen einen verbleibenden Pool von ==$1.500== auf (der $900 / $400 / $200 zahlt):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Spieler | Chip Chop | ICM Deal | Differenz |
|:--|:--:|:--:|:--:|
| Leader (50%) | $750 | ==$618== | ==r:−$132== |
| Middle (30%) | $450 | $485 | ==g:+$35== |
| Short (20%) | $300 | ==$397== | ==g:+$97== |

</div>

Der Short Stack bekommt aus einem ICM Deal ==$97 mehr== als aus einem Chip Chop, weil ICM ihm die Pay Jumps gutschreibt, die er sich bereits verdient hat. Also ist die Regel einfach: ==bist du short, verlange einen ICM Deal; bist du der Chipleader, schlage einen Chip Chop vor.== In der Praxis verhandelt der Chipleader oft ein Stück *über* seiner ICM-Zahl (und Short Stacks akzeptieren ein Stück darunter) im Tausch gegen die Sicherheit, Geld festzuschreiben — das ist in Ordnung, solange du deine ICM-Zahl zuerst kennst. Jag deine eigenen Stacks und Payouts durch den [ICM-Deal-Rechner](/calculator), bevor du irgendetwas zustimmst.

---

## Wann zählt ICM am meisten — und wann solltest du es ignorieren?

**ICM zählt am meisten nahe an Pay Jumps und am wenigsten, wenn sie weit weg sind.** Verlass dich auf diese Spots:

- **Die [Money-Bubble](/de/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — der größte Sprung von allen ist von $0 zu einer Auszahlung, also erreichen die Risk Premiums ihren Höhepunkt.
- **Die Final-Table-Bubble und jeder Pay Jump am Final Table** — jede Leiterstufe ist echtes Geld.
- **Satellites** — der Extremfall: jeder qualifizierende Seat ist gleich viel wert, also sind zusätzliche Chips, sobald du genug hast, um einen Seat zu gewinnen, fast *nichts* wert, und du foldest so gut wie alles.

Ignoriere es (spiel Chip EV), wenn:

- **Frühe und mittlere Phasen**, wo der nächste Pay Jump eine ferne Abstraktion ist und das Akkumulieren von Chips das ist, was Turniere gewinnt.
- **Deepstacked-Spiel mit winzigen Blinds**, wo du Raum hast, Gegner auszuspielen, statt es reinzugeben.
- **Heads-up um den Titel**, wo nur zwei Preise übrig sind und ICM aufhört, deine Strategie zu ändern — es ist praktisch wieder Chip EV.

Ein häufiges Leak ist das Überanwenden von ICM: sich zu einem Short Stack herunterzufolden, "um hochzuladdern", statt zu akkumulieren, wenn der Druck noch gar nicht wirklich da ist. ICM ist ein Late-Game-Werkzeug, keine Ausrede, das ganze Turnier ängstlich zu spielen.

---

## Wie genau ist ICM? Seine Grenzen

**ICM ist das beste einfache Modell, das wir haben, aber es ist eine Näherung — es nimmt an, dass jeder Spieler gleich stark ist, und ignoriert fast alles außer den Stackgrößen.** Sei ehrlich darüber, was es weglässt:

- **Skill.** ICM behandelt einen Weltmeister und einen Erstlingsspieler mit gleichen Stacks als gleich. Die Chips eines besseren Spielers sind mehr wert, als das Modell sagt.
- **Position.** Ein Stack von 3 Big Blinds am Button (kurz davor, billige Flops zu sehen) ist mehr wert als derselbe Stack im Big Blind (kurz davor, reingezwungen zu werden). ICM kann die Sitzplätze nicht sehen.
- **Blinds und künftiges Spiel.** ICM friert das Turnier in diesem Augenblick ein; es ignoriert steigende Blinds, Antes und wie die nächsten paar Orbits tatsächlich ablaufen werden.

Es gibt sogar empirische Belege für seinen blinden Fleck: eine große Studie von 2025, die ICM gegen echte Turnierergebnisse zurücktestete, fand, dass es dazu neigt, ==Big Stacks zu unterschätzen und Short Stacks zu überschätzen==, teils weil ein starker Chipleader ICM-Druck nutzen kann, um *mehr* zu gewinnen, als das rohe Modell vorhersagt. Fortgeschrittene Solver fügen genau aus diesem Grund eine "Future Game"-Korrektur hinzu. Nichts davon macht ICM falsch — es macht es zu einer starken ersten Näherung, die du für Skill und Position anpasst, nicht zu einem physikalischen Gesetz.

---

:::readnext[Weiterlesen]
/de/blog/holdem-tournament | Texas Hold'em Turnierstrategie | /images/holdem-tournament-hero.webp
/de/blog/holdem-equity | Poker Equity erklärt | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. Was ist ICM im Poker?**

A. ICM (das Independent Chip Model) ist eine Formel, die deinen Turnier-Chipstack in seinen echten Preisgeldwert umrechnet, anhand der verbleibenden Payouts und des Stacks jedes Spielers. Es funktioniert, weil du nur ein erstes Preisgeld gewinnst, also sind Chips und Dollar nicht dasselbe — ICM bepreist den Unterschied.

**Q. Wie wird ICM berechnet?**

A. Es ordnet jedem Spieler eine Wahrscheinlichkeit zu, auf jeder bezahlten Position zu landen, basierend auf seinem Chipanteil (deine Chance, Erster zu werden = dein Stack ÷ Gesamtchips, dann rekursiv für tiefere Plätze), und multipliziert dann diese Wahrscheinlichkeiten mit den Payouts. Die Summe ist der Dollarwert deines Stacks. In der Praxis nutzt du einen ICM-Rechner; der Punkt ist, zu verstehen, was er tut.

**Q. Was ist der Unterschied zwischen ICM und Chip EV?**

A. Chip EV misst eine Entscheidung in gewonnenen oder verlorenen Chips; ICM misst sie in echtem Geld. Sie stimmen früh in einem Turnier überein und divergieren nahe am Geld, wo Busten festgeschriebene Preis-Equity kostet. Ein Coinflip-All-in, das im Chip EV in Ordnung ist, kann unter ICM ein klarer Fold sein.

**Q. Was ist ein ICM Deal, und wie unterscheidet er sich von einem Chip Chop?**

A. Beide teilen einen Preispool auf, wenn Spieler sich einigen, früh zu beenden. Ein Chip Chop teilt das Geld nach rohem Chipprozentsatz auf (begünstigt Big Stacks); ein ICM Deal teilt es nach dem ICM-Dollarwert jedes Spielers auf (fairer für Short Stacks). Bist du short, verlange einen ICM Deal; bist du der Chipleader, zahlt dir ein Chip Chop mehr.

**Q. Gilt ICM für Cash Games?**

A. Nein. Im Cash Game entspricht jeder Chip bereits seinem Nennwert in Dollar, und du kannst jederzeit nachkaufen oder gehen, also gibt es nichts umzurechnen. ICM existiert nur, weil Turnier-Chips nicht zu ihrem Nennwert ausgezahlt werden können.

**Q. Wann sollte ich ICM ignorieren?**

A. Frühe und mittlere Phasen, Deepstacked-Spiel mit kleinen Blinds und Heads-up um den Titel — alles Spots, wo Pay Jumps weit weg sind oder nur zwei Preise übrig bleiben. In diesen Fällen spielst du Chip EV und konzentrierst dich aufs Akkumulieren von Chips.

**Q. Wer hat ICM erfunden?**

A. Die Finish-Wahrscheinlichkeits-Mathematik wird meist David Harville (aus der Pferderennforschung der 1970er) zugeschrieben, die Mason Malmuth auf Pokerturniere anwandte — daher das "Malmuth–Harville"-Modell. Es wurde die Standardmethode, um Turnierstacks zu bewerten und Final-Table-Deals aufzuteilen.

---

## Die 3 Dinge, die du dir merken solltest

1. **Chips sind kein Geld.** Du gewinnst nur ein erstes Preisgeld, also ist der Chipleader weniger wert als sein Chipanteil und der Short Stack mehr. Diese eine Lücke ist ganz ICM.
2. **Late Game, wechsle von Chip EV zu $EV.** Nahe an Pay Jumps braucht ein Call zusätzliche Equity (ein Risk Premium), um profitabel zu sein. Der Medium Stack foldet Hände, die ein Cash Game snap-callen würde.
3. **Kenne deine Zahl, bevor du dealst.** Short Stacks wollen einen ICM Deal, Big Stacks wollen einen Chip Chop — jag zuerst den [Rechner](/calculator).

Von hier aus sieh, wie ICM-Druck in die breitere [Turnierstrategie](/de/blog/holdem-tournament) passt, oder geh zurück zum Fundament mit [Poker Equity](/de/blog/holdem-equity) und [Pot Odds](/de/blog/holdem-pot-odds).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Turnierstrategie</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Der Pillar, zu dem ICM gehört</div>
  </a>
  <a href="/de/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnier vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum ICM nie für Cash gilt</div>
  </a>
  <a href="/de/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Equity erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chip EV ist nur Equity in Chips</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kostenloses Tool</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM-Rechner</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Jag deine eigenen Stacks und Deals</div>
  </a>
</div>
`.trim(),
};

export default POST;
