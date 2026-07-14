import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-implied-odds",
  title: "Implied Odds beim Poker — wenn ein schlechter Preis ein guter Call ist",
  seoTitle: "Der Call, den die Pot Odds verbieten — Implied Odds erklärt",
  desc: "Deine Pot Odds sagen Fold, doch der Call zahlt trotzdem. Wie Implied Odds funktionieren — die Formel, Set Mining, Reverse Implied Odds und wann das Geld fehlt.",
  tldr: "Implied Odds sind die zusätzlichen Chips, die du auf späteren Streets zu gewinnen erwartest, wenn dein Draw ankommt. Sie erlauben dir, einen Draw profitabel zu callen, den die Pot Odds allein zum Fold verurteilen — aber nur, wenn die Stacks tief sind und dein Gegner dich wirklich auszahlt.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "11 Min.",
  emoji: "💰",
  image: "/images/holdem-implied-odds-hero.webp",
  imageAlt: "Ein tiefer Chipstack hinter einem Spieler, der am Turn eine Bet mit Flushdraw callt — der Moment, in dem Implied Odds einen Call rechtfertigen, den der Pot allein nicht bezahlt",
  tags: ["implied odds", "implied odds poker", "reverse implied odds", "implied odds berechnen", "implied odds vs pot odds", "set mining", "implied odds formel", "implied odds flushdraw"],
  content: `
Der größte Pot, den ich je gewonnen habe, begann mit einem Call, der eigentlich ein Fold hätte sein "sollen". Ich hatte ==b:6♠ 5♠== am Button, floppte einen Open-Ended-Draw, und die Pot Odds am Flop sagten, der Preis stimme nicht. Ich callte trotzdem — weil der Typ mir gegenüber 200 Big Blinds hatte und Top Pair um sein Leben nicht folden konnte. Die Straße kam am River, sein ganzer Stack kam mit, und endlich verstand ich die Zahl, die niemand gut erklärt: ==implied odds.==

==Implied Odds sind der Grund, warum du einen Draw callen kannst, der eigentlich ein Fold sein "sollte" — und warum tiefe Stacks spekulative Hände in den richtigen Spots so profitabel und in den falschen so gefährlich machen.== Das Problem ist, dass die meisten Spieler sie als Zauberwort behandeln, das jeden Call rechtfertigt. Tut es nicht. Es ist eine Zahl, die du schätzen kannst, und dieser Guide zeigt dir, wie.

Die rohen Odds hinter jedem Draw kommen aus der [Poker-Odds- und Wahrscheinlichkeitstabelle](/de/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); dieser Guide zeigt, wann diese Odds — plus das Geld, das noch kommt — einen Call tatsächlich profitabel machen. Er setzt genau da an, wo die [Pot Odds](/de/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") aufhören.

---

### Implied Odds auf einen Blick

:::stripe
Call ÷ Trefferquote − (Pot + Call) | Die Implied-Odds-Formel
7,5:1 | Echte Odds, ein Set zu floppen
0 | Deine Implied Odds, wenn Villain all-in ist
:::

---

## Was sind Implied Odds beim Poker?

**Implied Odds sind die zusätzlichen Chips, die du auf späteren Streets zu gewinnen erwartest, wenn dein Draw ankommt — obendrauf auf den Pot, der gerade jetzt in der Mitte liegt.** Pot Odds fragen nur: "Ist der aktuelle Preis es wert?" Implied Odds stellen die vollständigere Frage: "Ist der aktuelle Preis *plus alles, was ich später gewinne* es wert?"

Dieser Unterschied ist der Grund, warum du eine Flop-Bet mit einem Flushdraw callen kannst, der den sofortigen Preis nicht bekommt. Der Pot vor dir zahlt nicht genug — aber wenn ein Herz fällt und dein Gegner eine dicke River-Bet auszahlt, deckt der *Gesamtbetrag*, den du gewinnst, den Call um ein Vielfaches.

Hier ist der Haken, der das ganze Konzept trägt oder bricht: Dieses zukünftige Geld ist eine ==r:Schätzung==, keine Tatsache. Es hängt vollständig davon ab, wie tief die Stacks sind und wie wahrscheinlich dein Gegner dich auszahlt, wenn du triffst. Nimm zu viel an, und aus "Implied Odds" wird eine Geschichte, die du dir erzählst, während du Chips verbrennst.

---

## Implied Odds vs Pot Odds: Der entscheidende Unterschied

**Pot Odds zählen nur das Geld, das gerade jetzt im Pot liegt; Implied Odds addieren das Geld, das du später zu gewinnen erwartest, wenn du triffst.** Sie sind keine Rivalen — Implied Odds sind Pot Odds, *in die Zukunft verlängert*.

:::compare
Pot Odds | Implied Odds
Nur die Chips, die jetzt im Pot sind | Der Pot jetzt + Chips, die du auf späteren Streets gewinnst
Eine Tatsache, die du exakt berechnen kannst | Eine Schätzung auf Basis von Stacks und Gegner
Sagt dir, ob der Call sich heute selbst bezahlt | Sagt dir, ob der Call sich über die ganze Hand auszahlt
Funktioniert sogar gegen ein All-in | Wert null gegen ein All-in (keine Bets mehr)
:::

Die praktische Regel: **Fang mit den Pot Odds an.** Wenn deine Equity den Preis bereits schlägt, calle — keine Geschichte nötig. Wenn dein Draw den Preis *knapp verfehlt*, dann werden Implied Odds zum Tiebreaker. Und wenn dein Draw den Preis um Längen verfehlt, können Implied Odds ihn meist auch nicht retten.

---

## Wie man Implied Odds berechnet

**Um Implied Odds zu berechnen, ermittle, wie viel extra du gewinnen musst, wenn du triffst, mit: extra nötig = (dein Call ÷ deine Trefferquote) − (der aktuelle Pot + dein Call).** Wenn du realistisch so viel mehr auf späteren Streets gewinnen kannst, ist der Call profitabel.

Sauber geschrieben, mit ==g:x== als dem zusätzlichen Geld, das du gewinnen musst, wenn du komplettierst:

:::steps
Finde deine Trefferquote | Zähle Outs, wandle sie in einen Prozentwert um (die [Regel der 4 und 2](/de/blog/holdem-pot-odds) bringt dich nah dran)
Teile deinen Call durch diese Trefferquote | Das ist der Gesamtbetrag, den du gewinnen musst, um break-even zu sein
Ziehe den Pot ab, der schon da ist | Was übrig bleibt, ist das Extra, das du später gewinnen musst — das ist dein ==g:x==
Beurteile, ob es realistisch ist | Tiefe Stacks + ein auszahlfreudiger Gegner = ja. Kurze Stacks oder ein gefährliches Board = nein
:::

Die Formel in einer Zeile: ==b:x = (Call ÷ Trefferquote) − (aktueller Pot + Call).== Wenn das Extra-Geld, das du realistisch auf späteren Streets herausholst, *größer* ist als x, ist der Call profitabel, selbst wenn die sofortigen Pot Odds Fold sagen.

---

## Ein durchgerechnetes Beispiel: Flushdraw am Turn

Rechnen wir die Zahlen durch, damit die Formel aufhört, abstrakt zu sein.

Du hältst ==b:A♥ K♥== auf einem ==Q♥ 7♥ 2♣ 3♠== Board — den Nut-Flushdraw, 9 Outs, mit einer Karte, die noch kommt. Der Pot ist $100 und dein Gegner bettet $50 am Turn, also liegen ==$150 in der Mitte== und es kostet dich $50.

- **Zuerst die Pot Odds:** Du bekommst 150:50, also 3:1, du brauchst also **25%** Equity. Dein Flush trifft am River nur ==r:19,6%== der Zeit (9 Outs ÷ 46 ungesehene Karten). 19,6% ist weniger als 25%, der sofortige Preis sagt also ==r:Fold.==
- **Jetzt die Implied Odds:** x = (Call ÷ Trefferquote) − (Pot + Call) = (50 ÷ 0,196) − (150 + 50) = 255 − 200 = ==g:etwa $55.== Das ist das Extra, das du am River gewinnen musst, wenn dein Flush ankommt.

Die Frage lautet also nicht "sollte ich $50 callen?" Sie lautet: "**wenn ein Herz trifft, kann ich mindestens $55 mehr gewinnen?**" Gegen einen tiefen Gegner, der eine River-Bet mit Top Pair oder einem Set auszahlt, ist das leicht — du callst. Gegen jemanden mit nur noch $40 hinter sich, oder auf einem Board, wo ein viertes Herz seine Action tötet, kannst du nicht — also foldest du.

:::note
Derselbe $50-Call, gegensätzliche Entscheidungen — und die Karten haben sich nie geändert. Was sich änderte, ist, wie viel Geld noch zu gewinnen ist. Das sind Implied Odds in einem Satz.
:::

---

## Wie viel brauchst du? Implied Odds nach Draw-Typ

**Als Faustregel gilt: Je schwerer dein Draw zu treffen ist — und je offensichtlicher, wenn er ankommt — desto tiefer müssen die Stacks sein, bevor ein Call profitabel ist.** Unten ein praktischer Feldführer. Behandle die Stack-Vielfachen als ==r:Heuristiken, nicht als Gesetze== — sie tragen der Realität Rechnung, dass du nicht immer ausgezahlt wirst und nicht immer gewinnst, wenn du triffst.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Treffer % (1 Karte) | Nötiger Stack dahinter |
|:---|:---:|:---:|:---:|
| Flushdraw | 9 | 19,6% | ~8–10× den Call |
| Open-Ended-Straße | 8 | 17,4% | ~8–10× den Call |
| Set (Pocket Pair) | 2→Set | ~11,8% Flop | ~15–20× den Call |
| Gutshot-Straße | 4 | 8,7% | ~20×+ (selten lohnend) |

</div>

Zwei Kräfte bestimmen die Zahl. **Häufigkeit:** Ein Gutshot trifft halb so oft wie ein Flushdraw, er braucht also einen etwa doppelt so großen Payoff, um break-even zu sein. **Tarnung:** Ein verstecktes Set wird weit mehr ausgezahlt als ein offensichtlicher Four-Flush, weil dein Gegner dich nicht darauf setzen kann — deshalb tolerieren Sets ihre niedrige Trefferquote. Der Nut-Flushdraw ist aus demselben Grund weit mehr wert als ein kleiner: Er wird ausgezahlt *und* er verliert nicht, wenn er trifft.

---

## Set Mining: Kleine Pocket Pairs und Implied Odds

**Du floppst mit einem Pocket Pair nur 11,8% der Zeit ein Set (oder besser) — etwa 7,5:1 dagegen, oder 1 zu 8,5 — Set Mining profitiert also nur, wenn die Stacks dahinter all die Male decken, in denen du verfehlst.** Das ist der reinste Implied-Odds-Play im Poker: Du callst einen Raise mit einem kleinen Paar aus einem einzigen Grund — um einen Drilling zu floppen und jemanden zu stacken.

![Ein kleines Pocket Pair Fünfen neben einem tiefen Chipstack auf grünem Filz — das Setup für einen Set-Mining-Call, der sich nur bei tiefen Stacks auszahlt](/images/holdem-implied-odds-setmine.webp "Kleine Paare sind Gold mit tiefen Stacks dahinter — jetzt wenig zahlen, um viel zu gewinnen, wenn du ein Set floppst")

Weil du ==r:sieben von acht Malen verfehlst==, ist die Mathematik brutal, es sei denn, der Payoff ist riesig. Die gängige Richtlinie ist die **"5%-Regel": Calle nur zum Set-Minen, wenn die effektiven Stacks mindestens 20× deinen Call betragen** (dein Call ist ≤5% des Stacks).

Hier die ehrliche Aufschlüsselung, die die meisten Artikel überspringen:

- **Der reine Break-even liegt bei 7,5:1.** In einer Fantasie, in der du jedes Mal den *gesamten* Stack deines Gegners gewinnst, wenn du ein Set floppst, bräuchtest du nur etwa 7,5× dahinter.
- **Das echte Leben verlangt 15–20×.** Du bekommst nicht immer den ganzen Stack, du floppst manchmal ein Set und *verlierst trotzdem* (Set-over-Set, oder er füllt eine größere Hand), und die Position zählt. Der Extra-Puffer deckt diese Lecks.
- Also ==b:7,5:1 ist der theoretische Boden; 15–20× ist die praktische Regel.== Verwechsle die beiden nicht — die 7,5er-Zahl als deine Regel am echten Tisch zu nutzen, ist ein langsames Leck.

Die genaue Set-floppen-Mathematik und jede andere "Odds, X zu floppen"-Zahl leben in den [Drawing Odds](/de/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp"); die Kernaussage hier ist, dass kleine Paare Gold sind, wenn die Stacks tief sind, und Müll, wenn sie kurz sind — das Paar hat sich nicht geändert, die Implied Odds haben es.

---

## Reverse Implied Odds: Wenn dein Draw ankommt und trotzdem verliert

**Reverse Implied Odds sind die Chips, die du *verlierst*, wenn du deine Hand komplettierst, sie aber immer noch die zweitbeste ist.** Implied Odds sind das Geld, das du gewinnst, wenn du triffst; Reverse Implied Odds sind das Geld, das du blutest, wenn du triffst *und trotzdem verlierst*. Ignoriere sie, und du verliebst dich in Draws, die still und heimlich Fallen sind.

:::compare
Implied Odds | Reverse Implied Odds
Geld, das du auf späteren Streets ==g:gewinnst==, wenn du triffst | Geld, das du auf späteren Streets ==r:verlierst==, wenn du triffst, es aber zweitbeste ist
Belohnt Draws zu den Nuts | Bestraft schwache, dominierte Draws
Hebt den Wert eines Draws | Senkt den Wert eines Draws
:::

Drei klassische Reverse-Implied-Spots:

- **Der kleine Flush.** Du hältst ==b:7♦ 6♦== und das Board bringt ein drittes Karo. Du machst deinen Flush — und zahlst einen Stack an den Typen, der ==b:A♦== für den Nut-Flush hält. Deine "Gewinner"-Karte hat dich Geld gekostet.
- **Das dumme Ende einer Straße.** Du hältst ==b:6♦ 5♦== auf ==b:9♥ 8♣ 2♠==, und eine 7 am Turn macht deine 5-6-7-8-9. Aber es ist das *untere* Ende — jeder mit J-10 hat jetzt 7-8-9-10-==g:J==, eine höhere Straße, und genau die Karte, die du brauchtest, zahlt ihn aus.
- **Das dominierte Top Pair.** Du paarst deinen König mit einem schwachen Kicker und callst weiter — direkt in jemandes A-K.

Die Lektion: Ein Draw zu den ==g:Nuts== ist weit mehr wert als derselbe Draw zu einer zweitbesten Hand, obwohl sie identische Outs haben. Wenn dein Draw nicht zu den Nuts geht, schätze deine Implied Odds *nach unten* — einige deiner "Outs" zahlen in Wahrheit deinen Gegner aus.

---

## Wann du dich NICHT auf Implied Odds verlassen solltest (häufige Fehler)

**In dem Moment, in dem dein Gegner all-in ist, sind deine Implied Odds exakt null — es gibt kein Geld mehr zu gewinnen, also bist du zurück bei reinen Pot Odds.** Das ist das am meisten missbrauchte Konzept im Poker: "Ich hatte doch Implied Odds" ist die Ausrede, zu der Spieler nach einem Call greifen, der nie gerechtfertigt war.

Achte auf diese Lecks:

:::card
🚫 | Villain ist all-in | Keine zukünftigen Streets heißt kein zukünftiges Geld. Implied Odds = 0. Nutze nur Pot Odds
📉 | Kurze Stacks dahinter | Wenn nur ein halber Pot zu gewinnen bleibt, ist "ich werde am River ausgezahlt" eine Fantasie
🙅 | Ein "Nicht-Zahler"-Gegner | Ein Nit, der nur die Nuts bettet, zahlt deinen Flush nicht aus. Deine Implied Odds leben und sterben mit seiner Bereitschaft zu callen
🃏 | Ein gefährliches Board | Wenn die Karte, die deinen Draw komplettiert, auch die Action einfriert (vier zum Flush, gepaartes Board), zahlt dich niemand
🎣 | Stack-Off annehmen | "Es könnte ankommen und er könnte seinen Stack reinschieben" sind zwei Vermutungen, gestapelt auf einem Fold. Schätze konservativ
:::

Ich habe mehr Chips an eingebildete Implied Odds verloren als an jeden Bad Beat. Die Lösung ist eine einzige ehrliche Frage, bevor du einen Draw callst, der den Preis verfehlt: ==b:"Wenn ich treffe, wer zahlt mich tatsächlich aus, und wie viel?"== Wenn du das Geld nicht benennen kannst, ist es nicht da.

---

:::readnext[Weiterlesen]
/de/blog/holdem-pot-odds | Wie man Pot Odds berechnet | /images/holdem-pot-odds-hero.webp
/de/blog/holdem-drawing-odds | Odds, ein Set, einen Flush & mehr zu floppen | /images/holdem-drawing-odds-hero.webp
:::

## FAQ

**Q. Was sind Implied Odds beim Poker?**

A. Implied Odds sind die zusätzlichen Chips, die du auf späteren Streets zu gewinnen erwartest, wenn dein Draw komplettiert, addiert zu den Chips, die schon im Pot liegen. Sie erlauben dir, einige Draws profitabel zu callen, die die Pot Odds allein zum Fold verurteilen — solange die Stacks tief genug sind, um dich auszuzahlen, wenn du triffst.

**Q. Wie berechnet man Implied Odds?**

A. Nutze: extra nötig = (dein Call ÷ deine Trefferquote) − der aktuelle Pot. $50 mit einem Flushdraw zu callen, der 19,6% der Zeit trifft, bedeutet 50 ÷ 0,196 = $255, minus die $200, die schon im Spiel sind (der $150-Pot plus dein $50-Call) = etwa $55. Wenn du realistisch $55 mehr gewinnen kannst, wenn du triffst, ist der Call profitabel. Beachte, dass es immer eine Schätzung ist, da zukünftige Bets nicht garantiert sind.

**Q. Was ist der Unterschied zwischen Pot Odds und Implied Odds?**

A. Pot Odds zählen nur das Geld, das gerade jetzt im Pot liegt, und lassen sich exakt berechnen. Implied Odds addieren das Geld, das du auf späteren Streets zu gewinnen erwartest, was eine Schätzung ist. Pot Odds sagen dir, ob ein Call sich heute selbst bezahlt; Implied Odds sagen dir, ob er sich über die ganze Hand auszahlt.

**Q. Was sind Reverse Implied Odds?**

A. Reverse Implied Odds sind die Chips, die du verlierst, wenn du deinen Draw komplettierst, er aber immer noch zweitbeste ist — etwa einen kleinen Flush gegen einen höheren zu machen, oder das untere Ende einer Straße gegen ein größeres. Sie machen Non-Nut-Draws weniger wert, als ihre Outs vermuten lassen, du brauchst also einen besseren sofortigen Preis, um zu callen.

**Q. Was sind gute Implied Odds — wie viel brauchst du?**

A. Es kommt auf deinen Draw an. Flush- und Open-Ended-Straßen-Draws brauchen etwa 8–10× den Call an Stacks dahinter; Set Mining braucht etwa 15–20× (die "5%-Regel"). Je schwerer der Draw zu treffen ist, desto tiefer müssen die Stacks sein, um den Call zu rechtfertigen.

**Q. Gelten Implied Odds, wenn dein Gegner all-in ist?**

A. Nein. Wenn dein Gegner all-in ist, gibt es keine weiteren Setzrunden, also gibt es kein zusätzliches Geld zu gewinnen — deine Implied Odds sind null. In diesem Spot musst du dich allein auf die Pot Odds verlassen. Implied Odds gegen ein All-in anzunehmen, ist ein häufiger und teurer Fehler.

**Q. Wie funktionieren Implied Odds beim Set Mining?**

A. Du floppst mit einem Pocket Pair nur 11,8% der Zeit ein Set (etwa 7,5:1 dagegen), du brauchst also einen großen Payoff für die Male, in denen du triffst. Der theoretische Break-even liegt bei etwa 7,5× deinem Call an Stacks, aber die praktische Richtlinie ist 15–20× — der Extra-Puffer deckt die Male, in denen du verfehlst, keine Action bekommst oder mit einem Set verlierst.

**Q. Hast du Implied Odds mit einem Flushdraw?**

A. Meist ja, weil ein komplettierter Flush oft ausgezahlt wird — aber nur, wenn es ein starker Flush ist und die Stacks tief sind. Ein Nut-Flushdraw hat exzellente Implied Odds; ein kleiner Flushdraw trägt Reverse Implied Odds, da du ihn komplettieren und trotzdem gegen einen höheren Flush verlieren kannst.

**Q. Warum sind Implied Odds in tief gestackten Cashgames besser?**

A. Bei Implied Odds geht es nur um das Geld, das noch zu gewinnen ist, und tiefe Stacks bedeuten mehr davon. In einem tiefen Cashgame kann ein kleines Paar oder ein Suited Connector einen vollen Stack gewinnen, wenn es trifft, spekulative Hände steigen also im Wert. In kurz gestackten oder Turnier-Spots gibt es weniger zu gewinnen, dieselben Hände verlieren also an Wert.

---

## Die 3 Dinge, die du dir merken solltest

1. **Die Formel:** extra nötig = (Call ÷ Trefferquote) − (aktueller Pot + Call). Wenn du realistisch mehr als das später gewinnen kannst, ist der Call gut, selbst wenn die Pot Odds Fold sagen.
2. **Der Realitätscheck:** Implied Odds sind eine Schätzung, die von tiefen Stacks und einem zahlenden Gegner lebt. Gegen ein All-in oder einen kurzen Stack sind sie null — greif zurück auf die Pot Odds.
3. **Der dunkle Spiegel:** Reverse Implied Odds bestrafen Non-Nut-Draws. Ein Draw zu den Nuts ist weit mehr wert als derselbe Draw zur zweitbesten Hand.

Mach das richtig, und du hörst auf, Chips für hoffnungsvolle Calls zu verbrennen, während du weiterhin die profitablen machst, die sich sonst niemand traut. Von hier aus sicher dir die rohen Zahlen mit der [Poker-Odds- und Wahrscheinlichkeitstabelle](/de/blog/holdem-probability), oder sieh genau, wie oft jeder Draw ankommt, in den [Drawing Odds](/de/blog/holdem-drawing-odds).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathematik</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Odds- & Wahrscheinlichkeitstabelle</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Jede Hand, jeder Flop, jeder Draw — die Zahlen hinter dem Call</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathematik</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie man Pot Odds berechnet</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Der sofortige Preis — wo Implied Odds beginnen</div>
  </a>
  <a href="/de/blog/holdem-drawing-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathematik</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Drawing Odds & Odds, X zu floppen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wie oft ein Set, Flush oder eine Straße tatsächlich ankommt</div>
  </a>
</div>
`.trim(),
};

export default POST;
