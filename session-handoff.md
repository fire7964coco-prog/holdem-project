# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## ▶▶▶▶ 새 세션 START HERE (es 재경화 진행중 — ✅**규칙6·족보6 완료(2/6)** / 다음 = ★**확률6**)

> 읽는 순서: `CLAUDE.md` → 이 블록 → `docs/es-hardening-workflow.md`(워크플로+지역편차 그라디언트) → `docs/es-brief-rankings.md`(직전 족보6 브리프, winnable 라우팅 참고) → 방법론 상세는 바로 아래 "(방법론 참조) es 42편 재경화" 블록.

### ✅ 규칙6 완료·배포 (2026-07-24 `2570bae`) + ✅ 족보6 완료·배포 (2026-07-24 `ba373dc`)
- 규칙6: texas-holdem-rules(필라)·game-order·blind-meaning·all-in-rules·showdown-rules·betting-actions. winnable FAQ 26 주입. WORKLOG 상세.
- 족보6: hand-rankings(필라)·flush-vs-straight·kicker·tiebreak-rules·split-pot-rules·reading-the-board. ★**족보6 ES는 규칙6과 달리 EN 07-18/19 FAQ 다수 누락**(tiebreak 8→15·split 8→17·kicker 9→13·reading 8→14) → **EN FAQ 대량 포팅** + lowfruits winnable 주입. 적대적 QA 3병렬 §13 독립재산, 🔴 1건 교정(필라 Puzzle 3 quad kings 누락).
- 공통: EN 마스터=뼈대, §13 EN verbatim(재계산X), tldr 2~3줄. 발행 총계 불변 57+448.
- ★**워크플로 교훈(`docs/es-hardening-workflow.md`)**: "시드 1차 얇으면 SERP **2회차 확장**(관련어·PAA→금맥), 풍부하면 1회". es=영어보다 작은 우주(노이즈 적음)—얇은 게 정상. 네이티브 표현으로 시드 교체(showdown→`quien gana`·bote dividido→`empate`/`split`·jugar la mesa→`cartas comunitarias`). ★노이즈 함정: split=`planning/scrum poker`(애자일)·ante=`스웨이드 세탁`·all in=굿즈/포커룸브랜드.

### ▶ 다음 = 확률6 (probability 필라·pot-odds·outs·drawing-odds·implied-odds·equity)
- 방법론 동일: Phase1 나 중앙 리서치(lowfruits+WebSearch PAA+현지3편) → Phase2 병렬 작가6+적대적 스페인 QA → Phase3 빌드·링크복원·커밋. **§13 = 계산 최다**(regla del 2 y 4·pot odds·equity·fold equity) → QA 재산 필수. 간체 확률6서 fold equity +$52·換算표 검산했듯 es도 동일.
- lowfruits 시드(사용자 요청): `probabilidades poker *`·`pot odds *`·`outs poker *`·`equity poker *`·`regla del 2 y 4 *`·`cuando pagar poker *`. 얇으면 2회차. Country=Spain/Spanish.
- es 클러스터 순서: 규칙6✅ → 족보6✅ → **확률6** → 전략8 → 토너먼트9 → 용어6.

---

## ▶▶▶ (방법론 참조) es 42편 재경화 — 전체 계획·lowfruits 워크플로 (키워드는 lowfruits)

> 읽는 순서: `CLAUDE.md` → 이 블록 → `.cursor/rules/posting.mdc` → (참고) 바로 아래 "간체 42/42 완결" 블록의 병렬 오케스트레이션 워크플로·§8 리서치 축적(방법론 그대로 재사용).

### 🚀 한 줄
**`lib/posts-es/*.ts`(스페인어 42편, card-counting 포함=zh 유니버스와 동수 풀패리티)를 현재 EN 마스터 기준으로 재경화한다.** 방법론은 방금 끝낸 간체(zh)·JA와 **동일**(클러스터 단위 순차 / 병렬 작가+적대적 스페인 네이티브 QA / tldr 2~3줄 / §13은 EN값 그대로 이식·재계산 금지). ★**단 하나 다른 점 = 키워드 리서치**: rakko는 JA·간체 전용이라 **es는 [[lowfruits-xlsx-parse-workflow]]로** 롱테일 난이도·경쟁을 판단한다(사용자 확정 2026-07-24).

### 🔑 lowfruits 워크플로 (★es 핵심 차이점)
- **사용자가 lowfruits xlsx export를 제공**(SERP Extractor 돌린 뒤 **Analysed only** export). 나는 파싱만.
- Python 無 환경 → **PowerShell `Expand-Archive` + 정규식**으로 xlsx 파싱([[lowfruits-xlsx-parse-workflow]]에 컬럼인덱스·winnable 판정[LDA/weak-spot]·노이즈필터 상세).
- 시드 = poker 앵커. **위치변형 필수**([[keyword-harvest-wildcard-positions]]: 트레일링만=blind spot, 넓은토픽 앞*=지역노이즈→Questions/PAA로).
- ★**매 글 WebSearch PAA도 필수 조합**(lowfruits 단독 아님). 저볼륨도 winnable이면 버리지 말고([[low-volume-longtail-aggregation]]) 리치글 FAQ/H2로 흡수.
- 세션 시작 시 **사용자에게 lowfruits export부터 요청**(어느 시드로 뽑을지 합의).

### 📍 es 현재 상태 (경화 전)
- **es = 42/42 풀 패리티**(`lib/posts-es/<slug>.ts`, 라우트 `/es/blog/<slug>`). 신규 번역 아님, **재경화**.
- ★**stale**: 대부분 `updated` 07-04~08 = EN 2026-07-19 경화 이전 → [[rehardening-stale-link-drift]]. `masterUpdated` 필드 없음 → **§14 EN 전수 대조**로 누락분 색출이 1단계(간체서 이 대조가 §13오차·도입부 glossary 링크 누락·FAQ 누락을 다수 잡음 → es도 동일 예상).
- ★**§13 quad aces**: es bad-beat는 **이미 2026-07-20 `7ad2ee5`에서 "segunda más fuerte" 의역 정정 완료**. 그래도 QA가 재확인(다른 §13 표현·set over set도 대조).
- **경화 정의(간체와 동일)**: ①EN 07-19 추가분 소급 이식(도입부 링크+thumb·FAQ·GEO H2·표·§13 수정) ②1인칭 경험담 현지 재저작(스페인/중남미 맥락, 없는사실 창작 금지) ③GEO(현지 실검색 H2·Q-A-E·tldr 2~3줄) ④§13 불변.

### 🌐 es 현지화 원칙
- 직역 아님 = [[translation-is-contextual-reposting]]. **스페인 vs 라틴아메리카** 검색 관습 차이 의식(어휘·표현). 용어(posting.mdc §다국어 표): cash games·torneos·buy-in·**burbuja**(bubble). 전문어 과번역 금지(ICM·bubble·bankroll·short stack 영어 유지).
- es 용어은행 = `docs/translation-terms-es.md` 있으면 확인·확장, 없으면 신설(zh의 §8처럼 클러스터별 winnable·용어·出处 축적). 스페인어 QA는 적대적 **스페인/중남미 네이티브** 페르소나.

### 🤖 워크플로 (zh/JA서 실증 — 그대로)
- Phase1 리서치=나 중앙: **lowfruits(사용자 export) + 편별 WebSearch 경쟁사 SERP/PAA** → 편별 브리프(winnable 롱테일·es 용어·EN 대비 누락분). Phase2 병렬 작가(EN 마스터+브리프)+적대적 스페인 네이티브 QA 짝. Phase3 나=빌드(check-intl-links)·QA수정·링크복원(es 슬러그)·커밋·푸시.
- **클러스터 순서**(zh와 동일): 규칙6 → 족보6 → 확률6 → 전략8 → 토너먼트9(라이브이벤트4 §14=EN verbatim) → 용어6. 클러스터마다 자동배포·보고([[en-hardening-autodeploy-cadence]]).
- ★간체서 얻은 EN 대비 공통 누락 패턴 참고(es도 유사할 것): 도입부 glossary 링크(straddle·fish·bad-beat)·rake FAQ 5·cooler FAQ 3·glossary Money표+6용어·확률 FAQ 19·전략 §13 3건(88+→TT+·A5s28%·80-85%). **단 es 실제 누락은 §14 대조로 재확인**(언어마다 다를 수 있음).

### ⚠️ 커밋/빌드는 직렬. 작가엔 "index·빌드·git 금지" 명시. §13은 EN에서 그대로(적대적 QA가 편마다 베스트5장+산수 재검산).

---

## ▶▶▶ (완료) 간체(zh) 42/42 경화 완결 + 용어 신마 현지화까지 완료 (2026-07-24)

> 읽는 순서: `CLAUDE.md` → 이 블록 → `.cursor/rules/posting.mdc` → `docs/translation-terms-zh.md`(§8-1~8-6 클러스터 리서치 축적).

### 🚀 한 줄
**간체 42편 6클러스터 순차 경화 100% 완결·배포**(규칙6·족보6·확률6·전략8·토너먼트9·용어6). EN 마스터 유니버스 전 언어 3번째 풀 경화(JA·zh-hant 이어). ✅ **용어6 신마 현지화도 완료**(`458fded`): 2회 지역조사(신마/港/澳)로 병기·지방注 반영. **간체 트랙 이번 세션 전부 마감.**

### 📍 현재 상태 (완결)
- **간체 42/42 배포**: 규칙6 `12c960a`·족보6 `d1d4194`·확률6 `89c85f9`·전략8 `6f7eeab`·토너먼트9 `0dfd810`·용어6 `983f74e`. 적대적 간체 네이티브 QA 전 클러스터 §13/§14 0红(레드라인 bad-beat quad aces·cooler set over set 회피). 배포본 §13 오류 0(QA가 8건 사전 차단).
- **리서치 축적**: `docs/translation-terms-zh.md §8-1~8-6`(클러스터별 winnable·术语·出处 — 향후 신규 간체 포스팅 재사용).
- **신규 지침**: tldr 2~3줄 자기완결 직답 단락([[tldr-two-to-three-lines]], 확률6부터 적용).
- **★rakko 간체**: 부모 키워드 데이터 有(seoDiff 대개 null)·디테일 롱테일 정량 null → WebSearch 경쟁사 FAQ 정성분석이 주신호.

### ✅ 용어 신마 현지화 (완료 `458fded`)
- **왜**: zh 구글 도달 독자 = **신마 화교**([[chinese-seo-traditional-taiwan-first]]는 번체가 중문 본진이나 간체는 신마 타깃). 신마는 **영어 주도 발화** → 대륙식 순수의역 어색.
- **반영**: straddle=강抓/抓头 · rake=(rake/commission)+台费 구분 · fish=水鱼(粤语,포커 맥락) · bad-beat=BBJ 영어원명 유지+黑仔/手風差 · glossary="신마 多喊英文" 총注. **주词·§13 불변, 병기·지방注만.** 용어은행 **§0.5**에 신마 변이 지침 축적(향후 신규 간체 포스팅 재사용).

### ▶▶ 다음 방향 후보 (간체 완결 — 다음 세션)
- **(A) 타 언어 재경화**: es·pt·de·id (EN 07-19 stale·도입부 링크 누락·quad-aces 의역 가능성). JA/zh/zh-hant 방법론 재사용. ※rakko는 JA·간체만 → es/pt는 현지 서제스트/WebSearch.
- **(B) KO 본진 강화**(GSC 성과=ko 기준·족보 카니발·GEO).
- **(C) EN 마스터 검토 항목**(전 언어 소급): all-in 누적加注표 $15/$25행·ept Gold Pass $/€·WPT 36場vs표12場.

---

## ▶▶▶ (이전) START HERE (2026-07-24 — ★★★ 다음 작업 = 기존 **간체(zh) 번역본 42편 경화**)

> 읽는 순서: `CLAUDE.md` → 이 블록 → `.cursor/rules/posting.mdc` → (참고) 아래 "(이전)" 번체 블록의 병렬 워크플로·철칙. 용어은행은 번체용(`docs/translation-terms-zh-hant.md`)이라 **간체는 기존 zh 글의 정착 표기 + 간체 표준**을 따를 것.

### 🚀 한 줄
**`lib/posts-zh/*.ts`(간체 42편)를 현재 EN 마스터 기준으로 재경화한다.** 이 번역본들은 `updated` 07-03/07-06 = **EN 2026-07-19 경화(경험담+GEO+도입부링크+FAQ+§13수정) 이전**이라 stale. EN이 그동안 추가한 걸 소급 이식 + 간체 현지 경험담·GEO 주입. 클러스터군 단위로, 번체(zh-hant) 때 쓴 **병렬 오케스트레이션 워크플로 그대로**.

### 📍 현재 상태 (2026-07-24 시작 시점)
- **간체(zh) = 42/42편 이미 존재**(EN·번체와 동수 풀 패리티). 파일 = `lib/posts-zh/<slug>.ts`, 라우트 `/zh/blog/<slug>`. 미니맵=`ZH_CLUSTERS`로 **이미 활성**(추가작업 불필요).
- ★그러나 **경화 이전 상태(stale)**: `updated` 대부분 07-03~07-06 → EN 마스터가 07-19에 넣은 **1인칭 경험담·GEO(H2 롱테일 질문화·Q-A-E·표)·도입부 내부링크·FAQ·§13 수정**이 이 간체본엔 **미반영**. → [[rehardening-stale-link-drift]] 시나리오(es·pt·de·zh·id 반복 예상 중 zh 차례).
- zh 글엔 `masterUpdated` 필드 없음 → EN `updated`와 직접 비교 불가 → **§14 전수 대조**(EN 마스터 vs 간체본 문단·FAQ·링크·§13 예시)로 누락분 색출이 1단계.

### 🎯 "경화"의 정의 (이 작업에서 할 것)
1. **누락분 소급 이식** — 현재 EN 마스터(`lib/posts-en/<slug>.ts`)에 있는데 간체본에 없는 것: 도입부 내부링크, FAQ 항목, GEO용 롱테일 H2, 표, §13 수정분. (구조·뼈대는 EN과 동일해야 함.)
2. **1인칭 경험담 주입** — 간체 현지 맥락(대륙/싱가포르/말레이 화교 撲克室·线上). ==없는 사실 창작 금지==, 중간 톤.
3. **GEO** — H2를 간체 실검색 형태로(질문형 H2 지양, 명사형 + FAQ 블록에 질문), Q-A-E 골격, 인용가능 패시지.
4. **§13 불변** — 핸드예시·카드·확률·칩 산수는 **EN 마스터에서 그대로**, 재계산 금지. 적대적 간체 네이티브 QA가 편마다 베스트5장+산수 전수 재검산.

### ⚠️ 간체 특유 주의 (번체와 다름!)
- **표기: 간체 표준.** 번체 교훈을 그대로 복사하지 말 것 — 번체 `機率`↔간체 `概率`, 번체 `籌碼`↔간체 `筹码`, 번체 `資料庫`↔간체 `数据库`. 기존 zh 글의 정착 표기를 스타일 레퍼런스로 우선.
- **키워드/검색시장 차이**: Google 중문 SEO는 번체(대만·홍콩) 우선([[chinese-seo-traditional-taiwan-first]]). 간체는 대륙(구글 미사용)이 아니라 **싱가포르·말레이시아 등 해외 화교** 타깃. rakko는 JA 전용 → **간체 winnable은 WebSearch 경쟁사 FAQ 정성분석**이 주신호. (정량 데이터 기대 말 것.)
- ★**전략 판단 필요**: 간체 경화의 ROI를 사용자와 먼저 합의하면 좋음(번체가 중문 SEO 본진인데 간체에 얼마나 투자할지). 사용자가 하기로 결정했으니 진행하되, 방향은 확인.

### 🤖 워크플로 (번체서 실증된 병렬 오케스트레이션 재사용)
- **Phase 1 리서치(네가 중앙)**: 클러스터군 부모 키워드로 경쟁사 SERP/FAQ 정성분석(리서치 서브에이전트 WebSearch) → 편별 브리프(winnable FAQ·간체 용어·EN 대비 누락분 목록).
- **Phase 2 병렬(작가+QA 짝)**: 편마다 작가 에이전트 = EN 마스터+기존 간체본(스타일 레퍼런스)+브리프로 `lib/posts-zh/<slug>.ts` **경화 편집**. 완료 후 편마다 **적대적 간체 네이티브 QA**(§13 재검산+간체 표기+GEO H2+누락분 이식 확인).
- **Phase 3 통합(네가)**: 빌드(check-intl-links 통과)→QA수정→링크복원(간체 슬러그만)→빌드→커밋·푸시→WORKLOG 갱신. **커밋/빌드 직렬**, 작가엔 "index·빌드·git 금지".
- 자동배포 케이던스([[en-hardening-autodeploy-cadence]]): 클러스터군 끝날 때마다 보고.

### 📋 간체 42편 클러스터 (ZH_CLUSTERS와 동일 구성 = 경화 순서 후보)
- ✅ **규칙7 완료(2026-07-24 `12c960a`)**: texas-holdem-rules-for-beginners(필라)·game-order·betting-actions·blind-meaning·all-in-rules·showdown-rules — 경험담12+winnable FAQ18+신규边池산례. 적대적 QA §13 6편 0红. betting은 EN 07-11 풀패리티라 무변경. ★EN 검토항목: all-in 누적加注표 $15/$25행(EN L168 동일, 전언어 소급 후보). 리서치=`docs/translation-terms-zh.md §8-1`.
- ✅ **족보6 완료(2026-07-24 `d1d4194`)**: hand-rankings(필라)·flush-vs-straight·kicker·tiebreak-rules·split-pot-rules·reading-the-board — 경험담 복원+winnable(有效踢脚표·打公牌·counterfeit·Split vs Side 대비표·坚果会变). 적대적 QA §13 6편 0红(신규 예시 14+개 독립 7选5 재검산). ★§13 오류 1건 사전차단(신규FAQ 顺子>同花 뒤집힘→교정). 리서치=§8-2.
- ✅ **확률6 완료(2026-07-24 `89c85f9`)**: probability(필라)·pot-odds·outs·drawing-odds·implied-odds·equity — FAQ19문 이식+winnable(换算표·误差표·分街표·五步실례·总权益+fold equity)+**tldr 2~3줄 강화**+implied 공식 정정. 적대적 QA §13 6편 0红(fold equity +$52·換算표 전수 손계산). ★신규 지침 [[tldr-two-to-three-lines]] 적용 시작. 리서치=§8-3.
- ✅ **전략8 완료(2026-07-24 `6f7eeab`)**: strategy(필라)·positions·position-play·starting-hands-chart·limping·3bet·continuation-bet·when-to-fold — §13 오차3 교정(88+→TT+·A5s30→28%·80-86→80-85%)+FAQ7 이식+winnable(6漏洞·三层速记·IP vs OOP·面对3bet MDF·沉没成본)+tldr. 적대적 QA §13 8편 0红. 劫机位→劫持位·CO 영문주도. 리서치=§8-4.
- ✅ **토너먼트9 완료(2026-07-24 `0dfd810`)**: tournament(필라)·tvc·icm·bubble·short-stack + 라이브이벤트4(apt-incheon·korea-marathon·wpt-australia·ept-barcelona) — 전략5=FAQ13+winnable, 이벤트4=§14 사실 EN verbatim 동기화. 적대적 QA §13/§14 9편 0红(ICM 재귀 자릿수 재산·이벤트 逐格 대조). 🔴 2건 교정(short-stack Q행·apt 게이트 4A). ★EN 검토: ept Gold Pass $/€ 불일치. 리서치=§8-5.
- ▶ **다음 = 용어6(마지막 클러스터, 완결)**: holdem-glossary(필라)·straddle·rake·fish·cooler·bad-beat
  - ★glossary는 각 편=단일 용어 심화 vs glossary A-Z → **카니발 회피**(작가에 차별화 지시 + glossary 역링크). bad-beat §13 레드라인: 四条=3번째 카테고리(only straight flush beats·quad aces 오역 주의). §13 가볍지만 [[rehardening-stale-link-drift]] 도입부 링크 누락 전수 점검.
  - **이 클러스터 완료 시 간체 42/42 완결 = EN 마스터 유니버스 전 언어 3번째(JA·zh-hant 이어).**
- ★라이브이벤트4(apt/korea/wpt/ept)는 §14 사실=EN 母稿 verbatim(rakko/官網 숫자 갱신 금지).

---

### ✅ 직전 세션(2026-07-23) 완료 — 잡무·품질 정비 (커밋 순)
1. **레인지 영상 문구**(`540988b`): 자막 시청 후 `/blog/holdem-range-meaning` "먼저 보세요" 리드문을 영상 실내용(패턴 소거)·롱테일 키워드에 맞게 재작성. ★채널명 언급 금지(채널명 변경 예정).
2. **계산기 색인 보강**(`8ac8d23`): `/calculator` 기본탭(outs)만 초기렌더 → 탭 뒤 갇힌 SPR존·M값존·아웃츠 데이터를 하단 정적표 3개로 노출(구글 색인). FAQ 2건 추가. §13 검증(ec()과 1:1).
3. **KO 블로그 본문 폭 확대**(`37788c9`): `max-w-7xl→1440px`, 3열 사이드바 `190/230 gap6→180/210 gap5`. 본문 780→978px(중국어판 수준).
4. **KO 타이포 다듬기**(`1523408`): `.blog-prose`에 line-break:strict·hanging-punctuation·optimizeLegibility·리스트 margin. (자간·word-break·text-wrap은 이미 최적이라 유지.)
5. **번체 러닝맵 활성화**(`3f14e9e`): `ZH_HANT_CLUSTERS` 신설(6필라41슬러그, 번체 라벨)+intl-blog-post-client에 zh-hant 분기. 41슬러그 전부 실존 확인.
6. **번체 라벨 교정**(`e684eb7`): 포스트 실제용어와 5건 일치 — 何時棄牌→蓋牌, 現金局→現金桌, 數outs→補牌, bubble打法→泡泡期, 分池→平分底池. (39/41은 정상.)

> 참고: `.claude/`·`.mcp.json`·docs 일부·supabase/schema.sql은 이번 세션 전부터 있던 미스테이지 변경 — 건드리지 않음(무관 커밋 금지).

---

## ▶▶▶ (이전) START HERE (2026-07-23 — ★★★★ 번체(zh-hant) 42/42 = EN 마스터 유니버스 전체 완결. 다음 = 타 언어 재경화 or KO 본진 or 신규 대만 winnable)

> 읽는 순서: `CLAUDE.md` → 이 블록 → `docs/zh-hant-plan.md`(플랜·트래커) → `docs/translation-terms-zh-hant.md §7`(용어은행). 포스트 작업 전 `.cursor/rules/posting.mdc`도.

### 🚀 한 줄
**`docs/zh-hant-plan.md §5` 클러스터 목록에서 다음 클러스터군 하나를 골라, 아래 "병렬 오케스트레이션 워크플로" 그대로 돌려라.** 한 클러스터군 완주 → 보고 → 다음 (EN 경화 방식).

### 📍 현재 상태 (2026-07-23)
- **번체 = 42/42편. ★★ EN 마스터 유니버스 전체 완결 — 번체 트랙 100% 패리티.** 필라9 + 룰7 + 확률6 + 전략5 + 토너먼트4 + 용어6 + **positions1 + 라이브이벤트4**(apt-incheon·korea-poker-marathon·wpt-australia·ept-barcelona, 2026-07-23 배치). 전부 배포·적대적 대만 네이티브 §13/§14 通過(치명0).
- 발행 총계: 57 blog + **448 intl**. 상호링크 + 필라 역링크 + 이벤트 상호링크(apt-incheon↔korea·apt→ept+wpt·wpt→ept·ept→apt) 복원됨.
- ★오늘 세션 = **26편 배포**(확률6+전략5+토너먼트4+용어6+positions1+이벤트4), §13/§14 치명 0(ICM 재귀·四條 레드라인·이벤트 §14 사실 전수 EN 대조까지 병렬 안전망 완벽).
- **★pub 확정**: `holdem-pub-guide`는 **EN에 없음(KO 전용 필라)** → EN 유니버스 외, zh-hant 대상 아님(제외 확정).
- **⚠️ EN 마스터 검토 항목**(전 언어 소급): `wpt-australia-2026-guide` 본문 "36場" vs 賽程표 12場 불일치(完全賽程 총계 vs 重點賽事 표로 보이나 EN 원본이 애매 → EN에서 "重點 12場" 명기 or 표 확충, 수정 시 전 언어 동기화).
- **남은/다음 방향**: ① **타 언어 재경화**(es·pt·de·zh·id — EN 07-19 경화 미반영 stale, JA/zh-hant 방법론 재사용. ※rakko는 JA 전용, es/pt 등은 현지 서제스트/WebSearch로) ② **KO 본진 강화**(GSC 성과=ko 기준) ③ 신규 대만 winnable 독립글(梭哈 vs 德州撲克 差別·德州撲克 台灣 合法嗎) ④ zh-hant 소급(신규 형제 상호링크 여유 시).
- ★라이브이벤트 교훈: 세계대회는 지역색 아님 → 동일 번역. **§14 사실(날짜/바이인/GTD/場館/결과)은 EN 母稿 verbatim**(rakko/官網 2026 숫자로 갱신 금지=번역이지 업데이트 아님), TBA hedge 보존, 대만 현지화는 언어+검색어 H2+대만여행 앵글(K-ETA 등 母稿 사실 범위 내). [[apt-incheon-2026-post-event-asset]] 8/16 종료 후 결과 아카이브 예약 유효.
- ★교훈: 중문 롱테일 suggest=0(정량 null 반복 확인) → 부모 headline+**리서치 에이전트 경쟁사 FAQ 정성분석**이 winnable 주신호. 계산/사이징 무거운 클러스터도 편당 적대적 QA(수치·街라벨·비교예시·사이징 전수 재검산)로 §13 병렬 안전망 완벽 실증(확률6+전략5 = 11편 연속 치명0). ★대만稿 극薄 토픽(limping·when-to-fold)일수록 §13 정확성+통합 깊이로 winnable 큼.
- ★링크: 형제글이 배치로 다 생기므로 작가엔 "미존재로 간주, 링크 금지" 지시 → Phase3에서 앵커 정정+상호링크+필라역링크로 복원(이번: 全下→all-in·基本下注動作→betting-actions·strategy [3-bet]가 glossary→holdem-3bet). ★잔여 소소: 3bet의 CO 표기 `關煞位（cutoff）`는 glossary 교훈상 `切位（CO）` 영문주도 권장(다음 편집 시 정리, 현행도 허용).

