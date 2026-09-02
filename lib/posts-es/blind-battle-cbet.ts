import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑪ 스페인어판 — K♥T♦6♠ 블라인드전 (SB 오픈레이저 vs BB 콜러)
 *
 * ★★ «번역 + 5필드» (스펙 §4-A-3 · 브리프 docs/es-gto-series-translation-brief.md).
 *    소스 EN = lib/posts-en/blind-battle-cbet.ts · 커밋 824b73d2 · EN updated 2026-09-02
 *    → masterUpdated = 2026-09-02. 구조·수치·논거·고지 문장은 EN 1:1, 스페인어만 바꾼다.
 *
 * ▶ 조준 키워드 (팩 docs/keyword-bank/es-gto-series.md §3 ⑪행)
 *    blind vs blind poker 10 · «guerra de ciegas» (라쿠 null이지만 SERP에 전용 글 7개 = 살아 있는 표기) ·
 *    equity realization · 훅 = 67.4%. 「out of position poker」는 holdem-position-play 소유 — 조준 금지.
 *
 * ▶ 표기 규약 — 산문 카드는 10♠, 레인지 표기(KK·TT·66)와 앱 라벨은 축어.
 *    블라인드전 칩은 «Bet 2bb (33% del bote)» 하나뿐 · 셀렉터는 «OOP (SB (open-raiser))».
 *
 * 🔴 폐기 명제(브리프 §4 앵커) — «약하게 들어온다»를 67.4/9.6과 인과로 잇지 마라 ·
 *    콜러 편들기·급락 서술 금지 · 반례 두 줄(⑫ 9.6 · ⑬ 80.1)을 표에서 빼지 마라.
 * 🔴 편 수 하드코딩 금지 — «esta serie» / «toda la serie».
 */
