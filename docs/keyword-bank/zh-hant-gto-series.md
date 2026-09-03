# 키워드 뱅크 — 번체(zh-hant · 대만/홍콩) GTO 솔버 시리즈 13편 (`/zh-hant/blog/<slug>` · 번역+5필드용 «키워드 팩»)

> 실측일 **2026-09-03**. 도구 = **DataForSEO `keywords_data/google_ads/search_volume/live`**(🔴 `language_code` 생략 — 대만은 그 필드를 거부한다 · location **2158 대만** + **2344 홍콩** · 116종 × 2 · $0.18) +
> **DataForSEO SERP live/advanced**(location 2158 · `zh-TW` · mobile · depth 10 · 14쿼리 — 🔴 **태스크 1개씩만**) + **구글 자동완성**(`hl=zh-TW&gl=TW` · 79시드).
> 🔴 **라쿠는 쓰지 않았다** — 대만 location은 «죽은 소스»(`zh-gto-solver.md` §1-④)이고 중국어 서술형은 전부 null(zh 회차 실증). 랜딩 `/zh-hant/solver`의 뱅크는 `zh-gto-solver.md` §7(헤드텀 `gto poker` 210/390 · `poker solver` · `gto solver` · `德州撲克 gto` 140은 **랜딩 소유**).
> 자사 카니발 = `lib/posts-zh-hant/` 발행 45편 title·seoTitle·tags·H2 전수 grep. 원자료 = `.solver-captures/dfs-vol-zh-hant.json` · `dfs-serp-zh-hant.json`(임시).
>
> 🔴 **읽는 법**: 이 팩은 «번역 + 5필드»(스펙 §4-A-3)의 5필드(seoTitle·desc·H2·FAQ 선택·내부링크) + 여섯째 «본문 용어 표기»를 정하는 근거다.
> **수치·논거·구조는 EN 정본 그대로**이고 여기 적힌 것은 «어떤 번체로 부르나»뿐이다. 볼륨 0이라도 개념어는 본문에 쓴다 — 「제목·H2 조준」만 볼륨으로 가른다.
> 🔴 볼륨은 «지역»별이지 «언어»별이 아니다. 영어 문자열(`spr poker` 등)의 볼륨은 그 지역 전체다. **간체·번체 자형은 볼륨을 안 가른다**(`zh-gto-solver.md` §1-⑤) — 그래서 이 팩의 대만 값은 zh 팩의 SG·MY 값과 «같은 파이의 다른 지역»이다.

## 0. 한 줄 결론

