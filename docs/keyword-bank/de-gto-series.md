# de — GTO 솔버 예제 13편 키워드 팩

> 실측일 **2026-10-02**. 시장 = 독일(location 2276) + 오스트리아(2040) 대조. 편집 언어 = **de-DE, du체**.
> 범위 = 13편의 `title`·`seoTitle`·주 의도·H2/FAQ 문형·소유자 경계. 빈도·조건·계산·한계는 **`lib/posts-en/<slug>.ts`(EN 원문)와
> `docs/solver-app-verbatim-de-2026-10-02.md`(앱 축어)**가 정본이다. 이 문서의 외부 데이터는 그것을 대체하지 않는다.
> 모형 = `docs/keyword-bank/pt-gto-series.md`. 선행 뱅크 = `de-gto-solver.md`(2026-08-24) · `de-core-volumes.md` · `de-tag-volumes.md`.

---

## 0. 한 줄 결론

**de에서 이 13편의 축 키워드는 전부 «10~30» 대역이다.** 13편이 각자 조준할 만한 볼륨 있는 독일어 문자열은 없다.
측정된 모든 스팟 용어(`c-bet poker` 30 · `check raise poker` 30 · `donk bet` 20 · `3bet pot` 10 · `blind vs blind poker` 10 ·
`monotone board poker` 10 · `paired board poker` 10 · `nut advantage` 10)가 영어 문자열이고, **독일어 조어형(`gepaartes board poker` ·
`range vorteil poker` · `boardtextur poker` · `c-bet strategie` · `flop strategie poker` · `monotoner flop`)은 두 벤더 모두 볼륨 null**이다.
→ 13편의 주 의도는 **편집 판단으로 정한 롱테일**이고, 볼륨 근거로 고른 것이 아니다(§5 각 행에 «편집» 표시).
→ 대신 **SERP는 거의 비어 있다**: 6개 헤드 전부 top-10의 과반이 영어 페이지이고, 독일어 페이지는 PokerStars.de·888poker.de의
**용어 정의형**뿐이다. **«특정 보드에서 솔버가 실제로 무엇을 하는가»를 독일어로 보여 주는 페이지는 0개**(§3).

---

## 1. 무엇을 쟀나 (도구·ID·한계)

| 용도 | 도구 | 파라미터 | ID |
|---|---|---|---|
| 볼륨(DE) 1차 | DataForSEO `keywords_data/google_ads/search_volume/live` | location 2276 · 키워드 88개 | `10020753-2353-0367-0000-5dbf2c68c2f3` (MCP 시험 호출 `10020752-2353-0367-0000-1228bbe5062d`는 응답이 10행에서 잘려 판정에 안 씀) |
| 볼륨(AT) | 같은 엔드포인트 | location 2040 · 37개 | `10020754-2353-0367-0000-84cd1ca1f2dd` |
| 볼륨·48개월 시계열(DE) | 라쿠 `search-volume-history` | German + Germany · 96개 · 48개월 · seoDifficulty OFF | **requestId 1293793** |
| 볼륨·48개월 시계열(AT) | 라쿠 `search-volume-history` | German + Austria · 43개 · 48개월 | **requestId 1293794** |
| 발굴 + SD | DataForSEO Labs `keyword_suggestions/live` | 2276 · de · 시드 24개(태스크 1개씩) | 예: `c-bet poker` `10020752-2353-0399-0000-2a8992c84ab7` · `check raise` `…-8815d39878db` · `donk bet` `…-cb75d137b71f` · `3 bet` `…-3f2f2fb6463d` · `poker flop` `…-d4a66f5f7ab5` · `range poker` `…-824eac22c023` · `gto poker` `…-07824cbb249f` |
| SD(KD) 일괄 | DataForSEO Labs `bulk_keyword_difficulty/live` | 2276 · 38개 / 2040 · 10개 | `10020755-2353-0392-0000-6f5b68349b0f` / `10020755-2353-0392-0000-c974f943117e` |
| SERP top-10 + PAA | DataForSEO `serp/google/organic/live/advanced` | 2276 · de · desktop · depth 10 | §3 각 헤드 옆에 ID |

**한계 (판정에 영향)**
- 🔴 **`language`는 볼륨을 나누지 않는다**(rakko-playbook §운영규칙 ⑤). 아래 수치는 «그 문자열의 독일 내 검색량»이지 «독일어 화자의 검색량»이 아니다.
  영어 문자열(`donk bet`)의 독일 볼륨에는 영어로 검색한 독일 거주자가 섞여 있다 — 그게 이 판의 실제 수요 형태다.
- 🔴 **CPC는 기록하지 않았고 근거로 쓰지 않는다**(벤더 간 30배 실증).
- 🔴 **`keyword_suggestions`는 시드 구를 보존하므로 독일어 시드의 서제스트가 거의 비어 있다.** `3bet pot`·`3-bet pot`·`monotone board`·
  `paired board`·`board textur`·`range vorteil` 시드는 **total=null(서제스트 0건)**. `blind vs blind` 시드는 139건이 전부 무관(«blind carbon copy»·
  «double blind study» 등) — 포커 의도 서제스트가 1건도 없었다.
- DFS `detected_language`가 `c-bet poker`·`check raise`류를 전부 **en**으로 판정. 독일 시장에서도 이 용어들은 영어 문자열로 검색된다.
- SD는 suggestions 응답의 `keyword_difficulty`와 bulk KD를 함께 봤다. **SD null = 측정 불가**(DFS가 값을 안 줌)이지 «쉬움»이 아니다.
- 라쿠는 **근접 변형을 하나의 시계열로 묶는다**(`c-bet poker`=`c bet poker`=`cbet poker`=`poker c-bet` 시계열 동일). **변형끼리 더하지 마라.**
- 측정 안 한 것: Google Suggest 직접 수집, Bing, 스위스(2756). 표에 없는 값 = «미측정».

