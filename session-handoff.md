# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## ▶▶▶ 새 세션 START HERE (2026-07-13 심야 — ★tr 완결 = 다국어 Rules 필라 **12개 언어 완결** / 확장 트랙 종료)

> **모드**: 다국어 Rules 필라 확장 **트랙 종료**. hi·tr 모두 Fable5 한도 소진 상태에서 **전 과정 Opus로 수행**(번역 서브에이전트 model:opus 6병렬 + 적대적 QA Opus 2배치)로 완결. 절차=`docs/translation-spec.md` §0.5. ★**"번역=현지 맥락 재구성 포스팅" 마인드셋 명문화됨**(spec "★★ 이 작업의 본질" + 메모리 [[translation-is-contextual-reposting]]) — 앞으로 모든 번역·현지화 작업에 적용.

### ✅ 오늘(07-13 심야) 완료 — tr Rules 필라 6/6 번역 배포 (파일럿11 = 마지막 언어)
브리프(`docs/translation-terms-tr.md` 신규)→Opus 6병렬 번역→조립→빌드/링크(하드, 초기실패 3건 교정)→적대적 QA 2배치(Opus)→교정6→배포. **§13 전수 재검산 0오류**. 커밋=이번 세션.
- **핵심(tr)**: 터키어 고유 족보명(Floş·Kent·Kare·Full·Üçlü·İki Çift·Çift), 숫자=**유럽식 변환**(1,326→1.326·198,000→198.000·2.5→2,5), sen체, 특수문자 ı/İ/ş/ğ/ç/ö/ü. game-order category "초보 가이드"→"rules".
- **★다국어 Rules 필라 = 12개 언어 완결**: en(마스터)+ja·es·pt·de·zh·ar·id·ms·vi·hi·**tr**. **더 이상 남은 언어 없음.**
- **사용자 몫(GSC 색인 6 URL)**: `/tr/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.

### ▶▶ 다음 트랙 후보 (다국어 Rules 확장 종료 → 사용자와 방향 상의)
1. **다국어 2번째 필라 확장** — Rules가 12개 언어 완결됐으니 다음 필라(예: Hand Rankings 클러스터 or Tournament)를 동일 파이프라인으로 언어 확장. (메모리 [[multilang-expansion-12-to-18]]: EN 마스터 완결→필라별 전언어 선행)
2. **전 언어 stale 2편 재번역** — hand-rankings·tournament-vs-cash-game이 **전 12언어에서 stale**(EN 마스터가 6/9·6/11 갱신됨, 번역본은 6/9·6/11 옛버전) + category 한국어 레거시 + tr hand-rankings "head-up" 오타. `check:stale`로 확인. 묶어서 재번역 스프린트 가능.
3. **이미지 트랙** — 실사 11개 Nano Banana(사용자 몫, 아래 07-12 블록) + GSC 추세.
4. **EN 마스터 심화/신규 클러스터** — retrofit 잔여·신규 필라(PKO·Cash Game 등).
- **백로그(마스터 공통)**: all-in 캡 공식 근사·game-order 프리플랍 체크 절대표현·pt 코퍼스/street 통일.

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫). 콘텐츠 트랙과 별개.

---

## ▶▶▶ (이전) START HERE (2026-07-13 밤 — hi 힌디어 Rules 필라 완결 / 다음=tr 터키어 = **마지막 언어**)

> **모드**: 다국어 Rules 필라 확장 마무리. Fable5 한도 소진 상태 → 이번 hi는 **전 과정 Opus로 수행**(번역 서브에이전트 model:opus 6개 병렬 + 적대적 QA Opus 2배치). 절차·함정은 `docs/translation-spec.md` §0.5(파이프라인)+⚑(언어별) — 작업 전 읽을 것.

### ✅ 오늘(07-13 밤) 완료 — hi Rules 필라 6/6 번역 배포 (파일럿10)
브리프(`docs/translation-terms-hi.md` 신규)→Opus 6병렬 번역→조립→빌드/링크(하드)→적대적 QA 2배치(Opus)→교정5→배포. **§13 전수 재검산 0오류**(카드 한 장도 안 틀림). 커밋=이번 세션.
- **핵심결정(hi)**: 데바나가리 산문 + **라틴 영어 포커용어 인라인**(기존 hi 하우스 스타일). 숫자=**영어식 그대로 변환없음**(en·zh·ar·ms 계열; 인도 콤마체계는 lakh 경계에서만 달라 §13 값 전부 동일), 라틴 숫자·`$` 보존. category 한국어"초보 가이드"→"rules"(game-order 재번역분).
- **Rules 필라 = 11개 언어 완결**: en(마스터)+ja·es·pt·de·zh·ar·id·ms·vi·**hi**. **남은 = tr 1개(마지막).**
- **사용자 몫(GSC 색인 6 URL)**: `/hi/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.

### ▶▶ 다음 = 🌐 tr(터키어) — Rules 필라 = **다국어 확장 마지막 언어**
- **tr 착수**: `docs/translation-spec.md` §0.5 파이프라인 그대로(Fable5 리셋됐으면 서브에이전트, 아니면 hi처럼 Opus 직접). 먼저 터키어 웹리서치 → `docs/translation-terms-tr.md` 브리프. **숫자표기 = 터키식(천단위 `.`·소수점 `,` = 유럽식) 확인 필수**(§13 값 변환). 터키어 포커 용어(족보·액션)·문체(sen/siz) 웹리서치.
- **tr 현재 보유 확인 필요**(`ls lib/posts-tr/`): 기존 3편(hand-rankings·game-order·tournament-vs-cash) 있으면 hi와 동일하게 신규5+game-order 재번역.
- **tr masterUpdated**: texas 2026-07-12·game-order 2026-07-02·betting 2026-07-11·blind 2026-07-11·all-in 2026-07-12·showdown 2026-07-12. updated=착수일.
- **백로그**: hi/tr hand-rankings·tournament-vs-cash 재번역(stale·category 레거시)·all-in 캡 근사·game-order 프리플랍 체크 절대표현(마스터 공통)·category 한국어 레거시(전 언어 기존글, 비렌더)·pt 코퍼스/street 통일.

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫). 콘텐츠 트랙(다국어)과 별개.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — Rules 필라 다국어 10개 언어 완결 / 다음=hi 신규세션 → tr)

> **모드**: 다국어 Rules 필라 확장. **Fable5 사용량 한도 소진** → 지금부터 **Opus로 번역·QA 직접 수행**(vi에서 검증). 절차·현지화 함정은 `docs/translation-spec.md` §0.5(파이프라인) + ⚑(언어별 하이라이트)에 전부 기록됨 — **작업 전 그 파일 읽을 것**.

### ✅ 오늘(07-13) 완료 — Rules 필라 5개 언어 추가 배포 (zh·ar·id·ms·vi)
EN 마스터 기준 Rules 필라 6편(신규4+재번역 texas·game-order)을 언어별로: 웹리서치 브리프 → Fable5 페르소나 병렬번역 → 조립 → 빌드/링크(하드) → 적대적 QA 2배치 → 교정 → 배포. **§13 전수 재검산 0오류**.
- **zh**(`bed5db2`) · **ar**(`8e71fee`, RTL) · **id**(`72d6ef2`) · **ms**(`ac820de`) · **vi**(`058325a`).
- **부수 성과**: ar QA가 **EN 마스터 §13 산수오류** 역발견("상위 8%"→실제 4.7%=**상위 5%**) → 마스터+es/pt/zh/ja/de 동시교정(`ee9e7af`). **ar RTL 구조결함 수정**(`fc24a88`, `[dir=rtl]` 미러링, globals.css+renderMarkdown 훅클래스, LTR 무영향).
- **vi 특이**: Fable5 한도로 game-order는 **메인(Opus) 직접 번역** + 적대적 QA도 **메인 Opus 자가검수**(§13 6편 통과, 0🔴).

### ▶▶ 다음 = 🌐 hi(힌디어) — **새 세션에서** (Fable5 리셋 후) → 이후 tr(터키어)
- **현재 Rules 필라 = 10개 언어 완결**: en(마스터)+ja·es·pt·de·zh·ar·id·vi + ms. **남은 = hi·tr 2개.**
- **hi 착수**: `docs/translation-spec.md` §0.5 파이프라인 그대로. 데바나가리 문자 → QA에 스크립트/철자 검수 추가. 숫자표기는 인도 관습 웹리서치로 확인. 각 언어 3편만 보유(hand-rankings·game-order·tournament-vs-cash) → 신규5+game-order 재번역.
- **hi masterUpdated 값**: texas 2026-07-12·game-order 2026-07-02·betting 2026-07-11·blind 2026-07-11·all-in 2026-07-12·showdown 2026-07-12. updated는 착수일.
- **번역/QA 주체**: Fable5 리셋됐으면 서브에이전트, 아니면 메인 Opus 직접.
- **백로그**: all-in 캡 공식 근사(마스터 공통)·game-order 프리플랍 체크 절대표현(마스터 공통)·category 한국어 레거시(전 언어, 비렌더)·pt 코퍼스/street 통일.

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫). 콘텐츠 트랙(다국어)과 별개.

---

## ▶▶▶ (이전) START HERE (2026-07-12 밤 — KO 이미지 코드렌더 85개 교체·배포됨 / 다음=실사 15개 Nano Banana + GSC)

> **모드**: 이미지 교체작업 자동(Fable5). 코드렌더 트랙 종료 → 남은 건 **실사(사용자 Nano Banana)** + 사용자 GSC.

### ✅ 오늘(07-12) 완료 2 — KO 이미지 §13 코드렌더 85개 교체·배포
`defects.md`의 KO 결함(EN 23개 제외) 전량을 §13-안전 HTML 코드렌더로 재생성·배치. Fable5 10에이전트 병렬 저작 + 메인 렌더/전수 육안검수/배치. **85개 전부 통과**(카드 유효·중복랭크0·한글철자·<60KB). **404 8개도 신규생성**(bluffing-* 4·holdem-position-* 4, posts.ts 본문). 빌드 ✅ 199 pages·에러0. 파이프라인=`scripts/gen-*.html`+`_GEN_SPEC.md`+`render-gen-batch.mjs`(인자필터). 상세=WORKLOG 2026-07-12.

