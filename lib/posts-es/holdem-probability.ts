import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Probabilidades en el póker — las odds reales de cada mano en Texas Hold'em",
  seoTitle: "¿Con qué frecuencia ligas de verdad? — Probabilidades del póker",
  desc: "Las probabilidades reales de cada mano, flop y proyecto en Texas Hold'em, más la regla del 2 y 4 y las pot odds explicadas fácil, en una sola tabla.",
  tldr: "Para el river ligarás pareja el 43.8% de las veces, doble pareja el 23.5%, color el 3.0% y full el 2.6% — mientras que una escalera real aparece solo una vez cada 31,000 manos.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-09-26",
  masterUpdated: "2026-09-24",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Vista cenital de una mesa activa de Texas Hold'em con cinco cartas comunitarias, torres de fichas dispersas y jugadores en plena mano",
  tags: ["probabilidades poker", "tabla de probabilidades poker", "odds del poker", "probabilidad de ligar un set", "regla del 2 y 4", "pot odds", "outs y odds", "odds texas holdem"],
  content: `
La primera vez que hice "set mining" con una pareja de cincos en una partida en vivo y ligué mi set en el flop, el tipo de al lado gruñó "¿qué probabilidad hay?" — y yo lo sabía de verdad: alrededor de ==1 entre 8.5==. Ese único número es la razón por la que pagué, para empezar.

El póker no es un juego de adivinar. Cada call, cada fold y cada shove es una ==pregunta de probabilidad disfrazada==, y los jugadores que ganan son los que han convertido el "¿qué probabilidad hay?" en un reflejo. Esta es la ==**tabla completa de probabilidades del póker**== para Texas Hold'em — cada mano hecha, cada flop, cada proyecto — con el ==g:único atajo mental== que te deja echar la cuenta en la mesa en dos segundos.

---

### Los números que más importan

:::stripe
43.8% | Pareja para el river
23.5% | Doble pareja
3.0% | Ligar color
2.6% | Ligar full
1 entre 30,940 | Escalera real
:::

---

## Tabla de probabilidades del póker: la probabilidad de cada mano

> **Respuesta rápida**
> La probabilidad de una mano de póker depende de cuántas cartas puedes usar. En Hold'em, las mejores cinco de siete dan pareja el 43.8% de las veces y doble pareja el 23.5%. Esas frecuencias al river no son las de un reparto aleatorio de cinco cartas: elige la columna que corresponde antes de comparar lo rara que es cada mano.

- **Odds a 5 cartas** = la probabilidad de que una única mano aleatoria de cinco cartas *sea* esa mano (el número clásico de manual).
- **Hold'em (para el river)** = la probabilidad de que *acabes* con esa mano tras ver las siete cartas (tus dos cartas propias + cinco comunitarias). Este es el número que de verdad importa en la mesa.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mano | Odds a 5 cartas (repartidas) | Odds Hold'em (al river) |
|:---|:---:|:---:|
| Escalera Real | 1 en 649,740 (0.000154%) | 1 en 30,940 (0.0032%) |
| Escalera de Color | 1 en 72,193 (0.00139%) | 1 en 3,590 (0.0279%) |
| Póker | 1 en 4,165 (0.0240%) | 1 en 595 (0.168%) |
| Full | 1 en 694 (0.144%) | 1 en 39 (2.60%) |
| Color | 1 en 509 (0.197%) | 1 en 33 (3.03%) |
| Escalera | 1 en 255 (0.392%) | 1 en 22 (4.62%) |
| Trío | 1 en 47 (2.11%) | 1 en 21 (4.83%) |
| Doble Pareja | 1 en 21 (4.75%) | 1 en 4.3 (23.5%) |
| Pareja | 1 en 2.4 (42.3%) | 1 en 2.3 (43.8%) |
| Carta Alta | 1 en 2.0 (50.1%) | 1 en 5.7 (17.4%) |

</div>

> **El dato que sorprende a todo el mundo**
> La carta alta es la mano de cinco cartas *más* común (50.1%), pero en Hold'em cae al **17.4%**: el tercer resultado más frecuente, por detrás de la pareja (43.8%) y las dobles parejas (23.5%). ¿Por qué? Siete cartas te dan tantas oportunidades de emparejar que "no ligar pareja para el river" se vuelve la excepción. Más cartas, más conexiones.

El orden de la jerarquía sigue la **columna de cinco cartas**: cuanto más rara es una mano entre cinco cartas al azar, más alto gana — sin excepciones, desde la carta alta hasta la escalera real. Con siete cartas eso se cumple en todo salvo en la carta alta: es más rara que una pareja (43.8%) y aun así sigue siendo la mano más débil. Esa es la lógica detrás de la [jerarquía de manos de póker](/es/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): la probabilidad *es* la jerarquía — medida sobre cinco cartas.

:::quiz:::

---

## Probabilidad de recibir cada mano inicial

> **Respuesta rápida**
> Los ases llegan más o menos una vez cada 221 repartos, pero cualquier pareja aparece alrededor de una vez cada 17. La diferencia está en las combinaciones: hay 1,326 manos posibles de dos cartas y una pareja concreta ocupa solo seis de ellas. Dos cartas cualesquiera del mismo palo llegan el 23.5% de las veces; A-K del mismo palo en concreto, apenas el 0.30%.

![Pareja de ases — el as de picas y el as de corazones recién repartidos sobre el tapete verde junto a fichas de póker](/images/holdem-probability-starting-hands.webp "Pareja de ases: la mejor mano inicial, repartida solo una vez cada 221 manos")

Antes de cualquier flop, hay exactamente **1,326 manos iniciales posibles de dos cartas**. Así de a menudo aparecen las que la gente pregunta.

| Mano inicial | Odds | Con qué frecuencia |
|:---|:---:|:---|
| Una pareja concreta (p. ej. A-A) | 1 en 221 (0.45%) | Una vez cada ~221 manos |
| **Cualquier** pareja | 1 en 17 (5.9%) | Unas dos veces por hora en vivo |
| A-K del mismo palo (concreto) | 1 en 332 (0.30%) | Raro |
| A-K (mismo palo *o* distinto) | 1 en 83 (1.2%) | — |
| Dos cartas cualesquiera del mismo palo | 1 en 4.3 (23.5%) | Casi una de cada cuatro manos |

Así que la próxima vez que alguien diga "nunca me llegan ases", tiene más o menos razón — recibirás una pareja *concreta* como los ases solo alrededor de ==una vez cada 221 manos==. Pero **cualquier** pareja llega cada 17 manos, y por eso el set mining es una estrategia real, no una fantasía. Qué parejas y manos del mismo palo merece la pena jugar desde cada asiento se cubre en la [tabla de manos iniciales por posición](/es/blog/holdem-starting-hands-chart).

---

## Probabilidad de ligar cada mano en el flop

> **Respuesta rápida**
> Con una pareja servida ligas set o mejor el 11.8% de las veces. Con dos cartas del mismo palo, un color ya hecho en el flop es solo el 0.84%, mientras que un proyecto de color sale el 10.9%. Son probabilidades condicionadas: parten de las cartas propias que muestra la tabla, no de la frecuencia de esa mano en cualquier reparto al azar.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ligas en el flop… | Con | Odds | En contra |
|:---|:---|:---:|:---:|
| Un set (o mejor) | Una pareja servida | 11.8% | ~7.5 a 1 |
| Un color | Dos cartas del mismo palo | 0.84% | ~118 a 1 |
| Un proyecto de color | Dos cartas del mismo palo | 10.9% | ~8 a 1 |
| Una escalera | Conectores del mismo palo (p. ej. 8-7) | 1.3% | ~76 a 1 |
| Doble pareja | Dos cartas sin emparejar | 2.0% | ~49 a 1 |
| Un full | Una pareja servida | 0.98% | ~101 a 1 |
| Póker | Una pareja servida | 0.245% | ~407 a 1 |

</div>

Para el set mining, ==7.5 a 1 es el pago de equilibrio teórico, no una regla de stack suficiente==: supone que cada vez que ligas, ganas y te pagan. En la práctica, la pauta habitual de 15–20 veces el stack efectivo deja margen para el valor que no llegas a cobrar y para los sets que pierden; incluso esa pauta es una heurística, no un call automático. Ese es el puente hacia las [pot odds](#pot-odds), más abajo. Para la derivación completa de cada fila de aquí — más la regla de stack del set mining y el desglose de color hecho vs proyecto vs completo — mira el análisis a fondo sobre [las odds de proyecto y de ligar cada mano en el flop](/es/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Odds de proyecto: ligar tu color o escalera para el river

> **Respuesta rápida**
> Un proyecto de color de nueve outs se completa alrededor del 35% de las veces entre turn y river, frente al 19.6% solo en el river tras fallar el turn. Un proyecto de escalera de ocho outs es algo menos probable. Son probabilidades de completar el proyecto, no victorias garantizadas: primero descuenta las cartas que mejoran tu mano pero dejan a un rival por delante.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Proyecto | Outs | Flop → river (2 cartas) | Turn → river (1 carta) |
|:---|:---:|:---:|:---:|
| Color + abierto de dos puntas (combo) | 15 | 54.1% | 32.6% |
| Color + gutshot | 12 | 45.0% | 26.1% |
| Proyecto de color | 9 | 35.0% | 19.6% |
| Escalera abierta (open-ended) | 8 | 31.5% | 17.4% |
| Dos sobrecartas | 6 | 24.1% | 13.0% |
| Escalera interior (gutshot) | 4 | 16.5% | 8.7% |
| Pareja → set | 2 | 8.4% | 4.3% |
| Set → full o póker | 7 (flop) / 10 (turn) | 33.4% | 21.7% |

</div>

La fila de dos sobrecartas con seis outs supone que emparejar cualquiera de las dos sobrecartas gana. Contra doble pareja, un set o un proyecto más fuerte, parte o todas esas cartas pueden ser outs sucias: descuéntalas en vez de tratar las seis como outs ganadoras seguras.

El caso clásico: ligas un **proyecto de color** (nueve outs). Lo completarás ==el 35% de las veces para el river== — mejor que una de cada tres. Un **proyecto de escalera abierto** (ocho outs) liga el 31.5%. Fíjate en las dos columnas: en cuanto el turn no ayuda te queda una carta en lugar de dos, así que tus odds se reducen más o menos a la mitad — el 35% pasa a ser 19.6% en el proyecto de color —, y por eso perseguir proyectos sale más caro calle a calle.

---

## Cómo calcular las probabilidades: contar outs y la regla del 2 y 4

> **Respuesta rápida**
> La regla del 2 y 4 estima el porcentaje de completar un proyecto: el doble de tus outs cuando queda una carta y cuatro veces tus outs para turn y river juntos. La estimación a dos cartas solo sirve para valorar un call en el flop si no hay que volver a pagar para ver ambas cartas. Es un atajo, no la equity exacta.

:::steps
Cuenta tus outs | Las cartas no vistas que completan tu mano (proyecto de color = 9)
En el flop, si verás las dos cartas sin volver a pagar | Multiplica outs × 4 → tu % aproximado de ligar para el river
En el turn (falta 1 carta) | Multiplica outs × 2 → tu % aproximado de ligar en el river
:::

**Ejemplo resuelto.** Tienes cuatro cartas para un color tras el flop. Eso son ==9 outs== (13 de tu palo − 4 que ves). En el flop: 9 × 4 = **36%** — la cifra real es 35.0%, así que clavado. En el turn si fallaste: 9 × 2 = **18%** (real: 19.6%).

:::tip[El ×4 ya sale un poco alto con 7 outs; la diferencia pesa más cuanto mayor es el proyecto. Con un monstruo de 15 outs, el "×4" dice 60% pero el número real es 54% — bájalo unos puntos para los proyectos grandes.]:::

Ese es el atajo: outs limpias → el multiplicador de las cartas que vas a ver → una estimación del proyecto para usar junto a tu [equity](/es/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Todo lo demás es saber qué hacer con ese número. La única destreza que esta regla da por sentada es el propio conteo — para proyectos combinados, outs solapados y las "outs sucias" que no deberían contar, mira la guía completa de [cómo contar outs en el póker](/es/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot odds: convertir tus odds en un call o un fold

> **Respuesta rápida**
> Las pot odds convierten un call en un objetivo de equilibrio: divide lo que pagas entre el bote después de sumar tu call. Compara ese precio con tu probabilidad de ganar en las cartas que ese call te compra de verdad. Una cifra de color a dos cartas no justifica pagar solo por el turn si puede llegar otra apuesta; los pagos futuros necesitan una estimación aparte.

![Infografía de pot odds — un bote de $100 y un call de $25, así que 25 ÷ 125 significa que necesitas 20% de equity](/images/holdem-probability-pot-odds.webp "Un call de $25 a un bote de $100: 25 ÷ 125 = 20% de equity necesaria para empatar")

**Ejemplo resuelto.** El bote es $100. Tu rival apuesta $50, dejándolo en $150. Debes igualar $50 para ganar esos $150.

:::steps
Bote tras la apuesta | $100 + $50 = $150
Tu call | $50 para ganar $150 (bote final $200)
Pot odds | 50 ÷ 200 = 25% — necesitas al menos 25% de equity
Tu equity | Proyecto de color ≈ 35% para el river (regla del 4) — el número asume que ves ==las dos== cartas
Decisión | Con dos cartas por venir: 35% > 25% → un ==g:call== claramente rentable
:::

Ese es el momento en que todos los números dan sus frutos — pero **usa el número de la calle que estás pagando**. Si vienen las dos cartas (estás all-in, o el turn pasa sin más apuestas), tu **35%** supera el precio del **25%** y pagar gana dinero a largo plazo aunque pierdas la mano más veces que no. Si tu rival va a volver a apostar en el turn, este call solo te compra la carta del turn — desde el flop eso es ==9 ÷ 47 = 19.1%==, *por debajo* del precio — y entonces el proyecto necesita [odds implícitas](/es/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp"), el dinero que ganas en las calles siguientes cuando ligas, para cubrir ese hueco. Gastar el número del ×4 en una decisión de una sola carta es la forma más común en que los principiantes sobrevaloran un proyecto. Para el método completo y la chuleta de tamaños de apuesta, mira [cómo calcular las pot odds](/es/blog/holdem-pot-odds).

---

## Odds de escalera real y de color (y por qué son tan raras)

> **Respuesta rápida**
> Una escalera real aparece más o menos una vez cada 30,940 manos de Hold'em de siete cartas al azar, mucho más a menudo que en un reparto de cinco. Una escalera de color no real ronda 1 entre 3,590 al river: menos rara, pero aun así excepcional. Ninguna de las dos cifras mide tu opción desde un proyecto concreto: con cartas propias y flop conocidos, el cálculo queda condicionado a esas cartas.

![Infografía de una escalera real de corazones — A♥ K♥ en mano completando A-K-Q-J-10 de corazones sobre una mesa 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Una escalera real de corazones: la mano más rara del póker, alrededor de 1 entre 30,940 para el river")

- **Escalera real:** como mano servida de cinco cartas, ==1 entre 649,740==. Jugando Hold'em hasta el river, mejora a alrededor de 1 entre 30,940 porque eliges tus mejores cinco de siete cartas. En cualquier caso, la mayoría de los jugadores pasan *años* entre una y otra.
- **Escalera de color:** alrededor de 1 entre 72,193 como mano de cinco cartas (cerca de 1 entre 3,590 para el river en Hold'em). Aun así, para casi todos, un avistamiento de una vez al año.

¿Por qué tan raras? Una escalera real es exactamente **una secuencia concreta de cartas en un palo concreto** — cuatro formas de hacerla en toda la baraja frente a 1,302,540 formas de hacer una simple carta alta. La rareza es toda la razón por la que se sienta en lo más alto de la jerarquía.

:::note
Un mito común: "una escalera real gana a todo, así que puede *empatar*". El bote sí puede dividirse, pero no como se suele explicar. Dos escaleras reales en palos *distintos* exigirían diez cartas concretas, y dos jugadores solo disponen de nueve — dos cartas propias cada uno más las cinco de la mesa —, así que no puede pasar. La única forma de que ambos tengan escalera real es que la propia mesa sea la escalera real: todos juegan la mesa y el bote se divide. En la práctica no lo verás casi nunca.
:::

---

## Odds de tiro largo: coolers, pókers y bad beats

> **Respuesta rápida**
> Las odds de tiro largo necesitan una condición de partida. Con una pareja servida, el póker en el flop sale más o menos 1 de cada 408 veces; recibir ases es 1 entre 221 antes de ver ninguna carta. Estos sucesos explican resultados raros, pero una derrota rara, por sí sola, no demuestra si la decisión previa fue correcta.

| Tiro largo | Odds |
|:---|:---:|
| Recibir pareja de ases | 1 en 221 |
| Ligar póker en el flop con una pareja servida | 1 en 408 |
| Ligar escalera de color en el flop (conectores del mismo palo) | ~1 en 4,900 |
| Ligar una escalera real para el river | 1 en 30,940 |

**Set sobre set** — ligas un set y pierdes contra un set mayor — es el cooler definitivo. No hay un número limpio único porque depende de cuántos jugadores tengan parejas, pero el ancla es esta: *tú* ligas un set solo el 11.8% de las veces, y que un rival haga lo mismo en la misma mesa es lo bastante raro como para que casi todos recuerden cada uno. Cuando pasa, la derrota por sí sola no demuestra que el call fuera un error — ni un acierto; júzgalo por el precio y la profundidad de stacks que tenías en ese momento, no por el showdown. Si quieres ver exactamente cómo se resuelven esos showdowns, las [reglas de kicker y desempate](/es/blog/holdem-tiebreak-rules) cubren cada caso límite.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-hand-rankings | Jerarquía de manos de póker, de la mejor a la peor | /images/holdem-hand-rankings-hero.webp
/es/blog/holdem-starting-hands-chart | Qué manos iniciales jugar de verdad | /images/holdem-starting-hands-chart-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cuál es la probabilidad de ligar una escalera real en Texas Hold'em?**

A. Alrededor de 1 entre 30,940 para el river cuando juegas una mano de Hold'em hasta el final (usando tus mejores cinco de siete cartas). Como mano servida de cinco cartas es 1 entre 649,740. En cualquier caso, la mayoría de los jugadores pasan años sin ligar una.

**Q. ¿Cuál es la probabilidad de una escalera de color?**

A. Más o menos 1 entre 72,193 como mano de cinco cartas, o alrededor de 1 entre 3,590 para el river en Hold'em. Es la segunda mano más rara, superada solo por la escalera real.

**Q. ¿Cuál es la probabilidad de tener póker (four of a kind)?**

A. El póker (cuatro iguales) se liga alrededor de 1 entre 595 veces para el river en Hold'em (0.168%), o 1 entre 4,165 como mano servida de cinco cartas. Un póker *concreto*, como póker de ases, es mucho más improbable — aproximadamente 1 entre 7,700 para el river. La vía más común (alrededor del 57% de las veces) es un as en tu mano y los otros tres en la mesa; tener la pareja servida y que caigan los dos ases restantes es más raro, y que los cuatro aparezcan en la mesa, más raro todavía.

**Q. ¿Qué probabilidad hay de ligar un color, una escalera o un full?**

A. Para el river en Hold'em ligas color alrededor del 3.0% de las veces (1 entre 33), escalera el 4.6% (1 entre 22) y full el 2.6% (1 entre 39). Así que el full es en realidad más raro que el color, y el color más raro que la escalera — exactamente el orden que la jerarquía de manos les da.

**Q. ¿Cuál es la probabilidad de cada mano de póker?**

A. En resumen, para el river en Hold'em: pareja el 43.8%, doble pareja el 23.5%, trío el 4.83%, escalera el 4.62%, color el 3.03%, full el 2.60% y póker el 0.168%; la escalera de color es 1 entre 3,590 y la escalera real 1 entre 30,940. Tienes cada valor, junto a las odds a cinco cartas, en la tabla de arriba.

**Q. ¿Cuál es la probabilidad de ligar un color para el river?**

A. Si ligas un proyecto de color en el flop (nueve outs), lo completarás alrededor del 35% de las veces para el river — mejor que una de cada tres. Con una sola carta (turn a river), baja a aproximadamente 19.6%.

**Q. ¿Cuál es la probabilidad de ligar un set en el flop?**

A. Alrededor del 11.8% en el flop, o más o menos 1 entre 8.5, cuando tienes una pareja servida. Las odds equivalentes de 7.5 a 1 describen fallos frente a aciertos, no una profundidad de stack recomendada. Un call de set mining también necesita un pago futuro realista; la pauta práctica de 15–20 veces deja margen para los sets que no reciben acción o que pierden.

**Q. ¿Cuál es la probabilidad de recibir pareja de ases?**

A. 1 entre 221 (0.45%) para los ases en concreto. Cualquier pareja, en cambio, llega mucho más a menudo — alrededor de 1 entre 17 manos (5.9%).

**Q. ¿Qué es la regla del 2 y 4 en el póker?**

A. La regla del 2 y 4 (también llamada "regla del 4 y 2") estima las odds de proyecto: multiplica tus outs por 4 en el flop para turn y river juntos, o por 2 en el turn solo para el river. Nueve outs dan 36% a dos cartas con el ×4, frente al 35.0% exacto; el ×2 da 18% para la carta del river, frente al 19.6%. Consulta la tabla exacta cuando el precio esté ajustado y reserva la cifra a dos cartas para ver ambas sin más apuestas.

**Q. ¿Cómo se calculan las probabilidades en el póker?**

A. Empiezas contando tus outs — las cartas no vistas que completan tu mano — y aplicas la regla del 2 y 4: outs × 4 en el flop, outs × 2 en el turn te dan tu porcentaje aproximado de ligar. Un proyecto de color son 9 outs, así que 9 × 4 = 36% (real: 35.0%). Luego comparas ese porcentaje con tus pot odds para decidir si pagar es rentable, usando la cifra del ×4 solo si vas a ver las dos cartas sin volver a pagar.

**Q. ¿Qué es la "regla 80/20" en el póker?**

A. No es una fórmula de odds fija, sino la idea de que buena parte del beneficio a largo plazo viene de una minoría de tus manos y decisiones — las manos premium bien jugadas y los momentos en que tus odds de proyecto superan claramente el precio del call. La mayoría de manos se foldean; el dinero se hace en ese puñado de situaciones donde la matemática está de tu lado. Por eso conviene automatizar la regla del 2 y 4 y las pot odds: son las que deciden esos botes clave.

**Q. ¿Cómo se calculan las pot odds?**

A. Divide la cantidad que debes igualar entre el bote total tras tu call: igualar $50 a un bote de $150 da 50 ÷ 200 = 25%, la equity que necesitas. Esta página aporta la otra mitad de la comparación — con qué frecuencia liga de verdad tu proyecto. El lado del precio está en [la guía de pot odds — ratios, atajos por tamaño de apuesta y los errores caros](/es/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

**Q. ¿Cuál es la probabilidad de set sobre set?**

A. No hay un número fijo único — depende de cuántos rivales tengan parejas servidas — pero es raro. Para empezar, tú ligas un set solo el 11.8% de las veces, así que que dos jugadores liguen sets en la misma mesa es el clásico "cooler" que cuesta stacks.

**Q. ¿Cuál es la probabilidad de ligar una escalera real en el flop?**

A. Ínfima. Incluso cuando ya tienes dos de sus cinco cartas del mismo palo — digamos A♥ K♥ — el flop trae el Q♥ J♥ 10♥ exacto solo alrededor de una vez cada 19,600 flops. Desde una mano inicial aleatoria es muchísimo más raro aún, y por eso casi toda escalera real que se liga se completa en el turn o el river, no en el flop.

**Q. ¿Cuál es la mano ganadora más común en el póker?**

A. La pareja, seguida de la doble pareja. Como todos los jugadores comparten las cinco cartas comunitarias, la mayoría de los botes de Texas Hold'em se deciden con una sola pareja y su kicker — los colores, escaleras y fulls ganan mucho menos de lo que espera un principiante. La frecuencia completa de cada resultado está en la tabla de arriba.

**Q. ¿Con qué frecuencia gana la mejor mano en el póker?**

A. Menos de lo que crees antes del river. Incluso la pareja de ases — la mejor mano inicial — gana solo alrededor del 85% de las veces mano a mano, y mucho menos contra una mesa llena. Para el river, las mejores cinco cartas ganan por definición; las sorpresas pasan antes, cuando una mano hecha es superada por un proyecto vivo.

**Q. ¿Con qué frecuencia ligas en el flop?**

A. Con dos cartas propias sin emparejar, ligarás al menos una de ellas en el flop alrededor del 32% de las veces — así que fallas por completo unos dos flops de cada tres. Por eso importan tanto la posición y la agresividad: cualquier rival concreto ha fallado el flop unas dos veces de cada tres, y quien está dispuesto a apostar se lleva el bote a menudo.

**Q. ¿Qué probabilidad hay de tener los nuts?**

A. No hay un número único — los nuts (la mejor mano posible en una mesa dada) cambian con cada tablero. En una mesa seca y sin parejas, los nuts pueden ser el set más alto; en una mesa coordinada, una escalera o un color. La destreza no es memorizar una cifra de odds, sino leer qué mano *es* los nuts y calcular cuán probable es que un rival la tenga.

---

## Los 3 números para grabar a fuego

1. **Ligar un set: ~12% (1 entre 8.5).** La frecuencia de acierto abre el cálculo del set mining; la profundidad de stack y el pago probable deciden si el call es rentable.
2. **Proyecto de color para el river: 35%.** Nueve outs, regla del 4 → 9 × 4 = 36%.
3. **Las pot odds ganan a la corazonada.** Ajusta la probabilidad a las cartas que te compra este call y compara el precio con tu probabilidad de ganar — completar el proyecto no siempre basta.

El póker premia a los jugadores que han hecho esto automático. Aprende la tabla, ejercita la regla del 2 y 4 y empieza a preguntarte "¿qué probabilidad hay?" *antes* de actuar en lugar de después. A continuación, pon la matemática a trabajar aprendiendo [qué manos iniciales jugar desde cada posición](/es/blog/holdem-starting-hands-chart), o repasa [por qué el color gana a la escalera](/es/blog/holdem-flush-vs-straight) para que siempre sepas cuánto valen tus outs.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Jerarquía de manos</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Jerarquía de manos de póker, de la mejor a la peor</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">El orden que crean estas odds — cada mano clasificada</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Manos iniciales</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tabla de manos iniciales por posición</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cuáles de esas 1,326 manos jugar de verdad</div>
  </a>
  <a href="/es/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Duelo de manos</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">¿El color gana a la escalera?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Por qué la mano más rara siempre gana</div>
  </a>
  <a href="/es/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Lectura de mesa</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cómo leer la mesa en Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cuenta tus outs viendo cada proyecto</div>
  </a>
  <a href="/es/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cómo la posición lo cambia todo</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cuándo las odds justifican un call — y cuándo lo hace la posición</div>
  </a>
</div>
`.trim(),
};

export default POST;
