# PT-BR GTO example explanations — writing brief

Prepared 2026-09-15. Scope: publish all 13 existing solver-example explanations in Brazilian Portuguese. Current user authorized preparation, writing, review and publication. Delivery: one complete release, with PT landing links and live verification. Writers own their assigned new post files only; root owns registration, shared links, gates, integration and deployment.

## 1. Authoritative inputs

1. Read this brief, the PT section of docs/translation-terms-pt.md and your assigned CURRENT lib/posts-en/<slug>.ts in full. Structure, numerical arguments, disclaimers, examples, directives and tables come from EN. Do not translate from ES or a previous snapshot.
2. docs/pt-gto-source-contract.md records source metadata/counts/caveats; docs/gto-solver-series-spec.md §4-B/§4-B-2 is the fixed numerical reference. If an apparent discrepancy matters, report it with exact source passages; do not silently invent a correction.
3. docs/keyword-bank/pt-gto-series.md assigns search intent and fixed titles. Current PT general c-bet, 3-bet, equity, position and solver landing pages own the broad queries. These articles explain a particular board and configuration.
4. docs/solver-app-verbatim-pt-2026-09-15.md and .solver-captures/verbatim-pt.json provide refreshed UI labels. App explanation notes are NOT a strategy source: some remain outdated. Use only real labels for reproduction instructions.
5. Read applicable .cursor/rules/posting.mdc and REVIEW-PROTOCOL.md. GTO series exceptions prevail over generic copy guidance: no invented personal experience, no new strategy thesis, no generic article rewrite. Newer settled-decisions workflow prevails over old per-5-article publishing instructions.

## 2. Output and metadata

- Files: lib/posts-pt/<same-slug>.ts; import type Post from ../posts; export const POST and default POST as in existing locale files.
- title: use the fixed title in the keyword pack (also used for series readnext links). seoTitle: natural PT-BR, <=60 characters; desc: 60–160 characters, meaningful board/seat context. Never make the range's action percentage sound like one hand's frequency.
- tldr: plain text, no Markdown. Preserve the source's numerical information and conditions; make it understandable independently.
- category: strategy; date and updated: 2026-09-15; masterUpdated: EXACT current EN updated for this slug, not one shared date. readTime: N min; same emoji as EN; keepImagesInBody: true.
- image: /images/gto-<key>-oop-pt.webp. Only the body range-composition chart /images/gto-<key>-ranges-pt.webp goes into content. Do NOT duplicate the hero inside content. Preserve other legitimate source image roles, but no EN-language chart leftovers.
- imageAlt: specific, readable PT, naming the board, seat and actual screen/diagram. A 13×13 grid is permitted; do not hardcode the article-series count in marketing prose.
- tags: focused board/topic + poker/GTO where useful, natural Portuguese spelling and accents. Do not stuff unaccented duplicates or broadly retarget established pillars.
- Close content with .trim(). Do not put literal backticks anywhere else in the file, including comments (existing structure gate counts them). No Markdown in tldr, no nested bold, no empty placeholder sections.
- Brief file header can record provenance, keyword and known limitations. Do not copy long historical EN comments, fabricated reviews or test results.

## 3. Translation contract

- Preserve EN H2 count/order, substantive subsections, paragraphs of evidence, all tables and their row order, numerical values, hand ranks/suits, inequalities, negations and limiting words. Preserve directive types/order, image count, highlight count, FAQ count and link slots. H2 wording and FAQ questions may be localized to the assigned intent; preserve all corresponding answers/facts.
- A natural translation is not a summary: do not cut examples or qualifications to save length. Remove no source argument. Do not add claims just to hit a keyword.
- Real-life sounding is achieved through clear PT phrasing and the reader's concrete decision, not fabricated personal play histories. This is reproducible analysis of our own solver data.
- Every percentage needs its correct seat, denominator, action and solve. Callers' leads are donk bets, not c-bets. A 3-bettor's first flop bet can be a c-bet. IP result screen here is range/equity information, NOT an IP action strategy.
- Keep source dates in source/provenance sentences and condition tables. Publication date is new; historical measurements do not become new measurements by translation. Root verifies fresh capture parity separately.
- Preserve all disclaimers, with their scope. In particular: first flop decision only; later responses unavailable; interpretation vs computed result; output rounding; rake not modeled; assumptions can change strategies; special separate re-solve in #7.
- EN's approximate language remains approximate: about, almost, rounded, this configuration. Do not turn a sample into a universal poker rule or promise EV/profit.
- Keep differences between equity, EV, EQR and fold equity explicit. Higher EQR does not automatically mean higher absolute EV; frequency difference is in percentage points, not a relative percentage.

