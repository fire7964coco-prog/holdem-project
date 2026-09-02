import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑥ 스페인어판 — 6♣6♦3♥ 페어 보드
 *
 * 소스 = 「lib/posts-en/paired-board-strategy.ts」 (EN 커밋 19c6469d · EN updated 2026-09-02).
 * 방식 = «번역 + 5필드»(spec §4-A-3) — 구조·수치·고지 문장은 EN 축어,
 *        seoTitle·desc·H2·FAQ·내부링크만 es로 재조준했다.
 *
 * ▶ 조준 (「docs/keyword-bank/es-gto-series.md」 §3-⑥)
 *   「set vs trips」 ES 10 / MX 10 — 영어 술어가 검색 표면이다(「board pareado」는 라쿠·DFS 양쪽 null).
 *   정의 층은 holdem-glossary·holdem-hand-rankings 소유 → 이 편은 «6-6-3에서 둘이 어떻게 갈리나»만 가져온다.
 *   훅 = 「más trips y aun así check el 97%」. 「tercia」(MX 40)는 §4-1 판정대로 **1회 병기만**.
 *
 * ▶ 표기 규약 — 수치·카드·레인지 표기(T9s·TT)는 언어 불변(반각 % · 소수점 . · 천단위 , · bb) ·
 *   앱 화면 라벨은 es 라이브 축어(브리프 §1-B: Spots de estudio · Board pareado ·
 *   ⚡ Ver resultados · Entrenador GTO · Trío · Quads · Full house · Sin jugada).
 *
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 → 「esta serie」로만 가리킨다.
 */
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "Tienes más trips que él — y aun así haces check el 97%",
  seoTitle: "Más trips y aun así check 97% — set vs trips en 6-6-3",
  // 143자
  desc: "En 6-6-3 el que paga tiene más trips que el que abrió — 26 combos contra 20 — y hace check el 97% igual. Qué premia de verdad un board pareado.",
  tldr: "En el board pareado bajo 6♣6♦3♥ la ciega grande hace check el 97.0%. Lo raro es que tiene más trips que el botón: 26 combos con un seis contra 20. Hace check igual, porque solo el 18.4% de su rango tiene algo más allá de la pareja del board, y el otro 81.6% es una pelea de cartas altas que gana el botón. Lo que sí gana valor es cualquier par servido por encima del seis — TT tiene un 76.0% de equity aquí.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-es.webp",
  imageAlt: "Resultados del solver GTO de HoldemMaster en un board pareado bajo: la matriz de la ciega grande casi entera en verde, con las filas de quads y full house visibles en el panel",
  tags: [
    "set vs trips",
    "board pareado",
    "trips poker",
    "pares servidos",
    "mdf poker",
    "bet sizing poker",
    "poker gto",
  ],
  content: `
El flop es **6♣ 6♦ 3♥** — cartas bajas, y una pareja entre ellas. Parece un board que no ligó nadie.

Ten TT ahí y tu equity es del **76.0%**. Ese mismo TT va al 54–57% contra AK preflop, así que este flop es *mejor* para él que el cara o cruz de siempre. Ten A9 y no tienes nada — pero cuatro quintas partes del rango de tu rival tampoco tienen nada más que la pareja del board, así que foldear de inmediato es regalar el bote.

**Un board que no ligó nadie es en realidad una pelea por quién tiene mejores cartas altas.** Los flops [con as](/es/blog/a-high-board-cbet) y [con rey](/es/blog/k-high-board-cbet) eran peleas por quién conectó; este es una pelea entre dos rangos que en su mayoría no conectaron. Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | 6♣ 6♦ 3♥ (board pareado bajo)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb
Resultado | La BB hace check el 97.0% — teniendo más trips
:::

> **Respuesta rápida**
> Haz check con casi todo, y defiende mucho más ancho de lo que se siente correcto. Tener un seis no es motivo para apostar primero — apostar solo hace foldear a lo que ya le ganas, así que los seises se quedan en el rango que hace check, y la ciega grande hace check el **97.0%** aquí. Las manos que de verdad ganan en este flop son los pares servidos por encima del seis, y las que hay que dejar de foldear son el A-high y los mejores K-high.

## ¿En qué condiciones salieron estos números?

El botón abre a 2.5bb, la ciega grande paga y el resto foldea — dos jugadores, un bote de 5.5bb, 97.5bb detrás, rangos estándar de 100bb online, dos tamaños de apuesta disponibles a aproximadamente un tercio y tres cuartos del bote, y sin rake modelado. Cambia los rangos o el tamaño y las frecuencias se mueven con ellos.

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | 6♣ 6♦ 3♥ (board pareado, tres palos distintos) |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb |
| Tamaños de apuesta | Alrededor del 33% y del 75% del bote |
| Rake | No modelado |
| Comprobado | 2026-08-20, salida del spot de estudio |

## Set o trips: en un board pareado son trips

**Un set es un par servido que liga con una carta del board; hay trips cuando una carta de tu mano liga con la pareja que ya está en la mesa.** Son la misma jugada — trío (en México, tercia), archivados juntos en la [jerarquía de manos](/es/blog/holdem-hand-rankings) — pero se juegan de forma completamente distinta.

Todos los demás flops de bote de subida simple (single raised pot) de esta serie producían sets (el otro board pareado, A♠A♥6♦, llega después en el grupo de guerra de ciegas): en A-7-2 la ciega grande necesitaba 77 o 22 en la mano. Aquí el board trae su propia pareja, así que **cualquier seis suelto hace trips**, y solo 66 en la mano hace quads.

| Tu mano en 6♣6♦3♥ | Tienes |
|---|---|
| A6, K6s, 96s … cualquier seis suelto | **Trips** — tres seises |
| 66 | **Quads** |
| 33 | **Full house** — full de treses con seises |
| TT, 99, 88, 77 … | **Doble pareja** — tu pareja más los seises del board |

Esa diferencia importa porque los trips son mucho más frecuentes que un set y **tu rival los puede tener con la misma facilidad.** Un set es raro y suele ser la mejor mano; los trips en un board pareado son territorio compartido, y por eso mismo el solver no los trata como una licencia para apostar.

## ¿Cómo juega la ciega grande (BB) un board pareado bajo?

**Check el 97.0%.** En 6♣6♦3♥ la ciega grande apuesta primero solo el 3.0% del tiempo en total — 2.0% con 4.1bb y 1.0% con 1.8bb — y le devuelve la iniciativa al jugador que abrió. Lo que vale la pena mirar dos veces es cuál de los dos tamaños elige cuando sí apuesta, porque este es el único flop de esta serie donde la respuesta se invierte.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **97.0%** | 471.7 |
| Bet 4.1bb (75% del bote) | **2.0%** | 9.6 |
| Bet 1.8bb (33% del bote) | 1.0% | 4.7 |

**La apuesta grande le gana en número a la pequeña** — la primera vez en esta serie. En los dos boards donde apostar primero sí importaba, el tamaño pequeño ganaba por más de dos a uno: 16.8% contra 6.9% en [el spot de donk bet de 9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp") y 8.0% contra 3.2% en el [flop monotone](/es/blog/monotone-board-strategy). Aquí se invierte, y la tabla por mano de más abajo enseña por qué.

## ¿Por qué hacer check si tienes más trips?

**Porque los trips son apenas el 5.3% del rango.** El otro 94.7% es sobre todo la pareja de seises del propio board más una carta alta — y en ese eje el botón va por delante.

Primero, la cuenta. Con 6♣ y 6♦ en el board solo quedan 6♠ y 6♥, así que toda mano del mismo palo con un seis son dos combos, y A6 offsuit son seis. La categoría entera pasa por dos cartas.

| Mano con un seis | BB (rango del caller) | BTN (rango de apertura) |
|---|---|---|
| A6 (suited + offsuit) | ✅ 8 combos | ✅ 8 combos |
| K6s · Q6s | ✅ 4 combos | ✅ 4 combos |
| **J6s · T6s · 96s** | ✅ **6 combos** | ❌ fuera del rango de apertura |
| 86s · 76s · 65s · 64s | ✅ 8 combos | ✅ 8 combos |
| **Total** | **26 combos = 5.3%** | **20 combos = 4.0%** |

**La diferencia son J6s, T6s y 96s — seis combos.** La ciega grande los defiende barato; el botón no los abre nunca.

Ahora abre el plano y la imagen se da la vuelta.

![Infografía de composición de rango que compara las categorías de mano de la ciega grande y el botón en un board pareado bajo](/images/gto-srp-paired-ranges-es.webp "6♣6♦3♥ · reparto por categorías — los trips son del caller, pero la doble pareja y el A-high son del que abrió")

| Categoría | BB (OOP) | BTN (IP) |
|---|---|---|
| Quads (66) | 0.2% | 0.2% |
| Full house (33) | 0.6% | 0.6% |
| Trío (un seis) | **5.3%** | 4.0% |
| Doble pareja | 12.3% | **15.5%** |
| A-high | 26.3% | **31.9%** |
| K-high | **16.5%** | 15.1% |
| Sin jugada | **38.7%** | 32.7% |

**Todo lo que pasa de la propia pareja del board es el 18.4% para la ciega grande y el 20.3% para el botón.** El otro **81.6%** del rango de la ciega grande es la pareja de seises del board más una carta alta — y esa pelea la gana el botón, con su A-high en 31.9% contra 26.3%.

Apostar primero contra eso falla por los dos lados: con un seis solo haces foldear a las manos que ya le ganas, y con todo lo demás anuncias un rango que no aguanta un raise. Así que los seises se quedan en el rango que hace check.

## La equity es 47 contra 53: ¿por qué el EQR es 84 contra 115?

**Porque el board pega igual a los dos rangos, pero los dos jugadores no cobran igual.** En 6-6-3 casi todo el mundo tiene la pareja de seises del board y nada más, lo que mantiene la equity bruta muy igualada. Lo que cada lado se lleva de verdad no se parece en nada.

| | Ciega grande (OOP) | Botón (IP) |
|---|---|---|
| Equity | 47.2% | 52.8% |
| EV (bb) | 2.17 | 3.33 |
| **Realización de equity (EQR)** | **83.7%** | **114.5%** |

La parte del bote que le toca a la ciega grande es ==5.5 × 47.2% = 2.60bb==, y se anota 2.17bb — ==2.17 ÷ 2.60 ≈ 83.7%==. La parte del botón es 2.90bb contra 3.33bb de EV, así que cobra el **114.5%**, más de lo que vale su porcentaje de victorias.

La diferencia de **30.8 puntos** es casi exactamente los 29.1 puntos del [board seco con as](/es/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-es.webp"). **Un board pareado se juega como uno seco** — cuatro quintas partes de cada rango son la misma pareja de seises con otra carta alta, así que la mano transcurre tranquila, y el jugador que actúa último llega a ver qué carta alta apareció antes de elegir. Esa ventaja es toda la diferencia.

:::note[Todos los EQR de esta serie son la cifra que muestra el solver. Si recalculas el EQR a mano, el resultado queda a menos de una décima de punto de la cifra mostrada — eso es redondeo, no una discrepancia.]:::

## ¿Qué tan fuertes son los pares servidos en 6-6-3?

**Casi todos los pares servidos son doble pareja aquí.** TT juega como 10-10-6-6-3. Los dos que rompen el patrón son los que ligan con el board: 66 es quads y 33 es full house.

| Mano | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76.0% | 6.66 | 159.4% | 97.7% |
| 99 | 72.6% | 5.68 | 142.4% | 96.1% |
| 88 | 69.9% | 4.96 | 128.9% | 94.8% |
| 77 | 68.5% | 4.63 | 123.0% | 94.7% |
| 55 | 63.7% | 3.82 | 108.9% | 93.8% |
| 44 | 61.8% | 3.42 | 100.5% | 93.9% |
| 22 | 50.4% | 1.83 | 66.0% | 95.8% |

(Promedios de los seis combos de cada mano; los combos individuales varían alrededor de una décima de punto.)

**TT con su 76.0% es la parte más alta del rango de la ciega grande** una vez que dejas fuera los seises, 33 y 66 — porque JJ y mejores hacen 3-bet preflop y nunca ven este flop.

**Pero abajo se cae el piso.** 44 realiza exactamente su parte de equity — EQR 100.5% — y aun así hace 3.42bb contra los 2.17bb de media del rango, así que no es una mano marginal. La que se rompe es 22: 50.4% de equity, EQR 66.0%, 1.83bb.

**La línea divisoria es el tres, no el seis.** 55 y 44 están las dos por debajo del seis y aun así realizan su parte completa. Un dos está por debajo de *las dos* cartas del board, así que pierde contra 33, contra cualquier mano con un tres, y si sale un tres en el turn o el river, la mano queda anulada (counterfeited) y acaba jugando el board. La regla que se sostiene de verdad no es "las parejas pequeñas están bien en boards bajos" sino **"cualquier pareja por encima del tres está bien — los doses son los únicos que se rompen."**

Hay otro grupo que cuenta como doble pareja y es fácil pasarlo por alto: **cualquier mano con un tres.** A3 juega como seises y treses con un as — que le gana a 22 y pierde contra cualquier pareja por encima del tres.

## ¿Cuántos quads y full houses hay realmente?

**Un combo de quads y tres combos de full house.** Los dos se pueden contar a mano.

- **Quads (66)** — con 6♣ y 6♦ en el board, la única combinación que queda es ==6♠6♥==. El 0.2% de 486 combos es 1.0 — y la tabla por mano tiene exactamente una fila.
- **Full house (33)** — con el 3♥ en el board, quedan ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0.6% × 486 = 2.9.

63 también hace full house, pero ni 63 suited ni 63 offsuit están en ninguno de los dos rangos, **así que 33 es toda la categoría de full house** en este flop.

Esos cuatro combos explican por qué los boards pareados dan miedo. Abre la tabla por mano y lee la columna EQR: 6♠6♥ realiza el **359.7%** de su parte de equity (19.78bb de EV), y los tres 33 van al **309.8%, 309.8% y 309.5%** — tres o cuatro veces su parte del bote. Raros — pero cuando entra uno de ellos, los stacks se van al centro.

## ¿Por qué la apuesta grande es más frecuente que la pequeña?

**Porque los trips y los quads eligen el tamaño grande cuando apuestan.** Mano por mano:

| Mano | Bet 4.1bb (75% del bote) | Bet 1.8bb (33% del bote) | Check |
|---|---|---|---|
| K♠6♠ | **7.8%** | 0.3% | 92.0% |
| Q♥6♥ | **7.9%** | 0.7% | 91.5% |
| J♥6♥ | **9.0%** | 3.3% | 87.7% |
| 6♠6♥ (quads) | **9.6%** | 0.0% | 90.4% |
| 10♠10♥ (doble pareja) | 0.8% | 1.7% | 97.5% |

Los trips y los quads sí toman el tamaño pequeño de vez en cuando — K♠6♠ 0.3%, Q♥6♥ 0.7%, J♥6♥ 3.3% — pero el grande es varias veces eso. La única fila plana en 0.0% es 6♠6♥, y **eso son quads, no trips.** Una doble pareja como TT apenas apuesta, y cuando lo hace elige el pequeño.

Todo se reduce a con qué puede pagar el rival. Un seis es casi imbatible aquí, así que la idea es construir bote — y como la mayoría de los seises están haciendo check de todos modos, **los pocos que sí apuestan tienen todas las razones para ir grande.** La doble pareja va por detrás de cualquier seis y de los tres 33, así que no tiene ningún interés en un bote grande. La clase que quiere bote grande rechaza el tamaño pequeño; la clase que solo quiere un call rechaza el grande.

⚠ **No leas esto como "mientras mejor el kicker, más grande la apuesta" — la tabla va al revés.** La frecuencia de apuesta grande va K♠6♠ 7.8% < Q♥6♥ 7.9% < **J♥6♥ 9.0%**: el kicker más débil es el que más apuesta. La razón son los blockers, no los kickers. J6s, T6s y 96s no están en el rango de apertura del botón, así que tener uno no le quita ningún combo de trips al botón. K6 y Q6 son manos que el botón también tiene, así que sacar una del mazo adelgaza justo el rango que pagaría.

Y esto no explica todas las apuestas grandes — los seises son 26 de 486 combos, aproximadamente una cuarta parte del total de apuesta grande, que ronda los 9.7 combos. El resto viene de otras clases.

La ciega grande apuesta primero solo el 3.0% del tiempo, así que rara vez te toparás con esto en la mesa. Pero es una demostración limpia de un principio: **el tamaño lo elige el rango, no la mano.**

## ¿Deberías foldear A-high ante una [apuesta de continuación](/es/blog/holdem-continuation-bet)?

**Mucho menos seguido de lo que te parece.** Solo el 18.4% de tu rango tiene algo más allá de la pareja del board, así que foldear todo lo demás es regalar el bote.

Ante una apuesta de 1.8bb a un bote de 5.5bb, negarle beneficio a un farol puro exige continuar aproximadamente el ==5.5 ÷ (5.5 + 1.8) = 75.3%== de las veces. A esa estimación se le llama **frecuencia mínima de defensa (MDF)**.

Suma todo el A-high (26.3%) y todo el K-high (16.5%) a ese 18.4% y sigues en el **61.2%**, todavía por debajo del 75.3%.

⚠ **No saltes de ahí a "entonces hay que defender más."** La MDF trata la apuesta del rival como un farol puro sin nada de equity, pero un farol en el flop todavía tiene dos calles por delante, así que sí tiene equity. Y el jugador fuera de posición realiza mal su equity. ⚠ Lo que este spot de estudio no te puede decir es dónde está el óptimo real: está resuelto **solo hasta la primera acción del flop**, así que la respuesta de la ciega grande a una apuesta no está dentro, y si la defensa óptima cae por encima o por debajo de la MDF **no se puede confirmar con este material.**

Para lo que sirve esta aritmética, entonces, no es para "llegar al 75%" sino para **"no foldees por tener una sola carta alta."** Un montón de esos A-high y K-high siguen siendo call aquí, y foldearlos todos ante una c-bet pequeña es exactamente el hábito que te explotan.

(En un board pareado nadie es literalmente A-high: siempre tienes la pareja de seises del board. "A-high" aquí significa esa pareja con un as como tu mejor carta.)

:::note[La MDF simplifica la apuesta del rival a un farol puro. En la práctica la frecuencia correcta también depende de qué tan bien realiza tu mano su equity en las calles siguientes, así que úsala como punto de partida y no como regla dura. El lado de las pot odds de esta misma aritmética está en [pot odds](/es/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), y la [defensa ante 3-bet](/es/blog/holdem-3bet) usa la misma fórmula en preflop.]:::

## ¿Qué cambia en la mesa?

- **No subestimes los pares servidos medianos en boards pareados bajos.** De 77 a TT tienes entre 68 y 76% de equity aquí, la parte más alta del rango que paga. Pero el piso es real: 44 y 55 siguen por encima del promedio del rango, mientras que 22 conserva solo dos tercios de lo que vale su equity, porque liga por debajo de las dos cartas del board.
- **Ligar trips no es motivo para apostar primero.** Los seises apuestan primero más que cualquier otra clase aquí, y aun así hacen check nueve de cada diez veces. Apostar primero solo hace foldear a las manos que ya le ganas; hacer check deja que esas manos metan el dinero solas, y te deja un check-raise o un call-down. ⚠ Lo que este solve no te puede decir es *cuánto* más gana la línea de check-raise: el spot de estudio resuelve **solo la primera acción del flop**, así que la frecuencia de c-bet del botón y cualquier EV de check-raise sencillamente no existen ahí dentro.
- **No foldees A-high ante una sola apuesta pequeña.** El 79.7% del rango del botón tampoco tiene nada más allá de la pareja del board — A-high 31.9%, K-high 15.1% y sin jugada 32.7%.
- **Tu kicker decide la mano.** Solo tres combos le ganan de frente a los trips — los tres full houses de 33. (Los quads quedan fuera de la cuenta: en cuanto tú tienes un seis, 6♠6♥ no puede existir, así que los cuatro combos contados en la sección de full houses son tres desde tu asiento.) Y ni eso se sostiene si tu kicker no es un as. El segundo kicker lo fija el 3 del board, así que la única carta al lado de tu seis es toda la mano: con 76s, el A6, K6, Q6 y 86 del botón te tienen dominado. Trips con kicker débil es un bluff catcher, no una mano para construir bote.

:::readnext[Sigue leyendo]
/es/blog/monotone-board-strategy | El color máximo que hace check siete de cada diez veces | /images/gto-srp-monotone-oop-es.webp
/es/blog/donk-bet-strategy | El flop donde el donk bet es correcto — 9-8-7 | /images/gto-srp-middle-connected-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver) y ve a **Spots de estudio → Board pareado → [⚡ Ver resultados]**.

Lo que hay que buscar es **la única fila de 6♠6♥** en la tabla por mano — los únicos quads que este board permite y, con su **359.7%**, la realización de equity más alta de toda esta serie (la segunda es 6♥6♣ en el [flop bajo y rainbow](/es/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-es.webp") con **318.9%**). Compárala con las tres filas de 33 justo debajo y verás qué pocos combos contiene de verdad la cima de un board pareado.

Después abre el **Entrenador GTO** en la barra lateral: te reparte una mano usando los pesos reales del rango y califica tu acción en ciegas grandes perdidas. Gratis, sin instalar nada, sin cuenta.

## Preguntas frecuentes

**Q. ¿Por qué los trips son más débiles que un set en un board pareado?**

A. Porque el board se los reparte a todos. Un set necesita un par servido que ligue con una carta del board; los trips solo necesitan una carta que ligue con la pareja que ya está a la vista, así que el botón tiene 20 combos aquí contra los 26 de la ciega grande. Encima, tu segundo kicker lo fija el board, lo que significa que un seis con kicker débil está dominado por un seis con uno mejor. La [jerarquía](/es/blog/holdem-hand-rankings) es idéntica — la situación no.

**Q. ¿En qué se convierten los pares servidos en un board 6-6-3?**

A. En doble pareja, en casi todos los casos: TT juega como 10-10-6-6-3. Las excepciones son 66, que es quads, y 33, que es full house. Pero no todas las dobles parejas son iguales — 22 es una pareja de doses por debajo de las dos cartas del board, así que pierde contra cualquier otro par servido y baja al 50.4% de equity.

**Q. ¿Por qué el caller tiene más trips que el que abrió?**

A. Porque la ciega grande ya tiene fichas puestas en el bote y defiende manos que el botón nunca abre. J6s, T6s y 96s son exactamente ese grupo — seis combos extra, que son toda la diferencia de 26 contra 20. Aun así hace check, porque los trips son apenas el 5.3% de su rango.

**Q. ¿Qué es la frecuencia mínima de defensa?**

A. Una estimación de con qué frecuencia tienes que continuar para que un farol puro no pueda ser rentable: bote ÷ (bote + apuesta). Ante una apuesta de 1.8bb a un bote de 5.5bb eso es el 75.3%. Da por hecho que la apuesta es un farol puro, cosa que los rivales reales rara vez son — así que te dice aproximadamente cuánto no puedes foldear, no exactamente cuánto tienes que pagar.

**Q. ¿Cada cuánto viene pareado el flop?**

A. Alrededor del **17.2%** de las veces — más o menos un flop de cada seis. Las tres cartas del flop se esquivan entre sí solo cuando la segunda evita el valor de la primera y la tercera evita las dos: ==(48 ÷ 51) × (44 ÷ 50) = 82.8%==, y el resto viene pareado o mejor. Así que un board pareado no es una rareza: te vas a sentar en uno cada sesión, y conviene tener un plan. (Eso sí, no es el evento *más* común: una mano sin pareja falla el flop por completo el ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67.6%== de las veces, así que liga pareja el **32.4%** — casi el doble de seguido que un board pareado.)

**Q. ¿Estos números aplican a mi nivel?**

A. Úsalos como referencia cuando las condiciones coincidan: mano a mano, 100bb, apertura del botón a 2.5bb con rangos de defensa estándar, sin rake. Hay una desviación que vale la pena conocer — contra un rival que casi nunca hace c-bet en boards pareados, apostar primero más seguido que el 3.0% del solver sí vale la pena, porque si no el bote se va a ir a showdown sin apuestas.
`.trim(),
};

export default POST;
