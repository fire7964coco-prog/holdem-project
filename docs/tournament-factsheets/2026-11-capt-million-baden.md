# CAPT Million Baden 2026 — 사실 시트 (de 고유 글 후보)

> 열람일 = **2026-10-02**. 보드 id = `capt-million-baden`.
> 🔴 이 시트에 없는 숫자는 글에 쓰지 않는다. 갱신 시 열람일을 바꾸고 바뀐 행을 표시한다.
> ⚠ **방법론**: `casinos.at`(페이지·PDF 전부)는 이 환경에서 curl·Playwright 모두 **HTTP 403**(10/2 재확인). 그래서 전 항목을
> **r.jina.ai 텍스트 추출 프록시**로 원문 DOM/PDF 텍스트를 받아 축어로 옮겼다(요약 도구 미사용 — `docs/dach-tournaments-2026.md`와 같은 경로).
> 이벤트 목록은 공식 포커 캘린더(`series=1` = CAPT) **18페이지·177행 전수 파싱** + 바덴 11/16~30 상세 페이지 **32건 전수** 대조.
> 원본 덤프·파서 = 스크래치 `C:/Users/하봄/AppData/Local/Temp/claude/de-capt-gpm/`(kal-all.txt · det/ · parse.mjs).

## §1 기본

| 항목 | 값 (축어) | 출처 |
|---|---|---|
| 기간 | de «19. bis 30.11.2026» · en «2026, November 19 - 30» · 투어 총괄 «CAPT MILLION BADEN 19.-30.11.2026» | https://www.casinos.at/casinos/baden/spiel/poker/capt-million · /en/casinos/baden/games/poker/capt-million · https://www.casinos.at/spiel/poker/capt |
| 장소 | «Casino Baden · Kaiser-Franz-Ring 1 · 2500 Baden» (🇦🇹 니더외스터라이히 — 스위스 Baden CH-5400과 다른 도시) | 대회 페이지 연락처 블록 · /casinos/baden/kontakt-oeffnungszeiten |
| 위상(주최측 표현) | de «WILLKOMMEN ZUM GRÖSSTEN POKER TURNIER ÖSTERREICHS!» · en «WELCOME TO THE BIGGEST POKER TOURNAMENT IN AUSTRIA!» | 대회 페이지 |
| 회차 | 2024 = «Die erste CAPT Million» · 2025 = «die zweite Ausgabe» → **2026 = 3회째**(추론 아님: 1회·2회 축어 존재) | 대회 페이지 · 2025 보도자료 |
| 메인 바이인 | «Buy-in: € 500 + 50» | 대회 페이지 |
| 개런티 | «Garantiertes Preisgeld: € 1.000.000» | 대회 페이지 |
| 공식 개막 | «Offizieller Start ab 19. November mit dem CAPT Million Mega Satellite» | 대회 페이지 |
| 주최 / 문의 | Casinos Austria AG · Poker Manager **Daniel Schwarz** · +43 2252 44496 10250 · poker.baden@casinos.at · 투어 총괄 Thomas Lamatsch (Expert Poker & Tournaments) | 대회 페이지 · /spiel/poker/capt |
| 일정 PDF | «Turnierplan 2026 PDF \| 70 KB» → https://www.casinos.at/fileadmin/user_upload/CAPT-Million-Turnierplan-2026.pdf (PDF 메타 Published 2026-07-14) | 대회 페이지 |
| 스타팅데이 PDF | «CAPT Million Starttage» → https://www.casinos.at/fileadmin/00_Casinos/11_Casinos/01_Baden/05_Poker/CAPT_Million/Starttage-Uebersicht-2026.pdf (Published 2026-05-13) | 대회 페이지 |

## §2 일정 그리드 — 바덴 본무대 11/16~30 (Turnierplan PDF ↔ 캘린더 32행 전수 대조: **시각·바이인 전건 일치, 누락 0**)

요일 검산: 11/16 = 월 · 11/19 = 목 · 11/20 = 금 · 11/30 = 월 (date 명령으로 확인, PDF 요일 표기와 일치).

