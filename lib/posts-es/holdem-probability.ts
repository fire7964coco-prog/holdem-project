import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Probabilidades en el póker — las odds reales de cada mano en Texas Hold'em",
  seoTitle: "¿Con qué frecuencia ligas de verdad? — Probabilidades del póker",
  desc: "Las probabilidades reales de cada mano, flop y proyecto en Texas Hold'em, más la regla del 2 y 4 y las pot odds explicadas fácil, en una sola tabla.",
  tldr: "Para el river ligarás pareja el 43.8% de las veces, doble pareja el 23.5%, color el 3.0% y full el 2.6% — mientras que una escalera real aparece solo una vez cada 31,000 manos.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-13",
  masterUpdated: "2026-07-03",
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

Aquí tienes la tabla maestra. El truco que casi todas las webs se saltan: hay ==dos números distintos== para cada mano, y confundirlos es la razón por la que la gente discute sobre lo "rara" que es en realidad una escalera real.

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
> La carta alta es la mano de cinco cartas *más* común (50%), pero uno de los resultados *menos* comunes en Hold'em (17%). ¿Por qué? Siete cartas te dan tantas oportunidades de emparejar que "no ligar pareja para el river" se vuelve raro. Más cartas, más conexiones.

Fíjate en que el orden nunca cambia — cuanto más rara es una mano de ligar, más alto gana. Esa es toda la lógica detrás de la [jerarquía de manos de póker](/es/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): la probabilidad *es* la jerarquía.

:::quiz:::

---

## Probabilidad de recibir cada mano inicial

![Pareja de ases — el as de picas y el as de corazones recién repartidos sobre el tapete verde junto a fichas de póker](/images/holdem-probability-starting-hands.webp "Pareja de ases: la mejor mano inicial, repartida solo una vez cada 221 manos")

Antes de cualquier flop, hay exactamente **1,326 manos iniciales posibles de dos cartas**. Así de a menudo aparecen las que la gente pregunta.

| Mano inicial | Odds | Con qué frecuencia |
|:---|:---:|:---|
| Una pareja concreta (p. ej. A-A) | 1 en 221 (0.45%) | Una vez cada ~221 manos |
| **Cualquier** pareja | 1 en 17 (5.9%) | Unas dos veces por hora en vivo |
| A-K del mismo palo (concreto) | 1 en 332 (0.30%) | Raro |
| A-K (mismo palo *o* distinto) | 1 en 83 (1.2%) | — |
| Dos cartas cualesquiera del mismo palo | 1 en 4.3 (23.5%) | Casi una de cada cuatro manos |

Así que la próxima vez que alguien diga "nunca me llegan ases", tiene más o menos razón — recibirás una pareja *concreta* como los ases solo alrededor de ==una vez cada 221 manos==. Pero **cualquier** pareja llega cada 17 manos, y por eso el set mining es una estrategia real, no una fantasía. Qué parejas y manos del mismo palo merece la pena jugar desde cada asiento se cubre en la tabla de manos iniciales por posición.

---

## Probabilidad de ligar cada mano en el flop

Esta es la tabla que la mayoría de páginas de odds entierran o reparten entre una docena de artículos. Estas son las probabilidades de que el flop *ligue* tu mano, según las cartas propias de la columna izquierda.

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