### 🤖 병렬 오케스트레이션 워크플로 (사용자 확정 구조 — 룰 클러스터서 실증됨)
> 원칙: **한 클러스터군씩** 처리(전체 팬아웃 X). 작가 에이전트 1 + 적대적 대만 네이티브 QA 에이전트 1을 **짝**으로, 전체 오케스트=너.
- **Phase 1 — 리서치 (네가 중앙, 위임 X):** 그 클러스터군의 부모 키워드로 rakko `headline`(상위 H2 골격·경쟁사) + `suggest-keywords`(**부모 키워드 seoDifficulty 1회 확인** — winnable 확증용) + **리서치 서브에이전트로 WebSearch 경쟁사 FAQ 수집** → 편별 브리프(winnable FAQ 3~5개·대만 용어·존재하는 링크 대상). ★winnable 발굴은 네 판단이라 위임 금지.
- **Phase 2 — 병렬 (작가+QA 짝):** 편마다 작가 에이전트(general-purpose) 팬아웃 = EN 마스터(`lib/posts-en/<slug>.ts`)+용어은행(§7)+스타일레퍼런스(기존 zh-hant 글)+브리프+스펙으로 `lib/posts-zh-hant/<slug>.ts` 작성. 전원 완료 후 편마다 **적대적 대만 네이티브 QA 에이전트** 팬아웃(§13 전 예 재검산+용어+繁簡+링크+명사형H2).
- **Phase 3 — 통합 (네가):** ①7편 `lib/posts-zh-hant/index.ts` 등록 ②`npm run build`(422→회복 확인) ③QA 지적 일괄 수정 ④**링크 복원**(형제 클러스터가 이제 다 존재 → 상호링크 + 필라 역링크. 억지 X, EN parity) ⑤빌드 ⑥커밋·푸시 ⑦플랜 트래커·WORKLOG 갱신.
- **커밋/빌드는 직렬**(git·build 레이스 회피). 작가 프롬프트에 "index.ts·빌드·git 건드리지 마" 명시.

### ⛓️ 철칙 (절대 불변 — 어기면 치명)
1. **§13 = EN 마스터에서 그대로 이식, 재계산 금지.** 핸드예시·카드·확률·籌碼 산수 한 개도 바꾸지 말 것. 카드 `10`(T 금지)·무늬기호 ♠♥♦♣. 용어 오역이 족보/규칙 의미를 깨는지만 확인. **적대적 QA가 편마다 베스트5장+산수 전수 재검산**(이 안전망 덕에 병렬 7/7 통과).
2. **직역 아님 = 대만 현지 재저작.** H2는 **명사형**(영어식 질문형 H2 금지), 질문은 `## 常見問題 FAQ` 블록에만(`**Q. …？**`/`A.`). 中(英) 병기. 경험담은 대만 맥락(撲克室/現場局/家局), **없는 사실 창작 금지**.
3. **내부링크 = 존재하는 zh-hant 슬러그에만** `/zh-hant/blog/<slug>`(trailing slash 없음). 미존재는 텍스트, 클러스터 쌓이면 복원. `npm run build`의 check-intl-links가 미존재 링크 시 빌드 실패시킴.
4. **용어 = `docs/translation-terms-zh-hant.md §7` 용어은행 준수**(재사용·일관성). 이미지=18언어 공용(경로 동일·alt만 번체).
5. **자동배포 케이던스**([[en-hardening-autodeploy-cadence]]): 리서치 끝나면 작업→빌드→커밋→푸시 자동, 결과만 보고. 클러스터군 끝날 때마다 보고.

### 🔑 용어/표기 교훈 (QA서 실제로 잡힌 것 — 반복 금지)
- **CO/HJ/LJ는 영문 표제어 주도**(關煞位=대만 실사용 아님, glossary 검수 교훈). UTG/SB/BB는 한자 병기 OK.
- **數據庫→資料庫**(database), **對映→對應**, **弃→蓋/棄**, **概率→機率**, **筹码→籌碼**. 全下 표기에서 **「梭」 쓰지 말 것**(梭哈=Show Hand/Stud 혼동).
- 대만 특화 winnable(경쟁 공백)을 살려라: 水上/水下·台灣合法嗎·撲克協會·亮牌禮儀·奇數籌碼給誰·底牌無效 등 — 娛樂城 상위稿가 얇은 지점.

### 🔍 키워드 방법론 (2026-07-23 실측 확정)
- 중문 **디테일 롱테일은 rakko 정량 데이터가 거의 null**(예: 踢腳牌·平手·分池·攤牌 = seoDiff/vol null). suggest-keywords로 winnable 판정 불가한 영역.
- 그래서 **① 부모 키워드만 suggest로 seoDifficulty 1회**(winnable 확증: 德州撲克規則34·術語19·大小盲17 = 저경쟁 = 니치 진입가능) **② 디테일 winnable은 경쟁사 SERP/FAQ 정성 분석이 주신호**(리서치 에이전트). 정량 null이라고 winnable 없는 게 아님.

### 🎬 별건 — ★오늘(2026-07-23) 마감 임박
**레인지 영상 임베드**: ID `BdHjSUDoBow`, **2026-07-23 16:00 KST 예약공개**(오늘!). 공개 확인 후 `/blog/holdem-range-meaning` "실전 사례" 섹션 상단에 리드문+`:::youtube[BdHjSUDoBow]:::` 삽입(KO만 + VideoObject 스키마). 메모리 [[range-video-embed-pending]]. → 세션 시작 시 공개 여부부터 확인.

### 🟢 백로그
- 전 언어 공통: Day1 타임라인/체크리스트 등 EN 마스터 인라인 카드가 다크테마 스타일(rgba(255,255,255,.06)) → 현 크림/그린 라이트 테마서 테두리 흐림. 크로스랭귀지 일괄 수정 후보(스타일, 콘텐츠 아님).
- 소급: #3~#6은 winnable FAQ 보강 완료. 다른 필라도 여유 시 경쟁사 FAQ 재점검 가능.

---

## ▶▶▶ (이전) START HERE (2026-07-22 밤 — ★★ 번체(zh-hant·대만) 트랙 신설 + 족보 1편 배포. 다음 = 규칙부터 순서대로)

> ### 🚀 이 작업만 이어가려면 (한 줄)
> **`docs/zh-hant-plan.md` 읽고 번체 트랙 다음 순서(`texas-holdem-rules-for-beginners`)부터 이어서 진행해.** (플랜·진행트래커·워크플로우·용어·구조규칙 전부 그 문서에 있음)
>
> ### 배경 (왜 번체인가)
> 중국어 SEO 리서치(6에이전트 병렬) 결론: **구글에서 중국어권 = 번체·대만/홍콩**(본토는 구글 차단, 도달 불가). 현재 `/zh/`는 **100% 간체**라 구글 미도달 시장을 최적화 중 → **번체 신규 트랙 `/zh-hant/`를 병행 구축**(간체 zh는 그대로 둠). 사용자 확정: 파일럿 없이 **필라 순서대로 쭉 진행**. 상세 = 메모리 [[chinese-seo-traditional-taiwan-first]].
>
> ### ✅ 이번 세션 완료 (번체)
> - **인프라**: `zh-hant` 로케일 신설 — `lib/intl.ts`(SECONDARY_LOCALES + OG/HTML_LANG/POST_LABELS/CHROME/NAV 6맵) · `lib/posts-zh-hant/` · `lib/intl-posts.ts` · `app/zh-hant/**`(3라우트) · `globals.css` CJK 줄바꿈(`[lang="zh-hant"]`). hreflang=**zh-Hant**, og=zh_TW. `scripts/check-intl-links.mjs` 정규식 하이픈 로케일 지원.
> - **족보 1편 배포** `e9dcf26`: `/zh-hant/blog/holdem-hand-rankings`. EN 마스터 재저작 + 대만 실측구조. **적대적 대만 네이티브 검수로 §13 오류 1건 잡아 수정**(練習3 "A→四條K" 오류).
> - **문서**: `docs/zh-hant-plan.md`(플랜+트래커) · `docs/translation-terms-zh-hant.md`(용어브리프) · `docs/zh-hant-search-behavior-report.md`(검색행태 리서치).
>
> ### ⏭️ 다음 (번체, 순서대로) — `docs/zh-hant-plan.md §5 트래커` 기준
> **✅✅✅ 번체 9개 필라 전부 완주**(2026-07-22). #1 hand-rankings · #2 rules · #3 probability · #4 starting-hands-chart · #5 position-play · #6 pot-odds · #7 glossary · #8 strategy · #9 `holdem-tournament`(錦標賽). #3~#6 소급 winnable FAQ 보강 완료. **전부 적대적 대만 네이티브 검수 §13 통과.**
> ### ✅ 룰 클러스터 7편 완주(2026-07-22, 병렬 오케스트레이션) — betting-actions·blind-meaning·all-in-rules·showdown-rules·tiebreak-rules·kicker·split-pot-rules. §13 7편 전부 통과. zh-hant 현재 **16편**(필라9+룰7). 상호링크+필라 역링크 복원.
> ### ⏭️ 다음 = **다음 클러스터군** (`docs/zh-hant-plan.md §5`: 확률 클러스터[outs·drawing-odds·equity·implied-odds·reading-the-board·flush-vs-straight] / 전략[3bet·continuation-bet·limping·when-to-fold·game-order] / 토너먼트[tvc·bubble·icm·short-stack] / 용어·문화[bad-beat·cooler·fish·rake·straddle·card-counting]). **한 클러스터군 완주→다음** 방식.
> ### 🤖 병렬 오케스트레이션 워크플로(확립·재사용): Phase1 리서치=내가 중앙(rakko headline+경쟁강도 + 리서치에이전트 경쟁사FAQ → 편별 브리프) → Phase2 병렬(작가에이전트+적대적 대만네이티브QA에이전트 짝, 편당 §13 전예 재검산) → Phase3 나=index등록·빌드·**링크복원**(형제글 존재분 상호+필라 역링크)·QA수정 일괄·커밋. ★§13 안전망은 병렬에서도 완벽 작동 실증(7/7 통과).
> ### ★워크플로우(확립): rakko headline+`suggest-keywords`(경쟁강도 seoDifficulty) + **WebSearch 여러 곳**(현지 실제 용어·문구·경쟁사 FAQ 실측) → winnable을 FAQ/H2에 정면 배치, 니어제로는 본문 흡수 → `docs/translation-terms-zh-hant.md §7`에 용어은행 축적 → 재저작(§13 불변·명사형 H2·질문 FAQ격리·中英병기) → 적대적 대만 네이티브 검수 → 빌드·커밋·자동배포.
> ### 🟢 백로그(전 언어 공통): Day1 타임라인/체크리스트 등 EN 마스터 인라인 카드가 **다크테마 스타일**(rgba(255,255,255,.06) 등) → 현 크림/그린 라이트 테마에서 테두리 흐림. 크로스랭귀지 일괄 수정 태스크 후보(콘텐츠 아닌 스타일).
> ★zh-hant 존재 글 7편(hand-rankings·rules·probability·starting-hands-chart·position-play·pot-odds·glossary). 신규 글 내부링크 EN parity 근접.
> ★★리서치 워크플로우(사용자 확정): rakko headline + `suggest-keywords`(**경쟁강도 seoDifficulty 체크**) + **WebSearch 여러 곳(현지 실제 용어·문구 겹침 반영)** → `docs/translation-terms-zh-hant.md §7`에 용어은행 축적(재사용). ★CO/HJ/LJ는 **영문 표제어 주도**(關煞位=대만 실사용 아님, 글로서리 검수 교훈).
> ★내부링크: zh-hant 존재 글이 늘수록(현재 hand-rankings·rules·probability 3편) 신규 글에서 링크 가능. 형제글 없는 것은 텍스트, 클러스터 후 복원.
> ★현지 리서치는 매 편 `docs/translation-terms-zh-hant.md §7`에 축적(rakko headline+SERP 용어·H1/H2 패턴 — 신규 포스팅 재사용). 娛樂城 상위글 얇음=§13 정확성 차별화 기회.
>
> ### 📋 편당 워크플로우 (필수·건너뛰기 금지)
> 1. **현지 구글글 3편 정독**(WebFetch) + **rakko**(`headline`=상위 H2골격, `suggest-keywords`, `co-occurrence`) + **WebSearch** SERP/경쟁 실측 → 용어·구조 분석 (`docs/translation-terms-zh-hant.md`에 축적)
> 2. **소스 = EN 마스터**(`lib/posts-en/<slug>.ts`) 재저작(직역 X)
> 3. **대만 실측 구조**: 【태그】+시간약속(5分鐘/一次看) 제목 · **명사형 토픽 H2** · **질문은 `常見問題 FAQ` 블록에만**(영어식 질문형 H2 금지) · 中(英)병기 · 족보=번호리스트 · 롱폼. §13 핸드계산 **불변**(EN 복사·재계산X, 단 용어가 의미 깨는지 확인)
> 4. **적대적 대만 네이티브 검수**(Agent, "대만 현지 포커 전문가" 페르소나) → 🔴 수정
> 5. 빌드→커밋→푸시(글별 자동배포)→트래커+WORKLOG 갱신. **필라 끝날 때마다 보고.**
>
> ### ⚠️ 함정/주의
> - **zh-hant 내부 블로그 링크는 반드시 `/zh-hant/blog/<슬러그>` + 대상 실존**(check-intl-links가 이제 검증). 첫 글은 형제글이 없어 **내부 블로그 링크 0개** — 클러스터 쌓이면 **링크 복원 패스**로 EN parity 맞출 것([[translation-link-structure-equals-en]]).
> - 이미지는 18언어 공용(같은 경로, alt만 번체). 카드표기 **10**(T 금지)·무늬기호.
> - 모델분담 [[translation-model-roles-workflow]]: 번역·QA=Opus(재계산X), §13검증은 EN 1회.
>
> ### 🎬 별건 대기 (놓치지 말 것)
> **레인지 영상 임베드** — ID `BdHjSUDoBow`, **2026-07-23 16:00 KST 예약공개**(그 전 비공개). 공개 후 `/blog/holdem-range-meaning` "실전 사례" 섹션 상단에 리드문+`:::youtube[BdHjSUDoBow]:::` 삽입(KO만+VideoObject). 메모리 [[range-video-embed-pending]].
>
> ### 그 외 이번 세션 완료(배포됨)
> - 블러핑 글 `d9b3276`: 붓터치 하이라이트 남발(7문장) 정리 + 인라인 썸네일 링크 2개(규칙 누락 지적 반영).
> - 홈 "이번 주 인기글" `66d956e`: 블러핑 글 1번 고정 + 커뮤니티 채팅글 제외(`getTrending` type≠community + TRENDING_PIN_SLUG).
> - 레인지 글 `c4430dc`: "실전 사례 — 안토니우스 vs 무스타포프 바텀페어 히어로콜" 섹션 신설(영상팀 리서치 `Downloads/유튜브/포스팅_강화자료.md` Hand B) + 블러핑↔레인지 상호링크.

## ▶▶▶ (이전) START HERE (2026-07-22 — ★신규 도구/UX + 대회 포스팅 최신성 감사)

> **오늘 한 일(2026-07-22)**:
> 1. **`/ranking`·`/en/ranking` 정직 리팩터** — 거짓 "직접 검증"·죽은링크·가짜별점 제거 + 정확 정보(웹검증)·실제 공식링크(nofollow)·안전기준·먹튀경고·책임게임(1336)·FAQ스키마. EN은 글로벌 프레이밍(BeGambleAware)·한국전용자산 제외. (관련 [[seo-tool-vs-blog-cannibalization]])
> 2. **승률 시뮬레이터 신설 `/win-rate-quiz`** — 2~4인 멀티웨이, 카드 공개마다 각자 실제 승률(플랍/턴/리버 완전열거·프리플랍 MC 100k), 오벌 포커테이블 UI, 현재 족보/드로우 라벨. §13 독립검증(score5fast≡score5 259만조합 전수·AA vs KK 82.6%·멀티웨이 스플릿). 노출: 나브 🃏퀴즈 드롭다운·푸터·홈 사이드바/피드·채팅칩·/ranking. 사이트맵 등록.
>    - 엔진: `app/win-rate-quiz/_equity.ts`. 다음 진화 후보(논의됨): 핸드 vs **레인지** / 팟오즈 콜폴드 결정(벤치마크 Equilab·ThinkGTO·pokeroddsiq).
> 3. **커스텀 스킬 3개**(`.claude/skills/`: review-post·translate-pillar·new-post) + **Playwright 브라우저 MCP**(`.mcp.json`) 신설 — ★재시작 후 활성화(승인 프롬프트). 미커밋.
> 4. **대회 포스팅 최신성 감사**(부재중 자율): WSOP·APT 인천·APPT·APT 제주 4편 웹현행화 + 적대적 팩트체크 에이전트 2회. **적대적 검수가 실오류 2건 방지**(APT제주 종료일 10/7·WSOP ME파이널 8/3~5 진행중). WORKLOG 2026-07-22 상세.
>
> ### ▶▶ 다음 세션 후보
> - **(A) 승률 시뮬레이터 다음 기능**: 핸드 vs 레인지 / 팟오즈 결정 모드(사용자 관심).
> - **(B) 대회 포스팅 잔여**: how-to글(schedule-check·buy-in·tax·how-to-enter) + EN 이벤트가이드(korea-marathon·wpt-australia·ept-barcelona) 동기화. APPT ME바이인(180만)·GTD·APT제주 ME는 공식 미발표 → 발표 시 재확인.
> - **(C) 다른 구언어 재경화**(es·pt·de·zh·id) · **(D) 마케팅**(유튜브 임베드 `docs/video-embed-playbook.md`).

## ▶▶▶ (이전) START HERE (2026-07-20 심야 — ★★★★JA glossary 6/6 + card-counting 완주 → **JA 42/42 = EN 마스터 전체 완결**, 다음 = 다른 언어 재경화 or 마케팅)

> ✅✅✅ **JA 완결.** rankings 6 + odds 6 + strategy 8 + rules 6 + tournament 9 + **glossary 6 + card-counting 1** = **JA 42/42 = EN 마스터 유니버스 전체**. 잔여 부채 없음.
> - **이번 세션 glossary 7편**: glossary `97cd7e2` · straddle `2c9204a` · rake `fce2a55` · fish `17e6fe6` · cooler `936adfa` · bad-beat `2ca9874` · card-counting `9743817`. 검수반영 `22100f3`.
> - **워크플로우(사용자 확정, 이번 세션 전편 준수)**: EN 경화본을 뼈대로 → ①ラッコ(suggest·question·headline) + 일본 SERP 웹검색으로 winnable 롱테일 발굴 ②EN 07-19 경화 누락분 §14 동기화(FAQ·용어·**도입부 링크**) ③**데이터 뒷받침되는 진짜 gap만 신규 FAQ**(억지 금지) ④§13 감사대조 ⑤dates→빌드→커밋→푸시(글마다 자동배포).
> - **★이번 세션 신규 winnable FAQ**(데이터 뒷받침): straddle「ストラドルされたら対策」(경쟁사 다수 커버) · rake「レーキとアンティの違い」(question 2회) · cc「カウンティングの映画」(question「映画は?」). 나머지 니치 토픽(cooler·fish·bad-beat)은 억지 없이 스킵.
> - **★공통 결함 패턴**: 07-04~08 번역본은 EN 07-19 경화 이전이라 **도입부 glossary 링크(+thumb)가 누락**돼 있었음(rake·fish·cooler·bad-beat 4편 복원). **다음 언어 재경화 시에도 이 링크 누락 전수 점검 필수.**
> - ✅ **적대적 네이티브 검수**([[ja-adversarial-native-review]], 2병렬): §13 수치 전수 손계산=실오류 0(셋오버셋 11.76%·1.04%, KK vs AA 4.52:1, 9아웃 34.97%, 블로커 16→12, 馬渕 WSOP2008 史実 일치). **🔴1건=bad-beat "クアッドエース=2番目に強い手"**(포카드는 3번째 카테고리 = 사실오류, EN 원문은 `only a straight flush can beat`로 정확) → JA 의역 오류였음, EN 정합으로 정정. 🟠 표기통일(コールドデッキ)·スピュー·文体통일.
> - ✅ **다른 언어 quad aces 오역 전수 점검·수정 완료** `7ad2ee5`: es/pt/de/zh/id **5개 언어 전부** bad-beat FAQ에서 "quad aces=2番目/segunda/第二强/zweitstärkste" 동일 의역 확인 → EN 정합(straight flush 카테고리)으로 정정. 부수로 FAQ m1 "royal flush만 이김"→"straight flush"도 정밀화. 본문 ceiling은 정확이라 무변경. EN 원문은 정확. **→ 교훈: EN 자체는 맞아도 번역본이 공통 의역 오류를 낼 수 있음, 다른 언어 재경화 시 §13 표현도 대조 필수.**
>
> ### ▶▶ 다음 세션 후보
> - **(A) 다른 구언어 재경화**: es·pt·de·zh·id도 EN 07-19 경화 **미반영 stale**(도입부 링크 누락·경화 winnable FAQ 미반영·§13 quad-aces 의역 가능성). JA와 동일 방법론으로 ES부터. 단 ラッコ는 JA 전용 → es/pt 등은 현지 서제스트툴/WebSearch로.
> - **(B) 마케팅 플랜 논의**(2026-07-16 예정분, 유튜브 프레임 제외 백지에서) — 아래 블록.
> - **(C) KO 본진 강화**(GSC 성과=ko 기준, 족보 카니발 승계·GEO 확장).
> - 사용자에게 다음 방향 확인 후 착수.

## ▶▶▶ (이전) START HERE (2026-07-20 심야 — ★★★JA tournament 9/9 완주 → JA 35/42, 다음 = glossary 6 (+card-counting))

> ✅ **tournament 필라 9/9 완주.** rankings 6 + odds 6 + strategy 8 + rules 6 + **tournament 9** = **JA 35/42**. 남은 = **glossary 6**(holdem-glossary·straddle·rake·fish·cooler·bad-beat) + 독립글 card-counting 1.
> - 이번 세션 tournament 7편(허브·icm는 이전): bubble `29ad2eb`·`71668e3` / short-stack `6071cdf` / tvc `0a336e2` / apt-incheon `0dce185` / korea-marathon `8f5b087` / wpt-australia `1936f7a` / ept-barcelona `ead25eb`. 검수반영 `467dc79`.
> - ★★**워크플로우 확정(사용자 지시)**: **글마다 착수 전 웹검색 4개 + ラッコ**로 SERP 분석 후 작성. "서치 4개=웹검색"(경쟁 상위글 분석), ラッ코=별개 키워드 발굴. **ラッ코는 리치 토픽에 집중**(저볼륨 토픽은 headline만, suggest/question 스킵 가능 — bubble에서 실증). glossary는 용어별 볼륨 편차 크니 토픽마다 판단.
> - ★**라이브이벤트 §14 교훈**: JA masterUpdated 07-03 구버전이라 EN 07-19 Fable5 검수본과 **stale 다수**였음(K-ETA 오안내·송금 계좌공개·시트수·2023데이터·AJPC 날짜). **번역 착수 전 EN `updated` vs JA `masterUpdated` 비교** → 07-19 이후면 §14 전수 대조. 시간민감 status(마감·매진)는 웹검색 실검증.
> - ★**EN 마스터 결함→전 언어 소급 패턴**: 번역 중 EN 자체 오류 발견 시 **전 언어 일괄 정합** 필요. 이번 AJPC 12월날짜(`3ce3891`)·송금 계좌공개(`e756a2e`) 완료.
> - ✅ **적대적 네이티브 검수 통과**([[ja-adversarial-native-review]], 2병렬 Agent): §13 계산(버블팩터·M値/CSI 전수검산)·§14 사실 실오류 0. 🔴1·🟠6 반영완료.
> - ✅ **JTBC 접수기한 오도 전 언어 정합 완료**(ja `467dc79` + en·es·pt·de·id·zh `03334bc`): "closes Sep 4"=취소·환불기한(접수마감 아님)·추첨/조기완판 → "早期完売·公式확인" 헤지로 통일. 저순위 잔여(다음 세션 여유 시): T2 게이트 2A/4A 공식 재확인·YTN 9/6 공식 재확인.

## ▶▶▶ (이전) START HERE (2026-07-20 밤 — ★★★JA 20/42: strategy 필라 8/8 완주 → 다음 = rules 6 or tournament 9 or glossary 6)

> ✅ **JA odds 6/6 + strategy 8/8 완주.** rankings 6 + odds 6 + strategy 8 = **JA 20/42**. 남은 22편 = rules 6 + tournament 9 + glossary 6.
> - **strategy 8편**(strategy 허브·positions·position-play·starting-hands-chart·limping·3bet·continuation-bet·when-to-fold): 커밋 `6b9db25`·`03f321d`·`112699e`·`dcfd91b`·`c60fc0b`·`a229ace`·`2552452`·`3fc016c`.
> - ★★**사용자 지시(2026-07-20) = 글마다 착수 전 구글검색으로 상위 3편 분석·참조하며 작성**([[translation-local-research-first]] 강화). 이번 세션 전부 준수: 각 글 WebSearch(일본 SERP) + ラッコ headline(경쟁 見出し 정답지)로 상위 3편 분석 → H2가 이미 검색형이면 확인만, winnable 앵글이 명확하면 H2 강화(예: strategy "6つの漏れ"→"勝てない人の6つの特徴", positions "名前と略称"→"正式名称一覧").
> - **작업 성격**: strategy 전편 pre-hardening(07-05~07-11)이나 **본문·§13·H2 이미 양질**. 실작업 = **07-18/19 경화 EN에 추가된 winnable FAQ 번역삽입 + §13 감사대조 + dates**. FAQ 추가: strategy +3(運か実力·GTOウィザード·上達), position-play +2, limping +1, 3bet +2(4벳/5벳), continuation-bet +1(バリューベット), when-to-fold +1. positions·starting-hands-chart는 이미 완전 패리티(무변경 or masterUpdated만).
> - **§13 전수 재검산 = 실오류 0건**. strategy 핸드예시(A♣K♣·A♠Q♠ TPTK·A♥K♣ 투페어)·수치(80% fold·11.8% set·c-bet 60-80%·3bet 3x/4x·MDF·팟오즈 25/33%) 전부 EN 일치.
>
> ### ▶▶ ✅ rules 필라 6/6 완료 (JA 21/42) → 적대적 검수 진행중 → 다음 = tournament 9 / glossary 6
- ✅ **rules 6편 완료**: 허브(チップなし신규H2 `a0bad4f`)·showdown(順番 210vol 헤딩강화 `dbb2f33`)·betting(チェックジェスチャー FAQ `dbb2f33`)·all-in(オールイン足りない FAQ `dbb2f33`)·game-order(gap없음 스킵)·blind(タイマー=툴, gap없음 스킵). 전편 §13 0오류, EN 패리티 확인.
- ✅ **작업종료 적대적 검수 완료**(사용자 지시 [[ja-adversarial-native-review]]): 일본 현지 홀덤전문가 페르소나 검수 결과 **🔴 치명 0건**(§13·사이드팟 4인검산·올인반환·팟오즈·핸드예시 전부 재검산 합격, 일본어 자연스러움·용어·합법주석 문제없음). **🟠 2건 수정 배포 `374c122`**: betting 체크 "2回叩く"→회수규정 없음, texas 최소스트레이트 문구 명확화. **신규 JA오리지널 콘텐츠 사실성 검증 통과.**
- masterUpdated 신설: rules 대부분 07-19(betting=07-11). game-order·blind은 콘텐츠 무변경이라 masterUpdated 미추가(추후 여유 시).