**ja·es·zh와 같은 지형이되, 대만은 «중국어 정면 쿼리»가 살아 있는 유일한 지역이다.** `德州撲克 gto` **140**(TW · SG의 14배) · `德州撲克 範圍` 70 · `德州撲克 下注尺寸` 20 · `德州撲克 donk` 20 · `德州撲克 spr` 10 · `德州撲克 範圍優勢` 10 · `過牌加注` 10 · `超對` 10 · `明三條` 10 · `阻擋牌` 10 — **간체권(SG·MY)에서 전부 null이던 중국어 개념어가 대만에선 10~70으로 잡힌다.**
영어 술어는 `spr poker` 20/40 · `poker solver` 20/30 · `gto solver` 30/40 외엔 전부 10.
🔴 **자릿수 함정 3건**(채택 금지): **`check raise` 480**(TW) = **대만 포커룸 브랜드 «Check Raise 小港店·台中»**(자동완성 「check raise小港店·小港·台中·評論」 · SERP #7 «Check Raise (@cr__poker) · Taichung City») · **`cbet` 170** = **CBETA 中華電子佛典協會**(자동완성 「cbeta online·電子佛典」) · **`c-bet` 90** = 「c-bet德州撲克競技協會-雲林店」 혼재(포커룸 상호). 셋 다 «개념»이 아니라 «상호»가 볼륨을 만든다 — [[keyword-volume-order-of-magnitude-trap]].
→ 처방(ja·es·zh와 동일): **검색 표면(seoTitle·tags)은 「德州撲克 + 개념어」**(대만은 중국어 표기가 산다) **+ 영어 술어 앵커**, 본문 표기는 **앱 번체 축어 우선**, 훅은 **숫자**.
「GTO」·「solver」는 제목·H2에서 반드시 `德州撲克`/`撲克`와 붙인다(자동차·아니메·수학 솔버 오염 — `zh-gto-solver.md` §1-①②). **solver = 解算器**(앱 번체 축어 · 간체 求解器와 다르다 · 코퍼스 解算器 26 : 求解器 0).

## 1. 실측 볼륨 (DFS `search_volume` · 12개월 평균 · TW 2158 / HK 2344)

### 조준 후보 (소유자 판정은 §5)

| 키워드 | **TW** | **HK** | 편 | 메모 |
|---|---:|---:|---|---|
| `gto poker` / `poker gto` | 210 | 390 | — | 🔴 **랜딩 소유**(`zh-gto-solver.md` §7). 13편은 본문 언급 + 허브 링크만 |
| `poker solver` · `gto solver` | 20 · 30 | 30 · 40 | — | 🔴 랜딩 소유. 본문 용어(解算器)로는 자유 |
| **`德州撲克 gto`** / `德撲 gto` / `gto 撲克` | **140** / 40 / 40 | 20 / 10 / 10 | 공통 | 🔴 H1 정면은 랜딩 소유. 13편은 태그 「德州撲克 gto」 1개 + 본문 자연문. 자동완성 파생: `gto 軟體 免費`(90) · `gto 意思`(10) · `gto 打法`(10) · `gto表` · `gto理論` |
| `德州撲克 範圍` / `德州撲克範圍` | 70 / 70 | 10 | 공통 | 자동완성 `德州撲克 範圍 表`·`手牌 範圍 表`는 **프리플랍 표**(랜딩·starting-hands 소유). 13편은 「翻牌後 範圍」 문맥만 |
| **`spr poker`** · `德州撲克 spr` · `spr 撲克` | **20** · 10 · 10 | 40 · 10 · 10 | **⑧** | ✅ **시리즈 최대 중국어 축 · 자사 0편**. 자동완성 `spr 意思 德州`·`德州 撲克 spr 意思`·`poker spr 意思` — «뜻» 수요. 대만 표기 = **籌碼與底池比（SPR）**(threads #1 · andypoker #2) · natural8는 「籌碼底池比率」. 🔴 코퍼스 SPR 0회·籌碼底池比 0회 → 시리즈가 처음 연다 |
| **`德州撲克 donk`** · `德州撲克 donk意思` · `donk bet` | **20** · 10 · 10 | 10 · 10 · 20 | **④** | ✅ «뜻» 수요. 대만 표기 = **領先下注**(threads #1 「Donk（領先下注）」 · andypoker #2 「Donk Bet 領先下注」) · natural8 「驢式下注」는 소수. 🔴 코퍼스 領打 2 : 領先下注 0 — **시리즈는 領先下注（donk bet）**(간체 领打와 다르다) |
| **`德州撲克 下注尺寸`** | **20** | 10 | **⑨** | ✅ 자동완성 실재 · 코퍼스 下注尺寸 11회. SERP #1 monsterstack 「下注尺寸、價值下注是什麼意思」(정의) · #3 taiwanrounders(棄牌權益 공식) — «98.4%가 한 사이즈»의 솔버 수치 0개 |
| `德州撲克 範圍優勢` | 10 | 10 | **①③** | ✅ 자동완성 실재. SERP = medium(진계) · moshike(간체) · vocus · andypoker 「Range Advantage 範圍優勢」 · reddit 「堅果優勢」 · bilibili — **전부 개념 정의**. «A-7-2에서 BB 98.2% 過牌» 수치 글 0 |
| `過牌加注` · `德州撲克 過牌加注` | 10 · — | 10 | **⑦** | ✅ 자동완성 `德州撲克 過牌加注`·`德州撲克 check raise` 실재. SERP #1 taiwanrounders 「Check Raise (過牌加注) 教學：意思、實戰時機與 XR 策略」 — 정의·일반론. **재솔브 수치(加注 14.9% · 跟注 65.6% · 蓋牌 19.5%) 글 0** |
| `超對` · `德州撲克 超對` | 10 · — | 10 | ⑩ | 앱 라벨 「超對」 · 코퍼스 24회. SERP #1 andypoker 「Overpair 超對」 · zhihu 「翻牌后拿着超对怎么打」 |
| `明三條` · `德州撲克 暗三條/明三條` | 10 · — | 10 | **⑥** | 자동완성 둘 다 실재. SERP #1 pokertaiwan 「如何將明三條玩的好」 · pokerdomain Set/Trips 정의 · moshike 「翻牌中暗三的概率为11%」 — **정의·확률 층**(hand-rankings·drawing-odds 소유) → ⑥은 «6-6-3에서 둘이 어떻게 갈리나» |
| `阻擋牌` · `德州撲克 阻擋牌` · `德州撲克 blocker` | 10 · 10 · — | 10 | **⑬** | 자동완성 둘 다 실재. SERP #1 vocus 「阻擋牌、Outs 與機率思維」 · taiwanrounders 「阻牌 blocker 效應」 · andypoker 「Blocker 阻斷牌」. 🔴 코퍼스 **阻擋牌 44 : 阻斷牌 0 : 擋牌 47(阻擋牌 포함)** → **阻擋牌（blocker）**(간체 阻断牌과 다르다). 🔴 ⑬은 EN 본문이 블로커를 정면으로 안 다룬다(zh 팩 §3 ⑬ 보류와 동일) — 태그·문맥만 |
| `sb vs bb` | 10 | 10 | ⑪⑫⑬ | 앱 그룹 라벨 「盲位對戰」(코퍼스 0 · 「盲注戰」 0 · 자동완성 0) → **盲位對戰**(앱 축어) + 태그 「blind vs blind」 |
| `價值下注` | 10 | 10 | 보조 | 코퍼스 실재. 본문 개념어 |
| `mdf poker` | 10 | 20 | ⑧⑨⑩ | 코퍼스 MDF 7 · 最小防守頻率 1 → **最小防守頻率（MDF）** 첫 1회 후 MDF |
| `德州撲克 教學` | 480 | 70 | — | 🔴 `texas-holdem-rules-for-beginners`(seoTitle 【新手教學】) 소유. 「教學案例」 결합으로만(랜딩 §7-1과 동일) |
| `德州撲克 勝率計算器` | 260 | 50 | — | 🔴 랜딩 소유(신규 FAQ + 계산기 탭). 13편은 「自己去驗證」 절에서 도구명으로만 |
| 영어 개념어 `check raise poker`·`donk bet poker`·`set vs trips`·`trips vs set`·`blockers poker`·`polarized range poker`·`overpair poker`·`bet sizing poker`·`3bet pot`·`monotone board poker`·`range advantage poker`·`equity realization poker`·`fold equity poker`·`top pair poker`·`paired board poker`·`cbet poker` | 10 | 10~20 | 각 편 | 태그 앵커(「德州撲克 + 영어 술어」). `blind vs blind poker` 0/0 · `dry board poker` 0/10 · `range check poker` null |

### 🔴 제외 (이유와 함께)

| 키워드 | TW | 왜 |
|---|---:|---|
| `check raise` | **480** | 🔴 **대만 포커룸 상호**(小港店·台中 · @cr__poker). 개념 볼륨이 아니다. 「德州撲克 check raise」 자동완성만 취한다 |
| `cbet` / `c-bet` | 170 / 90 | 🔴 CBETA(불교 전적) · 「c-bet德州撲克競技協會-雲林店」(상호). 그리고 **`holdem-continuation-bet` 소유**(태그 10종 전부 c-bet) — 제목에 「c-bet」 단독 금지 |
| `gto wizard` · `piosolver` | 4,400 · 110 | 브랜드(참고) |
| `德州撲克 教學` · `德州撲克 勝率計算器` | 480 · 260 | 자사 소유(위 표) |

### 🔴 null 실측 (제목·H2 조준 금지 · 본문 개념어로는 쓴다 — «수요 0»이 아니다)
`德州撲克 解算器/solver` · `德州撲克 翻牌後` · `翻牌後 策略` · `德州撲克 翻牌 策略` · `範圍優勢`(단독) · `堅果優勢` · `勝率實現`(±德州撲克) · `德州撲克 c-bet/c bet` · `持續下注`(±德州撲克) · `c-bet 頻率` · `乾燥牌面`·`乾牌面`·`濕牌面`(±德州撲克) · `德州撲克 牌面` · `牌面結構` · `頂對`(±德州撲克) · `暗三條`(±德州撲克) · `暗三條 明三條` · `領先下注` · `領打` · `德撲 spr` · `籌碼底池比` · `3bet 底池`(±德州撲克 · `3bet底池`) · `下注尺寸`(단독) · `兩極化範圍`·`極化範圍`(±德州撲克) · `阻斷牌` · `德州撲克 盲位` · `盲位對戰` · `盲注戰` · `棄牌權益`(±德州撲克) · `德州撲克 mdf` · `最小防守頻率` · `單色牌面`·`同花牌面`·`對子牌面`·`彩虹牌面`·`連張牌面`(±德州撲克) · `德州撲克 詐唬 頻率` · `德州撲克 教學案例` · `range check poker`.
🪶 자동완성에는 `德州撲克 翻牌後`·`德州撲克 過牌意思`·`德州撲克 頂對`·`德州撲克 超對`·`德州撲克 暗三條`·`德州撲克 明三條`·`德州撲克 範圍優勢`·`德州撲克 阻擋牌`·`德州撲克 下注尺寸`·`德州撲克 donk意思`·`spr 意思 德州`가 **산다** — «구글 KWP 버킷 아래»다.

## 2. SERP 실측 (DFS · google 모바일 · TW · zh-TW · 2026-09-03) — «이길 자리»

| 쿼리 | top-3 | PAA | 판정 |
|---|---|---|---|
| `德州撲克 gto` | taiwanrounders 「GTO 教學·GTO Wizard 中文介紹」 · grindgto(무료 트레이너) · vocus 「學習 GTO，但不要死記硬背」 | — | 🔴 랜딩 자리. 13편은 태그·본문만. 🪶 #2 grindgto·#6 freebetrange = **«돌아가는» 중문 무료 도구가 대만 SERP엔 이미 2개**(SG엔 0이었다) — 랜딩 뱅크에 통보감 |
| `德州撲克 範圍優勢` | medium 「撲克中的範圍」 · moshike(간체) · vocus 「範圍——這裡應該還剩下什麼牌？」 | — | 🟢 전부 개념 정의. **한 보드의 솔버 수치로 범위 우위를 보여주는 글 0** → ①③ |
| `德州撲克 spr` | threads 「SPR（籌碼與底池比）」 · andypoker 「籌碼與底池比 SPR」 · moshike(간체) | — | 🟢 **전부 «SPR이란»** · natural8 「籌碼底池比率」 · hunter.poker 「Effective Stack 與 SPR」. «SPR 4.0에서 100% 벳 · 사이즈는 範圍 모양이 정한다» 각도 0 → ⑧ |
| `德州撲克 check raise` | taiwanrounders 「Check Raise (過牌加注) 教學：意思、實戰時機與 XR 策略」 · moshike · threads | — | 🟢 정의·일반론. #7이 **포커룸 인스타**(@cr__poker · 台中) — 480 볼륨의 정체. 재솔브 수치 글 0 → ⑦ |
| `德州撲克 donk` | threads 「Donk（領先下注）」 · andypoker 「Donk Bet 領先下注」 · natural8 「驢式下注(Donk Bet)」 | 荷官是違法的嗎？ · 打德州撲克會被抓嗎? · 什麼叫短牌？ | 🟢 «뜻» 수요 지배(zhihu 「dunk什么意思」). «領先下注가 맞는 유일한 SRP 보드 + 23.7%» 각도 0 → ④. 🔴 PAA는 합법성 질문 — **채택 금지**(posting.mdc 합법성 금지 · [[legality-ban-scope-topic-vs-tangent]]) |
| `德州撲克 暗三條 明三條` | pokertaiwan 「如何將明三條玩的好」 · monsterstack 용어집 · pokerdomain 「Set」 | — | 🟡 정의·확률 층(moshike 「翻牌中暗三 11%」 · legendpoker 「明三条怎么打」). ⑥은 페어 보드 국면만 |
| `德州撲克 3bet 底池` | natural8 「3-bet 是什麼」 · facebook · vocus 「3-Bet 是什麼？」 | — | 🟢 프리플랍 3bet 정의 지배(`holdem-3bet` 소유) · #9 德扑之家 「3bet底池在翻牌圈的玩法」(간체 개론). **보드별 수치** 0 → ⑧⑨⑩ |
| `德州撲克 阻擋牌` | vocus 「阻擋牌、Outs 與機率思維」 · taiwanrounders 「阻牌 blocker 效應」 · reddit 번체 | — | 🟡 정의 층 포화 → ⑬은 응용(A 阻擋牌 88 vs 66 組合) |
| `德州撲克 下注尺寸` | monsterstack 「下注尺寸、價值下注是什麼意思」 · wikipedia · taiwanrounders 「Fold Equity 完全指南：下注尺寸與詐唬計算公式」 | 撲克牌的尺寸是多少公分? 등 **트럼프 물리 규격** | 🟢 일반론뿐. «98.4%가 같은 사이즈 · 두 사이즈 병존» 0 → ⑨. 🔴 PAA는 «카드 크기» 오염 — seoTitle에 「下注尺寸」만 두면 물리 규격 의도가 섞인다 → 「德州撲克 下注尺寸」 + 보드 수치 |
| `德州撲克 翻牌後` | monsterstack 「翻牌、轉牌、河牌是什麼」 · wikipedia · pokerfans | — | 🟡 규칙 층. andypoker 「Postflop 翻牌後」 · natural8 「稱霸撲克：翻牌後策略」 · vocus 「翻後不同的公共牌面做出最佳決策」 — **개론**. 특정 보드 해부 0 |
| `德州撲克 單色牌面` | wikipedia · taiwanrounders 용어집 · pokerfans 용어집 | — | 🔴 **의도 오염 — 족보·용어집 지배**(moshike 「单色翻牌面的策略」 4위). ⑤ seoTitle은 「3 張同花」·「同花牌面」 병기로 텍스처 의도 고정(zh와 동일 처방) |
| `德州撲克 超對` | andypoker 「Overpair 超對」 · zhihu · moshike | 打德州撲克會被抓嗎? · 荷官是違法的嗎？ · 德州算是賭博嗎？ | 🟢 정의·«어떻게 치나» 일반론. 🔴 PAA 합법성 — 채택 금지 |
| `德州撲克 c bet` | taiwanrounders 「Cbet 是什麼? 翻牌如何用不同下注尺寸攻擊對手範圍」 · moshike · vocus | — | 🔴 자사 cbet 글 자리 — 13편 조준 금지 |
| `德州撲克 gto 打法` | taiwanrounders · vocus · grindgto | gto要錢嗎？ · GTO Wizard 的價格是多少? | 🔴 랜딩 자리(«무료» 훅이 PAA와 정확히 맞는다 — 랜딩 뱅크 통보감) |

🔴 **PAA는 14쿼리 중 4개에만 붙었고 그중 3개가 합법성·물리 규격 오염**이다 — FAQ 문항은 PAA가 아니라 **자동완성 「…意思」·SERP 제목의 질문형**(「…是什麼?」「…怎麼打?」)에서 가져온다.
🪶 **대만권 경쟁자 지형**: taiwanrounders(교학 공장 · 최다 1위) · andypoker(「專屬亞洲撲克教學中文網」 · 용어별 1페이지) · vocus.cc(기초 관념 시리즈) · monsterstack · natural8(zh-TW) · pokertaiwan · pokerdomain · threads/instagram/dcard(UGC) + **간체 사이트가 그대로 랭크**(moshike · zhihu · legendpoker). **전부 «개념 정의»이고 솔버 출력으로 한 보드를 해부한 글은 0개** — zh와 같은 결론, 이 시리즈의 자리는 정의가 아니라 **수치**다.

## 3. 편별 배분 (5필드 근거)

| 편 | slug | 제목·H2 축(볼륨) | FAQ 흡수 | 내부링크(zh-hant 실재 — 🔴 EN 파일 grep 실측 2026-09-03 · 시리즈 내부 링크 제외) |
|---|---|---|---|---|
| ① | a-high-board-cbet | 「範圍優勢」 10 · 「頂對」 · 「乾燥的 A 高牌面」(앱) · 훅 = **98.2% 過牌** | 「什麼是範圍過牌（range check）？」 · 「什麼是乾燥牌面？」 | holdem-continuation-bet ×2 · holdem-equity · holdem-position-play |
| ② | k-high-board-cbet | 「K 高牌面」(앱) · 훅 = **99.8% 過牌** · 「什麼時候不該 c-bet？」(cbet 소유 롱테일만) | 「A 高和 K 高，哪個對 BB 更糟？」 | holdem-position-play (+ 시리즈 ①③④) |
| ③ | broadway-board-strategy | 「範圍優勢 vs 堅果優勢」(SERP reddit·bilibili 축) · 훅 = **EQR 77.9%** | 「範圍優勢和堅果優勢差在哪？」 | holdem-continuation-bet · holdem-drawing-odds · holdem-position-play (+ ①②④) |
| ④ | donk-bet-strategy | **「donk」 20 · 「領先下注（donk bet）」(대만 표기)** · 훅 = **23.7%** | 「donk bet 是什麼意思？」 직답 | holdem-continuation-bet · holdem-drawing-odds (+ ①②③⑦) |
| ⑤ | monotone-board-strategy | 「單色牌面（3 張同花）」(앱) · 훅 = 「連成了同花都有 69.9% 只過牌」 · 🔴 seoTitle에 「3 張同花」 병기(의도 고정) | 「什麼是單色牌面？」 | holdem-drawing-odds · holdem-implied-odds (+ ④) |
| ⑥ | paired-board-strategy | **「明三條」 10 · 「暗三條/明三條」(앱 라벨)** · 「對子牌面」(앱) | 「暗三條和明三條哪個比較強？」 | holdem-3bet · holdem-continuation-bet · holdem-hand-rankings ×2 · holdem-pot-odds (+ ①④②⑦⑤) |
| ⑦ | low-board-check-raise | **「過牌加注」 10 · 「德州撲克 check raise」(자동완성)** · 「什麼時候該過牌加注？」 | 「什麼是過牌加注？」 · 「過牌加注算不禮貌嗎？」 | holdem-betting-actions · holdem-continuation-bet (+ ①④⑤) |
| ⑧ | 3bet-pot-cbet | **「SPR」 20/40 · 「spr 意思」(자동완성) · 「籌碼與底池比」(대만 표기)** · 「3bet 底池」(앱) | 「什麼是 SPR？」 직답 · 「SPR 怎麼算？」 | holdem-3bet · holdem-position-play (+ ⑨⑩①④⑥) |
| ⑨ | 3bet-pot-bet-sizing | **「下注尺寸」 20**(앱 「④ 下注尺寸」) · 훅 = **98.4% 同一個尺寸** | 「下注尺寸怎麼選？」 · 「什麼是超池下注（overbet）？」 | holdem-continuation-bet · holdem-drawing-odds · holdem-position-play · holdem-pot-odds (+ ⑧⑩③②⑥) |
| ⑩ | 3bet-pot-low-board | 「兩極化範圍」 · 「超對」 10 · 「棄牌權益（fold equity）」 | 「什麼是兩極化範圍？」 | holdem-3bet · holdem-strategy (+ ⑧⑨) · 🔴 `## FAQ` H2 없음(EN 동형) |
| ⑪ | blind-battle-cbet | 「盲位對戰」(앱) · 「blind vs blind」 · 훅 = **67.4%** | 「SB 和 BB，誰佔優？」 | holdem-continuation-bet · holdem-position-play (+ ⑫⑬④⑦) · FAQ H2 없음 |
| ⑫ | blind-battle-connected-board | 「連張牌面」(앱 «連張») · 「牌面結構」 보조 · 훅 = **9.6%** | 「靜態牌面 vs 多變牌面？」 | 외부 0 — 시리즈 내부(⑬⑪④⑦)만 · FAQ H2 없음 |
| ⑬ | ace-paired-board-strategy | **「blockers」 10 · 「阻擋牌」 10**(태그) · 「A 對子牌面」(앱) · 🔴 EN 본문이 블로커를 정면으로 안 다룬다 — 「阻擋牌」 H2·FAQ는 EN에 문장이 생겨야(배치 C 판정) | 「什麼是阻擋牌？」는 **보류**(EN 부재) | 외부 0 — 시리즈 내부(⑨⑩⑫⑥)만 · FAQ H2 없음 |
| 공통 | — | 「勝率實現（EQR）」 · 「翻牌後」 · 「德州撲克 gto」 | 「什麼是勝率實現？」 | /zh-hant/solver(허브 · 편당 2~4회) · holdem-equity |

🔴 **EN 내부링크 구조와 1:1**([[translation-link-structure-equals-en]]) — 대상 slug를 `/zh-hant/blog/`로 바꾸되 **개수·readnext·thumb까지 동일**. 위 열은 **EN 파일 grep 실측**이다(zh 팩 교훈 — 초판이 es 팩을 옮겨 적어 ⑤⑦이 틀렸었다).
✅ **EN 13편이 거는 외부 slug 10종(continuation-bet · position-play · drawing-odds · 3bet · pot-odds · hand-rankings · strategy · implied-odds · equity · betting-actions)은 전부 `lib/posts-zh-hant/`에 실재한다**(2026-09-03 `ls` 확인 · 45편) → 대체 링크 불필요. 시리즈 내부 링크 13종은 이번 회차에 함께 생긴다.
🪶 EN 필드 실측: `updated` ①~⑫ 2026-09-02 · **⑬ 2026-08-21**(masterUpdated는 파일에서 읽어라) · readTime ① 9 ② 9 ③ 10 ④ 9 ⑤ 10 ⑥ 10 ⑦ 11 ⑧ 12 ⑨ 12 ⑩ 10 ⑪ 10 ⑫ 10 ⑬ 10 min · FAQ 수 5·5·4·7·5·6·6·6·7·4·4·4·4 · readnext 2행 전 편 · 본문 이미지 1장 전 편.

## 4. 표기 판정 (되돌리지 마라 — 간체 zh 팩 §4와 갈리는 자리에 🔴)

1. **set / trips** — `translation-terms-zh-hant.md` §7-E 정본: **暗三條(set) / 明三條(trips)**. 앱 등급 라벨은 **「暗三條/明三條」**(슬래시 한 행) → 표에서 앱 라벨을 인용할 땐 축어 + 언페어 보드(①②③④⑤⑦⑧⑨⑩⑪⑫)면 EN 각주 «這裡都是暗三條». 페어 보드(⑥⑬)에서만 明三條가 실재. 산문 첫 1회 「暗三條（set）」「明三條（trips）」.
2. **「GTO」 = 제목·H1·H2에서 반드시 `德州撲克`/`撲克`와 결합. 🔴 「solver」 = 산문 「解算器」**(앱 번체 축어 「執行解算器」·「GTO 解算器」 · 코퍼스 26회 · 간체 求解器 금지) · seoTitle 앞머리 금지(랜딩 카니발). 태그는 「德州撲克 gto」.
3. **c-bet 표기** = 코퍼스 정본 「持續下注（c-bet）」 첫 1회 → 이후 「c-bet」(코퍼스 cbet 글 소유). 제목에 「c-bet」 단독 금지.
4. **board = 牌面**(앱·코퍼스) · 「公共牌」은 앱 입력 UI 「③ 公共牌」에서만. 텍스처 = 앱 축어: **乾燥 · 單色牌面（3 張同花） · 對子牌面 · 彩虹 · 雙色 · 連張 · 多變**(「濕潤」은 산문 대비어 · 코퍼스 濕潤 10). 🔴 **«broadway» = 百老匯**(앱 「百老匯連張雙色牌面」 · 코퍼스 13 · 간체는 라틴 broadway).
5. 🔴 **카드 표기 = 10**(앱 스팟명 「K 高帶 10 的牌面」 · 코퍼스 10♠ 56 : T♠ 1 · 하이픈 보드 Q-J-10 21회) — **간체 zh의 «T» 규칙과 반대다.** 단 레인지 약호(T9s · TT · KTs)는 그대로. 수치 = 언어 불변(반각 % · 소수점 `.` · `bb` · 천단위 `,`).
6. **頂對 · 超對 · 次頂對 · 弱對 · 低對 · A 高牌 / K 高牌 · 未成牌 · 兩對 · 順子 · 同花 · 葫蘆 · 四條**(앱 축어 그대로) · **聽牌 · 組合聽牌 · 同花聽牌 · 兩頭順聽牌 · 卡順聽牌 · 後門同花聽牌 · 無聽牌**(앱 축어). 🔴 combo draw = **組合聽牌**(앱 축어) — 코퍼스 複合聽牌 4 : 組合聽牌 2 미결(`translation-terms-zh-hant.md` 말미)은 기존 3편을 안 열고, 시리즈는 앱 축어를 따른다.
7. **底池**(코퍼스 727 : 彩池 23) · **籌碼量**(앱 · effective stack = 有效籌碼量) · **詐唬（bluff）**(코퍼스 164) · **堅果** · 🔴 **勝率實現（EQR）**(앱 축어 · 간체 权益实现과 다름 · 코퍼스 勝率實現 4) · **勝率（equity）** · **範圍優勢 · 堅果優勢** · **個百分點** · **有利位置（IP）/ 不利位置（OOP）**(코퍼스 67/109) · **盲位對戰**(앱) · **3bet 底池**(앱) · **單加注底池**(앱) · **3bet 方 / 跟注方 / 開池方**(앱 셀렉터) · 🔴 **領先下注（donk bet）**(대만 SERP 다수 · 간체 领打 금지) · **過牌加注（check-raise）** · **兩極化範圍**(코퍼스 3bet 글 15회) · 🔴 **阻擋牌（blocker）**(코퍼스 44 · 간체 阻断牌 금지) · 🔴 **籌碼與底池比（SPR）→ SPR**(대만 threads·andypoker) · **最小防守頻率（MDF）→ MDF** · **棄牌權益（fold equity）**(앱 축어) · **EV (bb)**(표 헤더 축어).
8. **문체** = 「你」체(코퍼스 你 2949 : 您 0) · 🔴 **따옴표 「」**(코퍼스 809 : “” 0 — 간체 “” 규칙과 반대) · 짧은 문장 · 결론 먼저 · 대만 관용(五五開 24 · 個百分點) · 전각 문장부호 · 영어 원어 첫 등장 병기 · **번체자만**(간체 혼입 0 — 게이트 `check:cjk` + 구조 게이트 badChars).

## 5. 카니발 판정 (2026-09-03 · zh-hant 45편 전수 grep — title·seoTitle·tags·H2)

| 축 | 소유 글 | 13편의 대응 |
|---|---|---|
| c-bet 헤드(태그 10종 전부 · H2 11개) | `holdem-continuation-bet` | ①②⑧⑨⑪은 롱테일·문맥만. seoTitle에 「c-bet」 단독 금지 |
| 「GTO」(태그 GTO翻前圖 · H2) | `holdem-starting-hands-chart`(GTO翻前圖) · `holdem-limping`(H2 1) | 프리플랍 GTO 표 금지. 13편은 「德州撲克 gto」 태그 + 포스트플랍 문맥 |
| 「範圍」(태그) | `holdem-3bet` · `holdem-position-play` · `holdem-short-stack` · `holdem-starting-hands-chart` | 전부 프리플랍 범위 축 — 13편은 「翻牌後 範圍」 문맥으로 가른다 |
| 「暗三條」(태그·H2) | `holdem-drawing-odds` · `holdem-implied-odds` | 정의·확률 H2 금지 · 링크로 넘김. ⑥은 «6-6-3에서 갈리는 법» |
| 「兩極化」(태그·H2 「線性範圍 vs 兩極化範圍」) | `holdem-3bet` | ⑧⑨⑩은 **플랍** 국면. 프리플랍 3bet 표 금지 · 링크 |
| 「阻擋牌」(태그·H2) | `holdem-card-counting` | ⑬은 응용 층(A 阻擋牌 88 vs 66 組合) |
| 「棄牌權益」(태그·H2) | `holdem-equity` | 공통 개념어 — 정의는 링크, 수치는 각 편 |
| 「牌面」(태그·H2) | `holdem-continuation-bet` · `holdem-reading-the-board` | 텍스처 정의는 링크. 13편은 특정 보드 수치 |
| 「盲」(H2 8편) | blind-meaning · positions · position-play … | ⑪은 «開池方이 OOP» 축 · 「盲位對戰」은 소유자 0 |
| **SPR · 過牌加注 · 領先下注 · 下注尺寸 · 超對 · 勝率實現 · 盲位對戰 · 解算器** | 🟢 **소유자 0**(45편 전수) | **13편이 가져간다** |
| `gto poker` · `poker solver` · `德州撲克 gto` · `翻前範圍表` · `勝率計算器` | `/zh-hant/solver` 랜딩 | 13편은 허브 링크로 모은다(13×13 금지 — `lib/gto-series.ts`) |

🪶 zh-hant 코퍼스에 solver/解算器 «언급»은 11편 26곳이지만 어느 글도 조준축(제목·태그)으로 갖고 있지 않다(zh와 동형).

## 6. 재현

```
# 볼륨 — node _dfs-vol.mjs (REST · Basic auth · .env.local) · keywords_data/google_ads/search_volume/live · location_code 2158·2344 · 🔴 language_code 생략 · CJK \uXXXX 이스케이프
# SERP — node _dfs-serp.mjs "<쿼리>" … · serp/google/organic/live/advanced · location 2158 · language_code zh-TW · mobile/android · depth 10 · 태스크 1개씩
# 자동완성 — node _ac.mjs "<시드>" … · suggestqueries.google.com/complete/search?client=firefox&hl=zh-TW&gl=TW
# (셋 다 임시 스크립트 — 회차 종료 시 삭제. 원자료 JSON은 .solver-captures/에 남긴다)
```
