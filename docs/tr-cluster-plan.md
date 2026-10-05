# tr(튀르키예) 클러스터 완결 계획 — 2026-10-05 사장님 결정

> 정본. 핸드오프에는 링크만 둔다. 회차가 끝나면 아래 표의 상태 칸만 고친다.

## 0. 결정 (사장님 10-05 축어 요지)

- «시간이 날 때마다 한 언어씩, 클러스터 완결로 늘린다 — 클러스터를 줄이는 한이 있더라도.» 첫 언어 = **tr**.
- «전체 구도는 메인 언어랑 똑같이 하고 포스팅 숫자만 좀 줄이자.» → 필라 축·GTO·도구·대회 = 메인과 같은 판, 축마다 글 수만 줄인다.
- «차트 도구들이 포스팅보다 클릭이 많아서 카니발이면 거기로 몰아야 한다.» → §3 소유표에서 차트·계산은 도구가 주인.
- «차트나 계산기 같은 도구가 메인에서 성과가 좋아 카니발 안 걸리게 몰아주고 있다 → tr도 차트·계산기·토너먼트 페이지를 같이 넣자, 신경 써서.»
- «GTO도 넣어야지.» → `settled-decisions` §1-E의 «ar·vi·tr 시리즈는 사장님 판단 전 착수 금지»가 tr에 한해 해제됨(편수는 아래 4편).

## 1. 검색 수요 실측 (DataForSEO · 튀르키예 2792 · tr · 2026-10-05 · 월 검색량)

| 묶음 | 검색어 |
|---|---|
| 하는 법·입문 | poker nasıl oynanır **5.400** · texas holdem 1.600 · poker oyunu 1.600 · poker kuralları 590 · poker nedir 320 · holdem 260 · texas holdem kuralları 20 |
| 족보 | poker elleri **2.900** · poker el sıralaması 880 · poker kart sıralaması 880 · poker kartları 880 · poker sıralaması 390 · poker kombinasyonları 260 · poker el değerleri 30 |
| 용어 | poker terimleri 260 · blind nedir 70 · all in nedir 10 · poker kicker 10 · split pot 10 |
| 대회 | poker turnuvası 110 · merit poker 90 · kıbrıs poker 30 · kıbrıs poker turnuvası 30 |
| 전략·GTO | poker taktikleri 50 · gto poker 30 · poker blöf 10 · poker solver 10 · poker olasılıkları 10 · poker hesaplayıcı 10 |
| ⛔ 대상 아님 | poker 12.100(헤드텀) · poker oyna 2.400 · online poker 590 (돈 걸고 하기 의도 — 튀르키예 도박 규제 · 합법성 축 열지 않음) · omaha poker 110 |
| 데이터 없음 | pot oranı · poker stratejisi · poker başlangıç elleri · poker pozisyonları · 3bet nedir · poker rake nedir · floş kent hangisi büyük |

→ 수요는 입문·족보에 몰려 있다. 전략·GTO는 거의 0 — GTO 4편은 §1-E대로 «검색 유입 글»이 아니라 «솔버 증거 자료»로 둔다.

## 2. 구도 — 메인과 같은 축, 글 수만 축소 (목표 20편 + 도구 3 + 대회 보드)

| 축 | 메인(예: ms) | tr 글 | 상태 |
|---|---|---|---|
| 규칙 | 8+ | rules-for-beginners(필라) · game-order · betting-actions · blind-meaning · all-in-rules · showdown-rules · **tiebreak-rules**(키커·스플릿 흡수) | 6 있음 · 1 신규 |
| 족보 | 3+ | hand-rankings(필라) | 있음 |
| 확률·오즈 | 7+ | **pot-odds**(필라) · **probability** | 2 신규 |
| 전략 | 10+ | **strategy**(필라) · **positions** · **continuation-bet**(솔버 표 흡수 자리) — starting-hands-chart 글은 **쓰지 않는다**(차트 도구가 주인 · §3) | 3 신규 |
| 대회 | 4+ | tournament-vs-cash-game · **holdem-tournament**(필라) | 1 있음 · 1 신규 |
| 용어 | 1 | **glossary** | 1 신규 |
| GTO 솔버 | 13 | **donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet** | 4 신규 |
| 도구 | calculator · solver · tournaments | **`/tr/calculator`** · **`/tr/hand-chart`** · **`/tr/solver`** · `/tr/tournaments`(있음) | 3 신규 |

