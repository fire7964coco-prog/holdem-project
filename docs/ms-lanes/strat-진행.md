# ms-strat 진행 — 🅲 전략 8편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ✅ / B ✅ / C ✅ · 커밋 = `harden-ms-strat` 최상단 «ms(strat)» 커밋

A 산출(2026-09-26): `docs/ms-lanes/strat-brief.md` · `docs/keyword-bank/ms-strat.md`
- 키워드 실측: 라쿠 254개(requestId 1286783 · 1286787 — DFS Google Ads 표본과 일치) · DFS Labs suggestions 4시드(ms 시드 «strategi poker» 0건) · KD 20개 · 자동완성 32시드×2 · SERP 9회(+1회 서버 오류) · 현지 원문 4페이지(Playwright · 2페이지는 봇 차단/중단으로 미열람 기록)
- 카피: Fable 서브 1회 · Opus 조정 8편 전부 — 글자 수 초과 3건 트리밍(strategy seoTitle 64→59 · positions desc 167→157 · 3bet seoTitle 64→59) · 용어 정정(dealer button→butang pengedar · equity realization→realisasi equity · Polarized→Terpolarisasi) · 직역투 제거(«menjerit value») · EN 축어 복원(169 «jenis» · blocker suited · «Contoh solver» 단서) · 카니발 태그 제거(c-bet poker · delayed c-bet) · 비문 H2 2건
- tldr 304~356자: 기존 ms 편(190~270)보다 길다 — EN tldr(326~530)을 2~3문장으로 줄인 결과. B에서 더 줄여도 되나 §13 수치는 빼지 마라

B 산출(2026-09-27): `lib/posts-ms/<slug>.ts` 8편 + `index.ts` [ms-strat] 칸 2곳 · 집필 서브 보고 축어 = `docs/ms-lanes/strat-B-reports.md`(C 렌즈 입력)
- 집필: Opus 서브 8개 병렬(편당 1개 · 입력 = 브리프 §0~1 + 해당 절 + EN 마스터 + 틀 + ms-posting-reference) — 🔴 **Workflow 도구로 띄웠다**(사장님 명시 opt-in 없음 · 규모는 에이전트 8개 동일) · 확정 카피 축어 사용
- 구조 자가대조(서브 보고): 8편 전부 H2/H3·표 행·이미지·디렉티브·하이라이트·FAQ 수·블로그 링크 수 = EN · 백틱 2 · 금지어 0 · 본문 히어로 0 · 직답 40~75단어 맞추느라 여러 H2에 직답 단락 추가(EN 사실만 재서술 — C가 «새 사실» 여부 판정)
- `audit:hard --locale=ms` 🔴 0 · 🟠 0(29/29 — 🪶 `--slug`는 로케일 모드에서 무시되고 전체가 돈다) · §13 커버리지: 우리 7편 카드 문단 «시나리오 못 잡음»(strategy 2 · position-play 5 · starting-hands-chart 1 · 3bet 1 · continuation-bet 4 · when-to-fold 3) = **미검사 → C 수기 검산**
- `check:structure` 내 8편 결손 0 (🟠 17행은 **기존 ms 편**의 역링크 부족 → 헤드 요청 ②)
- `check:intl-links` ✖ 15 = **전부 다른 레인 슬러그**(prob: pot-odds·probability·equity·outs · gloss: glossary·fish) → §0-A대로 건 링크 · 5레인 머지 후 해소
- 빌드: prebuild가 intl-links에서 멈춤 → 🅱 선례대로 intl-links 뺀 체인 · `check:calc-parity:all` 🔴 ms 1 = 헤드 요청 ③ · 나머지 prebuild ✅ · `next build` 784페이지 ✅ · postbuild(hreflang·directives·meta-lang) ✅ · 산출물 FAQ 스키마 Question 14/7/10/8/9/15/12/12 = EN FAQ 수와 동일 · sitemap 원복

