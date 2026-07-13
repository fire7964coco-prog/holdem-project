import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Tabla de manos iniciales de póker y las mejores manos",
  seoTitle: "¿Foldear el 80% de tus manos? — Tabla de manos iniciales",
  desc: "La mayoría de tus cartas pierden dinero. Las mejores manos iniciales, la tabla completa por posición y en 6-max, y GTO vs principiante.",
  tldr: "De los 169 tipos de mano inicial, solo una pequeña franja superior — cerca del 15–20% de las manos que te reparten — es rentable para un principiante. Los pares grandes (AA–TT) y AK suben desde cualquier asiento; cuanto más tarde actúas, más abres tu rango — desde ~12% en UTG hasta ~42% en el botón (más amplio aún en 6-max). Empieza con una tabla simplificada y añade las tablas GTO de preflop cuando el subir-o-foldear ya te salga automático.",
  category: "strategy",
  date: "2026-06-14",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🂡",
  tags: [
    "buenas manos iniciales poker",
    "tabla manos iniciales poker",
    "gto preflop charts",
    "porcentaje manos iniciales",
    "manos iniciales 6-max",
  ],
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Tabla de manos iniciales de Texas Hold'em con los grupos Premium (AA KK QQ JJ AK), Fuertes (TT 99 AQ KQ) y Fold por posición de UTG al botón",
  content: `
En mi primera sesión en vivo me repartieron A♣ 4♦ y pensé "es un as, no puede ser tan malo".

Igualé una subida, fallé el flop, volví a igualar, fallé el turn. Para cuando llegó el river había perdido 40 ciegas grandes sin nada.

Aquí tienes la matemática incómoda detrás de esa mano: ==el Texas Hold'em tiene 169 tipos distintos de mano inicial — y en torno al 80% de las manos que te reparten deberías foldearlas en preflop.== Aprender qué manos jugar — y desde qué asiento — es la mayor mejora que hace un principiante en su primer mes. La selección de manos es la segunda de las [cinco decisiones](/es/blog/holdem-strategy) que hay detrás de cada mano ganadora: acierta con ella y cada calle posterior se vuelve más fácil.

Esta página es la versión todo-en-uno: las 10 mejores manos iniciales, qué hace que una mano sea *buena* en primer lugar, la tabla de manos iniciales completa por posición (9-max y 6-max), las tablas GTO de preflop frente a las tablas para principiantes, una chuleta imprimible en PDF y un test rápido para ponerte a prueba.

---

### Las manos iniciales, en cifras

:::stripe
169 | Tipos distintos de mano inicial (1,326 combinaciones exactas)
~80% | Manos que un principiante debería foldear en preflop
~12% → ~42% | Rango de apertura desde UTG hasta el botón (9-max)
~85% | Con qué frecuencia AA gana a una mano aleatoria
:::

---

## Las 10 mejores manos iniciales del póker, ordenadas

Estas son las mejores manos iniciales del póker — las que casi siempre deberías subir en preflop, desde cualquier asiento de la mesa:

| Puesto | Mano | Por qué es fuerte |
|-----:|------|-----------------|
| 1 | AA | La mejor mano preflop — ~85% favorita frente a una mano aleatoria |
| 2 | KK | Solo pierde contra AA en preflop — sube y resube igualmente |
| 3 | QQ | Fuerte, pero reevalúa cuando aparezca un A o una K en el flop |
| 4 | JJ | Premium — sube fuerte, frena ante mucha acción en flops con A/K/Q |
| 5 | TT | Mano del top-5 — sube si eres el primero en entrar, pero ojo con los 3-bets grandes |
| 6 | AKs | As-rey del mismo palo — domina a las demás cartas altas y hace el proyecto de color nut |
| 7 | AKo | AK de distinto palo — sube desde cualquier posición |
| 8 | AQs | AQ del mismo palo — fuerte, pero foldea ante 3-bets grandes fuera de posición |
| 9 | KQs | KQ del mismo palo — buena en posición tardía, más delicada desde UTG |
| 10 | AJs | AJ del mismo palo — fuerte en posición, foldea ante mucha resistencia |

![Cuatro manos iniciales premium de Texas Hold'em — pareja de ases, pareja de reyes, pareja de reinas y as-rey del mismo palo — brillando en dorado sobre el tapete verde](/images/holdem-starting-hands-premium.webp "El nivel premium — manos que puedes subir desde cualquier posición")

==g:Con las manos 1–5 (los pares servidos), sube siempre y a menudo resube en preflop para agrandar el bote.== Con AK y AQ, el objetivo es llegar mano a mano, donde tus cartas altas tienen la máxima equity. Un número que vale la pena memorizar: AK es más o menos un ==coin flip contra cualquier par servido menor== (la clásica "carrera") y ronda el 43–46% frente a QQ — lo bastante cerca como para que subir y resubir con AK siga siendo correcto.

Pocket rockets, cowboys, big slick — si la jerga de la mesa te suena nueva, el glosario de póker cubre todos los apodos de manos. Y si no tienes claro qué gana a qué cuando cae la mesa, repasa antes las [jerarquías de manos de póker](/es/blog/holdem-hand-rankings).

---

## ¿Qué cuenta como una buena mano inicial en el póker?

Las buenas manos iniciales del póker comparten un rasgo: ==forman manos fuertes de *cinco cartas* más a menudo que las manos con las que se cruzan.== Los pares altos empiezan por delante. Las cartas altas del mismo palo hacen pareja máxima con el mejor kicker, colores nut y escaleras altas. Todo lo demás necesita ayuda — y las manos que necesitan ayuda solo valen la pena cuando esa ayuda sale barata.

Ordenadas por niveles, las buenas manos iniciales del póker se ven así:

| Nivel | Ejemplos | Cómo jugarla |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Sube desde cualquier posición, resube con agresividad |
| Fuertes | TT–88, AQ, AJs, ATs, KQs | Sube desde casi todas las posiciones, frena ante 3-bets grandes |
| Especulativas | Pares bajos (77–22), conectores del mismo palo (JTs, T9s, 98s), ases del mismo palo (A2s–A9s) | Solo en posición tardía — necesitan flops baratos y posición |
| ==r:Basura== | Ases débiles de distinto palo (A4o), rey-basura (K3o), morralla baja de distinto palo | ==r:Foldea en preflop — te cuestan fichas cada sesión== |

:::tip[El nivel es solo la mitad de la respuesta. Una mano especulativa es "buena" en el botón y mala en UTG — por eso la tabla de verdad se organiza por posición, no por mano.]:::

---

## Tabla de manos iniciales de póker por posición (tabla 9-max completa)

==Tu posición en la mesa cambia qué manos son rentables.==

Desde posición temprana, muchos jugadores aún actúan después de ti — así que necesitas manos más fuertes. Desde el botón, actúas último en cada calle postflop, lo que significa que puedes jugar de forma rentable un rango mucho más amplio.

Aquí tienes la tabla de manos iniciales de póker para una mesa estándar de 9-max:

| Posición | Rango de apertura | Manos clave que jugar |
|----------|-----------|-------------------|
| UTG (Temprana) | Top ~12% | TT+, AJs+, AKo, KQs |
| MP (Media) | Top ~17% | Añade 88, 99, ATs, KJs, QJs, JTs |
| CO (Cutoff) | Top ~26% | Añade 55–77, A9s+, KTs+, conectores del mismo palo (T9s, 98s) |
| BTN (Button) | Top ~42% | Añade 22–44, A2s+, broadways del mismo palo, manos más flojas de distinto palo |

La regla: ==cuanto más tarde actúas, más manos puedes abrir de forma rentable==. Como el botón siempre actúa último postflop, es el asiento más valioso del póker.

Explora la cuadrícula completa con código de colores — cada una de las 169 manos por posición:

:::rangechart:::

¿La quieres como herramienta independiente con rangos ampliados por asiento? Usa la [herramienta de tabla de manos iniciales de Texas Hold'em](/hand-chart). Para un desglose de cada nombre de asiento (UTG, HJ, CO, BTN, SB, BB), consulta la [guía de posiciones de póker](/es/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Posición temprana (UTG): el rango más cerrado

UTG es el asiento más difícil de jugar. ==r:Seis o más jugadores aún actúan detrás de ti.== Cualquier mano que abras aquí tiene que aguantar contra rangos fuertes.

El núcleo del rango de UTG (un rango completo de ~12% añade unas cuantas manos más del mismo palo a medida que mejoras):

- Pares servidos: **TT, JJ, QQ, KK, AA**
- Premium del mismo palo: **AKs, AQs, AJs, KQs**
- Premium de distinto palo: **AKo** (y a veces AQo)

Manos que parecen fuertes pero deberían foldearse desde UTG:

- **KJo, QJo, KTo** — demasiados escenarios dominados frente a los jugadores que igualan una apertura de UTG
- **77, 88** — bien desde el botón, marginales desde UTG
- **Ases débiles del mismo palo (A2s–A7s)** — guárdalos para posición tardía

### Posición tardía (cutoff y botón): el rango más amplio

El botón es el mejor asiento del póker. ==g:Actúas último en el flop, el turn y el river en cada mano.== Esa ventaja te permite añadir de forma rentable:

- **Pares servidos bajos (22–66)** — esperando ligar un trío en el flop
- **Cualquier as del mismo palo (A2s–A9s)** — potencial de proyecto de color nut
- **Conectores del mismo palo (T9s, 98s, 87s)** — manos baratas y con altas odds implícitas
- **Broadways más flojos de distinto palo (KTo, QJo)** — solo en posición tardía, nunca temprana

Regla clave: ==estas manos especulativas necesitan posición para ser rentables==. Si un jugador en UTG sube por delante de ti, la mayoría van derechas al muck — su ventaja se esfuma sin posición.

---

## Manos iniciales en 6-max: cómo cambia la tabla

La mayoría de las cash games online son 6-max, y la tabla se desplaza en una dirección: ==más amplia==. Quita los tres asientos más cerrados de una mesa de 9-max y cada posición restante "sube" un puesto en la práctica. El primer jugador en actuar en 6-max abre contra cinco rivales, no ocho — así que ==g:UTG en 6-max se juega más o menos como MP en 9-max== (~15–17% en vez de ~12%).

:::compare
9-Max (mesa completa) | 6-Max
9 asientos — tres posiciones tempranas antes de MP | 6 asientos — el UTG de aquí es en realidad el lojack
El primer asiento abre ~12% de las manos | El primer asiento abre ~15–17% de las manos
Las ciegas te llegan una vez cada 9 manos — foldear sale barato | Las ciegas te llegan 1.5x más rápido — foldear todo te sangra fichas
AJo, KQo = fold desde el primer asiento | AJo, KQo = aperturas estándar desde el primer asiento
Manos especulativas casi solo en CO/BTN | Manos especulativas jugables un asiento antes
:::

El error que hay que evitar es jugar una tabla de 9-max en una partida de 6-max: foldearás manos que son claramente rentables y te comerán las ciegas. El error inverso — rangos de 6-max en una mesa de anillo completo — es como los ases débiles acaban dominados toda la noche. Cuando la tabla te salga automática, el [juego posicional](/es/blog/holdem-position-play) es la habilidad que convierte esos rangos más amplios en beneficio real: robar, aislar y presionar las ciegas desde los asientos que lo permiten.

---

## ¿Qué porcentaje de manos iniciales deberías jugar?

A lo largo de una sesión completa, ==un buen objetivo para un principiante es jugar más o menos el 15–20% de las manos que te reparten== — lo que significa foldear el 80–85% en preflop. Eso no es un número plano, es el *promedio* de la tabla por posición de arriba: ~12% desde UTG, ~17% desde MP, ~26% desde el cutoff, ~42% desde el botón.

:::stat[15–20%] de las manos repartidas — un rango sano de principiante en 9-max:::

Si juegas el 30–40% de las manos en una mesa de anillo completo, no estás "viendo más flops" — estás pagando rake y reverse implied odds con manos que la tabla ya te dijo que foldearas. Llévalo con honestidad durante una sesión; el número suele ser más alto de lo que parece.

Una aclaración de alcance: esto va de qué porcentaje de tu *rango* jugar, no de con qué frecuencia ganan manos concretas unas contra otras. Para las tasas de victoria mano contra mano (AK vs QQ, pareja vs dos sobrecartas y demás), consulta la [guía de odds y probabilidades del póker](/es/blog/holdem-probability) — ese es su trabajo, no el de esta tabla.

---

## Tablas GTO de preflop vs tablas para principiantes: ¿cuál usar?

Yo mantengo los outputs del solver abiertos cuando estudio, y aun así le doy a cada principiante una tabla simplificada primero. Son dos herramientas distintas, y saber cuál usar vale más que cualquiera de las dos tablas por separado.

**Las tablas GTO de preflop** salen de los solvers (PioSOLVER, GTO Wizard y compañía). Son teóricamente inexplotables — y también están llenas de frecuencias mixtas: abre esta mano el 25% de las veces, foldéala el 75%, haz 3-bet con esta combinación pero solo con estos palos. **Las tablas para principiantes** — como la de esta página — comprimen todo eso en una acción clara por mano.

:::compare
Tablas GTO de preflop | Tabla simplificada de principiante
Frecuencias mixtas — subir el 25% / foldear el 75% de las veces | Una acción clara por mano — subir o foldear
Asumen que los rivales también juegan casi perfecto | Asumen que los rivales cometen errores (los cometen)
Construidas para una profundidad de stack, rake y formato concretos | Robustas en las partidas típicas en vivo y de bajo nivel
Mejor para: regs online, sesiones de estudio, revisión de rangos | Mejor para: tu primer año, partidas en vivo, forjar disciplina
Mal aplicadas = decisiones al azar que no sabes explicar | Un pelín "demasiado cerrada" — el defecto más barato del póker
:::

Por esto memorizar tablas de solver a ciegas sale mal: las frecuencias GTO son una defensa contra rivales perfectos. Tus rivales en bajo nivel igualan demasiado, foldean muy poco y nunca hacen 3-bet de farol — contra ellos, los faroles cuidadosamente equilibrados del solver ganan *menos* dinero que simplemente subir las buenas manos y foldear la basura. Acabas haciendo jugadas de frecuencia mixta que no sabes explicar, en partidas donde la jugada sencilla gana más. ==g:Aprende la tabla simplificada hasta que subir-o-foldear te salga automático; añade las tablas GTO de preflop cuando pases al online o empieces a estudiar en serio.== El puente entre las dos es entender la [equity en el póker](/es/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — la matemática de reparto de victorias sobre la que se construyen los EV del solver.

---

## Las peores manos iniciales (que parecen jugables)

Las peores manos iniciales del póker no son morralla al azar como 7-2 — nadie necesita una tabla para foldear eso. Las caras son las manos que *parecen* jugables y pierden fichas de forma constante sesión tras sesión:

| Tipo de mano | Por qué pierde | Lo que piensan los principiantes |
|-----------|-------------|---------------------|
| ==r:Ases débiles (A2o–A8o)== | Hacen pareja de segundas frente a ases mejores | "Tengo un as, tiene que ser buena" |
| Conectores bajos de distinto palo (74o, 85o) | Rara vez ligan limpio, difíciles de jugar cuando lo hacen | "Podría hacer una escalera" |
| Rey-basura de distinto palo (K3o, K4o) | Dominados por cualquier rey mejor | "Un rey es una carta grande" |
| Dos cartas cualesquiera del mismo palo | Hacen color en el river solo ~6.5% de las veces (lo ligan en el flop ~0.8%) | "Pero son del mismo palo" |

![Trampa del as débil en Texas Hold'em — A♣ 4♦ resaltado en rojo como mano perdedora, dominada por A♠ K♦ en dorado](/images/holdem-starting-hands-weak-ace-trap.webp "Los ases débiles parecen fuertes pero siguen dominados — foldéalos en preflop")

El ==r:error más caro que cometen los principiantes es igualar subidas con ases débiles== como el A♣ 4♦ de la intro. Cuando por fin ligas tu pareja de ases, muchas veces vas de segundas frente a A♠ K♦ o A♥ Q♦ — y pierdes un bote grande convencido de que tienes pareja máxima. La tienes. Ellos también, con mejor kicker.

(¿Y la peor mano de verdad del póker? 7-2 de distinto palo — más sobre eso, y sobre la famosa "regla del 7-2", en las preguntas frecuentes de abajo.)

---

## Tabla de manos iniciales imprimible (chuleta en PDF)

Las tablas solo funcionan si las tienes delante cuando importa. Para partidas caseras y sesiones de estudio, la hicimos entera imprimible:

**[Descarga gratis la tabla de manos iniciales de póker imprimible (PDF)](/downloads/poker-starting-hands-chart.pdf)** — una página, los rangos de apertura de 9-max y 6-max lado a lado, en formato chuleta. Imprímela o mantenla abierta en el móvil entre mano y mano.

Luego úsala al pie de la letra, en cada mano, durante tus primeras 20+ sesiones:

:::steps
Comprueba primero tu posición | Antes incluso de mirar tus cartas, fíjate en dónde te sientas respecto al botón
Encaja tus cartas con la tabla | Encuentra tu mano en el rango de esa posición
Sube o foldea | Evita igualar ([limpear](/es/blog/holdem-limping)) como acción por defecto
Foldea todo lo demás | Aunque se sienta demasiado cerrado — sobre todo entonces
:::

==g:Se siente aburrido. De eso se trata.== La selección preflop tight-aggressive es la base de cualquier estilo ganador de póker, desde las cash games de principiante hasta los torneos de altos límites.

---

## Ponte a prueba: test de manos preflop

Tres situaciones de tabla. Decide antes de espiar las respuestas:

**1. 9-max, estás en UTG con A♠ J♦ (de distinto palo).** ¿Subir o foldear?
→ ==r:Fold.== AJo no entra en el rango de apertura de UTG — queda dominada demasiado a menudo por las manos que igualan una apertura de UTG. AJ*s* abre; AJo espera a un asiento posterior.

**2. Botón, todos foldean hasta ti, 7♠ 6♠.** ¿Subir o foldear?
→ ==g:Sube.== Los conectores del mismo palo están de lleno dentro del rango del ~42% del botón — este es exactamente el asiento desde el que son rentables.

**3. 6-max, el cutoff sube, estás en el botón con A♦ 4♣.** ¿Igualar, subir o foldear?
→ ==r:Fold.== Un as débil de distinto palo frente a una subida es la mano de la intro otra vez — dominado cuando liga, inútil cuando falla.

:::quiz:::

¿Acertaste las tres? Prueba el [test completo de 10 preguntas de manos de póker](/es/quiz) — las mejores cinco cartas de siete, contra el reloj.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-hand-rankings | Jerarquías de manos de póker | /images/holdem-hand-rankings-hero.webp
/es/blog/holdem-probability | Tabla de odds y probabilidades del póker | /images/holdem-probability-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cuál es la mejor mano inicial del póker?**

A. La pareja de ases (AA) es la mejor mano inicial del póker. En preflop, los ases ganan más o menos el 85% de las veces frente a una mano aleatoria. Sube y resube siempre con ases — el objetivo es agrandar el bote siendo el favorito estadístico.

**Q. ¿Cuáles son buenas manos iniciales en el póker?**

A. Las buenas manos iniciales del póker son los pares premium (AA–TT), los ases grandes (AK, AQ) y los broadways fuertes del mismo palo (KQs, AJs) — más o menos el 15–20% superior de todas las manos. Las manos especulativas como los pares bajos y los conectores del mismo palo solo son buenas desde posición tardía.

**Q. ¿Cuántas manos iniciales hay en el póker?**

A. Hay 169 tipos distintos de mano inicial (13 pares, 78 del mismo palo, 78 de distinto palo) de un total de 1,326 combinaciones exactas de dos cartas. La matemática detrás de esas cuentas vive en la [guía de probabilidad del póker](/es/blog/holdem-probability).

**Q. ¿Qué es la regla del 7-2 en el póker?**

A. La regla del 7-2 es un juego paralelo de la casa, no una regla oficial del póker: si un jugador gana un bote con 7-2 de distinto palo — la peor mano — todos los demás jugadores le pagan una pequeña recompensa. Existe solo para animar las partidas caseras y de pub premiando un farol descarado.

**Q. ¿Cuál es la peor mano inicial del póker?**

A. El 7-2 de distinto palo se considera ampliamente la peor mano inicial del póker. Las cartas están demasiado separadas para hacer una escalera juntas, son demasiado bajas para ganar sin mejorar, y hasta ligar una pareja te deja con una mano débil y mal kicker.

**Q. ¿Deberían los principiantes usar tablas GTO de preflop?**

A. No al principio. Las tablas GTO de preflop usan frecuencias mixtas diseñadas para ser inexplotables contra rivales fuertes — una exageración en partidas de principiantes, donde una tabla simplificada de subir-o-foldear gana más. Aprende la tabla simple hasta que te salga automática, y luego añade las tablas GTO cuando estudies o subas de nivel online.

**Q. ¿Importa de verdad ser del mismo palo?**

A. Ser del mismo palo añade en torno a un 2–3% de equity sobre la misma mano de distinto palo — significativo, pero no una razón para jugar una mano mala. Dos cartas del mismo palo hacen color en el river solo ~6.5% de las veces (y un proyecto de color ligado en el flop se completa cerca del 35% de las veces para el river). La basura del mismo palo sigue siendo basura.

**Q. ¿Debería foldear siempre los pares servidos bajos como 22 o 33?**

A. No siempre — decide la posición. Desde el cutoff o el botón, los pares bajos vale la pena jugarlos para "buscar trío": ligas un trío o mejor cerca del 12% de las veces (más o menos 1 de cada 8). Desde posición temprana son difíciles de jugar de forma rentable y suelen ser fold.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jerarquías de manos de póker — de la mejor a la peor</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Las 10 manos explicadas con odds y ejemplos</div>
  </a>
  <a href="/es/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Posiciones</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Posiciones de póker: de UTG al botón</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué la posición cambia qué manos jugar</div>
  </a>
  <a href="/es/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Jerarquía de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del kicker y del desempate en el póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Misma pareja pero distinto resultado — decide el kicker</div>
  </a>
</div>
`.trim(),
};

export default POST;
