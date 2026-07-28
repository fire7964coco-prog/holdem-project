# 대회 스파인 (Tournament Spine) — 축 A 산출물

> **정본은 `lib/tournaments.ts`.** 이 문서는 그 각 값의 **출처·실측일·등급**을 기록하는 감사 추적이다.
> 값이 의심되면 코드가 아니라 **여기 적힌 URL을 다시 열어라.** "처음부터 다시 서치"는 하지 않는다.
>
> 최초 작성: 2026-07-28 (축 A 1차)
> 작업 규칙: `.cursor/rules/posting.mdc` §13 + 이 프로젝트의 출처 티어 정책

---

## 0. 출처 등급 (수록 게이트)

수록 여부를 **출처가 결정한다.** 규모가 커도 등급이 안 되면 넣지 않는다.

| 등급 | 정의 | 처리 |
|---|---|---|
| **S** | 그 대회 **전용 공식 페이지 + 일정** 실존 | 무조건 수록 |
| **A** | 투어 공식 사이트에 일정이 있음 (개별 대회 페이지는 없어도) | 수록 |
| **B** | 공식 없음 + **취재매체 2건 이상** | 수록, "매체 확인" 표시 |
| **C** | 매체 1건 또는 Hendon Mob 결과만 | **보류** — 페이지 노출 안 함 |
| **D** | 커뮤니티·SNS만 | **미수록** |

> **왜 이 게이트인가**: 검수할 때마다 값이 바뀌는 가장 큰 원인이 "공식 사이트가 없어서 매번 다른 2차 출처를 긁는 것"이기 때문. 등급이 낮으면 애초에 넣지 않는 것이 유지보수 비용을 없애는 유일한 방법이다.

**규모 티어(1/2/3)와 출처 등급(S~D)은 독립 축이다.** 1티어는 대개 S/A지만, 2티어 지역 메이저는 B가 나올 수 있다.

---

## 1. ★ 이번 서치로 발견한 것 (기존 페이지에 없던 것)

`app/tournaments/tournaments-client.tsx`의 `SCHEDULE_2026` 25개와 대조한 결과.

### 1-1. 한국 대회인데 누락돼 있던 것 ★★

| 대회 | 날짜 | 베뉴 | 왜 중요한가 |
|---|---|---|---|
| **WPT Seoul** | **2026.10.30~11.09** | **INSPIRE 엔터테인먼트 리조트 (영종도)**, YY Poker Club 운영 | WPT 정규 투어의 **한국 데뷔**. 메인이벤트 GTD **10억원**. 70테이블 + 라이브스트림 스튜디오 신설 |
| **Triton 제주 II** | **2026.09.04~09.17** | 제주 LES A Casino | 2026년 Triton 3번째 스톱. 페이지엔 3월 제주만 있음 |

**WPT Seoul 상세**
- 46개 이벤트 / 11일
- 메인이벤트: 11월 5일 개시 → 11월 9일 파이널 테이블
- 메인이벤트 바이인 **KRW 1,750,000** (약 $1,185)
- 메인이벤트 개런티 **KRW 1,000,000,000**
- 전체 바이인 범위 KRW 300,000 ~ 8,000,000 (약 $203~$5,415)

**Triton 제주 II 상세**
- 14개 하이롤러 토너먼트, 바이인 $25,000~$150,000
- Hendon Mob 등록명: "Triton Poker Super High Roller Series Jeju II by WPT Global"

### 1-2. 기존 항목의 값이 틀렸거나 미확정이던 것

| 항목 | 페이지 현재값 | 실측값 | 조치 |
|---|---|---|---|
| **APT 챔피언십 2026** | `2026.11.12~11.29` | **11.13~11.29** | 오늘 포스트에선 이미 정정됨 → **페이지↔포스트 드리프트 살아 있음** |
| **WPT 월드 챔피언십** | `2026.12 예정 (미발표)` / `$10,400 예상` | **2026.12.02~12.22**, Wynn Las Vegas (Encore 측) | 실제 날짜 확보 → "예상" 제거 |
| **EPT 바르셀로나** | `2026.08.16~08.29` | 08.16~08.29 ✅ 일치 | ME는 **8/22 개시**, PokerStars Open ME(€1,650)가 8/16~22 선행 = **듀얼 페스티벌** |
| WSOP 2026 | `05.26~08.05 (ME 파이널 8/3~5)` | ✅ 정확 | 다만 브레이슬릿은 **7/15 종료**, 8/3~5는 ME 파이널만 |

