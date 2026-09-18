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
| **es** | ✅ 09-17 배포(WORKLOG 09-17 (9)) | `docs/keyword-bank/es-calculator.md` | Equity 탭(«Equity») + quickRef 6표 + FAQ 18(es 고유 = TDA 2024 Rule 5 «¿Se puede usar una calculadora de poker en la mesa?» · PokerNews·888 FAQ 축) + 메타 «Calculadora de poker — probabilidades, equity e ICM»(MX 70·AR 90·CO 70 · H1·CTA «Calculadora de probabilidades»(10)는 앵커로 유지) + 렌즈 3종 + 2차 교열. 🔴 **«calculadora icm» = IMC(BMI) 오염** · 볼륨은 DFS MX·AR·CO·ES |
| **pt** | ✅ 09-17 배포(WORKLOG 09-17 (10)) | `docs/keyword-bank/pt-calculator.md` | 권역 = **pt-BR**(코퍼스 소수 콤마 1,637 : 0 → `numberLocale: "pt-BR"` 유지) · Equity 탭(«Equity») + quickRef 6표 + FAQ 18(pt 고유 = TDA 2024 Rule 5 «Posso usar uma calculadora de poker na mesa?») + 메타 «Calculadora de poker — odds, equity, ICM e pot odds»(calculadora poker 390 · odds poker 260 · de poker 170 · H1·CTA «Calculadora de probabilidades»(10~40)는 앵커) + 렌즈 3종 + 2차 교열. 🔴 **ICM = ICMS(세금)+IMC 이중 오염** → «acordo» 금지·«ICM deal» · `check:calc-parity`에 소수 콤마 정규화 |
| **de** | ✅ 09-18 배포(WORKLOG 09-18 · `688b67d1`) | `docs/keyword-bank/de-calculator.md` | 권역 = DACH(3지역 자동완성 차이 사실상 0) · Equity 탭(«Equity»/«Hand gegen Hand») + quickRef 6표 + FAQ 18(de 고유 = TDA 2024 Rule 5 «Darf man am Pokertisch einen Rechner benutzen?») + 메타 «Poker-Odds-Rechner – Equity, Wahrscheinlichkeiten & ICM». 🟢 **ICM 오염 0**(es=IMC·pt=ICMS와 달리 독일어 BMI는 «BMI») · 🔴 오염은 **다른 5갈래**로 왔다(Quotenrechner=스포츠베팅 · chip chop=햄 · equity rechner=금융 · harrington m=재킷 브랜드 · poker kalkulator=폴란드어) · 🔴 **4/2 규칙 직역은 자동완성 전멸 → «Faustregel»** · 🔴 영문 머리어가 자국어의 **2.3배**(590:260) |
| **fr** | ✅ 09-18 배포(WORKLOG 09-18 (2) · `140f585d` · MB-064) | `docs/keyword-bank/fr-calculator.md` | 권역 = **프랑스 단일**(FR/BE/CH/CA 자동완성 74시드 **전부 동일** — de의 DACH보다 더 붙어 있다) · Equity 탭(«Équité»/«Main contre main») + quickRef 6표 + FAQ 18(fr 고유 = TDA 2024 Rule 5-D) + 메타 «Calculateur poker — équité, cotes du pot et ICM». 🔴 **도구 명사를 «Calculatrice» → «Calculateur»로 교체**(볼륨은 동의어군 390이라 못 가른다 · SERP title 6/6) · 🔴 **Equity = «Équité»**(110 : 50 · 옛 사전 주석이 반대였다) · 🔴 **«Push or Fold»는 영어 «or»**(«push ou fold» null ×3 · PokerStars.fr만 쓴다) · 🔴 **코퍼스 6편** → related 6 · quickRef 링크 전부 비움 · 게이트 F항 신설 |
| id · ms · hi | ⏳ | — | 한 언어씩 · `npm run check:calc-parity -- <loc>`가 미채움을 «미검사»로 표시한다 |
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

### 3-F. es 회차가 남긴 것 (09-17 · 다음 로케일이 그대로 쓴다)

