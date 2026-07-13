import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-strategy",
  title: "Estrategia de Texas Hold'em: las 5 decisiones detrás de cada mano ganadora",
  seoTitle: "¿Por qué los «tips» nunca te sirvieron? — Estrategia de Texas Holdem",
  desc: "Ganar al póker no son diez tips sueltos: son las mismas cinco decisiones cada mano — posición, selección de manos, subir o foldear, c-bet y cuándo soltar.",
  tldr: "Cada decisión ganadora en Texas Hold'em se reduce a cinco preguntas repetibles: dónde estoy sentado (posición), ¿vale la pena jugar esta mano?, ¿subo o foldeo? (nunca limpeo), ¿sigo apostando en el flop?, y ¿cuándo suelto la mano? Un jugador tight-aggressive que responde bien esas cinco foldea ~80% de sus manos preflop, las juega con agresividad cuando entra, y le gana a casi cualquier partida casual — sin necesidad de memorizar listas de tips.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  masterUpdated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "♠️",
  image: "/images/holdem-strategy-hero.webp",
  imageAlt: "Un jugador de póker concentrado sopesando una decisión en una mesa de Texas Hold'em de tapete verde, con fichas y cartas comunitarias frente a él en mitad de la mano",
  tags: ["estrategia texas holdem", "estrategia poker", "estrategia poker principiantes", "como ganar en texas holdem", "tight aggressive", "cuando foldear en poker", "cuando farolear", "cuando hacer 3-bet", "estrategia c-bet"],
  content: `
Durante mis dos primeros años hice lo que hace todo el mundo: leerme las listas de tips. «Diez tips rápidos.» «Nueve reglas esenciales.» Me las sabía todas de memoria — juega menos manos, sé agresivo, respeta la posición — y *seguía* perdiendo. El problema no era que los tips estuvieran mal. Era que eran un montón de reglas sueltas sin nada que las conectara, así que en la mesa, en el momento, no tenía ni idea de cuál aplicaba.

Lo que por fin me convirtió en un jugador ganador no fue una lista más larga. Fue darme cuenta de que **cada mano de Texas Hold'em son las mismas cinco decisiones, repetidas una y otra vez** — dónde estoy sentado, ¿vale la pena jugar esta mano?, ¿subo o foldeo?, ¿sigo apostando?, y ¿cuándo suelto la mano? Acierta esas cinco y le ganas a casi cualquier partida casual en la que te sientes. Este es el ==marco **completo de estrategia de Texas Hold'em**== construido en torno a ellas, con enlaces al análisis a fondo de cada una para que practiques justo donde estás sangrando fichas.

---

### Lo que de verdad separa a los ganadores de todos los demás

:::stripe
5 | Decisiones que se repiten en cada mano
~80% | Manos que un jugador tight-aggressive foldea preflop
11.8% | Probabilidad de que un par servido ligue un trío en el flop (≈1 de cada 8.5)
0% | Probabilidad de que un limp gane el bote antes del flop
:::

---

## La estrategia del póker no es una lista de tips — son cinco decisiones

Abre cualquier artículo de «estrategia de póker para principiantes» y te encuentras un listado numerado: diez tips, nueve reglas, siete hábitos. No están *mal* — pero una lista es la peor forma de aprender, porque el juego no te entrega un menú numerado. Te entrega un asiento, dos cartas y una apuesta a la que reaccionar.

Así que en vez de una lista, usa una **espina dorsal de decisiones**. Cada mano que juegas recorre las mismas cinco preguntas en el mismo orden. Cada una tiene su propia guía en esta web — este hub es el mapa que las conecta:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | La decisión | La pregunta que de verdad te haces | A fondo |
|:---:|:---|:---|:---|
| **1** | **Posición** | ¿Dónde estoy sentado, y quién actúa después de mí? | [Juego posicional](/es/blog/holdem-position-play) |
| **2** | **Selección de manos** | ¿Vale la pena siquiera entrar al bote con esta mano? | [Manos iniciales](/es/blog/holdem-starting-hands-chart) |
| **3** | **Agresión preflop** | ¿Subo o foldeo — nunca solo limpeo? | [Por qué limpear te cuesta caro](/es/blog/holdem-limping) |
| **4** | **Continuación** | ¿Sigo apostando en el flop, o cierro el grifo? | [Acciones de apuesta](/es/blog/holdem-betting-actions) |
| **5** | **Disciplina** | ¿Cuándo suelto una mano? | [Pot odds y foldear](/es/blog/holdem-pot-odds) |

</div>

La magia no está en ninguna decisión aislada — está en que se *encadenan*. Una buena posición facilita la selección de manos. Una selección de manos más tight hace que tus subidas den más miedo. Las subidas que dan miedo ganan más botes en el flop. Y saber cuándo foldear mantiene pequeños los botes que pierdes. Falla un eslabón y la cadena se rompe. Vamos a recorrer cada uno.

---

## Decisión 1 — ¿Dónde estoy sentado? (Posición)

![Un jugador de póker en el botón del repartidor con cartas y fichas sobre el tapete verde, el asiento que actúa último en cada calle después del flop](/images/holdem-button-position-hero.webp "El botón actúa último en cada calle postflop — el asiento más rentable de la mesa")

Antes incluso de mirar tus cartas, la información más importante ya está fijada: **tu asiento.** En Hold'em, el jugador que actúa *último* después del flop tiene una ventaja enorme — ve lo que hacen todos los demás antes de comprometer una sola ficha. Por eso el [botón](/es/blog/holdem-position-play "thumb:/images/holdem-button-position-hero.webp") es el asiento más rentable del juego y las ciegas, el menos.

Actuar último te deja hacer tres cosas que nadie en posición temprana puede:

- **Recopilar información** — ves a todos pasar, apostar o foldear antes de decidir, así que nunca vas a ciegas.
- **Controlar el bote** — puedes pasar por detrás para mantenerlo pequeño con una mano marginal, o apostar para agrandarlo con una fuerte.
- **Robar más** — una apuesta desde posición tardía es más creíble y pasa mucho más a menudo.

La regla práctica que sale de esto: **juega más manos en posición tardía y menos en posición temprana.** Una mano como K‑J es un fold desde UTG pero una subida fácil en el botón. Si solo te acuerdas de una cosa sobre la posición, que sea esa. El desglose completo asiento por asiento — UTG, posición media, Cutoff, botón y las [ciegas](/es/blog/holdem-blind-meaning) — está en la guía de juego posicional.

---

## Decisión 2 — ¿Vale la pena siquiera jugar esta mano? (Selección de manos)

La mayor fuga del póker es jugar demasiadas manos. Los novatos igualan con cualquier as, con dos figuras cualesquiera, con dos cartas del mismo palo — y luego se pasan el resto de la mano metidos en un lío. El arreglo es la habilidad menos vistosa del juego y la más rentable: **foldea la mayoría de lo que te reparten.**

¿Cuánto es «la mayoría»? Un buen principiante [tight-aggressive](/es/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") foldea **alrededor del 80% de sus manos antes del flop.** Suena absurdamente tight hasta que interiorizas el porqué: las manos que *sí* juegas son, de media, más fuertes que las de tus rivales, así que ganas los botes que importan y te saltas los spots marginales que sangran fichas en silencio.

Qué manos merecen jugarse depende de tu posición (la Decisión 1 alimentando a la Decisión 2), pero una regla de oro para empezar:

- **Sube siempre:** los pares grandes (A‑A, K‑K, Q‑Q, J‑J), y A‑K.
- **Sube casi siempre:** pares medios, A‑Q, y broadways fuertes del mismo palo (K‑Q, A‑J del mismo palo) — con más libertad cuanto más tardío sea tu asiento.
- **Especulativo, según la posición:** pares servidos pequeños y conectores del mismo palo, que quieren botes multiway baratos (más sobre la matemática abajo).
- **Foldea:** casi todo lo demás, sobre todo la basura de distinto palo como J‑4, Q‑7, K‑3.

La [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart) convierte esto en una cuadrícula por colores que sí puedes memorizar. La disciplina aquí facilita cada decisión posterior.

---

## Decisión 3 — Sube o foldea. Nunca solo limpees.

![Infografía de un botón de repartidor dorado, dos cartas boca abajo, y un flop K♦ 7♣ 2♠ — el botón actúa último postflop](/images/holdem-button-dealer-board.webp "El open-limp invita a un bote multiway inflado sin iniciativa — sube para ganarlo ya, o foldea y espera un spot mejor")

Una vez que has decidido que vale la pena jugar una mano, hay una segunda decisión que la mayoría de los principiantes falla: *cómo* entrar al bote. La respuesta, casi siempre, es **subir — no limpear.**

[Limpear](/es/blog/holdem-limping) es simplemente igualar la ciega grande en vez de subir. Parece seguro y barato, y es uno de los hábitos más caros del póker, por tres razones:

1. **Un limp nunca puede ganar el bote preflop.** Cuando subes siendo el primero en entrar, puede que todos foldeen y te lleves las ciegas gratis. Limpea, y esa posibilidad es exactamente **cero** — has tirado a la basura la forma más limpia de ganar.
2. **Renuncias a la iniciativa.** El que sube preflop puede seguir contando una historia en el flop (Decisión 4). Limpea, y le entregas esa historia a otro.
3. **Te pintas una diana encima.** Los jugadores fuertes suben grande por detrás de un limper para aislarlo, y luego lo superan jugando en posición toda la mano. Un open-limp anuncia «aquí hay un jugador débil y pasivo».

El default que lo arregla es contundente: **si una mano es lo bastante buena para jugarla, es lo bastante buena para subir; si no lo es, foldea.** Y cuando *otro* ya ha subido, volver a subir — un [3-bet](/es/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp") — es como castigas las aperturas amplias y agrandas los botes con tus mejores manos. La única excepción común es el *over*-limp — igualar *por detrás* de alguien que ya limpeó, en posición, con una mano especulativa como un par pequeño — donde consigues un precio barato para entrar a un bote multiway. Eso es un descuento, no una estrategia. ¿Todo lo demás? Sube o foldea.

---

## Decisión 4 — ¿Sigo apostando en el flop? (El C-Bet)

Subiste preflop, alguien igualó, y ahora sale el flop. Aquí es donde de verdad se ganan y se pierden la mayoría de los botes — y la herramienta es la [apuesta de continuación (c-bet)](/es/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp"): apostar el flop después de haber sido el que subió preflop, haya conectado o no la mesa contigo.

El c-bet funciona porque *tú* eres el que representó fuerza preflop, así que el board «te pertenece». Pero aquí está el error a evitar: **no hay un único porcentaje correcto de c-bet.** El consejo antiguo decía «apuesta casi todos los flops». La estrategia moderna dice que depende de tres cosas:

- **Posición** — en posición sobre un board seco de carta alta (digamos K‑7‑2), puedes cbetear a menudo, quizá el **60–80%** de las veces. Fuera de posición, eso baja hacia el **40–50%** porque tienes menos información y menos fold equity.
- **Textura del board** — los boards secos que fallan a tu rival favorecen apostar; los boards húmedos y conectados (9‑8‑7 con dos del mismo palo) que conectan con los rangos que pagan piden cautela.
- **Número de rivales** — mano a mano puedes apostar con libertad; contra dos o más que pagan, cbetea **menos de la mitad** de las veces, porque alguien ha conectado con *algo*.

En cuanto al tamaño, una apuesta pequeña del **25–35% del bote** funciona cuando apuestas un rango amplio en un board seco; una mayor del **65%+** encaja con un rango polarizado de valor-y-farol en uno más húmedo. Si te **resuben** y no tienes nada, esto fluye directo a la Decisión 5. La mecánica de [pasar, apostar y subir](/es/blog/holdem-betting-actions) está cubierta en la guía de acciones de apuesta.

---

## Decisión 5 — ¿Cuándo foldeo? (La decisión que más dinero salva)

![Infografía cenital de una mesa de Hold'em con un board completo K♦ 7♣ 2♠ 9♥ 3♦, stacks de fichas y el botón del repartidor](/images/holdem-pub-players-table.webp "La jugada más rentable del póker es la que nadie nota — foldear una mano batida antes de que te cueste un stack")

La agresión gana botes. **La disciplina conserva stacks.** La decisión que separa a los jugadores de tablas de los ganadores no es un hero call ni un farol de lujo — es el aburrido y repetido acto de foldear cuando estás batido.

Aquí tienes uno concreto de una mano que jugué. Subí ==A♣K♣== y me pagó uno. El flop vino ==2♥ 7♦ 9♠== — un fallo total. Tengo as alto, sin pareja, sin proyecto. Disparo un c-bet (Decisión 4, en posición, board seco), y mi rival me hace **check-raise**. En ese punto la matemática es simple: tengo la mejor carta alta posible y nada más, y un check-raise en ese board casi nunca es un farol a stakes bajos. Así que foldeo el as alto y pierdo lo mínimo. Dos años antes «habría pagado solo por ver» — y le habría pagado un set de nueves cada vez.

La regla general: **[cuando la historia que cuenta tu rival le gana a la mano que de verdad tienes](/es/blog/holdem-when-to-fold "thumb:/images/holdem-when-to-fold-hero.webp"), y no tienes las odds para ligar, suéltala.** Foldear una mano buena-pero-batida se siente como perder. En realidad es el hábito más rentable del juego. Cuando *sí* tienes un proyecto, la decisión de foldear o pagar se reduce a las [pot odds](/es/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") — el precio que te dan frente a la probabilidad de que ligues.

---

## La matemática que no te puedes saltar

No hace falta que seas matemático, pero dos números sostienen la mitad de tus decisiones.

**Las pot odds** te dicen si un call es rentable: compara el precio del call con el tamaño del bote, y luego con tu probabilidad de ligar. Si el bote te ofrece 4 a 1 y tu proyecto liga aproximadamente 1 de cada 5, pagar es más o menos rentable a la larga; mejor que eso, es beneficio. Este es el motor detrás de cada spot de «¿persigo este proyecto?» — y la [guía de pot odds](/es/blog/holdem-pot-odds) lo convierte en una lectura de tabla de 10 segundos.

**Las odds de set-mining** explican por qué los pares pequeños son especulativos. Iguala una subida con un par de cincos esperando ligar un trío en el flop — tres iguales — y conectarás solo alrededor del **11.8% de las veces, más o menos 1 de cada 8.5.** Cuando funciona es precioso: ligas un flop ==5♣ K♠ 2♦== con ==5♠5♦== y tienes un trío escondido que le saca todo el stack a un sobrepar. Pero como fallas el ~88% de los flops, buscar trío solo es rentable cuando los stacks efectivos son lo bastante profundos como para pagarte cuando ligas — una guía aproximada es **al menos ~15–20× el tamaño del call.** ¿Stacks cortos? Ese call especulativo se convierte en una fuga. La [tabla completa de odds y probabilidades](/es/blog/holdem-probability) tiene todos los números que vas a necesitar.

---

## Las 6 fugas que más les cuestan a los principiantes — y el arreglo

Si reduces la estrategia a lo que de verdad hace perder dinero a los novatos, es la misma lista corta siempre. Arregla estas seis y habrás hecho el 90% del trabajo:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| La fuga | Por qué sangra fichas | El arreglo |
|:---|:---|:---|
| **Jugar demasiadas manos** | Las manos iniciales débiles ligan manos hechas débiles que te cuestan postflop | Foldea ~80% preflop (Decisión 2) |
| **Igualar demasiado** | Un call solo gana si ya vas por delante — nunca foldea a nadie | Sube o foldea; deja de «pagar por ver» (Decisión 3) |
| **Ser demasiado pasivo** | Los ganadores apuestan y suben por valor; la pasividad gana botes diminutos y pierde los grandes | Toma la línea agresiva cuando la tengas |
| **Ignorar la posición** | Jugar basura fuera de posición es adivinar en cada calle | Juega más tight temprano, más loose tarde (Decisión 1) |
| **Perseguir proyectos sin odds** | Calls de «esperanza» que el bote no justifica | Revisa las pot odds antes de cada call con proyecto (Decisión 5) |
| **Jugar en tilt** | Las decisiones emocionales queman una buena sesión | Retírate cuando no estés pensando con claridad |

</div>

Fíjate en que cinco de las seis se mapean directamente sobre las cinco decisiones. El marco no es abstracto — es literalmente la lista de fugas, puesta del derecho.

---

## Tight-aggressive: el único estilo con el que empezar

Si las cinco decisiones son el *qué*, **tight-aggressive (TAG)** es el *cómo* — el único estilo con el que todas las fuentes coinciden en que es el punto de partida correcto. Son dos palabras haciendo todo el trabajo:

- **Tight** — juegas pocas manos (Decisión 2). Foldeas y foldeas y foldeas, y esperas los spots en los que es probable que vayas por delante.
- **Aggressive** — pero cuando *sí* juegas, entras subiendo y apostando (Decisiones 3 y 4), no igualando. Pones a los rivales ante decisiones, en vez de al revés.

El TAG funciona porque ataca las dos mayores fugas de principiante a la vez — jugar demasiado y jugar demasiado pasivo — con la curva de aprendizaje más suave de cualquier estilo ganador. No es el *óptimo* teórico; los buenos jugadores modernos se abren hacia rangos más agresivos (LAG) y equilibrados. Pero como base con la que le puedes ganar a casi cualquier partida casual, no hay nada que se le acerque. Domina primero el tight-aggressive, y luego afloja deliberadamente cuando las cinco decisiones te salgan solas.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-position-play | Cómo la posición te gana botes | /images/holdem-position-play-hero.webp
/es/blog/holdem-starting-hands-chart | Qué manos jugar de verdad | /images/holdem-starting-hands-chart-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cuál es la mejor estrategia para Texas Hold'em?**

A. Juega un estilo tight-aggressive construido en torno a cinco decisiones que se repiten: elige las manos según tu posición, foldea la mayoría de lo que te reparten (alrededor del 80% preflop), entra a los botes subiendo en vez de limpeando, haz c-bet en el flop cuando tengas la iniciativa, y foldea con disciplina cuando estés batido. Esa combinación le gana a casi cualquier partida casual sin ninguna teoría avanzada.

**Q. ¿Cuál es la mejor estrategia de póker para principiantes?**

A. Tight-aggressive (TAG). Juega pocas manos, pero juégalas con agresividad — sube en vez de igualar, y foldea rápido cuando falles. Arregla directamente las dos fugas de principiante más comunes (jugar demasiadas manos y jugar demasiado pasivo) y tiene la curva de aprendizaje más suave de cualquier estilo ganador. Empieza ahí antes de experimentar con enfoques más loose y avanzados.

**Q. ¿Cómo se gana en Texas Hold'em?**

A. No ganas jugando más manos — ganas tomando mejores decisiones en los mismos cinco spots de cada mano: posición, selección de manos, subir o foldear, c-bet y foldear. Los ganadores foldean más, suben más e igualan menos que los perdedores. Con el tiempo, unas manos iniciales más tight y unos folds disciplinados hacen que ganes los botes grandes y pierdas los pequeños — que es todo el juego.

**Q. ¿Cuándo deberías foldear en el póker?**

A. Foldea cuando la historia que cuenta tu rival le gana a la mano que de verdad tienes y no tienes las pot odds para seguir ligando. En concreto: foldea las manos débiles antes del flop, foldea cuando falles y te enfrentes a agresión real, y foldea los proyectos cuando el precio no cuadre. Foldear una mano buena-pero-batida se siente como perder, pero es el hábito más rentable del póker.

**Q. ¿Cuándo deberías apostar frente a pasar en el póker?**

A. Apuesta cuando tienes una mano con la que vale la pena agrandar el bote, o un buen spot de farol donde los rivales pueden foldear — apostar gana botes de dos formas (foldean, o tienes la mejor mano). Pasa cuando tu mano es marginal y prefieres mantener el bote pequeño, cuando estás fuera de posición sin un plan claro, o cuando pasar te deja atrapar una mano fuerte. Siendo el que subió preflop, una apuesta de continuación en el flop suele ser tu default.

**Q. ¿Cuándo deberías farolear en el póker?**

A. Farolea cuando la historia es creíble y tu rival de verdad puede foldear — no solo porque fallaste. Los mejores faroles vienen con respaldo: un proyecto (un semifarol) que aún puede ganar si te pagan, en posición, contra un solo rival, en un board que favorece tu rango. Farolear contra varios que pagan o contra jugadores que nunca foldean es simplemente quemar dinero.

**Q. ¿Cuándo deberías hacer 3-bet?**

A. Haz 3-bet (resubir a quien subió preflop) por valor con tus manos más fuertes — pares grandes y A-K — para agrandar el bote mientras vas por delante, y añade un número menor de faroles con manos que juegan bien cuando te pagan, como conectores del mismo palo o ases del mismo palo. Haz 3-bet más desde posición tardía y contra jugadores que abren demasiado amplio; foldea, en vez de igualar, tus manos más débiles fuera de posición.

**Q. ¿Cuándo deberías subir frente a igualar?**

A. Prefiere subir a igualar siempre que tengas una mano con la que valga la pena continuar. Subir gana botes de dos formas (fold equity más la mejor mano) y toma la iniciativa; igualar solo puede ganar si ya vas por delante y deja entrar a otros barato. Iguala cuando tu mano es lo bastante fuerte para continuar pero no para agrandar un bote grande, cuando estás buscando trío con un par pequeño, o cuando quieres mantener dentro los faroles de un jugador más débil.

**Q. ¿Cuántas manos deberías jugar en Texas Hold'em?**

A. Muchas menos de las que se siente natural. Un jugador tight-aggressive ganador foldea alrededor del 80% de sus manos antes del flop, jugando más tight en posición temprana y más loose en el botón. Si estás entrando a los botes con más de una de cada cinco manos, casi con seguridad estás jugando demasiadas — apretar es la forma más rápida de mejorar.

**Q. ¿Qué significa tight-aggressive (TAG)?**

A. Tight-aggressive describe jugar un rango estrecho de manos fuertes (tight) pero jugarlas de forma decidida con apuestas y subidas en vez de calls (aggressive). Es el estilo más recomendado para principiantes porque es a la vez rentable y sencillo: foldea la mayoría de las manos, y ataca con las que te quedas. Lo contrario — loose-passive, jugar muchas manos y sobre todo igualar — es el perfil perdedor clásico.

**Q. ¿Con qué frecuencia deberías hacer c-bet?**

A. No hay un único número — depende de la posición, del board y de cuántos rivales enfrentas. En posición contra un solo jugador en un board seco podrías cbetear el 60–80% de las veces; fuera de posición o contra dos o más rivales baja hacia el 40–50% o menos. Apuesta más en boards que fallan al rango de tu rival, menos en boards húmedos que conectan con él, y usa un tamaño pequeño (25–35% del bote) cuando apuestas amplio, y mayor (65%+) cuando vas polarizado.

---

## Las cinco decisiones, una vez más

1. **Posición** — juega más manos tarde, menos temprano; el botón es tu asiento más rentable.
2. **Selección de manos** — foldea ~80% preflop; las manos que te quedas son más fuertes que las de tus rivales.
3. **Subir o foldear** — nunca hagas open-limp; una subida puede ganar el bote ya, un limp nunca.
4. **Continuación** — haz c-bet cuando tengas la iniciativa, pero ajusta por board, posición y rivales.
5. **Disciplina** — foldea las manos batidas y los proyectos sin odds; es la jugada que más dinero salva.

Ese es todo el marco. No diez tips para memorizar — cinco preguntas que hacerte, en orden, en cada mano. Vuélvete bueno respondiéndolas y adelantarás en silencio a los jugadores que siguen buscando una lista más larga. Empieza con la [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart) y una conciencia real de la [posición](/es/blog/holdem-position-play), añade las [pot odds](/es/blog/holdem-pot-odds), y habrás construido un juego que le gana a casi cualquier mesa en la que te sientes.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jugar tu posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué el botón imprime dinero</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El 80% que deberías estar foldeando</div>
  </a>
  <a href="/es/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Por qué limpear te cuesta caro</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Sube o foldea — el alegato contra solo igualar</div>
  </a>
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">La matemática de 10 segundos detrás de cada fold</div>
  </a>
</div>
`.trim(),
};

export default POST;
