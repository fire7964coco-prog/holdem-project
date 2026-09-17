# 계산기 랜딩 재저작 — «계산 기능 강조» 트랙 (한 언어씩 · EN 먼저) · 2026-09-17

> 사장님 지시(09-17 축어 요지): **「계산기라는 기능을 제공해주는 페이지 — 경험담·경화식 포스팅은 불필요. ko처럼 계산기능 강조.
> /hand-chart처럼 검색자는 차트(도구)를 보러 온 것 → 그 의도에 충실. ko처럼 만들되 ko도 오래됐으니 이왕 업데이트.
> en·ja·zh 등은 MCP(라쿠·DFS)+키워드뱅크 활용, ja는 의문형 검색 참고. 한 번에 다 하지 말고 한 언어씩 — en부터.」**
> (첫 초안의 «고품질 포스팅·경험담» 골격은 폐기 — 이 파일이 정본.)

## 0. 상태

| 로케일 | 상태 | 뱅크 | 비고 |
|---|---|---|---|
| **en** | ✅ 09-17 배포(WORKLOG 09-17 (5)) | `docs/keyword-bank/en-calculator.md` | Equity 탭 신설 + quickRef 6표 + FAQ 17 + 메타 재조준 + 도구 문안 정정(딜러 렌즈) |
| **ja** | ✅ 09-17 배포(WORKLOG 09-17 (6)) | `docs/keyword-bank/ja-calculator.md` | Equity 탭(「ハンド勝率」) + quickRef 6표 + FAQ 18(ja 고유 1) + 메타 재조준(「ハンド勝率・ICM・必要勝率」) + 딜러 렌즈 12항 + 네이티브·교열·2차 교열 3렌즈. 🔴 CJK 표는 라벨 열도 `nowrap`(390px 세로 쌓임) |
| **zh** | ✅ 09-17 배포(WORKLOG 09-17 (7) · `ff81a242`) | `docs/keyword-bank/zh-calculator.md` | Equity 탭(「手牌胜率」) + quickRef 6표 + FAQ 18(zh 고유 1) + 메타 「德州扑克概率计算器 — 胜率计算器、ICM、底池赔率免费算」 + 렌즈 3종 76 반영. 🔴 **볼륨 절대값 없음**(DFS 2156·2702 · 라쿠 SG 전부 10 바닥) → 자동완성·SERP·PAS로. 공용 `sep()` 처방 + 게이트 `check:calc-parity` 신설 |
| **zh-hant** | ✅ 09-17 배포(WORKLOG 09-17 (8)) | `docs/keyword-bank/zh-hant-calculator.md` | Equity 탭(「手牌勝率」) + quickRef 6표 + FAQ 18(zh-hant 고유 = **TDA 2024 Rule 5** 「牌桌上可以用勝率計算器嗎？」) + 메타 「德州撲克勝率計算器 — 撲克機率、ICM 計算機、底池賠率免費算」(260 · H1 CTA 「撲克機率計算器」은 볼륨 null이라 H1에만) + 렌즈 3종. 🔴 **ICM만 «計算機»**(icm計算機 70 ↔ 計算器 null) |
| **es** | ⏳ 다음 | — | 한 언어씩 · 권역 = LATAM 중립(`/es/` · es-plan) — 볼륨 location은 Mexico부터 · `language_code`는 볼륨을 안 나눈다(rakko-playbook) |
| pt · de · fr · id · ms · hi | ⏳ | — | 한 언어씩 · `npm run check:calc-parity -- <loc>`가 미채움을 «미검사»로 표시한다 |
| ko | ⏳ 후순위 | GSC 실측 메타 보유 | 별도 클라이언트 · Equity 탭 이식은 공용화 뒤 |

## 1. 공통 골격 (EN에서 확정 · 로케일은 «값 동일 · 문안 현지화»)

1. hero — H1(핵심어) + 부제 + 리드 1문장 + 칩 9
2. 도구 9탭 — **Equity(신설 · 첫 탭 = SSR되는 유일한 탭)** · Outs · Pot Odds · Hand Rank · Starting · SPR · M · ICM · Push/Fold
3. ICM 가이드 2(버블·딜) — 기존
4. 도구 카드 9
5. **빠른 참조 표 6**(`dict.quickRef` · 탭 밖 · 정적) — 프리플롭 매치업(수트 가중) · AA vs 랜덤 N · 아웃츠 1~20(플롭→리버·플롭→턴·턴→리버) · 팟오즈(베팅→필요 에퀴티) · SPR 구간 · M값 존
6. FAQ 17(PAA 흡수)
7. 관련 글 8