---

## 2. 볼륨표 (DE·AT · DFS ↔ 라쿠)

### 2-A. 스팟 용어 (13편 직접 관련)

| 키워드 | DE DFS | DE 라쿠 | SD(DE) | AT DFS | AT 라쿠 | 라쿠 추세(DE) | 메모 |
|---|---:|---:|---:|---:|---:|---|---|
| `c-bet poker` / `c bet poker` / `cbet poker` | 30 | 30 | 13 | 10 | <20 | yoy1y **−50%** | 🔴 `de/holdem-continuation-bet` 소유(태그 `c-bet poker`) |
| `poker c-bet` | 10 | 30 | 13 | 미측정 | 미측정 | 위와 같은 시계열 | 라쿠는 변형 묶음 값 |
| `c-bet` (단독) | 20 | 20 | 0 | 10 | <20 | 12m −56% | ⚠ de-core-volumes: 단독형은 헝가리어 노이즈 |
| `cbet` (단독) | **320** | **20** | 6 | 20 | <20 | — | 🔴 **벤더 불일치.** DFS는 별도 문자열로 320, 라쿠는 c-bet 묶음 20. 포커 의도 미확인 → **조준 금지** |
| `continuation bet` / `continuation bet poker` | 10 / 10 | 10 / 10 | 45 / – | 10 | <20 | 평탄 | 소유 = continuation-bet |
| `check raise poker` / `poker check raise` | 30 | 30 | null | 10 | <20 | 12m **−41%** · 2025-05에 260 일시 급등 | 🟢 de 전략 소유자 없음(§4) |
| `check raise` / `check-raise` / `checkraise` | 30 | 30 | 0 / 2 | 10 | <20 | 12m −33% | 변형 묶음 |
| `when to check raise` · `check raise flop` | 10 · 10 | 미측정 | – | 미측정 | 미측정 | — | 영어 의문형만 볼륨 있음 |
| `donk bet` / `donkbet` / `donk betting` | 20 | 20 | null | 10 | <20 | 12m **+26%** | 🟢 소유자 없음 · 표기 두 형태 볼륨 동일 |
| `donk bet poker` | 10 | 10 | 48 | 미측정 | 미측정 | — | |
| `what is a donk bet` · `when to donk bet` | 10 · 10 | 미측정 | – | 미측정 | 미측정 | — | |
| `3bet pot` / `3-bet pot` / `3 bet pot` / `3bet pots` | 10 | 10 | null | 10 | <20 | 12m −100%(최근월 0) | 독일어 서제스트 0건 |
| `blind vs blind poker` / `blind vs blind` | 10 | 10 | null | 10 | <20 | 간헐 0 | |
| `small blind vs big blind` | 10 | 10 | – | 미측정 | 미측정 | — | 소유 = `holdem-blind-meaning`(de-tag-volumes) |
| `monotone board poker` | 10 | 10 | null | **0** | <20 | 간헐 0 | |
| `paired board poker` | 10 | 10 | null | 10 | <20 | 2026-02~08 연속 0 | |
| `range advantage poker` | 10 | 10 | null | 10 | <20 | — | |
| `nut advantage` / `nut advantage poker` | 10 / 10 | 10 / 10 | null | 10 | <20 | — | |
| `board texture poker` / `poker board texture` | 10 / 10 | 10 / 10 | null | 10 | <20 | — | |
| `bet sizing poker` / `poker bet sizing` | 10 | 10 | 50 | 10 | <20 | yoy3y −67% | |
| `polarized range poker` | 10 | 10 | null | 10 | <20 | — | |
| `dry board poker` · `wet board poker` | 10 · 10 | 10 · 10 | – | 미측정 | 미측정 | — | 소유 = reading-the-board(태그 `wet board vs dry board`) |
| `equity realization` | 10 | 10 | null | 미측정 | 미측정 | — | 🔴 `de/holdem-equity` 태그 |
| `overpair poker` · `top pair poker` · `stack to pot ratio` · `overbet poker` | 10 각 | 10 각 | – | 10(overpair·top pair) | <20 | — | 본문 흡수 |
| `spr poker` | 40 | 40 | 48 | 10 | <20 | 12m −27% | ⑧ 본문 흡수 |
| `nut flush` | 50 | 50 | null | 10 | <20 | 12m **+38%** | ⑤ 본문 흡수 |
| `drilling poker` · `set poker` | 50 · 50 | 50 · 50 | 1 · – | 미측정 | 미측정 | — | ⑥⑬ 본문 흡수(Set/Trips 구분) |
| `gto flop` | 10 | 10 | – | 미측정 | 미측정 | 2026-02~08 연속 0 | |

**두 벤더 모두 null (독일어 조어형 · 볼륨 없음)**:
`gepaartes board poker` · `range vorteil poker` · `board textur poker` · `boardtextur poker` · `monoton board poker` · `monotoner flop` ·
`flop strategie poker` · `poker flop strategie` · `poker strategie flop` · `gto poker flop` · `c-bet strategie` · `c bet strategie` ·
`continuation bet strategie` · `check raise strategie` · `donk bet poker strategie` · `3bet pot strategie` · `3 bet pot strategie` ·
`blind battle poker` · `small blind strategie` · `blind vs blind strategie` · `polarisierte range` · `trockenes board poker` ·
`was ist eine c-bet` · `was ist ein donk bet` · `was ist ein check raise` · `c-bet frequenz` · `flop check raise` · `gto strategie` · `paired board` · `monotone board`.
🪶 단, `was ist eine c-bet`·`c-bet frequenz`는 이미 `holdem-continuation-bet` 태그다(볼륨 없이 달린 태그).

