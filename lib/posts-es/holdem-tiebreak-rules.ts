import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Misma mano, ¿quién gana? — Reglas de desempate en el póker",
  seoTitle: "Misma pareja, ¿quién gana? — Desempates en el póker",
  desc: "¿Misma pareja y aun así perdiste? Cómo se rompen los empates en el póker: quién gana, cuándo decide la 5.ª carta y cuándo se divide el bote.",
  tldr: "Los empates se rompen en un orden fijo: primero el tipo de mano, luego las cartas que la forman y por último los kickers de mayor a menor. Misma pareja → gana el primer kicker más alto; cinco cartas idénticas → bote dividido. Los palos nunca deciden un empate.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Showdown de póker: A♠ K♦ contra A♥ 9♣ con mesa A♦ Q♠ 7♥ 3♣ 2♦ — misma pareja de ases, el kicker decide al ganador",
  tags: ["desempate poker", "misma mano quien gana poker", "quien gana misma pareja poker", "empate doble pareja poker", "importa la quinta carta poker", "kicker poker", "escalera mas alta", "empates texas holdem"],
  content: `
Muestras una pareja de ases. Tu rival también. El dealer cuenta las cartas laterales un segundo… y empuja todo el bote hacia *el otro lado*. ==r:Misma pareja. ¿Cómo perdiste?==

He visto ese momento exacto frenar más partidas que ninguna otra regla: alguien se medio levanta, el dealer da unos golpecitos en el fieltro y toda la mesa espera una explicación. Aquí la tienes. Cada empate en Texas Hold'em se resuelve con un único procedimiento fijo que vive un nivel por debajo de la [jerarquía de manos de póker](/es/blog/holdem-hand-rankings) — la jerarquía te dice *qué mano* gana; las reglas de desempate te dicen *qué jugador* gana cuando ambas manos son del mismo tipo.

Casi todo el trabajo lo hace una sola carta: el ==**kicker**==. La definición completa — qué manos lo llevan y cuántos — está en [qué es el kicker en el póker](/es/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Esta guía es el *procedimiento*: exactamente cómo se rompen los empates con la misma pareja, doble pareja, trío, escaleras y colores — y esa quinta carta que todos olvidan.

---

### Los desempates de un vistazo

:::stripe
3 | Pasos que resuelven todos los empates en Hold'em
1 | Kicker en una mano de doble pareja
0 | Empates decididos alguna vez por el palo
:::

---

## ¿Cómo se rompen los empates en el póker? El orden de 3 pasos

**Los empates se rompen en un orden fijo: primero se compara el tipo de mano, luego las cartas que la forman y por último los kickers de mayor a menor — y si las cinco cartas siguen coincidiendo, el bote se divide.** Cada showdown pasa las mismas tres comprobaciones:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Paso | Se compara | Detalle |
|:---:|---|---|
| **1** | Tipo de mano | La categoría más alta siempre gana (un color gana a una escalera, etc.) |
| **2** | Las cartas que forman la mano | ¿Mismo tipo? Gana la pareja / trío / carta más alta |
| **3** | Kickers, de mayor a menor | La primera diferencia se lleva el bote |

</div>

Si el paso 1 lo resuelve, nunca llegas al paso 2. Si al paso 3 se le acaban las cartas, las manos son idénticas y ==g:el bote se divide== — cómo se reparten entonces las fichas (fichas impares, botes a tres bandas, botes secundarios) es terreno de las [reglas del bote dividido](/es/blog/holdem-split-pot-rules). Los pasos 2 y 3 son donde surgen las discusiones, así que ahí es adonde vamos.

---

## ¿Quién gana si dos jugadores tienen la misma pareja?

**Gana el primer kicker más alto. Una pareja usa tres kickers, comparados de uno en uno desde arriba — la primera diferencia decide el bote.**

Toma la mano de la foto de arriba:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Jugador A:** A♠ K♦  ·  **Jugador B:** A♥ 9♣
**Mesa:** A♦ Q♠ 7♥ 3♣ 2♦

| Jugador | Mejores cinco | Kickers | Resultado |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Gana** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Pierde |

</div>

Misma pareja de ases, así que los kickers se enfrentan en orden: ==g:la K gana a la Q — se acabó.== El nueve de B sigue *en* la mano como segundo kicker, pero la comparación nunca llega tan lejos.

Fíjate en que el kicker más alto de B es la reina de la **mesa**, no el 9 que tiene en la mano. ==r:Un kicker solo cuenta si de verdad entra en tus mejores cinco== — una carta más alta de la mesa empuja tu carta de mano hacia abajo en la lista. Por eso la segunda carta con la que empiezas importa tanto como el propio as: A-K y A-9 son ambas "una pareja de ases" aquí, y solo una de ellas gana ([tabla de manos iniciales](/es/blog/holdem-starting-hands-chart)).

---

## Reglas de desempate para cada mano

**Cada tipo de mano tiene su propio orden de comparación — algunas llegan a los kickers, otras se resuelven por completo con las cartas que las forman.** La insignia indica si el kicker entra en juego:

:::tiebreak
Escalera Real|Siempre empate (bote dividido)|-Sin kicker
Escalera de Color|Solo la carta más alta|-Sin kicker
Póker|Valor del póker → 5.ª carta|+Con kicker
Full|Valor del trío → de la pareja|-Sin kicker
Color|Las 5, de mayor a menor|+Con kicker
Escalera|Solo la carta más alta|-Sin kicker
Trío|Valor del trío → 2 kickers|+Con kicker
Doble Pareja|Pareja alta → baja → kicker|+Con kicker
Pareja|Valor de la pareja → 3 kickers|+Con kicker
Carta Alta|Las 5, de mayor a menor|+Con kicker
:::

Las tres filas que más discusiones causan en la mesa:

- **El trío usa dos kickers, primero el más alto.** En una mesa de A♣ A♥ 7♦ 5♣ 2♠, un jugador con A♠ J♠ hace A-A-A-==g:J==-7 y gana a A♦ 10♦ con A-A-A-==r:10==-7 — la jota supera al diez, y el 7 compartido ni siquiera se comprueba.
- **Los fulls no tienen kicker.** Primero el valor del trío, luego el de la pareja: K-K-K-A-A gana a K-K-K-Q-Q por la pareja.
- **Los colores comparan las cinco cartas — ==r:nunca los palos==.** Un color con As gana a un color con K; valores idénticos, se divide. El duelo completo (y las mesas que engañan a la gente) está en [¿el color gana a la escalera?](/es/blog/holdem-flush-vs-straight).

---

## ¿Quién gana si ambos jugadores tienen doble pareja?

**Se compara la pareja alta, luego la baja, luego el único kicker — en ese orden.** La doble pareja lleva exactamente un kicker, así que después de las parejas solo queda una carta por discutir.

En una mesa de **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ hace K♠ K♦ 9♣ 9♠ ==g:Q♦== y K♥ J♥ hace K♥ K♦ 9♣ 9♠ ==r:J♥==. Mismos reyes y nueves, así que el único kicker lo decide: ==g:reina sobre jota.==

Y luego está la trampa que decide dinero de verdad — la ==r:**anulación (counterfeit)**==:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Tú:** 5♠ 4♠  ·  **Rival:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — tu doble pareja (cincos y cuatros) va por delante de su pareja de reyes
**Turn 9♠, river 9♥** — mesa final 5♦ 4♥ K♣ 9♠ 9♥

| Jugador | Mejores cinco | Mano |
|--------|-----------|------|
| Tú | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Nueves y cincos — tus cuatros desaparecieron |
| Rival | K♦ K♣ 9♠ 9♥ A♣ | **Reyes y nueves — gana** |

</div>

La mesa al emparejar los nueves le dio a *ambos* jugadores una segunda pareja mejor — tus cuatros quedaron ==r:anulados==, y la única comparación que quedaba era la pareja alta: reyes sobre nueves. La mano que iba por delante en el flop pierde el bote sin que ninguno de los dos jugadores haya mejorado sus propias cartas.

---

## ¿Puedes tener una escalera más alta? (Dónde encaja la rueda)

**Sí — las escaleras se ordenan únicamente por su carta más alta, y la rueda (con As bajo) es la escalera más baja del juego.**

En una mesa de 4♦ 3♣ 2♠ K♦ Q♥, un jugador con A♠ 5♠ hace la rueda: 5-4-3-2-A. Un jugador con 6♥ 5♥ hace 6-5-4-3-2. ==r:El as juega *bajo* en la rueda==, así que A-2-3-4-5 se sitúa en el mismísimo fondo de la escalera de escaleras — ==g:gana la escalera con seis alto.== Dos escaleras con la misma carta más alta son idénticas, y las manos idénticas se dividen.

Dos cosas que la rueda *no* hace: el as no puede dar la vuelta por el medio (Q-K-A-2-3 no es nada) y no puede ser alto y bajo a la vez. Los colores siguen la regla paralela — las cinco cartas comparadas desde arriba, palos irrelevantes — con los detalles en [color vs escalera](/es/blog/holdem-flush-vs-straight).

---

## ¿Importa la 5.ª carta en el póker?

**Sí — siempre que las primeras cuatro cartas de dos manos sean idénticas, la quinta carta es todo el bote.**

Mesa **A♥ K♣ Q♦ 4♣ 2♥**, y es A♠ 8♠ contra A♦ 7♦. Ambos tienen pareja de ases. Primer kicker: la K de la mesa — empate. Segundo kicker: la Q de la mesa — empate. Tercer kicker: ==g:el 8 gana al 7.== La quinta carta literal de la mano acaba de decidir todo lo de arriba.

La misma lógica gobierna los botes con póker en la mesa: todos comparten cuatro cartas, así que la quinta es todo el showdown. Y gobierna los empates de carta alta y de color, donde se compara cada carta hasta la última. La quinta carta solo deja de importar cuando la mesa la supera — que es la última pieza del rompecabezas.

---

## Cuando tu kicker no juega — y el bote se divide

![Infografía: la mesa A-K-Q-J-10 es las mejores cinco para todos, así que una mano 9-7 no puede ganarle y el bote se divide](/images/holdem-tiebreak-best5.webp "Las mejores cinco de siete: cuando la mesa ya es la mejor mano, tus cartas de mano se caen de ella")

**Si tus cartas de mano no pueden superar las propias mejores cinco de la mesa, no juegan — y cuando eso es cierto para todos, el bote se divide.**

Toma la mesa de arriba: A♠ K♥ Q♣ J♦ 10♠, Broadway ya completa. Tu 9♥ 7♠ *sí* hace escalera — K-Q-J-10-9 — pero es **más baja** que la escalera con As que está en el fieltro, así que tus mejores cinco son la propia mesa. Las de todos los demás también.

La versión más sutil es cuando tu mano juega pero tu kicker no. Mesa A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ contra A♦ 2♦. Ambos emparejan el as, y ambos huecos de kicker se llenan desde la mesa — A-A-K-Q-J para cada jugador. El 3 y el 2 son peso muerto; mejores cinco idénticas, ==g:se reparte.==

![Infografía: en una mesa A-K-Q-J-9, A-3 y A-2 juegan ambos A-A-K-Q-J, así que las manos idénticas dividen el bote](/images/holdem-tiebreak-split.webp "Cuando las mejores cinco coinciden carta por carta, el bote se divide — los palos nunca rompen el empate")

Detectar estos desarrollos antes de la apuesta del river es una habilidad en sí misma — eso es [leer la mesa](/es/blog/holdem-reading-the-board). Y qué pasa con las fichas una vez que las manos empatan — partes iguales, la ficha impar, botes a tres bandas, botes secundarios del all-in — está todo en la [guía de reglas del bote dividido](/es/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Sigue leyendo]
/es/blog/holdem-kicker | ¿Qué es el kicker en el póker? | /images/holdem-kicker-hero.webp
/es/blog/holdem-split-pot-rules | ¿Cuándo se divide un bote? | /images/holdem-split-pot-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Cómo se rompen los empates en el póker?**

A. En un orden fijo: primero el tipo de mano, luego las cartas que la forman (la pareja más alta, el trío o la carta más alta) y por último los kickers de mayor a menor. Si las cinco cartas coinciden en valor, el bote se divide — los palos nunca se usan.

**Q. ¿Quién gana si dos jugadores tienen la misma pareja?**

A. El jugador cuyas mejores cinco tengan el kicker más alto. Una pareja lleva tres kickers, comparados de arriba hacia abajo — la primera diferencia se lleva el bote. Si los tres coinciden, es un empate y se divide.

**Q. ¿Quién gana si ambos jugadores tienen doble pareja?**

A. Se compara primero la pareja alta, luego la baja y por último el único kicker. Ases y treses gana a reyes y reinas, porque la pareja alta se comprueba antes que cualquier otra cosa.

**Q. ¿Importa la 5.ª carta en el póker?**

A. Sí. Cuando las primeras cuatro cartas de ambas manos son idénticas, la quinta carta decide todo el bote — el tercer kicker de una pareja, la carta más baja de un color, la carta lateral del póker en la mesa. Solo deja de importar cuando las cartas de la mesa superan tu carta de mano.

**Q. ¿Se puede usar el as como un 1 en el póker?**

A. Sí, pero solo en la escalera A-2-3-4-5 (la "rueda"), donde juega como la carta más baja — lo que hace de la rueda la escalera más baja del juego. El as no puede dar la vuelta por el medio: Q-K-A-2-3 no es escalera.

**Q. ¿Puedes tener una escalera más alta que otro jugador?**

A. Sí — las escaleras se ordenan únicamente por su carta más alta, así que 6-5-4-3-2 gana a la rueda A-5, y Broadway (A-K-Q-J-10) les gana a todas. Cartas más altas iguales significan escaleras idénticas y bote dividido.

**Q. ¿Los palos rompen alguna vez un empate en Texas Hold'em?**

A. No. En Hold'em no hay jerarquía de palos — si dos mejores manos de cinco cartas coinciden carta por carta, el bote se divide sin importar los palos.

**Q. ¿Qué pasa si ambos jugadores tienen exactamente la misma mano?**

A. El bote se divide a partes iguales — un "empate". Cómo se reparten físicamente las fichas, quién se queda la ficha impar y cómo se resuelven los botes secundarios se explica en las [reglas del bote dividido](/es/blog/holdem-split-pot-rules).

---

## Lo que hay que recordar

1. Cada empate sigue el mismo procedimiento: ==**tipo de mano → cartas que forman la mano → kickers → división**== — sin excepciones, sin palos.
2. Un kicker solo cuenta si ==g:entra en tus mejores cinco== — las cartas de la mesa pueden reemplazarlo, y una mesa con doble pareja puede anular tu doble pareja por completo.
3. Las escaleras se ordenan por su carta más alta (la rueda es la más baja), los colores comparan las cinco — y cuando nada separa las manos, el bote se reparte.

Fija el orden completo con la [jerarquía de manos completa](/es/blog/holdem-hand-rankings), domina la carta lateral en [qué es el kicker](/es/blog/holdem-kicker) y descubre exactamente cómo se reparten los botes empatados en la [guía del bote dividido](/es/blog/holdem-split-pot-rules).

---

## Artículos relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿Qué es el kicker en el póker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">La carta lateral en sí — qué manos la llevan y cuántas</div>
  </a>
  <a href="/es/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Jerarquía de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jerarquía de manos de póker — de la mejor a la peor</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Las 10 manos con probabilidades, ejemplos y retos de mesa</div>
  </a>
  <a href="/es/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Duelo de manos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿El color gana a la escalera?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Matemática, situaciones de mesa y empates de la confusión #1</div>
  </a>
  <a href="/es/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Bote dividido</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿Cuándo se divide un bote?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 situaciones de empate y 3 cosas que los jugadores creen que ganan</div>
  </a>
</div>
`.trim(),
};
