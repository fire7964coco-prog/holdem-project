import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Poker Starthände Chart & die besten Hände",
  seoTitle: "80% deiner Hände folden? — Welche Starthände spielen",
  desc: "Die meisten Hole Cards verlieren Geld. Die besten Starthände, das komplette Chart nach Position und 6-Max, plus GTO- vs. Anfänger-Charts — in 10 Minuten.",
  tldr: "Von den 169 Starthand-Typen ist nur eine kleine Spitzengruppe — etwa 15–20% der Hände, die du bekommst — für einen Anfänger profitabel. Große Paare (AA–TT) und AK raist du aus jeder Position; je später du agierst, desto weiter öffnest du — von ~13% unter der Gun bis ~43% am Button (im 6-Max nochmals weiter). Starte mit einem vereinfachten Chart, füge GTO-Preflop-Charts hinzu, sobald Raise-or-Fold automatisch sitzt.",
  category: "strategy",
  date: "2026-06-14",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🂡",
  tags: [
    "gute starthände poker",
    "poker starthände chart",
    "gto preflop charts",
    "starthände prozente",
    "6-max starthände",
  ],
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Texas-Hold'em-Starthände-Chart mit Premium (AA KK QQ JJ AK), Strong (TT 99 AQ KQ) und Fold-Gruppen nach Position von UTG bis Button",
  content: `
In meiner ersten Live-Session bekam ich A♣ 4♦ und dachte "ein Ass, wie schlecht kann das schon sein?"

Ich callte einen Raise, verfehlte den Flop, callte erneut, verfehlte den Turn. Bis zum River hatte ich 40 Big Blinds mit nichts verloren.

Hier ist die unbequeme Mathematik hinter dieser Hand: ==Texas Hold'em hat 169 verschiedene Starthand-Typen — und rund 80% der Hände, die du bekommst, solltest du preflop folden.== Zu lernen, welche Hände du spielst — und aus welcher Position — ist die einzige größte Verbesserung, die Anfänger in ihrem ersten Monat machen. Die Handauswahl ist die zweite der [fünf Entscheidungen](/de/blog/holdem-strategy) hinter jeder gewonnenen Hand: mach sie richtig, und jede spätere Street wird leichter.

Diese Seite ist die All-in-One-Version: die 10 besten Starthände, was eine Hand überhaupt *gut* macht, das komplette Starthände-Chart nach Position (9-Max und 6-Max), GTO-Preflop-Charts vs. Anfänger-Charts, ein druckbares PDF-Cheat-Sheet und ein kurzes Quiz zum Selbsttest.

---

### Starthände in Zahlen

:::stripe
169 | Verschiedene Starthand-Typen (1.326 exakte Kombos)
~80% | Hände, die ein Anfänger preflop folden sollte
~13% → ~43% | Opening-Range von UTG bis zum Button (9-Max)
~85% | Wie oft AA gegen eine zufällige Hand gewinnt
:::

---

## Die 10 besten Starthände im Poker, gerankt

Das sind die besten Starthände im Poker — die, die du fast immer preflop raisen solltest, aus jeder Position am Tisch:

| Rang | Hand | Warum sie stark ist |
|-----:|------|-----------------|
| 1 | AA | Beste Preflop-Hand — ~85% Favorit gegen eine zufällige Hand |
| 2 | KK | Verliert preflop nur gegen AA — trotzdem raisen und re-raisen |
| 3 | QQ | Stark, aber neu bewerten, wenn ein A oder K auf dem Flop erscheint |
| 4 | JJ | Premium — stark raisen, bei schwerer Action auf A/K/Q-Flops abbremsen |
| 5 | TT | Top-5-Hand — first in raisen, vorsichtig bei großen 3-Bets |
| 6 | AKs | Suited Ass-König — dominiert andere große Karten, macht den Nut-Flushdraw |
| 7 | AKo | Offsuit AK — aus jeder Position raisen |
| 8 | AQs | Suited AQ — stark, aber gegen große 3-Bets aus Position folden |
| 9 | KQs | Suited KQ — gut in später Position, kniffliger von UTG |
| 10 | AJs | Suited AJ — stark in Position, gegen schweren Widerstand folden |

![Vier Premium-Texas-Hold'em-Starthände — Pocket Aces, Pocket Kings, Pocket Queens und Ass-König suited — golden leuchtend auf dunkelgrünem Filz](/images/holdem-starting-hands-premium.webp "Die Premium-Stufe — Hände, die du aus jeder Position raisen kannst")

==g:Mit den Händen 1–5 (den Pocket Pairs) raist du immer und re-raist oft preflop, um den Pot aufzubauen.== Mit AK und AQ ist das Ziel, heads-up zu kommen, wo deine großen Karten maximale Equity haben. Eine Zahl, die sich zu merken lohnt: AK ist ungefähr ein ==Coinflip gegen jedes kleinere Pocket Pair== (das klassische "Race") und rund 43–46% gegen QQ — nah genug, dass Raisen und Re-Raisen mit AK korrekt bleibt.

Pocket Rockets, Cowboys, Big Slick — falls dir der Tisch-Slang neu ist, das [Poker-Glossar](/de/blog/holdem-glossary) deckt jeden Hand-Spitznamen ab. Und falls du unsicher bist, was was schlägt, sobald das Board kommt, schau dir zuerst die [Poker-Reihenfolge der Hände](/de/blog/holdem-hand-rankings) an.

---

## Was zählt als gute Starthand im Poker?

Gute Starthände im Poker teilen ein Merkmal: ==sie machen öfter starke *Fünf-Karten*-Hände als die Hände, auf die sie treffen.== Hohe Paare starten vorn. Große suited Karten machen Top Pair mit dem besten Kicker, Nut-Flushes und hohe Straßen. Alles andere braucht Hilfe — und Hände, die Hilfe brauchen, lohnen sich nur, wenn die Hilfe billig ist.

Nach Stufen sortiert sehen gute Starthände im Poker so aus:

| Stufe | Beispiele | Wie du sie spielst |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Aus jeder Position raisen, aggressiv re-raisen |
| Strong | TT–88, AQ, AJs, ATs, KQs | Aus den meisten Positionen raisen, bei schweren 3-Bets abbremsen |
| Spekulativ | Kleine Paare (77–22), Suited Connectors (JTs, T9s, 98s), Suited Aces (A2s–A9s) | Nur späte Position — sie brauchen billige Flops und Position |
| ==r:Trash== | Schwache Offsuit-Asse (A4o), King-Rag (K3o), niedriger Offsuit-Müll | ==r:Preflop folden — sie kosten jede Session Chips== |

:::tip[Die Stufe ist nur die halbe Antwort. Eine spekulative Hand ist am Button "gut" und unter der Gun schlecht — deshalb ist das echte Chart nach Position organisiert, nicht nach Hand.]:::

---

## Poker Starthände Chart nach Position (komplettes 9-Max-Chart)

==Deine Position am Tisch ändert, welche Hände profitabel sind.==

Aus früher Position agieren noch viele Spieler nach dir — also brauchst du stärkere Hände. Vom Button agierst du auf jeder Postflop-Street als Letzter, was bedeutet, dass du eine viel weitere Range profitabel spielen kannst.

Hier ist das Poker-Starthände-Chart für einen Standard-9-Max-Tisch:

| Position | Open-Range | Wichtige Hände zum Spielen |
|----------|-----------|-------------------|
| UTG (Früh) | Top ~13% | TT+, AJs+, AKo, KQs |
| MP (Mitte) | Top ~17% | Ergänze 88, 99, ATs, KJs, QJs, JTs |
| CO (Cutoff) | Top ~27% | Ergänze 55–77, A9s+, KTs+, Suited Connectors (T9s, 98s) |
| BTN (Button) | Top ~43% | Ergänze 22–44, A2s+, Suited Broadways, schwächere Offsuit-Hände |

Die Regel: ==je später du agierst, desto mehr Hände kannst du profitabel öffnen==. Weil der Button postflop immer als Letzter agiert, ist er die wertvollste Position im Poker.

Erkunde das komplette farbcodierte Grid — jede einzelne der 169 Hände nach Position:

:::rangechart:::

Willst du es als eigenständiges Tool mit erweiterten Ranges pro Position? Nutze das [Texas-Hold'em-Starthände-Chart-Tool](/hand-chart). Für eine Aufschlüsselung jedes Positionsnamens (UTG, HJ, CO, BTN, SB, BB) siehe den [Poker-Positionen-Guide](/de/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Frühe Position (UTG): die engste Range

UTG ist die schwierigste Position zu spielen. ==r:Acht Spieler agieren noch hinter dir.== Jede Hand, die du hier öffnest, muss gegen starke Ranges standhalten.

Der Kern der UTG-Range (eine volle ~13%-Range weitet sich zu Mid Pairs wie 77–99, mehr Suited Broadways und ein paar Offsuit-Händen wie AQo/AJo, wenn du besser wirst):

- Pocket Pairs: **TT, JJ, QQ, KK, AA**
- Premium suited: **AKs, AQs, AJs, KQs**
- Premium offsuit: **AKo** (und manchmal AQo)

Hände, die stark aussehen, aber von UTG gefoldet werden sollten:

- **KJo, QJo, KTo** — zu viele dominierte Szenarien gegen die Spieler, die einen UTG-Open callen
- **77, 88** — vom Button okay, von UTG marginal
- **Schwache Suited Aces (A2s–A7s)** — heb dir die für späte Position auf

### Späte Position (Cutoff und Button): die weiteste Range

Der Button ist die beste Position im Poker. ==g:Du agierst jede Hand auf Flop, Turn und River als Letzter.== Dieser Vorteil lässt dich profitabel ergänzen:

- **Kleine Pocket Pairs (22–66)** — in der Hoffnung, ein Set zu floppen
- **Jedes Suited Ass (A2s–A9s)** — Nut-Flushdraw-Potenzial
- **Suited Connectors (T9s, 98s, 87s)** — billige Hände mit hohen Implied Odds
- **Schwächere Broadway-Offsuit (KTo, QJo)** — nur in später Position, niemals früh

Kernregel: ==diese spekulativen Hände brauchen Position, um profitabel zu sein==. Wenn ein UTG-Spieler vor dir raist, wandern die meisten davon direkt in den Muck — ihr Vorteil verschwindet ohne Position.

---

## 6-Max Starthände: Wie sich das Chart ändert

Die meisten Online-Cashgames sind 6-Max, und das Chart verschiebt sich in eine Richtung: ==weiter==. Entferne die drei engsten Plätze von einem 9-Max-Tisch, und jede verbleibende Position "rückt effektiv auf". Der erste Spieler, der im 6-Max agiert, öffnet gegen fünf Gegner, nicht acht — also ==g:spielt UTG im 6-Max ungefähr wie MP im 9-Max== (~15–17% statt ~13%).

:::compare
9-Max (Full Ring) | 6-Max
9 Plätze — drei frühe Positionen vor MP | 6 Plätze — UTG ist hier eigentlich der Lojack
Erster Platz öffnet ~13% der Hände | Erster Platz öffnet ~15–17% der Hände
Blinds kommen einmal alle 9 Hände rum — folden ist billig | Blinds kommen 1,5x schneller rum — alles folden blutet Chips
AJo, KQo = fold vom ersten Platz | AJo, KQo = Standard-Opens vom ersten Platz
Spekulative Hände meist nur CO/BTN | Spekulative Hände eine Position früher spielbar
:::

Der Fehler, den du vermeiden musst, ist ein 9-Max-Chart in einem 6-Max-Spiel zu spielen: du foldest Hände, die klar profitabel sind, und wirst von den Blinds aufgefressen. Der umgekehrte Fehler — 6-Max-Ranges an einem Full-Ring-Tisch — ist, wie schwache Asse die ganze Nacht dominiert werden. Sobald sich das Chart automatisch anfühlt, ist [Positionsspiel](/de/blog/holdem-position-play) die Fähigkeit, die diese weiteren Ranges in echten Profit verwandelt: Stealen, Isolieren und Druck auf die Blinds aus den Positionen, die es erlauben.

---

## Welchen Prozentsatz der Starthände solltest du spielen?

Über eine ganze Session hinweg ist ==ein solides Anfänger-Ziel, rund 15–20% der Hände zu spielen, die du bekommst== — was bedeutet, 80–85% preflop zu folden. Das ist keine flache Zahl, es ist der *Durchschnitt* des positionsbasierten Charts oben: ~13% von UTG, ~17% von MP, ~27% vom Cutoff, ~43% vom Button.

:::stat[15–20%] der ausgeteilten Hände — eine gesunde Anfänger-Range im 9-Max:::

Wenn du an einem Full-Ring-Tisch 30–40% der Hände spielst, "siehst du nicht mehr Flops" — du zahlst Rake und Reverse-Implied-Odds auf Hände, die dir das Chart längst zum Folden gesagt hat. Verfolge es ehrlich für eine Session; die Zahl ist meist höher, als es sich anfühlt.

Ein Hinweis zum Rahmen: Hier geht es darum, welchen Prozentsatz deiner *Range* du spielst, nicht darum, wie oft bestimmte Hände gegeneinander gewinnen. Für Hand-vs-Hand-Winraten (AK vs QQ, Paar vs zwei Overcards und den Rest) siehe den [Poker-Odds- und Wahrscheinlichkeits-Guide](/de/blog/holdem-probability) — das ist seine Aufgabe, nicht die dieses Charts.

---

## GTO-Preflop-Charts vs. Anfänger-Charts: Welches nutzen?

Ich halte beim Lernen Solver-Outputs offen, und trotzdem gebe ich jedem Anfänger zuerst ein vereinfachtes Chart. Das sind zwei verschiedene Werkzeuge, und zu wissen, welches man nutzt, ist mehr wert als jedes Chart allein.

**GTO-Preflop-Charts** kommen von Solvern (PioSOLVER, GTO Wizard und Konsorten). Sie sind theoretisch unexploitbar — und sie sind auch voll mit gemischten Frequenzen: öffne diese Hand zu 25% der Zeit, folde sie zu 75%, 3-bette diese Kombo, aber nur mit diesen Farben. **Anfänger-Charts** — wie das auf dieser Seite — pressen all das in eine klare Aktion pro Hand.

:::compare
GTO-Preflop-Charts | Vereinfachtes Anfänger-Chart
Gemischte Frequenzen — raise 25% / fold 75% der Zeit | Eine klare Aktion pro Hand — raisen oder folden
Nimmt an, dass Gegner auch nahezu perfekt spielen | Nimmt an, dass Gegner Fehler machen (tun sie)
Gebaut für eine bestimmte Stack-Tiefe, Rake und Format | Robust über typische Live- und Low-Stakes-Spiele
Am besten für: Online-Regs, Study-Sessions, Range-Review | Am besten für: dein erstes Jahr, Live-Spiele, Disziplin aufbauen
Falsch angewandt = zufällig wirkende Entscheidungen, die du nicht erklären kannst | Leicht "zu tight" — der billigste Fehler im Poker
:::

Hier ist, warum blindes Auswendiglernen von Solver-Charts nach hinten losgeht: GTO-Frequenzen sind eine Verteidigung gegen perfekte Gegner. Deine Gegner an Low Stakes callen zu viel, folden zu selten und 3-betten nie light — gegen sie machen die sorgfältig ausbalancierten Bluffs des Solvers *weniger* Geld als einfach gute Hände zu raisen und Trash zu folden. Du endest damit, gemischt-frequente Moves zu machen, die du nicht erklären kannst, in Spielen, wo der schlichte Move mehr einbringt. ==g:Lerne das vereinfachte Chart, bis Raise-or-Fold automatisch sitzt; füge GTO-Preflop-Charts hinzu, wenn du online wechselst oder ernsthaft zu studieren beginnst.== Die Brücke zwischen beiden ist das Verständnis von [Poker-Equity](/de/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — der Win-Share-Mathematik, auf der Solver-EVs aufgebaut sind.

---

## Die schlechtesten Starthände (die spielbar aussehen)

Die schlechtesten Starthände im Poker sind nicht zufälliger Müll wie 7-2 — niemand braucht ein Chart, um das zu folden. Die teuren sind die Hände, die spielbar *aussehen* und über Sessions hinweg konstant Chips verlieren:

| Handtyp | Warum sie verliert | Was Anfänger denken |
|-----------|-------------|---------------------|
| ==r:Schwache Asse (A2o–A8o)== | Macht zweitbestes Paar gegen bessere Asse | "Ich habe ein Ass, das muss gut sein" |
| Niedrige Offsuit-Connectors (74o, 85o) | Trifft selten sauber, schwer zu spielen, wenn doch | "Es könnte eine Straße machen" |
| King-Rag Offsuit (K3o, K4o) | Von jedem besseren König dominiert | "Ein König ist eine große Karte" |
| Zwei beliebige suited Karten | Macht bis zum River nur ~6,5% der Zeit einen Flush (floppt einen ~0,8%) | "Aber sie sind dieselbe Farbe" |

![Schwache-Ass-Falle im Texas Hold'em — A♣ 4♦ rot umrandet als verlierende Hand, dominiert von A♠ K♦ in Gold](/images/holdem-starting-hands-weak-ace-trap.webp "Schwache Asse sehen stark aus, bleiben aber dominiert — folde sie preflop")

Der ==r:teuerste Fehler, den Anfänger machen, ist Raises mit schwachen Assen zu callen== wie dem A♣ 4♦ aus dem Intro. Wenn du endlich dein Ass-Paar triffst, bist du oft zweitbester gegen A♠ K♦ oder A♥ Q♦ — und du verlierst einen großen Pot, überzeugt, dass du Top Pair hast. Hast du auch. Sie auch, mit einem besseren Kicker.

(Und die tatsächlich schlechteste Hand im Poker? 7-2 offsuit — mehr dazu und zur berühmten "7-2-Regel" in der FAQ unten.)

---

## Druckbares Starthände-Chart (PDF-Cheat-Sheet)

Charts funktionieren nur, wenn sie vor dir liegen, wenn es zählt. Für Homegames und Study-Sessions haben wir das Ganze druckbar gemacht:

**[Lade das kostenlose druckbare Poker-Starthände-Chart (PDF) herunter](/downloads/poker-starting-hands-chart.pdf)** — eine Seite, 9-Max- und 6-Max-Opening-Ranges nebeneinander, Cheat-Sheet-Format. Druck es aus oder lass es zwischen den Händen auf deinem Handy offen.

Dann nutze es wörtlich, jede Hand, für deine ersten 20+ Sessions:

:::steps
Prüfe zuerst deine Position | Bevor du überhaupt auf deine Karten schaust, notiere, wo du relativ zum Button sitzt
Gleiche deine Hole Cards mit dem Chart ab | Finde deine Hand in der Range für diese Position
Raisen oder folden | Vermeide Callen ([Limpen](/de/blog/holdem-limping)) als Standard-Aktion
Folde alles andere | Auch wenn es sich zu tight anfühlt — gerade dann
:::

==g:Es fühlt sich langweilig an. Das ist der Punkt.== Tight-aggressive Preflop-Auswahl ist die Grundlage jedes gewinnenden Poker-Stils, von Anfänger-Cashgames bis zu High-Stakes-Turnieren.

---

## Teste dich selbst: Preflop-Hand-Quiz

Drei Chart-Spots. Entscheide, bevor du bei den Antworten spickst:

**1. 9-Max, du bist UTG mit A♠ J♦ (offsuit).** Raisen oder folden?
→ ==r:Fold.== AJo schafft den UTG-Cut nicht — es wird zu oft von den Händen dominiert, die einen UTG-Open callen. AJ*s* öffnet; AJo wartet auf eine spätere Position.

**2. Button, alle folden zu dir, 7♠ 6♠.** Raisen oder folden?
→ ==g:Raise.== Suited Connectors liegen mitten in der ~43%-Button-Range — das ist genau die Position, aus der sie profitabel sind.

**3. 6-Max, der Cutoff raist, du bist am Button mit A♦ 4♣.** Callen, raisen oder folden?
→ ==r:Fold.== Ein schwaches Offsuit-Ass gegen einen Raise ist die Intro-Hand von vorn — dominiert, wenn es trifft, wertlos, wenn es verfehlt.

:::quiz:::

Alle drei richtig? Probier das komplette [10-Fragen-Poker-Hand-Quiz](/quiz) — beste fünf Karten aus sieben, gegen die Uhr.

---

:::readnext[Weiterlesen]
/de/blog/holdem-hand-rankings | Poker-Reihenfolge der Hände | /images/holdem-hand-rankings-hero.webp
/de/blog/holdem-probability | Poker-Odds- & Wahrscheinlichkeitstabelle | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Was ist die beste Starthand im Poker?**

A. Pocket Aces (AA) ist die beste Starthand im Poker. Preflop gewinnen Asse rund 85% der Zeit gegen eine zufällige Hand. Raise und re-raise immer mit Assen — das Ziel ist, als statistischer Favorit einen großen Pot aufzubauen.

**Q. Was sind gute Starthände im Poker?**

A. Gute Starthände im Poker sind Premium-Paare (AA–TT), große Asse (AK, AQ) und starke Suited Broadways (KQs, AJs) — grob die oberen 15–20% aller Hände. Spekulative Hände wie kleine Paare und Suited Connectors sind nur aus später Position gut.

**Q. Wie viele Starthände gibt es im Poker?**

A. Es gibt 169 verschiedene Starthand-Typen (13 Paare, 78 suited, 78 offsuit) aus 1.326 exakten Zwei-Karten-Kombinationen. Die Mathematik hinter diesen Zahlen findest du im [Poker-Wahrscheinlichkeits-Guide](/de/blog/holdem-probability).

**Q. Was ist die 7-2-Regel im Poker?**

A. Die 7-2-Regel ist ein Haus-Nebenspiel, keine offizielle Poker-Regel: gewinnt ein Spieler einen Pot mit 7-2 offsuit — der schlechtesten Hand — zahlt ihm jeder andere Spieler eine kleine Prämie. Sie existiert rein, um Homegames und Pub-Games aufzupeppen, indem sie einen unverschämten Bluff belohnt.

**Q. Was ist die schlechteste Starthand im Poker?**

A. 7-2 offsuit gilt weithin als die schlechteste Starthand im Poker. Die Karten liegen zu weit auseinander, um zusammen eine Straße zu machen, sind zu niedrig, um unverbessert zu gewinnen, und selbst ein Paar zu treffen lässt dich mit einer schwachen Hand und einem schlechten Kicker zurück.

**Q. Sollten Anfänger GTO-Preflop-Charts nutzen?**

A. Nicht am Anfang. GTO-Preflop-Charts nutzen gemischte Frequenzen, die gegen starke Gegner unexploitbar sein sollen — Overkill in Anfänger-Spielen, wo ein vereinfachtes Raise-or-Fold-Chart mehr einbringt. Lerne das einfache Chart, bis es automatisch sitzt, und füge dann GTO-Charts hinzu, wenn du studierst oder online aufsteigst.

**Q. Macht suited zu sein wirklich einen Unterschied?**

A. Suited fügt gegenüber derselben Offsuit-Hand etwa 2–3% Equity hinzu — bedeutsam, aber kein Grund, eine schlechte Hand zu spielen. Zwei suited Karten machen bis zum River nur ~6,5% der Zeit einen Flush (und ein geflopter Flushdraw komplettiert bis zum River etwa 35% der Zeit). Suited Trash ist immer noch Trash.

**Q. Sollte ich kleine Pocket Pairs wie 22 oder 33 immer folden?**

A. Nicht immer — die Position entscheidet. Vom Cutoff oder Button lohnen sich kleine Paare zum "Set-Minen": du floppst etwa 11,8% der Zeit ein Set oder besser (rund 1 zu 8,5). Aus früher Position sind sie schwer profitabel zu spielen und meist Folds.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Reihenfolge der Hände — Beste bis Schlechteste</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle 10 Hände erklärt mit Odds und Beispielen</div>
  </a>
  <a href="/de/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positionen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Positionen: UTG bis Button</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum die Position ändert, welche Hände du spielst</div>
  </a>
  <a href="/de/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Kicker- und Gleichstand-Regeln</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Gleiches Paar, anderes Ergebnis — der Kicker entscheidet</div>
  </a>
</div>
`.trim(),
};
