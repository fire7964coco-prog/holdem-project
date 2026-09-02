import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ③ 스페인어판 — Q♠J♦10♠ 브로드웨이 연결 투톤
 *
 * ▶ 소스 = EN 마스터 lib/posts-en/broadway-board-strategy.ts (824b73d2 · updated 2026-09-02).
 *   방식은 스펙 §4-A-3 «번역 + 5필드» — 구조·수치·전략 논거는 EN 그대로,
 *   es로 다시 정하는 것은 seoTitle·desc·H2·FAQ·내부링크 + 본문 용어 표기뿐이다.
 * ▶ 조준 키워드 (docs/keyword-bank/es-gto-series.md §3-③)
 *   「ventaja de rango vs ventaja de nuts」(개념 · 라쿠 null이지만 SERP에 스페인어 글 실재) ·
 *   「textura del board」 보조 · 「two tone board」 · 훅 = EQR 77.9%.
 *   FAQ 흡수 = 「¿Diferencia entre ventaja de rango y de nuts?」.
 *   ⚠ 「ventaja de rango」 기초 개념은 ①편의 자리다 — ③은 «둘의 차이»만 문다.
 * ▶ 표기 규약 — board(tablero 금지) · 앱 축어(two-tone·rainbow·Overpair·Top pair·Sin jugada) ·
 *   산문 카드는 10♠(레인지 표기 T9s·TT는 축어) · 수치는 언어 불변(반각 % · 소수점 . · bb).
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 — 「esta serie」로 쓴다.
 * 🔴 계산 정본은 docs/gto-solver-series-spec.md §4-B. 게이트 = npm run check:gto.
 */
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Dos tercios del rango llevan proyecto — y aun así hace check",
  seoTitle: "68% con proyecto, 99.9% check — ventaja de nuts en Q-J-10",
  desc: "En Q-J-10 two-tone el 68% del rango de la ciega grande lleva proyecto y aun así hace check el 99.9%. La ventaja de nuts, no la de rango, decide este flop.",
  tldr: "En Q♠J♦10♠, tras una apertura del botón y un pago de la ciega grande, la ciega grande hace check el 99.9% — aunque el 68.4% de su rango lleve proyecto. La causa es la ventaja de nuts: escaleras 10.5% contra 7.1%, sets 2.0% contra 0.7%, sobrepares 2.6% contra 0%. La realización de equity se reparte 77.9% contra 119.4%, la mayor diferencia de los tres flops de seco a húmedo vistos hasta aquí.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-es.webp",
  imageAlt: "Pantalla de resultados del solver GTO de HoldemMaster en un flop broadway conectado two-tone: la cuadrícula de la ciega grande en verde de check con el panel de proyectos a la derecha",
  tags: [
    "ventaja de nuts",
    "ventaja de rango poker",
    "board dinamico poker",
    "two tone board",
    "textura del board",
    "equity realization",
    "poker gto",
  ],
  content: `
El flop viene **Q♠ J♦ 10♠**. Tienes KQ en la ciega grande — top pair más un proyecto a dos puntas. Hacer check aquí tiene que estar mal, ¿no?

Los dos spots anteriores — [A-high](/es/blog/a-high-board-cbet) y [K-high](/es/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-es.webp") — eran boards tranquilos donde casi nada iba con proyecto. Este es lo contrario: **el 68.4% del rango de la ciega grande lleva proyecto aquí.** Y el solver sigue haciendo check el ==99.9%==. Liderar se volvió *más raro*, no más frecuente.

"Hay muchos proyectos" y "puedes apostar primero" son afirmaciones distintas. Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster, leídas en la salida del spot de estudio el 2026-08-19.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | Q♠ J♦ 10♠ (two-tone — dos picas)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb
Resultado | BB hace check el 99.9% — proyectos por todas partes y aun así ningún lead
:::

> **Respuesta rápida**
> La ciega grande hace check el **99.9%** en Q♠J♦10♠, con el 68.4% de su rango llevando proyecto. La razón es la **ventaja de nuts**: escaleras 10.5% contra 7.1%, sets 2.0% contra 0.7%, sobrepares (overpairs) 2.6% contra 0%. Las categorías nuteadas están del lado del botón — solo la doble pareja empata, 6.0% contra 5.9% — así que apostar primero saca del bote las manos a las que ganas y hace que te paguen justo las manos a las que no.

## ¿En qué condiciones salieron estos números?

La misma estructura que el resto de esta serie: el botón abre a 2.5bb, la ciega grande paga y el resto foldea. Dos jugadores, un bote de 5.5bb, 97.5bb detrás, rangos estándar del juego online a 100bb, y dos tamaños de apuesta disponibles, más o menos un tercio y tres cuartos del bote. Lo único que cambió es el flop.

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | Q♠ J♦ 10♠, two-tone (dos picas) |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb |
| Tamaños de apuesta | Alrededor del 33% y del 75% del bote |
| Rake | No modelado |
| Comprobado | 2026-08-19, salida del spot de estudio |

## ¿Por qué se hace check el 99.9% si el board está tan húmedo?

**Porque lo que decide la acción es la *calidad* de las manos hechas, no la *cantidad* de proyectos.**

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **99.9%** | 452.5 |
| Bet 1.8bb (33% del bote) | 0.1% | 0.3 |
| Bet 4.1bb (75% del bote) | 0.0% | 0.2 |

El flop seco K-high era 99.8%. **Cambia a un board donde dos tercios del rango van con proyecto y el check se vuelve más completo, no menos.** Esa inversión es la razón por la que este spot está entre los spots de estudio.

## ¿Qué es la ventaja de nuts en este flop?

**Es quién tiene la parte alta del rango.** En Q-J-10 las categorías se ordenan escalera → set → **doble pareja** → sobrepar, y el botón gana en todas menos en la doble pareja.

| Categoría alta | BB (OOP) | BTN (IP) | De dónde sale la diferencia |
|---|---|---|---|
| Escalera | 7.1% | **10.5%** | La ciega grande **no tiene AK** |
| Trío — aquí siempre es set | 0.7% | **2.0%** | La ciega grande **no tiene QQ ni JJ** |
| Doble pareja | **6.0%** | 5.9% | Empate de hecho — la única fila que gana la ciega grande |
| Overpair | 0.0% | **2.6%** | La ciega grande **no tiene AA ni KK** |

No te equivoques con el orden: **aquí la doble pareja es la tercera mejor categoría, por encima de un sobrepar.** En Q-J-10, JT forma ==J-J-10-10-Q== — doble pareja — mientras que AA es una sola pareja. Así que decir "la parte alta es toda del botón" exagera un poco. La conclusión aguanta igual: las dos categorías de verdad nuteadas, escaleras y sets, son del botón, y la fila empatada pierde contra las dos en este board.

Todas las diferencias se crearon preflop. La ciega grande hace 3-bet con AA, KK, QQ, JJ y AK, así que ninguna llega al flop; el botón abre todas y se las trae.

Las combinaciones coinciden exactamente. Solo tres manos hacen escalera aquí: ==AK (A-K-Q-J-10)==, ==K9 (K-Q-J-10-9)== y ==98 (Q-J-10-9-8)==. Ninguna de las cartas que necesitan — el as, el rey, el nueve, el ocho — está en el board, así que cada una son 4 × 4 = 16 combos. La ciega grande tiene K9 y 98, o sea **32 combos**; el botón suma AK y llega a **48**. El 7.1% y el 10.5% del solver son 32.2 y 48.1 combos — los mismos números.

**La diferencia entera es una mano: AK.** Una sola decisión de 3-bet preflop mueve esa parte de las nuts del flop.

## Ventaja de rango vs ventaja de nuts: ¿cuál es la diferencia?

**La ventaja de rango es quién es más fuerte en promedio; la ventaja de nuts es quién tiene más de las mejores manos.** Suelen ir juntas, y este flop es el caso en el que no.

| | Ventaja de rango | Ventaja de nuts |
|---|---|---|
| Pregunta que responde | ¿Qué rango tiene más equity en conjunto? | ¿Quién tiene las manos de arriba? |
| En Q-J-10 | Casi pareja — 46.7% contra 53.3% | Desequilibrada — escaleras, sets y sobrepares favorecen al botón |
| Qué decide | Si apuestas o no | **Cuánto apuestas, y quién puede subir** |

La equity promedio dice que este flop es casi un cara o cruz. La parte alta del rango dice que un jugador nunca va a tener que abandonar una apuesta grande ante una subida y el otro nunca puede hacerla. Cuando las dos no coinciden, **la ventaja de nuts decide el tamaño** — y, para el jugador que no la tiene, decide que apostar primero no es una opción.

## ¿Cuánto de cada rango va con proyecto?

**Contando solo proyectos reales: 68.4% la ciega grande, 68.7% el botón.** Suma los proyectos backdoor de color y llega al 75.2% y al 74.4% — tres cuartos de los dos rangos.

![Infografía de composición de rango que compara las categorías de mano de la ciega grande y del botón en un board broadway conectado two-tone](/images/gto-srp-broadway-ranges-es.webp "Q♠J♦10♠ · reparto por categorías — las cuatro filas de arriba son las que deciden el flop")

| Proyecto | BB (OOP) | BTN (IP) |
|---|---|---|
| Proyecto combinado (escalera + color) | 5.3% | 4.1% |
| Proyecto de color | 2.4% | 2.0% |
| Proyecto a dos puntas | 28.7% | 27.7% |
| Gutshot | 32.0% | 34.9% |
| Proyecto backdoor de color | 6.8% | 5.7% |
| Sin proyecto | **24.7%** | **25.5%** |

**Los proyectos se reparten casi por igual.** En el flop K-high, el 72.2% del rango de la ciega grande no tenía ningún proyecto; aquí es un cuarto. (Este es un eje distinto del de la tabla de categorías — cada uno suma 100% por su cuenta, y el eje de proyectos lee **solo lo que sigue en proyecto** — una escalera ya hecha que además lleva dos picas, como K♠9♠, cae en una fila de color, mientras que una que no lleva nada cae en sin proyecto.)

Así que la pelea en este board no va de quién tiene más proyectos. Los proyectos se cancelan, y lo que no se cancela es la ventaja de nuts. Si contar outs es la parte que quieres afianzar, empieza por [probabilidad de proyecto](/es/blog/holdem-drawing-odds).

## ¿Por qué el top pair es peligroso aquí?

**Porque el 21.0% del rango del botón ya le gana.** Eso son escaleras 10.5% más sets 2.0% más doble pareja 5.9% más sobrepares 2.6%.

En el flop seco K-high, la misma cuenta daba **3.6%** — sets 1.9%, doble pareja 0.4%, sobrepares 1.3%.

| Parte del rango del botón que ya le gana al top pair | |
|---|---|
| Flop seco K-high (K-8-3) | 3.6% |
| **Flop broadway (Q-J-10)** | **21.0%** |

**El mismo "top pair", unas seis veces el riesgo.** Encima, el 68.7% del rango del rival te sigue persiguiendo con proyecto por el turn y el river. Empujar una pareja durante tres calles en Q-J-10 significa que la acción grande que te llega de vuelta casi nunca es una a la que le ganas. Este es un bote para controlar, no para construir.

## ¿Por qué el EQR es 78 contra 119 si la equity es 47 contra 53?

**Porque cuantas más decisiones fuerza un board, más vale el asiento que actúa último.**

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.7% | 53.3% |
| EV (bb) | 2.00 | 3.50 |
| **Realización de equity (EQR)** | **77.9%** | **119.4%** |

El método está desarrollado en [el spot K-high](/es/blog/k-high-board-cbet). Aquí: la parte de equity de la ciega grande son ==5.5 × 46.7% = 2.57bb== contra un 2.00bb real, que es el 77.9%; el botón convierte una parte de 2.93bb en 3.50bb.

Pon los tres flops en fila y la tendencia se ve limpia.

| Flop | EQR BB | EQR BTN | Diferencia |
|---|---|---|---|
| A-7-2 (seco) | 84.0% | 113.1% | 29.1 puntos |
| K-8-3 (seco) | 80.7% | 116.7% | 36.0 puntos |
| **Q-J-10 (conectado, two-tone)** | **77.9%** | **119.4%** | **41.5 puntos** |

Tres spots hacen que parezca *board más movido, diferencia más ancha*. **Esa regla se rompe en el spot siguiente** — [9♥8♥7♣](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp") es, igual que Q-J-10, tres cartas seguidas en un board two-tone, y su diferencia es de **13.2 puntos, la más estrecha de los siete botes de subida simple (single raised pots)**, con la ciega grande realizando el 93.2%, lo más alto de esos siete (en el conjunto de esta serie el 117.8% del bote de 3-bet de Q-10-7 es más alto). Lo que abre la diferencia no es el movimiento del board sino **de quién es la parte alta**: Q-J-10 le entrega AK, QQ, JJ, AA y KK directamente al botón, mientras que en 9-8-7 esas mismas cartas no ligan con el board. ⚠ Tampoco es que allí den igual — 9-8-7 reparte los sobrepares **1.3% contra 6.4%**, una diferencia más ancha que el 0% contra 2.6% de Q-J-10. Pero esa ventaja en sobrepares es frágil en un board conectado, y por eso no cierra la parte alta. Por qué actuar último vale lo que vale: [estrategia de posición](/es/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## ¿Cómo debe apostar el botón (BTN) un board dinámico como este?

**No solo pequeño — aquí el tamaño grande entra en la mezcla.** Con la ventaja de nuts, una apuesta grande es difícil de subir: las escaleras, los sets y los sobrepares están todos de un lado, así que el otro jugador tiene poco con lo que contraatacar.

Eso es lo contrario de la receta del board seco. Allí, pequeño y frecuente funcionaba porque el objetivo era sacar el aire. Aquí, el **68.4%** del rango del rival va con proyecto, así que **los folds salen caros de comprar** — el tamaño pequeño por sí solo no puede hacer el trabajo y el grande tiene que acompañarlo. ⚠ No lleves eso hasta "entonces la frecuencia baja": este spot de estudio resuelve solo la primera acción del flop, así que ni el reparto real de tamaños del botón ni su frecuencia de c-bet entran en este cálculo. La versión board por board está en [estrategia de c-bet](/es/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Todo lo de arriba es salida del solver; esta sección es una lectura de esa salida. El spot de estudio solo pre-resuelve la primera acción de la ciega grande, así que el reparto de tamaños del botón no está en esta pantalla. Abre "Resolver este spot tú mismo" y recorre el árbol si quieres los números reales.]:::

## ¿Qué cambia en la mesa?

- **Llevar proyecto no es razón para liderar desde la ciega grande.** Aquí los dos jugadores tienen más o menos los mismos proyectos, así que un proyecto no es ventaja — liderar con uno se estrella contra las manos hechas que solo tiene tu rival.
- **No juegues el top pair a tres calles de valor en Q-J-10.** El 21.0% de su rango ya va por delante y casi todo el resto te persigue con proyecto. Pagar hasta el final le gana a apostar contra eso.
- **Recuerda qué hay dentro de ese check.** El 99.9% de la ciega grande contiene 32 combos de escalera (K9, 98) y 27 combos de doble pareja. Esas manos no hacen check por débiles — **el botón cbetea este board con frecuencia alta, así que devolverle la acción rinde más que liderar contra él**, y además evita que el rango que hace check se quede solo en aire. Así que no leas el check como nada ni descartes un check-raise. ⚠ Cuál es la *frecuencia* de ese check-raise, este cálculo no lo puede decir: el spot de estudio se detiene en **la primera acción del flop**, y todo lo que va después necesita "Resolver este spot tú mismo".
- **Contra rivales que nunca se retiran con proyecto, sube el tamaño en lugar de apostar más a menudo.** Comprar folds es lo que falla aquí; cobrarles a los proyectos es lo que funciona.

:::readnext[Sigue leyendo]
/es/blog/k-high-board-cbet | El flop K-high donde el que pagó hace check el 99.8% | /images/gto-srp-dry-king-oop-es.webp
/es/blog/a-high-board-cbet | Top pair y aun así hace check el 98.2%: A-7-2 | /images/gto-srp-dry-ace-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver), ve a **Spots de estudio → Broadway conectado, two-tone → [⚡ Ver resultados]**, y la pantalla de arriba aparece sin esperas.

En este spot, lee el **panel de Proyectos de la derecha** — los proyectos a dos puntas y los gutshots juntos pasan del 60%, la primera vez en esta serie. Después cambia el selector de jugador a **IP (BTN (open-raiser))** y mira la fila Escalera, 10.5%: de esa única fila sale el artículo entero.

Para entrenarlo en vez de leerlo, abre el **Entrenador GTO** en la barra lateral: reparte manos con los pesos reales del rango y califica tu acción en ciegas grandes perdidas. Gratis, sin nada que instalar y sin cuenta.

## Preguntas frecuentes

**Q. ¿Qué manos hacen escalera en Q-J-10?**

A. Tres: AK para A-K-Q-J-10, K9 para K-Q-J-10-9 y 98 para Q-J-10-9-8. Ninguna de las cartas que necesitan — as, rey, nueve, ocho — está en el board, así que cada una son 4 × 4 = 16 combos, 48 en total. La ciega grande hace 3-bet con AK preflop, lo que la deja en 32.

**Q. ¿Un board húmedo no es el lugar para liderar de semifarol?**

A. No — la cuenta de proyectos por sí sola no lo decide. Hay que pesar juntas la distribución de manos hechas, la ventaja de nuts y los blockers. Aquí los proyectos a dos puntas son 28.7% contra 27.7% — prácticamente idénticos — mientras que las escaleras completadas son 7.1% contra 10.5% a favor del botón. Un lead necesita la parte alta del rango de tu lado, no el promedio, y este flop es justo lo contrario. Hay un board en los spots de estudio donde la condición sí se cumple de verdad — el [conectado medio 9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp"), donde la ciega grande lidera en lugar de hacer check.

**Q. ¿Cuál es la diferencia entre ventaja de rango y ventaja de nuts?**

A. La ventaja de rango va del promedio — qué rango tiene más equity contando todas las manos. La ventaja de nuts va del extremo — quién tiene la parte alta de la clasificación, cuyo orden en Q-J-10 es escalera, set, doble pareja, sobrepar. La equity está casi igualada, 46.7% contra 53.3%, y aun así tanto las escaleras como los sets favorecen al botón (solo la doble pareja queda a la par, 6.0% contra 5.9%). Cuando se separan así, la ventaja de nuts es la que fija el tamaño de apuesta.

**Q. ¿Puedo usar estos números en cualquier límite?**

A. Como referencia cuando las condiciones coincidan: mano a mano, 100bb, rangos estándar de apertura y de pago, sin rake. Este board en particular se desequilibra más con profundidad — a 200bb los 3.4 puntos de diferencia en escaleras importan mucho más que aquí, porque queda más dinero que perder contra la mano que tú no puedes tener.
`.trim(),
};

export default POST;
