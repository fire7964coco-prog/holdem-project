import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "Was ist ein Straddle beim Poker? Regeln, Typen – und ob du ihn spielen solltest",
  seoTitle: "Der Einsatz, der den Pot verdoppelt – Was ist ein Straddle?",
  desc: "Ein Straddle ist ein freiwilliger Blind, der den Einsatz verdoppelt, bevor Karten kommen. Regeln, alle Typen, wer zuerst handelt und ob sich Straddeln lohnt.",
  tldr: "Ein Straddle ist ein optionaler Blind-Einsatz – meist das Doppelte des Big Blinds – der gesetzt wird, bevor die Karten ausgeteilt werden. Er kauft dem Straddler die letzte Action preflop und die Option zu raisen, und verdoppelt so den Einsatz. In fast jedem Fall ist es ein -EV-Spielzug, erlaubt nur im Cashgame nach Hausregeln.",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-08-13",
  masterUpdated: "2026-08-11",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "Ein Spieler in Under-the-Gun-Position setzt vor dem Austeilen einen zusätzlichen Blind-Einsatz aus zwei Chips vor den Big Blind",
  tags: ["straddle", "was ist ein straddle poker", "straddle poker regeln", "mississippi straddle", "button straddle", "sleeper straddle", "lohnt sich straddeln", "utg straddle"],
  content: `
Als an meinem €1/€2-Tisch das erste Mal jemand gestraddelt hat, hatte ich keine Ahnung, warum der Typ under the gun €4 rauswarf, bevor die Karten kamen – und warum der Dealer die Action plötzlich einen Platz weiter eröffnete. Ich nannte es einen Monat lang „den Reiche-Leute-Einsatz“, bevor ich lernte, was er wirklich bewirkt: Ein Straddle ==verdoppelt den Einsatz und kauft einem Spieler das letzte Wort==, alles noch bevor irgendwer auf eine Karte geschaut hat.

Wenn du in einem Live-Spiel schon mal gesehen hast, wie aus dem Nichts ein zusätzlicher Blind auftaucht – das ist der Begriff, den du suchst. Hier steht genau, was ein **Straddle** ist, jeder Typ, dem du begegnen wirst, wer zuerst handelt, wenn einer gesetzt wird, und die ehrliche Antwort auf die einzige Frage, die zählt: ==g:Solltest du ihn wirklich spielen?==

---

### Straddle auf einen Blick

:::stripe
2× BB | Standard-Straddle-Größe
Zuletzt | Die Preflop-Action des Straddlers
Nur Cashgame | Fast nie in Turnieren erlaubt
-EV | Das Urteil für die meisten Spieler
:::

---

## Was ist ein Straddle beim Poker?

> **Kurze Antwort**
> Ein Straddle ist ein freiwilliger Blind-Einsatz – normalerweise das Doppelte des Big Blinds – der gesetzt wird, bevor die Karten ausgeteilt werden. In einem €1/€2-Spiel legt meist der UTG-Spieler €4 „auf den Straddle“, und der Tisch läuft für diese eine Hand wie ein €1/€2/€4-Spiel. Der Straddler kauft sich damit die Option zu raisen und das letzte Wort vor dem Flop.

Zwei Dinge machen ihn zu mehr als nur zusätzlichem Geld im Pot:

- Es ist ein **Live-Blind.** Genau wie der Big Blind hat der Straddler die **Option zu raisen** gekauft, selbst wenn alle nur callen – ein „dritter Blind“ mit dem Recht, darauf zu handeln.
- Er wird **blind** gesetzt. Du straddelst, *bevor* du deine Karten anschaust (in den meisten Rooms, bevor sie überhaupt ausgeteilt sind). Du committest Geld ohne jede Information, was der eigentliche Grund ist, warum es meist eine schlechte Idee ist – dazu unten mehr.

Ein Straddle ist kein Raise im üblichen Sinn – er ist ein Blind, der den Preis neu setzt. Wenn du verstehst, [was Small Blind und Big Blind sind](/de/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp"), ist ein Straddle einfach ein optionaler *dritter*, den ein Spieler freiwillig setzt, um den Einsatz aufzublähen und sich Position zu sichern.

---

## Wer handelt nach einem Straddle zuerst – und wer zuletzt?

> **Kurze Antwort**
> Ein Live-Straddle verschiebt die gesamte Preflop-Reihenfolge um einen Platz. Zuerst ist der Spieler ==links vom Straddler== dran, nicht mehr UTG. Danach geht es reihum, Small Blind und Big Blind entscheiden zum neuen, verdoppelten Preis, und der **Straddler kommt als Letzter** – mit der Option, zu checken oder zu erhöhen, falls vor ihm niemand erhöht hat.

![Infografik eines goldenen Dealer-Buttons und zweier verdeckter Hole Cards hinter einem K♦ 7♣ 2♠ Flop, wobei der Button postflop zuletzt handelt](/images/holdem-button-dealer-board.webp "Ein Live-UTG-Straddle macht den Platz links vom Big Blind zu einem dritten Blind – der Straddler handelt jetzt vor dem Flop zuletzt")

Das ist der Teil, den Definitionsseiten überspringen, und genau hier verlieren neue Spieler den Faden. Ein Straddle **ordnet die Preflop-Action-Reihenfolge neu.** Gehen wir ein Standard-€1/€2-Spiel durch, in dem UTG auf €4 straddelt:

:::steps
UTG setzt den Straddle | Der UTG-Spieler legt €4 raus (2× den €2 Big Blind), bevor die Karten ausgeteilt werden
Zuerst am Zug = links vom Straddler | Die Action beginnt jetzt beim Spieler links vom Straddler (UTG+1), nicht bei UTG – der Straddle wirkt wie ein neuer Big Blind
Rund um den Tisch | Jeder muss €4 callen (nicht €2), um mitzuspielen; er kann folden, callen oder ganz normal raisen
Die Blinds entscheiden | Small Blind und Big Blind handeln der Reihe nach, dem €4-Preis gegenüber
Der Straddler handelt ZULETZT | Wenn niemand geraist hat, kann der Straddler seine Option checken oder raisen – das letzte Wort vor dem Flop
:::

Diese „letzte Action preflop“ ist es, wofür der Straddler bezahlt. Aber merk dir den Haken: Bei einem **UTG-Straddle gilt das Recht auf die letzte Action nur preflop.** Sobald der Flop kommt, springt die Setzreihenfolge zurück auf normal – der Small Blind handelt zuerst, und der Straddler sitzt wieder auf einem frühen, out-of-position-Platz mit einem aufgeblähten Pot. Genau diese eine Tatsache ist der Grund, warum UTG-Straddeln so oft ein Verlustgeschäft ist: Du zahlst das Doppelte, um für eine Street zuletzt zu handeln, und spielst dann die nächsten drei Streets out of position.

---

## Welche Straddle-Typen gibt es? UTG, Mississippi, Button und Sleeper

> **Kurze Antwort**
> Es gibt vier gängige Typen, und sie unterscheiden sich nur darin, **wo** der Blind liegt. Der **UTG-Straddle** ist der Klassiker und positionell der schwächste. Der **Mississippi-Straddle** darf von jedem Platz kommen, der **Button-Straddle** ist der Sonderfall davon mit der besten Position. Der **Sleeper-Straddle** schläft, bis alles zu ihm durchfoldet, und kauft meist gar nichts.

![Ein Straddle-Einsatz neben dem Dealer-Button gesetzt, zeigt einen Button- oder Mississippi-Straddle, der für die Hand die letzte Position kauft](/images/holdem-straddle-button.webp "Ein Button- (Mississippi-) Straddle wird vom Button gesetzt – der einzige Straddle, der auch postflop die letzte Action kauft")

Nicht alle Straddles sind gleich – und die Unterschiede drehen sich alle darum, **wo die Action beginnt und wie lange du die letzte Position behältst.** Hier ist der Vergleich, den keine andere Seite an einem Ort auflistet:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Typ | Wer setzt ihn | Action startet | Zuletzt am Zug | Kauft die Option? |
|------|------|------|------|------|
| **UTG (Standard)** | Under the Gun | Links vom Straddler | Nur preflop | Ja |
| **Mississippi** | Jeder Platz (oft Button/CO) | Links vom Straddler | Preflop – postflop nur vom Button* | Ja |
| **Button** | Der Button | Small Blind | Pre + postflop | Ja |
| **Sleeper** | Ein Nicht-UTG-Platz | Normal (UTG) | Nur wenn alle bis zu ihm folden | Hausregelsache |
| **Re-Straddle** | Links von einem Straddler | Links vom Re-Straddler | Nur preflop | Ja |

</div>

*Die letzte Action nach dem Flop bekommt ein Mississippi-Straddle nur, wenn er ==auf dem Button== gesetzt wird. Nach dem Flop bestimmt allein der Button die Reihenfolge – ein Straddle vom Cutoff kauft dir das letzte Wort also nur vor dem Flop.

- **UTG-Straddle** – der Klassiker. Unter der Pistole gesetzt, letzte Action nur preflop. Der häufigste und positionell der schwächste.
- **Mississippi-Straddle** – kann von **jeder Position** gesetzt werden, am stärksten vom Button oder Cutoff. Die Action beginnt links vom Straddler, also kauft ein Button-Mississippi-Straddle die **letzte Action sowohl preflop als auch postflop** – der einzige Straddle mit einem echten positionellen Argument. Nicht überall erlaubt.
- **Button-Straddle** – ein Straddle im Mississippi-Stil speziell vom Button; der Button behält die letzte Action bis zum Ende. Der genaue Ablauf (wo der Small Blind hineinpasst) variiert je nach Room – kläre es mit dem Dealer.
- **Sleeper-Straddle** – ein Blind von einem Nicht-UTG-Platz, der „schlafend“ bleibt: Er ist **inaktiv, es sei denn, die Action foldet ganz bis zu ihm durch**. Wird er dadurch aktiv, wirkt er wie ein normaler Straddle; ob er dann auch die Option zu raisen mitbringt, ist Hausregelsache. Selten und online fast nie zu sehen.
- **Re-Straddle (Double Straddle)** – ein Spieler links kann *über* einen Straddle straddeln, mindestens für das Doppelte des vorherigen (€4 → €8 → €16). Ob es erlaubt ist und von welchen Plätzen, ist reine Hausregelsache.

⚠️ Jeder einzelne davon ist **hausregelabhängig.** Im Zweifel frag den Floor, bevor du Chips rauswirfst – die Mechanik unterscheidet sich wirklich von Room zu Room.

---

## Wie hoch ist ein Straddle?

> **Kurze Antwort**
> Der Standard ist **exakt 2× der Big Blind** – also €4 in einem €1/€2-Spiel und €10 in einem €2/€5-Spiel. So handhabt es nahezu jeder Cardroom. Abweichungen nach oben gibt es nur, wo die Hausregeln sie ausdrücklich erlauben: ungedeckelte Straddles bis zum ganzen Stack und Re-Straddles, die sich jeweils mindestens verdoppeln.

Manche No-Limit-Rooms erlauben mehr:

- **Ungedeckelter / All-in-Straddle** – ein paar Rooms lassen den Straddler jeden Betrag setzen, bis hin zum gesamten Stack, als Blind-Einsatz. Ein großer Blind-Straddle kann ein kleines Spiel für eine einzige Hand in ein sehr großes verwandeln.
- **Re-Straddle-Progression** – wo Re-Straddeln erlaubt ist, ist jeder mindestens das Doppelte des letzten: €4, dann €8, dann €16 und so weiter. Spiele, in denen der ganze Tisch straddelt und re-straddelt, können den effektiven Einsatz um ein Mehrfaches aufblähen.

Wenn du in einen gestraddelten Pot callst, denk daran, dass deine [Pot Odds](/de/blog/holdem-pot-odds) jetzt gegen einen größeren Blind gemessen werden – der Preis, jede Hand zu spielen, hat sich verdoppelt, was loses Callen leise bestraft.

---

## Ist Straddeln in Turnieren erlaubt?

> **Kurze Antwort**
> Fast nie. Straddeln ist eine Cashgame-Sache. Ein Turnier läuft auf einer festen Blind-Struktur, die an jedem Tisch gleich sein muss, damit alle unter denselben Bedingungen spielen – ein freiwilliger Zusatzblind würde das brechen. Deshalb ==verbietet die überwältigende Mehrheit der Turniere, live wie online, das Straddeln komplett==.

Selbst im Cashgame ist es optional und hausregelabhängig: Manche Rooms erlauben nur den UTG-Straddle, manche gestatten Mississippi- und Button-Straddles, manche deckeln die Größe, manche verbieten Re-Straddles. Online sind Straddles selten und, wo angeboten, meist auf einen einfachen UTG-Button-Schalter beschränkt. Der Unterschied zwischen einem Cashgame-Einsatz wie diesem und dem starren Turnierformat ist ein eigenes Thema – siehe [Turnier vs. Cashgame](/de/blog/holdem-tournament-vs-cash-game).

---

## Lohnt sich Straddeln? Solltest du straddeln?

![Ein großer, aufgeblähter Pot aus gemischten Chips in der Mitte des Filzes, der aufgeblähte Pot, den ein Straddle erzeugt, bevor jemand eine Karte gesehen hat](/images/holdem-straddle-bloated-pot.webp "Ein Straddle verdoppelt den Blind und bläht den Pot auf – Geld committet, bevor eine einzige Karte gesehen wurde")

> **Kurze Antwort**
> Für fast jeden: nein. Aus Sicht des Erwartungswerts ist Straddeln ein Verlustgeschäft – du committest Geld ohne Information, spielst einen aufgeblähten Pot und fütterst nebenbei den Rake. Vertretbar ist es an ==loose-passiven Tischen==, in Runden, in denen ohnehin alle straddeln, oder schlicht zum Spaß. Als Weg, Geld zu verdienen, funktioniert es nicht.

Die Solver sind sich hier ungewöhnlich einig, und die Analyse von GTO Wizard sagt es unverblümt. Drei Gründe:

:::card
🎯 | Du committest blind | Geld geht rein, bevor du deine Karten siehst, also spielst du einen aufgeblähten Pot ohne jede Information – genau der Nachteil, der die Blinds zu den schlechtesten Plätzen am Tisch macht
📉 | Er schrumpft deinen positionellen Vorteil | Den Blind zu verdoppeln bläht den Startpot auf und drückt zugleich alle Stacks – in Big Blinds gerechnet – zusammen. Wider Erwarten reagieren Solver, indem sie in gestraddelten Pots **weniger** Hände öffnen – rund 15–20% weniger am Button – nicht mehr
💸 | Er bläht den Rake auf | Größere Pots bedeuten mehr [Rake](/de/blog/holdem-rake), der aus ihnen abgeschöpft wird, eine versteckte Steuer auf jede gestraddelte Hand in einem gerakten Cashgame
:::

Wann *ist* es also vertretbar? Nur in bestimmten Spots, und nie als reiner Profit-Spielzug:

- **Ein loose-passiver Tisch**, an dem Gegner den größeren Blind mit Müll callen und nach dem Flop fit-or-fold spielen – das kannst du gelegentlich ausnutzen, idealerweise straddelst du aus später Position.
- **Ein Spiel, in dem ohnehin alle straddeln** – wenn der Straddle universell ist, verlierst du keine *relative* Position, indem du mitmachst (obwohl es dem ganzen Tisch besser ginge, es nicht zu tun).
- **Action- / Social-Games**, in denen du zum Spaß da bist, nicht für maximales EV – ein völlig legitimer Grund, sei nur ehrlich, dass es dich etwas kostet.

Was Straddeln *nicht* tut, ist ein „loses Image erzeugen“, das sich auszahlt – du zahlst einen echten, messbaren Preis für einen Image-Vorteil, der sich selten einstellt. Wenn dein Ziel Gewinnen ist, ist der Spielzug, der tatsächlich einen Vorteil aufbaut, [Position](/de/blog/holdem-position-play), nicht ein zusätzlicher Blind. Straddle zum Spaß, wenn du magst; straddle nicht, um Geld zu machen.

---

:::readnext[Weiterlesen]
/de/blog/holdem-blind-meaning | Was sind Blinds beim Poker? | /images/holdem-blind-meaning-hero.webp
/de/blog/holdem-position-play | Wie Position alles verändert | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. Warum straddeln Spieler überhaupt?**

A. Meist aus drei Gründen, und nur einer davon hat mit Strategie zu tun. Am häufigsten geht es um **Action**: Der Straddle verdoppelt den Einsatz und macht ein zähes Spiel für eine Hand lebendig. Zweitens um das **letzte Wort vor dem Flop**, das der Straddler sich kauft. Und drittens um Gruppendynamik – wenn am Tisch reihum gestraddelt wird, macht kaum jemand nicht mit. Der Preis dafür ist real: Du legst Geld hin, bevor du eine einzige Karte gesehen hast.

**Q. Muss ich einen Straddle callen, wenn ich mitspielen will?**

A. Ja. Sobald ein Live-Straddle steht, ist er der aktuelle Einsatz – wer die Hand spielen will, muss den vollen Straddle-Betrag callen, nicht den Big Blind. In einem €1/€2-Spiel mit €4-Straddle kostet dich der Einstieg also €4. Du kannst stattdessen jederzeit folden oder ganz normal raisen, aber der Preis für „einfach mal mitgehen“ hat sich verdoppelt. Genau das bestraft loses Callen an gestraddelten Tischen so still.

**Q. Ändert ein Straddle auch die Reihenfolge nach dem Flop?**

A. Nein. Ein Straddle verschiebt nur die Reihenfolge vor dem Flop. Sobald der Flop liegt, richtet sie sich wieder allein nach dem Button: Es beginnt der erste aktive Spieler links vom Button, und der Button handelt zuletzt. Die einzige Ausnahme ist deshalb gar keine echte – wenn der Straddle vom Button selbst kommt, hat dieser Spieler die letzte Action ohnehin, weil er der Button ist.

**Q. Gilt ein Straddle als Raise?**

A. Nein. Ein Straddle ist ein Blind-Einsatz, kein Raise – er setzt den Preis neu, den jeder callen muss, um in den Pot zu kommen, und er bewahrt dem Straddler die Option, später zu raisen. Ob er in Limit-Spielen auf das Raise-Cap zählt, ist Hausregelsache – frag vor Ort nach.

**Q. Was ist ein Mississippi-Straddle?**

A. Ein Mississippi-Straddle kann von jeder Position gesetzt werden, nicht nur von UTG – häufig vom Button oder Cutoff. Die Action beginnt dann links vom Straddler, also kauft ein Button-Mississippi-Straddle die letzte Action sowohl preflop als auch postflop, weshalb er der einzige Straddle mit einem echten positionellen Argument ist. Er ist nicht in jedem Room erlaubt.

**Q. Was ist ein Sleeper-Straddle?**

A. Ein Sleeper-Straddle ist ein Blind, der von einem Nicht-UTG-Platz gesetzt wird und inaktiv („schlafend“) bleibt, es sei denn, die Action foldet ganz bis zu ihm durch. In den meisten Rooms kauft er nicht die Option zu raisen und verleiht auch keine Position, wie ein lebender Straddle es tut. Er ist ungewöhnlich und wird online selten angeboten – kläre immer die Hausregel.

**Q. Gibt es Straddles auch im Onlinepoker?**

A. Selten, und wenn, dann stark eingeschränkt. Die meisten Onlineräume bieten gar keinen Straddle an; wo es ihn gibt, ist er meist auf einen einfachen UTG-Schalter reduziert, den du vor der Hand aktivierst. Mississippi- und Button-Straddles sind online praktisch nicht zu finden, weil sie am Livetisch vom Dealer verwaltet werden. Wenn dir das Konzept online begegnet, lies vorher die Regelseite des Anbieters – die Umsetzung unterscheidet sich stärker als live.

**Q. Aus welcher Position schadet ein Straddle am wenigsten?**

A. Vom **Button**, sofern der Room es erlaubt. Das ist der einzige Straddle, bei dem du für dein Geld tatsächlich etwas bekommst, das strategisch zählt: das letzte Wort vor *und* nach dem Flop. Am teuersten ist der klassische UTG-Straddle – du zahlst doppelt, handelst genau eine Setzrunde lang zuletzt und sitzt danach drei Streets lang out of position in einem aufgeblähten Pot. Zwischen diesen beiden Enden liegt alles andere.

---

## Die 3 Dinge, die du dir merken solltest

1. **Ein Straddle ist ein optionaler dritter Blind, meist 2× der Big Blind,** gesetzt vor den Karten – er verdoppelt den Einsatz und kauft die letzte Action preflop.
2. **Der Platz entscheidet über die Position, nicht der Name des Straddles.** Ein UTG-Straddle handelt nur vor dem Flop zuletzt. Auch nach dem Flop das letzte Wort hat ausschließlich ein Straddle ==vom Button== – denn nach dem Flop richtet sich die Reihenfolge immer nach dem Button. Alles ist hausregelabhängig.
3. **Für fast jeden ist er -EV.** Blind zu committen, den Pot out of position aufzublähen und den Rake zu füttern überwiegen den Spaß. Straddle für das Tisch-Image oder die Unterhaltung, nicht für den Profit.

Jetzt, wo du den zusätzlichen Blind kennst, zieh die Grundlagen an, die er verzerrt: [was die Blinds wirklich tun](/de/blog/holdem-blind-meaning), [warum Position Geld gewinnt](/de/blog/holdem-position-play) und [wie Setzaktionen und Raises funktionieren](/de/blog/holdem-betting-actions), sobald der Straddle den Preis neu setzt.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Regeln</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was sind Blinds beim Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Small Blind und Big Blind, auf denen ein Straddle aufbaut</div>
  </a>
  <a href="/de/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie Position alles verändert</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum die Position eines Straddles mehr zählt als seine Größe</div>
  </a>
  <a href="/de/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Regeln</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Setzaktionen: Check, Call, Raise</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wie sich der Preis nach einem Straddle neu setzt</div>
  </a>
  <a href="/de/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnier vs. Cashgame</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum Straddles eine reine Cashgame-Sache sind</div>
  </a>
</div>
`.trim(),
};

export default POST;
