# Lane B — Polish tools

Execution: pl-tools-B-20261016. Worktree C:/Users/하봄/Downloads/Holdem-gpt-pl-b; branch gpt-pl-b; base c88ccd06. Started 2026-10-16 21:22 KST; deadline 22:20 KST. Batch: exactly the Polish equity quiz and tournament board. Account usage/limit unavailable; no estimate. One explicitly authorized read-only gpt-6-astra medium call; no delegated writing or native-speaker/full independent review. CLI reported 68,472 tokens for that call; this is not account usage or a billing estimate.

Completed tool commits: quiz **586c13ee**, tournaments **1e0a0229**. This report is committed last. No deployment. WORKLOG, handoff and mailbox closeout belong to the head under this lane's explicit restrictions.

## ① Files / lines

Line counts are final whole-file counts; changes compare with c88ccd06. Only this lane's two routes were added to hub routes and side rail. No tournament data rows, other locales, posts, shared tool components, hub-i18n or bottom-tab-bar were edited.

| File | Lines | Added / removed |
|---|---:|---:|
| app/pl/win-rate-quiz/page.tsx | 82 | +82 / 0 |
| app/pl/win-rate-quiz/win-rate-quiz-client.tsx | 266 | +266 / 0 |
| app/pl/tournaments/page.tsx | 72 | +72 / 0 |
| components/side-rail.tsx | 708 | +4 / 0 |
| lib/hub-routes.ts | 141 | +1 / 0 |
| lib/win-rate-quiz-alternates.ts | 46 | +2 / −1 |
| lib/tournaments-hreflang.ts | 29 | +1 / −1 |
| lib/tournaments-i18n.ts | 4107 | +146 / −7 |
| scripts/check-tournaments-i18n.mjs | 167 | +1 / −1 |
| scripts/generate-sitemap.mjs | 544 | +2 / −1 |
| docs/keyword-bank/win-rate-quiz-ltr.md | 188 | +13 / 0 |
| docs/tool-lanes/pl-tools-B-report.md | 153 | +153 / 0 |

Quiz uses the Italian page structure and all 122 current keys, with EN copy as the meaning authority. No shared QuizUI keys were added. fmtNum uses pl-PL with grouping and normalizes grouping spaces to U+0020; decimalComma is true, and the default percent suffix has no gap. Solver language is en and the link says “(po angielsku)”.

Board registration includes BoardLocale/BOARD_STRINGS, FIELD_PL, PAREN_PL, CITY_PL, empty COUNTRY_NAME.pl and NAME_OVERRIDE.pl, SCHEMA_DESC_PL, nominative MONTH_PL, genitive MONTH_PL_GEN, date branches and HOME_COUNTRY.pl. Empty name maps preserve original event brands; only month/season brackets change inside event names. NOTE.pl is empty, following the precedent. Existing venue romanizations are reused; no new venue-brand translation was invented.

## ② Head terms / metadata lengths

No new keyword measurement: pl-tools.md §4 supplies the training/quiz head and Turnieje pokerowe. The LTR keyword bank now records the existing quiz poker 10 / poker trainer 50 / symulator pokera 20 / poker simulator 260 measurements and their intent decisions.

Lengths are JavaScript string lengths, including the brand suffix. Built browser titles match the source values.

| Page | Field | Final copy | Length |
|---|---|---|---:|
| Quiz | Title | Quiz poker: trenuj equity i decyzje \| HoldemMaster | 50 |
| Quiz | Description | Trening pokerowy bez znajomości kart rywali: oszacuj equity, wybierz sprawdzenie lub pas i analizuj kolejne street z pot odds od flopa. | 135 |
| Tournaments | Title | Turnieje pokerowe 2026: kalendarz live \| HoldemMaster | 53 |
| Tournaments | Description | Turnieje pokerowe live na świecie: daty, wpisowe i oficjalne źródła. Filtruj według kraju i statusu. Aktualizacja: 16 października 2026. | 136 |

Quiz OG/Twitter description: 106 characters; tournaments OG/Twitter: 93. H1: “Quiz poker 🃏” / “Turnieje pokerowe 2026: kalendarz live”. Tournament hooks are used only at at most 45 characters before the suffix; an ongoing-event description is appended only when the whole description stays at most 155. No Polska, symulator, darmowy, układy, zasady or poker online head was introduced. Pot odds explicitly starts at the flop, preserving the MA-598 correction.

## ③ Terms beyond the table / URLs

No new Polish replacement for an unconfirmed poker term was adopted. Poker (straight flush) and Kareta remain distinct, and equity, win probability and percentage-point error remain separate quantities.