🔴 규율: 탭 안 문안은 SSR 안 됨 → 색인 콘텐츠는 전부 탭 밖 · 수치는 `scripts/calc-reference-tables.ts` 출력만(§13) · 개념 정의는 블로그 링크(카니발 경계 · `holdem-probability`가 «odds chart» 소유) · 제목에 SPR·BB 훅 금지(settled §1).

## 2. EN 회차 — 완료(09-17). 경위 = WORKLOG 09-17 (5). 남은 후속은 §5.

## 3. 로케일 인계 규칙

- `dict.equity`·`dict.quickRef`는 **옵션 키** — 채운 로케일만 켜진다(타입 파손 없음). 로케일 회차 = 사전 2블록 + FAQ 확장 + 메타 재조준 + 관련 글 8.
- 수치·표 행 개수 = EN과 동일. 문안·H2 형태소·FAQ 질문 표기 = 현지 실측(라쿠 volume location = 그 나라 · 질문검색은 ja만 유효).
- 검수: 로케일 네이티브 렌즈 1 + 교열 1(수학 렌즈는 EN 1회로 종결 · 값 전사 대조만).

### 3-A. ja 회차 착수 절차 (새 세션이 첫 턴에 그대로 따른다 · 2026-09-17 헤드 작성)

**첫 마디** = 「핸드오프 읽고 ja 계산기 회차 시작해」. 본체 창(헤드)에서 한다 — queue 레인이 아니다(MCP 라쿠·DFS는 본체에만).

