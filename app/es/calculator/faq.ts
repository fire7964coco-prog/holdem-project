// `/es/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 calculator-tool.tsx(화면)가 같은 배열을 쓴다.
// ★2026-09-17 신설(8) → ★2026-09-17 (es 회차) 8 → 18: EN 17문항(app/en/calculator/faq.ts · 계산기형만 · 정의형 제외)의 «명제»를 옮기고,
//   es 고유 1문항을 더했다(check:calc-parity C = EN 17 + 고유 1) —
//   ① «¿Se puede usar una calculadora de poker en la mesa?» = 경쟁 SERP 축(PokerNews ES «¿Se Permite el Uso de Calculadoras de Odds en Póker?» ·
//      888poker.es «¿Se puede usar una calculadora de poker mientras se juega online?» · 뱅크 §4). 답은 **규정 사실만**(TDA 2024 Rule 5-C·5-D ·
//      1차 출처 docs/sources/tda-2024-rules-v1.txt L40~53) — 온라인 사이트 약관·합법성은 다루지 않는다(EN 뱅크 §3 · es 컨셉 = 플레이어).
//      🔴 TDA 2022판 Rule 5는 «live hand 중»만 금지했지만 2024판 5-D는 «at the table» 전체다 — 2022 문구로 되돌리지 마라(zh-hant 회차 교훈).
//   ✖ 후보였던 «¿Esta calculadora sirve para Omaha?»(자동완성 5지역 + PAS 2쿼리)는 뺐다 — «못 한다»는 답은 그 수요를 채우지 못한다.
//      Omaha 계산기 미구현 수요로 뱅크 §7에 기록.
//   정의형(«¿Qué es el ICM en el póker?» 등)은 `holdem-icm`·`holdem-pot-odds`·`holdem-equity`가 소유 — 넣지 않는다
//   (옛 8문항의 «¿Qué es el ICM en el póker?»는 이 이유로 뺐다 · holdem-icm FAQ 1과 축어 동일이었다).
// 질문 표기 = 자동완성 실측(«como saber que mano gana en el poker» · «pot odds formula» · «calculadora de ICM»(코퍼스 앵커)) +
//   경쟁 FAQ 형태(«¿Cómo funciona una calculadora de…?»). SEO 렌즈(09-17): chip EV·chip chop·burbuja 3문항은 holdem-icm·holdem-bubble FAQ/H2와
//   겹쳐 계산기·결과형 질문으로 틀었다.
//   🔴 질문 뒤에 명사 키워드를 «덧붙이지» 마라 · 한 q에 질문 두 개 금지(zh 09-17 두 렌즈) · 형제 글 FAQ와 축어 동일 금지
//   (holdem-pot-odds «¿Qué es la regla del 2 y 4?»·«¿Qué son los pot odds y cómo se calculan?» / holdem-icm «¿Cómo se calcula el ICM?» — 그래서 FAQ 4·6·10을 계산기형으로 틀었다).
//   인용부호는 « »만(check:calc-parity E).
// §13: 모든 수치 = scripts/calc-reference-tables.ts(EN과 동일). AA vs KK 81.9% = 전 수트 평균(81.95) · AK vs 포켓페어 밴드 = settled-decisions §3-F ·
//   19.1% = 9/47(flop → turn) · 19.6% = 9/46(turn → river). 페이지 순서 = 도구 → ICM 예시 → 가이드 카드 → 표 → FAQ이므로 «arriba»가 맞다.
// 용어: acuerdo por ICM · chip chop · burbuja · mesa final · en premios · foldear · líder en fichas = holdem-icm.ts · regla del 2 y 4 = holdem-outs.ts · limpear = starting-hands-chart.
export const CALCULATOR_FAQ_ES: { q: string; a: string }[] = [
  {
    q: "¿Cómo funciona una calculadora de probabilidades de poker?",
    a: "Reparte todas las cartas que faltan por salir y cuenta cuántas veces gana cada mano. Si todas las manos son conocidas, esta calculadora enumera de forma exacta cada combinación posible en el flop y en el turn (990 en el flop mano a mano, 44 en el turn; menos con más jugadores, y en el river el board ya está completo). Preflop hay 1.7 millones de boards por enfrentamiento, y un rival con mano aleatoria los vuelve a multiplicar, así que en esos casos corre 60,000 simulaciones aleatorias y lo indica debajo del resultado — la cifra se mueve unos 0.3 puntos de una corrida a otra.",
  },
  {
    q: "¿Qué probabilidad tiene AA contra KK?",
    a: "Los ases les ganan a los reyes preflop alrededor del 82% de las veces (81.9% promediando todas las combinaciones de palos, con un 0.5% de empate). AA contra AK del mismo palo queda más o menos 88% a 12%, y KK contra AK del mismo palo, 66% a 34%.",
  },
  {
    q: "¿AK contra un par servido es un coin flip?",
    a: "Casi, contra cualquier par por debajo de ases y reyes, aunque nunca es un 50/50 exacto. AK de distinto palo tiene alrededor de 46–47% de equity contra 22–44, cerca de 45% contra 55–99 y cerca de 43% contra TT–QQ; del mismo palo suma unos 2.5–3 puntos. Contra KK cae a cerca de 30% y contra AA a cerca de 7%, así que la etiqueta solo sirve para los pares que quedan por debajo del as y del rey.",
  },
  {
    q: "¿Qué tan exacta es la regla del 2 y 4?",
    a: "Es un atajo mental para las odds de un proyecto: con dos cartas por salir (flop → river) multiplica tus outs × 4; con una carta por salir (turn → river), × 2. Con 9 outs da 36% y 18%; las cifras exactas están en la siguiente respuesta. La parte del × 4 se queda a un punto o menos hasta 9 outs y a partir de ahí se pasa más o menos un punto por cada out (15 outs son en realidad 54.1%, no 60%); la del × 2 se queda corta, y más cuantos más outs tengas (1.6 puntos con 9 outs, 2.6 con 15). Y el × 4 solo vale cuando vas a ver las dos cartas sin volver a pagar.",
  },
  {
    q: "¿Qué probabilidad hay de que entre un proyecto de color?",
    a: "Con 9 outs, un proyecto de color se completa el 35.0% de las veces del flop al river (dos cartas por salir), el 19.1% en la siguiente carta desde el flop y el 19.6% del turn al river.",
  },
  {
    q: "¿Qué fórmula usa la calculadora de pot odds?",
    a: "Call ÷ (bote después de la apuesta + call) = la equity mínima que necesitas. Por ejemplo, pagar 3,000 cuando el bote ya tiene 10,000 contando la apuesta es 3,000 ÷ 13,000 ≈ 23.1%, así que el call es rentable cuando tu equity pasa del 23.1%. Una apuesta del tamaño del bote siempre exige 33.3%; una de medio bote, 25%.",
  },
  {
    q: "¿Qué pot odds necesito para pagar con proyecto de color?",
    a: "Si enfrentas una sola apuesta en el flop, cuenta solo la siguiente carta: 9 outs entran el 19.1% de las veces, así que necesitas pot odds mejores que unos 4.2 a 1 — o unas odds implícitas que cubran la diferencia, lo que exige que tu rival tenga fichas detrás y una mano que vaya a pagar. Descuéntalas mucho cuando no vas al nuts: un segundo mejor color que cobra pierde mucho más de lo que gana. Si tienes garantizado ver las dos cartas (un all-in), vale la cifra de dos cartas, 35.0%.",
  },
  {
    q: "¿Cómo se usa la calculadora de odds implícitas?",
    a: "Abre la pestaña «Pot odds», activa «Odds implícitas» y escribe lo que esperas ganar de más en las calles siguientes si ligas. La calculadora lo suma al bote y baja la equity que tu call necesita ahora. Sé honesto con esa cantidad: solo cuenta si tu rival tiene esas fichas detrás y de verdad va a pagar cuando entre tu proyecto.",
  },
  {
    q: "¿Cómo compruebo qué mano gana en el póker?",
    a: "En la pestaña «Equity», mete las cartas de mano de cada jugador y las cinco cartas del board: con el board completo te dice quién gana y con qué jugada, o si el bote se divide. Para calificar una sola mano, pon de 5 a 7 cartas en la pestaña «Jerarquía» y la calculadora encuentra sola la mejor combinación de cinco.",
  },
  {
    q: "¿Cómo se usa la calculadora de ICM?",
    a: "Escribe el número de jugadores, el stack de cada uno y la estructura de premios (del 1.º al 6.º). La calculadora te muestra al instante cuánto vale de verdad cada stack en dinero de premios, junto a lo que pagaría un chip chop. Para decidir call o fold, úsala dos veces — una con los stacks que tendrías si ganas la mano y otra con los que tendrías si te eliminan — y compara el promedio, ponderado por tu probabilidad de ganar la mano, con tu valor si simplemente foldeas.",
  },
  {
    q: "¿Qué significa el «valor ICM» de esta calculadora?",
    a: "Tu valor real en dinero de premios: la parte de la bolsa que queda que se espera que cobre tu stack, según la probabilidad de cada jugador de terminar en cada puesto. No es tu porcentaje de fichas: cuando se paga más de un puesto, doblar tus fichas nunca dobla tu valor ICM, y por eso el valor ICM del líder en fichas queda por debajo de su porcentaje de fichas.",
  },
  {
    q: "¿Cuándo conviene usar la calculadora de ICM?",
    a: "Siempre que los premios dependan del puesto final y el dinero esté cerca: en la burbuja, en la mesa final, cuando alguien propone un acuerdo y en los satélites donde todos los premios valen lo mismo (un asiento cada uno). No sirve para los cash games, donde una ficha siempre vale lo que dice.",
  },
  {
    q: "¿Por qué un call rentable en fichas puede perder dinero en premios?",
    a: "Porque el chip EV cuenta fichas y el ICM cuenta dinero de premios — no son lo mismo. Ganar la mano te suma fichas, pero bustear te quita todos los premios a los que todavía podías llegar, así que el call puede ganar en fichas y perder equity en premios. Cerca de la burbuja y en las mesas finales es donde más se separan, y por eso los rangos por ICM son más cerrados que los de chip EV.",
  },
  {
    q: "¿Por qué el líder en fichas tiene un valor ICM menor que su porcentaje de fichas?",
    a: "Porque ganar sigue pagando solo el premio del 1.º, no toda la bolsa, mientras que bustear le quita todos los premios por debajo. En el ejemplo de burbuja de arriba, el líder tiene el 40% de las fichas pero solo el 33.3% del dinero de premios, y el stack más corto vale más que su porcentaje de fichas.",
  },
  {
    q: "¿Cómo se calcula un acuerdo por ICM en la mesa final?",
    a: "Mete los stacks actuales y los premios que faltan; el «valor ICM» de cada jugador es la cantidad base del acuerdo. En la práctica la mesa suele dejar una cantidad pactada — muchas veces la diferencia entre el 1.º y el 2.º — para seguir jugándola, y el floor para el reloj y confirma que todos los jugadores que quedan están de acuerdo antes de pagar nada.",
  },
  {
    q: "¿Cuánto cambia el reparto entre un chip chop y un acuerdo por ICM?",
    a: "El chip chop reparte según el porcentaje de fichas; el acuerdo por ICM, según la probabilidad de cada jugador de terminar en cada puesto — el ejemplo de arriba muestra la diferencia ($276 contra $458 para el stack más corto). Lo que cada sala llama chip chop varía: muchas hacen un «save and chop» que queda cerca del ICM, así que pregunta antes de aceptar cualquiera de los dos.",
  },
  {
    q: "¿Por qué el ICM te hace foldear más en la burbuja?",
    a: "En la burbuja, el dinero de premios que pierdes al bustear es mayor que el que ganas al llevarte el bote, como muestra el ejemplo de burbuja de arriba, así que un call rentable en fichas puede ser perdedor en EV de premios. Los stacks medios — y los cortos que no están a punto de quedarse sin fichas por las ciegas — deberían evitar los coin flips pagando. La otra cara: todos los demás también están foldeando, así que como agresor abre y resube all-in con un rango más amplio, aunque pagues con uno más cerrado.",
  },
  {
    q: "¿Se puede usar una calculadora de poker en la mesa?",
    a: "No en los torneos que siguen las reglas de la TDA. La versión 2024 de las reglas de la Poker Tournament Directors Association (regla 5) dice que las apps para calcular apuestas, las tablas y otras herramientas de estrategia de póker no se pueden usar en la mesa, ni se pueden recibir o usar datos de estrategia de otra persona o fuente, y que un jugador con la mano viva no puede usar ni manejar un dispositivo electrónico o de comunicación; los dispositivos y las herramientas quedan sujetos además a las reglas de la sala y a la regulación de juego. Así que esta calculadora es para prepararte antes, repasar las manos después y estudiar — en la mesa te toca la regla del 2 y 4 de cabeza y las tablas de arriba aprendidas.",
  },
];
