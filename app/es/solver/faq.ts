/**
 * `/es/solver` FAQ — 화면(`solver-client.tsx`)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 정본 구조 = `app/en/solver/faq.ts` · `app/ja/solver/faq.ts`.
 *
 * ★2026-08-22 신설. **스페인어권에 솔버 진입로가 0개였다**(본체는 noindex).
 *
 * 🔴 **번역이 아니다.** 실측 근거는 `docs/keyword-bank/es-gto-solver.md`. 갈아 끼운 것 —
 *   ① **PAA 축어를 그대로 문항으로 세웠다** (DataForSEO SERP API · google.es · `solver poker`):
 *      `¿Qué son los Solvers?` · `¿Cuál es la mejor aplicación para jugar poker?` ·
 *      `¿Dónde puedo encontrar clases de poker gratis?`
 *   ② 🔴 **`¿Cuánto cuesta GTO Wizard?`도 PAA에 있지만 답하지 않는다** — 남의 가격을 우리가
 *      대신 적어 주는 것은 다른 일이다(CLAUDE.md §12-B · KO·EN·ja와 같은 규율).
 *      「구독이냐·하루 몇 번이냐·크레딧이냐」라는 **구조**로만 대비시킨다.
 *   ③ **`solver poker gratis`(ES 20 · MX 10)** 전용 문항 — `solver poker`는 **SD 0**이다.
 *   ④ **모바일·오프라인 문항 신설** — 앱이 이미 PWA이고(`Agregar a inicio`·`Estudio offline`)
 *      네이티브 앱 등록을 준비 중이다. SERP 실측에서 `play.google.com` 2위·`apps.apple.com` 8위 —
 *      **스토어 등재물이 이 검색결과에서 실제로 순위를 먹는다.**
 *   ⑤ **ja의 「삼성 브라우저」 문항은 뺐다** — 스페인어권 맥락이 아니다. 앱이 실제로 경고하는
 *      **iOS·Safari 싱글스레드**만 남겼다.
 *
 * 🔴 **답의 사실은 전부 2026-08-22에 `solver.holdemmaster.com/?lang=es`를 열어
 *    화면에서 직접 읽은 것만 쓴다** (Playwright `browser_evaluate` DOM 추출). 확인한 축어 —
 *    · `<html lang="es">` · title «HoldemMaster GTO Solver — Solver GTO gratis en el navegador»
 *    · 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
 *    · 히어로 «Estrategia GTO, directo en tu navegador.» / «Nada que instalar, nada que pagar.
 *      Ingresa tus rangos y un board, y la estrategia óptima se calcula en tu propio dispositivo.»
 *    · 특징 4블록 «Gratis / Todas las funciones, sin límites de uso» ·
 *      «Estudio offline / Agrégalo a tu pantalla de inicio y practica sin internet» ·
 *      «Cálculo rápido / Multihilo — velocidad de solver de escritorio» ·
 *      «Entrenador GTO / Juega spots y recibe tu nota por pérdida de EV»
 *    · 사이드바 «① Rango OOP ② Rango IP ③ Board ④ Bet sizes ⑤ Calcular»
 *    · 네비 «Spots de estudio ⚡ Al instante» «Entrenador GTO EV» «Tablas preflop Rangos» «Equity % victoria»
 *    · 고지 «En iOS y Safari, las limitaciones del navegador fuerzan el cálculo con un solo hilo,
 *      así que corre más lento — en macOS recomendamos Chrome. La memoria disponible está limitada
 *      a 4GB (límite de WebAssembly), por lo que resolver spots grandes resulta más cómodo en una PC.»
 *    · AGPL 고지 «Esta app está basada en WASM Postflop (de Wataru Inariba, AGPL-3.0), localizada y
 *      mejorada por HoldemMaster. El código fuente modificado completo está publicado en GitHub
 *      bajo la misma licencia.»
 *    · 학습 스팟 **13개**(3그룹 7+3+3)
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라 — 스페인어 앱에 사실오류가 살아 있다** (ja 교훈 ⑤).
 *   판정 기준은 **`docs/gto-solver-series-spec.md` §4-B 확정표**다. 이번 회차에 실제로 걸린 것 —
 *   · **트레이너 채점**: 앱은 «recibe tu nota por **pérdida de EV**»라고 쓰지만, 앱은 2026-08-15에
 *     채점을 **팟 대비 비율**로 바꿨다(0.35% / 1%, 하한 0.02bb·0.05bb). **아래 문항은 정정본을 쓴다.**
 *   · ⑨ `Q♥T♥7♠`: 앱 «Observa dónde el 3-bettor empieza a frenar» → §4-B 벳 **99.1%**(체크 0.9%).
 *     **멈추지 않는다.** EN이 이미 철회한 주장이다.
 *   · ⑬ `A♠A♥6♦`: 앱 «los tríos son poco frecuentes» → 이유가 틀렸다(§4-B 벳 80.1%).
 *   ⚠ 셋 다 **솔버 앱 es 번역의 결함**이다 — 별건으로 솔버 쪽에 통지할 것.
 *
 * 🔴 카니발 — 이 FAQ가 **답하지 않는 것 둘**(뱅크 §5):
 *   ① 「GTO란 무엇인가」 순수 정의 → `es/holdem-glossary` L237이 이미 정본을 갖고 있다. 링크로 넘긴다.
 *   ② 프리플랍 표 → `es/holdem-starting-hands-chart`가 갖는다(`tablas preflop` ES 210 · SD 0).
 *   **되찾아 오지 마라.**
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_ES: FaqItem[] = [
  {
    q: "¿Qué es un solver poker y en qué se diferencia de una tabla preflop?",
    a: "Un solver es el programa que calcula la estrategia de equilibrio de un spot concreto: le das los dos rangos, un board y los tamaños de apuesta, y te devuelve con qué frecuencia cada mano apuesta, pasa o foldea. Una tabla preflop te dice qué manos abrir antes del flop; el solver empieza justo donde esa tabla termina. Son dos herramientas distintas y se usan en momentos distintos.",
  },
  {
    q: "¿Es realmente gratis?",
    a: "Sí. Todas las funciones, sin límites de uso: resolver tus propios spots, abrir los ejemplos ya calculados, el Entrenador GTO, guardar y exportar. No hay plan de pago, ni créditos, ni un número máximo de soluciones al día.",
  },
  {
    q: "¿Necesito registrarme o crear una cuenta?",
    a: "No. Abres la página y calculas. El inicio de sesión solo sirve para sincronizar tu historial del Entrenador entre dispositivos — si no lo usas, no pierdes ninguna función.",
  },
  {
    q: "¿Hay que instalar algo?",
    a: "No hace falta. Corre dentro del navegador con WebAssembly, así que funciona en Windows, macOS, Linux y móvil sin instalador. Si quieres, puedes añadirlo a la pantalla de inicio con «Agregar a inicio», pero es un acceso directo del navegador, no un programa: nunca pide permisos del sistema.",
  },
  {
    q: "¿Qué son los Solvers?",
    a: "Son programas que resuelven una situación de póker buscando el equilibrio: la estrategia que ningún rival puede explotar sistemáticamente. En lugar de decirte «apuesta» o «foldea», te dan frecuencias — por ejemplo, apostar el 70% de las veces con una mano y pasar el 30% restante. Esa mezcla es lo que hace que la estrategia sea inexplotable.",
  },
  {
    q: "¿Puedo usarlo en el móvil y sin conexión?",
    a: "Sí a las dos cosas, con un matiz. Añádelo a la pantalla de inicio y los Spots de estudio y el Entrenador GTO quedan guardados en tu dispositivo, así que puedes seguir practicando sin internet. Resolver un spot personalizado desde cero necesita que el motor de cálculo se haya descargado antes al menos una vez.",
  },
  {
    q: "¿Funciona en iPhone o en Safari?",
    a: "Funciona, pero más lento. En iOS y Safari las limitaciones del navegador fuerzan el cálculo con un solo hilo, mientras que en el resto de navegadores el solver usa varios núcleos a la vez. Para spots grandes es más cómodo un ordenador; en macOS recomendamos Chrome.",
  },
  {
    q: "¿También calcula el preflop?",
    a: "No. Esta herramienta es de postflop heads-up: flop, turn y river. Para los rangos de apertura por posición tienes la tabla de manos iniciales, y dentro de la app hay una sección de Tablas preflop para consultarlas mientras montas un spot.",
  },
  {
    q: "¿En qué se diferencia de GTO Wizard o PioSOLVER?",
    a: "En dónde y cómo se calcula. Aquí la solución se calcula en tu dispositivo en el momento, con los rangos y el árbol que tú escribas. Las plataformas de consulta te muestran soluciones ya calculadas de antemano, dentro del catálogo que publican. PioSOLVER es un programa que se instala y calcula en tu propia máquina, principalmente en Windows. No son mejores o peores: resuelven necesidades distintas.",
  },
  {
    q: "¿Cuánto tarda en resolver un spot?",
    a: "Depende del tamaño del árbol y de tu procesador: desde unos segundos hasta unos minutos. Si solo quieres ver una solución sin esperar, abre cualquier spot de la sección Spots de estudio — ya están calculados y aparecen al instante.",
  },
  {
    q: "¿Mis rangos se envían a algún servidor?",
    a: "No. El cálculo corre en el procesador de tu propio dispositivo, no en un servidor nuestro. Lo que guardas queda en tu navegador, y solo sale de ahí si tú generas un enlace para compartir un spot o exportas un archivo.",
  },
  {
    q: "¿El solver tiene en cuenta el rake?",
    a: "Sí. Puedes configurar el rake y el tope de rake antes de resolver, así que la solución se ajusta a las condiciones de la partida que realmente juegas. Es una diferencia que se nota sobre todo en botes pequeños, donde la comisión cambia qué manos siguen siendo rentables.",
  },
  {
    q: "¿Qué es el Entrenador GTO y cómo puntúa mis decisiones?",
    a: "Es un modo de práctica: te presenta spots ya resueltos, tú eliges una acción y te dice cuánto valor esperado has dejado sobre la mesa. Como el GTO mezcla acciones, elegir una opción poco frecuente no es automáticamente un error — por eso la nota se mide en proporción al bote: hasta el 0,35% del bote es jugada óptima, hasta el 1% es aceptable, y por encima de ahí conviene revisar. Los cortes tienen suelos de 0,02bb y 0,05bb para que las diferencias mínimas no cuenten como fallo.",
  },
  {
    q: "¿Puedo guardar un spot y compartirlo?",
    a: "Sí. Puedes guardar rangos y configuraciones, importarlas y exportarlas como archivo, sacar el resumen de resultados en CSV y generar un enlace que abra exactamente el mismo spot en el dispositivo de otra persona. Es la forma más rápida de preguntar una mano en un grupo de estudio.",
  },
  {
    q: "¿Sirve para torneos o solo para cash?",
    a: "El cálculo es de chip EV, así que encaja de forma natural con cash y con las fases de torneo en las que el ICM todavía no pesa. Cerca de la burbuja y de los saltos de premio, la decisión correcta puede alejarse de la solución de chip EV, y eso es un cálculo distinto que esta herramienta no hace.",
  },
  {
    q: "¿Está la aplicación en español?",
    a: "Sí, la interfaz completa está en español, y también puedes cambiar a coreano, inglés, japonés, portugués, alemán y chino desde el selector de idioma. No es una traducción parcial: los menús, los spots de estudio y el Entrenador están localizados.",
  },
  {
    q: "¿Cuál es la mejor aplicación para jugar poker?",
    a: "Conviene separar dos cosas que se buscan igual pero no lo son. Para jugar manos necesitas una sala; esta página no es una sala ni te lleva a ninguna. Para estudiar lo que deberías haber hecho en una mano ya jugada, un solver como este es la herramienta, y el Entrenador GTO es la parte que más se parece a «jugar» mientras aprendes.",
  },
  {
    q: "¿Dónde puedo encontrar clases de poker gratis?",
    a: "Un solver por sí solo te da números, no explicaciones. Por eso cada spot de estudio viene acompañado de guías en el blog que explican por qué la solución es esa — desde la ventaja de rango en boards secos hasta el tamaño de apuesta en botes de 3-bet. Es material gratuito y puedes leerlo con la solución abierta al lado.",
  },
];

export default SOLVER_FAQ_ES;
