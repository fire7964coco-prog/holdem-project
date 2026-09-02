import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑤ 스페인어판 — Q♠9♠2♠ 모노톤 보드
 *
 * 소스 = 「lib/posts-en/monotone-board-strategy.ts」 (EN 커밋 824b73d2 · EN updated 2026-09-02).
 * 방식 = «번역 + 5필드»(spec §4-A-3) — 구조·수치·고지 문장은 EN 축어,
 *        seoTitle·desc·H2·FAQ·내부링크만 es로 재조준했다.
 *
 * ▶ 조준 (「docs/keyword-bank/es-gto-series.md」 §3-⑤)
 *   「board monotone」 ES 10 / MX 10 — 앱·SERP·888poker.es가 전부 이 표기다
 *   (「board monótono」 등 서술형 표기는 라쿠·DFS 양쪽 null). 서술형 스페인어는 볼륨이 없어
 *   **훅을 숫자로** 세웠다: 「incluso el color máximo hace check el 69.9%」.
 *   FAQ가 「¿Qué es un board monotone?」를 흡수한다. 「c-bet」 단독은 holdem-continuation-bet 소유 → 제목 금지.
 *
 * ▶ 표기 규약 — 수치·카드·레인지 표기(T9s·TT)는 언어 불변(반각 % · 소수점 . · 천단위 , · bb) ·
 *   앱 화면 라벨은 es 라이브 축어(브리프 §1-B: Spots de estudio · Board monotone ·
 *   ⚡ Ver resultados · Entrenador GTO · Sin jugada · Trío) · 산문 카드는 10♠ 표기.
 *
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 → 「esta serie」로만 가리킨다.
 */
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "El color máximo que hace check siete de cada diez veces",
  seoTitle: "Board monotone: el color máximo hace check el 69.9%",
  // 158자
  desc: "En un board monotone la apuesta grande casi desaparece: 3.2%. Incluso el color máximo hace check el 69.9%. Por qué el tamaño grande se derrumba con tres picas.",
  tldr: "En Q♠9♠2♠, donde las tres cartas del flop comparten palo, la ciega grande hace check el 88.8%, apuesta pequeño el 8.0% y grande apenas el 3.2%. El tamaño grande casi se evapora porque las nuts quedan fijadas: un color hecho ya recibe call de una apuesta pequeña, y cuanto más grande apuestas sin color, más se estrecha a colores el rango que te paga. Incluso el color máximo hace check el 69.9% de media — y los colores que no son máximos hacen check todavía más, un 81.4%.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-es.webp",
  imageAlt: "Resultados del solver GTO de HoldemMaster en un flop monotone de picas: la matriz de la ciega grande casi toda verde de check con unas pocas apuestas pequeñas mezcladas",
  tags: [
    "board monotone",
    "monotone board poker",
    "color máximo",
    "proyecto de color",
    "bet sizing poker",
    "reverse implied odds",
    "poker gto",
  ],
  content: `
El flop es **Q♠ 9♠ 2♠** — tres cartas, un solo palo. Miras tu mano y tienes A♠J♠. Eso es el **color máximo (nut flush)**, ya hecho, en el flop.

¿Cuánto apuestas entonces? El instinto dice construir el bote. El solver hace check con esa mano el **83.4% de las veces.**

Un flop monotone es la textura que más confunde, porque tanto las manos hechas como el aire se comportan distinto de lo habitual. Todas las cifras de abajo salieron del [solver GTO gratuito](/es/solver) de HoldemMaster.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | Q♠ 9♠ 2♠ (monotone — tres cartas del mismo palo)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb
Resultado | Apuesta grande 3.2% — el tamaño grande se derrumba
:::

> **Respuesta rápida**
> Apuesta pequeño o haz check; casi nunca grande. En Q♠9♠2♠ la ciega grande hace check el **88.8%**, apuesta un tercio del bote el **8.0%** y tres cuartos apenas el **3.2%**. Las nuts quedan fijadas a un solo tipo de mano, así que un color hecho ya recibe call de una apuesta pequeña, y cuanto más grande apuestas sin color, más se estrecha a colores el rango que te paga. Eso expulsa el tamaño grande de la estrategia de los dos jugadores.

## ¿Qué es un board monotone en poker?

**Un board donde las tres cartas comparten palo** — aquí Q♠ 9♠ 2♠, así que dos picas cualesquiera en la mano de un jugador ya son un color hecho. Es la más rara de las texturas habituales y la que más cambia el valor de las manos, porque una sola carta del palo puede valer más que una pareja.

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | Q♠ 9♠ 2♠, monotone (tres picas) |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb |
| Tamaños de apuesta | Alrededor del 33% y del 75% del bote |
| Rake | No modelado |
| Comprobado | 2026-08-20, salida del spot de estudio |

## ¿Cómo juega la ciega grande (BB) un board monotone?

**Check el 88.8%, apuesta primero el 11.2%.** Es menos que en el [board conectado 9-8-7](/es/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-es.webp") con su 23.7%, pero mucho más que en los flops secos, donde fue 1.9% en A-7-2 y 0.2% en K-8-3.

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **88.8%** | 415.7 |
| Bet 1.8bb (33% del bote) | 8.0% | 37.4 |
| Bet 4.1bb (75% del bote) | **3.2%** | 14.9 |

Lo interesante no es el reparto dentro de esa apuesta — es que **todo el ataque se encogió.** La parte que se lleva el tamaño grande dentro del rango que apuesta primero es el 29%, casi exactamente lo mismo que en 9-8-7 (6.9 de 23.7). Lo que cambió es el total: apostar primero cayó del 23.7% al 11.2%, y la apuesta grande del 6.9% al 3.2%, las dos más o menos a la mitad.

Así que a ninguno de los dos lados le sirve el tamaño grande, y solo a uno le sirve el pequeño — por eso toda la estrategia se derrumba hacia "pequeño, o check". Esto no es "quitaron la apuesta grande": es que **la ciega grande apuesta menos en total** — y la razón se ve más clara en cómo se comportan los colores hechos.

## ¿Por qué desaparece la apuesta grande en un board monotone?

**Porque las nuts quedan fijadas.** Q, 9 y 2 no están conectadas, así que en este flop no hay escalera de color posible. La mejor mano queda clavada: **quien tenga el A♠**. Una sola carta decide la parte de arriba de los dos rangos.

Una vez que eso es cierto, las apuestas grandes dejan de pagarle a nadie.

:::compare
Si tienes color | Si no tienes color
Una apuesta grande hace foldear a casi todo lo que no es color | Una apuesta grande solo recibe call de colores
Una apuesta pequeña mantiene dentro a una pareja | Una apuesta pequeña es barata, pero una pareja no foldea ante ella
:::

**A un lado le sirve el tamaño pequeño; al otro no le sirve ninguno.** Así que la estrategia se derrumba hacia "pequeño o check" para los dos. Este es el board más claro de esta serie para el principio de que el tamaño lo decide **con qué puede pagar tu rival**, no lo fuerte que seas tú.

## ¿Por qué el color máximo hace check?

**Porque casi nada puede pagar.** Baja hasta el final la tabla por mano del solver y saca los ocho combos del color máximo — todas las manos con A♠ que la ciega grande puede tener de verdad:

| Mano | Equity | Check | Bet 1.8bb | Bet 4.1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97.7% | **83.4%** | 14.3% | 2.2% | 229.9% |
| A♠10♠ | 97.7% | **84.2%** | 14.5% | 1.2% | 232.3% |
| A♠8♠ | 97.7% | **79.1%** | 17.4% | 3.5% | 232.6% |
| A♠7♠ | 97.6% | **56.0%** | 20.6% | 23.4% | 231.3% |
| A♠6♠ | 97.6% | **60.2%** | 22.0% | 17.9% | 232.6% |
| A♠5♠ | 97.6% | **64.1%** | 20.2% | 15.7% | 233.6% |
| A♠4♠ | 97.6% | **52.7%** | 24.1% | 23.2% | 237.3% |
| A♠3♠ | 97.6% | **79.7%** | 0.0% | 20.3% | 240.6% |

**La media es 69.9% de check.** Una mano con 97.6% de equity — una que en la práctica no puede perder — hace check siete de cada diez veces.

¿Por qué solo ocho combos? Tres de las manos con as del palo son imposibles, porque **Q♠, 9♠ y 2♠ ya están en el board.** De las nueve que quedan, A♠K♠ hace 3-bet preflop y nunca llega, así que quedan ocho.

La razón para hacer check no es lo que ganas ahora sino lo que ganas en total. Apuesta grande y foldean casi todas las parejas y las manos de carta alta; puede aparecer una mano con una sola pica, pero contra un color máximo hecho no tiene con qué mejorar. En cualquiera de los dos casos, el dinero que ibas a cobrar más tarde se corta. Haz check y tu rival apuesta su propia pareja o se tira un farol contra ti — dinero que puedes seguir cobrando en el turn y el river.

Los números lo dicen sin rodeos: **EQR 230%**, más del doble de su parte del bote. El bote es de 5.5bb y A♠J♠ tiene un valor esperado de ==12.36bb==. Lo que está por venir vale más que lo que ya está ahí.

Los blockers aparecen en la misma tabla. **A♠J♠ y A♠10♠ hacen check por encima del 80%, mientras que A♠7♠ hasta A♠4♠ bajan al 52–64% y apuestan mucho más.** Tener el J♠ o el 10♠ bloquea **los colores que no son máximos y que llevan esas cartas**. ⚠ En este board no existe un "color con J alta" — el Q♠ ya está en la mesa, así que todo color hecho es de reina para arriba, y el segundo mejor es el de rey. Lo que el J♠ o el 10♠ quitan es el **puesto del kicker** de esos colores (K♠J♠, J♠10♠ y parecidos). Y esas son justo las manos que te habrían *pagado* la apuesta. Sacarlas del mazo adelgaza el rango que paga, así que la apuesta vale menos y la mano se va al check. Los kickers bajos no bloquean ninguna y dejan a alguien que te pague, así que apostar directo es la mejor forma de cobrar. (Que A♠3♠ salte de vuelta al 79.7% nos recuerda que esto es una tendencia, no una regla.)

## ¿Se juegan distinto los colores que no son máximos?

**Hacen check todavía más.** En este board hay 33 combos de color hecho; los 25 que no llevan el A♠ hacen check un **81.4%** de media, frente al 69.9% de las nuts.

| Mano | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (las nuts) | 97.7% | 83.4% | 229.9% |
| K♠J♠ | 94.0% | **91.8%** | 197.0% |
| K♠8♠ | 93.6% | **76.3%** | 193.0% |
| K♠6♠ | 93.6% | **61.0%** | 193.7% |

La equity apenas se mueve — 94% frente a 97.7% — pero el EQR cae al 197%. **Ganas menos cuando ganas.** Hay una sola razón: lo único a lo que pierde un color de rey es al color de as, y esa es exactamente la mano que mete el dinero grande. Ganar poco y perder mucho es **reverse implied odds**, la imagen espejo de las [implied odds](/es/blog/holdem-implied-odds).

## ¿Quién tiene más colores en este board?

**La ciega grande — 7.1% frente a 5.7%.** Pero los *proyectos* de color van al revés.

![Infografía de composición de rango que compara las categorías de mano de la ciega grande y el botón en un board monotone de picas](/images/gto-srp-monotone-ranges-es.webp "Q♠9♠2♠ · reparto por categorías — los colores hechos favorecen a la ciega grande; los proyectos de color y el A-high, al botón")

| Categoría | BB (OOP) | BTN (IP) |
|---|---|---|
| Color hecho | **7.1%** | 5.7% |
| Proyecto de color (una pica, proyectos combinados incluidos) | 25.6% | **29.2%** |
| Top pair (Q) | 10.9% | **12.0%** |
| Overpair (KK, AA) | 0.0% | **2.5%** |
| A-high | 25.6% | **28.5%** |

⚠ La fila del proyecto de color es **un valor derivado**: el solver lista "Proyecto de color" y "Proyecto combinado" por separado, y una mano con una sola pica puede caer en cualquiera de las dos. Así que es ==20.5 + 5.1 = 25.6%== para la ciega grande y ==24.1 + 5.1 = 29.2%== para el botón. Conviene saberlo si estás cotejando esto contra la pantalla.

El reparto viene del preflop. **La ciega grande defiende basura barata del mismo palo** — manos como J5s, 85s y 74s reciben call desde la ciega grande, y las de picas se convierten en colores. El botón no las abre nunca.

Lo que el botón tiene en cambio es mucho más **A-x y K-x de distinto palo con una pica.** Sin ligar, pero con proyecto — y aquí es donde el A♠ se vuelve especial. Puede hacer el color máximo, y además te dice que tu rival **no** puede tenerlo.

## ¿Cómo cambia una sola pica el valor de tu mano?

**El mismo top pair es una mano distinta según lleve pica o no.**

Toma Q♥J♦ — top pair, sin pica. Ya va por detrás del **12.0%** del rango del botón (colores 5.7 + sobrepares (overpairs) 2.5, más los sets y las dobles parejas), y encima pierde por kicker contra **AQ y KQ**: el Q♠ está en el board y el Q♥ en tu mano, así que quedan dos reinas, lo que da 8 combos de AQ y 8 de KQ — **un 3.4% aproximado** de 474, con lo que el total que ya te gana sube a más o menos el **15.4%**. Además de eso, otro **29.2%** te pasa por delante con una sola carta (⚠ cuatro de esos 16 combos de kicker llevan pica y ya están contados dentro de ese 29.2%, así que no sumes las dos cifras sin más). Esa no es una mano para tres calles de valor; es una mano para atrapar un farol una vez.

Ahora toma 9♥8♠ — segunda pareja con una pica. Puede ganar ahora o mejorar después, y eso le da flexibilidad para apostar o pagar.

**Un solo palo reescribe todo el ranking en este board.**

## ¿Por qué el EQR es 90 contra 109 si la equity es 48 contra 52?

**Porque un board donde los botes se quedan pequeños también encoge el valor de la posición.**

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47.7% | 52.3% |
| EV (bb) | 2.37 | 3.13 |
| **Realización de equity (EQR)** | **90.4%** | **108.8%** |

La parte del bote que le toca a la ciega grande es ==5.5 × 47.7% = 2.62bb== frente a los 2.37bb reales, y eso es el 90.4%.

La diferencia de 18.4 puntos es la segunda más pequeña **de los siete botes de subida simple**, por detrás de 9-8-7 con 13.2. ⚠ En el conjunto de esta serie solo es la quinta — la guerra de ciegas K-10-6 (7.0) y A-A-6 (9.3) y el bote de 3-bet de 8-5-2 (16.6) están todos más apretados, y son asientos distintos. Cuando desaparecen las apuestas grandes, desaparecen también las decisiones difíciles — y **la posición vale exactamente lo que valgan las decisiones que quedan por tomar.**

## ¿Qué cambia en la mesa?

- **En un board monotone la apuesta grande ya es rara de entrada.** En teoría el tamaño grande de la ciega grande cae al **3.2%** aquí. ⚠ No lo conviertas directamente en "entonces foldea una pareja ante una apuesta grande". El 3.2% es la frecuencia con la que la ciega grande **apuesta primero**, y cuando el que *recibe* la apuesta eres tú, las frecuencias de tamaño de apuesta del botón no están en este solve en absoluto. Mira también su propia columna: los colores hechos son el 5.7% mientras que los proyectos con una pica son el **29.2%**, más de cinco veces más — leer una apuesta grande como "color" te hace foldear ante semifaroles. Lo primero que hay que mirar cuando cae una apuesta grande es si **tu propia mano lleva el A♠.**
- **No lleves un color pequeño por tres calles grandes.** El solver hace check con los colores que no son máximos el 81.4% de las veces (las nuts: 69.9%). Cobra valor con apuestas pequeñas y trata una subida grande como el A♠ hasta que se demuestre lo contrario.
- **Tener el A♠ asciende una mano a candidata a farol.** Un farol hecho sabiendo que tu rival no puede tener el color máximo es una apuesta distinta de una hecha a ciegas.
- **Contra un rival que nunca foldea una pareja, deja de hacer slowplay.** Ese 69.9% de check da por hecho que el otro jugador apuesta cuando le hacen check; si solo paga, apuesta tus colores y llévate el dinero.

:::readnext[Sigue leyendo]
/es/blog/donk-bet-strategy | El flop donde el donk bet es correcto — 9-8-7 | /images/gto-srp-middle-connected-oop-es.webp
/es/blog/broadway-board-strategy | Dos tercios del rango llevan proyecto — y aun así hace check | /images/gto-srp-broadway-oop-es.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver) y ve a **Spots de estudio → Board monotone → [⚡ Ver resultados]**.

En este spot la tabla por mano que hay abajo es la lección entera — **bájala hasta el final.** Ahí se lee por qué A♠J♠ y A♠4♠ se separan por 30 puntos de frecuencia de check, y cómo la misma reina se parte en dos manos distintas según venga o no con una pica.

Después abre el **Entrenador GTO** en la barra lateral y deja que te reparta un color en este board: elegir una acción y ver el costo en EV convence más rápido que una tabla. Gratis, sin instalar nada, sin cuenta.

## Preguntas frecuentes

**Q. ¿Qué es un board monotone?**

A. Un flop en el que las tres cartas son del mismo palo, como Q♠ 9♠ 2♠. Dos cartas cualesquiera de ese palo ya hacen color, y una sola es proyecto. Es la textura donde más se mueve el valor de las manos, porque los palos pasan temporalmente a pesar más que el valor de las cartas.

**Q. ¿Hay que apostar siempre un color hecho en un board monotone?**

A. No. En este solve los ocho combos del color máximo hacen check entre el 52.7% y el 84.2%, con una media del 69.9%, y los colores que no son máximos hacen check el 81.4%. Una apuesta grande hace foldear a casi todas las parejas y manos de carta alta — y la mano con una pica que sí aparece no tiene con qué mejorar contra un color máximo hecho — así que hacer check para inducir una apuesta y cobrar a lo largo del turn y el river gana más en total.

**Q. ¿Por qué la ciega grande tiene más colores que el botón?**

A. Porque la ciega grande ya tiene fichas puestas en el bote y defiende manos suited baratas como J5s, 85s y 74s. Esas se convierten en color en un board monotone. El botón no las abre nunca, y por eso sus colores hechos se quedan en el 5.7% frente al 7.1% de la ciega grande.

**Q. ¿Qué tan probable es ligar color en el flop?**

A. Lo bastante raro como para que el propio board monotone sea inusual — necesitas dos cartas del mismo palo y que las tres del flop cooperen. Los porcentajes exactos de ligar y completar colores están trabajados en [probabilidad de proyecto](/es/blog/holdem-drawing-odds); lo que importa aquí es qué hacer cuando el board ya vino así.

**Q. ¿Por qué importa tanto el A♠ si ni siquiera tengo color?**

A. Porque es un blocker: mientras tú lo tengas, tu rival no puede tener el color máximo. Eso lo deja sin poder defender la parte alta de su rango, así que las manos con el A♠ son los primeros faroles que elige un solver. Lo contrario también aplica — cuando tú tienes un color pequeño, una subida grande merece más respeto de lo normal.
`.trim(),
};

export default POST;
