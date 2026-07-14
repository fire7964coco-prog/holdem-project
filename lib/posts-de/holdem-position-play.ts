import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-position-play",
  title: "Positions-Strategie: In Position vs Out of Position",
  seoTitle: "Position schlägt Karten — In vs Out of Position",
  desc: "Zwei Spieler, gleiche Karten, gegensätzliche Ergebnisse — der Sitz hat's gemacht. In vs out of Position, warum Position zählt und Open-Ranges von UTG bis BTN.",
  tldr: "In Position zu sein bedeutet, dass du zuletzt handelst — du siehst jede Entscheidung deiner Gegner, bevor du einen Chip ausgibst. Solver- und Datenbank-Studien legen nahe, dass In-Position-Spieler rund 85–100% ihrer Equity realisieren, während Out-of-Position-Spieler nur etwa 60–85% mitnehmen. Deshalb öffnet UTG ~13% der Hände und der Button ~43% — und deshalb schreibt Position postflop jede C-Bet, jeden Bluff und jede Pot-Control-Entscheidung neu.",
  category: "strategy",
  date: "2026-06-18",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "16 Min.",
  emoji: "🎯",
  image: "/images/holdem-position-play-hero.webp",
  imageAlt: "Draufsicht auf einen professionellen Pokertisch mit 9 beschrifteten Positionen und Dealer-Button, der die Button- und Cutoff-Sitze als Profitzonen hervorhebt",
  tags: [
    "in position poker",
    "out of position poker",
    "position poker strategie",
    "under the gun poker",
    "warum position im poker zählt",
    "limpen oder raisen UTG",
    "out of position spielen",
    "beste position poker",
  ],
  content: `
Letztes Frühjahr habe ich in meinem Stamm-1/2-Spiel K♥Q♥ zweimal in derselben Session gespielt — einmal aus dem Big Blind, einmal vom Button — und diese beiden Hände haben mir mehr über Position beigebracht als jedes Trainingsvideo.

Aus dem Big Blind callte ich einen Button-Raise und floppte Top Pair auf Q♠8♦4♣. Ich war an jeder Street zuerst dran, check-callte den Flop, check-callte den Turn, und als am River eine dritte Patrone kam, starrte ich auf den Filz und foldete. Vielleicht hatte er's, vielleicht nicht — ==r:out of Position habe ich zwei Streets bezahlt, um nichts zu lernen.==

Eine Stunde später, dieselben K♥Q♥, diesmal am Button. Ich raiste, der Big Blind callte und checkte den J♠7♦3♣-Flop. Ich checkte hinterher. Der Turn Q♦ gab mir Top Pair; er checkte erneut, ich bettete, er callte — und bezahlte meine River-Bet mit einer schlechteren Hand. ==g:Gleiche Karten. Gegensätzliche Sitze. Gegensätzliche Ergebnisse.== Das ist Position — die erste der [fünf Entscheidungen](/de/blog/holdem-strategy), die eine gewinnende Texas-Hold'em-Strategie ausmachen, und die, auf der alles andere aufbaut.

---

> **Kurze Antwort**
> **In Position (IP)** bedeutet, dass du zuletzt handelst; **out of Position (OOP)** bedeutet, dass du zuerst handelst. Solver- und Datenbank-Studien legen nahe, dass IP-Spieler rund ==g:**85–100% ihrer Equity**== realisieren, während OOP-Spieler nur etwa ==r:60–85%== mitnehmen — eine Lücke, die aus Information entsteht, nicht aus Karten. Deshalb öffnet UTG ~13% der Hände, der Button ~43%, und deshalb ändert sich jede C-Bet, jeder Bluff und jede Pot-Control-Entscheidung mit deinem Sitz.

---

## Was bedeutet "in Position" im Poker?

**In Position** zu sein bedeutet, dass du am Flop, Turn und River **nach** deinem Gegner handelst — du siehst ihn checken, betten oder aufgeben, bevor du einen einzigen Chip einsetzt. Position wird immer relativ zum **Dealer-Button** gemessen: je näher du zur rechten Seite des Buttons in der Reihenfolge sitzt, desto später handelst du, und der Button selbst handelt auf jeder Postflop-Street garantiert zuletzt.

Position wird preflop entschieden und ändert sich während der Hand nie. Wenn du am Button sitzt und der Big Blind deinen Raise callt, bist du für die gesamte Hand IP. Wenn du under the Gun öffnest und der Button callt, bist du auf jeder Street bis zum Showdown OOP.

Die neun Sitze fallen in vier grobe Zonen:

| Zone | Sitze (9-max) | Standard-Haltung |
|:---|:---|:---|
| Frühe Position | UTG, UTG+1, UTG+2 | Engste Ranges — OOP gegen den Großteil des Tisches |
| Mittlere Position | Lojack, Hijack | Weiter werdend, während das Feld schrumpft |
| Späte Position | Cutoff, Button | Weiteste Ranges — IP gegen fast jeden |
| Blinds | SB, BB | Pflichteinsätze, OOP gegen jeden Nicht-Blind-Sitz postflop |

Für jeden Sitznamen, jede Abkürzung und die komplette 6-max- vs. 9-max-Tischkarte siehe den [Leitfaden zu Poker-Sitznamen und Tischkarte](/de/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") — dieser Artikel handelt davon, was du mit jedem Sitz *tust*.

---

## Was ist "out of Position" (OOP) — und warum dich zuerst zu handeln teuer kommt

**Out of Position** bedeutet, dass du auf den Postflop-Streets **vor** deinem Gegner handelst. Jede Entscheidung, die du triffst, liefert ihm Gratis-Information, und jede Entscheidung, die er trifft, kommt nach deiner an — zu spät, um dir zu helfen.

Das kostet dich das Zuerst-Handeln tatsächlich:

:::compare
Out of Position (zuerst handeln) | In Position (zuletzt handeln)
Ins Ungewisse betten — er kann raisen, callen oder folden, und du erfährst es, nachdem dein Geld drin ist | Seinen Check, seine Bet oder seinen Fold sehen, bevor du irgendetwas entscheidest
Keine Free Card nehmen — checkst du, kann er dich von deinem Draw wegbetten | Immer dann hinterher checken, wenn du die nächste Karte gratis sehen willst
Die Potgröße läuft dir davon — du kannst ihn nicht am Betten hindern, wenn du einen billigen Showdown willst | Du entscheidest, ob die Hand in eine weitere Street geht
Deine Range wird gelesen — Check-Call-Linien sind mit der Zeit durchschaubar | Deine Checks und Bets bleiben mehrdeutig, weil er blind handelt
:::

Beachte: nichts davon hat mit Karten zu tun. Zwei Spieler können die ganze Nacht identische Hände halten, und der, der zuerst handelt, wird damit trotzdem weniger Geld machen. Diese strukturelle Steuer einzukassieren — oder ihr auszuweichen — lehrt dich der Rest dieses Leitfadens.

---

## Warum ist Position in der Poker-Strategie so wichtig?

Weil Position dieselben Karten in mehr Geld verwandelt. Am klarsten sieht man es an der **Equity-Realization** — wie viel deiner theoretischen [Pot-Equity](/de/blog/holdem-equity) du bis zum Ende der Hand tatsächlich mitnimmst.

| Situation | Realisierte Equity (ca.) | Warum |
|:---|:---:|:---|
| **In Position** | ==g:**~85–100%**== | Zuletzt handeln → alles sehen → Value-Bets und Bluffs zum richtigen Moment |
| **Out of Position** | ==r:~60–85%== | Zuerst handeln → Gewinner folden, Verlierer bezahlen, Free Cards herschenken |

Diese Zahlen sind ungefähr — Solver-Outputs und Datenbank-Studien variieren mit Stack-Tiefe und Matchup — aber die Richtung ist universell: ==**der In-Position-Spieler über-realisiert systematisch, der Out-of-Position-Spieler unter-realisiert systematisch.**==

![IP vs OOP Vergleich — Button (IP) handelt zuletzt und realisiert rund 85–100% Equity; UTG (OOP) handelt zuerst und realisiert nur etwa 60–85% Equity](/images/holdem-position-play-ip-vs-oop.webp)

Nimm 8♥7♥ auf einem K♥4♠2♥-Flop. In Position spielt sich dein Flushdraw wunderbar: eine Bet billig callen, eine Free Card nehmen, wenn zu dir gecheckt wird, oder bluffen, wenn er zweimal Schwäche zeigt. Out of Position leckt derselbe Draw: du bettest und bekommst einen Raise, oder du checkst und siehst zu, wie er dich maximal zur Kasse bittet — oder schlimmer, du checkst und foldest genau die Karte, die dich komplettiert hätte. Dieselben neun Outs, ein sehr unterschiedlicher Preis.

Über Tausende von Händen verdichtet sich dieses Leck zum größten Einzelunterschied zwischen gewinnenden und verlierenden Spielern desselben Könnensniveaus. ==g:Gewinnende Spieler spielen nicht nur gute Karten — sie spielen gute Karten in guten Positionen.==

---

## Die beste Position im Poker — und die schlechteste

**Die beste Position im Poker ist der Button.** Es ist der einzige Sitz, der garantiert ==**auf jeder Postflop-Street zuletzt handelt**== — Flop, Turn und River, egal wer preflop geraist hat. Diese Garantie ist der Grund, warum der Button profitabel ~43% der Hände öffnen kann, während UTG nur ~13% schafft: Position, nicht Kartenstärke, finanziert den Unterschied.

Hier ist der Button-Vorteil in einer konkreten Hand. Du öffnest A♦9♦ am Button, der Big Blind callt, und der Flop kommt **K♦7♠2♥** — ein trockenes Board, das fast niemanden trifft. Der Big Blind checkt. Du hast komplett verfehlt, aber dieser Check hat dir gerade verraten, dass er wahrscheinlich auch verfehlt hat. ==g:Eine Bet gewinnt hier weit öfter, als sie verliert==, und wenn er foldet, nimmt Ass-hoch den Pot ohne Showdown. Jetzt dreh die Sitze um: OOP mit denselben A♦9♦ checkst du, er bettet, und du foldest einen bedeutsamen Teil der Zeit die beste Hand. Gleiche Karten; der Sitz hat die ganze Arbeit gemacht.

Der **Cutoff** ist aus einem Grund zweitbester: nur der Button handelt hinter dir, und wenn der Button foldet — was oft passiert — erbst du für den Rest der Hand die letzte Aktion.

**Und der schlechteste Sitz?** Es gibt tatsächlich zwei Antworten, und es lohnt sich, sie auseinanderzuhalten:

| Sitz | Typisches Langzeit-Ergebnis (Datenbank-Durchschnitte) | Warum |
|:---|:---|:---|
| **Button** | Klar positiv — der profitabelste Sitz in praktisch jedem Sample | Garantierte letzte Aktion postflop |
| **Cutoff** | Positiv — zweitbester | Nur der Button hinter dir |
| Hijack / Lojack | Leicht positiv bis etwa breakeven | Moderate Position, moderate Ranges |
| UTG | Nahe breakeven selbst für solide Spieler | Enge Range, OOP in den meisten Händen |
| **Small Blind** | Negativ — der ==r:**strukturell schlechteste Sitz, um eine Hand zu spielen**== | Zuerst dran auf jeder Postflop-Street, ein halber Blind bereits tot |
| **Big Blind** | ==r:**Der größte reine bb/100-Verlierer**== | Postet jede Runde einen vollen Blind — selbst perfektes Spiel verkleinert den Verlust nur |

Die Unterscheidung zählt: der **Big Blind verliert die meisten reinen Chips pro 100 Hände** einfach deshalb, weil er gezwungen ist, jede einzelne Runde einen vollen Blind einzuzahlen — keine Strategie macht einen Pflichteinsatz gratis. Aber der **Small Blind ist der schlechteste Sitz, um tatsächlich zu spielen**, weil du auf jeder Postflop-Street zuerst handelst, ohne einen ausgleichenden Rabatt, der den Aufwand wert wäre. Genaue bb/100-Zahlen variieren mit Stake und Spielerpool, also behandle jede konkrete Zahl eher als typisches Datenbank-Ergebnis denn als Gesetz — das *Ranking* aber ist bemerkenswert konsistent.

> **Live-Game-Tipp:** In einem 1/2-Live-Spiel limpen Spieler regelmäßig den Button, weil "ich keine tolle Hand habe". Das lässt die wertvollste Immobilie im Poker ungenutzt. Am Button: open-raisen oder folden — die positionelle Prämie ist zu wertvoll, um sie wegzulimpen.

---

## Under the Gun: was es bedeutet und wie man UTG spielt

**Under the Gun (UTG)** ist der Sitz unmittelbar links vom Big Blind — der erste Spieler, der preflop handelt, mit null Information über die acht Hände hinter ihm. Der Name ist die Strategie: du stehst *under the Gun*, unter Druck, gezwungen, dich zuerst festzulegen. (Postflop ändert sich die Reihenfolge übrigens: die Blinds handeln zuerst und der Button zuletzt — UTGs Fluch ist es, preflop blind zu öffnen und dann meist OOP gegen Caller aus später Position zu spielen.)

UTG gut zu spielen dreht sich vor allem um Zurückhaltung:

- **Öffne grob die besten ~13% der Hände** — der Kern sind starke Paare (88+), AK/AQ und die besten suited Broadways (AJs, KQs), abgerundet durch mittlere Paare und die besten suited Asse. Für das exakte Hand-für-Hand-Raster nutze den [Starthände-Chart](/de/blog/holdem-starting-hands-chart).
- **Folde das hübsche, aber dominierte Zeug.** KJo und QJo sehen spielbar aus und bluten leise Chips aus UTG — wenn sie treffen, trifft hinter dir oft jemand größer.
- **Rechne damit, die Hand OOP zu spielen.** Wer auch immer dein UTG-Open callt, hat wahrscheinlich für drei Streets Position auf dich, also muss deine Range stark genug sein, um diese Steuer auszuhalten.

> **Der Disziplin-Test:** Wenn es sich leicht falsch anfühlt, AJo aus UTG zu folden, spielst du es wahrscheinlich richtig. Fühlt sich eng an, bringt mehr.

---

## Ist es besser, aus UTG zu limpen oder zu raisen?

**Raisen oder folden — nicht limpen.** Ist eine Hand stark genug, um vom schlechtesten Preflop-Sitz gespielt zu werden, ist sie stark genug zum Raisen; ist sie nicht stark genug zum Raisen, ist es genau die Falle, die der Sitz für dich stellt, sie für den Rest der Hand OOP gegen mehrere Gegner zu spielen.

Der Open-Limp scheitert aus UTG an drei Punkten:

1. **Er lädt den ganzen Tisch ein** zu perfekten Pot Odds, sodass du OOP gegen vier zufällige Hände floppst.
2. **Er cappt deine wahrgenommene Range** — aufmerksame Spieler attackieren Limper unerbittlich, und du wirst Raises gegenüberstehen, gegen die du nicht bequem weiterspielen kannst.
3. **Er gewinnt preflop nichts.** Ein Raise kann die Blinds direkt nehmen; ein Limp nie.

Es gibt eine schmale Ausnahme in sehr passiven Live-Spielen — hinter anderen Limpern zu limpen mit kleinen Paaren und Suited Connectors, um einen billigen Multiway-Flop zu sehen — aber *Open*-Limpen aus UTG ist in praktisch jedem Lineup ein Leck. Das komplette Argument, inklusive wann Hinterher-Limpen tatsächlich in Ordnung ist, steht im [Limping-Leitfaden](/de/blog/holdem-limping).

---

## Frühe Position vs späte Position (Blinds stehlen)

Frühe Position ist, wo du verteidigst; späte Position ist, wo du angreifst. Von UTG bis UTG+2 ist die Aufgabe simpel — enge Range, große Karten, keine Fancy Plays. Ab dem Cutoff und Button ändert sich die Aufgabe komplett: du wartest nicht mehr auf Hände, ==g:du erntest totes Geld.==

**Blinds stehlen** ist der zentrale Move aus später Position. Wenn zu dir im CO oder am Button alle folden, geht es beim Raise nicht wirklich um deine Karten — es geht um die zwei Pflichteinsätze, die im Pot sitzen, und die Tatsache, dass beide Blinds die Hand OOP spielen müssen, wenn sie verteidigen:

- **Cutoff-Steal:** raise ~2,2–2,5× mit einer weiten Range, wenn zu dir gefoldet wird — aber bleib dir bewusst, dass der Button noch hinter dir lauert.
- **Button-Steal:** noch weiter — Hände wie K7s, Q9s und A2o werden profitable Opens, weil beide Blinds für immer OOP gegen dich sind.
- **Respektiere den Resteal:** Blinds, die aggressiv 3-betten, schneiden in deinen Steal-Profit; gegen sie zieh dich leicht enger und 4-bette deine besten Kandidaten.

![Ein Spieler in später Position am Button schiebt einen Raise nach vorne, während beide Blinds folden — ein Lehrbuch-Blindsteal](/images/holdem-position-play-blind-steal.webp "Die Blinds vom Button stehlen, wenn es rundherum foldet")

Die Asymmetrie ist die Lektion: dasselbe K7s, das ein feiner Button-Steal ist, ist ein sofortiger Fold aus früher Position. Die Hand hat sich nie geändert — die Anzahl der noch zu schlagenden Spieler und wer danach zuerst handelt, schon.

---

## Open-Ranges nach Position: der Strategie-Chart

Jeder Sitz bekommt seine eigene Open-Range, weil **die Anzahl der noch handelnden Spieler — und deine Postflop-Position gegen sie — das Risiko jeder Hand ändert**. Hier ist die Standard-9-max-Baseline:

| Position | Open-Range (ca.) | Begründung |
|:---|:---:|:---|
| UTG | ~13% | Acht Spieler dahinter, OOP in den meisten Händen |
| UTG+1 | ~14% | Kaum weiter als UTG |
| UTG+2 | ~16% | Feld beginnt zu schrumpfen |
| Lojack | ~17% | Erste echte mittlere Position |
| Hijack | ~20% | Steal-Gelegenheiten beginnen |
| **Cutoff** | **~27%** | Nur der Button dahinter — prima Steal-Sitz |
| **Button** | ==g:**~43%**== | Garantierte letzte Aktion postflop — weitester Open |
| Small Blind | ~40% (raise-or-fold) | Weit, wenn zu dir gefoldet wird, aber nie flach |
| Big Blind | Verteidigt weit gegen Steals | Schließende Aktion + Pot Odds, keine Opens |

![9-handed Pokertisch, der zeigt, wie sich Open-Ranges von UTG (~13%, eng rot) bis zum Button (~43%, weit grün) verbreitern](/images/holdem-position-play-opening-range.webp "Open-Range nach Position — UTG öffnet ~13%, der Button ~43%")

Die Faustregel: ==**jeder Schritt Richtung Button verbreitert die Range**== — ein bis zwei Punkte pro Sitz durch die frühe Position, dann große Sprünge am Cutoff (+7%) und Button (+16%), wo Position nahezu sicher wird. In die andere Richtung: ==r:trimm zuerst die schwächsten suited Hände und die offsuit Broadways.==

Diese Prozente beschreiben *Range-Größen* — welche konkreten Hände sie füllen (ob T9s hier öffnet, ob K9o dort den Schnitt schafft), ist die Aufgabe des [Starthände-Charts nach Position](/de/blog/holdem-starting-hands-chart), der jede Hand jedem Sitz zuordnet.

---

## Wie man out of Position spielt (wenn du nicht drumherum kommst)

Die meisten Leitfäden hören bei "spiel nicht OOP" auf. Schön — aber du bist zweimal pro Runde in den Blinds, und manchmal wird dein UTG-Open vom Button gecallt. So verlierst du am wenigsten und drehst gelegentlich den Spieß um:

**1. Der Check-Raise ist dein Equalizer.** Es ist die eine Waffe, die OOP hat und IP nicht: weil er erwartet zu betten, wenn zu ihm gecheckt wird, ==g:wendet ein Check-Raise seinen positionellen Autopiloten gegen ihn.== Bau die Range ehrlich auf — starke Hände (Sets, Two Pair) plus Draws mit echter Equity (Open-Ender, Flushdraws) — sodass sie nie reiner Bluff oder reiner Value ist.

**2. Bette größer, wenn du bettest.** OOP-Bets müssen Hände früher beenden. Ein größeres Sizing (denk zwei Drittel bis drei Viertel Pot statt einem Drittel) verweigert die Free Cards und billigen Floats, die Position deinem Gegner sonst erlauben würde. Small-Ball OOP zu spielen verlängert die Hand nur — und jede zusätzliche Street begünstigt den Spieler, der zuletzt handelt.

**3. Pot Control bedeutet mehr checken, mehr callen und früher folden.** Hände mittlerer Stärke OOP wollen billige Showdowns. Check-Call-Linien kommen dorthin; Bet-und-geraist-werden-Linien nicht. Und wenn die dritte Patrone kommt und deine Hand sich nicht verbessert hat, erinnere dich, was marginale Hände OOP tatsächlich sind: ==r:Bluffcatcher, die unter-realisieren.== Den River OOP öfter zu folden, als sich natürlich anfühlt, ist meist korrekt.

**4. Lead (Donk-Bet) selten und gezielt.** In den Preflop-Raiser zu betten funktioniert nur auf Boards, die deine Range begünstigen — niedrige, verbundene Flops, die eine Blind-Defend-Range treffen und die eines Raisers verfehlen. Als Standard-Linie ist es lesbar und ausbeutbar; als Skalpell auf den richtigen Boards ist es in Ordnung.

**5. Am besten von allem: komm gar nicht erst dorthin.** Raises aus dem Small Blind zu flat-callen, in mittlerer Position mit dominierten Händen cold-zucallen, den Big Blind mit Schrott gegen Opens aus früher Position zu verteidigen — das meiste OOP-Elend ist bei der Preflop-Entscheidung selbst verschuldet.

---

## Wie beeinflusst Position die C-Bet-Frequenz?

Massiv. Die Continuation Bet ist im Grunde ein Informations-Play, und Information ist genau das, was Position liefert:

| Situation | Typische Solver-C-Bet-Frequenz (Flop) |
|---|---|
| **IP (BTN/CO vs Blind-Defense)** | **~65–75%** der Boards |
| OOP (3-Bet-Pots aus den Blinds) | ~40–50% der Boards |
| OOP-Raiser vs IP-Caller | ~30–45% — am selektivsten |

In Position kannst du eine weite Range c-betten — inklusive Air und Backdoor-Draws — weil dein Gegner reagieren muss, ohne deinen nächsten Zug zu kennen, und wenn gecallt wird, handelst du am Turn immer noch zuletzt. Out of Position ist dieselbe Bet riskanter: ein Check-Raise beendet deinen Bluff, und ein Call lässt dich auf jeder verbleibenden Street zuerst rätseln. Deshalb verbrennt blindes 100%-C-Betten "weil du preflop geraist hast" OOP Geld.

Das komplette Framework zu Sizing und Board-Textur steht im [Continuation-Bet-Leitfaden](/de/blog/holdem-continuation-bet).

---

## Small-Blind-Strategie: warum 3-Bet oder Fold?

Der Small Blind sieht billig aus — ein halber Blind ist schon drin — und spielt sich teuer: du bist auf jeder Postflop-Street als Erster gegen alle dran. Die moderne Strategie hat sich auf eine schroffe Lösung geeinigt: ==**aus dem SB: 3-Bet oder Fold — fast nie flat-callen.**==

Aus dem SB zu flat-callen bringt dich in eine gecappte, durchschaubare Range, OOP, mit dem Big Blind noch hinter dir und den Odds, um zu squeezen. Stattdessen:

- **3-bette** deine Value-Hände und eine Schicht Blocker-Bluffs (A5s, A4s sind die Klassiker).
- **Folde** alles, was ein "billiger" Call gewesen wäre — der Rabatt deckt die positionelle Steuer nicht.
- **Sizing hoch auf ~4× den Open** (vs. ~3× beim 3-Betten IP): da du keinen Postflop-Vorteil haben wirst, verlange preflop mehr und beende mehr Hände direkt dort.

Für die Mechanik der Blinds selbst — warum es sie gibt und wie die Pflichteinsätze das Spiel formen — siehe den [Small-Blind- und Big-Blind-Leitfaden](/de/blog/holdem-blind-meaning).

---

## 6-Max vs Full Ring — und Turniere vs Cash

**6-Max staucht die Karte zusammen.** Mit drei entfernten frühen Sitzen steht der erste Spieler in 6-Max nur fünf Gegnern gegenüber — also ==**spielt 6-Max-UTG wie Full-Ring-Lojack und öffnet um die ~17%**== statt der ~13% von Full-Ring-UTG. Jeder andere Sitz verbreitert sich ähnlich, Steals kommen öfter, und 3-Bets sind insgesamt häufiger. Das häufigste Leck beim Formatwechsel ist, 9-max-Enge in 6-Max mitzuschleppen — du foldest dich vom Tisch.

**Turniere behalten dieselbe Mechanik mit anderen Einsätzen bei jeder Entscheidung.** In Cash Games verdichten sich positionelle Vorteile ruhig über Stunden und Rebuys machen Lecks aufholbar. In Turnieren ändern schrumpfende Stacks die Textur: unter ~15 Big Blinds kollabiert das Spiel Richtung Push/Fold, wo positionelle Nuancen weniger zählen, während bei 20–30 BB das Stehlen aus später Position zum Überlebensmotor wird — bis Bubble-ICM manche mathematisch feinen Steals zum Turnierselbstmord macht. Der komplette Vergleich steht im [Turnier-vs-Cash-Game-Leitfaden](/de/blog/holdem-tournament-vs-cash-game).

---

:::readnext[Weiterlesen]
/de/blog/holdem-positions | Poker-Sitznamen & Tischkarte | /images/holdem-positions-hero.webp
/de/blog/holdem-starting-hands-chart | Starthände-Chart nach Position | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Was bedeutet out of Position im Poker?**

A. Out of Position (OOP) bedeutet, dass du auf den Postflop-Streets — Flop, Turn und River — vor deinem Gegner handeln musst. Du setzt Chips ein, ohne zu wissen, was er tun wird, kannst keine Free Cards nehmen und tust dich schwer, die Potgröße zu kontrollieren. Die Blinds sind OOP gegen jeden anderen Sitz (zwischen den beiden handelt der Small Blind zuerst — also hat der Big Blind tatsächlich Position auf den Small Blind); der Button ist gegen niemanden je OOP.

**Q. Warum zählt Position im Poker so sehr?**

A. Weil zuletzt zu handeln dieselben Karten in mehr Geld verwandelt. Solver- und Datenbank-Studien legen nahe, dass In-Position-Spieler rund 85–100% ihrer theoretischen Equity realisieren, während Out-of-Position-Spieler nur etwa 60–85% mitnehmen — der In-Position-Spieler sieht jede Gegner-Entscheidung, bevor er seine eigene trifft, sodass er mit identischen Holdings zu besseren Momenten Value-bettet, blufft und foldet.

**Q. Was ist die profitabelste Position im Poker?**

A. Der Button. Es ist der einzige Sitz, der garantiert auf jeder Postflop-Street zuletzt handelt, weshalb Datenbank-Studien ihn durchweg als den größten Gewinner an jeder Tischgröße zeigen — er kann profitabel um die 43% der Hände öffnen, rund dreimal so viel wie UTG. Der Cutoff läuft auf Platz zwei, da nur der Button hinter ihm handelt.

**Q. Was ist die schwächste Position im Poker?**

A. Zwei Antworten, je nach Frage. Der Small Blind ist der strukturell schlechteste Sitz, um eine Hand zu spielen — als Erster dran auf jeder Postflop-Street. Der Big Blind verliert die meisten reinen Chips pro 100 Hände, einfach weil er jede Runde einen vollen Pflicht-Blind postet; selbst perfektes Spiel reduziert diesen Verlust nur. Unter den Nicht-Blind-Sitzen ist UTG am schwächsten: zuerst preflop, engste Range, meist OOP nach dem Flop.

**Q. Ist es besser, aus UTG zu limpen oder zu raisen?**

A. Raisen oder folden — nicht open-limpen. Eine Hand, die stark genug ist, um vom schlechtesten Preflop-Sitz gespielt zu werden, ist stark genug zum Raisen; Limpen lädt zu Multiway-Pots ein, die du out of Position spielst, cappt deine wahrgenommene Range und gewinnt die Blinds nie direkt. Die seltene Ausnahme ist, in passiven Live-Spielen hinter bestehenden Limpern mit kleinen Paaren und Suited Connectors zu limpen.

**Q. Wie weit sollte ich aus UTG vs vom Button öffnen?**

A. Aus UTG in einem Full-Ring-Spiel öffnest du grob die besten ~13% der Hände — starke Paare, AK/AQ und die besten suited Broadways. Vom Button sind rund ~43% profitabel, weil die garantierte letzte Aktion für schwächere Karten entschädigt. In 6-Max verbreitert sich UTG auf etwa ~17% und spielt wie ein Full-Ring-Lojack.

**Q. Wie beeinflusst Position die C-Bet-Frequenz?**

A. In Position (Button oder Cutoff) c-betten Solver rund 65–75% der Flops — du handelst auf jeder späteren Street zuletzt, sodass weites Betten inklusive Air sicher ist. Out of Position fällt das auf etwa 30–50%, weil ein Check-Raise deinen Bluff beenden kann und ein Call dich am Turn und River zuerst rätseln lässt. OOP dieselbe Frequenz wie IP zu c-betten ist eines der häufigsten und teuersten Lecks.

**Q. Sollte man aus dem Small Blind immer 3-betten?**

A. Wenn du in den Pot einsteigst, meistens ja — der moderne Standard aus dem SB ist 3-Bet oder Fold, kein Flat-Call. Flat-Callen erzeugt eine gecappte, out-of-Position-Range, die der Big Blind squeezen kann. 3-bette deine starken Hände plus Blocker-Bluffs wie A5s/A4s, size hoch auf etwa 4× den Open (vs. 3× in Position) und folde den Rest.

---

## Die wichtigsten Erkenntnisse

1. **Position = Equity-Realization.** ==g:In Position nimmst du laut Studien rund 85–100% deiner Equity mit==; ==r:out of Position nur etwa 60–85%.== Die Lücke kommt vom Zuletzt-Handeln, nicht von besseren Karten.
2. **Ranges gleiten mit der Position.** UTG öffnet ~13%, der Button ==g:~43%== — und jeder Sitz dazwischen bekommt eine Stufe auf der Leiter. ==r:Button-Hände aus UTG zu spielen blutet Chips.==
3. **Der Button ist der beste Sitz; die Blinds sind die schlechtesten.** Der BB verliert die meisten reinen Chips (Pflichteinsatz); der SB ist der schlechteste Sitz, um tatsächlich zu spielen (auf jeder Street zuerst dran). Beschütze deinen Button und 3-bet-or-folde deinen Small Blind.
4. **OOP ist nicht hoffnungslos — es ist diszipliniert.** Check-Raise als Equalizer, Sizing hoch beim Betten, Pots mit mittleren Händen kontrollieren und River öfter folden, als sich natürlich anfühlt.
5. **Raisen oder folden under the Gun.** Open-Limpen aus UTG kombiniert den schlechtesten Sitz mit der schwächsten Linie.
6. **6-Max staucht die Karte.** 6-Max-UTG spielt wie Full-Ring-Lojack (~17%) — kalibriere neu, wenn du die Formate wechselst.

Für jeden Sitznamen und die komplette Tischkarte siehe den [Leitfaden zu Poker-Sitznamen und Positionen](/de/blog/holdem-positions). Für welche exakten Hände jede Range füllen, nutze den [Starthände-Chart nach Position](/de/blog/holdem-starting-hands-chart). Und dafür, warum die "rabattierten" Sitze dich am meisten kosten, deckt der [Small-Blind- und Big-Blind-Leitfaden](/de/blog/holdem-blind-meaning) die Pflichteinsatz-Mathematik im Detail ab.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positionen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Sitznamen & Tischkarte</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">UTG, Lojack, Hijack, Cutoff, Button — jeder Sitz erklärt</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starthände</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthände-Chart nach Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Welche Hände du aus jedem Sitz spielst — druckbare Referenz</div>
  </a>
  <a href="/de/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Small-Blind- & Big-Blind-Strategie</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum die rabattierten Sitze am schwersten profitabel sind</div>
  </a>
  <a href="/de/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnier- vs Cash-Game-Strategie</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wie sich Positions-Entscheidungen ändern, wenn ICM greift</div>
  </a>
</div>
`.trim(),
};
