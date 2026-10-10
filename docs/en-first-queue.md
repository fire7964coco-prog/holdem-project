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

## 1. 세션 1 렌즈 발견 — EN-먼저 판정 후보

전부 **EN 상속**이라 로케일에서 임의 소급하지 마라.
🟢 **①~㉑은 전건 종결(queue Q5-a · 2026-09-13).** 21건 중 **9건은 손대기 전에 이미 고쳐져 있었다** — `65dc0d1d`(09-02) · `125c83f5`(09-09) · Q4-a `b311d693`(09-12)가 먼저 닫았는데 이 목록이 낡아 있었다. 나머지 12건을 EN 정정 + 8로케일 전파했다. **전건 판정표 = `docs/harden-queue-진행.md` §1-Q5-a.**
🔴 **교훈**: 이 표의 «건수»는 착수 근거가 못 된다 — **원문을 먼저 열어라**(`absence-may-be-the-standard`).
🔴 **㉟는 3번 독립 재발견돼 우선순위가 올라 있다**(Q5-b 몫).

| # | 무엇 |
|---|---|
| ㉒ | 🟢 **대부분 종결(queue Q5-b · 09-13)** — 남은 것은 **c항뿐**: 직답 리드 4편(별도 회차 재료) |
| ㉗ | ✅ **종결(queue Q1 `16e8a9ac` · 09-11)** — 콤보 실측 58/112/172 · 13% 유지 · 목록 «지위» 문단 신설 EN+7로케일 · 판정표 `harden-queue-진행` §1-Q1 |
| ㉙ | 🟢 **거의 종결** — 남은 것은 **이미지 1장 제작**뿐(`holdem-starting-hands-premium`·`weak-ace-trap` 쌍 중 1장) |
| ㊲ | ⛔ **대상 부재(queue Q5-b 실측 · 09-13)** — 「It works precisely because tanking is free」류 문구가 **전 로케일 0건**이다. 🔴 «재론 절차 필요»가 아니라 **고칠 것이 없다** — 다시 파지 마라 |
| ㊺ | 🆕(queue Q1-11) `lib/render-markdown.ts:213,215` PDF 카드 크롬 영어 하드코딩 — `locale` 인자가 있는데 안 쓴다. 전 로케일 노출(코드 1곳) |

| ㊻ | 🆕(queue Q4-7 ① · 09-12) 🔴 EN `holdem-tiebreak-rules` 「The only suit order in the tournament rulebook belongs to stud and razz」는 **틀렸다** — 같은 룰북 용어집 `DEALER BUTTON` 축어 «the highest card by rank and suit to determine the initial position of the Dealer Button» = 스터드·라즈 밖에서 무늬 서열을 쓴다. 같은 문단이 바로 앞에서 그 드로를 설명해 **자기모순**이기도 하다. 8로케일 동형 |
| ㊼ | 🆕(queue Q4-7 ② · 09-12) 🟠 EN `holdem-when-to-fold` — 「bluff-catcher」가 본문 3회뿐이고 H2·FAQ·tags 어디에도 없다. 같은 글 L153에 **1.5x 오버벳 37.5%** 계산이 이미 있어 FAQ 1문 흡수 비용이 0에 가깝다(저볼륨 롱테일 집합전략) |

| ㊽ | 🆕(queue Q2c-2 ① · 09-12) 🟠 **§14-A 직답 공백** — `holdem-limping` 「4가지 이유」 절과 `holdem-drawing-odds` 셋마이닝 절에 직답 블록이 **de·ja·zh·zh-hant에만 있고 en·es·id·pt엔 없다**(교열 렌즈 실측). Q2-c의 이미지 삭제로 그 절이 H2 → 본문 직행이 돼 더 드러난다 |
| ㊾ | 🟢 **종결(queue Q7-a · 2026-09-12)** — `render-markdown`의 `height="630"`을 **파일별 치수표**(`lib/image-dims.ts`)로 교체했다. «675로 바꾸면 비-675가 어긋난다»는 딜레마를 «한 값으로 고정하지 않는 것»으로 풀었다. 산출물 실측 = 본문 `<img>` **1,417개 전부 실제 치수**(그 전엔 1,364개가 틀린 자리 예약 = CLS) · 게이트 `check:image-dims`가 `prebuild`에 물려 있다 |
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
| **꼬리 15로케일(bn fa fil he hi it ms pl ro ru sw th tr uk vi) §13급 3건 미전파** — showdown-rules «올인 후 전원 페이스업» 토너먼트 한정(TDA §16 ↔ LA §149) · all-in-rules 누적 재개방 «플레이어별»(TDA §47A) · cards-speak FAQ «머크=권리 없음»(TDA §14). 판정 ⓒ(꼬리는 §13급만) 대상. 무자격 「WSOP Rule 117」도 17로케일에 남아 있다. 🆕 🔴 **09-21 Q12-a가 꼬리 16에 ⓐ(올인 쇼다운 동시 공개 · TDA 16)를 `holdem-all-in-rules`에만 넣었다** — 꼬리의 `holdem-showdown-rules`는 **아예 열지 않았고**(fr·it·ru 표본 3편 전부 옛 문면 「전 국면에서 올인자가 먼저」) 그래서 **«두 글이 반대로 말하는» 교차 모순이 잠재한다.** 🔴 **열 때는 all-in·showdown을 한 묶음으로**(정본 `settled-decisions` §3-M) | 꼬리 §13급 전파 회차 |
| 라틴 렌즈 #22 — EN `holdem-tournament` H2 「…Freezeout, PKO, Satellite, Deepstack & More」에 Turbo·Mystery Bounty 미반영 — §17 「노출 붙은 제목 단독 교체 금지」라 GSC 실측 후 | GSC 확인 후 |
| zh-hant `holdem-short-stack` 내부링크 11개(다른 로케일 10) — 이번 diff 이전부터의 차이(라틴 렌즈 발견) | zh-hant 레인 |

---

### 2-D. ja 회차 11이 올린 것 (2026-09-11 · 헤드 머지 시 처리)

- **J#8** ✅ **종결(queue 회차 Q4-a · 2026-09-12)** — €330 Deep Stack은 **공식 #76(Aug 29)로 실재 확인**됐다(처방 ①). EN `ept-barcelona-2026-guide` 이벤트 표에 **€330 행 신설** + 예산표 하한 €825→€330 · 총액 €7,280–€11,550(ja는 항공권 제외판 €7,130) · 「최저가」 주장 4자리 정합(이제 €825 주장은 전부 **multi-day** 한정). 9로케일 전파 완료. 🪶 부수 확인: 「Mystery Bounty €1,650」은 **오독**이었다(공식 #48 = €3,250 Aug 25–27 · €1,650은 별개 이벤트 #64) — 우리 표가 옳다.
- **J#9** ✅ **종결(2026-09-11 (8))** — `holdem-bubble` tldr 「on a satellite bubble you fold everything, even aces」에 **multi-seat** 한정어(본문 L147은 있고 tldr만 없었다 · 싱글시트/승자독식 새틀라이트에선 조언이 반대 = D유형). EN + de·es·id·ja·pt·zh·zh-hant(각 본문이 쓰는 표기 승계).
- **J#10** ✅ **종결(2026-09-11 (8))** — `holdem-strategy` 「five of the six map directly onto the five decisions」인데 표의 Decision 태그는 4행뿐. 「Being too passive」 행 fix 셀에 **(Decision 4)** (判断4 = 플랍에서 베팅을 이어가는가 · 수동성의 반대). EN + 7로케일 동형 처리. ko는 표 구조가 달라 대상 아님.

### 2-E. 검수장 MA-130·MA-131·MA-136이 올린 것 (2026-09-11 · 우편함 회차에서 처리)

- **X-1** ✅ **종결(queue 회차 Q4-a · 2026-09-12)** — `holdem-blind-meaning` 「Nobody gets to skip their turn.」를 **either/or 문면**으로 교체(WSOP Live-Action **Rule 160** 축어 근거 · 같은 글 FAQ 「Alternatively, you can wait…」와 정합). EN + 9로케일.
- **X-2** ✅ **종결(우편함 회차)** — `texas-holdem-rules-for-beginners` L202 표·L435 FAQ 「any amount up to all your chips」 → 「from the big blind up to …」(NL 최소 오픈 = 빅블라인드 · A 96 «minimum legal amount»). EN + 7로케일.
- ✅ **종결(우편함 회차 · EN + 7로케일)** — MA-130 요청 1의 es 동형 3건: `holdem-game-order` 표 Fold·All-in 「Anytime」 → 「Any street — in turn」(A 84 non-standard/out-of-turn fold) · `holdem-showdown-rules` 「before/during the runout」 3자리 → TDA 16 축어 「tabled without delay once all betting is complete」 · 「can never be retrieved」 → A 109(식별 가능하면 회수 가능). MA-131 요청 2~4: `holdem-continuation-bet` tldr·L271 OOP 한정 · `holdem-kicker` FAQ L196 → L109 문면 · `holdem-card-counting` L96 misdeal→by mistake · L116 · L127 «any card room» 삭제 · `holdem-position-play` SB 행 「vs a raise」 · `holdem-bubble` 「WSOP Tournament Rule 126」 · `korea-poker-marathon-2026` 「9/4 단일 마감」 7자리 → 창구 종속(L125 정합).

### 2-F. queue 회차 Q6-c가 올린 것 (2026-09-16 · 머지 `c3d23cf2`) — ✅ **전건 종결(queue Q5-c · 2026-09-17 · 레인 `abdc7a21` · 머지 `6f498ec7`)**

- Q6c#1 AK vs 포켓페어(전수 열거 밴드 · EN + 7로케일 + zh-hant probability) · #2 kicker High card 행(1+4 · 8로케일 × 8자리) · #3 glossary 「pairs」→「terms」 · #4 Short Deck 「often」→ 규칙(WSOP Rule 366 · 13로케일). 되돌리지 마라 = `docs/harden-queue-진행.md` §3 「Q5-c」 6항 · 정본 승격 = `settled-decisions` §3-F.

### 2-H. queue 회차 Q10이 올린 것 (2026-09-21 · 머지 `51d79100` · **판정만 하고 안 고친 3건** · 전부 ①원본)

> 자리 = **계산기 도구**(`components/calculator/` + 12사본 + ko 클라이언트)이지 포스트가 아니다. 근거 전문 = `docs/harden-queue-진행.md` §5 Q10-4.

- **H-1**(🔴 높음) **`K9s`·`Q9s`·`J9s`(폴백 T4)가 `10-9s`(표 T3)를 엄격 지배** — 09-20이 닫은 `K10o < K9o`와 **같은 종**이다. 처방도 그때와 같이 **표에 T3으로 등재**하는 것인데, 등재하면 `desc`·`action`이 **12자리 × 3핸드** 새로 필요해 Q10 범위 밖이었다(브리프 `calculator-landing-rewrite.md` §5 「미등재 수티드 커넥터·K9s·Q9s 항목 보강 후보」와 같은 자리 — **같이 닫아라**).
- **H-2**(🔴 높음) **아웃츠 탭 상단 카드가 「Rule of 4 / Rule of 2」 캡션 바로 아래 «정확값»을 찍는다**(9아웃츠에서 화면 35.0% ↔ 9×4 = 36). **딜러 밖 두 렌즈(수학·교열)가 독립 수렴**했고, Q10 ⑥이 닫은 `exactNote`와 **같은 축**이다. 선결 판정 = 「캡션이 **스트리트 라벨**인가 **값 라벨**인가」 · 걸린 것 = 12로케일 문자열.
- **H-3**(🟠 **사장님 판단 자리**) **폴백 T5 56타입 중 50타입(600콤보)이 T4 최약체 `32s`보다 세다**(K8o 56.0% ↔ 32s 36.1% · 겹침 19.8pp). 🔴 **09-20 기각안(수티드에 «작은 쪽» 바닥)을 되살리는 게 아니다** — 남은 방향은 **오프수트 줄을 넓히는 쪽**이고, 콤보 산술상 **23번째 타입이 정확히 `K8o`**(276콤보 = 666 · 22타입 654보다 663에 가깝다).

### 2-I. queue 회차 Q12-b가 올린 것 (2026-09-21 · 머지 `7263564a` · **원장 미등재 신규 재료** · ①원본 = 딜러 렌즈)

> 한 묶음이다 — **`holdem-straddle` 프레이밍 3자리가 버튼 스트래들·리스트래들을 모른다.** **EN-먼저 → 8로케일 전파.**
> 1차 출처 축어 = `docs/sources/wsop-2026-live-action-rules.txt` **B 165**(L798–807), 헤드 재확인 완료:
> 「A straddle may be posted from **either Under the Gun (UTG) or the Button**, with the **Button straddle taking precedence**.」 ·
> 「In 5-5-10 and above: One additional straddle is permitted. (e.g. … **a re-straddle, from any position**, allowed up to a maximum of $40.)」

- **I-1**(🔴 높음) `game-order`·`betting-actions`의 「a live straddle … they act **last** preflop」 — **리스트래들이 서면 최초 스트래들러는 마지막이 아니다.** 🪶 Q12-b가 이 문장을 **그대로 두고** 옆 자리만 고쳤으므로, 고칠 때 §3-N의 정관사 기준 문면과 **같은 문단**임을 유의.
- **I-2**(🔴 높음) `blind-meaning` L121 「posted **from the seat left of the big blind**」 — UTG만 말하고 **버튼 스트래들을 빠뜨린다**(B 165는 버튼 쪽이 **우선**이라고까지 적는다).
- **I-3**(🟠 중간) 같은 글 L127 「It's **the one time the button pays a blind**」 — 같은 글이 스트래들을 「a **voluntary extra blind**」로 정의하고 버튼 스트래들도 허용되므로 **자기모순**이다. I-2와 한 편집으로.

### §2-J. queue Q13-a가 올린 것 (2026-09-22 · MA-147 ②③ 1/2 머지)

> 둘 다 **`holdem-cooler` 한 글** 안이고 **EN-먼저 + 8로케일**이다. 🔴 이 3편은 꼬리 17로케일에도 KO에도 **없다**(실측) — 전파 범위는 `en de es id ja pt zh zh-hant` 여덟뿐.

- **J-2**(🟠 중간 · 16자리) **쿨러 «정의문» 「could never correctly fold」가 무조건형이다**(tldr + FAQ① = 8로케일 × 2자리 · **es만 `:151`에 이미 헤지 보유**).
  🔴 Q13-a는 **«정의라서 유지»로 판정했다**(§1-Q13-a 기각 ⓐ — 같은 글이 「Can You Actually Avoid Coolers?」에서 이미 별표를 달았다). **다시 열려면** 그 판정을 뒤집는 근거가 먼저다: 교열 렌즈 근거 = 「KK 예시가 **같은 문장에** 붙어 있어 정의문이 아니라 주장문으로 읽힌다」. **판정부터, 편집은 그다음.**

### 2-K. ms 단건 경화(hand-rankings · tournament-vs-cash)가 올린 것 (2026-09-24 · 본체 · 렌즈 4종 · 전부 ①EN 원문 유래)

ms에서는 **고치지 않았다**(EN과 갈라지지 않게). EN을 고치면 ms 포함 전 로케일 전파.

| # | EN 파일·자리(축어) | 쟁점 | 렌즈·확신도 |
|---|---|---|---|
| K1 | hand-rankings 퍼즐 1 「make **trip queens**」 | 같은 글 #7 정의상 포켓 QQ + 보드 Q = **set**(trips 아님) — 자기모순 | 교열 · 높음 |
| K2 | hand-rankings 퍼즐 2 끝 「before you assume a **straight flush**」 | 퍼즐 교훈(«그냥 flush로 과소평가하지 마라»)과 결론이 반대 방향 | 교열 · 중상 |
| K3 | hand-rankings #6 「**The nuts:** A-K-Q-J-10 ("Broadway") is the highest straight」 | nuts ≠ 최고 스트레이트(보드에 따라 너츠가 아님) — 라벨 «Highest:» | 교열 · 중 |
| K4 | hand-rankings L29 「by the river a lone high card is actually rarer than two pair」 | 7장 기준 high card(17.4%)는 **pair(43.8%)보다도** 드물다 — 불완전 | 교열 · 낮중 |
| K5 | hand-rankings flush FAQ 2곳 「the highest card wins」/「the higher top card wins」 | 맨 위 카드가 같으면 다음 카드로 — 본문 #5·tiebreak 표와 결이 다름 | SEO · 중 |
| K6 | hand-rankings 「Are … Same in Every Game?」 Short Deck 행 | 다수 숏덱(Triton 등)은 **trips > straight**도 바뀐다 — «main exception»이라 오류는 아니나 누락 | 딜러 · 낮중 |
| K7 | hand-rankings 「90% of beginner mistakes」 · 「the same probabilities every poker solver … uses」 | 출처 없는 정밀 통계 · 솔버는 빈도표를 쓰지 않는다 | 수학·딜러 · 낮 |
| K8 | tournament-vs-cash 세금 FAQ 「In most countries, yes」 | 영국·호주·EU 다수는 오락 도박 소득 비과세 — «many countries»로 완화 (합법성 판정 금지 범위 안에서) | 딜러·교열 · 중 |
| K9 | tournament-vs-cash 표 「Play short scheduled events → Tournament」 | 글 전체(토너 = 긴 세션)와 모순 · 바로 아래 「Play short sessions → Cash game」 | 교열 · 높음 |
| K10 | tournament-vs-cash 「Player situation / Better fit」·「Your situation / Start with」 표 + 불릿 2목록 | 「짧은 세션 → 캐시」가 4회 반복 — 표 하나로 통합 | 교열 · 중 |
| K11 | tournament-vs-cash H2 「Tournament Chips Are Not Money」·「Fixed Blinds vs Rising Blinds」 첫 문장 | 직답이 아니라 도입 문장 — 직답이 둘째 단락에 있다(GEO) | SEO · 중 |

### 2-L. 우편함 수신분 — MA-144 · 153~157 · 167 · 174~178 · 172·179 · 182·183 (2026-09-25~26 · 회신 MB-083 · MB-088)

> 본체: `docs/harden-brief/mailbox-intake-2026-09-25.md`(HEAD `326728ed` 실측 · 항목별 좌표). 여기엔 묶음만.

