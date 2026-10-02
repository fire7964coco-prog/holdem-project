# German Poker Masters €1MILLION 2026 (King's Resort Rozvadov) — 사실 시트 (de 고유 글 후보)

> 열람일 = **2026-10-02** (curl 원문 HTML + Playwright 렌더/`window.__NUXT__` 페이로드 직접 추출 · 검색 요약 미사용). 보드 id = `kings-gpm-nov`.
> 🔴 이 시트에 없는 숫자는 글에 쓰지 않는다. 갱신 시 열람일을 바꾸고 바뀐 행을 표시한다.
> 등급 표기: ✅ = 화면에 보이는 공식 문구(축어) · ⚠P = 공식 사이트 **데이터 페이로드**(`window.__NUXT__`)에만 있고 화면 문구로는 안 보이는 값 → 글에 쓰려면 «공식 일정 데이터 기준»으로만, 단정 금지.
> 원본 스크레이프·스크립트: 스크래치 `C:/Users/하봄/AppData/Local/Temp/claude/de-capt-gpm/gpm/` (gpm.txt · rows.txt · f294.json · r2512.json)

## §1 기본

| 항목 | 값 (축어) | 출처 |
|---|---|---|
| 정식명 | «German Poker Masters €1MILLION» | https://kings-resort.com/poker/festival/german-poker-masters-1million-294 ✅ |
| 기간 | «Fri 20. 11. 13:00 – Mon 30. 11. 17:00» (2026) | 같은 곳 ✅ |
| 개런티 | «Guarantee €1.000.000» (페스티벌 헤더 = 메인이벤트 행의 GTD와 같은 값 — §3) | 같은 곳 ✅ |
| 일정 행 수 | «50 Tournaments in total» / 독일어판 «50 Turniere insgesamt» | 같은 곳 · /de/poker/festival/german-poker-masters-1million-294 ✅ |
| 장소 | King's Resort, «Rozvadov 7» «The Czech Republic» · 운영 King's Entertainment a.s. «sídlo Rozvadov 7, 348 06 Rozvadov» | https://kings-resort.com/contact ✅ |
| 위치 문구 | «On the Main Motorway from Munich to Prague» | 사이트 푸터 ✅ |
| 예외 1행 | «German Poker Masters €1MILLION - Day 1 PRAGUE» 27.11 19:00 — venue = «King's Casino Prague» (나머지 49행 = «King's Casino Rozvadov») | f294.json ⚠P (화면엔 행 이름의 «PRAGUE»만 보임 ✅) |
| 문의 | Poker Floorman «+420 731 612 760» «floorman@kings-resort.com» · Guest Relations «+420 606 888 888» | /contact ✅ |

## §2 일정 그리드 (페스티벌 페이지 표 · 50행 전수 파싱)

- 이 그리드는 **이벤트 번호가 없다** → «누락 번호 검사» 대신 **행 수 대조**: 파싱 50행 = 헤더 «50 Tournaments in total» = 페이로드 festival 294 소속 50건 → **누락 0**. 페이로드상 독립 토너먼트 id는 **30개**(메인 14행·Mystery Bounty 6행·High Roller 2행·PLO 8-max 2행이 각각 한 토너먼트).
- 행 구성(직접 셈): 메인 Day 1 계열 12행 + 메인 Day 2·Final 2행 = 14 · Mystery Bounty Day 1A~1E 5행 + Final 1행 = 6 · High Roller 2 · PLO 8-max 2 · 위성 17(메인 위성 10 · MB 위성 4 · Flip n Go 3) · 기타 사이드 9 (Friday Night Turbo ×2 · Saturday Night Turbo · Morning NLH Knockout · Morning NLH Turbo · Thursday Night Turbo · Friday Pot Limit Omaha · Ladies Event · Knockout Closer) → 14+6+2+2+17+9 = **50** ✅
- 모든 행 공통 표기: «Buyin: including fee» · 수수료 «Fee deduction 16% from the prizepool» (High Roller만 «15%») ✅

