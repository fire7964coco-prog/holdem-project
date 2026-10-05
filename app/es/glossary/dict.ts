// /es/glossary — diccionario de la herramienta de glosario (회차 2 · 2026-10-05).
//
// 정의 출처: 글 축어 37개 (lib/posts-es/holdem-glossary.ts 표 문안 · 링크 표기만 제거 · 일부는 1절로 자름)
//          · 번역 9개 = Board · Flop · Turn · River · Preflop · Offsuit(De distinto palo) · Outs · Posición · SPR
//            (글에 독립 항목이 없거나 «Flop / Turn / River»처럼 묶여 있어 EN desc를 번역 · 표기는 translation-terms-es + 코퍼스)
// SEO 헤드텀: DataForSEO google_ads search_volume (전세계 · 2026-10-05 · 1회, pt와 같은 요청)
//   «terminos de poker» 140 · «glosario de poker» 50 · «diccionario de poker» 30 · «palabras de poker» 30 · «vocabulario de poker» 10
//   → 앞머리 «Términos de póker», 뒤에 «glosario». 글 seoTitle(«De los nuts al fish — el glosario de Texas Hold'em»)과 다른 문장.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_ES: GlossaryDict = {
  sortLocale: "es-ES",
  grouping: "letter",
  seo: {
    title: "Términos de póker — glosario de Texas Hold'em de la A a la Z",
    description:
      "Glosario de póker con buscador: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt y más. Busca o filtra los términos esenciales del Texas Hold'em.",
    keywords:
      "términos de póker, glosario de póker, diccionario de póker, palabras de póker, vocabulario de póker, qué significa nuts en póker, outs póker, pot odds, 3-bet, c-bet, ICM póker, SPR póker",
    path: "/es/glossary",
  },
  hero: {
    badge: "♠ {n} términos · buscador de la A a la Z",
    h1: "Glosario de póker",
    leadBefore: "Todos los términos de Texas Hold'em que oirás en la mesa — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " y más — explicados con claridad y precisión. Busca o filtra por categoría.",
  },
  searchPlaceholder: "Busca un término (p. ej. nuts, pot odds, outs)...",
  allLabel: "Todos",
  cats: { Action: "Acciones", Hand: "Manos", Position: "Posición", Math: "Matemáticas", Board: "Mesa", Slang: "Jerga" },
  empty: { title: "No hay términos para «{q}».", hint: "Prueba con otra palabra o categoría." },
  related: {
    ariaLabel: "Guías relacionadas",
    heading: "Sigue aprendiendo",
    items: [
      { href: "/es/blog/texas-holdem-rules-for-beginners", label: "Las reglas", desc: "Ciegas, showdown, lo básico" },
      { href: "/es/blog/holdem-hand-rankings", label: "Jerarquía de manos", desc: "Las 10 manos, en orden" },
      { href: "/es/blog/holdem-strategy", label: "Estrategia", desc: "Posición, pot odds, faroles" },
      { href: "/es/hand-chart", label: "Manos iniciales", desc: "Rangos de apertura por posición" },
      { href: "/es/calculator", label: "Calculadora", desc: "Probabilidades, pot odds, ICM" },
    ],
  },
  terms: [
    { term: "3-bet", cat: "Action", desc: "La resubida tras un open (la tercera apuesta, contando las ciegas como la primera).", aka: ["3-Bet", "three-bet", "resubida"] },
    { term: "All-in", cat: "Action", desc: "Apostar todas tus fichas; solo puedes ganar la parte del bote que cubriste.", aka: ["all in", "allin"] },
    { term: "Ante", cat: "Action", desc: "Tradicionalmente, una pequeña apuesta forzada de todos para engordar el bote, aparte de las ciegas — la mayoría de los torneos usa hoy un big blind ante que paga un solo asiento por la mesa." },
    { term: "Backdoor (puerta trasera)", cat: "Board", desc: "Un proyecto que necesita dos cartas seguidas (turn y river).", aka: ["Backdoor", "puerta trasera"] },
    { term: "Bad beat", cat: "Slang", desc: "Perder siendo gran favorito ante un proyecto con suerte.", aka: ["Bad Beat"] },
    { term: "Bankroll", cat: "Slang", desc: "El dinero reservado para el póker en general — no las fichas de la mesa." },
    { term: "Ciegas (blinds)", cat: "Action", desc: "Las apuestas forzadas SB/BB que arrancan la acción — también el nombre de los niveles de límite.", aka: ["Blinds", "ciega", "ciega pequeña", "ciega grande", "SB", "BB"] },
    { term: "Farol (bluff)", cat: "Action", desc: "Un farol apuesta con mano floja para que manos mejores se retiren.", aka: ["Bluff", "farolear"] },
    { term: "Board (mesa)", cat: "Board", desc: "Las cartas comunitarias en el centro de la mesa. Un board húmedo está lleno de proyectos y es peligroso; un board seco ofrece pocos proyectos.", aka: ["Board", "mesa", "tablero", "cartas comunitarias"] },
    { term: "Botón (BTN)", cat: "Position", desc: "La posición del repartidor; actúa el último postflop — el mejor asiento de la mesa.", aka: ["Button", "BTN", "boton", "dealer"] },
    { term: "Igualar (call)", cat: "Action", desc: "Pagar la apuesta actual para seguir en la mano.", aka: ["Call", "pagar"] },
    { term: "Pasar (check)", cat: "Action", desc: "Ceder la acción sin apostar — solo posible cuando no te queda ninguna apuesta por igualar.", aka: ["Check"] },
    { term: "Check-raise", cat: "Action", desc: "Pasar y luego subir después de que un rival apueste — una línea fuerte y engañosa (legal en salas modernas).", aka: ["Check-Raise", "checkraise"] },
    { term: "C-bet (apuesta de continuación)", cat: "Action", desc: "Una «apuesta de continuación» en el flop por parte del que subió preflop.", aka: ["Continuation Bet", "C-Bet", "cbet", "apuesta de continuacion"] },
    { term: "Cooler", cat: "Slang", desc: "Una gran mano que pierde ante otra mayor sin error de nadie." },
    { term: "Proyecto (draw)", cat: "Hand", desc: "Una mano que necesita mejorar — p. ej. un proyecto de color (4 a color) o proyecto de escalera.", aka: ["Draw", "proyecto de color", "proyecto de escalera"] },
    { term: "Equity", cat: "Math", desc: "Tu porcentaje del bote ahora mismo, según tu probabilidad de ganar.", aka: ["equidad"] },
    { term: "Flop", cat: "Board", desc: "Las tres primeras cartas comunitarias, que se reparten a la vez; les sigue la segunda ronda de apuestas." },
    { term: "Retirarse (fold)", cat: "Action", desc: "Tirar tu mano y renunciar a cualquier derecho sobre el bote.", aka: ["Fold", "foldear", "tirarse"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — una estrategia equilibrada e inexplotable de los solvers.", aka: ["Game Theory Optimal"] },
    { term: "Gutshot", cat: "Hand", desc: "Un proyecto de escalera interior que necesita un valor del medio (4 outs).", aka: ["proyecto interior", "gut shot"] },
    { term: "Rango (range)", cat: "Math", desc: "El conjunto completo de manos que un jugador podría tener en un spot; los pros piensan en rangos, no en manos sueltas.", aka: ["Hand Range", "Range", "rango de manos"] },
    { term: "ICM", cat: "Math", desc: "El Independent Chip Model — convierte las fichas de torneo en equity de dinero real cerca de los saltos de premio.", aka: ["Independent Chip Model"] },
    { term: "Kicker", cat: "Hand", desc: "Una carta de acompañamiento que desempata entre manos por lo demás iguales.", aka: ["carta de desempate"] },
    { term: "Limp (limpear)", cat: "Action", desc: "Entrar preflop solo igualando la ciega grande en vez de subir — normalmente jugada floja y pasiva.", aka: ["Limp", "limpear", "limper"] },
    { term: "Los nuts", cat: "Hand", desc: "La mejor mano posible dada la mesa actual (puede cambiar en calles posteriores).", aka: ["Nuts", "the nuts", "nut"] },
    { term: "De distinto palo (offsuit)", cat: "Hand", desc: "Dos cartas de palos distintos (p. ej. A♠K♦). Algo más débil que la versión del mismo palo de esa mano, porque tiene muchas menos probabilidades de ligar color.", aka: ["Offsuit", "off suit", "AKo"] },
    { term: "Outs", cat: "Math", desc: "Las cartas que quedan en la baraja y te mejoran hasta la mano ganadora. Un proyecto de color tiene 9 outs; un proyecto abierto de escalera, 8.", aka: ["out"] },
    { term: "Sobrepar (overpair)", cat: "Hand", desc: "Un par servido más alto que cualquier carta de la mesa.", aka: ["Overpair"] },
    { term: "Posición", cat: "Position", desc: "Dónde actúas en el orden de apuestas. Actuar más tarde («en posición») es una gran ventaja, porque ves actuar a tus rivales antes de decidir.", aka: ["Position", "posicion", "en posición", "fuera de posición", "IP", "OOP"] },
    { term: "Bote (pot)", cat: "Board", desc: "El total de fichas que se juegan.", aka: ["Pot"] },
    { term: "Pot odds", cat: "Math", desc: "La proporción entre el bote y el coste de igualar.", aka: ["Pot Odds", "odds del bote"] },
    { term: "Preflop", cat: "Board", desc: "La primera ronda de apuestas, antes de cualquier carta comunitaria, cuando cada jugador solo tiene sus dos cartas de mano.", aka: ["pre-flop", "pre flop"] },
    { term: "Rake", cat: "Slang", desc: "La comisión que se lleva la sala de la mayoría de los botes.", aka: ["comisión"] },
    { term: "Subir (raise)", cat: "Action", desc: "Aumentar la apuesta actual, obligando a los demás a pagar más o retirarse.", aka: ["Raise", "subida"] },
    { term: "River", cat: "Board", desc: "La quinta y última carta comunitaria; le sigue la última ronda de apuestas antes del showdown.", aka: ["río"] },
    { term: "Semifarol (semi-bluff)", cat: "Action", desc: "Un farol apuesta con mano floja para que manos mejores se retiren; un semifarol lo hace con un proyecto que aún puede mejorar.", aka: ["Semi-Bluff", "semibluff", "semi farol"] },
    { term: "Set", cat: "Hand", desc: "Trío usando un par servido + una carta de la mesa (muy disimulado).", aka: ["trío"] },
    { term: "Showdown", cat: "Board", desc: "Enseñar las manos tras la última apuesta para decidir el ganador." },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — stack efectivo ÷ bote. Un SPR bajo favorece comprometerse con manos hechas fuertes; un SPR alto premia los proyectos y la habilidad postflop.", aka: ["Stack-to-Pot Ratio"] },
    { term: "Stack", cat: "Slang", desc: "Las fichas que tiene un jugador delante.", aka: ["fichas"] },
    { term: "Tilt", cat: "Slang", desc: "Juego malo movido por las emociones, normalmente tras una derrota.", aka: ["tiltearse"] },
    { term: "Trips", cat: "Hand", desc: "Trío usando una carta de mano + una pareja en la mesa (peor control del kicker)." },
    { term: "Turn", cat: "Board", desc: "La cuarta carta comunitaria, que se reparte después del flop; le sigue su propia ronda de apuestas." },
    { term: "Apuesta de valor (value bet)", cat: "Action", desc: "Una apuesta con mano fuerte buscando que la pague una peor.", aka: ["Value Bet", "apostar por valor"] },
    { term: "La rueda (wheel)", cat: "Hand", desc: "La escalera A-2-3-4-5, la escalera más baja (el as va bajo).", aka: ["Wheel", "the wheel", "rueda"] },
  ],
};