0. `git status` 클린 확인 → 이 파일 §1·§3·§5 + `docs/keyword-bank/en-calculator.md` 통독(EN이 정본) → `app/ja/calculator/{dict,faq,page}.ts` · `components/calculator/dict.ts`의 `CALC_DICT_EN`(equity·quickRef·outs 3스트리트·icm.th.chop·icmGuide.deal) 읽기.
1. **실측(라쿠 · location Japan · language Japanese)**: `search-volume-history` 시드 = ポーカー 計算機 / ポーカー 確率 計算 / ポーカー 勝率 計算 / ポーカー オッズ 計算機 / エクイティ 計算 / ICM 計算機 / ICM計算 / ポットオッズ 計算 / アウツ 計算 / プッシュ フォールド 表 / ハンド 勝率 + `docs/keyword-bank/ja-probability.md`·`ja-tag-volumes.md`의 기존 값 재사용. 🔴 띄어쓰기·표기(計算機/計算ツール/カルキュレーター)가 별개 키워드(`rakko-playbook` §1) — 갈래마다 잰다.
2. **질문형**: 라쿠 `question-search`는 ja에서 유효(EN은 0건이었다) — 「ポーカー 確率」「ICM」「ポットオッズ」「エクイティ」로 뽑아 FAQ 17문항의 질문 표기(「〜とは?」「〜の計算方法は?」)를 현지 형태소로. `suggest-keywords`(google)로 서제스트 보강.
3. **SERP**: DFS `serp/google/organic/live/advanced`(location 2392 · language ja · mobile)로 「ポーカー 確率 計算」「ICM 計算機」 top10 + PAA → 상위 페이지 구조는 서브에이전트(sonnet)에 URL 목록만 주고 H1/H2/FAQ/입력·출력만 추출(요약 금지).
4. **뱅크 작성** `docs/keyword-bank/ja-calculator.md`(EN 뱅크와 같은 절: 코어 볼륨 · GSC(`node scripts/gsc-page.mjs ja/calculator --days 90`) · PAA/질문 · SERP 구조 · 채택 · 인계).
5. **사전 채우기** `app/ja/calculator/dict.ts`: `equity`(UI 문자열 · 프리셋 라벨은 EN 그대로 「AA vs KK」) · `quickRef` 6표(**수치 EN 그대로** · 라벨·intro·note만 일본어 · `link` 슬러그는 `lib/posts-ja/`에 실재하는 것만 — EN이 쓰는 9개 슬러그(icm·equity·pot-odds·outs·probability·starting-hands-chart·short-stack·implied-odds·tournament-vs-cash-game)는 ja에 전부 있다 · 09-17 확인) · `outs.flopOneBtn/afterFlopOne/chanceFlopOne` · `icm.th.chop` · `icmGuide.deal` 새 예시(45/25/18/12 · $2,300 · ICM 726/591/526/458 · `linkLead`+`link`) · `guide.cards` 9(icon 명시) · `related.links` 8(EN과 개수 동일) · hero chips 9 · **딜러 렌즈 EN 정정 12항 동반**(§5 마지막 줄 — ja 사전의 같은 자리를 찾아 고친다).
6. **FAQ 17** `app/ja/calculator/faq.ts` — EN 17문항의 «명제»를 옮기되 질문은 2단계 실측 표기로. 정의형 금지(EN에서 뺀 이유 = `holdem-icm`·`holdem-pot-odds` 소유).
7. **page.tsx**: TITLE·DESCRIPTION을 `CALC_DICT_JA.seo`에서 파생(EN page.tsx의 방식 복사 · 접미 「| HoldemMaster」만 page에서) · `featureList` 9 · `twitter/openGraph.images` 추가 · 제목 핵심어 = 사장님 확정 CTA 「ポーカー勝率計算機」 유지, 차별화어만 실측으로.
8. **게이트**: `npm run build`(seo-sync·meta-lang 포함) · `check:hreflang` · `check:meta` · `check:cjk` · 산출물 `.next/server/app/ja/calculator.html`에서 H2·Question 17·`calculator-tab-equity` 확인.
9. **렌즈**(Opus 서브 병렬): 네이티브 적대(일본 홀덤 전문가 · 용어 = `docs/translation-terms-ja.md` · `ja-notation.md`) · 교열(EN 표와 값 전사 대조 · 행 개수 · 자리표시자) · 수학은 EN 1회로 종결(값 대조만). 반영 → 2차 교열 1렌즈.
10. **화면**: `node .claude/skills/screen-review/scripts/shoot.mjs --base http://localhost:3100 --path /ja/calculator --widths 1440,390`(먼저 `npx next start -p 3100` 백그라운드 · 끝나면 kill) — 모바일 overflow 0 · 결과표 Equity 열 · 아웃츠 6열.
11. **배포**: 커밋·push → `tmp/screen/live-check.mjs`를 ja용으로 고쳐 라이브 DOM 확인 → `npm run indexnow -- --urls /ja/calculator` → MB 발신(`.mjs` splice · `check:mailbox` 전후) → WORKLOG · 이 파일 §0 ja 행 ✅ · 핸드오프 다음 로케일(zh) · `npm run lane:sync -- --apply`.

🔴 세션 = 회차 1개(ja만). 끝나면 「zh 시작해」로 다음 세션.

### 3-B. ja 회차가 남긴 것 (09-17 · 다음 로케일이 그대로 쓴다)

- 🔴 **CJK 로케일은 quickRef 라벨 열(아웃츠 1열·SPR 1열·M 1열)도 `nowrap`에 넣어라** — 어절 경계가 없어 390px에서 1글자씩 세로로 쌓였다(ja 캡처). 표는 컨테이너 `overflow-x-auto`로 옆 스크롤된다. zh·zh-hant 동일 처방.
- 🔴 **탭 이름 ≠ 페이지 이름**: EN은 「Poker Odds Calculator」(페이지) vs 「Equity」(탭)이라 안 겹치지만, ja는 「ポーカー勝率計算機」(페이지) vs 「ハンド勝率」(탭). 독자에게 «탭을 쓰라»는 문장은 반드시 **탭 라벨**로(교열 렌즈가 5곳 잡음). 로케일마다 이 충돌을 먼저 점검.
- 🔴 **볼드 조각(`{b3}`)은 술어로 끝내지 마라** — 「…話は別」처럼 끝나면 뒤의 「べきです」에 안 붙는다. 조건절은 `text` 쪽으로.
- 🪶 스타팅 핸드 77·88·KQo의 EN 「call EP」는 «레이즈에 콜»로 읽어 옮겼다(ja 「アーリーはレイズにコール——オープンリンプはしない」). EN 원문도 모호하다 → §5 후속 후보(딜러 렌즈 12항에 빠져 있던 3항).
- 🪶 「チップチョップ」 1,600 = 明治 과자 오염 — 로케일마다 이런 «훅으로 쓰면 안 되는 큰 볼륨»을 서제스트 오염률로 걸러라(rakko-playbook §1-A).
- 🪶 ja 질문 DB는 「〜の計算方法は?」·「〜の計算式は?」·「〜は?」 명사 종결이 지배형 — FAQ 질문 형태소의 근거(뱅크 §3).

