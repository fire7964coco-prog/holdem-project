# 키워드 뱅크 — 영어 GTO 시리즈 13편 + `/en/solver` 랜딩 보강

> 실측일 **2026-08-19** · lowfruits(Country=United States · Language=English · Max DA 25 ·
> PAA·Related 추출 ON · Forums as weak spots ON) 시드 **11개 · 원본 xlsx 13파일**.
> winnable 판정 = **WS3 ≥ 1** 또는 **(WS10 ≥ 1 & LowDA ≤ 30)**.
> 상위 축(솔버·브랜드) 볼륨은 `en-gto-solver.md`(라쿠 실측)가 짝이다. **둘을 같이 본다.**

---

## 0. 한 줄 결론 — **가장 큰 기회는 13편이 아니라 랜딩이었다**

`gto poker *`(735개)와 `poker postflop *`(444개)에서 **LowDA 1~7의 자리가 무더기로** 나왔다.
13편은 볼륨이 거의 «데이터 없음»이라 **winnable로만** 정당화되고, 랜딩은 **볼륨과 winnable을 둘 다** 갖는다.
→ **순서: 랜딩 보강 먼저, 13편 그다음.**

## 1. 시드별 수확 (전량 SERP 분석 완료)

| 시드 | 유니크 | winnable | 판정 |
|---|---:|---:|---|
| `gto poker *` | **735** | **139** | ★랜딩 |
| `poker tournament *` | **1,253** | **185** | 대회 클러스터(별건) · buy-in 판정용 |
| `poker postflop *` | **444** | 68 | ★랜딩 |
| `poker check raise *` + `* check raise poker` | 379 | 80 | ⑦ |
| `poker c bet *` + `* c bet poker` | 233 | 55 | ①②④ |
| `poker spr *` | 197 | 30 | ⑧ |
| `poker range advantage *` | 153 | 28 | ①③ |
| `poker board texture *` | 121 | 20 | 공통 |
| `monotone flop *` | 116 | 21 | ⑤ |
| `poker blind vs blind *` | 88 | 12 | ⑪⑫ |
| `poker equity realization *` | 79 | 12 | 전편 공통 |
| `paired flop *` | 63 | 9 | ⑥ |
| ~~`poker monotone board *`~~ | 27 | 7 | ❌ 표현 실패(§4-1) |
| ~~`poker paired board *`~~ | 42 | 6 | ❌ 표현 실패 |

---

## 2. ★ 랜딩 `/en/solver` 보강용 (우선순위 1)

**LowDA가 한 자리인 자리들이다. 우리 페이지가 실제로 제공하는 것과 정확히 겹친다.**

| 쿼리 | Vol | WS3 | **LowDA** | 어디에 반영 |
|---|---:|---:|---:|---|
| **gto poker meaning** | **390** | 2 | 22 | H2 「What does GTO mean in poker?」 신설 |
| **gto poker trainer** | 70 | 2 | **3** | 트레이너 H2 표기 |
| gto poker theory | 70 | 2 | 14 | 본문 |
| **gto poker practice free** | — | 2 | **1** | 트레이너 절 |
| **gto poker software free** | — | 2 | **1** | 무료 절 |
| **poker postflop solver free / online free** | — | 2 | **1** | postflop H2 |
| **poker solver**(postflop 시드) | — | 1 | **1** | 이미 h1·제목 보유 |
| poker postflop trainer / best ~ / ~free | — | 1~2 | 7~16 | 트레이너 절 |
| poker postflop ranges | — | 3 | 16 | postflop H2 |
| poker postflop strategy | 30 | 2 | 21 | postflop H2 |
| poker postflop charts / ~ pdf | — | 2 | 16~20 | (⚠ 차트는 `/en/hand-chart` 축과 겹침 — 본문 언급만) |
| **which gto solver is better, piosolver or gtowizard** | — | 2 | **5** | FAQ 신설 |
| **gto poker open source** | — | 1 | **3** | FAQ(AGPL 포크) |
| wasm postflop | — | 1 | **3** | 비교 절(이미 문단 있음) |
| gto poker app / training app | 20 | 1 | **3** | 설치(PWA) 절 |
| gto poker free / solver free / calculator free | 10~20 | 1 | 7~20 | 무료 절 |
| gto poker for beginners | 10 | 1 | 9 | 「처음이라면」 절 |
| gto poker chart 9 max | — | 3 | 11 | ⚠ 프리플랍 의도 — **`/en/hand-chart`** |
| gto poker chart / ranges / chart preflop | 390 / 30 / 10 | 1 | 11 | ⚠ **`/en/hand-chart`의 자리. 랜딩이 가져가지 마라** |

