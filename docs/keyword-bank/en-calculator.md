# EN 키워드 뱅크 — `/en/calculator` (계산기 랜딩 · 2026-09-17)

> 실측 2026-09-17. 도구 = 라쿠 search-volume-history(location **United States** · language English) · DataForSEO Labs
> keyword_suggestions(2840/en) · DFS SERP advanced(모바일 · PAA) · 라쿠 suggest-keywords(google · 영어 시드도 영어 서제스트를 준다).
> 🔴 **측정 불가(엔드포인트 단위)**: 라쿠 `question-search`는 영어 질문 0건(일본어 DB) → PAA는 DFS SERP로.
> 🔴 CPC는 근거로 쓰지 않는다(벤더 간 30배). KD = DFS keyword_difficulty.

## 1. 코어 볼륨 (US · 월)

| 키워드 | Vol | KD | 우리 도구가 «그 의도»를 채우나 |
|---|---|---|---|
| poker odds calculator (= poker probability / hand odds calculator 동의어군) | **9,900** | 7 | ❌ → ✅ **09-17 「Equity」 탭 신설**로 채움(핸드 vs 핸드 승률) |
| poker calculator | 6,600 | 10 | ✅ |
| poker equity calculator | 3,600 | 17~20 | ✅(신설 탭) |
| poker hand calculator | 2,900 | 18 | ✅(equity + hand rank) |
| implied odds calculator | 2,900 | 37 | ✅(팟오즈 탭 토글) — 설명에 명시 |
| poker odds | 2,400 | — | 정보형 · `holdem-probability`가 소유 |
| holdem calculator / texas holdem calculator | 1,300 / 1,000 | — | ✅ |
| icm poker / what is icm in poker | 1,000 / 1,000 | — | 정보형 · `holdem-icm`이 소유 |
| **icm calculator** | 590 | 23 | ✅ — GSC 90일 노출 73 중 icm 계열 ≈50(r46~62) |
| holdem odds calculator / texas holdem odds calculator | 590 / 590 | — | ✅ |
| pot odds calculator | 480 | — | ✅ |
| push fold chart | 390 | — | ✅(탭) — 정보형은 `holdem-short-stack` |
| poker icm calculator | 320 | 13 | ✅ |
| icm chop calculator | 170 | 6 | ✅(ICM 딜 vs 칩찹 표) |
| which poker hand wins calculator | 170 | 19 | ✅(equity 탭 · 리버 5장이면 승자·족보 표시) |
| rule of 4 and 2 | 140 | — | FAQ |
| poker outs calculator / outs calculator | 110 / 110 | — | ✅ |
| poker ev calculator | 110 | 13 | ❌(미구현 · 후보) |
| poker variance calculator | 480 | 3 | ❌(미구현 · 별도 도구 후보 · KD 3) |
| poker chip distribution calculator | 320 | — | ❌(의도 다름 · 홈게임 칩 분배) |
| poker blinds calculator | 210 | 1 | ❌(블라인드 구조 · 카니발 금지 규율 §1 BB) |
| spr calculator poker · stack to pot ratio calculator · poker m ratio calculator | null | — | 볼륨 없음 → 제목 후보 아님(탭·표는 유지) |

## 2. GSC 실측 (`/en/calculator` · 90일 · 2026-06-16~09-14)

노출 96 · 클릭 0 · r59.3. 쿼리 22개 중 icm 계열이 노출 ~50(icm poker calculator 13 · poker icm calculator 12 · icm chop calculator 6 · icm calculator 4…).
28일 창은 노출 3 — **페이지가 사실상 비가시**. 구조 재조준의 근거는 GSC가 아니라 §1 볼륨·의도.

## 3. PAA (DFS SERP advanced · 모바일 · US)

- **icm calculator**: What is an ICM calculator? · Is ICM the same as chip EV? · When should you use ICM in poker? · What are common ICM mistakes? · Does ICM apply to cash games? (+ 무관: What does ICM mean in math)
- **pot odds calculator**: How do you calculate pot odds? · What is the 42 rule in poker? · How do you calculate your odds? · How often flops a 2 pair? · What hands should I fold preflop?
- **poker odds calculator**: PAA 없음 · People also search: app · omaha 5 · pre flop · **poker odds chart** · heads up · software · PLO
- **poker equity calculator**: PAS: range · app · PLO · best · software · hold'em equity calculator · 5 card poker hand calculator
- 라쿠 서제스트(google): poker calculator **who wins** · poker hand winner calculator · poker hand strength calculator · poker odds calculator range / heads up / pre flop · icm calculator **formula** / final table / mtt / nash