### ▶▶ 진행중 = tournament 필라 (JA) 2/9 → 다음 = bubble·short-stack·tvc + 라이브이벤트 4편
- ✅ **tournament 허브** `c58634b`(FAQ+2: 収益·運と実力) · **icm** `b1e2dcc`(FAQ+1: よくあるミス). 둘 다 H2 경쟁 초과커버라 신규H2 불필요, FAQ 동기화+dates.
- ★표기 확인됨: ICM/MTT/SNG/GTO=라틴, M値=한자, スチール/リスチール=카타카나([[ja-term-notation-search-match]]).
- 남은 tournament: **holdem-bubble·holdem-short-stack·holdem-tournament-vs-cash-game** (전략) + **라이브이벤트 4편**(apt-incheon·korea-poker-marathon·wpt-australia·ept-barcelona) ⚠️§14 사실(날짜·바이인·운영사) EN 값 그대로, 지역/이벤트 키워드(パラダイスシティ 140·韓国2026 50 등 ラッコ 확인)로 winnable 여지.
- ★short-stack 착수 시: `M値`/`CSI`(pokerdou·poker-picks 랭크)·`プッシュフォールド` 표기·gap 확인(허브에서 킵한 토픽).
- 그다음 glossary 6.
- ★**tournament 클러스터 종료 시 적대적 네이티브 검수**([[ja-adversarial-native-review]]) 필수(특히 라이브이벤트 §14 사실).
> - **rules 6**: texas-holdem-rules-for-beginners(허브)·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules. (rules는 07-17에 EN 경험담만, 원하면 H2질문화+FAQ 재패스 여지 — masterUpdated 확인.)
> - **tournament 9**: holdem-tournament·holdem-icm·holdem-bubble·holdem-short-stack·tournament-vs-cash-game + 라이브이벤트 4편(apt-incheon·korea-poker-marathon·wpt-australia·ept-barcelona). ⚠️이벤트 4편은 §14 사실(날짜·바이인·운영사) EN 값 그대로.
> - **glossary 6**: holdem-glossary·holdem-straddle·holdem-rake·holdem-fish·holdem-cooler·holdem-bad-beat.
> - ★★**워크플로우 업그레이드(2026-07-20 사용자 지시 [[translation-ja-longtail-new-h2]])**: ①ラッコ `suggest-keywords`(searchVolume·competition·seoDifficulty; ★seoDifficulty 종종 null→SERP실측으로 판단) + `question-search`(질문형 롱테일) + `related-keywords` + `headline`(경쟁 見出し) + WebSearch(SERP약점: 知恵袋/note/저DA 상위=winnable) ②각 JA vs EN 대조 ③FAQ 패리티(경화 추가분 번역삽입) ④§13 감사대조 ⑤**★신규 H2 추가**: ラッコ에서 검색량 있고 경쟁 약하고(SERP실측) 기존 H2/FAQ 미커버인 winnable 롱테일 발견 시 EN에 없어도 신규 H2 섹션 추가(Q-A-E·§13정확). **★억지 삽입 절대 금지 — 데이터가 뒷받침하는 진짜 gap만**(신생사이트 철저 롱테일전략). ⑥dates ⑦빌드→커밋→푸시.
> - ✅ **신규 H2 첫 적용**: strategy허브 `33f5e4e`(必勝法: 勝ち方 590vol/난이도34·"必ず勝つ方法" question-search) · when-to-fold `49f80f8`(フォールドばかり 50vol/경쟁0). チェックフォールド(10vol)는 니치라 스킵.
> - ✅ **소급(retrofit) 완료(2026-07-20)** — 완료 14편 전부 ラッコ 롱테일 재마이닝. **데이터 뒷받침되는 것만 추가(억지 X)**: strategy허브 必勝法(`33f5e4e`)·when-to-fold フォールドばかり 50vol(`49f80f8`)·pot-odds 必要勝率 170vol 헤딩강화(`428ca7c`)·starting-hands-chart **ハンドレンジ表の覚え方** 90vol신규H2(`bf66675`, ハンドレンジ 1600vol/ヨコサワ 포착). **나머지는 이미 메인키워드 헤딩 포착돼 gap 없음→스킵**: outs(アウツとは140✓)·drawing-odds(セット確率✓)·implied-odds(니치)·equity(エクイティとは260/diff18✓)·positions(正式名称一覧✓)·position-play(インポジション110✓)·limping(リンプ対策20/covered)·3bet(対策0)·continuation-bet(cベット10). ★교훈: odds/positions 클러스터는 이미 잘 지어져 소급 여지 적음, starting-hands류 리치토픽에 gap 많음.
> - ⚠️ §13(카드·확률·계산) 불변. **이미지·slug·`/ja/blog/` 내부링크만 EN 1:1 유지(H2는 이제 JA SERP 독립, [[translation-link-structure-equals-en]]는 링크에 한정)**. 착수 전 masterUpdated로 경화여부 확인(07-19=FAQ 동기화 필요).

## ▶▶▶ (이전) START HERE (2026-07-20 — ★★★JA 번역 경화 진행중 2/42 + ラッコ MCP 연결완료 → 다음 = rankings 클러스터 이어서)

> ✅ **JA 번역 경화 방법론 확립·검증 완료.** EN 마스터(42편)는 완결·Fable5 검수 락. 이제 **JA부터 언어별 경화** 중. 파일럿 2편 배포: `holdem-hand-rankings`(`99ebed0`)·`holdem-flush-vs-straight`(`ca16b71`).
>
> ### ▶▶ ★핵심 방법론 (읽는 순서: 이 블록 → `docs/translation-terms-ja.md` 「★H2 검색형 로컬라이즈」 → `docs/translation-spec.md`)
> - **원칙**: EN 질문형 H2 직역 금지. **본문 프로즈는 경화 EN 양질 번역 유지**, **H2·title·seoTitle·tags만 JA 실검색형으로 교체** + 감사동기화 + 경험담 1인칭. (현 JA 대부분 pre-hardening 번역이라 감사수정 stale → 동기화 필수.)
> - **🔌 ラッコキーワード MCP 연결됨**(세션 시작 시 자동 로드): 도구 `mcp__rakko__suggest-keywords`(볼륨·SEO難易度)·`question-search`(질문형)·`headline`(경쟁 상위 見出し=정답지) 등 21개. ★도구 안 뜨면 ToolSearch로 `mcp__rakko__` 로드. 연결정보=`.claude.json`(로컬), 인증 `X-API-Key`. 크레딧 1.5배·레이트 60/60초. [[translation-h2-localization-strategy]]
> - **글당 워크플로우**: ①ラッコ suggest+question+headline(핵심 JA KW, ~7.5크레딧) ②WebSearch 2~3(톤·패턴·SERP약점: 1페이지에 知恵袋/note/저DA 있으면 winnable) ③H2 검색형(마법접미사 一覧/早見表/強い順/成立条件/とは/どっちが強い/覚え方…) ④§13/감사 동기화 ⑤경험담 1인칭 ⑥Q-A-E FAQ 상위 질문형 ⑦빌드→커밋→푸시(글별 자동배포).
> - **★작업량 예측**: `masterUpdated` 날짜로 판단. **pre-07-03 번역**(hand-rankings류)=에디토리얼 H2 전면 재설계(큼). **07-11 이후 번역**(flush-vs-straight류)=검색형 H2 대부분 보유, 감사동기화+미세보강만(작음). 착수 전 각 JA 파일 masterUpdated 확인.
> - **winnability 패턴**: 헤드(役一覧류)=미디어(ABEMA·Wikipedia·mpj) 지배=경쟁. 롱테일 질문(同じ役/どっち強い/役なし)=知恵袋/note 약점=우리 몫.
>
> ### ▶▶ 진행현황: JA 7/42 (★rankings 6/6 + odds 허브 완료) → 다음 = pot-odds
> - ✅ **rankings 6/6**: hand-rankings(`99ebed0`·전면)·flush-vs-straight(`ca16b71`)·kicker(`1ac10c2`)·tiebreak(`0bccfe0`)·split-pot+reading-board(`936ce0e`). ✅ **odds 1/6**: probability(`7b478de`). **교훈 실증**: 07-03 번역만 무거움, 07-11 번역은 H2 이미 검색형이라 §13 감사동기화+dates만(일부 무변경).
> - **다음 = odds 클러스터 남은 5편**: **pot-odds** → outs → drawing-odds → implied-odds → equity. ラッ코 시드: `ポーカー ポットオッズ`·`ポーカー アウツ`·`ポーカー オッズ ドロー`·`インプライドオッズ`·`ポーカー エクイティ`. ⚠️ **odds는 §13 수치 최다 → EN Fable5 감사수정 동기화 필수**: implied-odds FAQ 공식 `−(pot+call)`·outs "19.6%→19.1%"(9/47 턴)·probability "1 in 407→408"(완료). 각 파일 대조.
> - 그다음 필라: rules·strategy·tournament·glossary. 전 42편 = EN 마스터 유니버스. 착수 전 각 파일 masterUpdated 확인(pre-07-03=큼, 07-11+=작음).
> - ⚠️ §13(카드·확률·계산) 불변. 이미지·slug·`/ja/blog/` 링크 구조 EN 1:1 유지(count 패리티 [[translation-link-structure-equals-en]]).

## ▶▶▶ (이전) START HERE (2026-07-19 — ★★★EN 마스터 42편 완결 + Fable5 최종검수 락 완료 → 다음 = 번역(JA부터))

> ✅✅✅ **EN 마스터 완결.** 6필라(rules·rankings·odds·strategy·tournament·glossary) 전편 AI시대 경화(경험담+GEO winnable FAQ+H2질문화) + glossary 클러스터 역링크 루프 완결 + 독립글(positions·starting-hands-chart·card-counting) 확인. 그 후 **Fable5 8병렬 검수관 최종 정밀검수**(적대적 §13·수학 재계산·크로스문서·팩트체크) → **4배치 수정 배포**(`ec11984`·`992982d`·`3db7238`·`910f6f9`). 상세 WORKLOG 2026-07-19 최상단.
>
> - **검수 결과**: 콘텐츠 6필라 42편 §13 핸드·수학 실오류 **0건**(치명은 문구/공식/족보표현 6건, 전부 수정). 이벤트 4편은 **WebSearch 딥서치**로 팩트 재확인(은행계좌 안전화·K-ETA 면제+₩10,000·Champions Cup 자격·춘천 등록상태 등). 검증불가는 공식출처 안내로 처리.
> - **미결(외부확인 잔여)**: apt Natural8 스텝금액($3.50→$20 미반영, 시트수만 수정)·JTBC 참가규모·이벤트 2026 세부일정(공식 브로슈어 확정 시)·이벤트 클러스터 고아상태(별도 Events 필라 `_saved-tournament-schedule-events.md`).
>
> ### ▶▶ 다음 = 번역 트랙 (JA부터, 언어×전필라)
> - **읽는 순서**: `docs/translation-spec.md` → `docs/translation-terms-ja.md` → 이 파일. 파이프라인은 아래 2026-07-13 ja 완성 블록 참조.
> - ★**착수 전 현지 실검색 롱테일 리서치 필수**([[translation-local-research-first]]·[[translation-is-contextual-reposting]]). EN=마스터, 번역=현지 맥락 재저작(§13만 불변).
> - ⚠️ **구 번역(ja 등)은 stale** — 이번 경화·검수 완료본(경험담·winnable FAQ·§13수정) 미반영 → 재번역/재검수 대상. 모델분담 [[translation-model-roles-workflow]].
> - 대안 트랙: 별도 Events/일정 필라(홀덤대회일정 KO 1등, [[tournament-schedule-local-intent-keep]]) · 홈게임 가이드 등 니치(`_niche-opportunities.md`).

## ▶▶▶ (이전) START HERE (2026-07-18 — ★★★EN 마스터 경화 = 경험담 + AI시대 GEO(H2 롱테일 질문화) / ✅rules·rankings·odds 3필라(18편) 완료 → 다음=strategy)

> ★★★**다음 세션 주제 = EN 마스터 전수검사 후 경화**(사용자 확정, "포스팅 하나하나를 제대로"). **A안**: EN 6필라 전부 정비 → 그 다음에야 번역(JA부터). 번역 속도보다 **디테일 우선**("나 목숨걸었어"). 규칙은 오늘 갱신한 `.cursor/rules/posting.mdc` §E-E-A-T "★EN 마스터 경화 = 경험담 + AI시대 GEO 재정비" + §GEO "🆕 2026-07-18 최신 실증 데이터" 참조.

### ▶▶ 무엇을 / 왜 (★2026-07-18 오후 스코프 확장 — 사용자 확정)
- **왜**: EN은 **구조·GEO·§13·롱테일 H2 골격이 이미 최상**인데 **①1인칭 경험담(E-E-A-T)이 사실상 0** + **②AI시대(2026) 검색이 "랭킹→인용"으로 이동**. 이번 pass는 경험담만이 아니라 **AI시대 전략으로 함께 재정비**(사용자 "이왕 전수조사하는 김에"). 근거(오늘 리서치, posting.mdc §GEO 반영): 1인칭 경험 = 지금 **직접 클릭 드라이버**(AI Overview 인용 96%가 E-E-A-T 신호, 구글이 1인칭에 별도 영역). Query fan-out 서브질문 커버 시 인용 **+161%**. 인용 62%가 top-10 밖(신생에 유리). EN은 24언어 마스터라 24배 전파.
- **무엇**(4종 세트로 확장): 각 글에 ①**1인칭 실무자 경험담 주입**(추출가능형: 첫 문장 직답·구체 숫자/고유명사) ②**H2 소제목을 키워드뱅크 롱테일 질문형으로 수정**(신생·영어권 경쟁과다 → 메인키워드 포기, **철저히 롱테일**. `docs/keyword-bank/`의 SS 경쟁강도·LDA로 약한 것 우선. 족보=`en-what-beats.md`·`en-glossary-what-is-a.md`·`en-odds-of.md`) ③그 **섹션 단락을 질문 직답(40~75단어) 구조로 재정비**(Q-A-E) ④비교·수치는 **표/숫자+연도+출처**.
- **불변(절대 안 건드림)**: §13 핸드예시·검증된 사실·**slug/URL**·이미지·핵심 구조. **바꾸는 건 H2 문구 + 그 섹션 본문 + 경험담**뿐(slug 불변이라 SEO 리스크 0).
- **규칙**: seoTitle(EN ≤60자)·`updated` 갱신·편마다 빌드·커밋. 착수 전 각 글 1인칭 신호 grep(이미 강하면 경험담 스킵) + **키워드뱅크 먼저 읽기**.

### ✅ 완료 = EN 3필라 18편 경화 (rules 6 + rankings 6 + odds 6)
- **rules 6**(07-17): texas-holdem-rules-for-beginners 허브 등 경험담 주입(`betting-actions`는 이미 강함→무변경).
- **rankings 6**(07-18): hand-rankings·flush-vs-straight·kicker·reading-the-board·tiebreak·split-pot. H2 질문화 + winnable FAQ 대량 흡수.
- **odds 6**(07-18): probability·pot-odds·outs·drawing-odds·implied-odds·equity. winnable FAQ 흡수(EV·gutshot·quad aces 등).
- 전편 **§13 핸드예시·검수된 계산·slug·이미지·구조 불변**(사용자 "계산 건들지 마, 검수 여러 번 함"). 경험담 이미 강한 글은 스킵.

### ★★ 이번에 확립한 워크플로우 (다음 필라도 이대로 — 반드시 준수)
1. **키워드 = lowfruits 협업**: 사용자가 시드별 export → 내가 PowerShell로 xlsx 파싱(Python無, 메모리 [[lowfruits-xlsx-parse-workflow]]) → winnable 추출(WS3≥1/LowDA≤30)+노이즈필터 → **내 WebSearch PAA와 교차(필수)** → 억지 없이 진짜 저경쟁 롱테일만 FAQ/H2. ★**PAA는 Questions 탭에 이미 "question"으로 포함**됨(All은 PAA 미포함, 별도 PAA탭 단독export는 미분석 노이즈).
2. ★**시드는 poker 앵커 필수**(reading the board=체스·drawing odds=사냥·runner runner=영화·outs=야구·equity=금융·implied odds=스포츠베팅에 오염).
3. **배포=자동**(단 글별 리서치 완료+사용자 "작성하자" 후. 리서치 중간 배포 금지 [[en-hardening-autodeploy-cadence]]). 편집→빌드→커밋→푸시→결과보고.
4. **틈새 포착**(사용자 방침 "틈새시장 잘 봐라"): 저경쟁 오프토픽/도구 기회는 버리지 말고 `docs/keyword-bank/_niche-opportunities.md`·`_saved-sports-betting-odds.md`에 저장.

### ▶▶ 다음 = strategy 필라 (4/6)
`holdem-strategy`(허브) + 3bet·continuation-bet·when-to-fold·limping·position-play 등. 위 워크플로우대로. 사용자 lowfruits 시드(poker 앵커): `poker 3bet *`·`c-bet/continuation bet *`·`when to fold *`·`what is limping *`·`poker position *`. 그 다음 **tournament → glossary**. (rules 필라는 07-17에 경험담만 했으니, 원하면 나중에 H2질문화+winnable FAQ 재패스 여지 있음.)
- ★★**미결 틈새(강력 추천)**: **포커 레인지 차트/빌더** `poker ranges chart` 1000vol·`poker range builder` **LDA3** = 발견된 최대 기회. 별도 기획 논의 대기(`_niche-opportunities.md` 1순위). ICM `what is icm` 320vol LDA6 → 기존 `holdem-icm` 강화 몫.

### ▶▶ EN 경화 완료 후 = 번역(JA부터), 단 현지 롱테일 실검색
- **JA부터 하나씩** → 반응 오는 언어로 확장(gsc:lang). 신생이라 EN 외 로케일은 발행 며칠뿐 = **아직 데이터 없음**(EN만 구글이 노출 시도 중).
- ★번역 시 **현지 실검색 롱테일을 H2에 **(영어=질문형이지만 **JA=명사구/「とは」, 나라별 검색스타일 다름** → 툴로 확인). 국가별 실볼륨 = Ahrefs/Semrush **국가별 DB** 필요(사용자 구독 여부 미정). 메모리 [[translation-local-research-first]]·[[en-master-experience-hardening]].
- "검색어→H2 자동이동"은 **구글 scroll-to-text-fragment**(자동, 우리 GEO 구조가 조건) — 코딩 아님. 헤딩 id·모바일 scroll-margin 보정은 오늘 완료.

## ▶▶▶ (이전) START HERE (2026-07-17 — ★★★페이지 속도 구조 대개편 완료 / 다음 = 마케팅 플랜 논의 or 번역 ar)

> ✅✅✅ **오늘 = 속도 최적화 대성공**(상세 WORKLOG 2026-07-17 최상단). 제미나이 진단(히어로lazy·DOM·배너·폰트 4개)은 **PSI 실측으로 전부 오진/기해결 확인**하고, 진짜 원인 3개를 잡음:
> - ① **무한 CSS 애니메이션**(calc-glow·summary-border-pulse) → Lighthouse LCP 착시 21s → 유한화로 제거.
> - ② **전체 POSTS 본문이 클라이언트 JS에 번들**(9.5MB) → 서버에서 메타만 props 전달(blog·intl·home 3 Phase) → **전 라우트 50개 3MB→130~200kB**.
> - ③ **홈 CLS 0.55**(비동기 피드 스피너게이트+이미지 치수無) → 스피너 제거·피드 SSR·이미지 치수 고정 → **CLS 0, 홈 41→89/97점**(Fable5 구현·Opus 리뷰).
> - 결과: 일반 블로그 83~86·홈 89~97. 메모리 [[perf-lessons-lcp-and-bundle]]. **PSI_API_KEY** `.env.local` 등록(`npm run psi <url>`, 스크립트가 dotenv 미로딩 → 인라인 `PSI_API_KEY=... node` 필요).
> - 곁다리: **AI 인용 구조(GEO) 규칙** posting.mdc 반영([[ai-era-posting-geo-strategy]]).
>
> ⚠️ **남은 속도 저ROI**(CrUX 쌓인 뒤): 전 페이지 공통 베이스라인(Style&Layout ~900ms+하이드레이션 ~1.2s), renderMarkdown 서버화, content-visibility. **CrUX 데이터 없어 현재 순위 무관** — 급하지 않음.
> 📌 **다음 세션 후보**: (a) 원래 예정된 **마케팅 플랜 논의**(아래 2026-07-16 블록) (b) **번역 트랙 ar**(아래) (c) 홈 실기기 QA(피드 병합·글쓰기·좋아요 동작 육안확인 권장 — 자동테스트 아닌 실브라우저).

## ▶▶▶ (이전) START HERE (2026-07-16 — ★다음 세션 = 마케팅 플랜 논의(백지에서, 유튜브 프레임 제외))

> ★★**다음 세션 주제 = 마케팅 플랜 논의**(사용자 명시): 소셜/바이럴 채널로 holdemmaster.com 유입·브랜드 키우기. 지금까지는 SEO(검색) 중심이었고, 이제 채널 전략을 논의하고 싶어함. (GA에 이미 "AI Assistant" 채널·"홀덤사이트" 브랜드쿼리 부상 = 브랜드 형성 초기 신호 → 바이럴로 가속 여지.) **이 세션 시작 시 SEO 작업이 아니라 마케팅 플랜 논의부터.**
>
> 📌 **정리 메모(2026-07-16)**: 직전 대화에서 유튜브·틱톡 영상 채널(언어별 계정 운영)을 잠깐 논의했으나, 사용자가 **"유튜브 얘기는 빼고 새 세션에서 다시 정리하자"**고 지시함. → **영상 채널 방향은 일단 보류**. 새 세션은 이 프레임(유튜브·틱톡)에 매이지 말고 마케팅 목표·타깃·채널을 처음부터 다시 잡을 것. (사용자가 원하면 영상 얘기를 다시 꺼낼 수 있음.) **논의 시작 시 목표(트래픽/커뮤니티/수익화/브랜드)부터 사용자와 확정 후 채널 전략으로.**
>
> ✅ **이번 세션 = 데이터 인프라 + 족보 GEO/UI**(상세 WORKLOG 2026-07-15 최상단). 요약:
> - **데이터 도구 5종**(서비스계정 1개 재사용): `npm run gsc`(검색어)·`gsc:both`(28+7)·`gsc:lang`(언어분해)·`gsc:inspect`(색인상태)·`ga`(GA4 행동)·`psi`(CWV). 매주 루틴 = **`gsc:both` + `gsc:lang`**(ko/en 분리). 설정은 `.env.local`(gitignore), 원시데이터 `docs/gsc-tracking/data/`(gitignore), 큐레이션 `docs/gsc-tracking/kpi-log.md`.
> - ★**성과 판정은 ko 기준**(총계는 /en 저순위 노출로 희석 = 착시, 메모리 [[gsc-site-totals-diluted-by-translations]]). 한국어 r12~15·CTR 4.5~5% 안정. 토너/펍 필라 승자(국내참가 r1.4).

### ▶▶ 미결 SEO 작업 (바이럴 논의 후 or 병행)
- **족보 카니발 승계 진행중**: `/hands`=noindex 재크롤 트리거됨(색인요청 거부=noindex 감지). **`npm run gsc:inspect https://www.holdemmaster.com/hands`로 coverage가 "Excluded by noindex"로 바뀌는지 주간 확인** → 바뀌면 블로그(holdem-hand-rankings)가 족보 순위 승계. 그 전에 블로그 강화 남은 카드: ①제목 CTR 훅(r10 문턱) ②클러스터 역링크(flush-vs-straight·tiebreak→족보 허브).
- **GEO 확장**: ItemList/RankingTable을 다른 순위글(starting-hands)·/en 족보(영어권 AI 오버뷰 payoff 큼)에 확대. `Post.itemList?` 필드에 값만 채우면 자동.
- **GA 전환 이벤트 미설정**(keyEvents=0) — 커뮤니티 가입 등 추적하려면 GA4에서 키이벤트 지정 필요.
- 계산기 CTA 유입효과는 `npm run ga`로 `/calculator` 세션 추적해 검증.

### ▶▶ 번역 트랙 (별개, 계속 대기): 다음 = ar(아랍어)
- 구12언어: ja✅ es✅ pt✅ de✅ zh✅ id✅ → **ar** → ms vi hi tr.
- ⚠️ **ar 착수 시 반드시 `docs/translation-terms-ar.md` 브리프부터**(RTL·아랍어 숫자·포커용어 영어유지 조사). 리서치 규칙: 홀덤 구글 top10 중 5편 정독([[translation-local-research-first]]).

## ▶▶▶ (이전) START HERE (2026-07-15 — ★★★id(인도네시아어) 완전 완성(42/42) + 문체 Anda 통일 + ID_CLUSTERS / 다음 = ar)

> ✅✅✅ **id 42/42편 완성** — EN 마스터와 완전 동일 구조. Rules 6(재번역)·HR 6·Odds 6·Strategy 8·Tournament 9(tvc 재번역)·Glossary 6·cc 1. 커밋 `ddedd47`(HR)·`527f24c`(Odds)·`bfa7642`(Strategy)·`ee90ff2`(Tournament)·`63c3f67`(Glossary+cc)·`e936046`(링크복원134→0+tvc·Rules 6 재번역)+ID_CLUSTERS. 하드게이트 통과(**406 intl posts/24언어**). **id 잔여 부채 없음**(결손 0, 문체 Anda 통일). 상세 WORKLOG 2026-07-15 최상단.
> - 브리프 `docs/translation-terms-id.md`(**Anda 격식체**·유럽식 숫자·영어 앵글리시즘). **id = 7번째 완역**(ja·es·pt·de·zh·id).
> - ★★id 특유 교훈: ①**문체 "Anda"**(kamu 아님 — 옛 브리프 kamu는 폐기, 6월 stale Rules 6편이 kamu여서 재번역함) ②**유럽식 숫자**(콤마 소수점·마침표 천단위) — zh와 정반대, de/pt와 동일 ③**비율**: "1 in X"→"1 dari X", "X-to-1"→"X:1"(banding/ke-1 금지) ④desc ≤160 ⑤**병렬 배치 내 slug 레이스**: 마지막 필라 프롬프트에 "파일 존재 확인 금지·전 링크 유지" 넣으면 예방됨, 아니면 최종 EN-parity 복원에서 일괄 처리 ⑥stale 파일은 §13 드리프트+문체 리스크 → 하드닝 EN 재번역이 정답(de/zh/id 공통).

### ▶▶ 다음 = ar(아랍어) — 사용자가 "내일 직접 착수" 지시
- 구12언어 순서: ja✅ → es✅ → pt✅ → de✅ → zh✅ → id✅ → **ar** → ms → vi → hi → tr.
- ⚠️⚠️ **ar 착수 시 반드시 `docs/translation-terms-ar.md` 브리프부터 만들고 시작**(사용자 명시 요청). 조사할 것: RTL 방향 처리·아랍어 숫자표기(아랍-인도 숫자 vs 서양 숫자)·포커 용어 영어유지 관습·문체(공식/구어)·현지 포커 커뮤니티.
- ★★**리서치 규칙(전 언어 공통, 2026-07-15 사용자 지시)**: 착수 전 **홀덤 관련 구글 top10 중 실제 포스팅 5편 검색·분석·정독**([[translation-local-research-first]]).
- ar 절차: ①아랍어 웹 리서치(5편) → 브리프 ②Opus 병렬번역(EN 1:1·§13 그대로) ③count 구조패리티 ④네이티브 AR 적대적 QA ⑤교정 ⑥필라별 커밋 ⑦42편 완성 후 최종 EN 링크복원 + `AR_CLUSTERS`.
- `lib/posts-ar/` 현황부터 확인(기존 부분번역 stale 재검수 — id처럼 문체/§13 드리프트 가능). 화이트리스트는 진행에 따라 확장(전체 42).
- ★아랍어 RTL — 카드/숫자/방향 표현·마크다운 렌더·메타 인용부호 이스케이프 주의.

