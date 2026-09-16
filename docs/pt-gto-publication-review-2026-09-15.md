# PT GTO example publication — review record

Status: complete. All 13 articles published, final proofreading/build passed, and production URLs/assets/schema/links/sitemap verified on 2026-09-15.

## Scope

13 new PT-BR explanations, PT localized screenshots/charts, landing article links, previously deferred backlinks in PT continuation-bet/position-play/3bet. Source contract and keyword research are linked from docs/pt-gto-series-translation-brief.md. User authorized full publication.

## Preparation verified

- Live PT UI refreshed on 2026-09-15. 13 OOP/IP spot pairs captured. 26 publication WebP assets at q82 and width 1200; actual screen aspect retained for OOP, charts 1200×675.
- Media agent compared 636 normalized displayed values against KO complete capture / available EN capture: equal. Live verbatim and exact method: docs/solver-app-verbatim-pt-2026-09-15.md.
- Root independently viewed dry-ace OOP and dynamic 3bet range chart: actual labels, comma decimals and complete board visible.
- GTO numeric gate now normalizes PT comma decimals for comparison only. Selftest 20/20; unchanged EN baseline 103 matches, zero errors.
- Keyword pack distinguishes observed official BR language from proposed editorial queries; no invented fresh search-volume/top10/PAA measurements.

## Narrow inherited source ambiguities adjudicated during writing

These are PT precision corrections, not new solver calculations or an EN-wide rewrite. Full quantitative tables and source limitations remain intact. Final wording still receives complete-series review.

| Article | Inherited EN ambiguity | Approved PT treatment | Evidence |
|---|---|---|---|
| a-high-board-cbet | Says BB lacks AK, AQ and AJ, while later caps BB at AJ | Name AK/AQ as absent; retain AJ in BB | Same source range paragraph plus live PT 13×13 matrix (AJ present, AK/AQ absent) |
| k-high-board-cbet | “same AQ in the big blind” implies AQ belongs to actual sample | Shared AJ comparison, without inventing a measured individual-hand EV | Common SRP range; aggregate seat metrics do not measure an absent hand |
| donk-bet-strategy | “more nuts” contradicts both ranges having all 16 JT combos; “every other row” ignores tied sets | More completed straights / distribution of strong hands; preserve JT equality and tied categories | Article straight table, JT16 each/T6s BB-only, class table |
| monotone-board-strategy | Bare A♠ described as locked best hand | A♠ plus another spade required for nut flush | Flop Q♠9♠2♠; five spades require two spade hole cards |
| monotone-board-strategy | Large bet “only” called by flushes; later prose has one-spade callers | State concentration of calls in flushes, not exclusivity | Same source’s one-spade calling examples |
| monotone-board-strategy | “strategy for both players” can imply measured IP action | Explicit computed BB first action, distinguish interpretive discussion | Precomputed root-only output |
| low-board-check-raise | “Nobody has a top end / nobody leads” despite sets and 3.2% lead | No top-end advantage / BB almost never leads | Both sets 1.8%, actual lead 3.2% |
| 3bet-pot-cbet | “no later street” despite three-street arithmetic | Less room to defer building pot at low SPR | Same source flop/turn/river calculations |
| 3bet-pot-cbet | Alt says BB holds every set combo, though BTN holds 22 | BB holds highest sets | Class/combination table |
| monotone-board-strategy | Single-spade caller is drawing at nothing against a made nut flush | Cannot complete a higher flush; other hand improvements are not excluded | Nut-flush ranking does not rule out future full houses or straight flushes |
| 3bet-pot-cbet | Every raise automatically commits the stack | A raise may commit the remaining chips | Commitment depends on raise size; root-only solve has no measured response node |
| low-board-check-raise | Historical exploitability 0.16 shown without internal unit next to 5.5bb pot | Explain 0.16 internal units = 0.016bb = approximately 0.29% of pot | Source contract / original run used pot55, stack975 in units of0.1bb |
| 3bet-pot-bet-sizing | Question asks near-single sizing but answer starts “no — it uses one” | Affirmative answer with near-single-size qualifier | 98.4% large, 0.7% small, 0.8% check (rounded) |
| 3bet-pot-bet-sizing | Backdoor examples restricted to runner-runner hearts | Two successive cards of required suit; keep 10/47×9/46 | On Q♥T♥7♠, suited spades can also make a backdoor flush |
| 3bet-pot-bet-sizing | Starting small waives the draw's cost; MDF is a ceiling | Small bet lowers immediate price without guaranteeing free cards; MDF is a reference under a zero-equity pure-bluff assumption | Later streets remain payable; MDF assumptions are conditional |
| blind-battle-connected-board | Connecting combinations survive only in BB | Some extra connecting combinations belong only to BB | SB still has 16 straights, 9 sets and 7 two-pair combos |
| blind-battle-connected-board | A-high can improve only to a pair | Restrict to A-high without immediate draws | A4/A8 in broad SB range have open-ended straight draws on 7-6-5 |
| ace-paired-board-strategy | No post-check node anywhere in series | No post-check node in this precomputed example | Article #7 explicitly uses a separate extended solve |
| ace-paired-board-strategy | 51.5% missed hands may be read as a fold frequency | Potential bluff targets; 51.5% is not a computed fold rate | Hand-class distribution and action frequencies are distinct measurements |
| ace-paired-board-strategy | 97bb is never at risk | A small flop bet is not immediate full-stack commitment | Raises and future streets are not shown by root-only output |
| ace-paired-board-strategy | KK/QQ cannot get called by worse | Limited value extraction, not zero worse calls | BB has 170 weaker combinations in the same source |
| ace-paired-board-strategy | Solver only decides a whole-range frequency | Per-hand action frequencies produce a weighted whole-range frequency | Actual solver's 13×13 action strategy and aggregate panel |
| ace-paired-board-strategy | Displayed action/combination sums do not close exactly | Explain rounding without adding a new percentage fingerprint | 0.5+79.6+19.8=99.9 and 2.7+400.4=403.1; existing source comments confirm rounding |
| Series CTA | History always stays in the browser | Without login, history stays in the browser | Current product supports optional account history synchronization; calculated custom spots stay local |

