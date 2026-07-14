import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "¿Nunca jugaste un torneo de póker? Así funciona",
  title: "Cómo funcionan los torneos de póker — buy-in, formatos y Día 1",
  desc: "¿Cómo funcionan los torneos de póker? Buy-in, estructura de ciegas, premios, formatos freezeout vs PKO vs satélite y checklist de Día 1 para novatos.",
  tldr: "En un torneo de póker pagas un buy-in fijo por fichas; las ciegas suben con el reloj hasta que un jugador tiene todas las fichas. El 10-15% de arriba cobra. Formatos: freezeout, PKO, satélite y deepstack — entras por buy-in directo, satélite o preinscripción online.",
  category: "tournament",
  date: "2026-06-16",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "Sala llena de un torneo de póker en vivo con el reloj de ciegas marcando 12,000/24,000 mientras los jugadores disputan una mano",
  tags: [
    "cómo funcionan los torneos de póker",
    "estructura torneo de póker",
    "estructura de ciegas torneo póker",
    "estructura de premios torneo póker",
    "tipos de torneos de póker",
    "torneo freezeout póker",
    "pko póker",
    "torneo satélite póker",
    "cómo jugar torneos de póker",
  ],
  content: `
Entré a mi primer torneo de póker en vivo con $200, una idea vaga de cómo funcionaba el Texas Hold'em y cero noción de qué significaba un "nivel de ciegas" o una "burbuja".

Cuatro horas después estaba fuera. Pero sabía exactamente qué quería decir cada término, por qué perdí y cuándo volver.

Esta guía es todo lo que ojalá me hubieran contado antes de aquel día — cómo funciona de verdad la estructura de un torneo, en qué formato estás entrando, cómo registrarte sin parecer un novato y cómo se vive el Día 1 hora a hora.

---

### De un vistazo

:::stripe
10-15% | del campo suele cobrar
20-40 min | por nivel de ciegas en eventos en vivo
$100+$9 | cómo se reparte un buy-in típico — bolsa de premios + comisión
:::

## ¿Qué es un torneo de póker? (respuesta en 30 segundos)

Un torneo de póker es una competición donde todos pagan la misma entrada (el **buy-in**), reciben el mismo número de fichas iniciales y juegan hasta que una sola persona tiene todas las fichas del juego.

**Resumen en una frase:** en un cash game tus fichas son dinero real y puedes irte cuando quieras. En un torneo, tu pérdida máxima es exactamente el buy-in — pero juegas por una parte de una bolsa de premios mucho más grande.

Esa única diferencia lo cambia todo desde la base: el valor de las fichas, la presión de las ciegas y la estrategia. → Análisis completo: [Torneos vs cash games en póker: ¿qué deberías jugar?](/es/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## Estructura de un torneo de póker — buy-in, comisiones y stacks iniciales

Cuando te registras, pagas un buy-in. Ese dinero se reparte en dos partes:

| Buy-in de $109 (escrito como "$100+$9") | A dónde va |
|:---|:---|
| **$100** | → Bolsa de premios, repartida entre todos los inscritos |
| **$9** | → Comisión de la casa (rake) que se queda el local |

Los grandes eventos en vivo suelen quedarse con un 8-10% del buy-in como comisión (los torneos diarios pequeños a menudo cobran más) — aquí $9 de $109, alrededor del 8.3%. Cómo funciona esa comisión (y por qué online difiere del vivo) lo cubre nuestra guía de [cómo funciona el rake en póker](/es/blog/holdem-rake).

A cambio, recibes un **stack inicial** — habitualmente de 10,000 a 50,000 fichas de torneo, normalmente entre 100 y 300 ciegas grandes de profundidad en el Nivel 1.

**Tu stack inicial no tiene valor en dinero.** Un stack de 10,000 fichas no equivale a $10,000 — es simplemente tu vida en el torneo. Lo único que importa es si tienes más fichas que los demás jugadores cuando llegan los puestos de premio.

Todo torneo publica su estructura en una **hoja de estructura**: stack inicial, niveles de ciegas, duración de nivel, calendario de antes y premios. Pídela en el registro — es el documento más útil que hay en la sala.

---

## Estructura de ciegas de un torneo — niveles, antes y el reloj

Esto es lo que la mayoría de guías para principiantes se salta, y es el concepto mecánico más importante de los torneos.

**Las ciegas empiezan pequeñas y suben con un reloj — normalmente cada 20-40 minutos en eventos en vivo.**

| Nivel | Ciegas | Antes | Tu stack de 10k = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 ciegas grandes |
| 3 | 75 / 150 | 150 | 67 ciegas grandes |
| 6 | 200 / 400 | 400 | 25 ciegas grandes |
| 9 | 500 / 1,000 | 1,000 | 10 ciegas grandes |

Fíjate: **no perdiste ni una sola ficha** entre el Nivel 1 y el Nivel 9. Pero tu stack pasó de 200BB a 10BB porque las ciegas subieron. Así es como los torneos fuerzan la acción y acaban eliminando jugadores.

==g:Regla general: por debajo de 20 ciegas grandes estás en terreno de push-or-fold. Por debajo de 10 ciegas grandes, tienes que ir all-in con casi cualquier mano jugable antes de que las ciegas te coman vivo.==

Cuando llegues ahí, los rangos exactos de shove están en [estrategia de short stack — cuándo hacer push o fold](/es/blog/holdem-short-stack).

**¿Qué son los antes?** Pasados los primeros niveles, casi todos los torneos añaden un "ante" — una apuesta forzosa extra que se recoge cada mano encima de las ciegas. En la mayoría de eventos en vivo modernos es un único "big blind ante" igual a una ciega grande, que paga el jugador de la ciega grande en nombre de toda la mesa (por eso la columna de antes de arriba coincide con la ciega grande). Esto aumenta el tamaño del bote y acelera el juego. Cuando entran los antes, tus fichas se encogen aún más rápido.

¿Nuevo del todo con las ciegas? Empieza por [qué son de verdad la ciega pequeña y la ciega grande](/es/blog/holdem-blind-meaning) — hace que cada número "BB" de arriba tenga sentido.

---

## Las 4 fases por las que pasa todo torneo

### Fase 1 — Niveles tempranos (100-200 BB de profundidad)
Tienes margen para jugar. Manos especulativas, buscar trío (set-mining), ver flops — todo razonable. La mayoría de principiantes juega demasiado tight aquí. Las ciegas son baratas; aprende a leer la mesa.

### Fase 2 — Etapas medias (30-60 BB)
Para ahora los antes suelen estar en juego. Empieza la presión de stack. Los jugadores con stacks cortos empiezan a ir all-in. Aquí es donde se elimina a la mayor parte del campo.

### Fase 3 — La burbuja
La fase más estresante. Una eliminación más y todos los que quedan **cobran** (ITM = In The Money, en premios). Los short stacks se congelan. Los stacks grandes intimidan. Jugar bien aquí puede sumar equity real sin ganar un solo bote — [la burbuja merece su propia guía](/es/blog/holdem-bubble).

### Fase 4 — Mesa final
Suelen quedar 6-9 jugadores. Los premios suben con fuerza en cada eliminación. El [ICM (el Independent Chip Model)](/es/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") gobierna las decisiones aquí — el EV en fichas y el EV en dinero real divergen de forma notable.

---

## Tipos de torneos de póker — freezeout, PKO, satélite, deepstack y más

| Formato | Cómo funciona | Ideal para |
|:---|:---|:---|
| **Freezeout** | Un buy-in, sin recompra. Bustear = fuera. | Principiantes — coste fijo |
| **Recompra (rebuy) / Re-entry** | Vuelves a pagar tras bustear (durante los niveles tempranos) | Jugadores agresivos con más bankroll |
| **Bounty / KO** | Ganas una recompensa fija por cada jugador que eliminas | Jugadores de acción — ingreso extra por knockout |
| **PKO (KO Progresivo)** | Los bounties crecen con cada knockout — parte se te paga, parte se suma a tu cabeza | Jugadores de alta varianza y gran upside |
| **Deepstack** | Stacks iniciales más grandes (normalmente 100-200BB+) con niveles más lentos | Jugadores que quieren más juego postflop |
| **Satélite** | El premio = una entrada a un torneo mayor, no dinero | Jugadores con presupuesto que apuntan a grandes eventos |
| **MTT** | Multi-Table Tournament — campo grande repartido en muchas mesas | Cualquiera — el formato más común |
| **SNG (Sit & Go)** | Arranca cuando se llenan los asientos (sin hora fija) — normalmente 6-9 jugadores | Partida rápida, sin depender del horario |

**Para principiantes:** empieza con un **Freezeout MTT** — coste conocido, reglas simples, sin decisiones de recompra que te estresen.

Los tres nombres de formato que verás más a menudo en un calendario de torneos merecen una definición como Dios manda:

### ¿Qué es un torneo freezeout de póker?

Un torneo freezeout da a cada jugador exactamente un buy-in. Pierdes tus fichas y quedas eliminado — sin recompras, sin re-entries. Es el formato de torneo original, y el mejor para principiantes porque tu coste total queda fijado en el momento en que te registras.

### ¿Qué es el póker PKO? (Knockout Progresivo)

Un PKO (Progressive Knockout) es un torneo de bounty donde normalmente alrededor de la mitad de cada buy-in va a la bolsa de premios habitual y la otra mitad se convierte en un bounty sobre la cabeza de ese jugador. Cuando eliminas a alguien, normalmente cobras parte de su bounty en efectivo al instante, y el resto se suma a tu propio bounty — lo que te convierte en un objetivo mayor a medida que ganas. El reparto exacto varía según la sala y el evento; el 50/50 es común pero no universal, así que revisa el lobby o la hoja de estructura. (Pronto llegará a este clúster una guía completa de estrategia PKO.)

### ¿Qué es un torneo deepstack de póker?

Un torneo deepstack te arranca con muchas más fichas en relación con las ciegas — normalmente 100 ciegas grandes o más, a menudo 200BB+ — y suele acompañarlo con niveles de ciegas más largos. Más fichas y un reloj más lento significan más juego postflop, más margen para recuperarte de un error y jornadas más largas.

**¿Y las recompras y los add-ons?** En un evento con recompra puedes volver a pagar tras bustear durante una ventana temprana fijada; un add-on es una compra de fichas opcional única que suele ofrecerse cuando esa ventana se cierra. Después de eso, el evento se juega como un freezeout.

---

## ¿Qué es un torneo satélite de póker?

Un satélite es un torneo más pequeño donde el premio no es dinero — es **una entrada** a un torneo mayor y más caro.

**Ejemplo:**
- Buy-in del WSOP Main Event: **$10,000**
- Buy-in del satélite: **$500** (20 jugadores)
- Premio: **1 asiento** en el Main Event

En lugar de gastar $10,000, compites en un torneo de $500 contra otros 19 jugadores. Una persona gana el asiento de $10,000.

**Los satélites encadenados** bajan aún más. Un súper-satélite de $5 → clasificatorio de $55 → evento de $215 → Main Event de $1,050. Muchos jugadores en grandes eventos entraron a través de una cadena de satélites por una fracción del buy-in directo.

==g:La estrategia de satélite es distinta a la de un torneo normal — una vez tienes fichas suficientes para asegurar el asiento, deja de arriesgar. Foldea incluso buenas manos para no bustear en la burbuja.==

---

## Cómo entrar a un torneo de póker — 3 formas

### Opción A: Buy-in directo en el casino (la más fácil)
1. Localiza el mostrador de registro de la sala de póker (o el mostrador de torneos en eventos grandes)
2. Presenta un **documento con foto válido** + tarjeta de fidelización si la piden
3. Paga el buy-in en efectivo, fichas o tarjeta
4. Recibe tu ticket de asiento (número de mesa + número de asiento)
5. Ve a tu mesa, entrega el ticket al repartidor y recibe tus fichas
6. Cuenta tu stack inicial antes de jugar tu primera mano — los errores pasan

### Opción B: Preinscripción online
La mayoría de grandes festivales en vivo te dejan registrarte online por adelantado:
- Crea una cuenta en la plataforma del evento (p. ej., Bravo Poker Live para la WSOP, la app PokerStars Live para eventos EPT/APPT)
- Paga el buy-in online
- Llega a la sede → verificación de identidad → imprime el ticket de asiento en un kiosco o recógelo en el mostrador
- Te saltas la cola de registro — vale la pena para eventos grandes

### Opción C: Clasificatorio por satélite
- Busca torneos satélite online (PokerStars Power Path, GGPoker SuperSatellites) o presenciales
- Gana el satélite → recibe un ticket de asiento para el evento objetivo
- Llega al mostrador de registro del evento principal → presenta el ticket + documento → recibe el ticket de asiento

**El registro suele abrir 1-3 horas antes del inicio del torneo.** Para grandes festivales, regístrate el día anterior online para asegurar tu asiento.

¿Juegas en Asia? Consulta la [guía del APT Incheon 2026](/es/blog/apt-incheon-2026-guide) para ver el calendario, los buy-ins y el flujo de registro de un festival real.

---

## Cómo jugar torneos de póker — estrategia por fase

Un solo post no puede enseñar toda la estrategia de torneo — para eso están las guías del clúster — pero aquí tienes el esqueleto fase por fase del que cuelga todo plan ganador:

**Niveles tempranos (100BB+):** juega un póker tight y consciente de la posición, y ve flops baratos con manos capaces de reventar parejas grandes. Una [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart) disciplinada evita la mayoría de desastres de principiante. No te fundas el stack faroleando en la primera hora — nadie foldea en el Nivel 1.

**Etapas medias (30-60BB):** los antes hacen que valga la pena pelear cada bote. Abre más ligero desde posición tardía, roba ciegas, defiende más a menudo tu ciega grande y empieza a fichar quién va corto de fichas en tu mesa.

**Short stack (menos de 20BB):** el push-or-fold toma el control — la matemática aquí está prácticamente resuelta, y adivinar cuesta dinero real. Aprende los rangos de shove en [estrategia de short stack](/es/blog/holdem-short-stack).

**Burbuja y mesa final:** la matemática de la supervivencia se impone a la de las fichas. La presión de los premios cambia qué manos puedes jugar — las guías de burbuja e ICM enlazadas en la sección de fases de arriba cubren exactamente cómo.

---

## Qué pasa en el Día 1 — hora a hora

Esto es lo que ninguna otra guía te cuenta. Aquí tienes una cronología realista de Día 1 para un freezeout en vivo de $300 con inicio a las 12pm:

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Cronología de Día 1 — Freezeout de $300, 10,000 fichas iniciales</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">10:30am</div>
<div style="color:var(--foreground)">Abre el registro. Muestra documento, paga, recibe el ticket de asiento. Localiza tu mesa.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">12:00pm</div>
<div style="color:var(--foreground)">Cartas al aire. Nivel 1: ciegas 25/50. Tienes 200BB. Juega un póker exploratorio.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">1:00-3pm</div>
<div style="color:var(--foreground)">Niveles 2-4. El registro tardío sigue abierto. El campo crece. Algunos jugadores ya bustean.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~3:30pm</div>
<div style="color:var(--foreground)">Cierra el late reg. Se anuncia el tamaño final del campo. Se confirma la bolsa de premios. Entran los antes.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~5:00pm</div>
<div style="color:var(--foreground)">Pausa para cenar (normalmente 1 hora). ~40% del campo eliminado. Se consolidan las mesas.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">6-9pm</div>
<div style="color:var(--foreground)">Se acerca la burbuja. Empieza el juego mano por mano (hand-for-hand). La presión llega al máximo. Un busteo = todos cobran.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">9-11pm</div>
<div style="color:var(--foreground)">ITM — estalla la burbuja de premios. Los que quedan embolsan fichas o juegan a una mesa final esta misma noche.</div>
</div>
</div>
</div>

---

## Estructura de premios de un torneo — quién cobra qué

**Estructura típica:** el 10-15% superior del campo cobra.

| Tamaño del campo | Jugadores pagados | Min-cash (típico) | 1.er puesto (típico) |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1.5-2x buy-in | 25-30% de la bolsa |
| 500 | ~60 | 1.5-2x buy-in | 20-25% de la bolsa |
| 2,000 | ~250 | 1.7-2.2x buy-in | 13-18% de la bolsa |
| 10,000 | ~1,200 | 1.5-2x buy-in | 8-12% de la bolsa |

**Ejemplo real (WPT Seminole Rock 'N' Roll Poker Open Championship 2024, buy-in de $3,500, 1,435 inscritos):**
- Bolsa de premios: $4,592,000 ($3,200 de cada buy-in va a la bolsa — el resto es la comisión)
- Jugadores pagados: 181 (~12.6% del campo)
- Min-cash: aproximadamente 1.5x el buy-in
- 1.er puesto: $662,200 (~14% de la bolsa de premios)

La estructura de premios siempre se anuncia antes de que empiece el torneo. Pide la **hoja de estructura** en el registro — lista los niveles de ciegas, los antes, el stack inicial y el calendario de premios.

---

## Glosario de torneo — términos que oirás en el Día 1

Estos 13 términos cubren casi todo lo que oirás en la mesa. Para la A a la Z completa, consulta el [glosario de póker](/es/blog/holdem-glossary).

| Término | Qué significa |
|------|--------------|
| **ITM** | In The Money — has llegado a un puesto que cobra |
| **Burbuja** | La fase justo antes del ITM — a una eliminación de que todos cobren |
| **Mano por mano (hand-for-hand)** | Todas las mesas juegan una mano a la vez durante la burbuja para evitar el juego lento |
| **Hoja de estructura** | El documento oficial que lista niveles de ciegas, antes y premios |
| **Chip leader** | El jugador con más fichas |
| **Short stack** | Un jugador con muy pocas fichas en relación con las ciegas |
| **Shove / JAM** | Ir all-in (empujar todo tu stack al centro) |
| **Late reg** | Ventana de registro tardío — puedes entrar después de que empiece el torneo |
| **Re-entry** | Volver a inscribirte tras bustear (solo durante la ventana de late reg) |
| **Satélite** | Un torneo clasificatorio donde el premio es un asiento en un evento mayor |
| **PKO** | Progressive Knockout — torneos de bounty donde el premio crece |
| **ICM** | Independent Chip Model — un marco matemático para el valor de las fichas de torneo |
| **Min-cash** | El puesto de premio más bajo — el mínimo que ganas por entrar en premios |

---

## Checklist para tu primer torneo

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Antes de salir de casa</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Documento con foto válido</strong> — pasaporte o carné de conducir. Sin excepciones.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Buy-in + 20% extra</strong> en efectivo — algunos locales no aceptan tarjeta</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Tarjeta de fidelización del casino</strong> si la piden (p. ej., Caesars Rewards para la WSOP)</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Email de confirmación del registro</strong> si te preinscribiste online</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Ropa cómoda — los torneos duran 6-12 horas. Lleva una chaqueta (las salas de póker son frías).</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:var(--primary);margin:16px 0 10px">En la sede</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Llega 30-45 min antes del inicio. Las colas de registro pueden ser largas.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Cuenta tus fichas iniciales antes de jugar tu primera mano. Avisa al repartidor de inmediato si vas corto.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Pide la hoja de estructura — sabe cuándo entran los antes y cuándo es la pausa para cenar.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>Nada de móviles en la mesa mientras se juega una mano</strong> — la mayoría de salas de póker lo penalizan.</span></div>
</div>
</div>

---

:::readnext[Sigue leyendo]
/es/blog/holdem-tournament-vs-cash-game | Torneos vs cash games | /images/tournament-table-action.webp
/es/blog/holdem-bubble | ¿Qué es la burbuja en póker? | /images/holdem-bubble-hero.webp
/es/blog/apt-incheon-2026-guide | Guía del APT Incheon 2026 | /images/apt-incheon-2026-guide-hero.webp
:::

## FAQ

**Q. ¿Cuánto dura un torneo de póker?**

A. Los torneos diarios en casinos locales suelen durar 4-8 horas. Los eventos de grandes series como los campeonatos del WPT duran 4-6 días con varias jornadas de embolsado — y el WSOP Main Event se alarga cerca de dos semanas desde sus jornadas de Día 1 hasta la mesa final. Cuando te registres, pide la hoja de estructura — te dirá la duración de jornada esperada según la duración de los niveles de ciegas y el tamaño inicial del campo.

**Q. ¿Cuál es la diferencia entre un PKO y un torneo de bounty?**

A. En un torneo de bounty (knockout) normal, cada jugador lleva un bounty fijo — eliminas a alguien y cobras el importe completo, y los bounties nunca cambian. En un PKO (Progressive Knockout), los bounties crecen: normalmente cobras parte del bounty del jugador eliminado y el resto se suma al bounty sobre tu propia cabeza. Eso hace que los chip leaders de un PKO sean objetivos cada vez más valiosos a medida que avanza el evento.

**Q. ¿Cuáles son las reglas de las recompras y los add-ons?**

A. En un torneo con recompra puedes volver a pagar la entrada tras bustear (o a veces cuando tu stack cae por debajo de un umbral), pero solo durante un periodo de recompra fijado — normalmente los primeros niveles de ciegas. Un add-on es una compra de fichas opcional única, que suele ofrecerse a todos al final del periodo de recompra sin importar el tamaño del stack. Una vez que esa ventana se cierra, el evento se juega como un freezeout. Las reglas exactas varían según el local, así que revisa la hoja de estructura.

**Q. ¿Es legal organizar un torneo de póker en casa?**

A. Depende de tu jurisdicción. En muchos lugares, las partidas privadas y sociales en casa son legales siempre que el anfitrión no se lleve rake, un corte de la entrada ni beneficio más allá de jugar — todo el dinero vuelve a los jugadores. Cobrar una comisión de la casa, quedarse un porcentaje de la bolsa de premios o anunciarlo públicamente es lo que normalmente convierte una partida casera en juego ilegal. Las leyes varían mucho según el país y la región, así que revisa la normativa local antes de organizarla.

**Q. ¿Qué significa ITM en póker?**

A. ITM = "In The Money" (en premios). Has llegado a un puesto de clasificación que garantiza un pago. En un torneo de 200 jugadores que paga 25 puestos, estás ITM una vez que 175 jugadores han sido eliminados y solo quedan 25. Tu min-cash suele ser 1.5-2x tu buy-in.

**Q. ¿Puedes unirte a un torneo de póker después de que haya empezado?**

A. Sí, durante la ventana de registro tardío — normalmente los primeros niveles de ciegas, a menudo dos a cuatro horas después del inicio. Sigues recibiendo el stack inicial completo, pero como las ciegas han subido te sentarás con menos ciegas grandes que los que entraron pronto. Una vez que el late reg cierra, no se permiten nuevas entradas.

**Q. ¿Puedes irte pronto de un torneo de póker y quedarte con tus fichas?**

A. No. A diferencia de un cash game, las fichas de torneo no tienen valor en dinero y no se pueden cambiar por efectivo a mitad de evento. Si te levantas, tus fichas se quedan en juego y siguen pagando ciegas y antes hasta que desaparecen. Solo cobras si terminas en un puesto de premio (ITM).

---

## Guías relacionadas

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Análisis a fondo</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneos vs cash games</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Valor de fichas, ciegas crecientes, ICM — qué formato encaja contigo</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Qué manos jugar en los niveles tempranos</div>
  </a>
  <a href="/es/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Short Stack</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estrategia de short stack</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Push-or-fold cuando las ciegas te aprietan</div>
  </a>
  <a href="/es/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Empieza aquí</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del Texas Hold'em para principiantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Domina primero lo básico</div>
  </a>
  <a href="/es/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ciegas</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿Qué son las ciegas en póker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Los niveles de ciegas empiezan aquí — SB, BB y antes</div>
  </a>
  <a href="/es/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Posiciones</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Las posiciones en la mesa de póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué tu asiento marca cada decisión del torneo</div>
  </a>
</div>
`.trim(),
};