### 메인이벤트 «German Poker Masters €1MILLION» — €285 · Chips 50000 · late reg «LVL 10» ✅

| 날짜·시각 | 행 이름 (축어) |
|---|---|
| Fri 20.11 14:00 | Day 1A Part 1 (50 minutes) (played till end of level 8) |
| Sat 21.11 14:00 | Day 1B Part 1 (50 minutes) (played till end of level 8) |
| Sun 22.11 13:00 | Day 1A/B PART 2 (50 minutes) (15% ITM MC 570€ • played till 10% • TOP 5 Chipleaders bonus get KMP 3000€) |
| Wed 25.11 18:00 | Day 1C SPEED (15% ITM MC 570€ • played till 10% • ) |
| Thu 26.11 18:00 | Day 1D SPEED (동일 괄호) |
| Fri 27.11 11:00 | Day 1E (동일) |
| Fri 27.11 18:00 | Day 1F SPEED (동일) |
| Fri 27.11 19:00 | Day 1 PRAGUE (동일) — King's Casino Prague (⚠P) |
| Sat 28.11 11:00 | Day 1G (동일) |
| Sat 28.11 18:00 | Day 1H SPEED (동일) |
| Sun 29.11 11:00 | Day 1I TURBO (동일) |
| Sun 29.11 14:00 | Day 1 Flip and Go Pineapple (10 players play 1 hand and the winner advances to Day 2 with 570€ MC) — late reg «LVL 1» |
| Sun 29.11 17:00 | Day 2 (All players ITM) — 구매가 «–» |
| Mon 30.11 14:00 | Final Day — 구매가 «–» |

- Day 1 진입 기회 = 12행(Part 1 두 개는 22.11 Part 2로 합쳐 이어짐). 
- ⚠P 페이로드: 메인 Day 1 행 `reEntryMaxCount: 2` · `lateReEntryUntilLevelNo: 10` · `tableSize: 9`(Final Day 8) · Part 1 = 레벨 1~8, **Part 2 = 레벨 9~16** → late reg «LVL 10»은 Part 2 안에서 닫힌다. Flip and Go = `tableSize: 10`. 🔴 (검증 10-02) 메인 Day 1 계열 12행 중 **11행만** `reEntryMaxCount: 2` — **Day 1 Flip and Go Pineapple(29.11 14:00)은 `-1`**(lateReg 1) · Day 2·Final = 0. → 글에 «리엔트리 최대 2회»를 쓰려면 화면 문구가 없으므로 «현장 확인» 병기 + Flip and Go 제외.
- ⚠P 페이로드 2026 메인: `guarantee 1000000` · `effective 1000000` · `fee 160000` · `toPay 840000` → 16%가 개런티 금액에서 빠지는 구조로 보인다(해석). 화면 문구는 «Fee deduction 16% from the prizepool»뿐 → 글에 «지급액 €840.000» 같은 계산값 쓰지 않는다.

### Mystery Bounty «GPM Mystery Bounty» — «€150 + €50 BOUNTY» · €100.000 GTD · Chips 50000 · late reg LVL 10 ✅

- Day 1A Sun 22.11 18:00 · 1B Mon 23.11 18:00 · 1C Tue 24.11 18:00 · 1D Wed 25.11 16:00 · 1E Turbo Thu 26.11 12:00 — 각 «(15% ITM MC 240€ • played till 10%)»
- Final Day Thu 26.11 17:00 «(All players ITM and Mystery Bounty Phase)»

### High Roller «GPM High Roller» — €600 · €100.000 GTD · Chips 100000 · late reg LVL 9 · 수수료 15% ✅
- Day 1 Sun 29.11 18:00 «(played till ITM)» · Final Day Mon 30.11 15:00

### 사이드 이벤트 ✅ (날짜 · 시각 · 구매가 · GTD · 칩)

