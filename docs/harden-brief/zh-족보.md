# 🇨🇳 zh 경화 회차 2 — 족보 클러스터 6편 브리프

> 작성 2026-09-07 · A 구간 산출 · 규격 = `docs/hardening-protocol.md` §3-⑥
> B 구간은 **이 파일 하나만** 읽는다. EN 원문은 축어로 넣었다(EN 파일을 다시 열지 마라).
> 대상 6편: holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules ·
> holdem-split-pot-rules · holdem-reading-the-board

## 0. 이 회차의 실측 요약

### 0-A. 드리프트 — 게이트 vs diff 실물 (회차 1 방법론 그대로)

`check:drift`는 이 클러스터에서 **2편**(kicker 07-18<08-26 · tiebreak 07-19<08-30)을 찍었다. diff 실물:

| 편 | 게이트 | **diff 실물 판정** | 근거 |
|---|---|---|---|
| holdem-hand-rankings | ✅ | **드리프트 0** | EN 08-12 이후 변경 = desc 축약(EN 전용 메타) · 이미지 alt K-K-K-A-4→A-2(zh L202 이미 A-2 ✅) · readnext 카드 제거(EN 전용) |
| holdem-flush-vs-straight | ✅ | **드리프트 0** | EN 08-12 이후 = HSL 토큰 + 카드 제거뿐 |
| holdem-kicker | 🔴 | **드리프트 1자리(작음)** — 나머지 08-26 변경 3건은 **이미 반영** | §3 |
| holdem-tiebreak-rules | 🔴 | **드리프트 큼 — 신설 H2 1개 + FAQ 재작성 5개 + 표 1행 + 문단 1개 + 태그** | §4 (이 회차 최대 작업) |
| holdem-split-pot-rules | ✅ | **드리프트 0** (09-06 `4522532a` 동일 커밋) | — |
| holdem-reading-the-board | ✅ | **드리프트 0** | EN 08-12·08-27 변경 4건 전부 zh에 있음: L176「两张底牌都参与」· L269「同花要五张」· L294 WSOP 75/TDA 19 · L322 三张同花色 경고 |

### 0-B. 직답 블록 현황 — 이 회차의 본체는 «라벨 통일 + 블록 부재 3편»

| 편 | `快速回答` | 현황 |
|---|---:|---|
| hand-rankings | 0 | H2 직후 직답 없음(첫 문장이 직답 역할인 절 2개) |
| flush-vs-straight | 1(최상단) | H2 직후 블록 없음. 첫 문장 직답형 절 2개 |
| kicker | 0 | 🟢 **EN식 굵은 선도문장이 9개 H2 전부에 있다** → 블록으로 **전환**(복제 금지) |
| tiebreak | 0 | 굵은 선도문장 7개 → 전환 |
| split-pot | 0(+`快速答案` 1) | 🔴 비정본 라벨 L26 → `快速回答`. H2 직후 블록 없음 |
| reading-the-board | 0(+`快速答案` 1) | 🔴 비정본 라벨 L44 → `快速回答`. H2 직후 블록 없음 |

### 0-C. 규격 (회차 1 확정 + voice §4·§5)
- 라벨 = `> **快速回答**` 하나. 형식 = 라벨 줄 / 내용 줄 / 빈 줄. **중문 60~110자(한자 수)**.
- 🔴 **선복사 금지**(voice §5): 본문 첫 문장을 그대로 올리지 않는다. 그 절이 «증명하는 결론»을 새로 쓴다.
  **굵은 선도문장이 이미 있는 절은 그 문장을 블록으로 «옮기고» 본문에서는 뺀다**(둘 다 두면 25자 동일 복제가 난다).
- 본문이 1~2문단뿐인 절·전환 문단 H2·경험담 펀치라인 절에는 **넣지 않는다**.
- 첫 문장이 H2의 검색어를 되받아야 한다(GEO). 「这篇…」「下方…」 지시어 시작 금지.
- 🔴 `tldr`에 마크다운 금지(`**` 글자로 나간다). 백틱 금지. 신마 병기(§0.5-1) 첫 등장 확인.
- H2 형태 = **현지 실검색 형태소**(§1 키워드 표). EN 「Who wins if…」 직역 금지 → zh는 **「都是X怎么比大小？」/「X跟Y谁大？」**(dpskill 제목·자동완성 실측).

---

## 1. 키워드 실측 (2026-09-07 · 구글 자동완성 hl=zh-CN gl=SG/MY **47시드 · 두 지역 결과 완전 동일** · 라쿠 question-search 「牌型」「同花」「扑克」)

전량 수확 = `docs/keyword-bank/zh-hand-rankings.md`. 배정만 여기 적는다.