→ FAQ 17문항에 흡수(app/en/calculator/faq.ts). 「are odds calculators allowed in online poker」류는 사이트 약관 문제라 **다루지 않는다**.

## 4. SERP 구조 (상위 페이지 원문 추출 · 서브에이전트 09-17)

| 페이지 | 본문 | 구조 |
|---|---|---|
| icmizer / holdemresources (icm #1·#2) | ~50단어 | 도구만. 브랜드 권위 |
| trybluff (icm #9) | ~2,100 | H2 6(작동법·팁·워크드 딜·흔한 실수·ICM vs chip EV) + FAQ 7 |
| primedope | ~2,100 | 도구 3개(딜·버블팩터·새틀) + H2 12 |
| thinkgto | ~550 | 결과표(Player/Chips/Chip %/ICM Equity/ICM %/Chip Chop) + What is ICM |
| pokerlistings (odds #2) | ~1,755 | H2 10 + **표 2**(Probability of improvement after the flop · Common all-in hand combinations) + FAQ 13 |
| pokercoaching (odds #5) | ~1,300 | Step 1~4 + What is equity + FAQ 6 |
| omnicalculator | ~1,800 | 표 「AA 승률 by 상대 수 1~8」 |
| splitsuit (pot odds #3) | ~3,000 | 계산기 3개(팟오즈·베팅·임플라이드) + FAQ 5 |
| WPT (odds #1) | ~60 | iframe 도구만 |

**공통형 = 도구 + «도구 데이터의 정적 표» + FAQ.** 경험담·에세이는 없다 → 사장님 방향(«검색자 의도 = 계산기»)과 일치.

## 5. 채택 (09-17)

- **기능**: 「Equity」 탭 신설(2~4명 · 랜덤 핸드 · 보드 0/3/4/5 · 플롭 이후 전수 열거, 프리플롭 MC 60k · 리버 5장이면 승자·족보) — 머리어 9,900의 의도. 엔진 `lib/equity.ts` · 검산 `scripts/verify-equity.ts`(무작위 7장 20,000세트 poker-eval과 카테고리·우열 0 불일치) + `verify-equity-weighted.ts`(브리프 Q5-c §1 수트 가중값 AA-KK 81.95 · AKo-22 47.35 · AKs-22 49.89 · AKo-99 44.73 · AKo-QQ 43.24 전부 일치).
- **제목** `Poker Odds Calculator — Equity, ICM & Pot Odds`(46자 · 브랜드 포함 61 — 교열 렌즈: 74자는 SERP 잘림) · **설명** 158자(equity · pot odds · implied odds · outs · hand ranks · SPR · M · ICM deal & chip chop · 9 tools · no signup).
- **정적 표 6**(`quickRef`): 프리플롭 매치업(수트 가중) · AA vs 랜덤 N명 · 아웃츠 1~20 · 팟오즈(베팅 크기→필요 에퀴티) · SPR 구간 · M값 존 — 값은 전부 `scripts/calc-reference-tables.ts`.
- **FAQ 8 → 17** · 관련 글 6 → 8(icm · short-stack 추가).
- 🔴 카니발 경계: 아웃츠 표는 «빠른 참조»로 두고 전체 차트는 `holdem-probability`로 링크. 「poker odds chart」 의도는 그 글의 것.

## 6. 다음 로케일 인계

- ja: 「ポーカー 確率計算機」 50 · 「確率計算」 390 하위(keyword-bank/ja-probability.md) — 질문형 서제스트 실측 필요 · Equity 탭 문자열은 `dict.equity` 키만 채우면 켜진다.
- 로케일 사전은 `quickRef` 배열을 통째로 옮기되 **수치는 EN 값 그대로**(§13 언어 불변) · 관련 글 8개 «개수 동일».

## 7. 렌즈 뒤 확정 (09-17)

- H2는 «calculator reference» 프레임(SEO 렌즈: 「Pot odds chart」·「Outs chart」·「Harrington's M」 H2가 형제 글 H2와 충돌) · FAQ 정의형 4문항 교체 · ICM 딜 예시 교체(`holdem-icm`과 표 동일 → 카니발).
- 「poker odds calculator」 SERP는 CardPlayer·PokerNews·WPT·RIO·PokerListings — 순위 실측은 배포 후 28일 창에서(GSC 쿼리 단위).

