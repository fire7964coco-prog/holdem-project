# EN 키워드 뱅크 — "can you * in poker" (Rules 시드)

> lowfruits 분석 (2026-07-03). 1290 아이디어 → 209 분석. Vol·SS·W3/W10·LDA.
> 원본: `C:\Users\하봄\Downloads\can_you___in_poker_1783063426.xlsx`

## 핵심 통찰
- 전부 **룰 허용/금지 질문**("can you raise twice", "can you fold out of turn") → **기존 룰 필라 글의 FAQ로 흡수**가 정답. 신규 페이지 거의 X.
- 볼륨 작지만(10~480) **승산 매우 좋음**(W3=2~3, weak spot 다수, LDA 대부분 10~40). 롱테일 다수 흡수 = 토픽 권위 강화.

## FAQ 라우팅 (기존 글 → 정확매칭 룰 질문 흡수)

### → holdem-betting-actions (레이즈/체크/폴드 룰)
| 키워드 | Vol | W3 | LDA |
|---|---|---|---|
| when can you check in poker | 170 | 2 | 25 |
| how many times can you raise in poker | 90 | 2 | 23 |
| can you reraise / re raise in poker | 40 / 30 | 2 | 23/25 |
| can you raise a raise / raise twice / keep raising | 20 each | 2~3 | 23~32 |
| can you fold out of turn | 30 | 3 | 25 |
| can you fold before betting / at any time / without betting | 20/10/10 | 2~3 | 9~25 |
| can you raise after checking / calling / your own bet | 10 each | 2~3 | 25 |

### → holdem-hand-rankings (핸드 구성 룰)
| 키워드 | Vol | W3 | LDA |
|---|---|---|---|
| can you have / get 3 pairs in poker | 70/20/10 | 2 | 36 |
| can you use an ace as a 1 / one in poker | 40/10 | 3 | 40/46 |
| can you have a flush and a pair / straight and a pair | 10/10 | 2 | 30/36 |
| can you have a higher straight / higher flush | 10/10 | 2 | 36/12 |
| can you use an ace in a straight / wrap a straight | 10/10 | 2~3 | 43/40 |

### → holdem-showdown-rules (에티켓/쇼다운)
can you show your cards 20 · show your hand 10 · fold face up 10 · show cards when you fold 10 · can you lie / lie about your hand 10 · can you check the nuts 10(슬로우롤) · can you wear sunglasses 10

### → holdem-split-pot-rules
can you tie in poker 70 (=타이/스플릿)

### 독립 후보 (조금 큼)
- **can you count cards in poker** 480 (ss2·LDA18·W3=2) — 승산 좋음. "카운팅이 홀덤에 통하나" FAQ/짧은 글. (블랙잭과 구분 각도)
- can you make money / win in poker 10~20 → "can you make money playing poker" 각도(수익화 관심)

## 스킵 (비디오게임/드로우포커)
can you cheat in poker rdr2 90 · beat le chiffre (hitman/007) 10 · trade/change/discard cards(드로우포커, 홀덤 아님)
