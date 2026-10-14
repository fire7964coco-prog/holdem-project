# 🅱 fr·ru 대회 보드 — 진행 파일 (`lane-tour-frru`)

> 정본 = `docs/tool-lanes-2026-10-14.md` §0 🅱 · §1 · §2 🅱 · §3. 브리프 = `tour-frru-brief.md`.

## 실행 기록 (AUTONOMY-LIMITS)

| 항목 | 값 |
|---|---|
| 실행 | A 구간 · 2026-10-14 10:46 시작 · 마감 12:16(90분) · 🔴 14:45 하드 정지 |
| 배치 | A 준비만(용어·숫자·헤드텀·아스트라 A·브리프·Fable 카피). B는 다음 지시 |
| 완료 조건 | 브리프 확정(아스트라 판정 반영 · 출처 구분) |
| 사용량 | 관측 가능한 지표 없음(계정 할당량 비율 미확인) — 숫자 추정 안 함 |
| 폴더 | `../Holdem-tour-frru` · 브랜치 `lane-tour-frru`(main 98a99a8c fast-forward 병합) |
| 자식 작업 | ① 아스트라 `codex exec -m gpt-6-astra -s read-only`(스크래치 `astra-tour-frru-A`) ② Fable 카피 서브 1회(도구 없음) |
| 외부 측정 | DataForSEO google_ads volume 4회 · labs 1회(40501) · SERP 2회 · 구글/Yandex 자동완성 |

## 산출물

- `docs/keyword-bank/fr-tournament.md` · `docs/keyword-bank/ru-tournament.md` (헤드텀 실측)
- `docs/tool-lanes/tour-frru-brief.md` (B 입력)

## 신규 용어 (EN | 채택 | 근거)

→ 브리프 §3 표(출처 구분: 코퍼스 grep / 아스트라 / 1차 URL).

## 구간 상태

| 구간 | 상태 | 시각 | 다음 첫 명령 |
|---|---|---|---|
| A 준비 | ✅ 완료(미커밋 — 산출물 3건은 B·C와 함께 커밋) | 10:46~11:15 | — |
| B 작성 | ✅ 완료(미커밋 — C 끝에 한 커밋) | 11:25~11:35 | — |
| C 마감 | ✅ 완료 · 새 맥락(/clear 뒤) · 커밋 1개 | 11:41~12:00 | 헤드: «tour-frru 끝났어, 머지해» |

### B 결과 (C가 재검할 목록)

- 고친 파일: `lib/tournaments-i18n.ts`(fr·ru BoardStrings · FIELD/PAREN/CITY/SCHEMA_DESC/MONTH · `SPACE_THOUSANDS` · `shortDayMonth` export 신설 · 날짜·배지 분기 · HOME_COUNTRY) · `app/{fr,ru}/tournaments/page.tsx`(pt 틀) · `lib/tournaments-hreflang.ts` · `scripts/generate-sitemap.mjs` · `scripts/check-tournaments-i18n.mjs`(목록 추가만) · `lib/hub-routes.ts` · `components/side-rail.tsx` · `docs/update-calendar.md`
- 브리프와 달라진 점: ① fr·ru `asOf`가 공용 보드의 «2026.10.14»를 받아 «14/10/2026»·«14.10.2026»로 바꾼다(공용 컴포넌트 미수정) ② metaDescription은 «En cours⍽: …»·«Сейчас идут: …»를 **통째로 들어갈 때만** 붙인다(clamp가 «… En»만 남기던 것 — 1차 빌드 산출물에서 발견) ③ PAREN_FR·RU에 `(October)` 추가(헤드 요청 5) ④ fr 훅 1일 «1er».
- 검증: `check:tournaments-i18n` 🔴0(15로케일) · 셀프테스트 9/9 · `tsc` 내 파일 오류 0(전체 752건은 기존 · 예: posts-ja Category) · `npm run build` exit 0(2회) · 74+729 · hreflang 0 · meta-lang 🔴0 · directives 0 · `check:intl-links` 통과 · 산출 HTML lang=fr/ru · title 47/44자 · desc 148/142자 · h1 일치 · 보이는 한글 = 공용 언어 전환 «한국어» 링크 1건(전 로케일 공통)
- `public/sitemap.xml`·`tsconfig.tsbuildinfo`는 빌드 뒤 `git checkout --`로 되돌림(커밋 금지 파일)

## 헤드 요청

