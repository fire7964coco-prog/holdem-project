import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "¿Qué es el ICM en póker? El Modelo de Fichas Independiente, explicado",
  seoTitle: "Tus fichas no valen su valor nominal — el ICM en póker",
  desc: "En un torneo tus fichas no son dinero: solo ganar paga el primer premio. El ICM convierte tu stack en premio real. Aquí tienes cómo funciona.",
  tldr: "El ICM (Independent Chip Model, Modelo de Fichas Independiente) convierte tu stack de fichas de torneo en su valor real en premios, usando los pagos y los stacks de todos. Como solo se gana un primer premio, doblar tus fichas nunca dobla tu dinero — así que el stack del líder vale menos que su porcentaje de fichas, y los stacks cortos valen más. Ese desfase es la razón por la que foldeas en la burbuja manos que serían calls fáciles en un cash game.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Fichas de póker de mesa final apiladas frente a una escalera de premios, mostrando que un stack de fichas mayor no se convierte uno a uno en una porción mayor de la bolsa de premios",
  tags: ["icm poker", "que es el icm en poker", "icm poker significado", "icm vs chip ev", "acuerdo icm", "chip chop vs icm", "como se calcula el icm", "estrategia icm poker"],
  content: `
La primera vez que el ICM me costó dinero, ni siquiera sabía que existía. Quedábamos cuatro, tres cobraban, y me encontré con jotas servidas y un stack mediano. Empujé all-in, el líder me pagó con as-diez y busteé en la burbuja sin cobrar nada. ==En un cash game ese all-in está bien. En esa burbuja fue un desastre== — y el motivo es la idea más importante de todo el póker de torneos.

==Las fichas en un torneo no son dinero. Solo ganas *un* primer premio, así que doblar tu stack nunca dobla lo que realmente vales.== El ICM — el Modelo de Fichas Independiente (Independent Chip Model) — es la matemática que convierte tu montón de fichas en los dólares reales que representa, y una vez lo ves, calls y folds que parecían un error de repente cobran sentido. Esta guía te lleva desde "qué significan las siglas ICM" hasta repartir un acuerdo en la mesa final, con cada número desglosado para que puedas comprobarlo tú mismo.

El ICM vive dentro del [póker de torneo](/es/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") en concreto — es la razón por la que el juego en las fases finales de un MTT no se parece en nada a un cash game.

---

### El ICM de un vistazo

:::stripe
fichas ≠ dinero | Solo ganas un primer premio
líder en fichas | vale MENOS que su porcentaje de fichas
stack corto | vale MÁS que su porcentaje de fichas
:::

---

## ¿Qué es el ICM en póker?

**El ICM (el Modelo de Fichas Independiente) convierte un stack de fichas en su valor real en premios, usando los pagos restantes y el tamaño del stack de cada jugador.** Responde a una única pregunta: ==si el torneo terminara ahora mismo con estos stacks, ¿cuánto vale en dólares mi trozo de la bolsa de premios?==

Funciona estimando con qué frecuencia termina cada jugador en cada puesto pagado — primero, segundo, tercero, y así — a partir de su porcentaje de fichas, y luego multiplicando esas probabilidades por los pagos. Cuanto mayor sea tu stack, más a menudo terminas arriba; pero como ==el premio máximo está limitado, cada ficha extra compra cada vez menos dinero.==

El cambio mental clave: en un cash game una ficha es un dólar, punto. En un torneo una ficha es un *boleto de lotería* sobre un conjunto fijo de premios. El ICM le pone precio a ese boleto. Solo se aplica a torneos y sit & gos — [nunca a los cash games](/es/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), donde tus fichas ya equivalen a su valor nominal.

---

## Por qué tus fichas no valen su valor nominal en dinero

**Porque el dinero de los premios está "cargado arriba" y queda bloqueado por debajo de ti.** Digamos que tres premios pagan $50 / $30 / $20. En el momento en que entras en premios, tienes garantizados al menos $20 — así que las fichas que protegen esos $20 son valiosísimas, mientras que las fichas que van a por el primer puesto persiguen un premio que solo puedes ganar una vez.

Eso hace que la curva de fichas-a-dinero ==se doble==: las primeras fichas (supervivencia) valen mucho, las últimas fichas (ir a por la victoria) valen menos. Un jugador con la mitad de las fichas no posee la mitad de la bolsa de premios — posee bastante menos, porque no puede terminar mejor que primero pero *sí* puede bustear.

Dale la vuelta y el stack corto es el ganador de esta matemática. Ya tiene un derecho real sobre los saltos de premio que quedan por debajo, así que ==cada una de sus fichas vale más que su valor nominal==. Esta única asimetría — el stack grande sobrevalorado en fichas, el stack corto infravalorado — impulsa cada decisión de ICM que tomarás en tu vida.

---

## ¿Cómo se calcula el ICM? (El modelo Malmuth–Harville)

**El ICM asigna a cada jugador su probabilidad de terminar en cada puesto basándose únicamente en el tamaño del stack, y luego multiplica por los pagos.** El método se suele llamar modelo Malmuth–Harville — la matemática de probabilidad de puestos viene del trabajo de David Harville en los años 70 sobre las cuotas de las carreras de caballos, que Mason Malmuth aplicó al póker.

La regla es simple y recursiva:

- Tu probabilidad de terminar **1.º** = tu stack ÷ fichas totales.
- Tu probabilidad de terminar **2.º** = la suma, sobre cada otro jugador que podría terminar 1.º, de (su probabilidad de ganar) × (tu stack ÷ las fichas que quedan sin él).
- Sigue así para cada puesto inferior.

Hagámoslo de verdad. Quedan tres jugadores, los premios son ==$50 / $30 / $20== (bolsa de $100), y los stacks son:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Puesto | Líder (5,000 · 50%) | Medio (3,000 · 30%) | Corto (2,000 · 20%) |
|:--|:--:|:--:|:--:|
| 1.º | 50.0% | 30.0% | 20.0% |
| 2.º | 33.9% | 37.5% | 28.6% |
| 3.º | 16.1% | 32.5% | 51.4% |

</div>

Coge el número del 2.º puesto del líder para que veas la recursión: si el Medio gana primero (el 30% de las veces), el líder se queda entonces con 5,000 de las 7,000 fichas restantes = 71.4%, y 0.30 × 0.714 = 21.4%; si el Corto gana primero (20%), el líder se queda con 5,000 de 8,000 = 62.5%, y 0.20 × 0.625 = 12.5%. Súmalos: ==33.9%== de las veces el líder termina 2.º.

Ahora multiplica cada fila por los pagos y obtienes el valor en dólares de cada stack:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jugador | % fichas | Valor ICM | ICM % | vs fichas |
|:--|:--:|:--:|:--:|:--:|
| Líder | 50.0% | ==$38.39== | 38.4% | ==r:−11.6== |
| Medio | 30.0% | $32.75 | 32.8% | ==g:+2.8== |
| Corto | 20.0% | $28.86 | 28.9% | ==g:+8.9== |

</div>

Ahí lo tienes en números: el líder tiene ==la mitad de las fichas pero solo el 38.4% del dinero==, mientras que el 20% de fichas del stack corto vale el 28.9%. No hace falta calcular esto a mano en la mesa — la [calculadora de ICM](/en/calculator) lo hace al instante — pero ver la maquinaria una vez es lo que hace que la estrategia se te quede.

---

## ICM vs chip EV — ¿cuál es la diferencia?

**El chip EV mide una decisión en fichas ganadas o perdidas; el ICM (o "$EV") la mide en premio real. Coinciden pronto y se separan con fuerza al final.** Al principio de un torneo, con saltos de premio minúsculos y lejanos, una ficha es básicamente una ficha — juegas [chip EV](/es/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"), acumulando sin parar. Cerca de los premios y en la mesa final, el ICM toma el mando.

El choque clásico es un all-in marginal. En chip EV, un coin flip por un bote grande puede estar bien o incluso ser bueno — ganas tantas fichas como pierdes. En ICM puede ser un ==fold== claro, porque bustear te cuesta premio bloqueado que no puedes recuperar, mientras que las fichas que ganarías valen menos que su valor nominal.

Ese es exactamente el error que cometí con aquellas jotas: un buen all-in en chip EV, un all-in perdedor en ICM. ==El chip EV pregunta "¿esto hará crecer mi stack?" El ICM pregunta "¿esto hará crecer mi bankroll?"== — y solo el segundo paga.

---

## El "impuesto ICM": por qué perder fichas duele más de lo que ayuda ganarlas

**El "impuesto ICM" es el desfase entre tu porcentaje de fichas y tu porcentaje de dinero real — valor que se esfuma en cuanto los stacks se cargan arriba.** En el ejemplo trabajado, las fichas del líder dicen 50% pero el dinero dice 38.4%: un ==impuesto ICM de 11.6 puntos== por ser el stack grande.

El impuesto aparece en cada all-in como un **risk premium** — la equity extra que necesitas *por encima* del punto de equilibrio de chip EV para que un call sea de verdad rentable en dólares. Si la matemática de fichas dice que necesitas un 40% para pagar, el ICM podría exigir un 48-50%, porque el lado malo (bustear, perder la equity de los saltos de premio) pesa más que el lado bueno (fichas que valen menos que su valor nominal).

El jugador que más lo sufre es el **stack medio en la burbuja** — lo bastante grande como para tener equity real que perder, no tan corto como para verse obligado a entrar. Carga con el risk premium más alto y debería jugar lo más tight posible. El stack grande carga con el risk premium *más bajo*, que es el motor entero detrás de la presión del ICM.

---

![Un stack medio de torneo foldeando ante el all-in de un stack grande en la burbuja de premios, con fichas y una escalera de pagos a la vista — el momento en que la presión del ICM convierte un call normal en un fold](/images/holdem-icm-pressure.webp "Presión del ICM: el stack medio foldea porque bustear le cuesta premio bloqueado que las fichas no pueden recomprar")

## Bubble factor y risk premium: cómo el ICM cambia tus all-ins y tus calls

**El "bubble factor" mide cuánto más te cuesta perder tus fichas de lo que te ayuda ganar esas mismas fichas — y se dispara justo antes de cada salto de premio.** Un bubble factor de 1.0 significa que fichas y dinero se mueven juntos (fase temprana). Un bubble factor de 1.5 significa que un bote perdido duele 1.5× más de lo que ayuda un bote idéntico ganado — así que necesitas una ventaja mucho mayor para meterte en la mano.

De ahí salen dos reglas prácticas:

- **Stack grande: ataca.** Tu bajo risk premium te deja [abrir y hacer 3-bet](/es/blog/holdem-3bet) sin parar contra jugadores que no pueden pagar sin arriesgar su vida en el torneo. Esto es "aplicar presión del ICM", y es la forma más fiable de ganar fichas en una mesa final.
- **Stacks medios y cortos: cierra tu rango de calls, pero sigue siendo tú quien empuja primero.** Ser el que se mueve all-in (con fold equity) es mucho mejor que ser el que tiene que pagar. Bajo presión, tu rango de calls debería encogerse de golpe mientras tu rango de open-shove sigue agresivo.

El asiento de pesadilla es el stack medio al que le empujan encima — foldeando manos tan fuertes como algunas con las que pagarías de inmediato en un cash game. Eso no es debilidad; eso es ICM.

---

## Acuerdo por ICM vs chip chop: cómo repartir la bolsa de una mesa final

**Un chip chop reparte el dinero restante según el porcentaje bruto de fichas; un acuerdo por ICM lo reparte según el valor en dólares del ICM de cada jugador. El chip chop favorece a los stacks grandes, el acuerdo por ICM es más justo con los stacks cortos.** Cuando los jugadores acuerdan terminar un torneo antes y repartirse los premios, estos son los dos métodos sobre la mesa — y saber la diferencia vale dinero de verdad.

Digamos que tres jugadores con el 50% / 30% / 20% de las fichas se reparten una bolsa restante de ==$1,500== (que paga $900 / $400 / $200):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jugador | Chip chop | Acuerdo ICM | Diferencia |
|:--|:--:|:--:|:--:|
| Líder (50%) | $750 | ==$618== | ==r:−$132== |
| Medio (30%) | $450 | $485 | ==g:+$35== |
| Corto (20%) | $300 | ==$397== | ==g:+$97== |

</div>

El stack corto obtiene ==$97 más== con un acuerdo por ICM que con un chip chop, porque el ICM le acredita los saltos de premio que ya se ha ganado. Así que la regla es fácil: ==si vas corto, pide un acuerdo por ICM; si eres el líder en fichas, propón un chip chop.== En la práctica el líder en fichas suele negociar un poco *por encima* de su número de ICM (y los stacks cortos aceptan un poco por debajo) a cambio de la certeza de asegurar dinero — eso está bien, siempre que conozcas tu cifra de ICM primero. Pasa tus propios stacks y pagos por la [calculadora de acuerdos por ICM](/en/calculator) antes de aceptar nada.

---

## ¿Cuándo importa más el ICM — y cuándo deberías ignorarlo?

**El ICM importa más cerca de los saltos de premio y menos cuando quedan lejos.** Apóyate en él en estos spots:

- **La [burbuja de premios](/es/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — el salto más grande de todos es de $0 a cobrar, así que los risk premiums alcanzan su pico.
- **La burbuja de la mesa final y cada salto de premio en la mesa final** — cada peldaño de la escalera es dinero real.
- **Satélites** — el caso extremo: cada plaza clasificatoria vale lo mismo, así que en cuanto tienes fichas suficientes para ganar una plaza, las fichas extra no valen casi *nada* y foldeas casi todo.

Ignóralo (juega chip EV) cuando:

- **Fases tempranas y medias**, donde el siguiente salto de premio es una abstracción lejana y acumular fichas es lo que gana torneos.
- **Juego deep stack con ciegas pequeñas**, donde tienes margen para superar a tus rivales en juego en lugar de meterlo todo.
- **Mano a mano por el título**, donde solo quedan dos premios y el ICM deja de cambiar tu estrategia — vuelve a ser chip EV, en la práctica.

Un leak común es sobreaplicar el ICM: foldear hasta quedarte en stack corto "para escalar" en vez de acumular cuando la presión aún no está de verdad ahí. El ICM es una herramienta de fase final, no una excusa para jugar con miedo todo el torneo.

---

## ¿Cuán preciso es el ICM? Sus limitaciones

**El ICM es el mejor modelo simple que tenemos, pero es una aproximación — asume que todos los jugadores tienen la misma habilidad e ignora casi todo salvo los tamaños de los stacks.** Sé honesto sobre lo que deja fuera:

- **Habilidad.** El ICM trata a un campeón del mundo y a un novato con stacks iguales como iguales. Las fichas de un mejor jugador valen más de lo que dice el modelo.
- **Posición.** Un stack de 3 ciegas grandes en el botón (a punto de ver flops baratos) vale más que el mismo stack en la ciega grande (a punto de verse obligado a entrar). El ICM no ve los asientos.
- **Ciegas y juego futuro.** El ICM congela el torneo en este instante; ignora las ciegas que suben, los antes y cómo se van a jugar de verdad las próximas manos.

Incluso hay respaldo empírico para su punto ciego: un gran estudio de 2025 que puso a prueba el ICM contra resultados reales de torneos encontró que tiende a ==infravalorar los stacks grandes y sobrevalorar los stacks cortos==, en parte porque un líder en fichas hábil puede aprovechar la presión del ICM para ganar *más* de lo que predice el modelo bruto. Los solvers avanzados añaden una corrección de "juego futuro" precisamente por esta razón. Nada de eso hace que el ICM esté mal — lo convierte en una primera aproximación sólida que ajustas por habilidad y posición, no en una ley de la física.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-tournament | Estrategia de torneos de Texas Hold'em | /images/holdem-tournament-hero.webp
/es/blog/holdem-equity | La equity en póker, explicada | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. ¿Qué es el ICM en póker?**

A. El ICM (el Modelo de Fichas Independiente) es una fórmula que convierte tu stack de fichas de torneo en su valor real en premios, usando los pagos restantes y el stack de cada jugador. Funciona porque solo ganas un primer premio, así que fichas y dólares no son lo mismo — el ICM le pone precio a la diferencia.

**Q. ¿Cómo se calcula el ICM?**

A. Asigna a cada jugador una probabilidad de terminar en cada puesto pagado según su porcentaje de fichas (tu probabilidad de terminar primero = tu stack ÷ fichas totales, y luego recursivamente para los puestos inferiores), y después multiplica esas probabilidades por los pagos. La suma es el valor en dólares de tu stack. En la práctica usas una calculadora de ICM; lo importante es entender qué está haciendo.

**Q. ¿Cuál es la diferencia entre el ICM y el chip EV?**

A. El chip EV mide una decisión en fichas ganadas o perdidas; el ICM la mide en dinero real. Coinciden al principio de un torneo y divergen cerca de los premios, donde bustear te cuesta equity de premio bloqueado. Un all-in de coin flip que está bien en chip EV puede ser un fold claro bajo ICM.

**Q. ¿Qué es un acuerdo por ICM, y en qué se diferencia de un chip chop?**

A. Ambos reparten una bolsa de premios cuando los jugadores acuerdan terminar antes. Un chip chop divide el dinero por el porcentaje bruto de fichas (favoreciendo a los stacks grandes); un acuerdo por ICM lo divide por el valor en dólares del ICM de cada jugador (más justo con los stacks cortos). Si vas corto, pide un acuerdo por ICM; si eres el líder en fichas, un chip chop te paga más.

**Q. ¿El ICM se aplica a los cash games?**

A. No. En un cash game cada ficha ya equivale a su valor nominal en dólares y puedes recomprar o irte cuando quieras, así que no hay nada que convertir. El ICM solo existe porque las fichas de torneo no se pueden cambiar por su valor nominal.

**Q. ¿Cuándo debería ignorar el ICM?**

A. En fases tempranas y medias, en juego deep stack con ciegas pequeñas, y mano a mano por el título — todos spots donde los saltos de premio quedan lejos o solo quedan dos premios. En esos casos juegas chip EV y te centras en acumular fichas.

**Q. ¿Quién inventó el ICM?**

A. La matemática de probabilidad de puestos se suele atribuir a David Harville (a partir de su investigación de los años 70 sobre carreras de caballos), que Mason Malmuth aplicó a los torneos de póker — de ahí el modelo "Malmuth–Harville". Se convirtió en la forma estándar de valorar los stacks de torneo y repartir los acuerdos de mesa final.

---

## Las 3 ideas que debes recordar

1. **Las fichas no son dinero.** Solo ganas un primer premio, así que el líder en fichas vale menos que su porcentaje de fichas y el stack corto vale más. Ese único desfase es todo el ICM.
2. **En la fase final, cambia de chip EV a $EV.** Cerca de los saltos de premio, un call necesita equity extra (un risk premium) para ser rentable. El stack medio foldea manos que un cash game pagaría de inmediato.
3. **Conoce tu número antes de pactar.** Los stacks cortos quieren un acuerdo por ICM, los stacks grandes quieren un chip chop — pasa la [calculadora](/en/calculator) primero.

Desde aquí, mira cómo encaja la presión del ICM en la [estrategia de torneos](/es/blog/holdem-tournament) más amplia, o vuelve a la base con la [equity en póker](/es/blog/holdem-equity) y las [pot odds](/es/blog/holdem-pot-odds).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estrategia de torneos de Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El pilar al que pertenece el ICM</div>
  </a>
  <a href="/es/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneos vs cash games</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por qué el ICM nunca aplica al cash</div>
  </a>
  <a href="/es/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estrategia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">La equity en póker, explicada</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El chip EV es equity en fichas</div>
  </a>
  <a href="/en/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Herramienta gratis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Calculadora de ICM</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Calcula tus propios stacks y acuerdos</div>
  </a>
</div>
`.trim(),
};

export default POST;