🔴 **`gto poker chart` 390은 프리플랍 차트 의도다.** 한국어에서 「홀덤 gto 표」를 `/solver`가,
「홀덤 차트」를 `/hand-chart`가 나눠 가진 것과 **같은 분리**를 EN에도 적용한다.

---

## 3. 13편 매핑 (편별 H2·FAQ 재료)

> 🔴 **각 편이 서로 다른 쿼리를 잡는다.** 같은 것을 두 편이 잡으면 자기들끼리 깎는다.
> 🔴 **기존 EN 글의 자리는 가져오지 않는다** — §5 참조.

### ① a-high-board-cbet (A♥7♦2♣) — 레인지 우위
`what's a good c bet percentage`(WS3 2·DA28) · `when to c bet poker`(10·WS3 2·DA22) ·
`what is a dry board in poker`(WS3 2·DA19) · `what does range advantage mean in poker`(DA28) ·
`poker range advantage`(10·DA28)

### ② k-high-board-cbet (K♠8♦3♣)
`should i always c-bet`(WS3 2·DA22) · `delayed c bet poker`(WS10 4·DA19) ·
`poker c bet example` · `what are c bets in poker`(DA19)

### ③ broadway-board-strategy (Q♠J♦T♠) — 너트 우위
★`what is the difference between nut advantage and range advantage in poker`(**WS3 3**·DA19) ·
`range advantage vs nut advantage`(+chart·texas holdem 변형 · WS3 2·DA19~23) ·
`dynamic board poker`(WS3 2·DA19)

### ④ donk-bet-strategy (9♥8♥7♣)
★`what is a donk bet in poker`(**90**·WS3 2·DA28) · `donk bet poker`(140·WS3 1·DA21) ·
`when not to c bet`(WS3 2·DA22) · `poker when to check`(10·WS3 2·DA25)

### ⑤ monotone-board-strategy (Q♠9♠2♠)
`monotone flop`(10·DA30) · `monotone flop strategy` · `how to play monotone flop` ·
`what is a monotone board in poker`(DA30) · `how likely is it to flop a flush`(WS3 2)

### ⑥ paired-board-strategy (6♣6♦3♥) — 🔴 **2026-08-20 실측으로 축이 바뀌었다 (발행 완료)**

lowfruits가 준 후보(`paired flop example` · `paired flop poker` · `paired flop strategy` ·
`how rare is a pair in poker`)를 **라쿠 English/US 월간검색량으로 재보니 전부 「데이터 없음」**이었다.
같이 확인한 `paired flop` · `paired flops in poker` · `paired board strategy` ·
`how to play paired boards in poker` · `odds of paired flop` · `c bet paired board` ·
`pair the board poker` · `small pair poker`도 **전부 0**이다.
→ 뱅크가 이 편을 「재료가 얇다」고 적어 뒀지만 **얇은 게 아니라 축이 틀렸다.**

**살아 있는 축 = trips** (라쿠 English/US 12개월 평균):

| 키워드 | 볼륨 | 추세 | 판정 |
|---|---|---|---|
| `trips poker` | 210 | — | 정의는 glossary 소유 |
| `what is trips in poker` | 110 | — | 정의는 glossary 소유 |
| ★**`trips vs set poker`** | **40** | **12개월 +95.4%** | ✅ **이 글이 가져간다** |
| `poker trips vs set` | 20 | +44% | ✅ 같은 축 |
| `paired board poker` | 10 | — | ✅ |
| `bottom pair poker` | 10 | — | ✅ (22 문단) |

🔴 **`full house poker` 9,900은 조준 금지** — 족보 용어라 `holdem-hand-rankings` 소유다.
🔴 **`quads poker` 6,600은 허수다** — 월별을 열면 2026-01에 **74,000** 한 번 튀고 나머지 달은
   170~590이다. 12개월 평균이 스파이크에 끌려간 값이고 실제 수준은 **200~400**.
   [[keyword-volume-order-of-magnitude-trap]] 계열이라 채택하지 않았다. **되살리지 마라.**