### ▶▶ 다음 = 🎨 실사 11개 Nano Banana (사용자 몫, 나머지) + GSC
`docs/image-audit/photo-prompts-nano-banana.md`에 **코드렌더 불가 실사** 영어 프롬프트 정리(§13·워터마크 반영). apt-incheon처럼 Nano Banana 생성 → `public/images/`에 파일명 그대로 배치 → 사용자가 파일 경로 주면 메인이 webp 1200×675 변환·§13검수·커밋.
- **✅ 4개 완료(07-12, 커밋 f114c67)**: apt-jeju-foodcourt · apt-jeju-classic-2026-guide-hero · apt-jeju-2026-fall-guide-hero · apt-jeju-cu-store(사용자 촬영 GS25). 변환=`sharp .rotate().resize(1200,675,cover)` + 품질 자동(≤60~80KB).
- **⏳ 남은 11개**: apt-jeju-classic-2026-hero · apt-jeju-main-event-winner · apt-jeju-nau-cafe · apt-jeju-satellite-strategy · pub-legal-card-table · pub-legal-casino-floor · beginner-mistakes-korea-pub · bubble-faq/summary/table · wsop-2026-tournament-guide-hero · 3bet-sizing. (여러 장 한번에 뽑으면 Gemini가 헤매므로 시간날 때 조금씩 — 사용자 방침.)
- 이후 콘텐츠 트랙 복귀(감글 retrofit·다국어 확장, 아래 이전 블록).

---

## ▶▶▶ (이전) START HERE (2026-07-12 — EN 이미지 교체 배포됨 / 다음=KO 이미지 전수교체)

> **모드**: 이미지 교체작업은 사용자가 **자동(Fable5)** 재지시(2026-07-12, [[retrofit-full-automation]] 참고 — 작업별 on/off). KO 이미지 교체도 자동으로 이어가면 됨.

### ✅ 오늘(07-12) 완료 — EN 이미지 §13 결함 교체 배포 (커밋 a7d58ce)
전 사이트 이미지 전수감사(Fable5 18배치, `docs/image-audit/defects.md`, 결함~117/310) → **EN 사용 결함 24개 중 23개를 코드렌더 인포그래픽으로 교체**(§13 육안검수·alt 30개 정정). 상세=WORKLOG 2026-07-12.
- **⚠️ EN 미해결 1**: `apt-incheon-2026-guide-hero`(여행 실사) 코드렌더 불가 → 실사/AI포토 필요.

### ▶▶ 다음 = 🖼️ KO 이미지 전수교체 (내일 예정, 자동)
`defects.md`의 **KO 결함 대다수**: 텍스트 인포그래픽(깨진 한글·CS노트유입·"No entry!"·"[cite]"·중복블록) — `flush-vs-straight-c*`·`beginner-mistakes-*`·`pub-*-infographic`·`pot-odds-*`·`holdem-3bet-*`·`check-raise-*`·`small-blind-*`·`kk-*`·`pocket-aces-*`·`overbet-*`·`rules-*` 등 + **깨진 404 8개**(lib/posts.ts 레거시: bluffing-*·holdem-position-*). 코드렌더 파이프라인(`scripts/gen-*.html`+`render-gen-batch.mjs`) + 한글 텍스트는 HTML이라 정확. 404는 생성 or 참조제거.

### ✅ (완료) retrofit 스프린트 11편 배포 (커밋 019de04→ba737c0)
감글 retrofit: #1 starting-hands-chart(PDF) · #2 positions×position-play · #3 tournament×vs-cash · 2차웨이브 blind-meaning·betting-actions·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board. 상세=WORKLOG 2026-07-11.
- **사용자 몫(GSC 색인 11 URL)**: `/en/blog/`+ starting-hands-chart·positions·position-play·tournament·tournament-vs-cash-game·blind-meaning·betting-actions·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board.

### ✅ retrofit 스프린트 전량 배포 (11편, 커밋 019de04→ba737c0)
감글 retrofit: **#1** starting-hands-chart(PDF차트) · **#2** positions×position-play · **#3** tournament×tournament-vs-cash-game · **2차웨이브** blind-meaning·betting-actions·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board. 전부 뱅크 재타깃+카니발 분리+§13 전수검증(40+ 핸드예시 brute-force)+제3자 QA. 상세=WORKLOG 2026-07-11.
- **사용자 몫(GSC 색인 — 11개 URL)**: `/en/blog/` + holdem-starting-hands-chart·holdem-positions·holdem-position-play·holdem-tournament·holdem-tournament-vs-cash-game·holdem-blind-meaning·holdem-betting-actions·holdem-flush-vs-straight·holdem-tiebreak-rules·holdem-split-pot-rules·holdem-reading-the-board.

### ▶▶ 다음 최우선 = 🖼️ 사이트 전수 이미지 §13 감사 (이번 스프린트 핵심 발견)
레거시 **AI생성 실사에 불가능 카드·깨진 클록글자·오카운트가 광범위**. 확인된 것만: `rules-texas-holdem`(뒤섞인 카드, 다수글 히어로/썸네일)·`tournament-table-action`(K♣5핏+"TOUNG LEVEL", betting-actions 등)·`icm-chips-not-money-real`(뭉개진 A/K)·`holdem-bubble-table`(블랙잭). **전 이미지 Read 개봉→결함목록→HTML인포그래픽/실사 교체.** 파이프라인 확립됨(`scripts/*-hero.html`+render-*.mjs, 카드렌더 CSS). 이건 수동/자동 사용자와 상의.
### 이후 대기(보류)
신규클러스터(PKO/Tournament Types·Cash Game 7필라)·이벤트가이드 4편 retrofit·KO 구버전 업데이트.

## (완료된 이전 진행표) 새 세션 START HERE (2026-07-11 — retrofit 스프린트: #1·#2 배포됨 / #3 진행 중, 완전자동)

> **완전 자동화 모드**(사용자 지시 "내 의견 묻지 말고 배포까지, 자리비움"): 게이트 없이 배포까지 자동, 🔴 자동해소불가·빌드실패만 멈춤. 메모리 [[retrofit-full-automation]]. 역할: 메인(Opus)=게이트없음·빌드·PDF/이미지렌더·git / Fable5 서브에이전트=초안·리서치(뱅크매핑)·§13팩트체크·독립QA·이미지HTML저작. **검수는 초안 쓴 에이전트 말고 제3 에이전트로.** 카니발 쌍은 한 커밋 배포.

### ✅ #1 배포 — `holdem-starting-hands-chart` (커밋 `019de04`)
뱅크 기반 전면 리라이트, H2 10개(good/best/chart/6-max/GTO/worst/printable PDF/quiz/FAQ8). §13 전수 CORRECT+6곳 교정. 인쇄용 PDF 신설. 상세=WORKLOG.
### ✅ #2 배포 — `holdem-positions`(A)×`holdem-position-play`(B) (커밋 `2ec5bb8`)
카니발 분리(A=좌석·이름 / B=in-out 전략). §13 전수+교정. 제3 QA가 **B 이미지 3개 §13 결함**(hero CO↔BTN 뒤바뀜 등) 적발→HTML→Playwright→webp 교정 재생성. 상세=WORKLOG.
- **사용자 몫(GSC 색인)**: `/en/blog/holdem-starting-hands-chart`·`/en/blog/holdem-positions`·`/en/blog/holdem-position-play`.
- **🟡 잔여**: #2-A 본문이미지 재사용(클러스터-고유 규칙, 비블로커).

### ▶▶ #3 진행 중 — `holdem-tournament`(A 허브) + `holdem-tournament-vs-cash-game`(B)
매핑 완료(뱅크 `en-tournament.md`·`en-cash-game.md`). 카니발: A=구조/종류(freezeout·PKO·satellite·deepstack 정의 흡수)/진행/입장, B=vs캐시 비교+캐시게임 기초. 첫링크 A=B비교·B=A허브. **B category 버그 "토너먼트"→"tournament" 교정**. ICM/bubble/short-stack/이벤트가이드/rake는 route-out(중복금지). `:::pillarhub` 렌더러에 없음—`:::readnext`+Related로 로드맵.

### 📌 이후 대기
2차 웨이브=Rules/족보 감글(betting-actions·blind-meaning·flush-vs-straight·tiebreak·split-pot·reading-board, 기존 뱅크 en-can-you·en-what-is-a·en-what-beats로 커버). **제외(보류)**: 신규 클러스터(PKO/Tournament Types·Cash Game 7필라)·이벤트가이드 4편.

### 🔧 실무 메모
- Fable5 서브에이전트는 이 세션에서 **셸 사용 불가**(denied) → 빌드·PDF렌더·git·이미지압축은 전부 메인이 실행. 생성/저작/분석만 Fable5.
- PDF 재생성: `node scripts/render-starting-hands-pdf.mjs`(Playwright A4). `/downloads`는 PDF 다운로드 선례 확립됨(webp정책은 이미지 한정).
- **인포그래픽 재생성 파이프라인 확립**(커서 대신): Fable5가 자립형 1200×675 HTML 저작(scripts/pos-*.html) → `node scripts/render-pos-infographics.mjs`(Playwright 스크린샷+sharp webp, 19~25KB) → Read로 육안검수(철자·§13·잘림) → public/images 교체. 온브랜드 다크 인포그래픽·좌석맵 다이어그램에 유효.

---

## ▶▶▶ (이전) START HERE (2026-07-11 심야 — EN 키워드뱅크 재구축 + 감사, 다음=감글 retrofit 스프린트)

> **이번 세션은 코드/포스트 변경 없음.** 전량 준비작업(전략확정 + EN 감사 + lowfruits 키워드뱅크 재구축).
> ⚠️ **작업트리 dirty**: `docs/keyword-bank/` 4파일 신규·수정(미커밋). 다음 세션에서 스프린트 결과와 함께 커밋하거나, 먼저 커밋할지 판단.

### 🎯 큰 그림 (왜 이 작업을 하나)
EN 블로그를 **18개 언어(현 12→18) 전부 1티어 현지어로 번역**할 계획. EN이 번역 마스터라 **키워드·사실 완벽해야** 함. 그래서 번역 전에 **① EN 전면검수(Master Lock) → ② 필라1 전언어 선행(색인 시계) → ③ 언어별 완결 클러스터** 순. (상세 메모: `multilang-expansion-12-to-18`)

### ✅ 이번 세션 완료
1. **EN 감사(audit)** — 42개 EN 글 분류: **17개 "감(by-feel)"**(2026-07-03 키워드뱅크 시스템 이전 글) / 19 데이터기반 / 6 SERP대체. 이벤트가이드 4편은 감이지만 **retrofit 대상 아님**(고아링크만).
2. **키워드뱅크 재구축** — 과거엔 **트레일링(`X *`)만** 수확 → blind spot 발견(예: `good starting hands` 2400 누락). **위치 변형(트레일링+중간)**으로 재수확·박제:
   - 🆕 `docs/keyword-bank/en-starting-hands.md` (238+57)
   - 🆕 `docs/keyword-bank/en-position.md` (94+348+110)
   - 🔄 `docs/keyword-bank/en-tournament.md` 보강 (PKO·freezeout·satellite·vs-cash 클러스터 = 트레일링이 놓친 광맥)
   - 🆕 `docs/keyword-bank/en-cash-game.md` (177+115+205, +Cash Game 7필라 후보 근거)