| 실측 키워드 | 출처 | 배정 글 | 자리 |
|---|---|---|---|
| **德州扑克牌型大小 · 大小顺序 · 牌型概率 · 牌型胜率** | 자동완성 | hand-rankings | seoTitle 기존 · tags 보강(概率) |
| **德州扑克 牌型 英文 · 顺子英文 · 三条英文 · 花色 英文** | 자동완성(4건 독립) | hand-rankings | **H3 10종에 영어명 병기**(EN H3가 원래 그렇다 · 신마 §0.5-1) |
| **德州扑克什么牌型最大?** | 라쿠 질문문 | hand-rankings | FAQ Q 축어 교체(L364) |
| **同花顺和四条哪个大?** | 라쿠 질문문 | hand-rankings | FAQ Q 축어 교체(L372) |
| 葫芦跟四条谁比较大 · 顺子跟三条 · 三条 两对 · 两对 三条 | 자동완성 | hand-rankings | 对决表 H2(L232) |
| **德州扑克 同花 顺子 谁大 · 顺子跟同花谁大** | 자동완성 | flush-vs-straight | tags(seoTitle 「同花和顺子哪个大」와 동일 의도 — 어순 변형은 몰아준다) |
| 葫芦跟同花谁大 · 同花赢葫芦 · 同花比葫芦大 | 자동완성 | flush-vs-straight | 기존 L133 절 + tag `同花对葫芦` 유지. **hand-rankings 对决표 H2에는 이 축을 쓰지 않는다** |
| 同花怎么比 · 同花顺大小 | 자동완성 | flush-vs-straight | H2 L156·L181 이미 대응 |
| **都是顺子/两对/三条/葫芦/同花/一对怎么比大小** (顺子比大小·两对怎么比·葫芦比大小·三条比大小·一对比大小·葫芦对葫芦·葫芦一样·两对一样) | 자동완성 + dpskill 제목 골격 | **tiebreak-rules** | FAQ Q 전부 이 형태로 교체(§4) |
| **德州扑克高牌怎么比 · 高牌大小** | 자동완성 | tiebreak-rules | FAQ 신설 「都是高牌怎么比大小？」 |
| **德州扑克 平手 · 平手怎么算 · 平手 英文 · 一样大** | 자동완성 | tiebreak-rules | tags + FAQ Q(L265) |
| **德州扑克花色大小** | 자동완성 | tiebreak-rules | **EN 08-30 신설 H2 「Do Suits Matter」의 zh 자리** → hand-rankings는 H3 링크만 |
| 顺子12345 | 자동완성 | tiebreak-rules | FAQ Q(L225) 「顺子 12345（轮子）算顺子吗？」 |
| **顶对顶踢脚（TPTK）** | 현지 경쟁 축(legendpoker·dpskill 각 1편 전담) | kicker | 본문 L93 절 + FAQ 1개 신설(정의만 · 전략 X) |
| 单张大小 | 자동완성 | kicker | tag 기존 `kicker 单张` |
| chop意思 | 자동완성 | split-pot | H2 L41 이미 대응 |
| 坚果意思 · 坚果 | 자동완성 | reading-the-board | FAQ 신설 「德州扑克坚果（nuts）是什么意思？」 |
| 德州扑克 读牌 | 자동완성(단독) | reading-the-board | tags |

### 태그 카니발 판정 (회차 1 §3이 넘긴 「踢脚牌 3파전」)
- `踢脚牌` 태그가 hand-rankings·kicker·tiebreak 3편에 있다. **소유자 = kicker**(seoTitle 「什么是踢脚牌 kicker？」).
  → hand-rankings에서 삭제(→`德州扑克牌型概率`) · tiebreak에서 삭제(→`德州扑克 平手怎么算`).
- `牌型一样谁赢` 축 = **tiebreak 소유**(seoTitle). hand-rankings H2 L170은 「踢脚牌和平局到底怎么算？」로 물음표만 붙이고 이 축 표기를 쓰지 않는다.
- `花色大小` 축 = **tiebreak 소유**(신설 H2). hand-rankings H3 L68은 유지하되 tiebreak 링크를 붙인다.
- `葫芦 vs 同花` 축 = **flush-vs-straight 소유**(L146 예시 절). hand-rankings 对决표 H2는 四条/葫芦·顺子/三条 축만.

