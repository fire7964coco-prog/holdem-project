import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Drawing Odds im Poker — Die Chancen, jede Hand zu floppen und zu treffen",
  seoTitle: "Wie oft floppst du es wirklich? — Poker Drawing Odds",
  desc: "Die echten Chancen, im Hold'em ein Set, einen Flush, Quads und jeden Draw zu floppen — mit der Kombinatorik und Set-Mining-Mathe, die andere weglassen.",
  tldr: "Mit einem Pocket Pair floppst du in 11,8% der Fälle ein Set (7,5:1 dagegen), mit zwei suited Karten nur 0,84% einen Flush, und einen gefloppten Flushdraw komplettierst du bis zum River in 35% der Fälle. Jede Zahl unten stammt aus dem Deck, nicht aus dem Bauch.",
  category: "odds",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "Ein kleines Pocket Pair neben einem Chipstack auf grünem Filz, während der Flop ausgeteilt wird — der Moment, in dem ein Set-Mining-Call aufgeht oder verfehlt",
  tags: ["drawing odds", "chance ein set zu floppen", "chance einen flush zu floppen", "chance quads zu floppen", "set mining", "chance pocket aces zu bekommen", "poker flop wahrscheinlichkeiten", "texas holdem drawing odds"],
  content: `
Die Hand, mit der ich das eiskalt gelernt habe: Ich callte einen Raise mit Pocket Fives, floppte mein Set, nahm einem Typen mit Aces den Stack ab, und mein Kumpel fragte, wie ich "wusste", dass ich callen sollte. Ich *wusste* es nicht — ich kannte die Zahl. ==Du floppst ein Set etwa 1 von 8,5 Versuchen==, und die Stacks waren tief genug, um mich auszuzahlen, wenn es passierte. Dieser einzelne Bruchteil machte aus einem "fühlt sich glücklich an"-Call einen profitablen.

Genau das sind Drawing Odds in Wahrheit: kein Glück, sondern die ==feste Mathematik eines 52-Karten-Decks==. Wie oft du ein Set floppst, einen Flush floppst, einen Draw bis zum River komplettierst — jede dieser Zahlen kannst du herleiten, und die Spieler, die gewinnen, haben sie auswendig. Dieser Guide ist die ==g:Wahrscheinlichkeit hinter dem Flop und dem Draw==, jeweils mit der echten Kombinatorik, damit du siehst, *warum* die Zahl ist, wie sie ist. Er ist der Begleiter zur kompletten [Poker-Odds- und Wahrscheinlichkeitstabelle](/de/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); sobald du die Odds hier kennst, verwandeln [Outs zählen](/de/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") und [Pot Odds](/de/blog/holdem-pot-odds) sie in Entscheidungen.

---

### Die Zahlen zum Einbrennen

:::stripe
11,8% | Ein Set floppen mit einem Pocket Pair
0,84% | Einen fertigen Flush floppen mit zwei suited Karten
35% | Einen gefloppten Flushdraw bis zum River komplettieren
407:1 | Quads floppen mit einem Pocket Pair
:::

---

## Der Flop-Lebenszyklus: Eine Tabelle, die jede Odds-Seite aufteilt

Hier ist die Tabelle, die niemand an einem Ort baut. Die meisten Seiten nennen dir die Chance, eine Hand zu *floppen*, auf einer Seite und die Chance, einen Draw zu *komplettieren*, auf einer anderen — aber am Tisch ist es eine durchgehende Geschichte. Du bekommst zwei Karten, du floppst etwas Fertiges **oder** einen Draw, und wenn es ein Draw ist, komplettierst du ihn oder eben nicht.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Holding | Fertig gefloppt | Den Draw gefloppt | Draw bis River komplett |
|:---|:---:|:---|:---|
| Pocket Pair → Set | 11,8% (7,5:1) | — | Set→Full House 33% bis River |
| Zwei suited → Flush | 0,84% (118:1) | 10,9% Flushdraw | 35% (9 Outs) |
| Connectors → Straße | 1,3% (76:1) | ~10% OESD | 31,5% (8 Outs) |
| Zwei ungepaart → Paar | ~32% | — | — |
| Pocket Pair → Quads | 0,245% (407:1) | — | — |

</div>

Lies eine Zeile quer und du siehst den ganzen Lebenszyklus einer Hand. Zwei suited Karten floppen fast nie einen *fertigen* Flush (0,84%) — aber sie floppen dreizehnmal häufiger einen **Flushdraw** (10,9%), und dieser Draw kommt in 35% der Fälle bis zum River an. Diese drei Zahlen zu vermengen ist der mit Abstand häufigste Odds-Fehler, also ziehen wir jede unten mit gezeigter Mathematik auseinander.

---

## Chance, ein Set zu floppen (und die Set-Mining-Mathe)

![Infografik eines goldenen Dealer Buttons und zweier verdeckter Hole Cards auf einem K♦ 7♣ 2♠ Flop — der Moment, in dem ein Set-Mining-Call entschieden wird](/images/holdem-button-dealer-board.webp "Der Flop entscheidet einen Set-Mining-Call: triff deinen Two-Outer in 11,8% der Fälle, oder folde und warte aufs nächste Paar")

**Mit einem Pocket Pair floppst du in 11,8% der Fälle ein Set (oder besser) — etwa 1 von 8,5, oder 7,5:1 dagegen.** Das ist die wichtigste Drawing-Zahl im Spiel, denn sie ist die gesamte Grundlage für *Set Mining*: einen Raise mit einem kleinen Paar rein deshalb zu callen, um Drilling zu floppen.

Woher kommt 11,8%? Halte ein Pocket Pair und es sind zwei Karten im Deck übrig, die dich paaren. Der Flop sind drei Karten, gezogen aus den 50, die du nicht sehen kannst. Der saubere Weg zu zählen ist rückwärts — die Chance, dass du alle drei **verfehlst**:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Schritt | Mathematik |
|------|------|
| Flops, die dein Paar verfehlen | C(48,3) = 17.296 |
| Mögliche Flops insgesamt | C(50,3) = 19.600 |
| Chance, dass du verfehlst | 17.296 ÷ 19.600 = 88,2% |
| **Chance, dass du ein Set floppst** | **1 − 0,882 = 11,8%** |

</div>

### Wann Set Mining sich wirklich lohnt

Ein Set in 11,8% der Fälle zu floppen heißt, dass du **in 88% der Fälle verfehlst** und foldest. Um zu profitieren, müssen die 12%, die du triffst, für all die Male bezahlen, die du verfehlst. Der Break-even liegt bei 7,5:1 — wenn du also callst, um zu set-minen, willst du, dass der Pot plus das, was du auf späteren Streets gewinnen kannst, **mindestens das 7,5-Fache** deines Calls wert ist, und in der Praxis ==g:15:1 oder besser==, um die Male abzudecken, in denen dein Set nicht ausgezahlt oder überholt wird.

:::tip[Die Faustregel: Calle einen Raise nur zum Set-Minen, wenn die effektiven Stacks etwa das 15-20-Fache des Call-Preises betragen. Tiefe Stacks machen kleine Paare zu Gold; kurze Stacks machen sie zu Müll. Das Paar hat sich nicht geändert — die Implied Odds haben es.]:::

Set Mining ist der pureste [Implied Odds](/de/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp")-Play, den es gibt — eine winzige Chance, später einen großen Pot zu gewinnen. Das komplette Framework — die Formel, die Stack-Vielfachen Draw für Draw und die Reverse Implied Odds — steckt in jenem Guide.

Zwei verwandte Zahlen, nach denen Leute fragen:

- **Ein Set bis zum River zu treffen** (vom Preflop aus, mit allen fünf Boardkarten) liegt bei ==**19,2%**== — 1 − C(48,5)/C(50,5). Höher als die Flop-Zahl, weil du zwei weitere Karten bekommst, aber du kannst dich nicht darauf verlassen, den River billig zu erreichen, weshalb die Flop-Zahl das Set-Mining bestimmt.
- **Set over Set** — du floppst ein Set und verlierst gegen ein größeres — hat keine einzelne feste Zahl, weil es davon abhängt, wie viele Gegner Paare halten, aber mit zwei Spielern, die beide Paare halten, landet es bei ~1%. Es ist der klassische Cooler: die Mathematik war die ganze Zeit auf deiner Seite.

---

## Flush-Odds: Fertig vs. Draw vs. Komplett

![Ass-König in Herz mit einem Dame-Sieben-Herz-Flop auf grünem Filz, ein gefloppter Neun-Out-Flushdraw neben einem kurzen Chipstack](/images/holdem-drawing-odds-flush-draw.webp "Zwei Herz in der Hand, zwei auf dem Flop — ein Flushdraw, kein fertiger Flush: 10,9% zu floppen, 35% bis zum River zu komplettieren")

Hier verwischen Konkurrenten drei komplett verschiedene Zahlen. Mit zwei suited Karten in deiner Hand gibt es **drei separate Fragen**, und sie liegen eine Größenordnung auseinander:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Frage | Odds | Die Mathematik |
|:---|:---:|:---|
| Einen **fertigen Flush** floppen (3 deiner Farbe) | 0,84% · 118:1 | C(11,3) ÷ C(50,3) = 165 ÷ 19.600 |
| Einen **Flushdraw** floppen (2 weitere deiner Farbe) | 10,9% · 8:1 | C(11,2)×39 ÷ C(50,3) = 2.145 ÷ 19.600 |
| Einen gefloppten Flushdraw bis River **komplettieren** | 35,0% · 1,9:1 | 1 − C(38,2) ÷ C(47,2) |

</div>

Der ehrliche Satz lautet also: zwei suited Karten floppen weit häufiger einen **Draw** als einen fertigen Flush, und dieser Draw ist mit 35% ungefähr ein Münzwurf, es zu schaffen. Jede suited Hand "wegen des Flushes" zu chasen ignoriert, dass du den fertigen Flush weniger als einmal pro 100 Hände floppst.

Die Komplettierungs-Zahl teilt sich nach Street auf, was in dem Moment zählt, in dem noch Setzrunden übrig sind:

- **Flop → River (beide Karten):** 35,0% — nutze das nur, wenn du am Flop All-in bist.
- **Flop → Turn (eine Karte):** 9 ÷ 47 = 19,1%.
- **Turn → River (eine Karte):** 9 ÷ 46 = 19,6%.

Ein **Backdoor** (Runner-Runner) Flush — du floppst nur *eine* zusätzliche Karte deiner Farbe und brauchst sowohl Turn als auch River in deiner Farbe — kommt bei etwa 4,2% herein, ungefähr ein zusätzliches Out an Equity wert. Kein Grund zu callen, aber ein echter Tiebreaker bei knappen Spots. Um irgendeine davon in einen Call-oder-Fold zu verwandeln, jage die Zahl durch [wie man Pot Odds berechnet](/de/blog/holdem-pot-odds).

---

## Straßen-Odds: Eine floppen vs. auf eine drawen

![Eine Acht-hohe Straße der Reihe nach auf grünem Filz ausgelegt, die fertige Hand, die ein Open-Ended Draw jagt](/images/holdem-reading-straight-example.webp "Ein Open-Ended Straight Draw füllt von beiden Enden — acht Outs, 31,5% bis zum River zu komplettieren")

Connectors wie 8♠7♠ haben ihren eigenen Lebenszyklus. Du **floppst nur in 1,3%** der Fälle eine fertige Straße (76:1) — seltener, als die meisten Spieler annehmen. Weit häufiger floppst du einen **Draw**:

- **Open-Ended Straight Draw (OESD):** ~10% der Flops mit Connectors. Acht Outs, komplettiert **31,5%** bis zum River — 1 − C(39,2)/C(47,2) — oder 17% auf jede einzelne Karte.
- **Gutshot (Inside) Straight Draw:** vier Outs, komplettiert **16,5%** bis zum River, 8,5% auf eine Karte. Die halbe Equity eines Open-Enders, weshalb sich dieselben Connectors je nach Flop so unterschiedlich spielen.

Beachte, dass der OESD (31,5%) und der Flushdraw (35%) nah beieinanderliegen — beide sind "ein großer Draw", beide ungefähr ein Drittel, bis zum River zu treffen. Das ist die Abkürzung, die es sich zu verinnerlichen lohnt: ein normaler großer Draw ist etwa ==**einer von drei**== bis zum River zu komplettieren, und er halbiert sich auf etwa einen von sechs auf einer einzelnen Street.

---

## Seltene Flops: Quads, Drilling, Full Houses & Straight Flushes

Das sind die Zahlen hinter den besten (und schlimmsten) Nächten deines Poker-Lebens. Jede ist ein sauberes Kombinatorik-Problem auf den 19.600 möglichen Flops:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Das floppen | Holding | Odds | Die Mathematik |
|:---|:---|:---:|:---:|
| **Quads** | Ein Pocket Pair | 0,245% · 407:1 | 48 ÷ 19.600 |
| **Full House** | Ein Pocket Pair | 0,98% · 101:1 | 192 ÷ 19.600 |
| **Drilling** | Zwei ungepaarte Karten | 1,35% · 73:1 | 264 ÷ 19.600 |
| **Straight Flush** | Suited Connectors | 0,02% · ~4.900:1 | 4 ÷ 19.600 |

</div>

Eine entscheidende Unterscheidung, die die Top-Seiten regelmäßig vermasseln: ein **Set** ist ein Pocket Pair plus eine passende Boardkarte (11,8%), während **Drilling** eine *ungepaarte* Hole Card ist, die das Board zweimal paart (1,35%). Auf dem Papier dasselbe Drilling, wild unterschiedliche Odds und Spielbarkeit — ein Set ist getarnt, Drilling ist offensichtlich. Lass dir von niemandem einreden, sie hätten dieselbe Form.

Die Straight-Flush-Zahl ist die zum Rahmen: mit Suited Connectors gibt es genau **vier** Flops, die ihn machen (eine Sequenz in deiner Farbe), also 4 ÷ 19.600 ≈ 1 von 4.900. Deshalb sind gefloppte Straight Flushes Geschichten, die Leute ein Jahrzehnt lang erzählen.

Die Full-House-Zahl zählt jeden Weg, wie der Flop dir mit einem Pocket Pair ein Boat beschert — einschließlich der Flops, die als Drilling eines anderen Rangs auf deinem Paar kommen — weshalb sie 0,98% liest statt der engeren ~0,73%, die manche Tabellen nur für "Set plus ein Board-Paar" angeben.

---

## Chance, deine Hand ausgeteilt zu bekommen

Vor all dem oben gibt es das Austeilen. Mit **1.326 möglichen Zwei-Karten-Kombinationen** — so oft kommen die Hände an, nach denen Leute fragen:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Das ausgeteilt | Odds | Wie oft |
|:---|:---:|:---:|
| Pocket Aces (bestimmtes Paar) | 220:1 · 0,45% | 6 ÷ 1.326 |
| Irgendein Pocket Pair | 16:1 · 5,9% | 78 ÷ 1.326 |
| A-K suited | 331:1 · 0,3% | 4 ÷ 1.326 |
| Zwei suited Karten | 3,25:1 · 23,5% | fast jede 4. Hand |

</div>

Die Zahl, die Leute überrascht: wenn **du** an einem 10-Hand-Tisch Aces hältst, liegt die Chance, dass ein *zweiter* Spieler ebenfalls Aces hat, bei etwa **1 zu 136** (neun Gegner, jeder 1 ÷ C(50,2) = 1/1.225). Selten, aber es ist genau der Aces-gegen-Aces-Cooler, der einen Stack leert und der "gezinkten" Software angelastet wird. Es ist einfach das Deck. Welche dieser 1.326 Hände sich von jedem Platz aus zu spielen lohnen, siehst du in der Starthand-Tabelle nach Position.

---

:::readnext[Weiterlesen]
/de/blog/holdem-outs | Wie man Outs im Poker zählt | /images/holdem-outs-hero.webp
/de/blog/holdem-pot-odds | Wie man Pot Odds berechnet | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. Wie hoch ist die Chance, ein Set zu floppen?**

A. Etwa 11,8%, oder 1 von 8,5, wenn du ein Pocket Pair hältst — üblicherweise angegeben als "7,5:1 dagegen". Sie kommt aus 1 − C(48,3)/C(50,3): von den 19.600 möglichen Flops verfehlen 17.296 dein Paar. Diese Zahl ist die gesamte Grundlage dafür, ob das Set-Minen eines kleinen Paars profitabel ist.

**Q. Warum sagt man 7,5:1, aber auch 1 von 8?**

A. Das sind dieselben Odds, auf zwei Arten ausgedrückt. "7,5:1 dagegen" zählt Verfehlen gegen Treffen (7,5 Verfehlen pro Treffer), was auf 1 Treffer pro 8,5 Versuche hinausläuft — also etwa 1 von 8,5, oder 11,8%. "Odds dagegen" und "1 von N" beschreiben immer dieselbe Wahrscheinlichkeit; addiere sie nicht.

**Q. Was ist der Unterschied zwischen einem Set und Drilling?**

A. Ein Set ist ein Pocket Pair plus eine passende Karte auf dem Board — du floppst es in 11,8% der Fälle und es ist gut versteckt. Drilling ist eine ungepaarte Hole Card, die das Board paart (zwei passende Boardkarten) — nur 1,35% am Flop, und für Gegner weit offensichtlicher. Derselbe Drilling-Rang, sehr unterschiedliche Odds und Wert.

**Q. Wie hoch ist die Chance, einen Flush zu floppen?**

A. Nur 0,84% (etwa 118:1) mit zwei suited Karten — das ist C(11,3)/C(50,3). Verwechsle es nicht mit dem Floppen eines Flush*draws*, was 10,9% ist, oder dem *Komplettieren* dieses Draws bis zum River, was 35% ist. Zwei suited Karten floppen einen Draw dreizehnmal häufiger als einen fertigen Flush.

**Q. Wenn ich einen Flushdraw floppe, wie hoch ist die Chance, dass ich ihn komplettiere?**

A. Etwa 35% bis zum River mit neun Outs (1 − C(38,2)/C(47,2)) — ein wenig besser als einer von drei. Auf eine einzelne Karte sind es rund 19%: 9/47 Flop-zu-Turn, 9/46 Turn-zu-River. Nutze die Ein-Karten-Zahl, wann immer noch Setzrunden kommen.

**Q. Wie hoch ist die Chance, Quads zu floppen?**

A. 0,245%, oder 407:1, mit einem Pocket Pair — es gibt genau 48 Flops (deine letzten zwei passenden Karten plus irgendeine dritte Karte, C(48,1)) von 19.600. Einen Straight Flush zu floppen ist mit etwa 1 von 4.900 noch seltener.

**Q. Wie hoch ist die Chance, Pocket Aces zu bekommen?**

A. 220:1 (0,45%) speziell für Aces — 6 der 1.326 Startkombinationen. Irgendein Pocket Pair ist mit 16:1 (5,9%) weit häufiger. Und wenn du an einem vollen Tisch Aces hast, hält ein anderer Spieler ebenfalls Aces mit etwa 1 zu 136.

**Q. Wie hoch ist die Chance auf Set over Set?**

A. Es gibt keine einzelne feste Zahl — sie hängt davon ab, wie viele Gegner Pocket Pairs halten — aber wenn zwei Spieler beide Paare haben und beide Sets floppen, sind es ungefähr 1%. Es ist der ultimative Cooler: du floppst überhaupt nur in 11,8% der Fälle ein Set, also ist es eine Geschichte, kein Fehler, wenn zwei von euch das auf demselben Board tun.

---

## Die 3 Dinge zum Merken

1. **Ein Set floppen: 11,8% (7,5:1).** Die Zahl, die jeden Set-Mining-Call entscheidet — calle nur tief genug, um das 15-Fache oder mehr ausgezahlt zu bekommen, wenn du triffst.
2. **Fertig vs. Draw vs. Komplett sind verschiedene Zahlen.** Zwei suited Karten floppen einen fertigen Flush 0,84%, einen Flushdraw 10,9% und komplettieren diesen Draw 35%. Nenne nie die falsche.
3. **Ein großer Draw ist etwa einer von drei bis zum River.** Flushdraw 35%, Open-Ender 31,5% — und rund einer von sechs auf einer einzelnen Street.

Jede Zahl hier kommt direkt aus dem Deck, nicht aus dem Bauchgefühl. Nimm sie mit zu [wie man Outs zählt](/de/blog/holdem-outs), um die Zahl in Echtzeit aufzubauen, dann [Pot Odds](/de/blog/holdem-pot-odds), um sie in einen Call oder Fold zu verwandeln — oder geh zurück zur kompletten [Poker-Odds- und Wahrscheinlichkeitstabelle](/de/blog/holdem-probability) für jede Made-Hand- und Long-Shot-Zahl an einem Ort.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Odds- und Wahrscheinlichkeitstabelle</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Jede Made-Hand- und Long-Shot-Zahl an einem Ort</div>
  </a>
  <a href="/de/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie man Outs im Poker zählt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Verwandle diese Odds in einen Live-Out-Count</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie man Pot Odds berechnet</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Stimmt der Preis für deinen Draw?</div>
  </a>
</div>
`.trim(),
};

export default POST;
