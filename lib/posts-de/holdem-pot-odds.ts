import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Pot Odds berechnen im Poker — die 10-Sekunden-Methode",
  seoTitle: "Lohnt sich dieser Call? — Pot Odds berechnen",
  desc: "Hör auf, aus Hoffnung zu callen. So berechnest du Pot Odds in zehn Sekunden — der Verhältnis-zu-Prozent-Trick, Bet-Spickzettel und wo Implied Odds hingehören.",
  tldr: "Um die Pot Odds zu berechnen, teilst du den Betrag, den du callen musst, durch den gesamten Pot nach deinem Call. Ein $50-Call in einen $150-Pot = 50 ÷ 200 = 25% — du brauchst also mindestens 25% Equity, damit der Call profitabel ist.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "Die Hand eines Spielers schiebt Chips in Richtung Pot auf grünem Filz — der Moment einer Pot-Odds-Entscheidung",
  tags: ["pot odds", "pot odds berechnen", "poker pot odds", "pot odds tabelle", "implied odds", "pot odds vs equity", "regel der 2 und 4", "benötigte equity zum callen"],
  content: `
Das teuerste Wort im Poker ist „Hoffnung“. In meinem ersten Jahr habe ich River-Bets gecallt, weil mein Flushdraw *vielleicht* ankommt — und dabei Chips verblutet. Der Abend, an dem es endlich klick machte, war ein $50-Call in einen $150-Pot — ausnahmsweise habe ich gerechnet, gemerkt, dass ich nur 25% zum Break-even brauche, und einen Call nie wieder mit denselben Augen gesehen.

==Pot Odds sind das eine Stück Mathematik, das einen Call aus Gefühl von einem Call mit Grund trennt.== Sie sind in fünf Minuten gelernt und nach ein paar Sessions automatisch. Dieser Guide gibt dir die ==g:10-Sekunden-Methode==, einen Bet-Size-Spickzettel, den du dir am Tisch vorstellen kannst, und das eine, was die meisten Spieler falsch machen: wie Pot Odds, Equity und Implied Odds wirklich zusammenpassen.

Die Zahlen hinter deinen Draws kommen aus der [Tabelle für Poker-Odds und Wahrscheinlichkeiten](/de/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") — dieser Guide zeigt dir, wie du diese Zahlen in einen korrekten Call oder Fold verwandelst.

---

### Pot Odds auf einen Blick

:::stripe
25% | Benötigte Equity gegen eine Half-Pot-Bet
33% | Benötigte Equity gegen eine Pot-Size-Bet
Call ÷ (Pot + Call) | Die gesamte Formel
:::

---

## Was sind Pot Odds im Poker?

**Pot Odds sind der Preis, zu dem dir angeboten wird, weiterzuspielen.** Sie vergleichen die Größe des Pots mit der Größe der Bet, die du callen musst — die Belohnung gegen das Risiko.

Sagen wir, der Pot ist $150 und du musst $50 callen. Dir werden ==$150 Gewinn für $50 Risiko== angeboten — du „bekommst 3:1“. Je größer der Pot im Verhältnis zum Call, desto besser dein Preis und desto seltener musst du gewinnen, damit sich der Call lohnt.

Diese Zahl — „wie oft du gewinnen musst“ — ist der ganze Punkt. 3:1 zu bekommen bedeutet, dass sich der Call selbst bezahlt, wenn du auch nur **25% der Zeit** oder öfter gewinnst. Pot Odds verwandeln ein schwammiges „soll ich callen?“ in ein hartes Ziel: *gewinne ich oft genug, um diesen Preis zu schlagen?*

---

## Pot Odds berechnen (Schritt für Schritt)

Vergiss die Verhältnisse für einen Moment — die schnellste brauchbare Form ist ein **Prozentwert**, weil du ihn direkt mit deiner Gewinnchance vergleichst.

:::steps
Zähle den finalen Pot zusammen | Aktueller Pot + die Bet + dein Call. Beispiel: $100 Pot + $50 Bet + dein $50 Call = $200
Teile deinen Call durch diesen finalen Pot | $50 ÷ $200 = 0,25
Das ist deine benötigte Equity | Du musst mindestens 25% der Zeit gewinnen, um profitabel zu callen
Vergleiche sie mit deiner tatsächlichen Equity | Flushdraw ≈ 35% zum Treffen → 35% schlägt 25% → ==g:call==
:::

Das war's. **Benötigte Equity = dein Call ÷ der finale Pot.** Wenn deine echte Gewinnchance größer ist als diese Zahl, macht der Call auf lange Sicht Geld — selbst wenn du die Hand öfter verlierst als gewinnst.

> **Die eine Regel, die jede Verwirrung beseitigt**
> Zähle immer deinen eigenen Call zum finalen Pot dazu. „3:1 bekommen“ und „25% brauchen“ beschreiben *denselben* Spot — das Verhältnis ist der Preis, der Prozentwert ist das Ziel. Die meisten Anfängerfehler entstehen durch das Vermischen der beiden Konventionen; nimm den Prozentwert und schau nie zurück.

---

## Pot Odds als Verhältnis vs. Prozent

Old-School-Spieler reden in Verhältnissen („ich bekomme 4:1“); moderne Spieler denken in Prozent („ich brauche 20%“). Du solltest sofort zwischen beiden wechseln können, denn das Verhältnis ist, was du *siehst* (Pot vs. Bet), und der Prozentwert ist, was du *benutzt* (gegen deine Equity).

Die Umrechnung ist ein Schritt: ein Verhältnis von **X:1** bedeutet, dass du **1 ÷ (X + 1)** als Prozentwert brauchst.

| Du bekommst… | Equity, die du brauchst |
|:---|:---:|
| 1:1 | 50% |
| 2:1 | 33% |
| 2,5:1 | 28,6% |
| 3:1 | 25% |
| 4:1 | 20% |
| 5:1 | 16,7% |
| 6:1 | 14,3% |

Das Muster ist intuitiv: je stärker der Pot den Call überragt, desto kleiner das Stück vom Kuchen, das du brauchst, um den Call zu rechtfertigen.

---

## Wie viel Equity brauchst du zum Callen?

![Premium-Hole-Cards auf grünem Filz — die Entscheidung, ob der Preis zum Weiterspielen stimmt](/images/holdem-starting-hands-premium.webp "Die benötigte Equity hängt allein von der Größe der Bet ab, der du gegenüberstehst")

Hier ist die Abkürzung, die in deinem Kopf am Tisch lebt. Deine benötigte Equity hängt **nur von der Größe der Bet im Verhältnis zum Pot** ab — merke dir diese sieben Ankerpunkte und du brauchst nie wieder einen Taschenrechner.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Gegner bettet | Du bekommst | Equity, die du brauchst |
|:---|:---:|:---:|
| ¼ Pot | 5:1 | 16,7% |
| ⅓ Pot | 4:1 | 20% |
| ½ Pot | 3:1 | 25% |
| ⅔ Pot | 2,5:1 | 28,6% |
| ¾ Pot | 2,3:1 | 30% |
| Pot-Size | 2:1 | 33% |
| 2× Pot | 1,5:1 | 40% |

</div>

Beachte die Obergrenze: selbst ein massiver **2×-Pot-Overbet verlangt nur 40% Equity**. Du musst fast nie Favorit sein, um profitabel zu callen — ein verbreiteter Trugschluss, der Leute korrekte Calls folden lässt. Je größer die Bet, desto mehr Equity brauchst du, aber es steigt langsamer, als die meisten Spieler denken.

---

## Pot-Odds-Tabelle: Welche Draws schlagen welche Bets

Jetzt verbinde den Preis mit deiner Hand. [Zähle deine **Outs**](/de/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") (Karten, die deine Hand vervollständigen), rechne sie in Equity um und prüfe sie gegen die Bet. Das sind die Draws, denen du am häufigsten begegnest:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Dein Draw | Outs | Equity, 1 Karte | Equity, 2 Karten |
|:---|:---:|:---:|:---:|
| Flush + Open-Ender | 15 | 32,6% | 54,1% |
| Flushdraw | 9 | 19,6% | 35,0% |
| Open-Ended Straße | 8 | 17,4% | 31,5% |
| Zwei Overcards | 6 | 13,0% | 24,1% |
| Gutshot-Straße | 4 | 8,7% | 16,5% |

</div>

Lies sie gegen die Bet-Size-Tabelle oben. Gegen eine ==Half-Pot-Bet (25% nötig)==: mit zwei kommenden Karten ist ein Flushdraw (35%) ein klarer Call — aber auf einer *einzelnen* Karte ist derselbe Draw nur 19,6%, was den Preis für sich genommen **nicht** trifft. Genau diese Lücke ist der Ort, an dem Implied Odds ins Spiel kommen.

---

## Pot Odds vs. Equity vs. Implied Odds

Diese drei werden ständig durcheinandergeworfen, und die Verwirrung kostet Geld. Hier die saubere Aufteilung:

:::compare
Begriff | Was er bedeutet
Pot Odds | Der Preis: Call ÷ finaler Pot = die Equity, die du *brauchst*
Equity | Deine tatsächliche Chance, die Hand gerade jetzt zu gewinnen
Implied Odds | Die *zusätzlichen* Chips, die du auf späteren Streets zu gewinnen erwartest, wenn du triffst
:::

**Pot Odds vs. [Equity](/de/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")** ist die Kernentscheidung: calle, wenn deine Equity deine Pot Odds schlägt. [**Implied Odds**](/de/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") sind der Tie-Breaker für Draws, die den Preis knapp verfehlen. Wenn dein Flushdraw 25% braucht, aber auf der River-Karte nur 19,6% hat, kannst du trotzdem callen, *wenn* du beim Treffen genug zusätzliche Bets herausholst, um die Differenz zu decken. Deshalb kannst du eine Flop-Bet mit einem Draw profitabel callen, und deshalb machen tiefe Stacks Draws wertvoller.

Der dunkle Spiegel sind die **Reverse Implied Odds** — die Chips, die du *verlierst*, wenn du triffst, aber die Hand trotzdem verlierst (dein Flush kommt an, aber das Board pairt und jemand hat ein Full House). Second-Best-Draws bluten leise Geld, weshalb der [Nut-Flushdraw so viel mehr wert ist als ein kleiner](/de/blog/holdem-starting-hands-chart).

---

## Die Regel der 4 und 2: Outs schnell in Odds verwandeln

Du kannst mitten in der Hand nicht die exakte Equity ausrechnen, also nutze die **Regel der 4 und 2**:

- **Auf dem Flop, mit zwei noch kommenden Karten:** multipliziere deine Outs mit **4**.
- **Auf dem Turn, mit einer kommenden Karte:** multipliziere deine Outs mit **2**.

Ein Flushdraw hat 9 Outs. Auf dem Flop: 9 × 4 = **36%** (echter Wert 35,0% — punktgenau). Auf dem Turn: 9 × 2 = **18%** (echter Wert 19,6% — nah genug zum Entscheiden).

:::tip[Die ×4-Version nimmt stillschweigend an, dass du *beide* verbleibenden Karten ohne weitere Bets siehst — was nur garantiert ist, wenn du bereits all-in bist. Wenn noch Bets kommen, verlass dich auf die ×2-Zahl (eine Karte) für die Street vor dir und lass Implied Odds den Rest rechtfertigen.]:::

Vollständige Herleitungen für jeden Draw und jede fertige Hand findest du in der [Wahrscheinlichkeitstabelle](/de/blog/holdem-probability). Hier ist die Abkürzung alles, was du brauchst.

---

## Häufige Pot-Odds-Fehler von Anfängern

Ich habe jeden einzelnen davon gemacht, bevor sie mich pleitegemacht haben. Achte auf sie:

:::card
🧮 | Den Call zu vergessen | Benötigte Equity ist Call ÷ *finaler* Pot — zähle deine eigenen Chips mit, sonst überschätzt du jeden Preis
🃏 | Verunreinigte Outs zählen | Ein Flush-Out, das auch das Board pairt, kann jemandem ein Full House machen. Rechne „schmutzige“ Outs raus, bevor du der Zahl traust
🚀 | Die Regel der 4 falsch anwenden | ×4 gilt nur, wenn du beide Karten gratis siehst (all-in). Gegen eine Turn-Bet ist es ×2 — mit ×4 redest du dich in verlierende Calls hinein
💸 | Implied & Reverse Implied Odds ignorieren | Tiefe Stacks belohnen Draw-Hände; ein Non-Nut-Draw, der in eine bessere Hand trifft, ist eine Falle, kein Zahltag
🎯 | Aus Hoffnung callen | „Es könnte ja ankommen“ ist kein Grund. Wenn deine Equity deine Pot Odds (plus Implied Odds) nicht schlägt, ist es ein Fold

:::

### Eine echte Hand, von Anfang bis Ende

Ich halte ==b:A♥ K♥== auf einem ==Q♥ 7♥ 2♣== Flop — der Nut-Flushdraw, 9 Outs. Der Pot ist $100, Villain bettet $50. Meine Pot Odds: ich bekomme 3:1, also brauche ich **25%**. Mit zwei kommenden Karten liege ich bei ~35%, und selbst wenn ich nur die nächste Karte zähle (19,6%), sind meine Implied Odds riesig — kommt ein Herz, nehme ich einer Top-Pair-Hand den Stack ab. ==g:Easy Call.==

Der Turn ist die 3♠ — ein Brick. Der Pot ist $200 und Villain jammt $200 — eine Pot-Size-Bet, also bekomme ich jetzt nur noch 2:1 und brauche **33%**. Aber mit **einer verbleibenden Karte ist mein Flush nur 19,6%**. Der direkte Preis sagt Fold; meine Implied Odds sind jetzt null, weil Villain all-in ist und mir nichts mehr zahlen kann. ==r:Korrekter Fold== — und genau der Spot, an dem „Hoffnung“ mich früher einen Stack gekostet hat.

---

:::readnext[Weiterlesen]
/de/blog/holdem-probability | Tabelle für Poker-Odds und Wahrscheinlichkeiten | /images/holdem-probability-hero.webp
/de/blog/holdem-starting-hands-chart | Welche Starthände du wirklich spielen solltest | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Wie berechnet man Pot Odds schnell?**

A. Teile den Betrag, den du callen musst, durch den gesamten Pot *nach* deinem Call. Ein $50-Call in einen $150-Pot ist 50 ÷ 200 = 25% — das ist die Equity, die du brauchst. Wenn deine Gewinnchance sie schlägt, calle.

**Q. Zählt man seinen eigenen Call zu den Pot Odds dazu?**

A. Ja. Die Formel für die benötigte Equity nutzt den *finalen* Pot, der deinen eigenen Call enthält. Ein $50-Call in einen $150-Pot bedeutet einen $200-Pot am Ende, also 50 ÷ 200 = 25%. Den eigenen Call wegzulassen ist der häufigste Anfängerfehler.

**Q. Was ist ein gutes Pot-Odds-Verhältnis?**

A. Je höher, desto besser — du würdest gern „5:1 bekommen“ (nur 16,7% nötig). Aber „gut“ ist relativ zu deiner Hand: 2:1 zu bekommen (33% nötig) ist super mit einem Flushdraw und schrecklich mit einem Gutshot. Vergleiche den Preis immer mit deiner Equity.

**Q. Wie rechnet man Pot Odds von einem Verhältnis in einen Prozentwert um?**

A. Ein Verhältnis von X:1 wird zu 1 ÷ (X + 1) als Prozentwert. Also 3:1 = 1 ÷ 4 = 25%; 4:1 = 1 ÷ 5 = 20%. Der Prozentwert ist das, was du mit deiner Gewinnchance vergleichst.

**Q. Was ist der Unterschied zwischen Pot Odds und Implied Odds?**

A. Pot Odds zählen nur die Chips, die jetzt im Pot liegen. Implied Odds addieren die *zusätzlichen* Chips, die du auf späteren Streets zu gewinnen erwartest, wenn du deine Hand vervollständigst. Implied Odds erlauben dir, manche Draws profitabel zu callen, die Pot Odds allein als Fold ausweisen — solange die Stacks tief genug sind, um dich auszuzahlen.

**Q. Welche Pot Odds gibt eine Pot-Size-Bet?**

A. Eine Pot-Size-Bet legt dir 2:1 auf, du brauchst also 33% Equity zum Callen. Eine Half-Pot-Bet legt 3:1 auf (25% nötig); ein 2×-Pot-Overbet legt 1,5:1 auf (40% nötig). Größere Bets verlangen mehr Equity, aber selbst ein riesiger Overbet fragt nur nach 40%.

**Q. Was ist die Regel der 4 und 2?**

A. Eine Abkürzung, um Outs in Equity zu verwandeln: multipliziere Outs mit 4 auf dem Flop (zwei kommende Karten) oder mit 2 auf dem Turn (eine kommende Karte). Neun Flush-Outs ≈ 36% auf dem Flop, 18% auf dem Turn. Nutze ×4 nur, wenn du beide Karten ohne weitere Bets siehst.

**Q. Wie viel Equity brauche ich, um eine Bet zu callen?**

A. Genau deine Pot Odds als Prozentwert: Call ÷ finaler Pot. Gegen eine Half-Pot-Bet brauchst du 25%; gegen eine Pot-Size-Bet 33%. Zähle deine Outs, rechne mit der Regel der 4 und 2 um und calle, wenn deine Equity die Hürde überspringt.

---

## Die 3 Dinge, die du dir merken solltest

1. **Die Formel:** benötigte Equity = dein Call ÷ der finale Pot (mit deinem Call eingerechnet). Half-Pot = 25%, Pot-Size = 33%.
2. **Der Vergleich:** calle, wenn deine Equity (Outs × 4 oder × 2) deine Pot Odds schlägt. Das ist die gesamte Entscheidung.
3. **Der Tie-Breaker:** Implied Odds retten Draws, die den Preis knapp verfehlen — aber nur, wenn die Stacks tief sind und dein Draw zu den Nuts geht.

Mach das ein paar hundert Mal und es hört auf, Mathematik zu sein, und wird zum Instinkt. Du foldest die aussichtslosen Calls, machst die profitablen und hörst auf, die „Hoffnungs“-Steuer zu zahlen. Von hier aus schärfe die rohen Zahlen hinter jedem Draw in der [Tabelle für Poker-Odds und Wahrscheinlichkeiten](/de/blog/holdem-probability), oder stelle sicher, dass du Pots mit Händen betrittst, auf die zu ziehen sich lohnt — mit der [Starthände-Tabelle nach Position](/de/blog/holdem-starting-hands-chart).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Mathematik</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabelle für Poker-Odds und Wahrscheinlichkeiten</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Jede Hand, jeder Flop, jeder Draw — die Zahlen hinter dem Preis</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starthände</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthand-Tabelle nach Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Steig in Pots mit Händen ein, die sich zum Drawen lohnen</div>
  </a>
  <a href="/de/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board lesen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Das Board lesen im Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Zähle deine Outs, indem du jeden Draw erkennst</div>
  </a>
  <a href="/de/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Cash vs. Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnier vs. Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum Implied Odds im Cash Game tiefer reichen</div>
  </a>
</div>
`.trim(),
};

export default POST;
