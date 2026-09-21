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
| **id** | ✅ 09-19 배포(WORKLOG 09-19 · `35dfadaa` · MB-065) | `docs/keyword-bank/id-calculator.md` | 권역 = 인도네시아 단일 · Equity 탭(«Equity»/«Hand lawan hand») + quickRef 6표 + FAQ 18(id 고유 = TDA 2024 Rule 5 «Apakah boleh memakai kalkulator poker di meja?») + 메타 «Kalkulator Poker — Odds, Equity, ICM & Pot Odds». 🔴 **인니어 계산기 명사가 전멸**(«kalkulator + X» 자동완성 전부 0건 · 볼륨은 `kalkulator poker` 10만 생존) ↔ **영어형만 산다**(90/90) · 🔴 그런데 **영어 축은 조준 안 함**(SERP 10/10이 영어 도구 업계) · 🔴 머리어 «Kalkulator Odds Poker»(null) → **«Kalkulator Poker»로 교체** · 🔴 `/id/solver` 카니발이 fr보다 심했다(주석이 09-05에 멈춰 있었다) |
| **ms** | ✅ 09-19 배포 | `docs/keyword-bank/ms-calculator.md` | 권역 = **말레이어권 단일**(ms-MY ≡ ms-SG ≡ ms-BN이 59시드 **전부 동일** — fr보다 더 붙어 있다 · 갈리는 축은 나라가 아니라 «어느 언어로 치는가») · Equity 탭(«Equity»/«Tangan lawan tangan») + quickRef 6표 + FAQ 18(ms 고유 = TDA 2024 **Rule 5-D** 「Bolehkah saya guna kalkulator poker di meja?」) + 메타 «Kalkulator Poker — Odds, Equity, ICM & Pot Odds». 🔴 **말레이어 도구 어휘가 id보다 더 죽어 있다**(22구 전멸 · `kalkulator poker`가 4조합 모두 0건 · 볼륨 **null** — id는 10이라도 있었다) ↔ 영어 `poker odds calculator`·`poker calculator` 각 **90** · 🔴 그래도 영어는 조준 안 함(SERP **20/20** 글로벌 업계) · 말레이어 SERP는 비었다(**#1이 개인 GitHub Pages** + 3/8 의도 불일치) · 🔴 머리어 «Kalkulator odds poker» → **«Kalkulator Poker»**(Malaysia 재측정) · `percentGap` 없음(1,599 : 0) |
| **hi** | ✅ 09-19 배포(`4a6842f0`) | `docs/keyword-bank/hi-calculator.md` | 권역 = 인도 단일 · Equity 탭(«Equity»/«हैंड बनाम हैंड») + quickRef 6표 + FAQ 18(hi 고유 = TDA 2024 Rule 5) + 메타 «Poker Odds Calculator — equity, pot odds और ICM». 🔴 **머리어를 영어로 «유지»한 유일한 로케일** — 힌디어 도구구는 전부 볼륨 null이고 자동완성이 **영어로 치환**돼 돌아오는데(id·ms의 «0건»과 다른 세 번째 형태), 인구 14억에서 `पोकर`는 880이라 «해상도 아래»로 설명되지 않는다 → 2026-09-16 사장님 지시를 실측이 **확인**. 🔴 힌디어 SERP는 **유기 9개 중 5개가 translate.google.com**(최강 공백 신호)이지만 그 자리엔 **수요가 없다** — 공백은 본문이 힌디어인 것으로 먹는다 · `percentGap` 없음(1,611 : 0) · `numberLocale: en-US`(लाख 묶음 0건) |

> ✅ **계산기 로케일 트랙 종료 — 11/11**(en·ja·zh·zh-hant·es·pt·de·fr·id·ms·hi). ko는 별도 클라이언트라 후순위(§0 ko 행).
> 🔴 **§3-I 미재조준 로케일은 이제 없다.** 게이트 `check:calc-parity`의 G항 «미검사» 로케일도 없다(hi가 quickRef를 채웠다).
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
- 🪶 **quickRef 화살표 헤더(«Flop → River») 3줄 꺾임은 2026-09-19 조판 회차가 해소했다**(§5 말미 ✅ 절). 「보기 나쁘다」를 만나면 **먼저 EN과 대조**하라는 교훈은 그대로다 — 이 건도 de 회귀가 아니라 EN 동형이었다.
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

### 3-K. id 회차가 남긴 것 (09-19 · 다음 로케일이 그대로 쓴다)

- 🔴 **«자국어 도구 명사가 통째로 죽어 있는» 로케일이 있다.** de·fr는 «영문이 크냐 자국어가 크냐»의 문제였지만 id는
  **«kalkulator + X»가 자동완성에서 전멸**이다(52시드 · `kalkulator poker`까지 0건 · 볼륨도 그것만 10, 나머지는 null).
  → **자동완성 0건은 «그 말이 시장에 없다»는 뜻이지 «측정 실패»가 아니다.** 시드를 인니어/영어 두 벌로 돌려야 이게 보인다(hl=id·en × gl=ID).
- 🔴 **«영어형이 더 크다»가 «영어형을 조준하라»는 뜻이 아니다.** id는 영어 축이 자국어의 9배(90 : 10)인데도 **안 조준했다** —
  근거는 볼륨이 아니라 **SERP 구성**이다: 영어 쿼리 top10이 **10/10 영어 도구 업계**(pokerlistings·omnicalculator·natural8·splitsuit)라
  단기 승산 0이고, 자국어 쿼리는 **8개 중 3개가 `translate.google.com`**(구글이 원문이 없어 기계번역으로 때운다) = 무주공산이다.
  **de(영문 2.3배 → 합성어로 둘 다 먹음)와 정반대의 처방이 나온 이유가 이것이다 — 볼륨 비(比)가 아니라 «그 SERP에서 이길 수 있나»를 봐라.**
  🪶 `translate.google.com`이 랭크에 있으면 그 자리는 비어 있다는 신호다(id 솔버 09-04가 같은 신호로 판정했다 · 두 번째 실증).
- 🔴 **오염은 «개발자 검색»으로도 온다** — id `push fold` 단독이 **git «push folder to github»** 지배다. 약어·업종 오염(es=IMC · pt=ICMS ·
  de=스포츠베팅/햄 · fr=BMW/병원)에 이어 **기술 커뮤니티가 큰 나라의 새 갈래**다. `cara menghitung outs` → 10/10 «outstanding»(회계) ·
  `kalkulator outs` → «outsourcing»도 같은 결. 🔴 `rumus poker` 390은 **«rumus poker jitu»(도박 필승법)** — 시드로도 쓰지 마라.
- 🔴 **«주석이 09-XX에 멈춰 있는 것»이 도구→도구 카니발의 실제 원인이었다.** fr는 솔버 FAQ가 머리어를 «흡수»한 경우였지만,
  id는 `/id/solver`의 주석 두 자리가 **「id에는 도구 라우트가 없다」(09-05)** 로 굳어 있어서 09-17에 `/id/calculator`가 생긴 뒤에도
  `PICK_TOOL`이 outs·pot odds·equity 의도를 **블로그로** 보내고 있었다. → **다음 로케일은 `app/<loc>/solver/`를 grep할 때
  «흡수한 FAQ»만 보지 말고 «라우트가 없다»류 주석도 같이 찾아라**(한 파일 안에 두 자리였고, 하나만 고쳤다가 2차 교열이 잡았다).
- 🔴 **2차 교열이 «1차 수정이 만든 새 결함»을 16건 중 9건 잡았다 — fr(8건)에 이은 두 번째 실증.** 이 단계를 빼면 안 된다.
  특히 **1차 렌즈의 지적을 «그대로 반영하면» 반대쪽 끝이 열린다**: 딜러 렌즈가 「폴백이 72o를 CO에서 오픈하라고 읽힌다」고 해서
  2분기(suited/연결 → 오픈 / 나머지 → 폴드)로 고쳤더니 **표 밖인 A9o·K9o·Q9o가 «어느 포지션에서도 fold»**가 됐다(3분기로 재수정).
  **고치기 전에 `HAND_TABLE`(`calculator-tool.tsx:137`)에 무엇이 있는지부터 세라** — 폴백은 표 밖 **122개 전부**를 받는다.
- 🔴 **«서열»은 고친 자리가 아니라 형제 항목에서 깨진다.** 109s·98s·55·65s·A10s를 고쳤더니 **87s만 «raise first in»이 없어
  더 약한 76s보다 좁아졌다**(티어 4 내부 역전). 스타팅 핸드를 손대면 **47개를 티어 순으로 훑어 조건이 단조인지** 확인하라.
- 🔴 **역어는 코퍼스에서 «그 뜻으로 쓰이는지»까지 세라** — id에서 raise를 «kenaikan»으로 옮겼는데, 코퍼스 `kenaikan` 6건이
  **전부 «증가»**(EV 상승·EQR 상승)이고 액션 raise 용례가 **0**이었다(정본 = `call raise` 12 · `call sebuah raise` 7 · `meng-call` 15).
  «있다/없다»가 아니라 **«그 뜻으로 있나»**다(메모리 `absence-may-be-the-standard`의 짝 — pemecah=solver 0 선례와 같은 결).
  같은 회차에 **`pemanggil`(caller 92 : 0) · `berhand`(영어+id 혼종 접두사 0건) · `antar-` 띄어쓰기(PUEBI 위반)**도 나왔다.
- 🔴 **관용구는 «형제 로케일이 어떻게 풀었는지»를 먼저 봐라** — EN «once the math clicks»를 id만 축어(«matematikanya klik»)로 옮겼는데
  인니어 `klik`은 **마우스 클릭뿐**이다. fr·de·es는 셋 다 관용구를 풀어 썼다. **한 로케일만 축어면 그게 신호다.**
- 🔴 **내 주석 5곳이 사실과 달랐다(fr §3-J 🪶의 재발)** — 「EN 09-17 정정」(EN은 **미정정**) · 「13항」(실계수 **9**) ·
  §5-A에 **없는** 코퍼스 수치 3개를 §5-A 출처로 인용(§5-A는 **문장 수**, 내가 쓴 건 raw 출현수 — **척도가 다르다**) ·
  breadcrumb를 «같이 바꾼 자리»로 적음(바뀐 적 없다) · 「셋의 목적지를 바꿨다」(2 재조준 + 1 신설).
  **주석을 렌즈 대상에 넣어라 — 교열 렌즈가 이 5건을 전부 잡았다.**
- 🪶 **질문 어형은 «PAA가 준 것»과 «쓸 수 있는 것»이 다르다** — id PAA는 「X itu apa?」·「Apa itu X?」를 주는데 **정의형 금지 규율이
  그 어형을 통째로 배제한다.** 실제로 쓴 건 「Bagaimana cara …?」·「Berapa …?」·「Seberapa …?」·「Apakah …?」다
  (가부 의문은 `Apakah`로 표시 — 코퍼스 173 : `Bolehkah` 0). **뱅크에 «PAA 어형»과 «채택 어형»을 따로 적어라.**
- 🪶 **id 조판은 fr의 반대다** — 소수 쉼표·천단위 점은 같지만 **`%` 앞 공백이 없다**(`35,4%` · `id-posting-reference.md` §5-A C).
  라틴 로케일이라고 fr 규칙을 복사하지 마라.
- 🪶 **코퍼스가 두꺼우면(55편) 링크는 전건 실존한다** — EN 9슬러그가 id에 전부 있어 fr(6편)식 «비우기»가 불필요했다.
  그래도 `check:calc-parity` F항을 렌즈 **전에** 돌렸다(47 → 0).

### 3-L. ms 회차가 남긴 것 (09-19 · 다음 로케일이 그대로 쓴다)

- 🔴 **«볼륨 null»은 «수요 0»이 아니라 «측정 해상도 아래»일 수 있다.** Google Ads는 월 10 미만을 null로 준다.
  말레이시아 인구 **3,200만** ↔ 인도네시아 **2.8억**(≈9배)이라 id의 «10»은 ms에서 구조적으로 null로 나온다.
  → **null을 보고 «그 언어를 버려라»로 가지 마라.** 판별 축 둘: ① **같은 언어의 다른 축이 사는가**
  (ms는 `texas holdem` 720 · `poker malaysia` 140 — 시장은 있고 도구만 영어로 친다) ② **그 언어 SERP가 비었는가**(아래).
  둘 다 예면 조준한다. 🪶 id(§3-K ②)와 **결론은 같고 근거가 다르다** — 근거를 베끼지 말고 다시 세워라.
- 🔴 **«공백 SERP»의 두 번째 신호형**: id는 `translate.google.com`이 3/8이었다. ms는 **#1이 개인 GitHub Pages 습작**
  (`b-inary.github.io`)이고 8개 중 3개가 **의도 불일치**(wsop 상금분배 · easysevens 정산로그 · pokercalculator.app 칩정산)였다.
  → **일반화: 「#1이 기관·업계가 아니고 절반이 의도 불일치면 그 자리는 비어 있다.」** 구글이 그 언어로 내줄 게 없어 아무거나 채운 것이다.
- 🔴 **구글의 `hl=<언어>` 자동완성 DB가 «인접 언어»로 오염돼 있을 수 있다** — `hl=ms`가 「cara main poker **gimana**」·
  「**remi**」·「**kartu**」(전부 인도네시아어)를 준다. → **자동완성으로 언어를 판정할 때 인접어 오염을 먼저 걸러라.**
  대조군은 우리 코퍼스다(ms는 kad 459 : kartu 0 · boleh 409 : bisa 0 · kejohanan 33 : turnamen 0으로 깨끗했다).
  🪶 이 위험이 큰 짝: **ms↔id · zh↔zh-hant · es↔pt**. 그 짝의 로케일 회차는 **선례 사전을 베끼면 인접어가 새어 든다.**
- 🔴 **§3-K ⑤(역어는 «그 뜻으로 쓰이는지»까지 세라)가 ms에서 뒤집혔다** — id는 `kenaikan` 6/6이 «증가»라 raise 역어로 못 썼지만,
  **ms는 4건 중 2건이 진짜 raise다**(「kenaikan minimum」·「kenaikan $4 di atas blind $2」). **로케일 상수가 아니다 — 매번 센다.**
- 🔴 **브리프 §5 id ⓐ의 근거가 과했다(이 회차가 정정)**: 「EP에는 앞선 레이즈가 있을 수 없다」는 **UTG에만 참**이다.
  MP·EP+1은 UTG 레이즈를 마주할 수 있다. → 처방은 «call을 없애는 것»이 아니라 **«무엇에 대한 call인지 명시 + 오픈 림프 금지»**다.
  선례 **7로케일(ja·zh·zh-hant·es·pt·fr·id)이 전부 그렇게 풀었고**(de만 아직 옛 문안), ms도 같은 형으로 되돌렸다.
  🪶 **정정(hi 회차 09-19)**: ms를 포함하면 **8로케일**이다(ja·zh·zh-hant·es·pt·fr·id·ms · de만 예외) — 교열 렌즈가 축어로 셌다.
  🪶 내가 처음에 「raise atau fold」로 썼다가 **자가검사에서 되돌렸다** — 「선례 N개가 같은 형인데 나만 다르면 그게 신호다」(§3-K ⑥ 동형).
- 🔴 **폴백 3분기를 옮길 때 «한정어»를 잃지 마라.** id의 3분기를 ms로 옮기며 「Suited」를 한정어 없이 써서
  **72s·J2s·92s까지 CO/BTN 오픈 허가**가 됐고(수티드 54개 전부), id에 있던 **first-in 조건**(「kalau semua fold ke Anda」)도 빠졌다.
  → 전파할 땐 **원문의 한정어·조건절을 토큰 단위로 대조**하라.
  🔴 **그리고 예시 카드가 «정말 표 밖인지» 세라** — id·ms 둘 다 2분기 예시를 `K9o`로 적었는데 K9o는 ace-offsuit도 브로드웨이도 아니다.
  실측하면 **오프수트 브로드웨이 10개가 전부 HAND_TABLE 안**이라 그 분기는 **ace-offsuit(A9o~A2o)만 남는다**(id도 정정 대상).
- 🪶 **조판 실측에서 마크업을 먼저 걸러라** — ms 코퍼스의 `[0-9],[0-9]` 335건은 전부 **rgba CSS 색상**이었다(`rgba(255,248,210,0.10)`).
  안 거르면 «소수 콤마 로케일»로 오판해 `numberLocale`을 틀리게 잡는다.
- 🪶 **새 오염 갈래(말레이시아·싱가포르 고유)**: `spr calculator` → **`spr cpf calculator`**(싱가포르 영주권 CPF 납입).
  `peraturan 4 dan 2`(rule of 4 and 2 직역)는 법령 노이즈 — de의 «Faustregel» 교훈과 같은 결이되 **ms는 영어형이 답**이다.
- 🪶 **게이트 주석도 낡는다** — `calc-dict-parity.ts` G항 주석이 「ms·hi는 판정하지 않는다」로 굳어 있었다.
  ms가 quickRef를 채운 순간 판정 대상이 됐으므로(186 : 0) 같이 고쳤다(셀프테스트 20/20 유지). **다음 로케일은 hi 차례에 같은 줄을 본다.**
- 🪶 **ms 코퍼스는 21편인데 EN 9슬러그가 «0개»가 아니라 «1개» 실재한다**(`holdem-tournament-vs-cash-game`).
  그래서 related 8은 전부 자국 코퍼스에서 골랐고 quickRef는 ①②만 비웠다(fr는 6편이라 전부 비웠다).
  🔴 **부작용**: 그 한 슬러그가 **한 페이지에서 4자리**(pushfold · deal.link · quickRef⑥ · related[0])에 쓰인다.
  EN은 그 네 자리에 서로 다른 4슬러그를 쓴다 — **ms에 대체 글이 생기면 우선 분산 대상**이다.

### 3-M. hi 회차가 남긴 것 (09-19 · **계산기 로케일 트랙의 마지막 회차**)

- 🔴 **«볼륨 null»의 해석은 «같은 표에서 잡힌 자국어 최대값»과 «인구»를 같이 봐야 한다** — §3-L ①의 다음 단계다.
  ms는 인구 3,200만이라 «10 미만 → null»이 구조적이었지만, **hi는 인구 14억에서 데바나가리 `पोकर`가 880으로 잡히는데도**
  도구구(`पोकर कैलकुलेटर` 등)가 전부 null이다. → **해상도가 아니라 부재다.**
  🔴 **일반화**: 「null을 보고 «조준하라»로 가기 전에, **그 언어의 문자로 잡히는 최대 볼륨**을 찾아라.
  그게 자국어 문자로 크게 잡히는데 도구축만 null이면 그건 시장 사실이지 측정 실패가 아니다.」
  → 그래서 hi는 **머리어를 영어로 «유지»한 유일한 로케일**이다(id·ms는 자국어로 «교체»했다).

- 🔴 **«공백 SERP»의 세 번째 신호형 — 자동완성이 «영어로 치환»해서 돌아온다.**
  id는 자동완성 **0건**, ms도 **0건**이었지만 hi는 **0건이 아니다**: `पोकर संभावना कैलकुलेटर` → `poker probability calculator`(5개 전부 영어) ·
  `पोकर इक्विटी कैलकुलेटर` → 영어 10개. **구글이 그 언어의 쿼리 공간을 안 들고 있어서 라틴으로 대체하는 것**이다.
  🔴 **비라틴 문자 로케일(hi·ar·th·he 등)에서는 «0건»이 아니라 «라틴으로 치환»이 공백의 신호다** — 0건만 찾으면 놓친다.

- 🔴 **«SERP가 비었다»와 «제목을 자국어로 바꿔라»는 다른 명제다.** hi의 힌디어 SERP는 **유기 9개 중 5개가
  `translate.google.com`**(id의 3/8보다 강한, 지금까지 가장 뚜렷한 공백)인데도 제목은 영어를 유지했다 —
  **그 자리에 검색량이 없기 때문**이다. 공백 + 수요 없음 = 제목을 바꿔 얻을 게 없고, **본문이 그 언어 원문인 것만으로 충분하다**
  (경쟁자가 전부 기계번역이라 그것만으로 차별점이 된다). ms는 «공백 + 수요 불명»이라 제목까지 갔다 — **판정 축이 다르다.**

- 🔴 **§3-L ⑤(폴백 3분기)의 «ms 정정» 서술이 과했다 — 이 회차가 원문으로 반증했다.**
  `app/ms/calculator/dict.ts:166`은 지금도 `A9o, A5o, K9o, Q9o`이고 «A9o, A7o, A5o로 고쳤다»는 **사실이 아니다**.
  다만 ms의 라벨은 「Ace offsuit **atau dua kad tinggi**」라 K9o가 **라벨상 정합**이므로 **ms는 오류가 아니다**.
  실제 오류는 **id뿐**이다(「dua kartu **broadway** (K9o)」 — 9는 브로드웨이가 아니다 · id 정정 대상).
  🪶 **교훈**: 「예시 카드만 보고 판정하지 마라 — **분기 «라벨»이 그 카드를 덮는지** 먼저 읽어라.」

- 🔴 **폴백 수정은 «양쪽 끝»을 동시에 봐야 한다 — 이 회차에서 세 번 뒤집혔다.**
  ① 팔을 «ace-offsuit만»으로 좁혔더니 **K9o·Q9o·J9o·10-9o가 전 포지션 폴드**가 됐다(딜러 렌즈)
  ② 「두 장 다 9 이상」으로 되돌렸더니 주석 열거에 **98o를 잘못 넣었다**(8이라 조건 밖 · 교열 렌즈)
  ③ 1분기 겹침을 «बाक़ी»로 풀었더니 **32s·42s까지 CO 오픈**으로 확정됐다(2차 교열) → 연결자 갈래에 **«작은 쪽 카드 3 이상»** 바닥을 박아 해소.
  🔴 **처방**: 폴백 문안을 고칠 때마다 **표 밖 122개를 스크립트로 재분류해 각 분기가 잡는 집합을 세라.** 눈으로는 세 번 다 놓쳤다.

- 🪶 **2차 교열의 네 번째 실증 — 이번엔 7건**(fr 8 · id 16중 9 · ms 1). 그중 **4건이 «1차 렌즈 반영이 만든» 새 결함**이고,
  한 건은 «교열 렌즈가 앵커 중복을 없애라»고 해서 고쳤더니 **linkLead와 앵커가 한 문장 안에서 축어 중복**이 된 자리다.
  **«중복 제거» 지적을 반영할 땐 반영 후 그 문장을 통째로 다시 읽어라.**

- 🪶 **표기 정본은 «코퍼스»가 아니라 «그 화면이 실제로 찍는 문자열»일 수 있다** — `T9o`로 적었는데
  `displayHandName()`이 `10-9o`로 찍어 독자가 같은 핸드를 못 알아본다. **핸드 코드를 사전에 손으로 쓸 땐 렌더 함수를 먼저 확인하라.**

- 🪶 **인도 고유 오염 갈래**: `आईसीएम कैलकुलेटर` → **`lcm कैलकुलेटर`**(최소공배수 · 수학) · `spr calculator` → **`sip calculator`**
  (인도 금융 Systematic Investment Plan) · `poker hindi` → «hindi meaning in english/malayalam» = **사전 의도**(시드로 쓰지 마라).

- 🪶 **DFS SERP는 힌디어에서 `language_code: "hi"`를 거부한다**(40101 Internal SE Server Error) — **`language_name: "Hindi"`**로는 된다.
  메모리 「«측정 불가»는 벤더가 아니라 엔드포인트 단위로 적어라」의 재확인이되, **이번엔 «필드 이름» 단위**다.

- 🪶 **`related` 8슬러그와 «EN 9슬러그»는 다른 집합이다** — hi는 전자가 **0/8**, 후자가 **1/9**(`holdem-tournament-vs-cash-game`)다.
  두 수를 섞어 적으면 주석이 틀린다(교열 렌즈가 내 주석에서 잡았다).

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

### 3-I. 🔴 미재조준 로케일(~~id~~ · ~~ms~~ · **hi**)이 **지금 들고 있는 구멍** (de 회차가 실측 · 09-18 · fr 09-18 · id 09-19 · **ms 09-19 해소**)

de 회차의 렌즈 2종이 「de 번역 문제」로 보고한 것들이 실은 **09-17 EN 경화가 로케일에 안 실린 것**이었다.
`app/*/calculator/dict.ts` 전수 grep으로 세어 보니 **es·ja·pt·zh·zh-hant는 개정본을 이미 실었고, de·fr·id·ms·hi 5개만 개정 전**이었다(de 09-18 · fr 09-18 · id 09-19 · **ms 09-19** 해소 → **남은 건 hi 하나**).
🔴 **각 로케일 회차는 사전을 새로 쓰기 전에 아래를 EN 정본과 먼저 대조하라** — 안 하면 「완료」로 닫히고 유해 조언이 남는다(메모리 `completion-count-the-copies-first`).

| 자리 | 개정 전(위험) | EN 정본 |
|---|---|---|
| `starting.unknownDesc`/`unknownAction` | 「매우 약한 핸드 / 대개 폴드」 — 🔴 **사실 오류**(K9s·QTs·J9s 등이 전부 이 폴백에 떨어진다) | 「Not in the core opening chart」 / 「Cutoff/button only, and only when folded to you」 |
| `spr.zones.mid.actions[1][2]` | 「감으로 플레이」·「리스크 대 이득을 재라」 — 🔴 **D유형**(계산기가 줄 수 있는 최악의 조언) | 「One or two streets, then pot control」 / 「Semi-bluff with fold equity; give up without it」 |
| `spr.zones.low.desc` | EN 끝문장 **통째 누락** → 젖은 보드에서도 TPTK 스택오프 조언이 된다 | 「On paired, three-flush or three-straight boards … one pair is still one pair.」 |
| `starting.hands` **13항** (1010·AJs·A10s·KJs·Q10s·J10s·77·66·55·44·33·22·76s) | 「얼리에서 콜」 = 오픈 림프 권유. 셋마이닝 정량 기준(~15×)·first-in 레이즈도 소실<br>✅ **2026-09-20 해소** — EN·de의 `88`·`77`·`KQo`를 정정해 **12로케일 + ko 전부 «레이즈에 대한 콜 + 오픈 림프 금지» 형**이 됐다(경위 = WORKLOG 09-20). 아래 「EN 정본」 칸이 이제 실제 EN이다. ① **«13항»은 핸드 목록 길이이지 결함 자리 수가 아니다** — id 09-17판 실계수는 「call di posisi awal」 8 + 「call/fold di posisi awal」 1 = **9자리**. **로케일마다 실계수를 다시 세라** | 「— never limp」 / 「fold from EP」 / 「~15× the call behind」 / 「raise first in」 |
| `pot.potSize`·`sliderFlush`·`outs.presets[1][5]`·`icm.diffPlusNote`·`spr.effectiveStack`·`m.zones.dead` | 딜러 렌즈 12항 전반 | §5 마지막 줄 |
| `page.tsx` `twitter.images`·`openGraph.images` | 없음 → 카드가 빈 채로 나간다 | 두 자리 다 `/opengraph.jpg` |
| `page.tsx` TITLE/DESCRIPTION | 하드코딩 → 클라이언트 `<SEO>`가 dict로 덮어써서 갈리면 조용히 dict가 이긴다 | `${DICT.seo.title} | HoldemMaster` 파생 |
| `seo.description` 길이 | 🔴 **게이트 사각지대** — `check:meta-length`는 `lib/posts-*`만 순회하고 계산기 랜딩을 **안 본다**. de는 171자로 §11-7을 어긴 채 빌드·hreflang·meta 게이트를 전부 통과했다 | ≤160(en 158 · es 155 · pt 154) |

🪶 **게이트 후속 후보**: `check:calc-parity`에 «description ≤160» 한 줄을 넣으면 이 사각지대가 닫힌다(현재는 값·개수·플레이스홀더·인용부호만 본다).

## 5. EN 후속(미반영 · 다음 queue/헤드 회차 재료)

### ✅ 2026-09-20 (3) 해소 — OG 카드 + 사전 부채 회차(본체 · 헤드 Opus)

닫힌 것: **OG/트위터 `images` 누락** · **`x-default` 없음** · **오버카드 «not on board»**(EN·es·ja·zh·zh-hant
5개 = 이로써 9/9 로케일 + EN 완료) · **«times-2» 방향**(EN·ja·zh·zh-hant) · **EN `A3s` 거짓 문구** ·
**EN `outs.exactNote` «The big number»** · **`<SEO>` og:title 덮어쓰기**.

🔴 **마지막 항목은 5곳이 아니라 20/20이었다** — 감사 정본 = `docs/og-meta-audit-2026-09-20.md`.
원인이 둘이었다: ① `/ranking`·`/glossary`·`/hands`·`/strategy` 등 **10개 라우트는 서버 og가 아예 없어
«홈 카드»가 나가고 있었다**(2026-08-02에 title·canonical만 고치고 og 축은 안 고쳤다) ② 계산기 12곳은
서버의 **의도된 카드용 제목**을 클라이언트가 페이지 제목으로 덮었다.

다음 회차가 알아야 할 것:

- 🔴 **og는 서버 전용 영역이다.** 소셜 스크래퍼는 JS를 안 돌려 클라이언트 갱신을 **영원히 못 본다**.
  `components/seo.tsx`에서 og 갱신을 **제거**했다 — 되살리지 마라(그 주석에 반증 조건을 적어 뒀다).
- 🔴 **Next metadata는 얕은 병합이라 함정이 «둘»이다**: 안 적으면 루트 홈 카드가 나가고,
  적으면 `images`가 상속 안 돼 카드가 빈다. → **`lib/page-metadata.ts`의 `socialMeta()`를 써라.**
- 🔴 **부모 layout도 샌다** — `/blog/roadmap`이 `app/blog/layout.tsx`의 블로그 카드를 물려받고 있었다.
  새 하위 라우트를 만들 때 `socialMeta()`를 빼먹으면 같은 일이 난다.
- 🔴 **제목·설명을 상수로 올리면 `check:seo-sync`가 오탐했다**(8건) — 게이트가 리터럴만 읽었다.
  **게이트를 고쳤다**(상수 해석 + 🔴 **상수가 jsonLd 리터럴보다 우선** — 첫 수정에서 `/ranking`이
  jsonLd 설명을 물고 오는 오탐이 실제로 났다). 셀프테스트 14 → **20/20**.
- 🪶 **결함은 JS를 꺼야 보였다** — 브라우저로 열면 클라이언트가 «고쳐» 놔서 정상으로 보인다.
  메타를 의심할 땐 **JS 끈 컨텍스트로 서버 HTML을 직접 읽어라.**


### ✅ 2026-09-20 해소 — 폴백 티어 + 오픈 림프 회차(`3db98e3f` · WORKLOG 09-20 · 12로케일 + **ko**)

닫힌 것(아래 목록에서 지웠다): **EN·de의 오픈 림프 셋**(88·77·KQo) · **`unknownAction` 상·하한 부재**(표 밖 122핸드) ·
**`unknownDesc`의 Tier 5 단서**(코드가 티어를 계산하게 돼 단서가 오히려 거짓이 됐다 → id·ms·hi에서 뺐다) ·
**tier 5 고정 코드** · **§3-I 「id·ms 초안의 두 장의 브로드웨이 = 공집합」**(EN을 단일 조건으로 다시 써 소멸).

다음 로케일·회차가 알아야 할 것:

- 🔴 **폴백 규칙의 근거는 «차트 감»이 아니라 콤보 산술이다.** 단 **산술이 정하는 것은 «개수»뿐이다**
  (🔴 2026-09-21 MA-159 ②로 아래 두 줄을 정정했다 — 이전 판은 총량을 구성의 증명으로 썼다).
  전제 조건 = **9맥스 · ~100bb · 버튼 앞 전원 폴드**, 그리고 **모델 선택 둘**(「~50%」에서 따라 나오는
  결론이 아니다): ① 페어 13개 전부 78콤보 ② 수티드 78개 전부 312콤보. 그 둘을 두면 1,326의 50% = 663에서
  오프수트 몫이 273콤보인데, 오프수트는 타입당 12콤보라 **273은 도달 불가**다 — 22타입 264(합 **654 = 49.32%**)와
  23타입 276(합 666 = 50.23%)이 663을 양쪽에서 끼운다. 우리는 아래쪽 22타입을 쓴다
  (에이스 12 + K9o+ 4 + Q9o+ 3 + J9o+ 2 + 10-9o). 🔴 **«50%»라고 적지 마라 — 49.32%다.**
- 🔴 **«58%+»는 철회했다**(2026-09-21 MA-159 ③ · **재현 불가**였다). 딜러 렌즈의 「K5o·Q8o·J8o·98o까지
  넓혀라」를 ⓐ **딱 네 타입 추가**로 읽으면 26타입 = 702 = **52.94%** ⓑ **범위**(K5o+/Q8o+/J8o+/98o)로
  읽으면 29타입 = 738 = **55.66%**다. 58%가 되려면 오프수트 **31.7타입**이 필요한데 ⓑ도 29타입이라
  **어느 읽기로도 58%에 닿지 않는다.** → **확장은 여전히 기각 상태로 두되, 근거는 «58% 초과»가 아니라
  «우리는 49.32%로 보수적인 쪽을 잡는다»이다.** 넓힐지 말지는 산술이 아니라 **사장님 판단 자리**
  (`docs/en-first-queue.md` §2-H H-3 · 23번째 타입이 정확히 `K8o`라는 것도 거기).
  🔴 **렌즈가 첨부한 코드는 자기 주장과도 어긋났다**(`hi.rank>=8` 조건이 98o를 오히려 뺀다) —
  **렌즈가 준 코드는 돌려 보고 받아라**(메모리 「도구 출력 ≠ 원문」).
- 🔴 **수티드에 «작은 쪽» 바닥을 두지 마라.** hi·ms가 쓴 「둘째 카드 6 이상 + connector 3 이상」 이중 조건은
  ① **43s·53s·64s·75s를 두 절에 동시에** 걸리게 했고(hi 자기모순 · 09-20 발견) ② K2s·Q2s·J2s를 **버튼에서 폴드**시켰다.
  수티드 312콤보는 BTN 레인지에 통째로 들어간다 → **버튼은 수티드 전부, 제한은 CO 문구에만.**
- 🔴 **코드가 티어를 계산하면 «표 안»과의 역전을 반드시 다시 세라.** K9o가 T4가 되자 표의 K10o(T5)와 역전됐다
  → K10o·Q10o·J10o를 T4로 올려 해소. 🪶 **남은 역전 = `44`(T5) ↔ `43s`(T4)** — 페어 승격은 `summary` 5행
  (「44–22 weak offsuit hands」)을 13자리에서 같이 고쳐야 해 이번엔 안 건드렸다.
- 🔴 **게이트가 원리상 못 보는 자리가 또 있었다**: 문구가 길어지자 390px에서 「추천 액션:」 라벨이 **한 글자씩 세로로 쌓였다.**
  `check:calc-parity`·빌드 게이트 전부 초록이었고 **캡처가 유일한 검출 경로**였다. 사전 문자열을 크게 늘리면 **반드시 390px를 찍어라.**
- 🔴 **ko(`app/calculator/calculator-client.tsx`)는 별도 클라이언트라 09-17 경화를 통째로 못 받고 있었다.**
  이번에 폴백·림프 9자리·방향 역전 4자리를 고쳤지만 **`spr.zones`·`outs`·`icm` 등 나머지 탭은 아직 09-17 이전이다** —
  ko 전수 대조는 별도 회차 몫(§0 ko 행).

*(OG/트위터 `images` 누락 · `x-default` 없음 — 둘 다 2026-09-20 (3) 해소. 아래 ✅ 블록)*
- 🪶 M 존 라벨 «1–5 / 6–9 / 10–19»(코드 `M_ZONES`)는 소수 경계(5.5 → 레드)와 안 맞는다 — 코드·표 동시 수정 대상(전 로케일).
- 🪶 M 탭은 플레이어 수를 앤티에만 쓰고 Effective M을 존에 적용하지 않는다(표 intro에 안내만) — 기능 개선 후보.
- 🪶 `holdem-bubble`(EN)이 `/en/calculator`를 3번 링크하는데 역링크 없음 · 「rule of 4 and 2」가 EN 4곳에 분산(140/mo).
- 🪶 스타팅 핸드 표 미등재 수티드 커넥터(97s·86s…)·K9s·Q9s는 폴백 문구로만 처리 — 항목 보강 후보.
- 🪶 **EN `icmGuide.bubble.keyPoint.b3`의 조건절 위치**: EN은 b3 끝에 「— unless the blinds are about to eat it」가 붙어 뒤의 「to protect that survival value」와 어긋나게 읽힌다(zh 2차 교열 렌즈 09-17). zh·ja처럼 조건절을 `text`로 앞당기고 목적절을 대시로 분리하는 구조를 EN에 회灌.
- 🪶 EN `quickRef[5].intro` 「the calculator above shows raw M」 — 도구가 9개라 모호. zh는 「“锦标赛 M”标签页」로 지목했다. EN도 탭 이름으로.
- 🟠 **클라이언트 `<SEO>`가 `og:title`을 서버 `openGraph.title`과 다른 값(fullTitle)으로 덮어쓴다** — en·ja·zh 공통(교열 렌즈 09-17). `check:seo-sync`는 이 축을 안 본다. 로케일 공통 판정 필요(서버 og:title을 fullTitle로 맞추거나 클라이언트가 og를 안 건드리게).
- 🪶 `icm.introRest` 선행 공백 — EN 타입 주석 「keep the leading space」는 영어용. CJK 로케일에서 「）」와 「是」 사이 공백이 렌더된다(zh는 뺐고 ja는 남음). 렌더러 쪽 처방(`sep()` 동형)으로 통일 후보.
*(«times-2» 방향 — 2026-09-20 (3)에 EN·ja·zh·zh-hant 반영 완료. 아래 ✅ 블록)*
- 🪶 **EN FAQ «compare the average against your value if you just fold»** — 승/버스트 단순 평균은 승률 50% 가정이 된다(es 네이티브 렌즈). es는 «승률로 가중한 평균». EN·타 로케일 회灌 후보.
- 🪶 EN `pot.orHigher` «above this…» ↔ de·fr·pt·id·es(옛)·ms «or more» — 정확히 같으면 EV 0(verdict.even)과 어긋난다. es는 «— con más equity, el call es rentable». 남은 로케일 회차에서 같이.
- 🪶 EN `starting.hands` 87s·65s·54s «Call LP» · 33/22 «Multiway pots…» — «레이즈에 콜»이 명시 안 돼 림프로 읽힌다(es 네이티브 렌즈). es만 «pagar una subida»로 명시.
*(오버카드 정의 — 2026-09-20 (3)에 EN·es·ja·zh·zh-hant 5개 전부 해소. 아래 ✅ 블록)*
- 🪶 **EN deal.summary «pay everyone the next payout first»** — «next payout»이 «다음 상금 점프»로 오독된다(pt 네이티브 렌즈). pt는 «o próximo prêmio a ser pago (aqui, os $300 do 4º lugar)». EN·타 로케일 회灌 후보.
- 🪶 EN 66·44 «~15× the call behind» — 누구의 스택인지(양쪽 유효 스택) 명시 없음. pt는 «você e quem aumentou tiverem atrás pelo menos ~15×».
- 로케일 회차 공통: 딜러 렌즈가 고친 EN 도구 문안 12항(Effective stack · 팟 라벨 · SPR low · 데드존 · diffPlusNote · 스타팅 12핸드 · unknown 폴백 · 슬라이더 19.6 · 프리셋 «Flush draw» · 오버카드 desc · 가이드 카드 · introRest)은 **각 로케일 사전에도 그대로 남아 있다** — 로케일 회차에서 같이 정정.


### fr 회차(09-18)가 §5에 더한 것

- 🟠 **EN FAQ 「open and re-shove wider as the aggressor」에 스택 구분이 없다** — 중간 스택이 리슈브를 넓히면 ICM상 손해다(fr 딜러 렌즈).
- 🔴 **«완료 전에 사본을 세라» — 두 명제가 로케일마다 갈린 채다**(fr 교열 렌즈 전수 실측 09-18):
  | 명제 | en | es | pt | de | fr | ja · zh · zh-hant |
  |---|---|---|---|---|---|---|
  | «×2는 outs가 늘수록 더 모자란다»(9 outs 1,6 · 15 outs 2,6) | **옛 문장(1–2 points)** | 최신 | 최신 | 최신 | 최신 | **미반영** |
  | deal.summary의 «next payout»에 값 못박기($300 = 4위) | **없음** | 없음 | 있음 | 있음 | 있음 | 없음 |
  🔴 첫 줄은 EN이 **사실 서술**로 틀리게 적어 둔 것이다 — EN을 안 고치면 다음 로케일이 **또 옛 문장을 번역한다**.
- 🪶 EN FAQ Q11 끝 절(「which is why the chip leader's ICM value sits below their chip share」)이 **Q14의 명제 전부**와 겹친다 · Q16의 save-and-chop 설명이 `icmGuide.deal.summary`와 거의 축어 중복(둘 다 EN 상속 · fr SEO·교열 렌즈 09-18).
- 🪶 EN `pushfold.cell`·`m.zones.red.action`의 «Push/Fold» ↔ «Push/fold» 대소문자가 EN 안에서 갈려 있다(로케일이 그대로 물려받는다).

### ✅ 2026-09-19 해소 — 조판 회차(`27c5503d` · WORKLOG 09-19 (2) · 로케일 회차 아님)

위 🟠🟠(동적 퍼센트의 `numberLocale` 무시)와 🪶(화살표 헤더 3줄 꺾임)를 **한 회차로 묶어 끝냈다.** 다음 로케일 회차가 알아야 할 것만 남긴다:

- **사전에 새 옵션 키 `percentGap`이 생겼다.** 도구가 계산해 찍는 퍼센트의 «%» 앞 공백을 정한다.
  🔴 **`numberLocale`에서 파생하지 마라** — ICU는 de-DE·es-ES·fr-FR에 NBSP를 넣지만 **코퍼스 실측은 정반대**다:
  숫자 뒤 «%»가 de **186 : 7**(그 7은 「Win %」류 **열 머리글**) · pt 188 · id 190 · en/ja/zh/zh-hant/es 전부 붙여 쓴다.
  **띄우는 로케일은 fr 하나**(195 : 0). 새 로케일은 **자기 코퍼스를 세고** 필요할 때만 넣는다(없으면 붙여 쓴다).
  🔴 넣을 땐 **고정공백(U+00A0)**이다 — 반각으로 뒀다가 390px 팟오즈에서 «23,1» / «%»로 꺾였다(캡처가 잡았다).
- **게이트 `check:calc-parity`에 G항**이 이 둘을 본다(사전 조판 ↔ `percentGap` 일치 · 반각 공백 금지 · 셀프테스트 20/20).
  표를 아직 안 채운 로케일은 «미검사»로 흘린다 — **ms·hi의 40건은 이 항이 아니라 §3-I 미재조준 부채다.**
- **화살표 헤더는 nowrap이 아니라 «화살표 + 고정공백 + 뒤 단어»로 묶었다**(`glueArrow`). 이유는 실측이다:
  nowrap으로 한 줄에 펴면 표가 **426 → 555px**로 넓어져 390px에서 보이는 열이 하나 줄어든다. 이 방식은 453px라 열 손실이 0이다.
  **CJK 헤더는 무영향**(화살표 둘레에 공백이 없다) — 그쪽 `nowrap` 분기가 계속 정본이다.
- 🪶 도구 본체의 수치는 이제 전부 `nd()`(소수)·`pf()`(퍼센트)를 지난다. 사전이 «%»를 들고 있는 자리(`needPot`·`verdict.*.body`)는 `nd()`다.
  🔴 CSS 길이(`width: ${x}%`)는 로케일화 대상이 **아니다**(주석으로 박아 뒀다).


### id 회차(09-19)가 §5에 더한 것

*(오버카드 정의 전파 — 2026-09-20 (3)에 남은 5개 완료 = 9/9 로케일 + EN. 아래 ✅ 블록)*
- 🪶 **EN `87s "Call LP"`만 «raise first in»이 없다** — 같은 티어의 76s·98s에는 있어 **더 강한 핸드가 더 좁다**(티어 내 역전).
  id는 98s와 동형으로 맞췄다. EN·타 로케일 회灌 후보.
- 🪶 **EN `55 "Call a single raise in LP"`에만 셋마이닝 스택 조건이 없다** — 66·44는 「~15× the call behind」를 요구한다.
  id는 66의 조건절을 승계시켰다. EN 회灌 후보.
- 🪶 **EN FAQ 「4 and 2 rule」의 «times-4» 서술은 정확하다**(「stays within about a point up to 9 outs」) — 🔴 **번역이 조이기 쉽다**:
  id 초안이 「meleset **kurang dari** satu poin」(1포인트 «미만»)으로 옮겼는데 9 outs 오차가 **정확히 1,0**이라 자기 예시에서 거짓이 됐다.
  **«about/이내»를 «미만»으로 옮기지 마라**(다음 로케일 공통 함정).
- 🪶 `<SEO>`의 **og:title 덮어쓰기**(§5 기존 항목)가 **id에서도 재확인**됐다 — 서버 `openGraph.title`은 «Kalkulator Poker — HoldemMaster»인데
  라이브 DOM은 fullTitle(제목+브랜드)이다. 이제 en·ja·zh·fr·id 5로케일에서 실측됐다 = **로케일 공통이 확정**이다.
- 🪶 **ms 전파 후보**: `components/intl-blog-post-client.tsx`의 `CALC_CTA_LABELS.ms`가 id가 09-19에 폐기한 바로 그 구
  «Kalkulator odds poker»를 들고 있다. 🔴 **id 근거를 그대로 옮기지 마라** — `location=Malaysia`로 **재측정**이 ms 회차 첫 과제다.

### ms 회차(09-19)가 §5에 더한 것

*(«times-2» ja·zh·zh-hant 미반영 — 2026-09-20 (3) 해소. 🔴 **번역이 «방향»을 뒤집기 쉬운 자리라는 경고는 유효하다**:
  규칙 18% < 실제 19.6% = 규칙이 «낮다». 새 로케일은 **부호를 검산하라**.)*
- 🪶 **EN `quickRef[1].note`의 «no longer a favorite»는 번역이 사실을 흔든다** — «favorite»는 «equity 50% 미만»이라는
  배당 용어인데 «최우선 선택»으로 옮기면 「AA가 이제 최선의 패가 아니다」라는 **거짓 명제**가 된다(49.2%는 나머지 5명 각 ~10% 대비 압도적 1위).
  ms는 «peluang … jatuh di bawah 50%»로 풀었다 — **전 로케일 grep 후보**.
- 🪶 **EN `pushfold`·`deal.link`·`quickRef[4]`·`quickRef[5]`·`related`가 가리키는 슬러그가 얇은 로케일에서 한 글로 수렴한다**
  (ms는 `holdem-tournament-vs-cash-game` 하나가 4자리). 게이트 F항은 «실존»만 보고 «수렴»은 안 본다 — **F항 후속 후보**.
- 🪶 **EN `starting.hands` 티어 내부 역전 2건 추가 실측**(ms 렌즈): ① `A10s "fold from EP unless passive"`가
  뒤 순서인 `KQs "Raise from most positions"`·`KJs "raise or fold from EP"`보다 **좁다** ②
  `K10o "Occasionally from BTN"` → `Q10o "BTN only"` → `J10o "Occasionally from BTN"`로 **가운데(더 약한) Q10o만 완화형**이다.
  둘 다 EN 상속이라 ms는 건드리지 않았다 — **EN 정정 후 전 로케일 전파** 후보.

### hi 회차(09-19)가 §5에 더한 것

- 🔴 **전 로케일 부채 발견 — 포스트가 `/hand-chart`(한국어 UI 도구 페이지)를 가리키는 자리가 «21로케일 29자리»다.**
  fr 미결 ②(`docs/`·핸드오프)는 **fr 고유가 아니었다.** 실측:
  ja·it·id·de 각 2 · ar·bn·fa·fil·fr·he·**hi**·ms·pl·ro·ru·sw·th·tr·uk·vi·zh-hant 각 1.
  대부분 `texas-holdem-rules-for-beginners`의 같은 문단이고, id·ja·de는 `holdem-starting-hands-chart`에도 있다.
  🔴 **계산기에 «Starting Hand» 탭이 생긴 뒤라 재조준 대상**이다(로케일 랜딩이 있는 11곳은 `/{loc}/calculator`로,
  없는 곳은 그대로 두거나 `/calculator`로). **포스트 수정이라 posting.mdc 절차 → 별도 회차**(queue 후보).
  ✅ **09-19 (5) 해소 `7fae5a72`** — 단 목적지는 이 안과 달리 **`/en/hand-chart`**다: 그 문장이 전 로케일에서 **이미 계산기를 링크**해
  `/{loc}/calculator`로 돌리면 한 문장에 같은 목적지가 두 번 된다(+ Starting Hand 탭은 차트가 아니다). 덤으로 한국어 `/calculator` 14자리 ·
  라이브 404 `/es|ja|zh/quiz` 3자리도 `/en/*`로. 재발 방지 = `check:intl-links` 3차(도구 링크 라우트 실존).
- 🪶 **EN 티어 역전 1건 추가 실측**(hi 2차 교열): 폴백에 걸리는 `43s`(Tier 5)가 표 안 `54s`·`65s`(Tier 4 · «Call LP»만)보다
  **공격적으로 읽힌다** — EN 동형이라(EN 폴백 «Cutoff/button only» ↔ EN 54s «Call LP») hi는 건드리지 않고 예시에서만 뺐다.
  **EN 정정 후 전 로케일 전파** 후보(§5의 `K10o/Q10o/J10o`·`A10s/KQs` 역전과 같은 묶음).
*(EN `A3s` 거짓 문구 · EN `outs.exactNote` «The big number» — 둘 다 2026-09-20 (3)에 **EN만** 해소. 아래 ✅ 블록)*
- 🪶 **`outs.exactNote` 로케일 전수 확인은 남았다** — EN을 «The figure in large type is the exact one»으로
  못 박았으니, 로케일이 «값의 크기»로 옮겼으면 **사실오류**다(항상 Rule of 4 추정치가 더 크다).
  🔴 **grep 후보**: de `große Zahl` · ja `大きい数字` · ms `Angka besar` · zh `那個大數字`는 활자 뜻이 살아 있다 —
  hi 초안이 실제로 `मान`(값)으로 옮겨 **«더 큰 쪽 수치가 정확값»**을 만들었다. 로케일 회차에서 확인.
- 🪶 **EN `A3s` 새 문구의 12로케일 전파는 남았다**(EN만 고쳤다).


### ✅ 2026-09-21 해소 — 권고 비대칭·티어 역전 회차 (queue Q10 · 레인 `51d79100` · EN + 10로케일 + **ko**)

닫힌 것: **`88`·`77` EP 권고 비대칭** + **EP 첫 진입 「raise or fold when first in」 신설**(D유형) ·
**수티드 커넥터 사다리**(`10-9s`·`98s`·`87s`·`65s`·`54s` — `76s`만 first-in을 갖던 티어 내 역전) ·
**`55`·`44` 셋마이닝 ~15× + LP 한정** · **`44`·`33`·`22` Tier 5 → Tier 4**(위 「EN 티어 역전 1건 추가 실측」의
`43s` 건이 **이걸로 닫힌다** — 수티드에 바닥을 두는 게 아니라 **페어를 올려서**) ·
**티어 요약 3·4·5행 재구성**(3행 `Q10s` 추가 · 4행 `66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s` ·
5행 `weak offsuit hands (J2o, 93o, 72o)`) · **`outs.exactNote` 10로케일 = «활자가 큰 쪽»** ·
**`A3s` desc 11자리 전파** · 곁 de 낡은 주석 **6곳**.

🔴 **`exactNote`의 근거가 «항상»이 아니었다** — 위 항목은 「항상 Rule of 4 추정치가 더 크다」로 적었는데
**거짓이다**: 플랍 탭에서 부호가 **6↔7 아웃츠에서 한 번 뒤집힌다**(9아웃츠 rule 36 > 정확 34.97 ·
4아웃츠 rule 16 **<** 정확 16.47). 그래서 처방이 «큰 값»이 아니라 **«활자가 큰 쪽»**(정확값 = `text-5xl/6xl` ·
Rule of N = `text-base`)이어야 했다. **근사와 정확값의 대소는 방향이 고정돼 있지 않다.**

다음 회차가 알아야 할 것:

- 🔴 **파생 표는 코드가 정본이다** — 요약 5행은 `HAND_TABLE`·`fallbackTier`의 파생물인데 사본이 **13개**(로케일 11 + EN + ko).
  `check:calc-parity`는 **12사본이 똑같이 틀리면 0건**이라 `Q10s` 누락이 `64c0fd9a` 이래 통과해 왔다.
  규율 승격 = `settled-decisions` **§3-H** · 게이트 재료 = 진행 파일 §5 **Q10-3**.
- 🔴 **ko는 게이트 순회 밖이다**(`app/calculator/calculator-client.tsx` · 자체 `HAND_TABLE`·`fallbackTier`).
  Q10에서 ko `66`의 EN 이탈(F유형)이 아무 게이트에도 안 걸렸다.

### Q10 회차(09-21)가 §5에 더한 것

- 🪶 **EN `66`·`44`의 「~15×」 주체 미명시** — 「누구 스택 기준인가」가 없다(pt·fr·ms·hi는 이미 정밀형 = «너와 레이즈한 사람 둘 다 뒤에»).
- 🪶 **`outs.exactNote`가 Rule of N 칸 «바로 아래» 붙어 근접성으로 반대로 읽힐 수 있다**(네이티브 렌즈) —
  처방은 문장 안에 **대조를 넣는 것**(「활자가 큰 쪽이 정확값, 위의 Rule of N은 어림」 형) · 12자리.
- 🪶 **요약 4·5행이 폴백 T4 오프수트(`A9o`–`A2o` · `K9o`–`10-9o`)를 어디서도 안 든다** — 표 밖이라 요약에 없고,
  배지는 T4로 뜬다. 「요약 = 표만」인지 「요약 = 화면에 뜨는 티어 전부」인지 **정의 판정**이 먼저다.
- 🪶 **fr `au moins ~15×`의 «이상 + 약» 충돌**(66·55·44) — 「최소」와 「대략」이 한 구에 붙었다.
- 🪶 **ja `KQo`만 first-in을 「誰も入っていなければ」로** 적어 파일 정본 「ファーストイン」과 갈린다.
- 🪶 **다른 로케일 `solver-client`에도 「도구 페이지가 없다」 낡은 주석이 남았다**(es:795 · ja:787 · pt:825 ·
  zh:138,727 · zh-hant:155,723) — de 6곳은 Q10이 닫았다. 🔴 **세는 기준을 로케일마다 다르게 쓰지 마라**:
  브리프가 de를 「2곳」으로 센 건 ja를 세던 기준을 de에 안 썼기 때문이고, 교열 렌즈가 6곳으로 반증했다.