| 날짜 | 시각 | 이벤트 | 바이인(€) | 스택 | 리엔트리 | 레벨 | 레지 마감 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 11/16 월 | 17:00 | PLO Satellite | 100+20 | 30,000 | unlimited | 20′ | Level 10 | |
| 11/17 화 | 17:00 | NLH Satellite CAPT MILLION | 50+10 | 20,000 | unlimited | 15′ | Level 8 | Day 1 티켓 |
| 11/18 수 | 17:00 | High Roller Satellite | 200+30 | 50,000 | unlimited | 20′ | Level 8 | «3 Tickets für das High Roller Turnier am 24.11.2026» (PDF «€ 6,600») |
| 11/19 목 | 17:00 | **CAPT Million Mega Satellite** | 50+10 | 100,000 | unlimited | 20′ | Level 12 | «20 Tickets für CAPT Million DAY 1 Turnier» (PDF «€ 11,000») = 공식 개막 |
| 11/20 금 | 15:00 | **CAPT Million DAY 1** | 500+50 | 100,000 | 1 | 30′ | Level 10 | |
| 11/20 금 | 17:00 | NLH Satellite CAPT MILLION | 50+10 | 20,000 | unlimited | 15′ | Level 8 | |
| 11/21 토 | 15:00 | **CAPT Million DAY 1 of 1A** (2일짜리 Day 1) | 500+50 | 100,000 | 1 | 60′ | Level 10 | PDF «To play: 9 Level» |
| 11/21 토 | 17:00 | High Roller Satellite | 200+30 | 50,000 | unlimited | 20′ | Level 8 | 3 Tickets |
| 11/22 일 | 15:00 | **CAPT Million DAY 2 of 1A** (위 1A의 이틀째) | — | — | 1 | 60′ | Level 10 | |
| 11/22 일 | 16:00 | PLO Satellite | 100+20 | 30,000 | unlimited | 20′ | Level 10 | |
| 11/22 일 | 17:00 | **CAPT Million DAY 1 Turbo** | 500+50 | 100,000 | 1 | 20′ | Level 10 | |
| 11/23 월 | 15:00 | CAPT Million Mega Satellite | 50+10 | 100,000 | unlimited | 20′ | ⚠ PDF «10 Level» · 상세 헤더 «Level 12» · 상세 구조표 L10 뒤 «End of Registration» → **상충(§8-12) · 글에 레벨 쓰지 않음** | «10 Tickets» (PDF «€ 5,500») |
| 11/23 월 | 17:00 | **PLO Turnier** | 800+80 | 50,000 | **2** | 20′ | Level 10 | |
| 11/23 월 | 18:00 | High Roller Satellite | 200+30 | 50,000 | unlimited | 20′ | Level 8 | 3 Tickets |
| 11/24 화 | 15:00 | High Roller Satellite TURBO | 200+30 | 50,000 | unlimited | 15′ | Level 8 | |
| 11/24 화 | 16:00 | **CAPT Million DAY 1** | 500+50 | 100,000 | 1 | 30′ | Level 10 | |
| 11/24 화 | 20:00 | **High Roller DAY 1** | 2.000+200 | 100,000 | unlimited | 30′ | «Start von Tag 2» | 개런티 표기 없음 |
| 11/25 수 | 15:00 | High Roller DAY 2 Finale | — | — | — | 40′ | — | |
| 11/25 수 | 16:00 | **CAPT Million DAY 1** | 500+50 | 100,000 | 1 | 30′ | Level 10 | |
| 11/25 수 | 19:00 | **Ladies Event** | 200+30 | 30,000 | 1 | 25′ | Level 8 | |
| 11/25 수 | 23:00 | Flip & Go | 50+10 | — | — | — | — | 승자 «das €550 Ticket» |
| 11/26 목 | 15:00 | **CAPT Million DAY 1** | 500+50 | 100,000 | 1 | 30′ | Level 10 | |
| 11/26 목 | 16:00 | NLH Satellite CAPT MILLION | 50+10 | 20,000 | unlimited | 15′ | Level 8 | «für das CAPT Million DAY 1 Turnier am 27. November 2026» |
| 11/26 목 | 23:00 | Flip & Go | 50+10 | — | — | — | — | |
| 11/27 금 | 15:00 | **CAPT Million DAY 1** | 500+50 | 100,000 | 1 | 30′ | Level 10 | |
| 11/27 금 | 20:00 | **CAPT Million DAY 1 Turbo** (마지막 Day 1) | 500+50 | 100,000 | 1 | **15′** | Level 10 | |
| 11/28 토 | 15:00 | **CAPT Million DAY 2** | — | — | — | 60′ | «Registration closed» | |
| 11/28 토 | 16:00 | **Mystery Bounty** | «€ 400 + 400 + 80» | 50,000 | 1 | 30′ | Level 8 | |
| 11/29 일 | 15:00 | **CAPT Million DAY 3** | — | — | — | 60′ | closed | |
| 11/29 일 | 17:00 | **Mini CAPT Million** | 200+30 | 100,000 | 1 | 20′ | Level 8 | |
| 11/30 월 | 16:00 | **CAPT Million FINAL DAY** | — | — | — | 60′ / 90′ (상세 페이지는 «90 min») | closed | |
| 11/30 월 | 17:00 | **Micro CAPT Million** | 50+10 | 100,000 | unlimited | 20′ | Level 8 | |

