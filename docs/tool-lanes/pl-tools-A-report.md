# Polish tools — Lane A report

Execution `pl-tools-A-20261016` · worktree `C:/Users/하봄/Downloads/Holdem-gpt-pl-a` · branch `gpt-pl-a` · base `c88ccd06`.

2026-10-16 KST. First recorded clock: 21:22:45; deadline: 22:20. Scope: exactly calculator, hand-chart, glossary and their allowed registrations/chrome. Account usage/limit unavailable; no estimate. One authorized read-only Astra child invocation; no agents delegated, server started, deployment, push, merge, stash, checkout or reset. Source work and required build/gates are complete; screen verification is **not done**. This report is the last commit. WORKLOG, handoff and mailbox remain the head's responsibility and were not edited.

## ① Files / lines

New files, final line counts:

| Tool | Files / lines |
|---|---|
| calculator | `app/pl/calculator/dict.ts` 1,428 · `faq.ts` 20 · `page.tsx` 91 |
| hand-chart | `app/pl/hand-chart/dict.ts` 57 · `faq.ts` 8 · `page.tsx` 76 |
| glossary | `app/pl/glossary/dict.ts` 74 · `glossary-client.tsx` 7 · `page.tsx` 60 |

Shared changes against base: `components/bottom-tab-bar.tsx` +1/0; `components/intl-blog-post-client.tsx` +1/0; `components/side-rail.tsx` +6/−1; each of `lib/calculator-alternates.ts`, `lib/hand-chart-alternates.ts`, `lib/glossary-alternates.ts` +2/−1; `lib/hub-i18n.ts` +13/−1; `lib/hub-routes.ts` +1/0; `scripts/generate-sitemap.mjs` +3/0.

Only Lane A's three routes appear in the new hub/side-rail entries. No shared tool component, other locale, post or tournament data row changed. The existing parity script discovers pl through CALCULATOR_LOCALES. The glossary translates all 46 EN definitions, preserving array order and category. Italian page/schema structure is reused; wording comes from EN and the Polish authority. Chart optional type/combo notes follow the Italian structure, whose inherited numeric basis is also present in `app/hand-chart/hand-chart-client.tsx`.

Tool commits, English with no trailers:

- `7ba94fc4` Add Polish poker calculator
- `8e98c424` Add Polish starting hand chart
- `ee5f5a33` Add Polish poker glossary

`public/sitemap.xml` and `tsconfig.tsbuildinfo` were restored from tracked HEAD bytes and excluded from all commits. No content diff remains. The first restore attempt was blocked by sandbox child-process access; the following attempt exposed Node's default output-buffer limit on the large sitemap, resolved with a larger buffer. No generated-file content was committed.

Final report commit's first auto-review request was rejected on the assumption that the sitemap was still staged. Read-only verification showed an empty staged-file list and identical HEAD/index blobs: sitemap `9295673418ef195f91997597daa35ad1427546ed`, tsbuildinfo `be64f2a36056f95272a4e31ffdd21dacd14716b3`. Only this report was subsequently staged.

## ② Head terms + metadata lengths

Lengths are JavaScript string lengths; the title column **includes** ` | HoldemMaster`.

| Route | Full title | Length | H1 |
|---|---|---:|---|
| calculator | Kalkulator pokerowy — poker odds calculator \| HoldemMaster | 58 | Kalkulator pokerowy |
| hand-chart | Ręce startowe poker — tabela preflop \| HoldemMaster | 51 | Ręce startowe poker |
| glossary | Słownik pokerowy — terminy pokerowe A–Z \| HoldemMaster | 54 | Słownik pokerowy |

Descriptions:

| Route | Description | Length |
|---|---|---:|
| calculator | Poker kalkulator: oblicz equity, pot odds i outy w Texas Hold'em. Dziewięć narzędzi z ICM, SPR i push/fold, w przeglądarce bez rejestracji. | 139 |
| hand-chart | Poznaj 169 rąk startowych w Texas Hold'em według pozycji, od UTG do SB. Wybierz pozycję, aby podświetlić jej zakres otwarcia w tabeli. | 134 |
| glossary | Szukaj i filtruj terminy pokerowe: blindy, equity, outy, pot odds, 3-bet, ICM, kicker i showdown. Poznaj pojęcia i slang przy stole Texas Hold'em. | 146 |

Head terms follow `docs/keyword-bank/pl-tools.md` §4. Calculator description includes poker kalkulator; FAQ heading includes kalkulator szans pokerowych. Chart FAQ includes poker hand chart; keywords include range poker and preflop chart. Calculator CTA and rail label match its H1. No forbidden head term was used. OG locale is pl_PL; built HTML is lang=pl.

