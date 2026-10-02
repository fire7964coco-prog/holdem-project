import type { Post } from "../posts";

/**
 * GTO-Solver-Serie 9 (de) – Q♥T♥7♠, 3-Bet-Pot (BB 3-bettet, BTN callt).
 * Quelle: lib/posts-en/3bet-pot-bet-sizing.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B/§4-B-2
 *   (Lernspot-Ergebnis vom 2026-08-20) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 9 (title fest, Long-Tail «Bet Sizing im 3-Bet-Pot» Q-T-7 – redaktionell).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md (Spotname, Set/Drilling, Flushdraw, Kein Draw).
 * Grenzen: nur erste Flop-Entscheidung des BB · kein Turn-, River- oder Raise-Knoten · ohne Rake.
 * 98,4% = Bildschirmwert (normalizer-gewichtet), Check 0,8% – nicht umrechnen.
 * „Zu teuer“ (EN prices out) gilt nur für die Odds der nächsten Karte; 30 der 38 Combos halten mit zwei Karten über 28,5%.
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Q-T-7: 98,4% mit derselben Size",
  seoTitle: "Bet Sizing im 3-Bet-Pot: 98,4% setzen zwei Drittel des Pots",
  desc: "Auf Q-T-7 im 3-Bet-Pot hatte der Solver zwei Bet Sizes und legte 98,4% der Range in eine. Zwei Drittel Pot sind für 38 von 40 Draws zu teuer – auf eine Karte.",
  tldr: "Auf Q♥T♥7♠ im 3-Bet-Pot bettet der Big Blind in 98,4% der Fälle zwei Drittel des Pots (14,9bb). Die kleine Size bekommt 0,7%, der Check 0,8% – zusammen gerade einmal eine Combo von 73. Ein Board vorher, auf A♦K♠2♥, teilte dieselbe Range ihr Sizing 57,8/42,2 auf. Dass die Aufteilung zusammenbricht, liegt nicht an der Stärke, sondern am Preis. Auf einem so nassen Board entscheidet über die Size, was es den Caller kostet, weiter zu ziehen – und die kleine Bet verlangt dafür nicht genug.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster für den 3-Bet-Pot auf Q-T-7 Two-Tone: Das 13×13-Raster des Big Blinds ist fast ganz in einer Farbe, die Size von zwei Dritteln des Pots steht bei 98,4%",
  tags: ["q-t-7 flop", "bet sizing im 3-bet-pot", "bet sizing poker", "geometrisches bet sizing", "gto", "poker"],
  content: `
Ein Board vorher hat der Big Blind (BB) auf [A♦K♠2♥](/de/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-de.webp") seine ganze Range gebettet und das Sizing fast genau in der Mitte geteilt – 57,8% klein, 42,2% groß.

Dieser Flop ist Q♥ T♥ 7♠. Zwei Herz, und zwischen Dame und Zehn fehlt nur der Bube. **Viel mehr Draws – und die Aufteilung verschwindet:** Zwei Drittel des Pots bekommen ==98,4%==, die kleine Size 0,7%.

„Auf nassen Boards groß setzen“ hat jeder schon gehört. Was niemand dazusagt: wie extrem das wird. Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster.


:::stripe
Spot | BB 3-bettet → BTN callt (heads-up)
Flop | Q♥ T♥ 7♠ (Two-Tone, verbunden)
Pot · Stack | Pot 22,5bb · effektiver Stack 89bb · SPR 4,0
Ergebnis | Zwei Drittel Pot 98,4% – die Aufteilung bricht zusammen
:::

> **Kurze Antwort**
> Der Big Blind bettet **14,9bb, zwei Drittel des Pots, in 98,4% der Fälle**. Die kleine Size mit 0,7% und der Check mit 0,8% sind praktisch null, keine Strategie, nach der du handeln kannst. Der Grund ist der Preis. Ein Drittel des Pots verlangt vom Caller etwa ==19,8%== Equity, was die vier Flushdraw-Combos des Buttons (BTN) mühelos schaffen. Zwei Drittel verlangen etwa ==28,5%==, und Karte für Karte gerechnet **schaffen das nur noch zwei der 40 Draw-Combos des Buttons** – die Combo Draws mit zwölf Outs, die an der kleinen Size locker vorbeikamen, kommen allein mit der nächsten Karte nicht mehr hin. Auf A-K-2 teilte sich das Sizing stattdessen, weil alle 63 Combos ein Paar oder besser waren – eine Range ohne unteren Teil, und keine Draws, die man zur Kasse bitten konnte.

## Unter welchen Bedingungen entstanden diese Zahlen?

**Derselbe 3-Bet-Pot wie beim vorigen Board – nur der Flop hat sich geändert.** Der Big Blind hat auf 11bb ge-3-bettet, der Button hat gecallt, und die beiden sehen Q♥T♥7♠ mit 22,5bb in der Mitte und 89bb dahinter. Diese zwei Zahlen sind der ganze Unterschied zwischen den Single Raised Pots dieser Serie und ihren 3-Bet-Pots.

![Pokertisch mit Flop Q♥T♥7♠: Nur Big Blind und BTN sind noch im Pot (22,5bb), beide mit 89bb Stack – der Big Blind (OOP) hat preflop ge-3-bettet und handelt zuerst](/images/gto-3bp-dynamic-scene-de.webp "Q♥T♥7♠ · BTN eröffnet, SB foldet, BB 3-bettet auf 11bb, BTN callt – der Big Blind handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet → **BB 3-bettet auf 11bb** → BTN callt |
| OOP · IP | Out of Position (OOP, handelt zuerst) = BB (der 3-Bettor) · In Position (IP) = BTN (der Caller) |
| Flop | Q♥ T♥ 7♠ – zwei Herz, also **Two-Tone** |
| Pot · effektiver Stack | Pot 22,5bb · effektiver Stack 89bb (**SPR 4,0**) |
| Bet Sizes | Etwa ein Drittel (7,4bb) und zwei Drittel (14,9bb) des Pots |
| Rake | Nicht berücksichtigt |
| Geprüft | 20.08.2026 |

Die 22,5bb im Pot sind ==11 aus der 3-Bet + 11 aus dem Call + 0,5 des gefoldeten Small Blinds==, und der effektive Stack ist ==100 − 11 = 89bb==. Der Poker-Solver rechnet durchgehend in Big Blinds und zeigt jede Bet zugleich als Betrag und als Anteil am Pot.

## Landen wirklich 98,4% der Range bei zwei Dritteln des Pots?

**Praktisch ja – die Range nutzt eine einzige Size.** 71,9 der 73 Combos nehmen die Size von zwei Dritteln, während sich die kleine Bet und der Check 1,1 Combos teilen. Beide Sizes standen im Spielbaum zur Wahl, und der Solver hat eine davon abgelehnt – das ist also eine Entscheidung, keine Einschränkung.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Bet 14,9bb (66% vom Pot) | **98,4%** | 71,9 |
| Check | 0,8% | 0,6 |
| Bet 7,4bb (33% vom Pot) | 0,7% | 0,5 |

Die Combo-Zahlen sind keine ganzen Zahlen, weil sie **nach Frequenz gewichtet** und nicht zugeteilt sind: Ein paar Hände mischen einen winzigen Anteil Check und kleine Bet in eine sonst reine große Bet. Unter einem Prozent lässt sich eine echte Strategie nicht vom Konvergenzrauschen des Solvers trennen, also lies diese Werte als null, nicht als Anweisung. (Nur der 0,1 Prozentpunkt, der in der Summe der Aktionen fehlt, ist echte Rundung.)

Stell die beiden 3-Bet-Pots nebeneinander, und sie sehen aus wie zwei verschiedene Spiele.

Beide Zeilen sind 3-Bet-Pots mit SPR 4,0 und derselben 3-Bet-Range aus 14 Händen.

| Flop | Ein Drittel | Zwei Drittel | Check |
|---|---|---|---|
| A♦K♠2♥ trocken, Rainbow | **57,8%** | 42,2% | 0,0% |
| **Q♥T♥7♠ Two-Tone, verbunden** | 0,7% | **98,4%** | 0,8% |

## Warum will ein nasses Board eine einzige große Size?

**Weil Bet Sizing im Poker davon abhängt, womit der Gegner noch callen kann – nicht davon, wie stark deine eigene Hand ist.** Zähl die Draws, die der Button halten kann, bepreise jeden davon gegen die beiden Sizes im Spielbaum, und die Wahl ergibt sich von selbst. Auf einem trockenen Board liegt diese Zahl nahe null – deshalb überlebt dort stattdessen die kleine Size.

| Draw | BB (3-Bettor) | BTN (Caller) |
|---|---|---|
| Combo Draw | 2,7% | 3,0% |
| Flushdraw | 2,7% | – |
| Beidseitiger Straßendraw (OESD) | – | **4,5%** |
| Gutshot | **24,7%** | 22,6% |
| Backdoor-Flushdraw | 26,0% | 27,1% |
| Kein Draw | 43,8% | 42,9% |

**Zählt man nur echte Draws, liegen beide Seiten bei 30,1%** – der Big Blind aus 2,7% Combo Draw, 2,7% Flushdraw und 24,7% Gutshot, der Button aus 3,0% Combo Draw, 4,5% OESD und 22,6% Gutshot.

🪶 Backdoor-Flushdraws sind absichtlich ausgenommen. Dafür braucht es zwei aufeinanderfolgende Karten einer Farbe (Herz für eine Hand mit einem Herz, Pik für eine Hand mit zwei Pik neben der 7♠), und das kommt nur in ==(10 ÷ 47) × (9 ÷ 46) = etwa 4,2%== der Fälle an – nichts, wofür eine Bet Size einen Preis verlangen kann. Und die Draw-Tabelle ist eine **andere Achse als die Tabelle der Made Hands** – ein Overpair mit einem Herz landet ebenfalls in der Backdoor-Zeile. Auf dem [trockenen K-High-Flop](/de/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-de.webp") stand in derselben Tabelle 72,2% „Kein Draw“ für den Big Blind und 77,7% für den Button. Ein anderer Planet.

Bettest du ein Drittel des Pots, 7,4bb, braucht der Caller ==7,4 ÷ (22,5 + 7,4 + 7,4) = etwa 19,8%==, um weiterzuspielen. Das bekommt er für diesen Preis, Karte für Karte gemessen.

| Draw, den der Button halten kann | Combos | Outs | Nächste Karte | gegen 1/3 (19,8%) | gegen 2/3 (28,5%) |
|---|---|---|---|---|---|
| Flushdraw plus OESD – K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31,9%== | ✅ | ✅ |
| Flushdraw plus Gutshot – A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25,5%== | ✅ | ❌ |
| OESD – K-J und 9-8 in den anderen Farben | 6 | 8 | ==8 ÷ 47 = 17,0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8,5%== | ❌ | ❌ |

**Nach den Odds für eine Karte sind zwei Drittel des Pots für 38 der 40 Draw-Combos des Buttons zu teuer.** K♥J♥ und 9♥8♥ verbinden einen Flushdraw mit einem OESD, und fünfzehn Outs schaffen **nach direkten Odds jede Size in diesem Spielbaum** – aber das sind ==2 von 40==, und ⚠ **die Outs sind nicht sauber.** Der Big Blind hält genau vier Combos mit zwei Herz – A♥K♥, A♥J♥, A♥5♥, A♥4♥ –, und **jede davon enthält das A♥** (die Herz-Dame liegt auf dem Board, A♥Q♥ und K♥Q♥ kann es also nicht geben). Die Flushdraws des Buttons, deren höchstes Herz auf der Hand ein K♥ bzw. eine 9♥ ist, jagen neun Herz gegen eine Range, deren Flushes **alle Nuts** sind, und bei einer SPR von 4 ist ein Herz am Turn eine Stack-Entscheidung – Reverse Implied Odds in ihrer schärfsten Form. Geh auf ein Drittel des Pots zurück, und die Zahl der Combos über der Schwelle verdoppelt sich auf **vier**, während die 30 Gutshots dahinter den Turn viel billiger zu sehen bekommen. (Made Hands sind eine eigene Frage: Sie spielen wegen ihres Werts weiter, nicht wegen des Preises.)

⚠ „Zu teuer“ meint hier nur die Rechnung für die nächste Karte. Gegen die ganze Range des Big Blinds, mit beiden Karten noch offen, halten 30 dieser 38 Combos weiterhin mehr als 28,5% Equity – die A-K-Gutshots liegen bei 37,6%–42,9%, weil auch ihre Overcards zählen. Was die große Size mit den meisten Draws macht: Sie lässt sie bezahlen, statt sie zum Folden zu bringen.

⚠ **Die Spalte oben bepreist eine Karte. Ein Draw, der beide braucht, ist eine andere Frage – und er zahlt zweimal.** Mit beiden Karten statt einer kommt der Draw mit fünfzehn Outs auf ==etwa 54,1%== und der mit zwölf Outs auf ==etwa 45,0%==; der Straßendraw mit acht Outs erreicht ==31,5%==, und selbst ein Gutshot kommt auf ==16,5%==. Dazu hat der Caller Position, 74,1bb Stack dahinter und die Option zu raisen. **Die große Size setzt auf all das einen Preis.**

Einen Schritt weiter gilt aber auch: **Der Caller kann nicht einfach alles folden.** Gegen 14,9bb in 22,5bb braucht es ==22,5 ÷ (22,5 + 14,9) = 60,2%== der Range, damit ein reiner Bluff keinen Gewinn macht – die Mindestverteidigungsfrequenz (MDF). Die echten Made Hands des Buttons summieren sich nur auf **33,9%** (6,8 Set, 20,3 Top Pair, 6,8 Second Pair).

🪶 Um 60,2% zu füllen, braucht es die Draws allerdings gar nicht – **33,9% Made Hands plus 36,1% Underpairs sind schon 70,0%.** Selbst wenn alle 38 zu teuren Draw-Combos folden, bleiben 71,4% der Range übrig, deutlich darüber. Was die große Size wirklich tut, ist also weniger „die Draws verjagen“ als **die Mitte der Range des Buttons einen schlechten Preis dafür zahlen zu lassen, dass sie bleibt** – diese Underpairs zahlen ein, umgeben von zwei Overcards und jedem Draw auf dem Board.

:::note[⚠ Die MDF behandelt die Bet wie einen reinen Bluff ohne eigene Equity. Das meiste, was hier bettet, ist das nicht – 24,7% der Range des Big Blinds sind ein Gutshot, und ein Gutshot, der später aufgibt, hatte echte Equity, als er gebettet hat. Nimm die 60,2% als Denkhilfe für die Verteidigung, nicht als Quote, die du erfüllen musst.]:::

🪶 Fass das nicht zu „ein Flushdraw callt sowieso“ zusammen. Ein reiner Flushdraw hat neun Outs, ==9 ÷ 47 = 19,1%==, und schafft damit nicht einmal die 19,8% der kleinen Size – und **diese Button-Range enthält null reine Flushdraws** (der Strich in der Vergleichstabelle). Sie hat genau vier Hände mit zwei Herz, und jede davon hat zusätzlich einen Straßendraw – zwei einen Gutshot, zwei einen OESD –, weshalb alle vier in der Zeile Combo Draw stehen. Dass ein reiner Flushdraw bis zum River auf ==etwa 35,0%== kommt, stimmt, ist hier aber nicht der Punkt.

Wie man Outs zählt und Draws bepreist, erklären [Drawing Odds](/de/blog/holdem-drawing-odds) und [Pot Odds](/de/blog/holdem-pot-odds) ausführlicher.

:::pull[Nicht deine Hand wählt die Size. Sondern das, was dein Gegner sich leisten kann zu callen.]:::

:::note[⚠ Gleiche Textur, entgegengesetztes Ergebnis – und beides stimmt, weil die Plätze getauscht sind. In einem **Single Raised Pot** gehört die Spitze eines Two-Tone-Broadway-Flops dem Preflop-Raiser, und der Big Blind, der nur gecallt hat, checkt ihn fast immer – auf [Q♠J♦T♠](/de/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-de.webp") checkt er 99,9%. Standardratschläge wie „auf nassen Boards groß setzen und polarisieren“ im [C-Bet-Leitfaden](/de/blog/holdem-continuation-bet) sind für den Platz des Raisers geschrieben, nicht für den des Callers. **Die 3-Bet tauscht die beiden.** Hier hält der Big Blind die Range, die das Board trifft, also ist er derjenige, der bettet – mit allem. Die Textur allein entscheidet das nie; lies zuerst die Preflop-Aktion.]:::

## Wie sieht geometrisches Bet Sizing bei SPR 4 aus?

**Geometrisches Sizing heißt: einen Anteil am Pot wählen und ihn auf jeder Street wiederholen, sodass die letzte Bet genau im All-in landet.** Bei 22,5bb im Pot und 89bb dahinter muss der Pot nach drei Bets und drei Calls ==22,5 + 2 × 89 = 200,5bb== groß sein, also muss er über drei Streets um den Faktor ==200,5 ÷ 22,5 = 8,91== wachsen. Das ergibt **etwa 54% des Pots, dreimal.**

Die Size, die der Solver hier tatsächlich anbietet, ist größer – und passt trotzdem:

- Flop **14,9bb** → gecallt, der Pot liegt bei 52,3bb, 74,1bb bleiben übrig
- Turn **34,5bb** → gecallt, 39,6bb bleiben übrig
- River **39,6bb** all-in

**==14,9 + 34,5 + 39,6 = 89,0==.** Drei Bets, und der Stack ist weg. Die letzte ist 39,6 in einen Pot von 121,3 – nur ==etwa 33%== –, das sind also nicht „drei große Bets“, sondern zwei große und das, was eben noch übrig ist.

**Und weit weniger Hände können diese Linie planen, als die erste Bet abfeuern.** 98,4% betten den Flop; nach reiner Stärke sind die Kandidaten für alle drei Streets die Sets und Overpairs, ==6 + 12 = 18 Combos==, während die A-High-Combos ganz unten eine Street kaufen und dann neu schauen. ⚠ Das ist aus den Kategorien abgelesen, nicht berechnet: Ohne Turn- oder River-Knoten kann dieser Bildschirm nicht bestätigen, dass die 18 bis zum Ende gehen, und die 15 Top-Pair-Combos keiner der beiden Seiten zuordnen. **Genau bei Top Pair liegt die Entscheidung**, also leg deinen eigenen Plan fest, bevor du bettest.

Das ist es, was eine **SPR von 4,0** wirklich bedeutet. Die Zahl, auf die es ankommt, ist nicht das Geld dahinter, sondern die Zahl der verbleibenden Bets. Eine Bet von 14,9bb drückt die SPR am Turn auf ==74,1 ÷ 52,3 = 1,4==, und ab da ist die nächste Bet eine Stack-Entscheidung, ob du das so geplant hast oder nicht.

Und deshalb geht es bei der großen Size nicht nur um diese Street. Die Equity-Werte der Draws bis zum River sind alle Zahlen nach dem Muster „wenn ich beide Karten sehe“, und bei zwei Dritteln muss der Caller noch zweimal zahlen, um sie zu sehen. Klein anzufangen hätte ihm genau diese Kosten erlassen.

## Warum betten hier Hände ohne Paar?

**Weil 38,4% der Range des Big Blinds A-High sind und das meiste davon auf eine Straße zieht.** Von den 73 Combos sind 28 A-High, und alle 18 Gutshots stecken in diesen 28. Eine Hand ohne Paar ist nicht dasselbe wie eine Hand ohne Equity: vier Outs auf den Broadway, zwei Overcards, und jeder Fold auf die Bet gewinnt den Pot sofort.

| Die 28 A-High-Combos | Combos | Was sie sind |
|---|---|---|
| AK | 16 | **Ein Bube** macht A-K-Q-J-T. 15 sind Gutshots; A♥K♥ hat dazu den Flushdraw und wird zum Combo Draw |
| AJs | 4 | Dasselbe A-K-Q-J-T, aber es braucht **einen König**. 3 sind Gutshots; A♥J♥ ist ein Combo Draw |
| A5s · A4s | 8 | A♥5♥ und A♥4♥ sind die beiden reinen Flushdraws |

Mit Dame und Zehn auf dem Board **ziehen A-K und A-J auf dasselbe A-K-Q-J-T, während sie gerade überhaupt nichts halten.** Bringst du den Gegner zum Folden, gewinnst du sofort; wirst du gecallt, hast du immer noch Outs. Das ist Grund genug zu betten.

JJ und 99 sind der umgekehrte Fall. **Keine der beiden zieht auf irgendetwas.** Buben brauchen zusammen mit Dame und Zehn des Boards noch zwei weitere Karten – einen König und eine Neun, ein Ass und einen König oder eine Neun und eine Acht –, um eine Straße zu machen. Sie haben ein Paar, das nach Stärke aussieht, aber die Hand, die mit einer einzigen Karte alles drehen kann, ist A-K.

## Was hält der Button wirklich?

**Mehr als ein Drittel davon – 36,1% – ist ein Underpair, er läuft also mit einem Paar unter der Dame in ein Board mit zwei Broadway-Karten – unter beiden Broadway-Karten bei jedem Underpair außer JJ, das zwischen ihnen liegt.** Der Rest teilt sich in Hände, die die Dame getroffen haben, Hände, die auf die Herz ziehen, und einen kleinen Rest ohne alles. Eine Zeile in der Tabelle unten bedeutet nicht, was sie zu bedeuten scheint, und es lohnt sich, sie zu finden, bevor du weiterliest.

![Range-Zusammensetzung im 3-Bet-Pot auf Q-T-7 Two-Tone: Overpairs nur auf der Seite des Big Blinds, Second Pair nur auf der Seite des Buttons](/images/gto-3bp-dynamic-ranges-de.webp "Q-T-7 im 3-Bet-Pot · die Overpair-Zeile gehört dem Big Blind, die Second-Pair-Zeile dem Button")

| Kategorie | BB (3-Bettor) | BTN (Caller) |
|---|---|---|
| Set/Drilling (ein Set) | **8,2%** | 6,8% |
| Overpair | **16,4%** | – |
| Top Pair (eine Dame) | 20,5% | 20,3% |
| Second Pair (eine Zehn) | – | **6,8%** |
| Underpair | 16,4% | **36,1%** |
| A-High | **38,4%** | 24,1% |
| K-High oder kein Paar | – | 6,0% |

Zwei Zeilen tragen die ganze Geschichte, und eine davon ist eine Falle.

**Die Overpair-Zeile ist ein echtes Monopol:** 16,4% beim Big Blind, nichts beim Button, weil die Calling-Range dieses Beispiels überhaupt keine **Pocket**-Asse oder -Könige enthält. (Asse und Könige an sich gibt es dort reichlich – 32 Combos A-K und A-J stehen in der A-High-Zeile.) Das ist eine **Preflop-Einstellung, die im Spielbaum festgeschrieben ist**, nichts, was der Solver selbst ermittelt hat – echte Berechnungen behalten manchmal ein paar davon, um die Spitze der Calling-Range zu schützen.

**Die Set-Zeile ist kein Monopol, trotz des höheren Prozentwerts.** 8,2% von 73 Combos sind 6; 6,8% von 133 Combos sind 9. **Der Button hat hier mehr Sets, nicht weniger.** Ein kleinerer Anteil an einer breiteren Range kann trotzdem die größere Zahl sein, und 133 gegen 73 ist breit genug, um das umzudrehen. (Im Panel heißt diese Zeile *Set/Drilling*. Auf einem Flop ohne Paar ist ein Pocket Pair, das eine Boardkarte trifft, ein **Set** – den Unterschied zu Trips erklärt der [Spot mit gepaartem Board](/de/blog/paired-board-strategy).)

Second Pair gehört aus einem strukturellen Grund allein dem Button: **Die 3-Bet-Range des Big Blinds enthält keine Hand mit einer einzelnen Zehn.** Pocket-Zehnen sind zwar drin, aber die floppen ein Set und rutschen eine Zeile nach oben.

Top Pair steht bei 20,5% gegen 20,3%. **Der Unterschied zwischen diesen Ranges liegt darüber und darunter, nie genau dort.**

## Warum liegt die EQR bei 117,8%, obwohl die Equity nur 58,3% beträgt?

**Der Big Blind realisiert out of position das 1,18-Fache seines Anteils am Pot.** Das ist mehr als die 109,6% auf A-K-2 – und **es heißt nicht, dass dies der bessere Spot ist.** Der tatsächliche EV des Big Blinds ist *gesunken*, von 16,99bb dort auf **15,46bb** hier.

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,3% | 41,7% |
| EV (bb) | 15,46 | 7,04 |
| **Equity-Realisierung (EQR)** | **117,8%** | 75,1% |

In einem Pot von 22,5bb sind 58,3% Equity ==22,5 × 58,3% = 13,12bb== wert, und wer 15,46bb einsammelt, kommt auf ==15,46 ÷ 13,12 = 117,8%==.

Der Equity-Abstand ist hier *kleiner* als auf A-K-2, wo er 68,9% gegen 31,1% betrug, und trotzdem ist die Realisierung höher. **Ein Teil davon ist der schrumpfende Nenner.** Die Equity-Realisierung misst gegen deinen eigenen Anteil, also zeigt sich derselbe Vorsprung als größeres Vielfaches, je näher die Equity an 50% rückt. ⚠ Der größere Teil ist aber echt: Gemessen als EV über dem reinen Anteil kam A-K-2 auf ==16,99 − 22,5 × 68,9% = etwa 1,49bb== und dieses Board auf ==15,46 − 22,5 × 58,3% = etwa 2,34bb==, **der Überschuss selbst ist also ebenfalls gewachsen.** Geschrumpft ist der Anteil des Big Blinds am Pot: ==16,99 ÷ 22,5 = 75,5%== auf A-K-2 gegen ==15,46 ÷ 22,5 = 68,7%== hier – eine höhere EQR und „mehr vom Pot nehmen“ sind zwei verschiedene Aussagen.

Die 75,1% des Buttons sind dafür auch kein eigener Beleg – die beiden EVs ergeben zusammen den Pot, also drückt eine Seite über 100% die andere zwangsläufig darunter. Die Zahl beruht auf dem Overpair-Monopol, und was sie kauft, ist die Möglichkeit, den mittleren Händen des Buttons einen schlechten Preis abzuverlangen. Warum Position normalerweise Geld wert ist, erklärt [Spielen in Position](/de/blog/holdem-position-play).

:::note[Jede EQR in dieser Serie ist so zitiert, wie der Solver sie anzeigt. Teilst du die gerundete Equity und den EV selbst, kann eine Nachkommastelle abweichen – das ist Rundung, kein Widerspruch.]:::

## Was ändert sich am Tisch?

Alles Folgende setzt **heads-up, 3-Bet-Pot, SPR 4** voraus. Kommt ein Cold-Caller dazu oder werden die Stacks kürzer, stimmt „die ganze Range betten“ nicht mehr.

- **Wähl die Size nach dem Board, bevor du auf deine Hand schaust.** Nach Handstärke zu wählen heißt groß, wenn stark, und klein, wenn schwach – und das ist lesbar. Der Solver schickt hier 98,4% durch eine einzige Size.
- **Greif im 3-Bet-Pot auf einem Board mit zwei Arten von Draws zuerst zur großen Size.** Ein Drittel des Pots verkündet „19,8% reichen zum Weiterspielen“, und alle vier Flushdraw-Combos des Buttons schaffen das mit Luft (ein reiner Flushdraw mit neun Outs nicht – ==9 ÷ 47 = 19,1%== –, aber solche Hände hält hier nur der Big Blind). ⚠ Leg das aber nicht als „Draws heißt groß betten“ ab – **dieser Artikel zitiert sein eigenes Gegenbeispiel.** Das [8-5-2-Board](/de/blog/3bet-pot-low-board), auf dem 78,3% der Range gar keinen Draw haben, feuert die große Size ebenfalls in 97,8% der Fälle, und dort ist der Grund eine **polarisierte Range** statt Draws. Lies Draw-Dichte und Form der Range zusammen. (Im Single Raised Pot ist dieselbe Textur eine andere Frage – siehe den Hinweis zum Single Raised Pot weiter oben.)
- **A-K ist auf diesem Flop kein Check.** Mit Dame und Zehn auf dem Board ist es ein Gutshot auf den Broadway – ⚠ aber deshalb bettet es nicht: Auf dem oben zitierten niedrigen 8-5-2-Board, wo nichts daran anschließt, geht A-K trotzdem in 95,9%–97,9% der Fälle in die große Size (hier 97,8%–99,9%). „Hat es einen Draw?“ allein entscheidet also nicht, was A-K tut. Die Regel zum Mitnehmen ist nicht „A-K bettet“ oder „A-K checkt“, sondern „schau zuerst auf die Form deiner ganzen Range auf diesem Board“.
- **★Das ist eine Antwort für den Flop, kein Plan.** Eine Bet von 14,9bb bringt die SPR am Turn auf 1,4, die nächste Bet ist also praktisch der Stack. Entscheide vor der Bet, ob diese Hand dorthin geht. **Ein Herz am Turn ist ein zweischneidiges Schwert** – die vier Combo Draws des Buttons kommen an, aber auch deine eigenen vier, und jede davon hält das A♥ –, was auch heißt: Wenn du es hältst, können zwei der vier des Buttons nicht existieren. Was es mit einem A-High ohne Herz macht, ist subtiler: Der Bube, auf den du ziehst, ist nicht weg, er ist **verseucht**, weil ein J♥ jemandem den Flush komplettiert. Eine Size kann nicht alle drei Fälle abdecken.
- **★Leg die Antwort auf einen Raise vorher fest.** Fast die ganze Range zu betten heißt, dass fast die ganze Range einem Raise gegenüberstehen kann, und bei SPR 4 ist ein Raise eine Frage des Stacks. Sets und Overpairs gehen mit. **A-High ohne zwei Herz – 24 dieser 28 Combos – ist der klarste Fold**, denn ein reiner Gutshot hat vier Outs. Die vier Herz-Hände sind die Kandidaten zum Weiterspielen, und A♥K♥ und A♥J♥ sind die stärksten davon, weil sie auch den Gutshot haben. Top Pair ist die eigentliche Entscheidung, und eine Berechnung nur für den Flop beantwortet sie nicht.
- **★Plane vom Platz des Buttons aus, wo die mittleren Paare aufhören.** 36,1% der Calling-Range sind hier ein Underpair. ⚠ Lies die **MDF von 60,2% aber nicht als Call-Quote** – sie entsteht, indem man die Bet als reinen Bluff ohne Equity behandelt, und **45,1% der Betting-Range des Big Blinds sind bereits Made Hands** (8,2 Set, 16,4 Overpairs, 20,5 Top Pair), also ist die Frage, ob die wirklich optimale Verteidigung darüber oder darunter liegt, eine, die **diese Berechnung nicht beantwortet.** **Am Turn gehen diese Paare raus** – eine zweite große Bet foldet die meisten davon, und den Flop zu callen, ohne das entschieden zu haben, ist der Weg, auf dem Stacks versickern. (Der Turn-Knoten ist in dieser Berechnung nicht enthalten – das ist also Einschätzung, keine Zahl.)

:::readnext[Weiterlesen]
/de/blog/3bet-pot-cbet | A-K-2: Die ganze Range bettet | /images/gto-3bp-ace-king-oop-de.webp
/de/blog/3bet-pot-low-board | 8-5-2: Overpairs halten den Druck | /images/gto-3bp-low-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Dynamisches Two-Tone-Board** → **⚡ Ergebnisse ansehen**.

Schau zuerst auf die Aktionsleiste: **Bet 14,9bb (66% vom Pot) · 98,4% · 71,9 Combos**, die beiden anderen Optionen jeweils unter einem Prozent. Stell dann den Wahlschalter **Spieler** auf **IP** (BTN) und schau, was im Panel fehlt – der Button hat **überhaupt keine Zeile Overpair und keine Zeile Flushdraw.** Eine Kategorie mit null wird einfach nicht angezeigt, und diese beiden Lücken sind der größte Teil dieses Artikels.

Öffne dann den **GTO-Trainer** in der Seitenleiste. Er teilt dir eine Hand nach den echten Range-Gewichten aus und bewertet deine Aktion nach dem EV-Verlust. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

Ein hilfreicher Kontrast ist das A-High-Board aus dem vorigen Spot. A♦K♠2♥ ist Rainbow, also **gibt es dort für niemanden einen Flushdraw**, und die ganze Range des Big Blinds ist dort ein Paar oder besser. Hier steht die Zeile „Kein Draw“ nur bei 43,8%. ⚠ Die übrigen 56,2% sind aber nicht alle *lebendig* – 26,0 Prozentpunkte davon sind **Backdoor**, brauchen zwei aufeinanderfolgende Karten einer Farbe (Herz, oder Pik bei den Händen mit zwei Pik) und kommen in etwa 4,2% der Fälle an. Echte Draws machen 30,1% aus. **Diese eine Zeile ist aber nicht die ganze Erklärung** – der [8-5-2-Flop](/de/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-de.webp") später in dieser Serie hat 78,3% „Kein Draw“ und feuert trotzdem in 97,8% der Fälle die große Size. Draw-Dichte und Form der Range reden beide mit.

## FAQ

**Q. Wie viel solltest du beim Poker setzen?**

A. Geh von dem aus, was das Board deinem Gegner gibt, nicht von dem, was du hältst. Auf Q-T-7 mit zwei Herz, wo Flush und Straße noch kommen können, nimmt der Solver in 98,4% der Fälle zwei Drittel des Pots. Auf einem trockenen A-K-2 bevorzugt dieselbe Range mit 57,8% ein Drittel des Pots. Der Test ist immer, welchen Preis die Hände bekommen, die sich noch verbessern können.

**Q. Warum auf einem nassen Board groß setzen?**

A. Um die Draws bezahlen zu lassen. Zwei Drittel des Pots verlangen vom Caller etwa 28,5% Equity, und nach den Odds für die nächste Karte schaffen das nur zwei seiner 40 Draw-Combos – K♥J♥ und 9♥8♥ mit fünfzehn Outs und 31,9%. Alles andere bleibt mit einer Karte darunter, auch die Combo Draws mit zwölf Outs bei 25,5% – mit beiden Karten noch offen halten die meisten dieser Draws allerdings weiterhin mehr als 28,5%, der Preis lässt sie also bezahlen, statt sie zum Folden zu bringen. Geh auf ein Drittel des Pots zurück, und die Schwelle fällt auf 19,8%, was die Zahl der Combos darüber auf vier verdoppelt. Draws sind aber nicht der einzige Weg zur großen Size – wo sich die Range ohne Mitte in stark und schwach teilt, erreicht ein [trockenes Board wie 8-5-2](/de/blog/3bet-pot-low-board) ebenfalls 97,8%.

**Q. Was ist geometrisches Bet Sizing?**

A. Einen Anteil am Pot wählen und ihn auf jeder Street wiederholen, sodass die letzte Bet genau im All-in landet. Am wichtigsten ist das bei niedriger SPR, wo du eher wählst, wie viele Entscheidungen übrig bleiben, als wie viel Geld. Die Rechnung für diesen Spot – und warum die Size, die der Solver tatsächlich nutzt, größer ist als die geometrische – steht oben.

**Q. Solltest du stattdessen eine Overbet nehmen?**

A. Dieser Spielbaum bot nur ein Drittel und zwei Drittel an, eine Overbet stand also nie zur Wahl. Gibst du eine frei, würden sich die 98,4% wahrscheinlich zwischen zwei Dritteln und der Overbet neu verteilen, weil dieselbe Logik – den Draws den schlechtesten möglichen Preis abverlangen – in diese Richtung drückt. Behandle die genaue Frequenz als Eigenschaft dieses Spielbaums, nicht als allgemeingültige Zahl.

**Q. Kannst du hier A-K ohne Paar betten?**

A. Ja. Ein einzelner Bube komplettiert A-K-Q-J-T, es ist also ein Gutshot, und 15 der 18 Gutshot-Combos des Big Blinds sind A-K. Folds gewinnen den Pot sofort, Calls lassen dir noch Outs. Was es zur Bet macht, ist die Verbindung zum Board, nicht die zwei hohen Karten.

**Q. Was, wenn dein Gegner Draws zu jedem Preis callt?**

A. Dann verschwindet die Fold Equity (der Wert, den dir seine Folds bringen), und diese Zahlen beschreiben deinen Gegner nicht mehr – sie setzen eine optimale Verteidigung voraus. Gegen eine Calling Station verschieb dein Spiel Richtung Value und streich die Bluffs, aber behalte die große Size. Dieser Spieler zahlt einen schlechten Preis, um zu ziehen, und genau aus diesem schlechten Preis kommt dein Geld.

**Q. Gelten diese Zahlen in meinem Spiel?**

A. Als Ausgangspunkt, wenn die Bedingungen passen. Ändere die 3-Bet-Range, die Stacktiefe oder die Sizes im Spielbaum, und die Frequenzen bewegen sich mit; Rake ist hier nicht berücksichtigt. Die Struktur – ein nasses Board im 3-Bet-Pot bei SPR 4 will eine große Size – ist der Teil, der sich übertragen lässt. Beachte, dass **der Rang des Boards so viel Arbeit leistet wie seine Nässe**: Q-T-7 ist Broadway genug, dass eine 3-Bet-Range es noch trifft, und das gilt nicht für jeden nassen Flop.
`.trim(),
};

export default POST;
