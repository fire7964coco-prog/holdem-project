# ID GTO media — live UI and asset review

Observed: 2026-09-15. Source: [HoldemMaster solver, Indonesian UI](https://solver.holdemmaster.com/?lang=id). The current UI was read directly with Playwright, then all 13 precomputed spots were opened for OOP/IP extraction and capture. App explanation notes are not the strategy source.

## UI wording for article reproduction steps

| Purpose | Exact current label |
|---|---|
| Sidebar | Spot belajar ⚡ Instan |
| Open precomputed result | ⚡ Lihat hasil |
| Customize/solve from list | Hitung sendiri |
| Customize/solve from result | Hitung sendiri spot ini |
| Back to list | ← Kembali |
| Result-side selector | Pemain: |
| SRP seats | OOP (BB (caller)) / IP (BTN (opener)) |
| 3-bet pot seats | OOP (BB (3-bettor)) / IP (BTN (caller)) |
| Blind battle seats | OOP (SB (opener)) / IP (BB (caller)) |
| Category panels | Hand / Draw |
| Bottom table | Ringkasan; Hand / Strategi / Bobot / EQ / EV (bb) / EQR |
| Aggregate table row | Semua |
| Bar setting | Lebar batang:; Normalisasi / Absolut / Penuh |
| Action setting | Tampilan:; % aksi / EV aksi |
| Calculate step | ⑤ Hitung |

The result says: **Hanya strategi flop. Ingin lanjut ke turn dan river? →**. The precomputed screen has only the first flop decision. It does not expose the separate check-raise solve discussed in article ⑦. Do not repeat the list note that implies its action bar opens that response directly.

UI numbers use decimal commas: 5,5bb, 97,5bb, 98,2%, 2,09. Actions retain **Check**, **Bet**, and **combo**. Article prose uses **check** for the action and **cek** for checking information.

## Exact spot names and image keys

The generated title is kept as the actual app label, independent of the editorial article title.

| # | key | Current app title | Board |
|---|---|---|---|
| ① | srp-dry-ace | Board kering A-high | A♥7♦2♣ |
| ② | srp-dry-king | Board kering K-high | K♠8♦3♣ |
| ③ | srp-broadway | Board Broadway terhubung, two-tone | Q♠J♦T♠ |
| ④ | srp-middle-connected | Board tengah terhubung, two-tone | 9♥8♥7♣ |
| ⑤ | srp-monotone | Board monotone (satu suit) | Q♠9♠2♠ |
| ⑥ | srp-paired | Board paired | 6♣6♦3♥ |
| ⑦ | srp-low-rainbow | Board rendah rainbow | 6♠5♥2♦ |
| ⑧ | 3bp-ace-king | Board A-high, keunggulan 3-bettor | A♦K♠2♥ |
| ⑨ | 3bp-dynamic | Board dinamis two-tone | Q♥T♥7♠ |
| ⑩ | 3bp-low | Board rendah kering | 8♦5♣2♠ |
| ⑪ | sb-king-mid | Board K-high dengan T | K♥T♦6♠ |
| ⑫ | sb-connected | Board rendah terhubung, two-tone | 7♦6♦5♣ |
| ⑬ | sb-paired-ace | Board dengan dua As | A♠A♥6♦ |

## Chart wording

Fixed labels agreed with the Indonesian research agent: **Komposisi range**, **Solver GTO HoldemMaster · tanpa rake**, **Equity**, **Realisasi equity**. Hand and draw class labels are taken from the live app. Charts preserve numerical values and display decimal commas.

All observed hand classes, in conventional ranking order: **Quads**, **Full House**, **Flush**, **Straight**, **Set/Trips**, **Two Pair**, **Overpair**, **Top Pair**, **Second Pair**, **Pair lemah**, **Underpair**, **Ace-High**, **King-High**, **Belum jadi**.

All observed draw classes: **Combo draw**, **Flush draw**, **OESD**, **Gutshot**, **Backdoor FD**, **Tanpa draw**. These are label sets across 13 spots; individual spots show only their available rows. **Belum jadi** is its own app classification row and must not be equated with all hands without a pair when Ace-High/King-High rows are separate. **Set/Trips** is a combined UI row; explain set versus trips correctly for each board.

## Assets and verification

All 26 publication files now exist:

- Hero: `/images/gto-<key>-oop-id.webp` — 1200×849, actual captured aspect ratio retained.
- Body: `/images/gto-<key>-ranges-id.webp` — 1200×675.
- All use WebP q82 / effort 6, explicitly selected with `node scripts/convert-solver-captures.mjs --lang=id --quality=82`.
- IP captures are evidence only; they are not used as postflop action illustrations.
- All 13 spots / 26 sides passed mandatory nonempty-field checks. 530 numeric values (action percentages/combos, hand/draw percentages, and aggregate table values) match the PT capture after decimal normalization. Boards and row counts also match. This check does not independently validate each individual combo strategy row or the separate ⑦ solve.
- Current disk sizes: OOP 71.3–101.1KiB; charts 23.7–31.5KiB. Every file is wider than 750px and below the 150KiB image warning threshold. These are disk sizes, not measured mobile transfer.
- All 26 final WebP files were opened and visually reviewed at source resolution: complete boards, long spot titles, row labels, decimal commas, all 13×13 matrices, and chart branding are visible without clipping or overlap.
- Chart percentage selftest passed for all eight supported locales: ko, en, ja, es, pt, id, zh, zh-hant. ID uses decimal commas and the two-line chart heading; the existing locale branches retain their previous behavior.
- `npm run check:images` passed with no asset anomalies. Its 15 existing sub-750px files are unrelated to this ID set.
- At 390px article width, detailed matrix cells and full-chart values remain small; source resolution is not a claim of fit-to-screen detail legibility. The final article review must confirm mobile image enlargement and retain the key values as readable text/tables. Mobile transfer bytes have not been measured by this media pass.
- Temporary evidence: `.solver-captures/data-id.json`, `tmp/id-solver-ui-verbatim.json`, `tmp/id-media-check.json`.

## Captured values and per-image inventory

Each key below identifies both `/images/gto-<key>-oop-id.webp` and `/images/gto-<key>-ranges-id.webp`. Frequencies follow the actual action order: **large bet / small bet / check**, or **sole bet / check** for ⑦⑪⑫. Each seat's four aggregate entries are **combo weight / equity / EV in bb / EQR**. These are display values, so rounded totals can differ slightly from arithmetic sums. Sizes are **OOP / chart, in KiB**.

| key | OOP action percentages | OOP aggregate | IP aggregate | KiB |
|---|---|---|---|---|
| srp-dry-ace | 0,9% / 1,0% / 98,2% | 464,0 / 45,1% / 2,09 / 84,0% | 463,0 / 54,9% / 3,41 / 113,1% | 90.5 / 26.7 |
| srp-dry-king | 0,1% / 0,1% / 99,8% | 474,0 / 46,3% / 2,06 / 80,7% | 480,0 / 53,7% / 3,44 / 116,7% | 89.2 / 28.1 |
| srp-broadway | 0,0% / 0,1% / 99,9% | 453,0 / 46,7% / 2,00 / 77,9% | 458,0 / 53,3% / 3,50 / 119,4% | 95.4 / 31.3 |
| srp-middle-connected | 6,9% / 16,8% / 76,2% | 462,0 / 48,5% / 2,48 / 93,2% | 472,0 / 51,5% / 3,02 / 106,4% | 101.1 / 31.5 |
| srp-monotone | 3,2% / 8,0% / 88,8% | 468,0 / 47,7% / 2,37 / 90,4% | 474,0 / 52,3% / 3,13 / 108,8% | 96.2 / 30.9 |
| srp-paired | 2,0% / 1,0% / 97,0% | 486,0 / 47,2% / 2,17 / 83,7% | 502,0 / 52,8% / 3,33 / 114,5% | 89.7 / 24.7 |
| srp-low-rainbow | 3,2% / 96,8% | 487,0 / 48,3% / 2,24 / 84,3% | 503,0 / 51,7% / 3,26 / 114,7% | 91.3 / 29.5 |
| 3bp-ace-king | 42,2% / 57,8% / 0,0% | 63,00 / 68,9% / 16,99 / 109,6% | 130,0 / 31,1% / 5,51 / 78,7% | 73.6 / 25.0 |
| 3bp-dynamic | 98,4% / 0,7% / 0,8% | 73,00 / 58,3% / 15,46 / 117,8% | 133,0 / 41,7% / 7,04 / 75,1% | 74.2 / 26.7 |
| 3bp-low | 97,8% / 0,3% / 2,0% | 83,00 / 58,6% / 14,09 / 106,9% | 144,0 / 41,4% / 8,41 / 90,3% | 71.3 / 26.4 |
| sb-king-mid | 67,4% / 32,6% | 538,0 / 55,3% / 3,42 / 103,1% | 525,0 / 44,7% / 2,58 / 96,1% | 97.4 / 28.2 |
| sb-connected | 9,6% / 90,4% | 572,0 / 49,6% / 2,54 / 85,3% | 534,0 / 50,4% / 3,46 / 114,4% | 98.3 / 31.2 |
| sb-paired-ace | 0,5% / 79,6% / 19,8% | 503,0 / 56,2% / 3,51 / 104,1% | 505,0 / 43,8% / 2,49 / 94,8% | 95.0 / 23.7 |

## Trainer feedback unit — additional live check, 2026-09-15

Root opened a fresh, unsigned-in browser at the ID app, selected the actual **Trainer GTO** sidebar button and answered one practice hand. The result explicitly displayed **Kerugian EV 0,000bb**, with each action's mixed frequency and EV. The summary also displayed **Total kerugian EV** and **Rerata kerugian EV** in **bb**.

The result value and grading threshold are different quantities: the loss is displayed in bb, while grading is based on loss relative to the pot. Therefore the source CTA's statement that the Trainer shows EV loss in bb is correct. Do not remove the unit because the grading thresholds use percentages. Use **Trainer GTO** when quoting the actual button; a translated product name in prose is not necessarily a button quote.

Evidence: `tmp/id-trainer-screen.json`, `tmp/id-trainer-feedback.json` and corresponding screenshots. The browser was not signed in; its one practice answer remained in that fresh local browser. No new solver calculation or strategy value from this random practice hand was added to the articles.
