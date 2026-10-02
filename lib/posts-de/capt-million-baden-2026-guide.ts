import type { Post } from "../posts";

/**
 * ★ de 고유 글(EN·KO 마스터 없음) — 2026-10-02 신설.
 * 사실 정본 = docs/tournament-factsheets/2026-11-capt-million-baden.md (열람일 10-02 · casinos.at 원문 r.jina.ai 추출)
 *            + GPM 비교 절 = docs/tournament-factsheets/2026-11-german-poker-masters-rozvadov.md (kings-resort.com 원문)
 * 🔴 Casino Baden = Baden bei Wien(AT). 스위스 Grand Casino Baden · 독일 Baden-Baden과 다른 집.
 * 🔴 메인 Day 1에 Early Bird·Gold Bonus를 붙이지 말 것(위성·사이드 상세에만 있다) · 온라인 예선 = 원문 미발견 → 쓰지 않는다.
 * 🔴 훅이 죽는 날 = 11/22 Salzburg 마지막 타 카지노 스타팅데이 · 11/27 20:00 마지막 Day 1(Turbo)
 *    → 11/30 Final Day 뒤 결과 아카이브 전환(리드·Kurze Antwort·Fazit·FAQ 4곳 동시 · docs/update-calendar.md)
 */
export const POST: Post = {
  slug: "capt-million-baden-2026-guide",
  title: "CAPT Million 2026 im Casino Baden: Turnierplan & Tickets",
  seoTitle: "CAPT Million 2026 im Casino Baden: €1 Mio. GTD für €550?",
  desc: "CAPT Million 2026 im Casino Baden bei Wien, 19.–30.11.: €500 + 50 Buy-in, €1.000.000 garantiert, 8 Day 1, Starttage in ganz Österreich, Tickets, Anreise.",
  tldr: "Die CAPT Million 2026 läuft vom 19. bis 30. November im Casino Baden bei Wien (Kaiser-Franz-Ring 1). Das Main Event kostet €500 + 50, ist mit €1.000.000 garantiert und hat in Baden acht Day 1 zwischen 20. und 27. November, dazu Starttage in ganz Österreich. Gespielt wird „Best Stack forward“: Wer mehrfach Day 2 erreicht, behält den größten Stack und bekommt für jede weitere Qualifikation €4.000 aus dem Preispool. Du brauchst 18 Jahre und einen amtlichen Lichtbildausweis im Original, der Eintritt ist frei.",
  category: "tournament",
  date: "2026-10-02",
  updated: "2026-10-02",
  readTime: "14 Min.",
  emoji: "🇦🇹",
  layout: "tournament-guide",
  tags: [
    "CAPT Million 2026",
    "CAPT Million Baden",
    "Casino Baden Poker",
    "Casino Baden Pokerturnier",
    "CAPT Million Starttage",
    "CAPT Million Turnierplan",
    "Casinos Austria Poker",
    "Pokerturnier Österreich",
  ],
  image: "/images/capt-million-baden-2026-guide-hero.webp",
  imageAlt: "Überblick CAPT Million 2026 – 19. bis 30. November im Casino Baden bei Wien, Main Event €500 + 50 mit €1.000.000 Garantie, acht Day 1 in Baden und Starttage in ganz Österreich",
  keepImagesInBody: true,
  content: `
2025 haben ==**2.937 Buy-ins**== die Garantie der CAPT Million um ==**€468.500**== übertroffen – bei einem Main Event, das ==**€500 + 50**== kostet. Am Ende standen €1.468.500 im Preispool, und 254 Spieler:innen erreichten Day 2.

Die dritte Ausgabe läuft vom ==**19. bis 30. November 2026**== im Casino Baden bei Wien. Casinos Austria nennt sie selbst „das größte Pokerturnier Österreichs“. Dieser Guide sammelt nur, was auf den offiziellen Seiten und im Turnierplan-PDF steht: welche Day 1 es gibt, wie „Best Stack forward“ funktioniert, wo du günstiger reinkommst und was du am Eingang brauchst.

Wenn du noch nie ein mehrtägiges Live-Turnier gespielt hast, lies vorher den [Turnier-Guide](/de/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") – Buy-in, Blinds, Re-Entry und Late Reg sind dort Schritt für Schritt erklärt.

---

> **Kurze Antwort**
> Die CAPT Million 2026 läuft ==**vom 19. bis 30. November**== im ==**Casino Baden bei Wien**==. Das Main Event kostet ==**€500 + 50**== und ist mit ==**€1.000.000 garantiert**==. In Baden gibt es ==**acht Day 1**== zwischen 20. und 27. November, dazu Starttage in ganz Österreich – die nächsten ab 3. Oktober. Wer mehrfach Day 2 erreicht, spielt nur den größten Stack weiter und bekommt ==g:€4.000 pro zusätzlicher Qualifikation==. Günstiger kommst du über Satellites rein – ==g:ab €25 + 5== (Linz), in Baden ab €50 + 10. Mindestalter ==**18**==, Ausweis im Original, Eintritt frei.

---

### Auf einen Blick

:::stripe
19.–30.11. | CAPT Million 2026 im Casino Baden bei Wien
€500 + 50 | Buy-in Main Event (1 Re-Entry pro Day 1)
€1.000.000 | garantierter Preispool
8 | Day 1 in Baden, letzter am 27.11. um 20:00
:::

## Wann und wo findet die CAPT Million 2026 statt?

Die CAPT Million 2026 findet vom ==**19. bis 30. November 2026**== im ==**Casino Baden, Kaiser-Franz-Ring 1, 2500 Baden**== statt – rund 26 km südlich von Wien. Offizieller Start ist am 19. November mit dem CAPT Million Mega Satellite, der Final Day ist ==**Montag, 30. November, ab 16:00**==.

| Punkt | Was die offizielle Seite sagt |
|---|---|
| Termin | ==**19.–30.11.2026**== |
| Ort | Casino Baden · Kaiser-Franz-Ring 1 · 2500 Baden (Niederösterreich) |
| Main Event | ==**€500 + 50**== · 100.000 Chips · 1 Re-Entry pro Day 1 |
| Garantie | ==**€1.000.000**== |
| Min Cash | €1.500 (inklusive €500 Travelmoney) · „Ca. 10% ITM“ |
| Ausgabe | die dritte – 2024 war die erste, 2025 die zweite |
| Veranstalter | Casinos Austria · Poker Manager Daniel Schwarz |

:::note[==r:Nicht verwechseln.== Gemeint ist Baden in Niederösterreich. Das **Grand Casino Baden in der Schweiz** ist ein anderes Haus, und das **Casino Baden-Baden** liegt in Deutschland. Wenn du nach „Casino Baden Poker“ suchst, landen alle drei in denselben Ergebnissen – prüf vor der Buchung die Adresse.]:::

Die CAPT ist die Tour der Casinos Austria, und die Million in Baden ist ihr größtes Turnier. Wie sie sich gegen die anderen Stationen und die Serien in Rozvadov schlägt, steht im Abschnitt Österreich unseres [Turnier-Guides](/de/blog/holdem-tournament).

## Welche Day 1 gibt es im Casino Baden?

Im Casino Baden laufen ==**acht Day 1**== des Main Events: vom 20. bis 27. November, mit Levelzeiten zwischen 15 und 60 Minuten. Jeder Day 1 kostet €500 + 50, startet mit 100.000 Chips und erlaubt ==**1 Re-Entry**==. Die Late Reg endet in Baden mit ==**Level 10**== – beim zweitägigen Day 1A erst am zweiten Tag.

![Turnierplan der CAPT Million 2026 im Casino Baden – acht Day 1 vom 20. bis 27. November mit Startzeit und Levelzeit, danach Day 2 am 28., Day 3 am 29. und Final Day am 30. November](/images/capt-million-baden-2026-day1-schedule.webp)

| Datum | Start | Flight | Levelzeit |
|---|---|---|---|
| Fr 20.11. | 15:00 | Day 1 | 30 Min. |
| Sa 21.11. | 15:00 | ==**Day 1A (zweitägig, weiter am So 22.11. um 15:00)**== | 60 Min. |
| So 22.11. | 17:00 | Day 1 Turbo | 20 Min. |
| Di 24.11. | 16:00 | Day 1 | 30 Min. |
| Mi 25.11. | 16:00 | Day 1 | 30 Min. |
| Do 26.11. | 15:00 | Day 1 | 30 Min. |
| Fr 27.11. | 15:00 | Day 1 | 30 Min. |
| Fr 27.11. | 20:00 | ==r:Day 1 Turbo (letzter Day 1)== | ==r:15 Min.== |
| Sa 28.11. | 15:00 | ==**Day 2**== (Registrierung geschlossen) | 60 Min. |
| So 29.11. | 15:00 | Day 3 | 60 Min. |
| Mo 30.11. | 16:00 | ==**Final Day**== | 60 und 90 Min. |

**Welcher Day 1 passt zu dir?** Der Day 1A am Samstag ist der langsamste Flight: 60-Minuten-Level, gespielt werden am ersten Tag 9 Level, der Rest folgt am Sonntag. Wer am Wochenende spielen will, bekommt dort am meisten Poker pro Euro – denk aber daran, dass Day 2 erst am Samstag, 28. November, läuft. Der Turbo am Freitagabend ist das Gegenteil – 15-Minuten-Level, kurz vor Day 2.

Aus Multi-Flight-Festivals kenne ich ein Muster: Die letzten Flights sind voll mit Leuten, die schon einen Stack in Day 2 haben und „noch einen Schuss“ abgeben. Genau das erlaubt „Best Stack forward“ – und deshalb ist der letzte Turbo selten so locker, wie die kurze Levelzeit vermuten lässt.

## Was bedeutet „Best Stack forward“ bei der CAPT Million?

„Best Stack forward“ heißt: Du darfst dich ==**mehrfach für Day 2 qualifizieren**==, spielst dort aber ==**nur deinen größten Stack**== weiter. Der kleinere Stack wird aus dem Turnier genommen – dafür bekommst du ==g:für jede weitere Qualifikation €4.000== aus dem Preispool ausgezahlt.

So steht es auf der Turnierseite: „Die CAPT Million wird als ‚Best Stack forward‘ gespielt. Dies bedeutet, dass ein:e Spieler:in sich mehrfach für den Tag 2 qualifizieren kann und dort nur den größten Stack weiterspielt.“

**Day 2 ist schon im Geld.** Jeder Day 1 wird gespielt, bis ==**rund 10% der Gesamt-Buy-ins**== (inklusive Re-Entries) übrig sind. Wer das schafft, hat Day 2 erreicht, die Chips werden vom Floorman gezählt, und du bekommst sofort ==**€500 Travelmoney**== aus dem Preisgeld. Der Min Cash von €1.500 enthält diese €500 bereits.

:::compare
Ein Day 2 erreicht | Zwei Day 2 erreicht
Du spielst deinen Stack am 28.11. weiter | Du spielst nur den größeren der beiden Stacks weiter
€500 Travelmoney sofort | Bonus von €4.000 (inklusive Travelmoney) für die zweite Qualifikation
Min Cash €1.500 | Der kleinere Stack wird aus dem Turnier genommen
:::

Wie oft das passiert, zeigen die Zahlen der Veranstalter: 2025 gab es ==**40 Doppelqualifikationen**== unter 254 Finalist:innen, 2024 waren es 35. Rechne vorher durch, ob dir ein zweiter Day 1 das Geld wert ist – jeder Versuch kostet wieder €550, und ein Re-Entry im selben Flight auch.

Weil die Day-2-Bubble gleichzeitig die Geldbubble ist, wird am Ende jedes Day 1 entsprechend eng gespielt. Warum Short Stacks dort plötzlich Druck machen können, erklärt unser Artikel zur [Bubble im Turnierpoker](/de/blog/holdem-bubble).

## Wie kommst du über Starttage und Satellites günstiger rein?

Du musst nicht nach Baden fahren, um Day 1 zu spielen: Casinos Austria spielt ==**Starttage in ganz Österreich**==, ebenfalls für €500 + 50. Noch günstiger sind Satellites – in Baden ab ==g:€50 + 10==, in Linz sogar ab ==g:€25 + 5==.

![Wege zur CAPT Million 2026 – Starttage in den Casinos Austria für €500 + 50, Satellites ab €25 + 5, Mega Satellites in Baden am 19. und 23. November und Flip & Go um ein €550-Ticket](/images/capt-million-baden-2026-wege.webp)

**Starttage außerhalb des Hauptturniers** (Stand: offizieller Pokerkalender, 2. Oktober 2026):

| Casino | Termine | Hinweis |
|---|---|---|
| Baden | Sa 3.10. · 10.10. · 24.10. · 31.10. · 7.11. · 14.11., jeweils 17:00 | 30-Minuten-Level |
| Seefeld | So 11.10., 15:00 (Day 1A) | |
| Bregenz | Fr 16.10., 17:00 (Day 1A, weiter am 17.10.) · Sa 17.10., 17:00 | ==r:Anmeldung per Mail an poker.bregenz@casinos.at== |
| Salzburg | Sa 24.10., 15:00 · Sa 21.11., 15:00 (Day 1/1A) · So 22.11., 17:00 | Starttage-PDF nennt andere Tage – Kalender prüfen |
| Velden | Sa 7.11., 16:00 | |
| Innsbruck | Sa 7.11., 16:00 (Day 1A) · So 8.11., 15:00 · Fr 13.11., 17:00 (Day 1A) | |
| Linz | Fr 13.11., 17:00 (Day 1A) · Sa 14.11., 17:00 | |
| Graz | Sa 14.11., 16:00 | |
| Wien | laut Starttage-PDF „Date still open“ | |

==r:Die Late Reg ist nicht überall gleich.== In Baden schließt sie mit Level 10, in Salzburg am 22.11. mit Level 11 und in Bregenz am 16.10. mit Level 9. Schau dir den Eintrag deines Starttags im Kalender an, bevor du losfährst.

**Satellites im Casino Baden während der Million-Woche:**

| Datum | Satellite | Buy-in | Was es gibt |
|---|---|---|---|
| Di 17.11. · Fr 20.11. · Do 26.11. | NLH Satellite CAPT MILLION | €50 + 10 | Day-1-Tickets |
| Do 19.11., 17:00 | ==**CAPT Million Mega Satellite**== (offizieller Start) | €50 + 10 | ==g:20 Tickets== für Day 1 |
| Mo 23.11., 15:00 | CAPT Million Mega Satellite | €50 + 10 | ==g:10 Tickets== |
| Mi 25.11. · Do 26.11., 23:00 | Flip & Go | €50 + 10 | der Sieger bekommt „das €550 Ticket“ |

Flip & Go ist genau das, was der Name sagt: Jeweils 11 Spieler:innen, eine einzige Pokerhand, jeder bekommt drei Karten und legt eine ab. Davor laufen in Baden außerdem dienstags um 18:00 Satellites für €50 + 10 (6.10., 20.10., 27.10., 3.11. und 10.11.).

**Gewonnen? Sag Bescheid.** Laut Turnierseite teilst du dem Pokerfloorman im Gewinnfall mit, an welchem Day 1 du spielen willst. Das Mega Satellite ist kein Nischenevent – 2025 kam es auf ==**548 Entries**==.

## Wo kaufst du Tickets für die CAPT Million?

Tickets bekommst du ==**an der Rezeption jedes der 12 Casinos Austria**== – bis 24 Stunden vor Turnierstart an jedem Standort, danach ==r:nur noch im Casino, in dem das Turnier läuft== – für die Day 1 der Million-Woche also im Casino Baden. Alternativ gibt es das Service Center per Mail oder Telefon, dort zahlst du mit Kreditkarte.

:::steps
Service Center | Montag bis Freitag, 8:00–15:30 · Telefon +43 1 53440 50 · service@casinos.at · Bezahlung per Kreditkarte
Rezeption vor Ort | In allen 12 Casinos · bis 24 Stunden vor Turnierstart · Bezahlung mit Bankomat, bar oder Kreditkarte
Letzte 24 Stunden | Nur noch im Veranstaltungs-Casino – für die Day 1 im November also im Casino Baden
Re-Entry | Pro Day 1 ist 1 Re-Entry erlaubt – wieder €500 + 50
:::

## Was brauchst du am Eingang des Casino Baden?

Ins Casino Baden kommst du ab ==**18 Jahren**== mit einem ==**amtlichen Lichtbildausweis im Original**==. Der Eintritt ist frei, aber nur mit einer personenbezogenen Spielkarte oder GlücksCard. Kopien oder Fotos des Ausweises werden laut FAQ von Casinos Austria nicht akzeptiert – „egal ob digital oder physisch“.

| Ausweis | Akzeptiert |
|---|---|
| Reisepass | nur physisch |
| Personalausweis | nur physisch |
| Führerschein | als eAusweis oder physisch |
| Amtlicher Dienstausweis · Waffenpass · Identitätsnachweis | nur physisch |

**Beim ersten Besuch** zeigst du den Ausweis und gibst zusätzlich unter anderem Wohnadresse und Geburtsort an, dann unterschreibst du. Laut Casinos Austria wird bei jedem Besuch ein Foto von dir gemacht. Wer Zeit an der Rezeption sparen will, kann vorab das Pre-Boarding-Formular ausfüllen, wenn der Besuch in den nächsten 10 Tagen ansteht.

**Dresscode: Smart Casual.** Casinos Austria beschreibt es als „gepflegte Freizeitkleidung“. Jogginghose und Flip-Flops sind fehl am Platz, Anzug oder Abendkleid brauchst du nicht. Mäntel und Pakete gehören in die Garderobe (gegen Gebühr), Kameras sind in den Spielsälen nicht erlaubt.

Ein Tipp aus langen Turniertagen: Day 2 und Day 3 laufen mit 60-Minuten-Level und starten um 15:00 – das wird spät. Zieh dich so an, dass du zehn Stunden am Tisch bequem sitzt und trotzdem im Rahmen von Smart Casual bleibst.

## Side Events: High Roller, PLO, Mystery Bounty und Ladies

Neben dem Main Event laufen im Casino Baden mehrere Side Events, von ==**€50 + 10**== (Micro CAPT Million) bis ==**€2.000 + 200**== (High Roller). Garantien sind für die Side Events in den offiziellen Unterlagen nicht ausgeschrieben.

| Datum | Event | Buy-in |
|---|---|---|
| Mo 23.11., 17:00 | PLO Turnier (2 Re-Entries) | €800 + 80 |
| Di 24.11., 20:00 | ==**High Roller**== (Day 2 Finale am 25.11.) | €2.000 + 200 |
| Mi 25.11., 19:00 | Ladies Event | €200 + 30 |
| Sa 28.11., 16:00 | Mystery Bounty | €400 + 400 + 80 |
| So 29.11., 17:00 | Mini CAPT Million | €200 + 30 |
| Mo 30.11., 17:00 | Micro CAPT Million | €50 + 10 |

Für den High Roller gibt es eigene Satellites für €200 + 30 (unter anderem am 18., 21. und 23.11.), die jeweils 3 Tickets ausspielen. Und wer zwischendurch Cash Game spielen will: Während der Million-Woche laufen laut Turnierseite täglich ab Turnierbeginn bis 04:00 Uhr Tische mit ==**NLH ab 1/3**== und ==**PLO ab 2/2**== (vorbehaltlich Änderungen durch den Floorman).

## Anreise aus Wien und Hotels mit CAPT-Rabatt

Aus Wien bist du mit der ÖBB am schnellsten in Baden: ==**ab Wien Meidling ca. 11 Minuten**== bis Baden Bahnhof, dann rund 15 Minuten zu Fuß. Mit dem Auto sind es ca. 30 Minuten über die A2.

| Verkehrsmittel | Strecke | Zeit laut Casinos Austria |
|---|---|---|
| ÖBB | Wien Meidling → Baden Bahnhof, dann zu Fuß | ca. 11 Min. + ca. 15 Min. |
| Badner Bahn | Wien Oper → Josefsplatz Baden, dann zu Fuß | ca. 60 Min. + ca. 5 Min. |
| Auto | A2 Südautobahn, Abfahrt Baden · Casino Parkgarage | ca. 30 Min. |
| Bus | Linie 303 | hält direkt vor dem Casino |

**Parken:** Die Casino Parkgarage ist kostenpflichtig. Mit der Parkermäßigung von der Rezeption zahlst du abends (18:00–06:00) ==**€2,20 pro Stunde**==, maximal ==**€9 pro Spieltag**==.

**Hotels mit Kennwort.** Zwei Hotels in Baden geben Gästen der CAPT Million einen Rabatt, wenn du direkt im Hotel mit dem Kennwort „CAPT MILLION“ buchst: das ==**Hotel At the Park**== (Kaiser Franz Ring 5) und das ==**Hotel Admiral**== (Renngasse 8). Der ermäßigte Preis liegt laut Turnierseite um ==**130 Euro für das Einzelzimmer**== bzw. ==**180 Euro für das Doppelzimmer**==.

Wer aus Bayern kommt, kennt eher den Weg nach Rozvadov als nach Niederösterreich. Unser [Guide zu Pokerturnieren in München](/de/blog/poker-turnier-muenchen) zeigt, was zwischen Spielbank-Daily und Festival in der Region läuft.

## Wie lief die CAPT Million 2025 und 2024?

Beide bisherigen Ausgaben haben die Garantie von €1.000.000 übertroffen: ==**2024 mit €1.700.000**== aus 3.400 Buy-ins, ==**2025 mit €1.468.500**== aus 2.937 Buy-ins. 2025 gewann der Schweizer ==**Stefan Eggenberger**== für ==**€200.500**== nach einem mehr als dreistündigen Heads-up.

| | CAPT Million 2024 | CAPT Million 2025 |
|---|---|---|
| Buy-ins gesamt (inkl. Re-Entries) | ==**3.400**== (2.707 + 693 Re-Entries) | ==**2.937**== |
| Preisgeld gesamt | €1.700.000 | €1.468.500 |
| Finalist:innen (Day 2) | 307 (ohne Doppelqualifikation) | 254 |
| Doppelqualifikationen | 35 | 40 |
| Sieger | „Stefan S.“ – €172.200 | Stefan Eggenberger (Schweiz) – €200.500 |

Die Rechnung geht auf: 3.400 × €500 = €1.700.000 und 2.937 × €500 = €1.468.500 – also landet pro Buy-in genau der €500-Anteil im Preispool, die €50 sind die Gebühr. ==r:2025 kamen weniger Buy-ins als 2024==, die Garantie wurde trotzdem klar geknackt. 2024 war rund jeder fünfte Buy-in ein Re-Entry (693 von 3.400).

2025 kamen die Spieler:innen laut Casinos Austria aus ==**45 Nationen**==, mehr als 50 Pokertische waren im Einsatz. Zweiter wurde der Ukrainer Sergii Baranov für €131.500. Wenn du es bis zum Final Table schaffst, lohnt sich ein Blick auf [ICM und Deals](/de/blog/holdem-icm) – bei Sprüngen wie €131.500 zu €200.500 entscheidet das über viel Geld.

## CAPT Million oder German Poker Masters in Rozvadov?

In derselben Woche läuft in Tschechien die ==**German Poker Masters €1MILLION**== im King's Resort Rozvadov: vom 20. bis 30. November, Main Event ==**€285**== mit ebenfalls €1.000.000 Garantie. Beide Finals sind am ==r:30. November== – spätestens ab Day 2 musst du dich also für ein Main Event entscheiden.

:::compare
CAPT Million (Casino Baden, AT) | German Poker Masters (King's, CZ)
Buy-in €500 + 50 | Buy-in €285 inklusive Gebühr
100.000 Chips | 50.000 Chips
8 Day 1 in Baden + Starttage in Österreich | 12 Day-1-Termine, einer davon in Prag („Day 1 PRAGUE“)
Gebühr €50 (gut 9%) | „Fee deduction 16% from the prizepool“
2025: 2.937 Buy-ins | 2025: 3.914 Entries
Final Day 30.11., 16:00 | Final Day 30.11., 14:00
:::

Trotz des Namens ist die German Poker Masters ==r:kein Turnier in Deutschland==, sondern eines in Tschechien – King's beschreibt die Lage als „On the Main Motorway from Munich to Prague“. Am Eingang registrierst du dich dort ebenfalls mit amtlichem Ausweis, einen Dresscode gibt es laut King's-FAQ nicht.

Meine Faustregel für die Wahl: Die CAPT Million kostet fast das Doppelte, die GPM ist billiger und hat mehr Day-1-Termine. Bei beiden ist Day 2 schon im Geld – laut King's-Turnierplan „All players ITM“. Für jemanden aus Wien oder Ostösterreich ist Baden der kürzere Weg, aus der Oberpfalz oder Franken eher Rozvadov. Warum so viele „deutsche“ Serien überhaupt dort laufen, steht im Kapitel Tschechien des [Turnier-Guides](/de/blog/holdem-tournament).

:::readnext[Weiterlesen]
/de/blog/holdem-tournament | Texas Hold'em Turnier-Guide | /images/holdem-tournament-hero.webp
/de/blog/holdem-bubble | Bubble im Turnierpoker | /images/holdem-bubble-hero.webp
:::

## FAQ – CAPT Million Baden 2026

**Q. Ist die CAPT Million im Grand Casino Baden in der Schweiz?**

A. Nein. Die CAPT Million läuft im ==**Casino Baden in Niederösterreich**== (Kaiser-Franz-Ring 1, 2500 Baden), etwa 26 km südlich von Wien. Das Grand Casino Baden in der Schweiz und das Casino Baden-Baden in Deutschland sind andere Häuser.

**Q. Wie viel kostet ein Re-Entry bei der CAPT Million?**

A. Ein Re-Entry kostet wieder ==**€500 + 50**==. Pro Day 1 ist 1 Re-Entry erlaubt. Spielst du mehrere Day 1, gilt „Best Stack forward“.

**Q. Wann ist der letzte Day 1 der CAPT Million 2026?**

A. Der letzte Day 1 ist der ==**Turbo am Freitag, 27. November, um 20:00**== mit 15-Minuten-Level. Day 2 startet am Samstag, 28. November, um 15:00 – dann ist die Registrierung geschlossen.

**Q. Wie viel bekommt man, wenn man Day 2 erreicht?**

A. Day 2 ist bereits im Geld: Du bekommst sofort ==**€500 Travelmoney**==, der Min Cash liegt bei €1.500 inklusive dieser €500.

**Q. Gibt es während der CAPT Million Cash Games im Casino Baden?**

A. Ja. Laut Turnierseite täglich ab Turnierbeginn bis 04:00 Uhr – NLH ab 1/3 und PLO ab 2/2, vorbehaltlich Änderungen durch den Floorman.

**Q. Kann ich mit dem digitalen Personalausweis ins Casino Baden?**

A. Nein. Personalausweis und Reisepass werden ==**nur physisch**== akzeptiert. Nur den Führerschein lässt Casinos Austria auch als eAusweis gelten. Kopien und Fotos werden nicht akzeptiert.

**Q. Wie hoch war das Preisgeld der CAPT Million 2025?**

A. ==**€1.468.500**== aus 2.937 Buy-ins inklusive Re-Entries. Gewonnen hat Stefan Eggenberger aus der Schweiz für €200.500.

---

## Fazit – deine Checkliste bis November

- ==**Wenig Budget**== → Satellite ab €25 + 5 (Linz) oder €50 + 10 (Baden, dienstags) – oder das Mega Satellite am 19.11.
- ==**Lieber am Wochenende**== → Day 1A am Sa 21.11. (60-Minuten-Level, zweitägig) – Day 2 dann am 28.11.
- ==**Aus den Bundesländern**== → Starttag im eigenen Casino, Day 2 dann am 28.11. in Baden
- ==**Letzte Chance**== → Day 1 Turbo am Fr 27.11. um 20:00
- ==**Vor der Abfahrt**== → Ausweis im Original, Smart Casual, Hotel mit Kennwort „CAPT MILLION“

Bei rund 3.000 Buy-ins wird die Day-2-Bubble lang. Lies vorher, was bei [kurzem Stack](/de/blog/holdem-short-stack) zu tun ist, und vergleiche im [Turnierkalender](/de/tournaments) mit den anderen Serien im November.

---

## Quellen

- **Termin, Buy-in, Garantie, Best Stack forward, Levelzeiten, Cash Game, Hotels, Anreise, Ergebnisse 2024/2025** – [Casinos Austria · CAPT Million](https://www.casinos.at/casinos/baden/spiel/poker/capt-million) (offiziell; abgerufen am 2. Oktober 2026)
- **Turnierplan Baden 16.–30.11.** – [CAPT Million Turnierplan 2026 (PDF)](https://www.casinos.at/fileadmin/user_upload/CAPT-Million-Turnierplan-2026.pdf) und die Einzelseiten im Pokerkalender von Casinos Austria, z. B. [Flip & Go am 25.11.](https://www.casinos.at/events/poker-kalender/detail/2026-11-25-flip-go-baden) (offiziell; abgerufen am 2. Oktober 2026)
- **Starttage in ganz Österreich** – [CAPT Million Starttage (PDF)](https://www.casinos.at/fileadmin/00_Casinos/11_Casinos/01_Baden/05_Poker/CAPT_Million/Starttage-Uebersicht-2026.pdf) und Pokerkalender (offiziell; abgerufen am 2. Oktober 2026)
- **Mindestalter, Ausweis, Eintritt, Kleidung** – [Besuchs- und Spielordnung Casino Baden (PDF)](https://www.casinos.at/fileadmin/00_Casinos/12_Downloads/08_Besuchs-_und_Spielordnung/casino-baden.pdf), [FAQ Casinos Austria](https://www.casinos.at/faq?q=Dress%20Code) und [Dein 1. Besuch im Casino](https://www.casinos.at/casinos/dein-erster-besuch-im-casino) (offiziell; abgerufen am 2. Oktober 2026)
- **Anreise und Parken** – [Casino Baden · Kontakt & Öffnungszeiten](https://www.casinos.at/casinos/baden/kontakt-oeffnungszeiten) (offiziell; abgerufen am 2. Oktober 2026)
- **CAPT Million 2025 (Preisgeld, Sieger, 45 Nationen, Mega Satellite)** – [Casinos Austria · Pressemitteilung vom 4. Dezember 2025](https://www.casinos.at/company/presse/pressemitteilungen/news-detail/2025-12-04-capt-million-2025-ein-pokerfestival-der-superlative-baden) (offiziell)
- **German Poker Masters €1MILLION 2026** – [King's Resort · German Poker Masters](https://kings-resort.com/poker/festival/german-poker-masters-1million-294) und [King's FAQ](https://kings-resort.com/faq/) (offiziell; abgerufen am 2. Oktober 2026)
- **German Poker Masters 2025 (3.914 Entries)** – [King's Resort · Final Day 2025](https://kings-resort.com/poker/tournament/german-poker-masters-1million-final-day-11458) (offiziell)

※ Termine, Uhrzeiten und Buy-ins können sich ändern – laut Turnierplan „according to tournament management“. Die letzte Bestätigung ist immer die [offizielle Seite der CAPT Million](https://www.casinos.at/casinos/baden/spiel/poker/capt-million).
`.trim(),
};

export default POST;