### 1-3. 다국어 척추로서 치명적인 공백

**현 목록은 완전히 한국 중심이라 KO엔 맞지만 다국어 페이지로는 못 쓴다.**

| 로케일 | 현재 목록의 해당 대회 | 판정 |
|---|---|---|
| `ja` | **0개** | JOPT 전량 누락 |
| `es` | **0개** | LatAm 전량 누락 |
| `zh-hant` | APT Taipei, GOP Taipei 2개 | 대만 국내 시리즈(WPG·TMT) 누락 |

---

## 2. 검증된 대회 목록

**실측일: 2026-07-28** (별도 표기 없으면 전부)

### 2-1. 한국 🇰🇷

| 대회 | 날짜 | 베뉴 | 등급 | 출처 |
|---|---|---|---|---|
| APT 제주 클래식 2026 | 01.30~02.08 | 제주 신화월드 LES A | S | [apt 공식](https://www.theasianpokertour.com/series/apt-jeju-classic-south-korea-2026) |
| Triton 제주 I (ONE + SHR) | 03.05~04.01 | 제주 LES A | S | [triton 공식](https://tritonpokerseries.com/en-US/news/full-schedule-details-for-triton-one-and-super-high-roller-series-in-jeju-in-march) |
| APT 인천 2026 | 08.07~08.16 | 인천 파라다이스시티 | S | [apt 공식](https://www.theasianpokertour.com/series/apt-incheon-south-korea-2026) |
| **Triton 제주 II** | **09.04~09.17** | 제주 LES A | S | [triton 공식](https://tritonpokerseries.com/en-US/news/triton-poker-announces-super-high-roller-stops-in-jeju-and-montenegro-for-2026;-triton-one-to-return) + [PokerNews](https://www.pokernews.com/news/2026/07/triton-poker-jeju-2026-full-schedule-announced-51914.htm) |
| APPT 코리아 2026 | 09.03~09.14 | 인천 파라다이스시티 | S | [pokerstarslive 공식](https://www.pokerstarslive.com/appt/korea/) |
| APT 제주 2026 가을 | 09.25~10.07 | 제주 신화월드 | S | apt 공식 |
| **WPT Seoul** | **10.30~11.09** | **INSPIRE (영종도)** | S | [WPT 공식](https://www.worldpokertour.com/article/world-poker-tour-makes-historic-debut-at-inspire-entertainment-resort-for-wpt-seoul) + [AGB](https://agbrief.com/news/south-korea/21/07/2026/inspire-to-open-70-table-poker-room-alongside-wpt-seoul/) + [GGRAsia](https://www.ggrasia.com/inspire-resort-to-launch-new-entertainment-space-host-wpt-seoul-poker-event-in-october) + [ASGAM](https://asgam.com/2026/07/21/koreas-inspire-to-launch-new-70-table-poker-room-host-wpt-seoul-poker-series/) |
| GOP Incheon II | 10.30~11.08 | 인천 파라다이스시티 | B | godsofpoker.com (개별 페이지 없음 → 확인 필요) |
| GOP Jeju | 12.04~12.13 | 제주 신화월드 LES A | B | 동일 |

> ⚠️ **WPT Seoul과 GOP Incheon II가 날짜 거의 완전 겹침** (10.30~11.09 vs 10.30~11.08). 베뉴는 다름(INSPIRE vs 파라다이스시티). 둘 다 실재하는지 **재확인 필요** — GOP 쪽이 B등급이라 더 의심스럽다.

### 2-2. 대만 🇹🇼 (zh-hant 핵심)

| 대회 | 날짜 | 베뉴 | 등급 | 비고 |
|---|---|---|---|---|
| GOP Taipei "The Titan Assembly" | 01.08~01.18 | CTP Asia Poker Arena | B | Cronus 스트럭처 |
| APT Taipei 2026 | 04.22~05.03 | Red Space | S | |
| **WPG Taiwan (World Poker Games)** | **05.23~05.31** | CTP Asia Poker Arena | B | 58개 토너먼트, 총 GTD **24,000,000 TWD**, ME 바이인 22,000 TWD / GTD 10,000,000 TWD, Mystery Bounty GTD 2,500,000 TWD |
| **TMT 20 (Taiwan Millions)** | **07.08~08.03** | CTP Asia Poker Arena | B | 총 GTD $3,000,000, ME $2M — **현재 진행 중** |
| GOP Taipei II | 09.18~09.27 | | B | |
| APT 챔피언십 2026 | **11.13~11.29** | Red Space | S | 시즌 피날레 |

베뉴: CTP Asia Poker Arena(華人德州撲克競技) — asiapokerarena.com / ctpclub.com

### 2-3. 일본 🇯🇵 (ja 핵심)

| 대회 | 날짜 | 등급 | 비고 |
|---|---|---|---|
| JOPT 2026 Tokyo #02 | 07.16~07.20 | B | 총액 1억엔 |
| JOPT 2026 Fukuoka #01 | 07.30~08.02 | B | |
| JOPT 2026 Sapporo #02 | 09.20~09.22 | B | |
| JOPT 2026 Tokyo #03 | 10.16~10.18 | B | |
| JOPT Tokyo Grand Final | 날짜 미확인 | — | 전용 사이트 존재: schedule26gf.japanopenpoker.com |
| ~~WPT Tokyo 2026~~ | **미발표** | **C → 미수록** | 3년 연속 12월 개최·도쿄국제포럼·ME 12만엔은 전부 **예상치**. 공식 발표 없음 |

공식: [japanopenpoker.com](https://japanopenpoker.com/)

### 2-4. 필리핀 🇵🇭

| 대회 | 날짜 | 베뉴 | 등급 |
|---|---|---|---|
| Manila Megastack 24 | 02.25~03.09 | Okada Manila | B |
| PokerStars Live Manila Special | 06.15~06.21 | Okada Manila | S — ₱7M+ GTD, ME ₱3M GTD / ₱7,500 바이인 |
| **APPT Manila** | **07.28~08.10** | Okada Manila | S — **₱132,000,000 GTD**, 오늘 개막 |

### 2-5. 유럽 🇪🇺

| 대회 | 날짜 | 장소 | 등급 |
|---|---|---|---|
| EPT 파리 | 02.18~03.01 | 프랑스 파리 | S |
| WSOP Europe | 03.31~04.10 | 체코 King's Resort, Rozvadov | S |
| EPT 몬테카를로 | 04.30~05.10 | 모나코 | S |
| PokerStars Open Málaga | 06.22~06.28 | 스페인 말라가 | S |
| **EPT 바르셀로나** | 08.16~08.29 | Casino Barcelona | S — ME €5,300 (8/22 개시), PokerStars Open ME €1,650 (8/16~22) |
| BPC Megastack | 09.17~09.27 | 벨기에 | S |
| PokerStars Open Aix-en-Provence | 11.02~11.08 | 프랑스 | S |
| EPT 프라하 | 12.02~12.13 | 체코 프라하 | S |

출처: [pokerstarslive.com](https://www.pokerstarslive.com/es-419/) 공식 캘린더 + [CardPlayer](https://www.cardplayer.com/poker-tournaments/1657089-2026-ept-barcelona)

### 2-6. 키프로스 🇨🇾 (Merit)

| 대회 | 날짜 | 등급 | 비고 |
|---|---|---|---|
| Onyx High Roller Series | 01.30~02.12 | B | |
| EAPT Cyprus | 03.08~03.15 | B | $1.5M GTD |
| **NOIR POKER SERIES** | **07.27~08.06** | B | **$6,000,000+ GTD** — 현재 진행 중 |
| Triton One Northern Cyprus | 11.04~11.15 | S | triton 공식 |
| ~~WSOP Super Circuit Cyprus~~ | ~~04.25~05.11~~ | **취소** | 지역 정세 사유. **절대 목록에 넣지 말 것** |

베뉴: Merit Royal Diamond / Merit Crystal Cove, Kyrenia — [meritpoker.com](https://meritpoker.com/tournaments/)

### 2-7. 미국 🇺🇸

| 대회 | 날짜 | 장소 | 등급 |
|---|---|---|---|
| **WSOP 2026 (제57회)** | 05.26~07.15 (브레이슬릿) / **ME 파이널 08.03~08.05** | Paris & Horseshoe Las Vegas | S |
| WPT Venetian Spring | 02.09~02.24 | 라스베이거스 | A |
| WPT Rolling Thunder | 03.16~04.01 | 북부 캘리포니아 | A |
| Maryland State Poker Championship | 08.26~09.07 | 메릴랜드 | S |
| WSOP Circuit Las Vegas (post-WSOP) | 여름 | 라스베이거스 | A — 18 rings, $1,700 ME |
| **WPT 월드 챔피언십** | **12.02~12.22** | Wynn Las Vegas (Encore) | S |
| WSOP Paradise | 12.01~12.18 | 바하마 나소 Baha Mar | S |

**WSOP 2026 메인이벤트 확정 데이터** ★
- **November Nine 부활** — 2016년 이후 처음. 파이널 9명은 **7월 13일 확정**, 파이널 테이블은 **20일 뒤인 8월 3~5일**. ESPN 라이브 피날레용
- 엔트리 **9,208** (역대 4위)
- 상금풀 **$85,634,400**
- 우승 상금 **$10,000,000**
- 파이널 9명 **전원 $1,000,000 이상 보장**
- 출처: [WSOP 공식](https://www.wsop.com/news/the-2026-world-series-of-poker-main-event-reaches-it-s-final-table/)

> ⚠️ 우리 `wsop-2026-tournament-guide` 포스트에 **상금풀 $85,634,400 / 우승 $10,000,000**이 반영돼 있는지 확인 필요.

### 2-8. WSOP Circuit 국제 스톱

2026년부터 **캘린더-이어 포맷**으로 전환 (1~12월). 상반기 = US 18스톱 + 국제 6스톱. 하반기는 2026년 5월 발표.

| 스톱 | 날짜 | 장소 | 등급 |
|---|---|---|---|
| Rozvadov | 01.01~01.13 | 체코 King's Resort | A |
| Liechtenstein | 02~03월 | Grand Casino Gamprin | A |
| Playground | 03.23~04.07 | 캐나다 퀘벡 Kahnawake | A |
| Casino Partouche | 04.10~04.21 | 프랑스 | A |
| **Baltics** | **07.24~08.02** | 에스토니아 탈린 Olympic Park Casino | A |
| **WSOPC México** | **08.31~09.11** | **Barceló México Santa Fe** | A — ★es 관련 |
| **WSOPC Sanremo** | **11.20~11.30** | 이탈리아 Casino Sanremo | A |

모로코 스톱도 언급됨 — 날짜 미확인. 유럽만 7개 목적지(7월 말~11월 말).
출처: [WSOP 공식](https://www.wsop.com/news/wsop-circuit-announces-2026-season-with-shift-to-calendar-year-format/)

### 2-9. 캄보디아 🇰🇭

| 대회 | 날짜 | 베뉴 | 등급 |
|---|---|---|---|
| WPT Cambodia | 01.21~02.03 | NagaWorld | A |
| WPT Cambodia — Passport to the World Championship | 08.12~08.24 | NagaWorld | A |

### 2-10. 라틴아메리카 🌎 (es 핵심 — **취약**)

**★★ 가장 중요한 발견: LAPT는 사실상 휴면 상태다.**

PokerStars Live 공식 LatAm 페이지(`pokerstarslive.com/es-419/`)를 직접 열어 확인한 결과, **LAPT 스톱이 날짜와 함께 표기된 것이 하나도 없다.** 게시된 건 전부 유럽·미국 이벤트(Málaga, Barcelona, Maryland, 벨기에, Aix, Prague)다.

→ **es 로케일 페이지를 LAPT로 채우려던 계획은 불가능하다.** 대안 필요.

| 대회 | 날짜 | 장소 | 등급 |
|---|---|---|---|
| **BSOP 2026** (브라질, 20주년, 6개 etapa) | | | B |
| ├ BSOP Summer Millions | 01.23~01.31 | Costa do Sauípe, Bahia | B |
| ├ BSOP São Paulo | 03.18~03.25 | WTC Sheraton, SP | B |
| ├ BSOP Rio Quente | 04.30~05.05 | Rio Quente, Goiás | B |
| ├ BSOP Winter Millions | 07.21~07.31 | Golden Hall, WTC Sheraton, SP | B |
| ├ 5차전 | 10.08~10.13 | **장소 미정** | C |
| └ BSOP Millions | 11.13~11.28 | WTC Sheraton, SP | B |
| **WSOPC México** | 08.31~09.11 | Barceló México Santa Fe | A |
| CAP (Circuito Argentino de Poker) 5차 | 08.19~08.24 | Santa Rosa, La Pampa | C — 보류 |
| KSOP (Kings Series of Poker) | 날짜 미확인 | 브라질 발 → 콜롬비아·아르헨티나 | C — 보류 |

공식: [bsop.com.br](https://bsop.com.br/bsop-divulga-calendario-da-temporada-2026-do-campeonato-brasileiro-de-poker/)

> **es 전략 함의**: 스페인어권에 붙일 수 있는 S/A급 대회는 **WSOPC México(08.31~09.11)**, **PokerStars Open Málaga**, **EPT Barcelona** 정도다. BSOP는 브라질=포르투갈어라 `pt`용이지 `es`용이 아니다.
> → **es 페이지는 "우리 지역 대회 목록"이 아니라 "여기서 갈 수 있는 세계 대회"로 프레이밍해야 한다.** 이건 `docs/local-voice/es-latam.md`의 "합법성=winnable" 축과도 일치한다.

---

## 2-11. 추가 확보분 (2차 검증 라운드)

### APT 인천 2026 — APT 공식 프리뷰 원문 대조 ✅

[APT 공식 프리뷰](https://www.theasianpokertour.com/news/apt-incheon-2026-the-preview) 원문 직접 확인.

| 항목 | 공식 값 |
|---|---|
| 페스티벌 총 개런티 | **"over KRW 4 billion (~USD 2.7 million)"** |
| 메인이벤트 개런티 | **"KRW 1.5 billion (~USD 1 million)"** |
| 메인이벤트 일정 | **"Sunday, August 9 to Saturday, August 15"** |
| 메인이벤트 바이인 | **"KRW 2.5M (~USD 1,700)"** |
| APTC 시트 | **9석** |
| APT Super High Roller | KRW 15M (~USD 10,200) |
| APT High Roller | KRW 5M (~USD 3,400) |

**APTC 시트를 주는 이벤트 7개 (공식 명시)**
APT Main Event(상위 3명) / APT Super High Roller / APT High Roller / Superstar Challenge / **High Roller – Ultra Stack** / Mini Main Event / Zodiac Classic (Natural8 후원)

> ★★ **오늘 고친 Ultra Stack 건이 공식으로 확증됐다.** 공식이 시트 부여 이벤트로 명시한 것은 `High Roller - Ultra Stack`이지 이름만 비슷한 `Ultra Stack`(#90, 70만원)이 아니다.
>
> ★ **"총 38억"은 오류였다.** 저품질 집계 사이트 1건에만 있던 값이고 공식은 **40억원 이상**이다. 우리 포스트는 "100개가 넘는 토너먼트에 총 40억원"으로 이미 정확했다. **출처 게이트가 바로 작동한 사례.**

### 우리 포스트 정확성 대조 결과

| 포스트 | 대조 항목 | 결과 |
|---|---|---|
| `wsop-2026-tournament-guide` | 9,208 엔트리 / 상금풀 $85,634,400 / 우승 $10,000,000 / 111개국 | ✅ 전부 반영됨 |
| `apt-incheon-2026-guide` | 총 40억 / ME 8월 9~15일 / 바이인 ~$1,700 / Ultra Stack 구분 | ✅ 전부 일치 |

### 신규 확보 대회

| 대회 | 날짜 | 장소 | 등급 | 상세 |
|---|---|---|---|---|
| **WPT Lucky Hearts Poker Open** | 01.06~01.20 | **미국 플로리다** Seminole Hard Rock Hollywood | S | Championship 01.16~20, 바이인 $3,500 / GTD $3M. **호주가 아니라 플로리다다** |
| **APT 챔피언십 타이베이 2026** | 11.13~11.29 | 대만 Red Space | S | **210개 이벤트 / $8M+ GTD** |
| **partypoker Tour 2026** | 1월 말~연말, 10개 스톱 | **스페인 + 영국 전용** | B | Sheffield → **Sevilla → Madrid** → Manchester. ME £500 / Championship £150 / HR £1,000 / PLO Masters £250. 온라인 퀄리파이어 2,000명 파견 |

> **es 함의**: partypoker Tour의 **세비야·마드리드** 스톱은 스페인 거주 독자에게 실질적인 저바이인(£500) 경로다. LAPT 공백을 일부 메운다.

---

## 3. 미해결 / 다음 서치 대상

| # | 항목 | 상태 |
|---|---|---|
| 1 | **WSOP 2027 일정** | ❌ 미발표 확인. 2026 종료 후 재검색 |
| 2 | **EPT 2027 시즌** | ❌ 미발표. €100,000 프리롤이 "2027 첫 스톱"에서 열린다는 언급만 |
| 3 | **APT 2027** | ❌ 미발표. 대개 3~6개월 전 공개 |
| 4 | **WPT Seoul ↔ GOP Incheon II 날짜 충돌** | ⏳ 둘 다 실재하는지 미확인 (10.30~11.09 vs 10.30~11.08) |
| 5 | ~~APT 인천 총 38억~~ | ✅ **해결 — 40억+가 정답. 38억은 오류** |
| 6 | ~~WPT Lucky Hearts~~ | ✅ **해결 — 플로리다, 01.06~01.20** |
| 7 | **WPT Australia** | ⏳ 스톱 목록엔 있으나 날짜 미확보 |
| 8 | JOPT Grand Final 날짜 | ⏳ 전용 사이트 존재 (schedule26gf.japanopenpoker.com) |
| 9 | WSOPC 모로코·아프리카 스톱 | ⏳ |
| 10 | ~~partypoker~~ | ✅ **해결 — Tour 2026, 스페인+영국 10스톱** |
| 11 | 베트남 (WPT Vietnam?) | ⏳ 미검색 |
| 12 | 한국 국내 하반기 (KPC 등) | ⏳ 신뢰 출처 못 찾음. 포커고수·포커라이프 재검색 필요 |
| 13 | **GOP(Gods of Poker) 시리즈 전반** | ⏳ 전 스톱이 B등급. 개별 대회 페이지가 없어 `/series` 일반 링크만 존재 → **등급 재판정 필요** |

---

## 4. 갱신 규칙

1. **대회를 추가할 때 그 대회 종료일 루틴도 같이 만든다.** 유지 못 할 것 같으면 발행하지 않는다
2. 값을 고칠 때 이 문서의 **실측일도 같이 갱신**한다
3. 취소된 대회(WSOP Super Circuit Cyprus)는 **삭제하지 말고 취소 표시로 남긴다** — 다시 조사하는 낭비를 막기 위해
4. 미발표(WPT Tokyo 등)는 **C등급으로 남겨두고 페이지엔 노출하지 않는다.** "예상" 값을 페이지에 올리면 그게 곧 검수 때마다 흔들리는 원인이 된다