| 날짜·시각 | 이벤트 | 구매가 | GTD | 칩 |
|---|---|---|---|---|
| 20.11 15:00 / 21.11 13:00 | GPM Pot Limit Omaha 8-max Day 1 «(played till ITM)» / Final Day | €300 | €20.000 | 40000 |
| 20.11 20:00 | GPM Friday Night Turbo | €125 | €15.000 | 15000 |
| 21.11 20:00 | GPM Saturday Night Turbo | €125 | €20.000 | 15000 |
| 23.11 12:00 | GPM Morning NLH Knockout (Bounty 25€) | €100 + €25 BOUNTY | €10.000 | 15000 |
| 25.11 12:00 | GPM Morning NLH Turbo | €130 | €10.000 | 15000 |
| 26.11 21:00 | GPM Thursday Night Turbo | €130 | €10.000 | 15000 |
| 27.11 14:00 | Friday Pot Limit Omaha | €150 | €10.000 | 20000 |
| 27.11 22:00 | GPM Friday Night Turbo | €130 | €10.000 | 15000 |
| 28.11 14:00 | GPM Ladies Event | €150 | €3.000 | 20000 |
| 30.11 17:00 | GPM Knockout Closer (Bounty 50€) | €100 + €50 BOUNTY | €10.000 | 20000 |

- 그리드 구매가 범위: 최저 **€35**(MB 위성) · 최고 **€600**(High Roller) ✅

## §3 개런티·특이