| 묶음 | 상태 | 규모 |
|---|---|---|
| **L-1 로케일 고유**(es·zh·zh-hant) | ✅ **종결 09-26** — es `14845d6f`(10) · zh `b19932db`(25) · zh-hant `9a991e37`(31) · EN 동형 이월분(es ~10 · zh·zh-hant equity 벳 문턱)은 L-2에 합침 | — |
| **L-2 EN-먼저**(MA-144 ⓐⓑⓒ · 167 fish · 174 paired 13%·monotone 74s·history · 175~178 통지 · L-1 es 이월분) | ▶ **착수 09-26**(착수 공지 MB-088) — intake = `docs/harden-brief/l2-en-first-intake-2026-09-26.md`(범위 = 현행 EN 원장 미결 **262행** · MA-179 철회분은 원장에서 이미 OK) · 회차 **L-2a 용어 ✅ `18b8eaf9`(MB-089)** → b GTO → c 전략 → d 확률 → e 족보·규칙 → f 계산기 AQo↔KQo(MA-183) → g 로케일 전파 | 262행 · 🔴 paired-board는 **ko 원본(23%)도** 13.0%로 |
| **L-3 계산기**: 문구 5종(A55·A81·A85·B22·B111) + orHigher 3 · spr.low 3 | ✅ **종결 `0932f093`**(09-25 · ko 동형 3자리 포함) · 남긴 것: 푸시/폴드 토글 «BB ante ON» 라벨(A81 인접 · intake 채택 범위 밖) | — |
| **L-3 계산기 레인지 3건**(K10o↔Q10o 역전 · A10s · 88) | ✅ **종결 `104fac47`**(09-25 · 169핸드 지배 쌍 1,168 역전 5→0 · A3s·A2s 역전 추가 발견·정정 · 권고안 수정 2자리는 intake §3) | — |
| **L-4 판단 필요**(cooler 인접 2 · outs spade · id melepas) | ⏸ — cooler 인접 2는 MA-180 ⓒ «본체 진행 · 한정절 자리와 겹치면 한 커밋» → L-2a에서 | — |
| **L-5 de 고유**(MA-182 ① · 6자리: outs FAQ «zu treffen» · limping Kurze Antwort · cooler Kurze Antwort 3문장 · position-play «schlechteste Sitz» · c-bet «Immer dann» · card-counting #24) | ⏸ 채택 — cooler 3문장은 L-2a와 한 커밋 · 나머지는 de 로케일 회차(EN 무관 · 같은 글 정답 자리 참조) | 6 |

### 2-M. 우편함 수신분 — 검수장 PT 재판정 보고 MA-215 · 217~225 (판정 09-28 · 회신 MB-110)

> 판정표 정본 = `docs/harden-brief/pt-rejudge-intake-2026-09-28.md`(잣대 §0 · 행별 처리 §1~4 · 렌즈 §5).
> 🔴 잣대: 검수장의 «블록마다 한정»을 그대로 받지 않는다 — 단독 추출 단위(tldr · 직답 · FAQ 답 · 표)와 명시 전칭어만 고치고, 초보 기본값으로 라벨된 전략 조언은 두었다.

| 묶음 | 상태 | 규모 |
|---|---|---|
| **M-1 EN + PT 판정·정정**(도착분 25편 · 181행) | ✅ `6164c748` — 채택 166 · 기각 10 · PT만 정정 5 · implied-odds `$114` 7로케일 동반 | EN 23 · PT 23 |
| **M-2 로케일 전파** | ✅ `25fe6027`(09-28 · MB-112) — 144파일 전량 대조 · 사본 스윕(로케일 고유 박스·캡션·FAQ) · 렌즈 3종 유형1 0 · check:drift 핵심 0. 결과·교훈 = 판정표 §8 | 핵심 144편 |
| **M-5 EN-먼저 후보**(사본 스윕 보류분) | 🪶 판정표 §8-1 표 15행 — EN 한 자리만 한정되고 같은 EN 글 다른 자리가 단정으로 남음. 우선 = kicker 194(FAQ끼리 자기모순) · showdown 170(본문 muck과 충돌) · betting-actions 113 캡션. 자동 착수 대상 아님(사장님 지시 시) | 15 |
| **M-3 남은 8편**(strategy 2 · tournament · glossary) | ⏸ 검수장 보고 도착 대기 → M-1과 같은 방식 | — |
| **M-4 남긴 것** | 🪶 판정표 §5 «남긴 것» 4항(probability «most common winning hand» 1차 자료 부재 · betting-actions 사이드팟 사본 · position-play 본문 3곳 · 길어진 FAQ 2개) — 자동 착수 대상 아님 | 4 |

### 2-N. 09-30 보고서 보완 2(질문↔답 어형 스윕)가 올린 것 (본체 · ①EN 원문 · 1건 · 자동 착수 금지)

| # | 글 | 자리 | 문제 | 제안 | 전파 |
|---|---|---|---|---|---|
| N-1 | `holdem-flush-vs-straight` | EN 129행 H2 «Flush vs Flush, Straight vs Straight — Who Wins the Tie?» 직후 131행 «Yes, one flush can absolutely be higher than another.» | «누가 이기나» 질문에 «Yes,»로 답한다(H2만 질문형으로 바뀌고 답 문장이 옛 형태로 남은 것). 사실 오류 아님 — 직답 어형 문제 | «Yes, » 제거 또는 «The higher cards win — » 로 시작 | id·es·pt·de·ms 132행(EN과 같은 형태 · H2 바로 밑). ja 144 · zh 179 · zh-hant 146은 앞에 직답 블록이 있어 영향이 작다(같이 맞추면 됨). 수치·핸드 무변경 |

🪶 스윕 범위·방법 = WORKLOG 09-30 (6). EN 746문항 중 이 1건뿐이라 단독 전파 회차를 열 값어치는 아니다 — 이 글의 다음 EN-먼저 회차에 얹는다.

### 2-O. 우편함 수신분 — 검수장 델타 재검증 MA-231 · 233 · 235 · 238 · 240 (판정·배포 2026-10-01 · 회신 MB-129)

> 판정: 요청 5건 전부 채택(1차 출처 직접 확인 — TDA 2024 47-A · 18-B = 검수장 `facts/sources/wsop-2026-rules-발췌.md`, WSOP Tournament Rule 72 = `docs/sources/wsop-2026-tournament-rules.txt`). 경위 = WORKLOG 10-01 (1).

| 묶음 | 상태 | 규모 |
|---|---|---|
| **O-1 EN 7자리**(betting-actions FAQ 누적 숏 올인 · showdown 본문 + FAQ = WSOP 72 한정 · beginners FAQ 사이드팟 괄호 · game-order FAQ 18-B 전제 · kicker FAQ 한정절 · equity «only» 삭제) | ✅ 배포 | EN 6편 |
| **O-2 로케일 전파**(pt·es·de·id·zh·zh-hant·ja·ar + ms 4편) | ✅ 같은 커밋 — 해당 문장 없는 6편(pt kicker · es/zh/zh-hant/ja game-order · ja kicker)은 `masterUpdated`만 | 47편 + 6편 |
| **O-3 로케일 고유 6자리**(MA-240 · zh all-in 2 · zh-hant all-in·beginners tldr·blind-meaning·showdown) | ✅ 같은 커밋 | zh 1편 · zh-hant 4편 |
| **O-4 PDF 3문구**(`poker-starting-hands-chart.pdf` · 원본 `scripts/starting-hands-chart-print.html`) | ✅ 본문 표 문안으로 맞춤 · 재생성 · 1쪽 육안 확인 | 1 |
| **O-5** | ✅ 10-01 판정·배포(MB-132) — 채택 ①②③(limping 괄호만 기각 · 이미 «by default»)④⑤ · 판정표 = `docs/harden-brief/pt-rejudge-intake-2026-09-28.md` §8-2 | 5 |

### 2-P. de GTO 13편 마감 렌즈가 올린 것 (2026-10-02 · 전부 ①EN 원문 유래) — ✅ 10-02 (15) EN + 9로케일 전파 완료 (MB-151)

> ✅ **10-02 (15) 종결**: EN 11편(P-9는 EN 관용 유지 → 3bet-pot-bet-sizing 무변경) → 9로케일 본문 정정 = ko 7 · ja 12(ja만 P-9 «9ハイ» → 핸드 표기) · es 11 · pt 8 · zh 11 · zh-hant 11 · id 7 · hi 7 · ms 4. 나머지는 로케일 재구성이 이미 결함을 피해 «이미 정상» 판정 → `masterUpdated`만 10-02(대조 완료 표시 · §1-C). de 11편도 `masterUpdated` 10-02. 경위 WORKLOG 10-02 (15).
> 🪶 남긴 것(자동 착수 금지): ① P-3 계열 «grades your action by EV lost»(EN·각 로케일 `3bet-pot-bet-sizing` 트레이너 문장 — 이번 표에 없던 자리) ② es·zh·zh-hant·ko 등 «K-high·9-high flush draws» 관용 직역(오역은 아님 · 모호) ③ ko 형제 글 GTO 조건표 확인일이 전부 2026-08-08(EN은 08-19·08-20) ④ ko `low-board-check-raise` H2 직답 «거의 전부 스트레이트 드로우»·FAQ «달라집니다» 단정형 ⑤ ms `paired` 바로 답 «K-high»·디펜스 폭 단서 없음 ⑥ ko `blind-battle-connected-board` audit H1 🔴 1(콤보 나열 오탐 추정 · HEAD에서도 동일).
>
> (원래 문구) de 마감 렌즈 4종(수치 ①~⑦ · 수치 ⑧~⑬ · 네이티브 · SEO+플레이어)이 EN 마스터에서 온 문장을 찾았다. de는 그 자리에서 고쳤다(경위 WORKLOG 10-02 (14)). de 문안이 수정 견본이다(`lib/posts-de/<slug>.ts`).

| # | 글 | EN 자리 | 문제 | de 처리 |
|---|---|---|---|---|
| P-1 | ① a-high · ③ broadway | «the button c-bets this board at a high frequency» | BTN c-bet 빈도는 이 솔브에 없다(같은 글 note가 부정) · Q-J-T는 방향도 의심 | «(diese Frequenz liefert diese Berechnung nicht)» 한정 |
| P-2 | ① · ② | «The check-raises come mostly from 77, 22, A7, A2» / «88, 33 and the two pairs» | 체크레이즈 노드 미계산인데 단정 | «bieten sich … an – … liefert diese Berechnung nicht» |
| P-3 | ②③⑥⑦⑧ | 트레이너 «grades … in big blinds lost» | 앱은 값만 bb, 등급은 팟 대비(`app/de/solver/faq.ts`) | «zeigt dir, wie viele Big Blinds … kostet» |
| P-4 | ⑤ monotone | ranges 캡션 «flush draws … favor the button» | 차트에 Draws 패널 없음 | «Overpairs und A-High beim Button» |
| P-5 | ⑥ paired | «Every other single-raised flop … produced sets» · «Every figure below comes from … solver» | BvB도 SRP · 17,2% 등은 조합 산수 | «ungepaarter Flop» · «Jede Solver-Zahl …; 17,2% … Kombinatorik» |
| P-6 | ⑥ | Kurze Antwort «defend much wider than feels right … stop folding A-high and the better K-high» | 본문은 MDF 위/아래 판정 불가 · «also musst du mehr verteidigen» 금지라 함 | «nicht automatisch folden – … zeigt dieser Lernspot nicht» |
| P-7 | ⑦ low-board | ranges 캡션 «what the check-raise is actually made of» · tldr «almost all of it draws» · «Below two pair, every hand in the raise holds a straight draw» · FAQ «raise is built on draws from top to bottom» · FAQ «Give the solver two sizes … reason does not» | 전체 레인지 차트 · <1/4 made · 상위 7행 한정 · 두 사이즈 미계산 | 각각 한정 |
| P-8 | ⑧ 3bet-cbet | «overpairs and ace-high with nothing between» · «owns the top outright – all six set combos» · MDF note «assumption breaks» | ⑩ A5s 3콤보 · BTN 22 셋 3콤보 · 본문은 «weak ground» | «fast nichts» · «beide oberen Sets, AA und KK» · «gerät ins Wanken» |
| P-9 | ⑨ 3bet-sizing | «nine-high flush draws» | de 직역이 «Neun als höchster Karte»가 되어 틀렸다(Q♥ 보드) — EN 관용은 그대로 둬도 됨 | 핸드 표기 K♥J♥ · 9♥8♥ |
| P-10 | ⑩ 3bet-low | ranges 캡션 «overpairs nearly double» · FAQ «whole range … 97.8%» | 2,6배(%)·1,5배(콤보) · 체크 2,0% | «36 gegen 24 Combos» · «97,8% der Range» |
| P-11 | ⑪ bvb-cbet | «3.42 ÷ 3.32 ≈ 103.1%» · 조건표 Checked ①–⑦·⑧–⑩ = 2026-08-08 | 식대로면 103,0 · 각 글 실제 19.08/20.08/08.08 | «3,318bb» · 칸별 실제 날짜 |
| P-12 | ⑫ bvb-connected | FAQ «three times as many overpairs» vs 본문 «three and a half» | 42/12 = 3,5 | «dreieinhalbmal (42 gegen 12 Combos)» |
| P-13 | ⑬ ace-paired | tldr·바로 답 «what split them was not that the board paired but whose card paired» | 자리·레인지도 바뀐 비교(본문 ⚠ 단서와 어긋남) | «weniger, dass das Board gepaart ist, als welche Karte sich gepaart hat und zu wessen Range sie passt – neben dem Board haben sich auch Sitz und Ranges geändert» |

### 2-Q. 우편함 수신분 잔여 — 13건은 ✅ 10-04 (6) 배포로 닫혔다 (MB-163) · 아래는 그때 나온 «남긴 것»

> 13건(MA-285·289·291·295-4·301-2 + 슬로롤 사장님 결재)은 EN → 24로케일 전파 완료. 경위 = WORKLOG 10-04 (6). 아래는 **자동 착수 금지** — 해당 로케일 손질 때 같이 본다.

- 🟠 **꼬리 15로케일(bn·fa·fil·fr·he·hi·it·pl·ro·ru·sw·th·tr·uk·vi) + ms `holdem-showdown-rules` = 옛 판**: EN 슬로롤 단락의 «보호받지도 못한다 — WSOP Tournament Rule 47(도발)·TDA 2024 Rule 70(반복 지연)으로 벌칙 가능» 문장이 없다(그 자리에 «기술적으로 합법»이 있던 것을 이번에 «TDA·WSOP 대회 규정에 이름까지 박은 금지 조항은 없다»로만 한정). 그래서 이 16파일 `masterUpdated`는 올리지 않았다(꼬리 드리프트로 남김).
- 🪶 꼬리 로케일 `texas-holdem-rules-for-beginners` tldr·결론의 «베팅 라운드 4번» 무조건형 — ms만 «sehingga empat»로 고쳤고 나머지 15로케일 tldr·결론은 미확인(FAQ만 고침).
- 🪶 zh `holdem-fish` 읽기 신호표(L94) «跟注站：什么都跟、几乎不加注» — EN 해당 표는 안 바뀌어 그대로 둠.
- 🪶 같은 MA의 통지(라벨 OK 유지): MA-289 통지 1(cooler 2분법 «강한 패끼리» 조건) · MA-297 통지 1(재오픈 «already acted»에 «not facing a full raise» 조건 — EN L8) · MA-299 통지 2·3(showdown «in any cash game» WSOP 범위 · Rule 58 binding fold · 18-B last aggressor · B 143 예외) · MA-301 통지 1·2(EN 동형 8자리) · MA-291 통지 1·2(PT 고유 2 — PT 손질 때).

### 2-R. 우편함 수신분 — MA-303 JA ④ 4-2 부분2 (split-pot · reading-the-board · flush-vs-straight) · 판정 2026-10-04 (7) · 회신 MB-164

> ✅ **R-1·R-2 = 10-05 (3) EN 정정 → 8로케일 전파 배포(MB-167 · WORKLOG 10-05 (3))** — 이 6편은 핵심 8로케일(de·es·id·ja·ms·pt·zh·zh-hant)에만 사본이 있다(꼬리 로케일 0). 아래 🪶 R-3~R-6은 그대로 남김(자동 착수 금지).
> JA 고유 요청 1(split 결론 상자) + 통지 중 JA 고유 1(reading 4랭크 표기)은 ✅ 10-04 (7) 정정.

| # | 글 | EN 자리 | 판정 | 고칠 방향 |
|---|---|---|---|---|
| R-1 | split-pot-rules | 본문 L126 «When someone is all-in, the chips form a main pot … plus one or more side pots» | 채택 — 헤즈업 올인 콜(100 vs 300 → 200 반환)·나머지가 콜만 하고 더 안 걸면 사이드팟 없음. 괄호는 자격자 설명이지 형성 조건이 아님 | 같은 글 FAQ «When players are all-in for different amounts and others keep betting» 조건절로 · ja는 결론 상자만 먼저 고침(본문 L145는 EN 뒤 전파) |
| R-2 | reading-the-board | 너츠 절 3질문(Flush possible? / Board paired? / Best straight?) + «Running this 3-question check on every river» | 채택 — SF 점검 없음(J♠10♠9♠ 보드 너츠 = K♠Q♠ SF). 09-08 «JA 고유» 분류는 정정(EN 동일 결함 · JA 결론 상자 L206도 같이) | 1번 질문에 «플러시가 가능하면 그 무늬 3장이 스트레이트 거리 안인지 = SF 가능?» 한 줄 · 결론 문장 «3 questions» 유지 가능 |
| 🪶 R-3 | flush-vs-straight | FAQ «a higher flush (better top card)» · JA 상자 L116·FAQ L219 | 채택(소) — 맨 윗장이 같으면 둘째 장 이하 비교(같은 글 FAQ7 정답) | «(compared card by card from the top)» |
| 🪶 R-4 | reading-the-board | ⓐ 보드 스트레이트 FAQ «If no one can go higher …» — 바로 앞에 플러시 예외를 말해 놓고 «아무도 더 높이 못 가면 스플릿»으로 닫음 ⓑ 표 행 5·FAQ «a card of that suit higher than the board's lowest one improves it» — 보드 자체가 SF면 거짓 | 채택(소)·보류(극소) | ⓐ «If no one goes higher (and no one makes a flush)» · ⓑ 다음 손질 때 같이 |
| 🪶 R-5 | reading-the-board | TDA 2024 Rule 22 «until the next hand begins» | 보류 — 휴식 중 1분 예외 생략(오류 아님) | — |
| 🪶 R-6 | split-pot-rules | «the last odd chip» 단수 | 보류 — 3인 2칩은 바로 아래 문장이 설명 | — |

- 🪶 JA 고유 남김: flush 제목 «唯一の本当の例外:ショートデッキ»·상자 «順番が変わるのはショートデッキだけ» — EN «one common format»의 «common» 누락(UNV · 다른 변형 규칙 존재 가능). H2 바꾸면 앵커가 바뀌므로 JA 손질 회차에.
- ℹ TDA 2026 v1.1 번호 이동(12·13-A·19·22 → 13·14-A·20·24) — 본문은 «2024年版» 명시라 현행 OK. 전 로케일 TDA 판 갱신 회차가 열리면 같이.

### 2-S. 우편함 수신분 — MA-305 JA ④ 4-3 odds 7편 · 판정 2026-10-05 · 회신 MB-166

> ✅ **S-1~S-7 = 10-05 (3) EN 정정 → 8로케일 전파 배포(MB-167)**. 레인이 같이 고친 동형: es reading FAQ 요약 SF · zh pot-odds tldr 임플라이드 예외 · id equity L87 35% 조건 · ms split FAQ 형성 조건 · ja reading 결론 상자 SF. 🪶 남김(자동 착수 금지): zh card-counting 상자 «胜率高过价格就跟» · 각 로케일 tldr·결론의 «equity > pot odds면 콜»(EN도 유지 · 대부분 바로 뒤 단서) · ms 5편 masterUpdated 09-26 그대로(EN 09-28 델타 미대조).
> JA 고유 요청 1(20건 · 결론 상자 조건 누락 중심) + 같은 클래스 JA 고유 probability FAQ #108은 ✅ 10-05 정정. 근거 = 검수장 `reports/검수-ja-회차4-3-odds-2026-10-04/hq-reverify/HQ-REPORT.md` · 원장 `ledger/ja/holdem-*.md`.

| # | 글 | EN 자리 | 판정 | 고칠 방향 |
|---|---|---|---|---|
| S-1 | pot-odds | 실전 핸드 L189 «With two cards to come I'm at ~35%» | 채택 — 플롭 비올인 콜은 2장 보장 아님(JA 같은 글 L128 «オールインになり2枚とも見られるなら»가 옳은 문면 · EN 대응 자리 확인 후 그 표현으로) | «If I'd see both cards I'd be at ~35%; this call only buys the turn (19.1%)» 방향 |
| S-2 | pot-odds | 턴 L191 «Correct fold» | 채택(확신 낮음) — 오버카드 사유는 09-08 이행됨 · 남은 결함 = 레인지 미지정 경계 스팟(가중 33.52% vs 필요 33.33%) | 레인지를 명시(«against a set or a better ace») 또는 «Fold — the price is right at the edge» |
| S-3 | pot-odds | FAQ L244 «fold when it's lower» | 채택 — 같은 글 임플라이드 예외와 모순 | «… or when implied odds can't close the gap» · probability FAQ(JA는 10-05 고침)와 잣대 통일 |
| S-4 | equity | L139 «you're all-in or have called an all-in heads-up» | 채택(확신 낮음) — 자기 올인만으로 타인 베팅 종료 아님(멀티웨이 사이드팟) · 형제 EN #24·DE·ES·PT는 09-26 L-2d 잣대 OK였음 → 그 잣대 재검 | «you're all-in heads-up» 또는 «no one who can still bet» 조건으로 |
| S-5 | equity | FAQ L194 «The rule is simple — call when equity > pot odds» | 채택(확신 낮음) — 추가 베팅·실현율 미고려 일반 규칙화 · S-3과 같은 클래스 | «… when no more betting follows; otherwise adjust for realization and implied odds» |
| S-6 | drawing-odds | L179 «exactly the aces-vs-aces cooler that empties a stack» | 채택 — AA 대 AA는 무승부 95.65%(각자 승 2.17%) · 1/136 확률은 맞음 | «cooler» 결과 서술 삭제 · «usually just a chop» 쪽으로 |
| S-7 | card-counting | 표 L129 «it can't come on the board» | 채택(확신 낮음) — TDA 2024 RP-5: 조기 노출 보드 카드는 스텁에 섞여 재등장 가능 · EN #72·ES #64 OK와 갈림 | «(unless it was a premature board card reshuffled into the stub)» 한정 |

- 🪶 통지만(자동 착수 금지): «オールインにコールしたとき» 베팅 종료 보장(pot-odds tip·outs tip · TDA 2026 Rule 17 부록 예2 멀티웨이 — 09-26 L-2d 잣대로는 OK) · probability 표 «ツーペア 2.0%»(두 홀카드 모두 페어 한정 · 전체 4.04%) · equity «エクイティは自分の手とボードから決まります»(상대 레인지 누락) · card-counting JA «「追い出される」問題は…起きない»(EN e6e6aa9b 교체 JA 미이행 · UNV).
- 🪶 JA 고유 남김: drawing FAQ 질문 «フラッシュまであと4枚» · implied 셋 비율 7.5/8/7 세 숫자 · outs 상자 «8を超えると出しすぎ» ↔ 본문 7 · drawing 배수 지침 JA만 UNV(형제 통일 후보). JA 손질 회차에.
- 🪶 MA-315 통지 2건(10-05 · MB-167 전/후 결과 · 결함 아님 · 자동 착수 금지): ① S-2 턴 «19.6% is all I have»(EN pot-odds L191 동형 · 8로케일) — 셋 상대 실제는 2♥·3♥가 보드 페어라 7/44 = 15.9% · 투페어 18.2~20.5% → 19.6%는 상한(오차는 폴드 쪽 · 결론 불변 · 검수장 라벨 OK). 손댄다면 «at best» 한정어 1개 ② card-counting 예외 열거 밖 — TDA 2024 RP-4 3) 떨어진 스텁이 머크와 섞이면 함께 셔플 → 엿본 폴드 카드가 돌아올 수 있음(사고 2중 · 라벨 OK 유지). S-7 «premature board card» 예외 옆에 둘째 예외로 넣을지는 EN-먼저 묶음 회차에서 판정. UNV 5(zh·zh-hant «主要是» · ja «セットやツーペアが中心» · id «yang biasa jam» · pt «muitas vezes … me paga pesado»)는 EN «Against the sets and two pair that jam»보다 강한 로케일 문면 — 같은 회차 후보.