- 바덴 본무대 Day 1 = **8회**(11/20 · 21~22 1A(2일) · 22 Turbo · 24 · 25 · 26 · 27 · 27 Turbo). Day 2 = 11/28 15:00 · Day 3 = 11/29 15:00 · Final = 11/30 16:00.
- 사이드 축어(대회 페이지): «Viele weitere Turniere während der CAPT Million Woche (PLO Sonderturnier, High Roller Event, Mystery Bounty u.v.m.)»
- PDF 머리말: «Additional changes according to tournament management. Further information at poker.casinos.at»

## §3 개런티·구조·특이사항

- «Garantiertes Preisgeld: € 1.000.000» · «Min Cash*: € 1.500» · «Ca. 10% ITM»
- **Best stack forward**(대회 페이지 축어): «Die CAPT Million wird als „Best Stack forward" gespielt. Dies bedeutet, dass ein:e Spieler:in sich mehrfach für den Tag 2 qualifizieren kann und dort nur den größten Stack weiterspielt. Für jede weitere Qualifikation erhält der:die Spieler:in jeweils einen Bonus von gesamt € 4.000 aus dem Turnier-Preispool ausbezahlt. Der kleinere Stack wird aus dem Turnier genommen.»
- **Day 2 진출 = 즉시 €500 Travelmoney**(Day 1 상세 페이지 축어, 대회 페이지에는 없음): «Sobald ~10% der Gesamt-Buy-ins (inkl. Re-Entry) erreicht werden, hast du den Day 2 erreicht, deine Chips werden vom Floorman gezählt, da du mit dem gleichen Stack weiterspielst. Du erhältst € 500 vom Preisgeld sofort als Travelmoney.» · «Min. Cash: € 1.500 (inkl. Travelmoney)» · 더블 보너스 «€ 4.000 (inkl. Travelmoney …)»
  → **Day 2 진출 = ITM**(10% 도달 시점에 Day 2 확정). 글에서 «Day 2 = 머니인»으로 써도 원문과 일치.
