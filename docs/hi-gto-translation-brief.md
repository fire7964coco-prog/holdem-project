# HI GTO 해설 집필 브리프

작성: 2026-09-15. 사용자의 「다음 힌디어 진행, 고품질 포스팅」 요청에 따른 GTO 해설 ①–⑬ 제작 입력이다. 발행 완료 기록이 아니다.

## 원문과 작업 범위

- 최신 `lib/posts-en/<slug>.ts`의 평가된 Post와 본문 **전체**를 읽고 번역한다. EN의 설명·전략 논거·표 전 행·FAQ·강조·디렉티브·이미지 위치·조건·고지를 줄이지 않는다.
- 계산 정본은 `gto-solver-series-spec.md` §4-B·§4-B-2·§4-B-3. [ID 원문 계약](id-gto-source-contract.md)의 **N01–N24·C01–C12 전체와 §6–9**를 승계한다. ID/MS의 문체·UI·발행일은 복사하지 않는다.
- [MS 원문 계약](ms-gto-source-contract.md)과 [최종 MS 검수](ms-gto-publication-review-2026-09-15.md)는 직전 정정의 근거다. 다른 언어의 검수 완료를 HI 검수 완료로 적지 않는다.
- 본문은 번역, 검색 메타·H2·FAQ 표현·내부링크·본문 용어 표기는 HI 현지화다. 새 경험담·새 전략·새 solver 실행을 만들지 않는다. 이 시리즈는 경험담 의무의 명시적 예외다.
- ①–④ / ⑤–⑧ / ⑨–⑬ 세 집필 배치로 나누고 각각 기계 검사한다. 전체 완성 후 언어·SEO·전략·수학 렌즈, 정정 뒤 교열, 묶음 발행·운영 확인을 진행한다.
- `date`·`updated`는 실제 HI 발행·수정일, `masterUpdated`는 현재 EN의 updated다. 본문의 과거 관측·계산 날짜를 이번 제작일로 바꾸지 않는다.
- ⑤에 공통조건 H2를 신설하지 않는다. ⑩–⑬에 FAQ H2를 신설하지 않는다. EN FAQ67·표637행은 현재 원문 구조의 대조값이다.

## 문체와 공통 표기

[HI 포스팅 참고 정본](keyword-bank/hi-posting-reference.md), [용어 정본](translation-terms-hi.md), [실제 UI 브리프](hi-solver-landing-brief.md)를 따른다. 이번 검색 팩은 [hi-gto-series.md](keyword-bank/hi-gto-series.md)에 기록한다.

| 자리 | 공통 기준 |
|---|---|
| 문장 | 쉬운 데바나가리 산문, `आप` 존댓말. 영어 어순·과도한 산스크리트식 직역 금지 |
| hand·card | हैंड / कार्ड |
| 일반 UI 명사 | सॉल्वर / बोर्ड / मुफ़्त / ब्राउज़र |
| 라틴 유지 | range, equity, EV, EQR, bet, check, call, raise, fold, bluff, c-bet, 3-bet, flop, turn, river, pot, stack, draw, blocker, SPR, OOP, IP, BTN, SB, BB |
| 설명 | 첫 등장에 필요한 용어만 쉬운 뜻을 덧붙인다. range는 가능한 핸드와 가중치, equity는 all-in 지분, EV는 기대값이며 실전 승률과 같지 않다 |
| 족보 | Royal Flush·Straight Flush·Four of a Kind·Full House·Flush·Straight·Three of a Kind·Two Pair·One Pair·High Card 라틴 유지. set/trips 의미 구분 |
| 직답 | `> **सीधा जवाब**` |
| readnext | `:::readnext[आगे पढ़ें]` |
| readTime | `N मिनट` |
| 표 | `सेटिंग`, `मान`, `माप`, `श्रेणी`, `आवृत्ति`, `कॉम्बो` — 해당 EN 행·열만 번역하고 신설하지 않음 |
| 숫자 | 라틴0–9, 소수점`.`·천단위`,` 유지. 산문은 `2.5 bb`, UI 축어는 실제 화면 간격 유지. % 앞 공백 없음 |
| 메타 | title≤40자 목표, seoTitle≤60자 목표, desc≤160자. 평가된 문자열로 측정. seoTitle에는 포커 맥락과 GTO, 해당 보드·행동을 명확히 |
| tldr | 평문. 마크다운·링크·중첩 강조 없음 |

용어 표기는 편집 결정이며 검색량 최다 어순이라는 주장이 아니다. 원문 수치의 주어·분모를 제목에서도 생략하지 않는다. ⑩97.8%는 **큰 bet**, 전체 bet는98.1%다.

## UI·이미지

