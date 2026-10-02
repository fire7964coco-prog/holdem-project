import type { Post } from "../posts";

/**
 * ★ de 고유 글(EN·KO 마스터 없음) — 2026-10-02 신설.
 * 사실 정본 = docs/tournament-factsheets/2026-12-ept-prague.md (열람일 10-02 · pokerstarslive 일정표 DOM 120행 + XML 피드 + /ept/buy-in/ 축어)
 * 🔴 훅 = «€1.100 statt €1.650» — €1.650은 2025 값(PokerNews). 남의 사이트를 «틀렸다»고 쓰지 말 것(공식 일정표 = €1.100).
 * 🔴 Mystery Bounty = Key Dates €3.200 ↔ 일정표·피드 €3.250 → 병기. 레벨 길이는 쓰지 않는다(제목↔피드 불일치).
 * 🔴 «4주 전 온라인 등록» 개시일은 공식에 없다 → «rund vier Wochen vorher»로만.
 * 🔴 훅이 죽는 날 = 12/4 21:20 PS Open 마지막 레지 · 12/9 11:50 EPT ME 레지 마감
 *    → 12/13 Final 뒤 결과 아카이브 전환(리드·Kurze Antwort·Fazit·FAQ 4곳 동시 · docs/update-calendar.md)
 */
