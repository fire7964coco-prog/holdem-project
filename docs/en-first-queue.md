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

### 2-L. 우편함 수신분 — MA-144 · 153~157 · 167 · 174~178 (2026-09-25 · 회신 MB-083)

> 본체: `docs/harden-brief/mailbox-intake-2026-09-25.md`(HEAD `326728ed` 실측 · 항목별 좌표). 여기엔 묶음만.

| 묶음 | 상태 | 규모 |
|---|---|---|
| **L-1 로케일 고유**(es·zh·zh-hant · EN 무관 · 정답형 같은 글 안) | ✅ 채택 · **착수 가능** | es ~20 · zh ~25 · zh-hant ~30자리 |
| **L-2 EN-먼저**(MA-144 ⓐⓑⓒ · 167 fish · 174 paired 13%·monotone 74s·history · 175~178 통지) | ⏸ **MA-172 최종 MA와 한 묶음** — 검수장 EN 재검증(`03d2046`) 결과 도착 후 | EN ~50항목 · 🔴 paired-board는 **ko 원본(23%)도** 13.0%로 |
| **L-3 계산기**: 문구 5종(A55·A81·A85·B22·B111) + orHigher 3 · spr.low 3 | ✅ **종결 `0932f093`**(09-25 · ko 동형 3자리 포함) · 남긴 것: 푸시/폴드 토글 «BB ante ON» 라벨(A81 인접 · intake 채택 범위 밖) | — |
| **L-3 계산기 레인지 3건**(K10o↔Q10o 역전 · A10s · 88) | ✅ **종결 `104fac47`**(09-25 · 169핸드 지배 쌍 1,168 역전 5→0 · A3s·A2s 역전 추가 발견·정정 · 권고안 수정 2자리는 intake §3) | — |
| **L-4 판단 필요**(cooler 인접 2 · outs spade · id melepas) | ⏸ | — |

## 3. EN 자체 정합 회차 (로케일 전파 전에 EN을 먼저 재야 한다)

- ✅ **종결(2026-09-11 (11) 실측)** — EN 56편 `updated` 전수 대조. 결과 = 57파일 중 «마지막 커밋 > `updated`» 6 · **창(09-08 이후) 1 = `holdem-icm`**(구두점만 · 판정 완료) · 창 밖 5 = CSS 수리(`8d2aba44`) 2 · tldr 별표 제거(`a069430a`) 2 · `index.ts` → 전부 §1-C «기계적 변경은 안 올린다». 예전 「이미 잡힌 6건」(probability·short-stack·kpm 외 3)은 `fd8cafc0`로 닫혀 현재 어긋남 0. 재현 셸은 `docs/harden-queue-진행.md` Q3 행 · 게이트화 = queue **Q7-a** `check:stamp`.
- ✅ **종결(queue Q4-a · 2026-09-12)** — EN 경쟁 페이지 배타 주장 제거(`rake`·`tournament`·`3bet`·`straddle`·`ept`). 🔴 단 「most guides / almost every article」류 **완화형은 유지가 판정**이다(차별점 서술 · E-E-A-T 목소리 — 다시 지우자고 하지 마라).
- ✅ **종결(queue Q4-a 실측 · 2026-09-12)** — EN↔pt FAQ 개수 드리프트는 **실측 0**이었다(bubble·short-stack·tournament·icm).
- ✅ **종결(낡은 항목 · queue Q4-a 확인)** — en `holdem-game-order`의 seoTitle은 **이미 「who bets first」 축**이다(`updated: 2026-09-11`).
- 🟠 EN 제목 보강 3편(`holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds` — 제목에 poker/hold'em 없음) 🔴 **GSC 먼저**(노출 붙었으면 교체 순간 측정이 끊긴다) · 사장님 결재 대기
