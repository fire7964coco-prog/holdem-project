# HI GTO media — live UI and asset review

Observed: **2026-09-15**. Source: [HoldemMaster solver, Hindi UI](https://solver.holdemmaster.com/?lang=hi). Opened all 13 precomputed spots in the live application, extracted each OOP/IP result and captured the OOP strategy screen. **This was a fresh UI capture, not a new solve.** It does not establish strategies at response nodes absent from the preview.

## Current UI wording

| Purpose | Exact live label |
|---|---|
| Study sidebar | अभ्यास स्पॉट ⚡ तुरंत |
| Open precomputed result | ⚡ परिणाम देखें |
| Customize from list / result | खुद गणना करें / इस स्पॉट की गणना खुद करें |
| Back to list | ← वापस |
| Result-side selector | खिलाड़ी: |
| SRP seats | OOP (BB (caller)) / IP (BTN (opener)) |
| 3-bet seats | OOP (BB (3-bettor)) / IP (BTN (caller)) |
| Blind battle seats | OOP (SB (opener)) / IP (BB (caller)) |
| Category panels | हैंड / Draws |
| Table labels | सारांश; हैंड / रणनीति / वज़न / EQ / EV (bb) / EQR |
| Aggregate row | सभी |
| Bar setting | बार की चौड़ाई:; सामान्यीकृत / मूल वज़न / पूरा |
| Display setting | दिखाएँ:; Action % / Action EV |
| Calculation step | ⑤ गणना करें |

The result explicitly says **यहाँ केवल flop की रणनीति है। Turn और river भी देखना चाहते हैं? →** before the custom-solve button. The current HI list also correctly explains that ⑦ has no post-check branch in the preview. Article ⑦ must still distinguish the published separate solve from the precomputed result.

Numbers use Latin digits and decimal points: **5.5bb, 97.5bb, 98.2%, 2.09**. The current UI already presents pot, stack, bet size and aggregate EV in **bb**. Actions retain **Check**, **Bet**, **combos**.

## Exact study titles and image inventory

Every key has two publication files: **`/images/gto-<key>-oop-hi.webp`** and **`/images/gto-<key>-ranges-hi.webp`**. Titles below are live app titles, independent of editorial article titles. Sizes are OOP / chart in KiB, not mobile transfer bytes.

| # | key | Actual app title | Board | KiB |
|---|---|---|---|---|
| ① | srp-dry-ace | सूखा A-high board | A♥7♦2♣ | 92.5 / 27.6 |
| ② | srp-dry-king | सूखा K-high board | K♠8♦3♣ | 91.5 / 28.9 |
| ③ | srp-broadway | जुड़ा हुआ Broadway board, two-tone | Q♠J♦T♠ | 97.7 / 32.2 |
| ④ | srp-middle-connected | जुड़ा हुआ middle board, two-tone | 9♥8♥7♣ | 103.4 / 32.3 |
| ⑤ | srp-monotone | Monotone board (एक ही suit) | Q♠9♠2♠ | 98.8 / 31.9 |
| ⑥ | srp-paired | Paired board | 6♣6♦3♥ | 91.8 / 25.4 |
| ⑦ | srp-low-rainbow | नीचा rainbow board | 6♠5♥2♦ | 93.4 / 30.3 |
| ⑧ | 3bp-ace-king | A-high board, 3-bettor को फ़ायदा | A♦K♠2♥ | 75.4 / 25.5 |
| ⑨ | 3bp-dynamic | Draws वाला two-tone board | Q♥T♥7♠ | 76.3 / 27.7 |
| ⑩ | 3bp-low | नीचा सूखा board | 8♦5♣2♠ | 72.5 / 26.9 |
| ⑪ | sb-king-mid | K-high board पर T | K♥T♦6♠ | 99.7 / 28.9 |
| ⑫ | sb-connected | जुड़ा हुआ low board, two-tone | 7♦6♦5♣ | 100.7 / 31.9 |
| ⑬ | sb-paired-ace | दो Ace वाला board | A♠A♥6♦ | 96.9 / 24.4 |

Live hand-class labels across both players: **Quads, Full House, Flush, Straight, Set/Trips, Two Pair, Overpair, Top Pair, Second Pair, कमज़ोर Pair, Underpair, Ace-High, King-High, बना हुआ हैंड नहीं**.

Draw labels: **Combo Draw, Flush Draw, OESD, Gutshot, Backdoor FD, Draw नहीं**. An individual spot shows only classes present in that range. **बना हुआ हैंड नहीं** is a separate classifier row, not every hand without a pair when Ace-High/King-High have separate rows. **Set/Trips** is the app's combined row; explanations must distinguish sets and trips on the actual board.

## Generation and validation

- Added HI live labels to `scripts/capture-solver-spots.mjs` and HI chart copy to `scripts/make-solver-range-charts.mjs`. The existing **`--lang=hi`** option is used; `--locale` is not the media scripts' option. The generic converter already supports HI and required no change.
- Chart copy: **Range की बनावट**, **HoldemMaster GTO सॉल्वर · rake शामिल नहीं**, **Equity**, **Equity realization (EQR)**. The EQR wording follows the existing HI solver landing. Classifier labels and values come directly from the HI capture. Long app titles use the existing two-line chart heading.
- Generated **26 final WebP files**, quality **82**, effort **6**. No other locale's assets were re-encoded.
- OOP captures preserve the actual screen's aspect ratio, **1200×849**. Range charts are **1200×675**. Capture device scale factor is 2; document zoom was not used. IP PNGs are supporting evidence, not illustrations of an IP action strategy.
- Opened **all 26 final WebP images at their source dimensions**. Checked all 13 boards and suits, OOP seat labels, complete matrices, action percentages and sizes, classifier labels, both chart players, EQ/EQR figures, long titles and Devanagari shaping. No clipping, overlapping text or missing chart labels was found.
- The key distinction is visible in the assets: ⑦/⑪/⑫ have one bet size; ⑧–⑩ show **33% / 66%**; ⑬ shows **33% / 75%**. ⑨ shows **98.4 / 0.7 / 0.8%** rather than a subtraction-derived check value.
- Charts retain **♠ holdemmaster.com** branding. OOP screenshots preserve the established real-app capture treatment without adding a fabricated UI element or a separate brand overlay.
- Compared **530 numeric display fields** with the preceding MS capture: action percentages/combos, hand/draw percentages, and every numeric aggregate column. **13/13 spots, 26/26 sides, zero mismatches**. Boards, player seats, classifier row counts and translated label correspondence also match. This checks displayed data, not a new solve or every individual combo row.
- Capture selftest passes all **10 supported locales**, including HI: action/category/aggregate extraction and refusal of incomplete results; empty IP action strategy remains valid. HI chart percentage selftest also passes.
- `npm run check:images`: **exit 0, no anomalies**. All new files are 1200px wide and below the 150KiB warning threshold. The converter's older 80KiB advisory is not a quality-reduction requirement; all outputs retain q82. Existing sub-750px assets belong to other posts.

## Evidence and scope

Local evidence: `.solver-captures/data-hi.json`, the 13 OOP and 13 IP PNGs, `tmp/hi-solver-ui-verbatim.json`, `tmp/hi-solver-result-ui.png`, and `tmp/hi-media-check.json`. The JSON check report records each asset's dimensions/bytes and every spot's title, board, players and aggregate rows. These evidence files are ignored local artifacts; the 26 final assets and this report are repository deliverables.

This media pass did not run a site build or measure optimized mobile transfer bytes. Full-size visual QA does not claim all matrix text is readable in a 390px image scaled to fit the page. The article render pass must verify enlargement behavior and retain key values in readable body text and tables.