## ▶▶▶ (이전) START HERE (2026-07-15 — ★★★zh(중국어 간체) 완전 완성(42/42) + EN 링크정합(결손 0) + ZH_CLUSTERS / 다음 = id/ar)

> ✅✅✅ **zh 42/42편 완성** — EN 마스터와 완전 동일 구조. Rules 6·HR 6·Odds 6·Strategy 8·Tournament 9(tvc 재번역 포함)·Glossary 6·card-counting 1. 커밋 `f8b88b3`(Strategy)·`ac27d3b`(Tournament)·`a14c806`(Glossary+cc)+최종(링크복원 81→0·tvc 재번역·ZH_CLUSTERS). 하드게이트 통과(**372 intl posts/24언어**). **zh 잔여 부채 없음**(링크 결손 0). 상세 WORKLOG 2026-07-15 최상단.
> - 브리프 `docs/translation-terms-zh.md`(严格简体·「你」체·족보중국어·set=暗三条/trips=明三条·영어유지 목록·false-friend). **zh = 6번째 완역**(ja·es·pt·de·zh).
> - ★★zh 특유 교훈: ①**metadata(title/desc/tldr) 안쪽 인용부호는 반드시 전각「」** — ASCII `"` 넣으면 TS 문자열 조기종료 ParseError(limping·3bet 실발생) ②**숫자=영어식**(마침표 소수점·콤마 천단위·3:1·万/亿·$ 유지·% 붙여쓰기) — de/es/pt 유럽식과 정반대 ③FAQ 문제 전량 중국어화 필수(영어질문 잔재 반복→프롬프트 경고) ④**calculator=canonical `/calculator`**(zh 로케일 라우트 없음→`/zh/calculator`는 404) ⑤"10" 유지("T" 금지) ⑥tvc 등 초기 stale 번역은 축약본일 수 있음 → 링크복원 시 결손 남으면 전체 재번역이 정답.

### ▶▶ 지금 진행중 = id(인도네시아어) — 사용자 부재중 자동진행 지시(2026-07-15)
- 구12언어 순서: ja✅ → es✅ → pt✅ → de✅ → zh✅ → **id(진행중)** → ms → vi → hi → tr → 그다음 ar.
- ⚠️ **ar은 사용자가 "내일 직접 착수" 지시로 뒤로 미룸** — id 먼저. **ar 착수 시 반드시 `docs/translation-terms-ar.md` 브리프부터 만들고 시작**(사용자 메모 요청, RTL·아랍어 숫자·포커용어 영어유지 관습 조사).
- ★★**리서치 규칙 갱신(전 언어 공통, 2026-07-15 사용자 지시)**: 착수 전 **홀덤 관련 구글 top10 중 실제 포스팅 5편 검색·분석·정독** 후 진행([[translation-local-research-first]]).
- id 절차: ①인니어 웹 리서치(5편) → `docs/translation-terms-id.md` 브리프 ②Opus 병렬번역(EN 1:1·§13 그대로) ③count 구조패리티 ④네이티브 ID 적대적 QA ⑤교정 ⑥필라별 커밋 ⑦42편 완성 후 최종 EN 링크복원 + `ID_CLUSTERS`.
- `lib/posts-id/` 현황: **stale 8편**(Rules 6 + hand-rankings + tvc) — 하드닝 EN 기준 재검수/재번역 포함. 화이트리스트는 진행에 따라 확장(전체 42).
- id 참고: 라틴 문자·영어식/유럽혼용 숫자 가능 → 리서치로 확정. 인니 포커 커뮤니티는 영어 용어 차용 많음(gocap/all in 등) — 현지 관습 조사 후 결정. 메타 필드 인용부호 이스케이프(zh 교훈).

## ▶▶▶ (이전) START HERE (2026-07-14 — ★★★de(독일어) 완전 완성(42/42) + EN 링크정합 + DE_CLUSTERS / 다음 = zh)

> ✅✅✅ **de 42/42편 완성** — EN 마스터와 완전 동일 구조. Rules 6·HR 6·Odds 6·Strategy 8·Tournament 9·Glossary 6·card-counting 1. 커밋 `d4c3e32`·`18721af`·`3463258`·`9fbf5d8`(§13태그제거)·`d767114`·`7a32957`·`1f9c233`(링크복원)+DE_CLUSTERS. 하드게이트 통과(**338 intl posts/24언어**). **de 잔여 부채 없음**(링크 결손 0/초과 0). 상세 WORKLOG 2026-07-14 최상단.
> - 브리프 `docs/translation-terms-de.md`(du·유럽식 숫자·독일식 족보 Straße/Drilling/Vierling·앵글리시즘+성). **de = 5번째 완역**(ja·es·pt·de).
> - de 특유 교훈: ①액션/구조/수학어 영어유지+**대문자+성**(der Flop/das Board), 족보만 독일어 ②FAQ 마커 `**Q. 질문전체**`(볼드 안, 스키마) ③메타 필드(title/desc/tldr)에 **독일식 „…" 또는 직선따옴표 넣을 때 이스케이프**(안 하면 빌드 깨짐) ④calculator/hand-chart/quiz = canonical `/calculator` 등 ⑤통화 유럽식(마침표 천단위·$2,7M 콤마) ⑥soft-hyphen(U+00AD) 혼입 주의.
> - ★★**EN 마스터 §13 태그 누출 발견·제거**: 3bet/cbet/when-to-fold에 `(§13-checked)` 등이 전 언어로 전파돼 있던 것을 en/de/es/ja/pt 일괄 제거. **다음 언어 번역 전 EN에 §13 잔재 재확인 권장.**

### ▶▶ 다음 = zh(중국어) 언어 완성 — de/pt/es와 동일 파이프라인
- 구12언어 순서: ja✅ → es✅ → pt✅ → de✅ → **zh** → ar → id → ms → vi → hi → tr.
- 절차: ①현지어 웹 리서치 선행([[translation-local-research-first]]: 중국 포커사이트 실제용어) → `docs/translation-terms-zh.md` 브리프(★중국어 숫자: 아라비아 유지, 만/억 단위 관습·간체) ②Opus 병렬번역(EN 1:1·§13 그대로) ③count 구조패리티 ④네이티브 ZH 적대적 QA(계산 재검증X) ⑤교정 ⑥필라별 커밋 ⑦42편 완성 후 최종 EN 링크복원 + `ZH_CLUSTERS`.
- `lib/posts-zh/` 현황부터 확인(기존 부분번역 stale 재검수 포함). 화이트리스트는 진행에 따라 확장(전체 42).

## ▶▶▶ (이전) START HERE (2026-07-14 — ★★★pt(pt-BR) 완전 완성(42/42) + EN 링크정합 + PT_CLUSTERS / 다음 = de)

> ✅✅✅ **pt 42/42편 완성** — EN 마스터와 완전 동일 구조. Rules 6·HR 6·Odds 6·Strategy 8·Tournament 9·Glossary 6·card-counting 1. 커밋 `8e61e33`(Odds)·`040b2ce`(Strategy)·`6e4b49c`(Tournament)·`572d941`(Glossary+cc)·`79013a7`(EN링크복원+PT_CLUSTERS). 하드게이트 전부 통과(**304 intl posts/24언어**). 상세는 WORKLOG 2026-07-14 최상단.
> - 브리프 `docs/translation-terms-pt.md`(você·**유럽식 숫자표기** 천단위 마침표/소수점 콤마·pokernobrasil 글로스). **pt 잔여 부채 없음**(링크 결손 0/초과 0).
> - pt 특유 교훈: ①$·₩·€ 천단위는 pt-BR에서 콤마=소수점이라 **반드시 마침표**(오독 방지) ②FAQ 마커는 **`**Q.**…A.`** 유지 필수(page.tsx 스키마 정규식이 P./R.는 못 잡음→FAQPage 0) ③calculator/hand-chart/quiz는 **로케일 중립 canonical**(`/calculator` 등, `/pt/…` 라우트 없음).

### ▶▶ 다음 = de(독일어) 언어 완성 — pt/es와 동일 파이프라인
- 구12언어 순서: ja✅ → es✅ → pt✅ → **de** → zh → ar → id → ms → vi → hi → tr.
- 절차: ①현지어 웹 리서치 선행([[translation-local-research-first]]: de 포커사이트 실제용어, pokerfirma/pokerolymp 등) → `docs/translation-terms-de.md` 브리프(★독일어 숫자도 유럽식 마침표/콤마) ②Opus 병렬번역(EN 1:1·§13 그대로·품질 최우선) ③count 구조패리티(universe=`lib/posts-en/` 42편) ④네이티브 DE 적대적 QA(계산 재검증 X) ⑤교정 ⑥필라별 커밋 ⑦42편 완성 후 최종 EN 링크정합 패스 + `DE_CLUSTERS` 러닝맵.
- `lib/posts-de/` 현황부터 확인(기존 부분번역 stale 재검수 포함). 화이트리스트는 진행에 따라 확장(전체 42 슬러그).
- ★독일어 명사 대문자·합성어 주의. 포커 전문어는 영어 유지(de 커뮤니티 관습).

## ▶▶▶ (이전) START HERE (2026-07-14 — ★★★EN 마스터 경화 완료 + en/es/ja 정합 / 다음 = pt)

> ✅✅✅ **EN 마스터 Fable5 정밀검수·경화 완료 후 es·ja 전파** — 커밋 `ceac592`(EN 교정)·`fd1e928`(불가능 이미지 2건: outs 히어로·split-pot)·`ac14f1d`(es/ja 전파). **핵심 교훈**: "여러 번 검수 ≠ 검증 완료". Fable5가 핸드 7장 검산·수학 재계산·크로스문서 대조로 EN 마스터 자체의 잠재 오류 ~18 🔴를 처음 잡음(핸드 수학·ICM·사이드팟은 전편 CLEAN, 결함은 룰적용·수치모순·공식·표기·이미지). 대표: **implied-odds 공식 오류**(−pot→−(pot+call)), all-in 재개방 예시 자체 오류, game-order 프리플랍 체크, 3bet MDF, starting-hands 12/26/42→13/27/43, bad-beat Mabuchi, cooler 이미지 캡션.
> - **방법론 확립(다음 언어 필수)**: **번역 착수 전 EN을 Fable5 정밀검수 프롬프트로 필라별 경화**(핸드 7장 열거·수학 재계산·크로스문서 대조·불가능/모순/표기·죽은링크). 프롬프트 원형은 이 세션 대화 참조(ROLE=엘리트 홀덤+팩트체커, 적대적, 증명될 때까지 틀렸다고 간주).
> - ⚠️ **미해결(외부 사실확인 필요, 함부로 수정 금지)**: apt **K-ETA "무료"**→₩10,000 수수료 가능(k-eta.go.kr) · wpt **Prime=Champions Cup** 자격(WPT.com) · wpt **NSW 현금한도** 2026 인하 가능성 · 송금정보(SWIFT/BSB) · 일부 이벤트 팩트·ICM "2025 study" 무출처.
> - ⚠️ **이미지 재사용**(오류 아님): holdem-reading-straight-example.webp 등 클러스터 중복 → 글별 고유화 권장(커서).

## ▶▶▶ (이전) START HERE (2026-07-14 — ★★es 언어 완전 완성(42/42) / 다음 = pt(포르투갈어))

> ✅✅ **es 42/42편 완성** — EN 마스터와 완전 동일 구조. Rules 6·HR 6·Odds 6·Strategy 8·Tournament 9·Glossary 6·card-counting 1. 커밋 `05de6f2`(Odds)·`3d1c038`(Strategy)·`c7678e5`(Tournament)·`1ef03d4`(Glossary+cc)·`68bb94f`(EN정합 링크복원)·`8db2366`(ES_CLUSTERS 러닝맵). 하드게이트 전부 통과(270 intl posts/24언어). 상세는 WORKLOG 2026-07-14.
> - 브리프 `docs/translation-terms-es.md`에 Wave 2~5(Odds·Strategy·Tournament·Glossary) 용어·화이트리스트(42) 누적. 다음 언어도 이 문서 형식 참고.
> - ✅ **tvc(tournament-vs-cash-game) 전면 재번역 완료**(`1181a8d`): 초기 번역이 EN 섹션 생략(359줄)·category 코리안버그·오이미지 → EN 431줄 완전 재작성(FAQ 6→8, 누락섹션 복원, category 정정, 이미지 EN정합). **es 잔여 부채 없음.**

### ▶▶ 다음 = pt(포르투갈어) 언어 완성 — es와 동일 파이프라인
- 구12언어 순서: ja✅ → es✅ → **pt** → de → zh → ar → id → ms → vi → hi → tr.
- 절차(필라 단위, es와 동일): ①현지어 웹 리서치 선행([[translation-local-research-first]]: pt-BR/pt-PT 포커사이트 실제용어) → `docs/translation-terms-pt.md` 브리프 ②Opus 병렬 번역(EN 1:1 구조·§13 EN 그대로·품질 최우선 [[translation-quality-first-from-es]]) ③count 기반 구조 패리티 진단(universe=`lib/posts-en/` 42편, [[translation-link-structure-equals-en]]) ④네이티브 에디터 적대적 QA(리서치+현지 페르소나, 계산 재검증 X) ⑤교정 ⑥필라별 커밋·보고 ⑦42편 완성 후 최종 EN 링크정합 패스 + `PT_CLUSTERS` 러닝맵.
- pt는 `lib/posts-pt/` 현황부터 확인(기존 부분번역 있으면 stale 재검수 포함). 화이트리스트는 번역 진행에 따라 확장.
- ★필라 경계마다 보고 후 다음 진행(사용자 규칙). "자동으로 돌려" 지시 시 필라 연속 완주.

### ★★★ EN-완전일치 방법론 (ja/es에서 확립 — 전 언어 준수)
- 검증 universe = **`lib/posts-en/` 실제 전체(42편)**, 큐레이팅한 클러스터 목록 금지(ja 사고 원인).
- 대조 = 링크뿐 아니라 **하이라이트색(g/r/b)·thumb·이미지·모든 :::디렉티브·Related/readnext카드·FAQ 수**까지 EN 1:1. **개수(count) 검증**(존재여부 아님). 번역이 재구성이라도 구조·색칠은 EN 고정.
- ★교훈(es): 이른 필라를 먼저 번역하면 당시 없던 글로의 링크를 strip하게 됨 → 반드시 **전 언어 42편 완성 후 최종 링크정합 패스**로 복원. es에서 22편 복원 필요했음.
- 레이아웃: CJK(ja/zh)는 `word-break` 보정 필요(globals.css `[lang]` 스코프). 라틴(es/pt/de…)은 무관.

### 📌 es 마무리 잔여(사용자/추후)
- GSC 색인 요청: `/es/blog/` 신규 URL(Odds 6·Strategy 8·Tournament 8·Glossary 6·card-counting) + Vercel 배포 확인.
- tvc 본문 전면 재번역(위 ⚠️).

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★★ja 완전 마감(EN 41편 + 링크복원 완료))

> **★번역 축 전환**(사용자 지시): "필라×전언어"(Rules 24언어 완결) → **"언어×전필라"**(한 언어 세로 완성 → 다음). **구 12언어부터**(ja→es→pt→de→zh→ar→id→ms→vi→hi→tr), 언어당 EN 41편 전체(라이브이벤트 4편 포함). **필라 단위 자동 진행 + 필라 끝날 때마다 보고 후 다음 필라/단계 승인**. ★**착수 전 필수: 현지어 웹검색·현지 포커사이트에서 실제 용어·문맥 분석**(메모리 [[translation-local-research-first]]). 읽는 순서: `docs/translation-spec.md` → `docs/translation-terms-<lang>.md` → 이 파일.

### ✅✅ ja 언어 완성 = EN 마스터 전량 41편 (구 12언어 중 1번째 완결)
- 웨이브1 HR 6/6 (`b918bc1`) · 웨이브2 Odds 6/6 (`e08063f`) · 웨이브3 Strategy 8/8 (`449b1aa`) · 웨이브4 Tournament 9/9 (`754a957`) · **웨이브5 Glossary 6/6 (`b2dd736`)**.
- 각 웨이브 현지 리서치→Opus 병렬 번역→하드게이트→적대적 QA 다배치(전부 CLEAN, §13/§14 EN 일치)→교정→배포.
- **ja 41편** = Rules 6 + HR 6 + Odds 6 + Strategy 8 + Tournament 9 + Glossary 6. 화이트리스트 41=EN 전량.
- 브리프 `docs/translation-terms-ja.md`에 5개 필라 용어 섹션 전부 정리됨(다음 언어 참고용 템플릿).

### ✅ ja 최종 링크복원 + EN 구조 완전정합 완료 (커밋 `f98091f`→`77b7a37`)
- 1차: 22개 파일 42개 스트립 링크 복원. 2차: ★**개수·구조 재검증**(사용자 지적 "구조는 EN과 똑같이, 비슷한 밀도 아님") → 7개 파일 10개 인스턴스(Related/readnext 카드·thumb·본문 중복) 추가 정합.
- **개수부족 0/0 = ja 내부링크가 EN과 대상·개수·구조·thumb까지 1:1**. §13 무변조 전수검증. **ja 완전 마감.**
- ★교훈: 링크복원은 **존재여부(Set) 아니라 개수(count)로 검증**. 메모리 [[translation-link-structure-equals-en]].
- ✅ **ja 러닝 로드맵(미니맵) 이식** (`176fae7`): `JA_CLUSTERS`(구조=EN·라벨 일본어) 신설 + `intl-blog-post-client` 게이트 en·ja 확장(hrefBase 로케일대응). 다음 언어 완성 시 동일 패턴(=`<LANG>_CLUSTERS` 추가 + 게이트에 로케일 추가)으로 미니맵 노출 가능.

### ▶▶ 다음 = **es(스페인어) 언어 완성** (구 12언어 2번째)
- ⚠️ es도 완성 후 **링크복원 패스는 개수기준 검증**(EN vs es `/blog/` 링크 count 대조, Related/readnext 카드·thumb 포함)으로 EN 구조 1:1 맞출 것.
- es는 기존 8편 보유(Rules 6 + hand-rankings + tournament-vs-cash-game, 후자 2편 stale 가능). ja와 동일 파이프라인(필라별 웨이브: HR→Odds→Strategy→Tournament→Glossary).
- ★es 숫자표기=**유럽식**(천단위 `.`·소수점 `,` → 1,326→1.326, 2.5→2,5). 브리프 `docs/translation-terms-es.md`는 없음(ja처럼 신규 작성). 구조 레퍼런스=posts-es 자체.
- 라이브이벤트 4편: EPT바르셀로나는 es 시장 밀접(스페인) → §14 사실 유지하되 현지 친화.

### 📌 백로그(EN 마스터 — ja 아님)
- **wpt-australia-2026-guide**: 새틀라이트 Step1 금액 EN 원문 모순(본문 "$255 total/Step1 $255" ↔ FAQ "Step1 ~$180"). ja는 충실 계승. EN 마스터 측 정합화 필요(고치면 전 언어 追随).

---

## ▶▶▶ (이전) START HERE (2026-07-13 밤 — ★KO 러닝맵 미니맵 완료 / 다음 세션 = 번역작업)

> **다음 세션 = 번역작업**(사용자 지시). ★**먼저 `docs/translation-spec.md` 읽을 것** — 24개 언어로 검증된 표준 파이프라인(모델=Opus, ⓪배선 체크리스트, 언어별 숫자표기·함정표)을 단일 기준서로 정리해둠. 그다음 대상 언어 브리프 `docs/translation-terms-<lang>.md`. 어느 필라/언어인지 사용자와 확정 후 진행.

### ✅ 이번 세션 완료: KO 블로그 러닝맵(미니맵) 이식·배포
EN 우측 사이드바 러닝맵을 한국어 블로그에 이식 완료. 커밋 `96b8bb4`→`8318771` 배포됨, 빌드 348페이지 정상.
- **`lib/pillar-clusters.ts`**: `KO_CLUSTERS` 8필라 신설(규칙·족보·확률·스타팅·포지션·전략·토너먼트·펍). 46 slug **전수 실존검증 0누락**. `clusterForSlug(slug, clusters=EN_CLUSTERS)`로 시그니처 확장(EN 기본, KO는 인자 전달). ⚠️EN(6필라)과 구조 다름: KO는 펍·포지션·스타팅 별도 / glossary 없음.
- **`components/cluster-minimap.tsx`**: 파라미터화(`clusters`/`hrefBase`/`labels` props, EN 기본값 보존) → EN(intl) 사용처 무영향.
- **`app/blog/[slug]/blog-post-client.tsx`**: 데스크탑 우측 sticky aside + 모바일 접이식 `<details>`. `clusterForSlug`로 게이팅(클러스터 글만 노출, 비클러스터 0). 라벨 **전부 영문**(Learning Map / You are here / Overview / Hub); 필라명·글 라벨은 한글 유지.
- 스몰블라인드 역할 **중복 제거**(포지션 필라에만).
- ⚠️**교훈**: `Cannot access 'X' before initialization` = 순환import 아님. 함수 내 `const gridClass`가 `hasToc`를 **선언 전 참조**한 TDZ였음(선언순서 수정으로 해결). 유사 에러 시 선언순서 먼저 의심.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★★다국어 Rules 필라 24개 언어 완결 / 톱5 확장 완료)

> **모드**: 다국어 확장 트랙 대성황. 18개 완결 → sw(아프리카) → 톱5(bn·ro·fil·uk·he) 전부 완료 = **Rules 필라 24개 언어**. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치).

### ✅✅ 톱5 확장 완료 (파일럿19~23, 이번 자율세션 후반)
sw(19번째) 후 사용자 톱추천 5개: **bn(20)·ro(21)·fil(22)·uk(23)·he(24)** 전부 개설·Rules 6편 배포. 각 §13 0오류. **he는 RTL**(ar/fa 인프라 재활용, RTL_LOCALES에 he 추가).
- **사용자 몫(GSC 색인)**: 톱5 신규 5언어 × Rules 6편 = 30 URL. `/bn/` `/ro/` `/fil/` `/uk/` `/he/` blog/ + (texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules). ⚠️**he·fa·ar는 RTL** 렌더 육안확인 권장.

### 📊 Rules 필라 = 24개 언어 (완결)
en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr(기존 12) + fr·ru·it·pl·th·fa(18개 확장) + sw(아프리카) + **bn·ro·fil·uk·he**(톱5).

### ▶▶ 다음 트랙 후보 (사용자와 상의)
1. **추가 언어** — 원하면 계속 확대(톱5 다음 후보: ta 타밀·he 완료·ur 우르두·nl·sv·cs 등). 배선 절차 아래.
2. **다국어 2번째 필라 확장** — Rules 24언어 완결 → 다음 필라(Hand Rankings 등)를 동일 파이프라인으로.
3. **전 언어 stale 재번역** — hand-rankings·tournament-vs-cash-game이 구 12언어에서 stale·category 레거시.
4. **신규 17언어(fr~he)를 다른 클러스터로 확대** · 이미지·GSC.

### 📌 신규 로케일 배선 절차(재사용, 검증됨)
⚠️**라우팅은 `app/[locale]` 동적세그가 아니라 로케일별 물리 폴더**(`app/<locale>/`). 데이터·sitemap·check-intl-links만으론 부족 — **라우트 파일 없으면 URL 404**(2026-07-13 발견: 신규 12로케일 404 원인).
① `intl.ts` SECONDARY_LOCALES+코드 + 6개 맵 전부(TS 강제). RTL이면 `RTL_LOCALES`+코드(ar·fa·he 선례). ② posts-<lang>/index.ts. ③ intl-posts.ts. ④ translate route. ⑤ **★라우트 3파일 생성**: `app/<lang>/page.tsx`(CommunityClient pageLocale)·`app/<lang>/blog/page.tsx`(IntlBlogIndex)·`app/<lang>/blog/[slug]/page.tsx`(generateStaticParams=postsForLocale+IntlBlogArticle). tr 폴더가 템플릿. **빌드 페이지 수 증가(로케일당 +8: home+blogindex+6글)로 확인**. ⑥ FAQ 마커 `**Q. ...?**`+`A.`(리터럴). ⑦ 비라틴 숫자(벵골/페르시아/데바나가리)는 라틴 일괄변환(.mjs). ⑧ RTL 언어는 ar 파일을 구조 레퍼런스로(텍스트 복사 금지). ⑨ QA 흔한 결함=desc>160·readnext/HTML카드 링크(비허용 슬러그, ar 레퍼런스 답습 주의)·기계번역 깨진단어/타언어 잔재.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★다국어 Rules 필라 23개 언어 / 톱5 진행중 4/5: bn·ro·fil·uk 완료 / 다음=he 마지막·RTL)

> **모드**: 다국어 확장 자율진행. 톱추천 **bn(✅)→ro(✅)→fil(✅)→uk(✅)→he(마지막·RTL)**. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). 배선 절차는 아래·ru 블록.

### ✅ uk(우크라이나어) 완료 (파일럿22, 23번째 로케일)
러시아어와 별개(순수 우크라 철자 і/ї/є/ґ·아포스트로프). 우크라식 숫자(공백 천단위). ти체. §13 0오류. **23개 언어.** GSC: `/uk/blog/` 6 URL.

### ▶▶ 다음 = he(히브리어) — **톱5 마지막·RTL**
- ★**RTL 처리 필수**: `lib/intl.ts` `RTL_LOCALES`에 "he" 추가(현재 `["ar","fa"]` → `["ar","fa","he"]`). globals.css `[dir=rtl]`(ar/fa) 재활용. 빌드 후 `/he/blog/*` RTL 렌더 육안확인 권장.
- 웹리서치 → `docs/translation-terms-he.md`: 히브리어 포커 용어(음차 우세 예상)·숫자 라틴(히브리 숫자 안 씀)·문체. 이스라엘 포커 씬.
- 배선(7맵+RTL_LOCALES+posts-he/index.ts+intl-posts.ts+translate route) → Opus 6병렬(허용 슬러그=Rules 6개뿐) → 검사(FAQ 마커·RTL·라틴숫자) → QA 2배치 → 교정 → 커밋.
- **he masterUpdated**: texas 2026-07-12·game-order 2026-07-02·betting/blind 2026-07-11·all-in/showdown 2026-07-12.
- **★he 완료 후 = 24개 언어 → 요약 보고서**(사용자 지시, 톱5 완료).

### 📌 Rules 필라 = 23개 언어
en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr + fr·ru·it·pl·th·fa·sw·bn·ro·fil·**uk**.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★다국어 Rules 필라 22개 언어 / 톱5 진행중 3/5: bn·ro·fil 완료)

> **모드**: 다국어 확장 자율진행. 톱추천 **bn(✅)→ro(✅)→fil(✅)→uk→he** 순차. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). **he는 RTL**(ar/fa 인프라). 배선 절차는 아래·ru 블록.

### ✅ fil(필리핀어) 완료 (파일럿21, 22번째 로케일)
Taglish(필리핀어 산문 + 포커용어 영어, 마닐라 허브·영어우세). 영어식 숫자. ikaw체. §13 0오류. **22개 언어.** GSC: `/fil/blog/` 6 URL.

