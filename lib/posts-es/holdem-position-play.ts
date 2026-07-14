import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-position-play",
  title: "Estrategia de posición: en posición vs fuera de posición",
  seoTitle: "La posición gana a las cartas — en posición vs fuera de posición",
  desc: "Mismas cartas, resultados opuestos: lo hizo el asiento. En posición vs fuera de posición, por qué importa y rangos de apertura de UTG al botón.",
  tldr: "Estar en posición significa que hablas último — ves la decisión de cada rival antes de gastar una ficha. Los estudios de solver y de bases de datos sugieren que en posición realizas más o menos el 85–100% de tu equity, mientras que fuera de posición solo capturas alrededor del 60–85%. Por eso UTG abre ~13% de las manos y el botón ~43% — y por eso la posición reescribe cada c-bet, cada farol y cada decisión de control del bote en el postflop.",
  category: "strategy",
  date: "2026-06-18",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🎯",
  image: "/images/holdem-position-play-hero.webp",
  imageAlt: "Vista cenital de una mesa de póker profesional con 9 posiciones etiquetadas y el botón del repartidor destacando los asientos del botón y del cutoff como zonas de beneficio",
  tags: [
    "en posicion poker",
    "fuera de posicion poker",
    "estrategia de posicion poker",
    "under the gun poker",
    "por que importa la posicion en poker",
    "limpear o subir UTG",
    "como jugar fuera de posicion",
    "mejor posicion en poker",
  ],
  content: `
La primavera pasada, en mi partida habitual de 1/2, jugué K♥Q♥ dos veces en la misma sesión — una desde la ciega grande y otra desde el botón — y esas dos manos me enseñaron más sobre la posición que cualquier vídeo de entrenamiento.

Desde la ciega grande, igualé una subida del botón y ligué pareja alta en un flop Q♠8♦4♣. Actuando primero en cada calle, pasé-igualé el flop, pasé-igualé el turn, y cuando llegó un tercer barril en el river me quedé mirando el tapete y foldeé. Quizá lo tenía, quizá no — ==r:fuera de posición, pagué dos calles para no aprender nada.==

Una hora más tarde, la misma K♥Q♥, esta vez en el botón. Subí, la ciega grande igualó y pasó en el flop J♠7♦3♣. Yo pasé detrás. El turn Q♦ me dio pareja alta; volvió a pasar, aposté, igualó — y pagó mi apuesta del river con una mano peor. ==g:Las mismas cartas. Asientos opuestos. Resultados opuestos.== Eso es la posición — la primera de las [cinco decisiones](/es/blog/holdem-strategy) que forman una estrategia ganadora de Texas Hold'em, y aquella sobre la que se construye todo lo demás.

---

> **Respuesta rápida**
> **En posición (IP)** significa que hablas último; **fuera de posición (OOP)** significa que hablas primero. Los estudios de solver y de bases de datos sugieren que en posición realizas más o menos el ==g:**85–100% de tu equity**== mientras que fuera de posición solo capturas alrededor del ==r:60–85%== — una brecha que viene de la información, no de las cartas. Por eso UTG abre ~13% de las manos, el botón ~43%, y por eso cada c-bet, cada farol y cada decisión de control del bote cambia con tu asiento.

---

## ¿Qué significa «en posición» en el póker?

Estar **en posición** significa que actúas **después** de tu rival en el flop, el turn y el river — llegas a ver cómo pasa, apuesta o se rinde antes de comprometer una sola ficha. La posición siempre se mide respecto al **botón del repartidor**: cuanto más cerca te sientas del lado derecho del botón en el orden de acción, más tarde hablas, y el propio botón actúa último en cada calle del postflop, garantizado.

La posición se decide en el preflop y no cambia nunca durante la mano. Si estás en el botón y la ciega grande iguala tu subida, estás IP durante toda la mano. Si abres desde under the gun y el botón iguala, estás OOP en cada calle hasta el showdown.

Los nueve asientos se reparten en cuatro grandes zonas:

| Zona | Asientos (9-max) | Postura por defecto |
|:---|:---|:---|
| Temprana | UTG, UTG+1, UTG+2 | Los rangos más cerrados — OOP contra casi toda la mesa |
| Media | Lojack, Hijack | Se abren a medida que el campo se reduce |
| Tardía | Cutoff, Botón | Los rangos más amplios — IP contra casi todos |
| Ciegas | SB, BB | Apuestas obligadas, OOP contra todo asiento no ciego en el postflop |

Para el nombre de cada asiento, su sigla y el mapa completo de la mesa en 6-max vs 9-max, mira la [guía de nombres de asientos y mapa de la mesa](/es/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") — este artículo va de qué *hacer* con cada asiento.

---

## Qué es «fuera de posición» (OOP) — y por qué hablar primero te cuesta caro

**Fuera de posición** significa que actúas **antes** que tu rival en las calles del postflop. Cada decisión que tomas le entrega información gratis, y cada decisión que él toma llega después de la tuya — demasiado tarde para ayudarte.

Esto es lo que hablar primero te cuesta de verdad:

:::compare
Fuera de posición (hablas primero) | En posición (hablas último)
Apuestas a ciegas — puede subir, igualar o foldear, y te enteras después de haber metido tu dinero | Ves su check, su apuesta o su fold antes de decidir nada
No puedes tomar una carta gratis — pasas y te pueden echar de tu proyecto con una apuesta | Pasas detrás cuando quieras para ver la siguiente carta gratis
El tamaño del bote se te escapa — no puedes frenar sus apuestas cuando quieres un showdown barato | Tú decides si la mano avanza otra calle
Te leen el rango — las líneas de pasar-igualar se vuelven transparentes con el tiempo | Tus checks y tus apuestas siguen siendo ambiguos porque él actúa a ciegas
:::

Fíjate en que nada de esto tiene que ver con las cartas. Dos jugadores pueden llevar manos idénticas toda la noche, y el que hable primero ganará menos con ellas. Ese impuesto estructural es lo que el resto de esta guía te enseña a cobrar — o a esquivar.

---

## ¿Por qué es tan importante la posición en la estrategia de póker?

Porque la posición convierte las mismas cartas en más dinero. La forma más limpia de verlo es la **realización de equity** — cuánta de tu [equity del bote](/es/blog/holdem-equity) teórica capturas de verdad al final de la mano.

| Situación | Equity realizada (aprox.) | Por qué |
|:---|:---:|:---|
| **En posición** | ==g:**~85–100%**== | Hablas último → lo ves todo → apuestas por valor y faroleas en el momento justo |
| **Fuera de posición** | ==r:~60–85%== | Hablas primero → foldeas manos ganadoras, pagas con perdedoras, regalas cartas gratis |

Estas cifras son aproximadas — los resultados de solver y los estudios de bases de datos varían según la profundidad de stack y el enfrentamiento — pero la dirección es universal: ==**el jugador en posición sobre-realiza sistemáticamente, el jugador fuera de posición infra-realiza sistemáticamente.**==

![Comparación IP vs OOP — el botón (IP) habla último y realiza más o menos el 85–100% de la equity; UTG (OOP) habla primero y solo realiza alrededor del 60–85% de la equity](/images/holdem-position-play-ip-vs-oop.webp)

Toma 8♥7♥ en un flop K♥4♠2♥. En posición, tu proyecto de color se juega de maravilla: igualas una apuesta barata, tomas una carta gratis cuando te pasan, o faroleas cuando muestran debilidad dos veces. Fuera de posición, el mismo proyecto se filtra: apuestas y te enfrentas a una subida, o pasas y les ves cobrarte el máximo — o peor, pasas y foldeas justo la carta que te habría completado. Los mismos nueve outs, un precio muy distinto.

A lo largo de miles de manos, esa fuga se acumula hasta ser la mayor diferencia entre jugadores ganadores y perdedores del mismo nivel de habilidad. ==g:Los jugadores ganadores no solo juegan buenas cartas — juegan buenas cartas en buenas posiciones.==

---

## La mejor posición en el póker — y la peor

**La mejor posición en el póker es el botón.** Es el único asiento que tiene garantizado hablar ==**último en cada calle del postflop**== — flop, turn y river, sin importar quién subió en el preflop. Esa garantía es la razón por la que el botón puede abrir de forma rentable ~43% de las manos mientras que UTG solo llega a ~13%: la posición, no la fuerza de las cartas, financia la diferencia.

Aquí tienes la ventaja del botón en una mano concreta. Abres A♦9♦ en el botón, la ciega grande iguala, y el flop viene **K♦7♠2♥** — una mesa seca que no le pega a casi nadie. La ciega grande pasa. Has fallado por completo, pero ese check acaba de decirte que él probablemente también. ==g:Una apuesta aquí gana muchas más veces de las que pierde==, y cuando foldea, el as alto se lleva el bote sin showdown. Ahora invierte los asientos: OOP con la misma A♦9♦, pasas, él apuesta, y estás foldeando la mejor mano una parte nada despreciable de las veces. Las mismas cartas; el asiento hizo todo el trabajo.

El **cutoff** es el segundo mejor por una razón: solo el botón actúa detrás de ti, y cuando el botón foldea — cosa que pasa a menudo — heredas la última acción para el resto de la mano.

**¿Y el peor asiento?** En realidad hay dos respuestas, y conviene tenerlas claras:

| Asiento | Resultado típico a largo plazo (promedios de base de datos) | Por qué |
|:---|:---|:---|
| **Botón** | Claramente positivo — el asiento más rentable en prácticamente toda muestra | Última acción garantizada en el postflop |
| **Cutoff** | Positivo — el segundo mejor | Solo el botón detrás de ti |
| Hijack / Lojack | De ligeramente positivo a cerca del punto de equilibrio | Posición moderada, rangos moderados |
| UTG | Cerca del equilibrio incluso para jugadores sólidos | Rango cerrado, OOP en la mayoría de manos |
| **Ciega pequeña** | Negativo — el ==r:**peor asiento estructural desde el que jugar una mano**== | Primero en actuar en cada calle del postflop, con media ciega ya muerta |
| **Ciega grande** | ==r:**El que más fichas brutas pierde por cada 100 manos (bb/100)**== | Pone una ciega completa cada órbita — incluso el juego perfecto solo reduce la pérdida |

La distinción importa: la **ciega grande pierde más fichas brutas por cada 100 manos** simplemente porque está obligada a poner una ciega completa en cada órbita — ninguna estrategia hace gratis una apuesta obligada. Pero la **ciega pequeña es el peor asiento para jugar de verdad**, porque actúas primero en cada calle del postflop sin un descuento compensatorio que valga la pena. Las cifras exactas de bb/100 varían según el nivel y el pool de jugadores, así que trata cualquier número concreto como un resultado típico de base de datos, no como una ley — el *ranking*, en cambio, es notablemente consistente.

> **Consejo para partida en vivo:** En una partida en vivo de 1/2, los jugadores limpean el botón con regularidad porque «no tengo una gran mano». Eso es dejar sin usar el terreno más valioso del póker. En el botón, open-raise o fold — la prima posicional es demasiado valiosa para malgastarla limpeando.

---

## Under the gun: qué significa y cómo jugar UTG

**Under the gun (UTG)** es el asiento inmediatamente a la izquierda de la ciega grande — el primero en actuar en el preflop, con cero información sobre las ocho manos que quedan detrás. El nombre ya es la estrategia: estás *under the gun*, bajo presión, obligado a comprometerte primero. (En el postflop, ojo, el orden cambia: las ciegas actúan primero y el botón último — la maldición de UTG es abrir a ciegas en el preflop y luego jugar normalmente OOP contra quienes igualan en posición tardía.)

Jugar bien UTG va sobre todo de contención:

- **Abre más o menos el ~13% superior de las manos** — el núcleo son los pares fuertes (88+), AK/AQ y los mejores broadways del mismo palo (AJs, KQs), redondeado con pares medios y los mejores ases del mismo palo. Para la rejilla exacta mano a mano, usa la [tabla de manos iniciales](/es/blog/holdem-starting-hands-chart).
- **Foldea lo bonito pero dominado.** KJo y QJo parecen jugables y sangran fichas en silencio desde UTG — cuando conectan, alguien de detrás suele conectar más fuerte.
- **Cuenta con jugar la mano OOP.** Quien iguale tu apertura de UTG probablemente tenga posición sobre ti durante tres calles, así que tu rango tiene que ser lo bastante fuerte como para aguantar ese impuesto.

> **La prueba de disciplina:** si foldear AJo desde UTG te da un poco de mal cuerpo, probablemente lo estés haciendo bien. Parece demasiado cerrado, gana más.

---

## ¿Es mejor limpear o subir desde UTG?

**Subir o foldear — no limpees.** Si una mano es lo bastante fuerte como para jugarla desde el peor asiento del preflop, es lo bastante fuerte como para subir; si no lo es como para subir, jugarla OOP contra varios rivales durante el resto de la mano es exactamente la trampa que te tiende el asiento.

El open-limp falla por tres motivos desde UTG:

1. **Invita a toda la mesa** con unas pot odds perfectas, así que ves el flop contra cuatro manos aleatorias estando OOP.
2. **Encasilla tu rango percibido** — los jugadores observadores atacan a los que limpean sin piedad, y te enfrentarás a subidas contra las que no puedes continuar cómodamente.
3. **No gana nada en el preflop.** Una subida puede llevarse las ciegas directamente; un limp nunca lo hace.

Hay una excepción muy concreta en partidas en vivo muy pasivas — limpear detrás de otros que ya han limpeado con pares pequeños y conectores del mismo palo para ver un flop multiway barato — pero *abrir* con limp desde UTG es una fuga en prácticamente cualquier mesa. El argumento completo, incluido cuándo limpear detrás sí está bien, está en la [guía del limping](/es/blog/holdem-limping).

---

## Posición temprana vs posición tardía (robar las ciegas)

La posición temprana es donde defiendes; la posición tardía es donde atacas. De UTG a UTG+2 el trabajo es simple — rango cerrado, cartas grandes, sin florituras. Desde el cutoff y el botón, el trabajo cambia por completo: ya no estás esperando manos, ==g:estás cosechando dinero muerto.==

**El robo de ciegas** es la jugada clave de la posición tardía. Cuando todos foldean hasta ti en el CO o en el botón, la subida no va realmente de tus cartas — va de las dos apuestas obligadas que hay en el bote y del hecho de que ambas ciegas tendrán que jugar la mano OOP si defienden:

- **Robo desde el cutoff:** sube ~2.2–2.5× con un rango amplio cuando te llega foldeado — pero no olvides que el botón sigue acechando detrás de ti.
- **Robo desde el botón:** aún más amplio — manos como K7s, Q9s y A2o se vuelven aperturas rentables porque ambas ciegas estarán OOP contra ti para siempre.
- **Respeta el contrarrobo (re-steal):** las ciegas que hacen 3-bet de forma agresiva recortan tu beneficio de robo; contra ellas, cierra un poco y haz 4-bet con tus mejores candidatas.

![Un jugador en posición tardía en el botón empujando una subida hacia delante mientras ambas ciegas foldean — un robo de ciegas de manual](/images/holdem-position-play-blind-steal.webp "Robar las ciegas desde el botón cuando llega foldeado")

La asimetría es la lección: la misma K7s que es un buen robo desde el botón es un fold instantáneo desde posición temprana. La mano nunca cambió — lo que cambió fue el número de jugadores por batir, y quién actúa primero después.

---

## Rangos de apertura por posición: la tabla de estrategia

Cada asiento tiene su propio rango de apertura porque **el número de jugadores que todavía deben actuar — y tu posición postflop frente a ellos — cambia el riesgo de cada mano**. Aquí tienes la base estándar de 9-max:

| Posición | Rango de apertura (aprox.) | Razón |
|:---|:---:|:---|
| UTG | ~13% | Ocho jugadores detrás, OOP en la mayoría de manos |
| UTG+1 | ~14% | Apenas más amplio que UTG |
| UTG+2 | ~16% | El campo empieza a reducirse |
| Lojack | ~17% | La primera posición media de verdad |
| Hijack | ~20% | Empiezan las oportunidades de robo |
| **Cutoff** | **~27%** | Solo el botón detrás — asiento de robo por excelencia |
| **Botón** | ==g:**~43%**== | Última acción garantizada en el postflop — la apertura más amplia |
| Ciega pequeña | ~40% (subir o foldear) | Amplio cuando llega foldeado, pero nunca iguales |
| Ciega grande | Defiende amplio vs robos | Cierra la acción + pot odds, no aperturas |

![Mesa de póker de 9 jugadores mostrando cómo los rangos de apertura se abren desde UTG (~13%, rojo cerrado) hasta el botón (~43%, verde amplio)](/images/holdem-position-play-opening-range.webp "Rango de apertura por posición — UTG abre ~13%, el botón ~43%")

La regla operativa: ==**cada paso hacia el botón abre el rango**== — un punto o dos por asiento en posición temprana, y luego grandes saltos en el cutoff (+7%) y el botón (+16%), donde la posición se vuelve casi segura. En sentido contrario, ==r:recorta primero las manos más débiles del mismo palo y los broadways de distinto palo.==

Estos porcentajes describen *tamaños de rango* — qué manos concretas los rellenan (si T9s abre aquí, si K9o entra allí) es tarea de la [tabla de manos iniciales por posición](/es/blog/holdem-starting-hands-chart), que asigna cada mano a cada asiento.

---

## Cómo jugar fuera de posición (cuando no lo puedes evitar)

La mayoría de las guías se quedan en «evita jugar OOP». Vale — pero estás en las ciegas dos veces por órbita, y a veces tu apertura de UTG la iguala el botón. Aquí tienes cómo perder lo mínimo, y de vez en cuando darle la vuelta a la tortilla:

**1. El check-raise es tu igualador.** Es el arma que tiene OOP y que IP no tiene: como esperan apostar cuando les pasan, ==g:un check-raise vuelve su piloto automático posicional en su contra.== Construye el rango con honestidad — manos fuertes (tríos, doble pareja) más proyectos con equity real (escaleras abiertas, proyectos de color) — para que nunca sea todo farol ni todo valor.

**2. Apuesta más grande cuando apuestes.** Las apuestas OOP tienen que cerrar manos antes. Un sizing mayor (piensa en dos tercios o tres cuartos del bote en vez de un tercio) niega las cartas gratis y las igualadas especulativas baratas que la posición le dejaría tomar a tu rival. Jugar al small-ball OOP solo alarga la mano — y cada calle extra favorece al que actúa último.

**3. Controlar el bote significa pasar más, igualar más y foldear antes.** Las manos de fuerza media OOP quieren showdowns baratos. Las líneas de pasar-igualar llegan; las de apostar-y-que-te-suban, no. Y cuando llega el tercer barril y tu mano no ha mejorado, recuerda lo que son de verdad las manos marginales OOP: ==r:bluff-catchers que infra-realizan.== Foldear el river OOP más a menudo de lo que parece natural suele ser lo correcto.

**4. Salir apostando (donk-bet) pocas veces y de forma concreta.** Apostar contra el que subió en el preflop funciona solo en mesas que favorecen tu rango — flops bajos y conectados que le pegan a un rango de defensa de ciega y fallan al de quien sube. Como línea por defecto es legible y explotable; como bisturí en las mesas adecuadas, está bien.

**5. Lo mejor de todo: no llegar ahí.** Igualar subidas desde la ciega pequeña, hacer cold-call en posición media con manos dominadas, defender la ciega grande contra aperturas de posición temprana con basura — casi toda la miseria OOP es autoinfligida en la decisión del preflop.

---

## ¿Cómo afecta la posición a la frecuencia de c-bet?

Muchísimo. La apuesta de continuación es en el fondo una jugada de información, y la información es justo lo que aporta la posición:

| Situación | Frecuencia típica de c-bet del solver (flop) |
|---|---|
| **IP (BTN/CO vs defensa de ciega)** | **~65–75%** de las mesas |
| OOP (botes de 3-bet desde las ciegas) | ~40–50% de las mesas |
| Quien subió OOP vs quien iguala IP | ~30–45% — el más selectivo |

En posición, puedes cbetear un rango amplio — incluido aire y proyectos backdoor — porque tu rival tiene que responder sin saber tu siguiente movimiento, y cuando iguala tú sigues actuando último en el turn. Fuera de posición, la misma apuesta es más arriesgada: un check-raise termina tu farol, y un call te deja adivinando primero en cada calle que queda. Por eso cbetear a ciegas el 100% «porque subiste en el preflop» quema dinero OOP.

El marco completo de sizing y textura de mesa está en la [guía de la apuesta de continuación](/es/blog/holdem-continuation-bet).

---

## Estrategia de la ciega pequeña: ¿por qué 3-bet o fold?

La ciega pequeña parece barata — media ciega ya puesta — y sale cara: eres el primero en actuar en cada calle del postflop contra todos. La estrategia moderna ha convergido en un remedio contundente: ==**desde la SB, 3-bet o fold — casi nunca iguales.**==

Igualar desde la SB te mete en un rango encasillado y transparente, OOP, con la ciega grande todavía detrás y con precio para hacer squeeze. En su lugar:

- **Haz 3-bet** con tus manos de valor y una capa de faroles con bloqueadores (A5s, A4s son los clásicos).
- **Foldea** todo lo que habría sido un call «barato» — el descuento no cubre el impuesto posicional.
- **Sube el tamaño a ~4× la apertura** (frente a ~3× cuando haces 3-bet en posición): como no vas a tener ventaja postflop, cobra más en el preflop y cierra más manos justo ahí.

Para la mecánica de las ciegas en sí — por qué existen y cómo las apuestas obligadas moldean el juego — mira la [guía de la ciega pequeña y la ciega grande](/es/blog/holdem-blind-meaning).

---

## 6-max vs full ring — y torneo vs cash

**El 6-max comprime el mapa.** Al quitar tres asientos tempranos, el primero en actuar en 6-max se enfrenta solo a cinco rivales — así que ==**UTG en 6-max se juega como el lojack de full ring, abriendo alrededor del ~17%**== en vez del ~13% de UTG en full ring. Todos los demás asientos se abren de forma similar, los robos vienen más a menudo y los 3-bets son más frecuentes en general. La fuga más común al cambiar de formato es arrastrar la rigidez del 9-max al 6-max — acabas foldeado fuera de la mesa.

**Los torneos mantienen la misma mecánica con distintas apuestas en cada decisión.** En cash, las ventajas posicionales se acumulan con calma a lo largo de horas y los rebuys hacen recuperables las fugas. En torneo, los stacks que menguan cambian la textura: por debajo de ~15 ciegas grandes, el juego colapsa hacia push/fold, donde el matiz posicional importa menos, mientras que con 20–30 BB el robo desde posición tardía se convierte en el motor de la supervivencia — hasta que el ICM de la burbuja hace que algunos robos matemáticamente correctos sean un suicidio en torneo. La comparación completa está en la [guía de torneo vs cash game](/es/blog/holdem-tournament-vs-cash-game).

---

:::readnext[Sigue leyendo]
/es/blog/holdem-positions | Nombres de asientos y mapa de la mesa | /images/holdem-positions-hero.webp
/es/blog/holdem-starting-hands-chart | Tabla de manos iniciales por posición | /images/holdem-starting-hands-chart-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué significa fuera de posición en el póker?**

A. Fuera de posición (OOP) significa que tienes que actuar antes que tu rival en las calles del postflop — flop, turn y river. Comprometes fichas sin saber qué hará él, no puedes tomar cartas gratis y te cuesta controlar el tamaño del bote. Las ciegas están OOP contra todos los demás asientos (entre las dos, la ciega pequeña actúa primero — así que la ciega grande en realidad tiene posición sobre la ciega pequeña); el botón nunca está OOP contra nadie.

**Q. ¿Por qué importa tanto la posición en el póker?**

A. Porque hablar último convierte las mismas cartas en más dinero. Los estudios de solver y de bases de datos sugieren que en posición realizas más o menos el 85–100% de tu equity teórica mientras que fuera de posición solo capturas alrededor del 60–85% — el jugador en posición ve la decisión de cada rival antes de tomar la suya, así que apuesta por valor, farolea y foldea en mejores momentos con las mismas manos.

**Q. ¿Cuál es la posición más rentable en el póker?**

A. El botón. Es el único asiento que tiene garantizado hablar último en cada calle del postflop, por lo que los estudios de bases de datos lo muestran de forma consistente como el mayor ganador en toda mesa — puede abrir de forma rentable alrededor del 43% de las manos, más o menos el triple de lo que puede UTG. El cutoff va segundo, ya que solo el botón actúa detrás de él.

**Q. ¿Cuál es la posición más débil en el póker?**

A. Dos respuestas, según la pregunta. La ciega pequeña es el peor asiento estructural desde el que jugar una mano — el primero en actuar en cada calle del postflop. La ciega grande pierde más fichas brutas por cada 100 manos, simplemente porque pone una ciega obligada completa en cada órbita; ni el juego perfecto reduce del todo esa pérdida. Entre los asientos no ciegos, UTG es el más débil: primero en el preflop, el rango más cerrado, normalmente OOP tras el flop.

**Q. ¿Es mejor limpear o subir desde UTG?**

A. Subir o foldear — no hagas open-limp. Una mano lo bastante fuerte como para jugarla desde el peor asiento del preflop es lo bastante fuerte como para subir; limpear invita a botes multiway que jugarás fuera de posición, encasilla tu rango percibido y nunca gana las ciegas directamente. La rara excepción es limpear detrás de otros que ya limpearon, en partidas en vivo pasivas, con pares pequeños y conectores del mismo palo.

**Q. ¿Con qué amplitud debo abrir desde UTG vs desde el botón?**

A. Desde UTG en full ring, abre más o menos el ~13% superior de las manos — pares fuertes, AK/AQ y los mejores broadways del mismo palo. Desde el botón, alrededor del ~43% es rentable porque la última acción garantizada compensa unas cartas más débiles. En 6-max, UTG se abre hasta un ~17%, jugándose como un lojack de full ring.

**Q. ¿Cómo afecta la posición a la frecuencia de c-bet?**

A. En posición (botón o cutoff), los solvers hacen c-bet más o menos en el 65–75% de los flops — actúas último en cada calle posterior, así que apostar amplio incluido aire es seguro. Fuera de posición eso baja a más o menos el 30–50%, porque un check-raise puede terminar tu farol y un call te deja adivinando primero en el turn y el river. Cbetear la misma frecuencia OOP que IP es una de las fugas más comunes y costosas.

**Q. ¿Hay que hacer siempre 3-bet desde la ciega pequeña?**

A. Cuando entras al bote, casi siempre sí — el estándar moderno desde la SB es 3-bet o fold, no igualar. Igualar crea un rango encasillado y fuera de posición que la ciega grande puede atacar con un squeeze. Haz 3-bet con tus manos fuertes más faroles con bloqueadores como A5s/A4s, sube el tamaño a unas 4× la apertura (frente a 3× en posición), y foldea el resto.

---

## Las conclusiones

1. **Posición = realización de equity.** ==g:En posición, los estudios sugieren que capturas más o menos el 85–100% de tu equity==; ==r:fuera de posición, solo alrededor del 60–85%==. La brecha viene de hablar último, no de mejores cartas.
2. **Los rangos se deslizan con la posición.** UTG abre ~13%, el botón ==g:~43%== — y cada asiento intermedio sube un peldaño en la escalera. ==r:Jugar manos de botón desde UTG sangra fichas.==
3. **El botón es el mejor asiento; las ciegas son las peores.** La BB pierde más fichas brutas (apuesta obligada); la SB es el peor asiento para jugar de verdad (primero en actuar en cada calle). Protege tu botón, y haz 3-bet-o-fold con tu ciega pequeña.
4. **OOP no es una causa perdida — es disciplina.** El check-raise como igualador, sube el tamaño al apostar, controla botes con manos medias y foldea rivers más de lo que parece natural.
5. **Subir o foldear under the gun.** Hacer open-limp desde UTG combina el peor asiento con la línea más débil.
6. **El 6-max comprime el mapa.** UTG en 6-max se juega como el lojack de full ring (~17%) — recalibra cuando cambies de formato.

Para el nombre de cada asiento y el mapa completo de la mesa, mira la [guía de nombres de asientos y posiciones](/es/blog/holdem-positions). Para saber qué manos exactas rellenan cada rango, usa la [tabla de manos iniciales por posición](/es/blog/holdem-starting-hands-chart). Y para entender por qué los asientos «con descuento» son los que más te cuestan, la [guía de la ciega pequeña y la ciega grande](/es/blog/holdem-blind-meaning) cubre la matemática de las apuestas obligadas al detalle.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Posiciones</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Nombres de asientos y mapa de la mesa</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">UTG, Lojack, Hijack, Cutoff, Botón — cada asiento explicado</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Manos iniciales</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales por posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Qué manos jugar desde cada asiento — tabla de referencia imprimible</div>
  </a>
  <a href="/es/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ciegas</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estrategia de ciega pequeña y ciega grande</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué los asientos con descuento son los más difíciles de rentabilizar</div>
  </a>
  <a href="/es/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneo</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estrategia de torneo vs cash game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cómo cambian las decisiones de posición cuando aplica el ICM</div>
  </a>
</div>
`.trim(),
};

export default POST;