### 2-T. 우편함 수신분 — MA-309 JA ④ 4-4 strategy 부분1 (strategy · starting-hands-chart · positions · position-play) · 판정 2026-10-05 · 회신 MB-168

> JA 고유 요청 1(14건 · 대부분 先に結論·まとめ 상자의 한정 탈락)은 ✅ 10-05 (4) 정정. 근거 = 검수장 `reports/검수-ja-회차4-4-strategy-부분1-2026-10-04/hq-reverify/HQ-REPORT.md` · 원장 `ledger/ja/holdem-*.md`. 아래 4건은 EN 같은 자리 동형 — EN 정정 → 로케일 전파는 사장님 지시로 연다(자동 착수 금지).

| # | 글 | EN 자리 | 판정 | 고칠 방향 |
|---|---|---|---|---|
| T-1 | position-play | 표 L177 «Only the button behind — prime steal seat» (L110 동형) | 채택 — 프리플랍 CO 뒤는 BTN·SB·BB 3명 · 같은 열 UTG «8 behind»는 블라인드 포함 계산 · 스틸 맥락이라 오독 현실적 | «Only the button behind postflop» 또는 «Three behind (BTN, SB, BB)» |
| T-2 | position-play | まとめ L297 «the SB is the worst seat to actually play (first to act every street)» | 채택 — 프리플랍 SB는 9max 8번째 · 같은 글 다른 자리는 전부 «postflop» 한정 | «(first to act on every postflop street)» |
| T-3 | position-play | L194 «It's the one weapon OOP has that IP doesn't» | 채택(확신 낮음) — 같은 절 항목 4 돈크벳도 OOP 전용 · 형제 EN #61·PT·ES·DE OK와 갈림 | «a weapon OOP has that IP doesn't» |
| T-4 | strategy | まとめ L243 «the hands you keep are stronger than your opponents'» | 채택 — 본문은 «on average» 한정 · 상자 단독 노출 | «… stronger than your opponents' on average» |

- 🪶 통지 1(라벨 UNV/OK 유지 · 손질 때 참고): BB «closes the action»(BB 레이즈 시 반례) · 라이브 스트래들 시 행동 순서 · 비올인 쇼다운 공개 순서 한정 · 20% 참가율 상한(JA «about» 탈락) · K‑J UTG 폴드 · 리버 OOP 폴드 증가 · `/en/quiz` «against the clock»(퀴즈에 타이머 없음 · 전 로케일 동문) · chart «約2ポイント»(실측 1.8〜3.7p).
- 🪶 형제 갈림(HQ-REPORT §4 · 각 로케일 회차): SB «usually 半額» UNV 통일 · AK «正しい» · LJ «6maxではふつうUTG».

### 2-U. 묶음 회차 — §2-T 4건 + MA-311 요청 1(3자리) + MA-313 요청 1(1자리) · 판정·이행 2026-10-05 (5)

> ✅ EN 6편 8자리 정정 → 핵심 8로케일 전파(이 6편은 꼬리 로케일 사본 없음). §2-T T-1~T-4 = 아래 U-1~U-5로 닫힘.

| # | 글 | EN 자리 | 출처 | 정정 |
|---|---|---|---|---|
| U-1·U-2 | position-play | 표 2곳 CO «Only the button behind» | T-1 | «acts after you postflop» · 오픈 표 «Three left to act (BTN, SB, BB)» |
| U-3 | position-play | まとめ SB | T-2 | «first to act on every postflop street» |
| U-4 | position-play | 체크레이즈 «the one weapon» | T-3 | «a weapon» |
| U-5 | strategy | まとめ hand selection | T-4 | «… on average» |
| U-6 | bad-beat | 마부치 이탤릭 «nobody sucked out» | MA-311 ① | «리버가 역전이 아니라 턴 10♦가 역전» · 로케일 결론 상자 동형 포함 |
| U-7 | glossary | String bet | MA-311 ② | «Declaring the full raise amount first» 복원 |
| U-8 | tiebreak-rules | FAQ 무늬 서열 | MA-311 ③ | «WSOP tournament rulebook» 한정 복원 |
| U-9 | drawing-odds | 표 앞 문장 | MA-313 ① | «앞 둘은 같은 홀카드·플랍 3장의 다른 사건, 셋째만 플랍 뒤 2장» · ja 상자 동형 |

- 🪶 MA-311 통지 1(자동 착수 금지): bad-beat 플랍 9♣/9♠ · 리버 액션 출처 갈림(ESPN vs PokerNews) · zh straddle Mississippi «任何座位»(버튼만) · de showdown FAQ «Nein –» · de straddle FAQ «Position verleiht er nie».

### 2-V. `/en/hand-chart` 상속 문구 — 로케일 차트 개설(2026-10-05 · 도구 확장 회차 1)에서 드러남 · 🪶 자동 착수 금지

> 회차 1은 EN 마크업 «전후 0줄 차이»가 게이트라 EN 문구를 그대로 옮겼다(`components/hand-chart/dict.ts` `HAND_CHART_DICT_EN`). 로케일 10개는 ko 판 태도(타입/콤보 기준 병기 · GTO 미주장)로 지었다.

| # | 자리 | 지금 | ko 정본 태도 |
|---|---|---|---|
| V-1 | seo.description · 서버 metadata/twitter description · 표 각주 | «color-coded **GTO** open ranges» · «* **GTO-based** approximations» · keywords «GTO starting hands» | 차트는 공개 자료 합의 레인지 — 솔버 SB 46.6% vs 차트 56%(`app/hand-chart/page.tsx` 주석). GTO 주장 근거 없음 |
| V-2 | FAQ 4 «42% on the button» | «In GTO terms … 40–50%» (타입 42%와 콤보 40~50%를 같은 기준처럼) | ko FAQ 4: 타입 42% ↔ 콤보 35.4% 구분 |
| V-3 | 칩·범례·표 % 기준 | 기준 미표기 | 칩 위 «169종 중» 캡션 · 표 «타입 / 콤보» 병기(EN은 dict 선택 필드만 채우면 된다) |
| V-5 | JSON-LD featureList 4번째 (EN «Colour-coded pocket pairs, suited and offsuit» · **ko도 같다** «포켓페어·수티드·오프수트 구분 색상») | 색이 핸드 종류를 나눈다고 주장 — 실제 색 = 오픈 포지션(종류는 삼각형 위치) · 아스트라 교차가 10로케일에서 잡아 로케일은 정정 | «오픈 포지션별 색 구분(UTG~SB)» |
| V-4 | 서버 metadata description ↔ dict.seo.description | «starting hand chart» vs «starting-hand chart» (한 글자 갈림 · 클라이언트가 덮는다) | EN page.tsx도 dict.seo에서 파생 |

### 2-W. 우편함 수신분 — MA-321 · MA-323 · MA-325 · MA-327 · MA-329 (JA ④ 4-4 부분2 · 4-5 부분1·2 · cooler 결재 · ID 파일럿) · 판정 2026-10-05 (11) · 회신 MB-174 · ✅ ① 이행 10-05 (12) MB-176 · ✅ ② 이행 10-06 (1) MB-178

> 근거 = 검수장 각 MA의 `HQ-REPORT.md`(MA 행 «근거» 칸) · 원장 `ledger/{ja,id,…}/<slug>.md`. 판정 = 전부 **채택**(«확신 낮음»은 이행 때 문면을 다시 보고 기각 가능). 이행 순서 = ① JA·ID 고유(로케일 단독 · 한 회차) → ② EN-먼저(EN 정정 → 핵심 8로케일 전파 · 사장님 지시로 연다). 이행 MB가 나가면 검수장이 변경 줄 전/후로 닫는다.

**① 로케일 고유 (JA 22 · ID 2) — 대부분 «先に結論» 상자·FAQ가 본문·EN 한정을 뺀 자리** — ✅ 전부 이행(10-05 (12) · MB-176 · 기각 0 · 전/후 문면은 MB-176). ▶ 검수장 재판정 대기.

| # | 글 | 자리 | 고칠 방향 | 출처 |
|---|---|---|---|---|
| W-1 | ja when-to-fold | 상자 L164 «ブラフにしか勝てない」に寄るなら、それがフォールドです» | 같은 절 «ブラフキャッチャー…フォールドという意味ではありません»과 정합(§5-K 1 잔존 · EN Q4-a K1 문면 따라) | MA-321 ⓐ |
| W-2 | ja when-to-fold | 표 L114 TPTK «フラッシュやストレートに向かって伸びる» | EN «four to a flush or straight»의 «4枚目» 복원 | MA-321 ⓐ |
| W-3 | ja when-to-fold | 상자 L148 «「フォールドばかり」は、プリフロップなら正解» | 같은 절 75〜85% 상한 복원 · 프리플랍 면책 삭제 | MA-321 ⓐ |
| W-4 | ja 3bet | FAQ L264 4벳 밸류 «たいていAA〜KK、そしてAK» | 같은 글 «QQ+, AK» + «3벳이 드문 상대엔 AA–KK» 조건 | MA-321 ⓑ |
| W-5 | ja 3bet | 상자 L44 «降りないなら自分が有利なうちに» | EN «with your best hands» (확신 낮음) | MA-321 ⓑ |
| W-6 | ja 3bet | L234 Q7o «エクイティもほとんどない» | QQ+/AK 상대 21.8% — «ほとんど» 완화 (확신 낮음) | MA-321 ⓑ |
| W-7 | ja limping | 상자 L59 «取り戻すには、後からハンドを作るしかありません» | EN «or win it later» 복원(같은 글 L63) | MA-321 ⓒ |
| W-8 | ja limping | 상자 L86 «すでに半額を払っている席» 외 2(«割安になったポット» speculative 탈락 · «ショートスタック» late position·토너먼트 탈락) | SB «ふつう半額» · EN 한정 복원 | MA-321 ⓒ |
| W-9 | ja c-bet | 상자 L94 «アウトオブポジションや複数相手では低くなります» | SRP·レイザー 한정 복원(OOP 3벳터 97%와 모순 해소) | MA-321 ⓓ |
| W-10 | ja bad-beat | FAQ7 «変えるべきはプレーではなく、ティルトへの警戒だけ» | «確かめたら» 전제 복원 · FAQ9(사이즈·ICM 실수)와 정합 | MA-323 ⓐ |
| W-11 | ja fish | 상자 «3〜4つ重なればカモ…決定的» · «1つでもうなずけば診断は同じ» · «1〜2オービットで表に出ます» | EN «probably … working read» · «not a verdict» · «たいてい»·暫定 복원(MB-083 ② 1~2오빗 자리 겹침 확인) | MA-323 ⓑ |
| W-12 | ja cooler | 상자 «「コールドデッキ」は本来その一手そのものを指し» | 원뜻 = 바꿔치기·미리 짠 덱(Dictionary.com 1855–60) | MA-323 ⓒ |
| W-13 | ja rake | 상자 3자리(2.5〜10%·5〜20% · NL50 bb/100 · ライブ/オンライン 율·캡) | 본문 «典型的»·«約»·«あくまで例»·«通常» 복원 | MA-325 ⓐ |
| W-14 | ja rake | 상자 «答えは「率×回数」で決まります» | «1ポットで実際に払う額(キャップまでの割合)×頻度»(본문 문면) | MA-325 ⓑ |
| W-15 | ja rake | FAQ 위법성 · «ホームゲームがいちばん安い» | 일본 국내 한정 한 줄(刑法 185·186조 · e-Gov 원문) — 합법성은 정보 제공 축(메모리 legality-info) · 후자 확신 낮음 | MA-325 ⓒ |
| W-16 | id beginners | 돈 블록 «cash game kecil di rumah» + 표 «belajar dengan taruhan sungguhan» · FAQ «home game uang sungguhan … $2 sampai $5» | 인도네시아 한정 한 줄(UU 1/2023 Pasal 427 · BPK 원문) — 플레이머니·국외 한정 · 위법 단정 금지(JA MA-295 선례) | MA-329 요청 1 |

**② EN-먼저 15 (EN 같은 자리 + 핵심 8로케일 사본)** — ✅ 전부 이행(10-06 (1) · MB-178 · 기각 0 · W-27 확신 낮음도 채택 · 전/후 문면은 MB-178). 이 8편은 꼬리 로케일 사본 없음. ▶ 검수장 재판정 대기.

- 🪶 ② 렌즈 잔여(자동 착수 금지 · 확신 낮음): cooler 본문 «A priced-in draw that missed is neither» 예시에 «블러프캐처가 밸류에 진 것» 추가안 · when-to-fold 리버 레이즈 «enough bluffs» → «enough hands you beat — mostly bluffs» · pt limping 오픈림프 예외 «(sobretudo em mesa passiva)» · ja bad-beat 要点 상자 «史上最大» ↔ FAQ «最も有名» 표현 통일 · ms limping «separuh wang anda» → «separuh taruhan»(원본 유래) · bad-beat·glossary FAQ «Quick test … if they were already ahead going in, it's a cooler»에 강한 손 충돌 조건 없음(W-31과 같은 명제 · 결재 RISKY를 여기까지 넓힐지 판정 필요)