### ▶▶ 다음 = uk→he (톱5 잔여 2개)
- **uk**(우크라이나어): 키릴·숫자표기 웹리서치(러시아 GOST 유사 공백 가능)·ru와 별개 어휘·문체.
- **he**(히브리어): ★**RTL** → `lib/intl.ts` RTL_LOCALES에 "he" 추가(현재 `["ar","fa"]`) + globals.css `[dir=rtl]` 재활용. 히브리 문자·숫자 라틴·우→좌.
- **★he(톱5 마지막) 완료 후 = 24개 언어 → 요약 보고서**(사용자 지시).

### 📌 Rules 필라 = 22개 언어
en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr + fr·ru·it·pl·th·fa·sw·bn·ro·**fil**.

### 📌 신규 로케일 배선 절차(재사용)
① `intl.ts` SECONDARY_LOCALES+코드 + 6개 맵 전부(TS 강제). RTL이면 RTL_LOCALES+코드. ② posts-<lang>/index.ts. ③ intl-posts.ts. ④ translate route. ⑤ FAQ 마커 `**Q. ...?**`+`A.`(리터럴). ⑥ 비라틴 숫자는 라틴 일괄변환(.mjs). ⑦ QA 흔한 결함=desc>160·readnext/본문 마크다운 링크(비허용 슬러그)·기계번역 깨진단어/대명사·"Related Posts" 헤딩 현지화 일관성.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★다국어 Rules 필라 21개 언어 / 톱5 진행중 2/5: bn·ro 완료)

> **모드**: 다국어 확장 자율진행. 톱추천 **bn(✅)→ro(✅)→fil→uk→he** 순차. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). **he는 RTL**(ar/fa 인프라). 배선 절차는 아래·ru 블록 참조.

### ✅ ro(루마니아어) 완료 (파일럿20, 21번째 로케일)
치명함정 안전: Culoare=flush·Chintă=straight·Careu=포카드·홀덤 Full House>Culoare. 유럽식 숫자(마침표 천단위). §13 0오류. **21개 언어.** GSC: `/ro/blog/` 6 URL.

### ▶▶ 다음 = fil→uk→he (톱5 잔여 3개)
- **fil**(필리핀어/타갈로그): 영어식 숫자·라틴·영어 차용 매우 우세(스와힐리처럼 포커용어 영어 유지 방향). OG=fil_PH. 필리핀=마닐라 포커 허브.
- **uk**(우크라이나어): 키릴·숫자표기 웹리서치(러시아 GOST 유사 공백 가능)·ru와 별개 어휘.
- **he**(히브리어): ★**RTL** → `lib/intl.ts` RTL_LOCALES에 "he" 추가(현재 `["ar","fa"]`) + globals.css `[dir=rtl]` 재활용. 히브리 문자·숫자 라틴·우→좌.
- **★he(톱5 마지막) 완료 후 = 24개 언어 → 요약 보고서**(사용자 지시).

### 📌 Rules 필라 = 21개 언어
en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr + fr·ru·it·pl·th·fa·sw·bn·**ro**.

### 📌 신규 로케일 배선 절차(재사용)
① `intl.ts` SECONDARY_LOCALES+코드 + 6개 맵 전부(TS 강제). RTL이면 RTL_LOCALES+코드. ② posts-<lang>/index.ts. ③ intl-posts.ts. ④ translate route. ⑤ FAQ 마커 `**Q. ...?**`+`A.`(리터럴). ⑥ 비라틴 숫자는 라틴 일괄변환(.mjs). ⑦ QA 흔한 결함=desc>160·readnext/본문 파이프·마크다운 링크(비허용 슬러그, check-intl-links가 본문 마크다운은 잡음)·기계번역 깨진단어.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★다국어 Rules 필라 20개 언어 / bn 완료·톱5 진행중 1/5)

> **모드**: 다국어 확장 자율진행. sw(19번째) 후 사용자 톱추천 **bn(✅)→ro→fil→uk→he** 순차 진행 중. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). 신규 로케일 배선 절차는 아래·ru 블록 참조. **he는 RTL**(ar/fa 인프라).

### ✅ bn(벵골어) 완료 (파일럿19, 20번째 로케일) — 톱5 중 1번타자
벵골 산문 + 포커용어 영어/음차(방글라데시+인도 2.7억). 숫자 영어식 라틴(벵골 숫자→라틴 변환). আপনি체. §13 0오류. **20개 언어.** GSC: `/bn/blog/` 6 URL.

### ▶▶ 다음 = ro→fil→uk→he (톱5 잔여 4개)
착수 시 워크플로우 1회 읽기 → 웹리서치→브리프 → 배선 → Opus 6병렬 → 검사(★FAQ 마커 Q./A.·숫자표기·비영어숫자 라틴변환) → QA 2배치 → 교정 → 커밋.
- **ro**(루마니아어): 유럽식 숫자(천단위 `.`·소수점 `,` 웹리서치 확인)·라틴·특수문자(ă/â/î/ș/ț). 규제 포커시장.
- **fil**(필리핀어/타갈로그): 영어식 숫자·라틴·영어 차용 매우 우세(스와힐리처럼 포커용어 영어 유지 가능성). OG=fil_PH 또는 tl_PH.
- **uk**(우크라이나어): 키릴·숫자표기 웹리서치(러시아 GOST 유사 공백 가능)·ru와 별개 어휘.
- **he**(히브리어): ★**RTL** → `lib/intl.ts` RTL_LOCALES에 "he" 추가(현재 `["ar","fa"]`) + globals.css `[dir=rtl]` 재활용. 히브리 문자·숫자 라틴(히브리 숫자 안 씀)·우→좌.
- **he masterUpdated**: texas 2026-07-12·game-order 2026-07-02·betting/blind 2026-07-11·all-in/showdown 2026-07-12.
- **★he(톱5 마지막) 완료 후 = 24개 언어 → 요약 보고서**(사용자 지시).

### 📌 Rules 필라 = 20개 언어
en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr + fr·ru·it·pl·th·fa·sw·**bn**.

### 📌 신규 로케일 배선 절차(재사용)
① `lib/intl.ts`: `SECONDARY_LOCALES`+코드 + 6개 맵 전부 채우기(TS 강제). RTL이면 `RTL_LOCALES`+코드. ② `posts-<lang>/index.ts`. ③ `intl-posts.ts` import+등록. ④ translate route LANG_NAME. ⑤ FAQ 마커 `**Q. ...?**`+`A.`(리터럴). ⑥ 비라틴 숫자(벵골/페르시아/데바나가리류)는 라틴 일괄변환(`.mjs`). ⑦ QA 흔한 결함=desc>160·readnext 파이프링크(check-intl-links 미검출)·기계번역 접합.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★다국어 Rules 필라 19개 언어 완결 / sw 추가)

> **모드**: 다국어 확장. 18개 완결 후 사용자 지시로 **sw(스와힐리어, 동아프리카) 추가 완료 = 19개 언어**. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). 신규 로케일 배선 절차는 아래 블록·ru 블록 참조.

### ✅ sw(스와힐리어) 완료 (파일럿18, 19번째 로케일)
★핵심: 스와힐리엔 확립된 포커 어휘 없음 → **포커 전문용어 영어 유지 + 스와힐리 산문**(동아프리카 관습). 숫자 영어식(변환X). wewe체. §13 0오류. GSC: `/sw/blog/` 6 URL.

### 📊 Rules 필라 = 19개 언어 완결
en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr + fr·ru·it·pl·th·fa + **sw**.

### ▶▶ 다음 트랙 후보 (사용자와 상의)
1. **추가 언어** — 원하면 계속 확대(예: 다른 아프리카어·유럽어). 배선 절차 아래 참조.
2. **다국어 2번째 필라 확장** — Rules가 19언어 완결 → 다음 필라(Hand Rankings 등)를 동일 파이프라인으로.
3. **전 언어 stale 재번역** — hand-rankings·tournament-vs-cash-game이 구 12언어에서 stale·category 레거시.
4. **신규 13언어(fr~sw)를 다른 클러스터로 확대** · 이미지·GSC.
- **백로그(마스터 공통)**: all-in 캡 근사·game-order 프리플랍 체크 절대표현·pt 코퍼스/street 통일.

### 📌 신규 로케일 배선 절차(재사용)
① `lib/intl.ts`: `SECONDARY_LOCALES`+코드 + 6개 맵(OG_LOCALE·HTML_LANG·POST_LABELS·CHROME·NAV_HOME_FEED·NAV_CTA) 전부 채우기(TS 빌드 강제). RTL이면 `RTL_LOCALES`+코드(fa·ar 선례). ② `lib/posts-<lang>/index.ts` 신규. ③ `lib/intl-posts.ts` import+등록. ④ (선택) translate route LANG_NAME. ⑤ FAQ 마커 = 파서 정규식 `**Q. ...?**`+`A. ...`(리터럴 Q./A.) 준수(texas는 `###` 헤딩=마스터 예외). ⑥ 숫자표기 계열 웹리서치. ⑦ 페르시아 숫자류는 라틴 변환(fa 선례). ⑧ QA에서 흔한 결함=desc>160·readnext 파이프링크(check-intl-links 미검출)·기계번역 동사접합.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★★다국어 18개 확장 완료 18/18 / 트랙 종료)

> **모드**: 다국어 **18개 확장 트랙 종료**(부재중 자율진행 완료). fr→ru→it→pl→th→fa 6개 신규 로케일 전부 개설·Rules 필라 6편 배포 완료. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치).

### ✅✅ 18개 확장 완료 (파일럿12~17, 이번 자율세션)
Rules 필라 = **18개 언어 전량**: en(마스터) + ja·es·pt·de·zh·ar·id·ms·vi·hi·tr + **fr·ru·it·pl·th·fa**(신규 6). 각 신규 로케일 = 인프라 배선(intl.ts 7맵+RTL은 fa) + 6편 번역 + §13 전수 0오류 + QA 2배치.
- **사용자 몫(GSC 색인)**: 신규 6개 언어 × Rules 6편 = 36 URL. `/fr/` `/ru/` `/it/` `/pl/` `/th/` `/fa/` blog/ + (texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules).
- ⚠️ **fa는 RTL** — 배포 후 `/fa/blog/*` 페이지 우→좌 렌더·카드(A♠) LTR 임베드 육안확인 권장(ar 인프라 재활용).

### ▶▶ 다음 트랙 후보 (사용자와 상의)
1. **다국어 2번째 필라 확장** — Rules가 18언어 완결됐으니 다음 필라(Hand Rankings 클러스터 등)를 동일 파이프라인으로 18언어 확장.
2. **전 언어 stale 재번역** — hand-rankings·tournament-vs-cash-game이 **구 12언어에서 stale**(EN 마스터 갱신됨)·category 한국어 레거시. `check:stale`로 확인, 묶어서 재번역.
3. **신규 로케일 hand-rankings/tournament** — fr·ru·it·pl·th·fa는 현재 Rules 6편만 → 다른 클러스터로 확대.
4. **이미지 트랙**(실사 Nano Banana)·GSC 추세.
- **백로그(마스터 공통)**: all-in 캡 근사·game-order 프리플랍 체크 절대표현·pt 코퍼스/street 통일.

### 📌 신규 로케일 배선 절차(재사용 — 향후 언어 추가 시)
① `lib/intl.ts`: `SECONDARY_LOCALES`+코드 + 6개 맵(OG_LOCALE·HTML_LANG·POST_LABELS·CHROME·NAV_HOME_FEED·NAV_CTA) 전부 채우기(TS 빌드가 강제). RTL이면 `RTL_LOCALES`+코드. ② `lib/posts-<lang>/index.ts` 신규. ③ `lib/intl-posts.ts` import+등록. ④ (선택) translate route LANG_NAME. ⑤ FAQ 마커 = 파서 정규식 `**Q. ...?**`+`A. ...`(리터럴 Q./A.) 준수(texas는 `###` 헤딩=마스터 예외). ⑥ 숫자표기 계열 웹리서치(영어식 en·zh·ar·ms·th / 유럽식 es·pt·de·id·vi·it·ru·pl·fr(공백) / fa=영어식 라틴).

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★18개 확장 자율진행 중 17/18: th 완료 / 다음=fa 마지막·RTL)

> **모드**: 다국어 **18개 확장** 자율진행(부재중) 막바지. 순서 fr(✅)→ru(✅)→it(✅)→pl(✅)→th(✅)→**fa(마지막)**. 전 과정 Opus. 신규 로케일 배선 절차는 아래 ru 블록 참조.

### ✅ th(태국어) 완료 (파일럿16, 17번째 로케일)
족보 태국 음차+고유(ตอง 등), 홀덤 순서 ฟูลเฮาส์>ฟลัช. **숫자=영어식 그대로(변환X, en·zh 계열)**. คุณ체·태국어 띄어쓰기 없음. §13 0오류. **17/18**. GSC: `/th/blog/` 6 URL.

### ▶▶ 다음 = fa(페르시아어) — **18개 확장 마지막 언어·RTL**
- ★**RTL 처리 필수**: `lib/intl.ts` `RTL_LOCALES`에 "fa" 추가(현재 `["ar"]` → `["ar", "fa"]`). globals.css `[dir=rtl]` 미러링·renderMarkdown 훅클래스는 ar용으로 이미 구축됨 → 재활용(추가 CSS 불필요 예상, but 빌드 후 fa 페이지 RTL 렌더 육안확인 권장).
- 웹리서치 → `docs/translation-terms-fa.md`: 페르시아어 포커 용어(아랍문자, ar과 다름)·숫자 관습(페르시아 숫자 ۰-۹ vs 라틴 아라비아, 웹리서치로 확인 — 페르시아 웹은 라틴 숫자도 흔함)·문체.
- 배선(7맵+posts-fa/index.ts+intl-posts.ts+translate route) → Opus 6병렬(허용 슬러그=Rules 6개뿐) → 검사(FAQ 마커 Q./A.·RTL) → QA 2배치 → 교정 → 커밋.
- **fa masterUpdated**: texas 2026-07-12·game-order 2026-07-02·betting/blind 2026-07-11·all-in/showdown 2026-07-12.
- **★fa 완료 후 = 18/18 전체 완료 → 요약 보고서 작성**(사용자 지시).

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★18개 확장 자율진행 중 16/18: pl 완료 / 다음=th→fa)

> **모드**: 다국어 **18개 확장** 자율진행(부재중). 순서 fr(✅)→ru(✅)→it(✅)→pl(✅)→**th→fa**. 전 과정 Opus. 신규 로케일 배선 절차는 아래 ru 블록 참조.

### ✅ pl(폴란드어) 완료 (파일럿15, 16번째 로케일)
치명함정 안전: **Poker=straight flush**·**Kareta=포카드**·**Kolor=flush**·**홀덤 Full>Kolor**. 숫자 폴란드식(천단위 공백). §13 0오류. ★교훈: game-order FAQ가 `**P.` 마커였음 → **FAQ 파서 정규식 = `**Q. ...?**`+`A. ...`(리터럴 Q./A. 필수)** — 신규 언어마다 FAQ 마커 Q./A. 확인 필수(texas는 `###` 헤딩 포맷=마스터 공통, 예외). **16/18**. GSC: `/pl/blog/` 6 URL.

### ▶▶ 다음 = th→fa (남은 2)
착수 시 워크플로우 1회 읽기 → 웹리서치→브리프 → 배선 → Opus 6병렬 → 검사(★FAQ 마커 Q./A. 포함) → QA 2배치 → 교정 → 커밋.
- **th**(태국어): 타이 문자·숫자표기 웹리서치(태국은 아라비아 숫자·영어식 소수점 가능성 높음)·성조부호 없음(문자만). 족보 태국어명 웹리서치.
- **fa**(페르시아어): ★**RTL** → `lib/intl.ts` RTL_LOCALES에 "fa" 추가 필수(현재 `["ar"]`) + globals.css `[dir=rtl]`(ar) 재활용. 아랍문자·페르시아 숫자(۰-۹ vs 라틴, 웹리서치)·우→좌.
- **전체(fa) 완료 후 요약 보고서**(사용자 지시).

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★18개 확장 자율진행 중 15/18: it 완료 / 다음=pl→th→fa)

> **모드**: 다국어 **18개 확장** 자율진행(부재중). 순서 fr(✅)→ru(✅)→it(✅)→**pl→th→fa**. 전 과정 Opus. 절차=`docs/translation-spec.md` §0.5 + "★★ 이 작업의 본질". **신규 로케일 배선 절차는 아래 ru 블록 참조.**

### ✅ it(이탈리아어) 완료 (파일럿14, 15번째 로케일)
치명함정 안전 처리: **Poker=포카드**·**Colore=flush**·**홀덤 Full>Colore**(이탈리아 변형과 반대). 숫자 유럽식(마침표 천단위). §13 전수 0오류. **15/18**. GSC: `/it/blog/` 6 URL.

### ▶▶ 다음 = pl→th→fa (남은 3, 신규 로케일 배선 반복)
착수 시 워크플로우 1회 읽기 → 웹리서치→브리프 → 배선 → Opus 6병렬 → 검사 → QA 2배치 → 교정 → 커밋.
- **pl**(폴란드어): 유럽식 숫자(천단위 공백/마침표·소수점 쉼표, 웹리서치 확인)·폴란드 특수문자(ą/ć/ę/ł/ń/ó/ś/ź/ż)·족보명(폴란드어 Poker=포카드류 함정 확인). 라틴.
- **th**(태국어): 타이 문자·숫자표기 웹리서치(태국은 아라비아 숫자·영어식 소수점 가능성). 성조 없음(문자만).
- **fa**(페르시아어): ★**RTL** → `lib/intl.ts` RTL_LOCALES에 "fa" 추가 필수 + globals.css `[dir=rtl]`(ar) 재활용. 아랍문자·페르시아 숫자 관습(۰-۹ vs 라틴, 웹리서치).
- **전체 완료 후 요약 보고서**(사용자 지시).

---

## ▶▶▶ (이전) START HERE (2026-07-13 — ★18개 확장 자율진행 중 14/18: ru 완료 / 다음=it→pl→th→fa)

> **모드**: 다국어 **18개 확장** 자율진행(사용자 부재중, "ru부터 나머지까지 순서대로, 각 언어 시작 시 워크플로우 1회 읽기, 전체 완료 후 요약보고서" 지시). 순서 **fr(완료)→ru(완료)→it→pl→th→fa**. 전 과정 Opus(번역 6병렬 + 적대적 QA 2배치). 절차=`docs/translation-spec.md` §0.5 + "★★ 이 작업의 본질".

### ✅ ru(러시아어) 완료 (파일럿13, 14번째 로케일) — 신규 로케일 배선 + Rules 6/6
러시아 음차 족보(Роял-флеш·Каре·Флеш·Стрит·Сет), 숫자=러시아식 GOST(천단위 공백·소수점 쉼표), ты체, 키릴. §13 전수 0오류(pot 198 000·side pot 1 300·quinte flush 재확인). **14/18**.
- **사용자 GSC**: `/ru/blog/` 6 URL.

### ▶▶ 다음 = it→pl→th→fa (남은 4개, 신규 로케일 배선 절차 반복)
각 언어 착수 시: **① `docs/translation-spec.md` 워크플로우 1회 읽기**(사용자 지시) → ② 웹리서치→브리프 → ③ 신규 로케일 배선(intl.ts 7맵+posts-<lang>/index.ts+intl-posts.ts+translate route; **fa는 RTL** → RTL_LOCALES 추가) → ④ Opus 6병렬 번역(허용 슬러그=Rules 6개뿐) → ⑤ 조립·기계검사(build+check-intl-links+숫자grep) → ⑥ 적대적 QA 2배치(Opus) → ⑦ 교정 → ⑧ 커밋·문서.
- **언어별 숫자·문자 함정**: **it**=유럽식(천단위 `.`·소수점 `,`)·라틴 / **pl**=유럽식(천단위 공백/`.`·소수점 `,`)·폴란드 특수문자(ą/ć/ę/ł/ń/ó/ś/ź/ż) / **th**=타이 문자·숫자표기 웹리서치(태국은 아라비아 숫자·소수점 마침표=영어식일 가능성 확인) / **fa**=페르시아어 **RTL**·아랍문자·페르시아 숫자 관습(۰-۹ vs 라틴, 웹리서치) + ar RTL 인프라(globals.css `[dir=rtl]`) 재활용.
- **masterUpdated**(전 언어 공통): texas 2026-07-12·game-order 2026-07-02·betting 2026-07-11·blind 2026-07-11·all-in 2026-07-12·showdown 2026-07-12. updated=착수일.
- **전체 완료 후**: 요약 보고서 작성(사용자 지시).
- **백로그**: 전 언어 hand-rankings·tournament-vs-cash-game 재번역(stale·category 레거시)·all-in 캡 근사·game-order 프리플랍 체크 절대표현(마스터 공통).

---

## ▶▶▶ (이전) START HERE (2026-07-13 심야2 — ★fr 신규 로케일 개설 = 18개 확장 착수 13/18 / 다음=ru)

> **모드**: 다국어 **18개 확장**(12개 Rules 완결 후 사용자 지시). 추천순 **fr→ru→it→pl→th→fa**. fr 완료 = **13/18**. hi·tr·fr 모두 Fable5 한도 소진 → 전 과정 Opus(번역 서브에이전트 model:opus 6병렬 + 적대적 QA Opus 2배치). 절차=`docs/translation-spec.md` §0.5 + "★★ 이 작업의 본질"(번역=현지 맥락 재구성).

### ✅ 오늘(07-13 심야2) 완료 — fr 신규 로케일 + Rules 필라 6/6 (파일럿12)
fr은 **완전 신규 로케일**(기존 글 0)이라 **인프라 배선부터** 수행 후 6편 번역. 커밋=이번 세션.
- **★신규 로케일 배선 절차(다음 신규 언어 ru·it·pl·th·fa에 그대로 반복)**:
  1. `lib/intl.ts`: `SECONDARY_LOCALES`에 코드 추가 + **6개 맵 전부 채우기**(OG_LOCALE·HTML_LANG·POST_LABELS·CHROME·NAV_HOME_FEED·NAV_CTA) — 하나라도 빠지면 TS 빌드 실패.
  2. `lib/posts-<lang>/index.ts` 신규(get<Lang>Post/has<Lang>Post/<LANG>_POSTS).
  3. `lib/intl-posts.ts`: import + POSTS_BY_LOCALE 등록.
  4. (선택) `app/api/community/translate/route.ts` LANG_NAME.
  5. RTL 언어(fa·ar류)면 `lib/intl.ts` RTL_LOCALES에 추가 + globals.css `[dir=rtl]` 이미 있음(ar 재활용).
  6. 라우트(`app/[locale]/...`)는 SECONDARY_LOCALES 자동생성이라 별도 작업 불필요.
- **핵심(fr)**: 프랑스어 고유 족보명(Couleur=flush·Quinte=straight·Carré·Full·Brelan), 숫자=**프랑스식 천단위 공백**(1 326·198 000 — ★de·es 마침표와 다름!)·소수점 쉼표·% 앞 공백. tu체. §13 전수 0오류.
- **18개 확장 진행 = 13/18** (완료: en+ja·es·pt·de·zh·ar·id·ms·vi·hi·tr·**fr**). **남은 5 = ru·it·pl·th·fa.**
- **사용자 몫(GSC 색인 6 URL)**: `/fr/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.

### ▶▶ 다음 = 🌐 ru(러시아어) — 18개 확장 2번타자
- ru도 **신규 로케일**(lib/posts-ru 없음) → 위 배선 절차 반복. **키릴 문자** → QA에 스크립트/철자 검수 추가. 숫자표기=러시아식(천단위 공백·소수점 쉼표=프랑스와 유사, 웹리서치 확인). 러시아 포커 용어(족보·액션)·문체 웹리서치.
- 파이프라인 동일: 브리프(`docs/translation-terms-ru.md`) → Opus 6병렬 번역(허용 슬러그=Rules 6개뿐) → 조립 → 빌드/링크(하드) → 적대적 QA 2배치 → 교정 → 배포.
- **ru masterUpdated**: texas 2026-07-12·game-order 2026-07-02·betting 2026-07-11·blind 2026-07-11·all-in 2026-07-12·showdown 2026-07-12. updated=착수일.
- **백로그**: 전 언어 hand-rankings·tournament-vs-cash-game 재번역(stale·category 레거시)·all-in 캡 근사·game-order 프리플랍 체크 절대표현(마스터 공통).

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫).

---

## ▶▶▶ (이전) START HERE (2026-07-13 심야 — ★tr 완결 = 다국어 Rules 필라 **12개 언어 완결** / 확장 트랙 종료)

> **모드**: 다국어 Rules 필라 확장 **트랙 종료**. hi·tr 모두 Fable5 한도 소진 상태에서 **전 과정 Opus로 수행**(번역 서브에이전트 model:opus 6병렬 + 적대적 QA Opus 2배치)로 완결. 절차=`docs/translation-spec.md` §0.5. ★**"번역=현지 맥락 재구성 포스팅" 마인드셋 명문화됨**(spec "★★ 이 작업의 본질" + 메모리 [[translation-is-contextual-reposting]]) — 앞으로 모든 번역·현지화 작업에 적용.

### ✅ 오늘(07-13 심야) 완료 — tr Rules 필라 6/6 번역 배포 (파일럿11 = 마지막 언어)
브리프(`docs/translation-terms-tr.md` 신규)→Opus 6병렬 번역→조립→빌드/링크(하드, 초기실패 3건 교정)→적대적 QA 2배치(Opus)→교정6→배포. **§13 전수 재검산 0오류**. 커밋=이번 세션.
- **핵심(tr)**: 터키어 고유 족보명(Floş·Kent·Kare·Full·Üçlü·İki Çift·Çift), 숫자=**유럽식 변환**(1,326→1.326·198,000→198.000·2.5→2,5), sen체, 특수문자 ı/İ/ş/ğ/ç/ö/ü. game-order category "초보 가이드"→"rules".
- **★다국어 Rules 필라 = 12개 언어 완결**: en(마스터)+ja·es·pt·de·zh·ar·id·ms·vi·hi·**tr**. **더 이상 남은 언어 없음.**
- **사용자 몫(GSC 색인 6 URL)**: `/tr/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.

### ▶▶ 다음 트랙 후보 (다국어 Rules 확장 종료 → 사용자와 방향 상의)
1. **다국어 2번째 필라 확장** — Rules가 12개 언어 완결됐으니 다음 필라(예: Hand Rankings 클러스터 or Tournament)를 동일 파이프라인으로 언어 확장. (메모리 [[multilang-expansion-12-to-18]]: EN 마스터 완결→필라별 전언어 선행)
2. **전 언어 stale 2편 재번역** — hand-rankings·tournament-vs-cash-game이 **전 12언어에서 stale**(EN 마스터가 6/9·6/11 갱신됨, 번역본은 6/9·6/11 옛버전) + category 한국어 레거시 + tr hand-rankings "head-up" 오타. `check:stale`로 확인. 묶어서 재번역 스프린트 가능.
3. **이미지 트랙** — 실사 11개 Nano Banana(사용자 몫, 아래 07-12 블록) + GSC 추세.
4. **EN 마스터 심화/신규 클러스터** — retrofit 잔여·신규 필라(PKO·Cash Game 등).
- **백로그(마스터 공통)**: all-in 캡 공식 근사·game-order 프리플랍 체크 절대표현·pt 코퍼스/street 통일.

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫). 콘텐츠 트랙과 별개.

