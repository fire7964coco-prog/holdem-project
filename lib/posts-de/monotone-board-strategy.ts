import type { Post } from "../posts";

/**
 * GTO-Solver-Serie Nr. 5, deutsche Fassung – Q♠9♠2♠, monotones Board (eine Farbe).
 * Quelle: lib/posts-en/monotone-board-strategy.ts (EN updated 2026-09-26). Zahlen: Lernspot-Ausgabe vom 2026-08-20,
 *   docs/gto-solver-series-spec.md §4-B. Vertrag: docs/de-gto-source-contract.md (§2-C ⑤, §4 ⑤). Brief: docs/de-gto-series-translation-brief.md.
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 5 («monotoner Flop Strategie», redaktioneller Longtail).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md. «GTO-Trainer» = Sidebar-Beschriftung der /de/solver-Landingpage.
 * Grenzen: nur die erste Entscheidung des BB am Flop; keine Sizing-Frequenzen des BTN; ohne Rake.
 *   Blocker-Absatz folgt der EN-Fassung vom 09-26 (Mix zwischen fast gleichwertigen Optionen, keine Blocker-Regel).
 * Abweichung zu EN: ein Szenenbild (scene-de) vor der ersten Bedingungstabelle (de-Pilot).
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "Monotoner Flop: Der Nut Flush checkt",
  seoTitle: "Monotoner Flop Q-9-2: Warum selbst der Nut Flush checkt",
  desc: "Auf einem monotonen Flop verschwindet die große Bet fast ganz – 3,2%. Selbst der Nut Flush checkt im Schnitt 69,9%. Warum die Size auf drei Pik so einbricht.",
  tldr: "Auf Q♠9♠2♠, wo alle drei Flopkarten dieselbe Farbe haben, checkt der Big Blind 88,8%, bettet klein in 8,0% der Fälle und groß nur in 3,2%. Die große Size verschwindet fast, weil die Nuts feststehen: Ein fertiger Flush wird ohnehin schon von kleinen Bets gecallt, und je größer du ohne Flush bettest, desto mehr verengen sich deine Caller auf Flushes. Selbst der Nut Flush checkt im Schnitt 69,9% – und Flushes unterhalb der Nuts checken noch öfter, nämlich 81,4%.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-de.webp",
  imageAlt: "Ergebnis des HoldemMaster-GTO-Solvers für den monotonen Pik-Flop Q♠9♠2♠: Das Raster des Big Blinds ist überwiegend grün für Check, dazwischen einige kleine Bets",
  tags: [
    "monotoner flop",
    "monotones board poker",
    "monotoner flop strategie",
    "nut flush",
    "q-9-2 flop",
    "reverse implied odds",
    "gto",
    "poker",
  ],
  content: `
Der Flop kommt **Q♠ 9♠ 2♠** – drei Karten, eine Farbe. Du schaust auf A♠J♠. Das ist der **Nut Flush**, schon am Flop fertig.

Wie viel bettest du also? Der Instinkt sagt: Pot aufbauen. Der Poker-Solver checkt diese Hand **in 83,4% der Fälle.**

Ein monotoner Flop ist die Textur, die am meisten verwirrt, weil sich fertige Hände und Luft beide anders verhalten als sonst. Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster.


:::stripe
Spot | BTN eröffnet auf 2,5bb → BB callt (heads-up)
Flop | Q♠ 9♠ 2♠ (monoton – drei Karten derselben Farbe)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb
Ergebnis | Große Bet 3,2% – die Size bricht ein
:::

> **Kurze Antwort**
> Klein betten oder checken, fast nie groß. Auf Q♠9♠2♠ checkt der Big Blind (BB) **88,8%**, bettet ein Drittel des Pots in **8,0%** der Fälle und drei Viertel nur in **3,2%**. Die Nuts sind an einen einzigen Handtyp gebunden: Ein fertiger Flush wird schon von einer kleinen Bet gecallt, und je größer du ohne Flush bettest, desto mehr verengen sich deine Caller auf Flushes. Das drückt die große Size bei beiden Spielern aus der Strategie.

## Was ist ein monotones Board im Poker?

**Ein Flop, auf dem alle drei Karten dieselbe Farbe haben** – hier Q♠ 9♠ 2♠, also ist jede Hand mit zwei Pik schon ein fertiger Flush. Es ist die seltenste der gängigen Texturen und die, die Handwerte am stärksten verändert, weil eine einzelne Karte in der passenden Farbe mehr wert sein kann als ein Paar.

![Pokertisch mit Flop Q♠9♠2♠: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-monotone-scene-de.webp "Q♠9♠2♠ · BTN eröffnet auf 2,5bb, SB foldet, BB callt – der Big Blind handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet auf 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen des 100bb-Onlinestandards |
| Flop | Q♠ 9♠ 2♠, monoton (drei Pik) |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb |
| Bet Sizes | Etwa 33% und 75% des Pots |
| Rake | Nicht berücksichtigt |
| Geprüft | 20.08.2026, Ergebnis des Lernspots |

## Wie spielt der Big Blind einen monotonen Flop?

**Check 88,8%, Lead 11,2%.** (Spielt der Big Blind als Caller gegen das Open des Buttons (BTN) zuerst an, ist das ein Lead, auch Donk Bet genannt.) Das ist weniger Anspielen als auf dem [verbundenen 9-8-7-Board](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp") mit 23,7%, aber weit mehr als auf den trockenen Flops, wo es 1,9% auf A-7-2 und 0,2% auf K-8-3 waren.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **88,8%** | 415,7 |
| Bet 1,8bb (33% vom Pot) | 8,0% | 37,4 |
| Bet 4,1bb (75% vom Pot) | **3,2%** | 14,9 |

Interessant ist nicht die Aufteilung innerhalb des Leads – sondern dass **der ganze Angriff geschrumpft ist.** Der Anteil der großen Bet an der Lead-Range liegt bei 29% und damit fast genau dort, wo er auf 9-8-7 lag (6,9 von 23,7). Geändert hat sich die Summe: Das Anspielen fiel von 23,7% auf 11,2% und die große Bet von 6,9% auf 3,2%, beide grob halbiert.

Also ist keiner der beiden Seiten mit der großen Size gedient und nur einer von ihnen mit der kleinen – deshalb bricht die ganze Strategie in Richtung „klein oder Check“ ein. Das heißt nicht „die große Bet wurde gestrichen“: Es ist **der Big Blind, der insgesamt weniger bettet** – und der Grund zeigt sich am deutlichsten daran, wie sich fertige Flushes verhalten.

## Warum verschwindet die große Bet auf dem monotonen Flop?

**Weil die Nuts feststehen.** Q, 9 und 2 sind nicht verbunden, also ist auf diesem Flop kein Straight Flush möglich. Die beste Hand ist festgelegt: **wer das A♠ mit einem zweiten Pik hält** (mit dem A♠ allein hast du erst vier Karten zum Flush). Eine einzige Karte entscheidet über die Spitze beider Ranges.

Sobald das gilt, zahlen große Bets niemandem mehr etwas.

:::compare
Wenn du einen Flush hast | Wenn du keinen Flush hast
Eine große Bet bringt die meisten Hände ohne Flush zum Folden | Eine große Bet wird vor allem von Flushes und Pik-Draws gecallt
Eine kleine Bet hält ein Paar im Pot | Eine kleine Bet ist billig, aber ein Paar foldet nicht dagegen
:::

**Einer Seite ist mit der kleinen Size gedient, der anderen mit keiner.** Deshalb bricht die Strategie für alle in Richtung „klein oder Check“ ein. Kein Board der Serie zeigt das Prinzip deutlicher: Die Size bestimmt sich danach, **womit dein Gegner callen kann**, nicht danach, wie stark du bist.

## Warum checkt sogar der Nut Flush?

**Weil fast nichts callen kann.** Scroll die Detailtabelle des Poker-Solvers bis ganz nach unten und zieh alle acht Combos des Nut Flush heraus – jede A♠-Hand, die der Big Blind tatsächlich halten kann:

| Hand | Equity | Check | Bet 1,8bb | Bet 4,1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97,7% | **83,4%** | 14,3% | 2,2% | 229,9% |
| A♠T♠ | 97,7% | **84,2%** | 14,5% | 1,2% | 232,3% |
| A♠8♠ | 97,7% | **79,1%** | 17,4% | 3,5% | 232,6% |
| A♠7♠ | 97,6% | **56,0%** | 20,6% | 23,4% | 231,3% |
| A♠6♠ | 97,6% | **60,2%** | 22,0% | 17,9% | 232,6% |
| A♠5♠ | 97,6% | **64,1%** | 20,2% | 15,7% | 233,6% |
| A♠4♠ | 97,6% | **52,7%** | 24,1% | 23,2% | 237,3% |
| A♠3♠ | 97,6% | **79,7%** | 0,0% | 20,3% | 240,6% |

**Im Schnitt checken sie 69,9%.** Eine Hand mit 97,6% Equity – eine, die praktisch nicht verlieren kann – checkt sieben von zehn Mal.

Warum nur acht Combos? Drei der A♠x♠-Hände sind unmöglich, weil **Q♠, 9♠ und 2♠ schon auf dem Board liegen.** Von den neun übrigen 3-bettet der Big Blind A♠K♠ preflop, diese Hand kommt also nie an – bleiben acht.

Der Grund fürs Checken ist nicht, was du jetzt gewinnst, sondern was du insgesamt gewinnst. Bettest du groß, folden die meisten Paare und High Cards; eine Hand mit einem Pik kommt vielleicht mit, aber gegen einen fertigen Nut Flush kann sie nie einen höheren Flush machen und braucht Runner-Runner-Hilfe, etwa ein Full House, um zu gewinnen. So oder so versiegt das Geld, das du später einsammeln wolltest. Checkst du, bettet dein Gegner sein eigenes Paar oder blufft in dich hinein – Geld, das du am Turn und River weiter einsammeln kannst.

Die Zahlen sagen es deutlich: **EQR 230%**, mehr als das Doppelte des Pot-Anteils. Der Pot beträgt 5,5bb, und A♠J♠ hat einen Erwartungswert (EV) von ==12,36bb==. Was noch kommt, ist mehr wert als das, was schon da ist.

Blocker tauchen in derselben Tabelle auf. **A♠J♠ und A♠T♠ checken über 80%, während A♠7♠ bis A♠4♠ auf 52%–64% fallen und weit mehr betten.** Mit J♠ oder T♠ blockst du die **Flushes unterhalb der Nuts, die diese Karten enthalten**. ⚠ Einen „Flush mit Bube als höchster Karte“ gibt es auf diesem Board nicht – die Q♠ liegt schon darauf, also ist jeder fertige Flush mindestens Dame-hoch, und der zweitbeste Flush ist König-hoch. Was J♠ oder T♠ wegnehmen, ist der **Kicker-Platz** dieser Flushes (K♠J♠, J♠T♠ und ähnliche). Aber Blocker erklären die Aufteilung nicht allein. Zähl die 18 Flushes des Buttons unterhalb der Nuts: J♠ und T♠ entfernen je 4 davon, während die 7♠ 6 entfernt, 8♠ und 6♠ je 5, die 5♠ 4 und die 4♠ nur 2 – und A♠7♠, der größte Blocker von allen, bettet trotzdem in 44,0% der Fälle, übertroffen nur von A♠4♠ (47,3%), das gerade einmal 2 blockt. Nur die 3♠ blockt keinen, und A♠3♠ checkt 79,7%. Bei jeder Nut-Flush-Combo liegen die drei Aktionen innerhalb von 0,05bb beieinander – lies die Spalte also als Mix zwischen fast gleichwertigen Optionen, nicht als Blocker-Regel.

## Spielst du Flushes unterhalb der Nuts anders?

**Sie checken noch mehr.** Auf diesem Board gibt es 33 fertige Flush-Combos; die 25 ohne A♠ checken im Schnitt **81,4%**, gegenüber 69,9% beim Nut Flush.

| Hand | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (Nuts) | 97,7% | 83,4% | 229,9% |
| K♠J♠ | 94,0% | **91,8%** | 197,0% |
| K♠8♠ | 93,6% | **76,3%** | 193,0% |
| K♠6♠ | 93,6% | **61,0%** | 193,7% |

Die Equity bewegt sich kaum – 94% gegen 97,7% –, aber die EQR fällt auf 197%. **Du gewinnst weniger, wenn du gewinnst.** Dafür gibt es einen Grund: Die einzige Hand, gegen die ein König-hoher Flush verliert, ist der Ass-hohe Flush, und genau diese Hand bringt das große Geld in den Pot. Klein gewinnen und groß verlieren heißt **Reverse Implied Odds**, das Spiegelbild der [Implied Odds](/de/blog/holdem-implied-odds).

## Wer hält hier mehr Flushes?

**Der Big Blind – 7,1% gegen 5,7%.** Bei den *Flushdraws* ist es aber umgekehrt.

![Infografik zur Range-Zusammensetzung: Handkategorien von Big Blind und Button auf dem monotonen Pik-Board Q♠9♠2♠, grüne und goldene Balken nebeneinander](/images/gto-srp-monotone-ranges-de.webp "Q♠9♠2♠ · Kategorien im Vergleich – fertige Flushes liegen beim Big Blind, Overpairs und A-High beim Button")

Out of position (OOP) ist der Big Blind, der zuerst handelt; in Position (IP) ist der Button.

| Kategorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Fertiger Flush | **7,1%** | 5,7% |
| Flushdraw (ein Pik, inkl. Combo Draws) | 25,6% | **29,2%** |
| Top Pair (Q) | 10,9% | **12,0%** |
| Overpair (KK, AA) | 0,0% | **2,5%** |
| A-High | 25,6% | **28,5%** |

⚠ Die Flushdraw-Zeile ist **abgeleitet**: Der Poker-Solver führt „Flushdraw“ und „Combo Draw“ getrennt, und eine Hand mit einem Pik kann in beiden auftauchen. Für den Big Blind sind es also ==20,5 + 5,1 = 25,6%== und für den Button ==24,1 + 5,1 = 29,2%==. Gut zu wissen, wenn du diese Werte mit dem Bildschirm abgleichst.

Die Aufteilung kommt aus dem Preflop. **Der Big Blind verteidigt billigen suited Müll** – Hände wie J4s, J5s und 85s werden aus dem Big Blind gecallt, und die in Pik werden zu Flushes. Der Button eröffnet sie nie.

Was der Button stattdessen hat, sind weit mehr **offsuit Ax- und Kx-Hände mit einem Pik.** Nicht fertig, aber am Draw – und hier wird das A♠ besonders. Es kann den Nut Flush machen, und es verrät dir außerdem, dass dein Gegner **keinen** haben kann.

## Was ändert eine einzelne Pik-Karte am Wert deiner Hand?

**Dasselbe Top Pair ist eine andere Hand, je nachdem, ob es ein Pik enthält.**

Nimm Q♥J♦ – Top Pair, kein Pik. Schon hinten gegen **12,0%** der vollen Button-Range von 474 Combos (Flushes 5,7 + Overpairs 2,5, dazu Sets und Zwei Paare), und obendrein beim Kicker hinter **AQ und KQ**: Die Q♠ liegt auf dem Board und die Q♥ in deiner Hand, es bleiben also zwei Damen, was 8 Combos AQ und 8 KQ ergibt – 16 der 428 Combos, die der Button noch halten kann, sobald deine Q♥ und J♦ weg sind, **etwa 3,7%**. Auf dieselbe Weise gezählt, kommt alles, was schon vor dir liegt, auf 68 von 428, rund **15,9%**. Dazu können weitere **29,2%** dich mit einer Karte überholen (⚠ vier dieser 16 Kicker-Combos halten ein Pik und stecken auch in diesen 29,2% – zähl die beiden Zahlen also nicht einfach zusammen). Das ist keine Hand für drei Streets Value; es ist eine Hand, die einmal einen Bluff fängt.

Nimm jetzt 9♥8♠ – Second Pair mit einem Pik. Sie kann jetzt gewinnen oder sich später verbessern, und das macht sie flexibel genug, um zu betten oder zu callen.

**Eine Farbe schreibt auf diesem Board die ganze Rangfolge um.**

## Warum steht die EQR bei 90 zu 109, wenn die Equity 48 zu 52 beträgt?

**Weil ein Board, auf dem die Pots klein bleiben, auch den Wert der Position schrumpfen lässt.**

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47,7% | 52,3% |
| EV (bb) | 2,37 | 3,13 |
| **Equity-Realisierung (EQR)** | **90,4%** | **108,8%** |

Der Equity-Anteil des Big Blinds beträgt ==5,5 × 47,7% = 2,62bb== gegenüber tatsächlichen 2,37bb – das sind die 90,4%.

Die Lücke von 18,4 Prozentpunkten ist die zweitkleinste **der sieben Single Raised Pots**, hinter 9-8-7 mit 13,2. ⚠ Über die ganze Serie ist sie nur die fünftkleinste – Blind vs. Blind auf K-T-6 (7,0) und A-A-6 (9,3) sowie der 3-Bet-Pot auf 8-5-2 (16,6) liegen alle enger, und dort sitzen andere Plätze. Wenn große Bets verschwinden, verschwinden auch die schwierigen Entscheidungen – und **Position ist genau so viel wert wie die Entscheidungen, die noch zu treffen sind.**

## Was ändert sich am Tisch?

- **Auf einem monotonen Board ist die große Bet von vornherein selten.** In der Theorie fällt die große Size des Big Blinds hier auf **3,2%**. ⚠ Mach daraus nicht direkt „also folde ich ein Paar gegen eine große Bet“. Die 3,2% sind, wie oft der Big Blind **anspielt**; wenn du derjenige bist, der einer Bet *gegenübersteht*, sind die Sizing-Frequenzen des Buttons in dieser Berechnung gar nicht enthalten. Schau dir auch die Spalte des Buttons an: Fertige Flushes sind 5,7%, Draws mit einem Pik dagegen **29,2%**, mehr als fünfmal so viele – wer eine große Bet als „Flush“ liest, foldet sich gegen Semi-Bluffs heraus. Das Erste, was du prüfst, wenn eine große Bet kommt: ob **deine eigene Hand das A♠ hält.**
- **Treib einen kleinen Flush nicht über drei große Streets.** Der Poker-Solver checkt Flushes unterhalb der Nuts in 81,4% der Fälle (Nuts: 69,9%). Hol dir Value mit kleinen Bets und behandle einen großen Raise als A♠, bis das Gegenteil bewiesen ist.
- **Das A♠ befördert eine Hand zum Bluff-Kandidaten.** Ein Bluff, bei dem du weißt, dass dein Gegner den Nut Flush nicht halten kann, ist etwas anderes als ein Bluff ins Blaue.
- **Gegen einen Gegner, der nie ein Paar foldet, hör auf, Fallen zu stellen.** Die 69,9% Check setzen voraus, dass der andere Spieler bettet, wenn du zu ihm checkst; callt er nur, bette deine Flushes und nimm das Geld.

:::readnext[Weiterlesen]
/de/blog/donk-bet-strategy | 9-8-7: Hier ist die Donk Bet richtig | /images/gto-srp-middle-connected-oop-de.webp
/de/blog/broadway-board-strategy | Q-J-T: Draws allein reichen nicht | /images/gto-srp-broadway-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Monotones Board (eine Farbe)** → **⚡ Ergebnisse ansehen**.

Bei diesem Spot ist die Detailtabelle unten die ganze Lektion – **scroll sie bis zum Ende.** Du siehst, warum sich A♠J♠ und A♠4♠ um 30 Prozentpunkte in der Check-Frequenz unterscheiden und wie dieselbe Dame zu zwei verschiedenen Händen wird, je nachdem, ob ein Pik dabei ist.

Öffne danach den **GTO-Trainer** in der Seitenleiste und lass dir auf diesem Board einen Flush austeilen: Eine Aktion zu wählen und die EV-Kosten zu sehen, überzeugt schneller als jede Tabelle. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

## FAQ

**Q. Was bedeutet monotoner Flop?**

A. Ein Flop, auf dem alle drei Karten dieselbe Farbe haben, etwa Q♠ 9♠ 2♠. Zwei beliebige Karten dieser Farbe ergeben schon einen Flush, und eine einzelne ist ein Draw. Es ist die Textur, auf der sich Handwerte am stärksten verschieben, weil die Farben vorübergehend mehr zählen als die Ränge.

**Q. Solltest du einen fertigen Flush auf einem monotonen Board immer betten?**

A. Nein. In dieser Berechnung checken die acht Nut-Flush-Combos zwischen 52,7% und 84,2%, im Schnitt 69,9%, und Flushes unterhalb der Nuts checken 81,4%. Eine große Bet bringt die meisten Paare und High Cards zum Folden – und eine Hand mit einem Pik, die doch mitgeht, kann nie einen höheren Flush machen und braucht Runner-Runner-Hilfe wie ein Full House, um zu gewinnen –, deshalb bringt es insgesamt mehr, zu checken, eine Bet zu provozieren und über Turn und River einzusammeln.

**Q. Warum hat der Big Blind mehr Flushes als der Button?**

A. Weil der Big Blind schon teilweise investiert ist und billige suited Hände wie J4s, J5s und 85s verteidigt. Auf einem monotonen Board werden daraus Flushes. Der Button eröffnet sie nie, deshalb liegen seine fertigen Flushes bei 5,7% gegenüber 7,1% beim Big Blind.

**Q. Wie wahrscheinlich ist es, einen Flush zu floppen?**

A. Selten genug, dass schon das monotone Board an sich ungewöhnlich ist – du brauchst zwei Karten derselben Farbe, und alle drei Flopkarten müssen mitspielen. Die genauen Prozentsätze für das Floppen und Vervollständigen von Flushes rechnet der Artikel zu den [Drawing Odds](/de/blog/holdem-drawing-odds) durch; hier zählt, was du tust, wenn das Board so ankommt.

**Q. Warum ist das A♠ so wichtig, wenn du gar keinen Flush hältst?**

A. Es ist ein Blocker: Solange du es hältst, kann dein Gegner den Nut Flush nicht haben. Damit kann er die Spitze seiner Range nicht verteidigen, also sind Hände mit dem A♠ die ersten Bluffs, die ein Poker-Solver auswählt. Umgekehrt gilt auch: Hältst du einen kleinen Flush, verdient ein großer Raise mehr Respekt als sonst.
`.trim(),
};

export default POST;
