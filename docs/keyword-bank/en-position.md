# EN 키워드 뱅크 — "position" (Strategy/Position 시드)

> lowfruits 수확 (2026-07-11). 위치 변형 2종.
> `poker position *`(94, 클린) + `position * poker`(348, 리치+일부 노이즈).
> 원본: `poker_position____1783755325.xlsx` · `position___poker_1783755481.xlsx`
> **교훈**: 트레일링(94)은 이름·기본만; 중간(348)이 `in position poker`(3600)·in/out·early/late·why-matters 클러스터를 살림. → 복수형 `poker positions *`는 348에 이미 다 잡혀 **스킵**.
> 대상 감글: **holdem-positions**(좌석·이름 기본) + **holdem-position-play**(포지션별 플레이).

## 핵심 통찰
- 헤드 `poker positions`/`position poker`/`in position poker` 전부 **3600·LDA22** = 우리 권위로 승산.
- 두 감글로 자연 분리: **이름/기본(positions)** vs **전략/플레이(position-play)**.

## → holdem-positions (좌석·이름 기본)
| 키워드 | Vol | LDA |
|---|---|---|
| poker positions / position poker | 3600 | 22 |
| position poker table | 1300 | **14** ⭐ |
| poker position names / poker positions names | 590 | 22~24 |
| poker position chart | 210 | 21~23 |
| what is utg in poker | 170 | 19 |
| **hj poker** (hijack) | 110 | **7** ⭐ |
| **poker seat numbers** | 40 | **1** ⭐⭐⭐ |
| cutoff position poker | 50 | 23 |
| hijack position poker | 70 | 22 |
| what is the hijack/lojack in poker | 40 | 22~32 |
| **why is it called lojack and hijack** | 20 | **3** ⭐ |
| names by player count (5~10 players), abbreviations(co/lj/mp/ep/hj) | 10~30 | 11~24 |
| who bets/acts first (after flop / pre flop / with blinds) | 10~30 | **8**~25 (룰 크로스) |
| who goes first small blind or big blind | - | **8** ⭐ |

## → holdem-position-play (포지션별 플레이·전략)
| 키워드 | Vol | LDA |
|---|---|---|
| in position poker / position in poker | 3600 | 22 |
| out of position poker | 140 | 39 |
| what is out of position in poker | 90 | 45 |
| in position vs out of position (변형 다수) | 20~30 | 21~47 |
| under the gun poker | 880 | 25 |
| what does under the gun mean (in poker) | 140~260 | 25~45 |
| best position in poker | 70 | 21 |
| late/early position poker | 20~30 | 21 |
| **why is position so important in poker strategy** | 10 | **8** ⭐ |
| why does position matter so much | - | **8** ⭐ |
| **is it better to limp or raise utg** | 30 | **4** ⭐ (limping 크로스) |
| poker position strategy / strategy chart | 30 | 21 |
| what is the weakest/worst/strongest/most profitable position | 20 | 22~24 |
| how to play (out of) position in poker | 10 | 22~34 |

## ⚠️ 노이즈 (제외)
- **red hot poker (식물/Kniphofia)**: plant invasive·bulbs·poisonous·when to divide·spread → 원예 키워드, 완전 무관. 폐기.
- **불어**: jouer la position·quelle est la meilleure position·position au poker 등 → EN 아님. **FR 번역 시 재활용 후보로만 메모.**
- **straddle** 계열(button straddle·who can straddle) → 이미 `holdem-straddle` 담당 → 라우팅.
- ⚠️ `poker hands` 673000·LDA29 = 초대형 헤드, 정면 X.

## 복수형 확인 (`poker positions *`, 110개 — 2026-07-11)
95% 중복(스킵해도 됐음). marginal net-new만: **포맷별 클러스터**(8/9/10 handed·heads up·full ring·6-max·3~10 players — LDA 9~24), `poker positions on table` 210·LDA14, **행동순서 룰크로스**(`does big blind or small blind go first` 40·**LDA8**, `who is supposed to show first` LDA11), 다리 키워드 `poker positions and how to play them`.

## 처리 방침
- **holdem-positions retrofit**: 이름/좌석 기본 재설계. 헤드 `poker positions` 3600. seat numbers(LDA1)·hijack/lojack(LDA3~7)·by-player-count/포맷별(heads up·full ring·6-max)·"who acts first"(룰 크로스) 흡수. diagram/chart.
- **holdem-position-play retrofit**: 전략. in vs out of position 대형 클러스터 + early/late + why-matters(LDA8) + best/worst position + utg 플레이. limp-or-raise-utg는 `holdem-limping`과 상호링크.
- 두 글 첫 내부링크: positions=Rules 허브, position-play=Strategy 허브(§클러스터맵 규칙).