---

## ▶▶▶ (이전) START HERE (2026-07-13 밤 — hi 힌디어 Rules 필라 완결 / 다음=tr 터키어 = **마지막 언어**)

> **모드**: 다국어 Rules 필라 확장 마무리. Fable5 한도 소진 상태 → 이번 hi는 **전 과정 Opus로 수행**(번역 서브에이전트 model:opus 6개 병렬 + 적대적 QA Opus 2배치). 절차·함정은 `docs/translation-spec.md` §0.5(파이프라인)+⚑(언어별) — 작업 전 읽을 것.

### ✅ 오늘(07-13 밤) 완료 — hi Rules 필라 6/6 번역 배포 (파일럿10)
브리프(`docs/translation-terms-hi.md` 신규)→Opus 6병렬 번역→조립→빌드/링크(하드)→적대적 QA 2배치(Opus)→교정5→배포. **§13 전수 재검산 0오류**(카드 한 장도 안 틀림). 커밋=이번 세션.
- **핵심결정(hi)**: 데바나가리 산문 + **라틴 영어 포커용어 인라인**(기존 hi 하우스 스타일). 숫자=**영어식 그대로 변환없음**(en·zh·ar·ms 계열; 인도 콤마체계는 lakh 경계에서만 달라 §13 값 전부 동일), 라틴 숫자·`$` 보존. category 한국어"초보 가이드"→"rules"(game-order 재번역분).
- **Rules 필라 = 11개 언어 완결**: en(마스터)+ja·es·pt·de·zh·ar·id·ms·vi·**hi**. **남은 = tr 1개(마지막).**
- **사용자 몫(GSC 색인 6 URL)**: `/hi/blog/` + texas-holdem-rules-for-beginners·holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-all-in-rules·holdem-showdown-rules.

### ▶▶ 다음 = 🌐 tr(터키어) — Rules 필라 = **다국어 확장 마지막 언어**
- **tr 착수**: `docs/translation-spec.md` §0.5 파이프라인 그대로(Fable5 리셋됐으면 서브에이전트, 아니면 hi처럼 Opus 직접). 먼저 터키어 웹리서치 → `docs/translation-terms-tr.md` 브리프. **숫자표기 = 터키식(천단위 `.`·소수점 `,` = 유럽식) 확인 필수**(§13 값 변환). 터키어 포커 용어(족보·액션)·문체(sen/siz) 웹리서치.
- **tr 현재 보유 확인 필요**(`ls lib/posts-tr/`): 기존 3편(hand-rankings·game-order·tournament-vs-cash) 있으면 hi와 동일하게 신규5+game-order 재번역.
- **tr masterUpdated**: texas 2026-07-12·game-order 2026-07-02·betting 2026-07-11·blind 2026-07-11·all-in 2026-07-12·showdown 2026-07-12. updated=착수일.
- **백로그**: hi/tr hand-rankings·tournament-vs-cash 재번역(stale·category 레거시)·all-in 캡 근사·game-order 프리플랍 체크 절대표현(마스터 공통)·category 한국어 레거시(전 언어 기존글, 비렌더)·pt 코퍼스/street 통일.

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫). 콘텐츠 트랙(다국어)과 별개.

---

## ▶▶▶ (이전) START HERE (2026-07-13 — Rules 필라 다국어 10개 언어 완결 / 다음=hi 신규세션 → tr)

> **모드**: 다국어 Rules 필라 확장. **Fable5 사용량 한도 소진** → 지금부터 **Opus로 번역·QA 직접 수행**(vi에서 검증). 절차·현지화 함정은 `docs/translation-spec.md` §0.5(파이프라인) + ⚑(언어별 하이라이트)에 전부 기록됨 — **작업 전 그 파일 읽을 것**.

### ✅ 오늘(07-13) 완료 — Rules 필라 5개 언어 추가 배포 (zh·ar·id·ms·vi)
EN 마스터 기준 Rules 필라 6편(신규4+재번역 texas·game-order)을 언어별로: 웹리서치 브리프 → Fable5 페르소나 병렬번역 → 조립 → 빌드/링크(하드) → 적대적 QA 2배치 → 교정 → 배포. **§13 전수 재검산 0오류**.
- **zh**(`bed5db2`) · **ar**(`8e71fee`, RTL) · **id**(`72d6ef2`) · **ms**(`ac820de`) · **vi**(`058325a`).
- **부수 성과**: ar QA가 **EN 마스터 §13 산수오류** 역발견("상위 8%"→실제 4.7%=**상위 5%**) → 마스터+es/pt/zh/ja/de 동시교정(`ee9e7af`). **ar RTL 구조결함 수정**(`fc24a88`, `[dir=rtl]` 미러링, globals.css+renderMarkdown 훅클래스, LTR 무영향).
- **vi 특이**: Fable5 한도로 game-order는 **메인(Opus) 직접 번역** + 적대적 QA도 **메인 Opus 자가검수**(§13 6편 통과, 0🔴).

### ▶▶ 다음 = 🌐 hi(힌디어) — **새 세션에서** (Fable5 리셋 후) → 이후 tr(터키어)
- **현재 Rules 필라 = 10개 언어 완결**: en(마스터)+ja·es·pt·de·zh·ar·id·vi + ms. **남은 = hi·tr 2개.**
- **hi 착수**: `docs/translation-spec.md` §0.5 파이프라인 그대로. 데바나가리 문자 → QA에 스크립트/철자 검수 추가. 숫자표기는 인도 관습 웹리서치로 확인. 각 언어 3편만 보유(hand-rankings·game-order·tournament-vs-cash) → 신규5+game-order 재번역.
- **hi masterUpdated 값**: texas 2026-07-12·game-order 2026-07-02·betting 2026-07-11·blind 2026-07-11·all-in 2026-07-12·showdown 2026-07-12. updated는 착수일.
- **번역/QA 주체**: Fable5 리셋됐으면 서브에이전트, 아니면 메인 Opus 직접.
- **백로그**: all-in 캡 공식 근사(마스터 공통)·game-order 프리플랍 체크 절대표현(마스터 공통)·category 한국어 레거시(전 언어, 비렌더)·pt 코퍼스/street 통일.

### (이미지 트랙 — 후속) 실사 11개 Nano Banana + GSC
아래 07-12 블록 참조(사용자 몫). 콘텐츠 트랙(다국어)과 별개.

---

## ▶▶▶ (이전) START HERE (2026-07-12 밤 — KO 이미지 코드렌더 85개 교체·배포됨 / 다음=실사 15개 Nano Banana + GSC)

> **모드**: 이미지 교체작업 자동(Fable5). 코드렌더 트랙 종료 → 남은 건 **실사(사용자 Nano Banana)** + 사용자 GSC.

### ✅ 오늘(07-12) 완료 2 — KO 이미지 §13 코드렌더 85개 교체·배포
`defects.md`의 KO 결함(EN 23개 제외) 전량을 §13-안전 HTML 코드렌더로 재생성·배치. Fable5 10에이전트 병렬 저작 + 메인 렌더/전수 육안검수/배치. **85개 전부 통과**(카드 유효·중복랭크0·한글철자·<60KB). **404 8개도 신규생성**(bluffing-* 4·holdem-position-* 4, posts.ts 본문). 빌드 ✅ 199 pages·에러0. 파이프라인=`scripts/gen-*.html`+`_GEN_SPEC.md`+`render-gen-batch.mjs`(인자필터). 상세=WORKLOG 2026-07-12.

### ▶▶ 다음 = 🎨 실사 11개 Nano Banana (사용자 몫, 나머지) + GSC
`docs/image-audit/photo-prompts-nano-banana.md`에 **코드렌더 불가 실사** 영어 프롬프트 정리(§13·워터마크 반영). apt-incheon처럼 Nano Banana 생성 → `public/images/`에 파일명 그대로 배치 → 사용자가 파일 경로 주면 메인이 webp 1200×675 변환·§13검수·커밋.
- **✅ 4개 완료(07-12, 커밋 f114c67)**: apt-jeju-foodcourt · apt-jeju-classic-2026-guide-hero · apt-jeju-2026-fall-guide-hero · apt-jeju-cu-store(사용자 촬영 GS25). 변환=`sharp .rotate().resize(1200,675,cover)` + 품질 자동(≤60~80KB).
- **⏳ 남은 11개**: apt-jeju-classic-2026-hero · apt-jeju-main-event-winner · apt-jeju-nau-cafe · apt-jeju-satellite-strategy · pub-legal-card-table · pub-legal-casino-floor · beginner-mistakes-korea-pub · bubble-faq/summary/table · wsop-2026-tournament-guide-hero · 3bet-sizing. (여러 장 한번에 뽑으면 Gemini가 헤매므로 시간날 때 조금씩 — 사용자 방침.)
- 이후 콘텐츠 트랙 복귀(감글 retrofit·다국어 확장, 아래 이전 블록).

---

## ▶▶▶ (이전) START HERE (2026-07-12 — EN 이미지 교체 배포됨 / 다음=KO 이미지 전수교체)

> **모드**: 이미지 교체작업은 사용자가 **자동(Fable5)** 재지시(2026-07-12, [[retrofit-full-automation]] 참고 — 작업별 on/off). KO 이미지 교체도 자동으로 이어가면 됨.

### ✅ 오늘(07-12) 완료 — EN 이미지 §13 결함 교체 배포 (커밋 a7d58ce)
전 사이트 이미지 전수감사(Fable5 18배치, `docs/image-audit/defects.md`, 결함~117/310) → **EN 사용 결함 24개 중 23개를 코드렌더 인포그래픽으로 교체**(§13 육안검수·alt 30개 정정). 상세=WORKLOG 2026-07-12.
- **⚠️ EN 미해결 1**: `apt-incheon-2026-guide-hero`(여행 실사) 코드렌더 불가 → 실사/AI포토 필요.

### ▶▶ 다음 = 🖼️ KO 이미지 전수교체 (내일 예정, 자동)
`defects.md`의 **KO 결함 대다수**: 텍스트 인포그래픽(깨진 한글·CS노트유입·"No entry!"·"[cite]"·중복블록) — `flush-vs-straight-c*`·`beginner-mistakes-*`·`pub-*-infographic`·`pot-odds-*`·`holdem-3bet-*`·`check-raise-*`·`small-blind-*`·`kk-*`·`pocket-aces-*`·`overbet-*`·`rules-*` 등 + **깨진 404 8개**(lib/posts.ts 레거시: bluffing-*·holdem-position-*). 코드렌더 파이프라인(`scripts/gen-*.html`+`render-gen-batch.mjs`) + 한글 텍스트는 HTML이라 정확. 404는 생성 or 참조제거.

### ✅ (완료) retrofit 스프린트 11편 배포 (커밋 019de04→ba737c0)
감글 retrofit: #1 starting-hands-chart(PDF) · #2 positions×position-play · #3 tournament×vs-cash · 2차웨이브 blind-meaning·betting-actions·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board. 상세=WORKLOG 2026-07-11.
- **사용자 몫(GSC 색인 11 URL)**: `/en/blog/`+ starting-hands-chart·positions·position-play·tournament·tournament-vs-cash-game·blind-meaning·betting-actions·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board.

### ✅ retrofit 스프린트 전량 배포 (11편, 커밋 019de04→ba737c0)
감글 retrofit: **#1** starting-hands-chart(PDF차트) · **#2** positions×position-play · **#3** tournament×tournament-vs-cash-game · **2차웨이브** blind-meaning·betting-actions·flush-vs-straight·tiebreak-rules·split-pot-rules·reading-the-board. 전부 뱅크 재타깃+카니발 분리+§13 전수검증(40+ 핸드예시 brute-force)+제3자 QA. 상세=WORKLOG 2026-07-11.
- **사용자 몫(GSC 색인 — 11개 URL)**: `/en/blog/` + holdem-starting-hands-chart·holdem-positions·holdem-position-play·holdem-tournament·holdem-tournament-vs-cash-game·holdem-blind-meaning·holdem-betting-actions·holdem-flush-vs-straight·holdem-tiebreak-rules·holdem-split-pot-rules·holdem-reading-the-board.

### ▶▶ 다음 최우선 = 🖼️ 사이트 전수 이미지 §13 감사 (이번 스프린트 핵심 발견)
레거시 **AI생성 실사에 불가능 카드·깨진 클록글자·오카운트가 광범위**. 확인된 것만: `rules-texas-holdem`(뒤섞인 카드, 다수글 히어로/썸네일)·`tournament-table-action`(K♣5핏+"TOUNG LEVEL", betting-actions 등)·`icm-chips-not-money-real`(뭉개진 A/K)·`holdem-bubble-table`(블랙잭). **전 이미지 Read 개봉→결함목록→HTML인포그래픽/실사 교체.** 파이프라인 확립됨(`scripts/*-hero.html`+render-*.mjs, 카드렌더 CSS). 이건 수동/자동 사용자와 상의.
### 이후 대기(보류)
신규클러스터(PKO/Tournament Types·Cash Game 7필라)·이벤트가이드 4편 retrofit·KO 구버전 업데이트.

## (완료된 이전 진행표) 새 세션 START HERE (2026-07-11 — retrofit 스프린트: #1·#2 배포됨 / #3 진행 중, 완전자동)

> **완전 자동화 모드**(사용자 지시 "내 의견 묻지 말고 배포까지, 자리비움"): 게이트 없이 배포까지 자동, 🔴 자동해소불가·빌드실패만 멈춤. 메모리 [[retrofit-full-automation]]. 역할: 메인(Opus)=게이트없음·빌드·PDF/이미지렌더·git / Fable5 서브에이전트=초안·리서치(뱅크매핑)·§13팩트체크·독립QA·이미지HTML저작. **검수는 초안 쓴 에이전트 말고 제3 에이전트로.** 카니발 쌍은 한 커밋 배포.

### ✅ #1 배포 — `holdem-starting-hands-chart` (커밋 `019de04`)
뱅크 기반 전면 리라이트, H2 10개(good/best/chart/6-max/GTO/worst/printable PDF/quiz/FAQ8). §13 전수 CORRECT+6곳 교정. 인쇄용 PDF 신설. 상세=WORKLOG.
### ✅ #2 배포 — `holdem-positions`(A)×`holdem-position-play`(B) (커밋 `2ec5bb8`)
카니발 분리(A=좌석·이름 / B=in-out 전략). §13 전수+교정. 제3 QA가 **B 이미지 3개 §13 결함**(hero CO↔BTN 뒤바뀜 등) 적발→HTML→Playwright→webp 교정 재생성. 상세=WORKLOG.
- **사용자 몫(GSC 색인)**: `/en/blog/holdem-starting-hands-chart`·`/en/blog/holdem-positions`·`/en/blog/holdem-position-play`.
- **🟡 잔여**: #2-A 본문이미지 재사용(클러스터-고유 규칙, 비블로커).

### ▶▶ #3 진행 중 — `holdem-tournament`(A 허브) + `holdem-tournament-vs-cash-game`(B)
매핑 완료(뱅크 `en-tournament.md`·`en-cash-game.md`). 카니발: A=구조/종류(freezeout·PKO·satellite·deepstack 정의 흡수)/진행/입장, B=vs캐시 비교+캐시게임 기초. 첫링크 A=B비교·B=A허브. **B category 버그 "토너먼트"→"tournament" 교정**. ICM/bubble/short-stack/이벤트가이드/rake는 route-out(중복금지). `:::pillarhub` 렌더러에 없음—`:::readnext`+Related로 로드맵.

### 📌 이후 대기
2차 웨이브=Rules/족보 감글(betting-actions·blind-meaning·flush-vs-straight·tiebreak·split-pot·reading-board, 기존 뱅크 en-can-you·en-what-is-a·en-what-beats로 커버). **제외(보류)**: 신규 클러스터(PKO/Tournament Types·Cash Game 7필라)·이벤트가이드 4편.

### 🔧 실무 메모
- Fable5 서브에이전트는 이 세션에서 **셸 사용 불가**(denied) → 빌드·PDF렌더·git·이미지압축은 전부 메인이 실행. 생성/저작/분석만 Fable5.
- PDF 재생성: `node scripts/render-starting-hands-pdf.mjs`(Playwright A4). `/downloads`는 PDF 다운로드 선례 확립됨(webp정책은 이미지 한정).
- **인포그래픽 재생성 파이프라인 확립**(커서 대신): Fable5가 자립형 1200×675 HTML 저작(scripts/pos-*.html) → `node scripts/render-pos-infographics.mjs`(Playwright 스크린샷+sharp webp, 19~25KB) → Read로 육안검수(철자·§13·잘림) → public/images 교체. 온브랜드 다크 인포그래픽·좌석맵 다이어그램에 유효.

---

## ▶▶▶ (이전) START HERE (2026-07-11 심야 — EN 키워드뱅크 재구축 + 감사, 다음=감글 retrofit 스프린트)

> **이번 세션은 코드/포스트 변경 없음.** 전량 준비작업(전략확정 + EN 감사 + lowfruits 키워드뱅크 재구축).
> ⚠️ **작업트리 dirty**: `docs/keyword-bank/` 4파일 신규·수정(미커밋). 다음 세션에서 스프린트 결과와 함께 커밋하거나, 먼저 커밋할지 판단.

### 🎯 큰 그림 (왜 이 작업을 하나)
EN 블로그를 **18개 언어(현 12→18) 전부 1티어 현지어로 번역**할 계획. EN이 번역 마스터라 **키워드·사실 완벽해야** 함. 그래서 번역 전에 **① EN 전면검수(Master Lock) → ② 필라1 전언어 선행(색인 시계) → ③ 언어별 완결 클러스터** 순. (상세 메모: `multilang-expansion-12-to-18`)

### ✅ 이번 세션 완료
1. **EN 감사(audit)** — 42개 EN 글 분류: **17개 "감(by-feel)"**(2026-07-03 키워드뱅크 시스템 이전 글) / 19 데이터기반 / 6 SERP대체. 이벤트가이드 4편은 감이지만 **retrofit 대상 아님**(고아링크만).
2. **키워드뱅크 재구축** — 과거엔 **트레일링(`X *`)만** 수확 → blind spot 발견(예: `good starting hands` 2400 누락). **위치 변형(트레일링+중간)**으로 재수확·박제:
   - 🆕 `docs/keyword-bank/en-starting-hands.md` (238+57)
   - 🆕 `docs/keyword-bank/en-position.md` (94+348+110)
   - 🔄 `docs/keyword-bank/en-tournament.md` 보강 (PKO·freezeout·satellite·vs-cash 클러스터 = 트레일링이 놓친 광맥)
   - 🆕 `docs/keyword-bank/en-cash-game.md` (177+115+205, +Cash Game 7필라 후보 근거)
3. **메모리 갱신**: `keyword-harvest-wildcard-positions`(수확 규칙) · `multilang-expansion-12-to-18`(확장전략) · `content-workflow-pillar-sprint`(모델=Fable5로).

### ▶▶ 다음 세션 할 일 — 감글 retrofit 스프린트 (1편씩 품질집중)
각 글마다: **① `.cursor/rules/posting.mdc` + 현재 글 읽기 → ② 뱅크 기반 재설계 각도(seoTitle/H2/FAQ)를 사용자에게 게이트(한국어 2~3줄) → ③ 초안 → ④ §13 핸드검산(적대적 서브에이전트) → ⑤ 빌드 → ⑥ 이미지 커서.**

**우선순위(뱅크 완비된 것부터):**
1. **`holdem-starting-hands-chart`** ← 1번타자(감사 최우선·피링크6·뱅크 제일 두꺼움). 헤드=`best/good starting hands` 2400×2·LDA24, `poker starting hands chart` 1300·LDA21. 뱅크: `en-starting-hands.md`. (주의: nicknames·probability는 각각 Glossary·probability로 라우팅)
2. **`holdem-positions`(좌석·이름) + `holdem-position-play`(전략)** ← 뱅크 `en-position.md`가 둘로 갈라줌. 헤드 3600×LDA22. 보석: seat numbers LDA1·hijack LDA7·why-position-matters LDA8.
3. **`holdem-tournament`(허브) + `holdem-tournament-vs-cash-game`** ← 뱅크 `en-tournament.md`·`en-cash-game.md`. 허브에 PKO/freezeout/satellite 정의 FAQ 흡수.

**신규 클러스터 후보(감사 중 발견, 나중):**
- "Poker Tournament Types" 또는 "PKO/Bounty Strategy"(freezeout·satellite·PKO·deepstack — 트레일링이 놓쳤던 광맥)
- Cash Game 7번째 필라(근거는 있으나 볼륨 후순위 → 보류)

**2차 웨이브(신규 시드 불필요 — 기존 뱅크로 커버)**: Rules/족보 감글(betting-actions·blind-meaning·flush-vs-straight·tiebreak·split-pot·reading-board)은 기존 `en-can-you`·`en-what-is-a`·`en-what-beats`(전부 mid라 blind spot 없음)로 retrofit.

### 📌 참고
- lowfruits 수확 규칙(다음에도 적용): 트레일링+중간 두 위치 / 넓은 토픽 앞`*`은 지역노이즈→Questions·PAA 탭 / **Analyzed만 export**(AVL·Related 무시) / 판정 LDA≤20 매우승산·20~35 좋음. (메모 `keyword-harvest-wildcard-positions`)
- xlsx 파싱: inlineStr 방식 → PowerShell `System.IO.Compression`으로 sheet1.xml 직접(A=Keyword,D=DA,E=WeakSpot,G=Volume).

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-11 밤 — 펍 허브 완성·배포됨)

**작업트리 clean, 전부 배포됨.** 상세는 `WORKLOG.md` 2026-07-11.

### ✅ 이번 세션 완료(배포됨)
- 🟢 **펍 정보 필라 `holdem-pub-guide` 신설** — 흩어진 펍 글을 잇는 관문(뭐하는곳→비용→합법→지역찾기). `:::pillarhub`로 첫방문·합법·**/pub**·홍보신청 묶음. 첫 내부링크=`/pub`. §13급 적대적 팩트체크 교정후 PASS(이용권보상·판돈레이크·"돈딴다" 자기모순 등 🔴4건 교정). 히어로 커서 실사(1200×675·25KB·워터마크 검수 통과).
- 🔗 **`/pub` ↔ 필라 상호링크**(인덱스+지역 페이지 역링크, 클러스터 3편 역링크).
- 🧱 **선별 매장 틀**(`lib/pubs.ts` `featuredPubs?` 필드 + 지역 페이지 카드/CTA 렌더, 비면 플레이스홀더 폴백). "지역당 1곳 선별·집중" 반영. Playwright 디자인 검수 통과. **데이터는 접수되면 채움**(접수 채널=holdemmaster.kr@gmail.com).
- 🩹 **라이브 2편 교정**(사용자 승인): `holdem-pub-legal`·`holdem-pub-first-visit-guide` "이용권 보상=합법" 프레임→음료·상징적 보상(2024 지침 위법소지 해소).
- 빌드 ✅ 57 posts.

### ▶▶ 즉시 할 일 (사용자 몫)
1. **GSC 색인**: `/blog/holdem-pub-guide` 색인 요청 + 재크롤 `/blog/holdem-pub-legal`·`/blog/holdem-pub-first-visit-guide`·`/pub`.
2. **실 매장 접수되면** → `lib/pubs.ts` 해당 지역 `featuredPubs`에 채우기(틀·렌더 완비, 데이터만 추가).
- ※ **발행일=2026-07-11(오늘 첫·유일 포스팅)**. 전략·블라인드스틸·임플라이드·펍소개 4편은 **어제(2026-07-10) 작업**(이전 세션이 07-11로 잘못 라벨링·date 기재, 실제 커밋 07-10). → 다음 세션에서 그 4편 `date` 07-10 정정 여부 판단.

### 📌 후속 과제(별도 세션)
- **`holdem-pub-legal` 법적 근거 전면 재정비**: 현재 게임산업법 제28조 중심 → 실제 2024 프레임(형법 도박공간개설죄 + 관광진흥법 카지노 유사행위 금지 + 청소년 유해업소 지정)으로. 팩트체크 필수.
- 얇은 허브 마저: 확률→`holdem-drawing-odds`(KO) / 포지션→`홀덤 포지션 종류`(카니발 주의).

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-11 마감 — 필라 보강 4편 + 펍 B2B 자산)

**작업트리 clean, 마지막 커밋 `46c5b14`, 전부 배포됨.** 상세는 `WORKLOG.md` 2026-07-11.

### ✅ 오늘 완료(배포됨)
- 🔴 **`holdem-strategy`** — 비어있던 '전략' 필라 신설 + 고아 8편 클러스터링(1순위 완료)
- 🟡 **`holdem-blind-steal`** — 포지션 허브 2→3편(GSC 기회키워드)
- 🟡 **`holdem-implied-odds`** — 확률 허브 3→4편(리버스 임플라이드 §13)
- 📣 **`holdem-pub-promotion`** — 홀덤펍 사장 대상 무료 소개 신청 B2B 안내(지역당 1곳 선별·집중 원칙, 연락=`holdemmaster.kr@gmail.com`)
- 🛠️ 블로그 하단 네비 폴백(최신/최고참 글 빈칸→전체글 링크, KO+다국어)
- 💰 `docs/pub-promotion-monetization-plan.md` — 유료 티어 기획서(지역 독점 레버)
- 전부 §13/적대적 팩트체크+법률 컴플라이언스 검수 통과. **하루 4편이라 대량발행 주의 → 나머지 분산.**

### ▶▶ 내일 할일 (우선순위)
1. **🟢 펍 허브 완성** (오늘 논의·설계 완료, 실행만 남음):
   - ① **blog 펍 정보 필라 `holdem-pub-guide` 신설**(홀덤펍 정보 관문) → `:::pillarhub`로 3편 묶기(첫방문·합법성·홍보신청)
   - ② **/pub(지역 디렉토리 허브)과 상호링크** — 펍 필라 첫 내부링크=/pub, /pub→펍 필라 역링크
   - ③ /pub/[지역] 페이지에 **선별 매장 채우는 틀** 마련
   - ※ `/pub`은 이미 색인된 "거래형 지역 허브"(10개 지역), blog 정보 필라가 없어 반쪽 상태. 이걸 메우는 작업. (홀덤펍 사장 홍보 신청 접수되면 여기 채움)
2. **🟡 얇은 허브 마저**: 확률→`holdem-drawing-odds`(4→5편) / 포지션→`홀덤 포지션 종류`(카니발 주의)
3. **사용자 몫(GSC 색인)**: 오늘 4편 URL 색인 요청 — `/blog/holdem-strategy`·`/blog/holdem-blind-steal`·`/blog/holdem-implied-odds`·`/blog/holdem-pub-promotion`
4. **펍 소개글 후속(선택)**: 접수 채널 구글폼 전환·텔레그램 보조·커스텀 히어로 이미지(상세 아래 3순위 블록)

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-10 — 사이트 UX/구조 최적화 세션)

**작업트리 clean, 마지막 커밋 `e9e12c4`, 전부 배포됨(push 완료).** 상세는 `WORKLOG.md` 2026-07-10 최상단.