La que hay que memorizar es la primera fila: ==**ligas un set alrededor del 12% de las veces**, o más o menos 1 entre 8.5==. Ese único número decide si pagar una subida para "hacer set mining" con una pareja pequeña es rentable — necesitas que el bote (y el stack probable de tu rival) te pague más de 7.5 a 1 cuando ligues. Ese es el puente hacia las [pot odds](#pot-odds), más abajo. Para la derivación completa de cada fila de aquí — más la regla de stack del set mining y el desglose de color hecho vs proyecto vs completo — mira el análisis a fondo sobre [las odds de proyecto y de ligar cada mano en el flop](/es/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Odds de proyecto: ligar tu color o escalera para el river

Tienes un proyecto en el flop. ¿Con qué frecuencia lo completas? Todo se reduce a los **outs** — las cartas que quedan en la baraja que ligan tu mano. Cuenta tus outs y lee la fila.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Proyecto | Outs | Flop → river (2 cartas) | Turn → river (1 carta) |
|:---|:---:|:---:|:---:|
| Color + abierto de dos puntas (combo) | 15 | 54.1% | 32.6% |
| Color + gutshot | 12 | 45.0% | 26.1% |
| Proyecto de color | 9 | 35.0% | 19.6% |
| Escalera abierta (open-ended) | 8 | 31.5% | 17.4% |
| Dos sobrecartas | 6 | 24.1% | 13.0% |
| Escalera interior (gutshot) | 4 | 16.5% | 8.7% |
| Pareja → set / set → full | 2 | 8.4% | 4.3% |

</div>

El caso clásico: ligas un **proyecto de color** (nueve outs). Lo completarás ==el 35% de las veces para el river== — mejor que una de cada tres. Un **proyecto de escalera abierto** (ocho outs) liga el 31.5%. Fíjate en las dos columnas: en cuanto el turn no ayuda, tus odds con una *sola* carta se reducen más o menos a la mitad, y por eso perseguir proyectos sale más caro calle a calle.

---

## Cómo calcular las probabilidades: contar outs y la regla del 2 y 4

No puedes llevar esa tabla en la cabeza — pero no lo necesitas. La **regla del 2 y 4** te deja a un punto o dos en un segundo:

:::steps
Cuenta tus outs | Las cartas no vistas que completan tu mano (proyecto de color = 9)
En el flop (faltan 2 cartas) | Multiplica outs × 4 → tu % aproximado de ligar para el river
En el turn (falta 1 carta) | Multiplica outs × 2 → tu % aproximado de ligar en el river
:::

**Ejemplo resuelto.** Tienes cuatro cartas para un color tras el flop. Eso son ==9 outs== (13 de tu palo − 4 que ves). En el flop: 9 × 4 = **36%** — la cifra real es 35.0%, así que clavado. En el turn si fallaste: 9 × 2 = **18%** (real: 19.6%).

:::tip[La regla *sobre*-estima un poco cuando tienes más de unos 9 outs. Con un monstruo de 15 outs, el "×4" dice 60% pero el número real es 54% — bájalo unos puntos para los proyectos grandes.]:::

Ese es todo el truco. Outs → por cuatro en el flop → tu [equity](/es/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Todo lo demás es saber qué hacer con ese número. La única destreza que esta regla da por sentada es el propio conteo — para proyectos combinados, outs solapados y las "outs sucias" que no deberían contar, mira la guía completa de [cómo contar outs en el póker](/es/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot odds: convertir tus odds en un call o un fold

![Infografía de pot odds — un bote de $100 y un call de $25, así que 25 ÷ 125 significa que necesitas 20% de equity](/images/holdem-probability-pot-odds.webp "Un call de $25 a un bote de $100: 25 ÷ 125 = 20% de equity necesaria para empatar")

Saber que ligarás el 35% de las veces no sirve de nada hasta que lo comparas con el **precio**. Las pot odds son simplemente: *¿qué fracción del bote final estoy pagando por igualar?* Si tu probabilidad de ganar es mayor que esa fracción, pagas.

**Ejemplo resuelto.** El bote es $100. Tu rival apuesta $50, dejándolo en $150. Debes igualar $50 para ganar esos $150.

:::steps
Bote tras la apuesta | $100 + $50 = $150
Tu call | $50 para ganar $150 (bote final $200)
Pot odds | 50 ÷ 200 = 25% — necesitas al menos 25% de equity
Tu equity | Proyecto de color ≈ 35% (regla del 4)
Decisión | 35% > 25% → un ==g:call== claramente rentable
:::

Ese es el momento en que todos los números dan sus frutos: tus **odds de proyecto (35%)** superan tus **pot odds (25%)**, así que pagar gana dinero a largo plazo aunque pierdas la mano más veces que no. Cuando el proyecto es mayor que el precio, pagas; cuando es menor, foldeas — sin corazonadas. Para el método completo, la chuleta de tamaños de apuesta y cómo las odds implícitas cambian el call, mira [cómo calcular las pot odds](/es/blog/holdem-pot-odds) y las [odds implícitas](/es/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp").

---

## Odds de escalera real y de color (y por qué son tan raras)

![Infografía de una escalera real de corazones — A♥ K♥ en mano completando A-K-Q-J-10 de corazones sobre una mesa 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Una escalera real de corazones: la mano más rara del póker, alrededor de 1 entre 30,940 para el river")

Las dos manos más raras son de las que los jugadores presumen durante años — con razón.

- **Escalera real:** como mano servida de cinco cartas, ==1 entre 649,740==. Jugando Hold'em hasta el river, mejora a alrededor de 1 entre 30,940 porque eliges tus mejores cinco de siete cartas. En cualquier caso, la mayoría de los jugadores pasan *años* entre una y otra.
- **Escalera de color:** alrededor de 1 entre 72,193 como mano de cinco cartas. Aun así, para casi todos, un avistamiento de una vez al año.

¿Por qué tan raras? Una escalera real es exactamente **una secuencia concreta de cartas en un palo concreto** — cuatro formas de hacerla en toda la baraja frente a 1,302,540 formas de hacer una simple carta alta. La rareza es toda la razón por la que se sienta en lo más alto de la jerarquía.

:::note
Un mito común: "una escalera real gana a todo, así que puede *empatar*". Dos escaleras reales solo son posibles en palos distintos — y como los palos nunca rompen empates, eso es un bote dividido. En la práctica casi nunca pasa fuera de casualidades de mesa compartida.
:::

---

## Odds de tiro largo: coolers, pókers y bad beats

Algunos números existen sobre todo para explicar la peor noche de tu vida como jugador.

| Tiro largo | Odds |
|:---|:---:|
| Recibir pareja de ases | 1 en 221 |
| Ligar póker con una pareja servida | 1 en 407 |
| Ligar escalera de color en el flop (conectores del mismo palo) | ~1 en 4,900 |
| Ligar una escalera real para el river | 1 en 30,940 |

**Set sobre set** — ligas un set y pierdes contra un set mayor — es el cooler definitivo. No hay un número limpio único porque depende de cuántos jugadores tengan parejas, pero el ancla es esta: *tú* ligas un set solo el 11.8% de las veces, y que un rival haga lo mismo en la misma mesa es lo bastante raro como para que casi todos recuerden cada uno. Cuando pasa, es varianza, no un error — la matemática estuvo de tu lado todo el rato. Si quieres ver exactamente cómo se resuelven esos showdowns, las [reglas de kicker y desempate](/es/blog/holdem-tiebreak-rules) cubren cada caso límite.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-hand-rankings | Jerarquía de manos de póker, de la mejor a la peor | /images/holdem-hand-rankings-hero.webp
/es/blog/holdem-reading-the-board | Cómo leer la mesa en Hold'em | /images/holdem-reading-the-board-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cuál es la probabilidad de ligar una escalera real en Texas Hold'em?**

A. Alrededor de 1 entre 30,940 para el river cuando juegas una mano de Hold'em hasta el final (usando tus mejores cinco de siete cartas). Como mano servida de cinco cartas es 1 entre 649,740. En cualquier caso, la mayoría de los jugadores pasan años sin ligar una.

**Q. ¿Cuál es la probabilidad de una escalera de color?**

A. Más o menos 1 entre 72,193 como mano de cinco cartas, o alrededor de 1 entre 3,590 para el river en Hold'em. Es la segunda mano más rara, superada solo por la escalera real.

**Q. ¿Cuál es la probabilidad de ligar un color para el river?**

A. Si ligas un proyecto de color en el flop (nueve outs), lo completarás alrededor del 35% de las veces para el river — mejor que una de cada tres. Con una sola carta (turn a river), baja a aproximadamente 19.6%.

**Q. ¿Cuál es la probabilidad de ligar un set en el flop?**

A. Alrededor del 11.8%, o más o menos 1 entre 8.5, cuando tienes una pareja servida. Esa cifra de "7.5 a 1 en contra" es la base para decidir si hacer set mining con una pareja pequeña es rentable.

**Q. ¿Cuál es la probabilidad de recibir pareja de ases?**

A. 1 entre 221 (0.45%) para los ases en concreto. Cualquier pareja, en cambio, llega mucho más a menudo — alrededor de 1 entre 17 manos (5.9%).

**Q. ¿Qué es la regla del 2 y 4 en el póker?**

A. Un atajo para las odds de proyecto: multiplica tus outs por 4 en el flop (faltan dos cartas) o por 2 en el turn (falta una carta) para estimar tu porcentaje de ligar. Es precisa a un punto o dos hasta unos nueve outs.

**Q. ¿Cómo se calculan las pot odds?**

A. Divide la cantidad que debes igualar entre el bote total tras tu call. Igualar $50 a un bote de $150 da 50 ÷ 200 = 25% — así que necesitas al menos 25% de equity para pagar de forma rentable. Compáralo con tus odds de proyecto: si tu probabilidad de ligar es mayor, pagas.

**Q. ¿Cuál es la probabilidad de set sobre set?**

A. No hay un número fijo único — depende de cuántos rivales tengan parejas servidas — pero es raro. Para empezar, tú ligas un set solo el 11.8% de las veces, así que que dos jugadores liguen sets en la misma mesa es el clásico "cooler" que cuesta stacks.

---

## Los 3 números para grabar a fuego

1. **Ligar un set: ~12% (1 entre 8.5).** Decide cada call de set mining.
2. **Proyecto de color para el river: 35%.** Nueve outs, regla del 4 → 9 × 4 = 36%.
3. **Las pot odds ganan a la corazonada.** Si tu probabilidad de ligar es mayor que el precio del call, pagas — siempre.

El póker premia a los jugadores que han hecho esto automático. Aprende la tabla, ejercita la regla del 2 y 4 y empieza a preguntarte "¿qué probabilidad hay?" *antes* de actuar en lugar de después. A continuación, pon la matemática a trabajar aprendiendo qué manos iniciales jugar desde cada posición, o repasa [por qué el color gana a la escalera](/es/blog/holdem-flush-vs-straight) para que siempre sepas cuánto valen tus outs.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Jerarquía de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jerarquía de manos de póker, de la mejor a la peor</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El orden que crean estas odds — cada mano clasificada</div>
  </a>
  <a href="/es/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Duelo de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿El color gana a la escalera?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué la mano más rara siempre gana</div>
  </a>
  <a href="/es/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Lectura de mesa</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo leer la mesa en Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cuenta tus outs viendo cada proyecto</div>
  </a>
</div>
`.trim(),
};

export default POST;
