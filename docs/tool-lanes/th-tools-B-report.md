# Lane B — Thai tools

Execution: th-tools-B-20261017. Worktree C:/Users/하봄/Downloads/Holdem-gpt-th-b; branch gpt-th-b; base a7ad7ede. First recorded clock 2026-10-17 11:16:56 KST; deadline 12:25 KST (last five minutes reserved for saving). Batch: exactly equity quiz and tournament board. Account usage/limit unavailable; no estimate. One authorized read-only gpt-6-astra medium numeric/card/formula comparison; CLI reported 15,687 tokens, not an account-usage or billing estimate. No delegated writing, native-speaker lens or full independent review. Save location: this report and ignored tmp/th-b-* logs.

Tool commits: **66ecbdcf** Add Thai poker equity quiz; **9d298f93** Add Thai live poker tournament board. This report is committed last. No deployment, push, merge, stash, checkout or reset. All repository work stayed inside this worktree. WORKLOG, session-handoff and mailbox were not edited, per the lane restriction; external mailbox startup tools were not run because this task confines work to this folder.

## ① Files / lines

Whole-file line counts; added/removed counts compare with a7ad7ede. Only this lane's two routes were added to hub-routes and side-rail. No other locale, post, shared tool component, tournament data row, hub-i18n, bottom-tab-bar or intl-blog-post-client changed.

| File | Lines | Added / removed |
|---|---:|---:|
| app/th/win-rate-quiz/page.tsx | 77 | +77 / 0 |
| app/th/win-rate-quiz/win-rate-quiz-client.tsx | 251 | +251 / 0 |
| app/th/tournaments/page.tsx | 66 | +66 / 0 |
| components/side-rail.tsx | 715 | +4 / 0 |
| lib/hub-routes.ts | 143 | +1 / 0 |
| lib/win-rate-quiz-alternates.ts | 47 | +2 / −1 |
| lib/tournaments-hreflang.ts | 29 | +1 / −1 |
| lib/tournaments-i18n.ts | 4,248 | +147 / −6 |
| scripts/check-tournaments-i18n.mjs | 167 | +1 / −1 |
| scripts/generate-sitemap.mjs | 548 | +2 / −1 |
| docs/keyword-bank/win-rate-quiz-ltr.md | 202 | +14 / 0 |
| docs/tool-lanes/th-tools-B-report.md | 189 | new report |

Quiz uses the current Polish/Italian structure, all 122 QuizUI keys, and EN as the meaning authority. No new shared component key. fmtNum uses th-TH with numberingSystem=latn and grouping explicitly enabled; decimalComma=false and the shared default percent gap is empty. Samples: 1,326 · 2.5 · 35%. The solver link uses lang=en and explicitly says (ภาษาอังกฤษ).

Board registration includes BoardLocale/BOARD_STRINGS, FIELD_TH, PAREN_TH, CITY_TH, empty COUNTRY_NAME.th and NAME_OVERRIDE.th, SCHEMA_DESC_TH, MONTH_TH, shortDayMonth/date-range/month-badge branches, empty NOTES.th and HOME_COUNTRY.th. Event brands remain nameEn except month/season brackets. Venue brands reuse existing Latin names; the Hilton operator annotation is Thai prose. No venue brand is translated into Thai.

HOME_COUNTRY.th follows the existing home-country-plus-destinations mechanism: TH first, then VN/KH/PH/KR/TW/JP, the existing Asian destination grouping. The board hides zero-row country chips automatically, so TH does not imply a Thailand event exists. No data row was added.

## ② Head terms + metadata lengths

Source: docs/keyword-bank/th-tools.md §4. No new keyword measurement. The LTR bank records its existing poker quiz 10 / poker trainer 10 / poker simulator 40 / เกมโป๊กเกอร์ 880 measurements and intent decisions.

Lengths are JavaScript string lengths, including the brand suffix in titles.

