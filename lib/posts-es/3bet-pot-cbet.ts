import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑧ 스페인어판 — A♦K♠2♥ 3벳팟
 *
 * 소스 = 「lib/posts-en/3bet-pot-cbet.ts」 (EN 커밋 bbf325d1 · EN updated 2026-09-02).
 * 방식 = «번역 + 5필드»(spec §4-A-3) — 구조·수치·고지 문장은 EN 축어,
 *        seoTitle·desc·H2·FAQ·내부링크만 es로 재조준했다.
 *
 * 🔴 **폐기 명제를 되살리지 마라**(브리프 §4) — 특히 「SPR이 낮아서 작게 친다」.
 *   EN의 반박(«사이즈를 정하는 건 스택 깊이가 아니라 레인지의 모양»)이 본문에 그대로 살아 있다.
 *   ⑨⑩은 같은 SPR 4.0인데 큰 사이즈가 98.4%·97.8%다.
 *
 * ▶ 조준 (「docs/keyword-bank/es-gto-series.md」 §3-⑧ · §1)
 *   **「spr poker」 ES 70 / MX 20 = 이 시리즈 최대 축이자 유일하게 두 자리를 넘는 키워드**
 *   (SD 0 · 자사 0편 · MX 12개월 +29%). 보조 = 「spr poker significado」 10 · 「stack to pot ratio」 10 ·
 *   「3bet pot」 10. SERP는 전부 «SPR이란» 정의 글이라 «SPR 4.0에서 100% 벳» 각도가 비어 있다.
 *   「c-bet」 단독은 holdem-continuation-bet 소유 → 제목 금지.
 *
 * ▶ 표기 규약 — 수치·카드는 언어 불변 · 앱 화면 라벨은 es 축어(브리프 §1-B:
 *   Board A-high, ventaja del 3-bettor · OOP (BB (3-bettor)) · Bet 7.4bb (33% del bote) ·
 *   Bet 14.9bb (66% del bote) · Manos · Sin jugada). 언페어 보드라 앱의 「Trío」는 각주로 set임을 밝힌다.
 *
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 → 「esta serie」로만 가리킨다.
 */
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "Nadie hace check en este flop",
  seoTitle: "Nadie hace check en este flop — qué hace el SPR 4 en poker",
  // 153자
  desc: "En este bote de 3-bet el solver nunca hace check: apuestan los 63 combos. No porque el rango sea fuerte, sino porque al rival no le quedan ases ni reyes.",
  tldr: "En A♦K♠2♥, en un bote de 3-bet, la ciega grande apuesta el 100% de las veces. El check es 0.0% — ni un combo de 63. En los siete spots anteriores su opción por defecto era hacer check, entre el 76.2% y el 99.9% del tiempo. Lo que cambió es sobre todo la acción preflop: la ciega grande hizo 3-bet en lugar de pagar, así que es dueña de la parte alta de este flop mientras el botón se deshizo de sus ases y reyes servidos con el 4-bet. Y con un SPR de 4.0 no hay calle posterior a la que aplazar nada.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-es.webp",
  imageAlt: "Resultados del solver GTO de HoldemMaster en un bote de 3-bet con board de as: la matriz 13x13 de la ciega grande entera coloreada para apostar y el check marcando 0.0%",
  tags: [
    "spr poker",
    "stack to pot ratio",
    "spr poker significado",
    "bote de 3-bet",
    "3bet pot",
    "stack efectivo",
    "poker gto",
  ],
  content: `
En los siete spots anteriores a este, la respuesta de la ciega grande era casi siempre hacer check. Incluso en el [flop 9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp"), donde apostar primero importaba más que en ningún otro, solo apostaba el 23.7% de las veces. En todos los demás hacía check entre el 88.8% y el 99.9%.

Aquí hace lo contrario: **la ciega grande apuesta su rango entero** — los 63 combos, todas las veces.

Lo que cambió es sobre todo la acción preflop: la ciega grande hizo **3-bet** en lugar de pagar, así que el bote es de 22.5bb en vez de 5.5bb. (⚠ El board también cambió — el spot ① era A♥7♦2♣ y este es A♦K♠2♥ — así que no es una comparación controlada con el preflop como única variable.) Esa diferencia le da la vuelta al flop entero. Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster.


:::stripe
Spot | La BB hace 3-bet → BTN paga (mano a mano)
Flop | A♦ K♠ 2♥ (rainbow)
Bote · stack | Bote 22.5bb · stack efectivo 89bb · **SPR 4.0**
Resultado | La BB apuesta el 100% — el check es 0.0%
:::

> **Respuesta rápida**
> La ciega grande apuesta su rango entero. El tamaño pequeño (7.4bb, 33% del bote) se usa el 57.8% de las veces y el grande (14.9bb, 66%) el 42.2%. No es porque toda mano sea fuerte — el 38.1% del rango es un par servido por debajo del rey. Es porque **el botón se deshizo de sus ases y reyes servidos con el 4-bet antes del flop**, así que la parte alta de este board le pertenece a un solo jugador, y con un SPR de 4.0 no hay calle posterior por la que valga la pena guardarse un check.

## ¿En qué condiciones salieron estos números?

★**Las condiciones son distintas a las de los primeros siete spots.** El bote, el stack y los papeles cambiaron todos, así que la tabla va primero.

| Condición | Este spot (bote de 3-bet) | ①–⑦ (bote de subida simple) |
|---|---|---|
| Preflop | BTN abre → **la BB hace 3-bet a 11bb** → BTN paga | BTN abre 2.5bb → BB paga |
| OOP (actúa primero) | **BB — 3-bettor** | BB — caller |
| IP | BTN — caller | BTN — open-raiser |
| Bote | **22.5bb** | 5.5bb |
| Stack efectivo | **89bb** | 97.5bb |
| **SPR** | **4.0** | 17.7 |
| Tamaños de apuesta | Aproximadamente 1/3 y 2/3 del bote | Aproximadamente 33% y 75% (⑦ tenía un solo tamaño) |
| Rake | No modelado | No modelado |
| Comprobado | 2026-08-20 | 2026-08-20 |

El bote de 22.5bb es ==11 del 3-bet + 11 del call + 0.5 de ciega pequeña muerta==, y el stack efectivo es ==100 − 11 = 89bb==.

## ¿De verdad la frecuencia de check es 0%?

**0.0%.** La columna de combos también marca 0.0, así que ninguno de los 63 combos hace check — no hay nada escondido bajo el redondeo. La apuesta se reparte entre dos tamaños: el 57.8% toma el pequeño de 7.4bb y el 42.2% el grande de 14.9bb. En los siete botes de subida simple anteriores, la opción por defecto de la ciega grande era la contraria en todos y cada uno.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Bet 7.4bb (33% del bote) | **57.8%** | 36.6 |
| Bet 14.9bb (66% del bote) | 42.2% | 26.4 |
| Check | **0.0%** | **0.0** |

(Los porcentajes del solver y sus conteos de combos se agregan de forma distinta y no dividen exacto — ==36.6 ÷ 63 = 58.1%== frente al 57.8% que muestra. **Los valores de arriba están citados tal como los enseña el panel.** El resultado de 0 combos no se ve afectado.)

Un 0.0% no significa que hacer check esté prohibido. Significa que **el EV de check de cada combo salió por debajo de su EV de apuesta en este árbol, con estos rangos.**

En los spots anteriores la acción perdedora al menos conservaba una migaja — 0.2%, 0.1%. Aquí el check ni siquiera recibe eso.

## ¿Por qué no hace check ni un solo combo?

**Porque la ciega grande es dueña de la parte alta de este board sin discusión.** Tres manos hacen set en A-K-2, y ella tiene dos de las tres. Cuando el jugador que tiene que actuar primero además tiene la mejor mano mucho más seguido, no hay nada que un check proteja mejor que una apuesta. La tabla de categorías enseña hasta dónde llega eso.

| Categoría | BB (OOP) | Combos | BTN (IP) | Combos |
|---|---|---|---|---|
| Set | **9.5%** | 6 | 2.3% | **3** |
| Doble pareja | **14.3%** | 9 | 6.9% | 9 |
| Top pair (un as) | **33.3%** | 21 | 20.8% | 27 |
| Segunda pareja (un rey) | 4.8% | 3 | **11.5%** | 15 |
| Underpair | 38.1% | 24 | **46.2%** | 60 |
| Sin jugada | **0.0%** | **0** | 12.3% | 16 |

(En pantalla la ciega grande no tiene ninguna fila "Sin jugada" — una categoría al 0% no se dibuja.)

Mira la primera fila. **Tres manos hacen set en A-K-2 — AA, KK y 22 — y el botón solo tiene la última.** (El panel del solver etiqueta esa fila como *Trío*. En un board sin pareja, un par servido que liga con una carta del board es un **set** — la distinción está desarrollada en el [spot del board pareado](/es/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-es.webp").) El botón hace 4-bet con sus ases y reyes servidos antes del flop, así que su cuenta de sets son tres combos contra los seis de la ciega grande.

Ese es el spot entero. Cuando tu rival casi no puede tener la mejor mano, puedes apostar con las partes de tu rango que no son fuertes en absoluto — y el 38.1% de este rango es un par servido *por debajo* del rey.

**"Sin jugada: 0.0%" no es la razón, aunque sea fácil pensarlo.** El mismo rango de 3-bet en un board bajo dice lo contrario: en el [flop 8-5-2](/es/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-es.webp"), más adelante en esta serie, el 48.2% del rango de la ciega grande es A-high sin ninguna pareja — y aun así hace check apenas el **2.0%**. Pasar de 0% de aire a 48% de aire mueve el check dos puntos. Lo que hace aparecer un check no es cuánto aire tienes; es si el board se vuelve en contra de quien hizo el 3-bet.

:::note[⚠ Esta es la imagen espejo del [flop con as en un bote de subida simple](/es/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-es.webp"). Allí la ciega grande era la que tenía el rango **capado** — sin AA, AK ni AQ, porque los habría 3-beteado — y hacía check el 98.2%. La misma textura con as, asientos opuestos: el jugador que hizo 3-bet es el que se queda con la parte alta.]:::

## ¿Qué es el SPR en poker?

**SPR es la abreviatura de stack-to-pot ratio: el stack efectivo dividido entre el bote al empezar el flop.** Aquí es ==89 ÷ 22.5 = 4.0==, así que el stack que queda detrás es solo cuatro veces lo que ya hay en el centro. Ese es el número que convierte una decisión de flop en una decisión sobre el stack entero, porque ya no queda sitio para aplazar la pregunta.

| Situación | Bote | Stack efectivo | SPR |
|---|---|---|---|
| Bote de subida simple (①–⑦) | 5.5bb | 97.5bb | **17.7** |
| Bote de 3-bet (este) | 22.5bb | 89bb | **4.0** |

El número importa porque te dice **cuántas apuestas quedan**, no cuánto dinero queda. Toma el tamaño del 66% que ofrece el solver aquí y córrelo calle por calle:

- Flop **14.9bb** → te pagan, el bote queda en 52.3bb y quedan 74.1bb
- Turn **34.5bb** → te pagan, quedan 39.6bb
- River **39.6bb** all-in

**Tres apuestas y se acabó: ==14.9 + 34.5 + 39.6 = 89.0==.** Con dos llegas a 49.4bb, que es el 55.5% del stack — no todo. Si quieres que las tres apuestas caigan exactamente en all-in con la misma fracción cada calle, esa fracción es ==alrededor del 54% del bote==.

Corre esas mismas tres apuestas en un bote de subida simple y habrás gastado ==3.67 + 8.56 + 19.96 = 32.2bb==, un tercio del stack. **Esa es la diferencia real entre SPR 17.7 y SPR 4.0** — no el dinero, sino el número de decisiones que todavía te quedan por tomar. Y cuando no hay calle posterior a la que aplazar nada, un check ya no compra nada.

## ¿Por qué se usa más el tamaño pequeño?

**Por la forma del rango, no por la profundidad del stack.** Los 63 combos de aquí son pareja o mejor, así que **la parte de abajo del rango desapareció por completo** y nunca se parte en "nuts o nada". Sin aire que acompañe al tamaño grande, todo el rango se empuja hacia el pequeño — por eso el 57.8% sale a un tercio del bote. ("Condensado" es la etiqueta habitual para un rango sin parte de abajo *ni* parte de arriba; aquí no encaja, porque este rango es dueño de la parte alta del board sin discusión — los seis combos de set.)

A-K-2 rainbow casi no da nada a lo que proyectar, así que tampoco hace falta cobrarle un precio a los proyectos. Entre las dos cosas, la forma del rango es la que hace el trabajo.

⚠ **"Stacks cortos significan apuestas pequeñas" no es la explicación.** Dos spots posteriores de esta serie están exactamente en el mismo SPR de 4.0 y disparan el tamaño *grande* casi siempre — Q-10-7 con un **98.4%** y [8-5-2](/es/blog/3bet-pot-low-board) con un **97.8%** — por dos razones distintas. Q-10-7 es un board húmedo, así que una apuesta grande es lo que le pone precio a los proyectos. 8-5-2 es seco como este, pero su rango se parte en sobrepares (overpairs) y A-high sin nada en medio, y una forma polarizada apuesta grande. La misma profundidad de stack, el tamaño opuesto, y ninguna de las dos razones es la profundidad.

**Y el tamaño grande tampoco es "la parte que les toca a las manos fuertes".** Cuenta los combos que pueden meter un stack entero — sets, doble pareja y top pair — y te salen ==6 + 9 + 21 = 36 combos, el 57.1%==, que es más que el 42.2% que apuesta grande.

La pista es que **los conteos de combos no son números enteros**: 26.4 al tamaño grande y 36.6 al pequeño. Si se asignaran categorías completas a un tamaño, los dos conteos serían enteros. **La misma mano se está mezclando entre los dos tamaños**, y el 42.2% significa "el 42.2% del rango", no "un nivel concreto". Que el tamaño sea ilegible es justamente el objetivo.

## ¿Qué tiene realmente el botón (BTN)?

**Casi la mitad de su rango que paga — el 46.2% — es un par servido sin as ni rey dentro** — así que entra de frente a un board que tiene los dos.

![Composición de rango en un bote de 3-bet con board de as: la ciega grande se queda con todos los combos de set mientras el rango del botón se amontona en parejas medianas](/images/gto-3bp-ace-king-ranges-es.webp "Bote de 3-bet en A-K-2 · la ciega grande conserva la parte alta del board mientras el rango del botón se amontona en el medio")

Los underpairs son el 46.2%, o 60 combos: de QQ hasta 33, diez parejas de seis combos cada una. No pueden pagar dos barriles en esta textura.

Una advertencia que conviene nombrar: esos 130 combos son lo que parece una defensa **teóricamente correcta**. Los rivales reales foldean los pares servidos medianos y pagan con A-Q, A-J y K-Q en su lugar. Contra ese jugador el 46.2% no está — así que mira con qué pagó de verdad tu rival antes de llevarte estos números a una partida en vivo.

## ¿Cómo responde el botón a una c-bet de un tercio del bote?

**Es un spot difícil de pagar hasta el final.** Los underpairs del botón están bloqueados tanto por el as como por el rey, y con un SPR de 4.0 no queda mucha distancia antes de que el stack se acabe.

⚠ *Cuál* de las apuestas es el all-in depende del tamaño. A dos tercios es 14.9 → 34.5 → 39.6, exactamente tres. Con la apuesta de **7.4bb (un tercio)** de la que trata esta sección, tres apuestas suman ==7.4 + 12.3 + 20.4 = 40.1bb==, solo el 45% del stack. Y el nodo del turn no existe en este solve — el spot de estudio se detiene en la primera acción del flop, así que todo lo que sigue se lee a partir de la composición de los rangos.

Ante 7.4bb a un bote de 22.5bb, negarle beneficio a un farol puro exige aproximadamente el ==22.5 ÷ (22.5 + 7.4) = 75.3%== del rango — la **frecuencia mínima de defensa**. Pero las manos del botón que de verdad conectaron con A-K-2 suman apenas ==20.8 + 11.5 + 6.9 + 2.3 = 41.5%==. 🪶 Fíjate en que ese 2.3% de sets es **22** — ligó el dos, no el as ni el rey. Contando solo las manos que ligaron un as o un rey queda el **39.2%**.

⚠ **En este spot, sin embargo, la premisa detrás de la MDF no se sostiene.** La MDF es la frecuencia que deja indiferente a un **farol puro con equity cero** — y el rango que apuesta de la ciega grande contiene **0.0% de sin jugada, ni un solo combo.** Contra una apuesta que no lleva faroles puros dentro no hay farol al que dejar indiferente, así que la inclinación es a foldear **más**, no menos. ⚠ Dos matices mantienen eso honesto: ① "0% de sin jugada" no es "0% de faroles" — un underpair débil dentro del rango que apuesta puede estar haciendo el trabajo de un farol o de una apuesta de protección; ② el nodo de respuesta del botón no está en este solve, así que la frecuencia de defensa óptima real no se puede confirmar aquí. Así que no leas el 41.5% como "entonces hay que continuar con pares servidos medianos". Que el tamaño pequeño les dé precio a esos 60 combos es cierto por separado, pero la razón del tamaño es la **forma del rango** de la sección anterior; esto es un efecto colateral.

:::note[⚠ La MDF simplifica la apuesta a un farol puro. Solo significa algo cuando el rival de verdad tiene faroles — donde el rango que apuesta es pareja o mejor de arriba abajo, como aquí, el supuesto del farol puro se rompe y la cifra es apenas una guía aproximada. En la práctica pesa también qué tan bien aguanta una mano en las calles siguientes.]:::

## ¿Por qué el EQR es 109.6% si la ciega grande (BB) está fuera de posición?

**Porque una ventaja de rango suficientemente grande pesa más que la posición.** Este es el primer spot de esta serie en el que el jugador fuera de posición realiza más que su equity — 68.9% contra 31.1% es una brecha de otro orden que la de los botes de subida simple, donde el jugador fuera de posición iba del **45.1% al 48.5%** contra el **51.5% al 54.9%**.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68.9%** | 31.1% |
| EV (bb) | 16.99 | 5.51 |
| **Realización de equity** | **109.6%** | 78.7% |

En un bote de 22.5bb, un 68.9% de equity vale ==22.5 × 68.9% = 15.50bb==. La ciega grande cobra en realidad **16.99bb**, y ==16.99 ÷ 15.50== es su realización de equity: **109.6%**.

:::pull[La posición amplifica una ventaja. No la fabrica.]:::

El 78.7% del botón no es una prueba aparte de eso — es el mismo hecho visto desde el otro lado, ya que los dos EV suman el bote, así que si la realización de un jugador pasa del 100% obliga a la del otro a quedarse por debajo. Lo que sí vale la pena mirar es el tamaño de la brecha. A lo largo de ①–⑦ el jugador fuera de posición realizaba entre el **77.9% y el 93.2%**; aquí supera el 100%, porque todo lo que el botón foldea termina en el stack de la ciega grande. Por qué la posición suele valer dinero está tratado en [juego posicional](/es/blog/holdem-position-play).

## ¿Qué cambia en la mesa?

- **Deja de decidir si hacer c-bet en un bote de 3-bet — pero solo mano a mano.** En un board seco con as donde el que hizo 3-bet tiene la parte alta, el rango entero apuesta y la única pregunta es el tamaño. Si aparece un cold-caller y tres jugadores ven el flop, "apostar todo" deja de ser cierto; suelta primero los underpairs por cada jugador extra.
- **Cuenta tu SPR antes de que salga el flop.** Un bote más grande significa menos apuestas por delante, no menos dinero. **SPR 4 es la banda donde tres apuestas grandes terminan el stack** — no hay una cuarta. Cuenta las apuestas que te quedan y después elige el tamaño.
- **★Apostar el rango entero no es lo mismo que meter el stack con el rango entero.** El 38.1% de lo que apuesta aquí es un par servido por debajo del rey. Incluso dentro de ese grupo hay reparto: QQ le gana a más de la mitad del rango de pago del botón y es una mano para hacer check en el turn, mientras que TT y 99 son las primeras en irse cuando llega un raise.
- **★El top pair se parte por kicker.** Esos 21 combos incluyen **A5s y A4s** — manos 3-beteadas como blockers, con el peor kicker que hay. El rango que paga 89bb es estrecho — **22 y A-K en su núcleo**, con un top pair fuerte como A-Q pegado según el rival. **A-4 no le gana a nada de eso.** Los sets (AA, KK) le ganan a todo. **A-K queda en medio**: parte el bote con el A-K del botón y pierde contra 22, así que "SPR 4, entonces va todo" solo se sostiene sin condiciones con **AA y KK** — que A-K pertenezca a ese grupo depende de qué tan ancho pague el rival.
- **★Si el flop recibe un raise, la mano se decide ahí mismo.** Con SPR 4 un raise compromete el resto del stack. No es un spot de pagar y ver el turn: decide ahí mismo entre jam o fold — los sets van, y los underpairs bajos y los top pairs de kicker débil se inclinan al fold. ⚠ Eso es una política sacada del SPR y de las clases de mano, no una salida del solver: este ejemplo no tiene nodo para enfrentar un raise, así que los límites exactos de jam/call/fold no se pueden confirmar. La doble pareja (A-K) depende de qué tan ancho sea el raise: contra un rango que sube con sets y A-K nunca va por delante.
- **No te lleves el "check 0%" a todos los botes de 3-bet.** Lo que lo cambia es el board más que el rango: el mismo rango de 3-bet en [8-5-2](/es/blog/3bet-pot-low-board) hace check el 2.0%, y en un board que juega en contra del que hizo 3-bet sí aparece un check de verdad. **"Un as y un rey juntos" es lo que produjo este cero en este ejemplo — no una condición que todo bote de 3-bet tenga que cumplir.** Cómo construir el rango de 3-bet de entrada está en [estrategia de 3-bet](/es/blog/holdem-3bet).

:::readnext[Sigue leyendo]
/es/blog/low-board-check-raise | Ningún rango tiene escalera en este flop | /images/gto-srp-low-rainbow-oop-es.webp
/es/blog/paired-board-strategy | Tienes más trips que él — y aun así haces check el 97% | /images/gto-srp-paired-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver) y ve a **Spots de estudio → Board A-high, ventaja del 3-bettor → [⚡ Ver resultados]**.

Mira primero la cabecera: **Bote 22.5 bb · Stack 89 bb**. Ver eso en lugar de los 5.5bb y 97.5bb de los spots anteriores es este artículo entero de un vistazo. Después busca la fila que no está: el panel Manos lista solo **cinco** categorías para la ciega grande, y la que falta es "Sin jugada". Encima, en la tira de acciones, la ficha de Check marca **0.0% / 0.0 combos**.

Después abre el **Entrenador GTO** en la barra lateral: te reparte una mano usando los pesos reales del rango y califica tu acción en ciegas grandes perdidas. Gratis, sin instalar nada, sin cuenta.

## Preguntas frecuentes

**Q. ¿Qué significa SPR en poker?**

A. Es la sigla de stack-to-pot ratio. Lo que mide en la práctica es cuántas apuestas quedan, no cuántas fichas — el mismo buy-in de 100bb te da 4.0 aquí y 17.7 en un bote de subida simple, y esos dos números no se parecen en nada al jugarlos. Léelo como el número de decisiones que todavía te pertenecen.

**Q. ¿Cuántas apuestas puedes hacer con un SPR de 4?**

A. Tres, y la tercera es all-in. Apostando el 66% del bote en cada calle sale 14.9 → 34.5 → 39.6bb, exactamente el stack de 89bb. Párate después de dos y llevas 49.4bb metidas — poco más de la mitad. Elige un tamaño mayor y llegas en dos — que es justo el punto: el tamaño que eliges decide cuántas decisiones te quedan.

**Q. ¿El que hace 3-bet debería hacer siempre c-bet?**

A. En este board, sí — el solver hace check el 0.0%. Pero la condición es el board más que el rango: el mismo rango de 3-bet en 8-5-2 tiene un 48.2% de A-high y aun así hace check apenas el 2.0%, mientras que un board que juega en contra del 3-bettor sí produce checks reales. Lo que crea este cero en particular es que llegan juntos un as y un rey, lo que le arranca la parte alta del rango al jugador que pagó.

**Q. ¿Por qué el botón no tiene ases ni reyes servidos?**

A. El rango que paga de este ejemplo no los contiene — la mayoría de AA y KK hacen 4-bet en su lugar. Eso es un ajuste preflop escrito en el árbol, no algo que el solver haya deducido, y los solves reales a veces dejan unos pocos en el rango que paga para proteger su parte alta. Cambia eso y la fila de sets se mueve con ello.

**Q. ¿Por qué se usa más el tamaño pequeño que el grande?**

A. Por la forma del rango — los 63 combos son pareja o mejor, así que la parte de abajo desapareció y nunca se parte en "nuts o nada", y un rango así apuesta pequeño. **No porque el stack sea corto:** el [spot de Q-10-7](/es/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-es.webp") tiene el mismo SPR de 4.0 y usa el tamaño grande el 98.4% de las veces.

**Q. ¿Estos números aplican a mi nivel?**

A. Úsalos como referencia cuando las condiciones coincidan. Este solve permitió solo dos tamaños de apuesta, un tercio y dos tercios del bote, así que en una partida donde se usen overbets las frecuencias se reparten distinto. Lo mismo vale para otro rango de 3-bet u otra profundidad de stack, y el cálculo no incluye rake.
`.trim(),
};

export default POST;
