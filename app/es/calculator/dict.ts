// `/es/calculator` 사전 — 공용 `components/calculator/calculator-tool.tsx`가 이 객체 하나로 화면 전체를 그린다.
// ★2026-09-17 신설 → ★2026-09-17 (es 회차) 재조준: EN 재저작(b337e436)·ja·zh·zh-hant(cf2ba10f)와 동형 —
//   Equity 탭 · quickRef 6표 · 아웃츠 3스트리트 · ICM chip chop 열 · 새 ICM 딜 예시 · 가이드 카드 9 · 관련 글 8 ·
//   딜러 렌즈 EN 정정 12항 동반. 근거 = docs/keyword-bank/es-calculator.md(DFS 볼륨 MX·AR·CO·ES · 자동완성 5지역 50시드 · SERP 3쿼리 · 상위 9페이지 구조).
// 🔴 quickRef·icmGuide.deal의 수치는 EN 값 그대로(§13 언어 불변 · 정본 = scripts/calc-reference-tables.ts · scripts/calc-icm-example.ts). 손으로 고치지 마라.
// 용어 출처(우선순위 순): `docs/translation-terms-es.md` → `lib/posts-es/holdem-glossary.ts`
//   → `lib/posts-es/{holdem-icm,holdem-outs,holdem-pot-odds,holdem-short-stack,holdem-starting-hands-chart,holdem-bubble}.ts` 실제 표기
//   (2026-09-17 전수 grep 빈도): fold equity 70(«equity de fold» 0) · limpear/limpea 173 · open-limp 37 · stack efectivo 38 ·
//   acuerdo por ICM 10 · chip chop 12 · líder en fichas 6 · burbuja 137 · en premios 21 · mesa final 50 · regla del 2 y 4 24(«4 y 2» 1) ·
//   proyecto de color 112 · par servido 21 · set mining 27 · órbita 21 · empate 124 · bote dividido 39 · coin flip 12 · odds implícitas 88.
// 🔴 숫자 형식 = EN 그대로(`1,326` · `23.1%` · `$1,500`) → `numberLocale: "en-US"`.
//    근거: es 코퍼스 60편 실측 — 천단위 콤마 1,421곳 vs 점 178곳(그중 65곳은 wsop-2026 가이드 한 편) ·
//    소수점 `.` 1,738곳 vs `,` 10곳 · translation-terms-es.md 「★MANTENER EL FORMATO DE EN TAL CUAL」.
//    통화도 `holdem-icm.ts` L72·L137 그대로 맨 `$`(US$ 0건).
// 🔴 족보 이름은 glossary L138-139 + translation-terms 「TRAMPAS」: Color=flush · Escalera=straight ·
//    Póker=four of a kind · Full=full house. 영어권 관용어(outs·pot odds·equity·ICM·SPR·push/fold·shove·
//    stack·all-in·chip chop·coin flip·flop/turn/river)는 코퍼스가 원어 그대로 쓰므로 번역하지 않는다.
// 🔴 산문은 «póker»(1,278곳), 검색 표면(title/desc)은 «poker»(솔버 랜딩·seoTitle 관례) — 섞임이 의도다.
// 판단 메모(09-17 es 회차) —
//   ① 제목 앞머리 = 실측 머리어 «Calculadora de poker»(MX 70 · AR 90 · CO 70 · ES 170 · 자동완성 5지역 동일).
//      H1·CTA·브레드크럼은 코퍼스 앵커 «Calculadora de probabilidades»(`texas-holdem-rules-for-beginners` L471 ·
//      `intl-blog-post-client.tsx` CALC_CTA_LABELS.es)를 유지 — 볼륨은 10뿐이지만 SERP 1·3위(PokerNews·PokerListings)가
//      «calculadora de poker» 쿼리에 이 이름으로 올라 있다 = 구글이 동의어로 읽는다(브리프 §3-E 분리 선례).
//   ② 🔴 «calculadora icm» 단독은 자동완성이 «calculadora imc»(체질량지수)로 덮인다 → ICM은 늘 «de poker»·«de ICM»으로 앵커.
//      코퍼스 앵커 = «calculadora de ICM»(holdem-bubble·holdem-icm·holdem-short-stack 5곳) · SERP 2위 gipsyteam.es 제목도 동일.
//   ③ 🔴 «regla del 4 y 2»는 의료(4-2-1 수액 규칙) 오염 → 코퍼스대로 «regla del 2 y 4».
//   ④ Equity 탭 라벨 = «Equity»(페이지명 «Calculadora de probabilidades»와 안 겹친다 · 코퍼스·EN 동일).
//      독자에게 «탭을 쓰라»는 문장은 탭 라벨로 «la pestaña «Equity»» (브리프 §3-B).
//   ⑤ 인용부호 = « »(check:calc-parity E — 직선 " 금지) · 방위어는 페이지 순서상 참인 «arriba»(도구 → 예시 → 카드 → 표 → FAQ)만.
import type { CalcDict } from "@/components/calculator/dict";

