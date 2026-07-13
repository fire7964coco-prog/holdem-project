# Brief de traducción ES (español) — translation-terms-es.md

> EN master → localización ES. Base = estructura/imágenes/contenido de EN (ya verificados). **Prioridad #1 = calidad de traducción nativa** (que se lea como escrito por un hispanohablante nativo del mundo del póker). NO re-verificar hechos ni recalcular §13 (memoria translation-quality-first-from-es).
> Investigación local: PokerStars Learn LATAM·888poker.es·holdem.es·PokerNews ES·GGPoker ES·CasinoBarcelona.es + estilo de los posts es ya publicados (`lib/posts-es/`).

## Estilo / registro
- **Registro**: **tú (tuteo)**, cercano pero informado (como los posts es existentes: "Estás", "Ligaste", "Tendrás"). Voz de jugador con experiencia.
- **Números — ★MANTENER EL FORMATO DE EN TAL CUAL** (punto decimal, coma de millares: `1,326` · `2.5` · `0.0032%` · `2.60%`). **NO convertir a formato europeo** (`2,5`). Motivo: los posts es ya desplegados usan formato EN y hay que ser consistentes + evitar errores de conversión. `$` y `%` igual que EN. (Nota: la tabla spec §⚑ lista es como "europeo", pero el contenido es real usa formato EN; se prioriza consistencia con lo desplegado.)
- Puntuación: signos de apertura `¿` `¡` obligatorios. Comillas «…» o "…" (seguir estilo del post es existente).

## Jerarquía de manos (hand rankings) — estilo confirmado (post es existente)
| EN | ES (principal) | Notas / TRAMPA |
|----|----------------|----------------|
| Royal Flush | Escalera Real | — |
| Straight Flush | **Escalera de Color** | ★ NO "escalera de color(es)" como palo; es straight flush |
| Four of a Kind | **Póker** | ★ "Póker" = cuatro iguales (quads). Alias: Cuádruple |
| Full House | Full | (Full house) |
| Flush | **Color** | ★★ Color = flush (NO "color/palo/suit"). Trampa clásica ES |
| Straight | **Escalera** | ★ Escalera = straight |
| Three of a Kind | Trío | Set / Trips (alias) |
| Two Pair | Doble Pareja | — |
| One Pair | Pareja | — |
| High Card | Carta Alta | "Sin nada" |

- **★★TRAMPAS false-friend (críticas)**: **Color = flush**, **Escalera = straight**, **Escalera de Color = straight flush**, **Póker = four of a kind**. No traducir "flush" como "color de las cartas" ni "straight" literal.
- Orden holdem: Full **gana a** Color (igual que EN). Escalera de Color > Póker > Full > Color > Escalera.

## Términos de acción / tie-break (uso real ES)
- **kicker** (se usa "kicker"; también "carta de desempate"). **empate** = tie. **bote dividido / split** = split pot. **desempate** = tiebreak. **bote** = pot. **palo** = suit. **mesa** = board (contexto: cartas comunitarias). **dealer / repartidor**. flop / turn / river / preflop. **all-in**. **mano a mano** = heads-up. **rueda** (A-2-3-4-5) = wheel. **Broadway** (A-K-Q-J-10). **proyecto** = draw (proyecto de color / de escalera). **outs**.
- Cartas: A♠ K♥ 10♦ etc. **tal cual** (no traducir; A/K/Q/J/10). §13 (cartas·números·probabilidades) **se copia literalmente de EN, sin recalcular**.

## SEO (ángulo de búsqueda local)
- seoTitle/desc/tags: no traducir literal; usar lo que busca un hispanohablante. Ej.:
  - flush vs straight → "¿el color gana a la escalera?" / "color vs escalera"
  - kicker → "kicker en póker qué es" / "perder por kicker"
  - split → "bote dividido / split en póker" / "empate póker"
  - reading board → "cómo leer la mesa" / "mejores 5 cartas"
  - tiebreak → "desempate póker / misma mano quién gana"
- desc ≤ 160. seoTitle ~ ≤ 60 (ancho SERP es).

## Estructura (solo traducir valores)
- Conservar todas las directivas `:::hand` `:::stripe` `:::compare` `:::tip` `:::readnext` `:::tiebreak` `==g:==`/`==r:==` tablas, tarjetas Related `<div>`, patrón FAQ `**Q. …?**`+`A.`. Cartas (A♠) tal cual; solo traducir alt de imagen; rutas de imagen iguales (compartidas).
- category = valor estándar del pilar (arreglar legados en coreano como "초보 가이드" → "hand-rankings" al re-traducir el hub stale).

## Probabilidad / Odds (Odds & Math) — Wave 2 (investigación local: PokerStars Learn LATAM·888poker.es·GGPoker ES·hablandodepoker·pokerstrategy ES)
- **outs** (se usa "outs" tal cual) — cartas que completan tu proyecto. **out muerta / outs sucias** (dead/dirty outs).
- **regla del 2 y 4** (rule of 2 and 4) — flop ×4, turn ×2.
- **pot odds** (se usa "pot odds"; también "probabilidades del bote") — recompensa : coste. **probabilidad de mejora necesaria** (required equity).
- **equity** (se usa "equity"; a veces "equidad") — **equity bruta** (raw equity). **fold equity** (equity de fold).
- **implied odds / odds implícitas / probabilidades implícitas** — bote actual + fichas futuras esperadas. **reverse implied odds**.
- **proyecto** = draw. **proyecto de color** (flush draw) · **proyecto de escalera** (straight draw) · **proyecto abierto/de dos puntas** (open-ended, 8 outs) · **proyecto interior/gutshot** (gutshot, 4 outs) · **backdoor / puerta trasera**.
- set / trío, sobrepar, over-cards / sobrecartas, EV / valor esperado, coin flip, "set mining" (buscar trío). bote / apuesta / igualar(=call).
- Números y cartas §13: **igual que EN, sin recalcular ni reformatear** (formato EN: punto decimal, coma de millares; % medio). Cartas A♠ tal cual.

