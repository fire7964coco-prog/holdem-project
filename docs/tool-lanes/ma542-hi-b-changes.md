# MA-542 hi 레인 B — EN 재동기화 변경표 (2026-10-14)

대상 4편: blind-meaning · all-in-rules · showdown-rules · hand-rankings (hi).
기준: `masterUpdated` 시점 EN 커밋 → 현재 HEAD의 EN diff를 훅 단위로 판정했다.
EN 기준 커밋: blind 2cfd8daa(07-11) · all-in dad961cd(08-12) · showdown 684a9f1c(07-12) · hand-rankings f0515d4e(09-07).
🔎 hi 파일 다수가 그사이 개별 전파(fe93df0d·e30fde28·6ef48e4e 등)로 **이미 일부 정정을 받은 상태**였다 — 이미 들어온 훅은 «기반영»으로 적고 손대지 않았다.
`docs/locale-intentional-diffs.md`에 이 4편의 hi 항목은 없다.

## 1. holdem-blind-meaning (masterUpdated 07-11 → 10-06)

| # | 위치 | 전 | 후 | EN 근거 |
|---|---|---|---|---|
| 1 | tldr | BB उसके बाईं ओर; | + (heads-up में button ख़ुद small blind लगाता है) | tldr heads-up 괄호 (A 87 / B 157) |
| 2 | झटपट जवाब | small blind के बाईं ओर होता है। | + (heads-up खेल में button small blind लगाता है) | Quick answer 괄호 |
| 3 | 핵심 숫자 stripe | हर एक हाथ में लगने वाले अनिवार्य दांव | अनिवार्य दांव — small blind और big blind | «posted every single hand» 삭제 |
| 4 | blind 정의 | हर हाथ में दो खिलाड़ी | हर सामान्य हाथ में … + (dead button · heads-up 두 예외) | «every normal hand» + 예외 괄호 (A 85) |
| 5 | 왜 강제하나 | अगर blinds न हों | अगर blinds या कोई और अनिवार्य दांव न हो | «or some other forced bet» |
| 6 | SB 절 | सबसे कम जानकारी के साथ। | + (heads-up 예외: SB=button, 마지막 action) | SB heads-up 예외 |
| 7 | BB 절 | कोई raise नहीं करता | कोई raise या straddle नहीं करता | «raises or straddles» |
| 8 | 규칙 절 | 버튼이 매 핸드 이동 · «किसी को … छूट नहीं» | 정상 rotation 한정 + 자리 비움 시 cash(missed blinds·BB 대기·UTG live straddle)/tournament 분기 | «in normal rotation» + 자리 비움 분기 문장 |
| 9 | 표 주석 | (없음) | heads-up · live straddle가 표를 바꾼다는 문장 추가 | Note 추가 문장 |
| 10 | stakes 절 | Stakes को SB/BB… | No-limit·pot-limit 한정 + Fixed-limit 4-8 괄호 (WSOP LAR 104) | «In no-limit and pot-limit…» |
| 11 | stakes 표 헤더 | आम buy-in | आम buy-in / level | «Typical buy-in / level» |
| 12 | Cash game | 일어날 때까지 $1/$2 | clock이 안 올림 · 테이블과 room이 합의하지 않으면 유지 | Cash game 문장 교체 |
| 13 | straddle 문단 | BB 왼쪽 자리에서 | UTG 또는 (허용 시) button + WSOP: button straddle 우선·limit 불허 | B 165 straddle 한정 |
| 14 | heads-up 절 | «button이 blind 내는 유일한 때…» | 삭제 | EN 삭제 (dead button과 충돌) |
| 15 | missed blinds 절 | 즉시 BB post 또는 대기 | «ज़्यादातर rooms में» + 일부 room은 NL/PL 신규 착석 post 불요 (LAR 104.a) · dealer에게 물어라 | 104.a 헤지 |
| 16 | 30초 버전 도입 | (없음) | 경험담 도입 2문장 추가 | 신규 문장 |
| 17 | SB 불릿 | preflop 끝에서 두 번째… | 3인 이상·straddle 없음 한정 + 경험담 꼬리 | SB 불릿 헤지 |
| 18 | BB 불릿 | 더 넓게 수익 call | call이 더 싸서 넓게 defend + «call 자체의» 손익분기 + OOP라 equity 다 실현 못 함 | BB 불릿 헤지 (27%·2.7-to-1·1.5/4 BB 동일) |
| 19 | FAQ 행동 순서 | 단순 순서 | straddle 없음 한정 + live straddle·button straddle 괄호 + heads-up 예외 | FAQ |
| 20 | FAQ option | 모두 call만 하면 | BB를 call만 — raise·straddle 없이 — | FAQ |
| 21 | FAQ fold | 낸 blind는 돌려받지 못한다 | fold해서 낸 blind를 돌려받지 못한다 | FAQ 문장 정밀화 |
| 22 | FAQ heads-up | «button이 blind 내는 유일한 때» | 삭제 | EN 삭제 |
| 23 | FAQ missed | BB 대기 | + (허용 room) UTG live straddle로 복귀 | FAQ (tournament 꼬리는 기반영) |
| 24 | 요점 1 | button 왼쪽 | + (heads-up में: button पर) | Takeaway |
| 25 | front-matter | updated 10-13 · masterUpdated 07-11 | 10-14 · 10-06 | — |