- 페스티벌 헤더 «Guarantee €1.000.000» = 메인 행 GTD «€1.000.000» — **같은 값**이다. 🔴 단 일정 안 다른 GTD(MB €100.000 · HR €100.000 · PLO €20.000 · 사이드 €3.000~€20.000)를 더하면 €1M을 넘는다 → «페스티벌 전체 개런티 €1M»으로 쓰지 말고 **«메인이벤트 €1.000.000 GTD»**로 쓴다(kings-gpd-dec의 €400k/€300k 혼동과 같은 함정 — 여기선 King's가 헤더에 «Festival Guarantee»가 아니라 «Guarantee»라고만 표기).
- 메인 Day 1A/B Part 2 보너스: «TOP 5 Chipleaders bonus get KMP 3000€» ✅ (KMP 풀이는 미발견 — 글에 풀어 쓰지 말 것)
- 메인 ITM: «15% ITM MC 570€» (Day 1 각 플라이트 «played till 10%») ✅
- 개런티 성립 조건(King's FAQ 일반): «For a valid guarantee, there MUST be at least 10 registered players at the official start time of the tournament.» ✅ https://kings-resort.com/faq/
- 딜(FAQ 일반): «A deal is allowed in Side Events, but NOT in streamed/televised Main Events.» ✅ — 🔴 단 2025 메인 Final Day 결과표에 «DEAL» 열이 있다(상위 5명 · §6). «메인은 딜 불가»로 단정하지 마라.
- 룰(FAQ 일반): «We use the TDA poker rules, except for rule 30. To have a live hand, players must be at their seats when the first card from the deck is dealt.» ✅
- 터보 블라인드(FAQ 일반): «at our casino typically every 15 minutes» ✅ / 메인 Part 1·2 레벨 «50 minutes»(행 이름) ✅ · SPEED·TURBO 플라이트 레벨 시간 = **미발견**

## §4 등록·현장 규정

- 나이: «You must be 18 years or older to access this website. Zákaz účasti osob mladších 18 let na hazardní hře!» ✅ (사이트 푸터·연령 확인 모달 «ARE YOU OLD ENOUGH TO BE A KING?»)
- 신분증: «According to the Czech law, every customer has to register at the reception before entering a casino. Therefore, you do need an official ID document to complete the compulsory registration (e.g., ID card, passport, or driving license).» ✅ https://kings-resort.com/faq/
- 드레스코드: «feel free to wear whatever comforts you the most.» ✅ (FAQ)
- 영업: «The King's Resort is open non-stop.» ✅ (FAQ)
- 등록 창구·시점: «You can register at the normal counter. The registration for every tournament will be open from midnight of the day when the tournament is planned.» ✅ (FAQ)
- 사전등록(사이트 UI 문구 · ⚠P): «Save your seat and get priority registration at King's. Payment is made at the King's Resort.» / «Once at King's, just come to the priority queue for the pre-registered players» — 사전등록해도 **결제는 현장**.
- 좌석: «Seats are assigned randomly.» ✅
- 결제: 칩 구매 «Yes, we accept credit cards.» · ATM «withdrawals in both Euros and Czech Crowns» ✅ (FAQ) · 계좌이체 입금 «BANK TRANSFER FOR CASINO DEPOSITS — You don't have to take cash.» «King's Resort executes the bank transfers within 1 working day.» · 독일 계좌(Raiffeisenbank Neustadt – Vohenstrauß eG, Filiale Waidhaus) 있음 ✅ https://kings-resort.com/contact/bank-transfer
- 리엔트리: 화면 문구 = **미발견**. FAQ 일반 «The maximum number of possible re-entries is given from the beginning and varies depending on the type of tournament.» ✅ / 페이로드 메인 `reEntryMaxCount: 2` (⚠P)
- 등록 마감: 메인 Day 1 = «late reg: LVL 10» (Part 1 플라이트는 레벨 8까지 진행 후 Part 2에서 이어짐) · Flip and Go = «LVL 1» ✅ · CAP(FAQ 설명 «If we reach 300 entries before the end of level 10, the registration will be closed») — GPM 행별 CAP은 **미발견**
- 반려견 «dogs are not allowed» · 주차 «own guarded parking lots» / «offered for free to all resort guests» ✅

## §5 위성/예선

### 현장 위성 (그리드 17행) ✅
- **메인(GPM ME) 위성 10행** — 전부 €40 · «€2.850 GTD» · Chips 10000 · late reg LVL 8: 20.11 13:00(1A P1) · 21.11 11:00(1B P1) · 22.11 11:00(1AB P2) · 22.11 21:00 · 23.11 21:00 · 24.11 21:00(«Day 1») · 25.11 15:00(1C) · 25.11 21:00(1D) · 26.11 15:00(1D) · 27.11 15:00(1F)
  - (계산 메모: €2.850 = €285 × 10 → 10석 보장으로 읽힌다. 화면에 «10 seats» 문구는 **없다** — 글에는 «€2.850 GTD»만)
- **Mystery Bounty 위성 4행** — €35 · «€2.000 GTD» · 22.11 15:00(1A) · 23.11 15:00(1B) · 24.11 15:00(1C) · 25.11 13:00(1D)
- **Flip n Go Satellite (9 handed) to GPM 3행** — €40 · GTD «–» · Chips 5000 · LVL 1 · 20.11 17:00 · 21.11 17:00 · 28.11 17:00
- 훅이 죽는 날(현장 위성): 마지막 메인 위성 **27.11 15:00** (Day 1F 직전) · 마지막 Flip n Go **28.11 17:00**

### 온라인 위성 = **미발견**
- King's 페스티벌 페이지·FAQ에 온라인 예선 언급 0. GGPoker 등 공식 원문 미발견(WebSearch 2회, 공식 URL 0건) → 글에 온라인 위성 쓰지 않는다.
- 여행 패키지 사업자 germanpokertours.de는 주최사가 아니며 날짜가 «패키지 기간»이다(docs/dach-tournaments-2026.md §0) — 인용 금지.

## §6 과거 실적 (2025)

- 2025 페스티벌: «German Poker Masters €1MILLION» «Sun 23. 11. 15:00 – Mon 1. 12. 17:00» «Guarantee €1.000.000» ✅ https://kings-resort.com/poker/festival/german-poker-masters-1million-252
- 2025 결과 목록(https://kings-resort.com/poker/results/2025-11 · /2025-12)에 메인 플라이트·«German Poker Masters €1MILLION - Final Day»(1. 12.) 행이 **이름만** 보인다 ✅. ~~상세 페이지 404~~ → 🔴 **검증 10-02 정정**: 상세 페이지 https://kings-resort.com/poker/tournament/german-poker-masters-1million-final-day-11458 는 **200 · 화면 렌더 정상**(curl·Playwright). 화면 축어 ✅: «GERMAN POKER MASTERS €1MILLION - FINAL DAY / MON 1. 12. 14:00 – MON 1. 12. 21:43 / TOTAL PRIZE POOL €1.000.000 / BUY-IN €285 / GUARANTEE €1.000.000 / TOTAL ENTRIES 3914 / … 24 PLAYERS IN TOTAL» · 상금표(PAYOUT · DEAL): «1. ARTUR WASEK €153.000 €101.000 / 2. FRESH PRINCE €83.000 €56.800 / 3. ANONYMIZED €59.000 €67.600 / 4. ARMAND MURATOGLU €42.000 €73.500 / 5. ANONYMIZED €33.800 €71.900 / 6. ANONYMIZED €26.700 - / … 24. ANONYMIZED €2.675 -» → 상위 5명 딜.
  - 🔴 상금풀은 **화면값 «€1.000.000»만** 쓴다(페이로드 toPay 937.011과 다름 — 화면은 개런티 보전액으로 보임). 3914 Entries = 화면 축어 ✅.
- ⚠P 페이로드(/poker/results/2025-12 `window.__NUXT__`, 2025 메인 Final Day id 11458): `entriesCount: 3914` · `collected: 1115490`(buyIn 752400 + reEntry 363090) · `fee: 178479` · `toPay: 937011` · `guarantee: 1000000` · `buyIn: 285` · 2025 ITM 표기 «12,5% ITM MC 600€»
  - 산수 검산: 3,914 × €285 = €1,115,490 ✓ · 752,400 ÷ 285 = 2,640 · 363,090 ÷ 285 = 1,274 · 2,640 + 1,274 = 3,914 ✓ · 1,115,490 × 0.16 = 178,478.4 ≈ 178,479 ✓
  - (정정) 엔트리 3.914·우승자 Artur Wasek은 화면 축어로 확인됨 — 위 ✅ 사용 가능. collected·fee·toPay 계산값은 여전히 쓰지 않는다.
- ⚠P 2025 GPM High Roller(€600): `entriesCount: 259` · `collected: 155400` · GTD 100000
- 2019 등 과거 기록 수치: **1차 출처 미발견**(검색 요약에만 있음 → 사용 금지)

## §7 교통·숙박 (공식 원문만)

- 차: «From Prague: Simply drive 90 minutes via D5/E50; From Munich: Get on to A9, A93 and then A6 to D5/E50.» ✅ https://kings-resort.com/contact
- 비행기: «There are direct flights to Prague Airport, Nuremberg Airport and Munich Airport. Then, continue by car or with King's transport service.» ✅
- 기차: «The closest train stations are Nuremberg, Weiden, Wernberg, Regensburg and Amberg. Contact our transport service and we will arrange the transit to the resort.» ✅
- 셔틀: «KING'S TRANSPORT SERVICE — Comfortable transit to and from the resort from European countries» · «+420 777 281 804» · «transfers@kings-resort.com» ✅ (요금·시간표 = **미발견**, /transport 는 404)
- 숙소(https://kings-resort.com/hotels ✅): Luxury rooms «Distance from King's 0M» · Economy rooms(Admiral) «100M» · Comfort / Standard rooms «up to 600M» · Basic rooms «600M» + «there are no private bathrooms in the rooms» · Comfort·Basic은 «King's provides transfer to/from accommodation to the resort»
- 호텔 예약(출처 https://kings-resort.com/contact — /hotels 화면엔 이 번호 없음): «+420 731 155 825» «reservation@kings-resort.com» «Mon - Fri 08:00 - 16:00 / Sat - Sun 10:00 - 16:00» ✅
- **GPM 전용 호텔 패키지 = 미발견**(페스티벌 페이지·호텔 페이지 모두 없음). 객실 요금 = 미발견(예약 위젯).

## §8 자기모순·미발견·함정

**보드(`kings-gpm-nov`, verifiedAt 08-10)와 다른 점**
1. 🔴 «49개 이벤트» → 현재 공식 «50 Tournaments in total». 50행 중 49행 Rozvadov + **1행 King's Casino Prague(Day 1 PRAGUE)**. 08-10 이후 프라하 플라이트가 추가됐는지, 당시에도 50이었는지는 판정 불가. 또 «이벤트»가 아니라 **일정 행**(Day 2·Final 포함) 수다 — 독립 토너먼트는 30개(⚠P). 글에는 «Turnierplan mit 50 Terminen» 식으로 쓰고 «49 Events» 금지.
2. 날짜 20.11~30.11 · 메인 €285 · €1.000.000 GTD · 구매가 €35~€600 = **일치**.

**검증 10-02 보강(사이드 late reg 화면 축어 · festival-294)**: PLO 8-max «LVL 9» · GPM Friday Night Turbo 20.11 «LVL 6» · GPM Saturday Night Turbo «LVL 6» · Morning NLH Knockout·Morning NLH Turbo·Thursday Night Turbo·Friday Pot Limit Omaha·Friday Night Turbo 27.11·Ladies Event·Knockout Closer «LVL 8» · MB 위성 4행 «Chips: 10000» «late reg: LVL 8». 리엔트리(⚠P): MB Day 1A~1E −1 · MB Final 0 · Thursday/Friday Night Turbo(26·27.11) 2 · HR Day 1 −1 · 그 밖 사이드·위성 −1(«제한 없음»은 해석 — 쓰려면 «현장 확인»).

**원문 내부의 혼동 포인트**
3. 메인 Part 1 행 «played till end of level 8»인데 late reg «LVL 10» → 페이로드상 Part 2가 레벨 9~16이라 모순은 아니지만 독자가 «레벨 8에 마감»으로 오독할 수 있다.
4. «GPM Friday Night Turbo» 같은 이름 2회: 20.11 = €125 · €15.000 GTD / 27.11 22:00 = €130 · €10.000 GTD — 이름 같고 조건 다름.
5. 위성 이름 «Satellite to GPM ME - Day 1D» 2회(25.11 21:00·26.11 15:00), «- Day 1» 3회(22·23·24.11 21:00) — 특정 플라이트 전용인지 범용인지 화면 문구로 불명.
6. FAQ의 «How to get to the King's Resort?» 링크 «http://kingsresort.com/index.php/home-en.html»은 옛 도메인 — 인용 금지. /transport 링크 404.
7. 검색 요약이 «Main event has a €10,000,000 guarantee»라고 했으나 원문은 €1.000.000 — 요약 오류(§12-B 사례). sztosgame.com 등 2차 출처의 2025 날짜(«24 November - 01 December»)는 공식(23.11~1.12)과 다름 → 사용 금지.

**미발견**
- 온라인 위성(GGPoker 등) · GPM 호텔 패키지 · 셔틀 요금 · SPEED/TURBO 레벨 시간 · 구조표(PDF 없음) · 메인 리엔트리 횟수의 화면 문구 · KMP 정의 · ~~2025 우승자·상금 분배 · 2025 엔트리의 화면 표시 원문~~(10-02 검증으로 발견 → §6) · 드레스코드 외 반입 규정 · 페스티벌 CAP

**훅이 죽는 날 (캘린더 후보)**
- 10/22 = 리드타임 D-28 발행 마감
- 22.11 13:00 = Part 1 계열 마지막(1A/B Part 2) · 26.11 17:00 = Mystery Bounty Final
- **29.11 14:00 Flip and Go = 메인 마지막 Day 1 진입** («참가 방법» 훅 종료) · 29.11 17:00 Day 2 · **30.11 14:00 Final Day** → 결과 아카이브 전환