export const CALC_DICT_ES: CalcDict = {
  numberLocale: "en-US",

  // 🔴 app/es/calculator/page.tsx metadata는 여기서 파생한다(check:seo-sync). 접미 «| HoldemMaster»만 page에서.
  seo: {
    title: "Calculadora de poker — probabilidades, equity e ICM",
    description:
      "Calculadora de poker y de probabilidades gratis: equity mano contra mano, pot odds, outs, jerarquía, SPR, M, ICM y chip chop. 9 herramientas, sin registro.",
    path: "/es/calculator",
  },

  hero: {
    badges: ["Herramienta gratis", "Sin registro"],
    h1: "Calculadora de probabilidades",
    h1Sub: "Calculadora de poker con equity, ICM y pot odds",
    lead: "Mete dos manos y mira quién gana — después revisa las pot odds, los outs, los acuerdos por ICM, el SPR, la M de torneo y los rangos push/fold. Nueve calculadoras de Hold'em gratis, con enumeración exacta en cada calle donde es lo bastante rápida.",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot odds", "🃏 Jerarquía", "📊 Mano inicial", "📐 SPR", "🏆 Valor M", "📈 ICM", "⚡ Push/fold"],
  },

  equity: {
    label: "Equity", sub: "Mano contra mano",
    hero: "Tu mano",
    opp: "Rival {n}",
    random: "Mano aleatoria",
    board: "Board",
    pickerHint: "Elige un asiento o el board y después sus cartas.",
    addPlayer: "+ Agregar rival", removePlayer: "− Quitar rival",
    needTwo: "Dale 2 cartas a cada mano (o marca a un rival como mano aleatoria).",
    boardCount: "Deja el board vacío para preflop, o ponle 3 cartas (flop), 4 (turn) o 5 (river).",
    th: { player: "Jugador", hand: "Mano", win: "Gana", tie: "Empate", equity: "Equity" },
    exactNote: "Exacto — se enumeraron las {n} combinaciones posibles de cartas por salir.",
    mcNote: "Monte Carlo — {n} simulaciones aleatorias; el resultado varía unos ±0.3 puntos entre una corrida y otra.",
    winner: "{p} gana con {hand}",
    chop: "Bote dividido — {n} manos empatan con {hand}",
    showdownNote: "Showdown — el board ya está completo, así que este es el resultado final.",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Odds del proyecto" },
    pot: { label: "Pot odds", sub: "Pagar o foldear" },
    hand: { label: "Jerarquía", sub: "Elige cartas" },
    starting: { label: "Mano inicial", sub: "Fuerza preflop" },
    spr: { label: "SPR", sub: "Stack / bote" },
    m: { label: "M de torneo", sub: "Valor M" },
    icm: { label: "ICM", sub: "Equity en premios" },
    pushfold: { label: "Push/fold", sub: "Tabla de Nash" },
  },

  workspace: {
    chooseCalculator: "Elige una calculadora",
    resetInputs: "Reiniciar valores",
    resetAria: "Reiniciar {label}",
    resetMessage: "Valores de {label} reiniciados.",
  },

  cardPicker: {
    clearAll: "Borrar todo",
  },

  outs: {
    drawType: "Tipo de proyecto",
    presets: [
      { label: "Valor personalizado" },
      // 딜러 렌즈(EN): «al nuts» 한정 제거 — 넛이든 아니든 outs는 9
      { label: "Proyecto de color", desc: "4 cartas de un palo → falta la 5.ª (9 outs, sea o no el color al nuts)" },
      { label: "Escalera abierta (OESD)", desc: "p. ej. 5-6-7-8, sirve un 4 o un 9" },
      { label: "Color + gutshot (combo)", desc: "9 de color + 3 de gutshot (solapamiento descontado)" },
      { label: "Gutshot (escalera interior)", desc: "p. ej. 5-6-8-9, solo sirve un 7" },
      // 딜러 렌즈(EN): 오버카드는 메이드 핸드 상대로 크게 할인
      // 🔴 2026-09-20 — «que no están en el board» no es la definición de sobrecarta (EN §5).
      { label: "Dos sobrecartas", desc: "2 valores más altos que cualquier carta del board × 3 cada uno — descuéntalas mucho contra una mano hecha: ligar pareja con una sobrecarta muchas veces sigue perdiendo" },
      { label: "Doble pareja → full", desc: "p. ej. A-K en un board A-K-x → quedan 2 ases + 2 reyes" },
      { label: "Pareja → trío", desc: "quedan 2 cartas de ese valor" },
      { label: "Color + OESD (monstruo)", desc: "9 de color + 8 de escalera (2 repetidas)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Calle",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    // ★2026-09-17 3번째 스트리트(플롭 → 다음 1장) — 플롭에서 벳 하나를 마주할 때 쓰는 값
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Probabilidad de ligar en la siguiente carta desde el flop",
    outsCount: "Número de outs: {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Regla del 4",
    ruleOf2: "Regla del 2",
    chanceFlop: "Probabilidad de completar hasta el river desde el flop (las dos cartas — en un all-in)",
    chanceTurn: "Probabilidad de completar en el river desde el turn",
    exact: " (exacto)",
    ruleMental: "Regla del {n} (cálculo mental):",
    exactNote: "El número grande es la cifra exacta",
    verdict: { great: "Excelente 🔥", good: "Bueno ✅", fair: "Regular ⚠️", poor: "Malo ❌", veryPoor: "Muy malo 💀" },
  },

  pot: {
    // 딜러 렌즈(EN): 팟에는 «지금 마주한 벳»이 포함된다
    potSize: "Tamaño del bote (incluida la apuesta que enfrentas)",
    callAmount: "Cantidad a pagar (call)",
    potOddsCaption: "Pot odds (equity mínima necesaria)",
    orHigher: "— con más equity, el call es rentable",
    equityLabel: "Equity de tu mano: {v}",
    sliderGutshot: "Gutshot 8.7%",
    // 딜러 렌즈(EN): 19% → 19.6%(9/46 · turn → river)
    sliderFlush: "Proyecto de color 19.6%",
    impliedToggle: "Odds implícitas {toggle}",
    close: "Cerrar ▲",
    add: "Agregar ▼",
    extraWinnings: "Ganancia extra esperada (si ligas): {v}",
    none: "Ninguna",
    impliedCaption: "Odds implícitas (con la ganancia extra)",
    impliedNote: "Equity mínima necesaria contando {n} extra",
    needImplied: "odds implícitas {n}%",
    needPot: "pot odds {n}%",
    verdict: {
      call: { title: "Call (rentable)", body: "Tu equity {eq}% > {need} → rentable a largo plazo" },
      even: { title: "Punto de equilibrio (EV 0)", body: "Tu equity {eq}% = {need} → pagar ni gana ni pierde. Decide por factores fuera de las pot odds, como la posición y las tendencias del rival" },
      fold: { title: "Mejor foldear", body: "Tu equity {eq}% < {need} → pierde a largo plazo" },
    },
  },

  handEval: {
    pickerLabel: "Elige las cartas (5–7)",
    emptyTitle: "Elige 5 cartas o más para evaluar la mano",
    emptyHint: "Con 7 cartas, la mejor combinación de 5 se encuentra sola",
    bestFrom: "Mejor mano con {n} cartas",
    rankNames: [
      "Carta alta", "Pareja", "Doble pareja", "Trío", "Escalera",
      "Color", "Full", "Póker", "Escalera de color", "Escalera real",
    ],
    resultNames: [
      "Carta alta 🃏", "Pareja 1️⃣", "Doble pareja ✌️", "Trío 3️⃣", "Escalera ➡️",
      "Color 🌊", "Full 🏠", "Póker 💎", "Escalera de color 🌟", "Escalera real 👑",
    ],
    axis: ["Carta alta", "Pareja", "Color", "Póker", "Real"],
  },

  starting: {
    pickerLabel: "Elige tus 2 cartas de mano",
    emptyPrompt: "Elige tus 2 cartas de mano",
    // 딜러 렌즈(EN): 미등재 핸드 = «약한 손»이 아니라 «코어 차트 밖»
    unknownDesc: "Fuera de la tabla básica de apertura",
    unknownAction: "Del mismo palo: si todos foldearon hasta ti, abre cualquier mano del mismo palo desde el BTN; desde el CO quédate con los reyes del mismo palo, las dos cartas de 8 o más (Q8s, 10-8s) y los conectores hasta 54s. De distinto palo: solo BTN — cualquier as (A9o, A5o) o dos cartas de 9 o más (K9o, 10-9o). El resto (J2o, 93o, 72o): fold",
    tierNames: ["🥇 Nivel 1 — Premium", "🥈 Nivel 2 — Fuerte", "🥉 Nivel 3 — Jugable", "⚠️ Nivel 4 — Marginal", "🚫 Nivel 5 — Débil"],
    recommendedAction: "Acción recomendada:",
    axis: ["Premium", "Fuerte", "Jugable", "Marginal", "Débil"],
    summaryTitle: "Resumen por niveles",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Subir siempre" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Subir desde casi cualquier posición" },
      { hands: "AJo KQo K10s QJs J10s 10-9s 77 A9s", action: "Subir en posición tardía" },
      { hands: "66–55 A8s–A2s KJo QJo conectores del mismo palo", action: "Con selección en posición tardía" },
      { hands: "44–22 manos débiles de distinto palo", action: "Normalmente fold" },
    ],
    // 딜러 렌즈(EN 12항): «en temprana plantéate pagar» = 오픈 림프 권고로 읽힌다 → «sube o foldea — no hagas open-limp».
    //   EN 77/88은 «레이즈에 콜»로 읽어 옮겼다(브리프 §5). 66·44 set mining은 «~15 veces» 조건.
    //   🔴 KQo는 그 독해가 틀렸다 — EN은 «미개봉이면 레이즈 아니면 폴드»다. 2026-09-20에 es도 EN 형으로 맞췄다.
    //   limpear = 코퍼스 정본(173) · open-limp 37.
    hands: {
      AA: { desc: "La mejor mano. Sube en cualquier spot", action: "Subir/resubir siempre (3-bet)" },
      KK: { desc: "Solo vigila que no salga un as en el flop", action: "Subir/resubir siempre" },
      QQ: { desc: "Más fuerte que JJ, pero no la sobrevalores", action: "Subir siempre; cuidado con stacks profundos" },
      JJ: { desc: "Vigila las sobrecartas en el flop", action: "Subir desde cualquier posición" },
      "1010": { desc: "Pierde valor cuando el flop trae sobrecartas", action: "Subir desde cualquier posición — no hagas open-limp" },
      AKs: { desc: "La mejor mano con proyecto. Construye el bote", action: "Subir/resubir siempre" },
      AKo: { desc: "Más débil que AKs, pero sigue siendo premium", action: "Subir siempre; puede pagar una resubida" },
      AQs: { desc: "Mano fuerte; vale más en posición", action: "Subir desde casi cualquier posición" },
      AJs: { desc: "Muy buena en BTN/CO, floja desde UTG", action: "Subir en posición media/tardía; desde UTG sube o foldea — nunca limpees" },
      A10s: { desc: "Uno de los mejores ases del mismo palo", action: "Subir en tardía; en temprana foldea, salvo que la mesa sea pasiva (entonces sube)" },
      KQs: { desc: "Potencial de color alto + escalera", action: "Subir desde casi cualquier posición" },
      KJs: { desc: "Mano fuerte con proyectos", action: "Subir en tardía; en temprana sube o foldea — nunca limpees" },
      "99": { desc: "Par medio, vigila los flops con sobrecartas", action: "Subir desde casi cualquier posición; cuidado con stacks profundos" },
      "88": { desc: "Par servido con buen potencial de set", action: "Subir en tardía; en temprana plantéate pagar una subida — no hagas open-limp" },
      AQo: { desc: "Más floja de distinto palo; la posición importa", action: "Subir en posición media/tardía" },
      AJo: { desc: "Floja en posición temprana, fuerte en tardía", action: "Subir en CO/BTN, cuidado en temprana" },
      KQo: { desc: "El mejor conector de distinto palo", action: "Subir en tardía; en temprana sube o foldea si nadie ha entrado, y ante una subida normalmente foldea" },
      K10s: { desc: "Rey del mismo palo, fuerte en posición tardía", action: "Subir en tardía, fold en temprana" },
      QJs: { desc: "Proyectos fuertes por los dos lados", action: "Subir en tardía, vale más con stacks profundos" },
      J10s: { desc: "Uno de los mejores conectores del mismo palo", action: "Subir en tardía; paga una sola subida si tienes posición" },
      "109s": { desc: "Conector del mismo palo fuerte", action: "Subir/pagar en posición tardía" },
      "77": { desc: "Mano para buscar set, vigila las sobrecartas", action: "Subir en tardía; en temprana paga una subida — no hagas open-limp" },
      A9s: { desc: "As del mismo palo con potencial de color", action: "Subir en posición tardía" },
      "66": { desc: "Set mining; necesita odds implícitas", action: "Paga una subida si quedan detrás unas 15 veces lo que pagas; en tardía, sube" },
      "55": { desc: "Poco valor sin ligar set", action: "Paga una sola subida en tardía; si nadie ha entrado, sube desde tardía" },
      A8s: { desc: "As medio del mismo palo", action: "Jugar en tardía, fold en temprana" },
      A7s: { desc: "As medio del mismo palo", action: "Solo en posición tardía" },
      A6s: { desc: "As medio del mismo palo", action: "Solo en posición tardía" },
      A5s: { desc: "Rueda + bloqueador de as; de las favoritas para un 3-bet de farol", action: "Solo en tardía; las odds implícitas importan" },
      A4s: { desc: "As del mismo palo con proyecto de rueda", action: "Solo en posición tardía" },
      A3s: { desc: "El fondo de los ases del mismo palo", action: "Solo BTN/SB" },
      A2s: { desc: "Rueda + color al nuts, pero débil", action: "Solo BTN" },
      KJo: { desc: "Riesgo de dominación; solo en tardía", action: "Subir en CO/BTN, fold ante una resubida" },
      QJo: { desc: "Conectividad moderada; necesita posición", action: "Solo en posición tardía" },
      "98s": { desc: "Conector del mismo palo fuerte", action: "Pagar/subir en posición tardía" },
      "87s": { desc: "Buen conector del mismo palo", action: "Pagar una subida en posición tardía" },
      "76s": { desc: "Conector del mismo palo", action: "Si nadie ha entrado, sube desde tardía; paga una subida solo con posición y stacks profundos" },
      "44": { desc: "Casi sin valor si no liga set", action: "Paga una subida solo si quedan detrás unas 15 veces lo que pagas" },
      "33": { desc: "Tiene que buscar set; especulativa", action: "Solo pagando una subida, en botes multiway con stacks profundos" },
      "22": { desc: "El par servido más bajo", action: "Solo pagando una subida, en botes multiway con stacks profundos" },
      K10o: { desc: "K-10 de distinto palo, débil", action: "De vez en cuando desde el BTN" },
      Q10o: { desc: "Poca conectividad y distinto palo", action: "Solo BTN" },
      J10o: { desc: "Aceptable de distinto palo, pero vulnerable", action: "De vez en cuando desde el BTN" },
      Q10s: { desc: "Broadway del mismo palo fuerte, juega bien en posición", action: "Subir en tardía; fold en temprana" },
      A10o: { desc: "As marginal de distinto palo, fácil de dominar", action: "Solo en posición tardía" },
      "65s": { desc: "Conector del mismo palo; quiere botes multiway y odds implícitas", action: "Pagar una subida en posición tardía" },
      "54s": { desc: "Conector bajo del mismo palo; especulativo", action: "Pagar una subida en tardía, en botes multiway baratos" },
    },
  },

  spr: {
    // 딜러 렌즈(EN): 실효 스택 = «두 스택 중 짧은 쪽»
    effectiveStack: "Stack efectivo (el más corto de los dos)",
    potSize: "Tamaño actual del bote",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ bote",
    zones: {
      low: {
        // «comprometido» = 코퍼스 표기(holdem-when-to-fold «comprometido con el bote»)
        label: "SPR bajo (comprometido)",
        // 딜러 렌즈(EN): 보드 텍스처 단서 — 페어드·3플러시·3스트레이트 보드에서는 원페어는 원페어
        desc: "Una gran parte del bote ya está dentro. Con pareja máxima con kicker máximo o mejor en un flop seco, piensa en meter el resto — a esta profundidad, foldear suele ser el mayor de los dos errores. En boards pareados, con tres cartas del mismo palo o tres conectadas, o ante una acción que solo un set o una escalera explican, una pareja sigue siendo una pareja.",
        actions: [["TPTK+", "Plantéate el all-in"], ["Proyectos", "Pot odds obligatorias"], ["Manos débiles", "Foldea con cuidado"]],
      },
      mid: {
        label: "SPR medio (flexible)",
        desc: "Es la zona para jugar manos fuertes como doble pareja o mejor. Proteger tu stack empieza a importar.",
        actions: [["Doble pareja+", "Apuesta de valor"], ["Una pareja", "Una o dos calles y luego controla el bote"], ["Proyectos", "Semifarol si hay fold equity; si no, abandona"]],
      },
      high: {
        label: "SPR alto (casi profundo)",
        desc: "Los stacks empiezan a ser profundos. Los proyectos y las manos hechas fuertes ganan valor relativo.",
        actions: [["Set+", "Juega fuerte"], ["Proyectos", "Suben las odds implícitas"], ["Una pareja/TPTK", "Avanza con cuidado"]],
      },
      deep: {
        label: "SPR muy alto (profundo)",
        desc: "Es una partida de stacks profundos. La posición, el potencial del proyecto y leer el rango del rival importan mucho.",
        actions: [["Los nuts", "Puedes apostar grande"], ["Proyectos", "Odds implícitas altísimas"], ["Manos hechas débiles", "Cuidado, vulnerables a faroles"]],
      },
    },
    legend: ["Comprometido", "Flexible", "Casi profundo", "Profundo"],
  },

  m: {
    inputs: { stack: "Tu stack", bb: "Ciega grande", sb: "Ciega pequeña", ante: "Ante" },
    players: "Jugadores en la mesa: {v}",
    headsUp: "2 (mano a mano)",
    orbitCaption: "Costo por órbita (ciegas por vuelta)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    mCaption: "Valor M (la M de Harrington)",
    zones: {
      // 딜러 렌즈(EN): 데드존 = 폴드 에퀴티 소멸 · «받는 패 중 쓸 만한 것»(프리미엄을 기다리라는 뜻이 아니다 · 브리프 §3-E) · 오픈 안 된 팟
      dead: { name: "💀 Zona muerta", desc: "La fold equity ya no existe — el all-in es tu única jugada, así que mete todo con la primera mano jugable que te llegue antes de que te toquen las ciegas, y mejor si nadie ha entrado al bote.", action: "All-in ya" },
      red: { name: "🔴 Zona roja", desc: "Necesitas doblarte pronto. Juega push/fold — shove con tus buenas manos y fold con el resto.", action: "Push/fold" },
      orange: { name: "🟠 Zona naranja", desc: "Tu stack se está encogiendo. Cierra tu rango a manos fuertes y busca hacer open-shove.", action: "Rango cerrado" },
      yellow: { name: "🟡 Zona amarilla", desc: "Empieza la presión. Tienes que acumular fichas de forma activa — juega agresivo cuando aparezcan buenos spots.", action: "Juega agresivo" },
      green: { name: "🟢 Zona verde", desc: "Tienes un stack cómodo. Usa todo tu repertorio — haz crecer tu stack con juego posicional y faroles.", action: "Estrategia completa" },
    },
  },

  icm: {
    introStrong: "El ICM (Independent Chip Model)",
    // 딜러 렌즈(EN): «premio a más de un puesto» 조건 + call/fold는 «ganar vs bustear vs foldear» 비교. 🔴 스페인어라 선행 공백 유지(EN 타입 주석)
    introRest: " convierte tus fichas de torneo en su valor real en dinero de premios. Cuando se paga más de un puesto, hasta el valor ICM del líder en fichas es menor que su porcentaje de fichas, mientras que los stacks cortos valen más que su propio porcentaje de fichas. Para decidir call o fold, compara tu valor ICM si ganas la mano y si te eliminan con tu valor si foldeas.",
    numPlayers: "Número de jugadores",
    paidPlaces: "Puestos pagados",
    stacksTitle: "Stacks de los jugadores",
    total: "total {n}",
    decStack: "Reducir el stack del jugador {n}",
    stackInput: "Stack del jugador {n}",
    incStack: "Aumentar el stack del jugador {n}",
    prizesTitle: "Premios",
    decPrize: "Reducir el premio del puesto {n}",
    prizeInput: "Premio del puesto {n}",
    incPrize: "Aumentar el premio del puesto {n}",
    currencyNote: "Escribe los premios en la moneda que quieras.",
    resultTitle: "Resultado ICM",
    // ★2026-09-17 chop 열(선택 키) = % de fichas × bolsa restante · 라벨 = 코퍼스 «chip chop»(12)
    th: { player: "Jugador", chips: "Fichas", chipPct: "% fichas", icmValue: "Valor ICM", icmPct: "% ICM", diff: "Dif.", chop: "Chip chop" },
    playerCell: "{medal} J{n}",
    diffPlus: "+dif.",
    // 딜러 렌즈(EN): 가장 타이트해야 하는 것은 숏스택이 아니라 미들스택 · 블라인드에 죽을 숏은 예외
    diffPlusNote: "Valor ICM por encima del % de fichas → tu risk premium es alto; los stacks medios son los que más deben cerrar su rango. La excepción es un stack tan corto que las ciegas se lo van a comer: tiene menos que proteger",
    diffMinus: "−dif.",
    diffMinusNote: "Valor ICM por debajo del % de fichas → la agresión del líder en fichas rinde más",
    empty: "Pon stacks y premios mayores que cero para ver el resultado ICM.",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "Sin ante",
    bbAnteOn: "BB ante activado",
    table: "Mesa",
    headsUp: "Heads-up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Escenario",
    sbShove: "SB: shove o fold",
    bbCall: "BB: pagar un shove",
    position: "Posición {hint}",
    firstInHint: "(first-in — todos foldearon hasta ti)",
    effectiveStack: "Stack efectivo: {v}",
    captionHuPush: "Manos con las que la SB va de shove a {stack}bb",
    captionHuCall: "Manos con las que la BB paga un shove a {stack}bb",
    captionMw: "Shove first-in en {pos}, mesa {table}-max, {stack}bb",
    withAnte: " (con ante)",
    combosSuffix: " / {total} combos",
    legendPush: "Push (all-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Diagonal = pares · arriba a la derecha = mismo palo · abajo a la izquierda = distinto palo",
      p1: "La tabla está ordenada por ",
      strong2: "valor de las cartas, no por fuerza",
      p2: ", así que es normal que en una misma fila se alternen celdas marcadas y sin marcar — AQo, KQo y QQ están juntas pero no en orden de fuerza. Que A5s entre y A6s no, también es correcto: A5s puede formar la",
      strong3: "escalera de rueda (A-2-3-4-5)",
      p3: ", y eso pesa más que el kicker inferior.",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Equilibrio de Nash, mano a mano (SB vs BB)",
      p1: ": se asume que la SB solo hace shove o fold. La opción de ante suma 0.125bb por jugador (equivalente a un big blind ante, ≈12.5%). Los rangos se amplían cuanto más cortos son los stacks — y por debajo de ~3–4bb la BB paga correctamente con un rango ",
      em: "más amplio",
      p2: " que el que la SB usa para el shove, por las pot odds.",
    },
    mwNote: {
      strong: "Tabla de shove first-in en mesa {table}-max",
      p1: ": todos los de delante han foldeado y tú haces shove o fold. Es un equilibrio tipo Nash de ",
      strong2: "chip EV puro",
      p2: " — los rangos de call de los jugadores que quedan detrás se resuelven a la vez — con la aproximación estándar de que un bote pagado se resuelve mano a mano contra el primero que paga (se ignoran los botes con varios calls). Los rangos se amplían cuantos menos jugadores quedan detrás de ti (UTG → BTN → SB), cuanto más cortos son los stacks y con los antes activados (0.125bb por jugador). Como es chip EV puro, los rangos de 10bb desde posición temprana (UTG/MP) salen más cerrados que las reglas populares (los pares bajos foldean) — en la práctica, ajusta por ICM y por los rivales.",
    },
    readMore: "Para los fundamentos del juego con stack corto, lee nuestra",
    shortStackLink: { slug: "holdem-short-stack", text: "guía de estrategia short stack" },
    readMoreEnd: ".",
  },

  icmGuide: {
    bubble: {
      badge: "Guía ICM",
      h2: "Cómo usar la calculadora de ICM — un ejemplo de burbuja en 3 minutos",
      intro: "Supón que quedan cuatro jugadores y cobran tres (la burbuja). Los stacks son 60,000 / 40,000 / 30,000 / 20,000 y los premios, $500 / $300 / $200. Mételos en la calculadora y obtienes el porcentaje de fichas de cada jugador frente a su valor real en premios (ICM):",
      th: { player: "Jugador", chipPct: "% fichas", icmPct: "% ICM", diff: "Dif." },
      rows: [
        { player: "🥇 Líder en fichas", chip: "40.0%", icm: "33.3%", diff: "-6.7 pts", up: false },
        { player: "🥈 2.º", chip: "26.7%", icm: "27.2%", diff: "+0.6 pts", up: true },
        { player: "🥉 3.º", chip: "20.0%", icm: "22.9%", diff: "+2.9 pts", up: true },
        { player: "4.º (stack corto)", chip: "13.3%", icm: "16.6%", diff: "+3.3 pts", up: true },
      ],
      keyPoint: {
        // 딜러 렌즈(EN): «evitar calls all-in» → 자리를 고른다 · 블라인드에 먹히기 직전은 예외.
        //   조건절은 text 쪽에(브리프 §3-B · zh 2차 교열 §5 — EN b3 조건절 위치 문제를 여기서는 피했다).
        text: "La clave: {b1} en 6.7 puntos. Como ganar solo paga el premio del 1.º, el líder gana menos valor en premios con un coin flip de lo que sugiere su cantidad de fichas. Por eso en la burbuja el líder debería {b2}, mientras que el stack corto (13.3% de fichas → 16.6% ICM) vale más que sus fichas y — salvo que las ciegas estén a punto de comérselo — debería {b3}: así protege ese valor de supervivencia.",
        b1: "el valor ICM del líder en fichas (33.3%) queda por debajo de su porcentaje de fichas (40%)",
        b2: "presionar a los stacks cortos",
        b3: "elegir sus spots en vez de jugarse el torneo pagando",
      },
    },
    deal: {
      // ★2026-09-17 재조준(EN 동형) — 옛 예시(50/30/20 · $1,500 · 618/485/397)는 lib/posts-es/holdem-icm.ts L140~149
      //   «Acuerdo por ICM vs chip chop»과 표까지 동일해 카니발이었다. 새 예시 = 4명 · 45/25/18/12 · $2,300(1,000/600/400/300) ·
      //   정본 scripts/calc-icm-example.ts. 🔴 수치는 EN 그대로.
      //   H2 = 코퍼스 H2 «Acuerdo por ICM vs chip chop»과 겹치지 않게 «calculadora + 값» 축(EN 「ICM chop calculator」).
      badge: "Calculadora de acuerdos por ICM",
      h2: "Calculadora de acuerdos por ICM — cuánto vale de verdad un acuerdo en la mesa final",
      intro: "Quedan cuatro jugadores y están hablando de un acuerdo. Los stacks son 450,000 / 250,000 / 180,000 / 120,000 (45% / 25% / 18% / 12%) y quedan $2,300 en premios, pagados $1,000 / $600 / $400 / $300. Mete esos datos en la calculadora de ICM de arriba y su columna «Chip chop» pone los dos números lado a lado:",
      th: { player: "Jugador", chop: "Chip chop", icm: "Acuerdo por ICM", diff: "Dif." },
      rows: [
        { player: "🥇 Líder en fichas (45%)", chop: "$1,035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 2.º (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 3.º (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "4.º (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        text: "Un chip chop puro reparte según el porcentaje de fichas y {b1}; un acuerdo por ICM refleja la probabilidad de cada jugador de terminar en cada puesto y es {b2}. Aquí el stack más corto se lleva $276 por fichas pero $458 por ICM — {b3}. Saca los dos números antes de negociar. Lo que una sala llama chip chop muchas veces es un «save and chop»: primero se les paga a todos el siguiente premio y solo el resto se reparte por fichas, lo que queda cerca del ICM y no del reparto puro que muestra esta columna. Y el ICM supone que todos juegan igual de bien e ignora a quién le tocan las próximas ciegas, así que cuenta con que el stack grande negocie por encima de su cifra de ICM.",
        b1: "favorece al líder en fichas",
        b2: "más justo con los stacks cortos",
        b3: "$182 más",
      },
      linkLead: "El modelo detrás de estos números, con el bubble factor y las reglas no escritas de los acuerdos, está en",
      link: { slug: "holdem-icm", text: "¿Qué es el ICM en póker?" },
    },
  },

  // ★2026-09-17 빠른 참조 6표 — 🔴 모든 값 = scripts/calc-reference-tables.ts 출력(09-17 · EN과 동일). 라벨·intro·note만 스페인어. 손으로 고치지 마라.
  //   H2 = «Calculadora de X» + 표 성격(EN 「X calculator reference」 동형) — 형제 글 H2(holdem-probability «tabla de probabilidades»·
  //   holdem-pot-odds·holdem-outs)와 겹치지 않게 «tabla de probabilidades» 단독 표현은 H2에 쓰지 않는다(그 의도는 holdem-probability 소유).
  quickRef: [
    {
      badge: "Referencia rápida",
      h2: "Calculadora de equity: all-in preflop mano contra mano",
      intro: "La equity de dos manos que van all-in preflop, promediada sobre todas las combinaciones de palos de cada enfrentamiento (calculada de antemano: los 1,712,304 boards posibles de cada uno). Una combinación concreta puede variar alrededor de un punto — mete las cartas exactas en la pestaña «Equity» de arriba.",
      th: ["Enfrentamiento", "Mano A", "Mano B", "Empate"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81.9%", "18.1%", "0.5%"],
        ["AA vs AKs", "87.9%", "12.1%", "1.3%"],
        ["AA vs 87s", "77.5%", "22.5%", "0.3%"],
        ["AA vs 72o", "88.2%", "11.8%", "0.4%"],
        ["KK vs AKs", "65.9%", "34.1%", "0.8%"],
        ["QQ vs AKo", "56.8%", "43.2%", "0.4%"],
        ["QQ vs AKs", "54.0%", "46.0%", "0.4%"],
        ["JJ vs TT", "82.0%", "18.0%", "0.4%"],
        ["TT vs A9o", "72.2%", "27.8%", "0.4%"],
        ["TT vs 87s", "80.3%", "19.7%", "0.5%"],
        ["22 vs AKo", "52.6%", "47.4%", "0.6%"],
        ["AKo vs AQo", "74.4%", "25.6%", "4.7%"],
        ["AKs vs QJs", "63.5%", "36.5%", "0.5%"],
        ["AKo vs JTs", "59.5%", "40.5%", "0.5%"],
      ],
      note: "La equity es tu parte media del bote, contando los empates (botes divididos). Un par servido contra dos sobrecartas es la carrera clásica; un par contra un par más alto es un underdog de más o menos 4.5 a 1. La tabla completa de probabilidades, calle por calle, está en",
      link: { slug: "holdem-probability", text: "Probabilidades en el póker" },
      linkTail: ".",
    },
    {
      badge: "Referencia rápida",
      h2: "AA contra manos aleatorias: equity según el número de rivales",
      intro: "Cuántas veces gana AA cuando todos van all-in preflop contra N manos aleatorias (Monte Carlo, 8,000,000 simulaciones por fila). Los dos primeros rivales que pagan le quitan unos 10 puntos cada uno a los ases; a partir de ahí, cada uno les quita menos.",
      th: ["Rivales", "Equity de AA"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85.2%"], ["2", "73.4%"], ["3", "63.8%"], ["4", "55.9%"],
        ["5", "49.2%"], ["6", "43.6%"], ["7", "38.7%"], ["8", "34.6%"],
      ],
      note: "Por eso los ases quieren un bote mano a mano: contra cinco manos aleatorias, la mejor mano inicial del Hold'em ya no es favorita para llevarse el bote (49.2%, y los otros cinco se reparten el resto). Pon a un rival como «Mano aleatoria» en la pestaña «Equity» para probar cualquier mano igual (acepta hasta tres rivales). Por qué las manos grandes pierden fuerza en botes multiway, en",
      link: { slug: "holdem-equity", text: "El equity en el póker explicado" },
      linkTail: ".",
    },
    {
      badge: "Referencia rápida",
      h2: "Calculadora de outs: probabilidad de ligar según tus outs",
      intro: "La probabilidad de que tu proyecto entre: flop → river (quedan dos cartas), flop → turn (solo la siguiente carta) y turn → river (una carta) — exacta, junto a la estimación de la regla del 2 y 4. Cuenta primero tus outs y luego lee la fila.",
      th: ["Outs", "Proyecto típico", "Flop → river", "Flop → turn", "Turn → river", "Regla del 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4.3%", "2.1%", "2.2%", "4% · 2%"],
        ["2", "Par servido → set", "8.4%", "4.3%", "4.3%", "8% · 4%"],
        ["3", "Una sobrecarta", "12.5%", "6.4%", "6.5%", "12% · 6%"],
        ["4", "Gutshot", "16.5%", "8.5%", "8.7%", "16% · 8%"],
        ["5", "Pareja → doble pareja o trío", "20.4%", "10.6%", "10.9%", "20% · 10%"],
        ["6", "Dos sobrecartas", "24.1%", "12.8%", "13.0%", "24% · 12%"],
        ["7", "Set → full o póker", "27.8%", "14.9%", "15.2%", "28% · 14%"],
        ["8", "Escalera abierta", "31.5%", "17.0%", "17.4%", "32% · 16%"],
        ["9", "Proyecto de color", "35.0%", "19.1%", "19.6%", "36% · 18%"],
        ["10", "Gutshot + dos sobrecartas", "38.4%", "21.3%", "21.7%", "40% · 20%"],
        ["11", "Escalera abierta + una sobrecarta", "41.7%", "23.4%", "23.9%", "44% · 22%"],
        ["12", "Proyecto de color + gutshot", "45.0%", "25.5%", "26.1%", "48% · 24%"],
        ["13", "–", "48.1%", "27.7%", "28.3%", "52% · 26%"],
        ["14", "Escalera abierta + dos sobrecartas", "51.2%", "29.8%", "30.4%", "56% · 28%"],
        ["15", "Proyecto de color + escalera abierta", "54.1%", "31.9%", "32.6%", "60% · 30%"],
        ["16", "–", "57.0%", "34.0%", "34.8%", "64% · 32%"],
        ["17", "–", "59.8%", "36.2%", "37.0%", "68% · 34%"],
        ["18", "–", "62.4%", "38.3%", "39.1%", "72% · 36%"],
        ["19", "–", "65.0%", "40.4%", "41.3%", "76% · 38%"],
        ["20", "–", "67.5%", "42.6%", "43.5%", "80% · 40%"],
      ],
      note: "La cifra de dos cartas solo vale cuando vas a ver las dos sin volver a pagar (un all-in). Si enfrentas una apuesta en el flop, usa la columna flop → turn: 9 outs = 19.1%. Las sobrecartas son los outs menos fiables — contra una mano hecha, ligar pareja con una muchas veces sigue perdiendo, así que descuéntalas. Cómo contar outs sin contarlos dos veces, en",
      link: { slug: "holdem-outs", text: "Cómo contar outs en el póker" },
      linkTail: ".",
    },
    {
      badge: "Referencia rápida",
      h2: "Calculadora de pot odds: equity mínima según el tamaño de la apuesta",
      intro: "Ante una apuesta de este tamaño, esta es la equity mínima con la que un call queda en punto de equilibrio: call ÷ (bote después de la apuesta + call). Va en las dos formas — como odds y como la equity que exigen; la calculadora muestra la forma de equity. Compárala con las odds exactas de tu proyecto en la tabla de outs de arriba.",
      th: ["Tamaño de apuesta", "Odds (X : 1)", "Equity necesaria"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ de bote", "5 : 1", "16.7%"],
        ["⅓ de bote", "4 : 1", "20.0%"],
        ["½ de bote", "3 : 1", "25.0%"],
        ["⅔ de bote", "2.5 : 1", "28.6%"],
        ["¾ de bote", "2.33 : 1", "30.0%"],
        ["Bote completo", "2 : 1", "33.3%"],
        ["1.5× bote", "1.67 : 1", "37.5%"],
        ["2× bote", "1.5 : 1", "40.0%"],
        ["3× bote", "1.33 : 1", "42.9%"],
      ],
      note: "Un proyecto de color (35.0% con dos cartas por salir, 19.1% en la siguiente) paga una apuesta del tamaño del bote en el flop solo cuando es all-in. Si no, la calculadora de odds implícitas — el interruptor de la pestaña «Pot odds» — suma lo que esperas ganar después, siempre que tu rival tenga fichas detrás y una mano que vaya a pagar; descuéntalo mucho cuando no vas al nuts. El método de 10 segundos para cualquier spot está en",
      link: { slug: "holdem-pot-odds", text: "Cómo calcular las pot odds" },
      linkTail: ".",
    },
    {
      badge: "Referencia rápida",
      h2: "Calculadora de SPR: cuánta mano necesitas",
      intro: "El SPR es stack efectivo ÷ bote actual, y el stack efectivo es el más corto de los dos — todo lo que cualquiera de los dos puede ganar o perder. Cuanto más bajo, más de ese stack ya está comprometido y más débil puede ser la mano con la que te juegas todo; cuanto más alto, más cerca de los nuts tienes que estar para un bote grande. Lee las zonas como un plan para el flop: en un board húmedo o pareado, una pareja sigue siendo una pareja.",
      th: ["SPR", "Zona", "Fuerza de mano · acción"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Comprometido", "Pareja máxima con kicker máximo o mejor en un flop seco: piensa en meterlo todo — a esta profundidad, foldear suele ser el mayor de los dos errores"],
        ["4 ≤ SPR < 8", "Flexible", "Doble pareja o mejor para valor; una pareja aguanta una o dos calles y luego controlas el bote"],
        ["8 ≤ SPR < 15", "Casi profundo", "Sets o mejor para jugarse el stack; los proyectos ganan odds implícitas"],
        ["SPR ≥ 15", "Profundo", "Botes grandes solo con manos de nivel nuts — las manos hechas débiles son blanco de faroles"],
      ],
      note: "La calculadora de SPR de arriba convierte cualquier stack y bote en una de estas cuatro zonas. Para los rangos según la profundidad de stack, lee",
      link: { slug: "holdem-short-stack", text: "Cómo jugar un short stack en póker" },
      linkTail: ".",
    },
    {
      badge: "Referencia rápida",
      h2: "Calculadora de M: las cinco zonas del torneo",
      intro: "La M es tu stack ÷ el costo de una órbita (ciega pequeña + ciega grande + todos los antes): cuántas vueltas aguantas sin jugar una mano. Las zonas suponen una mesa llena de nueve o diez jugadores; con menos, multiplica primero la M por (jugadores ÷ 10) — la «M efectiva» de Harrington —, así que una M de 10 en una mesa final de seis se juega como un 6 (la pestaña «M de torneo» muestra la M bruta; esa conversión la haces tú).",
      th: ["Zona", "M", "Estrategia"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Zona muerta", "< 1", "La fold equity ya no existe — mete todo con la primera mano jugable antes de que te toquen las ciegas, mejor si nadie ha entrado"],
        ["🔴 Zona roja", "1–5", "Push/fold: shove con tus buenas manos, fold con el resto, dóblate pronto"],
        ["🟠 Zona naranja", "6–9", "Cierra tu rango a manos fuertes y busca el open-shove"],
        ["🟡 Zona amarilla", "10–19", "Empieza la presión — acumula fichas con agresividad en los buenos spots"],
        ["🟢 Zona verde", "20+", "Stack cómodo — estrategia completa, juego posicional y faroles"],
      ],
      note: "Por qué los stacks de torneo se miden en órbitas y ciegas y no en fichas, en",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Cash game vs torneo en póker" },
      linkTail: ".",
    },
  ],

  guide: {
    badge: "Herramientas",
    h2: "Cómo usar las 9 calculadoras de Hold'em",
    cards: [
      { icon: "🎲", title: "Calculadora de equity (mano contra mano)", body: "Mete de 2 a 4 manos y cualquier board para ver el % de victoria, el % de empate y la equity de cada una. Si todas las manos son conocidas, el flop y el turn se enumeran de forma exacta; preflop, o con un rival de mano aleatoria, corre 60,000 simulaciones y lo indica." },
      { icon: "🎯", title: "Calculadora de outs", body: "Calcula con precisión la probabilidad de que tu proyecto entre después del flop o del turn. Ves a la vez el atajo de la regla del 2 y 4 y la cifra exacta." },
      // 딜러 렌즈(EN): «rival con stack profundo» 조건 → «lo que esperas ganar en calles posteriores»
      { icon: "💰", title: "Pot odds y odds implícitas", body: "Decide con matemáticas si pagar o foldear; el interruptor de odds implícitas suma el dinero que esperas ganar en las calles siguientes." },
      { icon: "🃏", title: "Evaluador de manos", body: "Elige cartas para ver qué mano tienes según la jerarquía. Mete hasta 7 cartas y la calculadora encuentra sola la mejor combinación de 5." },
      { icon: "📊", title: "Fuerza de la mano inicial", body: "Elige tus dos cartas de mano para ver cuál de las 169 manos es y la acción recomendada según la posición." },
      { icon: "📐", title: "SPR (Stack-to-Pot Ratio)", body: "La relación entre stack y bote te dice cuánta mano necesitas. Cuanto más bajo el SPR, más favorece comprometerse con una mano fuerte." },
      { icon: "🏆", title: "M de torneo", body: "La M de Harrington mide la presión sobre tu stack de torneo. Tu estrategia cambia por completo entre las zonas verde, amarilla, naranja, roja y muerta." },
      { icon: "📈", title: "Calculadora de ICM", body: "El Independent Chip Model convierte las fichas de torneo en valor real en premios, con una columna de chip chop al lado — los números detrás de las decisiones de burbuja y de los acuerdos en la mesa final." },
      { icon: "⚡", title: "Tabla push/fold de Nash", body: "Una tabla 13×13 de Nash para heads-up, 6-max y 9-max: con qué manos hacer open-shove y con cuáles pagar de 1 a 25bb. Imprescindible en las fases finales de un torneo." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "Preguntas frecuentes sobre la calculadora de poker y la de ICM",
    q: "Q. {q}",
  },

  related: {
    badge: "Profundiza",
    h2: "Guías para leer cuando los números ya te cuadren",
    // ★2026-09-17 6 → 8(EN과 «개수» 동일 · holdem-icm · holdem-short-stack · holdem-implied-odds 편입 · holdem-tournament 제외).
    //   제목 = lib/posts-es 실제 제목의 단축형.
    links: [
      { slug: "holdem-icm", title: "¿Qué es el ICM en póker?", desc: "Chip EV vs EV en premios, bubble factor y acuerdos" },
      { slug: "holdem-equity", title: "El equity en el póker explicado", desc: "% de victoria, fold equity y realización" },
      { slug: "holdem-pot-odds", title: "Cómo calcular las pot odds", desc: "Convierte cada call o fold en matemáticas" },
      { slug: "holdem-outs", title: "Cómo contar outs", desc: "Outs por proyecto y la regla del 2 y 4" },
      { slug: "holdem-probability", title: "Probabilidades en el póker", desc: "Los números clave detrás de cada mano" },
      { slug: "holdem-starting-hands-chart", title: "Tabla de manos iniciales", desc: "Qué manos jugar según la posición" },
      { slug: "holdem-short-stack", title: "Cómo jugar un short stack", desc: "Cómo usar una tabla push/fold y sus límites" },
      { slug: "holdem-implied-odds", title: "Odds implícitas en el póker", desc: "Cuando un mal precio es un buen call" },
    ],
  },
};
