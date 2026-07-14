import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Poker Positionen: Jeder Sitzname & Chart",
  seoTitle: "Position Poker erklärt — jeder Sitzname & Chart",
  desc: "Die Namen wandern mit dem Button, nicht mit den Stühlen. Jede Poker-Position — UTG, Hijack, Cutoff, Button — plus Sitznummern, 6-Max-Map und wer zuerst handelt.",
  tldr: "Poker-Positionen sind Sitznamen, gemessen vom Dealer-Button — UTG, Lojack, Hijack, Cutoff, Button und die Blinds — und sie wandern jede Hand einen Sitz im Uhrzeigersinn. Preflop handelt UTG zuerst und der Big Blind zuletzt; postflop handelt der Small Blind zuerst und der Button zuletzt. Physische Sitznummern bewegen sich nie; Positionen schon.",
  category: "strategy",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 Min.",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Draufsicht auf einen professionellen Pokertisch mit 9 Spielerpositionen, Chipstacks und einem goldenen Dealer-Button",
  tags: [
    "poker positionen",
    "poker positionsnamen",
    "poker sitznummern",
    "poker positionen chart",
    "hijack lojack poker",
    "position poker tisch",
    "wer ist zuerst dran poker",
  ],
  content: `
Mein erstes Live-Cashgame: Ich saß auf dem Platz, den ich später als UTG kennenlernen sollte. Ich schaute auf J♥ J♠ und raiste. Der Hijack callte. Der Cutoff callte. Der Button callte. Der Big Blind 3-bettete. Ich hatte keine Ahnung, was ich tun sollte — ich callte und blutete über drei Straßen Chips.

Zwei Orbits später saß ich auf dem Button mit demselben J♥ J♠. Ich raiste. Alle foldeten. Ich gewann $14, ohne je einen Flop zu sehen.

Dieselbe Hand. Völlig anderes Ergebnis. Das Einzige, was sich änderte, war mein Sitz — und in dieser Nacht wurde mir klar, dass ich gar nicht wusste, wie die Sitze *heißen*, geschweige denn, was sie bedeuten. Wenn du noch lernst, wie eine komplette Hand vom Geben bis zum Showdown abläuft, starte mit dem [Texas Hold'em Regeln-Leitfaden](/de/blog/texas-holdem-rules-for-beginners); dieser Artikel ist die Sitz-Map, die jener Leitfaden voraussetzt.

---

> **Kurze Antwort**
> Poker-Positionen sind die ==benannten Sitze, gemessen vom Dealer-Button== — UTG, Lojack, Hijack, Cutoff, Button, Small Blind, Big Blind — und sie ==wandern jede Hand einen Sitz im Uhrzeigersinn==, wenn der Button weiterrückt. Preflop handelt UTG zuerst und der Big Blind zuletzt. Postflop handelt der Small Blind zuerst und der Button zuletzt.

---

## Welche Positionen gibt es am Pokertisch? (Komplette Sitz-Map)

Eine Position ist kein Stuhl — sie ist ein **Name dafür, wo du relativ zum Dealer-Button sitzt**, und sie bestimmt, ==wann du auf jeder Straße handelst==. Weil der Button nach jeder Hand einen Sitz im Uhrzeigersinn weiterrückt, trägt jeder Spieler am Tisch in jeder einzelnen Hand einen anderen Namen.

Hier ist der komplette 9-Max-Positionen-Chart — jeder Sitzname, seine Abkürzung, seine Zone und genau, wann er vor und nach dem Flop handelt:

![Neunhändiger Pokertisch mit Chipstacks an jedem Sitz und dem Dealer-Button, mit einem D vor einem Spieler markiert](/images/holdem-button-position-hero.webp "Der Dealer-Button legt die Position jedes Sitzes und die Reihenfolge des Spiels fest")

| Sitz | Abk. | Zone | Preflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Early | 1. (erster) | 3. |
| Under the Gun +1 | **UTG+1** | Early | 2. | 4. |
| Under the Gun +2 | **UTG+2** | Early | 3. | 5. |
| Lojack | **LJ** | Middle | 4. | 6. |
| Hijack | **HJ** | Middle | 5. | 7. |
| Cutoff | **CO** | Late | 6. | 8. |
| Button | **BTN** | Late | 7. | **Zuletzt** |
| Small Blind | **SB** | Blind | 8. | **1.** |
| Big Blind | **BB** | Blind | 9. (zuletzt) | 2. |

Beachte den Umschwung: ==die Blinds handeln preflop zuletzt, aber postflop zuerst==, während der Button auf jeder Postflop-Straße zuletzt handelt. Diese Reihenfolge — nicht die Karten — ist es, was manche Sitze strukturell besser macht als andere.

> **Live-Tisch-Hinweis:** Der Button ist eine physische Scheibe, die jede Hand einen Sitz im Uhrzeigersinn weiterrückt. "UTG" ist derjenige, der in dem Moment drei Sitze links vom Button sitzt — kein fester Stuhl.

---

## Poker-Positionsnamen & Abkürzungen: UTG, LJ, HJ, CO, BTN, SB, BB

Jeder Positionsname, den du am Tisch hörst oder in einem Strategie-Artikel liest, entschlüsselt:

| Abk. | Voller Name | Gruppe | Worauf er sich bezieht |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Early (EP) | Handelt preflop zuerst, direkt links vom Big Blind |
| **UTG+1 / UTG+2** | Under the Gun plus one / two | Early (EP) | Die nächsten Sitze im Uhrzeigersinn von UTG |
| **LJ** | Lojack | Middle (MP) | Drei Sitze rechts vom Button |
| **HJ** | Hijack | Middle (MP) | Zwei Sitze rechts vom Button |
| **CO** | Cutoff | Late (LP) | Ein Sitz rechts vom Button |
| **BTN** | Button (Dealer) | Late (LP) | Der Sitz mit der Dealer-Scheibe — handelt postflop zuletzt |
| **SB** | Small Blind | Blinds | Erster Sitz links vom Button; setzt den kleinen Pflichteinsatz |
| **BB** | Big Blind | Blinds | Zweiter Sitz links vom Button; setzt den vollen Pflichteinsatz |

Du wirst auch die breiteren Zonen-Labels sehen: ==**EP** (Early Position)== deckt die UTG-Sitze ab, ==**MP** (Middle Position)== deckt Lojack und Hijack ab, und ==**LP** (Late Position)== deckt Cutoff und Button ab. Ältere Bücher werfen Lojack und Hijack in "MP1/MP2" zusammen — dieselben Sitze, andere Labels.

Die Namen zu kennen ist Schritt eins. Was du aus jedem von ihnen tatsächlich *tust* — Ranges, Steals, in Position versus out of Position — ist eine Strategiefrage, und die steht im [Positionsstrategie-Leitfaden](/de/blog/holdem-position-play).

---

## Poker-Sitznummern vs. Positionen — Sitz 1 ist keine Position

Das bringt fast jeden Live-Neuling durcheinander: Wenn der Floor **"Tisch 12, Sitz 5"** ausruft, hat diese Nummer ==nichts mit Poker-Positionen zu tun==.

In den meisten Card Rooms sind die physischen Sitze von der direkten Linken des Dealers durchnummeriert — ==Sitz 1 ist üblicherweise der erste Stuhl links vom Dealer==, im Uhrzeigersinn bis zu Sitz 9 oder 10 rechts vom Dealer. Diese Nummern sind an die Stühle geschraubt. Das Personal nutzt sie für die Logistik: neue Spieler platzieren, Chips bringen, die Zeit ausrufen.

Positionen sind das Gegenteil — sie ==rotieren jede einzelne Hand einen Sitz im Uhrzeigersinn== mit dem Button. Sitz 5 kann diese Hand der Button sein, die nächste der Cutoff und die Hand danach der Hijack.

:::compare
Sitznummern (physisch) | Positionen (Poker)
Am Stuhl fixiert — Sitz 1 ist meist direkt links vom Dealer | Wandern jede Hand mit dem Dealer-Button
Vom Personal genutzt: "Sitz 5, Chips kommen" | Von der Strategie genutzt: "der Cutoff opent"
Ändern sich während einer Session nie | Ändern sich jede einzelne Hand, einen Sitz im Uhrzeigersinn
Sagen dir, WO du sitzt | Sagen dir, WANN du handelst
:::

Also hat "was ist Sitz 1 beim Poker?" eine langweilige Antwort — es ist ein Stuhl — und genau das ist der Punkt. ==Eine Sitznummer ist eine Adresse; eine Position ist ein Job==, und der Job wird jede Hand neu vergeben.

---

## Was ist UTG beim Poker?

**UTG steht für "Under the Gun"** — der Sitz direkt links vom Big Blind und der ==erste Spieler, der preflop handelt==. Der Name beschwört den Druck der Situation herauf: Du musst Chips committen, bevor du siehst, was auch nur ein einziger Gegner tut, als würdest du unter vorgehaltener Waffe handeln.

In einem vollen 9-händigen Spiel gibt es tatsächlich drei "Under the Gun"-Sitze — **UTG, UTG+1 und UTG+2** — im Uhrzeigersinn vom Big Blind gezählt. Nur der erste handelt wirklich blind; die +1- und +2-Sitze sehen zumindest ein oder zwei Entscheidungen zuvor.

Das ist die Definition. *Wie man* UTG *spielt* — warum es die tightste Range am Tisch verlangt und warum Raise-or-Fold dort die Standardlinie ist — steht im [Positionsstrategie-Leitfaden](/de/blog/holdem-position-play).

---

## Der Hijack und der Lojack — und warum sie so heißen

**Der Hijack (HJ)** ist der Sitz zwei rechts vom Button. **Der Lojack (LJ)** ist einen weiter, drei rechts vom Button. Zusammen bilden sie die Middle Position in einem modernen 9-Max-Spiel.

Die Namen haben keinen dokumentierten offiziellen Ursprung — Poker-Slang selten — aber die gängig erzählte Geschichte geht so:

- **Hijack:** Cutoff und Button sind die klassischen Blind-Steal-Sitze. Wenn der Spieler einen Sitz früher zuerst raist, ==**"hijackt" er den Steal**==, den die späten Sitze machen wollten — also griff der Sitz selbst den Namen auf.
- **Lojack:** kam später, als ==spielerische Anspielung auf "Hijack"== — der Sitz eine Stufe "tiefer" in der Rangordnung. Die meisten Erzählungen hören darin auch ein Echo der Anti-Diebstahl-Marke LoJack: ein Hijack, eine Stufe darunter.

Behandle beide als Tischfolklore statt als Etymologie. Was keine Folklore ist: Hijack und Lojack sind echte, gängige Namen, die du in jedem modernen Range-Chart und auf jeder Trainingsseite siehst, weshalb es sich lohnt, sie im Schlaf zu kennen.

---

## Der Cutoff und der Button (Dealer-Position)

**Der Cutoff (CO)** ist der Sitz ==ein Platz rechts vom Button== — die letzte Position vor dem Dealer. Zwei Ursprungsgeschichten kursieren: Die eine sagt, der Sitz "schneidet" die Chance des Buttons ab, die Blinds zu stehlen, indem er zuerst raist; eine ältere sagt, dass in selbst gegebenen Homegames der Spieler rechts vom Dealer ==das Deck abhob== nach dem Mischen. So oder so, der Name blieb hängen, und der Cutoff wird durchweg als Late Position gezählt.

**Der Button (BTN)** — auch **Dealer-Position** genannt — ist der Sitz, der durch die physische Dealer-Scheibe markiert ist. In Casino-Spielen handhabt ein professioneller Dealer die Karten, also markiert der Button einfach, ==wer geben *würde*==, was die Setzreihenfolge verankert: Der Button handelt ==auf jeder Postflop-Straße zuletzt==, und alles andere am Tisch wird nach seinem Abstand zu dieser Scheibe benannt.

Diese garantierte letzte Aktion ist der Grund, warum der Button als der profitabelste Sitz beim Poker gilt — das vollständige Argument, mit den Zahlen dahinter, steht im [Positionsstrategie-Leitfaden](/de/blog/holdem-position-play).

---

## Die Blinds: SB- und BB-Sitze

Die beiden Sitze links vom Button sind Positionen *und* Pflichteinsätze zugleich:

- **Small Blind (SB):** der erste Sitz links vom Button. Setzt einen Pflichteinsatz — meist die Hälfte des Big Blinds — bevor die Karten gegeben werden.
- **Big Blind (BB):** der nächste Sitz im Uhrzeigersinn. Setzt den vollen Pflichteinsatz, der den Preis für den Einstieg in die Hand festlegt.

Als Positionen sind sie durch den Umschwung in der Handlungsreihenfolge definiert: Die Blinds handeln ==preflop zuletzt== (sie haben bereits gezahlt, also müssen alle anderen zuerst auf ihre Einsätze reagieren), aber ==postflop zuerst==, vor dem gesamten Tisch, auf Flop, Turn und River gleichermaßen.

Warum die Blinds existieren, wie viel sie pro Orbit kosten und wie man sie verteidigt, ist ein eigenes Thema — der [Small-Blind-und-Big-Blind-Leitfaden](/de/blog/holdem-blind-meaning) deckt die Mechanik der Pflichteinsätze und die Mathematik vollständig ab.

---

## Wer handelt beim Poker zuerst — Preflop vs. Postflop (Handeln die Blinds zuerst?)

Die meistgestellte Frage zu Positionen, in einer Tabelle beantwortet:

| Straße | Handelt zuerst | Handelt zuletzt |
|:---|:---|:---|
| **Preflop** | **UTG** — erster Sitz links vom Big Blind | **Big Blind** — darf checken oder raisen |
| **Flop / Turn / River** | **Small Blind** — oder der erste noch aktive Sitz links vom Button | **Button** — oder der nächste aktive Sitz davor |

Also — **handeln die Blinds zuerst?** ==Preflop nein. Postflop ja.== Vor dem Flop haben die Blinds bereits Geld eingezahlt, also startet die Aktion mit UTG und kommt zuletzt zu ihnen zurück — der Big Blind handelt von allen zuletzt. Nach dem Flop setzt sich die Reihenfolge im Uhrzeigersinn vom Button aus zurück: Der Small Blind spricht zuerst, der Big Blind als zweiter und der Button immer zuletzt.

Und zwischen den beiden Blinds: ==der Small Blind handelt auf jeder Straße vor dem Big Blind==, preflop und postflop gleichermaßen — mit einer Ausnahme, Heads-up, weiter unten behandelt.

Eine Nachbarfrage ist eine Zeile wert: Beim **Showdown** ist die Vorgabe, dass der letzte Spieler, der gesetzt oder geraist hat, zuerst aufdeckt (wird der River durchgecheckt, zeigt der erste aktive Sitz links vom Button) — die vollständige Etikette steht im [Showdown-Regeln-Leitfaden](/de/blog/holdem-showdown-rules). Für die komplette Straße-für-Straße-Abfolge einer Hand siehe [den Ablauf des Spiels](/de/blog/holdem-game-order).

---

## Poker-Positionen nach Spieleranzahl: Heads-up bis 10-händig (6-Max vs. Full Ring)

Die Positionsnamen ändern sich nicht mit der Tischgröße — ==sie fallen zuerst von der Early Position weg==, während Spieler entfernt werden. Button, Blinds, Cutoff und Hijack überleben am längsten; die UTG-Sitze existieren nur, wenn der Tisch voll ist. Hier die Map von 2 Spielern bis 10, in der Preflop-Handlungsreihenfolge aufgelistet:

| Spieler | Preflop-Handlungsreihenfolge (zuerst → zuletzt) |
|:---:|:---|
| **2 (Heads-up)** | BTN (setzt den Small Blind) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (hier der "UTG"-Sitz) → BTN → SB → BB |
| **5** | HJ (hier der "UTG"-Sitz) → CO → BTN → SB → BB |
| **6 (6-Max)** | UTG (auch LJ genannt) → HJ → CO → BTN → SB → BB |
| **9 (Full Ring)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**Heads-up ist das, was jedermanns Intuition bricht.** Mit nur zwei Spielern ==setzt der Button den Small Blind== — derselbe Sitz ist BTN und SB zugleich. Das bedeutet, der Button handelt ==preflop **zuerst**== (der Big Blind handelt zuletzt, wie immer), aber immer noch ==auf jeder Postflop-Straße **zuletzt**==, während der Big Blind postflop zuerst handelt. Jede andere Tischgröße folgt dem normalen Muster; einzig Heads-up verschmilzt den besten Sitz mit einem Blind.

**6-Max vs. Full Ring** ist reine Subtraktion: Die drei zusätzlichen Sitze (UTG+1, UTG+2 und ein Middle-Sitz) existieren nicht, also läuft 6-Max UTG → HJ → CO → BTN → SB → BB. Die praktische Konsequenz ist, dass ==jeder 6-Max-Sitz "später" spielt als sein Full-Ring-Namensvetter== — 6-Max-UTG hat fünf Gegner, nicht acht — weshalb sich die Ranges in Short-handed-Spielen auf ganzer Linie weiten. Die Sitz-für-Sitz-Zahlen stehen im [Positionsstrategie-Leitfaden](/de/blog/holdem-position-play), und die genauen Hände, die jede Range füllen, sind im [Starthände-Chart](/de/blog/holdem-starting-hands-chart) abgebildet.

> **Benennungs-Vorbehalt:** Manche Seiten und Card Rooms labeln den ersten 6-Max-Sitz als "LJ" oder "MP" statt UTG, und 10-händige Middle-Sitze erscheinen manchmal als "MP1/MP2". Labels variieren; die Handlungsreihenfolge nie.

---

:::readnext[Weiterlesen]
/de/blog/holdem-position-play | Positionsstrategie: In vs. Out of Position | /images/holdem-position-play-hero.webp
/de/blog/holdem-starting-hands-chart | Starthände-Chart nach Position | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Wofür steht UTG beim Poker?**

A. UTG steht für "Under the Gun" — der Sitz direkt links vom Big Blind und der erste Spieler, der preflop handelt. Der Name beschwört den Druck herauf, Chips zu committen, bevor man die Entscheidung eines Gegners sieht. In Full-Ring-Spielen heißen die nächsten beiden Sitze UTG+1 und UTG+2.

**Q. Was ist der Hijack beim Poker?**

A. Der Hijack (HJ) ist der Sitz zwei rechts vom Dealer-Button, direkt vor dem Cutoff. Er ist der spätere der beiden Middle-Position-Sitze in einem 9-Max-Spiel und der zweite Sitz, der in 6-Max preflop handelt. Die gängig erzählte Geschichte hinter dem Namen: Ein Raise von diesem Sitz "hijackt" den Blind-Steal, den Cutoff und Button hätten machen können.

**Q. Was ist der Lojack beim Poker?**

A. Der Lojack (LJ) ist der Sitz drei rechts vom Button — der frühere der beiden Middle-Position-Sitze in 9-Max. In 6-Max ist er der erste Sitz, der handelt, wo er meist einfach UTG genannt wird. Der Name wird allgemein als spielerische Anspielung auf "Hijack" erzählt (ein Sitz tiefer), oft mit der Anti-Diebstahl-Marke LoJack verknüpft — Tischfolklore statt dokumentierter Etymologie.

**Q. Wer geht zuerst, der Small Blind oder der Big Blind?**

A. Der Small Blind handelt auf jeder Straße vor dem Big Blind. Preflop handeln beide Blinds zuletzt (der Big Blind ganz zuletzt, mit der Option zu checken oder zu raisen); postflop ist der Small Blind der erste Sitz, der am Tisch handelt. Die eine Ausnahme ist Heads-up, wo der Button den Small Blind setzt und der Big Blind postflop zuerst handelt.

**Q. Wie viele Positionen gibt es beim 6-Max-Poker?**

A. Sechs: UTG (auch Lojack genannt), Hijack, Cutoff, Button, Small Blind und Big Blind. Verglichen mit einem 9-Max-Tisch existieren UTG+1, UTG+2 und ein Middle-Sitz schlicht nicht — die Namen werden zuerst von der Early Position entfernt, also spielt jeder verbleibende Sitz "später" als sein Full-Ring-Namensvetter.

**Q. Ändern sich Poker-Positionen jede Hand?**

A. Ja. Der Dealer-Button rückt nach jeder Hand einen Sitz im Uhrzeigersinn weiter, und da alle Positionen nach ihrem Abstand zum Button benannt sind, verschiebt sich die Position jedes Spielers pro Hand um einen Sitz. Über einen vollen Orbit hältst du jede Position am Tisch genau einmal.

**Q. Was ist Sitz 1 beim Poker?**

A. Sitz 1 ist ein physischer Stuhl, keine Position — in den meisten Card Rooms ist es der erste Sitz direkt links vom Dealer, mit Nummern, die im Uhrzeigersinn bis Sitz 9 oder 10 laufen. Das Personal nutzt Sitznummern zum Platzieren und für die Logistik. Poker-Positionen (UTG, Button, Blinds) rotieren unabhängig jede Hand, also kann Sitz 1 jede Position sein.

---

## Die wichtigsten Erkenntnisse

1. **Positionen sind Namen, keine Stühle.** Jeder Sitz wird nach seinem Abstand zum Dealer-Button benannt, und jeder Name wandert jede Hand einen Sitz im Uhrzeigersinn.
2. **Der Chart in einer Zeile:** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. Preflop startet bei UTG und endet beim Big Blind; postflop startet beim Small Blind und endet beim Button.
3. **Sitznummern ≠ Positionen.** Sitz 1 ist üblicherweise direkt links vom Dealer und bewegt sich nie; Positionen rotieren jede Hand. Das eine ist eine Adresse, das andere ein Job.
4. **Die Tischgröße subtrahiert von vorne.** 6-Max lässt die frühen Sitze fallen; Heads-up verschmilzt den Button mit dem Small Blind — zuerst dran preflop, zuletzt dran postflop.

Sobald die Namen in Fleisch und Blut übergegangen sind, kommt der echte Edge aus dem, was du mit ihnen anstellst — [wie man jede Position spielt](/de/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"), von Opening-Ranges bis zu in Position versus out of Position, ist die nächste Lektüre. Von dort aus bildet der [Starthände-Chart](/de/blog/holdem-starting-hands-chart) genaue Hände auf genaue Sitze ab, und der [Hand-Rankings-Leitfaden](/de/blog/holdem-hand-rankings) klärt, was beim Showdown tatsächlich gewinnt.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Anfänger-Leitfaden</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Regeln für Anfänger</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wie eine komplette Hand vom Geben bis zum Showdown abläuft</div>
  </a>
  <a href="/de/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positionsstrategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">In vs. Out of Position Strategie</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Opening-Ranges und was du aus jedem Sitz tust</div>
  </a>
  <a href="/de/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ablauf des Spiels</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ablauf des Spiels bei Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Preflop → Flop → Turn → River Handlungsabfolge</div>
  </a>
  <a href="/de/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Small Blind & Big Blind erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum es sie gibt und wie du sie richtig spielst</div>
  </a>
</div>
`.trim(),
};
