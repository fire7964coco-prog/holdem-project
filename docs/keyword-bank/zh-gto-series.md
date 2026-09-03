# 키워드 뱅크 — 간체 중국어 GTO 솔버 시리즈 13편 (`/zh/blog/<slug>` · 번역+5필드용 «키워드 팩»)

> 실측일 **2026-09-03**. 도구 = **라쿠 `search-volume-history`**(Chinese (Simplified) + **Singapore** / + **Malaysia** · 24개월 · 98종 × 2 = 30크레딧 · requestId 1264312·1264313) +
> **DataForSEO SERP**(google 모바일 · SG 2702 · `zh-CN` · 12쿼리 + PAA — live 엔드포인트는 **한 번에 태스크 1개**만 받는다, 배열로 보내면 2번째부터 «You can set only one task at a time») +
> 구글 자동완성 직접(`hl=zh-CN` · `gl=SG`·`MY` · 46시드). 랜딩 `/zh/solver`의 뱅크는 `zh-gto-solver.md`(헤드텀 `gto poker` 170/210 · `poker solver` 40 · `gto solver` 30은 **랜딩 소유**).
> 자사 카니발 = `lib/posts-zh/` 발행 44편 title·seoTitle·tags·H2 전수 grep.
> ⚠ **DataForSEO Labs `keyword_suggestions`는 SG + `zh-CN`에서 빈 배열**을 돌려준다(Ok. 상태인데 items 0) — 이 조합은 «측정 불가»가 아니라 «데이터 없음»이다. 발굴은 자동완성으로 대체했다.
>
> 🔴 **읽는 법**: 이 팩은 «번역 + 5필드»(스펙 §4-A-3)의 5필드(seoTitle·desc·H2·FAQ 선택·내부링크) + 여섯째 «본문 용어 표기»를 정하는 근거다.
> **수치·논거·구조는 EN 정본 그대로**이고 여기 적힌 것은 «어떤 중국어로 부르나»뿐이다. 볼륨 0이라도 개념어는 본문에 쓴다 — 「제목·H2 조준」만 볼륨으로 가른다.
> 🔴 볼륨은 «지역»별이지 «언어»별이 아니다(`rakko-playbook.md` 운영규칙 ⑤). 영어 문자열(`spr poker` 등)의 볼륨은 그 지역 전체다. **간체 본토 구글 데이터는 없다** — SG·MY는 참고치이고 상대 비교로만 쓴다(`zh-tag-volumes.md` 머리와 동일).

## 0. 한 줄 결론

**es와 정확히 같은 지형이다 — 중국어 서술형 표기는 라쿠에서 전부 null, 영어 술어만 10~20이 잡힌다.**
살아 있는 것은 **`c-bet`/`cbet`(SG 20 · MY 10) · `spr poker`(SG 20 · MY 10)** 둘뿐이고, 나머지 개념어(`check raise poker` · `donk bet` · `set vs trips` · `blockers poker` · `polarized range poker` · `overpair poker` · `bet sizing poker` · `3bet pot` · `monotone board poker` · `range advantage poker` · `equity realization poker` · `fold equity poker` · `top pair poker` · `blind vs blind poker` · `dry board poker` · `paired board poker`)는 **전부 10**이다.
🔴 **중국어 문자열(`德州扑克 范围优势` · `干牌面` · `过牌加注` · `阻断牌` · `盲注战` · `权益实现` · `下注尺寸` · `3bet 底池` · `暗三条 明三条` …)은 98종 중 `德州扑克 范围`(SG 10·MY 10) 하나만 빼고 전부 null**이다.
그런데 **구글 자동완성은 산다** — `德州扑克 范围优势` · `德州扑克 超对` · `德州扑克 暗三条` · `德州扑克 过牌加注` · `德州扑克 check raise` · `德州扑克 donk意思` · `德州扑克spr` · `德扑 spr` · `德扑范围表` · `什么是c bet` · `set trips poker` · `trips vs set`(SG·MY 동일). 자동완성이 사는데 볼륨이 null이면 «KWP 버킷 아래»다(`rakko-playbook.md` 6-3) — **검색 표면(seoTitle·tags)은 「德州扑克 + 영어 술어」로 앵커하고, 본문 표기는 앱·코퍼스 중국어를 따르며, 훅은 숫자**로 쓴다(ja·es와 동일한 처방).
「GTO」·「solver」는 제목·H2에서 반드시 `德州扑克`/`扑克`와 붙인다(자동차·아니메·수학 솔버 오염 — `zh-gto-solver.md` §1-①②).

