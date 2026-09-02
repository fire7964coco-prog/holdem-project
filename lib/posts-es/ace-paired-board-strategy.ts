import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑬ 스페인어판 — A♠A♥6♦ 블라인드전 (SB 오픈레이저 vs BB 콜러)
 *
 * ★★ «번역 + 5필드» (스펙 §4-A-3 · 브리프 docs/es-gto-series-translation-brief.md).
 *    소스 EN = lib/posts-en/ace-paired-board-strategy.ts · 커밋 09bd0697 ·
 *    EN updated 2026-08-21 → masterUpdated = 2026-08-21. 구조·수치·논거·고지 문장은 EN 1:1.
 *
 * ▶ 조준 키워드 (팩 docs/keyword-bank/es-gto-series.md §3 ⑬행)
 *    blockers poker 10(응용 층 — 정의는 holdem-card-counting 소유) · trips poker ·
 *    «board con A pareado» · guerra de ciegas · 훅 = 80.1%.
 *
 * ▶ 표기 규약 — 산문 카드는 10♠, 레인지 표기(KK·QQ·A7s·Q9o)와 앱 캡처 콤보(A♣8♣)는 축어.
 *    ⑬은 벳 사이즈가 둘이다 — 칩 «Bet 4.5bb (75% del bote)» / «Bet 2bb (33% del bote)».
 *    ★페어 보드라 trips가 실재한다 — ⑨⑩⑪⑫의 «aquí siempre es set» 각주를 여기 붙이지 마라.
 *
 * 🔴 폐기 명제(브리프 §4 앵커) — «트립스는 드물다» 금지(SB 88 대 BB 66 콤보로 80.1%가 나온다) ·
 *    «나쁜 패는 접고 좋은 트립스만 콜한다» 금지(BB 투 페어 78 + K 하이 92 = 170콤보가 KK 아래) ·
 *    «트립스가 전부 벳» 금지(A를 든 94콤보의 체크 0.1%~26.0% · 평균 12.3%) ·
 *    «A는 압도적으로 많이» 금지(95 대 72 = 약 1.3배).
 * 🔴 편 수 하드코딩 금지 — «(마지막 편)»·스팟 개수 숫자 금지, «esta serie»로.
 */
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "Dos ases en el flop y la apuesta salta al 80%",
  seoTitle: "Trips y blockers en un board con A pareado: apuesta el 80%",
  desc: "Un flop pareado recibe un 3% de apuesta y otro un 80.1%. En A-A-6 el as es del que subió — y los trips que te ganan faltan en el rango del que paga.",
  tldr: "Tras una apertura de la ciega pequeña y un call de la ciega grande, el flop A♠A♥6♦ recibe una apuesta el 80.1% de las veces (79.6% a un tercio del bote, 0.5% a tres cuartos, check 19.8%). Es lo contrario del 3.0% que se vio en el board pareado 6♣6♦3♥ — y lo que los separó no es que el board viniera pareado, sino de quién era la carta que formó esa pareja. Las manos que hacen trips con un as van 88 combos contra 66, y 16 de esos combos, A-K y A-Q, faltan por completo en el rango con el que se paga.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-08-21",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-es.webp",
  imageAlt: "El solver GTO de HoldemMaster sobre un flop A-A-6, con la matriz de la ciega pequeña casi entera en naranja para la apuesta",
  tags: [
    "blockers poker",
    "trips poker",
    "ace paired board",
    "guerra de ciegas poker",
    "poker bluff frequency",
    "poker gto",
  ],
  content: `
Te dirán que en los boards pareados no entran apuestas. En el [board pareado 6-6-3](/es/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-es.webp") de esta serie, el jugador que hablaba primero apostó apenas un **3.0%**.

Este también es un board pareado. A♠ A♥ 6♦. Y la ciega pequeña (SB) apuesta el **80.1%**.

Las condiciones no cambian respecto a los dos spots anteriores — bote de 6bb, stack efectivo de 97bb, la ciega pequeña como open-raiser. Un board antes, desde ese mismo asiento, [apostaba solo el 9.6%](/es/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-es.webp"). Este spot es el otro extremo. Todos los números de abajo salen del [solver GTO de HoldemMaster](/es/solver).


:::stripe
Spot | La SB abre a 3bb → la BB paga (guerra de ciegas)
Flop | A♠ A♥ 6♦ (pareado · sin proyecto de color posible)
Bote · stack | Bote 6bb · stack efectivo 97bb · SPR 16.2
Resultado | La SB apuesta el **80.1%** — frente al 3.0% del board pareado 6-6-3
:::

> **Respuesta rápida**
> En el board pareado A-A-6 la primera acción de la ciega pequeña es **apostar 80.1%, hacer check 19.8%** (79.6% de eso a un tercio del bote). Es lo contrario del 3.0% de 6-6-3, y lo que los separó **no es que el board viniera pareado, sino de quién era la carta que formó esa pareja.** Las manos que hacen trips con un as van **88 combos contra 66**, y de esos, **A-K y A-Q — 16 combos — no existen en el rango con el que paga la ciega grande.** Hicieron 3-bet con ellas antes del flop.

## ¿En qué condiciones salieron estos números?

★**Iguales a las de los dos spots anteriores, salvo que aquí hay dos tamaños de apuesta.** Los spots ⑪ y ⑫ solo tenían un tercio del bote; este tiene además tres cuartos abierto al lado.

| Elemento | Este spot ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥10♦6♠ |
|---|---|---|---|
| Preflop | La SB abre a 3bb → la BB paga | igual | igual |
| OOP (habla primero) | SB — open-raiser | igual | igual |
| Bote · stack efectivo | 6bb · 97bb | igual | igual |
| SPR | 16.2 | igual | igual |
| **Tamaños de apuesta** | **Dos: alrededor del 33% y del 75% del bote** | Uno, 33% | Uno, 33% |
| Rango de la SB | 503 combos | 572 combos | 538 combos |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ 10♦ 6♠ |
| Rake | No modelado | No modelado | No modelado |
| Comprobado | 2026-08-08 (resultado del spot de estudio) | 2026-08-08 | 2026-08-08 |

El bote de 6bb es ==los 3 de la SB más los 3 de la BB==, el stack efectivo es ==100 − 3 = 97bb== y el SPR es ==97 ÷ 6 = 16.2==. Los tres spots usan el mismo rango, y **lo único que encoge es el recuento de combos, por las cartas que el board se lleva** — dos ases en el flop eliminan muchísimas combinaciones con as, y por eso 503 es el más pequeño de los tres.

La pantalla va en **ciegas grandes** — las apuestas se leen como "Bet 4.5bb (75% del bote)" y el EV aparece como "EV (bb)".

## ¿Con qué frecuencia apuesta aquí la ciega pequeña?

**79.6% con el tamaño pequeño, 0.5% con el grande y 19.8% de checks.** Las apuestas suman 80.1%, y entran 403 de 503 combos.

| Primera acción de la ciega pequeña | Frecuencia | Combos |
|---|---|---|
| Bet 4.5bb (75% del bote) | 0.5% | 2.7 |
| Bet 2bb (33% del bote) | **79.6%** | 400.4 |
| Check | 19.8% | 99.8 |

Puesto en fila con el resto de la serie, se ve dónde aterriza este.

| Spot | Quién está fuera de posición | Frecuencia de apuesta OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB, caller | 0.1%–1.9% |
| **6♣6♦3♥ board pareado (⑥)** | BB, caller | **3.0%** |
| 6♠5♥2♦ bajo (⑦) | BB, caller | 3.2% |
| 7♦6♦5♣ guerra de ciegas (⑫) | SB, open-raiser | 9.6% |
| Q♠9♠2♠ monotone (⑤) | BB, caller | 11.2% |
| 9♥8♥7♣ conectado (④) | BB, caller | 23.7% |
| K♥10♦6♠ guerra de ciegas (⑪) | SB, open-raiser | 67.4% |
| **A♠A♥6♦ board pareado (⑬)** | **SB, open-raiser** | **80.1%** |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB, 3-bettor | 98–100% |

**Los dos boards pareados quedan casi en extremos opuestos de la tabla.** Es decir: la etiqueta "board pareado" no decide ninguna estrategia.

## Dos boards pareados, 3.0% y 80.1%: ¿qué los separó?

**No el número de trips, sino el *resto del rango*.** El spot 6-6-3 es aquí el contraejemplo decisivo, porque allí **el jugador que hablaba primero tenía más trips** y aun así apostó 3.0%.

| | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Quién habla primero | BB — caller | **SB — open-raiser** |
| Porción de trips | BB 5.3% vs BTN 4.0% — **el que apuesta primero tiene más** | SB 17.5% vs BB 13.1% — el que apuesta primero tiene más |
| Equity OOP | 47.2% | **56.2%** |
| EQR OOP | 83.7% | **104.1%** |
| Frecuencia de apuesta OOP | **3.0%** | **80.1%** |

En 6-6-3 la ciega grande había defendido barato con manos que el botón nunca abre — J6s, T6s, 96s — así que sus combos con un seis sumaban 26 (5.3%) contra los 20 (4.0%) del rival. **Y aun así apostó 3.0%.** Cuenta todas las manos que ponen algo encima de la pareja del board y sale **18.4% para la ciega grande contra 20.3% para el botón** — el botón va por delante. Lo único que lideraba la ciega grande era esa fila, la de trips. Y el 81.6% restante, la pelea de "seis pareado más una carta alta", también se fue al otro lado: A-high 26.3% contra 31.9%.

Aquí el resto también cae del lado de la ciega pequeña. El K-high va 22.3% contra 18.2%, y las manos que no ligaron nada van 39.8% contra 51.5% — **11.7 puntos más para el rival.**

:::pull[Lo que fija la frecuencia de apuesta no es cuántos combos tiene tu clase más alta. Es si todo tu rango es mejor que el suyo.]:::

El as es la carta de la que el agresor preflop tiene más — en este spot 95 combos contra 72, **alrededor de 1.3 veces más.** Cuando esa carta cae dos veces en el flop, la parte alta del rango y el resto se inclinan **hacia el mismo lado**, y es entonces cuando la frecuencia de apuesta sube al 80%.

## ¿Quién tiene más trips?

**88 combos (17.5%) para la ciega pequeña, 66 (13.1%) para la ciega grande.** Pero **lo que falta** importa más que la cuenta. (El solver etiqueta esta clase como "Trío" — es lo que la tabla llama trips.)

![Infografía de composición de rangos que compara las clases de mano de la ciega pequeña y de la ciega grande en un board A-A-6](/images/gto-sb-paired-ace-ranges-es.webp "A-A-6 en guerra de ciegas · composición clase por clase — las manos que no ligaron van 39.8% contra 51.5%")

| Clase | SB (OOP · open-raiser) | BB (IP · caller) |
|---|---|---|
| Quads | **0.2% (1 combo)** | 0.0% (0 combos) |
| Full house | 1.8% (9 combos) | 1.8% (9 combos) |
| Trío | **17.5% (88 combos)** | 13.1% (66 combos) |
| Doble pareja | **18.5% (93 combos)** | 15.4% (78 combos) |
| K-high | **22.3% (112 combos)** | 18.2% (92 combos) |
| Sin jugada | 39.8% (200 combos) | **51.5% (260 combos)** |

Tres líneas son todo el spot.

- **Los trips de la ciega grande no llevan ni A-K ni A-Q.** Esas hacen 3-bet contra una apertura de 3bb de la ciega pequeña en lugar de pagarse. Los trips altos que solo tiene la ciega pequeña son ==8 combos de A-K + 8 de A-Q + 6 de A-J de distinto palo = 22 combos==. Los mismos trips, y la pelea de kickers ya está decidida.
- **Los quads son solo de la ciega pequeña.** Con A♠ y A♥ en el board, los únicos ases que quedan son A♦ y A♣, así que AA es **exactamente un combo**. La ciega grande hace 3-bet con AA y tiene cero.
- **Más de la mitad del rango de la ciega grande no es nada.** 260 combos (51.5%) no ligaron. Esa es la porción que una sola apuesta puede hacer foldear.

Lo único exactamente igualado son los full: las dos tienen ==3 combos de 66 + 6 combos de A-6 = 9==. **Quita esa única casilla y todas las clases de arriba se inclinan hacia la ciega pequeña, mientras que solo el fondo — las manos que fallaron — pesa 11.7 puntos más para la ciega grande.**

La equity enseña el resultado.

| Elemento | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56.2%** | 43.8% |
| EV (bb) | 3.51 | 2.49 |
| **EQR (realización de equity)** | **104.1%** | 94.8% |

El bote es de 6bb, así que la parte de la ciega pequeña es ==6 × 56.2% = 3.372bb== frente a un EV real de 3.51bb — eso da ==3.51 ÷ 3.372 = 104.1%==. Los dos EV suman ==3.51 + 2.49 = 6.0bb==, exactamente el bote.

**La realización de equity pasa del 100% sin posición.** Es la **más alta de los tres spots de guerra de ciegas** — ⑪ con 103.1%, ⑫ con 85.3% y este con **104.1%**. Es el segundo de ellos en pasar del 100%, y como aquí la ventaja de rango es más afilada se queda un poco por encima de ⑪. (Los botes de 3-bet también pasan del 100% fuera de posición, entre 106.9% y 117.8% — esa ventaja se construyó haciendo 3-bet.)

## ¿Por qué casi nunca se usa el tamaño grande?

**Porque la ventaja es *ancha* y no *profunda*.** La apuesta de tres cuartos del bote se lleva 0.5%, apenas 2.7 combos. En la práctica solo hay un tamaño.

Los botes de 3-bet eran lo contrario. En el [board bajo 8-5-2](/es/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-es.webp") la ciega grande usaba dos tercios del bote el 97.8% de las veces, porque ese rango se partía casi por la mitad en **sobrepares (overpairs) o A-high** — una forma polarizada. Un rango estirado hacia los extremos pide un tamaño grande.

Este spot no es eso. El rango de la ciega pequeña corre **de forma continua** — trips 17.5%, doble pareja 18.5%, K-high 22.3%, fallos 39.8%. Con esa forma, empujar todo el rango con un tamaño pequeño vale más: haces foldear el 51.5% del rival y eso ya es beneficio, y cuando no foldean el bote se queda lo bastante pequeño como para que los 97bb de detrás nunca corran peligro.

:::note[⚠ Este spot de estudio se resolvió con dos tamaños candidatos, 33% y 75%. Añade uno más pequeño — un quinto o un cuarto del bote — y ese 79.6% podría migrar allí. Léelo como "el pequeño de los tamaños ofrecidos", no como "el 33% es la respuesta".]:::

## ¿Qué manos forman el 19.8% que hace check?

**No es una clase entera guardada, sino una porción de cada una.** Medido en vivo el 2026-08-21, los pares servidos hacen check así: **KK 72.4%, QQ 66.2%, JJ 42.0% y TT 21.6%** — o sea que KK y QQ se inclinan al check, pero **TT ya apuesta el 78%.** Los 99.8 combos que hacen check tampoco se resumen en "fuerza media": **el grupo más grande son los fallos, cerca del 44%**, después el K-high con un 27% aproximado, la doble pareja alrededor del 17% y los trips en torno al 11%. Las casillas donde el verde se acumula más son las **broadway de distinto palo** como Q9o, QJo, QTo y J9o. Las casillas que llevan un as, y 66, son naranjas en su mayor parte.

La razón está en **quién te paga.** KK hace doble pareja con los ases del board, pero **hay poco valor que recoger apostándola.** ⚠ No lo traduzcas en "las peores foldean y solo pagan los trips mejores" — **la propia tabla de este artículo lo desmiente.** Los 78 combos de doble pareja de la ciega grande son siete valores de pares servidos (42) más seis-x (36), **todos por debajo de KK**, y sus 92 combos de K-high también están por debajo; frente a una apuesta de un tercio del bote, esos 170 combos (33.7% del rango) no foldean todos. Mientras tanto, los trips y los full que le ganan a KK suman **75 combos (14.9%) — menos.** El motivo de que el valor sea fino no es que las manos débiles foldeen todas; es que **esa porción ancha paga pero no te sigue hasta un bote grande** — la doble pareja y el K-high se dan cuenta sin mucho esfuerzo de que van por detrás de KK, así que cuanto más grande apuestas, más se reduce a trips el rango que te paga. ⚠ Que conste: **otro as en el turn o en el river no le da la vuelta a KK** — con A-A-A-6 en el board, KK se convierte en *full de ases con reyes*, y nada de esos 170 combos le gana a esa carta. Hacer check, en cambio, deja sitio para que los 260 combos fallados de la ciega grande faroleen, y entonces un call se gana su sitio — **suponiendo que el rival mezcle faroles.** ⚠ Con qué frecuencia farolea de verdad la ciega grande después de un check no está en este cálculo (el spot de estudio termina en la primera acción del flop); es una interpretación sacada de la composición de rangos.

**Eso encaja con que los trips se vayan casi enteros a la apuesta.** Los 88 combos que llevan un as necesitan valor del K-high y de los fallos del rival, así que hay pocos motivos para hacer check. ⚠ Aun así, "enteros" es incorrecto — medido en vivo el 2026-08-21, los **94 combos que llevan un as** (88 de trips más los 6 combos de A-6 que hacen full) hacen check entre **0.1% y 26.0%, con una media del 12.3%**, y **ni un solo combo hace check exactamente el 0%.** La mezcla es más constante cuando el as va acompañado de una carta baja (A♣8♣ con 19.4%, A♣7♣ con 20.9%, y A-5 hasta A-2 de distinto palo con una media del 20.1%).

## ¿Qué cambia en la mesa?

- **No conviertas en regla lo de "board pareado, así que check".** Es 3.0% en 6-6-3 y 80.1% en A-A-6. La prueba no es si el board viene pareado, y **tampoco cuántos combos de ese valor tienes** — en 6-6-3 la ciega grande tenía los seises más cargados (5.3% contra 4.0%) y aun así apostó solo un 3.0%. La prueba es **si tu rango *en conjunto* es mejor que el suyo.** Aquí la apuesta llegó al 80% porque la parte alta y el resto se inclinaron **hacia el mismo lado**.
- **Con dos ases fuera, no des por hecho que tu as no vale nada.** Si el rival hace 3-bet con A-K y A-Q, la pelea de kickers ya se inclina de tu lado. **Eso sí, se apoya en que él haga 3-bet** — contra una mesa que solo paga con A-K y A-Q la premisa se cae, así que con unos trips de kicker flojo apuesta pero mantente fuera de una guerra de subidas.
- **Tamaño pequeño, frecuencia alta.** Cuando el rango corre de forma continua, empujar ancho con un tercio del bote es mejor. El tamaño grande es la herramienta para [un rango partido en fuerte y débil](/es/blog/3bet-pot-low-board) — aunque incluso dentro de los botes de 3-bet la razón cambia en [un board cargado de proyectos](/es/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-es.webp"), donde una apuesta grande sirve para mantener al rival a mal precio. **Ten en cuenta además que el 80.1% es un cálculo mano a mano** — con más de un rival dentro, recorta mucho las apuestas de las manos falladas y estrecha hacia trips y doble pareja.
- **No apuestes KK y QQ "porque son fuertes".** En este board les cuesta que las paguen manos peores. Hacer check para atrapar los faroles del rival es mejor. ⚠ Eso es **un juicio sacado de la composición de rangos**, no un valor que esta serie haya medido — el spot de estudio solo enseña la frecuencia de la primera acción del flop, y en ninguna parte de la serie hay resuelto un nodo posterior al check. **También asume que el rival mezcla faroles** — contra alguien que casi nunca lo hace, una apuesta que llega después de tu check suele ser un as, y foldear gana más que atrincherarse.

:::readnext[Sigue leyendo]
/es/blog/blind-battle-connected-board | Mismo asiento, mismo stack — y la apuesta cae del 67% al 9.6% | /images/gto-sb-connected-oop-es.webp
/es/blog/a-high-board-cbet | El flop donde la ciega grande hace check el 98% de las veces | /images/gto-srp-dry-ace-oop-es.webp
:::

## Compruébalo tú mismo

Todas las cifras de aquí aparecen si abres el [solver GTO](/es/solver) y entras en **Spots de estudio → "Board con A pareado" → [⚡ Ver resultados]**. Si prefieres jugar el mismo spot como ejercicio, abre el [Entrenador GTO](/es/solver) desde la barra lateral — te reparte una mano al azar y, en cuanto eliges una acción, te enseña la frecuencia mezclada y el **EV perdido (bb)** de tu elección. Tu historial se queda en tu propio navegador.

**Alterna entre este spot y el board pareado 6-6-3.** Los dos son boards pareados y las matrices tienen colores opuestos. Recorre los Spots de estudio una vez y queda una sola conclusión: mira primero no **qué board es**, sino **a qué rango se engancha este board**. Gratis, sin instalar nada y sin cuenta.

**Q. ¿Qué son los trips en poker y en qué se diferencian de un set?**

A. Los trips se hacen cuando el board enseña dos cartas del mismo valor y tú llevas una de ellas. En A-A-6 casi cualquier mano con un solo as califica (**A-6 no es trips sino full** — también hace pareja con el seis del board), y en este spot eso son 88 combos (17.5%) para la ciega pequeña y 66 (13.1%) para la ciega grande. Un *set* se hace al revés, con un par servido más una carta de ese mismo valor en el board. Fíjate en que 66 sí hace set con el seis del board aquí, pero la pareja de ases del board se le pone encima, así que la mano final es un **full**.

**Q. Si también apuestas con manos que fallaron, ¿eso no es farolear?**

A. Mano por mano, sí. Pero en GTO **farolear no es "estoy engañando con esta mano" — es "qué porcentaje de faroles hay en mi rango".** El solver no decide si una mano es farol; decide **la frecuencia de apuesta de todo el rango.** Con el 51.5% del rango rival fallado, la apuesta se paga sola, y cuando no los hace foldear, los 88 combos de trips de la ciega pequeña recogen. El valor y el farol salen con el mismo tamaño, así que el rival no puede distinguirlos.

**Q. En un board como A-A-6, ¿qué probabilidad hay de que el rival tenga un as?**

A. En este spot, **72 de los 505 combos de la ciega grande (14.3%)** — 66 combos de trips más los 6 combos de A-6 que hacen full. Con A♠ y A♥ en el board solo quedan dos ases, así que es menos de lo que parece. La ciega pequeña, en cambio, tiene **95 combos (18.9%)**: 88 de trips, 6 de A-6 y 1 de AA. El mismo board da respuestas distintas según quién atacara antes del flop.

**Q. ¿Cuál es la conclusión que recorre esta serie?**

A. Que **"hablar primero es una desventaja" solo es medio cierto.** La ciega grande que paga en los spots ① a ⑦ apostaba apenas entre 0.1% y 23.7%, pero desde ese mismo asiento el 3-bettor de un bote de 3-bet apuesta entre 98% y 100%, y la ciega pequeña que abre en guerra de ciegas se mueve del 9.6% al 80.1% según el board. No es el asiento sino **la relación entre rango y board** lo que fija la frecuencia. Puedes hacer clic en todos estos spots tú mismo en los Spots de estudio del [solver GTO de HoldemMaster](/es/solver).
`.trim(),
};

export default POST;
