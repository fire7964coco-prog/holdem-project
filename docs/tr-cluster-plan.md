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
| kicker nedir · split pot · pokerde beraberlik | `holdem-tiebreak-rules`(회차 3) | hand-rankings 표·FAQ와 showdown «Split pot nedir?» H2는 tiebreak로 링크해 위임 |
| poker turnuvası · kıbrıs poker · merit poker | `/tr/tournaments` | `holdem-tournament` 글 = «토너먼트 구조·전략» 의도 |
| gto poker · poker solver | `/tr/solver` 랜딩 | GTO 4편은 남의 헤드텀을 빌려 붙이지 않는다(§1-E) |

## 4. 회차 (한 세션 한 회차 · 끝나면 상태 칸 갱신)

| 회차 | 내용 | 선행 조건 | 상태 |
|---|---|---|---|
| 1 | 기존 8편 다듬기: 내부링크 고리(필라 = rules-for-beginners) · `/tr/blog` 허브 · §1 실측어 H2/FAQ 흡수 · 사장님 수동 색인 요청(입문 글·`/tr/tournaments` 미색인) — **실행 계획 = §4-1** | — | ✅ 10-06 (5) 배포(WORKLOG · MB-182) — 남긴 것 = §4-1 아래 «회차 1 결과» |
| 2 | 도구: `/tr/calculator`(공용 컴포넌트 + tr 사전 · 등록 4곳) · `/tr/hand-chart`(🔁 10-05 도구 확장 회차 1에서 **이미 공용 `components/hand-chart` + 로케일 사전 구조**가 됐다 → tr은 11번째 사전만 추가) | 계산기 = `calculator-landings-shared-component` 절차 | ✅ 10-06 (6) 배포(WORKLOG · MB-183) — 남긴 것 = §4-2 |
| 3 | 신규 기본 5편: glossary · tiebreak-rules · pot-odds · probability · holdem-tournament + 🆕 **`/tr/glossary` 도구**(공용 `components/glossary` · 정의는 tr glossary 글 축어 — 글이 먼저라 이 회차 끝에) | 회차 2(계산기 링크 자리) | ✅ 10-06 (7) 배포(WORKLOG · MB-184) — 남긴 것 = §4-3 |
| 4 | 신규 전략 3편: strategy · positions · continuation-bet (차트는 도구로 연결) | 회차 2(차트 링크 자리) | ✅ 10-06 (8) 배포(WORKLOG · MB-185) — 남긴 것 = §4-4 |
| 5 | GTO 4편 + `/tr/solver` 랜딩(`docs/solver-landing-playbook.md`) | 🔁 **솔버가 10-05 S-040으로 앱 터키어 UI 착수 통지**(요청 0) → 요청 발송 불필요. 착수 전 솔버 tr 배포 여부만 확인(배포 전이면 랜딩 CTA가 영어 앱으로 떨어진다) | ✅ 10-06 (9) 배포(WORKLOG · MB-186) — 솔버 tr 미배포 상태로 진행(사장님 «랜딩까지 지금 전부») · 남긴 것 = §4-5 |
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
| 4. 검수 | 손댄 핸드·수치 §13 검산 · Claude 렌즈(터키어 네이티브 교열 · §13 · SEO/카니발) **+ 아스트라를 같은 시점에 병렬**(사장님 10-06 · 이번 tr 작업에 한함 — 상시 규칙 아님 · Claude가 본체일 때 · 8편을 묶음으로 나눠 여러 개 띄워도 됨) → 본체가 원문 재확인해 채택/기각 → 반영 → 2차 교열도 렌즈+아스트라 | 판정표(Claude·아스트라 출처 구분) |
| 5. 마감 | `npm run build` · push · MB 1행(커밋·8 slug·tr) · `npm run indexnow -- --since <당일>` · 사장님께 **수동 색인 요청 URL 7개** 목록 전달 · 이 표 상태 칸·WORKLOG·핸드오프 갱신 | 배포 |

- 🔴 범위 밖(이번에 안 함): 신규 글·도구(회차 2~) · 합법성·`online poker`·`poker oyna` 의도 · 도구 링크 중 tr판이 아직 없는 calculator·hand-chart는 회차 2 뒤에 건다(지금 EN 도구로 걸지 않는다).
- 판단 갈림이 나오면(예: 실측어를 seoTitle에 넣으면 기존 훅이 죽는 자리) 그 자리만 표로 올리고 나머지는 진행.