## 1. 실측 볼륨 (라쿠 · 24개월 연평균 · Chinese (Simplified))

| 키워드 | **SG** | **MY** | 편 | 메모 |
|---|---:|---:|---|---|
| `gto poker` / `poker gto` | 170 | 210 | — | 🔴 **랜딩 소유**(`zh-gto-solver.md`). 13편은 본문 언급 + 허브 링크만 |
| `poker solver` · `gto solver` | 40 · 30 | 20 · — | — | 🔴 랜딩 소유. 본문 용어로는 자유 |
| **`c-bet` / `cbet` / `cbet poker`** | **20 / 20 / 10** | 10 / 10 / 10 | — | 🔴 **`zh/holdem-continuation-bet` 소유**(태그 10개 전부 c-bet). ①②⑧⑨⑪은 롱테일·문맥만 · 제목에 「c-bet」 단독 금지. SG 12개월 −33%(하락 추세) |
| **`spr poker`** | **20** | 10 | **⑧** | ✅ **시리즈 최대 축 · 자사 0편.** 자동완성 `德州扑克spr`·`德扑 spr`·`什么是spr` 실재. SERP(§2)는 전부 «SPR이란» 정의 글 |
| `德州扑克 范围` | 10 | 10 | 공통 | 유일하게 볼륨이 잡힌 중국어 문자열. 랜딩 «翻前范围表»와 갈리는 «翻牌后 범위» 문맥으로만. 자동완성 `德扑范围表`는 프리플랍 표(랜딩 소유) |
| **`check raise poker`** | 10 | 10 | **⑦** | ✅ 자동완성 `德州扑克 check raise`·`德州扑克 过牌加注` 둘 다 실재. 자사 betting-actions가 정의 층(태그 없음 · 본문 过牌加注 10회) → ⑦은 **«6-5-2에서 어떻게 설계하나» 응용 층** |
| **`donk bet` / `donk bet poker`** | 10 / 10 | 10 / 10 | **④** | ✅ 자동완성 `德州扑克 donk意思` = «뜻» 수요. 자사 glossary 정의 1행 · H2 0. 앱 축어는 **领打（donk bet）** |
| **`set vs trips`** | 10 | 10 | **⑥** | ✅ 자동완성 `set trips poker`·`trips vs set`·`德州扑克 暗三条`. 정의는 glossary·hand-rankings 소유(暗三 147회) → ⑥은 «6-6-3에서 둘이 어떻게 갈리나». SERP는 영어 사이트 지배 + moshike·legendpoker 중문 정의 글 |
| **`blockers poker`** | 10 | 10 | **⑬** | ✅ card-counting 태그 「阻挡牌 blocker」 = 정의 층 → ⑬은 «A 阻断牌가 이 보드에서» 응용 층. 🔴 코퍼스는 **阻断牌 3 : 阻挡牌 1(태그)** — 시리즈는 SERP 다수파 **阻断牌**(moshike·知乎·andypoker 전부 阻断/阻斷) |
| `polarized range poker` | 10 | 10 | **⑩** | ✅ `zh/holdem-3bet` H2 「线性 vs 极化的 3bet 范围」가 **프리플랍** 정의 소유(极化 21회) → ⑩은 «플랍 8-5-2에서 极化된 3bet 方이 어떻게 치나» |
| `overpair poker` | 10 | 10 | ⑩ | 코퍼스 超对 31회 · 앱 라벨 「超对」 → **超对** 그대로(영어 병기 불필요) |
| `bet sizing poker` | 10 | 10 | **⑨** | ✅ 코퍼스 下注尺寸 11회 · 앱 「④ 下注尺寸」. SERP는 知乎·monsterstack 일반론 |
| `3bet pot` | 10 | 10 | ⑧⑨⑩ | 코퍼스 «3bet 底池» 2회 · 앱 그룹 라벨 「3bet 底池」 → **3bet 底池**(하이픈 없음 · 앱 축어) |
| `monotone board poker` | 10 | 10 | ⑤ | 앱 「单色牌面（3 张同花）」. SERP `德州扑克 单色牌面`은 족보 위키가 지배(의도 오염) → ⑤ 제목은 «3 张同花» 병기로 의도 고정 |
| `range advantage poker` | 10 | 10 | ①③ | 자동완성 `德州扑克 范围优势` 실재 · 코퍼스 范围优势 6회 · 앱 note 「范围优势的教科书」. SERP 1위 bilibili 「范围优势与坚果优势」 |
| `equity realization poker` | 10 | 10 | 공통 | 앱 note 「权益实现」 → **权益实现（EQR）**. 🔴 코퍼스 equity 글은 «胜率兑现»을 쓴다 — 시리즈는 **앱 축어 우선**, 링크 앵커에서만 그 글 표기 허용 |
| `fold equity poker` | 10 | 10 | ⑩ | 앱 note ⑩ 「fold equity（弃牌率）」 축어 → **弃牌率（fold equity）** |
| `top pair poker` | 10 | 10 | ①② | 앱 라벨 「顶对」 · 코퍼스 54회 |
| `blind vs blind poker` | 10 | 10 | ⑪⑫⑬ | 앱 그룹 라벨 「盲位对战」(코퍼스 0 · «盲注战»도 0) → **盲位对战**(앱 축어) + 태그 「blind vs blind」 |
| `dry board poker` · `paired board poker` | 10 | 10 | ①②⑥⑬ | 앱 「干燥的 A 高牌面」 · 「对子牌面」. 코퍼스 干牌面 14 · 干燥 10 |
| 중국어 서술형 나머지 96종 | null | null | — | 아래 ↓ |