1. 🟡 **데이터 의심(이 레인은 못 고침)** — `ps-open-aix` 행 = 2026-11-02~08. 운영사 ru판(pokerstarslive.com/ru/pokerstarsopen/aixenprovence, 10-14 열람)에 «1-8 ноября 2026 г.»와 «2-8 ноября 2026 г.»가 함께 있다. 축제 시작일(1일) vs Main Event(2일) 차이일 수 있음 — `lib/tournaments.ts` 담당이 원문 판정.
2. 🪶 러시아 본토 볼륨은 측정 불가(DFS 40501 재확인) — 필요하면 사장님 Yandex Wordstat(범위 밖).
3. 🪶 fr 통화 기호 위치: 운영사 fr판은 «1 100 €»(뒷붙임), 사이트 보드 정책은 전 로케일 앞붙임. 이 레인은 앞붙임 유지(브리프 §2) — 바꾸려면 공용 정책(전 로케일 영향)이라 헤드 판단.
4. 🪶 배포 후 fr `holdem-tournament`·ru 글에서 `/fr/tournaments`·`/ru/tournaments`로 내부링크 1줄(tr 선례 · 이 레인 범위 밖).
5. 🟡 **공통 공백(다른 로케일 = 이 레인이 못 고침)** — 대회명 괄호 `(October)` 2행(`capt-bregenz-oct` 등)이 PAREN_JA·ZH·HANT·ES·DE·ID·MS·VI·PT·TR·HI·AR **전부**에 없어 그 보드들에서 «CAPT Bregenz (October)»로 영어가 남는다(10-14 B 출력 대조로 발견). fr·ru는 `(octobre)`·`(октябрь)`로 넣었다.

## 보고

### C 마감 (2026-10-14 11:41~12:00 · 새 맥락 · Opus 5.5)

**게이트(최종 빌드 기준)**: `npm run build` exit 0(3회 · 최종은 반영 뒤) · 74+729 · `check:tournaments-i18n` 🔴0(15로케일) · 셀프테스트 9/9 · hreflang 0 · intl-links 통과 · meta-lang 🔴0 · directives 0 · 자수 초과 0 · `tsc` 내 파일 오류 0. `public/sitemap.xml`·`tsconfig.tsbuildinfo`는 `git checkout --`로 되돌림.

**기계 대조**(scratchpad `dump.ts`·`cmp2.mjs` — tsx로 147행 × fr·ru 실제 렌더값): buyin·venue·dateNote 숫자 집합 = EN(단위 환산·천 단위 정규화 후) **불일치 0** · 한글 0 · 쉼표 천 단위 잔존 0 · 일반 공백 천 단위 0 · fr U+202F / ru U+00A0 뒤섞임 0. 링크 대상 = 가이드 링크 0건(브리프 §0 · 신규 링크 없음). fr 문자열의 `? ! : ;` 앞·« » 안쪽 = 전부 U+00A0(렌즈도 바이트 확인).

**화면**(`next start` · Playwright · 390·1440): overflow 0(2폭 × 2로케일 · 반영 뒤 390 재촬영도 0) · 앱 콘솔 오류 0(로컬 `_vercel/insights` 404·gtag 오프라인만) · 조작 = 국가 칩 «France»(147→3)·«Кипр»(147→6) → 상태 «En cours»·«Идут сейчас» → 빈 상태 문구 정상. 캡처 `tmp/screen/frru-c/`·`frru-c2/`(비추적).

**판정표** (렌즈 = Opus 서브 3종 · 아스트라 = `codex exec gpt-6-astra` read-only · 본체가 데이터 행 원문 재확인)