📌 **분할**: 「trips가 무엇인가」는 `holdem-glossary`·`holdem-hand-rankings`가 갖고,
   이 글은 **«이 보드에서 trips와 set이 어떻게 갈리는가»**만 가져간다.
   ③편이 `range advantage`의 «차이»만 가져간 것과 같은 분할이다.
   전수 확인 결과 **verbatim 「trips vs set」을 소유한 영어 글은 없었다** — 빈 자리였다.

▶ SERP (2026-08-20): Upswing ×2 · SplitSuit · PokerNews ·
  **GTO Wizard 「Attacking Paired Flops From the BB」** ← 각도가 정확히 겹치는 경쟁글.
  차별점 = ①콤보 수(트리플 26 대 20 · 포카드 1 · 풀하우스 3) ②BB가 트리플을 더 갖고도 97% 체크
  ③포켓페어 에퀴티 표(TT 76.0% → 22 50.4%).
  🪶 상위글의 「low paired flop에서는 작게 자주 친다」는 **레이저 기준**이라 충돌이 아니다 —
     이 글은 콜러 좌석이고, 콜러의 소수 리드는 오히려 큰 사이즈가 많다(2.0% 대 1.0%).

### ⑦ low-board-check-raise (6♠5♥2♦) — 🔴 **2026-08-20 실측으로 축이 바뀌었다 (발행 완료)**

⑥편과 **같은 일이 또 일어났다.** 뱅크가 ★를 달았던 후보를 라쿠 English/US로 재보니 —

| 뱅크 후보 | 라쿠 US 볼륨 | 판정 |
|---|---|---|
| ★`what is a good check-raise percentage` | **데이터 없음** | ❌ |
| `poker check raise size chart` | **데이터 없음** | ❌ |
| `poker check raise size texas holdem` | **데이터 없음** | ❌ |
| `why was check-raising banned` | **데이터 없음** | ❌ (훅 아이디어로만) |
| `can you check-raise in poker` | 10 | △ |
| `check raise bad etiquette` | 10 (12개월 내내 평탄) | △ |

**6개 중 4개가 볼륨 0이다.** lowfruits의 WS3/DA는 «이길 수 있나»를 재는 값이지 «수요가 있나»가 아니다 —
두 개를 같은 표에 적어 두면 다음 세션이 ★를 수요로 오독한다.

**실제로 살아 있는 축**

| 키워드 | 볼륨 | 추세(12m/6m/3m) | 판정 |
|---|---|---|---|
| ★**`check raise poker`** | **210** | −20.0 / −15.7 / 0 | ✅ 이 축의 유일한 몸통 |
| ★**`when to check raise`** | **20** | **+56.5 / +38.5 / +28.6** | ✅ **클러스터에서 유일한 상승축** |
| `what is a check raise in poker` | 70 | −31.0 | ○ FAQ |
| `wet board poker` | 50 | −27.3 | ○ |
| **`what is a wet board in poker`** | **40** | **+20.0 / +20.0 / +7.1** | ✅ 상승 |
| `check raise meaning` | 30 | +9.1 | ○ |

🔴 **`check raise` 단독 260을 제목·태그에 쓰지 마라 — 포커 검색이 아니다.**
   소총 치크라이저(cheek riser) · 미 연금 인상(social security check raise 2026) · pytest ·
   **브리즈번/퀸즐랜드/나고야/타이중의 «Check Raise» 포커클럽 매장명** · 포르쉐 브레이크등 ·
   의학 용어(ICP/JVP)가 섞인 값이다. **`poker` 앵커가 붙은 210 쪽이 진짜다.**

🔴 **`check raise` = `check raising` = `check-raise` 260, 그리고
   `check raise poker` = `poker check raise` = `check raise in poker` 210은
   «세 키워드»가 아니라 «한 값의 3중 표시»다** — 월별 12개 값까지 전부 동일하다. **더하지 마라.**
   이 축의 실질 몸통은 「하이픈·어순·poker 유무 무관 한 덩어리 ≈ 210」이 전부다.

🔴 **라쿠 `suggest-keywords`의 metrics는 일본 DB다.** `check raise`에 **880**을 붙여 주지만
   location=United States로 `search-volume-history`를 돌리면 **260**이다(3.4배 과대계상).
   같은 응답에 「名古屋ポーカー 1300」이 섞여 있는 것이 증거다.
   **판정에 쓸 수 있는 값은 `search-volume-history`(English / United States)뿐이다.**