### 🔴 라쿠 null (제목·H2 조준 금지 · 본문 개념어로는 쓴다)
`德州扑克 c-bet/持续下注` · `持续下注` · `德州扑克 范围优势` · `范围优势` · `德州扑克 干牌面/湿牌面/干湿牌面/单色牌面/对子牌面/彩虹牌面/牌面分析/A高牌面/K高牌面` · `德州扑克 顶对/超对/暗三条` · `暗三条 明三条` · `set 和 trips 区别` ·
`德州扑克 过牌加注/check raise/donk bet/领打` · `过牌加注` · `德州扑克 spr` · `spr 是什么 扑克` · `德州扑克 3bet底池` · `3bet 底池` · `德州扑克 下注尺寸/bet sizing/超池下注` · `下注尺寸` · `德州扑克 极化范围` · `极化范围` ·
`德州扑克 阻断牌/blocker` · `阻断牌` · `德州扑克 盲注战/sb vs bb` · `盲注战` · `德州扑克 权益实现/equity realization` · `权益实现` · `德州扑克 翻牌策略/翻牌 打法/翻牌后/gto 翻牌` · `翻牌后 策略` · `gto 翻牌` · `德州扑克 坚果优势/弃牌率/fold equity/听牌 打法/mdf/有位置 无位置/oop/诈唬 频率/价值下注/求解器 翻牌/solver 翻牌`.

🪶 「null」은 «수요 없음»이 아니라 «구글 KWP 버킷 아래»다. 자동완성에 살아 있고(§0) SERP에는 이 표현으로 쓴 중문 글이 실재한다(§2). **본문 표기는 앱·코퍼스를 따르고, 검색 표면(seoTitle·tags)만 「德州扑克 + 영어 술어」로 앵커한다.**

## 2. SERP 실측 (DataForSEO · google 모바일 · SG · zh-CN · 2026-09-03) — «이길 자리»

