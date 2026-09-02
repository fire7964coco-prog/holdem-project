import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑫ 스페인어판 — 7♦6♦5♣ 블라인드전 (SB 오픈레이저 vs BB 콜러)
 *
 * ★★ «번역 + 5필드» (스펙 §4-A-3 · 브리프 docs/es-gto-series-translation-brief.md).
 *    소스 EN = lib/posts-en/blind-battle-connected-board.ts · 커밋 09bd0697 ·
 *    EN updated 2026-08-21 → masterUpdated = 2026-08-21. 구조·수치·논거·고지 문장은 EN 1:1.
 *
 * ▶ 조준 키워드 (팩 docs/keyword-bank/es-gto-series.md §3 ⑫행)
 *    board texture poker · «board conectado»(null · 본문 개념어) · «textura del board» ·
 *    guerra de ciegas(SERP 실재 표기) · 훅 = 9.6%. 「wet board poker」는 ⑨⑦ 소유 — 가져오지 않는다.
 *
 * ▶ 표기 규약 — 산문 카드는 10♠, 레인지 표기(88·43s·A7s)와 앱 캡처 콤보(10♣9♣·Q♠4♠ — 수트가 붙은 카드는 산문 규약대로 10)는 축어.
 *    블라인드전 칩은 «Bet 2bb (33% del bote)» 하나뿐 · 셀렉터는 «OOP (SB (open-raiser))».
 *
 * 🔴 드로우 6행은 상호배타다 — 백도어 행(SB 21.0 · BB 15.5)을 빼지 마라(히어로에 21.0%가 보인다).
 * 🔴 급락 서술(브리프 §4 앵커) 금지 · EQR 표는 «골랐다»고 밝히고 콜러 다섯 편이 아래 있음을 남긴다 ·
 *    9.6%의 이유를 팟·스택·SPR에서 찾지 마라(⑪⑬에서 상수다) · «레이즈면 놓아라» 금지.
 * 🔴 편 수 하드코딩 금지 — «toda la serie».
 */
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "Mismo asiento, mismo stack — y la apuesta cae del 67% al 9.6%",
  seoTitle: "La textura del board convierte un 67% en 9.6% — solver GTO",
  desc: "No cambió nada salvo tres cartas. En 7-6-5 la ciega pequeña que un board antes apostaba el 67.4% ahora apuesta el 9.6%: textura del board en estado puro.",
  tldr: "Tras una apertura de la ciega pequeña y un call de la ciega grande, el flop 7♦6♦5♣ recibe una apuesta apenas el 9.6% de las veces y un check el 90.4%. Bote, stack, SPR, tamaño de apuesta y los dos rangos son idénticos al spot anterior — solo cambiaron las tres cartas del board, y la apuesta pasó del 67.4% al 9.6%. La ventaja de rango que se ganó preflop era una ventaja en cartas altas, y un board bajo y conectado la borra de golpe. La equity se invierte, 49.6% contra 50.4%, y la realización fuera de posición baja al 85.3%.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-es.webp",
  imageAlt: "El solver GTO de HoldemMaster sobre un flop 7-6-5 two-tone, con la matriz de la ciega pequeña casi entera en verde para el check",
  tags: [
    "board texture poker",
    "connected board poker",
    "low connected flop",
    "guerra de ciegas poker",
    "textura del board",
    "poker gto",
  ],
  content: `
En el spot anterior la ciega pequeña (SB) apostaba el **67.4% sin posición**. La razón era que en ese asiento el agresor preflop es además el primero en hablar, así que la ventaja de rango y el orden de acción caen en el mismo jugador.

Entonces, ¿la ciega pequeña debería apostar siempre en guerra de ciegas? Este spot es la respuesta.

**El bote son los mismos 6bb, el stack efectivo los mismos 97bb, y el único tamaño de apuesta del árbol sigue siendo un tercio del bote.** Los dos rangos también son los mismos que en el spot anterior. Lo único que cambió son **tres cartas del board**. Y la apuesta de la ciega pequeña cae al **9.6%**. Todos los números de abajo salen del [solver GTO de HoldemMaster](/es/solver).


:::stripe
Spot | La SB abre a 3bb → la BB paga (guerra de ciegas)
Flop | 7♦ 6♦ 5♣ (conectado · two-tone)
Bote · stack | Bote 6bb · stack efectivo 97bb · SPR 16.2
Resultado | La SB apuesta el **9.6%** — el mismo asiento que un board antes apostaba el 67.4%
:::

> **Respuesta rápida**
> En el board conectado 7-6-5, en guerra de ciegas, la primera acción de la ciega pequeña es **apostar 9.6%, hacer check 90.4%**. Bote, stack, SPR, tamaño de apuesta y los dos rangos son **idénticos** al spot anterior (K♥10♦6♠) — solo cambió el board, y la apuesta pasó del 67.4% al 9.6%. La ventaja de rango del que abre es una ventaja en **cartas altas**, y en un board de 5, 6 y 7 esa ventaja desaparece por completo. La equity de hecho **se invierte, 49.6% contra 50.4%**, y la realización de equity de la ciega pequeña baja del 103.1% al **85.3%**.

## ¿En qué condiciones salieron estos números?

**Son idénticas a las del spot anterior.** Como todo el asunto aquí es "mismas condiciones, resultado distinto", vale la pena dejar claro qué es igual y qué no.

| Elemento | Este spot ⑫ | Spot anterior ⑪ | ¿Igual? |
|---|---|---|---|
| Preflop | La SB abre a 3bb → la BB paga | La SB abre a 3bb → la BB paga | **igual** |
| OOP (habla primero) | SB — open-raiser | SB — open-raiser | **igual** |
| Bote | 6bb | 6bb | **igual** |
| Stack efectivo | 97bb | 97bb | **igual** |
| SPR | 16.2 | 16.2 | **igual** |
| Tamaño de apuesta | Un solo tamaño, un tercio del bote | Un solo tamaño, un tercio del bote | **igual** |
| Rango de la SB | 572 combos | 538 combos | mismo rango (solo cambian los blockers del board) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ 10♦ 6♠** | **distinto** |
| Rake | No modelado | No modelado | — |
| Comprobado | 2026-08-08 (resultado del spot de estudio) | 2026-08-08 | — |

El bote de 6bb es ==los 3 de la SB más los 3 de la BB==. El stack efectivo es ==100 − 3 = 97bb==, así que el SPR es ==97 ÷ 6 = 16.2==.

Los recuentos de combos sí cambian — 572 contra 538 — no porque los rangos sean distintos, sino porque **las cartas del board eliminan los combos que las habrían usado.** Un board de K, 10 y 6 le quita más a un rango cargado de cartas broadway.

La pantalla va en **ciegas grandes** — las apuestas se leen como "Bet 2bb (33% del bote)" y el EV aparece como "EV (bb)".

## ¿Con qué frecuencia apuesta aquí la ciega pequeña?

**9.6% apuesta, 90.4% check.** De 572 combos solo 55 entran en la apuesta; los otros 517 hacen check.

| Primera acción de la ciega pequeña | Frecuencia | Combos |
|---|---|---|
| Bet 2bb (33% del bote) | **9.6%** | 55.0 |
| Check | **90.4%** | 517.0 |

Puesto sobre la serie, se ve dónde queda este spot.

| Spot | Quién está fuera de posición | Frecuencia de apuesta OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB, caller | 0.1%–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB, caller | 3.0%–3.2% |
| **7♦6♦5♣ guerra de ciegas (⑫)** | **SB, open-raiser** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB, caller | 11.2% |
| 9♥8♥7♣ conectado (④) | BB, caller | 23.7% |
| K♥10♦6♠ guerra de ciegas (⑪) | SB, open-raiser | 67.4% |
| A♠A♥6♦ guerra de ciegas (⑬) | SB, open-raiser | 80.1% |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB, 3-bettor | 98–100% |

**El "papel" por sí solo no explica esta tabla.** El mismo open-raiser aparece con 67.4% y con 9.6%. Si el spot anterior decía "cambia el papel y cambia lo que haces por defecto", este es la cláusula que viene después: **el board te quita ese defecto.**

## ¿Por qué 67.4% se convierte en 9.6% si no cambió nada más?

**Porque la ventaja del que abre es una ventaja en cartas altas.** La ciega pequeña pudo abrir a 3bb porque su rango está cargado de ases, reyes y reinas y pesa en combinaciones broadway — y ninguna de esas cartas toca el 5, el 6 ni el 7.

El board anterior era lo contrario. **La carta más alta era un rey**, y las combinaciones con rey son muchas más del lado del que abre. Pon ese mismo rango en un board bajo y conectado y esa estructura se invierte.

| | K♥10♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Carta más alta del board | **K** — la carta del que abre | **7** — la carta del que paga |
| Equity de la SB | **55.3%** | **49.6%** |
| EQR de la SB | **103.1%** | **85.3%** |
| Frecuencia de apuesta de la SB | **67.4%** | **9.6%** |

:::pull[La ventaja de rango se gana preflop, pero que llegue a realizarse lo deciden tres cartas del flop.]:::

El artículo anterior terminaba diciendo *"en los boards que le encajan al que paga el check vuelve incluso desde este asiento"*. Este es ese caso, y el número que le pone el solver es **9.6%**.

## ¿Por qué este board le viene bien a la ciega grande?

**Porque las combinaciones que conectan con 5-6-7 solo sobreviven en el rango con el que paga la ciega grande.** Las cinco primeras filas de abajo son las clases que de verdad ligan este board, y salvo los sobrepares (overpairs) la ciega pequeña no lidera ninguna.

![Infografía de composición de rangos que compara las clases de mano de la ciega pequeña y de la ciega grande en un board 7-6-5](/images/gto-sb-connected-ranges-es.webp "7-6-5 en guerra de ciegas · composición clase por clase — el top pair va 6.8% contra 11.2% a favor de la ciega grande")

| Clase | SB (OOP · open-raiser) | BB (IP · caller) |
|---|---|---|
| Escalera | 2.8% (16 combos) | **3.7% (20 combos)** |
| Trío | 1.6% (9 combos) | 1.7% (9 combos) |
| Doble pareja | 1.2% (7 combos) | **2.4% (13 combos)** |
| Overpair | **7.3% (42 combos)** | 2.2% (12 combos) |
| Top pair (7) | 6.8% (39 combos) | **11.2% (60 combos)** |
| Segunda pareja (6) | 5.8% | **6.2%** |
| Pareja débil | 4.2% | **6.2%** |
| Underpair | 3.1% | **3.4%** |
| A-high | **25.2%** | 18.7% |
| K-high | **16.1%** | 15.7% |
| Sin jugada | 25.9% | **28.5%** |

Tres casillas lo deciden.

- **El top pair son 39 combos contra 60.** La ciega grande tiene un 50% más de sietes. El rango de apertura de la ciega pequeña se construye sin manos de distinto palo como 10-7, 9-7 y 8-7, mientras que la ciega grande — que ya tiene 1bb dentro — solo añade 2bb y se las queda todas.
- **Las escaleras son 16 combos contra 20.** Las dos tienen 9-8 (que hace 9-8-7-6-5), pero la ciega grande además tiene 43s para 7-6-5-4-3. El rango de apertura de la ciega pequeña no lleva 43s.
- **La doble pareja son 7 combos contra 13.** Los seis combos de 7-6 de distinto palo son solo de la ciega grande.

Los sets son la excepción. Las dos tienen 77, 66 y 55, **exactamente nueve combos cada una.** El reparto marca 1.6% contra 1.7% solo porque el rango de la ciega grande es más pequeño, 534 combos, así que esos mismos nueve ocupan una porción algo mayor. (El panel etiqueta esa fila como *Trío*; en un board sin pareja como este, siempre es un set.)

La única clase que lidera la ciega pequeña son los **sobrepares, 42 combos (7.3%)** contra los 12 (2.2%) de la ciega grande — de TT hacia arriba todo hace 3-bet contra una apertura de la ciega pequeña, así que en el rango que paga solo quedan 88 y 99.

El problema es que **un sobrepar no es una mano fuerte en este board.** Las manos que **ya le ganan** dentro del rango rival suman ==9 sets + 13 dobles parejas + 20 escaleras = 42 combos==. Los 60 combos de top pair que ahora mismo van por detrás pueden convertirse en doble pareja o en trío para el river, y los proyectos también pesan más del lado de la ciega grande.

| Proyecto | SB | BB |
|---|---|---|
| Proyecto combinado | 3.0% | **3.7%** |
| Proyecto de color | **2.8%** | 2.6% |
| Proyecto a dos puntas | 21.2% | **24.9%** |
| Gutshot | 19.4% | **23.8%** |
| Proyecto backdoor de color | **21.0%** | 15.5% |
| Sin proyecto | **32.7%** | 29.4% |

**Los proyectos a dos puntas van 21.2% contra 24.9% y los gutshots 19.4% contra 23.8%.** Contando solo los proyectos vivos — combinado, de color, a dos puntas y gutshot — sale **46.4% para la ciega pequeña contra 55.0% para la ciega grande**, lo que significa que hasta la parte sin hacer del rango de la ciega grande es la que más probabilidades tiene de *crecer*.

🪶 **La ciega pequeña lidera exactamente dos casillas**: proyectos de color 2.8% contra 2.6%, y backdoor de color 21.0% contra 15.5%. La primera es una diferencia de 0.2 puntos, en la práctica un empate; la segunda necesita dos cartas seguidas del mismo palo y se completa solo cerca del 4.2% de las veces. Hay que sumar las seis filas para llegar al 100%, así que no te detengas en la fila de "sin proyecto".

## ¿Cómo puede ir por detrás en equity el que abrió?

**Porque el A-high y el K-high no valen casi nada en este board.** El 41.3% del rango de la ciega pequeña es A-high o K-high (25.2 + 16.1), y por encima de 5-6-7 esas combinaciones son simplemente cartas altas.

| Elemento | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 49.6% | **50.4%** |
| EV (bb) | 2.54 | **3.46** |
| **EQR (realización de equity)** | **85.3%** | **114.4%** |

El bote es de 6bb, así que la parte de la ciega pequeña es ==6 × 49.6% = 2.976bb== mientras que el EV real es 2.54bb — eso da ==2.54 ÷ 2.976 = 85.3%==. Sumando los dos EV salen ==2.54 + 3.46 = 6.0bb==, exactamente el bote.

**La equity está casi igualada, 49.6 contra 50.4, y aun así la realización se separa muchísimo: 85.3% contra 114.4%.** Esa diferencia es lo que vale la posición. En el spot anterior la ventaja de rango la cubría de sobra y la ciega pequeña realizaba 103.1%; aquí no queda ventaja con la que cubrirla.

Ordena el EQR fuera de posición de **seis spots elegidos** de menor a mayor y este queda entre los callers. (El verdadero fondo de toda la serie es ③ con 77.9%, ② con 80.7% y ⑥ con 83.7%, los tres asientos de caller; la tabla de abajo es un extracto al que se le ha cortado esa cola.)

| Spot | Quién está fuera de posición | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ seco (①) | caller | 45.1% | 84.0% |
| 6♠5♥2♦ bajo (⑦) | caller | 48.3% | 84.3% |
| **7♦6♦5♣ guerra de ciegas (⑫)** | **open-raiser** | **49.6%** | **85.3%** |
| 9♥8♥7♣ conectado (④) | caller | 48.5% | 93.2% |
| K♥10♦6♠ guerra de ciegas (⑪) | open-raiser | 55.3% | 103.1% |
| 8♦5♣2♠ bote de 3-bet (⑩) | 3-bettor | 58.6% | 106.9% |

**Un open-raiser sentado entre los callers.** En toda la serie hay **cinco** asientos de caller por debajo de este (③ 77.9 · ② 80.7 · ⑥ 83.7 · ① 84.0 · ⑦ 84.3), así que no está cerca del fondo. El punto se sostiene igual: **el mismo asiento de open-raiser marca 103.1% en ⑪ y 85.3% aquí.** El valor lo pone el board, no el asiento.

## ¿Qué manos forman ese 9.6% que apuesta?

**No es un bloque — es una capa fina repartida por todo el rango.** En ningún punto de la matriz hay una casilla completamente naranja; la mayoría lleva una franja naranja estrecha. Incluso AA y KK son verdes en su mayor parte.

Tres tipos de casilla llevan una franja visiblemente más gruesa. (Las frecuencias de abajo son medias por combo de cada clase de mano, contadas leyendo la tabla por mano en vivo hasta el final el 2026-08-21.)

- **88 — apuesta el 39.5%, la clase más frecuente del rango.** En 7-6-5 un par de ochos es **sobrepar y proyecto a dos puntas a la vez** (8-7-6-5 se completa con un cuatro o un nueve). Valor y proyecto en una sola mano, así que hay dos motivos para apostar. La equity medida va de 73.4% a 75.2% y el EQR de 133% a 138%.
- **A7s y K7s** — top pair con un siete. No se eligen por fuerza sino porque **el valor fino viene con un blocker de as o de rey** (un A-high o un K-high menos en el rango rival). El top pair en este board va de hecho por detrás, 39 combos contra 60.
- **K4s y Q4s** — un cuatro del mismo palo. Añade un cuatro a 7-6-5 y tienes ==4-5-6-7==, un proyecto a dos puntas que se completa con un tres o un ocho. Por media de clase eso es Q4s con 30.9% y K4s con 27.1%, pero **como combos sueltos Q♠4♠ y Q♥4♥ llegan al 54.7%, lo más alto de todo el spot.**

El 9.6% se construye mezclando un poco de valor con unos cuantos proyectos. 88 encabeza la clasificación por clases porque **una sola mano hace los dos trabajos a la vez.** ⚠ Eso no es una regla general, eso sí — **ninguno de los tres mejores combos sueltos hace las dos cosas** (Q♠4♠ con 54.7% es proyecto puro, A♣7♣ con 54.4% es valor fino con blocker, 10♣9♣ con 52.2% es un gutshot). El mejor combo suelto de la mano que hace doble función, 8♦8♣, se queda *más abajo*, en 47.1%. **Ese 9.6% no lo seleccionó ningún criterio único.** **Y hacer check el 90.4% no es que la ciega pequeña se rinda en este board** — es que liderar con valor fino y después recibir una subida cuesta mucho más de lo que gana. ⚠ Ojo, no busques la razón en el bote de 6bb, en el stack de 97bb ni en el SPR de 16.2 — esos tres son **exactamente las mismas constantes** en [⑪ K-10-6](/es/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-es.webp") y en [el board A-A-6](/es/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-es.webp") más adelante en la serie, donde esa misma ciega pequeña apuesta 67.4% y 80.1%. Lo que produjo el 9.6% no es el stack; son **tres cartas del board**.

:::note[⚠ Este spot de estudio se resolvió con un único tamaño de apuesta — un tercio del bote — como única opción. Abre un tamaño mayor en el árbol y el 9.6% puede moverse. Léelo como "en estas condiciones casi no hay nada que merezca una apuesta, ni siquiera pequeña".]:::

## ¿Qué cambia en la mesa?

- **No conviertas en regla lo de "es guerra de ciegas, así que apuesto".** El 67.4% del spot anterior y el 9.6% de aquí los separó el board, no el asiento. Aunque hayas abierto desde la ciega pequeña, en cuanto el flop sale bajo y conectado — 5, 6, 7, 8 — la iniciativa de esa mano ya cruzó la mesa.
- **No trates un sobrepar como razón para construir un bote grande.** Los 42 combos de sobrepar de la ciega pequeña son tres veces y media los de la ciega grande, pero en un board donde el rival tiene 42 combos que ya les ganan, esta no es una mano para dos o tres barriles. Eso no es un argumento contra una sola apuesta pequeña — la idea es **no tratarla como una mano con la que meter el stack**. ⚠ Tampoco significa "foldea en cuanto llegue una subida". El rango del rival lleva 24.9% de proyectos a dos puntas, 23.8% de gutshots y 3.7% de proyectos combinados, así que una subida en el flop no puede ser todo valor, y foldear el sobrepar en automático contra la subida de un rival cargado de proyectos es en sí mismo un hábito explotable. **Renunciar a meter el stack y foldear son cosas distintas.** Y el nodo de apuesta seguida de subida no está en este solve, así que de ahí no sale ninguna frecuencia. Esta serie llega una y otra vez a la misma conclusión: [un board conectado le recorta la ventaja al agresor preflop](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp").
- **No confundas el A-high con fuerza.** Un cuarto del rango de la ciega pequeña es A-high, y en este board lo mejor que puede hacer es ligar pareja. Los proyectos del rival, cuando entran, son escaleras — lo que cambia no es la probabilidad de mejorar sino **cuánto vale esa mejora**. El 49.6% de equity es el resultado.
- **Decide de antemano qué haces después del check.** Habiendo pasado el 90.4% a check, qué pagas y con qué haces [check-raise](/es/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-es.webp") frente a la apuesta del rival es el siguiente problema real. ⚠ **Esa respuesta no está en este cálculo** — el spot de estudio resuelve solo la **primera acción del flop**, así que los nodos posteriores al check (la frecuencia de apuesta de la ciega grande, el check-raise de la ciega pequeña) sencillamente no existen. Si quieres un spot donde el check-raise sí se haya resuelto, el board bajo y rainbow es el único de la serie con frecuencias resueltas aparte — **aunque el asiento es distinto** (allí la ciega grande es la que paga y se enfrenta a un botón).

:::readnext[Sigue leyendo]
/es/blog/blind-battle-cbet | El jugador sin posición apuesta primero — el 67.4% de las veces | /images/gto-sb-king-mid-oop-es.webp
/es/blog/ace-paired-board-strategy | Dos ases en el flop y la apuesta salta al 80% | /images/gto-sb-paired-ace-oop-es.webp
:::

## Compruébalo tú mismo

Todas las cifras de aquí aparecen si abres el [solver GTO](/es/solver) y entras en **Spots de estudio → "Bajo conectado, two-tone" → [⚡ Ver resultados]**. Si prefieres jugar el mismo spot como ejercicio, abre el [Entrenador GTO](/es/solver) desde la barra lateral — te reparte una mano al azar y, en cuanto eliges una acción, te enseña la frecuencia mezclada y el **EV perdido (bb)** de tu elección. Tu historial se queda en tu propio navegador.

**Alterna entre este spot y "Board K-T high"**, el anterior. Las etiquetas de jugador dicen "OOP (SB (open-raiser))" en los dos, el bote y el stack son idénticos — y la matriz cambia de color por completo. Es la demostración más corta de esta serie de lo que hace de verdad un board. Gratis, sin instalar nada y sin cuenta.

**Q. ¿Por qué el mismo rango cambia de valor de un board a otro?**

A. Porque un rango está concentrado en cartas concretas. El rango de apertura de la ciega pequeña está cargado de ases, reyes y reinas, así que gana en boards altos; el rango con el que paga la ciega grande está cargado de conectores y manos bajas del mismo palo, así que gana en boards bajos y conectados. Pon esos dos mismos rangos en K♥10♦6♠ y la ciega pequeña tiene 55.3% de equity; ponlos en 7♦6♦5♣ y baja a 49.6%. Los rangos no se movieron — solo el board.

**Q. Abriste desde la ciega pequeña y el flop viene bajo y conectado. ¿Ahora qué?**

A. Casi siempre check. El solver pasa el 90.4% a check en 7♦6♦5♣. Incluso el 9.6% que apuesta está repartido en capa fina entre **88, un sobrepar que además es proyecto a dos puntas** (39.5% por media de clase, lo más alto de aquí), top pair (A7s, K7s) y un cuatro del mismo palo que hace dos puntas (K4s, Q4s). Pero esto no es lo mismo que rendirse — hacer check y después responder a la apuesta del rival con calls y check-raises gana más que liderar con valor fino y que te suban.

**Q. La ciega pequeña tiene tres veces más sobrepares. ¿Por qué la apuesta es solo del 9.6%?**

A. Porque el rival tiene mucho que le gana a un sobrepar en este board: 42 combos entre sets, dobles parejas y escaleras, más 24.9% de proyectos a dos puntas y 23.8% de gutshots. Incluso los 60 combos de top pair que ahora van por detrás llevan cartas que le dan la vuelta para el river. Un sobrepar aquí es "voy delante ahora, difícil meter fichas más de una vez". ⚠ No busques la razón en el SPR de 16.2 — un bote de 6bb, un stack de 97bb y un SPR de 16.2 son **las mismas constantes** en los boards [K-10-6](/es/blog/blind-battle-cbet) y [A-A-6](/es/blog/ace-paired-board-strategy), donde esa misma ciega pequeña apuesta 67.4% y 80.1%. Lo que produjo el 9.6% no es el stack; son tres cartas del board.

**Q. ¿Cuál de los dos spots es el estándar de la guerra de ciegas?**

A. Ninguno. La pareja existe para enseñar que el mismo asiento produce 9.6% y 67.4%, en extremos opuestos, según el board. Lo que te llevas a la mesa no es "soy ciega pequeña, así que apuesto", sino **de quién es el rango al que pertenece la carta más alta del board**. Un rey, una reina o un as y es del que abre; un 5, un 6, un 7 o un 8 y es del que paga.
`.trim(),
};

export default POST;
