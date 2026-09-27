# ms-prob 진행 — 🅱 확률 7편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ✅ / B ✅ / C ✅ · 커밋 (아래 C 산출 커밋 — 헤드 머지 대기)

A 산출(2026-09-26): `docs/ms-lanes/prob-brief.md` · `docs/keyword-bank/ms-prob.md`
- 키워드 실측: DFS Ads 88개 + Labs suggestions 20시드 · 라쿠 39개(DFS와 전 행 일치) · 자동완성 20시드×2 · SERP 8회 · 현지 원문 3페이지(Playwright)
- 카피: Fable 서브 1회 · Opus 조정 7편 전부(글자 수는 전부 한도 안 — 조정은 직역투·합법성 어휘 «undang-undang»→«peraturan»·태그 중복 해소)

B 산출(2026-09-26 · Opus 5.5 · 입력 = 브리프 + EN 7편 골격):
- `lib/posts-ms/` 7편 신규 + `index.ts` [ms-prob] 칸 2곳 등록(7행씩)
- 자기 게이트: `audit:hard --locale=ms` 🔴 0 · 🟠 0(28/28) · `check:structure` 내 7편 결손 0 · §13 카드 토큰 EN↔ms 차이 0(scratch 대조 — 숫자 차이는 쉼표 위치 산물뿐)
- `check:intl-links` ✖ 11 = **전부 다른 레인 슬러그**(starting-hands-chart 6 · tiebreak-rules · flush-vs-straight · reading-the-board · position-play · 3bet) → §0-A대로 건 링크. 5레인 머지 후 해소
- `npm run build`: prebuild가 위 intl-links에서 멈춤 → intl-links 뺀 체인으로 확인. `check:calc-parity:all` 🔴 ms 9 = 헤드 요청 ① · 나머지는 통과
- 빌드: intl-links·calc-parity 외 prebuild 전부 ✅ · `next build` 783페이지 ✅ · postbuild(hreflang·directives·meta-lang) ✅ · 산출물 확인: `id="pot-odds"` 실재 · 히어로 `<img>` 편당 1 · FAQ 스키마 15/11/9/11/10/11/8 = EN과 동일 · sitemap 원복

C 산출(2026-09-27 · Opus 5.5):
- 게이트 전건: `audit:hard --locale=ms` 🔴 0 · 🟠 0(28/28) · `check:structure` 내 7편 결손 0 · `check:meta` 자수 초과 0 · `check:seo-sync` 🔴 0 · `check:intl-links` ✖ 11 = B와 같은 다른 레인 슬러그 · 빌드 783페이지 ✅ · postbuild ✅ · `calc-parity` 🔴 ms 9 = 헤드 요청 ①
- §13 전사 대조(스크립트 · EN «X to 1»→«X:1» 정규화): 카드 불일치 0 · 수치 불일치 2 = probability 현지 추가(two pair 2.0%/~49:1 — 396/19,600 = 2.02% 검산) · 커버리지 밖 문단 8개(9자리) 손검산 전부 ✓ — J♠T♠ vs 99 전수 40.30%(본문 «~40%»)
- 렌즈 4종(Opus 서브): 지적 59(중복 포함) · 반영 46 · 기각 13(EN-먼저 11 · 조치 불필요 2). 딜러·수학 = 사실오류·§13·D유형 0(EN-먼저 2) · 네이티브 = 인니어 유입 0 · 결함 28 중 27 반영 · SEO = 13 중 7 반영 · 교열 = 16 중 12 반영
  - 주요 반영: card-counting «dead card» 13곳 → kad mati(첫 등장 병기) · 무늬 sped/hati 26곳 → spade/heart(코퍼스 정본) · H2↔FAQ 축어 겹침 7쌍 해소(번역 유래분) · pot-odds↔outs Rule of 4 and 2 H2 동일화 해소 · 비문·오역 14자리 · card-counting H2에 «Card Counting» 토큰 · drawing seoTitle에 «Poker»