| 쿼리 | top-3 | PAA | 판정 |
|---|---|---|---|
| `德州扑克 c-bet` | taiwanrounders(번체) · moshike · threads(번체) | — | 🔴 자사 cbet 글 자리 — 13편 조준 금지. 🪶 **SG 간체 SERP에 번체 사이트가 1·3·4·5위**(taiwanrounders·threads·vocus·instagram) — 간체 독자에게 번체 글이 그대로 노출되는 시장이다 |
| `德州扑克 范围优势` | bilibili 「范围优势与坚果优势」 · 知乎 「你真的了解范围优势吗」 · medium(번체) | — | 🟢 전부 **개념 정의**. «A-7-2에서 BB가 98.2% 过牌하는 수치»를 가진 글 0개 → ①③ |
| `德州扑克 spr` | 知乎 「SPR的基本要素和运用」 · moshike 「SPR是什么意思」 · threads(번체) | — | 🟢 **전부 «SPR이란»** — «SPR 4.0에서 100% 벳 · 사이즈는 SPR이 아니라 范围 모양이 정한다»는 각도 0개. ⑧이 먹는다 |
| `德州扑克 check raise` | taiwanrounders 「Check Raise (過牌加注) 教學」 · wikipedia · threads | — | 🟢 정의·일반론. **재솔브 수치(加注 14.9%·跟注 65.6%·弃牌 19.5%)를 가진 글 0개** → ⑦ |
| `德州扑克 donk` | threads 「Donk（領先下注）」 · 知乎 「dunk什么意思」 · moshike | — | 🟢 «뜻» 수요 지배(知乎 질문이 «dunk» 오타로 잡힐 만큼 초보 층). «领打가 맞는 유일한 SRP 보드 + 23.7%» 각도 0개 → ④. 🪶 번체권은 **領先下注**, 간체 앱은 **领打（donk bet）** |
| `set trips poker` | reddit · upswing · pokerchipforum(전부 영어) | 「What is a trip in poker?」·「How often do you flop a set?」·「Are trips better than a straight?」·「Does trip or a flush win?」 | 🟡 **영어 사이트 지배 · PAA도 영어 족보 질문** → ⑥은 정의를 열지 말고(hand-rankings 소유) «6-6-3에서 暗三条/明三条가 어떻게 갈리나» |
| `德州扑克 3bet 底池` | 知乎 「解析无限德州扑克 3bet底池」 · moshike 「单一加注底池 VS 3bet底池」 · taiwanrounders 용어집 | — | 🟢 moshike가 정확히 «SRP vs 3bet 底池 전략 차이»를 쓴다 — 우리 ⑧⑨⑩은 **보드별 수치**로 가른다 |
| `德州扑克 阻断牌` | moshike 「阻断牌是什么意思」 · 知乎 「如何利用阻断牌」 · andypoker(번체) | — | 🟡 정의 층 포화 → ⑬은 응용(A 阻断牌 88 vs 66 组合) |
| `德州扑克 下注尺寸` | 知乎 「动态调整下注尺寸」 · monsterstack(번체) · 维基 | — | 🟢 일반론뿐. «98.4%가 같은 사이즈»·«두 사이즈 병존»의 솔버 수치 0개 → ⑨ |
| `德州扑克 暗三条 明三条` | reddit · legendpoker 「明三条怎么打」 · pokertaiwan | — | 🟡 정의·확률(moshike 「翻牌中暗三的概率为11%」). ⑥은 페어 보드 국면만 |
| `德州扑克 翻牌后 策略` | 知乎 「用184种Flop翻牌面学习GTO策略」 · reddit · 巴哈(번체) | — | 🟢 知乎 1위가 «184 플랍 GTO 학습» = 우리 시리즈와 같은 계열의 유일한 경쟁자. 단 특정 보드 해부가 아니라 개론 |
| `德州扑克 单色牌面` | 维基 扑克牌型 · 网易 규칙 · taiwanrounders 규칙 | — | 🔴 **의도 오염 — 족보·규칙 페이지가 지배**(知乎 「单色翻牌面的五个专家级策略」는 5위). ⑤ seoTitle은 「3 张同花」·「同花牌面」을 함께 써서 «텍스처» 의도를 고정 |

