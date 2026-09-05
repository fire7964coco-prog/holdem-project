"use client";

import Link from "next/link";
import { SOLVER_FAQ_ES } from "./faq";

/**
 * ★CTA는 `?lang=es`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-08-22 라이브 확인** — `?lang=es`로 열면 `<html lang="es">`가 되고 화면 전체가
 *   스페인어로 뜬다(Playwright DOM 실측). 한국어·영어·일본어 랜딩과 같이 **UTM은 붙이지 않는다**.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=es";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/es/solver` 랜딩 — ★2026-08-22 신설
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **스페인어권에 그 진입로가 0개였다.**
 *
 * ▶ 키워드 근거 (2026-08-22 실측 · DataForSEO Labs `keyword_suggestions` + 라쿠 볼륨.
 *   전체 수확 343개 중 볼륨≥10이 217개 · 판정은 `docs/keyword-bank/es-gto-solver.md`)
 *     **`rangos poker`/`poker rangos`/`rangos del poker` ES 480 · MX 170 · SD 0~1**(이 판 최대) ·
 *     **`solver poker` ES 70 · MX 30 · SD 0** · `gto poker`/`poker gto` ES 210 · **MX 260**(SD 6~7) ·
 *     `rangos de poker` 90 · `rangos de manos poker` 50 · `solver poker gratis` 20/10 ·
 *     `que es gto en poker` 20/**30** · `rangos en el poker` 10/20 · `lectura de rangos poker` 10/10
 *   🪶 인접(경쟁 브랜드 · 직접 조준 금지): `gto wizard` ES 2,900 · `piosolver` 140 ·
 *      `educapoker` ES **5,400** · `formapoker` 480 · `preflop vision` 390
 *
 * ▶ SERP 실측으로 잡은 이 페이지의 «이길 자리» (2026-08-22 · DataForSEO SERP API · google.es)
 *   ① 🟢🟢 **`rangos poker` top-10이 «전부 프리플랍»이다. 포스트플랍 레인지를 다루는 페이지가 0개다.**
 *      es.pokernews · freebetrange · pokerstrategy · youtube · educapoker · wikipedia ·
 *      pokersciences · reddit · formapoker · pokerstars.es — 전부 프리플랍 표다.
 *      🪶 PAA조차 딴소리다(`¿Qué es mejor, full o color?` = 족보) — **구글이 이 쿼리의 의도를
 *         아직 못 잡고 있다.** 우리가 «포스트플랍 레인지»로 정의하러 들어갈 자리다.
 *   ② 🔴 **`solver poker` top-10에 «지금 바로 돌아가는» 무료 솔버가 0개다.**
 *      gtowizard(구독) · Google Play(앱) · pocketsolver(앱) · educapoker(TexasSolver «소개 글») ·
 *      casinobarcelona(설명 글) · solvers.poker(리뷰) · optimuspoker · App Store ·
 *      888poker(설명 글) · piosolver(설치형).
 *      **PAA 축어**: `¿Cuánto cuesta GTO Wizard?` · `¿Qué son los Solvers?` ·
 *      `¿Cuál es la mejor aplicación para jugar poker?` · `¿Dónde puedo encontrar clases de poker gratis?`
 *   ③ 🔴 **`optimuspoker`는 반례가 아니다** — 라이브 실측(Playwright): 무료 티어가
 *      「**1 Solution / Day**」이고 **등록 필수**이며 축어로 *"lock a flop … that click **makes use of
 *      one credit**"*라고 쓴다. 유료는 월 단위 3티어다.
 *      → 차별화어는 「무료」가 아니라 **「등록 없음 · 제한 없음 · 크레딧 없음」**이다.
 *
 * 🔴🔴 **`GTO`를 단독으로 쓰지 마라 — 멕시코에서 과나후아토 주 코드다.**
 *   실증(lowfruits export `gto_poker____1787383328.xlsx` 691행): `ubicación de guanajuato` ·
 *   `historia de guanajuato` · `cual es la capital de guanajuato` · `que es gto mexico` ·
 *   `que es gto policia` · `¿qué es un gto carro`(폰티악) · `¿qué es gto anime`(ja에서도 걸린 드라마).
 *   **제목·H1·H2에서 반드시 `poker`/`solver`와 붙여 쓴다.** ja의 「ジーティーオー=드라마」와 같은
 *   계열인데 **지명+자동차+애니 3중**이라 더 심하다.
 *
 * 🔴 **어순이 난이도를 가른다** — `solver poker` **SD 0** 대 `poker solver` **SD 46** ·
 *   `solver de poker` **SD 46**. 뜻은 같은데 0 대 46이다.
 *   ✅ **ja와 반대로 es에서 `solver`는 살아 있는 말**이다. 자사 es 코퍼스 4편이 이미 본문 용어로
 *      쓰고(`card-counting`·`continuation-bet`·`position-play`·`starting-hands-chart`),
 *      `es/holdem-glossary` L237이 「…inexplotable de los **solvers**」로 정본을 정해 뒀다.
 *      🪶 grep 오탐 주의 — `resolver`/`absolver`가 "solver"를 포함한다. 단어경계로 세라.
 *
 * ❌ **`simulador de poker`(ES 140 · MX 70)를 조준하지 마라.**
 *   SERP top-10 = misjuegos · minijuegos · juegos.elpais.com · reddit · playpager · zyngapoker ·
 *   Google Play · math4all · Steam · unmasked.poker → **의도가 «무료로 노는 게임»**이다.
 *   볼륨만 보고 넣으면 이탈률만 올린다.
 *
 * 🔴🔴 카니발 방지 — **es가 «가진 것»은 EN과 다르다. 그대로 옮기면 404가 난다.**
 *   · `app/es/`에 있는 것은 `blog`·`tournaments`·`page.tsx`뿐이다.
 *     **`/es/hand-chart`·`/es/calculator`·`/es/win-rate-quiz`는 없다.**
 *     → EN이 거는 도구 링크 3종을 **전부 es 블로그 글로 갈았다.** 링크 대상은 전건
 *       `lib/posts-es/<slug>.ts` 파일 존재를 확인했다(10/10).
 *   · **프리플랍 표 = `es/holdem-starting-hands-chart`가 소유**한다.
 *     `tablas preflop` **ES 210 · SD 0**이 그쪽 자리이고, 2026-08-22에 그 글의
 *     「tablas GTO de preflop」 8곳을 **「tablas preflop GTO」로 어순 정정**해 실검색 구를 넣었다.
 *     🔴 **`tablas preflop`을 제목·H2에 쓰지 마라.** 본문에서 넘기기만 한다.
 *   · **`estrategia poker`(ES 110 · SD 0) = `es/holdem-strategy`가 seoTitle + 태그 4개로 소유**한다.
 *     이 랜딩이 가져가는 것은 `estrategia gto poker`(10)뿐이다.
 *   · **`calculadora de poker`(ES 170 · SD 1) + 롱테일 12개 = `/es/calculator`의 자리**다.
 *     `calculadora de probabilidades poker`(SD 8) · `calculadora de odds poker`(SD 9) 등
 *     전부 SD 10 이하지만 **가져오지 않는다**(2026-08-22 사장님 판정).
 *   🟢 **미소유 확인**(es 60편 전수 태그 grep): `rangos poker` 일반형 0편 · `solver` 0편 ·
 *      `gto poker` 0편 · `postflop` 0편 · `simulador`·`entrenador`는 본문에도 0건.
 *
 * 🔴 사실 출처 — 전부 2026-08-22에 `?lang=es`로 열어 DOM에서 직접 읽었다(축어):
 *   · 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
 *   · 사이드바 «① Rango OOP ② Rango IP ③ Board ④ Bet sizes ⑤ Calcular»
 *   · 네비 «Spots de estudio ⚡ Al instante» «Entrenador GTO EV» «Tablas preflop Rangos» «Equity % victoria»
 *   · 히어로 «Estrategia GTO, directo en tu navegador.» / «Nada que instalar, nada que pagar.»
 *   · 특징 4블록 «Gratis / Todas las funciones, sin límites de uso» · «Estudio offline» ·
 *     «Cálculo rápido / Multihilo — velocidad de solver de escritorio» · «Entrenador GTO»
 *   · 고지 «En iOS y Safari, las limitaciones del navegador fuerzan el cálculo con un solo hilo…
 *     La memoria disponible está limitada a 4GB (límite de WebAssembly)…»
 *   · AGPL 고지 «Esta app está basada en WASM Postflop (de Wataru Inariba, AGPL-3.0), localizada y
 *     mejorada por HoldemMaster. El código fuente modificado completo está publicado en GitHub…»
 *   · 학습 스팟 **13개**(3그룹 7+3+3) · 그룹 조건 «Bote 5.5bb · Stack 97.5bb» /
 *     «Bote 22.5bb · Stack 89bb» / «Bote 6bb · Stack 97bb»
 *     🔴 **여기 마침표는 오타가 아니라 «앱 축어»다** — 앱 화면이 실제로 `5.5bb`로 쓴다.
 *        🔴 **2026-08-25 결정 변경(검수장 M-062 · 사장님 판단) — 랜딩도 마침표로 통일했다.**
 *        이전에는 `cond`를 쉼표(`5,5bb`)로 옮겨 두 층이 일부러 달랐다. 그러나 실측 결과
 *        브리프 `docs/translation-terms-es.md`가 «EN 형식 유지 · 유럽식 변환 금지»를 명문화했고
 *        코퍼스 1,960:241 · 앱 36:0으로 **마침표가 명문이자 압도적 다수**였다 — 3층 대 1층의
 *        정본 충돌이라 다수·명문 쪽으로 맞췄다(랜딩 32건 소급 · 천 단위 `5,400`은 EN 형식이라 유지).
 *        ⚠ **쉼표로 되돌리지 마라.** RAE 규범은 쉼표지만 이 프로젝트는 배포 일관성을 택했다 —
 *        근거·재론 조건은 `docs/settled-decisions.md`에 있다.
 *   §13 산수 검산(EN·ja 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5.5 = 2.5+2.5+0.5, 스택 100−2.5 = 97.5 ·
 *     3벳팟 22.5 = 11+11+0.5, 100−11 = 89, SPR 89÷22.5 ≈ 4.0 ·
 *     블라인드전 6 = 3+3, 100−3 = 97 ·
 *     5.5×0.35% = 0.019 ≈ 0.02bb, 5.5×1% = 0.055 ≈ 0.06bb ·
 *     22.5×0.35% = 0.079 ≈ 0.08bb, 22.5×1% = 0.225 ≈ 0.23bb
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라 — es 앱에 사실오류가 살아 있다** (ja 교훈 ⑤).
 *   판정 기준은 **`docs/gto-solver-series-spec.md` §4-B 확정표**다. 이번에 실제로 걸린 것 셋 —
 *   · **트레이너 채점**: 앱 «recibe tu nota por pérdida de EV» → 앱은 2026-08-15에 **팟 대비 비율**로
 *     바꿨다. 아래는 정정본(0.35% / 1%, 하한 0.02bb·0.05bb)을 쓴다. **절대 bb로 되돌리지 마라.**
 *   · ⑨ `Q♥T♥7♠`: 앱 «Observa dónde el 3-bettor empieza a frenar» → §4-B 벳 **99.1%**(체크 **0.8%**).
 *     **멈추지 않는다.** EN이 이미 철회한 주장이라 정정본을 쓴다.
 *   · ⑬ `A♠A♥6♦`: 앱 «los tríos son poco frecuentes» → 결론은 옳고 **이유가 틀렸다**.
 *     실측은 SB 88콤보 대 BB 66콤보이고 SB가 **80.1%** 벳한다.
 *   ⚠ 셋 다 **솔버 앱 es 번역의 결함**이다 — 별건으로 솔버 쪽에 통지할 것(ja와 같은 3건이다).
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
 *   오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접 계산은
 *   계산 엔진을 한 번 내려받은 뒤에만 돈다(KO·EN·ja 주석과 같은 경고).
 *
 * ✅ **학습 스팟 13행에 블로그 링크가 있다(2026-09-02 es 13편 발행)** — 그 전까지는 «링크 0개가 정상»이었다
 *   (없는 링크를 미리 걸지 않는다 — 404는 색인에 남는다). `slug`는 `lib/gto-series.ts`와 동일.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Precio", "Gratis — todas las funciones, sin límite de uso"],
  ["Instalación", "No hace falta — corre en el navegador (WebAssembly)"],
  ["Cuenta", "No hace falta (el inicio de sesión solo sincroniza el historial del Entrenador)"],
  ["Alcance", "Postflop heads-up (flop, turn y river)"],
  ["Dónde se calcula", "En tu dispositivo, no en un servidor nuestro"],
  ["Compatibilidad", "Navegadores modernos — Windows, macOS, Linux y móvil"],
  // ⚠ 이 열거는 앱 셀렉터(8개: ko,en,ja,es,pt,de,zh,zh-hant)와 1:1이 아니다 — 산문에서
  //    간체·번체를 「chino」 하나로 묶었다(숫자를 주장하지 않으므로 허용 · M-046 §3 판정).
  // ★2026-08-24 갱신 — 앱이 fr을 배포해 셀렉터가 9개가 됐다(francés 추가).
  // ★2026-09-05 갱신 — 앱이 id·ms를 배포해 셀렉터가 11개가 됐다(라이브 실측 · ③ 마감 회차).
  ["Idioma", "Español (también en coreano, inglés, japonés, portugués, alemán, francés, chino, indonesio y malayo)"],
  ["Motor", "WASM Postflop de código abierto (AGPL-3.0) · fuente modificada publicada"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리를 표로 못박아 카니발을 막는다.
 * 🔴 EN판은 `/en/hand-chart`·`/en/calculator`·`/en/win-rate-quiz`로 보내지만
 *    **es에는 그 세 페이지가 없다.** es 블로그 글과 앱 내장 기능으로 보낸다.
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Calcular un spot postflop concreto", "El solver de esta página", null],
  ["Saber qué manos abrir en cada posición", "La tabla de manos iniciales", "/es/blog/holdem-starting-hands-chart"],
  ["Contar outs y calcular pot odds", "La guía de pot odds", "/es/blog/holdem-pot-odds"],
  ["Ver solo el porcentaje de victoria de una mano", "La guía de equity", "/es/blog/holdem-equity"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-22 축어 실측). */