| Page | Field | Final copy | Length |
|---|---|---|---:|
| Quiz | Title | ควิซโป๊กเกอร์: poker quiz ฝึก equity \| HoldemMaster | 51 |
| Quiz | Description | ฝึกประเมิน equity โดยไม่เห็นไพ่คู่ต่อสู้ เลือกคอลหรือหมอบ ดู pot odds ตั้งแต่ฟลอป แล้วย้อนดูว่าคุณควรหมอบตอนไหน | 111 |
| Tournaments | Title | ทัวร์นาเมนต์โป๊กเกอร์ 2026: poker tournament \| HoldemMaster | 59 |
| Tournaments | Description | ทัวร์นาเมนต์โป๊กเกอร์สดทั่วโลก ดูวันที่ บายอิน และแหล่งข้อมูลผู้จัด กรองตามประเทศและสถานะ อัปเดต 17 ตุลาคม 2026 | 111 |

H1: ควิซโป๊กเกอร์: poker quiz ฝึก equity 🃏 / ทัวร์นาเมนต์โป๊กเกอร์ 2026: poker tournament. Quiz OG/Twitter description is 88 characters; tournament social description is 79 characters (confirmed at final built-output check). All 12 month names were considered in tournament description length: maximum base length 115. A next-event hook is used only if at most 45 characters before the suffix; ongoing-event text is appended only if the complete description fits 155. No forbidden head, simulator/game quiz head, or Thailand/ไทย tournament title.

MA-598's corrected meaning, pot odds **from the flop on**, is present in quiz description, OG/Twitter copy and schema. This lane has no overcard glossary definition; ruleText preserves the EN condition that an overcard is higher than every board card.

## ③ Terms beyond the table / URLs

No new Thai poker replacement was invented for an unconfirmed table row. Corpus grep ran first. Extra technical expressions retain EN:

