# de 대회 키워드 뱅크 — CAPT Million Baden · German Poker Masters (King's Rozvadov)

> 신설 2026-10-02 (핸드오프 순서표 「de CAPT·GPM」 착수 전 수요 실측).
> 볼륨 = DataForSEO `keywords_data/google_ads/search_volume/live` · language 생략 ·
> **location_code 2276(Germany) / 2040(Austria) / 2756(Switzerland)** 각각 따로. 월별 창 = **2025-09 ~ 2026-08**(12개월, 최신 월 2026-08).
> 발굴 = `dataforseo_labs/google/keyword_suggestions/live`(시드별 1태스크 · `language_code:"de"`).
> SERP = `serp/google/organic/live/regular` · `language_code:"de"` · desktop · depth 10 · 열람 2026-10-02.
> 원자료(JSON) = 스크래치 `C:/Users/하봄/AppData/Local/Temp/claude/de-capt-gpm/`(sv1·sv2·sug·serp.json) — 레포 밖.
>
> 🔴 읽는 법 두 가지
> 1. **구글 Ads는 근접 변형을 한 버킷으로 묶는다.** `kings casino rozvadov` = `king's casino rozvadov` = `casino kings rozvadov` = `king casino rozvadov`(월별 시계열 완전 동일),
>    `casino baden poker` = `baden casino poker` = `poker casino baden`. **아래 묶음 합계는 동일 시계열을 한 번만 셌다.** 변형을 더하면 3~4배로 부푼다.
> 2. **10 = 구글 최저 버킷**이다. 10이 줄지어 있는 행은 «수요 있음»이 아니라 «거의 없음»으로 읽는다.

## 0. 헤드라인

| 묶음 | DE 월평균 | AT 월평균 | CH 월평균 | 피크 |
|---|---:|---:|---:|---|
| **CAPT Million(대회명)** | 90 | **430** | 60 | **AT 2025-11 = 2,420**(평월의 ~30배) · DE 2025-11 = 300 |
| Casino Baden 포커(베뉴) | 40 | **1,550** | 290 ⚠ | AT 2025-11 = 2,180 · 연중 1,000+ 유지 |
| **German Poker Masters(대회명)** | **40** | 20 | 30 | DE 2025-11 = 70 |
| King's 포커 의도(베뉴) | **780** | 150 | 160 | DE 2026-01 = 980 · 평탄 |
| King's 브랜드 전체(베뉴·호텔·카지노 혼합) | 3,680 | 300 | 380 | DE 2025-09 = 5,910 |

→ **대회명 수요가 실재하는 건 CAPT Million 하나다.** 11월에 오스트리아에서 튄다(전년 실측).
→ **GPM은 대회명 검색이 사실상 없다**(DE 40/월 · 최저 버킷 수준). 수요는 «King's/Rozvadov»라는 **베뉴 이름**에 붙어 있고, 그 자리는 de 필라 `holdem-tournament`의 「Tschechien – warum die deutschen Serien in Rozvadov laufen」 절이 이미 받고 있다.

⚠ **CH의 Casino Baden 290은 오스트리아 Casino Baden 수요가 아닐 공산이 크다** — 스위스 Baden AG의 Grand Casino Baden과 문자열이 같다(`casino baden` CH 8,100 · AT SERP에도 grandcasinobaden.ch가 4위). 근거로 쓰지 마라.

## 1. CAPT Million — 키워드별 (월평균 · 피크월:값)

| 키워드 | DE | AT | CH | 메모 |
|---|---|---|---|---|
| capt million 2025 | 40 · 25-11:170 | **170 · 25-11:1,000** | 10 | 연도형이 무연도보다 크다 |
| capt million | 10 · 25-11:50 | **140 · 25-11:880** | 10 | |
| capt million baden | 10 · 25-11:40 | 40 · 25-11:260 | 10 | |
| capt baden | 10 · 25-11:30 | 30 · 25-11:210 | 10 | |
| capt million 2026 | 10 · 26-08:40 | 30 · **26-08:140** | 10 · 26-08:20 | 🟢 **이미 오르기 시작** (AT 26-06 → 07 → 08 상승) |
| capt million 2025 ergebnisse | 10 | 20 · 25-12:110 | 10 | 결과 수요 = 대회 직후 12월 |
| capt million baden 2026 · capt poker baden · million baden | null | null | null | |
| capt (단독) | 8,100 | 880 | 1,000 | 🔴 **노이즈** — DE 서제스트 상위 = Capt'n Sharky·Golf Hotel René Capt·capt a320. 근거 금지 |
| capt poker · capt 2026 · casinos austria poker tour | 10~20 | 10~20 | 10~20 | 투어 일반명은 검색되지 않는다 |