생략: category 변경(hi 이미 "rules") · hsl() 래핑(hi 이미 hsl) · straddle 링크/썸네일(hi는 해당 글 미발행이라 평문 유지 — 기존 hi 관례).

## 2. holdem-all-in-rules (masterUpdated 08-12 → 10-11)

| # | 위치 | 전 | 후 | EN 근거 |
|---|---|---|---|---|
| 1 | 용어 표 Side pot | all-in खिलाड़ी बाहर | कम रक़म में all-in गया खिलाड़ी बाहर | «player who went all-in for less» |
| 2 | g: 강조 | all-in हो गए | all-in हो गए और किसी ने call कर दिया | «all-in and called» |
| 3 | 선언법 2 | (없음) | silent push = call 판정 (TDA 45-A · WSOP TR 92) · 그 외 push=all-in (45-B) · 큰 칩 1개 예외 (44) | 신규 문장 |
| 4 | r: 경고 꼬리 | «또는 스택 전부 한 번에» | «all-in»을 말로 — 다르게 읽히지 않는 유일한 방법 | 꼬리 교체 |
| 5 | Player C | 정상적으로 raise 가능 | reopening 한도 미적용 + 최소 총액 $14+$10=$24 (LAR 176) · 미만이면 all-in만 (B 175) | min-raise all-in 예외 |
| 6 | 실수 2 | 아직 안 한 사람은 정상 raise | 짧은 all-in 누적으로 full raise를 마주하면 예외 + «위 최소 총액»으로 raise | 실수 2 |
| 7 | 실수 4 | muck 금지 단문 | tournament는 TDA 16으로 전원 공개 · cash 실화(dealer가 muck에 쓸어 넣음 → dead) · 식별 가능 시 floor 재량 회수 | TDA 16 + 실화 |
| 8 | FAQ table stakes | 상대가 cover 못 할 만큼 못 건다 | 내 스택 초과분은 side pot 또는 uncalled bet으로 반환 | FAQ |
| 9 | FAQ 토너 vs 캐시 | «सहमति से» | «pot में बचे सभी खिलाड़ियों की सहमति से» | «everyone still in the pot agrees» |
| 10 | front-matter | 10-13 · 08-12 | 10-14 · 10-11 | — |

기반영(손대지 않음): tldr · side pot 본문(uncalled bet) · NL/PL 한정 + Limit 절반 (47-B) · 표 «full bet/raise 미만을 마주한» · Advanced case 개인별 판정 · 결과 문단($11 / $7) · 퀵가이드 표 3행 + TDA 48 · 실수 1·3 · FAQ blind 미만(LAR 154) · FAQ 공개 여부 · run it twice(210·211) · FAQ 순서(B149·TDA 16·17).
생략·보존: showdown 절 1항 — hi가 EN보다 상세(B149 side pot·check-through 순서)이나 EN과 모순 없음 → hi 고유 보존. FAQ 토너 vs 캐시의 «muck 여부도 house rule» — EN «players can muck»보다 보수적이지만 모순 아님 → 보존. Advanced case의 «TDA 2024 Rule 47-A» 표기 — EN은 «Rule 47»; 47-A가 정확한 하위항이라 보존.

## 3. holdem-showdown-rules (masterUpdated 07-12 → 10-13)

hi는 이전 회차에서 축약 문장(«Cash game में house rule।» 류)으로 정정을 받아 있었다. 이번 EN 훅이 닿는 문단은 **현재 EN 문장을 번역해 교체**했다(축약형이 헤지·조항번호를 떨어뜨린 자리).

