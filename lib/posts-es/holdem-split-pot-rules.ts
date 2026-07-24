import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "¿Ganaste la mano pero solo te dieron la mitad? Reglas del bote dividido en Hold'em",
  seoTitle: "¿Se puede empatar en el póker? — Bote dividido y split",
  desc: "¿Se puede empatar en el póker? Sí. Cuándo se divide el bote: mismas cinco cartas, la mesa juega para todos, la ficha impar y los botes laterales.",
  tldr: "Sí — en el póker se puede empatar. El bote se divide (un \"split\" o \"chop\") cuando dos o más jugadores muestran las mismas mejores cinco cartas en el showdown. El palo nunca rompe el empate, y la ficha impar que sobra va al primer jugador empatado a la izquierda del botón.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-24",
  masterUpdated: "2026-07-18",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Bote dividido en el póker — mesa 8♠ 8♥ 8♦ A♣ K♠ con J♠ 10♥ contra 5♣ 2♦, las fichas partidas por una línea dorada porque ninguna mano supera a la mesa",
  tags: ["bote dividido poker", "se puede empatar en poker", "split poker", "cuando se divide el bote", "regla ficha impar poker", "la mesa juega", "empate texas holdem"],
  content: `
En mis primeros días de póker lideré cada calle: subí en preflop, aposté en flop y turn, me pagaron en el river. Di la vuelta a mi J-10. Mi rival mostró **5-2**. "Gano yo, ¿no?" El dealer no dijo nada y señaló la mesa: ==**8-8-8-A-K**==. ==r:Ninguna de nuestras cartas superaba el trío de ochos con kicker de As-Rey==, así que el dealer partió el bote en dos sin decir palabra.

Recibir la mitad de un bote que dabas por ganado desconcierta. Pero ==g:los botes divididos siguen reglas claras== — y responden a la pregunta que más hacen los que empiezan: **¿se puede empatar en el póker?** Sí. Aquí tienes todas las formas en que ocurre.

---

> **Respuesta rápida**
> El bote se **divide** (lo que también se llama **split** o **chop**) cuando dos o más jugadores tienen las **mismas mejores cinco cartas** en el showdown. Las fichas se reparten a partes iguales. El palo nunca rompe el empate, y la ficha impar que sobra va al primer jugador empatado a la izquierda del botón.

---

### Los números clave

:::stripe
5 | situaciones en las que se divide un bote de Hold'em
0 | empates rotos por el palo en Texas Hold'em
1 | ficha impar — va al primer asiento empatado a la izquierda del botón
:::

---

## ¿Qué es un bote dividido en el póker? (¿Y "chop" es lo mismo?)

Un **bote dividido** (split pot) ocurre cuando dos o más jugadores tienen las mismas mejores cinco cartas en el showdown, así que el dealer reparte las fichas por igual entre ellos. Un **chop** —o "bote partido"— es exactamente lo mismo en la jerga de mesa ("vamos a partir"). Los reglamentos dicen split; los jugadores dicen chop. La gente busca las dos, así que las verás usadas indistintamente.

La base: tu mano son siempre las ==**mejores cinco cartas**== de siete —tus dos cartas más las cinco de la mesa—. Dónde encaja cada mano de cinco cartas lo tienes en la [jerarquía completa de manos de póker](/es/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:Cuando las mejores cinco de dos jugadores son idénticas en valor, ninguno gana "más"== — el bote se divide, punto.

---

## ¿Se puede empatar en el póker? Las 5 situaciones que dividen el bote

Sí — los empates son un resultado normal y legal en el Texas Hold'em, y más frecuentes de lo que espera un principiante. Como todos comparten las mismas cinco cartas comunitarias, dos jugadores llegan a menudo a las mismas mejores cinco. Estas son las cinco formas en que ocurre.

### 1. Las mismas mejores cinco cartas
Dos jugadores hacen exactamente la misma mano de cinco cartas —mismos valores—, aunque sus cartas difieran en el palo.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Jugador A | Jugador B |
|---|---|---|
| **Mano** | K♠ 7♣ | K♥ 2♦ |
| **Mesa** | K♦ K♣ Q♥ Q♦ J♠ | (la misma) |
| **Mejores cinco** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → split== |

</div>

Ambos hacen el full KKK-QQ con la mesa más un rey. ==r:El palo de esos reyes da igual.==

### 2. La mesa juega
Las cinco cartas comunitarias ya son la mano más fuerte para todos los que quedan: es el bote 8-8-8-A-K de mi historia. Es el split más común de todos, así que tiene su propia sección más abajo.

### 3. La misma escalera
Dos escaleras con la misma carta alta empatan, sin importar el palo. En una mesa de 7♣ 6♦ 5♥ K♠ 2♣, tanto el 9♠ 8♠ de A como el 9♥ 8♦ de B hacen 9-8-7-6-5 —la misma altura—, así que **split**.

### 4. El mismo color
No hay jerarquía de palos, así que dos colores con los mismos cinco valores empatan. En la práctica esto casi siempre significa que la **propia mesa** es un color de cinco cartas. En K♠ J♠ 8♠ 4♠ 2♠, si A tiene A♥ Q♦ y B tiene 10♥ 9♦, ninguno tiene una pica —ambos juegan el color K-J-8-4-2 de la mesa y **parten**.

==r:Pero comprueba antes de dar nada por hecho:== cualquier pica en tu mano más alta que la pica más baja de la mesa mejora el color. Aquí hasta el modesto 3♠ hace K-J-8-4-3 y ==g:se lleva todo el bote== — y el A♠ hace el color máximo (nut flush).

### 5. Idénticos hasta el último kicker
Las parejas y las dobles parejas suelen decidirse por el kicker, pero si los kickers también coinciden, es un split. Con mesa A♦ Q♠ 9♣ 6♥ 2♠ y A♠ K♦ contra A♥ K♣, ambos jugadores tienen ==g:A-A-K-Q-9== → **split**. Cuando los kickers *difieren*, gana el más alto y se lleva todo el bote — cómo funciona esa comparación exactamente, mano a mano, está en las [reglas de kicker y desempate](/es/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## ¿Pueden dos jugadores ganar el mismo bote? Cuando la mesa juega

Sí — y ni siquiera hacen falta dos manos monstruo. Cuando las cinco cartas comunitarias ya forman las mejores cinco posibles para todos los que siguen, ==**la mesa juega**== y cada jugador restante comparte el bote, sean dos jugadores o cinco.

Es mi mano 8-8-8-A-K: mi J-10 y su 5-2 jugaban los dos el trío de ochos de la mesa con kicker de As-Rey —cinco idénticas, split automático—. El caso extremo es una mesa como A♠ K♠ Q♠ J♠ 10♠ (una escalera real): ninguna carta puede mejorarla, así que ==g:todos los que quedan parten==.

> **La comprobación:** ¿*tus* mejores cinco —usando al menos una carta tuya— superan las cinco de la mesa? Si sí, juegas tu mano. Si no, la mesa juega y lo más probable es que partas. El método completo para escanear una mesa así lo tienes en [cómo leer la mesa y encontrar tus mejores cinco](/es/blog/holdem-reading-the-board).

:::tip[Si la mesa juega y alguien apuesta en el river, piensa antes de pagar: cuando lo mejor que puedes hacer es empatar, pagar suele ser solo recomprar parte de tus propias fichas. Paga solo si tus cartas pueden superar de verdad su mano exacta.]:::

---

## 3 cosas que nunca rompen un empate en el póker

![Escalera real de picas = escalera real de corazones con un signo de igual dorado en medio — los palos nunca deciden al ganador en Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Valores idénticos siempre parten — no hay jerarquía de palos en Texas Hold'em")

Estos son los malentendidos detrás de casi todas las discusiones de "¿pero por qué es un split?!".

### ❌ "Mi palo es más alto, así que gano"
==r:Un color de picas **no** gana a un color de corazones.== El Texas Hold'em no tiene jerarquía de palos — ==valores idénticos parten, punto==. (Esto despista a quien viene de juegos que *sí* ordenan los palos.)

### ❌ "Mis cartas son más altas, así que gano"
Mesa 9♠ 8♦ 7♣ 6♥ 5♠ — una escalera servida. Tú tienes A♠ K♦; tu rival tiene 2♣ 3♥. ==r:**Split.**== Los dos jugáis la escalera 9-8-7-6-5 de la mesa, porque ==r:tus cartas altas nunca entran en las mejores cinco==. Una carta alta solo importa cuando de verdad juega como kicker — [qué es un kicker y cuándo entra en juego](/es/blog/holdem-kicker) traza esa línea con precisión.

### ❌ "Yo usé mis dos cartas y él solo una"
==r:Cuántas cartas propias uses da igual.== Lo único que cuenta son las cinco más fuertes de siete. ==g:Si ambos jugadores llegan a las mismas mejores cinco, es un chop sin importar cómo llegaron ahí.==

---

## ¿Quién se lleva la ficha de más? La regla de la ficha impar

A veces un bote no se divide de forma exacta —un bote de 101 fichas entre dos jugadores son 50 para cada uno con una ficha sobrante, y no hay medias fichas—. La regla estándar:

> ==La ficha impar sobrante va al primer jugador empatado **a la izquierda del botón**== (el asiento ganador que está antes en el sentido de las agujas del reloj desde el dealer).

En un split a tres bandas con dos fichas impares, los dos asientos que van antes en el sentido de las agujas del reloj reciben una cada uno. ==r:Las reglas de la casa pueden variar== — algunas salas asignan la ficha impar por carta alta o por palo — así que si hay dinero real en juego, pregunta al floor. ==g:Online, el software la asigna de forma automática por posición.==

---

## ¿Los botes laterales también se dividen? Empates cuando alguien está all-in

Cuando alguien está all-in, las fichas forman un ==**bote principal**== (todos son elegibles) más uno o varios ==**botes laterales**== (solo los stacks más profundos que siguieron apostando). Cada bote se adjudica —o se parte— ==**por separado**==, según la mejor mano entre los jugadores elegibles para ese bote.

Un ejemplo desarrollado: A hace all-in por 100; B y C ponen 300 cada uno. Eso es un **bote principal de 300** (100 × 3) y un **bote lateral de 400** (200 + 200, solo B y C). La mesa sale A♦ J♥ 7♠ 4♣ 2♥:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Jugador | Mano | Mejores cinco | Resultado |
|---|---|---|---|
| A (all-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | parte el bote principal → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | parte el principal (150) + gana el lateral (400) |
| C | K♦ K♠ | K-K-A-J-7 | pierde los dos → 0 |

</div>

A y B empatan con ases y kickers idénticos, así que ==g:se dividen el bote principal==; el bote lateral solo lo disputan B y C, y los ases de B ganan a los reyes de C sin discusión. ==r:Un jugador all-in solo puede ganar o partir los botes a los que realmente contribuyó.== Cómo se construyen esos botes en primer lugar —tope, elegibilidad para resubir, orden de showdown— lo tienes en la [guía de reglas del all-in y botes laterales](/es/blog/holdem-all-in-rules).

---

## ¿Alguna vez se divide el bote mitad alto, mitad bajo?

En el Texas Hold'em no. Puede que hayas oído hablar de "juegos de bote dividido" como el Omaha Hi-Lo o el Stud Hi-Lo, donde **cada** bote está diseñado para repartirse entre la mejor mano alta y la mejor mano baja que califica (ocho o mejor). Esa es otra familia de juegos. ==El Hold'em estándar es solo-alto== — el bote se divide *únicamente* cuando las mejores cinco cartas empatan de verdad.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-reading-the-board | Cómo leer la mesa y encontrar tus mejores cinco | /images/holdem-reading-the-board-hero.webp
/es/blog/holdem-all-in-rules | Reglas del all-in y botes laterales explicadas | /images/holdem-all-in-rules-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué es un bote dividido (split pot)?**

A. Un bote dividido es cuando dos o más jugadores empatan en el showdown con las mismas mejores cinco cartas, así que el dealer reparte las fichas por igual entre ellos en lugar de dárselas a un solo ganador. Es el mismo concepto que un "split" o un "chop".

**Q. ¿Cuándo se divide el bote en el póker?**

A. El bote se divide cuando dos o más jugadores tienen las mismas mejores cinco cartas en el showdown; las fichas se reparten a partes iguales entre ellos.

**Q. ¿Cómo se divide el bote en el póker?**

A. El dealer reparte las fichas por igual entre los jugadores empatados. Si el bote no se puede dividir de forma exacta, la ficha impar sobrante va al primer jugador empatado a la izquierda del botón. El palo nunca afecta al reparto, y cuando un jugador está all-in cada bote —principal y lateral— se divide por separado.

**Q. ¿Se divide el bote si ambos jugadores tienen la misma mano?**

A. Solo si las mejores cinco empatan por completo —la misma pareja con los mismos kickers, o la misma escalera, color o full—. Si algún kicker difiere, el kicker más alto gana todo el bote en lugar de dividirse.

**Q. ¿Se divide el bote con un full, una escalera o dos parejas?**

A. Solo cuando ambas manos son completamente idénticas. Dos fulls se dividen únicamente si coinciden el trío *y* la pareja —lo normal cuando el full está sobre la mesa—. Dos escaleras se dividen solo con la misma carta alta, y dos dobles parejas se dividen solo cuando coinciden ambas parejas y el kicker. En cualquier otro caso, la mano más alta se lleva todo el bote.

**Q. ¿Dos parejas iguales dividen el bote?**

A. Sí, si las mejores cinco cartas terminan siendo idénticas. Con dos parejas, el kicker (la quinta carta) suele romper el empate: si un jugador tiene un kicker más alto, gana todo el bote. Solo cuando las dos parejas *y* el kicker coinciden exactamente se divide el bote.

**Q. ¿Qué significa "bote partido" (chopped pot) en el póker?**

A. Un bote partido no es más que un bote dividido en jerga de mesa. "Chop" es lo que dicen los jugadores; "bote dividido" es el término del reglamento — ambos significan repartir el bote por igual entre las manos empatadas.

**Q. ¿El palo decide alguna vez quién gana un split?**

A. No. El Texas Hold'em no tiene jerarquía de palos, así que las manos de cinco cartas idénticas siempre se dividen sin importar el palo.

**Q. ¿Quién se lleva la ficha impar cuando un bote no se divide de forma exacta?**

A. Regla estándar: el primer jugador empatado a la izquierda del botón. Algunas salas la asignan por carta alta o por palo, así que las reglas de la casa pueden variar — online el software lo gestiona automáticamente.

**Q. ¿Pueden dividir un bote más de dos jugadores?**

A. Sí. Si tres o más jugadores tienen las mismas mejores cinco cartas, el bote se reparte por igual entre ellos — lo más habitual es cuando la mesa juega para todos.

**Q. ¿Cómo se gestionan los botes divididos cuando alguien está all-in?**

A. El bote se separa en un bote principal y botes laterales (side pots); cada uno se adjudica o se parte por separado según la mejor mano entre los jugadores elegibles para ese bote concreto.

**Q. ¿Cómo funciona un split pot con all-in o bote secundario?**

A. Cada bote se resuelve por su cuenta. Si un all-in empata para el bote principal, ese bote se divide entre los jugadores empatados, mientras el bote secundario (side pot) lo pelean solo los que siguieron apostando. Un jugador all-in solo puede ganar o partir los botes a los que aportó fichas — nunca el bote secundario construido con fichas que no pudo igualar. Los detalles de cómo se forman están en la [guía de reglas del all-in y botes laterales](/es/blog/holdem-all-in-rules).

**Q. ¿Cómo se calcula un bote secundario (side pot)?**

A. Cada jugador solo puede ganar de un rival tanto como él mismo puso. Si A hace all-in por 100 y B y C apuestan 300 cada uno, el bote principal es 100 × 3 = 300 (los tres elegibles) y el bote secundario es 200 × 2 = 400 (solo B y C). Cada bote va después a la mejor mano entre los jugadores elegibles para él.

**Q. ¿Quién es elegible para un bote secundario?**

A. Solo los jugadores que pusieron fichas en ese bote secundario concreto —los que siguieron apostando después de que otro jugador quedara all-in—. Un jugador all-in es elegible solo para el bote principal (y cualquier bote secundario anterior al que sí aportó), nunca para un bote secundario formado con fichas que no pudo igualar. Cada bote se adjudica a la mejor mano entre sus propios jugadores elegibles.

**Q. ¿Se puede ganar el bote principal y un bote secundario a la vez?**

A. Sí. Un jugador con más fichas y la mejor mano puede ganar el bote principal y todos los botes secundarios para los que es elegible —llevándose todo (scoop)—. En cambio, un short stack all-in solo puede ganar el bote principal (y cualquier bote secundario anterior al que aportó); nunca cobra fichas que no igualó, por muy fuerte que sea su mano.

**Q. ¿Un chop de torneo es lo mismo que un bote dividido?**

A. No — misma palabra, dos cosas distintas. Un bote dividido en el showdown es automático: cuando las manos empatan, el dealer reparte las fichas. Un "chop" de torneo es un acuerdo voluntario entre los jugadores restantes para repartirse la bolsa de premios, normalmente por número de fichas o por [ICM](/es/blog/holdem-icm), y solo ocurre si todos están de acuerdo. Consulta [torneo vs cash game](/es/blog/holdem-tournament-vs-cash-game) para ver cómo difieren los pagos en torneo.

---

## Para llevarte

1. Sí, ==**en el póker se puede empatar**== — el bote se divide (chop) siempre que dos o más jugadores comparten las ==**mismas mejores cinco de siete**==.
2. ==r:**El palo, las cartas más altas y cuántas cartas usaste**== nunca rompen un empate.
3. La ==**ficha impar**== va al primer jugador empatado a la izquierda del botón, y los ==**botes laterales**== se liquidan por separado del bote principal.

Repasa el orden en la [jerarquía completa de manos](/es/blog/holdem-hand-rankings), domina las manos ajustadas en la [guía de kicker y desempate](/es/blog/holdem-tiebreak-rules) y zanja la discusión clásica en [¿el color gana a la escalera?](/es/blog/holdem-flush-vs-straight).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Jerarquía de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jerarquía de manos de póker — de la mejor a la peor</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Las 10 manos con probabilidades, ejemplos y problemas de mesa</div>
  </a>
  <a href="/es/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Desempate</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas de kicker y desempate</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cómo deciden los kickers los showdowns con la misma mano</div>
  </a>
  <a href="/es/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Duelo de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿El color gana a la escalera?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Matemáticas y situaciones de mesa para la confusión #1</div>
  </a>
</div>
`.trim(),
};