🔴 **`low board`·`low flop` 축은 검색이 아예 없다.** `low board poker` 데이터 없음,
   `low flop` 서제스트 95건은 전부 flip-flop 샌들·플립플롭 회로·low taper fade다.
   `low hand poker rules`(10)는 **로우볼** 의도라 무관하다. **제목·H2에 쓰면 0을 조준하는 것이다.**
   ⚠ `6 5 2 flop` 같은 **보드 표기 검색은 존재하지 않는다**(전부 인도 영화 흥행).

🪶 **⑥편 §4-1의 「영어권은 board가 아니라 flop」이 이 축에서는 뒤집힌다.**
   `wet board poker` 50 · `what is a wet board in poker` 40 vs
   `wet vs dry flop poker` **0** · `dry flop poker` **0**.
   §4-1의 flop 우세는 「monotone」 같은 **한정어와 붙었을 때**의 얘기다. 텍스처 어휘 단독은 board가 이긴다.

🪶 1월 봉우리(480)는 ⑥의 `quads poker`(단일 74,000 스파이크)와 달리 **클러스터 공통 계절성**이다
   (`check raise poker` 390 · `what is a check raise in poker` 140이 같은 달에 함께 튄다).
   다만 연평균 210/260이 그 1월에 끌려 올라간 값이므로 **실질 기준선은 170~210**으로 계획하라.

▶ **카니발 — EN 사이트는 이 자리가 완전히 비어 있었다** (2026-08-20 전수)
  `lib/posts-en/` 50편 중 slug에 `check`가 든 글 **0개** · H2/H3에 check-raise를 가진 글 **0개**.
  KO에는 `holdem-check-raise`가 있지만 EN 대응본이 없다 → ⑦편이 이 자리를 가져갔다.
  🔴 단 **「체크레이즈가 합법인가」류는 `holdem-betting-actions`가 이미 축어로 답한다** — 링크로 넘긴다.

▶ SERP (2026-08-20) — **Upswing이 이 축을 가장 두껍게 점유**한다:
  `5 Winning Check-Raising Strategies` · `5 Tips For Check-Raising The Flop` ·
  **플랍 체크레이즈 이후 턴 전개를 4부작**으로 소유. 그 밖 pokercoaching·thepokerbank·cardplayer·888.
  **GTO Wizard는 check-raise 제목 글이 검색으로 안 잡혔다**(⑥의 페어보드 글 같은 정면충돌은 없다).
  ⚠ 이 「없다」는 WebSearch 기반이라 확정이 아니다.
  → 차별점은 **한 스팟의 실측 레인지**다. 일반론 글은 「레이즈 100% 핸드가 정확히 트리플 9콤보 + 65s 2콤보,
     블러프는 전부 것샷/양방」을 줄 수 없다.

⚠ **SERP DOM 직접 파싱은 이번에 실패했다** — 구글 429/캡차, DuckDuckGo 캡차, Bing 오염.
   위 Top10은 WebSearch 반환 순서이고 **PAA는 축어로 확보하지 못했다.** 자동완성 질문군으로 대체했다.
   **이걸 PAA라고 부르지 마라.**

### ⑧ 3bet-pot-cbet (A♦K♠2♥ · SPR 4.0) — 🟢 **2026-08-20 실측: 뱅크가 맞았다 (발행 완료)**

**⑥⑦와 달리 ★후보가 살아남은 첫 편이다.** 그래도 7개 중 4개는 0이었다.

| 뱅크 후보 | 라쿠 US 볼륨 | 추세(12m) | 판정 |
|---|---|---|---|
| ★**`poker spr`** | **480** | **−19.9%** | ✅ **주축.** 13편 전체 최대 |
| `effective stack poker` | 30 | +9.1% | ✅ 보조 |
| `what does spr mean in poker` | 20 | −7.7% | ✅ FAQ |
| `what is an spr in poker` | **0** | — | ❌ |
| `poker spr strategy` | **0** | — | ❌ |
| `poker spr rules` | **0** | — | ❌ (DA30 표기 무의미) |
| `poker spr meaning texas holdem` | **0** | — | ❌ |

**새로 찾은 축**