### 함정 (채택 금지·판정)
| 키워드 | 판정 |
|---|---|
| 「同花顺是什么意思?」(라쿠 26) · 「同花顺是炒股软件吗?」 | 🔴 **同花顺 = 중국 증권 앱 브랜드**(iFinD). 질문 DB 26점은 주식 의도. 「同花顺」 단독 시드 채택 금지 — 반드시 「德州扑克 同花顺」 |
| 「德州扑克 同花 铁支」「同花顺 铁支」 | 铁支 = 四条의 港台 속칭(terms-zh §2: 대륙 首选 四条 · 铁支 금지). 신마 자동완성에 실재 → **主词 四条 유지 + 「（港台俗称铁支）」 1회 병기**(§0.5-5 俗称 처방) — 채택 아님, 병기 |
| 「同花机率」「同花顺 机率」「皇家同花顺机率」 | 机率 = 대만 표기. 대륙·신마 간체 표준 = 概率. 「ptt」 오염과 같은 대만 자동완성 오염 → 채택 금지, 概率 유지 |
| 「德州扑克 一对a」 | 의도 불명(포켓 AA?) — 금지 |
| 「德州扑克 底牌胜率」 | 스타팅 핸드 승률 = 회차 4 몫 |
| 죽은 시드 | 踢脚牌 · 平局 · 平分 · 读牌 · 打公共牌 · 公共牌 · 牌型 顺序 · 边牌 · 5张/七张 → 자기 자신만 또는 0건. **牌型 축 시드는 「牌型명 + 比/大小/跟…谁大」로 잡아야 확장이 나온다** |

### 현지 상위 글 실측 (Playwright 원문 · §12-B)
| URL | 분량 | 골격 | 판정 |
|---|---:|---|---|
| dpgod.com/teach/15 | 2,061자 | H3 「1.皇家同花顺 … 10.高牌」 명사형 + 「平分底池」「踢脚」 2문단 | FAQ 없음 · 확률 수치 없음 |
| dpgod.com/teach/100 | 2,583자 | 一、牌型顺序(영어 병기) 二、实战应用 | 확률 「皇家同花顺 0.00000154%」(5장 기준 오기 — 우리 0.0032%는 7장) |
| tcy365 dd13555 | 1,073자 | 2017년 명사형 나열 | 죽은 글 |
| dpskill 165 · 191 · 771 · 107 | 1,460~2,773자 | **「都是X怎么比大小？」 한 질문 한 페이지** · 771은 踢脚 정의+사례 · 107 TPTK | 얇은 페이지 다수 → 우리 tiebreak FAQ로 흡수(low-volume-longtail-aggregation) |
| legendpoker 2760 | 3,373자 | 顶对顶踢脚 전략 | kicker 축의 경쟁 = TPTK 용어 |
| tcy365 dd13554 | 939자 | 「规律一~三」 牌面 읽기(2017) | 우리 reading-the-board가 압도 |
| zhihu | — | 로그인 벽 | 판정 불가 |

🔴 판정: **간체 족보 SERP에 FAQ 블록·직답·7장 확률표를 가진 글이 없다**(회차 1 판정 3과 동일). 경쟁 질문형은 dpskill의 「都是X怎么比大小」뿐 → 그 형태소를 tiebreak FAQ가 전부 가져간다.

---

## 2. holdem-hand-rankings — masterUpdated 2026-08-12 · updated 2026-08-12

### 드리프트 0. `masterUpdated` 유지.

### H2 재조준 (현행 4/13 = 31% 🔴 → 목표 70%)
| L | 현행 | → |
|---|---|---|
| 28 | 德州扑克牌型大小：一张表看全 | 德州扑克牌型大小顺序是什么？一张表看全 |
| 58 | 牌点大小：30秒打好基础 | 牌点怎么比大小？30 秒打好基础 |
| 74 | 10种牌型详解 | 德州扑克 10 种牌型各是什么？逐一详解 |
| 170 | 踢脚牌和平局到底怎么算 | 踢脚牌和平局到底怎么算？ |
| 200 | 读牌实战：3道真题 | 读牌实战：3 道真题你能答对几道？ |
| 232 | 大家常争的对决，秒给答案 | 四条跟葫芦谁大？顺子跟三条谁大？常争对决秒答 |
| 250 | 为什么排名是这样的 | 德州扑克牌型为什么是这个大小顺序？ |
| 258 | 1秒读牌流程 | 怎么 1 秒读出牌面？ |
| 274 | 三步记住它 | 怎么三步记住牌型顺序？ |
| 286 | 各玩法的牌型排名 | 其他玩法的牌型排名一样吗？ |
→ 10/13 ≈ **77%** ✅ (FAQ · 务必记住的3件事 · 相关文章 유지)

### H3 영어명 병기 (키워드 「牌型 英文」·「顺子英文」·「三条英文」 흡수 · EN H3 원형 복원)
L76 皇家同花顺（Royal Flush） · L84 同花顺（Straight Flush） · L92 四条（Four of a Kind / Quads，港台俗称铁支） · L100 葫芦（Full House / Boat） · L111 同花（Flush） · L119 顺子（Straight） · L131 三条（Three of a Kind — Trips / Set） · L144 两对（Two Pair） · L152 一对（One Pair） · L160 高牌（High Card）
🔴 「两队」 오타 금지(terms §2). 「满堂红」 금지.