export const POST: Post = {
  slug: "ept-prague-2026-guide",
  title: "EPT Prag 2026: Turnierplan, Buy-ins & Anreise",
  seoTitle: "EPT Prag 2026: €1.100 statt €1.650 – Turnierplan & Buy-in",
  desc: "EPT Prag 2026, 2.–13.12. im Hilton: PokerStars Open Main Event jetzt €1.100 statt €1.650, EPT Main Event €5.300, Online-Buy-in mit DE Stars Account, Anreise.",
  tldr: "Die EPT Prag 2026 läuft vom 2. bis 13. Dezember im Hilton Hotel Prague. Das PokerStars Open Main Event kostet in diesem Jahr €1.100 statt €1.650 wie 2025 und hat sechs Flights vom 2. bis 4. Dezember, das EPT Main Event kostet €5.300 und startet am 7. Dezember. Mit einem DE Stars Account kannst du dich ab rund vier Wochen vorher online einkaufen, vor Ort brauchst du 18 Jahre und einen Lichtbildausweis oder Reisepass.",
  category: "tournament",
  date: "2026-10-02",
  updated: "2026-10-02",
  readTime: "13 Min.",
  emoji: "🇨🇿",
  layout: "tournament-guide",
  tags: [
    "EPT Prag 2026",
    "EPT Prague 2026",
    "EPT Prag Turnierplan",
    "PokerStars Open Prag",
    "EPT Prag Buy-in",
    "Poker Prag Dezember",
    "Hilton Prag Poker",
    "EPT Main Event Prag",
  ],
  image: "/images/ept-prague-2026-guide-hero.webp",
  imageAlt: "Überblick EPT Prag 2026 – 2. bis 13. Dezember im Hilton Hotel Prag, PokerStars Open Main Event €1.100 statt €1.650 im Vorjahr, EPT Main Event €5.300 und Online-Buy-in mit DE Stars Account",
  keepImagesInBody: true,
  content: `
Wer gerade nach der EPT Prag 2026 sucht, stößt auf zwei Preise für dasselbe Turnier: ==**€1.650**== und ==**€1.100**==. Beide stimmen – nur nicht für dasselbe Jahr. €1.650 hat das PokerStars Open Main Event 2025 gekostet. Im offiziellen Turnierplan für 2026 steht ==**€1.100**==.

Die EPT Prag läuft vom ==**2. bis 13. Dezember 2026**== im Hilton Hotel Prague. PokerStars nennt den Stopp „seit fast zwei Jahrzehnten ein Highlight im Kalender“. Dieser Guide hält sich an den offiziellen Turnierplan und die Buy-in-Seite von PokerStars Live: welche Turniere wann laufen, wie die Flights funktionieren, wie du dich mit einem deutschen Stars Account vorab einkaufst und was du im Hilton brauchst.

Wenn du noch nie ein mehrtägiges Live-Turnier gespielt hast, lies vorher den [Turnier-Guide](/de/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") – Buy-in, Blinds, Re-Entry und Late Reg sind dort Schritt für Schritt erklärt.

---

> **Kurze Antwort**
> Die EPT Prag 2026 läuft ==**vom 2. bis 13. Dezember**== im ==**Hilton Hotel Prague**== (Pobřežní 311/1, Prag 8). Das ==**PokerStars Open Main Event kostet €1.100**== – 2025 waren es noch €1.650 – und hat sechs Flights vom 2. bis 4. Dezember. Das ==**EPT Main Event kostet €5.300**== und startet am 7. Dezember. Mit einem ==g:DE Stars Account== kannst du dich ab rund vier Wochen vorher online einkaufen und vor Ort direkt zum Ticket Collection Desk gehen. Mindestalter ==**18**==, Lichtbildausweis oder Reisepass mitbringen.

---

### Auf einen Blick

:::stripe
2.–13.12. | EPT Prag 2026 im Hilton Hotel Prague
€1.100 | PokerStars Open Main Event (2025: €1.650)
€5.300 | EPT Main Event, 7.–13.12.
18+ | Lichtbildausweis oder Reisepass
:::

## Wann und wo findet die EPT Prag 2026 statt?

Die EPT Prag 2026 findet vom ==**2. bis 13. Dezember 2026**== im ==**Hilton Hotel Prague**== statt, Pobřežní 311/1 im Stadtteil Prag 8. Das Festival beginnt am Mittwoch, 2. Dezember, mit den ersten Flights des PokerStars Open Main Events und endet am Sonntag, 13. Dezember, mit dem Final Table des EPT Main Events.

| Punkt | Was die offizielle Seite sagt |
|---|---|
| Termin | ==**2.–13.12.2026**== |
| Ort | Hilton Hotel Prague · Pobřežní 311/1 · 186 00 Prag 8 |
| Lizenzinhaber und Betreiber | King's Casino Prague |
| Mindestalter | ==**18**== |
| Ausweis | Lichtbildausweis oder Reisepass – ohne geht es nicht |
| Dresscode | Casual, Sportkleidung und Shorts nicht erlaubt |
| Konto | PSLive Account für jedes EPT-Turnier |

:::note[==r:Nicht verwechseln.== „King's“ steht hier nur als Betreiber im Kleingedruckten: Gespielt wird im **Hilton in Prag**, nicht im King's Resort in Rozvadov an der bayerischen Grenze. Wer „Kings Casino Prag“ in die Navigation tippt, sollte die Adresse Pobřežní 311/1 prüfen.]:::

Die EPT ist die Live-Tour von PokerStars. Das Festival in Prag läuft grob in zwei Hälften: zuerst das PokerStars Open mit den günstigeren Turnieren, dann ab dem 7. Dezember die EPT-Events. Wie Prag in den Turnierkalender für Spieler:innen aus Deutschland und Österreich passt, steht im Kapitel Tschechien unseres [Turnier-Guides](/de/blog/holdem-tournament).

## Was kostet das PokerStars Open Main Event – €1.100 oder €1.650?

Das PokerStars Open Main Event der EPT Prag 2026 kostet ==**€1.100**== (€1.000 + 100). So steht es in der Key-Dates-Übersicht, im Turnierplan und im Datenfeed von PokerStars Live. ==r:€1.650 war der Preis von 2025== – einige deutschsprachige Übersichten zeigen ihn noch.

| | PokerStars Open Main Event 2025 | PokerStars Open Main Event 2026 |
|---|---|---|
| Buy-in | €1.650 | ==g:**€1.100**== |
| Entries | 3.024 | noch offen |
| Preispool | €4.354.560 | noch offen |
| Sieger | Yulian Bogdanov (Bulgarien) – €398.135 (Deal) | – |

hochgepokert hat die Änderung im September so beschrieben: „Das zweitgrößte Turnier im EPT-Spielplan kostet diesmal €1.100 und liegt damit deutlich unter dem bisherigen Buy-in von €1.650.“ Beim PokerStars Open Malaga lag das Buy-in laut demselben Artikel schon bei €1.100.

**Was heißt das für dich?** 2025 haben 3.024 Entries €1.650 gezahlt. Für 2026 gibt es noch keine Zahl, aber ein um ein Drittel günstigeres Turnier mit sechs Flights zieht erfahrungsgemäß eher mehr Leute an als weniger. Ich plane bei solchen Preissenkungen immer mit einem größeren Feld und einer längeren Day-2-Bubble. Was du dort mit einem kurzen Stack machst, erklärt unser Artikel zur [Bubble im Turnierpoker](/de/blog/holdem-bubble).

## Welche Turniere laufen bei der EPT Prag 2026?

Die EPT Prag hat ==**sechs große Turniere**==: drei im PokerStars Open (€825 bis €2.200) und drei EPT-Events (€3.250 bis €10.300). Dazu kommen Satellites und Side Events – der komplette Turnierplan umfasst deutlich mehr Einträge.

![Key Dates der EPT Prag 2026 als Zeitleiste vom 2. bis 13. Dezember – PokerStars Open Main Event, Cup und High Roller in der ersten Hälfte, EPT Main Event, Mystery Bounty und High Roller in der zweiten](/images/ept-prague-2026-schedule.webp)

| Turnier | Termin | Buy-in |
|---|---|---|
| PokerStars Open Main Event | 2.–7.12. | ==**€1.100**== |
| PokerStars Cup | 5.–6.12. | €825 |
| PokerStars High Roller | 6.–8.12. | €2.200 |
| ==**EPT Main Event**== | ==**7.–13.12.**== | ==**€5.300**== |
| EPT Mystery Bounty | 9.–11.12. | €3.250 (laut Turnierplan; die Key-Dates-Übersicht nennt €3.200) |
| EPT High Roller | 11.–13.12. | €10.300 |

Beim Mystery Bounty setzt sich der Turnierplan-Preis aus €2.000 + 250 und ==**€1.000 Bounty**== zusammen. Ab Day 2 läuft dort eine Shot Clock. Das Mystery Bounty gab es mit demselben Buy-in auch im August bei der [EPT Barcelona](/de/blog/ept-barcelona-2026-guide).

**Welcher Einstieg passt zu dir?** Der €825-Cup ist das günstigste der sechs großen Turniere und dauert nur zwei Tage. Das €1.100-Main-Event ist die Mitte: sechs Flights, großes Feld, und wer durchkommt, spielt danach noch Day 2, Day 3 und den Final Day. Wer das EPT Main Event spielen will, aber €5.300 nicht direkt hinlegen möchte, schaut sich die Satellites weiter unten an.

## Wie funktionieren die Flights im PokerStars Open Main Event?

Das PokerStars Open Main Event hat ==**sechs Flights**== an drei Tagen, jeweils mit ==**30.000 Chips**==. Pro Flight darfst du dich ==**höchstens zweimal**== einkaufen („Single Re-Entry Per Flight“). Die Registrierung schließt mit dem letzten Flight am ==r:Freitag, 4. Dezember, um 21:20==.

| Datum | Start | Flight |
|---|---|---|
| Mi 2.12. | 12:00 | Day 1A |
| Mi 2.12. | 18:00 | Day 1B |
| Do 3.12. | 11:00 | Day 1C |
| Do 3.12. | 18:00 | Day 1D |
| Fr 4.12. | 11:00 | Day 1E |
| Fr 4.12. | 17:30 | ==r:Day 1F (letzter Flight)== |
| Sa 5.12. | 11:00 | ==**Day 2**== |
| So 6.12. | 12:00 | Day 3 |
| Mo 7.12. | 12:00 | ==**Final Day**== |

Laut Regeln beginnt Day 2 ==**auf dem niedrigsten Endlevel aller Day-1-Flights**==. Kein Flight startet Day 2 also mit höheren Blinds als dem Level, auf dem er geendet hat.

Aus Festivals mit vielen Flights kenne ich ein Muster: Die Abend-Flights am letzten Tag sind voll mit Leuten, die tagsüber ausgeschieden sind und „noch einen Schuss“ abgeben. In Prag kommt dazu, dass Day 1F am Freitagabend der letzte Einstieg vor dem Wochenende ist. Wenn du ruhiger spielen willst, nimm einen Mittags-Flight am Mittwoch oder Donnerstag.

## Wie läuft das EPT Main Event in Prag ab (€5.300)?

Das EPT Main Event kostet ==**€5.300**== (€5.000 + 300), hat ==**zwei Day 1**== – Montag, 7. Dezember, und Dienstag, 8. Dezember, jeweils um 12:00 – und startet mit ==**30.000 Chips**==. Du darfst dich über Day 1A, Day 1B und den Start von Day 2 ==**insgesamt höchstens zweimal**== einkaufen.

| Datum | Start | Tag |
|---|---|---|
| Mo 7.12. | 12:00 | Day 1A |
| Di 8.12. | 12:00 | Day 1B |
| Mi 9.12. | – | Day 2 (Registrierung schließt um 11:50) |
| Do 10.12. bis Sa 12.12. | – | Day 3 bis Day 5 |
| So 13.12. | 12:30 | ==**Final Table**== |

Drei Regeln aus dem Turnierplan, die du kennen solltest:

:::steps
Registrierung | Schließt „at the start of day two“ – am 9. Dezember um 11:50
Entries | Maximal zwei, „combined for flights A and B as well as day two“
Bezahlte Plätze | „Between 13% and 15% of the field will be paid“
:::

**Was die Zahlen bedeuten:** 2025 hatte das EPT Main Event in Prag ==**1.224 Entries**==. Bei 13 bis 15% kämen damit etwa 159 bis 184 Spieler:innen ins Geld. Das ist eine Rechnung mit dem Vorjahresfeld, keine Prognose für 2026.

Am Final Table entscheidet nicht nur der Stack, sondern auch die Auszahlungsstruktur – vor allem, wenn ein Deal auf dem Tisch liegt. Wie man das durchrechnet, steht in unserem Artikel zu [ICM und Deals](/de/blog/holdem-icm).

## Wie kaufst du dich mit dem DE Stars Account online ein?

Mit einem ==**DE Stars Account**== kannst du dich vorab im PokerStars-Client unter ==**Events › Live**== für die EPT Prag einkaufen. Laut PokerStars Live öffnet die Online-Registrierung ==**rund vier Wochen vor dem Event**== und läuft bis zum Ende der Late Reg des jeweiligen Turniers. Vor Ort gehst du dann ohne Umweg über die Registration Desks direkt zum ==g:Ticket Collection Desk==.

![Zwei Wege zum Buy-in bei der EPT Prag – online mit DE Stars Account im Client unter Events und Live ab rund vier Wochen vorher, oder vor Ort im Hilton mit Bargeld am Registration Desk bzw. mit Karte über die Casino-Kasse](/images/ept-prague-2026-buyin.webp)

PokerStars nennt dafür ausdrücklich „COM/EU/DE/UK/FR Stars Account holders“. Ein genaues Startdatum gibt es nicht – für ein Turnier am 2. Dezember heißt „rund vier Wochen“ Anfang November. Und es gibt einen Vorbehalt: ==r:„there are regional restrictions regarding online buy-ins“==. Wenn dein Konto die Option nicht zeigt, frag beim Registrations-Team nach.

| Zahlungsweg | Bei der EPT Prag |
|---|---|
| Bargeld | ✅ direkt an den Registration Desks |
| Chips | ✅ |
| COM/EU/DE/UK/FR Stars Account | ✅ online, ab rund vier Wochen vorher |
| Kredit- oder Debitkarte | ✅ aber nur über die Casino-Kasse (siehe unten) |
| Überweisung an das Casino | ✅ Abholung an der Casino-Kasse |
| Luxon Pay | ✅ |

==r:Karten nehmen die Registration Desks nicht.== Wer mit Karte zahlen will, kauft zuerst an der Casino-Kasse Chips und geht damit zum Cash-Registration-Desk. Außerdem gilt: ==**nur eine Zahlungsart pro Buy-in**==, und nach Turnierstart kannst du dich nicht mehr abmelden.

**Auszahlung:** Wer über den Stars Account einkauft, stimmt laut PokerStars einer möglichen Obergrenze für Barauszahlungen zu. Überweisungen können bis zu 21 Werktage dauern. Wenn du auf einen großen Cash hoffst, lohnt sich ein Blick in diese Bedingungen vor dem Buy-in, nicht danach.

Ein Tipp aus der Praxis: Am ersten Flight-Tag eines großen Festivals ist die Schlange an den Registration Desks immer die längste. Wer online eingekauft hat, holt nur noch das Ticket ab und sitzt pünktlich am Tisch.

## Satellites vor Ort: Wie kommst du günstiger ins Main Event?

Im Turnierplan stehen ==**Satellites für fünf der sechs großen Turniere**== – nur der Cup hat keins. Ins €1.100-Main-Event kommst du über ==g:€250-Satellites==, ins €5.300-EPT-Main-Event über Satellites für ==g:€600== oder €1.155. Laut Turnierplan geht es dabei um Sitze („Seat only“ bzw. „Win Your Seat“).

| Ziel | Satellite-Buy-in | Termine im Turnierplan |
|---|---|---|
| PokerStars Open Main Event (€1.100) | €250 | 2.12. (drei Mal) · 3.12. · 4.12. |
| EPT Main Event (€5.300) | ==g:€600== (Unlimited Re-Entry) | 4.12., 21:00 · 6.12., 17:00 · 7.12., 16:00 |
| EPT Main Event (€5.300) | €1.155 (Single Re-Entry) | 5.12., 21:00 · 6.12., 21:00 · 7.12., 11:00 · 7.12., 20:00 · 8.12., 11:00 |
| PokerStars High Roller (€2.200) | €500 | 6.12., 11:00 |
| EPT Mystery Bounty | €730 | 9.12., 12:00 |
| EPT High Roller (€10.300) | €1.125 | 10.12. (zwei Mal) · 11.12. |

Die letzte Chance aufs EPT Main Event ist das €1.155-Satellite am ==r:Dienstag, 8. Dezember, um 11:00== – parallel zu Day 1B. Die Registrierung fürs Main Event ist danach noch bis zum Start von Day 2 offen. Beim €600-Satellite mit Unlimited Re-Entry solltest du dir vorher ein Limit setzen: Ein Buy-in plus drei Re-Entries sind €2.400 – fast die Hälfte von €5.300.

## Was brauchst du im Hilton Prag? Ausweis, Alter, Dresscode

Ins Turnier kommst du ab ==**18 Jahren**== mit ==**Lichtbildausweis oder Reisepass**== – PokerStars schreibt: „Must bring photo ID or your passport to participate.“ Dazu brauchst du einen ==**PSLive Account**==. Wer noch keinen hat, kann sich laut PokerStars vor Ort registrieren.

| Was | Regel laut PokerStars Live |
|---|---|
| Alter | 18+ |
| Ausweis | Lichtbildausweis oder Reisepass mitbringen |
| Konto | PSLive Account, Anmeldung vor Ort möglich |
| Dresscode | Casual – „Sportswear/shorts are not allowed“ |

Casual heißt im Klartext: Jogginghose und Shorts bleiben im Koffer. Für lange Turniertage hat sich bei mir eine Schicht zum Drüberziehen bewährt – im Dezember sowieso.

## Anreise nach Prag aus Deutschland und Österreich

Aus Dresden, Berlin und München fahren ==**Direktzüge nach Prag**==. Die schnellste Verbindung braucht laut bahn.de ab Dresden ==**2 Stunden 5 Minuten**==, ab Berlin ==**3 Stunden 47 Minuten**== und ab München ==**5 Stunden 37 Minuten**==. Aus Wien fährt laut ÖBB alle zwei Stunden ein Railjet direkt nach Prag.

| Start | Schnellste Verbindung | Direktzüge pro Tag | Quelle |
|---|---|---|---|
| Dresden | 2 Std. 5 Min. | bis zu 7 | bahn.de |
| Berlin | 3 Std. 47 Min. | bis zu 9 | bahn.de |
| München | 5 Std. 37 Min. | bis zu 7 | bahn.de |
| Wien | – | Railjet alle zwei Stunden | oebb.at |

==r:Achte auf den Zielbahnhof.== Ein Teil der Direktzüge aus Berlin endet laut Fahrplan in ==**Praha-Holešovice**==, nicht am Hauptbahnhof Praha hl.n. Schau beim Buchen nach, wo dein Zug ankommt – und plane die letzte Strecke zum Hilton von dort aus.

**Mit dem Auto** brauchst du für die tschechischen Autobahnen eine ==**digitale Vignette**==. Es gibt keine Klebemarke: Laut edalnice.cz erkennen Polizei und Zoll über das Kfz-Kennzeichen, ob eine gültige Vignette vorliegt. Der offizielle Shop ist edalnice.cz.

| Vignette (Standardkraftstoff, Preisliste ab 1.1.2026) | Preis |
|---|---|
| 10 Tage | ==**300 CZK**== |
| 30 Tage | 480 CZK |
| Jahr | 2.570 CZK |

Wer nur fürs PokerStars Open Main Event fährt, kommt mit der 10-Tages-Vignette aus. Fürs ganze Festival vom 2. bis 13. Dezember reicht sie nicht ganz – dann nimm die 30-Tages-Vignette. Am Hilton kostet das Parken laut Hotel ==**880 CZK pro Tag**== oder 70 CZK pro Stunde.

**Mit dem Flugzeug** landest du am Václav-Havel-Flughafen (PRG), laut PokerStars rund 12 km vom Prager Zentrum entfernt. Zum Hauptbahnhof fährt der Airport Express (Ticket laut Prager Verkehrsbetrieben ==**200 CZK**==), alternativ bringt dich der Trolleybus 59 zur Metro A (Nádraží Veleslavín). Mit dem Auto sind es laut Hilton rund 30 Minuten vom Flughafen bis zum Hotel.

Ein Hinweis zu den Preisen: Bezahlt werden Vignette, Parken und Nahverkehr in Kronen, die Turniere aber in Euro. Rechne die Kronen-Beträge mit dem aktuellen Kurs um, statt mit einer Faustzahl.

## Wie lief die EPT Prag 2025?

Das EPT Main Event 2025 hatte ==**1.224 Entries**== und einen Preispool von ==**€5.936.400**==. Gewonnen hat der Israeli ==**Matan Krakow**== für ==**€778.255**== nach einem Deal unter den letzten drei, Zweiter wurde Bora Kurtulus aus der Türkei.

| | EPT Main Event 2025 | PokerStars Open Main Event 2025 |
|---|---|---|
| Buy-in | €5.300 | €1.650 |
| Entries | ==**1.224**== | ==**3.024**== |
| Preispool | €5.936.400 | €4.354.560 |
| Sieger | Matan Krakow (Israel) – €778.255 (Deal) | Yulian Bogdanov (Bulgarien) – €398.135 (Deal) |

Das PokerStars Open Main Event hatte 2025 also rund zweieinhalbmal so viele Entries wie das EPT Main Event. Mit dem niedrigeren Buy-in 2026 dürfte dieser Abstand eher wachsen. Wenn dir €5.300 zu viel sind, ist das €1.100-Turnier deshalb nicht die „kleine“ Wahl, sondern das größere Feld.

:::readnext[Weiterlesen]
/de/blog/holdem-tournament | Texas Hold'em Turnier-Guide | /images/holdem-tournament-hero.webp
/de/blog/ept-barcelona-2026-guide | EPT Barcelona 2026 | /images/ept-barcelona-2026-guide-hero.webp
:::

## FAQ – EPT Prag 2026

**Q. Ist King's Casino Prague im Hilton – oder in Rozvadov?**

A. Im Hilton. Die EPT Prag wird im ==**Hilton Hotel Prague**== gespielt, Pobřežní 311/1 in Prag 8, und King's Casino Prague ist laut PokerStars Lizenzinhaber und Betreiber des Events. Mit dem King's Resort in Rozvadov an der bayerischen Grenze hat der Spielort nichts zu tun.

**Q. Wann schließt die Registrierung für das EPT Main Event?**

A. Zu Beginn von Day 2, also am ==**Mittwoch, 9. Dezember 2026, um 11:50**==. Bis dahin kannst du über Day 1A, Day 1B oder per Late Reg einsteigen – insgesamt höchstens zweimal.

**Q. Kann ich am Registration Desk mit Karte bezahlen?**

A. Nein. Kredit- und Debitkarten nehmen die Registration Desks nicht. Du kaufst an der Casino-Kasse Chips und gehst damit zum Cash-Registration-Desk – oder du kaufst dich vorab online mit dem Stars Account ein.

**Q. Wie viele Spieler:innen kommen im EPT Main Event ins Geld?**

A. Laut Turnierplan ==**13 bis 15% des Feldes**==. Mit den 1.224 Entries von 2025 wären das etwa 159 bis 184 Plätze.

**Q. Wie hoch war der Preispool der EPT Prag 2025?**

A. Im EPT Main Event ==**€5.936.400**== bei 1.224 Entries, gewonnen von Matan Krakow für €778.255 (Deal). Das PokerStars Open Main Event kam bei €1.650 Buy-in auf 3.024 Entries und €4.354.560.

**Q. Brauche ich einen PSLive Account?**

A. Ja, für jedes EPT-Turnier. Wenn du noch keinen hast, kannst du dich laut PokerStars vor Ort anmelden. Für den Online-Buy-in vorab brauchst du zusätzlich einen Stars Account.

---

## Fazit – deine Checkliste bis Dezember

- ==**Preis prüfen**== → PokerStars Open Main Event 2026 = €1.100, nicht €1.650
- ==**Anfang November**== → im Client unter Events › Live schauen, ob der Online-Buy-in offen ist
- ==**Wenig Budget**== → €250-Satellite fürs Open Main Event oder €600-Satellite fürs EPT Main Event
- ==**Letzte Chancen**== → Day 1F am Fr 4.12., Start 17:30, Registrierung bis 21:20 (Open) · Registrierung EPT Main Event bis Mi 9.12., 11:50
- ==**Vor der Abfahrt**== → Lichtbildausweis oder Reisepass, PSLive Account, keine Sportkleidung

Wer im November noch ein Turnier näher an der Heimat spielen will, findet im [Guide zur CAPT Million in Baden](/de/blog/capt-million-baden-2026-guide) die Alternative in Österreich. Alle Serien im Dezember stehen im [Turnierkalender](/de/tournaments).

---

## Quellen

- **Termin, Ort, Key Dates, Alter, Ausweis, Dresscode, Betreiber** – [PokerStars Live · EPT Prague](https://www.pokerstarslive.com/de/ept/prague/) (offiziell; abgerufen am 2. Oktober 2026)
- **Turnierplan (Flights, Startzeiten, Registrierungsschluss, Re-Entry, Preisränge, Satellites)** – [PokerStars Live · EPT Prague Turnierplan](https://www.pokerstarslive.com/ept/prague/schedule/) (offiziell; abgerufen am 2. Oktober 2026)
- **Buy-in-Wege, Online-Registrierung, Kartenzahlung, Auszahlung** – [PokerStars Live · How to buy in](https://www.pokerstarslive.com/ept/buy-in/) (offiziell; abgerufen am 2. Oktober 2026)
- **Ergebnisse 2025** – [PokerNews · EPT Prague 2025, €5.300 Main Event](https://www.pokernews.com/tours/ept/2025-pokerstars-ept-prague/5300-main-event/) und [PokerNews · PokerStars Open 2025, €1.650 Main Event](https://www.pokernews.com/tours/ept/2025-pokerstars-ept-prague/1650-ps-open-main-event/)
- **Buy-in-Änderung €1.650 → €1.100** – [hochgepokert · 6. September 2026](https://www.hochgepokert.com/2026/09/06/ept-prag-pokerstars-open-kostet-nur-noch-e1-100/)
- **Anreise Bahn** – bahn.de Verbindungsseiten [Dresden–Prag](https://www.bahn.de/reisen/view/verbindung/dresden/prag.shtml), [Berlin–Prag](https://www.bahn.de/reisen/view/verbindung/berlin/prag.shtml), [München–Prag](https://www.bahn.de/reisen/view/verbindung/muenchen/prag.shtml) und [ÖBB · Zugverbindung Wien–Prag](https://www.oebb.at/de/reiseplanung-services/oebb-zugverbindungen/zugverbindungen-europa/prag) (abgerufen am 2. Oktober 2026)
- **Vignette** – [edalnice.cz](https://edalnice.cz/de/) und [Preisliste ab 1.1.2026](https://edalnice.cz/cenik/) (offiziell; abgerufen am 2. Oktober 2026)
- **Flughafen und Parken** – [Prague Airport · Into the city](https://www.prg.aero/en/how-can-i-travel-city-centre), [DPP · Journey from/to the airport](https://www.dpp.cz/en/travelling/tips/detail/1334_2628-journey-from-to-the-airport) und [Hilton Prague · Hotel location](https://www.hilton.com/en/hotels/prghitw-hilton-prague/hotel-location/) (abgerufen am 2. Oktober 2026)

※ Termine, Startzeiten und Buy-ins können sich ändern. Die letzte Bestätigung ist immer die [offizielle Seite der EPT Prag](https://www.pokerstarslive.com/de/ept/prague/).
`.trim(),
};

export default POST;