### 3-C. zh 회차가 남긴 것 (09-17 · 다음 로케일이 그대로 쓴다)

- 🔴 **`npm run check:calc-parity -- <loc>`를 렌즈 전에 먼저 돌려라**(`scripts/calc-dict-parity.ts` · zh 회차 승격). quickRef 숫자 셀·행/열 · icmGuide 표 · 프리셋 · FAQ/related/guide/chips/hands 개수 · `{placeholder}` 재귀 · 직선 "/「」. **`check:hygiene`은 `lib/posts`만 읽고 `app/**`는 안 본다** — 사전의 인용부호는 이 게이트가 유일한 기계 검사다(주석에 hygiene을 근거로 적지 마라).
- 🔴 **공용 컴포넌트가 사전 조각 사이에 반각 공백을 하드코딩하던 자리 3곳**(push/fold note strong3 앞 · readMore 뒤 · deal.linkLead 뒤)은 `sep()`로 CJK 종결 시 생략된다. 새 조각을 컴포넌트에 추가할 때 `{" "}`를 그대로 쓰지 마라. 남은 CJK 함정 = `icm.introRest` 선행 공백(EN 타입 주석이 요구 · zh는 뺐다 · ja는 남아 있다 — 로케일 공통 판정 미결).
- 🔴 **방위어 금지**: 「上面那个大数字」처럼 «위/아래»를 쓰면 데스크톱(`sm:flex-row`)에서 틀린다. EN·ja처럼 「那个大数字」.
- 🔴 **탭 라벨을 따옴표로 인용할 때 괄注를 따옴표 «안»에 넣지 마라** — 「“Chip chop（按筹码分钱）”那一列」은 존재하지 않는 열 이름이 된다. 「“Chip chop”（按筹码分钱）那一列」.
- 🔴 **FAQ 질문 뒤에 명사 키워드를 «덧붙이지» 마라**(「底池赔率怎么算？跟注所需胜率的公式」) — 두 렌즈가 같은 자리를 잡았다. 키워드는 질문 «안»에(「底池赔率和跟注所需胜率怎么算？」). 한 `q`에 질문 두 개도 금지(H2와 축어 중복이 났다).
- 🪶 **볼륨이 없는 로케일의 근거 3종** = 자동완성 «존재 여부»(3지역 교차) + SERP 구성(위젯만 vs 도구+표+FAQ) + PAS. zh는 이 셋으로 제목·탭명·FAQ 표기를 전부 결정했다 — 사후 판정은 28일 GSC 쿼리 단위뿐.
- 🪶 「ICM计算器」처럼 **앵커 없는 라틴 단독은 자동완성이 죽는다**(「德州扑克 icm计算」은 산다) — 제목엔 「ICM」만, 본문·H2는 코퍼스 표기.
- 🪶 zh 고유 FAQ의 근거는 «자동완성에 살아 있는 시드»(「德州扑克 aa 胜率」)로 잡았다 — 라쿠 질문 DB는 zh를 안 덮는다(4번째 실증).

### 3-E. zh-hant 회차가 남긴 것 (09-17 · 다음 로케일이 그대로 쓴다)

