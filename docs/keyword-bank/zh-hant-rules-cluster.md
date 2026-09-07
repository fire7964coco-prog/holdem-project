# zh-hant 규칙 클러스터 키워드 실측 — 경화 회차 1 (2026-09-06)

> **대상 6편**: `texas-holdem-rules-for-beginners` · `holdem-game-order` · `holdem-betting-actions` ·
> `holdem-blind-meaning` · `holdem-all-in-rules` · `holdem-showdown-rules`
>
> **볼륨 측정**: DataForSEO `keywords_data/google_ads/search_volume/live` · `location_code: 2158`(대만) ·
> 🔴 **`language_code` 생략**(넣으면 40501 — 정본 `zh-hant-tag-volumes.md` §0).
> **SERP**: `serp/google/organic/live/regular` · `location_code: 2158` · 🔴 **`language_code: "zh-TW"` 필수**(하이픈).
> **자동완성**: `suggestqueries.google.com/complete/search?client=chrome&hl=zh-TW&gl=TW`
> 🔴 Windows 셸이 CJK 쿼리를 깨뜨린다 — **`.mjs`에서 `fetch` + `encodeURIComponent`로** 보내야 한다
> (셸에서 `curl --data-urlencode`로 보냈더니 「适 蝓 / 適癲停」 같은 쓰레기가 돌아왔다).
>
> 🔴 **미반환 ≠ 0** (`zh-hant-tag-volumes.md` §5). 자동완성에 살아 있으면 실재하는 축이다.

---

## 1. 새로 측정된 볼륨 (2026-09-06)

| 키워드 | 볼륨 | competition | 귀속 | 비고 |
|---|--:|---|---|---|
| `德州撲克下注規則` | **170** | LOW | betting-actions | 🔷 이번 회차 최대 수확. 12개월 하락 추세(2025-08 590 → 2026-07 20) |
| `德州撲克加注規則` | **140** | LOW | betting-actions | 이미 seoTitle 보유 · 태그 미보유 |
| `德州撲克順序` | **110** | LOW(1) | game-order | 의도 혼재 — §3 판정 참조 |
| `德州撲克大盲小盲` | 40 | LOW | blind-meaning | |
| `德州撲克下注順序` | 40 | LOW | game-order | |
| `德州撲克小盲大盲` | 30 | LOW(2) | blind-meaning | 어순 변형 · 위와 별개 값 |
| `德州撲克最小加注` | 30 | LOW | betting-actions | |
| `德州撲克加注金額` | 30 | LOW | betting-actions | |
| `德州撲克 all in` | 30 | LOW(9) | all-in-rules | |
| `德州撲克莊家` | 20 | LOW | game-order | 버튼 축 |
| `德州撲克邊池` | 20 | LOW(1) | all-in-rules | |
| `德州撲克過牌` | 10 | LOW | betting-actions | |
| `德州撲克加注次數` | 10 | LOW | betting-actions | 기존 태그 `德州撲克能加注幾次`의 실제 표기형 |

**미반환**(=0 아님 · 자동완성엔 생존): `德州撲克行動順序` · `德州撲克誰先` · `誰先下注` · `德州撲克按鈕位` ·
`德州撲克跟注` · `德州撲克蓋牌` · `德州撲克全下規則` · `德州撲克攤牌規則` · `誰先亮牌` · `德州撲克搓牌` ·
`德州撲克順序大小` · `德州撲克喊注順序` · `德州撲克誰先開牌` · `德州撲克下注方式` · `德州撲克下注金額` ·
`德州撲克加注級距` · `德州撲克盲注結構`

## 2. 자동완성 실측 (2026-09-06 · hl=zh-TW · gl=TW)

| 시드 | 반환 |
|---|---|
| `德州撲克順序` | 順序大小 · 順序規則 · **喊注順序** |
| `德州撲克誰先` | **誰先開牌** · **誰先下注** · **誰先喊** · 誰先 · 誰最大 |
| `德州撲克下注` | **下注順序** · **下注方式** · **下注金額** · 下注策略 |
| `德州撲克加注` | **加注金額** · **加注順序** · **加注級距** · **加注次數** · 加注英文 · 加注技巧 |
| `德州撲克全下` | (포커 결과 없음 — 「下載」류로 오염) |
| `德州撲克攤牌` | 疊牌意思 · 丟牌 · 瞇牌 · **攤牌勝率** |
| `德州撲克盲注` | **盲注結構** · **盲注級別** |
| `德州撲克大盲` | **大盲小盲** · **大盲前注是什麼** · 大盲意思 · 大盲範圍 |
| `德州撲克規則` | 規則大小 · 規則大小盲 · 規則英文 · 規則教學 · 規則發牌 · 規則人數 · 規則花色 · 規則平手 · 規則觀念 · 賭場德州撲克規則 |
| `德州撲克邊池` | **邊池計算** |

## 3. 🔴 함정 (채택 전 의도 실측 — [[keyword-volume-order-of-magnitude-trap]])