| 키워드 | 볼륨 | 추세(12m/6m/3m) | 판정 |
|---|---|---|---|
| ★**`what is spr in poker`** | **140** | 0 / −13.4 / −12.5 | ✅ **H2에 축어로.** 자동완성 후보가 단 3개뿐인 깨끗한 질문형 |
| `spr poker meaning` | 90 | +1.9 / −6.9 / −12.9 | ✅ FAQ로 흡수 |
| `spr meaning poker` | 50 | −7.7 | ✅ 위와 한 덩어리 |
| `stack to pot ratio` | 50 | **−59.3%** | 🔴 반토막. **제목에 풀네임 금지** |
| `polarized range poker` | 30 | **+12.5 / +12.5 / +12.5** | ✅ 훅 축 최대 + **유일한 상승세** |
| `capped range poker` | 20 | −11.1 | △ 본문 논거용 |
| `spr in poker meaning` | 10↗ | **+41.2%** | 🌱 신생·상승 |
| `stack to pot ratio explained` | 10↗ | 3m **+50%** | 🌱 H2 문구 후보 |

🔴 **`poker spr` = `spr poker` = `spr in poker`는 24개월 배열이 완전히 같은 «한 클러스터»다.
   총합은 1,440이 아니라 480이다. 더하지 마라.**
   (같은 현상: `range bet poker`↔`range betting poker` · `3bet pot`↔`3 bet pot`↔`3bet pots`)

🔴 **`what is spr` 720은 포커가 아니다.** 자동완성이 spring water · sprinting · spreadsheet ·
   spring boot · spravato다. CPC $14.4에 competition 1(비포커 광고).
   2026-03의 **1900 스파이크**도 포커와 무관한 일회성이다. **조준 금지.**
   맨 `spr`·`spr meaning`도 다의어(의료·군사·총기)다.

🔴 **`3bet pot` 축은 US 볼륨 10이 상한이다** — 17개 변형(`3bet pot strategy` · `cbet 3bet pot` ·
   `how to play 3bet pots` · `3bet pots oop` …)이 **전부 0**이고, 0이 아닌 건 `3bet pot(s)` 계열 10 하나뿐.
   **그런데 SERP는 꽉 차 있다** — GTO Wizard **IP·OOP 2부작**(`c-betting-oop-in-3-bet-pots` ·
   `c-betting-ip-in-3-bet-pots`) · Upswing `c-bet-3-bet-pots-oop` ·
   PokerCoaching **보드텍스처 3부작**(low / **high card** / paired — 하이카드가 이 편과 같은 자리).
   → **볼륨 0 + 강자 정면. 제목 조준 금지, 본문 H2로만.**

🟢 **반대로 SPR 축 SERP는 전부 «용어사전·일반론»이다** (2026-08-20 WebSearch):
   PokerNews `/pokerterms/stack-to-pot-ratio` · Upswing `/glossary/spr/` **한 장뿐** ·
   SplitSuit · thepokerbank · 888 · pokercoaching · redchip.
   **GTO Wizard는 SPR 쿼리 양쪽 다 미출현.**
   → 「한 스팟(A♦K♠2♥·SPR 4.0)의 실측 솔버 출력」을 가진 글이 SERP에 **없다.** 여기가 빈자리다.

▶ **카니발 — EN은 이 자리가 완전히 비어 있었다** (2026-08-20 전수)
  `lib/posts-en/`에 **SPR 주력 0편 · 3벳팟 주력 0편 · `condensed` 0건.**
  `holdem-3bet`은 H2 13개가 **전부 프리플랍**이고 `3bet pot` grep 0건 →
  카니발이 아니라 **«프리플랍은 저기, 플랍은 여기»로 갈라 붙일 파트너**다(양방향 링크 완료).
  🔴 **차별화 필수 지점**: ①편이 이미 A하이 보드에서 「BB 레인지가 **capped**」를 썼다.
     ⑧은 **정반대 구조**(3벳팟에서는 BB가 상단을 독점, BTN이 캡드)임을 `:::note`로 명시 대조했다.
  🪶 `polarized`는 `holdem-3bet`의 「Linear vs. Polarized 3-Bet Ranges」가 **프리플랍 층**에서 소유 →
     ⑧은 «플랍에서 콘덴스드 레인지를 상대한다»는 층으로만 썼다.

⚠ `poker spr calculator / chart / online / app / table / cheat sheet`는 **`/en/calculator`의 자리**다.
⚠ **`poker spr` 480은 하락 중이다**(12m −19.9% · 3m −25.5% · yoy −18.8%). 실재하지만 성장축은 아니다.
   상승축은 `spr in poker meaning`(+41.2%) · `stack to pot ratio explained`(3m +50%) ·
   `polarized range poker`(+12.5%) 셋뿐이고 전부 10~30이다.

