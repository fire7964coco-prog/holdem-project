import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Equity im Poker erklärt — Win%, Fold Equity und Realization",
  seoTitle: "Dein Win% ist nicht dein Gewinn — Equity berechnen Poker",
  desc: "Die Equity ist dein Anteil am Pot — den du selten ganz behältst. Warum 40% Equity nicht 40% Gewinne sind, plus Fold Equity und Realization erklärt.",
  tldr: "Die Equity ist dein Anteil am Pot — der Prozentsatz, zu dem deine Hand gewinnt, wenn alle Karten ausgeteilt werden. Du callst, wenn deine Equity die Pot Odds schlägt, aber Position und Setzen bedeuten, dass du selten deine volle Equity behältst — und die Fold Equity lässt dich Pots gewinnen, selbst wenn deine Hand hinten liegt.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Zwei Spieler all-in mit offenen Karten auf grünem Filz, ein Stapel Chips in der Mitte — der Moment, in dem die Equity jeder Hand zu einem echten Anteil am Pot wird",
  tags: ["equity poker", "was ist equity poker", "fold equity", "equity realization", "equity vs pot odds", "all in equity", "equity rechner poker", "equity berechnen poker"],
  content: `
Ein Jahr lang dachte ich, "Equity" sei nur ein schickes Wort für "wie wahrscheinlich ich gewinne". Dann verlor ich an einem Abend drei große Pots, in denen ich als Favorit reingegangen war, und ein besserer Spieler sagte mir den Satz, der das ganze Spiel neu einordnete: ==deine Equity ist das, was dir *zusteht*, nicht das, was du *einsammelst*.== Du kannst zu 40% eine Hand gewinnen und fast nichts davon realisieren — oder hinten liegen und trotzdem Geld drucken. Die Lücke dazwischen zu verstehen macht den größten Teil dessen aus, was gewinnende Spieler von hoffnungsvollen trennt.

==Die Equity ist die eine Zahl, die jedes andere Stück Poker-Mathe zusammenbindet — Outs, Pot Odds, Position und Aggression lösen sich alle in eine Frage auf: welcher Anteil dieses Pots gehört wirklich mir?== Dieser Guide erklärt, was die Equity ist, wie du sie schätzt, und die drei Dinge, die Anfängern niemand sagt: warum du nicht alles davon behältst, wie ein foldender Gegner dir extra beschert, und warum deine große Hand gegen eine Menge schrumpft.

Die rohen Win-Prozente hinter jeder Hand kommen aus der [Poker-Odds- und Wahrscheinlichkeitstabelle](/de/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); dieser Guide zeigt, wie du diese Prozente in Entscheidungen am Tisch verwandelst.

---

### Equity auf einen Blick

:::stripe
Pot × Win% | Was deine Hand gerade wert ist
roh × Realization% | Was du tatsächlich einsammelst
Bet ÷ (Pot + Bet) | Der Fold%, den ein reiner Bluff braucht
:::

---

## Was ist Equity im Poker?

**Die Equity ist dein Anteil am Pot — der Prozentsatz, zu dem deine Hand gewinnt, wenn die Hand bis zum Showdown durchgespielt wird.** Wenn der Pot $100 beträgt und du zu 60% gewinnst, ist deine Hand gerade ==$60 wert==, auch wenn die Chips noch nicht geschoben wurden.

Sieh es als dein Stück vom Kuchen. Jede noch lebende Hand hat ein Stück; die Stücke ergeben zusammen immer 100%. Wenn du heads-up zu 70% einen $200-Pot gewinnst, gehören ==g:$140 davon "dir"== auf lange Sicht — du wirst *diesen* Pot nicht zu 70% gewinnen und den Rest verlieren, aber über tausend identische Spots ist das der Anteil, den du einsammelst.

Das ist der ganze Grund, warum die Equity zählt: sie verwandelt "liege ich vorne?" in "wie viel dieses Pots besitze ich?" — und das ist die Zahl, die du gegen den Preis eines Calls vergleichst.

---

## Wie du deine Equity schnell schätzt

**Beim Draw multiplizierst du deine Outs mit 4 auf dem Flop oder mit 2 auf dem Turn; preflop merkst du dir die Handvoll Matchups, die immer wieder vorkommen.** Am Tisch berechnest du fast nie die exakte Equity — du schätzt, und diese zwei Abkürzungen decken 90% der Spots ab.

**Draws (die Regel der 4 und 2):** zähle deine [Outs](/de/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp"), dann multipliziere. Ein Flushdraw hat 9 Outs → ==9 × 4 = 36%== auf dem Flop (echter Wert 35%). Die exakten Zahlen für jeden Draw findest du in den [Draw-Odds](/de/blog/holdem-drawing-odds); hier die Schnellreferenz:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Equity (2 Karten) |
|:---|:---:|:---:|
| Flush + beidseitige Straße | 15 | 54,1% |
| Flushdraw | 9 | 35,0% |
| Beidseitige Straße | 8 | 31,5% |
| Gutshot-Straße | 4 | 16,5% |

</div>

**Preflop-Matchups (diese merken):** all-in vor dem Flop wiederholen sich dieselben Kämpfe. Lerne diese und du kennst sofort deine Equity in den meisten Preflop-All-ins.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Matchup | Equity | Typ |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | Overpair dominiert |
| QQ vs AK | ~57% / ~43% | Paar vorn im "Race" |
| 22 vs AK | ~52% / ~48% | Der echte Coinflip |
| AK vs AQ | ~73% / ~23% | Domination (Rest chopt) |
| 88 vs A7 | ~70% / ~30% | Paar vs eine Overcard |

</div>

Zwei Dinge bringen Leute hier durcheinander. Ein Paar gegen zwei Overcards (QQ vs AK) ist ==r:kein 50/50== — das Paar ist ein moderater Favorit, etwa 57/43 offsuit (eine Spur enger, ~54/46, wenn AK suited ist). Und der Begriff "Coinflip" passt wirklich nur auf ein niedriges Paar gegen zwei größere Karten (22 vs AK), wo es echt eng ist.

---

## Equity vs Pot Odds: Die eine Regel, die jeden Call entscheidet

**Calle, wenn deine Equity größer ist als deine Pot Odds — dieser eine Vergleich entscheidet fast jeden Call im Poker.** Die [Pot Odds](/de/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") sagen dir die Equity, die du *brauchst*, um Break-even zu sein; die Equity sagt dir, was du *hast*. Wenn du mehr hast, als du brauchst, macht der Call Geld.

Gegen eine Half-Pot-Bet verlangen deine Pot Odds ==25%== zum Callen. Ein Flushdraw mit zwei Karten to come hat ~35% Equity — 35 schlägt 25, also ist es ein profitabler Call. Das ist die ganze Entscheidung, ohne Rätselraten.

Aber hier der Haken, den fast jeder Guide auslässt: **"deine Equity ist gleich dein Pot-Anteil" stimmt nur, wenn nicht mehr gesetzt wird.** In dem Moment, in dem auf späteren Streets mehr Geld reingehen kann, übersetzt sich ein rohes 35% nicht automatisch in 35% des finalen Pots — du wirst vielleicht von deinem Draw geblasen oder zahlst ab, wenn du Second-best triffst. Genau in dieser Lücke kommen die [Implied Odds](/de/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (Geld, das du später gewinnst) und die Equity Realization (unten) ins Spiel. Die Equity ist, wo die Mathematik *startet*, nicht, wo sie endet.

---

## Fold Equity: Wie du Pots gewinnst, wenn deine Hand hinten liegt

**Die Fold Equity ist die extra Equity, die du aus der Chance gewinnst, dass dein Gegner foldet — sie ist der Grund, warum eine Bet einen Pot gewinnen kann, den deine Hand allein verlieren würde.** Wenn du bettest, hast du zwei Wege zu gewinnen: dein Gegner foldet jetzt, oder er callt und du gewinnst im Showdown. Checken gibt dir nur den zweiten.

:::compare
Betten (Aggression) | Checken oder callen (passiv)
Er foldet jetzt → du gewinnst den Pot | Keine Fold Equity — niemand foldet auf einen Check
Er callt und du triffst → du gewinnst | Du triffst → du gewinnst
==g:Zwei Wege zu gewinnen== | ==r:Ein Weg zu gewinnen==
:::

Für einen ==reinen Bluff== ohne Chance auf Verbesserung ist der Break-even einfach: du brauchst deinen Gegner, dass er oft genug foldet, um das Risiko zu decken. Wenn du $50 in einen $100-Pot bettest, ist deine Break-even-Fold-Rate ==Bet ÷ (Pot + Bet) = 50 ÷ 150 = 33%==. Foldet er mehr als ein Drittel der Zeit, profitiert das Betten — sogar mit der schlechtesten Hand am Tisch.

Füge jetzt einen Draw hinzu, und es wird viel besser. Hier das ganze Bild als ==g:Semi-Bluff==: der Pot ist $100, du bettest $50 mit einem Flushdraw, dein Gegner foldet 40% der Zeit, und wenn er callt, hast du immer noch 35% Equity, um bis zum River zu treffen.

:::note
EV = (Fold% × Pot) + (Call% × [Equity × (Pot + Bet) − (Miss% × Bet)])
EV = (0,40 × $100) + (0,60 × [0,35 × $150 − 0,65 × $50])
EV = $40 + (0,60 × [$52,50 − $32,50]) = $40 + $12 = ==g:+$52==
:::

Diesen Flushdraw zu betten ist ==+$52== wert gegenüber Check-Folden — und der Großteil dieses Werts kommt aus den Malen, in denen er foldet, nicht aus denen, in denen du triffst. Das ist die Fold Equity: der Grund, warum Aggression Passivität schlägt, und warum ein Draw als Bet weit mehr wert ist als als Call.

---

## Equity Realization: Warum 40% Equity nicht heißt, dass du 40% gewinnst

**Die Equity Realization ist, wie viel deiner rohen Equity du tatsächlich einsammelst — und es ist meist weniger als 100%, weil Position und Setzen dich kosten.** Deine "40% zu gewinnen" nimmt an, dass du immer den Showdown erreichst; in der Realität wirst du von Draws gebettet, zum Folden gezwungen und out of position herumgeschubst. Was du behältst, ist:

==b:Realisierte Equity = rohe Equity × Realization%==

Eine Hand mit 40% roher Equity, die nur 75% davon realisiert, ist wirklich ==0,75 × 40% = 30%== wert. Deshalb kannst du "vor der Range deines Gegners" liegen und trotzdem Geld verlieren — du kommst nie dazu, das volle Stück einzukassieren.

Was deine Realization hoch oder runter bewegt:

:::card
🪑 | Position | In Position realisierst du *mehr* als deine rohe Equity (du siehst Freikarten, kontrollierst den Pot); out of position realisierst du weniger. Das ist der größte Faktor
🎯 | Spielbarkeit | Suited Connectors und Hände, die Draws floppen, realisieren gut; offsuit Clunker realisieren schlecht, selbst mit ordentlicher roher Equity
📚 | Stacktiefe & Skill | Tiefere Stacks und stärkere Gegner machen marginale Equity schwerer zu realisieren
:::

Das ist die einzelne wichtigste Idee, die die meisten Anfänger-Guides weglassen, und sie ist der Grund, warum dieselbe Hand sich je nach Position völlig anders spielt. Die rohe Equity ist die Decke; die Realization ist, was du nach Hause trägst.

---

## All-in-Equity: Wenn nur die rohe Equity zählt

**Wenn du all-in bist, gibt es keine weiteren Entscheidungen mehr — also realisierst du 100% deiner Equity, und die rohe Equity wird zum letzten Wort.** Jede Komplikation von oben (Position, Folden, gebettet werden) verschwindet, weil kein weiteres Setzen mehr passieren kann. Was auch immer dein Win-Prozent ist, das ist genau der Anteil am Pot, den du über die Zeit einsammelst.

Deshalb zählen Preflop-All-in-Equities so viel: AA all-in gegen KK bankt seine vollen ==82%== — keine Realization-Steuer, keine Fold Equity, nur die rohe Zahl, die sich ausspielt. Es ist auch der Grund, warum ein "Coinflip" (22 vs AK bei ~52/48) all-in ein echtes Kopf-an-Kopf ist, obwohl dieselben zwei Hände postflop je nach Board und wer die Position hat wild auseinanderlaufen würden.

All-in ist der eine Spot im Poker, wo der Kuchen genau so geschnitten wird, wie die Mathematik es sagt — was zugleich sein Reiz und seine Gefahr ist.

---

## Multiway-Equity: Warum deine große Hand gegen eine Menge schrumpft

**Deine Equity fällt in Multiway-Pots schnell, weil derselbe 100%-Kuchen jetzt unter mehr Hände aufgeteilt wird.** Pocket Aces sind heads-up um die 85%, aber gegen drei Gegner rutscht das auf ==r:~64%==, und gegen vier auf ~56% — immer noch die beste Hand, aber nicht mehr der Crush, der es sich anfühlt. Three-way beträgt die Equity per Definition im *Schnitt* 33%, weil drei Spieler einen Pot teilen.

![Infografik eines Q♣ 9♥ 5♦ 3♠ J♦ Boards, die zeigt, wie jeder zusätzliche Spieler im Pot die Equity jeder Hand kürzt](/images/holdem-equity-multiway.webp "Je mehr Spieler noch im Pot sind, desto kleiner das Stück jedes Einzelnen — sogar Pocket Aces")

Zwei Dinge werden multiway schlechter, nicht nur dein roher Anteil:

- **Die Fold Equity bricht zusammen.** Um einen Pot mit einer Bet zu gewinnen, müssen jetzt *alle* folden — viel unwahrscheinlicher mit drei Gegnern als mit einem. Bluffs und dünne Semi-Bluffs verlieren schnell an Wert.
- **Die Realization fällt.** Mehr Spieler, die noch handeln, bedeuten mehr Wege, ausgedrawt oder von deiner Hand gebettet zu werden, also realisierst du sogar noch weniger von einem bereits kleineren Stück.

Die praktische Erkenntnis: Hände, die einen Multiway-Pot wollen, sind die, die die Nuts machen (Sets, suited Asse für den Nut-Flush), nicht große Paare, die sich am besten heads-up spielen. Wenn das Feld groß ist, zieh dich zu Händen zusammen, deren Equity hält, wenn der Kuchen fünffach geschnitten wird.

---

## Alles zusammen: Wie Profis Equity am Tisch wirklich nutzen

**Gute Spieler berechnen keine exakte Equity — sie fahren eine schnelle Vier-Schritt-Schätzung, die Realization und Fold Equity auf die rohe Zahl aufschichtet.** Hier der Denkprozess, in der Reihenfolge, in der er tatsächlich passiert:

:::steps
Rohe Equity schätzen | Outs × 4 oder × 2 bei Draws; das Matchup preflop abrufen
Für Realization abziehen | Out of position oder schwer zu spielen? Kürze es — 40% roh könnten 30% real sein
Fold Equity addieren | Wenn du bettest, wie oft foldet der Villain? Das ist extra Equity, die deine Hand allein nicht hat
Mit dem Preis vergleichen | Realisierte Equity + Fold Equity vs deine Pot Odds → callen, betten oder folden
:::

An dem Abend, den ich oben erwähnte, machte ich Schritt eins und hörte auf — zählte meine rohe Equity und ignorierte, dass ich sie out of position, gegen einen guten Spieler, nie realisieren würde. Sobald ich anfing, für die Position abzuziehen und über *seine* Folds statt nur meine Karten nachzudenken, schlossen sich die Leaks. Die Equity ist keine Zahl, die du nachschlägst; sie ist eine Linse, durch die du jede Entscheidung laufen lässt.

---

:::readnext[Weiterlesen]
/de/blog/holdem-pot-odds | Wie du Pot Odds berechnest | /images/holdem-pot-odds-hero.webp
/de/blog/holdem-implied-odds | Implied Odds — Wenn ein schlechter Preis ein guter Call ist | /images/holdem-implied-odds-hero.webp
:::

## FAQ

**Q. Was ist Equity im Poker?**

A. Die Equity ist dein Anteil am Pot — der Prozentsatz, zu dem deine Hand gewinnt, wenn die Hand bis zum Showdown geht. Wenn der Pot $100 beträgt und du zu 60% gewinnst, ist deine Equity $60 wert. Es ist die Kernzahl, die du gegen den Preis eines Calls vergleichst, um zu entscheiden, ob du weitermachst.

**Q. Wie berechnet man Equity im Poker?**

A. Bei Draws nutzt du die Regel der 4 und 2: multipliziere deine Outs mit 4 auf dem Flop (zwei Karten to come) oder mit 2 auf dem Turn. Neun Flush-Outs ≈ 36% auf dem Flop. Preflop merkst du dir gängige Matchups (AA vs KK ist 82/18). Für exakte Zahlen nutzen Spieler Equity-Rechner abseits des Tisches zum Studieren — du schätzt beim Spielen.

**Q. Was ist der Unterschied zwischen Equity und Pot Odds?**

A. Die Equity ist deine Chance zu gewinnen (was du hast); die Pot Odds sind die Equity, die du brauchst, um bei einem Call Break-even zu sein (was der Preis verlangt). Die Regel ist einfach: calle, wenn deine Equity größer ist als deine Pot Odds. Die Pot Odds kommen aus der Bet-Größe; die Equity kommt aus deiner Hand und dem Board.

**Q. Sind 50% Equity gut im Poker?**

A. Es ist für sich weder gut noch schlecht — 50% ist ein Coinflip. Ob es ein Call ist, hängt vom Preis ab: gegen eine Half-Pot-Bet brauchst du nur 25%, also sind 50% ein großer Call; aber deinen ganzen Stack als 50/50-Underdog um nichts zu riskieren ist ein Glücksspiel, kein Edge. Die Equity ist nur neben den Pot Odds bedeutsam.

**Q. Wie viel Fold Equity brauche ich, um profitabel zu bluffen?**

A. Für einen reinen Bluff brauchst du deinen Gegner, dass er mindestens Bet ÷ (Pot + Bet) der Zeit foldet. $50 in $100 zu betten heißt 50 ÷ 150 = 33%. Hast du auch einen Draw (einen Semi-Bluff), brauchst du, dass er sogar seltener foldet, weil du auch bei einem Call noch gewinnen kannst. Deshalb ist das Semi-Bluffen von Draws so profitabel.

**Q. Was ist Equity Realization?**

A. Die Equity Realization ist, wie viel deiner rohen Equity du tatsächlich einsammelst. Realisierte Equity = rohe Equity × Realization%. Eine Hand mit 40% roher Equity, die 75% realisiert, ist wirklich 30% wert. Die Position ist der größte Treiber — in Position realisierst du mehr, out of position weniger — weshalb dieselbe Hand am Button mehr wert ist als in den Blinds.

**Q. Was ist All-in-Equity?**

A. Die All-in-Equity ist schlicht dein rohes Win-Prozent, wenn kein weiteres Setzen mehr passieren kann. Weil es keine zukünftigen Entscheidungen gibt, realisierst du 100% davon, sodass die rohe Equity zum exakten Anteil am Pot wird, den du über die Zeit einsammelst. Es ist der eine Spot, wo "Equity ist gleich Pot-Anteil" wörtlich wahr ist.

**Q. Warum fällt meine Equity in Multiway-Pots?**

A. Weil derselbe 100%-Pot jetzt unter mehr Hände aufgeteilt wird — Pocket Aces bei ~85% heads-up fallen auf ~64% gegen drei Spieler und ~56% gegen vier. Multiway kürzt auch deine Fold Equity (alle müssen folden, nicht nur ein Spieler) und deine Realization (mehr Spieler heißt mehr Wege, ausgedrawt zu werden), also schrumpfen sowohl dein roher Anteil als auch das, was du davon behältst.

---

## Die 3 Dinge zum Merken

1. **Die Equity ist dein Anteil am Pot** — Win% × Pot-Größe. Calle, wenn sie deine Pot Odds schlägt. Dieser Vergleich ist das Rückgrat jeder Entscheidung.
2. **Du behältst selten alles davon.** Realisierte Equity = roh × Realization%, und die Position ist der größte Faktor. Die rohe Equity ist die Decke, nicht die Auszahlung.
3. **Aggression fertigt Equity.** Die Fold Equity lässt eine Bet Pots gewinnen, die deine Hand verlieren würde — aber sie bricht multiway zusammen, wo du brauchst, dass alle folden.

Meistere das und der Rest der Poker-Mathematik rastet ein. Von hier aus verwandle die Equity in korrekte Calls mit dem [Pot-Odds-Guide](/de/blog/holdem-pot-odds), oder sieh, wie tiefe Stacks das Bild ändern, mit den [Implied Odds](/de/blog/holdem-implied-odds).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Odds- und Wahrscheinlichkeitstabelle</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die rohen Win-Prozente hinter jeder Hand</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie du Pot Odds berechnest</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Der Preis, den deine Equity schlagen muss</div>
  </a>
  <a href="/de/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Implied Odds erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum die Equity nicht dein finaler Pot-Anteil ist</div>
  </a>
</div>
`.trim(),
};

export default POST;
