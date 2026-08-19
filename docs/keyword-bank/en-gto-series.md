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

### ⑥ paired-board-strategy (6♣6♦3♥)
`paired flop example`(WS3 2·DA19) · `paired flop poker`(WS3 2) · `paired flop strategy` ·
`how rare is a pair in poker`(DA12)

### ⑦ low-board-check-raise (6♠5♥2♦)
★`what is a good check-raise percentage`(WS3 2·DA28) · `poker check raise size chart`(WS3 2·DA28) ·
`poker check raise size texas holdem`(WS3 2·DA23) · `can you check-raise in poker`(10·WS3 2·DA34) ·
`why was check-raising banned`(WS3 2·DA32 — 훅으로 좋다) · `check raise bad etiquette`(10·WS3 2)

### ⑧ 3bet-pot-cbet (A♦K♠2♥ · SPR 4.0) — **13편 중 유일하게 볼륨이 있다**
★**`poker spr` 480**(DA28) · `what does spr mean in poker`(DA28) · `what is an spr in poker` ·
`poker spr strategy` · `poker spr rules`(DA30) · `poker spr meaning texas holdem` ·
`effective stack poker`(WS3 2·DA32)
⚠ `poker spr calculator / online / app / table / cheat sheet`(DA 4~17)는 **`/en/calculator`의 자리**

### ⑨ 3bet-pot-bet-sizing (Q♥T♥7♠)
`poker c bet sizing chart`(DA22) · `poker c bet sizing` · `river bet sizing poker`(WS3 2·DA22) ·
`bet sizing poker`(110·DA30) · `what is bet sizing in poker` · **`geometric bet sizing`(20·DA7)**
🪶 앱에 지오메트릭 사이징 옵션이 실재한다 — 근거 있는 조준이다

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