### ⑨ 3bet-pot-bet-sizing (Q♥T♥7♠)

🔴 **이 항목의 원래 배정은 2026-08-20 착수 시점에 폐기됐다.** 아래 취소선이 옛 배정이다.
~~`poker c bet sizing chart`(DA22) · `poker c bet sizing` · `river bet sizing poker`(WS3 2·DA22)~~
→ **`holdem-continuation-bet`이 태그 `c-bet sizing` + H2 「How Much Should You C-Bet? (Sizing)」로
  이미 소유하고 있었다.** ⑧의 「홀덤 SPR」과 **정확히 같은 사고**이고, 착수 시점 grep이 잡았다.
  [[absence-may-be-the-standard]] · 「비어 있다」가 아니라 「그 사이에 채워졌다」를 확인하라.

**확정 배정 (2026-08-20 라쿠 English/US 24개월 실측)**

| 키워드 | 월간 | SEO난이도 | 추세 | 자리 |
|---|---:|---:|---|---|
| **`poker bet sizing`** | **110** | **8** | 12m −30% · yoy −58.8% | **주 키워드**(seoTitle·태그) |
| **`wet board poker`** | **50** | 13 | 12m −27% | 보조(seoTitle·H2·FAQ) |
| `overbet poker` | 40 | 10 | 12m −32% | FAQ 1문항 |
| **`geometric bet sizing`** | **20** | 18 | 3m **0%**(유일하게 안 빠짐) | **전용 H2** |
| `how much to bet in poker` | 10 | 12 | — | FAQ 문구 |
| `poker bet sizing strategy` | 10 | 6 | — | 본문 |
| `what is bet sizing in poker` | 0 | 11 | — | 미채택 |

🔴 **`poker bet sizing` = `bet sizing poker`는 «한 클러스터»다.** 15개를 제출했는데 14개가 돌아왔다
   (중복제거). **총합 220이 아니라 110이다. 더하지 마라.** `poker spr`과 같은 현상.
🔴 **`wet flop poker`는 볼륨 null인데 `wet board poker`는 50이다.**
   §4-1에서 확립한 「영어권은 board가 아니라 **flop**」(monotone 4.3배·paired 1.5배)이
   **wet에서는 정반대로 뒤집힌다.** → **텍스처 단어마다 양쪽을 다 재라. 법칙으로 굳히지 마라.**
🟢 **`geometric bet sizing`은 `lib/` 전체 grep 0건**의 빈자리였고, ⑨는 실제로
   (1+2f)³ = 200.5÷22.5 = 8.911 → f = **53.7%**를 계산한다. 앱에 지오메트릭 사이징 옵션도 실재한다.
🪶 카니발 정리 — c벳 필라 L83 보드텍스처 표에 **`Q♥J♥7♣` 투톤 행**이 있고 결론이
   「Caller-leaning · **check air**」다. ⑨는 같은 텍스처인데 **에어까지 벳**한다(3벳팟이라 그렇다).
   ⑧이 ①편의 「capped」와 겹쳤을 때처럼 **`:::note`로 명시 대조**했다. 겹침을 대조로 바꾼다.

### ⑩ 3bet-pot-low-board (8♦5♣2♠)
`fold equity poker`(WS3 1·DA30) · `what hands should you go all in preflop with`(WS10 5·DA24) ·
`poker postflop player with two pairs`(DA27)

### ⑪ blind-battle-cbet (K♥T♦6♠)
`poker blind vs blind strategy`(WS3 2·DA24) · `poker blind vs blind`(WS3 2·DA8) ·
`is small blind or big blind better`(DA8) · `poker blind vs blind chart`(WS3 3·DA11)

### ⑫ blind-battle-connected-board (7♦6♦5♣)
`static vs dynamic board poker`(DA19) · `most common flops in poker`(WS3 2·DA23) ·
`types of flops in poker`(DA28) · `poker flop texture`(DA22)

### ⑬ ace-paired-board-strategy (A♠A♥6♦)
`blockers in poker`(50·WS3 1·DA22) · `paired flop rules`(DA28) ·
🪶 이 편은 재료가 가장 얇다 — `poker trips *`·`poker bluff catcher *` 시드를 추가로 캘 것