- GTO 4편 선정 근거: ko 45일 노출 상위 3(donk 218 · monotone 58 · broadway 30 — §1-E 실측) + C벳 기본형 1.
- slug는 전부 EN과 같다(hreflang). 번역 = EN 마스터 → 현지 재저작(`translate-pillar` 스킬 · `docs/translation-terms-tr.md`).

## 3. 카니발 소유표 — 검색어 하나 = 페이지 하나

| 검색어 | 주인 | 나머지 페이지의 역할 |
|---|---|---|
| poker nasıl oynanır · kuralları · texas holdem | `rules-for-beginners` | game-order는 «el sırası» 롱테일만 |
| poker elleri · el/kart sıralaması · kombinasyonları · kartları | `hand-rankings` | 다른 글은 앵커 링크만 · 족보 도구 페이지 만들지 않음 |
| başlangıç elleri · el tablosu (차트) | **`/tr/hand-chart`(색인)** | starting-hands-chart 글 안 씀 → 카니발 원천 제거. 차트 페이지에 설명·FAQ를 넣어 글 역할까지 |
| pot oranı hesaplama · olasılık hesaplama | **`/tr/calculator`** | `pot-odds`·`probability` 글 = «pot oranı nedir» 개념 의도만 · 제목에 «hesaplama/hesaplayıcı» 헤드텀을 쓰지 않는다 |

🔴 **도구 몰아주기 근거 (사장님 10-05 · GSC 28일 09-05~10-02 · [page] 단일 차원)**: ko `/hand-chart` 106클릭(7.1위) vs `/blog/holdem-starting-hands-chart` 상위권 밖 · `/tournaments` 564 · `/solver` 82 · `/calculator` 11 vs `pot-odds-calculation` 2·`probability` 4. 예외 = 족보(ko `/hands` noindex · 필라가 이기는 중 — `seo-tool-vs-blog-cannibalization`). 🔴 **확정 — 재조사 금지**(사장님 10-05 «알아볼 필요 없어, 이미 나온 결과들이다»). 차트·계산·대회·솔버 의도는 도구로 몰아준다.
| poker turnuvası · kıbrıs poker · merit poker | `/tr/tournaments` | `holdem-tournament` 글 = «토너먼트 구조·전략» 의도 |
| gto poker · poker solver | `/tr/solver` 랜딩 | GTO 4편은 남의 헤드텀을 빌려 붙이지 않는다(§1-E) |

## 4. 회차 (한 세션 한 회차 · 끝나면 상태 칸 갱신)

| 회차 | 내용 | 선행 조건 | 상태 |
|---|---|---|---|
| 1 | 기존 8편 다듬기: 내부링크 고리(필라 = rules-for-beginners) · `/tr/blog` 허브 · §1 실측어 H2/FAQ 흡수 · 사장님 수동 색인 요청(입문 글·`/tr/tournaments` 미색인) — **실행 계획 = §4-1** | — | ⏳ 계획 승인(10-06) · 다음 세션 착수 |
| 2 | 도구: `/tr/calculator`(공용 컴포넌트 + tr 사전 · 등록 4곳) · `/tr/hand-chart`(🔁 10-05 도구 확장 회차 1에서 **이미 공용 `components/hand-chart` + 로케일 사전 구조**가 됐다 → tr은 11번째 사전만 추가) | 계산기 = `calculator-landings-shared-component` 절차 | ⏳ |
| 3 | 신규 기본 5편: glossary · tiebreak-rules · pot-odds · probability · holdem-tournament + 🆕 **`/tr/glossary` 도구**(공용 `components/glossary` · 정의는 tr glossary 글 축어 — 글이 먼저라 이 회차 끝에) | 회차 2(계산기 링크 자리) | ⏳ |
| 4 | 신규 전략 3편: strategy · positions · continuation-bet (차트는 도구로 연결) | 회차 2(차트 링크 자리) | ⏳ |
| 5 | GTO 4편 + `/tr/solver` 랜딩(`docs/solver-landing-playbook.md`) | 🔁 **솔버가 10-05 S-040으로 앱 터키어 UI 착수 통지**(요청 0) → 요청 발송 불필요. 착수 전 솔버 tr 배포 여부만 확인(배포 전이면 랜딩 CTA가 영어 앱으로 떨어진다) | ⏳ |
| 6 | `/tr/tournaments` 북키프로스 카드(Merit 등) | `docs/country-tournament-playbook.md` — 데이터 공급 확정 전 착수 금지 | ⏳ |

### 4-1. 회차 1 실행 계획 (10-06 작성 · 사장님 확인 뒤 새 세션에서 착수 · 한 세션 90분)