- 🔴 **약어 오염을 자동완성으로 먼저 걸러라** — «calculadora icm»의 자동완성 10개가 전부 «calculadora imc»(체질량지수)였다. 라틴계(pt «IMC»도 같은 약어) 로케일은 ICM을 늘 «de poker»/«de ICM»에 붙여 앵커. «regla del 4 y 2»는 의료(4-2-1) 오염 → 코퍼스 «2 y 4».
- 🔴 **라틴계 로케일은 영문 «icm calculator»가 자국어보다 크다**(MX 140 · AR 140 vs «calculadora icm» 10) — 제목엔 «ICM»을 넣되 자국어 머리어 뒤에.
- 🔴 **«calculator + X»의 X가 볼륨을 가른다** — «calculadora de poker» 70~170 ↔ «de probabilidades» 10. CTA 앵커(de probabilidades)는 H1에만(§3-E 선례 재확인). SERP 1·3위가 앵커 이름으로 머리어 쿼리에 올라 있으면 동의어군 = 분리해도 손해 없음.
- 🔴 **board를 «mesa»로 옮기지 마라**(es 코퍼스 board 634 · board pareado 33 ↔ mesa pareada 0) — 같은 도구에 «Mesa»(6-max 테이블)·«mesa final»이 있어 충돌한다. 로케일마다 board 역어가 table 역어와 겹치는지 먼저 본다.
- 🔴 **형제 글 FAQ와 «의도» 충돌은 축어가 아니어도 잡힌다**(SEO 렌즈 3건: chip chop vs ICM · ICM vs chip EV · 버블 폴드) — 계산기형·결과형 질문으로 틀어라(«¿Por qué un call rentable en fichas puede perder dinero en premios?»). EN FAQ도 같은 3문항을 갖고 있다(EN은 PAA 근거로 유지) — 로케일은 형제 글 FAQ를 grep한 뒤 결정.
- 🔴 **`captionMw`에 관사를 붙이지 마라** — pos 값에 SB(여성 «la SB»)와 나머지(«el BTN»)가 섞인다. 성·관사가 있는 로케일은 «en {pos}» 형.
- 🔴 **스타팅 핸드 «pagar»/«call LP»는 림프로 읽힌다** — 87s·65s·54s·33·22도 «pagar una subida»로 명시(네이티브 렌즈 · EN 원문도 같은 모호성 → §5).
- 🪶 **FAQ 고유 문항 = 경쟁 FAQ 축 + 1차 출처**(es·zh-hant 둘 다 «계산기 사용 가능?» 축이 SERP에 있었다). 자동완성 수요가 있어도 «못 한다»가 답이면(Omaha) 넣지 않고 뱅크 «미구현 수요»로.
- 🪶 게이트 `check:calc-parity` C는 FAQ «EN 17 + 고유 1»까지만 허용한다 — 고유 2개를 넣으려면 게이트부터 판정.

### 3-G. pt 회차가 남긴 것 (09-17 · 다음 로케일이 그대로 쓴다)