C 산출(2026-09-27): 8편 렌즈 반영본
- ⓪ `git merge main`(36f66287 · L-2i): EN strategy 요약 3번에 SB 컴플리트 예외 괄호 추가됨 → ms 반영
- ① 게이트: `audit:hard --locale=ms` 🔴 0 · 🟠 0(29/29) · `check:meta` 초과 0(3bet desc를 렌즈 반영 후 165→158자로 재조정) · `check:seo-sync` 🔴 0 · `check:structure` 내 8편 결손 0 · `check:intl-links` ✖ 15 = B와 같음(전부 다른 레인 대상 · §0-A)
- ② §13 전사 대조(스크립트 · 카드 토큰·수치 집합 비교): 카드는 8편 전부 EN과 일치(3bet A♠Q♠ +1회 = 직답 재서술) · 수치 개수 차이 전건 판정 = 직답 재서술 또는 X-to-1→X:1 표기 · 오전사 0 · 커버리지 밖 카드 문단 16개 + BB 방어 산식 손검산 → 전부 정확·EN 일치(딜러 렌즈 2개도 독립 재계산: 99 vs A♥K♥ 341/990=34.4% 등)
- ③ 렌즈 7개(Opus · 딜러×2 · 네이티브×2 · SEO 1 · 교열×2 — 분량 때문에 딜러·네이티브·교열을 4편씩 나눔): 지적 약 130(렌즈 간 중복 포함) · 반영 약 85항목(치환 약 160곳) · 기각·보류 약 25(그중 EN-먼저 8)
  - D유형 4건(전부 B가 넣은 직답 단락이 EN 조건을 떨어뜨림): 3bet «selebihnya fold»가 Strong/Speculative 행을 삼킴 · when-to-fold 턴 draw 가격 조건 누락 · limping «pot yang kecil dan terkawal»(이유 3 반전) · position-play FAQ SB «raise hampir setiap kali»(EN most of the time)
  - 의미 오역: 3bet «kerusi sebelah»(옆자리) → kerusi lawan · c-bet «merampas raise» → menafikan peluang raise · position-play «Pengalah bb/100» → Kerugian · strategy «menyuap»·«lolos» · when-to-fold seoTitle «Lepas Tangan»(관용구 = 책임 회피) → «Susah Lepaskan Tangan Bagus? — …»(58자)
  - DBP: c-bet «mengena»+목적어 6곳 → mengenai · «jangan sesekali» → sekali-kali · «respons»(동사) → bertindak balas · «beliau» → dia · «menjerit» 직역 3곳
  - 직답↔바로 뒤 EN 문단 축어 중복 6건 삭제·축약 · c-bet은 B가 직답을 거의 안 넣었음 → 키워드 자리 Kekerapan·Sizing 2곳만 추가(같은 글 표·본문 수치만 · 나머지 5곳은 미결)
  - 용어 통일 = 아래 «신규 용어» 표 «C 판정» 행