- 2차 교열(반영 diff만): 지적 4 · 반영 2 — 🔴 치환 순서 버그로 병기 «dead cards»가 «kad matis»로 깨진 것 복구 · implied «berhenti bet dan membayar» 중의성 해소
- 빌드 산출물 FAQ(acceptedAnswer) 30/22/18/22/20/22/16 = FAQ 15/11/9/11/10/11/8 × 2(원시·flight) · sitemap 원복

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-probability | ✅ | ✅ | ✅ | royal flush 계열(260·20×4)이 유일한 실볼륨 · 앵커: 헤드 통지대로 EN L160 `<a id="pot-odds"></a>` 축어 + L111 `(#pot-odds)` 유지 · 현지 추가 2자리(아래) |
| holdem-pot-odds | ✅ | ✅ | ✅ | |
| holdem-outs | ✅ | ✅ | ✅ | `outs dalam poker` #1 = ms.wikipedia(의도 불일치) = 공백 |
| holdem-drawing-odds | ✅ | ✅ | ✅ | gutshot 상승(20) |
| holdem-implied-odds | ✅ | ✅ | ✅ | 스포츠 베팅 의도(converter·american odds) 차단 |
| holdem-equity | ✅ | ✅ | ✅ | ms 태그에서 «poker equity calculator» 제외(`/ms/calculator` 몫) |
| holdem-card-counting | ✅ | ✅ | ✅ | blackjack card counting 140 · 합법성은 EN의 룸·TDA 프레임만 |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| probability(제목·표 머리) | kebarangkalian | 코퍼스 12 · poker-tool.org/ms 제목어 · SERP `kebarangkalian poker` 공백 |
| X-to-1 | X:1 | 코퍼스 «2.7:1»·«6:1» |
| equity realization | realisasi equity | ms-posting-reference §8-C |
| dirty / tainted outs | outs kotor (첫 등장 «dirty outs» 병기) | 신규 — 코퍼스 «outs … bersih»의 반의 |
| clean outs | outs bersih | 코퍼스 «outs tersebut belum tentu bersih» |
| dead cards | kad mati (첫 등장 «dead cards» 병기) | 신규(코퍼스 0) |
| card removal | card removal(영어) | blocker 14 선례 |
| Rule of 4 and 2 | 영어 이름 유지 | «peraturan 4 dan 2» 자동완성 = 법령 오염(ms-calculator §2-E) |
| suited | satu jenis | 코퍼스 |
| expected value | EV (nilai jangkaan) — equity 편 첫 등장 병기 | 브리프 §1-C · 코퍼스 nilai jangkaan 12 |
| tainted outs (카드 라벨) | outs yang tercemar | pot-odds card 🃏 한 곳 · 같은 줄에 «kotor» 병기 |
| 무늬 이름 spade / heart / diamond | **영어** spade · heart · diamond (C에서 sped·hati 26곳 → 영어로 통일) | 기존 ms 21편 spade 26 · heart 28 · sped 0 (C 네이티브 렌즈 #18 · 코퍼스 grep) — 🔴 다른 레인이 sped·hati를 썼으면 갈린다 |
| favorite | favorite (편 첫 등장 «(lebih berpeluang menang)» 풀이) | «pilihan utama»는 «첫 번째 선택»으로 오독(C 네이티브 #15·#16) |
| raw equity | equity mentah | 본문 다수형 · H2·stripe도 통일 |
| dummy end (straight) | Dummy end (hujung lemah) | «hujung bodoh» 직역 기각(C 교열 #13) |
| dealer (포커 딜러) | pengedar · 블랙잭 딜러만 dealer | 코퍼스 pengedar 54 : dealer 3 |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (없음) | 7편의 EN 내부링크 대상 전부 §0-A 51편 안 · probability L111 `(#pot-odds)`는 EN L160 `<a id="pot-odds"></a>` 축어로 그대로 닿음 | 전부 EN 그대로 `/ms/blog/…` |

## EN-먼저 후보

| EN 파일:L## | 무엇 | 근거 |
|---|---|---|
| lib/posts-en/holdem-pot-odds.ts:181 | 카드 «Misusing the Rule of 4»가 «턴에서 벳을 받으면 ×2»라 함 — 턴은 원래 1장이라 당연. 흔한 실수는 «플롭에서 벳을 받고 턴 베팅이 남았는데 ×4» | C 딜러 렌즈 #1(낮음) |
| lib/posts-en/holdem-equity.ts:41 | «you won't win *this* pot 70% of the time and lose the rest» — 글자대로 «70%로 못 이긴다»로 읽힘. 의도 = «$140을 받는 게 아니라 전부 아니면 0» | C 딜러 렌즈 #2(낮음) |
| lib/posts-en/holdem-probability.ts:65 | «high card is rarer than one pair» — 17.4%는 two pair(23.5%)보다도 드묾 → «rarer than both one pair and two pair» | C 교열 #14 |
| lib/posts-en/holdem-card-counting.ts:129 | steps 3행 «glimpsed by accident only … — accidental exposure only» 중복 | C 교열 #15 |
| lib/posts-en/holdem-drawing-odds.ts:190~194 | FAQ 질문 «1 in 8» ↔ 답 «1 in 8.5» | C 교열 #16 |
| lib/posts-en/holdem-implied-odds.ts:247 | 관련글 카드 제목 «Odds of Flopping X» — X가 자리표시처럼 보임 | C 네이티브 #26 |
| (H2↔FAQ 축어 · EN 구조) | outs «What Are Outs» ↔ FAQ 동문 · card-counting «Is Counting Cards Illegal» ↔ FAQ 동문 등 7편 9쌍(교열 #8) — ms는 번역이 새로 만든 겹침 7쌍만 C에서 해소 | C 교열 #8 · 정책 판정 필요 |
| (형제 FAQ 중복) | probability ↔ drawing-odds FAQ 3문항 동문(flop set · set over set · pocket aces) · pot-odds ↔ implied-odds FAQ «pot odds vs implied odds» · probability 태그 «poker outs chart»(outs 몫) | C SEO #3·#4·#13 |
| (직답 길이) | pot-odds L38 · implied L48·L81 · equity L163 · card-counting L46·L60·L77·L123 — H2 직후 직답 10~37단어(EN도 동일) | C SEO #12 |
| (PAA · 7편 공통) | MY SERP PAA «What is the 42 rule in poker?»(3개 SERP 반복) · «15/25/35 rule» · «80/20 rule» · «7/2 rule» — EN 확률 클러스터에 없음 | DFS SERP 2026-09-26 · 뱅크 §3-A. 채택 여부는 EN 키워드 실측 후 |

## 헤드 요청

- ① **`app/ms/calculator/dict.ts`(레인 밖)** — `check:calc-parity:all`이 ms 🔴 9: 확률 글이 ms에 실존하게 되자 계산기 사전의 quickRef 링크 4(표1 holdem-probability · 표2 holdem-equity · 표3 holdem-outs · 표4 holdem-pot-odds)와 related 5(equity·pot-odds·outs·probability·implied-odds)가 «EN과 같아야» 한다(게이트 §F). **이 레인 머지 시점부터 main 빌드의 prebuild가 여기서 멈춘다** → 머지와 같이 사전을 EN 슬러그로 맞추거나 queue 회차로.
- ② (정보) `check:structure --tail`의 ms 🟠 10 중 9건은 **기존 21편이 이제 대상이 생겨 복원 가능해진 링크**(3bet-pot-bet-sizing·a-high-board-cbet·broadway·donk-bet·blind-meaning·hand-rankings·monotone·paired → 이 레인 슬러그) = 정본 §7-⑤ 복원 회차 입력.
- ③ (정보) EN에 없는 현지 추가 2자리(둘 다 브리프 «현지 SERP» 지시) — probability: 플롭 표 뒤 한 문장(PAA «How often flops a 2 pair?» · EN 표 값 2.0%·~49:1 재사용) · FAQ 첫 문항 답에 «Tiada tangan yang mengalahkannya»(PAA «What beats a royal flush» · EN note 범위). 새 사실 없음. pot-odds L49 직답 끝 «Itulah seluruh formula pot odds.»(키워드 «formula» 흡수)도 같은 성격.

## 미결

- (없음 — «B 입력 범위 해석»은 헤드 승인으로 종결 · 정본 §3 승격)