- 🔴 **약어 오염의 «대상»은 나라마다 다르다** — es는 IMC(BMI)만, 브라질은 **ICMS(세금)** 까지 겹쳐 «acordo icm»·«como calcular icm» 자동완성이 10/10 세금이었다. 딜 명사(acordo)까지 오염되므로 코퍼스 «ICM deal»로. de·fr는 «ICM Rechner»·«calculateur ICM»이 무엇에 덮이는지 먼저.
- 🔴 **숫자 표기는 코퍼스를 세고 정한다**(pt 소수 콤마 1,637 : 점 0 — es와 반대). 콤마 로케일은 `check:calc-parity`가 이제 사전 `numberLocale`로 판정해 `.`↔`,`를 뒤집어 대조한다(`numL` · 심은 오류 2/2 검출). de·fr·id도 같은 경로.
- 🔴 **«rodada»(pt)처럼 도구 용어가 게임 용어와 겹치는 자리** — Monte Carlo «run»을 «rodada»로 옮기면 «베팅 라운드»로 읽힌다(네이티브 렌즈 high). 로케일마다 «run/runs» 역어를 게임 용어와 대조.
- 🔴 **오버카드 정의 «not on board»는 틀렸다**(«보드의 어느 카드보다 높은 카드») — EN `outs.presets[5].desc` 동형 결함 → §5.
- 🔴 **«save and chop»의 «next payout» = «다음에 지급될(=남은 것 중 가장 낮은) 상금»** — «다음 상금 점프»로 읽히지 않게 예시 값($300 = 4위)을 괄호로. EN·타 로케일 회灌 후보(§5).
- 🪶 SEO 렌즈가 계산기형 FAQ를 한 단계 더 좁혔다(«Por que…?» 개념형 → «Como a calculadora mostra…?»·«Quanto a calculadora de ICM tira…?») — es가 남긴 3문항보다 더 계산기 쪽. 형제 글 H2까지 grep하면 «왜»형은 거의 다 소유돼 있다.
- 🪶 **역방향 누수**: 형제 글이 «계산기» 의도를 솔버로 보낸다(pt `holdem-pot-odds` FAQ «Existe calculadora…?» → /pt/solver · `holdem-equity` L191 + tags «calculadora de equity poker»). Equity 탭이 생긴 뒤라 계산기로 재조준할 후보 — 로케일 공통으로 grep(«calculadora|calculator|計算» + /solver 링크). 이번 회차 범위 밖(포스트 수정 = posting.mdc 절차) → queue 후보.
- 🪶 SERP가 얇은 로케일(브라질 «calculadora poker» 1페이지 4/10이 영어·스페인어)은 표 6개 자체가 차별점.

### 3-H. de 회차가 남긴 것 (09-18 · 다음 로케일이 그대로 쓴다)

