import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-short-stack",
  title: "Cómo jugar un short stack en póker — estrategia push/fold según la profundidad de stack",
  seoTitle: "Short stack en póker: cómo jugar el push/fold",
  desc: "¿Corto de fichas en un torneo? Aprende el push/fold: cuándo ir all-in con 15, 10 y 5 ciegas grandes, las zonas de la M y el giro del ICM en la burbuja.",
  tldr: "Un short stack (más o menos por debajo de 15–20 ciegas grandes) no puede jugar póker postflop normal, así que cambia al push/fold: vas all-in siendo el primero en entrar para conservar tu fold equity, y nunca haces open-limp ni min-raise para luego foldear. Vas de shove más amplio desde posición tardía, mantienes tu rango de igualar más cerrado que tu rango de shove, y no te dejas fundir hasta nada 'esperando una mano': tu fold equity es el arma, y desaparece por debajo de unas 8 ciegas grandes.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "📉",
  image: "/images/holdem-short-stack-hero.webp",
  imageAlt: "Un short stack de fichas de torneo junto a una pila grande sobre el tapete verde con el reloj del torneo detrás: el momento en el que un jugador corto de fichas tiene que ir all-in o foldear",
  tags: ["estrategia short stack", "como jugar short stack", "estrategia push fold", "tabla push fold", "la M de harrington", "short stack poker", "estrategia all in poker", "fold equity"],
  content: `
Lo más rápido que he pasado de "sigo vivo" a "fuera" fue una noche en la que no paré de hacer min-raise con un stack de 12 ciegas grandes, foldear a la resubida cada vez, y sangrar una ciega y media por órbita hasta que estaba demasiado corto para asustar a nadie. Cuando por fin fui de shove, tenía cuatro ciegas grandes y me pagaron dos jugadores. ==No tuve mala suerte: jugué un short stack como si fuera uno profundo.== En cuanto tu stack se vuelve pequeño, el juego entero cambia, y los jugadores que conocen las nuevas reglas mandan en la mesa.

==Un short stack tiene una única tarea: ir all-in siendo el primero, conservar tu fold equity y elegir el momento justo antes de que las ciegas lo elijan por ti.== Esto es el push/fold, y es la ventaja más fácil de aprender en torneos: un conjunto limpio de reglas que puedes aplicar en cuanto tu stack baja. Esta guía es el capítulo de acción de la trilogía matemática de torneos: el [ICM](/es/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") es la teoría, [la burbuja](/es/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") es el punto, y el juego de short stack son las jugadas que de verdad haces en el [torneo](/es/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### Reglas de short stack de un vistazo

:::stripe
shove siendo primero | conserva tu fold equity
iguala más cerrado | de lo que vas de shove
~8bb | por debajo se apaga la fold equity — actúa antes
:::

---

## ¿Qué es un short stack en póker? (Y cuántas ciegas grandes)

**Un short stack es cualquier stack demasiado pequeño para jugar póker postflop normal — a grandes rasgos, por debajo de unas 20–25 ciegas grandes, con el push/fold tomando el relevo a partir de unas 15 ciegas grandes hacia abajo.** No son cortes rígidos; son las zonas donde tus opciones se derrumban. Con 60 ciegas grandes puedes subir, igualar, flotar y superar a la gente después del flop. Con 12, casi todo eso desaparece: estás decidiendo, sobre todo antes del flop, si vas all-in o foldeas.

Este es el mapa práctico según la profundidad de stack (aproximaciones sin ante, mesa completa — los antes empujan cada franja un poco más abajo):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stack | Modo de juego | Tu arma principal |
|:--|:--|:--|
| 25bb+ | Todavía un juego postflop real — subir/foldear, algún call ocasional | Jugabilidad |
| 20bb | Subir o foldear; re-shove all-in sobre aperturas y limpers | Palanca del re-jam |
| 15bb | El push/fold toma el relevo — jams siendo primero, sobre todo desde posición tardía | Fold equity |
| 10bb | Push/fold puro; vas de shove con un rango amplio y razonable siendo primero | Fold equity (aún fuerte) |
| ≤5bb | Shove o foldear ya — la fold equity se apaga, mételo | Cualquier mano jugable, rápido |

</div>

El mayor error, con diferencia, es no saber en qué fila estás. Un stack de 12 ciegas grandes que sigue abriendo y foldeando está jugando el juego de 40 ciegas grandes y perdiendo un poco cada órbita hasta que es la fila de ≤5bb sin palanca que le quede.

---

## Por qué los short stacks juegan push/fold: la fold equity explicada

**Ir all-in siendo el primero en entrar funciona porque obliga a los rivales a una decisión de todo o nada, así que foldean manos que jugarían encantados contra una subida pequeña — y esos folds te hacen ganar las ciegas y los antes gratis.** Eso es la ==fold equity==: el beneficio que sacas cada vez que todos foldean, antes de que se muestre ninguna carta.

Piensa en lo que hace un min-raise cuando vas corto: compromete fichas, invita a una resubida que no puedes pagar y deja que los rivales realicen su equity barato. Un ==shove== hace lo contrario. Dice "iguala por tu torneo o foldea", y la mayoría de las manos foldean. Cuando te llevas las ciegas y los antes sin oposición con suficiente frecuencia, ==ganas incluso las veces que te pagan y pierdes==, porque los botes gratis pagan de sobra por ellas.

La trampa es que la fold equity ==decae a medida que tu stack encoge==. Con 12–15 ciegas grandes, los rivales foldean mucho: tu shove da miedo. Empieza a apagarse en torno a las 8–10 ciegas grandes, y con 4–5 les dan un precio tan bueno que igualan con casi cualquier cosa: tu fold equity casi ha desaparecido. Esa es toda la razón para no esperar: ==ve de shove mientras tu all-in todavía asusta a la gente==, no después.

---

![Un short stack empujado all-in a través del tapete mientras una pila mayor decide si iguala, con el reloj del torneo brillando detrás](/images/holdem-short-stack-shove.webp "Push/fold de short stack: el all-in fuerza una decisión de sí o no y gana las ciegas cuando todos foldean")

## La M de Harrington (zonas): verde, amarilla, naranja, roja, muerta

**La M mide cuántas órbitas puedes sobrevivir foldeando — tu stack dividido por el coste de una ronda completa de ciegas y antes — y ordena tu stack en cinco zonas.** Popularizada por Dan Harrington, ==M = tu stack ÷ (ciega pequeña + ciega grande + todos los antes por órbita)==. Responde a "¿cuánto puedo quedarme aquí sentado sin hacer nada?" — y cuanto más pequeña se vuelve, más tienes que actuar.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Zona | La M | Aprox. (sin antes) | Cómo jugar |
|:--|:--:|:--:|:--|
| 🟢 Verde | 20+ | ~30bb+ | Arsenal completo, juega póker normal |
| 🟡 Amarilla | 10–20 | ~15–30bb | Cierra el rango, empieza a buscar shoves |
| 🟠 Naranja | 5–10 | ~8–15bb | Push/fold; agresión siendo primero, roba ciegas |
| 🔴 Roja | 1–5 | ~1.5–8bb | Shove o foldear cualquier mano razonable |
| ⚫ Muerta | menos de 1 | menos de ~1.5bb | Shove con dos cartas cualesquiera, en el próximo spot jugable |

</div>

**Cómo se traduce la M a ciegas grandes:** sin antes, una órbita cuesta la ciega pequeña más la ciega grande — unas 1.5 ciegas grandes — así que ==M ≈ tu stack en ciegas grandes ÷ 1.5==. Una M de 10 son más o menos 15 ciegas grandes; una M de 5 son más o menos 7–8. Añade antes y cada órbita cuesta más, así que el mismo stack en ciegas grandes tiene una M *más baja* — que es exactamente por qué los niveles con ante fuerzan la acción antes. Los jugadores modernos suelen contar simplemente ciegas grandes, pero la M es la misma idea en otra unidad, y captura los antes de forma automática. Harrington añadió después la "M efectiva" (ajustada por cuántos jugadores hay en la mesa), ya que una mesa con pocos jugadores te funde más rápido.

---

## Cuándo ir all-in: el shove siendo primero según profundidad de stack y posición

**Cuando eres el primer jugador en el bote y vas corto, tu decisión es shove o foldear — y lo amplio que vas de shove depende del tamaño de tu stack y, en igual medida, de tu posición.** Cuanto más tardía es tu posición, menos jugadores quedan detrás de ti que puedan despertar con una gran mano, y más valen las ciegas en relación con tu stack — así que ==tu rango de shove se amplía muchísimo hacia el botón==.

- **Posición temprana, 12–15bb:** lo más cerrado. Tienes toda la mesa detrás, así que ve de jam con un rango fuerte, casi lineal, y foldea el resto.
- **Cutoff y botón, 10–15bb:** mucho más amplio. Con uno o dos jugadores por actuar, vas de shove para robar las ciegas y los antes, y puedes ir de jam con muchas manos que serían un fold fácil desde UTG.
- **Ciega pequeña, cualquier short stack:** el más amplio de todos siendo primero — solo la ciega grande puede igualar, y ya tienes dinero en el bote. Corto de fichas en la ciega pequeña, foldear suele ser el error.
- **Por debajo de ~6bb:** la posición importa menos. Necesitas meter tus fichas contra casi cualquiera antes de que tu fold equity se esfume; toma el próximo spot razonable en vez de esperar a uno perfecto.

Fíjate en la trampa que esto evita: ==un short stack que solo va de shove con manos premium desde todas las posiciones se funde en las ciegas==. Las ciegas y los antes son el premio, y robarlos es la mayor parte del beneficio de un short stack.

---

## Ir de shove vs. igualar un shove: dos rangos distintos

**Tu rango de shove siendo primero y tu rango para igualar el all-in de otro no son el mismo — y el rango de igualar es mucho más cerrado.** Esta es la distinción que la mayoría de principiantes se salta, y cuesta muchísimos torneos.

Cuando vas de ==shove siendo primero==, ganas de dos maneras: todos foldean (fold equity), o te pagan y tu mano aguanta. Cuando ==igualas== un shove, solo ganas de una manera — tu mano tiene que ser lo bastante buena, porque no queda fold equity que recoger. Así que:

- **Shove siendo primero:** amplio, sobre todo en posición tardía — en parte estás jugando por el fold.
- **Igualar un shove:** cerrado — necesitas una mano que le gane al *rango* del que va de shove, no una mano cualquiera. Igualar el all-in con manos como un as débil o una pareja pequeña "porque probablemente sea un coin flip" es un leak clásico, ya que un coin flip para bustear es un mal trato en un torneo (mira [cuándo foldear](/es/blog/holdem-when-to-fold)).

Una frase para recordar: ==sé el que va de shove, no el que iguala.== La agresión siendo primero es donde vive el beneficio del short stack; el hero-call de all-ins es donde mueren los short stacks.

---

## Cómo usar una tabla push/fold (y sus límites)

**Las tablas push/fold muestran qué manos hacer jam o igualar a una profundidad de stack dada, según el equilibrio de Nash — pero son una base, no un dogma, y cambian con los antes, el tamaño de la mesa y el ICM.** Una tabla suele venir en dos mitades: una tabla de **pusher** (con qué ir de shove siendo primero) y una tabla de **caller** (con qué igualar un shove), que se corresponden con la división shove-vs-igualar de arriba.

Úsalas para construir intuición, no como una ley de la naturaleza:

- **Asumen condiciones específicas.** Los rangos Nash estándar ignoran los antes y el ICM; añade antes y tus shoves se amplían, añade [presión de burbuja/ICM](/es/blog/holdem-bubble) y tus calls se cierran mucho.
- **Son un modelo heads-up / solo ciegas.** Los spots reales tienen varios jugadores por actuar, reads y saltos de premio que una tabla no puede ver.
- **La conclusión fiable es la forma**, no la mano exacta: shove más amplio en posición tardía, iguala más cerrado de lo que vas de shove, y ve de jam más a medida que tu stack baja. Para el número real en un spot de ICM o burbuja de verdad, mete tus stacks y premios en la [calculadora de ICM](/en/calculator) en vez de fiarte de un rango impreso.

*(Un matiz para los curiosos: con 10–15 ciegas grandes, los jugadores fuertes a veces mezclan un min-raise pequeño con manos premium para inducir shoves de manos dominadas. Puede rendir más que el jam puro — pero es un añadido avanzado. El push/fold es el marco fiable; domínalo primero.)*

---

## Short stack en la burbuja: el giro del ICM

**Aquí está la parte contraintuitiva: en la burbuja, un short stack claro suele tener un factor de burbuja más bajo que un stack medio — así que puedes arriesgar más, pero solo yendo de shove, no igualando.** Todos asumen que el short stack es el más presionado. Según las cuentas, no lo es: ya es probable que bustees, y duplicar te ayuda enormemente, así que tu risk premium es más bajo que el de los stacks medios atrapados (la [guía de la burbuja](/es/blog/holdem-bubble) desglosa por qué el stack medio es el verdadero prisionero).

Lo que eso significa en la práctica:

- **Sigue yendo de shove siendo primero** para robar a los stacks medios que están foldeando todo para sobrevivir — son los objetivos perfectos.
- **Puedes esperar si otros van más cortos.** Si dos jugadores tienen menos fichas que tú en la burbuja del dinero, puedes foldear spots marginales y dejar que busteen primero, escalando premios gratis — pero solo si de verdad tienes fichas con las que esperar, no si eres el más corto.
- **No conviertas el ICM en una excusa para foldear todo.** Fundirte hasta no tener fold equity para "colarte en el min-cash" cambia el torneo por su premio más pequeño. Respeta el salto de premio, y luego vuelve a acumular.

La matemática real detrás de "cuánto más bajo es mi factor de burbuja" vive en la [guía de ICM](/es/blog/holdem-icm) — pasa tu spot exacto por la [calculadora](/en/calculator) cuando importe.

---

## Los 5 errores de short stack que matan tu torneo

1. **Open-limp.** Renuncia a tu fold equity e infla un bote que no puedes jugar postflop. Los short stacks suben o foldean — y normalmente esa subida es un shove.
2. **Min-raise para luego foldear con basura.** Subir un cuarto de tu stack y foldear a un shove es lo peor de ambos mundos. Si una mano no es lo bastante buena para ir all-in, no es lo bastante buena para subir.
3. **Igualar all-ins demasiado amplio.** Tu rango de igualar debe ser más cerrado que tu rango de shove. "Probablemente sea un flip" es como bustean los short stacks — un flip para la eliminación es un trato perdedor.
4. **Fundirte hasta nada.** Esperar ases hasta tener tres ciegas grandes tira a la basura la fold equity que hace rentable el shove. Actúa mientras tu all-in todavía asuste a la gente (por lo general, antes de bajar de ~8–10bb).
5. **Ignorar la posición.** Ir de jam solo con premiums desde el botón, o de shove demasiado amplio desde UTG, ambos pierden fichas. Amplía en posición tardía, cierra en temprana.

Evita estos cinco y ya le ganarás a la mayoría del campo, que trata un short stack como uno profundo justo hasta que bustea.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-bubble | Cómo jugar la burbuja | /images/holdem-bubble-hero.webp
/es/blog/holdem-icm | El ICM explicado — por qué las fichas no son dinero | /images/holdem-icm-hero.webp
:::

## FAQ

**Q. ¿Cuántas ciegas grandes es un short stack?**

A. A grandes rasgos, por debajo de unas 20–25 ciegas grandes es "corto", y el juego push/fold toma el relevo a partir de unas 15 ciegas grandes hacia abajo, volviéndose casi shove-o-foldear puro sobre las 10. Son zonas, no reglas rígidas — los antes, el tamaño de la mesa y el ICM las mueven todas. La clave es que por debajo de ~15 ciegas grandes estás decidiendo sobre todo si vas all-in antes del flop, no jugando póker postflop.

**Q. ¿Qué es la estrategia push/fold?**

A. El push/fold es la estrategia de short stack donde, cuando eres el primero en entrar al bote, tus únicas opciones son ir all-in o foldear — nada de limpear, nada de subidas pequeñas. El shove conserva tu fold equity (los rivales foldean y ganas las ciegas) y evita que te superen después del flop con un stack demasiado pequeño para maniobrar.

**Q. ¿Deberías limpear alguna vez con un short stack?**

A. Casi nunca cuando eres el primero en entrar. El open-limp entrega la fold equity y construye un bote que no puedes navegar postflop. Corto de fichas, la jugada estándar es subir o foldear, y con 15 ciegas grandes o menos esa subida suele ser un all-in. (Completar desde la ciega pequeña detrás de otros limpers con un stack diminuto es una excepción rara.)

**Q. ¿El min-raise es correcto alguna vez cuando vas corto de fichas?**

A. Como default de principiante, no — el min-raise para luego foldear es un leak clásico. Como jugada avanzada con 10–15 ciegas grandes, los jugadores fuertes a veces hacen min-raise con manos premium para inducir shoves de manos peores. Aprende primero el push/fold fiable; añade el matiz del min-raise solo cuando eso te salga automático.

**Q. ¿Qué es la M en póker?**

A. La M es tu stack dividido por el coste de una órbita (ciega pequeña + ciega grande + antes) — cuántas rondas puedes sobrevivir foldeando. Las zonas de Harrington son Verde (20+), Amarilla (10–20), Naranja (5–10), Roja (1–5) y Muerta (menos de 1). Cuanto más baja tu M, más tienes que tomar spots de shove o foldear. Sin antes, la M es más o menos tus ciegas grandes ÷ 1.5.

**Q. ¿Qué es la fold equity y por qué encoge?**

A. La fold equity es el beneficio que sacas cuando los rivales foldean a tu apuesta o shove. Cuando vas corto y vas all-in, la fold equity es tu arma principal — las ciegas y los antes gratis que te llevas. Encoge a medida que tu stack baja porque los rivales tienen un mejor precio para igualar; por debajo de unas 5 ciegas grandes igualan tan amplio que tu all-in casi no hace foldear a nadie.

**Q. ¿La estrategia de short stack es distinta en cash games?**

A. Sí. En un cash game puedes recomprar o recompletar hasta un stack completo en cualquier momento, y normalmente no hay antes ni saltos de premio, así que ir corto es un estado temporal que arreglas recargando — no un modo de juego. El push/fold de short stack de torneo existe porque no puedes recomprar tarde y el ICM hace valiosa la supervivencia. Esta guía va de torneos.

---

## Las 3 cosas que debes recordar

1. **Shove siendo primero, y conserva tu fold equity.** Nunca hagas open-limp ni min-raise para luego foldear. Las ciegas y los antes gratis son la mayor parte del beneficio de un short stack.
2. **Iguala más cerrado de lo que vas de shove.** Dos rangos distintos — los shoves siendo primero son amplios (también ganas cuando foldean); los calls son cerrados (solo ganas en el showdown).
3. **Actúa antes de que muera tu fold equity.** No te fundas hasta nada esperando una mano. Amplía tus shoves en posición tardía, cierra en temprana, y mételo mientras tu all-in todavía asuste a la gente.

El juego de short stack es donde la matemática de torneos se vuelve memoria muscular — combínalo con el [ICM](/es/blog/holdem-icm) y la [estrategia de burbuja](/es/blog/holdem-bubble) para saber no solo *cómo* ir de shove, sino *cuándo* importa más.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-bubble" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo jugar la burbuja</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Donde tus shoves de short stack más importan</div>
  </a>
  <a href="/es/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">El ICM explicado</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué sobrevivir puede ganarle a las fichas</div>
  </a>
  <a href="/es/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cuándo foldear en póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué igualar el all-in corto es un leak</div>
  </a>
  <a href="/en/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Herramienta gratis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Calculadora de ICM</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Calcula tu spot real de shove/call</div>
  </a>
</div>
`.trim(),
};

export default POST;