| 키워드 | 겉보기 | 실측 판정 |
|---|---|---|
| `德州撲克順序` 110 | 「행동 순서」로 보인다 | **혼재.** SERP 5위 안에 행동/발제 순서 4(pokerfans #1 · taiwanrounders #2 「行動順序與發牌流程」 · pokerdomain #4 「行動順序」 · fishpoker #5 「發牌順序」)와 **牌型 大小(위키 #3)** 1. → game-order가 쓸 수 있으나 **`順序大小` 조합형은 쓰지 마라**(그건 족보 축) |
| `德州撲克順序大小` | 순서 축 파생 | 🔴 **牌型 大小 의도.** `holdem-hand-rankings`(회차 2) 소관 |
| `德州撲克攤牌勝率` | 攤牌 축 파생 | 🔴 **勝率(equity) 의도.** `holdem-equity` 소관 — showdown-rules에 넣지 마라 |
| `德州撲克下注策略` | betting-actions 파생 | 🟠 **전략 축.** `holdem-strategy` 소관 |
| `德州撲克全下` | all-in 축 | 자동완성이 「下載」로 오염 — 시드로 쓰지 말고 `德州撲克 all in`(30)·`德州撲克邊池`(20)을 쓴다 |

## 4. 태그 카니발 판정

| 태그 | 볼륨 | 현재 보유 | 판정 |
|---|--:|---|---|
| `攤牌` | **170** | 🔴 `holdem-game-order`만 | **`holdem-showdown-rules`가 주인** — 이관(game-order는 攤牌을 한 단계로만 다룬다) |
| `全下` | 20 | 🔴 `holdem-betting-actions`만 | **`holdem-all-in-rules`가 주인** — 이관 |
| `德州撲克規則` | 4,400 | beginners(주인) · game-order · hand-rankings | **game-order 양보**(§1 확정 판정 = 주인은 beginners). hand-rankings는 **회차 2**에서 판정 |
| `德州撲克大小` | 2,900 | hand-rankings · beginners | 🟠 **회차 2로 이월** — 주인 판정이 족보 클러스터 소관. 회차 1에서 beginners 태그 축을 건드리지 않는다(진행 파일 §3) |
| `德州撲克發牌順序` | 90 | beginners만 | 🟠 **회차 1에서 건드리지 않는다**(같은 이유). game-order는 `德州撲克順序`·`下注順序`로 별도 축을 잡는다 |

## 5. 현지 상위 글 실측 (2026-09-06 · Playwright DOM · §12-B)

| 사이트 | 순위 | H2 골격 | 우리 대비 공백 |
|---|---|---|---|
| taiwanrounders `/post/three_basic_poker_rules` | `下注規則` #1 · `順序` #2 | **번들형 1페이지**: 盲注規則 → 行動順序·發牌流程 → 下注規則(Check/Bet/Raise/Fold/All-in) → 攤牌·開牌順序 → 全下·邊池計算 → 位置順序 → FAQ | 최소 가주 **증분** 규칙 없음 · **불足額 all-in 재개 규칙 없음** · TDA/WSOP 조항 없음 |
| natural8 `/zh-TW/blog/poker-actions` | `下注規則` #8 | 過牌 → 下注 → 跟注 → 加注 → 棄牌 → 策略 → 常見錯誤 | 규칙 조항·현장 사례 없음 |
| pokerfans.jp `?_lang=zh_TW` | `順序` #1 | 坐下 → 莊家位置 → 發牌 → 翻牌前 → 翻牌 → 轉牌&河牌 → 亮牌 | 얕음. 일본 사이트 번체판 |
| sixpoker666 | `下注規則` #4 | 玩法·起源 → 獲勝條件 → 如何開始 → 位置 → Step1~10 → 加注規則 → All In 規則 | 최소 가주 증분·邊池 계산 없음 |
| winpokercouple `/eight-must-know-poker-rules` | `下注規則` #7 | — | 🔴 **틀린 규칙 유포**: 「在無限注撲克牌桌上，加注金額至少要是前一位玩家下注金額的兩倍」(축어) — 최소 가주는 **직전 증분만큼**이지 2배가 아니다. 우리 betting-actions의 정면 차별점 |

**H2 형태 실측 — §7-C 판정 재확인**: 위 4개 사이트 전부 **명사형 H2**다. 질문형은
taiwanrounders가 「FAQ 常見問題」 블록 안에만 격리해 쓴다(`德州撲克1BB是多少？`·`大盲小盲有什麼差別？`).
→ **zh-hant는 질문형 H2 70%를 적용하지 않는다**는 판정이 2026-09-06에도 재현됐다.

**경쟁사 FAQ에서 흡수할 질문**(taiwanrounders FAQ 축어): `德州撲克1BB是多少？` ·
`錦標賽為什麼要放Ante?` · `什麼是Big blind Ante?` · `德州撲克發牌順序是什麼？` · `大盲小盲有什麼差別？`
