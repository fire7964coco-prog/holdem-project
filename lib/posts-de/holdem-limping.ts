import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-limping",
  title: "Limpen im Poker: Warum \"nur mitgehen\" präflop meist Geld kostet",
  seoTitle: "Warum \"nur callen\" präflop dich Geld kostet — Limpen",
  desc: "Limpen heißt präflop nur den Big Blind zu callen. Warum das meist ein Fehler ist, wo es wirklich okay ist und wie gute Spieler Limper bestrafen.",
  tldr: "Limpen bedeutet, präflop in einen Pot einzusteigen, indem du nur den Big Blind callst, statt zu raisen oder zu folden. Open-Limpen (als Erster reinzugehen) ist fast immer ein Fehler — du kannst den Pot präflop nicht gewinnen, gibst die Initiative ab und gute Spieler bestrafen dich. Aber Limpen ist nicht immer falsch: den Small Blind zu completen, spekulative Hände hinter anderen Limpern zu over-limpen sowie einige Live- und Short-Stack-Situationen sind legitime Ausnahmen.",
  category: "strategy",
  date: "2026-07-05",
  updated: "2026-07-05",
  keepImagesInBody: true,
  readTime: "11 Min.",
  emoji: "🚶",
  image: "/images/holdem-limping-hero.webp",
  imageAlt: "Ein Pokerspieler schiebt leise Chips nach vorne, um präflop nur den Big Blind zu callen, während andere Spieler warten — ein passiver Limp",
  tags: ["limpen", "was ist ein limp im poker", "limpen im poker", "open limpen", "over-limpen", "limp reraise", "warum ist limpen schlecht", "wann ist limpen okay"],
  content: `
Als ich anfing zu spielen, bin ich in fast jeden Pot gelimpt. Es fühlte sich sicher an — ich sah den Flop billig, riskierte nicht viel und "hielt mir alle Optionen offen". Was mir nicht klar war: Jeder erfahrene Spieler am Tisch hatte mich in dem Moment durchschaut, in dem ich es tat. Limpen ist das deutlichste Tell in Low-Stakes-Poker dafür, dass jemand nicht ganz weiß, was er tut — und zwei Jahre lang war dieser jemand ich.

Ein **Limp** ist, wenn du vor dem Flop in einen Pot einsteigst, indem du den Big Blind nur *callst*, statt zu raisen oder zu folden. Es klingt harmlos, und gelegentlich ist es auch okay — aber ==g:Open-Limpen als erster Spieler== im Pot ist eine der häufigsten und teuersten Angewohnheiten im Spiel. Hier steht genau, was Limpen ist, warum es meist Geld verliert, in welchen konkreten Situationen es tatsächlich richtig ist (es ist *nicht* immer falsch) und wie starke Spieler deinen Limp in ihren Profit verwandeln. Dieses eine Konzept richtig zu verstehen ist ein größerer Sprung, als die meisten Spieler ahnen — es ist Entscheidung drei einer gewinnenden [Texas-Hold'em-Strategie](/de/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp"), gleich nach der Wahl deines Platzes und deiner Starthand.

---

### Limpen auf einen Blick

:::stripe
Den Big Blind callen | Was ein Limp ist (kein Raise)
0% | Deine Chance, den Pot präflop zu gewinnen
Open-Limp | Die Variante, die fast immer falsch ist
Over-Limp / SB | Die Situationen, in denen es wirklich okay ist
:::

---

## Was bedeutet "Limpen" im Poker?

**Limpen heißt, präflop in den Pot einzusteigen, indem du exakt den Betrag des Big Blinds callst — kein Raise.** Du setzt das Minimum, um einen Flop zu sehen. Entscheidend: Limpen gilt nur, wenn *noch niemand geraist hat*. Hat jemand bereits geraist und du gehst mit, ist das ein **Call**, kein Limp. Das Wort beschreibt speziell den passiven, billigsten Weg in einen ungeraisten Pot.

Es lohnt sich, zwei Begriffe zu trennen, die oft vermischt werden. Ein **Limper** ist jemand, der in ungeraiste Pots einsteigt, indem er den Big Blind callt. Eine **Calling Station** ist ein Spieler, der postflop zu viele *Bets* callt — auf dem Flop, Turn und River. Oft beschreiben sie denselben loose-passiven Spieler, aber es sind unterschiedliche Angewohnheiten: die eine geht darum, wie du in Pots *einsteigst*, die andere darum, wie du in ihnen *weitermachst*. Dieses Glossar der [Poker-Begriffe](/de/blog/holdem-glossary) sortiert den Rest des Vokabulars, falls dich etwas davon aus dem Konzept bringt.

---

## Open-Limp vs. Over-Limp: nicht dasselbe

Bevor wir Limpen bewerten, teile es in zwei Varianten — denn eine ist deutlich schlimmer als die andere:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Open-Limp | Over-Limp (hinterher limpen) |
|:---|:---|:---|
| **Wann** | Du bist der **erste** Spieler im Pot | Du callst, **nachdem** schon jemand gelimpt hat |
| **Das Problem** | Du hättest raisen können, um ihn sofort zu gewinnen — und hast es nicht | Weniger schlimm: Du bekommst einen Rabatt in einen Multiway-Pot |
| **Fazit** | Fast immer ein Fehler | Situativ okay mit den richtigen Händen |

</div>

Diese Unterscheidung ist wichtig, weil die meisten Ratschläge im Stil von "Limpen ist furchtbar" eigentlich das **Open-Limpen** meinen — als Erster reinzugehen und sich fürs bloße Callen zu entscheiden. Hinter anderen Spielern zu over-limpen ist eine wirklich andere und oft vertretbare Entscheidung. Halte sie auseinander, und das ganze Thema wird klarer.

---

## Warum Limpen meist ein Fehler ist (4 Gründe)

![Infografik mit einem goldenen Dealer-Button und zwei verdeckten Hole Cards vor einem K♦ 7♣ 2♠ Flop — der Button handelt nach dem Flop als Letzter](/images/holdem-button-dealer-board.webp "Open-Limpen lädt zu einem aufgeblähten Multiway-Pot ein, in dem du keine Initiative hast — oft aus schlechter Position")

Wenn du open-limpst, gibst du überraschend viel auf. Genau das hier:

1. **Du kannst den Pot präflop nicht gewinnen.** Das ist der große Punkt. Wenn du first-in *raist*, können alle folden und du kassierst die Blinds kampflos — Gratisgeld, und das nennenswert oft. Wenn du limpst, ist diese Zahl **null**. Du hast garantiert, dass du eine Hand treffen oder ihn später gewinnen musst; du hast den saubersten Weg zu gewinnen weggeworfen.
2. **Du gibst die Initiative ab.** Der Präflop-Raiser ist der "Aggressor" — er darf auf dem Flop eine [Continuation Bet](/de/blog/holdem-continuation-bet) abfeuern und eine starke Hand repräsentieren, wodurch er den Pot oft ganz ohne alles nimmt. Limpst du, hast du diese Story jemand anderem überlassen. Du reagierst jetzt, statt zu führen.
3. **Du baust einen aufgeblähten Multiway-Pot — oft aus schlechter Position.** Limpen lädt mehr Caller ein und lässt den Big Blind billig rein. Je mehr Spieler den Flop sehen, desto weniger ist deine Hand wert, und wenn du aus früher Position gelimpt hast, handelst du auf jeder Straße *zuerst* und ohne Initiative. Das ist der schlechteste Platz am Tisch.
4. **Du machst dich lesbar — und ausbeutbar.** Gewohnheitslimper tauchen mit einer gedeckelten, transparenten Range auf. Gute Spieler greifen sie unerbittlich an (mehr dazu unten), also landest du immer wieder in kniffligen Spots aus schlechter Position. Wie das alte Sprichwort sagt: Chronische Limper "gewinnen kleine Pots und verlieren große".

---

## Warum First-in-Raisen besser ist als Limpen

![Eine visuelle Übersicht mit drei Optionen — RAISE in Gold mit Häkchen hervorgehoben, LIMP in Rot mit Warnzeichen markiert und FOLD in neutralem Grau](/images/holdem-limping-raise-or-fold.webp "Der Standard, der dich vor dem Feld hält: first-in raisen oder folden und den Open-Limp als die zu vermeidende Option behandeln")

Der ganze Fall für Raisen statt Limpen läuft auf eine Asymmetrie hinaus: **Ein Raise kann den Pot sofort gewinnen; ein Limp niemals.** Wenn du open-raist, gibst du dir *zwei* Wege zu gewinnen — alle folden präflop, oder du nimmst ihn später mit der Initiative des Aggressors. Limpen lässt dir nur den zweiten, schwereren Weg und nimmt dir die Fold Equity, die präflop-Aggression profitabel macht.

Es gibt einen zweiten, leiseren Vorteil: Raisen **verweigert den Blinds Equity.** Wenn du limpst, sieht der Big Blind den Flop billig mit irgendeiner zufälligen Hand, die ihm ausgeteilt wurde, und manchmal knackt sie dich. Ein Raise kostet ihn etwas zum Weiterspielen und foldet ihn oft ganz raus, sodass sein Schrott nie die Chance bekommt, dich zu überholen. Deshalb ist "raisen oder folden" der Standard, nach dem ein starker Spieler lebt — und deshalb passt der Einstieg mit einem Raise so natürlich zu einer disziplinierten [Starthand-Range](/de/blog/holdem-starting-hands-chart).

---

## Also wann ist Limpen wirklich okay?

Hier geht das Dogma zu weit. Limpen ist *nicht* immer falsch — die ehrliche, moderne Antwort lautet: **Open-Limpen first-in ist fast immer ein Fehler, aber mehrere konkrete Situationen sind legitime Ausnahmen:**

![Mehrere Spieler sind in dieselbe Hand gelimpt, sodass mehrere kleine Chipstacks rund um den grünen Filz nach vorne geschoben in einem billigen Multiway-Pot liegen](/images/holdem-limping-multiway.webp "Hinter anderen Spielern in einen billigen Multiway-Pot zu over-limpen ist der Ort, an dem sich spekulative Hände wie kleine Paare wirklich auszahlen können")

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Warum Limpen hier okay ist |
|:---|:---|
| **Den Small Blind completen** | Dein Geld ist schon halb drin und nur der Big Blind handelt hinter dir — die Raise-oder-Fold-Regel bricht zum Rabatt zusammen. |
| **Spekulative Hände over-limpen** | Hinter anderen Limpern mit kleinen Paaren oder Suited Connectors bekommst du starke Odds, im Multiway-Pot ein Monster zu floppen. |
| **Sehr passives Live-Low-Stakes** | Wenn Gegner nur Monster raisen und Limper nie bestrafen, kannst du billige Flops mit spekulativen Händen sehen und Equity realisieren. |
| **Shallow-stacked späte Position** | Moderne Solver entwickeln Button-Open-Limp-Ranges bei kurzen Stacks, wo ein Raise wenig bringt und Limpen deine Kosten senkt. |

</div>

Am nützlichsten davon für den Alltag ist das **Over-Limpen kleiner Pocket Pairs.** Pocket Zweien bis, sagen wir, Siebenen floppen nur etwa **11,8% der Zeit** ein Set (rund 1 von 8,5), also sind sie für sich genommen nicht wert, einen großen Pot dafür zu bauen. Aber *hinter* anderen Limpern zu einem billigen Preis zu limpen, in einem Multiway-Pot, in dem du bezahlt wirst, wenn du triffst, dreht die [Implied Odds](/de/blog/holdem-pot-odds) zu deinen Gunsten. Du machst Set-Mining — und das ist ein legitimer Grund mitzulimpen. Beachte nur, dass sich der Boden unter dem "Limpe niemals"-Mantra verschiebt: Solver-Arbeit hat 2026 Limpen in einer Handvoll flacher und Multiway-Situationen leise rehabilitiert. Das ist Nuance, kein Freibrief, deine ganze Range zu open-limpen.

---

## Was ist ein Limp-Reraise?

Ein **Limp-Reraise** (oder Limp-Raise) ist eine Falle: Du limpst, wartest, bis ein Gegner hinter dir raist, und *re-raist* ihn dann. Mit einem Monster wie Assen oder Königen an einem aggressiven Tisch kann das einen großen Pot bauen und täuschend schwach aussehen.

Der Haken ist, dass er **durchschaubar** geworden ist. Weil fast niemand limpt, *um dann zu folden*, schreit ein Limp-Reraise heute nach einer sehr engen, sehr starken Range — denk an TT+ und AK/AQ — für jeden denkenden Gegner. Der foldet einfach alles außer seinen eigenen Premiums, und deine "Falle" gewinnt einen winzigen Pot oder kommt billig davon. Er hat noch Nischen-Anwendungen (Short-Stack-Turniersituationen, das Ausbeuten eines hyper-aggressiven Raisers), aber als Standard-Line gegen anständige Spieler ist er eher niedlich als profitabel. Behandle ihn als gelegentliches Werkzeug, nicht als Go-to-Move.

---

## Ist Limpen ein "Fish"-Tell? Wie gute Spieler es bestrafen

![Top-Down-Infografik eines pub-artigen Hold'em-Tisches mit vollem K♦ 7♣ 2♠ 9♥ 3♦ Board, Chips und dem Dealer-Button](/images/holdem-pub-players-table.webp "Starke Spieler behandeln einen Open-Limp als Ziel — sie raisen, um den Limper zu isolieren, und spielen einen Pot in Position gegen eine gedeckelte Range")

Ja — in den meisten Spielen ist ein Open-Limp ein blinkendes Schild, das sagt: *"Schwacher, passiver Spieler hier."* Und der Grund, warum es eine so teure Angewohnheit ist: Geübte Spieler notieren es nicht nur, sie **attackieren** es:

- **Der Isolation-Raise.** Wenn ein starker Spieler sieht, dass du open-limpst, raist er groß hinter dir — ein "Iso-Raise" — um alle anderen rauszufolden und dich heads-up zu bekommen, in Position, mit der Setzführung. Jetzt spielst du einen größeren Pot als gewollt, aus schlechter Position, gegen jemanden, der dir auf jeder Straße überlegen ist.
- **Thin Value und unerbittliche C-Bets.** Gegen eine gedeckelte Limp-Range (wenige oder keine Premium-Hände, da du die meist raisen würdest) betten gute Spieler mehr Straßen für dünneren Value und bluffen freier, sicher, dass du nicht die Nuts haben kannst.
- **Positions-Missbrauch.** Weil Limper meist loose und passiv sind, überspielen aggressive Spieler sie einfach nach dem Flop, betten sie von marginalen Händen weg und holen Value raus, wenn sie treffen.

Die Lösung ist erfrischend einfach: **Raisen oder folden als Standard, und Limpen den konkreten Situationen oben vorbehalten.** In dem Moment, in dem du aufhörst zu open-limpen, hörst du auf, das leichteste Ziel des Tisches zu sein — was, wie es der Zufall will, das Erste ist, das dich vom [Fish](/de/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp") unterscheidet.

---

## Limpen im Live-Low-Stakes vs. Online / GTO

Ein ehrlicher Vorbehalt, denn Kontext ändert alles. In **Online- und härteren Spielen** ist Open-Limpen nahezu unverteidigbar — die Felder sind aggressiv, jemand wird dich fast jedes Mal iso-raisen, und die GTO-Basis lautet im Wesentlichen "open-limpe nicht in einem normalen 100-BB-Spiel".

In **sehr passiven Live-Low-Stakes-Spielen** ist es eine andere Welt. Wenn der Tisch Limpern routinemäßig billige Flops gönnt und niemand sie bestraft, ist Open-Limpen spekulativer Hände aus früher Position weit weniger teuer — du wirst nicht isoliert und darfst Equity mit Händen realisieren, die einem Raise lieber aus dem Weg gehen würden. Es ist immer noch nicht *optimal*, aber die Strafe ist klein, und Set-Mining in einem Family Pot kann Geld drucken. Lies deinen Tisch: Je weicher und passiver das Spiel, desto mehr Limpen kannst du dir erlauben; je härter das Spiel, desto strikter solltest du raisen oder folden.

---

:::readnext[Weiterlesen]
/de/blog/holdem-position-play | Wie Position dir Pots gewinnt | /images/holdem-button-position-hero.webp
/de/blog/holdem-starting-hands-chart | Welche Hände zu spielen sind | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Was bedeutet Limpen im Poker?**

A. Limpen heißt, vor dem Flop in den Pot einzusteigen, indem du nur den Big Blind callst, statt zu raisen oder zu folden. Es ist der billigste, passivste Weg in einen ungeraisten Pot. Es zählt nur als Limp, wenn noch niemand geraist hat — hat jemand bereits geraist und du gehst mit, ist das ein Call, kein Limp.

**Q. Warum ist Limpen im Poker schlecht?**

A. Open-Limpen gibt viel auf: Du kannst den Pot präflop nicht so gewinnen, wie es ein Raise kann, du gibst die Initiative ab, die den Aggressor Pots mit einer Continuation Bet gewinnen lässt, und du lädst zu einem aufgeblähten Multiway-Pot ein, den du oft aus schlechter Position spielst. Obendrein markiert es dich als schwachen Spieler, sodass starke Gegner raisen, um dich zu isolieren und auszubeuten.

**Q. Ist Limpen jemals eine gute Strategie?**

A. Ja, in konkreten Situationen. Aus dem Small Blind zu completen, spekulative Hände wie kleine Paare und Suited Connectors hinter anderen Limpern zu over-limpen, sehr passive Live-Low-Stakes-Spiele und einige shallow-stacked Button-Situationen sind alle legitim. Fast immer falsch ist Open-Limpen — als erster Spieler reinzugehen und sich fürs bloße Callen statt Raisen zu entscheiden.

**Q. Was ist der Unterschied zwischen Open-Limpen und Over-Limpen?**

A. Open-Limpen ist, wenn du der erste Spieler bist, der in den Pot einsteigt, und du nur den Big Blind callst — fast immer ein Fehler, weil du hättest raisen können, um ihn direkt zu gewinnen. Over-Limpen (oder hinterher limpen) ist das Callen, nachdem schon jemand gelimpt hat; es ist vertretbarer, weil du einen Rabatt in einen Multiway-Pot bekommst, was Set-Mining-Händen entgegenkommt.

**Q. Was ist ein Limp-Reraise?**

A. Ein Limp-Reraise ist, wenn du limpst, ein Gegner hinter dir raist und du dann re-raist — klassischerweise eine Falle mit einer sehr starken Hand wie Assen oder Königen. Das Problem ist, dass er durchschaubar geworden ist: Er repräsentiert eine so enge, starke Range (grob TT+ und AK/AQ), dass gute Spieler einfach alles andere folden. Er hat Nischen-Anwendungen, ist aber keine zuverlässige Standard-Line.

**Q. Solltest du präflop jemals open-limpen?**

A. Fast nie in einem normalen Cashgame. Wenn eine Hand gut genug zum Spielen ist, ist sie meist gut genug zum Raisen; wenn nicht, folde. Die seltenen Ausnahmen sind extrem passive Live-Spiele, in denen du nicht bestraft wirst, und einige shallow-stacked Late-Position-Situationen, die Solver identifiziert haben. Als Standard: raisen oder folden und den Open-Limp weglassen.

**Q. Ist es okay, im Small Blind zu limpen?**

A. Oft ja — den Small Blind zu completen ist einer der vertretbarsten Limps. Dein Geld ist schon halb drin, nur der Big Blind kann hinter dir handeln, und du bekommst einen Preis, sodass die übliche Raise-oder-Fold-Logik nicht auf dieselbe Weise gilt. Ob du completest, raist oder foldest, hängt von deiner Hand und den Tendenzen des Big Blinds ab, aber Limpen ist hier weit vom Fehler entfernt, der Open-Limpen in anderen Positionen ist.

**Q. Was ist der Unterschied zwischen einem Limper und einer Calling Station?**

A. Ein Limper steigt in ungeraiste Pots ein, indem er vor dem Flop nur den Big Blind callt — es geht darum, wie er in Pots *einsteigt*. Eine Calling Station callt nach dem Flop zu viele Bets, auf Turn und River — es geht darum, wie sie *weitermacht*. Derselbe loose-passive Spieler macht oft beides, aber die Begriffe beschreiben unterschiedliche Angewohnheiten und sollten nicht austauschbar verwendet werden.

---

## Die 3 Dinge zum Merken

1. **Limpen ist das Callen des Big Blinds statt Raisen** — und Open-Limpen, als Erster reinzugehen, ist fast immer ein Fehler: Du kannst den Pot präflop nicht gewinnen, gibst die Initiative ab und markierst dich als leichtes Ziel.
2. **Aber es ist nicht *immer* falsch.** Den Small Blind zu completen, spekulative Hände hinter anderen Limpern zu over-limpen sowie passive Live- oder shallow-stacked Situationen sind legitime Ausnahmen. Das dogmatische "Limpe niemals" ist eine Übertreibung.
3. **Standard = raisen oder folden.** Behalte Limpen für jene konkreten Situationen vor, und du hörst auf, starken Spielern Gratischancen zu geben, dich zu isolieren und auszubeuten.

Dein Limpen zu beheben ist eines der schnellsten Upgrades im Poker — es kostet nichts zu lernen und stoppt sofort das Chip-Leck als leichteste Beute des Tisches. Kombiniere "raisen oder folden" mit einer soliden [Starthand-Range](/de/blog/holdem-starting-hands-chart) und echtem [Positions](/de/blog/holdem-position-play)-Bewusstsein, und du bist leise aus der Gruppe herausgewachsen, die alle anderen zu schlagen versuchen.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Deine Position spielen</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Warum Limpen aus schlechter Position am meisten wehtut</div>
  </a>
  <a href="/de/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategie</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starthand-Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Was überhaupt ein Raise wert ist</div>
  </a>
  <a href="/de/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Was ist ein Fish?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Die passiven Angewohnheiten, die einen schwachen Spieler kennzeichnen</div>
  </a>
  <a href="/de/blog/holdem-glossary" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker-Begriffe A-Z</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Jedes bisschen Tisch-Vokabular, erklärt</div>
  </a>
</div>
`.trim(),
};

export default POST;