## 4. PT-BR language and recurring positions

Use você with friendly, direct Brazilian prose. Short paragraphs with one idea each. Avoid literal English spatial metaphors or inflated slogans. Use correct accents even if unaccented queries exist.

| Concept / placement | Fixed prose convention |
|---|---|
| range / ranges; solver; spot | Preserve these established PT poker terms. In an SEO heading, solver must have poker context. |
| board | board; seco, conectado, pareado, monotone as appropriate; do not switch randomly to mesa/bordo inside this series |
| pot / effective stacks | pote / stacks efetivos |
| bet / call / raise / check / fold | apostar / pagar / aumentar / dar check / foldar (desistir when clearer); exact UI chips remain Bet and Check |
| c-bet / 3-bet / check-raise / donk bet | Keep these spellings. First mention explains the meaning in plain PT if EN introduces it. |
| caller / open-raiser / 3-bettor | quem pagou / quem abriu o pote / quem deu a 3-bet in prose; exact player selector wording only when navigating UI |
| OOP / IP | fora de posição (OOP) / em posição (IP), explain on first use per article |
| BTN / BB / SB | botão (BTN), big blind (BB), small blind (SB), introduce before relying on abbreviations |
| equity / EV / EQR | equity / valor esperado (EV) / realização de equity (EQR). Use the acronym after introduction. |
| range / nut advantage | vantagem de range / vantagem de nuts |
| set / trips | distinguish: set = trinca com par na mão; trips = trinca usando o par do board. Trinca is the broader category, not an automatic substitute for either. |
| top pair / overpair / underpair / overcards | top pair / overpair / underpair / overcards, with plain explanations where EN supplies them |
| draws | draw, flush draw, gutshot, draw de sequência de duas pontas, backdoor; UI labels verbatim from live dictionary |
| fold equity | fold equity; explain value from opponents folding, not merely fold rate |
| MDF | frequência mínima de defesa (MDF) |
| SPR | relação entre stack e pote (SPR), then SPR |
| combos / percentage points | combos / pontos percentuais |
| quick-answer heading | Resposta rápida (preserve source block form) |
| FAQ H2 | Perguntas frequentes |
| readnext label | Continue lendo |
| condition-table first column | Condição |
| condition row labels | Posições; Ação pré-flop; Ranges; Flop; Pote inicial; Stack efetivo; Pote · stack efetivo; Tamanhos de aposta; Rake; Data da consulta — use only rows actually in EN; never split a combined row |
| equity/EV/EQR table first column | Métrica |
| action-table first column | Primeira ação do BB (or SB) at root only; #7 later nodes must identify BTN após o check / BB diante de uma aposta de 1,8bb |
| other column labels | Frequência; Combos; Mão; BB (OOP); BTN (IP); SB (OOP); BB (IP) according to exact scenario |
| stripe labels | Spot; Flop; Pote · Stack; Resultado, only where corresponding EN fields exist |
| dead small blind | 0,5bb do small blind que foldou (where this is the actual source calculation) |

These are prose conventions. Hand/draw-category tables that reproduce UI use the live category labels, preserving EN clarifications such as “all sets here.” Do not overwrite distinct source categories with a common term.

### Numbers, cards and UI

