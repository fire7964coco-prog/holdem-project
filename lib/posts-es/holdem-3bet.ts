import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "El 3-bet en el póker: cuándo resubir, cuánto y cómo enfrentarlo",
  seoTitle: "La guía del 3-bet con los números — cuándo, cuánto y contra qué",
  desc: "Qué es un 3-bet y por qué se llama así, cuándo resubir por valor o de farol, las cuentas exactas del sizing y cómo responder cuando te 3-betean a ti.",
  tldr: "Un 3-bet es la primera resubida antes del flop — se llama 3-bet porque la ciega grande es la primera apuesta, la subida de apertura la segunda y tu resubida la tercera. Haz un 3-bet de valor con un núcleo cerrado (QQ+, AK) más unos pocos faroles con bloqueadores del mismo palo como A5s, dale un tamaño de unas 3x la apertura en posición y 4x fuera de posición, y mantén tu frecuencia global de 3-bet cerca del 6–10%. Cuando eres tú quien se enfrenta a un 3-bet, resube con un 4-bet tus manos premium, iguala las que se juegan bien y foldea el resto — foldeando más de lo 'balanceado' contra jugadores de stakes bajos que nunca farolean.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Un jugador de póker desliza una pila de fichas hacia delante para resubir mientras el subidor original observa, un enfrentamiento de 3-bet en el preflop sobre el tapete verde",
  tags: ["3 bet poker", "que es un 3-bet", "sizing de 3-bet", "rango de 3-bet", "3-bet light", "3-bet de farol", "cuando hacer 3-bet", "squeeze en poker", "enfrentar un 3-bet", "rango lineal vs polarizado"],
  content: `
La mano que me enseñó para qué sirve *de verdad* un 3-bet fue así: un jugador loose abrió, me encontré con A-K y — como todo principiante — me limité a igualar. El flop vino con as, no metí ni una ficha y él foldeó a una sola apuesta. Había convertido la mejor mano en un bote minúsculo. Una semana después, misma situación, y esta vez *resubí*. Él pagó con un as peor, se jugó todo el stack en un flop con as, y gané cinco veces más. Las mismas cartas. Una sola decisión — el 3-bet — fue toda la diferencia.

Un **3-bet** es una de las armas más potentes del No-Limit Hold'em, y también una de las peor entendidas. La mayoría de las guías te dan la mitad de la película: cómo *hacer* un 3-bet, pero no cuánto, ni qué manos son faroles y por qué, ni qué hacer cuando alguien te 3-betea a *ti*. Este es el ==manual **completo del 3-bet**== — definición, sizing con las cuentas a la vista, rangos de valor y de farol, el squeeze, cómo enfrentar un 3-bet y los errores que te sangran el stack en silencio. Es una pieza central de una [estrategia de Texas Hold'em](/es/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") ganadora — el principio de [subir o foldear](/es/blog/holdem-limping), subido un nivel.

---

### El 3-bet, en números

:::stripe
3ª apuesta | Por qué se llama "3-bet" (la ciega = apuesta 1)
~3x / ~4x | Sizing: en posición vs fuera de posición
6–10% | Una frecuencia global de 3-bet sana
QQ+, AK | El núcleo de valor en el que casi todos coinciden
:::

---

## ¿Qué es un 3-bet en el póker?

**Un 3-bet es la primera resubida antes del flop** — resubes a un jugador que ya ha abierto con una subida. Si alguien abre a 3 ciegas grandes y tú lo llevas a 9, eso es un 3-bet.

Entonces, ¿por qué se llama *tres*-bet si solo es la segunda subida? Porque el nombre cuenta las **apuestas de la secuencia, no las subidas.** La ciega grande es una apuesta forzada — esa es la ==apuesta uno==. La subida de apertura es la ==apuesta dos==. Tu resubida es la ==apuesta tres== — el 3-bet. Sigue la cadena hacia arriba y el resto del vocabulario encaja solo:

- **4-bet** — la resubida *por encima* de un 3-bet (la cuarta apuesta). Muy fuerte o polarizado.
- **5-bet** — la resubida por encima de un 4-bet. Con 100 ciegas grandes suele ser all-in.
- **Cold 4-bet** — un 4-bet de alguien que todavía no había subido (p. ej. UTG abre, tú 3-beteas, el botón mete un 4-bet "en frío"). Grita fuerza.

Esa es toda la escalera. Todo lo demás en esta guía va sobre el primer peldaño — cuándo subirlo, hasta dónde y qué hacer cuando alguien lo sube contra ti. Si las [acciones de apuesta](/es/blog/holdem-betting-actions) básicas de pasar, igualar y subir todavía te resultan borrosas, empieza por ahí y vuelve.

---

## ¿Por qué hacer un 3-bet? Lo que un 3-bet consigue de verdad

Igualar una subida de apertura (lo que se llama **flat** o entrar pagando) te mantiene en el bote, pero un 3-bet hace cuatro cosas que un flat no puede:

1. **Se lleva el bote de inmediato, a menudo.** Buena parte de las veces, el subidor foldea y te llevas el bote antes del flop sin showdown. Un flat nunca hace esto.
2. **Construye un bote grande con tus mejores manos.** Cuando tienes ases o reyes, hacer flat deja entrar barato a otros tres jugadores. El 3-bet aísla al subidor y mete fichas mientras eres un enorme favorito.
3. **Se apodera de la iniciativa y de la ventaja posicional.** Te conviertes en el agresor con el mando de las apuestas en cada calle — y contra un subidor con rango amplio, esa presión imprime dinero.
4. **Niega equity e información.** Una subida les cobra a los rivales por continuar en lugar de dejarles ver un flop barato con una mano que podría reventarte.

El problema: como un 3-bet es potente, hacerlo *mal* sale caro. Demasiados jugadores solo 3-betean sus monstruos, lo que los deja completamente leíbles. El resto de esta guía va sobre hacerlo bien.

---

## ¿Cuándo deberías hacer un 3-bet? Manos de valor vs. faroles light

![Una infografía en cuadrícula oscura y on-brand que divide las manos de 3-bet en dos columnas — 3-BETS DE VALOR como ases, reyes, damas y as-rey, y 3-BETS LIGHT como ases del mismo palo de la rueda y conectores del mismo palo](/images/holdem-3bet-range-grid.webp "Un rango de 3-bet sano tiene dos partes: un núcleo de valor que quieres que te paguen, y unos pocos faroles con bloqueadores del mismo palo que no te importa foldear a un 4-bet")

Un rango de 3-bet ganador tiene **dos partes bien distintas**, y entender esa división es el mayor salto en este tema.

**3-bets de valor** — manos con las que *quieres* que te paguen porque vas por delante de lo que continúa:
- **El núcleo, casi siempre:** ==g:QQ+ y AK.==
- **Amplíalo con** JJ, TT, AQs y KQs cuando te enfrentas a una apertura más amplia y de posición tardía — y recórtalo hacia el núcleo contra un subidor cerrado de posición temprana.

**3-bets light (3-bets de farol)** — manos que 3-beteas *con la esperanza* de foldearlas fuera, pero que aún tienen equity de respaldo cuando te pagan. Los mejores candidatos no son basura al azar; se eligen por sus **bloqueadores** y su **jugabilidad**:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mano de 3-bet light | Por qué es un gran farol |
|:---|:---|
| **A5s–A2s** (ases del mismo palo de la rueda) | Tu as **bloquea** sus manos premium — baja sus combinaciones de AA de 6 a 3 y de AK de 16 a 12 — así que es menos probable que tenga una mano con la que continuar. Además liga colores, escaleras y proyectos de rueda. |
| **Conectores del mismo palo** (76s, 65s) | Jugabilidad estupenda — ligan escaleras, colores y proyectos, así que ganan mucho incluso cuando el farol te lo pagan. |
| **One-gappers del mismo palo** (T8s, 97s) | Misma idea, algo más flojo: disimulados, flexibles y baratos de foldear si te meten 4-bet. |

</div>

Aquí tienes la lógica de los bloqueadores en una frase: **tener un as hace matemáticamente menos probable que tu rival tenga ases o as-rey**, así que A5s es un farol mucho mejor que, digamos, A9o — que bloquea las mismas premium pero se juega fatal cuando te pagan y solo liga parejas flojas. La equity de respaldo importa porque tu rival no va a foldear todas las veces; quieres un farol que aún pueda ganar el bote. Por eso A5s ≈ 30% de equity contra un rango de call de QQ+/AK, mientras que la basura offsuit se queda muy por debajo. Es la misma disciplina de [manos iniciales](/es/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") de siempre — solo que aplicada a resubir.

---

## Rangos de 3-bet lineales vs. polarizados

Verás estas dos palabras por todas partes en la estrategia del 3-bet. Describen la *forma* de tu rango, y elegir la correcta es lo que separa a los jugadores que piensan de los robots de tabla de manos.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Lineal (merged) | Polarizado |
|:---|:---|:---|
| **Forma** | Un solo bloque sólido de tus mejores manos | Barra de pesas: valor más fuerte **+** faroles, nada en medio |
| **Ejemplo** | QQ+, AK, AQs, JJ, TT, KQs | AA-KK + faroles tipo A5s; haz flat con el medio QQ/AQ/TT |
| **Úsalo cuando** | La apertura es **amplia y débil** (posición tardía), o estás **en posición** | La apertura es **fuerte/cerrada** (posición temprana), o estás **en las ciegas** |

</div>

La razón es simple: contra una apertura **amplia y débil**, manos como AQ y TT van genuinamente por delante, así que las 3-beteas por valor en un solo bloque merged (**lineal**). Contra una apertura **cerrada**, esas mismas manos medias están dominadas y se las "revienta fuera" con 4-bets, así que solo 3-beteas valor de verdad más faroles limpios y haces *flat* con el medio (**polarizado**).

Un matiz honesto que la gente de las tablas de manos se salta: **la posición no es el único factor.** La pregunta real es *cuánto de probable es que te revienten fuera de tu mano* — lo cual depende también de la agresividad del rival, el rake y tu sizing. Frente a alguien que iguala mucho y raramente mete 4-bet, con un tamaño pequeño y poco rake, tira a **lineal**. Frente a un rival que se pone 4-bet feliz con un tamaño grande y rake alto, tira a **polarizado**. Lee la situación, no memorices una regla.

---

## ¿Cuánto deberías subir en un 3-bet? (Sizing, con las cuentas)

La mayoría de las guías te sueltan "3x en posición, 4x fuera de posición" y siguen. Aquí tienes el *porqué* y la aritmética real, usando una apertura estándar de **3 ciegas grandes** (llámala una apertura de $6 en $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situación | Tamaño | La apertura de 3bb se convierte en… | Por qué |
|:---|:---:|:---:|:---|
| **En posición** (hablas último) | ~3x la apertura | **9bb** ($18) | La posición te deja ganar con un tamaño menor, así que arriesgas menos. |
| **Fuera de posición** (hablas primero) | ~4–4.5x | **12–13.5bb** ($24–27) | Un tamaño mayor les cobra más por ver un flop y evita que tu desventaja posicional viaje barata. |
| **Squeeze** (apertura + un pagador) | Tamaño OOP **+ ~1x por pagador** | **~14–15bb** ($30) | Dinero muerto extra y un jugador más al que echar. |
| **Aislar a un limper** | 3bb **+ 1bb por limper** (en vivo, suma 1bb extra) | ~4–5bb | Castiga el limp, desanima los overcalls, y aun así te pagan amplio. |

</div>

Las cuentas están a la vista a propósito porque es donde los principiantes se filtran: **3 × 3bb = 9bb** en posición, **4 × 3bb = 12bb** fuera de posición. Dos reglas que anulan los multiplicadores:

- **Nunca hagas un 3-bet pequeño fuera de posición.** Un 3-bet OOP pequeño le da a tu rival un gran precio para igualar y superarte con la posición — justo lo que estás intentando evitar. Usa el 4x+ completo.
- **El sizing no es una ley.** Baja *el tamaño* contra jugadores que foldean de más (estás faroleando más barato) y súbelo *y* ve puro valor contra estaciones de pago que nunca foldean. El rake y la profundidad de stack también lo mueven.

En torneos con stacks cortos, todo el cálculo cambia: con más o menos **10–25 ciegas grandes**, muchas manos se convierten en un **3-bet all-in (un "shove")** en lugar de una resubida pequeña, porque no hay margen para subir y foldear. Deja de min-3-betear y empieza a jamear a medida que te quedas corto.

---

## ¿3-bet, flat o fold? Una tabla de decisión

Enfrentando una apertura tienes tres opciones, no dos. Este es el mapa que casi ningún artículo dibuja — cuándo una mano prefiere un 3-bet, un flat (igualar) o el muck:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tu mano | En posición (p. ej. botón vs un robo) | Fuera de posición (p. ej. en las ciegas) |
|:---|:---|:---|
| **Premium** (QQ+, AK) | 3-bet por valor | 3-bet por valor |
| **Fuertes** (JJ-TT, AQ, KQs) | 3-bet vs aperturas amplias; flat vs cerradas | Casi siempre 3-bet o fold — hacer flat OOP es débil |
| **Especulativas** (parejas bajas, conectores del mismo palo) | Flat para buscar trío / ver flops baratos | 3-bet como farol, o fold |
| **Faroles con bloqueadores** (A5s-A2s) | 3-bet como subida light | 3-bet como subida light |
| **Todo lo demás** | Fold | Fold |

</div>

La gran conclusión: **hacer flat es legítimo en posición** — los solvers modernos mantienen un rango de flat sano en el botón porque puedes ver flops de forma rentable con las apuestas cerradas detrás de ti. Fuera de posición es más débil, pero con una distinción importante: desde la **ciega pequeña**, prefiere un *3-bet o fold* polarizado, ya que igualar amplio OOP realiza mal tu equity y construye un rango débil y con techo. La **ciega grande** es la excepción — como cierras la acción y ya te dan precio, ahí defiendes *igualando* mucho más amplio, sobre todo contra robos de posición tardía. La posición, otra vez, lo cambia todo — la misma lección del [manual de posición](/es/blog/holdem-position-play).

---

## El squeeze: 3-betear a un subidor *y* a un pagador

![Las pilas de fichas de tres jugadores empujadas hacia el centro del tapete verde mientras un jugador desliza una resubida mayor, apretando a un subidor de apertura y a un pagador](/images/holdem-3bet-squeeze.webp "Un squeeze castiga a la vez a un subidor de apertura y a un pagador que hizo flat — el dinero muerto extra hace rentable incluso un 3-bet light")

Un **squeeze** es un 3-bet hecho después de que ya haya habido una subida de apertura *y* al menos un pagador. Se llama squeeze porque metes a los dos rivales en un torno: el subidor original ahora tiene que preocuparse por el pagador que tiene detrás, y el pagador — que acaba de mostrar una mano no lo bastante fuerte para resubir — raramente quiere continuar contra tu agresión.

Dos cosas hacen especial al squeeze:
- **Hay más dinero muerto.** El bote ya contiene la subida y el call, así que un squeeze exitoso gana más, lo que significa que tus faroles necesitan funcionar *menos* a menudo para ser rentables.
- **Dale un tamaño mayor.** Suma más o menos una subida de apertura extra por cada pagador. Contra una apertura de 3bb más un pagador, un squeeze a unas **14–15bb** es lo estándar — ese tamaño extra es lo que echa fuera a ambos jugadores.

Los buenos faroles de squeeze son las mismas manos con bloqueadores del mismo palo (A5s y compañía) que son buenos faroles de 3-bet, porque sigues queriendo foldear fuera las manos medias del subidor y tener equity cuando te pagan.

---

## Enfrentar un 3-bet: ¿igualas, resubes con 4-bet o foldeas?

![Un jugador de póker aguantando la mirada a una resubida en el preflop con la mano apoyada sobre sus fichas, sopesando si igualar, meter 4-bet o foldear a un 3-bet](/images/holdem-3bet-facing.webp "La mitad del 3-bet que nadie enseña: cuando alguien te resube, la mayoría de tu rango simplemente debería foldear — sobre todo contra jugadores que nunca farolean")

Aquí tienes la mitad del 3-bet que casi todos los artículos se saltan: **estarás en el lado receptor mucho más a menudo de lo que 3-beteas tú.** Cuando abres y te resuben, tienes tres respuestas:

- **4-bet** — por valor con tus premium (QQ+, AK), más el farol ocasional con bloqueadores (una mano tipo A5s). Un 4-bet dice "no me voy a ninguna parte".
- **Igualar** — con manos que ligan bien y tienen la equity o la posición para continuar: parejas servidas buscando trío, broadways del mismo palo y manos fuertes que no quieren inflar el bote hacia una guerra de 4-bets.
- **Fold** — todo lo demás. La mayor parte de tu rango de apertura simplemente debería rendirse a un 3-bet; eso es normal, no debilidad.

¿Cuánto deberías continuar? La base teórica es la **Frecuencia Mínima de Defensa (MDF)** — la parte de tu rango que debes continuar para que el que 3-betea no pueda ganar dinero faroleando con dos cartas cualquiera. Es ==bote ÷ (bote + apuesta)==, que contra tamaños típicos de 3-bet aterriza en torno a **la mitad de tu rango** en el vacío. Pero aquí tienes el exploit que gana dinero en las mesas reales:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stat de fold-to-3-bet del villano | Qué te dice | Tu ajuste |
|:---:|:---|:---|
| **~35% (raramente foldea)** | Una estación de pago — sus 3-bets y calls van cargados de valor | 3-betéalo **solo por valor**, deja de farolear y apuesta por valor sin descanso |
| **~55% (balanceado)** | Un regular que piensa | Juega cerca del GTO — mezcla valor y faroles con bloqueadores |
| **~70%+ (foldea demasiado)** | Un nit explotable | 3-betéalo **light mucho más a menudo** — te regala el bote |

</div>

La MDF asume un rival *balanceado*. En stakes bajos y en juego en vivo, los jugadores **farolean de menos** sus 3-bets — así que cuando un jugador pasivo resube de repente, créetelo y **foldea más de lo que dice la MDF.** No le debes una defensa "balanceada" a un nit.

---

## Una mano real de 3-bet, de principio a fin

Suficiente teoría — aquí tienes una mano completa con los números, para que veas todo el flujo. Cash de $1/$2, 100bb de profundidad.

- **Preflop:** Un cutoff loose abre a ==$6== (3bb). Estoy en el botón con ==A♠Q♠==. Es un claro **3-bet de valor** contra una apertura amplia de posición tardía, y estoy en posición, así que lo llevo a ==$18== (3x). Las ciegas foldean; el cutoff paga. El bote es de $39.
- **Flop:** ==Q♦ 8♣ 4♥.== Ligo **par máximo con el mejor kicker** — mi A♠Q♠ forma pareja de damas con el mejor kicker posible (el as). Mejores cinco cartas: Q♠ Q♦ A♠ 8♣ 4♥ = pareja (de damas) con el kicker as. Contra su rango de damas peores, ochos y floats, voy muy por delante.
- **La clave:** como hice 3-bet en el preflop, el bote ya es grande y tengo el mando de las apuestas, así que vuelvo a apostar por valor y me pagan damas peores y proyectos. Si me hubiera limitado a hacer *flat* en el preflop, otros tres jugadores podrían haber visto ese flop, mi mano sería mucho más difícil de jugar y el bote sería una fracción del tamaño. El 3-bet es lo que convirtió el par máximo en un stack.

Ahora dale la vuelta: si hubiera hecho un 3-bet con una mano **light** como A5s ahí y el cutoff hubiera metido **4-bet** a $55, simplemente foldearía — el farol con bloqueadores hizo su trabajo dándome una retirada barata y limpia. Esa es la disciplina que hace que el 3-bet light sea rentable en vez de descontrolado.

---

## Los 6 errores más comunes al hacer 3-bet

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| El error | Por qué te cuesta | El arreglo |
|:---|:---|:---|
| **3-betear demasiado pequeño OOP** | Da un gran precio para igualar — realizan equity en posición contra ti | Usa el 4x+ completo fuera de posición |
| **3-betear solo valor y nada más** | Te vuelves boca arriba; los buenos jugadores foldean todo menos coolers | Añade faroles con bloqueadores del mismo palo (A5s) |
| **No 3-betear de farol nunca** | Dejas dinero sobre la mesa vs robos amplios; tus flats quedan demasiado débiles | Balancea el valor con unos pocos 3-bets light |
| **3-betear merged vs un nit** | Tu "valor" está dominado por su rango solo-premium | Ve polarizado o simplemente foldea vs un nit de verdad |
| **Farolear 3-bet con basura (Q7o)** | Sin bloqueadores, sin equity — debes foldear a todo 4-bet | Elige solo manos con bloqueadores/jugabilidad |
| **Hacer demasiado flat en las ciegas** | Mala realización de equity OOP; un rango débil y con techo | Prefiere un 3-bet-o-fold polarizado |

</div>

Fíjate en el hilo que recorre los seis: un buen 3-bet tiene una *razón* — valor con el que quieres que te paguen, o un farol con bloqueadores y equity de respaldo. Resubir al azar sin plan es como desaparecen los stacks.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-strategy | Las 5 decisiones detrás del póker ganador | /images/holdem-strategy-hero.webp
/es/blog/holdem-position-play | Por qué la posición te gana botes | /images/holdem-position-play-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué es un 3-bet en el póker?**

A. Un 3-bet es la primera resubida antes del flop — resubes a un jugador que ya ha abierto con una subida. Por ejemplo, si alguien abre a 3 ciegas grandes y tú lo llevas a 9, has hecho un 3-bet. Es la herramienta principal para construir un bote con manos fuertes y para presionar a rivales que abren demasiado amplio.

**Q. ¿Por qué se llama 3-bet?**

A. Porque el nombre cuenta las apuestas de la secuencia, no las subidas. La ciega grande es una primera apuesta forzada, la subida de apertura es la segunda apuesta y tu resubida es la tercera — el "3-bet". Por eso se llama tres-bet aunque técnicamente sea solo la segunda subida de la mano.

**Q. ¿Cuál es la diferencia entre un 3-bet y un 4-bet?**

A. Un 3-bet es la primera resubida (sobre una subida de apertura); un 4-bet es la siguiente resubida, hecha sobre un 3-bet. Así que la escalera va: subida de apertura (2ª apuesta) → 3-bet (3ª apuesta) → 4-bet (4ª apuesta) → 5-bet (normalmente all-in). Un 4-bet representa un rango muy fuerte y polarizado.

**Q. ¿Con qué manos deberías hacer un 3-bet?**

A. Divide tus 3-bets en valor y faroles. El núcleo de valor es QQ+ y AK, ampliándolo a JJ, TT, AQs y KQs contra aperturas más amplias. Para los faroles, usa manos del mismo palo con bloqueadores y jugabilidad — de A5s a A2s y conectores del mismo palo como 76s y 65s — no basura offsuit al azar.

**Q. ¿Cuándo deberías hacer 3-bet en vez de solo igualar (flat)?**

A. Haz 3-bet cuando tengas una premium, cuando el que abre sea amplio y débil, o cuando estés fuera de posición y quieras evitar un mal flat. Hacer flat está bien en posición con manos especulativas (parejas bajas, conectores del mismo palo) donde puedes ver flops baratos con el botón. Fuera de posición, prefiere el 3-bet o el fold antes que igualar.

**Q. ¿Qué es un 3-bet light?**

A. Un 3-bet light (o 3-bet de farol) es resubir con una mano que no esperas que sea la mejor, con la esperanza de foldear fuera al que abre. Los mejores 3-bets light tienen bloqueadores y equity de respaldo — ases del mismo palo de la rueda como A5s bloquean los ases y el as-rey de tu rival y aun así ligan colores y escaleras, así que ganan incluso cuando te pagan.

**Q. ¿Cuál es la diferencia entre un rango de 3-bet lineal y uno polarizado?**

A. Un rango lineal (merged) es un solo bloque sólido de tus mejores manos — se usa contra aperturas amplias y débiles o cuando estás en posición. Un rango polarizado son tus manos más fuertes más faroles, con las manos medias eliminadas e igualadas en su lugar — se usa contra aperturas cerradas o desde las ciegas, donde las manos medias se ven reventadas por los 4-bets.

**Q. ¿Cuánto deberías subir en un 3-bet?**

A. Unas 3x la apertura en posición y 4–4.5x fuera de posición. Así que contra una apertura de 3 ciegas grandes, llévalo a unas 9bb en posición o 12bb fuera de posición. Suma más o menos una subida de apertura extra por pagador cuando hagas squeeze. No hagas un 3-bet pequeño fuera de posición — le da a tu rival un call barato y fácil en posición.

**Q. ¿Cuál es un buen porcentaje de 3-bet?**

A. Para un jugador sólido, una frecuencia global de 3-bet en torno al 6–10% es sana, con un 8% típico para un buen jugador de cash 6-max. Por debajo del ~4% es demasiado cerrado y boca arriba; por encima del ~10% suele ser demasiado agresivo y hace que te metan 4-bet y te paguen demasiado light. Es naturalmente más alto desde las ciegas y el botón que contra aperturas de posición temprana.

**Q. ¿Qué es un squeeze?**

A. Un squeeze es un 3-bet hecho después de una subida de apertura y al menos un pagador. El dinero muerto extra del bote lo hace rentable, y presiona a los dos rivales a la vez — al subidor y al pagador con rango con techo. Dale a los squeezes un tamaño mayor que a un 3-bet normal, sumando más o menos una subida de apertura extra por cada pagador.

**Q. ¿Cómo respondes a un 3-bet?**

A. Tienes tres opciones: meter 4-bet con tus premium (QQ+, AK) más el farol ocasional con bloqueadores, igualar con manos que ligan bien y tienen equity o posición (parejas, broadways del mismo palo), y foldear todo lo demás. La mayor parte de tu rango de apertura debería foldear a un 3-bet — eso es normal. Contra jugadores que raramente farolean, foldea aún más.

**Q. ¿Cuál es un buen porcentaje de fold-to-3-bet?**

A. En torno al 55% es una base razonable y más o menos balanceada — continúas con la parte alta de tu rango y dejas ir el resto. Foldear mucho más que eso te vuelve explotable por los 3-bets light; foldear mucho menos significa que estás igualando o metiendo 4-bet demasiado amplio. Ajústate al rival: foldea más contra jugadores que nunca farolean con un 3-bet.

**Q. ¿Deberías hacer 3-bet o 4-bet all-in con un stack corto en un torneo?**

A. A medida que los stacks se acortan — más o menos 10–25 ciegas grandes — muchas manos se juegan mejor como un 3-bet all-in (un shove) que como una resubida pequeña, porque no hay margen para subir y luego foldear a un 4-bet. El shove realiza toda tu fold equity de golpe. Los campos más fuertes contrarrestan el jameo puro con 3-bets minúsculos, así que mezcla 3-bets pequeños sin all-in cuando puedas.

---

## El manual del 3-bet, en resumen

1. **Un 3-bet es la primera resubida preflop** — tercera apuesta de la secuencia, porque la ciega cuenta como apuesta uno.
2. **Construye dos rangos:** un núcleo de valor (QQ+, AK) con el que quieres que te paguen, y faroles con bloqueadores del mismo palo (A5s y compañía) elegidos por sus bloqueadores y su jugabilidad.
3. **Dale un tamaño de ~3x en posición, ~4x fuera** — y nunca pequeño fuera de posición.
4. **Ajusta la forma a la situación:** lineal vs aperturas amplias/débiles, polarizado vs aperturas cerradas y desde las ciegas.
5. **Enfrentando un 3-bet, la mayoría de las manos foldean** — 4-bet con las premium, iguala las jugables y foldea más de lo "balanceado" contra rivales que nunca farolean.

Domina el 3-bet y dejas de ser el jugador que solo iguala con ases y gana un bote minúsculo. Combínalo con un [rango de manos iniciales](/es/blog/holdem-starting-hands-chart) disciplinado, una consciencia afilada de la [posición](/es/blog/holdem-position-play) y el [marco de estrategia](/es/blog/holdem-strategy) completo, y tu juego preflop se adelanta en silencio al del resto.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">El marco de las 5 decisiones</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Dónde encaja el 3-bet en un juego ganador</div>
  </a>
  <a href="/es/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Por qué el limp te cuesta</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Sube o foldea — no te limites a igualar</div>
  </a>
  <a href="/es/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jugar tu posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué los 3-bets funcionan mejor en posición</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Qué manos merecen siquiera una subida</div>
  </a>
</div>
`.trim(),
};

export default POST;
