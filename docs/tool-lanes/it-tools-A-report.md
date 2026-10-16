# Italian tools — Lane A report

2026-10-16 · branch `gpt-it-a` · base `71915da1`.

## ① Files created / changed

New files (line counts):

| Tool | Files / lines |
|---|---|
| calculator | `app/it/calculator/dict.ts` 1,428 · `faq.ts` 72 · `page.tsx` 91 |
| hand-chart | `app/it/hand-chart/dict.ts` 91 · `faq.ts` 23 · `page.tsx` 76 |
| glossary | `app/it/glossary/dict.ts` 85 · `glossary-client.tsx` 7 · `page.tsx` 60 |

Shared changes against base, added/deleted lines: `components/intl-blog-post-client.tsx` +2/0; `components/side-rail.tsx` +8/−1; `lib/calculator-alternates.ts`, `lib/hand-chart-alternates.ts`, `lib/glossary-alternates.ts` each +3/−1; `lib/hub-i18n.ts` +14/−1; `lib/hub-routes.ts` +2/0; `scripts/generate-sitemap.mjs` +6/0. This report is the final additional file.

Only the three Lane A routes were added to hub routes and side rail. `it` already exists in `lib/intl.ts`; hub labels were missing and were added. The parity script imports `CALCULATOR_LOCALES`, so no script modification was needed. No other locale, shared tool component, post, WORKLOG or handoff was edited. The head owns integration and session closeout. Generated sitemap is excluded from commits.

Tool commits: `e33ab8f8` calculator · `13922b61` hand-chart · `85db3936` glossary. English messages, no trailers.

## ② Head terms and metadata

Lengths use JavaScript `.length`, matching project gates; titles below exclude the standard ` | HoldemMaster` suffix.

| Route | Title / characters | Description / characters | Main H1 |
|---|---|---|---|
| calculator | Calcolatore poker — probabilità, equity e pot odds **(50)** | Calcola probabilità, equity, pot odds e outs nel Texas Hold'em. Nove strumenti con ICM, SPR e push/fold, nel browser e senza registrazione. **(139)** | Calcolatore poker |
| hand-chart | Tabella delle mani iniziali — range preflop per posizione **(57)** | Esplora le 169 mani iniziali del Texas Hold'em per posizione, da UTG a SB. Tocca una posizione per evidenziare il suo range di apertura. **(136)** | Tabella delle mani iniziali |
| glossary | Termini del poker — glossario e gergo del Texas Hold'em **(55)** | Cerca e filtra i termini del poker: bui, equity, outs, pot odds, 3-bet, ICM, kicker e showdown. Un glossario poker chiaro per capire il gergo al tavolo. **(152)** | Termini del poker |

Head terms follow `docs/keyword-bank/it-tools.md` §4. English “poker odds calculator” appears in calculator FAQ1; “poker hand chart” in chart FAQ4. Calculator keeps the precedent's second H1 line, “Probabilità, equity, ICM e pot odds in un solo posto”; CTA title equals `hero.h1` verbatim.

## ③ Terms beyond the term table

