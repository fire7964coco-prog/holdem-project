import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bubble",
  title: "Bubble im Poker spielen — Strategie für Big, Medium & Short Stack",
  seoTitle: "Bubble Poker richtig spielen (Stack für Stack)",
  desc: "An der Bubble schlägt Überleben Chips — der richtige Zug kippt. Wie du Big, Medium und Short Stack spielst, plus Bubble Factor, Satellites und Hand for Hand.",
  tldr: "Die Bubble ist der Moment kurz vor dem Geld, wo eine weitere Elimination allen anderen auszahlt. Weil ein Bust nichts bringt, ist Überleben mehr wert als die Chips, die du gewinnen würdest — Calling Ranges ziehen sich hart zusammen, während Shoves weit bleiben. Big Stacks attackieren, Medium Stacks sitzen am meisten in der Falle (nicht die Short Stacks), und an einer Satellite-Bubble foldest du alles, sogar Asse, sobald dein Platz gesichert ist.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 Min.",
  emoji: "🫧",
  image: "/images/holdem-bubble-hero.webp",
  imageAlt: "Ein kleiner Chip-Stack und ein turmhoher Big Stack gegenüber am Turniertisch an der Money Bubble, im Hintergrund eine Payout-Leiter — der Moment, in dem Überleben mehr wert wird als Chips",
  tags: ["poker bubble", "bubble poker spielen", "bubble strategie poker", "bubble factor", "short stack bubble", "money bubble", "satellite bubble", "hand for hand poker"],
  content: `
Am diszipliniertesten habe ich je gespielt, als wir drei Spieler vor dem Geld waren in einem Freitagsturnier, alle foldeten, als würden die Karten brennen. Ich hatte einen Medium Stack und open-foldete zweimal Ass-Bube — Hände, die ich im Cash Game jedes Mal raisen würde. Zwei Orbits später bustete der Short Stack, ich limpte in den Min-Cash… und wurde 14., für einen Payout knapp über meinem Buy-in. ==Ich habe mich aus jedem echten Geld "überlebt".== Das ist die Bubble in einer Geschichte: Spielst du sie zu ängstlich, sicherst du dir Peanuts; spielst du sie richtig, ist es genau hier, wo Turniere tatsächlich gewonnen werden.

==An der Bubble zahlt ein weiterer Bust allen anderen aus — für ein paar entscheidende Hände ist Am-Leben-bleiben also mehr wert als die Chips, die du gewinnen könntest.== Diese eine Tatsache stellt normales Poker auf den Kopf, und fast jeder macht es auf dieselben zwei Arten falsch: Die Big Stacks attackieren nicht genug, und die Medium Stacks callen viel zu oft. Dieser Guide ist das Playbook Stack für Stack — was du mit einem Big, Medium oder Short Stack machst, über die drei verschiedenen Bubbles, denen du begegnest.

Wenn du die Mathematik dahinter willst, *warum* Chips hier aufhören, gleich Geld zu sein, das ist [ICM](/de/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") — dieser Guide ist der Ort, wo diese Theorie am [Turnier](/de/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp")tisch zu Folds und Shoves wird.

---

### Die Bubble auf einen Blick

:::stripe
1 Bust | zahlt allen anderen aus — Überleben steigt sprunghaft im Wert
Calls tighter | Shoves weit halten
Medium Stack | am meisten in der Falle, nicht der Short Stack
:::

---

## Was ist die Bubble im Poker? (Und "an der Bubble")

**Die Bubble ist der Moment kurz vor dem Geld — der Punkt, an dem eine weitere Elimination jeden, der noch sitzt, in die bezahlten Plätze bringt.** Zahlt ein Turnier die Top 27, ist die Bubble bei ==28 verbliebenen Spielern== erreicht: Bustest du jetzt, bekommst du nichts; überlebst du eine weitere Elimination, ist dir ein Cash garantiert.

Ein paar Begriffe, die du hören wirst:

- ==**An der Bubble**== — das Turnier ist eine (oder ein paar) Eliminationen vom Geld entfernt. Das Spiel verlangsamt sich auf ein Kriechtempo.
- ==**Bubble Boy**== — der Pechvogel, der einen Platz vor dem Geld bustet und nichts gewinnt. Niemand will diesen Titel.
- ==**Stone Bubble** (oder Hard Bubble)== — die eine Elimination, die die Bubble platzen lässt und allen Verbliebenen auszahlt. Bei einer echten Stone Bubble ist allen verbliebenen Spielern Geld garantiert, sobald ein Spieler bustet.

Die Bubble ist deshalb so wichtig, weil Turnier-Payouts ==top-heavy== sind. Der Sprung von *nichts* zu einem Min-Cash ist der größte prozentuale Sprung in der gesamten Payout-Struktur, und genau deshalb überwiegt Überleben plötzlich das Chip-Sammeln — aber nur für ein kurzes, intensives Fenster.

---

## Warum die Bubble alles ändert: ICM in einem Absatz

**Weil Turnierchips kein Geld sind — du gewinnst nur einen ersten Preis, also sind die Chips, die einen garantierten Cash schützen, mehr wert als die Chips, die nach mehr greifen.** Das ist das Independent Chip Model, und nahe eines Pay Jumps bedeutet es, dass ==das Risiko zu busten die Belohnung überwiegt, einen Coin Flip zu gewinnen==. Ein Call, der in Chips break-even ist, kann in echten Dollars ein Verlustzug sein.

Du musst die Mathematik nicht live durchrechnen — dafür ist unser [ICM-Rechner](/calculator) da, und die volle Aufschlüsselung steht im [ICM-Guide](/de/blog/holdem-icm). Was am Tisch zählt, ist die Konsequenz: ==Calls werden viel tighter, aber Shoves bleiben weit==, weil Gewinnen ohne Showdown (Fold Equity) mehr wert ist als je zuvor, wenn alle anderen ängstlich spielen. Merke dir eine Zeile: **ziehe deine Calls zusammen, bevor du deine Shoves zusammenziehst.**

---

## Die 3 Bubbles, denen du begegnest: Money vs Final-Table vs Satellite

**Nicht alle Bubbles sind gleich — die Money Bubble, die Final-Table-Bubble und die Satellite-Bubble belohnen völlig verschiedene Strategien.** Sie zu verwechseln ist einer der teuersten Fehler im Turnierpoker.

- ==**Money Bubble**== — der Sprung von nichts zu einem Min-Cash. Die Überlebensprämie ist hoch, aber der Min-Cash ist klein, also willst du trotzdem für die Top-Preise *akkumulieren*. Übe Druck aus, versteck dich nicht nur.
- ==**Final-Table-Bubble**== — ein Platz vom Final Table entfernt. Der ICM-Druck ist hier meist am ==extremsten im gesamten Turnier==, weil jetzt die größten Preise im Spiel sind. Short Stacks haben am meisten von einem Deep Run zu gewinnen; ein Big Stack mit 9 Spielern am Tisch ist wohl der beste Platz im ganzen Event.
- ==**Satellite-Bubble**== — der Sonderfall. Jeder qualifizierende Platz zahlt ==exakt gleich==. Sobald dein Stack groß genug ist, um sicher zu sein, sind zusätzliche Chips *nichts* wert — also wird der korrekte Zug fast das Gegenteil einer normalen Bubble (mehr zur "Asse folden"-Regel unten).

Behalte diese Unterscheidung im Kopf, denn der Rat Stack für Stack, der jetzt folgt, verschiebt sich je nachdem, an welcher Bubble du bist.

---

![ICM-Druck-Infografik — ein turmhoher Big-Chip-Stack ragt über einem Short Stack an der Money Bubble](/images/holdem-bubble-pressure.webp "An der Bubble lässt der ICM-Druck den Big Stack attackieren — Überleben ist mehr wert als die Chips in der Mitte")

## Wie du einen BIG Stack an der Bubble spielst

**Attackiere unerbittlich — du hast die niedrigste Risikoprämie am Tisch, und alle anderen müssen deine Chips respektieren.** Der Big Stack ist der größte Profiteur der Bubble. Du kannst jeden busten; niemand kann dich busten. Also mach Druck:

- **Open wide und [3-bette](/de/blog/holdem-3bet) light**, besonders gegen die Medium Stacks zu deiner Rechten, die nicht callen können, ohne ihr Turnier zu riskieren.
- **Ziele auf Medium Stacks, nicht auf die kürzesten Stacks.** Das ist die entscheidende Nuance: Short Stacks callen dich eher (sie haben weniger zu verlieren), und einen zu verdoppeln ist eine Katastrophe. Bully die Spieler, die ==am meisten Angst vorm Busten== haben — die Mediums.
- **Übertreib es nicht.** Druck ausüben heißt stehlen und auf Widerstand folden, nicht deinen Stack in Calls verspewen. Wenn ein tighter Medium Stack endlich shoved, respektiere es.

Richtig gespielt kann ein Big Stack an der Bubble Chips drucken, ohne je eine Hand zum Showdown zu bringen.

---

## Wie du einen MEDIUM Stack an der Bubble spielst

**Der Medium Stack ist der Platz mit den meisten Fallen am Tisch — und das ist die Tatsache, die fast jeder Artikel falsch macht.** Die Leute nehmen an, der Short Stack fühle den meisten Druck. Nach der tatsächlichen Mathematik (Bubble Factor) ist es der ==Medium Stack==, der am eingeschränktesten ist: groß genug, um echte Prize Equity zu verlieren, nicht kurz genug, um Zocken zu rechtfertigen.

Dein Playbook:

- **Ziehe deine Calling Range härter zusammen als jeder andere.** Du hast am meisten zu verlieren, wenn du off callst und bustest. Folde Hände, die du im Cash Game gern callen würdest — sogar Hände so stark wie manche Paare und große Asse gegen den Shove eines größeren Stacks.
- **Stiehl weiter von den Stacks unter dir.** Bei Calls in der Falle heißt nicht passiv. Open und übe Druck auf die kürzeren Stacks aus; vermeide nur, dich mit den Big Stacks zu deiner Linken zu verhaken.
- **Ladder-Bewusstsein, keine Angst.** Du navigierst zum Geld, aber folde dich nicht zu einem Short Stack runter und blinde aus — das tauscht eine Falle gegen eine schlimmere.

Wenn du den Schraubstock an der Bubble zugehen fühlst, bist du wahrscheinlich ein Medium Stack. Spiel die kleinstmöglichen Pötte, während du weiter runterstiehlst.

---

## Wie du einen SHORT Stack an der Bubble spielst

**Geh All-in oder folde — limpe oder calle nie off — und nutze die Tatsache, dass dein Bubble Factor tatsächlich niedriger ist als der des Medium Stacks.** Weil du ohnehin wahrscheinlich bustest, hilft dir ein Double-up enorm, also kannst du freier zocken als die Middle Stacks in der Falle. Aber du zockst, indem du ==derjenige bist, der shoved==, nicht derjenige, der callt — das volle [Push/Fold-Playbook für Short Stacks](/de/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp") deckt die Mechanik ab:

- **Shove oder Fold.** First-in-Aggression erhält deine [Fold Equity](/de/blog/holdem-when-to-fold), deine wertvollste Waffe. Open-Limpen oder Flat-Callen mit einem Short Stack wirft das weg.
- **Warte, wenn es kürzere Stacks als dich gibt.** Sind zwei Spieler kürzer, kannst du marginale Hände folden und sie zuerst busten lassen — kostenlos hochladdern. Bist *du* der Kürzeste, kannst du nicht warten; finde einen Spot und shove, bevor du ausblinest.
- **Ziel dich nicht ins Nichts.** Auf zwei Big Blinds runterzufolden "um zu überleben" ist, wie du trotzdem zum Bubble Boy wirst. Wähl eine vernünftige Shoving Range und commit.

Das Mantra des Short Stacks: Fold Equity ist alles. Shove zuerst und wähl deinen Spot, bevor die Blinds ihn für dich wählen.

---

## Bubble Factor & Risikoprämie: Die Zahl, die dir sagt, wann du folden musst

**Der "Bubble Factor" misst, wie viel mehr dich das Verlieren deines Stacks kostet, als dir das Gewinnen desselben Pots hilft — und er übersetzt sich direkt in die zusätzliche Equity, die du für einen Call brauchst.** Ein Bubble Factor von 1,0 bedeutet, Chips und Geld bewegen sich zusammen (früh im Turnier). Ein Bubble Factor von 1,5 bedeutet, dass ==Busten 1,5× so weh tut, wie Gewinnen hilft==, also brauchst du einen viel größeren Edge, um deine Chips reinzukriegen.

Hier der nützliche Teil: Die Equity, die du für einen Break-even-Call brauchst, ist einfach ==Bubble Factor ÷ (1 + Bubble Factor)==.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bubble Factor | Verlieren tut weh… | Equity für den Call |
|:--|:--:|:--:|
| 1,0 (kein Druck) | so viel wie Gewinnen hilft | 50% |
| 1,3 | 1,3× | ==57%== |
| 1,5 (Money Bubble) | 1,5× | ==60%== |
| 1,7 (Final-Table-Bubble) | 1,7× | ==63%== |
| 2,0 (extrem) | 2× | ==67%== |

</div>

Ein Chip-EV-Coin-Flip, den du bei 50% nehmen würdest, wird also zu einem ==klaren Fold==, wenn dein Bubble Factor 1,5 ist und du nur 50% hast — du brauchst jetzt 60%. Bubble Factors erreichen ihren Höhepunkt typischerweise um ==1,5–1,7== an der Money- und Final-Table-Bubble und fallen dann zurück, sobald du im Geld bist. Gib deine eigenen Stacks und Payouts in den [ICM-Rechner](/calculator) ein, um deine echte Zahl für einen Spot zu sehen.

---

## Hand for Hand und Stalling: Die Mechanik, die niemand erklärt

**Wenn das Geld nah ist, schalten Turniere auf "Hand for Hand" — jeder Tisch spielt exakt eine Hand zur gleichen Zeit und wartet dann — genau um Spieler davon abzuhalten, sich ins Geld zu stallen.** Ohne das könnten Spieler an langsamen Tischen Hand um Hand folden, während schnellere Tische durch die Bubble brennen. Hand for Hand gleicht das Feld an:

- **Wie es funktioniert:** Der Turnierdirektor pausiert die Uhr; alle Tische teilen eine Hand aus, und kein Tisch startet die nächste, bis jeder Tisch fertig ist. Busten zwei Spieler in derselben Hand-for-Hand-Runde, nimmt derjenige mit weniger Chips zu Beginn der Hand meist die niedrigere (Bubble-)Platzierung.
- **Stalling:** die volle Time Bank bei jeder Entscheidung nehmen, um weniger Hände zu sehen (und sich ins Geld zu folden). Big Stacks haben keinen Grund zu stallen — sie wollen mehr Hände zum Attackieren. Short und Medium Stacks stallen manchmal, um zu überleben, ==aber exzessives Stalling kann einen Clock-Call oder eine Penalty einbringen==, also tanke in Maßen.
- **Nutze es aus:** Weil alle anderen langsamer werden, sammelt ein Big Stack, der während Hand for Hand weiter Druck macht, Blinds und Antes fast unangefochten ein.

---

## Die Satellite-Bubble: Wann du Asse foldest

**Bei einem Satellite zahlt jeder Platz gleich — also foldest du in dem Moment, in dem dein Stack sicher innerhalb der Bubble ist, alles, inklusive Pocket Aces.** Das ist der kontraintuitivste Spot im Poker, und er ist korrekt. Wenn dir das Gewinnen eines Flips ==denselben Platz gibt, den du bereits gesichert hast==, während das Verlieren dich eliminiert, gibt es keine Belohnung und ein enormes Risiko:

- **Sobald dein Platz mathematisch sicher ist** (du bist weit genug innerhalb der Bubble, dass du nicht mehr eingeholt werden kannst), folde jede Hand — ja, sogar AA und KK — und lass die kürzeren Stacks es ausfechten.
- **Stalle jede Hand**, um diesen Stack zu bewahren. An einer Satellite-Bubble ist Stalling nicht nur toleriert, es ist optimal.
- **Die eine Ausnahme:** Calle nur, wenn das Busten des spezifischen Short Stacks, gegen den du antrittst, die Bubble *für dich* platzen ließe — d.h. seine Elimination garantiert deinen Platz.

Wenn du eine Sache aus diesem Abschnitt mitnimmst: Ein Satellite ist kein normales Turnier. Chips über der Sicherheitsschwelle sind wertlos, also spiel entsprechend.

---

## Der größte Bubble-Fehler: Für den Min-Cash spielen

**Sich zum Min-Cash zu folden fühlt sich sicher an, tauscht aber das echte Geld des Turniers gegen seinen kleinsten Preis.** Weil Payouts top-heavy sind, ist der Min-Cash ein Boden, kein Ziel — das Geld ist oben an der Leiter, und du erreichst es nur, indem du Chips hast, wenn die Bubble platzt.

Die Spieler, die Turniere gewinnen, behandeln die Bubble als ==Gelegenheit zu akkumulieren==, während alle anderen sich verstecken. Überleben zählt für ein paar Hände rund um den Pay Jump; nachdem die Bubble geplatzt ist, lässt der ICM-Druck nach, und es geht zurück zum Stack-Aufbau für den Sieg. Respektiere die Bubble — und hör auf, ängstlich zu spielen, sobald sie vorbei ist.

---

:::readnext[Weiterlesen]
/de/blog/holdem-icm | ICM erklärt — Warum Chips kein Geld sind | /images/holdem-icm-hero.webp
/de/blog/holdem-when-to-fold | Wann du im Poker folden solltest | /images/holdem-when-to-fold-hero.webp
:::

## FAQ

**Q. Was bedeutet "an der Bubble" im Poker?**

A. Es bedeutet, dass das Turnier eine oder ein paar Eliminationen vom Geld entfernt ist. Zahlen die Top 27, ist die Bubble bei 28 verbliebenen Spielern — der nächste, der rausfliegt, gewinnt nichts, und allen anderen ist ein Cash garantiert. Das Spiel wird dramatisch tighter, weil Überleben kurzzeitig mehr wert ist als Chips.

**Q. Wer ist der Bubble Boy im Poker?**

A. Der Bubble Boy ist der Spieler, der auf der letzten unbezahlten Position bustet — einen Platz vor dem Geld — und nichts gewinnt. Es ist die schlechteste Platzierung in einem Turnier: all die Stunden, kein Payout. Manche Events geben dem Bubble Boy einen kleinen Trostpreis, aber traditionell ist es null.

**Q. Was ist eine Stone Bubble im Vergleich zu einer Soft Bubble?**

A. Eine Stone Bubble (oder Hard Bubble) ist, wenn eine einzige Elimination jeden verbliebenen Spieler gleichzeitig ins Geld bringt. Eine Soft Bubble ist loser — eine Strecke von ein paar Eliminationen nahe dem Geld statt eines exakten Platzes. Die Stone Bubble erzeugt den extremsten Druck, weil ein Bust allen Verbliebenen auszahlt.

**Q. Solltest du an der Bubble folden?**

A. Du solltest *Calls* viel öfter folden als üblich, aber nicht alles — und du solltest weiter shoven und stehlen. Überleben ist nahe des Pay Jumps mehr wert als Chips, also ist off callen und busten der teure Fehler. Zieh deine Calling Range hart zusammen und halte deine First-in-Aggression weit.

**Q. Fühlen Short Stacks den meisten Bubble-Druck?**

A. Nein — das ist der verbreitete Irrtum. Nach dem Bubble Factor ist der Medium Stack am eingeschränktesten: genug Prize Equity zum Verlieren, nicht kurz genug, um Zocken zu rechtfertigen. Short Stacks haben tatsächlich einen niedrigeren Bubble Factor, weil Busten ohnehin wahrscheinlich ist und ein Double-up viel hilft, also können sie freier zocken (durch Shoven, nicht Callen).

**Q. Was ist Hand-for-Hand-Spiel?**

A. Nahe der Money Bubble spielen alle Tische exakt eine Hand gleichzeitig und warten dann, bis jeder Tisch fertig ist, bevor die nächste Hand beginnt. Es existiert, um Stalling zu verhindern — ohne es könnten Spieler an einem Tisch langsam folden, um sich ins Geld zu schleichen, während ein anderer Tisch die Bubble schneller platzen lässt.

**Q. Warum würdest du Asse an einer Satellite-Bubble folden?**

A. Weil bei einem Satellite jeder Platz gleich zahlt, also gibt dir das Gewinnen einer Hand, sobald dein Stack sicher innerhalb der Bubble ist, nichts extra (du hast deinen Platz bereits), während das Verlieren dich eliminiert. Mit allem Risiko und keiner Belohnung ist selbst Pocket Aces zu folden mathematisch korrekt.

---

## Die 3 Dinge zum Merken

1. **Überleben schlägt Chips — für ein paar Hände.** Nahe des Pay Jumps zieh deine Calls zusammen und halte deine Shoves weit. Dann geh zurück zum Akkumulieren, sobald die Bubble platzt.
2. **Der Medium Stack ist die Falle, nicht der Short Stack.** Big Stacks attackieren die Mediums; Mediums spielen winzig; Short Stacks shoven zuerst und nutzen Fold Equity.
3. **Kenne deinen Bubble-Typ.** Money-, Final-Table- und Satellite-Bubbles belohnen verschiedenes Spiel — und bei einem Satellite foldet ein sicherer Stack alles, sogar Asse.

Der Motor hinter allem ist [ICM](/de/blog/holdem-icm); die Disziplin hinter den Folds ist [zu wissen, wann man loslässt](/de/blog/holdem-when-to-fold).

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM erklärt</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Mathematik dahinter, warum die Bubble zählt</div>
  </a>
  <a href="/de/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnier</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnierstrategie</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Säule, zu der die Bubble gehört</div>
  </a>
  <a href="/de/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Wann du im Poker folden solltest</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die Disziplin, die die Bubble verlangt</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kostenloses Tool</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM-Rechner</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Finde deine echte Bubble-Factor-Zahl</div>
  </a>
</div>
`.trim(),
};

export default POST;
