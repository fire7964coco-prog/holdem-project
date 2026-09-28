# PT 재판정 보고 판정표 — 검수장 MA-215 · 217~225 (2026-09-28 착수)

> **무엇**: `docs/en-first-queue.md` §2-M의 판정 정본. 검수장이 PT 33편을 레인·본부·교차 3단으로 재판정해 올린 지적(WRONG/RISKY)을
> **EN·PT 원문 + 1차 출처 사본**에 대조해 채택/기각을 정한다. UNVERIFIABLE은 판정 대상이 아니다.
> **기준 해시**: 본체 `7dbdbf40`(검수장 고정 `39e23d54` 대비 대상 EN/PT diff 0 — 검수장 보고서 확인).
> **행 번호** = PT 원장(`홀덤검수/ledger/pt/<slug>.md`)의 `#`. 🔴 줄번호를 적지 않는다 — 원문 축어로 찾는다.
> **1차 출처** = `docs/sources/` WSOP 2026 Tournament(A) · Live Action(B) · TDA 2024 v1. 검수장이 인용한 TDA 2026 v1.0은 본체 미보유 —
> 같은 명제를 A·B·TDA 2024의 대응 조문으로 직접 확인한 자리만 채택 근거로 삼았다.

## 0. 판정 잣대 (이 회차 전체에 적용)

검수장 잣대(DECISIONS §0-F)는 «블록마다 한정이 있어야 한다»다. 그대로 받으면 기본 설명 문장마다 헤즈업·스트래들·조기 종료 단서가 붙어
초보자 글의 가독성이 무너지고, 다음 회차가 또 새 단서를 찾는다(`settled-decisions` §1-D 루프). 그래서 본체는 아래로 자른다.

| 유형 | 판정 | 방식 |
|---|---|---|
| **W** 명시 전칭어(every·always·never·only·until) + 실재 반례 | 채택 | 전칭어를 풀거나 한정 1개 |
| **D** 그대로 따라 하면 칩·판정에서 손해 볼 수 있는 자리 | 채택 | 조건을 같은 문장에 |
| **S** 단독 추출되는 단위(tldr · 직답 블록 · FAQ 답 · 표)의 범위 누락 — 글이 직접 다루는 구조(헤즈업 · 올인 런아웃 · 리밋)에 한함 | 채택 | 단위당 짧은 한정 1개(절 하나 이내) |
| **N** 같은 H2 절의 여러 행이 한 축을 가리킴 | 흡수 채택 | 절에 주석 1개로 닫는다(행마다 반복하지 않는다) |
| **X1** 본문 기본 설명(전칭어 없음)에 선택적 변형 구조(스트래들 등) 부재를 요구 | 기각 | 같은 글의 해당 절 주석으로 갈음 |
| **X2** «초보용 단순화»로 이미 라벨된 전략 조언에 솔버 조건부 전략을 대는 지적 | 기각 | MA-179 ⑥ 선례(라벨 차이 = 의도) |
| **X3** EN 문면은 맞고 PT 문면만 더 센 경우 | EN 무변경 · PT만 정정 | — |

## 1. rules 클러스터 — MA-215 · 217 · 218 (87행 · 6편)

