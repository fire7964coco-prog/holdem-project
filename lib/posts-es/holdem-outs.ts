import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Cómo contar outs en el póker — la habilidad detrás de cada call con odds",
  seoTitle: "¿Cuántas cartas te salvan de verdad? — Contar outs en póker",
  desc: "Contar outs es la habilidad que nadie te enseña primero. Aprende a contar outs rápido: tabla de outs por proyecto, outs a odds y la regla del 2 y 4 de memoria.",
  tldr: "Un out es cualquier carta que queda en la baraja y convierte tu mano en una probable ganadora. Cuéntalos y conviértelos: multiplica los outs por 4 en el flop o por 2 en el turn para tu % aproximado de ligar. Un proyecto de color son 9 outs ≈ 36% para el river.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-13",
  masterUpdated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infografía de conteo de outs — A♥ K♥ contra un flop Q♠ J♦ 9♥ donde cualquier diez completa la escalera máxima",
  tags: ["outs poker", "outs poker que son", "como contar outs", "tabla de outs poker", "outs proyecto de color", "outs proyecto de escalera", "regla del 2 y 4", "outs muertas"],
  content: `
Durante mi primer año en las mesas "jugaba mis proyectos" sin contarlos nunca. Un proyecto de color y un gutshot me parecían más o menos lo mismo — ambos eran "cartas que podían salir" — así que igualaba lo mismo en los dos y me preguntaba por qué seguía perdiendo. El arreglo no fue un curso de estrategia. Fue un hábito de cinco minutos: ==para y cuenta de verdad las cartas que me salvan.==

Ese hábito se llama contar **outs** — [la respuesta real del póker a "contar cartas"](/es/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — y es la única habilidad que está debajo de cada decisión de odds en el póker. Antes de poder preguntarte "¿es rentable este call?" tienes que responder "¿cuántas cartas ganan la mano para mí?". Esta guía es la mitad del conteo — la [tabla de odds y probabilidades del póker](/es/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") es la referencia que hay detrás, y las [pot odds](/es/blog/holdem-pot-odds) son lo que haces con el número una vez lo tienes.

---

### Los outs de un vistazo

:::stripe
9 | Outs en un proyecto de color
8 | Outs en un proyecto de escalera abierto
×4 / ×2 | Multiplica los outs en el flop / turn para tu %
:::

---

## ¿Qué son los outs en el póker?

**Un out es cualquier carta que sigue en la baraja y convierte tu mano en una probable ganadora.** Si tienes un proyecto de color, cada carta restante de tu palo es un out — liga una y tienes color.

La palabra "probable" ahí no está de adorno. Un out de verdad tiene que *ganar* la mano, no solo mejorar tus cartas. Emparejar tu diez cuando ya hay un color en la mesa no es un out — mejoraste, pero sigues perdiendo. Aprender a contar outs es en realidad aprender a contar las cartas que ganan, e ignorar las que solo *parecen* útiles.

Todo lo que viene después — tu equity, tus [pot odds](/es/blog/holdem-pot-odds), tu call-or-fold — parte de este único número. Cuenta mal los outs y todo cálculo posterior también estará mal. Y una vez que sabes el número, las [odds de proyecto](/es/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") te dicen exactamente con qué frecuencia liga cada proyecto.

---

## Cómo contar tus outs (paso a paso)

![Un jugador tiene el as y el rey de picas y estudia un flop bajo de tres cartas sobre el tapete verde, contando outs de sobrecarta antes de actuar](/images/holdem-outs-counting.webp "A-K en un flop bajo es una situación de conteo de manual — seis outs de sobrecarta, más los backdoors")

Contar outs es una rutina de tres pasos que aplicas en cada proyecto hasta que sale sola:

:::steps
Nombra tu proyecto | ¿Qué mano persigues? Color, escalera, una pareja mayor, un trío — sé específico con el objetivo
Cuenta las cartas que lo completan | Hay 13 de cada palo y 4 de cada valor. Resta las que ya puedes ver (tus cartas + la mesa)
Descarta las falsas | Tacha cualquier "out" que complete tu mano pero aun así pierda — una carta de color que empareja la mesa, una escalera que le da a alguien otra más alta
:::

Toma un proyecto de color: existen 13 cartas de tu palo, puedes ver **cuatro** de ellas (dos en tu mano, dos en la mesa), así que ==g:13 − 4 = 9 outs==. Esa resta — contar las que *no* puedes ligar porque ya las tienes — es donde resbalan los principiantes.

El conteo solo usa cartas que puedes ver. No restas las cartas desconocidas de tu rival; tratas cada carta no vista como todavía viva. Por eso los conteos de outs estándar de abajo se sostienen sin importar lo que tenga el otro.

---

## Tabla de outs del póker: todos los proyectos comunes

![Una escalera con ocho alto tendida en secuencia sobre el tapete verde, mostrando la tirada de cartas que persigue un proyecto abierto](/images/holdem-reading-straight-example.webp "Un proyecto de escalera abierto se completa por cualquiera de los dos extremos — ocho outs, el segundo proyecto más común")

Memoriza esto y reconocerás tu número de outs a simple vista. Esta es la tabla que todo jugador ganador tiene grabada en la memoria:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tu proyecto | Outs | Por qué |
|:---|:---:|:---|
| Color + escalera abierta | 15 | El monstruo — dos proyectos a la vez |
| Proyecto de color | 9 | 13 de un palo − 4 que ves |
| Proyecto de escalera abierto | 8 | Cuatro cartas en cada extremo |
| Color + gutshot | 12 | 9 de color + 4 de gutshot − 1 carta compartida |
| Dos sobrecartas | 6 | Tres de cada valor para emparejar |
| Una pareja → doble pareja o trío | 5 | 3 para emparejar tu kicker + 2 para ligar el trío |
| Gutshot (escalera interior) | 4 | Solo un valor rellena el hueco |
| Una sobrecarta | 3 | Tres cartas para hacer pareja máxima |
| Pareja servida → trío | 2 | Las dos últimas de tu valor |

</div>

Los dos proyectos combinados de arriba son donde los jugadores se equivocan con la aritmética, así que tienen su propia sección más abajo. Todo lo demás es resta directa: cuenta los valores o palos que terminan tu mano y quita lo que ya ves.

---

## De outs a odds: la tabla de conversión

Contar outs solo sirve cuando lo conviertes en un porcentaje que puedas comparar con el precio que te ofrecen. Aquí tienes la tabla maestra — las odds de ligar para el river, más las odds a una carta para cuando ya estás en el turn:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Solo turn (1 carta) | Para el river (2 cartas) | Odds al river |
|:---|:---:|:---:|:---:|
| 2 | 4.3% | 8.4% | 11 a 1 |
| 4 | 8.5% | 16.5% | 5 a 1 |
| 6 | 12.8% | 24.1% | 3.1 a 1 |
| 8 | 17.0% | 31.5% | 2.2 a 1 |
| 9 | 19.1% | 35.0% | 1.9 a 1 |
| 12 | 25.5% | 45.0% | 1.2 a 1 |
| 15 | 31.9% | 54.1% | 0.85 a 1 |

</div>

Dos números importan en cada proyecto. **"Para el river"** cuenta ambas cartas restantes y aplica cuando estás all-in en el flop sin nada más que apostar. **"Solo turn"** cuenta solo la siguiente carta — úsalo en cuanto quede más apuesta por venir, porque solo tienes garantizado ver una carta cada vez. Los principiantes citan el número gordo de "para el river" mientras afrontan una apuesta en el turn, se convencen de igualar, y lo pagan.

Fíjate en el monstruo de 15 outs: con dos cartas por venir es en realidad **favorito** (54.1%), el raro proyecto con el que puedes irte all-in feliz en el flop.

---

## La regla del 2 y 4: outs → odds en la cabeza

No puedes llevar esa tabla a la mesa, así que usa el atajo en el que confía todo jugador:

- **En el flop (dos cartas por venir):** outs ×4 ≈ tu % de ligar para el river.
- **En el turn (una carta por venir):** outs ×2 ≈ tu % de ligar en el river.

Un proyecto de color son 9 outs. En el flop: 9 × 4 = **36%** (valor real 35.0% — clavado). En el turn: 9 × 2 = **18%** (real 19.1% — bastante cerca para actuar).

:::tip[El atajo ×4 asume en silencio que verás *ambas* cartas sin más apuestas — solo cierto cuando ya estás all-in. Si hay una apuesta delante de ti, usa el número ×2 (una carta) para la calle en la que realmente estás.]:::

Hay un sitio donde la regla miente: **conteos altos de outs en el flop.** Como el ×4 cuenta dos veces la pequeña probabilidad de ligar en *ambas* calles, se pasa una vez superas los ~8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | La regla dice (×4) | Real para el river | Desviación |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31.5% | +0.5% |
| 9 | 36% | 35.0% | +1% |
| 12 | 48% | 45.0% | +3% |
| 15 | 60% | 54.1% | +6% |

</div>

El ajuste limpio para proyectos grandes: para **más de 8 outs en el flop**, multiplica por 4 y luego resta *(outs − 8)*. Para 15 outs: (15 × 4) − 7 = **53%**, casi exacto. Para proyectos del día a día de 8 outs o menos, el ×4 y el ×2 a secas es todo lo que necesitas. Las derivaciones completas están en la [tabla de probabilidades](/es/blog/holdem-probability).

---

## Proyectos combinados: por qué 9 + 8 no es 17

Los proyectos grandes hacen tropezar a la gente porque no puedes sumar sin más los dos conteos — algunas cartas hacen doble función, y contarlas dos veces infla tu equity.

Digamos que tienes ==b:J♠ 10♠== en un flop ==9♠ 8♣ 2♠==. Tienes dos proyectos apilados: un proyecto de color (picas) y un proyecto de escalera abierto (cualquier Q o 7 hace la escalera). Súmalos ingenuamente y sale 9 + 8 = 17. Pero la **Q♠ y la 7♠** completan cada una *tanto* el color como la escalera — ya están dentro de los 9 outs de color. Cuéntalas una sola vez:

- Outs de color: **9** (todas las picas)
- Outs de escalera que no son picas: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Total: **15 outs**, no 17

La misma lógica en un **color + gutshot**: 9 outs de color + 4 cartas de gutshot, pero una de esas cuatro es de tu palo → 9 + 3 = **12**. Siempre que dos proyectos comparten una carta, resta el solapamiento. Esta es la forma más común de sobrecontar, y por eso las filas de combinados en la tabla parecen "una menos" que la suma.

---

## Outs muertas: las cartas que solo parecen victorias

![Infografía de una mesa emparejada 10♠ 8♥ 4♠ 4♣ 6♦ separando las outs limpias de las outs muertas](/images/holdem-outs-dirty-outs.webp "En una mesa emparejada algunas de tus outs están muertas — ligar el color puede pagar igualmente un full")

Esta es la sección que la mayoría de las guías se salta, y es la que de verdad ahorra dinero. Una **out muerta** (u out "sucia") es una carta que completa tu mano pero aun así puede perder — así que contarla a valor pleno sobreestima tu equity. Los jugadores ganadores cuentan los outs brutos y luego *descuentan* los sucios antes de echar mano de la regla del 2 y 4.

Tres situaciones para entrenar el ojo:

:::card
♠ | El color que no es máximo | Con 8♠7♠ en K♠9♠2♣, tienes 9 "outs" de picas — pero si sale una pica y un rival tiene una pica mayor, haces color y aun así pierdes. Descuenta tus outs cuando no vas al color máximo
🂮 | La mesa emparejada | Un proyecto de color en una mesa como J♥8♥8♣ parece 9 outs limpios, pero la mesa ya está emparejada — un full ya hecho puede estar esperando, así que algunos de tus colores nacen muertos
🃁 | Sobrecartas contra fuerza | Dos sobrecartas (A-K en Q-8-3) cuentan como 6 outs sobre el papel, pero si un raise grande grita trío o doble pareja, emparejar tu as a menudo no vale — cuenta 3, quizá 4, no 6
:::

Rara vez sabes el descuento exacto, y no pasa nada. La jugada es direccional: cuando la mesa o la acción te dicen que un out podría no ganar, recorta el número *hacia abajo* antes de convertir. Un jugador que cuenta 9 outs en una mesa emparejada e iguala el bote está pagando precio completo por un proyecto que en silencio vale seis. Leer qué outs están limpios es una habilidad de textura de mesa — desarróllala con [cómo leer la mesa](/es/blog/holdem-reading-the-board).

---

:::readnext[Sigue leyendo]
/es/blog/holdem-pot-odds | Cómo calcular las pot odds | /images/holdem-pot-odds-hero.webp
/es/blog/holdem-probability | Tabla de odds y probabilidades del póker | /images/holdem-probability-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué son los outs en el póker?**

A. Los outs son las cartas que quedan en la baraja y mejoran tu mano hasta una probable ganadora. Un proyecto de color tiene 9 outs (las 9 cartas no vistas de tu palo); un proyecto de escalera abierto tiene 8. Los cuentas para calcular tu probabilidad de ligar y si un call es rentable.

**Q. ¿Cómo se cuentan los outs en el póker?**

A. Nombra la mano que persigues, cuenta cuántas cartas la completan (13 de cada palo, 4 de cada valor), resta las que ya puedes ver en tu mano y en la mesa, y luego tacha cualquier out "muerto" que aun así perdería. Un proyecto de color es 13 − 4 = 9.

**Q. ¿Cuántos outs tiene un proyecto de color?**

A. Nueve. Hay 13 cartas de cada palo; con dos en tu mano y dos en la mesa ves cuatro, dejando 9 cartas no vistas que completan tu color. Eso es más o menos un 35% de ligar para el river desde el flop.

**Q. ¿Cuántos outs tiene un proyecto de escalera abierto?**

A. Ocho — cuatro cartas en cada extremo completan la escalera. Un gutshot (escalera interior) tiene solo 4 outs porque un único valor rellena el hueco. Un doble gutshot también tiene 8, igual que el abierto.

**Q. ¿Qué es la regla del 2 y 4?**

A. Un atajo para convertir outs en porcentaje: en el flop multiplica los outs por 4 para tu probabilidad de ligar para el river; en el turn multiplica por 2 para la carta del river. Nueve outs de color ≈ 36% en el flop, 18% en el turn. Usa el ×4 solo cuando vayas a ver ambas cartas sin más apuestas.

**Q. ¿Qué son las outs muertas o sucias?**

A. Cartas que completan tu mano pero aun así pueden perder — una carta de color cuando un color mayor es posible, una carta de escalera que también le da a alguien una escalera más alta, o sobrecartas contra un trío probable. Descuenta (o no cuentes) las outs muertas antes de convertir a odds, o sobrevalorarás tu equity.

**Q. ¿Cuántos outs es un proyecto de color más un proyecto de escalera?**

A. 15, no 17. Un proyecto de color son 9 outs y una escalera abierta son 8, pero dos de las cartas de escalera son también de tu palo y ya están contadas en el color — así que restas el solapamiento. Quince outs es favorito para ligar para el river (alrededor del 54%).

**Q. ¿Se cuentan las cartas del rival al contar outs?**

A. No. Solo restas las cartas que puedes ver de verdad — tus cartas y la mesa comunitaria. Cualquier otra carta no vista se trata como viva, y por eso los conteos de outs estándar (9 de color, 8 de una escalera abierta) se sostienen sin importar lo que tenga el rival.

---

## Las 3 cosas que debes recordar

1. **Cuenta lo que gana, no lo que mejora.** Un out tiene que hacer la *mejor* mano, no solo una mejor. Resta solo las cartas que puedes ver.
2. **Convierte con el 4 y el 2.** Outs × 4 en el flop, × 2 en el turn. Recorta la estimación en proyectos grandes (más de 8 outs) restando *(outs − 8)*.
3. **Descuenta las muertas.** Los colores que no son máximos, las mesas emparejadas y las sobrecartas contra fuerza reducen tu número real de outs. En la duda, cuenta menos.

Clava el conteo y el resto de la matemática del póker encaja sola. Lleva tu número de outs directo a [cómo calcular las pot odds](/es/blog/holdem-pot-odds) para ver si el precio es justo, o vuelve a la [tabla completa de odds y probabilidades del póker](/es/blog/holdem-probability) para el número exacto detrás de cada proyecto.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Convierte tu número de outs en un call-or-fold</div>
  </a>
  <a href="/es/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de odds y probabilidades del póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">La referencia completa detrás de cada proyecto</div>
  </a>
  <a href="/es/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Lectura de mesa</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo leer la mesa</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Detecta cada proyecto para contar outs limpios</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Manos iniciales</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales por posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Entra a los botes con manos que merezcan proyectarse</div>
  </a>
</div>
`.trim(),
};

export default POST;
