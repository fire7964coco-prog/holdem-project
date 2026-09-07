# zh-hant 확률(Odds & Math) 클러스터 — 키워드 실측

> 회차 3 A 구간 산출(2026-09-07). 대상 7편 = `holdem-probability` · `holdem-pot-odds` · `holdem-outs` ·
> `holdem-drawing-odds` · `holdem-implied-odds` · `holdem-equity` · `holdem-card-counting`.
> **측정법 정본** = `docs/keyword-bank/zh-hant-tag-volumes.md` §0 · `docs/local-voice/zh-tw.md` §1-D.
> 🔴 볼륨 = DFS `keywords_data/google_ads/search_volume/live` · `location_code:2158` · **`language_code` 생략**.
> 🔴 SERP = DFS `serp/google/organic/live` · `location_code:2158` · **`language_code:"zh-TW"`**(하이픈 · 반대다) · mobile.
> 🔴 자동완성 = `hl=zh-TW&gl=TW` · `.mjs`의 `fetch`(셸 curl 금지 — CJK가 깨진다).

---

## 1. 볼륨 실측 (DFS · location 2158 · 2026-09-07)

### 1-A. 살아 있는 축 (volume ≥ 10)

| 키워드 | 월간 | 비고 |
|---|--:|---|
| `德州撲克勝率計算器` | **260** | 🟠 **도구 의도 지배** — §2-B 판정 |
| `德州撲克勝率` | **210** | 🟠 혼합(계산기 2 + 일반 가이드) — §2-C |
| `德州撲克機率` | 140 | ✅ 우리 축(probability) |
| `德州撲克機率表` | 140 | ✅ **probability 완전형** — SERP #1이 taiwanrounders |
| `德州撲克勝率計算` | 90 | 방법 의도(계산기 아님) |
| `德州撲克勝率表` | 90 | |
| `德州撲克起手牌勝率` | 90 | 🔴 **starting-hands-chart 축** — §2-D |
| `德州撲克牌型機率` | 50 | ✅ probability 주표 |
| `德州撲克算牌` | 50 | ✅ card-counting 축(제목 보유) |
| `皇家同花順機率` | 50 | ✅ probability H2 L174 보유 |
| `德州撲克計算app` | 50 | 🟠 도구 의도 |
| `德州撲克賠率` | 30 | ✅ pot-odds |
| `德州撲克賠率表` | 30 | ✅ pot-odds H2 L110 「底池賠率對照表」 |
| `底池賠率` | 20 | ✅ pot-odds 주인 |
| `pot odds` | 20 | ✅ pot-odds(제목 병기 보유) |
| `德州撲克機率計算` | 20 | |
| `德州撲克機率計算機` | 20 | 🟠 도구 |
| `德州撲克賠率計算` | 20 | |
| `德州撲克ev計算` | 20 | 🆕 equity 축 |
| `德州撲克ev` | 20 | 🆕 equity 축 |
| `德州撲克計算器` | 20 | 🟠 도구 |
| `隱含賠率` | 10 | ✅ implied-odds 주인 |
| `同花機率` | 10 | drawing-odds |
| `阻擋牌` | 10 | card-counting |
| `德州撲克同花順機率` | 10 | probability |
| `德州撲克機率軟體` | 10 | 🟠 도구 |
| `德州撲克勝率算法` | 10 | |
| `rule of 4 and 2` | 10 | 영문형 |
| `撲克機率` | 10 | |
| `德州撲克概率` | 10 | 간체 표기 유입 |

### 1-B. null(0) — 볼륨 없음. 근거로 쓰지 마라

`補牌` · `德州撲克補牌` · `成牌機率` · `聽牌機率` · `同花聽牌` · `順子機率` · `翻牌機率` · `暗三條` ·
`四二法則` · `二四法則` · `起手牌勝率` · `起手牌勝率表` · `德州撲克起手牌機率` · `德州撲克起手牌勝率表` ·
`牌型機率` · `底池賠率怎麼算` · `德州撲克底池賠率` · `撲克賠率` · `撲克算牌` · `棄牌權益` · `四條機率` ·
`移除效應` · `德州撲克死牌` · `blocker 撲克` · `德州撲克勝率計算機` · `德州撲克機率問題` · `ev是什麼 撲克`

