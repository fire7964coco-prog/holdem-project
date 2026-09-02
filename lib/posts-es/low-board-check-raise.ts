import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑦ 스페인어판 — 6♠5♥2♦ 로우 레인보우
 *
 * 소스 = 「lib/posts-en/low-board-check-raise.ts」 (EN 커밋 bbf325d1 · EN updated 2026-09-02).
 * 방식 = «번역 + 5필드»(spec §4-A-3) — 구조·수치·고지 문장은 EN 축어,
 *        seoTitle·desc·H2·FAQ·내부링크만 es로 재조준했다.
 *
 * 🔴🔴 **이 편은 서로 다른 두 솔브를 쓴다(spec §4-B / §4-B-3). 절대 섞지 마라** —
 *   ① 교육 예제(플랍 첫 액션 전용, 루트 리드 3.2%) ② 자체 재솔브(체크레이즈 수치, 루트 리드 2.0%).
 *   EN이 붙인 «재솔브지 교육 예제가 아니다» 고지 문장을 한 문장도 떨어뜨리지 않았다.
 *
 * ▶ 조준 (「docs/keyword-bank/es-gto-series.md」 §3-⑦)
 *   「check raise poker」·「check-raise poker」·「que es check raise en poker」 각 ES 10 / MX 10 ·
 *   PAA 「¿Cuándo hacer check-raise?」. 정의 층은 holdem-betting-actions 태그 소유 →
 *   이 편은 «6-5-2에서 어떻게 설계하나» 응용 층만 가져온다. 훅 = 「cero escaleras」.
 *
 * ▶ 표기 규약 — 수치·카드·레인지 표기(T9s·65s)는 언어 불변 · 앱 화면 라벨은 es 축어
 *   (브리프 §1-B: Board bajo y rainbow · Trío · Segunda pareja · Gutshot · Proyecto a dos puntas).
 *
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 → 「esta serie」로만 가리킨다.
 */
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "Ningún rango tiene escalera en este flop",
  seoTitle: "Cero escaleras en 6-5-2 — cuándo hacer check-raise",
  // 153자
  desc: "En 6-5-2 exactamente una mano hace escalera y ninguno de los dos la tiene. Por eso la ciega grande hace check el 96.8% y guarda todo para el check-raise.",
  tldr: "En el flop bajo y rainbow 6♠5♥2♦ la ciega grande hace check el 96.8% y apuesta primero apenas el 3.2% — aunque su 48.3% de equity es el segundo más alto de los siete spots en los que defiende. Aquí solo una mano hace escalera, 4-3, y no está en ninguno de los dos rangos. Nadie tiene la parte alta, así que nadie apuesta primero fuera de posición. La acción llega después: al resolver de nuevo el mismo árbol para ver más allá del flop, la ciega grande hace check-raise a una apuesta de 1.8bb el 14.9% de las veces, casi todo con proyectos.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-es.webp",
  imageAlt: "Resultados del solver GTO de HoldemMaster en un flop bajo y rainbow: la matriz 13x13 de la ciega grande casi entera en verde con una franja naranja fina de apuestas",
  tags: [
    "check raise poker",
    "check-raise poker",
    "cuando hacer check raise",
    "gutshot",
    "board bajo y rainbow",
    "proyecto a dos puntas",
    "poker gto",
  ],
  content: `
El flop es **6♠ 5♥ 2♦**. Tres cartas bajas, tres palos distintos — así que no hay proyecto de color, y un color necesitaría las dos cartas que faltan.

Parece el tipo de board que la ciega grande debería atacar. Su equity aquí es del **48.3%** — la segunda más alta de los siete spots de esta serie en los que defiende, por encima del 45.1% del [flop con as](/es/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-es.webp") y del 46.3% del flop con rey.

Apuesta primero el **3.2%** de las veces.

La razón es una sola mano. **Exactamente una mano hace escalera en 6-5-2, y ninguno de los dos jugadores la tiene.** Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | 6♠ 5♥ 2♦ (bajo, rainbow)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb (SPR de unos 17.7)
Resultado | La BB hace check el 96.8% — mucha equity, ninguna ventaja arriba
:::

> **Respuesta rápida**
> Haz check y luego dispara con el raise. La equity no es lo que te compra el derecho a apostar primero — la ventaja en la parte alta sí, y este board no se la da a ninguno de los dos. En cuanto el botón apuesta, la ciega grande pasa a ser la agresora: hace check-raise con todos los sets que tiene y rellena el resto de ese raise con proyectos de escalera — el grupo del que tiene más que el botón, y en el que de verdad gasta esa ventaja.

## ¿En qué condiciones salieron estos números?

El botón abre a 2.5bb, la ciega grande paga y el resto foldea. Dos jugadores, un bote de 5.5bb, 97.5bb detrás. **Una diferencia respecto a los spots anteriores de esta serie: aquí hay un solo tamaño de apuesta.**

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | 6♠ 5♥ 2♦ (rainbow — tres palos distintos) |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb (SPR de unos 17.7) |
| Tamaño de apuesta | Alrededor del 33% del bote — **un solo tamaño** |
| Rake | No modelado |
| Comprobado | 2026-08-20 |

El bote de 5.5bb es ==2.5 de apertura + 2.5 de call + 0.5 de ciega pequeña muerta==, y el stack efectivo es ==100 − 2.5 = 97.5bb==.

**El tamaño único importa cuando lees la pantalla.** Los spots anteriores ofrecían 33% y 75%; este se resolvió solo con 33%, así que **no hay ninguna fila "Bet 4.1bb" en toda la salida.** No falta nada — esa opción nunca estuvo en el árbol.

## ¿Con qué frecuencia hace check la ciega grande (BB) en 6-5-2?

**96.8%.** De 487 combos, 15.3 salen apostando y 471.7 hacen check.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **96.8%** | 471.7 |
| Bet 1.8bb (33% del bote) | **3.2%** | 15.3 |

Ese 3.2% no es una mano concreta probando una apuesta. Está repartido en una capa muy fina por todo el rango, que es como se ve una acción casi indiferente — el solver te está diciendo que la decisión no vale casi nada en ninguna de las dos direcciones.

## ¿Por qué apuesta primero el 3.2% aquí y el 23.7% en 9-8-7?

**Porque la equity y el derecho a apostar primero son cosas distintas.** Pon los siete spots en fila y el orden se descoloca por completo.

| Flop | Artículo | Equity BB | BB apuesta primero |
|---|---|---|---|
| Q♠J♦10♠ broadway (two-tone) | ③ | 46.7% | 0.1% |
| K♠8♦3♣ seco | ② | 46.3% | 0.2% |
| A♥7♦2♣ seco | ① | 45.1% | 1.9% |
| 6♣6♦3♥ pareado | ⑥ | 47.2% | 3.0% |
| **6♠5♥2♦ bajo y rainbow** | **⑦** | **48.3%** | **3.2%** |
| Q♠9♠2♠ monotone | ⑤ | 47.7% | 11.2% |
| 9♥8♥7♣ conectado | ④ | 48.5% | 23.7% |

El board con menos equity (45.1%) apuesta primero más que el broadway (46.7%). El [flop monotone](/es/blog/monotone-board-strategy) tiene **menos** equity que este — 47.7% contra 48.3% — y apuesta primero más del triple de seguido.

Ahora pon ⑦ al lado de ④. La diferencia de equity es de **0.2 puntos porcentuales**. La diferencia al apostar primero es **3.2% contra 23.7%.**

**La diferencia son las escaleras.** En [9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp") la ciega grande llega con 24 combos de escalera hecha — J-10, 10-6 del mismo palo y 6-5 del mismo palo. En 6-5-2 lo único que completa una es **4-3**, cerrando ==2-3-4-5-6==. Para armar la escalera por el otro extremo necesitarías 7, 8 y 9 — **tres cartas, y solo tienes dos.**

Y 4-3 no está en ninguno de los dos rangos. **El panel de categorías del solver no tiene ni siquiera una fila "Escalera"**, y 43s y 43o salen en gris en las dos matrices — esa mano nunca llega a este spot en ninguna de sus formas.

:::pull[Una sola mano hace escalera en este board, y a ninguno de los dos jugadores se la repartieron nunca.]:::

## ¿En qué se diferencian los dos rangos en 6-5-2?

**La ciega grande gana las parejas y pierde todo lo que está por encima de ellas.** Tiene más top pair, más segunda pareja y más parejas débiles que el botón; los sets y la doble pareja están empatados; y sus sobrepares (overpairs) son apenas la mitad que los del botón. Casi tres cuartas partes de los dos rangos no tienen ninguna pareja — que es lo que convierte esto en una pelea de sobrecartas y no en una pelea de valor, y por lo que la mano que la gana suele seguir siendo un proyecto.

![Composición de rango en un board bajo y rainbow: la ciega grande por delante en parejas y el botón por delante en sobrepares](/images/gto-srp-low-rainbow-ranges-es.webp "6♠5♥2♦ · de qué está hecho realmente el check-raise")

| Categoría | BB (OOP) | BTN (IP) |
|---|---|---|
| Trío | 1.8% | 1.8% |
| Doble pareja | 0.4% | 0.4% |
| Overpair | 4.9% | **9.5%** |
| Top pair (un seis) | **7.4%** | 5.4% |
| Segunda pareja (un cinco) | **6.2%** | 4.2% |
| Pareja débil | **3.7%** | 2.4% |
| Underpair | **2.5%** | 2.4% |
| A-high | 23.0% | **28.6%** |
| K-high | **15.6%** | 14.3% |
| Sin jugada | **34.5%** | 31.0% |

Suma top pair, segunda pareja y pareja débil y la ciega grande va por delante **17.3% contra 12.0%**. Es una ventaja real — y es el tipo equivocado de ventaja para *apostar primero*, porque ninguna de esas manos quiere construir bote desde fuera de posición en la primera acción. Son manos de check-call y de check-raise.

Dos filas explican el spot entero:

- **La fila "Trío" es 1.8% para los dos jugadores.** 🪶 Esa es la etiqueta de la app, citada tal como la muestra el panel — 6-5-2 no trae pareja, así que lo que esa fila contiene en realidad es un **set** (trips significa una carta de tu mano ligando con una pareja del board). Solo 66, 55 y 22 lo hacen, y cada uno es exactamente ==3 combos== porque hay una carta de cada valor en el board. Nueve combos para cada jugador. **La mejor mano de este flop está partida por la mitad.**
- **Los sobrepares van 4.9% contra 9.5%** — casi el doble. Un sobrepar aquí es cualquier par servido por encima del seis, o sea de 77 a AA. La ciega grande hace 3-bet con JJ y mejores antes del flop, lo que le deja **de 77 a TT, y nada más.** El botón se queda con toda la parte alta de esa lista.

## ¿Por qué la equity es 48.3% pero el EQR solo 84.3%?

**Porque la equity es lo que posees y el EQR es lo que cobras.**

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48.3% | 51.7% |
| EV (bb) | 2.24 | 3.26 |
| **Realización de equity** | **84.3%** | **114.7%** |

En un bote de 5.5bb, un 48.3% de equity vale ==5.5 × 48.3% = 2.66bb==. La ciega grande cobra en realidad **2.24bb**, y ==2.24 ÷ 2.66== es su realización de equity: **84.3%**. El 51.7% del botón vale 2.84bb y cobra 3.26bb — **114.7%**. (Si recalculas el EQR a mano, el resultado queda a menos de una décima de punto de la cifra mostrada; el solver trabaja con valores sin redondear.)

El número contra el que hay que compararlo es el del [flop con as](/es/blog/a-high-board-cbet), donde la ciega grande tenía un **45.1%** de equity y realizaba el **84.0%**. Tres puntos más de equity aquí, y conserva prácticamente la misma fracción. En cambio la ciega grande realizaba el **93.2%** en 9-8-7 — porque en ese flop sí tenía escaleras, así que podía apostar incluso fuera de posición.

**La posición vale más que tres puntos de equity cuando tu rango no tiene ventaja en la parte alta.** Esa es toda la diferencia.

## ¿Cuándo hacer check-raise en este flop?

**Cuando el botón apuesta — y bastante seguido.** Ante una apuesta de 1.8bb la ciega grande sube el **14.9%** de las veces.

:::note[⚠ **Esta sección viene de un solve distinto.** El spot de estudio publicado en la app es solo de flop — se detiene en la primera decisión y a sus fichas de acción no se les puede hacer clic, así que las respuestas a una apuesta no están dentro. Para obtenerlas reconstruimos el mismo árbol (apuesta 33%, raise 60%, bote 5.5bb, stack 97.5bb) y lo corrimos: **190 iteraciones, explotabilidad 0.16, que es el 0.29% del bote.** Todos los números de las dos tablas de abajo salen de esa corrida, no del spot de estudio.]:::

Primero, lo que hace el botón cuando la acción le llega en check:

| El botón, tras el check | Frecuencia | Combos |
|---|---|---|
| Bet 1.8bb (33% del bote) | **63.0%** | 316.5 |
| Check back | 37.0% | 186.5 |

Después, la respuesta de la ciega grande:

| La ciega grande, ante 1.8bb | Frecuencia | Combos |
|---|---|---|
| **Raise a 7.3bb** | **14.9%** | 69.7 |
| Call | **65.6%** | 314.6 |
| Fold | 19.5% | 93.2 |

(Un detalle que conviene nombrar: los porcentajes de la app y sus propios conteos de combos no cuadran del todo en este nodo — 69.7 combos son ==69.7 ÷ 477.5 = 14.6%== de los 477.5 que llegaron ahí, no el 14.9%. Los porcentajes de arriba están citados tal como los muestra el panel. La diferencia es un tercio de punto y no cambia nada, pero si lo corres tú y te sale 14.6%, ya sabes por qué.)

Dos cosas para fijarse.

**El raise es del 60% del bote, no un raise del tamaño del bote.** Es fácil entenderlo al revés. Subir a 7.3bb sí coincide con lo que ya hay en el centro — ==5.5 + 1.8 = 7.3== — pero un raise *del tamaño del bote* significa subir el bote **después** de tu call: ==5.5 + 1.8 + 1.8 = 9.1==, lo que te dejaría en **10.9bb**. Lo que 7.3 es en realidad: ==(7.3 − 1.8) ÷ 9.1 = 60%== del bote, que coincide con el tamaño de raise del 60% del árbol, y un pelo más de cuatro veces la apuesta (==7.3 ÷ 1.8 = 4.06==).

**La ciega grande foldea solo el 19.5%,** o sea que continúa el **80.5%** de las veces. Ante una apuesta de 1.8bb a un bote de 5.5bb, la cifra de defensa de equilibrio es ==5.5 ÷ (5.5 + 1.8) = 75.3%== — la parte que tienes que conservar para que un farol puro no gane dinero gratis. El solver la supera, porque un board tan bajo y tan seco le da a casi cualquier mano algo a lo que agarrarse.

:::note[Una advertencia honesta sobre esa corrida: su frecuencia de apuesta primero en la **raíz** salió **2.0%** en vez del 3.2% del spot de estudio, sobre 9.5 combos en lugar de 15.3. Todo lo demás — las categorías, los proyectos, la equity, el EV y el EQR — coincidió hasta el decimal. Apostar primero aquí es una decisión de EV casi cero, así que se mueve entre resoluciones. Trata el 3.2% y el 2.0% como la misma respuesta: *casi nunca*. Tu propia corrida va a caer también en esa banda.]:::

## ¿Con qué manos se arma el check-raise?

**Todos los sets, las dos dobles parejas y, después de eso, casi nada más que proyectos de escalera.**

Leímos las 487 filas de la tabla por mano, no la primera pantalla. Ordenada por frecuencia de raise, la parte de arriba de esa lista se parte con una limpieza inusual.

| Mano | Qué es | Sube |
|---|---|---|
| 66 · 55 · 22 | Trío — **los nueve combos** | **100%** |
| 65s | Doble pareja — solo existen 6♦5♦ y 6♣5♣, porque el 6♠ y el 5♥ están en el board | **100%** |
| 64s | Top pair **y** un gutshot | **100%** — dos de sus tres combos |
| 98s | Gutshot al siete — equity **35.8%** | 99%+ |
| 87s | A dos puntas, el cuatro o el nueve — equity **46.2%** | 80–83% |
| J4s · Q4s | Gutshot al tres y nada más | 67–90% |
| 54s | Segunda pareja y un gutshot | 74–75% |

Lee la segunda columna hacia abajo y el patrón es imposible de no ver. **Por debajo de la doble pareja, todas las manos del raise llevan un proyecto de escalera** — las dos que además tienen pareja (64s y 54s) suben con el proyecto pegado, no con la pareja:

- **98s** tiene 5-6-8-9 y necesita el ==7==.
- **87s** tiene 5-6-7-8 y le sirve el ==4 o el 9== — el único proyecto a dos puntas **de este rango**. ⚠ No el único que permite el board: **74 hace 4-5-6-7** y espera el 3 o el 8, un proyecto a dos puntas de manual, y 84 es un doble gutshot con los mismos ocho outs. El 0.8% de la tabla de proyectos significa que los rangos de este solver no tienen 74s, no que el board tenga un solo proyecto a dos puntas.
- **J4s, Q4s, 54s y 64s** tienen todas 2-4-5-6 y necesitan el ==3==.

**Ni una sola mano de la parte alta de esa lista fue elegida por su carta alta.**

Esas siete filas son la cima de la lista ordenada, y suman alrededor de 30 de los 69.7 combos que suben. El resto del raise viene del mismo rango a frecuencias más bajas — conviene saberlo antes de concluir que *nada más* sube aquí.

Y fíjate en qué poco de eso es valor. Los sets y la doble pareja juntos son el **2.2%** del rango — ==2.2% × 487 ≈ 11 combos== — de los 69.7 que suben. Incluso contando las dos manos que también ligan pareja, **menos de un combo de cada cuatro que sube es una mano hecha.** Por eso el raise sigue funcionando cuando le pagan: casi todo el rango que metió el dinero todavía puede mejorar.

Y los proyectos de escalera son donde el solver decide gastar esa ventaja.

| Proyecto | BB | BTN |
|---|---|---|
| Proyecto a dos puntas | 0.8% | 0.8% |
| **Gutshot** | **18.5%** | 13.9% |
| Proyecto backdoor | **20.5%** | 18.5% |
| Sin proyecto | 60.2% | **66.8%** |

**Gutshots: 18.5% contra 13.9%.** Con los sets repartidos por igual en 1.8% y los sobrepares en 4.9% contra 9.5%, la fila de los gutshots es de donde sale el rango que sube — el solver toma el grupo del que la ciega grande tiene más y lo convierte entero en una sola acción.

## ¿6-5-2 es un board húmedo o seco?

**Seco arriba, húmedo en el medio.** Un **board húmedo** es el que reparte proyectos — cartas que conectan para escalera o color, de modo que las manos que van por detrás todavía tienen forma de ganar. Un board seco casi no reparte ninguno. En 6-5-2 la distinción corta en las dos direcciones a la vez, y por eso la etiqueta sola no te dice nada aquí.

No hay proyecto de color y — como ya vimos — no hay escalera hecha en ninguno de los dos rangos. En ese sentido el board está seco hasta el hueso: el techo es un set, y los dos jugadores llegan a él con la misma frecuencia.

Pero **el 19.3% del rango de la ciega grande lleva un proyecto de escalera** (0.8% a dos puntas más 18.5% de gutshots), y otro 20.5% recoge un proyecto backdoor de color. Solo el 60.2% no tiene ninguno de los dos. Así que un montón de manos tienen motivo para seguir aunque no hayan ligado nada.

Esa combinación — techo bajo y piso ancho — es lo que produce los números de arriba. Nadie puede apostar un monstruo porque nadie lo tiene, y nadie foldea mucho porque casi todos tienen un out. Un board como [Q♠9♠2♠](/es/blog/monotone-board-strategy) es lo contrario: un techo alto que los dos jugadores temen que el otro ya haya alcanzado. Lo que puedes apostar sigue al techo, no al piso — el mismo principio que la guía de [apuesta de continuación](/es/blog/holdem-continuation-bet) trabaja sobre otras texturas.

## ¿Qué cambia en la mesa?

- **Deja de apostar primero en boards bajos y rainbow solo porque "ligaste algo".** Un 48.3% de equity no es una razón. En 6-5-2 el rango entero apuesta primero el 3.2%, y las manos que lo hacen apenas están comprometidas con ello. La apuesta aquí es de un solo tamaño, un tercio del bote, así que al botón le basta el **19.8%** para pagar — y sus A-high y K-high, el **42.9%** del rango entre los dos, están por encima de esa vara. No los haces foldear, y lo que sí paga trae mezcladas manos que te ganan.
- **Haz check-raise con tus sets, con todos.** Los nueve combos de set suben el 100% de las veces. Hacer slowplay con un set aquí — cuando el botón tiene exactamente los mismos — es tirar a la basura el único bote grande que ibas a ganar.
- **Elige tus faroles por proyecto, no por carta alta.** El rango que sube está construido con gutshots. Un A-high sin proyecto — A-J, A-9 — pertenece al rango que paga, ese 65.6%, no al raise. (A-K nunca llega a este spot: el rango de defensa de la ciega grande se detiene en A-J.)
- **No sobrefoldees ante una apuesta pequeña.** Ante 1.8bb a un bote de 5.5bb el solver conserva el **80.5%** de su rango, por encima de la cifra de equilibrio del 75.3%. Foldear tus K-high y tus parejas débiles ante una sola apuesta pequeña es el hábito más explotable que existe en un board así.

:::readnext[Sigue leyendo]
/es/blog/paired-board-strategy | Tienes más trips que él — y aun así haces check el 97% | /images/gto-srp-paired-oop-es.webp
/es/blog/monotone-board-strategy | El color máximo que hace check siete de cada diez veces | /images/gto-srp-monotone-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver) y ve a **Spots de estudio → Board bajo y rainbow → [⚡ Ver resultados]**.

Lo que hay que buscar es lo que *no* está: **recorre el panel de categorías y encuentra la fila "Escalera" que falta.** Después abre la matriz y mira las casillas de 43s y 43o — en gris para los dos jugadores. Esa ausencia es el artículo entero.

Para llegar a los números del check-raise tienes que dar un paso más, porque el spot de estudio es solo de flop. Haz clic en **Resolver este spot tú mismo**, deja el árbol que carga y córrelo. Cuando termine, haz clic en **Check** y luego en **Bet** en la tira de arriba.

Después abre el **Entrenador GTO** en la barra lateral: te reparte una mano usando los pesos reales del rango y califica tu acción en ciegas grandes perdidas. Gratis, sin instalar nada, sin cuenta.

## Preguntas frecuentes

**Q. ¿Cuándo hay que hacer check-raise en el poker?**

A. Cuando tu rango tiene manos que ganan con un bote más grande y suficientes proyectos para equilibrarlas. En 6♠5♥2♦ eso es el 14.9% del rango de la ciega grande ante una apuesta de 1.8bb: todos los sets, los dos combos de doble pareja y un bloque de gutshots. La prueba no es "¿tengo buena mano?" sino "¿esta mano quiere que el bote crezca, y puedo encontrar faroles que mejoren cuando me paguen?".

**Q. ¿Por qué la ciega grande no apuesta primero en un board bajo?**

A. Porque la equity no es lo que te gana el derecho a apostar primero — la ventaja en la parte alta sí, y este board no se la da a ninguno de los dos. Los sets están repartidos 1.8% contra 1.8%, y la única mano que les ganaría, 4-3, está fuera de los dos rangos. Sin una mano que le gane a lo mejor del rival no hay nada con qué construir bote, así que la ciega grande apuesta primero apenas el 3.2%.

**Q. ¿Por qué la estrategia es tan distinta a la de 9-8-7 con casi la misma equity?**

A. Porque quien apuesta primero lo decide la parte alta del rango, no su promedio. En 9-8-7 la ciega grande llega con 24 combos de escalera hecha; en 6-5-2 ninguno de los dos rangos tiene una. Dos décimas de punto de equity de diferencia, y las frecuencias de apuesta primero salen 23.7% contra 3.2%.

**Q. ¿Con qué manos hay que hacer check-raise en 6-5-2?**

A. Con los nueve combos de set (66, 55, 22), con los dos combos de 65 suited, y después con proyectos de escalera: 98s por el gutshot al siete, 87s por el proyecto a dos puntas, y J4s, Q4s, 54s y 64s por el gutshot al tres. Ninguna de ellas fue elegida por una carta alta — el raise está construido sobre proyectos, de arriba abajo.

**Q. ¿El check-raise está permitido, y es de mala educación?**

A. Es legal en todas partes, y la regla como tal está cubierta en la guía de [acciones de apuesta](/es/blog/holdem-betting-actions). La preocupación por la etiqueta es un resto del pasado: algunos home games antiguos prohibían el check-raise por regla de la casa, y el estigma sobrevivió a la regla. Ya nadie juega así, y los números de arriba son la razón — quítale el check-raise a la ciega grande en este flop y borras el 14.9% de su rango sin nada con qué reemplazarlo.

**Q. ¿Estos números aplican a mi nivel?**

A. Trata las frecuencias de esta página como referencia para las condiciones que coinciden: mano a mano, 100bb, apertura del botón a 2.5bb con rangos de defensa estándar, sin rake. Un detalle es específico de este ejemplo — este spot se resolvió con un solo tamaño de apuesta del 33%, así que el solver nunca llega a elegir uno más grande. Dale dos tamaños y las frecuencias se reparten distinto, aunque la razón de fondo para hacer check no cambia.
`.trim(),
};

export default POST;
