# MS GTO media — live UI and asset review

Observed: **2026-09-15**. Source: [HoldemMaster solver, Malay UI](https://solver.holdemmaster.com/?lang=ms). This pass opened all 13 precomputed spots in the live application, extracted each OOP/IP result and captured the OOP strategy screens. It did not rerun the 13 solves or validate uncomputed response nodes.

## Current UI wording

| Purpose | Exact live label |
|---|---|
| Study sidebar | Spot belajar ⚡ Segera |
| Open precomputed result | ⚡ Lihat hasil |
| Customize from list / result | Kira sendiri / Kira sendiri spot ini |
| Back to list | ← Kembali |
| Result-side selector | Pemain: |
| SRP seats | OOP (BB (caller)) / IP (BTN (opener)) |
| 3-bet seats | OOP (BB (3-bettor)) / IP (BTN (caller)) |
| Blind battle seats | OOP (SB (opener)) / IP (BB (caller)) |
| Category panels | Tangan / Draw |
| Table labels | Ringkasan; Tangan / Strategi / Wajaran / EQ / EV (bb) / EQR |
| Aggregate row | Semua |
| Bar setting | Lebar bar:; Dinormalkan / Mutlak / Penuh |
| Display setting | Paparan:; % aksi / EV aksi |
| Calculation step | ⑤ Kira |

The result explicitly says **Strategi flop sahaja. Mahu klik terus ke turn dan river? →** before **Kira sendiri spot ini**. The list's old note for ⑦ still suggests following the action bar to the opponent's response; that note is not a valid description of the precomputed viewer. Preserve the article's separate-solve disclosure and custom-solve path.

Numbers use decimal points: **5.5bb, 97.5bb, 98.2%, 2.09**. Actions retain **Check**, **Bet**, and **combo**. This differs from Indonesian decimal commas.

The live wording was also cross-checked against the adjacent local solver source, read without modifying it: `solver/src/components/PresetsPage.vue:291`, `PresetPreview.vue:274`, `ResultTable.vue:799`. These contain the MS result/custom buttons, flop-only message, Tangan, Wajaran and decimal-format comment. Local source inspection does not by itself prove the live deployed commit. The public raw-source URL attempted through the web tool did not resolve and is not counted as a successful source read.

## Exact study titles and image inventory

Every key identifies two publication files: **`/images/gto-<key>-oop-ms.webp`** and **`/images/gto-<key>-ranges-ms.webp`**. The app title is independent of the article's editorial title. Sizes below are OOP / chart in KiB, not mobile transfer bytes.

| # | key | Actual app title | Board | KiB |
|---|---|---|---|---|
| ① | srp-dry-ace | Board kering A-high | A♥7♦2♣ | 90.6 / 26.8 |
| ② | srp-dry-king | Board kering K-high | K♠8♦3♣ | 89.3 / 28.3 |
| ③ | srp-broadway | Board Broadway bersambung, two-tone | Q♠J♦T♠ | 95.6 / 31.5 |
| ④ | srp-middle-connected | Board tengah bersambung, two-tone | 9♥8♥7♣ | 101.1 / 31.7 |
| ⑤ | srp-monotone | Board monotone (satu suit) | Q♠9♠2♠ | 96.2 / 31.0 |
| ⑥ | srp-paired | Board paired | 6♣6♦3♥ | 89.8 / 24.8 |
| ⑦ | srp-low-rainbow | Board rendah rainbow | 6♠5♥2♦ | 91.5 / 29.6 |
| ⑧ | 3bp-ace-king | Board A-high, kelebihan 3-bettor | A♦K♠2♥ | 73.1 / 25.0 |
| ⑨ | 3bp-dynamic | Board dinamik two-tone | Q♥T♥7♠ | 73.8 / 26.8 |
| ⑩ | 3bp-low | Board rendah kering | 8♦5♣2♠ | 70.6 / 26.6 |
| ⑪ | sb-king-mid | Board K-high dengan T | K♥T♦6♠ | 97.9 / 28.4 |
| ⑫ | sb-connected | Board rendah bersambung, two-tone | 7♦6♦5♣ | 98.8 / 31.4 |
| ⑬ | sb-paired-ace | Board dengan dua Ace | A♠A♥6♦ | 95.0 / 24.0 |

Live hand-class labels across the 13 spots: **Quads, Full House, Flush, Straight, Set/Trips, Two Pair, Overpair, Top Pair, Second Pair, Pair lemah, Underpair, Ace-High, King-High, Tiada made hand**.

Draw labels: **Combo draw, Flush draw, OESD, Gutshot, Backdoor FD, Tiada draw**. Individual spots show only their available classes. **Tiada made hand** is its own row and is not all hands without a pair when separate Ace-High/King-High rows exist. **Set/Trips** is the app's combined row; article explanations must distinguish the two for the actual board.

## Generation and checks

- Added MS to `scripts/capture-solver-spots.mjs` and `scripts/make-solver-range-charts.mjs`. Existing locale wording and formatting branches are preserved. MS charts use the existing two-line heading for long titles and retain decimal points.
- Chart copy: **Komposisi range**, **Solver GTO HoldemMaster · tanpa rake**, **Equity**, **Realisasi equity**. Category labels and numbers come directly from the MS capture.
- Generated **26 final WebP files**, q82 / effort 6, using `node scripts/convert-solver-captures.mjs --lang=ms --quality=82`. Existing other-locale assets were not re-encoded.
- OOP screenshots retain the real capture's aspect ratio: **1200×849**. Charts are **1200×675**. IP captures remain evidence only and are not illustrations of postflop action strategy.
- Charts carry the existing **♠ holdemmaster.com** mark. OOP screenshots preserve the established actual-app capture treatment, without adding a fabricated app element or separate overlaid brand mark.
- Opened **all 26 final WebP images** at their source dimensions. All 13 boards, complete matrices, long titles, action percentages, classification labels, decimal points and chart branding are visible without clipping or overlap.
- Compared **530 numeric display fields** against the prior ID capture after decimal normalization: action percentages/combos, hand/draw percentages and all aggregate numeric columns. **13/13 spots, 26/26 sides, zero mismatches**; board and row counts also match. This is a displayed-data comparison, not new strategic solving or an audit of every individual combo row.
- Capture selftest passes all **nine supported locales** (ko, en, ja, es, pt, id, ms, zh, zh-hant): extraction of actions/categories/totals and rejection of missing result fields. It correctly permits no IP action strategy.
- Chart percentage selftest passes all nine locales, including decimal-comma preservation for PT/ID and decimal-point display for MS.
- `npm run check:images` **exit 0, no anomalies**. All new files are 1200px wide and below the 150KiB warning threshold. The 15 existing sub-750px files are unrelated to this batch.

## Limits and evidence

This media pass has not measured optimized mobile transfer bytes or claimed that every detailed matrix label is legible in a 390px fit-to-screen image. The article render pass must confirm enlargement behavior and retain key values in readable text/tables. No application source was changed, and no full site build was run by this media pass.

Local evidence: `.solver-captures/data-ms.json`, OOP/IP PNGs in `.solver-captures`, `tmp/ms-solver-ui-verbatim.json`, `tmp/ms-solver-result-ui.png`, `tmp/ms-media-check.json`. The last report includes each asset's exact dimensions/size, titles, boards and aggregate display values. These are ignored local evidence files; final assets and this document are reviewable repository changes.
