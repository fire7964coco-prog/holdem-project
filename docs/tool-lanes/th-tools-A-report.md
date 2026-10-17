# Thai tools — Lane A report

Execution `th-tools-A-20261017` · worktree `C:/Users/하봄/Downloads/Holdem-gpt-th-a` · branch `gpt-th-a` · base `a7ad7ede`.

2026-10-17 KST. First recorded clock: 11:16:49; deadline: 12:25. Batch: exactly calculator, hand-chart and glossary, plus their allowed registrations and th shared chrome. Account usage and cap unavailable; no estimate. One authorized read-only Astra medium call; CLI reported 23,820 tokens for that call, not account usage or a billing estimate. No delegated writing, native-speaker adversarial lens, full independent review, server, deployment, push, merge, stash, checkout or reset. WORKLOG, handoff and mailbox were not edited under this lane's explicit restrictions.

Source implementation is complete. Required gates and the single production build passed. **One final column-label correction is not reflected in that build's artifacts**, as detailed in ⑥; integration must rebuild. Screen verification is **not done**. This report is committed last.

## ① Files / lines

Final whole-file line counts:

| Tool | Files / lines |
|---|---|
| calculator | `app/th/calculator/dict.ts` 1,428 · `faq.ts` 20 · `page.tsx` 91 |
| hand-chart | `app/th/hand-chart/dict.ts` 57 · `faq.ts` 8 · `page.tsx` 76 |
| glossary | `app/th/glossary/dict.ts` 74 · `glossary-client.tsx` 7 · `page.tsx` 60 |

Shared changes against base: `components/bottom-tab-bar.tsx` +1/0; `components/intl-blog-post-client.tsx` +1/0; `components/side-rail.tsx` +6/−1; each of `lib/calculator-alternates.ts`, `lib/hand-chart-alternates.ts`, `lib/glossary-alternates.ts` +2/−1; `lib/hub-i18n.ts` +13/−1; `lib/hub-routes.ts` +1/0; `scripts/generate-sitemap.mjs` +3/0.

Only these three th routes were added to hub-routes and side-rail, in calculator / hand-chart / glossary order. No other locale, post, shared tool component or tournament data row changed. Polish page/schema structure is reused; translation meanings come from the EN dictionaries, EN FAQ arrays and EN glossary definitions. Chart optional type/combo notes follow the Polish/Italian structure and existing root chart figures. Glossary preserves all 46 EN entries, categories and array order; category grouping suits Thai script.

Tool commits (English, no trailers):

- `fbffabcf` Add Thai poker calculator
- `3bdc07b4` Add Thai starting hand chart
- `0fd8fea8` Add Thai poker glossary
- `76f18741` Preserve Thai calculator timing and implied odds conditions
- `41f0e294` Clarify Thai matchup table heading

Generated `public/sitemap.xml` and `tsconfig.tsbuildinfo` were restored from tracked HEAD bytes. Sitemap initially retained a stat-only modified marker despite matching hashes; refreshing the index cleared it without any staged content change. Verified HEAD/index blobs: sitemap `19d87b67a764bd6a04398afa5871ec17d0d251b2`, tsbuildinfo `be64f2a36056f95272a4e31ffdd21dacd14716b3`. Neither is committed.

## ② Head terms + metadata lengths

JavaScript string lengths; title includes the brand suffix. All three built titles match these values. OG locale is `th_TH`; built HTML is `lang="th"`.

| Route | Full title | Length | H1 |
|---|---|---:|---|
| calculator | เครื่องคำนวณ Equity — poker calculator \| HoldemMaster | 53 | เครื่องคำนวณ Equity · poker calculator |
| hand-chart | ตาราง Preflop — poker chart \| HoldemMaster | 42 | ตาราง Preflop · poker chart |
| glossary | ศัพท์โป๊กเกอร์ — ศัพท์ poker พร้อมคำอธิบาย \| HoldemMaster | 57 | ศัพท์โป๊กเกอร์ · ศัพท์ poker |

