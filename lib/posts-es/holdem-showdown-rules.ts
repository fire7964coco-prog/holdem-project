import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Reglas del showdown en Texas Hold'em: quién enseña primero, el muck y el slow roll",
  seoTitle: "¿Quién enseña primero? Reglas del showdown y del muck",
  desc: "¿Quién muestra las cartas primero en el showdown? ¿Puedes tirarlas sin enseñarlas? Último agresor, cards speak, slow roll y all-in — las reglas, sin líos.",
  tldr: "En el showdown, el último jugador que apostó o subió enseña primero. Si en el river todos pasaron, enseña primero el primer jugador activo a la izquierda del botón. Puedes tirar tus cartas sin enseñarlas si has perdido, pero los rivales pueden pedir ver una mano que fue pagada.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-12",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "reglas showdown poker",
    "quien muestra las cartas primero poker",
    "muck poker",
    "slow roll poker",
    "showdown all in texas holdem",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infografía del showdown en Texas Hold'em — en una mesa 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ gana con pareja de reyes y kicker de as",
  content: `
Pagas la apuesta del river. Y ahí se quedan los dos, mirándose fijamente, cada uno esperando a que sea el otro quien enseñe primero.

Nadie se mueve.

El dealer mira a uno y a otro. El resto de la mesa resopla.

==Este pulso exacto se repite en casi todas las mesas en vivo== — porque la mayoría de los principiantes nunca aprendió quién tiene que enseñar primero de verdad. Esta guía cubre todas las situaciones del showdown: manos normales, rivers pasados con check, all-ins, y por qué hacer slow roll hará que te miren mal el resto de la sesión.

## ¿Quién tiene que enseñar las cartas primero en el showdown?

La regla depende de cómo terminó la última ronda de apuestas (para la secuencia completa calle a calle que lleva hasta aquí, mira [el orden de juego](/es/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Acción en la última calle | Quién enseña primero |
|--------------------|-----------------|
| Alguien apostó o subió en el river | ==El último jugador que apostó o subió== enseña primero |
| Todos pasaron en el river | El primer jugador activo a la izquierda del botón enseña primero |
| All-in en una calle anterior (sin apuestas en el river) | Todas las manos se ponen boca arriba antes o durante el reparto de las cartas restantes |

</div>

![Infografía del orden del showdown en Texas Hold'em — quién enseña primero en una mesa J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:La frase clave es «último agresor».== Si apostaste el river y te pagaron, enseñas tú primero — no el que pagó. El que paga tiene derecho a ver tu mano antes de decidir si enseña la suya o la tira.

---

## ¿Puedes tirar tus cartas sin enseñarlas en el showdown?

Sí — **si has perdido**.

Una vez que el último agresor enseña su mano, el resto de jugadores puede:
- **Enseñar su mano** si creen que ganan
- **Tirarla boca abajo al muck** si ven que han perdido — no hace falta revelar tus cartas

==r:Pero hay una excepción importante:== si tu apuesta del river fue pagada, el que pagó puso el precio completo por ver tu mano. Cualquier jugador que recibió cartas en esa mano puede pedirle al dealer que dé la vuelta a una mano tirada al muck que estuvo involucrada en un showdown pagado — la regla de **"I want to see that hand"** en la mayoría de los casinos. (No la confundas con "show one, show all", que significa que si enseñas tus cartas voluntariamente a un jugador, toda la mesa tiene derecho a verlas.)

Regla práctica: ==si ibas de farol y te pagaron, tira las cartas rápido. Si apostaste por valor y te pagaron, dales la vuelta.==

---

## Orden del showdown cuando todos pasaron en el river

Si nadie apostó en el river (todos pasaron), el showdown empieza por el **primer jugador activo a la izquierda del botón** y sigue en el sentido de las agujas del reloj.

Ejemplo: el botón, la ciega pequeña y la ciega grande llegan al river. La SB pasa, la BB pasa, el botón pasa. El showdown empieza por la SB (primer jugador activo a la izquierda del botón). La SB puede enseñar o tirar. Luego la BB. Y el botón, el último.

==g:En este caso, el botón enseña el último== — lo cual es en realidad una ventaja. El botón puede ver si alguien le gana antes de decidir si da la vuelta a sus cartas.

---

## Reglas del showdown con all-in — ¿enseña primero el jugador que va all-in?

Cuando un jugador va all-in y ya no hay más apuestas posibles, lo habitual es repartir las cartas comunitarias restantes con **todas las manos boca arriba**. Esto protege la integridad de la mano — nadie debería poder tirar sus cartas estratégicamente en una situación de all-in.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Escenario de all-in | Regla del showdown |
|----------------|---------------|
| Un jugador va all-in, los demás pagan, no hay más apuestas posibles | Todas las manos boca arriba antes o durante el reparto |
| Una apuesta all-in en el river es pagada | Showdown normal — el que fue all-in es el último agresor y enseña primero |
| Varios all-ins que crean varios side pots | Cada bote se resuelve por separado; se enseñan todas las manos implicadas |

</div>

Un matiz: si hay un **side pot** (otros jugadores aún tienen fichas y siguen apostando), el side pot se adjudica primero — el último agresor entre esos jugadores con fichas enseña primero — y después el bote principal, donde se enseña la mano del jugador que fue all-in.

Para ver cómo se forman y se pagan los side pots cuando hay jugadores all-in, mira [las reglas del all-in y los side pots](/es/blog/holdem-all-in-rules); para los botes divididos, mira [las reglas del split pot y el reparto del bote](/es/blog/holdem-split-pot-rules).

---

## ¿Qué es la regla de «las cartas hablan» (cards speak)?

![Infografía de la regla cards speak — una mesa 8♠ 9♣ 10♥ J♦ Q♠ forma escalera a la reina, y en el showdown las cartas hablan por sí solas](/images/holdem-showdown-cards-speak.webp)

"Cards speak" significa que ==gana la mejor mano, diga lo que diga cada jugador==.

Si un jugador lee mal su mano y dice "tengo pareja", pero en realidad tiene escalera — gana la escalera. El dealer lee las cartas y empuja el bote hacia la mejor mano enseñada.

Y funciona en los dos sentidos. Si crees que has perdido y tiras sin enseñar, pero tu mano era la ganadora — ==r:el bote se ha ido==. Tu mano está muerta en cuanto toca el muck. Si no estás seguro al 100% de haber perdido, deja siempre que el dealer lea tu mano antes de tirarla.

Situación real: llevas J♥ 10♥ en una mesa Q♥ 9♥ 8♥ 2♣ 5♦. Tienes escalera de color a la reina (Q-J-10-9-8 de corazones). El rival enseña K♣ Q♦ (una pareja de reinas). Ganas de calle. No tires tus cartas solo porque le veas la reina.

---

## ¿Qué es el slow roll en el póker?

El slow roll es ==tardar a propósito en enseñar una mano muy fuerte cuando ya sabes que has ganado==.

Llevas las nuts. El rival enseña una mano fuerte. Tú haces una pausa, finges pensar, miras tus cartas despacio, haces esperar a todo el mundo — y entonces das la vuelta a la ganadora. Técnicamente legal. Universalmente odiado.

![Slow roll en el póker — el resto de jugadores se exaspera mientras un jugador retrasa a propósito enseñar la mano ganadora](/images/holdem-showdown-slow-roll.webp)

==r:El slow roll es la forma más rápida de hacerte enemigos en una mesa de póker.== Se interpreta como restregar la victoria a propósito. La regla no escrita: si llevas la mejor mano posible, dale la vuelta inmediatamente. El slow roll no tiene ningún beneficio estratégico. Lo único que genera es mal ambiente.

No lo confundas con **tankear** — tomarte tu tiempo de forma legítima para una decisión difícil. Eso se acepta, incluso se respeta. Hacer slow roll con las nuts es otra cosa.

---

## ¿Tienes que enseñar tus cartas si ganas sin showdown?

No. ==g:Si todos tiran sus cartas antes del showdown, te llevas el bote sin enseñar ni una sola carta.==

Puedes enseñarlas si quieres — hay jugadores que enseñan un farol para poner en tilt al rival, o una mano fuerte para construirse una imagen tight. Pero nunca estás obligado a enseñar tus cartas cuando ganas porque todos los demás se han tirado.

Esta es una de las razones por las que el póker es interesante. No siempre gana la mejor mano — gana el último que queda en pie.

---

## Etiqueta en el showdown — lo que los principiantes hacen mal

### Error 1: esperar a que enseñe primero el que pagó

Apuestas el river. Alguien te paga. Te quedas quieto esperando a que enseñe él. Es al revés. ==Enseñas tú primero — fuiste el último agresor.== Esperar parece un slow roll aunque no lo sea.

### Error 2: tirar las cartas antes de que el dealer lea la mano

Estás casi seguro de que has perdido. Deslizas tus cartas boca abajo hacia el muck. El dealer las recoge. Resulta que llevabas la ganadora. La mano está muerta — bote perdido. ==No tires nunca hasta estar seguro.== Deja que el dealer lea las dos manos.

### Error 3: exigir ver todas las manos pagadas

En la mayoría de los casinos puedes pedirle al dealer que exponga una mano tirada al muck — pero solo una mano que fue pagada y llegó al showdown. Las manos foldeadas están muertas y no se pueden recuperar jamás. Esta regla existe para proteger contra el chip dumping (regalar fichas a un cómplice) y la colusión, no para satisfacer la curiosidad, y abusar de ella se considera de mala educación. Úsala con cuentagotas.

### Error 4: no saber que puedes enseñar antes de tu turno

No hay ninguna regla que prohíba dar la vuelta a tu mano antes de que sea oficialmente tu turno. ==g:Si llevas las nuts o una mano muy fuerte, enséñala inmediatamente.== El resto de jugadores lo agradece. Agiliza la partida. Y es justo lo contrario del slow roll.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-game-order | El orden de juego | /images/blog-holdem-game-flow.webp
/es/blog/holdem-all-in-rules | Reglas del all-in y side pots | /images/holdem-all-in-rules-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Quién enseña las cartas primero en el showdown de póker?**

A. El último jugador que hizo una acción agresiva (apostar o subir) en la última ronda de apuestas debe enseñar primero. Si en la última ronda todos pasaron, enseña primero el primer jugador activo a la izquierda del botón, y el turno sigue en el sentido de las agujas del reloj.

**Q. ¿Tienes que enseñar tus cartas si te pagan en el showdown?**

A. Sí — si fuiste el último en apostar o subir en el river, debes enseñar primero cuando te pagan. Si pagaste la apuesta de otro, puedes tirar tus cartas boca abajo tras ver su mano si has perdido. Eso sí, en la mayoría de los casinos cualquier jugador de la mesa puede pedirle al dealer que revele una mano pagada que fue tirada al muck.

**Q. ¿Puedes tirar tus cartas en el showdown sin enseñarlas?**

A. Sí, pero solo si has perdido claramente. Una vez enseñada la mano ganadora, los jugadores que pierden pueden tirar sus cartas boca abajo. La excepción es que tu mano haya sido pagada — los rivales pueden pedir verla. Si hay cualquier duda sobre quién ganó, no tires nunca antes de que el dealer lea las dos manos.

**Q. ¿Qué es el slow roll en el póker y por qué está mal visto?**

A. El slow roll es retrasar a propósito enseñar una mano ganadora que ya sabes que es la mejor. Es legal, pero universalmente odiado, porque se ve como humillar al rival a propósito. Si llevas las nuts o una ganadora clara, da la vuelta a tus cartas inmediatamente. La velocidad con la que enseñas dice mucho de ti en la mesa.

**Q. En una situación de all-in, ¿quién enseña primero?**

A. Cuando un jugador va all-in y no son posibles más apuestas, todas las manos implicadas en ese bote se ponen normalmente boca arriba antes o durante el reparto de las cartas comunitarias restantes. Si hay un side pot con apuestas en curso, el último agresor entre esos jugadores enseña primero para el side pot. La mano del jugador all-in se enseña aparte para el bote principal.

**Q. ¿Qué significa "cards speak" en el póker?**

A. Cards speak («las cartas hablan») significa que gana la mejor mano según lo que muestran realmente las cartas — no según lo que digan los jugadores. Un jugador que lee mal su mano y anuncia una mano equivocada gana igualmente si sus cartas son en realidad la mejor mano. Y al revés: quien tira sus cartas sin verificar que ha perdido no tiene ningún derecho al bote, aunque su mano hubiera ganado.

**Q. ¿Tienes que enseñar tus cartas si ganas sin showdown?**

A. No. Si todos los demás se tiran antes del showdown, ganas el bote inmediatamente y nunca tienes que revelar tus cartas. Enseñarlas es opcional — algunos jugadores enseñan un farol para picar al rival, pero nunca estás obligado a mostrar una mano que ganó sin oposición.

---

## Artículos relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del Texas Hold'em para principiantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Las reglas completas — de las ciegas al showdown</div>
  </a>
  <a href="/es/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del split pot y del side pot</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cuándo se reparte el bote y cómo funcionan los side pots</div>
  </a>
  <a href="/es/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Desempate</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Reglas del kicker y del desempate</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Misma mano — ¿quién gana en el showdown?</div>
  </a>
</div>
`.trim(),
};