🪶 **null이 «수요 없음»은 아니다**(저볼륨 롱테일 집합전략). 다만 **판정 근거로는 못 쓴다** —
태그를 옮기거나 제목을 바꾸는 데 null을 근거로 대지 마라.

---

## 2. SERP 판정 (DFS · location 2158 · zh-TW · mobile · 2026-09-07)

### 2-A. 🔴 `聽牌`(590) = 마작이다. 이 클러스터 최대 함정

SERP **12/12 전건 마작**: mj888.cc 麻將聽牌計算機(#1·#3) · 위키 「聽牌，為麻將術語」(#2) ·
교육부 사전 「打麻將時，處於等待胡牌的狀態」(#5) · demox 麻將判定胡牌聽牌程序 · gametower 台灣16張麻將台數 ·
tingpai16.com 台灣麻將聽牌練習 · 麻將 Wiki · 유튜브 麻將教學. **포커 결과 0건.**

→ **`聽牌`을 태그·제목·H2·메타에 단독으로 쓰지 마라.** 본문에서 포커 문맥의 「聽牌」은
그대로 쓴다(코퍼스 정본이고 문맥이 잡아 준다) — 금지는 **«메타» 자리**에 걸린다.
🪶 이 클러스터에서 볼륨 1위가 함정이었다. §1-D-2 「볼륨이 클수록 SERP를 먼저 재라」가 또 맞았다.

### 2-B. 🟠 `德州撲克勝率計算器`(260) = 도구 지배. **단 글이 #3을 먹고 있다**

SERP 10건 중 **8건이 계산기·App**(dongpaidi #1 · App Store #2 · calculators.hk #4 · natural8 #5 ·
github #6 · 應用寶 #8 · hand2note #9 · csdn #10). 글은 둘뿐:
- **#3 taiwanrounders `poker-probability`** — 제목은 「德州撲克機率表：勝率圖解、二四法則心算與 EV 計算公式大全」이고
  글 안에 H2 「📱 推薦：德州撲克勝率計算器 App 與工具」를 두어 이 축을 먹는다.
- #7 happypoker.tw `poker-equity` — Equilab 소개 + 「42 法則」.

→ **판정: 제휴 도구 추천으로 이 축을 먹는 것은 우리 자리가 아니다.** 대신 **§3-A의 TDA Rule 5 각도**로
간다 — 검색자가 원하는 「계산기 주세요」에 **「錦標賽에서는 live hand 중에 못 쓴다, 그래서 心算」**으로
답하는 자리는 이 SERP에 **아무도 없다.**

### 2-C. 🟠 `德州撲克勝率`(210) = 혼합. 개념 글로는 안 잡힌다

#1·#2 계산기 · #3 巴哈姆特 종합 가이드(「簡單計算方式（Rule of 2 & 4）」로 진입) ·
#4 sixpoker666 起手牌勝率 · #5 造九數位 종합 전략. **equity 개념 단독 글은 0건.**
→ `holdem-equity`가 이 완전형을 제목에 박아도 못 이긴다. **자기 축(`德州撲克ev` 20 · `德州撲克ev計算` 20 ·
`棄牌權益`)에 집중하고**, 勝率 축은 `快速估算你的勝率`(L48) 절이 ×4/×2 + 대결표로 부분 노출을 노린다.

### 2-D. 🔴 `德州撲克起手牌勝率`(90)의 주인은 `holdem-starting-hands-chart`다 — probability가 양보

SERP **8/8이 起手牌 강도·打法**: steemit 起手牌获胜概率表 #1 · bozopokers 「AA 勝率85%」 #2 ·
viegg 계산기 #3 · sixpoker666 起手牌勝率表 #4 · 巴哈 #5 · taiwanrounders 「起手牌勝率對決圖解
(Pre-flop All-in Odds)」 #6 · natural8 10組最強起手牌 #7 · bilibili #8.

🔴 **`holdem-probability` L71 절은 「被發到」 확률**(AA = 1 比 221)이지 **勝率**이 아니다 —
검색자가 원하는 「AA 85%」류 표를 이 글은 주지 않는다. 태그 `起手牌勝率`이 본문과 어긋나 있다.
→ **실행 = probability에서 `起手牌勝率` 태그 제거. 주인은 `holdem-starting-hands-chart`(회차 4).**

### 2-E. `德州撲克機率表`(140) — 주 경쟁자 지형

#1 **taiwanrounders `poker-probability`**(번들형 · §4) · #2 steemit(간체) · #3 巴哈 · #4 위키 撲克牌型 ·
#5 bozopokers 起手牌勝率 · #6 知乎 · #7 sixpoker666 · #8 bilibili · #9 scribd PDF · #10 calcbe 계산기.
→ **번체 전문 블로그는 taiwanrounders 하나뿐**이고 나머지는 간체 전재·포럼·위키·PDF다. **자리가 있다.**

---

## 3. 우리 자리 (경쟁사 어디에도 없는 것)

### 3-A. ★ TDA Rule 5 — 「牌桌에서 계산기·차트를 못 쓴다」

**1차 출처 확보**: `docs/sources/tda-2022-shortform-rules.txt` L11 · **Rule 5 Electronic Devices and
Communication** 축어:

> *"Betting apps and charts may not be used by players with live hands."*

🔴 **범위를 정확히 쓸 것**: ① **TDA 규칙을 채택한 錦標賽** 기준이다(하우스 룰·캐시게임은 다를 수 있다 —
같은 조항이 *"subject to house and gaming regulations"*라고 스스로 단서를 단다) ② 금지는 **«live hand를
들고 있는 동안»**이다(핸드 사이는 아니다) ③ 「app과 chart」이지 「생각」이 아니다.

→ **이 조항이 이 클러스터 전체의 논리적 근거다**: 계산기 SERP(§2-B)가 원하는 답을 주면서
四二法則·心算이 왜 필요한지를 «규정»으로 설명한다. **경쟁 10개 결과 중 이걸 쓴 곳은 0곳.**

### 3-B. taiwanrounders가 «번들»이라 못 주는 것

한 페이지(§4)가 機率표+底池賠率+隱含賠率+EV+Fold Equity+MDF를 다 담아 **각 주제가 얕다.**
우리는 7편이라 편당 깊이가 있다 — 다만 그 대가로 **편마다 자기 축의 완전형 어구를 제목·H2에 박아야 한다**
(`local-voice/zh-tw.md` §2 「번들형이 이긴다」).

---

## 4. 경쟁 상위 글 H2 골격 (Playwright DOM · 2026-09-07)

**taiwanrounders `/post/poker-probability`** — 「德州撲克機率表：勝率圖解、二四法則心算與 EV 計算公式大全」

```
H2 📱 推薦：德州撲克勝率計算器 App 與工具      ← §2-B의 정체
H2 常用成牌機率表 (Outs vs. Win Rate)
H2 起手牌勝率對決圖解 (Pre-flop All-in Odds)
H2 二、德州撲克勝率計算法：二四法則（Rule of 2 and 4）
   H3 Step 1：算出你的 Outs 數量 / H3 Step 2：套用公式
H2 三、Pot Odds（底池賠率）與跟注決策
   H3 Pot Odds 定義 / 計算公式 / 實例說明 / 如何決策？(Pot Odds vs. 勝率)
H2 德州撲克bet size vs 所需勝率
H2 四、進階概念：隱含賠率與有效籌碼
   H3 什麼是 Implied Odds？ / 有效籌碼 (Effective Stack) 的重要性
H2 五、期望值 (EV) 與棄牌權益(fold equity)
H2 詐唬數學：MDF 與 Bluff 成功率
H2 常見問題 FAQ：德州撲克機率與勝率計算
   H3 什麼是「底池賠率」(Pot Odds)？怎麼計算？
   H3 「四二法則」(Rule of 4 and 2) 是什麼？如何用它快速估算勝率？
   H3 德州撲克中的 EV (期望值) 是什麼意思？
   H3 德州撲克勝率表怎麼看？
   H3 為什麼有時候明明勝率高還是輸？
   H3 德州撲克機率表對新手有什麼幫助？
   H3 拿到一對底牌後，在翻牌圈「中 Set (中暗三條)」的機率是多少？
   H3 「Set Over Set」 的機率高嗎？
```

🔴 **표기 실측**: 이 글은 **제목·H2에 `二四法則`**, **FAQ에 `四二法則`**을 쓴다 — **둘 다 쓴다.**
🪶 그런데 **두 표기 모두 볼륨 null**이다(§1-B). → **우리 정본 `四二法則`을 바꿀 근거가 없다**
(진행 파일 §3 「四二法則이 도착 글 정본」 유지). 표기 논쟁은 여기서 닫는다.

🪶 우리 코퍼스 커버리지 대조: `MDF·최저방어빈도`는 전략 클러스터가 이미 보유(3bet·when-to-fold 등 6편) —
**확률 클러스터가 가져올 것이 아니다**(회차 4 소관). `Set Over Set`은 `holdem-cooler`·`holdem-probability`·
`holdem-implied-odds`가 이미 다룬다. `為什麼勝率高還是輸`(분산)은 `holdem-bad-beat`·`holdem-cooler` 보유.

---

## 5. PAA — 이 축은 오염돼 있다

`德州撲克機率`의 PAA(2026-09-07): 「打德州撲克會被抓嗎?」 · 「一條龍的機率是多少？」 →
「機率如何計算？」 · 「一條龍是什麼？」 → 「一條龍**服務**是什麼意思？」 · 「一龍是誰？」.

🔴 **「一條龍」은 마작·관용구로 새고, 「會被抓嗎」는 합법성 축이다.** 둘 다 편입 금지 —
합법성은 **신규로 «열지» 않는다**(정본 = 메모리 `legality-ban-scope-topic-vs-tangent`).
→ **이 클러스터의 FAQ 근거는 PAA가 아니라 §4 경쟁사 FAQ와 §1 볼륨이다.**

🪶 「其他人也搜尋了」는 쓸 만했다: `德州撲克ev計算` · `德州撲克計算app` · `德州撲克手牌範圍表` ·
`德州撲克計算器` · `德州撲克賠率表` · `德州撲克計分器` · `德州撲克大小`(=족보 · 회차 2 판정 완료).

---

## 6. 태그 카니발 판정

| 태그 | 현재 보유 | 볼륨 | 판정 |
|---|---|--:|---|
| `起手牌勝率` | probability · **starting-hands-chart** | null(완전형 `德州撲克起手牌勝率` **90**) | 🔴 **probability 제거** — SERP 8/8이 起手牌 강도이고 probability 절은 「被發到」다(§2-D) |
| `底池賠率` | probability · **pot-odds** | 20 | 🟠 **probability 제거** — pot-odds가 제목 축 주인. probability는 H2(L154) 유지 |
| `補牌 Outs` | probability · pot-odds | null | ✅ **조치 없음** — 볼륨 근거 없음. 셋 다 실제로 그 개념을 쓴다 |
| `四二法則` | probability · pot-odds · **outs** | null | ✅ **조치 없음** — 볼륨 0이라 이관 근거가 없다. 🪶 EN이 2026-08-26(`adcffae4`)에 「rule of 2 and 4」 링크를 pot-odds→**outs**로 옮긴 것이 유일한 신호이고, **zh-hant는 이미 outs를 가리킨다**(implied-odds L71). 링크 층은 이미 정렬돼 있다 |
| `成牌機率` | **drawing-odds** · probability | null | 🟠 **probability 제거** — drawing-odds가 제목 축(「德州撲克成牌機率」) |
| `隱含賠率` | **implied-odds** · pot-odds | 10 | ✅ **유지** — pot-odds H2 L130이 실제로 3자 비교를 하므로 부분일치가 정당 |
| `反向隱含賠率` | implied-odds · monotone-board-strategy | null | ✅ 조치 없음(전략편은 다른 클러스터) |
| `有效籌碼` | implied-odds · 3bet-pot-cbet | null | ✅ 조치 없음 |

🔴 **원칙**: 이 회차는 **볼륨 근거가 있는 3건만 손댄다.** null 태그를 «정리»한다는 이유로 옮기면
근거 없는 변경이다(§12-B).

---

## 7. 다음 회차가 이어서 볼 것

- **회차 4(전략)**: `德州撲克起手牌勝率`(90) 완전형을 `holdem-starting-hands-chart`가 제목·태그로 가져갈지 판정.
  이번 회차가 probability에서 **비워 준다.**
- **회차 4**: `德州撲克手牌範圍表`(미측정 · 「其他人也搜尋了」 출현) 볼륨 실측 → range 축.
- **회차 6(용어)**: `阻擋牌`(10) 주인 판정 — 현재 card-counting 태그 보유, glossary에도 항목이 있을 수 있다.