- Day 1 공통(상세 페이지): Stack 100.000 · Re-entries 1 · Late Reg. Level 10 · 구조표 L1 = Ante 600 / SB 300 / BB 600 (BB 앤티 형식) · L10 = 6,000/3,000/6,000 뒤 «End of Registration - Break»
- 2일짜리 Day 1 규칙(스타팅데이 PDF): «Time level: 20 or 30 min. (1-day-event) Time level: 45 or 60 min. (2-days-event, late reg until end level 10 on day 2)»
- 레벨 길이(대회 페이지): «DAY 1 Turniere mit folgenden Leveltimes: 60 min. | 45 min. | 30 min. | 20 min. | 15 min.» · «DAY 2 (28.11.) & DAY 3 (29.11.) Turnier mit Leveltime: 60 min.» · «Final Day Finaltisch (30.11.): Leveltime: 60 und 90 min.»
- Early Bird / Gold Bonus — **위성·사이드 이벤트 상세에만 있고 Day 1 상세에는 없다**(Day 1 페이지 «Early Bird» 0회): «Bist du bis Ende Level 1 auf deinem Platz, erhältst du 10 % des Starting Stacks.» · «Beim Kauf von goldenen Begrüßungsjetons (€ 30 um € 27) bekommst du 20 % des Stacks – gilt auch bei Re-entries.» → 글에서 메인 Day 1에 이 보너스를 붙이지 마라.
- 캐시게임(대회 페이지): «Während der CAPT Million täglich zeitgleich mit Turnierbeginn bis 04:00 Uhr: NLH ab Blinds 1/3 oder höher* · PLO ab Blinds 2/2 oder höher* (*vorbehaltlich Änderungen durch den Poker Floorman)»
- 위성 승자: «Bitte teile dem Pokerfloorman im Gewinnfall mit, an welchem DAY 1 Turnier du teilnehmen möchtest.»
- 상금 배분 산수 검산(§13-5): 2024 «3.400» × €500 = €1.700.000 ✓ · 2025 «2.937» × €500 = €1.468.500 ✓ → 상금풀 = 엔트리당 €500(수수료 €50 제외)과 정합.

## §4 등록·현장 규정

- **나이·신분증**(Besuchs- und Spielordnung Spielbank Baden §1, PDF Published 2026-09-17): «Der Besuch der Spielbank ist nur Personen gestattet, die das 18. Lebensjahr vollendet und ihre Identität durch Vorlage eines amtlichen Lichtbildausweises nachgewiesen haben.» — https://www.casinos.at/fileadmin/00_Casinos/12_Downloads/08_Besuchs-_und_Spielordnung/casino-baden.pdf
- 인정 신분증(FAQ «Ab welchem Alter darf man ins Casino und welchen Ausweis brauche ich?»): «Kopien oder Fotos werden nicht akzeptiert, egal ob digital oder physisch.» · «Führerschein (als eAusweis oder physisch) · Personalausweis (nur physisch) · Reisepass (nur physisch) · Amtlicher Dienstausweis (nur physisch) · Waffenpass (nur physisch) · Identitätsnachweis (nur physisch)» — https://www.casinos.at/faq?q=Dress%20Code
- 대회 PDF 2종 하단: «18+ … Admission to the casino in accordance with the visiting and gaming regulations of Casinos Austria AG. Valid official photo identification required.»
- **입장료**: «Der Eintritt ist frei und nur mit einer personenbezogenen Spielkarte oder GlücksCard zulässig.» (Spielordnung Baden §4)
- 체크인(«Dein 1. Besuch im Casino»): 신분증 제시 + «Wohnadresse und Geburtsort» 등 추가 정보 + 서명 + «Bei jedem Besuch wird auch ein Foto von dir angefertigt» · 선택 사항 «Pre-Boarding-Formular»(«in den nächsten 10 Tagen») — https://www.casinos.at/casinos/dein-erster-besuch-im-casino
- **드레스코드**(FAQ): «Der Dresscode bei Casinos Austria ist Smart Casual – also gepflegte Freizeitkleidung … Allzu Legeres wie Jogginghosen oder Flip-Flops ist im Casino fehl am Platz. Abendkleid oder Anzug sind nicht notwendig.» · Spielordnung §8c «in einer ihrem Rahmen entsprechenden Kleidung»
- 반입: Spielordnung §8b «Überkleider, Foto- und Filmapparate, Pakete jeder Art sowie Waffen … sind in den Spielsälen nicht gestattet.» (코트는 유료 Garderobe — 연락처 페이지 «gegen Gebühr»)
- **티켓 구매·결제**(Day 1 상세 «Tickets & Infos»):
  - «Casinos Austria Service Center · Per E-Mail oder Telefon · Montag-Freitag, 8:00–15:30 Uhr · Telefon: +43 1 53440 50 · E-Mail: service@casinos.at · Bezahlung: Kreditkarte»
  - «In unseren 12 Casinos · Kauf vor Ort an der Rezeption · Bis 24 Stunden vor Turnier-Start an jedem Standort erhältlich. Danach ausschließlich im Veranstaltungs-Casino. · Bezahlung: Bankomat, Bar, Kreditkarte»
  - 대회 페이지: «Tickets in allen Casinos von Casinos Austria direkt vor Ort an der Casino Rezeption erhältlich.»
