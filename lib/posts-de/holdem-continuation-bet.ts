import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation Bet (C-Bet): Wann du am Flop feuerst, wie viel und wann du checkst",
  seoTitle: "Warum 'jeden Flop c-betten' Chips kostet — C-Bet Strategie",
  desc: "Was eine C-Bet ist, welche Flops du c-betten und welche du checken solltest, exaktes Sizing — klein auf trockenen, groß auf wet Boards — und wie oft du feuerst.",
  tldr: "Eine Continuation Bet (C-Bet) ist ein Einsatz am Flop vom Spieler, der preflop geraist hat. Die moderne Regel ist nicht 'jeden Flop c-betten' — sondern die Flops zu setzen, die deine Range favorisieren (hohe, trockene Boards wie K-7-2) klein und oft, und die zu checken, die deinen Gegner favorisieren (niedrige, verbundene Boards wie 7-6-5). Setze klein — etwa ein Drittel Pot — auf trockenen Boards, groß — zwei Drittel oder mehr — auf wet Boards, c-bette weniger out of Position und deutlich weniger multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "15 Min.",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Ein Pokerspieler setzt Chips auf einen frisch ausgeteilten Flop, nachdem er preflop geraist hat — der klassische Continuation-Bet-Moment auf dem grünen Filz",
  tags: ["continuation bet", "c-bet poker", "was ist eine c-bet", "c-bet sizing", "c-bet frequenz", "wann c-betten", "wann nicht c-betten", "c-bet out of position", "multiway c-bet", "delayed c-bet"],
  content: `
In meinen ersten paar Jahren war "C-Bet" der einzige Flop-Plan, den ich hatte. Ich hatte preflop geraist, also bettete ich den Flop. Jedes Mal. Ass-hohes Board, ich bette. Ein Board voller Straßen und Flushes, das den Typen, der mich gecallt hatte, offensichtlich zerlegt hatte? Ich bettete trotzdem — und wurde Pot um Pot geraist, gecallt und check-geraist. Ich dachte, C-betten *sei* die Strategie. Es stellt sich heraus: Die C-Bet ist ein Skalpell, und ich schwang sie wie einen Hammer.

Eine **Continuation Bet (C-Bet)** ist ein Einsatz am Flop vom Spieler, der davor geraist hat. Es ist der häufigste Einsatz im Poker — und der am schlimmsten überstrapazierte. Der alte Rat lautete "c-bette fast jeden Flop". Moderne, solver-geprüfte Strategie sagt etwas Nützlicheres und Profitableres: ==Setze die Flops, die *deine* Range favorisieren, und checke die, die die Range deines Gegners favorisieren.== Dies ist das komplette C-Bet-Playbook — welche Flops, wie oft, wie viel, in und out of Position, multiway und wann Checken der gewinnende Zug ist. Es ist die Flop-Hälfte einer gewinnenden [Texas-Hold'em-Strategie](/de/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp").

---

### Die C-Bet in Zahlen

:::stripe
~2 von 3 | Wie oft eine Hand den Flop verfehlt
⅓ Pot | Die kleine "Range-Bet"-Größe auf trockenen Boards
55–70% | Eine gesunde Gesamt-C-Bet-Rate am Flop
Check | Oft der beste Zug, kein Zeichen von Schwäche
:::

---

## Was ist eine Continuation Bet (C-Bet)?

**Eine Continuation Bet ist ein Einsatz am Flop von dem Spieler, der vor dem Flop der Aggressor war** — die letzte Person, die geraist hat. Du "setzt" die Story von Stärke fort, die du preflop begonnen hast. Entscheidend: ==du musst den Flop nicht getroffen haben, um zu c-betten==; ein großer Anteil guter C-Bets wird mit Händen gemacht, die den Flop komplett verfehlt haben.

Der Grund, warum es funktioniert, ist eine simple Statistik: **eine Hand verfehlt den Flop — macht kein Paar oder besser — etwa zwei Drittel der Zeit.** Wenn du also bettest, hat dein Gegner meist auch nichts und foldet. Du bettest nicht, weil du stark bist; du bettest, weil *er wahrscheinlich schwach ist* und du derjenige warst, der die Führung beansprucht hat.

Sobald du die Flop-C-Bet kennst, folgt der Rest der "Barreling"-Leiter:

- **Delayed C-Bet** — du *checkst* den Flop und bettest dann den Turn. Ideal für Pots, in denen der Flop deinen Gegner favorisierte, der Turn aber die Dinge ändert.
- **Double Barrel** — du c-bettest den Flop und bettest am Turn *erneut*.
- **Triple Barrel** — du bettest alle drei Streets: Flop, Turn und River. Die aggressivste Line, für starken Value oder einen gut gewählten Bluff mit Blockern.

Wenn die zugrunde liegenden [Betting-Aktionen](/de/blog/holdem-betting-actions) Check, Bet und Raise sich noch schwammig anfühlen, fang dort an. Ansonsten lass uns den Fehler korrigieren, den fast jeder macht.

---

## Der alte Rat "jeden Flop c-betten" ist falsch — das hat sich geändert

Wenn du Poker vor den Solvern gelernt hast, wurde dir gesagt, auf den *meisten* Flops etwa zwei Drittel Pot zu c-betten. Es funktionierte eine Weile, weil Gegner zu oft foldeten. Dann lernten alle, sich zu wehren — floaten, check-raisen und mitgehen bis zum Showdown — und pauschales C-betten wurde zum Leak.

Das Entscheidende, was moderne Strategie tatsächlich sagt, weil man es leicht falsch versteht: **es ist NICHT "überall weniger c-betten."** Es ist ein *Split*:

- Auf Boards, die dich favorisieren, bette **klein und sogar noch öfter** als der alte Rat — manchmal deine gesamte Range.
- Auf Boards, die deinen Gegner favorisieren, **checke viel öfter** — und bette größer und selektiver, wenn du bettest.

Das Konzept dahinter ist der ==Range Advantage==: wessen Gesamt-Range auf diesem konkreten Flop stärker ist. Als Preflop-Raiser hältst du mehr hohe Karten und Overpairs, also **gehören hohe, trockene Boards dir** — und Boards voller mittlerer verbundener Karten gehören dem Spieler, der gecallt hat. Beherrsche diese eine Idee, und du bist jedem "einfach c-betten"-Spieler am Tisch voraus.

---

## Welche Flops du c-betten solltest: Es geht um die Board-Textur

![Ein trockener, unverbundener J-7-2-Rainbow-Flop auf dem grünen Filz mit einem kleinen Stapel Chips davor gesetzt, die Art hoher Kartenboard, das dem Preflop-Raiser gehört](/images/holdem-cbet-dry-board.webp "Hohe, trockene, unverbundene Flops wie dieses J-7-2 favorisieren den Preflop-Raiser — die klassischen kleinen C-Bet-Boards mit hoher Frequenz")

Das ist das Herzstück des C-bettens. Bevor du über Sizing oder Frequenz nachdenkst, stell eine Frage: **hat dieser Flop meine Range getroffen oder die meines Gegners?** Hier die Übersicht:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop-Typ | Beispiel | Wen er favorisiert | In Position | Warum |
|:---|:---|:---|:---|:---|
| **Hoch, trocken, unverbunden** | K‑7‑2, A‑8‑3 | **Dich (Raiser)** | Bette **oft & klein** (⅓) | Du hast mehr Top Pairs & Overpairs; er hat verfehlt |
| **Niedrig, verbunden** | 7‑6‑5, 9‑8‑6 | **Caller** | **Checke öfter**; bette groß & selektiv, wenn du bettest | Trifft seine Suited Connectors und kleinen Paare |
| **Gepaart niedrig** | 8‑8‑3, 5‑5‑2 | **Dich (leicht)** | Bette **oft & klein** | Keiner hat oft Trips; deine Overcards/Overpairs führen |
| **Monotone** | K♠9♠4♠ | Gemischt — Vorsicht | Bette **weniger, kleiner** | Ein fertiger Flush deckelt beide Ranges; geh günstig |
| **Two-tone & wet** | Q♥J♥7♣ | Caller-lastig | **Polarisiere:** groß mit Value/Draws, checke Air | Massig Draws — kassier sie ab oder steig aus |

</div>

Zwei verwandte Ideen erledigen hier die ganze Arbeit:
- **Der Range Advantage entscheidet, wie *oft* du bettest.** Mehr deiner Range ist auf diesem Board stark → bette öfter.
- **Der Nut Advantage entscheidet, wie *groß* du bettest.** Du hältst mehr der absolut besten Hände (Sets, Straßen) → bette größer.

Der subtile Teil: du kannst das eine ohne das andere haben. Auf A‑8‑3 hast du weit mehr Top Pairs (Range Advantage), aber fast niemand hat ein Set, also **bettest du oft, aber klein**. Auf einem Board, auf dem du weit mehr Sets und Overpairs hältst, **bettest du groß**. Bring diese zwei Hebel in Ordnung, und C-Bet-Sizing hört auf, Ratesache zu sein.

---

## Wie oft solltest du c-betten? (Frequenz)

Es gibt keinen einzelnen "korrekten" C-Bet-Prozentsatz — wer dir eine Zahl gibt, verkauft dir einen Leak. Die Frequenz schwankt mit Position, Board und wie viele Spieler im Pot sind. Hier die Schnellreferenz:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Grobe C-Bet-Frequenz | Anmerkung |
|:---|:---:|:---|
| **In Position, heads-up, trockenes Board** | **70–100%** (klein) | Klassische "Range-Bet" — bette fast alles, winzig |
| **In Position, heads-up, wet Board** | **~50–60%** | Polarisierter — Value und Draws betten, Air checkt |
| **Out of Position, heads-up** | **~40–50%** | Checke weit öfter, um deine Checking-Range zu schützen |
| **Multiway (2 Gegner)** | **~50% oder weniger** | Wahrscheinlich hat jemand getroffen — zieh zusammen |
| **Multiway (3+ Gegner)** | **Nur starke Hände & gute Draws** | Fold Equity ist im Grunde weg |

</div>

Als Gesundheitscheck: die Gesamt-C-Bet-Rate am Flop eines soliden Spielers landet über alle Boards hinweg irgendwo bei **55–70%**. Wenn du über ~85% der Flops c-bettest, fährst du auf Autopilot und gute Spieler bestrafen es; unter ~40% bist du zu ehrlich und bettest nur, wenn du triffst. Aber denk daran — diese Zahl ist ein *Aggregat*, kein Ziel. Du kommst dorthin, indem du die richtigen Boards bettest, nicht indem du eine Quote erfüllst.

---

## Wie viel solltest du c-betten? (Sizing)

Das Sizing folgt direkt aus der Board-Textur. Zwei Gänge decken fast alles ab:

- **Klein — etwa ein Drittel des Pots** — auf trockenen, statischen Range-Advantage-Boards, besonders in Position. Die Range deines Gegners ist schwach und verbessert sich kaum, also musst du keine Draws abkassieren; ein kleiner Einsatz bringt sein ganzes Air bereits in eine schwierige Lage und hält gleichzeitig schlechtere Hände drin, die dich bezahlen. Ein größerer Einsatz foldet hier nur die Hände raus, die du *callen* lassen willst.
- **Groß — zwei Drittel Pot oder mehr** — auf wet, dynamischen Boards und immer, wenn deine Range polarisiert ist. Jetzt musst du die Flushes und Straight Draws abkassieren (ihre Equity verweigern) und den Pot mit deinen starken Händen aufbauen. Ein kleiner Einsatz lässt Draws zu billig callen.

Setz echte Zahlen dahinter. Sagen wir, der Pot ist ==$30== am Flop:

- Eine **Ein-Drittel-Pot**-C-Bet sind ==$10== — deine Range-Bet für trockene Boards.
- Eine **Zwei-Drittel-Pot**-C-Bet sind ==$20== — deine Größe für wet Boards, um die Draws abzukassieren.

In **Turnieren** tendiere eine Spur kleiner — oft **halber Pot oder weniger** — weil dein Stack kostbar ist und du nicht nachladen kannst. Was auch immer du wählst, binde die Größe ans Board, nicht an Gewohnheit.

---

## C-betten out of Position

![Ein Pokerspieler, der als Erster out of Position handelt, die Finger auf dem Filz neben seinen Chips, während ein Gegner im Schatten hinter ihm wartet](/images/holdem-cbet-oop.webp "Out of Position handelst du als Erster ohne Information, also checkst du weit öfter und c-bettest eine engere, stärkere Range")

C-betten ist **out of Position** viel schwieriger — wenn du auf jeder Straße als Erster handeln musst, ohne zu wissen, was dein Gegner tun wird. Zwei Anpassungen:

1. **C-bette seltener.** Ohne Position kannst du den Pot nicht so gut kontrollieren oder deine Equity realisieren, also checkst du weit öfter — sogar Hände, die in Position automatische Bets wären. Auf manchen guten Boards c-bettet ein Solver out of Position nur ein Viertel der Zeit.
2. **Bau eine echte Checking-Range auf.** Wenn du nur bettest, wenn du stark bist, und checkst, wenn du schwach bist, liest dich ein aufmerksamer Gegner wie ein Buch und attackiert jeden Check. Also checkst du bewusst auch *einige* starke Hände, was deine Checks gefährlich hält und dein ganzes Spiel schwerer zu spielen macht. Genau deshalb ist [Position](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") ein so struktureller Vorteil — C-Bets funktionieren einfach besser, wenn du als Letzter handelst.

---

## C-betten in Multiway-Pots

Die größte C-Bet-Falle ist, **in mehrere Gegner zu feuern, als wäre es heads-up.** Jeder zusätzliche Spieler im Pot senkt die Chance, dass alle verfehlt haben — also kollabiert deine Fold Equity, der ganze Motor einer Bluff-C-Bet.

Die Regel multiway ist simpel: **bette deine starken fertigen Hände und deine besten Draws für Value und Protection, und checke fast alles andere.** Gegen zwei Spieler ziehst du dich bereits deutlich hinter deine Heads-up-Range zusammen; gegen drei oder mehr ist eine nackte Bluff-C-Bet einfach Chips verbrennen, weil fast immer jemand ein Stück hat. Range-betten — deine ganze Range klein setzen — ist eine *Heads-up*-Idee und überträgt sich nicht auf Multiway-Pots. Im Zweifel mit einer marginalen Hand und zwei oder mehr Gegnern: checke.

---

## Die Delayed C-Bet

Den Flop zu checken ist nicht das Ende der Hand. Eine **Delayed C-Bet** — als Preflop-Raiser den Flop checken und dann den Turn betten — ist einer der am meisten unterschätzten Züge im Poker. Sie glänzt, wenn:

- Der **Flop deinen Gegner favorisierte** (ein niedriges, verbundenes Board), Betten also schlecht war — der **Turn aber das Bild ändert** (eine Overcard oder eine Karte, die deine Equity anhebt).
- Du **eine anständige Hand in Position durchgecheckt hast** und jetzt eine Straße Value setzen willst, da das Board sicherer ist.
- Du **Floats fangen willst**: Spieler, die planten, deine Flop-C-Bet zu bluff-raisen, bekommen keinen Einsatz zum Angreifen und sehen sich stattdessen deiner Turn-Bet gegenüber.

Verzögern verwandelt einen Spot, in dem eine automatische C-Bet Chips verblutet hätte, in einen kontrollierten, informierten Einsatz eine Straße später.

---

## Wann du NICHT c-betten solltest (Checken ist eine Waffe, keine weiße Fahne)

Machen wir das "Nicht" explizit, denn hier wird das Geld gespart:

- **Das Board hat die Range deines Gegners zerlegt.** Ein 7‑6‑5- oder 9‑8‑7-Flop trifft die Hände, die einen Raise callen, weit härter als deine. Hier zu betten verschenkt nur Chips — checke.
- **Du bist out of Position auf einem dynamischen Board** mit einer marginalen Hand. Als Erster ohne Information handelnd, halt den Pot klein und checke.
- **Du bist multiway mit Air.** Oben behandelt — keine Fold Equity, kein Einsatz.
- **Deine Hand will eine Checking-Range schützen.** Manchmal checkst du eine starke Hand absichtlich, damit deine Checks nicht automatisch schwach sind.

Der Denkwechsel, der dich zum Gewinner macht: **Checken ist keine Kapitulation.** Gute Spieler checken *viel*, mit Absicht, und es macht ihre Bets weit furchteinflößender, wenn sie doch kommen. Wenn du dich verpflichtet fühlst zu betten, nur weil du preflop geraist hast, kostet dich dieser Reflex Geld.

---

## Eine echte C-Bet-Hand von Anfang bis Ende

Zwei Spots aus derselben Session zeigen beide Seiten der Entscheidung.

**Spot 1 — eine lehrbuchmäßige C-Bet.** Ich raise ==A♣K♦== und der Big Blind callt. Flop: ==K♠ 7♦ 2♣.== Das ist ein hohes, trockenes, unverbundenes Board, das meiner Range gehört — und ich habe **Top Pair, Top Kicker** gefloppt: mein K♦ pairt das K♠, mit dem Ass als bestmöglichem Kicker (beste Fünf = K♦ K♠ A♣ 7♦ 2♣). Ich bette **ein Drittel Pot** als Range-Bet: es kassiert all seine verfehlten Hände ab und hält schlechtere Könige und Paare drin. Einfache, profitable C-Bet.

**Spot 2 — ein lehrbuchmäßiger Check.** Gleiche Session, ich raise ==A♥Q♥== und der Big Blind callt. Flop: ==7♠ 6♠ 5♦.== Dieses Board zerschmettert genau die Hände, mit denen er gecallt hat — Suited Connectors, kleine Paare und Straßen — während ich nur Ass-hoch habe, ohne Paar und ohne Draw (keine Herz auf dem Board, also nicht mal ein Backdoor-Flush). Zwei Jahre früher hätte ich aus Gewohnheit "fortgesetzt" und wäre geraist worden. Jetzt **checke ich und gebe auf.** Wenn ein sicherer Turn kommt und ich Equity dazubekomme, ist eine Delayed C-Bet verfügbar; wenn nicht, habe ich das Minimum verloren.

Gleicher Preflop-Raise, entgegengesetzte Flops, entgegengesetzte richtige Züge. Das ist die ganze Lektion: **das Board entscheidet, nicht die Tatsache, dass du geraist hast.**

---

## Die 7 häufigsten C-Bet-Fehler

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Der Fehler | Warum er dich kostet | Die Lösung |
|:---|:---|:---|
| **Jeden Flop auf Autopilot c-betten** | Ignoriert, dass viele Boards den Caller favorisieren | Lies zuerst die Textur |
| **Groß betten mit einer weiten Range** | Weite Ranges wollen kleines Sizing, nicht großes | Klein auf trocken, groß nur wenn polarisiert |
| **Multiway light c-betten** | Fold Equity kollabiert mit mehr Spielern | Nur Value & Draws gegen 2+ |
| **Zu oft OOP c-betten** | Du kannst als Erster keine Equity realisieren | Checke öfter, bau eine Checking-Range auf |
| **In ein Board betten, das sie getroffen hat** | 7‑6‑5 zerlegte ihre Range, nicht deine | Checke und gib auf |
| **"One-and-done"-Barreling** | Flop c-betten, Turn immer aufgeben = leicht zu floaten | Hab einen Turn-Plan, bevor du feuerst |
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

A. Eine Continuation Bet, oder C-Bet, ist ein Einsatz am Flop von dem Spieler, der vor dem Flop geraist hat. Du "setzt" die Stärke fort, die du preflop gezeigt hast. Du musst den Flop nicht getroffen haben, um zu c-betten — weil eine Hand den Flop etwa zwei Drittel der Zeit verfehlt, gewinnt eine gut gewählte C-Bet oft den Pot, wenn dein Gegner nichts hat.

**Q. Warum heißt es Continuation Bet?**

A. Weil du die Aggression fortsetzt, die du vor dem Flop begonnen hast. Du hast preflop geraist, um die Führung zu übernehmen, und der Flop-Einsatz setzt diese Story auf der nächsten Straße fort. Hätte jemand anderes preflop geraist, wäre dein Flop-Einsatz keine C-Bet — der Begriff meint speziell den Preflop-Raiser, der den Flop bettet.

**Q. Solltest du jeden Flop c-betten?**

A. Nein — das ist der häufigste C-Bet-Fehler. Bette die Flops, die deine Range favorisieren (hohe, trockene Boards wie K-7-2, wo du mehr Top Pairs und Overpairs hältst) und checke die, die deinen Gegner favorisieren (niedrige, verbundene Boards wie 7-6-5, die die Hände treffen, mit denen er gecallt hat). Jeden Flop auf Autopilot zu c-betten wird von guten Spielern bestraft.

**Q. Wie oft solltest du c-betten?**

A. Es hängt von Position, Board und Anzahl der Gegner ab, also behandle diese als Bereiche, nicht als Regeln: grob 70–100% (in kleiner Größe) in Position heads-up auf einem trockenen Board, etwa 40–50% out of Position und 50% oder weniger multiway. Eine gesunde Gesamt-C-Bet-Rate am Flop liegt bei etwa 55–70% — über 85% bedeutet, dass du auf Autopilot fährst.

**Q. Wie viel solltest du c-betten?**

A. Sizing nach dem Board. Auf trockenen, statischen Boards bette klein — etwa ein Drittel des Pots — weil die Range deines Gegners schwach ist und du keine Draws abkassieren musst. Auf wet, dynamischen Boards bette groß — zwei Drittel Pot oder mehr — um Flushes und Straight Draws abzukassieren und den Pot mit deinen starken Händen aufzubauen. In Turnieren tendiere kleiner, oft halber Pot oder weniger.

**Q. Solltest du out of Position c-betten?**

A. Seltener als in Position. Wenn du auf jeder Straße als Erster ohne Information handelst, kannst du deine Equity nicht so gut realisieren, also checkst du weit öfter — sogar einige Hände, die du in Position auto-betten würdest — und du hältst bewusst einige starke Hände in deiner Checking-Range, damit deine Checks nicht automatisch schwach sind. Position lässt C-Bets besser funktionieren, Punkt.

**Q. Solltest du in einem Multiway-Pot c-betten?**

A. Viel weniger als heads-up. Jeder zusätzliche Gegner macht es wahrscheinlicher, dass jemand getroffen hat, also kollabiert deine Fold Equity. Gegen zwei oder mehr Spieler bette deine starken fertigen Hände und besten Draws für Value und Protection, und checke fast alles andere. Bluffs in drei oder mehr Spieler zu betten ist ein klassischer Verlustbringer.

**Q. Was ist eine Delayed C-Bet?**

A. Eine Delayed C-Bet ist, wenn der Preflop-Raiser den Flop checkt und dann den Turn bettet. Sie ist nützlich, wenn der Flop deinen Gegner favorisierte (Betten also schlecht war), der Turn aber deine Equity verbessert, wenn du eine anständige Hand in Position durchgecheckt hast oder um Gegner zu fangen, die planten, deinen Flop-Einsatz zu bluff-raisen. Es ist einer der am meisten unterschätzten profitablen Züge im Poker.

**Q. Wann solltest du NICHT c-betten?**

A. C-bette nicht, wenn das Board die Range deines Gegners zerlegt hat (niedrige verbundene Boards), wenn du out of Position mit einer marginalen Hand auf einem dynamischen Board bist, wenn du multiway mit Air bist oder wenn deine Hand lieber eine Checking-Range schützt. Checken in diesen Spots ist keine Schwäche — es spart Chips und macht deine zukünftigen Einsätze glaubwürdiger.

**Q. Ist eine C-Bet ein Bluff?**

A. Manchmal ja, manchmal nein — das ist der Punkt. Viele C-Bets sind Semi-Bluffs oder reine Bluffs mit Händen, die verfehlt haben, und betten, weil dein Gegner wahrscheinlich auch verfehlt hat. Andere sind Value Bets mit starken Händen. Eine ausbalancierte C-Bet-Strategie mischt beides auf denselben Boards, sodass Gegner nicht erkennen können, ob dein Flop-Einsatz Stärke oder Air bedeutet.

**Q. Was ist ein guter C-Bet-Prozentsatz auf einem Poker-HUD?**

A. Etwa 55–70% für Flop-C-Bet ist ein gesundes, ausbalanciertes Band. Über etwa 85% signalisiert jemanden, der zu viel c-bettet und durch Floaten und Raisen ausgebeutet werden kann; unter etwa 40% signalisiert einen Spieler, der nur bettet, wenn er stark ist, sodass du gegen seine C-Bets sicher folden und stechen kannst, wenn er checkt. Behandle es als Gesundheitscheck, nicht als Ziel.

---

## Das C-Bet-Playbook in Kürze

1. **Eine C-Bet ist ein Flop-Einsatz vom Preflop-Raiser** — und sie funktioniert, weil Hände den Flop etwa zwei Drittel der Zeit verfehlen.
2. **Das Board entscheidet.** Bette hohe, trockene Boards, die deine Range favorisieren; checke niedrige, verbundene Boards, die die Range deines Gegners favorisieren.
3. **Range Advantage bestimmt die Frequenz; Nut Advantage bestimmt die Größe.** Bette oft auf Boards, die du dominierst; bette groß nur, wenn du mehr der Nuts hältst.
4. **Klein (⅓) auf trocken, groß (⅔+) auf wet.** C-bette weniger out of Position und deutlich weniger multiway.
5. **Checken ist eine Waffe.** Die besten Spieler checken oft und mit Absicht — die C-Bet ist ein Skalpell, kein Hammer.

Mach das richtig, und du hörst auf, Pots auf Boards zu verbrennen, die nie deine zum Betten waren. Kombiniere scharfes C-betten mit einem soliden [3-Bet-Spiel](/de/blog/holdem-3bet), echtem [Positions](/de/blog/holdem-position-play)-Bewusstsein und dem vollständigen [Strategie-Framework](/de/blog/holdem-strategy), und dein Flop-Spiel lässt die "jeden Flop betten"-Meute leise hinter sich.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Das 5-Entscheidungen-Framework</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wo die C-Bet in ein gewinnendes Spiel passt</div>
  </a>
  <a href="/de/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-Betting erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">C-betten beginnt auch in 3-Bet-Pots</div>
  </a>
  <a href="/de/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Deine Position spielen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum C-Bets in Position besser funktionieren</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pot Odds berechnen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum eine große C-Bet die Draws abkassiert</div>
  </a>
</div>
`.trim(),
};

export default POST;