3. **메모리 갱신**: `keyword-harvest-wildcard-positions`(수확 규칙) · `multilang-expansion-12-to-18`(확장전략) · `content-workflow-pillar-sprint`(모델=Fable5로).

### ▶▶ 다음 세션 할 일 — 감글 retrofit 스프린트 (1편씩 품질집중)
각 글마다: **① `.cursor/rules/posting.mdc` + 현재 글 읽기 → ② 뱅크 기반 재설계 각도(seoTitle/H2/FAQ)를 사용자에게 게이트(한국어 2~3줄) → ③ 초안 → ④ §13 핸드검산(적대적 서브에이전트) → ⑤ 빌드 → ⑥ 이미지 커서.**

**우선순위(뱅크 완비된 것부터):**
1. **`holdem-starting-hands-chart`** ← 1번타자(감사 최우선·피링크6·뱅크 제일 두꺼움). 헤드=`best/good starting hands` 2400×2·LDA24, `poker starting hands chart` 1300·LDA21. 뱅크: `en-starting-hands.md`. (주의: nicknames·probability는 각각 Glossary·probability로 라우팅)
2. **`holdem-positions`(좌석·이름) + `holdem-position-play`(전략)** ← 뱅크 `en-position.md`가 둘로 갈라줌. 헤드 3600×LDA22. 보석: seat numbers LDA1·hijack LDA7·why-position-matters LDA8.
3. **`holdem-tournament`(허브) + `holdem-tournament-vs-cash-game`** ← 뱅크 `en-tournament.md`·`en-cash-game.md`. 허브에 PKO/freezeout/satellite 정의 FAQ 흡수.

**신규 클러스터 후보(감사 중 발견, 나중):**
- "Poker Tournament Types" 또는 "PKO/Bounty Strategy"(freezeout·satellite·PKO·deepstack — 트레일링이 놓쳤던 광맥)
- Cash Game 7번째 필라(근거는 있으나 볼륨 후순위 → 보류)

**2차 웨이브(신규 시드 불필요 — 기존 뱅크로 커버)**: Rules/족보 감글(betting-actions·blind-meaning·flush-vs-straight·tiebreak·split-pot·reading-board)은 기존 `en-can-you`·`en-what-is-a`·`en-what-beats`(전부 mid라 blind spot 없음)로 retrofit.

### 📌 참고
- lowfruits 수확 규칙(다음에도 적용): 트레일링+중간 두 위치 / 넓은 토픽 앞`*`은 지역노이즈→Questions·PAA 탭 / **Analyzed만 export**(AVL·Related 무시) / 판정 LDA≤20 매우승산·20~35 좋음. (메모 `keyword-harvest-wildcard-positions`)
- xlsx 파싱: inlineStr 방식 → PowerShell `System.IO.Compression`으로 sheet1.xml 직접(A=Keyword,D=DA,E=WeakSpot,G=Volume).

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-11 밤 — 펍 허브 완성·배포됨)

**작업트리 clean, 전부 배포됨.** 상세는 `WORKLOG.md` 2026-07-11.

### ✅ 이번 세션 완료(배포됨)
- 🟢 **펍 정보 필라 `holdem-pub-guide` 신설** — 흩어진 펍 글을 잇는 관문(뭐하는곳→비용→합법→지역찾기). `:::pillarhub`로 첫방문·합법·**/pub**·홍보신청 묶음. 첫 내부링크=`/pub`. §13급 적대적 팩트체크 교정후 PASS(이용권보상·판돈레이크·"돈딴다" 자기모순 등 🔴4건 교정). 히어로 커서 실사(1200×675·25KB·워터마크 검수 통과).
- 🔗 **`/pub` ↔ 필라 상호링크**(인덱스+지역 페이지 역링크, 클러스터 3편 역링크).
- 🧱 **선별 매장 틀**(`lib/pubs.ts` `featuredPubs?` 필드 + 지역 페이지 카드/CTA 렌더, 비면 플레이스홀더 폴백). "지역당 1곳 선별·집중" 반영. Playwright 디자인 검수 통과. **데이터는 접수되면 채움**(접수 채널=holdemmaster.kr@gmail.com).
- 🩹 **라이브 2편 교정**(사용자 승인): `holdem-pub-legal`·`holdem-pub-first-visit-guide` "이용권 보상=합법" 프레임→음료·상징적 보상(2024 지침 위법소지 해소).
- 빌드 ✅ 57 posts.

### ▶▶ 즉시 할 일 (사용자 몫)
1. **GSC 색인**: `/blog/holdem-pub-guide` 색인 요청 + 재크롤 `/blog/holdem-pub-legal`·`/blog/holdem-pub-first-visit-guide`·`/pub`.
2. **실 매장 접수되면** → `lib/pubs.ts` 해당 지역 `featuredPubs`에 채우기(틀·렌더 완비, 데이터만 추가).
- ※ **발행일=2026-07-11(오늘 첫·유일 포스팅)**. 전략·블라인드스틸·임플라이드·펍소개 4편은 **어제(2026-07-10) 작업**(이전 세션이 07-11로 잘못 라벨링·date 기재, 실제 커밋 07-10). → 다음 세션에서 그 4편 `date` 07-10 정정 여부 판단.

### 📌 후속 과제(별도 세션)
- **`holdem-pub-legal` 법적 근거 전면 재정비**: 현재 게임산업법 제28조 중심 → 실제 2024 프레임(형법 도박공간개설죄 + 관광진흥법 카지노 유사행위 금지 + 청소년 유해업소 지정)으로. 팩트체크 필수.
- 얇은 허브 마저: 확률→`holdem-drawing-odds`(KO) / 포지션→`홀덤 포지션 종류`(카니발 주의).

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-11 마감 — 필라 보강 4편 + 펍 B2B 자산)

**작업트리 clean, 마지막 커밋 `46c5b14`, 전부 배포됨.** 상세는 `WORKLOG.md` 2026-07-11.

### ✅ 오늘 완료(배포됨)
- 🔴 **`holdem-strategy`** — 비어있던 '전략' 필라 신설 + 고아 8편 클러스터링(1순위 완료)
- 🟡 **`holdem-blind-steal`** — 포지션 허브 2→3편(GSC 기회키워드)
- 🟡 **`holdem-implied-odds`** — 확률 허브 3→4편(리버스 임플라이드 §13)
- 📣 **`holdem-pub-promotion`** — 홀덤펍 사장 대상 무료 소개 신청 B2B 안내(지역당 1곳 선별·집중 원칙, 연락=`holdemmaster.kr@gmail.com`)
- 🛠️ 블로그 하단 네비 폴백(최신/최고참 글 빈칸→전체글 링크, KO+다국어)
- 💰 `docs/pub-promotion-monetization-plan.md` — 유료 티어 기획서(지역 독점 레버)
- 전부 §13/적대적 팩트체크+법률 컴플라이언스 검수 통과. **하루 4편이라 대량발행 주의 → 나머지 분산.**

### ▶▶ 내일 할일 (우선순위)
1. **🟢 펍 허브 완성** (오늘 논의·설계 완료, 실행만 남음):
   - ① **blog 펍 정보 필라 `holdem-pub-guide` 신설**(홀덤펍 정보 관문) → `:::pillarhub`로 3편 묶기(첫방문·합법성·홍보신청)
   - ② **/pub(지역 디렉토리 허브)과 상호링크** — 펍 필라 첫 내부링크=/pub, /pub→펍 필라 역링크
   - ③ /pub/[지역] 페이지에 **선별 매장 채우는 틀** 마련
   - ※ `/pub`은 이미 색인된 "거래형 지역 허브"(10개 지역), blog 정보 필라가 없어 반쪽 상태. 이걸 메우는 작업. (홀덤펍 사장 홍보 신청 접수되면 여기 채움)
2. **🟡 얇은 허브 마저**: 확률→`holdem-drawing-odds`(4→5편) / 포지션→`홀덤 포지션 종류`(카니발 주의)
3. **사용자 몫(GSC 색인)**: 오늘 4편 URL 색인 요청 — `/blog/holdem-strategy`·`/blog/holdem-blind-steal`·`/blog/holdem-implied-odds`·`/blog/holdem-pub-promotion`
4. **펍 소개글 후속(선택)**: 접수 채널 구글폼 전환·텔레그램 보조·커스텀 히어로 이미지(상세 아래 3순위 블록)

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-10 — 사이트 UX/구조 최적화 세션)

**작업트리 clean, 마지막 커밋 `e9e12c4`, 전부 배포됨(push 완료).** 상세는 `WORKLOG.md` 2026-07-10 최상단.

### ✅ 이번 세션 완료(배포됨) — 포스팅 아님, 사이트 유저친화 구조 최적화
- **A(독서 경험)**: 읽기 진행바(형광무지개 5px, 블로그 글 상단, KO+다국어) · 이전/다음 글 정렬 피드와 일치 · li 폰트 통일. 커밋 `372d773`.
- **홈피드 탐색**: 데스크톱 홈탭 우측 ↑/↓ 화살표(유튜브식 `data-feed-card` 글 카드 이동) · "맨 위로" 에스컬레이터식(`lib/smooth-scroll.ts`). 커밋 `c768e8d`.
- **B-1 필라 허브 구조 신설**: `:::pillarhub[제목]` 재사용 디렉티브(`renderMarkdown`, KO+다국어 공용) — 골드 번호배지+세로 연결선+클릭 스텝 카드, 크림 카드+hover pop-out. **6개 KO 필라에 학습 로드맵 삽입 완료**(커밋 `035078b`+`e9e12c4`).

### ▶▶ 새 세션 = 필라-클러스터 보강 (이 분석 그대로 전부 실행)
**현재 상태: 52편 중 31편(60%)이 6개 허브로 조직됨. 아래 우선순위대로 나머지 공백 메우기.**

**현재 필라-클러스터 지도(허브 6):**
| 필라 허브(slug) | 클러스터 | 밀도 |
|---|---|---|
| 족보 `holdem-hand-rankings` | 헷갈리는TOP7·플러시vs스트·타이브레이크·스플릿팟·vs7포커 | 🟢5 |
| 규칙 `holdem-rules` | 게임진행·블라인드·스몰블라인드·체크·초보실수10 | 🟢5 |
| 프리플랍 `holdem-starting-hand-range` | 언제폴드·레이즈·AK오프·AA·KK | 🟢5 |
| 토너먼트 `holdem-tournament-how-to-enter` | vs캐시·바이인·일정·버블·ICM·세금 | 🟢6 |
| 확률 `holdem-probability` | 아웃츠·팟오즈·확률계산 | 🟡3 |
| 포지션 `position-is-everything-in-holdem` | 버튼·스몰블라인드 | 🟡2 |

