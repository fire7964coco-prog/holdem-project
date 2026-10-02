# EPT Prague 2026 — 사실 시트 (de 고유 글 후보 · 핸드오프 순서표 2)

> 열람일 = **2026-10-02**. 보드 id = `ept-prague`. 대상 언어 = **de**(DE·AT 수요 — 아래 §9).
> 🔴 이 시트에 없는 숫자는 글에 쓰지 않는다. 갱신 시 열람일을 바꾸고 바뀐 행을 표시한다.
> **방법론**: pokerstarslive.com 일정표는 JS 렌더 → 레포 Playwright로 DOM 표 **120행 전수** 수집 + 같은 페이지가 받는
> **공식 XML 피드**(`/data/feeds/webportal/stop-relative-638bbfec…-9cd782e1….xml` · 주석 «Generated at 20/09/2026 16:59» · 이벤트 노드 107개)에서
> 수수료 내역·리엔트리·규정 문구를 축어로 뽑았다. 요약 도구 미사용.
> 원본 = 스크래치 `C:/Users/하봄/AppData/Local/Temp/eptprg/`(schedule-rows-2026-10-02.txt · ept-prague-feed-2026-09-20.xml · key-events.txt · buyin-2026-10-02.txt · conflict-pages.txt) — 레포 밖.

## §1 기본

| 항목 | 값 (축어) | 출처 |
|---|---|---|
| 기간 | en «Festival Dates: December 2-13, 2026» · de «Festivaldaten: 2. bis 13. Dezember 2026» | https://www.pokerstarslive.com/ept/prague/ · /de/ept/prague/ |
| 장소 | «Venue: Hilton Hotel Prague» · «Address: Pobřežní 311/1, 186 00 Prague 8-Rohanský ostrov, CZ» · «Telephone: +420 224841 111» | 같은 페이지 |
| 운영 | «The license holder and operator of this event is King’s Casino Prague.» | 같은 페이지 |
| 복장 | «Dress code: Casual. Sportswear/shorts are not allowed.» | 같은 페이지 |
| 연령·신분증 | «Minimum age: 18+» · «NB: Must bring photo ID or your passport to participate.» | 같은 페이지 |
| 공항 | «Prague Vaclav Havel Airport (PRG) is an international airport around 12km from central Prague.» | 같은 페이지 |
| 위상(주최측 표현) | «a staple of the calendar for nearly two decades» · de «seit fast zwei Jahrzehnten ein Highlight im Kalender» | 같은 페이지 |
| 계정 | «All players must have a PSLive Account to participate in any EPT tournament. If you don’t have one you will be able to Sign-up onsite …» | https://www.pokerstarslive.com/ept/buy-in/ |
| 리그 | EPT 프라하는 2026 PokerStars Live League 포인트 대상 — **미검증**(검색 요약에서만 봄. 쓰려면 /de/psliveleague/ 원문 확인) | — |

## §2 Key Dates (공식 «Key Dates» 블록 · en/de 동일 · XML 피드 key-info와도 동일)

| 이벤트 | 날짜 | 바이인 | 피드 수수료 내역 (cost + fee) |
|---|---|---|---|
| PokerStars Open Main Event | 12/2–7 | **€1,100** | €1,000 + €100 (house €40) |
| PokerStars Cup | 12/5–6 | €825 | €750 + €75 (house €30) |
| PokerStars High Roller | 12/6–8 | **€2,200** | €2,000 + €200 (house €80) |
| EPT Main Event | 12/7–13 | €5,300 | €5,000 + €300 (house €150) |
| EPT Mystery Bounty | 12/9–11 | Key Dates **€3,200** ↔ 일정표·피드 **€3,250** ⚠ §8 | €2,000 + €250 + 바운티 €1,000 (= €3,250) |
| EPT High Roller | 12/11–13 | €10,300 | €10,000 + €300 (house €300) |

요일 검산: 12/2 = 수(일정표 «December 02 - Wednesday») · 12/7 = 월 · 12/13 = 일.

## §3 메인 두 개의 구조 (피드 규정 문구 축어)