| Route | Description | Length |
|---|---|---:|
| calculator | Poker calculator คำนวณ equity, pot odds และ outs ใน Texas Hold'em พร้อม ICM, SPR และ push/fold รวม 9 เครื่องมือฟรีบนเบราว์เซอร์ ไม่ต้องสมัคร | 140 |
| hand-chart | Poker chart แสดงไพ่เริ่มต้น Texas Hold'em ทั้ง 169 แบบตามตำแหน่ง UTG ถึง SB เลือกตำแหน่งเพื่อไฮไลต์เรนจ์เปิดในตาราง พร้อมสัดส่วนชนิดมือและคอมโบ | 143 |
| glossary | ค้นหาศัพท์โป๊กเกอร์และศัพท์ poker แยกตามหมวด: บลายด์, equity, outs, pot odds, 3-bet, ICM, คิกเกอร์ และโชว์ดาวน์ พร้อมคำอธิบายคำที่ใช้บนโต๊ะ Texas Hold'em | 153 |

Head terms follow `docs/keyword-bank/th-tools.md` §4, including the named English search phrases. Chart FAQ heading includes poker hand chart; keywords include range poker / preflop chart. Short navigation/promo labels use the authority's Thai tool names. No forbidden head term was introduced. Calculator OG description is 88 characters; chart/glossary OG descriptions reuse their main descriptions.

## ③ Terms beyond the table / URLs

Existing `lib/posts-th/` was grepped first. The following Thai source pages were opened directly for terminology only, without importing their definitions, figures or strategic claims:

