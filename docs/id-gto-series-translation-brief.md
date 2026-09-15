# ID GTO example explanations — common writing brief

Prepared 2026-09-15 for the user's request to publish high-quality Indonesian explanations of the existing solver examples. One complete release, in writing batches ①–④ / ⑤–⑧ / ⑨–⑬. Root owns registration, shared links, verification and publication; each writer owns only the assigned new post files.

## Read before writing

1. This brief, `AGENTS.md`, `.cursor/rules/posting.mdc`, and `REVIEW-PROTOCOL.md`.
2. Your assigned **current** `lib/posts-en/<slug>.ts` in full. EN is the translation source; preserve its complete explanations and structure.
3. `docs/id-gto-source-contract.md` and `docs/pt-gto-publication-review-2026-09-15.md`: apply the adjudicated narrow source corrections. PT provides correction evidence, not Indonesian wording. The fixed numerical source is `docs/gto-solver-series-spec.md` §4-B and §4-B-2.
4. `docs/id-gto-language-research.md`: fixed article titles, search intent and metadata. `docs/keyword-bank/id-posting-reference.md` §5/§5-A/§8 remains the locale reference. Old translation-terms instructions for cek, menit, or overtranslated poker nouns do not supersede it.
5. `docs/id-gto-media-review.md`: current app labels, titles, category names and image keys. The app's explanatory notes are **not** a strategy source.

GTO-specific rules take precedence over generic copy templates: no invented personal experience, no new strategic thesis, no deletion of source arguments, no generic rewrite, no partial release. This series is reproducible analysis of actual solver output.

## Metadata and structure

- File: `lib/posts-id/<unchanged-slug>.ts`; import `Post` from `../posts`, export `POST` and default `POST`.
- Use the fixed **title** from the research document (also the title of incoming readnext cards). Title ≤40 characters; seoTitle ≤60; desc 60–160. Hooks must identify the board or seat and describe a range frequency as a range frequency.
- tldr is plain text. Preserve the source's numerical information, scope and limitations without repeating the introductory hook word for word.
- category: `strategy`; date/updated: `2026-09-15`; masterUpdated: exact EN updated for the slug. Root rechecks publication date at release. readTime: `N mnt`; same emoji as EN; keepImagesInBody: true.
- Hero: `/images/gto-<key>-oop-id.webp`. Body chart: `/images/gto-<key>-ranges-id.webp`. Keys come from the media document. The international renderer draws the hero, so **do not insert it into content**. Translate imageAlt and chart caption naturally and accurately.
- Preserve EN H2 count/order, substantive subsections, all numerical tables and row order, directive types/order, highlight count, body image count, link slots, and FAQ count. Localize headings/questions without removing their corresponding facts or answers.
- EN ⑤ has no generic conditions H2; ⑩–⑬ have FAQ questions without an FAQ H2. Preserve these shapes. Do not insert empty sections or extra headings to fit a template.
- Keep source measurement dates in provenance sentences and conditions tables. Publication in September does not make historical measurements September measurements. Fresh UI parity is separately recorded by root.
- Short file comment: provenance and applicable correction contract only. Do not copy EN's historical comment archive or unperformed verification claims.
- Close content with `.trim()`. Exactly the opening/closing content backticks; no other literal backticks in comments/prose. No Markdown in tldr, nested bold, or untranslated English paragraphs.

## Indonesian prose conventions

Write for a serious Indonesian learner: clear, warm **Anda** prose, short paragraphs, one point per paragraph. Avoid Malay grammar and pronouns, literal English metaphors, or inflated claims. Prefer tidak/hanya/untuk over tak/cuma/guna. Preserve established English poker terminology and explain it where the source does.

| Concept or position | Fixed convention |
|---|---|
| range, equity, board, hand, solver, spot | These established terms; do not use rentang/ekuitas/papan/meja/tangan/pemecah as substitutes for these poker meanings |
| check / verify information | **check** for the action; **cek/periksa** for checking information |
| bet, call, raise, fold, all-in | Preserve action terms; bertaruh is natural in explanatory sentences. Use a consistent form within an argument. |
| c-bet, 3-bet, check-raise, donk bet | Fixed spellings; explain caller lead versus raiser c-bet when the source does |
| pot / effective stack | pot / stack efektif |
| sizing | ukuran taruhan or sizing in prose; Bet size for UI/table labels |
| equity / EV / EQR | equity / expected value (EV), explained as rata-rata hasil / realisasi equity (EQR) |
| range advantage / nut advantage | range advantage / nut advantage, explained as keunggulan range / keunggulan pada hand terkuat |
| OOP / IP | out of position (OOP), beraksi lebih dulu / in position (IP), beraksi terakhir |
| BTN / BB / SB | button (BTN) / big blind (BB) / small blind (SB), introduced per article |
| set / trips | set uses a pocket pair; trips uses the paired board. The UI row **Set/Trips** combines them; retain board-specific clarification. |
| ace in explanatory prose | As; card notation A and app names A-high/Ace-High remain verbatim |
| MDF | minimum defense frequency (MDF), explained as frekuensi bertahan minimum |
| SPR | stack-to-pot ratio (SPR), explained as rasio stack terhadap pot |
| combos / percentage points | combo / poin persentase |
| quick-answer heading | Jawaban singkat |
| readnext label | Lanjut membaca |
| FAQ H2, where EN has one | Pertanyaan umum |
| conditions-table first column | Kondisi |
| condition row labels | Posisi; Aksi preflop; Range; Flop; Pot awal; Stack efektif; Pot · stack; Bet size; Rake; Tanggal pengamatan — use only the source's actual rows; never split a combined row |
| metric-table first column | Metrik |
| action-table columns | Aksi pertama BB/SB; Frekuensi; Combo — identify later nodes differently in ⑦ |
| hand/seat columns | Hand; BB (OOP); BTN (IP); SB (OOP); BB (IP), according to the actual matchup |
| stripe labels | Spot; Flop; Pot · stack; Hasil, only where EN has the corresponding fields |