| EN | Italian chosen | Evidence / status |
|---|---|---|
| Tier | Fascia | `lib/posts-it/texas-holdem-rules-for-beginners.ts:275`, existing “Fascia” table header |
| Bubble | bolla | [888 Italian glossary](https://poker.888casino.it/blog/glossario-del-poker), directly opened: “Bubble (Bolla)” |
| One-gapper | one-gapper | EN wording retained; same [888 glossary](https://poker.888casino.it/blog/glossario-del-poker) has “One-Gap”. Only spelling inflection, no new definition/data. |
| Set mining | set mining | EN retained; [PokerStrategy term entry](https://www.pokerstrategy.com/glossary/Set-mining_2130/) directly opened. This confirms the EN term, not Italian usage. |
| Pot control | pot control | [PokerStrategy Italian article](https://www.pokerstrategy.com/it/strategy/bss/1597/), directly opened, heading “Pot Control” |
| Re-raise | controrilancio | Natural compound of the established rilancio; [PokerStars lesson](https://www.pokerstars.it/poker/learn/lesson/gioco-preflop-con-tabella-delle-mani-iniziali/) is a source lead, but direct access returned 403; independent Italian editorial review accepted it. No claim of new primary-source confirmation. |

Other EN-only technical expressions absent from the table remain EN: coin flip, risk premium, committed, top pair top kicker/TPTK, save-and-chop. No new Italian equivalent was invented or promoted to the authority file. “Scala a incastro” explains the existing Gutshot entry; its numerical definition remains EN's. Starting-hand-chart naming follows the user's explicit keyword decision over the older unconfirmed table row.

## ④ Generic UI choices for unconfirmed rows

Editorial Italian, without claiming newly verified poker-site UI conventions:

| EN concept | Chosen UI |
|---|---|
| Reset inputs / reset message | Reimposta i dati / Dati … reimpostati |
| Clear all | Cancella tutto |
| All / show all | Tutti / Mostra tutto |
| Math / slang categories | Matematica / Gergo |
| Result / summary | Risultato ICM / Riepilogo delle fasce |

Other generic labels: Chiudi, Aggiungi, Rimuovi, Nessuna, Riduci, Aumenta. Copy/next/new-hand/close-dialog controls are not present in these three dictionaries. Unconfirmed poker labels Exact/exact enumeration, runout, Harrington's M, ICM value, push/fold and wheel remain English; the percentage-point unit remains `pp`. Number locale is `it-IT`, with default suffix `%` and no gap, exactly like de's applicable flags.

## ⑤ Missing-post links

No `/en/` fallback. Calculator quick-reference links for `holdem-probability`, `holdem-equity`, `holdem-outs`, `holdem-pot-odds`, `holdem-short-stack` were omitted; the final tournament-vs-cash link was replaced with the real `holdem-blind-meaning` guide. ICM deal's optional `holdem-icm` sentence/link was omitted. Required push/fold link targets `holdem-all-in-rules`. Related cards use all six real Italian posts, matching the gate's thin-corpus rule.

Chart has no Italian starting-hands-chart, when-to-fold, position-play or hand-rankings posts: related cards use the existing beginner/actions/game-order/blinds posts plus the calculator. The basis footnote has no missing chart-post link. The solver example is plain text: `/it/solver` does not exist yet. Glossary has no Italian hand-rankings or strategy posts and uses showdown/actions instead; no optional term-to-post links were added. All 18 resulting dictionary links resolve to actual Italian source files.

## ⑥ Gates and independent review

Final production build ran **once**, exit **0**. No dev/start server, push, merge, stash, checkout or reset was run.

```text
npm run check:calc-parity -- it
PARITY OK — it 불일치 0

build prebuild: check:calc-parity:all
  ok   it — 불일치 0
PARITY OK — 사본 17개 전수 불일치 0 (+ 원천 I항)

npm run check:seo-sync
✅ 🔴 0건 — 렌더 후 DOM이 서버 metadata와 갈리는 자리

npm run check:intl-links
✓ 다국어 내부 링크 검사 통과 (736편, 25개 언어) — 언어경로+대상실존+도구링크 확인

npm run check:number-format
✅ 파일 내부 혼용 0건 · ✅ 소수파 0건

npm run check:rangechart
합계: 🔴 0편 · ⚠ 미판정 0편 · 검사 11편

npm run check:meta
포스트 804편 검사 · 상한 160자
✅ 자수 초과 0편

npm run build
 ✓ Compiled successfully
├ ○ /it/calculator                                    273 B           202 kB
├ ○ /it/glossary                                      4.64 kB         150 kB
├ ○ /it/hand-chart                                    163 B           148 kB
sitemap.xml → 74 blog posts + 736 intl posts + 132 static URLs + 25 locale homes

postbuild: check:hreflang
hreflang 게이트 — 산출물 988개 중 858개 페이지가 hreflang 선언 · 세트 78종
✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과
postbuild: check:directives
✅ `:::` 마커 잔존 0 — 모든 디렉티브가 렌더됐다.
postbuild: check:meta-lang
✅ 🔴 0건 — 비한국어 페이지의 위 자리에 한국어가 없다.
```

`check:meta` exit 0, with existing corpus advisories. It scans posts rather than these tool descriptions; all six tool metadata lengths were therefore counted directly above. `check:number-format` and `check:rangechart` also have post-oriented coverage; they are supplemented by direct dictionary and browser checks.

`check:faq-schema` is **not a tool-page gate**: its source loads blog posts only. An attempted sandbox run printed cache EPERM warnings and loaded 0 posts, so its exit 0 is **not reported as a pass**. Actual generated tool JSON-LD was checked directly: calculator FAQPage 17 questions, chart FAQPage 5, glossary DefinedTermSet 46 definitions, with the visible render and schema drawing on the same arrays.

```text
npx tsc --noEmit -p . : exit 2, 759 pre-existing error lines
scripts/calc-dict-parity.ts(110,110): error TS2731: Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'.
scripts/seo-check.ts(9,23): error TS2307: Cannot find module '../src/data/posts.js' or its corresponding type declarations.
TypeScript errors in new pages or changed registries/chrome: 0

Source inspection:
strings=2000, Korean files=0, backticks inside string content=0
calculator FAQ: 17 answers, numeric tokens match EN
hand-chart FAQ: 5 answers, numeric tokens match EN
Glossary: 46 EN definitions, category/order and numeric tokens match
All 18 dictionary links resolve to existing Italian source files
```

Independent read-only review: **gpt-6-astra, ultra** (native editor + poker/math + SEO). Numeric/card/placeholder comparison passed; outs probabilities (20 rows × 3 exact columns) and nine pot-odds thresholds were recalculated. One copied corpus grammar error, `nel Hold'em`, was corrected locally to `nell'Hold'em`; the reviewer rechecked the changed line and returned OK. EN-first findings are below.

Screen inspection followed `screen-review`, adapted to the explicit server prohibition: built HTML/CSS/JS served through Playwright request interception, with account APIs stubbed and no real network/server. All three tools were exercised at **390×844** and **1440×900**: document overflow 0, button scroll-width clipping 0, page/console errors 0, missing built assets 0. Outs 9 → 19,1%, UTG selection, English alias Blinds → Bui and no-result search state worked. These measurements do not establish that all text fits every internal card; see the visual finding below. No live API/auth/deployment test is claimed.

Artifacts: `tmp/screen/it-a/report.json`, six `*-top.png`, six `*-bottom.png`, and calculator/glossary interaction captures. Top captures at both widths, mobile calculator interaction and mobile chart/glossary footer were opened visually.

## ⑦ Head requests / doubts

- **Shared calculator UI, observed:** `tmp/screen/it-a/calculator-390-interaction.png` shows 19,1% / 19,6% reaching beyond the small three-column result cards' inner width. Document overflow remains 0. Source is the shared OutsCalc `grid-cols-3` / `text-3xl` result layout, `components/calculator/calculator-tool.tsx` around lines 593–603. No shared component was edited.
- **Shared community chrome, observed:** `Event`, `Profile`, `Coming soon` remain English in common navigation/status chrome; `components/bottom-tab-bar.tsx` has no `it` label entry. Italian hub login/write/trending/language strings and the three tool navigation labels are present. Head should coordinate common chrome with Lane B.
- **EN-first, retained:** chart FAQ4 mixes 169-type percentage with 40–50% reference range (existing queue V-2); chart FAQ5's call-range/bluff ambiguity and calculator AA “win” versus equity wording (existing CA-4); glossary equity example omits tie-share qualification, and Check definition does not fully explain the BB option. These are EN wording, not new Italian numerical translations; handle in an EN-plus-locales round.
- Full-repository TypeScript errors remain outside this lane. The project build intentionally skips type validation via its existing configuration; that setting was not changed.
- Merge both lanes' `it` entries in hub routes/side rail and rebuild the generated sitemap at the head. No `/it/solver` route or unsupported post was linked.