| EN concept | Choice | Corpus / directly attempted URL |
|---|---|---|
| Main Event | Main Event, inflected in prose | lib/posts-pl/texas-holdem-rules-for-beginners.ts:197,429 |
| Cash / cash game | cash | lib/posts-pl/holdem-betting-actions.ts:149; texas-holdem-rules-for-beginners.ts:121,189 |
| Straight draw | Straight draw / straight draw, EN retained | Corpus grep had no exact hit. [PokerStrategy term URL](https://polska.pokerstrategy.com/glossary/Straight-Draw/) was inaccessible; no claim of confirmation. |
| Top pair | top pair, EN retained | Corpus grep had no exact hit. [PokerStrategy term URL](https://polska.pokerstrategy.com/glossary/Top-Pair/) was inaccessible; no Polish replacement. |
| Freeroll | Freeroll, EN retained | Corpus grep had no exact hit. [PokerStrategy term URL](https://polska.pokerstrategy.com/glossary/Freeroll/) was inaccessible. |
| High roller | high roller, EN retained | Corpus grep had no exact hit. [PokerStrategy term URL](https://polska.pokerstrategy.com/glossary/High-Roller/) was inaccessible. |
| Flight / single-raised pot | flight / single-raised pot, EN retained | No exact corpus hit and no directly verified Polish replacement. |

The [PokerListings Polish dictionary](https://www.pokerlistings.pl/pokerowy-slownik) timed out. The attempted [Polish EPT Prague URL](https://www.pokerstarslive.com/pl/ept/prague/) redirected to English, so it was not adopted as Polish terminology evidence. No event schedules, rules or amounts were updated from those web requests.

City-field exonyms include Praga, Paryż, Londyn, Seul, Sewilla, Wiedeń, Lucerna, Meksyk and Panama. Country filters use Czechy, Niemcy, Austria, Słowacja, Estonia, Francja and Malta; zero-row countries are automatically hidden. Event names retain Prague/Paris/Seoul etc. Venue names retain Hilton Prague, INSPIRE Entertainment Resort and other originals. Existing country codes are unchanged.

## ④ Generic UI choices for unconfirmed rows

These are ordinary editorial Polish choices authorized by the task, not newly verified poker-site conventions.

| Concept | Choice |
|---|---|
| Next / new hand | Rozdaj flop/turn/river / Nowe rozdanie |
| Guess / error / average error | Twój typ / błąd / średni błąd |
| Result / review / graph | Analiza / Wykres; calculation tab Obliczenia |
| Show / hide cards | Pokaż ich karty / Ukryj ich karty |
| Copy / copied / share link | Skopiuj / Skopiowano / Skopiuj link do tego rozdania |
| Clear all / close / edit | Wyczyść wszystko / Zamknij / Edytuj |
| Loading / verify | Tasowanie i obliczenia… / Sprawdź odpowiedź |
| All / all countries | Wszystkie / Wszystkie kraje |
| Upcoming / running / finished | Nadchodzące / Trwające / Zakończone; singular badges Nadchodzący / Trwający / Zakończony |
| Venue | Miejsce |
| Year-round / dates TBA | Przez cały rok / Daty do ogłoszenia |
| Official site / full guide | Oficjalna strona / Pełny przewodnik |
| Unpublished / unannounced / undecided | Nie podano / Nie ogłoszono / Do ustalenia |

Unconfirmed technical labels remain EN: Amount to call, percentage points, Standard, Open / Defend, defending range. Resetuj, Punkty, Prawidłowa / Zła, Wygrana / Remis / Przegrana and other confirmed labels follow the authority table. No translated solver feature name was introduced: Flop study stays the English app label.

## ⑤ Links omitted

- No Polish holdem-pot-odds or holdem-position-play post exists, so the quiz footer omits both. No EN post fallback.
- The retained /pl/calculator footer link is the explicit Lane A integration dependency, following the Italian two-lane precedent. It is not present in this isolated Lane B worktree; the head must merge Lane A before publishing this batch.
- No /pl/solver route or link was added. The shared external solver link uses lang=en and explicitly says “(po angielsku)”.
- Tournament guides are resolved against existing Polish posts only; none of the tournament-specific guides exists, so resolveBlogLinks returns an empty map. No KO/EN guide fallback was introduced.

## ⑥ Gates / screen check / Astra §13 result

The final production build ran **once**, exit **0**. The following are actual output excerpts; complete logs remain under ignored tmp/.

```text
npm run check:tournaments-i18n
🌐 대회 보드 i18n 누출 검사 — 147행 · 값 필드 296개 × 17로케일
🔴 0건 (값 필드 0 · note 0)

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

npm run build
sitemap.xml → 74 blog posts + 736 intl posts + 134 static URLs + 25 locale homes
✓ Compiled successfully
✓ Generating static pages (998/998)
├ ○ /pl/tournaments       893 B    229 kB
├ ○ /pl/win-rate-quiz     7.92 kB   212 kB
BUILD_EXIT=0

postbuild: check:hreflang
hreflang 게이트 — 산출물 992개 중 862개 페이지가 hreflang 선언 · 세트 78종
✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과
postbuild: check:directives
HTML 산출물 992개 스캔
✅ ::: 마커 잔존 0 — 모든 디렉티브가 렌더됐다.
postbuild: check:meta-lang
✅ 🔴 0건 — 비한국어 페이지의 위 자리에 한국어가 없다.
```

SEO's first sandbox run failed with spawnSync cmd.exe EPERM; the authorized rerun succeeded. The first Astra CLI initialization likewise failed before starting a model because sandbox runtime access was denied; the corrected execution was the sole model call. No automatic approval rejection occurred. Build retains the existing Supabase Edge Runtime warning and existing skip-type-validation/skip-lint settings. No standalone tsc run is claimed.

Gate coverage matters: number-format scans posts, not this tool UI; intl-links primarily checks posts. Direct checks supplement them: quiz 122-key equality against the Italian structure; 94 formula cases identical; 495 new TSX string/text nodes with Hangul 0 and internal backtick content 0; source numeric output “1 326 / 2,5 / 35%”. The tournament dictionary necessarily has existing Korean source lookup keys, while rendered values passed the all-field leakage gate.

Existing-locale regression comparison: **18,816 outputs**, **0 differences**, across 147 data rows × 16 existing locales × 8 name/note/date/month/city/value outputs. All 147 Polish event names retain nameEn except the explicitly localized month/season brackets. Date samples: **12–19 października 2026**, **30 października – 2 listopada 2026**, **28 grudnia 2026 – 3 stycznia 2027**. Currency symbols remain original; no amount conversion was introduced.

The one authorized **gpt-6-astra, medium, read-only** §13 comparison returned **“no new WRONG/RISKY”**. Scope: numeric/card-bearing quiz explanations, rank order, direction words, outs versus winning, tie shares, fixed samples, 6-max/9-player substitutions, 150%/half-pot, 25/50/75%, 100 − 4 × error and the 25-point cutoff; new tournament amounts, schema totals and dates. No fix was requested and no full review was run. Evidence: tmp/pl-b-astra-result.txt and tmp/pl-b-astra-log.txt.

Screen inspection used the repository screen-review skill, adapted to this worktree and built output. Playwright intercepted requests to serve local built HTML/CSS/JS/worker files; **no dev/start server** was launched. Because this worktree has no public Supabase environment values, the first fixture hit a shared-layout initialization exception. The corrected fixture substituted offline test values only in served JS bytes and mocked external API responses; source files and build artifacts were unchanged.

At **390×844** and **1440×900**, simulator mode progressed flop → turn → river, and the France filter changed **147 → 3** cards. Document horizontal overflow: **0** in initial quiz, completed quiz and filtered board at both widths. No application exception remained. The fixture logged expected 404s for unserved navigation prefetches and Vercel telemetry; no required page CSS/JS/worker asset was missing. This does not verify authentication, quiz-score persistence, real API responses or deployment. Eight final PNGs plus report.json are in tmp/screen/pl-tools-b/. Mobile quiz top/review, mobile board top and desktop filtered board were opened visually. No new layout collision was seen in those views; the existing internal results-table scrolling remains.

## ⑦ Head requests / doubts

- Merge both lanes' pl entries in hub-routes and side-rail, preserving all five routes. Lane A owns hub-i18n and bottom-tab-bar labels and the calculator footer target. This isolated build therefore shows the existing English common chrome (Log in / Write Post / Feed / Chat / Event / Profile / Guides); this lane did not change that ownership boundary.
- Keep solverLang=en until the Polish solver UI is live and a later authorized solver-landing round changes it. The English solver feature name and language notice are intentional.
- EN-first wording retained: the pot-odds verdict and always-call teaching model simplify real play; the implied-odds paragraph remains the EN source meaning. No shared component or EN wording correction was made in this lane. The corrected “pot odds from the flop” meaning is present.
- Rebuild the generated sitemap at integration. public/sitemap.xml and tsconfig.tsbuildinfo were restored and excluded from commits.
- No unfinished implementation in the assigned batch. Integration, Polish native-language audit, live service checks and deployment remain head/audit-desk work. The failed terminology URLs above supplied no new Polish authority.
