import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Jerarquía de manos de póker en Texas Hold'em — de la mejor a la peor, con probabilidades",
  seoTitle: "¿Creías que ganabas y perdiste? — Manos de póker y desempates",
  desc: "¿Ligaste color y aun así perdiste el bote? Casi siempre es una sola regla que se pasa por alto. Aquí tienes las 10 manos de póker de la mejor a la peor, las probabilidades reales de cada una y cómo deciden el kicker y los empates.",
  tldr: "La jerarquía de manos de póker, de la mejor a la peor, es: Escalera Real, Escalera de Color, Póker, Full, Color, Escalera, Trío, Doble Pareja, Pareja y Carta Alta.",
  category: "초보 가이드",
  date: "2026-06-09",
  updated: "2026-06-09",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🃏",
  tags: ["manos de poker", "jerarquia de manos de poker", "manos de texas holdem", "que mano gana en poker", "kicker poker", "empate poker", "mejores manos de poker", "orden de manos poker"],
  content: `
Estás mano a mano en el river. Ligaste tu color, estás seguro de que es bueno… y entonces el dealer empuja el bote hacia el otro lado. La mesa estaba emparejada, tu rival tenía full, y nunca lo viste venir.

Casi todos los momentos de "creía que ganaba" se reducen a lo mismo: no leer la **jerarquía de manos de póker** con suficiente rapidez. El orden se aprende en cinco minutos. Lo difícil es leerlo en vivo, bajo presión, con una mesa emparejada o conectada — y eso casi nadie lo explica bien.

Esta guía resuelve las dos cosas. Tendrás el orden completo con las probabilidades reales, todas las reglas de desempate, tres problemas de mesa reales para practicar "encuentra tus mejores cinco cartas", y una rutina de 1 segundo para leer cualquier mesa.

---

## Jerarquía de manos de póker: el orden completo

Empieza aquí. Esta es toda la jerarquía, de la más fuerte a la más débil, con la probabilidad aproximada de ligar cada mano para el river en Texas Hold'em.

| # | Mano | También llamada | Qué es | Probabilidad (al river) |
|------|------|------|------|------|
| **1** | Escalera Real | "Royal" | A-K-Q-J-10 del mismo palo | 0.0032% |
| **2** | Escalera de Color | "Steel wheel" (A-5) | 5 en secuencia, mismo palo | 0.0279% |
| **3** | Póker | "Cuádruple" | Cuatro cartas del mismo valor | 0.168% |
| **4** | Full | "Full house" | Trío + pareja | 2.60% |
| **5** | Color | "Flush" | 5 cartas del mismo palo | 3.03% |
| **6** | Escalera | "Straight" | 5 en secuencia, palos mezclados | 4.62% |
| **7** | Trío | "Set" / "Trips" | Tres cartas del mismo valor | 4.83% |
| **8** | Doble Pareja | — | Dos parejas distintas | 23.5% |
| **9** | Pareja | — | Dos cartas del mismo valor | 43.8% |
| **10** | Carta Alta | "Sin nada" | Ninguna combinación | 17.4% |

> **La regla que gana discusiones**
> La Pareja y la Carta Alta juntas suman alrededor del 61% de todas las manos de siete cartas al river. Las manos grandes parecen comunes porque se recuerdan, pero la mayoría de los botes se deciden con una pareja y un kicker.

:::quiz:::

---

## Fuerza de las cartas: la base en 30 segundos

Antes de las manos, necesitas la fuerza de las cartas. Solo dos cosas.

### Orden de valor (de mayor a menor)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

El As es la carta más fuerte y también la única que rompe las reglas: juega alto (A-K-Q-J-10) y bajo (A-2-3-4-5, "la rueda"). No puede dar la vuelta por el medio: Q-K-A-2-3 **no** es escalera.

### Los palos no tienen valor

En el Texas Hold'em estándar, **ningún palo gana a otro**. Las picas no ganan a los corazones. El palo solo importa para *formar* un color, nunca para romper un empate. Si dos jugadores tienen las mismas cinco cartas en palos distintos, el bote se divide — siempre.

---

## Las 10 manos de póker explicadas

### #1 — Escalera Real

:::hand[A♠,K♠,Q♠,J♠,10♠] Escalera Real — A-K-Q-J-10 de picas:::

**A♠ K♠ Q♠ J♠ 10♠** — la escalera de color más alta y la mejor mano del póker.

No se puede ganar ni empatar (dos escaleras reales solo pueden darse en palos distintos, lo que significa empate). Aparece más o menos una vez cada 31.000 manos, así que muchos jugadores pasan años sin ligarla. Cuando lo hagas, tu único trabajo es meter cuantas fichas puedas.

### #2 — Escalera de Color

:::hand[9♥,8♥,7♥,6♥,5♥] Escalera de Color — cinco corazones en secuencia:::

**9♥ 8♥ 7♥ 6♥ 5♥** — cinco cartas seguidas, todas del mismo palo.

Solo la supera una escalera de color más alta o una escalera real. La versión más baja, A-2-3-4-5 del mismo palo, se llama "steel wheel". Si chocan dos escaleras de color, gana la de carta más alta.

### #3 — Póker (cuádruple)

:::hand[8♣,8♦,8♥,8♠,K♥] Póker — cuatro ochos + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — las cuatro cartas de un mismo valor.

Entre dos pókers, gana el de valor más alto. Si las cuatro están *en la mesa*, decide el **kicker** más alto — y el As manda.

### #4 — Full

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full — tres reinas + dos cincos:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — un trío más una pareja.

Compara **primero el trío**: QQQ55 gana a JJJ99 porque las reinas superan a las jotas, sin importar el tamaño de la pareja. Solo si el trío empata se compara la pareja.

> **El "cooler" más común**
> Cada vez que la mesa se empareja, busca un full antes de comprometerte con un color o una escalera. "Mi color máximo perdió contra un full" es el bad beat más frecuente del Hold'em.

### #5 — Color

:::hand[A♦,J♦,8♦,6♦,2♦] Color — cinco diamantes:::

**A♦ J♦ 8♦ 6♦ 2♦** — cinco cartas del mismo palo, sin importar la secuencia.

Dos colores se comparan carta por carta desde la más alta: A-J-8-6-2 gana a A-J-8-5-2 porque el 6 supera al 5. Cuatro cartas de un palo **no** son color: necesitas cinco.

### #6 — Escalera

:::hand[7♠,6♥,5♣,4♦,3♠] Escalera — cinco seguidas, palos mezclados:::

**7♠ 6♥ 5♣ 4♦ 3♠** — cinco cartas en secuencia, palos mezclados.

- **La máxima:** A-K-Q-J-10 ("Broadway") es la escalera más alta.
- **La rueda:** A-2-3-4-5 es la más baja (el As juega bajo).
- **Prohibido:** no se puede dar la vuelta — K-A-2-3-4 no es escalera.

Entre dos escaleras gana la de carta más alta.

### #7 — Trío (set / trips)

:::hand[J♣,J♠,J♥,A♦,4♠] Trío — tres jotas + kickers:::

**J♣ J♠ J♥ A♦ 4♠** — tres cartas del mismo valor.

Hay dos formas de ligarlo, y la diferencia importa:

- **Set:** una pareja servida más una carta de la mesa (p. ej. tienes J♣ J♠ y la mesa trae J♥). Disimulado y peligroso.
- **Trips:** una pareja en la mesa más una carta tuya. Más fácil de leer para el rival y de compartir.

El set saca más fichas porque nadie lo ve venir.

### #8 — Doble Pareja

:::hand[10♠,10♥,8♣,8♦,A♠] Doble Pareja — dieces y ochos + kicker As:::

**10♠ 10♥ 8♣ 8♦ A♠** — dos parejas distintas.

Se compara en este orden: **pareja alta → pareja baja → kicker**. KK99-A gana a QQJJ-A porque los reyes superan a las reinas antes de mirar nada más.

### #9 — Pareja

:::hand[K♠,K♦,9♥,6♣,2♠] Pareja — reyes + tres kickers:::

**K♠ K♦ 9♥ 6♣ 2♠** — dos cartas del mismo valor.

La mano hecha más común del Hold'em. Dos parejas iguales se deciden por kickers: **valor de la pareja → kicker 1 → kicker 2 → kicker 3**, de mayor a menor. Aquí ocurren la mayoría de las derrotas con "la misma mano": cuida tu kicker.

### #10 — Carta Alta

:::hand[A♣,Q♠,9♥,5♦,3♣] Carta Alta — sin combinación:::

**A♣ Q♠ 9♥ 5♦ 3♣** — nada conecta.

En el showdown gana la carta más alta, luego la siguiente, y así con las cinco. Si las cinco coinciden, se divide. Es lo que te queda cuando un farol es pagado y no liga.

---

## Cómo funcionan de verdad los kickers y los empates

Esta es la parte que decide botes reales — y la que muchas tablas se saltan. Cuando dos jugadores tienen el **mismo tipo de mano**, sigue este orden exacto:

1. **Compara el tipo de mano.** Un color siempre gana a una escalera, un full siempre gana a un color, etc.
2. **Compara las cartas que forman la mano.** Una pareja de ases gana a una de reyes; un color con As gana a uno con J.
3. **Compara los kickers.** Si la mano hecha empata, las cartas restantes deciden, una a una desde arriba.
4. **¿Sigue idéntico? Se divide el bote.** Los palos nunca rompen el empate.

| Tipo de mano | Qué comparas | ¿Decide el kicker? | ¿Puede dividirse? |
|------|------|------|------|
| **Carta Alta** | Las 5, de mayor a menor | Sí (las 5 son kickers) | Sí |
| **Pareja** | La pareja, luego 3 kickers | Sí | Sí |
| **Doble Pareja** | Pareja alta, baja, 1 kicker | Sí | Sí |
| **Trío** | Valor del trío, luego 2 kickers | Sí | Sí |
| **Escalera** | Solo la carta más alta | No | Sí |
| **Color** | Las 5, de mayor a menor | Sí | Sí |
| **Full** | Valor del trío, luego de la pareja | No | Sí |
| **Póker** | Valor del póker, luego 1 kicker | Sí | Sí |
| **Escalera de Color** | Solo la carta más alta | No | Sí |

Un **kicker** es simplemente una carta que no forma parte de tu mano hecha pero que rompe empates. Con A-A-K contra A-A-Q, ambos tienen pareja de ases — gana el kicker K. Por eso los buenos jugadores cuidan tanto la *calidad* de sus cartas altas, no solo si emparejaron.

---

## Lee la mesa: 3 problemas reales

Saber el orden no es lo mismo que leerlo rápido. Aquí van tres situaciones reales. Tapa la respuesta, busca tus mejores cinco cartas de las siete y comprueba.

### Problema 1 — El full escondido

:::hand[A♠,A♦,K♥,K♣,Q♠] Mesa (5 cartas):::

Tienes **Q♥ Q♦**. ¿Cuál es tu mejor mano?

→ La mesa ya muestra doble pareja (A-A y K-K). Tus dos reinas más la Q♠ de la mesa hacen **trío de reinas**, y junto con los ases de la mesa tienes un **full — QQQ + AA**. Esas son tus mejores cinco. Los principiantes se traban con "¿AAKK + Q no es doble pareja?" — no. En cuanto tienes trío, te quedas con el full. **El full gana a la doble pareja.**

### Problema 2 — El color que en realidad es mejor

:::hand[7♥,8♥,9♥,10♥,J♠] Mesa (5 cartas):::

Tienes **K♥ 2♣**. La mesa tiene cuatro corazones.

→ Tu K♥ es el quinto corazón, así que piensas "color". Pero mira la secuencia: **K♥ 10♥ 9♥ 8♥ 7♥** son cinco corazones *seguidos* — una **escalera de color con K**, la mano #2. Comprueba siempre si tus cartas de color también están conectadas antes de dar por hecho que es solo color.

### Problema 3 — Cuando hay que compartir

:::hand[K♠,K♦,K♥,A♠,2♠] Mesa (5 cartas):::

Tienes **A♥ 3♣**. La mesa ya trae trío de reyes.

→ Tu A♥ empareja con el A♠ de la mesa y te da un **full, KKK + AA**. Pero si tu rival también tiene un As, tiene el *mismo* full y se divide. Si no tiene As y solo una pareja menor, tu full gana. La lección: cuando la mesa hace casi todo el trabajo, tu mano a menudo vale solo una carta extra.

---

## Respuestas rápidas a los duelos que todos discuten

| Duelo | Gana | Por qué |
|------|------|------|
| Color vs Escalera | **Color** | #5 gana a #6 |
| Full vs Color | **Full** | #4 gana a #5 |
| Trío vs Doble Pareja | **Trío** | #7 gana a #8 |
| Escalera vs Trío | **Escalera** | #6 gana a #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (A alto)** | La rueda es la escalera más baja |
| Misma pareja, kicker K vs J | **Kicker K** | El kicker más alto gana |
| Póker vs Full | **Póker** | #3 gana a #4 |

---

## Por qué el orden es así

La jerarquía no es arbitraria: es pura probabilidad. **Cuanto más difícil es ligar una mano, más alto está.** En una baraja de 52 cartas simplemente hay menos formas de hacer cinco del mismo palo que cinco en secuencia de cualquier palo — por eso el color está por encima de la escalera. Ese único principio explica toda la jerarquía.

También explica la gran excepción que verás: en el **Short Deck (6+) Hold'em**, donde se quitan los doses a los cincos, los colores se vuelven más difíciles que los fulls — así que en ese formato un **color gana a un full**. Cambió la matemática, cambió el orden. Más sobre las diferencias por modalidad abajo.

---

## La rutina de 1 segundo para leer la mesa

Con el reloj en contra, repasa esto en orden cada vez que la mesa esté completa:

**1. Primero los palos** — ¿hay tres o más cartas del mismo palo en la mesa? Si sí, el color es posible. Mira tu palo.

**2. Luego la conexión** — ¿hay cartas cercanas en valor (como 8-9-10)? Si sí, la escalera está viva.

**3. Por último las parejas** — ¿está emparejada la mesa? Si sí, hay fulls y pókers en juego, y tu color o escalera puede estar en peligro.

Los jugadores entrenados leen la mesa en este orden — primero el peligro (color/escalera en la mesa), luego si la mesa está emparejada (lo que amenaza todo). Crea el hábito y dejarás de pagar a la ligera en el river.

---

## Memorízalo en 3 pasos

| Paso | Qué hacer | Tiempo |
|------|------|------|
| **1** | Aprende tres grupos: Premium (#1-3), Medio (#4-6), Común (#7-10) | 1 día |
| **2** | Practica solo los duelos confusos: color vs escalera, full vs color | 3 días |
| **3** | Mira streams de póker y canta el ganador antes que el dealer | 1-2 semanas |

Agrupar primero evita que el orden parezca diez cosas al azar. Los duelos confusos del paso 2 causan el 90% de los errores de principiante, así que insiste en ellos.

---

## Jerarquía de manos por modalidad

El orden es común a casi todas las variantes de póker, con algunos giros importantes.

| Juego | Jerarquía | Diferencia clave |
|------|------|------|
| **Texas Hold'em** | Estándar (esta guía) | Usa 0-2 de tus cartas |
| **Omaha** | Estándar | Debes usar *exactamente* 2 de tus 4 cartas |
| **Seven-Card Stud** | Estándar | Sin cartas comunitarias |
| **Short Deck (6+)** | Modificada | El color gana al full; a veces A-6-7-8-9 cuenta como escalera |

La conclusión: aprende el orden estándar una vez y te servirá en casi todos los juegos. Solo recuerda la regla de "exactamente dos" del Omaha y el ascenso del color en Short Deck.

---

## Preguntas frecuentes

**Q. ¿El color gana a la escalera en el póker?**

A. Sí. El color es la #5 y la escalera la #6, así que el color siempre gana. Está más arriba porque cinco cartas del mismo palo son más difíciles de ligar que cinco en secuencia.

**Q. ¿El full gana al color?**

A. Sí. El full (#4) gana al color (#5) y a la escalera. Solo pierde contra el póker, la escalera de color y la escalera real.

**Q. ¿Qué es un kicker?**

A. Es una carta que no forma parte de tu mano hecha pero rompe empates. Con dos parejas iguales, gana la carta lateral (kicker) más alta. El mejor kicker posible es el As.

**Q. ¿Pueden dos jugadores tener la misma mano?**

A. Sí. Si las mejores cinco cartas de ambos son idénticas en valor, el bote se divide. Los palos nunca rompen el empate en Texas Hold'em.

**Q. ¿Hay que usar las dos cartas propias?**

A. En Hold'em, no — formas tus mejores cinco con cualquier combinación de tus dos cartas y las cinco comunitarias, incluso usando cero. (El Omaha es distinto: debes usar exactamente dos.)

**Q. ¿Cuál es la diferencia entre set y trips?**

A. Ambos son trío. Un *set* es una pareja servida más una carta de la mesa (bien disimulado); los *trips* son una pareja en la mesa más una carta tuya (más fácil de leer). El set gana más fichas.

**Q. ¿Cuál es la mejor mano del póker?**

A. La Escalera Real (A-K-Q-J-10 del mismo palo). No se puede ganar y solo empata con otra escalera real, lo que da un bote dividido.

**Q. ¿El trío es mejor que la doble pareja?**

A. Sí. El trío es la #7 y la doble pareja la #8, así que gana el trío. La doble pareja solo gana a la pareja y a la carta alta.

---

## Las 3 cosas que debes recordar

1. **El orden:** Escalera Real > Escalera de Color > Póker > Full > Color > Escalera > Trío > Doble Pareja > Pareja > Carta Alta.
2. **La trampa:** el color (#5) gana a la escalera (#6) — y cualquier mesa emparejada puede esconder un full que gana a ambos.
3. **La realidad:** la mayoría de los botes se ganan con pareja o carta alta, así que tu kicker vale más de lo que crees.

Aprende el orden en una tarde, practica los duelos confusos y repasa "palos → escaleras → parejas" en cada mesa. Hazlo y nunca volverás a empujar el bote hacia el lado equivocado.
`.trim(),
};