**보강 우선순위(새 세션 실행 목록):**
1. ✅ **완료(2026-07-11) — 베팅·공격 전략 허브 신설**: 신규 KO 필라 `holdem-strategy` 발행(비어있던 전략 필라, EN만 있던 슬러그 KO 신설). `:::pillarhub`로 **고아 8편 클러스터링**(레인지·3벳·C벳·체크레이즈·밸류벳·블러핑·오버벳·**뱅크롤 포함**). §13 PASS + 적대적 팩트체크 필수 5건 교정. 클러스터 8편 역링크 완료. 빌드 53편. **⏳ 남은 것=이미지 2개(hero+decision) 커서 생성 → 빌드·커밋·푸시·GSC 색인 `/blog/holdem-strategy`. 아직 미배포.** (상세 WORKLOG 2026-07-11)
   - ~~고아 7편을 묶을 신규 허브 글~~ → 위로 대체 완료.
2. **🟡 얇은 허브 채우기** (진행 중): ✅ **`holdem-blind-steal` 발행·배포**(포지션 허브 2→3편, 이미지 완료). ✅ **`holdem-implied-odds` 발행**(확률 허브 3→4편, 팩트체크 치명 §13 1건 교정, ⏳이미지 2개 대기·미배포). GSC 색인 두 글 필요. **남음**: 확률→`드로잉 오즈` KO편 / 포지션→`홀덤 포지션 종류`(포지션 필라와 카니발 주의). (상세 WORKLOG 2026-07-11)
3. **🟢 펍 허브 승격**: 현 2편(펍 첫방문·합법)→클러스터 몇 편 추가 시 7번째 허브. (펍=한국 검색 강점)
   - ✅ **`holdem-pub-promotion` 발행·배포**(2026-07-11): 홀덤펍 사장 대상 **무료 소개 신청** B2B 안내글. "홀덤펍 홍보/마케팅/입점" 무주공산 키워드 선점 + 펍 콘텐츠 씨앗. Fable5 경쟁사·법률 리서치 + 컴플라이언스 검수(필수 6건 반영, 총판=배제선언만·합법 인증프레임 해체). 상세 WORKLOG 2026-07-11.
   - **⚠️ 사용자 확인(먼저 처리 권장)**: ①연락처=✅**브랜드 전용 `holdemmaster.kr@gmail.com`으로 교체 완료**(개인 Gmail 노출 해소). (선택)추후 구글 폼으로 전환 시 사업자등록번호 필수화로 스팸 1차 필터 가능. 텔레그램 핸들 있으면 보조 기입. ②히어로 커스텀 이미지 교체(현재 `holdem-raise-how-much-pub.webp` 재사용). ③GSC 색인 `/blog/holdem-pub-promotion`. ④실제 소개 펍이 쌓이면 펍 허브로 승격.
   - 📌 **하루 대량 발행 주의**(사용자 지시): 오늘 4편(전략·블라인드스틸·임플라이드·펍소개) 발행 → 대량 양산 신호 방지 위해 남은 글은 내일 이후로 분산.
   - 💰 **유료 티어 기획서 완비**: `docs/pub-promotion-monetization-plan.md` — 지금은 무료로 판 키우고, 매장 20~30곳+유입실적 쌓이면 무료 기본 유지+전용소개글/상단노출/배너를 '광고 표기'와 함께 유료화. 발행글이 이미 이 전환을 미리 설계함(구조 변경 불필요). **미래 온라인(해외 라이선스) 사업은 이 clean 사이트와 별도 도메인/법인으로 분리**(사용자 방향 확인됨).
4. **이벤트 가이드 9편**(WSOP·APT·APPT…): 로드맵 아님=일정 인덱스 성격 → 토너먼트 허브에 이벤트 섹션 링크 or `/tournaments` 페이지 활용.
5. **EN 필라 6개**: 동일 `:::pillarhub` 적용(이번엔 KO만 함). EN 클러스터 맵은 `docs/en-blog-pillar-cluster-map.md` 참조.
6. **(B-2, 별개 트랙) 사이트 내 검색**: 94편이라 가치. SEO 유입 사이트라 우선순위는 위 콘텐츠 보강 다음.

### 🛠️ 새 세션 워크플로우
- **`:::pillarhub` 추가는 이제 기계적**: 허브 글에 아래 블록만 넣으면 렌더됨(디렉티브·CSS 완비). 위치=도입/핵심 다음·심화 앞. 예:
  ```
  ## [주제] 완전정복 로드맵
  [도입 한 문장]
  :::pillarhub[로드맵 제목]
  /blog/slug | 라벨 | 한 줄 설명
  :::
  ---
  ```
- **신규 허브 글 작성 시**: 반드시 `.cursor/rules/posting.mdc` + §13(핸드검산) 준수. 초안=메인(Claude) 1편 집중, 팩트체크=적대적 서브에이전트, 이미지=커서. 클러스터 slug는 넣기 전 **실존 grep 필수**(깨진 링크 0).
- **에이전트 = Fable 5**(사용자 지정). 검수·빌드·커밋은 메인. 배포 전 로컬 dev 확인 후 push, build 시 dev 먼저 종료(.next 충돌).
- **태그는 제외 확정**(얇은콘텐츠·카니발·크롤낭비=상위노출 역효과, 사용자 합의). TL;DR 상단요약 표준화(94편)는 별도 세션.

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-09 밤 — 계산기 보강 세션)

**작업트리 clean, 마지막 커밋 `af8ff9c`, 전부 배포됨(push 완료).** 상세는 `WORKLOG.md` 2026-07-09 최상단 참조.

### ✅ 이번 세션 완료(배포됨) — `/calculator` 시그니처 자산화 1·2단계
- 목표: "ICM 계산기" GSC 1페이지 5~6위 → **Top3**. Fable5 기획(콘텐츠/SEO + 디자인/모바일) 후 실행.
- **①색인 기술공사**: KO 계산기 서버 metadata 부재로 **canonical이 루트로 오염**되던 것 수정(page.tsx 서버 metadata+JSON-LD+ko↔en hreflang, title 선두 "ICM 계산기"). **← 5~6위 정체 최유력 원인 제거, GSC 재크롤 시 개선 기대**.
- **②디자인 세련화+모바일**: 크림 사이트 + 도구 패널만 `.calc-console` 다크 스코프(대비버그 해소, 데이터색 보존). 모바일 360/390 오버플로우 0.
- **③ICM 콘텐츠**: 버블 워크드 예시·ICM딜vs칩찹·FAQ 8개(FAQPage 스키마). 수치 전부 computeICM §13 검산.

**★1·2·3단계 + EN 이식까지 전부 완료·배포됨(마지막 `5abe4a1`).** 계산기 보강 프로젝트 종료. 남은 건 사용자 GSC 작업 + 배포 후 관찰.

### ▶ 내일 할 일 / 관찰
1. **GSC(사용자 몫)**: `/calculator`·`/en/calculator` URL 검사 → **색인 재요청**(canonical/title/스키마 교정 반영). 2~4주 "ICM 계산기" 순위·"ICM 딜" 신규쿼리 발생 추적.
2. **관찰 지표**: "ICM 계산기" 5~6위→top3 진입 여부, "ICM 딜"·"칩찹" 신규 노출, FAQ/워크드예시가 롱테일 흡수하는지. 효과는 재크롤 후 2~4주.
3. (선택) `scripts/mobile-audit.mjs` 계산기 지원 파라미터화(현재 EN블로그 전용) — 이번엔 직접 overflow 측정으로 대체함.
4. **다음 콘텐츠**: ✅ **EN `holdem-icm` 발행 완료**(Tournament 필라, 계산기 연동 마스터, 팩트체크 PASS, 이미지2+워터마크). GSC 색인 `/en/blog/holdem-icm` 필요. → 다음 후보: EN `holdem-bubble`(ICM과 짝·EN 공백)·`what-beats-what`(HandRankings 6/6 완성)·Strategy 심화. lowfruits 활용법 확립됨(사용자 export→`docs/keyword-bank/en-*.md`).

---

## (이전) START HERE (2026-07-09 — 영어 도구 + SEO 세션)

**작업트리 clean, 마지막 커밋 `4cef9bf`, 전부 배포됨.** 상세는 `WORKLOG.md` 2026-07-09 참조.

### ✅ 이번 세션 완료(배포됨)
- 영어 도구 5종 신설(`/en/calculator·quiz·hand-chart·glossary·ranking`), 채팅 툴배너 i18n 버그 해소.
- Fable5 4에이전트 전수검토 → 계산기/핸드차트/퀴즈/용어사전 오류 수정(EN+KO 동일버그).
- poker-eval 휠 스트레이트 버그 수정. 커뮤니티 탭 URL 동기화(뒤로가기 복원).
- **카니발 해소**: `/hand-chart`(KO+EN)·`/en/glossary` noindex(블로그 필라 소유). 계산기·quiz·ranking·KO glossary는 색인 유지. → 규칙은 메모리 `seo-tool-vs-blog-cannibalization` 따를 것.
- 워터마크 규칙 = 커서 프롬프트에 지시 포함 방식.

### ▶ 내일 할 일 / 관찰
1. **GSC**: `/hand-chart` 삭제요청 제출됨 → "삭제됨" 상태 확인만. (EN 도구 2개는 신규+noindex라 조치 불필요)
2. **관찰(수 주)**: noindex한 hand-chart/glossary 키워드를 블로그 필라가 넘겨받는지 GSC 추적. **계산기 "ICM 계산기" 이미 1페이지 5~6위 = 시그니처 자산 후보**(top3 노려볼 만함, 콘텐츠 보강 여지).
3. **영어 랭킹**(`/en/ranking`): 배너 숨김+페이지 존재. 재노출 여부 미정(제휴/법적 성격, 시장 맞춤 필요시).
4. **다음 콘텐츠**: 새 영어 포스트(키워드뱅크) or 필라 심화. 도구는 5종 완비.

---

## (이전) START HERE (2026-07-06 밤 v4 — 어드민 구축 세션)

**이 세션 = 콘텐츠가 아니라 커뮤니티/어드민 기능 작업이었음.** 작업트리 clean, 마지막 커밋 `6389245`.

