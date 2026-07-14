import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "Nie ein Poker-Turnier gespielt? So läuft es ab",
  title: "Wie Poker-Turniere funktionieren — Buy-ins, Formate & Tag 1",
  desc: "Wie funktionieren Poker-Turniere? Buy-ins, Blind-Struktur, Payout-Struktur, Freezeout vs. PKO vs. Satellite, plus eine Tag-1-Checkliste für Einsteiger.",
  tldr: "In einem Poker-Turnier zahlst du ein festes Buy-in für Chips, die Blinds steigen auf einem Timer, bis ein Spieler alle Chips hält. Die Top 10–15% des Feldes kommen in die Payouts. Formate sind Freezeout, PKO, Satellite und Deepstack — der Einstieg läuft über direktes Buy-in, Satellite oder Online-Vorregistrierung.",
  category: "tournament",
  date: "2026-06-16",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "14 Min.",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "Voller Live-Poker-Turniersaal mit der Blind-Uhr auf 12.000/24.000, während die Spieler eine Hand ausspielen",
  tags: [
    "wie funktionieren poker-turniere",
    "poker-turnier struktur",
    "poker-turnier blind-struktur",
    "poker-turnier payout-struktur",
    "arten von poker-turnieren",
    "freezeout poker-turnier",
    "pko poker",
    "satellite poker-turnier",
    "turnier-poker spielen",
  ],
  content: `
Ich bin in mein erstes Live-Poker-Turnier spaziert — mit $200, einer vagen Vorstellung davon, wie Texas Hold'em funktioniert, und null Ahnung, was ein „Blind-Level“ oder eine „Bubble“ sein soll.

Vier Stunden später war ich draußen. Aber ich wusste genau, was jeder Begriff bedeutet, warum ich verloren habe und wann ich wiederkommen sollte.

Dieser Guide ist alles, was ich mir vor jenem Tag gewünscht hätte zu wissen — wie die Turnier-Struktur tatsächlich funktioniert, in welches Format du einsteigst, wie du dich registrierst, ohne planlos zu wirken, und wie sich Tag 1 Stunde für Stunde anfühlt.

---

### Auf einen Blick

:::stripe
10–15% | des Feldes werden in der Regel bezahlt
20–40 Min. | pro Blind-Level bei Live-Events
$100+$9 | wie sich ein typisches Buy-in aufteilt — Prize Pool + Fee
:::

## Was ist ein Poker-Turnier? (Antwort in 30 Sekunden)

Ein Poker-Turnier ist ein Wettbewerb, bei dem alle dieselbe Startgebühr zahlen (das **Buy-in**), dieselbe Anzahl Startchips erhalten und spielen, bis eine Person jeden Chip im Spiel hält.

**In einem Satz:** In einem Cash Game sind deine Chips echtes Geld und du kannst jederzeit gehen. In einem Turnier ist dein maximaler Verlust exakt das Buy-in — dafür spielst du um einen Anteil an einem viel größeren Prize Pool.

Dieser eine Unterschied verändert Chip-Wert, Blind-Druck und Strategie von Grund auf. → Volle Aufschlüsselung: [Poker-Turnier vs. Cash Game — was solltest du spielen?](/de/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## Poker-Turnier-Struktur — Buy-ins, Fees und Startstacks

Wenn du dich registrierst, zahlst du ein Buy-in. Dieses Geld teilt sich auf zwei Wege auf:

| $109-Buy-in (geschrieben als „$100+$9“) | Wohin es geht |
|:---|:---|
| **$100** | → Prize Pool, geteilt unter allen Teilnehmern |
| **$9** | → Hausgebühr (Rake), behält der Veranstaltungsort |

Große Live-Events behalten in der Regel 8–10% des Buy-ins als Fee (kleine Daily-Turniere nehmen oft mehr) — hier $9 von $109, also rund 8,3%. Wie diese Fee funktioniert (und warum Online sich von Live unterscheidet), gehört zum Thema, [wie das Poker-Rake funktioniert](/de/blog/holdem-rake).

Im Gegenzug erhältst du einen **Startstack** — üblicherweise 10.000 bis 50.000 Turnierchips, meist 100–300 Big Blinds tief auf Level 1.

**Dein Startstack hat keinen Bargeldwert.** Ein Stack von 10.000 Chips entspricht nicht $10.000 — es ist nur dein Turnierleben. Wichtig ist einzig, ob du mehr Chips hast als die anderen Spieler, wenn die Geldränge erreicht werden.

Jedes Turnier veröffentlicht seine Struktur in einem **Structure Sheet**: Startstack, Blind-Levels, Level-Dauer, Ante-Schedule und Payouts. Frag am Registrierungstresen danach — es ist das nützlichste Dokument im Raum.

---

## Poker-Turnier-Blind-Struktur — Levels, Antes und die Uhr

Genau das lassen die meisten Anfänger-Guides aus, und es ist das wichtigste mechanische Konzept in Turnieren.

**Die Blinds starten klein und steigen auf einem Timer — bei Live-Events meist alle 20–40 Minuten.**

| Level | Blinds | Antes | Dein 10k-Stack = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 Big Blinds |
| 3 | 75 / 150 | 150 | 67 Big Blinds |
| 6 | 200 / 400 | 400 | 25 Big Blinds |
| 9 | 500 / 1.000 | 1.000 | 10 Big Blinds |

Beachte: **Du hast keinen einzigen Chip verloren** zwischen Level 1 und Level 9. Aber dein Stack ging von 200 BB auf 10 BB, weil die Blinds gestiegen sind. So erzwingen Turniere Action und eliminieren am Ende Spieler.

==g:Faustregel: unter 20 Big Blinds bist du im Push-or-Fold-Territorium. Unter 10 Big Blinds musst du fast jede spielbare Hand shoven, bevor die Blinds dich lebendig auffressen.==

Wenn du dort ankommst, findest du die exakten Shove-Ranges in [Short-Stack-Strategie — wann pushen oder folden](/de/blog/holdem-short-stack).

**Was sind Antes?** Nach den frühen Levels fügen die meisten Turniere eine „Ante“ hinzu — ein extra Zwangseinsatz, der jede Hand zusätzlich zu den Blinds eingesammelt wird. In den meisten modernen Live-Events ist das eine einzelne „Big Blind Ante“ in Höhe eines Big Blinds, gezahlt vom Big-Blind-Spieler stellvertretend für den ganzen Tisch (deshalb entspricht die Ante-Spalte oben dem Big Blind). Das erhöht die Pot-Größe und beschleunigt das Spiel. Sobald die Antes einsetzen, schrumpfen deine Chips noch schneller.

Ganz neu bei den Blinds? Starte mit [dem, was Small Blind und Big Blind wirklich sind](/de/blog/holdem-blind-meaning) — dann macht jede „BB“-Zahl oben klick.

---

## Die 4 Phasen, die jedes Turnier durchläuft

### Phase 1 — Frühe Levels (100–200 BB tief)
Du hast Raum zu spielen. Spekulative Hände, Set-Mining, Flops sehen — alles vernünftig. Die meisten Anfänger spielen hier zu tight. Die Blinds sind billig; lerne den Tisch kennen.

### Phase 2 — Mittlere Phasen (30–60 BB)
Die Antes sind jetzt meist drin. Der Stack-Druck beginnt. Spieler mit Short Stacks fangen an zu shoven. Hier wird der Großteil des Feldes eliminiert.

### Phase 3 — Die Bubble
Die stressigste Phase. Eine Eliminierung mehr und alle Verbleibenden **werden bezahlt** (ITM = In The Money). Short Stacks erstarren. Big Stacks tyrannisieren. Kluges Spiel hier kann echte Equity bringen, ohne einen einzigen Pot zu gewinnen — [die Bubble verdient einen eigenen Guide](/de/blog/holdem-bubble).

### Phase 4 — Final Table
Meist bleiben 6–9 Spieler übrig. Die Payouts steigen mit jeder Eliminierung stark an. [ICM (das Independent Chip Model)](/de/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") bestimmt hier die Entscheidungsfindung — Chip-EV und Real-Money-EV klaffen deutlich auseinander.

---

## Arten von Poker-Turnieren — Freezeout, PKO, Satellite, Deepstack & mehr

| Format | Wie es funktioniert | Am besten für |
|:---|:---|:---|
| **Freezeout** | Ein Buy-in, kein Rebuy. Bust = raus. | Anfänger — feste Kosten |
| **Rebuy / Re-entry** | Nach dem Busten erneut zahlen (während der frühen Levels) | Aggressive Spieler mit größerer Bankroll |
| **Bounty / KO** | Kassiere ein festes Bounty in bar für jeden Spieler, den du eliminierst | Action-Spieler — Extra-Einkommen pro Knockout |
| **PKO (Progressive KO)** | Bounties wachsen mit jedem Knockout — ein Teil an dich ausgezahlt, ein Teil auf deinen Kopf addiert | High-Variance-Spieler mit großem Upside |
| **Deepstack** | Größere Startstacks (meist 100–200 BB+) mit langsameren Levels | Spieler, die mehr Postflop-Spiel wollen |
| **Satellite** | Preis = Eintritt in ein größeres Turnier, kein Bargeld | Budget-Spieler mit Ziel Major-Events |
| **MTT** | Multi-Table Tournament — großes Feld über viele Tische | Jeder — das häufigste Format |
| **SNG (Sit & Go)** | Startet, wenn die Plätze voll sind (keine feste Startzeit) — meist 6–9 Spieler | Schnelles Spiel, keine Terminplanung nötig |

**Für Anfänger:** Starte mit einem **Freezeout MTT** — bekannte Kosten, einfache Regeln, keine Rebuy-Entscheidungen, die dich stressen.

Die drei Format-Namen, die du am häufigsten auf einem Turnier-Schedule siehst, verdienen eine ordentliche Definition:

### Was ist ein Freezeout Poker-Turnier?

Ein Freezeout Poker-Turnier gibt jedem Spieler genau ein Buy-in. Verlierst du deine Chips, bist du eliminiert — keine Rebuys, keine Re-entries. Es ist das ursprüngliche Turnier-Format und das beste für Anfänger, weil deine Gesamtkosten in dem Moment feststehen, in dem du dich registrierst.

### Was ist PKO Poker? (Progressive Knockout)

Ein PKO (Progressive Knockout) ist ein Bounty-Turnier, bei dem typischerweise rund die Hälfte jedes Buy-ins in den regulären Prize Pool geht und die andere Hälfte zum Bounty auf dem Kopf dieses Spielers wird. Wenn du jemanden aus dem Turnier wirfst, kassierst du typischerweise einen Teil seines Bountys sofort in bar, und der Rest wird auf dein eigenes Bounty addiert — womit du zu einem größeren Ziel wirst, je mehr du gewinnst. Der genaue Split variiert je nach Seite und Event; 50/50 ist üblich, aber nicht überall, also prüf die Lobby oder das Structure Sheet. (Ein vollständiger PKO-Strategie-Guide kommt bald in dieses Cluster.)

### Was ist ein Deepstack Poker-Turnier?

Ein Deepstack Poker-Turnier startet dich mit weit mehr Chips im Verhältnis zu den Blinds — typischerweise 100 Big Blinds oder mehr, oft 200 BB+ — und kombiniert das meist mit längeren Blind-Levels. Mehr Chips und eine langsamere Uhr bedeuten mehr Postflop-Spiel, mehr Raum, um einen Fehler zu korrigieren, und längere Tage.

**Was ist mit Rebuys und Add-ons?** In einem Rebuy-Event kannst du nach dem Busten während eines festgelegten frühen Zeitfensters erneut zahlen; ein Add-on ist ein einmaliger optionaler Chip-Kauf, der meist angeboten wird, wenn dieses Fenster schließt. Danach spielt sich das Event wie ein Freezeout aus.

---

## Was ist ein Satellite Poker-Turnier?

Ein Satellite ist ein kleineres Turnier, bei dem der Preis kein Bargeld ist — es ist **ein Eintrittsticket** in ein größeres, teureres Turnier.

**Beispiel:**
- WSOP-Main-Event-Buy-in: **$10.000**
- Satellite-Buy-in: **$500** (20 Spieler)
- Preis: **1 Sitzplatz** ins Main Event

Statt $10.000 auszugeben, trittst du in einem $500-Turnier gegen 19 andere Spieler an. Eine Person gewinnt den $10.000-Sitzplatz.

**Verkettete Satellites** gehen sogar noch tiefer. Ein $5-Super-Satellite → $55-Qualifier → $215-Event → $1.050-Main-Event. Viele Spieler bei Major-Events sind über eine Satellite-Kette für einen Bruchteil des direkten Buy-ins eingestiegen.

==g:Satellite-Strategie unterscheidet sich vom regulären Turnierspiel — sobald du genug Chips hast, um dir einen Sitzplatz zu sichern, hör auf, Risiken einzugehen. Folde sogar gute Hände, um nicht auf der Bubble zu busten.==

---

## Wie du in ein Poker-Turnier einsteigst — 3 Wege

### Option A: Direktes Buy-in im Casino (am einfachsten)
1. Finde den Registrierungstresen des Poker Rooms (oder den Turniertresen bei größeren Events)
2. Zeige **gültigen Lichtbildausweis** + Loyalty-Karte, falls erforderlich
3. Zahle das Buy-in in bar, mit Chips oder Karte
4. Erhalte deine Seat Card (Tischnummer + Sitznummer)
5. Geh zu deinem Tisch, gib die Seat Card dem Dealer, erhalte deine Chips
6. Zähle deinen Startstack, bevor du deine erste Hand spielst — Fehler passieren

### Option B: Online-Vorregistrierung
Die meisten großen Live-Festivals lassen dich vorab online registrieren:
- Richte ein Konto auf der Plattform des Events ein (z. B. Bravo Poker Live für die WSOP, die PokerStars Live App für EPT/APPT-Events)
- Zahle das Buy-in online
- Komm zum Veranstaltungsort → Ausweisprüfung → Seat Card an einem Kiosk drucken oder am Tresen abholen
- Spart die Registrierungsschlange — lohnt sich für große Events

### Option C: Satellite-Qualifier
- Finde Satellite-Turniere online (PokerStars Power Path, GGPoker SuperSatellites) oder vor Ort
- Gewinne das Satellite → erhalte ein Seat-Ticket für das Zielevent
- Komm zum Registrierungstresen des Main Events → zeige Ticket + Ausweis → erhalte die Seat Card

**Die Registrierung öffnet meist 1–3 Stunden vor dem Turnierstart.** Für große Festivals registriere dich am Vortag online, um dir einen Sitzplatz zu sichern.

Du spielst in Asien? Sieh dir den [APT Incheon 2026 Guide](/de/blog/apt-incheon-2026-guide) für den Schedule, die Buy-ins und den Registrierungsablauf eines echten Festivals an.

---

## Turnier-Poker spielen — Strategie nach Phase

Ein Beitrag kann keine vollständige Turnierstrategie lehren — dafür gibt es die Cluster-Guides — aber hier ist das Skelett Phase für Phase, an dem jeder gewinnende Plan hängt:

**Frühe Levels (100 BB+):** Spiele tightes, positionsbewusstes Poker und sieh billige Flops mit Händen, die große Paare knacken können. Ein disziplinierter [Starthand-Chart](/de/blog/holdem-starting-hands-chart) verhindert die meisten Anfänger-Katastrophen. Bluffe deinen Stack nicht in der ersten Stunde weg — auf Level 1 foldet niemand.

**Mittlere Phasen (30–60 BB):** Antes machen jeden Pot wert, umkämpft zu werden. Openraise leichter aus später Position, stiehl Blinds, verteidige deinen Big Blind öfter und fang an zu tracken, wer an deinem Tisch short ist.

**Short Stack (unter 20 BB):** Push-or-Fold übernimmt — die Mathematik hier ist im Wesentlichen gelöst, und Raten kostet echtes Geld. Lerne die Shove-Ranges in der [Short-Stack-Strategie](/de/blog/holdem-short-stack).

**Bubble und Final Table:** Survival-Mathematik überholt Chip-Mathematik. Payout-Druck verändert, welche Hände du spielen kannst — die Bubble- und ICM-Guides, die im Phasen-Abschnitt oben verlinkt sind, decken genau ab, wie.

---

## Was an Tag 1 passiert — Stunde für Stunde

Das erzählt dir kein anderer Guide. Hier ist eine realistische Tag-1-Timeline für einen Live-$300-Freezeout mit 12-Uhr-Startzeit:

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Tag-1-Timeline — $300-Freezeout, 10.000 Startchips</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">10:30</div>
<div style="color:var(--foreground)">Registrierung öffnet. Ausweis zeigen, zahlen, Seat Card holen. Finde deinen Tisch.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">12:00</div>
<div style="color:var(--foreground)">Karten in der Luft. Level 1: Blinds 25/50. Du hast 200 BB. Spiele exploratives Poker.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">13:00–15:00</div>
<div style="color:var(--foreground)">Levels 2–4. Late Registration noch offen. Das Feld wächst. Einige Spieler busten bereits.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~15:30</div>
<div style="color:var(--foreground)">Late Reg schließt. Endgültige Feldgröße bekanntgegeben. Prize Pool bestätigt. Antes setzen ein.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~17:00</div>
<div style="color:var(--foreground)">Dinner Break (meist 1 Stunde). ~40% des Feldes eliminiert. Tische werden zusammengelegt.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">18:00–21:00</div>
<div style="color:var(--foreground)">Die Bubble naht. Hand-for-Hand-Spiel beginnt. Der Druck erreicht seinen Höhepunkt. Ein Bust = alle werden bezahlt.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">21:00–23:00</div>
<div style="color:var(--foreground)">ITM — die Money Bubble platzt. Die verbleibenden Spieler baggen ihre Chips oder spielen heute Abend bis zum Final Table.</div>
</div>
</div>
</div>

---

## Poker-Turnier-Payout-Struktur — wer bekommt was bezahlt

**Typische Struktur:** Die Top 10–15% des Feldes werden bezahlt.

| Feldgröße | Bezahlte Spieler | Min-Cash (typisch) | 1. Platz (typisch) |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1,5–2× Buy-in | 25–30% des Prize Pools |
| 500 | ~60 | 1,5–2× Buy-in | 20–25% des Prize Pools |
| 2.000 | ~250 | 1,7–2,2× Buy-in | 13–18% des Prize Pools |
| 10.000 | ~1.200 | 1,5–2× Buy-in | 8–12% des Prize Pools |

**Echtes Beispiel (WPT Seminole Rock 'N' Roll Poker Open Championship 2024, $3.500-Buy-in, 1.435 Entries):**
- Prize Pool: $4.592.000 ($3.200 jedes Buy-ins gehen in den Pool — der Rest ist die Fee)
- Bezahlte Spieler: 181 (~12,6% des Feldes)
- Min-Cash: rund 1,5× das Buy-in
- 1. Platz: $662.200 (~14% des Prize Pools)

Die Payout-Struktur wird immer vor dem Turnierstart bekanntgegeben. Frag am Registrierungstresen nach dem **Structure Sheet** — es listet Blind-Levels, Antes, Startstack und Payout-Schedule.

---

## Turnier-Glossar — Begriffe, die du an Tag 1 hörst

Diese 13 Begriffe decken das meiste ab, was du am Tisch hörst. Für das vollständige A bis Z siehe das [Poker-Glossar](/de/blog/holdem-glossary).

| Begriff | Was er bedeutet |
|------|--------------|
| **ITM** | In The Money — du hast eine bezahlte Position erreicht |
| **Bubble** | Die Phase direkt vor ITM — eine Eliminierung, bis alle cashen |
| **Hand-for-Hand** | Alle Tische spielen während der Bubble eine Hand nach der anderen, um Verzögern zu verhindern |
| **Structure Sheet** | Das offizielle Dokument, das Blind-Levels, Antes und Payouts auflistet |
| **Chipleader** | Der Spieler mit den meisten Chips |
| **Short Stack** | Ein Spieler mit sehr wenigen Chips im Verhältnis zu den Blinds |
| **Shove / JAM** | All-in gehen (deinen ganzen Stack in die Mitte schieben) |
| **Late Reg** | Late-Registration-Fenster — du kannst nach dem Turnierstart einsteigen |
| **Re-entry** | Nach dem Busten erneut einkaufen (nur während des Late-Reg-Fensters) |
| **Satellite** | Ein Qualifier-Turnier, bei dem der Preis ein Sitzplatz in einem größeren Event ist |
| **PKO** | Progressive Knockout — Bounty-Turniere, bei denen der Preis wächst |
| **ICM** | Independent Chip Model — ein mathematisches Framework für den Turnier-Chip-Wert |
| **Min-Cash** | Die niedrigste Payout-Position — das Minimum, das du fürs Erreichen der Payouts verdienst |

---

## Checkliste fürs erste Turnier

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Bevor du das Haus verlässt</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Gültiger Lichtbildausweis</strong> — Reisepass oder Führerschein. Keine Ausnahmen.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Buy-in + 20% extra</strong> in bar — manche Veranstaltungsorte nehmen keine Karten</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Casino-Loyalty-Karte</strong>, falls erforderlich (z. B. Caesars Rewards für die WSOP)</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Bestätigungs-E-Mail der Registrierung</strong>, falls du online vorregistriert hast</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Bequeme Kleidung — Turniere laufen 6–12 Stunden. Bring eine Jacke mit (Card Rooms sind kalt).</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:var(--primary);margin:16px 0 10px">Am Veranstaltungsort</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Komm 30–45 Min. vor Start. Registrierungsschlangen können lang sein.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Zähle deine Startchips, bevor du deine erste Hand spielst. Sag dem Dealer sofort Bescheid, falls es zu wenige sind.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Frag nach dem Structure Sheet — wisse, wann die Antes einsetzen und wann der Dinner Break ist.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>Keine Handys am Tisch, während eine Hand läuft</strong> — die meisten Card Rooms ahnden das.</span></div>
</div>
</div>

---

:::readnext[Weiterlesen]
/de/blog/holdem-tournament-vs-cash-game | Turnier vs. Cash Game | /images/tournament-table-action.webp
/de/blog/holdem-bubble | Was ist die Bubble im Poker? | /images/holdem-bubble-hero.webp
/de/blog/apt-incheon-2026-guide | APT Incheon 2026 Guide | /images/apt-incheon-2026-guide-hero.webp
:::

## FAQ

**Q. Wie lange dauert ein Poker-Turnier?**

A. Daily-Turniere in lokalen Casinos laufen meist 4–8 Stunden. Große Serien-Events wie WPT-Championships laufen 4–6 Tage mit mehreren Day-Bags — und das WSOP Main Event zieht sich von seinen Day-1-Flights bis zum Final Table über fast zwei Wochen. Wenn du dich registrierst, frag nach dem Structure Sheet — es sagt dir die erwartete Tageslänge auf Basis der Blind-Level-Dauer und der anfänglichen Feldgröße.

**Q. Was ist der Unterschied zwischen PKO und Bounty-Turnieren?**

A. In einem regulären Bounty- (Knockout-) Turnier trägt jeder Spieler ein festes Bounty — wirf jemanden raus und du kassierst den vollen Betrag, und die Bounties ändern sich nie. In einem PKO (Progressive Knockout) wachsen die Bounties: du kassierst typischerweise einen Teil des Bountys des eliminierten Spielers in bar, und der Rest wird auf das Bounty auf deinem eigenen Kopf addiert. Das macht Chipleader in einem PKO zu immer wertvolleren Zielen, je weiter das Event fortschreitet.

**Q. Wie sind die Regeln für Rebuys und Add-ons?**

A. In einem Rebuy-Turnier kannst du die Startgebühr nach dem Busten erneut zahlen (oder manchmal, wenn dein Stack unter eine Schwelle fällt), aber nur während einer festgelegten Rebuy-Periode — meist der ersten paar Blind-Levels. Ein Add-on ist ein einmaliger optionaler Chip-Kauf, der typischerweise allen am Ende der Rebuy-Periode angeboten wird, unabhängig von der Stack-Größe. Sobald dieses Fenster schließt, spielt sich das Event als Freezeout aus. Die genauen Regeln variieren je nach Veranstaltungsort, also prüf das Structure Sheet.

**Q. Ist es legal, ein Poker-Turnier zu Hause zu veranstalten?**

A. Das hängt von deiner Jurisdiktion ab. Vielerorts sind private soziale Home Games legal, solange der Gastgeber kein Rake, keinen Schnitt von der Startgebühr und keinen Gewinn über das Mitspielen hinaus nimmt — alles Geld geht zurück an die Spieler. Eine Hausgebühr zu verlangen, einen Prozentsatz des Prize Pools zu nehmen oder öffentlich zu werben, macht typischerweise aus einem Home Game illegales Glücksspiel. Die Gesetze variieren stark von Land zu Land und von Bundesland zu Bundesland, also prüf deine lokalen Vorschriften, bevor du veranstaltest.

**Q. Was bedeutet ITM im Poker?**

A. ITM = „In The Money“. Du hast eine Abschlussposition erreicht, die eine Auszahlung garantiert. In einem 200-Spieler-Turnier, das 25 Ränge bezahlt, bist du ITM, sobald 175 Spieler eliminiert wurden und nur noch 25 übrig sind. Dein Min-Cash liegt typischerweise bei 1,5–2× deinem Buy-in.

**Q. Kann man einem Poker-Turnier beitreten, nachdem es gestartet ist?**

A. Ja, während des Late-Registration-Fensters — meist die ersten paar Blind-Levels, oft zwei bis vier Stunden lang. Du bekommst immer noch den vollen Startstack, aber da die Blinds gestiegen sind, setzt du dich mit weniger Big Blinds hin als die früh Eingestiegenen. Sobald die Late Reg schließt, sind keine neuen Entries mehr erlaubt.

**Q. Kann man ein Poker-Turnier früh verlassen und seine Chips behalten?**

A. Nein. Anders als in einem Cash Game haben Turnierchips keinen Bargeldwert und können nicht mitten im Event ausgezahlt werden. Wenn du weggehst, bleiben deine Chips im Spiel und zahlen weiter Blinds und Antes, bis sie weg sind. Du bekommst nur dann Geld, wenn du in einer bezahlten (ITM-) Position landest.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Deep Dive</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnier vs. Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chip-Wert, steigende Blinds, ICM — welches Format zu dir passt</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthand-Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Welche Hände du in den frühen Levels spielst</div>
  </a>
  <a href="/de/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Short Stack</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Short-Stack-Strategie</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Push-or-Fold, wenn die Blinds näher rücken</div>
  </a>
  <a href="/de/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hier starten</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Regeln für Anfänger</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Beherrsche zuerst die Grundlagen</div>
  </a>
  <a href="/de/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was sind die Blinds im Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Blind-Levels starten hier — SB, BB und Antes</div>
  </a>
  <a href="/de/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positionen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Tischpositionen erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum dein Sitzplatz jede Turnierentscheidung lenkt</div>
  </a>
</div>
`.trim(),
};

export default POST;