### 2-B. 상위 축 (13편이 «가져가면 안 되는» 것 포함)

| 키워드 | DE DFS | DE 라쿠 | SD(DE) | AT DFS | AT 라쿠 | 라쿠 추세(DE) | 소유자 |
|---|---:|---:|---:|---:|---:|---|---|
| `gto poker` / `poker gto` / `gto in poker` | 390 | 390 | 11 | **70** | **70** | 12m −12% · yoy3y −33% | 🔴 `/de/solver` |
| `poker range` | **260** | **260** | 2 | 50 | 50 | yoy1y −19% · yoy3y −46% | 🔴 `/de/solver`(플랍 이후) · ⚠ 08-24 뱅크의 320에서 하락 |
| `poker flop` / `flop poker` | 170 | 170 | 9 / 2 | 20 | 20 | 12m **−36%** | 정의 의도 — 13편 아님 |
| `poker solver` | 140 | 140 | 19 | 30 | 30 | 12m −13% | 🔴 `/de/solver` |
| `3 bet poker` (=`3-bet poker` 등) | 110 | 110 | 0 | 20 | 20 | yoy3y −65% | 🔴 `de/holdem-3bet` |
| `nuts poker` | 90 | 90 | 0 | 10 | <20 | — | reading-the-board(태그 `die nuts poker`) |
| `equity poker` | 70 | 70 | – | 10 | <20 | yoy3y −76% | 🔴 `de/holdem-equity` |
| `poker position` | **10** | **260** | – | **50** | <20 | — | 🔴 **벤더 불일치** — 판정 보류 · 소유 = position-play |
| `in position poker` | 10 | 260 | – | 미측정 | 미측정 | 🔴 라쿠는 2026-08 단월 급등(직전 47개월 10) | 이상치. 쓰지 마라 |
| `out of position poker` | 10 | 10 | – | 미측정 | 미측정 | — | position-play 태그 |

**벤더 대조 결과**: 위 2-A·2-B에서 양쪽을 다 잰 행 중 **불일치 3건**(`cbet` 320↔20 · `poker position` 10↔260 · `in position poker` 10↔260 단월 스파이크),
나머지는 계단값까지 일치. 불일치 3건은 전부 13편의 조준 대상이 아니므로 판정에 영향 없음.
**오스트리아**: 상위 축은 독일의 약 1/5~1/3(`gto poker` 70 · `poker range` 50 · `poker solver` 30). 스팟 용어는 전부 10 이하 —
**AT는 별도 문구가 필요한 수요가 아니다**(대회 트랙과 다르다 — de-tournament의 CAPT 사례와 구분).

---

## 3. SERP·PAA 실측 (google.de · desktop · 2026-10-02)

### 3-A. 헤드별 top-10

