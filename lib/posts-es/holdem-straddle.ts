import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "¿Qué es un straddle en póker? Reglas, tipos y si deberías ponerlo",
  seoTitle: "La apuesta que dobla la mesa — ¿qué es un straddle?",
  desc: "El straddle es una ciega voluntaria que dobla la apuesta antes de repartir. Reglas, tipos de straddle, quién actúa primero y si straddlear es rentable.",
  tldr: "Un straddle es una apuesta ciega voluntaria — normalmente el doble de la ciega grande (2× BB) — que un jugador pone antes de repartir las cartas, casi siempre desde UTG; en España se le llama 'matar la ciega'. Le compra al que lo pone la última acción y la opción de subir en preflop, doblando la apuesta de la mano. Para casi todo el mundo es una jugada -EV, y solo se permite en cash games según las reglas de la casa (casi nunca en torneos).",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-07-24",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "Un jugador en UTG poniendo una apuesta ciega extra de dos fichas delante de la ciega grande antes de que se repartan las cartas",
  tags: ["straddle", "qué es un straddle en poker", "reglas del straddle poker", "mississippi straddle", "button straddle", "sleeper straddle", "straddle es rentable", "straddle utg"],
  content: `
La primera vez que alguien puso un straddle en mi mesa de $1/$2, no tenía ni idea de por qué el jugador en UTG soltó $4 antes de que salieran las cartas — ni de por qué el repartidor de repente empezó la acción dos asientos más allá. Durante un mes lo llamé "la apuesta del rico" hasta que aprendí lo que hace de verdad: un straddle ==dobla la apuesta y le compra a un jugador la última palabra==, todo antes de que nadie haya mirado una sola carta.

Si has visto una partida en vivo donde aparece una ciega extra de la nada, este es el término que buscas. Abajo tienes exactamente qué es un **straddle**, cada tipo con el que te vas a encontrar, quién actúa primero cuando se pone uno, y la respuesta honesta a la única pregunta que importa: ==g:¿deberías ponerlo de verdad?==

---

### El straddle de un vistazo

:::stripe
2× BB | Tamaño estándar del straddle
Última | La acción preflop del que lo pone
Solo cash | Casi nunca permitido en torneos
-EV | El veredicto para la mayoría de jugadores
:::

---

## ¿Qué es un straddle en póker?

**Un straddle —lo que en los casinos de España se llama "matar la ciega"— es una apuesta ciega voluntaria, normalmente el doble de la ciega grande (2× BB), que se pone antes de repartir las cartas.** En una partida de $1/$2 el jugador en UTG (justo a la izquierda de la ciega grande) puede soltar $4 "de straddle", y la mano se juega al instante como si fuera una mesa de $1/$2/$4.

Dos cosas hacen que sea más que simple dinero extra en el bote:

- Es una **ciega viva.** Igual que la ciega grande, quien pone el straddle ha comprado la **opción de subir** aunque todos solo igualen — una "tercera ciega" con derecho a actuar sobre ella.
- Se pone **a ciegas.** Straddleas *antes* de mirar tus cartas (en la mayoría de salas, antes incluso de que las repartan). Estás comprometiendo dinero sin información, que es justo la razón por la que suele ser mala idea — más sobre esto abajo.

Un straddle no es una subida en el sentido normal — es una ciega que resetea el precio. Si entiendes [qué son la ciega pequeña y la ciega grande](/es/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp"), un straddle es simplemente una *tercera* opcional que el jugador elige poner para inflar la apuesta y agarrar posición.

---

## Cómo funciona un straddle: quién actúa primero y último

![Infografía de un botón de repartidor dorado y dos cartas privadas boca abajo detrás de un flop K♦ 7♣ 2♠, donde el botón actúa el último en postflop](/images/holdem-button-dealer-board.webp "Un straddle UTG vivo convierte el asiento a la izquierda de la ciega grande en una tercera ciega — el que lo pone ahora actúa el último antes del flop")

Esta es la parte que las páginas de definiciones se saltan, y donde los jugadores nuevos se pierden. Un straddle **reordena el orden de acción en preflop.** Repasemos una partida estándar de $1/$2 donde UTG pone un straddle de $4:

:::steps
UTG pone el straddle | El jugador en UTG saca $4 (2× la ciega grande de $2) antes de repartir las cartas
Primero en actuar = a la izquierda del que straddlea | La acción ahora empieza con el jugador a la izquierda del que puso el straddle (UTG+1), no UTG — el straddle actúa como una nueva ciega grande
Alrededor de la mesa | Todos deben igualar $4 (no $2) para jugar; pueden foldear, igualar o subir con normalidad
Deciden las ciegas | La ciega pequeña y la grande actúan por turno, enfrentándose al precio de $4
El que straddlea actúa el ÚLTIMO | Si nadie subió, quien puso el straddle puede pasar su opción o subir — la última palabra antes del flop
:::

Esa "última acción preflop" es lo que está pagando el que pone el straddle. Pero fíjate en la trampa: para un **straddle UTG, el privilegio de la última acción es solo en preflop.** En cuanto llega el flop, el orden de apuestas vuelve a la normalidad — la ciega pequeña actúa primero, y quien puso el straddle vuelve a un asiento temprano y fuera de posición con un bote inflado. Ese único hecho es la razón por la que el straddle UTG hace perder dinero tan a menudo: pagas el doble por ser el último durante una calle, y luego juegas las tres calles siguientes fuera de posición.

---

## Tipos de straddle (UTG, Mississippi, botón y sleeper)

![Un straddle puesto junto al botón del repartidor, mostrando un button o Mississippi straddle que compra la última posición durante la mano](/images/holdem-straddle-button.webp "Un button (Mississippi) straddle se pone desde el botón — el único straddle que compra la última acción también en postflop")

No todos los straddles son iguales — y las diferencias tienen que ver con **dónde empieza la acción y cuánto tiempo conservas la última posición.** Aquí tienes la comparación que ninguna otra página reúne en un solo sitio:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo | Quién lo pone | Empieza la acción | Último en actuar | ¿Compra la opción? |
|------|------|------|------|------|
| **UTG (estándar)** | En UTG | A la izquierda del que straddlea | Solo preflop | Sí |
| **Mississippi** | Cualquier asiento (a menudo botón/CO) | A la izquierda del que straddlea | Pre + postflop* | Sí |
| **Button** | El botón | Ciega pequeña | Pre + postflop | Sí |
| **Sleeper** | Un asiento que no es UTG | Normal (UTG) | No | Normalmente no |
| **Re-straddle** | A la izquierda de un straddle | A la izquierda del re-straddle | Solo preflop | Sí |

</div>

*La última acción postflop aplica cuando el Mississippi straddle está en el botón o cerca de él.

- **Straddle UTG** — el clásico. Se pone en UTG, última acción solo en preflop. El más común y el más débil en cuanto a posición.
- **Mississippi straddle** — se puede poner desde **cualquier posición**, con más fuerza desde el botón o el cutoff. La acción empieza a la izquierda del que lo pone, así que un Mississippi straddle desde el botón compra la **última acción tanto en preflop como en postflop** — el único straddle con un argumento posicional real. No está permitido en todas partes.
- **Button straddle** — un straddle estilo Mississippi específicamente desde el botón; el botón conserva la última acción hasta el final. El flujo exacto (dónde encaja la ciega pequeña) varía según la sala — confírmalo con el repartidor.
- **Sleeper straddle** — una ciega desde un asiento que no es UTG y que se queda "dormida": está **inactiva a menos que la acción foldee hasta llegar a ella**, y en la mayoría de salas **no** compra posición ni la opción de subir. Rara, y casi nunca se ve online.
- **Re-straddle (doble straddle)** — un jugador a la izquierda puede straddlear *por encima* de un straddle, por un mínimo del doble del anterior ($4 → $8 → $16). Si está permitido, y desde qué asientos, es pura regla de la casa.

⚠️ Cada uno de estos **depende de las reglas de la casa.** Ante la duda, pregunta al floor antes de soltar fichas — la mecánica cambia de verdad de una sala a otra.

---

## ¿Cuánto es un straddle?

El straddle estándar es **exactamente 2× la ciega grande** — $4 en una partida de $1/$2, $10 en una de $2/$5. Ese es el valor por defecto en casi todas las salas.

Algunas salas de no-límit permiten más:

- **Straddle sin tope / all-in** — unas pocas salas dejan que quien straddlea ponga cualquier cantidad, hasta todo su stack, como apuesta ciega. Un straddle ciego grande puede convertir una partida pequeña en una muy grande durante una sola mano.
- **Progresión de re-straddle** — donde se permite re-straddlear, cada uno es al menos el doble del anterior: $4, luego $8, luego $16, y así sucesivamente. Las partidas donde toda la mesa straddlea y re-straddlea pueden multiplicar la apuesta efectiva varias veces.

Si vas a igualar en un bote con straddle, recuerda que tus [pot odds](/es/blog/holdem-pot-odds) se miden ahora contra una ciega mayor — el precio de jugar cada mano se ha doblado, lo que castiga en silencio los calls flojos.

---

## ¿Se permite el straddle en torneos?

**Casi nunca.** El straddle es cosa de cash games. Los torneos funcionan con una estructura fija de niveles de ciegas que tiene que ser idéntica en todas las mesas por justicia, y una ciega extra voluntaria rompería eso — así que la inmensa mayoría de torneos, en vivo y online, **prohíben el straddle por completo.**

Incluso en cash games es opcional y depende de las reglas de la casa: algunas salas permiten solo el straddle UTG, otras aceptan Mississippi y button straddles, otras ponen tope al tamaño, otras prohíben los re-straddles. Online, los straddles son raros y, donde se ofrecen, suelen limitarse a un simple interruptor de straddle UTG. La diferencia entre una apuesta de cash game como esta y el formato rígido de torneo da para todo un tema aparte — mira [torneos vs cash games](/es/blog/holdem-tournament-vs-cash-game).

---

## ¿Es rentable el straddle? ¿Deberías ponerlo?

![Un bote grande e inflado de fichas mezcladas amontonadas en el centro del tapete, el bote hinchado que crea un straddle antes de que nadie haya visto una carta](/images/holdem-straddle-bloated-pot.webp "Un straddle dobla la ciega e infla el bote — dinero comprometido antes de ver una sola carta")

La respuesta honesta, y la que comparten los solvers: **para casi todo el mundo, no.** El análisis de GTO Wizard lo dice sin rodeos — desde el punto de vista del valor esperado, el straddle es una jugada perdedora. Tres razones:

:::card
🎯 | Te comprometes a ciegas | El dinero entra antes de ver tus cartas, así que juegas un bote inflado sin información — la misma desventaja que hace de las ciegas los peores asientos de la mesa
📉 | Reduce tu ventaja posicional | Doblar la ciega infla el bote inicial y deja a más jugadores por actuar cuando estás en tus mejores asientos para robar. Curiosamente, los solvers responden abriendo **menos** manos en botes con straddle — alrededor de un 15–20% menos en el botón — no más
💸 | Infla el rake | Botes más grandes significan más [rake](/es/blog/holdem-rake) que se llevan de ellos, un impuesto oculto sobre cada mano con straddle en un cash game con rake
:::

Entonces, ¿cuándo *sí* es defendible? Solo en situaciones concretas, y nunca como jugada de puro beneficio:

- **Una mesa loose-passive** donde los rivales igualan la ciega mayor con basura y juegan fit-or-fold tras el flop — a veces puedes explotar eso, idealmente straddleando desde posición tardía.
- **Una partida donde ya todos straddlean** — si el straddle es universal, no pierdes posición *relativa* al sumarte (aunque a la mesa entera le iría mejor no hacerlo).
- **Partidas de acción / sociales** donde estás por diversión, no por máximo EV — una razón perfectamente válida, solo sé honesto en que te está costando dinero.

Lo que el straddle *no* hará es "crear una imagen loose" que compense — estás pagando un precio real y medible por una ventaja de imagen que rara vez se materializa. Si tu objetivo es ganar, la jugada que de verdad construye ventaja es la [posición](/es/blog/holdem-position-play), no una ciega extra. Straddlea por diversión si te apetece; no straddlees para ganar dinero.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-blind-meaning | ¿Qué son las ciegas en póker? | /images/holdem-blind-meaning-hero.webp
/es/blog/holdem-position-play | Cómo la posición lo cambia todo | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. ¿Qué es un straddle en póker?**

A. Un straddle es una apuesta ciega voluntaria, normalmente el doble de la ciega grande, que se pone antes de repartir las cartas — casi siempre por el jugador en UTG. Dobla la apuesta de la mano y le da a quien lo pone la opción de subir y la última acción en preflop, igual que una tercera ciega.

**Q. ¿Cuánto es un straddle en póker?**

A. El straddle estándar es 2× la ciega grande — $4 en una partida de $1/$2. Algunas salas de no-límit permiten straddles mayores o incluso sin tope (all-in), y donde se permite re-straddlear cada uno debe ser al menos el doble del straddle anterior ($4, $8, $16, y así sucesivamente).

**Q. ¿Quién actúa primero tras un straddle?**

A. El jugador justo a la izquierda de quien pone el straddle actúa primero, porque un straddle vivo funciona como una nueva ciega grande. La acción da luego la vuelta a la mesa, la ciega pequeña y la grande actúan por turno, y quien puso el straddle actúa el último en preflop — con la opción de pasar o subir si nadie subió antes que él.

**Q. ¿Quién puede poner un straddle? ¿Puede straddlear cualquiera?**

A. Depende del tipo. Para un straddle estándar, solo el jugador en UTG — el asiento justo a la izquierda de la ciega grande — puede ponerlo. Un Mississippi straddle, donde la casa lo permite, deja que cualquier jugador straddlee desde cualquier posición, casi siempre el botón o el cutoff. En cualquier caso, solo puedes straddlear *antes* de que se repartan las cartas (o antes de mirarlas), y si un asiento concreto puede straddlear o no depende por completo de las reglas de la casa — algunas salas permiten solo UTG, otras cualquier asiento, y muchas partidas online y torneos lo prohíben de plano.

**Q. ¿Se puede resubir después de un straddle?**

A. Sí. Un straddle es una ciega, no cierra la apuesta — funciona como una nueva ciega grande, así que cualquier jugador que actúe después puede subir (hacer raise) por encima de él con normalidad. Si nadie sube y la acción vuelve a quien puso el straddle, él conserva la opción de resubir la última, igual que la ciega grande tiene su opción. Distinto es el re-straddle, que sí debe ser como mínimo el doble del straddle anterior ($4 → $8 → $16), donde las reglas de la casa lo permiten.

**Q. ¿Un straddle se considera una subida?**

A. No. Un straddle es una apuesta ciega, no una subida — resetea el precio que todos deben igualar para entrar al bote, y conserva la opción de subir más tarde para quien lo pone. Si cuenta o no para el tope de subidas en partidas de límit es una regla de la casa: muchas salas no lo cuentan, pero algunas lo tratan como una subida a ese efecto, así que compruébalo en el sitio.

**Q. ¿Qué es un Mississippi straddle?**

A. Un Mississippi straddle se puede poner desde cualquier posición, no solo desde UTG — habitualmente el botón o el cutoff. La acción empieza entonces a la izquierda de quien lo pone, así que un Mississippi straddle desde el botón compra la última acción tanto en preflop como en postflop, que es por lo que es el único straddle con un argumento posicional genuino. No está permitido en todas las salas.

**Q. ¿Qué es un sleeper straddle?**

A. Un sleeper straddle es una ciega puesta desde un asiento que no es UTG y que se queda inactiva ("dormida") a menos que la acción foldee hasta llegar a ella. En la mayoría de salas no compra la opción de subir ni concede posición como sí hace un straddle vivo. Es poco común y rara vez se ofrece online — confirma siempre la regla de la casa.

**Q. ¿Se permite el straddle en torneos?**

A. Casi nunca. Los torneos dependen de una estructura fija de ciegas que debe ser idéntica en todas las mesas, así que una ciega extra voluntaria rompería el formato. El straddle es básicamente una opción exclusiva del cash game, e incluso ahí depende de las reglas de la casa de cada sala.

**Q. ¿Es rentable el straddle? ¿Deberías ponerlo?**

A. Para la mayoría de jugadores, no — es una jugada -EV. Comprometes dinero a ciegas, comprimes tu ratio stack-bote (lo que significa que deberías jugar menos manos, no más) e inflas el rake. Solo es defendible en mesas loose-passive, en partidas donde ya todos straddlean, o puramente por diversión — nunca como forma de ganar dinero.

---

## Las 3 cosas que debes recordar

1. **Un straddle es una tercera ciega opcional, normalmente 2× la ciega grande,** puesta antes de las cartas — dobla la apuesta y compra la última acción en preflop.
2. **El tipo decide la posición.** Un straddle UTG es el último solo en preflop; un Mississippi o button straddle conserva la última acción también en postflop. Todo depende de las reglas de la casa.
3. **Es -EV para casi todo el mundo.** Comprometerte a ciegas, inflar el bote fuera de posición y alimentar el rake pesan más que la diversión. Straddlea por la imagen en la mesa o por el entretenimiento, no por el beneficio.

Ahora que conoces la ciega extra, afina los fundamentos que distorsiona: [qué hacen de verdad las ciegas](/es/blog/holdem-blind-meaning), [por qué la posición gana dinero](/es/blog/holdem-position-play), y [cómo funcionan las acciones de apuesta y las subidas](/es/blog/holdem-betting-actions) una vez que el straddle resetea el precio.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Reglas</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿Qué son las ciegas en póker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">La ciega pequeña y la grande sobre las que se construye un straddle</div>
  </a>
  <a href="/es/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo la posición lo cambia todo</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué la posición de un straddle importa más que su tamaño</div>
  </a>
  <a href="/es/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Reglas</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Acciones de apuesta: pasar, igualar, subir</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cómo se resetea el precio tras un straddle</div>
  </a>
  <a href="/es/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneos vs cash games</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué los straddles son cosa solo de cash games</div>
  </a>
</div>
`.trim(),
};

export default POST;