### Numbers, cards and UI

- Indonesian prose **and current UI** use decimal commas: 5,5bb; 97,5bb; 45,1%; 2,09. Thousands use periods: 1.326. Preserve values, precision, inequalities, suits and hand shorthand exactly.
- Keep EN/app card notation **T**, including Q♠J♦T♠ and TT/T9s. The old July brief's blanket T prohibition does not apply to literal solver cards.
- Percentage ranges must retain both % signs where present: 73,4%–75,2%. Do not turn a percentage-point gap into a relative percent change.
- All hand/draw table labels that reproduce the app use the exact ID UI labels in the media document. **Belum jadi** excludes separately listed Ace-High/King-High categories; it is not an umbrella for every unpaired hand.
- Reproduction path: **Spot belajar → [exact ID spot name] → ⚡ Lihat hasil**. The result-side button is **Hitung sendiri spot ini**; the list button is **Hitung sendiri**. Do not invent turn/river nodes available in the precomputed view.
- Landing links: `/id/solver`. A direct app link requires `?lang=id`; preserve the source's link slots rather than adding extra links to every navigation phrase.
- Trainer is the product term; latihan/berlatih describes practice. A persona is an AI review perspective, not proof that a human Indonesian editor reviewed the article.

## Strategic and numerical contract

- Keep the correct seat, action, denominator and solve next to each number. The IP panel provides range/equity metrics, not an IP action strategy.
- Preserve every relevant caveat: first flop decision only, later response not calculated, interpretation versus measured result, no rake, assumed ranges/stacks/tree, and rounding.
- Root action figures and ⑦'s **separate follow-up solve** are different datasets. Its 3,2% root lead, separate 2,0% lead, BTN response and BB check-raise denominator must remain distinct. Preserve the corrected explanation of historical exploitability units.
- ⑨'s 98,4% is the large-size frequency, not total betting frequency. Do not derive rounded check frequency by subtracting other rounded display values.
- Equity accounts for split pots; it is not simply the frequency of outright wins. EV, EQR, fold equity and raw equity are different quantities. Higher EQR alone does not establish higher absolute EV or a range advantage.
- A displayed 0% action frequency does not prove the action loses EV with every individual hand. Preserve the source contract's narrower statement.
- No new personal stories or universal poker advice. Conditional exploit suggestions retain their conditions and cannot be presented as calculated solver output.
- Apply all adjudicated PT source corrections, including BB's AJ holdings, completed straights versus nuts, suited 6x blockers, and Q-T-7 hand classification. Any new suspected source defect needs exact evidence and root adjudication before changing the argument.

## Links and batch checks

- `/en/blog/<slug>` becomes `/id/blog/<same-slug>` when the target is registered ID or among the new series. Existing ID cards use the target's actual current title. Series cards use the research document's fixed titles. Root reconciles all cards after writing.
- Translate EN-specific gto image filenames in thumbnails and cards as well as main metadata; shared language-neutral images stay unchanged.
- Preserve the hub/previous/next design; do not add the whole series list to every article. Root connects landing and existing article backlinks.
- Each writer runs `node tmp/id-series-audit.mjs --from=N --to=N` for their range, plus `node scripts/check-gto-numbers.mjs --locale=id` and `node scripts/check-gto-structure.mjs --locale=id`. If other batches are absent, report actual own coverage instead of claiming complete-series success. Do not edit another writer's files.
- Root has added ID decimal-comma support and ID structure labels to the gates; do not change correct prose to satisfy an old assumption.
- Full-series review after all batches: Indonesian language, SEO/readability, strategy and numerical fidelity as separate lenses. Correct only evidence-backed findings; review the correction diff once afterward. No defect quota; give confidence, exact passage and source evidence. Distinguish inherited source issues from translation errors.

The current user chose Astra/Codex for this work. Existing Claude-specific model assignments do not require switching products or stopping the authorized task. Use separate agents/lenses and record the actual review method without claiming an unavailable model or human review.
