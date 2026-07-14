import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Regole dell'all-in nel Texas Hold'em: side pot, rilanci e showdown",
  seoTitle: "All-in e non sai cosa vinci? — Regole all-in e side pot",
  desc: "Vai all-in e il dealer divide le fiches in due mucchi. Regole dell'all-in nel Texas Hold'em: table stakes, piatto principale, side pot, rilanci e showdown.",
  tldr: "Andare all-in significa puntare tutte le fiches che hai davanti. Da ogni avversario puoi vincere solo quello che hai pareggiato (il piatto principale); le fiches in più degli stack più grandi formano un side pot che non puoi toccare. Un all-in inferiore a un rilancio completo NON riapre le puntate per chi ha già agito.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "regole all in poker",
    "all in texas holdem",
    "side pot poker",
    "piatto laterale poker",
    "cosa succede se vai all in poker",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in nel Texas Hold'em — un giocatore spinge tutte le fiches al centro mentre il dealer separa il piatto principale e il side pot sul panno verde",
  content: `
Sei corto di fiches. Spingi tutto dentro. Il giocatore dietro di te chiama. Un terzo rilancia. Il dealer inizia a dividere le fiches in due mucchi.

E tu non hai la minima idea di cosa stia succedendo.

Ci sono passato anch'io. La prima volta che sono andato all-in in un cash game dal vivo non sapevo se potessi ancora vincere qualcosa, se l'altro giocatore potesse rilanciare, e nemmeno quale dei due mucchi di fiches fosse il mio. Nessuno me l'ha spiegato.

==Questa guida copre ogni situazione: piatto principale, side pot, chi può rilanciare e l'ordine dello showdown.== Basta bloccarsi quando il dealer inizia a contare gli stack. (Se il flusso base delle puntate ti confonde ancora, la [guida alle regole per principianti](/it/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") parte da zero.)

## Cosa significa andare all-in nel Texas Hold'em?

Andare all-in significa puntare tutte le fiches che hai davanti. Una volta che le metti dentro, non puoi più aggiungerne — e nessuno può costringerti a passare.

La base è la regola delle **table stakes**: puoi puntare solo le fiches che avevi sul tavolo all'inizio della mano. Non puoi tirare fuori soldi dalla tasca, farti prestare qualcosa da un amico né puntare l'orologio o le chiavi della macchina — quello è il poker dei film.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termine | Cosa significa |
|------|---------|
| Push / Shove / Jam | Gergo inglese per andare all-in |
| Table stakes | Puoi puntare solo ciò che avevi all'inizio della mano |
| Double up | Vincere un all-in e raddoppiare il tuo stack |
| Piatto principale (main pot) | Il piatto che tutti — incluso il giocatore all-in — possono vincere |
| Side pot (piatto laterale) | Fiches che solo gli stack grandi possono vincere; il giocatore all-in resta fuori |

</div>

==g:Una volta che sei all-in, hai la garanzia di vedere tutte le carte comuni rimanenti.== Nessuno può buttarti fuori dalla mano con un bluff. Le tue carte restano vive fino al river.

---

## Come si dichiara l'all-in

Ci sono due modi validi:

**1. Dichiarazione verbale** — Di' "all-in" forte e chiaro, in modo che ti sentano il dealer e gli avversari. È il metodo più sicuro. Nel momento in cui lo dici, sei impegnato.

**2. Spingere tutte le fiches** — Fai scivolare tutto lo stack verso il centro con un unico movimento pulito. Spostare le fiches in più riprese può sembrare uno string bet, quindi muovi tutto in una volta sola.

![Showdown di un all-in nel Texas Hold'em — un board K♠ 10♣ 7♦ 4♥ 2♣ con le fiches divise in piatto principale e side pot etichettati](/images/holdem-all-in-declare.webp)

==r:Non spingere mai una singola fiche senza dire nulla — il dealer la conterà solo per il valore di quella fiche, non come il tuo stack completo.== Dichiara sempre "all-in" ad alta voce, oppure muovi tutto lo stack in una volta.

---

## Come funzionano i side pot nel poker? (Perché il giocatore all-in viene limitato)

Il giocatore all-in può vincere solo quello che ha messo dentro moltiplicato per il numero di avversari che lo hanno pareggiato. Tutte le fiches puntate oltre quella cifra formano un **side pot** che appartiene in esclusiva ai giocatori che lo hanno alimentato.

![Side pot dopo un all-in nel Texas Hold'em — il dealer separa le fiches in piatto principale e side pot mentre il Giocatore A resta limitato](/images/holdem-all-in-side-pot.webp)

### Esempio con 3 giocatori (il caso standard)

| Giocatore | Stack | Azione |
|--------|-------|--------|
| Giocatore A | 100 fiches | All-in |
| Giocatore B | 300 fiches | Chiama 100 e punta altri 50 |
| Giocatore C | 300 fiches | Chiama 100 e chiama i 50 |

**Piatto principale:** 100 × 3 = **300 fiches** (possono vincerlo A, B e C)

**Side pot:** 50 × 2 = **100 fiches** (solo B e C)

==Il Giocatore A può vincere il piatto principale da 300 fiches allo showdown. Ma anche se A ha la mano migliore in assoluto, non può toccare il side pot da 100 fiches.== Se lo prenderà B oppure C.

### Esempio con 4 giocatori e stack diversi

Qui la cosa si complica — ed è dove si perde la maggior parte dei principianti.

| Giocatore | Stack | Va all-in per |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | chiama tutto |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Piatto | Importo | Chi può vincerlo |
|:---|:---:|:---|
| Piatto principale | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A è limitato) |
| Side pot 2 | 300 × 2 = **600** | C, D (A e B limitati) |
| **Totale** | **1.300** | — |

</div>

La regola: ==ogni side pot si costruisce prendendo la differenza fino allo stack successivo più piccolo × il numero di giocatori che la coprono.== Si calcola dallo stack più piccolo al più grande.

---

## Andare all-in riapre le puntate? — La regola che quasi tutti sbagliano

==r:È la regola dell'all-in che genera più discussioni ai tavoli dal vivo — ho visto due giocatori litigarci sopra per cinque minuti con tutto il tavolo ad aspettare. Avevano torto entrambi.==

**La regola:** se un giocatore va all-in per **meno di un [rilancio completo](/it/blog/holdem-betting-actions)**, quell'all-in NON riapre le puntate per i giocatori che hanno già agito in quel giro.

![Regola del rilancio dopo un all-in nel poker — il Giocatore C va all-in per meno di un rilancio completo e il Giocatore A può solo chiamare o passare](/images/holdem-all-in-reraise-rule.webp)

**Esempio:**

Bui $1/$2. Quattro giocatori vedono il flop.

1. Il Giocatore A punta $10.
2. Il Giocatore B va all-in per **$14** (solo $4 in più della puntata di A da $10 — non è un rilancio completo, che richiederebbe almeno $20).

Cosa succede al Giocatore A e al Giocatore C, che non ha ancora agito?

- Il Giocatore A ha già agito (ha puntato $10) e ora si trova di fronte solo a un rilancio incompleto. Dato che l'all-in di B da $14 è **inferiore a un rilancio completo**, l'azione NON si riapre per il Giocatore A. ==A può solo chiamare o passare — non può rilanciare.==
- Il Giocatore C non ha ancora agito — **il Giocatore C può invece rilanciare normalmente**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Importo dell'all-in | Rilancio completo? | Riapre le puntate? |
|--------------|-------------|-----------------|
| Meno di un rilancio completo | No | No — chi ha già agito può solo chiamare o passare |
| Rilancio completo o più | Sì | Sì — tutti possono rilanciare di nuovo |

</div>

Perché esiste questa regola? Protegge i giocatori dall'essere costretti a rilanci più grandi da all-in parziali. Un rilancio completo segnala aggressività reale — l'all-in di uno stack corto per quattro fiches, no.

### Caso avanzato: e se più giocatori vanno all-in corti?

Questa è la versione che fa inciampare persino i regular. Più all-in corti possono **sommarsi** fino a un rilancio completo — e se i loro incrementi combinati raggiungono la soglia, le puntate si riaprono per chi ha già agito.

È la regola ufficiale TDA sulla riapertura delle puntate ("re-opening the bet"), e la maggior parte delle sale la applica.

**Esempio (bui $1/$2, al flop):**

1. Il Giocatore A punta $10.
2. Il Giocatore B va all-in per **$14** (incremento di +$4 — da solo non è un rilancio completo)
3. Il Giocatore C va all-in per **$21** (incremento di +$7 — da solo non è un rilancio completo)

Incrementi combinati: $4 + $7 = **$11** — raggiunge la soglia del rilancio minimo di $10.

**Risultato: le puntate SI RIAPRONO per il Giocatore A.** A può passare, chiamare o rilanciare, anche se né B né C hanno fatto un rilancio completo da soli.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in di B | All-in di C | Incremento combinato | Si riapre per A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — sotto i $10 | ❌ No |
| $14 (+$4) | $21 (+$7) | $11 — raggiunge i $10 | ✅ Sì |
| $15 (+$5) | $25 (+$10) | $15 — raggiunge i $10 | ✅ Sì |

</div>

La soglia del rilancio minimo è sempre l'*ultima puntata o rilancio completo valido* — mai un totale accumulato qualsiasi.

### Guida rapida alla decisione — questo all-in riapre le puntate?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situazione | Si riapre per chi ha già agito? |
|---|---|
| Un solo all-in < rilancio completo | ❌ No — solo chiamare o passare |
| Un solo all-in ≥ rilancio completo | ✅ Sì — tutti possono rilanciare |
| Più all-in corti, somma < rilancio completo | ❌ No |
| Più all-in corti, somma ≥ rilancio completo | ✅ Sì |
| Giocatore che NON ha ancora agito | ✅ Può sempre rilanciare (in ogni caso) |

</div>

---

## Regole dello showdown con all-in

Quando le puntate sono chiuse e c'è un giocatore all-in, ecco cosa succede allo showdown:

1. **Le carte si girano scoperte.** Nei tornei, tutte le mani coinvolte nell'all-in vengono di norma mostrate non appena le puntate sono chiuse. Nei cash game si applica prima la [regola dell'ultimo aggressore allo showdown](/it/blog/holdem-showdown-rules), poi mostrano i giocatori all-in.
2. **I side pot si assegnano per primi.** Il dealer risolve prima il side pot creato più di recente e procede a ritroso fino al piatto principale.
3. **Parlano le carte.** La mano migliore vince ogni piatto a cui ha diritto — a prescindere da cosa i giocatori dicano di avere.
4. **Ci possono essere più vincitori.** Il Giocatore A può vincere il piatto principale e il Giocatore B il side pot. Nessuno prende tutto solo perché ha vinto "il suo" piatto.

==g:Un giocatore può vincere il piatto principale e perdere il side pot. Entrambi gli esiti sono validi.==

**Caso speciale:** se in un side pot resta un solo giocatore (gli altri hanno passato), quel giocatore si riprende subito quelle fiches — per quel piatto non serve lo showdown.

---

## Cosa succede se vai all-in nel modo sbagliato? — 5 errori da evitare

### Errore 1: credere che il giocatore all-in possa vincere il side pot

Non può. Una volta che il giocatore all-in è limitato, ogni fiche in più puntata dagli stack più grandi finisce in un piatto su cui non ha alcun diritto.

### Errore 2: non sapere la regola su chi può rilanciare

Un all-in parziale del Giocatore C non dà al Giocatore A una seconda occasione per rilanciare. Saperlo a memoria taglia le discussioni prima ancora che inizino.

### Errore 3: aggiungere fiches dalla tasca a metà mano

Table stakes. Quello che c'è sul tavolo è tutto ciò che puoi puntare. Se sei all-in per $80 e il piatto è di $400, da ogni giocatore che chiama puoi vincere solo $80.

### Errore 4: gettare la mano troppo presto

Sei all-in per il piatto principale. Altri due giocatori si contendono il side pot. Non gettare le carte — la tua mano è ancora viva per il piatto principale. ==Aspetta sempre che il dealer risolva tutti i piatti prima di toccare le tue carte.==

### Errore 5: andare all-in per frustrazione

L'all-in è la mossa più potente del tavolo. Costringe gli avversari a una decisione del tutto-o-niente. Quel potere svanisce quando spingi tutto a caso. Usalo al momento giusto — pressione con lo stack corto, mani di valore con cui vuoi farti pagare, bluff con vero fold equity.

---

:::readnext[Continua a leggere]
/it/blog/texas-holdem-rules-for-beginners | Regole del Texas Hold'em per principianti | /images/rules-texas-holdem.webp
/it/blog/holdem-showdown-rules | Le regole dello showdown, spiegate | /images/holdem-showdown-rules-hero.webp
:::

## Domande frequenti

**Q. Si può andare all-in per meno del grande buio?**

A. Sì. Se ti restano meno fiches del grande buio, quando tocca a te metterlo resti automaticamente all-in per quello che hai. Gli altri continuano a pagare il grande buio per intero — tutto ciò che supera il tuo contributo finisce in un side pot.

**Q. Cosa succede se vinci l'all-in ma perdi il side pot?**

A. Ti prendi il piatto principale (quello che hai pareggiato da ogni giocatore) e l'altro giocatore si prende il side pot. Ciascuno vince la parte a cui aveva diritto.

**Q. Andare all-in ti obbliga a mostrare la mano?**

A. Nei tornei sì — non appena le puntate si chiudono con un all-in, tutte le mani coinvolte vengono girate scoperte. Nei cash game dal vivo valgono le regole normali dello showdown: l'ultimo aggressore mostra per primo e gli altri mostrano o gettano le carte.

**Q. Si può fare "run it twice" in un all-in a poker?**

A. Distribuire due volte le carte comuni rimanenti e dividere il piatto (run it twice) è permesso in molti cash game se entrambi i giocatori sono d'accordo dopo l'all-in. Nei tornei di norma non è consentito. Va concordato prima di distribuire le carte mancanti.

**Q. In cosa consiste esattamente la regola delle "table stakes"?**

A. Table stakes significa che puoi puntare solo le fiches che avevi davanti all'inizio della mano. Non puoi aggiungere denaro a mano in corso. Protegge entrambi i lati: non ti si può mai costringere a rischiare più del tuo stack, e l'avversario non può puntare di colpo più di quanto tu possa coprire.

**Q. Se due giocatori vanno all-in per importi diversi, chi mostra per primo?**

A. L'ultimo all-in che è stato una puntata o un rilancio conta come l'ultima azione aggressiva e mostra per primo. Un all-in che si limita a chiamare per meno non è aggressivo — mostra comunque per primo chi aveva puntato inizialmente. Nei cash game, se è stato un all-in chiamato senza ulteriore azione, chi ha chiamato può gettare le carte se perde dopo aver visto la mano del giocatore all-in (nei tornei tutte le mani coinvolte restano scoperte).

**Q. Le regole dell'all-in cambiano tra tornei e cash game?**

A. Il nucleo è lo stesso, con due differenze pratiche. Prima: nei tornei tutte le mani coinvolte in un all-in vengono girate scoperte non appena le puntate si chiudono (Regola 16 della TDA) — non puoi gettare le carte prima dello showdown. Nei cash game vale l'ordine normale dello showdown e puoi farlo. Seconda: il run it twice è comune nei cash game (se entrambi i giocatori sono d'accordo) ma nei tornei di norma non è permesso.

---

## Articoli correlati

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/it/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guida pilastro</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regole del Texas Hold'em per principianti</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tutte le regole, dai bui allo showdown</div>
  </a>
  <a href="/it/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regole dello showdown</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chi mostra per primo e quando puoi gettare le carte</div>
  </a>
</div>
`.trim(),
};