### ✅ 이번 세션 완료(배포됨) — 포스팅 아님, 사이트 유저친화 구조 최적화
- **A(독서 경험)**: 읽기 진행바(형광무지개 5px, 블로그 글 상단, KO+다국어) · 이전/다음 글 정렬 피드와 일치 · li 폰트 통일. 커밋 `372d773`.
- **홈피드 탐색**: 데스크톱 홈탭 우측 ↑/↓ 화살표(유튜브식 `data-feed-card` 글 카드 이동) · "맨 위로" 에스컬레이터식(`lib/smooth-scroll.ts`). 커밋 `c768e8d`.
- **B-1 필라 허브 구조 신설**: `:::pillarhub[제목]` 재사용 디렉티브(`renderMarkdown`, KO+다국어 공용) — 골드 번호배지+세로 연결선+클릭 스텝 카드, 크림 카드+hover pop-out. **6개 KO 필라에 학습 로드맵 삽입 완료**(커밋 `035078b`+`e9e12c4`).

### ▶▶ 새 세션 = 필라-클러스터 보강 (이 분석 그대로 전부 실행)
**현재 상태: 52편 중 31편(60%)이 6개 허브로 조직됨. 아래 우선순위대로 나머지 공백 메우기.**

**현재 필라-클러스터 지도(허브 6):**
| 필라 허브(slug) | 클러스터 | 밀도 |
|---|---|---|
| 족보 `holdem-hand-rankings` | 헷갈리는TOP7·플러시vs스트·타이브레이크·스플릿팟·vs7포커 | 🟢5 |
| 규칙 `holdem-rules` | 게임진행·블라인드·스몰블라인드·체크·초보실수10 | 🟢5 |
| 프리플랍 `holdem-starting-hand-range` | 언제폴드·레이즈·AK오프·AA·KK | 🟢5 |
| 토너먼트 `holdem-tournament-how-to-enter` | vs캐시·바이인·일정·버블·ICM·세금 | 🟢6 |
| 확률 `holdem-probability` | 아웃츠·팟오즈·확률계산 | 🟡3 |
| 포지션 `position-is-everything-in-holdem` | 버튼·스몰블라인드 | 🟡2 |

**보강 우선순위(새 세션 실행 목록):**
1. ✅ **완료(2026-07-11) — 베팅·공격 전략 허브 신설**: 신규 KO 필라 `holdem-strategy` 발행(비어있던 전략 필라, EN만 있던 슬러그 KO 신설). `:::pillarhub`로 **고아 8편 클러스터링**(레인지·3벳·C벳·체크레이즈·밸류벳·블러핑·오버벳·**뱅크롤 포함**). §13 PASS + 적대적 팩트체크 필수 5건 교정. 클러스터 8편 역링크 완료. 빌드 53편. **⏳ 남은 것=이미지 2개(hero+decision) 커서 생성 → 빌드·커밋·푸시·GSC 색인 `/blog/holdem-strategy`. 아직 미배포.** (상세 WORKLOG 2026-07-11)
   - ~~고아 7편을 묶을 신규 허브 글~~ → 위로 대체 완료.
2. **🟡 얇은 허브 채우기** (진행 중): ✅ **`holdem-blind-steal` 발행·배포**(포지션 허브 2→3편, 이미지 완료). ✅ **`holdem-implied-odds` 발행**(확률 허브 3→4편, 팩트체크 치명 §13 1건 교정, ⏳이미지 2개 대기·미배포). GSC 색인 두 글 필요. **남음**: 확률→`드로잉 오즈` KO편 / 포지션→`홀덤 포지션 종류`(포지션 필라와 카니발 주의). (상세 WORKLOG 2026-07-11)
3. **🟢 펍 허브 승격**: 현 2편(펍 첫방문·합법)→클러스터 몇 편 추가 시 7번째 허브. (펍=한국 검색 강점)
   - ✅ **`holdem-pub-promotion` 발행·배포**(2026-07-11): 홀덤펍 사장 대상 **무료 소개 신청** B2B 안내글. "홀덤펍 홍보/마케팅/입점" 무주공산 키워드 선점 + 펍 콘텐츠 씨앗. Fable5 경쟁사·법률 리서치 + 컴플라이언스 검수(필수 6건 반영, 총판=배제선언만·합법 인증프레임 해체). 상세 WORKLOG 2026-07-11.
   - **⚠️ 사용자 확인(먼저 처리 권장)**: ①연락처=✅**브랜드 전용 `holdemmaster.kr@gmail.com`으로 교체 완료**(개인 Gmail 노출 해소). (선택)추후 구글 폼으로 전환 시 사업자등록번호 필수화로 스팸 1차 필터 가능. 텔레그램 핸들 있으면 보조 기입. ②히어로 커스텀 이미지 교체(현재 `holdem-raise-how-much-pub.webp` 재사용). ③GSC 색인 `/blog/holdem-pub-promotion`. ④실제 소개 펍이 쌓이면 펍 허브로 승격.
   - 📌 **하루 대량 발행 주의**(사용자 지시): 오늘 4편(전략·블라인드스틸·임플라이드·펍소개) 발행 → 대량 양산 신호 방지 위해 남은 글은 내일 이후로 분산.
   - 💰 **유료 티어 기획서 완비**: `docs/pub-promotion-monetization-plan.md` — 지금은 무료로 판 키우고, 매장 20~30곳+유입실적 쌓이면 무료 기본 유지+전용소개글/상단노출/배너를 '광고 표기'와 함께 유료화. 발행글이 이미 이 전환을 미리 설계함(구조 변경 불필요). **미래 온라인(해외 라이선스) 사업은 이 clean 사이트와 별도 도메인/법인으로 분리**(사용자 방향 확인됨).
4. **이벤트 가이드 9편**(WSOP·APT·APPT…): 로드맵 아님=일정 인덱스 성격 → 토너먼트 허브에 이벤트 섹션 링크 or `/tournaments` 페이지 활용.
5. **EN 필라 6개**: 동일 `:::pillarhub` 적용(이번엔 KO만 함). EN 클러스터 맵은 `docs/en-blog-pillar-cluster-map.md` 참조.
6. **(B-2, 별개 트랙) 사이트 내 검색**: 94편이라 가치. SEO 유입 사이트라 우선순위는 위 콘텐츠 보강 다음.

### 🛠️ 새 세션 워크플로우
- **`:::pillarhub` 추가는 이제 기계적**: 허브 글에 아래 블록만 넣으면 렌더됨(디렉티브·CSS 완비). 위치=도입/핵심 다음·심화 앞. 예:
  ```
  ## [주제] 완전정복 로드맵
  [도입 한 문장]
  :::pillarhub[로드맵 제목]
  /blog/slug | 라벨 | 한 줄 설명
  :::
  ---
  ```
- **신규 허브 글 작성 시**: 반드시 `.cursor/rules/posting.mdc` + §13(핸드검산) 준수. 초안=메인(Claude) 1편 집중, 팩트체크=적대적 서브에이전트, 이미지=커서. 클러스터 slug는 넣기 전 **실존 grep 필수**(깨진 링크 0).
- **에이전트 = Fable 5**(사용자 지정). 검수·빌드·커밋은 메인. 배포 전 로컬 dev 확인 후 push, build 시 dev 먼저 종료(.next 충돌).
- **태그는 제외 확정**(얇은콘텐츠·카니발·크롤낭비=상위노출 역효과, 사용자 합의). TL;DR 상단요약 표준화(94편)는 별도 세션.

---

## ▶▶▶ (이전) 새 세션 START HERE (2026-07-09 밤 — 계산기 보강 세션)

**작업트리 clean, 마지막 커밋 `af8ff9c`, 전부 배포됨(push 완료).** 상세는 `WORKLOG.md` 2026-07-09 최상단 참조.

### ✅ 이번 세션 완료(배포됨) — `/calculator` 시그니처 자산화 1·2단계
- 목표: "ICM 계산기" GSC 1페이지 5~6위 → **Top3**. Fable5 기획(콘텐츠/SEO + 디자인/모바일) 후 실행.
- **①색인 기술공사**: KO 계산기 서버 metadata 부재로 **canonical이 루트로 오염**되던 것 수정(page.tsx 서버 metadata+JSON-LD+ko↔en hreflang, title 선두 "ICM 계산기"). **← 5~6위 정체 최유력 원인 제거, GSC 재크롤 시 개선 기대**.
- **②디자인 세련화+모바일**: 크림 사이트 + 도구 패널만 `.calc-console` 다크 스코프(대비버그 해소, 데이터색 보존). 모바일 360/390 오버플로우 0.
- **③ICM 콘텐츠**: 버블 워크드 예시·ICM딜vs칩찹·FAQ 8개(FAQPage 스키마). 수치 전부 computeICM §13 검산.

**★1·2·3단계 + EN 이식까지 전부 완료·배포됨(마지막 `5abe4a1`).** 계산기 보강 프로젝트 종료. 남은 건 사용자 GSC 작업 + 배포 후 관찰.

### ▶ 내일 할 일 / 관찰
1. **GSC(사용자 몫)**: `/calculator`·`/en/calculator` URL 검사 → **색인 재요청**(canonical/title/스키마 교정 반영). 2~4주 "ICM 계산기" 순위·"ICM 딜" 신규쿼리 발생 추적.
2. **관찰 지표**: "ICM 계산기" 5~6위→top3 진입 여부, "ICM 딜"·"칩찹" 신규 노출, FAQ/워크드예시가 롱테일 흡수하는지. 효과는 재크롤 후 2~4주.
3. (선택) `scripts/mobile-audit.mjs` 계산기 지원 파라미터화(현재 EN블로그 전용) — 이번엔 직접 overflow 측정으로 대체함.
4. **다음 콘텐츠**: ✅ **EN `holdem-icm` 발행 완료**(Tournament 필라, 계산기 연동 마스터, 팩트체크 PASS, 이미지2+워터마크). GSC 색인 `/en/blog/holdem-icm` 필요. → 다음 후보: EN `holdem-bubble`(ICM과 짝·EN 공백)·`what-beats-what`(HandRankings 6/6 완성)·Strategy 심화. lowfruits 활용법 확립됨(사용자 export→`docs/keyword-bank/en-*.md`).

---

## (이전) START HERE (2026-07-09 — 영어 도구 + SEO 세션)

**작업트리 clean, 마지막 커밋 `4cef9bf`, 전부 배포됨.** 상세는 `WORKLOG.md` 2026-07-09 참조.

### ✅ 이번 세션 완료(배포됨)
- 영어 도구 5종 신설(`/en/calculator·quiz·hand-chart·glossary·ranking`), 채팅 툴배너 i18n 버그 해소.
- Fable5 4에이전트 전수검토 → 계산기/핸드차트/퀴즈/용어사전 오류 수정(EN+KO 동일버그).
- poker-eval 휠 스트레이트 버그 수정. 커뮤니티 탭 URL 동기화(뒤로가기 복원).
- **카니발 해소**: `/hand-chart`(KO+EN)·`/en/glossary` noindex(블로그 필라 소유). 계산기·quiz·ranking·KO glossary는 색인 유지. → 규칙은 메모리 `seo-tool-vs-blog-cannibalization` 따를 것.
- 워터마크 규칙 = 커서 프롬프트에 지시 포함 방식.

### ▶ 내일 할 일 / 관찰
1. **GSC**: `/hand-chart` 삭제요청 제출됨 → "삭제됨" 상태 확인만. (EN 도구 2개는 신규+noindex라 조치 불필요)
2. **관찰(수 주)**: noindex한 hand-chart/glossary 키워드를 블로그 필라가 넘겨받는지 GSC 추적. **계산기 "ICM 계산기" 이미 1페이지 5~6위 = 시그니처 자산 후보**(top3 노려볼 만함, 콘텐츠 보강 여지).
3. **영어 랭킹**(`/en/ranking`): 배너 숨김+페이지 존재. 재노출 여부 미정(제휴/법적 성격, 시장 맞춤 필요시).
4. **다음 콘텐츠**: 새 영어 포스트(키워드뱅크) or 필라 심화. 도구는 5종 완비.

---

## (이전) START HERE (2026-07-06 밤 v4 — 어드민 구축 세션)

**이 세션 = 콘텐츠가 아니라 커뮤니티/어드민 기능 작업이었음.** 작업트리 clean, 마지막 커밋 `6389245`.

### ✅ 이번 세션 완료(배포됨)
1. **글쓰기 크래시 수정**(`f74236a`) — community-client의 `FONT_SERIF/FONT_SANS` TDZ(선언이 WriteModal 아래) → 위로 이동.
2. **어드민 v1 구축**(`e0698b8`) — `/admin` 신설. 게이트=env `ADMIN_EMAILS`(현재 `fire7964coco@gmail.com`) + service-role RLS 우회. 탭 5개: 대시보드(통계)·회원(검색·상세·뱃지)·모더레이션(글/댓글/채팅 삭제)·팝업(CRUD+ON/OFF)·이벤트(추첨 수동실행 테스트).
   - **파일**: `lib/admin.ts`(requireAdmin/isAdminEmail), `lib/supabase/admin.ts`(기존 createAdminClient 재사용), `lib/event-draw.ts`(performDraw 크론·어드민 공유), `app/admin/{page,admin-client,actions}.tsx`, `components/site-popup.tsx`(전역 팝업 표시, layout에 마운트), `supabase/schema.sql`(popups 테이블 — **DB에 이미 실행 완료**).
3. **★event_id 버그 해결**(`e0698b8`) — `CURRENT_EVENT_ID` 하드코딩(2026-W26 고정) 제거 → `getCurrentEventId()`(ISO 주차 자동계산)로 앱·크론 자동 동기화. 이제 회차 수동갱신 불필요. (5곳 교체: event-config/actions/community-client/event-tab/cron)
4. **골드 버튼 라벨 안 보이던 버그**(`af2d3a8`) — btn()이 배경 transparent인데 color를 다크로 덮어써 라벨 안 보임 → primary 버튼에 `background: GOLD` 추가.
5. **로그아웃 UX**(`4d614cd`→`6268a90`) — 서버액션 폼 → 브라우저 클라이언트 로그아웃 + `setCurrentUser(null)` 옵티미스틱. 클릭 즉시 로그인버튼으로 바뀜(새로고침 전까지 로그아웃버튼 남던 문제 해결). 로그인 링크에 active:scale 눌림감.
6. **회원 탭 로그인 시각**(`6389245`) — 각 행에 "로그인 [시각]" + 최근 로그인순 정렬 + 24h내 로그인 🟢 표시. (`last_sign_in_at` 기준 = 이력, 실시간 접속 아님)

### ⚙️ 사용자가 완료한 인프라 설정
- **Vercel env**: `ADMIN_EMAILS` 추가 완료. `SUPABASE_SERVICE_ROLE_KEY`(값에 한글 섞여 깨져있던 것 → 새 `sb_secret_...` 키로 교체 완료)·`CRON_SECRET` 존재. → `/admin` 정상 작동 확인(회원5·글2·채팅1).
- **Supabase**: `popups` 테이블 생성 완료. 추첨 테스트 정상(비트코인 블록해시 방식) 확인 후 테스트 회차 삭제함.

### ▶ 내일(새 세션) 할 일 = 접속 IP 로그 (A안 확정)
**목적**: 다계정 어뷰징 적발(특히 로또 이벤트 상금 사기). 사용자 예전 사이트처럼 IP 접속기록 누적.
**A안(확정·가벼움)**:
1. `access_logs` 테이블 신설 (`id, user_id, ip, user_agent, created_at`) + RLS(본인 insert / 어드민 service-role read). **SQL은 사용자가 실행.**
2. **IP 기록**: 로그인 시 + 방문 요청 시 **직전 IP와 다르면** 새 줄 추가(log-on-change). 서버액션에서 `headers()`의 `x-forwarded-for` 첫 IP. 세션당 과다기록 방지 스로틀.
3. **어드민 회원 상세**에 → 접속기록(IP·시각·기기) 누적 표시 + **★"같은 IP 쓴 다른 계정" 목록**(다계정 클러스터 적발). (선택) 대시보드 "최근 접속 유저".
**한계 명시**: 모바일 CGNAT(남남도 같은 IP)·VPN 우회·집/회사 공유 → **자동차단 X, 사람이 보고 판단하는 "신고 센서"**로만.
**나중(커지면)**: 폰인증으로 "참여=무료 / 상금자격=폰1개당1"을 분리(근본 Sybil 방어). 지금은 과함.

### 📌 확정된 전략 결론(이번 세션 논의)
- **커뮤=리텐션 전용(noindex 확정) / 블로그=SEO(색인)** 로 역할 분리. 커뮤 글 색인 안 함.
- 이벤트 목적=재방문·체류·CTA로 **간접** SEO 신호(브랜드검색·직접유입·신선도). 커뮤 활동은 블로그 순위에 **직접 반영 안 됨**(별개 엔진).
- 다계정은 커뮤 noindex라 **SEO 피해 0**, 유일한 실피해=**로또 상금**(확률형이라 45계정≈66%/100계정≈90% 당첨). → 신원확인만으론 못 막음(당첨계정=어뷰저 진짜계정). → **IP 접속로그(A안)로 클러스터 적발 + 수동 지급검토**가 현 단계 방어.

### ⚠️ 어드민 관련 알아둘 것
- `/admin`은 루트 레이아웃(SiteHeader/Footer) 안에 렌더됨(자체 풀스크린 UI라 동작엔 문제없으나 헤더 중복). 필요시 route group으로 분리 가능.
- `signOut` 서버액션(actions.ts)은 이제 community에서 미사용(클라 로그아웃으로 대체). 삭제해도 됨.
- 회원 "로그인 시각"은 `auth.admin.listUsers()`의 `last_sign_in_at` 기반.

**콘텐츠 작업(Strategy/Odds 등)은 아래 기존 핸드오프 블록 참조 — 그쪽은 그대로 유효.**

---

## ▶▶ 새 세션 START HERE (2026-07-06 심야 v3 — 전부 완료·작업트리 clean)

**직전 작업(07-06) 요약**: EN Strategy 필라 **하루 5편**(허브 `holdem-strategy` + 클러스터 `holdem-3bet`·`holdem-continuation-bet`·`holdem-when-to-fold` + 07-05 limping) 완성. 전부 §13+적대적 팩트체커 PASS, **히어로·본문 이미지 전부 생성·검수·배포 완료**, 빌드 "52 blog+70 intl"(EN 35편). **작업트리 clean, 마지막 커밋 5118079.** 필라4 = 허브+5클러스터.

**🟢 즉시 할 일 (사용자 몫 — 배포 반영 후)**:
1. **GSC 색인요청 4개**: `/en/blog/holdem-strategy` · `/en/blog/holdem-3bet` · `/en/blog/holdem-continuation-bet` · `/en/blog/holdem-when-to-fold`.
   (이미지는 전부 완료 — 대기 중인 [E] 없음.)

**🎯 다음 메인 작업 = Strategy 마무리 or Odds 완성**
- **Strategy 잔여**: `holdem-check-raise`(90) → `holdem-preflop-strategy`. 전부 허브 첫링크=`holdem-strategy`.
- **or Odds 마무리**(빠른 도장): `holdem-implied-odds`·`holdem-equity` 2편이면 필라3(Odds) 완성.
- ⚠️ EN=마스터 → **1편씩 품질 집중**. 워크플로우=필라단위 스프린트([A]리서치 서브에이전트 2개(경쟁사 SWOT + 정확성기준)→[B]각도(사용자가 "진행해"면 게이트 생략)→[C]초안+§13→[D]적대적 팩트체크→[E]커서이미지→[F]빌드·커밋).

