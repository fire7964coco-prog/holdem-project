import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Showdown-Regeln beim Texas Hold'em: Wer zeigt zuerst, Mucken und Slow Rolling",
  seoTitle: "Wer dreht zuerst um? Showdown-Regeln & Mucken beim Hold'em",
  desc: "Wer zeigt beim Showdown zuerst die Karten? Darf man ungezeigt mucken? Showdown-Regeln beim Hold'em — letzter Aggressor, Cards Speak, Slow Roll und All-in.",
  tldr: "Beim Showdown zeigt zuerst, wer als Letzter gesetzt oder erhöht hat. Wurde der River durchgecheckt, zeigt der erste aktive Spieler links vom Button zuerst. Verlierst du, darfst du ungezeigt mucken — aber die Gegner können verlangen, eine gecallte Hand zu sehen.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-12",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 Min.",
  emoji: "🃏",
  tags: [
    "showdown regeln poker",
    "wer zeigt zuerst die karten poker",
    "mucken poker",
    "slow roll poker",
    "all-in showdown regeln",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Showdown-Infografik zum Texas Hold'em — auf einem Board mit 4♥ 7♣ Q♦ K♠ 2♥ gewinnt A♠ K♥ mit einem Paar Könige und Ass-Kicker",
  content: `
Du hast die River-Bet gecallt. Jetzt starrt ihr euch gegenseitig an und wartet, dass der andere zuerst umdreht.

Keiner rührt sich.

Der Dealer schaut hin und her. Die anderen am Tisch seufzen.

==Genau dieses Patt gibt es an fast jedem Live-Tisch== — weil die meisten Anfänger nie gelernt haben, wer eigentlich zuerst zeigen muss. Dieser Guide deckt jede Showdown-Situation ab: normale Hände, durchgecheckte River, All-ins — und warum dir ein Slow Roll für den Rest der Session böse Blicke einbringt.

## Wer muss beim Showdown zuerst die Karten zeigen?

Die Regel hängt davon ab, wie die letzte Setzrunde geendet hat (den kompletten Ablauf Street für Street, der hierhin führt, findest du im [Spielablauf beim Texas Hold'em](/de/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Aktion auf der letzten Street | Wer zeigt zuerst |
|--------------------|-----------------|
| Jemand hat am River gesetzt oder erhöht | ==Der Spieler, der zuletzt gesetzt oder erhöht hat==, zeigt zuerst |
| Alle haben den River durchgecheckt | Der erste aktive Spieler links vom Dealer-Button zeigt zuerst |
| All-in auf einer früheren Street (keine Bets am River) | Alle Hände werden vor bzw. während des Runouts offen hingelegt |

</div>

![Infografik zur Showdown-Reihenfolge im Texas Hold'em — wer zuerst zeigt, auf einem Board mit J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:Der Schlüsselbegriff ist „letzter Aggressor“.== Wenn du am River gesetzt hast und gecallt wurdest, zeigst du zuerst — nicht der Caller. Der Caller darf deine Hand sehen, bevor er entscheidet, ob er seine zeigt oder muckt.

---

## Darf man beim Showdown mucken, ohne zu zeigen?

Ja — **wenn du verloren hast**.

Sobald der letzte Aggressor seine Hand gezeigt hat, können die übrigen Spieler entweder:
- **Ihre Hand zeigen**, wenn sie glauben zu gewinnen
- **Verdeckt mucken**, wenn sie sehen, dass sie verloren haben — du musst deine Karten nicht aufdecken

==r:Aber es gibt eine wichtige Ausnahme:== Wurde deine River-Bet gecallt, hat der Caller den vollen Preis bezahlt, um deine Hand zu sehen. Jeder Spieler, der in die Hand gedealt wurde, kann den Dealer bitten, eine gemuckte Hand aufzudecken, die an einem gecallten Showdown beteiligt war — die **„I want to see that hand“-Regel** in den meisten Cardrooms. (Nicht zu verwechseln mit „show one, show all“: Die besagt, dass jeder am Tisch deine Karten sehen darf, wenn du sie freiwillig einem einzelnen Spieler zeigst.)

Praktische Faustregel: ==Wurde dein Bluff gecallt, mucke schnell. Wurde deine Value-Bet gecallt, dreh deine Karten um.==

---

## Showdown-Reihenfolge, wenn alle den River durchgecheckt haben

Hat am River niemand gesetzt (alle haben gecheckt), beginnt der Showdown beim **ersten aktiven Spieler links vom Dealer-Button** und läuft im Uhrzeigersinn weiter.

Beispiel: Button, Small Blind und Big Blind sehen den River. SB checkt, BB checkt, Button checkt. Der Showdown beginnt beim SB (erster aktiver Spieler links vom Button). Der SB kann zeigen oder mucken. Dann der BB. Der Button zuletzt.

==g:In diesem Fall zeigt der Button als Letzter== — was tatsächlich ein Vorteil ist. Der Button sieht, ob ihn jemand schlägt, bevor er entscheidet, ob er umdreht.

---

## All-in-Showdown-Regeln — zeigt der All-in-Spieler zuerst?

Geht ein Spieler All-in und sind keine weiteren Bets mehr möglich, werden die restlichen Karten üblicherweise ausgeteilt, während **alle Hände offen auf dem Tisch liegen**. Das schützt die Integrität der Hand — in einer All-in-Situation soll niemand strategisch mucken können.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in-Szenario | Showdown-Regel |
|----------------|---------------|
| Spieler geht All-in, andere callen, keine Bets mehr möglich | Alle Hände werden vor oder während des Runouts offen gezeigt |
| All-in-Bet am River wird gecallt | Normaler Showdown — der All-in-Spieler ist der letzte Aggressor und zeigt zuerst |
| Mehrere All-ins mit mehreren Side Pots | Jeder Pot wird separat vergeben; alle beteiligten Hände werden gezeigt |

</div>

Eine Feinheit: Gibt es einen **Side Pot** (andere Spieler haben noch Chips und setzen weiter), wird zuerst der Side Pot vergeben — dort zeigt der letzte Aggressor unter den noch setzenden Spielern zuerst — und danach der Hauptpot, bei dem die Hand des All-in-Spielers gezeigt wird.

Wie Side Pots entstehen und ausbezahlt werden, wenn Spieler All-in sind, liest du in den [All-in-Regeln und Side Pots](/de/blog/holdem-all-in-rules); für geteilte Pots gelten die Split-Pot- und Chop-Regeln.

---

## Was bedeutet die Regel „die Karten sprechen“ (Cards Speak)?

![Infografik zur Cards-Speak-Regel — ein Board mit 8♠ 9♣ 10♥ J♦ Q♠ ergibt eine Straße bis zur Dame, und beim Showdown sprechen die Karten für sich](/images/holdem-showdown-cards-speak.webp)

„Die Karten sprechen“ (englisch „cards speak“) bedeutet: ==Die beste Hand gewinnt — egal, was die Spieler ansagen==.

Verliest sich ein Spieler und sagt „Ich habe ein Paar“, obwohl er in Wirklichkeit eine Straße hält — dann gewinnt die Straße. Der Dealer liest die Karten und vergibt den Pot an die beste gezeigte Hand.

Das gilt in beide Richtungen. Wenn du glaubst, verloren zu haben, und ungezeigt muckst, obwohl deine Hand gewonnen hätte — ==r:ist der Pot weg==. Deine Hand ist tot, sobald sie den Muck berührt. Lass den Dealer immer deine Hand lesen, bevor du muckst, wenn du nicht zu 100% sicher bist, dass du verloren hast.

Echte Situation: Du hältst J♥ 10♥ auf einem Board mit Q♥ 9♥ 8♥ 2♣ 5♦. Du hast einen Straight Flush bis zur Dame (Q-J-10-9-8 in Herz). Dein Gegner zeigt K♣ Q♦ (ein Paar Damen). Du gewinnst haushoch. Mucke nicht, nur weil du seine Dame siehst.

---

## Was ist Slow Rolling beim Poker?

Slow Rolling heißt, ==sich absichtlich viel Zeit zu lassen, eine sehr starke Hand zu zeigen, obwohl man weiß, dass man gewonnen hat==.

Du hast die Nuts. Der Gegner zeigt eine starke Hand. Du machst eine Pause, tust so, als würdest du nachdenken, schaust langsam auf deine Karten, lässt alle warten — und drehst dann den Gewinner um. Technisch erlaubt. Überall verhasst.

![Slow Rolling beim Poker — die anderen Spieler sind frustriert, weil ein Spieler das Zeigen der Gewinnerhand absichtlich hinauszögert](/images/holdem-showdown-slow-roll.webp)

==r:Slow Rolling ist der schnellste Weg, sich am Pokertisch Feinde zu machen.== Es wird als bewusstes Nachtreten beim Gewinnen verstanden. Die ungeschriebene Regel: Hast du die bestmögliche Hand, dreh sie sofort um. Slow Rolling bringt keinerlei strategischen Vorteil. Das einzige Ergebnis ist schlechte Stimmung.

Nicht zu verwechseln mit **Tanking** — sich berechtigterweise Zeit für eine schwierige Entscheidung zu nehmen. Das wird akzeptiert, sogar respektiert. Die Nuts slow zu rollen ist etwas anderes.

---

## Muss man seine Hole Cards zeigen, wenn man ohne Showdown gewinnt?

Nein. ==g:Folden alle anderen vor dem Showdown, gewinnst du den Pot, ohne eine einzige Karte zu zeigen.==

Du kannst zeigen, wenn du willst — manche zeigen Bluffs, um Gegner zu tilten, oder starke Hände, um ein tightes Image aufzubauen. Aber du bist niemals verpflichtet, deine Karten zu zeigen, wenn du gewinnst, weil alle anderen gefoldet haben.

Genau das macht Poker so interessant. Nicht immer gewinnt die beste Hand — sondern der, der als Letzter übrig bleibt.

---

## Showdown-Etikette — was Anfänger falsch machen

### Fehler 1: Darauf warten, dass der Caller zuerst zeigt

Du setzt am River. Jemand callt dich. Du erstarrst und wartest, dass er zeigt. Das ist verkehrt herum. ==Du zeigst zuerst — du warst der letzte Aggressor.== Warten sieht nach Slow Rolling aus, selbst wenn es keins ist.

### Fehler 2: Mucken, bevor der Dealer die Hand gelesen hat

Du bist dir ziemlich sicher, dass du verloren hast. Du schiebst deine Karten verdeckt Richtung Muck. Der Dealer zieht sie ein. Stellt sich heraus: Du hattest den Gewinner. Die Hand ist tot — der Pot ist weg. ==Mucke nie, bevor du sicher bist.== Lass den Dealer beide Hände lesen.

### Fehler 3: Jede gecallte Hand sehen wollen

In den meisten Cardrooms kannst du den Dealer bitten, eine gemuckte Hand aufzudecken — aber nur eine Hand, die gecallt wurde und den Showdown erreicht hat. Gefoldete Hände sind tot und können nie zurückgeholt werden. Die Regel existiert als Schutz vor Absprachen (Collusion), nicht zur Befriedigung von Neugier — und wer sie missbraucht, gilt als unhöflich. Setze sie sparsam ein.

### Fehler 4: Nicht wissen, dass man früher zeigen darf

Keine Regel verbietet dir, deine Hand umzudrehen, bevor du offiziell an der Reihe bist. ==g:Hast du die Nuts oder eine sehr starke Hand, zeig sofort.== Die anderen Spieler wissen das zu schätzen. Es beschleunigt das Spiel. Und es ist das Gegenteil von Slow Rolling.

---

:::readnext[Weiterlesen]
/de/blog/holdem-game-order | Der Spielablauf beim Texas Hold'em | /images/blog-holdem-game-flow.webp
/de/blog/holdem-all-in-rules | All-in-Regeln & Side Pots | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Wer zeigt beim Poker-Showdown zuerst die Karten?**

A. Der Spieler, der in der letzten Setzrunde die letzte aggressive Aktion gemacht hat (Bet oder Raise), muss zuerst zeigen. Wurde die letzte Runde von allen durchgecheckt, zeigt der erste aktive Spieler links vom Dealer-Button zuerst, und es geht im Uhrzeigersinn weiter.

**Q. Muss man seine Karten zeigen, wenn man beim Showdown gecallt wird?**

A. Ja — warst du am River der letzte, der gesetzt oder erhöht hat, musst du nach dem Call zuerst zeigen. Hast du die Bet eines anderen gecallt, darfst du nach dem Blick auf seine Hand verdeckt mucken, wenn du verloren hast. Allerdings kann in den meisten Cardrooms jeder Spieler am Tisch den Dealer bitten, eine gecallte und gemuckte Hand aufzudecken.

**Q. Darf man beim Showdown mucken, ohne zu zeigen?**

A. Ja, aber nur, wenn du klar verloren hast. Sobald die Gewinnerhand gezeigt wurde, dürfen unterlegene Spieler verdeckt mucken. Die Ausnahme: Wurde deine Hand gecallt, können Gegner verlangen, sie zu sehen. Mucke nie, bevor der Dealer beide Hände gelesen hat, wenn irgendein Zweifel besteht, wer gewonnen hat.

**Q. Was ist Slow Rolling beim Poker und warum ist es verpönt?**

A. Slow Rolling bedeutet, das Zeigen einer Gewinnerhand absichtlich hinauszuzögern, obwohl man bereits weiß, dass sie die beste ist. Es ist erlaubt, aber überall verhasst, weil es als bewusste Demütigung des Gegners gilt. Hältst du die Nuts oder einen klaren Gewinner, dreh deine Karten sofort um. Wie schnell du zeigst, sagt am Tisch viel über deinen Charakter aus.

**Q. Wer zeigt in einer All-in-Situation zuerst die Karten?**

A. Geht ein Spieler All-in und sind keine weiteren Bets möglich, werden alle an diesem Pot beteiligten Hände üblicherweise vor oder während des Austeilens der restlichen Gemeinschaftskarten offen gezeigt. Gibt es einen Side Pot mit weiterlaufenden Bets, zeigt für den Side Pot der letzte Aggressor unter diesen Spielern zuerst. Die Hand des All-in-Spielers wird separat für den Hauptpot gezeigt.

**Q. Was bedeutet „cards speak“ beim Poker?**

A. „Cards speak“ — die Karten sprechen — heißt: Die beste Hand gewinnt auf Basis dessen, was die Karten tatsächlich zeigen, nicht auf Basis dessen, was die Spieler sagen. Wer sich verliest und die falsche Hand ansagt, gewinnt trotzdem, wenn seine Karten die beste Hand sind. Umgekehrt hat jemand, der muckt, ohne zu prüfen, ob er verloren hat, keinerlei Anspruch auf den Pot — selbst wenn seine Hand gewonnen hätte.

**Q. Muss man seine Karten zeigen, wenn man ohne Showdown gewinnt?**

A. Nein. Folden alle anderen vor dem Showdown, gewinnst du den Pot sofort und musst deine Hole Cards nie aufdecken. Zeigen ist freiwillig — manche drehen einen Bluff um, um Gegner zu ärgern, aber du bist nie verpflichtet, eine Hand zu zeigen, die unangefochten gewonnen hat.

---

## Ähnliche Beiträge

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/de/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Regeln für Anfänger</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Alle Regeln — von den Blinds bis zum Showdown</div>
  </a>
</div>
`.trim(),
};