| 헤드 · ID | 독일어 페이지 | 나머지 | SERP 특징 |
|---|---|---|---|
| **`c-bet poker`** `…0139-0000-e9b0b5e90b84` | #1 pokerstars.de 「Poker Konzept – Continuation Bets」 · #2 pokerstars.de 「Die Continuation Bet im Poker: Deine Einführung zu C-Bets」 · #4 888poker.de 「Was ist eine Continuation Bet beim Poker?」 | pokernews(EN) · reddit(EN) · pokerskill · masterclass · youtube(Upswing) | 정의형 지배. 보드 특정 페이지 0 |
| **`donk bet`** `…0139-0000-2dcb0bd0968b` | #1 888poker.de 「Was ist eine Donk Bet beim Poker?」 · #2 pokerstars.de 「Donk Bets: Was sie sind und wann du sie setzen solltest」 · **#5 pokerstars.de 「Donk Bets bei Flops mit niedrigen Paaren auf dem Board」** · #4 reddit 「Was bedeuten Donk-Bets normalerweise?」(**`?tl=de` 기계번역**) | pokernews · pokerstrategy.com(EN, Fixed-Limit) · gtowizard 용어집 · stackexchange | 독일어 정의형 + 「wann」형. 보드 특정 = 페어 로우 보드 1건(⑥과 인접) |
| **`check raise poker`** `…0139-0000-792ff797cf9e` | #5 pokerstrategy.com/de 용어집 「Check Raise」 · #6 888poker.de 「Was ist ein Check-Raise beim Poker?」 · **#8 pokerstars.de 「Check Raise am Flop - Poker Strategie」** | en.wikipedia · **checkraisepoker.com.au · check-raise.ch(동명 대회 브랜드 = 내비게이션 노이즈)** · reddit · thepokerbank · stackexchange | 브랜드 노이즈 2/9 |
| **`3bet pot`** `…0139-0000-32ba69fa8b32` | #2 pokerstars.de 「Setzt du genug 3-Bets? So findest du es heraus」(**프리플랍**) · #4 pokerstrategy.com/de 용어집 | blog.gtowizard 「Mastering Turn Play in 3-Bet Pots OOP」 · reddit r/Poker_Theory · blackrain79 · cardquant · upswing · scribd | AI Overview 있음. **포스트플랍 3-Bet-Pot 독일어 페이지 0** |
| **`blind vs blind poker`** `…0139-0000-608e24f0cf52` | #4 de.wikipedia 「Blind (Poker)」 · #8 888poker.de 「Die 13 wichtigsten Unterschiede zwischen Small Blind und …」 · #7 reddit(`?tl=de` 기계번역 · 게임디자인) | upswing 「Playing Blind vs Blind」 · bbzpoker · twoplustwo · stackexchange · pokerstrategy.com(EN 뉴스) | AI Overview 있음. **BvB 포스트플랍 독일어 페이지 0** |
| **`monotone board poker`** `…0139-0000-b3064bd755ba` | #4 888poker.de 「Monoton - Poker Begriffe」 · **#8 pokerstars.de 「Poker Strategie – Monotone Flops spielen」** | reddit · upswing 용어집 · blog.gtowizard 「Maximizing Value on Monotone Flops」 · americascardroom · pokerchipforum · youtube | AI Overview 있음 |
| 보조 `paired board poker` `…0139-0000-363f16652683` | #5 pokerstrategy.com/de 포럼 「Wahrscheinlichkeit paired board」(Fixed-Limit) | upswing · reddit · splitsuit · jonathanlittle · pokerskill · pokerchipforum(「donk lead on a paired board」) · pokercoaching(「C-Betting On Paired Boards」) | 독일어 전략 페이지 0 |
| 보조 `range vorteil poker` `…0139-0000-2f51b19c630e` | #1 pokerstars.de 「Continuation Betting – Range Checking」 · #2 ggpoker.com/de 「Leitfaden für den Aufbau von Ranges」 · #3 reddit 「3-Way 3-Bet Flop: Habe ich einen Range-Vorteil …」(**`?tl=de` 기계번역**) · rangecraftpoker/de · pokerstrategy.com/de 용어집 · poker.de · freebetrange/de · LMU 수학과 PDF · #9 pokerstars.de 「C-Betting Range in NLHE」 | — | 거의 전부 독일어지만 **«Range-Vorteil»을 쓴 페이지는 기계번역 1건뿐** |
| 보조 `c-bet 3-bet-pot` `…0139-0000-5979f40d39da` | #5 pokerstars.de 「Cash Game – Continuation Bet」 · #7 888poker.de 「C-Betting: Wann, Warum und Wie hoch?」 | reddit 「Why does GTO always c-bet in 3 bet pots?」 · blog.gtowizard 「C-Betting IP in 3-Bet Pots」 · upswing · pokercoaching 「C-Betting On High-Card Boards in 3-Bet Pots」 · thepoker-place | ⑧의 질문(«왜 GTO는 3벳팟에서 항상 c-bet?»)이 reddit 1위 |

### 3-B. PAA 축어 (SERP가 준 그대로)

| 헤드 | PAA |
|---|---|
| `c-bet poker` | `Was bedeutet Bet im Poker?` · `Was bedeutet 3 Bet bei Poker?` · **`Was ist eine Continuation Bet beim Poker?`** · **`Was ist eine Donkbet?`** |
| `check raise poker` | (영어) `What is a check-raise in poker?` · `What is a good check-raise percentage?` · `What is back raise poker?` · `How to announce raise in poker?` |
| `blind vs blind poker` | `Darf der Big Blind in der ersten Runde erhöhen?` |
| `range vorteil poker` | `Was besagt die 15-25-35-Regel beim Poker?` |
| `paired board poker` | (영어) `What is a pair poker?` · `Is 2 pair or trip better?` · `How to play two pair poker?` · `What is the 15-25-35 rule in poker?` |
| `donk bet` · `3bet pot` · `monotone board poker` | PAA 없음 (3bet pot·monotone은 AI Overview) |

**관련 검색(related)**: `c-bet poker` → `Contibets` · `Donk bet poker` · `Value bet poker` / `3bet pot` → **`Cbet in 3bet pots` · `How to play 3 bet pots post flop`** · `Gto wizard 3 bet pots oop`.
🪶 `Contibets` = 독일어권 구어 축약 실증(관련 검색에만 등장, 볼륨 미측정).

### 3-C. 독일어 표기 패턴 (관찰 → 권고)

