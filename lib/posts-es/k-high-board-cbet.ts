import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ② 스페인어판 — K♠8♦3♣ 드라이 K하이 보드
 *
 * ▶ 소스 = EN 마스터 lib/posts-en/k-high-board-cbet.ts (19c6469d · updated 2026-09-02).
 *   방식은 스펙 §4-A-3 «번역 + 5필드» — 구조·수치·전략 논거는 EN 그대로,
 *   es로 다시 정하는 것은 seoTitle·desc·H2·FAQ·내부링크 + 본문 용어 표기뿐이다.
 * ▶ 조준 키워드 (docs/keyword-bank/es-gto-series.md §3-②)
 *   「board K-high」(볼륨 0 · 개념어) · 훅 = 99.8% check · 「¿cuándo no cbetear?」(cbet 글 소유 롱테일만) ·
 *   「check back range」 · 「top pair poker」 10. FAQ 흡수 = 「¿A-high o K-high, cuál es peor para BB?」.
 *   ⚠ 「c bet poker」 헤드텀은 holdem-continuation-bet 소유 — seoTitle에 「c-bet」 단독 금지.
 *   ⚠ 「board seco」·「ventaja de rango」는 ①편의 자리다 — 여기서 물지 않는다.
 * ▶ 표기 규약 — board(tablero 금지) · 앱 축어(seco·rainbow·Overpair·Top pair·Sin jugada·A-high/K-high) ·
 *   산문 카드는 10♠, 레인지 표기(T9s·TT)는 축어 · 수치는 언어 불변(반각 % · 소수점 . · bb).
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 — 「esta serie」로 쓴다.
 * 🔴 계산 정본은 docs/gto-solver-series-spec.md §4-B. 게이트 = npm run check:gto.
 */
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "El flop K-high donde el que pagó hace check el 99.8%",
  seoTitle: "El flop donde la ciega grande hace check el 99.8% — K-8-3",
  desc: "En K-8-3 la ciega grande hace check el 99.8% — un range check más puro que en A-high. Una mano ausente lo explica y el EQR hace el resto.",
  tldr: "En K♠8♦3♣, tras una apertura del botón y un pago de la ciega grande, la ciega grande hace check el 99.8% de su rango — un range check todavía más puro que el 98.2% de un flop A-high. Lo causan dos cosas: aquí la ciega grande no tiene ningún sobrepar, porque AA hace 3-bet preflop, y la realización de equity se reparte 80.7% contra 116.7%.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-es.webp",
  imageAlt: "Pantalla de resultados del solver GTO de HoldemMaster en un flop seco K-high: la cuadrícula 13x13 de la ciega grande casi entera en verde de check",
  tags: [
    "board k-high",
    "cbetear siempre",
    "range check",
    "check back range",
    "top pair poker",
    "equity realization",
    "poker gto",
  ],
  content: `
El flop viene **K♠ 8♦ 3♣**, rainbow. Tienes K9 en la ciega grande — top pair. Ya aprendiste a hacer check en la versión con as. ¿Seguro que con un rey es distinto?

Lo es. **Se hace check todavía más.** La ciega grande hace check el ==99.8%== aquí, de forma más completa que el 98.2% [del flop A-high](/es/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-es.webp"). Los dos tamaños de apuesta juntos se llevan el 0.2% — uno de cada 474.

Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster, leídas en la salida del spot de estudio el 2026-08-19.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | K♠ 8♦ 3♣ (rainbow)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb
Resultado | BB hace check el 99.8% — más puro que en el flop A-high
:::

> **Respuesta rápida**
> Haz check con todo, y cuenta con defender ancho después. Uno de cada 474 lidera, así que trata el lead como una opción que aquí no existe. Dos cosas hacen este check más puro que el de la versión con as: en este board la ciega grande **no tiene ningún sobrepar (overpair)** — AA hace 3-bet preflop — y la realización de equity se reparte **80.7% contra 116.7%** aunque la equity esté casi igualada.

## ¿En qué condiciones salieron estos números?

El botón abre a 2.5bb, la ciega grande paga y el resto foldea — dos jugadores, un bote de 5.5bb, 97.5bb detrás. Los rangos son las aproximaciones estándar del juego online a 100bb, el flop es K♠ 8♦ 3♣ con tres palos distintos, y el solver dispone de dos tamaños de apuesta, más o menos un tercio y tres cuartos del bote. El rake no está modelado.

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | K♠ 8♦ 3♣, rainbow (los tres palos distintos) |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb |
| Tamaños de apuesta | Alrededor del 33% y del 75% del bote |
| Rake | No modelado |
| Comprobado | 2026-08-19, salida del spot de estudio |

El bote es ==2.5 de apertura + 2.5 de pago + 0.5 de ciega pequeña muerta = 5.5bb==, y el stack efectivo son 100bb menos la apertura de 2.5bb.

## ¿Con qué frecuencia hace check la ciega grande (BB) en K-8-3?

**El 99.8%.** El 0.2% restante se reparte entre los dos tamaños de apuesta.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **99.8%** | 473.0 |
| Bet 1.8bb (33% del bote) | 0.1% | 0.6 |
| Bet 4.1bb (75% del bote) | 0.1% | 0.4 |

Uno de cada 474 — más cerca de un residuo de redondeo que de una estrategia. **En un flop seco K-high la ciega grande no tiene ningún lead**, y en la práctica no pierdes nada tratándolo así.

## ¿Por qué este check es aún más puro que en un flop A-high?

**Porque aquí la ciega grande no tiene ningún sobrepar, y en el flop A-high no hay sobrepar que tener.** En K-8-3 la única pareja servida por encima del board es AA — y la ciega grande hace 3-bet con AA preflop, así que nunca llega. Sobrepares: **0.0% para la ciega grande, 1.3% para el botón.**

En A-7-2 esa columna no existe para nadie: nada está por encima de un as. Así que a los dos rangos les falta lo mismo y sus techos se parecen. En un board K-high, el techo es de un solo jugador.

Los sets dicen lo mismo. Las parejas servidas que ligan set aquí son KK, 88 y 33, y **la ciega grande solo tiene 88 y 33.**

| Pareja servida que liga set | BB | BTN |
|---|---|---|
| KK | ❌ (hace 3-bet preflop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Parte del rango** | **1.3%** | **1.9%** |

El recuento de manos coincide exactamente con el solver. La ciega grande tiene 88 y 33 con tres combos cada una — seis de 474, o sea 1.27%. El botón suma KK: nueve de 480, 1.88%.

## ¿En qué se diferencian los dos rangos?

**Las categorías fuertes están del lado del botón, las débiles del lado de la ciega grande.** Puestas una junto a otra, la diferencia es evidente.

![Infografía de composición de rango que compara las categorías de mano de la ciega grande y del botón en un board seco K-high, barras verdes y doradas en paralelo](/images/gto-srp-dry-king-ranges-es.webp "K♠8♦3♣ · reparto por categorías — la parte alta del rango es del botón")

| Categoría | BB (OOP) | BTN (IP) |
|---|---|---|
| Trío — aquí siempre es set | 1.3% | **1.9%** |
| Doble pareja | **0.8%** | 0.4% |
| Overpair | 0.0% | **1.3%** |
| Top pair (K) | 12.7% | **14.4%** |
| Segunda pareja (8) | **10.8%** | 10.0% |
| Pareja débil | **3.2%** | 2.5% |
| Underpair | 8.9% | **11.3%** |
| A-high | 27.0% | **30.0%** |
| Sin jugada | **35.4%** | 28.3% |

Léela de arriba abajo. **Todas las categorías de la parte alta del rango — sets, sobrepares, top pair — son del botón, y la más débil, sin jugada, pesa 7.1 puntos más en la ciega grande.** Las categorías en las que gana la ciega grande son doble pareja, segunda pareja y pareja débil. **La doble pareja es la segunda mejor categoría de este board**, por delante de un sobrepar, y la ciega grande tiene el doble — pero el 0.8% de 474 combos son **cuatro manos.** No sostiene el rango porque casi no hay, no porque valga poco. Las otras dos son de verdad intermedias. Apostar primero con un rango de esa forma significa que tu mitad débil paga a su mitad fuerte.

## ¿Por qué casi un tercio de ambos rangos es A-high?

**Pasa en cualquier board sin as.** El A-high es el 27.0% del rango de la ciega grande y el 30.0% del rango del botón, cerca de un tercio cada uno. En A-7-2 ese grupo no existe, porque cada as es top pair al instante. Así que el contraste no es "K-high contra todo lo demás" sino **"boards con as contra boards sin as"** — en el flop 8-5-2 que aparece más adelante en esta serie, resuelto con un rango de 3-bet, el A-high sube al **48.2%**.

Ese grupo es lo que hace interesante este flop. AQ y AJ no tienen pareja y aun así le ganan a todas las manos de la columna "sin jugada" del rival, así que tienen valor de showdown. En el botón no son c-bets automáticas: una parte de las veces hacen check back y se llevan el showdown gratis.

La misma AQ en la ciega grande vale menos, porque llegar al showdown sin posición es más difícil. **Las mismas cartas, distinto valor según el asiento** — que es justo lo que mide la sección siguiente.

## ¿Por qué el EQR es 81 contra 117 si la equity es 46 contra 54?

**La equity es con qué frecuencia ganas el bote; la realización de equity es cuánto de eso cobras de verdad.** No son el mismo número.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.3% | 53.7% |
| EV (bb) | 2.06 | 3.44 |
| **Realización de equity (EQR)** | **80.7%** | **116.7%** |

La aritmética: el bote es de 5.5bb, así que la parte de equity de la ciega grande son ==5.5 × 46.3% = 2.55bb==, mientras que su valor esperado real es 2.06bb — esa razón es el 80.7%. La parte del botón son 2.95bb contra un EV de 3.44bb, que es por lo que queda por encima del 100%.

:::note[Las cifras de EQR de esta serie son las que muestra la pantalla del solver. Recalcularlas a partir de la equity y del EV redondeados de esa misma pantalla puede quedar a una décima de punto — eso es redondeo, no una contradicción.]:::

El flop A-high era 84.0% contra 113.1%. **La misma textura seca, y una diferencia más ancha en el board con rey.** Pero no porque este board sea *más tranquilo*: las dos mayores diferencias de EQR de esta serie están en boards empapados de proyectos — el [flop Q-J-10 two-tone](/es/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-es.webp") con 41.5 puntos y el bote de 3-bet de Q-10-7 con 42.7. Lo que abre la diferencia aquí es **una sola columna de la parte alta** — en A-7-2 ninguno de los dos tiene sobrepar, mientras que en K-8-3 el botón tiene 1.3% y la ciega grande no tiene nada. Por qué el asiento en sí vale tanto lo cubre [estrategia de posición](/es/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## ¿De verdad no hay ningún proyecto aquí?

**Ningún proyecto en absoluto.** K, 8 y 3 vienen en tres palos distintos y están demasiado separadas para conectar, así que no hay proyecto de color ni proyecto a dos puntas para nadie — **y tampoco gutshot.** Un proyecto de escalera en el flop necesita dos cartas del board dentro de una misma secuencia de cinco, porque tú solo pones dos, y del K al 8 hay cinco valores de distancia, igual que del 8 al 3. Ninguna secuencia contiene dos de ellas.

| Proyecto | BB | BTN |
|---|---|---|
| Backdoor de color (necesita dos más del palo) | 27.8% | 22.3% |
| Sin proyecto | **72.2%** | **77.7%** |

Lo que queda son los backdoors. El **proyecto backdoor de color** que cuenta la tabla necesita que el turn *y* el river traigan el mismo palo, así que se completa solo el ==10/47 × 9/46 = alrededor del 4.2%== de las veces. La tabla no los cuenta, pero también hay **escaleras backdoor** — QJ, JT y T9 pasan por el rey del board; 67 y 65 por el ocho; 54 por el tres. Sigue importando: cuando toca elegir faroles, **una mano con backdoor le gana a una mano con nada**, porque si el turn trae ese palo ya tienes un proyecto real y una razón para disparar otra vez — el punto de partida de una c-bet retrasada en el turn.

## ¿Hay que cbetear siempre un flop K-high?

**Casi, a un tamaño pequeño, pero "siempre" es la palabra equivocada para un grupo de manos.** La ciega grande tiene un 35.4% de manos sin jugada, así que un tercio del rango se retira de inmediato. Y **el 72.2% del rango entero no tiene proyecto** — fíjate en el denominador: esa cifra cuenta todo el rango, top pair (12.7%), segunda pareja (10.8%) y sets incluidos, así que no es un subconjunto del bloque de sin jugada. Significa que es poco probable que el panorama cambie en las calles siguientes. Apostar alrededor de un tercio del bote con casi todo tu rango es lo estándar.

El consejo habitual dice que las manos A-high con valor de showdown deberían hacer check back. En este board eso es **medio cierto**. A un tamaño pequeño, AQ y AJ mezclan apuestas lo bastante a menudo — hacen foldear a manos como QJ, JT y T9, que tienen dos cartas vivas pero ninguna pareja, y un as en una calle posterior les da la mejor pareja del board. Pero también pierden poco si hacen check, así que de aquí sale buena parte del **rango de check back**. Ni "apostar siempre" ni "hacer siempre check back" es correcto; la respuesta es la frecuencia.

:::note[⚠ Esta sección es una lectura de la composición de los rangos, no un número resuelto. El spot de estudio solo pre-resuelve la primera acción del flop — la de la ciega grande — así que la frecuencia exacta de c-bet del botón no está en esta pantalla. Abre "Resolver este spot tú mismo" y recorre el árbol para obtenerla.]:::

## ¿Qué cambia en la mesa?

- **Si pagaste una subida mano a mano en un flop seco K-high, apostar de salida no es una opción.** Ni siquiera con un rey. La lógica del range check del flop A-high se aplica aquí con más fuerza, no con menos. Aun así, la condición es la **forma de tu rango**, no la del board — donde la parte alta de tu rango es más gruesa que la suya, la ciega grande sí lidera. El contraejemplo es el [flop 9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp"), donde la ciega grande lidera el **23.7%** de las veces.
- **Hacer check no es check-fold.** Frente a la c-bet pequeña, la ciega grande continúa ancha — todos los reyes, los ochos, los underpairs, A-high con backdoor. El top pair es un call, y los check-raises salen sobre todo de 88, 33 y las dobles parejas.
- **En el botón, no les des a AQ y AJ un trato fijo.** Apostar pequeño y hacer check back son las dos defendibles; ajusta la mezcla según si ese rival de verdad se retira con sobrecartas.
- **No leas el check como debilidad — contra un rival equilibrado.** Ese rango que hace check todavía tiene los sets (88, 33) y un 12.7% de top pair. En límites bajos suele ser al revés, porque mucha gente lidera sin más sus manos fuertes, así que sigue apostando por valor y trata el check-raise como un costo ocasional.

:::readnext[Sigue leyendo]
/es/blog/a-high-board-cbet | Top pair y aun así hace check el 98.2%: A-7-2 | /images/gto-srp-dry-ace-oop-es.webp
/es/blog/holdem-continuation-bet | Por qué 'cbetear cada flop' te sangra fichas | /images/holdem-continuation-bet-hero.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver), ve a **Spots de estudio → Board seco K-high → [⚡ Ver resultados]**, y esta pantalla aparece sin esperas. Después cambia el selector de jugador a **IP (BTN (open-raiser))** — la tabla de composición de rango de más arriba se lee directamente de ese panel, y comparar los dos lados es la forma más rápida de ver por qué uno de ellos no puede apostar.

Para entrenar el spot en vez de leerlo, abre el **Entrenador GTO** en la barra lateral: te reparte una mano con los pesos reales del rango, eliges una acción y te califica la elección en ciegas grandes perdidas. Gratis, sin nada que instalar y sin cuenta.

## Preguntas frecuentes

**Q. ¿Por qué la ciega grande no apuesta nunca en K-8-3?**

A. Porque las manos más fuertes que permite este board faltan en el rango de pago: el set máximo (KK) y el único sobrepar (AA) están los dos ausentes, mientras que sin jugada se acumula en el 35.4%. La ciega grande sí tiene sets de 88 y 33 y algo de doble pareja, pero no la suficiente para sostener un lead. Liderar con un rango de esa forma construye un bote para que lo gane otro. El solver hace check el 99.8%.

**Q. ¿Qué es peor para la ciega grande, un flop A-high o uno K-high?**

A. El K-high. La equity es incluso mayor — 46.3% contra el 45.1% de A-7-2 — pero la realización de equity es menor, 80.7% contra 84.0%. La ciega grande gana el bote más veces aquí y cobra menos de él.

**Q. ¿Qué es un rango de check back?**

A. Las manos que el jugador en posición decide no apostar, guardándolas para ver un showdown gratis o para que su rango de check no sea solo debilidad. En este flop se construye en buena parte con manos A-high como AQ y AJ, que le ganan al aire del rival pero ganan poco apostando.

**Q. ¿Cuánto vale un proyecto backdoor de color?**

A. Se completa alrededor del 4.2% de las veces desde el flop, así que no es razón para pagar por sí solo. Su valor está en la elección de faroles: una mano que consigue un proyecto real en el turn te da una razón para seguir apostando, y de ahí salen las c-bets retrasadas.

**Q. ¿Puedo usar estos números en cualquier límite?**

A. Como referencia cuando las condiciones coincidan: mano a mano, 100bb, rangos estándar de apertura y de pago, sin rake. Lo que hay que vigilar en este board es la posición del que abrió — si la subida vino desde UTG y no del botón, ese rango tiene todavía más reyes y ases, y la situación de la ciega grande es peor que la que se ve aquí.
`.trim(),
};

export default POST;
