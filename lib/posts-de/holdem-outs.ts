import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Outs zählen im Poker – die Fähigkeit hinter jedem Odds-Call",
  seoTitle: "Wie viele Karten retten dich wirklich? – Outs Poker berechnen",
  desc: "Outs zählen bringt dir keiner bei. Zähle Outs im Poker schnell – Draw-für-Draw-Tabelle, Outs-zu-Odds-Umrechnung und die dirty Outs, die dich Geld kosten.",
  tldr: "Ein Out ist jede Karte im Deck, die deine Hand zu einem wahrscheinlichen Gewinner verbessert. Zähle sie, dann rechne um: multipliziere die Outs am Flop mit 4 oder am Turn mit 2 für deinen groben Prozentwert. Ein Flushdraw sind 9 Outs ≈ 36% bis zum River.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-08-11",
  masterUpdated: "2026-08-12",
  keepImagesInBody: true,
  readTime: "11 Min.",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infografik zum Zählen von Outs – A♥ K♥ gegen einen Q♠ J♦ 9♥ Flop, bei dem jede Zehn die Nut-Straße vervollständigt",
  tags: ["outs", "outs poker berechnen", "poker outs tabelle", "poker outs faustregel", "flushdraw outs", "straßendraw outs", "outs zu odds", "dirty outs"],
  content: `
In meinem ersten Jahr am Tisch habe ich „meine Draws gespielt“, ohne sie je zu zählen. Ein Flushdraw und ein Gutshot fühlten sich ungefähr gleich an – beides waren „Karten, die kommen könnten“ – also callte ich bei beiden gleich und wunderte mich, warum ich ständig verlor. Die Lösung war kein Strategie-Kurs. Es war eine Fünf-Minuten-Gewohnheit: ==stoppen und tatsächlich die Karten zählen, die mich retten.==

Diese Gewohnheit heißt **Outs** zählen – [die echte Antwort des Pokers auf „Kartenzählen“](/de/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") – und es ist die eine Fähigkeit, die jeder Odds-Entscheidung im Poker zugrunde liegt. Bevor du fragen kannst „ist dieser Call profitabel?“, musst du beantworten „wie viele Karten machen mir die beste Hand?“ Dieser Guide ist die Zähl-Hälfte – die [Poker-Odds-und-Wahrscheinlichkeitstabelle](/de/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") ist die Referenz dahinter, und [Pot Odds](/de/blog/holdem-pot-odds) ist das, was du mit der Zahl machst, sobald du sie hast.

---

### Outs auf einen Blick

:::stripe
9 | Outs in einem Flushdraw
8 | Outs in einem beidseitig offenen Straßendraw
×4 / ×2 | Multipliziere Outs am Flop / Turn für deinen %
:::

---

## Was sind Outs beim Pokern?

**Ein Out ist jede Karte, die noch im Deck steckt und deine Hand in einen wahrscheinlichen Gewinner verwandelt.** Wenn du einen Flushdraw hältst, ist jede verbleibende Karte deiner Farbe ein Out – fange eine und du hast einen Flush. Ein Flushdraw sind neun Outs, ein beidseitig offener Straßendraw acht. Diese Zahl ist der Ausgangspunkt jeder Odds-Entscheidung am Tisch.

In dem Wort „wahrscheinlich“ steckt der ganze Trick. Ein echtes Out muss die Hand tatsächlich *gewinnen*, nicht bloß deine Karten verbessern. Deine Zehn zu paaren, wenn schon ein Flush auf dem Board liegt, ist kein Out – du hast dich verbessert, verlierst aber weiterhin. Outs zählen zu lernen heißt in Wahrheit, die Karten zu zählen, die gewinnen, und die zu ignorieren, die nur hilfreich *aussehen*.

Alles Nachgelagerte – deine Equity, deine [Pot Odds](/de/blog/holdem-pot-odds), dein Call-oder-Fold – startet von dieser einen Zahl. Zähle die Outs falsch und jede Berechnung danach ist ebenfalls falsch. Und sobald du die Zahl kennst, sagen dir die [Drawing Odds](/de/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") genau, wie oft jeder Draw tatsächlich ankommt.

---

## Wie zählst du deine Outs? Schritt für Schritt

Zähle nur die Karten, die dich zur **besten** Hand machen – nicht die, die dich bloß verbessern. Das ist der ganze Unterschied zwischen einer Out-Zahl, die stimmt, und einer, die dich in verlierende Calls hineinredet. Am Rechnen scheitert dabei fast niemand; gezählt wird falsch.

![Ein Spieler hält Pik-Ass und Pik-König und studiert einen niedrigen Drei-Karten-Flop auf grünem Filz, während er vor dem Handeln Overcard-Outs zählt](/images/holdem-outs-counting.webp "A-K auf einem niedrigen Flop ist ein Musterbeispiel zum Zählen – sechs Overcard-Outs, plus die Backdoors")

Outs zählen ist eine Drei-Schritt-Routine, die du bei jedem Draw durchgehst, bis sie automatisch läuft:

:::steps
Benenne deinen Draw | Welche Hand jagst du? Flush, Straße, ein größeres Paar, ein Set – sei konkret beim Ziel
Zähle die Karten, die ihn vervollständigen | Es gibt 13 von jeder Farbe und 4 von jedem Rang. Ziehe die ab, die du bereits sehen kannst (deine Karten + das Board)
Streiche die falschen Outs | Streiche jedes „Out“, das deine Hand vervollständigt, aber trotzdem verliert – eine Flushkarte, die das Board paart, eine Straße, die jemandem eine höhere schenkt
:::

Nimm einen Flushdraw: 13 Karten deiner Farbe existieren, du kannst **vier** davon sehen (zwei in deiner Hand, zwei auf dem Board), also ==g:13 − 4 = 9 Outs==. Diese Subtraktion – die zu zählen, die du *nicht* fangen kannst, weil du sie schon hältst – ist die Stelle, an der Anfänger ausrutschen.

Das Zählen nutzt nur Karten, die du sehen kannst. Du ziehst die unbekannten Karten deines Gegners nicht ab; du behandelst jede ungesehene Karte als noch live. Deshalb gelten die Standard-Out-Zahlen unten, egal was irgendjemand sonst hält.

---

## Poker-Outs-Tabelle: Jeder gängige Draw

![Eine achterhohe Straße in Reihenfolge auf grünem Filz ausgelegt, zeigt die Kartenfolge, die ein beidseitig offener Draw jagt](/images/holdem-reading-straight-example.webp "Ein beidseitig offener Straßendraw füllt von beiden Enden – acht Outs, der zweitgrößte gängige Draw")

Präge dir diese ein und du erkennst deine Out-Zahl auf einen Blick. Das ist die Tabelle, die sich jeder erfolgreiche Spieler eingeprägt hat:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Dein Draw | Outs | Warum |
|:---|:---:|:---|
| Flush + beidseitig offene Straße | 15 | Das Monster – zwei Draws auf einmal |
| Flush + Gutshot | 12 | 9 Flush + 4 Gutshot − 1 geteilte Karte |
| Flushdraw | 9 | 13 einer Farbe − 4 sichtbare |
| Beidseitig offener Straßendraw | 8 | Vier Karten an jedem Ende |
| Zwei Overcards | 6 | Drei von jedem Rang zum Paaren |
| Ein Paar → Zwei Paare oder Drilling | 5 | 3 zum Paaren deines Kickers + 2 zum Drilling |
| Gutshot (Inside Straight) | 4 | Nur ein Rang füllt die Lücke |
| Eine Overcard | 3 | Drei Karten für Top Pair |
| Pocket Pair → Set | 2 | Die letzten zwei deines Rangs |

</div>

Die zwei Combo-Draws ganz oben sind die Stelle, an der Spieler die Rechnung verhauen, deshalb bekommen sie unten ihren eigenen Abschnitt. Alles andere ist reine Subtraktion: zähle die Ränge oder Farben, die deine Hand fertigstellen, ziehe ab, was du sehen kannst.

---

## Wie viel Prozent ist ein Draw wert? Outs in Odds umrechnen

Neun Outs sind bis zum River **35,0%** wert, acht Outs 31,5%, vier Outs 16,5%. Zählst du nur die nächste Karte, bleibt gut die Hälfte davon: neun Outs werden zu 19,1% für den Turn. Welche der beiden Spalten gilt, hängt allein davon ab, ob nach diesem Call noch gesetzt wird.

Hier ist die Master-Tabelle – die Odds, bis zum River zu treffen, plus die Ein-Karten-Odds für die nächste Karte nach dem Flop:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Nur Turn (1 Karte, vom Flop) | Bis zum River (2 Karten) | Odds dagegen (bis River) |
|:---|:---:|:---:|:---:|
| 2 | 4,3% | 8,4% | 11:1 |
| 4 | 8,5% | 16,5% | 5:1 |
| 6 | 12,8% | 24,1% | 3,1:1 |
| 8 | 17,0% | 31,5% | 2,2:1 |
| 9 | 19,1% | 35,0% | 1,9:1 |
| 12 | 25,5% | 45,0% | 1,2:1 |
| 15 | 31,9% | 54,1% | 0,85:1 |

</div>

Zwei Zahlen zählen für jeden Draw. **„Bis zum River“** rechnet beide verbleibenden Karten und gilt, wenn du am Flop all-in bist und nichts mehr zu setzen hast. **„Nur Turn“** rechnet nur die nächste Karte – nutze das, sobald noch weitere Setzrunden kommen, denn dir ist nur garantiert, jeweils eine Karte zu sehen. Anfänger zitieren die fette „bis zum River“-Zahl, während sie eine Turn-Bet vor sich haben, reden sich in einen Call hinein und zahlen dafür.

Beachte das 15-Outs-Monster: mit zwei kommenden Karten ist es tatsächlich ein **Favorit** (54,1%), der seltene Draw, mit dem du am Flop happy all-in gehen kannst.

---

## Outs im Kopf umrechnen: die Faustregel

Die **Faustregel** (auch „Regel der 2 und 4“) macht aus deiner Out-Zahl in einer Sekunde einen Prozentwert: am Flop Outs × **4**, am Turn Outs × **2**. Bis acht Outs liegt sie weniger als einen Punkt daneben, darüber überschätzt sie – und genau das ist der Grund, warum große Draws sich am Tisch besser anfühlen, als sie sind.

Du kannst diese Tabelle nicht mit an den Tisch nehmen, also nutze die Abkürzung, auf die sich jeder Spieler verlässt:

- **Am Flop (zwei kommende Karten):** Outs ×4 ≈ dein % bis zum River zu treffen.
- **Am Turn (eine kommende Karte):** Outs ×2 ≈ dein % am River zu treffen.

Ein Flushdraw sind 9 Outs. Am Flop: 9 × 4 = **36%** (wahrer Wert 35,0% – einen Punkt daneben, also brauchbar). Am Turn: 9 × 2 = **18%** (wahr 19,6% – nah genug, um zu handeln).

:::tip[Die ×4-Abkürzung setzt still voraus, dass du *beide* Karten ohne weiteres Setzen siehst – nur wahr, wenn du schon all-in bist. Liegt eine Bet vor dir, nutze die ×2-Zahl (eine Karte) für die Street, auf der du wirklich bist.]:::

An einer Stelle lügt die Regel: **hohe Out-Zahlen am Flop.** Weil ×4 die kleine Chance, auf *beiden* Streets zu treffen, doppelt zählt, schießt sie über, sobald du über ~8 Outs bist.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Regel sagt (×4) | Wahr bis River | Abweichung |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31,5% | +0,5% |
| 9 | 36% | 35,0% | +1% |
| 12 | 48% | 45,0% | +3% |
| 15 | 60% | 54,1% | +6% |

</div>

Die saubere Korrektur für große Draws: bei **mehr als 8 Outs am Flop** multipliziere mit 4 und ziehe dann *(Outs − 8)* ab. Für 15 Outs: (15 × 4) − 7 = **53%**, fast exakt richtig. Für Alltags-Draws von 8 Outs oder weniger reichen schlichtes ×4 und ×2 völlig aus. Die vollständigen Herleitungen findest du in der [Wahrscheinlichkeitstabelle](/de/blog/holdem-probability).

---

## Warum sind Flushdraw plus Straßendraw nicht 17 Outs?

Weil zwei Karten Doppeldienst leisten. Ein Flushdraw hat neun Outs, ein beidseitig offener Straßendraw acht – aber zwei der Straßenkarten sind selbst von deiner Farbe und stecken schon in den neun. Gezählt wird jede Karte nur einmal: **15 Outs**, nicht 17. Bei Flush plus Gutshot ist es dieselbe Rechnung mit einer geteilten Karte: 12 statt 13.

Die großen Draws bringen Leute ins Straucheln, weil eine zu hohe Zahl hier am teuersten ist: Genau in diesen Spots geht der ganze Stack rein.

Sagen wir, du hältst ==b:J♠ 10♠== auf einem ==9♠ 8♣ 2♠== Flop. Du hast zwei gestapelte Draws: einen Flushdraw (Pik) und einen beidseitig offenen Straßendraw (jede Q oder 7 macht die Straße). Addiere sie naiv und du bekommst 9 + 8 = 17. Aber die **Q♠ und 7♠** vervollständigen jeweils *sowohl* den Flush *als auch* die Straße – sie stecken schon in den 9 Flush-Outs. Zähle sie einmal:

- Flush-Outs: **9** (jedes Pik)
- Straßen-Outs, die kein Pik sind: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Gesamt: **15 Outs**, nicht 17

Dieselbe Logik bei einem **Flush + Gutshot**: 9 Flush-Outs + 4 Gutshot-Karten, aber eine dieser vier ist deine Farbe → 9 + 3 = **12**. Wann immer zwei Draws sich eine Karte teilen, ziehe die Überschneidung ab. Das ist die mit Abstand häufigste Art, wie Spieler überzählen, und der Grund, warum die Combo-Zeilen in der Tabelle „eins zu wenig“ gegenüber der Summe aussehen.

---

## Was sind dirty Outs – und wie erkennst du sie?

Ein **dirty Out** ist eine Karte, die deine Hand vervollständigt und dich trotzdem verlieren lässt: der Flush, der nicht der Nut-Flush ist; die Flushkarte auf einem bereits gepaarten Board; die Overcard gegen einen Gegner, dessen Action nach einem Set schreit. Erkennst du sie am Board und an der Aggression – und danach zählst du deine Outs nach unten, nicht nach oben.

![Infografik eines gepaarten 10♠ 8♥ 4♠ 4♣ 6♦ Boards, das saubere Outs von dirty Outs trennt](/images/holdem-outs-dirty-outs.webp "Auf einem gepaarten Board sind manche deiner Outs dirty – der Flush zu treffen kann trotzdem ein Full House bezahlen")

Das ist der Abschnitt, den die meisten Guides überspringen, und der, der tatsächlich Geld spart. Ein dirty Out (ein „unsauberes“ Out) zum vollen Wert zu zählen überschätzt deine Equity – erfolgreiche Spieler zählen erst die rohen Outs und *rabattieren* dann, bevor sie zur Faustregel greifen.

Drei Situationen, für die du dein Auge trainierst:

:::card
♠ | Der Nicht-Nut-Flush | Hältst du 8♠7♠ auf K♠9♠2♣, hast du 9 Pik-„Outs“ – aber wenn ein Pik kommt und ein Gegner ein höheres Pik hält, machst du einen Flush und verlierst trotzdem. Rabattiere deine Outs, wenn du nicht auf den Nut-Flush drawst
🂮 | Das gepaarte Board | Ein Flushdraw auf einem Board wie J♥8♥8♣ sieht aus wie 9 saubere Outs, aber das Board ist schon gepaart – ein fertiges Full House könnte lauern, also kommen manche deiner Flushes an und sind trotzdem wertlos
🃁 | Overcards gegen Stärke | Zwei Overcards (A-K auf Q-8-3) zählen auf dem Papier als 6 Outs, aber wenn ein großer Raise nach einem Set oder Zwei Paaren schreit, ist dein Ass zu paaren oft nicht gut – zähle 3, vielleicht 4, nicht 6
:::

Du kennst den exakten Rabatt selten, und das ist okay. Die Richtung stimmt aber immer: wenn das Board oder die Action dir sagt, dass ein Out vielleicht nicht gewinnt, kürze die Zahl *nach unten*, bevor du umrechnest. Ein Spieler, der 9 Outs auf einem gepaarten Board zählt und eine Pot-Size-Bet callt, zahlt vollen Preis für einen Draw, der still nur sechs wert ist. Zu lesen, welche Outs sauber sind, ist eine Board-Textur-Fähigkeit – baue sie mit [das Board lesen](/de/blog/holdem-reading-the-board) auf.

---

:::readnext[Weiterlesen]
/de/blog/holdem-pot-odds | Pot Odds berechnen | /images/holdem-pot-odds-hero.webp
/de/blog/holdem-probability | Poker-Odds- und Wahrscheinlichkeitstabelle | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Wie viele Outs braucht man, um einen Call zu rechtfertigen?**

A. Das hängt am Preis, nicht an einer festen Zahl. Die Zwei-Karten-Zahl darfst du nur ansetzen, wenn danach keine Bet mehr auf dich zukommt – etwa weil dich der Call am Flop all-in setzt: Dann reichen gegen eine Half-Pot-Bet (25% nötig) schon sieben Outs (27,8%). Musst du damit rechnen, am Turn noch einmal zu zahlen, rechnest du nur für die nächste Karte und brauchst zwölf Outs (25,5%). Genau deshalb zählst du erst die Outs und schaust dann auf die [Pot Odds](/de/blog/holdem-pot-odds).

**Q. Zählen Backdoor-Draws als Outs?**

A. Nur als Bruchteil. Drei Karten einer Farbe am Flop – ein Backdoor-Flushdraw – kommen in 4,2% der Fälle an, das entspricht etwa einem einzigen Out. Rechne sie als kleinen Bonus mit, nie als vollwertigen Draw.

**Q. Wie viele Outs hat ein Flushdraw?**

A. Neun. Es gibt 13 Karten jeder Farbe; mit zwei in deiner Hand und zwei auf dem Board siehst du vier, was 9 ungesehene Karten übrig lässt, die deinen Flush vervollständigen. Das sind vom Flop aus grob 35%, bis zum River zu treffen.

**Q. Wie viele Outs hat ein beidseitig offener Straßendraw?**

A. Acht – vier Karten an jedem Ende füllen die Straße. Ein Gutshot- (Inside-) Straßendraw hat nur 4 Outs, weil nur ein Rang die Lücke füllt. Ein Double Gutshot hat ebenfalls 8, genauso wie ein beidseitig offener.

**Q. Ändern sich meine Outs, wenn mehrere Gegner im Pot sind?**

A. Die Zahl bleibt gleich, ihr Wert nicht. Je mehr Gegner mitgehen, desto größer die Chance, dass eines deiner Outs jemandem eine bessere Hand gibt – dein kleiner Flush trifft dann auf den höheren. Multiway zählst du dieselben Outs, aber du rabattierst stärker und willst zu den Nuts drawen.

**Q. Wie viele Outs hat ein Gutshot?**

A. Vier – nur ein einziger Rang füllt die Lücke. Das sind 8,5% auf die nächste Karte und 16,5% bis zum River. Ein Double Gutshot (zwei Lücken, die beide zur Straße führen) hat dagegen acht Outs und ist so stark wie ein beidseitig offener Draw.

**Q. Zählst du die Karten deines Gegners beim Outs zählen mit?**

A. Nein. Du ziehst nur Karten ab, die du tatsächlich sehen kannst – deine Hole Cards und das Gemeinschaftsboard. Jede andere ungesehene Karte wird als live behandelt, weshalb die Standard-Out-Zahlen (9 für einen Flush, 8 für einen beidseitig offenen) halten, egal was deine Gegner halten.

---

## Die 3 Dinge zum Merken

1. **Zähle, was gewinnt, nicht was verbessert.** Ein Out muss die *beste* Hand machen, nicht bloß eine bessere. Ziehe nur die Karten ab, die du sehen kannst.
2. **Rechne mit 4 und 2 um.** Outs × 4 am Flop, × 2 am Turn. Trimme die Schätzung für große Draws (über 8 Outs), indem du *(Outs − 8)* abziehst.
3. **Rabattiere die dirty Outs.** Nicht-Nut-Flushes, gepaarte Boards und Overcards gegen Stärke schrumpfen alle deine echte Out-Zahl. Im Zweifel zähle weniger.

Stimmt die Zahl, fügt sich der Rest der Poker-Mathematik von selbst zusammen. Nimm deine Out-Zahl direkt mit in [Pot Odds berechnen](/de/blog/holdem-pot-odds), um zu sehen, ob der Preis stimmt, oder geh zurück zur vollständigen [Poker-Odds- und Wahrscheinlichkeitstabelle](/de/blog/holdem-probability) für die exakte Zahl hinter jedem Draw.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pot Odds berechnen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Verwandle deine Out-Zahl in ein Call-oder-Fold</div>
  </a>
  <a href="/de/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Odds- und Wahrscheinlichkeitstabelle</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die volle Referenz hinter jedem Draw</div>
  </a>
  <a href="/de/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board lesen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Das Board lesen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Erkenne jeden Draw, damit du saubere Outs zählst</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starthände</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthand-Tabelle nach Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Steig in Pots mit Händen ein, die sich zum Drawen lohnen</div>
  </a>
</div>
`.trim(),
};

export default POST;