| # | 글 | EN 자리(JA 줄) | 고칠 방향 | 출처 |
|---|---|---|---|---|
| W-21 | when-to-fold | «every single time»(L9) | −EV ≠ 매회 손실 — «lose money over time» | MA-321 |
| W-22 | when-to-fold | «never-wrong fold button … proof»(L137 · EN L119) | 논리 방향 바로잡기 | MA-321 |
| W-23 | when-to-fold | FAQ «…always profitable»(L230) · FAQ «fold everything but the strongest»(L262) | 가격 조건 복원 | MA-321 |
| W-24 | 3bet | A9o «only makes weak pairs»(L82) | 투페어+ 28.5% — «mostly» | MA-321 |
| W-25 | limping | FAQ6 예외 열거(L175) · 표·FAQ7 SB «half»(L96·L179) | SB 컴플리트 추가 · «usually half» | MA-321 |
| W-26 | c-bet | FAQ C벳 정의(L242) · «can't rebuy»(L129) | 최후 레이저(3벳터 포함) · 리엔트리 대회 한정 | MA-321 |
| W-27 | bad-beat | FAQ5 «about as bad as a bad beat gets» | «お金が入った時点» 기준과 정합 (확신 낮음) | MA-323 |
| W-28 | cooler | stripe «the only loss you shouldn't tilt over»(EN L19) | 배드빗도 같은 취급 — «one loss» | MA-323 |
| W-29 | rake | FAQ «Judge rake by rate times frequency, not rate alone.» | W-14와 같은 식 — 캡 반영 | MA-325 |
| W-30 | straddle | «GTO Wizard puts it bluntly … Three reasons:» | 원문 재확인 후 레이크 이유 삭제 · «almost always» 헤지 복원 | MA-325 |
| W-31 | cooler | 복기 테스트 yes 가지 본문 L123 · FAQ L158 · 요약 L194 + ja 상자 L122 | 🔴 **사장님 결재 RISKY**(MA-327) — yes 가지에 «레인지·가격으로 따져도 옳았다면» 조건 · 쿨러 가지에 «강한 손끼리 충돌» 복원 · no 가지 유지 · 원장 있는 7로케일 + 꼬리 로케일 사본 grep | MA-327 |

- 🪶 라벨 불변 통지(자동 착수 금지 · 손질 때 참고): MA-321 통지 2(limping «ほぼ弁護できません»·«最適» 강화 · c-bet «二段階») · MA-323 통지 1(원아우터 «約96%» 시점 · «長期では負ける» · «ターンやリバーで» 플랍 누락 · fish «追うのをやめる» · FAQ1 «まさに逆») · MA-325 통지 1(glossary 레이크 «cash-game» · rake «some» · 앤티 정의 · straddle «generally» · glossary UTG·c-bet·3벳·GTO · rake «4種類» · straddle 포스트플랍 최후) · MA-329 통지 1(id «jarang bluff di river» · «As lemah … kicker») · 통지 2(id PDF «satu halaman» ↔ 2쪽 · «4 ronde» 무한정) · 통지 3(EN 동형 후보 5 = MA-295 묶음).
- 🪶 용어 사전 회차 2 **아스트라 교차 잔여**(10-05 (12) · MB-177 · 자동 착수 금지): 로케일 **도구** 사전은 정정 끝(Rake 10 · ICM 8 · fr·hi All-in·Check). 남은 원천 = **EN 도구** `app/en/glossary/glossary-data.ts` All-in «side pot forms if opponents have more chips behind»(≥2명이 추가로 걸어야 생김) · Check «only possible when no one has bet before you»(프리플랍 BB 체크 반례 — 8로케일 글 문면 «맞출 금액이 없을 때»가 정답) · Rake «each pot»(no-flop-no-drop) + **로케일 글** `holdem-glossary` Rake «대부분의 팟»(토너먼트 수수료 누락 · ms만 «cash game» 한정) · ICM «페이점프 부근에서 환산»(정의에 시점 한정 · de·es·id·ja·ms·pt·zh·zh-hant). 기각 = Blinds 헤즈업 예외(3인 이상 표준 정의로 틀리지 않음 · 헤즈업은 규칙 글 몫).
- 🪶 용어 사전 회차 2 렌즈 잔여(10-05 (11) · 자동 착수 금지): **EN-먼저** glossary 글 Equity «Your percentage share of the pot right now» — «based on your chance to win» 한정 없음(«팟에 넣은 칩 비율» 오독 · `/en/glossary` 도구 desc는 이미 있음) → EN 글 + 로케일 글 사본(로케일 **도구** 사전 5개는 정정 끝) · EN 도구 Ante에 BB 앤티 미언급(hi 사전 상속 · ja·zh 글은 언급) · C-bet 정의 순환(de·es·id·ms 글) · zh·zh-hant Fold «主张/主張» → «权利» · de Set/Trips aka «Drilling» 중복 · id Backdoor «dua kartu berurutan».
- 🪶 straddle «アンダー・ザ・ガン» 표기 통일(«アンダーザガン» 9회 · MA-325·326) — 통일 커밋 때 검수장에 통지.

### 2-X. 우편함 수신분 — MA-330 (ID ④ 4-1 rules 부분1 · showdown·blind·betting) · 판정·이행 2026-10-06 (2) · MB-179

> 판정 = 요청 1(EN-먼저 5)·요청 2(ID 고유 1) 전부 **채택·이행**(기각 0). 근거 = 검수장 원문 판독(TDA 2024 Rule 16 Illustration Ex.2·3 · WSOP Live Action 159·165). 전파 = EN → 9로케일(ar·de·es·id·ja·ms·pt·zh·zh-hant · 드리프트 게이트 핵심 + ms). ▶ 검수장 재판정 대기.

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| X-1 | showdown | 표 «리버 벳/레이즈 → 마지막 공격자 · 토너먼트 올인이면 예외» | 예외를 «핸드에 올인 있으면(리버·앞 스트리트) 베팅 끝나는 대로 전원 공개»로 넓힘(ms는 행이 이미 «비올인 토너먼트» 한정 → 불변) |
| X-2 | showdown | 표 «리버 전원 체크 → 버튼 왼쪽 먼저» | «핸드에 올인 없을 때 · 토너먼트 앞 스트리트 올인이면 전원 공개» 한정 |
| X-3 | blind | FAQ «프리플랍 SB 끝에서 둘째 · BB 마지막» | «스트래들 없을 때» + «라이브 스트래들은 프리플랍 마지막 · 버튼이 스트래들하면 SB 먼저»(zh-hant는 해당 FAQ 없음) |
| X-4 | blind | 전략 «3인 이상이면 SB 프리플랍 끝에서 둘째» | «(스트래들 없으면)» |
| X-5 | betting | FAQ «프리플랍 체크 가능 조건» | «모두가 맞춰야 하는 온전한 라이브 벳 · 스트래들 없으면 BB, 있으면 스트래들러 · SB 절반 벳 불가 · 스트래들 팟 BB는 콜·레이즈·폴드» |
| X-6 | id betting | 실수 2 string bet 괄호 | «dengan kembali ke stack Anda di tengah jalan» 복원(ID 고유) |

- ✅ 통지 1 = 사장님 «권고대로»(10-06 (3) · MB-180): 정의(WSOP 103 축어)는 유지 · 실수 1 제목 «"raise" — and the amount —» · FAQ 끝 «"raise" and the full amount … (TDA 2024 Rule 42)»(docs/sources/tda-2024-rules-v1.txt 축어 확인) → 9로케일. 🪶 남음: 접두 없는 «Rule 103» 표기(B에서 다른 조항) 정리 후보.
- ✅ §2-W 🪶 «Quick test 강한 손 충돌 조건» = 사장님 «권고대로»(10-06 (3) · MB-180): bad-beat·glossary FAQ «if they were already ahead going in **and your hand was too strong to fold**, it's a cooler (simply being behind with a weaker hand is neither — just a lost pot)» → 8로케일(de bad-beat는 해당 FAQ 없음 · es glossary는 FAQ 2자리).
- 🪶 통지 2(EN 동형 후보 · EN 손질 때): showdown 올인 표 캐시 «must show (Live Action Rule 143)» ↔ 조문 단서 «unless that participant has the only remaining live hand» · betting 사이드팟 «excess chips form a side pot»(헤즈업 미콜분은 반환) · «until someone is all-in»(올인 뒤 나머지끼리 레이즈 가능) · blind «BB defense = Call raise»(3벳 포함) · SB raise-or-fold 결론의 토너먼트 일반화.
- 🪶 통지 3(ID 현지화 · MA-329 계열): blind 캐시 스테이크·바이인 블록에 인도네시아 한정 없음 — 현지화 손질 때.
- 🪶 꼬리 15로케일(bn fa fil fr he hi it pl ro ru sw th tr uk vi) 같은 3편 = 이번 미전파(§2-Q 잔여와 같은 옛 판 부채 · 자동 착수 금지). ms blind 노트에 «라이브 스트래들이 마지막 자리» 문장 없음(뒤처짐).

### 2-Y. 우편함 수신분 — MA-331 (ID ④ 4-1 rules 부분2 · all-in·game-order) · 판정·이행 2026-10-06 (4) · MB-181

> 판정 = 요청 1(EN-먼저 1)·요청 2(ID 고유 1) 전부 **채택·이행**(기각 0). 근거 = TDA 2024 Rule 47-A «(or cumulative multiple short all-ins)» · 같은 글 본문 «Advanced Case»·«Mistake 2»(이미 예외 명시 — tldr만 누락). 전파 = EN → 9로케일(ar·de·es·id·ja·ms·pt·zh·zh-hant). ▶ 검수장 재판정 대기.

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| Y-1 | all-in | tldr 끝 문장 «짧은 올인은 이미 액션한 사람에게 재오픈 안 함» | «— unless several short all-ins add up to at least a full raise over what that player has already put in» 추가(주어도 «a player who already acted»로 — 판정이 플레이어별) |
| Y-2 | id game-order | 마무리 «Mulai dari taruhan paling kecil» | «Mulai dari permainan tanpa taruhan uang — 친구와 돈 가치 없는 칩으로»(JA MA-299 «最低レート» → 비환금 예시 교체 선례와 같은 방향 · 앞 불릿 플레이머니와 겹치지 않게 홈게임 예시) |

- 🪶 통지 1(EN 동형 단순화 9자리 · EN 손질 때): all-in FAQ3 캐시 쇼다운 순서 «side pot participants show first»(B 149) 생략 · 결정표 «한 올인 < 풀레이즈 → 콜/폴드만»(앞선 정상 레이즈가 남은 경우) · «메인 이기고 사이드 짐»(자격 없음 ≠ 패배) · «call, bukan all-in»(전 스택 정확 콜) · «muck 금지»(TDA 16 «without tabling») · 실수 3 «$80 … 각자에게서 $80»(이전 기여분 모호) · game-order Call/Raise 정의(레이즈 팟) · FAQ4 «올인 있으면 전원 공개»(«betting complete» 조건) · 18-B «river bet 후 콜된 사람»(«last aggressor») · «벳 있으면 체크 불가» ↔ BB 체크 예외.
- 🪶 통지 2(ID 직답 상자 완결성): game-order tldr에 EN 선행동 3문장(헤즈업 예외)·desc «who bets first» 누락 — 라벨 영향 없음 · ID 손질 때.
- 🪶 꼬리 15로케일 all-in tldr = 이번 미전파(자동 착수 금지).

### 2-Z. 우편함 수신분 — MA-332~338 (ID ④ 4-2 rankings · 4-3 odds · 4-4 strategy · 4-5 glossary 부분1) · 판정 2026-10-06 (15) · 회신 MB-191 · ✅ 이행 10-06 (16) MB-192

> 근거 = 검수장 각 MA의 `HQ-REPORT.md`(MA 행 «근거» 칸). 본체 판정 = 인용 문면 전부 EN·ID 파일에서 실재 확인(현 HEAD `7473a796`) · 반례 계산 대조(×4 12아웃 48% vs 정확 45.0% · 턴 Q♥7♥2♣3♠ 셋 상대 클린 7/44 = 15.9% · UTG 13% = 172콤보). **요청 전부 채택**(기각 0). 이행 순서 = ① ID 고유(로케일 단독 · 한 회차) → ② EN-먼저(EN 정정 → 9로케일 ar·de·es·id·ja·ms·pt·zh·zh-hant 사본 grep · 형제 원장 OK 라벨은 검수장이 각 로케일 회차에서 재라벨). 이행 MB가 나가면 검수장이 변경 줄 전/후로 닫는다.

**① ID 고유 8자리** — ✅ 전부 이행(10-06 (16) · MB-192 · 기각 0 · MA-334 통지 ⑤ drawing SF 드리프트도 같이 이행). ▶ 검수장 재판정 대기.