| # | 자리 | 출처 | 판정 | 처리 |
|---|---|---|---|---|
| 1 | ru faqs[0] «три осенние серии» | 편집자·딜러·아스트라 | WRONG — CY 가을 행 4개(`mediterranean-poker-party` 9/17~27 Kyrenia · 종료) | **채택** → «после Mediterranean Poker Party (17–27 сентября, уже завершилась) идут ещё три осенние серии» |
| 2 | fr·ru 대회명 «5th HPT»·«40th Poker Circle Swiss Open» | 편집자 | WRONG — 같은 표의 «7e/7-й Holdem Masters»와 서수 불일치 | **채택**(fr·ru NAME_OVERRIDE만) → «5e/5-й HPT …»·«40e/40-й Poker Circle Swiss Open». 타 로케일 공통 공백 → 헤드 요청 6 |
| 3 | fr heroLead «avant de bloquer tes dates, la page officielle a…» | 편집자 | WRONG(부정사 주어 불일치) | **채택** → «…, vérifie la page officielle — c'est elle qui a le dernier mot.» |
| 4 | ru localBlocks[0] 제목 «Merit и Triton» | 편집자 | WRONG(WPT Prime은 Chamada) | **채택** → «Северный Кипр: WPT Prime и Triton» |
| 5 | fr «won coréen» 단수 | 편집자 | WRONG | **채택** → «wons coréens» |
| 6 | fr·ru FAQ3·통화 블록 «주최측이 공개한 그대로» 전칭 | 아스트라 | WRONG — `triton-shrs-cyprus` 주석 «바이인 범위는 여전히 2차 출처» | **채택** → «dans sa devise d'origine»·«в исходной валюте»(전칭 삭제). pt FAQ에도 같은 문장 → 헤드 요청 7 |
| 7 | fr CITY «Monte Carlo»·«Luzern» | 편집자 | RISKY | **채택** → Monte-Carlo·Lucerne(nameEn에 걸리는 행 없음 — 2차 교열 grep 확인). Barcelone·Séoul 등은 브랜드 위험 → 기각 |
| 8 | ru «Скоро»(2027년 카드에도) | 편집자 | RISKY | **채택** → 필터 «Предстоящие» · 배지 «Предстоит»(390 재촬영 넘침 0) |
| 9 | ru FAQ2 «сыграть в эти турниры» · 답 «В большинство» | 편집자·아스트라 | RISKY | **채택** → «участвовать в этих турнирах» · «В большинстве — да, но не во всех» |
| 10 | fr «ouvre la quinzaine»(12일) | 편집자·아스트라 | RISKY | **채택** → «ouvre le festival» |
| 11 | ru sourceNote 직역 냄새 | 편집자 | RISKY | **채택** |
| 12 | ru SCHEMA_DESC «пригласительному билету» vs 카드 «приглашению» | 편집자 | RISKY | **채택**(용어 통일) |
| 13 | fr·ru 통화 나열이 전부처럼 읽힘 | 편집자·딜러 | RISKY(경미) | **채택** → «par exemple»·«например» |
| 14 | ru «билету на место (seat)» 직역 | 아스트라(PokerStars Live RU FAQ «билет на турнир») | RISKY | **채택** → «входному билету (seat)»(FIELD_RU·FAQ2) |
| 15 | fr 폴백 title «Calendrier tournoi poker 2026 — …» 검색어 냄새 | 아스트라 | RISKY | **기각** — 헤드텀 «calendrier tournoi poker 2026»(390 · 키워드 뱅크) 정확 일치가 목적 · SEO 렌즈 OK |
| 16 | SCHEMA_DESC holdem-masters-9·wpt-seoul · Triton 추천제 · APT Event 0 «미검증» | 아스트라 | RISKY | **기각** — 아스트라 사본에 해당 행이 빠졌던 것(꾸러미 누락). 딜러 렌즈가 원본 `lib/tournaments.ts`·SCHEMA_DESC_EN·KO schemaDescription과 대조해 일치 확인 |
| 17 | Triton SHR $25 000–$150 000 본문 재언급 | 딜러 | RISKY | **유지** — 카드에 이미 나가는 데이터 값 · 2차 출처 여부는 데이터 담당(헤드 요청 7에 묶음) |
| 18 | ru FAQ1 «В этой таблице на Северном Кипре» 어순 | 2차 교열 | RISKY(선택) | **기각** — 반영 전부터 있던 꼴 · 오독 위험 낮음 |
| 19 | 훅 title이 켜지면 calendrier/расписание 빠짐·빌드마다 오감 | SEO | RISKY | **유지** — pt·hi 등 전 로케일 공통 설계 → 헤드 요청 8 |
| 20 | og:image 없음 · x-default 없음 · Breadcrumb 1단 끝 «/» · 연도 전환 미등재 | SEO | RISKY · **EN-먼저**(전 로케일 동일) | 헤드 요청 8 |

**2차 교열**(Opus 1개 · 반영 줄만 13항): 새 WRONG 0 · RISKY 1(#18 기각). 아스트라 반영분(#6·#9 답·#14)은 삭제·격 일치·용어 치환뿐이라 본체가 재판정(NBSP·격변화 확인).

**확인된 사실(딜러·아스트라 독립 대조)**: fr FAQ1 FR 3행·BE 2행·날짜·장소 · Aix 11/2~8 €1 100·€1 000 000 · Prague 12/2~13 PS Open ME €1 100(2~7)·EPT ME €5 300(7~13)·Cup €825·HR €10 300 · ru WPT Prime 10/15~19 Chamada $1 100·$1 000 000 · Triton ONE 11/5~15 미공개 · SHR 11/15~30 «시즌 최종 스톱» · GPM 11/20~30 €35–€600·ME €285·€1 000 000 · GPD 12/2~6 €35–€199 · SCHEMA ₩2 milliards + ₩400 millions = ₩2,4 milliards · KRW 9건 환산 · 날짜 304행 raw 일치(«1er» 8건).

**헤드 요청 추가**
6. 🟡 **공통 공백** — `hpt-5` «5th HPT»·`pcso-40-luzern` «40th Poker Circle Swiss Open»이 ja·zh·es·de·pt·tr 등 NAME_OVERRIDE에 없어 영어 서수로 남는다(fr·ru만 고침).
7. 🟡 pt FAQ(바이인)의 «주최측이 공개한 바이인» 전칭이 `triton-shrs-cyprus`(바이인 범위 2차 출처)와 어긋난다 — 같은 문장을 쓴 로케일 확인. Triton SHR 범위 자체의 공식 확인은 데이터 담당.
8. 🪶 EN-먼저(전 로케일 보드 공통): og:image 없음(summary_large_image인데) · 보드 hreflang에 x-default 없음(계산기·용어집은 있음) · Breadcrumb 1단 URL 끝 «/»(301) · title·h1 «2026» 연도 전환이 update-calendar에 없음 · 훅 title 정책(켜지면 헤드텀 «calendrier/расписание»이 빠짐).

**update-calendar**: B 단락 그대로 유효(ru faqs[0]의 MPP 문장은 과거형 고정이라 만료 없음).
