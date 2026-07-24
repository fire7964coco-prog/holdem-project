import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Probabilidad de proyecto en el póker — cuánto ligas en el flop y hasta el river",
  seoTitle: "¿Qué probabilidad tienes de ligar el proyecto? — Póker",
  desc: "La probabilidad real de ligar un set, un color, un póker y cada proyecto en Hold'em, con las combinaciones exactas y la matemática del set mining.",
  tldr: "Ligas un set con una pareja servida el 11.8% de las veces (7.5 a 1 en contra), ligas un color con dos cartas del mismo palo apenas un 0.84%, y completas un proyecto de color del flop al river el 35% de las veces. Cada número de abajo sale de la baraja, no se adivina.",
  category: "odds",
  date: "2026-07-04",
  updated: "2026-07-24",
  masterUpdated: "2026-07-18",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "Una pequeña pareja servida junto a una torre de fichas sobre el tapete verde mientras se reparte el flop, el momento en que un call de set mining paga o falla",
  tags: ["probabilidad de proyecto", "probabilidad de ligar un set", "probabilidad de ligar color", "probabilidad de ligar poker", "set mining", "probabilidad de recibir ases", "probabilidades del flop poker", "proyecto de color completar"],
  content: `
La mano que me hizo aprender esto en frío: pagué una subida con un par de cincos, ligué mi set en el flop, dejé sin fichas a un tipo con ases, y un colega me preguntó cómo "sabía" que debía pagar. No lo *sabía* — sabía el número. ==Ligas un set más o menos 1 de cada 8.5 intentos==, y los stacks eran lo bastante profundos para pagarme cuando acertara. Esa simple fracción convirtió un call de "me siento con suerte" en uno rentable.

Eso es en realidad la probabilidad de proyecto: no es suerte, sino la ==matemática fija de una baraja de 52 cartas==. Con qué frecuencia ligas un set, ligas un color, completas un proyecto para el river — cada uno de estos es un número que puedes deducir, y los jugadores que ganan los tienen memorizados. Esta guía es la ==g:probabilidad detrás del flop y del proyecto==, cada una con las combinaciones reales para que veas *por qué* el número es el que es. Es el complemento de la [tabla completa de probabilidades del póker](/es/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); una vez que conoces las probabilidades de aquí, [contar outs](/es/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") y las [pot odds](/es/blog/holdem-pot-odds) las convierten en decisiones.

---

### Los números que hay que grabar a fuego

:::stripe
11.8% | Ligar un set con una pareja servida
0.84% | Ligar un color hecho con dos cartas del mismo palo
35% | Completar un proyecto de color del flop al river
407 a 1 | Ligar un póker con una pareja servida
:::

---

## El ciclo de vida del flop: una tabla que toda web de odds parte en dos

Esta es la tabla que nadie construye en un solo sitio. La mayoría de las webs te dan la probabilidad de *ligar* una mano en una página y la de *completar un proyecto* en otra — pero en la mesa es una sola historia continua. Recibes dos cartas, ligas algo hecho **o** un proyecto, y si es un proyecto, o lo completas o no.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Con lo que juegas | Ligarlo hecho | Ligar el proyecto | Completar el proyecto al river |
|:---|:---:|:---|:---|
| Pareja servida → set | 11.8% (7.5 a 1) | — | set→full 33% al river |
| Dos del mismo palo → color | 0.84% (118 a 1) | 10.9% proyecto de color | 35% (9 outs) |
| Conectoras → escalera | 1.3% (76 a 1) | ~10% proyecto abierto | 31.5% (8 outs) |
| Dos sin emparejar → pareja | ~32% | — | — |
| Pareja servida → póker | 0.245% (407 a 1) | — | — |

</div>

Lee una fila de izquierda a derecha y ves el ciclo de vida completo de una mano. Dos cartas del mismo palo casi nunca ligan un color *hecho* (0.84%) — pero ligan un **proyecto de color** trece veces más a menudo (10.9%), y ese proyecto llega para el river el 35% de las veces. Mezclar esos tres números es el error de odds más común de todos, así que abajo separamos cada uno con la matemática a la vista.

---

## Probabilidad de ligar un set (y la matemática del set mining)

![Infografía de un botón de dealer dorado y dos cartas boca abajo sobre un flop K♦ 7♣ 2♠ — el momento en que se decide un call de set mining](/images/holdem-button-dealer-board.webp "El flop decide un call de set mining: liga tu proyecto de dos outs el 11.8% de las veces, o pasa y espera la siguiente pareja")

**Ligas un set (o mejor) con una pareja servida el 11.8% de las veces — más o menos 1 de cada 8.5, o 7.5 a 1 en contra.** Este es el número de proyecto más importante del juego, porque es toda la base del *set mining*: pagar una subida con una pareja pequeña solo para ligar trío en el flop.

¿De dónde sale el 11.8%? Con una pareja servida quedan dos cartas en la baraja que te emparejan. El flop son tres cartas sacadas de las 50 que no ves. La forma limpia de contarlo es al revés — la probabilidad de que **falles** las tres:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Paso | Matemática |
|------|------|
| Flops que fallan tu pareja | C(48,3) = 17,296 |
| Total de flops posibles | C(50,3) = 19,600 |
| Probabilidad de fallar | 17,296 ÷ 19,600 = 88.2% |
| **Probabilidad de ligar un set** | **1 − 0.882 = 11.8%** |

</div>

### Cuándo el set mining sale a cuenta de verdad

Ligar un set el 11.8% de las veces significa que **fallas el 88% de las veces** y pasas. Para ganar, el 12% que aciertas tiene que pagar todas las veces que fallas. El punto de equilibrio es 7.5 a 1 — así que si pagas para hacer set mining, quieres que el bote más lo que puedas ganar en calles posteriores valga **al menos 7.5×** tu call, y en la práctica ==g:15 a 1 o mejor== para cubrir las veces en que tu set no cobra o lo superan.

:::tip[La regla práctica: solo paga una subida para hacer set mining si los stacks efectivos son más o menos 15-20× el precio del call. Los stacks profundos convierten las parejas pequeñas en oro; los stacks cortos las convierten en basura. La pareja no cambió — cambiaron las odds implícitas.]:::

El set mining es la jugada de [odds implícitas](/es/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") más pura que existe — una probabilidad diminuta de ganar un bote grande más adelante. El marco completo — la fórmula, los múltiplos de stack proyecto por proyecto, y las reverse implied odds — está en esa guía.

Dos números relacionados que la gente pregunta:

- **Ligar un set para el river** (desde el preflop, viendo las cinco cartas de la mesa) es un ==**19.2%**== — 1 − C(48,5)/C(50,5). Más alto que la cifra del flop porque tienes dos cartas más, pero no puedes contar con llegar al river barato, y por eso el número del flop manda en el set mining.
- **Set contra set** — ligas un set y pierdes contra uno mayor — no tiene una cifra única fija porque depende de cuántos rivales tengan parejas, pero con dos jugadores que ambos tienen pareja ronda el ~1%. Es el cooler clásico: la matemática estuvo de tu lado todo el camino.

---

## Odds de color: hecho vs proyecto vs completado

![As-rey de corazones con un flop de reina-siete de corazones sobre el tapete verde, un proyecto de color de nueve outs ligado en el flop junto a una torre corta de fichas](/images/holdem-drawing-odds-flush-draw.webp "Dos corazones en mano, dos en el flop — un proyecto de color, no un color hecho: 10.9% de ligarlo, 35% de completarlo al river")

Aquí es donde la competencia mezcla tres números completamente distintos. Con dos cartas del mismo palo en tu mano, hay **tres preguntas separadas**, y difieren en un orden de magnitud:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pregunta | Odds | La matemática |
|:---|:---:|:---|
| Ligar un **color hecho** (3 de tu palo) | 0.84% · 118 a 1 | C(11,3) ÷ C(50,3) = 165 ÷ 19,600 |
| Ligar un **proyecto de color** (2 más de tu palo) | 10.9% · 8 a 1 | C(11,2)×39 ÷ C(50,3) = 2,145 ÷ 19,600 |
| **Completar** un proyecto de color al river | 35.0% · 1.9 a 1 | 1 − C(38,2) ÷ C(47,2) |

</div>

Así que la frase honesta es: dos cartas del mismo palo ligan un **proyecto** mucho más que un color hecho, y ese proyecto tiene un 35% tipo cara-o-cruz de llegar. Perseguir cada mano del mismo palo "por el color" ignora que ligarás el color hecho menos de una vez cada 100 manos.

La cifra de completar se reparte por calle, lo que importa en cuanto queda apuesta por delante:

- **Flop → river (las dos cartas):** 35.0% — usa esto solo cuando estás all-in en el flop.
- **Flop → turn (una carta):** 9 ÷ 47 = 19.1%.
- **Turn → river (una carta):** 9 ÷ 46 = 19.6%.

Un color por **puerta trasera** (backdoor, runner-runner) — ligas solo *una* carta extra de tu palo y necesitas que tanto el turn como el river sean de tu palo — sale más o menos un 4.2%, lo que equivale más o menos a un out extra de equity. No es razón para pagar, pero sí un desempate real en spots ajustados. Para convertir cualquiera de estas en un call-o-fold, pasa el número por [cómo calcular las pot odds](/es/blog/holdem-pot-odds).

---

## Odds de escalera: ligarla vs tener proyecto a ella

![Una escalera al ocho tendida en secuencia sobre el tapete verde, la mano terminada a la que persigue un proyecto abierto](/images/holdem-reading-straight-example.webp "Un proyecto de escalera abierto se llena por cualquiera de los dos extremos — ocho outs, 31.5% de completarlo al river")

Las conectoras como 8♠7♠ tienen su propio ciclo de vida. **Ligarás una escalera hecha solo el 1.3%** de las veces (76 a 1) — más raro de lo que asume la mayoría. Mucho más a menudo ligas un **proyecto**:

- **Proyecto de escalera abierto (de dos puntas):** ~10% de los flops con conectoras. Ocho outs, se completa el **31.5%** al river — 1 − C(39,2)/C(47,2) — o un 17% con una sola carta.
- **Proyecto interior (gutshot):** cuatro outs, se completa el **16.5%** al river, 8.5% con una carta. La mitad de la equity de un abierto, y por eso las mismas conectoras se juegan tan distinto según el flop.

Fíjate en que el proyecto abierto (31.5%) y el proyecto de color (35%) están cerca — ambos son "un proyecto grande", ambos alrededor de un tercio de ligar al river. Ese es el atajo que vale la pena interiorizar: un proyecto grande normal es de ==**uno de cada tres**== de completarse al river, y baja a más o menos uno de cada seis en una sola calle.

---

## Flops raros: póker, trips, fulls y escaleras de color

Estos son los números detrás de las mejores (y peores) noches de tu vida en el póker. Cada uno es un problema de combinatoria limpio sobre los 19,600 flops posibles:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ligar esto | Con lo que juegas | Odds | La matemática |
|:---|:---|:---:|:---:|
| **Póker** | Una pareja servida | 0.245% · 407 a 1 | 48 ÷ 19,600 |
| **Full** | Una pareja servida | 0.98% · 101 a 1 | 192 ÷ 19,600 |
| **Trips** | Dos cartas sin emparejar | 1.35% · 73 a 1 | 264 ÷ 19,600 |
| **Escalera de color** | Conectoras del mismo palo | 0.02% · ~4,900 a 1 | 4 ÷ 19,600 |

</div>

Una distinción sutil que las webs top suelen chapucear: un **set** es una pareja servida más una carta que la empareja en la mesa (11.8%), mientras que **trips** es una carta suelta sin emparejar que la mesa empareja dos veces (1.35%). El mismo trío sobre el papel, odds y jugabilidad muy distintas — un set está disfrazado, los trips son evidentes. Que nadie te diga que son la misma forma.

El número de la escalera de color es para enmarcar: con conectoras del mismo palo hay exactamente **cuatro** flops que la hacen (una secuencia en tu palo), así que 4 ÷ 19,600 ≈ 1 de cada 4,900. Por eso las escaleras de color ligadas en el flop son historias que la gente cuenta durante una década.

La cifra del full cuenta todas las formas en que el flop te sirve un full con una pareja servida — incluidos los flops que vienen como trío de otro valor sobre tu pareja — y por eso se lee 0.98% en lugar del ~0.73% más estrecho que algunas tablas citan solo para "set más una pareja en la mesa".

---

## Probabilidad de recibir tu mano

Antes de todo lo anterior, está el reparto. Con **1,326 combinaciones posibles de dos cartas**, así de a menudo llegan las manos que la gente pregunta:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Recibir esto | Odds | Con qué frecuencia |
|:---|:---:|:---:|
| Ases servidos (pareja concreta) | 220 a 1 · 0.45% | 6 ÷ 1,326 |
| Cualquier pareja servida | 16 a 1 · 5.9% | 78 ÷ 1,326 |
| A-K del mismo palo | 331 a 1 · 0.3% | 4 ÷ 1,326 |
| Dos cartas del mismo palo | 3.25 a 1 · 23.5% | casi 1 de cada 4 manos |

</div>

La que sorprende a la gente: si **tú** tienes ases en una mesa de 10 jugadores, la probabilidad de que un *segundo* jugador también tenga ases es de más o menos **1 de cada 136** (nueve rivales, cada uno 1 ÷ C(50,2) = 1/1,225). Raro, pero es exactamente el cooler ases-contra-ases que vacía un stack y se le echa la culpa al software "trucado". Es solo la baraja. Para saber cuáles de esas 1,326 manos vale la pena jugar desde cada asiento, mira la [tabla de manos iniciales por posición](/es/blog/holdem-starting-hands-chart).

---

:::readnext[Sigue leyendo]
/es/blog/holdem-outs | Cómo contar outs en el póker | /images/holdem-outs-hero.webp
/es/blog/holdem-pot-odds | Cómo calcular las pot odds | /images/holdem-pot-odds-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué probabilidad hay de ligar un set?**

A. Alrededor del 11.8%, o 1 de cada 8.5, cuando tienes una pareja servida — se suele citar como "7.5 a 1 en contra". Sale de 1 − C(48,3)/C(50,3): de los 19,600 flops posibles, 17,296 fallan tu pareja. Ese número es toda la base para saber si hacer set mining con una pareja pequeña es rentable.

**Q. ¿Por qué se dice 7.5 a 1 pero también 1 de cada 8?**

A. Son las mismas odds dichas de dos formas. "7.5 a 1 en contra" cuenta fallos frente a aciertos (7.5 fallos por cada acierto), lo que da 1 acierto por cada 8.5 intentos — es decir, más o menos 1 de cada 8.5, o el 11.8%. "Odds en contra" y "1 de cada N" describen siempre la misma probabilidad; no las sumes.

**Q. ¿Cuál es la diferencia entre un set y trips?**

A. Un set es una pareja servida más una carta que la empareja en la mesa — lo ligas el 11.8% de las veces y está bien disimulado. Trips es una carta suelta sin emparejar que la mesa empareja (dos cartas iguales en la mesa) — solo el 1.35% en el flop, y mucho más evidente para los rivales. El mismo valor de trío, odds y valor muy distintos.

**Q. ¿Qué es un proyecto de color?**

A. Un proyecto de color es cuando tienes cuatro cartas hacia un color y necesitas una más de ese palo — por ejemplo A♥ K♥ en un flop 9♥ 5♥ 2♠, donde cualquiera de los nueve corazones que quedan lo completa. Un proyecto de color ligado en el flop tiene nueve outs y llega más o menos el 35% de las veces al river, o alrededor del 19% con una sola carta.

**Q. ¿Qué probabilidad hay de ligar un color?**

A. Apenas un 0.84% (más o menos 118 a 1) con dos cartas del mismo palo — eso es C(11,3)/C(50,3). No lo confundas con ligar un *proyecto* de color, que es un 10.9%, ni con *completar* ese proyecto al river, que es un 35%. Dos cartas del mismo palo ligan un proyecto trece veces más a menudo que un color hecho.

**Q. Si ligo un proyecto de color, ¿qué probabilidad tengo de completarlo?**

A. Alrededor del 35% al river con nueve outs (1 − C(38,2)/C(47,2)) — un poco mejor que uno de cada tres. Con una sola carta es más o menos un 19%: 9/47 del flop al turn, 9/46 del turn al river. Usa el número de una carta siempre que quede apuesta por venir.

**Q. ¿Qué probabilidad hay de ligar un color con cuatro cartas frente a tres?**

A. Con cuatro cartas hacia un color después del flop — un proyecto de color real con nueve outs — lo completarás más o menos el 35% de las veces al river. Con solo tres cartas hacia el color necesitas que *tanto* el turn como el river sean de tu palo (un color por puerta trasera, o runner-runner), lo que sale apenas un ~4.2%. Por eso cuatro cartas hacia el color es un proyecto que vale la pena jugar y tres es apenas un desempate.

**Q. ¿Qué es un proyecto de escalera y qué probabilidad hay de ligarlo?**

A. Un proyecto de escalera son cuatro cartas hacia una escalera. Un proyecto de escalera abierto (como 8-7 en una mesa 9-6-2, a la espera de un 5 o un 10) tiene ocho outs y se completa más o menos el 31.5% de las veces al river. Un proyecto interior (gutshot) tiene solo cuatro outs — un único valor rellena el hueco — así que liga alrededor del 16.5%, más o menos la mitad de a menudo.

**Q. ¿Cuál es la regla para jugar un proyecto?**

A. La regla es sencilla: compara tu probabilidad de ligar con las pot odds que te da el bote. Un proyecto de color tiene un 19.6% de ligar del turn al river (nueve outs) y un proyecto abierto un 17% con una carta (ocho outs); si el bote paga más de lo que "cuesta" completar el proyecto, pagas, y si no, te retiras o buscas odds implícitas que lo compensen. Pasa el número por [cómo calcular las pot odds](/es/blog/holdem-pot-odds) y tendrás la decisión hecha.

**Q. ¿Qué probabilidad hay de ligar un póker?**

A. 0.245%, o 407 a 1, con una pareja servida — hay exactamente 48 flops (tus dos últimas cartas iguales más cualquier tercera carta, C(48,1)) de los 19,600. Ligar una escalera de color es aún más raro, alrededor de 1 de cada 4,900.

**Q. ¿Qué probabilidad hay de recibir ases servidos?**

A. 220 a 1 (0.45%) para los ases en concreto — 6 de las 1,326 combinaciones iniciales. Cualquier pareja servida es mucho más común, a 16 a 1 (5.9%). Y si tienes ases en una mesa llena, que otro jugador también los tenga es de más o menos 1 de cada 136.

**Q. ¿Qué probabilidad hay de set contra set?**

A. No hay un número único fijo — depende de cuántos rivales tengan parejas servidas — pero cuando dos jugadores tienen ambos pareja y ambos ligan set, ronda el 1%. Es el cooler definitivo: ligas un set solo el 11.8% de las veces para empezar, así que que dos de vosotros lo hagáis en la misma mesa es una historia, no un error.

---

## Las 3 cosas que debes recordar

1. **Ligar un set: 11.8% (7.5 a 1).** El número que decide cada call de set mining — solo paga con stacks lo bastante profundos para cobrar 15× o más cuando aciertes.
2. **Hecho vs proyecto vs completado son números distintos.** Dos cartas del mismo palo ligan un color hecho un 0.84%, un proyecto de color un 10.9%, y completan ese proyecto un 35%. Nunca cites el equivocado.
3. **Un proyecto grande es más o menos uno de cada tres al river.** Proyecto de color 35%, abierto 31.5% — y más o menos uno de cada seis en una sola calle.

Cada cifra de aquí sale directamente de la baraja, no de una corazonada. Lleva estas a [cómo contar outs](/es/blog/holdem-outs) para armar el número en tiempo real, luego a las [pot odds](/es/blog/holdem-pot-odds) para convertirlo en un call o un fold — o vuelve a la tabla completa de [probabilidades del póker](/es/blog/holdem-probability) para tener cada número de mano hecha y de proyecto largo en un solo sitio.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de probabilidades del póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cada mano hecha y cada número de proyecto largo en un solo sitio</div>
  </a>
  <a href="/es/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo contar outs en el póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Convierte estas odds en un conteo de outs en vivo</div>
  </a>
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">¿Es correcto el precio para tu proyecto?</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Manos iniciales</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales por posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Con qué parejas y manos del mismo palo proyectar</div>
  </a>
</div>
`.trim(),
};

export default POST;
