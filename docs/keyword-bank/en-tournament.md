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

---

## ★ 2026-07-11 재수확 (위치 변형 — 트레일링 blind spot 보강)

> 기존은 `poker tournament *`(트레일링)만 → **앞/중간 와일드카드로 재수확**.
> `* poker tournament`(242 분석, ~80% 로컬 노이즈) + `tournament * poker`(22, 클린).
> 원본: `___poker_tournament_1783754388.xlsx` · `tournament___poker_1783754528.xlsx`
> **교훈**: 넓은 토픽에 앞 와일드카드(`* topic`)는 지역·업소 노이즈 폭탄 → 다음부턴 **Questions/PAA 탭 export**가 정답. 중간(`topic * poker`)은 클린.

### D. 🆕 토너먼트 종류(PKO·freezeout·satellite) — 트레일링이 놓친 클러스터
| 키워드 | Vol | LDA |
|---|---|---|
| what is pko poker / what is pko in poker | 140/50 | 30 |
| what is a progressive knockout poker tournament | 70 | 30 |
| **pko poker strategy pdf** | 10 | **12** ⭐ |
| what is the difference between pko and bounty | - | 30 (weak4) |
| knockout / pko tournament strategy | 10 | 24 |
| what is a freezeout poker tournament | 140 | 23 |
| freezeout poker tournament / how it works | 90 | 23~24 |
| what is a satellite poker tournament / satellite | 30/70 | 25 |
| **deepstack poker tournament** | 10 | **14** ⭐ |

### E. 개최·합법성 (홈게임 의도 — 주(州)별이 더 저경쟁)
| 키워드 | Vol | LDA |
|---|---|---|
| can you host poker tournament in texas / florida | - | **17** ⭐ |
| can you host poker tournament without a license | - | **17** ⭐ |
| how to run a poker tournament fundraiser / run a poker tournament | 10 | 17~18 |

### F. Tournament vs Cash 크로스 (→ tournament-vs-cash-game 감글 retrofit)
| 키워드 | Vol | LDA |
|---|---|---|
| cash game vs tournament poker | 90 | 30 |
| tournament vs cash game poker strategy / (다수 변형) | 10~30 | 30 |
| how to play tournament poker | 110 | 24 |

## 처리 방침 (갱신)
- **신규 클러스터 1개**: "How a Poker Tournament Works"(structure·blind structure·payout·levels·rebuys) → A 그룹 (합 ~600 vol, LDA 4~17)
- **🆕 신규 클러스터 후보 1개**: "Poker Tournament Types" 또는 "PKO/Bounty Strategy" → D 그룹 (freezeout·satellite·PKO·deepstack — 트레일링이 놓친 광맥, what-is 정의 + 전략)
- **holdem-tournament 필라**: 전략·차트 섹션 강화(B) + 종류 FAQ(D 정의형) 흡수
- **holdem-tournament-vs-cash-game 감글**: F 그룹으로 retrofit (cash game vs tournament 90·LDA30)
- 지역/도구 키워드 전부 스킵. Cash Game 전용글은 별도 `cash game *` 시드로 확정.