**회차 1 결과 (10-06 (5))** — 8편 전부 첫 내부링크 = 필라 · hand-rankings 내부링크 0 → 4 + readnext · 필라 FAQ `###` → Q./A.(FAQ 스키마 0 → 13문항) · 실측어 흡수(필라 seoTitle «Poker nasıl oynanır?» · «Poker nedir?» H2 · hand-rankings «Poker elleri nelerdir?» 직답 · showdown «Split pot nedir?» H2) · game-order H1·tags에서 필라 헤드텀 반납 · 렌즈 + 아스트라 병렬(1·2차) → **아스트라가 EN-먼저 규칙 정정 미전파 11자리 발견**(all-in 5 · betting 3 · game-order 3 · 필라 2-4 법칙·팟 분배) → EN 문면대로 채택.
- 🪶 남긴 것(자동 착수 금지): ① **«pas» 용어 갈림** — betting-actions는 check(«bedavaya pas»), 나머지·용어집은 fold. 터키 앱 관습(Pas=check?) 확인 뒤 용어집 결정 → 일괄 ② tr 꼬리 드리프트 나머지(EN 문안·GEO 개선분 · `check:drift --tail`) ③ tournament-vs-cash «fiş»(18회) vs 클러스터 «çip» ④ 필라 FAQ «$0,01/$0,02 실제 돈 홈게임» 권유 — JA MA-299·ID MA-331 선례(«돈 안 거는 게임»)와 같은 판단 필요 ⑤ 화면 점검: `/tr/blog` 허브 hreflang 없음(`lib/intl-blog-index.tsx:21` · 25로케일 공통) · `/tournaments` x-default 없음(`lib/tournaments-hreflang.ts`) — 색인 차단 원인은 아님(본문·robots·canonical 정상) ⑦ 🔴 **규칙급 정정이 꼬리 로케일에 안 간 실례** — 드리프트 정책(«§13급만 25로케일»)과 달리 all-in·민레이즈·muck·2-4 법칙 정정이 tr에 없었다 → 다른 꼬리 로케일(hi·vi·ms·fr·it…)도 같은 자리가 낡았을 가능성. 판정·전파는 사장님 지시로 ⑥ kicker 검색어 소유는 실제로 hand-rankings(표·FAQ)가 갖고 showdown은 위임 — §3 표 갱신은 tiebreak 신규(회차 3) 때.

### 4-2. 회차 2 결과 (10-06 (6))