- 🟢 **«약어 오염»을 로케일 상수로 보지 마라 — de는 0이었다.** es=IMC(BMI) · pt=ICMS(세금)+IMC였지만 독일어 BMI는 «BMI»라 ICM이 깨끗하다(«icm rechner»·«icm poker»·«icm calculator» 3시드 30개 확장 **전부 포커**). 🔴 **그래도 오염은 왔다 — 다른 자리로**: «Quotenrechner» 210=스포츠베팅 · «chip chop»=햄/회사명 · «equity rechner»=금융(private equity) · «harrington m»=재킷 브랜드 · «poker kalkulator» 390=폴란드어. → **점검 단위는 «ICM»이 아니라 «시드마다 확장 10개가 내 업종인가»**다.
- 🔴 **경쟁사 1위가 쓰는 말이 볼륨 0일 수 있다** — 888poker.de(SERP #1)가 FAQ에서 «Texas Holdem **Quotenrechner**»·«Wie zuverlässig sind Quotenrechner?»를 쓰지만 «poker quotenrechner»는 **0**이다(영어 odds의 직역 잔재). 로컬보이스가 그 시장을 «번역체 잔재»로 적어둔 곳일수록 경쟁사 표기를 검색어로 착각하기 쉽다. **경쟁 FAQ에서 문안을 빌릴 때도 그 명사를 따로 재라.**
- 🔴 **EN 규칙 이름의 직역이 자동완성 전멸일 수 있다** — «Regel der 4 und 2»·«4 2 regel poker»·«vierer zweier regel poker» 전부 확장 0. 독일어 검색자는 **«Faustregel»**(rule of thumb)로 친다(PAS 「Poker Wahrscheinlichkeiten Faustregel」·「Poker outs faustregel」 · 코퍼스 33 : 6 : 2 · 형제 글 H2 축어). → 로케일마다 «그 나라의 rule-of-thumb 단어»를 PAS·코퍼스로 찾아라. 병기 순서도 EN(4→2)이 아니라 코퍼스(2→4)를 따른다.
- 🔴 **영문 머리어가 자국어의 2배 이상일 수 있다** — de «poker odds calculator» **590** : «poker rechner» 260(pt는 260:260 동급이었다). 처방은 pt와 같다: 자국어 명사에 영문 토큰을 **합성어로 녹여** 둘 다 먹는다(«Poker-**Odds**-Rechner»). 독일어는 합성어라 이게 특히 잘 듣는다.
- 🔴 **승인 CTA가 살아 있는지 매번 재라** — zh-hant는 CTA가 볼륨 0이라 제목 앞머리를 분리했지만, de «Poker-Odds-Rechner»는 **50**으로 살아 있어 그대로 앞머리에 뒀다. §3-E를 「CTA는 분리한다」로 일반화하지 마라 — **측정 후 판정**이다.
- 🔴 **형제 글이 소유한 것은 «명사»가 아니라 «명사+한정어»다** — `holdem-probability`가 가진 것은 «Poker Wahrscheinlichkeiten **Tabelle**»이고 «**Rechner**»를 title에 쓰는 형제 글은 **0건**이었다. 그래서 계산기가 «Wahrscheinlichkeiten Rechner» 210을 통째로 가져갈 수 있었다. 카니발 판정은 키워드 단위가 아니라 **구(句) 단위**로.
- 🟢 **역방향 누수(§3-G)는 de에 없었다** — 형제 글 14곳이 이미 `/de/calculator`를 가리킨다(«Poker-Rechner» 5 · «ICM-Rechner» 4 · «ICM-Deal-Rechner» 1 …). pt의 «/solver로 샌다» 문제는 로케일 상수가 아니다 — **grep으로 확인하고 «없다»도 기록**하라(반복 방지).
- 🪶 **게이트가 46 → 0을 먼저 잡는다** — `check:calc-parity -- de`를 렌즈 **전에** 돌려 미채움 46건을 0으로 만든 뒤 렌즈를 붙였다(§3-C 규율 그대로). 렌즈가 전사 오류를 볼 필요가 없어진다.
- 🪶 **quickRef 화살표 헤더(«Flop → River»)는 390px에서 3줄로 꺾인다 — 그런데 EN도 똑같다**(둘 다 실측 81px). CJK용 `nowrap` 조건(`calculator-tool.tsx:1578`)이 라틴 헤더엔 안 걸리기 때문. **de 회귀가 아니라 기존 EN 산출물의 수용된 동작**이라 이번 회차에서 고치지 않았다 → §5 후속. 「보기 나쁘다」를 만나면 **먼저 EN과 대조**하라.
- 🪶 상위 페이지 추출을 **서브에이전트 2개에 같은 파일명**(`tmp/de-calc-extract-b.mjs`)으로 시키면 덮어쓴다(실제로 났다 · 한쪽이 `-FINAL.json`으로 피신). 병렬 추출은 **에이전트별로 다른 파일명**을 지정하라.
- 🪶 독일어 ICM 위젯의 1차 자료 = PokerFirma `/dealrechner/deal.html`(iframe · 산문 0) 축어 «Chipstände / Preisgelder / Geld nach Deal». 🔴 그런데 «Chipstände»는 **우리 코퍼스 0건**(Chipstack(s) 19 · Stacks 149)이라 채택하지 않았다 — **한 경쟁사의 표기 ≠ 시장 표준**.

### 3-J. fr 회차가 남긴 것 (09-18 · 다음 로케일이 그대로 쓴다)

- 🔴 **볼륨이 «같은 군»이면 볼륨으로 판정하지 마라.** 월별 시계열·CPC·입찰가가 **완전히 같으면** Google Ads가 묶은 것이다 — fr에서 **5쌍**(calculateur≡calculatrice 390 · probabilité≡proba 880 · calcul cote≡calculateur cote 110 · cote≡cotes 70 · equity calculator≡poker equity calculator 90). de는 이 쌍을 안 만났다. **가르는 근거는 자동완성 재조준 방향 + SERP title 표기뿐이다.**
- 🔴 **전치사 하나가 갈래를 죽인다** — fr «calculateur **de** poker» 10 ↔ «calculateur poker» **390**(39배). 합성어 언어(de)는 영문 토큰을 «녹이고», 전치사 언어(fr)는 **«뺀다»**. 🔴 그런데 es·pt의 «de»는 반대로 살아 있다(«calculadora de poker» 70~170) — **로케일 상수가 아니다. 매번 잰다.**
- 🔴 **«영문 머리어 대 자국어»는 로케일마다 뒤집힌다** — de 590:260(영문 2.3배) ↔ **fr 260:390(자국어 1.5배)** ↔ pt 260:260. §3-H를 「영문이 크다」로 일반화하지 마라.
- 🔴 **명사형보다 동사형이 클 수 있다** — fr «calcul probabilité poker» 210 : «calculateur probabilité poker» 10(**21배**). H2·FAQ를 «Comment calculer…»로 짜는 근거. 다음 로케일도 «계산/계산하다» 대 «계산기»를 따로 재라.
- 🔴 **«경쟁사 1위 표기 ≠ 검색어»의 두 번째 실증** — de 888poker «Quotenrechner»(0), **fr PokerStars «push ou fold»(null ×3 ↔ «push or fold» 70)**. 🔴 이번엔 **자국어화가 함정**이었다: 같은 회차 안에서 équité(자국어 승) ↔ push **or** fold(영어 승)가 **반대로** 나왔다. **축은 언어가 아니라 «그 구가 시장에 정착한 형태»다.**
- 🔴 **오염은 «자국어 약어»가 아니라 «영문 시드»에서도 온다** — fr «calculateur icm»은 BMW·군·병원으로, **«icm calculator»(영문)는 weight/poids/peso/kg**로 샜다. es(IMC)·pt(ICMS)만 보고 «자국어 약어만 확인»하면 놓친다. 🪶 «Harrington» 재킷 오염은 de·fr 공통 → 라틴 로케일은 **확인만 하고 M 탭 이름에 인명을 넣지 않는다**.
- 🔴 **사전의 «옛 주석»을 근거로 쓰지 마라 — 실측이 반대일 수 있다.** fr 사전은 「equity는 솔버 관용을 따른다 · équité는 코퍼스 1회뿐」이라 적어 뒀는데, 실측은 **équité 110 : equity 50**이었다(SERP #1·#2·#3 전부 équité). **09-16 일괄 개설 때 적은 주석은 코퍼스에서 왔지 시장에서 오지 않았다.**
- 🔴 **승인 CTA를 «교체»해야 하는 경우도 있다** — §3-E(zh-hant)는 CTA가 **볼륨 0**이라 제목에서 «분리»했고 §3-H(de)는 **50으로 살아 있어** 그대로 뒀지만, fr은 CTA 표기가 **시장 표기와 어긋나는 쪽**(«Calculatrice»)이라 분리하면 우리만 쓰는 말이 남는다 → **교체**. 판정 축 = 「살아 있나」가 아니라 **「시장이 그 말을 쓰나」**. 바꿀 땐 `dict.seo`·`hero.h1`·`page.tsx`(TITLE·OG·JSON-LD·breadcrumb)·`CALC_CTA_LABELS`·`side-rail.tsx` **다섯 자리**를 같이(포스트 본문 앵커는 posting.mdc 절차라 별건).
- 🔴 **코퍼스가 얇은 로케일은 링크가 «없는 게 정답»이다**(fr 6편 · ms·hi 21편도 확인 필요). EN 슬러그를 베끼면 404다. 게이트 §7-A가 코드로 본다 — `check:calc-parity`의 **F항**·related 개수 `min(EN 8, 코퍼스 크기)`·D항 면제. **🔴 fr 회차 전까지 게이트는 «그 슬러그가 존재하나»를 아무도 안 봤다.**
- 🔴 **조판 규율은 콘텐츠가 아니라 게이트를 고쳐 지킨다** — 프랑스 조판(«81,9 %» % 앞 공백 · «1 035» 공백 천단위)이 코퍼스 실측 **19:0**으로 정본이라 `numL`에 정규화를 넣었다(순서 주의: ① % 앞 공백 제거 → ② 소수 구분자 뒤집기 → ③ 공백 천단위를 «,»로). 🔴 **정규화가 검사를 무력화하지 않는지 셀프테스트로 박아라**(10-C).
- 🔴 **«도구 → 도구» 카니발을 잊지 마라** — fr 회차가 계산기 H1을 «Calculateur poker»로 올리자, **`/fr/solver` FAQ가 2026-08-24에 같은 머리어(390)를 흡수해 둔 것**과 정면 충돌했다(solver→calculator 링크 **0건**). 처방은 noindex가 아니라 **PICK_TOOL 표에 도구→도구 링크 신설 + FAQ 답 핸드오프**(메모리 `seo-tool-vs-blog-cannibalization`). **다음 로케일도 `app/<loc>/solver/`를 grep해서 같은 흡수 문항이 있는지 먼저 봐라.**
- 🔴 **2차 교열이 «내 수정이 만든 새 결함» 8건을 잡았다** — 이 회차에서 가장 값이 컸다. 특히 ① 1차 수정이 «A5s fait la roue»(관용구 충돌)를 **새로 만들었다** ② 가중 서술 삽입이 **수학을 틀리게** 했다(두 값을 같은 p로 가중 불가) ③ 두 핸드의 액션을 **축어 동일**로 평탄화했다(티어가 다른데). **1차 지적을 반영한 뒤 반드시 한 겹 더.**
- 🪶 **주석이 다음 세션의 근거다** — fr 초안 주석 4곳이 사실과 달랐다(「hero에서 병기」인데 실제는 가이드 카드 · FAQ §13 목록이 그 파일에 **없는** 수치를 나열 · featureList가 «탭 라벨»이 아니라 guide 카드 확장형 · 코퍼스 tapis 136 → 실측 133). **주석도 렌즈 대상에 넣어라.**

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

### 3-I. 🔴 미재조준 3로케일(id · ms · hi)이 **지금 들고 있는 구멍** (de 회차가 실측 · 09-18 · fr 회차에서 fr 해소)

de 회차의 렌즈 2종이 「de 번역 문제」로 보고한 것들이 실은 **09-17 EN 경화가 로케일에 안 실린 것**이었다.
`app/*/calculator/dict.ts` 전수 grep으로 세어 보니 **es·ja·pt·zh·zh-hant는 개정본을 이미 실었고, de·fr·id·ms·hi 5개만 개정 전**이었다(de 09-18 해소 · **fr 09-18 해소** → **남은 건 id·ms·hi 3개**).
🔴 **각 로케일 회차는 사전을 새로 쓰기 전에 아래를 EN 정본과 먼저 대조하라** — 안 하면 「완료」로 닫히고 유해 조언이 남는다(메모리 `completion-count-the-copies-first`).

| 자리 | 개정 전(위험) | EN 정본 |
|---|---|---|
| `starting.unknownDesc`/`unknownAction` | 「매우 약한 핸드 / 대개 폴드」 — 🔴 **사실 오류**(K9s·QTs·J9s 등이 전부 이 폴백에 떨어진다) | 「Not in the core opening chart」 / 「Cutoff/button only, and only when folded to you」 |
| `spr.zones.mid.actions[1][2]` | 「감으로 플레이」·「리스크 대 이득을 재라」 — 🔴 **D유형**(계산기가 줄 수 있는 최악의 조언) | 「One or two streets, then pot control」 / 「Semi-bluff with fold equity; give up without it」 |
| `spr.zones.low.desc` | EN 끝문장 **통째 누락** → 젖은 보드에서도 TPTK 스택오프 조언이 된다 | 「On paired, three-flush or three-straight boards … one pair is still one pair.」 |
| `starting.hands` **13항** (1010·AJs·A10s·KJs·Q10s·J10s·77·66·55·44·33·22·76s) | 「얼리에서 콜」 — 🔴 EN이 딜러 렌즈로 **전수 제거한 오픈 림프 권유**가 살아 있다. 셋마이닝 정량 기준(~15×)·first-in 레이즈도 소실 | 「— never limp」 / 「fold from EP」 / 「~15× the call behind」 / 「raise first in」 |
| `pot.potSize`·`sliderFlush`·`outs.presets[1][5]`·`icm.diffPlusNote`·`spr.effectiveStack`·`m.zones.dead` | 딜러 렌즈 12항 전반 | §5 마지막 줄 |
| `page.tsx` `twitter.images`·`openGraph.images` | 없음 → 카드가 빈 채로 나간다 | 두 자리 다 `/opengraph.jpg` |
| `page.tsx` TITLE/DESCRIPTION | 하드코딩 → 클라이언트 `<SEO>`가 dict로 덮어써서 갈리면 조용히 dict가 이긴다 | `${DICT.seo.title} | HoldemMaster` 파생 |
| `seo.description` 길이 | 🔴 **게이트 사각지대** — `check:meta-length`는 `lib/posts-*`만 순회하고 계산기 랜딩을 **안 본다**. de는 171자로 §11-7을 어긴 채 빌드·hreflang·meta 게이트를 전부 통과했다 | ≤160(en 158 · es 155 · pt 154) |

🪶 **게이트 후속 후보**: `check:calc-parity`에 «description ≤160» 한 줄을 넣으면 이 사각지대가 닫힌다(현재는 값·개수·플레이스홀더·인용부호만 본다).

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
- 🪶 **EN FAQ «4 and 2 rule»의 «times-2 half runs 1–2 points low»는 5~11 outs에서만 참**(표: 1~4 outs 0.2~0.7 · 12 outs 2.1 · 15 outs 2.6 · 20 outs 3.5 — es 교열 렌즈 09-17). es는 «outs가 늘수록 더 모자란다(9 outs 1.6 · 15 outs 2.6)»로 고쳤다. EN·ja·zh·zh-hant 회灌 후보.
- 🪶 **EN FAQ «compare the average against your value if you just fold»** — 승/버스트 단순 평균은 승률 50% 가정이 된다(es 네이티브 렌즈). es는 «승률로 가중한 평균». EN·타 로케일 회灌 후보.
- 🪶 EN `pot.orHigher` «above this…» ↔ de·fr·pt·id·es(옛)·ms «or more» — 정확히 같으면 EV 0(verdict.even)과 어긋난다. es는 «— con más equity, el call es rentable». 남은 로케일 회차에서 같이.
- 🪶 EN `starting.hands` 87s·65s·54s «Call LP» · 33/22 «Multiway pots…» — «레이즈에 콜»이 명시 안 돼 림프로 읽힌다(es 네이티브 렌즈). es만 «pagar una subida»로 명시.
- 🟠 **EN `outs.presets[5].desc` «2 high ranks not on board»는 오버카드 정의가 틀렸다** — «보드의 어느 카드보다 높은 2장»(pt 네이티브 렌즈 09-17 high). EN·ja·zh·zh-hant·es 사전 동형 확인 후 회灌.
- 🪶 **EN deal.summary «pay everyone the next payout first»** — «next payout»이 «다음 상금 점프»로 오독된다(pt 네이티브 렌즈). pt는 «o próximo prêmio a ser pago (aqui, os $300 do 4º lugar)». EN·타 로케일 회灌 후보.
- 🪶 **EN `starting.hands` KQo «call/fold in EP»** — EP에서 레이즈에 콜은 도미네이트·OOP 누수(pt 딜러 렌즈). pt는 «se ninguém entrou, aumente ou folde; diante de um aumento geralmente folde». 77/88 항과 함께 판정.
- 🪶 EN 66·44 «~15× the call behind» — 누구의 스택인지(양쪽 유효 스택) 명시 없음. pt는 «você e quem aumentou tiverem atrás pelo menos ~15×».
- 로케일 회차 공통: 딜러 렌즈가 고친 EN 도구 문안 12항(Effective stack · 팟 라벨 · SPR low · 데드존 · diffPlusNote · 스타팅 12핸드 · unknown 폴백 · 슬라이더 19.6 · 프리셋 «Flush draw» · 오버카드 desc · 가이드 카드 · introRest)은 **각 로케일 사전에도 그대로 남아 있다** — 로케일 회차에서 같이 정정.


### fr 회차(09-18)가 §5에 더한 것

- 🟠🟠 **최우선 — `components/calculator/calculator-tool.tsx`의 동적 퍼센트가 `numberLocale`을 무시한다.**
  `:399-401, 521, 529, 534, 589, 593, 600, 631, 1179-1187, 1338`이 전부 **`toFixed(1)` + 하드코딩 `%`**다.
  `numberLocale`은 `nf()`(정수)에만 먹는다 → **fr 화면에서 도구가 «81.9%»를 찍는 바로 아래에 우리 quickRef 표가 «81,9 %»로 찍힌다.**
  즉 사전 문자열에 박아 둔 조판 규율(소수 쉼표 · % 앞 공백)이 **도구 본체에서 전부 무효**다. de(«81,9%» 기대)·es·pt도 같이 맞는다.
  🔴 fr 회차에서 안 고친 이유 = **공용 컴포넌트라 12로케일 렌더가 동시에 바뀐다**(EN은 «81.9%»가 정답이라 분기 필요) → 화면 재검증이 회차 범위를 넘는다.
  처방 = `toFixed(1)` 자리를 `Intl.NumberFormat(dict.numberLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })`로 바꾸고 `%` 앞 공백은 로케일 플래그로. **고칠 때 12로케일 390px 캡처를 같이 뜬다.**
- 🟠 **EN `starting.unknownAction`에 하한이 없다** — 표 밖 **122개 핸드 전부**가 이 폴백으로 떨어지는데(`calculator-tool.tsx:762`가 tier 5 고정) 「CO/BTN에서 first-in이면 오픈」으로 읽힌다 → **72o·32o·J2o도 오픈 가능**이 된다. 09-17 개정이 K9s·QTs를 살리려다 반대쪽 끝을 열었다(fr 딜러 렌즈 09-18). EN에 「진짜 약한 손은 여전히 폴드」 단서를 넣고 전 로케일 전파.
- 🟠 **EN FAQ 「open and re-shove wider as the aggressor」에 스택 구분이 없다** — 중간 스택이 리슈브를 넓히면 ICM상 손해다(fr 딜러 렌즈).
- 🔴 **«완료 전에 사본을 세라» — 두 명제가 로케일마다 갈린 채다**(fr 교열 렌즈 전수 실측 09-18):
  | 명제 | en | es | pt | de | fr | ja · zh · zh-hant |
  |---|---|---|---|---|---|---|
  | «×2는 outs가 늘수록 더 모자란다»(9 outs 1,6 · 15 outs 2,6) | **옛 문장(1–2 points)** | 최신 | 최신 | 최신 | 최신 | **미반영** |
  | deal.summary의 «next payout»에 값 못박기($300 = 4위) | **없음** | 없음 | 있음 | 있음 | 있음 | 없음 |
  🔴 첫 줄은 EN이 **사실 서술**로 틀리게 적어 둔 것이다 — EN을 안 고치면 다음 로케일이 **또 옛 문장을 번역한다**.
- 🪶 EN FAQ Q11 끝 절(「which is why the chip leader's ICM value sits below their chip share」)이 **Q14의 명제 전부**와 겹친다 · Q16의 save-and-chop 설명이 `icmGuide.deal.summary`와 거의 축어 중복(둘 다 EN 상속 · fr SEO·교열 렌즈 09-18).
- 🪶 EN `pushfold.cell`·`m.zones.red.action`의 «Push/Fold» ↔ «Push/fold» 대소문자가 EN 안에서 갈려 있다(로케일이 그대로 물려받는다).
- 🪶 **quickRef 화살표 헤더 390px 3줄 꺾임이 이제 3번째 로케일**(de·fr·EN 전부 동일 · `calculator-tool.tsx:1578`의 `nowrap` 조건이 CJK만 본다). 고칠 때 EN 산출물이 같이 바뀌므로 위 🟠🟠와 **한 회차로 묶는 게 싸다**.
