import type { Post } from "../posts";

/**
 * GTO-Solver-Serie 1 (de) – A♥7♦2♣, trockenes A-High-Board.
 * Quelle: lib/posts-en/a-high-board-cbet.ts (EN updated 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B
 *   (Lernspot-Ergebnis vom 2026-08-19) · Vertrag = docs/de-gto-source-contract.md · Brief = docs/de-gto-series-translation-brief.md
 * Keyword: docs/keyword-bank/de-gto-series.md §5 Zeile 1 (title fest, Long-Tail «A-7-2 Flop» – redaktionell, keine Volumenbasis).
 * App-Labels: docs/solver-app-verbatim-de-2026-10-02.md. «GTO-Trainer» stammt aus dem 08-24-Verbatim (10-02 nicht neu erfasst).
 * Grenzen: nur erste Flop-Entscheidung · kein Raise-Knoten · keine BTN-C-Bet-Frequenz · ohne Rake.
 * date/updated vorläufig – der Abschluss-Lauf setzt das echte de-Veröffentlichungsdatum.
 */
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "A-7-2: Top Pair und trotzdem Check",
  seoTitle: "A-7-2-Flop: Warum der Big Blind selbst mit Top Pair checkt",
  desc: "Du floppst Top Pair auf A-7-2? Im GTO-Solver checkt der Big Blind trotzdem 98,2% seiner Range – die genauen Frequenzen und warum nicht die Equity entscheidet.",
  tldr: "Auf A♥7♦2♣ nach einem Open des Buttons und einem Call des Big Blinds checkt der Big Blind 98,2% seiner Range – Top Pair, Zwei Paare und Sets eingeschlossen. Die Equity ist mit 45,1% zu 54,9% fast ausgeglichen; was die beiden Plätze trennt, ist die Equity-Realisierung: 84,0% out of position gegen 113,1% in Position.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "9 Min.",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-de.webp",
  imageAlt: "Ergebnis des HoldemMaster-GTO-Solvers für den trockenen A-High-Flop A♥7♦2♣: Das 13×13-Raster des Big Blinds ist fast vollständig grün für Check",
  tags: ["a-7-2 flop", "trockenes board poker", "a-high board", "top pair checken", "gto", "poker"],
  content: `
Der Flop kommt **A♥ 7♦ 2♣**, Rainbow. Du sitzt im Big Blind (BB) mit A9 – Top Pair. Anspielen fühlt sich selbstverständlich an. Ist es nicht.

Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster, abgelesen am 19.08.2026 aus dem Ergebnis des Lernspots – und du kannst denselben Bildschirm mit einem einzigen Klick aufrufen.


:::stripe
Spot | BTN eröffnet auf 2,5bb → BB callt (heads-up)
Flop | A♥ 7♦ 2♣ (Rainbow)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb
Ergebnis | BB checkt 98,2% – praktisch die ganze Range checkt
:::

> **Kurze Antwort**
> Checken – und den Plan behalten, weiterzuspielen. Wenn eine Range praktisch mit allem dieselbe Aktion wählt – starke Hände eingeschlossen (die Bets beider Sizes ergeben zusammen nur 1,9%) –, ist das ein **Range-Check**, und genau den macht der Big Blind hier. Checken heißt nicht, den Pot aufzugeben: Es hält die Bluffs des Buttons im Pot, und Top Pair bleibt eine Hand, mit der du weitermachst, wenn die Continuation Bet (C-Bet) kommt.

## Unter welchen Bedingungen entstanden diese Zahlen?

Der Button (BTN) eröffnet auf 2,5bb, der Big Blind callt, alle anderen folden – zwei Spieler sehen also einen Pot von 5,5bb mit 97,5bb dahinter. Beide Ranges sind die üblichen Näherungen für 100bb-Onlinespiel, der Flop ist A♥ 7♦ 2♣ Rainbow, und der Poker-Solver bekommt zwei Bet Sizes zur Auswahl, etwa ein Drittel und drei Viertel des Pots. Rake ist nicht berücksichtigt. Ändert sich eine dieser Annahmen, ändern sich die Frequenzen mit.

![Pokertisch mit Flop A♥7♦2♣: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-dry-ace-scene-de.webp "A♥7♦2♣ · BTN eröffnet auf 2,5bb, SB foldet, BB callt – der Big Blind handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet auf 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen des 100bb-Onlinestandards |
| Flop | A♥ 7♦ 2♣, Rainbow |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb |
| Bet Sizes | Etwa 33% und 75% des Pots |
| Rake | Nicht berücksichtigt |
| Geprüft | 19.08.2026, Ergebnis des Lernspots |

Der Pot beträgt 5,5bb, weil zum Open des Buttons über 2,5bb und zum Call des Big Blinds über 2,5bb noch die 0,5bb des gefoldeten Small Blinds kommen. Alles auf dem Bildschirm steht in Big Blinds – Bets lauten „Bet 1,8bb (33% vom Pot)“, der Erwartungswert „EV (bb)“.

## Wie oft wird auf einem trockenen A-High-Board gesetzt – und von wem?

Das hängt ganz davon ab, auf welchem Platz du sitzt. Für den Preflop-Raiser liegt die Antwort auf einem so trockenen Board heads-up in Position bei rund **70%–100% mit kleiner Size** – der Guide zur [Continuation Bet](/de/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") schlüsselt das nach Board-Typ auf. Für den Spieler, der gecallt hat, lautet die Antwort **praktisch null**.

Genau genommen hat der Caller gar keine C-Bet – der Begriff meint, dass der Preflop-Raiser den Flop bettet; die Version des Big Blinds ist also ein **Lead** (auch Donk Bet genannt). Aber genau diese Zahl suchen die meisten, die auf dieser Seite der Hand landen, und hier ist sie:

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **98,2%** | 455,5 |
| Bet 1,8bb (33% vom Pot) | 1,0% | 4,5 |
| Bet 4,1bb (75% vom Pot) | 0,9% | 3,9 |

Von 464 Combos betten etwa acht – über beide Sizes gerundet 1,9%. In der Praxis kannst du das abrunden: **Der Big Blind spielt dieses Board nicht an.**

## Warum checkt der Big Blind sogar mit Top Pair?

Weil sich der Pot mit einem Check leichter gewinnen lässt als mit einer Bet. Mit einem Paar out of position (OOP) gegen den Spieler anzuspielen, der preflop die Initiative übernommen hat, ist der teure Weg, eine Hand zu spielen, mit der du gern zum Showdown gehst.

Drei Dinge sprechen gegen einen Lead. Erstens die **Equity-Realisierung**: Die Zahlen unten zeigen, dass der Big Blind 84,0% seiner Equity einfährt und der Button 113,1%. Wer out of position einen größeren Pot baut, macht diese Lücke teurer, nicht billiger. Zweitens c-bettet der Button auf so einem Flop typischerweise oft (eine Frequenz, die diese Berechnung nicht liefert) – **ein Check hält seine Bluffs im Pot**, während ein Lead sie folden und leer ausgehen lässt. Drittens ist die Range des Big Blinds gedeckelt: Ohne AA, AK oder AQ lädt ein Lead zu Raises starker Asse ein, und der Großteil der Big-Blind-Range kann dagegen nicht weitermachen – nur 24 Combos halten einen Raise aus (die Sets 77 und 22, die Zwei Paare A7 und A2). (Ein Raise-Knoten ist hier nicht berechnet.)

Was ein Lead **nicht** tut: bessere Hände zum Folden bringen. Die Opening-Range des Buttons enthält jedes Ass bis hinunter zu A2, dazu Underpairs und Siebener – schlechtere Hände, die callen würden, gibt es also reichlich; das ist nicht das Problem. Das Problem ist der Pot, den du dafür aufbaust.

Außerdem ist „ein Ass“ kein einzelner Handtyp. A9 verliert Kicker-Duelle gegen AK, AQ, AJ und AT, während A7 und A2 gar kein Top Pair sind – auf diesem Board spielt A7 als ==A-A-7-7-2==, also Zwei Paare. Ein Range-Check versteckt sie alle hinter einer einzigen Aktion, sodass dein Gegner sie nicht auseinandersortieren kann.

**Und die Hände, die doch betten, sind nicht die, die du erwarten würdest.** Öffne die Detailtabelle, und die stärksten Asse, die der Big Blind überhaupt haben darf, setzen ab und zu: A♣J♣ bettet die kleine Size in 14,5% der Fälle, A♦J♦ 12,2%, A♠J♠ 7,1%, A♠T♠ 4,5%. Kleine Frequenzen, aber sie kommen von der Spitze der Range statt aus der Luft – deshalb ist der Check keine reine Kapitulation.

## Was ist ein trockenes Board – und warum begünstigt dieses den Raiser?

Ein trockenes Board hat keinen Flushdraw und fast keinen Straßendraw – drei unverbundene Karten in drei verschiedenen Farben, wie A♥ 7♦ 2♣. Kaum etwas jagt hier noch etwas hinterher: **71,3% der Big-Blind-Range haben keinen Draw**, und der Großteil des Rests ist ein Backdoor-Flushdraw. Es begünstigt den Raiser, weil die Opening-Range des Buttons AK und AQ behält, während die Calling-Range des Big Blinds bei AJ endet – die Asse liegen auf einer Seite, und es gibt keine Draws, die das später ausgleichen.

![Infografik zur Range-Zusammensetzung: Handkategorien von Big Blind und Button auf einem trockenen A-High-Board im Vergleich, grüne und goldene Balken nebeneinander](/images/gto-srp-dry-ace-ranges-de.webp "A♥7♦2♣ · Kategorien im Vergleich – der Button hält mehr Top Pair, der Big Blind mehr Luft")

Out of position (OOP) ist der Big Blind, der zuerst handelt; in Position (IP) ist der Button.

| Kategorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Drilling – hier immer ein Set | 1,3% | **1,9%** |
| Zwei Paare | 3,9% | 3,9% |
| Top Pair | 20,7% | **25,9%** |
| Second Pair | 5,2% | 5,2% |
| Weak Pair | 1,3% | 0,0% |
| Underpair | 9,1% | **13,0%** |
| K-High | **17,2%** | 16,4% |
| Keine Made Hand | **41,4%** | 33,7% |

Die Lücke kommt daher, was jede Range enthalten darf. Der Button eröffnet jedes Ass – A2 bis AK. Die Calling-Range des Big Blinds **endet bei AJ**: kein AA, kein AK, kein AQ, denn diese Hände 3-betten stattdessen. Dasselbe Ass auf dem Board, und trotzdem landet Top Pair auf der Seite des Buttons 5,2 Prozentpunkte häufiger – und die stärksten Asse sitzen komplett auf einer Seite des Tisches.

Sets erzählen dieselbe Geschichte, wenn man die Hände zählt. Die Pocket Pairs, die hier ein Set floppen, sind AA, 77 und 22, und **der Big Blind hat nur 77 und 22** – je drei Combos, sechs von 464, das sind die 1,3% auf dem Bildschirm. Der Button behält alle drei Paare: neun Combos, 1,9%. Die Rechnung stimmt exakt mit dem Poker-Solver überein.

## Was bedeutet Range-Vorteil, wenn die Equity fast gleich ist?

Range-Vorteil (Range Advantage) heißt, dass die ganze Range eines Spielers besser zum Board passt als die des anderen. Auf A♥ 7♦ 2♣ zeigt er sich in der rohen Equity kaum – 45,1% gegen 54,9%, ein Abstand von 9,8 Prozentpunkten, den niemand eine Katastrophe nennen würde. Er zeigt sich darin, wie viel jede Seite von dieser Equity tatsächlich einfahren kann, und da liegen die beiden Plätze weit auseinander.

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 45,1% | 54,9% |
| EV (bb) | 2,09 | 3,41 |
| **Equity-Realisierung (EQR)** | **84,0%** | **113,1%** |

Equity-Realisierung ist der Anteil deiner Equity, den du tatsächlich einsammelst. Die Equity des Big Blinds ist ==5,5 × 45,1% = 2,48bb== wert, sein Erwartungswert (EV) liegt aber bei 2,09bb – er verliert etwa ein Sechstel dessen, was ihm „gehört“. Die 113,1% des Buttons bedeuten, dass er **mehr als seinen Anteil** einsammelt, weil er zuletzt handelt und seine Range stark genug ist, um Druck zu machen. (Die Werte auf dem Bildschirm sind gerundet; rechnest du die EQR von Hand nach, landest du innerhalb von 0,3 Prozentpunkten am angezeigten Wert.)

Position und Range-Vorteil verstärken sich hier gegenseitig: Der Button bekommt das größere Stück **und** die bessere Quote, es in Gewinn umzumünzen. Das allgemeine Prinzip steht im [Equity-Guide](/de/blog/holdem-equity), und warum der Platz selbst so viel wert ist, erklärt [Spielen in Position](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Wann sollte der Button einen trockenen A-High-Flop c-betten?

Fast immer, klein – **gegen Gegner, die folden.** Der Big Blind hat 41,4% ohne Made Hand und 71,3% ohne Draw, Folds kommen also leicht, und die Hände, die bleiben, verbessern sich selten. Das ist der Lehrbuchfall für die kleine Size – deshalb ist die Bet über 33% (1,8bb) hier die richtige Wahl.

Gegen einen Tisch, der alles callt, ist „alles klein betten“ nicht mehr gratis: Nichts foldet, und du baust Pots mit Händen, die keinen großen Pot wollen. Dort heißt die Anpassung: weniger Stabs, mehr Value.

Die Faustregel lässt sich mit einer Bedingung verallgemeinern: **Die Seite mit dem Range-Vorteil – und ohne klaren Nut Advantage (Vorteil bei den stärksten Händen) – bettet klein und oft.** Auf Boards, auf denen ein Spieler auch die Nuts besitzt, geht die Size stattdessen nach oben. Wie sich das über die Board-Typen verändert, steht in der [C-Bet-Strategie](/de/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[Der Lernspot berechnet nur die erste Aktion am Flop vor – die genaue C-Bet-Frequenz des Buttons gehört deshalb nicht zu den Zahlen auf dieser Seite. Um sie zu bekommen, öffne „Diesen Spot selbst berechnen“ und rechne den Baum durch.]:::

## Was ändert sich am Tisch?

- **Hast du heads-up einen Raise gecallt, vergiss den Lead auf einem trockenen A-High-Flop.** Top Pair eingeschlossen. Ein Lead baut einen Pot, den du dann out of position mit einem Paar spielen musst – genau die Lücke von 84% gegen 113% von oben. (Gelimpte Pots und Blind vs. Blind sind eine andere Struktur und nicht das, was dieser Spot abdeckt.)
- **Checken ist nicht Check-Fold.** Genau hier wird die Zahl falsch gelesen. Gegen die kleine C-Bet des Buttons macht der Big Blind sehr breit weiter – jedes Ass, die meisten Siebener, die Underpairs, K-High mit Backdoor. **A9 ist ein Check-Call**, meist auch noch am Turn. Für Check-Raises bieten sich vor allem 77, 22, A7 und A2 an, dazu ein paar Backdoor-Bluffs – die Reaktion des Big Blinds liefert diese Berechnung allerdings nicht.
- **Am Button: gegen Gegner, die folden, klein und breit betten.** Gegen einen Spieler, der nie foldet, passt du in zwei Richtungen an: weniger Bluffs, weil er nicht foldet, egal was du bettest – besonders am Turn und River, wo zweite und dritte Barrels reiner Verlust sind – und größere Value Bets mit **Top Pair oder besser**. A9 mit seinem schwachen Kicker ist keine Hand, mit der du die Size erhöhst; es ist eine Hand, mit der du einfach nicht dreimal feuerst.
- **Gegen einen ausgeglichenen Gegner ist ein Check hier keine Schwäche** – die Checking-Range enthält Sets (77, 22) und Zwei Paare (A7, A2), wer zu hart drückt, läuft also in einen Check-Raise. Auf niedrigen Limits ist es oft umgekehrt: Viele Spieler spielen ihre starken Hände einfach an, ihr Check ist also wirklich schwach. Bette weiter auf Value; behandle den Check-Raise als gelegentliche Kosten, nicht als Grund, langsamer zu werden.

:::readnext[Weiterlesen]
/de/blog/holdem-continuation-bet | Continuation Bet (C-Bet): Wann du am Flop feuerst, wie viel und wann du checkst | /images/holdem-continuation-bet-hero.webp
/de/blog/holdem-position-play | Positions-Strategie: In Position vs Out of Position | /images/holdem-position-play-hero.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Trockenes A-High-Board** → **⚡ Ergebnisse ansehen** – genau dieser Bildschirm erscheint ohne Wartezeit. Stell die Auswahl **Spieler** zwischen OOP und IP um, um beide Ranges zu vergleichen, und sortiere die Detailtabelle nach einer beliebigen Spalte, um die Hände zu finden, die betten. Die Lernspots berechnen **nur die erste Aktion am Flop** vor – um dich durch Turn und River zu klicken oder eine Range zu ändern und zuzusehen, wie sich die Frequenzen bewegen, nimm **Diesen Spot selbst berechnen** und rechne den Baum durch.

Willst du denselben Spot trainieren, statt ihn nur zu lesen, öffne den **GTO-Trainer** in der Seitenleiste: Er teilt dir eine Hand aus der echten Range aus, du wählst eine Aktion, und er zeigt dir, wie viele Big Blinds dich diese Entscheidung gekostet hat. Er ist kostenlos, ohne Installation und ohne Konto.

## FAQ

**Q. Ist A7 auf einem A-7-2-Board Top Pair?**

A. Nein. Das Board paart deine 7, also macht A7 ==A-A-7-7-2== – Zwei Paare. Echtes Top Pair ist ein Ass mit einem Kicker, der das Board verfehlt, etwa A9 oder A8. Zwei Paare (A7 und A2) sind 18 Combos, 3,9% der Big-Blind-Range, und auch diese Hände checken.

**Q. Heißt 98,2% Check, dass du wirklich nie setzen solltest?**

A. Als Standard auf dieser Textur: ja. Gegen einen Gegner, der fast nie c-bettet, kannst du einen Lead einmischen – aber **nur mit Value-Händen**. Top Pair und Siebener bauen einen Pot, den dieser Spieler nie für dich bauen würde, während deine Luft weiter checken sollte, denn ein passiver Gegner schenkt dir Freikarten und kostenlose Showdowns, die mehr wert sind als der Bluff.

**Q. Was ist der Unterschied zwischen einem nassen und einem trockenen Board?**

A. Ein trockenes Board hat keinen Flushdraw und wenige Straßendraws, daher ändert sich auf späteren Streets selten, wer vorne liegt. Ein nasses Board (Wet Board) – verbundene Two-Tone-Karten wie 9-8-7 mit zwei Herz – gibt beiden Spielern Draws. Die Ranges bleiben breit und die Equitys verschieben sich ständig, also werden die Bets größer und Check-Raises häufiger.

**Q. Kann die Equity-Realisierung über 100% liegen?**

A. Ja. Sie ist das Verhältnis zwischen dem, was du tatsächlich gewinnst, und deinem Anteil am Pot nach Equity – Position und Range-Stärke können sie also über 100% treiben. Der Button realisiert hier 113,1% und sammelt mehr ein, als seine rohe Equity von 54,9% vermuten ließe.

**Q. Gelten diese Zahlen bei jedem Limit?**

A. Nutze sie als Ausgangspunkt, wo die Bedingungen passen: heads-up, 100bb, Standard-Ranges für Open und Call, ohne Rake. Ändern sich Stacktiefe, Ranges oder Sizing, verschieben sich die Frequenzen. Gegen Gegner, die stark abweichen – die nie folden oder nie c-betten –, weichst du ebenfalls ab, denn diese Zahlen setzen voraus, dass auch der andere Spieler gut spielt.
`.trim(),
};

export default POST;