### 직답 블록 — L28(첫 문장 「从最大到最小…」을 블록으로 옮기고 본문에서 뺀다) · L74 · L170 · L232 · L250(첫 문단 압축 대신 결론) · L258 · L286
넣지 않는 곳: L58(2문단 H3 구조) · L200(문제풀이 도입 — 답 선복사 위험) · L274(표 1개)

### tldr (L8) 2~3줄로
현행 1문장 나열 → 나열 + 「稀有度 원리(越难做成排名越高)」 + 「花色不比大小·同牌型靠踢脚牌」. 마크다운 금지.

### FAQ Q 축어 교체
L364 「扑克里最大的牌是什么？」 → **「德州扑克什么牌型最大？」** · L372 「同花顺赢四条吗？」 → **「同花顺和四条哪个大？」**(A는 그대로)

### tags
`踢脚牌` 삭제 → `德州扑克牌型概率` 추가 · `牌型顺序` 유지 · 나머지 유지

### §13 자리 (C 구간 손검산)
L34~45 확률표 10행(EN 값) · L212 Q♥Q♦ + A♠A♦K♥K♣Q♠ · L220 6♥2♣ + 7♥8♥9♥10♥J♠ · L228 A♥3♣ + K♠K♦K♥A♠2♠ · L236~244 对决표 · L282 「90%」(EN L287 동형 ✅)

### 하지 말 것
확률 수치 · 이미지 경로 · L254 短牌 서술 · game-order L300이 이 글로 링크하는 구조(회차 1 확정) · 葫芦 vs 同花 축 H2화

---

## 3. holdem-flush-vs-straight — masterUpdated 2026-08-12 · updated 2026-08-12

### 드리프트 0. `masterUpdated` 유지.

### H2 재조준 (현행 8/12 = 67% → 1개)
L79 「三个至今还在骗人的牌面」 → **「哪三种牌面最容易把同花和顺子看错？」** → 9/12 = **75%** ✅

### 직답 블록
- L39 절: 첫 문장 「是的——而且根本不用纠结。==同花就在顺子上面一档…==」를 블록으로 옮긴다(본문에서 뺀다).
- L55 · L79 · L117 · L133 · L156 · L181 · L196: 결론형 블록 신설.
- L107: 첫 문단이 직관 오류 제기이므로 **결론(自由度 → 组合数)**을 블록으로.
- 넣지 않는 곳: L26 `### 简短答案`(H3 · 최상단 블록 있음)

### tldr (L8) — 이미 2줄 자기완결. **손대지 않는다.**

### tags
`顺子跟同花谁大` 추가(자동완성 축어) · 8개 초과 시 `同花和顺子的区别` 유지하고 `更大的同花` 삭제

### 🔴 표기 미결 — 손대지 마라
L127 「4-2 法则」 = 레포 제3 변이(`2 和 4 法则` 20건+ · 정본 `二四法则`). **회차 3 확률 클러스터에서 일괄 판정**(뱅크 zh-rules §4). 여기서 고치면 클러스터가 갈린다 → 진행 파일 미결에 추가.

### §13 자리
L59~69 조합수표(2,598,960 · 624 · 3,744 · 5,108 · 10,200 · 54,912 · 4.62%/3.03%) · L89 9♠10♠ + 8♥7♥6♥5♠A♣ · L95~97 9♥5♥ + 8♥7♥6♠2♣(转牌) · L103 A♠6♠ + J♠9♠7♠4♣2♦ vs 10♥8♦ · L121~127 outs 9/8/4 · L150 A♠5♠ + K♠9♠9♥4♠2♦ vs K♦9♦ · L162~175 두 표 · L187~190 8♥7♥6♥Q♠3♦ + K♥2♥ / 10♥9♥

### 하지 말 것
「2배」 기준 문구(08-12 정정본 「五张牌…两倍 / 七张 1.5倍」) · Spot 2 경고 문단(L97 · 08-12 정정본) · 4-2 法则 표기

---

## 4. holdem-kicker — masterUpdated 2026-07-18 · updated 2026-07-24

### 드리프트 (EN diff 008cf7c6 → HEAD · EN updated 2026-08-26)
- **[이미 반영]** 四条 H2 직답 「那需要两名玩家拿到同一副四条，也就是四张全摊在公共牌上——这种牌面很少见」(L186) ✅ · 三条 FAQ K♣K♥7♦5♣2♠ 예시(L221) ✅
- **[미반영] FAQ 「"打公共牌"是什么意思？」(L249)** — 현행: 「因为人人都用同样的五张牌，底池就平分。」 EN 08-26 축어:
  > "If nobody can improve on the board, everyone uses the same five cards and the pot is split."
  → 「**如果没有人能在牌面之上更进一步**，人人都用同样的五张牌，底池就平分。」(조건절 추가)
