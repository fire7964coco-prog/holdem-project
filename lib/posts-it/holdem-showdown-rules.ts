import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Regole dello showdown nel Texas Hold'em: chi mostra per primo, il muck e lo slow roll",
  seoTitle: "Chi gira per primo? Regole dello showdown e del muck",
  desc: "Chi mostra le carte per primo allo showdown? Puoi passare senza scoprire? Ultimo aggressore, cards speak, slow roll e all-in spiegati senza giri di parole.",
  tldr: "Allo showdown mostra per primo l'ultimo giocatore che ha puntato o rilanciato. Se al river hanno fatto tutti check, mostra per primo il primo giocatore attivo alla sinistra del bottone. Se hai perso puoi passare le carte coperte, ma gli avversari possono chiedere di vedere una mano che è stata pagata.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "regole showdown poker",
    "chi mostra le carte per primo poker",
    "muck poker",
    "slow roll poker",
    "showdown all in texas holdem",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infografica dello showdown nel Texas Hold'em — su un board 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ vince con coppia di re e kicker asso",
  content: `
Paghi la puntata al river. E ora ve ne state lì tutti e due a fissarvi, ognuno che aspetta che sia l'altro a girare per primo.

Nessuno si muove.

Il dealer guarda ora l'uno ora l'altro. Il resto del tavolo sospira.

==Questo braccio di ferro si ripete a quasi ogni tavolo dal vivo== — perché la maggior parte dei principianti non ha mai imparato chi deve davvero mostrare per primo. Questa guida copre tutte le situazioni dello showdown: mani normali, river chiusi in check, all-in, e perché fare slow roll ti farà guardare storto per il resto della serata.

## Chi deve mostrare le carte per primo allo showdown?

La regola dipende da come si è chiuso l'ultimo giro di puntate (per la sequenza completa, strada per strada, che ti porta fin qui, guarda [l'ordine di gioco](/it/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Azione sull'ultima strada | Chi mostra per primo |
|--------------------|-----------------|
| Qualcuno ha puntato o rilanciato al river | ==L'ultimo giocatore che ha puntato o rilanciato== mostra per primo |
| Tutti hanno fatto check al river | Il primo giocatore attivo alla sinistra del bottone mostra per primo |
| All-in su una strada precedente (nessuna puntata al river) | Tutte le mani vengono scoperte prima o durante la distribuzione delle carte restanti |

</div>

![Infografica dell'ordine dello showdown nel Texas Hold'em — chi mostra per primo su un board J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:La frase chiave è «ultimo aggressore».== Se hai puntato al river e ti hanno pagato, mostri tu per primo — non chi ha pagato. Chi paga ha il diritto di vedere la tua mano prima di decidere se scoprire la propria o passarla.

---

## Puoi passare le carte senza scoprirle allo showdown?

Sì — **se hai perso**.

Una volta che l'ultimo aggressore mostra la sua mano, gli altri giocatori possono:
- **Mostrare la propria mano** se pensano di vincere
- **Passarla coperta nel muck** se vedono di aver perso — non serve rivelare le tue carte

==r:Ma c'è un'eccezione importante:== se la tua puntata al river è stata pagata, chi ha pagato ha versato il prezzo pieno per vedere la tua mano. Qualsiasi giocatore che ha ricevuto le carte in quella mano può chiedere al dealer di girare una mano finita nel muck ma coinvolta in uno showdown pagato — la regola del **"I want to see that hand"** in gran parte delle sale. (Da non confondere con "show one, show all", che significa che se mostri le tue carte volontariamente a un giocatore, tutto il tavolo ha diritto di vederle.)

Regola pratica: ==se andavi di bluff e ti hanno pagato, passa le carte in fretta. Se hai puntato a valore e ti hanno pagato, girale.==

---

## Ordine dello showdown quando tutti hanno fatto check al river

Se nessuno ha puntato al river (tutti check), lo showdown parte dal **primo giocatore attivo alla sinistra del bottone** e prosegue in senso orario.

Esempio: bottone, piccolo buio (SB) e grande buio (BB) arrivano al river. La SB fa check, la BB fa check, il bottone fa check. Lo showdown parte dalla SB (primo giocatore attivo alla sinistra del bottone). La SB può mostrare o passare. Poi la BB. E il bottone per ultimo.

==g:In questo caso il bottone mostra per ultimo== — il che è in realtà un vantaggio. Il bottone può vedere se qualcuno lo batte prima di decidere se girare le sue carte.

---

## Regole dello showdown con all-in — mostra per primo chi va all-in?

Quando un giocatore va all-in e non sono più possibili puntate, di solito si distribuiscono le carte comuni restanti con **tutte le mani scoperte**. Questo tutela l'integrità della mano — nessuno dovrebbe poter passare le carte in modo strategico in una situazione di all-in.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Scenario di all-in | Regola dello showdown |
|----------------|---------------|
| Un giocatore va all-in, gli altri pagano, nessuna puntata ulteriore possibile | Tutte le mani scoperte prima o durante la distribuzione |
| Una puntata all-in al river viene pagata | Showdown normale — chi è andato all-in è l'ultimo aggressore e mostra per primo |
| Più all-in che creano più side pot | Ogni piatto si risolve separatamente; si mostrano tutte le mani coinvolte |

</div>

Una sfumatura: se c'è un **side pot** (altri giocatori hanno ancora fiches e continuano a puntare), il side pot viene assegnato per primo — mostra per primo l'ultimo aggressore tra quei giocatori con fiches — e poi il piatto principale, dove viene mostrata la mano del giocatore andato all-in.

Per capire come si formano e si pagano i side pot quando ci sono giocatori all-in, guarda [le regole dell'all-in e i side pot](/it/blog/holdem-all-in-rules); per i piatti divisi valgono le regole dello split pot.

---

## Cos'è la regola «le carte parlano» (cards speak)?

![Infografica della regola cards speak — un board 8♠ 9♣ 10♥ J♦ Q♠ forma una scala alla donna, e allo showdown le carte parlano da sole](/images/holdem-showdown-cards-speak.webp)

"Cards speak" significa che ==vince la mano migliore, qualunque cosa dica ogni giocatore==.

Se un giocatore legge male la propria mano e dice "ho coppia", ma in realtà ha una scala — vince la scala. Il dealer legge le carte e spinge il piatto verso la mano migliore mostrata.

E vale in entrambi i sensi. Se pensi di aver perso e passi senza mostrare, ma la tua mano era quella vincente — ==r:il piatto è perso==. La tua mano è morta nel momento in cui tocca il muck. Se non sei sicuro al 100% di aver perso, lascia sempre che il dealer legga la tua mano prima di passarla.

Situazione reale: hai J♥ 10♥ su un board Q♥ 9♥ 8♥ 2♣ 5♦. Hai una scala a colore alla donna (Q-J-10-9-8 di cuori). L'avversario mostra K♣ Q♦ (una coppia di donne). Vinci a mani basse. Non passare le carte solo perché gli vedi la donna.

---

## Cos'è lo slow roll nel poker?

Lo slow roll è ==prendersi apposta tanto tempo per mostrare una mano molto forte quando sai già di aver vinto==.

Hai le nuts. L'avversario mostra una mano forte. Tu fai una pausa, fingi di pensare, guardi le tue carte lentamente, fai aspettare tutti — e poi giri la vincente. Tecnicamente legale. Universalmente odiato.

![Slow roll nel poker — gli altri giocatori spazientiti mentre un giocatore ritarda apposta a mostrare la mano vincente](/images/holdem-showdown-slow-roll.webp)

==r:Lo slow roll è il modo più rapido per farsi dei nemici a un tavolo da poker.== Viene interpretato come voler rinfacciare la vittoria di proposito. La regola non scritta: se hai la miglior mano possibile, giravla subito. Lo slow roll non ha nessun vantaggio strategico. L'unico risultato è tensione al tavolo.

Da non confondere con il **tanking** — prendersi legittimamente del tempo per una decisione difficile. Quello è accettato, anzi rispettato. Fare slow roll con le nuts è un'altra cosa.

---

## Devi mostrare le tue carte se vinci senza showdown?

No. ==g:Se tutti passano prima dello showdown, ti prendi il piatto senza mostrare nemmeno una carta.==

Puoi mostrarle se vuoi — c'è chi mostra un bluff per mandare in tilt l'avversario, o una mano forte per costruirsi un'immagine tight. Ma non sei mai obbligato a mostrare le tue carte quando vinci perché tutti gli altri hanno passato.

È uno dei motivi per cui il poker è interessante. Non vince sempre la mano migliore — vince l'ultimo che resta in piedi.

---

## Galateo dello showdown — cosa sbagliano i principianti

### Errore 1: aspettare che mostri per primo chi ha pagato

Punti il river. Qualcuno ti paga. Resti immobile ad aspettare che scopra lui. È il contrario. ==Mostri tu per primo — eri l'ultimo aggressore.== Aspettare sembra uno slow roll anche quando non lo è.

### Errore 2: passare le carte prima che il dealer legga la mano

Sei quasi sicuro di aver perso. Spingi le tue carte coperte verso il muck. Il dealer le raccoglie. Salta fuori che avevi la vincente. La mano è morta — piatto perso. ==Non passare mai finché non sei certo.== Lascia che il dealer legga entrambe le mani.

### Errore 3: pretendere di vedere ogni mano pagata

In gran parte delle sale puoi chiedere al dealer di esporre una mano finita nel muck — ma solo una mano che è stata pagata ed è arrivata allo showdown. Le mani foldate sono morte e non si possono più recuperare. Questa regola esiste per proteggere contro la collusione, non per soddisfare la curiosità, e abusarne è considerato maleducato. Usala con parsimonia.

### Errore 4: non sapere che puoi mostrare in anticipo

Non c'è nessuna regola che vieti di girare la tua mano prima che sia ufficialmente il tuo turno. ==g:Se hai le nuts o una mano molto forte, mostrala subito.== Gli altri giocatori lo apprezzano. Velocizza la partita. Ed è l'esatto contrario dello slow roll.

---

:::readnext[Continua a leggere]
/it/blog/holdem-game-order | L'ordine di gioco | /images/blog-holdem-game-flow.webp
/it/blog/holdem-all-in-rules | Regole dell'all-in e side pot | /images/holdem-all-in-rules-hero.webp
:::

## Domande frequenti

**Q. Chi mostra le carte per primo allo showdown nel poker?**

A. L'ultimo giocatore che ha fatto un'azione aggressiva (puntare o rilanciare) nell'ultimo giro di puntate deve mostrare per primo. Se nell'ultimo giro hanno fatto tutti check, mostra per primo il primo giocatore attivo alla sinistra del bottone, e il turno prosegue in senso orario.

**Q. Devi mostrare le carte se ti pagano allo showdown?**

A. Sì — se sei stato l'ultimo a puntare o rilanciare al river, devi mostrare per primo quando ti pagano. Se hai pagato la puntata di un altro, puoi passare le carte coperte dopo aver visto la sua mano se hai perso. Detto questo, in gran parte delle sale qualsiasi giocatore al tavolo può chiedere al dealer di rivelare una mano pagata che è stata passata nel muck.

**Q. Puoi passare le carte allo showdown senza mostrarle?**

A. Sì, ma solo se hai perso chiaramente. Una volta mostrata la mano vincente, i giocatori che perdono possono passare le carte coperte. L'eccezione è quando la tua mano è stata pagata — gli avversari possono chiedere di vederla. Se c'è un qualsiasi dubbio su chi ha vinto, non passare mai prima che il dealer legga entrambe le mani.

**Q. Cos'è lo slow roll nel poker e perché è visto male?**

A. Lo slow roll è ritardare apposta a mostrare una mano vincente che già sai essere la migliore. È legale, ma universalmente odiato, perché viene visto come umiliare l'avversario di proposito. Se hai le nuts o una vincente chiara, gira le carte subito. La velocità con cui mostri dice molto di te al tavolo.

**Q. In una situazione di all-in, chi mostra per primo?**

A. Quando un giocatore va all-in e non sono possibili altre puntate, tutte le mani coinvolte in quel piatto vengono di norma scoperte prima o durante la distribuzione delle carte comuni restanti. Se c'è un side pot con puntate ancora in corso, l'ultimo aggressore tra quei giocatori mostra per primo per il side pot. La mano del giocatore all-in viene mostrata a parte per il piatto principale.

**Q. Cosa significa "cards speak" nel poker?**

A. Cards speak («le carte parlano») significa che vince la mano migliore in base a ciò che mostrano davvero le carte — non in base a ciò che dicono i giocatori. Un giocatore che legge male la propria mano e annuncia una mano sbagliata vince comunque se le sue carte sono in realtà la mano migliore. E al contrario: chi passa le carte senza verificare di aver perso non ha alcun diritto sul piatto, anche se la sua mano avrebbe vinto.

**Q. Devi mostrare le carte se vinci senza showdown?**

A. No. Se tutti gli altri passano prima dello showdown, vinci il piatto subito e non devi mai rivelare le tue carte. Mostrarle è facoltativo — alcuni giocatori girano un bluff per stuzzicare l'avversario, ma non sei mai obbligato a mostrare una mano che ha vinto senza opposizione.

---

## Articoli correlati

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/it/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilastro</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regole del Texas Hold'em per principianti</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Le regole complete — dai bui allo showdown</div>
  </a>
</div>
`.trim(),
};
