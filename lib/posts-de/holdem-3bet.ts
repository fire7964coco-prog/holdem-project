import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "3-Betting im Poker: Wann, wie viel und wie du eine 3-Bet konterst",
  seoTitle: "Der 3-Bet-Guide mit der Mathematik — 3-Bet Range & Sizing",
  desc: "Was eine 3-Bet ist, wann du auf Value oder als Light-Bluff 3-bettest, die exakte Sizing-Mathematik und wie du reagierst, wenn dich jemand 3-bettet.",
  tldr: "Eine 3-Bet ist die erste Re-Raise vor dem Flop — sie heißt 3-Bet, weil der Big Blind die erste Bet ist, der Open-Raise die zweite und deine Re-Raise die dritte. 3-bette auf Value einen engen Kern (QQ+, AK) plus ein paar suited Blocker-Bluffs wie A5s, size sie in Position auf etwa das 3-fache des Opens und out of Position auf das 4-fache, und halte deine gesamte 3-Bet-Frequenz bei 6–10%. Wenn du selbst gegen eine 3-Bet sitzt, 4-bette deine Premiums, calle die Hände, die gut spielen, und folde den Rest — gegen Low-Stakes-Spieler, die nie bluffen, häufiger als \"ausgeglichen\".",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 Min.",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Ein Pokerspieler schiebt einen Stapel Chips für eine Re-Raise nach vorne, während der ursprüngliche Raiser zusieht — eine Preflop-3-Bet-Konfrontation auf grünem Filz",
  tags: ["3 bet poker", "was ist eine 3-bet", "3-bet sizing", "3-bet range", "light 3-bet", "3-bet bluff", "wann 3-betten", "squeeze play", "3-bet kontern", "linear vs polarisiert range"],
  content: `
Die Hand, die mir beigebracht hat, wofür eine 3-Bet wirklich *da* ist, lief so: Ein loose Spieler eröffnete, ich schaute auf A-K und habe — wie jeder Anfänger — einfach gecallt. Der Flop kam Ass-hoch, ich bekam kein Geld rein, und er foldete auf eine einzige Bet. Ich hatte die beste Hand in einen winzigen Pot verwandelt. Eine Woche später, dieselbe Situation, habe ich stattdessen *re-geraist*. Er callte mit einem schwächeren Ass, ging auf einem Ass-hohen Flop broke, und ich gewann das Fünffache. Dieselben Karten. Eine Entscheidung — die 3-Bet — machte den ganzen Unterschied.

Eine **3-Bet** ist eine der stärksten Waffen im No-Limit Hold'em und zugleich eine der am meisten missverstandenen. Die meisten Guides zeigen dir nur die halbe Wahrheit: wie man eine 3-Bet *macht*, aber nicht wie viel, nicht welche Hände Bluffs sind und warum, nicht was du tust, wenn jemand *dich* 3-bettet. Das ist das ==komplette **3-Bet-Playbook**== — Definition, Sizing mit der tatsächlich gezeigten Mathematik, Value- und Light-Ranges, der Squeeze, das Kontern einer 3-Bet und die Fehler, die dich still Stacks kosten. Sie ist ein Kernstück einer gewinnenden [Texas-Hold'em-Strategie](/de/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") — das [Raise-or-Fold](/de/blog/holdem-limping)-Prinzip, eine Stufe höher gedreht.

---

### Die 3-Bet in Zahlen

:::stripe
3. Bet | Warum sie "3-Bet" heißt (Blind = Bet 1)
~3x / ~4x | Sizing: in Position vs. out of Position
6–10% | Eine gesunde gesamte 3-Bet-Frequenz
QQ+, AK | Der Value-Kern, dem fast jeder zustimmt
:::

---

## Was ist eine 3-Bet im Poker?

**Eine 3-Bet ist die erste Re-Raise vor dem Flop** — du re-raist einen Spieler, der bereits open-geraist hat. Wenn jemand auf 3 Big Blinds eröffnet und du es auf 9 machst, ist das eine 3-Bet.

Warum heißt es also *drei*-Bet, obwohl es erst die zweite Raise ist? Weil der Name **Bets in der Sequenz zählt, nicht Raises.** Der Big Blind ist ein Pflichteinsatz — das ist ==Bet eins==. Der Open-Raise ist ==Bet zwei==. Deine Re-Raise ist ==Bet drei== — die 3-Bet. Folge der Kette nach oben und der Rest des Vokabulars fügt sich zusammen:

- **4-Bet** — die Re-Raise *über* eine 3-Bet (die vierte Bet). Sehr stark oder polarisiert.
- **5-Bet** — die Re-Raise über eine 4-Bet. Bei 100 Big Blinds ist das meist All-in.
- **Cold 4-Bet** — eine 4-Bet von jemandem, der noch nicht geraist hatte (z. B. UTG eröffnet, du 3-bettest, der Button 4-bettet "cold"). Sie schreit Stärke.

Das ist die ganze Leiter. Alles andere in diesem Guide dreht sich um die erste Sprosse — wann du sie erklimmst, wie weit, und was du tust, wenn jemand sie bei dir erklimmt. Wenn die grundlegenden [Betting-Aktionen](/de/blog/holdem-betting-actions) Check, Call und Raise noch unklar sind, fang dort an und komm zurück.

---

## Warum überhaupt 3-betten? Was eine 3-Bet wirklich bewirkt

Einen Open-Raise zu callen (genannt **Flatten**) hält dich im Pot, aber eine 3-Bet macht vier Dinge, die ein Flat nicht kann:

1. **Sie gewinnt den Pot oft sofort.** In einem guten Teil der Fälle foldet der Raiser und du scoopst den Pot vor dem Flop ohne Showdown. Ein Flat tut das nie.
2. **Sie baut mit deinen besten Händen einen großen Pot.** Wenn du Assen oder Könige hältst, lässt Flatten drei andere Spieler billig rein. 3-Betten isoliert den Raiser und bringt Geld rein, während du ein riesiger Favorit bist.
3. **Sie ergreift Initiative und Positions-Hebel.** Du wirst zum Aggressor mit der Betting-Führung auf jeder Street — und gegen einen weiten Opener druckt dieser Druck Geld.
4. **Sie verweigert Equity und Information.** Eine Raise lässt Gegner zum Weiterspielen zahlen, statt sie mit einer Hand, die dich knacken könnte, einen billigen Flop sehen zu lassen.

Der Haken: Weil eine 3-Bet mächtig ist, ist es teuer, sie *falsch* zu machen. Zu viele Spieler 3-betten nur ihre Monster, was sie völlig lesbar macht. Der Rest dieses Guides handelt davon, es richtig zu machen.

---

## Wann solltest du 3-betten? Value-Hände vs. Light-Bluffs

![Eine dunkle, on-brand Raster-Infografik, die 3-Bet-Hände in zwei Spalten teilt — VALUE 3-BETS wie Pocket Assen, Könige, Damen und Ass-König, und LIGHT 3-BETS wie suited Wheel-Assen und suited Connectors](/images/holdem-3bet-range-grid.webp "Eine gesunde 3-Bet-Range hat zwei Teile: einen Value-Kern, den du gecallt haben willst, und ein paar suited Blocker-Bluffs, die du gerne gegen eine 4-Bet foldest")

Eine gewinnende 3-Bet-Range hat **zwei klar getrennte Teile**, und den Split zu verstehen ist der größte Sprung in diesem Thema.

**Value-3-Bets** — Hände, die du gecallt *haben willst*, weil du vor dem liegst, was weiterspielt:
- **Der Kern, fast immer:** ==g:QQ+ und AK.==
- **Erweitere auf** JJ, TT, AQs und KQs, wenn du gegen einen weiteren Open aus späterer Position stehst — und trimme zurück zum Kern gegen einen engen Raiser aus früher Position.

**Light-3-Bets (3-Bet-Bluffs)** — Hände, die du 3-bettest, *in der Hoffnung*, sie herauszufolden, die aber trotzdem Backup-Equity haben, wenn sie gecallt werden. Die besten Kandidaten sind kein zufälliger Müll; sie werden wegen **Blockern** und **Playability** gewählt:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Light-3-Bet-Hand | Warum sie ein großartiger Bluff ist |
|:---|:---|
| **A5s–A2s** (suited Wheel-Assen) | Dein Ass **blockt** ihre Premiums — es senkt ihre Combos von AA von 6 auf 3 und von AK von 16 auf 12 — sie haben also seltener eine Hand, die weiterspielt. Dazu flopt sie Flushes, Straßen und Wheel-Draws. |
| **Suited Connectors** (76s, 65s) | Hervorragende Playability — sie floppen Straßen, Flushes und Draws, gewinnen also viel, selbst wenn der Bluff gecallt wird. |
| **Suited One-Gapper** (T8s, 97s) | Gleiche Idee, etwas schwächer: getarnt, flexibel und billig zu folden, wenn 4-gebettet wird. |

</div>

Hier die Blocker-Logik in einem Satz: **Ein Ass zu halten macht es mathematisch weniger wahrscheinlich, dass dein Gegner Assen oder Ass-König hält**, also ist A5s ein weit besserer Bluff als etwa A9o — das blockt dieselben Premiums, spielt aber schrecklich, wenn es gecallt wird, und macht nur schwache Paare. Backup-Equity zählt, weil dein Gegner nicht jedes Mal foldet; du willst einen Bluff, der den Pot trotzdem gewinnen kann. Deshalb hat A5s ≈ 30% Equity gegen eine QQ+/AK-Call-Range, während Offsuit-Müll weit darunter liegt. Das ist dieselbe [Starthand](/de/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp")-Disziplin wie immer — nur aufs Re-Raisen angewendet.

---

## Lineare vs. polarisierte 3-Bet-Ranges

Diese beiden Wörter siehst du überall in der 3-Bet-Strategie. Sie beschreiben die *Form* deiner Range, und die richtige zu wählen ist das, was denkende Spieler von Hand-Chart-Robotern trennt.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Linear (merged) | Polarisiert |
|:---|:---|:---|
| **Form** | Ein solider Block deiner besten Hände | Hantel: stärkste Value **+** Bluffs, nichts in der Mitte |
| **Beispiel** | QQ+, AK, AQs, JJ, TT, KQs | AA-KK + A5s-artige Bluffs; flatte die QQ/AQ/TT-Mitte |
| **Nutze sie, wenn** | Der Open **weit und schwach** ist (späte Position), oder du **in Position** bist | Der Open **stark/eng** ist (frühe Position), oder du **in den Blinds** bist |

</div>

Der Grund ist einfach: Gegen einen **weiten, schwachen** Open liegen Hände wie AQ und TT wirklich vorne, also 3-bettest du sie auf Value in einem merged Block (**linear**). Gegen einen **engen** Open sind dieselben Mittelhände dominiert und werden von 4-Bets "weggeblasen", also 3-bettest du nur echte Value plus saubere Bluffs und *flattest* die Mitte (**polarisiert**).

Eine ehrliche Nuance, die die Hand-Chart-Fraktion übersieht: **Position ist nicht der einzige Faktor.** Die eigentliche Frage ist, *wie wahrscheinlich es ist, dass du von deiner Hand weggeblasen wirst* — was auch von der Gegner-Aggression, dem Rake und deinem Sizing abhängt. Gegen jemanden, der viel callt und selten 4-bettet, mit kleinem Size und niedrigem Rake, tendiere zu **linear**. Gegen einen 4-Bet-freudigen Gegner mit großem Size und hohem Rake, tendiere zu **polarisiert**. Lies die Situation, memoriere keine Regel.

---

## Wie viel solltest du 3-betten? (Sizing, mit der Mathematik)

Die meisten Guides sagen dir "3x in Position, 4x out of Position" und ziehen weiter. Hier das *Warum* und die tatsächliche Rechnung, mit einem Standard-Open von **3 Big Blinds** (nenn es einen $6-Open bei $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Size | 3bb-Open wird zu… | Warum |
|:---|:---:|:---:|:---|
| **In Position** (du handelst zuletzt) | ~3x des Opens | **9bb** ($18) | Position lässt dich mit kleinerem Size gewinnen, also riskierst du weniger. |
| **Out of Position** (du handelst zuerst) | ~4–4,5x | **12–13,5bb** ($24–27) | Größer lässt sie mehr zahlen, um einen Flop zu sehen, und verweigert deinem Positionsnachteil eine billige Fahrt. |
| **Squeeze** (Open + ein Caller) | OOP-Size **+ ~1x pro Caller** | **~14–15bb** ($30) | Extra Dead Money und ein zusätzlicher Spieler zum Rausdrücken. |
| **Einen Limper isolieren** | 3bb **+ 1bb pro Limper** (1 weitere live hinzu) | ~4–5bb | Bestrafe den Limp, entmutige Overcalls, wirst trotzdem weit gecallt. |

</div>

Die Mathematik ist bewusst sichtbar, weil hier Anfänger leaken: **3 × 3bb = 9bb** in Position, **4 × 3bb = 12bb** out of Position. Zwei Regeln, die die Multiplikatoren überschreiben:

- **3-bette out of Position nie winzig.** Eine kleine OOP-3-Bet gibt deinem Gegner einen tollen Preis zum Callen und dich mit Position auszuspielen — genau das, was du vermeiden willst. Nutze die vollen 4x+.
- **Sizing ist kein Gesetz.** Size *runter* gegen Spieler, die zu viel folden (du bluffst billiger), und size *rauf* und geh pure-Value gegen Calling Stations, die nie folden. Rake und Stack-Tiefe verschieben es ebenfalls.

In Turnieren mit flachen Stacks ändert sich die ganze Rechnung: Bei etwa **10–25 Big Blinds** werden viele Hände zu einem **3-Bet-All-in (einem "Shove")** statt zu einer kleinen Re-Raise, weil kein Platz zum Raisen-und-Folden ist. Hör auf, Min-3-Bets zu machen, und fang an zu jammen, sobald du short wirst.

---

## 3-Bet, Flat oder Fold? Eine Entscheidungstabelle

Gegen einen Open hast du drei Optionen, nicht zwei. Das ist die Landkarte, die die meisten Artikel nie zeichnen — wann eine Hand eine 3-Bet, einen Flat (Call) oder den Muck bevorzugt:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Deine Hand | In Position (z. B. Button vs. Steal) | Out of Position (z. B. in den Blinds) |
|:---|:---|:---|
| **Premiums** (QQ+, AK) | 3-Bet auf Value | 3-Bet auf Value |
| **Stark** (JJ-TT, AQ, KQs) | 3-Bet vs. weite Opens; flat vs. eng | Meist 3-Bet oder Fold — Flatten OOP ist schwach |
| **Spekulativ** (kleine Paare, suited Connectors) | Flat zum Set-Minen / billige Flops sehen | 3-Bet als Bluff, oder Fold |
| **Blocker-Bluffs** (A5s-A2s) | 3-Bet als Light-Raise | 3-Bet als Light-Raise |
| **Alles andere** | Fold | Fold |

</div>

Die große Erkenntnis: **Flatten ist in Position legitim** — moderne Solver behalten am Button eine gesunde Flat-Range, weil du profitabel Flops sehen kannst, wenn die Action hinter dir geschlossen ist. Out of Position ist es schwächer, aber mit einem wichtigen Split: Aus dem **Small Blind** bevorzuge eine polarisierte *3-Bet-oder-Fold*, da weites Callen OOP deine Equity schlecht realisiert und eine schwache, cappbare Range baut. Der **Big Blind** ist die Ausnahme — weil du die Action schließt und ohnehin einen Preis bekommst, verteidigst du dort durch *Callen* weit weiter, besonders gegen Steals aus später Position. Position, wieder einmal, ändert alles — dieselbe Lektion wie im [Positions-Playbook](/de/blog/holdem-position-play).

---

## Der Squeeze Play: Einen Raiser *und* einen Caller 3-betten

![Die Chip-Stacks dreier Spieler in Richtung Mitte des grünen Filzes geschoben, während ein Spieler eine größere Re-Raise nach vorne schiebt und einen Open-Raiser und einen Caller squeezt](/images/holdem-3bet-squeeze.webp "Ein Squeeze bestraft einen Open-Raiser und einen Flat-Caller auf einmal — das extra Dead Money macht selbst eine Light-3-Bet profitabel")

Ein **Squeeze Play** ist eine 3-Bet, die gemacht wird, nachdem es bereits einen Open-Raise *und* mindestens einen Caller gab. Er heißt Squeeze, weil du beide Gegner in einen Schraubstock nimmst: Der ursprüngliche Raiser muss sich nun um den Caller hinter ihm sorgen, und der Caller — der gerade eine Hand gezeigt hat, die nicht stark genug zum Re-Raisen war — will selten gegen deine Aggression weiterspielen.

Zwei Dinge machen den Squeeze besonders:
- **Es gibt mehr Dead Money.** Der Pot enthält bereits die Raise und den Call, ein erfolgreicher Squeeze gewinnt also mehr, was bedeutet, dass deine Bluffs *seltener* funktionieren müssen, um profitabel zu sein.
- **Size ihn größer.** Füge etwa einen zusätzlichen Open-Raise pro Caller hinzu. Gegen einen 3bb-Open plus einen Caller ist ein Squeeze auf etwa **14–15bb** Standard — das extra Size ist es, was beide Spieler rausdrückt.

Gute Squeeze-Bluffs sind dieselben suited Blocker-Hände (A5s und Freunde), die gute 3-Bet-Bluffs abgeben, weil du immer noch die mittleren Hände des Raisers herausfolden und Equity haben willst, wenn du gecallt wirst.

---

## Eine 3-Bet kontern: Callst du, 4-bettest du oder foldest du?

![Ein Pokerspieler starrt eine Preflop-Re-Raise an, eine Hand auf seinen Chips, und wägt ab, ob er callt, 4-bettet oder gegen eine 3-Bet foldet](/images/holdem-3bet-facing.webp "Die Hälfte des 3-Bettings, die niemand lehrt: Wenn dich jemand re-raist, sollte der Großteil deiner Range einfach folden — besonders gegen Spieler, die nie bluffen")

Hier die Hälfte des 3-Bettings, die fast jeder Artikel überspringt: **Du wirst weit öfter am empfangenden Ende sein, als du selbst 3-bettest.** Wenn du eröffnest und re-geraist wirst, hast du drei Antworten:

- **4-Bet** — auf Value mit deinen Premiums (QQ+, AK), plus dem gelegentlichen Blocker-Bluff (eine A5s-artige Hand). Eine 4-Bet sagt "Ich gehe nirgendwo hin."
- **Call** — mit Händen, die gut floppen und die Equity oder Position zum Weiterspielen haben: Pocket Pairs zum Set-Minen, suited Broadways und starke Hände, die den Pot nicht in einen 4-Bet-Krieg aufblähen wollen.
- **Fold** — alles andere. Der Großteil deiner Open-Range sollte einfach gegen eine 3-Bet aufgeben; das ist normal, keine Schwäche.

Wie viel solltest du weiterspielen? Die theoretische Basislinie ist die **Minimum Defense Frequency (MDF)** — der Anteil deiner Range, den du weiterspielen musst, damit der 3-Better nicht profitieren kann, indem er mit beliebigen zwei Karten blufft. Sie ist ==Pot ÷ (Pot + Bet)== — wobei *Pot* ist, was vor der 3-Bet in der Mitte liegt, und *Bet* die Größe der 3-Bet ist — was gegen typische 3-Bet-Sizes im Vakuum bei etwa **einem Drittel deiner Range** landet (eine 3x-3-Bet: 4,5bb Pot ÷ (4,5bb + 9bb) ≈ 33%). Aber hier der Exploit, der an echten Tischen Geld gewinnt:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Villains Fold-to-3-Bet-Stat | Was sie dir sagt | Deine Anpassung |
|:---:|:---|:---|
| **~35% (foldet selten)** | Eine Calling Station — ihre 3-Bets und Calls sind value-lastig | 3-bette sie **nur auf Value**, hör auf zu bluffen und value-bette gnadenlos |
| **~55% (ausgeglichen)** | Ein denkender Regular | Spiele nahe an GTO — mische Value und Blocker-Bluffs |
| **~70%+ (foldet zu viel)** | Ein exploitbarer Nit | 3-bette sie **viel öfter light** — sie schenken dir den Pot |

</div>

MDF setzt einen *ausgeglichenen* Gegner voraus. Bei Low Stakes und in Live-Games **under-bluffen** Spieler ihre 3-Bets stark — wenn also ein passiver Spieler plötzlich re-raist, glaub ihm und **folde mehr, als MDF sagt.** Du schuldest einem Nit keine "ausgeglichene" Verteidigung.

---

## Eine echte 3-Bet-Hand, von Anfang bis Ende

Genug Theorie — hier eine komplette Hand mit den Zahlen, damit du den ganzen Ablauf siehst. $1/$2 Cash, 100bb tief.

- **Preflop:** Ein loose Cutoff eröffnet auf ==$6== (3bb). Ich bin am Button mit ==A♠Q♠==. Das ist eine klare **Value-3-Bet** gegen einen weiten Open aus später Position, und ich bin in Position, also mache ich es ==$18== (3x). Die Blinds folden; der Cutoff callt. Pot ist $39.
- **Flop:** ==Q♦ 8♣ 4♥.== Ich flope **Top Pair, Top Kicker** — mein A♠Q♠ macht ein Paar Damen mit dem bestmöglichen Kicker (dem Ass). Beste fünf Karten: Q♠ Q♦ A♠ 8♣ 4♥ = ein Paar (Damen) mit dem Ass-Kicker. Gegen seine Range aus schwächeren Damen, Achten und Floats liege ich weit vorne.
- **Der Punkt:** Weil ich preflop 3-gebettet habe, ist der Pot bereits groß und ich habe die Betting-Führung, also bette ich erneut auf Value und werde von schwächeren Damen und Draws bezahlt. Hätte ich preflop nur *geflattet*, hätten vielleicht drei andere Spieler diesen Flop gesehen, meine Hand wäre weit schwerer zu spielen und der Pot wäre ein Bruchteil der Größe. Die 3-Bet ist es, die Top Pair in einen Stack verwandelt hat.

Jetzt dreh es um: Hätte ich dort eine **light** Hand wie A5s 3-gebettet und der Cutoff hätte auf $55 **4-gebettet**, würde ich einfach folden — der Blocker-Bluff hat seinen Job getan, indem er mir einen billigen, sauberen Laydown gab. Das ist die Disziplin, die Light-3-Betting profitabel statt spewy macht.

---

## Die 6 häufigsten 3-Betting-Fehler

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Der Fehler | Warum er dich kostet | Der Fix |
|:---|:---|:---|
| **Zu klein 3-betten OOP** | Gibt einen tollen Preis zum Callen — sie realisieren Equity in Position gegen dich | Nutze die vollen 4x+ out of Position |
| **Immer nur Value 3-betten** | Du wirst face-up; gute Spieler folden alles außer Coolern | Füge suited Blocker-Bluffs (A5s) hinzu |
| **Nie 3-Bet-Bluffen** | Lässt Geld liegen vs. weite Steals; deine Flats werden zu schwach | Balanciere Value mit ein paar Light-3-Bets |
| **Merged 3-betten vs. einen Nit** | Deine "Value" ist von ihrer premium-only Range dominiert | Geh polarisiert oder folde einfach vs. einen echten Nit |
| **Müll 3-Bet-bluffen (Q7o)** | Keine Blocker, keine Equity — du musst gegen jede 4-Bet folden | Wähle nur Blocker-/Playability-Hände |
| **Zu viel Flatten in den Blinds** | Schlechte Equity-Realisierung OOP; eine schwache, cappbare Range | Bevorzuge eine polarisierte 3-Bet-oder-Fold |

</div>

Bemerke den roten Faden durch alle sechs: Eine gute 3-Bet hat einen *Grund* — Value, die du gecallt haben willst, oder einen Bluff mit Blockern und Backup-Equity. Zufälliges Re-Raisen ohne Plan ist, wie Stacks verschwinden.

---

:::readnext[Weiterlesen]
/de/blog/holdem-strategy | Die 5 Entscheidungen hinter gewinnendem Poker | /images/holdem-strategy-hero.webp
/de/blog/holdem-position-play | Warum Position dir Pots gewinnt | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. Was ist eine 3-Bet im Poker?**

A. Eine 3-Bet ist die erste Re-Raise vor dem Flop — du re-raist einen Spieler, der bereits open-geraist hat. Wenn zum Beispiel jemand auf 3 Big Blinds eröffnet und du es auf 9 machst, hast du 3-gebettet. Sie ist das Hauptwerkzeug, um mit starken Händen einen Pot zu bauen und Druck auf Gegner auszuüben, die zu weit eröffnen.

**Q. Warum heißt es eine 3-Bet?**

A. Weil der Name Bets in der Sequenz zählt, nicht Raises. Der Big Blind ist eine erzwungene erste Bet, der Open-Raise ist die zweite Bet und deine Re-Raise ist die dritte — die "3-Bet". Deshalb heißt es Three-Bet, obwohl es technisch erst die zweite Raise der Hand ist.

**Q. Was ist der Unterschied zwischen einer 3-Bet und einer 4-Bet?**

A. Eine 3-Bet ist die erste Re-Raise (über einen Open-Raise); eine 4-Bet ist die nächste Re-Raise, gemacht über eine 3-Bet. Die Leiter geht also: Open-Raise (2. Bet) → 3-Bet (3. Bet) → 4-Bet (4. Bet) → 5-Bet (meist All-in). Eine 4-Bet repräsentiert eine sehr starke, polarisierte Range.

**Q. Welche Hände solltest du 3-betten?**

A. Teile deine 3-Bets in Value und Bluffs. Der Value-Kern ist QQ+ und AK, erweitert auf JJ, TT, AQs und KQs gegen weitere Opens. Für Bluffs nutze suited Hände mit Blockern und Playability — A5s bis A2s und suited Connectors wie 76s und 65s — keinen zufälligen Offsuit-Müll.

**Q. Wann solltest du 3-betten vs. nur callen (flatten)?**

A. 3-bette, wenn du eine Premium hast, wenn der Opener weit und schwach ist, oder wenn du out of Position bist und einen schlechten Flat vermeiden willst. Flatten ist in Position mit spekulativen Händen in Ordnung (kleine Paare, suited Connectors), wo du billige Flops mit dem Button sehen kannst. Out of Position bevorzuge 3-Betten oder Folden gegenüber Callen.

**Q. Was ist eine Light-3-Bet?**

A. Eine Light-3-Bet (oder 3-Bet-Bluff) ist das Re-Raisen mit einer Hand, von der du nicht erwartest, dass sie die beste ist, in der Hoffnung, den Opener herauszufolden. Die besten Light-3-Bets haben Blocker und Backup-Equity — suited Wheel-Assen wie A5s blocken die Assen und Ass-König deines Gegners und floppen trotzdem Flushes und Straßen, sie gewinnen also selbst dann, wenn sie gecallt werden.

**Q. Was ist der Unterschied zwischen einer linearen und einer polarisierten 3-Bet-Range?**

A. Eine lineare (merged) Range ist ein solider Block deiner besten Hände — genutzt gegen weite, schwache Opens oder wenn du in Position bist. Eine polarisierte Range sind deine stärksten Hände plus Bluffs, mit entfernten und stattdessen geflatteten Mittelhänden — genutzt gegen enge Opens oder aus den Blinds, wo Mittelhände von 4-Bets weggeblasen werden.

**Q. Wie viel solltest du 3-betten?**

A. Etwa das 3-fache des Opens in Position und das 4–4,5-fache out of Position. Gegen einen 3-Big-Blind-Open machst du es also etwa 9bb in Position oder 12bb out of Position. Füge beim Squeezen etwa einen zusätzlichen Open-Raise pro Caller hinzu. 3-bette out of Position nicht klein — das gibt deinem Gegner einen billigen, leichten Call in Position.

**Q. Was ist eine gute 3-Bet-Prozentzahl?**

A. Für einen soliden Spieler ist eine gesamte 3-Bet-Frequenz um 6–10% gesund, mit etwa 8% typisch für einen guten 6-Max-Cash-Spieler. Unter ~4% ist zu eng und face-up; über ~10% ist meist zu aggressiv und bringt dir zu viele 4-Bets und leichte Calls ein. Sie ist aus den Blinds und vom Button natürlich höher als gegen Opens aus früher Position.

**Q. Was ist ein Squeeze Play?**

A. Ein Squeeze ist eine 3-Bet, die nach einem Open-Raise und mindestens einem Caller gemacht wird. Das extra Dead Money im Pot macht ihn profitabel, und er setzt beide Gegner auf einmal unter Druck — den Raiser und den gecappten Flat-Caller. Size Squeezes größer als eine normale 3-Bet und füge etwa einen zusätzlichen Open-Raise pro Caller hinzu.

**Q. Wie reagierst du auf eine 3-Bet?**

A. Du hast drei Optionen: 4-bette deine Premiums (QQ+, AK) plus den gelegentlichen Blocker-Bluff, calle mit Händen, die gut floppen und Equity oder Position haben (Paare, suited Broadways), und folde alles andere. Der Großteil deiner Open-Range sollte gegen eine 3-Bet folden — das ist normal. Gegen Spieler, die selten bluffen, folde noch mehr.

**Q. Was ist eine gute Fold-to-3-Bet-Prozentzahl?**

A. Etwa 55% ist eine vernünftige, grob ausgeglichene Basislinie — du spielst mit dem oberen Teil deiner Range weiter und lässt den Rest gehen. Deutlich mehr zu folden macht dich für Light-3-Bets exploitbar; weit weniger bedeutet, dass du zu weit callst oder 4-bettest. Passe dich dem Gegner an: Folde mehr gegen Spieler, die nie 3-Bet-bluffen.

**Q. Solltest du mit einem Short Stack im Turnier 3-betten oder 4-bet-All-in gehen?**

A. Wenn die Stacks short werden — etwa 10–25 Big Blinds — spielen viele Hände am besten als 3-Bet-All-in (ein Shove) statt als kleine Re-Raise, weil kein Platz ist, um zu raisen und dann gegen eine 4-Bet zu folden. Ein Shove realisiert deine ganze Fold-Equity auf einmal. Stärkere Felder kontern reines Jammen mit winzigen 3-Bets, also mische kleine Nicht-All-in-3-Bets ein, wenn du kannst.

---

## Das 3-Bet-Playbook, kurz gefasst

1. **Eine 3-Bet ist die erste Preflop-Re-Raise** — dritte Bet in der Sequenz, weil der Blind als Bet eins zählt.
2. **Baue zwei Ranges:** einen Value-Kern (QQ+, AK), den du gecallt haben willst, und suited Blocker-Bluffs (A5s und Freunde), gewählt wegen Blockern und Playability.
3. **Size sie ~3x in Position, ~4x out** — und out of Position nie klein.
4. **Passe die Form zur Situation an:** linear vs. weite/schwache Opens, polarisiert vs. enge Opens und aus den Blinds.
5. **Gegen eine 3-Bet folden die meisten Hände** — 4-bette Premiums, calle die spielbaren und folde mehr als "ausgeglichen" gegen Gegner, die nie bluffen.

Bring das 3-Betting richtig hin und du hörst auf, der Spieler zu sein, der mit Assen einfach nur callt und einen winzigen Pot gewinnt. Paare es mit einer disziplinierten [Starthand-Range](/de/blog/holdem-starting-hands-chart), scharfem [Positions](/de/blog/holdem-position-play)-Bewusstsein und dem vollen [Strategie-Rahmen](/de/blog/holdem-strategy), und dein Preflop-Spiel zieht still am Feld vorbei.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Das Framework der 5 Entscheidungen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wo 3-Betting in ein gewinnendes Spiel passt</div>
  </a>
  <a href="/de/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Warum Limpen dich kostet</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Raise oder Fold — nicht einfach callen</div>
  </a>
  <a href="/de/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Deine Position spielen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum 3-Bets in Position besser funktionieren</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthand-Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Welche Hände es überhaupt wert sind zu raisen</div>
  </a>
</div>
`.trim(),
};

export default POST;
