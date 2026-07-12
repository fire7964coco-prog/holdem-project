import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Reglas del all-in en Texas Hold'em: side pots, resubidas y showdown",
  seoTitle: "¿All-in y no sabes qué ganas? — Reglas del all-in y side pots",
  desc: "Vas all-in y el dealer separa las fichas en dos montones. Reglas del all-in en Texas Hold'em: table stakes, bote principal, side pots, resubidas y showdown.",
  tldr: "Ir all-in es apostar todas las fichas que tienes delante. Solo puedes ganar de cada rival lo que hayas igualado (el bote principal); las fichas extra de los stacks más grandes forman un side pot que no puedes tocar. Un all-in menor que una subida completa NO reabre la apuesta para quienes ya actuaron.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-12",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "reglas all in poker",
    "all in texas holdem",
    "side pot poker",
    "bote lateral poker",
    "que pasa si vas all in en poker",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in en Texas Hold'em — un jugador empuja todas sus fichas al centro mientras el dealer separa el bote principal y el side pot sobre el tapete verde",
  content: `
Estás corto de fichas. Lo metes todo. El jugador de detrás paga. Un tercero resube. El dealer empieza a separar las fichas en dos montones.

Y tú no tienes ni idea de qué está pasando.

Yo he estado en esa mesa. La primera vez que fui all-in en una partida de cash en vivo no sabía si aún podía ganar algo, si el otro jugador podía resubir, ni siquiera cuál de los montones de fichas era el mío. Nadie me lo explicó.

==Esta guía cubre todas las situaciones: bote principal, side pots, quién puede resubir y el orden del showdown.== Se acabó quedarse helado cuando el dealer empieza a contar stacks. (Si el flujo básico de apuestas todavía te baila, la [guía de reglas para principiantes](/es/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") lo explica desde cero.)

## ¿Qué significa ir all-in en Texas Hold'em?

Ir all-in significa apostar todas las fichas que tienes delante. Una vez las metes, no puedes añadir más — y nadie puede obligarte a retirarte.

La base es la regla de **table stakes**: solo puedes apostar las fichas que tenías sobre la mesa al empezar la mano. No puedes sacar dinero del bolsillo, pedirle prestado a un amigo ni apostar el reloj o las llaves del coche — eso es póker de película.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Término | Qué significa |
|------|---------|
| Push / Shove / Jam | Jerga en inglés para ir all-in |
| Table stakes | Solo puedes apostar lo que tenías al empezar la mano |
| Doblarte (double up) | Ganar un all-in y duplicar tu stack |
| Bote principal (main pot) | El bote que todos — incluido el jugador all-in — pueden ganar |
| Side pot (bote lateral) | Fichas que solo pueden ganar los stacks grandes; el jugador all-in queda fuera |

</div>

==g:Una vez estás all-in, tienes garantizado ver todas las cartas comunitarias que quedan.== Nadie puede echarte de la mano con un farol. Tus cartas siguen vivas hasta el river.

---

## Cómo se declara el all-in

Hay dos formas válidas:

**1. Declaración verbal** — Di "all-in" alto y claro, que lo oigan el dealer y los rivales. Es el método más seguro. En cuanto lo dices, estás comprometido.

**2. Empujar todas las fichas** — Desliza todo tu stack hacia el centro en un solo movimiento limpio. Mover las fichas en varias tandas puede parecer un string bet, así que muévelo todo de una vez.

![Showdown de un all-in en Texas Hold'em — una mesa con K♠ 10♣ 7♦ 4♥ 2♣ y las fichas separadas en bote principal y side pot etiquetados](/images/holdem-all-in-declare.webp)

==r:Nunca empujes una sola ficha sin decir nada — el dealer la contará solo por el valor de esa ficha, no como tu stack completo.== Declara siempre "all-in" en voz alta o mueve todo el stack de una vez.

---

## ¿Cómo funcionan los side pots en el póker? (Por qué el jugador all-in queda capado)

El jugador all-in solo puede ganar lo que puso multiplicado por el número de rivales que lo igualaron. Todas las fichas apostadas por encima forman un **side pot** que pertenece en exclusiva a los jugadores que lo alimentaron.

![Side pot tras un all-in en Texas Hold'em — el dealer separa las fichas en bote principal y side pot mientras el Jugador A queda capado](/images/holdem-all-in-side-pot.webp)

### Ejemplo con 3 jugadores (el caso estándar)

| Jugador | Stack | Acción |
|--------|-------|--------|
| Jugador A | 100 fichas | All-in |
| Jugador B | 300 fichas | Paga 100 y apuesta 50 más |
| Jugador C | 300 fichas | Paga 100 y paga los 50 |

**Bote principal:** 100 × 3 = **300 fichas** (pueden ganarlo A, B y C)

**Side pot:** 50 × 2 = **100 fichas** (solo B y C)

==El Jugador A puede ganar el bote principal de 300 fichas en el showdown. Pero aunque A tenga la mejor mano de todas, no puede tocar el side pot de 100 fichas.== Se lo llevará B o C.

### Ejemplo con 4 jugadores y stacks distintos

Aquí es donde la cosa se complica — y donde se pierde la mayoría de los principiantes.

| Jugador | Stack | Va all-in por |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | lo paga todo |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bote | Cantidad | Quién puede ganarlo |
|:---|:---:|:---|
| Bote principal | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A está capado) |
| Side pot 2 | 300 × 2 = **600** | C, D (A y B capados) |
| **Total** | **1.300** | — |

</div>

La regla: ==cada side pot se construye tomando la diferencia hasta el siguiente stack más pequeño × el número de jugadores que la cubren.== Se calcula del stack más pequeño al más grande.

---

## ¿Ir all-in reabre la apuesta? — La regla que casi todos se saben mal

==r:Es la regla del all-in que más discusiones genera en las mesas en vivo — he visto a dos jugadores discutirla cinco minutos con toda la mesa esperando. Los dos estaban equivocados.==

**La regla:** si un jugador va all-in por **menos de una [subida completa](/es/blog/holdem-betting-actions)**, ese all-in NO reabre la apuesta para los jugadores que ya han actuado en esa ronda.

![Regla de la resubida tras un all-in en póker — el Jugador C va all-in por menos de una subida completa y el Jugador A solo puede pagar o retirarse](/images/holdem-all-in-reraise-rule.webp)

**Ejemplo:**

Ciegas $1/$2. Cuatro jugadores ven el flop.

1. El Jugador A apuesta $10.
2. El Jugador B sube a $25.
3. El Jugador C va all-in por **$30** (solo $5 más que la subida de B a $25 — no llega al incremento de una subida completa).

¿Qué pasa con el Jugador A y el Jugador D?

- El Jugador A ya actuó (apostó $10). Como el all-in de C por $30 es **menos que una subida completa** (que exigiría al menos $40 = $25 + $15 de subida mínima), la acción NO se reabre para el Jugador A. ==A solo puede pagar o retirarse — no puede resubir.==
- El Jugador D todavía no ha actuado — **D sí puede subir con normalidad**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Cantidad del all-in | ¿Subida completa? | ¿Reabre la apuesta? |
|--------------|-------------|-----------------|
| Menos de una subida completa | No | No — quienes ya actuaron solo pueden pagar o retirarse |
| Subida completa o más | Sí | Sí — todos pueden volver a resubir |

</div>

¿Por qué existe esta regla? Protege a los jugadores de verse forzados a subidas mayores por all-ins parciales. Una subida completa señala agresión real — el all-in de un stack corto por cuatro fichas, no.

### Caso avanzado: ¿y si varios jugadores van all-in cortos?

Esta es la versión que hace tropezar hasta a los regulares. Varios all-ins cortos pueden **sumar** una subida completa — y si sus incrementos combinados alcanzan el umbral, la apuesta se reabre para quienes ya actuaron.

Es la regla oficial de la TDA sobre la reapertura de la apuesta ("re-opening the bet"), y la mayoría de los casinos y salas la aplican.

**Ejemplo (ciegas $1/$2, en el flop):**

1. El Jugador A apuesta $10.
2. El Jugador B va all-in por **$14** (incremento de +$4 — por sí solo no es subida completa)
3. El Jugador C va all-in por **$21** (incremento de +$7 — por sí solo no es subida completa)

Incrementos combinados: $4 + $7 = **$11** — alcanza el umbral de subida mínima de $10.

**Resultado: la apuesta SE REABRE para el Jugador A.** A puede retirarse, pagar o resubir, aunque ni B ni C hicieran una subida completa por separado.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in de B | All-in de C | Incremento combinado | ¿Se reabre para A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — por debajo de $10 | ❌ No |
| $14 (+$4) | $21 (+$7) | $11 — alcanza los $10 | ✅ Sí |
| $15 (+$5) | $25 (+$10) | $15 — alcanza los $10 | ✅ Sí |

</div>

El umbral de subida mínima es siempre la *última apuesta o subida completa válida* — nunca un total acumulado cualquiera.

### Guía rápida de decisión — ¿este all-in reabre la apuesta?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situación | ¿Se reabre para quienes ya actuaron? |
|---|---|
| Un solo all-in < subida completa | ❌ No — solo pagar o retirarse |
| Un solo all-in ≥ subida completa | ✅ Sí — todos pueden resubir |
| Varios all-ins cortos, suma < subida completa | ❌ No |
| Varios all-ins cortos, suma ≥ subida completa | ✅ Sí |
| Jugador que AÚN no ha actuado | ✅ Siempre puede subir (pase lo que pase) |

</div>

---

## Reglas del showdown con all-in

Cuando la apuesta se cierra y hay un jugador all-in, esto es lo que ocurre en el showdown:

1. **Las cartas se ponen boca arriba.** En torneos, todas las manos implicadas en el all-in se muestran en cuanto termina la apuesta. En cash, primero aplica la [regla del último agresor en el showdown](/es/blog/holdem-showdown-rules) y después muestran los jugadores all-in.
2. **Los side pots se reparten primero.** El dealer resuelve primero el side pot creado más recientemente y va hacia atrás hasta el bote principal.
3. **Hablan las cartas.** La mejor mano gana cada bote al que tiene derecho — dé igual lo que los jugadores digan que llevan.
4. **Puede haber varios ganadores.** El Jugador A puede ganar el bote principal y el Jugador B el side pot. Ninguno se lo lleva todo solo por haber ganado "su" bote.

==g:Un jugador puede ganar el bote principal y perder el side pot. Ambos resultados son válidos.==

**Caso especial:** si en un side pot solo queda un jugador (los demás se retiraron), ese jugador recupera esas fichas de inmediato — para ese bote no hace falta showdown.

---

## ¿Qué pasa si vas all-in mal? — 5 errores que evitar

### Error 1: creer que el jugador all-in puede ganar el side pot

No puede. Una vez el jugador all-in queda capado, cualquier ficha extra apostada por los stacks más grandes va a un bote sobre el que no tiene ningún derecho.

### Error 2: no saberse la regla de quién puede resubir

Un all-in parcial del Jugador C no le da al Jugador A una segunda oportunidad de resubir. Sabértelo de memoria corta las discusiones antes de que empiecen.

### Error 3: añadir fichas del bolsillo a mitad de mano

Table stakes. Lo que hay en la mesa es todo lo que puedes apostar. Si estás all-in por $80 y el bote es de $400, solo puedes ganar $80 de cada jugador que pague.

### Error 4: tirar tu mano demasiado pronto

Estás all-in por el bote principal. Otros dos jugadores se pelean por el side pot. No tires tus cartas — tu mano sigue viva para el bote principal. ==Espera siempre a que el dealer resuelva todos los botes antes de tocar tus cartas.==

### Error 5: ir all-in por frustración

El all-in es el movimiento más poderoso de la mesa. Obliga a los rivales a una decisión de todo o nada. Ese poder desaparece cuando lo metes todo a lo loco. Úsalo en el momento justo — presión con stack corto, manos de valor con las que quieres que te paguen, faroles con fold equity real.

---

:::readnext[Sigue leyendo]
/es/blog/texas-holdem-rules-for-beginners | Reglas del Texas Hold'em para principiantes | /images/rules-texas-holdem.webp
/es/blog/holdem-showdown-rules | Las reglas del showdown, explicadas | /images/holdem-showdown-rules-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Se puede ir all-in por menos de la ciega grande?**

A. Sí. Si te quedan menos fichas que la ciega grande, cuando te toca ponerla quedas automáticamente all-in por lo que tengas. Los demás siguen pagando la ciega grande completa — todo lo que exceda tu aportación va a un side pot.

**Q. ¿Qué pasa si ganas el all-in pero pierdes el side pot?**

A. Te llevas el bote principal (lo que igualaste de cada jugador) y el otro jugador se lleva el side pot. Cada uno gana la parte a la que tenía derecho.

**Q. ¿Ir all-in te obliga a enseñar la mano?**

A. En torneos, sí — en cuanto se cierra la apuesta con un all-in, todas las manos implicadas se ponen boca arriba. En cash en vivo aplican las reglas normales del showdown: el último agresor enseña primero y el resto enseña o tira sus cartas.

**Q. ¿Se puede hacer "run it twice" en un all-in de póker?**

A. Repartir dos veces las cartas comunitarias restantes y dividir el bote (run it twice) se permite en muchas partidas de cash si ambos jugadores están de acuerdo tras el all-in. En torneos, por lo general, no se permite. Hay que acordarlo antes de repartir las cartas que faltan.

**Q. ¿En qué consiste exactamente la regla de "table stakes"?**

A. Table stakes significa que solo puedes apostar las fichas que tenías delante al empezar la mano. No puedes añadir dinero con la mano en juego. Protege a ambos lados: a ti nunca te pueden obligar a arriesgar más que tu stack, y el rival no puede apostar de golpe más de lo que puedes cubrir.

**Q. Si dos jugadores van all-in por cantidades distintas, ¿quién enseña primero?**

A. El último all-in cuenta como la última acción agresiva. Aplican las reglas normales del showdown: enseña primero el último que hizo un all-in o un movimiento agresivo. En cash, si fue un all-in pagado sin más acción, quien pagó puede tirar sus cartas si pierde tras ver la mano del jugador all-in (en torneos todas las manos implicadas quedan boca arriba).

**Q. ¿Las reglas del all-in cambian entre torneos y cash?**

A. El núcleo es el mismo, con dos diferencias prácticas. Primera: en torneos, todas las manos implicadas en un all-in se ponen boca arriba en cuanto se cierra la apuesta (Regla 16 de la TDA) — no puedes tirar tus cartas antes del showdown. En cash aplica el orden normal del showdown y sí se puede. Segunda: el run it twice es habitual en cash (si ambos jugadores aceptan), pero en torneos generalmente no se permite.

---

## Artículos relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guía pilar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del Texas Hold'em para principiantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Todas las reglas, de las ciegas al showdown</div>
  </a>
  <a href="/es/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del showdown</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quién enseña primero y cuándo puedes tirar tus cartas</div>
  </a>
</div>
`.trim(),
};