## Complete-series review and adjudication

- One consolidated language/SEO review by agent A, one strategy review by agent B, and one numerical/fact review by agent C. Writers reviewed the other batches independently; root independently read substantive A sections, verified all numerical table rows and adjudicated findings. These are AI reviews, not a claim of native human review.
- Strategy and numerical reviewers independently confirmed the paired-board blocker issue: on 6♣6♦3♥, holding a six already removes suited six combinations of that suit. K/Q suited kickers remove no additional opponent trips when K6o/Q6o are absent. Preserve the measured 7.8/7.9/9.0 frequencies and explicitly avoid assigning them to that unsupported cause.
- K-high: higher equity is not measured pot-win frequency; QJ versus AQ does not have two live cards. Corrected both explanations without changing the results.
- Broadway: corrected a translation that reversed who finds a raise difficult. A large bet with nut advantage makes raising difficult for the opponent.
- A-K-2: a zero check frequency does not establish a strictly lower check EV for every hand. The stack example uses two large bets and the remaining stack on the river, not three large bets.
- Q-T-7: underpair means a pocket pair below the queen; JJ is above the ten, so not every underpair is below both broadway cards. Likewise AJ's jack is not a second overcard to the queen; describe the gutshot's straight outs and possible pair improvements. The combined row now names K-high and Sem mão feita, avoiding overlap with the separate A-high row. No table values change.
- PT editorial/SEO: #7 description now explains the reader benefit of the separate check-raise solve; #9's solver heading explicitly identifies poker.
- One correction-only proofreading pass by the language reviewer approved all root edits, including the Q-T-7 A-high and underpair explanations. No further changes requested.
- C author precision: #10 chart caption says overpairs are more frequent, since 43.4/16.7 is about 2.60, not nearly double. #11 distinguishes the first majority-betting SRP example from occasional leads. #12 refers to three cited combo examples rather than an exclusive top three when a frequency tie exists.

## Machine verification

- Registered PT posts: 55, including all 13 new solver studies. Course order, 26 readnext cards, 93 inline PT article links and 13 landing links checked.
- Parsed EN/PT table correspondence: 637 table lines including headers/separators; numerical/card signatures match in all 13. Only localized decimal notation and the equivalent lexical label three-bet/3-bet are normalized.
- GTO numbers: 103 matches, zero unavailable values, zero errors and zero missing locale/article pairs. No hidden decimal-percentage range endpoints.
- Numerical reviewer independently checked 16 probability/pot-odds/MDF calculations, geometric bets, nut-flush averages, displayed EV/equity sums and rounding. Maximum displayed EQR recomputation difference: 0.257 percentage point, within the existing rounding caveat.
- GTO structure: 13/13. PT hard audit: 55/55, zero errors; this gate leaves 143 card paragraphs across the whole PT library unclassified and performs no GTO sibling-table comparison. The dedicated table audit and numerical review cover the new series beyond that gate.
- PT number-format and hygiene: zero errors. Image reuse: zero errors, two existing unrelated cross-cluster warnings. Image dimensions: 623 assets including 26 new PT assets.
- First full npm build: exit 0, including prebuild/postbuild; generated 70 KO blog + 538 international posts + 71 static URLs + 25 locale homes. Full log retained in tmp/pt-build.log. Production configuration skips TypeScript validation and linting; no claim of a successful full typecheck.
- Final full npm build after all proofreading corrections: exit 0 with the same complete prebuild/postbuild checks and post counts; log tmp/pt-build-final.log. Final numeric/structure/table/card checks also pass.

## Rendered verification

- All 13 pages returned 200 locally at mobile width 390, with expected H1/SEO title, PT-BR language, canonical and self hreflang. FAQPage graph nesting is parsed explicitly: 67 questions total, no raw emphasis/highlight markers.
- All 13 have one own hero and no document-level horizontal overflow. All 13 landing links are present. Root inspected mobile sizing hero, mobile check-raise explanation and desktop check-raise table; screenshots retained in tmp/pt-render.
- Repeated the render checks against the final production build after proofreading: all 13 passed, 67 FAQ entries, no overflow or duplicated own hero.

## Publication and live verification

- Content commit: b8b4269e. Publication sitemap commit: 82b93235. Both pushed together to main; Vercel reported success for [the production deployment](https://vercel.com/masters-projects-ca17ea56/holdem-project-milk/AmDcdr31xH7z55qRmVr4hUPNRwUb).
- Live verification completed at 2026-09-15 11:56:32 KST (02:56:32 UTC): 13/13 HTTP 200, correct PT-BR HTML language/SEO titles/canonicals, eight alternate entries each (seven languages plus default), 67 FAQ entries with clean markup, all 26 WebP assets HTTP 200 with correct media type.
- [PT solver landing](https://www.holdemmaster.com/pt/solver): 13 article links present. Three existing PT articles return 200 with all four restored backlinks. All 13 new article URLs are in the public sitemap. Report: tmp/pt-live-report.json.
- Changed URLs only: 13 new articles + three backlink articles + PT landing = 17 URLs submitted once to IndexNow, HTTP 200 accepted. Acceptance is not a claim that indexing is complete.
- No publication work remains. EN and other-language prose were not changed; the narrow inherited source corrections are documented above for future translations.