### ✅ 이번 세션 완료(배포됨)
1. **글쓰기 크래시 수정**(`f74236a`) — community-client의 `FONT_SERIF/FONT_SANS` TDZ(선언이 WriteModal 아래) → 위로 이동.
2. **어드민 v1 구축**(`e0698b8`) — `/admin` 신설. 게이트=env `ADMIN_EMAILS`(현재 `fire7964coco@gmail.com`) + service-role RLS 우회. 탭 5개: 대시보드(통계)·회원(검색·상세·뱃지)·모더레이션(글/댓글/채팅 삭제)·팝업(CRUD+ON/OFF)·이벤트(추첨 수동실행 테스트).
   - **파일**: `lib/admin.ts`(requireAdmin/isAdminEmail), `lib/supabase/admin.ts`(기존 createAdminClient 재사용), `lib/event-draw.ts`(performDraw 크론·어드민 공유), `app/admin/{page,admin-client,actions}.tsx`, `components/site-popup.tsx`(전역 팝업 표시, layout에 마운트), `supabase/schema.sql`(popups 테이블 — **DB에 이미 실행 완료**).
3. **★event_id 버그 해결**(`e0698b8`) — `CURRENT_EVENT_ID` 하드코딩(2026-W26 고정) 제거 → `getCurrentEventId()`(ISO 주차 자동계산)로 앱·크론 자동 동기화. 이제 회차 수동갱신 불필요. (5곳 교체: event-config/actions/community-client/event-tab/cron)
4. **골드 버튼 라벨 안 보이던 버그**(`af2d3a8`) — btn()이 배경 transparent인데 color를 다크로 덮어써 라벨 안 보임 → primary 버튼에 `background: GOLD` 추가.
5. **로그아웃 UX**(`4d614cd`→`6268a90`) — 서버액션 폼 → 브라우저 클라이언트 로그아웃 + `setCurrentUser(null)` 옵티미스틱. 클릭 즉시 로그인버튼으로 바뀜(새로고침 전까지 로그아웃버튼 남던 문제 해결). 로그인 링크에 active:scale 눌림감.
6. **회원 탭 로그인 시각**(`6389245`) — 각 행에 "로그인 [시각]" + 최근 로그인순 정렬 + 24h내 로그인 🟢 표시. (`last_sign_in_at` 기준 = 이력, 실시간 접속 아님)

### ⚙️ 사용자가 완료한 인프라 설정
- **Vercel env**: `ADMIN_EMAILS` 추가 완료. `SUPABASE_SERVICE_ROLE_KEY`(값에 한글 섞여 깨져있던 것 → 새 `sb_secret_...` 키로 교체 완료)·`CRON_SECRET` 존재. → `/admin` 정상 작동 확인(회원5·글2·채팅1).
- **Supabase**: `popups` 테이블 생성 완료. 추첨 테스트 정상(비트코인 블록해시 방식) 확인 후 테스트 회차 삭제함.

### ▶ 내일(새 세션) 할 일 = 접속 IP 로그 (A안 확정)
**목적**: 다계정 어뷰징 적발(특히 로또 이벤트 상금 사기). 사용자 예전 사이트처럼 IP 접속기록 누적.
**A안(확정·가벼움)**:
1. `access_logs` 테이블 신설 (`id, user_id, ip, user_agent, created_at`) + RLS(본인 insert / 어드민 service-role read). **SQL은 사용자가 실행.**
2. **IP 기록**: 로그인 시 + 방문 요청 시 **직전 IP와 다르면** 새 줄 추가(log-on-change). 서버액션에서 `headers()`의 `x-forwarded-for` 첫 IP. 세션당 과다기록 방지 스로틀.
3. **어드민 회원 상세**에 → 접속기록(IP·시각·기기) 누적 표시 + **★"같은 IP 쓴 다른 계정" 목록**(다계정 클러스터 적발). (선택) 대시보드 "최근 접속 유저".
**한계 명시**: 모바일 CGNAT(남남도 같은 IP)·VPN 우회·집/회사 공유 → **자동차단 X, 사람이 보고 판단하는 "신고 센서"**로만.
**나중(커지면)**: 폰인증으로 "참여=무료 / 상금자격=폰1개당1"을 분리(근본 Sybil 방어). 지금은 과함.

### 📌 확정된 전략 결론(이번 세션 논의)
- **커뮤=리텐션 전용(noindex 확정) / 블로그=SEO(색인)** 로 역할 분리. 커뮤 글 색인 안 함.
- 이벤트 목적=재방문·체류·CTA로 **간접** SEO 신호(브랜드검색·직접유입·신선도). 커뮤 활동은 블로그 순위에 **직접 반영 안 됨**(별개 엔진).
- 다계정은 커뮤 noindex라 **SEO 피해 0**, 유일한 실피해=**로또 상금**(확률형이라 45계정≈66%/100계정≈90% 당첨). → 신원확인만으론 못 막음(당첨계정=어뷰저 진짜계정). → **IP 접속로그(A안)로 클러스터 적발 + 수동 지급검토**가 현 단계 방어.

### ⚠️ 어드민 관련 알아둘 것
- `/admin`은 루트 레이아웃(SiteHeader/Footer) 안에 렌더됨(자체 풀스크린 UI라 동작엔 문제없으나 헤더 중복). 필요시 route group으로 분리 가능.
- `signOut` 서버액션(actions.ts)은 이제 community에서 미사용(클라 로그아웃으로 대체). 삭제해도 됨.
- 회원 "로그인 시각"은 `auth.admin.listUsers()`의 `last_sign_in_at` 기반.

**콘텐츠 작업(Strategy/Odds 등)은 아래 기존 핸드오프 블록 참조 — 그쪽은 그대로 유효.**

---

## ▶▶ 새 세션 START HERE (2026-07-06 심야 v3 — 전부 완료·작업트리 clean)

**직전 작업(07-06) 요약**: EN Strategy 필라 **하루 5편**(허브 `holdem-strategy` + 클러스터 `holdem-3bet`·`holdem-continuation-bet`·`holdem-when-to-fold` + 07-05 limping) 완성. 전부 §13+적대적 팩트체커 PASS, **히어로·본문 이미지 전부 생성·검수·배포 완료**, 빌드 "52 blog+70 intl"(EN 35편). **작업트리 clean, 마지막 커밋 5118079.** 필라4 = 허브+5클러스터.

**🟢 즉시 할 일 (사용자 몫 — 배포 반영 후)**:
1. **GSC 색인요청 4개**: `/en/blog/holdem-strategy` · `/en/blog/holdem-3bet` · `/en/blog/holdem-continuation-bet` · `/en/blog/holdem-when-to-fold`.
   (이미지는 전부 완료 — 대기 중인 [E] 없음.)

**🎯 다음 메인 작업 = Strategy 마무리 or Odds 완성**
- **Strategy 잔여**: `holdem-check-raise`(90) → `holdem-preflop-strategy`. 전부 허브 첫링크=`holdem-strategy`.
- **or Odds 마무리**(빠른 도장): `holdem-implied-odds`·`holdem-equity` 2편이면 필라3(Odds) 완성.
- ⚠️ EN=마스터 → **1편씩 품질 집중**. 워크플로우=필라단위 스프린트([A]리서치 서브에이전트 2개(경쟁사 SWOT + 정확성기준)→[B]각도(사용자가 "진행해"면 게이트 생략)→[C]초안+§13→[D]적대적 팩트체크→[E]커서이미지→[F]빌드·커밋).