### PokerStars Open Main Event (#1) — €1,100 · 스택 30,000
- 플라이트 6개(일정표): 1/A 12/2 12:00 · 1/B 12/2 18:00 · 1/C 12/3 11:00 · 1/D 12/3 18:00 · 1/E 12/4 11:00 · 1/F 12/4 17:30 → Day 2 12/5 11:00 · Day 3 12/6 12:00 · Final 12/7 12:00
- 마지막 레지 마감 = 1/F «04.12.2026 21:20»
- «Each player can enter a maximum of twice per flight.» (제목 «Single Re-Entry Per Flight»)
- «Day two levels will commence at the lowest finishing level among all flight 1s.»
- ⚠ 플라이트 제목의 «40/30/20 Minute Levels»와 피드 `level-duration` 값이 일부 어긋난다(1/A 제목 40′ ↔ 피드 30). **레벨 길이는 글에 쓰지 않는다.**

### EPT Main Event (#27) — €5,300 · 스택 30,000
- Day 1A 12/7 12:00 · Day 1B 12/8 12:00 → Day 2 12/9 · Day 3 12/10 · Day 4 12/11 · Day 5 12/12 · Final 12/13 12:30
- 레지 마감 = «09.12.2026 11:50» (= Day 2 시작 전) · «Registration closes at the start of day two.»
- «Players are allowed a maximum of two entries combined for flights A and B as well as day two.»
- «Between 13% and 15% of the field will be paid.» · «If a deal has been made at any stage the number of hands will be reduced to 15.»

### 기타 확인된 규정
- 수수료 일반: «A fixed fee or up to 4% of the prize pool is withheld from each tournament to cover the costs of floor staff and dealers.» (일정표 페이지)
- EPT Mystery Bounty: «A shot clock will be implemented from the start of day 2.» · Day 1 12/9 14:00 · 레지 마감 «at the start of day two»

## §4 현장 위성 (일정표 축어 — 전부 «SEAT ONLY» 또는 «Win Your Seat»)