export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "El jugador sin posición apuesta primero — el 67.4% de las veces",
  seoTitle: "Guerra de ciegas en poker: sin posición y apuesta el 67.4%",
  desc: "Guerra de ciegas en K-10-6: la ciega pequeña habla primero y sin posición — y apuesta el 67.4%. Así una ventaja de rango lleva la realización sobre el 100%.",
  tldr: "Tras una apertura de la ciega pequeña y un call de la ciega grande, el flop K♥10♦6♠ recibe una apuesta el 67.4% de las veces y un check el 32.6%. En los siete botes de subida simple anteriores de esta serie el jugador fuera de posición apostaba solo entre 0.1% y 23.7% — y cambiaron dos cosas, no una. Aquí el jugador fuera de posición es el que subió y no el que pagó, y el board le viene bien a ese rango. Juntas, llevan la realización de equity fuera de posición al 103.1%.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-es.webp",
  imageAlt: "El solver GTO de HoldemMaster mostrando el rango de la ciega pequeña en un flop K-10-6 rainbow, con casi toda la matriz en naranja para la apuesta",
  tags: [
    "blind vs blind poker",
    "guerra de ciegas poker",
    "small blind open",
    "king high flop",
    "equity realization",
    "poker gto",
  ],
  content: `
En los siete botes de subida simple anteriores de esta serie se repetía una regla. **El que habla primero hace check.** Lo máximo que apostó el jugador fuera de posición fue en el [board conectado 9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp"), con 23.7%, y los otros seis no pasaron del 11.2%. La única excepción era un bote de 3-bet.

Este no es un bote de 3-bet. Es una mano corriente: la ciega pequeña (SB) abre a 3bb y la ciega grande (BB) paga. Y **el jugador que habla primero apuesta el 67.4%.**

¿Qué cambió? El bote es pequeño, 6bb, y los stacks son de 97bb. Lo que cambió es **quién habla primero y a qué rango le viene bien el board — las dos cosas a la vez.** Todos los números de abajo salen del [solver GTO de HoldemMaster](/es/solver).


:::stripe
Spot | La SB abre a 3bb → la BB paga (guerra de ciegas)
Flop | K♥ 10♦ 6♠ (rainbow)
Bote · stack | Bote 6bb · stack efectivo 97bb · **SPR 16.2**
Resultado | La SB apuesta el **67.4%** — el primer bote de subida simple en el que lidera el jugador fuera de posición
:::

> **Respuesta rápida**
> En K-10-6, en guerra de ciegas, la primera acción de la ciega pequeña es **apostar 67.4%, hacer check 32.6%**. Es lo contrario del 0.1%–23.7% que se vio en los spots ① a ⑦, y hay **dos cosas** distintas, no una: aquí el jugador fuera de posición es **el que subió y no el que pagó**, y el board es un rey con un kicker broadway. El asiento por sí solo no lo explica — esa misma ciega pequeña que abre apuesta solo un **9.6%** en [un board 7-6-5](/es/blog/blind-battle-connected-board) más adelante en esta serie. Aquí las dos cosas coinciden, así que el agresor preflop es también el primero en hablar y tiene la ventaja de rango y el orden de acción a la vez. El resultado es una **realización de equity fuera de posición del 103.1%** — la primera vez en un bote de subida simple que pasa del 100%.

## ¿En qué condiciones salieron estos números?

★**El montaje ha vuelto a cambiar.** Bote, stack y papeles son distintos de los spots anteriores, así que la tabla va primero.

| Elemento | Este spot (guerra de ciegas) | ①–⑦ (BTN vs BB) | ⑧–⑩ (bote de 3-bet) |
|---|---|---|---|
| Preflop | **La SB abre a 3bb → la BB paga** | El BTN abre a 2.5bb → la BB paga | La BB hace 3-bet a 11bb → el BTN paga |
| OOP (habla primero) | **SB — open-raiser** | BB — caller | BB — 3-bettor |
| IP | BB — caller | BTN — open-raiser | BTN — caller |
| Bote | **6bb** | 5.5bb | 22.5bb |
| Stack efectivo | **97bb** | 97.5bb | 89bb |
| SPR | **16.2** | 17.7 | 4.0 |
| Tamaños de apuesta | Un tercio del bote, **un solo tamaño** | Un tercio y tres cuartos (⑦ tiene uno) | Un tercio y dos tercios |
| Rake | No modelado | No modelado | No modelado |
| Comprobado | 2026-08-08 (resultado del spot de estudio) | 2026-08-08 | 2026-08-08 |

El bote de 6bb es ==los 3 de la SB más los 3 de la BB==. Las dos ciegas ya están dentro de la mano, así que no hay ciega muerta aparte. El stack efectivo es ==100 − 3 = 97bb==.

La pantalla va en **ciegas grandes** — las apuestas se leen como "Bet 2bb (33% del bote)", con el importe y la fracción del bote juntos, y el EV aparece como "EV (bb)".

## ¿Con qué frecuencia apuesta de verdad la ciega pequeña?

**67.4% apuesta, 32.6% check.** De 538 combos, 362.1 entran en la apuesta.

| Primera acción de la ciega pequeña | Frecuencia | Combos |
|---|---|---|
| Bet 2bb (33% del bote) | **67.4%** | 362.1 |
| Check | 32.6% | 175.9 |

Puesto al lado del resto de la serie, la diferencia salta a la vista.

| Spot | Quién está fuera de posición | Frecuencia de apuesta OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB, caller | 0.1%–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB, caller | 3.0%–3.2% |
| **7♦6♦5♣ guerra de ciegas (⑫)** | **SB, open-raiser** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB, caller | 11.2% |
| 9♥8♥7♣ conectado (④) | BB, caller | 23.7% |
| **K♥10♦6♠ guerra de ciegas (⑪)** | **SB, open-raiser** | **67.4%** |
| **A♠A♥6♦ guerra de ciegas (⑬)** | **SB, open-raiser** | **80.1%** |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB, 3-bettor | 98–100% |

**No lo leas como "lo único que importa es el asiento".** Ese mismo asiento de ciega pequeña que abre produce 9.6% en ⑫, 67.4% aquí y 80.1% en ⑬ — un **abanico de 70.5 puntos**. Y el 9.6% de ⑫ es *más bajo* que el de los que pagan en ⑤ (11.2%) y ④ (23.7%). La imagen de un precipicio entre los que pagan y los que atacan solo aparece si borras esas dos filas. Lo seguro es que **los botes de 3-bet (98–100%) van aparte**; el resto del abanico lo fijan **el asiento y el board juntos**.

## ¿Por qué lidera aquí el jugador fuera de posición?

**Porque este es el asiento en el que el agresor preflop es además el primero en hablar en el flop.** ⚠ Es una condición *necesaria*, no suficiente — la misma estructura produce **9.6%** [en ⑫](/es/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-es.webp") y **80.1%** [en ⑬](/es/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-es.webp"). El asiento abre la puerta; el board decide cuánto la cruzas.

En una mano corriente esas dos cosas se separan. Cuando el botón abre y la ciega grande paga, **el agresor es el botón pero la primera en hablar es la ciega grande.** Eso es lo que construye la estructura de check y después c-bet, y es el aspecto que tenían del ① al ⑦.

En guerra de ciegas, las dos se funden en una. Subió la ciega pequeña, y la ciega pequeña es la primera en el flop. **La ventaja de rango y el orden de acción caen en el mismo jugador.**

| | Agresor preflop | Primero en hablar en el flop | Apuesta OOP |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | separados → 0.1%–23.7% |
| SB vs BB (⑪ K-10-6) | **SB** | **SB** | juntos → **67.4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | juntos, y aun así → **9.6%** |

⚠ **No borres la tercera fila.** "Juntos" **abre la puerta sin decidir cuánto avanzas** — [⑫](/es/blog/blind-battle-connected-board) tiene una estructura de asientos idéntica a esta, letra por letra, y apuesta 9.6%. Sin ese solapamiento casi nunca lideras (la primera fila); con él, todavía necesitas que **el board le encaje a tu rango** antes de apostar de verdad.

La equity le pone número a esa ventaja. **SB 55.3% contra BB 44.7%.** Del ① al ⑦ el jugador fuera de posición estaba entre 45.1% y 48.5%, siempre por debajo de la mitad — en la dirección contraria.

:::pull[Que apuestes primero no lo decide la posición, sino lo fuerte que sea tu rango en este board concreto.]:::

No tener posición es lo mismo para la ciega grande del ① al ⑦ y para la ciega pequeña de aquí. Lo que las separa es **la relación entre rango y board** — ⚠ y eso no se reduce solo al "rango". En [el board 7-6-5](/es/blog/blind-battle-connected-board) el rango es *literalmente idéntico* y el check llega al 90.4%.

## ¿Por qué 67% aquí si en un bote de 3-bet es 100%?

**Porque el rango con el que defiende la ciega grande es ancho.** Ahí es donde este spot se separa del 100% de apuesta de un bote de 3-bet.

Los dos rangos de aquí son casi del mismo tamaño: **538 combos para la SB, 525 para la BB.** Esas son las manos que siguieron en lugar de foldear. La ciega pequeña solo subió a 3bb, así que la ciega grande — que ya tenía 1bb dentro — solo tuvo que añadir 2bb, y el precio daba de sobra para defender ancho.

Contra un rango ancho **no puedes apostarlo todo a que foldeen.** Por eso el 32.6% se queda atrás como check.

Las manos que hacen check tienen trabajos propios. Ahí viven tanto **las manos demasiado débiles para apostar** como **las que hacen check para inducir una apuesta**. Si el rival lee ese check como debilidad y dispara, le espera un [check-raise](/es/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-es.webp").

:::note[⚠ Este spot de estudio se resolvió con un único tamaño de apuesta — un tercio del bote — como única opción. Abre un tamaño mayor en el árbol y el propio 67.4% puede moverse. Léelo como "pequeño y ancho es la respuesta *en estas condiciones*".]:::

## ¿En qué se diferencian los dos rangos?

**Las clases fuertes están del lado de la ciega pequeña; las manos sin hacer, del lado de la ciega grande.**

![Infografía de composición de rangos que compara las clases de mano de la ciega pequeña y de la ciega grande en un board K-10-6](/images/gto-sb-king-mid-ranges-es.webp "K-10-6 en guerra de ciegas · composición clase por clase — la ciega grande tiene unos 10 puntos más de manos sin hacer")

| Clase | SB (OOP · open-raiser) | BB (IP · caller) |
|---|---|---|
| Trío | **1.7%** | 0.6% |
| Doble pareja | 2.4% | **2.5%** |
| Overpair (AA) | **1.1%** | 0.0% |
| Top pair (K) | **15.6%** | 10.9% |
| Segunda pareja (10) | 11.7% | **13.7%** |
| Pareja débil | 6.1% | **8.0%** |
| Underpair | **10.0%** | 8.0% |
| A-high | **26.8%** | 22.1% |
| Sin jugada | 24.5% | **34.3%** |

Dos casillas lo deciden. **El top pair va 15.6% contra 10.9% a favor de la ciega pequeña, y las manos sin hacer van 24.5% contra 34.3% — casi 10 puntos más para la ciega grande.**

⚠ Aun así, no leas "sin hacer" como "no tiene nada". El solver cuenta los proyectos en un eje aparte — **las cuatro filas de abajo son mutuamente excluyentes y cada columna suma 100%.**

| Proyecto | SB (OOP) | BB (IP) |
|---|---|---|
| Proyecto a dos puntas | 3.0% | 2.3% |
| Gutshot | **16.4%** | **16.0%** |
| Proyecto backdoor de color | 17.8% | **21.1%** |
| Sin proyecto | **62.8%** | 60.6% |

**No hay ninguna fila de proyecto de color** — el board es rainbow, así que ninguno de los dos puede tener cuatro cartas del mismo palo en este flop. Lo que tienen en su lugar es una porción gorda de backdoor, y un backdoor necesita dos cartas seguidas, así que se completa pocas veces.

El 3.0% de proyecto a dos puntas sale ==0.030 × 538 = unos 16 combos==, y en este board exactamente una mano hace dos puntas: **Q-J** (K-Q-J-10, necesita un as o un nueve — **ocho outs**). Dieciséis es justo el número de combos de Q-J. La fila del gutshot es más gorda porque ahí caen A-Q, A-J, Q-9, J-9, 9-8 y 8-7.

Aun así, cuando un tercio del rango rival ni siquiera ha ligado pareja y tu propia parte alta pesa más, apostar pequeño y ancho es lo estándar.

Los sets apuntan en la misma dirección. Tres pares servidos hacen set en este board — KK, TT y 66 — y **la ciega pequeña tiene los tres, nueve combos (1.7%), mientras que a la ciega grande solo le queda 66, tres combos (0.6%).** La ciega grande hace 3-bet con KK y TT contra una apertura de la ciega pequeña en lugar de pagar. Los sobrepares (overpairs) son de la ciega pequeña por la misma razón: AA, seis combos. (El panel etiqueta esa fila como *Trío*; en un board sin pareja como este, siempre es un set.)

## ¿Por qué la realización de equity es 103.1% sin posición?

**Porque la ventaja de rango supera *por poco* a la de posición.** Pon los números de este spot sobre el resto de la serie y la respuesta aparece.

| Elemento | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55.3% | 44.7% |
| EV (bb) | 3.42 | 2.58 |
| **EQR (realización de equity)** | **103.1%** | 96.1% |

El bote es de 6bb, así que la parte de la ciega pequeña es ==6 × 55.3% = 3.32bb== mientras que el EV real es 3.42bb. Eso da ==3.42 ÷ 3.32 ≈ 103.1%==.

Toma siete spots de la serie y ordénalos por EQR:

| Spot | Quién está fuera de posición | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ seco (①) | caller | 45.1% | 84.0% |
| 6♠5♥2♦ bajo (⑦) | caller | 48.3% | 84.3% |
| 9♥8♥7♣ conectado (④) | caller | 48.5% | 93.2% |
| **K♥10♦6♠ guerra de ciegas (⑪)** | **open-raiser** | **55.3%** | **103.1%** |
| 8♦5♣2♠ bote de 3-bet (⑩) | 3-bettor | 58.6% | 106.9% |
| A♦K♠2♥ bote de 3-bet (⑧) | 3-bettor | 68.9% | 109.6% |
| Q♥10♥7♠ bote de 3-bet (⑨) | 3-bettor | 58.3% | 117.8% |

**Todas las filas por encima del 100% pertenecen a alguien que no es el caller.** ⚠ No lo leas al revés — **"no es el caller" no implica "por encima del 100%".** [El board 7-6-5](/es/blog/blind-battle-connected-board), que falta en esta tabla, es la misma ciega pequeña que abre, con un **85.3%**, sentada entre los callers. Y este spot es el más pegado a la línea de todos: el 103.1% la pasa por poco.

⚠ **Tampoco un EQR más alto significa una ventaja mayor.** Lee la clasificación tal como está — la mayor ventaja de rango de la tabla, ⑧ con **68.9%** de equity, se queda en **109.6%**, *por debajo* del **117.8%** de ⑨ con **58.3%** de equity — diez puntos menos. El EQR es ==EV ÷ (equity × bote)==, así que **la equity es el denominador**: cuanto más baja, mayor es la proporción para el mismo EV. Es cierto que la ventaja de una sola subida de apertura se queda en 103.1%; la razón no es "podría haber llegado a 117.8%".

El 96.1% de la ciega grande es la otra cara de la misma historia. **Tiene posición y aun así no llega a su parte.** Por qué la posición suele pagar, y cuándo no basta, está en [por qué importa la posición](/es/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## ¿Qué cambia en la mesa?

- **En guerra de ciegas, no caigas por defecto en "no tengo posición, así que check".** Si abriste desde la ciega pequeña, la ventaja de rango **preflop** es tuya, y el solver apuesta el 67.4% en este board. **Pero sigues leyendo el board** — un rey con un kicker broadway le encaja al que abre, y en los boards que le encajan al que paga el check vuelve incluso desde este asiento. El [board conectado 7♦6♦5♣](/es/blog/blind-battle-connected-board) es exactamente eso: esa misma ciega pequeña apuesta solo el 9.6%.
- **El tamaño es un tercio del bote.** Con la ciega grande defendiendo 525 combos, pequeño y ancho es lo correcto. ⚠ No lo conviertas en "apostar grande es peor" — **este spot de estudio solo tenía el tamaño del 33% en el árbol.** Sin un tamaño mayor resuelto, "¿y si hubiera apostado grande?" es una pregunta que este cálculo no puede responder. [El spot A-A-6](/es/blog/ace-paired-board-strategy), más adelante en la serie, sí tiene el 75% abierto al lado.
- **★Con SPR 16.2, decide de antemano qué significa una subida.** Apostar el 67.4% de tu rango significa recibir subidas a menudo, y con **dieciséis botes** todavía detrás este no es un spot para meter el stack con top pair. Es lo contrario de un bote de 3-bet con SPR 4.0, donde "subida" significaba "el stack se va dentro". Aquí pagar y ver un turn cubre mucho más de tu rango, y fuera de los nueve combos de set y de la **doble pareja (K-10, K-6, 10-6)** hay pocos motivos para comprometerse. 🪶 Fíjate en que **AA está *por debajo* de la doble pareja** — no porque el rey del board la "clave", sino porque un sobrepar sigue siendo una pareja en la jerarquía de manos, y una pareja pierde contra dos parejas. La tabla de clases enumera las categorías en ese orden, trío → doble pareja → sobrepar (el 1.7% · 2.4% · 1.1% que las acompaña son porciones del rango, no una escala de fuerza). ⚠ El nodo posterior a una subida no está en este solve, así que esto es un juicio sacado del SPR, no una cifra del solver.
- **Al defender la ciega grande, recuerda lo que te cuesta hacer 3-bet con KK y TT.** El resultado es exactamente la estructura de este board: el único set de la ciega grande es 66. El rango que paga se adelgaza justo en eso.
- **No leas ese 32.6% de checks como debilidad.** Ahí hay manos de check-raise mezcladas. Los estándares generales de [la estrategia de c-bet](/es/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") merecen una segunda revisión desde este asiento.

:::readnext[Sigue leyendo]
/es/blog/3bet-pot-low-board | Tres combos ligan este flop — y aun así apuesta el 97.8% | /images/gto-3bp-low-oop-es.webp
/es/blog/blind-battle-connected-board | Mismo asiento, mismo stack — y la apuesta cae del 67% al 9.6% | /images/gto-sb-connected-oop-es.webp
:::

## Compruébalo tú mismo

Todas las cifras de aquí aparecen si abres el [solver GTO](/es/solver) y entras en **Spots de estudio → "Board K-T high" → [⚡ Ver resultados]**. Si prefieres jugar el mismo spot como ejercicio, abre el [Entrenador GTO](/es/solver) desde la barra lateral — te reparte una mano al azar y, en cuanto eliges una acción, te enseña la frecuencia mezclada y el **EV perdido (bb)** de tu elección. Tu historial se queda en tu propio navegador.

Mira primero las etiquetas de jugador de arriba: **"OOP (SB (open-raiser))"**. En cuanto veas que se diferencia del "OOP (BB (caller))" de los spots anteriores, lo que este artículo llama "cambió el papel" se entiende al instante. Gratis, sin instalar nada y sin cuenta.

**Q. ¿La ciega pequeña debería cbetear siempre en guerra de ciegas?**

A. No siempre. En este board el solver apuesta el 67.4% y deja el 32.6% en check. Pero eso es otro mundo comparado con un bote de subida simple corriente, donde el jugador fuera de posición apuesta entre 0.1% y 23.7%. **Cuando cambia el papel, cambia lo que haces por defecto.** Ten en cuenta que K-10-6 es un board que le encaja al que abre — igual que un tipo de board separaba 0.1% de 23.7% en los spots anteriores, la frecuencia de apuesta de la ciega pequeña baja en los boards que le encajan al que paga.

**Q. ¿Estar fuera de posición siempre es malo en poker?**

A. Malo, pero no decisivo. En este spot la ciega pequeña se lleva el 103.1% de su parte de equity sin posición, mientras que la ciega grande, que sí la tiene, solo recoge el 96.1%. Una ventaja de rango lo bastante grande cubre una de posición. Dale la vuelta — un rango débil realiza mal incluso en posición.

**Q. ¿Por qué apostar tan pequeño como un tercio del bote?**

A. Porque el rango con el que defiende el rival es ancho. Los dos rangos son casi del mismo tamaño, 538 combos contra 525. Contra alguien de quien no puedes esperar folds, presionar ancho con un tamaño pequeño gana más. Ten en cuenta que este spot de estudio solo tenía el tamaño del 33% como candidato.

**Q. ¿Por qué 66 es el único set de la ciega grande en este board?**

A. Porque con KK y TT se hace 3-bet contra una apertura de la ciega pequeña en lugar de pagar. Así que el rango que paga de la ciega grande solo conserva 66, tres combos (0.6%), mientras que la ciega pequeña tiene KK, TT y 66, nueve combos (1.7%). AA falta en la ciega grande por la misma razón.
`.trim(),
};

export default POST;
