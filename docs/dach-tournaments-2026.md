# DACH 대회 2026 — 1차 출처 검증본 (확인일 2026-08-10)

> `docs/tournament-spine.md`의 DACH 분파. **여기 값은 공식 페이지 원문에서 직접 추출했다.**
> 열거·개수는 Playwright `browser_evaluate` DOM 스크레이프 또는 curl 원본/PDF 파싱으로 **직접 셌다**(§12-B).
> 등급: ✅ 공식 축어 / ⚠ 2차 출처 또는 공식 내부 모순 / ❓ 미확인.
> ⚠ **방법론 고지**: `casinos.at`이 이 환경에서 HTTP 403이라 CAPT 값은 **텍스트 추출 프록시 경유로 얻은 공식 원문**이다.

---

## 0. 🔴 가장 중요한 결론 — 독일 안에는 큰 페스티벌이 없다

- **Spielbank Berlin** Summer Cup은 2026-07-06~07-12로 **이미 종료** ✅. Triple A 2026판은 **미공고** ❓.
- **Casino Schenefeld**(운영사 공식 도메인이 `casino-sh.de`로 바뀌었다 — `casino-schenefeld.de`는 SSL 실패)는
  6개월 창 전수 조회 결과 **다일간 시리즈 0건** ✅. 주간 상시 토너먼트만 있다(화 €110 · 일 €220).
- **Spielbank Hamburg**(Casino Esplanade)는 페이지 전체에 `Turnier`·`Festival`·`Series`가 **0회** — 캐시게임 전용 ✅.
- **German Poker Tour(germanpokertours.de)는 주최사가 아니라 여행 패키지 사업자**다 ✅.
  2026년 15건 전부 King's(체코)행이고 독일 개최분은 0건.
  🔴 **이 사이트 날짜는 «패키지 여행 기간»이라 대회 기간과 다르다**(예: Mystery Bounty 03/09~07/09 vs 공식 09-01~09-06).
  일정표에 옮겨 적으면 틀린다.

→ **「독일 브랜드」 대회는 전부 체코 King's에서 열린다.** `/de/tournaments`의 FAQ 프레임
(「독일엔 없다 → 국경 넘어 어디로」)이 이 실측과 정확히 맞는다.

---

## 1. King's Resort Rozvadov (CZ) — 전 항목 ✅ 공식 DOM 직접 추출

베뉴: King's Resort Rozvadov · Rozvadov 7, 348 06 Rozvadov · 국가 **CZ** · 공식 https://kings-resort.com/poker

### 독일 브랜드 5종 (일정표 우선 편입 대상)

| 대회 | 기간 | 메인 바이인 | 최저 | 개런티 | 이벤트 |
|---|---|---|---|---|---:|
| **GPT German Poker Tour** | 2026-09-01 ~ 09-06 | €140 + €50 Bounty | €25 | €300.000 | 22 |
| **German Poker Days "Mystery Bounty"** | 2026-10-07 ~ 10-11 | €124 + €75 Bounty | €35 | €300.000 | 18 |
| **German Poker Masters €1MILLION** | 2026-11-20 ~ 11-30 | €285 | €35 | €1.000.000 | 49 |
| **German Poker Days** | 2026-12-02 ~ 12-06 | €199 | €35 | €400.000(페스티벌) | 19 |
| **King's Million European Poker Championship** | 2026-09-16 ~ 10-06 | Super ME €1150 / Mini ME €250 | €40 | €10.000.000 | 118 |

축어(캘린더 카드 DOM):
> "Guarantee €300.000 1. 9. 2026 - 6. 9. 2026 GPT German Poker Tour"
> "Guarantee €1.000.000 20. 11. 2026 - 30. 11. 2026 German Poker Masters €1MILLION"
> "Festival Guarantee €10.000.000 16. 9. 2026 - 6. 10. 2026 King's Million European Poker Championship"

🔴 **함정 3가지**
1. 10월분 정식명은 **German Poker Days "Mystery Bounty"** — 12월분과 이름이 다르다.
2. 12월 German Poker Days는 **페스티벌 €400.000 / 메인이벤트 자체는 €300.000** — 혼동 주의.
3. KM EPC 플래그십은 **Super Main Event €1150 / €5.000.000 GTD**(Day 1A 09-30)이고 Mini ME(€250)와 별개다.

