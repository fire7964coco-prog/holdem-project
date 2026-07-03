# EN 발행 로드맵 — 6시드 키워드 수확 종합 (2026-07-03)

> lowfruits 6개 시드 분석 종합 → EN 6필라 데이터 기반 발행 순서.
> 상세 키워드는 폴더 내 6개 뱅크 파일: en-glossary-what-is-a · en-odds-of · en-what-beats · en-when-to · en-tournament · en-can-you.
> 구조 마스터: `docs/en-blog-pillar-cluster-map.md`

## 수확 요약
| 시드 | 아이디어 | 분석 | 성격 |
|---|---|---|---|
| what is a * in poker | 255 | 255 | Glossary + 크로스필라 정의 |
| odds of * in poker | 863 | 261 | Odds/확률 + limping·nuts·bad beat |
| what beats a * in poker | 55 | 55 | 족보 비교 FAQ |
| when to * in poker | 378 | 54 | Strategy 스팟 결정 |
| poker tournament * | 1999 | 299 | 지역·도구 노이즈 + 구조/전략 |
| can you * in poker | 1290 | 209 | 룰 허용/금지 FAQ |

## 승산 판정 기준
LDA(top10 최저 도메인DA) + W3(top3 weak spots). **LDA ≤20 = 매우 승산 · 20~35 = 좋음 · 35+ = 보통**(우리 족보 필라는 GSC 권위로 보정 가능).

---

## 🏁 발행 우선순위 (데이터 기반 — 개정판)

### ⚡ Phase 0 — 기존 글 FAQ 강화 (신규 X · 최고 ROI · 여기부터!)
이미 색인·랭크된 페이지에 **정확매칭 FAQ/섹션만 추가** → 최대 볼륨을 최소 노력으로. 우리 기존 권위 레버리지.

- **holdem-hand-rankings** ⭐ 최우선:
  - 정의 섹션: what is a flush **5400** · full house **4400** · straight **2900** · royal flush 1300 · high card 590 · straight flush 480
  - "What Beats What" FAQ: what beats a straight **1000** · full house **880** · flush **590** · royal flush 170 · straight flush 140
  - 룰 FAQ: can you have 3 pairs 70 · use an ace as a 1(휠) 40 · flush and a pair 10 · higher flush 10
  - → **합산 ~17,000 볼륨** 타깃 (경쟁 보통이나 기존 랭크+권위로 승산)
- **holdem-betting-actions**: when can you check 170 · how many times can you raise 90 · reraise 40 · fold out of turn 30 · raise twice/keep raising 20
- **holdem-blind-meaning**: what is a blind 880 · big blind 720 · small blind 70
- **holdem-showdown-rules**: 에티켓(show cards 20 · lie 10 · sunglasses 10 · check the nuts=슬로우롤 10)
- **holdem-split-pot-rules**: can you tie 70 · (odd chip)
- **holdem-tiebreak-rules**: use an ace as a 1/one 40 (휠 스트레이트) · higher straight 10

### 🆕 Phase 1 — 최고 승산 신규 페이지
1. **Odds 허브 `holdem-probability`** = "Poker Odds & Probability Chart" ⭐⭐
   - 타깃: odds of hands in poker 1600 · poker hand probabilities 1300 · poker odds chart 390 · poker probability chart 320 (**전부 LDA 11·SS1 = 최고 승산**) + poker odds 2400(허브 head)
   - 본문: 전 족보 확률표 + 프리플랍/플랍 확률(odds of flopping flush/straight/quads…)
2. **Strategy `holdem-limping`** — what is limping 590 (**LDA8·SS1**) + when to limp → 단독 승산 최상
3. **Glossary 플래그십 개별** (순서): straddle **2900** → rake **1300** → fish 390(LDA3) → cooler 390 → bad beat 320 → nit 590 → muck 480 → slow roll 590

### 🆕 Phase 2 — 허브 + 전략 확장
- **Glossary 허브 `holdem-glossary`** (A-Z) — 앵커 용어: tell 110 · rounder 110 · nuts(why called 50) · bounty 110 · freezeout 50 · bomb pot 390 · tilt 210 · deuce · broadway · grinder …
- **Strategy 플래그십**: `holdem-3bet` 1600 · value bet 110 · `holdem-continuation-bet`(c-bet/cbet 50) · check raise 90 + "when to fold/bet/raise/call" 결정 FAQ
- **Odds 드로우 클러스터**: odds of flopping a flush/straight/quads/set 롱테일 (허브 확장 or 전용글)
- **bad beat jackpot** (meaning 210 · rules 70 · how it works 30) — 카지노 프로모 각도

### 🆕 Phase 3 — 토너먼트 + 후속 시드
- **Tournament `holdem-tournament` 강화 or "How a Poker Tournament Works"**: blind structure 90(LDA7) · payout structure 110 · structure 50 · types 140 · rules 140 · levels/rebuys/etiquette + tournament strategy 480
- **후속 시드 수확**(다음 라운드): `pot odds *` · `implied odds` · `c bet *` · `poker bluff *`(전략 명사) · `poker cash game *`(Cash Game 7필라 후보)

---

## 🔀 크로스 필라 발견 (시드 여러 개 돌린 성과)
| 발견 | 원시드 | 라우팅 |
|---|---|---|
| limping 590 | odds | Strategy 플래그십 |
| nuts (why called 50·nut flush 20) | odds | Glossary |
| bad beat jackpot (450+) | odds | 별도 각도 |
| rarest/unluckiest hand | odds | hand-rankings 훅 |
| cash game strategy 210×2 | tournament | Cash Game 7필라 후보 |
| can you count cards 480 | rules | 독립 FAQ/짧은 글 |

## ✅ 첫 작업 추천
**Phase 0의 `holdem-hand-rankings` FAQ 강화부터** — 기존 랭크 페이지 + 최대 볼륨(~17k) + 우리 GSC 권위 = 가장 빠른 ROI. 그다음 **Phase 1 Odds 확률차트 신규**(LDA11 = 신규 중 최고 승산).