| 개념 | 관찰된 표기(출처) | 권고 |
|---|---|---|
| C-bet | 「**Continuation Bet**」(pokerstars.de·888poker.de 제목) · 「**C-Bets**」(pokerstars.de) · 「C-Betting」(888poker.de) · 앱 `C-Bet` | 첫 등장 `Continuation Bet (C-Bet)` → 이후 **`C-Bet`**. 기존 de 필라·terms §1과 일치 |
| Donk bet | 「**Donk Bet**」·「Donk Bets」(888·pokerstars.de) · PAA 「**Donkbet**」 · 기계번역 「Donk-Bets」 | **`Donk Bet`(띄어쓰기) / 복수 `Donk Bets`**. 볼륨은 `donk bet`=`donkbet` 20으로 동일 → 매체 다수형 채택. 동사 `donken`은 미실증 — 쓰지 마라 |
| Check-raise | 「**Check-Raise**」(888poker.de 제목 · de 코퍼스 `holdem-betting-actions`) · 「Check Raise」(pokerstars.de · pokerstrategy.com/de) | **`Check-Raise`(하이픈)**. 동사 `check-raisen`은 de 코퍼스(`holdem-continuation-bet` 「check-raisen」)에 선례 |
| 3-bet pot | 「3-Bet Pots」(영어 페이지) · 독일어 제목 실례 없음 | terms §5 합성어 규칙대로 **`3-Bet-Pot`** (앱 ⑨ 「Ein 3-Bet-Pot」과 일치) |
| Blind vs blind | 「Blind vs Blind」(upswing EN · **앱 ⑪ 축어**) · 「Big Blind vs Small Blind」(888 URL) | 제목은 **`Blind vs. Blind`**(terms §7-7 「BB vs. MP」 규칙). ⚠ 앱 설명문은 마침표 없는 `Blind vs Blind` — 재현 CTA는 스팟 이름만 쓰므로 충돌 없음 |
| Monotone | 「**Monoton**」(888 용어 제목) · 「**Monotone Flops**」(pokerstars.de) · 앱 「**Monotones Board (eine Farbe)**」 | **`monotoner Flop` / `monotones Board`**(독일어 형용사 변화) + 첫 등장 「(drei Karten einer Farbe)」 |
| Paired board | 영어 「paired board」(pokerstrategy.com/de 포럼) · 앱 「**Gepaartes Board**」 · de 코퍼스 reading-the-board H2 「gepaartes Board」 | **`gepaartes Board`** (`paired` 영어형 금지 — 독일어 제목 실례 0) |
| Range advantage | 「Range-Vorteil」은 **기계번역 reddit만** · pokerstars.de는 「Range Checking」「C-Betting Range」 | ⚠ 원어민 독일어 실례 미확보. **`Range-Vorteil`은 쓰되 첫 등장에 (Range Advantage) 병기** — 편집 판단 |
| Nut advantage | 독일어 실례 0(EN 페이지만) | **`Nut Advantage`(영어 유지)** + 「(Vorteil bei den stärksten Händen)」 풀이 — 편집 판단. terms §1 「die Nuts」 영어 유지 원칙의 연장 |
| Board texture | 「Board-Textur」 독일어 제목 실례 없음 · de 필라 H2 「Es geht um die Board-Textur」(continuation-bet) | **`Board-Textur`**(하이픈) — 코퍼스 선례 |
| Trips/Set | terms §1: `Drilling`(Three of a Kind)·`das Set` 구분 · 앱 ⑥은 「trips 26 대 20」 | ⑥⑬은 **`Trips`(보드 페어 + 홀카드 1장) / `Set`(포켓페어 + 보드 1장)**을 첫 등장에서 구분, 상위어로 `Drilling` |

---

## 4. 넓은 쿼리의 소유자 · 13편의 경계

| 넓은 의도 | 소유 페이지 (현재 seoTitle / H1) | 13편의 경계 |
|---|---|---|
| GTO · 솔버 · 플랍 이후 레인지 · 도구 사용법 (`gto poker` 390 · `poker range` 260 · `poker solver` 140) | **`/de/solver`** — title 「GTO Poker Solver kostenlos – im Browser, ohne Anmeldung \| HoldemMaster」 · H1 「Kostenloser GTO Poker Solver – berechne deine Ranges nach dem Flop」 | 각 글은 **허브(`/de/solver`) 1링크 + 이전·다음 2링크**만(`lib/gto-series.ts` 규약). 제목에 `GTO Poker Solver`·`Poker Range` 단독 표방 금지. `Solver`가 나오면 반드시 `Poker-Solver`/`GTO-Solver`로 붙인다(엑셀 함정) |
| C-Bet 정의·빈도·사이징·언제 c-bet (`c-bet poker` 30 · `continuation bet` 10) | **`de/holdem-continuation-bet`** — title 「Continuation Bet (C-Bet): Wann du am Flop feuerst, wie viel und wann du checkst」 · seoTitle 「C-Bet im Poker: warum „jeden Flop feuern“ Chips kostet」 · 태그 `c-bet poker`·`was ist eine c-bet`·`c-bet sizing`·`c-bet frequenz`·`c-bet out of position` 등 · H2 「Welche Flops solltest du c-betten? Es geht um die Board-Textur」 | ①②⑧⑪⑫⑬은 **보드 이름(A-7-2·A-K-2·K-T-6·7-6-5·A-A-6)을 제목 앞쪽에** 둔다. 「Wann c-betten?」「C-Bet-Frequenz」 일반형 H2 금지 — PAA 「Was ist eine Continuation Bet beim Poker?」는 필라 몫. 정의는 한 줄 + 필라 링크 |
| 3-Bet 정의·프리플랍 레인지·사이징 (`3 bet poker` 110) | **`de/holdem-3bet`** — seoTitle 「3-Bet im Poker: Range, Sizing und die Mathematik」 · 태그 `3-bet sizing`·`3-bet range`·`linear vs polarisiert range` | ⑧⑨⑩은 **«3-Bet-Pot + 보드»**로만. 「3-Bet Sizing」 단독 금지(⑨는 반드시 「im 3-Bet-Pot」「am Flop」 한정어). PAA 「Was bedeutet 3 Bet bei Poker?」는 필라 몫 |
| Equity · Equity Realization (`equity poker` 70 · `equity realization` 10) | **`de/holdem-equity`** — seoTitle 「Dein Win% ist nicht dein Gewinn – Equity berechnen Poker」 · 태그 `equity realization` · H2 「Warum gewinnst du mit 40% Equity keine 40% der Pots?」 | ①②③⑪은 EQR을 **그 보드의 결과 설명으로만**. 「Was ist Equity Realization?」 H2 금지 — 필라 링크 |
| Position · IP/OOP (`out of position poker` 10) | **`de/holdem-position-play`** — seoTitle 「Position im Poker: warum sie Karten schlägt (IP vs OOP)」 · 태그 `out of position spielen` 등 · H2 「Small-Blind-Strategie: warum 3-Bet oder Fold?」(프리플랍) · 「Warum c-bettest du in Position häufiger?」 | ⑪⑫⑬은 **SB(오리지널 레이저, OOP) 대 BB의 플랍**. 「Small-Blind-Strategie」 일반형 금지 |
| 보드 읽기 규칙 · 페어 보드 족보 · wet/dry (`nuts poker` 90) | **`de/holdem-reading-the-board`** — seoTitle 「Welche 5 Karten zählen? – Das Board im Hold'em lesen」 · 태그 **`gepaartes board poker`** · `wet board vs dry board` · `die nuts poker` · H2 「Was ändert ein gepaartes Board? Drillinge, Boats und Vierlinge」 · 「Wet oder Dry – wie gefährlich ist dieses Board?」 | ⑤⑥⑬은 **전략(누가 얼마나 벳하나)**. ⚠ ⑥ seoTitle이 「Gepaartes Board」로 시작하므로 **보드 숫자 6-6-3 + 「97% Check」를 같은 줄에 고정**해 규칙 글과 의도를 가른다 |
| Check-Raise 규칙(합법인가) | **`de/holdem-betting-actions`** — 태그 `check raise erlaubt` · FAQ 「Das ist der Check-Raise, und er ist vollkommen legal」 | ⑦은 **전략**. 「Ist ein Check-Raise erlaubt?」류 금지 |
| Small Blind vs Big Blind 정의 (`small blind vs big blind` 10) | `de/holdem-blind-meaning`(de-tag-volumes 기록) | ⑪⑫는 「Blind vs. Blind」 = 블라인드끼리의 포스트플랍 대결로만 |
| 일반 전략·「poker strategie」 | `de/holdem-strategy` — seoTitle 「Warum Poker-'Tipps' nie hängenblieben – Texas Hold'em Strategie」 · 태그 `poker range`·`gto poker`·`c-bet strategie`(명목 태그) | 13편은 「Strategie」 일반형 제목 금지 |
| **주인 없음** | `check raise poker` 30 · `donk bet` 20 · `3bet pot` 10 · `blind vs blind poker` 10 · `monotone board poker` 10 · `nut advantage` 10 | ④=donk bet · ⑦=check-raise 전략 · ⑧~⑩=3-Bet-Pot 포스트플랍 · ⑪⑫=BvB · ⑤=monotone. **단 13편 중 한 편만 각 축의 «대표»가 되게** 한다(아래) |

