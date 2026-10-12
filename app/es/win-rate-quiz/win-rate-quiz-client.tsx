"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 스페인어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작.
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 용어 출처: docs/translation-terms-es.md → app/es/calculator/dict.ts(족보 문장형 표기 «Escalera de color»·
 *   «Proyecto de color»·«pot odds»·«foldear»·«sobrecarta») → lib/posts-es 코퍼스. 존댓말 없음(tú), voseo 없음.
 * 솔버 메뉴명 «Estudiar flop» = 솔버 앱 flop-study-labels.ts es.title 축어.
 * 헤드텀 실측(DFS Google Ads search_volume live · 2026-10-12) → page.tsx 머리 주석.
 */

const ES_NAMES: HandNames = {
  categories: ["Carta alta", "Pareja", "Doble pareja", "Trío", "Escalera", "Color", "Full", "Póker", "Escalera de color"],
  drawingDead: "Sin outs",
  flushDraw: "Proyecto de color",
  straightDraw: "Proyecto de escalera",
};

const ES_UI: QuizUI = {
  names: ES_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Tú",
  folded: "Retirado",
  raise: "Sube",
  call: "Paga",
  check: "Pasa",
  allIn: "All-in",
  tableNote: "Mesa de 6 o de 9 jugadores · elige cuántos ven el flop (2–6)",
  playersBtn: (n) => `${n} jugadores`,
  playersLabel: "Jugadores",
  tableBtn: (n) => `${n}-max`,
  styleLabel: "Estilo de los rivales",
  styleHint: "Estilo de los rivales: solo cambia las reglas de acción desde el flop; los rangos preflop son los mismos",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Agresivo" },
  loading: "Barajando y calculando…",

  myEquity: "Tu equity",
  vsOpponents: (n) => (n === 0 ? "no queda nadie" : `contra ${n} rival${n > 1 ? "es" : ""}`),
  basisSeat: "contra rangos por posición",
  basisRange: "contra las manos que encajan con sus acciones",
  roleOpen: "Abrió",
  roleDefend: "Defendió",
  winShort: "Gana",
  tieShort: "Empate",
  loseShort: "Pierde",
  revealedLabel: "👀 Contra las manos que se ven",
  revealedNote: (gap) =>
    `La cifra de arriba da por hecho que no ves sus cartas; por eso hay ${gap} pp de diferencia. La de arriba es la que usarías para decidir de verdad.`,

  potOddsTitle: "Pot odds — la equity que necesita un call para no perder",
  potLabel: "Bote",
  potBeforeLabel: "Bote (antes de apostar)",
  toCallLabel: "A pagar",
  requiredLabel: "Equity necesaria",
  noBet: "Nadie apostó. Ves la siguiente carta gratis.",
  noBetAllIn: (river) =>
    river
      ? "Todos los que siguen en la mano ya están all-in, así que no quedan fichas para apostar. La mano va directa al showdown."
      : "Todos los que siguen en la mano ya están all-in, así que no quedan fichas para apostar. Se reparten las cartas que faltan y la mano va al showdown.",
  verdictCall: "Pagar",
  verdictFold: "Foldear",
  impliedNote: "Eso sí, si cuando ligas puedes ganar más (odds implícitas), pagar puede seguir siendo correcto.",

  revealBtn: (next) => `Repartir el ${next} →`,
  newHandBtn: "Repartir otra mano 🔄",
  showCards: "👀 Ver sus cartas",
  hideCards: "🙈 Ocultar sus cartas",

  wonByFold: (pot) => `Todos foldearon — te llevas el bote de ${pot.toLocaleString("en-US")}`,
  splitLabel: (names) => `Bote dividido — empatan ${names.join(" · ")}`,
  winLabel: (name, cat) => `Gana ${name} · ${cat}`,
  winLabelHero: (cat) => `Ganas tú · ${cat}`,

  reviewTitle: "📋 Repaso — ¿dónde tenías que foldear?",
  reviewCols: ["Calle", "Tu equity", "Necesaria", "Veredicto"],
  reviewNoMistake: "✅ Pagar fue lo correcto hasta el final.",
  reviewMistake: (street) => `⚠️ En el ${street.toLowerCase()} ya tocaba foldear. Ese era tu momento para salir.`,
  reviewInvested: (invested, pot) => `Pusiste ${invested.toLocaleString("en-US")} · bote final ${pot.toLocaleString("en-US")}`,

  formulaTitle: "📐 De dónde sale esta cifra",
  outsLabel: (n) => `${n} carta${n > 1 ? "s completan o mejoran" : " completa o mejora"} tu mano`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} para el color` : "",
      o.straight > 0 ? `${o.straight} para la escalera` : "",
      o.set > 0 ? `${o.set} para set o trío` : "",
      o.twoPair > 0 ? `${o.twoPair} para doble pareja` : "",
      o.over > 0 ? `${o.over} para emparejar una sobrecarta` : "",
      both > 0 ? `${both} sirven para dos de estas (se cuentan una sola vez)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Probabilidad de que salga una de estas cartas (regla del 2 y el 4)",
  winLabel2: "Tu equity en el bote (simulada · un empate cuenta solo tu parte del bote repartido)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Miden cosas distintas. La de arriba es la probabilidad de LIGAR; la de abajo, tu parte del bote al GANAR (un empate cuenta como la parte que te toca). Puedes ligar y aun así perder si un rival mejora más, y puedes no ligar y ganar igual. El veredicto usa la cifra de abajo.",
  noDrawNote: (basis, n) =>
    basis === "seat"
      ? `Todavía es preflop, así que el atajo «outs × 2/4» aún no se aplica. La equity de arriba sale de jugar ${n.replace(/\./g, ",")} manos contra las manos con las que cada rival entraría razonablemente al bote desde su posición.`
      : `No tienes ninguno de los outs que cuenta esta herramienta —ninguna carta completa color o escalera ni sube tu mano una categoría a set, doble pareja o pareja con una sobrecarta—, así que el atajo «outs × 2/4» no se aplica aquí. La equity de arriba sale de jugar ${n.replace(/\./g, ",")} manos contra todas las manos que encajan con las acciones que viste.`,
  foldWinNote: "Todos los rivales foldearon, así que el bote es tuyo. El 100% de arriba no es una cifra simulada: es el resultado de esta mano.",
  riverNote: "Es el river, así que no quedan cartas por salir y el atajo «outs × 2/4» no se aplica. La equity de arriba compara tu mano final con todas las manos que encajan con las acciones que viste.",
  chartTitle: "📈 Equity calle a calle — todas las cartas boca arriba",
  resultTabs: ["📋 Repaso", "📈 Evolución", "🃏 Cálculo"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Mira este spot en el solver GTO" : info.kind === "notReady" ? "Mira un spot parecido en el solver GTO" : "Mira un spot heads-up en el solver GTO",
  solverOpen: "Abrir «Estudiar flop» en el solver",
  solverNote: (info) => {
    const gto = "Muestra la estrategia en el flop cuando los dos jugadores juegan GTO (resultados precalculados · 6-max 100bb · solo el flop), así que los rangos, los tamaños de apuesta y las reglas de los rivales no son los de este simulador.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} abre · ${info.caller} paga (bote de una sola subida en el solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — abre las mismas posiciones y el mismo flop en «Estudiar flop» del solver. ${gto}`
          : `${info.opener} abre · ${info.caller} paga — esta mano terminó antes del flop, así que solo se abre el enfrentamiento de posiciones. Elige las tres cartas del flop en el solver. ${gto}`;
      case "notReady":
        return `${info.opener} abre · ${info.caller} paga todavía no está precalculado en «Estudiar flop» del solver. Elige un enfrentamiento de posiciones parecido o calcúlalo tú mismo en el solver.`;
      case "multiway":
        return `${info.players} jugadores vieron este flop. Los resultados precalculados del solver solo cubren botes mano a mano, así que esta mano no se puede abrir tal cual — elige en «Estudiar flop» un enfrentamiento contra un solo rival.`;
      case "table9":
        return "Los resultados precalculados del solver son para mesas de 6 jugadores, así que una mano de mesa de 9 no se puede abrir tal cual — elige en «Estudiar flop» el enfrentamiento de posiciones más parecido.";
    }
  },
  solverLang: "es",
  fmtNum: (x) => x.toLocaleString("en-US"),
  chartRangeLegend: "Lo que viste",
  chartNote: "Las líneas continuas son la equity de cada asiento con todas las manos boca arriba; la discontinua es la equity que viste en pantalla sin conocer sus cartas. La línea de un jugador que se retiró llega hasta la calle anterior a su fold.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "¿Cuál es tu equity?",
  quizGuessHint: "Marca tu estimación con el deslizador",
  quizSubmit: "Comprobar",
  quizCallSubmit: "Pagar → ver",
  quizFoldSubmit: "Foldear → ver",
  quizResult: (guess, err, points) => `Tu estimación ${guess}% · error de ${err} pp · ${points} pts`,
  quizChoiceResult: (ok, verdict) => (ok ? `Bien decidido (${verdict})` : `Fallo — lo correcto era ${verdict}`),
  quizStats: (s) => `${s.hands} mano${s.hands === 1 ? "" : "s"} · error medio ${s.avgErr} pp · ${s.hits}/${s.decisions} aciertos · ${s.points.toLocaleString("en-US")} pts`,
  quizReset: "Reiniciar",
  quizResetConfirm: "¿Borrar el historial del quiz guardado en este navegador? No se puede deshacer.",
  quizInvite: "Inicia sesión para guardar este historial en tu cuenta y verlo en cualquier móvil o PC.",
  quizInviteLink: "Iniciar sesión",
  quizGuessCol: "Estimación",
  quizChoiceCol: "Elección",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Esta mano: error medio ${avgErr} pp${decisions > 0 ? ` · ${hits}/${decisions} decisiones acertadas` : ""} · ${points} pts`,
  quizGuessLegend: "Tu estimación",
  customToggle: "✍️ Elegir mano",
  customTitle: "Prepara una mano — repite una que jugaste",
  customHint: "Toca una casilla y elige una carta abajo. Las casillas vacías se reparten al azar, y los rivales siguen recibiendo manos de sus rangos por posición.",
  customPos: "Tu posición",
  customRandom: "Al azar",
  customHero: "Tu mano",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Repartir esta mano →",
  customClear: "Borrar todo",
  customClose: "Cerrar",
  customOff: "Volver a manos al azar",
  customActive: "Tu mano preparada · las manos nuevas mantienen estas cartas",
  customEdit: "Editar",

  ruleTitle: "Qué supone este simulador",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Los rivales siguen las reglas de abajo y nada más.</b> Ningún jugador real
        juega así — la posición, el rival, la profundidad de stack y la imagen en la mesa lo cambian todo. Tómalo como
        el «suponer que no hay rozamiento» de un problema de física.
      </p>
      <p className="mb-1">
        Estilo de los rivales ahora: <b className="text-foreground">{ES_UI.styleNames[style]}</b> (toda la mesa juega con el mismo estilo · cámbialo en el selector de arriba)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Doble pareja o mejor → <b className="text-foreground">{style === "aggressive" ? "subida del 150% del bote (overbet)" : "subida del tamaño del bote"}</b></li>
        {style === "standard" && <li>Una pareja, o un proyecto de color/escalera → <b className="text-foreground">apuesta de medio bote</b></li>}
        {style === "tight" && <>
          <li>Una pareja que sea pareja máxima o mejor hecha con una carta propia (sobrepares incluidas), o un proyecto de color/escalera → <b className="text-foreground">apuesta de medio bote</b></li>
          <li>Cualquier pareja más débil (incluida una pareja que solo está en la mesa) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>Una pareja, un proyecto de color/escalera, o una carta propia más alta que todas las de la mesa (una sobrecarta) → <b className="text-foreground">apuesta de medio bote</b></li>}
        {style === "aggressive" && <>
          <li>Proyecto de color/escalera → <b className="text-foreground">subida (semifarol)</b></li>
          <li>Una pareja → <b className="text-foreground">apuesta de medio bote</b></li>
          <li>Sin pareja ni proyecto, pero con una sobrecarta → <b className="text-foreground">subida (farol)</b></li>
        </>}
        <li>Cualquier otra cosa → <b className="text-foreground">fold</b> (tira las cartas sin enseñarlas, como en vivo)</li>
      </ul>
      <p className="mb-2">
        Las reglas se leen de arriba abajo: manda la primera línea que encaje. Un proyecto es un patrón de color o escalera de cuatro cartas en el flop o el turn que usa al menos una carta propia (en el river no hay proyectos).{" "}
        {style === "aggressive" && "Todas las subidas del estilo Agresivo, semifaroles y faroles incluidos, son del 150% del bote. "}
        Cuando alguien sube, todos los que siguen en la mano pagan esa subida, y una apuesta mayor que el stack que
        queda se limita a un all-in. Tras un all-in nadie foldea: se reparte el resto del board y se va al showdown. No hay check-raise: cada rival actúa una sola vez por calle según las reglas, y no existe el paso de pasar y luego volver a responder. Tú nunca apuestas aquí; solo pagas hasta el river.
        Los rangos preflop (abajo) son los mismos sea cual sea el estilo.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Tu equity se calcula como si no vieras sus cartas.</b> Desde el flop, el
        rango de cada rival son las manos de su rango preflop por posición (abajo) que habrían hecho las acciones que
        viste según las reglas del estilo elegido — contra rivales de estilo Normal, una subida deja solo doble pareja o mejor;
        contra rivales de estilo Agresivo, también siguen dentro los proyectos y los faroles con sobrecarta. Los jugadores que
        foldean en pantalla también salen del cálculo.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Las manos preflop de los rivales salen de rangos por posición.</b> De los
        jugadores en el bote, el primero que habla preflop se toma como el que abre, y todos los demás como si hubieran
        defendido esa apertura con un call o un 3-bet (rango de apertura · rango de defensa). Los rangos son rangos de
        consenso de cash 6-max 100bb contrastados entre varias fuentes públicas, con las manos límite mezcladas al
        25/50/75%. Donde no hay tabla (HJ ante apertura de UTG · SB ante apertura de UTG, HJ o CO) y a partir del
        tercer jugador, se usa la tabla de defensa más parecida. No hay tablas para mesa de 9, así que en mesa de 9
        UTG, UTG+1, UTG+2 y LJ usan la tabla UTG de 6-max y cada uno de los demás asientos usa la tabla de 6-max del
        mismo nombre (una posición temprana que defiende la apertura de otra posición temprana, o el HJ que la defiende, usa la tabla CO contra UTG) — los tres primeros asientos de una mesa de 9 salen más amplios de lo que son en realidad. Solo tu mano es aleatoria (salvo que la elijas tú) — la herramienta te deja
        jugar cualquier mano hasta el river. Aquí un 3-bet no cambia el tamaño del bote (simplificado).
      </p>
      <p className="mb-2">
        <b className="text-foreground">El veredicto son solo pot odds.</b> No incluye odds implícitas, y las
        tendencias y faroles de los rivales solo entran en los rangos hasta donde llegan las reglas del estilo elegido. Los proyectos, sobre todo, a menudo justifican un call aunque las pot odds a secas se queden
        un poco cortas.
      </p>
      <p>
        Todos ponen un ante de {ANTE} y empiezan con un stack de {STACK.toLocaleString("en-US")}. Tú nunca foldeas — esa es la idea,
        para que veas el river y hagas el repaso. La equity es una estimación simulada con un tamaño de muestra fijo:{" "}
        <b className="text-foreground">{SAMPLES.preflop.toLocaleString("en-US")} simulaciones</b> preflop y{" "}
        <b className="text-foreground">{SAMPLES.postflop.toLocaleString("en-US")} simulaciones</b> desde el flop (error estándar de unos 0.25–0.35 pp).
        Cada mano usa una semilla aleatoria fija, así que la misma mano muestra los mismos números en cualquier dispositivo. Los empates se reparten
        según el número de jugadores que comparten el bote (la mitad para cada uno en un empate a dos).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Cuando muestras sus cartas</b>, cada asiento recibe su equity con todas las manos a la vista. Desde
        el flop esto cuenta exactamente todas las cartas que quedan (solo el preflop son {SAMPLES.known.toLocaleString("en-US")} simulaciones),
        y nunca entra en la equity ni en el veredicto de pagar/foldear de la pantalla — en una mesa real no tendrías
        esa información.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Con el Quiz activado</b>, la equity y el veredicto de cada calle quedan ocultos hasta que estimas
        tu equity. En las calles en las que alguien apuesta, también eliges pagar o foldear. La respuesta es «Tu equity» de arriba (la
        cifra sin ver sus cartas), y cada estimación suma <b className="text-foreground">100 − 4 × error (pp)</b>
        (cero si te desvías 25 pp o más). Elegir pagar/foldear cuenta como acierto cuando coincide con el veredicto por pot odds. Tus
        totales acumulados se quedan en este navegador y, si has iniciado sesión, también se guardan en tu cuenta para que
        te acompañen a otros dispositivos (las cartas y la mesa no se guardan).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ Elegir mano</b> te deja escoger tu posición, tus cartas propias y la mesa para repetir una
        mano que jugaste de verdad. Las casillas vacías se reparten al azar. No puedes elegir las cartas de los rivales — en una
        mesa real tampoco las conocerías —, así que siguen saliendo de los rangos por posición, y la equity en pantalla
        mantiene la misma premisa de «cartas desconocidas». Aunque fijes la mesa de antemano, la equity de cada calle solo usa
        las cartas repartidas hasta ese momento. Como repetir la misma mano te dejaría memorizar las respuestas, las manos
        preparadas no se suman a tu historial del quiz.
      </p>
    </>
  ),
  footer: (
    <>
      ¿Quieres ver las cuentas?{" "}
      <a href="/es/blog/holdem-pot-odds" className="text-primary underline">Cómo calcular las pot odds →</a>
      {" · "}
      <a href="/es/blog/holdem-position-play" className="text-primary underline">Por qué importa la posición</a>
      {" · "}
      <a href="/es/calculator" className="text-primary underline">Calculadora de probabilidades</a>
    </>
  ),
};

export default function WinRateQuizClientEs() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Simulador de poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Juega sin ver sus cartas — y descubre dónde tenías que foldear</p>
      </div>
      <WinRateSimulator ui={ES_UI} />
    </div>
  );
}