- PT prose/table decimal separator is comma; thousands separator is period: 5,5bb; 97,5bb; 45,1%; 1.326. Preserve numeric values exactly. Keep %, bb, suits and hand shorthand. Board card T is preserved as in EN/app; TT and T9s are hand notation, never words.
- Use en dash for numeric intervals and include % on both endpoints when source does so. Do not normalize all 19,6% values blindly: denominators depend on street.
- Live navigation: Spots de estudo → [exact spot title] → ⚡ Ver resultados. Back: ← Lista. Current panels: Mãos, Draws, Resumo; bar control: Largura da barra. Summary row: Tudo. Detail headers: Mão, Estratégia, Peso, EQ, EV (bb), EQR.
- Current action chips include Bet 4,1bb (75% do pote), Bet 1,8bb (33% do pote), Check. These are examples, NOT a template for every spot: different trees permit different sizes.
- Use /pt/solver for landing links. Any direct app link must preserve ?lang=pt and a verified actual route. Do not invent deep links or click paths.

### Caveat phrases (preserve semantic distinction)

- first action only: “O exemplo pré-calculado vai apenas até a primeira decisão no flop.”
- not in this solve: “Esse número não está disponível nesta resolução.”
- not on this page: “Esse número não está apresentado nesta página.”
- cannot confirm on this screen: “Não é possível confirmar isso nesta tela.”
- interpretation: “Esta seção interpreta os ranges; não apresenta uma frequência calculada pelo solver.” (Adapt if source talks about another quantity; never erase its precise subject.)
- rounded screen values: “Os valores exibidos na tela estão arredondados.”
- distinct solve (#7): “Esta seção usa uma resolução separada, não o resultado pré-calculado do exemplo.” Preserve its tree, iterations, exploitability and differing root result.
- Reproduction CTA: “Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo** e escolha **[nome exato]** → **⚡ Ver resultados**.” Fit source link counts; do not add extra link slots.

## 5. Links and series titles

- EN /en/blog/<slug> becomes /pt/blog/<same-slug> only if registered PT or one of the 13 new posts. Verify existing destinations in lib/posts-pt/index.ts. If EN links an unavailable PT article, report it; do not invent a route.
- Keep source internal-link slots, thumbnails and readnext card roles. Readnext series titles equal the fixed PT target title; existing non-series cards use that PT article's actual title. Root reconciles after all batches exist.
- Update gto-*-oop-en / ranges-en image references in thumbnails as well as main metadata. Do not blindly change language-neutral shared images.
- Do not add the entire 13-item list to every article. Landing is the hub. Root handles series navigation/landing integration.

## 6. Batches and checks

| Batch | Numbers | Slugs |
|---|---|---|
| A | 1–4 | a-high-board-cbet; k-high-board-cbet; broadway-board-strategy; donk-bet-strategy |
| B | 5–8 | monotone-board-strategy; paired-board-strategy; low-board-check-raise; 3bet-pot-cbet |
| C | 9–13 | 3bet-pot-bet-sizing; 3bet-pot-low-board; blind-battle-cbet; blind-battle-connected-board; ace-paired-board-strategy |

Each writer checks their parsed POST objects, metadata lengths, structural parity and numeric preservation. Root has added PT decimal support to check-gto-numbers.mjs; do not switch PT prose to dots to satisfy an old gate.

Run node scripts/check-gto-numbers.mjs --locale=pt and node scripts/check-gto-structure.mjs --locale=pt. Other batches may still be missing; report your own actual coverage. Do not touch other writers' files to make the global result green.

Final review uses the complete series: numerical/strategic fidelity, Brazilian usage, SEO/readability, followed by a correction-diff proofreading pass. Findings require exact passages, confidence and evidence; no defect quota. Distinguish inherited source issues from translation errors. Root judges proposals before applying them. No partial publishing, commits or pushes by writers.

Scope clarification: EN #5 has no generic conditions H2; #10–13 have FAQ questions without an FAQ H2. Preserve these structures. Narrow inherited factual ambiguities may be clarified after root adjudicates source evidence; record them in the release review instead of copying a demonstrably false sentence or changing EN silently.
