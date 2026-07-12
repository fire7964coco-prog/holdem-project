import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Texas Hold'em All-in-Regeln: Side Pots, Re-Raises & Showdown",
  seoTitle: "Alles reingeschoben? — All-in-Regeln & Side Pots",
  desc: "Alle Chips in der Mitte — und was kannst du jetzt gewinnen? Texas Hold'em All-in-Regeln: Table Stakes, Side Pots, Re-Raise-Recht und Showdown-Reihenfolge.",
  tldr: "All-in gehen heißt, jeden Chip zu setzen, den du vor dir hast. Du kannst von jedem Gegner nur so viel gewinnen, wie du selbst eingezahlt hast (den Main Pot). Alles, was größere Stacks darüber hinaus setzen, bildet einen Side Pot, den du nicht gewinnen kannst. Ein All-in unterhalb einer vollen Erhöhung öffnet die Setzrunde für Spieler, die bereits gehandelt haben, NICHT neu.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-12",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "♠",
  tags: [
    "poker all in regeln",
    "texas holdem all in",
    "side pot poker erklärt",
    "all in poker wer gewinnt was",
    "poker all in showdown",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "Texas Hold'em All-in — Spieler schiebt alle Chips in die Mitte, während der Dealer Main Pot und Side Pot auf grünem Filz trennt",
  content: `
Du bist shortstacked. Du schiebst alles rein. Der Spieler hinter dir callt. Ein dritter Spieler re-raist. Der Dealer beginnt, die Chips in zwei Stapel zu trennen.

Und du hast keine Ahnung, was da gerade passiert.

Ich saß selbst schon an diesem Tisch. Bei meinem ersten All-in in einem Live-Cash-Game wusste ich weder, ob ich überhaupt noch etwas gewinnen konnte, noch ob der andere Spieler re-raisen durfte — nicht einmal, welcher Chipstapel eigentlich meiner war. Erklärt hat es mir niemand.

==Dieser Guide deckt jede Situation ab: Main Pots, Side Pots, Re-Raise-Recht und Showdown-Reihenfolge.== Nie wieder einfrieren, wenn der Dealer anfängt, Stacks zu zählen. (Falls der grundlegende Setzablauf noch wackelig ist, findest du ihn im [Regel-Guide für Einsteiger](/de/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp").)

## Was bedeutet „All-in“ beim Texas Hold'em?

All-in gehen heißt, jeden Chip zu setzen, den du vor dir liegen hast. Sobald du committed bist, kannst du keine Chips mehr nachlegen — und niemand kann dich mehr zum Folden zwingen.

Die Grundlage ist die **Table-Stakes-Regel**: Du darfst nur die Chips setzen, die zu Beginn der Hand auf dem Tisch lagen. Du kannst nicht in die Tasche greifen, dir Geld von einem Freund leihen oder deine Uhr und die Autoschlüssel drauflegen — das ist Hollywood-Poker.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Begriff | Bedeutung |
|------|---------|
| Push / Shove / Jam | Slang dafür, All-in zu gehen |
| Table Stakes | Du kannst nur setzen, was zu Handbeginn vor dir lag |
| Double up | Ein All-in gewinnen und den Stack verdoppeln |
| Main Pot (Hauptpot) | Der Pot, den jeder gewinnen kann — auch der All-in-Spieler |
| Side Pot (Nebenpot) | Chips, die nur die größeren Stacks gewinnen können; der All-in-Spieler ist ausgeschlossen |

</div>

==g:Sobald du All-in bist, siehst du garantiert alle verbleibenden Gemeinschaftskarten.== Niemand kann dich mehr aus der Hand bluffen. Deine Karten bleiben bis zum River live.

---

## Wie du All-in ansagst

Zwei gültige Wege:

**1. Mündliche Ansage** — Sag klar und deutlich „All-in“, sodass Dealer und Gegner es hören. Das ist die sicherste Methode. Einmal ausgesprochen, bist du gebunden.

**2. Alle Chips nach vorn schieben** — Schieb deinen kompletten Stack in einer einzigen, sauberen Bewegung Richtung Mitte. Chips häppchenweise nachzuschieben kann wie eine String Bet aussehen, also beweg alles auf einmal.

![Texas Hold'em All-in-Showdown — ein Board mit K♠ 10♣ 7♦ 4♥ 2♣, die Chips getrennt in beschrifteten Main Pot und Side Pot](/images/holdem-all-in-declare.webp)

==r:Schieb niemals wortlos einen einzelnen Chip nach vorn — der Dealer wertet das nur als den Wert dieses Chips, nicht als deinen kompletten Stack.== Sag immer laut „All-in“ oder beweg deinen gesamten Stack auf einmal.

---

## Wie funktionieren Side Pots beim Poker? (Warum der All-in-Spieler gedeckelt ist)

Der All-in-Spieler kann nur gewinnen, was er selbst eingezahlt hat, multipliziert mit der Zahl der Caller. Alle Chips, die darüber hinaus gesetzt werden, bilden einen **Side Pot**, der ausschließlich den Spielern gehört, die ihn gefüllt haben.

![Texas Hold'em All-in-Side-Pot — der Dealer trennt die Chips in Main Pot und Side Pot, während Spieler A gedeckelt ist](/images/holdem-all-in-side-pot.webp)

### Beispiel mit 3 Spielern (Standard)

| Spieler | Stack | Aktion |
|--------|-------|--------|
| Spieler A | 100 Chips | All-in |
| Spieler B | 300 Chips | Callt 100, setzt dann 50 nach |
| Spieler C | 300 Chips | Callt 100, callt dann die 50 |

**Main Pot:** 100 × 3 = **300 Chips** (A, B und C sind alle berechtigt)

**Side Pot:** 50 × 2 = **100 Chips** (nur B und C sind berechtigt)

==Spieler A kann beim Showdown den Main Pot von 300 Chips gewinnen. Aber selbst wenn A insgesamt die beste Hand hält, kommt A an den Side Pot von 100 Chips nicht heran.== Den gewinnt B oder C.

### Beispiel mit 4 Spielern und mehreren Stacks

Hier wird es kompliziert — und genau hier steigen die meisten Anfänger aus.

| Spieler | Stack | Geht All-in für |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | callt alles |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Betrag | Berechtigte Spieler |
|:---|:---:|:---|
| Main Pot | 100 × 4 = **400** | A, B, C, D |
| Side Pot 1 | 100 × 3 = **300** | B, C, D (A ist gedeckelt) |
| Side Pot 2 | 300 × 2 = **600** | C, D (A und B gedeckelt) |
| **Gesamt** | **1.300** | — |

</div>

Die Regel: ==Jeder Side Pot entsteht aus der Differenz bis zum nächstkleineren Stack × Zahl der Spieler, die sie mitgehen.== Arbeite dich vom kleinsten Stack zum größten vor.

---

## Öffnet ein All-in die Setzrunde neu? — Die Regel, die fast alle falsch verstehen

==r:Das ist die meistdiskutierte All-in-Regel an Live-Tischen — ich habe erlebt, wie zwei Spieler fünf Minuten darüber gestritten haben, während der ganze Tisch wartete. Beide lagen falsch.==

**Die Regel:** Geht ein Spieler für **weniger als eine [volle Erhöhung](/de/blog/holdem-betting-actions)** All-in, öffnet dieses All-in die Setzrunde für Spieler, die in dieser Runde bereits gehandelt haben, NICHT neu.

![Poker-Re-Raise-Regel nach All-in — Spieler C geht für weniger als eine volle Erhöhung All-in, Spieler A kann nur callen oder folden](/images/holdem-all-in-reraise-rule.webp)

**Beispiel:**

Blinds $1/$2. Vier Spieler sehen den Flop.

1. Spieler A setzt $10.
2. Spieler B erhöht auf $25.
3. Spieler C geht für **$30** All-in (nur $5 mehr als Bs Erhöhung auf $25 — kein voller Erhöhungsschritt).

Was passiert mit Spieler A und Spieler D?

- Spieler A hat bereits gehandelt ($10 gesetzt). Weil Cs All-in von $30 **weniger als eine volle Erhöhung** ist (dafür wären mindestens $40 = $25 + $15 nötig), wird die Setzrunde für Spieler A NICHT neu geöffnet. ==A kann nur callen oder folden — re-raisen ist nicht erlaubt.==
- Spieler D hat noch nicht gehandelt — **Spieler D darf ganz normal erhöhen**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in-Betrag | Volle Erhöhung? | Öffnet die Setzrunde neu? |
|--------------|-------------|-----------------|
| Weniger als eine volle Erhöhung | Nein | Nein — wer bereits gehandelt hat, kann nur callen oder folden |
| Volle Erhöhung oder mehr | Ja | Ja — alle Spieler dürfen erneut re-raisen |

</div>

Warum gibt es diese Regel? Sie schützt Spieler davor, durch Teil-All-ins in immer größere Erhöhungen gezwungen zu werden. Eine volle Erhöhung signalisiert echte Aggression — ein Shortstack-All-in für ein paar Krümel nicht.

### Fortgeschrittener Fall: Was, wenn mehrere Spieler kurz All-in gehen?

An dieser Variante scheitern selbst Regulars. Mehrere kurze All-ins können sich zu einer vollen Erhöhung **aufsummieren** — und erreichen ihre kombinierten Erhöhungsschritte die Schwelle, wird die Setzrunde für Spieler, die bereits gehandelt haben, neu geöffnet.

Das ist die offizielle TDA-Regel zum „Re-opening the Bet“, und die meisten Kartenräume folgen ihr.

**Beispiel (Blinds $1/$2, am Flop):**

1. Spieler A setzt $10.
2. Spieler B geht für **$14** All-in (+$4 Erhöhungsschritt — allein keine volle Erhöhung)
3. Spieler C geht für **$21** All-in (+$7 Erhöhungsschritt — allein keine volle Erhöhung)

Kombinierte Erhöhungsschritte: $4 + $7 = **$11** — das erreicht die Mindesterhöhung von $10.

**Ergebnis: Die Setzrunde wird für Spieler A NEU GEÖFFNET.** A darf folden, callen oder re-raisen, obwohl weder B noch C für sich genommen eine volle Erhöhung gemacht hat.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bs All-in | Cs All-in | Kombinierter Erhöhungsschritt | Neu geöffnet für A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — unter $10 | ❌ Nein |
| $14 (+$4) | $21 (+$7) | $11 — erreicht $10 | ✅ Ja |
| $15 (+$5) | $25 (+$10) | $15 — erreicht $10 | ✅ Ja |

</div>

Die Mindesterhöhung bemisst sich immer an der *letzten vollen gültigen Bet oder Erhöhung* — nicht an irgendeiner kumulierten Gesamtsumme.

### Schnelle Entscheidungshilfe — Öffnet dieses All-in die Setzrunde neu?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Neu geöffnet für Spieler, die bereits gehandelt haben? |
|---|---|
| Einzelnes All-in < volle Erhöhung | ❌ Nein — nur callen oder folden |
| Einzelnes All-in ≥ volle Erhöhung | ✅ Ja — alle dürfen re-raisen |
| Mehrere kurze All-ins, kombiniert < volle Erhöhung | ❌ Nein |
| Mehrere kurze All-ins, kombiniert ≥ volle Erhöhung | ✅ Ja |
| Spieler, der noch NICHT gehandelt hat | ✅ Darf immer erhöhen (unabhängig davon) |

</div>

---

## All-in-Regeln beim Showdown

Wenn alle Setzrunden abgeschlossen sind und ein Spieler All-in ist, läuft der Showdown so ab:

1. **Die Karten werden aufgedeckt.** In Turnieren werden alle am All-in beteiligten Hände in der Regel offen hingelegt, sobald keine Einsätze mehr möglich sind. In Cash Games gilt zuerst die übliche [Showdown-Regel des letzten Aggressors](/de/blog/holdem-showdown-rules), danach zeigen die All-in-Spieler.
2. **Side Pots werden zuerst vergeben.** Der Dealer löst den zuletzt entstandenen Side Pot zuerst auf und arbeitet sich dann rückwärts bis zum Main Pot vor.
3. **Cards speak — die Karten sprechen.** Die beste Hand gewinnt jeden Pot, für den sie berechtigt ist — egal, was die Spieler ansagen.
4. **Mehrere Gewinner sind möglich.** Spieler A kann den Main Pot gewinnen und Spieler B den Side Pot. Keiner bekommt alles, nur weil er „seinen“ Pot gewonnen hat.

==g:Ein Spieler kann den Main Pot gewinnen und gleichzeitig den Side Pot verlieren. Beide Ergebnisse sind völlig regulär.==

**Sonderfall:** Bleibt in einem Side Pot nur ein einziger Spieler übrig (alle anderen haben gefoldet), bekommt dieser Spieler die Chips sofort zurück — für diesen Pot ist kein Showdown nötig.

---

## Was passiert, wenn du das All-in falsch spielst? — 5 Fehler, die du vermeiden musst

### Fehler 1: Glauben, der All-in-Spieler könne den Side Pot gewinnen
Kann er nicht. Sobald der All-in-Spieler gedeckelt ist, gehören alle zusätzlichen Chips der größeren Stacks zu einem Pot, auf den er keinerlei Anspruch hat.

### Fehler 2: Die Re-Raise-Regel nicht kennen
Ein Teil-All-in von Spieler C gibt Spieler A keine zweite Chance zum Re-Raise. Wer diese Regel sicher beherrscht, erstickt Streit, bevor er entsteht.

### Fehler 3: Mitten in der Hand Chips aus der Tasche nachlegen
Table Stakes. Was auf dem Tisch liegt, ist alles, was du setzen kannst. Bist du für $80 All-in und der Pot beträgt $400, kannst du von jedem Caller trotzdem nur $80 gewinnen.

### Fehler 4: Die Hand zu schnell mucken
Du bist für den Main Pot All-in. Zwei andere Spieler kämpfen um den Side Pot. Muck nicht — deine Hand ist für den Main Pot noch live. ==Warte immer, bis der Dealer jeden Pot aufgelöst hat, bevor du deine Karten anfasst.==

### Fehler 5: Aus Frust All-in gehen
Das All-in ist der mächtigste Zug am Tisch. Es zwingt Gegner in Alles-oder-nichts-Entscheidungen. Diese Macht verpufft, wenn du wahllos alles reinschiebst. Setz es im richtigen Moment ein — als Shortstack-Druckmittel, mit Value-Händen, die gecallt werden sollen, oder als Bluff mit echter Fold Equity.

---

:::readnext[Weiterlesen]
/de/blog/texas-holdem-rules-for-beginners | Texas Hold'em Regeln für Anfänger | /images/rules-texas-holdem.webp
/de/blog/holdem-showdown-rules | Showdown-Regeln erklärt | /images/holdem-showdown-rules-hero.webp
:::

## Häufige Fragen

**Q. Kann man für weniger als den Big Blind All-in gehen?**

A. Ja. Sitzt du mit weniger Chips als dem Big Blind am Tisch, bist du automatisch für alles All-in, was du hast, sobald die Blinds zu dir kommen. Die anderen Spieler zahlen weiterhin den vollen Big Blind — alles über deinem Beitrag wandert in einen Side Pot.

**Q. Was passiert, wenn du das All-in gewinnst, aber den Side Pot verlierst?**

A. Du bekommst den Main Pot (das, was du von jedem Spieler gematcht hast), und der andere Spieler bekommt den Side Pot. Jeder gewinnt den Anteil, für den er berechtigt war.

**Q. Müssen beim All-in die Karten gezeigt werden?**

A. In Turnieren ja — sobald mit einem All-in keine Einsätze mehr möglich sind, werden alle beteiligten Hände in der Regel offen hingelegt. In Live-Cash-Games gelten die üblichen Showdown-Regeln: Der letzte Aggressor zeigt zuerst, danach zeigen oder mucken die anderen.

**Q. Kann man bei einem Poker-All-in „run it twice“ spielen?**

A. Run it twice (die restlichen Gemeinschaftskarten zweimal austeilen und den Pot aufteilen) ist in vielen Cash Games erlaubt, wenn beide Spieler nach dem All-in zustimmen. In Turnieren ist es in der Regel nicht erlaubt. Die Option muss vereinbart werden, bevor die restlichen Gemeinschaftskarten ausgeteilt werden.

**Q. Was genau ist die „Table-Stakes“-Regel?**

A. Table Stakes bedeutet: Du darfst nur Chips setzen, die zu Beginn der Hand vor dir lagen. Während einer laufenden Hand kannst du kein Geld nachlegen. Das schützt beide Seiten — du kannst nie gezwungen werden, mehr als deinen Stack zu riskieren, und Gegner können nicht plötzlich mehr setzen, als du abdecken kannst.

**Q. Wenn zwei Spieler für unterschiedliche Beträge All-in gehen — wer zeigt zuerst?**

A. Das letzte All-in gilt als letzte aggressive Aktion. Es gelten die üblichen Showdown-Regeln: Der Spieler mit dem letzten All-in bzw. der letzten aggressiven Aktion zeigt zuerst. In Cash Games darf der Caller bei einem gecallten All-in ohne weitere Action mucken, wenn er nach dem Aufdecken der All-in-Hand verloren hat (in Turnieren bleiben alle beteiligten Hände offen).

**Q. Unterscheiden sich die All-in-Regeln zwischen Turnier und Cash Game?**

A. Die Kernregeln sind identisch, aber es gibt zwei praktische Unterschiede. Erstens: In Turnieren werden alle am All-in beteiligten Hände offen hingelegt, sobald keine Einsätze mehr möglich sind (TDA-Regel 16) — mucken vor dem Showdown ist nicht erlaubt. In Cash Games gilt die übliche Showdown-Reihenfolge, und Spieler dürfen mucken. Zweitens: Run it twice ist in Cash Games verbreitet (wenn beide Spieler zustimmen), in Turnieren aber grundsätzlich nicht gestattet.

---

## Verwandte Artikel

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Grundlagen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Regeln für Anfänger</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle Regeln von den Blinds bis zum Showdown</div>
  </a>
  <a href="/de/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Showdown-Regeln</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wer zuerst zeigt und wann du mucken darfst</div>
  </a>
</div>
`.trim(),
};
