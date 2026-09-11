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
| ✅ **ar GPT 교차 2026-09-10 → 종결(09-11 (7))** | 규칙 클러스터 11건 = EN 정정 + 7로케일 전파 완료. **ar 자체는 미전파**(사장님 지시) — §2-A~2-C 잔여 표 | — |

### 2-A~2-C. ✅ 종결 — EN-먼저 18건(ar 11 · ja 7) 회차 (2026-09-11 (7) · 경위 = WORKLOG)

EN 12편 정정 → 7로케일(de·es·id·ja·pt·zh·zh-hant) 전파 완료. 1차 출처 축어 = `docs/sources/`(TDA 2024 §14·16·18·43·47 · WSOP T §70·85·103·117 · LA §117·149·155·159·165).
🔴 **되살리지 마라 — 이 회차의 기각 판정 4건**(원문 판정 · 근거는 WORKLOG 「2026-09-11 (7)」):
- **A#4A** `blind-meaning` 「27% breaks even」 — 문장이 명시적으로 팟오즈다(1.5 ÷ 5.5 = 27.27%). 에퀴티 실현률·레이크는 다른 층.
- **A#4B** `texas-holdem-rules-for-beginners` 「if it is lower, fold」 — 즉시 팟오즈 primer의 결론. 임플라이드는 전용 글이 있다.
- **A#8** `betting-actions` 「folding usually beats calling」 — «usually»가 이미 경향 표현.
- **J#4** `strategy` 「nobody folds to a call」 — **참이다.** 콜은 누구도 폴드시키지 않는다(뒤 사람이 접는 건 «레이즈에» 접는 것). 완화 문안을 넣었다가 같은 글 표 행(「it never folds anyone out」)과 충돌해 **원문 복원**. 「콜드콜이 뒤 사람을 죽인다 = 스퀴즈 전제」는 방향이 반대(스퀴즈는 콜드콜러를 «압박»하는 것).

🟠 **이 회차가 남긴 잔여**
| 무엇 | 어디서 |
|---|---|
| **ar 5편 · fr 5편 미전파**(사장님 지시 2026-09-11 「경화·검수 안 한 두 언어는 제외」) — `check:drift` 🔴 핵심 5 = ar. 각 언어 경화 트랙의 A 구간이 EN diff(`git log --since=2026-09-11 -- lib/posts-en/holdem-{all-in-rules,showdown-rules,game-order,betting-actions,blind-meaning}.ts`)로 받는다 | ar·fr 경화 트랙 |
| **꼬리 15로케일(bn fa fil he hi it ms pl ro ru sw th tr uk vi) §13급 3건 미전파** — showdown-rules «올인 후 전원 페이스업» 토너먼트 한정(TDA §16 ↔ LA §149) · all-in-rules 누적 재개방 «플레이어별»(TDA §47A) · cards-speak FAQ «머크=권리 없음»(TDA §14). 판정 ⓒ(꼬리는 §13급만) 대상. 무자격 「WSOP Rule 117」도 17로케일에 남아 있다 | 꼬리 §13급 전파 회차 |
| 딜러 렌즈 #16 — LA §149 「올인자 먼저」는 원문이 **No Limit 한정**. 사이트 전체가 NLHE라 한정어를 안 붙였다(기록만) | — |
| 라틴 렌즈 #22 — EN `holdem-tournament` H2 「…Freezeout, PKO, Satellite, Deepstack & More」에 Turbo·Mystery Bounty 미반영 — §17 「노출 붙은 제목 단독 교체 금지」라 GSC 실측 후 | GSC 확인 후 |
| zh-hant `holdem-short-stack` 내부링크 11개(다른 로케일 10) — 이번 diff 이전부터의 차이(라틴 렌즈 발견) | zh-hant 레인 |

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