- 🔴 **CTA 이름이 볼륨 0일 수 있다** — 로케일 CTA는 09-16에 «코퍼스 앵커 축어»로 정했지 검색어로 정한 게 아니다(zh-hant 「撲克機率計算器」 = null·자동완성 0). 제목 앞머리는 실측 머리어(260)에, H1·CTA·브레드크럼은 앵커에 — **분리해도 된다**.
- 🔴 **«calculator» 명사 자체를 갈래마다 재라** — 대만은 計算器(260 머리어)와 計算機(icm計算機 70 ↔ icm計算器 null)가 축마다 갈린다. ja(計算機/計算ツール)와 같은 결.
- 🔴 **fold equity를 「○○率」로 옮기지 마라** — zh-hant 「棄牌率」은 형제 글(holdem-equity L122)이 «혼동 금지»로 설명하는 오역이었다(네이티브 렌즈 高). 각 로케일 코퍼스의 fold equity 정본을 grep하라(zh 간체 사전의 「弃牌率」도 같은 결 — 후속 판정 후보).
- 🔴 **M 데드존 「看到最好的一手就推」류는 «프리미엄을 기다려라»로 읽힌다** — EN 「the best live hand you see」 = «받는 패 중 쓸 만한 것». zh 「看到的最好的一手牌就推」도 같은 결(후속 판정 후보).
- 🔴 **「綁定」(계정 연동) ≠ pot-committed** — 대만 코퍼스는 「綁死」. 로케일마다 SPR «committed» 역어를 코퍼스로 재라.
- 🔴 **TDA 인용은 2024판** — 2022판 Rule 5(«live hand 중»)는 2024 5-D(«at the table» 전체)로 넓어졌다. `zh-hant-odds-cluster.md` §3-A는 2022 문구.
- 🪶 공용 컴포넌트 처방 3건(EN 산출물 불변): quickRef 헤더 CJK `nowrap`(「翻牌→河牌」 3줄 꺾임 — zh·ja 동형) · quickRef note 뒤 `sep()` · push/fold readMore 앞 `sep()`.
- 🪶 데스크톱 탭 라벨이 5자 이상이면 2줄로 꺾인다(「錦標賽 M值」 → 「錦標賽 M」 · zh 「锦标赛 M」 동형). 탭 라벨을 바꾸면 「…」 인용 자리를 전부 같이.
- 🪶 zh-hant 고유 FAQ의 근거 = 경쟁 FAQ 축(calculators.hk 「我可以在實戰中使用這個工具嗎？」) + 1차 출처(TDA) + 경쟁 0 — «질문 DB가 없는 로케일»의 세 번째 방법(zh는 자동완성 시드였다).

### 3-D. 🔴 모델 분담 — 절약 국면 (2026-09-17 사장님: 「Fable만 썼더니 한도가 찬다 · Fable/Opus 구분해라」)

zh 회차의 소모 구조 = **헤드(Fable)가 전부**였다: 실측 도구 호출 · 뱅크·사전·FAQ·page 집필 · 렌즈 반영 · 마감 문서까지 한 창. 서브(sonnet 2 · Opus 3)는 그에 비하면 작다.
→ 계산기 로케일 회차는 **판단보다 «선례 옮겨쓰기 + 실측»이 대부분**이라 헤드가 Fable일 이유가 없다(`settled-decisions` §5-A-2 절약 국면 그대로).

| 단계 | 모델 | 왜 |
|---|---|---|
| 실측(자동완성 스크립트 · DFS 볼륨·SERP · 라쿠) · 뱅크 작성 | **Opus 헤드** | 도구 호출 + 표 정리. 판단은 «살아 있나/죽었나» 수준 |
| 상위 페이지 구조 추출(H1~H3·표·FAQ·입력) | **sonnet 서브 ×2** | 요약 금지·원문 추출만(§12-B) |
| 사전·FAQ·page 집필 | **Opus 헤드** | ja·zh 사전이 템플릿. 수치는 EN 그대로(§13) — 재작성 부담은 어휘·형태소뿐 |
| §13·전사·개수·플레이스홀더·인용부호 | **스크립트** `npm run check:calc-parity -- <loc>` | 모델 다양성이 값을 안 내는 자리(메모리 「검증을 실행·산출물이 하면…」) |
| 렌즈 = 네이티브 적대 + 교열(병렬) → 2차 교열 | **Opus 서브 ×3** | zh 회차에서 이 조합이 76건을 잡았다 — 렌즈 «개수»가 값이지 모델 급이 아니다 |
| **Fable — 좁은 판정 1회(선택)** | Fable 서브 | 질문 하나: «제목·탭명 최종안 + 거울쌍 갈림 자리(公牌/機率/籌碼/「」) 판정». 입력 = 뱅크 §1·§5 조각 + 후보 3안만. **한도 없으면 생략** — zh 회차 판정과 동형이라 Opus 헤드가 내려도 된다 |
| 화면(screen-review) · 라이브 · IndexNow · 우편함 · 문서 마감 | **Opus 헤드** | 절차 실행 |

