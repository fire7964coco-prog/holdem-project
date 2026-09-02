import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ① 스페인어판 — A♥7♦2♣ 드라이 A하이 보드
 *
 * ▶ 소스 = EN 마스터 lib/posts-en/a-high-board-cbet.ts (824b73d2 · updated 2026-09-02).
 *   방식은 스펙 §4-A-3 «번역 + 5필드» — 구조·수치·전략 논거는 EN 그대로,
 *   es로 다시 정하는 것은 seoTitle·desc·H2·FAQ·내부링크 + 본문 용어 표기뿐이다.
 * ▶ 조준 키워드 (docs/keyword-bank/es-gto-series.md §3-①)
 *   「ventaja de rango poker」(라쿠·DFS null · 개념어 · SERP는 upswing 1편뿐) ·
 *   「top pair poker」 10 · 「board seco」(null · 본문 표기) · 훅 = 98.2% check.
 *   FAQ 흡수 = 「¿Qué es un range check?」·「¿Qué es un board seco?」.
 *   ⚠ c-bet 헤드텀(「c bet poker」)은 holdem-continuation-bet 소유 — 제목에 「c-bet」 단독 금지.
 * ▶ 표기 규약 — board(tablero 금지) · 앱 축어(seco·rainbow·Top pair·Sin jugada·A-high/K-high) ·
 *   산문 카드는 10♠, 레인지 표기(T9s·TT)와 앱 표·헤더는 축어 · 수치는 언어 불변(반각 % · 소수점 . · bb).
 * 🔴 시리즈 편 수를 본문에 하드코딩하지 마라 — 「esta serie」로 쓴다.
 * 🔴 계산 정본은 docs/gto-solver-series-spec.md §4-B. 게이트 = npm run check:gto.
 */
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "Top pair y aun así hace check el 98.2%: las frecuencias en A-7-2",
  seoTitle: "Ligas top pair y el solver hace check — board seco A-high",
  desc: "Ligas top pair en A-7-2 y quieres liderar. El solver hace check el 98.2% del rango de la ciega grande — las frecuencias y por qué la razón no es la equity.",
  tldr: "En A♥7♦2♣, después de una apertura del botón y un pago de la ciega grande, la ciega grande hace check el 98.2% de su rango — top pair, doble pareja y sets incluidos. La equity está casi igualada, 45.1% contra 54.9%; lo que separa a los dos asientos es la realización de equity, 84.0% fuera de posición contra 113.1% en posición.",
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-es.webp",
  imageAlt: "Pantalla de resultados del solver GTO de HoldemMaster en un flop seco con as: la cuadrícula 13x13 de la ciega grande casi entera en verde de check",
  tags: [
    "ventaja de rango poker",
    "top pair poker",
    "board seco",
    "range check",
    "equity realization",
    "postflop poker",
    "poker gto",
  ],
  content: `
El flop viene **A♥ 7♦ 2♣**, rainbow. Estás en la ciega grande con A9 — top pair. Liderar parece lo obvio. No lo es.

Todas las cifras de abajo salen del [solver GTO gratuito](/es/solver) de HoldemMaster, leídas en la salida del spot de estudio el 2026-08-19, y puedes abrir esa misma pantalla con un solo clic.


:::stripe
Spot | BTN abre a 2.5bb → BB paga (mano a mano)
Flop | A♥ 7♦ 2♣ (rainbow)
Bote · stack | Bote 5.5bb · stack efectivo 97.5bb
Resultado | BB hace check el 98.2% — en la práctica, todo el rango hace check
:::

> **Respuesta rápida**
> Haz check y prepárate para continuar. Cuando un rango toma una sola acción con prácticamente todo — manos fuertes incluidas (las apuestas de los dos tamaños suman apenas 1.9%) — eso es un **range check**, y es lo que hace aquí la ciega grande. Hacer check no es renunciar al bote: deja dentro del bote los faroles del botón, y el top pair sigue siendo una mano con la que continúas cuando llega la apuesta de continuación (c-bet).

## ¿En qué condiciones salieron estos números?

El botón abre a 2.5bb, la ciega grande paga y el resto foldea — así que dos jugadores ven un bote de 5.5bb con 97.5bb detrás. Los dos rangos son las aproximaciones estándar del juego online a 100bb, el flop es A♥ 7♦ 2♣ rainbow, y el solver dispone de dos tamaños de apuesta, más o menos un tercio y tres cuartos del bote. El rake no está modelado. Cambia cualquiera de esas cosas y las frecuencias cambian con ellas.

| Condición | Valor |
|---|---|
| Preflop | BTN abre 2.5bb · BB paga · el resto foldea |
| Rangos | Aproximaciones del juego online estándar a 100bb |
| Flop | A♥ 7♦ 2♣, rainbow |
| Bote · stack | Bote 5.5bb · stack efectivo 97.5bb |
| Tamaños de apuesta | Alrededor del 33% y del 75% del bote |
| Rake | No modelado |
| Comprobado | 2026-08-19, salida del spot de estudio |

El bote es de 5.5bb porque a la apertura de 2.5bb del botón y al pago de 2.5bb de la ciega grande se les suma la ciega pequeña muerta de 0.5bb. Todo lo que aparece en pantalla está en ciegas grandes — las apuestas se leen como "Bet 1.8bb (33% del bote)" y el valor esperado como "EV (bb)".

## ¿Qué porcentaje de c-bet es bueno en un board seco A-high?

Depende por completo del asiento en el que estés. Para el que subió preflop en un board así de seco, más o menos **70–100% a un tamaño pequeño** mano a mano y en posición — la guía de [apuesta de continuación](/es/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") lo desglosa por tipo de board. Para el que pagó, la respuesta es **prácticamente cero**.

En rigor, el que paga no tiene c-bet: el término significa que el que subió preflop apuesta el flop, así que la versión de la ciega grande es un **lead**. Pero es el número que la gente quiere cuando cae de este lado de la mano, y aquí está:

| Primera acción de la ciega grande | Frecuencia | Combos |
|---|---|---|
| Check | **98.2%** | 455.5 |
| Bet 1.8bb (33% del bote) | 1.0% | 4.5 |
| Bet 4.1bb (75% del bote) | 0.9% | 3.9 |

De 464 combos, unos ocho apuestan — 1.9% entre los dos tamaños, redondeado. En la práctica puedes redondearlo del todo: **la ciega grande no apuesta de salida en este board.**

## ¿Por qué la ciega grande (BB) también hace check con top pair?

Porque el bote se gana más fácil haciendo check que apostando. Liderar con una pareja, fuera de posición y contra el jugador que tomó la iniciativa preflop, es la forma cara de jugar una mano con la que te conformas con llegar al showdown.

Hay tres cosas en contra del lead. Primera, la **realización de equity**: los números de más abajo muestran a la ciega grande cobrando el 84.0% de su equity y al botón el 113.1%. Construir un bote más grande fuera de posición hace que esa diferencia cueste más, no menos. Segunda, el botón cbetea este flop con frecuencia alta — **hacer check mantiene sus faroles dentro del bote**, mientras que liderar les deja retirarse sin pagar nada. Tercera, el rango de la ciega grande está capado: sin AA, AK ni AQ dentro, un lead invita a una subida justo de las manos contra las que no puede continuar.

Lo que un lead **no** hace es sacar del bote manos mejores. El rango de apertura del botón conserva todos los ases hasta A2, más los underpairs y los sietes, así que muchas manos peores pagarían — ese no es el problema. El problema es el bote que estás construyendo para ganarlo.

También importa que "un as" no es un único tipo de mano. A9 pierde la guerra de kickers contra AK, AQ, AJ y AT, mientras que A7 y A2 ni siquiera son top pair — en este board A7 se juega como ==A-A-7-7-2==, doble pareja. Un range check las esconde a todas detrás de una sola acción, así que tu rival no puede separarlas.

**Y las manos que sí apuestan no son las que imaginarías.** Abre la tabla de detalle y los ases más fuertes que la ciega grande puede tener se lanzan de vez en cuando: A♣J♣ apuesta el tamaño pequeño el 14.5% de las veces, A♦J♦ el 12.2%, A♠J♠ el 7.1%, A♠10♠ el 4.5%. Frecuencias pequeñas, pero salen de la parte alta del rango y no del aire — por eso el check no es una rendición.

## ¿Qué es un board seco y por qué este favorece al que subió?

Un board seco es el que no tiene proyecto de color y casi ningún proyecto de escalera — tres cartas sin conexión en tres palos distintos, como A♥ 7♦ 2♣. Casi nada persigue nada: **el 71.3% del rango de la ciega grande no tiene proyecto**, y casi todo el resto es un proyecto backdoor de color. Favorece al que subió porque el rango de apertura del botón conserva AK, AQ y AJ mientras que el rango de pago de la ciega grande no — los ases están apilados de un solo lado, y no hay proyectos que igualen las cosas más adelante.

![Infografía de composición de rango que compara las categorías de mano de la ciega grande y del botón en un board seco A-high, barras verdes y doradas en paralelo](/images/gto-srp-dry-ace-ranges-es.webp "A♥7♦2♣ · reparto por categorías — el botón tiene más top pair, la ciega grande más aire")

Fuera de posición (OOP) está la ciega grande, que actúa primero; en posición (IP) está el botón.

| Categoría | BB (OOP) | BTN (IP) |
|---|---|---|
| Trío — aquí siempre es set | 1.3% | **1.9%** |
| Doble pareja | 3.9% | 3.9% |
| Top pair | 20.7% | **25.9%** |
| Segunda pareja | 5.2% | 5.2% |
| Pareja débil | 1.3% | 0.0% |
| Underpair | 9.1% | **13.0%** |
| K-high | **17.2%** | 16.4% |
| Sin jugada | **41.4%** | 33.7% |

La diferencia viene de lo que cada rango tiene permitido contener. El botón abre todos los ases — de A2 a AK. El rango de pago de la ciega grande **se corta en AJ**: nada de AA, nada de AK, nada de AQ, porque esas tres hacen 3-bet en vez de pagar. El mismo as en el board, y aun así el top pair cae 5.2 puntos más a menudo del lado del botón, con los ases más fuertes sentados por completo en un solo lado de la mesa.

Los sets cuentan lo mismo por número de manos. Las parejas servidas que ligan set aquí son AA, 77 y 22, y **la ciega grande solo tiene 77 y 22** — tres combos cada una, seis de 464, que es el 1.3% de la pantalla. El botón se queda con las tres parejas: nueve combos, 1.9%. La aritmética coincide exactamente con el solver.

## ¿Qué significa la ventaja de rango si la equity está casi igualada?

Ventaja de rango significa que el rango entero de un jugador encaja mejor con el board que el del otro. En A♥ 7♦ 2♣ apenas asoma en la equity bruta — 45.1% contra 54.9%, una diferencia de 9.8 puntos que nadie llamaría un desastre. Asoma en lo que cada lado consigue cobrar de esa equity, y ahí los dos asientos no están ni cerca.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 45.1% | 54.9% |
| EV (bb) | 2.09 | 3.41 |
| **Realización de equity (EQR)** | **84.0%** | **113.1%** |

La realización de equity es la parte de tu equity que de verdad cobras. La equity de la ciega grande vale ==5.5 × 45.1% = 2.48bb==, pero su valor esperado es 2.09bb — pierde alrededor de una sexta parte de lo que "posee". El 113.1% del botón significa que cobra **más de lo que le toca**, porque actúa último y su rango es lo bastante fuerte para presionar. (Los valores de pantalla están redondeados, así que, si recalculas el EQR a mano, el resultado queda a menos de 0.3 puntos de la cifra mostrada.)

La posición y la ventaja de rango se acumulan aquí: el botón se lleva la porción más grande **y** la mejor tasa para convertirla. El principio general está en la [guía de equity](/es/blog/holdem-equity), y por qué el asiento en sí vale tanto lo cubre [estrategia de posición](/es/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## ¿Cuándo debe cbetear el botón (BTN) un flop seco con as?

Casi siempre, pequeño — **contra rivales que se retiran.** La ciega grande tiene un 41.4% de manos sin jugada y un 71.3% sin proyecto, así que los folds llegan fáciles y las manos que se quedan rara vez mejoran. Ese es el caso de manual para el tamaño pequeño, y por eso la apuesta del 33% (1.8bb) es la que hay que buscar aquí.

Contra una mesa que paga cualquier cosa, "apostar todo pequeño" deja de ser gratis: no se retira nada, y estás construyendo botes con manos que no quieren uno. Ahí el ajuste es menos apuestas de tanteo y más valor.

La regla general se extiende con una condición: **el lado que tiene la ventaja de rango — y ninguna ventaja de nuts clara — apuesta pequeño y a menudo.** En boards donde un jugador además es dueño de las nuts, el tamaño sube. Cómo cambia eso según el tipo de board está en [estrategia de c-bet](/es/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[El spot de estudio solo pre-resuelve la primera acción del flop, así que la frecuencia exacta de c-bet del botón no es uno de los números de esta página. Para obtenerla, abre "Resolver este spot tú mismo" y recorre el árbol.]:::

## ¿Qué cambia en la mesa?

- **Si pagaste una subida mano a mano, quítate de la cabeza apostar de salida en un flop seco A-high.** Top pair incluido. Liderar construye un bote que después tienes que jugar fuera de posición con una pareja — que es exactamente la diferencia de 84% contra 113% de arriba. (Los botes limpeados y la guerra de ciegas son otra estructura y no son lo que cubre este spot.)
- **Hacer check no es check-fold.** Aquí es donde se lee mal el número. Frente a la c-bet pequeña del botón, la ciega grande continúa muy ancha — todos los ases, casi todos los sietes, los underpairs, K-high con un backdoor. **A9 es check-call**, normalmente también en el turn. Los check-raises salen sobre todo de 77, 22, A7 y A2, más unos pocos faroles con backdoor.
- **En el botón, apuesta pequeño y ancho contra rivales que se retiran.** Contra un jugador que nunca se retira, ajusta en dos direcciones: menos faroles, porque no van a foldear apuestes lo que apuestes — sobre todo en turn y river, donde el segundo y el tercer barril son pérdida pura — y apuestas de valor más grandes con **top pair o mejor**. A9 con su kicker flojo no es una mano para subir el tamaño; es una mano que simplemente no dispara tres veces.
- **Contra un rival equilibrado, un check aquí no es debilidad** — el rango que hace check contiene sets (77, 22) y doble pareja (A7, A2), así que apretar demasiado se estrella contra un check-raise. En límites bajos suele pasar lo contrario: mucha gente lidera sin más sus manos fuertes, así que su check sí es débil. Sigue apostando por valor y trata el check-raise como un costo ocasional, no como una razón para frenar.

:::readnext[Sigue leyendo]
/es/blog/holdem-continuation-bet | Por qué 'cbetear cada flop' te sangra fichas | /images/holdem-continuation-bet-hero.webp
/es/blog/holdem-position-play | La posición gana a las cartas | /images/holdem-position-play-hero.webp
:::

## Compruébalo tú mismo

Abre el [solver GTO gratuito](/es/solver), ve a **Spots de estudio → Board seco A-high → [⚡ Ver resultados]**, y esta misma pantalla aparece sin esperas. Cambia el selector de jugador entre **OOP (BB (caller))** e **IP (BTN (open-raiser))** para comparar los dos rangos, y ordena la tabla de detalle por cualquier columna para encontrar las manos que apuestan. Los spots de estudio pre-resuelven **solo la primera acción del flop** — para recorrer turn y river, o para cambiar un rango y ver moverse las frecuencias, usa **Resolver este spot tú mismo** y recorre el árbol.

Para entrenar el mismo spot en vez de leerlo, abre el **Entrenador GTO** en la barra lateral: te reparte una mano del rango real, eliges una acción y te dice cuánto costó esa elección en ciegas grandes. Es gratis, sin nada que instalar y sin cuenta.

## Preguntas frecuentes

**Q. ¿A7 es top pair en un board A-7-2?**

A. No. El board empareja tu 7, así que A7 forma ==A-A-7-7-2== — doble pareja. El top pair de verdad es un as con un kicker que no toca el board, como A9 o A8. La doble pareja (A7 y A2) suma 18 combos, el 3.9% del rango de la ciega grande, y esas manos también hacen check.

**Q. ¿Un 98.2% de check significa que literalmente nunca debo apostar?**

A. Como opción por defecto, sí en esta textura. Contra un rival que casi nunca cbetea puedes mezclar algún lead — pero **solo con manos de valor**. El top pair y los sietes construyen un bote que ese jugador nunca te va a construir, mientras que tu aire debería seguir haciendo check, porque un rival pasivo te regala cartas gratis y showdowns gratis que valen más que el farol.

**Q. ¿Cuál es la diferencia entre un board húmedo y un board seco?**

A. Un board seco no tiene proyecto de color y tiene pocos proyectos de escalera, así que es poco probable que el flop cambie de dueño en las calles siguientes. Un board húmedo — cartas conectadas y two-tone, como 9-8-7 con dos corazones — les reparte proyectos a los dos jugadores. Los rangos se quedan anchos, las equities se siguen moviendo, y por eso las apuestas se hacen más grandes y los check-raises más habituales.

**Q. ¿La realización de equity puede pasar del 100%?**

A. Sí. Es la razón entre lo que ganas de verdad y la parte del bote que te corresponde por equity, así que la posición y la fuerza del rango la empujan por encima del 100%. Aquí el botón realiza el 113.1%, cobrando más de lo que sugeriría su 54.9% de equity bruta.

**Q. ¿Estos números sirven en cualquier límite?**

A. Úsalos como referencia cuando las condiciones coincidan: mano a mano, 100bb, rangos estándar de apertura y de pago, sin rake modelado. Cambia la profundidad de stack, los rangos o los tamaños y las frecuencias se mueven. Contra rivales que se desvían mucho — que nunca se retiran, que nunca cbetean — desvíate tú también, porque estos números asumen que el otro jugador también juega bien.
`.trim(),
};

export default POST;