- **리엔트리**: 메인 Day 1 = «Re-entries 1»(각 Day 1마다) · 여러 Day 1 출전 = best stack forward(§3)
- **등록 마감**: **바덴** 각 Day 1 «Late Reg. Level 10»(2일짜리는 둘째 날 Level 10 끝) — 🔴 **바덴 한정**(검증 10-02): 타 카지노 스타팅데이는 다르다 — Salzburg 11/22 Day 1 «Late Reg. Level 11»(20 min) · Bregenz 10/16 Day 1A «Late Reg. Level 9»(60 min) · Salzburg 11/21 Day 1/1A «Level 10»(60 min, «Dauer 2 Tage»). 글에 «모든 Day 1 = Level 10»이라 쓰지 마라 · 마지막 Day 1 = **11/27 20:00 Turbo(15′ 레벨)** · Day 2~Final «Registration closed»
- 영업시간(Casino Classic): «Mo, Di, Mi, Do, So 16:00 - 03:00 Uhr · Fr, Sa 16:00 - 04:00 Uhr» · «Geschlossen: 24.12.» — 대회 Day 1은 15:00 시작(영업 시작 전 시각이지만 공식 일정 그대로)
- 미발견: 대회장 내 흡연 규정 · 상금 지급 방식/세금 · 외국인 상금 원천징수 · 대리 등록

## §5 위성·예선 (마감일 = «훅이 죽는 날»)

- 축어: «Ab September 2026: Satellites und Starttage in ganz Österreich» · «Ab 16. November 2026: Satellites für die CAPT Million Side Events im Casino Baden»
- **전국 스타팅데이 (DAY 1, €500+50) — 캘린더 기준 10/3 이후 남은 것**(지난 날짜는 캘린더에서 빠진다):

| 카지노 | 날짜 (캘린더) | 스타팅데이 PDF 레벨 |
|---|---|---|
| Baden | 10/3 · 10/10 · 10/24 · 10/31 · 11/7 · 11/14 (전부 토 17:00) | 30 min |
| Seefeld | 10/11 일 15:00 «DAY 1A (30 MIN)» | 30 |
| Bregenz | 10/16 금 17:00 «Day 1A - 9 level of play on Day 1» (+10/17 토 15:00 «NLH CAPT Million Day 2 of 1A € 500 + 50») · 10/17 토 17:00 Day 1 · 🔴 사전 신청 «Turnieranmeldung: poker.bregenz@casinos.at» | 60 / 30 |
| Salzburg | 10/24 토 15:00 · 11/21 토 15:00 «Day 1/1A» (+11/22 «Day 2/1A») · 11/22 일 17:00 Day 1 | 30 / 60 / 20 ⚠ 날짜 상충 §8 |
| Velden | 11/7 토 16:00 | 30 |
| Innsbruck | 11/7 토 16:00 Day 1A (+11/8 14:00 Day 2 of Day 1) · 11/8 일 15:00 «30min» · 11/13 금 17:00 Day 1A (+11/14 Day 2) | 60 / 30 / 60 |
| Linz | 11/13 금 17:00 Day 1A (+11/14 15:00 Day 2 of 1A) · 11/14 토 17:00 Day 1 | 60 / 20 |
| Graz | 11/14 토 16:00 | 30 |
| Wien | 스타팅데이 PDF «Date still open» · 캘린더 0행 | — |

  - 이미 지난 스타팅데이(PDF): Baden 9/5·9/12·9/19·9/26 · Innsbruck 9/4
  - 2025 보도자료: «Es gab in ganz Österreich mehr als 20 Starttage vor dem großen Finale» (2025값)