**카니발 판정**
- 🟢 **실질 위험 낮음**: 넓은 쿼리는 전부 볼륨이 작고, 13편은 보드 숫자로 의도가 갈린다. 기술 용어의 반복 자체는 카니발이 아니다.
- 🟠 **주의 4곳**
  1. **⑥ ↔ reading-the-board** — 후자가 `gepaartes board poker` 태그를 이미 갖고 있다(볼륨 null). ⑥ 제목은 6-6-3을 빼지 마라.
  2. **⑪⑫ 둘 다 「Blind vs. Blind」로 시작** — 축의 대표는 ⑪(K-T-6, 「C-Bet im Blind vs. Blind」). ⑫는 비교 글로 「7-6-5」를 앞세우고 ⑪을 링크.
  3. **⑧⑨⑩ 셋이 「3-Bet-Pot」** — ⑧=「c-bet im 3-Bet-Pot」(reddit 1위 질문과 일치) · ⑨=「Bet Sizing im 3-Bet-Pot」 · ⑩=「Overpairs / niedriges Board」로 의도 분리.
  4. **①②** — 둘 다 「BB가 거의 전부 체크」. ①=「Top Pair도 체크」, ②=「99,8%」 + A-High와의 대조로 가른다.
- 🔴 **앱 설명문 함정**(verbatim-de §4): ①「BTN … kleine C-Bet」 · ④「Die C-Bet-Frequenz des BTN bricht ein」 · ⑥「Bluff-Frequenz steigt」 · ⑦「BB check-raist oft」는 **폐기된 인과**다.
  ①~⑦의 숫자는 **BB의 첫 액션**이지 BTN의 c-bet 빈도가 아니다. 제목·H2에서 「C-Bet-Frequenz」로 부르지 마라(EN ①의 title 「C-Bet Frequencies」를 직역하지 않는다).

---

## 5. 13편 배정

**`title`은 고정 문안**(카드·readnext·이전/다음 링크가 같은 문자열을 쓴다). 길이 = 문자 수(node `[...s].length` 실측).
`seoTitle`은 전부 ≤60자. **주 의도는 전부 편집 판단의 롱테일**이다 — 해당 문자열을 볼륨으로 잰 것이 아니다(근처 측정값은 괄호에 적었다).
H2/FAQ 열: **[실측]** = §3의 SERP 제목·PAA 축어에서 온 문형 · **[편집]** = 우리 문안. EN 원문의 구조에 끼워 넣고, 원문에 FAQ가 없는 글에 키워드용 FAQ를 새로 만들지 않는다.

