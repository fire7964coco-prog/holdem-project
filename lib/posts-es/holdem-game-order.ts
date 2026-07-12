import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-game-order",
  title: "Cómo jugar al Texas Hold'em: el orden de juego, de las ciegas al showdown",
  seoTitle: "¿No sabes cuándo apostar? — Orden de juego en Texas Hold'em",
  desc: "¿Te quedas en blanco cuando te toca en el Hold'em? Aquí tienes el orden completo — preflop, flop, turn, river y showdown — con una mano real paso a paso.",
  tldr: "Una mano de Texas Hold'em sigue este orden: se ponen las ciegas → se reparten dos cartas propias → preflop → flop (3 cartas) → turn (1 carta) → river (1 carta) → showdown, con cuatro rondas de apuestas en total.",
  category: "rules",
  date: "2026-06-10",
  updated: "2026-07-12",
  masterUpdated: "2026-07-02",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🎬",
  image: "/images/blog-holdem-game-flow.webp",
  imageAlt: "Diagrama del orden de juego del Texas Hold'em — las seis etapas: ciegas, preflop, flop, turn, river y showdown",
  tags: ["como jugar texas holdem", "reglas texas holdem", "orden de juego poker", "preflop flop turn river", "rondas de apuestas poker", "quien habla primero poker", "como funciona una mano de poker", "showdown poker"],
  content: `
Todo el que se sienta a su primera partida de Texas Hold'em pregunta lo mismo: ==r:*"Un momento — ¿a quién le toca, y cuándo tengo que poner dinero?"*== Sabes que te dan cartas. Lo que no sabes es cuándo se apuesta, cuándo salen más cartas y cómo se decide de verdad el ganador.

Esta es la **guía del orden de juego**: ciegas, preflop, flop, turn, river, showdown, y quién habla primero en cada momento. Si empiezas de cero y quieres el paquete completo para principiantes — reglas, fichas, jerarquía de manos, primera estrategia y un PDF imprimible — empieza por las [reglas del Texas Hold'em para principiantes](/es/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp"). Luego vuelve aquí para el desarrollo detallado de la mano.

---

### Una mano en 15 segundos

Se ponen las ciegas (apuestas obligatorias) → se reparten dos **cartas propias** a cada jugador → apuestas de **preflop** → se destapan las tres cartas del **flop** → apuestas → se añade la carta del **turn** → apuestas → se destapa la última carta, el **river** → apuestas → los jugadores que quedan van al showdown → gana la mejor mano de cinco cartas.

![Orden de juego del Texas Hold'em — ciegas, preflop, flop, turn, river y showdown](/images/blog-holdem-game-flow.webp "Las seis etapas de una mano de Texas Hold'em, de las ciegas al showdown")

---

## ¿Qué es el Texas Hold'em?

El Texas Hold'em es la modalidad de póker más jugada del mundo. Del Main Event de las WSOP a una timba casera, cuando alguien dice "póker" casi siempre se refiere al Hold'em.

La regla central es simple: formas tu **mejor mano de cinco cartas** combinando tus **dos cartas propias con cinco cartas comunitarias compartidas**. La suerte reparte las cartas, pero entender el orden de juego — y tomar la decisión correcta en cada etapa — es lo que separa a los ganadores del resto.

---

## Antes del reparto: el botón y las ciegas

Antes de que salga ninguna carta, dos cosas ordenan la mesa: el **botón del dealer** y las **ciegas**.

El **botón del dealer (el "botón", marcado con una D)** es un disco redondo que señala quién "reparte" en esa mano. Aunque haya un crupier de la casa, el botón decide el orden de las apuestas, y se mueve un asiento en el sentido de las agujas del reloj después de cada mano.

Las **ciegas** son apuestas obligatorias que se ponen antes de repartir. Sin ellas, todo el mundo podría pasar y tirar las cartas gratis; ==g:las ciegas meten dinero en el centro y dan a los jugadores un motivo para pelear==. (¿Te suenan a chino? Aquí tienes exactamente [cómo funcionan la ciega pequeña y la ciega grande](/es/blog/holdem-blind-meaning).)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ciega | Posición | Ejemplo |
|:---|:---|:---:|
| Ciega pequeña (SB) | Primer asiento a la izquierda del botón | 1.000 |
| Ciega grande (BB) | Segundo asiento a la izquierda del botón | 2.000 |

</div>

Las ciegas no son solo una cuota de entrada — ==son el punto de partida de la posición y de la estrategia==.

---

## Etapa 1 — Preflop: la primera decisión marca el tono

Con las ciegas puestas, el dealer reparte a cada jugador dos **cartas propias** boca abajo. Solo tú puedes verlas, y empiezan las apuestas del **preflop**.

La acción arranca a la izquierda de la ciega grande y avanza en el sentido de las agujas del reloj. Cuando te toca, eliges una de estas opciones:

- **Fold (retirarte)** — abandonas la mano y tiras tus cartas. No pierdes nada más, pero tampoco puedes ganar.
- **Call (pagar)** — igualas la apuesta actual (en el preflop, la ciega grande).
- **Raise (subir)** — apuestas más que la ciega grande para meter presión a los rivales.
- **3-bet (resubir)** — una subida por encima de la subida de otro. Señal de mano fuerte.

==r:La mayoría de los principiantes juegan casi todas las manos "solo por ver el flop". Es el hábito más caro que existe en el póker.== ==g:**Los buenos jugadores tiran la mayoría de sus manos en el preflop y solo juegan entre el 15 y el 25% de ellas.**==

### Manos iniciales sólidas para empezar

- **Premium:** A♠A♥ (ases de mano), K♠K♥, Q♠Q♥, J♠J♥
- **Fuertes:** A♠K♥ ("Big Slick"), A♠Q♥, A♠J♥, 10♠10♥
- **Según la situación:** 9♠9♥, 8♠8♥, K♠Q♥, K♠J♥

Cuáles de estas puedes abrir de verdad depende de tu asiento. Para ir más allá, busca la tabla completa de las 169 manos iniciales del Texas Hold'em desglosada por posición.

---

## Etapa 2 — El flop: tres cartas comunitarias

Cuando terminan las apuestas del preflop, el dealer destapa tres **cartas comunitarias** en el centro de la mesa. Esto es el **flop**.

Ahora ya puedes leer una mano real de cinco cartas: tus dos cartas propias más las tres de la mesa. Mira dos cosas a la vez:

- **Lo que tienes ahora** — una pareja, doble pareja, o nada todavía.
- **Lo que aún puedes ligar** — un proyecto (**draw**) de color o de escalera que puede completarse en las calles siguientes.

![Infografía de las tres calles del Texas Hold'em — el flop K♥ 7♦ 2♣, el turn 9♠ y el river Q♥](/images/blog-holdem-card-stages.webp "Las calles: tres cartas en el flop, luego una en el turn y una en el river")

El flop también desbloquea una opción nueva: el **check (pasar)**. Si nadie ha apostado todavía, puedes pasar y ceder la acción sin poner fichas. Pero si un rival apuesta después de que pases, tendrás que pagar, subir o retirarte.

---

## Etapa 3 — El turn: el panorama se aclara

Tras la ronda de apuestas del flop, se reparte una carta comunitaria más — el **turn**. Ya hay cuatro cartas en la mesa.

El turn es una calle con mucho peso estratégico:

- ¿Se completó tu proyecto de escalera o de color?
- ¿Qué dicen las acciones de tu rival en el preflop y el flop sobre su rango?
- ¿Merece la pena llevar esta mano hasta el river?

==r:Si pasas de forma pasiva en el turn y de repente sueltas una apuesta grande en el river, los rivales atentos leen debilidad.== ==g:**Con una mano fuerte, apuesta el turn para inflar el bote**== mientras tu rival todavía está dispuesto a pagar.

---

## Etapa 4 — El river: la última carta, la última decisión

Después de la ronda de apuestas del turn se destapa la quinta y última carta comunitaria — el **river**. Ya están fuera las cinco cartas comunitarias y no queda información nueva por llegar.

Errores clásicos de river:

- **Pagar hasta el final con una mano floja** — la trampa del "ya que he llegado hasta aquí…".
- **Pasar con una mano fuerte** — regalarle a tu rival un showdown gratis.
- **Intentar un farol repentino en el river** — si fuiste pasivo en todas las calles anteriores, una apuesta grande en el river rara vez cuenta una historia creíble.

El river es donde se liquida toda la mano. Pon en la balanza la fuerza de tu mano, el patrón de apuestas de tu rival y la mesa completa, y toma tu decisión final.

---

## Etapa 5 — Showdown: ganan las mejores cinco cartas

Si después de las apuestas del river quedan dos o más jugadores, la mano va al **showdown**.

![Infografía del showdown en el póker — en una mesa 10♣ 7♥ J♦ 4♠ 9♣, los ases de mano A♥ A♦ ganan a los reyes K♥ K♣](/images/blog-holdem-showdown.webp "En el showdown los jugadores que quedan enseñan sus cartas — aquí la pareja más alta, ases contra reyes, se lleva el bote")

Reglas del showdown:

- Cada jugador forma su **mejor mano de cinco cartas** con sus dos cartas propias y las cinco comunitarias.
- No estás obligado a usar tus dos cartas — puedes usar una, o incluso jugar la mesa (cero) si esas son tus mejores cinco.
- El jugador que hizo la última acción agresiva (apuesta o subida) enseña primero; si en el river todos pasaron, enseña primero el **primer jugador activo a la izquierda del botón**.
- Un jugador que pierde puede simplemente **tirar sus cartas sin enseñarlas** (hacer "muck").
- Las manos iguales **dividen el bote** ("split") a partes iguales.

Quién tiene que enseñar primero, cuándo puedes tirar sin enseñar y la etiqueta en torno al slow roll están explicados al completo en las [reglas del showdown](/es/blog/holdem-showdown-rules).

---

## ¿Quién habla primero en cada calle?

"¿A quién le toca?" tiene una respuesta distinta antes y después del flop — y ese único cambio es el motor de toda la estrategia de posición.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Calle | Habla primero | Habla último |
|------|------|------|
| Preflop | El jugador a la izquierda de la ciega grande ("UTG") | Ciega grande |
| Flop | Ciega pequeña (o el primer jugador activo a la izquierda del botón) | Botón |
| Turn | Igual que en el flop | Botón |
| River | Igual que en el flop | Botón |

</div>

El truco para recordarlo: ==**antes del flop, mira a la izquierda de la ciega grande; después del flop, mira a la izquierda del botón.**== El botón habla el último en todas las calles postflop, y precisamente por eso es el asiento más rentable de la mesa — las posiciones en el póker, de UTG al botón, dan para una guía entera.

==g:**El heads-up (2 jugadores) es la excepción:**== el botón pone la ciega *pequeña* y habla **primero** en el preflop, pero **último** en el flop, el turn y el river. Ese es el orden que se usa en la mano completa de ejemplo de más abajo.

---

## Todo el orden de un vistazo

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Etapa | Qué ocurre | Cartas comunitarias | ¿Apuestas? |
|:---|:---|:---:|:---|
| Ciegas | SB y BB ponen las apuestas obligatorias | 0 | Obligatorias |
| Preflop | Se reparten dos cartas propias → se apuesta | 0 | ✅ |
| Flop | Se destapan tres cartas comunitarias | 3 | ✅ |
| Turn | Una carta comunitaria más | 4 | ✅ |
| River | Última carta comunitaria | 5 | ✅ |
| Showdown | Se comparan las mejores cinco cartas → ganador | 5 | — |

</div>

### ⚡ Una frase para recordar cada calle

- **Preflop** = arranque (decides solo con tus dos cartas)
- **Flop** = cambio (tres cartas abren las posibilidades)
- **Turn** = decisión (tu última oportunidad real de planear el river)
- **River** = desenlace (todas las cartas fuera, apuesta final)
- **Showdown** = resultado (se lo llevan las mejores cinco cartas)

---

## Sigue una mano completa, paso a paso

![Ejemplo de una mano completa de Texas Hold'em — del preflop al showdown](/images/holdem-game-example-fullhand.webp "Seguimos una mano completa por todas las calles hasta el showdown")

Leer sobre calles es abstracto. Vamos a jugar una sola mano heads-up de la primera carta a la última, con cartas y cantidades de fichas reales.

**Situación:** Heads-up (mano a mano). Ciegas: SB 1.000 / BB 2.000.

- **Jugador A (tú):** A♠ K♥ (as-rey de palos distintos)
- **Jugador B (rival):** 9♦ 9♣ (pareja de nueves de mano)

### Preflop

A sube a **6.000** con su Big Slick. B paga con los nueves.
**Bote: 12.000**

### Flop: K♦ 9♠ 3♥

- **A:** pareja máxima con el mejor kicker (pareja de reyes). Pinta fuerte.
- **B:** tres nueves — un **set**. Un monstruo desde ya.

B pasa, A apuesta **8.000**, B paga.
**Bote: 28.000**

### Turn: 2♣

- **A:** sin cambios, sigue con la pareja máxima.
- **B:** sigue con el set, no necesita mejorar.

B pasa, A apuesta **15.000** (medio bote aproximadamente), B paga.
**Bote: 58.000**

### River: A♥

- **A:** el as se empareja — ahora tiene **doble pareja, ases y reyes**. Encantado de la vida, apuesta **30.000**.
- **B:** el set sigue aplastando a la doble pareja. Sube a **70.000**.
- **A:** convencido de que su doble pareja es buena, paga.

**Bote: 198.000**

### Showdown

- A: A♠ K♥ + A♥ K♦ 9♠ → **doble pareja (ases y reyes)**
- B: 9♦ 9♣ + 9♠ K♦ A♥ → **trío (de nueves)**

**Ganador: B** — el trío gana a la doble pareja.

La lección: ==r:cuando el river convirtió la mano de A en doble pareja, *parecía* la ganadora — pero B llevaba un set desde el flop todo el tiempo.== ==g:**Leer la mesa completa, y no solo tu propia mejora, es el corazón del Hold'em.**==

---

## Las 7 acciones de apuesta, explicadas al completo

![Las acciones de apuesta en el póker — check, call, fold, bet, raise, resubida y all-in](/images/holdem-betting-options-guide.webp "Todas las acciones de apuesta que puedes hacer en el Texas Hold'em")

Aquí tienes todas las acciones disponibles en la mesa — la parte que más confunde a los principiantes.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Acción | Qué hace | Cuándo está disponible |
|------|------|------|
| Fold | Abandonas la mano y tiras tus cartas | En cualquier momento |
| Check (pasar) | Cedes la acción sin apostar | Solo si no hay apuesta delante de ti |
| Call (pagar) | Igualas la apuesta actual | Cuando hay una apuesta delante |
| Bet (apostar) | Haces la primera apuesta de la ronda | Cuando nadie ha apostado todavía |
| Raise (subir) | Aumentas por encima de la apuesta actual | Cuando hay una apuesta delante |
| Re-raise (3-bet) | Subes por encima de una subida | Cuando hay una subida delante |
| All-in | Metes todas tus fichas | En cualquier momento |

</div>

==r:**Importante:** en el preflop no puedes pasar==, porque la ciega grande ya es una apuesta viva. ==Pasar solo es posible a partir del flop.==

Para una guía de decisión más profunda sobre cuándo usar cada movimiento — con una tabla de decisión check-call-raise-fold — mira las [acciones de apuesta explicadas](/es/blog/holdem-betting-actions).

---

## Las 10 manos de póker que tienes que saberte

Para ganar en el showdown necesitas saber al instante qué mano gana a cuál. Este es el orden de la **jerarquía de manos**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Mano | Ejemplo | Frecuencia |
|------|------|------|------|
| 1 | Escalera Real | A♠ K♠ Q♠ J♠ 10♠ | Rarísima |
| 2 | Escalera de Color | 5♥ 6♥ 7♥ 8♥ 9♥ | Muy rara |
| 3 | Póker | A♠ A♥ A♦ A♣ K♠ | Rara |
| 4 | Full | K♠ K♥ K♦ A♠ A♥ | Poco frecuente |
| 5 | Color | A♠ K♠ 8♠ 5♠ 2♠ | Poco frecuente |
| 6 | Escalera | 5♥ 6♠ 7♦ 8♣ 9♥ | Ocasional |
| 7 | Trío | Q♠ Q♥ Q♦ 5♠ 7♥ | Ocasional |
| 8 | Doble Pareja | J♠ J♥ 8♦ 8♣ A♠ | Común |
| 9 | Pareja | K♠ K♥ 7♦ 4♣ 2♠ | Muy común |
| 10 | Carta Alta | A♠ Q♥ 8♦ 5♣ 2♠ | Muy común |

</div>

¿Quieres el desglose completo — incluido cómo deciden el ganador los kickers y los empates? Mira la guía completa de la [jerarquía de manos de póker](/es/blog/holdem-hand-rankings).

---

## Los 5 errores que todo principiante debe evitar

Puedes saberte el orden de juego de memoria y aun así ir sangrando fichas si caes en esto.

### 1. Jugar casi todas las manos

"Vamos a ver un flop" es perdedor a largo plazo. Los jugadores fuertes juegan solo el 15–25% de las manos y tiran el resto sin dudar. Si pagas el preflop con dos cartas cualesquiera, estás pagando por perder.

### 2. Ignorar la posición

Cuanto más cerca estés del botón, mejor — hablar el último te deja ver lo que hacen todos los demás antes de decidir. Juega tight (cerrado) en posiciones tempranas y más agresivo en posiciones tardías, y estudia el mapa de asientos y los rangos de apertura de cada posición, de UTG al botón.

### 3. Perseguir proyectos a ciegas

Un proyecto de color o de escalera no significa pagar en automático. Tienes que pesar las **pot odds** — el precio de pagar frente al tamaño del bote. Si el bote es de 100.000 y tienes que pagar 50.000, tu proyecto necesita completarse al menos un 33% de las veces para que compense.

### 4. Tirarte un farol en el river con una mano floja de la nada

Si pasaste de forma pasiva todo el camino y de repente lo metes todo en el river, los rivales te leen al instante. Un farol necesita una historia coherente desde la primera calle.

### 5. Leer mal tu mano en el showdown

Un clásico del principiante: pensar "¡tengo doble pareja!" cuando en realidad tienes una pareja. Practica elegir las **mejores cinco cartas** entre tus dos cartas propias y las cinco de la mesa hasta que te salga solo.

---

## Cómo empezar a jugar hoy mismo

Cuando el orden de juego te haga clic, toca jugar de verdad.

- **Practica con dinero ficticio** — casi todas las apps y salas de póker tienen partidas gratis. Pon esta guía a trabajar en una partida real.
- **Relee este artículo dos o tres veces** — la secuencia tiene que salirte sola para no quedarte nunca en blanco en la mesa.
- **Hazte una chuleta con la jerarquía de manos** — apunta las diez manos en un papel y tenlo a la vista.
- **Empieza en los niveles más bajos** — cuanto más baratos sean tus errores, más rápido aprendes.

El Texas Hold'em se aprende en media hora y se tarda una vida en dominar. Pero con lo básico que has visto hoy tienes de sobra para sentarte a jugar. Para la historia y las reglas formales, la [entrada de Wikipedia sobre el Texas hold 'em](https://es.wikipedia.org/wiki/Texas_hold_%27em) es una buena referencia.

---

:::readnext[Sigue leyendo]
/es/blog/texas-holdem-rules-for-beginners | Reglas del Texas Hold'em para principiantes | /images/rules-texas-holdem.webp
/es/blog/holdem-betting-actions | Acciones de apuesta explicadas | /images/holdem-betting-actions-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cuál es el orden exacto de juego en el Texas Hold'em?**

A. Se ponen las ciegas → se reparten dos cartas propias → apuestas de preflop → se destapa el flop (3 cartas) y se apuesta → turn (1 carta) y se apuesta → river (última carta) y se apuesta → showdown (se comparan las mejores cinco cartas).

**Q. ¿Cuál es la diferencia entre el preflop y el flop?**

A. El preflop es antes de que salga ninguna carta comunitaria — decides solo con tus dos cartas propias. El flop es cuando ya se han destapado tres cartas comunitarias, y ahí lees tanto tu mano actual como tu potencial de proyecto.

**Q. ¿Qué diferencia hay entre pasar (check) y pagar (call)?**

A. Pasar cede la acción sin apostar, y solo es posible cuando no hay ninguna apuesta delante de ti. Pagar iguala la apuesta de un rival. Si alguien ha apostado, no puedes pasar — tienes que pagar, subir o retirarte.

**Q. ¿Tengo que usar mis dos cartas en el showdown?**

A. No. Formas la mejor mano de cinco cartas con cualquier combinación de tus dos cartas propias y las cinco comunitarias — incluso usando solo una, o ninguna ("jugar la mesa").

**Q. ¿Qué son las pot odds?**

A. Las pot odds son la relación entre el tamaño actual del bote y lo que te cuesta pagar. Si el bote es de 100.000 y un rival apuesta 20.000, arriesgas 20.000 para ganar un bote de 120.000 (6:1). Si tu probabilidad de ganar es mejor que esas odds, pagar es rentable.

**Q. ¿Cuándo debería ir all-in?**

A. El all-in significa apostar todas las fichas que tienes. Úsalo con una mano muy fuerte (las nuts), o como farol para que los rivales tiren sus cartas. Una vez estás all-in ya no puedes apostar más, pero sigues optando a la parte del bote que igualaste. Cuando los stacks son distintos se crean botes secundarios (side pots) — mira las [reglas del all-in y los side pots](/es/blog/holdem-all-in-rules).

**Q. ¿Cuántas rondas de apuestas hay en una mano?**

A. Cuatro: preflop, flop, turn y river. Las ciegas son apuestas obligatorias, y en el showdown ya no se apuesta.

---

## Las 3 cosas que debes recordar

1. ==**El orden:**== ciegas → preflop → flop (3) → turn (1) → river (1) → showdown, con ==cuatro rondas de apuestas==.
2. ==**Las lecturas:**== en cada calle, valora a la vez lo que tienes ahora y lo que aún puedes ligar — y mira la mesa completa, no solo tu propia mano.
3. ==g:**La disciplina:**== tira la mayoría de las manos en el preflop, respeta la posición y apuesta fuerte solo cuando tu historia tenga sentido.

Apréndete la secuencia de memoria, machácala en partidas gratis y no volverás a quedarte helado preguntándote a quién le toca. Ya estás listo para sentarte.

---

## Artículos relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guía para principiantes</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del Texas Hold'em para principiantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Reglas completas, fichas, jerarquía de manos + PDF imprimible</div>
  </a>
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Jerarquía de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Manos de póker — de la mejor a la peor</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Las 10 manos con probabilidades, ejemplos y problemas de mesa</div>
  </a>
</div>
`.trim(),
};
