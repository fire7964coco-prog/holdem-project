import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-game-order",
  title: "Come si gioca a Texas Hold'em: l'ordine di gioco, dai bui allo showdown",
  seoTitle: "Non sai mai quando puntare? — L'ordine di gioco nel Texas Hold'em",
  desc: "Vai nel pallone quando tocca a te nel Hold'em? Ecco l'ordine di gioco completo — preflop, flop, turn, river e showdown — con una mano vera spiegata passo passo.",
  tldr: "Una mano di Texas Hold'em segue quest'ordine: si mettono i bui → si distribuiscono due carte personali → preflop → flop (3 carte) → turn (1 carta) → river (1 carta) → showdown, con quattro giri di puntate in tutto.",
  category: "rules",
  date: "2026-06-10",
  updated: "2026-07-13",
  masterUpdated: "2026-07-02",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🎬",
  image: "/images/blog-holdem-game-flow.webp",
  imageAlt: "Diagramma dell'ordine di gioco del Texas Hold'em — le sei fasi: bui, preflop, flop, turn, river e showdown",
  tags: ["come si gioca a texas holdem", "regole texas holdem", "ordine di gioco poker", "preflop flop turn river", "giri di puntate poker", "chi parla per primo poker", "come funziona una mano di poker", "showdown poker"],
  content: `
Chiunque si sieda alla sua prima partita di Texas Hold'em fa la stessa domanda: ==r:*"Aspetta — a chi tocca, e quando devo mettere i soldi?"*== Sai che ti danno le carte. Quello che non sai è quando si punta, quando escono altre carte e come si decide davvero il vincitore.

Questa è la **guida all'ordine di gioco**: bui, preflop, flop, turn, river, showdown, e chi parla per primo in ogni momento. Se parti da zero e vuoi il pacchetto completo per principianti — regole, fiches, classifica delle mani, prima strategia e un PDF stampabile — comincia dalle [regole del Texas Hold'em per principianti](/it/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp"). Poi torna qui per lo sviluppo dettagliato della mano.

---

### Una mano in 15 secondi

Si mettono i bui (puntate obbligatorie) → si distribuiscono due **carte personali** a ogni giocatore → puntate del **preflop** → si scoprono le tre carte del **flop** → puntate → si aggiunge la carta del **turn** → puntate → si scopre l'ultima carta, il **river** → puntate → i giocatori rimasti vanno allo showdown → vince la migliore mano da cinque carte.

![Ordine di gioco del Texas Hold'em — bui, preflop, flop, turn, river e showdown](/images/blog-holdem-game-flow.webp "Le sei fasi di una mano di Texas Hold'em, dai bui allo showdown")

---

## Cos'è il Texas Hold'em?

Il Texas Hold'em è la specialità di poker più giocata al mondo. Dal Main Event delle WSOP a una partita casalinga tra amici, quando qualcuno dice "poker" quasi sempre intende Hold'em.

La regola centrale è semplice: formi la tua **migliore mano da cinque carte** combinando le tue **due carte personali con cinque carte comuni condivise**. La fortuna distribuisce le carte, ma capire l'ordine di gioco — e prendere la decisione giusta in ogni fase — è ciò che separa i vincenti da tutti gli altri.

---

## Prima della distribuzione: il bottone e i bui

Prima che esca una sola carta, due cose danno l'ordine al tavolo: il **bottone del dealer** e i **bui**.

Il **bottone del dealer (il "bottone", segnato con una D)** è un dischetto rotondo che indica chi "distribuisce" in quella mano. Anche quando c'è un mazziere della casa, è il bottone a decidere l'ordine delle puntate, e si sposta di un posto in senso orario dopo ogni mano.

I **bui** sono puntate obbligatorie messe prima di distribuire le carte. Senza di essi, tutti potrebbero fare check e passare gratis; ==g:i bui mettono soldi al centro e danno ai giocatori un motivo per giocarsela==. (Non ti sono chiari? Ecco esattamente [come funzionano il piccolo e il grande buio](/it/blog/holdem-blind-meaning).)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Buio | Posizione | Esempio |
|:---|:---|:---:|
| Piccolo buio (SB) | Primo posto a sinistra del bottone | 1.000 |
| Grande buio (BB) | Secondo posto a sinistra del bottone | 2.000 |

</div>

I bui non sono solo una quota d'ingresso — ==sono il punto di partenza della posizione e della strategia==.

---

## Fase 1 — Preflop: la prima decisione dà il tono

Messi i bui, il dealer distribuisce a ogni giocatore due **carte personali** coperte. Solo tu puoi vederle, e cominciano le puntate del **preflop**.

L'azione parte alla sinistra del grande buio e prosegue in senso orario. Quando tocca a te, scegli una di queste opzioni:

- **Fold (passare)** — abbandoni la mano e butti le carte. Non perdi altro, ma non puoi vincere.
- **Call (chiamare)** — pareggi la puntata attuale (nel preflop, il grande buio).
- **Raise (rilanciare)** — punti più del grande buio per mettere pressione agli avversari.
- **3-bet (ri-rilancio)** — un rilancio sopra il rilancio di un altro. Segnale di mano forte.

==r:La maggior parte dei principianti gioca quasi tutte le mani "tanto per vedere il flop". È l'abitudine più costosa che esista nel poker.== ==g:**I bravi giocatori passano la maggior parte delle mani nel preflop e ne giocano solo tra il 15 e il 25%.**==

### Mani iniziali solide per cominciare

- **Premium:** A♠A♥ (coppia d'assi in mano), K♠K♥, Q♠Q♥, J♠J♥
- **Forti:** A♠K♥ ("Big Slick"), A♠Q♥, A♠J♥, 10♠10♥
- **A seconda della situazione:** 9♠9♥, 8♠8♥, K♠Q♥, K♠J♥

Quali di queste puoi aprire davvero dipende dal tuo posto al tavolo. La tabella completa delle 169 mani iniziali del Texas Hold'em, suddivisa per posizione, merita una guida a parte.

---

## Fase 2 — Il flop: tre carte comuni

Quando finiscono le puntate del preflop, il dealer scopre tre **carte comuni** al centro del tavolo. Questo è il **flop**.

Ora puoi leggere una vera mano da cinque carte: le tue due carte personali più le tre sul board. Guarda due cose contemporaneamente:

- **Cosa hai adesso** — una coppia, doppia coppia, o ancora niente.
- **Cosa puoi ancora fare** — un progetto (**draw**) di colore o di scala che può completarsi nelle strade successive.

![Infografica delle tre strade del Texas Hold'em — il flop K♥ 7♦ 2♣, il turn 9♠ e il river Q♥](/images/blog-holdem-card-stages.webp "Le strade: tre carte sul flop, poi una sul turn e una sul river")

Il flop sblocca anche un'opzione nuova: il **check (bussare)**. Se nessuno ha ancora puntato, puoi fare check e cedere l'azione senza mettere fiches. Ma se un avversario punta dopo il tuo check, dovrai chiamare, rilanciare o passare.

---

## Fase 3 — Il turn: il quadro si fa più nitido

Dopo il giro di puntate del flop, si distribuisce un'altra carta comune — il **turn**. Ora ci sono quattro carte sul board.

Il turn è una strada dal grande peso strategico:

- Il tuo progetto di scala o di colore si è completato?
- Cosa dicono le azioni dell'avversario nel preflop e nel flop sul suo range?
- Vale la pena portare questa mano fino al river?

==r:Se bussi in modo passivo al turn e poi all'improvviso spari una puntata grossa al river, gli avversari attenti leggono debolezza.== ==g:**Con una mano forte, punta al turn per gonfiare il piatto**== mentre l'avversario è ancora disposto a chiamare.

---

## Fase 4 — Il river: l'ultima carta, l'ultima decisione

Dopo il giro di puntate del turn si scopre la quinta e ultima carta comune — il **river**. Ora sono fuori tutte e cinque le carte comuni e non arriverà più nessuna informazione nuova.

Errori classici del river:

- **Chiamare fino alla fine con una mano debole** — la trappola del "ormai sono arrivato fin qui…".
- **Bussare con una mano forte** — regalare all'avversario uno showdown gratis.
- **Tentare un bluff improvviso al river** — se sei stato passivo in tutte le strade precedenti, una puntata grossa al river raramente racconta una storia credibile.

Il river è dove si chiude tutta la mano. Metti sul piatto della bilancia la forza della tua mano, lo schema di puntate dell'avversario e l'intero board, e prendi la tua decisione finale.

---

## Fase 5 — Showdown: vince la migliore mano da cinque carte

Se dopo le puntate del river restano due o più giocatori, la mano va allo **showdown**.

![Infografica dello showdown nel poker — su un board 10♣ 7♥ J♦ 4♠ 9♣, la coppia d'assi A♥ A♦ batte la coppia di re K♥ K♣](/images/blog-holdem-showdown.webp "Allo showdown i giocatori rimasti mostrano le carte — qui la coppia più alta, assi contro re, si porta a casa il piatto")

Regole dello showdown:

- Ogni giocatore forma la sua **migliore mano da cinque carte** con le due carte personali e le cinque comuni.
- Non sei obbligato a usare entrambe le carte personali — puoi usarne una, o addirittura giocare il board (zero) se sono quelle le tue cinque carte migliori.
- Il giocatore che ha fatto l'ultima azione aggressiva (puntata o rilancio) mostra per primo; se al river è stato check da tutti, mostra per primo il **primo giocatore attivo a sinistra del bottone**.
- Un giocatore che perde può semplicemente **buttare le carte senza mostrarle** (fare "muck").
- Le mani uguali **dividono il piatto** ("split") in parti uguali.

Chi deve mostrare per primo, quando puoi buttare senza mostrare e l'etichetta attorno allo slow roll sono spiegati per intero nelle [regole dello showdown](/it/blog/holdem-showdown-rules).

---

## Chi parla per primo in ogni strada?

"A chi tocca?" ha una risposta diversa prima e dopo il flop — e proprio questo cambiamento è il motore di tutta la strategia di posizione.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Strada | Parla per primo | Parla per ultimo |
|------|------|------|
| Preflop | Il giocatore a sinistra del grande buio ("UTG") | Grande buio |
| Flop | Piccolo buio (o il primo giocatore attivo a sinistra del bottone) | Bottone |
| Turn | Come nel flop | Bottone |
| River | Come nel flop | Bottone |

</div>

Il trucco per ricordarlo: ==**prima del flop, guarda a sinistra del grande buio; dopo il flop, guarda a sinistra del bottone.**== Il bottone parla per ultimo in tutte le strade dopo il flop, ed è esattamente per questo che è il posto più redditizio del tavolo — le posizioni nel poker, da UTG al bottone, danno da sole per una guida intera.

==g:**L'heads-up (2 giocatori) è l'eccezione:**== il bottone mette il buio *piccolo* e parla **per primo** nel preflop, ma **per ultimo** nel flop, nel turn e nel river. È l'ordine usato nella mano completa d'esempio qui sotto.

---

## Tutto l'ordine a colpo d'occhio

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Fase | Cosa succede | Carte comuni | Puntate? |
|:---|:---|:---:|:---|
| Bui | SB e BB mettono le puntate obbligatorie | 0 | Obbligatorie |
| Preflop | Si distribuiscono due carte personali → si punta | 0 | ✅ |
| Flop | Si scoprono tre carte comuni | 3 | ✅ |
| Turn | Una carta comune in più | 4 | ✅ |
| River | Ultima carta comune | 5 | ✅ |
| Showdown | Si confrontano le migliori cinque carte → vincitore | 5 | — |

</div>

### ⚡ Una frase per ricordare ogni strada

- **Preflop** = partenza (decidi con le tue due carte soltanto)
- **Flop** = svolta (tre carte aprono le possibilità)
- **Turn** = decisione (la tua ultima vera occasione per pianificare il river)
- **River** = epilogo (tutte le carte fuori, puntata finale)
- **Showdown** = risultato (se lo prendono le migliori cinque carte)

---

## Segui una mano completa, passo passo

![Esempio di una mano completa di Texas Hold'em — dal preflop allo showdown](/images/holdem-game-example-fullhand.webp "Seguiamo una mano completa attraverso tutte le strade fino allo showdown")

Leggere delle strade è astratto. Giochiamo una singola mano heads-up dalla prima carta all'ultima, con carte e importi di fiches reali.

**Situazione:** Heads-up (uno contro uno). Bui: SB 1.000 / BB 2.000.

- **Giocatore A (tu):** A♠ K♥ (asso-re di semi diversi)
- **Giocatore B (avversario):** 9♦ 9♣ (coppia di nove in mano)

### Preflop

A rilancia a **6.000** con il suo Big Slick. B chiama con i nove.
**Piatto: 12.000**

### Flop: K♦ 9♠ 3♥

- **A:** coppia massima con il miglior kicker (coppia di re). Sembra forte.
- **B:** tre nove — un **tris** (set). Già un mostro.

B bussa, A punta **8.000**, B chiama.
**Piatto: 28.000**

### Turn: 2♣

- **A:** nessun cambiamento, resta con la coppia massima.
- **B:** resta con il tris, non ha bisogno di migliorare.

B bussa, A punta **15.000** (circa metà piatto), B chiama.
**Piatto: 58.000**

### River: A♥

- **B:** fa check.
- **A:** l'asso si appaia — ora ha **doppia coppia, assi e re**. Contentissimo, punta **30.000**.
- **B:** il tris continua a schiacciare la doppia coppia. Fa check-raise a **70.000**.
- **A:** convinto che la sua doppia coppia sia buona, chiama.

**Piatto: 198.000**

### Showdown

- A: A♠ K♥ + A♥ K♦ 9♠ → **doppia coppia (assi e re)**
- B: 9♦ 9♣ + 9♠ K♦ A♥ → **tris (di nove)**

**Vincitore: B** — il tris batte la doppia coppia.

La lezione: ==r:quando il river ha trasformato la mano di A in doppia coppia, *sembrava* quella vincente — ma B aveva un tris fin dal flop, per tutto il tempo.== ==g:**Leggere l'intero board, e non solo il tuo miglioramento, è il cuore dell'Hold'em.**==

---

## Le 7 azioni di puntata, spiegate per intero

![Le azioni di puntata nel poker — check, call, fold, bet, raise, ri-rilancio e all-in](/images/holdem-betting-options-guide.webp "Tutte le azioni di puntata che puoi fare nel Texas Hold'em")

Ecco tutte le azioni disponibili al tavolo — la parte che confonde di più i principianti.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Azione | Cosa fa | Quando è disponibile |
|------|------|------|
| Fold | Abbandoni la mano e butti le carte | In qualsiasi momento |
| Check (bussare) | Cedi l'azione senza puntare | Solo se non c'è una puntata davanti a te |
| Call (chiamare) | Pareggi la puntata attuale | Quando c'è una puntata davanti |
| Bet (puntare) | Fai la prima puntata del giro | Quando nessuno ha ancora puntato |
| Raise (rilanciare) | Aumenti sopra la puntata attuale | Quando c'è una puntata davanti |
| Re-raise (3-bet) | Rilanci sopra un rilancio | Quando c'è un rilancio davanti |
| All-in | Metti tutte le tue fiches | In qualsiasi momento |

</div>

==r:**Importante:** nel preflop non puoi fare check — con un'eccezione.== Il grande buio è già una puntata viva, quindi tutti gli altri devono chiamare, rilanciare o passare. ==Solo il grande buio può fare check, se nessuno ha rilanciato; per tutti gli altri il check diventa possibile a partire dal flop.==

Per una guida decisionale più approfondita su quando usare ogni mossa — con una tabella di decisione check-call-raise-fold — guarda le [azioni di puntata spiegate](/it/blog/holdem-betting-actions).

---

## Le 10 mani del poker che devi conoscere

Per vincere allo showdown devi sapere all'istante quale mano batte quale. Questo è l'ordine della **classifica delle mani** (punti).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Mano | Esempio | Frequenza |
|------|------|------|------|
| 1 | Scala Reale Massima | A♠ K♠ Q♠ J♠ 10♠ | Rarissima |
| 2 | Scala a Colore | 5♥ 6♥ 7♥ 8♥ 9♥ | Molto rara |
| 3 | Poker | A♠ A♥ A♦ A♣ K♠ | Rara |
| 4 | Full | K♠ K♥ K♦ A♠ A♥ | Poco frequente |
| 5 | Colore | A♠ K♠ 8♠ 5♠ 2♠ | Poco frequente |
| 6 | Scala | 5♥ 6♠ 7♦ 8♣ 9♥ | Occasionale |
| 7 | Tris | Q♠ Q♥ Q♦ 5♠ 7♥ | Occasionale |
| 8 | Doppia Coppia | J♠ J♥ 8♦ 8♣ A♠ | Comune |
| 9 | Coppia | K♠ K♥ 7♦ 4♣ 2♠ | Molto comune |
| 10 | Carta Alta | A♠ Q♥ 8♦ 5♣ 2♠ | Molto comune |

</div>

Vuoi la scomposizione completa — compreso come i kicker e le parità decidono il vincitore? La classifica dei punti del poker, dalla migliore alla peggiore, merita una guida dedicata.

---

## I 5 errori che ogni principiante deve evitare

Puoi saperti l'ordine di gioco a memoria e continuare comunque a perdere fiches se cadi in questi.

### 1. Giocare quasi tutte le mani

"Vediamo un flop" è perdente sul lungo periodo. I giocatori forti giocano solo il 15–25% delle mani e passano il resto senza esitare. Se chiami nel preflop con due carte qualsiasi, stai pagando per perdere.

### 2. Ignorare la posizione

Più sei vicino al bottone, meglio è — parlare per ultimo ti fa vedere cosa fanno tutti gli altri prima di decidere. Gioca tight (chiuso) nelle posizioni iniziali e più aggressivo in quelle tardive, e studia la mappa dei posti e i range di apertura di ogni posizione, da UTG al bottone.

### 3. Inseguire i progetti alla cieca

Un progetto di colore o di scala non significa chiamare in automatico. Devi pesare le **pot odds** — il prezzo della chiamata rispetto alla dimensione del piatto. Se il piatto è di 100.000 e devi chiamare 50.000, il tuo progetto deve completarsi almeno circa il 33% delle volte perché convenga.

### 4. Bluffare al river con una mano debole all'improvviso

Se sei stato passivo per tutta la strada e poi spingi tutto al river, gli avversari ti leggono all'istante. Un bluff ha bisogno di una storia coerente fin dalla prima strada.

### 5. Leggere male la propria mano allo showdown

Un classico del principiante: pensare "ho doppia coppia!" quando in realtà hai una coppia sola. Allenati a scegliere le **migliori cinque carte** tra le tue due carte personali e le cinque del board finché non ti viene automatico.

---

## Come iniziare a giocare già oggi

Quando l'ordine di gioco ti fa "clic", è ora di giocare sul serio.

- **Fai pratica con soldi finti** — quasi tutte le app e le poker room offrono partite gratis. Metti questa guida al lavoro in una partita vera.
- **Rileggi questo articolo due o tre volte** — la sequenza deve venirti naturale per non bloccarti mai al tavolo.
- **Fatti un bigliettino con la classifica delle mani** — scrivi le dieci mani su un foglio e tienilo in vista.
- **Comincia dai limiti più bassi** — più i tuoi errori costano poco, più veloce impari.

Il Texas Hold'em si impara in mezz'ora e ci vuole una vita per padroneggiarlo. Ma con le basi che hai visto oggi hai già più che abbastanza per sederti a giocare. Per la storia e le regole formali, la [voce di Wikipedia sul Texas hold 'em](https://it.wikipedia.org/wiki/Texas_hold_%27em) è un buon riferimento.

---

:::readnext[Continua a leggere]
/it/blog/texas-holdem-rules-for-beginners | Regole del Texas Hold'em per principianti | /images/rules-texas-holdem.webp
/it/blog/holdem-betting-actions | Le azioni di puntata spiegate | /images/holdem-betting-actions-hero.webp
:::

## Domande frequenti

**Q. Qual è l'ordine di gioco esatto nel Texas Hold'em?**

A. Si mettono i bui → si distribuiscono due carte personali → puntate del preflop → si scopre il flop (3 carte) e si punta → turn (1 carta) e si punta → river (ultima carta) e si punta → showdown (si confrontano le migliori cinque carte).

**Q. Che differenza c'è tra il preflop e il flop?**

A. Il preflop è prima che esca qualsiasi carta comune — decidi con le tue due carte personali soltanto. Il flop è quando sono già state scoperte tre carte comuni, e lì leggi sia la tua mano attuale sia il tuo potenziale di progetto.

**Q. Che differenza c'è tra fare check (bussare) e chiamare?**

A. Il check cede l'azione senza puntare, ed è possibile solo quando non c'è nessuna puntata davanti a te. La chiamata pareggia la puntata di un avversario. Se qualcuno ha puntato, non puoi fare check — devi chiamare, rilanciare o passare.

**Q. Sono obbligato a usare entrambe le mie carte personali allo showdown?**

A. No. Formi la migliore mano da cinque carte con qualsiasi combinazione delle tue due carte personali e delle cinque comuni — anche usandone una sola, o nessuna ("giocare il board").

**Q. Cosa sono le pot odds?**

A. Le pot odds sono il rapporto tra la dimensione attuale del piatto e quanto ti costa chiamare. Se il piatto è di 100.000 e un avversario punta 20.000, rischi 20.000 per vincere un piatto da 120.000 (6:1). Se la tua probabilità di vincere è migliore di quelle odds, chiamare è redditizio.

**Q. Quando dovrei andare all-in?**

A. L'all-in significa puntare tutte le fiches che hai. Usalo con una mano molto forte (le nuts), oppure come bluff per far passare gli avversari. Una volta all-in non puoi più puntare, ma resti in corsa per la parte del piatto che hai pareggiato. Quando gli stack sono diversi si creano i piatti laterali (side pot) — guarda le [regole dell'all-in e dei side pot](/it/blog/holdem-all-in-rules).

**Q. Quanti giri di puntate ci sono in una mano?**

A. Quattro: preflop, flop, turn e river. I bui sono puntate obbligatorie, e allo showdown non si punta più.

---

## Le 3 cose da ricordare

1. ==**L'ordine:**== bui → preflop → flop (3) → turn (1) → river (1) → showdown, con ==quattro giri di puntate==.
2. ==**Le letture:**== in ogni strada, valuta insieme cosa hai adesso e cosa puoi ancora fare — e guarda l'intero board, non solo la tua mano.
3. ==g:**La disciplina:**== passa la maggior parte delle mani nel preflop, rispetta la posizione e punta forte solo quando la tua storia ha un senso.

Imparati la sequenza a memoria, macinala nelle partite gratis e non ti bloccherai mai più chiedendoti a chi tocca. Sei pronto a sederti al tavolo.

---

## Articoli correlati

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/it/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guida per principianti</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regole del Texas Hold'em per principianti</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Regole complete, fiches, classifica delle mani + PDF stampabile</div>
  </a>
  <a href="/it/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Azioni di puntata</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Le azioni di puntata spiegate</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Check, call, bet, raise, all-in — con tabella di decisione</div>
  </a>
</div>
`.trim(),
};
