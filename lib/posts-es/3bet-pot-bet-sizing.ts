import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑨ 스페인어판 — Q♥T♥7♠ 3벳팟 (BB 3벳터 vs BTN 콜러)
 *
 * ★★ «번역 + 5필드» (스펙 §4-A-3 · 브리프 docs/es-gto-series-translation-brief.md).
 *    소스 EN = lib/posts-en/3bet-pot-bet-sizing.ts · 커밋 bbf325d1 · EN updated 2026-09-02
 *    → masterUpdated = 2026-09-02. 구조·수치·논거·고지 문장은 EN 1:1, 스페인어만 바꾼다.
 *
 * ▶ 조준 키워드 (팩 docs/keyword-bank/es-gto-series.md §3 ⑨행)
 *    bet sizing poker 10 · sizing poker 10 · overbet poker 10 · 3bet pot 10 · 훅 = 98.4% 한 사이즈.
 *    seoTitle 앞머리에 solver·GTO 단독 금지(랜딩 카니발) · «c-bet» 단독 금지(cbet 글 소유).
 *
 * ▶ 표기 규약 — 산문 카드는 10♠, 레인지 표기(T9s·TT·A5s)와 앱 헤더는 축어.
 *    수치는 EN 포맷 그대로(소수점 . · 천단위 , · 반각 % · bb). 앱 UI는 브리프 §1-B 축어만.
 *    3벳팟 칩은 «Bet 14.9bb (66% del bote)» / «Bet 7.4bb (33% del bote)».
 *
 * ▶ 폐기 명제 — 브리프 §4의 문자열 앵커 전건 0으로 확인했다(콜러 편들기·급락 서술·
 *    SPR로 사이즈 설명하기·EQR을 우위 크기로 읽기). 앵커 원문은 브리프에서 보라.
 *
 * 🔴 편 수 하드코딩 금지 — 숫자로 세지 말고 «esta serie»·«toda la serie»로 쓴다.
 */
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Dos tamaños en el árbol, uno solo sobre la mesa",
  seoTitle: "98.4% con un solo tamaño — bet sizing en bote de 3-bet",
  desc: "El solver tenía dos tamaños en este flop two-tone y metió el 98.4% del rango en uno solo. Dos tercios del bote es el precio que rompe 38 de 40 proyectos.",
  tldr: "En Q♥10♥7♠, en un bote de 3-bet, la ciega grande apuesta dos tercios del bote (14.9bb) el 98.4% de las veces. El tamaño pequeño se lleva 0.7% y el check 0.8% — juntos, apenas un combo de 73. Un board antes, en A♦K♠2♥, ese mismo rango repartía su tamaño 57.8/42.2. Lo que rompió el reparto no es la fuerza sino el precio: en un board así de dinámico el tamaño lo decide cuánto le cuesta al que paga seguir buscando carta, y la apuesta pequeña no cobra lo suficiente.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-es.webp",
  imageAlt: "El solver GTO de HoldemMaster sobre un bote de 3-bet en Q-10-7 two-tone: la matriz de la ciega grande casi entera de un color y el tamaño de dos tercios marcando 98.4%",
  tags: [
    "bet sizing poker",
    "overbet poker",
    "sizing poker",
    "3bet pot",
    "geometric bet sizing",
    "poker gto",
  ],
  content: `
Un board antes, la ciega grande (BB) apostó todo su rango en [A♦K♠2♥](/es/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-es.webp") y repartió el tamaño casi por la mitad — 57.8% pequeño, 42.2% grande.

Este flop es Q♥ 10♥ 7♠. Dos corazones y, entre la reina y el diez, solo falta la jota. **Muchos más proyectos, y el reparto desaparece:** dos tercios del bote se llevan ==98.4%== y el tamaño pequeño se queda con 0.7%.

"Apuesta grande cuando el board viene con proyectos" es un consejo que todos hemos oído. Lo que nadie cuenta es hasta qué punto se vuelve extremo. Todos los números de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster.


:::stripe
Spot | La BB hace 3-bet → el BTN paga (mano a mano)
Flop | Q♥ 10♥ 7♠ (two-tone, conectado)
Bote · stack | Bote 22.5bb · stack efectivo 89bb · SPR 4.0
Resultado | Dos tercios del bote 98.4% — el reparto se acaba
:::

> **Respuesta rápida**
> La ciega grande apuesta **14.9bb, dos tercios del bote, el 98.4% de las veces**. El tamaño pequeño con 0.7% y el check con 0.8% son cero en la práctica, no una estrategia que puedas ejecutar. La razón es el precio. Un tercio del bote le pide al que paga alrededor de ==19.8%== de equity, y los cuatro combos con proyecto de color del botón lo superan sin esfuerzo. Dos tercios piden cerca de ==28.5%==, y de los **40 combos con proyecto del botón solo dos siguen llegando** — los proyectos combinados de doce outs que pasaban de sobra el tamaño pequeño ya no llegan. En A-K-2 el tamaño sí se repartió porque los 63 combos eran pareja o mejor — un rango sin la parte baja, y sin proyectos a los que cobrar.

## ¿En qué condiciones salieron estos números?

**El mismo bote de 3-bet que en el board anterior — solo cambió el flop.** La ciega grande subió a 11bb, el botón (BTN) pagó, y los dos ven Q♥10♥7♠ con 22.5bb en el centro y 89bb detrás. Esas dos cifras son toda la diferencia entre los botes de subida simple (single raised pot) de esta serie y sus botes de 3-bet.

| Ajuste | Valor |
|---|---|
| Preflop | El BTN abre → **la BB hace 3-bet a 11bb** → el BTN paga |
| OOP · IP | OOP = BB (3-bettor) · IP = BTN (caller) |
| Flop | Q♥ 10♥ 7♠ — dos corazones, así que **two-tone** |
| Bote · stack | Bote 22.5bb · stack efectivo 89bb (**SPR 4.0**) |
| Tamaños disponibles | Un tercio (7.4bb) y dos tercios (14.9bb) del bote, aproximadamente |
| Rake | No modelado |
| Comprobado | 2026-08-20 |

El bote de 22.5bb es ==11 del 3-bet + 11 del call + 0.5 de ciega pequeña muerta==, y el stack efectivo es ==100 − 11 = 89bb==. El solver informa siempre en ciegas grandes, y cada apuesta se muestra con el importe y la fracción del bote juntos.

## ¿De verdad el rango usa los dos tamaños?

**En la práctica, no — usa uno solo.** 71.9 de los 73 combos toman el tamaño de dos tercios, mientras que la apuesta pequeña y el check se reparten 1.1 combos entre las dos. Los dos tamaños estaban abiertos en el árbol y el solver descartó uno, así que esto es una elección y no una restricción.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Bet 14.9bb (66% del bote) | **98.4%** | 71.9 |
| Check | 0.8% | 0.6 |
| Bet 7.4bb (33% del bote) | 0.7% | 0.5 |

Esos recuentos de combos no son números enteros porque están **ponderados por frecuencia**, no asignados: unas pocas manos mezclan una porción mínima de check y de apuesta pequeña dentro de una apuesta grande que por lo demás es pura. Por debajo del uno por ciento no puedes separar una estrategia real del ruido de convergencia del solver, así que léelos como cero y no como instrucciones. (Lo único que sí es redondeo son los 0.1 puntos que le faltan al total de acciones.)

Pon los dos botes de 3-bet uno al lado del otro y parecen juegos distintos.

Las dos filas son botes de 3-bet con SPR 4.0 y el mismo rango de 3-bet de 14 manos.

| Flop | Un tercio | Dos tercios | Check |
|---|---|---|---|
| A♦K♠2♥ seco, rainbow | **57.8%** | 42.2% | 0.0% |
| **Q♥10♥7♠ two-tone, conectado** | 0.7% | **98.4%** | 0.8% |

## ¿Por qué un board con proyectos pide un solo tamaño grande?

**Porque el bet sizing lo decide lo que tu rival puede permitirse pagar, no la fuerza de tu propia mano.** Cuenta los proyectos que puede tener el botón, ponle precio a cada uno frente a los dos tamaños del árbol y la elección se decide sola. En un board seco esa cuenta es casi cero, y por eso allí sobrevive el tamaño pequeño.

| Proyecto | BB (3-bettor) | BTN (caller) |
|---|---|---|
| Proyecto combinado | 2.7% | 3.0% |
| Proyecto de color | 2.7% | — |
| Proyecto a dos puntas | — | **4.5%** |
| Gutshot | **24.7%** | 22.6% |
| Proyecto backdoor de color | 26.0% | 27.1% |
| Sin proyecto | 43.8% | 42.9% |

**Contando solo los proyectos reales, los dos lados quedan en 30.1%** — la ciega grande con 2.7% combinado, 2.7% de color y 24.7% de gutshot; el botón con 3.0% combinado, 4.5% a dos puntas y 22.6% de gutshot.

🪶 Los proyectos backdoor de color quedan fuera a propósito. Hacen falta dos corazones seguidos, y eso cae solo ==(10 ÷ 47) × (9 ÷ 46) = cerca del 4.2%== de las veces — no es algo que un tamaño de apuesta pueda cobrar. Y la tabla de proyectos es un **eje distinto del de manos hechas**: un sobrepar (overpair) con un corazón también cae en la fila de backdoor. En el [flop seco con K-high](/es/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-es.webp") esa misma fila marcaba 72.2% de "sin proyecto" para la ciega grande y 77.7% para el botón. Otro planeta.

Apuesta un tercio del bote, 7.4bb, y el que paga necesita ==7.4 ÷ (22.5 + 7.4 + 7.4) = cerca del 19.8%== para continuar. Esto es lo que compra ese precio, medido carta a carta.

| Proyecto que puede tener el botón | Combos | Outs | Siguiente carta | vs 1/3 (19.8%) | vs 2/3 (28.5%) |
|---|---|---|---|---|---|
| Color más dos puntas — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31.9%== | ✅ | ✅ |
| Color más gutshot — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25.5%== | ✅ | ❌ |
| Escalera a dos puntas — K-J y 9-8 en los otros palos | 6 | 8 | ==8 ÷ 47 = 17.0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8.5%== | ❌ | ❌ |

**De los 40 combos con proyecto del botón, el tamaño de dos tercios deja fuera de precio a 38.** K♥J♥ y 9♥8♥ juntan proyecto de color y dos puntas, y quince outs superan **cualquier tamaño de este árbol con odds inmediatas** — pero eso son ==2 de 40==, y ⚠ **los outs no están limpios.** La ciega grande tiene exactamente cuatro combos con dos corazones — A♥K♥, A♥J♥, A♥5♥, A♥4♥ — y **todos ellos llevan el A♥** (la reina de corazones está en el board, así que A♥Q♥ y K♥Q♥ no pueden existir). Los proyectos de color con K-high y 9-high del botón persiguen nueve corazones contra un rango cuyos colores son **todos nuts**, y con un SPR de 4 un corazón en el turn es una decisión de stack — reverse implied odds en su versión más afilada. Baja a un tercio del bote y el número de combos que pasan el listón se duplica a **cuatro**, mientras que los 30 gutshots de atrás ven el turn mucho más barato. (Las manos hechas son otra cuestión: continúan por valor, no por precio.)

⚠ **La columna de arriba le pone precio a una carta. Un proyecto que necesita las dos es otra pregunta — y paga dos veces.** Ver las dos cartas en lugar de una lleva el proyecto de quince outs a ==cerca del 54.1%== y el de doce outs a ==cerca del 45.0%==; el proyecto a dos puntas de ocho outs llega al ==31.5%== e incluso un gutshot alcanza el ==16.5%==. El que paga además tiene posición, 74.1bb de stack detrás y la opción de subir. **El tamaño grande le pone precio a todo eso.**

Un paso más, eso sí: **el que paga tampoco puede foldear todo.** Frente a 14.9bb en un bote de 22.5bb, quitarle el beneficio a un farol puro exige defender ==22.5 ÷ (22.5 + 14.9) = 60.2%== del rango — la frecuencia mínima de defensa (MDF). Las manos realmente hechas del botón suman solo **33.9%** (6.8 de trío, 20.3 de top pair, 6.8 de segunda pareja).

🪶 Aun así, llenar ese 60.2% no necesita los proyectos para nada — **33.9% de manos hechas más 36.1% de underpairs ya son 70.0%.** Aunque foldearan los 38 combos con proyecto que quedaron fuera de precio, sigue quedando el 71.4% del rango, de sobra. Lo que hace de verdad el tamaño grande, entonces, es menos "espantar los proyectos" y más **hacer que la parte media del rango del botón pague caro por quedarse** — esos underpairs meten fichas rodeados de dos sobrecartas y de todos los proyectos del board.

:::note[⚠ La MDF trata la apuesta como un farol puro sin equity propia. La mayor parte de lo que apuesta aquí no lo es — el 24.7% del rango de la ciega grande es un gutshot, y un gutshot que se rinde tenía equity real cuando disparó. Toma el 60.2% como una manera de pensar la defensa, no como una cuota que llenar.]:::

🪶 No lo resumas en "un proyecto de color paga igual". Un proyecto de color pelado son nueve outs, ==9 ÷ 47 = 19.1%==, que ni siquiera supera el 19.8% del tamaño pequeño — y **este rango del botón tiene cero proyectos de color pelados** (el guion de la tabla comparativa). Tiene exactamente cuatro manos con dos corazones, y todas llevan además un proyecto de escalera — dos un gutshot, dos a dos puntas — y por eso las cuatro caen en la fila de proyecto combinado. Que un proyecto de color pelado llegue a ==cerca del 35.0%== para el river es cierto, y aquí no viene al caso.

Para una mirada más amplia a cómo contar outs y ponerle precio a los proyectos, mira [probabilidad de proyecto](/es/blog/holdem-drawing-odds) y [pot odds](/es/blog/holdem-pot-odds).

:::pull[Tu mano no elige el tamaño. Lo elige lo que tu rival puede permitirse pagar.]:::

:::note[⚠ Misma textura, conclusión opuesta — y las dos son correctas, porque los asientos están cambiados. En un **bote de subida simple** la parte alta de un flop broadway two-tone pertenece al que subió preflop, y la ciega grande, que solo pagó, hace check casi siempre — en [Q♠J♦10♠](/es/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-es.webp") hace check el 99.9%. Consejos habituales como "apuesta grande en boards con proyectos y polariza", en [la guía de c-bet](/es/blog/holdem-continuation-bet), están escritos para el asiento del que sube, no para el del que paga. **El 3-bet es lo que los intercambia.** Aquí la ciega grande es la que tiene el rango que conecta, así que es la que apuesta — con todo. La textura por sí sola nunca decide esto; lee primero la acción preflop.]:::

## ¿Qué es el geometric bet sizing?

**El geometric bet sizing consiste en elegir una fracción del bote y repetirla en cada calle para que la última apuesta caiga exactamente en all-in.** Con un bote de 22.5bb y 89bb detrás, el bote final tras tres apuestas y tres calls tiene que ser ==22.5 + 2 × 89 = 200.5bb==, así que el bote debe crecer ==200.5 ÷ 22.5 = 8.91 veces== en tres calles. Eso sale **cerca del 54% del bote, tres veces.**

El tamaño que el solver ofrece aquí es mayor que ese, y aun así cuadra:

- Flop **14.9bb** → pagado, el bote es 52.3bb y quedan 74.1bb detrás
- Turn **34.5bb** → pagado, quedan 39.6bb detrás
- River **39.6bb** all-in

**==14.9 + 34.5 + 39.6 = 89.0==.** Tres apuestas y el stack se acabó. La última son 39.6 en un bote de 121.3 — solo ==cerca del 33%== — así que esto no son "tres apuestas grandes"; son dos grandes y lo que quede.

**Y muchas menos manos pueden planear esa línea que disparar la primera apuesta.** El 98.4% apuesta el flop; solo por fuerza, las candidatas a las tres calles son los sets y los sobrepares, ==6 + 12 = 18 combos==, mientras que los combos de A-high de abajo compran una calle y reevalúan. ⚠ Eso se lee de las categorías, no está resuelto: sin nodo de turn ni de river, esta pantalla no puede confirmar que los 18 lleguen hasta el final, ni colocar los 15 combos de top pair a un lado o al otro. **El top pair es exactamente donde está la decisión**, así que cierra tu propio plan antes de apostar.

Esto es lo que significa de verdad un **SPR de 4.0**. El número a vigilar no es el dinero que queda detrás, sino cuántas apuestas quedan. Apostar 14.9bb baja el SPR del turn a ==74.1 ÷ 52.3 = 1.4==, y a partir de ahí la siguiente apuesta es una decisión de stack, la quieras o no.

Y por eso el tamaño grande no va solo de esta calle. Las equities de los proyectos medidas hasta el river son todas números de "si llego a ver las dos cartas", y con dos tercios el que paga tiene que pagar dos veces más para verlas. Empezar pequeño es lo que le habría perdonado ese costo.

## ¿Por qué apuestan aquí las manos sin pareja?

**Porque el 38.4% del rango de la ciega grande es A-high, y la mayor parte está buscando escalera.** De los 73 combos, 28 son A-high, y los 18 gutshots están todos dentro de esos 28. Una mano sin pareja no es lo mismo que una mano sin equity: cuatro outs a Broadway, dos sobrecartas y todo lo que la apuesta haga foldear se gana en el acto.

| Los 28 combos de A-high | Combos | Qué son |
|---|---|---|
| AK | 16 | **Una jota** completa A-K-Q-J-10. 15 son gutshots; A♥K♥ suma el color y pasa a proyecto combinado |
| AJs | 4 | La misma A-K-Q-J-10, pero necesita **un rey**. 3 son gutshots; A♥J♥ es proyecto combinado |
| A5s · A4s | 8 | A♥5♥ y A♥4♥ son los dos proyectos de color pelados |

Con una reina y un diez en el board, **A-K y A-J persiguen la misma A-K-Q-J-10 sin tener nada ahora mismo.** Si las haces foldear ganas al instante; si te pagan, todavía te quedan outs. Con eso basta para apostar.

JJ y 99 son el caso contrario. **Ninguna de las dos tiene proyecto.** Las jotas, con la reina y el diez del board, todavía necesitan dos cartas más — un rey y un nueve, o un as y un rey — para hacer escalera. Tienen pareja, que se lee como fuerza, pero la mano que puede darle la vuelta a todo con una sola carta es A-K.

## ¿Qué tiene realmente el botón?

**Más de un tercio — el 36.1% — es un underpair, así que llega a un board con dos cartas broadway sosteniendo una pareja por debajo de las dos.** El resto se reparte entre manos que ligaron con la reina, manos que van a los corazones y una cola pequeña de nada. Una fila de la tabla de abajo no significa lo que parece, y vale la pena encontrarla antes de seguir leyendo.

![Composición de rangos en un bote de 3-bet sobre Q-10-7 two-tone, con los sobrepares solo del lado de la ciega grande y la segunda pareja solo del lado del botón](/images/gto-3bp-dynamic-ranges-es.webp "Bote de 3-bet en Q-10-7 · la fila de Overpair es de la ciega grande, la de segunda pareja es del botón")

| Categoría | BB (3-bettor) | BTN (caller) |
|---|---|---|
| Trío (aquí siempre es un set) | **8.2%** | 6.8% |
| Overpair | **16.4%** | — |
| Top pair (una reina) | 20.5% | 20.3% |
| Segunda pareja (un diez) | — | **6.8%** |
| Underpair | 16.4% | **36.1%** |
| A-high | **38.4%** | 24.1% |
| K-high o sin pareja | — | 6.0% |

Dos filas cargan con toda la historia, y una de ellas es una trampa.

**La fila de Overpair sí es un monopolio de verdad:** 16.4% para la ciega grande y nada para el botón, porque el rango que paga en este ejemplo no tiene ni un solo par **servido** de ases o de reyes. (Ases y reyes sueltos los tiene por todas partes — 32 combos de A-K y A-J están en la fila de A-high.) Eso es un **ajuste preflop escrito en el árbol**, no algo que dedujera el solver — en solves reales a veces se guardan unos pocos para proteger la parte alta del rango que paga.

**La fila de Trío no es un monopolio, pese al porcentaje mayor.** El 8.2% de 73 combos son 6; el 6.8% de 133 combos son 9. **El botón tiene aquí más sets, no menos.** Una porción menor de un rango más ancho puede seguir siendo la cuenta mayor, y 133 contra 73 da de sobra para darle la vuelta. (El panel etiqueta esta fila como *Trío*. En un flop sin pareja, un par servido que liga con una carta del board es un **set** — la distinción se trabaja en el [spot del board pareado](/es/blog/paired-board-strategy).)

La segunda pareja es solo del botón por una razón estructural: **el rango de 3-bet de la ciega grande no contiene ninguna mano con un diez suelto.** TT sí está dentro, pero eso liga un set en el flop y sube una fila.

El top pair va 20.5% contra 20.3%. **La diferencia entre estos rangos está por encima y por debajo de él, nunca en él.**

## ¿Por qué el EQR es 117.8% si la equity es 58.3%?

**La ciega grande realiza 1.18 veces su parte del bote estando fuera de posición.** Es más que el 109.6% de A-K-2 — y **no significa que este spot sea mejor.** El EV real de la ciega grande *bajó*, de 16.99bb allí a **15.46bb** aquí.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58.3% | 41.7% |
| EV (bb) | 15.46 | 7.04 |
| **Realización de equity** | **117.8%** | 75.1% |

En un bote de 22.5bb, un 58.3% de equity vale ==22.5 × 58.3% = 13.12bb==, y quedarse con 15.46bb da ==15.46 ÷ 13.12 = 117.8%==.

La diferencia de equity aquí es *más estrecha* que en A-K-2, donde iba 68.9% contra 31.1%, y aun así la cifra de realización es mayor. **Parte de eso es que el denominador encoge.** La realización de equity se mide contra tu propia parte, así que a medida que la equity se acerca al 50% la misma ventaja aparece como un múltiplo mayor. ⚠ La parte más grande, sin embargo, es real: medido como EV por encima de la parte bruta, A-K-2 dio ==16.99 − 22.5 × 68.9% = cerca de 1.49bb== y este board ==15.46 − 22.5 × 58.3% = cerca de 2.34bb==, así que **el exceso también creció.** Lo que sí encogió es la parte del bote que se lleva la ciega grande: ==16.99 ÷ 22.5 = 75.5%== en A-K-2 frente a ==15.46 ÷ 22.5 = 68.7%== aquí — un EQR más alto y "llevarse más bote" son afirmaciones distintas.

El 75.1% del botón tampoco es evidencia independiente de nada — los dos EV suman el bote, así que si un lado pasa de 100% el otro tiene que quedar por debajo. Lo que sostiene el número es el monopolio de los sobrepares, y lo que compra es poder cobrarles un mal precio a las manos intermedias del botón. Por qué la posición normalmente vale dinero está en [juego posicional](/es/blog/holdem-position-play).

:::note[Todos los EQR de esta serie se citan tal como los muestra el solver. Si divides tú mismo la equity y el EV ya redondeados puedes quedarte a un decimal — eso es redondeo, no desacuerdo.]:::

## ¿Qué cambia en la mesa?

Todo lo de abajo asume **mano a mano, bote de 3-bet, SPR 4**. Añade un cold call o acorta los stacks y "apostar todo el rango" deja de ser cierto.

- **Elige el tamaño mirando el board antes que tu mano.** Elegir por fuerza de mano significa grande cuando eres fuerte y pequeño cuando eres débil, y eso se lee. Aquí el solver mete el 98.4% por un solo tamaño.
- **En un bote de 3-bet, sobre un board con dos tipos de proyecto, ve primero al tamaño grande.** Un tercio del bote anuncia "con 19.8% ya puedes continuar", y todos los proyectos de color de este board superan eso con margen. ⚠ No lo archives como "si hay proyectos, apuesta grande", eso sí — **este artículo cita su propio contraejemplo.** El [board 8-5-2](/es/blog/3bet-pot-low-board), donde el 78.3% del rango no tiene ningún proyecto, también dispara el tamaño grande el 97.8% de las veces, y allí la razón es un **rango polarizado**, no los proyectos. Lee juntas la densidad de proyectos y la forma del rango. (En un bote de subida simple la misma textura es otra pregunta — mira más arriba la nota sobre el bote de subida simple.)
- **A-K no es un check en este flop.** Con una reina y un diez fuera, es un gutshot a Broadway. En un board donde nada se le engancha, **esa misma A-K puede irse hacia el check** — ⚠ pero no como regla: en el board bajo 8-5-2 que se cita arriba el rango dispara el tamaño grande el 97.8% con A-K dentro, así que "¿tiene proyecto?" por sí solo no decide qué hace A-K, y ninguno de los dos solves da una frecuencia por mano para ella. La regla que te llevas no es "A-K apuesta" ni "A-K hace check", sino "mira primero la forma de todo tu rango en este board".
- **★Esta es una respuesta de flop, no un plan.** Apostar 14.9bb lleva el SPR del turn a 1.4, así que la siguiente apuesta es prácticamente el stack. Decide antes de apostar si esta mano va a ir hasta allí. **Un corazón en el turn corta por los dos lados** — los cuatro proyectos combinados del botón llegan, pero también los cuatro tuyos, y todos los tuyos llevan el A♥ — lo que además significa que, cuando eres tú quien lo tiene, dos de los cuatro del botón no pueden existir. Lo que le hace a un A-high sin corazones es más sutil: la jota que buscabas no desaparece, queda **contaminada**, porque una J♥ le completa el color a alguien. Un solo tamaño no puede cubrir los tres casos.
- **★Decide de antemano tu respuesta a una subida.** Apostar casi todo el rango significa que casi todo el rango recibe subidas, y con SPR 4 una subida es una pregunta sobre el stack. Los sets y los sobrepares van con ella. **El A-high sin dos corazones — 24 de esos 28 combos — es el fold más claro**, porque un gutshot pelado son cuatro outs. Las cuatro manos con corazones son las candidatas a continuar, y A♥K♥ y A♥J♥ son las más fuertes porque además llevan el gutshot. El top pair es la decisión de verdad, y un solve de solo flop no la responde.
- **★Desde el asiento del botón, planea dónde paran las parejas medias.** Aquí el 36.1% del rango que paga es un underpair. ⚠ No leas la **MDF de 60.2% como una cuota de call**, eso sí — es un techo que sale de tratar la apuesta como un farol puro sin equity, y **el 45.1% del rango con el que apuesta la ciega grande ya está hecho** (8.2 de trío, 16.4 de sobrepares, 20.5 de top pair); si la defensa óptima real queda por debajo es una pregunta que **este solve no responde.** **El turn es adonde van esas parejas** — una segunda apuesta grande foldea a la mayoría, y pagar el flop sin haber decidido eso es por donde se escapan los stacks. (El nodo del turn no está en este solve, así que eso es un juicio, no una cifra.)

:::readnext[Sigue leyendo]
/es/blog/3bet-pot-cbet | El flop en el que nadie hace check — SPR 4 en un bote de 3-bet | /images/gto-3bp-ace-king-oop-es.webp
/es/blog/3bet-pot-low-board | Tres combos ligan este flop — y aun así apuesta el 97.8% | /images/gto-3bp-low-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver) y ve a **Spots de estudio → Board dinámico two-tone → [⚡ Ver resultados]**.

Mira primero la tira de acciones: **Bet 14.9bb (66% del bote) · 98.4% · 71.9 combos**, con las otras dos opciones por debajo del uno por ciento. Después cambia el selector Jugador a **IP (BTN (caller))** y fíjate en lo que falta en el panel — el botón **no tiene fila de Overpair ni fila de Proyecto de color.** Una categoría en cero simplemente no se dibuja, y esas dos ausencias son casi todo este artículo.

Después abre el **Entrenador GTO** en la barra lateral. Reparte una mano con los pesos reales del rango y califica tu acción por el EV perdido. Gratis, sin instalar nada y sin cuenta.

Un contraste útil es el board con A-high del spot anterior. A♦K♠2♥ es rainbow, así que **allí no existe proyecto de color para nadie**, y todo el rango de la ciega grande es pareja o mejor. Aquí la fila de "sin proyecto" marca solo 43.8%. ⚠ Ojo, el otro 56.2% no está todo *vivo* — 26.0 puntos son **backdoor**, necesitan dos corazones seguidos y se completan cerca del 4.2% de las veces. Los proyectos reales suman 30.1%. **Aun así, esa línea no es la explicación completa** — el [flop 8-5-2](/es/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-es.webp"), más adelante en esta serie, tiene un 78.3% de "sin proyecto" y dispara el tamaño grande el 97.8% igualmente. La densidad de proyectos y la forma del rango votan las dos.

## Preguntas frecuentes

**Q. ¿Cuánto hay que apostar en poker?**

A. Trabaja desde lo que el board le da a tu rival, no desde lo que tú tienes. En Q-10-7 con dos corazones, donde tanto el color como la escalera están vivos, el solver usa dos tercios del bote el 98.4% de las veces. En un A-K-2 seco el mismo rango prefiere un tercio del bote con 57.8%. La prueba siempre es qué precio se les ofrece a las manos que todavía pueden mejorar.

**Q. ¿Por qué apostar grande en un board con muchos proyectos?**

A. Para que los proyectos paguen un precio perdedor. Dos tercios del bote le piden al que paga cerca de 28.5% de equity, y solo dos de sus 40 combos con proyecto llegan — K♥J♥ y 9♥8♥, que tienen quince outs y 31.9%. Todo lo demás se queda corto, incluidos los proyectos combinados de doce outs con 25.5%. Baja a un tercio del bote y el listón cae a 19.8%, lo que duplica a cuatro los combos que lo superan. Los proyectos no son la única ruta al tamaño grande, eso sí — cuando el rango se parte en fuerte y débil sin nada en medio, un [board seco como 8-5-2](/es/blog/3bet-pot-low-board) también llega al 97.8%.

**Q. ¿Qué es el geometric bet sizing?**

A. Elegir una fracción del bote y repetirla en cada calle para que la última apuesta caiga justo en all-in. Importa sobre todo con SPR bajo, donde estás eligiendo cuántas decisiones quedan y no cuánto dinero queda. La aritmética de este spot, y por qué el tamaño que el solver usa de verdad es mayor que el geométrico, está trabajada más arriba.

**Q. ¿Debería usar un overbet en su lugar?**

A. Este árbol solo ofrecía un tercio y dos tercios, así que el overbet nunca estuvo en el menú. Ábrelo y lo más probable es que ese 98.4% se redistribuya entre dos tercios y el overbet, porque la misma lógica — cobrarle a los proyectos el peor precio posible — empuja en esa dirección. Toma la frecuencia exacta como algo propio de este árbol, no como un número universal.

**Q. ¿Se puede apostar A-K sin pareja aquí?**

A. Sí. Una sola jota completa A-K-Q-J-10, así que es un gutshot, y 15 de los 18 combos de gutshot de la ciega grande son A-K. Los folds ganan el bote ya; los calls te siguen dejando outs. Lo que la convierte en apuesta es la conexión con el board, no las dos cartas grandes.

**Q. ¿Y si mi rival paga los proyectos sin mirar el precio?**

A. Entonces desaparece la fold equity, y estos números dejan de describir a tu rival — asumen defensa óptima. Contra una calling station, inclínate al valor y recorta los faroles, pero mantén el tamaño grande. Ese jugador está pagando un mal precio por buscar carta, y ese mal precio es exactamente de donde sale tu dinero.

**Q. ¿Estos números sirven en mi partida?**

A. Como línea base cuando las condiciones coinciden. Cambia el rango de 3-bet, la profundidad de stack o los tamaños del árbol y las frecuencias se mueven con ellos, y aquí no se modela el rake. Lo que viaja es la estructura — un board cargado de proyectos en un bote de 3-bet con SPR 4 quiere un solo tamaño grande. Fíjate en que **la altura de las cartas del board hace tanto trabajo como su densidad de proyectos**: Q-10-7 es lo bastante broadway como para que un rango de 3-bet siga conectando con él, y eso no es cierto de cualquier flop cargado de proyectos.
`.trim(),
};

export default POST;
