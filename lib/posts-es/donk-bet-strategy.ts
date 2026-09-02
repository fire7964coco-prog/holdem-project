import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ④ 스페인어판 — 9♥8♥7♣ 미들 연결 투톤
 * **시리즈에서 리드 벳이 처음 등장하는 스팟이다.**
 *
 * ▶ 소스 = EN 마스터 lib/posts-en/donk-bet-strategy.ts (824b73d2 · updated 2026-09-02).
 *   방식은 스펙 §4-A-3 «번역 + 5필드» — 구조·수치·전략 논거는 EN 그대로,
 *   es로 다시 정하는 것은 seoTitle·desc·H2·FAQ·내부링크 + 본문 용어 표기뿐이다.
 * ▶ 조준 키워드 (docs/keyword-bank/es-gto-series.md §3-④)
 *   「donk bet poker」 10 · 「donk bet」 10 · **「donkear」 MX 20**(동사형이 산다) ·
 *   「cuándo no cbetear」·「cuándo hacer check」 · 훅 = 23.7%.
 *   FAQ 흡수 = 「¿Qué es un donk bet?」 직답 · PAA 「¿Qué es donkear?」.
 *   ⚠ 「donk」 단독은 오염된다(브랜드·인물) — seoTitle·desc·FAQ에 poker 앵커를 붙인다.
 * ▶ 표기 규약 — board(tablero 금지) · 앱 축어(two-tone·Overpair·Top pair·Sin jugada·A-high/K-high) ·
 *   산문 카드는 10♠(레인지 표기 JT·T6s·65s·T7s는 축어) · 수치는 언어 불변(반각 % · 소수점 . · bb).
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 — 「esta serie」로 쓴다.
 * 🔴 「레인지 우위가 BB로 넘어갔다」고 쓰지 마라 — 에퀴티는 48.5 대 51.5로 여전히 BTN이 앞선다.
 * 🔴 계산 정본은 docs/gto-solver-series-spec.md §4-B. 게이트 = npm run check:gto.
 */
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "El flop donde el donk bet es correcto — 9-8-7",
  seoTitle: "El board donde donkear es correcto — 9-8-7 en poker",
  desc: "En poker un donk bet suena a error de novato. En 9-8-7 el solver lidera el 23.7% — la condición del board que lo vuelve correcto, y con qué tamaño hacerlo.",
  tldr: "En 9♥8♥7♣, tras una apertura del botón y un pago de la ciega grande, la ciega grande hace check el 76.2% y lidera el 23.7% — el primer spot de esta serie donde el lead es una estrategia de verdad y no un residuo de redondeo. La ventaja de rango no cambió de manos: la equity sigue siendo 48.5% contra 51.5%. Lo que cambió es la diferencia y dónde está la fuerza de cada lado.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-es.webp",
  imageAlt: "Pantalla de resultados del solver GTO de HoldemMaster en un flop conectado medio two-tone: la cuadrícula de la ciega grande mezcla el verde del check con el naranja y el rosa de las apuestas",
  tags: [
    "donk bet poker",
    "donkear",
    "que es un donk bet",
    "cuando no cbetear",
    "cuando hacer check poker",
    "lead bet",
    "poker gto",
  ],
  content: `
Una de las primeras reglas que aprendes en el poker: **check al que subió.** El jugador que atacó preflop es el que hace la primera apuesta en el flop.

Los tres spots anteriores eran esa regla en su versión más obediente. En los flops [A-high](/es/blog/a-high-board-cbet), [K-high](/es/blog/k-high-board-cbet) y [broadway](/es/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-es.webp"), el lead de la ciega grande estuvo por debajo del 2% cada vez — en K-8-3 y Q-J-10 fue 0.2% o menos, cero a efectos prácticos.

En **9♥ 8♥ 7♣** es el **23.7%**. Aquí es donde la regla se rompe.

Una apuesta del jugador que solo pagó preflop es un **donk bet** — de donkey, burro, lo que ya dice cómo se ha visto esta jugada. También se le llama **lead**, y en la mesa el verbo es **donkear**. Los solvers la meten en la estrategia en boards concretos, y este es el más claro del set de estudio.

Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster, leídas en la salida del spot de estudio el 2026-08-19.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | 9♥ 8♥ 7♣ (two-tone — dos corazones)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb
Resultado | BB lidera el 23.7% — el primer lead real de esta serie
:::

> **Respuesta rápida**
> En 9♥8♥7♣ la ciega grande hace check el **76.2%** y lidera el **23.7%** repartido en dos tamaños (los dos redondeados). Pero **la ventaja de rango no cambió de manos** — la equity sigue siendo 48.5% contra 51.5% a favor del botón. Lo que cambió es el tamaño de la diferencia, y dónde están las manos fuertes: la fuerza de la ciega grande está en escaleras ya hechas, la del botón en sobrepares (overpairs) que este board amenaza.

## ¿En qué condiciones salieron estos números?

El botón abre a 2.5bb, la ciega grande paga y el resto foldea — dos jugadores, un bote de 5.5bb, 97.5bb detrás. Los rangos son las aproximaciones estándar del juego online a 100bb, el flop es 9♥ 8♥ 7♣ con dos corazones, y el solver dispone de dos tamaños de apuesta, más o menos un tercio y tres cuartos del bote. El rake no está modelado, y las cifras se leyeron el 2026-08-19.

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | 9♥ 8♥ 7♣, two-tone (dos corazones) |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb |
| Tamaños de apuesta | Alrededor del 33% y del 75% del bote |
| Rake | No modelado |
| Comprobado | 2026-08-19, salida del spot de estudio |

## ¿Con qué frecuencia donkea la ciega grande (BB) en 9-8-7?

**El 23.7%**, y más de dos tercios de eso entra con el tamaño pequeño.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **76.2%** | 352.0 |
| Bet 1.8bb (33% del bote) | **16.8%** | 77.8 |
| Bet 4.1bb (75% del bote) | 6.9% | 32.2 |

Pon los cuatro flops uno al lado del otro y el salto es evidente.

| Flop | Lead de la BB |
|---|---|
| A-7-2 (seco) | 1.9% |
| K-8-3 (seco) | 0.2% |
| Q-J-10 (conectado, two-tone) | 0.1% |
| **9-8-7 (conectado medio, two-tone)** | **23.7%** |

**De menos del 2% al 23.7% — más de diez veces.** Eso no es "meterlo de vez en cuando"; eso es otra estrategia.

## ¿Qué cambió respecto a los tres primeros flops?

**Por primera vez la ciega grande va por delante en una categoría alta.** Las escaleras completadas son 5.2% contra 4.2%.

Cuenta las combinaciones y la razón aparece exacta. Tres manos hacen escalera aquí: ==JT (J-10-9-8-7)==, ==T6 (10-9-8-7-6)== y ==65 (9-8-7-6-5)==.

| Mano que hace escalera | BB (rango de pago) | BTN (rango de apertura) |
|---|---|---|
| JT | ✅ del mismo palo y de distinto palo (16 combos) | ✅ del mismo palo y de distinto palo (16 combos) |
| T6 | ✅ **T6s (4 combos)** | ❌ fuera del rango de apertura |
| 65 | ✅ 65s (4 combos) | ✅ 65s (4 combos) |
| **Total** | **24 combos = 5.2%** | **20 combos = 4.2%** |

**La diferencia entera es T6s — cuatro combos.** El rango del botón de este solver empieza en T7s, así que T6 del mismo palo nunca llega, mientras que la ciega grande la defiende barato porque 1bb de los 2.5bb ya está puesto. Esa única casilla decide quién tiene más **escaleras completadas** — no quién tiene las nuts, que es otra pregunta: la mejor mano aquí es J-10, y los dos jugadores tienen sus 16 combos.

También funciona al revés. Los sobrepares son del botón.

| Overpair (pareja servida por encima del 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 combos | ✅ 6 combos |
| JJ · QQ · KK · AA | ❌ todas hacen 3-bet preflop | ✅ 24 combos |
| **Total** | **6 combos = 1.3%** | **30 combos = 6.4%** |

## Entonces, ¿este flop favorece a la ciega grande?

**No. La equity sigue siendo 48.5% contra 51.5%.** Vale la pena decirlo sin rodeos, porque es la conclusión equivocada más fácil de sacar: que aparezca un lead no significa que la ventaja de rango se haya movido.

![Infografía de composición de rango que compara las categorías de mano de la ciega grande y del botón en un board conectado medio two-tone](/images/gto-srp-middle-connected-ranges-es.webp "9♥8♥7♣ · reparto por categorías — las escaleras favorecen a la ciega grande, los sobrepares y el A-high al botón")

| Categoría | BB (OOP) | BTN (IP) |
|---|---|---|
| Escalera | **5.2%** | 4.2% |
| Trío — aquí siempre es set | 1.9% | 1.9% |
| Doble pareja | 2.8% | 2.8% |
| Overpair | 1.3% | **6.4%** |
| Top pair (9) | **13.6%** | 12.7% |
| Segunda pareja (8) | **8.4%** | 7.6% |
| Pareja débil (tercera o menor) | **6.5%** | 6.4% |
| Underpair | **6.5%** | 6.4% |
| A-high | 24.2% | **30.5%** |
| K-high | **13.9%** | 11.9% |
| Sin jugada | **15.6%** | 9.3% |

(Las columnas suman 99.9 y 100.1 — eso es redondeo.)

**Solo dos filas favorecen al botón**: los sobrepares, 6.4% contra 1.3%, y el A-high, 30.5% contra 24.2%. La doble pareja está exactamente igualada en 2.8%, y todas las demás filas son de la ciega grande.

Los proyectos hay que leerlos junto a esa tabla.

| Proyecto | BB (OOP) | BTN (IP) |
|---|---|---|
| Proyecto combinado (escalera + color) | **4.5%** | 3.6% |
| Proyecto de color | **3.2%** | 2.3% |
| Proyecto a dos puntas | **26.2%** | 23.7% |
| Gutshot | **21.6%** | 20.6% |
| Proyecto backdoor de color | 14.1% | **17.6%** |
| Sin proyecto | 30.3% | **32.2%** |

**Contando solo proyectos reales — sin backdoors — la ciega grande tiene un 55.5% contra el 50.2% del botón.** En este board no son solo las manos hechas las que se inclinan de su lado; también lo hacen las que todavía están creciendo.

Lo mismo se sostiene después de contar el dinero. La realización de equity sigue favoreciendo al botón, solo que por menos que en ningún otro sitio hasta ahora.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48.5% | 51.5% |
| EV (bb) | 2.48 | 3.02 |
| **Realización de equity (EQR)** | **93.2%** | **106.4%** |

Después del 84.0%, el 80.7% y el 77.9% de los tres primeros flops, la realización de equity de la ciega grande **se da la vuelta aquí** — el 93.2% es lo más cerca que llega de conservar su parte entera. Esa es la señal de verdad: un lead aparece cuando el jugador fuera de posición por fin puede quedarse con lo que su equity vale.

Dos cosas cambiaron para que eso pasara.

**Primera, la diferencia se estrechó.** Una diferencia de equity de 3.0 puntos es la menor de los cuatro flops vistos hasta aquí — A-7-2 era de 9.8 puntos, Q-J-10 de 6.6.

**Segunda, la fuerza del botón está en sitios vulnerables.** Las dos únicas categorías en las que gana son sobrepares (6.4%) y A-high (30.5%) — y una de las dos no es fuerza en absoluto. Casi todo ese A-high no tiene pareja aquí — y donde sí lleva proyecto, la ciega grande también, así que los proyectos se cancelan en lugar de favorecer a nadie. Los sobrepares son frágiles por la razón de la sección siguiente. La ventaja de la ciega grande, en cambio, está en manos que **ya están hechas**.

Un lead se vuelve correcto no por fuerza promedio, sino cuando **tienes más de las nuts y tu rival no puede apostar con confianza.** Aquí se cumplen las dos condiciones: la ciega grande tiene más escaleras, y con un 30.5% de su rango en A-high el botón no puede disparar ancho. Ese espacio sin reclamar es lo que se lleva el lead.

## ¿Por qué los sobrepares del botón (BTN) son vulnerables?

**Porque casi la mitad de las cartas que faltan empeoran el turn para ellos.**

Digamos que tienes QQ. Ahora mismo estás cerca de la mejor mano. De las 47 cartas que no ves:

- **10, J, 6, 5 — 16 cartas.** Cualquiera de ellas **completa una escalera** con una sola carta de la mano de tu rival. Una jota deja el board J-9-8-7, y **cualquiera que tenga un diez ya tiene J-10-9-8-7.**
- **Los corazones restantes que no están ya contados — 7 cartas.** El color llega.

Juntas son **23 de 47 cartas, alrededor del 49%** (⚠ para una QQ sin corazón dentro — si llevas Q♥, uno de esos siete corazones está en tu propia mano, así que son 22 de 47, alrededor del 47%). Aproximadamente un turn de cada dos hace la mano más difícil de jugar. Si contar esos outs desde el otro lado es la parte que quieres afianzar, empieza por [probabilidad de proyecto](/es/blog/holdem-drawing-odds).

Así que un sobrepar aquí es una mano para **cobrarles a los proyectos ahora y frenar cuando te suben** — no para construir un bote enorme. El bote que conviene evitar es el que se construye después de un mal turn, no el que construyes en el flop.

## ¿Por qué el tamaño pequeño es dos tercios del lead?

**Porque el lead es una afirmación sobre el rango entero, no sobre una mano.** Del 23.7%, 16.8 puntos entran a un tercio del bote y 6.9 a tres cuartos.

Una apuesta pequeña dice "a mi rango entero le gusta este flop". Si solo apostaran las manos fuertes, el rango se parte en "apuesto = fuerte, paso = débil" y tu rival lo lee gratis. Mezclar escaleras, top pairs y proyectos en un mismo tamaño pequeño los deja indistinguibles.

El tamaño grande sigue existiendo por una razón. Si todas las escaleras entraran en la apuesta pequeña, el botón podría pagar todo sin enfrentarse nunca a un bote grande. **Usar dos tamaños es lo que deja incómodos tanto el call como la subida.**

## ¿Cuándo no cbetear? La excepción del 9-8-7

**En este flop, como el que subió preflop** — lidere o haga check la ciega grande. Es el board más claro de "cuándo no cbetear" del set de estudio, y la razón no es la textura sino cómo queda tu propio rango sobre ella. Cómo se generaliza ese criterio según el tipo de board está en [estrategia de c-bet](/es/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

La razón es la composición del rango. El A-high es el 30.5% del rango del botón, el K-high el 11.9%, sin jugada el 9.3% — un 51.7% sin pareja. ⚠ **Pero "sin pareja" no es la razón por sí sola.** Suma la columna de la ciega grande igual y sale **53.7%** — la ciega grande tiene *más* rango sin pareja, por 2.0 puntos, y es la que lidera el 23.7% de las veces. Lo que de verdad frena al botón es **lo que se quedó en el rango que hace check**: el 76.2% de las manos de la ciega grande sigue ahí, con escaleras y un 13.6% de top pair dentro, así que apostar ancho se estrella contra un **check-raise**. ⚠ Algunos de esos 24 combos de escalera lideran en lugar de pasar, así que no están todos sentados en el rango de check — y la *frecuencia* del check-raise no es algo que contenga este cálculo.

Las cartas altas **de distinto palo** que fallan, como AKo y AQo, son check back de manual: tienen valor de showdown, y cuando llega una subida no te queda nada con lo que continuar. Las versiones del mismo palo son otra mano — A♥K♥ y A♥Q♥ son proyectos al color máximo aquí, y apuestan.

:::note[El spot de estudio solo pre-resuelve la primera acción del flop — la de la ciega grande. Cuánto baja en realidad la frecuencia de c-bet del botón tras ese check no está en esta pantalla. Abre "Resolver este spot tú mismo" y recorre el árbol para verlo.]:::

## ¿Qué cambia en la mesa?

- **Los leads viven en boards conectados medios después de una apertura ancha de posición tardía.** El board monotone del spot siguiente también anda por el 11%, mientras que los flops secos A-high y K-high son cero a efectos prácticos. ⚠ Eso sí, el único board conectado medio que esta serie resuelve de verdad es 9-8-7, y la condición no es la textura sola sino **qué rango tiene más nuts sobre ella.** La prueba está dentro de la propia serie: el [flop 6-5-2](/es/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-es.webp") es el mismo bote de subida simple de botón contra ciega grande y allí la ciega grande lidera apenas el **3.2%**, porque la única mano que hace escalera es 4-3 y ninguno de los dos rangos la lleva. Bajo y conectado por sí solo no produce un lead.
- **Aun así haces check tres cuartas partes de las veces.** Cuando sí lideres: pequeño, y con más que tus mejores manos — un rango que solo lidera escaleras se lee de inmediato, así que el top pair y los proyectos van en el mismo tamaño. Pero no pierdas de vista el total: **el lead entero es 23.7%, y 16.8 de eso al tamaño pequeño.** Convertido en "lidera todos los proyectos" se vuelve medio rango e invierte la estrategia. El otro 76.2% hace check.
- **En el botón, resístete a cbetear en esta textura.** Más de la mitad de tu rango no tiene pareja, y los sobrepares quieren un bote controlado y no uno grande.
- **Contra un rival que cbetea muchísimo, hacer check puede rendir más que liderar** — y con las escaleras y los top pairs, check-**raise** en lugar de solo check-call. Dejar que te apueste tus manos fuertes vale más que tomar la iniciativa, pero solo si después se lo cobras.
- **Léelo también al revés.** Contra un jugador que hace check back en los boards húmedos, liderar vale más de lo que sugiere el número del solver: hacer check allí simplemente pierde la calle.

:::readnext[Sigue leyendo]
/es/blog/broadway-board-strategy | Dos tercios del rango llevan proyecto — y aun así hace check | /images/gto-srp-broadway-oop-es.webp
/es/blog/k-high-board-cbet | El flop K-high donde el que pagó hace check el 99.8% | /images/gto-srp-dry-king-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver) y ve a **Spots de estudio → Conectado medio, two-tone → [⚡ Ver resultados]**.

La mejor forma de estudiar este es **al lado de un board seco.** Abre primero "Board seco K-high" y mira una cuadrícula cubierta de un solo verde; después vuelve aquí y observa cómo aparecen el naranja y el rosa en medio de ese verde. Los mismos jugadores, los mismos rangos — tres cartas cambiaron la estrategia.

Después abre el **Entrenador GTO** en la barra lateral y deja que te reparta el lead que acabas de leer: te da una mano al azar con los pesos reales del rango y te dice en ciegas grandes lo que costó elegir mal. Gratis, sin nada que instalar y sin cuenta.

## Preguntas frecuentes

**Q. ¿Qué es un donk bet en poker?**

A. Una apuesta en el flop del jugador que no subió preflop — apostar contra el agresor en lugar de pasarle la acción. El nombre viene de "donkey", burro, que es como se vio esta jugada durante mucho tiempo. Los solvers demuestran que es correcta en texturas de board concretas, y en este flop es el 23.7% de la estrategia de la ciega grande.

**Q. ¿Por qué se dice que donkear es malo?**

A. Porque en casi todos los boards lo es. En esta serie, los flops A-high, K-high y broadway tenían a la ciega grande liderando por debajo del 2%, ya que el que sube preflop conecta mejor con esas cartas. La excepción es un board donde **el que pagó tiene más de las mejores manos** — y 9-8-7 es el ejemplo más claro.

**Q. ¿La ciega grande tiene ventaja en 9-8-7?**

A. No. La equity es 48.5% contra 51.5% y la realización de equity 93.2% contra 106.4%, las dos a favor del botón. El lead aparece porque la ciega grande tiene más escaleras completadas mientras que la fuerza del botón está concentrada en sobrepares que este board amenaza — no porque la ciega grande vaya por delante en conjunto.

**Q. ¿Cuándo hay que hacer check en lugar de liderar en poker?**

A. Tres cuartas partes de las veces, incluso en este flop — el 76.2% del rango de la ciega grande hace check. Haz check cuando tu rango no tenga más manos hechas que el suyo, que es cualquier board seco A-high o K-high, y haz check cuando tu rival apueste demasiado de todos modos: dejar que dispare vale más que quitarle la iniciativa. Liderar es la excepción, no la mejora.

**Q. ¿Qué pasa si lidero y me suben?**

A. Planifícalo antes de apostar, porque un lead de un tercio del bote invita a subidas. Las escaleras y los proyectos a dos puntas continúan — tienes equity para jugar un bote grande. El top pair con un nueve es un call, uno solo, y normalmente frena en un turn malo. Las manos sin pareja ni proyecto deberían retirarse en lugar de "ir a ver": esa es exactamente la parte de tu rango a la que apunta la subida.

**Q. ¿Con qué tamaño debo liderar?**

A. Casi siempre pequeño. El solver pone 16.8 de los 23.7 puntos en una apuesta de un tercio del bote y 6.9 en tres cuartos. El tamaño pequeño es el estándar porque la idea es presionar con el rango entero; el grande existe para que tu rival no pueda simplemente pagarlo todo.

**Q. ¿Estas frecuencias de lead sirven en mi límite?**

A. La condición del board sí; el 23.7% exacto no viaja intacto. Asume juego mano a mano, 100bb, una apertura de botón de 2.5bb y rangos de defensa estándar, sin rake. Una apertura en vivo más grande cambia el bote y la relación entre stack y bote, y una ciega grande que defiende mucho más ancha que el modelo lleva todavía más escaleras — lo que hace el lead más fuerte, no más débil.
`.trim(),
};

export default POST;