집계: **채택 82(문면 수정 72 · 절 주석 흡수 10) · 기각 4 · EN 무변경·PT만 정정 1.** PT 전용 자리 3(beginners #92 · game-order #90 · #118)은 PT만 고친다.

### 1-1. `texas-holdem-rules-for-beginners` (MA-215 · 9행)

| # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|
| 1 | RISKY tldr 조기 종료 | 채택 S | «up to four betting rounds … at showdown — unless everyone else folds first» |
| 9 | WRONG 버튼 매 핸드 | 채택 W | «normally moves one seat after each hand»(A 85 dead button) |
| 11 | RISKY 블라인드 위치 HU | 채택 S | 괄호 «with only two players, the button itself posts the small blind»(A 87 · B 157) |
| 22 | WRONG 새 street마다 베팅 | 채택 W | «— unless the betting is already over because the players left are all-in …»(TDA 2024 Rule 16 Illustration) |
| 55 | WRONG premium 항상 레이즈 | 채택 D | 칸을 «raise first in, re-raise over a single raise»로 한정. 🪶 **EN 원장 #42는 같은 문장을 OK(09-16)** — 검수장 판정 갈림 → MB로 통지 |
| 87 | WRONG FAQ 단일 승자 | 채택 W | «one winner» 삭제 → «the best five-card hand takes the pot — or splits it»(사이드팟이면 팟마다) · «A full hand has four betting rounds» |
| 92 | RISKY FAQ 전략 | 채택 D · **PT 전용** | PT만 «quando ninguém aumentou antes de você» |
| 97 | RISKY FAQ 블라인드 HU | 채택 S | 괄호 1개 |
| 104 | RISKY 7–10 / 9-max | 채택 W | «Full ring (9-max or 10-max)» |

### 1-2. `holdem-all-in-rules` (MA-217 · 15행)

| # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|
| 7 | WRONG 단일칩 never full stack | 채택 W | «and expect it to count as all-in»으로 재서술(TDA 2024 Rule 44 «including your last chip») |
| 8 | WRONG 폴드한 기여금 | 채택 W | «from each other player who put chips in — a player who has since folded included»(A 91) |
| 17 · 20 · 43 · 54 · 56 · 62 | WRONG 재개 문턱을 리밋에도 | 채택 W | tldr · 규칙문 · 표 머리 · 결정표 캡션 · Mistake 2에 «no-limit and pot-limit» + 리밋 50% 문장 1(TDA 2024 Rule 47-A/B · B 133 · B 175) |
| 21 | WRONG 누적 절 | 흡수 N | 같은 H2의 규칙문이 범위를 준다. 🪶 누적 절 머리에 «In no-limit and pot-limit»을 달았다가 뺐다 — 리밋에도 누적 재개가 있어(B 133) 맞던 명제를 좁혔기 때문(렌즈 1 지적) |
| 27 | WRONG 미행동자 금액 한도 | 채택 W | «within the game's own betting limits: stack / pot / fixed size + cap» |
| 34 | WRONG BB 미만 자동 올인 | 채택 W | «If the blind you owe is bigger than your whole stack»(B 154) + 1인 초과분 반환 |
| 36 | RISKY 공개 순서 시간 순 | 채택 S | «then go by pot» → «and where there is a side pot … go by pot»(B 149) |
| 37 | RISKY 리버 체크스루 누락 | 채택 S | «(the player in earliest position, if the river was checked through)» |
| 42 | RISKY tldr 미콜 반환 | 채택 S | «a lone extra bet is simply returned» |
| 71 | RISKY RIT 액션 종료 | 채택 S | «once someone is all-in and no betting action is pending»(B 210 · 211) |

### 1-3. `holdem-betting-actions` (MA-217 · 12행)

| # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|
| 1 · 4 · 8 · 61 · 62 | RISKY last ↔ last full | 채택 W | 다섯 자리 «last full bet or raise» + 설명 1문장($10 → $14 올인 → 최소 $24 · TDA 2024 Rule 43-A · B 176) |
| 15 | RISKY 완전콜 ↔ 숏 올인 콜 | 채택 S | 괄호 1문장 |
| 38 | RISKY cap FAQ HU 예외 | 채택 S | «it lifts only once the whole tournament is heads-up»(A 100.b) |
| 47 | WRONG 언제나 올인 | 채택 W | «whichever of those is open to you at that point»(A 96) · 사본 game-order 표 1자리 동반 |
| 48 | WRONG 타인 증액 = 재개 | 채택 W | FAQ «a full raise … an all-in for less than a full raise does not» |
| 63 · 65 | WRONG 예외 없는 최소 증액 | 채택 W | «the one exception is an all-in»(B 175) |
| 75 | RISKY 첫 체크 = 무료 카드 | 채택 D | «if nobody bets behind you» |

### 1-4. `holdem-blind-meaning` (MA-218 · 22행)

| # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|
| 8 | WRONG SB 모든 거리 선행 | 채택 W | 괄호 «heads-up is the one exception»(A 87) |
| 51 | RISKY SB 정의 위치 | 흡수 N | #8과 같은 절 |
| 1 · 45 | RISKY 직답 · tldr 위치 | 채택 S | 괄호 1개씩 |
| 19 · 20 · 21 · 22 | RISKY 규칙표 · 주의 박스 | 흡수 N | 주의 박스에 HU + 라이브 스트래들 1문장(B 165) |
| 39 | RISKY FAQ 순서 | 채택 S | HU 문장 1 |
| 82 | RISKY SB 전략 속 순서 | 채택 S | «At a table of three or more» |
| 91 | RISKY 말미 위치 | 채택 S | «(heads-up: on the button)» |
| 17 | WRONG 버튼 매 핸드 | 채택 W | «in normal rotation»을 버튼 이동 앞으로 |
| 11 · 87 | RISKY BB option 스트래들 | 채택 S | «raises or straddles»(`settled-decisions` §3-N 짝 규율) |
| 6 | RISKY 블라인드 부재 | 채택 W | «Without blinds or some other forced bet» |
| 26 | WRONG 캐시 고정 | 채택 W | «no clock raises them … unless the table and the room agree»(B 73) |
| 60 | RISKY stakes 표기 | 채택 S | «In no-limit and pot-limit games» + 리밋 표기 1문장(B 104 «4 - 8 Limit») |
| 36 · 37 | RISKY raw equity | 채택 D | «profitably» 삭제 · «on the call itself … you won't get to realize all of your equity»(`settled-decisions` §3-T) |
| 35 · 83 · 94 | RISKY SB raise/fold · limp | **기각 X2** | 본문이 이미 «the clean beginner approach»로 라벨. 솔버의 SB 림프는 스택·앤티·ICM 조건부 전략이라 초보 기본값을 반증하지 않는다 |

### 1-5. `holdem-game-order` (MA-218 · 19행)

| # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|
| 1 · 87 · 120 | RISKY 네 라운드 | 채택 S | «up to four» 3자리 + FAQ에 조기 종료 1문장 |
| 5 | WRONG 버튼 매 핸드 | 채택 W | «normally … (the dead-button rule is the exception)» |
| 7 · 8 | RISKY 블라인드 표 위치 | 흡수 N | 표 아래 HU 1문장(이 글 워크스루가 헤즈업이다) |
| 29 · 30 · 106 | RISKY 순서 스트래들 | 흡수 N | «Who Bets First» 절에 라이브 스트래들 1문단(B 165) |
| 9 | RISKY 프리플랍 시작 | **기각 X1** | Stage 1 본문 기본 설명. 위 절 문단으로 갈음 |
| 21 | RISKY 체크가 플랍에서 생김 | 채택 W | «From the flop on, the check is open to everyone (preflop, only …)» |
| 27 · 116 | RISKY muck 예외 | 채택 S | 18-B 호출된 리버 베터 예외 추가(TDA 2024 Rule 18-B) |
| 77 | RISKY 빈도 5/7장 | 채택 S | 표 앞 «best five out of seven cards» 1문장 |
| 86 | RISKY 사이드팟 발생 | 채택 W | «and two or more players keep betting past your all-in» |
| 91 | RISKY burn 3장 | 채택 W | «in a hand that goes all the way to the river» |
| 113 | WRONG SB가 모든 라운드 | 채택 W | «(or, once they have folded, the next live player to the button's left)» |
| 90 · 118 | RISKY · WRONG | 채택 · **PT 전용 FAQ** | PT만(가정 게임 버튼 «normalmente» · 각 공개 뒤 베팅 → 올인 런아웃 한정) |

### 1-6. `holdem-showdown-rules` (MA-218 · 10행)

| # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|
| 6 | RISKY 표 제목 | 채택 S | «(betting ended before the river)» |
| 7 | RISKY 콜러 열람권 범위 | **X3 · EN 무변경** | EN «gets to see»는 공개 «순서» 서술이다(요청권은 다음 절이 토너/캐시로 갈라 적는다). PT «tem o direito de ver»만 순서 서술로 낮춘다 |
| 12 | RISKY 공격자 muck 배제 | 채택 W | «You are allowed to muck instead and give up the pot, but …»(TDA 2024 Rule 17-A) |
| 13 · 76 | RISKY 비올인 한정 | 채택 S | «and no one is all-in» · FAQ «When nobody is all-in» + 포인터 |
| 19 | RISKY 복수 사이드팟 표 | 채택 S | 토너/캐시 분리(B 143) |
| 28 · 83 | WRONG slow roll 허용 | 채택 W | «No rule bans it by name, but … can draw a penalty»(A 47 · TDA 2024 Rule 70). 🪶 검수장 근거 TDA 2026 §73 대신 본체 보유 사본 조문으로 인용 |
| 41 | RISKY 콜러 카드 조건 | 채택 S | «provided they still hold or have tabled their own cards» |
| 80 | WRONG only if clearly lost | 채택 W | «mucking gives up the pot, so do it only when you are sure you lost» |

## 2. rankings 클러스터 — MA-219 · 220 (9행 · 4편)

집계: **채택 8 · 기각 1.** `holdem-hand-rankings` · `holdem-tiebreak-rules`는 지적 0.

| 글 | # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|---|
| kicker | 68 | WRONG 보드 플레이가 «유일한» 자리 | 채택 W | «the one spot» → «a spot where even a strong-looking hole card…» |
| kicker | 38 | RISKY A만 맞으면 큰 킥커 승 | 채택 S | FAQ «when two players both pair their ace and make nothing better» |
| split-pot | 71 | WRONG muck = 무조건 dead | 채택 W | «normally dead … (only a hand that is still clearly identifiable can be retrieved, at the floor's discretion — WSOP Tournament Rule 109)» · 같은 명제 사본 kicker 1자리 «normally» 동반 |
| reading | 101 | WRONG muck → 수령 불가 | 채택 W | FAQ 같은 한정(A 109) |
| split-pot | 84 | WRONG 높은 홀카드 = 킥커로만 | 채택 W | «as part of the hand itself or as a kicker»(§13: J♠T♠ + 9♠8♦7♣6♥5♠ = J-high 스트레이트) |
| split-pot | 112 | RISKY 올인 FAQ 사이드팟 자동 | 채택 S | «When players are all-in for different amounts and others keep betting» |
| reading | 63 | RISKY TDA 22 휴식 예외 | **기각** | 「until the next hand begins」는 조문 일반 기한으로 참. 휴식 중 종료 핸드의 1분 예외는 이 문단(핸드 읽기 습관)의 범위 밖이고, 독자 행동 「speak up at once」는 두 경우 모두 안전하다 |
| flush | 77 | WRONG 5장 보드에 flush draw | 채택 W | 이미지 title «a flush is possible against your straight»(이미지 파일 불변) |
| flush | 97 | WRONG 희소성 원칙 무예외 | 채택 W | «of those two hands, the rarer one ranks higher»(숏덱 5장: 하이카드 122,400 < 원페어 193,536인데 페어가 위) |

## 3. odds 클러스터 — MA-221 · 222 · 223 (39행 · 7편)

집계: **채택 34 · 기각 2 · EN 무변경·PT만 정정 3.** §13 검산(본체 재계산): 세트 조건 7 ÷ 44 → x = 50 ÷ (7/44) − 200 = **$114.29**(구 $129는 7 ÷ 46) · 15아웃 두 장 585/1081 = **54.12%** · 세트 플랍 1 − C(48,3)/C(50,3) = **11.755%** · 백도어 플러시 C(10,2)/C(47,2) = **4.16%** · 것샷 16.47% ÷ OESD 31.45% = 0.52.

| 글 | # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|---|
| probability | 100 | WRONG 15–20× 기준금액 | 채택 W | «effective stacks of 15–20× the call» · FAQ 1자리 동반 |
| probability | 53 · 98 | RISKY 완성률 = 승리 equity | 채택 D | steps «Flush draw with 9 clean outs» · 본문 «a clean draw's 35%» |
| probability | 74 · 75 | RISKY 커넥터 전체에 1.3% · 10% | **X3 · PT 전용** | EN FAQ엔 그 문장이 없다(EN 표는 «Suited connectors (e.g. 8-7)»로 한정). PT FAQ만 «conectores do meio como 8-7» |
| probability | 148 | RISKY 승리 분포 ↔ 개인 7장 표 | 채택 S | «How often each hand shows up over seven cards — which is not the same as how often it wins the pot» |
| pot-odds | 10 · 61 | RISKY 완성률 = equity | 채택 D | steps «with 9 clean outs» · FAQ «a clean flush draw» (+ 같은 명제 FAQ 1자리) |
| pot-odds | 121 | RISKY 가격 넘으면 콜 | 채택 D | «counted only over the cards this call lets you see» |
| implied | 11 · 106 | RISKY equity가 가격 넘으면 콜 | 채택 D | 같은 한정 2자리 |
| implied | 34 · 36 | RISKY 7.5× 잔여 스택 | 채택 W | «the pot plus what you win afterward only has to add up to about 7.5× your call» · «theoretical payoff floor» |
| implied | 54 | WRONG FAQ 평형 = 7.5× 스택 | 채택 W | «a total payoff — the pot plus what you win afterward — of roughly 7.5× your call» |
| implied | 61 | WRONG 세트 조건 분모 46 | 채택 W | «7 ÷ 44 … x of about $114»(§13: 12 세트 조합 전부 클린 하트 7 · 2♥·3♥는 풀하우스/쿼드) |
| implied | 102 | RISKY $55 더 받으면 수익 | 채택 S | «and the flush you make is the best hand» |
| outs | 5 | RISKY stripe ×4/×2 | 채택 S | 라벨 칸 «(both cards to come) … a rough %»(값 칸 불변 — `settled-decisions` §3-Q) |
| outs | 98 | RISKY 어떤 아웃 수든 ×4 | 채택 W | «approximate … ×4 runs high on big draws: 15 outs are 54%, not 60%» |
| outs | 50 | RISKY 3~4로 세라 | 채택 D | «count 3 at most … and none at all once you are sure of the set or two pair» |
| outs | 93 | RISKY «worth six» | 채택 W | «worth less than that» |
| outs | 55 | RISKY 15아웃 32%가 가격 | 채택 S | «only outs that actually win count toward either number» |
| drawing | 35 | RISKY «one extra out of equity» | 채택 W | «about what one extra out adds to your chance of hitting» |
| drawing | 41 | RISKY «Half the equity» | 채택 W | «About half as likely to complete» |
| equity | 19 | WRONG coin flip 배타 용례 | 채택 W | «Players call any pair-against-overcards race a coin flip, but the label is only literally true for…»(`settled-decisions` §3-F의 52/48 수치 불변) |
| equity | 72 · 73 | RISKY «The One Rule» · «almost every call» | **기각** | H2 훅 표현이고 본문은 «almost»로 한정돼 있으며, 같은 절 셋째 문단이 추가 베팅·실현 단서를 직접 단다. H2는 검색어 자리라 바꾸지 않는다 |
| equity | 21 | RISKY 35 supera 25 | **X3 · EN 무변경** | EN은 L-2d에서 이미 «a clean flush draw's ~35%». PT 문면만 옛 판 → PT를 EN에 맞춘다 |
| equity | 61 · 107 | WRONG «the one spot» | 채택 W | «the cleanest spot» · «the clearest case» |
| equity | 41 · 56 | RISKY AA 85/64/56 조건 | 채택 S | «Preflop against random hands» 2자리 |
| equity | 89 · 123 | WRONG 모든 패의 지분 감소 | 채택 W | alt·caption «the average share / the average slice» |
| equity | 44 · 108 | RISKY outdraw = 실현 손실 | 채택 W | «more bets and raises that can push you off your hand before showdown»(역전패는 raw equity에 이미 들어 있다 · §3-T) |
| card-counting | 8 | WRONG «only works because» | 채택 W | «only» 삭제 |
| card-counting | 9 | WRONG «needs … dozens of hands» | 채택 W | «feeds on a shoe dealt down over many hands» |
| card-counting | 10 | WRONG «never enough to track» | 채택 W | «enough to count outs for the hand in front of you, never enough for a blackjack-style running count» |
| card-counting | 74 | WRONG 본 카드 = 상대가 못 가진 카드 | 채택 W | «can't come on the board and can't be in anyone else's hand» |

## 4. strategy 클러스터 — MA-224 · 225 (46행 · 6편)

집계: **채택 42(그중 PT 전용 1) · 기각 3 · EN 무변경·PT만 정정 1.**
이 클러스터의 지적은 절반이 «초보 기본값 ↔ 숏스택·ICM 솔버 예외»다. 기본값 자체는 바꾸지 않고 **적용 범위 한 마디**(at normal stack depths · as your default · as opening hands)만 붙였다.

| 글 | # | 검수장 | 판정 | EN 처리 |
|---|---|---|---|---|
| strategy | 41 · 42 · 91 | RISKY 완성률로 콜 판정 | 채택 D | «chance of hitting a winning card» · «comes in and wins about 1-in-5» · «a hand that wins» |
| strategy | 69 | RISKY 다인 블러프 일괄 손해 | 채택 W | «A pure bluff into multiple callers…» |
| strategy | 74 | WRONG GTO 무조건 비착취 | 채택 W | «that, heads-up, can't be exploited» |
| strategy | 95 | RISKY 콜 = 프리미엄 없음 | 채택 · **PT 전용** | PT 용어표 «Capado» 행만(«normalmente teriam aumentado») — EN엔 그 표가 없다 |
| strategy | 113 | RISKY c-bet 조건이 initiative뿐 | 채택 S | FAQ «when you have initiative and the board and opponents allow it» |
| chart | 39 | WRONG 포지션이 수익의 필요조건 | 채택 W | «as opening hands, these speculative hands need position» |
| chart | 76 | WRONG «only good from late position» | 채택 W | «play best from late position» |
| chart | 55 · 80 | WRONG · RISKY 비착취 보장 | 채택 W | «built to be as close to unexploitable as possible» · «designed to be hard to exploit» |
| chart | 79 | WRONG 7-2는 개선 없이 못 이김 | 채택 W | «too low to win often without improving» |
| chart | 102 | RISKY PDF = full chart | 채택 W | «the 9-max opening chart by position»(full 삭제) |
| chart | 104 | RISKY «use it literally» | **기각 X2** | 사실 주장이 아니라 훈련 방법 지시(첫 20회 세션의 기본값)이고 같은 절 steps가 범위를 준다 |
| chart | 106 | WRONG AA 항상 레이즈·리레이즈 | 채택 W | «As your default, raise and re-raise with aces» |
| positions | 4 · 88 | RISKY 직답 · tldr HU | 채택 S | 괄호 1개씩 |
| positions | 16 | WRONG 버튼 매 핸드 1칸 | 채택 W | «normally moves» |
| positions | 41 | RISKY 모든 차트·사이트 | 채택 W | «on most modern range charts and training sites» |
| position-play | 15 · 100 · 153 · 117(앞 절) | RISKY 무료 카드 · 단독 통제 | 채택 S | «on your own» · «When it's checked to you» 3자리 |
| position-play | 71 · 89 · 154 · 155 · 157 · 117(뒤 절) | RISKY SB 포스트플랍 선행 HU | 채택 S | FAQ 3곳 «except heads-up…» · «at a table of three or more» |
| position-play | 152 | RISKY UTG 오픈림프 = 어디서나 리크 | 채택 W | «at normal stack depths» |
| position-play | 70 | WRONG 15bb 미만 = push/fold | **X3 · EN 무변경** | EN은 «collapses **toward** push/fold»로 방향 서술. PT «colapsa para»만 «tende a»류로 |
| position-play | 156 | RISKY BB 손실 필연 | **기각** | 100핸드당 평균 손익 서술이다. 한 핸드(전원 폴드 +0.5bb) 반례는 평균 명제를 반증하지 않는다 |
| 3bet | 49 | RISKY MDF no-equity 조건 | 채택 S | «can't profit automatically … (the formula treats a bluff as having no equity when called)» |
| 3bet | 55 · 80 | RISKY fold 35% → calling station | 채택 W | «Most often a calling station — they continue with almost anything»(처방 «value only»는 콜이든 4벳이든 유효) |
| 3bet | 92 · 104 | WRONG dead money = 수익 | 채택 W | «raises the payoff» · «raises the reward when it works» |
| 3bet | 97 · 112 | WRONG 4벳 = strong AND polar | 채택 W | «a very strong range — often polarized between premiums and a few bluffs» |
| 3bet | 103 · 113 · 108 | WRONG 작은 OOP 3벳 금지 | 채택 W | «At normal stack depths» 2자리 |
| limping | 60 | WRONG 너츠 불가능 | 채택 W | «unlikely to hold the strongest hands»(§13: 2♥2♦ + 2♣2♠T♥9♦7♣ = 쿼즈) |
| limping | 65 · 73 · 75 | WRONG · RISKY SB no-call | 채택 W | 형제 글 position-play의 기존 문면(«default … almost never flat-call»)에 맞춤 — 전략 기본값은 불변(MA-179 ⑥) |
| limping | 74 | RISKY hard game SB 기본형 | **기각 X2** | PT 문면이 이미 «o padrão»(기본값)로 라벨돼 있다(MA-179 ⑥ 선례) |

## 5. 3층 렌즈 (Opus 3종 · EN diff 기준 · 2026-09-28)

| 렌즈 | 결과 | 반영 |
|---|---|---|
| 딜러·플로어(룰 원문 대조) | 새로 인용한 조문 **전부 일치**(LA 104·133·143·149·154·165·175·176·210·211 · A 47·87·100.b·109 · TDA 2024 16·18-B·44·47-B·70). D유형 0. 지적 5 | 채택 3 · 남김 2 |
| 수학·전략 | 새 숫자 **14항목 전부 재계산 일치**(세트 예시는 12조합 × 44리버 = 528건 전수 열거 → 조합마다 7승). D유형 0. 지적 6 | 채택 4 · 기각 1 · 남김 1 |
| 교열(diff) | 렌더 파손 0(백틱 · `==`/`**` 짝 · 표 칸 수 · tldr 평문 · 스탬프 23/23). 지적 14 + 반복·길이 | 채택 15 · 남김 3 |

**채택한 것(전부 ② 이번 편집 유래 또는 편집이 드러낸 사본)**
- game-order FAQ: 18-B 예외가 토너먼트 한정 없이 붙어 캐시에도 적용되는 것처럼 읽혔다 → «Two tournament exceptions: …»(렌즈 1·3 독립 지적).
- beginners · game-order: «the players left are all-in»은 부정확(한 명 올인 + 칩 남은 한 명 콜이 가장 흔한 런아웃) → «players are all-in and nobody is left to bet against».
- all-in FAQ: «original bettor still shows first»를 리버에서 끝난 경우로 한정하고 노리밋 리버 전 종료 절(B 149 축어)을 같은 답에 넣어 글 안 다른 FAQ와 맞췄다.
- split-pot: 줄표 한 쌍이 삽입구를 닫아 뒤 링크 절이 주절에 붙는 **문장 파손** → 쉼표로.
- 3bet 본문 불릿 «Never 3-bet tiny out of position»이 FAQ·요약(한정됨)과 어긋남 → 같은 한정. · outs FAQ «The rule holds for any count» ↔ 새 괄호 자기모순 → «The logic holds».
- chart: 규칙을 «as opening hands»로 좁히자 바로 뒤 예시(레이즈를 마주한 상황)가 규칙을 못 받침 → «And if a UTG player raises…».
- equity: 52/48을 두고 «literally true» → «is genuinely close to 50/50». · positions: 헤즈업 괄호를 «first to act preflop, last postflop»으로. · card-counting: «no other player can be holding it». · position-play 표 2칸.
- 어법·가독성: showdown 주어 · 3bet 대명사 · flush 지시어 · all-in RIT 어순 · implied·probability 줄표 · kicker «two … both» · game-order «may usually» · blind-meaning 직답 변주 · reading FAQ 괄호 축약 · beginners 말미 «up to four».

**기각**
- chart 본문 «With hands 1–5 … always raise and often re-raise»(렌즈 2·3): 검수장 MA-179 ①이 같은 문장을 OK로 철회했다. 대상은 첫 진입 레이즈이고 리레이즈는 «often»이라 FAQ의 AA 문장과 명제가 다르다.

**남긴 것(이번 회차에서 고치지 않음 · 🪶 기록만)**
- probability FAQ «most common winning hand = one pair, followed by two pair»: 렌즈 2의 무작위 쇼다운 시뮬레이션은 3인 이상에서 투페어가 1위. 실전(폴드 있는) 분포의 1차 자료가 없어 추측으로 고치지 않는다 — 검수장도 UNV로 둔 자리. EN-먼저 후보.
- betting-actions 본문 «the extra chips from bigger stacks form a side pot you can't win»: all-in tldr와 같은 명제의 사본(초과분 1인이면 반환). 검수장 미지적 · 확신도 낮음.
- position-play 본문 3곳(«first to act on every postflop street against everyone» 등) · FAQ 4개 연속 헤즈업 단서 반복 · all-in 결정표 캡션 ↔ 마지막 행의 리밋 언급: 본문 기본 설명(X1)이거나 검수장 «블록별 한정» 요구와 맞물린 반복이라 그대로 둔다.
- showdown FAQ 129단어 · outs FAQ 109단어: 한정이 쌓여 길어졌다. 다음 EN 회차에서 FAQ를 둘로 가를지 판단.

## 6. 같은 커밋에 동반한 다른 로케일

- **§13급 수치 1건**: implied-odds 세트 예시 `$129` → `7 ÷ 44 … $114` — de · es · id · ja · ms · zh · zh-hant 7편(문장 1 + `updated` · `masterUpdated` 불변). 전 로케일 grep: `129` 0건 · `$114` 9로케일(en·pt 포함).
- 그 밖의 EN 변경은 로케일에 아직 없다 → `check:drift` 핵심 드리프트(ar 6 · de·es·id·ja·zh·zh-hant 각 23)가 **다음 전파 회차의 분모**다.

## 7. 로케일 전파 (다음 회차)

EN 순 diff를 패킷으로 — 동기 로케일은 전량 대조, 지연 로케일은 사실 앵커만(`settled-decisions` §1-C). PT는 이번 커밋에 동반했다.
패킷 원천 = 이번 커밋의 `git diff <직전 해시>..<이번 해시> -- lib/posts-en`. PT 전용 자리(beginners #92 · game-order #90·#118 · strategy #95 · probability #74·#75)는 다른 로케일에 같은 고유 문장이 있는지 **자리별 표로** 확인한다(`settled-decisions` §3-O).
