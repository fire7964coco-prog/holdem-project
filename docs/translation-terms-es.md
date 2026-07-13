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

## Enlaces internos (regla dura)
- Todos `/es/blog/slug`.
- **Whitelist es (solo enlazar a posts que existen) — Wave HR = 13**: texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings · holdem-tournament-vs-cash-game · **holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board**.
- Slugs fuera de whitelist (holdem-probability·holdem-strategy·holdem-positions·starting-hands-chart·etc. aún no traducidos): quitar solo el marcado de enlace + `thumb:`, dejar el texto ancla. Tarjetas `:::readnext`/Related con ese slug: borrar ese ítem. (Se restaurará todo en el pase final de enlaces al completar es, criterio de conteo = EN.)

## QA = editor nativo escéptico (NO calculista)
- Revisar: naturalidad (cero olor a traducción automática), términos locales de póker correctos (Color/Escalera/Póker no confundidos), coherencia de estilo (tú), residuos de otros idiomas (inglés/coreano/portugués), meta (desc ≤ 160), seoTitle con ángulo SERP local, enlaces (locale/whitelist), formato de números (grep: igual que EN). **NO recalcular manos, probabilidades ni verificar fechas/hechos** (ya validado en EN + ja).
