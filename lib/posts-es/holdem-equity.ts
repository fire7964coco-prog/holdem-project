import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "El equity en el póker explicado — % de victoria, fold equity y realización",
  seoTitle: "Tu % de victoria no es lo que te llevas — el equity explicado",
  desc: "El equity es tu parte del bote, pero no siempre te la quedas. Por qué un 40% de equity no es ganar el 40%, más fold equity, realización y equity all-in.",
  tldr: "El equity es tu parte del bote: el porcentaje de veces que tu mano gana si se reparten todas las cartas. Igualas cuando tu equity supera a tus pot odds, pero la posición y las apuestas hacen que casi nunca te quedes con todo tu equity — y el fold equity te deja ganar botes incluso cuando tu mano va por detrás.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-13",
  masterUpdated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Dos jugadores all-in con las cartas boca arriba sobre el tapete verde y una pila de fichas en el centro — el momento en que el equity de cada mano se convierte en una parte real del bote",
  tags: ["equity poker", "que es equity en poker", "equidad poker", "fold equity", "calcular equity", "equity vs pot odds", "equity all in", "realizacion de equity"],
  content: `
Durante un año pensé que "equity" era solo una palabra elegante para "cuántas probabilidades tengo de ganar". Luego perdí tres botes grandes en una noche siendo el favorito de entrada, y un jugador mejor me dijo lo que me reencuadró todo el juego: ==tu equity es lo que se te *debe*, no lo que *cobras*.== Puedes ir un 40% a ganar una mano y realizar casi nada de él — o ir por detrás y aun así imprimir dinero. Entender la diferencia entre esas dos cosas es casi todo lo que separa a los jugadores ganadores de los que solo esperan.

==El equity es el único número que une todas las demás piezas de la matemática del póker — outs, pot odds, posición y agresión se resuelven en una sola pregunta: ¿qué parte de este bote es realmente mía?== Esta guía cubre qué es el equity, cómo estimarlo y las tres cosas que nadie le cuenta a los principiantes: por qué no te quedas con todo, cómo un rival que se retira te regala equity extra, y por qué tu manaza se encoge contra una multitud.

Los porcentajes de victoria en bruto que hay detrás de cada mano salen de la [tabla de odds y probabilidades del póker](/es/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); esta guía es cómo conviertes esos porcentajes en decisiones en la mesa.

---

### El equity de un vistazo

:::stripe
bote × %victoria | Lo que vale tu mano ahora mismo
bruto × %realización | Lo que de verdad cobras
apuesta ÷ (bote + apuesta) | El % de fold que necesita un farol puro
:::

---

## ¿Qué es el equity en el póker?

**El equity es tu parte del bote: el porcentaje de veces que tu mano gana si se juega hasta el showdown.** Si el bote es de $100 y vas un 60% a ganar, tu mano vale ==$60 ahora mismo==, aunque las fichas todavía no se hayan empujado.

Piénsalo como tu trozo de la tarta. Toda mano aún viva tiene un trozo; los trozos siempre suman 100%. Cuando vas mano a mano y un 70% a ganar un bote de $200, ==g:$140 de ese bote son "tuyos"== a largo plazo — no ganarás *este* bote el 70% de las veces y perderás el resto, pero a lo largo de mil situaciones idénticas, esa es la parte que cobras.

Esa es toda la razón por la que el equity importa: convierte "¿voy por delante?" en "¿cuánto de este bote poseo?" — y ese es el número que comparas con el precio de un call.

---

## Cómo estimar tu equity rápido

**Con un proyecto, multiplica tus outs por 4 en el flop o por 2 en el turn; preflop, memoriza el puñado de enfrentamientos que aparecen una y otra vez.** Casi nunca calcularás el equity exacto en la mesa — lo estimas, y estos dos atajos cubren el 90% de las situaciones.

**Proyectos (la regla del 4 y el 2):** cuenta tus [outs](/es/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") y luego multiplica. Un proyecto de color son 9 outs → ==9 × 4 = 36%== en el flop (valor real 35%). Los números exactos de cada proyecto están en las [drawing odds](/es/blog/holdem-drawing-odds); aquí tienes la referencia rápida:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Proyecto | Outs | Equity (2 cartas) |
|:---|:---:|:---:|
| Color + proyecto abierto | 15 | 54.1% |
| Proyecto de color | 9 | 35.0% |
| Proyecto abierto (dos puntas) | 8 | 31.5% |
| Proyecto interior (gutshot) | 4 | 16.5% |

</div>

**Enfrentamientos preflop (memorízalos):** all-in antes del flop, las mismas peleas se repiten. Apréndete estas y sabrás al instante tu equity en la mayoría de all-ins preflop.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Enfrentamiento | Equity | Tipo |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | La sobrepar domina |
| QQ vs AK | ~57% / ~43% | La pareja gana la "carrera" |
| 22 vs AK | ~52% / ~48% | El verdadero coin flip |
| AK vs AQ | ~70% / ~25% | Dominación (el resto divide) |
| 88 vs A7 | ~70% / ~30% | Pareja vs una sobrecarta |

</div>

Aquí hay dos cosas que confunden a la gente. Una pareja contra dos sobrecartas (QQ vs AK) ==r:no es un 50/50== — la pareja es una favorita modesta, en torno a 57/43 offsuit (un pelín más ajustado, ~54/46, cuando el AK va suited). Y la expresión "coin flip" solo encaja de verdad con una pareja baja contra dos cartas mayores (22 vs AK), donde está genuinamente cerca.

---

## Equity vs pot odds: la única regla que decide cada call

**Iguala cuando tu equity es mayor que tus pot odds — esa única comparación decide casi todos los calls del póker.** Las [pot odds](/es/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") te dicen el equity que *necesitas* para no perder ni ganar; el equity te dice el que *tienes*. Si tienes más del que necesitas, igualar gana dinero.

Frente a una apuesta de medio bote, tus pot odds exigen ==25%== para igualar. Un proyecto de color con dos cartas por venir tiene ~35% de equity — 35 supera a 25, así que es un call rentable. Esa es toda la decisión, sin adivinanzas.

Pero aquí está la trampa que casi todas las guías se saltan: **"tu equity equivale a tu parte del bote" solo es cierto cuando no queda más apuesta.** En el momento en que puede entrar más dinero en calles posteriores, un 35% en bruto no se traduce automáticamente en el 35% del bote final — pueden echarte de tu proyecto, o pagar cuando ligas la segunda mejor mano. Esa diferencia es exactamente donde entran las [odds implícitas](/es/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (dinero que ganarás después) y la realización de equity (más abajo). El equity es donde la matemática *empieza*, no donde termina.

---

## Fold equity: cómo ganas botes cuando tu mano va por detrás

**El fold equity es el equity extra que ganas por la posibilidad de que tu rival se retire — es la razón por la que una apuesta puede ganar un bote que tu mano sola perdería.** Cuando apuestas, tienes dos formas de ganar: tu rival se retira ahora, o iguala y ganas en el showdown. Pasar (check) solo te da la segunda.

:::compare
Apostar (agresión) | Pasar o igualar (pasivo)
Se retiran ahora → ganas el bote | Sin fold equity — nadie se retira ante un check
Igualan y ligas → ganas | Ligas → ganas
==g:Dos formas de ganar== | ==r:Una forma de ganar==
:::

Para un ==farol puro== sin opción de mejorar, el punto de equilibrio es sencillo: necesitas que tu rival se retire lo bastante a menudo para cubrir el riesgo. Apostando $50 a un bote de $100, tu tasa de fold de equilibrio es ==apuesta ÷ (bote + apuesta) = 50 ÷ 150 = 33%==. Si se retiran más de un tercio de las veces, apostar es rentable — incluso con la peor mano de la mesa.

Ahora añade un proyecto y la cosa mejora muchísimo. Aquí tienes el cuadro completo como ==g:semi-farol==: el bote es de $100, apuestas $50 con un proyecto de color, tu rival se retira el 40% de las veces, y cuando iguala todavía tienes un 35% de equity de ligar en el river.

:::note
EV = (%fold × bote) + (%call × [equity × (bote + apuesta) − (%fallo × apuesta)])
EV = (0.40 × $100) + (0.60 × [0.35 × $150 − 0.65 × $50])
EV = $40 + (0.60 × [$52.50 − $32.50]) = $40 + $12 = ==g:+$52==
:::

Apostar ese proyecto de color vale ==+$52== frente a hacer check-fold — y la mayor parte de ese valor viene de las veces que se retiran, no de las que ligas. Eso es el fold equity: la razón por la que la agresión gana a la pasividad, y por la que un proyecto vale mucho más como apuesta que como call.

---

## Realización de equity: por qué un 40% de equity no significa ganar el 40%

**La realización de equity es cuánto de tu equity bruta cobras de verdad — y suele ser menos del 100%, porque la posición y las apuestas te cuestan.** Tu "40% a ganar" da por hecho que siempre llegas al showdown; en realidad te echan de proyectos, te obligan a retirarte y te llevan de un lado a otro fuera de posición. Lo que te quedas es:

==b:Equity realizada = equity bruta × %realización==

Una mano con un 40% de equity bruta que solo realiza el 75% vale en realidad ==0.75 × 40% = 30%==. Por eso puedes ir "por delante del rango de tu rival" y aun así perder dinero — nunca llegas a cobrar el trozo entero.

Lo que sube o baja tu realización:

:::card
🪑 | Posición | En posición realizas *más* que tu equity bruta (ves cartas gratis, controlas el bote); fuera de posición realizas menos. Este es el mayor factor
🎯 | Jugabilidad | Los conectores suited y las manos que ligan proyectos realizan bien; los trastos offsuit realizan mal aunque tengan equity bruta decente
📚 | Profundidad de stack y nivel | Stacks más profundos y rivales más duros hacen más difícil realizar el equity marginal
:::

Esta es la idea más importante que la mayoría de guías para principiantes deja fuera, y es la razón por la que la misma mano se juega completamente distinta según la posición. El equity bruto es el techo; la realización es lo que te llevas a casa.

---

## Equity all-in: cuando el equity bruto es lo único que importa

**Cuando estás all-in ya no hay más decisiones — así que realizas el 100% de tu equity, y el equity bruto tiene la última palabra.** Cada complicación de antes (posición, retirarse, que te echen de la mano) desaparece, porque no puede haber más apuestas. Sea cual sea tu porcentaje de victoria, esa es exactamente la parte del bote que cobrarás a largo plazo.

Por eso los equities de all-in preflop importan tanto: AA all-in contra KK cobra su ==82%== íntegro — sin impuesto de realización, sin fold equity, solo el número bruto desplegándose. También es la razón por la que un "coin flip" (22 vs AK a ~52/48) es un all-in genuinamente al filo, aunque esas mismas dos manos jugadas postflop divergirían muchísimo según la mesa y quién tenga posición.

El all-in es el único punto del póker donde la tarta se corta exactamente como dice la matemática — que es a la vez su atractivo y su peligro.

---

## Equity multiway: por qué tu manaza se encoge contra una multitud

**Tu equity cae rápido en botes multiway, porque la misma tarta del 100% ahora se reparte entre más manos.** Un par de ases va en torno al 85% mano a mano, pero contra tres rivales baja a ==r:~64%==, y contra cuatro a ~56% — sigue siendo la mejor mano, pero ya no el aplastamiento que parece. A tres bandas, el equity *promedia* un 33% por definición, porque tres jugadores dividen un bote.

![Infografía de una mesa Q♣ 9♥ 5♦ 3♠ J♦ que muestra cómo cada jugador extra en el bote recorta el equity de todas las manos](/images/holdem-equity-multiway.webp "Cuantos más jugadores sigan en el bote, más pequeño es el trozo de cada uno — incluso un par de ases")

Dos cosas empeoran en multiway, no solo tu parte bruta:

- **El fold equity se derrumba.** Para ganar un bote con una apuesta, ahora *todos* tienen que retirarse — mucho menos probable con tres rivales que con uno. Los faroles y los semi-faroles finos pierden valor rápido.
- **La realización cae.** Más jugadores por actuar significa más formas de que te superen ligando o te echen de la mano, así que realizas todavía menos de un trozo ya de por sí más pequeño.

La conclusión práctica: las manos que quieren un bote multiway son las que ligan la nuts (sets, ases suited para el color máximo), no las parejas grandes que se juegan mejor mano a mano. Cuando el campo es grande, ajústate hacia manos cuyo equity aguanta cuando la tarta se corta en cinco.

---

## Uniéndolo todo: cómo usan de verdad el equity los pros en la mesa

**Los buenos jugadores no calculan el equity exacto — corren una estimación rápida de cuatro pasos que superpone la realización y el fold equity sobre el número bruto.** Aquí tienes el proceso mental, en el orden en que ocurre de verdad:

:::steps
Estima el equity bruto | Outs × 4 o × 2 con proyectos; recuerda el enfrentamiento preflop
Descuenta por realización | ¿Fuera de posición o difícil de jugar? Recórtalo — un 40% bruto puede ser un 30% real
Suma el fold equity | Si vas a apostar, ¿con qué frecuencia se retira el villano? Ese es equity extra que tu mano sola no tiene
Compara con el precio | Equity realizada + fold equity vs tus pot odds → iguala, apuesta o retírate
:::

La noche que mencioné al principio, me quedaba en el paso uno y paraba — contaba mi equity bruta e ignoraba que fuera de posición, contra un buen jugador, nunca lo realizaría. En cuanto empecé a descontar por posición y a pensar en *sus* folds en vez de solo en mis cartas, se cerraron las fugas. El equity no es un número que consultas; es una lente por la que pasas cada decisión.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-pot-odds | Cómo calcular las pot odds | /images/holdem-pot-odds-hero.webp
/es/blog/holdem-implied-odds | Odds implícitas — cuándo un mal precio es un buen call | /images/holdem-implied-odds-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué es el equity en el póker?**

A. El equity es tu parte del bote: el porcentaje de veces que tu mano gana si la mano llega al showdown. Si el bote es de $100 y vas un 60% a ganar, tu equity vale $60. Es el número clave que comparas con el precio de un call para decidir si continúas.

**Q. ¿Cómo se calcula el equity en el póker?**

A. Con proyectos, usa la regla del 4 y el 2: multiplica tus outs por 4 en el flop (dos cartas por venir) o por 2 en el turn. Nueve outs de color ≈ 36% en el flop. Preflop, memoriza los enfrentamientos comunes (AA vs KK es 82/18). Para números exactos, los jugadores usan calculadoras de equity fuera de la mesa para estudiar — mientras juegas, estimas.

**Q. ¿Cuál es la diferencia entre equity y pot odds?**

A. El equity es tu probabilidad de ganar (lo que tienes); las pot odds son el equity que necesitas para no perder ni ganar en un call (lo que exige el precio). La regla es simple: iguala cuando tu equity es mayor que tus pot odds. Las pot odds vienen del tamaño de la apuesta; el equity viene de tu mano y de la mesa.

**Q. ¿Un 50% de equity es bueno en el póker?**

A. Por sí solo no es ni bueno ni malo — un 50% es un coin flip. Que sea un call depende del precio: frente a una apuesta de medio bote solo necesitas un 25%, así que un 50% es un call fácil; pero arriesgar todo tu stack como underdog al 50/50 sin nada más es un juego de azar, no una ventaja. El equity solo tiene sentido junto a las pot odds.

**Q. ¿Cuánto fold equity necesito para farolear con beneficio?**

A. Para un farol puro, necesitas que tu rival se retire al menos apuesta ÷ (bote + apuesta) de las veces. Apostar $50 a un bote de $100 significa 50 ÷ 150 = 33%. Si además tienes un proyecto (un semi-farol), necesitas que se retiren aún menos, porque todavía puedes ganar cuando te igualan. Por eso semi-farolear con proyectos es tan rentable.

**Q. ¿Qué es la realización de equity?**

A. La realización de equity es cuánto de tu equity bruta cobras de verdad. Equity realizada = equity bruta × %realización. Una mano con un 40% de equity bruta que realiza el 75% vale en realidad un 30%. La posición es el mayor factor — en posición realizas más, fuera de posición menos — que es por lo que la misma mano vale más en el botón que en las ciegas.

**Q. ¿Qué es el equity all-in?**

A. El equity all-in es simplemente tu porcentaje de victoria bruto cuando ya no puede haber más apuestas. Como no hay decisiones futuras, realizas el 100%, así que el equity bruto se convierte en la parte exacta del bote que cobras a largo plazo. Es el único punto donde "equity equivale a parte del bote" es literalmente cierto.

**Q. ¿Por qué baja mi equity en botes multiway?**

A. Porque el mismo bote del 100% ahora se reparte entre más manos — un par de ases al ~85% mano a mano cae al ~64% contra tres jugadores y al ~56% contra cuatro. El multiway también recorta tu fold equity (todos tienen que retirarse, no solo un jugador) y tu realización (más jugadores significan más formas de que te superen ligando), así que se encogen tanto tu parte bruta como lo que te quedas de ella.

---

## Las 3 cosas que debes recordar

1. **El equity es tu parte del bote** — %victoria × tamaño del bote. Iguala cuando supera a tus pot odds. Esa comparación es la columna vertebral de cada decisión.
2. **Rara vez te quedas con todo.** Equity realizada = bruta × %realización, y la posición es el mayor factor. El equity bruto es el techo, no el pago.
3. **La agresión fabrica equity.** El fold equity permite que una apuesta gane botes que tu mano perdería — pero se derrumba en multiway, donde necesitas que todos se retiren.

Domina esto y el resto de la matemática del póker encaja en su sitio. A partir de aquí, convierte el equity en calls correctos con la [guía de pot odds](/es/blog/holdem-pot-odds), o mira cómo cambian el cuadro los stacks profundos con las [odds implícitas](/es/blog/holdem-implied-odds).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de odds y probabilidades del póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Los porcentajes de victoria en bruto detrás de cada mano</div>
  </a>
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El precio que tu equity tiene que superar</div>
  </a>
  <a href="/es/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Odds implícitas explicadas</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué el equity no es tu parte final del bote</div>
  </a>
</div>
`.trim(),
};

export default POST;
