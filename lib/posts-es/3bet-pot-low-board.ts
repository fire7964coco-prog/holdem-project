import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑩ 스페인어판 — 8♦5♣2♠ 3벳팟 (BB 3벳터 vs BTN 콜러)
 *
 * ★★ «번역 + 5필드» (스펙 §4-A-3 · 브리프 docs/es-gto-series-translation-brief.md).
 *    소스 EN = lib/posts-en/3bet-pot-low-board.ts · 커밋 824b73d2 · EN updated 2026-09-02
 *    → masterUpdated = 2026-09-02. 구조·수치·논거·고지 문장은 EN 1:1, 스페인어만 바꾼다.
 *
 * ▶ 조준 키워드 (팩 docs/keyword-bank/es-gto-series.md §3 ⑩행)
 *    rango polarizado poker 10 · overpair poker 10(본문은 «sobrepar (overpair)») ·
 *    fold equity poker 20 · 3bet pot 10 · 훅 = 세 콤보만 맞고 97.8% 벳.
 *
 * ▶ 표기 규약 — 산문 카드는 10♠, 레인지 표기(A5s·KQs·TT)와 앱 라벨은 축어.
 *    수치는 EN 포맷 그대로. 앱 UI는 브리프 §1-B 축어만(칩 «Bet 14.9bb (66% del bote)»).
 *
 * 🔴 드로우 3행은 상호배타다 — gutshot 4.8% · backdoor 16.9% · sin proyecto 78.3%.
 *    여집합으로 흡수하지 마라(히어로 이미지에 16.9%가 그대로 찍혀 있다).
 * 🔴 «보드가 3벳 레인지와 전혀 안 맞는다» 류(브리프 §4 앵커) 금지 ·
 *    Top pair 0%는 그대로 둔다 · 편 수 하드코딩 금지(«esta serie»).
 */
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "Tres combos ligan este flop — y aun así apuesta el 97.8%",
  seoTitle: "Un rango polarizado apuesta 97.8% en un board que falló",
  desc: "En un bote de 3-bet sobre 8-5-2, solo tres combos del rango de la ciega grande ligaron el board — y dispara dos tercios del bote el 97.8% de las veces.",
  tldr: "Tras un 3-bet de la ciega grande y un call del botón, el flop 8♦5♣2♠ recibe una apuesta de dos tercios del bote el 97.8% de las veces. Lo raro: de los 83 combos de la ciega grande, exactamente tres ligaron pareja con este board — los A5s — y ni 88 ni 55 ni 22 están en el rango. La apuesta entra igual porque el rango se parte en 36 combos de sobrepares y 40 combos de A-high sin nada en medio. Una forma polarizada apuesta grande.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-es.webp",
  imageAlt: "Resultados del solver GTO de HoldemMaster para un flop 8-5-2 rainbow en un bote de 3-bet, con la matriz de la ciega grande casi entera coloreada para la apuesta grande",
  tags: [
    "rango polarizado poker",
    "overpair poker",
    "dry board poker",
    "3bet pot",
    "fold equity poker",
    "poker gto",
  ],
  content: `
El flop viene **8♦ 5♣ 2♠**. Hiciste 3-bet antes del flop, el board es todo lo seco que puede ser y tú llevas A-K. Ni pareja ni proyecto. **Aquí el check parece lo obvio.**

El solver hace lo contrario. **Apuesta 14.9bb — dos tercios del bote — el 97.8% de las veces.** Y esto no es una afirmación sobre A-K. De los 83 combos de la ciega grande (BB), los que de verdad *ligaron pareja* con este board son ==tres==.

Por qué un rango que no ligó nada dispara el tamaño grande es para lo que están los números de abajo. Todos salen del [solver GTO gratuito](/es/solver) de HoldemMaster.


:::stripe
Spot | La BB hace 3-bet → el BTN paga (mano a mano)
Flop | 8♦ 5♣ 2♠ (rainbow, sin conexión)
Bote · stack | Bote 22.5bb · stack efectivo 89bb · **SPR 4.0**
Resultado | Dos tercios del bote 97.8% — tres combos ligaron este board
:::

> **Respuesta rápida**
> En 8-5-2, en un bote de 3-bet, la ciega grande apuesta **dos tercios del bote el 97.8%** de las veces. Y sin embargo, de sus 83 combos solo **tres — los A5s — ligaron pareja con el board**, y 88, 55 y 22 ni siquiera están en el rango. La apuesta entra igual porque el rango se parte en **36 combos de sobrepares (overpairs) (43.4%) y 40 combos de A-high (48.2%)** casi sin nada entre medias. Muy fuerte o nada de nada — cuando el medio está vacío, el tamaño sube.

## ¿En qué condiciones salieron estos números?

El mismo montaje de bote de 3-bet que en los spots de [A-K-2](/es/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-es.webp") y [Q-10-7](/es/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-es.webp"). Solo cambió el board.

| Elemento | Ajuste |
|---|---|
| Preflop | El BTN abre → **la BB hace 3-bet a 11bb** → el BTN paga |
| OOP · IP | OOP = ciega grande (3-bettor) · IP = botón (caller) |
| Flop | 8♦ 5♣ 2♠ (tres palos distintos) |
| Bote · stack | Bote 22.5bb · stack efectivo 89bb (**SPR 4.0**) |
| Tamaños de apuesta | Un tercio del bote (7.4bb) y dos tercios (14.9bb), aproximadamente |
| Rake | No modelado |
| Comprobado | 2026-08-08 (resultado del spot de estudio) |

El bote de 22.5bb es ==11 del 3-bet + 11 del call + 0.5 de ciega pequeña muerta==. La pantalla va en **ciegas grandes** — el EV aparece como "EV (bb)" y cada apuesta muestra el importe junto a su parte del bote.

## ¿Con qué frecuencia apuesta de verdad el 3-bettor?

**El tamaño grande, el 97.8% de las veces.** Casi idéntico al board cargado de proyectos del spot anterior (98.4%).

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Bet 14.9bb (66% del bote) | **97.8%** | 81.1 |
| Check | 2.0% | 1.7 |
| Bet 7.4bb (33% del bote) | 0.3% | 0.2 |

Aquí viene lo raro. **[Q-10-7](/es/blog/3bet-pot-bet-sizing), empapado de proyectos, y este board, que casi no tiene ninguno, usan el mismo tamaño con casi la misma frecuencia.** En el spot anterior el tamaño grande estaba para ponerle precio a los proyectos del rival. Aquí no hay proyectos que cobrar. **La razón cambia; la conclusión no.**

## ¿De verdad solo tres combos ligaron este board?

**Sí — tres combos de A5s.** Desglosando los 83 combos:

| Categoría | Porción | Combos | Qué es |
|---|---|---|---|
| Overpair | 43.4% | 36 | AA · KK · QQ · JJ · TT · 99 |
| A-high | 48.2% | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Segunda pareja (5) | 3.6% | 3 | **A5s** |
| K-high | 4.8% | 4 | KQs |
| **Trío** | **0%** | **0** | 88, 55 y 22 no entran en un rango de 3-bet |
| **Top pair (8)** | **0%** | **0** | Nada del rango lleva un ocho |

Las combinaciones salen en números enteros. Los 36 combos de sobrepar son seis pares servidos, de 99 hasta AA, seis combos cada uno. **Todo par servido por encima de un ocho se convierte en sobrepar — eso es lo que hace un board bajo.** A5s son tres combos y no cuatro porque el 5♣ está en el board, y quedan A♠5♠, A♥5♥ y A♦5♦.

También hay exactamente un gutshot. **Los cuatro combos de A4s** están a una carta — un tres — de la rueda A-2-3-4-5. El panel de proyectos del solver se parte en tres filas mutuamente excluyentes: **gutshot 4.8% · proyecto backdoor de color 16.9% (14 combos) · sin proyecto 78.3%.** Eso *no* significa "78.3% es lo que queda después del gutshot". Hay que sumar las tres para llegar a 100, y el 16.9% de backdoor está en medio (necesita dos cartas seguidas del mismo palo, así que se completa cerca del 4.2% de las veces).

## ¿Por qué apostar grande con un rango que no ligó?

**Porque el rango se parte en "muy fuerte" y "nada", con el medio vacío.** Cuando desaparece el medio, el tamaño sube.

Los 36 combos de sobrepar se llevan toda la parte alta del rango de la ciega grande. **Con AA o KK, lo único que te gana son los nueve combos de set del botón.** En el otro extremo, los 40 combos de A-high no ganan casi nada en el showdown **contra el rango que paga una apuesta grande** — aunque frente a los 144 combos del botón el cuadro es otro, porque el 58.3% de ellos tampoco ligó este board.

⚠ Aun así, no trates los sobrepares como un bloque. El botón tiene sobrepares propios — 16.7%, 24 combos de QQ, JJ, TT y 99 — de modo que el 99 de la ciega grande pierde contra 18 de ellos, TT contra 12 y JJ contra 6. **El orden de fuerza también se aplica dentro de la fila de "Overpair".**

| Forma del rango | Tamaño |
|---|---|
| Fuerte, medio y débil repartidos por igual (apuesta de rango) | Pequeño — las manos medias necesitan que las paguen |
| **Fuerte o nada (polarizado)** | **Grande — sin medio, no hay nada que proteger** |

El SPR 4 enseña hasta dónde llega ese tamaño — no es la *razón* de él, que es la forma polarizada de arriba. Con solo 89bb detrás, **dos tercios del bote dos veces y luego lo que quede en el river vacían el stack exactamente**: 14.9bb en el flop, 34.5bb en el turn, 39.6bb en el river. Las dos primeras suman ==14.9 + 34.5 = 49.4bb==, el 55.5% del stack de 89bb.

⚠ **Eso no es lo mismo que "si empiezas pequeño pierdes el camino para meterlo todo".** No lo pierdes. Empezando con 7.4bb: te pagan, el bote es 37.3 con 81.6 detrás; dos tercios de eso en el turn son 24.6, y quedan un bote de 86.5 y un stack de 57.0; el shove de 57.0 en el river es el 65.9% del bote. **Y de todos modos el tamaño no lo elige la profundidad del stack** — el [board A-K-2](/es/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-es.webp") está en el mismo SPR de 4.0 y usa el tamaño **pequeño** el 57.8% de las veces. Lo que produce aquí el tamaño grande es el rango polarizado, no el SPR.

Y los 40 combos de A-high **ganan en cuanto el rival foldea.** El 58.3% del rango del botón es A-high, K-high o sin jugada en este board. ⚠ Ojo, "no ligó" no es "foldea" — **el nodo de cómo responde el botón a una apuesta no está en este solve**, así que de aquí no sale ninguna frecuencia de fold, y los A-high del botón van de A-K hasta A-10, lo que conserva algo de valor en el showdown. Cuándo es rentable un farol de verdad está en [estrategia de farol](/es/blog/holdem-strategy).

## ¿Por qué todos los sets están del otro lado?

**Porque 88, 55 y 22 no entran en un rango de 3-bet, y sí entran en un rango que paga.** Este es el primer spot de la serie donde la parte alta del board pertenece por completo al jugador en posición.

![Infografía de composición de rangos que compara las clases de mano de la ciega grande y del botón en un board 8-5-2 en bote de 3-bet](/images/gto-3bp-low-ranges-es.webp "8-5-2 en un bote de 3-bet · reparto por categorías — el trío solo del lado del botón, los sobrepares casi el doble para la ciega grande")

| Categoría | BB (3-bettor) | BTN (caller) |
|---|---|---|
| **Trío** | **0.0%** | **6.3%** (9 combos) |
| Overpair | **43.4%** | 16.7% |
| Top pair (8) | 0.0% | 2.1% |
| Segunda pareja (5) | 3.6% | — |
| Underpair | — | **16.7%** |
| A-high | **48.2%** | 36.1% |
| K-high · sin jugada | 4.8% | **22.2%** |

Los nueve combos del botón son 88, 55 y 22, tres de cada uno — una carta de cada uno de esos valores está en el board, así que cada par servido baja de seis combos a tres. 🪶 La tabla y la pantalla del solver llaman a esta fila **"Trío".** En 8-5-2 solo es posible un **set**, porque el board no tiene pareja (trips significa llevar una carta de un board pareado). La etiqueta de la app se cita tal como aparece — léela como *set*.

**Esta forma importa en la mesa.** Todos los sets están del otro lado, y la ciega grande no tiene nada por encima de ellos — así que sus sobrepares no son las nuts aquí.

⚠ No lo conviertas en "si viene una subida, el sobrepar no le gana a nada". Dos razones. Primero, **el nodo de respuesta a una subida no está en este solve** — el spot de estudio se detiene en la primera acción del flop. Segundo, tampoco es cierto: para subir contra una apuesta de rango del 97.8% necesitas faroles mezclados con el valor (nueve combos de set), y **AA y KK le ganan a todo lo que hay en ese rango de subida salvo a esos nueve combos.**

## ¿Por qué el caller realiza aquí más equity que en los dos spots anteriores?

**La realización del botón sube a 90.3% dentro de la misma estructura de bote de 3-bet.** Era 78.7% y 75.1% en los dos anteriores. ⚠ No es que el botón subiera por su cuenta — los dos EV suman el bote, así que **cuando un lado sube el otro tiene que bajar.** La ciega grande cayó de 117.8% a 106.9%. No son dos hechos, sino dos caras del mismo.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58.6% | 41.4% |
| EV (bb) | 14.09 | 8.41 |
| **EQR** | **106.9%** | **90.3%** |

| Bote de 3-bet, tres boards | EQR de la BB | EQR del BTN |
|---|---|---|
| A♦K♠2♥ seco (⑧) | 109.6% | 78.7% |
| Q♥10♥7♠ two-tone (⑨) | 117.8% | 75.1% |
| **8♦5♣2♠ bajo (⑩)** | **106.9%** | **90.3%** |

La razón es dónde viven los sets. **El botón es el único jugador que puede tener uno**, y esos nueve combos se llevan stacks enteros. Su 16.7% de underpairs — 77, 66, 44, 33 — también va por delante del A-high, y eso les da un motivo para pagar la apuesta.

**Un board bajo es donde el 3-bettor sigue por delante, pero donde peor convierte esa ventaja en dinero.** Su 58.6% de equity está de hecho un pelo por encima del 58.3% de Q-10-7, mientras que la **realización** baja de 117.8% a 106.9%. ⚠ No leas el movimiento de 15.2 puntos del lado del **botón** (⑨ 75.1% → ⑩ 90.3%) como "lo que se lleva el rival" — el EQR es la proporción de equity *realizada*, no una parte del bote. Por parte real, este botón se anota ==8.41 ÷ 22.5 = 37.4%== frente al ==7.04 ÷ 22.5 = 31.3%== de ⑨ — una diferencia de **6.1 puntos**.

## ¿Qué cambia en la mesa?

- **No caigas por defecto en "no ligué, así que hago check" en un board bajo y seco.** En un bote de 3-bet tu rival tampoco ligó — el **58.3%** del rango del botón no hizo pareja aquí. ⚠ No conviertas ese 58.3% en una proporción de folds; el nodo de respuesta no está en este solve. La razón para apostar no es "foldean", sino **"mi rango está polarizado, así que el tamaño grande se paga solo"**.
- **Pero no trates un sobrepar como las nuts cuando llega una subida.** Los nueve combos de set están del otro lado, y el botón tiene además 24 combos de QQ hasta 99. **Tu 99 y tu TT son sobrepares que pierden contra sobrepares.**
- **Contra alguien que casi nunca foldea, recorta la parte de A-high.** La cifra del 97.8% se apoya en que buena parte del rango rival no ligó. ⚠ Otra vez, "el 58.3% no ligó" no es "el 58.3% foldea" — de este solve no sale ninguna frecuencia de fold, y el 36.1% de A-high del botón es la familia A-K, A-Q, A-J, A-10, sin ases débiles dentro. 🪶 Frente a 14.9bb en un bote de 22.5bb la MDF es del **60.2%**, pero eso es un **punto de partida, no una cuota de call** — la MDF trata la apuesta como un farol puro con equity cero, mientras que el rango que apuesta aquí contiene 36 combos de sobrepar, así que ese supuesto no se sostiene. Si la defensa óptima real queda por debajo es una pregunta que este solve no responde. Contra una calling station, disparar A-high dos y tres veces convierte toda la parte de farol en pérdidas; estrecha hacia los sobrepares por valor.
- **Desde el botón, los pares servidos pequeños valen aquí más que en ningún otro sitio de esta serie.** 88, 55 y 22 ligan sets, y 77, 66, 44 y 33 van todos por delante del A-high. Es justo lo contrario del [spot A-K-2](/es/blog/3bet-pot-cbet), donde los underpairs estaban indefensos. Esto lo decide cómo esté construido el rango de 3-bet, y eso está en [estrategia de 3-bet](/es/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp").
- **Cuenta el SPR antes de apostar.** Con SPR 4, dos tercios del bote dos veces (14.9 → 34.5) más un shove de 39.6 en el river vacían 89bb exactos. En el momento en que apuestas el flop, ir hasta el final ya está prácticamente decidido.

:::readnext[Sigue leyendo]
/es/blog/3bet-pot-bet-sizing | Un solo tamaño, el 98.4% de las veces — Q-10-7 en un bote de 3-bet | /images/gto-3bp-dynamic-oop-es.webp
/es/blog/blind-battle-cbet | El jugador sin posición apuesta primero — el 67.4% de las veces | /images/gto-sb-king-mid-oop-es.webp
:::

## Compruébalo tú mismo

Todas las cifras de aquí aparecen si abres el [solver GTO](/es/solver) y entras en **Spots de estudio → "Board bajo y seco" → [⚡ Ver resultados]**. Si prefieres jugar el mismo spot como ejercicio, abre el [Entrenador GTO](/es/solver) desde la barra lateral — te reparte una mano al azar y, en cuanto eliges una acción, te enseña la frecuencia mezclada y el **EV perdido (bb)** de tu elección. Tu historial se queda en tu propio navegador.

Busca la **fila de "Trío" que falta** en el panel de Manos. Después cambia el jugador a IP (BTN (caller)) y aparece con 6.3%. Esa sola línea es toda la historia de quién tiene la parte alta de este board. Gratis, sin instalar nada y sin cuenta.

**Q. ¿Hay que cbetear A-K en un board bajo dentro de un bote de 3-bet?**

A. Sí. En 8-5-2 A-K no tiene ni pareja ni proyecto, y aun así el solver mete todo el rango en el tamaño grande el 97.8% de las veces. La razón es que el rango de la ciega grande está **polarizado — sobrepares o A-high, partido casi por la mitad** — y cuando el medio está vacío el tamaño sube, con todo el rango usándolo. Que el 58.3% del rango rival no ligara pareja ayuda, pero no lo leas como "el 58.3% foldea"; el nodo de respuesta no está en este solve.

**Q. ¿Qué significa un rango polarizado?**

A. Un rango hecho solo de manos muy fuertes y de manos con nada, sin la parte de en medio. Aquí la ciega grande es 43.4% de sobrepares y 48.2% de A-high, con casi nada entre las dos. Sin manos medias que necesiten que las paguen, ya no hay motivo para mantener el tamaño pequeño.

**Q. ¿Por qué el 3-bettor no tiene sets?**

A. Porque los pares servidos pequeños como 88, 55 y 22 se pagan o se foldean preflop en lugar de hacer 3-bet. Así que los nueve combos de set de este board están del lado del botón. Por eso la sensación de "en un bote de 3-bet domino" se tambalea en un flop bajo.

**Q. ¿Se pueden llevar estos números directo a una partida en vivo?**

A. Úsalos como línea base cuando las condiciones coincidan. Si tu rango de 3-bet mezcla pares servidos pequeños o conectores del mismo palo, la composición en este board cambia y el reparto de tamaños cambia con ella. En el cálculo no se modela el rake.
`.trim(),
};

export default POST;