🔴 **PAA는 12쿼리 중 `set trips poker`(영어) 하나에만 붙었다** — 간체 쿼리에는 PAA 자체가 없다. FAQ 문항은 자동완성·SERP 제목의 질문형(「…是什么意思？」「…怎么打？」)에서 가져온다.
🪶 **간체권 경쟁자 지형**: moshike.com(摩十客 · 정의 글 공장) · zhuanlan.zhihu.com(知乎 전문 · 개론) · legendpoker.cn · bilibili(영상) · dzpkz.com + **번체 사이트가 SG SERP에 그대로 뜬다**(taiwanrounders · andypoker · natural8 · pokerfans.jp 중문판 · threads/vocus/instagram). **전부 «개념 정의» 글이고 솔버 출력 수치로 한 보드를 해부한 글은 0개다** — 이 시리즈의 자리는 정의가 아니라 **수치**다.

## 3. 편별 배분 (5필드 근거)

| 편 | slug | 제목·H2 축(볼륨) | FAQ 흡수 | 내부링크(zh 실재 — EN 1:1) |
|---|---|---|---|---|
| ① | a-high-board-cbet | 「范围优势」(자동완성) · 「顶对」 10 · 「干燥的 A 高牌面」(앱) · 훅 = **98.2% 过牌** | 「什么是 range check？」 · 「什么是干牌面？」 | holdem-continuation-bet · holdem-equity · holdem-position-play |
| ② | k-high-board-cbet | 「K 高牌面」(앱) · 훅 = **99.8% 过牌** · 「什么时候不该 c-bet？」(cbet 소유 롱테일만) | 「A 高和 K 高，哪个对 BB 更糟？」 | holdem-position-play · ① |
| ③ | broadway-board-strategy | 「范围优势 vs 坚果优势」(SERP 1위 bilibili 제목 그대로의 축) · 훅 = **EQR 77.9%** | 「范围优势和坚果优势有什么区别？」 | holdem-continuation-bet · holdem-drawing-odds · holdem-position-play |
| ④ | donk-bet-strategy | **「donk bet」 10 · 「领打（donk bet）」(앱)** · 훅 = **23.7%** | 「donk bet 是什么意思？」 직답 | holdem-continuation-bet · holdem-drawing-odds |
| ⑤ | monotone-board-strategy | 「单色牌面（3 张同花）」(앱) · 훅 = 「连成了同花都有 69.9% 只过牌」 | 「什么是单色牌面？」 | holdem-drawing-odds · holdem-implied-odds |
| ⑥ | paired-board-strategy | **「set vs trips」 10 · 「暗三条/明三条」(앱 라벨)** · 「对子牌面」(앱) | 「暗三条和明三条哪个更强？」 | holdem-3bet · holdem-continuation-bet · holdem-hand-rankings(정의 링크) · holdem-pot-odds |
| ⑦ | low-board-check-raise | **「check raise」 10 · 「过牌加注」** · 「什么时候该过牌加注？」 | 「什么是过牌加注？」·「过牌加注算不礼貌吗？」 | holdem-betting-actions · holdem-continuation-bet |
| ⑧ | 3bet-pot-cbet | **「SPR」 20/10 · 「spr 是什么」** · 「3bet 底池」(앱) | 「什么是 SPR？」 직답 · 「SPR 怎么算？」 | holdem-3bet · holdem-position-play |
| ⑨ | 3bet-pot-bet-sizing | **「bet sizing」 10 · 「下注尺寸」(앱)** · 훅 = **98.4% 同一个尺寸** | 「下注尺寸怎么选？」·「什么是超池下注（overbet）？」 | holdem-continuation-bet · holdem-drawing-odds · holdem-position-play · holdem-pot-odds |
| ⑩ | 3bet-pot-low-board | 「极化范围」 10 · 「超对」 10 · 「弃牌率（fold equity）」 10 | 「什么是极化范围？」 | holdem-3bet · holdem-strategy · ⑧ |
| ⑪ | blind-battle-cbet | 「盲位对战」(앱) · 「blind vs blind」 10 · 훅 = **67.4%** | 「SB 和 BB，谁占优？」 | holdem-continuation-bet · holdem-position-play |
| ⑫ | blind-battle-connected-board | 「连张牌面」(앱 «连张») · 「牌面结构」 보조 · 훅 = **9.6%** | 「静态牌面 vs 动态牌面？」 | 외부 0 — 시리즈 내부(⑪ 등)만 |
| ⑬ | ace-paired-board-strategy | **「blockers」 10**(태그만) · 「A 对子牌面」(앱) · 🔴 EN 본문이 블로커를 정면으로 안 다룬다(카드 제거 논리는 FAQ 3에 암시) — 「阻断牌」 H2·FAQ는 EN에 문장이 생겨야 열 수 있다(배치 C 판정) | 「什么是阻断牌？」는 **보류**(EN 부재) | 외부 0 — 시리즈 내부(⑥ 등)만 |
| 공통 | — | 「权益实现（EQR）」 · 「翻牌后」 · 「德州扑克 gto」 | 「什么是权益实现？」 | /zh/solver(허브) · holdem-equity |