- **저가 위성(캘린더, 10/2 이후)**: Baden «CAPT Million Satellite € 50 + 10» 화요일 10/6·10/20·10/27·11/3·11/10 18:00 · Salzburg 10/3 «€ 75 + 15 · 5 Tickets» · Salzburg 10/23 «Mega Satellite € 30 + 6 · 5 Tickets» · Bregenz 10/13·10/15 «NLH Bounty Satellite CAPT Million € 70 + 14 · 5 Tickets guaranteed» · Linz 11/5·11/12 «€ 25 + 5 · 2 Tickets» · Innsbruck 11/6 «€ 75 + 15» · Innsbruck 11/12 «€ 50 + 10 · 3 Tickets GTD € 550» · Salzburg 11/20 «Last Chance Satellite € 75 + 15 · 10 Tickets»
  - Linz «CAPT Million CUP» 10/15 Warm up €50+10 · 1A 10/16 · 1B 10/17 €130+20 · «€ 20.000 Garantie» (CUP와 Million 티켓 관계는 원문 미확인 → 글에 연결짓지 마라)
- **바덴 현장 위성**: §2 표(11/17 · 11/19 Mega 20 Tickets · 11/20 · 11/23 Mega 10 Tickets · 11/26 · Flip & Go 11/25·26 23:00)
- **온라인 예선(win2day 등)**: **미발견** — 대회 페이지·투어 총괄·캘린더 177행 어디에도 «win2day»·«online» 0회. 글에 온라인 예선을 쓰지 않는다.
- **훅이 죽는 날**: 바덴 외 마지막 스타팅데이 = Salzburg 11/22 17:00 · 바덴 마지막 Mega Satellite = 11/23 15:00 · 마지막 위성 = 11/26 16:00 / Flip & Go 11/26 23:00 · **마지막 Day 1 = 11/27 20:00 Turbo** · 타 카지노 티켓 구매 = «Bis 24 Stunden vor Turnier-Start»

## §6 과거 실적 (공식 원문)

