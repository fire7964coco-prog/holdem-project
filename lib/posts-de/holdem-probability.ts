import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Poker Wahrscheinlichkeiten Tabelle — die echten Odds jeder Hand im Hold'em",
  seoTitle: "Wie oft triffst du wirklich? — Poker Wahrscheinlichkeiten Tabelle",
  desc: "Die echten Odds jeder Pokerhand, jedes Flops und jedes Draws im Texas Hold'em — plus Regel der 2 und 4 und Pot Odds einfach erklärt, in einer Tabelle.",
  tldr: "Bis zum River triffst du ein Paar in 43,8% der Fälle, zwei Paare in 23,5%, einen Flush in 3,0% und ein Full House in 2,6% — während ein Royal Flush nur etwa einmal in 31.000 Händen auftaucht.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "13 Min.",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Blick von oben auf einen aktiven Texas-Hold'em-Tisch mit fünf Gemeinschaftskarten, verstreuten Chip-Stacks und Spielern mitten in der Hand",
  tags: ["poker wahrscheinlichkeiten tabelle", "poker odds", "poker hand wahrscheinlichkeiten", "odds set floppen", "regel der 2 und 4", "pot odds", "poker outs tabelle", "texas holdem odds"],
  content: `
Als ich zum ersten Mal in einem Live-Game ein Paar Fünfen set-minete und meinen Set am Flop traf, stöhnte der Typ neben mir: „Wie stehen denn *bitte* die Odds?“ — und ich wusste es tatsächlich: etwa ==1 zu 8,5==. Genau diese eine Zahl war der Grund, warum ich überhaupt gecallt hatte.

Poker ist kein Ratespiel. Jeder Call, jeder Fold und jeder Shove ist eine ==als etwas anderes getarnte Wahrscheinlichkeitsfrage==, und die Spieler, die gewinnen, sind die, die „Wie stehen die Odds?“ zum Reflex gemacht haben. Das ist die ==komplette **Poker Wahrscheinlichkeiten Tabelle**== fürs Texas Hold'em — jede fertige Hand, jeder Flop, jeder Draw — mit der ==g:einen mentalen Abkürzung==, mit der du die Mathematik am Tisch in zwei Sekunden erledigst.

---

### Die Zahlen, die am meisten zählen

:::stripe
43,8% | Ein Paar bis zum River
23,5% | Zwei Paare
3,0% | Einen Flush treffen
2,6% | Ein Full House treffen
1 zu 30.940 | Ein Royal Flush
:::

---

## Poker Hand Odds Tabelle: die Wahrscheinlichkeit jeder Hand

Hier ist die Master-Tabelle. Der Kniff, den die meisten Seiten auslassen: Für jede Hand gibt es ==zwei verschiedene Zahlen==, und sie zu verwechseln ist der Grund, warum Leute darüber streiten, wie selten ein Royal Flush „wirklich“ ist.

- **5-Karten-Odds** = die Chance, dass eine einzelne zufällige Fünf-Karten-Hand genau diese Hand *ist* (die klassische Lehrbuchzahl).
- **Hold'em (bis zum River)** = die Chance, dass du am Ende mit dieser Hand *dastehst*, nachdem du alle sieben Karten gesehen hast (deine zwei Hole Cards + fünf Gemeinschaftskarten). Das ist die Zahl, die am Tisch tatsächlich zählt.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | 5-Karten-Odds (ausgeteilt) | Hold'em-Odds (bis River) |
|:---|:---:|:---:|
| Royal Flush | 1 zu 649.740 (0,000154%) | 1 zu 30.940 (0,0032%) |
| Straight Flush | 1 zu 72.193 (0,00139%) | 1 zu 3.590 (0,0279%) |
| Vierling | 1 zu 4.165 (0,0240%) | 1 zu 595 (0,168%) |
| Full House | 1 zu 694 (0,144%) | 1 zu 39 (2,60%) |
| Flush | 1 zu 509 (0,197%) | 1 zu 33 (3,03%) |
| Straße | 1 zu 255 (0,392%) | 1 zu 22 (4,62%) |
| Drilling | 1 zu 47 (2,11%) | 1 zu 21 (4,83%) |
| Zwei Paare | 1 zu 21 (4,75%) | 1 zu 4,3 (23,5%) |
| Paar | 1 zu 2,4 (42,3%) | 1 zu 2,3 (43,8%) |
| High Card | 1 zu 2,0 (50,1%) | 1 zu 5,7 (17,4%) |

</div>

> **Die Statistik, die alle überrascht**
> High Card ist die *häufigste* Fünf-Karten-Hand (50%), aber eines der *seltensten* Hold'em-Ergebnisse (17%). Warum? Sieben Karten geben dir so viele Chancen, ein Paar zu bilden, dass „kein Paar bis zum River“ tatsächlich selten wird. Mehr Karten, mehr Verbindungen.

Beachte, wie sich die Reihenfolge nie ändert — je seltener eine Hand zu treffen ist, desto höher schlägt sie. Das ist die gesamte Logik hinter der [Pokerhände-Reihenfolge](/de/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): Wahrscheinlichkeit *ist* die Rangfolge.

:::quiz:::

---

## Odds, jede Starthand ausgeteilt zu bekommen

![Pocket-Asse — das Pik-Ass und das Herz-Ass frisch ausgeteilt auf grünem Filz neben Poker-Chips](/images/holdem-probability-starting-hands.webp "Pocket-Asse: die beste Starthand, nur einmal in 221 Händen ausgeteilt")

Vor jedem Flop gibt es genau **1.326 mögliche Zwei-Karten-Starthände**. So oft tauchen die auf, nach denen die Leute fragen.

| Starthand | Odds | Wie oft |
|:---|:---:|:---|
| Ein bestimmtes Pocket-Paar (z. B. A-A) | 1 zu 221 (0,45%) | Etwa einmal alle ~221 Hände |
| **Irgendein** Pocket-Paar | 1 zu 17 (5,9%) | Grob zweimal pro Stunde live |
| A-K suited (bestimmt) | 1 zu 332 (0,30%) | Selten |
| A-K (suited *oder* offsuit) | 1 zu 83 (1,2%) | — |
| Beliebige zwei suited Karten | 1 zu 4,3 (23,5%) | Fast jede vierte Hand |

Wenn also das nächste Mal jemand sagt „Ich kriege nie Asse“, hat er grob recht — ein *bestimmtes* Paar wie Asse bekommst du nur etwa ==einmal alle 221 Hände==. Aber **irgendein** Pocket-Paar kommt alle 17 Hände, weshalb Set-Mining eine echte Strategie ist und keine Fantasie. Welche Paare und suited Hände sich von jedem Sitz aus zu spielen lohnen, ist eine Frage der Starthand-Wahl je Position.

---

## Odds, jede Hand zu floppen

Das ist die Tabelle, die die meisten Odds-Seiten vergraben oder auf ein Dutzend Artikel aufteilen. Das sind die Odds, dass der Flop deine Hand *macht*, gegeben die Hole Cards in der linken Spalte.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Du floppst… | Mit | Odds | Dagegen |
|:---|:---|:---:|:---:|
| Einen Set (oder besser) | Ein Pocket-Paar | 11,8% | ~7,5:1 |
| Einen Flush | Zwei suited Karten | 0,84% | ~118:1 |
| Einen Flushdraw | Zwei suited Karten | 10,9% | ~8:1 |
| Eine Straße | Suited Connectors (z. B. 8-7) | 1,3% | ~76:1 |
| Zwei Paare | Zwei ungepaarte Karten | 2,0% | ~49:1 |
| Ein Full House | Ein Pocket-Paar | 0,98% | ~101:1 |
| Quads | Ein Pocket-Paar | 0,245% | ~407:1 |

</div>

Die Zeile zum Merken ist die oberste: ==**du floppst einen Set etwa 12% der Zeit**, also ungefähr 1 zu 8,5==. Diese eine Zahl entscheidet, ob es profitabel ist, einen Raise zu callen, um ein kleines Paar zu „set-minen“ — du brauchst den Pot (und den wahrscheinlichen Stack deines Gegners), um dich bei einem Treffer mit mehr als 7,5:1 auszuzahlen. Das ist die Brücke zu den [Pot Odds](#pot-odds) weiter unten. Für die vollständige Herleitung jeder Zeile hier — plus die Set-Mining-Stack-Regel und die Aufteilung fertiger vs. Draw vs. kompletter Flush — siehe die Tiefenanalyse zu [Drawing Odds und den Odds, jede Hand zu floppen](/de/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Drawing Odds: deinen Flush oder deine Straße bis zum River treffen

Du hast am Flop einen Draw. Wie oft komplettierst du ihn? Alles hängt an den **Outs** — den Karten, die im Deck übrig sind und deine Hand machen. Zähle deine Outs, dann lies quer.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Flop → River (2 Karten) | Turn → River (1 Karte) |
|:---|:---:|:---:|:---:|
| Flush + Open-Ended (Combo) | 15 | 54,1% | 32,6% |
| Flush + Gutshot | 12 | 45,0% | 26,1% |
| Flushdraw | 9 | 35,0% | 19,6% |
| Open-Ended-Straßendraw | 8 | 31,5% | 17,4% |
| Zwei Overcards | 6 | 24,1% | 13,0% |
| Gutshot (Inside) Straße | 4 | 16,5% | 8,7% |
| Paar → Set / Set → Full House | 2 | 8,4% | 4,3% |

</div>

Der klassische Spot: du floppst einen **Flushdraw** (neun Outs). Du kommst ==35% der Zeit bis zum River an== — besser als eine von drei. Ein **Open-Ended-Straßendraw** (acht Outs) trifft 31,5%. Beachte die zwei Spalten: sobald der Turn danebengeht, halbieren sich deine Odds auf eine *einzelne* Karte grob, was genau der Grund ist, warum Draws Straße für Straße teurer werden zu jagen.

---

## Wie man Poker Odds berechnet: Outs zählen und die Regel der 2 und 4

Diese Tabelle kannst du nicht im Kopf herumtragen — musst du aber auch nicht. Die **Regel der 2 und 4** bringt dich in einer Sekunde auf ein bis zwei Prozentpunkte genau heran:

:::steps
Zähle deine Outs | Die ungesehenen Karten, die deine Hand komplettieren (Flushdraw = 9)
Am Flop (2 Karten kommen noch) | Multipliziere Outs × 4 → dein ungefährer %-Wert, bis zum River zu treffen
Am Turn (1 Karte kommt noch) | Multipliziere Outs × 2 → dein ungefährer %-Wert, am River zu treffen
:::

**Durchgerechnetes Beispiel.** Du hast nach dem Flop vier Karten zu einem Flush. Das sind ==9 Outs== (13 deiner Farbe − 4, die du sehen kannst). Am Flop: 9 × 4 = **36%** — der echte Wert ist 35,0%, du liegst also goldrichtig. Am Turn, falls du verfehlt hast: 9 × 2 = **18%** (echt: 19,6%).

:::tip[Die Regel *über*schätzt leicht, sobald du mehr als etwa 9 Outs hast. Bei einem 15-Out-Monster sagt „×4“ 60%, aber die echte Zahl ist 54% — zieh bei großen Draws ein paar Punkte ab.]:::

Das ist der ganze Trick. Outs → mal vier am Flop → deine [Equity](/de/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Alles andere ist nur zu wissen, was man mit dieser Zahl anfängt. Die eine Fertigkeit, die diese Regel voraussetzt, ist das Zählen selbst — für Combo-Draws, überlappende Outs und die „schmutzigen“ Outs, die nicht zählen sollten, siehe den kompletten Leitfaden zum [Outs zählen im Poker](/de/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot Odds: deine Odds in einen Call oder Fold verwandeln

![Pot-Odds-Infografik — ein $100-Pot und ein $25-Call, also 25 ÷ 125 bedeutet, du brauchst 20% Equity](/images/holdem-probability-pot-odds.webp "Ein $25-Call in einen $100-Pot: 25 ÷ 125 = 20% Equity nötig, um die Nulllinie zu treffen")

Zu wissen, dass du 35% der Zeit triffst, ist nutzlos, bis du es mit dem **Preis** vergleichst. Die Pot Odds sind einfach: *welchen Bruchteil des finalen Pots zahle ich, um zu callen?* Ist deine Gewinnchance größer als dieser Bruchteil, callst du.

**Durchgerechnetes Beispiel.** Der Pot ist $100. Dein Gegner bettet $50, macht ihn zu $150. Du musst $50 callen, um diese $150 zu gewinnen.

:::steps
Pot nach dem Bet | $100 + $50 = $150
Dein Call | $50, um $150 zu gewinnen (finaler Pot $200)
Pot Odds | 50 ÷ 200 = 25% — du brauchst mindestens 25% Equity
Deine Equity | Flushdraw ≈ 35% (Regel der 4)
Entscheidung | 35% > 25% → ein klar profitabler ==g:Call==
:::

Das ist der Moment, in dem sich all die Zahlen auszahlen: deine **Drawing Odds (35%)** schlagen deine **Pot Odds (25%)**, also gewinnt Callen langfristig Geld, obwohl du die Hand öfter verlieren wirst als nicht. Ist der Draw größer als der Preis, callst du; ist er kleiner, foldest du — kein Bauchgefühl nötig. Für die vollständige Methode, den Bet-Size-Spickzettel und wie Implied Odds den Call verändern, siehe [wie man Pot Odds berechnet](/de/blog/holdem-pot-odds) und [Implied Odds](/de/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp").

---

## Royal-Flush- & Straight-Flush-Odds (und warum sie so selten sind)

![Infografik eines Royal Flush in Herz — A♥ K♥ auf der Hand komplettieren A-K-Q-J-10 in Herz auf einem 10♥ J♥ Q♥ Board](/images/holdem-probability-royal-flush.webp "Ein Royal Flush in Herz: die seltenste Hand im Poker, etwa 1 zu 30.940 bis zum River")

Die zwei seltensten Hände sind die, mit denen Spieler jahrelang prahlen — aus gutem Grund.

- **Royal Flush:** als ausgeteilte Fünf-Karten-Hand ==1 zu 649.740==. Spielst du Hold'em bis zum River, verbessert er sich auf etwa 1 zu 30.940, weil du deine besten fünf aus sieben Karten wählst. So oder so vergehen für die meisten Spieler *Jahre* dazwischen.
- **Straight Flush:** etwa 1 zu 72.193 als Fünf-Karten-Hand. Für die meisten immer noch eine Sichtung einmal im Jahr.

Warum so selten? Ein Royal Flush ist genau **ein bestimmter Kartenlauf in einer bestimmten Farbe** — vier Wege, ihn im gesamten Deck zu bilden, gegen 1.302.540 Wege, eine schlichte High Card zu bilden. Seltenheit ist der ganze Grund, warum er ganz oben in der Rangfolge steht.

:::note
Ein häufiger Mythos: „Ein Royal Flush schlägt alles, also kann er *unentschieden* enden.“ Zwei Royal Flushes sind nur in verschiedenen Farben möglich — und da Farben nie den Gleichstand brechen, ist das ein Split Pot. In der Praxis passiert das praktisch nie, außer bei Zufällen mit geteiltem Board.
:::

---

## Long-Shot-Odds: Cooler, Quads und Bad Beats

Manche Zahlen existieren vor allem, um die schlimmste Nacht deines Pokerlebens zu erklären.

| Long Shot | Odds |
|:---|:---:|
| Pocket-Asse ausgeteilt bekommen | 1 zu 221 |
| Quads mit einem Pocket-Paar floppen | 1 zu 407 |
| Einen Straight Flush floppen (Suited Connectors) | ~1 zu 4.900 |
| Einen Royal Flush bis zum River treffen | 1 zu 30.940 |

**Set over Set** — du floppst einen Set und verlierst gegen einen größeren Set — ist der ultimative Cooler. Es gibt keine saubere einzelne Zahl, weil es davon abhängt, wie viele Spieler Paare halten, aber der Anker ist dieser: *du* floppst einen Set nur 11,8% der Zeit, und dass ein Gegner dasselbe auf demselben Board tut, ist selten genug, dass sich die meisten Spieler an jeden einzelnen erinnern. Wenn es passiert, ist es Varianz, kein Fehler — die Mathematik war die ganze Zeit auf deiner Seite. Wenn du genau sehen willst, wie solche Showdowns gewertet werden, decken die [Kicker- und Tiebreaker-Regeln](/de/blog/holdem-tiebreak-rules) jeden Grenzfall ab.

---

:::readnext[Weiterlesen]
/de/blog/holdem-hand-rankings | Pokerhände-Reihenfolge, von der besten zur schlechtesten | /images/holdem-hand-rankings-hero.webp
:::

## Häufige Fragen

**Q. Wie stehen die Odds für einen Royal Flush im Texas Hold'em?**

A. Etwa 1 zu 30.940 bis zum River, wenn du eine Hold'em-Hand ausspielst (mit deinen besten fünf von sieben Karten). Als schlicht ausgeteilte Fünf-Karten-Hand ist es 1 zu 649.740. So oder so vergehen für die meisten Spieler Jahre ohne einen.

**Q. Wie stehen die Odds für einen Straight Flush?**

A. Grob 1 zu 72.193 als Fünf-Karten-Hand, oder etwa 1 zu 3.590 bis zum River im Hold'em. Es ist die zweitseltenste Hand, nur vom Royal Flush geschlagen.

**Q. Wie stehen die Odds, einen Flush bis zum River zu treffen?**

A. Wenn du einen Flushdraw floppst (neun Outs), komplettierst du ihn etwa 35% der Zeit bis zum River — besser als eine von drei. Auf eine einzelne Karte (Turn zu River) fällt es auf grob 19,6%.

**Q. Wie stehen die Odds, einen Set zu floppen?**

A. Etwa 11,8%, oder grob 1 zu 8,5, wenn du ein Pocket-Paar hältst. Diese Zahl „7,5:1 dagegen“ ist die Grundlage, um zu entscheiden, ob das Set-Mining eines kleinen Paars profitabel ist.

**Q. Wie stehen die Odds, Pocket-Asse ausgeteilt zu bekommen?**

A. 1 zu 221 (0,45%) speziell für Asse. Irgendein Pocket-Paar kommt allerdings weit häufiger vor — etwa 1 zu 17 Hände (5,9%).

**Q. Was ist die Regel der 2 und 4 im Poker?**

A. Eine Abkürzung für Draw-Odds: multipliziere deine Outs am Flop mit 4 (zwei Karten kommen noch) oder am Turn mit 2 (eine Karte kommt noch), um deine prozentuale Trefferchance zu schätzen. Sie ist bis etwa neun Outs auf ein bis zwei Punkte genau.

**Q. Wie berechnet man Pot Odds?**

A. Teile den Betrag, den du callen musst, durch den gesamten Pot nach deinem Call. $50 in einen $150-Pot zu callen bedeutet 50 ÷ 200 = 25% — du brauchst also mindestens 25% Equity, um profitabel zu callen. Vergleiche das mit deinen Drawing Odds: ist deine Trefferchance höher, callst du.

**Q. Wie stehen die Odds für Set over Set?**

A. Es gibt keine einzelne feste Zahl — es hängt davon ab, wie viele Gegner Pocket-Paare halten — aber es ist selten. Du floppst einen Set von vornherein nur 11,8% der Zeit, also ist es der klassische „Cooler“, der Stacks kostet, wenn zwei Spieler auf demselben Board beide Sets floppen.

---

## Die 3 Zahlen, die du dir einbrennen solltest

1. **Einen Set floppen: ~12% (1 zu 8,5).** Entscheidet jeden Set-Mining-Call.
2. **Flushdraw bis zum River: 35%.** Neun Outs, Regel der 4 → 9 × 4 = 36%.
3. **Pot Odds schlagen das Bauchgefühl.** Ist deine Trefferchance größer als der Preis des Calls, callst du — jedes Mal.

Poker belohnt die Spieler, die das automatisiert haben. Lerne die Tabelle, drille die Regel der 2 und 4 und fang an, „Wie stehen die Odds?“ *vor* deiner Aktion zu fragen statt danach. Als Nächstes bring die Mathematik zur Anwendung, oder frisch auf, [warum ein Flush eine Straße schlägt](/de/blog/holdem-flush-vs-straight), damit du immer weißt, was deine Outs wert sind.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Reihenfolge</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pokerhände-Reihenfolge, von der besten zur schlechtesten</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Reihenfolge, die diese Odds erzeugen — jede Hand gerankt</div>
  </a>
  <a href="/de/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Duell</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Schlägt ein Flush eine Straße?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum die seltenere Hand immer gewinnt</div>
  </a>
  <a href="/de/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board-Lesen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie man das Board im Hold'em liest</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Zähle deine Outs, indem du jeden Draw siehst</div>
  </a>
</div>
`.trim(),
};

export default POST;