🔴 **EN 내부링크 구조와 1:1**([[translation-link-structure-equals-en]]) — 대상 slug를 `/zh/blog/`로 바꾸되 **개수·readnext·thumb까지 동일**. 🔴 위 열은 **EN 파일 grep 실측(2026-09-03 · 시리즈 내부 링크 제외)**이다 — 초판이 es 팩을 옮겨 적어 ⑤⑦ 등이 틀렸던 것을 배치 B 렌즈가 잡았다. 팩의 링크 열은 «후보»가 아니라 «EN 실측»이어야 한다.
✅ **EN 13편이 거는 외부 slug 10종(continuation-bet · position-play · drawing-odds · 3bet · pot-odds · hand-rankings · strategy · implied-odds · equity · betting-actions)은 전부 `lib/posts-zh/`에 실재한다**(2026-09-03 파일 실존 확인 — outs·flush-vs-straight·reading-the-board·card-counting·blind-meaning·glossary도 실재) → 대체 링크 불필요. 시리즈 내부 링크 13종은 이번 회차에 함께 생긴다.

## 4. 표기 판정 (되돌리지 마라)

1. **set / trips / 三条** — `translation-terms-zh.md` §1-D 정본: **暗三条(set) / 明三条(trips)**. 앱 등급 라벨은 **「暗三条/明三条」**(한 행에 슬래시로 합쳐 표시) → 표에서 앱 라벨을 인용할 땐 「暗三条/明三条」 축어 + 언페어 보드(①②③④⑤⑦⑧⑨⑩⑪⑫)면 EN 각주와 같은 «这里都是暗三条» 각주. 페어 보드(⑥⑬)에서만 明三条가 실재한다. 산문에서는 첫 1회 「暗三条（set）」「明三条（trips）」 병기 후 중국어만.
2. **「GTO」 = 제목·H1·H2에서 반드시 `德州扑克`/`扑克`와 결합**(`zh-gto-solver.md` §1-①). 「solver」 = 산문 「求解器」(앱 축어 「运行求解器」·「GTO 求解器」) · seoTitle 앞머리 금지(랜딩 카니발). 태그는 「德州扑克 gto」.
3. **c-bet 표기** = 코퍼스 정본 「持续下注（c-bet）」 첫 1회 → 이후 「c-bet」(코퍼스 138 : 23). 제목에 「c-bet」 단독 금지(cbet 글 소유).
4. **board = 牌面**(앱·코퍼스 404회 · 「公共牌」은 앱 입력 UI 「③ 公共牌」에서만). 텍스처 어휘 = 앱 축어: **干燥 · 单色（3 张同花） · 对子牌面 · 彩虹 · 双色 · 连张 · 多变**(「湿牌面」은 산문 대비어로만 · 「彩虹面」「双色面」 축약 금지). «broadway»는 앱 그대로 라틴 「broadway」.
5. **카드 표기** = 산문·표·앱 축어 전부 **T**(앱 헤더 `Q♥T♥7♠` · 「K 高带 T 的牌面」 · 코퍼스 레인지 표기 T9s/TT) — 🔴 **es의 «10♠» 규칙과 반대다. zh 코퍼스는 10을 안 쓴다.** 수치 = 언어 불변(반각 % · 소수점 `.` · `bb` · 천단위 `,` — `translation-terms-zh.md` §3 「점·콤마 반전 금지」).
6. **顶对**(앱) · **超对**(앱 · overpair 병기 불필요) · **次顶对**(앱 = second pair) · **弱对**(앱 = weak pair) · **低对**(앱 = underpair) · **A 高牌 / K 高牌**(앱 · 띄어쓰기 포함) · **未成牌**(앱 = no made hand) · **两对** · **顺子** · **同花** · **葫芦** · **四条** · **听牌**(=draw) · **组合听牌 · 同花听牌 · 两头顺听牌(OESD) · 卡顺听牌(gutshot) · 后门同花听牌 · 无听牌**(앱 축어 그대로).
7. **底池**(코퍼스 848 : 彩池 0) · **筹码量**(앱 · effective stack = 有效筹码量) · **诈唬**(코퍼스 193 · 앱 「诈唬（bluff）」) · **坚果**(코퍼스 82) · **权益实现（EQR）**(앱 note) · **胜率**(equity 산문 · 코퍼스 290 : 权益 40 — 앱 nav 「胜率计算器 Equity」) · **范围优势 · 坚果优势** · **百分点**(%p — 「差 5.2 个百分点」) · **有位置（IP）/ 无位置（OOP）**(코퍼스 76/50) · **盲位对战**(앱) · **3bet 底池**(앱 · 하이픈 없음) · **单加注底池**(앱 = single raised pot) · **3bet 方 / 跟注方 / 开池方**(앱 셀렉터 축어) · **持续下注（c-bet）→ c-bet** · **过牌加注（check-raise）→ 过牌加注** · **领打（donk bet）** · **极化范围** · **阻断牌（blocker）** · **SPR** · **MDF** · **EV**.
8. **문체** = 「你」체 · 짧은 문장 · 동사 선두(`translation-terms-zh.md` §6) · 신마 화교 독자라 **첫 등장 영어 원어 괄호 병기**(§0.5 ①) · 간체자 철저(繁體 혼입 금지 — SG SERP에 번체가 섞여 있어도 우리는 간체) · 전각 문장부호（，。：；“”） · 「进行下注」식 기계번역 금지.

