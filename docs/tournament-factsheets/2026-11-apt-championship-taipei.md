# 사실 시트 — ja «APT Championship 台北 2026» 글 · 후보 C

> 작성 2026-09-28 (Opus · 본체). 열람일 = **2026-09-28** 전건(Playwright DOM 원문 · 원본 텍스트는 세션 scratchpad `aptc/`).
> 스파인 = `docs/tournament-spine.md` §3-3 «APT Championship Taipei 2026» · 보드 = `lib/tournaments.ts` `apt-championship`.
> 후보 선정 = `2026-q4-ja-candidates.md` §2 C · 시한 D-28 = **10/15**(페스티벌 11/13 기준) · 정본 게이트 = `docs/native-tournament-posting-workflow.md` §2-2.
> 🔴 **공식 발표 3종이 서로 다르다**(04-29 · 06-10 · 07-02 기사). 글의 수치는 **09-28 라이브 시리즈 페이지·이벤트 상세 페이지**가 정본이다 — 기사 수치는 «발표 당시 값»으로만 쓴다.

## 1. 시리즈 개요 ✅✅

| 항목 | 축어 | 출처 |
|---|---|---|
| 헤더 | 「APT Championship, Taipei 2026」「13 Nov to 29 Nov」「USD 5M MAIN EVENT GTD」「209 EVENTS」「17 DAYS」「Venue Red Space 多元商務空間」 | theasianpokertour.com/series/apt-championship-taipei-2026 |
| 일정표 첫 행 | 12 Nov 2:00 PM 「#1000 [Event 0] Asia Gaming Industry Championship Freezeout」 — 06-10 기사 「restricted to casino employees and poker industry persons only and plays out on November 12, the day before the festival officially begins」 → **일반 참가자는 11/13부터** | 같은 곳 · news/apt-announces-full-aptc2026-schedule |
| 🔢 직접 센 값 | 일정표 260행 파싱 → 번호 이벤트 **209개**(#1~#186 결번 0 + #1000~#1022 23개) + 비이벤트 2행(APT Pickleball Tournament · APT Players Party) · **새틀 26 / 트로피 183** · 헤더 209와 일치 | Playwright 집계 |
| 🔴 발표값과의 차이 | 06-10·07-02 기사 = 「210 trophy events and 26 satellite events」/「210 events, including 184 trophy events and 26 satellite tournaments」 → 라이브는 209. **글에는 «209(9/28 공식 일정표)»** | — |
| 챔피언십 이벤트 | #1000~#1022 = 23개(= 기사 「23 Championship Events」) | 집계 |
| 파트너·스폰서 | 「in partnership with the Chinese Texas Hold'em Poker Club (CTP)」 「the Asian Poker Tour—sponsored by Natural8」 | 06-10 기사 |
| 베뉴 | Key Info 「All tournaments will take place at the brand-new Red Space 多元商務空間 in Taipei.」 · 🔴 04-29 기사는 「Asia Poker Arena (APA) and Red Space」, JOPT Games 페이지는 「Asia Poker Arena（APA）ほか」 → **글은 공식 시리즈 페이지·Key Info의 Red Space** | series/.../info |
| 베뉴 위치 | Red Space 공식 「場地距離捷運南京復興站也只要一分鐘」 · 「地點位於台北市復興北路、前星聚點空間原址」 | redspace.tw/about · redspace.tw/red-space-grand-opening-2026 |
| 참가 연령·신분증 | 「Participants must be at least 18 years old」 · 「Foreign citizens: Valid foreign passport」 | series/.../info |
| 전자담배 | 「VAPING & IQOS ARE ILLEGAL IN TAIWAN - Possession or use of e-cigarettes, vapes, or IQOS devices is strictly prohibited by law.」 · 「NO SMOKING INSIDE THE VENUE … immediate disqualification」 → 글에는 **실무 안내**(가져가지 않는다)로만 | 같은 곳 |
| 바이인·지급 | 「Buy-Ins and Payouts — Please inquire with registrations@apt.poker」 | 같은 곳 |
| 통화 표시 | 일정표는 TWD 토글 — USD 이벤트도 TWD 환산 표시(ME 「TWD 311.9K」 = USD 10K). HR 얼리버드 기사 「The amount in USD is based on the current exchange rate … if the exchange rate … has fluctuated by more than 1%」 | 일정표 · news/apt-championship-2026-high-roller-early-bird-specials |

## 2. 메인 이벤트 #1014 ✅✅ (이벤트 상세 5페이지)

| 항목 | 축어 |
|---|---|
| 이름 | 「[Event 14] APT Championship Main Event Freezeout - Day 1 - USD 5,000,000 GTD」 |
| 바이인 내역 | 「Total Buy-in USD 10,000 · Prize Pool USD 9,600 · Entry Fee USD 400 · Staffing USD 288」 「Players commit to contribute 3% from the prizepool to support the staffing.」 |
| 스택 | 「Starting Stack 50,000」 · Day 1 레벨1 「75 mins 100 / 200 / 200」 → **250BB** |
| 일정 | Day 1 **23 Nov 11:00 AM**(Reg Closes 10:45 PM) · Day 2 24 Nov 11:00 AM 「(Reg Open for 2 Levels)」 Reg Closes **1:45 PM** · Day 3 25 Nov · Day 4 26 Nov · Final Day 27 Nov (각 11:15 AM) → **Day 1은 11/23 한 번뿐** |
| 레벨 | Day 1·2 = 75분(레벨 1~16) · Final Day 구조 = 90분 |
| 레이트 레지 | Day 2 구조표 레벨 10 뒤 「Reg Closes」 → 레벨 10 종료까지 |
| 메카닉 | 「Day 1 Plays 8 Levels.」「Day 2 Plays 8 Levels or to ITM (TD Discretion).」「Final Table starting level is guaranteed to be at a minimum of a 30 big blind average.」 |
| 🔴 상위 3석 | 「USD 30,000 withheld from the prize pool as three (3) seats in the APT Championship Event taking place in Taipei in **November 2027**」(1·2·3위) — 일정표 라벨 「3 seats to APTC Taipei 2026」은 **라벨 오기**(상세가 정본) |

## 3. 메인으로 가는 현장 경로 ✅✅

| 경로 | 축어 · 값 |
|---|---|
| Step 1 | #86 21 Nov 2:00 PM 「50 Seats GTD」 · #88 21 Nov 7:30 PM 「20 Seats GTD」 · #95 22 Nov 11:00 AM 「1 Seat GTD」 · #107 22 Nov 8:30 PM 「1 Seat GTD」 — 「Total Buy-in **USD 350**」 「awards APT Championship Main Event Step 2 Mega Satellite seats worth USD 1,700 each」 「Win Your Seat @ 90,000」 |
| Step 2 / 직행 | #101 22 Nov 2:00 PM 「25 Seats GTD」 · #105 22 Nov 8:00 PM 「5 Seats GTD」 — 「Total Buy-in **USD 1,700**」 「awards APT Championship Main Event Seats worth USD 10,000 each」 · 직행 새틀 #70 19 Nov 8:00 PM(5석) · #113 23 Nov 11:45 AM(1석) · #116 23 Nov 7:00 PM(1석) 모두 USD 1,700 · 「Accumulate 105,000 or more」 |
| 새틀 규칙 | 「Seat is non-transferable and can't be converted to cash.」「A player can only win 1 seat.」「Players are allowed to forfeit their stack before the close of registration in order to re-enter.」 |
| 챔피언십 부상(메인 시트) | 12개 이벤트 합 20석 − 메인 자신의 3석(2027) = **2026 메인 시트 17석** = 07-02 기사 「a total of 17 seats to the APT Championship 2026 Main Event」 ✅ · #1001 National Cup(1) · #1002 Mystery Bounty(1) · #1003 Ultra Stack(2) · #1004 7-Max(1) · #1007 Natural8 Cup(2) · #1008 Micro Main(1) · #1009 Single Day HR(1) · #1011 SHR(3) · #1013 Superstar(3) · #75 HR Ultra Stack(1) · #85 HR Single Day(1) |
| 🔴 번호 함정 | 06-10·07-02 기사의 「Event 76 High Roller Ultra Stack」「Event 86 High Roller - Single Day」 → 라이브 번호는 **#75 · #85**(#86은 지금 Step 1 새틀) |
| National Cup 상세 | #1001 「Total Buy-in TWD 16,000」 · 스택 40,000 · Flight A 13 Nov 11:00 / Turbo B 13 Nov 20:00 / C 14 Nov 11:00 / D 14 Nov 16:30 / Turbo E 14 Nov 20:30 · Final 15 Nov · 「USD 10,000 withheld from the prize pool as a seat in the APT Championship Event taking place in Taipei in November 2026. This seat will be awarded to the Champion」 · 「Each starting flight plays to 14% ITM.」「Players must make the Final Day in order to cash.」 · 🔴 06-10 기사명엔 「Sponsored by DeepRun」, 라이브 이름엔 없음 → 쓰지 않음 |
| Micro Main 상세 | #1008 「TWD 16,000」 · 19 Nov A 11:00 / B 16:30 / Turbo C 20:30 · 20 Nov D 11:00 / E 15:45 / Turbo F 20:30 · Final 21 Nov · 우승 1석(2026) · 14% ITM |
| Mini Main 상세 | #1015 「TWD 35,000」 · 24 Nov A 14:00 / Turbo B 20:15 · 25 Nov C 11:00 / Turbo D 20:30 · Final 26 Nov · 시트 부상 없음 |

## 4. 일본 독자용 — JOPT Games 경로 · JOPT 협찬 이벤트 ✅✅

| 항목 | 축어 | 출처 |
|---|---|---|
| JOPT Games 10월 | 「10/10 Sat. SATELLITE APT Championship 19:00〜 FINAL STAGE」「10/11 Sun. … 19:00〜」 「時刻はすべて日本時間（JST）です」 | japanopenpoker.com/games/jopt-games-october-2026-schedule/ (2026/09/26) |
| 상품 | 「LIVE EVENT MINI MAIN EVENT 11.24 Tue. 〜 11.26 Thu. BUY-IN NT$35,000（約1,100 USD）」「通過者にはMini Main Event参加権＋渡航費・宿泊費の補助を提供」 | 같은 곳 |
| 🔴 보조 상한 | 「※渡航費・宿泊費の補助は合計10万円が上限です。」는 **TMT Championship 칸에만** 있다 → APT 보조액은 «미기재»(층 혼동 금지) | 같은 곳 |
| 참가 조건 | 「ファイナルチケット1枚 ＋ SILVER以上の会員プラン」 | 같은 곳 |
| 티켓 가격 | 「SILVER 980 円/月」「GOLD 4,980 円/月」 · EC 「トライアルチケット 1,000 円」「サテライトチケット 5,000 円」「ファイナルチケット 30,000 円」「※価格はすべて税込」 · 「サテライトステージ以降のエントリーには Silver 以上のサブスク加入が必要です。」 | japanopenpoker.com/games/ticket |
| JOPT 협찬 이벤트 | #133 「NL - Hold'em - Freezeout - Sponsored by JOPT」 25 Nov 11:15 AM · Reg Closes 3:05 PM · 「Total Buy-in TWD 10,000 · Prize Pool TWD 8,542 · Entry Fee TWD 1,458」 · 스택 30,000 · 20분 레벨 · 「ITM is between 12% to 15%.」 | 이벤트 상세 |
| APT 바우처(JOPT 대회 부상) | 오사카 #01 #34 「“APT全てのイベントで使用可能なバウチャーチケット”を合計$6,000分」 「有効期限:2027.03.22まで。有効期限内であれば、全てのAPTイベントで使用可能。」「使用時は、現地会場受付にお申しつけください。」 · 후쿠오카 #01 #22 결과 2026-07-11 | japanopenpoker.com/jopt2026osaka01_apt_sponsored/ |

## 5. 일본인 관련성 ✅✅ (전부 APT 공식)

| 사실 | 축어 | 출처 |
|---|---|---|
| 2025 메인 국가별 | 「Taiwan made up the highest proportion of the field with 90 entries representing just over 13 percent (13.4%)」「with Japan the next best represented with 66 entries making up close to ten percent (9.8%)」 · 671 entries · 「47 different countries and regions」 | news/nishant-sharma-makes-history-… |
| 2025 메인 결과 | 우승 Nishant Sharma(India) TWD 37,030,773 · 상금풀 TWD 194,080,973 · 「he qualified to the Main Event via a USD 1,700 Step 2 live satellite」 | 같은 곳 |
| 2025 National Cup | 「Japan's Ruiko Mamiya ultimately emerged victorious after a three-way deal at the final table, collecting TWD 3,087,700 (~USD 101,900) and an APT Championship Main Event seat」 · 2,398 entries(1,157 unique) | news/apt-championship-2026-the-preview |
| 2025 Step 2 새틀 | 「TWD 53,000 Step 2 Mega Satellite, which attracted an astonishing 399 entries … awarded 58 Main Event seats」 | 같은 곳 |
| APT 타이베이 2025(봄) | 「Japan's Akira Takasugi」 우승 TWD 19,009,440 · 2,547 entries · FT 일본 3명(1위 Takasugi · 4위 Shinichiro Kano · 7위 Rintaro Kagawa) · 「the top three finishers also receiving a TWD 350,000 … APTC Main Event ticket」 | news/japan-s-akira-takasugi-slides-to-victory-… |
| 🔴 층 주의 | APT 타이베이(4~5월 시리즈)와 APT Championship(11월)은 **다른 페스티벌**. 한자 이름은 1차 출처 없음 → 로마자(★3) |

## 6. 입국·이동 ✅✅

| 항목 | 축어 | 출처 |
|---|---|---|
| 비자 면제 | 「eligible for the visa-exemption program, with a duration of stay of up to 90 days: … Japan*」 · 각주 「Japan nationals who possess a passport valid for the intended period of stay are eligible for visa-exempt entry.」 | boca.gov.tw/cp-149-4486-7785a-2.html |
| 입국카드 | 「10月１日から台湾を訪れる外国人旅客は必ず、台湾到着の3日前から公式サイトでオンライン記入を行う必要がある(https://twac.immigration.gov.tw/ )」(2025-09-30 발신) | taiwanembassy.org/jpokd_ja/post/13053.html |
| 시차 | 일본 −1시간(translation-terms-ja §13) · APT 기사 「11:15am local time (GMT+8)」 | — |
| 송산공항 | 松山機場 공식 «今日航班(국제)» 목적지에 「羽田HND」 다수 → 하네다–송산 정기편 존재(편수·소요시간은 쓰지 않음 · 12-5) | tsa.gov.tw/flights/international/today |
| 송산→회장 | 台北捷運 공식 시각표 PDF 「BR13 松山機場站」: 文湖線 목적지 「動物園 Taipei Zoo」 · 환승표 「松山新店線 — 南京復興站」 → **문호선 한 번에 南京復興** · 첫차 06:03 · 막차(동물원 방면) 00:27 | web.metro.taipei/img/ALL/TTPDF/007.pdf (PNG 렌더 육안) |
| 타오위안 | 桃園捷運 공식 역명 「台北車站」(A1) · 「機場第一航廈站」「機場第二航廈站」 — 소요시간은 요약만 봤다 → **쓰지 않음** | tymetro.com.tw |

## 7. 온라인 예선 (Natural8) — 안내 수준 판정

| 항목 | 축어 | 출처 |
|---|---|---|
| 프로모 | 「Journey to APT Championship 2026」 $600/$1,100 새틀 → 「$10,000 Main Event seat or a $12,000 APT Championship package」 · $90/$150 스텝 | natural8.com/en/poker/tournaments/journey-to-apt-championship-2026 |
| 약관 2.11 | 「We do not accept players who reside in a number of countries and jurisdictions. As a rule, if a potential player cannot find his/her country of residence in the list of countries available during the registration process, this means that Natural8 will not be able to accept him/her as a player.」 | natural8.com/en/tnc |
| 판정 | 공개 제외 목록이 없어 «일본 대상 여부»를 원문으로 확정할 수 없다 → **구조·가격 안내 안 함.** «스폰서 Natural8의 온라인 예선이 있고, 이용 가능 여부는 등록 화면의 국가 목록으로 정해진다(약관 2.11)» 한 문단 · CTA 0 · 우회 비권장. 일본 거주자 입구는 JOPT Games + 현장 새틀 중심 |

## 8. 엔 환산 기준

- **1米ドル=157円 · 1台湾ドル=5円 목안**. 근거: 三菱UFJ銀行 外国為替相場 「最終更新日時：2026年9月28日 15時30分」 USD TTS 157.91 / TTB 157.41 · APT 일정표 환산 USD 10,000 = TWD 311.9K(→ 1米ドル≒31.19台湾ドル → 1台湾ドル≒5.04円).
- 대만은 본문 전체 «目安»로 통일. 값의 정본은 TWD/USD 원표기.

## 9. 직접 집계(글에 쓰는 수)

- 새틀 제외 183개 중 **TWD 10,000 이하 92개**(≤5,000: 24 · 5,001~10,000: 68) — 일정표 TWD 표시 기준(USD 이벤트는 환산 표시값).
- 최저 TWD 3,300(#6·#13 National Cup 새틀) · 트로피 이벤트 최저 TWD 3,500(Women's Event·Hyper Turbo Home Games 등) · 최고 USD 50,000(#1013 Superstar).
- 주요 챔피언십(기사·상세 대조): Mystery Bounty #1002 TWD 35,000(GTD 15M) · Ultra Stack #1003 TWD 25,000(GTD 25M) · Natural8 Cup #1007 USD 3,300(GTD USD 1M) · Trip Saver #1022 TWD 50,000(GTD 5M).

## 10. 쓰지 않는 것

- 항공편 편수·운임·소요시간 · 호텔 일반 요금(공식은 HR 얼리버드 패키지만 · 기한 10/12) · 한자 선수명 · APT 타이베이 2026(봄) 일본인 성적(1차 출처 미열람 — light-three는 2차) · Natural8 가입 안내 · 대만 법 제도 해설.