## Estrategia (Strategy) — Wave 3 (investigación local: PokerStars/Upswing ES·888poker.es·PokerNews ES·EducaPoker·PokerStrategy ES·GipsyTeam·holdem.es)
> **Registro nativo = spanglish técnico.** Anglicismo para el tecnicismo de acción + español para el conector/verbo conjugado/explicación. Un texto 100% traducido suena MÁS artificial. Verbaliza anglicismos con morfología ES: **foldear, limpear, farolear, resubir, cbetear, igualar**.
- **Posiciones**: nombres cortos EN/sigla → **UTG · Hijack/HJ · Cutoff/CO · Button/BTN** (NO traducir). PERO categorías SÍ → **posición temprana / media / tardía**. Botón → **el botón**. Ciegas → **ciega pequeña (SB) / ciega grande (BB)**. dealer → **repartidor/crupier**.
  - ★false-friends: **cutoff ≠ "corte"** (usar Cutoff/CO). blinds → "ciegas" (no "blinds").
- **Juego posicional**: **en posición (IP) / fuera de posición (OOP)** · actuar/**hablar último** · **tener posición sobre alguien** · **llevar las riendas de la mano**.
- **Manos iniciales**: **manos iniciales** · **rango** · **manos premium** · suited → **del mismo palo** (notación AKs con "s") · offsuit → **de distinto palo** (AKo) · pocket pair → **par servido / pareja servida** · notación AKs/AKo/22/99+/ATs+ **sin traducir** ("99+" = "de 99 en adelante" en prosa) · **conectores (del mismo palo)** · **manos jugables**.
- **Limping**: verbo → **limpear** (limpea/limpees) / **entrar pagando** · open-limp · over-limp · limp-call (anglicismos). ★★**NUNCA "cojear"** (false friend de diccionario). *Limp* tiene connotación negativa — mantener ese matiz.
- **3-bet**: **3-bet / 4-bet** (EN, número+bet; glosar 1 vez "la resubida, o 3-bet" y alternar con **resubir/resubida**) · **3-bet de valor** · **3-bet de farol / light** · **cold call** · **squeeze** (★NO "apretón") · verbos ES: **subir**(raise) · **igualar/pagar**(call) · **resubir**(re-raise) · **abrir/open-raise**.
- **C-bet**: **apuesta de continuación (c-bet)** intercambiables (presentar ambos, luego alternar; jerga "cbetear") · **check-raise** · check → **pasar** · **doble/triple barrel** (o barril) · **board seco/húmedo** (o tablero seco/pesado) · draw → **proyecto** (proyecto de color/escalera).
- **When to fold**: fold → **foldear / retirarse** (coloq. "tirar la mano"; ★"pasar"=check, NO usar para fold) · **hero fold** · **comprometido con el bote** (pot committed) · **bote** (LATAM también "pozo"; no mezclar) · bluff → **farol** (verbo **farolear**, "tirarse un farol", "atrapar el farol") · **semifarol** · **bluff catcher** (anglicismo) · **robo de ciegas / robar/defender la ciega**.
- **Crudos, NO traducir**: equity · stack · all-in · EV/+EV · fold equity · Hijack · light · squeeze · cold call · check-raise.
- Frases idiomáticas ES para naturalidad: "llevar las riendas de la mano", "tener posición sobre el rival", "tirarse un farol", "atrapar el farol", "manos que se juegan solas", "ir con todo", "no te salen las cartas".
- Números/cartas §13: **igual que EN, sin recalcular ni reformatear** (formato EN). Cartas A♠ tal cual.

## Enlaces internos (regla dura)
- Todos `/es/blog/slug`.
- **Whitelist es (solo enlazar a posts que existen) — Wave 3 (Strategy) = 27**: texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings · holdem-tournament-vs-cash-game · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board · holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · **holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold**.
- ⚠️ Aún FUERA de whitelist (Strategy enlaza a ellos → quitar solo marcado+thumb, dejar texto ancla; borrar ítem readnext/Related): **holdem-glossary** (starting-hands-chart, limping) · **holdem-fish** (limping). Se restaura en el pase final.
- Slugs fuera de whitelist (holdem-strategy·holdem-positions·starting-hands-chart·holdem-card-counting·etc. aún no traducidos): quitar solo el marcado de enlace + `thumb:`, dejar el texto ancla. Tarjetas `:::readnext`/Related con ese slug: borrar ese ítem. (Se restaurará todo en el pase final de enlaces al completar es, **criterio = corpus real EN de `lib/posts-en/` (42), no una lista curada** — lección del incidente ja.)

## QA = editor nativo escéptico (NO calculista)
- Revisar: naturalidad (cero olor a traducción automática), términos locales de póker correctos (Color/Escalera/Póker no confundidos), coherencia de estilo (tú), residuos de otros idiomas (inglés/coreano/portugués), meta (desc ≤ 160), seoTitle con ángulo SERP local, enlaces (locale/whitelist), formato de números (grep: igual que EN). **NO recalcular manos, probabilidades ni verificar fechas/hechos** (ya validado en EN + ja).
