# EN 키워드 뱅크 — "cash game" (Tournament-vs-Cash + Cash Game 7필라 후보)

> lowfruits 수확 (2026-07-11). `poker cash game *`(177, 트레일링 — 도시 노이즈 ~절반).
> 원본: `poker_cash_game____1783755697.xlsx`
> **교훈**: `cash game`은 트레일링도 **도시/업소 노이즈**가 많음(sydney·manila·prague·warsaw...). Questions/PAA 탭으로 좁히는 게 나음.
> 대상: **holdem-tournament-vs-cash-game 감글 retrofit** + **Cash Game 7번째 필라 판단**.

## A. tournament-vs-cash 크로스 → tournament-vs-cash-game 감글 retrofit
| 키워드 | Vol | LDA |
|---|---|---|
| poker cash game vs tournament | 90 | 30 |
| cash game vs tournament poker (mid-seed) | 90 | 30 |
| poker cash game vs tournament strategy (+chart) | 10 | 23~30 |
| are cash games harder than tournaments | - | 30 |
| poker cash game or tournament (+quiz) | 10 | 30 |
| what is the best strategy for cash game poker | - | 24 |

## B. 🆕 Cash Game 전략 클러스터 (7필라 후보 근거)
| 키워드 | Vol | LDA |
|---|---|---|
| cash game poker strategy / poker cash game strategy | 210 | 24 |
| **poker cash game rules** | 20 | **3** ⭐⭐ |
| **big blind small blind rules** | 140 | **8** ⭐ |
| **poker cash game chips** | 320 | **10** ⭐ |
| poker cash game chip distribution | 10 | 11 |
| poker cash game opening ranges | - | **8** ⭐ |
| poker cash game preflop ranges / charts / gto chart / hand chart | 10 | 11 |
| poker cash game bankroll (management) | 10 | 11 |
| how big should blinds be in poker / how many big blinds cash game | 10 | 8~9 |
| poker cash game etiquette | - | 25 |
| poker cash game variance / downswing | - | 17~22 |
| poker cash game starting hands | - | 21 |
| poker cash game meaning / explained | 10 | 23~24 |
| home cash game poker tips / at home / with friends | - | 20~24 |
| poker cash game tips (for beginners / pdf / free) | 30 | 24 |

> 판정: 볼륨 소박(strategy 210 최대)하나 **LDA 3~11 = 승산 좋음**. Cash Game 전용 클러스터/7필라 **후보 근거 성립**. 단 tournament·hand-rankings·strategy 등 대비 볼륨 열세 → **최우선 아님, 후보 메모**. (초기엔 tournament-vs-cash 감글에 흡수, 이후 독립 판단)

## 중간변형 확인 (`cash game poker *` 115 + `cash game * poker` 205 — 2026-07-11)
~90% 중복. **건진 net-new = 정의/작동원리/차이 클러스터**:
- 정의: `what is a cash game in poker` 40·LDA25, `how do cash games work in poker` LDA23, `cash game in poker`/`cash game rules poker` **LDA3** ⭐, `what does cash game mean in poker` 10·LDA23
- 차이(→vs-cash 감글): `difference between cash game and tournament poker (strategy)` 10·LDA23~30, `what is the difference between a tournament and cash game` LDA30, `gto wizard cash vs mtt` LDA30, `when to leave cash game` LDA30, `are cash games profitable` LDA27
- `how to play cash game poker with friends` LDA5, `6 max cash game poker strategy` LDA29, `advanced cash game strategy` 10·LDA16
- **추가 노이즈(제외)**: 선수/명단(best/top10 players·Bryn Kenney·Linus·Jennifer Tilly)·책추천(best poker books 880·modern poker theory 1000)·칩상품·타언어(pt/cs/fr). → **cash game 과수확, 3변형에서 종료.**

## ⚠️ 노이즈 (제외)
- 도시/업소(~절반): sydney·brisbane·manila·hanoi·budapest·macau·prague·warsaw·madrid·malta·dublin... → 전부 제외
- 앱/사이트: apk·online real money·download·live stream → 제외
- **칩 이커머스**: `poker chips set` 9900·`apache poker chips` 1000·`pro poker chips` 390·wholesale·500 chips = **칩 구매 의도**, 콘텐츠 아님 → 제외. (단 `chip distribution`/`chip set`=cash game 셋업 방법은 B그룹 콘텐츠 신호로 유지)
- `poker cash game videos/youtube` LDA92~100 → 제외
- ⚠️ `poker hands` 673000·LDA29 = 초대형 헤드, 정면 X

## 처리 방침
- **holdem-tournament-vs-cash-game retrofit**: A 그룹으로 재설계(vs 비교·어느 게 어려운지·strategy 차이). 첫 링크=holdem-tournament 허브.
- **Cash Game 7필라**: B 그룹으로 근거 확보했으나 **결정 보류**(볼륨상 후순위). 진행 시 `poker cash game rules`(LDA3)·`chips`(LDA10)·`blind rules`(LDA8)부터.
- 관련: [[en-tournament]] (F그룹 vs-cash), [[en-position]]