AT 월별(묶음 6종 합): 25-09 540 · 25-10 690 · **25-11 2,420** · 25-12 790 · 26-01 50 · … · 26-07 160 · 26-08 270.
→ **전달(10월)부터 오르고 11월에 정점, 12월(결과)까지 꼬리.** 리드타임 D-28(10/22) 발행이면 상승 구간 초입에 들어간다.

참고 — 다른 CAPT 스톱도 AT에서 같은 «대회 달 스파이크» 패턴: capt seefeld 2026 AT 140(26-02:880) · capt salzburg 2026 AT 90(26-04:720) · capt velden 2026 AT 90(26-05:480) · capt graz AT 70(25-09:480) · capt linz AT 70(26-03:480) · capt innsbruck AT 50(26-03:320).
→ **CAPT는 «스톱명 + 연도»로 검색되는 투어다.** Million이 그중 가장 크다.

### 베뉴 — Casino Baden 포커 (AT 기준)

| 키워드 | DE | AT | CH |
|---|---:|---:|---:|
| casino baden poker (=baden casino poker =poker casino baden) | 20 | **1,300** · 25-11:1,900 | 260 ⚠ |
| casino baden pokerturnier (=casino baden poker turnier) | 10 | **210** · 26-05:320 | 20 |
| casino baden poker ergebnisse | 10 | 40 · 25-11:70 | 10 |
| casinos austria poker | 90 | 480 · 26-01:590 | 20 |
| poker baden | 10 | 480 · 25-11:720 | 70 |
| casino baden bei wien | 90 | 210 | 20 |
| casino baden (단독) | 880 | 27,100 | 8,100 | 🔴 레스토랑·디너·드레스코드·실베스터 혼합 — 포커 근거 금지 |

## 2. German Poker Masters / King's Rozvadov — 키워드별

