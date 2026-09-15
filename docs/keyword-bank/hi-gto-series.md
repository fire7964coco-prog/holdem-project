# HI GTO 시리즈 검색·메타 브리프

조사일: **2026-09-15 (KST)**. 대상: 힌디어를 읽는 포커 학습자. 작성 담당의 정성 리서치이며 발행·검수 완료 기록은 아니다.

## 1. 읽은 자료와 측정 범위

- `CLAUDE.md` 전문, `session-handoff.md` 전문, `.cursor/rules/posting.mdc` 전문, `hi-posting-reference.md`, `translation-terms-hi.md`, `hi-solver-landing-brief.md` 전문을 읽었다.
- `rakko-playbook.md` 운영 규칙과 비일본 조사 제약(§8), `gto-solver-series-spec.md`의 13개 slug·키워드 배정, 최신 `hi-gto-translation-brief.md`를 대조했다.
- `rg --files docs/market-profile docs/local-voice` 및 HI 관련 문자열 검색에서 **market-profile/hi.md와 HI local-voice 전용 파일은 발견되지 않았다**. 대신 9/14 HI 포스팅 참고 정본·용어·랜딩 브리프를 사용했다. 다른 언어 자료를 HI 시장자료로 쓰지 않았다.
- `ALL_TOOLS`의 도구명·설명을 조회했으나 **DataForSEO·라쿠·lowfruits·tool_search callable 도구는 없었다**. 이는 현재 도구 목록의 상태이며 계정·REST 사용 가능 여부를 검사했다는 뜻이 아니다. 검색량·SD·CPC·시계열을 측정하지 않았다.
- 현재 뱅크에 HI GTO 보드별 실측 파일이 없어 **실제 Google 인도 검색 + 공개 원문 비교로 보완**했다. 이 기록의 메타·H2는 검색량 최다 문구가 아니라 편집 제안이다.
- 검색 결과 요약·AI Overview는 **전략 사실의 근거로 사용하지 않았다**. 전략 수치·핸드·논거는 최신 EN와 §4-B 계약을 보존한다.

## 2. 실제 검색과 관찰

Chrome Google에 `gl=in&hl=hi&pws=0`를 지정했다. 세 쿼리 모두 하단 **भारत**, 비개인화 표시, 상세 위치 미확인을 직접 확인했다. 실제 인도 IP·도시·모바일 순위를 통제한 조사는 아니다. 순위 변동을 측정하지 않았다.

| ID | 실제 검색 쿼리 | 관찰한 의도·주의 |
|---|---|---|
| Q1 | पोकर c bet dry board कब करें | C-bet 사이징·dry/wet 설명·범용 족보·무관한 결과가 혼재. Google이 c bet를 c best로 제안하기도 했다. 전문어를 문맥과 함께 유지한다. |
| Q2 | पोकर monotone flop strategy हिंदी | Upswing·GTO Wizard 전문 글 뒤로 범용 postflop 가이드와 HI 입문 영상이 섞였다. 보드별 세밀한 학습 의도를 범용 포커 입문 제목으로 낮추지 않는다. |
| Q3 | पोकर range advantage क्या है | range advantage 설명·ranges 입문·capped range·영상이 섞였다. 단일 핸드와 전체 range 차이를 짧게 연결한다. |

일반 web 검색에서도 위 세 쿼리와 `poker check raise paired board hindi`를 실제 제출했다. 이 결과를 Google 브라우저 순위와 합치지 않았다.

### 자동번역과 현지 원문 구분

Q1의 Upswing·GTO Wizard·888poker·MasterClass·Red Chip·PokerNews, Q2의 주요 전문 글, Q3의 주요 range 글에서 **Google ने ट्रांसलेट किया** 표시와 `translate.google.com/translate?u=...&sl=en&tl=hi` 경로를 직접 확인했다. 같은 원문으로 가는 EN 링크도 DOM에 함께 있었다. 번역 링크와 원문 링크를 별개 경쟁 문서로 세지 않았다.

Q2 Upswing 제목은 Google 화면에서 **नीरस असफलताओं**로 번역됐다. 포커의 monotone/flop을 일반 형용사·실패로 옮긴 사례이므로 자동번역 제목을 HI 용어 모범으로 쓰지 않는다. 아래 열람 자료는 모두 EN 본문이며, 인도 원어민 HI 저술·감수라고 주장하지 않는다.

### 자동완성·질문 범위

Q3 검색창을 펼쳤을 때 실제 보인 후보: `range vs range poker calculator`, `range advantage`, `range advantage poker`, `range power`. 마지막은 포커 의도가 불명확하므로 채택하지 않는다. 이 후보들의 검색량이나 HI 사용 비중은 알 수 없다.

