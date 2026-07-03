# EN 키워드 뱅크 — "poker tournament *" (Tournament 시드)

> lowfruits 분석 (2026-07-03). 1999 아이디어 → 299 분석(188 볼륨). Vol·SS·W3·LDA.
> 원본: `C:\Users\하봄\Downloads\poker_tournament____1783063062.xlsx`

## 핵심 통찰
- `poker tournament *`는 **지역(vegas 9900·borgata·la…)·도구(clock·timer·software)** 상업성 노이즈가 대부분 → **스킵**. (로컬 카지노 검색은 우리 콘텐츠·다국어 번역과 무관)
- 쓸 만한 건 **구조/메커니즘 + 전략/차트** 정보성 롱테일. 우리 토너먼트 필라(holdem-tournament) 갭(작동원리)과 맞음.

## 사용 가능 롱테일 (정보성·번역가능)

### A. 토너먼트 구조·메커니즘 → `holdem-tournament` 강화 or "how tournaments work" 클러스터
| 키워드 | Vol | SS | W3 | LDA |
|---|---|---|---|---|
| poker tournament payout structure | 110 | 2 | 0 | 12 ⭐ |
| poker tournament blind structure | 90 | 1 | 3 | 7 ⭐⭐ |
| poker tournament structure | 50 | 1 | 2 | 7 ⭐⭐ |
| poker tournament payout | 40 | 1 | 1 | 4 ⭐⭐ |
| types of poker tournaments | 140 | 3 | 0 | 38 |
| poker tournament rules | 140 | 3 | 1 | 17 |
| poker tournament format | 90 | 3 | 1 | 21 |
| poker tournament levels / rebuys and add ons / etiquette | 10 each | | 2~3 | 12~17 |
| is it legal to host a poker tournament | 10 | 3 | 2 | 40 |

### B. 토너먼트 전략·차트 → Strategy/Tournament 교차
| 키워드 | Vol | SS | W3 | LDA |
|---|---|---|---|---|
| tournament poker strategy | 480 | 3 | 1 | 24 |
| poker tournament strategy | 480 | 3 | 1 | 24 |
| poker tournament tips | 140 | 3 | 1 | 24 |
| poker tournament preflop charts / range chart / hand ranges / gto chart / opening ranges | 10~20 | 1 | 1~2 | 8~11 ⭐ |
| advanced poker tournament strategy | 20 | 3 | 0 | 21 |

### C. 🆕 Cash Game 신호 (7번째 필라 후보 재확인)
- `poker cash game strategy` 210 · `cash game poker strategy` 210 (LDA24) → **Cash Game 전략 클러스터** 수요 존재. (초기엔 Strategy 안에 두기로 했으나, 별도 시드로 더 캐볼 가치)

## 처리 방침
- **신규 클러스터 1개**: "How a Poker Tournament Works"(structure·blind structure·payout·levels·rebuys·types) → A 그룹 롱테일 흡수(합 ~600 vol, LDA 4~17 = 승산 좋음)
- **holdem-tournament 필라**에 전략·차트 섹션 강화(B 그룹)
- 지역/도구 키워드 전부 스킵. Cash Game은 별도 시드 후보로 메모.