🔴 **금지**: Fable 창에서 회차를 통째로 여는 것 · Fable에 «전체 사전 파일»을 읽히는 것(좁은 판정엔 조각만). 헤드가 Opus인 대신 **교차검수는 반드시 한다** — 「쓴 모델이 본 0건은 0건이 아니다」.

## 4. 하지 마라

- 경험담·에세이 섹션 추가(사장님 지시) · 탭 안에 색인용 문안 · 수치 재계산 · SPR/BB 제목 훅 · 로케일 사전 키 삭제.

## 5. EN 후속(미반영 · 다음 queue/헤드 회차 재료)

- 🟠 **OG/트위터 `images` 누락은 사이트 패턴**: `app/en/page.tsx`·`app/en/solver/page.tsx`·10로케일 계산기 `page.tsx` 전부 — Next metadata는 얕은 병합이라 루트 layout 이미지가 상속되지 않는다. 공용 헬퍼로 한 번에.
- 🟠 `lib/calculator-alternates.ts`에 `x-default` 없음(12랜딩 공용).
- 🪶 M 존 라벨 «1–5 / 6–9 / 10–19»(코드 `M_ZONES`)는 소수 경계(5.5 → 레드)와 안 맞는다 — 코드·표 동시 수정 대상(전 로케일).
- 🪶 M 탭은 플레이어 수를 앤티에만 쓰고 Effective M을 존에 적용하지 않는다(표 intro에 안내만) — 기능 개선 후보.
- 🪶 `holdem-bubble`(EN)이 `/en/calculator`를 3번 링크하는데 역링크 없음 · 「rule of 4 and 2」가 EN 4곳에 분산(140/mo).
- 🪶 스타팅 핸드 표 미등재 수티드 커넥터(97s·86s…)·K9s·Q9s는 폴백 문구로만 처리 — 항목 보강 후보.
- 🪶 EN `starting.hands` 77 「call EP」 · 88 「consider calling EP」 · KQo 「call/fold in EP」 — «레이즈에 콜»인지 «오픈 림프»인지 모호(ja 네이티브 렌즈 09-17). 딜러 렌즈 12항에서 빠진 3항 → EN 정정 후 로케일 전파 후보.
- 🪶 **EN `icmGuide.bubble.keyPoint.b3`의 조건절 위치**: EN은 b3 끝에 「— unless the blinds are about to eat it」가 붙어 뒤의 「to protect that survival value」와 어긋나게 읽힌다(zh 2차 교열 렌즈 09-17). zh·ja처럼 조건절을 `text`로 앞당기고 목적절을 대시로 분리하는 구조를 EN에 회灌.
- 🪶 EN `quickRef[5].intro` 「the calculator above shows raw M」 — 도구가 9개라 모호. zh는 「“锦标赛 M”标签页」로 지목했다. EN도 탭 이름으로.
- 🟠 **클라이언트 `<SEO>`가 `og:title`을 서버 `openGraph.title`과 다른 값(fullTitle)으로 덮어쓴다** — en·ja·zh 공통(교열 렌즈 09-17). `check:seo-sync`는 이 축을 안 본다. 로케일 공통 판정 필요(서버 og:title을 fullTitle로 맞추거나 클라이언트가 og를 안 건드리게).
- 🪶 `icm.introRest` 선행 공백 — EN 타입 주석 「keep the leading space」는 영어용. CJK 로케일에서 「）」와 「是」 사이 공백이 렌더된다(zh는 뺐고 ja는 남음). 렌더러 쪽 처방(`sep()` 동형)으로 통일 후보.
- 🪶 zh 88/KQo/77의 「不要开池平跟」은 EN(「call EP」)에 없는 절 — ja와 동형. EN 「call EP」 정정(위 77/88/KQo 항)과 함께 판정.
- 로케일 회차 공통: 딜러 렌즈가 고친 EN 도구 문안 12항(Effective stack · 팟 라벨 · SPR low · 데드존 · diffPlusNote · 스타팅 12핸드 · unknown 폴백 · 슬라이더 19.6 · 프리셋 «Flush draw» · 오버카드 desc · 가이드 카드 · introRest)은 **각 로케일 사전에도 그대로 남아 있다** — 로케일 회차에서 같이 정정.