- `/tr/hand-chart`(사전·FAQ 5·페이지) · `/tr/calculator`(사전 · FAQ 18 = EN 17 + TDA Rule 5 · 페이지) · 등록 6곳(hreflang 2 · hub-routes · side-rail · 사이트맵 · 글 우측 계산기 CTA) · 필라 «/en/hand-chart»·«/en/calculator» 링크 → tr 도구.
- 실측(DFS 2792 · 10-06): poker chart 70 · poker hand chart 30 · poker el tablosu 10 · poker calculator 40 · poker odds calculator 40 · poker hesaplayıcı 10 · 터키어 차트·계산 구(başlangıç elleri · olasılık/pot oranı hesaplama) 전부 null → 차트는 영어 머리어 + 터키어 부제, 계산기는 «Poker Hesaplayıcı»(ms형).
- 🔴 공용 컴포넌트에 `percentPrefix` 옵션 신설(터키어 «%42» — tr 코퍼스 38 : 0) · `check:calc-parity` 정규화 + 셀프테스트 사본 수를 순회 목록에서 세게 고침(59/59).
- 링크: tr 코퍼스 8편이라 quickRef ①~⑤ link 비움 · deal.link 생략 · shortStackLink = holdem-all-in-rules(fr 선례) · related = 8편 전수 · 차트 related에 tr 글 4 + `/tr/calculator` · 차트 노트의 솔버 링크는 이름만(`/tr/solver` 없음).
- 검수: Claude 네이티브·교열 렌즈 14건 전부 채택(몬테카를로 한정 · «kicker'ı yener» 뜻 반전 · FAQ4 논리 반전 · «Hayır.» 직답 · deal 전설모음 어미 등) + 아스트라 병렬(결과는 WORKLOG).
- 🪶 남긴 것(자동 착수 금지): ① **회차 3 뒤 재링크** — pot-odds·probability 글이 생기면 quickRef ①④ link·related·차트 related에 건다 ② **로케일 계산기 FAQ 공통 부채 의심** — EN FAQ «ICM 사용법»(«may be zero on the bubble» · «does not supply the hand-outcome probabilities»)·«ICM 값»(체감 문장)이 ms·fr 등 로케일엔 축약돼 있다(4849f3c8 동시 편집 · tr은 EN대로 넣음) — 판정은 사장님/queue ③ tr 전 페이지 헤더 «GLOBAL POKER COMMUNİTY» — `lang=tr` + uppercase가 i → İ로 바꾼다(`/tr/tournaments`부터 있던 사이트 공통 · 브랜드 span에 `lang="en"`이면 해소).

### 4-3. 회차 3 결과 (10-06 (7))

- 신규 5편(`lib/posts-tr/`): holdem-glossary(축 «poker terimleri» 260 · ICM·tilt FAQ 추가) · holdem-tiebreak-rules(kicker·split pot 주인 · 핸드 예시 16) · holdem-pot-odds(«pot odds / pot oranı nedir» · 계산 의도는 `/tr/calculator`) · holdem-probability(«poker olasılıkları» · 수치 335 EN 대조) · holdem-tournament(구조·전략 의도 · «ICM nedir»(170) H2 신설 · 일정 의도는 `/tr/tournaments`).
- `/tr/glossary` 도구(공용 `components/glossary` + `app/tr/glossary/dict.ts` · 46용어 = 글 축어 41 + 번역 5) · 등록 4곳(hreflang tr-TR · hub-routes · side-rail «Poker Terimleri Sözlüğü» · 사이트맵).
- 재링크(§4-2 ①): 계산기 quickRef ① → probability · ④ → pot-odds · related showdown·game-order → pot-odds·probability · 차트 related game-order → probability. 기존 글 역링크 4(showdown·hand-rankings → tiebreak · 필라 → glossary·pot-odds · tournament-vs-cash → holdem-tournament).
- 번역 = Opus 서브 5레인 병렬(EN 링크 중 tr 없는 글은 빼거나 tr 페이지로 대체). 검수 = Claude 렌즈 2(네이티브 교열 · 수치 대조) + 아스트라 병렬 → 2차 교열(렌즈 + 아스트라). 결과·판정 = WORKLOG 10-06 (7).
- 🪶 남긴 것(자동 착수 금지): ① 족보 일반명사 뒤 아포스트로피(«Floş'a» → «Floşa» · TDK) — 새 5편만 정리, 기존 tr 글(hand-rankings 등)은 그대로 ② 족보 표기 대소문자(«Kent» vs «kent»)·영어명 혼용(hand-rankings tiebreak 블록 «Full House/Flush»)이 글마다 갈림 — 통일은 별도 회차 ③ «$150'lık»(dolar 읽기) vs «$10'luk»(숫자 읽기) 코퍼스 혼재 ④ holdem-game-order의 «çekiş»(draw) — 새 글은 «draw»로 통일 ⑤ EN probability L196 신화 문장 «so it can be *tied*» 어색(아스트라 지적 · tr은 «berabere kalamaz»로 앞뒤가 맞음 — EN 정정 판단은 queue) ⑦ «başabaş»(TDK = «başa baş») — 새 글은 정리, 기존 blind-meaning·`/tr/calculator` 사전에 남음 ⑥ tournament-vs-cash 제목·desc «Fiş» = 회차 1 ③과 같은 건 · «## FAQ» 제목.

### 4-4. 회차 4 결과 (10-06 (8))

- 신규 3편(`lib/posts-tr/`): holdem-strategy(«poker taktikleri» 50 · «poker nasıl kazanılır» 30 — seoTitle·H2·FAQ) · holdem-positions(«button poker»·«cutoff poker» 각 10 — 산문은 클러스터 표기 «buton», «button»은 seoTitle·tags·표 영어명·H2 괄호만) · holdem-continuation-bet(«c-bet»·«continuation bet»·«cbet poker» 각 10). 실측 null = poker stratejisi · poker pozisyonları · utg nedir · c bet nedir.
- 링크: EN position-play → `/tr/blog/holdem-positions`(앵커 문구는 도착 글 범위로 — 좌석별 레인지는 `/tr/hand-chart`) · starting-hands-chart → `/tr/hand-chart` · 3bet·limping·when-to-fold·GTO 글 = 앵커 제거. positions·c-bet 첫 내부링크 = 전략 필라. 역링크 = blind-meaning 2 · betting-actions 2 · 필라 2 + 관련 카드 1(glossary·game-order는 대응 문장 없음 → 안 넣음).
- 검수: 렌즈 B(§13) 결함 0 · 렌즈 A 교열 다수 채택 · 아스트라 1차 = 🔴 c-bet «range'ini dağıttı / ezip geçiyor»(smashed = 크게 돕는다 → 부순다로 반전) 정정 · 2차 = strategy «first-in» 한정 복원 외 교열 4 채택 · «sokak → bahis turu» 일괄·«dahil → dâhil»(코퍼스 12:1) 기각.
- 🪶 남긴 것(자동 착수 금지): ① 회차 5에서 `a-high-board-cbet`이 나가면 c-bet ① 문단(%98,2)을 tr로 재저작해 연다(`locale-intentional-diffs` 10-06) ② sokak/street 혼용(positions = sokak · c-bet = street — 기존 클러스터도 갈림) ③ leak 용어 «kaçak»(strategy·c-bet) vs «sızıntı»(blind-meaning) ④ glossary·game-order에 positions 안내 문장 없음(EN엔 링크 4) ⑤ c-bet 솔버 스크린샷 tr판 없음(-en 사용 · es 선례) ⑥ `/tr/hand-chart` related에 positions·strategy 미등재.

### 4-5. 회차 5 결과 (10-06 (9))

- 확인: 솔버 tr **라이브 아님**(솔버 `5da9da2` 미푸시 · publish/main보다 34커밋 앞 · 라이브 번들 터키어 0 · 대조군 Deutsch·Español 있음). 사장님 결정 = 랜딩까지 지금 전부 · CTA `?lang=tr`(솔버 배포 순간 자동 터키어).
- 신규 4편(`lib/posts-tr/`): donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet(Opus 서브 4레인 · EN 마스터 · 이미지 = -en 스크린샷). tr에 없는 글 링크: k-high·low-board-check-raise·holdem-equity = 앵커 제거 · drawing-odds → holdem-probability · implied-odds → holdem-pot-odds · position-play → holdem-positions(앵커 축소) · readnext의 k-high 카드 → 형제 GTO 글.
- `/tr/solver`(page·faq 19 = EN 18 + «Solver ekranı Türkçe mi?» · solver-client · SPOT slug = tr 4편만) · 등록 = hub-routes · side-rail «GTO Solver» · solver-promo tr · 사이트맵 · 기존 12 랜딩 hreflang `tr-TR` · tr 차트 노트·용어 사전 related → `/tr/solver` 링크.
- c-bet ① A-high 문단(%98,2) 재저작해 엶(`locale-intentional-diffs` 10-06 행) · ⑨는 계속 미전파.
- 게이트: `check:gto`에 tr 정규화 추가(앞붙임 % + 소수 콤마 · 셀프테스트 41/41) → tr 4편 일치 27 · 🔴 1 = broadway FAQ «23.7»(EN에도 같은 🔴 — ko에 그 문장이 없는 기존 ko↔EN 차이 · tr 결함 아님). audit:hard tr 🔴 0 · 빌드 exit 0(74 + 641) · hreflang 0 · 화면 390·1440 넘침 0.
- 검수: 렌즈 B(§13·수치·앵커) 결함 0 · 렌즈 A 18건 → 63자리 반영(의미 2 = donk «yükseltme»→raise 오독 · broadway 레이즈 주체 반전) · 아스트라(글) 신규 채택 9(a-high «kaybetmeden»→«kazanamadan» 반전 등) · 기각 = 영어 용어 뒤 아포스트로피 제거 · «kicker yuvası»(코퍼스 tiebreak 용어) · 랜딩 렌즈 9건 전부 + 아스트라(랜딩) 신규 4 채택 · «dâhil»·아포스트로피 기각(코퍼스 관습).
- 🔴 **솔버 tr 배포(S-행 재통지) 때 같이 고칠 것**: `app/tr/solver/faq.ts` «Solver ekranı Türkçe mi?» 문항 · solver-client «Grup ve spot adlarını … İngilizce bıraktık» 문장 · 스팟·그룹 이름(앱 tr 축어로) · 글 4편의 영어 앱 라벨(«Study Spots → …» · «uygulama arayüzü şimdilik İngilizce» 괄호 — a-high).
- 🪶 남긴 것(자동 착수 금지): ① check:gto:structure tr = 링크 수 EN > tr · -en 이미지 = 의도(위 링크 처리) ② «İki Çift» 대소문자(donk 표) vs 소문자 — §4-3 ② 코퍼스 통일 회차 ③ 글 4편 rake·검증일 표기는 4편 안에서만 통일 ④ monotone FAQ «nut floşa karşı» 한정은 tr에만 넣음(EN 242행도 같은 조건 누락 — EN 정정은 queue 판단).

## 5. 지킬 것

- 숫자 터키식(`1.326` · `2,5`) · 족보 터키어 고유명(Kent · Floş · Kare) · 특수문자(ı İ ş ğ ç ö ü) — `docs/translation-terms-tr.md`.
- 합법성 축을 열지 않는다 · `/ranking`(온라인 포커 사이트 순위) tr판은 만들지 않는다.
- 솔버 프리플랍 차트는 «계산값이 아니라 공개 자료 합의 레인지»(`docs/solver-factsheet.md`) — 차트 글·도구에 «솔버 계산»이라 쓰지 않는다.
- 다음 언어를 열기 전에 tr 색인율 재측정: `node scripts/gsc-index-audit.mjs --prefix /tr/`.