세 검색의 기록된 화면에서 별도 PAA 확장 질문을 확보하지 못했다. **전체 PAA 수집 완료라고 쓰지 않는다.** 아래 H2/FAQ 제안은 원문 내용과 관찰 의도에 맞춘 재표현이며 실제 PAA 축어라고 표시하지 않는다.

## 3. SERP 첫 화면과 원문 비교

### Q1 첫 화면의 10개 결과 슬롯

아래 순서는 **당시 해당 화면의 관찰 순서**일 뿐 일반적인 인도 검색 순위를 뜻하지 않는다. 본문 언어·적합성을 확인하지 않은 항목은 구조 비교 완료로 세지 않았다.

| 슬롯 | 원문 URL / 항목 | 처리 |
|---|---|---|
| 1 | [Reddit when to CBet](https://www.reddit.com/r/poker/comments/gtbte6/when_to_cbet/) | 커뮤니티 질문. 검색 결과만 관찰, 원문 미열람·전략 근거 제외 |
| 2 | [Upswing bet sizing](https://upswingpoker.com/bet-size-strategy-tips-rules/) | web 열람429 뒤 Chrome 본문 직접 열람 |
| 3 | [GTO Wizard c-bet sizing](https://blog.gtowizard.com/the-mechanics-of-c-bet-sizing/) | 공개 EN 원문 열람 |
| 4 | [888poker bet sizing](https://www.888poker.com/magazine/strategy/bet-sizing-poker-comprehensive-guide) | 공개 EN 원문 열람 |
| 5 | [MasterClass board texture](https://www.masterclass.com/articles/what-is-board-texture-in-poker) | 공개 EN 원문 열람 |
| 6 | [Red Chip flop texture](https://redchippoker.com/how-to-think-about-flop-texture/) | 공개 EN 원문 열람 |
| 7 | [PokerNews wet board](https://www.pokernews.com/pokerterms/wet-board.htm) | 공개 EN 원문 열람 |
| 8 | [Wikipedia glossary](https://en.wikipedia.org/wiki/Glossary_of_poker_terms) | 범용 2차 용어집. 원문 미열람·전략 근거 제외 |
| 9 | Government Of Odisha 하위의 포커 SEO 결과 | 운영기관과 주제 불일치. 원문 미열람·제외 |
| 10 | [Aaj Tak cricket profile](https://www.aajtak.in/live-score/cricket/lujaina-profile-132640) | 크리켓 결과. 원문 미열람·제외 |

**Top10 모든 원문 검수 완료가 아니다.** Q1의 관련 교육 원문 6개를 읽었고, Q2/Q3 첫 화면의 관련 원문을 추가로 읽어 아래 비교를 보강했다.

### 직접 열람한 교육 원문: 구조·예시·빈자리

분량은 페이지가 직접 표시한 읽기 시간만 적는다. 단어 수를 추정하지 않았다. FAQ 유무는 열람 본문에 대한 관찰이며 사이트 전체 판정이 아니다. 경쟁사의 계산·조언은 우리 시리즈 수치로 옮기지 않는다.

| 실제 열람 원문 | H2·구조 / 분량 | FAQ·예시·표 관찰 | 우리 글에 주는 편집 시사점 |
|---|---|---|---|
| [Upswing](https://upswingpoker.com/bet-size-strategy-tips-rules/) | 8개 사이징 규칙을 목차와 해설로 전개. 예: “The 8 Bet Sizing Rules” | preflop·flop·turn·river 행동이 적힌 실전 핸드와 분석, range 그래프. 본문 FAQ 별도 묶음은 관찰하지 못함 | 범용 비율 규칙을 모든 보드 정답처럼 번역하지 않는다. 우리의 고정 입력·트리에서 나온 전략만 설명한다. |
| [GTO Wizard sizing](https://blog.gtowizard.com/the-mechanics-of-c-bet-sizing/) | dry / wet / super wet 대조. 자체 표시10분 | BTN vs BB 조건, 보드별 range·액션 그림, 사이징 동기 비교. 별도 FAQ 묶음 대신 본문 질문·해설 | ‘wet일수록 무조건 큰 bet’로 단순화하지 않는다. 수트·연결성·nut 분포를 분리해 읽는다. |
| [888poker sizing](https://www.888poker.com/magazine/strategy/bet-sizing-poker-comprehensive-guide) | 정의·preflop·3-bet·board texture·GTO 구조. 자체 표시15분 | 여러 핸드와 크기 범위. 넓은 원칙을 규칙형 문장으로 압축 | ⑧–⑩ 제목을 같은 ‘3-bet 전략’으로 반복하지 않고 A-K / dynamic / low 맥락으로 나눈다. |
| [MasterClass](https://www.masterclass.com/articles/what-is-board-texture-in-poker) | 질문형 H2로 board / dry / wet / importance 분리 | K72 등 짧은 보드 예시. 본문 FAQ 묶음보다 정의 섹션 중심 | dry 정의를 재설명하는 데 머물지 않고 실제 solver의 OOP/IP 노드를 읽게 한다. |
| [Red Chip](https://redchippoker.com/how-to-think-about-flop-texture/) | “Flops can be either dynamic or static” 뒤 개별 보드 H3 | CO vs BTN 행동 맥락·경험형 해설. 예시 비율이 설명용임을 본문에서 스스로 밝힘 | dry와 static을 같은 말로 취급하지 않는다. 원문에 없는 관측·솔브 날짜·경험담은 만들지 않는다. |
| [PokerNews](https://www.pokernews.com/pokerterms/wet-board.htm) | wet board 용어 설명 뒤 FAQ | dry 차이·대응·보장 여부·bluff 질문. 정의 중심으로 세밀한 range 입력 없음 | 범용 FAQ와 겹치기보다 해당 보드의 check·bet 조건에 답한다. |
| [GTO Wizard monotone](https://blog.gtowizard.com/maximizing-value-on-monotone-flops/) | 작은 pot / 커진 pot / 원리 / turn / river 단계. 자체 표시12분 | 서로 다른 stack·position·street의 도표와 핸드, 본문 질문 포함 | 나중 street의 조건부 range를 flop 전체 확률로 읽지 않는다. 우리 글에서는 EN의 원래 범위만 보존한다. |
| [PokerCoaching](https://pokercoaching.com/blog/range-advantage/) | range 이해→우위 판별→행동→FAQ. 자체 표시6분 | A-K-2와8-7-6 예시, equity 그림, range/nut 차이 FAQ | range 우위를 nut 우위나 무조건 큰 bet의 허가로 바꾸지 않는다. 우리 고정 수치가 범용 제목보다 구체적이다. |
| [888poker range](https://www.888poker.com/magazine/poker-terms/range-advantage) | 설명 / 전략 활용. 자체 표시2분 | raw equity·분포·취약성의 차이를 산문으로 구분. 별도 핸드별 행동표 없음 | equity·EV·EQR를 한 단어 ‘승률’로 합치지 않는다. |
| [PokerStrategy](https://www.pokerstrategy.com/glossary/Range/) | range 정의 / chart / 활용 / 추정 / preflop vs postflop | 13×13 chart 설명, AA·AK 등 notation 예시 | range가 단일 핸드 예측이라는 오해를 첫 소개에서 막는다. 수치 재인용이 필요하면 별도 검산한다. |
| [Pokercode](https://www.pokercode.com/blog/poker-ranges) | range 정의 뒤 matrix / percentage / combo / strand 형태. 자체 표시8분 | range 이미지·suited/offsuit 표기 예시 | 초심자가 읽을 순서를 설명하되 새 입문 필라 전체를 시리즈에 덧붙이지 않는다. |
| [Poker Professor](https://www.pokerprofessor.com/university/how-to-win-at-poker/post-flop-strategy) | “Analysing the Flop” 뒤 자신·상대·draw·pair·선두 여부 질문 | paired flop과 draw 예시. 수치 solver 행동표 없음 | ‘상대가 draw면 반드시 bet’ 같은 범용 명제를 옮기지 않는다. |
| [Tight Poker](https://www.tightpoker.com/flop-poker/) | made / draw / unmade 분류 뒤 betting 이유 | overcard·backdoor draw 실례, value/bluff/protection 설명 | ‘미완성 핸드’·‘no pair’·실제 UI 분류의 범위를 구별한다. |

추가 web 결과의 HI Range Craft 용어집은 열람 실패하여 신규 근거에서 제외했다. 다른 HI 경로 사이트도 검색 요약만 보고 현지 전문 출처로 채택하지 않았다.

## 4. 우리가 더 줄 것 — 3가지

1. **자동번역을 거치지 않은 쉬운 HI 설명.** आप체·हैंड와 라틴 range/equity/bet/check를 일관되게 써서 실제 포커 의미가 유지되게 한다. 독자가 쓸 앱 버튼은 실제 HI 화면 축어로 연결한다.
2. **재현 가능한 구체적 보드와 입력.** EN의 고정 range·stack·pot·사이즈·행동표를 그대로 보존하고 OOP의 첫 행동, 상대 check 뒤의 IP 행동, 전체 range와 핸드별 빈도를 구별한다. 보드 분류 하나를 보편적 bet 규칙으로 만들지 않는다.
3. **설명에서 연습으로 이어지는 좁은 동선.** 해당 실제 예제를 열어 결과를 읽고, 원문에 있는 FAQ·비교표·관련 글로 한 가지 질문씩 해결한다. 신규13편의 개별 의도를 유지하고 범용 규칙·게임 가입 검색어로 채우지 않는다.

이 차별점은 경쟁사보다 검색 순위가 높아진다는 예측이 아니라 이번 집필의 구체적 품질 목표다.

## 5. 13편 메타·H2 후보

아래는 **검색량·PAA 축어가 아닌 편집 제안**이다. 최신 EN의 본문·조건·FAQ 슬롯을 유지하며 맞는 기존 H2/FAQ 표현만 바꾼다. 새 섹션·새 전략을 추가하라는 뜻이 아니다. 실제 선택 후 평가된 Post 문자열의 길이를 다시 잰다. 제목의 숫자 훅을 쓸 경우 주어·행동·분모까지 계약과 대조한다.

### 1. `a-high-board-cbet`

- **seoTitle (43 UTF-16자):** A-high पर जल्दबाज़ी क्यों? — पोकर GTO C-bet
- **desc (91 UTF-16자):** A-high देखकर हर हैंड से bet करते हैं? इस GTO उदाहरण में range, C-bet और check की वजह समझें।
- **기존 H2/FAQ 재표현 후보:** A-high पर C-bet कब करना चाहिए? / A-high बोर्ड पर पूरी range को bet क्यों नहीं करना चाहिए?

### 2. `k-high-board-cbet`

- **seoTitle (39 UTF-16자):** K-high पर check क्यों? — पोकर GTO C-bet
- **desc (107 UTF-16자):** K-high पर अच्छी equity के बाद भी check क्यों आता है? इस GTO उदाहरण में C-bet, position और EQR को साथ पढ़ें।
- **기존 H2/FAQ 재표현 후보:** K-high बोर्ड पर C-bet की frequency कैसे पढ़ें? / Equity ज़्यादा हो तो भी check-back क्यों आता है?

### 3. `broadway-board-strategy`

- **seoTitle (43 UTF-16자):** QJT पर कौन आगे है? — पोकर GTO nut advantage
- **desc (111 UTF-16자):** QJT पर सिर्फ top pair देखना काफी नहीं। GTO उदाहरण में range advantage, nut advantage और bet size का फर्क समझें।
- **기존 H2/FAQ 재표현 후보:** QJT बोर्ड पर किसके पास nut advantage है? / Range advantage और nut advantage में क्या फर्क है?

### 4. `donk-bet-strategy`

- **seoTitle (46 UTF-16자):** BB पहले bet क्यों करता है? — पोकर GTO donk bet
- **desc (121 UTF-16자):** Preflop call करने वाला BB flop पर पहले bet क्यों करता है? जुड़े बोर्ड पर donk bet और range advantage का GTO उदाहरण देखें।
- **기존 H2/FAQ 재표현 후보:** पोकर में donk bet कब सही हो सकता है? / Connected बोर्ड पर preflop raiser को check क्यों करना पड़ता है?

### 5. `monotone-board-strategy`

- **seoTitle (47 UTF-16자):** एक ही suit, छोटी bet क्यों? — पोकर GTO monotone
- **desc (119 UTF-16자):** Flop के तीनों कार्ड एक ही suit के हैं। GTO उदाहरण से समझें कि monotone बोर्ड पर bet size, flush और blockers कैसे पढ़ें।
- **기존 H2/FAQ 재표현 후보:** Monotone flop पर छोटी bet क्यों आती है? / एक suit का blocker होने से हर बार bluff सही हो जाता है?

### 6. `paired-board-strategy`

- **seoTitle (47 UTF-16자):** बोर्ड पर pair, अब क्या? — पोकर GTO paired board
- **desc (119 UTF-16자):** Paired बोर्ड पर सिर्फ trips का डर देखेंगे तो पूरी range छूट जाएगी। GTO उदाहरण में C-bet, pocket pair और check को पढ़ें।
- **기존 H2/FAQ 재표현 후보:** Paired बोर्ड पर C-bet कैसे चुनें? / Paired flop पर pocket pair की भूमिका क्या है?

### 7. `low-board-check-raise`

- **seoTitle (44 UTF-16자):** छोटे कार्ड, बड़ा जवाब — पोकर GTO check-raise
- **desc (116 UTF-16자):** Low rainbow flop देखकर अपने overcards को मजबूत न मान लें। GTO उदाहरण में BB का check-raise और range की भूमिका समझें।
- **기존 H2/FAQ 재표현 후보:** Low बोर्ड पर BB check-raise क्यों करता है? / Overcards और backdoor draw में क्या फर्क देखना चाहिए?

### 8. `3bet-pot-cbet`

- **seoTitle (46 UTF-16자):** 3-bet pot में छोटी bet क्यों? — पोकर GTO C-bet
- **desc (100 UTF-16자):** 3-bet pot में A-K वाला flop आया। GTO उदाहरण में C-bet, range advantage और छोटे SPR का असर साथ देखें।
- **기존 H2/FAQ 재표현 후보:** 3-bet pot में A-K-high flop पर C-bet कैसे करें? / SPR छोटा होने से flop की योजना कैसे बदलती है?

### 9. `3bet-pot-bet-sizing`

- **seoTitle (40 UTF-16자):** हर flop पर एक size? — पोकर GTO 3-bet pot
- **desc (111 UTF-16자):** 3-bet pot में हर flop पर वही छोटी bet लगाते हैं? Dynamic बोर्ड के GTO उदाहरण में sizing और check का फर्क देखें।
- **기존 H2/FAQ 재표현 후보:** Dynamic flop पर 3-bet pot की bet size कैसे चुनें? / Draw वाला बोर्ड देखते ही बड़ी bet क्यों नहीं माननी चाहिए?

### 10. `3bet-pot-low-board`

- **seoTitle (48 UTF-16자):** Low flop पर बड़ी bet क्यों? — पोकर GTO 3-bet pot
- **desc (120 UTF-16자):** 3-bet pot का low flop देखकर सिर्फ overpair मत देखिए। GTO उदाहरण में बड़ी bet, polar range और A-high की भूमिका अलग पढ़ें।
- **기존 H2/FAQ 재표현 후보:** 3-bet pot के low बोर्ड पर बड़ी bet क्यों आती है? / Polar range में value और bluff को कैसे अलग पढ़ें?

### 11. `blind-battle-cbet`

- **seoTitle (43 UTF-16자):** SB में पहल काफी है? — पोकर GTO blind battle
- **desc (112 UTF-16자):** SB ने raise किया, लेकिन flop पर पहले भी वही खेलेगा। GTO उदाहरण में SB बनाम BB C-bet और position की भूमिका समझें।
- **기존 H2/FAQ 재표현 후보:** SB बनाम BB में C-bet कब करना चाहिए? / SB preflop raiser होकर भी OOP क्यों है?

### 12. `blind-battle-connected-board`

- **seoTitle (45 UTF-16자):** SB क्यों रुकता है? — पोकर GTO connected board
- **desc (106 UTF-16자):** Connected flop पर SB की पहल क्यों धीमी पड़ती है? GTO उदाहरण में BB की range, C-bet और check के कारण पढ़ें।
- **기존 H2/FAQ 재표현 후보:** Connected बोर्ड पर SB को check क्यों करना पड़ता है? / SB के check के बाद BB की strategy कैसे पढ़ें?

### 13. `ace-paired-board-strategy`

- **seoTitle (47 UTF-16자):** दो Ace, छोटी bet क्यों? — पोकर GTO paired board
- **desc (108 UTF-16자):** A-A वाला flop देखकर सिर्फ trips मत खोजिए। GTO उदाहरण में SB बनाम BB की छोटी bet, bluff और EQR का अर्थ समझें।
- **기존 H2/FAQ 재표현 후보:** A-A वाले paired बोर्ड पर छोटी bet क्यों आती है? / EQR 100% से ऊपर हो तो उसका क्या मतलब है?

## 6. 집필·검수 인계

- 위 검색 결과의 영어 전략 문장을 새로 가져오지 않는다. EN 원문 계약의 의미 보존이 우선이다.
- 새로운 수치·현장 경험·이번 날짜의 솔브를 만들지 않는다. 특히 이전 독립 재솔브·집계 차이를 사전결과와 섞지 않는다.
- 문체·용어와 실제 UI 축어의 충돌은 현재 UI 브리프를 우선한다. 이 연구 담당은 이번 앱 UI·이미지·포스트 구현을 검증하지 않았다.
- 13편 메타 후보는 모두 desc160자 이하, seoTitle60자 이하임을 JS 문자열 length로 계산했다. 실제 최종 카피·본문 언어 품질과 카드·표 검산은 별도 작성·검수 담당의 작업이다.
