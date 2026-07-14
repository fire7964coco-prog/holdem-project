import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Cash game vs torneo en póker",
  seoTitle: "Tus fichas no siempre son dinero — cash game vs torneo",
  desc: "Cash game vs torneo en póker: ¿cuál te encaja? Valor de fichas, ciegas que suben, ICM, bankroll, cuál es más difícil y rentable, y por dónde empezar.",
  tldr: "En los cash games las fichas son dinero real y las ciegas se mantienen fijas. En los torneos las fichas son equity de supervivencia, las ciegas suben y los premios dependen de en qué puesto termines.",
  category: "tournament",
  date: "2026-06-11",
  updated: "2026-07-14",
  hideSummaryImageSlot: true,
  readTime: "16 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-vs-cash-hero.webp",
  imageAlt: "Infografía comparativa lado a lado de cash game y torneo — valor de las fichas, estructura de ciegas y cuándo puedes levantarte de la mesa",
  tags: [
    "cash game vs torneo poker",
    "que es un cash game en poker",
    "reglas cash game poker",
    "son rentables los cash games",
    "son los cash games mas dificiles que los torneos",
    "cuando dejar un cash game",
    "gestion de bankroll poker",
    "ICM poker",
  ],
  content: `
Todavía recuerdo cuando fui a caja a cobrar mi primera sesión de cash en vivo — esas fichas eran dinero que literalmente podía llevar a la caja y meterme en el bolsillo. Mi primer torneo terminó de forma muy distinta: cuatro horas de juego cuidadoso, un flip perdido y un stack de fichas que a la salida se convirtió en exactamente nada. De esa diferencia va todo este artículo.

Casi todo jugador que empieza en Hold'em acaba haciéndose la misma pregunta:

*"¿Debería jugar ==cash games== o ==torneos==?"*

Al principio parecen el mismo juego. Sigues recibiendo dos cartas privadas, cinco comunitarias y cuatro rondas de apuestas desde preflop hasta river. Pero a nivel estratégico son casi dos mundos distintos. En un cash game, tus fichas son dinero. En un torneo, tus fichas son tu supervivencia.

Esta guía desglosa ==cash game vs torneo en póker== tal como lo necesita de verdad un principiante: qué es un cash game y cómo funciona, valor de las fichas, estructura de ciegas, cómo cambia la estrategia, qué formato es más difícil, cuál es más rentable, bankroll, ICM y con cuál deberías empezar. Si los torneos en sí todavía son un misterio, lee primero [cómo funcionan los torneos de póker — buy-ins, niveles de ciegas y el flujo del Día 1](/es/blog/holdem-tournament); este artículo compara los dos formatos en lugar de repetir esa guía de estructura.

### La respuesta en 15 segundos

- **Cash games:** las fichas equivalen a dinero real, las ciegas se mantienen fijas y puedes levantarte cuando quieras.
- **Torneos:** pagas una sola entrada, recibes fichas de torneo y juegas hasta que busteas o ganas.
- **Los cash games enseñan los fundamentos más rápido** porque los stacks son más profundos y el ciclo de feedback es más corto.
- **Los torneos ofrecen mayor upside**, pero mucha más varianza, sesiones más largas y [presión del ICM](/es/blog/holdem-icm).
- **Para la mayoría de principiantes, el cash game es el punto de partida más limpio.** Añade torneos cuando lo básico te salga solo.

---

## Cash game vs torneo en póker: la diferencia central

La forma más limpia de decirlo es esta:

==**Un cash game trata de tomar decisiones rentables con dinero sobre la mesa. Un torneo trata de sobrevivir lo suficiente para ganar un premio.**==

En un cash game, si entras con $200, tus fichas representan $200. Si lo subes hasta $450, ==g:puedes levantarte con $450==. Cada ficha tiene un valor directo en dinero.

En un torneo, puedes pagar un buy-in de $100 y recibir 20,000 fichas. ==r:Esas fichas no valen $20,000==, y no puedes cambiarlas por dinero a mitad del evento. Solo importan porque te ayudan a sobrevivir, aplicar presión y terminar más arriba en la estructura de premios.

Así se siente en la mesa. En un cash game de $1/$2, pagar una apuesta de $60 en river con una pareja significa arriesgar $60 ahora mismo. Si el call es malo, todavía puedes levantarte, recargar o jugar otro día. En un torneo de $50 cerca de premios, pagar un all-in de 18 ciegas grandes puede acabar con todo tu torneo. Las cartas pueden parecer parecidas, pero el coste de equivocarte no es el mismo.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Categoría | Cash game | Torneo |
|------|------|------|
| Valor de las fichas | Dinero real | Equity de torneo |
| Entrada | Compras fichas por la cantidad que elijas | Pagas una entrada fija |
| Salida | Te levantas cuando quieras | Juegas hasta bustear o terminar |
| Ciegas | Normalmente fijas | Suben con el tiempo |
| Objetivo principal | Maximizar el EV a largo plazo | Sobrevivir y escalar premios |
| Estrategia clave | Juego postflop deep stack | Presión de stack, ICM, juego en la burbuja |

</div>

Si entiendes esta tabla, ==g:ya entiendes la base de toda la comparación==.

---

## ¿Qué es un cash game en póker? (reglas y cómo funciona)

Un ==cash game== (también llamado ring game) es la forma original de jugar al póker: te sientas, cambias tu propio dinero por fichas y cada ficha de la mesa vale exactamente su valor nominal. Sin horario, sin bolsa de premios, sin puestos finales — solo póker, mano tras mano.

**¿Cómo funcionan los cash games?** Eliges tu propio buy-in dentro de los límites publicados de la mesa. Un cash game en vivo típico de $1/$2 puede permitir desde unos $40 hasta $300, y dónde entres importa: los stacks más profundos crean más juego postflop, mientras que los stacks más cortos simplifican las decisiones.

**Las fichas son dinero en todo momento.** Ganas un bote y ese dinero es tuyo al instante — no existe eso de "entrar en premios" como en un torneo. Por eso mismo las decisiones de cash game se juzgan puramente por si ganan dinero a largo plazo.

**Las ciegas son fijas.** Un juego de $1/$2 sigue siendo $1/$2 cinco horas después. Las dos apuestas forzosas simplemente van rotando por la mesa cada mano. Si la ciega pequeña, la ciega grande o la "opción" todavía te confunden — o quieres las reglas de las ciegas perdidas y los straddles — [qué son de verdad las ciegas en el póker](/es/blog/holdem-blind-meaning) lo cubre todo en un solo sitio.

**Puedes recargar e irte con total libertad.** Pierdes tu stack y puedes comprar más fichas en el acto (hasta el máximo de la mesa). ¿Tienes que irte? Recoges tus fichas y las cambias por dinero — sin pedir permiso a nadie.

**La casa cobra un rake.** En la mayoría de cash games la casa se lleva una pequeña parte de cada bote (o cobra una comisión por tiempo de asiento). Eso moldea en silencio qué límites son batibles, así que conviene entender [cómo funciona el rake en el póker](/es/blog/holdem-rake) antes de elegir mesa.

:::note[Esta sección cubre lo esencial del cash game. La estamos ampliando hasta convertirla en una guía completa de cash game por sí misma — considérala la semilla.]:::

---

## Las fichas de torneo no son dinero

Esta es la diferencia más importante de todo el artículo.

En un cash game, duplicar tu stack duplica tu dinero. Por eso las decisiones de cash game pueden centrarse mucho en el chip EV: *¿este call es rentable? ¿esta apuesta gana dinero con el tiempo?*

En un torneo, ==r:duplicar tu stack de fichas **no** duplica tu equity en dinero real==. Los premios se basan en el puesto final, no en el número exacto de fichas que tengas en un momento concreto.

Imagina un torneo de 10 jugadores donde todos pagan $100 (ignorando la comisión de la casa para simplificar — los $1,000 completos van a la bolsa de premios).

| Puesto | Premio |
|:---|:---:|
| 1.º | $500 |
| 2.º | $300 |
| 3.º | $200 |
| 4.º-10.º | $0 |

Si pasas del 10% de las fichas al 20% de las fichas, tu probabilidad de cobrar mejora, pero tu equity de premio no se duplica sin más. En cambio, si pierdes todas tus fichas en la burbuja, tu equity de torneo cae a cero.

==r:Esa asimetría es la razón por la que el póker de torneos a veces recompensa foldear manos que en un cash game serían calls rentables.==

![Infografía: las fichas de cash se convierten en dinero al instante, mientras que las fichas de torneo no tienen valor en dinero hasta que llegas a un puesto pagado](/images/holdem-tournament-chips-not-money.webp "Valor de las fichas de torneo e ICM en el póker")

---

## Ciegas fijas vs ciegas que suben

Los cash games y los torneos también se sienten distintos porque las ciegas se comportan de otra manera.

En un cash game de $1/$2, las ciegas se mantienen en $1/$2. Una hora después, siguen siendo $1/$2. Tres horas después, siguen siendo $1/$2. Puedes esperar mejores spots, recargar si hace falta y seguir jugando con un stack profundo.

En un torneo, las ciegas suben según un calendario. Un stack que al principio era de 100 ciegas grandes puede convertirse más tarde en 25 ciegas grandes sin perder una sola mano. Luego puede convertirse en 12 ciegas grandes. Llega un momento en que esperar sale caro.

| Fase | Cash game | Torneo |
|------|------|------|
| Temprana | Los stacks profundos siguen siendo comunes | La mayoría de jugadores empieza profundo |
| Media | La presión de ciegas se mantiene estable | Los stacks medios se van acortando |
| Tardía | Todavía puedes recargar o irte | Los all-ins de stack corto se vuelven comunes |
| Presión | Más baja y más estable | Aumenta en cada nivel |

==r:Por eso "espera solo manos premium" no siempre basta en los torneos.== Las ciegas que suben te obligan a ==robar, defender, resubir all-in y asumir riesgos controlados==.

---

## Estrategia cash game vs torneo — qué cambia de verdad

Si las fichas significan cosas distintas y las ciegas se comportan de otra manera, la estrategia también tiene que cambiar. Estos son los giros que vas a notar de verdad en la mesa.

**Un cash game es una sola partida larga; un torneo son muchas cortas.** En un cash game, cada decisión se juzga por una única pregunta: ¿gana dinero a lo largo de miles de repeticiones? En un torneo, esa misma decisión también tiene que responder a una segunda: ¿qué le hace a mis probabilidades de sobrevivir hasta los premios?

**Tu base preflop arranca igual, y luego diverge.** Una [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart) sólida es la base en ambos formatos — pero los torneos te sacan de esa base a medida que los stacks se acortan, entran los antes y se acercan los saltos de premio, mientras que un cash game te deja jugar los mismos rangos disciplinados toda la noche.

**Poder recargar cambia cómo funciona la agresividad.** En un cash game, perder un stack significa meter la mano en el bolsillo, así que los faroles grandes y los calls finos son "solo" dinero. En un torneo, ese mismo error es la eliminación, y por eso los buenos jugadores de torneo eligen sus spots en torno a los tamaños de stack y la supervivencia, no solo a las cartas.

### Póker deep stack vs push/fold de stack corto

Los cash games suelen recompensar la habilidad deep stack. A menudo juegas en torno a 100 ciegas grandes, lo que significa que las decisiones de flop, turn y river importan mucho. Necesitas entender de value bet, farol, textura de la mesa, posición y rangos rivales.

Los torneos empiezan profundos, pero a menudo se vuelven de stack corto. Con 25 ciegas grandes, 15 ciegas grandes o 10 ciegas grandes, las decisiones preflop pasan a ser mucho más importantes. En vez de planear tres calles, puede que estés decidiendo si abrir, resubir all-in, pagar o foldear — los rangos exactos están en [estrategia de short stack: cuándo hacer push o fold](/es/blog/holdem-short-stack).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Profundidad de stack | Más común en | Habilidad principal |
|------|------|------|
| 100BB+ | Cash games | Juego postflop y value bet |
| 40-60BB | Torneos en fase media | Rangos de apertura y respuesta al 3-bet |
| 15-25BB | Torneos en fase media/tardía | Resteals y presión de shove |
| ==r:10BB o menos== | Torneos en fase tardía | ==r:Disciplina de push/fold== |

</div>

Los jugadores de cash game suelen ir bien en las fases tempranas de un torneo porque están cómodos en profundidad. ==g:Los mejores jugadores aprenden ambos.==

---

## ICM: el concepto de torneo que los cash games no tienen

La mayor división estratégica entre cash games y torneos es el ==ICM==.

ICM son las siglas de **Independent Chip Model** (Modelo de Fichas Independiente). Estima el valor en dinero real de tu stack de torneo a partir de los tamaños de los stacks, los jugadores que quedan y la estructura de premios. Los cash games no necesitan ICM porque las fichas ya equivalen a dinero.

¿Dónde muerde? Sobre todo [en la burbuja](/es/blog/holdem-bubble) y en las mesas finales. Supón que llevas AKo en la burbuja con un stack medio y otro jugador va all-in. En un cash game, si el call es rentable por pot odds y equity, pagas. En un torneo, perder significa terminar con $0, mientras que ganar no duplica tu equity de premio — así que un call que imprime dinero en un cash game puede ser un fold claro bajo ICM.

| Factor de decisión | Cash game | Torneo |
|------|------|------|
| Lógica del call | Pot odds + equity | Pot odds + equity + ICM |
| Perder un stack | Pierdes un buy-in | Eliminación |
| Valor de las manos fuertes | Más estable | Cambia según la presión de premios |
| Presión de burbuja | Ninguna | Enorme |

==g:Cuando ves a un buen jugador de torneos foldear una mano que parece demasiado buena para foldear, muchas veces el motivo es el ICM.== Un solo párrafo no le hace justicia a la matemática — los ejemplos completos y desarrollados están en [el ICM explicado: por qué las fichas de torneo no son dinero](/es/blog/holdem-icm).

![Infografía que muestra que duplicar tu stack de torneo hace crecer tu equity de premio en menos del doble — el núcleo de la presión del ICM](/images/holdem-tournament-icm-bubble.webp "Presión de burbuja de torneo y toma de decisiones con ICM")

---

## ¿Son los cash games más difíciles que los torneos?

Esta pregunta exacta se hace constantemente, y la respuesta honesta es: ==son difíciles de formas distintas==, y "más difícil" depende de qué habilidades te falten.

Los cash games concentran la dificultad en el **juego postflop deep stack**. Te enfrentas a los mismos límites — y a menudo a los mismos regulares — día tras día, sin ciegas que suban para forzar a nadie a cometer errores. Ganar tiende a exigir una ventaja genuina en la lectura de manos, el value bet y la disciplina, y muchos jugadores sienten que arañar esa ventaja es la prueba más dura a largo plazo.

Los torneos reparten la dificultad entre **fases**. Necesitas habilidad deep stack al principio, precisión de push/fold al final y criterio de ICM en la burbuja — más el aguante para tomar buenas decisiones en la octava hora y la resiliencia emocional para sobrevivir a largas rachas sin cobrar. Ninguna fase concreta es tan profunda como el juego postflop del cash game, pero el abanico de situaciones es más amplio.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo de dificultad | Cash game | Torneo |
|------|------|------|
| Profundidad de una habilidad | ==r:Muy profunda== (postflop, stacks profundos) | Moderada por fase |
| Amplitud de habilidades | Más estrecha | ==r:Muy amplia== (profundo, corto, ICM) |
| Presión de los rivales | Estable, a menudo regulares con experiencia | Campos mixtos, cambia según la fase |
| Reto mental | Disciplina en sesiones largas y planas | Aguante y swings de varianza |

</div>

Una regla práctica útil: ==g:los cash games suelen ser más difíciles de *batir*, los torneos suelen ser más difíciles de *aguantar*==. Si te cuesta el juego postflop, los cash games te parecerán más difíciles. Si te cuesta la paciencia, la presión y los swings, te lo parecerán los torneos.

---

## ¿Son los cash games más rentables? bb/100 vs ROI de torneo

Los resultados de cash game se miden normalmente en **bb/100** o win rate por hora. Si un jugador gana 5 ciegas grandes por cada 100 manos en una muestra grande, eso es una ventaja estable. El feedback no es instantáneo, pero es más rápido y más limpio que los resultados de torneo.

Los resultados de torneo se miden normalmente por **ROI**, tasa de cobros, frecuencia de mesa final y grandes premios. Un jugador ganador de torneos puede no cobrar 20 o 30 eventos seguidos, y luego hacer una deep run que lo paga todo.

Entonces, ¿cuál es más rentable? ==Para la mayoría de jugadores, los cash games producen una ganancia por hora más predecible, mientras que las ganancias de torneo llegan en raros picos grandes.== Un jugador de torneos hábil puede ganar más a lo largo de un año, sin duda — pero el dinero llega de forma desigual, y necesitas el bankroll y el temple para sobrevivir a los huecos entre premios.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Métrica | Cash game | Torneo |
|------|------|------|
| Unidad de resultado principal | bb/100 o ganancia por hora | ROI y puesto final |
| Varianza | Moderada | ==r:Muy alta== |
| Potencial de gran premio | Menor | ==g:Mayor== |
| Feedback de habilidad | ==g:Más rápido== | Más lento |
| Reto mental | Ganancias/pérdidas sesión a sesión | Largas rachas sin cobrar |

</div>

==r:La trampa es leer mal la varianza.== Un premio de torneo no demuestra que seas un crusher. Una mala sesión de cash no significa que no sepas jugar. ==g:Necesitas tamaño de muestra en ambos formatos.==

---

## Gestión de bankroll: los torneos necesitan más colchón

La gestión de bankroll importa en ambos formatos, pero los torneos suelen requerir un colchón más profundo porque los swings son mayores.

Una guía común para principiantes en cash games es tener alrededor de **20-40 buy-ins** del nivel que juegas. Si tu buy-in normal de cash game es de $200, eso significa unos $4,000-$8,000 como bankroll conservador de póker.

Para torneos, la recomendación estándar es más exigente: **100+ buy-ins para MTTs de campos grandes**, y los formatos más pequeños o más blandos necesitan algo menos. Un torneo de $50 puede parecer más barato que un buy-in de cash game de $200, pero la varianza puede ser mucho más dura.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Formato | Guía de bankroll para principiantes | Por qué |
|:---|:---:|:---|
| Cash game | ==g:20-40 buy-ins== | Menor varianza, recargas disponibles |
| Sit-and-go pequeño | 40-60 buy-ins | Más varianza de premios |
| MTT de campo grande | ==r:100+ buy-ins== | Las largas rachas sin cobrar son normales |

</div>

El bankroll no es solo una cuestión de dinero. ==Protege tu toma de decisiones.== ==r:Cuando juegas por encima de tu bankroll, cada all-in se siente personal, y la buena estrategia queda reemplazada por el miedo.==

---

## Cuándo dejar un cash game (y por qué no puedes dejar un torneo)

Los cash games son flexibles. Puedes sentarte 30 minutos, jugar dos horas o irte cuando la mesa es mala. Los torneos son lo contrario: una vez te registras, juegas hasta que busteas, cobras o ganas — si te vas a mitad del evento, tus fichas se quedan en la mesa, pagando ciegas hasta que desaparecen.

Entonces, ¿cuándo *deberías* dejar un cash game? Las reglas dicen "cuando quieras", pero la respuesta rentable es más concreta:

- **Vete cuando la mesa deje de ser buena.** Los jugadores más flojos se marchan, la alineación se ha vuelto tight o han desaparecido los asientos que hacían la mesa rentable.
- **Vete cuando *tú* dejes de estar bien.** El tilt, el cansancio y la distracción destruyen los win rates más rápido que las malas cartas. Si te pillas pagando por frustración, recoge las fichas.
- **No te vayas solo porque llegaste a una cifra.** Ir arriba o abajo un buy-in no dice nada sobre si la próxima hora será rentable. Dejar la mesa ganando en una gran partida y seguir grindeando pérdidas en una malísima ambos son leaks.
- **Irte justo después de un bote grande está permitido.** Ninguna regla te obliga a "dar acción" — aunque, por etiqueta, una vuelta corta de enfriamiento queda mejor que un "hit-and-run" instantáneo (levantarte justo tras ganar el bote).

| Situación del jugador | Mejor ajuste |
|------|------|
| Tienes tiempo libre impredecible | Cash game |
| Quieres sesiones cortas | Cash game |
| Puedes concentrarte muchas horas | Torneo |
| Te gustan los rankings, la presión y los trofeos | Torneo |
| Puede que tengas que irte de repente | Cash game |

Este es un punto práctico que los principiantes suelen pasar por alto. Un buy-in de torneo puede parecer menor que un buy-in de cash game, pero el coste en tiempo es mucho mayor.

---

## ¿Qué deberían jugar primero los principiantes?

Para la mayoría de principiantes, ==g:**el cash game es la mejor primera aula**==.

La razón no es que los cash games sean fáciles. No lo son. Pero ==te dan repeticiones más limpias==. Las ciegas se mantienen, los stacks suelen ser más profundos y puedes revisar si tu call, tu subida o tu value bet tuvo sentido ==r:sin desenredar además el ICM, los saltos de premio y la presión de ciegas==.

Los torneos también pueden ser estupendos para principiantes si disfrutas de la competición y aguantas la varianza. Son emocionantes, tienen estructura y te dan una meta clara: sobrevivir y terminar más arriba. Pero no confundas una deep run con la prueba de que toda tu estrategia es sólida.

| Objetivo | Mejor punto de partida |
|------|------|
| Aprender los fundamentos rápido | Cash game |
| Mejorar las decisiones postflop | Cash game |
| Jugar eventos cortos programados | Torneo |
| Perseguir el upside de un gran premio | Torneo |
| Jugar sesiones cortas | Cash game |
| Estudiar el ICM y la presión de burbuja | Torneo |

Si eres nuevo del todo, aprende primero [cómo se juega una mano de Texas Hold'em](/es/blog/holdem-game-order) y el [ranking de manos de póker](/es/blog/holdem-hand-rankings). Elegir formato es mucho más fácil una vez que las reglas básicas te salen solas — y si te inclinas por los torneos, mira [cómo funcionan los torneos de póker](/es/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") para los buy-ins, los niveles de ciegas y el flujo del Día 1.

### Marco de decisión para principiantes

Si todavía no consigues elegir, usa este filtro rápido.

| Tu situación | Empieza con |
|------|------|
| Tienes 1-2 horas y puede que debas irte | Cash game |
| Tienes un bankroll pequeño y odias los downswings grandes | Cash game |
| Quieres aprender por qué funcionan las apuestas en flop, turn y river | Cash game |
| Tienes una tarde libre y quieres una meta estructurada | Torneo |
| Disfrutas de la presión, los rankings y jugar por una mesa final | Torneo |
| Estás dispuesto a estudiar tablas de push/fold y spots de ICM | Torneo |

Mi consejo por defecto para un principiante serio es simple: juega cash games de límites bajos para repetir, y luego añade torneos pequeños para ganar experiencia. Los cash games revelan los leaks más rápido. Los torneos enseñan presión, paciencia y control emocional. Juntos construyen un jugador más completo.

### Los cash games pueden encajarte mejor si:

- Quieres sesiones flexibles.
- Prefieres un desarrollo técnico constante.
- Quieres estudiar el póker postflop deep stack.
- Quieres un feedback más claro sobre tus decisiones.
- Tienes un bankroll pequeño y no te gustan los downswings largos.

### Los torneos pueden encajarte mejor si:

- Disfrutas de la competición, la presión y los rankings.
- Puedes dedicar varias horas sin interrupciones.
- Te atrae la posibilidad de un premio mayor desde un solo buy-in.
- Estás dispuesto a estudiar el ICM, el juego en la burbuja y los rangos de stack corto.
- Puedes soportar largas rachas sin cobrar.

Ningún formato es "mejor". Ponen a prueba partes distintas del mismo juego. Muchos jugadores fuertes usan los cash games para construir fundamentos y los torneos para tiros de gran upside.

---

## Salas de póker en vivo: ¿qué deberías preguntar primero?

Antes de sentarte en cualquier sala de póker en vivo o evento local, pregunta qué formato se está jugando de verdad. La misma mesa, las mismas fichas y las mismas cartas pueden crear decisiones muy distintas según la estructura.

Preguntas útiles:

| Pregunta | Por qué importa |
|------|------|
| ¿Esto es un cash game o un torneo? | El valor de las fichas y la estrategia cambian por completo |
| ¿Cuáles son las ciegas o los niveles de ciegas? | Determina la presión de stack |
| ¿Se permiten re-entries o add-ons? | Cambia el coste total y el riesgo |
| ¿Cuál es la estructura de premios? | Afecta a las decisiones de burbuja y de ICM |
| ¿Cuánto suele durar el evento? | Te ayuda a evitar errores por falta de tiempo |

Si no puedes explicar la estructura, no compres entrada todavía. Pregunta primero, y luego juega.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-pot-odds | Cómo calcular las pot odds | /images/holdem-pot-odds-hero.webp
/es/blog/holdem-probability | Tabla de odds y probabilidades de póker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. ¿Los torneos de póker son más difíciles que los cash games?**

A. Son difíciles de formas distintas. Los torneos exigen un conjunto de habilidades más amplio — stacks profundos al principio, push/fold al final, ICM en la burbuja — más largas horas y una varianza brutal. Los cash games concentran la dificultad en el juego postflop deep stack contra alineaciones más estables. La mayoría de jugadores encuentran los torneos más difíciles de aguantar y los cash games más difíciles de batir.

**Q. ¿Son rentables los cash games para principiantes?**

A. Pueden serlo, pero cuenta con pagar matrícula primero. Los cash games de límites bajos tienen un montón de jugadores flojos, y un principiante disciplinado con rangos preflop tight y buenos hábitos de bankroll puede convertirse en un pequeño ganador. Ten en cuenta que el rake golpea más fuerte a los juegos de límites bajos, y la mayoría de principiantes pierden durante sus primeros meses mientras tapan leaks.

**Q. ¿Los principiantes deberían empezar con cash games o torneos?**

A. La mayoría de principiantes debería empezar con cash games de límites bajos o torneos muy pequeños. Si tu objetivo es aprender los fundamentos rápido, los cash games son más limpios. Si tu objetivo es la emoción y la competición estructurada, los torneos pequeños están bien siempre que entiendas la varianza.

**Q. ¿Importa el ICM en los cash games?**

A. No. El ICM se aplica a los torneos porque las fichas de torneo no equivalen a dinero y los premios dependen del puesto final. En los cash games, las fichas ya son dinero, así que las decisiones se basan más directamente en las pot odds, la equity, la posición y los rangos rivales.

**Q. ¿Cuántos buy-ins necesito para cash games vs torneos?**

A. Una guía común es 20-40 buy-ins para cash games y 100+ buy-ins para torneos de campo grande, con los formatos más pequeños como los sit-and-gos en un punto intermedio, en torno a 40-60. Los torneos necesitan el colchón más grande porque las largas rachas sin cobrar son normales incluso para jugadores ganadores.

**Q. ¿Cuántas fichas hacen falta para un cash game en casa?**

A. Un set estándar de 300 fichas cubre cómodamente hasta unos 6-8 jugadores. Dale a todos el mismo stack inicial repartido en 3-4 denominaciones, con la mayoría de las fichas en los valores más pequeños para que se pueda apostar y dar cambio con facilidad. El número exacto importa menos que el hecho de que todos acuerden cuánto vale cada color en dinero real antes de la primera mano.

**Q. ¿Los jugadores profesionales juegan cash games o torneos?**

A. Ambos — pero muchos pros se especializan. Los especialistas en cash game valoran el win rate por hora más estable y la flexibilidad de horarios, mientras que los pros de torneo persiguen grandes premios y títulos a pesar de la mayor varianza. Muchos de los mejores jugadores hacen las dos cosas: cash games para tener ingresos fiables, torneos por el upside y el prestigio.

**Q. ¿Un torneo con re-entry es básicamente un cash game?**

A. No. El re-entry te permite volver a entrar en el torneo tras bustear durante un periodo concreto, pero las fichas siguen sin ser dinero. Las ciegas siguen subiendo, el dinero de los premios sigue dependiendo del puesto final y el ICM sigue importando más adelante.

---

## Las 3 ideas que debes recordar

1. ==**Las fichas de cash son dinero; las fichas de torneo son equity de supervivencia.**== Esa sola idea explica la mayoría de las diferencias estratégicas.
2. ==g:**Los cash games enseñan los fundamentos más rápido; los torneos ponen mejor a prueba la presión.**== Elige según tu objetivo, no según qué formato suena más glamuroso.
3. ==**El bankroll y el tiempo importan.**== Si no soportas las sesiones largas ni los downswings largos, ==g:los cash games suelen ser el mejor punto de partida==.

Domina primero los fundamentos del cash game, y luego añade torneos cuando estés listo para las ==ciegas que suben, la presión del ICM y el swing emocional de perseguir una deep run==.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo funcionan los torneos de póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Buy-ins, niveles de ciegas, formatos y un checklist de Día 1</div>
  </a>
  <a href="/es/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Flujo de juego</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Orden de juego en Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">De preflop al showdown — el flujo completo de la mano paso a paso</div>
  </a>
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ranking de manos de póker — de mejor a peor</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Las 10 manos con odds, ejemplos y puzles de mesa</div>
  </a>
  <a href="/es/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ciegas</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿Qué son las ciegas en el póker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">SB, BB, robo de ciegas y la opción — todo explicado</div>
  </a>
</div>
`.trim(),
};

export default POST;
