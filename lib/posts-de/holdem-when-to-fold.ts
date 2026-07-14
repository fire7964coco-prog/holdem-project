import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-when-to-fold",
  title: "Wann folden im Poker: die Fähigkeit, die im Stillen am meisten gewinnt",
  seoTitle: "Warum du eine gute Hand nicht ablegen kannst — wann folden",
  desc: "Folden ist die unterschätzteste Gewinner-Fähigkeit. Wann du preflop und auf jeder Street foldest, die Pot-Odds-Grenze und wie du eine starke Hand ablegst.",
  tldr: "Folden ist die am meisten unterschätzte Fähigkeit im Poker — das schlechteste Ergebnis eines Folds ist null, während ein verlorener Call jedes Mal Chips verblutet. Ein solider Spieler foldet rund 75–85% seiner Hände vor dem Flop, legt nach dem Flop verfehlte Hände und schwache Draws ab, die seine Pot Odds nicht erfüllen, und — am schwersten von allem — gibt starke, aber geschlagene Hände auf, wenn die Linie eines passiven Gegners nach Value schreit. Die meisten Spieler callen nicht zu viel, weil sie Hände nicht lesen können; sie callen, weil sich die Chips im Pot bereits wie ihre eigenen anfühlen. Sind sie aber nicht.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 Min.",
  emoji: "🛡️",
  image: "/images/holdem-when-to-fold-hero.webp",
  imageAlt: "Ein Pokerspieler schiebt seine Karten verdeckt in den Muck unter dem Tischlicht und entscheidet sich zu folden, statt eine Bet zu bezahlen",
  tags: ["wann folden poker", "wann preflop folden", "gute hand folden", "fold-disziplin", "sunk cost poker", "starke hand ablegen", "fold auf river-raise", "pot odds fold"],
  content: `
Die teuerste Hand meines ersten Jahres war keine, die ich verloren habe — es war eine, die ich mich weigerte zu verlieren. Ich flopte Top Two Pair, ein passiver alter Hase raiste mich auf einem gepaarten River, und jede Alarmglocke sagte *er hat ein Full House.* Ich callte trotzdem. Ich redete mir ein, ich "könnte nach so viel Investment nicht mehr folden". Er zeigte das Boat, und ich fuhr nach Hause und spielte den exakten Moment immer wieder durch, in dem ich es wusste und trotzdem callte. In dieser Nacht lernte ich die Wahrheit, die jeder gewinnende Spieler irgendwann akzeptiert: ==der Fold ist der stärkste Move im Poker und der schwerste, den man macht.==

**Folden — deine Hand in den Muck legen, statt zu callen oder zu raisen — ist die am meisten unterschätzte Fähigkeit im Spiel.** Es hat kein Highlight-Reel und keinen Dopamin-Kick, aber das schlimmstmögliche Ergebnis eines Folds ist exakt *null*, während ein schlechter Call jedes einzelne Mal Geld verliert. Das ist der komplette Guide dazu, *wann man foldet*: vor dem Flop, auf jeder Street danach, die genaue Mathematik, die enge Spots entscheidet, wie du eine wirklich gute Hand ablegst und wie du die Psychologie besiegst, die das Folden unmöglich erscheinen lässt. Es ist die Disziplin, die eine gewinnende [Texas-Hold'em-Strategie](/de/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") verankert.

---

### Warum Folden gewinnt

:::stripe
75–85% | Hände, die ein solider Spieler vor dem Flop foldet
0 | Das Maximum, das ein Fold dich je kosten kann (ab hier)
25% | Equity, die du brauchst, um eine Half-Pot-Bet zu callen
Mathe > Angst | Der einzige Grund zu folden — oder nicht
:::

---

## Was Folden wirklich ist (und warum es die unterschätzteste Fähigkeit ist)

In jeder Hand hast du drei Optionen: betten/raisen, callen oder folden. Folden heißt, den Pot aufzugeben und keine weiteren Chips zu riskieren. Neue Spieler behandeln es als Verlieren. Gewinner behandeln es als ==Weigerung, mehr zu verlieren.==

Hier ist die Idee, die alles neu einordnet: **der Erwartungswert eines Folds ist, ab dieser Entscheidung, null.** Wenn du wirklich geschlagen bist, ist jede andere Option *negativ* — callen kostet dich den Call, raisen kostet dich mehr. Null schlägt negativ. Folden gewinnt nicht den Pot, aber es gewinnt das lange Spiel, indem es keine Chips an Spots verschenkt, in denen du hinten liegst.

Ein präziser Vorbehalt, weil er wichtig ist: Folden ist *nicht kostenlos.* Die Chips, die schon im Pot liegen, sind in dem Moment weg, in dem du sie hineingelegt hast — Folden verhindert nur, dass du *gutem Geld schlechtes hinterherwirfst.* Diese Unterscheidung ist die gesamte Psychologie des Foldens, und wir kommen darauf zurück. Zuerst die Mechanik.

---

## Wann du vor dem Flop foldest

Das größte Leak im Poker ist, zu viele Hände zu spielen, also ist der größte einzelne Fix, die meisten davon zu folden. **Ein solider Tight-Aggressive-Spieler foldet ungefähr 75–85% seiner Hände preflop** — eher 75–80% in 6-max-Spielen und 80–86% in Full-Ring. Falls das extrem klingt, denk daran: Die Hände, die du behältst, sind im Schnitt stärker als die deiner Gegner — genau da kommt dein Edge her.

Folde preflop, wenn:

- **Deine Hand einfach schwach oder Trash ist** — offsuit unverbundene Karten (J‑4, Q‑7, K‑3), schwache Asse (A‑7 offsuit und darunter aus frühen Positionen) und die meisten offsuit "eine hohe Karte"-Hände. Wenn sie für diese Position nicht auf deinem [Starthand-Chart](/de/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") steht, ab in den Muck.
- **Du in früher Position sitzt** — du handelst auf jeder Street zuerst, also brauchst du eine stärkere Hand zum Einsteigen. K‑J offsuit ist ein Fold Under the Gun und ein Raise auf dem Button.
- **Du dominiert bist.** A‑9 offsuit gegen einen tighten Raiser aus früher Position ist meist geschlagen von dessen A‑T, A‑J, A‑Q, A‑K — dasselbe Ass, schlechterer Kicker. Domination ist der leise Killer; folde, statt am Kicker unterzugehen.
- **Du einer [3-Bet](/de/blog/holdem-3bet) mit dem schwächeren Teil deiner Range gegenüberstehst.** Du hast breit geöffnet, also foldet der Großteil dieser Range gegen eine Re-Raise — mach mit deinen besten Händen weiter und lass den Rest gehen. Gegen eine große **4-Bet** foldest du deine kleinen Paare und spekulativen suited Hände; ihre Implied Odds sind kollabiert.

Die eine Hand, die du im Cashgame vor dem Flop im Grunde *nie* foldest, ist ein Pocket-Ass-Paar — es ist der Favorit gegen jedes andere Holding. (Die seltenen Ausnahmen leben in Turnier-Bubble- und Satellite-Spots, wo Überleben einen winzigen Edge überwiegen kann. Im Cashgame: niemals.)

---

## Wann du nach dem Flop foldest — Street für Street

Postflop-Folden ist der Ort, an dem echtes Geld gespart wird, und jede Street stellt eine andere Frage.

![Ein volles Fünf-Karten-Board auf dem grünen Filz neben einem großen Chipstapel, während ein Spieler zwei verdeckte Karten hält und abwägt, ob er auf einer späteren Street folden soll](/images/holdem-fold-board.webp "Jede Street ändert die Frage: auf dem Flop fragst du, ob du getroffen hast, am River fragst du nur, ob du eine Value-Bet schlagen kannst")

**Flop — "Hat dieses Board mir geholfen oder ihnen?"** Wenn du verfehlst und auf einem Board, das zur Range deines Gegners passt, einer Bet gegenüberstehst, lass es gehen. Ace-High ohne Draw auf einem koordinierten Board ist keinen Call wert, "um den Turn zu sehen". Folde auch schwache Draws — ein Gutshot ohne weitere Equity und zu schlechtem Preis ist ein Fold, kein Chase.

**Turn — die Aufgabe-Street.** Das ist der wichtigste Fold im Poker und der, den Spieler überspringen. Auf dem Turn polarisieren Ranges Richtung "sehr stark oder busted", und die Bet-Sizes explodieren. Dein Flop-Float, der sich nicht verbessert hat, dein Second Pair, das jetzt einem zweiten Barrel gegenübersteht, dein Draw, der gerade mit einer Karte übrig und zu schlechtem Preis verfehlt hat — das sind Turns zum Ablegen, nicht um sich einen weiteren Call einzureden. Wenn du "den Flop gefloatet hast, um den Turn zu bluffen", und der Turn dir keinen Grund gegeben hat, gib auf.

**River — reines Bluff-Catching.** Du drawst auf nichts mehr; die einzige Frage ist *"kann meine Hand die Hände schlagen, die sie hier für Value betten würden?"* Wenn ein passiver Spieler groß in ein gruseliges Board feuert, ist die ehrliche Antwort meist nein. Folde die Hände, die nur einen Bluff schlagen, wenn dein Gegner selten blufft. Was uns zur Mathematik bringt.

---

## Die Mathematik des Foldens: die Pot-Odds-Grenze

Enge Calls sind kein Gefühl — sie sind ein Bruch. Um eine Bet profitabel zu callen, muss deine Gewinnchance den Preis übersteigen, den man dir bietet. Merk dir diese Tabelle, und die Hälfte deiner harten Spots löst sich von selbst:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bet-Size (in den Pot) | Pot Odds, die du bekommst | Equity zum Callen nötig | Folde, wenn du weniger hast |
|:---|:---:|:---:|:---:|
| **Half Pot** | 3:1 | **25%** | unter 25% |
| **Two-Thirds Pot** | 2,5:1 | **~29%** | unter 29% |
| **Full Pot** | 2:1 | **~33%** | unter 33% |
| **Overbet (1,5× Pot)** | ~1,7:1 | **~37,5%** | unter 37,5% |

</div>

Jetzt in die Praxis. Sagen wir, du hast einen Flushdraw — neun Karten vervollständigen ihn — mit einer Karte, die noch kommt. Neun Outs von den 46 ungesehenen Karten sind ==9 ÷ 46 ≈ 19,6%==, oder etwa **4:1 gegen** ein Treffen. (Schneller Shortcut: die [Regel der 2](/de/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") — Outs × 2 ≈ dein Prozentsatz für eine Karte, also 9 × 2 ≈ 18%.)

- **Der Pot ist $100 und dein Gegner bettet $50 auf dem Turn.** Du callst $50, um $150 zu gewinnen — das sind 3:1, also brauchst du **25%** Equity. Dein Draw ist nur ~19,6%. ==r:Fold.== Der Preis ist falsch.
- **Derselbe Draw, aber sie betten nur $25 in $100.** Jetzt callst du $25, um $125 zu gewinnen — 5:1, es braucht nur **16,7%**. Deine ~19,6% übersteigen das locker. ==g:Call.==

Dieselbe Hand, gegensätzliche Entscheidungen — weil sich der *Preis* geändert hat, nicht die Karten. Das sind Pot Odds, und das ist der Unterschied zwischen Chasen und Callen. (Implied Odds — Geld, das du *später* gewinnst, wenn du triffst — können manche dünneren Calls rechtfertigen, aber setz sie nie gegen einen kurzen Stack oder ein Board voraus, das deine Action killt.)

---

## Der schwerste Fold: eine gute Hand loslassen

Trash zu folden ist einfach. Eine *gute* Hand zu folden — Top Pair, ein Overpair, sogar ein Set — ist das, was gewinnende Spieler vom Rest trennt. Die mentale Falle ist der Gedanke "das ist eine starke Hand", wenn die einzige Frage, die zählt, lautet: "ist sie *gerade jetzt, gegen diese Linie* stark?"

**Top Pair ist nicht die Spitze deiner Range.** In einem geraisten oder re-geraisten Pot sind Top Pair und Overpairs mittelstarke Hände. Gegen schwere, mehrstöckige Aggression — besonders eine Raise auf einem gruseligen River — sind sie oft geschlagen, und die Disziplin, sie loszulassen, ist ein **guter Laydown**, keine Schwäche. Hier sind die Hände, die Spieler heiraten, obwohl sie die Scheidung einreichen sollten:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand, an der du klebst | Die Falle | Warum du folden solltest |
|:---|:---|:---|
| **Top Pair, schwacher Kicker** | Großen Turn- + River-Bets ausgesetzt | Du schlägst Bluffs und schwächere Paare — aber ihre Value-Range hat dich am Kicker geschlagen |
| **Overpair (JJ/QQ)** | Ein passiver Spieler raist ein koordiniertes Board | Passive Spieler raisen die Nuts, keine Luft — du drawst dünn |
| **Top Pair Top Kicker** | Board läuft aus auf vier zu einem Flush oder einer Straße | Dein eines Paar kann den Flush/die Straße, die sie repräsentieren, nicht schlagen |
| **Ein Set** | Monotones oder Vier-zur-Straße-Board, große Raise | Set-over-Set ist ein Cooler, aber der komplettierte Flush nicht — lies die Textur |
| **Second Pair** | Drei Streets callen, "um sie ehrlich zu halten" | Du bezahlst dreimal Value, um einen Bluff zu fangen |

</div>

Das Spiegelbild zählt auch, denn **Folden kann selbst ein Leak sein.** Ein *guter* Laydown legt eine geschlagene Hand gegen eine Linie ab, die Sinn ergibt. Ein *schlechter* Laydown foldet die beste Hand aus Angst auf eine Scare Card — und wenn du das oft machst, werden denkende Gegner dich unerbittlich bluffen. Das Ziel ist nicht, mehr oder weniger zu folden; es ist, zu folden, *wenn die Beweise da sind.*

---

## Die Psychologie des Foldens: Sunk Cost, Ego und Angst

Hier ist das Geheimnis, das die Strategie-Charts dir nicht verraten: **die meisten schlechten Calls sind keine Lesefehler — sie sind emotionale.** Drei Übeltäter richten den Schaden an.

![Ein Pokerspieler tief in Gedanken, die Hand am Kinn, ringt mit der Entscheidung zwischen Call und Fold, Chips und verdeckte Karten im Vordergrund](/images/holdem-fold-psychology.webp "Die härtesten Folds gehen an die Emotion verloren, nicht an die Mathematik — der Drang, es zu sehen, recht zu haben und Chips nicht loszulassen, die sich schon wie deine anfühlen")

**Sunk Cost — "Ich habe schon so viel reingesteckt."** Das ist der große. Die Chips, die du früher gebettet hast, gehören *nicht mehr dir* — sie gehören dem Pot. Jede Entscheidung ist unabhängig, beurteilt nur danach, was *ab hier* passiert. "Ich bin Pot-committed, weil ich so viel investiert habe" ist der Sunk-Cost-Fehlschluss im Pokerstuhl. (Echtes Pot-Commitment existiert, aber es kommt aus dem *aktuellen* Preis relativ zu einem großen Pot — nicht aus dem, was du vor drei Streets ausgegeben hast.)

**Ego — "Ich muss wissen, ob er blufft."** Aus Neugier zu callen, oder um den Stich zu vermeiden, *vielleicht* geblufft worden zu sein, heißt, das Maximum für Informationen zu zahlen, die du nicht brauchst. Du wirst manchmal geblufft. Das ist okay — ein Fold-Knopf, der *nie* falsch liegt, bedeutet, dass du viel zu viel foldest und jeder Value-Bet Blut spendest. Manage deine Entscheidungen, nicht dein Ego.

**Angst — die beste Hand auf eine Scare Card folden.** Das entgegengesetzte Versagen: so ängstlich, geschlagen zu sein, dass du Gewinner loslässt. Der Fix für beide Pole ist derselbe Satz — ==folde aus Mathematik, nicht aus Angst.== Folde, weil der Preis falsch ist oder die Geschichte Value erzählt, nicht weil du "ein schlechtes Gefühl" hast.

Zwischen den beiden Extremen sitzen die zwei verlierenden Profile: die **Calling Station**, die nie foldet und jede Value-Bet bezahlt, und der **Nit**, der so viel foldet, dass gute Spieler einfach jeden Pot betten und ihn überrollen. Gewinnendes Folden lebt in der disziplinierten Mitte: tight, aber nicht ängstlich.

---

## "Soll ich folden?" — ein 30-Sekunden-Selbstcheck

Vor jedem großen Call geh diese Checkliste durch. Wenn die ehrlichen Antworten immer wieder auf "ich schlage hier nur einen Bluff" zeigen, hast du einen Fold:

:::steps
Kann ich die schwächeren Hände nennen, die sie so betten würden? | Wenn die einzigen Hände, die so betten, mich schlagen, bezahle ich Value.
Übersteige ich die Pot-Odds-Grenze? | Wenn meine Equity unter der Zahl in der Tabelle liegt, sagt der Preis: folde.
Ist diese Linie eine Value-Bet oder ein Bluff? | Passive Spieler und große River-Raises sind Value — glaub ihnen.
Calle ich nur, um "es zu sehen"? | Neugier und Ego sind keine Gründe; das ist die Sunk-Cost-Falle, die spricht.
Würde ich diese Hand hier selbst für Value betten? | Wenn nicht, kann ich damit wahrscheinlich auch keine Bet callen.
:::

Nichts davon dauert dreißig echte Sekunden, sobald es zur Gewohnheit wird — aber für die großen Entscheidungen langsamer zu werden, ist genau das, was die Calling Station nie tut.

---

## Ein echter Laydown, Hand für Hand

Hier ist ein Fold, auf den ich stolz bin, so ausbuchstabiert, dass du ihn selbst überprüfen kannst. $1/$2 Cashgame, 100bb tief.

- **Meine Hand:** ==A♥K♣.== Ich raise, der Big Blind — ein tighter, passiver Spieler — callt.
- **Flop:** ==K♦ 9♠ 4♥.== Ich habe Top Pair, Top Kicker. Ich bette, er callt. Standard.
- **Turn:** ==7♣.== Ein Blank. Ich bette wieder für Value, er callt wieder. Sieht noch gut aus.
- **River:** ==9♥.== Das Board pairt, liest jetzt ==K♦ 9♠ 4♥ 7♣ 9♥==, und der passive Spieler **check-raist** mich plötzlich groß.

Rechnen wir es aus. Meine besten fünf Karten sind ==K♣ K♦ 9♠ 9♥ A♥== — Zwei Paare, Könige und Neunen, Ass-Kicker. Es *fühlt* sich riesig an. Aber ein tighter, passiver Spieler, der mitgegangen ist und jetzt einen River raist, der die Neun gepaart hat, erzählt eine sehr spezifische Geschichte: Er hat eine Neun — Trip Neunen, oder ein Full House wie Neunen-Full — und fast nie einen Bluff. Gegen seine Raising-Range sind meine Zwei Paare fast immer geschlagen. Ich folde. Es hat geschmerzt; es war auch mehr wert als der Pot, weil genau diese Disziplin jede Session einen Stack rettet. **Die Hand war stark. Die Situation nicht.**

---

## Die 7 häufigsten Fold-Fehler

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Der Fehler | Warum er dich kostet | Der Fix |
|:---|:---|:---|
| **Zu viel callen (die Station)** | Du bezahlst jede Value-Bet im ganzen Haus | Standardmäßig folden, wenn du nur einen Bluff schlägst |
| **Die offensichtliche Value-Bet bezahlen** | Passive große Bets sind fast nie Bluffs | Glaub der Geschichte; folde |
| **Top Pair / Overpairs heiraten** | Es sind mittlere Hände in großen Pots | Folde gegen schwere mehrstöckige Aggression |
| **Draws ohne den Preis chasen** | Die Pot Odds sagen, dein Call verliert langfristig | Übersteige die Grenze oder folde |
| **Sunk-Cost-Callen** | "Schon drin" ist kein Grund | Beurteile nur die Entscheidung vor dir |
| **Hero-Callen, "um sie ehrlich zu halten"** | Du fängst einen Bluff, bezahlst zehn Values | Reserviere es für Spieler, die tatsächlich bluffen |
| **Auf jede Scare Card overfolden (der Nit)** | Gute Spieler bluffen dich von der besten Hand weg | Folde gegen Value-Linien, nicht gegen Angst |

Beachte, dass beide Pole hier sind: folde *mehr* gegen die value-lastigen Spieler, die nie bluffen (der Großteil der Low-Stakes-Population), und folde *weniger* gegen die denkenden Regulars, die genug bluffen, um einen Nit auszunutzen.

</div>

---

:::readnext[Weiterlesen]
/de/blog/holdem-strategy | Die 5 Entscheidungen hinter gewinnendem Poker | /images/holdem-strategy-hero.webp
/de/blog/holdem-pot-odds | Die Mathematik, die enge Calls entscheidet | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. Wann sollte man im Poker folden?**

A. Folde immer dann, wenn Callen oder Raisen auf lange Sicht Geld verliert: wenn deine Hand preflop zu schwach ist, wenn du den Flop verfehlst und auf einem Board, das zur Range deines Gegners passt, Aggression gegenüberstehst, wenn ein Draw seine Pot Odds nicht erfüllt und wenn eine value-lastige Linie die Hand schlägt, die du hältst. Das schlechteste Ergebnis eines Folds ist null, also schlägt das Folden eines verlorenen Spots immer das Callen.

**Q. Wie oft sollte man preflop folden?**

A. Ein solider Tight-Aggressive-Spieler foldet ungefähr 75–85% seiner Hände vor dem Flop — eher 75–80% in 6-max-Spielen und 80–86% in Full-Ring. Weniger, stärkere Hände zu spielen, ist der größte einzelne Fix für die meisten verlierenden Spieler. Wenn du weit mehr als ein Fünftel deiner Hände einsteigst, spielst du fast sicher zu viele.

**Q. Wann sollte man eine gute Hand folden?**

A. Folde eine starke Hand, wenn die Action dir sagt, dass sie geschlagen ist: Top Pair oder ein Overpair gegenüber schwerer, mehrstöckiger Aggression, besonders eine Raise von einem passiven Spieler oder ein gruseliger River, der offensichtliche Draws komplettiert. Top Pair ist nicht die Spitze deiner Range in einem großen Pot. Ein disziplinierter Laydown einer geschlagenen starken Hand ist ein gewinnender Move, kein schwacher.

**Q. Sollte man je ein Pocket-Ass-Paar folden?**

A. Im Cashgame im Grunde nie vor dem Flop — Asse sind der mathematische Favorit gegen jede andere Starthand. Nach dem Flop kann ein Overpair aus Assen gelegentlich gegen extreme Aggression auf einem gefährlichen Board gefoldet werden. Die seltenen Preflop-Ausnahmen sind Turnier-Bubble- und Satellite-Spots, wo Überleben einen kleinen Edge überwiegen kann.

**Q. Wann sollte man Top Pair folden?**

A. Folde Top Pair, wenn dein Kicker schwach ist und du großen Turn- und River-Bets gegenüberstehst, wenn das Board auf einen offensichtlichen Flush oder eine Straße ausläuft und dein Gegner hineinbettet, oder wenn ein passiver Spieler raist. Top Pair schlägt Bluffs und schwächere Paare, aber gegen eine value-lastige Linie liegt es oft hinten — und drei Streets zu callen, um einen Bluff zu fangen, verliert Geld.

**Q. Was ist der Sunk-Cost-Fehlschluss im Poker?**

A. Es ist der falsche Glaube, dass du, weil du schon Chips in den Pot gelegt hast, weiter callen musst, um dieses Investment zu "schützen". Diese Chips gehören nicht mehr dir — sie gehören dem Pot — also sollte jede Entscheidung nur danach beurteilt werden, was ab hier passiert. "Ich bin schon für so viel drin" ist die klassische Sunk-Cost-Falle, und sie ist die häufigste Ursache für schlechte Calls.

**Q. Sollte ich folden oder callen, wenn ich unsicher bin?**

A. Wenn es wirklich eng ist und du unsicher bist, ist Folden meist der bessere Standard — besonders bei Low Stakes, wo Gegner weit weniger bluffen, als sie sollten. Frag dich, ob du die Pot-Odds-Grenze übersteigst und ob ihre Linie nach Value oder nach einem Bluff aussieht. Wenn du nicht genug schwächere Hände nennen kannst, die sie betten würden, folde und geh weiter zu einem klareren Spot.

**Q. Woher weiß man, wann man auf eine River-Raise foldet?**

A. Behandle eine River-Raise, besonders von einem passiven Spieler, als Value, bis das Gegenteil bewiesen ist. Die meisten Spieler haben nicht genug Bluffs in ihrer Raising-Range am River, also bedeutet eine große Raise meist eine Hand, die ein Paar oder zwei Paare schlägt. Sofern der Gegner nicht aggressiv und zum Bluff-Raise fähig ist, ist es korrekt, alles außer deinen stärksten Händen zu folden.

**Q. Ist Folden ein Zeichen von Schwäche?**

A. Nein — diszipliniertes Folden ist ein Zeichen von Können. Die besten Spieler der Welt folden die überwältigende Mehrheit ihrer Hände und legen starke Hände ab, wenn die Situation es verlangt. Was wie Schwäche aussieht, ist in Wahrheit die Weigerung, Chips an verlorene Spots zu verschenken. Die echte Schwäche ist die Unfähigkeit loszulassen, die jeder starke Gegner ausnutzen wird.

**Q. Kann man im Poker zu viel folden?**

A. Ja. Jedes Mal zu folden, wenn du Druck gegenüberstehst, macht dich zum "Nit", und aufmerksame Gegner werden einfach jeden Pot betten, um dich zu überrollen und dich von der besten Hand wegzubluffen. Das Ziel ist nicht, so viel wie möglich zu folden — es ist, zu folden, wenn die Mathematik oder die Linie des Gegners sagt, dass du geschlagen bist, und dennoch genug zu verteidigen, dass du nicht nach Belieben geblufft werden kannst.

**Q. Wann sollte man ein Overpair folden?**

A. Folde ein Overpair, wenn ein passiver Gegner echte Aggression auf einem koordinierten oder gepaarten Board zeigt — eine Check-Raise oder ein großes Turn-und-River-Barrel. Passive Spieler raisen starke Hände, keine Luft, also liegt dein Overpair meist hinter einem Set, zwei Paaren oder einer Straße. Gegen aggressive Gegner, die bluffen, kannst du mehr weitermachen, aber eine passive Linie, die nach Stärke schreit, ist ein Fold.

---

## Das Fold-Playbook, kurz gefasst

1. **Das schlechteste Ergebnis eines Folds ist null** — wenn du geschlagen bist, schlägt das jede negative Alternative.
2. **Folde die meisten Hände preflop** (75–85%), folde die verfehlten Hände und ausgepreisten Draws nach dem Flop, und behandle den **Turn als die Aufgabe-Street.**
3. **Übersteige die Pot-Odds-Grenze oder folde** — 25% gegen eine Half-Pot-Bet, ~33% gegen eine potgroße Bet.
4. **Lege gute Hände ab, wenn die Linie nach Value schreit** — Top Pair ist nicht die Spitze deiner Range.
5. **Folde aus Mathematik, nicht aus Angst** — besiege die Sunk-Cost-Falle, ignoriere dein Ego und denk daran, dass die Chips im Pot nie deine waren, die du schützen müsstest.

Meistere den Fold, und du hörst auf, der Spieler zu sein, der "einfach nicht davon loskam". Paare diese Disziplin mit scharfer [Pot-Odds](/de/blog/holdem-pot-odds)-Mathematik, einem soliden [3-Bet-Spiel](/de/blog/holdem-3bet) und dem vollen [Strategie-Rahmen](/de/blog/holdem-strategy), und du wirst im Stillen die Pots gewinnen, die zählen, indem du die verlierst, die es nicht tun.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Das Framework der 5 Entscheidungen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wo das Folden in ein gewinnendes Spiel passt</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pot Odds berechnen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Grenze hinter jedem Fold</div>
  </a>
  <a href="/de/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-Betting erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wann du auf eine Re-Raise foldest</div>
  </a>
  <a href="/de/blog/holdem-continuation-bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Die Continuation Bet</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wann du auf eine C-Bet foldest</div>
  </a>
</div>
`.trim(),
};

export default POST;
