import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-implied-odds",
  title: "Odds implícitas en el póker — cuando un mal precio es un buen call",
  seoTitle: "El call que las pot odds dicen NO — odds implícitas",
  desc: "Tus pot odds dicen fold, pero el call sigue ganando dinero. Cómo funcionan las odds implícitas: la fórmula, el set mining y las reverse implied odds.",
  tldr: "Las odds implícitas son las fichas extra que esperas ganar en las calles siguientes cuando ligas tu proyecto. Te permiten pagar de forma rentable un proyecto que las pot odds por sí solas dirían foldear — pero solo si los stacks son profundos y tu rival de verdad va a pagarte.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-13",
  masterUpdated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "💰",
  image: "/images/holdem-implied-odds-hero.webp",
  imageAlt: "Un stack profundo de fichas detrás de un jugador que paga una apuesta con proyecto de color en el turn — el momento en que las odds implícitas justifican un call que el bote por sí solo no paga",
  tags: ["odds implicitas", "implied odds poker", "reverse implied odds", "como calcular odds implicitas", "odds implicitas vs pot odds", "set mining", "formula odds implicitas", "probabilidades implicitas"],
  content: `
El bote más grande que gané en mi vida empezó con un call que "debería" haber sido fold. Tenía ==b:6♠ 5♠== en el botón, ligué un proyecto de escalera abierto en el flop, y las pot odds decían que el precio no estaba ahí. Pagué igual — porque el tipo del otro lado de la mesa tenía 200 ciegas grandes y era incapaz de foldear top pair ni para salvar su vida. La escalera llegó en el river, su stack entero se vino con ella, y por fin entendí el número que nadie explica bien: ==las odds implícitas.==

==Las odds implícitas son la razón por la que puedes pagar un proyecto que "debería" ser fold — y por la que los stacks profundos hacen que las manos especulativas sean tan rentables en el spot correcto y tan peligrosas en el equivocado.== El problema es que la mayoría de los jugadores las tratan como una palabra mágica que justifica cualquier call. No lo es. Es un número que puedes estimar, y esta guía te enseña cómo.

Las odds crudas detrás de cada proyecto salen de la [tabla de odds y probabilidades del póker](/es/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); esta guía trata de cómo decides cuándo esas odds — más el dinero que aún está por venir — hacen que un call sea de verdad rentable. Retoma exactamente donde lo dejan las [pot odds](/es/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

---

### Odds implícitas de un vistazo

:::stripe
call ÷ % de ligar − (bote + call) | La fórmula de las odds implícitas
7.5 a 1 | Odds reales de ligar un set en el flop
0 | Tus odds implícitas cuando el rival está all-in
:::

---

## ¿Qué son las odds implícitas en el póker?

**Las odds implícitas son las fichas extra que esperas ganar en las calles siguientes cuando completas tu proyecto — sumadas al bote que ya está ahí ahora mismo.** Las pot odds solo preguntan "¿vale la pena el precio actual?". Las odds implícitas hacen la pregunta completa: "¿vale la pena el precio actual *más todo lo que ganaré después*?".

Esa diferencia es la razón por la que puedes pagar una apuesta en el flop con un proyecto de color que no te da el precio inmediato. El bote que tienes delante no paga lo suficiente — pero si cae un corazón y tu rival paga una apuesta grande en el river, el *total* que ganas cubre el call muchas veces.

Aquí está la trampa que hace o rompe todo el concepto: ese dinero futuro es una ==r:estimación==, no un hecho. Depende por completo de lo profundos que sean los stacks y de lo probable que sea que tu rival te pague cuando ligues. Asume demasiado, y "odds implícitas" se convierte en el cuento que te cuentas a ti mismo mientras prendes fuego a tus fichas.

---

## Odds implícitas vs pot odds: la diferencia clave

**Las pot odds cuentan solo el dinero que hay en el bote ahora mismo; las odds implícitas suman el dinero que esperas ganar después si ligas.** No son rivales — las odds implícitas son las pot odds *extendidas al futuro*.

:::compare
Pot odds | Odds implícitas
Solo las fichas del bote ahora | El bote de ahora + las fichas que ganarás en calles siguientes
Un hecho que puedes calcular con exactitud | Una estimación basada en los stacks y el rival
Te dicen si el call se paga a sí mismo hoy | Te dicen si el call sale rentable en toda la mano
Sirven incluso contra un all-in | Valen cero contra un all-in (no hay más apuestas)
:::

La regla práctica: **empieza por las pot odds.** Si tu equity ya supera el precio, paga — sin necesidad de cuentos. Si tu proyecto *se queda justo corto* del precio, ahí es cuando las odds implícitas se vuelven el desempate. Y si tu proyecto falla el precio por mucho, las odds implícitas normalmente tampoco pueden salvarlo.

---

## Cómo calcular las odds implícitas

**Para calcular las odds implícitas, averigua cuánto extra necesitas ganar cuando ligues, usando: extra necesario = (tu call ÷ tu probabilidad de ligar) − (el bote actual + tu call).** Si de forma realista puedes ganar eso de más en las calles siguientes, el call es rentable.

Escrito limpio, con ==g:x== como el dinero extra que debes ganar cuando completas:

:::steps
Halla tu probabilidad de ligar | Cuenta outs, conviértelas a porcentaje (la [regla del 4 y 2](/es/blog/holdem-pot-odds) te acerca)
Divide tu call entre esa probabilidad | Este es el total que necesitas ganar para quedar en tablas
Resta el bote que ya está ahí | Lo que queda es el extra que debes ganar después — esa es tu ==g:x==
Juzga si es realista | Stacks profundos + un rival que paga a gusto = sí. Stacks cortos o una mesa peligrosa = no
:::

La fórmula en una línea: ==b:x = (call ÷ % de ligar) − (bote actual + call).== Si el dinero extra que de forma realista sacarías en las calles siguientes es *mayor* que x, pagar es rentable incluso cuando las pot odds inmediatas dicen fold.

---

## Un ejemplo resuelto: proyecto de color en el turn

Corramos los números para que la fórmula deje de ser abstracta.

Tienes ==b:A♥ K♥== en una mesa ==Q♥ 7♥ 2♣ 3♠== — el proyecto de color al nut, 9 outs, con una carta por venir. El bote es de $100 y tu rival apuesta $50 en el turn, así que hay ==$150 en el centro== y te toca poner $50.

- **Primero las pot odds:** te dan 150 a 50, o 3 a 1, así que necesitas **25%** de equity. Tu color liga en el river solo el ==r:19.6%== de las veces (9 outs ÷ 46 cartas desconocidas). 19.6% es menos que 25%, así que el precio inmediato dice ==r:fold.==
- **Ahora las odds implícitas:** x = (call ÷ % de ligar) − (bote + call) = (50 ÷ 0.196) − (150 + 50) = 255 − 200 = ==g:unos $55.== Ese es el extra que debes ganar en el river cuando tu color caiga.

Así que la pregunta no es "¿debería pagar $50?". Es "**cuando caiga un corazón, ¿puedo ganar al menos $55 más?**". Contra un rival profundo que pagará una apuesta en el river con top pair o un set, es fácil — pagas. Contra alguien con $40 detrás, o en una mesa donde un cuarto corazón le mata la acción, no puedes — así que foldeas.

:::note
El mismo call de $50, decisiones opuestas — y las cartas nunca cambiaron. Lo que cambió es cuánto dinero queda por ganar. Eso son las odds implícitas en una frase.
:::

---

## ¿Cuánto necesitas? Odds implícitas por tipo de proyecto

**Como regla general, cuanto más difícil es ligar tu proyecto — y cuanto más obvio resulta cuando cae — más profundos tienen que ser los stacks antes de que un call sea rentable.** Abajo tienes una guía de campo práctica. Trata los múltiplos de stack como ==r:heurísticas, no leyes== — incorporan la realidad de que no siempre te pagarán y no siempre ganarás cuando ligues.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Proyecto | Outs | % de ligar (1 carta) | Stack detrás necesario |
|:---|:---:|:---:|:---:|
| Proyecto de color | 9 | 19.6% | ~8–10× el call |
| Escalera abierta | 8 | 17.4% | ~8–10× el call |
| Set (pareja servida) | 2→set | ~11.8% en flop | ~15–20× el call |
| Escalera interior (gutshot) | 4 | 8.7% | ~20×+ (rara vez vale la pena) |

</div>

Dos fuerzas fijan el número. **Frecuencia:** un gutshot liga la mitad de veces que un proyecto de color, así que necesita que el pago sea más o menos el doble de grande para quedar en tablas. **Disfraz:** un set escondido cobra mucho más que un color obvio de cuatro cartas, porque tu rival no puede ponerte en él — que es la razón por la que los sets toleran su baja probabilidad de ligar. El [proyecto de color al nut vale mucho más que uno bajo](/es/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") por el mismo motivo: cobra *y* no pierde cuando liga.

---

## Set mining: parejas servidas pequeñas y odds implícitas

**Ligas un set (o mejor) con una pareja servida solo el 11.8% de las veces — unos 7.5 a 1 en contra, o 1 de cada 8.5 — así que el set mining solo es rentable cuando el stack detrás cubre todas las veces que fallas.** Esta es la jugada de odds implícitas más pura del póker: pagas un raise con una pareja pequeña por una sola razón — ligar trío en el flop y llevarte el stack de alguien.

![Una pareja servida pequeña de cincos junto a un stack profundo de fichas sobre el tapete verde — el montaje para un call de set mining que solo compensa cuando los stacks son profundos](/images/holdem-implied-odds-setmine.webp "Las parejas pequeñas son oro con stacks profundos detrás — pagar poco ahora para ganar mucho cuando ligas un set")

Como fallas ==r:siete de cada ocho veces==, la matemática es brutal a menos que el pago sea enorme. La guía habitual es la **"regla del 5%": paga para hacer set mining solo si los stacks efectivos son al menos 20× tu call** (tu call es ≤5% del stack).

Aquí va el desglose honesto que la mayoría de los artículos se salta:

- **El break-even puro es 7.5 a 1.** En una fantasía donde ganas el *stack entero* de tu rival cada vez que ligas un set, solo necesitarías unos 7.5× detrás.
- **La vida real exige 15–20×.** No siempre te llevarás el stack completo, a veces ligarás un set y *aun así perderás* (set sobre set, o completan una mano mayor), y la posición importa. El colchón extra cubre esas fugas.
- Así que ==b:7.5 a 1 es el suelo teórico; 15–20× es la regla práctica.== No los confundas — usar el 7.5 como tu guía en la mesa real es una fuga lenta.

La matemática exacta de ligar set en el flop y todos los demás números de "odds de ligar X" están en [drawing odds](/es/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp"); la conclusión aquí es que las parejas pequeñas son oro cuando los stacks son profundos y basura cuando son cortos — la pareja no cambió, cambiaron las odds implícitas.

---

## Reverse implied odds: cuando ligar tu proyecto igual pierde

**Las reverse implied odds son las fichas que *pierdes* cuando completas tu mano pero sigue siendo la segunda mejor.** Las odds implícitas son el dinero que ganas cuando ligas; las reverse implied odds son el dinero que sangras cuando ligas *y aun así pierdes*. Ignóralas y te enamorarás de proyectos que en silencio son trampas.

:::compare
Odds implícitas | Reverse implied odds
Dinero que ==g:ganas== en calles siguientes cuando ligas | Dinero que ==r:pierdes== en calles siguientes cuando ligas pero es la segunda mejor
Recompensan proyectos al nut | Castigan proyectos débiles y dominados
Suben el valor de un proyecto | Bajan el valor de un proyecto
:::

Tres spots clásicos de reverse implied:

- **El color bajo.** Tienes ==b:7♦ 6♦== y la mesa trae un tercer diamante. Ligas tu color — y pagas un stack al tipo que tiene ==b:A♦== para el color al nut. Tu carta "ganadora" te costó dinero.
- **El extremo tonto de una escalera.** Tienes ==b:6♦ 5♦== en ==b:9♥ 8♣ 2♠==, y un 7 en el turn te hace 5-6-7-8-9. Pero es el extremo *bajo* — cualquiera con J-10 tiene ahora 7-8-9-10-==g:J==, una escalera mayor, y la mismísima carta que necesitabas le paga a él.
- **El top pair dominado.** Emparejas tu rey con un kicker débil y sigues pagando — de cabeza contra un A-K.

La lección: un proyecto al ==g:nut== vale mucho más que el mismo proyecto a una mano segunda mejor, aunque tengan outs idénticas. Cuando tu proyecto no es al nut, ajusta tus odds implícitas *a la baja* — algunas de tus "outs" en realidad le están pagando a tu rival.

---

## Cuándo NO fiarse de las odds implícitas (errores comunes)

**En el momento en que tu rival está all-in, tus odds implícitas son exactamente cero — no hay más dinero por ganar, así que vuelves a las pot odds puras.** Este es el concepto más abusado del póker: "tenía odds implícitas" es la excusa a la que recurren los jugadores tras un call que nunca estuvo justificado.

Vigila estas fugas:

:::card
🚫 | El rival está all-in | Sin calles futuras no hay dinero futuro. Odds implícitas = 0. Usa solo pot odds
📉 | Stacks cortos detrás | Si solo queda medio bote por ganar, "me pagarán en el river" es una fantasía
🙅 | Un rival que no paga | Un nit que solo apuesta el nut no pagará tu color. Tus odds implícitas viven y mueren según su disposición a pagar
🃏 | Una mesa peligrosa | Si la carta que completa tu proyecto también congela la acción (cuatro a color, mesa emparejada), nadie te paga
🎣 | Dar el stack por hecho | "Puede que caiga y puede que meta todo el stack" son dos suposiciones apiladas sobre un fold. Estima conservador
:::

Perdí más fichas por odds implícitas imaginarias que por cualquier bad beat. La solución es una sola pregunta honesta antes de pagar un proyecto que falla el precio: ==b:"Cuando ligue, ¿quién me paga de verdad, y cuánto?"== Si no puedes nombrar el dinero, no está ahí.

---

:::readnext[Sigue leyendo]
/es/blog/holdem-pot-odds | Cómo calcular las pot odds | /images/holdem-pot-odds-hero.webp
/es/blog/holdem-drawing-odds | Odds de ligar set, color y más | /images/holdem-drawing-odds-hero.webp
:::

## Preguntas frecuentes

**Q. ¿Qué son las odds implícitas en el póker?**

A. Las odds implícitas son las fichas extra que esperas ganar en las calles siguientes si completas tu proyecto, sumadas a las fichas que ya hay en el bote. Te permiten pagar de forma rentable algunos proyectos que las pot odds por sí solas dirían foldear — siempre que los stacks sean lo bastante profundos para pagarte cuando ligues.

**Q. ¿Cómo se calculan las odds implícitas?**

A. Usa: extra necesario = (tu call ÷ tu probabilidad de ligar) − (el bote actual + tu call). Pagar $50 con un proyecto de color que liga el 19.6% de las veces significa 50 ÷ 0.196 = $255, menos los $200 ya en juego (el bote de $150 más tu call de $50) = unos $55. Si de forma realista puedes ganar $55 más cuando ligues, el call es rentable. Ten en cuenta que siempre es una estimación, ya que las apuestas futuras no están garantizadas.

**Q. ¿Cuál es la diferencia entre pot odds y odds implícitas?**

A. Las pot odds cuentan solo el dinero que hay en el bote ahora mismo y se pueden calcular con exactitud. Las odds implícitas suman el dinero que esperas ganar en las calles siguientes, que es una estimación. Las pot odds te dicen si un call se paga a sí mismo hoy; las odds implícitas te dicen si sale rentable en toda la mano.

**Q. ¿Qué son las reverse implied odds?**

A. Las reverse implied odds son las fichas que pierdes cuando completas tu proyecto pero sigue siendo la segunda mejor — como ligar un color bajo contra uno más alto, o el extremo bajo de una escalera contra una mayor. Hacen que los proyectos que no son al nut valgan menos de lo que sugieren sus outs, así que necesitas un mejor precio inmediato para pagar.

**Q. ¿Qué son unas buenas odds implícitas — cuánto necesitas?**

A. Depende de tu proyecto. Los proyectos de color y de escalera abierta necesitan alrededor de 8–10× el call en stacks detrás; el set mining necesita unos 15–20× (la "regla del 5%"). Cuanto más difícil es ligar el proyecto, más profundos tienen que ser los stacks para justificar el call.

**Q. ¿Se aplican las odds implícitas cuando tu rival está all-in?**

A. No. Cuando tu rival está all-in no hay más rondas de apuestas, así que no hay dinero adicional por ganar — tus odds implícitas son cero. En ese spot debes fiarte solo de las pot odds. Asumir odds implícitas contra un all-in es un error común y costoso.

**Q. ¿Cómo funcionan las odds implícitas en el set mining?**

A. Ligas un set con una pareja servida solo el 11.8% de las veces (unos 7.5 a 1 en contra), así que necesitas un pago grande las veces que ligas. El break-even teórico es de unos 7.5× tu call en stacks, pero la guía práctica es 15–20× — el colchón extra cubre las veces que fallas, no obtienes acción o pierdes con un set.

**Q. ¿Tienes odds implícitas con un proyecto de color?**

A. Normalmente sí, porque un color completado suele cobrar — pero solo si es un color fuerte y los stacks son profundos. Un proyecto de color al nut tiene odds implícitas excelentes; un proyecto de color bajo carga con reverse implied odds, ya que puedes completarlo y aun así perder contra un color más alto.

**Q. ¿Por qué son mejores las odds implícitas en cash games de stacks profundos?**

A. Las odds implícitas van todas del dinero que queda por ganar, y los stacks profundos significan más de él. En un cash game profundo una pareja pequeña o un conector del mismo palo puede ganar un stack completo cuando liga, así que las manos especulativas suben de valor. En spots de stacks cortos o de torneo hay menos por ganar, así que esas mismas manos pierden valor.

---

## Las 3 cosas que debes recordar

1. **La fórmula:** extra necesario = (call ÷ % de ligar) − (bote actual + call). Si de forma realista puedes ganar más que eso después, el call es bueno incluso cuando las pot odds dicen fold.
2. **El chequeo de realidad:** las odds implícitas son una estimación que vive de stacks profundos y un rival que paga. Contra un all-in o un stack corto, son cero — vuelve a las pot odds.
3. **El espejo oscuro:** las reverse implied odds castigan los proyectos que no son al nut. Un proyecto al nut vale mucho más que el mismo proyecto a una mano segunda mejor.

Domina esto y dejarás de quemar fichas en calls esperanzados mientras aún haces los rentables que nadie más se atreve a hacer. Desde aquí, fija los números crudos con la [tabla de odds y probabilidades del póker](/es/blog/holdem-probability), o mira exactamente con qué frecuencia liga cada proyecto en [drawing odds](/es/blog/holdem-drawing-odds).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/es/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de odds y probabilidades del póker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Cada mano, flop y proyecto — los números detrás del call</div>
  </a>
  <a href="/es/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cómo calcular las pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">El precio inmediato — donde empiezan las odds implícitas</div>
  </a>
  <a href="/es/blog/holdem-drawing-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds y matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Drawing odds y odds de ligar X</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Con qué frecuencia liga de verdad un set, color o escalera</div>
  </a>
  <a href="/es/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Manos iniciales</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabla de manos iniciales por posición</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Con qué manos especulativas vale la pena entrar al proyecto</div>
  </a>
</div>
`.trim(),
};

export default POST;