- 실제 HI 앱 `https://solver.holdemmaster.com/?lang=hi`. media 담당이 현재 DOM·예제명·수치·카테고리를 확인하여 `hi-gto-media-review.md`에 기록한다. 최신 캡처 보고를 받은 뒤 CTA 축어를 확정한다.
- 2026-09-15 실제 DOM 확인: `अभ्यास स्पॉट`(⚡ तुरंत) → 실제 예제명 → `⚡ परिणाम देखें`. 목록의 직접 계산 `खुद गणना करें`, 결과의 직접 계산 `इस स्पॉट की गणना खुद करें`. 실행 `Tree बनाएँ` → `Solver चलाएँ`. 메뉴·버튼은 일반 번역보다 **화면 축어가 우선**이다. 근거 `tmp/hi-solver-ui-verbatim.json`.
- 실제 예제명: ① `सूखा A-high board`, ② `सूखा K-high board`, ③ `जुड़ा हुआ Broadway board, two-tone`, ④ `जुड़ा हुआ middle board, two-tone`, ⑤ `Monotone board (एक ही suit)`, ⑥ `Paired board`, ⑦ `नीचा rainbow board`, ⑧ `A-high board, 3-bettor को फ़ायदा`, ⑨ `Draws वाला two-tone board`, ⑩ `नीचा सूखा board`, ⑪ `K-high board पर T`, ⑫ `जुड़ा हुआ low board, two-tone`, ⑬ `दो Ace वाला board`.
- 결과 UI는 `खिलाड़ी:`, `हैंड`, `Draws`, `सारांश`, `वज़न`, `सभी`, `EV (bb)`. 분류 중 `कमज़ोर Pair`, `बना हुआ हैंड नहीं`, `Draw नहीं`는 HI이며 Set/Trips·Two Pair·Top Pair 등은 라틴이다. 산문의 no-pair와 UI의 `बना हुआ हैंड नहीं`는 범위가 다르므로 구별한다.
- 결과는 OOP 플랍 첫 결정. IP 패널은 range/equity 정보이며 후속 IP 행동표가 아니다. ⑦ 후속노드는 **2026-08-20 별도 재솔브**다. 현재 사전결과와 섞지 않는다.
- 각 글 `image`는 `/images/gto-<key>-oop-hi.webp`, 본문은 `/images/gto-<key>-ranges-hi.webp` 한 장. 다국어 hero를 content에 중복 삽입하지 않는다.
- 새 사진을 생성하지 않는다. 실제 HI OOP 캡처13장+HI range차트13장. 이미지의 실제 글자와 수치를 열어 확인한다.
- 로그인 없는 사용 가능. 익명 연습기록은 브라우저에 남고 Study/Daily 기록은 선택 로그인으로 동기화 가능. **직접 계산한 스팟의 문제·연습기록은 로그인해도 기기 한정**이다.

## 내부링크

등록된 HI 입문8편을 직접 확인했다. 신규13편은 본체가 index 등록한다. 본문 EN 링크 슬롯·중복 횟수는 보존하고 아래 원문 대상만 실제 HI 목적지로 바꾼다. 앵커도 해당 페이지가 제공하는 범위에 맞춘다.

| EN 대상 | HI 대상 | 설명 범위 |
|---|---|---|
| holdem-continuation-bet·holdem-equity·holdem-implied-odds·holdem-strategy | `/hi/solver` | 원리를 확인할 solver·학습 도구, 독립 전문 가이드라고 부르지 않음 |
| holdem-position-play | `/hi/blog/holdem-game-order` | 행동 순서·포지션 기초 |
| holdem-drawing-odds·holdem-pot-odds | `/hi/blog/texas-holdem-rules-for-beginners` | draw·pot odds 입문 설명 |
| holdem-3bet | `/hi/blog/holdem-betting-actions` | raise·re-raise 규칙 |

- source slug+EN target의 기존 자리만 허용한다. 다른 목적지 전체에 대한 면제가 아니다.
- 허브 `/hi/solver`. 시리즈 전체 목차를 모든 글에 넣지 않는다. 원문 형제 글의 순서와 슬롯은 보존한다.
- readnext는 실제 HI 블로그2개를 고르고 title·hero를 목적지 Post와 맞춘다. 새로운 형제 글의 메타 확정 전에는 root가 최종 대조한다.
- `/hi/calculator`, `/hi/hand-chart` 등 미등록 도구를 추측해서 연결하지 않는다. solver 링크에 블로그 hero 썸네일을 붙이지 않는다.

## 검수 시 특히 볼 것

- 전체 range 빈도·개별 combo 빈도·hand-class 비중·실제 fold율을 구분한다. EQR는 pot 점유율이 아니다.
- draw completion outs는 상대를 반드시 이기는 clean outs와 다르다. 현재 한 장의 call 가격과 두 장을 공짜로 보는 확률을 혼합하지 않는다.
- ⑦ 내부0.16=0.016bb, 사전root96.8/3.2와 과거별도root98.0/2.0,14.9와69.7/477.5=14.6,63.0과316.5/503=62.9 모두 해당 출처·집계 고지와 함께 보존한다.
- N01–N24·C01–C12는 실제 HI 본문의 대응 문장으로 확인한다. 원문 계약을 읽었다는 말로 반영 검증을 대신하지 않는다.
- 기계0건은 커버리지와 함께 보고한다. 자동 미판정 카드 문단은 직접 조합·계산과 전략 렌즈로 보완한다. 실제 현지 인간 감수라고 주장하지 않는다.