### 같은 페이지의 나머지 2026 페스티벌 ✅ (확장 여유분)
Dutch Classics 08-10~08-17 €400k · IPS Summer 08-18~09-01 €1.5M · Ola Poker Tour 09-09~09-14 €500k ·
Dutch Poker Masters 10-14~10-19 €500k · Balkan Poker Circuit 10-19~10-26 €1M · WOLF Millionaire 11-11~11-15 €1M ·
Pirates Poker Treasure "Xmas Mystery Bounty" 12-14~12-21 €1M · Czech Poker Master "Christmas Edition" 12-21~12-28 €400k

---

## 2. CAPT (Casinos Austria Poker Tour) 2026 — 🔴 사전 정보에 오류 3건

공식 https://www.casinos.at/spiel/poker/capt

### 잔여 5개 스톱 (직접 계수) ✅

| 스톱 | 기간 | 베뉴 | 메인 바이인 |
|---|---|---|---|
| **CAPT Graz** | 2026-09-22 ~ 09-27 | Casino Graz, Landhausgasse 10, 8010 Graz | €500 + 50 |
| **CAPT Seefeld** | 2026-10-07 ~ 10-11 | Casino Seefeld | €1.000 + 100 |
| **CAPT Bregenz** | 2026-10-15 ~ 10-25 ⚠ | Casino Bregenz | €1.100 |
| **CAPT Innsbruck** | 2026-11-02 ~ 11-08 | Casino Innsbruck | €1.000 + 100 |
| **CAPT Million Baden** | 2026-11-19 ~ 11-30 | Casino Baden(빈 근교) | €500 + 50 · €1.000.000 GTD |

축어: "### CAPT GRAZ 22.-27.9.2026" · "### CAPT SEEFELD 7.-11.10.2026" · "### CAPT BREGENZ 15.-25.10.2026" ·
"### CAPT INNSBRUCK 2.-8.11.2026" · "### CAPT MILLION BADEN 19.-30.11.2026"
(보너스: "### CAPT SEEFELD 11.–24.1.2027")

### 🔴 정정 3건 — 사전 정보를 그대로 썼다면 전부 틀렸다

1. **「10개 스테이션」이 아니다.** 공식에 **CAPT Innsbruck 11월**이 있는데 사전 목록엔 없다(3월 인스브루크와 별개).
   > "Von 2. bis 8. November 2026 steht die nächste Ausgabe auf dem Programm – diesmal mit einem Main Event Buy-in von 1.100 Euro."
2. **Seefeld 10월 날짜가 나흘 틀렸다.** 2차(hochgepokert)는 "1.–11. Oktober", **공식은 7.-11.10.**
3. 🔴 **「바이인 €550 전 스톱 공통」이 아니다.** 후반 3개 스톱은 **€1.100**이다.
   €500+50이 확인된 곳은 **Graz와 CAPT Million뿐**.
   > 브레겐츠: "Es erwarten dich das **€ 1.100 Main Event**" · 제펠트: "Buy-in € 1.000 + 100"

### ⚠ 공식 내부 모순 1건 — 브레겐츠 10월
개요 "15.-25.10.2026" vs 상세 "13. bis 25. Oktober". 같은 상세가 "**elf Tage**"라 적는데
15→25일이 정확히 11일이다 → **15.-25.10 채택**, 13일은 새틀라이트 주간 포함으로 추정. **단정은 피할 것.**

### ⚠ 상반기(2~6월) — 공식에서 삭제됨, 2차만 존재하고 서로 상충
Salzburg 10.–19.4.(hochgepokert) vs **13.–19.4.**(pokerexklusiv, 상세 일정표 첨부 → 우세) ·
Bregenz I **28.5.–7.6.**(hochgepokert·pokerfirma·공식 title 일치 → 우세) vs 26.5.(pokerexklusiv).
나머지(Seefeld 2.–15.2. / Innsbruck 4.–15.3. / Linz 17.–22.3. / Velden 19.–24.5.)는 **단일 2차 출처뿐** ⚠.

