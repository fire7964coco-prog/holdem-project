# EN-먼저 작업 대기열 (EN 원문 판정 → EN 정정 → 로케일 전파)

> **신설 2026-09-10** — `session-handoff.md`가 288KB로 불어 통독이 불가능해진 대청소에서 갈라져 나왔다.
> 핸드오프는 «다음 할 일 + 미결»만 담는다. **작업 대기열 본체는 여기다.**
> 원문 = `docs/handoff-archive/2026-09-10-session-handoff-full.md`(통독 금지 · grep으로만)
>
> 🔴 **규율**: 로케일에서 고치지 마라 → **EN 원문 판정** → EN 정정 → 로케일 전파.
> 정본이 있는 자리(pt·id·de에 정정본이 있는 경우)는 **이식만** 하고 창작하지 않는다.
> EN을 건드리는 커밋은 **MB 한 줄로 검수장에 통지**한다(MA-123 요청 1 · 상시).

---

## 0. 🔴 우선 묶음 — 2026-09-10 게이트가 실증한 «구조 결손» (A~C)

`npm run check:structure`가 처음으로 잰 자리다. **세 개가 한 뿌리다** — EN 회차가 로케일에 통째로 안 갔다.
「`check:drift` ✅는 «날짜 진실»이지 «내용 진실»이 아니다」의 실물.

| 축 | 실측 | 대표 자리 |
|---|---|---|
| **A. h2·row 결손** | 🔴 핵심 7편 | 🔴 **de `holdem-tiebreak-rules`에 「Do Suits Matter in Poker?」 절이 통째로 없다**(ja·zh는 보유 · **§13 인접** = 무늬 서열) · id·pt도 −1 · zh-hant `hand-rankings` h2 −3 + row −11 · es `glossary` row −3 |
| **B. faq 결손** | 60편 | de `drawing-odds` 11문 중 **3문 부재**(flush draw 정의 · four vs three · straight draw) · de·pt가 여러 편에서 8~10문 ↔ EN 11문 · **id·pt `hand-rankings` 12 ↔ EN 20**(구 대기열 46 = 이 집합의 일부) |
| **C. link·li 결손** | 🟢 **핵심 0편 — 종결(2026-09-10 재판정)** | 🔴 **「link 44편 · li 7편」은 게이트 아티팩트였다.** `check:structure`의 링크 정규식이 이 레포 관행인 **썸네일 링크**(`](/ja/blog/slug "thumb:/images/….webp")`)를 통째로 못 봤다 — 닫는 괄호를 바로 요구해서다. `a362692e`(09-10 14:29)가 정규식을 고쳤고, **그 뒤 재측정 = link 핵심 0 · li 핵심 0**(꼬리 he·hi·ms·tr·vi 각 1건은 소수 언어 몫). 🪶 규모 실측(게이트가 보던 것/thumb라 안 보이던 것): en 324/155 · ja 342/156 · zh 339/157 · es 372/227. **다시 열지 마라 — 대표 자리로 적혀 있던 `3bet-pot-cbet`·`low-board-check-raise`·es `wsop-2026`는 전부 링크를 «가지고 있었다».** 근거 = ja 회차 9 §5-G 1 |

착수법: `npm run check:structure -- --only=h2|row|faq|link|li` · `--locale=<loc>` · `--slug=<slug>`
🔴 의도적 편차는 `docs/locale-intentional-diffs.md`에 **등재해 닫아라** — 안 닫으면 게이트가 매 회차 또 집는다.

---

## 1. 세션 1 렌즈 발견 — EN-먼저 판정 후보 38건

전부 **EN 상속**이라 로케일에서 임의 소급하지 마라. ⑤·㉟는 3번 독립 재발견되어 우선순위가 올라 있다.