| # | slug | `title` (자) | `seoTitle` (자) | 주 의도 (편집 롱테일) | H2 / FAQ 문형 |
|---|---|---|---|---|---|
| 1 | `a-high-board-cbet` | A-7-2: Top Pair und trotzdem Check (34) | A-7-2-Flop: Warum der Big Blind selbst mit Top Pair checkt (58) | `A-7-2 flop` · «trockenes A-High-Board Top Pair checken» (근처 측정: `top pair poker` 10) | [편집] «Warum checkt der Big Blind sogar mit Top Pair?» · [편집] «Equity oder Equity Realization – was entscheidet hier?» · [편집, FAQ 후보] «Musst du auf einem Ass-High-Flop immer setzen?» · 🔴 98,2% = BB 체크, BTN c-bet 아님 |
| 2 | `k-high-board-cbet` | K-8-3: Der Big Blind checkt 99,8% (33) | Trockenes K-High-Board K-8-3: 99,8% Check im Big Blind (54) | «trockenes K-High-Board» (앱 스팟명 축어와 동일) | [편집] «Warum checkt der Big Blind auf K-8-3 noch öfter als auf A-7-2?» · [편집] «Welche Backdoor-Draws gibt es auf einem Flop ohne direkte Draws?» |
| 3 | `broadway-board-strategy` | Q-J-T: Draws allein reichen nicht (33) | Q-J-T Two-Tone: 68% haben einen Draw, 99,9% checken (51) | «Nut Advantage auf Q-J-T» (근처: `nut advantage` 10 · `range advantage poker` 10) | [편집] «Wer hat auf Q-J-T den Nut Advantage?» · [편집] «Warum reicht ein Draw nicht, um anzuspielen?» · [편집, FAQ 후보] «Ist Range-Vorteil dasselbe wie Nut Advantage?» · 🔴 `poker range` 단독 표방 금지(/de/solver) |
| 4 | `donk-bet-strategy` | 9-8-7: Hier ist die Donk Bet richtig (36) | Donk Bet am 9-8-7-Flop: Warum der Big Blind 23,7% setzt (55) | «Donk Bet 9-8-7» (근처: `donk bet` 20 · `donk bet poker` 10 · `when to donk bet` 10) — **de에서 donk 축의 대표 글** | [실측: PAA] «Was ist eine Donk Bet?» — 본문 첫 절에 한 문단으로 흡수(PAA 축어는 「Donkbet」, 우리 표기는 §3-C대로 「Donk Bet」) · [실측: pokerstars.de 제목형 «wann du sie setzen solltest»] «Wann ist eine Donk Bet richtig – und warum gerade auf 9-8-7?» · [편집] «Hat der Big Blind hier wirklich einen Range-Vorteil?» · 🔴 BB 리드 = donk bet, c-bet 아님 · 🔴 BB가 equity 우위라고 쓰지 않는다(앱 ④ 결함) |
| 5 | `monotone-board-strategy` | Monotoner Flop: Der Nut Flush checkt (36) | Monotoner Flop Q-9-2: Warum selbst der Nut Flush checkt (55) | «monotoner Flop Strategie» (근처: `monotone board poker` 10 · `nut flush` 50) | [실측: pokerstars.de 「Monotone Flops spielen」] «Wie spielst du einen monotonen Flop?» → 우리 판: «Warum verschwindet die große Bet auf dem monotonen Flop?» · [편집] «Was ändert eine einzelne Pik-Karte in deiner Hand?»(Blocker) · [편집, FAQ 후보] «Warum checkst du mit dem Nut Flush?» |
| 6 | `paired-board-strategy` | 6-6-3: Mehr Trips, trotzdem 97% Check (37) | Gepaartes Board 6-6-3: Mehr Trips, trotzdem 97% Check (53) | «gepaartes Board 6-6-3» (근처: `paired board poker` 10 · `gepaartes board poker` null) | [실측: pokerstars.de 「Donk Bets bei Flops mit niedrigen Paaren auf dem Board」] «Warum setzt der Big Blind auf einem niedrigen gepaarten Board trotzdem kaum?» · [편집] «Trips oder Set – wie entsteht der Drilling?» · [편집, FAQ 후보] «Heißt mehr Trips automatisch anspielen?» · 🔴 앱 ⑥「Bluff-Frequenz」 문장 쓰지 마라 |
| 7 | `low-board-check-raise` | 6-5-2: Erst checken, dann Check-Raise (37) | Check-Raise am Flop 6-5-2: Warum der BB erst checkt (51) | «Check-Raise am Flop» 6-5-2 (근처: `check raise poker` 30 · `check raise flop` 10 · `when to check raise` 10) — **de에서 check-raise 전략 축의 대표 글** | [실측: pokerstars.de 제목 「Check Raise am Flop」] «Check-Raise am Flop: Warum der Big Blind auf 6-5-2 zuerst checkt» · [실측 영어 PAA 「What is a good check-raise percentage?」 → 독일어 편집] «Wie oft solltest du check-raisen?» — 🔴 단 **사전계산은 첫 액션까지**다. 14,9% 같은 check-raise 빈도는 별도 재계산 수치이므로 EN 원문 범위 밖이면 쓰지 않는다 · [편집, FAQ 후보] «Ist Checken hier passiv?» · 「Ist ein Check-Raise erlaubt?」는 betting-actions 몫 |
| 8 | `3bet-pot-cbet` | A-K-2: Die ganze Range bettet (29) | 3-Bet-Pot auf A-K-2: Warum niemand checkt – SPR 4 (49) | «C-Bet im 3-Bet-Pot» A-K-2 (근처: `3bet pot` 10 · `spr poker` 40 · related 「Cbet in 3bet pots」) — **de에서 3-Bet-Pot 축의 대표 글** | [실측: reddit 1위 「Why does GTO always c-bet in 3 bet pots?」 → 독일어 편집] «Warum bettet im 3-Bet-Pot auf A-K-2 die ganze Range?» · [편집] «Was ändert ein SPR von rund 4?» · [편집, FAQ 후보] «Heißt niedriger SPR: immer setzen?» · 🔴 3-Bet 사이징·레인지 일반형 금지 |
| 9 | `3bet-pot-bet-sizing` | Q-T-7: 98,4% mit derselben Size (31) | Bet Sizing im 3-Bet-Pot: 98,4% setzen zwei Drittel Pot (54) | «Bet Sizing im 3-Bet-Pot» Q-T-7 (근처: `bet sizing poker` 10 SD 50) | [편집] «Warum landen 98,4% der Range bei zwei Dritteln Pot?» · [편집] «Was erklären die Pot Odds – und was nicht?» · [편집, FAQ 후보] «Was ist geometrisches Bet Sizing?» (근처: `geometric bet sizing` 10) · 🔴 「3-Bet Sizing」(프리플랍) 단독형 금지 — 「im 3-Bet-Pot」 필수 |
| 10 | `3bet-pot-low-board` | 8-5-2: Overpairs halten den Druck (33) | 3-Bet-Pot auf 8-5-2: Nur 3 Combos treffen – 97,8% Bet (53) | «niedriges Board im 3-Bet-Pot» (근처: `overpair poker` 10 · `polarized range poker` 10) | [편집] «Nur drei Combos treffen das Board – wo sind die Overpairs?» · [편집] «Warum liegen die Sets beim Caller?» · FAQ 신설 금지(pt 판단 승계) · 🔴 97,8% = 2/3팟 큰 사이즈 빈도. 「총 벳 빈도」로 부르지 마라 |
| 11 | `blind-battle-cbet` | K-T-6: C-Bet im Blind vs. Blind (31) | Blind vs. Blind auf K-T-6: Der Small Blind bettet 67,4% (55) | «C-Bet Blind vs. Blind» K-T-6 (근처: `blind vs blind poker` 10) — **de에서 BvB 축의 대표 글** | [실측: upswing EN 제목 「Playing Blind vs Blind」 → 편집] «Wie spielst du Blind vs. Blind am Flop?» → 우리 판: «Warum setzt der Small Blind auf K-T-6 zuerst – ohne Position?» · [편집] «Wie kommt die Equity Realization out of Position über 100%?» · [실측 PAA 「Darf der Big Blind in der ersten Runde erhöhen?」] = **규칙 질문이라 채택 안 함**(blind-meaning 몫) |
| 12 | `blind-battle-connected-board` | 7-6-5: Die C-Bet fällt auf 9,6% (31) | Blind vs. Blind auf 7-6-5: Warum die C-Bet auf 9,6% fällt (57) | «Board-Textur Blind vs. Blind» 7-6-5 (근처: `board texture poker` 10) | [편집] «Warum werden aus 67,4% nur 9,6%, wenn sich nur der Flop ändert?» · [편집] «Welche Hände tragen die wenigen Bets auf 7-6-5?» · 🔴 ④의 donk bet과 같은 액션으로 비교하지 마라 · ⑪ 링크 필수 |
| 13 | `ace-paired-board-strategy` | A-A-6: Die C-Bet steigt auf 80,1% (33) | A-A-6-Flop: Warum der Small Blind 80,1% bettet (46) | «A-A-6 gepaartes Ass Blind vs. Blind» (앱 스팟명 「Board mit gepaartem Ass」) | [편집] «Wer hat auf A-A-6 mehr Trips?» · [편집] «Warum setzen zwei gepaarte Flops so unterschiedlich?» · 🔴 ⑥(BTN vs BB)과의 대비는 **포지션·레인지도 바뀐 비교**임을 명시 · 80,1% = 4,5bb 0,5% + 2bb 79,6% |