- `masterUpdated` → **2026-08-26**

### H2 재조준 (현행 9/13 = 69%)
| L | 현행 | → |
|---|---|---|
| 93 | AK vs AQ：踢脚牌如何决定胜负 | AK vs AQ：踢脚牌怎么决定胜负？（顶对顶踢脚 TPTK） |
| 143 | 打公共牌：你的踢脚牌不生效的时候 | 什么时候你的踢脚牌不生效？打公共牌 |
→ 11/13 ≈ **85%** ✅

### 직답 블록 — 🟢 전환형
L40 · L50 · L76 · L110 · L125 · L145 · L158 · L171 · L186의 **굵은 선도문장을 블록으로 옮기고** 본문 문단은 그 뒤 문장부터 시작한다(복제 금지). L93 절은 블록 신설(AK vs AQ 결론 + TPTK 정의 한 줄).
넣지 않는 곳: L28 `### 踢脚牌一览`(H3 stripe)

### TPTK 흡수 (현지 경쟁 축 · 근거 = 본문 L97~102 AK 예시가 곧 TPTK)
- L93 절 끝에 한 문장: 「牌桌上把这种"顶对 + 最大踢脚"叫**顶对顶踢脚（Top Pair Top Kicker，简称 TPTK）**——A♣ 牌面上的 A-K 就是标准的 TPTK。」
- FAQ 신설(「什么是 A 踢脚」 뒤): **Q. 顶对顶踢脚（TPTK）是什么意思？** A = 정의(底牌 한 장이 牌面 최대 카드와 짝 + 다른 한 장이 牌面 밖 최대 单张) + 예시(牌面 A♣ 9♦ 5♠ 2♥ 7♣에서 A♠ K♠ = TPTK · A♦ Q♦는 顶对이지만 顶踢脚 아님) + 「AK 能赢 AQ 的原因就在这」. 🔴 전략 서술 금지(위치·베팅은 이 글 밖).
- tags: `顶对顶踢脚 TPTK` 추가(8개 유지 위해 `kicker 单张` → 유지, `被压制的 A` 유지, `同花有踢脚牌吗` 삭제)

### tldr (L8) — 이미 3문장 자기완결. 손대지 않는다.

### §13 자리 (거울쌍 게이트 「zh만」 카드 5개 = zh 고유 예시 2절 → 반드시 손검산)
L97~102 A♠K♠ vs A♦Q♦ + A♣9♦5♠2♥7♣ · **L114~119 A♠K♦ vs A♥Q♦ + A♣9♦4♠3♥2♣**(zh 고유) · L147~152 10♠J♦Q♣K♥A♠ + 2♣3♦/4♥5♦ · **L160~165 A♣2♦ vs A♥3♦ + A♠K♦Q♣J♥7♠**(zh 고유 · 10 없음 확인) · L175~178 A♠9♣ vs A♥K♦ + A♦7♣2♥Q♠4♦ · L188 5♠5♥5♦5♣K♦ · FAQ L221 · L225 K-Q/J-Q + Q-7-7

### 하지 말 것
四条 직답 문구(08-26 정정본) · 三条 FAQ 예시 카드 · L60 「有（极少起作用）」 표

---

## 5. holdem-tiebreak-rules — masterUpdated 2026-07-19 · updated 2026-08-09 ★이 회차 최대

### 드리프트 (EN diff 3db72382 → HEAD · EN updated 2026-08-30 · `c96af74d` 「검색어 축 재조준 + FAQ 중복 해소」)

1. **[미반영] tiebreak 표 1행(L85)** — 현행 「皇家同花顺|永远平局（平分底池）|-无踢脚牌」. EN 축어:
   > "Royal Flush|Two of them only happens when the board is the royal — everyone chops|-No kicker"
   → 「皇家同花顺|两副只可能出现在牌面本身就是皇家同花顺时——全桌平分|-无踢脚牌」

2. **[미반영] 轮子 절 뒤 문단 신설(L134 뒤)** — EN 축어:
   > "At the other end of the ladder, the highest straight in poker is Broadway — A-K-Q-J-10. No straight beats it (though a flush or anything above it still does), and the wheel sits at the bottom, so every straight in the game ranks somewhere between those two by its top card alone."
   → 「阶梯另一头，==**最大的顺子是 Broadway——A-K-Q-J-10**==。没有任何顺子能赢它（同花及其以上的牌型照样能），轮子坐在最底层，所以游戏里每一副顺子都只凭顶张排在这两者之间。」

