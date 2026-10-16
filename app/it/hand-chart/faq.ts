// EN FAQ, with direction made explicit: looser means a wider range, with more hands.
export const HAND_CHART_FAQ_IT: { q: string; a: string }[] = [
  {
    q: "Devo seguire la tabella delle mani iniziali alla lettera?",
    a: "La tabella è un punto di partenza. A un tavolo 6-max, rispetto al 9-max usa un range più largo di una o due posizioni: includi più mani. Con gli ante allarga l'intero range del 5–8%. Ai tavoli pieni di giocatori deboli, giocare più stretto per massimizzare il valore tende a essere più profittevole.",
  },
  {
    q: "Le mani iniziali sono esattamente 169?",
    a: "Sì. Raggruppando le combinazioni equivalenti per seme, ci sono esattamente 169 tipi di mano: 13 coppie servite, 78 mani suited e 78 offsuit. Nel mazzo le combinazioni effettive sono invece 1.326.",
  },
  {
    q: "Perché il grande buio non compare nella tabella?",
    a: "BB ha già investito 1 grande buio, quindi gioca in difesa (call o controrilancio) anziché aprire con un rilancio. Il suo range di difesa dipende interamente dalla posizione e dalla dimensione del rilancio di chi apre: serve quindi una tabella dedicata.",
  },
  {
    q: "Va bene aprire un range del 42% dal bottone?",
    a: "In termini GTO, un range di apertura dal bottone arriva effettivamente al 40–50%. Se però gli avversari sono tight o inesperti, concentrarsi maggiormente sulle mani premium può essere più profittevole al tavolo. Questa poker hand chart offre una base bilanciata.",
  },
  {
    q: "Come reagisco a una 3-bet?",
    a: "Il range con cui apri e quello con cui chiami una 3-bet sono diversi. In genere rispondi a una 3-bet con mani premium come AA-JJ e AKs-AQs, più alcuni bluff: assi suited della wheel come A5s e A4s, che bloccano AA/AK e possono chiudere il colore nuts. Folda il resto.",
  },
];