**대상 8편** (`lib/posts-tr/`): texas-holdem-rules-for-beginners(필라) · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings(족보 필라) · holdem-tournament-vs-cash-game.
**색인 현황**(`docs/gsc-tracking/not-indexed-2026-10-05.md`): 발견됨·미색인 = `/tr/blog` 허브 · all-in-rules · betting-actions · rules-for-beginners / Google이 모름 = `/tr/tournaments` · game-order · tournament-vs-cash-game.

| 단계 | 할 일 | 산출 |
|---|---|---|
| 0. 읽기 | posting.mdc · `translate-pillar` 스킬 · `docs/translation-terms-tr.md` · WORKLOG에서 `posts-tr`·각 slug grep(이미 한 작업 확인) · 각 글의 EN 마스터 `masterUpdated` 대조(EN-먼저 정정이 tr에 안 들어간 자리 = 드리프트) | 드리프트 목록 |
| 1. 실측 | 8편 `audit:hard --slug`(커버리지까지) · 글별 내부링크 표(첫 링크가 필라인가 · tr에 없는 글로 가는 링크 · 고아 글) · §1 실측어가 H2/FAQ/seoTitle에 있는지 대조표 · `/tr/blog` 허브·`/tr/tournaments` 화면 확인(screen-review · 영어 노출·얇은 본문이 미색인 원인인지) | 결함 목록(사실 오류 / 번역 누락 / 링크 / SEO 분류) |
| 2. 고리 | 모든 글 → 필라 `texas-holdem-rules-for-beginners` 첫 내부링크 · 필라 → 7편 전부 · 족보 쿼리 앵커는 `hand-rankings`로만(§3 소유표) · 대회 글 ↔ `/tr/tournaments` · readnext/썸네일 | 링크 고리 완성 |
| 3. 흡수 | §1 실측어를 주인 글에만: rules-for-beginners = «poker nasıl oynanır»(5.400)·«poker kuralları»·«texas holdem»·«poker nedir» · hand-rankings = «poker elleri»(2.900)·«el/kart sıralaması»·«kombinasyonları»·«kartları» · blind-meaning = «blind nedir» · all-in-rules = «all in nedir» · showdown = «split pot»/«kicker»(tiebreak 신규 전까지 임시) · 질문형 H2 + 직답 40~75단어 · CTR 훅은 살리고 키워드만 보강(§17) | 수정 diff |
| 4. 검수 | 손댄 핸드·수치 §13 검산 · Claude 렌즈(터키어 네이티브 교열 · §13 · SEO/카니발) **+ 아스트라를 같은 시점에 병렬**(사장님 10-06 «다른 모델이면 검수 시 좋다 · 토큰 많다» — 마감 뒤 덧붙이기 아님 · 8편을 묶음으로 나눠 여러 개 띄워도 됨 · 메모리 `astra-subreview-from-main-session`) → 본체가 원문 재확인해 채택/기각 → 반영 → 2차 교열도 렌즈+아스트라 | 판정표(Claude·아스트라 출처 구분) |
| 5. 마감 | `npm run build` · push · MB 1행(커밋·8 slug·tr) · `npm run indexnow -- --since <당일>` · 사장님께 **수동 색인 요청 URL 7개** 목록 전달 · 이 표 상태 칸·WORKLOG·핸드오프 갱신 | 배포 |

- 🔴 범위 밖(이번에 안 함): 신규 글·도구(회차 2~) · 합법성·`online poker`·`poker oyna` 의도 · 도구 링크 중 tr판이 아직 없는 calculator·hand-chart는 회차 2 뒤에 건다(지금 EN 도구로 걸지 않는다).
- 판단 갈림이 나오면(예: 실측어를 seoTitle에 넣으면 기존 훅이 죽는 자리) 그 자리만 표로 올리고 나머지는 진행.

## 5. 지킬 것

- 숫자 터키식(`1.326` · `2,5`) · 족보 터키어 고유명(Kent · Floş · Kare) · 특수문자(ı İ ş ğ ç ö ü) — `docs/translation-terms-tr.md`.
- 합법성 축을 열지 않는다 · `/ranking`(온라인 포커 사이트 순위) tr판은 만들지 않는다.
- 솔버 프리플랍 차트는 «계산값이 아니라 공개 자료 합의 레인지»(`docs/solver-factsheet.md`) — 차트 글·도구에 «솔버 계산»이라 쓰지 않는다.
- 다음 언어를 열기 전에 tr 색인율 재측정: `node scripts/gsc-index-audit.mjs --prefix /tr/`.
