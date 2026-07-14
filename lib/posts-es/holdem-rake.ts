import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "¿Qué es el rake en póker? Cómo cobra la sala — y cuánto pagas de verdad",
  seoTitle: "La comisión que se come tus ganancias — ¿qué es el rake?",
  desc: "El rake es la comisión que la sala se lleva de cada bote en cash game. Aquí verás cómo funciona, cuánto pagas por sesión y qué te devuelve el rakeback.",
  tldr: "El rake es la pequeña tajada que la sala se lleva de cada bote por montar la partida — normalmente entre 2.5 y 10% hasta un tope de unos pocos dólares. La mayoría de salas no cobra nada si todos foldean antes del flop ('no flop, no drop'). Golpea más fuerte a los límites bajos y a las mesas cortas, y el rakeback devuelve una parte a los regulares.",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "Un repartidor retirando un pequeño montón de fichas del bote central hacia la ranura del rake en una mesa de fieltro verde",
  tags: ["rake", "qué es el rake en poker", "rake poker explicado", "rakeback", "tope de rake poker", "rake por tiempo", "rake torneos", "cómo funciona el rake en poker"],
  content: `
Me hizo falta un mes deprimente de sesiones "en tablas" para descubrir a dónde iba realmente mi dinero. No estaba perdiendo contra los otros jugadores — les estaba ganando, por poco. Estaba perdiendo contra la ==tajada que la sala se lleva de cada bote que gano.== Esa comisión silenciosa se llama **rake**, y hasta que no lo entiendes, puedes ser un jugador ganador sobre el papel y un perdedor en la caja.

El rake es la forma en que una sala gana dinero en un juego donde no juega ni una sola mano. Aquí tienes exactamente qué es, todas las formas en que se cobra, las cuentas honestas sobre ==g:cuánto pagas de verdad por sesión==, y cómo el rakeback recupera una parte. Es la comisión que decide si batir el póker de límites bajos es siquiera posible.

---

### El rake de un vistazo

:::stripe
2.5–10% | Rango típico del rake por bote
$3–$6 | Tope de rake habitual en vivo
No flop, no drop | Normalmente no hay rake si todos foldean preflop
20–40% | Acuerdo típico de rakeback
:::

---

## ¿Qué es el rake en póker?

**El rake es la comisión que una sala se lleva de un cash game por montarlo.** Como el póker se juega jugador contra jugador — la casa nunca apuesta — el rake es como la sala, el casino o la app gana realmente su dinero. Es una tarifa de servicio por el repartidor, la mesa, las fichas y la seguridad, recortada poco a poco de los botes.

En un cash game normalmente se toma directamente del bote: un pequeño porcentaje del dinero que hay en el centro, depositado en una ranura de la mesa antes de pagar al ganador. En un torneo funciona distinto — la comisión va incluida en tu buy-in por adelantado (más sobre esto abajo). En cualquier caso, el rake es independiente de lo que ganes o pierdas contra otros jugadores, y por eso es tan fácil pasarlo por alto. Esta es una de las mayores diferencias prácticas entre un [cash game y un torneo](/es/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## ¿Cómo se cobra el rake? Rake por bote, rake por tiempo y dead drop

![Un repartidor barriendo unas fichas del centro del bote hacia la ranura del rake de la mesa antes de empujar el resto al ganador](/images/holdem-rake-drop.webp "Rake por bote: un pequeño porcentaje recortado del bote y depositado antes de pagar al ganador")

No existe un único tipo de rake. Cómo cobra la casa su dinero depende de los límites y de la sala, y las diferencias importan — aquí tienes la comparación que ninguna página rival deja clara:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo | Cómo se cobra | Cantidad típica | Dónde lo verás |
|:---|:---|:---:|:---|
| **Rake por bote (escalado)** | % de cada bote, hasta un tope | 2.5–10%, con tope de $1–$6 | La mayoría de cash de límites bajos/medios, online |
| **Rake por tiempo** | Tarifa fija por jugador, cada 30 min | ~$10–$15 por hora | Límites altos en vivo ($10/$20+) |
| **Dead drop** | El botón paga un rake fijo cada mano | Fijo por mano | Algunas salas en vivo |
| **Comisión de torneo** | Añadida al buy-in por adelantado | ~5–20% del buy-in | Todos los torneos |

</div>

Unas cuantas reglas rigen cómo se recorta realmente el rake por bote:

- **No flop, no drop.** En la mayoría de salas, si la mano termina antes del flop — todos foldean ante una subida preflop — la casa **no cobra rake** en absoluto. (No es universal: unos pocos sitios, sobre todo GGPoker, sí sacan rake de algunos botes preflop, así que comprueba tu sala.)
- **El tope de rake (cap).** La casa nunca se lleva el porcentaje completo en un bote enorme — se detiene en un máximo, comúnmente **$3–$6 en vivo** y **$1–$3 online**. Los topes suelen escalar con los límites y a menudo se reducen cuando reparten a menos jugadores (un bote mano a mano podría tener un tope de $1).
- **Rake por tiempo en vez de rake por bote.** En límites más altos, las salas a menudo dejan de rakear los botes y en su lugar cobran una tarifa fija — digamos $10–$15 la hora por jugador, cobrada cada media hora. Esto favorece a los jugadores que ganan botes grandes, ya que un bote de $2,000 deja de recortarse.
- **Dead drop.** Un método menos común en el que solo el jugador en el botón paga un rake fijo cada mano, cobrado antes de repartir las cartas — diseñado para que quien gana botes grandes no tribute más que nadie.

---

## ¿Cuánto rake pagas de verdad?

![Un bote modesto de fichas sobre el fieltro con un par de dólares ya apartados como rake, mostrando lo que cuesta silenciosamente una sola mano](/images/holdem-rake-lowstakes.webp "En los límites bajos el tope apenas se mueve conforme crecen los botes, así que los botes pequeños son los más rakeados en proporción")

Aquí viene la parte que cambió mi forma de ver el juego. El porcentaje suena minúsculo — 5%, con tope de unos pocos dólares — pero lo pagas en casi cada bote que ganas, durante horas.

**Una partida en vivo $1/$2.** Con un rake del 10% topado en $5 y unas 30 manos repartidas por hora, la mayoría de botes disputados llegan o rozan el tope. Una sola mesa concurrida puede pagar **$100+ por hora** a la ranura entre todos los jugadores. Ese dinero sale directo de las ganancias colectivas — es la razón por la que una mesa llena de jugadores más o menos parejos sangra fichas poco a poco hacia la casa.

**La "trampa del rake" en límites bajos.** Esta es la moraleja que todo principiante debería oír. Como el tope apenas sube conforme bajas de límites, cuanto *más bajo* juegas, *mayor* es la tajada que el rake se lleva en proporción. Un ejemplo trabajado en NL50 online (ilustrativo, y varía según cuántas manos juegues):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mismo jugador, mismo juego | Rake pagado | Resultado |
|:---|:---:|:---|
| Sala con un **tope de $2** | ~5 bb/100 | +8 bb/100 de win rate sigue siendo **ganador (+3)** |
| Sala con un **tope de $4** | ~8–9 bb/100 | +8 bb/100 se convierte en **perdedor (−1)** |

</div>

Misma habilidad, misma ventaja sobre la mesa — y el rake por sí solo es la diferencia entre ganar y perder. Por eso los grinders serios de límites bajos se obsesionan con la estructura de rake, y por eso las [pot odds](/es/blog/holdem-pot-odds) y el win rate siempre hay que leerlos *después* de que la casa se lleve su tajada.

---

## ¿Qué es el rakeback?

Como la casa se beneficia del volumen que generas, la mayoría de salas te devuelve una parte para que sigas jugando. **El rakeback es un porcentaje del rake que pagas personalmente, devuelto a ti** — normalmente a través de puntos, cashback o un programa de fidelidad, pagado semanal o mensualmente. Un acuerdo de rakeback del 30% significa simplemente que recuperas 30 centavos de cada dólar que rakeas.

Hay dos formas de calcularlo:

:::compare
Contributed | Dealt
Basado en el rake de los botes **en los que pones dinero** — el método moderno estándar | Repartido a partes iguales entre **todos los que reciben cartas** en el bote rakeado, contribuyan o no — ya poco común
:::

Para un jugador casual, el rakeback es un extra menor. Para un regular de mucho volumen es enorme: la diferencia entre un acuerdo del 20% y del 40% puede valer **decenas de miles al año**, y para muchos grinders en tablas, el rakeback *es* su beneficio. En la práctica rebaja tu rake real, así que conviene comprobarlo antes de elegir dónde jugar. Eso sí, ten en cuenta que buena parte de los consejos de rakeback online son de afiliados — trata las páginas de "regístrate aquí" con el escepticismo que le darías a cualquier venta.

---

## ¿Los torneos tienen rake?

Del tipo por bote no — pero aun así pagas una comisión, y está a la vista de todos. Un buy-in de torneo se divide en dos partes, mostradas con un **signo "+"**:

:::pull
Un torneo de **$100 + $9** significa que $100 van al bote de premios y **$9 son la comisión de la casa.**
:::

Esa comisión — también llamada **juice** o **vig** — es el equivalente del rake en torneos. Suele ser el **5–20% del buy-in**, y es fija: la pagas tanto si busteas primero como si ganas el evento entero. Los buy-ins más bajos cargan comisiones proporcionalmente más altas (un sit-and-go de $3 + $0.30 es un 10%), y una regla habitual dice que los formatos **turbo rápidos deberían tener una comisión por debajo del ~13%** para seguir siendo batibles a largo plazo. Como la estructura de un torneo es completamente distinta a la de un cash game, la forma en que pagas por jugar también lo es — una distinción que vale la pena entender junto con los fundamentos de [torneo vs cash game](/es/blog/holdem-tournament-vs-cash-game).

---

## Rake online vs en vivo: ¿cuál es más alto?

Es un trade-off real, y la respuesta sorprende:

- **El rake en vivo** tiende a ser un **porcentaje más alto (a menudo 10%) con un tope mayor ($4–$6)** — pero solo juegas ~30 manos por hora, así que lo pagas menos veces.
- **El rake online** suele ser un **porcentaje más bajo (3–5%) con un tope menor ($1–$3)** — pero puedes ver 250+ manos por hora entre varias mesas, así que un grinder de volumen puede pagar *más* rake por hora que un jugador en vivo a pesar de la tasa más baja.

La lección: nunca juzgues el rake solo por el porcentaje. Lo que importa es el porcentaje **multiplicado por cuántas veces lo pagas.** Una partida online "barata" del 5% a cuatro mesas puede costarte más que una partida en vivo "cara" del 10% — que es exactamente por qué el rakeback y la selección de mesa importan más online.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-straddle | ¿Qué es un straddle en póker? | /images/holdem-straddle-hero.webp
/es/blog/holdem-tournament-vs-cash-game | Torneo vs cash game | /images/tournament-table-action.webp
:::

## FAQ

**Q. ¿Qué es el rake en póker?**

A. El rake es la comisión que una sala se lleva de un cash game por montarlo — normalmente un pequeño porcentaje de cada bote (2.5–10%) hasta un tope máximo. Como la casa no juega, el rake es su principal fuente de ingresos. Los torneos cobran una comisión equivalente incluida en el buy-in en su lugar.

**Q. ¿Cómo se calcula el rake?**

A. En la mayoría de cash games es un porcentaje del bote, depositado antes de pagar al ganador, hasta un tope de unos pocos dólares. El porcentaje y el tope varían según la sala y los límites, y el tope a menudo se reduce cuando reparten a menos jugadores. En límites altos, las salas pueden cobrar una tarifa fija por tiempo por jugador en su lugar.

**Q. ¿Pagas rake si todos foldean antes del flop?**

A. Normalmente no. La mayoría de salas siguen el "no flop, no drop" — si la mano termina preflop, no se cobra rake. No es universal, eso sí: unos pocos sitios (sobre todo GGPoker) rakean algunos botes preflop, así que vale la pena confirmar la regla de tu sala.

**Q. ¿Cuánto rake se cobra en una partida en vivo $1/$2?**

A. Comúnmente el 10% del bote topado en unos $5. La mayoría de botes disputados llegan al tope, así que una sola mesa concurrida puede depositar $100 o más por hora en conjunto. Esa comisión es la razón por la que una mesa de jugadores parejos pierde fichas poco a poco hacia la casa con el tiempo.

**Q. ¿Qué es el rakeback?**

A. El rakeback devuelve un porcentaje del rake que pagas personalmente — a menudo el 20–40% — a través de puntos, cashback o un programa de fidelidad. En la práctica rebaja tu rake real. Para jugadores casuales es un pequeño extra; para regulares de mucho volumen puede ser la diferencia entre un año perdedor y uno ganador.

**Q. ¿Los torneos de póker tienen rake?**

A. Sí, pero no del bote. La comisión se añade a tu buy-in y se muestra con un "+" — un torneo de $100 + $9 envía $100 al bote de premios y $9 a la casa. Esa comisión (el "juice" o "vig") suele ser el 5–20% del buy-in y se paga sin importar cómo termines.

**Q. ¿Cómo afecta el rake a tu win rate?**

A. De forma significativa — sobre todo en límites bajos y en mesa corta, donde el tope no baja con los límites. El rake puede convertir a un pequeño ganador en un perdedor: el mismo jugador de +8 bb/100 puede acabar ligeramente en negativo simplemente pasándose a una sala con un tope de rake más alto. Mide siempre tu win rate después del rake.

**Q. ¿Es más alto el rake en póker online o en vivo?**

A. El rake en vivo es un porcentaje más alto con un tope mayor, pero juegas muchas menos manos por hora. El rake online es un porcentaje más bajo con un tope menor, pero jugar a varias mesas hace que lo pagues en muchas más manos — así que un grinder de volumen puede pagar más rake por hora online. Juzga el rake por la tasa multiplicada por la frecuencia, no solo por la tasa.

---

## Las 3 cosas que debes recordar

1. **El rake es la tajada de la casa por montar la partida** — normalmente el 2.5–10% de cada bote hasta un pequeño tope, y es independiente de lo que ganes o pierdas contra los rivales.
2. **Golpea más fuerte a los límites bajos.** El tope apenas se mueve conforme bajas, así que en proporción pagas el máximo rake en la base — la "trampa del rake" que hace tan difíciles de batir los micro-límites.
3. **El rakeback y la estructura importan.** Recuperar el 20–40% de tu rake, y elegir salas con topes amables para el jugador, puede darle la vuelta a tu resultado a largo plazo — mide todo *después* del rake.

Ahora que puedes ver la tajada de la casa, los números que lees en todas partes cobran más sentido: tus [pot odds](/es/blog/holdem-pot-odds), tu win rate, y por qué un [straddle](/es/blog/holdem-straddle) que infla el bote también alimenta silenciosamente el rake. El póker se puede batir — pero solo una vez que les ganas a los otros jugadores por *más* de lo que la casa se lleva.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneo</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneo vs cash game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué cada uno te cobra de forma completamente distinta</div>
  </a>
  <a href="/es/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glosario</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">¿Qué es un straddle?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">La ciega extra que infla el bote — y el rake</div>
  </a>
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Lee tu bote después de que la casa se lleve su tajada</div>
  </a>
  <a href="/es/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneo</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo funcionan los torneos de póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A dónde va realmente la comisión del buy-in</div>
  </a>
</div>
`.trim(),
};

export default POST;