---

## 3. 스위스 ✅

### 🔴 Grand Casino Baden — 포커 전면 중단 중. **일정표에 넣으면 오류다**
> "**Pokerstopp** Unser beliebtes Pokerturnier sowie die Cash Games fanden am **31. Mai 2026 zum letzten Mal** statt."
> "Während der laufenden Umbauarbeiten werden vorübergehend keine Turniere angeboten."
— https://www.grandcasinobaden.ch/ueber-grand-casino-baden/umbau
- Swiss Poker Champions Week 2026(01-23~01-31)은 **종료** ✅. ME 2500.- / 최저 280.-
  ❓ 페이지에 "CHF"·"Franken" 문자열이 **0회**(금액이 `2500.-` 형식) — 통화 축어 근거 없음.
- ⚠ **오스트리아 Baden(CAPT Million)과 다른 도시** — 여기는 "Haselstrasse 2, CH-5400 Baden, Schweiz".

### Grand Casino Luzern — Poker Circle Swiss Masters (PCSM) Season 01 2026 ✅
베뉴: Grand Casino Luzern AG, Haldenstrasse 6, CH-6006 Luzern · **CH** · "Die Serie umfasst **sieben Stops** ab dem 25. März 2026."

| 대회 | 기간 | 메인 바이인 |
|---|---|---|
| 40. Poker Circle Swiss Open | 2026-09-30 ~ 10-04 | ❓ 미발행 |
| Poker Circle Autumn Special | 2026-11-26 ~ 11-29 | ❓ |
| **PCSM Championship Week** | 2026-12-16 ~ 12-20 | **CHF 800 + 80** ✅ |

> "Die Championship Week ist das Saisonhighlight im Dezember mit einem Main Event (**CHF 800 + 80 Buy-in**)"
> "Das Gesamtpreisgeld aller Main Events 2026 wird voraussichtlich über **CHF 1.5 Millionen** liegen."

⚠ 공식 내부 명칭 모순: 8/5~9 대회를 PCSM 페이지는 "Summer Special·4번째 스톱", 로드맵·캘린더 PDF는 **"39. PCSO"**.
날짜는 3중 확인으로 확실, **명칭만 상충** → PDF 기준 채택 권장.

---

## 4. 독일 상시 토너먼트 (페스티벌 아님 — 일정표엔 안 넣지만 글에는 쓸 수 있다)

- **Spielbank Berlin**(Casino am Potsdamer Platz, Marlene-Dietrich-Platz 1, 10785 Berlin) 상시 ✅ (2026-06-01 시행)
  월 Survivor €85+15 · 화 Early Bird **€70+10(최저)** · 수 4 Card PLO €85+15 · 목 One Re-Entry €105+15 ·
  금 Freeze-Out €150+20 · 토 Bounty Hunter €200+20 · 일 Rapid Deep €85+15
- **Casino Schenefeld**(Industriestr. 1, 22869 Schenefeld) ✅ 화 Double Chance €110 · 일 Sunday Monster Stack €220
  ⚠ "Während der Bauphase stehen mittwochs maximal fünf Cashgame-Tische zur Verfügung" — 증축 공사 중

---

## 5. ❓ 미확인 (쓰지 말 것 / 재확인 필요)

CAPT 상반기 6개 스톱 공식값 · CAPT 연간 총 스톱 수 · Seefeld/Bregenz/Innsbruck 최저 바이인·이벤트 수(PDF 403) ·
CAPT Bregenz II 정확한 시작일(공식 자체 모순) · CAPT Graz ME 개런티 · Spielbank Berlin Triple A 2026(미공고) ·
Nordic Poker Festival 2026(2025년판만 존재) · Schenefeld 2026-08-30 이후(운영사가 3주치만 공개) ·
Baden 포커 재개 시점 · Baden 금액의 CHF 표기 · PCSM 개별 스톱 바이인(월별 PDF는 당월분만) ·
PCSM Championship Week 사이드이벤트("rechtzeitig veröffentlicht") · swisspokertour.ch(연결 실패)