| Concept | Choice / corpus result |
|---|---|
| Main Event | Main Event; existing [Thai beginner guide](https://www.holdemmaster.com/th/blog/texas-holdem-rules-for-beginners), source lines 197/430, and game-order line 35 |
| Top pair | top pair kept EN; Thai corpus has ท็อปแพร์ at [game-order](https://www.holdemmaster.com/th/blog/holdem-game-order), source lines 210/218; no new default established |
| Straight draw | Straight draw / straight draw; no exact corpus hit, no verified replacement adopted |
| Cash, single-raised pot, flight, high roller, Freeroll | EN retained; no exact corpus hit or new Thai replacement claimed |
| Standard error | standard error; statistical EN retained, with source 0.25–0.35 percentage points |

Ordinary descriptive Thai, including the final-table description โต๊ะสุดท้าย, is editorial prose, not a newly certified poker UI label. No new external schedule, amount or poker-strategy claim was researched or added.

CITY_TH uses these directly opened Thai Wikipedia exonyms; less familiar cities keep their original source spelling, following the partial-map precedent:

- [ปราก](https://th.wikipedia.org/wiki/ปราก), [ปารีส](https://th.wikipedia.org/wiki/ปารีส), [ลอนดอน](https://th.wikipedia.org/wiki/ลอนดอน), [โซล](https://th.wikipedia.org/wiki/โซล)
- [มะนิลา](https://th.wikipedia.org/wiki/มะนิลา), [พนมเปญ](https://th.wikipedia.org/wiki/พนมเปญ), [ไทเป](https://th.wikipedia.org/wiki/ไทเป), [โตเกียว](https://th.wikipedia.org/wiki/โตเกียว)
- [บาร์เซโลนา](https://th.wikipedia.org/wiki/บาร์เซโลนา), [ลาสเวกัส](https://th.wikipedia.org/wiki/ลาสเวกัส), [ซิดนีย์](https://th.wikipedia.org/wiki/ซิดนีย์), [อินช็อน](https://th.wikipedia.org/wiki/อินช็อน)
- [เชจู](https://th.wikipedia.org/wiki/เชจู), [ฟูกูโอกะ](https://th.wikipedia.org/wiki/ฟูกูโอกะ), [ซัปโปโระ](https://th.wikipedia.org/wiki/ซัปโปโระ), [เวียนนา](https://th.wikipedia.org/wiki/เวียนนา)
- [มาดริด](https://th.wikipedia.org/wiki/มาดริด), [เซบิยา](https://th.wikipedia.org/wiki/เซบิยา), [เม็กซิโกซิตี](https://th.wikipedia.org/wiki/เม็กซิโกซิตี), [โอซากะ](https://th.wikipedia.org/wiki/โอซากะ), [นางาซากิ](https://th.wikipedia.org/wiki/นางาซากิ)

Home-filter country forms were checked against the directly opened pages for [เวียดนาม](https://th.wikipedia.org/wiki/ประเทศเวียดนาม), [กัมพูชา](https://th.wikipedia.org/wiki/ประเทศกัมพูชา), [ฟิลิปปินส์](https://th.wikipedia.org/wiki/ประเทศฟิลิปปินส์), [เกาหลีใต้](https://th.wikipedia.org/wiki/ประเทศเกาหลีใต้), [ญี่ปุ่น](https://th.wikipedia.org/wiki/ประเทศญี่ปุ่น) and [ไต้หวัน](https://th.wikipedia.org/wiki/ประเทศไต้หวัน). Only names were adopted; country/venue/event data were not changed.

## ④ Generic UI choices + disputed defaults

The following are ordinary editorial Thai choices allowed by the brief, not claims of verified poker-site UI conventions:

| Concept | Choice |
|---|---|
| All / all countries | ทั้งหมด / ทุกประเทศ |
| Clear all / close / edit | ล้างทั้งหมด / ปิด / แก้ไข |
| Check answer / choice | ตรวจคำตอบ / ตัวเลือก |
| Set hand / deal this hand | กำหนดมือ / แจกมือนี้ |
| Loading | กำลังสับไพ่และคำนวณ… |
| Not published / not announced / undecided | ยังไม่เผยแพร่ / ยังไม่ประกาศ / ยังไม่กำหนด |
| Copy a link | คัดลอกลิงก์มือนี้ (คัดลอก is confirmed; object is editorial) |

Explicit unconfirmed rows stay EN, including Amount to call, Standard, Open/Defend, defending range, percentage points, Points, Guess/Error, Random, Reset, New hand, Show cards/Hide cards, Review/Graph, Copied, Venue, Festival, Late registration, Upcoming/Running/Finished, Year-round/Dates TBA and Official site/Guide. No Study Spots/Flop Study Thai feature name was invented; solver's actual English Flop study remains.

Disputed defaults used, without resolving the disputes:

- §쟁점 1–3: หมอบ / เพิ่มเดิมพัน / เดิมพัน for actions; การหมอบ / การเพิ่มเดิมพัน / การเดิมพัน plus การคอล / การเช็ค for seat-history labels. Bet or raise remains the table's partial-unconfirmed EN combination in the rule list.
- §쟁점 4: Equity/equity in quiz labels and explanations, never an invented Thai transliteration.
- §쟁점 5: Preflop and ฟลอป in street labels and explanations.
- §쟁점 6: Stack in ruleText; no new Thai stack spelling. Side pot not used.
- §쟁점 7: Set/Trips remain separate in outsBreak/noDrawNote; category ตอง remains the general three-of-a-kind rank.
- §쟁점 8: unconfirmed feature/operation tokens above remain EN, except explicitly permitted ordinary editorial UI choices listed above.
- §쟁점 9: result labels ชนะ / เสมอ / แพ้; no long-term Win rate label invented. rangeNote follows EN's win-probability wording, as explained in §⑦.
- §쟁점 10: source definitions/strategy were not adopted as authority; dates use the editorial day–month–Gregorian-year convention.

## ⑤ Links omitted

No /en/ post fallback and no /th/solver route/link.

- The quiz footer omits absent holdem-pot-odds and holdem-position-play posts.
- /th/calculator is the explicit **Lane A integration dependency**, following pl/it. It is absent in this isolated Lane B tree. Merge Lane A before publication; no absent optional post links were substituted.
- External solver keeps lang=en and (ภาษาอังกฤษ).
- resolveBlogLinks checks actual Thai posts only. No tournament-specific Thai guide exists among the six Thai posts, so the board receives an empty guide-link map. No KO/EN guide fallback.
- The existing board's explicitly labelled Korean-schedule link is retained by the shared component, matching the precedents; this is not an unlabelled article fallback.

## ⑥ Gates + Astra §13 check

Requested standalone gates passed. Actual output excerpts:

```text
npm run check:tournaments-i18n
🌐 대회 보드 i18n 누출 검사 — 147행 · 값 필드 296개 × 18로케일
🔴 0건 (값 필드 0 · note 0)
GATE_EXIT=0

npm run check:tournaments-i18n:selftest
셀프테스트 9/9
GATE_EXIT=0

npm run check:seo-sync
✅ 🔴 0건 — 렌더 후 DOM이 서버 metadata와 갈리는 자리
GATE_EXIT=0

npm run check:intl-links
✓ 다국어 내부 링크 검사 통과 (736편, 25개 언어) — 언어경로+대상실존+도구링크 확인
GATE_EXIT=0

npm run check:number-format
✅ 파일 내부 혼용 0건 · ✅ 소수파 0건
GATE_EXIT=0
```

The final production build ran **once**, exit **0**; no application source changed after invocation. Actual log excerpts:

```text
npm run build
PARITY OK — 사본 18개 전수 불일치 0 (+ 원천 I항)
sitemap.xml → 74 blog posts + 736 intl posts + 138 static URLs + 25 locale homes
✓ Compiled successfully
✓ Generating static pages (1003/1003)
├ ○ /th/tournaments       896 B     232 kB
├ ○ /th/win-rate-quiz     8.05 kB   212 kB

postbuild: check:hreflang
hreflang 게이트 — 산출물 997개 중 867개 페이지가 hreflang 선언 · 세트 78종
✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과
postbuild: check:directives
HTML 산출물 997개 스캔
✅ ::: 마커 잔존 0 — 모든 디렉티브가 렌더됐다.
postbuild: check:meta-lang
✅ 🔴 0건 — 비한국어 페이지의 위 자리에 한국어가 없다.
BUILD_EXIT=0
```

check:calc-parity -- th belongs to Lane A and was not claimed here. Build retains existing Supabase Edge Runtime/process.version and webpack cache-size warnings. Existing configuration skips type validation and linting; no standalone tsc run is claimed. No gate threshold or repository config changed.

Built-output checks passed: both HTML files have lang=th, og:locale=th_TH, exact source titles/descriptions/H1, and Thai digits 0. Quiz breadcrumb home points to /th (the Polish template's stale /it breadcrumb was not propagated). Production quiz chunk page-80a5c5b8b0a74d93.js contains **e=>e.toLocaleString("th-TH",{numberingSystem:"latn",useGrouping:!0})**; executing that exact compiled formatter returns **1,326** and **2.5**. Shared decimalComma=false/default empty percentGap yields **35%**, without a gap. Built tournament text contains **17 ตุลาคม 2026**. Evidence: tmp/th-b-built-check.json. The first inspection script lacked cheerio; the corrected dependency-free HTML inspection passed, with no source/build changes.

Direct checks supplement the post-oriented number/link gates: 122-key equality with the current Polish QuizUI; 94 formula cases identical; 493 new TSX string/text nodes with Hangul 0, internal backtick content 0 and Thai digits 0. Existing Korean dictionary lookup keys are intentional; rendered field values passed the localization gate. All 147 event names equal nameEn except localized month/season brackets. Existing-locale regression: **19,992 outputs**, **0 differences**, across 147 rows × 17 existing locales × 8 outputs.

Thai dates are **built from MONTH_TH plus the ISO Gregorian year**, not formatted with th-TH Intl dates. This avoids the default Buddhist era entirely. Checked: **17 ตุลาคม 2026**, **12–19 ตุลาคม 2026**, **30 ตุลาคม – 2 พฤศจิกายน 2026**, **28 ธันวาคม 2026 – 3 มกราคม 2027**. Money symbols/amounts remain source values; Korean 만/M/K representations in FIELD_TH are expanded to Latin comma-grouped integers. No currency conversion.

One model invocation: codex exec -m gpt-6-astra -c model_reasoning_effort=medium -s read-only. A Node child_process fed a UTF-8 Buffer matching the saved UTF-8 prompt file, avoiding a PowerShell text pipe. Its echo was intact: **ไพ่ของคุณ 35% 0.25–0.35**. Scope was only paired numeric/card/probability/formula/direction passages: quiz explanation/ruleText, outs versus winning and tie shares, samples, 6-max/9-player substitutions, 150%/half-pot, 25/50/75%, score formula/cutoff, solver numeric limits and new tournament numeric/schema strings. No full independent review or native-speaker lens.

Astra returned one WRONG and two RISKY, then PASS for all other supplied comparisons. All three were addressed:

1. hitLabel no longer strengthens EN “table math” to a named rule; now การคำนวณที่โต๊ะ.
2. rangeNote no longer substitutes equity for EN “win rate”; it uses the authority's probability wording ความน่าจะเป็นในการชนะ. See source inconsistency in §⑦; no shared math changed.
3. FIELD_TH explicitly maps ₩350K~₩5M to ₩350,000–₩5,000,000.

The first CLI launch hit sandbox spawn EPERM before starting a model. The corrected child-process-access execution was the sole actual model call. No automatic approval rejection. Logs/prompt/result: tmp/th-b-astra-{prompt,result}.txt and tmp/th-b-astra-log.txt. Standalone gate logs: tmp/th-b-{tournaments,tournaments-selftest,seo-sync,intl-links,number-format}.log. Direct-check output: tmp/th-b-custom-check.json.

Screen check at 390/1440: **not done**, as permitted; no harness was attempted. No dev/start server was launched or left running. Temporary implementation/check scripts are removed at closeout; ignored evidence logs remain.

## ⑦ Head requests / doubts

- Merge Lane A and B entries in hub-routes and side-rail, preserving all five Thai routes. Lane A owns shared Thai chrome labels and /th/calculator. This isolated Lane B tree retains the existing common-chrome fallback; no chrome translation is claimed here.
- Complete 390/1440 screen/interaction checks and Thai native-language audit. Thai line wrapping, font shaping and the long mixed EN/Thai labels were not visually verified. No newly reproduced shared-component layout defect is claimed.
- EN-first issue: EN rangeNote, shareCopied and sharedActive still say win rate where the shared tool generally labels the metric equity. rangeNote follows the narrower EN wording after the authorized numeric check; no mathematical result was changed. The same tool's hit chance and equity remain explicitly distinguished elsewhere. Audit desk should judge a common EN-first wording fix rather than silently changing this lane's source meaning.
- EN-first simplifications retained: pure pot-odds verdict, always-call teaching model and implied-odds paragraph. No shared-component or EN correction was made. The corrected “from the flop on” meaning is present.
- Keep solverLang=en until Thai solver UI is actually live and a separate authorized landing round changes it. No /th/solver link.
- Regenerate sitemap after integrating both lanes. Generated sitemap/tsbuildinfo are excluded from this lane's commits.
- No unfinished implementation in the assigned two-page batch. Integration, native-language audit, screen/live-service checks and deployment remain head/audit-desk work.

Closeout: public/sitemap.xml restored from tracked HEAD using Git's normal working-tree CRLF filter; tsconfig.tsbuildinfo already matched tracked HEAD. Canonical blobs match HEAD and final git status is clean. Neither generated file is staged or committed. Temporary implementation/check scripts removed; ignored gate/model evidence logs remain. No dev/start server or model child remains running. Final report commit contains only this report.