### 5-A. 적용 메모
- 소수 구분자는 **쉼표**(`98,2%` · `5,5bb`) — 앱 de 축어와 terms §3 일치. 퍼센트 앞 공백 없음.
- 대시는 ` – `(terms §7-10), 인용부호는 `„…“`. 위 seoTitle의 ` – `는 그 규칙을 이미 따랐다.
- `Solver`는 제목에 넣지 않았다(13편 모두 보드+스팟으로 충분). 본문에서 쓸 때는 **`Poker-Solver` / `GTO-Solver`**로만.
- 재현 CTA 스팟 이름은 **verbatim-de §3 축어**(예: 「Trockenes A-High-Board」 · 「Board mit gepaartem Ass」)를 굵게 그대로.
- `title` 길이는 29~37자. pt의 ≤40 규칙을 de에도 적용했다(전 행 통과).
- 오스트리아 전용 문구는 불필요(§2 결론).

---

## 6. 발행 전 확인

- `title` 13개를 **문자 그대로** 모든 배치·readnext·이전/다음 링크에 쓴다.
- `seoTitle ≤ 60` · `desc ≤ 160` — desc는 이 문서가 정하지 않았다(EN desc의 수치를 그대로 옮기되 de 소수 표기로).
- ①~⑦: 수치는 **BB의 첫 액션**. 어느 제목·H2도 그것을 BTN의 C-Bet-Frequenz라 부르지 않는다.
- ⑦·⑩: 사전계산 출력이 보여 주지 않는 후속 street·check-raise 빈도를 약속하지 않는다.
- ⑪→⑫는 보드만 바뀐 통제 비교, ⑥→⑬은 포지션·레인지도 바뀐 비교 — 본문에서 구분.
- 이 팩의 볼륨은 **2026-10-02 측정값**이다. 08-24 뱅크의 `poker range` 320은 오늘 260 — 낡은 수치를 섞지 마라.