| # | 글 | 자리 | 고칠 방향 | 출처 |
|---|---|---|---|---|
| Z-1 | id hand-rankings | FAQ «Apa urutan simbol (lambang) kartu poker? — Tidak ada …» | «팟 승패를 무늬로 가르지 않는다»로 좁힘 + 버튼·좌석 추첨 등 무늬 서열이 쓰이는 자리 한 줄(WSOP 2026 B 150 · 같은 저자 tiebreak FAQ 문면 따라) | MA-332 요청 3 |
| Z-2 | id probability | L147 «**Aturan 2 dan 4** membawa Anda dalam sekitar satu-dua persen» | 아웃 수 범위 한정(약 10아웃까지) 또는 EN형 «jalan pintas, bukan equity yang pasti» | MA-334 요청 1 |
| Z-3 | id equity | L42 «menang seluruhnya atau kalah seluruhnya» | 분할 한정 또는 EN형(«you won't win this pot 70% of the time and lose the rest») | MA-335 요청 2 |
| Z-4 | id position-play | FAQ L274 «raise hampir setiap kali» | EN «most of the time» 강도 · 같은 글 표 ~40%와 정합 | MA-336 ① |
| Z-5 | id strategy | L193 «hanya kalah pot kecil» | «hanya» 삭제 — EN «lose the small ones» | MA-336 ② |
| Z-6 | id position-play | 맺음 «kursi "berdiskon"» | 복수 «kursi-kursi "berdiskon"» 또는 «kedua blind» | MA-336 ③ |
| Z-7 | id glossary | 표 String bet L84 | «스택 복귀(reach-back)» 요건 복원(WSOP 2026 A 103 · TDA 2024 R56 · EN «undeclared reach-back») | MA-338 ④ |
| Z-8 | id glossary | FAQ Muck L294 «menyentuh muck umumnya dinyatakan mati» | WSOP 2026 A 108·109 — 식별 가능하면 회수 가능 여지 | MA-338 ⑤ |

**② EN-먼저 (EN 같은 자리 + 9로케일 사본)** — ✅ 전부 이행(10-06 (16) · MB-192 · 기각 0 · EN 13편 → ar 1 + de·es·id·ja·ms·pt·zh·zh-hant 각 12~13편). 🔴 Z-23 수치는 검수장 15.9%(7/44) 대신 **15.2%(7/46)** — 글의 19.6%가 9/46(상대 카드 미제거) 기준이라 같은 분모로 맞췄다. ▶ 검수장 재판정 대기.

| # | 글 | EN 자리 | 고칠 방향 | 출처 |
|---|---|---|---|---|
| Z-21 | kicker · hand-rankings · tiebreak | kicker L40 «Poker is always a five-card game» · kicker FAQ L182 «Poker always makes the best five cards out of seven» · hand-rankings FAQ L388 «A poker hand is always five cards» · tiebreak FAQ L208 «Yes, but only in the A-2-3-4-5 straight» | **WRONG** — «In Hold'em …» 한정만(재작성 아님 · 반례 Badugi·Omaha·Short Deck·Razz) | MA-332 요청 1 |
| Z-22 | tiebreak | 직답 L153 «Suits do exactly one job in Texas Hold'em» | 같은 글 좌석 추첨 FAQ(L232)와 모순 → «for deciding who wins a pot» 한정 | MA-332 요청 2 |
| Z-23 | pot-odds | 실전 핸드 L191 «19.6% is all I have» | 셋 상대 클린 아웃 7/44 = 15.9%(2♥·3♥는 상대 풀하우스) · 폴드 결론 불변 | MA-335 ① |
| Z-24 | implied-odds | FAQ «extra cushion covers the times you miss, get no action, or lose to a set» | «miss» 삭제(7.5:1 손익분기가 이미 미스 포함 · 본문 15–20× 문단 사유 목록 따라) | MA-335 ② |
| Z-25 | equity | FAQ L202 «quarter-pot … 17% … half-pot fold» | «if no more betting follows» 조건 같은 답에 이식 | MA-335 ③ |
| Z-26 | card-counting | 본문 L96 «dead cards … exposed off the board: a card flashed by mistake» + FAQ 같은 꼴 | 같은 글 표의 «일찍 노출된 보드 카드는 스텁에 다시 섞일 수 있음» 단서를 두 자리에 | MA-335 ④ |
| Z-27 | position-play | FAQ «From UTG … ~13% — strong pairs, AK/AQ, best suited broadways» | 열거가 13% 미달 → 본문 «plus middle pairs and top suited aces» 한정 이식 | MA-336 요청 2 |
| Z-28 | limping | FAQ L163 «The rare exceptions are completing the small blind …» | 🔴 **MB-178(W-25) 자기회귀** — 다음 FAQ «Often, yes»와 빈도 반대 → SB 컴플리트를 «rare» 목록 밖 별문으로 · JA FAQ6 «まれな例外» 등 9로케일 같은 꼴 확인 | MA-337 ① |
| Z-29 | continuation-bet | desc L8 · 요약 L271 «as the OOP 3-bettor it flips to almost always» | 본문 «above 97% on the three boards we solved» 한정 이식 | MA-337 ② |
| Z-30 | 3bet | FAQ L262 «so they win even when called» | A5s vs QQ+/AK ≈30% → 같은 글 «bluff that can still win the pot» 형 | MA-337 ③ |
| Z-31 | cooler | desc L7 «and why it's not a bad beat» | **WRONG**(09-25 결재와 같은 클래스) — 요약의 «in the strict definition» 한정 이식 | MA-338 ① |
| Z-32 | bad-beat | L146 «still a win in every way that matters» · L38 «the deck simply produced the one runout that beats you» · desc·stripe «quietly good» 무한정 | 같은 글 FAQ ICM·사이징 예외 · «four out of five» · 본문 «usually»·«most of the time» 복원 | MA-338 ② |
| Z-33 | cooler | L196 «The best players lose exactly as many coolers» · L126 «mistake wearing a disguise»(확신 ≠ EV) · L69·L193 «Knowing which … anything to fix» | 같은 글 «occasionally letting go of the second-best hand» · 계산 잣대 · 축 = 불운 vs 실수로 정합 | MA-338 ③ |

- 🪶 통지 권고(라벨 OK/UNV · 자동 착수 금지 · 손질 때): MA-332 통지 1(7-5-4-3-2 최저 손 · 플러시 후속 카드 · 보드 스캔 충분조건 · kicker tldr Q 페어 반례 · «ikut bermain» 용법 · 보드 플레이 공개 조건 · tiebreak 표 Royal 조건 삭제) · MA-333 통지 1(split «Suits never affect» ↔ «few rooms by suit» 내부 모순 · 무경합 쇼다운 예외 · reading SF 예외 비연속 보드 · flush «rarer always wins» 5장 한정 · «better top card» · TDA 22 휴식 1분 · 분할 자격자 · ID Short Deck «common» 탈락) · MA-334 통지 1(관련 글 카드 «rarer always wins» = MA-333 ④와 한 묶음 · outs tldr 조건 · «benar-benar meleset» 60.8% · «Kelangkaan» 강도 · **ID 드리프트 drawing SF «empat» flop → EN «54s–JTs exactly four · QJs three, KQs two, A2s one» 복원 = ① 회차에 같이 해도 됨**) · MA-335 통지 1(ⓐ ID 드리프트 3 «mungkin»·«7,5:1» 방향·«sebagian besar» · ⓑ 관련 글 카드 realisation · 블로커 SF 여지 · Rule of 4 괄호 3인+ · ⓒ 배수 경험칙 = 검수장 잣대 결정 대기) · MA-336 통지(ⓐ SB 최악 좌석 헤즈업 한정 = EN-먼저 본체 판단 · ⓑ «melepas c-bet» 동사 통일 선택 · ⓒ position-play K 비교 UNV · JA 절 제거 선례 · ⓓ GPT 동형 단순화) · MA-337 통지(ⓐ «worst result of a fold is zero» «from that decision forward» 선택 · ⓑ «fills up» → «full house atau lebih baik» · ⓒ ID 드리프트 «tipis»(shallow = 얕은 스택)·«sebagian besar» · ⓓ Z-30과 함께 표 정합 · ⓔ c-bet FAQ 3-bettor 포섭 엇갈림 · ⓕ 배수 경험칙 대기) · MA-338 통지 1(ⓐ ID Rake «cash-game» 탈락 = §2-W 🪶 Rake 행과 같은 묶음 · ⓑ muck 올인 공개 예외 · ⓒ bad-beat EN 원장 Quick test 재판정 = 검수장 몫).
- 🪶 꼬리 15로케일 같은 글 = 이행 때 미전파(§2-X·Y와 같은 부채 · 자동 착수 금지).

### 2-AA. 우편함 수신분 — MA-339 (ID ④ 4-5 glossary 부분2 · fish·rake·straddle) + MA-344 통지 · 판정·이행 2026-10-06 (17) · MB-193

> 근거 = 검수장 `reports/검수-id-회차4-5-glossary-부분2-2026-10-06/hq-reverify/HQ-REPORT.md` · MA-344 `reports/2026-10/검수-MB176-180-이행-2026-10-06.md`. 본체 판정 = 인용 문면 전부 EN·ID 파일 실재 확인(HEAD `c91cbe98` · `aabd9e9c..HEAD` 대상 6파일 diff 0 · MA 행 번호는 본문 기준이라 파일 행과 13줄 차). **요청 전부 채택(기각 0)** · MA-344 통지 1(straddle «solver work» 귀속)은 AA-23과 같은 문단이라 함께 이행 · 통지 2(ja cooler 어순 · zh-hant «通常»)도 같은 회차 이행.

| # | 글 | 자리 | 이행 문면(EN) | 출처 |
|---|---|---|---|---|
| AA-21 | fish | 본문 «the single biggest leak in poker» ↔ «The single most expensive fish habit … bad beat» | 앞쪽을 «one of the biggest leaks in poker»로 · 틸트 최상급은 유지 | MA-339 ① |
| AA-22 | rake | FAQ «where the cap doesn't scale down with the stakes» | «barely scales down» — 본문 계단식 캡·«nyaris»와 정합 | MA-339 ② |
| AA-23 | straddle | 도입 «the first two are what the solver work shows» · 카드2 «It shrinks your positional edge» · FAQ «profitable?» 같은 절 | 도입 «two at the table, one from the house» · 카드2 «A UTG straddle buys position for one street»(프리플랍만 마지막 → 세 스트리트 OOP) + 시뮬은 «late seats도 안 넓어진다: UTG 2bb 스트래들 팟에서 버튼 오픈 ~15–20% 감소»로 주체 정정 · FAQ 같은 꼴 | MA-339 ③ · MA-344 통지 1 |
| AA-1 | id rake | FAQ7 «rakeback·room·home game termurah» · FAQ8 «ilegal?» | 접근 가능성 한 줄(W-16 문면 «di Indonesia, poker dengan taruhan uang tidak tersedia secara resmi» · 조문 번호·처벌 본문 금지 = posting.mdc 합법성 절) | MA-339 ④ |
| AA-2 | ja cooler | 先に結論·FAQ «強い手同士がぶつかり、入れた時点で負けていたなら» | «ぶつかって入れた時点で» — 배드빗 가지에 안 걸리게 | MA-344 통지 2 |
| AA-3 | zh-hant betting-actions | FAQ «沒人盲抓時是大盲» | «通常» 복원(EN normally) | MA-344 통지 2 |

- 전파 = EN 3편 → de·es·id·ja·ms·pt·zh·zh-hant 각 3편(ar판 없음). ms는 검수장 MS 전수 초벌(MA-346 · 기준 `c91cbe98`) 진행 중 → MB-193으로 해당 행 전/후 요청.
- 🪶 통지 권고(라벨 OK/UNV · 자동 착수 금지): MA-339 ⓐ re-straddle «Preflop saja» 버튼 예외 · Mississippi 액션 시작 하우스룰 갈래 · 버튼 스트래들 첫 행동자 룸별 ⓑ rake «nyaris» GGPoker 비례 캡 반례 · 도입 «setiap pot» → «nyaris setiap pot» ⓒ fish «sepenuhnya oleh kebalikannya» ↔ FAQ «tidak semua yang bukan shark itu fish» ⓓ straddle 관련 글 카드 «hanya ada di cash game» ↔ «Hampir tak pernah» · MA-344 통지 3(MB-181 행 누락) = **해당 없음** — MB-181 행은 `e8674e53`이 out-본체.md에 같이 커밋했다(MB-180 바로 아래 · MB-193에서 위치 회신).
- ✅ **AA-24**(10-07 (1) · MB-194): straddle «세 스트리트 내내 OOP» 단순화(블라인드 상대로는 IP) — EN L63·카드2·FAQ 3자리에 «to everyone but the blinds» 한정 → 8로케일 같은 자리 + 로케일 고유 사본(zh 바로 답 블록 · de FAQ «Aus welcher Position …») · zh-hant 快速解答 «坐回最早說話的位置»(블라인드가 먼저 행동 = 오류) → «前段的不利位置».
- 🪶 로케일 고유로 같이 고친 사본: zh straddle 바로 답 블록 · ja straddle 先に結論 카드 제목 인용 · ja cooler 본문 L142(같은 어순 · 통지 2와 같은 클래스).
- 🪶 꼬리 15로케일 같은 글 = 미전파(§2-X·Y·Z와 같은 부채).

### 2-AB. 우편함 수신분 — MA-347 (MS M-0 파일럿 beginners · 기준 `c91cbe98`) · 판정·이행 2026-10-07 (2) · MB-195

> 근거 = 검수장 `reports/검수-ms-M0-파일럿-2026-10-06/hq-reverify/HQ-REPORT.md`. 요청 1의 5자리 전부 EN 현행 문면 실재·ms 부재 확인 → **전부 채택·이행**(ms 고유 · EN 무변경).

| # | 자리(ms beginners) | 이행 |
|---|---|---|
| AB-1 | 본문 블라인드 · FAQ 블라인드 | «(jika hanya ada dua pemain, butang sendiri meletakkan Small Blind)» 2자리 |
| AB-2 | «setiap kali street baru muncul …» | «— kecuali jika pemain sudah all-in dan tiada sesiapa lagi untuk bertaruh; ketika itu, baki kad hanya diedarkan sahaja.» |
| AB-3 | 인원표 Full ring | «(9-max atau 10-max)» |
| AB-4 | Premium 칸 | «— raise jika anda pemain pertama masuk, re-raise jika sudah ada satu raise»(«di hadapan»은 MB-103 언어 소견대로 피함) |
| AB-5 | 금전 홈게임 본문 · FAQ | 말레이시아 중립 한 줄(«tertakluk kepada undang-undang tempatan» · 표 = 해외 기준 · 국내 = 플레이칩) · 조문 번호 본문 금지 |

- 🔴 **원인 = ms가 드리프트 게이트상 «꼬리» 로케일**이라 09-28 EN 델타(`6164c748`·`25fe6027`)와 그 뒤 EN-먼저 일부가 ms에 안 갔다. `check:drift --tail` ms 14편(all-in · blind · drawing-odds · flush-vs-straight · game-order · glossary · outs · positions · reading-the-board · showdown · split-pot · strategy · when-to-fold · beginners). ▶ **다음 회차 후보 = ms 14편 EN 동기화**(글별 «ms masterUpdated 이후 EN diff» → ms 이식 · 검수장 MS 배치 순서와 겹치지 않게 통지). beginners 통지 ⓐ(tldr «unless everyone else folds first» · Fakta «normally moves»)도 그 회차에 포함 — 그래서 beginners masterUpdated는 아직 올리지 않았다.
- 🪶 통지 ⓑ «jarang bluff» ↔ «under-bluff» · ⓒ 단순 FAQ 프리플랍 생략 · ⓓ Astra EN 동형 묶음 = EN 손질 때 참고(자동 착수 금지).

### 2-AC. 우편함 수신분 — MA-350 (JA ④ §4 잔여 EN 원장 몫 · 기준 `0635dd8d`) · 판정·이행 2026-10-07 (6) · MB-197

> 근거 = 검수장 `reports/2026-10/검수-JA4잔여-EN원장몫-2026-10-07.md`. 요청 1 = EN 현행 문면 실재 확인 → **채택·이행**(EN + 8로케일 13자리 · fr은 아직 cooler 없음 → 🅵 gloss 레인이 lane:sync로 새 문면을 받는다).

| # | 자리 | 이행 |
|---|---|---|
| AC-1 | cooler «Cold deck» 불릿(EN #45 RISKY) — «In the dictionary it names the single unavoidable losing hand itself» | EN «Some poker glossaries use it for …» · de 2(불릿 + FAQ «Was ist ein Cold Deck» 답) · es · id · ms · pt 각 1 · ja · zh · zh-hant 각 2(불릿 + 세 용어 요약 인용 박스) — 전부 «일부 포커 용어집» 귀속으로. 역사적 사기 덱 뜻·테이블 용법 문장은 그대로 |

- 🪶 통지 ②(선택 · UNV · 자동 착수 금지): bad-beat Mabuchi «moved all in» ↔ 원보도 «splashing his chips» · position-play «bluff-catchers that under-realize» → «that tend to…» · chart «single biggest improvement» → «one of the biggest». EN 손질 때 같이.

### 2-AD. 우편함 수신분 — MA-353 (JA ④ §4 형제 통일) · MA-354 (사장님 결재 4건) · 판정·이행 2026-10-07 (8) · MB-198

| # | 자리 | 이행 |
|---|---|---|
| AD-1 | MA-353 ① cooler «사전» 귀속 7로케일 | MB-197 `058a9718`에서 이미 이행(MA-356 재판정 OK) |
| AD-2 | MA-353 ② ja showdown FAQ5 «どのキャッシュゲームでも…（ルール149）» | WSOP 룰북 귀속을 문장 안으로(L95 문면) |
| AD-3 | MA-354 ① flush-vs-straight «rarer always wins» | «among hand types, the rarer one always ranks higher» × 9로케일 + fr 통합 브랜치 |
| AD-4 | MA-354 ① probability 카드 «Why the rarer hand always wins» | «Why the rarer hand type ranks higher» × 7로케일 + fr 통합 브랜치 |
| AD-5 | MA-354 ① id equity·straddle 카드 | «posisi sangat menentukan» · «hampir hanya» |

- 🪶 EN equity 카드 «Why realization lives and dies on position»(전 로케일 동형) — 본문 충돌은 id뿐이라 이번엔 id만. EN 손질 때 «Why position shapes how much equity you realize»류로 형제 같이.
- 🪶 MA-353 통지 ③(선택 · UNV): zh positions «满员的 full ring 桌» → «满桌（full ring）» · reading «many rivers beat it» → «can beat it»(EN-먼저) · ja drawing L63 «およそ».

### 2-AE. fr 레인 집필 중 발견 — EN-먼저 후보 (fr 헤드 판정 H-9·H-24 · 2026-10-07 등재 · 🪶 자동 착수 금지)

> 출처 = `docs/fr-cluster-plan.md` §4-B H-9·H-24(레인 진행 파일 «EN-먼저» 표). fr은 각 자리를 이미 정확한 쪽으로 썼다 — EN 손질 회차에 EN + 핵심 로케일을 같이 고친다.

| # | EN 자리 | 의심 | fr 처리 |
|---|---|---|---|
| AE-1 | texas-holdem-rules-for-beginners L353 «43.8% most frequent at showdown» | 기준(5장/7장·쇼다운 조건) 불명 단정 | 🅰 진행 파일 |
| AE-2 | holdem-game-order L119 | 🅰 진행 파일 «EN-먼저» 행 | 〃 |
| AE-3 | holdem-continuation-bet L181 «charges all his missed hands» | 과장(«all») | fr «met sous pression» |
| AE-4 | holdem-position-play L128·L281 AK/AQ ↔ holdem-starting-hands-chart L121 | 형제 글 간 핸드 처리 불일치 | 🅳 진행 파일 |
| AE-5 | holdem-continuation-bet L105 «over 97% on all three boards» | 솔버 수치 귀속·범위 확인 | 〃 |
| AE-6 | holdem-glossary L38 «a dozen terms» | 실제 8쌍 | fr 개수 맞춤 |
| AE-7 | holdem-rake «most pots brush the cap» | 근거 없는 빈도 단정 | 🅵 진행 파일 |
| AE-8 | holdem-fish «competitors» | 어휘 | 〃 |
| AE-9 | holdem-cooler 인용 I→you | 인용 화자 | 〃 |
| AE-10 | 카드 «Who wins at showdown» | 대상 글 제목과 불일치 | 〃 |
| AE-11 | 3bet-pot-cbet L219 «the big blind holding every set combo» | L167·L176은 BB 6 · BTN 3(22) — «every» 과장 | 아스트라 10-07 · fr 축어 유지 |
| AE-12 | low-board-check-raise L289 «84 … the same eight outs» | 개수만 같고 카드는 다름(74 = 3·8 · 84 = 3·7) | 〃 |
| AE-13 | k-high-board-cbet L188 «QJ, JT and T9 that hold two live cards» | AQ·AJ 상대로는 한 장만 살아 있다 | 〃 |
| AE-14 | paired-board-strategy L215 «2.17 ÷ 2.60 ≈ 83.7%» + 시리즈 note «within a tenth» | 실제 83,46 % · IP 3,33 ÷ 2,90 = 114,8 vs 114,5 — 반올림 차가 0,2~0,3점 | fr note만 «quelques dixièmes»로 먼저 고침(§13) · EN + 로케일 note 같이 |
| AE-15 | holdem-pot-odds L191 «7 of 46 unseen cards, about 15.2%» | 상대 세트 조건부면 7/44 = 15,9 %(implied-odds L89는 그렇게 계산) | 아스트라 g2 10-07 · fr 축어 유지 |
| AE-16 | holdem-starting-hands-chart L65 «AK is never the favorite against a pocket pair» | AKs vs 22 = 50,08 %(전수 1 712 304 보드 · 아스트라 계산 — 재검산 필요) | 〃 |
| AE-17 | holdem-when-to-fold L112 «fills up ~34% of the time» | 34 % = 풀 30 % + 쿼드 4,4 % | 〃 |
| AE-18 | holdem-icm L175 3bb «forced all-in within a hand or two» | 앤티 없으면 블라인드 한 바퀴로 강제 올인이 아니다 | 〃 |

### 2-AF. 우편함 수신분 — MA-358 (솔버 랜딩 10로케일 결과 · 통지 3) · MA-365 (복습 큐 문구 결재 · 요청 1) · MA-360·362 통지 · 판정 2026-10-07 (14) · 회신 MB-200 · ✅ AF-1~3 이행 10-07 (15) `84434589` · MB-201

> 솔버 앱 실제 동작(검수장 근거): 복습 큐 = 최근 기록 중 EV 손실 0.05bb 초과 문제를 **최신순**으로 다시 냄 · 크기 선별·정렬 없음 · 3bet 팟은 «최선» 판정(≤~0.08bb)도 진입(`TrainerPage.vue` L2113-2122 · `db.ts` L346). 공유 링크는 노드락을 담지 않음(`spot-share.ts` L88-117). 연속 일수·완료 표시는 기기 localStorage(`daily.ts` L15-18).

| # | 자리 | 처방 | 판정 |
|---|---|---|---|
| AF-1 | MA-365 요청 1 · 복습 큐 «biggest / most EV» 9자리: `app/en/solver/solver-client.tsx` L565-566 · `app/en/solver/faq.ts` L99 · `app/{de L707, es L658, pt L691, fr L630, id L625, zh L619, zh-hant L620}/solver/solver-client.tsx` | «biggest/most» 제거 → EN «a Review queue of spots where you lost EV» 류 · 로케일은 EN 문안 확정 뒤 같은 뜻으로(ko «손실이 컸던 문제» · ja «EVロスが大きかった問題»는 검수장 OK — 현행 유지) | ✅ 채택 · RISKY · 고치면 MB 해시 → 변경 줄 재판정 |
| AF-2 | MA-358 통지 ① es·pt·fr 공유 FAQ «exactamente el mismo spot / exatamente o mesmo spot / exactement le même spot»(`app/{es,pt,fr}/solver/faq.ts`) | 노드락 미포함 한정 1구(«… con los mismos rangos y ajustes; los bloqueos de nodo no viajan en el enlace» 류) 또는 «exactamente» 제거 — EN faq엔 동형 없음(확인) | ✅ 채택(AF-1과 같은 회차) |
| AF-3 | MA-358 통지 ② «오늘의 문제 기록 동기» 문장(EN L566-567 «Signing in syncs your history for … Daily Challenge» + 전 로케일 동형) | 연속 일수·완료 표시는 기기에만 남는다는 한정 1구 — 앞 문장 «Streaks … run on your practice history»와 붙어 연속 일수까지 동기로 읽힌다 | ✅ 채택(AF-1과 같은 회차) |
| AF-4 | MA-358 통지 ③ | = AF-1(MA-365로 결재 완료) | 종결 → AF-1 |
| AF-5 | MA-360 통지 1(선택) equity «Stack depth & skill» 카드 8로케일 · «hands that want a multiway pot are the ones that make the nuts» | 조건(«out of position» 등) 추가 · «tend to» 완화 | 🪶 보류 — 라벨 UNV(오류 아님) · equity EN 손질 회차(§2-AD 🪶 «realization» 카드와 묶음) |
| AF-6 | MA-362 통지 1 EN equity 카드 «Why realization lives and dies on position» 형제 동형 | 이미 §2-AD 🪶로 등재 | = §2-AD 🪶(중복 등재 안 함) |

- MA-360 통지 2(TDA 헤즈업 버튼 = 2024 v1 Rule 34 · 2026 v1.0 번호 미확인)는 검수장 원장 근거 정정이라 본체 할 일 없음 — ACK.
- MA-359·361·363(착수 공지) · MA-364(요청 0 · 라벨 정리만) = ACK.
- ✅ 이행 결과(10-07 (15) `84434589`): AF-1 = 9자리 + 형제 사본 tr(본문·FAQ)·ms(본문·FAQ)·hi(본문·FAQ) — «EV를 잃은 문제»로 · ko·ja 유지. AF-2 = es·pt·fr «exactamente» 제거 + «같은 레인지·설정 · 노드에 고정한 전략은 링크에 안 담김»(용어 = 앱 `node-lock-labels.ts` «Fijar/Fixar/Fixer la stratégie» 축어 · `spot-share.ts`로 레인지·보드·팟·스택·레이크·벳 사이즈·임계값 포함 확인). AF-3 = 13로케일 본문 동기 문장 + 저장 FAQ 6로케일(en·ko·ja·tr·hi·ms) «오늘의 문제 연속 일수·완료 표시는 기기마다»(`daily.ts` localStorage 확인).


### 2-AG. 우편함 수신분 — MA-367 (FR 회차 1 🅰 rules 6편 · 기준 `ceed9c0d`) · 판정·이행 2026-10-08 (1)

> 근거 = 검수장 `reports/검수-fr-r1-rules-2026-10-07/hq-reverify/HQ-REPORT.md`. 본체 판정 = 인용 문면 전부 fr·EN 파일에서 실재 확인 + 근거 조문 원문 확인(`docs/sources/tda-2024-rules-v1.txt` 17-A · 34-B · 45-A · 47-A). **요청 1의 9자리 전부 채택·이행**(기각 0 · fr 고유 · EN 무변경 · fr 다른 글 사본 grep 0). diff 교열 렌즈(fr 네이티브+TD · Opus 5.5) 지적 3 채택 = AG-9 «déjà parlé» 과대(47-A «not facing a full bet» 조건 · 누적 예외) · AG-7 지시어 · AG-5 묶음·토너먼트 한정.

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| AG-1 | game-order | 버튼 «seule la règle du bouton mort … fait exception» (WRONG) | EN 꼴 «il avance normalement d'un siège après chaque main (la règle du bouton mort … est l'exception)» |
| AG-2 | all-in | 본문·방법 2자리 «une mise qui demande (déjà) tous tes jetons» | 45-A 검사 문형 «une mise où chacun de tes jetons est nécessaire rien que pour la suivre» |
| AG-3 | blind | 블라인드 놓침 문단 | «En cash game live, …» 한정(토너먼트는 같은 글 앞 문단이 이미 다룸) |
| AG-4 | showdown | «Quand montrer» 직답 «si tu es le dernier agresseur» | «le dernier à avoir misé ou relancé sur la river» |
| AG-5 | betting | 실수 절 머리 조문 열거 | «90.a/90.b.1, 90.d, 84 (en tournoi) et 97 … ces quatre cas, dans cet ordre» (실수 ③ = A 84 · 84는 토너먼트 조항) |
| AG-6 | showdown | 표 «Règle TDA (Rule 17)» | «TDA 2024, règle 17» |
| AG-7 | game-order | «suit toujours six étapes» | «menée jusqu'à l'abattage … — si tous les joueurs sauf un se couchent avant, elle s'arrête plus tôt» |
| AG-8 | betting | call 비용 «le montant de sa mise» | «ce qu'il faut pour égaler sa mise — seulement la différence si tu as déjà mis des jetons dans ce tour» |
| AG-9 | game-order | «dépendent d'une seule chose» | «avant tout d'une question» + 47-A 한 줄(이미 벳·콜 + 짧은 올인 → 콜·폴드만 · 누적 짧은 올인 예외 포함) |

- ⚖ F1 4자리(beginners «Pour débuter en argent réel» · 홈게임 FAQ · game-order «plus petites limites» 2) = **검수장 사용자 결재 대기** — 결재 뒤 요청 오면 이행(그 전 착수 금지).
- 🪶 통지(자동 착수 금지): (a) **EN-먼저** betting «can't raise your own bet» 3자리(EN L146·L209 · 형제 7로케일 동문) — BB·라이브 스트래들 레이즈 옵션(B 159·165) 한정 검토 = EN 손질 회차 (b) fr 단독 경미: game-order 도입 헤즈업 괄호 · beginners «nouvelle carte commune» ↔ EN «street» · betting 체크 열거 스트래들러 · «règle 103» 룰북 접두 · fr positions FAQ «Le bouton avance d'un siège … après chaque main»(«normalement» 없음 · 본체 발견) (c) Astra EN 동형 묶음(검수장 `hq-reverify/triage/`) (d) 검수장 몫: EN 원장 SB raise-or-fold ↔ UNV 통일 재판정.

### 2-AH. 우편함 수신분 — MA-368 (FR 🅱 rank 6편 · 기준 `ceed9c0d`) · 판정·이행 2026-10-08 (4)

> 근거 = 검수장 `reports/검수-fr-r2-rank-2026-10-08/hq-reverify/HQ-REPORT.md`. 요청 1의 3자리 = 인용 문면 실재 확인 · ①은 본체 §13 검산(보드 A♦7♣2♥Q♠4♦ + 5-3 = 휠 가능 · A♠9♣·A♥K♦ 둘 다 스트레이트·플러시 없음) → **전부 채택·이행**(fr 고유 · EN 무변경 · fr 사본 0).

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| AH-1 | kicker | «ni quinte ni couleur possible» (WRONG) | «et aucune des deux mains ne touche de quinte ni de couleur» |
| AH-2 | kicker | 직답 «Avec un as au board, A-K bat A-Q» | «Quand l'as du board ne donne qu'une paire d'as à chacun, …» + 같은 글 tldr «quand un as tombe sur le board» 사본도 같은 한정(렌즈 발견) |
| AH-3 | hand-rankings | 로열 문단 «Le jour où tu la touches» 위치 | EN 순서대로 로열 문장 바로 뒤로(스틸 휠 문장 앞) |

- ✅ **검수장 재판정 = MA-372**(10-08 · 요청 0): AH-1 kicker #39 WRONG→OK · AH-2 #25 RISKY→OK(tldr 사본 #4 OK 유지) · AH-3 #154 RISKY→OK · 이행 문장 결함 0 · 신설 0. 남은 FR 🅱 RISKY = kicker #30 · hand-rankings #30(아래 ⚖ 형제 통일 결재 소속).

- ⚖ 형제 통일 6자리(kicker note · flush 요약 3 · split FAQ «automatique» · split L79 · reading «troisième» · hand-rankings «deux façons») = **검수장 사용자 결재 대기** — 권고안(FR RISKY 유지 + 본체 EN-먼저)으로 결재되면 EN 손질 회차로 요청이 온다(그 전 착수 금지).
- 🪶 본체 발견(EN-먼저 후보 · 자동 착수 금지): EN kicker L128 «no straight or flush out there» · tldr «AK beats AQ when the board pa(irs an ace)» 동형 — 검수장은 EN을 두 손 한정 독해로 OK.
- 🔧 게이트: AH-1 새 문장이 H5 오탐(fr 부정 «ne touche de quinte» 미인식) → `scripts/audit-hardening.mjs` handMentions에 fr 부정(aucun·pas·jamais · «ne <동사> de») + 셀프테스트 2(82/82) · id·ms·es·pt·de·en 전후 결과 동일.
- 🪶 통지(자동 착수 금지): hand-rankings «garde-le à côté de toi»(토너먼트 TDA 5-D) · tiebreak 단색 보드 SF 반례 · reading 트립스 «deviennent» · Astra EN 동형 B 5건.

### 2-AI. 우편함 수신분 — MA-370 (MB-203 이행 전/후 · 기준 `d5e5fc0b`) · 판정·이행 2026-10-08 (4)

> 근거 = 검수장 MA-370(TDA 2024 47-A · Addendum 47 Ex 1/1-A 본부 덤프). 본체 판정 = 47-A 원문(`docs/sources/tda-2024-rules-v1.txt` L396~) 확인 — «not facing at least a full bet or raise when the action returns to them»는 그 플레이어 자신의 앞선 금액 기준 증분이고 범위는 «In no-limit and pot limit» → **채택·이행**(fr 고유 · EN 무변경 · 같은 문장 fr 사본 0 · 형제 all-in tldr 기존 문면과 같은 꼴).

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| AI-1 | game-order | AG-9 신설 문장 예외절 «sauf si plusieurs petits all-in cumulés atteignent une relance complète» (RISKY) | «Une nuance, en no-limit et en pot-limit : … — sauf si plusieurs petits all-in cumulés te mettent face à au moins une relance complète au-dessus de ce que tu as déjà mis (TDA 2024, règle 47-A).» |

- 🪶 통지(자동 착수 금지): ① game-order L46 버튼 «après chaque main»에 «normalement» 없음(#12와 한정 정도 차이) = §2-AG (b) positions FAQ와 같은 계열 — 손질 회차에 함께 ② betting #73 일화(live 캐시) ↔ 90·97 WSOP 토너먼트 번호 = 결론 불변 · 기존 J1 #74 정리.

### 2-AJ. 우편함 수신분 — MA-373 (FR 🅲 prob 7편 · 기준 `ceed9c0d`) · 판정·이행 2026-10-09 (2)

> 근거 = 검수장 `reports/검수-fr-r3-prob-2026-10-08/hq-reverify/HQ-REPORT.md`(792행 · OK 736 · RISKY 1 · WRONG 0 · UNV 55 · 수치 오류 0). 본체 판정 = 요청 1 인용 문면 + 통지 7 앵커 전부 fr 파일에서 실재 확인(`grep`). 요청 1 = EN desc «but you don't always keep it» 부분 부정 이식 → **채택·이행**(fr 고유 · EN 무변경 · 같은 문면 fr 다른 글 사본 0 · 159자 ≤160). `docs/fr-lanes/prob-brief.md` L991 메타 표의 옛 desc는 집필 브리프(이력)라 손대지 않는다.

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| AJ-1 | equity | desc «c'est ta part du pot, pas ce que tu encaisses» (RISKY · 무한정 부정 ↔ 같은 글 L140 «tu réalises 100 % de ton équité» 올인) | «c'est ta part du pot — mais tu ne l'encaisses pas toujours» (EN desc 꼴 · 나머지 문면 그대로) |

- 🪶 통지 7(FR 라벨 불변 · 자동 착수 금지): **EN 동문 → EN-먼저 후보** ① probability FAQ L271 «La paire, suivie de la double paire»(전원 쇼다운 MC 기준 2인만 원페어 1위 · 3인부터 투페어 · 실제 팟 분포 1차 없음 → 8로케일 UNV · «tête-à-tête» 한정 후보) ② equity 카드 L131 «Des stacks plus profonds … rendent l'équité marginale plus difficile à réaliser»(Upswing: SPR↑ → IP 실현↑ · OOP 반대 · 8로케일 UNV) ③ drawing-odds tldr·À retenir L243 «Chaque chiffre … du paquet» ↔ 같은 글 «vise à gagner 15×»(경험칙 표지 없음) ④ outs tip L139 «mise devant toi → ×2» ↔ 바로 앞 «payé un tapis»(올인 콜이면 ×4 유효) ⑦ drawing-odds H2 L37 «préflop, flop, turn, river dans un seul tableau»(turn 단독 열 없음). **fr 단독 경미** ⑤ probability FR 고유 FAQ L287 «plus basses, et donc moins rares»(7장 개별 SF 4 140 < 로열 4 324 · «donc» 인과 — 묶음으로는 더 흔함) ⑥ card-counting desc L7 «L'interdit en salle»(EN «whether it's legal» → 금지 전제) = §2-AG (b)와 같은 손질 회차에.
- 검수장 처분(참고): 재라벨 4 · 신설 4 · 근거 칸 산수 정정 3 · 병합 `b727ef5`. 다음 회차 = FR 🅳(= MA-374 · §2-AK).

### 2-AK. 우편함 수신분 — MA-374 (FR 🅳 strat 8편 · 기준 `ceed9c0d`) · 판정·이행 2026-10-09 (3)

> 근거 = 검수장 `reports/검수-fr-r4-strat-2026-10-08/hq-reverify/HQ-REPORT.md`(1 067행 · OK 669 · RISKY 7 · WRONG 0 · UNV 391 · 수치 오류 0). 본체 판정 = 인용 문면 전부 fr·EN 파일에서 실재 확인 · EN 09-26 L-2h «rather than open-limp» 이행(EN tldr L8·결정표 L48·요약 L244) 대조 · 같은 글 fr 요약 L248 «compléter la petite blinde … est l'exception» + limping L86·L168 «over-limp … défendable»와의 모순 확인. **요청 1~3 전부 채택·이행**(기각 0). 요청 3은 EN-먼저라 EN → 핵심 8로케일 + fr 전파(ar은 position-play 없음 · 기존 §2-Y 전파 범위 = de·es·id·ja·ms·pt·zh·zh-hant). `updated` 스탬프 전부 유지(문장 미세 수정 · settled §1-C).

| # | 글 | 자리 | 이행 |
|---|---|---|---|
| AK-1 | fr strategy | tldr «plutôt que de limper» · 요약 L40 «(plutôt que limper)» · 결정표 L52 «plutôt que limper ?» (RISKY 3 · limp 전체 배제) | «plutôt que d'open-limper» / «(plutôt qu'open-limper)» / «plutôt que d'open-limper ?» (EN L-2h 꼴 · fr limping 글의 «open-limper» 동사형 재사용) |
| AK-2 | fr limping | desc «est presque toujours une erreur» (RISKY · EN «usually» 강화) | «est le plus souvent une erreur» (EN desc 꼴 · 157자) |
| AK-3 | fr position-play | L232 «le jeu se réduit au push/fold» (RISKY · EN «collapses toward» → 배타 단정 · pt 옛 WRONG 선례) | «le jeu bascule vers le push/fold» |
| AK-4 | **EN** position-play + 8로케일 + fr | FAQ c-bet «so wide betting including air is safe» (RISKY · 체크레이즈 = OOP 무기 · 표는 «vs blind defense» 한정) | EN «so betting wide, air included, is far safer there than out of position (that figure is versus blind defenders; a check-raise can still punish it).» → fr·de·es·id·ja·ms·pt·zh·zh-hant 같은 뜻으로 각 1자리(치환 10/10 · 각 파일 1회) |

- ⚖ strategy 실수 표 L156 «Un call … il doit toucher ou arriver devant à l'abattage» = FR RISKY ↔ JA OK · EN 원장 앞 절만 → **검수장 사용자 결재 대기**(MA-368 형제 갈림 6자리와 같은 부류) — 결재 뒤 요청 오면 이행(그 전 착수 금지).
- 🪶 통지 7(FR 라벨 불변 · 자동 착수 금지): **EN 동문 → EN-먼저 후보** ① when-to-fold À retenir L250 «quand tu es battu, ça bat toutes les alternatives négatives»(본문 «sans la cote … ni la fold equity» 한정 탈락 · 본부 OK) ② strategy FAQ L220 «plus d'environ une main sur cinq … presque certainement trop»(6-max VPIP 20–30 % · 포맷 한정 후보) ③ position-play À retenir «la SB est le pire siège»(헤즈업 SB = 버튼 · FAQ L261 «trois joueurs ou plus» 한정 탈락) ④ starting-hands-chart FAQ 7-2 «uniquement pour pimenter les home games»(EN «purely» · 카지노 캐시 바운티 사례). **fr 용어** ⑤ 3bet L287 «fréquence de fold d'équilibre»(EN «break-even» → «균형 빈도»로 읽힘 · «seuil de rentabilité» 후보) ⑥ limping FR 고유 FAQ L152 «connecteurs assortis … set-mining»(set-mining은 페어 전용 용어) ⑦ positions H2 L163 «6-max, 8-max, 9-max» ↔ 표에 8인 행 없음(FR 고유 추가 · 8-max 삭제 또는 행 추가). ⑤⑥⑦은 fr 단독이라 §2-AG (b) 손질 회차에.
- 검수장 처분(참고): 라벨 이동 14 · 신설 10 · 병합 `df33ff3`. 다음 회차 = FR 🅴 tour(검수장 사용자 결정 대기) · 결재 2건(위 ⚖ + MA-368 형제 갈림).

### 2-AL. `/vi/solver` 신설 렌즈·아스트라가 EN 솔버 랜딩에서 찾은 EN 동문 — 2026-10-09 (5) · ✅ AL-1~8 이행 10-10 (10) MB-225(§2-AQ (b) 회차)

> 근거 = vi 랜딩 신설 회차의 §13 렌즈 + 아스트라(codex gpt-6-astra) 보고. vi판은 EN 정정본을 구분자만 바꿔 옮긴 것이라 아래는 전부 **EN `app/en/solver/{solver-client,faq}.tsx` 원문**의 사안이고, 고치면 13로케일 솔버 랜딩 전부에 전파해야 한다. vi에서 먼저 고친 2건(AL-1·AL-2)은 vi만 바뀐 상태(로케일 고유 의도 편차 아님 — EN 정정 뒤 다시 맞춘다).

| # | 자리(EN) | 문제 | 처방 후보 |
|---|---|---|---|
| AL-1 | solver-client 무료 범위 문단 L458 «The settings that normally sit behind a **paid** desktop solver»(10-10 MA-406 통지로 인용 축어 정정) | 사실 시트 §5 «유료 솔버 비교 금지(«다른 곳은 유료» 포함)» 저촉 | «installed desktop solvers»(설치형 축) — vi는 «solver desktop phải cài»로 선반영 |
| AL-2 | faq «Which GTO solver is better…» «without **paying** or installing anything» | 같은 규칙(비교 문항 안이라 «다른 쪽은 유료» 암시) | «free and with nothing to install» — vi는 «miễn phí và không cần cài đặt»로 선반영 |
| AL-3 | 9♥8♥7♣ note «The **only** single-raised board where BB truly leads: 23.7%» | §4-B에 SRP BB 리드 ⑤ 11,2% · ⑦ 3,2% · ⑥ 3,0% 있음 → «유일» 단정(D유형) | «the SRP board where BB leads most (23.7% — next is monotone 11.2%)» |
| AL-4 | 8♦5♣2♠ note «just gutshots and backdoors» | 3벳 레인지 14종에 A5s(세컨드 페어 5) 있음 → «chỉ/just»가 메이드 핸드 부재로 읽힘(F유형 경계 · 판정 필요) | «no top pair — overpairs, A5s's pair of fives, gutshots and backdoors» 판정 후 |
| AL-5 | faq «Why is grading relative to the pot?» · 트레이너 bullet «0.02bb and 0.06bb / 0.08bb and 0.23bb» | 반올림 값을 정확 임계처럼 서술(실제 0,055 · 0,07875 · 0,225) — 0,08bb가 22,5bb 팟에서 «acceptable»인 것과 맞물려 자기모순처럼 읽힘 | «rounded to two decimals, the cutoffs work out to about …» 한 구 |
| AL-6 | solver-client 포스트플랍 절 «Together they cover a whole hand: the chart decides what you open, the solver …» | 차트는 오픈 레인지뿐(vs 오픈·3벳·4벳 대응 없음) · «solver decides» 과장 | «the chart gives opening ranges by position; the solver analyzes postflop — facing a raise preflop needs its own ranges» |
| AL-7 | solver-client 무료 범위 L459 «The **one** real boundary …»(10-10 MA-406 통지로 인용 축어 정정) | 같은 페이지가 4GB·속도·반복 상한을 말함 → «유일» 모순 | «The main limit …» |
| AL-8 | faq·COMPARE «Solution libraries such as GTO Wizard let you browse spots solved in advance» | GTO Wizard에 custom solving(레인지·팟·스택·트리 편집)이 있음(help.gtowizard.com custom-solving-faq) → «열람 전용» 묘사는 경쟁 제품 사실 오류 위험(§12-B 1차 출처 확인 뒤) | «solution libraries let you browse pre-solved spots (GTO Wizard also offers custom solving); the difference here is that the solve runs on your own CPU in the browser» — 가격·우열 언급 없이 |

- ⚖ **검수장 판정 10-10 (MA-406)**: AL-3~AL-8 = 전부 RISKY 확정 → 이행 재료·EN 동문 추가 3자리·로케일 예외는 **§2-AQ (b)**. AL-1 사실 = UNV(«normally» 분포 단정) · AL-1·2 «유료 비교»는 본체 편집 규칙 사안(판정 밖) · AL-2 명시 주장 OK.
- 📬 솔버 쪽 통지 후보(이번 MB에 적음): 앱 `presets.ts` lessonVi ④ «có lợi cho bên call» · ⑦ «BB check-raise thường xuyên» · ⑧ «Ở SPR thấp, cược nhỏ gây áp lực» = EN 랜딩이 M-038·M-042로 철회한 옛 명제(랜딩은 정정본이라 영향 없음 · 앱 해설 드리프트).

### 2-AM. 우편함 수신분 — MA-385 요청 1 (FR 형제 갈림 7자리 · 사장님 결재 «FR RISKY 유지 + EN-먼저» 10-09) · 등재 2026-10-09 (7) · ✅ 이행 10-10 (11) MB-226(EN 7 → 13로케일 · AM-1 실제 자리 = L105 note · AM-5 = L163 · AM-6은 같은 문장 «The five» 개수도 해제)

> 근거 = 검수장 `DECISIONS.md` §0-F «FR 결재 3건» ③ · `reports/검수-fr-r2-rank-2026-10-08.md` §2 · `reports/검수-fr-r4-strat-2026-10-08.md` §2 · `reports/검수-fr-r1-rules-2026-10-07.md` §3. **문안 창작 아님 — 같은 글 안 재료로 보정.** EN 고친 뒤 13로케일 전파 → 이행 MB → 검수장이 EN·형제 원장을 새 문면으로 재판정(지금 형제 재라벨 없음).
> 🔴 **위치 대조(본체 10-09 · 현 main `025a5d86`)**: MA 인용은 축어가 아닌 자리가 있고 행 번호도 어긋난다(기준 커밋 차이). 이행 회차 첫 단계 = 아래 «현 위치» 확인 → 미발견 ⑤는 보고서 §2에서 원문 재확인.

| # | 글(EN) | MA 자리 · 문제 | 현 위치(본체 대조) |
|---|---|---|---|
| AM-1 | holdem-kicker | L93 note «only counts as a kicker if it beats what is on the board» ↔ 같은 글 L118·L121(보드보다 낮은 두 번째 키커) 모순 | 축어 미발견 · 후보 = L105 `:::note` «Kickers can come from the board too … Your hole …» |
| AM-2 | holdem-flush-vs-straight | L208 요약 3 «connected … it is a straight flush» = 가능성을 성립으로 단정(앞 두 절은 possible) | L220 «suited *plus* connected is a straight flush» ✅ |
| AM-3 | holdem-split-pot-rules | L195 FAQ «a split pot at showdown is automatic» = 홀카드 공개 조건(WSOP A 75 · B 172) 탈락(본문 L91 정확) | L207 ✅ 축어 |
| AM-4 | holdem-split-pot-rules | L91 «your hand only wins if you turn it face up» = TDA 2024 17-B · WSOP A 72 · B 15 «마지막 라이브 핸드» 반례 → «쇼다운에서 상대가 남아 있으면» 한정 | L91 ✅ 축어 |
| AM-5 | holdem-reading-the-board | L143 «your pair suddenly becomes the third-best hand» = KK732 보드 원페어 위 투페어 등 범주 4 | ❓ 축어·«third» 미발견(L163 «top pair shrinks on paired boards» 부근 후보) → 보고서 원문 확인 |
| AM-6 | holdem-hand-rankings | L63 «two kinds of three of a kind» ↔ L126 «three ways» 내부 모순 | L75 «the two kinds o[f three of a kind]» ↔ L138 «three ways to make it» ✅ |
| AM-7 | holdem-strategy | L140 실수 표 «a call … must hit or be ahead at showdown» = 배타 필요조건(플로트 반례 · 같은 글 FAQ 문형이 안전) | L152 «it has to hit or reach showdown ahead» ✅ |

- 범위: EN 7자리 → 13로케일 동문 전파(fr는 같은 자리 RISKY 행) · `updated` 스탬프 settled §1-C(문장 미세 수정이면 유지).
- 같은 MA 통지 2건(이행 불요): F1 리얼머니 4행 = OK(ANJ 관할) · 🪶 «18세 이상 · ANJ 인가 사이트» 한정은 권고 · 🅴 tour 5편 FR 회차 제외(51→46 · 제외 ≠ 사실 통과).

### 2-AN. 우편함 수신분 — MA-387 (FR 🅵 gloss 6편 본부 재검증 · 승인 검수장 `4c6e6b3`) · 등재 2026-10-09 (11) · (a) ✅ 이행 10-10 (10) MB-225 · (b) ✅ 이행 10-10 (11) MB-226

> 근거 = 검수장 `reports/검수-fr-r5-gloss-2026-10-09/hq-reverify/HQ-REPORT.md` §표 1~11 · `ledger/fr/holdem-{glossary,cooler,bad-beat,fish,rake,straddle}.md`. **문안 창작 아님 — 같은 글·형제의 기존 한정 문면을 재료로 원문 대조 뒤 채택/기각.** 이행 뒤 MB → 검수장이 변경 행만 전/후 대조.
> ✅ **위치 대조(본체 10-09 · 현 main `ca90ac76`)**: 11자리 전부 ledger 축어로 실재 확인(아래 «현 위치»). EN 동문도 확인.

**(a) FR 고유 4자리**(요청 1 · fr만)

| # | 글 · ledger | 판정 · 문제 | 현 위치(fr) | 재료 |
|---|---|---|---|---|
| AN-1 | cooler #2 | WRONG · desc «Pourquoi ce n'est pas un bad beat» = 엄격 정의 한정 없이 배타(09-25 cooler 결재) | L7 desc | EN desc «why, **strictly**, it's not a bad beat» |
| AN-2 | fish #89 | RISKY · 카드 «La mise qui gonfle le pot au profit du fish» = 팟 확대를 fish 이익으로 단정 | L235 카드 | 수혜자 단정 대신 팟 확대 설명(EN 해당 카드 대조) |
| AN-3 | rake #89 | RISKY · FAQ «c'est tout le modèle économique d'une salle de poker, d'un casino ou d'un site» = 카지노 전체 사업으로 확대 | L169 FAQ | 같은 답의 «principale» 포커룸 주 수입 범위 |
| AN-4 | straddle #85 | RISKY 높음 · FR 고유 FAQ «les deux joueurs à gauche du bouton» = 헤즈업 SB=버튼 예외 누락(TDA 2026 §36-C · WSOP B §157) | L190 FAQ | pt blind FAQ의 헤즈업 예외 이행 문면 |

**(b) EN-먼저 7자리**(요청 2 · EN → 13로케일 → fr 포함)

| # | 글 · ledger(fr) | 판정 · 문제 | fr 위치 | EN 동문 |
|---|---|---|---|---|
| AN-5 | glossary #139 | WRONG 높음 · Run it twice «cash-game only» ↔ WPT 2025 공식 라이브 토너먼트 규정 Run It Twice 허용 | L263 | L243 «— cash-game only, and everyone involved must agree» → 통상 캐시 관행으로 한정(특별 포맷을 일반 토너 자유 허용으로 확대 금지) |
| AN-6 | bad-beat #43 | RISKY · 7 보드에서 77 «almost always» — 조건부 열거 77 승 80,8008% · AA 승 18,3311% · 무 0,8681% | L101 | L100 «their three-of-a-kind almost always beats your pair — only an ace or a rare runout … saves you» → 빈도 표현 검토(구제 목록 누락 지적은 기각) |
| AN-7 | cooler #22 | RISKY · bad beat 역전을 턴·리버로 한정(같은 글 플랍 역전 예시와 충돌) | L62 | L53 «hit a lucky card on the turn or river» → id 현행 «플랍·턴·리버» 문면 재료 |
| AN-8 | fish 새 #90 | RISKY · 요약 «stop chasing» = 드로 가격 조건 탈락(44리버 전수 · 팟 100에 5 콜 EV +15 반례) | L208 | L207 «play fewer hands, fold more, and stop chasing.» → 같은 글 L153·L195 «without a price / without the right pot odds» |
| AN-9 | straddle #10 | RISKY · 표 요약 «Cash only» ↔ 같은 행 «Almost never allowed in tournaments» | L31 | L30 → 본문 범위 한정 보존 |
| AN-10 | straddle #90 | RISKY · 카드 «cash-game-only thing» = 배타 | L225 | L216 «Why straddles are a cash-game-only thing» → 본문 «essentially» 범위 |
| AN-11 | straddle #47 | RISKY · «Even in cash games it's optional» ↔ WSOP 2026 B §165·166 게시 의무형 | L115 | L114 → 일반 선택형 vs 게시된 의무형 구별 |

- 범위: (b)는 EN 7자리 → 13로케일 동문 전파(fr는 같은 자리 RISKY 행) · `updated` 스탬프 settled §1-C(문장 미세 수정이면 유지). (a)는 fr만.
- 같은 MA 통지 3건(이행 불요): ① cap #24 · rake 순액 #104 · bad-beat #96 · setup FAQ 다의어 지적 기각 → 기존 OK ② 빈도·분포 UNV · 영화 대사 fish #40·41·70 UNV(2차 전사만 · 수정 요구 아님) ③ F1은 10-09 결재② — 라벨 불변 + 성인·합법 관할 한정 권고 🪶.

### 2-AO. 우편함 수신분 — MA-392 (FR GTO13 경량 트랙 · 검수장 DECISIONS §0-N · 기준 `33b3e18a`) · 등재 2026-10-09 (11) · AO-1 ✅ 10-10 (10) MB-225 · AO-2·3 ✅ 10-10 (11) MB-226

> 근거 = 검수장 `reports/검수-fr-gto13-경량-2026-10-09/REPORT.md`. EN 정정 39자리 FR 반영 37 + UNV형 2(결함 잔존 0). ✅ 위치 대조(본체 10-09 · 현 main): 3자리 전부 축어 실재.

| # | 글 | 판정 · 문제 | 현 위치 | 재료 |
|---|---|---|---|---|
| AO-1 | **fr** ace-paired-board-strategy | RISKY 낮음 · FR 고유 · «L'as est la carte que l'agresseur préflop possède le plus» = EN «holds **more** of»(BB 대비)를 최상급으로 · SB 레인지 K 129 · Q 109 · A 95 | fr L107 | EN L199 비교급 |
| AO-2 | **EN** 3bet-pot-bet-sizing → 13로케일 | RISKY 중간 · «those underpairs put the money in surrounded by two overcards» = 09-23 WRONG #13 잔존(JJ는 Q만 오버카드) | EN L229 · fr L115 «cernées par deux overcards» | 같은 글 EN L275 «except JJ, which sits between them» |
| AO-3 | **EN** paired-board-strategy → 형제 로케일 확인 | RISKY 낮음 · note «lands within a tenth of a point» ↔ 반올림값 재계산 0,11pp · 0,17pp | EN L219 | fr L132 «à quelques dixièmes de point près»가 맞는 꼴(형제 로케일 각각 확인) |

- 🔴 vi 🅶 레인(10-09 진행)에는 HARDEN.md로 AO-2·AO-3 정정 뜻 선반영을 알렸다 — EN 정정 뒤 vi는 다시 맞출 필요 없음(AL-1·2와 같은 방식).
- 통지 1(기각 · 라벨 불변) · 통지 2(EN 원장 무효 10행 = EN 손질 회차에 갱신) 접수. 검수장 회귀 감시: AO-1·AO-2 이행 시 결함형 감시 🔴 = 이행 신호.

### 2-AP. `/ru/solver` 신설 렌즈(10-10 회차 B)가 찾은 EN 솔버 랜딩 동문 · 등재 2026-10-10 (3) · AP-1·2 ✅ 10-10 (10) MB-225 · AP-3 ✅ 판정 해당 없음 10-10 (12) MB-227(EN·vi·tr·ru 전부 제한적 수식 · 다른 로케일 문장 없음) · AP-4 사장님 판단

> ru는 신설 시점에 바르게 썼다(EN 문면과 이 자리만 다름 · EN 정정 뒤 일치). 나머지 14랜딩은 EN 정정 → 전파.

| # | 자리 | 판정 · 문제 | 근거 | 처방 |
|---|---|---|---|---|
| AP-1 | **EN** `app/en/solver/solver-client.tsx` SPOT_GROUPS 9♥8♥7♣ note → 14랜딩 | 🔴 사실 · «The only single-raised board where BB truly leads» — Q♠9♠2♠도 BB 리드 11.2%(스펙 §4-B L393·L419 · EN `monotone-board-strategy` L106 «lead 11.2%») | 아스트라 교차(10-10) | «the single-raised board where BB leads most: 23.7% (11.2% on monotone Q♠9♠2♠)» 꼴 — ru 문면 참조 |
| AP-2 | **EN** 솔버 랜딩 «0.08bb … 0.36% of a 22.5bb pot (acceptable)» ↔ «thresholds 0.08bb and 0.23bb» | 🟡 표시 모순(실제 컷 0.07875bb → 반올림) | 수치 렌즈(10-10) | «≈0.08bb» 또는 예시 값 교체 — EN 판정 뒤 |
| AP-3 | **EN** 솔버 FAQ «Windows-only desktop solvers» 류 | 🟡 확인 · 전 로케일 번역에서 비제한 용법(«데스크톱 솔버=전부 Windows»)으로 옮겨졌는지 | 모스크바·초심자 렌즈(10-10) | 로케일별 문면 확인 |
| AP-4 | 솔버 랜딩 전반 — 사이드바 «Hand review»(복기) · «Preflop Chart» 미언급 | 🪶 제안 · EN에 없음 → EN 판단 먼저 | 초심자 렌즈(10-10) | 사장님 판단 |

- 🔗 **겹침(10-10 (4) 대조)**: AP-1 = §2-AL AL-3과 같은 자리(L169) — 검수장 MA-408이 ru 정정 문면 «BB донкует чаще всего … Q♠9♠2♠ — 11,2%»를 **OK** 판정(SRP 리드 최대 ④ 23.7 · 둘째 ⑤ 11.2) → EN 처방 꼴로 확정. AP-2 = AL-5와 같은 사안. 이행은 §2-AQ (b) 한 회차로 묶는다.

### 2-AQ. 우편함 수신분 — MA-403 (MB-212·215 후기·`/s` 문구) · MA-406 (MB-211 `/vi/solver` + 횡단) · MA-408 (MB-218 `/ru/solver` + ru 문구) · 등재 2026-10-10 (4) · 회신 MB-219 · (a) ✅ 이행 10-10 (5) MB-220 · (b) ✅ 이행 10-10 (10) MB-225(EN 9 + AL-1·2 → 14로케일 · WORKLOG 10-10 (10))

> 근거 = 검수장 `reports/판정-MB212-215-2026-10-10/judge-MB212-215.md` · `reports/2026-10/검수-solver-vi-MB211-2026-10-10/REPORT.md`·`횡단-판정표.md` · `reports/2026-10/검수-solver-ru-MB218-2026-10-10/REPORT.md`·`judge-ru-strings.md` · `ledger/landing/solver-*.md`. WRONG 0(랜딩 문면) · WRONG 1은 소스 주석(화면 영향 0).
> ✅ **위치 대조(본체 10-10 (4) · 현 main `d71a896f`)**: 아래 «현 위치» 전부 축어 실재 확인.

**(a) 본체 사전·코드 — EN-먼저 아님(15로케일 사전 한 파일씩) · 이행 뒤 MB → 검수장 변경 줄 대조**

| # | 출처 | 판정 · 문제 | 현 위치 | 처방 꼴(MA) |
|---|---|---|---|---|
| AQ-1 | MA-403 요청 1 | WRONG(주석) · «open = 각 언어 솔버 랜딩의 CTA 축어» ↔ 실제 0/14 일치(ko «솔버에서 열기 →» vs 랜딩 «솔버 바로 실행하기 →») | `lib/spot-share-i18n.ts` L6 | 주석을 «랜딩 CTA와 별개 문구»로 사실화(문구 교체보다 이쪽 — /s는 «이 스팟 열기» 맥락) |
| AQ-2 | MA-403 요청 2 | RISKY 경미 · `image_type` «jpg·png·webp만» ↔ 서버 `gif` 허용 · 클라이언트 accept에도 gif (14언어 + ru = 15) | `lib/solver-reviews-i18n.ts` 각 로케일 `image_type`(L143·L226·L309…) ↔ `app/solver-feedback/actions.ts` L133 | 택1: 안내에 gif 추가 / 서버·accept에서 gif 제외 — 🔴 SQL·스토리지 제약도 같이 확인 |
| AQ-3 | MA-403 요청 3 | RISKY 경미 · `notFoundBody` «주소가 잘못됐거나 지워진 링크» ↔ readSpot이 DB 없음·조회 예외도 null(일시 장애도 «못 찾음») · `spot_shares` 삭제·만료 경로 없음 | `lib/spot-share-i18n.ts` notFoundBody(L26~ · 15언어) · `app/s/[id]/page.tsx` readSpot L22~37 | 예외 시 «잠시 뒤 다시» 화면 분리 또는 문구 «주소가 잘못됐거나 열 수 없는 링크» |
| AQ-4 | MA-408 요청 1 | RISKY · ru 고유 · FAQ «это ярлык внутри браузера, а не скачанная программа»(EN·vi에 없는 문장 · X-2보다 더 센 단정 · Android Chrome = WebAPK 설치) | `app/ru/solver/faq.ts` L43 | «…веб-приложение в браузере, а не программа для компьютера» · L112 «браузер лишь создаёт ярлык»는 X-2 동형 → (b)와 같이 |
| AQ-5 | MA-408 요청 2 | RISKY 경미 · ru `usage` «Пользуется солвером»(현재형) ↔ 실제 = 트레이너 기록 1건 이상·한 번 켜지면 유지(`solver-feedback-server.ts` 393·413) · 14언어는 완료형 | `lib/solver-reviews-i18n.ts` L1292 · 주석 L1241~1242 | «Есть опыт работы с солвером» · 주석에서 tabQuestion·placeholderQuestion·loginEmail 3키는 «본체 작성»으로 사실화 |
| AQ-6 | MA-408 통지 ② | 🔴 운영 · `IMPERSONATION_TERMS` 키릴 0 → «Администратор»·«Модератор»·«Официальный» 닉네임 통과 · 주석 «14언어» 낡음 | `lib/solver-feedback-config.ts` L62~ (tr·vi는 10-09 추가) | ru 항목 추가(«администратор»·«модератор»·«официальный» 등) + 주석 15 · `check:solver-feedback` selftest에 ru 케이스 |

- 🪶 (MA-403) zh-hant `/s`만 «Solver» ↔ 같은 언어 앱·랜딩 «解算器»(집계 밖) · tr·vi 카카오 문구는 화면 밖.
- 🪶 (MA-408) UNV ru 고유 5(«Сразу в Excel или Google Таблицы» 상표명·CSV 쉼표 구분 등) — 실측 없이는 손대지 않는다.
- ✅ **(a) AQ-1~6 전부 이행 10-10 (5) · MB-220**(AQ-2 = 안내에 gif 추가 쪽 · AQ-3 = 문구 «열 수 없는 링크» 쪽 · 화면 분리 안 함). ▶ 검수장 변경 줄 대조 MA 대기 · 솔버 재생성 ✅ S-061 `4f4ace0`.

**(b) EN-먼저 — 솔버 랜딩(EN `app/en/solver/{solver-client.tsx,faq.ts}`) → 14로케일 · §2-AL·§2-AP 합본**

| # | 자리(EN 현 위치) | 판정 | 로케일 예외(판정자) |
|---|---|---|---|
| AL-3 = AP-1 | solver-client L169 9♥8♥7♣ note «The only single-raised board where BB truly leads» | RISKY 확정(§4-B ⑤ 11.2%) · ru 정정 문면 OK | ru = 이미 정정 |
| AL-4 | L212 8♦5♣2♠ «just gutshots and backdoors» | RISKY 경미(A5s 5 원페어 3콤보) | ko·ja(ほぼ)·fr(presque)·id = OK |
| AL-5 = AP-2 | faq L95 · solver-client L550~552 경계 0.06/0.08/0.23 | RISKY(실제 0.055/0.07875/0.225 · «0.08bb acceptable»과 충돌) · 본문+FAQ | — |
| AL-6 | 포스트플랍 절 «Together they cover a whole hand» | RISKY(오픈 차트 전용) | fr = 앱 Charts 탭 지칭이라 OK · ru = 문장 없음 |
| AL-7 | L459 «The one real boundary» | RISKY(4GB·반복 상한·iOS) | — |
| AL-8 | faq L67 · solver-client L628 «solved in advance» + **비교표 «Solution library» 열 칸**(L635~ «사전 계산 열람»·«공개 솔루션 범위 안»·«사전·서비스 컴퓨터») | RISKY(GTO Wizard custom solving) · MA-408 통지 ①로 비교표 열 포함(vi #40·#41 OK→RISKY · ru #47·#50·#51) | — |
| X-1 | 비교표 설치형 열 «Postflop» 단정 | RISKY(PioSOLVER Edge 프리플랍) | en·ko·vi만 · 8로케일 «버전에 따라» 헤지 = OK |
| X-2 | faq L107 «Nothing is installed … creates a shortcut» | RISKY(Android Chrome = WebAPK) | de «nur ein Lesezeichen» 더 강함 · ru L112 동형(+L43은 (a) AQ-4) |
| X-3 | faq L107 «removing it leaves nothing behind» | RISKY(Chrome 제거 시 데이터 삭제는 선택) | en·ko·ja·vi |

- 범위 메모(MA-406): tr = 위 9자리 전부 동문 존재 · hi·ms = AL-5(헤지형)·AL-8·X-1(헤지형) 존재 — 원장 없음이라 판정은 아니지만 전파 대상에 넣는다.
- AL-1 사실 = UNV(zh·zh-hant·fr·id는 只/ne…que/hanya 배타형이라 더 강함) — AL-1·2는 사실 시트 §5 편집 규칙으로 이미 처방 있음(vi 선반영).
- 이행 순서: EN 9자리 → 14로케일(ru는 AL-3 이미 맞음) → 이행 MB(전/후 대조 요청) · `updated` 스탬프 settled §1-C. 🪶 자동 착수 금지 — 사장님 지시 대기(§2-AP와 같은 판단).
- 검수장 자기 정정 접수: ja #1 «唯一» 08-24 OK → RISKY(MA-406) · `landing-source.mjs` 키릴 추출 수정(MA-408 ③ · 기존 11편 불변).

### 2-AR. 우편함 수신분 — MA-412 (MB-220 전/후) · MA-413 (starting-hands-chart 본문 밖 3종) · 등재·이행 2026-10-10 (7) · 회신 MB-222

> 근거 = 검수장 `reports/2026-10/검수-MB220-2026-10-10/judge.md` · `reports/2026-10/검수-shc-컴포넌트-2026-10-10/judge.md`. MA-413 = WRONG 0.

- ✅ MA-412 요청 1 · `lib/spot-share-i18n.ts` L93 ru 주석 «open = 랜딩 CTA 축어» → «/s 전용 문구(랜딩 CTA «Открыть солвер →»와 별개)». 화면 영향 0.
- ✅ MA-413 요청 1 · PDF `public/downloads/poker-starting-hands-chart.pdf`(원본 `scripts/starting-hands-chart-print.html` → `render-starting-hands-pdf.mjs`) 4자리 = MA 처방 꼴 그대로: ⓐ P9 위치표 캡션에 «% = share of all 1,326 combos … UTG core is 58 combos (~4%)» 각주 ⓑ P2 «Almost always raise these first in, from any seat.» ⓒ P14 «~2–3 points of equity (AKs vs AKo ≈ 2)» ⓓ P16 «Most-called worst hand: 7-2 offsuit.» · 1쪽 유지(렌더 확인) · check-pdf-page 🔴 0. 🪶 P17 «interactive chart»(UNV · 선택) = 손대지 않음.
- ✅ 10-10 (12) `dbb115cc` MB-227 — EN + 10로케일 «about 2–3 points». 원 항목: **EN-먼저 후보(통지 ①)** · EN `holdem-starting-hands-chart` FAQ L280 «Suited adds about 2 percentage points of equity over the same offsuit hand» — AK 예시는 참, 일반화가 P14와 같은 꼴(커넥터·저랭크 2.7~3.6%p) · 8로케일 동문. 처방 꼴 = PDF ⓒ와 맞춘다(«about 2–3 points; AKs vs AKo ≈ 2»). 자동 착수 금지.
- 🪶 통지 ② `:::quiz:::` 위젯 = 현재 미렌더 · 문구 한국어 고정 → 되살릴 때 로케일화. 통지 ③ fr·ms 본문이 `:::rangechart:::`를 쓰나 `RANGE_CHART_COPY`에 fr·ms 키 없음 → EN 주석 렌더(사실 영향 0) · 다음 fr/ms 회차에 사전 2키.

### 2-AS. vi 🅶 GTO 13편 렌즈·아스트라가 찾은 EN 동문 + 헤드 이월 4 · 등재 2026-10-10 (8) · ✅ AS-1~7 이행 10-10 (13) `006bc898` MB-228(EN → 13로케일 · AS-7 paired H2 링크 = 유지 판정) · ✅ H-1~3 이행 10-10 (14) MB-229
> 출처 = `docs/vi-lanes/gto-진행.md` «EN-먼저 후보»·«헤드 요청»(🅶 C · `a5dd9cfe`). vi는 정정 뜻으로 이미 썼다(EN과 의도적으로 다름) — EN을 고치면 13로케일 전파.
- AS-1 `k-high-board-cbet` EN L159 «Equity is how often you win the pot» — 무승부 지분 누락(equity ≠ 승률) · 아스트라.
- AS-2 `paired-board-strategy` EN L215 «more than its winning percentage is worth» — EQR 기준은 equity · 네이티브·아스트라.
- AS-3 `blind-battle-connected-board` EN L268 «(one fewer ace-high or king-high…)» — 블로커는 콤보 여러 개를 지운다 · 아스트라.
- AS-4 `ace-paired-board-strategy` EN L248 «offsuit broadways like Q-9o … J-9o» — 9 포함은 broadway 아님 · 교열.
- AS-5 `ace-paired-board-strategy` EN L188 «the player betting first has more» → «acting first»(6-6-3 열 BB는 3%만 bet) · 네이티브.
- AS-6 `3bet-pot-low-board` EN L172 캡션 «trips only on the button» ↔ 같은 글 «read it as a set»(무페어 보드) · 네이티브.
- AS-7 (하) `3bet-pot-cbet` EN L141 Checked «①–⑦ 2026-08-20» ↔ blind-battle-cbet «①–④ 08-19 · ⑤–⑦ 08-20» · `monotone-board-strategy` EN L159 «33 made-flush combos» = BB 레인지 수치 · `k-high-board-cbet` EN L147 «none of it» ↔ «four hands» · `paired-board-strategy` EN L278 H2 안 링크(SEO).
- ✅ 헤드 이월 이행(10-10 (14)): H-1 = 라이브 vi 캡처 13/13(수치 de·hi와 26/26 일치) → `gto-*-{oop,ranges}-vi.webp` 26장 q82(24~101KB) · vi 14파일 89자리 `-en` → `-vi` · H-2 = `check-gto-numbers` vi 소수 쉼표(셀프 42/42 · vi 🔴 3 = fr·de와 같은 기존 3건: broadway 23.7 EN 형제 인용 · ko 범위 앞 숫자 7.6·37.6·95.9) + `check-gto-structure` vi 규칙(셀프 27/27 · 11/13 ✔ · donk·low-board ✘ = `locale-intentional-diffs` 10-10 VI 행) · H-3 = 축어 문서 §4 그룹별 플레이어 라벨 행.
- (이행 전 원문) 헤드 이월(vi 고유 · 배포를 막지 않음): H-1 vi 캡처·차트 생성 후 13편 `gto-*-en.webp` → `-vi` 교체(현재 0장) · H-2 `scripts/check-gto-numbers.mjs`·`check-gto-structure.mjs`에 vi 추가(미지원 — 🅶은 scratchpad 전사 대조로 대신했다) · H-3 `docs/solver-app-verbatim-vi-2026-10-09.md` §4에 BvB «OOP (SB (bên open))»·3-bet «IP (BTN (bên call))» 행 추가.
- 헤드 판정으로 닫은 것(10-10): donk FAQ −1 = 의도(`locale-intentional-diffs` 등재) · 산문 흡수 wet/paired/texture = **기각**(볼륨 10 · §3-C 소유 밖) · 3bet-low «ace-high» 풀네임 = **유지**(tldr 확정 카피 연동) · X5 기메 인용·readnext a-high→position = 형제 vi 관행 유지.

### 2-AT. 우편함 수신분 — MA-420 (VI 회차 1 🅰 rules 6편 · 기준 `6b76c650`) · 등재 2026-10-10 (15) · 회신 MB-230 · ✅ AT-1~8 이행 10-10 (16) `0876cc17` MB-231

> 근거 = 검수장 `reports/검수-vi-r1-rules-2026-10-10/hq-reverify/HQ-REPORT.md`(698행 OK 597 · RISKY 14 · WRONG 0 · UNV 87). 위치 대조 = 현 main `c5b65007` `lib/posts-vi/*.ts`(행 번호 = ts 파일 · MA의 L은 md 기준이라 다르다) · 인용 문면 전부 축어 실재. 처방 원칙 = MA 그대로 «EN 문면 이식 또는 같은 글 정답 문면 재사용 — 문안 창작 아님» · vi 고유 · EN 무변경.

| # | 글 | 자리(ts 행) | 처방 |
|---|---|---|---|
| AT-1 | beginners | L90 «là tên chung của nhiều biến thể bài cùng dùng một thứ hạng tay bài» | 정의문 반례(Short Deck · Razz) → «hầu hết» 류 한정 또는 EN 문면 이식 |
| AT-2 | beginners · game-order | **V1 6자리** = beginners L199 표 «$2 đến $5 · chút tiền cược thật» · L207 «nâng mức cược từ từ» · L434 FAQ «ván chơi tiền thật nhỏ ở nhà» · (L193 같은 문단 확인) · game-order L354 «chơi thật … tăng mức cược từ từ» · L361 «Bắt đầu ở mức cược thấp nhất» | 본체 판정 = **삭제 쪽**(vi 계획 «합법성·실머니 언급 안 함» · 신규 발행은 합법성 축을 열지 않는다) — 관할 문구를 새로 넣지 않고 연습 칩·무료 bàn 문면(같은 글 L193·L207 앞부분)으로 수렴. 근거 법령 = Nghị định 282/2025/NĐ-CP Điều 36 khoản 2 điểm a · khoản 4 điểm b(🪶 347/2026 개정 관계 미확인 — 문면에 인용하지 않으므로 무관) |
| AT-3 | game-order | L145 «Tóm gọn … người bet hoặc raise cuối cùng lật trước» | 최종 라운드(river)·체크다운 한정 = 같은 글 showdown 절 문면 |
| AT-4 | game-order · showdown | game-order L156 «và vòng cược đã kết thúc» · showdown tldr L8 «sau khi vòng cược kết thúc»(+ 같은 글 «vòng cược kết thúc» 5회 중 해당분) · 🆕 본체 발견 showdown FAQ L212 «và vòng cược đã kết thúc» 동문 | 같은 글 L188 «mọi hành động cược đã kết thúc» · L196 «toàn bộ hành động cược đã kết thúc» 꼴(EN «betting is complete» · TDA 2024 16) |
| AT-5 | betting | L127 직답 «Mức tối đa là toàn bộ stack của bạn» | NL 한정 = 같은 글 L135 «Tối đa: toàn bộ stack … chữ "no limit"» |
| AT-6 | betting | L56 표 «Bạn trả đúng bằng mức cược hiện tại» · L97 «Call là trả đúng số chip bằng mức cược đang mở» · L106 «Bạn trả bằng mức cược hiện tại» | EN «match» · 이미 낸 칩 있으면 차액(FR AG-8 꼴) |
| AT-7 | all-in | L64 «toàn bộ chip của bạn vừa đủ để call» | 45-A 검사 문형 «mọi chip của bạn đều cần chỉ để call»(EN «every one of your chips is needed just to call it» · FR AG-2 꼴) |
| AT-8 | showdown | FAQ L212 «Bạn chỉ bắt buộc lật khi …» 배타 열거 | 리버 체크다운 첫 공개자 · 승자 공개 추가(R17-A · 같은 글 정답 문면 재사용) |

- 🪶 통지(자동 착수 금지): (a) **EN-먼저** = betting own-raise 3자리(MA-367 (a) 재확인 = §2-AG (a) 그대로 · B 159·165) · all-in EN «If you're all-in for $80 and the pot is $400…»(이미 있던 팟 독해) · beginners 표 BB «out of position postflop»(BvB) · blind FAQ 놓친 블라인드 캐시 범위 · showdown H4H 공개 대기(RP-8-F · A 126-g)·B 143 단서 · betting 룰북 접두 없는 «Rule 84·90·97·103» · 스트래들 최소 레이즈(B 165) · 매칭 안 된 초과분 반환 (b) vi 단독 경미 = «thắng chắc trên hầu hết board» · «trừ khi mọi người đã all-in»(TDA 16 단수) · SB 직답 헤즈업 예외 · «luôn đi theo cùng một nhịp … mỗi lần kèm một vòng cược» · «big blind là người chốt vòng» · «fold thì lúc nào đến lượt cũng được» · game-order 리드문 헤즈업 · game-order FAQ «chia bài» 질문 ↔ dealer 답 어긋남 1 → AT-1~8 이행 회차에 같이 볼지 그때 판단 (c) 회귀 앵커 `mb073`·`mb074` = 보존 확인(되돌림 0 · 앵커 정리 검수장 몫).
- MB-223 ② register·성조 = 이상 없음 · ④ 메타·FAQ 정형 = 사실 왜곡 없음 → 접수.
- ✅ 이행 10-10 (16) `0876cc17` = vi 5편(blind 무변경 · `updated` 10-10) · AT-2 = 실머니 표·문장 삭제 + 연습 칩 문면(같은 글 칩 표 수치) + 토너먼트 buy-in 문단을 링크 한 줄로 · AT-7 = 45-A «chip bạn đẩy ra» 검사 문형(Ex-2 2000 vs 1050 = call) · AT-8 = 17-A·16·B 143(«trừ khi … tay bài sống duy nhất»). diff 교열 렌즈(vi 네이티브+TD · Opus 5.5) 반영 5 · 미반영 1(betting «call thì phải trả tiền» 비유 = 범위 밖 · 실머니 권유 아님). 🪶 통지 (a)(b)는 그대로 남김.

## 3. EN 자체 정합 회차 (로케일 전파 전에 EN을 먼저 재야 한다)

- ✅ **종결(2026-09-11 (11) 실측)** — EN 56편 `updated` 전수 대조. 결과 = 57파일 중 «마지막 커밋 > `updated`» 6 · **창(09-08 이후) 1 = `holdem-icm`**(구두점만 · 판정 완료) · 창 밖 5 = CSS 수리(`8d2aba44`) 2 · tldr 별표 제거(`a069430a`) 2 · `index.ts` → 전부 §1-C «기계적 변경은 안 올린다». 예전 「이미 잡힌 6건」(probability·short-stack·kpm 외 3)은 `fd8cafc0`로 닫혀 현재 어긋남 0. 재현 셸은 `docs/harden-queue-진행.md` Q3 행 · 게이트화 = queue **Q7-a** `check:stamp`.
- ✅ **종결(queue Q4-a · 2026-09-12)** — EN 경쟁 페이지 배타 주장 제거(`rake`·`tournament`·`3bet`·`straddle`·`ept`). 🔴 단 「most guides / almost every article」류 **완화형은 유지가 판정**이다(차별점 서술 · E-E-A-T 목소리 — 다시 지우자고 하지 마라).
- ✅ **종결(queue Q4-a 실측 · 2026-09-12)** — EN↔pt FAQ 개수 드리프트는 **실측 0**이었다(bubble·short-stack·tournament·icm).
- ✅ **종결(낡은 항목 · queue Q4-a 확인)** — en `holdem-game-order`의 seoTitle은 **이미 「who bets first」 축**이다(`updated: 2026-09-11`).
- 🟠 EN 제목 보강 3편(`holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds` — 제목에 poker/hold'em 없음) 🔴 **GSC 먼저**(노출 붙었으면 교체 순간 측정이 끊긴다) · 사장님 결재 대기
