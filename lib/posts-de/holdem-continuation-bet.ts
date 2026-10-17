import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation Bet (C-Bet): Wann du am Flop feuerst, wie viel und wann du checkst",
  seoTitle: "C-Bet im Poker: warum „jeden Flop feuern“ Chips kostet",
  desc: "Was eine C-Bet ist, welche Flops du c-betten und welche du checken solltest, exaktes Sizing – klein auf trockenen, groß auf wet Boards – und wie oft du feuerst.",
  tldr: "Eine Continuation Bet (C-Bet) ist ein Einsatz am Flop vom Spieler, der preflop geraist hat. Die moderne Regel ist nicht 'jeden Flop c-betten' – sondern die Flops zu setzen, die deine Range favorisieren (hohe, trockene Boards wie K-7-2) klein und oft, und die zu checken, die deinen Gegner favorisieren (niedrige, verbundene Boards wie 7-6-5). Setze klein – etwa ein Drittel Pot – auf trockenen Boards, groß – zwei Drittel oder mehr – auf wet Boards, c-bette weniger out of Position, wenn du der alleinige Raiser warst (als 3-Better out of Position kippte es auf den drei Boards, die wir gelöst haben, auf über 97%), und deutlich weniger multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-10-17",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "18 Min.",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Ein Pokerspieler setzt Chips auf einen frisch ausgeteilten Flop, nachdem er preflop geraist hat – der klassische Continuation-Bet-Moment auf dem grünen Filz",
  tags: ["continuation bet", "c-bet poker", "was ist eine c-bet", "c-bet sizing", "c-bet frequenz", "wann c-betten", "wann nicht c-betten", "c-bet out of position", "multiway c-bet", "delayed c-bet"],
  content: `
In meinen ersten paar Jahren war „C-Bet“ der einzige Flop-Plan, den ich hatte. Ich hatte preflop geraist, also bettete ich den Flop. Jedes Mal. Ass-hohes Board, ich bette. Ein Board voller Straßen und Flushes, das den Typen, der mich gecallt hatte, offensichtlich zerlegt hatte? Ich bettete trotzdem – und wurde Pot um Pot geraist, gecallt und check-geraist. Ich dachte, C-betten *sei* die Strategie. Es stellt sich heraus: Die C-Bet ist ein Skalpell, und ich schwang sie wie einen Hammer.

Eine **Continuation Bet (C-Bet)** ist ein Einsatz am Flop vom Spieler, der davor geraist hat. Es ist der häufigste Einsatz im Poker – und der am schlimmsten überstrapazierte. Der alte Rat lautete „c-bette fast jeden Flop“. Moderne, solver-geprüfte Strategie sagt etwas Nützlicheres und Profitableres: ==Setze die Flops, die *deine* Range favorisieren, und checke die, die die Range deines Gegners favorisieren.== Dies ist das komplette C-Bet-Playbook – welche Flops, wie oft, wie viel, in und out of Position, multiway und wann Checken der gewinnende Zug ist. Es ist die Flop-Hälfte einer gewinnenden [Texas-Hold'em-Strategie](/de/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp").

---

### Die C-Bet in Zahlen

:::stripe
~2 von 3 | Wie oft eine Hand den Flop verfehlt
⅓ Pot | Die kleine „Range-Bet“-Größe auf trockenen Boards
55–70% | Eine gesunde Gesamt-C-Bet-Rate am Flop
Check | Oft der beste Zug, kein Zeichen von Schwäche
:::

---

## Was ist eine Continuation Bet (C-Bet) – und wer darf sie machen?

**Eine Continuation Bet ist ein Einsatz am Flop von dem Spieler, der vor dem Flop der Aggressor war** – die letzte Person, die geraist hat. Du „setzt“ die Story von Stärke fort, die du preflop begonnen hast. Entscheidend: ==du musst den Flop nicht getroffen haben, um zu c-betten==; ein großer Anteil guter C-Bets wird mit Händen gemacht, die den Flop komplett verfehlt haben.

Der Grund, warum es funktioniert, ist eine simple Statistik: **zwei ungepaarte Hole Cards paaren sich am Flop etwa zwei Drittel der Zeit nicht (67,6%).** Wenn du also bettest, hat dein Gegner oft ebenfalls verfehlt – und viele dieser Hände folden. Du bettest nicht, weil du stark bist; du bettest, weil *er wahrscheinlich schwach ist* und du derjenige warst, der die Führung beansprucht hat.

Sobald du die Flop-C-Bet kennst, folgt der Rest der „Barreling“-Leiter:

- **Delayed C-Bet** – du *checkst* den Flop und bettest dann den Turn. Ideal für Pots, in denen der Flop deinen Gegner favorisierte, der Turn aber die Dinge ändert.
- **Double Barrel** – du c-bettest den Flop und bettest am Turn *erneut*.
- **Triple Barrel** – du bettest alle drei Streets: Flop, Turn und River. Die aggressivste Line, für starken Value oder einen gut gewählten Bluff mit Blockern.

Wenn die zugrunde liegenden [Betting-Aktionen](/de/blog/holdem-betting-actions) Check, Bet und Raise sich noch schwammig anfühlen, fang dort an. Ansonsten lass uns den Fehler korrigieren, den fast jeder macht.

---

## Warum funktioniert „c-bette einfach jeden Flop“ nicht mehr?

Wenn du Poker vor den Solvern gelernt hast, wurde dir gesagt, auf den *meisten* Flops etwa zwei Drittel Pot zu c-betten. Es funktionierte eine Weile, weil Gegner zu oft foldeten. Dann lernten alle, sich zu wehren – floaten, check-raisen und mitgehen bis zum Showdown – und pauschales C-betten wurde zum Leak.

Das Entscheidende, was moderne Strategie tatsächlich sagt, weil man es leicht falsch versteht: **es ist NICHT „überall weniger c-betten.“** Es ist ein *Split*:

- Auf Boards, die dich favorisieren, bette **klein und sogar noch öfter** als der alte Rat – manchmal deine gesamte Range.
- Auf Boards, die deinen Gegner favorisieren, **checke viel öfter** – und bette größer und selektiver, wenn du bettest.

Das Konzept dahinter ist der ==Range Advantage==: wessen Gesamt-Range auf diesem konkreten Flop stärker ist. Als Preflop-Raiser hältst du mehr hohe Karten und Overpairs, also **gehören hohe, trockene Boards dir** – und Boards voller mittlerer verbundener Karten gehören dem Spieler, der gecallt hat. Beherrsche diese eine Idee, und du bist jedem „einfach c-betten“-Spieler am Tisch voraus.

Und der Range Advantage ist nicht die ganze Geschichte – kommt die Position dazu, wird der Effekt extrem. Auf A-7-2 Rainbow checkt der Caller laut Poker-Solver 98,2% seiner Range, Top Pair eingeschlossen – seine Range-Equity liegt mit 45,1% zu 54,9% nur moderat hinten, doch out of Position wird aus diesem Rückstand ein fast vollständiger Check. Die ganze Auswertung findest du unter [Top Pair und trotzdem Check](/de/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-de.webp").

> **Deine eigene Hand aus diesem Spot analysieren** – Das A-7-2-Beispiel oben ist ein Pot mit BTN-Open und BB-Call. Hast du dieselbe Situation selbst gespielt, öffne im Solver die [Handanalyse](https://solver.holdemmaster.com/?view=hand-review&lang=de), stell die Situation (**Open · Call**, BTN und BB) und **Deine Position** ein, wähle **Deine 2 Karten** und die **3 Flopkarten** und tippe die Aktionen in der tatsächlichen Reihenfolge an, auch die deines Gegners. Dann siehst du, ob diese Entscheidung als **Beste Wahl**, **Vertretbar** oder **Spielzug prüfen** eingestuft wird. Die Handanalyse nutzt die Preflop-Charts der App (Online-Cash, 6-max, 100bb), daher können die Zahlen leicht vom Beispiel oben abweichen, und für Pubspiele oder Turniere ist sie möglicherweise ungeeignet.

---

## Welche Flops solltest du c-betten? Es geht um die Board-Textur

> **Kurze Antwort**
> Die Board-Textur entscheidet, nicht deine zwei Karten. Hohe, trockene und unverbundene Flops gehören deiner Range als Raiser – dort bettest du oft und klein. Niedrige, verbundene Flops treffen die Calling-Range deines Gegners; dort checkst du häufiger und bettest nur selektiv groß. Gepaarte Boards liegen leicht auf deiner Seite, monotone Boards deckeln beide Ranges.

![Ein trockener, unverbundener J-7-2-Rainbow-Flop auf dem grünen Filz mit einem kleinen Stapel Chips davor gesetzt, die Art hoher Kartenboard, das dem Preflop-Raiser gehört](/images/holdem-cbet-dry-board.webp "Hohe, trockene, unverbundene Flops wie dieses J-7-2 favorisieren den Preflop-Raiser – die klassischen kleinen C-Bet-Boards mit hoher Frequenz")

Das ist das Herzstück des C-bettens. Bevor du über Sizing oder Frequenz nachdenkst, stell eine Frage: **hat dieser Flop meine Range getroffen oder die meines Gegners?** Hier die Übersicht:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop-Typ | Beispiel | Wen er favorisiert | In Position | Warum |
|:---|:---|:---|:---|:---|
| **Hoch, trocken, unverbunden** | K‑7‑2, A‑8‑3 | **Dich (Raiser)** | Bette **oft & klein** (⅓) | Du hast mehr Top Pairs & Overpairs; er hat verfehlt |
| **Niedrig, verbunden** | 7‑6‑5, 9‑8‑6 | **Caller** | **Checke öfter**; bette groß & selektiv, wenn du bettest | Trifft seine Suited Connectors und kleinen Paare |
| **Gepaart niedrig** | 8‑8‑3, 5‑5‑2 | **Dich (leicht)** | Bette **oft & klein** | Keiner hat oft Trips; deine Overcards/Overpairs führen |
| **Monotone** | K♠9♠4♠ | Gemischt – Vorsicht | Bette **weniger, kleiner** | Ein fertiger Flush deckelt beide Ranges; geh günstig |
| **Two-tone & wet** | Q♥J♥7♣ | Caller-lastig | **Polarisiere:** groß mit Value/Draws, checke Air | Massig Draws – kassier sie ab oder steig aus |

</div>

Zwei verwandte Ideen erledigen hier die ganze Arbeit:
- **Der Range Advantage entscheidet, wie *oft* du bettest.** Mehr deiner Range ist auf diesem Board stark → bette öfter.
- **Der Nut Advantage entscheidet, wie *groß* du bettest.** Du hältst mehr der absolut besten Hände (Sets, Straßen) → bette größer.

Der subtile Teil: du kannst das eine ohne das andere haben. Auf A‑8‑3 hast du weit mehr Top Pairs (Range Advantage), aber fast niemand hat ein Set, also **bettest du oft, aber klein**. Auf einem Board, auf dem du weit mehr Sets und Overpairs hältst, **bettest du groß**. Bring diese zwei Hebel in Ordnung, und C-Bet-Sizing hört auf, Ratesache zu sein.

---

## Wie oft c-bettet ein Solver auf welchem Board-Typ?

**Im Single-Raised Pot, in dem der Button eröffnet und der Big Blind callt, c-bettet der Button laut Solver nach dem Check des Big Blinds 54,7% seiner gesamten Range.** Hinter diesem Durchschnitt steckt eine große Spannweite: von 43,5% auf A-High-Flops bis 67,8% auf gepaarten Flops – und dazu mit unterschiedlichen Hauptgrößen. Gepaarte und K-High-Flops setzen vor allem auf die Bet über ein Drittel Pot; A-High-, T-/9-High- und niedrige Flops nutzen sogar häufiger die 75%-Bet. Die Tabellen unten fassen alle 1.755 vorberechneten Flops nach Board-Typ zusammen.

> **So wurden diese Zahlen berechnet** – Ergebnisse aus dem [GTO-Solver von HoldemMaster](/de/solver) für BTN-Open gegen BB-Call über 1.755 Flops (nach gleichwertigen Farben zusammengefasst) – 100bb Stacks · Flop-Bets 33%/75% · Turn- und River-Bets 60% · Raises 60% · kein Rake · 0,3% Zielfehler. Eingangs-Ranges = die Preflop-Charts des Solvers (Konsens-Ranges auf Basis öffentlicher Quellen). Es ist eine Heads-up-Berechnung und lässt sich daher nicht direkt auf Multiway-Pots übertragen.

### Nach höchster Karte – die C-Bet des Buttons nach dem Check des BB

Von allen 22.100 möglichen Flops ist Q- oder J-High der häufigste Typ (23,5%), und am seltensten c-bettet der Button auf A-High (43,5%).

| Board-Typ | Anteil der Flops | C-Bet gesamt | 33% | 75% |
|:---|:---:|:---:|:---:|:---:|
| **Gepaart** | 17,2% | **67,8%** | 60,6% | 7,2% |
| **A-High** | 19,1% | **43,5%** | 16,3% | 27,2% |
| **K-High** | 15,9% | **57,2%** | 40,8% | 16,4% |
| **Q-/J-High** | 23,5% | **52,1%** | 27,5% | 24,7% |
| **T-/9-High** | 14,2% | **53,2%** | 19,8% | 33,4% |
| **Niedrig (8-High oder tiefer)** | 10,1% | **57,7%** | 23,8% | 33,8% |
| **Alle Flops** | 100% | **54,7%** | 31,7% | 23,0% |

Selbst innerhalb eines Typs schwankt die C-Bet gesamt von Flop zu Flop stark. Das sind pro Typ die Flops, auf denen der Button am wenigsten und am meisten bettet:

| Board-Typ | Seltenste C-Bet | Häufigste C-Bet |
|:---|:---|:---|
| **Gepaart** | A♣Q♦Q♣ 37,7% | 7♥7♦7♣ 97,1% |
| **A-High** | A♣9♣2♣ 28,5% | A♥7♦2♣ 59,0% |
| **K-High** | K♣Q♣2♣ 32,5% | K♥7♦2♣ 90,2% |
| **Q-/J-High** | Q♥J♦8♣ 35,5% | Q♥7♦2♣ 84,7% |
| **T-/9-High** | T♣9♦7♣ 38,5% | T♥6♦2♣ 73,5% |
| **Niedrig (8-High oder tiefer)** | 8♦7♦4♣ 46,4% | 7♥6♦2♣ 76,3% |
| **Alle Flops** | A♣9♣2♣ 28,5% | 7♥7♦7♣ 97,1% |

Genau diese Spannweite innerhalb eines Typs ist die eigentliche Lektion der Tabelle. Ein trockenes K-High-Board wie K♥7♦2♣ wird zu 90,2% gesetzt, das monotone K♣Q♣2♣ dagegen nur zu 32,5%. „Es ist K-High, also bette ich“ reicht nicht; du musst **Höhe, Farben und Verbundenheit zusammen** lesen. Auf gepaarten Boards läuft fast die gesamte C-Bet über die kleine Größe (60,6% der 67,8%) – das passt zur Regel „klein auf trockenen Boards“ aus dem Sizing-Abschnitt unten. Nur bei A-High widersprechen die Daten der Faustregel: Über den ganzen Typ ist die 75%-Bet häufiger als die 33%-Bet (27,2% zu 16,3%). Und es sind nicht die monotonen Flops, die diesen Schnitt nach oben ziehen – auch A-High-Rainbow-Flops allein nutzen häufiger die große Bet (25,9% zu 18,8%). Ein einzelnes Board wie A-7-2 kann trotzdem anders sizen als der Durchschnitt seines Typs.

### Nach Farben und Verbundenheit – dieselbe Berechnung auf einer anderen Achse

| Board-Typ | Anteil der Flops | C-Bet gesamt | 33% · 75% |
|:---|:---:|:---:|:---:|
| **Rainbow** (drei Farben) | 39,8% | **58,8%** | 36,1% · 22,7% |
| **Two-Tone** (zwei Karten einer Farbe) | 55,1% | **52,6%** | 28,7% · 23,9% |
| **Monoton** (drei Karten einer Farbe) | 5,2% | **44,2%** | 29,2% · 15,1% |
| **Verbunden** (ungepaart · alle drei innerhalb von fünf Rängen) | 18,5% | **49,1%** | 18,8% · 30,3% |
| **Unverbunden** (ungepaart · der Rest) | 64,3% | **52,8%** | 27,7% · 25,1% |

Je mehr sich die Farben sammeln, desto weniger c-bettet der Button (58,8% → 52,6% → 44,2%), und verbundene Boards werden seltener gesetzt, dafür mit der 75%-Größe als Haupt-Bet. „Verbunden“ heißt hier: drei verschiedene Ränge, die in fünf aufeinanderfolgende Ränge passen (höchste minus niedrigste Karte ergibt 4 oder weniger, und das Ass darf auch tief zählen: A-2-4 ist verbunden, A-7-2 nicht). Gepaarte Boards (17,2%) fallen aus der Einteilung verbunden/unverbunden heraus; ihre Werte sind dieselben wie in der ersten Tabelle.

### Höchste Karte × Farben – C-Bet gesamt

| Board-Höhe | Rainbow | Two-Tone | Monoton |
|:---|:---:|:---:|:---:|
| **Gepaart** | 70,3% | 65,3% | – |
| **A-High** | 44,6% | 43,6% | 35,4% |
| **K-High** | 63,3% | 54,9% | 40,8% |
| **Q-/J-High** | 55,7% | 50,6% | 44,2% |
| **T-/9-High** | 57,9% | 50,4% | 49,7% |
| **Niedrig (8-High oder tiefer)** | 60,6% | 55,5% | 59,1% |

In allen sechs Zeilen **liegt Rainbow über Two-Tone.** Am deutlichsten bei K-High: Rainbow 63,3% gegen Two-Tone 54,9%, ein Abstand von 8,4 Prozentpunkten – K♥9♠6♣ und K♥9♥6♣ sind also verschiedene Boards, sobald zwei Herzen liegen. Einen gepaarten monotonen Flop kann es nicht geben, weil zwei Karten desselben Rangs nie dieselbe Farbe haben. Niedrig-monoton (59,1%) ist die einzige monotone Zelle über ihrem Two-Tone-Nachbarn, und fast die gesamte C-Bet dort läuft über die 33%-Größe (57,6%).

### Wie reagiert der Big Blind auf eine C-Bet?

**Gegen eine 33%-C-Bet**

| Board-Typ | Fold | Call | Raise |
|:---|:---:|:---:|:---:|
| **Gepaart** | 34,0% | 48,5% | 17,6% |
| **A-High** | 36,4% | 54,5% | 9,1% |
| **K-High** | 32,3% | 55,2% | 12,5% |
| **Q-/J-High** | 29,5% | 57,0% | 13,5% |
| **T-/9-High** | 28,0% | 57,4% | 14,6% |
| **Niedrig (8-High oder tiefer)** | 29,4% | 52,6% | 18,0% |
| **Alle Flops** | 32,1% | 53,3% | 14,6% |

**Gegen eine 75%-C-Bet**

| Board-Typ | Fold | Call | Raise |
|:---|:---:|:---:|:---:|
| **Gepaart** | 48,9% | 38,1% | 13,0% |
| **A-High** | 50,4% | 46,0% | 3,6% |
| **K-High** | 49,7% | 45,1% | 5,1% |
| **Q-/J-High** | 47,7% | 45,6% | 6,7% |
| **T-/9-High** | 46,3% | 44,7% | 9,0% |
| **Niedrig (8-High oder tiefer)** | 46,2% | 40,8% | 13,0% |
| **Alle Flops** | 48,1% | 44,4% | 7,5% |

Eine 33%-Bet ist als reiner Bluff break-even, wenn sie ==0,33 ÷ 1,33 = etwa 24,8%== der Zeit einen Fold bekommt – der Big Blind foldet im Schnitt aber 32,1%; gegen eine 75%-Bet (==0,75 ÷ 1,75 = etwa 42,9%==) foldet er 48,1%. Am Flop verteidigt der Big Blind also nicht so viel, wie die Mindestverteidigungsfrequenz (MDF) nahelegen würde. Gegen die 33%-C-Bet sind Check-Raises auf niedrigen Boards (18,0%) und gepaarten Boards (17,6%) am häufigsten und auf A-High am seltensten (9,1%) – einen Check-Raise auf einem niedrigen Flop, Hand für Hand durchgerechnet, findest du unter [wenn der Big Blind einen niedrigen Flop check-raist](/de/blog/low-board-check-raise).

In den Raiser hineinzusetzen (eine Donk Bet) kommt beim Big Blind insgesamt nur auf 2,4% (1,7% mit 33% plus 0,7% mit 75%). Nach Farben aufgeteilt liegt monoton mit 7,2% am höchsten (92,8% Check); nach Höhe und Farben zusammen erreichen niedrige monotone Flops 9,2%. Die Ausnahme-Boards, auf denen der Big Blind selbst setzen sollte, behandelt der [Donk-Bet-Guide](/de/blog/donk-bet-strategy).

> **So liest du diese Tabellen** – Jede Zelle mittelt ihre Flops, gewichtet danach, wie oft sie tatsächlich fallen (alle Farbvarianten eines Flops zusammengezählt). Bei einem Spot, der nicht die erste Aktion ist – etwa der Button nach dem Check des Big Blinds –, wird jeder Flop zusätzlich danach gewichtet, wie oft dieser Spot auf ihm erreicht wird, und innerhalb eines Flops jede Hand nach der Wahrscheinlichkeit, sie zu halten und in diesen Spot zu gelangen. Die Flops unter „Seltenste C-Bet“ und „Häufigste C-Bet“ stehen jeweils für ihre ganze Farbgruppe (A♣9♣2♣ = jeder monotone A-9-2-Flop). Wegen Rundung kann eine Zeile 99,9–100,1 ergeben.

---

## Wie oft ist eine C-Bet zu oft? (Frequenz)

> **Kurze Antwort**
> Zu oft ist sie in dem Moment, in dem dein Gegner sie ausrechnen kann. Über alle Boards hinweg landet ein solider Spieler bei **55–70%** – aber der Durchschnitt ist nicht die Anweisung: Er entsteht daraus, dass du auf manchen Flops fast immer bettest und auf anderen fast nie. Wer stattdessen überall dieselbe Frequenz spielt, wird von aufmerksamen Gegnern geraist.

Es gibt keinen einzelnen „korrekten“ C-Bet-Prozentsatz – wer dir eine Zahl gibt, verkauft dir einen Leak. Die Frequenz schwankt mit Position, Board und wie viele Spieler im Pot sind. Hier die Schnellreferenz:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Grobe C-Bet-Frequenz | Anmerkung |
|:---|:---:|:---|
| **In Position, heads-up, trockenes K- oder Q-High-Board** | **70%+** (klein) | Klassische „Range-Bet“ – bette den Großteil deiner Range, winzig. Trockene **A-High**-Boards werden weit seltener gebettet (A♥7♦2♣ 59,0% in der Solver-Tabelle oben) |
| **In Position, heads-up, wet Board** | **~50–60%** | Polarisierter – Value und Draws betten, Air checkt |
| **Out of Position, heads-up (Single-Raised Pot, du warst der Raiser)** | **~30–45%** | Checke weit öfter, um deine Checking-Range zu schützen. Als OOP-*3-Better* dreht es sich um: über 97% auf allen drei Boards, die wir gelöst haben – auf Q♥T♥7♠ und 8♦5♣2♠ fast alles mit zwei Drittel Pot, auf A♦K♠2♥ aber überwiegend mit einem Drittel Pot (57,8%); siehe das [Positions-Playbook](/de/blog/holdem-position-play) |
| **Multiway (2 Gegner)** | **~50% oder weniger** | Wahrscheinlich hat jemand getroffen – zieh zusammen |
| **Multiway (3+ Gegner)** | **Nur starke Hände & gute Draws** | Fold Equity ist im Grunde weg |

</div>

Als Gesundheitscheck: die Gesamt-C-Bet-Rate am Flop eines soliden Spielers landet über alle Boards hinweg irgendwo bei **55–70%**. Wenn du über ~85% der Flops c-bettest, fährst du auf Autopilot und gute Spieler bestrafen es; unter ~40% bist du zu ehrlich und bettest nur, wenn du triffst. Aber denk daran – diese Zahl ist ein *Aggregat*, kein Ziel. Du kommst dorthin, indem du die richtigen Boards bettest, nicht indem du eine Quote erfüllst.

Ein konkreter Anhaltspunkt: Im Heads-up-Spot BTN gegen BB aus dem Solver oben liegt die durchschnittliche C-Bet des Buttons nach dem Check des Big Blinds bei **54,7%**, und einzelne Flops reichen von 28,5% (A-9-2 monoton) bis 97,1% (7-7-7). Lerne die Frequenz nach Board-Typ, nicht als eine Zahl, die du treffen musst.

---

## Wie groß sollte eine C-Bet sein? (Sizing)

Das Sizing folgt direkt aus der Board-Textur. Zwei Gänge decken fast alles ab:

- **Klein – etwa ein Drittel des Pots** – auf trockenen, statischen Range-Advantage-Boards, besonders in Position. Die Range deines Gegners ist schwach und verbessert sich kaum, also musst du keine Draws abkassieren; ein kleiner Einsatz bringt sein ganzes Air bereits in eine schwierige Lage und hält gleichzeitig schlechtere Hände drin, die dich bezahlen. Ein größerer Einsatz foldet hier nur die Hände raus, die du *callen* lassen willst.
- **Groß – zwei Drittel Pot oder mehr** – auf wet, dynamischen Boards und immer, wenn deine Range polarisiert ist. Jetzt musst du die Flushes und Straight Draws abkassieren (ihre Equity verweigern) und den Pot mit deinen starken Händen aufbauen. Ein kleiner Einsatz lässt Draws zu billig callen.

Setz echte Zahlen dahinter. Sagen wir, der Pot ist ==$30== am Flop:

- Eine **Ein-Drittel-Pot**-C-Bet sind ==$10== – deine Range-Bet für trockene Boards.
- Eine **Zwei-Drittel-Pot**-C-Bet sind ==$20== – deine Größe für wet Boards, um die Draws abzukassieren.

In **Turnieren** tendiere eine Spur kleiner: Die kleine Size bleibt ein Drittel, die große ist aber häufiger **halber Pot** als zwei Drittel – weil dein Stack kostbar ist – im Freezeout kannst du nicht nachladen, und selbst ein Re-Entry kostet ein neues Buy-in. Was auch immer du wählst, binde die Größe ans Board, nicht an Gewohnheit.

Wie weit trägt die Faustregel „groß auf wet Boards“ wirklich? Gibt man dem Poker-Solver auf Q♥T♥7♠ im 3-Bet-Pot zwei Sizes, legt er [98,4% seiner Range in die Zwei-Drittel-Bet](/de/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-de.webp") – und der Grund ist ein Preis, den du ausrechnen kannst, kein Gefühl.

---

## Wie c-bettest du out of Position?

![Ein Pokerspieler, der als Erster out of Position handelt, die Finger auf dem Filz neben seinen Chips, während ein Gegner im Schatten hinter ihm wartet](/images/holdem-cbet-oop.webp "Out of Position handelst du als Erster ohne Information, also checkst du weit öfter und c-bettest eine engere, stärkere Range")

C-betten ist **out of Position** in einem Single-Raised Pot viel schwieriger – wenn du auf jeder Street als Erster handeln musst, ohne zu wissen, was dein Gegner tun wird (als 3-Better dreht der Range-Vorteil das um, siehe das [Positions-Playbook](/de/blog/holdem-position-play)). Zwei Anpassungen:

1. **C-bette seltener.** Ohne Position kannst du den Pot nicht so gut kontrollieren oder deine Equity realisieren, also checkst du weit öfter – sogar Hände, die in Position automatische Bets wären. Auf manchen Boards c-bettet ein Solver out of Position in einem Single-Raised Pot nur ein Viertel der Zeit.
2. **Bau eine echte Checking-Range auf.** Wenn du nur bettest, wenn du stark bist, und checkst, wenn du schwach bist, liest dich ein aufmerksamer Gegner wie ein Buch und attackiert jeden Check. Also checkst du bewusst auch *einige* starke Hände, was deine Checks gefährlich hält und dein ganzes Spiel schwerer zu spielen macht. Genau deshalb ist [Position](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") ein so struktureller Vorteil – C-Bets funktionieren einfach besser, wenn du als Letzter handelst.

---

## Wie oft c-bettest du in Multiway-Pots?

Die größte C-Bet-Falle ist, **in mehrere Gegner zu feuern, als wäre es heads-up.** Jeder zusätzliche Spieler im Pot senkt die Chance, dass alle verfehlt haben – also kollabiert deine Fold Equity, der ganze Motor einer Bluff-C-Bet.

Die Regel multiway ist simpel: **bette deine starken fertigen Hände und deine besten Draws für Value und Protection, und checke fast alles andere.** Gegen zwei Spieler ziehst du dich bereits deutlich hinter deine Heads-up-Range zusammen; gegen drei oder mehr ist eine nackte Bluff-C-Bet einfach Chips verbrennen, weil fast immer jemand ein Stück hat. Range-betten – deine ganze Range klein setzen – ist eine *Heads-up*-Idee und überträgt sich nicht auf Multiway-Pots. Im Zweifel mit einer marginalen Hand und zwei oder mehr Gegnern: checke.

---

## Wann lohnt sich eine Delayed C-Bet?

Den Flop zu checken ist nicht das Ende der Hand. Eine **Delayed C-Bet** – als Preflop-Raiser den Flop checken und dann den Turn betten – ist einer der am meisten unterschätzten Züge im Poker. Sie glänzt, wenn:

- Der **Flop deinen Gegner favorisierte** (ein niedriges, verbundenes Board), Betten also schlecht war – der **Turn aber das Bild ändert** (eine Overcard oder eine Karte, die deine Equity anhebt).
- Du **eine anständige Hand in Position durchgecheckt hast** und jetzt eine Street Value setzen willst, da das Board sicherer ist.
- Du **dem Flop-Raise die Grundlage nehmen willst**: Spieler, die planten, deine Flop-C-Bet zu bluff-raisen, bekommen keinen Einsatz zum Angreifen und sehen sich stattdessen deiner Turn-Bet gegenüber.

Verzögern verwandelt einen Spot, in dem eine automatische C-Bet Chips verblutet hätte, in einen kontrollierten, informierten Einsatz eine Street später.

---

## Wann ist Checken besser als eine C-Bet? (Checken ist eine Waffe, keine weiße Fahne)

> **Kurze Antwort**
> Immer dann, wenn das Board eher zur Range deines Gegners passt als zu deiner – niedrige, verbundene Flops, mehrere Gegner, oder wenn du selbst nichts hast und auch nichts glaubwürdig repräsentieren kannst. Checken ist dort kein Aufgeben, sondern eine eigene Linie: Du hältst den Pot klein und behältst die Option auf eine spätere Bet.

Machen wir das „Nicht“ explizit, denn hier wird das Geld gespart:

- **Das Board hat die Range deines Gegners zerlegt.** Ein 7‑6‑5- oder 9‑8‑7-Flop trifft die Hände, die einen Raise callen, weit härter als deine. Hier auf Autopilot zu c-betten verschenkt nur Chips – checke einen weit größeren Teil deiner Range als auf K‑7‑2, und wenn du bettest, dann groß und selektiv.
- **Du bist out of Position auf einem dynamischen Board** mit einer marginalen Hand. Als Erster ohne Information handelnd, halt den Pot klein und checke.
- **Du bist multiway mit Air.** Oben behandelt – kaum Fold Equity, also kein Einsatz.
- **Deine Hand will eine Checking-Range schützen.** Manchmal checkst du eine starke Hand absichtlich, damit deine Checks nicht automatisch schwach sind.

Der Denkwechsel, der dich zum Gewinner macht: **Checken ist keine Kapitulation.** Gute Spieler checken *viel*, mit Absicht, und es macht ihre Bets weit furchteinflößender, wenn sie doch kommen. Wenn du dich verpflichtet fühlst zu betten, nur weil du preflop geraist hast, kostet dich dieser Reflex Geld.

---

## Wie sieht eine C-Bet-Hand von Anfang bis Ende aus?

Zwei Spots aus derselben Session zeigen beide Seiten der Entscheidung.

**Spot 1 – eine lehrbuchmäßige C-Bet.** Ich raise ==A♣K♦== und der Big Blind callt. Flop: ==K♠ 7♦ 2♣.== Das ist ein hohes, trockenes, unverbundenes Board, das meiner Range gehört – und ich habe **Top Pair, Top Kicker** gefloppt: mein K♦ pairt das K♠, mit dem Ass als bestmöglichem Kicker (beste Fünf = K♦ K♠ A♣ 7♦ 2♣). Ich bette **ein Drittel Pot** als Range-Bet: es setzt seine verfehlten Hände unter Druck und hält schlechtere Könige und Paare drin. Einfache, profitable C-Bet.

**Spot 2 – ein lehrbuchmäßiger Check.** Gleiche Session, ich raise ==A♥Q♥== und der Big Blind callt. Flop: ==7♠ 6♠ 5♦.== Dieses Board zerschmettert genau die Hände, mit denen er gecallt hat – Suited Connectors, kleine Paare und Straßen – während ich nur Ass-hoch habe, ohne Paar und ohne Draw (keine Herz auf dem Board, also nicht mal ein Backdoor-Flush). Zwei Jahre früher hätte ich aus Gewohnheit „fortgesetzt“ und wäre geraist worden. Jetzt **checke ich und gebe auf.** Wenn ein sicherer Turn kommt und ich Equity dazubekomme, ist eine Delayed C-Bet verfügbar; wenn nicht, habe ich das Minimum verloren.

Gleicher Preflop-Raise, entgegengesetzte Flops, entgegengesetzte richtige Züge. Das ist die ganze Lektion: **das Board entscheidet, nicht die Tatsache, dass du geraist hast.**

---

## Welche C-Bet-Fehler kosten am meisten? Die häufigsten sieben

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Der Fehler | Warum er dich kostet | Die Lösung |
|:---|:---|:---|
| **Jeden Flop auf Autopilot c-betten** | Ignoriert, dass viele Boards den Caller favorisieren | Lies zuerst die Textur |
| **Groß betten mit einer weiten Range** | Weite Ranges wollen kleines Sizing, nicht großes | Klein auf trocken, groß nur wenn polarisiert |
| **Multiway light c-betten** | Fold Equity kollabiert mit mehr Spielern | Nur Value & Draws gegen 2+ |
| **Zu oft OOP c-betten** | Du kannst als Erster deine Equity nicht so gut realisieren | Checke öfter, bau eine Checking-Range auf |
| **In ein Board betten, das sie getroffen hat** | 7‑6‑5 zerlegte ihre Range, nicht deine | Checke öfter; wenn du bettest, dann groß und selektiv |
| **„One-and-done“-Barreling** | Flop c-betten, Turn immer aufgeben = leicht zu floaten | Hab einen Turn-Plan, bevor du feuerst |
| **Triple-Barrel ohne Equity** | Einen Stack verbluffen ohne Outs oder Blocker | Bluffe mit Backup-Equity oder guten Blockern |

</div>

Jeder dieser Fehler führt zur selben Wurzel zurück: **auf Autopilot c-betten, statt das Board zu lesen.** Behebe das, und dein Flop-Spiel springt eine Stufe höher.

---

:::readnext[Weiterlesen]
/de/blog/holdem-strategy | Die 5 Entscheidungen hinter gewinnendem Poker | /images/holdem-strategy-hero.webp
/de/blog/holdem-3bet | Wie du 3-bettest (und eine 3-Bet meisterst) | /images/holdem-3bet-hero.webp
:::

## FAQ

**Q. Was ist eine Continuation Bet im Poker?**

A. Eine Continuation Bet, oder C-Bet, ist ein Einsatz am Flop vom letzten Spieler, der vor dem Flop geraist hat – dem Preflop-Aggressor, wozu auch ein 3-Better zählt. Du „setzt“ die Stärke fort, die du preflop gezeigt hast. Du musst den Flop nicht getroffen haben, um zu c-betten – weil eine Hand den Flop etwa zwei Drittel der Zeit verfehlt, gewinnt eine gut gewählte C-Bet oft den Pot, wenn dein Gegner nichts hat.

**Q. Warum heißt es Continuation Bet?**

A. Weil du die Aggression fortsetzt, die du vor dem Flop begonnen hast. Du hast preflop geraist, um die Führung zu übernehmen, und der Flop-Einsatz setzt diese Story auf der nächsten Street fort. Hätte jemand anderes preflop geraist, wäre dein Flop-Einsatz keine C-Bet – der Begriff meint speziell den Preflop-Raiser, der den Flop bettet.

**Q. Solltest du jeden Flop c-betten?**

A. Nein – das ist der häufigste C-Bet-Fehler. Bette die Flops, die deine Range favorisieren (hohe, trockene Boards wie K-7-2, wo du mehr Top Pairs und Overpairs hältst) und checke die, die deinen Gegner favorisieren (niedrige, verbundene Boards wie 7-6-5, die die Hände treffen, mit denen er gecallt hat). Jeden Flop auf Autopilot zu c-betten wird von guten Spielern bestraft.

**Q. Wie oft solltest du c-betten?**

A. Es hängt von Position, Board und Anzahl der Gegner ab, also behandle diese als Bereiche, nicht als Regeln: grob 70% oder mehr (in kleiner Größe) in Position heads-up auf einem trockenen K- oder Q-High-Board (trockene A-High-Boards werden spürbar seltener gebettet), etwa 30–45% out of Position als Raiser in einem Single-Raised Pot (höher als 3-Better) und 50% oder weniger multiway. Eine gesunde Gesamt-C-Bet-Rate am Flop liegt bei etwa 55–70% – über 85% bedeutet, dass du auf Autopilot fährst.

**Q. Wie viel solltest du c-betten?**

A. Sizing nach dem Board. Auf trockenen, statischen Boards bette klein – etwa ein Drittel des Pots – weil die Range deines Gegners schwach ist und du keine Draws abkassieren musst. Auf wet, dynamischen Boards bette groß – zwei Drittel Pot oder mehr – um Flushes und Straight Draws abzukassieren und den Pot mit deinen starken Händen aufzubauen. In Turnieren schrumpft die große Size – häufiger halber Pot als zwei Drittel –, während die kleine ein Drittel bleibt.

**Q. Solltest du out of Position c-betten?**

A. Seltener als in Position, wenn du der Preflop-Raiser in einem Single-Raised Pot warst. Wenn du auf jeder Street als Erster ohne Information handelst, kannst du deine Equity nicht so gut realisieren, also checkst du weit öfter – sogar einige Hände, die du in Position auto-betten würdest – und du hältst bewusst einige starke Hände in deiner Checking-Range, damit deine Checks nicht automatisch schwach sind. Position lässt C-Bets besser funktionieren, Punkt.

**Q. Solltest du in einem Multiway-Pot c-betten?**

A. Viel weniger als heads-up. Jeder zusätzliche Gegner macht es wahrscheinlicher, dass jemand getroffen hat, also kollabiert deine Fold Equity. Gegen zwei oder mehr Spieler bette deine starken fertigen Hände und besten Draws für Value und Protection, und checke fast alles andere. Bluffs in drei oder mehr Spieler zu betten ist ein klassischer Verlustbringer.

**Q. Was ist eine Delayed C-Bet?**

A. Eine Delayed C-Bet ist, wenn der Preflop-Raiser den Flop checkt und dann den Turn bettet. Sie ist nützlich, wenn der Flop deinen Gegner favorisierte (Betten also schlecht war), der Turn aber deine Equity verbessert, wenn du eine anständige Hand in Position durchgecheckt hast oder um Gegner zu fangen, die planten, deinen Flop-Einsatz zu bluff-raisen. Es ist einer der am meisten unterschätzten profitablen Züge im Poker.

**Q. Wann solltest du NICHT c-betten?**

A. C-bette nicht standardmäßig, wenn das Board die Range deines Gegners zerlegt hat (niedrige verbundene Boards – checke öfter, und wenn du bettest, dann groß und selektiv), wenn du out of Position mit einer marginalen Hand auf einem dynamischen Board bist, wenn du multiway mit Air bist oder wenn deine Hand lieber eine Checking-Range schützt. Checken in diesen Spots ist keine Schwäche – es spart Chips und macht deine zukünftigen Einsätze glaubwürdiger.

**Q. Ist eine C-Bet ein Bluff?**

A. Manchmal ja, manchmal nein – das ist der Punkt. Viele C-Bets sind Semi-Bluffs oder reine Bluffs mit Händen, die verfehlt haben, und betten, weil dein Gegner wahrscheinlich auch verfehlt hat. Andere sind Value Bets mit starken Händen. Eine ausbalancierte C-Bet-Strategie mischt beides auf denselben Boards, sodass Gegner nicht erkennen können, ob dein Flop-Einsatz Stärke oder Air bedeutet.

**Q. Was ist eine Value Bet im Poker?**

A. Eine Value Bet ist ein Einsatz mit einer starken Hand in der Hoffnung, von einer schlechteren *gecallt* zu werden – das Gegenteil eines Bluffs, der eine bessere Hand zum Folden bringen soll. Die meisten deiner C-Bets auf Boards, die du getroffen hast, sind Value Bets: Du bettest Top Pair oder ein Set, um schwächere Paare und Draws abzukassieren. Die Kunst liegt im Sizing – setze einen Betrag, zu dem dein Gegner sich den Call noch selbst schönreden kann.

**Q. Was ist ein guter C-Bet-Prozentsatz auf einem Poker-HUD?**

A. Etwa 55–70% für Flop-C-Bet ist ein gesundes, ausbalanciertes Band. Über etwa 85% signalisiert jemanden, der zu viel c-bettet und durch Floaten und Raisen ausgebeutet werden kann; unter etwa 40% signalisiert einen Spieler, der nur bettet, wenn er stark ist, sodass du gegen seine C-Bets sicher folden und stechen kannst, wenn er checkt. Behandle es als Gesundheitscheck, nicht als Ziel.

---

## Das C-Bet-Playbook in Kürze

1. **Eine C-Bet ist ein Flop-Einsatz vom Preflop-Raiser** – und sie funktioniert, weil Hände den Flop etwa zwei Drittel der Zeit verfehlen.
2. **Das Board entscheidet.** Bette hohe, trockene Boards, die deine Range favorisieren; checke niedrige, verbundene Boards, die die Range deines Gegners favorisieren.
3. **Range Advantage bestimmt die Frequenz; Nut Advantage bestimmt die Größe.** Bette oft auf Boards, die du dominierst; bette groß, wenn du mehr der Nuts hältst oder auf wet Boards Draws abkassieren musst.
4. **Klein (⅓) auf trocken, groß (⅔+) auf wet.** C-bette weniger out of Position, wenn du der alleinige Raiser warst (als 3-Better out of Position kippte es auf den drei Boards, die wir gelöst haben, auf über 97%), und deutlich weniger multiway.
5. **Checken ist eine Waffe.** Die besten Spieler checken oft und mit Absicht – die C-Bet ist ein Skalpell, kein Hammer.

Mach das richtig, und du hörst auf, Pots auf Boards zu verbrennen, die nie deine zum Betten waren. Kombiniere scharfes C-betten mit einem soliden [3-Bet-Spiel](/de/blog/holdem-3bet), echtem [Positions](/de/blog/holdem-position-play)-Bewusstsein und dem vollständigen [Strategie-Framework](/de/blog/holdem-strategy), und dein Flop-Spiel lässt die „jeden Flop betten“-Meute leise hinter sich.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Das 5-Entscheidungen-Framework</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Wo die C-Bet in ein gewinnendes Spiel passt</div>
  </a>
  <a href="/de/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Betting erklärt</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-betten beginnt auch in 3-Bet-Pots</div>
  </a>
  <a href="/de/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Deine Position spielen</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Warum C-Bets in Position besser funktionieren</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot Odds berechnen</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Warum eine große C-Bet die Draws abkassiert</div>
  </a>
</div>
`.trim(),
};

export default POST;