3. **[미반영 🔴 신설 H2] 「Do Suits Matter in Poker?」 — L148(第五张牌 절) 뒤·L150 앞에 통째로 신설.** EN 축어:
   > "**No — not for deciding who wins. Suits do exactly one job in Texas Hold'em: five of the same suit make a flush. Beyond that they carry no rank, so two hands that match rank for rank always split the pot, and no card ever outranks another because of its suit.**
   > The question keeps coming up because suit order genuinely exists in poker — just not in this game. Stud and razz use it to decide who brings it in and who takes an indivisible chip. Hold'em uses it for neither.
   > The cleanest proof is the one chip that *cannot* be divided. The 2026 WSOP tournament rules say *"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"* (Rule 73). Even when a pot physically will not split evenly, the rule reaches for **the seat**, not the suit — and the suit-based method in the back half of that same rule is written for stud and razz only.
   > One more thing worth knowing: in Hold'em two flushes are always the *same* suit anyway, because all five community cards are shared and a board can't hold three hearts and three spades at once. So "my spades beat your hearts" is not a rule you lost to — it's a hand that cannot be dealt."
   → zh H2 = **「德州扑克花色分大小吗？」**(자동완성 「德州扑克花色大小」 축어). 굵은 첫 문단 → `快速回答` 블록. WSOP 인용은 「2026 年 WSOP 锦标赛规则第 73 条」 + 원문 영어 병기 `==g:*"…odd chip goes to the first seat left of the button"*==` (조항 번호는 EN이 명시하므로 회차 1 all-in 「번호 달지 마라」와 다르다 — 이건 EN 축어).

4. **[미반영] FAQ 재작성 5개** (EN 축어 → zh A 교체. Q는 §1 형태소로)
   - L189 「德州扑克平局怎么定胜负？」 A →
     > "Three checks in order — hand rank, then the cards that make the hand, then kickers from the top down — and the first difference ends it. Just as important is what never enters the comparison: suits, who bet last, who sits closer to the button, and how many chips each player put in. If the five cards match rank for rank, the dealer chops the pot no matter what happened in the betting."
   - L193 「两个玩家同样一对谁赢？」 → Q **「都是一对怎么比大小？要比单张吗？」** A →
     > "The higher kicker — but check which of your cards actually reach the best five first. On A-Q-7-3-2 with a pair of aces, a player holding A-9 plays A-A-Q-9-7: the board's queen jumps ahead of their nine, so the nine is only the *second* kicker. Against A-K the pot is already decided at the first slot, and that nine is never compared at all. Three kicker slots exist; most pots end at the first one."
   - L197 「两个玩家都是两对谁赢？」 → Q **「都是两对怎么比大小？要比单牌吗？」** A →
     > "Higher pair first, then the lower pair, then the one kicker — so aces-and-threes beats kings-and-queens even though the second pair is far smaller. The case that catches people is a double-paired board like K-K-9-9-5: every player already holds the same two pair, so the hand collapses to a single kicker and the best hole card at the table takes it. Two pair carries exactly one kicker, never two."
   - L201 「德州扑克里第五张牌重要吗？」 A →
     > "Yes — and it is the most common way a player loses a pot they were sure they had won. Three spots put the whole pot on the last card: a pair's third kicker, the lowest card of a flush, and the side card next to quads sitting on the board. It stops mattering only when the board's own cards outrank whatever you hold, at which point your hole cards drop out of the hand entirely and you are playing the board."
   - L229 「能有比对手更大的顺子吗？」 A →
     > "Yes, and in practice it happens when most of the straight is already on the board. Take a board of 5♦ 6♣ 7♠ 8♥ 2♦: a player with 9♣ 4♠ makes 9-8-7-6-5, while a player with 4♥ 3♦ makes 8-7-6-5-4 off the same four cards. Both of them "made a straight"; only the top card was ever counted, so the nine takes it. Equal top cards mean the same straight and a chop."
     🔢 검산(C): 9♣4♠ + 5♦6♣7♠8♥2♦ → 9-8-7-6-5 ✅ · 4♥3♦ + 보드 → 8-7-6-5-4 ✅(3은 못 씀) · 9 > 8 ✅

5. **[미반영] 花色 FAQ 2개 → 1개로 병합(EN이 첫 번째를 삭제)**: L253 「花色在德州扑克里有用吗？」 **삭제**. L257 「德州扑克里花色会决定平局吗？」 A →
   > "No — but there is one place suits are used at a Hold'em table, and it is not the pot. When a game starts, each player draws a card to decide where the dealer button goes, and if two draws tie on rank the suit order settles it. That picks a *seat*, never a hand. Everywhere else in the rulebook suit order belongs to stud and razz. If two best fives match rank for rank, the pot is split regardless of suits."

6. **[이미 반영]** L174 「三个踢脚牌位都由公共牌填满」(EN all three) ✅ · `a798689b` 08-27 정정 ✅