| 대상 | 바이인 | 회차(일정표 #) |
|---|---|---|
| €1,100 PokerStars Open ME | €250 | #2·#5·#7 (12/2) · #9 (12/3) · #11 (12/4) |
| EPT Main Event («@ 100,000 chips» · Unlimited Re-Entry) | €600 | #13 (12/4 21:00) · #23 (12/6 17:00) · #29 (12/7 16:00) |
| EPT Main Event («@ 50,000 chips» · Single Re-Entry) | €1,155 | #17 (12/5 21:00) · #25 (12/6 21:00) · #26 (12/7 11:00) · #32 (12/7 20:00) · #34 (12/8 11:00) |
| PokerStars Open High Roller | €500 | #19 (12/6 11:00) |
| EPT Mystery Bounty | €730 | #41 (12/9 12:00) |
| EPT High Roller | €1,125 | #48·#51 (12/10) · #53 (12/11) |
| Mystery Bounty €1,650 | €370 | #54 (12/11) |
| €2,200 Deep Stack | €250 | #59 (12/12) |

## §5 바이인 방법 — 🇩🇪 독자에게 직접 걸리는 자리 (https://www.pokerstarslive.com/ept/buy-in/ 축어)

- 표 «EPT Prague»: Cash X · Chips X · «COM/EU/DE/UK/FR Stars Account» X · Credit Card X* · Debit Card X* · Casino Online Shop — · Casino Wire Transfer X** · Luxon Pay X
- «Cash is accepted at the registration desks during EPT Barcelona and EPT Prague.»
- 🔑 «COM/EU/DE/UK/FR Stars Account holders can buy in before an event by going to the ‘Events’ > 'Live' lobby in the game client. Online registration will be available from around four weeks before an event until the end of late registration for the respective event. There is no need to visit the Registrations Desk onsite if you register online – just head straight to the Ticket Collection Desk.»
- 단서: «Please Note: there are regional restrictions regarding online buy-ins. Please contact our Registrations Team if you are unsure.»
- 카드 각주(*): «Credit/debit cards won’t be accepted at the registration desks. Players need to purchase chips at the casino cashier and then proceed to the cash registration desks.» · 송금(**): «Players who wire funds will need to collect them at the casino cage …»
- «Buy-ins are only accepted through one payment method.» · «Unregistration is not permitted after the tournament starts»
- 지급: EPT Prague = Stars Account · Casino Wire · Cash · Luxon Pay 전부 X · «By using your Stars Account to buy in, you agree to a possible maximum cash payout restriction.» · 송금 지급 «can take up to 21 business days»
- → 🔴 «4주 전부터 온라인 등록» = 12/2 기준 **11월 초**. 정확한 개시일은 공식에 없다 — «rund vier Wochen vorher»로만 쓴다.

## §6 과거 실적 (2025)

| 항목 | 값 | 출처 |
|---|---|---|
| 2025 EPT ME | €5,300 · **1,224 entries** · Prize Pool **€5,936,400** · 우승 **Matan Krakow**(이스라엘) **€778,255*** (상위 3인 금액에 * = 딜) · 준우승 Bora Kurtulus(튀르키예) | https://www.pokernews.com/tours/ept/2025-pokerstars-ept-prague/5300-main-event/ · /news/2025/12/matan-krakow-wins-2025-ept-prague-main-event-50222.htm |
| 2025 PS Open ME | **€1,650** · 3,024 entries · Prize Pool €4,354,560 · 우승 Yulian Bogdanov(불가리아) €398,135* | https://www.pokernews.com/tours/ept/2025-pokerstars-ept-prague/1650-ps-open-main-event/ |
| 바이인 변화 | hochgepokert 2026-09-06 축어: «Das zweitgrößte Turnier im EPT-Spielplan kostet diesmal €1.100 und liegt damit deutlich unter dem bisherigen Buy-in von €1.650.» · «Beim PokerStars Open Malaga betrug das Buy-in bereits €1.100.» | https://www.hochgepokert.com/2026/09/06/ept-prag-pokerstars-open-kostet-nur-noch-e1-100/ (취재매체 · 공식 값과 일치) |

- 2025 독일·오스트리아 선수 성적 = **미조사**(쓰려면 Hendon Mob 원문으로).

## §7 교통·숙박

- 공식: 공항 PRG 도심 12km(§1) · «Experience the wonder of Prague with discounted PokerStars Travel accommodation.»(할인 숙소 안내 — 요금 미기재)
- ✅ **집필 회차(10-02 (7)) 확보 — 서브 조사 · Exa 전문 축어**:
  - 철도(bahn.de 구간 페이지): Dresden→Prag «schnellste Verbindung … 2 Stunden und 5 Minuten» · 직행 «bis zu 7» / Berlin «3 Stunden und 47 Minuten» · «bis zu 9 direkten Verbindungen» (Stand 2026-09-12) / München «5 Stunden und 37 Minuten» · «bis zu 7» (ALX). ⚠ 같은 DB의 /strecke/prag 요약 «Berlin ca. 5 Stunden · München ca. 6 Stunden»과 상충 → 구간 페이지 값만 «schnellste Verbindung»으로 씀. 베를린 직행 일부는 **Praha-Holešovice** 종착
  - ÖBB: «Alle zwei Stunden fährt der schnelle Railjet von Wien direkt in die tschechische Hauptstadt.» — 소요시간 미기재(4:01은 2024 보도자료 → 안 씀)
  - 비넷(edalnice.cz/cenik «Platnost ceníku: od 1. 1. 2026» · Standardní palivo): 10일 300 Kč · 30일 480 Kč · 연간 2 570 Kč · DE 페이지 «Die tschechische Polizei und die Zollverwaltung erkennen gemäß dem Kfz-Kennzeichen …»
  - Hilton 주차 «880 Kč per day or 70 Kč per hour» · «Václav Havel Airport is a 30-minute drive» (hilton.com) · DPP «Airport Express … A ticket costs CZK 200» · «T-Bus 59 … Nádraží Veleslavín station on Metro A»
  - ❌ 미확보: Hilton 최근 메트로역(Florenc) · Wien–Prag 2026 소요시간
- 통화: 체코 코루나(CZK)지만 대회 바이인은 유로 표기(§2) — 환율 환산 금지

## §8 자기모순·함정

1. 🔴 **«€1,650 / €2,700»은 작년 값이다.** King's Resort 독일어 페이지(https://kings-resort.com/de/prague/ept — DE SERP 2위)와 pokerfirma(5위)가
   «PokerStars Open Main Event: 2.–7. Dezember – 1.650 €» · «PokerStars High Roller … 2.700 €»로 적고 있다(10-02 열람).
   PokerStars 공식(en·de Key Dates · 일정표 · XML 피드 수수료 €1,000+€100)은 **€1,100 / €2,200**. 2025 PS Open ME가 €1,650(PokerNews)이었고
   hochgepokert가 «bisherigen Buy-in von €1.650»이라 적어 **King's·pokerfirma = 2025 값 잔존**으로 판정. pokerfirma 본문도
   «der komplette Schedule wird … in Kürze noch ergänzt» = 일정표 공개 전 기사.
   → **글의 훅으로 쓸 수 있다**(«Warum überall noch €1.650 steht»). 단 King's를 «틀렸다»고 단정하지 말고 «공식 일정표는 €1.100»으로.
2. Mystery Bounty **€3,200(Key Dates) ↔ €3,250(일정표·피드: 2,000+250+1,000)** — 글에는 «€3.250 (laut Turnierplan; die Übersicht nennt €3.200)» 병기 또는 생략.
3. 피드 일부 `registrationfinishdate`가 2025년·8월 날짜(#42 «2025-12-10» · #1 Final «2026-08-30»)로 찍혀 있다 = 피드 입력 오류. **레지 마감은 일정표 DOM 값만 쓴다.**
4. 일정표 스택: EPT ME 30,000(일정표·피드 일치). PS Open 위성 제목 «Win Your Seat @ 50,000 Chips»의 50,000은 위성 자체 표기 — ME 스택과 혼동 금지.
5. 장소 표기: 공식 «Hilton Hotel Prague» / 운영 «King’s Casino Prague». pokerturniere.live는 «King's Casino Prague, Pobřežní, Karlín»으로 적는다 — 같은 건물(주소 Pobřežní 311/1). 글은 공식 표기.
6. 보드 `lib/tournaments.ts` `ept-prague` note에 **PS High Roller €2,200 · Mystery Bounty**가 빠져 있다(오류 아님 · 보강 후보 — 13로케일 사전 동시 수정이라 별도 회차).

## §9 수요 (DataForSEO · 상세 = `docs/keyword-bank/de-tournament.md` §3)

- **DE**: «ept prag» 110/월(피크 25-12 **480**) · «ept prague» 50(25-12 210) · «prag poker» 50 · «poker prag» 40 · «pokerstars prag» 10
- **AT**: «ept prag» 30(25-11·12 90) · «ept prague» 20(25-12 90) · «kings casino prague» 140
- 연도형(«ept prag 2026»·«ept prague 2026») = 볼륨 null(최저 버킷 미만) — 그러나 SERP는 존재(§10)
- 순서표 2의 다른 후보 비교(같은 날 실측): es partypoker 무르시아 = 대회명 null · 베뉴 «odiseo poker» 390(평탄) / es CAP 로사리오(AR) = «circuito argentino de poker» 260 · «cap rosario» 110 → **대회명 수요가 실재하고 대회 달에 튀는 건 EPT 프라하 하나**

## §10 SERP («ept prag 2026» · DE · de · desktop · 10-02)

1 pokerstarslive.com/de/ept/prague/ · 2 **kings-resort.com/de/prague/ept (€1.650 잔존)** · 3 pokerstarslive /de/…/schedule/ · 4 pokerstars.de 뉴스(2025-08) ·
5 **pokerfirma (€1.650 잔존)** · 6 pokerstarslive en · 7 Hendon Mob · 8 pokerstarslive.net · 9 pokerturniere.live · 10 somuchpoker(en)
→ 공식 외 독일어 해설 슬롯은 2곳뿐이고 둘 다 낡은 바이인. **«정확한 2026 바이인 + 독일 계정 온라인 등록»이 비어 있다.**