- **2025** (대회 페이지 + 보도자료 2025-12-04 https://www.casinos.at/company/presse/pressemitteilungen/news-detail/2025-12-04-capt-million-2025-ein-pokerfestival-der-superlative-baden):
  - «Gesamt-Preisgeld: € 1.468.500» · «Finale Buy-ins: 2.937 (inklusive Re-Entries)» · «Finalist:innen: 254 · davon 40 Doppelqualifikationen»
  - 우승 «Stefan Eggenberger aus der Schweiz» (대회 페이지는 «Stefan E.», «Der 37-jährige Schweizer») «200.500 Euro» · 준우승 «den Ukrainer Sergii Baranov» «131.500 Euro» · «mehr als dreistündigen Heads-up»
  - «Teilnehmer:innen aus 45 Nationen» · «Das Mega Satellite mit unglaublichen 548 Entries» · «die zahlreichen Satellites ab 60 Euro» · «Mehr als 50 Poker Tische im Einsatz» · «Cash Game Angebot ab NLH 1/3 Euro, mit bis zu 15 Tischen laufend» · «Welcome Bag für alle 254 Finalist:innen» · «Poker Menü täglich»
  - 사이드 2025: High Roller «2.200 Euro Buy-in» 우승 Niko Koop (Deutschland) 28.900 Euro · Ladies «230 Euro» 우승 Sava Krink (Deutschland) 1.610 Euro · «NEU 2025: 880 Euro Pot Limit Omaha · 880 Euro Mystery Bounty · 230 Euro Mini Main Event»
  - 주최측 표현: «eines der größten und wichtigsten Pokerturniere im deutschsprachigen Raum»
- **2024** (대회 페이지): «Gesamt-Preisgeld 1.700.000 Euro» · «Teilnehmer:innen: 2.707 | Re-entries: 693 | Gesamt: 3.400» · «Doppel-Qualifikationen: 35» · «Final-Teilnehmer:innen: 307 (ohne Doppel-Qualifikation)» · 우승 «Stefan S.» «172.200 Euro» · «Gegen 4 Uhr morgens stand schließlich der Sieger fest» · 보도자료 링크 /2024-12-09-capt-million-erfolgreiche-premiere-des-groessten-pokerturniers-von-casinos-austria-baden (본문 미열람)
- 앵글: **2025는 2024보다 엔트리가 줄었다**(3.400 → 2.937, 상금 1,70M → 1,4685M). 둘 다 GTD 초과. 글에서 «매년 기록 경신»류 표현 금지.

## §7 교통·숙박 (공식 원문만)

- **숙박 할인**(대회 페이지): «Folgende Hotels in Baden bieten Gästen der CAPT Million ihre Zimmer zum ermäßigten Preis um 130 Euro für das Einzelzimmer bzw. um 180 Euro für das Doppelzimmer bei Buchung eines Zimmers direkt im Hotel unter dem Kennwort “CAPT MILLION”» (박당 여부 표기 없음 → «1박»을 붙이지 마라)
  - Hotel At the Park, Kaiser Franz Ring 5, 2500 Baden · +43 2252 44386 · office@thepark.at
  - Hotel Admiral, Renngasse 8, 2500 Baden · +43 2252 86799 · reservierung@hotel-admiral.at
  - «Weitere Übernachtungsmöglichkeiten» (keine Ermäßigung): Baden City Center Serviced Boutique Apartments · Boutique Hotel Landhaus am Kurpark · Motel Baden · Albizia Apartments
- **빈에서 오는 법**(대회 페이지 «ANREISE AUS WIEN ZUR CAPT MILLION»):
  - «Badner Bahn: Haltestelle am Josefsplatz, ca. 5 Min. zu Fuß ins Casino Baden»
  - «ÖBB Bahn: Station Baden Bahnhof, ca. 15 Min zu Fuß ins Casino Baden»
  - «Mit dem Auto: über die A2 Südautobahn, Abfahrt Baden, Parkmöglichkeit in der Casino Parkgarage (kostenpflichtig, vorbehaltlich Verfügbarkeit)»
- 카지노 연락처 페이지 FAQ(https://www.casinos.at/casinos/baden/kontakt-oeffnungszeiten): «Das Casino Baden liegt etwa 26 km südlich von Wien.» · «Mit dem Auto: ca. 30 Minuten» · «Mit der ÖBB: ab Wien Meidling ca. 11 Minuten bis Baden Bahnhof, danach ca. 15 Minuten zu Fuß» · «Mit der Badner Bahn: ab Wien Oper ca. 60 Minuten bis Josefsplatz Baden, anschließend ca. 5 Minuten zu Fuß» · «Bus Linie 303: hält direkt vor dem Casino»
- 주차 요금(같은 FAQ): 표준 «06:00 bis 18:00 Uhr: 1,10 Euro pro 30 Minuten · 18:00 bis 06:00 Uhr: 4,40 Euro pro angefangene Stunde» · 카지노 손님 할인 «12:00 bis 18:00 Uhr: 1,10 Euro pro Stunde · 18:00 bis 06:00 Uhr: 2,20 Euro pro Stunde · Maximaltarif: 9 Euro pro Spieltag» · «Eine Parkermäßigung erhältst du an der Rezeption.»
- 공식 셔틀·호텔 패키지(숙박+바이인 묶음): **미발견**
- 공항(VIE) 접근: casinos.at 원문 **미발견** → 글에 쓰지 않는다

## §8 자기모순·미발견 목록

**자기모순 / 원문 간 상충**
1. **en 대회 페이지 소제목 «SCHEDULE 2025»** 아래에 «Schedule 2026 PDF» 링크(de는 «SCHEDULE»). → 2026 PDF가 정본.
2. **레벨 «45 min.»**: 대회 페이지 Day 1 레벨 목록에 있으나 Turnierplan PDF·캘린더 Day 1 28행 어디에도 45분 Day 1 없음(실재 = 60·30·20·15). 스타팅데이 PDF의 «45 or 60 min. (2-days-event)» 규칙에만 등장. → 글에는 실제 일정의 레벨만.
3. **Salzburg 스타팅데이 날짜**: 스타팅데이 PDF «Friday, November 20 (60) · Saturday, November 21 (20)» vs 캘린더 «Sa. 21.11 15:00 Day 1/1A» + «So. 22.11 15:00 Day 2/1A» + «So. 22.11 17:00 Day 1». → 캘린더(최신·개별 페이지) 우선, 글에는 «캘린더 확인» 병기.
4. **Bregenz 11/20·11/21 스타팅데이**: 스타팅데이 PDF에만 있고 캘린더 0행 → 미확정. 글에 쓰지 않는다.
5. 스타팅데이 PDF «MORE START DAYS FROM NOVEMBER 19 AT CASINO BADEN!» vs 바덴 첫 Day 1 = **11/20**(11/19는 Mega Satellite).
6. **2025 우승 날짜**: 대회 페이지 «am 1. Dezember 2025» vs 보도자료(2025-12-04 목) «Beim Main Event am vergangenen Sonntag»(= 11/30). 2024도 «Gegen 4 Uhr morgens» 종료 → 자정 넘김 추정이나 단정 금지. 글에는 날짜 생략 또는 «2025년 11월 말~12월 1일 새벽» 수준도 쓰지 말고 «2025년 대회»로만.
7. **2025 더블 40명 표현**: 대회 페이지 «40 Doppelqualifikationen»(Day 2 기준) vs 보도자료 «40 Spieler:innen schafften es, sich mehrfach in die Preisgeldränge zu spielen». Day 2 진출 = ITM(§3)이라 실질 동일 — 숫자 40은 일치.
8. 11/23 Mega Satellite 상세가 «und offizieller Start der CAPT Million 2026»(11/19 문구 복사) — 공식 개막은 11/19(대회 페이지).
9. Day 1 상세 «Dauer»: 11/21 «5 Tage» vs 다른 Day 1 «4 Tage» — 의미 불명, 글에 쓰지 않는다.
10. Final Day 레벨: 대회 페이지 «60 und 90 min.» vs 상세 «90 min» → 글은 «60/90분».
12. (검증 10-02 추가) **11/23 Mega Satellite 레지 마감**: PDF «10 Level» · 상세 구조표 L10 뒤 «End of Registration - Break» vs 상세 헤더 «Late Reg. Level 12». 11/19 Mega는 세 곳 모두 Level 12로 일치. → 11/23 레벨은 글에 쓰지 않는다.
13. (검증 10-02 추가) **€50+10 위성(11/17·11/20·11/26) 레지 마감**: PDF·상세 헤더 «Level 8» vs 상세 구조표 L5 뒤 «End of Registration - Break». → 위성 마감 레벨은 글에 쓰지 않는다.
14. (검증 10-02) Spielordnung PDF는 조항을 «§»가 아니라 «1.»·«4.»·«8. b)» 번호로 매긴다(PDF 안 «§»는 Waffengesetz 인용뿐). 이 시트의 «§1·§4·§8b·§8c»는 시트 내부 약칭 — 글에서 인용하면 «Punkt 1» 식으로.
15. (보강) 2025 보도자료 말미 «CAPT Million 2026 von 19. bis 30.11. 2026» — §1 날짜의 두 번째 공식 출처.
16. (보강) Flip & Go 규칙(https://www.casinos.at/events/poker-kalender/detail/2026-11-25-flip-go-baden): «Jeweils 11 Spieler … lediglich eine einzige(!) Pokerhand … jeder Teilnehmer 3 Karten ausgeteilt … eine Karte ablegen» · 동점은 «ein weiterer Flip».
11. (참고·레포) `docs/dach-tournaments-2026.md` CAPT Bregenz «15.-25.10.2026» vs 현재 투어 총괄 «CAPT BREGENZ 13.-25.10.2026» — 이 글 범위 밖, 기록만.

**미발견 (글에 쓰지 않는다)**
- 온라인 예선(win2day 등) · 공식 셔틀 · 호텔+바이인 패키지 · 공항 접근 · 2026 사이드 이벤트 개런티(HR·PLO·Mystery Bounty 전부 «Garantie» 표기 없음) · Mystery Bounty 바운티 분포 · 상금 지급 방식·세금 · 흡연 규정 · Wien 스타팅데이 날짜 · Day 2 이후 구조표(Day 2 L1 = 10,000/5,000/10,000만 확인) · 2024 보도자료 본문 · Linz «CAPT Million CUP»과 Million 티켓의 관계 · 상세 구조 «Turnierdetails und Strukturen (in Kürze verfügbar)»는 Day 1 구조표만 공개
