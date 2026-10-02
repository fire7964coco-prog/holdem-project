import type { Post } from "../posts";

/**
 * GTO-Solver-Serie ③ (de) – Q♠J♦T♠, verbundenes Broadway-Board, Two-Tone.
 * Quelle: lib/posts-en/broadway-board-strategy.ts (Stand 2026-09-26) · Zahlen = docs/gto-solver-series-spec.md §4-B.
 * Keywords: docs/keyword-bank/de-gto-series.md §5 (Nut Advantage auf Q-J-T · Range-Vorteil vs. Nut Advantage).
 * Grenzen: Lernspot = nur die erste Aktion des BB am Flop; BTN-Sizing, C-Bet-Frequenz und Check-Raise-Frequenz nicht berechnet.
 * Bild: Spot-Szene (de-Pilot) zusätzlich vor der ersten Bedingungstabelle.
 */
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Q-J-T: Draws allein reichen nicht",
  seoTitle: "Q-J-T Two-Tone: 68% haben einen Draw, 99,9% checken",
  desc: "Auf Q-J-T Two-Tone halten 68% der Big-Blind-Range einen Draw – und er checkt trotzdem 99,9%. Hier entscheidet der Nut Advantage, nicht der Range-Vorteil.",
  tldr: "Auf Q♠J♦T♠ nach einem Open des Buttons und einem Call des Big Blinds checkt der Big Blind 99,9% – obwohl 68,4% seiner Range einen Draw halten. Der Grund ist der Nut Advantage des Buttons (Button gegen Big Blind): Straßen 10,5% gegen 7,1%, Sets 2,0% gegen 0,7%, Overpairs 2,6% gegen 0%. Die Equity-Realisierung liegt bei 77,9% gegen 119,4% – der größte Abstand der drei Flops von trocken bis nass bisher.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-de.webp",
  imageAlt: "Ergebnis des GTO-Solvers von HoldemMaster für das verbundene Broadway-Board Q♠J♦T♠ (Two-Tone): Das Raster des Big Blinds ist grün für Check, rechts die Panels Hände und Draws",
  tags: ["nut advantage", "range-vorteil vs. nut advantage", "q-j-t flop", "two-tone board", "dynamisches board", "broadway flop", "gto", "poker"],
  content: `
Der Flop kommt **Q♠ J♦ T♠**. Du hältst KQ im Big Blind (BB) – Top Pair plus einen beidseitigen Straßendraw (OESD). Das zu checken muss doch falsch sein.

Die letzten beiden Spots – [A-High](/de/blog/a-high-board-cbet) und [K-High](/de/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-de.webp") – waren ruhige Boards, auf denen fast nichts einen Draw hatte. Dieses hier ist das Gegenteil: **68,4% der Range des Big Blinds halten hier einen Draw.** Und der Poker-Solver checkt trotzdem ==99,9%==. Anspielen – also als Erster setzen – wurde *seltener*, nicht häufiger.

„Viele Draws“ und „du darfst zuerst setzen“ sind zwei verschiedene Aussagen. Jede Zahl unten stammt aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster, abgelesen am 19.08.2026 aus dem Ergebnis des Lernspots.


:::stripe
Spot | BTN eröffnet auf 2,5bb → BB callt (Heads-up)
Flop | Q♠ J♦ T♠ (Two-Tone – zwei Pik)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb
Ergebnis | BB checkt 99,9% – Draws überall, trotzdem kein Lead
:::

> **Kurze Antwort**
> Der Big Blind checkt auf Q♠J♦T♠ **99,9%**, obwohl 68,4% seiner Range einen Draw halten. Der Grund ist der **Nut Advantage** (der Vorteil bei den stärksten Händen): Straßen 10,5% gegen 7,1%, Sets 2,0% gegen 0,7%, Overpairs 2,6% gegen 0%. Die Kategorien an der Spitze liegen beim Button – nur Zwei Paare stehen mit 6,0% gegen 5,9% gleichauf –, also foldest du mit einer Bet als Erster genau die Hände raus, die du schlägst, und wirst von denen gecallt, die du nicht schlägst.

## Unter welchen Bedingungen sind diese Zahlen entstanden?

Gleiche Struktur wie im Rest der Serie: Der Button (BTN) eröffnet auf 2,5bb, der Big Blind callt, alle anderen folden. Zwei Spieler, ein Pot von 5,5bb, 97,5bb dahinter, Standard-Ranges für 100bb online und zwei verfügbare Bet Sizes von rund einem Drittel und drei Vierteln des Pots. Geändert hat sich nur der Flop.

![Pokertisch mit Flop Q♠J♦T♠: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-broadway-scene-de.webp "Q♠J♦T♠ · Ausgangslage – wer wo sitzt, Pot und Stacks vor der ersten Entscheidung")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet auf 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen des 100bb-Onlinestandards |
| Flop | Q♠ J♦ T♠, Two-Tone (zwei Pik) |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb |
| Bet Sizes | Rund 33% und 75% des Pots |
| Rake | Nicht berücksichtigt |
| Geprüft | 19.08.2026, Ergebnis des Lernspots |

## Warum reicht ein Draw nicht – und warum checkt der Big Blind auf so einem nassen Board 99,9%?

**Weil die *Qualität* der Made Hands über die Aktion entscheidet, nicht die *Menge* der Draws.**

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **99,9%** | 452,5 |
| Bet 1,8bb (33% vom Pot) | 0,1% | 0,3 |
| Bet 4,1bb (75% vom Pot) | 0,0% | 0,2 |

Auf dem trockenen K-High-Flop waren es 99,8%. **Wechselst du auf ein Board, auf dem zwei Drittel der Range einen Draw halten, wird der Check vollständiger, nicht lückenhafter.** Genau diese Umkehrung ist der Grund, warum dieser Spot unter den Lernspots steht.

## Was ist der Nut Advantage auf diesem Flop – und wer hat ihn?

**Es geht darum, wer die Spitze der Range hält.** Auf Q-J-T lautet die Rangfolge der Kategorien Straße → Set → **Zwei Paare** → Overpair, und der Button führt in jeder davon außer bei Zwei Paaren.

| Top-Kategorie | BB (OOP) | BTN (IP) | Woher der Abstand kommt |
|---|---|---|---|
| Straße | 7,1% | **10,5%** | Der Big Blind hat **kein AK** |
| Set/Drilling (hier: Set) | 0,7% | **2,0%** | Der Big Blind hat **kein QQ, kein JJ** |
| Zwei Paare | **6,0%** | 5,9% | Praktisch gleich – die einzige Zeile, in der der Big Blind vorne liegt |
| Overpair | 0,0% | **2,6%** | Der Big Blind hat **kein AA, kein KK** |

Achte auf die richtige Reihenfolge: **Zwei Paare sind hier die drittbeste Kategorie, über einem Overpair.** Auf Q-J-T macht JT ==J-J-T-T-Q== – Zwei Paare –, während AA nur ein einzelnes Paar ist. „Die Spitze gehört komplett dem Button“ übertreibt also. Die Schlussfolgerung hält trotzdem: Die beiden Kategorien, die wirklich an der Spitze stehen, Straßen und Sets, gehören dem Button, und die gleichauf liegende Zeile verliert auf diesem Board gegen beide.

Jeder dieser Abstände ist preflop entstanden. Der Big Blind 3-bettet AA, KK, QQ, JJ und AK, also kommt keine dieser Hände am Flop an; der Button eröffnet sie alle und bringt sie mit.

Die Combos passen exakt. Nur drei Hände machen hier eine Straße: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)== und ==98 (Q-J-T-9-8)==. Keine der Karten, die sie brauchen – das Ass, der König, die Neun, die Acht –, liegt auf dem Board, also sind es jeweils 4 × 4 = 16 Combos. Der Big Blind hält K9 und 98 mit **32 Combos**; der Button legt AK obendrauf und kommt auf **48**. Die 7,1% und 10,5% des Poker-Solvers entsprechen 32,2 und 48,1 Combos – dieselben Zahlen.

**Der gesamte Unterschied ist eine einzige Hand: AK.** Eine einzige 3-Bet-Entscheidung preflop verschiebt so viel vom Anteil des Flops an den stärksten Händen.

## Range-Vorteil vs. Nut Advantage – was ist der Unterschied?

**Der Range-Vorteil (Range Advantage) sagt, wer im Durchschnitt stärker ist; der Nut Advantage sagt, wer mehr von den allerbesten Händen hält.** Meist bewegen sich beide gemeinsam – dieser Flop ist der Fall, in dem sie es nicht tun.

| | Range-Vorteil | Nut Advantage |
|---|---|---|
| Welche Frage er beantwortet | Wessen Range hat insgesamt mehr Equity? | Wer hält die Top-Hände? |
| Auf Q-J-T | Fast ausgeglichen – 46,7% gegen 53,3% | Einseitig – Straßen, Sets und Overpairs sprechen alle für den Button |
| Was er steuert | Ob du überhaupt bettest | **Wie groß du bettest und wer raisen kann** |

Die durchschnittliche Equity sagt, dieser Flop sei nahe an einem Münzwurf. Die Spitze der Range sagt: Ein Spieler hält die meisten Hände, die einer großen Bet standhalten, der andere nur wenige, mit denen er sich wehren kann. Wenn beide auseinanderlaufen, **entscheidet der Nut Advantage über das Sizing** – und für den Spieler ohne ihn darüber, dass Anspielen keine Option ist.

## Wie viel von jeder Range hält einen Draw?

**Nur echte Draws gezählt: 68,4% beim Big Blind, 68,7% beim Button.** Rechnest du Backdoor-Flushdraws dazu, sind es 75,2% und 74,4% – drei Viertel beider Ranges.

![Infografik zur Range-Zusammensetzung: Handkategorien von Big Blind und Button auf dem verbundenen Broadway-Board Q♠J♦T♠ mit zwei Pik im Vergleich](/images/gto-srp-broadway-ranges-de.webp "Q♠J♦T♠ · Aufteilung nach Kategorien – in den oberen vier Zeilen wird dieser Flop entschieden")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo Draw (Straße + Flush) | 5,3% | 4,1% |
| Flushdraw | 2,4% | 2,0% |
| Beidseitiger Straßendraw (OESD) | 28,7% | 27,7% |
| Gutshot | 32,0% | 34,9% |
| Backdoor-Flushdraw | 6,8% | 5,7% |
| Kein Draw | **24,7%** | **25,5%** |

**Die Draws verteilen sich fast gleichmäßig.** Auf dem K-High-Flop hatten 72,2% der Range des Big Blinds überhaupt keinen Draw; hier ist es ein Viertel. (Das ist eine eigene Achse, getrennt von der Kategorientabelle – jede ergibt für sich 100%, und die Draw-Achse erfasst **nur, was noch drawt** – eine fertige Straße, die zusätzlich zwei Pik hält, wie K♠9♠, landet in einer Flush-Zeile, eine ohne solchen Zusatz landet unter Kein Draw.)

Der Kampf auf diesem Board dreht sich also nicht darum, wer mehr Draws hat. Gleiche Draws heben sich gegenseitig auf, und was sich nicht aufhebt, ist der Nut Advantage. Wenn du beim Zählen der Outs sicherer werden willst, fang mit den [Drawing Odds](/de/blog/holdem-drawing-odds) an.

## Warum ist Top Pair hier gefährlich?

**Weil 21,0% der Range des Buttons es bereits schlagen.** Das sind Straßen 10,5% plus Sets 2,0% plus Zwei Paare 5,9% plus Overpairs 2,6%.

Auf dem trockenen K-High-Flop kam dieselbe Rechnung auf **3,6%** – Sets 1,9%, Zwei Paare 0,4%, Overpairs 1,3%.

| Anteil der Button-Range, der Top Pair bereits schlägt | |
|---|---|
| Trockener K-High-Flop (K-8-3) | 3,6% |
| **Broadway-Flop (Q-J-T)** | **21,0%** |

**Dasselbe „Top Pair“, rund sechsmal so viel Risiko.** Unabhängig davon halten 68,7% der gegnerischen Range irgendeinen Draw – eine andere Achse, die sich mit den Made Hands überschneidet, die schon vor dir liegen, keine zusätzlichen 68,7% obendrauf –, sodass selbst Hände, die du jetzt schlägst, dich am Turn und River noch überholen können. Drückst du auf Q-J-T ein einzelnes Paar über drei Streets, kommt die große Action, die zurückkommt, fast nie von einer Hand, die du schlägst. Das ist ein Pot zum Kontrollieren, nicht zum Aufbauen.

## Warum steht die EQR bei 78 zu 119, wenn die Equity 47 zu 53 beträgt?

**Weil der Platz, der zuletzt handelt, umso mehr wert ist, je mehr Entscheidungen ein Board erzwingt.**

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,7% | 53,3% |
| EV (bb) | 2,00 | 3,50 |
| **Equity-Realisierung (EQR)** | **77,9%** | **119,4%** |

Die Methode ist [im K-High-Spot](/de/blog/k-high-board-cbet) Schritt für Schritt durchgerechnet. Hier: Der Equity-Anteil des Big Blinds beträgt ==5,5 × 46,7% = 2,57bb== gegenüber tatsächlichen 2,00bb – das sind die 77,9%; der Button macht aus einem Anteil von 2,93bb 3,50bb.

Leg die drei Flops nebeneinander, und der Trend ist sauber.

| Flop | EQR BB | EQR BTN | Abstand |
|---|---|---|---|
| A-7-2 (trocken) | 84,0% | 113,1% | 29,1 Prozentpunkte |
| K-8-3 (trocken) | 80,7% | 116,7% | 36,0 Prozentpunkte |
| **Q-J-T (verbunden, Two-Tone)** | **77,9%** | **119,4%** | **41,5 Prozentpunkte** |

Nach drei Spots sieht es nach der Regel *unruhigeres Board, größerer Abstand* aus. **Diese Regel hält schon im nächsten Spot nicht mehr** – [9♥8♥7♣](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp") ist wie Q-J-T ein Two-Tone-Board mit drei Karten in Folge, und sein Abstand beträgt **13,2 Prozentpunkte, der engste der sieben Single-Raised-Pots**, wobei der Big Blind 93,2% realisiert, den höchsten Wert dieser sieben (über die ganze Serie liegen die 117,8% des 3-Bet-Pots auf Q-T-7 höher). Was den Abstand öffnet, ist nicht die Unruhe, sondern **wem die Spitze des Boards gehört**: Q-J-T reicht AK, QQ, JJ, AA und KK direkt an den Button weiter, während dieselben Karten auf 9-8-7 das Board verfehlen. ⚠ Nicht, dass sie dort keine Rolle spielen – 9-8-7 teilt die Overpairs **1,3% gegen 6,4%** auf, ein größerer Abstand als die 0% gegen 2,6% auf Q-J-T. Aber dieser Overpair-Vorsprung ist auf einem verbundenen Board brüchig, deshalb sichert er die Spitze nicht ab. Warum es so viel wert ist, zuletzt zu handeln: [Positionsspiel](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Wie sollte der Button ein dynamisches Board wie dieses betten?

**Nicht nur klein – hier kommt die große Size mit in den Mix.** Mit dem Nut Advantage ist eine große Bet schwer zu raisen: Straßen, Sets und Overpairs liegen größtenteils auf einer Seite (der Big Blind hält nur 7,1% Straßen und 0,7% Sets), also hat der andere Spieler wenig, womit er sich wehren kann.

Das ist das Gegenteil des Rezepts für trockene Boards. Dort funktionierte klein und häufig, weil das Ziel war, Luft zum Folden zu bringen. Hier halten **68,4%** der gegnerischen Range einen Draw, also sind **Folds teuer zu kaufen** – die kleine Size allein schafft die Arbeit nicht, die große muss dazukommen. ⚠ Zieh daraus nicht den Schluss „also sinkt die Frequenz“: Dieser Lernspot berechnet nur die erste Aktion am Flop, also sind die tatsächliche Aufteilung der Bet Sizes und die Frequenz der Continuation Bet (C-Bet) des Buttons nicht darin enthalten. Die Version Board für Board steht in der [Continuation-Bet-Strategie](/de/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Alles oben ist Output des Poker-Solvers; dieser Abschnitt ist eine Lesart davon. Der Lernspot berechnet nur die erste Aktion des Big Blinds vor, deshalb steht die Aufteilung der Bet Sizes des Buttons nicht auf diesem Bildschirm. Öffne „Diesen Spot selbst berechnen“ und lass den Baum rechnen, wenn du die tatsächlichen Zahlen willst.]:::

## Was ändert sich am Tisch?

- **Ein Draw ist kein Grund, aus dem Big Blind anzuspielen.** Beide Spieler haben hier ungefähr dieselben Draws, ein Draw ist also kein Vorteil – spielst du damit an, läufst du in die Made Hands, die nur dein Gegner hat.
- **Spiel Top Pair auf Q-J-T nicht über drei Streets auf Value.** 21,0% seiner Range liegen schon vorne, und das meiste vom Rest hat einen Draw gegen dich. Runtercallen ist besser, als hineinzubetten.
- **Denk daran, was in diesem Check steckt.** Die 99,9% des Big Blinds enthalten 32 Combos Straßen (K9, 98) und 27 Combos Zwei Paare. Diese Hände checken nicht, weil sie schwach sind – **gegen die C-Bets des Buttons bringt es mehr, die Aktion zurückzugeben, als hineinzuspielen** (wie oft der Button hier c-bettet, zeigt dieser Lernspot nicht), und die Check-Range fällt so nicht zu reiner Luft zusammen. Lies den Check also nicht als „nichts“ und schließ einen Check-Raise nicht aus. ⚠ Wie hoch die *Frequenz* dieses Check-Raises ist, kann diese Berechnung nicht sagen: Der Lernspot endet bei **der ersten Aktion am Flop**, und alles danach braucht „Diesen Spot selbst berechnen“.
- **Gegen Gegner, die Draws nie folden, bette größer statt öfter.** Folds zu kaufen scheitert hier; Draws zahlen zu lassen funktioniert.

:::readnext[Weiterlesen]
/de/blog/k-high-board-cbet | K-8-3: Der Big Blind checkt 99,8% | /images/gto-srp-dry-king-oop-de.webp
/de/blog/a-high-board-cbet | A-7-2: Top Pair und trotzdem Check | /images/gto-srp-dry-ace-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Verbundenes Broadway-Board, Two-Tone** → **⚡ Ergebnisse ansehen** – der Bildschirm von oben erscheint ohne Wartezeit.

Lies in diesem Spot das Panel **Draws** rechts – OESDs und Gutshots zusammen liegen über 60%, zum ersten Mal in dieser Serie. Stell dann oben **Spieler:** auf **IP (BTN (Open-Raiser))** und schau auf **Straße** 10,5%: Aus dieser einen Zeile stammt der ganze Artikel.

Wenn du es üben statt lesen willst, öffne den **GTO-Trainer** in der Seitenleiste: Er teilt Hände nach den echten Range-Gewichten aus und zeigt dir, wie viele Big Blinds deine Aktion kostet. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

## FAQ

**Q. Welche Hände machen auf Q-J-T eine Straße?**

A. Drei: AK für A-K-Q-J-T, K9 für K-Q-J-T-9 und 98 für Q-J-T-9-8. Keine der Karten, die sie brauchen – Ass, König, Neun, Acht –, liegt auf dem Board, also sind es jeweils 4 × 4 = 16 Combos, insgesamt 48. Der Big Blind 3-bettet AK preflop, damit bleiben ihm 32.

**Q. Ist ein nasses Board nicht genau der richtige Ort für einen Semi-Bluff-Lead?**

A. Nein – die Zahl der Draws allein entscheidet das nicht. Die Verteilung der Made Hands, der Nut Advantage und Blocker müssen gegeneinander abgewogen werden. Hier stehen OESDs bei 28,7% gegen 27,7% – praktisch identisch –, während fertige Straßen mit 7,1% gegen 10,5% beim Button liegen. Ein Lead braucht die Spitze der Range auf deiner Seite, nicht den Durchschnitt, und dieser Flop ist genau das Gegenteil. Es gibt ein Board unter den Lernspots, auf dem die Bedingung wirklich erfüllt ist – das [mittlere verbundene 9-8-7](/de/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-de.webp"), auf dem der Big Blind in 23,7% der Fälle anspielt statt fast nie.

**Q. Ist Range-Vorteil dasselbe wie Nut Advantage?**

A. Nein. Beim Range-Vorteil geht es um den Durchschnitt – wessen Range über alle Hände mehr Equity hat. Beim Nut Advantage geht es um das Extrem – wer die Spitze der Rangfolge hält, die auf Q-J-T Straße, Set, Zwei Paare, Overpair lautet. Die Equity ist mit 46,7% gegen 53,3% fast ausgeglichen, doch Straßen und Sets sprechen beide für den Button (nur Zwei Paare liegen mit 6,0% gegen 5,9% gleichauf). Wenn beide so auseinanderlaufen, bestimmt der Nut Advantage die Bet Size.

**Q. Kann ich diese Zahlen auf jedem Limit verwenden?**

A. Als Ausgangspunkt, wenn die Bedingungen passen: Heads-up, 100bb, Standard-Ranges für Open und Call, kein Rake. Gerade dieses Board wird mit mehr Tiefe noch einseitiger – bei 200bb wiegt der Abstand von 3,4 Prozentpunkten bei den Straßen viel schwerer als hier, weil mehr Geld übrig ist, das du an die Hand verlieren kannst, die du selbst nicht haben kannst.
`.trim(),
};

export default POST;
