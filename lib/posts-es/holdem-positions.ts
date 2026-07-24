import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Posiciones en el póker: nombre de cada asiento y chart",
  seoTitle: "Tu asiento cambia de nombre cada mano — posiciones del póker",
  desc: "Los nombres se mueven con el botón, no con las sillas. Cada posición — UTG, hijack, cutoff, botón — más números de asiento, mapa 6-max y quién actúa primero.",
  tldr: "Las posiciones del póker son nombres de asiento que se miden desde el botón del repartidor — UTG, lojack, hijack, cutoff, botón y las ciegas — y se mueven un asiento en el sentido de las agujas del reloj cada mano. En el preflop, UTG actúa primero y la ciega grande última; en el postflop, la ciega pequeña actúa primero y el botón último. Los números de asiento físicos nunca se mueven; las posiciones sí.",
  category: "strategy",
  date: "2026-06-13",
  updated: "2026-07-24",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Vista cenital de una mesa de póker profesional con 9 posiciones de jugador, stacks de fichas y un botón de repartidor dorado",
  tags: [
    "posiciones poker",
    "nombres posiciones poker",
    "numeros de asiento poker",
    "chart posiciones poker",
    "hijack lojack poker",
    "posicion mesa poker",
    "quien actua primero poker",
  ],
  content: `
Mi primera partida de cash en vivo estaba sentado en lo que más tarde aprendería que era UTG. Miré mis cartas, J♥ J♠, y subí. El hijack pagó. El cutoff pagó. El botón pagó. La ciega grande hizo 3-bet. No tenía ni idea de qué hacer — igualé y fui sangrando fichas durante tres calles.

Dos vueltas después estaba en el botón con las mismas J♥ J♠. Subí. Todos foldearon. Gané $14 sin ver siquiera un flop.

La misma mano. Un resultado completamente distinto. Lo único que cambió fue mi asiento — y esa noche me di cuenta de que en realidad no sabía cómo se *llamaban* los asientos, ni mucho menos qué significaban. Si todavía estás aprendiendo cómo fluye una mano entera desde el reparto hasta el showdown, empieza por la [guía de reglas del Texas Hold'em](/es/blog/texas-holdem-rules-for-beginners); este artículo es el mapa de asientos que esa guía da por sabido.

---

> **Respuesta rápida**
> Las posiciones del póker son los ==asientos con nombre que se miden desde el botón del repartidor== — UTG, lojack, hijack, cutoff, botón, ciega pequeña, ciega grande — y se ==mueven un asiento en el sentido de las agujas del reloj cada mano== conforme se mueve el botón. En el preflop, UTG actúa primero y la ciega grande actúa última. En el postflop, la ciega pequeña actúa primero y el botón actúa último.

---

## ¿Qué son las posiciones en una mesa de póker? (mapa completo de asientos)

Una posición no es una silla — es un **nombre para el lugar donde te sientas respecto al botón del repartidor**, y determina ==cuándo actúas en cada calle==. Como el botón se mueve un asiento en el sentido de las agujas del reloj después de cada mano, cada jugador de la mesa lleva un nombre distinto en cada mano.

Aquí tienes el chart completo de posiciones a 9-max — cada nombre de asiento, su sigla, su zona y exactamente cuándo actúa antes y después del flop:

![Mesa de póker de nueve jugadores con stacks de fichas en cada asiento y el botón del repartidor marcado con una D delante de un jugador](/images/holdem-button-position-hero.webp "El botón del repartidor fija la posición de cada asiento y el orden de juego")

| Asiento | Sigla | Zona | Preflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Temprana | 1º (primero) | 3º |
| Under the Gun +1 | **UTG+1** | Temprana | 2º | 4º |
| Under the Gun +2 | **UTG+2** | Temprana | 3º | 5º |
| Lojack | **LJ** | Media | 4º | 6º |
| Hijack | **HJ** | Media | 5º | 7º |
| Cutoff | **CO** | Tardía | 6º | 8º |
| Button | **BTN** | Tardía | 7º | **Último** |
| Small Blind | **SB** | Ciega | 8º | **1º** |
| Big Blind | **BB** | Ciega | 9º (último) | 2º |

Fíjate en el vuelco: ==las ciegas actúan últimas en el preflop pero primeras en el postflop==, mientras que el botón actúa último en cada calle postflop. Ese orden — no las cartas — es lo que hace que algunos asientos sean estructuralmente mejores que otros.

> **Nota de mesa en vivo:** el botón es un disco físico que se mueve un asiento en el sentido de las agujas del reloj cada mano. "UTG" es quien esté sentado tres asientos a la izquierda del botón en ese momento — no una silla fija.

---

## Nombres y siglas de las posiciones: UTG, LJ, HJ, CO, BTN, SB, BB

Cada nombre de posición que oirás en una mesa o leerás en un artículo de estrategia, descifrado:

| Sigla | Nombre completo | Grupo | A qué se refiere |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Temprana (EP) | Primero en actuar en el preflop, justo a la izquierda de la ciega grande |
| **UTG+1 / UTG+2** | Under the Gun más uno / dos | Temprana (EP) | Los siguientes asientos en el sentido de las agujas del reloj desde UTG |
| **LJ** | Lojack | Media (MP) | Tres asientos a la derecha del botón |
| **HJ** | Hijack | Media (MP) | Dos asientos a la derecha del botón |
| **CO** | Cutoff | Tardía (LP) | Un asiento a la derecha del botón |
| **BTN** | Button (repartidor) | Tardía (LP) | El asiento con el disco del repartidor — último en actuar en el postflop |
| **SB** | Small Blind | Ciegas | Primer asiento a la izquierda del botón; pone la apuesta forzada pequeña |
| **BB** | Big Blind | Ciegas | Segundo asiento a la izquierda del botón; pone la apuesta forzada completa |

También verás las etiquetas de zona más amplias: ==**EP** (posición temprana)== cubre los asientos UTG, ==**MP** (posición media)== cubre el lojack y el hijack, y ==**LP** (posición tardía)== cubre el cutoff y el botón. Los libros antiguos meten lojack y hijack en un mismo saco como "MP1/MP2" — los mismos asientos, distinta etiqueta.

Saber los nombres es el primer paso. Lo que hay que *hacer* de verdad desde cada uno de ellos — rangos, robos, juego en posición frente a fuera de posición — es una cuestión de estrategia, y vive en la [guía de juego posicional](/es/blog/holdem-position-play).

---

## Números de asiento vs. posiciones — el asiento 1 no es una posición

Esto despista a casi todo jugador en vivo primerizo: cuando el encargado dice **"Mesa 12, Asiento 5"**, ese número no tiene ==nada que ver con las posiciones del póker==.

En la mayoría de las salas, los asientos físicos se numeran desde la izquierda inmediata del repartidor — ==el Asiento 1 es por convención la primera silla a la izquierda del repartidor==, contando en el sentido de las agujas del reloj hasta el Asiento 9 o 10 a la derecha del repartidor. Esos números están atornillados a las sillas. El personal los usa para la logística: sentar jugadores nuevos, entregar fichas, avisar del tiempo.

Las posiciones son lo contrario — ==rotan un asiento en el sentido de las agujas del reloj cada mano== con el botón. El Asiento 5 puede ser el botón esta mano, el cutoff la siguiente y el hijack la mano de después.

:::compare
Números de asiento (físico) | Posiciones (póker)
Fijos a la silla — el Asiento 1 suele ser la izquierda inmediata del repartidor | Se mueven con el botón del repartidor cada mano
Los usa el personal: "Asiento 5, van fichas" | Los usa la estrategia: "abre el cutoff"
Nunca cambian durante una sesión | Cambian en cada mano, un asiento en el sentido de las agujas del reloj
Te dicen DÓNDE te sientas | Te dicen CUÁNDO actúas
:::

Así que "¿qué es el Asiento 1 en el póker?" tiene una respuesta aburrida — es una silla — y esa es justo la clave. ==Un número de asiento es una dirección; una posición es un trabajo==, y el trabajo se reasigna cada mano.

---

## ¿Qué es UTG en el póker?

**UTG viene de "Under the Gun"** — el asiento inmediatamente a la izquierda de la ciega grande, y el ==primer jugador en actuar en el preflop==. El nombre evoca la presión del sitio: tienes que comprometer fichas antes de ver lo que hace un solo rival, como si actuaras a punta de pistola.

En una partida completa de 9 jugadores hay en realidad tres asientos "under the gun" — **UTG, UTG+1 y UTG+2** — contados en el sentido de las agujas del reloj desde la ciega grande. Solo el primero actúa realmente a ciegas; los asientos +1 y +2 al menos ven una o dos decisiones antes.

Esa es la definición. *Cómo jugar* UTG — por qué exige el rango más cerrado de la mesa, y por qué subir o foldear es la línea estándar ahí — se cubre en la [guía de juego posicional](/es/blog/holdem-position-play).

---

## El hijack y el lojack — y por qué se llaman así

**El hijack (HJ)** es el asiento dos a la derecha del botón. **El lojack (LJ)** es uno más allá, tres a la derecha del botón. Juntos forman la posición media en una partida moderna de 9-max.

Los nombres no tienen un origen oficial documentado — la jerga del póker rara vez lo tiene — pero la historia que suele contarse va así:

- **Hijack:** el cutoff y el botón son los asientos clásicos para robar ciegas. Cuando el jugador un asiento antes sube primero, ==**"secuestra" (hijack) el robo**== que los asientos tardíos estaban esperando hacer — así que el propio asiento se quedó con el nombre.
- **Lojack:** llegó después, como un ==juego de palabras con "hijack"== — el asiento un escalón "más bajo" en el orden jerárquico. La mayoría de las versiones oyen también un eco de la marca antirrobo LoJack: un hijack, un peldaño por debajo.

Tómate ambas como leyenda de mesa más que como etimología. Lo que no es leyenda: el hijack y el lojack son nombres reales y estándar que verás en cada range chart y sitio de entrenamiento moderno, y por eso vale la pena tenerlos claros.

---

## El cutoff y el botón (posición del repartidor)

**El cutoff (CO)** es el asiento ==uno a la derecha del botón== — la última posición antes del repartidor. Circulan dos historias de origen: una dice que el asiento "corta" (cuts off) la oportunidad del botón de robar las ciegas subiendo primero; otra más antigua dice que en las partidas caseras donde uno mismo repartía, el jugador a la derecha del repartidor ==cortaba la baraja== tras barajar. Sea como sea, el nombre cuajó, y el cutoff se cuenta universalmente como posición tardía.

**El botón (BTN)** — también llamado **posición del repartidor** — es el asiento marcado por el disco físico del repartidor. En las partidas de casino un crupier profesional maneja las cartas, así que el botón simplemente marca ==quién *estaría* repartiendo==, que es lo que ancla el orden de apuestas: el botón actúa ==último en cada calle postflop==, y todo lo demás en la mesa se nombra por su distancia a ese disco.

Esa última acción garantizada es por lo que el botón se considera el asiento más rentable del póker — el argumento completo, con los números detrás, está en la [guía de juego posicional](/es/blog/holdem-position-play).

---

## Las ciegas: asientos SB y BB

Los dos asientos a la izquierda del botón son posiciones *y* apuestas forzadas al mismo tiempo:

- **Ciega pequeña (SB):** el primer asiento a la izquierda del botón. Pone una apuesta forzada — normalmente la mitad de la ciega grande — antes de repartir las cartas.
- **Ciega grande (BB):** el siguiente asiento en el sentido de las agujas del reloj. Pone la apuesta forzada completa que fija el precio de entrar en la mano.

Como posiciones, se definen por el vuelco en el orden de acción: las ciegas actúan ==últimas en el preflop== (ya han pagado, así que todos los demás deben responder primero a sus apuestas) pero ==primeras en el postflop==, por delante de toda la mesa, en el flop, el turn y el river por igual.

Por qué existen las ciegas, cuánto cuestan por vuelta y cómo defenderlas es un tema propio — la [guía de ciega pequeña y ciega grande](/es/blog/holdem-blind-meaning) cubre a fondo la mecánica y la matemática de las apuestas forzadas.

---

## ¿Quién actúa primero en el póker — preflop vs. postflop (van primero las ciegas)?

La pregunta más repetida sobre las posiciones, respondida en una tabla:

| Calle | Primero en actuar | Último en actuar |
|:---|:---|:---|
| **Preflop** | **UTG** — primer asiento a la izquierda de la ciega grande | **Ciega grande** — puede pasar o subir |
| **Flop / Turn / River** | **Ciega pequeña** — o el primer asiento aún activo a la izquierda del botón | **Botón** — o el asiento activo más cercano antes de él |

Entonces — **¿van primero las ciegas?** ==En el preflop, no. En el postflop, sí.== Antes del flop las ciegas ya han puesto dinero, así que la acción empieza con UTG y vuelve hasta ellas al final — la ciega grande actúa última de todos. Después del flop el orden se reinicia en el sentido de las agujas del reloj desde el botón: la ciega pequeña habla primero, la ciega grande segunda, y el botón siempre último.

Y entre las dos ciegas: ==la ciega pequeña actúa antes que la ciega grande en cada calle==, tanto en el preflop como en el postflop — con una excepción, el mano a mano, que se cubre abajo.

Una pregunta vecina que merece una línea: en el **showdown**, por defecto muestra primero el último jugador que apostó o subió (si el river se pasa hasta el final, muestra el primer asiento activo a la izquierda del botón) — la etiqueta completa está en la [guía de reglas del showdown](/es/blog/holdem-showdown-rules). Para la secuencia completa de una mano calle por calle, mira [el orden de juego](/es/blog/holdem-game-order).

---

## Posiciones del póker según el número de jugadores: del mano a mano al 10 jugadores (6-max vs. mesa completa)

Los nombres de las posiciones no cambian con el tamaño de la mesa — ==se van quitando primero de la posición temprana== conforme se eliminan jugadores. El botón, las ciegas, el cutoff y el hijack son los que más sobreviven; los asientos UTG existen solo cuando la mesa está llena. Aquí tienes el mapa de 2 a 10 jugadores, listado por orden de acción en el preflop:

| Jugadores | Orden de acción en preflop (primero → último) |
|:---:|:---|
| **2 (mano a mano)** | BTN (pone la ciega pequeña) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (el asiento "UTG" aquí) → BTN → SB → BB |
| **5** | HJ (el asiento "UTG" aquí) → CO → BTN → SB → BB |
| **6 (6-max)** | UTG (también llamado LJ) → HJ → CO → BTN → SB → BB |
| **9 (mesa completa)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**El mano a mano es el que rompe la intuición de todo el mundo.** Con solo dos jugadores, ==el botón pone la ciega pequeña== — el mismo asiento es BTN y SB a la vez. Eso significa que el botón actúa ==**primero** en el preflop== (la ciega grande actúa última, como siempre) pero aun así actúa ==**último** en cada calle postflop==, mientras que la ciega grande actúa primera en el postflop. Cualquier otro tamaño de mesa sigue el patrón normal; solo el mano a mano funde el mejor asiento con una ciega.

**6-max vs. mesa completa** es pura resta: los tres asientos de más (UTG+1, UTG+2 y un asiento medio) no existen, así que el 6-max va UTG → HJ → CO → BTN → SB → BB. La consecuencia práctica es que ==cada asiento en 6-max juega "más tarde" que su homólogo de mesa completa== — el UTG de 6-max se enfrenta a cinco rivales, no a ocho — y por eso los rangos se abren en todos los asientos en las partidas de pocos jugadores. Los números asiento por asiento viven en la [guía de juego posicional](/es/blog/holdem-position-play), y las manos exactas que llenan cada rango están mapeadas en la [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart).

> **Matiz de nomenclatura:** algunos sitios y salas etiquetan el primer asiento de 6-max como "LJ" o "MP" en vez de UTG, y los asientos medios de 10 jugadores aparecen a veces como "MP1/MP2". Las etiquetas varían; el orden de acción nunca.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-position-play | Juego posicional: en posición vs. fuera de posición | /images/holdem-position-play-hero.webp
/es/blog/holdem-starting-hands-chart | Tabla de manos iniciales por posición | /images/holdem-starting-hands-chart-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué significa UTG en el póker?**

A. UTG viene de "Under the Gun" — el asiento inmediatamente a la izquierda de la ciega grande, y el primer jugador en actuar en el preflop. El nombre evoca la presión de comprometer fichas antes de ver la decisión de ningún rival. En partidas de mesa completa, los dos asientos siguientes se llaman UTG+1 y UTG+2.

**Q. ¿Qué es el hijack en el póker?**

A. El hijack (HJ) es el asiento dos a la derecha del botón del repartidor, justo antes del cutoff. Es el más tardío de los dos asientos de posición media en una partida de 9-max y el segundo asiento en actuar en el preflop en 6-max. La historia que suele contarse detrás del nombre: una subida desde este asiento "secuestra" el robo de ciegas que el cutoff y el botón estaban posicionados para hacer.

**Q. ¿Qué es el lojack en el póker?**

A. El lojack (LJ) es el asiento tres a la derecha del botón — el más temprano de los dos asientos de posición media en 9-max. En 6-max es el primer asiento en actuar, donde normalmente se le llama simplemente UTG. El nombre se cuenta en general como un juego de palabras con "hijack" (un asiento más bajo), a menudo ligado a la marca antirrobo LoJack — leyenda de mesa más que etimología documentada.

**Q. ¿Quién va primero, la ciega pequeña o la ciega grande?**

A. La ciega pequeña actúa antes que la ciega grande en cada calle. En el preflop, ambas ciegas actúan últimas (la ciega grande la última de todas, con la opción de pasar o subir); en el postflop, la ciega pequeña es el primer asiento en actuar en la mesa. La única excepción es el mano a mano, donde el botón pone la ciega pequeña y la ciega grande actúa primero en el postflop.

**Q. ¿Cuántas posiciones hay en el póker 6-max?**

A. Seis: UTG (también llamado lojack), hijack, cutoff, botón, ciega pequeña y ciega grande. Comparado con una mesa de 9-max, los asientos UTG+1, UTG+2 y un asiento medio simplemente no existen — los nombres se quitan primero de la posición temprana, así que cada asiento restante juega "más tarde" que su homólogo de mesa completa.

**Q. ¿Cambian las posiciones del póker cada mano?**

A. Sí. El botón del repartidor se mueve un asiento en el sentido de las agujas del reloj después de cada mano, y como todas las posiciones se nombran por su distancia al botón, la posición de cada jugador se desplaza un asiento cada mano. A lo largo de una vuelta completa ocuparás cada posición de la mesa exactamente una vez.

**Q. ¿Qué es el Asiento 1 en el póker?**

A. El Asiento 1 es una silla física, no una posición — en la mayoría de las salas es el primer asiento a la izquierda inmediata del repartidor, con los números corriendo en el sentido de las agujas del reloj hasta el Asiento 9 o 10. El personal usa los números de asiento para sentar jugadores y la logística. Las posiciones del póker (UTG, botón, ciegas) rotan de forma independiente cada mano, así que el Asiento 1 puede ser cualquier posición.

**Q. ¿Cuáles son las posiciones en una mesa de póker de 9 jugadores?**

A. Por orden de acción en el preflop: UTG, UTG+1, UTG+2 (posición temprana), lojack (LJ) y hijack (HJ) (posición media), cutoff (CO) y botón (BTN) (posición tardía), y luego las dos ciegas: ciega pequeña (SB) y ciega grande (BB). Todas se nombran por su distancia al botón, así que se desplazan un asiento cada mano.

**Q. ¿Cuál es la mejor posición en la mesa?**

A. El botón (BTN). Es el único asiento que actúa último en cada calle postflop, lo que significa que ves lo que hacen todos los demás antes de decidir. Esa información garantizada es lo que lo convierte en el asiento más rentable del póker; el cutoff (CO), justo a su derecha, es el segundo mejor por el mismo motivo.

**Q. ¿Qué es el 6-max y en qué cambian las posiciones?**

A. Una mesa 6-max tiene seis asientos en vez de nueve: UTG (también llamado lojack), hijack, cutoff, botón, ciega pequeña y ciega grande. Se quitan los tres asientos tempranos de más (UTG+1, UTG+2 y un asiento medio), así que cada asiento juega "más tarde" que su homólogo de mesa completa y los rangos se abren en todos los asientos.

---

## Lo que hay que recordar

1. **Las posiciones son nombres, no sillas.** Cada asiento se nombra por su distancia al botón del repartidor, y cada nombre se mueve un asiento en el sentido de las agujas del reloj cada mano.
2. **El chart en una línea:** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. El preflop empieza en UTG y termina en la ciega grande; el postflop empieza en la ciega pequeña y termina en el botón.
3. **Números de asiento ≠ posiciones.** El Asiento 1 es por convención la izquierda inmediata del repartidor y nunca se mueve; las posiciones rotan cada mano. Uno es una dirección, la otra es un trabajo.
4. **El tamaño de la mesa resta por delante.** El 6-max quita los asientos tempranos; el mano a mano funde el botón con la ciega pequeña — primero en actuar en el preflop, último en el postflop.

Una vez que los nombres sean automáticos, la ventaja real viene de lo que haces con ellos — [cómo jugar cada posición](/es/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"), desde los rangos de apertura hasta el juego en posición frente a fuera de posición, es la siguiente lectura. Desde ahí, la [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart) mapea manos exactas a asientos exactos, y la [guía de jerarquía de manos](/es/blog/holdem-hand-rankings) resuelve qué gana de verdad en el showdown.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guía para principiantes</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del Texas Hold'em para principiantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cómo funciona una mano entera del reparto al showdown</div>
  </a>
  <a href="/es/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Juego posicional</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estrategia en posición vs. fuera de posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Rangos de apertura y qué hacer desde cada asiento</div>
  </a>
  <a href="/es/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Orden de juego</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Orden de juego en el Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Secuencia de acción preflop → flop → turn → river</div>
  </a>
  <a href="/es/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ciegas</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ciega pequeña y ciega grande explicadas</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué existen y cómo jugarlas correctamente</div>
  </a>
</div>
`.trim(),
};

export default POST;