- ⑤ 2차 교열(반영분 전→후 목록만 · Opus 1개): 13건 — 전부 반영(치환이 남긴 H2 «Pemain Baru» 대문자 · c-bet «pendahuluan» 잔존 · position-play «memilih» 잔존 · limping «low-stakes» 5곳 · 새 직답 2개의 재중복 · 3bet OOP 행 «melihat flop» 중복 · chart «As menang 85%» 등) → 게이트 재실행

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-strategy | ✅ | ✅ | ✅ | 필라 · poker strategy 50 · how to win at poker 50 |
| holdem-positions | ✅ | ✅ | ✅ | **poker positions 90**(클러스터 최대) · «posisi dalam poker» #1 ms.wikipedia = 공백 |
| holdem-position-play | ✅ | ✅ | ✅ | out of position 30(+37%) · GTO 역링크 L194 이식 |
| holdem-starting-hands-chart | ✅ | ✅ | ✅ | poker chart/cheat sheet 140 · hand chart 110 — 🔴 족보 차트와 의도 분열 · 도구 링크 3건 EN 유지 |
| holdem-limping | ✅ | ✅ | ✅ | 🔴 «limping» 단독 = 의학 |
| holdem-3bet | ✅ | ✅ | ✅ | 3-bet +110% · 🔴 «4bet» 90 = 카지노 브랜드 · GTO 역링크 L301 이식 |
| holdem-continuation-bet | ✅ | ✅ | ✅ | continuation bet +300% · GTO 역링크 L65·L129 이식(thumb `-ms`) · 🔴 태그 카니발 |
| holdem-when-to-fold | ✅ | ✅ | ✅ | 영어 SERP도 가이드 0(쇼츠·앱뿐) |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| position (좌석) | posisi (🔴 kedudukan 아님) | 코퍼스 posisi 65 · `ms-posting-reference` §1 «kedudukan=순위·족보» |
| early / middle / late position | posisi awal / posisi tengah / posisi lewat | 코퍼스 «Posisi lewat: steal»(holdem-blind-meaning) |
| seat number | nombor tempat duduk | 코퍼스 tempat duduk 31 · 🆕 조합 |
| button (좌석) vs dealer button (원반) | button (BTN) vs butang pengedar | 코퍼스 BTN 301 · butang pengedar 17 |
| starting hand | tangan permulaan | 코퍼스 11 · starting hand 0 |
| chart | carta | 코퍼스 12 · chart 0 |
| tight-aggressive | tight-aggressive (TAG) 영어 | 🆕 코퍼스 0 |
| initiative | inisiatif | 🆕 코퍼스 0 · DBP 표준어 |
| flat call | flat call 영어 | 🆕 코퍼스 0 |
| light 3-bet / value 3-bet | 3-bet ringan («light 3-bet» 첫 등장 병기) / 3-bet value | 🆕 |
| linear range | range linear | 🆕 · 짝 «range terpolarisasi» 코퍼스 11 |
| sunk cost fallacy | sunk cost fallacy + 첫 등장 «(perangkap kos tenggelam)» | 🆕 · PRPM DBP «kos tenggelam» = Kamus Sains 표제만 확인(정의 미열람 — 근거 약) |
| pot-committed | pot-committed 영어 | 🆕 |
| fold / bluff / raise / call | 영어 그대로 (🔴 lipat·gertak·naikkan·panggil 금지) | 코퍼스 fold 176 : lipat 0 · bluff 71 : gertak 0 · 경쟁 xkdisplay.com/ms 기계번역이 lipat 8 · gertak 3 |
| X-to-1 | X:1 (숫자 불변) | 🅱 prob 레인 결정 따름 |
| (B 집필 서브가 새로 정한 것 — C가 편 간 통일 판정) | | 원문 = `strat-B-reports.md` |
| break-even | pulang modal | strategy · position-play 둘 다 같은 선택 |
| leak · dead money · capped range · iso-raise · set mining · fold equity · family pot · donk · nuts · tell · MDF · blocker · fill up | 영어 그대로 | 포커 술어 = 액션 용어 원칙 |
| backup equity · deny equity · nut advantage | equity sandaran · menafikan equity · kelebihan nut | ekuiti 금지 |
| default · aggressor · air · blank | lalai · **aggressor 영어** · tangan kosong (첫 등장 «(air)» 병기) · kad kosong (blank) | C 판정: aggressor는 기존 코퍼스 20 : penyerang 1 → 영어(limping 4곳 교체) · air는 말레이어 «물»과 충돌, 기존 코퍼스 tangan kosong 8 : air 0 |
| charge (draws) | **mengenakan bayaran kepada** | C 판정: mengecaj(코퍼스 0 · 충전·청구서로 읽힘) 폐기 → 기존 코퍼스 «mengenakan bayaran» 2 · 3bet과 통일 |
| orbit | **orbit 영어** (position-play 첫 등장 «(satu pusingan penuh meja)») | C 판정: pusingan = 베팅 라운드 정본(기존 코퍼스 51)과 충돌 → orbit(positions가 이미 사용) |
| opening range | position-play 안 = «opening range»(desc·H2 키워드 · 표 머리도 통일) · 다른 편 = «range open» | C 판정: 기존 코퍼스 range open 14 : opening range 0 — 편 간 분기는 의도(키워드 자리) · 헤드 대조 대상 |
| called (이름이 ~인) · floor calls | disebut / dikenali sebagai · floor mengumumkan | «dipanggil»이 panggil 게이트에 걸리는 것 회피 |
| dealer disc | **butang pengedar** (설명문 «butang pengedar ialah cakera fizikal» 1곳만 cakera) | C 판정: 한 편 안 두 이름 해소 |
| framework | **rangka kerja** | C 판정: kerangka(인니 쪽 빈도 높음)와 갈려 있던 것을 말레이시아 표준으로 통일 · 카드 제목 «Rangka Kerja 5 Keputusan» |
| tournament | **tournament 영어** | C 판정: kejohanan과 혼재 → 기존 코퍼스 tournament 127 : kejohanan 42 |
| low stakes | **stake rendah** | C 판정: stakes rendah·low-stakes 혼재 통일 |
| leak | **leak 영어** (kebocoran 폐기) | C 판정: 레인 용어표 결정 재확인 · 8편 10곳 교체 |
| complete (SB) | **complete small blind** | C 판정: melengkapkan은 «draw를 완성하다» 뜻(코퍼스 18)과 충돌 · limping·position-play와 통일 |
| selective | **selektif** | C 판정: «memilih»는 «고르다/선호하다»로 읽힘 |
| ace-high | ace-high (문두 Ace-high) · 카드 한 장 = As · 포켓 = AA / pocket aces | C 판정: 기존 코퍼스 ace-high 40 |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (블로그 링크) | 8편 전부 §0-A 51편 안 | 전부 EN 그대로 `/ms/blog/…` — **편차 0** |
| holdem-continuation-bet · holdem-position-play · holdem-3bet | GTO 역링크 4자리(L65·L129 / L194 / L301) | **이식**(ms가 대상 보유 · `locale-intentional-diffs` 해소 조건 충족) · thumb `gto-*-en.webp` → `gto-*-ms.webp` |
| holdem-starting-hands-chart | L111 `/en/hand-chart` · L243 `/en/quiz` · L213 `/downloads/poker-starting-hands-chart.pdf` | **EN 유지**(ms 도구·PDF 없음 · id 선례) · 앵커에 «(bahasa Inggeris)» 표기 |