| # | 무엇 |
|---|---|
| ① | EN wpt NSW 서술의 11개월 공백(캡 «through Sep 2026»→«from Aug 2027» · 2026-10~2027-07 한도 미정 — 1차 출처 재확인) |
| ② | EN apt «개막 전 마감» 거짓 — 실은 3자리다 🔴 **EN을 따라 되돌리지 마라** |
| ③ | EN bad-beat overpair 행 «fills on the river» — 65%는 두 장 기준이라 «turn or river»가 정확 |
| ④ | EN ept 비용표 — Gold Pass에 €690 포함인데 «Food & extra days €400–600» 만액 계상·총액 무상계 |
| ⑤ | EN bad-beat 잭팟 분배 표 라벨 «Rest of the table»만 구표현 — **3번째 독립 재발견 · 우선순위 상향** |
| ⑥ | PDF 자산 «Suited adds only ~2–3% equity» ↔ 본문 «~2 percentage points» |
| ⑦ | es glossary «Mano a mano»가 hand-for-hand·heads-up 두 항목에 중복 |
| ⑧ | EN bubble 핸드포핸드 스톨 불릿 — 정의문이 사실상 권고로 읽히고 H4H 개시 후 스톨 실익 0 한정 부재 |
| ⑨ | content 종단 `.trim()` — EN 56편 전부인데 ja(ept·wpt·wsop)·es·de·zh 일부 미이식 |
| ⑩ | EN blind-meaning «Two habits fix most of it» 뒤 불릿이 3개 |
| ⑪ | EN beginners 실수 인트로 «none of them are about strategy»가 실수 3~5와 모순 |
| ⑫ | EN beginners 2·4법칙에 «×4는 턴·리버 두 장을 다 본다는 전제» 캐비어트 부재 |
| ⑬ | EN·pt showdown all-in FAQ에서 «side pot 경합 시 누가 먼저 여는가»가 `8ee6b047` 정정 때 소실 |
| ⑭ | EN reading-the-board «How common» 표 헤더 — C(7,5)=21 조합 가짓수를 빈도로 라벨 |
| ⑮ | EN flush-vs-straight 추상 표(스페이드vs하트) — pt·id는 보드 공유형이 정본 |
| ⑯ | EN hand-rankings·tiebreak `:::tiebreak` 첫 행 «Royal Flush｜Always a tie» — 문자 그대로는 거짓 |
| ⑰ | EN kicker two pair FAQ «Q-7-7» 3장 보드로 쇼다운 비교 + EN FAQ↔H2 축어중복 9건 |
| ⑱ | EN outs 변환표 컬럼 «Turn only (1 card)» 라벨 오류 — **3렌즈 독립 수렴 + 기계 검산** |
| ⑲ | EN card-counting steps «(you're all-in, or the river is free)» — 플랍 ×4 조건 불완전 |
| ⑳ | EN drawing-odds 소품 2 — «one in six on a single street» · «exactly four flops» |
| ㉑ | EN pot-odds·equity FAQ «35% > 25% → call» 예문에 «두 장 전제» 무언급 |
| ㉒ | EN odds 클러스터 구조 판정(SEO 렌즈) — 태그 카니발 7쌍 · probability FAQ 5문 호스팅 |
| ㉓ | EN 3bet polarized 표 «flat 중간 QQ/AQ/TT» + «Pakai saat: Anda di blinds» 조합이 블라인드 QQ 플랫으로 읽힘 |
| ㉔ | EN 3bet fold-to-3bet 표 ~35% 행 «3-bet and call them value-heavy» — 서술 방향 불일치 |
| ㉕ | EN position-play SB 행 «~40% (raise-or-fold) … never flat»이 국면 한정어 없이 무조건형 |
| ㉖ | EN limping `==g:==` 하이라이트가 경고문에 초록 — g=권장/r=경고 관례 위반 |
| ㉗ | EN shc UTG 13% 구성 3중 충돌 — **판단 대기 #1과 같은 갈래라 함께 판정** |
| ㉘ | EN when-to-fold 표 마무리 문단이 `</div>` 안쪽 |
| ㉙ | 전략 클러스터 이미지 재사용 3장 + limping↔strategy readnext 썸네일 상이 — 18언어 공용 자산 |
| ㉚ | 소품: position-play OOP 60–85% 하한 산술 긴장 · positions «one middle seat»↔LJ · cbet OOP 40–50 ↔ position-play 30–45 |
| ㉛ | EN rake NL50 «온라인» 예시가 cap $4인데 같은 글이 온라인 캡을 $1–$3로 두 번 선언 — 자기모순 |
| ㉟ | EN bad-beat 잭팟 절이 자기 기준과 긴장(잭팟 자격 핸드 다수는 suckout 없는 cooler) |
| ㊱ | EN bubble «pay the bubble» FAQ gloss가 헐거움 |
| ㊲ | EN bubble H4H Stalling «It works precisely because tanking is free» — 원리상 불성립 ⚠ `1392148d` 검수장 판정 산물이라 **재론 절차 필요** |
| ㊳ | EN tvc big-blinds FAQ 무조건 맥스 바이인 권고 — 초보 헤지 부재 |
| ㊴ | EN wpt WC 좌석 — 공식 «nine WPT World Championship tickets» 9장 분포 부재 + 통화 미표기 |
| ㊵ | EN bubble 동시 탈락 분기의 TDA 귀속 오류 — TDA RP-8-A 축어는 테이블 무관 «share» |
| ㊶ | EN apt 소품: 일정표 시간순 · 환율 3계열 공존 · Country Exclusives «$1.684» 이탈 · $183.570 절사 · 예산표 행합-총계 규격 상이 |
| ㊷ | EN tournament 소품: 안테 시점 · 홈칩 FAQ «That's why» 인과 · 타임라인 Level 1만 60분 + 스톨 페널티 조항 번호 부재 |
| ㊸ | pt RISKY 40 회차(`e3f5a3a2`)가 pt만 고친 **EN 동형 30건** — 목록·문안 = `docs/reply-to-review-2026-09-04-m089.md` §2·§4 |

🪶 ㉜㉝㉞(인포그래픽 alt 3건)는 ✅ 종결(`781301e4`).

---

## 2. 레인이 올린 EN-먼저 묶음 (회차별)

| 출처 | 무엇 | 비고 |
|---|---|---|
| **ja §5-2** | `holdem-all-in-rules` «베팅 재개» TDA 조항 번호 — `docs/sources/tda-2022-shortform-rules.txt` L114 **Rule 47 «Re-Opening the Bet»** 축어 확보 → 번호를 «단다»로 기울되 EN 문안 + 24로케일 | 중 |
| **ja §5-3** | EN `holdem-betting-actions`에 «50% 룰» FAQ 없음(ja는 TDA 43-A 축어로 신설 · 질문 수요 16) — EN 키워드 실측(PAA·lowfruits) 후 판단 | 소 |
| **ja §5-3 잔여** | kicker·tiebreak 「only one player can hold that exact pair」 → 「once one of that rank is on the board, only one player can hold the other two」 · EN 2곳 + 9로케일 | 소 |
| **ja §5-4** | EN `texas-holdem-rules-for-beginners`에 매너/불문율 H2 없음(ja는 `ポーカー マナー` 140/SD22 실측 · TDA Rule 70 축어 8항목) | 소 |
| **ja 회차 3 §5-A** | **확률 클러스터 12건** — 🔴① equity FAQ 「~64% against three **players**」 인원 어긋남(정답 = 상대 3인) ② probability 「3 numbers to burn in」이 「you call — every time」으로 닫음(**이 클러스터 최대 위험 · D유형**) ③ 2倍4倍 절에 「2장 볼 때만」 부재 · 🟠 ④ outs 표 /47↔/46 ⑤ 하프팟 35% ⑥ 오버벳 히어로콜 ⑦ 오버카드 6아웃 할인 ⑧ card-counting 단정 3자리 · 🔴⑨ **「the house takes its rake either way」가 ja에서만 어긋난다**(일본 어뮤즈먼트=시간제) → **EN 수정 vs `locale-intentional-diffs` 등재 헤드 판정** ⑩ 폴드에쿼티 33% 헤즈업 전제 ⑪ 「realize more than」 ⑫ implied odds 뒷스택 4배 | 중~대 |
| **ja 회차 6 §5-D** | ① EN `holdem-cooler` → `holdem-bad-beat` 내부링크 **0회**(cooler가 bad beat를 13회 부름) → EN 먼저 열고 13로케일 ② EN `holdem-rake` FAQ "How do you reduce rake?" **804자** 분리 or 본문 이관 | 소~중 |
| **zh 회차 3 §5-2-C** | **확률 7건** — ① card-counting 欺诈 층위(TDA 69 vs 약관) ② **TDA Rule 5 라이브 핸드 앱·차트 금지 침묵**(D유형) ③ implied-odds 9 outs → 톱페어 상대면 15 outs 32.6%(절 전제 붕괴) ④ equity 세미블러프 «두 장 본다» 전제 ⑤ probability 「7.5:1」 이론 하한 홀로(형제는 15:1) ⑥ equity 弃牌率 두 뜻 ⑦ equity·implied-odds H2 리드↔FAQ 축어중복 65~78% · **③④는 §13 손검산 필수** | 중~대 |
| **zh 회차 4 §5-12** | **전략 9건** — 🔴① `position-play` c-bet 표가 **팟 종류를 섞었다**(OOP 40~50% ↔ 자사 솔버 실측 97.8~98.4%) ② position-play L179 ↔ limping L169 정반대 지시 ③ limping 「shallow-stacked」 bb·캐시/토너 미명시 ④ continuation-bet 「토너는 half pot or less」가 앞의 1/3보다 큼 ⑤ shc L114↔L124 자기모순 ⑥ when-to-fold 「so that's a call」 가격 없이 ⑦ 수딧 리버 6.5% → **6.40%** ⑧ `holdem-3bet` 4벳 3.06x ↔ FAQ 2.5x ⑨ EN 블록↔tldr 축어중복 73/50자 → «tldr=전체 요약 / 직답=첫 H2의 답» 역할 분리 | 중~대 |
| **zh-hant §5-8-3** | `holdem-hand-rankings` «희귀할수록 상위» 원칙을 7장 기준 표가 반증(高牌 17.4% < 兩對 23.5%) → «순서는 5장 기준으로 정해졌다» 각주 1줄 · 13로케일 | 소~중 |
| **zh-hant §5-8-5** | `holdem-flush-vs-straight` L158 「36 combinations (~0.00139%)」에 5장 기준 표기 없음(자매편은 7장 0.0279% · 20배 병존) · 8로케일 | 소 |
| **zh-hant §5-11** | 🔴 11-1 `holdem-card-counting:96` 「스트레이트 아웃이 보드에 있으면 dead out」 = **홀덤에서 성립 불가**(보충 랭크가 보드에 있으면 이미 완성) · 다음 절 七張梭哈에서는 성립 → **조항이 잘못된 절에 놓였다** · 🟠 11-2 ×4 과대추정 임계 「8 초과」 ↔ probability 「9 초과」(실측 교차점 6~7) — 🪶 ja §5-A ⑮가 같은 자리를 독립으로 잡았다 | 소~중 |
| **zh-hant §5-22** | `holdem-bubble` 3건 — 🔴 22-1 手手制 「長考는 시계상 무료 — 그래서 유효하다」가 **D유형**(WSOP Rule 126.c 「each hand will run 2 minutes off the clock」이면 레벨이 핸드 수로 가므로 長考해도 봐야 할 핸드 수가 안 준다) · 🟠 22-2 泡沫因子 P 정의(실제는 P+c) · 🟠 22-3 「6인 FT BF 2.0 起跳」 전칭(칩리더 1.0~1.3) · **22-1은 §13 손검산 필수** | 중 |
| **솔버 랜딩** | 🟠 트레이너 문턱 `0,08bb` 반올림 모순(실제 경계 22,5×0,35% = 0,07875bb) · «range advantage»를 총 에퀴티 지분과 등치 · GTO Wizard «방식» 1차 출처 없이 단정 — **랜딩 10파일 동시** 🔴 단 **랜딩은 잠겨 있다**(settled-decisions §1-A) | — |
| 🆕 **ar GPT 교차 2026-09-10** | **규칙 클러스터 11건**(아래 §2-A 표) — 이 프로젝트 **최초의 아랍어 교차 렌즈**가 올린 것인데 **11건 전부 EN 동형**이라 ar만 고치면 «ar이 혼자 맞는 상태»가 된다. 🔴 룰북 축어를 이미 확보해 뒀다(§2-A 「1차 출처」 열) | 중~대 |

### 2-A. 🆕 ar GPT 교차검수(2026-09-10)가 올린 EN-먼저 11건

> 출처 = `홀덤검수/GPT검수보고서_ar_A_규칙4편_2026-09-10.md`(A#) · `…_ar_B_규칙3편+대회vs캐시_…md`(B#) · 동결점 `61bc1e85`.
> **본체가 전건 원문 재판정 완료**(2026-09-10). 아래는 «채택 = EN 정정 대상»만 남긴 것이다.
> 🔴 룰북 축어는 `pdftotext`로 뜬 사본에서 직접 확인했다 — WSOP 2026 **토너먼트**와 **Live Action**은 **같은 번호가 다른 조항**이다(§117이 실증).
> 🪶 기각 3건은 되살리지 마라 — 아래 「기각」 절.

| # | EN 자리 | 무엇이 틀렸나 | 1차 출처(축어 확인함) | 급 |
|---|---|---|---|---|
| **B#2** | `holdem-all-in-rules` 「Multiple short all-ins…betting reopens for players who already acted」 | 재개방은 **플레이어별**이다. 누적이 임계를 넘어도 «자기 차례가 돌아왔을 때 풀레이즈를 마주하지 않는» 사람에겐 안 열린다 | TDA 2024 **§47A** 「…are not facing at least a full bet or raise **when the action returns to them**」 | 🔴 §13급 |
| **B#3** | `holdem-showdown-rules` FAQ 「a player who mucks without verifying they lost has no claim to the pot」 | **같은 글 본문과 자기모순** — 본문은 「엎어둔 카드가 자동으로 죽는 건 아니다」라고 정확히 쓴다 | TDA 2024 **§14** 「Discarding non-tabled cards face down does not automatically kill them…killed by the dealer when pushed into the muck」 | 🔴 §13급 |
| **B#4** | `holdem-showdown-rules` 올인 절·표·FAQ 「all hands shown face-up」 + 「payout order — nothing to do with when cards come up」 | **토너먼트 한정이 빠졌다.** 캐시는 사이드팟 참가자가 메인팟 전용 올인자보다 **먼저** 보인다 | LA **§149** 「If there is a side pot, participants involved in the side pot **should show their hands before** anyone who is all-in for only the main pot」 / TDA §16은 토너먼트 | 🔴 §13급 |
| **B#6** | `holdem-showdown-rules` 「exposing cards costs you a penalty under WSOP Rule 117」 | 캐시·토너를 함께 다루는 글인데 **어느 룰북인지 없다.** T §117은 카드 노출, **LA §117은 «결함 있는 덱»** — 완전히 다른 조항 | T **§117** 「Exposing Cards and Proper Folding…will incur a penalty but will not have a dead hand」 ↔ LA **§117** 「knows the deck is defective」 | 🔴 |
| **A#1** | `holdem-game-order` 「A losing player may simply muck」 + 쇼다운 FAQ | 토너먼트 올인 예외가 없다 | WSOP T **§70** 「All cards will be turned face up once a Participant is all in and all betting action for the hand is complete」 · TDA §16 | 🔴 |
| **A#5** | `holdem-betting-actions` FAQ 「Dealers rule string bets as a call of the original amount」 | 선행 베팅이 없는 스트링 **벳**은 «콜»이 될 수 없다(같은 글 실수 1이 「There's nothing to call」이라고 쓴다) | T **§103** 「attempting **a bet or raise** in multiple movements…」 | 🟠 |
| **A#6** | `holdem-betting-actions` FAQ + `holdem-game-order` 「The big blind alone may check」 | 라이브 포스터·라이브 스트래들도 자기가 낸 금액 위로 안 올라오면 체크할 수 있다 | LA **§159** 「When you post the big blind, it serves as your opening bet」 · **§160** · **§165** 「The player posting the straddle will have **last action** in the opening round…retains the option to raise」 | 🟠 |
| **A#2** | `holdem-betting-actions` 「compete for a main pot capped at your contribution, while the extra chips…form a side pot you can't win」 | 더 **짧은** 스택이 있으면 중간 올인도 사이드팟 1에 참가한다(50/100/200/200 → 메인 200 · 사이드1 **150에 100올인자 참가** · 사이드2 200) | 산수 직접 검산 · TDA §16 부록 | 🟠 |
| **A#3** | `holdem-betting-actions` FAQ 「If the all-in is a full legal raise, action reopens and you can re-raise」 | 받아줄 비올인 상대가 남아 있어야 한다 — 헤즈업이면 콜/폴드뿐 | TDA §16 부록 「no further betting is possible」 | 🟠 |
| **A#7** | `holdem-blind-meaning` 스탯 「2 \| forced bets posted **every single hand**」 | 데드버튼이면 SB가 빈 자리에 놓여 SB 없는 핸드가 생긴다 | LA **§155** 「…even if this means the small blind or the button is placed in front of an **empty seat**」 · T §85 | 🟠 |
| **B#5** | `holdem-showdown-rules` FAQ 「only a player who still holds cards or has tabled them may ask to see a hand — inalienably, only the last aggressor's」 | 보장된 열람권의 주체는 **리버 베팅을 콜한 사람**이다. 카드 보유는 «추가» 조건이지 주체 조건이 아니다(§18A와 §18B를 섞었다) | TDA **§18B** 「If there was a river bet, **any caller** has an inalienable right…**provided the caller** tabled or retains his or her cards」 | 🟠 |

**🔴 기각 3건 — 되살리지 마라(2026-09-10 본체 판정)**
- **A#4A** `holdem-blind-meaning` 「roughly 27% equity breaks even on the call」 — **문장이 명시적으로 팟오즈를 말한다.** 1.5 ÷ 5.5 = **27.27%**로 정확하고, «에퀴티 실현률·레이크»는 다른 층의 보강이지 오류가 아니다. GPT가 «팟오즈 손익분기»를 «실제 콜 수익성»으로 읽었다.
- **A#4B** `texas-holdem-rules-for-beginners` 「if it is lower, fold」 — 즉시 팟오즈 primer의 결론이고 임플라이드는 전용 글(`holdem-implied-odds`)이 따로 있다. 초보 허브에서 임플라이드를 끌어오면 primer가 무너진다. 🪶 다만 «임플라이드 링크 한 줄»은 값이 있을 수 있다(별건).
- **A#8** `holdem-betting-actions` 「if a hand isn't strong enough to raise, folding usually beats calling」 — **«usually»가 이미 경향 표현**이고 GPT 자신이 확신도 «아마»로 냈다. 블러프캐치 반례는 이 문장을 거짓으로 만들지 않는다.

---

### 2-B. 🆕 ja 경화 회차 9(2026-09-10)가 올린 EN-먼저 5건

> 출처 = `docs/harden-ja-진행.md` §5-G 4~8. **레인이 ja 단독으로 고치지 않고 올렸다**(프로토콜 §0 「EN에도 같은 결함이 있으면 로케일에서 고치지 않는다」).
> 🔴 **EN을 고치면 로케일 전파가 따라온다** — 아래 «동문 로케일»이 그 범위다.

| # | EN 자리 | 무엇이 틀렸나 | 근거 | 급 |
|---|---|---|---|---|
| **J#1** | `holdem-flush-vs-straight` H3 「Spot 2 — Drawing to both a straight and a flush」 | **제목이 본문과 어긋난다** — 본문 장면은 «스트레이트 **완성** + 플러시만 드로»다. 🔴 ja는 블록 ②만 정확하게 고쳐 두었으므로 **지금 ja는 블록이 옳고 제목이 부정확**하다(진행 파일 §3-J 8 「되돌리지 마라」) | 본문 대조 · EN 상속 오류 | 🔴 |
| **J#2** | `holdem-all-in-rules` ミス4 경험담 | **국면(캐시/토너먼트) 미명시** — 같은 글의 「토너먼트에서는 전원 핸드 원칙 오픈」과 충돌한다 | EN L219 동문 · 딜러 렌즈 | 🟠 |
| **J#3** | `holdem-continuation-bet` 「97%超」 | **사이즈가 빠졌다** — 근거 둘 다 **66% 팟 단일 사이즈**이고 33% 팟은 0.3~0.7%다. 임의 사이즈로 97% 벳하면 큰 누수(**D유형**) | EN L105 동문 | 🟠 |
| **J#4** | `holdem-strategy` 「コールに対して降りる人はいません」 | **멀티웨이에서 거짓** — 콜드콜이 뒤 사람을 죽인다(그게 스퀴즈의 전제다). 🪶 2026-09-09 `8cfd0b07`이 만든 문장 | EN 198 동문 | 🟠 |
| **J#5** | `holdem-bad-beat` 「A-K対Q-Qのような50/50」 | 실제는 **43.2/56.8**이다. 🪶 은어로는 통용되고 결론은 안 바뀐다 | EN 74·177 동문 | 🪶 |

🔴 **J#2~J#5는 「EN 동문」이 확인된 자리다** — ja만 고치면 다음 회차가 드리프트로 다시 집는다.
🪶 J#1은 **`docs/locale-intentional-diffs.md` 등재 대상이 아니다** — 의도가 아니라 EN 오류이므로 EN을 고쳐 닫는다.

---

## 3. EN 자체 정합 회차 (로케일 전파 전에 EN을 먼저 재야 한다)

- 🔴 **EN 56편 `updated` 필드 전수 대조** — zh-hant가 **세 회차 연속** 청구했다. 이 필드가 낡으면 `check:drift`가
  **모든 로케일을 영구히 ✅로 통과**시킨다(게이트가 원리상 못 보는 방향).
  판별식 = `git log --format="%h %ad" --date=short -- lib/posts-en/<slug>.ts`에서 **스타일 전용**(`8d2aba44`·`c8d8c75c`)·**메타 전용**(`dde72b36`) 커밋을 제외한 최신 날짜.
  이미 잡힌 6건: `holdem-probability` 08-11→**08-12**(`1d427c6d`) · `holdem-short-stack` 08-13→**08-21**(`8db7767b`) ·
  `korea-poker-marathon-2026` 08-31→**09-07**(`1f34f3e5`) 외 3. 🔴 **낱개로 고치지 말고 전수 회차로.**
- 🟠 EN 경쟁 페이지 언급 문구 잔존(rake:48 «no single competitor page» 등 3곳) — EN도 지울지 판정
- 🟠 EN↔pt FAQ 개수 드리프트(bubble 9↔7 · short-stack 9↔7 · tournament 9↔8 · icm 8↔7) — **위 §0-B와 한 판**
- 🟠 en `holdem-game-order`가 「who bets first」 계열 51노출을 못 받는다 — title·seoTitle 어디에도 who bets/goes/acts first가 없다
- 🟠 EN 제목 보강 3편(`holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds` — 제목에 poker/hold'em 없음) 🔴 **GSC 먼저**(노출 붙었으면 교체 순간 측정이 끊긴다) · 사장님 결재 대기