## 5. 카니발 판정 (2026-09-03 · zh 44편 전수)

| 축 | 소유 글 | 13편의 대응 |
|---|---|---|
| c-bet 헤드(태그 10종 전부) | `holdem-continuation-bet` | ①②⑧⑨⑪은 롱테일·문맥만. seoTitle에 「c-bet」 단독 금지 |
| 暗三条·翻牌成暗三条概率·set mining | `holdem-hand-rankings`·`holdem-drawing-odds`·`holdem-implied-odds` | 정의·확률 H2 금지 · 링크로 넘김. ⑥은 «6-6-3에서 갈리는 법» |
| 「线性 vs 极化的 3bet 范围」·「3bet 尺寸」·「3bet 范围」 | `holdem-3bet` | ⑧⑨⑩은 **플랍** 국면. 프리플랍 3bet 표 금지 · 링크 |
| 「阻挡牌 blocker」·「德州扑克 算牌」 | `holdem-card-counting` | ⑬은 응용 층(A 阻断牌 88 vs 66 组合) |
| 「扑克 equity 是什么」·「弃牌率」·「胜率兑现」 | `holdem-equity` | 공통 개념어 — 정의는 링크, 수치는 각 편. 🔴 그 글의 «胜率兑现»을 시리즈로 끌어오지 마라(앱 축어 权益实现) |
| 「德州扑克盲注是什么」·「大盲注」 | `holdem-blind-meaning` | ⑪은 «开池方이 OOP» 축 |
| 「位置如何影响 c-bet 频率」 H2 | `holdem-position-play` | ①②는 그 H2를 재론하지 않는다 — 링크 |
| 「gto poker」·「poker solver」·「翻前范围表」 | `/zh/solver` 랜딩 | 13편은 허브 링크로 모은다(13×13 금지 — `lib/gto-series.ts`) |

## 6. 재현

```
# 라쿠 (MCP) — location Singapore / Malaysia · language Chinese (Simplified) · 24개월 · 98종
# DFS SERP — node _zh-dfs2.mjs 방식(REST · Basic auth · .env.local) · location_code 2702 · language_code zh-CN · device mobile · depth 10 · 태스크 1개씩 순차
# 자동완성 — suggestqueries.google.com/complete/search?client=firefox&hl=zh-CN&gl=SG|MY&q=<seed>
```