### 전편 공통 (도입·결론에 나눠 심는다)
★`poker equity realization`(10·WS3 2·**DA13**) · `what is realizing equity in poker`(WS3 2·DA20) ·
`poker equity realization chart`(WS3 2·DA19) · `poker equity realization example / strategy`(DA20)
→ **솔버가 EQR을 실제로 출력한다**(랜딩 예시 84.0%). 경쟁이 DA13이라 이 축은 우리가 가져갈 수 있다.

---

## 4. 방법론 — 이번에 실측으로 확정된 것 셋

### 4-1. 🔴 영어권은 **board가 아니라 flop**으로 검색한다

| 시드 | 유니크 | winnable |
|---|---:|---:|
| `poker monotone board *` | 27 | 7 |
| **`monotone flop *`** | **116** | **21** |
| `poker paired board *` | 42 | 6 |
| **`paired flop *`** | 63 | 9 |

monotone은 **4.3배**. 한국어 「모노톤 보드」를 직역해 시드를 짜면 이 축을 통째로 놓친다.
→ 보드 텍스처 계열 시드는 **flop 표기를 먼저** 쓴다.

### 4-2. 🔴 lowfruits 제외어는 **suggestion 탭에만** 걸린다

계정 디폴트 제외어에 `buy, calculator, app`이 들어 있었다. 자연 실험(같은 날 전후 리포트):

| 리포트 | suggestion 총수 | sugg의 calculator | app | buy | related·question의 calc+app |
|---|---:|---:|---:|---:|---:|
| c-bet ×2 (제외어 ON) | 5 · 3 | 0 | 0 | 0 | 14 · 5 |
| spr · tournament · gto (수정 후) | 4 · 262 · 139 | 1 · 8 · 3 | 0 · 6 · 3 | 0 · 1 · 0 | 65 · 94 · 60 |

→ PAA·Related는 제외어를 **통과한다**(공식 문서의 *"apply to all your future reports"* 와 다르다).
**손실은 suggestion이 수백 개 나오는 큰 시드에서만 컸다.** 재수확은 큰 시드부터.
🔴 그리고 **제외어를 믿지 말고 파싱 단계에서 다시 거른다.**

### 4-3. 이 축의 대표 노이즈 — **「N 룰」 3형제**

`what is the 42 rule in poker` · `what is the 50% rule in poker` · `what is the 80/20 rule in poker`
(+ `7-2 rule`). **여섯 시드에서 반복 등장**했고 WS3가 높아 winnable 필터를 통과한다.
포커 잡학 PAA라 스팟 해설과 무관하다 — **전부 버린다.**
🪶 `range advantage warframe`(게임)처럼 poker 앵커를 붙여도 새는 것이 있다.

---

## 5. 🔴 가져가면 안 되는 자리 (기존 자산·카니발)

| 쿼리 | Vol | 주인 |
|---|---:|---|
| what does "check" mean in poker · check poker · what is check in poker | 880 · 880 · 590 | `holdem-betting-actions` · `holdem-glossary` |
| call in poker · poker call | 1000 | 위와 동일 |
| what is a 3-bet in poker · 3-bet poker | 1600 | **`holdem-3bet`** |
| c-bet poker · what is a c-bet in poker | 320 | **`holdem-continuation-bet`** |
| big blind small blind rules | 140 | **`holdem-blind-meaning`** |
| equity in poker | 480 | **`holdem-equity`** |
| poker equity calculator · poker spr calculator · blind vs blind calculator · mdf calculator | 3600 등 | **`/en/calculator`** |
| gto poker chart · gto poker ranges · poker opening range chart · poker ranges by position | 390 · 30 · 10 · 70 | **`/en/hand-chart`** |

## 6. 남은 수확 (다음 회차)

1. **⑬용 보강** — `poker trips *` · `poker bluff catcher *`(현재 재료 최소)
2. **`poker tournament *` 1,253개는 이 시리즈가 아니라 대회 클러스터 자산**이다.
   winnable 185개에 `poker tournament blind structure`(90·WS3 3·DA7) ·
   `poker tournament structure`(50) · `poker tournament buy in`(50) 등이 있다 → **별도 정리 필요.**
3. 오프토픽 보관 = `_saved-en-poker-quiz.md`(`poker quiz app` DA5 · `poker quiz free` DA16 등 —
   `/en/quiz`·`/en/win-rate-quiz` 자산용).
