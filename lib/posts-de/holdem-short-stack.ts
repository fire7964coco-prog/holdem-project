import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-short-stack",
  title: "Short Stack spielen im Poker — Push/Fold-Strategie nach Stacktiefe",
  seoTitle: "Short Stack spielen: Push/Fold einfach erklärt",
  desc: "Short Stack im Turnier? Lerne Push/Fold nach Stacktiefe — wann du bei 15, 10 und 5 Big Blinds shovst, die M-Ratio-Zonen und der ICM-Twist an der Bubble.",
  tldr: "Ein Short Stack (grob unter 15–20 Big Blinds) kann kein normales Postflop-Poker mehr spielen, also wechselt er zu Push/Fold: geh first-in all-in, um deine Fold Equity zu behalten, und limpe oder min-raise-fold nie. Shove von Late Position weiter, halte deine Calling-Range enger als deine Shoving-Range, und blinde nicht auf null herunter, während du \"auf eine Hand wartest\" — deine Fold Equity ist die Waffe, und sie verschwindet unter etwa 8 Big Blinds.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 Min.",
  emoji: "📉",
  image: "/images/holdem-short-stack-hero.webp",
  imageAlt: "Ein kleiner Stack Turnierchips neben einem großen Stack auf grünem Filz, dahinter eine Turnieruhr — der Moment, in dem ein Short-Stack-Spieler all-in gehen oder folden muss",
  tags: ["short stack strategie", "short stack spielen", "push fold strategie", "push fold chart", "m ratio poker", "short stack poker", "poker all in strategie", "fold equity"],
  content: `
Am schnellsten ging ich einmal von "noch dabei" zu "raus" an einem Abend, an dem ich einen Stack von 12 Big Blinds immer wieder min-raiste, jedes Mal auf den Re-Raise foldete und pro Orbit anderthalb Blinds ausblutete, bis ich zu kurz war, um noch jemanden zu erschrecken. Als ich endlich shovte, hatte ich vier Big Blinds und wurde von zwei Spielern gecallt. ==Ich hatte kein Pech — ich spielte einen Short Stack, als wäre er ein Deep Stack.== Sobald dein Stack klein wird, ändert sich das gesamte Spiel, und die Spieler, die die neuen Regeln kennen, beherrschen den Tisch.

==Ein Short Stack hat eine Aufgabe: geh zuerst all-in, behalte deine Fold Equity und wähle den richtigen Moment, bevor die Blinds ihn für dich wählen.== Das ist Push/Fold-Poker, und es ist die am leichtesten lernbare Edge in Turnieren — ein sauberer Satz Regeln, den du in dem Moment anwenden kannst, in dem dein Stack fällt. Diese Anleitung ist das Action-Kapitel der Turniermathe-Trilogie: [ICM](/de/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") ist die Theorie, [die Bubble](/de/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") ist der Spot, und Short-Stack-Play sind die Moves, die du im [Turnier](/de/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") tatsächlich machst.

---

### Short-Stack-Regeln auf einen Blick

:::stripe
shove first-in | behalte deine Fold Equity
calle enger | als du shovst
~8bb | Fold Equity schwindet darunter — handle früher
:::

---

## Was ist ein Short Stack im Poker? (Und wie viele Big Blinds)

**Ein Short Stack ist jeder Stack, der zu klein für normales Postflop-Poker ist — grob unter etwa 20–25 Big Blinds, wobei Push/Fold ab rund 15 Big Blinds abwärts übernimmt.** Das sind keine harten Grenzen; es sind die Zonen, in denen deine Optionen zusammenbrechen. Mit 60 Big Blinds kannst du raisen, callen, floaten und Leute nach dem Flop überspielen. Mit 12 verschwindet das meiste davon — du entscheidest, meist schon vor dem Flop, ob du all-in gehst oder foldest.

Hier ist die praktische Landkarte nach Stacktiefe (No-Ante-, Full-Ring-Näherungen — Antes drücken jedes Band ein wenig tiefer):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stack | Spielweise | Deine Hauptwaffe |
|:--|:--|:--|
| 25bb+ | Noch ein echtes Postflop-Spiel — raise/fold, gelegentlich Calls | Playability |
| 20bb | Raise-or-Fold; re-shove all-in über Opens und Limper | Re-Jam-Leverage |
| 15bb | Push/Fold übernimmt — first-in Jams, meist von Late Position | Fold Equity |
| 10bb | Reines Push/Fold; shove eine weite, vernünftige Range first-in | Fold Equity (noch stark) |
| ≤5bb | Shove-or-Fold jetzt — Fold Equity schwindet, bring es rein | Jede spielbare Hand, schnell |

</div>

Der mit Abstand größte Fehler ist, nicht zu wissen, in welcher Zeile du bist. Ein Stack von 12 Big Blinds, der immer weiter openraist und foldet, spielt das 40-Big-Blind-Spiel und verliert jeden Orbit ein wenig, bis er die ≤5bb-Zeile ohne verbliebene Leverage ist.

---

## Warum Short Stacks Push/Fold spielen: Fold Equity erklärt

**First-in all-in zu gehen funktioniert, weil es Gegner in eine Alles-oder-nichts-Entscheidung zwingt, sodass sie Hände folden, die sie gegen einen kleinen Raise gern gespielt hätten — und diese Folds gewinnen dir die Blinds und Antes gratis.** Das ist ==Fold Equity==: der Profit, den du jedes Mal machst, wenn alle folden, bevor eine Karte gezeigt wird.

Überleg mal, was ein Min-Raise bewirkt, wenn du kurz bist: er committet Chips, lädt zu einem Re-Raise ein, den du nicht callen kannst, und lässt Gegner ihre Equity billig realisieren. Ein ==Shove== macht das Gegenteil. Er sagt "calle um dein Turnier oder folde", und die meisten Hände folden. Wenn du die Blinds und Antes oft genug ungestört einsammelst, ==machst du sogar dann Profit, wenn du gecallt wirst und verlierst==, weil die freien Pots das mehr als ausgleichen.

Der Haken ist, dass Fold Equity ==abnimmt, während dein Stack schrumpft==. Bei 12–15 Big Blinds folden Gegner viel — dein Shove ist beängstigend. Sie beginnt bei etwa 8–10 Big Blinds zu schwinden, und bei 4–5 bekommen sie einen so guten Preis, dass sie mit fast allem callen — deine Fold Equity ist fast weg. Genau das ist der Grund, nicht zu warten: ==shove, solange dein All-in Leute noch erschreckt==, nicht danach.

---

![Ein kleiner Chipstack geht über den Filz all-in, während ein größerer Stack entscheidet, ob er callt, dahinter leuchtet die Turnieruhr](/images/holdem-short-stack-shove.webp "Short-Stack-Push/Fold: das All-in erzwingt eine Ja-oder-Nein-Entscheidung und gewinnt die Blinds, wenn alle folden")

## Die M-Ratio (Harrington-Zonen): Grün, Gelb, Orange, Rot, Tot

**Die M-Ratio misst, wie viele Orbits du durch Folden überleben kannst — dein Stack geteilt durch die Kosten einer vollen Runde Blinds und Antes — und sie sortiert deinen Stack in fünf Zonen.** Populär gemacht von Dan Harrington, ==M = dein Stack ÷ (Small Blind + Big Blind + alle Antes pro Orbit)==. Sie beantwortet "wie lange kann ich hier sitzen und nichts tun?" — und je kleiner sie wird, desto mehr musst du handeln.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Zone | M-Ratio | Grob (ohne Antes) | Spielweise |
|:--|:--:|:--:|:--|
| 🟢 Grün | 20+ | ~30bb+ | Volles Arsenal, spiel normales Poker |
| 🟡 Gelb | 10–20 | ~15–30bb | Zieh dich zusammen, halte nach Shoves Ausschau |
| 🟠 Orange | 6–10 | ~9–15bb | Push/Fold; first-in Aggression, stiehl Blinds |
| 🔴 Rot | 1–5 | ~1,5–8bb | Shove-or-Fold jede vernünftige Hand |
| ⚫ Tot | unter 1 | unter ~1,5bb | Shove any two cards, nächster spielbarer Spot |

</div>

**Wie M auf Big Blinds abbildet:** ohne Antes kostet ein Orbit den Small Blind plus den Big Blind — etwa 1,5 Big Blinds — also ==M ≈ dein Stack in Big Blinds ÷ 1,5==. Ein M von 10 sind grob 15 Big Blinds; ein M von 5 sind grob 7–8. Füge Antes hinzu und jeder Orbit kostet mehr, also hat derselbe Big-Blind-Stack ein *niedrigeres* M — genau deshalb erzwingen Ante-Level früher Action. Moderne Spieler zählen meist einfach Big Blinds, aber M ist dieselbe Idee in einer anderen Einheit, und sie erfasst Antes automatisch. Harrington fügte später "effektives M" hinzu (angepasst daran, wie viele Spieler am Tisch sind), da ein Short-Handed-Tisch dich schneller ausblindet.

---

## Wann all-in gehen: First-in-Shoving nach Stacktiefe und Position

**Wenn du der erste Spieler im Pot und kurz bist, lautet deine Entscheidung Shove oder Fold — und wie weit du shovst, hängt von deiner Stackgröße und, genauso stark, von deiner Position ab.** Je später deine Position, desto weniger Spieler sind hinter dir übrig, die mit einer großen Hand aufwachen könnten, und desto mehr sind die Blinds relativ zu deinem Stack wert — also ==weitet sich deine Shoving-Range Richtung Button dramatisch==.

- **Early Position, 12–15bb:** am engsten. Du hast den ganzen Tisch hinter dir, also jamme eine starke, meist lineare Range und folde den Rest.
- **Cutoff und Button, 10–15bb:** viel weiter. Mit einem oder zwei Spielern, die noch handeln, shovst du, um die Blinds und Antes zu stehlen, und kannst viele Hände jammen, die Under the Gun ein leichter Fold wären.
- **Small Blind, jeder Short Stack:** am weitesten von allen first-in — nur der Big Blind kann callen, und du hast schon Geld im Pot. Als Short Stack im Small Blind ist Folden oft der Fehler.
- **Unter ~6bb:** Position zählt weniger. Du musst deine Chips gegen fast jeden reinbekommen, bevor deine Fold Equity verschwindet; nimm den nächsten vernünftigen Spot, statt auf einen perfekten zu warten.

Achte auf die Falle, die das vermeidet: ==ein Short Stack, der aus jeder Position nur Premiumhände shovt, blindet aus==. Die Blinds und Antes sind der Preis, und sie zu stehlen ist der Großteil des Profits eines Short Stacks.

---

## Shoving vs. Calling eines Shoves: Zwei verschiedene Ranges

**Deine First-in-Shoving-Range und deine Range zum Callen des All-ins eines anderen sind nicht dasselbe — und die Calling-Range ist deutlich enger.** Das ist die Unterscheidung, die die meisten Anfänger übersehen, und sie kostet viele Turniere.

Wenn du ==first-in shovst==, gewinnst du auf zwei Wegen: alle folden (Fold Equity), oder du wirst gecallt und deine Hand hält. Wenn du einen Shove ==callst==, gewinnst du nur auf einem Weg — deine Hand muss gut genug sein, weil keine Fold Equity mehr zu holen ist. Also:

- **First-in shoven:** weit, besonders late — du spielst teilweise auf den Fold.
- **Einen Shove callen:** eng — du brauchst eine Hand, die die *Range* des Shovers schlägt, nicht nur eine zufällige Hand. Mit Händen wie einem schwachen Ass oder einem kleinen Paar zu callen, "weil es wahrscheinlich ein Coinflip ist", ist ein klassischer Leak, denn ein Coinflip um dein Ausscheiden ist in einem Turnier ein schlechter Deal (siehe [wann folden](/de/blog/holdem-when-to-fold)).

Eine Zeile zum Merken: ==sei der, der shovt, nicht der, der callt.== First-in-Aggression ist, wo der Short-Stack-Profit lebt; das Hero-Callen von All-ins ist, wo Short Stacks sterben.

---

## Wie man ein Push/Fold-Chart nutzt (und seine Grenzen)

**Push/Fold-Charts zeigen, welche Hände du bei einer bestimmten Stacktiefe jammst oder callst, basierend auf dem Nash-Gleichgewicht — aber sie sind eine Grundlage, kein Evangelium, und sie verschieben sich mit Antes, Tischgröße und ICM.** Ein Chart kommt meist in zwei Hälften: ein **Pusher**-Chart (was du first-in shovst) und ein **Caller**-Chart (womit du einen Shove callst), passend zum Shove-vs-Call-Split oben.

Nutze sie, um Intuition aufzubauen, nicht als Naturgesetz:

- **Sie setzen bestimmte Bedingungen voraus.** Standard-Nash-Charts ignorieren Antes und ICM; füge Antes hinzu und deine Shoves werden weiter, füge [Bubble-/ICM-Druck](/de/blog/holdem-bubble) hinzu und deine Calls werden viel enger.
- **Es ist ein Heads-up-/Blinds-only-Modell.** Echte Spots haben mehrere Spieler, die noch handeln, Reads und Pay Jumps, die ein Chart nicht sehen kann.
- **Die verlässliche Erkenntnis ist die Form**, nicht die exakte Hand: shove weiter late, calle enger als du shovst, und jamme mehr, während dein Stack fällt. Für die tatsächliche Zahl in einem echten ICM- oder Bubble-Spot steck deine Stacks und Auszahlungen in den [ICM-Rechner](/calculator), statt einer gedruckten Range zu vertrauen.

*(Eine Nuance für Neugierige: bei 10–15 Big Blinds mischen starke Spieler manchmal einen kleinen Min-Raise mit Premiumhänden ein, um Shoves aus dominierten Händen zu induzieren. Das kann reines Jammen übertreffen — aber es ist ein fortgeschrittenes Add-on. Push/Fold ist das verlässliche Framework; beherrsche es zuerst.)*

---

## Short Stack an der Bubble: Der ICM-Twist

**Hier kommt der kontraintuitive Teil: an der Bubble hat ein klarer Short Stack oft einen niedrigeren Bubble-Faktor als ein Medium Stack — du kannst also mehr zocken, aber nur durch Shoven, nicht durch Callen.** Jeder nimmt an, der Short Stack stehe am meisten unter Druck. Laut Mathematik tut er das nicht: du wirst wahrscheinlich ohnehin bald busten, und ein Double-up hilft dir enorm, also ist deine Risikoprämie niedriger als die der eingesperrten Medium Stacks (der [Bubble-Guide](/de/blog/holdem-bubble) erklärt, warum der Medium Stack der wahre Gefangene ist).

Was das in der Praxis bedeutet:

- **Shove weiter first-in**, um von den Medium Stacks zu stehlen, die alles folden, um zu überleben — sie sind die perfekten Ziele.
- **Du kannst warten, wenn andere kürzer sind.** Wenn zwei Spieler an der Money-Bubble weniger Chips haben als du, kannst du marginale Spots folden und sie zuerst busten lassen, um dich gratis nach oben zu laddern — aber nur, wenn du tatsächlich Chips zum Warten hast, nicht wenn du der Kürzeste bist.
- **Mach ICM nicht zur Ausrede, alles zu folden.** Auf null Fold Equity herunterzublinden, um "dich in den Min-Cash zu schleichen", tauscht das Turnier gegen seinen kleinsten Preis ein. Respektiere den Pay Jump, dann geh zurück ans Akkumulieren.

Die echte Mathematik hinter "wie viel niedriger ist mein Bubble-Faktor" steckt im [ICM-Guide](/de/blog/holdem-icm) — lass deinen genauen Spot durch den [Rechner](/calculator) laufen, wenn es zählt.

---

## Die 5 Short-Stack-Fehler, die dein Turnier killen

1. **Open-Limpen.** Es gibt deine Fold Equity auf und bläht einen Pot auf, den du postflop nicht spielen kannst. Short Stacks raisen oder folden — und meist ist dieser Raise ein Shove.
2. **Min-raise-then-Fold mit Junk.** Ein Viertel deines Stacks zu raisen und auf einen Shove zu folden ist das Schlechteste aus beiden Welten. Wenn eine Hand nicht gut genug ist, um all-in zu gehen, ist sie nicht gut genug, um zu raisen.
3. **All-ins zu weit callen.** Deine Calling-Range muss enger sein als deine Shoving-Range. "Es ist wahrscheinlich ein Flip" ist, wie Short Stacks busten — ein Flip ums Ausscheiden ist ein verlierender Deal.
4. **Auf null herunterblinden.** Auf Asse zu warten, bis du drei Big Blinds hast, wirft die Fold Equity weg, die Shoven profitabel macht. Handle, solange dein All-in Leute noch erschreckt (üblicherweise, bevor du unter ~8–10bb fällst).
5. **Position ignorieren.** Nur Premiums vom Button zu jammen oder Under the Gun zu weit zu shoven, beide leaken Chips. Weite late, verenge early.

Vermeide diese fünf und du schlägst schon den Großteil des Feldes, das einen Short Stack wie einen Deep Stack behandelt — bis genau in dem Moment, in dem sie busten.

---

:::readnext[Weiterlesen]
/de/blog/holdem-bubble | Wie du die Bubble spielst | /images/holdem-bubble-hero.webp
/de/blog/holdem-icm | ICM erklärt — warum Chips kein Geld sind | /images/holdem-icm-hero.webp
:::

## FAQ

**Q. Wie viele Big Blinds ist ein Short Stack?**

A. Grob ist alles unter etwa 20–25 Big Blinds "short", und Push/Fold-Play übernimmt ab rund 15 Big Blinds abwärts, wird bei 10 nahezu reines Shove-or-Fold. Das sind Zonen, keine harten Regeln — Antes, Tischgröße und ICM verschieben sie alle. Der Kernpunkt ist, dass du unter ~15 Big Blinds meist entscheidest, ob du vor dem Flop all-in gehst, statt Postflop-Poker zu spielen.

**Q. Was ist die Push/Fold-Strategie?**

A. Push/Fold ist Short-Stack-Strategie, bei der du, wenn du first-in im Pot bist, nur die Optionen hast, all-in zu gehen oder zu folden — kein Limpen, keine kleinen Raises. Shoven behält deine Fold Equity (Gegner folden und du gewinnst die Blinds) und vermeidet, mit einem zu kleinen Stack nach dem Flop überspielt zu werden.

**Q. Sollte man mit einem Short Stack jemals limpen?**

A. Fast nie, wenn du first-in bist. Open-Limpen gibt Fold Equity auf und baut einen Pot auf, den du postflop nicht navigieren kannst. Als Short Stack ist der Standard Raise-or-Fold, und mit 15 Big Blinds oder weniger ist dieser Raise meist ein All-in. (Vom Small Blind hinter anderen Limpern mit einem winzigen Stack zu completen, ist eine seltene Ausnahme.)

**Q. Ist Min-Raisen jemals richtig als Short Stack?**

A. Als Anfänger-Default nein — min-raise-then-Fold ist ein klassischer Leak. Als fortgeschrittener Move bei 10–15 Big Blinds min-raisen starke Spieler manchmal Premiumhände, um Shoves aus schlechteren zu induzieren. Lerne zuerst verlässliches Push/Fold; füge die Min-Raise-Falte erst hinzu, wenn das automatisch sitzt.

**Q. Was ist die M-Ratio im Poker?**

A. Die M-Ratio ist dein Stack geteilt durch die Kosten eines Orbits (Small Blind + Big Blind + Antes) — wie viele Runden du durch Folden überleben kannst. Harringtons Zonen sind Grün (20+), Gelb (10–20), Orange (6–10), Rot (1–5) und Tot (unter 1). Je niedriger dein M, desto mehr Shove-or-Fold-Spots musst du nehmen. Ohne Antes ist M grob deine Big Blinds ÷ 1,5.

**Q. Was ist Fold Equity und warum schrumpft sie?**

A. Fold Equity ist der Profit, den du machst, wenn Gegner auf deine Bet oder deinen Shove folden. Wenn du kurz bist und all-in gehst, ist Fold Equity deine Hauptwaffe — die freien Blinds und Antes, die du einsammelst. Sie schrumpft, während dein Stack fällt, weil Gegner einen besseren Preis zum Callen bekommen; unter etwa 5 Big Blinds callen sie so weit, dass dein All-in kaum noch jemanden zum Folden bringt.

**Q. Ist die Short-Stack-Strategie in Cash Games anders?**

A. Ja. In einem Cash Game kannst du jederzeit rebuyen oder auf einen vollen Stack auffüllen, und es gibt meist keine Antes oder Pay Jumps, also ist kurz zu sein ein temporärer Zustand, den du durch Nachladen behebst — keine Spielweise. Turnier-Short-Stack-Push/Fold existiert, weil du spät nicht rebuyen kannst und ICM Überleben wertvoll macht. Diese Anleitung handelt von Turnieren.

---

## Die 3 Dinge, die du dir merken solltest

1. **Shove first-in und behalte deine Fold Equity.** Open-limpe oder min-raise-fold nie. Die freien Blinds und Antes sind der Großteil des Profits eines Short Stacks.
2. **Calle enger als du shovst.** Zwei verschiedene Ranges — First-in-Shoves sind weit (du gewinnst auch, wenn sie folden); Calls sind eng (du gewinnst nur am Showdown).
3. **Handle, bevor deine Fold Equity stirbt.** Blinde nicht auf null herunter, während du auf eine Hand wartest. Weite deine Shoves late, verenge early, und bring es rein, solange dein All-in Leute noch erschreckt.

Short-Stack-Play ist, wo Turniermathe zu Muskelgedächtnis wird — kombiniere es mit [ICM](/de/blog/holdem-icm) und [Bubble-Strategie](/de/blog/holdem-bubble), um nicht nur zu wissen, *wie* du shovst, sondern *wann* es am meisten zählt.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-bubble" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wie du die Bubble spielst</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Wo deine Short-Stack-Shoves am meisten zählen</div>
  </a>
  <a href="/de/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum Überleben Chips schlagen kann</div>
  </a>
  <a href="/de/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wann im Poker folden</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum kurz abzucallen ein Leak ist</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kostenloses Tool</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM-Rechner</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Berechne deinen echten Shove/Call-Spot</div>
  </a>
</div>
`.trim(),
};

export default POST;
