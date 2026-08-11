import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "Texas-Hold'em-Glossar: Jeder Poker-Begriff, den du am Tisch hörst",
  seoTitle: "Von den Nuts bis zum Fish – Poker-Begriffe erklärt",
  desc: "Alle Poker-Begriffe, die du am Tisch hörst, einfach erklärt und nach Situation gruppiert: Setzaktionen, Positionen, Hände, Slang und Turnier-Abkürzungen.",
  tldr: "Das ist ein Poker-Lexikon in einfachem Deutsch mit den Begriffen, die in einem Texas-Hold'em-Spiel wirklich vorkommen, gruppiert danach, wie du ihnen begegnest – Setzaktionen, Positionen, Hände und Board, Spielertypen, Geld, Tischsituationen und die Turnier- und Online-Abkürzungen. Beginn mit den 'am häufigsten verwechselten' Begriffen unten (Check vs. Call, Set vs. Trips, Cooler vs. Bad Beat), dann stöber nach Kategorie. Begriffe mit einem tieferen Guide verlinken direkt darauf.",
  category: "glossary",
  date: "2026-07-05",
  updated: "2026-08-11",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "Ein Texas-Hold'em-Tisch mit Chips, dem Dealer-Button und Gemeinschaftskarten auf grünem Filz – die Sprache des Pokers",
  tags: ["poker begriffe", "poker begriffe erklärt", "pokerbegriffe", "poker glossar", "poker lexikon", "poker abkürzungen", "texas holdem begriffe", "poker slang", "poker fachbegriffe", "was bedeutet das im poker"],
  content: `
Als ich das erste Mal in einem Live-Spiel saß, hätte der Tisch genauso gut eine andere Sprache sprechen können. Jemand saß „under the gun“, ein anderer hatte „den Cutoff drei-gebettet“, der Dealer fragte, ob ich „run it twice“ wollte, und als ich mit Kings verlor, hieß es, das sei „nicht mal ein Bad Beat, nur ein [Cooler](/de/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")“. Ich nickte, als hätte ich verstanden. Hatte ich nicht.

Poker hat sein eigenes Vokabular, und es zu kennen bringt zwei Dinge: Es verhindert, dass du wie ein [Fish](/de/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp") aussiehst, und es lässt dich der Strategie folgen, die dir Geld bringt. Dieses Lexikon sammelt die Pokerbegriffe, die an einem Texas-Hold'em-Tisch wirklich vorkommen – gruppiert danach, ==g:wie du ihnen tatsächlich begegnest==, nicht bloß als eine riesige A-bis-Z-Wand hingeworfen. Beginn mit den Begriffen, die am häufigsten verwechselt werden, dann stöber in der Kategorie, die du brauchst. Wo ein Begriff einen ganzen Guide hat, findest du einen Link direkt dorthin.

---

### Das Lexikon auf einen Blick

:::stripe
7 | Kategorien, gruppiert danach, wie du ihnen begegnest
110+ | Begriffe in einfachem Deutsch erklärt
8 | „Am häufigsten verwechselte“ Paare, zuerst geklärt
→ | Tiefere Guides von Schlüsselbegriffen verlinkt
:::

---

## Welche Poker-Begriffe werden am häufigsten verwechselt?

> **Kurze Antwort**
> Acht Paare stiften am Tisch die meiste Verwirrung: Check vs. Call, Blind vs. Ante, Set vs. Trips, Cooler vs. Bad Beat, Value Bet vs. Bluff, Pot Odds vs. Implied Odds, VPIP vs. PFR und die Zählweise der 3-Bet. Wer diese acht sauber trennt, versteht schon den größten Teil des Tischgesprächs – und spart sich die teuersten Anfängerfehler.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Diese werden verwechselt | Der Unterschied |
|:---|:---|
| **Check vs. Call** | Ein Check riskiert **keine Chips** (nur wenn keine Bet läuft); ein Call **gleicht** eine bestehende Bet aus. |
| **Blind vs. Ante** | Blinds sind **positionale** Pflichteinsätze (SB/BB); Antes werden von **allen** gezahlt, um den Pot zu füttern. |
| **Set vs. Trips** | Beide sind ein Drilling – ein **Set** nutzt ein Pocket Pair; **Trips** nutzt eine Hole Card + ein Paar auf dem Board. |
| **Cooler vs. Bad Beat** | Ein [Cooler](/de/blog/holdem-cooler) = du lagst hinten und konntest nicht folden; ein [Bad Beat](/de/blog/holdem-bad-beat) = du lagst vorn und wurdest outgedrawt. |
| **Value Bet vs. Bluff** | Eine Value Bet will einen **Call von einer schwächeren Hand**; ein Bluff will, dass **bessere Hände folden**. |
| **Pot Odds vs. Implied Odds** | [Pot Odds](/de/blog/holdem-pot-odds) zählen nur die Chips, die **jetzt im Pot** sind; Implied Odds addieren, was du **später gewinnst**. |
| **VPIP vs. PFR** | VPIP = wie oft du **spielst**; PFR = wie oft du **raist**. PFR kann VPIP nie übersteigen. |
| **Das Zählen der 3-Bet** | Die Blinds sind Bet 1, der Open-Raise ist Bet 2, also ist der **Re-Raise die 3-Bet** (nicht der erste Raise). |

</div>

---

![Eine visuelle Karte der Poker-Begriffskategorien in diesem Lexikon – Setzaktionen, Positionen, Hände, Spielertypen, Geld und Situationen](/images/holdem-glossary-categories.webp "Die Gruppen, in die dieses Lexikon geordnet ist – stöber nach der Situation, in der du bist, nicht bloß alphabetisch")

## Was bedeuten die Setzaktionen: Check, Bet, Call, Raise und Fold?

> **Kurze Antwort**
> Wie viele Optionen du hast, hängt davon ab, ob schon eine Bet läuft. Ist die Setzrunde noch offen, kannst du **checken** (nichts setzen) oder **betten**. Liegt bereits eine Bet, bleiben dir **callen**, **raisen** oder **folden**. Alles andere – 3-Bet, C-Bet, Check-Raise, Shove – sind nur Namen für bestimmte Kombinationen dieser fünf Grundaktionen.

Die genaue Reihenfolge, in der sie am Tisch fallen, steht in der [Reihenfolge der Setzaktionen](/de/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|:---|:---|
| **Check** | Die Aktion weitergeben, ohne zu setzen – nur möglich, wenn in dieser Runde noch keine Bet erfolgt ist. |
| **Bet** | Als Erster in einer Setzrunde Chips in den Pot legen. |
| **Call** | Die aktuelle Bet ausgleichen, um in der Hand zu bleiben. |
| **Raise** | Die aktuelle Bet erhöhen und andere zwingen, mehr mitzugehen oder zu folden. |
| **Fold** | Deine Hand und jeden Anspruch auf den Pot aufgeben. |
| **All-in** | Alle deine Chips einsetzen; du kannst nur den Teil des Pots gewinnen, den du gedeckt hast (siehe [Side Pot](/de/blog/holdem-all-in-rules)). |
| **Limp** | Preflop einsteigen, indem du nur den Big Blind callst statt zu raisen – meist ein schwaches, passives Spiel. |
| **Open (Open-Raise)** | Als erster Spieler mit einem Raise in den Pot einsteigen. |
| **3-Bet** | Der Re-Raise nach einem Open (die dritte Bet, wenn man die Blinds als erste zählt). |
| **4-Bet** | Ein Re-Raise auf eine 3-Bet. |
| **C-Bet** | Eine „Continuation Bet“ auf dem Flop vom Spieler, der preflop geraist hat. |
| **Donk Bet** | Aus der Position heraus in den Aggressor der vorherigen Street hineinsetzen (früher als Fehler gesehen, heute ein Tool mit geringer Frequenz). |
| **Value Bet** | Eine Bet mit einer starken Hand in der Hoffnung, von einer schwächeren gecallt zu werden. |
| **Bluff / Semi-Bluff** | Ein Bluff bettet eine schwache Hand, um bessere zum Folden zu bewegen; ein Semi-Bluff tut das mit einem Draw, der sich noch verbessern kann. |
| **Check-Raise** | Checken, dann raisen, nachdem ein Gegner bettet – eine starke, täuschende Linie (in modernen Cardrooms erlaubt). |
| **Min-Raise** | Der kleinste legale Raise. |
| **String Bet** | Ein illegaler, nicht angesagter Griff nach mehr Chips; wird als Call gewertet, nicht als Raise. |
| **Jam / Shove** | All-in gehen. |
| **Snap Call** | Ein sofortiger Call ohne jedes Zögern. |
| **Hero Call** | Mit einer schwachen Hand callen, weil du den Gegner als Bluffer gelesen hast. |

</div>

---

## Was bedeuten die Positionen am Tisch – von UTG bis Button?

> **Kurze Antwort**
> Die Position sagt, wann du an der Reihe bist. **UTG** sitzt links vom Big Blind und handelt vor dem Flop als Erster; der **Button** handelt nach dem Flop als Letzter und hat damit die stärkste Position überhaupt. Dazwischen liegen Lojack, Hijack und Cutoff. Je später du handelst, desto mehr Information hast du – und desto weiter darf deine Range werden.

Wie du diesen Vorteil wirklich in Chips umsetzt, zeigt das [Positionsspiel](/de/blog/holdem-position-play).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|:---|:---|
| **Button (BTN)** | Die Dealer-Position; handelt postflop **zuletzt** – der beste Platz am Tisch. |
| **Small Blind (SB)** | Pflichteinsatz links vom Button; handelt postflop zuerst (schlechtester Postflop-Platz). |
| **Big Blind (BB)** | Der größere der beiden Blinds; die Stakes werden nach den Blind-Größen benannt ($1/$2), und ein Big Blind ist die Standardeinheit zum Messen von Stacks. |
| **UTG (Under the Gun)** | Handelt preflop als Erster – braucht die engste Opening-Range. |
| **Cutoff (CO)** | Rechts vom Button; zweitbester Platz, super zum Blindstehlen. |
| **Hijack (HJ)** | Zwei Plätze rechts vom Button; der Beginn der späten Position. |
| **Lojack (LJ)** | Rechts vom Hijack; spät-mittlere Position (die Bezeichnungen verschieben sich mit der Tischgröße). |
| **Early / Middle / Late** | Gruppierungen danach, wie früh du handelst – Early = am engsten, Late = am weitesten und profitabelsten. |
| **In / Out of Position** | Du bist *in Position*, wenn du nach deinem Gegner handelst, *out of Position*, wenn du zuerst handelst. |

</div>

Die vollständige Sitzordnung findest du im [Guide zu den Tischpositionen](/de/blog/holdem-positions "thumb:/images/holdem-button-position-hero.webp").

---

## Was bedeuten Hole Cards, Board, Draw und „die Nuts“?

![Infografik eines goldenen Dealer-Buttons und zweier verdeckter Hole Cards mit einem K♦ 7♣ 2♠ Flop auf grünem Filz](/images/holdem-button-dealer-board.webp "Das Board und deine Hole Cards ergeben zusammen deine beste Fünf-Karten-Hand – das meiste Poker-Vokabular beschreibt genau, wie")

> **Kurze Antwort**
> Deine zwei verdeckten Karten heißen **Hole Cards**, die fünf offenen in der Mitte **Community Cards** oder **Board**. Aus diesen sieben Karten baust du die beste Fünf-Karten-Hand. Eine fertige Hand heißt **Made Hand**, eine, die sich erst noch verbessern muss, **Draw**. Und **die Nuts** ist die bestmögliche Hand, die es auf dem aktuellen Board überhaupt gibt.

Neu im Ablauf der Streets? Beginn mit der [Reihenfolge des Spiels](/de/blog/holdem-game-order).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|:---|:---|
| **Hole Cards** | Deine zwei privaten, verdeckten Karten. |
| **Community Cards** | Die fünf geteilten, offenen Karten, die jeder nutzt. |
| **Flop / Turn / River** | Die ersten drei geteilten Karten / die vierte / die fünfte und letzte. |
| **The Nuts** | Die bestmögliche Hand auf dem aktuellen Board (kann sich auf späteren Streets ändern). |
| **Kicker** | Eine Beikarte, die Gleichstände zwischen ansonsten gleichen Händen bricht (siehe [Tie-Breaker](/de/blog/holdem-tiebreak-rules)). |
| **Pocket Pair** | Zwei Hole Cards desselben Rangs. |
| **Overpair** | Ein Pocket Pair, das höher ist als jede Karte auf dem Board. |
| **Top Pair** | Die höchste Board-Karte mit einer Hole Card paaren. |
| **Set** | Ein Drilling aus einem **Pocket Pair** + einer Board-Karte (gut getarnt). |
| **Trips** | Ein Drilling aus **einer Hole Card** + einem Paar auf dem Board (schwächere Kicker-Kontrolle). |
| **Two Pair (Zwei Paare)** | Zwei verschiedene Paare. |
| **Made Hand** | Eine schon fertige Hand, im Gegensatz zu einem Draw. |
| **Draw** | Eine Hand, die sich verbessern muss – z. B. ein **Flushdraw** (4 zu einem Flush) oder ein Straßendraw. |
| **Gutshot** | Ein Inside-Straßendraw, der einen mittleren Rang braucht (4 [Outs](/de/blog/holdem-outs)). |
| **Open-Ender** | Ein beidseitig offener Straßendraw, an beiden Enden vervollständigbar (8 Outs). |
| **Backdoor** | Ein Draw, der **zwei** aufeinanderfolgende Karten braucht (Turn *und* River). |
| **Overcard** | Eine Karte, die höher ist als das Board. |
| **Suited Connectors** | Zwei aufeinanderfolgende Karten gleicher Farbe (z. B. 8♥9♥). |
| **Broadway** | Die 10-J-Q-K-A-Straße, die höchste Straße. |
| **The Wheel** | Die A-2-3-4-5-Straße, die **niedrigste** Straße (das Ass spielt tief). |
| **Cooler** | Eine große Hand, die ohne Fehlspiel gegen eine noch größere verliert – [ganzer Guide](/de/blog/holdem-cooler). |
| **Bad Beat** | Als großer Favorit gegen einen Glücksdraw verlieren – [ganzer Guide](/de/blog/holdem-bad-beat). |

</div>

Lernst du noch, was was schlägt? Der [Guide zu den Hand-Rankings](/de/blog/holdem-hand-rankings) hat die vollständige Reihenfolge.

---

## Was bedeuten Fish, Shark, Nit und Whale? Der Slang für Spielertypen

![Infografik einer Texas-Hold'em-Pub-Tischplatte von oben mit einem K♦ 7♣ 2♠ 9♥ 3♦ Board, Chips und einem Dealer-Button](/images/holdem-pub-players-table.webp "Jeder Tisch ist eine Mischung von Typen – den Slang zu lernen sagt dir, wen du angreifst und wen du meidest")

> **Kurze Antwort**
> Der Tisch-Zoo beschreibt Spielstile, keine Menschen. Ein **Fish** ist ein schwacher Freizeitspieler, ein **Shark** ein starker Gewinner, ein **Whale** ein zahlungskräftiger Fish an hohen Stakes und eine **Calling Station** jemand, der viel zu oft callt und fast nie raist. ==g:Ein Nit ist dagegen kein Fish== – er spielt extrem tight, verliert wenig und gewinnt wenig.

Die vollständige Aufschlüsselung findest du im [Fish-Guide](/de/blog/holdem-fish).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|:---|:---|
| **Fish** | Ein schwacher, verlierender Freizeitspieler – die Profitquelle des Tisches. |
| **Shark** | Ein starker, gewinnender Spieler, der schwächere ausnimmt. |
| **Whale** | Ein wohlhabender, schwacher Freizeitspieler an großen Stakes – ein „Fish mit tiefen Taschen“. |
| **Nit** | Ein extrem tighter Spieler, der nur Premium-Hände spielt. |
| **Donkey (Donk)** | Ein abwertender Begriff für einen schlechten, unerfahrenen Spieler. |
| **Calling Station** | Ein passiver Spieler, der viel zu oft callt und selten foldet oder raist. |
| **Reg** | Ein „Regular“ – ein gewohnheitsmäßiger, meist kompetenter Spieler an einem Stake. |
| **Grinder** | Ein Spieler, der durch stetiges Volumen und Disziplin Profit macht. |
| **LAG / TAG** | Loose-Aggressive / Tight-Aggressive – zwei gewinnende aggressive Stile. |
| **Maniac** | Ein hyperaggressiver Spieler, der wild raist und blufft. |
| **Mark** | Der schwache Spieler, dem der Tisch Geld abnehmen will. |

</div>

---

## Was bedeuten Blinds, Buy-in, Rake und Bankroll?

> **Kurze Antwort**
> Das sind die Geld-Begriffe. **Blinds** sind die Pflichteinsätze, die die Action starten und dem Spiel seinen Namen geben ($1/$2). Der **Buy-in** ist der Betrag, mit dem du einsteigst, der **Stack** das, was vor dir liegt, und die **Bankroll** dein gesamtes Pokergeld abseits des Tisches. Der **Rake** ist der Anteil, den das Haus aus jedem Pot nimmt.

Die große Gabelung dahinter ist [Cash Game vs. Turnier](/de/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|:---|:---|
| **Blinds** | Die erzwungenen SB/BB-Bets, die die Action starten – auch der Name für Stake-Level ([Blinds erklärt](/de/blog/holdem-blind-meaning)). |
| **Ante** | Ein kleiner Pflichteinsatz von allen, um den Pot zu füttern, getrennt von den Blinds. |
| **Pot** | Die gesamten Chips, um die gespielt wird. |
| **Side Pot** | Ein getrennter Pot, der entsteht, wenn ein Spieler all-in ist und andere weiterbetten. |
| **Stack** | Die Chips vor einem Spieler. |
| **Bankroll** | Das Geld, das insgesamt fürs Poker beiseitegelegt ist – nicht die Chips auf dem Tisch. |
| **Buy-in** | Der Betrag, der nötig ist, um in ein Spiel oder Turnier einzusteigen. |
| **Rake** | Der Anteil des Hauses an jedem Pot – [ganzer Guide](/de/blog/holdem-rake). |
| **Rakeback** | Eine Rückvergütung, die einen Teil des gezahlten Rakes zurückgibt. |
| **Straddle** | Ein optionaler Blind (meist 2× BB), der die letzte Preflop-Action kauft – [ganzer Guide](/de/blog/holdem-straddle). |
| **Cash Game** | Chips mit echtem Wert, jederzeit ein-/aussteigen, feste Blinds. |
| **Turnier** | Fester Buy-in, steigende Blinds, spielen bis du bustest oder gewinnst. |
| **Freezeout** | Ein Turnier ohne Rebuys – raus heißt raus. |
| **Bounty (Knockout)** | Ein Turnier, das für jeden Spieler, den du eliminierst, einen Preis zahlt. |
| **Sit & Go (SNG)** | Ein kleines Turnier, das startet, sobald es voll ist. |
| **MTT** | Ein Multi-Table-Turnier, das Tische zusammenlegt, wenn Spieler ausscheiden. |
| **ICM** | Das Independent Chip Model – rechnet Turnier-Chips nahe den Pay-Jumps in echtes Geld-Equity um. |
| **Bad Beat Jackpot** | Ein Promo-Preis, der ausgezahlt wird, wenn eine sehr starke Hand verliert – [wie es funktioniert](/de/blog/holdem-bad-beat). |

</div>

---

## Was bedeuten Showdown, Tilt, VPIP und die Etikette-Begriffe?

> **Kurze Antwort**
> Diese Wörter beschreiben, was gerade am Tisch passiert. Der **Showdown** deckt die Hände auf, **Muck** wirft sie verdeckt weg, ein **Chop** teilt den Pot. **Tilt** ist emotional getriebenes schlechtes Spiel, ein **Tell** ein verräterisches Signal. **VPIP** und **PFR** sind die beiden Stats, an denen du einen Gegner in Sekunden einordnest.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|:---|:---|
| **Showdown** | Die Hände nach der letzten Bet aufdecken, um den Gewinner zu ermitteln ([Showdown-Regeln](/de/blog/holdem-showdown-rules)). |
| **Muck** | Eine Hand verdeckt abwerfen. |
| **Chop / Split Pot** | Den Pot teilen, wenn Hände gleichstehen ([Split Pots](/de/blog/holdem-split-pot-rules)). |
| **Slow Roll** | Das Zeigen einer Gewinnerhand absichtlich verzögern, um zu verhöhnen – ein schwerer Etikette-Verstoß. |
| **Tilt** | Emotional getriebenes schlechtes Spiel, meist nach einem Verlust. |
| **Tell** | Ein körperliches oder verhaltensbezogenes Signal, das Infos über eine Hand verrät. |
| **Pot Odds** | Das Verhältnis des Pots zu den Kosten eines Calls – [wie man es berechnet](/de/blog/holdem-pot-odds). |
| **Implied Odds** | Pot Odds, angepasst um die Chips, die du auf späteren Streets zu gewinnen erwartest. |
| **Equity** | Dein prozentualer Anteil am Pot gerade jetzt ([Wahrscheinlichkeits-Guide](/de/blog/holdem-probability)). |
| **EV (Expected Value)** | Das durchschnittliche Langzeitergebnis einer Entscheidung; +EV gewinnt auf lange Sicht. |
| **VPIP** | Wie oft ein Spieler freiwillig preflop Geld in den Pot legt – der Loose/Tight-Wert. |
| **PFR** | Wie oft ein Spieler preflop raist – der Aggressionswert (nie höher als VPIP). |
| **GTO** | Game Theory Optimal – eine ausbalancierte, unausbeutbare Strategie aus Solvern. |
| **Range** | Die gesamte Menge an Händen, die ein Spieler in einem Spot halten kann; Profis denken in Ranges, nicht in einzelnen Händen. |
| **Cold Deck** | Ein Pechdeal, der einen Cooler erzeugt (ursprünglich das vorpräparierte Deck eines Betrügers). |
| **„Don't tap the glass“** | Kritisiere schwache Spieler nicht – du verschreckst die, an denen du verdienst. |
| **Run it twice** | All-in-Spieler teilen das restliche Board zweimal aus, jeweils für den halben Pot, um Varianz zu senken. |

</div>

---

## Was bedeuten ITM, GTD, PLO und die anderen Poker-Abkürzungen?

> **Kurze Antwort**
> Turnier- und Onlinepoker laufen fast vollständig auf Abkürzungen. **GTD** ist der garantierte Preispool, **ITM** heißt „in the money“ – du hast einen bezahlten Platz erreicht. **PLO** steht für Pot-Limit Omaha, **PKO** für ein Turnier mit wachsenden Kopfgeldern. Und **Overlay** bedeutet, dass der Room Geld zuschießt, weil die Buy-ins die Garantie nicht gedeckt haben.

Diese Kürzel stehen in jedem Turnierplan und in jeder Online-Lobby, werden aber praktisch nirgends erklärt. Hier sind die, die dir wirklich begegnen:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Abkürzung | Wofür sie steht | Was sie für dich bedeutet |
|:---|:---|:---|
| **GTD** | Guaranteed | Der garantierte Preispool. „100.000 € GTD“ wird ausgezahlt, egal wie viele Spieler tatsächlich antreten. |
| **Overlay** | – | Die Differenz, die der Room drauflegt, wenn die Buy-ins die Garantie nicht erreichen. ==g:Für dich geschenktes Geld== – ein Overlay-Turnier ist der seltene Fall, in dem der Preispool größer ist als das, was die Spieler eingezahlt haben. |
| **ITM** | In The Money | Du hast die bezahlten Plätze erreicht. Bezahlt werden meist die obersten 10–15% des Feldes. |
| **FT** | Final Table | Der letzte Tisch eines Turniers, meist die letzten 8–9 Spieler. |
| **Late Reg** | Late Registration | Anmeldung nach dem Start, üblicherweise bis zu einem festgelegten Level. |
| **Re-Entry** | – | Nach dem Bust erneut anmelden – ein komplett neuer Eintrag mit vollem Startstack. |
| **Rebuy** | – | Chips nachkaufen, ==während du noch sitzt== (meist nur bei oder unter Startstack, und nur in der Rebuy-Phase). |
| **Add-on** | – | Der einmalige Chip-Nachkauf am Ende der Rebuy-Phase – für alle, unabhängig von der Stackgröße. |
| **Freezeout** | – | Turnier ohne Rebuy und ohne Re-Entry. Raus heißt raus. |
| **KO / PKO** | (Progressive) Knockout | Kopfgeld auf jeden Spieler. Beim **PKO** wandert ein Teil jedes kassierten Kopfgelds auf deinen eigenen Kopf. |
| **PLO** | Pot Limit Omaha | Omaha mit vier Hole Cards, von denen du **genau zwei** benutzen musst; der maximale Einsatz ist die Potgröße. |
| **ATS** | Attempt To Steal | Ein Stat: wie oft ein Spieler aus Cutoff, Button oder Small Blind als Erster raist, um die Blinds zu stehlen. |
| **ROI** | Return On Investment | Deine Turnier-Rendite in Prozent: Nettogewinn geteilt durch die Summe aller Buy-ins. |
| **BB/100** | – | Die Cashgame-Winrate: gewonnene Big Blinds pro 100 gespielte Hände. |
| **Cap** | – | Zwei Bedeutungen, die oft verwechselt werden: die **Rake-Cap** (Obergrenze dessen, was das Haus aus einem Pot nimmt, siehe [Rake](/de/blog/holdem-rake "thumb:/images/holdem-rake-hero.webp")) und **Cap-Games**, in denen der Gesamteinsatz pro Hand gedeckelt ist. |
| **Freeroll** | – | Ein Turnier ohne Buy-in, aber mit echtem Preisgeld. (In der Strategie meint „Freeroll“ etwas anderes: eine Hand, die schlimmstenfalls splittet, aber nie verliert.) |

</div>

Wie viel dich das Spiel selbst kostet, steht im [Rake-Guide](/de/blog/holdem-rake); was ICM mit deinen Turnier-Chips macht, im [ICM-Guide](/de/blog/holdem-icm).

---

:::readnext[Weiterlesen]
/de/blog/holdem-cooler | Cooler vs. Bad Beat, erklärt | /images/holdem-cooler-hero.webp
/de/blog/holdem-fish | Was ist ein Fish im Poker? | /images/holdem-fish-hero.webp
:::

## FAQ

**Q. Was sind die häufigsten Poker-Begriffe, die jeder Anfänger kennen sollte?**

A. Die Grundlagen sind die Setzaktionen (Check, Bet, Call, Raise, Fold, All-in), die Streets (Flop, Turn, River), die Positionen (Button, Small Blind, Big Blind, UTG) und eine Handvoll Hand-Begriffe (the Nuts, Kicker, Set, Top Pair). Lern die „am häufigsten verwechselten“ Paare oben – besonders Check vs. Call und Set vs. Trips – und du folgst fast jedem Tischgespräch.

**Q. Was bedeutet UTG (Under the Gun) im Poker?**

A. UTG ist der Platz direkt links vom Big Blind, also handelt dieser Spieler vor dem Flop als Erster. Weil alle mit mehr Information nach ihm handeln, ist UTG die engste Position – du solltest von dort die wenigsten, stärksten Hände öffnen.

**Q. Was ist der Unterschied zwischen einem Check und einem Call?**

A. Ein Check gibt die Action weiter, ohne Chips einzusetzen, und ist nur erlaubt, wenn in dieser Runde noch niemand gebettet hat. Ein Call gleicht eine Bet aus, die jemand bereits gemacht hat. Checken ist gratis; Callen kostet dich den Betrag der aktuellen Bet. Die beiden zu verwechseln ist der mit Abstand häufigste Anfängerfehler.

**Q. Was ist der Unterschied zwischen einem Set und Trips?**

A. Beide sind ein Drilling und ranken gleich, aber sie entstehen unterschiedlich. Ein Set ist ein Pocket Pair, das eine passende Karte auf dem Board trifft (du hältst 7‑7, eine 7 kommt). Trips ist eine Hole Card, die zu einem Paar passt, das schon auf dem Board liegt (du hältst A‑7, und 7‑7 liegt auf dem Board). Ein Set ist besser getarnt und hat bessere Kicker-Kontrolle, gewinnt also meist mehr Geld.

**Q. Was ist der Unterschied zwischen einem Cooler und einem Bad Beat?**

A. Bei einem Bad Beat warst du der Favorit, als das Geld reinging, und wurdest von einer Glückskarte outgedrawt. Bei einem Cooler lagst du die ganze Zeit hinten mit einer Hand, die zu stark zum Folden war, und es brauchte keine Glückskarte – die größere Hand lag von Anfang an vorn. Schnelltest: Wenn dein Gegner sich *verbessern* musste, um zu gewinnen, ist es ein Bad Beat; wenn nicht, ist es ein Cooler.

**Q. Was ist eine 3-Bet im Poker, und warum ist der erste Raise nicht die „1-Bet“?**

A. Eine 3-Bet ist der erste Re-Raise vor dem Flop. Das Zählen bezieht die Blinds ein: Der Big Blind gilt als erste Bet, der Opening-Raise ist die zweite Bet („2-Bet“), also ist der nächste Raise die dritte – die 3-Bet. Ein Re-Raise darauf ist eine 4-Bet. Es verwirrt Anfänger, weil der „erste Raise“ in der Reihenfolge schon die zweite Bet ist.

**Q. Was bedeutet „the Nuts“ im Poker?**

A. The Nuts ist die bestmögliche Hand angesichts der Karten, die in diesem Moment auf dem Board liegen. Wenn du die Nuts hast, kann dich gerade jetzt kein anderes Blatt schlagen – auch wenn eine spätere Karte ändern kann, was die Nuts sind. Die „Second Nuts“ ist die zweitbeste mögliche Hand.

**Q. Was bedeuten VPIP und PFR in den Poker-Stats?**

A. VPIP (Voluntarily Put money In Pot) ist der Prozentsatz der Hände, die ein Spieler preflop zu spielen wählt – ein Maß dafür, wie loose oder tight er ist. PFR (Pre-Flop Raise) ist der Prozentsatz, den er preflop raist – ein Maß für Aggression. PFR kann nie höher sein als VPIP, und eine große Lücke zwischen beiden kennzeichnet einen passiven, call-lastigen Spieler.

**Q. Was ist der Unterschied zwischen Rebuy, Re-Entry und Add-on?**

A. Alle drei bringen dir Chips nach, aber zu verschiedenen Zeitpunkten. Ein Rebuy passiert, während du noch am Tisch sitzt – meist nur erlaubt, wenn dein Stack auf oder unter dem Startstack liegt. Ein Re-Entry setzt voraus, dass du bereits ausgeschieden bist: Du meldest dich als neuer Eintrag mit vollem Startstack noch einmal an. Das Add-on ist der einmalige Nachkauf am Ende der Rebuy-Phase, und den darf jeder nehmen, unabhängig davon, wie groß sein Stack gerade ist.

**Q. Was heißt „Cap“ beim Poker?**

A. Das kommt darauf an, wovon gerade die Rede ist. Die Rake-Cap ist die Obergrenze dessen, was das Haus aus einem einzelnen Pot nimmt – live oft ein paar Dollar. Ein Cap-Game deckelt stattdessen den Gesamteinsatz pro Hand, sodass du nie mehr als einen festgelegten Betrag verlieren kannst. Und eine „capped Range“ ist etwas ganz anderes: eine Range, in der die stärksten Hände fehlen, weil der Spieler sie früher geraist hätte.

---

## Wohin als Nächstes

Dieses Lexikon ist die Karte; das eigentliche Lernen steckt in den Guides, die es verlinkt. Ein paar gute Startpunkte:

- **Die absoluten Grundlagen:** [wie man Texas Hold'em spielt](/de/blog/texas-holdem-rules-for-beginners) und die [Reihenfolge der Setzaktionen](/de/blog/holdem-betting-actions).
- **Hände:** [was was schlägt](/de/blog/holdem-hand-rankings) und die [Tie-Breaker-Regeln](/de/blog/holdem-tiebreak-rules).
- **Die Mathematik:** [Pot Odds](/de/blog/holdem-pot-odds), [Outs](/de/blog/holdem-outs) und [Wahrscheinlichkeit](/de/blog/holdem-probability).
- **Der Slang, im Detail:** [Fish](/de/blog/holdem-fish), [Cooler](/de/blog/holdem-cooler), [Bad Beat](/de/blog/holdem-bad-beat), [Straddle](/de/blog/holdem-straddle) und [Rake](/de/blog/holdem-rake).
- **Die Turnier-Abkürzungen in der Praxis:** [ICM](/de/blog/holdem-icm), die [Bubble](/de/blog/holdem-bubble) und [Turnier vs. Cashgame](/de/blog/holdem-tournament-vs-cash-game).

Merk dir diese Seite und schau zurück, wann immer ein Wort dich stolpern lässt. Sprich die Sprache, und das Spiel fühlt sich nicht mehr an, als würde es dir passieren – sondern als etwas, das *du* dem Tisch antust.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was ist ein Fish?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Spielertypen, entschlüsselt</div>
  </a>
  <a href="/de/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cooler vs. Bad Beat</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die zwei Verluste, die alle verwechseln</div>
  </a>
  <a href="/de/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Regeln</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Setzaktionen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Check, Bet, Call, Raise, Fold</div>
  </a>
  <a href="/de/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand-Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was was schlägt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die vollständige Reihenfolge der Hände</div>
  </a>
</div>
`.trim(),
};

export default POST;