## ③ Terms beyond the table

The existing Polish posts were grepped first. No new Polish replacement was invented for an unconfirmed poker label.

| EN | Choice | Evidence / status |
|---|---|---|
| Nash equilibrium / Nash chart | Równowaga Nasha / Tabela Nasha | Directly opened [PokerStrategy PL: Równowaga Nasha](https://polska.pokerstrategy.com/strategy/bss/rownowaga-nasha-czestotliwosc-blefowania-sprawdzania/) and [Zakresy Nasha](https://polska.pokerstrategy.com/strategy/sit-and-go/gra-push-fold-zasiegi-nasha/). The latter has “Tabela z zakresami Nasha”; the shorter UI label is editorial. Only terminology adopted, no source figures or strategy. |
| Re-raise | re-raise | Existing `lib/posts-pl/holdem-betting-actions.ts:142`; [existing Polish guide](https://www.holdemmaster.com/pl/blog/holdem-betting-actions). EN compound retained. |
| Cash game | cash games | Existing `lib/posts-pl/texas-holdem-rules-for-beginners.ts:121`; [existing Polish guide](https://www.holdemmaster.com/pl/blog/texas-holdem-rules-for-beginners). English plural in FAQ, no new Polish term. |
| Mucking | mucking | Existing `lib/posts-pl/holdem-showdown-rules.ts:5`; [existing Polish guide](https://www.holdemmaster.com/pl/blog/holdem-showdown-rules). |

Other extra technical expressions retain EN: Tier, bubble, coin flip, risk premium, committed, top pair top kicker/TPTK, save-and-chop, set mining, one-gapper, pot control, live hand, open-shove, open-limp, chip leader, short stack, calling station, downswings, straight draw, monster and connector. No claim that these have newly verified Polish replacements. No change to the authority file was made within this restricted lane.

## ④ Generic UI choices for unconfirmed rows

Editorial Polish allowed by the brief; these are not claims of verified poker-site UI conventions:

| Concept | Chosen UI |
|---|---|
| Close / add / remove / none | Zamknij / Dodaj / Usuń / Brak |
| All / show all / clear all | Wszystkie / Pokaż wszystko / Wyczyść wszystko |
| Math / slang categories | Matematyka / Slang |
| Legend | Legenda kolorów |
| Reset inputs / message | Resetuj dane / Zresetowano dane |
| Result / summary | Wynik ICM / Podsumowanie poziomów rąk |
| Decrease / increase | Zmniejsz / Zwiększ |
| Shared navigation | Poradniki / Czat / Wydarzenie / Profil / Napisz post |

Unconfirmed poker labels remain as listed: Amount to call, Custom input, Exact/exact enumeration, Monte Carlo, runout, Hand vs hand, Defending range, ICM value, Paid places, Prizes and the Premium/Strong/Playable/Marginal/Weak and Great/Good/Fair/Poor/Very poor categories. The percentage-point unit remains pp; the explicit unconfirmed full unit is retained as percentage points where needed. Rank names distinguish Kareta from Poker (straight flush) and Poker królewski. Card codes and $ are unchanged; static thousands use spaces, decimals commas, and % has no gap.

## ⑤ Links omitted

No /en/ fallback and no /pl/solver link. Every one of 21 dictionary path/slug references resolves to an existing source file; this count includes the dictionaries' own SEO paths.

Calculator omits optional quick-reference links to holdem-probability, holdem-equity, holdem-outs, holdem-pot-odds and holdem-short-stack. The final table links to the real holdem-blind-meaning guide. Optional ICM deal link/sentence is omitted; required push/fold link uses holdem-all-in-rules. Related cards use all six real Polish posts.

Chart replaces absent starting-hands-chart, when-to-fold, position-play and hand-rankings guides with beginner/actions/game-order/blinds guides and the calculator. Basis notes contain no absent chart-post or solver link. Glossary replaces absent hand-rankings/strategy cards with showdown/actions. No optional term-to-post links were added.

## ⑥ Gates + Astra §13 check

Requested final build ran **once**, exit **0**. Actual output excerpts:

```text
npm run check:calc-parity -- pl
PARITY OK — pl 불일치 0

npm run check:seo-sync
✅ 🔴 0건 — 렌더 후 DOM이 서버 metadata와 갈리는 자리

npm run check:intl-links
✓ 다국어 내부 링크 검사 통과 (736편, 25개 언어) — 언어경로+대상실존+도구링크 확인

npm run check:number-format
✅ 파일 내부 혼용 0건 · ✅ 소수파 0건

npm run build
PARITY OK — 사본 18개 전수 불일치 0 (+ 원천 I항)
sitemap.xml → 74 blog posts + 736 intl posts + 136 static URLs + 25 locale homes
✓ Compiled successfully
✓ Generating static pages (999/999)
├ ○ /pl/calculator  276 B   202 kB
├ ○ /pl/glossary    4.66 kB 150 kB
├ ○ /pl/hand-chart  164 B   148 kB
✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과
HTML 산출물 993개 스캔
✅ ::: 마커 잔존 0 — 모든 디렉티브가 렌더됐다.
✅ 🔴 0건 — 비한국어 페이지의 위 자리에 한국어가 없다.
BUILD_EXIT=0
```

Initial standalone parity attempt hit sandbox esbuild spawn EPERM; the authorized rerun passed. Other gates and the build used child-process access. No gate thresholds or repository configuration were changed. Number-format/meta gates have post-oriented coverage, so they are supplemented by direct tool checks. Full-repository tsc was not separately run; the existing build configuration skips type validation.

Direct local checks: 1,976 new-page string nodes; Korean characters and backticks inside string content 0. Calculator FAQ 17 and glossary 46 numeric-token comparisons match EN. Glossary categories/order match EN. Card-suit tokens and arithmetic/comparison glyphs match exactly at corresponding paths. Built title, og:locale and HTML lang checks pass for all three pages. Built JSON-LD contains calculator FAQPage 17, chart FAQPage 5, glossary DefinedTermSet 46 entries; visible text and schema use the same arrays.

One invocation: `codex exec -m gpt-6-astra -c model_reasoning_effort=medium -s read-only`, scoped to 80 paired numeric/card/formula/direction sentences, plus the optional chart-note invariants. No native-speaker adversarial lens or full independent review was run. Output: “PASS — no meaning-altering mismatches within the requested scope.” It confirmed 169 / 1 326, AA=1/6, AKo=1/12 and 618/1 326≈46,6%; 92/169 uses a different denominator. No requested fixes.

**Astra limitation:** the PowerShell pipe replaced some non-ASCII characters with `?`; Astra explicitly qualified symbol comparison as supplied. Do not treat this as independent verification of all original glyphs/diacritics. Exact card/formula glyphs were instead compared locally with EN (0 mismatches). No second model call was made, honoring the one-check limit. Child output reported 19,659 tokens; this is not an account-usage estimate. UTF-8 prompt and result remain in `tmp/pl-astra-prompt.txt`, `tmp/pl-astra-result.txt`, with the actual degraded-input transcript in `tmp/pl-astra-run.log`.

Screen verification: **not done**. The [screen-review skill](../../.claude/skills/screen-review/SKILL.md) was read and applied to an attempted built-output Playwright interception harness with external APIs stubbed and no server. First attempt showed a client exception; one retry on a secure intercepted origin yielded an empty DOM and timed out before tool interaction. This is a harness failure, not evidence establishing a Polish product defect or a visual pass. Retry limit reached; stopped. Browser was closed in finally. Diagnostic captures/report are under `tmp/screen/pl-tools-a/`; they are not valid 390/1440 product QA. No dev/start server was launched or left running.

Gate logs: `tmp/pl-{seo-sync,intl-links,number-format,build}.log`. Local-check output: `tmp/pl-custom-check.json`. Temporary implementation/check scripts were removed at closeout; logs and diagnostic captures remain ignored.

## ⑦ Head requests / doubts

- Merge Lane B's own two pl routes into hub-routes and side-rail without losing these three. Reuse the single pl hub/chrome labels added here. Regenerate sitemap after integration; no generated sitemap is in these commits.
- Complete real 390/1440 screenshot and interaction checks. The Italian report's shared OutsCalc three-column result-card overflow is a known follow-up, **not reproduced successfully in this lane**. Shared tool components were outside scope.
- Shared number formatter: native pl-PL renders four-digit integers without a separator (`1326`, `1035`) but larger values with spaces (`60 000`); source prose explicitly uses `1 326`. `components/calculator/calculator-tool.tsx` uses toLocaleString without a grouping override. If every four-digit runtime integer must display a separator, the head needs a shared-component change; no false claim that the current formatter produces `1 326` is made.
- EN-first wording retained: chart FAQ4 still mixes the 169-type percentage with a 40–50% reference range; FAQ5's call-range/bluff ambiguity; calculator AA win/equity wording; glossary equity example without tie-share qualification and Check without the full BB option. The MA-598 overcard wording is preserved as frequency (“często”), not universal failure. No source meaning was silently corrected in Polish.
- Astra symbol/diacritic limitation above should travel with the audit-desk handoff. Full native-language judgment remains the audit desk's work. No deployment or audit approval is claimed.