**⚠️ 이번 세션에서 확립된 교훈 (다음 세션도 반드시 지킬 것)**:
- **본문 템플릿리터럴 안에 인라인코드 백틱(`) 절대 금지** → 빌드 SyntaxError. `==...==` 하이라이트 사용. 달러는 이스케이프 말 것(`$` 그대로).
- **연관 클러스터 글끼리 본문 이미지 재사용 금지** — 독자가 넘나들 때 같은 사진 반복=프리미엄톤 저해. 신규글마다 문맥맞춤 실사 새로(메모리 `cluster-posts-unique-images`). 기존 라이브러리엔 블랙잭·한글워터마크·스타일화 이미지가 섞여 있어 재사용 전 반드시 Read로 육안검증.
- 커밋 시 셸 cwd가 `public/images`에 갇히면 상대경로 어긋남 → `git -C <repo루트>` 명시가 안전.

**📚 먼저 읽기**: `docs/en-blog-pillar-cluster-map.md`(§2 필라4·§7) → `docs/keyword-bank/00-SYNTHESIS-roadmap.md` → `en-when-to.md`(check-raise 롱테일).

**🔁 병행 상시작업 = 주간 GSC 추세**: 사용자가 "이번 주 GSC" CSV 주면 → `node scripts/gsc-analyze.mjs "<폴더>"` → `docs/gsc-tracking/kpi-log.md`에 열 추가 + 지난주 대비 델타 분석(메모리 `gsc-weekly-trend-tracking`). 07-05 배포 효과는 1~3주 뒤 반영.

---

## ✅ GSC 점검 완료 (2026-07-05) — 족보 클러스터 액션 착수함

**한 일**: 사용자 제공 CSV(3개월/28일) 분석 → 최대 기회=**족보 클러스터**(합 ~570노출 r9~19 문턱). 원인=`/hands`(noindex) 사이트맵 잔존 카니발라이제이션. **수정 커밋 80b5887**: 사이트맵에서 /hands·/rules/texas-holdem 제외 + 필라 킹하이 커버 + updated 갱신 + masters-7th 내부링크. (상세 WORKLOG 2026-07-05)

**📈 주간 추세 추적 시스템 구축(2026-07-05)**: 사용자가 매주 GSC 올려 성장추세 보고 싶어함 → `scripts/gsc-analyze.mjs`(CSV폴더→스냅샷) + `docs/gsc-tracking/kpi-log.md`(28일 롤링 추세, 07-05 기준선) + README. **매주 루틴**: 사용자가 "지난 28일" CSV 주면 → `node scripts/gsc-analyze.mjs "<폴더>"` → kpi-log에 열 추가 + 지난주 대비 델타 분석. (메모리 `gsc-weekly-trend-tracking`)

**🎯 Top-3 진입 전략 착수(2026-07-05)**: GSC 3-Wave 전략 수립·Wave1 실행(커밋 217acd4).
- **원칙**: 이길 수 있는 곳(롱테일+토너먼트/펍+족보) 집중 · r5~7부터 · 클러스터 권위통합.
- **Wave1 완료**(r5~7 빠른승리): blind-meaning에 BB계산 실블록+신선도갱신, how-to-enter→blind-meaning 내부링크. tiebreak는 이미 최적(무편집).
- **Wave2**(족보필라 최대상금 195노출): 오늘 카니발해소+내부링크로 "심기" 끝 → **2~3주 관찰 단계**(글 추가 X, `홀덤 족보 순위` r9.8→top5 진입이 성패지표).
- **Wave3 후속(미착수)**: 빅블라인드(r8.6) 독립섹션 심화 · icm 계산기(r8.2 도구의도)=/calculator 페이지 최적화 · 홀덤펍 클러스터 방어.

**▶ GSC 후속 상태 (사용자 GSC 수동 작업)**:
- ✅ **/hands·/rules/texas-holdem 재크롤 요청 완료**(07-05) — "색인요청 거부됨"=noindex 정상 인식(의도대로).
- ✅ **족보 필라 `/blog/holdem-hand-rankings` 재크롤 요청 완료**("색인요청됨").
- ✅ **신규 EN 글 색인 요청 완료**(사용자: 오늘 배포분 다 함).
- ☐ **(선택) Wave1 배포분 재크롤**: `/blog/holdem-blind-meaning`·`/blog/holdem-tournament-how-to-enter` — 안 해도 자동 크롤됨.
- 📊 **추적(2~3주 뒤)**: `홀덤 족보 순위`(r9.8→top5?) · `/hands` 색인제외 확인 · 신규 EN 색인·노출 시작 여부. → **주간 GSC 추세 시스템으로 자동 추적**.

---

## 🔎 (원본 절차 보존) GSC 점검 방법 — 재점검 시 참고

**사용자가 새 세션에서 GSC 점검을 원함.** 착수 방식:

> ⚠️ **Claude는 GSC에 직접 접근 불가**(연결된 GSC MCP 없음). 데이터는 사용자가 제공해야 함.

### 사용자가 가져올 것 (둘 중 편한 방식)
1. **성능(Performance) 탭 CSV export** — 최근 28일(또는 3개월). 쿼리별/페이지별 노출·클릭·CTR·평균순위. (과거 `gsc-28day-snapshot-2026-07` 메모리도 이 방식)
2. 또는 **주요 화면 스크린샷** — 성능 요약, 상위 쿼리, 색인(Pages) 상태.

### 점검 체크리스트 (데이터 받으면 Claude가 분석)
- **기회 쿼리**: 노출 높은데 순위 8~20위(=조금만 올리면 1페이지) → 제목/메타 CTR 개선, 내부링크 보강 대상 선정
- **CTR 저조**: 노출 대비 클릭 낮은 페이지 → seoTitle/desc 훅 재작성
- **색인 상태(Pages)**: "크롤됨-미색인"·"발견됨-미색인" URL 확인 → 원인·개선
- **신규글 성과**: 이번 세션 발행 EN 5글이 색인·노출 잡히는지
- **강점 유지**: 기존 강점(토너먼트/펍/족보) 순위 방어

### 📌 이번 세션 발행분 — 색인 요청 필요(아직 미요청)
`/en/blog/holdem-fish` · `/en/blog/holdem-cooler` · `/en/blog/holdem-bad-beat` · `/en/blog/holdem-glossary` · `/en/blog/holdem-limping`
(GSC URL 검사 → 색인 요청. 배포 반영 후 진행)

### 참고 메모리
`gsc-28day-snapshot-2026-07`(강점=토너먼트/펍, 최대기회=족보 클러스터, 영어=권위 한계) → 이번 점검과 비교해 변화 확인.

**▶ 새 세션: 먼저 사용자에게 "GSC 데이터(CSV/스크린샷) 주세요" 요청 → 받으면 위 체크리스트로 분석 → 개선 액션 도출. 데이터 없으면 색인 요청 목록부터 안내.**

---

## ⭐ 다음 세션 착수 (GSC 이후) — EN 포스팅 완성 (6필라 채우기)

**목표**: EN 6필라를 전부 "두꺼움" 상태로 완성 = 롱테일 구글 1등 그물 완성. EN이 마스터라 오류가 12언어로 전파되니 **1편씩 품질 집중**(병렬 초안 금지).

### 📊 현재 EN 상태 (2026-07-05 기준, 발행 27편)
| 필라 | 허브 | 발행/목표 | 남은 작업 |
|---|---|---|---|
| 1 Rules | ✅ | 5/8 | (선택) dealer-button·check-rules·limit-vs-no-limit |
| 2 Hand Rankings | ✅ | 4/6 | kicker·what-beats-what |
| 3 Odds & Math | ✅ | 3/5 | implied-odds·equity (2편이면 완성) |
| **4 Strategy** | ❌ 미발행 | 4/9 | ✅limping 개척. **허브 `holdem-strategy` 발행 + 클러스터(3bet·c-bet·when-to-fold)** ← 최대 공백 |
| 5 Tournament | ✅ | 5/8 | 고아 2개(wpt·ept) 내부링크 복구, (상시)ICM·bubble·short-stack |
| **6 Glossary** | ✅ 허브발행 | **허브+5** | ✅허브 holdem-glossary+fish·cooler·bad-beat·straddle·rake. **Glossary 필라 완성구조. 확장=slowroll·nuts·tilt(선택)** |

### 🏁 발행 우선순위 (롱테일 1등 속도순 — 로드맵 기반)
1. ~~**Glossary**~~ ✅ **허브+5클러스터 완성**(fish·cooler·bad-beat·straddle·rake+허브). 확장은 선택(slow roll 590·nuts·tilt). **📌후속(선택): 개별 5글 첫링크를 허브로 역링크(맵§3.3).**
2. **Strategy 진행 중** → ✅limping 개척(590·LDA8). **다음: 허브 `holdem-strategy` 발행** or 클러스터 계속(`holdem-3bet` 1600·`holdem-continuation-bet` c-bet·`holdem-when-to-fold`·`holdem-check-raise`). or **Odds 마무리**(implied-odds·equity 2편이면 필라3 완성).
2. **Strategy 착수** (허브 미발행=최대 공백): `limping`(590·**LDA8**·단독승산최상) 먼저 → 허브 `holdem-strategy` → `holdem-3bet`(1600)·c-bet(`holdem-continuation-bet`)·`holdem-when-to-fold`·`holdem-check-raise`·`holdem-bluff-spot`(KO필라slug 정합).
3. **Odds 마무리**: `holdem-implied-odds`·`holdem-equity`. (rule-of-2-and-4는 보류=중복)
4. **Hand Rankings 심화**: `holdem-kicker`·`holdem-what-beats-what`.
5. **Tournament**: wpt/ept 고아 복구 + `holdem-icm`·`holdem-bubble` 상시 클러스터.
6. **Rules 보강**(선택): dealer-button 등.

### ✅ 신규 EN 글 필수 구조 (이번 세션에 확립된 "최신 표준" — 전부 지킬 것)
`실사 히어로(keepImagesInBody:true, ≤60KB)` → `도입 경험담(E-E-A-T)` → `:::stripe 핵심스탯` → `H2 + 시그니처 비교표(경쟁사 없는 통합표)` → `표는 자동 정렬+형광박스(전역 CSS, 손댈 것 없음)` → `가독성용 본문 실사 2~3개` → `FAQ앞 :::readnext[Keep reading] 2카드` → `FAQ **Q.**/A.(PAA 정확매칭 6~8)` → `Related Posts 그리드`. 첫 내부링크=필라, **인라인 썸네일 링크**(`"thumb:/images/x.webp"`) 1~2개.

### 🛠️ 워크플로우 (사용자 선호 = 필라 단위 스프린트)
`[A]리서치(SERP·PAA 적대적 서브에이전트 or 키워드뱅크)` → `[B]사용자 방향 게이트(각도 승인)` → `[C]초안 1편(메인, §13 검산+내부링크 첫링크=필라)` → `[D]적대적 서브에이전트 §13/팩트체크` → `[E]커서 이미지(프롬프트는 Claude, 생성은 커서)` → `[F]빌드·커밋·GSC 색인` → 맵§7·WORKLOG 갱신. 매 글 **한국어 2~3줄 요약** 첨부.

### 📚 먼저 읽을 문서
`docs/en-blog-pillar-cluster-map.md`(구조 마스터·§7 진행표) → `docs/keyword-bank/00-SYNTHESIS-roadmap.md`(발행 우선순위) → `docs/keyword-bank/en-*.md`(시드별 키워드+승산). memory도 확인.

**⚠️ 새 세션: 이 블록부터 읽고 → 위 우선순위 1(Glossary `fish`) 또는 2(Strategy `limping`)로 리서치[A]부터 착수. 각도 게이트에서 사용자 승인 후 초안.**

---

## 🔵 후순위 — KO 구버전 글 업데이트 (시간날 때 조금씩)

**사용자 지시(2026-07-05)**: KO 수정은 서두르지 않고 틈틈이. EN 완성이 우선.
- ✅ **구버전 7글 EN체 구조 전환 완료**(7poker·value-bet·cbet·range-meaning·tiebreak·split-pot·hand-rankings-confusing): keepImagesInBody·실사히어로·:::stripe·:::faqcard전부제거·FAQ정규화·인라인썸네일. 블랙잭사진 2개 교체.
- **남은 KO 작업**(틈틈이): ① 위 7글의 §13 사실검산·SEO메타 심화 검수 ② 다른 구버전 KO글(인포그래픽 남은 것) 동일 전환 ③ readnext 썸네일 일부 범용이미지 교체.

---

## 📅 마지막 작업일 (표 정렬·readnext 전면화)
2026-07-04 후반 — **전 글 표 정렬 EN 기준 통일**(숫자열 가운데, 렌더러 :---: 지원+블록파서, 형광 골드박스 테두리 전역) + **KO readnext 전면 추가**(NEW 30+LEGACY 21, FAQ 앞 :::readnext[이어서 읽기] 2카드, 관련글 자동선정). EN readnext는 기존 완비. 아래 이전 기록 참조.

## 📅 (이전) 마지막 작업일
2026-07-04 (Claude Code 세션 — **① Odds 클러스터 #3 `holdem-drawing-odds` 발행+이미지2개 완비 ② Glossary 필라 첫 발행 `holdem-straddle`**. drawing-odds=필라3 마무리(Flop Lifecycle표+조합론, §13 22개 ALL CORRECT, 이미지 §13통과). straddle=필라6 개척(종류비교표+액션순서+-EV답변, 적대적 룰 팩트체크 통과, 2건 misleading 교정). straddle 이미지 4개 완비. **③ Glossary #2 `holdem-rake` 발행**(레이크종류비교표+실전계산+rake trap+rakeback, 적대적 팩트체크 통과, $100+$20→$9 교정). rake 이미지 3개 완비. **④ EN 모바일 최적화 감사**(Playwright 360/390px 전26개): 오버플로우 0, 유일이슈=넓은표 억지줄바꿈→모바일 골드박스 좌우패딩 20→8px 수정(표폭+24px, 공유CSS 1줄=전언어). 감사도구 scripts/mobile-audit.mjs 추가. **모바일 기반 견고 확인.** 다음 = (콘텐츠)Glossary fish·cooler / (모바일)추가 폴리시 요청 시 rangechart BB라벨 등 미세사항)

---

## 🎯 지금 프로젝트가 어느 단계인가

**개발은 완료, 지금은 "SEO 콘텐츠 품질 강화 + 포스트 추가" 운영 단계.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인): 전부 완성·배포됨 → 더 만들 것 없음
- 핵심 작업: **구글 1페이지 달성**을 위한 콘텐츠 품질 향상 + 신규 포스트 발행

### 현재 발행 현황
- **한국어 블로그: 52개** (`lib/posts.ts` LEGACY 21개 + `lib/posts/` NEW 31개) — 2026-07-04 고아포스트 holdem-raise-how-much 완성·발행
- **영어 블로그: 20개** (`lib/posts-en/`)
- **필라 포스트 발행 현황**: holdem-hand-rankings(P1) ✅ · holdem-probability(P?) ✅ · holdem-rules(P2) ✅

---

## 🔥 이번 세션(2026-07-02, Claude Code) 작업 내용

### 콘텐츠 검수·강화 (§13 사실오류 정정 포함)
- **족보 클러스터 4개**: 필라(holdem-hand-rankings) + 보조 3개(tiebreak·confusing·vs-7poker). §13 오류 3건 정정 — 스트레이트플러시 오기, 플러시/스트레이트 혼동, **"마운틴=로열플러시" 오기(→A-K-Q-J-10 스트레이트)**. 별명표·PAA FAQ·신선도 강화
- **holdem-starting-hand-range**: 플러시확률(완성 0.8%/드로우 11%) 정정, 이미지 맥락 교체(칩스택·깨끗한 포지션도), seoTitle CTR 강화
- **CTR·검수**: when-to-fold, holdem-tournament-how-to-enter(trailing slash 22개 정리), apt-incheon-2026(Event JSON-LD 추가), wsop-2025(결과 recap 전환), /tournaments(신선도)

### 디자인·시스템
- 인라인 링크 **형광 붓칠(5색)+밑줄** 강조, `:::eventcta:::` 이벤트 CTA 컴포넌트 신설
- **규칙 통합**: `.cursor/rules/posting.mdc`를 포스팅·콘텐츠 **단일 마스터**로 통합 + 포스트 작업 시 자동 읽기(CLAUDE.md 지시) + 기존 글 검수 체크리스트(SEO 메타 CTR 1순위)
- **/hand-chart** 세련 개편 + 모바일 최적화 + 내부링크(양방향)

### 예약/메모리
- 8/16 APT 인천 대회 후 자산화 클라우드 알림 예약(routine)
- 메모리: `gsc-28day-snapshot-2026-07`, `apt-incheon-2026-post-event-asset`

---

## 🚀 다음 세션 할 일 (우선순위 순)

> ⚠️ 포스트 작업 전 `.cursor/rules/posting.mdc`(통합 마스터) 먼저 읽기 — 이제 자동 적용됨.

### ★0순위 (다음 세션 시작 작업) — EN 6필라 발행 (Phase 0 완료, Phase 1 진행)
**진행상태**:
- ✅ **Phase 0 완료** — `holdem-hand-rankings` 정확매칭 FAQ 10개 추가·배포(e06ed4c). ~17k 볼륨 흡수.
- ✅ **Phase 1 Odds 허브 발행** — `holdem-probability` 종합 플래그십. 확률 35개 검산. 배포 bcad393.
- ✅ **Odds 클러스터 #1 발행** — `holdem-pot-odds`("How to Calculate Pot Odds"). 벳사이즈 치트시트·3개념구분·4-2룰·실전핸드. §13 18개 검산(턴 팟오즈 오류1 정정). 허브 양방향링크. 배포 ac3a93b.
- ✅ **Odds 클러스터 #2 발행** — `holdem-outs`("How to Count Outs"). 아웃츠 세는법=pot-odds 상류. 드로우별 아웃츠표·아웃츠→배당 마스터표·4-2룰 오차보정·콤보 겹침산수(15 not 17)·더티아웃 실전. §13 적대적검산 ALL CORRECT. 허브·pot-odds 양방향 인라인썸네일 역링크. 배포 603f936. ✅ **본문 이미지 4개 완비**(히어로+counting+dirty-outs 커서생성, 스트레이트 재사용). 이미지 §13검산 통과(counting=A♠K♠ 오버카드6아웃, dirty=44페어보드). 배포 26661d4.
- ✅ **Odds 클러스터 #3 발행(2026-07-04)** — `holdem-drawing-odds`("Drawing Odds / Odds of Flopping X"). **필라3 토픽오소리티 마무리**. 시그니처=**Flop Lifecycle 통합표**(한 행에 made 플랍→draw 플랍→리버 완성 3열, 경쟁사·허브 모두 안 잇는 갭)+본문 조합론 노출(C(11,3)/C(50,3) 식=E-E-A-T). 셋마이닝 임플라이드오즈(10~15배)·백도어 러너러너·two players AA(136-to-1)·set by river(19.2%) 신규 커버. §13 직접검산+적대적 서브에이전트 **22개 확률 ALL CORRECT**. 4-2룰·아웃츠 재설명 금지(위임 준수). 허브·outs 양방향 인라인썸네일 역링크. 빌드 "51+59 intl". ✅ **본문 이미지 2개 완비**(커서 생성, §13검산 통과): 히어로=포켓5셋(5♠5♦+5♣K♥8♠), 플러시=하트4장 드로우(A♥K♥+Q♥7♥2♠). 재사용 실사 2개(button-dealer-board·straight-example) 포함 본문 총 4이미지 ~134KB.
**▶ 다음 세션 착수 = 다른 필라로 이동 (Odds 필라3 4글 완성=허브+pot-odds+outs+drawing-odds)**:
  - **Glossary 플래그십 `holdem-glossary`(신규 필라)** — straddle 2900·rake·fish·nuts·bad beat 등 용어 롱테일(LDA 3~35=승산 좋음). 키워드뱅크 `en-glossary-what-is-a.md`.
  - or **Strategy `holdem-strategy`(신규 필라)** — limping 590(LDA8·W3=1 매우좋음) 클러스터.
  - `holdem-rule-of-2-and-4` 전용글은 **보류 유지**(outs/pot-odds/probability/drawing-odds 4글과 정면 중복).
**즉시 할 일**: GSC 색인요청 `/en/blog/holdem-drawing-odds`·`/en/blog/holdem-outs`·`/en/blog/holdem-pot-odds`·`/en/blog/holdem-probability`.
**🧹 기존 정리 과제(발견 2026-07-03)**: EN desc>160자 **7개 기존글** 트리밍 필요(CTR 훅+키워드 유지하며) — positions 255·hand-rankings 210·tournament 205·blind-meaning 176·all-in-rules 164·reading-the-board 162·showdown-rules 162. (오늘 신규 probability·pot-odds는 정정 완료)
**✅ EN 전체 클릭강화 적용 완료(2026-07-03)**: 22개 EN 글 전부 인라인 썸네일 링크 + FAQ앞 :::readnext 2카드. 신규글은 이 패턴 기본 포함(posting.mdc 규칙).
**적용 중인 신규 규칙**: 모든 신규글 = 인라인 썸네일 링크(가장 연관글 1~2개, `"thumb:이미지"`) + FAQ앞 `:::readnext[라벨]` 2카드 박스. posting.mdc·memory 문서화.
로드맵 상세: `docs/keyword-bank/00-SYNTHESIS-roadmap.md`.

**먼저 읽을 문서 3개 (순서대로)**:
1. `docs/en-blog-pillar-cluster-map.md` — EN 6필라 구조 마스터 맵
2. `docs/keyword-bank/00-SYNTHESIS-roadmap.md` — 데이터 기반 발행 우선순위 (여기가 실행 순서)
3. `docs/keyword-bank/en-*.md` (6개) — 시드별 키워드+승산(LDA/weak-spot) 상세

**확정된 EN 6필라** (KO 복제 X, EN 시장 독립설계, pub-guide 제외):
1 How to Play(`texas-holdem-rules-for-beginners`) · 2 Hand Rankings(`holdem-hand-rankings`) · 3 Odds&Math(`holdem-probability` 신규) · 4 Strategy(`holdem-strategy` 신규) · 5 Tournament(`holdem-tournament`) · 6 Glossary(`holdem-glossary` 신규). slug은 12언어 공유(hreflang)라 확정=변경금지.

**목표(재확인)**: **롱테일 키워드 구글 1등**이 전부. 메인키워드 정면승부 X. 커뮤니티 전환은 설계 드라이버 아님(리텐션용). EN 완성 후 그 구조로 12언어 번역.

### 🛠️ 작업 워크플로우 = "필라 단위 스프린트" (사용자가 이 방식 선호 — 새 세션에서 다시 설명 후 착수)
**핵심: 작업을 성격별로 쪼갠다.**
- **리서치(SERP·PAA)** = 서브에이전트 병렬 (or lowfruits 데이터 활용) — 이미 키워드뱅크로 1차 완료
- **초안 작성** = 내가(Claude) 메인에서 **1편씩** (EN=마스터라 오류가 12언어 전파 → 병렬 금지, 품질 집중)
- **검증(§13 핸드검산·팩트체크)** = 적대적 서브에이전트
- **이미지** = 커서 워크플로우(프롬프트+위치는 Claude가, 생성·저장은 커서)

**루프**: [A]리서치(키워드뱅크 활용) → [B]사용자 방향 게이트(각도 승인, 5분) → [C]초안 1편(경험담+§13검산+내부링크 첫링크=필라) → [D]빌드·커밋·GSC 소배치 → [E]맵§7·WORKLOG 갱신 → 다음. 발행은 2~3편씩.
**사용자 게이트**: 방향 승인 + 포커사실 검수(언어중립). 매 글 **한국어 2~3줄 요약** 첨부.

### 첫 착수 = Phase 0 (기존 글 FAQ 강화, 최고 ROI)
`holdem-hand-rankings`에 데이터 매칭 FAQ 강화부터: `what is a flush`(5400)·`full house`(4400)·`straight`(2900) 정의 + `what beats a X` FAQ + 룰 FAQ(3 pairs·ace as 1 등). 합 ~17k 볼륨, 기존 랭크+GSC권위 레버리지. → 그다음 Phase 1(Odds 확률차트 신규 LDA11, Strategy limping LDA8, Glossary straddle/rake/fish…). 상세는 00-SYNTHESIS-roadmap.md.

**⚠️ lowfruits 후속 수확 남음**(다음 라운드): `pot odds *`·`c bet *`·`poker bluff *`·`poker cash game *`(Cash Game 7필라 후보). 승산 판정 = LDA≤20 매우좋음/20~35 좋음.

**시작 전 반드시**: CLAUDE.md → session-handoff → WORKLOG → posting.mdc → 위 3개 문서.

### 1순위 — 영어 포스트 SEO 강화 (20개 1차 강화 완료)
- 대상: `lib/posts-en/` 20개. GSC상 "how to play texas holdem / rules for dummies" 클러스터가 노출 많고 순위 페이지5~8
- ⚠️ 참고: 해당 EN 룰 글 콘텐츠는 이미 우수 → 문제는 **도메인 권위**(대형 경쟁사). 콘텐츠 추가보다 EN SERP·PAA 재조사·롱테일 커버·내부링크·장기 백링크 관점 접근
- 규칙: posting.mdc(다국어 현지화·EN 롱테일 클러스터링) + memory `gsc-28day-snapshot-2026-07` 확인 후 시작
- **✅ 완료(2026-07-02)**: `texas-holdem-rules-for-beginners`(H2 2개·내부링크 3개·FAQ 3개), `holdem-hand-rankings`(§13 스트플 오류 정정·slash·FAQ 2개), `holdem-game-order`(H2 who-acts-first·내부링크 5개), `holdem-positions`(이미지 추가·slash), `holdem-betting-actions`(§13 min-raise·slash 5·링크 3·이미지·FAQ limp), `holdem-flush-vs-straight`(§13 SF 과잉주장·링크·FAQ), `holdem-showdown-rules`(seoTitle CTR·slash 4·링크·FAQ), `holdem-all-in-rules`(CTR·본문링크 3·slash 3, 룰오류無), `holdem-starting-hands-chart`(§13 AK에쿼티·rangechart·slash 5·커서이미지2), `holdem-reading-the-board`(§13 플러시개수·링크2·slash 3), `holdem-tiebreak-rules`(§13 전체검산·이미지3점검·내부링크 starting-hands-chart 정밀화·롱테일 FAQ 2개), `holdem-split-pot-rules`(SERP·PAA 조사·§13 원페어예시 정정·토너먼트chop 분화/전략/odd chip 롱테일 FAQ 3개), `holdem-blind-meaning`(핵심키워드·헤드업/미스드 블라인드 신규섹션·FAQ 2개·desc CTR·속도점검 통과), `holdem-tournament-vs-cash-game`(토너먼트필라 내부링크+Related카드·PAA FAQ 3개 bubble정의/pros/hourly·속도통과), `holdem-tournament`(**필라**·트슬래시4제거·클러스터허브 Related 5카드·PAA FAQ 2개 latereg/중도이탈·히어로 재압축), `holdem-position-play`(**포지션필라**·현지화누수 ₩/holdempub 교정·early/mid/late FAQ·**본문이미지 2→4개** 오프닝레인지인포+블라인드스틸실사 커서생성), `ept-barcelona-2026-guide`(웹검증 전일정정확·과장표현정정·트슬래시·**본문이미지 2→4개** PowerPath인포+포트올림픽실사)
- ⚠️ **이미지 점검 필수화**: EN 강화 시 각 글 이미지 맥락 적합/깨짐/한글오버레이 여부 확인, 더 맞는 실사 있으면 교체·추가(사용자 지시). 주의: `holdem-small-blind-position`·`poker-table-reference` 등 다수 포지션 이미지가 **한국어 인포그래픽/사이트 스크린샷**이라 EN 글에 부적합. 언어중립 실사(예: `holdem-button-position-hero`, `tournament-table-action`)만 재사용
- **EN 20개 전부 1차 강화 완료** (룰·전략·필라·족보 클러스터 + 이벤트가이드 4개). 
- ✅ **트슬래시/raw-img lazy 전수점검 완료(2026-07-03)**: EN 20개 클린, **KO 9개파일 트슬래시 65개 정정**·masters-7th img lazy 1개. 이제 전 포스트 내부링크 슬래시 클린.
- **다음 후보**: ① (완료됨) ② GSC 색인 재요청(이벤트가이드는 "크롤됨-색인안됨" 상태 다수 — 오늘 개선 배포 후 재요청) ③ 신규 한국어 포스트(목표 50개, 현재 51개는 이미 달성상태 확인 필요) ④ APT 인천 8/16 후 자산화
- ⚠️ **이벤트가이드 = 웹 교차검증 필수(사용자 강조)**: wpt-australia에서 Championship 날짜 하루 오기(23→24) 웹검증으로 발견·정정. ept·korea-marathon도 날짜·바이인·일정 반드시 공식/복수소스 재확인. 마크다운 표 `||`/구분행 누락, 트슬래시도 함께 점검
- ⚠️ **이벤트가이드 속도 점검 필수**: apt-incheon에서 갤러리 raw `<img>`에 loading=lazy 누락 발견·수정. **다른 이벤트가이드도 raw `<img>` grep해서 lazy 없으면 추가**(마크다운 `![]()`는 renderMarkdown이 자동 lazy 처리하나 raw img는 미처리). 이미지 다수라 초기로드 속도에 직결
- ⚠️ **현지화 누수 점검 필수**: position-play에서 영어 글에 ₩(원화)·"holdem pub"(홀덤펍) 혼입 발견·교정함. **다른 EN 글도 강화 시 ₩·홀덤펍·한국식표현 grep 점검**(글로벌 EN 독자용). 도입부 실경험담의 'local poker club' 수준은 E-E-A-T로 유지 OK
- ⚠️ **속도점검 루틴화(2026-07-03 사용자 지시)**: 매 검수마다 성능도 확인 — 히어로 LCP ≤60KB·본문 총합 ≤200KB·치수 1200×675(CLS 방지)·keepImagesInBody로 priority 자동. sharp로 치수/용량 확인. 이 프로젝트 EN 이미지는 대부분 이미 30~45KB라 통상 통과하지만, 신규/교체 이미지는 반드시 확인
- 📌 **커서 이미지 워크플로 확립**: 프롬프트·삽입위치를 Claude가 주면 커서 에이전트가 이미지 생성+.ts 삽입(커밋/푸시는 Claude가, 커서는 파일저장까지만). 완료 예: starting-hands-chart 프리미엄핸드·약한에이스 2개(da080cc). ⚠️ 스타팅핸드 관련 기존 이미지는 전부 한국어라 EN 재사용 불가 → 필요시 커서 신규 방식 동일: EN SERP·PAA 재조사 → 롱테일 갭·내부링크·§13 검산·이미지 점검·**seoTitle/desc CTR 훅 평가**. ⚠️ 대부분 글에 trailing slash 링크가 남아있으니 검수 시 항상 제거. ⚠️ 족보 클러스터 글들에 "straight flush" 과잉주장 반복 패턴(§13 필수)

### 2순위 — GSC 색인 재요청
- 오늘 수정한 URL 재크롤링: 족보 4개·starting-hand-range·/hand-chart·/tournaments·apt-incheon·wsop-2025
- **EN 추가**: `/en/blog/texas-holdem-rules-for-beginners`, `/en/blog/holdem-hand-rankings`, `/en/blog/holdem-game-order`, `/en/blog/holdem-positions`, `/en/blog/holdem-betting-actions`, `/en/blog/holdem-flush-vs-straight`, `/en/blog/holdem-showdown-rules`, `/en/blog/holdem-all-in-rules`, `/en/blog/holdem-starting-hands-chart`, `/en/blog/holdem-reading-the-board`, `/en/blog/holdem-tiebreak-rules`, `/en/blog/holdem-split-pot-rules`, `/en/blog/holdem-blind-meaning`, `/en/blog/holdem-tournament-vs-cash-game`, `/en/blog/holdem-tournament`, `/en/blog/holdem-position-play`, `/en/blog/apt-incheon-2026-guide`, `/en/blog/wpt-australia-2026-guide`, `/en/blog/ept-barcelona-2026-guide`, `/en/blog/korea-poker-marathon-2026`

### 3순위 — 남은 GSC 한국어 기회
- "블라인드 스틸"(pos 7.4·노출73·클릭0) 제목/메타 CTR 개선, ICM 클러스터(툴 의도)

### 4순위 — 8/16 이후
- APT 인천 대회 종료 후 결과 recap 자산화 (클라우드 알림 예약됨, memory `apt-incheon-2026-post-event-asset`)

### 참고
- Notion 연동(MCP)은 여유 있을 때
- 토너먼트 포스트 image 필드는 이번 세션 이전에 대부분 추가 완료됨

---

## ⚠️ 절대 건드리지 말 것

- `app/blog/[slug]/` (한국어 블로그 라우트), `app/[locale]/blog/[slug]/` (다국어)
- `public/sitemap.xml` (빌드 시 자동 생성)
- 기존 포스트 slug (변경 시 SEO 초기화)
- `next.config.mjs`의 `trailingSlash: false` 설정
- `lib/posts.ts`의 기존 LEGACY 포스트 데이터

---

## 🔧 인프라 설정

- **Supabase**: holdemmaster-community (Seoul Free Plan)
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`
- **Realtime**: `chat_messages`만 활성화
- **Vercel 환경변수**:
  - `NEXT_PUBLIC_SUPABASE_URL` ✅
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✅
  - `GEMINI_API_KEY` ⚠️ **Vercel 미설정 → 프로덕션 번역 비활성**

---

## 🗒️ 핵심 파일 위치

| 용도 | 경로 |
|------|------|
| 한국어 LEGACY 포스트 | `lib/posts.ts` |
| 한국어 NEW 포스트 | `lib/posts/[slug].ts` + `lib/posts/index.ts` |
| 영어 포스트 | `lib/posts-en/[slug].ts` |
| 포스팅 규칙 | `.cursor/rules/posting.mdc` |
| 이미지·콘텐츠 규칙 | `.cursor/rules/content.mdc` |
| 기술·성능 규칙 | `.cursor/rules/tech.mdc` |
| 커뮤니티 클라이언트 | `app/community/community-client.tsx` |
| DB 스키마 | `supabase/schema.sql` |
| 콘텐츠 로드맵 캔버스 | `canvases/content-roadmap.canvas.tsx` |

---

## 💡 확정된 설계 결정사항

- SEO 경로(`/blog`, `/en/blog` 등): 절대 변경 안 함
- DB/Auth: Supabase / 번역: Gemini Flash + translations 캐싱
- 커뮤니티 메인 = 실시간 채팅 (피드 + 채팅 + 이벤트)
- 비로그인: 읽기 가능, 작성/전송은 로그인 필요
- 이미지: webp 전용, 실사 사진=기본 + 인포그래픽 상황적 허용(가드레일: 텍스트최소·스펠링검수·온브랜드·§13, 상세 CLAUDE.md §9-1, 2026-07-05 갱신)
- 앱 도구 페이지(`/hands`, `/rules/texas-holdem`)는 noindex → 블로그 필라가 키워드 단독 타깃

---

## 🟡 남은 보안 권장 항목 (시급하지 않음)

- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지
