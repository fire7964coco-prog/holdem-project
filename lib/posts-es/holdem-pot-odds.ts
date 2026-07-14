import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Cómo calcular las pot odds en el póker — el método de 10 segundos",
  seoTitle: "¿Este call es rentable de verdad? — Cómo calcular pot odds",
  desc: "Deja de pagar por esperanza. Calcula las pot odds en diez segundos: el atajo de ratio a porcentaje, una chuleta por tamaño de apuesta y las odds implícitas.",
  tldr: "Para calcular las pot odds, divide lo que tienes que igualar entre el bote total después de tu call. Igualar $50 en un bote de $150 = 50 ÷ 200 = 25% — necesitas al menos un 25% de equity para que el call sea rentable.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-13",
  masterUpdated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "La mano de un jugador empujando fichas hacia el bote central sobre el tapete verde — el momento en que se toma una decisión de pot odds",
  tags: ["pot odds", "pot odds poker", "calcular pot odds", "probabilidades del bote", "odds implicitas", "pot odds vs equity", "regla del 2 y 4", "equity necesaria para igualar"],
  content: `
La palabra más cara del póker es "esperanza". Me pasé mi primer año pagando apuestas en el river porque mi proyecto de color *podía* llegar, y así fue como sangré fichas. La noche en que por fin lo vi claro fue un call de $50 en un bote de $150 — por una vez hice la cuenta, me di cuenta de que solo necesitaba un 25% para no perder, y nunca volví a mirar un call de la misma forma.

==Las pot odds son la única pieza de matemática que separa pagar por una corazonada de pagar por una razón.== Se aprenden en cinco minutos y en unas cuantas sesiones se vuelven automáticas. Esta guía te da el ==g:método de 10 segundos==, una chuleta por tamaño de apuesta que puedes visualizar en la mesa, y lo que casi todos entienden mal: cómo encajan de verdad las pot odds, la equity y las odds implícitas.

Los números que hay detrás de tus proyectos vienen de la [tabla de odds y probabilidades del póker](/es/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") — esta guía es cómo conviertes esos números en un call o un fold correcto.

---

### Pot odds de un vistazo

:::stripe
25% | Equity necesaria frente a una apuesta de medio bote
33% | Equity necesaria frente a una apuesta del tamaño del bote
call ÷ (bote + call) | Toda la fórmula
:::

---

## ¿Qué son las pot odds en el póker?

**Las pot odds son el precio que te ofrecen por seguir jugando.** Comparan el tamaño del bote con el tamaño de la apuesta que tienes que igualar — la recompensa frente al riesgo.

Digamos que el bote es de $150 y tienes que igualar $50. Te ofrecen ==$150 por ganar arriesgando $50== — estás "recibiendo 3 a 1". Cuanto más grande es el bote respecto al call, mejor es tu precio, y menos a menudo necesitas ganar para que valga la pena pagar.

Ese número de "cuántas veces necesitas ganar" es lo que importa. Recibir 3 a 1 significa que el call se paga solo si ganas al menos el **25% de las veces**. Las pot odds convierten un difuso "¿debería pagar?" en un objetivo claro: *¿gano lo suficientemente a menudo como para superar este precio?*

---

## Cómo calcular las pot odds (paso a paso)

Olvídate de los ratios por un momento — la forma más rápida y útil es un **porcentaje**, porque lo comparas directamente con tu probabilidad de ganar.

:::steps
Suma el bote final | Bote actual + la apuesta + tu call. Ejemplo: bote de $100 + apuesta de $50 + tu call de $50 = $200
Divide tu call entre ese bote final | $50 ÷ $200 = 0.25
Esa es tu equity necesaria | Necesitas ganar al menos el 25% de las veces para pagar de forma rentable
Compárala con tu equity real | Proyecto de color ≈ 35% de ligar → 35% supera al 25% → ==g:paga==
:::

Eso es todo. **Equity necesaria = tu call ÷ el bote final.** Si tu probabilidad real de ganar es mayor que ese número, pagar gana dinero a la larga — incluso cuando pierdas la mano más veces de las que la ganas.

> **La única regla que elimina toda confusión**
> Incluye siempre tu propio call en el bote final. "Recibir 3 a 1" y "necesitar el 25%" describen la *misma* situación — el ratio es el precio, el porcentaje es el objetivo. La mayoría de los errores de principiante vienen de mezclar las dos convenciones; quédate con el porcentaje y no mires atrás.

---

## Pot odds como ratio vs. porcentaje

Los jugadores de la vieja escuela hablan en ratios ("estoy recibiendo 4 a 1"); los modernos piensan en porcentajes ("necesito un 20%"). Deberías saber pasar de uno a otro al instante, porque el ratio es lo que *ves* (bote vs. apuesta) y el porcentaje es lo que *usas* (frente a tu equity).

La conversión es un solo paso: un ratio de **X a 1** significa que necesitas **1 ÷ (X + 1)** como porcentaje.

| Estás recibiendo… | Equity que necesitas |
|:---|:---:|
| 1 a 1 | 50% |
| 2 a 1 | 33% |
| 2.5 a 1 | 28.6% |
| 3 a 1 | 25% |
| 4 a 1 | 20% |
| 5 a 1 | 16.7% |
| 6 a 1 | 14.3% |

El patrón es intuitivo: cuanto más empequeñece el bote al call, menor es la porción del pastel que necesitas para justificar el call.

---

## ¿Cuánta equity necesitas para pagar?

![Cartas premium sobre el tapete verde — decidiendo si el precio es el adecuado para continuar](/images/holdem-starting-hands-premium.webp "La equity necesaria depende por completo del tamaño de la apuesta a la que te enfrentas")

Aquí tienes el atajo que vive en tu cabeza en la mesa. Tu equity necesaria depende **solo del tamaño de la apuesta respecto al bote** — así que memoriza estos siete anclajes y nunca necesitarás una calculadora.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| El rival apuesta | Estás recibiendo | Equity que necesitas |
|:---|:---:|:---:|
| ¼ del bote | 5 a 1 | 16.7% |
| ⅓ del bote | 4 a 1 | 20% |
| ½ del bote | 3 a 1 | 25% |
| ⅔ del bote | 2.5 a 1 | 28.6% |
| ¾ del bote | 2.3 a 1 | 30% |
| El tamaño del bote | 2 a 1 | 33% |
| 2× el bote | 1.5 a 1 | 40% |

</div>

Fíjate en el techo: incluso un enorme **overbet de 2× el bote solo pide un 40% de equity**. Casi nunca necesitas ser favorito para pagar de forma rentable — un error de lectura común que hace que la gente tire calls correctos. Cuanto mayor es la apuesta, más equity necesitas, pero sube más despacio de lo que la mayoría cree.

---

## Chuleta de pot odds: qué proyectos superan a qué apuestas

Ahora conecta el precio con tu mano. [Cuenta tus **outs**](/es/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") (cartas que completan tu mano), conviértelos en equity y compáralo con la apuesta. Estos son los proyectos con los que más te encontrarás:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tu proyecto | Outs | Equity, 1 carta | Equity, 2 cartas |
|:---|:---:|:---:|:---:|
| Color + escalera abierta | 15 | 32.6% | 54.1% |
| Proyecto de color | 9 | 19.6% | 35.0% |
| Escalera abierta (dos puntas) | 8 | 17.4% | 31.5% |
| Dos sobrecartas | 6 | 13.0% | 24.1% |
| Escalera interior (gutshot) | 4 | 8.7% | 16.5% |

</div>

Léelo frente a la tabla de tamaños de apuesta de arriba. Frente a una ==apuesta de medio bote (necesitas 25%)==: con dos cartas por venir, un proyecto de color (35%) es un call claro — pero con una *sola* carta, ese mismo proyecto es solo el 19.6%, que **no** cumple el precio por sí solo. Ese hueco es exactamente donde entran las odds implícitas.

---

## Pot odds vs. equity vs. odds implícitas

Estas tres se mezclan constantemente, y la confusión cuesta dinero. Aquí tienes la separación limpia:

:::compare
Término | Qué significa
Pot odds | El precio: call ÷ bote final = la equity que *necesitas*
Equity | Tu probabilidad real de ganar la mano ahora mismo
Odds implícitas | Las fichas *extra* que esperas ganar en calles posteriores si ligas
:::

**Pot odds vs. [equity](/es/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")** es la decisión central: paga cuando tu equity supera a tus pot odds. Las [**odds implícitas**](/es/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") son el desempate para los proyectos que se quedan justo por debajo del precio. Si tu proyecto de color necesita un 25% pero solo tiene un 19.6% en la carta del river, aún puedes pagar *si* vas a sacar suficientes apuestas extra al ligar como para cubrir la diferencia. Por eso puedes pagar de forma rentable una apuesta en el flop con un proyecto, y por eso los stacks profundos hacen que los proyectos valgan más.

La otra cara son las **reverse implied odds** — las fichas que *perderás* cuando ligues pero aun así pierdas la mano (completas tu color, pero la mesa se empareja y alguien tiene full). Los proyectos que quedan en segundo lugar sangran dinero en silencio, y por eso el [proyecto al color nut vale mucho más que uno a un color pequeño](/es/blog/holdem-starting-hands-chart).

---

## La regla del 2 y 4: convertir outs en odds rápido

No puedes pararte a calcular la equity exacta en mitad de una mano, así que usa la **regla del 2 y 4**:

- **En el flop, con dos cartas todavía por venir:** multiplica tus outs por **4**.
- **En el turn, con una carta por venir:** multiplica tus outs por **2**.

Un proyecto de color son 9 outs. En el flop: 9 × 4 = **36%** (valor real 35.0% — clavado). En el turn: 9 × 2 = **18%** (valor real 19.6% — lo bastante cerca para decidir).

:::tip[La versión ×4 asume en silencio que verás *ambas* cartas restantes sin más apuestas — algo que solo está garantizado cuando ya estás all-in. Si queda ronda de apuestas, apóyate en el número ×2 (una carta) para la calle que tienes delante, y deja que las odds implícitas justifiquen el resto.]:::

Las derivaciones completas de cada proyecto y mano hecha están en la [tabla de probabilidades](/es/blog/holdem-probability). Aquí, el atajo es todo lo que necesitas.

---

## Errores comunes con las pot odds que cometen los principiantes

Cometí todos y cada uno de estos antes de que me dejaran sin fichas. Estate atento:

:::card
🧮 | Olvidar incluir el call | La equity necesaria es call ÷ bote *final* — cuenta tus propias fichas al entrar, o sobrevalorarás todos los precios
🃏 | Contar outs contaminados | Un out de color que también empareja la mesa puede darle a alguien un full. Descuenta los outs "sucios" antes de fiarte del número
🚀 | Usar mal la regla del 4 | El ×4 solo aplica cuando verás ambas cartas gratis (all-in). Frente a una apuesta en el turn es ×2 — usar ×4 te convence de pagar calls perdedores
💸 | Ignorar las odds implícitas y las reverse implied | Los stacks profundos premian los proyectos; un proyecto que no es al nut y liga contra una mano mayor es una trampa, no un premio
🎯 | Pagar por esperanza | "Podría llegar" no es una razón. Si tu equity no supera tus pot odds (más las odds implícitas), es un fold

:::

### Una mano real, de principio a fin

Tengo ==b:A♥ K♥== en un flop ==Q♥ 7♥ 2♣== — el proyecto al color nut, 9 outs. El bote es de $100, el villano apuesta $50. Mis pot odds: estoy recibiendo 3 a 1, así que necesito un **25%**. Con dos cartas por venir estoy en ~35%, e incluso contando solo la carta siguiente (19.6%) mis odds implícitas son enormes — si cae un corazón le saco todo el stack a una mano de top pair. ==g:Call fácil.==

El turn es el 3♠ — un ladrillo. El bote es de $200 y el villano empuja $200 — una apuesta del tamaño del bote, así que ahora solo estoy recibiendo 2 a 1 y necesito un **33%**. Pero con **una sola carta por venir mi color es solo el 19.6%**. El precio directo dice fold; mis odds implícitas ahora son cero porque el villano está all-in y no puede pagarme nada más. ==r:Fold correcto== — y el momento exacto en el que la "esperanza" solía costarme un stack.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-probability | Tabla de odds y probabilidades del póker | /images/holdem-probability-hero.webp
/es/blog/holdem-starting-hands-chart | Qué manos iniciales jugar de verdad | /images/holdem-starting-hands-chart-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cómo se calculan rápido las pot odds?**

A. Divide lo que tienes que igualar entre el bote total *después* de tu call. Igualar $50 en un bote de $150 es 50 ÷ 200 = 25% — esa es la equity que necesitas. Si tu probabilidad de ganar la supera, paga.

**Q. ¿Se cuenta tu propio call en las pot odds?**

A. Sí. La fórmula de equity necesaria usa el bote *final*, que incluye tu propio call. Igualar $50 en un bote de $150 da un bote final de $200, así que 50 ÷ 200 = 25%. Dejar fuera tu call es el error de principiante más común.

**Q. ¿Qué es un buen ratio de pot odds?**

A. Cuanto más alto, mejor — te encantaría estar "recibiendo 5 a 1" (necesitando solo un 16.7%). Pero lo "bueno" es relativo a tu mano: recibir 2 a 1 (necesitar un 33%) es genial con un proyecto de color y terrible con un gutshot. Compara siempre el precio con tu equity.

**Q. ¿Cómo se convierten las pot odds de ratio a porcentaje?**

A. Un ratio de X a 1 se vuelve 1 ÷ (X + 1) como porcentaje. Así que 3 a 1 = 1 ÷ 4 = 25%; 4 a 1 = 1 ÷ 5 = 20%. El porcentaje es lo que comparas con tu probabilidad de ganar.

**Q. ¿Cuál es la diferencia entre pot odds y odds implícitas?**

A. Las pot odds solo cuentan las fichas que hay en el bote ahora mismo. Las odds implícitas añaden las fichas *extra* que esperas ganar en calles posteriores si completas tu mano. Las odds implícitas te permiten pagar de forma rentable algunos proyectos que las pot odds por sí solas dirían de tirar — siempre que los stacks sean lo bastante profundos para pagarte.

**Q. ¿Qué pot odds da una apuesta del tamaño del bote?**

A. Una apuesta del tamaño del bote te da 2 a 1, así que necesitas un 33% de equity para pagar. Una apuesta de medio bote da 3 a 1 (25% necesario); un overbet de 2× el bote da 1.5 a 1 (40% necesario). Las apuestas mayores exigen más equity, pero incluso un overbet enorme solo pide un 40%.

**Q. ¿Qué es la regla del 2 y 4?**

A. Un atajo para convertir outs en equity: multiplica los outs por 4 en el flop (dos cartas por venir) o por 2 en el turn (una carta por venir). Nueve outs de color ≈ 36% en el flop, 18% en el turn. Usa el ×4 solo cuando vayas a ver ambas cartas sin más apuestas.

**Q. ¿Cuánta equity necesito para pagar una apuesta?**

A. Exactamente tus pot odds en porcentaje: call ÷ bote final. Frente a una apuesta de medio bote necesitas un 25%; frente a una del tamaño del bote, un 33%. Cuenta tus outs, conviértelos con la regla del 2 y 4, y paga cuando tu equity supere el listón.

---

## Las 3 cosas que debes recordar

1. **La fórmula:** equity necesaria = tu call ÷ el bote final (con tu call incluido). Medio bote = 25%, tamaño del bote = 33%.
2. **La comparación:** paga cuando tu equity (outs × 4 o × 2) supere a tus pot odds. Esa es toda la decisión.
3. **El desempate:** las odds implícitas rescatan proyectos que se quedan justo por debajo del precio — pero solo cuando los stacks son profundos y tu proyecto es al nut.

Hazlo unos cientos de veces y dejará de ser matemática para volverse instinto. Tirarás los calls sin remedio, harás los rentables y dejarás de pagar el impuesto de la "esperanza". Desde aquí, afina los números en bruto detrás de cada proyecto en la [tabla de odds y probabilidades del póker](/es/blog/holdem-probability), o asegúrate de entrar en los botes con manos que merezca la pena proyectar usando la [tabla de manos iniciales por posición](/es/blog/holdem-starting-hands-chart).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de odds y probabilidades del póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cada mano, flop y proyecto — los números detrás del precio</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Manos iniciales</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales por posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Entra en los botes con manos que merezca la pena proyectar</div>
  </a>
  <a href="/es/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Lectura de mesa</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo leer la mesa en Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cuenta tus outs detectando cada proyecto</div>
  </a>
  <a href="/es/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Cash vs Torneo</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneo vs cash game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué las odds implícitas van más profundas en el cash</div>
  </a>
</div>
`.trim(),
};

export default POST;