- [Natural8 Thai glossary](https://www.natural8.com/th/poker-terms-definitions)
- [GGPoker Thai terminology](https://ggpoker.com/th/poker-basics/poker-terms/)

| EN concept | Choice / evidence |
|---|---|
| Cash game | เกมเงินสด — already in `lib/posts-th/holdem-blind-meaning.ts:71,94` and `holdem-showdown-rules.ts:60`; also visible as เกมเงินสดโป๊กเกอร์ on the opened [Natural8 Thai page](https://www.natural8.com/th/poker-terms-definitions). |
| Final table | โต๊ะสุดท้าย — ordinary descriptive Thai; the same opened [Natural8 page](https://www.natural8.com/th/poker-terms-definitions) has คุณสมบัติโต๊ะสุดท้าย. |
| Re-raise | re-raise retained EN; corpus has รีเรซ in `lib/posts-th/holdem-game-order.ts:259`, [existing Thai guide](https://www.holdemmaster.com/th/blog/holdem-game-order). No new Thai spelling adopted. |
| Mucking | mucking retained EN; corpus has muck in `lib/posts-th/holdem-showdown-rules.ts:60`, [existing Thai guide](https://www.holdemmaster.com/th/blog/holdem-showdown-rules). |
| Nash equilibrium / Nash chart | EN retained. No verified Thai replacement adopted from the two directly opened glossary URLs above. |

Other extra technical expressions remain EN, including Tier, bubble, coin flip, risk premium, committed, top pair top kicker/TPTK, save-and-chop, set mining, one-gapper, pot control, live hand, open-shove, open-limp, chip leader, short stack, calling station, downswings, straight draw, monster, connector, domination/dominate, EP/LP and chip EV. The corpus search did not establish replacements for these; the opened glossary URLs above are not claimed to confirm each term. Descriptive surrounding prose is Thai. No unconfirmed Thai poker label or translated solver feature name was invented, and the authority file was not edited within this restricted lane.

## ④ Generic UI choices and disputed defaults

Ordinary editorial Thai authorized by the brief, not claims of verified poker-site button conventions:

| Concept | Chosen UI |
|---|---|
| Close / add / remove / none | ปิด / เพิ่ม / ลบ / ไม่มี |
| All / show all / clear all | ทั้งหมด / แสดงทั้งหมด / ล้างทั้งหมด |
| Choose / select / swipe | เลือก / เลือก / ปัด |
| Legend / summary | คำอธิบายสี / สรุป |
| Reset inputs / completion | Reset ข้อมูล / Reset ข้อมูล … แล้ว |
| Decrease / increase | ลด / เพิ่ม |
| Result / difference | ผลลัพธ์ / ส่วนต่าง |
| Shared navigation | บทความ / ฟีด / บล็อก / แชท / กิจกรรม / โปรไฟล์ / เขียนโพสต์ |

Unconfirmed technical labels stay EN: Random hand, Custom input, Street, Runout, Amount to call, Break-even, Percentage points, Paid places, Prizes, ICM value, Trips, the Premium/Strong/Playable/Marginal/Weak tiers and Great/Good/Fair/Poor/Very poor verdicts. Math and Slang category labels stay EN. Reset retains its EN token, with generic Thai context. Exact uses the confirmed แบบแม่นยำ; Monte Carlo stays EN.

Dispute-table defaults used (no dispute resolved):

- Fold: หมอบ in calculator recommendations, glossary term/definitions and chart FAQ; การหมอบ in push/fold and chart legends.
- Raise: เพิ่มเดิมพัน in actions, recommendations, FAQ and glossary; no replacement with เรซ/เรส. Bet uses เดิมพัน in prose; related action lists use the same default verbs.
- Equity remains Equity/equity across calculator, chart and glossary, distinct from ชนะ and ICM prize value. Outcome columns use ชนะ / เสมอ; แพ้ appears in outcome prose.
- Preflop remains Preflop/preflop; Flop uses ฟลอป throughout. Stack and Side pot use EN forms. Set and Trips stay distinct; the general rank ตอง remains the rank label.
- Advanced unconfirmed labels retain EN; the lane makes no claim of Thai native-language approval or usage frequency.

Numbers use Latin digits, comma thousands, dot decimals and attached percentages. Cards, $ and position abbreviations retain EN source forms. `th-TH` resolves to `latn`; samples are **1,326 / 2.5 / 35%**. No Thai-numbering extension is used.

**Calendar:** Lane A introduces no dates or date formatter. No `Intl.DateTimeFormat` was added, so no Buddhist-era conversion occurs here. Tournament Gregorian formatting is Lane B's implementation responsibility.

## ⑤ Links omitted

No `/en/` fallback and no `/th/solver` link. Direct source checks found all 18 dictionary href/slug references resolve to existing th sources; this excludes the dictionaries' own SEO paths.

Calculator omits optional quick-reference links to holdem-probability, holdem-equity, holdem-outs, holdem-pot-odds and holdem-short-stack. The final M table links to the existing holdem-blind-meaning guide. The optional ICM deal link and its lead sentence are omitted; required push/fold reading uses holdem-all-in-rules. Related cards use all six existing Thai posts.

Chart replaces absent starting-hands-chart, when-to-fold, position-play and hand-rankings guides with beginner/actions/game-order/blinds guides and calculator. Its basis notes contain no missing chart-post or solver link. Glossary replaces absent hand-rankings/strategy cards with showdown/actions, retaining beginner/chart/calculator links. No optional term-to-post links were added.

## ⑥ Gates + Astra §13 check

Actual output excerpts; full logs remain under ignored `tmp/`:

```text
npm run check:calc-parity -- th
PARITY OK — th 불일치 0

npm run check:seo-sync
✅ 🔴 0건 — 렌더 후 DOM이 서버 metadata와 갈리는 자리

npm run check:intl-links
✓ 다국어 내부 링크 검사 통과 (736편, 25개 언어) — 언어경로+대상실존+도구링크 확인

npm run check:number-format
✅ 파일 내부 혼용 0건 · ✅ 소수파 0건

npm run build (one invocation)
PARITY OK — 사본 19개 전수 불일치 0 (+ 원천 I항)
sitemap.xml → 74 blog posts + 736 intl posts + 140 static URLs + 25 locale homes
✓ Compiled successfully
✓ Generating static pages (1004/1004)
├ ○ /th/calculator  278 B   202 kB
├ ○ /th/glossary    5.12 kB 151 kB
├ ○ /th/hand-chart  164 B   148 kB
✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과
HTML 산출물 998개 스캔
✅ ::: 마커 잔존 0 — 모든 디렉티브가 렌더됐다.
✅ 🔴 0건 — 비한국어 페이지의 위 자리에 한국어가 없다.
BUILD_EXIT=0
```

All four standalone gates exited 0. Initial sandbox parity execution hit esbuild spawn EPERM; rerun with child-process access passed. No gate threshold/configuration changed and no automatic approval rejection occurred. Build retains the existing Supabase Edge Runtime warning and existing skip-type-validation/skip-lint settings. No standalone full-repository tsc run is claimed.

Coverage supplement: number-format is post-oriented, so direct checks covered all nine new page files: **1,990 string/text nodes**, Hangul/backticks inside string content/Thai digits **0**; parse diagnostics **0**. All 17 calculator FAQ numeric-token sequences, five chart FAQ sequences and 46 glossary definition sequences match EN. Glossary categories/order match EN. Dictionary links resolve. Built title/lang/OG-locale checks pass for all three pages; JSON-LD has calculator FAQPage 17, chart FAQPage 5 and glossary DefinedTermSet 46. Built HTML contains **0 Thai digits**; emitted calculator/chart bundles use `numberLocale:"th-TH"`, whose runtime Intl number system is latn. Chart output contains 1,326 and dot-decimal percentages.

**Build limitation:** while the single build was compiling, final source commit `41f0e294` changed only the calculator matchup column heading from คู่มือที่เทียบ to มือที่เทียบ. The emitted calculator HTML/bundle still contains the prior heading. This one-label source correction passed the direct parse/hygiene/numeric/link checks, but is **not covered by the production artifacts**. No second build was run, honoring the one-invocation limit. The head must rebuild after integration and confirm the corrected heading. The two Astra corrections below were committed before the build and are covered by it.

One invocation: `codex exec -m gpt-6-astra -c model_reasoning_effort=medium -s read-only`, limited to **125 paired EN/TH numeric/card/probability/formula/direction sentences** and the optional chart-note invariants. Prompt was read as a UTF-8 file and passed to Node child_process as an input Buffer, with no PowerShell text pipe. Astra's first line was intact:

```text
UTF-8 ECHO: ไพ่ของคุณ ฟลอป เทิร์น ริเวอร์.
```

It identified two changes, both fixed in `76f18741`:

- Pair 65, calculator guide.cards.1.body: preserve EN “on the flop or turn” rather than “from”. Source now uses บนฟลอปหรือเทิร์น. The inherited EN timing wording is left for EN-first review.
- Pair 78, calculator FAQ8: implied extra winnings require the opponent to have enough remaining chips to cover the entered extra amount, not merely some chips. That full condition is now explicit.

No second model call, native-speaker lens or full independent review was run. Astra output is not represented as a post-fix model pass. Source numeric/hygiene/link checks were rerun after corrections and passed. Evidence: `tmp/th-astra-prompt.txt`, `tmp/th-astra-pairs.json`, `tmp/th-astra-result.txt`, `tmp/th-astra-log.txt`, `tmp/th-custom-check.json`, `tmp/th-built-check.json`; gate logs `tmp/th-{calc-parity,seo-sync,intl-links,number-format,build}.log`.

Screen verification at 390/1440: **not done**; optional screen work was not attempted. No browser or dev/start server was launched. Temporary implementation/check scripts were removed at closeout; ignored logs/JSON/prompt remain as evidence.

## ⑦ Head requests / doubts

- Merge Lane B's two th routes into hub-routes/side-rail, preserving these three. Reuse the th shared chrome added here. Lane A adds no tournament/quiz route or solver link.
- **Remaining validation:** integrated production build must include `41f0e294`'s corrected calculator heading. All requested commands ran successfully, but the one-label artifact mismatch above remains explicit. Regenerate the sitemap at integration.
- Complete 390/1440 screen and interaction checks. Thai word wrapping, combining marks and the Thai-plus-English H1 length have not been visually verified. The Italian report's shared OutsCalc mobile result-card overflow remains a head/shared-component follow-up; this lane did not reproduce or fix it.
- EN-first wording retained: chart FAQ4 mixes 169-type percentages with a 40–50% reference range; FAQ5 has call-range/bluff ambiguity; AA win/equity wording and glossary equity without tie-share qualification; Check without the complete BB option; the outs guide's “on the flop or turn” timing; simplified pot-odds verdicts. No shared source meaning was silently rewritten in Thai.
- MA-598 overcard frequency is preserved as มักยังแพ้ (“often still loses”) in both the outs preset and quick-reference note. No universal-failure claim was introduced.
- Native Thai audit, final visual review, integrated build, live checks and deployment remain head/audit-desk work. No audit approval or deployment is claimed.
