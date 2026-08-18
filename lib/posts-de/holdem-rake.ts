import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "Was ist der Rake beim Poker? Wie das Haus kassiert – und wie viel du wirklich zahlst",
  seoTitle: "Was ist der Rake beim Poker? Die stille Gebühr",
  desc: "Der Rake ist die Gebühr, die das Haus aus jedem Cashgame-Pot nimmt. So funktionieren Pot Rake, Time Charge und Turniergebühr – und was Rakeback zurückgibt.",
  tldr: "Der Rake ist der kleine Anteil, den der Cardroom aus jedem Pot nimmt, um das Spiel auszurichten – meist 2,5–10% bis zu einem Cap von ein paar Dollar. Die meisten Räume nehmen nichts, wenn vor dem Flop alle folden („no flop, no drop“). Er trifft Low-Stakes- und Short-handed-Spieler am härtesten, und Rakeback gibt Stammspielern einen Teil zurück.",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-08-18",
  masterUpdated: "2026-08-11",
  keepImagesInBody: true,
  readTime: "11 Min.",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "Ein Dealer zieht einen kleinen Chipstapel aus dem Pot in der Tischmitte in den Rake-Schlitz eines grünen Filztischs",
  tags: ["rake", "was ist rake beim poker", "poker rake erklärt", "rakeback", "poker rake cap", "time rake", "turnier rake", "wie funktioniert rake beim poker"],
  content: `
Es hat mich einen deprimierenden Monat voller „Break-even“-Sessions gekostet, um herauszufinden, wohin mein Geld eigentlich floss. Ich verlor nicht gegen die anderen Spieler – ich schlug sie, ganz knapp. Ich verlor gegen den ==Anteil des Hauses an jedem Pot, den ich gewann.== Diese stille Gebühr heißt **Rake**, und solange du sie nicht verstehst, kannst du auf dem Papier ein Gewinner und an der Kasse ein Verlierer sein.

Der Rake (die Gebühr) ist die Art, wie ein Cardroom an einem Spiel verdient, in dem er keine einzige Hand mitspielt. Unten steht genau, was er ist, jede Art wie er kassiert wird, die ehrliche Rechnung dazu, ==g:wie viel du pro Session wirklich zahlst==, und wie Rakeback einen Teil davon zurückholt. Es ist die Gebühr, die darüber entscheidet, ob Low-Stakes-Poker überhaupt schlagbar ist.

---

### Der Rake auf einen Blick

:::stripe
2,5–10% | Typische Pot-Rake-Spanne
$3–$6 | Übliches Live-Rake-Cap
No flop, no drop | Meist kein Rake, wenn alle preflop folden
20–40% | Typischer Rakeback-Deal
:::

---

## Was ist der Rake beim Poker?

> **Kurze Antwort**
> Der Rake ist die Provision, die ein Cardroom aus einem Cashgame nimmt, weil er es ausrichtet – üblicherweise 2,5–10% jedes Pots bis zu einem Cap von wenigen Dollar. Da Poker Spieler gegen Spieler gespielt wird und das Haus nie selbst setzt, ist der Rake seine eigentliche Einnahmequelle: eine Servicegebühr für Dealer, Tisch, Chips und Security.

Abgeschöpft wird er nach und nach, Pot für Pot – und genau deshalb merkt man ihn so selten.

In einem Cashgame wird er meist direkt aus dem Pot genommen: ein kleiner Prozentsatz des Geldes in der Mitte, in einen Schlitz im Tisch geworfen, bevor der Gewinner ausgezahlt wird. In einem Turnier läuft es anders – die Gebühr ist von vornherein in dein Buy-in eingebaut (mehr dazu unten). So oder so ist der Rake getrennt von allem, was du gegen andere Spieler gewinnst oder verlierst, und genau deshalb wird er so leicht übersehen. Das ist einer der größten praktischen Unterschiede zwischen einem [Cashgame und einem Turnier](/de/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## Wie wird der Rake genommen? Pot Rake, Time Charge & Dead Drop

> **Kurze Antwort**
> Beim **Pot Rake** zieht der Dealer einen Prozentsatz aus jedem Pot, bis zu einem Cap. Bei der **Time Charge** zahlt jeder Spieler stattdessen eine Pauschale pro halbe Stunde. Der **Dead Drop** nimmt einen festen Betrag vom Button, bevor die Karten kommen. Im Turnier steckt die Gebühr von vornherein im Buy-in. Und in Räumen mit Bad Beat Jackpot läuft ==zusätzlich== ein eigener Jackpot-Drop.

![Ein Dealer fegt ein paar Chips aus der Mitte des Pots in den Rake-Schlitz des Tisches, bevor er den Rest zum Gewinner schiebt](/images/holdem-rake-drop.webp "Pot Rake: ein kleiner Prozentsatz wird aus dem Pot abgeschöpft und gedroppt, bevor der Gewinner ausgezahlt wird")

Welcher Weg gilt, hängt von den Stakes und vom Raum ab, und die Unterschiede sind teuer – hier der Vergleich, den keine einzelne Konkurrenzseite so darlegt:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Art | Wie sie genommen wird | Typischer Betrag | Wo du sie siehst |
|:---|:---|:---:|:---|
| **Pot Rake (skaliert)** | % jedes Pots, bis zu einem Cap | 2,5–10%, gecappt $1–$6 | Die meisten Low-/Mid-Cashgames, online |
| **Time Charge** | Pauschalgebühr pro Spieler, alle 30 Min. | ~$10–$15 pro Stunde | High-Stakes live ($10/$20+) – und jedes Limit, in dem Pot-Rake nicht möglich ist |
| **Dead Drop** | Der Button zahlt jede Hand einen festen Rake | Fix pro Hand | Manche Live-Räume |
| **Turniergebühr** | Vorab aufs Buy-in aufgeschlagen | ~5–20% des Buy-ins | Jedes Turnier |
| **Jackpot Drop** | Fester Zusatzbetrag aus fast jedem Pot ab einer Mindestgröße | Meist $1 pro Hand | Räume mit [Bad Beat Jackpot](/de/blog/holdem-bad-beat) |

</div>

Ein paar Regeln bestimmen, wie der Pot Rake tatsächlich abgeschöpft wird:

- **No flop, no drop.** In den meisten Räumen nimmt das Haus **gar keinen Rake**, wenn die Hand vor dem Flop endet (der Jackpot-Drop läuft davon getrennt) – alle folden auf einen Preflop-Raise. (Nicht überall so: ein paar Seiten, allen voran GGPoker, raken manche Preflop-Pots, prüf also deinen Raum.)
- **Das Rake-Cap.** Das Haus nimmt auf einem riesigen Pot nie den vollen Prozentsatz – es stoppt bei einem Maximum, meist **$3–$6 live** und **$1–$3 online**. ==Steigen die Stakes, steigt auch das Cap – aber nicht proportional, sondern in groben Stufen==, sodass mehrere Stakes sich dasselbe Cap teilen. Zusätzlich schrumpft es oft, wenn weniger Spieler ausgeteilt bekommen (ein Heads-up-Pot ist vielleicht bei $1 gecappt).
- **Time Charge statt Pot Rake.** Bei höheren Stakes hören Räume oft auf, Pots zu raken, und kassieren stattdessen eine Pauschalgebühr – sagen wir $10–$15 pro Stunde pro Spieler, alle halbe Stunde genommen. Das ist ein **Fixkosten-Modell**: Wer viele Pots spielt, fährt damit besser; wer tight sitzt oder nur eine Stunde bleibt, zahlt relativ am meisten. Bei großen Pots ist die Ersparnis dagegen klein – gegen ein Cap von $3–$6 hat ein $2.000-Pot ohnehin nur ein paar Dollar abgegeben.
- **Dead Drop.** Eine seltenere Methode, bei der nur der Spieler am Button jede Hand einen festen Rake zahlt, kassiert bevor die Karten ausgeteilt werden – so konzipiert, dass Gewinner großer Pots nicht stärker besteuert werden als alle anderen.

---

## Wie viel Rake zahlst du wirklich?

> **Kurze Antwort**
> Deutlich mehr, als der Prozentsatz vermuten lässt – denn er fällt nicht einmal an, sondern auf fast jedem Pot, den du über Stunden gewinnst. Dazu kommt die ==Rake-Falle==: Weil das Cap nach unten kaum nachgibt, nimmt dieselbe Gebühr ganz unten in den Stakes den proportional größten Bissen. Zwei Beispielrechnungen – live und online – stehen gleich hier.

![Ein bescheidener Chip-Pot auf dem Filz, ein paar Dollar bereits als Rake beiseitegezogen, zeigt wie viel eine einzelne Hand still kostet](/images/holdem-rake-lowstakes.webp "In Low-Stakes-Games bewegt sich das Cap kaum, wenn die Pots wachsen, also werden kleine Pots proportional am härtesten gerakt")

Hier kommt der Teil, der geändert hat, wie ich über das Spiel denke. Der Prozentsatz klingt winzig – 5%, gecappt bei ein paar Dollar – aber du zahlst ihn auf fast jeden Pot, den du gewinnst, stundenlang.

**Ein Live-$1/$2-Game.** Bei 10% Rake gecappt bei $5 und rund 30 ausgeteilten Händen pro Stunde erreichen die meisten umkämpften Pots das Cap oder liegen nah dran. Ein einziger belebter Tisch kann **$100+ pro Stunde** in den Drop zahlen, über alle Spieler zusammen. Dieses Geld kommt direkt aus den gemeinsamen Gewinnen – es ist der Grund, warum ein Tisch voller etwa gleich starker Spieler langsam Chips ans Haus verliert.

**Die Low-Stakes-„Rake-Falle“.** Das ist die Pointe, die jeder Anfänger hören sollte. Weil das Cap kaum sinkt, wenn du in den Stakes runtergehst, nimmt der Rake proportional einen *größeren* Bissen, je *niedriger* du spielst. Ein durchgerechnetes Beispiel bei Online-NL50 (illustrativ, und es schwankt damit, wie viele Hände du spielst):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Gleicher Spieler, gleiches Game | Gezahlter Rake | Ergebnis |
|:---|:---:|:---|
| Raum mit **$2-Cap** | ~5 bb/100 | +8 bb/100 Winrate bleibt **Gewinner (+3)** |
| Raum mit **$4-Cap** | ~8–9 bb/100 | +8 bb/100 wird zum **Verlierer (−1)** |

</div>

Gleiches Können, gleicher Edge über das Feld – und allein der Rake ist der Unterschied zwischen Gewinnen und Verlieren. Deshalb sind ernsthafte Low-Stakes-Grinder besessen von der Rake-Struktur und deshalb müssen [Pot Odds](/de/blog/holdem-pot-odds) und Winrate immer *nachdem* das Haus seinen Anteil genommen hat gelesen werden.

---

## Was ist Rakeback?

> **Kurze Antwort**
> Rakeback ist ein Prozentsatz des Rakes, den du persönlich gezahlt hast, an dich zurückgegeben – meist über Punkte, Cashback oder ein Loyalty-Programm, wöchentlich oder monatlich ausgezahlt. Ein 30%-Deal bedeutet schlicht: Von jedem Dollar, den du rakest, kommen 30 Cent zurück. Übliche Spanne sind **20–40%**.

Die Räume tun das nicht aus Freundlichkeit – sie profitieren vom Volumen, das du erzeugst, und geben einen Teil zurück, um dich am Spielen zu halten.

Es gibt zwei Arten, wie es berechnet wird:

:::compare
Contributed | Dealt
Basierend auf dem Rake aus Pots, **in die du Geld gesteckt hast** – die moderne Standardmethode | Gleichmäßig aufgeteilt unter **allen, die in der Hand Karten bekommen haben**, ob sie beigetragen haben oder nicht – heute selten
:::

Für einen Gelegenheitsspieler ist Rakeback ein kleiner Bonus. Für einen High-Volume-Regular ist es enorm: Der Abstand zwischen einem 20%- und einem 40%-Deal skaliert mit dem Rake, den du tatsächlich erzeugst – er wird also nur dann zu echtem Geld, wenn du **hohes Volumen bei relevanten Stakes** spielst, und für viele Break-even-Grinder *ist* Rakeback ihr Profit. Es senkt effektiv deinen echten Rake, es lohnt sich also, das zu prüfen, bevor du dir aussuchst, wo du spielst. Sei dir nur bewusst, dass viele Rakeback-Tipps online affiliate-getrieben sind – behandle „Hier anmelden“-Seiten mit derselben Skepsis, die du jedem Verkaufspitch geben würdest.

---

## Haben Turniere einen Rake?

> **Kurze Antwort**
> Nicht die Pot-Variante – aber eine Gebühr zahlst du trotzdem, und sie versteckt sich in aller Öffentlichkeit. Beim Turnier ist sie vorab ins Buy-in eingebaut und wird mit einem „+“ ausgewiesen. Sie fällt genau einmal an, egal ob du als Erster bustest oder das Turnier gewinnst – anders als im Cashgame, wo du bei jedem Pot neu zahlst.

Ein Turnier-Buy-in ist also in zwei Teile gesplittet:

:::pull
Ein **$100 + $9**-Turnier bedeutet, dass $100 in den Preispool gehen und **$9 die Gebühr des Hauses sind.**
:::

Diese Gebühr – auch **Juice** oder **Vig** genannt – ist das Turnier-Äquivalent zum Rake und liegt meist bei **5–20% des Buy-ins**. Niedrigere Buy-ins tragen proportional höhere Gebühren (ein $3 + $0,30 Sit-and-Go ist 10%), und weil schnelle **Turbo-Formate deinen Edge zusammendrücken**, beißt die Gebühr dort am stärksten – je niedriger der Prozentsatz, desto mehr von deinem Können überlebt sie. Da die Struktur eines Turniers völlig anders ist als die eines Cashgames, ist auch die Art, wie du fürs Spielen zahlst, anders – eine Unterscheidung, die es sich lohnt zusammen mit den [Turnier-vs-Cashgame](/de/blog/holdem-tournament-vs-cash-game)-Grundlagen zu verstehen.

---

## Online- vs. Live-Rake: Welcher ist höher?

> **Kurze Antwort**
> Das kommt darauf an, was du misst. **Pro Hand** ist der Live-Rake höher: höherer Prozentsatz, höheres Cap. **Pro Stunde** kann der Online-Rake teurer sein, weil an mehreren Tischen ein Vielfaches an Händen läuft. Beide Antworten stimmen – sie beantworten nur verschiedene Fragen, und genau deshalb reden Live- und Onlinespieler hier ständig aneinander vorbei.

Es ist ein echter Trade-off:

- **Live-Rake** tendiert zu einem **höheren Prozentsatz (oft 10%) mit einem höheren Cap ($4–$6)** – aber du spielst nur ~30 Hände pro Stunde, also zahlst du ihn seltener.
- **Online-Rake** ist meist ein **niedrigerer Prozentsatz (3–5%) mit einem kleineren Cap ($1–$3)** – aber du siehst vielleicht 250+ Hände pro Stunde über mehrere Tische, sodass ein Volume-Grinder trotz des niedrigeren Satzes *mehr* Rake pro Stunde zahlen kann als ein Live-Spieler.

Die Lektion: Beurteile den Rake nie allein am Prozentsatz. Was zählt, ist der Prozentsatz **mal wie oft du ihn zahlst.** Ein „günstiges“ 5%-Online-Game, das du an vier Tischen spielst, kann dich mehr kosten als ein „teures“ 10%-Live-Game – was genau der Grund ist, warum Rakeback und Tischauswahl online mehr zählen.

---

:::readnext[Weiterlesen]
/de/blog/holdem-straddle | Was ist ein Straddle beim Poker? | /images/holdem-straddle-hero.webp
/de/blog/holdem-tournament-vs-cash-game | Turnier vs. Cashgame | /images/tournament-table-action.webp
:::

## FAQ

**Q. Warum nimmt der Cardroom überhaupt Rake?**

A. Weil er sonst nichts verdienen würde. Anders als beim Blackjack oder am Automaten spielt das Haus beim Poker nicht mit und hat keinen mathematischen Vorteil, aus dem es Gewinn zieht – es stellt nur Dealer, Tisch, Chips, Security und Raum. Der Rake ist die Bezahlung dafür. Genau deshalb ist er auch unabhängig davon, wie gut oder schlecht du spielst: Er fällt auf den Pot an, nicht auf dein Ergebnis.

**Q. Wer zahlt den Rake – nur der Gewinner der Hand?**

A. Das kommt auf die Methode an. Der Pot Rake wird aus dem Pot genommen, bevor er ausgezahlt wird, also bekommt der Gewinner sichtbar weniger – wirtschaftlich getragen haben ihn aber alle, die Geld in diesen Pot gelegt haben. Bei der Time Charge zahlt dagegen jeder Spieler am Tisch direkt und gleich viel, egal ob er eine Hand gewinnt. Und beim Dead Drop zahlt nur der Spieler am Button, dafür jede Hand.

**Q. Zahlst du Rake, wenn vor dem Flop alle folden?**

A. Meist nicht. Die meisten Räume folgen „no flop, no drop“ – wenn die Hand preflop endet, wird kein Rake genommen. Es ist aber nicht überall so: Ein paar Seiten (allen voran GGPoker) raken manche Preflop-Pots, es lohnt sich also, die Regel deines Raums zu bestätigen.

**Q. Wie viel Rake wird in einem Live-$1/$2-Game genommen?**

A. Üblicherweise 10% des Pots gecappt bei rund $5. Die meisten umkämpften Pots erreichen das Cap, sodass ein einziger belebter Tisch zusammen $100 oder mehr pro Stunde droppen kann. Diese Gebühr ist der Grund, warum ein Tisch gleich starker Spieler mit der Zeit langsam Chips ans Haus verliert.

**Q. Wie viel Rakeback ist ein guter Deal?**

A. Die übliche Spanne liegt bei 20–40%, und höher ist nicht automatisch besser. Entscheidend ist der Rake, der nach der Rückvergütung übrig bleibt: 40% zurück in einem Raum mit hohem Cap kann teurer sein als 20% zurück in einem Raum mit niedrigem Cap. Rechne deshalb immer den effektiven Rake, nicht die beworbene Prozentzahl. Und je weniger Hände du spielst, desto weniger macht der Deal überhaupt aus.

**Q. Was bedeutet das „+“ im Turnier-Buy-in?**

A. Es trennt den Preispool von der Gebühr des Hauses. Bei einem $100 + $9-Turnier gehen $100 in den Preispool, den die Spieler unter sich ausspielen, und $9 gehen ans Casino oder an den Room. Diese Gebühr – „Juice“ oder „Vig“ – liegt typischerweise bei 5–20% des Buy-ins und wird gezahlt, egal wie du abschneidest. Bei niedrigen Buy-ins ist der Anteil am größten.

**Q. Wie zahlst du weniger Rake?**

A. Ganz entkommen kannst du ihm in einem gerakten Spiel nicht, kleiner machen schon. Sichere dir den besten Rakeback-Deal, den du bekommst, und wähle Räume mit spielerfreundlichen Caps. Höhere Stakes senken den Rake ebenfalls, weil ein festes Cap dort ein kleinerer Anteil jedes Pots ist – diesen Schritt aber erst, wenn deine Bankroll die Schwankungen trägt *und* du gegen das härtere Feld noch einen Vorsprung hast, sonst nehmen dir die Gegner weit mehr ab als der Rake je könnte. Spiel lieber wenige große Pots als eine Flut kleiner gecappter, spiel online nicht ohne Grund sehr short-handed (derselbe Rake pro Pot verteilt sich dort auf weniger Spieler, dein Anteil pro Hand steigt also) und bevorzuge bei hohen Stakes Time-Charge-Games. **Live gilt das oft nicht** – viele Räume senken dort das Cap, und ein kurzes Spiel ist meist das weichste im Raum. Rechne Rake immer gegen Spielqualität, nie isoliert – all das drückt deinen effektiven Rake. Am billigsten ist rein von den Kosten her die private Pokerrunde: Da wird gar nichts aus dem Pot genommen.

**Q. Wie wirkt sich der Rake auf deine Winrate aus?**

A. Erheblich – am stärksten bei Low Stakes, wo das Cap nicht mit den Stakes runterskaliert. Short-handed kommt ein zweiter Effekt dazu, der nichts mit dem Cap zu tun hat: Derselbe Rake pro Pot verteilt sich auf weniger Spieler, und du zahlst die Blinds pro 100 Hände deutlich häufiger – dein Anteil je Hand steigt also. (Pro *Stunde* zahlst du zusätzlich mehr, weil mehr Hände laufen – das ist aber eine andere Frage als bb/100.) Der Rake kann so einen kleinen Gewinner in einen Verlierer verwandeln: Derselbe +8 bb/100-Spieler kann leicht negativ enden, nur weil er in einen Raum mit höherem Rake-Cap wechselt. Miss deine Winrate immer nach Rake.

**Q. Woran erkennst du, ob ein Raum einen fairen Rake hat?**

A. Vier Angaben genügen, und alle vier stehen in den Tischinformationen deines Raums: der Prozentsatz, das Cap, ob „no flop, no drop“ gilt und ob das Cap an kleineren Tischen sinkt. Ein niedriges Cap ist dabei wichtiger als ein niedriger Prozentsatz, weil die meisten umkämpften Pots das Cap ohnehin erreichen. Rechne die Rückvergütung erst danach dazu – ein guter Rakeback-Deal repariert eine schlechte Grundstruktur nicht.

---

## Die 3 Dinge zum Merken

1. **Der Rake ist der Anteil des Hauses fürs Ausrichten des Spiels** – meist 2,5–10% jedes Pots bis zu einem kleinen Cap, und er ist getrennt von dem, was du gegen Gegner gewinnst oder verlierst.
2. **Er trifft Low Stakes am härtesten.** Das Cap bewegt sich kaum, wenn du runtergehst, also zahlst du proportional den meisten Rake ganz unten – die „Rake-Falle“, die Micro-Stakes so schwer schlagbar macht.
3. **Rakeback und Struktur zählen.** 20–40% deines Rakes zurückzubekommen und Räume mit spielerfreundlichen Caps zu wählen kann dein langfristiges Ergebnis kippen – miss alles *nach* dem Rake.

Jetzt, wo du den Anteil des Hauses siehst, ergeben die Zahlen, die du überall sonst liest, mehr Sinn: deine [Pot Odds](/de/blog/holdem-pot-odds), deine Winrate und warum ein [Straddle](/de/blog/holdem-straddle), der den Pot aufbläht, auch still den Rake füttert. Poker ist schlagbar – aber erst, wenn du die anderen Spieler um *mehr* schlägst als das Haus nimmt.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnier vs. Cashgame</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum dich die beiden völlig unterschiedlich zur Kasse bitten</div>
  </a>
  <a href="/de/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was ist ein Straddle?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Der zusätzliche Blind, der den Pot aufbläht – und den Rake</div>
  </a>
  <a href="/de/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Mathe</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Pot Odds berechnen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Lies deinen Pot, nachdem das Haus seinen Anteil genommen hat</div>
  </a>
  <a href="/de/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie Pokerturniere funktionieren</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wohin die Buy-in-Gebühr wirklich geht</div>
  </a>
</div>
`.trim(),
};

export default POST;