| # | 위치 | 전 | 후 | EN 근거 |
|---|---|---|---|---|
| 1 | 순서 표 1행 | non-all-in 토너 한정 | river bet/raise → last aggressor + 토너에서 all-in 있으면 전원 공개 | 표 1행 |
| 2 | 순서 표 2행 | check-through 단순 | + all-in 없을 때 한정 · 토너 이전 all-in이면 전원 공개 | 표 2행 |
| 3 | 순서 표 3행 | 토너만 | 토너(TDA 16) + Cash(side pot 먼저 · NL 푸셔 먼저, LAR 149) | 표 3행 |
| 4 | muck 불릿 | 축약 | all-in 없을 때만 · 토너 TDA 16 · 다른 사람이 bet 가능한 동안 face-down · cash는 대부분 caller muck 허용 | 불릿 |
| 5 | 예외 문단 | 축약 (floor/collusion context) | TDA 18 전문 번역 + LAR 147(collusion 의심 **및** floor 입회) + show one, show all 설명 복원 | 예외 문단 |
| 6 | 실전 규칙 | 축약 | last aggressor 공개 · WSOP TR 72 페널티 · TDA 18 · LAR 147 · ace-high 사례 | Practical rule |
| 7 | check-through 절 | 모두 check | + «और कोई all-in नहीं है» | «and no one is all-in» |
| 8 | all-in 절 | 토너 TDA 16 | + 무결성 문장 · Cash LAR 149 상세(NL 푸셔 먼저 · side pot 먼저) | all-in 절 |
| 9 | all-in 표 3행 | 토너만 | 각 행 토너/Cash 분리 + LAR 149 · river all-in은 토너 muck 금지 · LAR 143 | all-in 표 |
| 10 | 뉘앙스 문단 | 축약 | payout 순서 ≠ 공개 순서 · TDA 16 illustration(side pot 분배 기다리지 말 것) · cash B149 | One nuance |
| 11 | slow roll 본문 | «सर्वत्र नापसंद।» | + 보호도 안 됨: WSOP TR 47 · TDA 70 페널티 | slow roll |
| 12 | 에티켓 도입 | (없음) | 도입 경험담 2문장 | 신규 |
| 13 | 실수 1 | 단문 | + 한 orbit 식은 경험담 | 신규 꼬리 |
| 14 | 실수 2 | 축약 | TDA 14 dead 시점 + floor 호출 · WSOP TR 109·110 | 실수 2 |
| 15 | 실수 3 | 축약 | TDA 18-A · 18-B(재량≠거절) · WSOP TR 109 · collusion 목적 문장 복원 | 실수 3 |
| 16 | 실수 4 | 축약 | betting 완료 후만 + WSOP TR 117 + LAR 번호 차이 괄호 + g: nuts는 즉시 공개 문장 복원 | 실수 4 |
| 17 | FAQ 누가 먼저 | 토너 한정 축약 | all-in 없을 때 + all-in 질문으로 안내 | FAQ |
| 18 | FAQ call 받으면 | 축약 | TR 72 · TDA 17-B · TDA 16 · TDA 18 전문 | FAQ |
| 19 | FAQ muck | 축약 | muck=pot 포기 · 자기 카드 보유 조건 · main/side 전원 공개 | FAQ |
| 20 | FAQ slow roll | 페널티 없음 | + TR 47 · TDA 70 | FAQ |
| 21 | FAQ all-in 순서 | 축약 | TDA 16(남은 카드 전) · payout 순서 · LAR 149 · face-down 꼬리 | FAQ |
| 22 | front-matter | 10-13 · 07-12 | 10-14 · 10-13 | — |

hi 고유 보존: 실수 4의 «हैंड अपने आप dead नहीं होती»(EN에 없음 · WSOP 117은 페널티이며 dead 규정 아님 — 모순 없음).
기반영/생략: tldr(이미 EN 동형) · 126.g 예외 괄호(e30fde28로 기반영) · cards speak 본문·FAQ(TDA 14 의미 기반영, 표현만 차이) · J♥ 10♥ 예시(이미 «10» 표기) · g: 키 문장(L50, EN 미변경 훅).

## 4. holdem-hand-rankings (masterUpdated 09-07 → 10-06)

| # | 위치 | 전 | 후 | EN 근거 |
|---|---|---|---|---|
| 1 | 전체 목록 도입 | (없음) | 5장 확률로 정한 순서 · 7장에선 빈도 교차(river까지 high card가 two pair보다 드묾) · 순위 불변 괄호 | L29 헤지 |
| 2 | 맺음말 스캔 | «सूट → straight → जोड़ी» | «flush → straight → जोड़ी» | suits→flush |
| 3 | front-matter | 10-13 · 09-07 | 10-14 · 10-06 | — |

