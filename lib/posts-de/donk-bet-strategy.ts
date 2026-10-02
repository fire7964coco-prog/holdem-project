import type { Post } from "../posts";

/**
 * GTO-Solver-Serie Nr. 4, deutsche Fassung – 9♥8♥7♣, verbundenes Middle-Board, Two-Tone.
 * Quelle: lib/posts-en/donk-bet-strategy.ts (EN updated 2026-09-26). Zahlen: Lernspot-Ausgabe vom 2026-08-19,
 *   docs/gto-solver-series-spec.md §4-B. App-Beschriftungen: docs/solver-app-verbatim-de-2026-10-02.md.
 * Keyword: Donk Bet 9-8-7 (de-Vertreter der Donk-Bet-Achse, docs/keyword-bank/de-gto-series.md §5).
 * Grenzen: nur die erste Entscheidung des BB am Flop; kein Bet-Knoten des BTN, keine Check-Raise-Frequenz; ohne Rake.
 *   Die Sidebar-Beschriftung „GTO-Trainer“ stammt von der /de/solver-Landingpage, nicht aus der App-Erfassung.
 */
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "9-8-7: Hier ist die Donk Bet richtig",
  seoTitle: "Donk Bet am 9-8-7-Flop: Warum der Big Blind 23,7% setzt",
  desc: "Die Donk Bet gilt im Poker als Anfängerfehler. Auf 9-8-7 bettet der Big Blind laut GTO-Solver 23,7% seiner Range – die Board-Bedingung dahinter und das Sizing.",
  tldr: "Auf 9♥8♥7♣ nach einem Open des Buttons und einem Call des Big Blinds checkt der Big Blind 76,2% seiner Range und spielt 23,7% an – der erste Spot dieser Serie, in dem die Donk Bet eine echte Strategie ist und kein Rundungsrest. Der Range-Vorteil hat nicht die Seite gewechselt: Die Equity steht weiterhin 48,5% zu 51,5%. Verändert haben sich der Abstand und die Stelle, an der die starken Hände jeder Seite liegen.",
  category: "strategy",
  date: "2026-10-02",
  updated: "2026-10-02",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-de.webp",
  imageAlt: "Ergebnis des HoldemMaster-GTO-Solvers für den verbundenen Two-Tone-Flop 9♥8♥7♣: Das Raster des Big Blinds mischt grüne Checks mit orangen und pinken Bets",
  tags: [
    "donk bet",
    "donk bet poker",
    "was ist eine donk bet",
    "donk bet 9-8-7",
    "lead bet",
    "verbundenes middle-board",
    "range-vorteil",
  ],
  content: `
Eine der ersten Regeln, die du im Poker lernst: **Check zum Raiser.** Wer preflop angegriffen hat, darf am Flop als Erster betten.

Die letzten drei Spots zeigten diese Regel in ihrer folgsamsten Form. Auf dem [A-High-Flop](/de/blog/a-high-board-cbet), dem [K-High-Flop](/de/blog/k-high-board-cbet) und dem [Broadway-Flop](/de/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-de.webp") lag der Anteil, mit dem der Big Blind selbst bettete, jedes Mal unter 2% – auf K-8-3 und Q-J-T bei 0,2% oder weniger, praktisch null.

Auf **9♥ 8♥ 7♣** sind es **23,7%**. Hier gilt die Regel nicht mehr.

Eine Bet des Spielers, der preflop nur gecallt hat – hier der Big Blind (BB) gegen den Open-Raise des Buttons (BTN) –, heißt **Donk Bet**: von „Donkey“ (Esel), was schon verrät, wie man sie lange gesehen hat. Man nennt sie auch **Lead**. Poker-Solver nehmen sie auf bestimmten Boards in die Strategie auf, und dies ist das deutlichste Beispiel unter den Lernspots.

Alle Zahlen unten stammen aus dem [kostenlosen GTO-Solver](/de/solver) von HoldemMaster, abgelesen am 19.08.2026 aus dem Ergebnis des Lernspots.


:::stripe
Spot | BTN eröffnet 2,5bb → BB callt (Heads-up)
Flop | 9♥ 8♥ 7♣ (Two-Tone – zwei Herz)
Pot · Stack | Pot 5,5bb · effektiver Stack 97,5bb
Ergebnis | BB spielt 23,7% an – die erste echte Donk Bet dieser Serie
:::

> **Kurze Antwort**
> Auf 9♥8♥7♣ checkt der Big Blind **76,2%** seiner Range und spielt **23,7%** an, verteilt auf zwei Sizes (beides gerundet). Aber **der Range-Vorteil (Range Advantage) hat nicht die Seite gewechselt** – die Equity steht weiterhin 48,5% zu 51,5% zugunsten des Buttons. Verändert haben sich die Größe des Abstands und die Stelle, an der die starken Hände liegen: Die Stärke des Big Blinds steckt in fertigen Straßen, die des Buttons in Overpairs, die dieses Board bedroht.

## Unter welchen Bedingungen entstehen diese Zahlen?

Der Button eröffnet auf 2,5bb, der Big Blind callt, alle anderen folden – zwei Spieler, ein Pot von 5,5bb, 97,5bb dahinter. Der Big Blind spielt out of position (OOP), handelt nach dem Flop also zuerst; der Button sitzt in Position (IP). Die Ranges sind die üblichen Näherungen für 100bb online, der Flop ist 9♥ 8♥ 7♣ mit zwei Herz, und der Poker-Solver hat zwei Bet Sizes zur Verfügung, rund ein Drittel und drei Viertel des Pots. Rake ist nicht modelliert, abgelesen wurden die Zahlen am 19.08.2026.

![Pokertisch mit Flop 9♥8♥7♣: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst](/images/gto-srp-middle-connected-scene-de.webp "9♥8♥7♣ · BTN eröffnet auf 2,5bb, BB callt – der Big Blind handelt zuerst")

| Bedingung | Wert |
|---|---|
| Preflop-Aktion | BTN eröffnet 2,5bb · BB callt · alle anderen folden |
| Ranges | Näherungen an den 100bb-Onlinestandard |
| Flop | 9♥ 8♥ 7♣, Two-Tone (zwei Herz) |
| Pot · effektiver Stack | Pot 5,5bb · effektiver Stack 97,5bb |
| Bet Sizes | Rund 33% und 75% des Pots |
| Rake | Nicht modelliert |
| Geprüft | 19.08.2026, Ergebnis des Lernspots |

## Wie oft spielt der Big Blind auf 9-8-7 eine Donk Bet?

**23,7%** seiner Range, und mehr als zwei Drittel davon gehen in die kleine Size.

| Erste Aktion des BB | Frequenz | Combos |
|---|---|---|
| Check | **76,2%** | 352,0 |
| Bet 1,8bb (33% vom Pot) | **16,8%** | 77,8 |
| Bet 4,1bb (75% vom Pot) | 6,9% | 32,2 |

Leg die vier Flops nebeneinander, und der Sprung ist offensichtlich.

| Flop | BB spielt an |
|---|---|
| A-7-2 (trocken) | 1,9% |
| K-8-3 (trocken) | 0,2% |
| Q-J-T (verbunden, Two-Tone) | 0,1% |
| **9-8-7 (verbundenes Middle-Board, Two-Tone)** | **23,7%** |

**Von unter 2% auf 23,7% – mehr als das Zehnfache.** Das ist kein „ab und zu mal einstreuen“; das ist eine andere Strategie.

## Wann ist eine Donk Bet richtig – was ist anders als auf den ersten drei Flops?

**Zum ersten Mal liegt der Big Blind in einer Top-Kategorie vorn.** Fertige Straßen: 5,2% gegen 4,2%.

Zähl die Kombinationen, und der Grund zeigt sich exakt. Drei Hände machen hier eine Straße: ==JT (J-T-9-8-7)==, ==T6 (T-9-8-7-6)== und ==65 (9-8-7-6-5)==.

| Straßen-Hand | BB (Calling-Range) | BTN (Opening-Range) |
|---|---|---|
| JT | ✅ suited und offsuit (16 Combos) | ✅ suited und offsuit (16 Combos) |
| T6 | ✅ **T6s (4 Combos)** | ❌ außerhalb der Opening-Range |
| 65 | ✅ 65s (4 Combos) | ✅ 65s (4 Combos) |
| **Gesamt** | **24 Combos = 5,2%** | **20 Combos = 4,2%** |

**Der ganze Unterschied ist T6s – vier Combos.** Die Button-Range dieses Poker-Solvers beginnt bei T7s, T6 suited kommt also nie an, während der Big Blind die Hand billig verteidigt, weil 1bb der 2,5bb schon im Pot liegt. Diese eine Zelle entscheidet, wer mehr **fertige Straßen** hält – nicht, wer die Nuts hält; das ist eine eigene Frage: Die beste Hand hier ist J-T, und beide Spieler haben alle 16 Combos davon.

Es geht auch in die andere Richtung. Die Overpairs gehören dem Button.

| Overpair (Pocket Pair über der 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 Combos | ✅ 6 Combos |
| JJ · QQ · KK · AA | ❌ alle preflop ge-3-bettet | ✅ 24 Combos |
| **Gesamt** | **6 Combos = 1,3%** | **30 Combos = 6,4%** |

## Hat der Big Blind auf diesem Flop also den Range-Vorteil?

**Nein. Die Equity steht weiterhin 48,5% zu 51,5%.** Das sollte man klar aussprechen, denn es ist der naheliegendste Fehlschluss: Dass eine Donk Bet auftaucht, heißt nicht, dass der Range-Vorteil gewandert ist.

![Infografik zur Range-Zusammensetzung: die Hand-Kategorien von Big Blind und Button auf einem verbundenen Two-Tone-Middle-Board im Vergleich](/images/gto-srp-middle-connected-ranges-de.webp "9♥8♥7♣ · Aufteilung nach Kategorien – Straßen sprechen für den Big Blind, Overpairs und A-High für den Button")

| Kategorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Straße | **5,2%** | 4,2% |
| Set/Drilling | 1,9% | 1,9% |
| Zwei Paare | 2,8% | 2,8% |
| Overpair | 1,3% | **6,4%** |
| Top Pair (9) | **13,6%** | 12,7% |
| Second Pair (8) | **8,4%** | 7,6% |
| Weak Pair (drittes Paar oder schwächer) | **6,5%** | 6,4% |
| Underpair | **6,5%** | 6,4% |
| A-High | 24,2% | **30,5%** |
| K-High | **13,9%** | 11,9% |
| Keine Made Hand | **15,6%** | 9,3% |

(Die Spalten ergeben 99,9 und 100,1 – das ist Rundung.)

**Nur zwei Zeilen sprechen für den Button**: Overpairs, 6,4% gegen 1,3%, und A-High, 30,5% gegen 24,2%. Zwei Paare liegen mit 2,8% exakt gleichauf, Sets mit 1,9%, und jede andere Zeile gehört dem Big Blind.

Die Draws muss man daneben lesen.

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo Draw (Straße + Flush) | **4,5%** | 3,6% |
| Flushdraw | **3,2%** | 2,3% |
| Beidseitiger Straßendraw (OESD) | **26,2%** | 23,7% |
| Gutshot | **21,6%** | 20,6% |
| Backdoor-Flushdraw | 14,1% | **17,6%** |
| Kein Draw | 30,3% | **32,2%** |

**Zählt man nur echte Draws – ohne Backdoors –, hat der Big Blind 55,5% gegen 50,2% beim Button.** Auf diesem Board neigen sich nicht nur die fertigen Hände zu ihm, sondern auch die, die noch wachsen.

Dasselbe gilt, wenn man das Geld mitzählt. Die Equity-Realisierung spricht weiterhin für den Button, nur weniger deutlich als auf allen bisherigen Flops.

| Kennzahl | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,5% | 51,5% |
| Erwartungswert (EV, bb) | 2,48 | 3,02 |
| **Equity-Realisierung (EQR)** | **93,2%** | **106,4%** |

Nach 84,0%, 80,7% und 77,9% auf den ersten drei Flops **dreht** die Equity-Realisierung des Big Blinds **hier** – mit 93,2% kommt er so nah wie noch nie daran, seinen vollen Anteil zu behalten. Das ist das eigentliche Signal: Eine Donk Bet taucht auf, wenn der Spieler out of position endlich festhalten kann, was seine Equity wert ist.

Damit das passiert, haben sich zwei Dinge geändert.

**Erstens: Der Abstand ist geschrumpft.** 3,0 Prozentpunkte Equity-Differenz sind der kleinste Wert der bisherigen vier Flops – auf A-7-2 waren es 9,8 Punkte, auf Q-J-T 6,6.

**Zweitens: Die Stärke des Buttons sitzt an verwundbaren Stellen.** Die einzigen zwei Kategorien, in denen er vorn liegt, sind Overpairs (6,4%) und A-High (30,5%) – und eine davon ist gar keine Stärke. Der Großteil dieses A-High hat hier kein Paar – und wo es einen Draw hat, hat der Big Blind auch einen, sodass sich die Draws aufheben, statt eine Seite zu begünstigen. Die Overpairs sind aus dem Grund im nächsten Abschnitt zerbrechlich. Der Vorsprung des Big Blinds dagegen steckt in Händen, die **schon fertig** sind.

Eine Donk Bet wird nicht allein durch die durchschnittliche Stärke richtig, sondern dann, wenn **du mehr von den stärksten Händen hältst und dein Gegner nicht selbstbewusst betten kann.** Beide Bedingungen scheinen hier erfüllt: Der Big Blind hat mehr Straßen (24 Combos gegen 20, während die Nut-Straße J-T bei beiden 16 Combos hat), und mit 30,5% A-High in seiner Range würde sich der Button schwertun, breit zu feuern – eine Lesart aus der Range-Zusammensetzung, denn der eigene Bet-Knoten des Buttons ist in dieser Berechnung nicht enthalten. Genau diesen freien Raum besetzt die Donk Bet.

## Warum sind die Overpairs des Buttons verwundbar?

**Weil fast die Hälfte der noch kommenden Karten den Turn für sie verschlechtert.**

Angenommen, du hältst QQ. Im Moment liegst du damit nahe an der besten Hand. Von den 47 ungesehenen Karten:

- **T, J, 6, 5 – 16 Karten.** Jede davon **komplettiert eine Straße** schon mit einer einzigen passenden Karte in der Hand deines Gegners. Ein Bube macht das Board J-9-8-7, und **wer eine Zehn hält, hat bereits J-T-9-8-7.**
- **Die restlichen Herzkarten, die noch nicht mitgezählt sind – 7 Karten.** Der Flush kommt an.

Zusammen sind das **23 von 47 Karten, rund 49%** (⚠ für QQ ohne Herz – hältst du die Q♥, liegt eine dieser sieben Herzkarten in deiner eigenen Hand, dann sind es 22 von 47, rund 47%). Ungefähr jeder zweite Turn macht die Hand schwerer spielbar. Wenn du genau dieses Outs-Zählen von der anderen Seite festigen willst, fang mit den [Drawing Odds](/de/blog/holdem-drawing-odds) an.

Ein Overpair ist hier also eine Hand, mit der du **die Draws jetzt zahlen lässt und bei einem Raise aufhörst** – keine, mit der du einen riesigen Pot baust. Der Pot, den du meiden solltest, ist der, der nach einem schlechten Turn entsteht, nicht der, den du am Flop baust.

## Warum gehen zwei Drittel der Donk Bets in die kleine Size?

**Weil die Donk Bet eine Aussage über die ganze Range ist, nicht über eine einzelne Hand.** Von den 23,7% gehen 16,8 Prozentpunkte zu einem Drittel des Pots und 6,9 zu drei Vierteln.

Eine kleine Bet sagt: „Meine gesamte Range mag diesen Flop.“ Betten nur die starken Hände, zerfällt die Range in „Bet = stark, Check = schwach“, und dein Gegner liest das gratis. Mischst du Straßen, Top Pairs und Draws in eine kleine Size, bleiben sie ununterscheidbar.

Die große Size gibt es trotzdem aus einem Grund. Ginge jede Straße in die kleine Bet, könnte der Button alles callen, ohne je einem großen Pot gegenüberzustehen. **Erst zwei Sizes sorgen dafür, dass weder das Callen noch das Raisen bequem ist.**

## Wann solltest du nicht c-betten? Die Ausnahme 9-8-7

**Auf diesem Flop, als Preflop-Raiser** – egal ob der Big Blind anspielt oder checkt. Unter den Lernspots ist es das klarste Board für „wann keine Continuation Bet (C-Bet)“, und der Grund ist nicht die Textur, sondern wie deine eigene Range darauf aussieht. Wie sich dieses Urteil über Board-Typen hinweg verallgemeinern lässt, steht in der [Continuation-Bet-Strategie](/de/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

Der Grund ist die Range-Zusammensetzung. A-High macht 30,5% der Button-Range aus, K-High 11,9%, keine Made Hand 9,3% – 51,7% ohne Paar. ⚠ **Aber „kein Paar“ ist für sich allein nicht der Grund.** Addier die Spalte des Big Blinds genauso, und du kommst auf **53,7%** – der Big Blind hat *mehr* ungepaarte Hände in seiner Range, um 2,0 Punkte, und gerade er spielt mit 23,7% seiner Range an. Was den Button tatsächlich bremst, ist **das, was in der Check-Range zurückgeblieben ist**: 76,2% der Hände des Big Blinds sind noch dort, darunter Straßen und 13,6% Top Pair, also läuft breites Betten in einen **Check-Raise**. ⚠ Ein Teil der 24 Straßen-Combos spielt an, statt zu checken, sie sitzen also nicht alle in der Check-Range – und die *Frequenz* des Check-Raises ist in dieser Berechnung nicht enthalten.

Verpasste **offsuit** High Cards wie AKo und AQo sind Standard-Check-backs: Sie haben Showdown-Value, und kommt ein Raise, hast du nichts, womit du weitermachen kannst. Die suited Varianten sind eine andere Hand – A♥K♥ und A♥Q♥ sind hier Nut-Flushdraws, und sie betten.

:::note[Der Lernspot berechnet nur die erste Aktion am Flop vor – die des Big Blinds. Wie stark die C-Bet-Frequenz des Buttons nach einem Check tatsächlich sinkt, steht nicht auf diesem Bildschirm. Öffne „Diesen Spot selbst berechnen“ und rechne den Spielbaum durch, um es zu sehen.]:::

## Was ändert sich am Tisch?

- **Donk Bets gibt es auf verbundenen Middle-Boards nach einem weiten Open aus später Position.** Das monotone Board im nächsten Spot hat ebenfalls rund 11%, während trockene A-High- und K-High-Flops praktisch bei null liegen. ⚠ Das einzige verbundene Middle-Board, das diese Serie tatsächlich berechnet, ist allerdings 9-8-7, und die Bedingung ist nicht die Textur allein, sondern **welche Range darauf mehr von den stärksten Händen hält.** Der Beweis steckt in der Serie selbst: Der [6-5-2-Flop](/de/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-de.webp") ist derselbe Single Raised Pot Button gegen Big Blind, und dort spielt der Big Blind nur **3,2%** an, weil die einzige Hand, die eine Straße macht, 4-3 ist und keine der beiden Ranges sie hält. Niedrig und verbunden allein erzeugt keine Donk Bet.
- **Du checkst trotzdem drei Viertel der Zeit.** Wenn du anspielst: klein, und mit mehr als nur deinen besten Händen – eine Range, die nur mit Straßen anspielt, wird sofort gelesen, also gehören Top Pair und Draws in dieselbe Size. Behalte aber die Summe im Blick: **Die gesamte Donk Bet beträgt 23,7%, davon 16,8 in der kleinen Size.** Wird daraus „jeden Draw anspielen“, wird es die halbe Range und kehrt die Strategie um. Die anderen 76,2% checken.
- **Am Button: Sei auf dieser Textur zurückhaltend mit der C-Bet.** Die Check-Range des Big Blinds enthält noch Straßen und Top Pair, und deine Overpairs wollen einen kontrollierten Pot statt eines großen.
- **Gegen einen Gegner, der viel zu oft c-bettet, kann Checken mehr wert sein als Anspielen** – und dann mit den Straßen und Top Pairs check-**raisen**, statt nur zu check-callen. Ihn deine starken Hände für dich betten zu lassen, ist mehr wert, als die Initiative zu übernehmen, aber nur, wenn du ihn danach dafür zahlen lässt.
- **Lies es auch andersherum.** Gegen einen Spieler, der auf nassen Boards gern zurückcheckt, ist Anspielen mehr wert, als die Zahl des Poker-Solvers nahelegt: Checken verschenkt dort schlicht die Street.

:::readnext[Weiterlesen]
/de/blog/broadway-board-strategy | Q-J-T: Draws allein reichen nicht | /images/gto-srp-broadway-oop-de.webp
/de/blog/k-high-board-cbet | K-8-3: Der Big Blind checkt 99,8% | /images/gto-srp-dry-king-oop-de.webp
:::

## Prüf es selbst nach

Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **Verbundenes Middle-Board, Two-Tone** → **⚡ Ergebnisse ansehen**.

Am besten studierst du diesen Spot **direkt neben einem trockenen Board.** Öffne zuerst „Trockenes K-High-Board“ und sieh dir ein Raster an, das in einem einzigen Grün liegt, dann komm hierher zurück und sieh zu, wie Orange und Pink darin auftauchen. Dieselben Spieler, dieselben Ranges – drei Karten haben die Strategie verändert.

Öffne danach den **GTO-Trainer** in der Seitenleiste und lass dir genau die Donk Bet austeilen, über die du gerade gelesen hast – er gibt dir eine zufällige Hand aus den echten Range-Gewichten und sagt dir in Big Blinds, was die falsche Wahl gekostet hat. Kostenlos, nichts zu installieren, ohne Konto nutzbar.

## FAQ

**Q. Was ist eine Donk Bet im Poker?**

A. Eine Bet am Flop von dem Spieler, der preflop nicht geraist hat – er bettet in den Aggressor hinein, statt zu ihm zu checken. Der Name kommt von „Donkey“ (Esel), so wurde der Spielzug lange gesehen. Poker-Solver zeigen, dass er auf bestimmten Board-Texturen richtig ist, und auf diesem Flop macht er 23,7% der Strategie des Big Blinds aus.

**Q. Warum gilt die Donk Bet als schlecht?**

A. Weil sie es auf den meisten Boards ist. In dieser Serie spielte der Big Blind auf dem A-High-, dem K-High- und dem Broadway-Flop jeweils mit unter 2% an, weil der Preflop-Raiser mit diesen Karten besser verbunden ist. Die Ausnahme ist ein Board, auf dem **der Caller mehr der allerbesten Hände hält** – und 9-8-7 ist das deutlichste Beispiel.

**Q. Liegt der Big Blind auf 9-8-7 insgesamt vorn?**

A. Nein. Die Equity steht 48,5% zu 51,5% und die Equity-Realisierung 93,2% zu 106,4%, beides zugunsten des Buttons. Die Donk Bet taucht auf, weil der Big Blind mehr fertige Straßen hält, während sich die Stärke des Buttons auf Overpairs konzentriert, die dieses Board bedroht – nicht, weil der Big Blind insgesamt vorn liegt.

**Q. Wann solltest du im Poker checken statt anzuspielen?**

A. Drei Viertel der Zeit, sogar auf diesem Flop – 76,2% der Range des Big Blinds checken. Checke, wenn deine Range nicht mehr fertige Hände hält als die des Gegners, also auf jedem trockenen A-High- oder K-High-Board, und checke, wenn dein Gegner ohnehin zu oft bettet: Ihn feuern zu lassen ist mehr wert, als ihm die Initiative abzunehmen. Anspielen ist die Ausnahme, kein Upgrade.

**Q. Was passiert, wenn ich anspiele und geraist werde?**

A. Plane es, bevor du bettest, denn eine Donk Bet von einem Drittel Pot lädt zu Raises ein. Straßen und OESDs machen weiter – du hast die Equity für einen großen Pot. Top Pair mit einer Neun ist ein Call, einmal, und gibt bei einem schlechten Turn meist auf. Hände ohne Paar und ohne Draw sollten folden, statt „es herauszufinden“: Genau auf diesen Teil deiner Range zielt der Raise.

**Q. Mit welcher Size solltest du anspielen?**

A. Meist klein. Der Poker-Solver legt 16,8 der 23,7 Prozentpunkte in eine Bet von einem Drittel Pot und 6,9 in drei Viertel. Die kleine Size ist der Standard, weil es darum geht, mit der ganzen Range Druck zu machen; die große gibt es, damit dein Gegner nicht einfach alles callen kann.

**Q. Gelten diese Frequenzen auch bei meinem Limit?**

A. Die Board-Bedingung ja; die genauen 23,7% lassen sich nicht unverändert übertragen. Sie setzen Heads-up, 100bb, einen Button-Open auf 2,5bb und Standard-Verteidigungsranges voraus, ohne Rake. Ein größerer Live-Open verändert den Pot und die Stack-to-Pot-Ratio (SPR), und ein Big Blind, der viel weiter verteidigt als das Modell, hält noch mehr Straßen – was das Anspielen stärker macht, nicht schwächer.
`.trim(),
};

export default POST;