7. **[EN 무시]** EN tags(do suits matter · highest straight) — zh는 §1 실측치로.

`masterUpdated` → **2026-08-30**

### H2 재조준 (현행 5/10 = 50% 🔴)
| L | 현행 | → |
|---|---|---|
| 80 | 各牌型的德州扑克平局规则 | 每种牌型都一样时怎么比大小？ |
| 신설 | — | 德州扑克花色分大小吗？ |
| 150 | 当你的踢脚牌不参与比较——以及底池平分 | 什么时候你的踢脚牌不算数、底池平分？ |
→ 8/11 ≈ **73%** ✅

### 직답 블록 — 전환형: L40 · L58 · L82 · L107 · L132 · L142 · L154의 굵은 선도문장을 블록으로 옮긴다. 신설 花色 절은 EN 굵은 문단 번역이 블록.

### FAQ Q 형태소 교체 (dpskill 「都是X怎么比大小」 + 자동완성)
L233 「两个玩家同样一副顺子谁赢？」→「都是顺子怎么比大小？」 · L237 三条 →「都是三条怎么比大小？」 · L241 同花 →「都是同花怎么比？」 · L245 葫芦 →「都是葫芦怎么比大小？要比对子吗？」 · L249 同花顺 →「都是同花顺怎么比？」 · L225 「A 能当 1 用吗？」→「顺子 12345（轮子）算顺子吗？A 能当 1 用吗？」 · L265 「真会出现平局（平分底池）吗？」→「德州扑克会平手吗？平手怎么算？」
**FAQ 신설 1개**(L241 同花 앞): **Q. 都是高牌怎么比大小？** A = 표 L94 「五张全比，从大到小」 근거로: 최대 单张부터 5장 순서 비교 · 첫 차이가 승부 · 5장 전부 같으면 平分 · 花色 무관. 예시는 본문 L20 스타일 없이 「A-K-9-6-3 赢 A-K-8-7-5（第三张 9 大过 8）」— 🔢 C 검산.

### tldr (L8) — 2줄 자기완결 있음. 「花色永远不参与定胜负」 유지. 손대지 않는다.

### tags
`踢脚牌` 삭제 → `德州扑克 平手怎么算` · `更大的顺子` 유지 · `德州扑克花色大小` 추가(8개 유지 위해 `德扑 平局` 삭제 — `德州扑克 平局规则`과 어순 변형)

### §13 자리
L64~70 · L99 A♠J♠/A♦10♦ + A♣A♥7♦5♣2♠ · L109 K♠Q♦/K♥J♥ + K♦9♣9♠5♦2♥ · L115~122 5♠4♠ vs A♣K♦ + 5♦4♥K♣9♠9♥ · L134 A♠5♠/6♥5♥ + 4♦3♣2♠K♦Q♥ · L144 A♠8♠/A♦7♦ + A♥K♣Q♦4♣2♥ · L162~168 표 · L174 A♠3♠/A♦2♦ · **FAQ L215 6♠6♦ vs 5♠5♦ + K♣K♥9♠9♥A♦(zh 고유)** · L239 · 신설 FAQ 예시 2개

### 하지 말 것
L215 counterfeit FAQ(zh 고유 롱테일) 삭제 · L217 零头 FAQ · L221 术语 FAQ 삭제 · 「平局／平手／打平／劈池」 나열(粤 색채 병기 허용)

---

## 6. holdem-split-pot-rules — masterUpdated 2026-09-06 · updated 2026-09-06

### 드리프트 0. `masterUpdated` 유지.

### 🔴 결함 2건 (zh 고유)
- **L26 `快速答案` → `快速回答`**(진행 파일 미결 해소).
- **L121 「来逐张核对一手（§13 我把七选五都列出来）：」** — 내부 프로토콜 표기 **§13이 발행 본문에 새어 나갔다**(EN에 없음). → 「来逐张核对一手（七选五全部列出来）：」

### H2 재조준 (현행 8/12 = 67%)
L98 「德州扑克里永远不能拆平局的 3 件事」 → **「哪 3 件事永远不能拆平局？」** → 9/12 = **75%** ✅

### 직답 블록
- L41: 첫 문장(정의)을 블록으로 옮긴다.
- L49 · L84 · L98 · L115 · L140 · L152 · L169: 결론형 신설.
- 넣지 않는 곳: L189(1문단) · L31 `### 核心数字`

### tldr (L8) — 3문장 자기완결. 손대지 않는다.

### tags — 유지(7개). `德州扑克 chop 意思`는 `chop 是什么`과 동일 의도 → 추가하지 않는다.

