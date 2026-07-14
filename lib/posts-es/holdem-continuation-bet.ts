import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Apuesta de continuación (c-bet): cuándo disparar en el flop, cuánto y cuándo pasar",
  seoTitle: "Por qué 'cbetear cada flop' te sangra fichas — estrategia de c-bet",
  desc: "Qué es una apuesta de continuación (c-bet), en qué flops cbetear y en cuáles pasar, el tamaño exacto — pequeño en board seco, grande en húmedo.",
  tldr: "Una apuesta de continuación (c-bet) es una apuesta en el flop del jugador que subió antes del flop. La regla moderna no es 'cbetear cada flop' — es apostar los flops que favorecen tu rango (boards altos y secos como K-7-2) pequeño y a menudo, y pasar los que favorecen a tu rival (boards bajos y conectados como 7-6-5). Apuesta pequeño — un tercio del bote — en boards secos, grande — dos tercios o más — en los húmedos, cbetea menos fuera de posición y mucho menos multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "15 min",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Un jugador de póker apostando fichas sobre un flop recién repartido tras subir en el preflop, el clásico momento de la apuesta de continuación sobre el tapete verde",
  tags: ["apuesta de continuación", "c-bet póker", "qué es un c-bet", "tamaño c-bet", "frecuencia c-bet", "cuándo cbetear", "cuándo no cbetear", "c-bet fuera de posición", "c-bet multiway", "c-bet retrasada"],
  content: `
Mis primeros dos años, "cbetear" era el único plan de flop que tenía. Subía en el preflop, así que apostaba el flop. Siempre. Board con as, apostaba. ¿Un board lleno de escaleras y colores que claramente machacaba al que me pagó? Apostaba igual — y me resubían, me pagaban y me hacían check-raise bote tras bote. Creía que la c-bet *era* la estrategia. Resulta que la c-bet es un bisturí, y yo la blandía como un martillo.

Una **apuesta de continuación (c-bet)** es una apuesta en el flop hecha por el jugador que subió antes del flop. Es la apuesta más común del póker — y la más mal usada. El consejo antiguo era "cbetea casi todos los flops". La estrategia moderna, verificada con solver, dice algo más útil y más rentable: ==apuesta los flops que favorecen a *tu* rango, y pasa los que favorecen al de tu rival.== Este es el manual completo de la c-bet — qué flops, con qué frecuencia, cuánto, en y fuera de posición, multiway, y cuándo pasar es la jugada ganadora. Es la mitad de flop de una [estrategia de Texas Hold'em](/es/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") ganadora.

---

### La c-bet, en números

:::stripe
~2 de cada 3 | Cuántas veces una mano falla el flop
⅓ del bote | El tamaño pequeño de "apuesta de rango" en boards secos
55–70% | Una tasa global sana de c-bet en el flop
Pasar | A menudo la mejor jugada, no debilidad
:::

---

## ¿Qué es una apuesta de continuación (c-bet)?

**Una apuesta de continuación es una apuesta hecha en el flop por el jugador que fue el agresor antes del flop** — el último en subir. "Continúas" contando la historia de fuerza que empezaste en el preflop. Y algo clave: ==no necesitas haber ligado el flop para cbetear==; una gran parte de las buenas c-bets se hacen con manos que fallaron por completo.

La razón de que funcione es una simple estadística: **una mano falla el flop — no hace ni pareja ni nada mejor — cerca de dos tercios de las veces.** Así que cuando apuestas, tu rival normalmente tampoco tiene nada, y se retira. No apuestas porque seas fuerte; apuestas porque *él probablemente es débil* y tú fuiste quien reclamó la iniciativa.

Una vez conoces la c-bet del flop, el resto de la escalera de "barrels" viene solo:

- **C-bet retrasada** — *pasas* el flop y luego apuestas el turn. Genial para botes donde el flop favoreció a tu rival pero el turn cambia las cosas.
- **Doble barrel** — cbeteas el flop y apuestas *otra vez* en el turn.
- **Triple barrel** — apuestas las tres calles: flop, turn y river. La línea más agresiva, para valor fuerte o un farol bien elegido con bloqueadores.

Si las [acciones de apuesta](/es/blog/holdem-betting-actions) de pasar, apostar y subir todavía te resultan borrosas, empieza por ahí. Si no, vamos a corregir el error que casi todos cometen.

---

## El viejo consejo de "cbetear cada flop" está mal — esto es lo que cambió

Si aprendiste póker antes de los solvers, te dijeron que cbetearas alrededor de dos tercios del bote en la *mayoría* de flops. Funcionó durante un tiempo porque los rivales se retiraban de más. Luego todos aprendieron a defenderse — flotando, haciendo check-raise y pagando hasta el final — y cbetear a mansalva se volvió un leak.

Aquí está lo crucial que la estrategia moderna dice de verdad, porque es fácil confundirlo: **NO es "cbetear menos en todas partes".** Es un *reparto*:

- En boards que te favorecen, apuesta **pequeño e incluso más a menudo** que el viejo consejo — a veces con tu rango entero.
- En boards que favorecen a tu rival, **pasa mucho más** — y apuesta más grande y más selectivo cuando lo hagas.

El concepto que hay debajo es la ==ventaja de rango==: qué rango global es más fuerte en este flop concreto. Como agresor del preflop, tienes más cartas grandes y sobrepares, así que **los boards altos y secos son tuyos** — y los boards llenos de cartas medias conectadas son del jugador que pagó. Domina esa sola idea y estás por delante de todo jugador de "solo cbetea" de la mesa.

---

## Qué flops cbetear: todo es cuestión de la textura del board

![Un flop seco y desconectado J-7-2 rainbow sobre el tapete verde con una pequeña pila de fichas apostada delante, la clase de board de carta alta que pertenece al agresor del preflop](/images/holdem-cbet-dry-board.webp "Los flops altos, secos y desconectados como este J-7-2 favorecen al agresor del preflop — los clásicos boards de c-bet pequeña y de alta frecuencia")

Este es el corazón del cbeteo. Antes de pensar en el tamaño o la frecuencia, hazte una pregunta: **¿este flop ligó con mi rango o con el de mi rival?** Aquí tienes el mapa:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo de flop | Ejemplo | A quién favorece | En posición | Por qué |
|:---|:---|:---|:---|:---|
| **Alto, seco, desconectado** | K‑7‑2, A‑8‑3 | **Tú (agresor)** | Apuesta **a menudo y pequeño** (⅓) | Tienes más top pairs y sobrepares; él falló |
| **Bajo, conectado** | 7‑6‑5, 9‑8‑6 | **Quien pagó** | **Pasa más**; apuesta grande y selectivo cuando lo hagas | Liga sus conectores del mismo palo y parejas pequeñas |
| **Emparejado bajo** | 8‑8‑3, 5‑5‑2 | **Tú (ligeramente)** | Apuesta **a menudo y pequeño** | Ninguno tiene trío casi nunca; tus sobrecartas/sobrepares mandan |
| **Monótono** | K♠9♠4♠ | Mixto — cuidado | Apuesta **menos, más pequeño** | Un color hecho tapa ambos rangos; ve barato |
| **Two-tone y húmedo** | Q♥J♥7♣ | Inclinado a quien pagó | **Polariza:** grande con valor/proyectos, pasa con aire | Un montón de proyectos — cóbraselos o sal de la mano |

</div>

Dos ideas relacionadas hacen todo el trabajo aquí:
- **La ventaja de rango decide con qué *frecuencia* apuestas.** Cuanto más de tu rango es fuerte en este board → apuesta más a menudo.
- **La ventaja de nuts decide qué tan *grande* apuestas.** Cuanto más tienes de las mejores manos absolutas (sets, escaleras) → apuesta más grande.

La parte sutil: puedes tener una sin la otra. En A‑8‑3 tienes muchos más top pairs (ventaja de rango) pero casi nadie tiene un set, así que **apuestas a menudo pero pequeño**. En un board donde tienes muchos más sets y sobrepares, **apuestas grande**. Ten claras estas dos palancas y el tamaño de la c-bet deja de ser una adivinanza.

---

## ¿Con qué frecuencia deberías cbetear? (Frecuencia)

No hay un único porcentaje "correcto" de c-bet — quien te dé un solo número te está vendiendo un leak. La frecuencia varía con la posición, el board y cuánta gente hay en el bote. Aquí tienes la referencia rápida:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situación | Frecuencia aproximada de c-bet | Nota |
|:---|:---:|:---|
| **En posición, mano a mano, board seco** | **70–100%** (pequeño) | El clásico "range bet" — apuesta casi todo, mínimo |
| **En posición, mano a mano, board húmedo** | **~50–60%** | Más polarizado — valor y proyectos apuestan, el aire pasa |
| **Fuera de posición, mano a mano** | **~40–50%** | Pasa mucho más para proteger tu rango de check |
| **Multiway (2 rivales)** | **~50% o menos** | Alguien seguramente ligó — aprieta |
| **Multiway (3+ rivales)** | **Solo manos fuertes y buenos proyectos** | El fold equity básicamente desapareció |

</div>

Como chequeo de salud, la tasa global de c-bet en el flop de un jugador sólido cae en torno al **55–70%** en todos los boards. Si cbeteas más del ~85% de los flops estás en piloto automático y los buenos jugadores te castigarán; por debajo del ~40% eres demasiado honesto, apostando solo cuando ligas. Pero recuerda — ese número es un *agregado*, no un objetivo. Llegas ahí apostando los boards correctos, no cumpliendo una cuota.

---

## ¿Cuánto deberías cbetear? (Tamaño)

El tamaño se deduce directamente de la textura del board. Dos marchas cubren casi todo:

- **Pequeño — alrededor de un tercio del bote** — en boards secos, estáticos, de ventaja de rango, sobre todo en posición. El rango de tu rival es débil y no mejorará mucho, así que no necesitas cobrarles a los proyectos; una apuesta pequeña ya pone todo su aire en un aprieto mientras mantiene manos peores dentro para pagarte. Una apuesta más grande aquí solo hace foldear las manos que *quieres* que paguen.
- **Grande — dos tercios del bote o más** — en boards húmedos, dinámicos, y siempre que tu rango esté polarizado. Ahora sí necesitas cobrarles a los proyectos de color y de escalera (negarles su equity) y construir el bote con tus manos fuertes. Una apuesta pequeña deja que los proyectos paguen demasiado barato.

Ponle números reales. Digamos que el bote es de ==$30== en el flop:

- Una c-bet de **un tercio del bote** es ==$10== — tu apuesta de rango en board seco.
- Una c-bet de **dos tercios del bote** es ==$20== — tu tamaño de board húmedo para cobrarles a los proyectos.

En **torneos**, inclínate un pelín más pequeño — a menudo **medio bote o menos** — porque tu stack es precioso y no puedes recargar. Elijas lo que elijas, ata el tamaño al board, no a la costumbre.

---

## Cbetear fuera de posición

![Un jugador de póker actuando primero fuera de posición, los dedos sobre el tapete junto a sus fichas con un rival esperando en la penumbra detrás](/images/holdem-cbet-oop.webp "Fuera de posición actúas primero sin información, así que pasas mucho más y cbeteas un rango más cerrado y fuerte")

Cbetear es mucho más difícil **fuera de posición** — cuando tienes que actuar primero en cada calle sin ninguna lectura de lo que hará tu rival. Dos ajustes:

1. **Cbetea menos a menudo.** Sin posición no puedes controlar el bote igual de bien ni realizar tu equity, así que pasas mucho más — incluso manos que serían apuestas automáticas en posición. En algunos boards buenos un solver cbetea fuera de posición solo una cuarta parte de las veces.
2. **Construye un rango de check de verdad.** Si solo apuestas cuando eres fuerte y pasas cuando eres débil, un rival atento te lee como un libro abierto y ataca cada check. Así que pasas *algunas* manos fuertes a propósito, lo que mantiene tus checks peligrosos y todo tu juego más difícil de enfrentar. Por esto exactamente la [posición](/es/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") es una ventaja tan estructural — las c-bets simplemente funcionan mejor cuando actúas último.

---

## Cbetear en botes multiway

La mayor trampa de la c-bet es **disparar contra varios rivales como si fuera mano a mano.** Cada jugador extra en el bote reduce la probabilidad de que todos fallaran — así que tu fold equity, el motor entero de una c-bet de farol, se derrumba.

La regla multiway es simple: **apuesta tus manos hechas fuertes y tus mejores proyectos por valor y protección, y pasa casi todo lo demás.** Contra dos jugadores ya estás apretando mucho más allá de tu rango de mano a mano; contra tres o más, una c-bet de farol pelado es simplemente quemar fichas, porque casi siempre alguien tiene algo. El range betting — apostar todo tu rango pequeño — es una idea de *mano a mano* y no se traslada a los botes multiway. Ante la duda con una mano marginal y dos o más rivales, pasa.

---

## La c-bet retrasada

Pasar el flop no es el final de la mano. Una **c-bet retrasada** — pasar el flop como agresor del preflop y luego apostar el turn — es una de las jugadas más infrautilizadas del póker. Brilla cuando:

- El **flop favoreció a tu rival** (un board bajo y conectado), así que apostar era malo — pero el **turn cambia el panorama** (una sobrecarta, o una carta que sube tu equity).
- **Pasaste una mano decente** en posición y ahora quieres apostar una calle por valor ya que el board es más seguro.
- Quieres **atrapar floats**: los jugadores que planeaban hacer bluff-raise a tu c-bet del flop no tienen apuesta que atacar, y luego se enfrentan a tu apuesta del turn.

Retrasar convierte un sitio donde una c-bet automática habría sangrado fichas en una apuesta controlada e informada una calle después.

---

## Cuándo NO cbetear (pasar es un arma, no una bandera blanca)

Hagamos el "no" explícito, porque es donde se ahorra el dinero:

- **El board machacó el rango de tu rival.** Un flop 7‑6‑5 o 9‑8‑7 liga con las manos que pagan una subida mucho más fuerte de lo que liga con las tuyas. Apostar aquí solo dona fichas — pasa.
- **Estás fuera de posición en un board dinámico** con una mano marginal. Actuando primero sin información, mantén el bote pequeño y pasa.
- **Estás multiway con aire.** Cubierto arriba — sin fold equity, no hay apuesta.
- **Tu mano quiere proteger un rango de check.** A veces pasas una mano fuerte a propósito para que tus checks no sean automáticamente débiles.

El cambio de mentalidad que te hace ganador: **pasar no es rendirse.** Los buenos jugadores pasan *mucho*, a propósito, y eso hace que sus apuestas den mucho más miedo cuando llegan. Si te sientes obligado a apostar solo porque subiste en el preflop, ese reflejo te está costando dinero.

---

## Una mano de c-bet real, de principio a fin

Dos situaciones de la misma sesión muestran ambas caras de la decisión.

**Situación 1 — una c-bet de manual.** Subo ==A♣K♦== y la ciega grande paga. Flop: ==K♠ 7♦ 2♣.== Es un board alto, seco y desconectado que pertenece a mi rango — y he ligado **top pair, top kicker**: mi K♦ empareja el K♠, con el as como el mejor kicker posible (mejores cinco = K♦ K♠ A♣ 7♦ 2♣). Apuesto **un tercio del bote** como apuesta de rango: les cobra a todas sus manos falladas y mantiene dentro reyes y parejas peores. Una c-bet fácil y rentable.

**Situación 2 — un check de manual.** Misma sesión, subo ==A♥Q♥== y la ciega grande paga. Flop: ==7♠ 6♠ 5♦.== Este board machaca las manos exactas con las que pagó — conectores del mismo palo, parejas pequeñas y escaleras — mientras yo solo tengo as-alto sin pareja y sin proyecto (no hay corazones en la mesa, así que ni siquiera un proyecto de color por puerta trasera). Dos años antes habría "continuado" por costumbre y me habrían resubido. Ahora **paso y me rindo.** Si viene un turn seguro y recojo equity, tengo disponible una c-bet retrasada; si no, he perdido lo mínimo.

Misma subida preflop, flops opuestos, jugadas correctas opuestas. Esa es toda la lección: **el board decide, no el hecho de que subiste.**

---

## Los 7 errores de c-bet más comunes

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| El error | Por qué te cuesta | La solución |
|:---|:---|:---|
| **Cbetear cada flop en piloto automático** | Ignora que muchos boards favorecen a quien pagó | Lee la textura primero |
| **Apostar grande con un rango amplio** | Los rangos amplios quieren tamaño pequeño, no grande | Pequeño en seco, grande solo cuando polarizas |
| **Cbetear de farol en multiway** | El fold equity se derrumba con más jugadores | Solo valor y proyectos contra 2+ |
| **Cbetear OOP demasiado a menudo** | No puedes realizar equity actuando primero | Pasa más, construye un rango de check |
| **Apostar contra un board que les ligó** | 7‑6‑5 machacó su rango, no el tuyo | Pasa y ríndete |
| **Barrel de "uno y listo"** | C-bet en el flop, siempre te rindes en el turn = fácil de flotar | Ten un plan de turn antes de disparar |
| **Triple barrel sin equity** | Farolear un stack sin outs ni bloqueadores | Farolea con equity de respaldo o buenos bloqueadores |

</div>

Cada uno de estos se remonta a la misma raíz: **cbetear en piloto automático en vez de leer el board.** Corrige eso y tu juego de flop sube un nivel.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-strategy | Las 5 decisiones detrás del póker ganador | /images/holdem-strategy-hero.webp
/es/blog/holdem-3bet | Cómo hacer un 3-bet (y enfrentarte a uno) | /images/holdem-3bet-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué es una apuesta de continuación en el póker?**

A. Una apuesta de continuación, o c-bet, es una apuesta hecha en el flop por el jugador que subió antes del flop. Estás "continuando" para representar la fuerza que mostraste en el preflop. No necesitas haber ligado el flop para cbetear — como una mano falla el flop cerca de dos tercios de las veces, una c-bet bien elegida gana el bote a menudo cuando tu rival no tiene nada.

**Q. ¿Por qué se llama apuesta de continuación?**

A. Porque continúas la agresión que empezaste antes del flop. Subiste en el preflop para tomar la iniciativa, y la apuesta del flop continúa esa historia hacia la siguiente calle. Si otro hubiera subido en el preflop, tu apuesta del flop no sería una c-bet — el término se refiere específicamente a que el agresor del preflop apueste el flop.

**Q. ¿Deberías cbetear cada flop?**

A. No — este es el error de c-bet más común. Apuesta los flops que favorecen a tu rango (boards altos y secos como K-7-2, donde tienes más top pairs y sobrepares) y pasa los que favorecen a tu rival (boards bajos y conectados como 7-6-5 que ligan con las manos que él pagó). Cbetear cada flop en piloto automático lo castigan los buenos jugadores.

**Q. ¿Con qué frecuencia deberías cbetear?**

A. Depende de la posición, el board y el número de rivales, así que trátalo como rangos, no reglas: aproximadamente 70–100% (a un tamaño pequeño) en posición mano a mano en un board seco, alrededor de 40–50% fuera de posición, y 50% o menos multiway. Una tasa global sana de c-bet en el flop es cerca del 55–70% — más del 85% significa que estás en piloto automático.

**Q. ¿Cuánto deberías cbetear?**

A. Ajusta el tamaño al board. En boards secos y estáticos apuesta pequeño — alrededor de un tercio del bote — porque el rango de tu rival es débil y no necesitas cobrarles a los proyectos. En boards húmedos y dinámicos apuesta grande — dos tercios del bote o más — para cobrarles a los colores y proyectos de escalera y construir el bote con tus manos fuertes. En torneos, inclínate más pequeño, a menudo medio bote o menos.

**Q. ¿Deberías cbetear fuera de posición?**

A. Menos a menudo que en posición. Actuando primero en cada calle sin información, no puedes realizar tu equity igual de bien, así que pasas mucho más — incluso algunas manos que apostarías automáticamente en posición — y a propósito mantienes algunas manos fuertes en tu rango de check para que tus checks no sean automáticamente débiles. La posición hace que las c-bets funcionen mejor, sin discusión.

**Q. ¿Deberías cbetear en un bote multiway?**

A. Mucho menos que mano a mano. Cada rival extra hace más probable que alguien ligara, así que tu fold equity se derrumba. Contra dos o más jugadores, apuesta tus manos hechas fuertes y mejores proyectos por valor y protección, y pasa casi todo lo demás. Apostar faroles contra tres o más jugadores es un clásico perdedor de dinero.

**Q. ¿Qué es una c-bet retrasada?**

A. Una c-bet retrasada es cuando el agresor del preflop pasa el flop y luego apuesta el turn. Es útil cuando el flop favoreció a tu rival (así que apostar era malo) pero el turn mejora tu equity, cuando pasaste una mano decente en posición, o para atrapar rivales que planeaban hacer bluff-raise a tu apuesta del flop. Es una de las jugadas rentables más infrautilizadas del póker.

**Q. ¿Cuándo NO deberías cbetear?**

A. No cbetees cuando el board machacó el rango de tu rival (boards bajos y conectados), cuando estás fuera de posición con una mano marginal en un board dinámico, cuando estás multiway con aire, o cuando tu mano prefiere proteger un rango de check. Pasar en estos sitios no es debilidad — ahorra fichas y hace tus apuestas futuras más creíbles.

**Q. ¿Es la c-bet un farol?**

A. A veces sí, a veces no — ese es el punto. Muchas c-bets son semifaroles o faroles puros con manos que fallaron, apostando porque tu rival probablemente falló también. Otras son apuestas de valor con manos fuertes. Una estrategia de c-bet equilibrada mezcla ambas en los mismos boards, así que los rivales no pueden saber si tu apuesta del flop significa fuerza o aire.

**Q. ¿Qué es un buen porcentaje de c-bet en un HUD de póker?**

A. Alrededor del 55–70% para c-bet en el flop es una banda sana y equilibrada. Más de un 85% señala a alguien que cbetea demasiado y puede ser explotado flotando y resubiendo; por debajo de un 40% señala a un jugador que solo apuesta cuando es fuerte, así que puedes foldear con confianza a sus c-bets y disparar cuando pase. Trátalo como un chequeo de salud, no como un objetivo.

---

## El manual de la c-bet, en resumen

1. **Una c-bet es una apuesta en el flop del agresor del preflop** — y funciona porque las manos fallan el flop cerca de dos tercios de las veces.
2. **El board decide.** Apuesta los boards altos y secos que favorecen a tu rango; pasa los boards bajos y conectados que favorecen al de tu rival.
3. **La ventaja de rango marca la frecuencia; la ventaja de nuts marca el tamaño.** Apuesta a menudo en los boards que dominas; apuesta grande solo cuando tienes más de las nuts.
4. **Pequeño (⅓) en seco, grande (⅔+) en húmedo.** Cbetea menos fuera de posición, y mucho menos multiway.
5. **Pasar es un arma.** Los mejores jugadores pasan a menudo y a propósito — la c-bet es un bisturí, no un martillo.

Domina esto y dejarás de quemar botes en boards que nunca fueron tuyos para apostar. Combina un cbeteo afilado con un buen [juego de 3-bet](/es/blog/holdem-3bet), verdadera conciencia de la [posición](/es/blog/holdem-position-play) y el [marco de estrategia](/es/blog/holdem-strategy) completo, y tu juego de flop dejará atrás en silencio a la multitud del "apuesta cada flop".

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">El marco de las 5 decisiones</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Dónde encaja la c-bet en un juego ganador</div>
  </a>
  <a href="/es/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">El 3-bet explicado</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El cbeteo también empieza en botes de 3-bet</div>
  </a>
  <a href="/es/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jugar tu posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué las c-bets funcionan mejor en posición</div>
  </a>
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué una c-bet grande les cobra a los proyectos</div>
  </a>
</div>
`.trim(),
};

export default POST;