const STEPS = [
  { n: "①", title: "Rango OOP", desc: "Pinta el rango preflop del jugador fuera de posición en la cuadrícula 13×13, o escríbelo directamente con notación (22+, A2s+, KTo+). La diagonal son las parejas servidas, arriba a la derecha las manos del mismo palo (AKs) y abajo a la izquierda las de distinto palo (AKo)." },
  { n: "②", title: "Rango IP", desc: "Haz lo mismo con el jugador en posición. El atajo más rápido no es construir los dos desde cero, sino cargar un spot de estudio y editar sus rangos." },
  { n: "③", title: "Board", desc: "Haz clic en las tres cartas del flop o pulsa flop aleatorio. Si quieres estudiar un run-out concreto, también puedes fijar el turn y el river." },
  { n: "④", title: "Bet sizes", desc: "Define el bote inicial, el stack efectivo y los tamaños de apuesta y subida de cada calle. La primera vez deja los valores por defecto y comprueba solo el bote y el stack." },
  { n: "⑤", title: "Calcular", desc: "Construye el árbol y ejecuta. El cálculo corre en tu máquina y tarda de unos segundos a unos minutos; cuando termine, abre la pestaña Resultados." },
];

/** 앱 「Cómo usarlo」이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변). */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB que paga", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN que abre", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말의 구역 구분을 그대로 옮겼다. */
const READ_SCREEN: string[][] = [
  ["Barra de acciones (arriba)", "Te mueve por los distintos puntos de la línea (flop → apuesta → call → turn)", "Haz clic en un nodo para saltar a la estrategia de ese punto (en los spots de estudio solo está calculado el flop)"],
  ["Matriz 13×13 (izquierda)", "Una casilla por mano; el reparto de colores dentro de la casilla es la frecuencia de cada acción", "Rojo apuesta o sube (más oscuro = tamaño mayor), verde pasa o iguala, casilla clara = fuera del rango"],
  ["Frecuencias (arriba a la derecha)", "Frecuencia de acción del rango entero y número de combos", "Aquí es donde lees «este rango pasa el 98% de las veces en este board»"],
  ["Clasificación de manos (centro derecha)", "Cómo encaja el rango con el board — top pair, proyectos, sin mano hecha", "De un vistazo ves a qué jugador favorece el board"],
  ["Tabla de detalle (abajo a la derecha)", "Peso, equity, EV y realización de equity (EQR) mano por mano, con el % de cada acción", "Se ordena por columna y el resumen se exporta a CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Cálculo de flop, turn y river", "yes", "El árbol postflop completo"],
  ["Cálculo del preflop", "no", "Los rangos de apertura están en la tabla de manos iniciales"],
  ["Tamaños de apuesta y subida libres", "yes", "% del bote, múltiplos, all-in y geométrico"],
  ["Tamaño independiente para el donk bet", "yes", "Puedes diseñar por separado la línea en la que OOP apuesta primero"],
  ["Rake y tope de rake", "yes", "Ajústalo a las condiciones de la partida que juegas"],
  ["Edición del árbol nodo a nodo", "yes", "Añade o quita acciones en un nodo concreto"],
  ["Modos de precisión y memoria", "yes", "Coma flotante 32 bits / entero 16 bits · límite del navegador ≈ 4GB"],
  ["Explotabilidad objetivo", "yes", "Cuanto más baja, más preciso y más lento"],
  ["Guardar rangos y configuraciones", "yes", "Guardar, cargar, importar y exportar"],
  ["Exportar el resumen a CSV", "yes", "Directo a la hoja de cálculo"],
  ["Enlace para compartir un spot", "yes", "Envía el mismo spot a tu grupo de estudio"],
  ["Abrir spots de estudio ya calculados", "yes", "El resultado aparece sin esperar"],
  ["Entrenador GTO con puntuación", "yes", "Con desglose de puntos débiles y cola de repaso"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSOLVER es de pago」라고 쓰지 마라** — 그쪽 공식 문서에 무료 버전 안내가 있다.
 *    1차 출처로 확인된 것은 **설치형·주로 Windows**라는 사실뿐이다.
 * 🪶 PAA에 `¿Cuánto cuesta GTO Wizard?`가 실재하지만, **수요가 있다고 해서 남의 가격을 우리가
 *    대신 적어 주는 것은 다른 일**이다. 액수 없이도 «우리는 무료»는 성립한다.
 */
const COMPARE: string[][] = [
  ["Cómo se calcula", "En el navegador, en el momento", "Se consultan soluciones ya calculadas", "Se instala y calcula en tu equipo"],
  ["Instalación", "No hace falta", "No hace falta", "Instalador, sobre todo en Windows"],
  ["Alcance", "Postflop heads-up", "A menudo incluye preflop", "Según la edición"],
  ["Editar rangos y árbol", "Libremente", "Dentro del catálogo publicado", "Libremente"],
  ["Dónde corre el cálculo", "En tu dispositivo", "En el proveedor (precalculado)", "En tu dispositivo"],
];

/**
 * 학습 예제 — 앱의 **스페인어 라벨을 그대로 옮겼다**(2026-08-22 축어 실측).
 * 🔴 **개수를 문장에 박지 않는다** — 아래 배열에서 세어 쓴다(`SPOT_TOTAL`).
 * 🔴 **카드는 기억으로 적지 않는다.** 13개의 «보드»는 라이브 화면에서 축어로 긁은 것이다.
 * 🔴 **다만 «note»는 앱 문구를 그대로 믿지 마라 — 2026-08-22에 두 건이 앱 쪽 오류였다.**
 *    판정 기준은 스펙 §4-B 확정표다. 정정한 자리에 각각 주석을 달아 뒀다.
 * ✅ 2026-09-02 — es 해설 13편을 발행하며 `slug`를 전 행에 채웠다(`lib/posts-es/<slug>.ts` · EN·ja 랜딩과 같은 대응).
 *    슬러그는 `lib/gto-series.ts`와 동일하다 — 바꾸지 마라.
 */
const SPOT_GROUPS = [
  {
    label: "Bote de subida simple — BTN vs BB (fundamentos)",
    cond: "OOP: BB (paga) · IP: BTN (abre) · Bote 5.5bb · Stack 97.5bb",
    items: [
      { board: "A♥7♦2♣", slug: "a-high-board-cbet", name: "Board seco A-high", note: "El spot de manual de la ventaja de rango: el as encaja de lleno en el rango del que abre" },
      { board: "K♠8♦3♣", slug: "k-high-board-cbet", name: "Board seco K-high", note: "También favorece a BTN, pero los checks suben un poco — compáralo con el board A-high" },
      // 🔴 앱 축어는 «Aquí ambos rangos conectan fuerte»인데, §4-B는 이 보드에서
      //    **BB의 EQR이 77.9%로 13스팟 최저**이고 BTN이 119.4%다(BB의 첫 액션 벳은 0.1%).
      //    「둘 다 강하다」로 읽히면 곤란하다 → ja와 같이 **패널에서 직접 확인하라**로 착지시킨다.
      { board: "Q♠J♦T♠", slug: "broadway-board-strategy", name: "Broadway conectado, two-tone", note: "Los dos rangos conectan con el board — mira en el panel de clasificación cuál de los dos llega de verdad con más fuerza" },
      // 🔴 앱 축어는 «La frecuencia de c-bet de BTN se desploma»인데 **스팟은 플랍 첫 액션(BB 차례)에서
      //    멈춘다** — 화면에서 BTN의 C벳 빈도를 확인할 수 없다. ja가 같은 이유로 BB 관점으로 바꿨다.
      //    §4-B ④: OOP(BB) 첫 액션 벳 **23.7%**.
      // 🔴 M-035 결함1 정정(2026-08-23) — 「콜러 우위 보드」는 **시리즈가 이름까지 대며 폐기한 명제**다.
      //    KO ④ `donk-bet-strategy` 축어: 「**레인지 우위가 BB로 넘어간 것은 아니다** — 에퀴티는
      //    **48.5% 대 51.5%**로 여전히 BTN이 앞선다」 · EN ④ FAQ 「Does the big blind have the advantage? → **No.**」
      //    초판은 앱 문구를 따라 `favorece al que paga` 로 썼다 — 검수장이 ja에서 잡았고 **언어 불변**이라 es에도 있었다.
      //    ⚠ 「우위가 넘어갔다」가 아니라 **「리드가 처음으로 전략의 한 축이 된다」**가 정확한 서술이다.
      { board: "9♥8♥7♣", slug: "donk-bet-strategy", name: "Conectado medio, two-tone", note: "El único board de bote simple donde BB lidera de verdad: apuesta primero el 23.7% (la ventaja de rango sigue siendo de BTN — equity 48.5% contra 51.5%)" },
      // 🔄 M-067 축어 재동기(2026-08-26) — 앱이 `190d293`에서 ⑤ lesson을 **완화형**으로 정정했다
      //    (구형 = «사라진다»형 → 신형 = «ceden el paso» 형). 🔴 **구형 문자열은 주석에도 적지 마라** —
      //    검수장 회귀 앵커가 그 출현 수를 세고 «0 = 정정 반영»으로 읽는다. 화면값에 큰 벳이 3.2% 남아
      //    «사라진다»가 과장이었다(솔버 S-003 ③ · 검수장 S-007 라이브 md5 검증).
      //    이 note는 «앱 축어» 선언 지위라 앱이 바뀌면 같이 바뀐다.
      { board: "Q♠9♠2♠", slug: "monotone-board-strategy", name: "Board monotone", note: "Las apuestas grandes ceden el paso a apuestas pequeñas y checks — fíjate con qué frecuencia incluso un color hecho se limita a pasar" },
      { board: "6♣6♦3♥", slug: "paired-board-strategy", name: "Board pareado", note: "Nadie conecta con este board, así que sube la proporción de faroles — ni siquiera BB apuesta primero (solo el 3%)" },
      // 🔴 M-045 RP-19 정정(2026-08-24) — 「BB가 체크레이즈를 자주 한다」(구 문구)는 화면에 없는 값이다.
      //    KO ⑦ 239줄: 「BB의 체크레이즈 빈도가 그 화면에는 없습니다」. §4-B ⑦ = 체크 96.8 · 벳 3.2뿐.
      { board: "6♠5♥2♦", slug: "low-board-check-raise", name: "Board bajo y rainbow", note: "Guerra de sobrecartas. El spot para diseñar el check-raise — en pantalla, la primera acción del BB es 96.8% check y 3.2% apuesta" },
    ],
  },
  {
    label: "Bote de 3-bet — BB hace 3-bet y BTN paga (SPR bajo)",
    cond: "OOP: BB (3-bet) · IP: BTN (paga) · Bote 22.5bb · Stack 89bb · SPR ≈ 4.0",
    items: [
      // 🔴 M-038 RP-03 정정(2026-08-23) — EN 랜딩에서 옮겨 온 문장이었다. 작은 벳이 통하는 이유를
      //    «SPR이 낮아서»로 돌리면 시리즈 ⑧이 폐기한 인과가 된다: 「SPR이 똑같이 4.0인 ⑨는 98.4%,
      //    ⑩은 97.8%다. 사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양이다」. 되돌리지 마라.
      { board: "A♦K♠2♥", slug: "3bet-pot-cbet", name: "Board A-high, ventaja del 3-bettor", note: "El mejor flop posible para el rango de 3-bet — cargado de AK, AA y KK. Lo que permite que una apuesta pequeña apriete a todo el rango es la forma de ese rango, no el SPR bajo" },
      // 🔴 앱 축어 «Observa dónde el 3-bettor empieza a frenar»는 **거짓**이다 —
      //    §4-B ⑨: 벳 합계 **99.1%**(큰 사이즈 98.4 + 작은 사이즈 0.7), 체크는 **0.8%**다(🔴 100−99.1로 «빼서» 구하면 0.9가 나온다 — 개별 반올림값의 합은 100이 아니다).
      //    EN 랜딩이 이미 «98.4% fires the same two-thirds size»로 철회·정정했다.
      { board: "Q♥T♥7♠", slug: "3bet-pot-bet-sizing", name: "Board dinámico two-tone", note: "Dos proyectos vivos y aun así el 98.4% del rango dispara con el mismo tamaño de dos tercios" },
      // 🔴 M-042 RP-17 정정(2026-08-24) — 종전 문구는 이 보드가 3벳 레인지를 «통째로» 빗나간다고
      //    단정했다. 반례: **거트샷 4.8% · 백도어 플러시 16.9%(14콤보)**.
      //    🔴 **정본은 KO ⑩ `lib/posts/3bet-pot-low-board.ts` 142줄이다** — 초판 주석의 「정본은 ja」는
      //       **틀렸다**(2026-08-24 사장님 지적). ja 는 «정본과 어긋나지 않은 유일한 랜딩»이었을 뿐이다.
      //    🟢 문안은 수치로 갔다 — KO 표 실측 **탑 페어 0%**(8이 들어간 핸드가 3벳 레인지에 없다).
      { board: "8♦5♣2♠", slug: "3bet-pot-low-board", name: "Board bajo y seco", note: "El rango de 3-bet no liga ni un top pair aquí — solo gutshots y proyectos de puerta trasera — y aun así los sobrepares mantienen la presión" },
    ],
  },
  {
    label: "Guerra de ciegas — SB vs BB (rangos amplios)",
    cond: "OOP: SB (abre) · IP: BB (paga) · Bote 6bb · Stack 97bb",
    items: [
      { board: "K♥T♦6♠", slug: "blind-battle-cbet", name: "Board K-T high", note: "Rangos amplios y los dos llegan débiles al flop — compara las frecuencias con el spot K-high de BTN vs BB" },
      { board: "7♦6♦5♣", slug: "blind-battle-connected-board", name: "Bajo conectado, two-tone", note: "Dos rangos amplios chocan en un board ultraconectado: dobles parejas, escaleras y proyectos por todos lados" },
      // 🔴 앱 축어 «los tríos son poco frecuentes — el paraíso del bluff»는 **결론은 옳고 이유가 틀렸다.**
      //    실측: A를 든 트리오는 **SB 88콤보 대 BB 66콤보**이고, 수와 질 모두 앞서는 SB가 §4-B ⑬ 기준
      //    **80.1%**를 친다(벳45(75%) 0.5% + 벳20(33%) 79.6% · 체크 19.8%).
      //    ja 랜딩이 같은 자리를 같은 방식으로 정정했다.
      { board: "A♠A♥6♦", slug: "ace-paired-board-strategy", name: "Board con A pareado", note: "Los tríos con as son 88 combos para SB y 66 para BB — el SB gana en número y en calidad, y apuesta el 80.1%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientEs() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★H1은 세 축을 한 줄에 담는다: `solver poker`(SD 0) + `rangos poker`(480, 이 판 최대) + 훅.
          🔴 `GTO`는 `solver poker`에 붙여 쓴다(과나후아토 회피).
        */}
        <h1 className="text-center text-2xl font-bold">
          Solver poker GTO gratis — calcula tus rangos poker después del flop
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
            첫 문장에 정의 + 구체 수치, 앞 문단 의존 없이 자기완결.
        */}
        <p className="mt-3 text-muted-foreground">
          Un <strong className="text-foreground">solver poker</strong> es el programa que calcula la
          estrategia de equilibrio de una situación concreta: le das los dos rangos, un board y los
          tamaños de apuesta, y te devuelve con qué frecuencia cada mano debe apostar, pasar o foldear.
          Y lo hace para las <strong className="text-foreground">169 manos iniciales</strong>, en una
          cuadrícula de 13×13. El solver de HoldemMaster hace ese cálculo{" "}
          <strong className="text-foreground">dentro de tu navegador — sin descargar nada, sin crear
          una cuenta y sin límite de soluciones</strong>. Junto a la cuadrícula verás la equity, el EV y
          la realización de equity de cada mano. El alcance es postflop heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Abrir el solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Mejor con Chrome en el ordenador — en iOS y Safari el cálculo va con un solo hilo y los
            spots personalizados tardan más
          </p>
        </div>
        <Table head={["", "Detalle"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 (⚠ 「GTO란」 순수 정의는 glossary 소유 → 「solver」로 좁힌다) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">¿Qué es un solver poker y en qué se diferencia de una tabla?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Un solver calcula desde cero la estrategia{" "}
          <strong className="text-foreground">GTO (óptima según la teoría de juegos)</strong>. Le das
          los rangos, el board, el stack y el árbol de tamaños de apuesta, y va iterando hacia el
          equilibrio hasta devolverte la frecuencia de apuesta, check y fold de las 169 manos. La
          diferencia con una tabla está justo ahí: una tabla guarda la respuesta que alguien calculó
          antes, mientras que el solver{" "}
          <strong className="text-foreground">calcula el spot en el que estás tú ahora mismo</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Cambia una sola carta del board y la respuesta cambia con ella, porque el solver no recuerda:
          vuelve a calcular.
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(2026-08-22 실측):
          solver poker 70 · poker solver 50 · gto poker 210 · rangos poker 480.
          억지 나열이 아니라 엔티티를 명확히 하는 자리다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Lo mismo se busca con nombres distintos:{" "}
          <strong className="text-foreground">solver poker</strong>, solver GTO, solver postflop o
          simplemente <strong className="text-foreground">poker GTO</strong>. A la salida se la llama
          a veces rangos GTO. Sea cual sea el nombre, lo que calcula la herramienta de esta página es lo mismo.
        </p>
        <Table
          head={["Lo que quieres hacer", "Dónde mirar"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Si lo que buscas es el significado de GTO en sí, la definición y los malentendidos más
          comunes están en el{" "}
          <Link href="/es/blog/holdem-glossary" className="font-semibold text-primary hover:underline">
            glosario de póker
          </Link>{" "}
          y en la{" "}
          <Link href="/es/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
            guía de estrategia de Texas Hold&apos;em
          </Link>
          .
        </p>
      </section>

      {/*
        ── ★es 고유 절: 「rangos poker」 본진 ──────────────────────────
        이 절이 이 랜딩의 핵심이다. `rangos poker`(ES 480 · MX 170 · SD 0~1)는 이 판 최대 축인데
        **SERP top-10이 전부 프리플랍 표**다(2026-08-22 실측). 포스트플랍 레인지를 다루는
        스페인어 페이지가 없다 → 우리가 그 자리를 정의하러 들어간다.
        🔴 프리플랍 표는 `es/holdem-starting-hands-chart`의 것이다. **가져오지 않고 넘긴다.**
        🔴 수치는 전부 §4-B 확정표에서만 가져왔다(③ 0.1% · ④ 23.7% — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">¿Por qué tus rangos se rompen después del flop?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Porque un rango preflop es estable y un rango postflop no lo es.{" "}
          <strong className="text-foreground">Un rango preflop cabe en una tabla</strong>{" "}
          — abres más o menos lo mismo desde el botón cada vez que te sientas. En cuanto caen tres
          cartas, esos mismos rangos de póker se reparten en manos hechas, proyectos y aire, y lo que debe hacer
          cambia por completo según la textura del board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Dos ejemplos de esta misma página lo enseñan mejor que cualquier explicación. En los dos, BB
          paga la subida del botón y actúa primero en el flop — mismo asiento, mismo rango, mismo bote:
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            En <strong className="text-foreground">Q♠J♦T♠</strong>, BB apuesta primero{" "}
            <span className="font-semibold text-orange-500">el 0.1% de las veces</span>. Prácticamente
            nunca toma la iniciativa.
          </li>
          <li>
            En <strong className="text-foreground">9♥8♥7♣</strong>, BB apuesta primero{" "}
            <span className="font-semibold text-emerald-500">el 23.7% de las veces</span>.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Los dos boards son conectados y two-tone. Parecen primos hermanos y, sin embargo, la respuesta correcta no tiene nada que ver.{" "}
          <strong className="text-foreground">Ninguna tabla preflop puede contener esa diferencia</strong>,
          porque la tabla se escribe antes de ver el flop. Eso es exactamente lo que hace un solver:
          te da el rango de después, no el de antes.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Si todavía estás construyendo la parte de antes, empieza por la{" "}
          <Link href="/es/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            tabla de manos iniciales
          </Link>{" "}
          — ahí tienes los rangos de apertura por posición explicados asiento a asiento. Para leer una mano en el rango del rival, la{" "}
          <Link href="/es/blog/holdem-reading-the-board" className="font-semibold text-primary hover:underline">
            lectura del board
          </Link>{" "}
          es el paso intermedio.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Cómo usar el solver poker en 5 pasos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Si es la primera vez que tocas un solver,{" "}
          <strong className="text-foreground">abre un spot de estudio antes de configurar nada.</strong>{" "}
          Están ya calculados, así que aprendes a leer la salida antes de pelearte con la entrada.
          Cuando quieras montar el tuyo, las pestañas de la barra lateral van en orden de arriba abajo.
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          En el spot personalizado las fichas son números enteros cualesquiera. Si prefieres pensar en
          ciegas grandes, fija <strong className="text-foreground">10 fichas = 1bb</strong> (un bote de
          55 son 5.5bb). Los spots de estudio y el Entrenador ya usan esa escala.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Construir los dos rangos desde cero es el camino largo. Los rangos de apertura por posición viven
          en la{" "}
          <Link href="/es/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            tabla de manos iniciales
          </Link>
          . Los dos rangos de abajo son otra cosa: <strong className="text-foreground">los que usan los spots de bote de subida simple</strong> (BTN vs BB), listos para pegar en ① y ②.
        </p>
        <Table head={["Para pegar en", "Rango"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Cómo se leen los rangos en el póker postflop — la pantalla de resultados</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {/* 🔴 M-046 E-3 소급(2026-08-24) — 열거는 상단1+매트릭스1+우측3=다섯, READ_SCREEN도 5행.
              「cuatro」로 되돌리지 마라. */}
          La pantalla tiene cinco zonas de trabajo: la{" "}
          <strong className="text-foreground">barra de acciones</strong> arriba, la{" "}
          <strong className="text-foreground">matriz 13×13</strong> a la izquierda y, a la derecha, las{" "}
          <strong className="text-foreground">frecuencias, la clasificación de manos y la tabla de
          detalle</strong>. Quédate con esto: a la izquierda lees qué hace cada mano, a la derecha qué
          hace el rango entero.
        </p>
        <Table head={["Dónde", "Qué hay", "Cómo se lee"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Si la realización de equity (EQR) baja del 100%, ahí merece la pena pararse: significa que no
          estás cobrando toda la equity que tienes. Lo que abre esa brecha cambia según el spot —
          la posición, la iniciativa y quién llega con más manos de la parte alta del rango.{" "}
          <strong className="text-foreground">Un solver no te dice cómo jugar, te dice por qué la
          frecuencia es esa</strong>, y el EQR es el número donde ese porqué se ve más claro.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Si estos términos te suenan lejanos, la{" "}
          <Link href="/es/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            guía de equity
          </Link>{" "}
          y la de{" "}
          <Link href="/es/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            apuesta de continuación
          </Link>{" "}
          te dan de antemano el vocabulario que el solver está midiendo.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">¿Es gratis de verdad? — todo lo que incluye</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sí, y sin la letra pequeña habitual: no hay que registrar un método de pago, no hay funciones
          bloqueadas, no hay un número máximo de cálculos al día y no hace falta cuenta. Los ajustes que
          suelen vivir en los solvers de escritorio de pago —{" "}
          <strong className="text-foreground">rake y tope de rake, modos de precisión, edición del árbol
          nodo a nodo</strong> — también están aquí. El único límite real es que esta herramienta es{" "}
          <strong className="text-foreground">solo postflop y heads-up</strong>.
        </p>
        <Table
          head={["Función", "Incluida", "Notas"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">Sí</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">No</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Probarlo gratis →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 (카니발 방지의 본체) ─────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Por qué solo calcula el postflop</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Esto es un <strong className="text-foreground">solver postflop</strong>: arranca en el momento
          en que se abre el flop y calcula desde ahí para los dos jugadores. Dejar fuera el preflop es
          deliberado, porque el preflop es otro tipo de problema — los rangos de apertura son lo
          bastante estables como para caber en una tabla, mientras que el postflop se reescribe con cada
          board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Dentro de ese límite no hay nada recortado: los{" "}
          <strong className="text-foreground">rangos postflop</strong> de ambos jugadores, cualquier
          flop, turn y river, el bote inicial y el stack efectivo, y el árbol completo de tamaños calle
          por calle. La estrategia que sale no es genérica, es la de tu partida — incluido el rake, que
          la mayoría del material de estudio ni menciona.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Si lo que te falta es la parte de antes del flop, la{" "}
          <Link href="/es/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            tabla de manos iniciales
          </Link>{" "}
          reúne los rangos por posición. Con las dos piezas cubres una mano de principio a fin: la tabla
          decide con qué entras, el solver decide qué pasa a partir del flop.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Entrenador GTO — practica y mide cuánto EV dejas</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          El Entrenador GTO viene incluido en la propia herramienta y no pide registro aparte. Convierte
          los spots ya calculados en ejercicios: te reparte una mano en un punto de decisión real, eliges
          una acción y recibes una nota. Si buscabas una forma gratuita de practicar póker y lo que
          quieres entrenar no son las jugadas sino{" "}
          <strong className="text-foreground">las decisiones</strong>, empieza por aquí.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          La nota no es acierto o fallo, sino{" "}
          <strong className="text-foreground">cuánto valor esperado has dejado</strong>. Como el GTO
          mezcla acciones, elegir la opción menos frecuente no es automáticamente un error: la pregunta
          es a cuánto EV has renunciado. Al elegir verás la frecuencia y el EV de cada acción junto al coste
          de la tuya.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱이 2026-08-15에 바꿨고 KO·EN·ja 랜딩의
               옛 절대값(0.01/0.05bb)도 그때 함께 고쳤다. **되돌리지 마라.**
               ⚠ 스페인어 앱 화면은 아직 「pérdida de EV」라고만 쓴다 — 화면 문구를 근거로 삼지 말 것.
          */}
          <li className="text-muted-foreground">
            El umbral se mide <strong className="text-foreground">en proporción al bote</strong> —{" "}
            <span className="font-semibold text-emerald-500">hasta el 0.35%</span> es jugada óptima ·{" "}
            <span className="font-semibold text-blue-500">hasta el 1%</span> es aceptable ·{" "}
            <span className="font-semibold text-orange-500">por encima</span> conviene revisar
          </li>
          <li className="text-muted-foreground">
            Los mismos 0.08bb son un 1.45% en un bote de 5.5bb (a revisar) y un 0.36% en uno de 22.5bb
            (aceptable). Los umbrales caen en 0.02bb y 0.06bb en el bote de subida simple, y en 0.08bb y
            0.23bb en el bote de 3-bet. Hay suelos de 0.02bb y 0.05bb para que las diferencias mínimas
            no se confundan con el propio margen de error del solver
          </li>
          <li className="text-muted-foreground">
            Las preguntas salen de varios puntos de decisión de cada spot, así que las combinaciones{" "}
            <strong className="text-foreground">pasan de diez mil</strong> (explotabilidad objetivo del
            0.5%). También puedes entrenar un solo tipo: bote de subida simple, bote de 3-bet o guerra
            de ciegas
          </li>
          <li className="text-muted-foreground">
            Las manos se reparten{" "}
            <strong className="text-foreground">en proporción al peso real del rango GTO</strong> — te
            llegan con la frecuencia con la que de verdad las tendrías en ese spot
          </li>
          <li className="text-muted-foreground">
            La racha de aciertos, el desglose de puntos débiles y la{" "}
            <strong className="text-foreground">cola de repaso</strong> con los ejercicios donde más EV
            has perdido se construyen con ese historial. Si no inicias sesión, se queda en tu dispositivo
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Abrir el Entrenador GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 (앱 라벨 축어 + §4-B 정정 2건) ─────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} spots de estudio ya resueltos
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Todos los spots de abajo ya están calculados, así que la estrategia aparece en cuanto los abres —
          sin esperas y sin configurar nada. Los rangos son aproximaciones del estándar online de 100bb,
          de modo que la mejor forma de usarlos es cargar uno, cambiarle los rangos, volver a calcular y
          mirar qué se movió. No hay atajo más rápido para entender cómo la textura del board reescribe
          la estrategia.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/es/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색은 스페인어권에도 크다 — gto wizard ES 2,900 · piosolver 140 ·
           PAA에 `¿Cuánto cuesta GTO Wizard?`. 직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
        🔴 optimuspoker 의 「1 Solution / Day」는 **라이브에서 직접 읽은 축어**지만, 그 서비스명을
           지목해 적지는 않는다 — «구조»만 적는다(다른 경쟁자에게도 같은 규율을 적용해 왔다).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">En qué se diferencia de GTO Wizard o PioSOLVER</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A todos se les llama solver, pero lo que cambia es{" "}
          <strong className="text-foreground">dónde y cuándo se hace el cálculo</strong>. Las
          bibliotecas de soluciones como GTO Wizard se consultan: muestran soluciones calculadas de
          antemano, van muy rápido y suelen incluir preflop. Los solvers de escritorio como PioSOLVER se
          instalan y calculan en tu propia máquina, principalmente en Windows. Esta herramienta{" "}
          <strong className="text-foreground">calcula en el navegador en el momento</strong>, así que
          puedes reescribir rangos y árbol a voluntad y no hay nada que instalar.
        </p>
        <Table
          head={["", "Solver de HoldemMaster", "Biblioteca de soluciones", "Solver de escritorio"]}
          rows={COMPARE}
        />
        {/*
          🔴 여기서 «남의 무료 티어 수치»를 적지 않는다. 대신 SERP 실측으로 확인된 **구조**를 적는다:
             top-10의 무료 접근이 전부 «구독 / 하루 몇 개 / 크레딧 / 다운로드» 중 하나로 제한된다.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          Si buscas «solver poker gratis» en español, verás que casi todo lo gratuito viene con una
          condición: una suscripción con parte del catálogo abierta, un número de soluciones al día, un
          sistema de créditos que se consume al abrir una línea, o una descarga. Lo que aquí no existe
          es esa condición — <strong className="text-foreground">ni registro, ni cupo diario, ni
          créditos</strong>. Es la diferencia que hace que merezca la pena tener esta página abierta al
          lado mientras repasas manos.
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지**와 GitHub 저장소 제목
             "[Development suspended]"다. 추측이 아니라 원본이 스스로 적어 둔 문장이다.
             그리고 우리 앱의 AGPL 고지 축어(«de Wataru Inariba, AGPL-3.0»)와 일치한다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Una nota para quien haya llegado buscando{" "}
          <strong className="text-foreground">WASM Postflop</strong>: el proyecto original de código
          abierto anunció en su propia web que dejaba de actualizarse, y su repositorio figura como
          desarrollo suspendido. Este solver es un fork que mantiene ese motor: misma licencia
          AGPL-3.0, código igualmente publicado y, encima, una interfaz nueva, los spots de estudio
          y el Entrenador.
        </p>
      </section>

      {/* ── ★모바일·오프라인 (PWA) ──────────────────────────────────── */}
      {/*
        ★2026-08-22 H2 신설 — es 고유. 근거: 앱이 이미 PWA이고(`Agregar a inicio`·`Estudio offline`),
        SERP 실측에서 **`play.google.com` 2위 · `apps.apple.com` 8위** — 스토어 등재물이 이 검색결과에서
        실제로 순위를 먹는다. 흡수 키워드: `poker solver app` · `gto poker app`(ES 10 · MX 10 · US 20) ·
        `app para practicar poker` · `poker solver apps`.
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록을 준비 중이라 출시되는 순간 거짓이 된다.
           「설치가 «필요 없고», 원하면 담을 수도 있다」로 쓴다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람과 트레이너뿐이다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">¿Se puede usar en el móvil y sin conexión?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sí a las dos cosas. No necesitas instalar nada para empezar — se abre en el navegador del
          móvil igual que en el ordenador — pero{" "}
          <strong className="text-foreground">si quieres, puedes añadirlo a la pantalla de inicio</strong>{" "}
          y se comporta como una app: icono propio, pantalla completa y sin barra de direcciones. Es un
          acceso directo del navegador, no un programa, así que nunca pide permisos del sistema.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Una vez añadido, los spots de estudio y el Entrenador GTO quedan guardados en el dispositivo y{" "}
          <strong className="text-foreground">puedes seguir practicando sin internet</strong> — en el
          metro, en un avión o con datos justos. El matiz importante: resolver un spot personalizado
          desde cero necesita que el motor de cálculo se haya descargado al menos una vez.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          En iPhone y Safari el cálculo va con un solo hilo por limitaciones del propio navegador, así
          que los spots grandes tardan más; para esos, un ordenador es más cómodo. Añadirlo se hace
          desde el icono de instalar de la barra de direcciones en Chrome y Edge, y desde «Añadir a
          pantalla de inicio» en el menú de compartir de iPhone.
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 (⚠ es엔 도구 페이지가 없다 — 전부 블로그) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Para seguir leyendo</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/es/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              Tabla de manos iniciales
            </Link>{" "}
            — esta herramienta es solo postflop. <strong>Con qué manos entrar</strong> desde cada
            posición está en ese artículo; los rangos que se pegan en ① y ② vienen de los spots de estudio
          </li>
          <li>
            <Link href="/es/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              Pot odds
            </Link>{" "}
            — cuando solo quieres el número y no hace falta abrir un solver: outs y equity necesaria
          </li>
          <li>
            <Link href="/es/blog/holdem-equity" className="font-semibold text-primary hover:underline">
              Equity en el póker
            </Link>{" "}
            — casi toda la salida del solver deriva de la equity. Leer esto antes hace legible la
            pantalla de resultados
          </li>
          <li>
            <Link href="/es/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
              Juego posicional
            </Link>{" "}
            — el EQR se mueve mucho con la posición. Aquí está lo que el solver está cuantificando
          </li>
          <li>
            <Link href="/es/blog/holdem-3bet" className="font-semibold text-primary hover:underline">
              Guía del 3-bet
            </Link>{" "}
            — tres de los spots de estudio son botes de 3-bet. Este artículo explica cómo se llega hasta
            ese flop
          </li>
          <li>
            <Link href="/es/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Guía de estrategia de Texas Hold&apos;em
            </Link>{" "}
            — el mapa completo de los conceptos que el solver pone en números, incluida la definición
            de GTO
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_ES.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Abrir el solver poker gratis →" />
        {/*
          🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
             오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이다.
        */}
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면의 축어와 같은 사실이다. **훅으로 키우지 않는다**(2026-08-22 판정:
           앱스토어 등록 준비 중이라 오픈소스를 마케팅 축으로 세우지 않는다).
         🔴 **«여기 한 줄뿐»이 아니다** — 렌더되는 자리가 셋이다: SPEC 표 `Motor` 행 · WASM Postflop 문단 ·
            이 꼬리 고지. **제목·H1·H2에 없다는 것이 지켜진 것**이고, 뱅크 §4-훅5가 지정한 «FAQ 한 문항»은
            아직 비어 있다. 배치는 ja 선례와 같으니 옮기려면 판정을 먼저 다시 받을 것.
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        Esta aplicación está basada en WASM Postflop, de Wataru Inariba (AGPL-3.0), localizada y
        mejorada por HoldemMaster. El código fuente modificado completo está publicado bajo la misma
        licencia.
      </p>
    </div>
  );
}