### §13 자리
L58~62 K♠7♣/K♥2♦ + K♦K♣Q♥Q♦J♠ · L72 9♠8♠/9♥8♦ + 7♣6♦5♥K♠2♣ · L75~77 K♠J♠8♠4♠2♠ + A♥Q♦/10♥9♦/3♠ · L80 A♠K♦/A♥K♣ + A♦Q♠9♣6♥2♠ · L88 8-8-8-A-K · L108 · L127~130 A♠Q♦/A♥J♦ + A♦K♠9♣6♥2♠ · **L146 $1000÷3 零头(zh 고유 · 100枚×$10 → 33枚=$330 ×3=$990 → 余 1枚=$10 → C $340)** · L173~181 主池 300/边池 400 · FAQ L252

### 하지 말 것
L94 tip(08-11 A5·A6 정정본 「反射性弃牌才是错的 … 超过三分之一」) · WSOP 172/75 조항 · L152 대비표

---

## 7. holdem-reading-the-board — masterUpdated 2026-08-11 · updated 2026-08-11

### 드리프트 0(§0-A). `masterUpdated` 유지(EN updated 필드도 08-11).

### 🔴 L44 `快速答案` → `快速回答`

### H2 재조준 (현행 10/16 = 63%)
| L | 현행 | → |
|---|---|---|
| 65 | 怎么从 7 张牌里拼出最强的 5 张 | 怎么从 7 张牌里拼出最强的 5 张？ |
| 87 | 4 步读懂牌面 | 怎么 4 步读懂牌面？ |
| 125 | 怎么看出牌面上有顺子 | 怎么看出牌面上有顺子？ |
| 149 | 怎么看出牌面上有同花 | 怎么看出牌面上有同花？ |
| 168 | 公共牌成对会改变什么——明三条、葫芦和四条 | 公共牌成对会改变什么？明三条、葫芦和四条 |
| 244 | 湿牌面对干牌面：读懂牌面质地 | 湿牌面和干牌面有什么区别？ |
| 261 | 那些真会赔钱的读牌错误 | 哪些读牌错误真会赔钱？ |
→ 13/16 ≈ **81%** ✅

### 직답 블록 — 결론형 신설: L49 · L65 · L87 · L109 · L125 · L149 · L168 · L197 · L211 · L228 · L244 · L261
넣지 않는 곳: L186(2줄 + 1문단 · 첫 문장이 직답) · L36 `### 一句话答案`

### FAQ 신설 1개(「坚果」 축 · 근거 L199·L201~207) — 「哪些牌面最危险？」 앞
**Q. 德州扑克坚果（nuts）是什么意思？** A = 「在当前牌面上任何人能拼出的最强五张」 + 3问检查(同花可能?·牌面成对?·最大顺子?) + L201 예시(Q♣ 9♥ 6♣ 5♦ 2♠ → 8-7 = 9 高顺子) + 「坚果会随每张公共牌改变」(L228 링크 없이 문장만)

### tldr (L8) — 2문장 자기완결. 손대지 않는다.

### tags — 9개 → `德州扑克 读牌` 추가 · `坚果牌会变吗` 유지(10개 되면 `公共牌成对` 삭제 — `哪些牌面最危险`가 흡수)

### §13 자리
L59 K♠9♦4♣ / J♥10♥8♣ · L79~81 표 3행 · L98~103 A♥5♥ + A♦7♦4♠10♣2♠ · L113~119 K♣Q♣ + A♠A♦A♣7♥7♦ · L129~138 표 4행 · L143 A♦2♦ + K♠Q♥3♣4♦9♠ · L162 A♠4♦ + 2♠5♠9♥J♥10♠ · L172~178 K♣K♦7♠3♥2♣ 표 · L190~191 · L201~207 · L232~238 9♠8♦5♣ + 9♥ · L269 · FAQ L342

### 하지 말 것
L294 WSOP 75/TDA 19 · L322 三张同花色 경고(08-27 정정본) · L176 「两张底牌都参与」 · steps/compare 블록 구조

---

## 8. 전 편 공통 마감 규칙
1. 백틱 금지 · desc 160자 재확인 · FAQ 정형(`**Q.` + 빈 줄 + `A.`) · tldr 마크다운 금지.
2. 신마 병기: 직답 블록이 첫 등장이면 `同花(flush)`류 병기 — 단 **족보명은 전부 중국어 主词**(terms §0-2) + 영어는 괄호.
3. `masterUpdated` 편마다 Edit: kicker → 08-26 · tiebreak → 08-30 · 나머지 4편 그대로. `updated`는 6편 전부 **2026-09-07**.
4. 편집 후 `npm run audit:hard -- --locale=zh`만. 렌즈는 C.
5. 🔴 4-2/二四 法则 표기 · 합법성 축 · 短牌 서술 · 확률 수치 — 손대지 않는다.