**⚠️ 이번 세션에서 확립된 교훈 (다음 세션도 반드시 지킬 것)**:
- **본문 템플릿리터럴 안에 인라인코드 백틱(`) 절대 금지** → 빌드 SyntaxError. `==...==` 하이라이트 사용. 달러는 이스케이프 말 것(`$` 그대로).
- **연관 클러스터 글끼리 본문 이미지 재사용 금지** — 독자가 넘나들 때 같은 사진 반복=프리미엄톤 저해. 신규글마다 문맥맞춤 실사 새로(메모리 `cluster-posts-unique-images`). 기존 라이브러리엔 블랙잭·한글워터마크·스타일화 이미지가 섞여 있어 재사용 전 반드시 Read로 육안검증.
- 커밋 시 셸 cwd가 `public/images`에 갇히면 상대경로 어긋남 → `git -C <repo루트>` 명시가 안전.

**📚 먼저 읽기**: `docs/en-blog-pillar-cluster-map.md`(§2 필라4·§7) → `docs/keyword-bank/00-SYNTHESIS-roadmap.md` → `en-when-to.md`(check-raise 롱테일).

**🔁 병행 상시작업 = 주간 GSC 추세**: 사용자가 "이번 주 GSC" CSV 주면 → `node scripts/gsc-analyze.mjs "<폴더>"` → `docs/gsc-tracking/kpi-log.md`에 열 추가 + 지난주 대비 델타 분석(메모리 `gsc-weekly-trend-tracking`). 07-05 배포 효과는 1~3주 뒤 반영.

---

## ✅ GSC 점검 완료 (2026-07-05) — 족보 클러스터 액션 착수함

**한 일**: 사용자 제공 CSV(3개월/28일) 분석 → 최대 기회=**족보 클러스터**(합 ~570노출 r9~19 문턱). 원인=`/hands`(noindex) 사이트맵 잔존 카니발라이제이션. **수정 커밋 80b5887**: 사이트맵에서 /hands·/rules/texas-holdem 제외 + 필라 킹하이 커버 + updated 갱신 + masters-7th 내부링크. (상세 WORKLOG 2026-07-05)

**📈 주간 추세 추적 시스템 구축(2026-07-05)**: 사용자가 매주 GSC 올려 성장추세 보고 싶어함 → `scripts/gsc-analyze.mjs`(CSV폴더→스냅샷) + `docs/gsc-tracking/kpi-log.md`(28일 롤링 추세, 07-05 기준선) + README. **매주 루틴**: 사용자가 "지난 28일" CSV 주면 → `node scripts/gsc-analyze.mjs "<폴더>"` → kpi-log에 열 추가 + 지난주 대비 델타 분석. (메모리 `gsc-weekly-trend-tracking`)

**🎯 Top-3 진입 전략 착수(2026-07-05)**: GSC 3-Wave 전략 수립·Wave1 실행(커밋 217acd4).
- **원칙**: 이길 수 있는 곳(롱테일+토너먼트/펍+족보) 집중 · r5~7부터 · 클러스터 권위통합.
- **Wave1 완료**(r5~7 빠른승리): blind-meaning에 BB계산 실블록+신선도갱신, how-to-enter→blind-meaning 내부링크. tiebreak는 이미 최적(무편집).
- **Wave2**(족보필라 최대상금 195노출): 오늘 카니발해소+내부링크로 "심기" 끝 → **2~3주 관찰 단계**(글 추가 X, `홀덤 족보 순위` r9.8→top5 진입이 성패지표).
- **Wave3 후속(미착수)**: 빅블라인드(r8.6) 독립섹션 심화 · icm 계산기(r8.2 도구의도)=/calculator 페이지 최적화 · 홀덤펍 클러스터 방어.

**▶ GSC 후속 상태 (사용자 GSC 수동 작업)**:
- ✅ **/hands·/rules/texas-holdem 재크롤 요청 완료**(07-05) — "색인요청 거부됨"=noindex 정상 인식(의도대로).
- ✅ **족보 필라 `/blog/holdem-hand-rankings` 재크롤 요청 완료**("색인요청됨").
- ✅ **신규 EN 글 색인 요청 완료**(사용자: 오늘 배포분 다 함).
- ☐ **(선택) Wave1 배포분 재크롤**: `/blog/holdem-blind-meaning`·`/blog/holdem-tournament-how-to-enter` — 안 해도 자동 크롤됨.
- 📊 **추적(2~3주 뒤)**: `홀덤 족보 순위`(r9.8→top5?) · `/hands` 색인제외 확인 · 신규 EN 색인·노출 시작 여부. → **주간 GSC 추세 시스템으로 자동 추적**.

---

## 🔎 (원본 절차 보존) GSC 점검 방법 — 재점검 시 참고

**사용자가 새 세션에서 GSC 점검을 원함.** 착수 방식:

> ⚠️ **Claude는 GSC에 직접 접근 불가**(연결된 GSC MCP 없음). 데이터는 사용자가 제공해야 함.

### 사용자가 가져올 것 (둘 중 편한 방식)
1. **성능(Performance) 탭 CSV export** — 최근 28일(또는 3개월). 쿼리별/페이지별 노출·클릭·CTR·평균순위. (과거 `gsc-28day-snapshot-2026-07` 메모리도 이 방식)
2. 또는 **주요 화면 스크린샷** — 성능 요약, 상위 쿼리, 색인(Pages) 상태.

### 점검 체크리스트 (데이터 받으면 Claude가 분석)
- **기회 쿼리**: 노출 높은데 순위 8~20위(=조금만 올리면 1페이지) → 제목/메타 CTR 개선, 내부링크 보강 대상 선정
- **CTR 저조**: 노출 대비 클릭 낮은 페이지 → seoTitle/desc 훅 재작성
- **색인 상태(Pages)**: "크롤됨-미색인"·"발견됨-미색인" URL 확인 → 원인·개선
- **신규글 성과**: 이번 세션 발행 EN 5글이 색인·노출 잡히는지
- **강점 유지**: 기존 강점(토너먼트/펍/족보) 순위 방어

### 📌 이번 세션 발행분 — 색인 요청 필요(아직 미요청)
`/en/blog/holdem-fish` · `/en/blog/holdem-cooler` · `/en/blog/holdem-bad-beat` · `/en/blog/holdem-glossary` · `/en/blog/holdem-limping`
(GSC URL 검사 → 색인 요청. 배포 반영 후 진행)

### 참고 메모리
`gsc-28day-snapshot-2026-07`(강점=토너먼트/펍, 최대기회=족보 클러스터, 영어=권위 한계) → 이번 점검과 비교해 변화 확인.

**▶ 새 세션: 먼저 사용자에게 "GSC 데이터(CSV/스크린샷) 주세요" 요청 → 받으면 위 체크리스트로 분석 → 개선 액션 도출. 데이터 없으면 색인 요청 목록부터 안내.**

---

## ⭐ 다음 세션 착수 (GSC 이후) — EN 포스팅 완성 (6필라 채우기)

**목표**: EN 6필라를 전부 "두꺼움" 상태로 완성 = 롱테일 구글 1등 그물 완성. EN이 마스터라 오류가 12언어로 전파되니 **1편씩 품질 집중**(병렬 초안 금지).

### 📊 현재 EN 상태 (2026-07-05 기준, 발행 27편)
| 필라 | 허브 | 발행/목표 | 남은 작업 |
|---|---|---|---|
| 1 Rules | ✅ | 5/8 | (선택) dealer-button·check-rules·limit-vs-no-limit |
| 2 Hand Rankings | ✅ | 4/6 | kicker·what-beats-what |
| 3 Odds & Math | ✅ | 3/5 | implied-odds·equity (2편이면 완성) |
| **4 Strategy** | ❌ 미발행 | 4/9 | ✅limping 개척. **허브 `holdem-strategy` 발행 + 클러스터(3bet·c-bet·when-to-fold)** ← 최대 공백 |
| 5 Tournament | ✅ | 5/8 | 고아 2개(wpt·ept) 내부링크 복구, (상시)ICM·bubble·short-stack |
| **6 Glossary** | ✅ 허브발행 | **허브+5** | ✅허브 holdem-glossary+fish·cooler·bad-beat·straddle·rake. **Glossary 필라 완성구조. 확장=slowroll·nuts·tilt(선택)** |

### 🏁 발행 우선순위 (롱테일 1등 속도순 — 로드맵 기반)
1. ~~**Glossary**~~ ✅ **허브+5클러스터 완성**(fish·cooler·bad-beat·straddle·rake+허브). 확장은 선택(slow roll 590·nuts·tilt). **📌후속(선택): 개별 5글 첫링크를 허브로 역링크(맵§3.3).**
2. **Strategy 진행 중** → ✅limping 개척(590·LDA8). **다음: 허브 `holdem-strategy` 발행** or 클러스터 계속(`holdem-3bet` 1600·`holdem-continuation-bet` c-bet·`holdem-when-to-fold`·`holdem-check-raise`). or **Odds 마무리**(implied-odds·equity 2편이면 필라3 완성).
2. **Strategy 착수** (허브 미발행=최대 공백): `limping`(590·**LDA8**·단독승산최상) 먼저 → 허브 `holdem-strategy` → `holdem-3bet`(1600)·c-bet(`holdem-continuation-bet`)·`holdem-when-to-fold`·`holdem-check-raise`·`holdem-bluff-spot`(KO필라slug 정합).
3. **Odds 마무리**: `holdem-implied-odds`·`holdem-equity`. (rule-of-2-and-4는 보류=중복)
4. **Hand Rankings 심화**: `holdem-kicker`·`holdem-what-beats-what`.
5. **Tournament**: wpt/ept 고아 복구 + `holdem-icm`·`holdem-bubble` 상시 클러스터.
6. **Rules 보강**(선택): dealer-button 등.

### ✅ 신규 EN 글 필수 구조 (이번 세션에 확립된 "최신 표준" — 전부 지킬 것)
`실사 히어로(keepImagesInBody:true, ≤60KB)` → `도입 경험담(E-E-A-T)` → `:::stripe 핵심스탯` → `H2 + 시그니처 비교표(경쟁사 없는 통합표)` → `표는 자동 정렬+형광박스(전역 CSS, 손댈 것 없음)` → `가독성용 본문 실사 2~3개` → `FAQ앞 :::readnext[Keep reading] 2카드` → `FAQ **Q.**/A.(PAA 정확매칭 6~8)` → `Related Posts 그리드`. 첫 내부링크=필라, **인라인 썸네일 링크**(`"thumb:/images/x.webp"`) 1~2개.

### 🛠️ 워크플로우 (사용자 선호 = 필라 단위 스프린트)
`[A]리서치(SERP·PAA 적대적 서브에이전트 or 키워드뱅크)` → `[B]사용자 방향 게이트(각도 승인)` → `[C]초안 1편(메인, §13 검산+내부링크 첫링크=필라)` → `[D]적대적 서브에이전트 §13/팩트체크` → `[E]커서 이미지(프롬프트는 Claude, 생성은 커서)` → `[F]빌드·커밋·GSC 색인` → 맵§7·WORKLOG 갱신. 매 글 **한국어 2~3줄 요약** 첨부.

### 📚 먼저 읽을 문서
`docs/en-blog-pillar-cluster-map.md`(구조 마스터·§7 진행표) → `docs/keyword-bank/00-SYNTHESIS-roadmap.md`(발행 우선순위) → `docs/keyword-bank/en-*.md`(시드별 키워드+승산). memory도 확인.

**⚠️ 새 세션: 이 블록부터 읽고 → 위 우선순위 1(Glossary `fish`) 또는 2(Strategy `limping`)로 리서치[A]부터 착수. 각도 게이트에서 사용자 승인 후 초안.**

---

## 🔵 후순위 — KO 구버전 글 업데이트 (시간날 때 조금씩)

**사용자 지시(2026-07-05)**: KO 수정은 서두르지 않고 틈틈이. EN 완성이 우선.
- ✅ **구버전 7글 EN체 구조 전환 완료**(7poker·value-bet·cbet·range-meaning·tiebreak·split-pot·hand-rankings-confusing): keepImagesInBody·실사히어로·:::stripe·:::faqcard전부제거·FAQ정규화·인라인썸네일. 블랙잭사진 2개 교체.
- **남은 KO 작업**(틈틈이): ① 위 7글의 §13 사실검산·SEO메타 심화 검수 ② 다른 구버전 KO글(인포그래픽 남은 것) 동일 전환 ③ readnext 썸네일 일부 범용이미지 교체.

---

## 📅 마지막 작업일 (표 정렬·readnext 전면화)
2026-07-04 후반 — **전 글 표 정렬 EN 기준 통일**(숫자열 가운데, 렌더러 :---: 지원+블록파서, 형광 골드박스 테두리 전역) + **KO readnext 전면 추가**(NEW 30+LEGACY 21, FAQ 앞 :::readnext[이어서 읽기] 2카드, 관련글 자동선정). EN readnext는 기존 완비. 아래 이전 기록 참조.

## 📅 (이전) 마지막 작업일
2026-07-04 (Claude Code 세션 — **① Odds 클러스터 #3 `holdem-drawing-odds` 발행+이미지2개 완비 ② Glossary 필라 첫 발행 `holdem-straddle`**. drawing-odds=필라3 마무리(Flop Lifecycle표+조합론, §13 22개 ALL CORRECT, 이미지 §13통과). straddle=필라6 개척(종류비교표+액션순서+-EV답변, 적대적 룰 팩트체크 통과, 2건 misleading 교정). straddle 이미지 4개 완비. **③ Glossary #2 `holdem-rake` 발행**(레이크종류비교표+실전계산+rake trap+rakeback, 적대적 팩트체크 통과, $100+$20→$9 교정). rake 이미지 3개 완비. **④ EN 모바일 최적화 감사**(Playwright 360/390px 전26개): 오버플로우 0, 유일이슈=넓은표 억지줄바꿈→모바일 골드박스 좌우패딩 20→8px 수정(표폭+24px, 공유CSS 1줄=전언어). 감사도구 scripts/mobile-audit.mjs 추가. **모바일 기반 견고 확인.** 다음 = (콘텐츠)Glossary fish·cooler / (모바일)추가 폴리시 요청 시 rangechart BB라벨 등 미세사항)

---

## 🎯 지금 프로젝트가 어느 단계인가

**개발은 완료, 지금은 "SEO 콘텐츠 품질 강화 + 포스트 추가" 운영 단계.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인): 전부 완성·배포됨 → 더 만들 것 없음
- 핵심 작업: **구글 1페이지 달성**을 위한 콘텐츠 품질 향상 + 신규 포스트 발행

### 현재 발행 현황
- **한국어 블로그: 52개** (`lib/posts.ts` LEGACY 21개 + `lib/posts/` NEW 31개) — 2026-07-04 고아포스트 holdem-raise-how-much 완성·발행
- **영어 블로그: 20개** (`lib/posts-en/`)
- **필라 포스트 발행 현황**: holdem-hand-rankings(P1) ✅ · holdem-probability(P?) ✅ · holdem-rules(P2) ✅

---

## 🔥 이번 세션(2026-07-02, Claude Code) 작업 내용

### 콘텐츠 검수·강화 (§13 사실오류 정정 포함)
- **족보 클러스터 4개**: 필라(holdem-hand-rankings) + 보조 3개(tiebreak·confusing·vs-7poker). §13 오류 3건 정정 — 스트레이트플러시 오기, 플러시/스트레이트 혼동, **"마운틴=로열플러시" 오기(→A-K-Q-J-10 스트레이트)**. 별명표·PAA FAQ·신선도 강화
- **holdem-starting-hand-range**: 플러시확률(완성 0.8%/드로우 11%) 정정, 이미지 맥락 교체(칩스택·깨끗한 포지션도), seoTitle CTR 강화
- **CTR·검수**: when-to-fold, holdem-tournament-how-to-enter(trailing slash 22개 정리), apt-incheon-2026(Event JSON-LD 추가), wsop-2025(결과 recap 전환), /tournaments(신선도)

### 디자인·시스템
- 인라인 링크 **형광 붓칠(5색)+밑줄** 강조, `:::eventcta:::` 이벤트 CTA 컴포넌트 신설
- **규칙 통합**: `.cursor/rules/posting.mdc`를 포스팅·콘텐츠 **단일 마스터**로 통합 + 포스트 작업 시 자동 읽기(CLAUDE.md 지시) + 기존 글 검수 체크리스트(SEO 메타 CTR 1순위)
- **/hand-chart** 세련 개편 + 모바일 최적화 + 내부링크(양방향)

### 예약/메모리
- 8/16 APT 인천 대회 후 자산화 클라우드 알림 예약(routine)
- 메모리: `gsc-28day-snapshot-2026-07`, `apt-incheon-2026-post-event-asset`

---

## 🚀 다음 세션 할 일 (우선순위 순)

> ⚠️ 포스트 작업 전 `.cursor/rules/posting.mdc`(통합 마스터) 먼저 읽기 — 이제 자동 적용됨.

### ★0순위 (다음 세션 시작 작업) — EN 6필라 발행 (Phase 0 완료, Phase 1 진행)
**진행상태**:
- ✅ **Phase 0 완료** — `holdem-hand-rankings` 정확매칭 FAQ 10개 추가·배포(e06ed4c). ~17k 볼륨 흡수.
- ✅ **Phase 1 Odds 허브 발행** — `holdem-probability` 종합 플래그십. 확률 35개 검산. 배포 bcad393.
- ✅ **Odds 클러스터 #1 발행** — `holdem-pot-odds`("How to Calculate Pot Odds"). 벳사이즈 치트시트·3개념구분·4-2룰·실전핸드. §13 18개 검산(턴 팟오즈 오류1 정정). 허브 양방향링크. 배포 ac3a93b.
- ✅ **Odds 클러스터 #2 발행** — `holdem-outs`("How to Count Outs"). 아웃츠 세는법=pot-odds 상류. 드로우별 아웃츠표·아웃츠→배당 마스터표·4-2룰 오차보정·콤보 겹침산수(15 not 17)·더티아웃 실전. §13 적대적검산 ALL CORRECT. 허브·pot-odds 양방향 인라인썸네일 역링크. 배포 603f936. ✅ **본문 이미지 4개 완비**(히어로+counting+dirty-outs 커서생성, 스트레이트 재사용). 이미지 §13검산 통과(counting=A♠K♠ 오버카드6아웃, dirty=44페어보드). 배포 26661d4.
- ✅ **Odds 클러스터 #3 발행(2026-07-04)** — `holdem-drawing-odds`("Drawing Odds / Odds of Flopping X"). **필라3 토픽오소리티 마무리**. 시그니처=**Flop Lifecycle 통합표**(한 행에 made 플랍→draw 플랍→리버 완성 3열, 경쟁사·허브 모두 안 잇는 갭)+본문 조합론 노출(C(11,3)/C(50,3) 식=E-E-A-T). 셋마이닝 임플라이드오즈(10~15배)·백도어 러너러너·two players AA(136-to-1)·set by river(19.2%) 신규 커버. §13 직접검산+적대적 서브에이전트 **22개 확률 ALL CORRECT**. 4-2룰·아웃츠 재설명 금지(위임 준수). 허브·outs 양방향 인라인썸네일 역링크. 빌드 "51+59 intl". ✅ **본문 이미지 2개 완비**(커서 생성, §13검산 통과): 히어로=포켓5셋(5♠5♦+5♣K♥8♠), 플러시=하트4장 드로우(A♥K♥+Q♥7♥2♠). 재사용 실사 2개(button-dealer-board·straight-example) 포함 본문 총 4이미지 ~134KB.
**▶ 다음 세션 착수 = 다른 필라로 이동 (Odds 필라3 4글 완성=허브+pot-odds+outs+drawing-odds)**:
  - **Glossary 플래그십 `holdem-glossary`(신규 필라)** — straddle 2900·rake·fish·nuts·bad beat 등 용어 롱테일(LDA 3~35=승산 좋음). 키워드뱅크 `en-glossary-what-is-a.md`.
  - or **Strategy `holdem-strategy`(신규 필라)** — limping 590(LDA8·W3=1 매우좋음) 클러스터.
  - `holdem-rule-of-2-and-4` 전용글은 **보류 유지**(outs/pot-odds/probability/drawing-odds 4글과 정면 중복).
**즉시 할 일**: GSC 색인요청 `/en/blog/holdem-drawing-odds`·`/en/blog/holdem-outs`·`/en/blog/holdem-pot-odds`·`/en/blog/holdem-probability`.
**🧹 기존 정리 과제(발견 2026-07-03)**: EN desc>160자 **7개 기존글** 트리밍 필요(CTR 훅+키워드 유지하며) — positions 255·hand-rankings 210·tournament 205·blind-meaning 176·all-in-rules 164·reading-the-board 162·showdown-rules 162. (오늘 신규 probability·pot-odds는 정정 완료)
**✅ EN 전체 클릭강화 적용 완료(2026-07-03)**: 22개 EN 글 전부 인라인 썸네일 링크 + FAQ앞 :::readnext 2카드. 신규글은 이 패턴 기본 포함(posting.mdc 규칙).
**적용 중인 신규 규칙**: 모든 신규글 = 인라인 썸네일 링크(가장 연관글 1~2개, `"thumb:이미지"`) + FAQ앞 `:::readnext[라벨]` 2카드 박스. posting.mdc·memory 문서화.
로드맵 상세: `docs/keyword-bank/00-SYNTHESIS-roadmap.md`.

**먼저 읽을 문서 3개 (순서대로)**:
1. `docs/en-blog-pillar-cluster-map.md` — EN 6필라 구조 마스터 맵
2. `docs/keyword-bank/00-SYNTHESIS-roadmap.md` — 데이터 기반 발행 우선순위 (여기가 실행 순서)
3. `docs/keyword-bank/en-*.md` (6개) — 시드별 키워드+승산(LDA/weak-spot) 상세

**확정된 EN 6필라** (KO 복제 X, EN 시장 독립설계, pub-guide 제외):
1 How to Play(`texas-holdem-rules-for-beginners`) · 2 Hand Rankings(`holdem-hand-rankings`) · 3 Odds&Math(`holdem-probability` 신규) · 4 Strategy(`holdem-strategy` 신규) · 5 Tournament(`holdem-tournament`) · 6 Glossary(`holdem-glossary` 신규). slug은 12언어 공유(hreflang)라 확정=변경금지.

**목표(재확인)**: **롱테일 키워드 구글 1등**이 전부. 메인키워드 정면승부 X. 커뮤니티 전환은 설계 드라이버 아님(리텐션용). EN 완성 후 그 구조로 12언어 번역.

### 🛠️ 작업 워크플로우 = "필라 단위 스프린트" (사용자가 이 방식 선호 — 새 세션에서 다시 설명 후 착수)
**핵심: 작업을 성격별로 쪼갠다.**
- **리서치(SERP·PAA)** = 서브에이전트 병렬 (or lowfruits 데이터 활용) — 이미 키워드뱅크로 1차 완료
- **초안 작성** = 내가(Claude) 메인에서 **1편씩** (EN=마스터라 오류가 12언어 전파 → 병렬 금지, 품질 집중)
- **검증(§13 핸드검산·팩트체크)** = 적대적 서브에이전트
- **이미지** = 커서 워크플로우(프롬프트+위치는 Claude가, 생성·저장은 커서)

**루프**: [A]리서치(키워드뱅크 활용) → [B]사용자 방향 게이트(각도 승인, 5분) → [C]초안 1편(경험담+§13검산+내부링크 첫링크=필라) → [D]빌드·커밋·GSC 소배치 → [E]맵§7·WORKLOG 갱신 → 다음. 발행은 2~3편씩.
**사용자 게이트**: 방향 승인 + 포커사실 검수(언어중립). 매 글 **한국어 2~3줄 요약** 첨부.

### 첫 착수 = Phase 0 (기존 글 FAQ 강화, 최고 ROI)
`holdem-hand-rankings`에 데이터 매칭 FAQ 강화부터: `what is a flush`(5400)·`full house`(4400)·`straight`(2900) 정의 + `what beats a X` FAQ + 룰 FAQ(3 pairs·ace as 1 등). 합 ~17k 볼륨, 기존 랭크+GSC권위 레버리지. → 그다음 Phase 1(Odds 확률차트 신규 LDA11, Strategy limping LDA8, Glossary straddle/rake/fish…). 상세는 00-SYNTHESIS-roadmap.md.

**⚠️ lowfruits 후속 수확 남음**(다음 라운드): `pot odds *`·`c bet *`·`poker bluff *`·`poker cash game *`(Cash Game 7필라 후보). 승산 판정 = LDA≤20 매우좋음/20~35 좋음.

**시작 전 반드시**: CLAUDE.md → session-handoff → WORKLOG → posting.mdc → 위 3개 문서.

### 1순위 — 영어 포스트 SEO 강화 (20개 1차 강화 완료)
- 대상: `lib/posts-en/` 20개. GSC상 "how to play texas holdem / rules for dummies" 클러스터가 노출 많고 순위 페이지5~8
- ⚠️ 참고: 해당 EN 룰 글 콘텐츠는 이미 우수 → 문제는 **도메인 권위**(대형 경쟁사). 콘텐츠 추가보다 EN SERP·PAA 재조사·롱테일 커버·내부링크·장기 백링크 관점 접근
- 규칙: posting.mdc(다국어 현지화·EN 롱테일 클러스터링) + memory `gsc-28day-snapshot-2026-07` 확인 후 시작
- **✅ 완료(2026-07-02)**: `texas-holdem-rules-for-beginners`(H2 2개·내부링크 3개·FAQ 3개), `holdem-hand-rankings`(§13 스트플 오류 정정·slash·FAQ 2개), `holdem-game-order`(H2 who-acts-first·내부링크 5개), `holdem-positions`(이미지 추가·slash), `holdem-betting-actions`(§13 min-raise·slash 5·링크 3·이미지·FAQ limp), `holdem-flush-vs-straight`(§13 SF 과잉주장·링크·FAQ), `holdem-showdown-rules`(seoTitle CTR·slash 4·링크·FAQ), `holdem-all-in-rules`(CTR·본문링크 3·slash 3, 룰오류無), `holdem-starting-hands-chart`(§13 AK에쿼티·rangechart·slash 5·커서이미지2), `holdem-reading-the-board`(§13 플러시개수·링크2·slash 3), `holdem-tiebreak-rules`(§13 전체검산·이미지3점검·내부링크 starting-hands-chart 정밀화·롱테일 FAQ 2개), `holdem-split-pot-rules`(SERP·PAA 조사·§13 원페어예시 정정·토너먼트chop 분화/전략/odd chip 롱테일 FAQ 3개), `holdem-blind-meaning`(핵심키워드·헤드업/미스드 블라인드 신규섹션·FAQ 2개·desc CTR·속도점검 통과), `holdem-tournament-vs-cash-game`(토너먼트필라 내부링크+Related카드·PAA FAQ 3개 bubble정의/pros/hourly·속도통과), `holdem-tournament`(**필라**·트슬래시4제거·클러스터허브 Related 5카드·PAA FAQ 2개 latereg/중도이탈·히어로 재압축), `holdem-position-play`(**포지션필라**·현지화누수 ₩/holdempub 교정·early/mid/late FAQ·**본문이미지 2→4개** 오프닝레인지인포+블라인드스틸실사 커서생성), `ept-barcelona-2026-guide`(웹검증 전일정정확·과장표현정정·트슬래시·**본문이미지 2→4개** PowerPath인포+포트올림픽실사)
- ⚠️ **이미지 점검 필수화**: EN 강화 시 각 글 이미지 맥락 적합/깨짐/한글오버레이 여부 확인, 더 맞는 실사 있으면 교체·추가(사용자 지시). 주의: `holdem-small-blind-position`·`poker-table-reference` 등 다수 포지션 이미지가 **한국어 인포그래픽/사이트 스크린샷**이라 EN 글에 부적합. 언어중립 실사(예: `holdem-button-position-hero`, `tournament-table-action`)만 재사용
- **EN 20개 전부 1차 강화 완료** (룰·전략·필라·족보 클러스터 + 이벤트가이드 4개). 
- ✅ **트슬래시/raw-img lazy 전수점검 완료(2026-07-03)**: EN 20개 클린, **KO 9개파일 트슬래시 65개 정정**·masters-7th img lazy 1개. 이제 전 포스트 내부링크 슬래시 클린.
- **다음 후보**: ① (완료됨) ② GSC 색인 재요청(이벤트가이드는 "크롤됨-색인안됨" 상태 다수 — 오늘 개선 배포 후 재요청) ③ 신규 한국어 포스트(목표 50개, 현재 51개는 이미 달성상태 확인 필요) ④ APT 인천 8/16 후 자산화
- ⚠️ **이벤트가이드 = 웹 교차검증 필수(사용자 강조)**: wpt-australia에서 Championship 날짜 하루 오기(23→24) 웹검증으로 발견·정정. ept·korea-marathon도 날짜·바이인·일정 반드시 공식/복수소스 재확인. 마크다운 표 `||`/구분행 누락, 트슬래시도 함께 점검
- ⚠️ **이벤트가이드 속도 점검 필수**: apt-incheon에서 갤러리 raw `<img>`에 loading=lazy 누락 발견·수정. **다른 이벤트가이드도 raw `<img>` grep해서 lazy 없으면 추가**(마크다운 `![]()`는 renderMarkdown이 자동 lazy 처리하나 raw img는 미처리). 이미지 다수라 초기로드 속도에 직결
- ⚠️ **현지화 누수 점검 필수**: position-play에서 영어 글에 ₩(원화)·"holdem pub"(홀덤펍) 혼입 발견·교정함. **다른 EN 글도 강화 시 ₩·홀덤펍·한국식표현 grep 점검**(글로벌 EN 독자용). 도입부 실경험담의 'local poker club' 수준은 E-E-A-T로 유지 OK
- ⚠️ **속도점검 루틴화(2026-07-03 사용자 지시)**: 매 검수마다 성능도 확인 — 히어로 LCP ≤60KB·본문 총합 ≤200KB·치수 1200×675(CLS 방지)·keepImagesInBody로 priority 자동. sharp로 치수/용량 확인. 이 프로젝트 EN 이미지는 대부분 이미 30~45KB라 통상 통과하지만, 신규/교체 이미지는 반드시 확인
- 📌 **커서 이미지 워크플로 확립**: 프롬프트·삽입위치를 Claude가 주면 커서 에이전트가 이미지 생성+.ts 삽입(커밋/푸시는 Claude가, 커서는 파일저장까지만). 완료 예: starting-hands-chart 프리미엄핸드·약한에이스 2개(da080cc). ⚠️ 스타팅핸드 관련 기존 이미지는 전부 한국어라 EN 재사용 불가 → 필요시 커서 신규 방식 동일: EN SERP·PAA 재조사 → 롱테일 갭·내부링크·§13 검산·이미지 점검·**seoTitle/desc CTR 훅 평가**. ⚠️ 대부분 글에 trailing slash 링크가 남아있으니 검수 시 항상 제거. ⚠️ 족보 클러스터 글들에 "straight flush" 과잉주장 반복 패턴(§13 필수)

### 2순위 — GSC 색인 재요청
- 오늘 수정한 URL 재크롤링: 족보 4개·starting-hand-range·/hand-chart·/tournaments·apt-incheon·wsop-2025
- **EN 추가**: `/en/blog/texas-holdem-rules-for-beginners`, `/en/blog/holdem-hand-rankings`, `/en/blog/holdem-game-order`, `/en/blog/holdem-positions`, `/en/blog/holdem-betting-actions`, `/en/blog/holdem-flush-vs-straight`, `/en/blog/holdem-showdown-rules`, `/en/blog/holdem-all-in-rules`, `/en/blog/holdem-starting-hands-chart`, `/en/blog/holdem-reading-the-board`, `/en/blog/holdem-tiebreak-rules`, `/en/blog/holdem-split-pot-rules`, `/en/blog/holdem-blind-meaning`, `/en/blog/holdem-tournament-vs-cash-game`, `/en/blog/holdem-tournament`, `/en/blog/holdem-position-play`, `/en/blog/apt-incheon-2026-guide`, `/en/blog/wpt-australia-2026-guide`, `/en/blog/ept-barcelona-2026-guide`, `/en/blog/korea-poker-marathon-2026`

### 3순위 — 남은 GSC 한국어 기회
- "블라인드 스틸"(pos 7.4·노출73·클릭0) 제목/메타 CTR 개선, ICM 클러스터(툴 의도)

### 4순위 — 8/16 이후
- APT 인천 대회 종료 후 결과 recap 자산화 (클라우드 알림 예약됨, memory `apt-incheon-2026-post-event-asset`)

### 참고
- Notion 연동(MCP)은 여유 있을 때
- 토너먼트 포스트 image 필드는 이번 세션 이전에 대부분 추가 완료됨

---

## ⚠️ 절대 건드리지 말 것

- `app/blog/[slug]/` (한국어 블로그 라우트), `app/[locale]/blog/[slug]/` (다국어)
- `public/sitemap.xml` (빌드 시 자동 생성)
- 기존 포스트 slug (변경 시 SEO 초기화)
- `next.config.mjs`의 `trailingSlash: false` 설정
- `lib/posts.ts`의 기존 LEGACY 포스트 데이터

---

## 🔧 인프라 설정

- **Supabase**: holdemmaster-community (Seoul Free Plan)
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`
- **Realtime**: `chat_messages`만 활성화
- **Vercel 환경변수**:
  - `NEXT_PUBLIC_SUPABASE_URL` ✅
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✅
  - `GEMINI_API_KEY` ⚠️ **Vercel 미설정 → 프로덕션 번역 비활성**

---

## 🗒️ 핵심 파일 위치

| 용도 | 경로 |
|------|------|
| 한국어 LEGACY 포스트 | `lib/posts.ts` |
| 한국어 NEW 포스트 | `lib/posts/[slug].ts` + `lib/posts/index.ts` |
| 영어 포스트 | `lib/posts-en/[slug].ts` |
| 포스팅 규칙 | `.cursor/rules/posting.mdc` |
| 이미지·콘텐츠 규칙 | `.cursor/rules/content.mdc` |
| 기술·성능 규칙 | `.cursor/rules/tech.mdc` |
| 커뮤니티 클라이언트 | `app/community/community-client.tsx` |
| DB 스키마 | `supabase/schema.sql` |
| 콘텐츠 로드맵 캔버스 | `canvases/content-roadmap.canvas.tsx` |

---

## 💡 확정된 설계 결정사항

- SEO 경로(`/blog`, `/en/blog` 등): 절대 변경 안 함
- DB/Auth: Supabase / 번역: Gemini Flash + translations 캐싱
- 커뮤니티 메인 = 실시간 채팅 (피드 + 채팅 + 이벤트)
- 비로그인: 읽기 가능, 작성/전송은 로그인 필요
- 이미지: webp 전용, 실사 사진=기본 + 인포그래픽 상황적 허용(가드레일: 텍스트최소·스펠링검수·온브랜드·§13, 상세 CLAUDE.md §9-1, 2026-07-05 갱신)
- 앱 도구 페이지(`/hands`, `/rules/texas-holdem`)는 noindex → 블로그 필라가 키워드 단독 타깃

---

## 🟡 남은 보안 권장 항목 (시급하지 않음)

- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지