| 키워드 | DE | AT | CH | 메모 |
|---|---|---|---|---|
| german poker masters | **20** · 25-11:40 | 10 | 10 | 대회명 수요는 이게 전부 |
| german poker masters 2025 | 10 | 10 | 10 | |
| gpm rozvadov | 10 | null | 10 | |
| german poker masters 2026 · german poker masters rozvadov · gpm poker | null | null | null | |
| kings casino rozvadov (+3 변형 동일 버킷) | **2,400** · 25-09:4,400 | 110 | 140 | 베뉴 브랜드. 호텔·뷔페·입장 의도 혼합 |
| kings rozvadov (=king's rozvadov =rozvadov kings) | 1,000 · 25-12:1,600 | 170 | 210 | |
| kings resort rozvadov | 110 · **26-08:260** | 10 | 10 | 🟢 26-03부터 상승(리브랜딩 «King's Resort» 반영으로 보임 — 해석, 미검증) |
| king's resort rozvadov | 170 · 25-10:260 | 10 | 20 | |
| kings casino poker | 320 · 25-10:390 | 30 | 20 | |
| rozvadov poker (=poker rozvadov) | 260 · 26-01:480 | 50 | 90 | |
| kings casino rozvadov poker | 50 | 10 | 10 | |
| kings casino rozvadov poker turniere | 20 | 10 | 10 | |
| kings casino turnierplan · kings rozvadov turnierplan · king's casino rozvadov turnierplan | 20 · 10 · 10 | 10 | 0~10 | 「일정표」 의도는 작다 |
| german poker days | 590 · 25-10:1,000 | 10 | 10 | 🔵 GPM보다 **15배** 크다 — 같은 주최 계열의 다른 시리즈 |
| german poker tour | 320 | 10 | 10 | |
| pokerturnier tschechien | 50 · 26-01:90 | 20 | 10 | |
| pokerturnier österreich / poker turnier österreich | 20 | 50 | 10 | |
| rozvadov turnier · poker festival rozvadov · pokerturnier november 2026 | null | null | null | |
| wsop europe / wsop europe 2026 | 480 / 320 | 50 / 70 | 40 / 50 | 참고(King's 개최 이력) |
| rozvadov (단독) | 8,100 | 260 | 260 | 🔴 노이즈 — 서제스트 = 주유소·아시아마켓·KFC·마사지(국경 쇼핑). 근거 금지 |

## 3. 기존 뱅크 값과 대조

| 키워드 | 기존 값 (`de-core-volumes.md`) | 이번 DFS DE | 판정 |
|---|---|---|---|
| king's casino rozvadov | 2,900 (라쿠 · 2026-08-10) | 2,400 | 창 이동(9월 피크 4,400 이탈 시점 차) — 자릿수 일치 |
| king's resort rozvadov | 170 (라쿠 · 2026-08-15) | 170 | 일치 |
| rozvadov poker | 260 · LDA 9 (lowfruits) | 260 | 일치 |
| casino baden poker | 20 (라쿠 · DE) | 20 | 일치 — 🔴 **DE 값만 보고 «작다»고 했던 것.** AT에서는 1,300이다 |
| capt million baden ergebnisse | 10 (DE) | — | 이번엔 AT에서 `capt million 2025 ergebnisse` 20 · 피크 110 |
| capt seefeld 2026 | 110 (DE) | 110 | 일치 |

→ 🔴 **교훈: 오스트리아 대회를 Germany location으로만 재면 1/5~1/10로 과소 측정된다.** CAPT 계열은 반드시 2040으로 잰다.

## 4. SERP 관찰 (2026-10-02 · desktop · organic만)

**`capt million` @AT** — casinos.at 4개(1·4·9위 + 공식 CAPT Million 페이지) · **pokerexklusiv.com 3위 「CAPT Million 2026: Alle Starttage und Details zum …」(제3자 상세 기사)** · pokerturniere.live 5위(이벤트 캘린더) · hendonmob 6위(결과 DB) · pokerexklusiv 7위(2025 페이지) · pokerfirma.com 8위(우승자 뉴스) · instagram 10위.
**`capt million baden` @DE** — casinos.at 3개(1·3·7위) · pokerturniere.live 4위(2025) · **pokerexklusiv 5위 「Der Turnierplan zur CAPT Million 2025」** · pokerfirma 6위(태그 페이지) · hendonmob 8위 · baden.at 9위(시청 관광) · facebook 10위.
**`casino baden poker` @AT** — casinos.at 5개(1·2·3·5·6위) · grandcasinobaden.ch 4위(스위스 · 다른 집) · pokerexklusiv 7위(카테고리) · hendonmob 8위 · pokerfirma 9위(태그).
**`casino baden pokerturnier` @AT** — casinos.at 4개 · grandcasinobaden.ch 2개 · pokerexklusiv 5위 · instagram(Casino Baden-Baden · 독일) · pokerfirma 10위 「Der neue Turnierplan im Casino Baden」(뉴스).
**`german poker masters` @DE** — kings-resort.com 1위(공식 GPM 페이지) · germanpokerdays.com 2위(2026 부활절판 패키지) · pokerturniere.live 3·11위 · germanpokertours.de 4위 · youtube 6위 · pokerexklusiv 7위(부활절판 개막 뉴스) · **poker-trip.de 9위 「German Poker Masters im Kings Casino mit 230€ Buy-IN」(여행 패키지 판매 페이지)** · facebook 10위.
**`kings casino rozvadov` @DE** — kings-resort.com · wikipedia · facebook · booking · trivago · **poker.de 7위 「Live Poker im King's Casino in Rozvadov」(제3자 베뉴 소개)** · instagram. @AT는 kings-resort.com 4개 + wikipedia + trivago.
**`rozvadov poker` @DE** — kings-resort.com · facebook · poker.de 5위 · **pokerdiscover.com 6위 「Poker Tournaments in Rozvadov in 2026」** · wikipedia · youtube · pokerturniere.live 9위.

**판정**
- **CAPT Million**: 공식(casinos.at)이 절반 이상. 제3자는 **pokerexklusiv(연도별 «Starttage·Turnierplan» 기사) 하나가 실질 경쟁자**, 나머지는 캘린더·DB·뉴스. «왜 가나·어떻게 가나(빈에서 이동·숙박·예산·스타트데이 고르는 법·리엔트리 전략)»를 한 장에 묶은 **가이드형은 없다** → 들어갈 자리 있음.
- **GPM**: 대회명 SERP는 공식 + 주최 계열(germanpokerdays) + 캘린더 + 패키지 판매. 제3자 가이드 없음 — 그러나 **애초에 검색량이 40/월**이라 자리가 비어 있어도 받을 수요가 작다.
- **King's/Rozvadov 베뉴**: 공식·OTA·위키가 상단. 제3자는 poker.de·pokerdiscover — 베뉴 가이드 경쟁이 있고, 우리 필라가 이미 이 축을 갖고 있다.

## 5. 권고 — «CAPT Million Baden 단독 1편», GPM은 단독 글 만들지 않는다

1. **CAPT Million Baden 2026 가이드 1편(de)** — 대회명 수요(AT 430/월 · 11월 2,420)와 베뉴 수요(`casino baden poker` AT 1,300 · `pokerturnier` 210)가 **같은 글로 모인다.** `capt million 2026`이 이미 26-06→08 상승 중이고 전년 곡선상 10월부터 오른다 → **10/22 마감 준수 시 상승 초입 진입.**
   - 제목·H1 키워드: `CAPT Million 2026` + `Casino Baden` (연도형이 무연도보다 크다 — 2025년 실측 1,000 vs 880). `Poker Turnier Casino Baden`·`Ergebnisse`는 H2/FAQ로.
   - 독자 = **오스트리아 + 바이에른**. 문장·통화·이동(빈·뮌헨발)을 그 둘에 맞춘다. 스위스 Grand Casino Baden 혼동 경고는 필라처럼 유지.
2. **GPM €1MILLION은 단독 글 금지(현 시점)** — 대회명 DE 40/월, `2026` 변형 null. 같은 노력 대비 수요가 CAPT의 1/10 이하.
   대신 ① de 필라 `holdem-tournament`의 Rozvadov 표(이미 GPM 11/20~30 행 보유)를 유지·갱신하고 ② CAPT 글에 «같은 주 King's에서 GPM이 겹친다 — 어느 쪽?» 비교 H2 하나로 흡수한다(두 대회 일정이 11/19~30 · 11/20~30으로 겹친다).
3. **둘을 한 편으로 묶지 마라** — 묶음 쿼리(`pokerturnier november 2026`)는 null, `pokerturnier österreich`·`tschechien`도 20~50이다. 묶음 글은 받을 검색어가 없고 CAPT 키워드의 제목 집중도만 떨어뜨린다.
4. 🔵 King's 축에 굳이 단독 글을 낸다면 대상은 GPM이 아니라 **German Poker Days(DE 590)** 쪽이다 — 별건, 이번 회차 범위 밖.

## 다음 후보 (같은 뱅크에 이어 적는다)

- CAPT 다음 스톱(2027 시즌) — 스톱명+연도 패턴이 Seefeld(2월)·Linz/Innsbruck(3월)·Salzburg(4월)·Velden(5월)·Graz(9월)로 반복. 전부 AT location으로 잴 것.

## 6. EPT Prag 2026 (추가 2026-10-02 · 핸드오프 순서표 2 선정 실측)

> 같은 방법(`google_ads/search_volume/live` · language 생략 · location 별도 · 창 2025-09~2026-08). 사실 시트 = `docs/tournament-factsheets/2026-12-ept-prague.md`.

| 키워드 | DE | AT | 메모 |
|---|---|---|---|
| ept prag | **110** · 25-12:**480** · 25-11:210 | 30 · 25-11·12:90 | 독일어 표기형이 영어형보다 2배 |
| ept prague | 50 · 25-12:210 | 20 · 25-12:90 | |
| prag poker | 50 · 26-03:110 | 20 | 평탄(대회 무관 수요 섞임) |
| poker prag | 40 · 26-03:90 | 10 | |
| pokerstars prag | 10 | 10 | |
| kings casino prague | (미측정) | 140 · 26-03:260 | 베뉴 브랜드 |
| ept | — | 140 | |
| european poker tour | — | 40 | |
| ept prague 2025 · ept prague 2026 · ept prag 2025 · ept prag 2026 · pokerstars open prague | null | — | 연도형은 최저 버킷 미만. SERP는 존재 |

→ 대회 달(12월)에 DE «ept prag»+«ept prague» 합 **~690**. CAPT Million(AT 피크 2,420)보다 작지만 **DE 쪽 대회명 수요로는 GPM(40)의 10배 이상.**

**같은 날 다른 후보 비교**(순서표 2 · 근거로만 보존):
- es(ES 2724) partypoker 무르시아: «partypoker tour murcia»·«partypoker murcia»·«party poker murcia»·«partypoker tour» = null · «odiseo poker» 390(평탄) · «torneo poker odiseo» 170 · «casino odiseo» 170 · «torneo poker murcia» 70 · «poker murcia» 70 → 대회명 수요 없음(베뉴 수요는 상시형)
- es(AR 2032) CAP 로사리오: «circuito argentino de poker» 260(26-03:480) · «cap poker» 170 · «cap rosario» 110 · «city center poker» 320 · «city center rosario poker» 40 · «torneo poker rosario» 10 · «circuito argentino de poker rosario» 10 → 투어 일반명 수요. 로사리오 스톱 고유 수요는 작다. 보드 바이인 «공식 미기재»(07-29 확인) — 데이터 공급 재확인 필요