기반영: royal «make one yourself» · three of a kind 세 가지(board trips) · QQ 문제 «board adds a pair» · 확률 절 «five cards» · Stud 괄호 · Short Deck A-6-7-8-9 · FAQ kicker 다음 카드 · FAQ full house «higher full house».
생략(hi에 대응 문장 없음 — hi는 FAQ 세트·도입 문단이 원래 더 적다): L29 앞 문장 본체 · L75 «all three kinds» 도입 · 스캔 절 EN «flush, then straight» 경험 문장(hi는 3단 목록만) · FAQ flush 정의 · FAQ what beats flush · FAQ SF vs quads · FAQ worst hand(9-8-7-5-4) · FAQ three pair «In Hold'em».
§13: 핸드 예시는 건드리지 않았다. 추가 괄호의 수치 근거 = hi 표 High Card 17.4% < Two Pair 23.5% (EN 동일).

## 5. Astra 교차검수

`codex exec -m gpt-6-astra -s read-only` · 레포 밖 스크래치 사본(hi 4 + en 4 + hi-changes.diff). 바뀐 줄만 대상.
결과: **의미·수치·조항번호 불일치 0건**. FIX 10건은 모두 힌디 문법·자연스러움 문제였다.
(⚠ 첫 실행은 공용 스크래치 폴더 «astra-ma542»를 다른 레인과 같이 써서 다른 레인의 PROMPT를 읽었다 → 무효 처리하고, 이 레인 전용 폴더 «astra-ma542-hi-b-a6c0»에서 다시 돌렸다.)

| # | 파일·줄 | Astra 지적 | 판정 | 사유 |
|---|---|---|---|---|
| 1 | all-in L52 | बची हुई सारी community कार्ड → 성 일치 | 채택 | 이번 회차에 고친 문장 · कार्ड 남성 |
| 2 | all-in L134 | «सीमा … नहीं छूती» 직역투 | 채택 | «यह पाबंदी … लागू नहीं होती» |
| 3 | all-in L134 | «minimum कुल … है» 불완전 | 채택 | «न्यूनतम कुल रक़म … का जोड़» ($24 동일) |
| 4 | all-in L214 | «minimum कुल पर» | 채택 | «न्यूनतम कुल रक़म पर» |
| 5 | blind L43 | के दो सीट → की दो सीटें | 채택 | 이번 회차에 고친 문장 |
| 6 | blind L145 | «बराबर छूटता» = 무승부로 읽힘 | 채택 | «औसत नफ़ा-नुक़सान शून्य (break-even)» · 27% 그대로 |
| 7 | rankings L331 | «भिड़ंतें अभ्यास करें» 문법 | 기각 | 이번 회차에 안 바꾼 기존 표현(바꾼 건 스캔 순서뿐) — 범위 밖 |
| 8 | showdown L80 | ईमानदारी = 정직이라 어색 | 채택 | «निष्पक्षता बनी रहती है» |
| 9 | showdown L138 | 비교 구문 깨짐 | 채택 | Astra 제안문 그대로 |
| 10 | showdown L146 | «pot लगभग तय है कि गया» 어순 | 채택 | «लगभग तय है कि pot … निकल गया» (헤지 유지) |
| 11 | showdown L183 | बची हुई → बचे हुए | 채택 | 새로 넣은 문장 |

(Astra FIX 10건 중 L134 한 건이 두 자리라 표는 11행) 채택 10행(#1–6, #8–11) · 기각 1행(#7)을 반영 후 4편을 다시 audit했다(아래 §6).

## 6. 게이트

- `npm run audit:hard -- --locale=hi --slug=<4편 각각>` — 4편 모두 0err 0warn · 미러 드리프트 🔴 0(4편은 꼬리 드리프트 목록에서 빠짐). 커버리지: showdown은 «카드 문단 1»(J♥ 10♥ / Q♥ 9♥ 8♥ 2♣ 5♦) 미판정 → 손 검산: J♥10♥ + 보드 → Q-J-10-9-8 하트 straight flush, K♣Q♦ → Q 원페어(K 키커) → 단독 승 ✅ (미변경 문단).
- `npm run check:intl-links` — 통과 (729편, 25개 언어).
- `npm run build` — exit 0 (sitemap 74 blog + 729 intl). sitemap 원복.