## EN-먼저 후보

| EN 파일:L## | 무엇 | 근거 |
|---|---|---|
| (PAA · 클러스터 공통) | MY SERP PAA «What is the 42 rule in poker?»·«80/20 rule»(strategy) · «15/25/35 rule»(c-bet) — EN 전략 클러스터에 없음 | DFS SERP 2026-09-26 · 🅱 레인도 같은 PAA 관찰 · 채택 여부는 EN 키워드 실측 후 |
| (수요) | «vpip meaning in poker» 30(+110%) — EN에 VPIP 설명 절 없음 | 라쿠 1286787 · 🅴 용어 레인 몫일 수 있음 |
| holdem-position-play.ts:L297 | 요약 3 «facing a raise from the small blind» — «SB가 한 레이즈를 마주하면»으로도 읽힘(ms는 «anda di small blind dan berdepan raise»로 풀었다) | 딜러 렌즈 · 중간 |
| holdem-position-play.ts:L273 | FAQ SB «raise most of the time» — 같은 글 표의 SB 오픈 ~40%와 나란히 두면 모호 · «raise rather than limp by default» 류 | 딜러 렌즈 · 낮음 |
| holdem-3bet.ts:L81 부근·L265 | 블러프 3-bet이 «win plenty / win even when called» — 콜당해도 이긴다는 단정 과장 | 네이티브 렌즈 · 낮음 |
| holdem-3bet.ts:L154 · L296 | H2 안 이탤릭 «*and*»(TOC 별표 잔존 여부 산출물 확인 필요) · «pre-flop» 표기 1곳 | 교열 렌즈 · 낮음 |
| FAQ 중복(EN 동일) | strategy «When should you fold in poker?» = when-to-fold 같은 문항 · positions «Who goes first» ≈ position-play «Who acts first» · positions 태그 «who acts first poker» ≈ game-order | SEO 렌즈 · 낮음 |
| holdem-continuation-bet.ts | H2 직후 직답 없는 절 다수(Multiway·Delayed·When NOT·Hand Examples·7 Mistakes) — ms는 Kekerapan·Sizing만 추가 | SEO 렌즈 · 중간 |

## 헤드 요청

- **태그 카니발(기존 ms 편)**: `a-high-board-cbet`·`k-high-board-cbet`가 둘 다 태그 «c-bet poker», `k-high-board-cbet`가 «delayed c-bet»를 가진다. cbet 필라는 이번에 «continuation bet poker»·«apa itu c-bet»를 머리 태그로 쓰고 위 두 태그를 피한다 — 기존 2편 태그 정리가 필요하면 헤드 판정(레인 밖 파일).
- ② **기존 ms 편 역링크(레인 밖)**: `check:structure --tail` 🟠 17행 — 기존 ms 편(betting-actions·blind-meaning·game-order·hand-rankings·tournament-vs-cash·rules-for-beginners · GTO 11편)이 EN에는 있는 우리 8편 링크를 아직 안 건다. 대상이 이번에 생기므로 헤드 회차에서 이식
- ③ **`app/ms/calculator/dict.ts`(레인 밖)**: `calc-dict-parity ms` → «C related slug 누락 holdem-starting-hands-chart». 🅱 헤드 요청 ①과 같은 종류 — 이 레인 머지 시점부터 main prebuild가 여기서 멈춘다 → 머지와 같이 사전 related를 EN과 맞춰야 한다

## 미결

- ✅ C 확인 종결: «melengkapkan» when-to-fold 2건 = 정상 용법(draw 완성) · strategy의 SB 문맥 2건은 «complete»로 교체 · `strat-B-reports.md` «C 단계에서 봐 줄 곳» 전건 판정(교열 렌즈 2개)
- 보류(헤드 판정): strategy 태그 «bila patut 3-bet» ↔ 3bet «bila perlu 3-bet» 카니발(EN도 두 편 모두 «when to 3-bet») · c-bet tldr에 EN의 «OOP 단독 레이저는 덜 c-bet» 절 없음(브리프 확정 카피) · limping·when-to-fold tldr 구어 «tak»(브리프 확정 카피) · c-bet 직답 결손 5곳(EN-먼저 표)
- 기각(낮음·취향): 관계사 «di mana» 직역 14곳 · «mantap» 빈도 · «% masa» 표현 · «bertindak pertama/dahulu» 혼용 · sunk cost 병기어 · «pasangan kecil / pair kecil» 혼용 · «sekitar ~» 중첩
