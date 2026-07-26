# 미국 포커 1차 출처 은행 (언어 중립 · es/en 공용)

> 2026-07-26 구축. es-US 트랙 Hub A·B 작성 중 **적대적 QA → Fable5 현지전문가 → 1차출처 심판** 3단 검증으로 확보한 법령·규정·공식 문서 모음.
> **★언어 중립 자산**: 사실과 URL은 언어와 무관하므로 **EN 트랙·다른 언어에서 그대로 재사용**한다. EN 독자는 미국인이라 활용도가 더 높다.
> 사용처: `docs/es-us-ranking-plan.md` Wave 1~4의 주별 글, EN 미국 관련 글, 향후 갱신 검증.
> ⚠️**링크는 게재 전 응답 확인**(curl 200). 죽은 링크를 권위 근거로 걸면 신뢰가 깎인다.
> ✅**2026-07-26 인용 전수 감사 완료**(14건, WebFetch로 실제 열람·원문 대조). ★**살아있는 URL ≠ 근거**임이 실증됨 — 3건이 "페이지에 그 내용이 없음"으로 적발(IRS ITA 랜딩·WSOP 소요일수·DraftKings 리다이렉트). **URL 응답 검증과 내용 대조는 별개 작업이다.**

---

## 0. 사용 규칙 (실패에서 얻은 것)

1. **어필리에이트를 근거로 쓰지 말 것** — pokerlistings·somuchpoker·legaluspokersites·worldcasinodirectory·500nations 등. 이번 검증에서 **오정보가 반복적으로 이쪽에서 유입**됐다(존재하지 않는 포커룸, 폐점 룸, 틀린 연령).
2. **검수자도 틀린다** — 적대적 QA가 "규정에 없다"고 지적한 항목이 실제로는 **규정에 있었다**(NV 예치금 환불). 반드시 **1차 출처 심판**으로 결판낼 것.
3. **확정 못 한 건 문장을 뺀다.** 애매하게 쓰느니 안 쓰는 게 YMYL에서 이득.
4. **접속 확인 안 되는 링크는 조문 번호만 표기.** 인용 신호는 유지되고 위험은 0.
5. ★**URL이 200이어도 그 페이지에 내용이 없을 수 있다.** IRS 인터랙티브 툴 랜딩처럼 "안내만 있고 사실은 없는" 페이지, 쿼리스트링이 빠져 포털로 리다이렉트되는 헬프센터가 실제로 있었다. **게재 전 WebFetch로 원문 대조 필수.**
6. **미러보다 공식**: Cornell LII·FindLaw는 신뢰할 만하나 2차 호스트다. 주 공식이 열리면 그쪽으로(예: NJ는 nj.gov/oag/ge PDF). 단 미시간처럼 공식 호스트가 해외 IP를 차단하면 Cornell 유지가 현실적.

---

## 1. 연방 · 세금 (IRS) — 전 주 공통

| 사실 | 출처 | 상태 |
|---|---|---|
| TIN 미제출 시 **백업 원천징수 24%**(30% 아님). 정규 도박 원천징수도 24% | [IRS, Instructions for Form W-2G](https://www.irs.gov/pub/irs-pdf/iw2g.pdf) | ✅200 |
| **포커 캐시게임은 W-2G 보고 대상 아님**(한정 열거에 의한 배제). 단 과세 대상은 그대로 | 위 동일 | ✅ |
| 비거주 외국인 **30% 원천징수**, **스페인은 조약 면제 0%**, 라틴아메리카 국가는 전부 비면제 | ★[IRS Publication 515](https://www.irs.gov/publications/p515) ("Gambling winnings", income code 28). 면제국 원문 확인: 오스트리아·벨기에·…·**스페인**·영국 등 25개국, **라틴아메리카 0개**. ⚠️몰타는 10%, 헝가리·러시아는 조약 면제 실효 | ✅원문대조 |
| 비거주자는 **손실 상계 불가**, 30%는 **총액(gross)** 기준 | IRS Pub 515 | ✅(원문 확인) |
| **2026년 신설: 도박 손실 공제 90% 제한**(OBBBA §70114). 본전이어도 과세소득 발생. ★단 **항목별 공제(itemize) 시에만** 의미 | IRS Pub 505(2026) | ✅ |
| ITIN은 W-2G Box 9에서 SSN과 동등한 TIN → 24% 백업원천징수 회피 가능. **단 ITIN ≠ 세법상 거주자**(거주 판정=green card 또는 실질체류 테스트) | [IRS Topic 857](https://www.irs.gov/taxtopics/tc857) | ✅ |
| W-7 **Exception 2(d) "Gambling Income"** 카지노 현장 발급 = **조약 청구 비거주 외국인 전용** → 라틴 국가는 조약이 없어 해당 없음 | IRS Instructions for Form W-7 | ✅ |

✅**W-2G 토너먼트 기준액 확정(2026-07-26 감사)**: 충돌이 아니라 **제도 변경**이었다. IRS W-2G 지침 **Rev. January 2026** 원문은 고정 금액을 삭제하고 "applicable reporting threshold"로 바꿨으며, What is New에 **"2026년 지급분 최소 기준액 = $2,000"**(이후 매년 인플레 조정)이라 명시. → 쓰려면 **"2026년 기준 $2,000, 연도별 조정"**으로. 연도 없이 숫자만 쓰면 곧 틀린다.

🚫**인용 금지**: `Publication 901`(도박 내용 0건, 구판 유물 — 조약은 **Pub 515**로) · `IRS Topic 419`(2026-06 갱신인데 90% 제한 미반영)

---

## 2. 규제 온라인 포커 6개주 — 계좌·검증·연령

**운영 중 6개주 = NJ · NV · PA · MI · DE · WV** (DE·WV는 2025-06-10 BetRivers로 개시)

| 사실 | 출처 | 상태 |
|---|---|---|
| **NJ**: SSN은 "자발적 제공 시, 또는 외국인에겐 **여권·납세자번호 등가물**" | ★공식: [NJ DGE 규정 CHAPTER 69O PDF](https://www.nj.gov/oag/ge/docs/Regulations/CHAPTER69O.pdf) (§13:69O-1.3) · 미러: [Cornell LII](https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-13-69O-1-3) | ✅원문대조 |
| **MI**: 동일 공식 — "SSN 또는 끝 4자리, **비시민권자는 여권·납세자번호 등 등가 식별번호**" | [Mich. Admin. Code R. 432.655](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-432-655) (Cornell) ⚠️미시간 공식 호스트 3곳 모두 403/WAF 차단 — 미러 유지가 현실적 | ✅원문대조 |
| **NV**: ★SSN을 **"미국 거주자인 경우"** 요구 → 미국 거주 독자에겐 **불리한 예외**(유리한 면제로 오독 주의) | [NV Gaming Commission Reg 5A](https://www.gaming.nv.gov/siteassets/content/home/features/Regulation5A.pdf) §5A.110(2)(d) | ✅200 |
| **NV 30일 룰**: 등록 후 30일 내 미검증 시 ①계정 **즉시 정지** ②상금 **보유(몰수)** ③**예치금 잔액 환불 의무** ④계정 **영구 폐쇄**. 검증 전엔 **출금 전면 금지** + 입금 $5,000 상한. 검증 성공 시 보류 상금 **즉시 지급** | 위 Reg 5A §5A.110(5)(6)(7) | ✅축자 |
| 6개주 전부 **21세** | 각 주 규정 | ✅ |
| PA MSIGA 가입 2025-04-28 | PGCB 공식 | ✅ |

⚠️**PA·DE 규정의 여권/TIN 등가 조항 원문은 미확보** — NJ·MI만 축자 확인됨. 글에서 "NJ와 MI" 두 주만 명시할 것.

### MSIGA 실제 공유 풀 (★브랜드별로 갈림 — 주 단위 아님)

| 네트워크 | 결합 주 |
|---|---|
| WSOP.com | NV + NJ + MI + PA |
| BetRivers | PA + MI + DE + WV |
| BetMGM (Borgata 동일망) | NJ + MI + PA |
| PokerStars (FanDuel) | NJ + MI + PA |
| DraftKings | NJ + MI + PA (2026-07-08~) |

→ **NV 플레이어는 DE·WV와 같은 테이블 불가**(양쪽 라이선스 가진 브랜드 0). ★2023년 이전 자료는 DE가 888로 NV·NJ와 공유하던 시절이라 **그대로 옮기면 반드시 틀림**.

**DraftKings = 풀 포커룸 아님** — [Electric Poker](https://support.draftkings.com/dk/en-us/what-is-draftkings-electric-poker?id=kb_article_view&sysparm_article=KB0010489) 단일. 공식 문구로 확인되는 것: "fast-paced, **3-handed** game of No-Limit Texas Hold'em", 상금 최대 바이인 10,000배, **NJ·MI·PA에 물리적으로 있어야 함**. ⚠️**"캐시게임·일반 MTT 없음"은 이 페이지에 없는 주장**(외부 사실) → 이 URL에 걸지 말 것. ⚠️쿼리스트링 빼면 포털 홈으로 리다이렉트됨.

**WSOP 출금** → [출금정책](https://www.wsoponline.com/legal/withdrawal-policy/)에서 **원문 확인된 것만**: 최소 $10(ACH·PayPal), **케이지 $50**, "We do not charge a fee for any withdrawal method"(은행·PayPal 자체 수수료는 별도), 서류 검증 **14일** 미완료 시 출금 반려. ⚠️**소요일수(PayPal 4영업일/ACH 5영업일)는 이 페이지에 없음** — 감사에서 적발. 쓰려면 헬프센터 등 별도 출처 필요. ⚠️케이지 "당일 지급"은 확정 불가.

**신용카드 중단**: DraftKings 2025-08-25 → FanDuel 2026-03-02(PokerStars 통합) → BetMGM 2026-03-31 단계적 → Caesars/WSOP 2026-04-14. **BetRivers만 유지**(단 일부 주는 법으로 금지, 카드사 거절도 흔함).

**지오로케이션**: 와이파이 **켜져 있어야** 함(대부분 연결 불요 — 주변 네트워크가 "보이면" 됨). 유선랜은 위치확인 실패. FanDuel은 연결 시 정확도 향상(★"연결 필수"는 **미확인** — 단정 금지). 벤더는 GeoComply 지배적이나 유일하지 않음(PlayStar NJ = Xpoint).

---

## 3. 합법화했으나 미출시 / 인가 범위 밖

| 주 | 사실 | 출처 |
|---|---|---|
| **Connecticut** | 2021 합법화(HB 6451), **미출시**. 라이선시가 포커 상품 미제공 + 주법이 주간 유동성 공유 불허 | — |
| **Maine** | LD 1164(PL 2025 c.538), 주지사 **미서명 성립 2026-01-11**, 시행 **2026-07-29**. 와바나키 4개 부족 독점. **미출시**(규칙 제정 중, 2026-07-15 공청회). ★법정 정의에 **poker 명시 포함** | [Maine GCU I-Gaming](https://www.maine.gov/dps/gcu/I-Gaming) ✅200 |
| **Rhode Island** | 2023년 법으로 온라인 카지노만 인가 = **슬롯 + 라이브딜러 테이블게임**. "online table game"이 **"conducted by one or more live persons"**를 요구 → **딜러 없는 P2P 포커는 인가 카테고리 자체가 없음**. "합법화됐는데 미출시"는 어필리에이트 표현으로 **틀림** | R.I. Gen. Laws §42-61.2-1 (링크 접속 불가 — 조문 표기로) |

---

## 4. 라이브 포커 연령 (18세 예외)

기본은 **21세**. 아래가 검증된 18세 예외:

| 주/장소 | 사실 | 출처 |
|---|---|---|
| **Florida** | ★**포커만 18세** — pari-mutuel cardroom과 **세미놀 부족 카지노 둘 다**. 슬롯·테이블게임은 21세(같은 건물 안 이중 연령) | [Fla. Stat. §849.086](https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0800-0899/0849/Sections/0849.086.html) ✅200 · [Hard Rock 포커 공식](https://casino.hardrock.com/tampa/casino/poker) ✅200 |
| **Minnesota** | **부족 카지노·카드클럽 모두 18세**("부족은 21"은 오류). ⚠️"주류 구역만 21"은 **공식 근거 없음 — 쓰지 말 것** | [Mystic Lake 정책](https://mysticlake.com/company-policies) ✅200 · Canterbury Park |
| **Texas** | card house 18세(회원제) | — |
| **New York** | Turning Stone·Akwesasne(dry 트라이벌) 18세 / Seneca·상업 21세 | — |
| **Wyoming** | Wind River 18세 | — |
| **Washington** | 트라이벌 무알코올 18세(Legends 등), 주류 구역 21세 | — |
| ❌**Arizona** | **21세** — "18세" 오류. 주법이 **모든 부족-주 컴팩트에 21세 하한 강제**. ⚠️"18세는 빙고만"도 사실 아님 | [A.R.S. §5-601](https://www.azleg.gov/ars/5/00601.htm) ✅200 |

---

## 5. 주별 합법성 — 검증된 핵심 팩트

| 주 | 사실 | 출처 |
|---|---|---|
| **Washington** | ★**온라인 포커 = Class C felony**(최대 5년·$10,000). **플레이어에게 중범죄를 적용하는 유일 주**. 라이브는 합법 | [RCW 9.46.240](https://app.leg.wa.gov/RCW/default.aspx?cite=9.46.240) ✅200 |
| **Idaho** | ★★**주 헌법이 "poker"를 이름으로 열거해 금지** → 트라이벌 카지노도 포커룸 불가(Class II 전자게임만). 2015년 9th Circuit이 Coeur d'Alene 라이브룸 폐쇄 확정 | Idaho Const. Art. III §20 (링크 접속 불가 — 조문 표기로) |
| **Maryland** | 홈게임 $1,000은 **24시간 동안 전 참가자 합계**(테이블당 아님). +주최자 21세·주 1회 이하·주거지·**사전 사교관계**·레이크/입장료 전면 금지. ⚠️조문에 "table"이란 단어 없음 | [Md. Code, State Gov't §9-1C-01](https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gsg&section=9-1C-01) ✅200 |
| **Alaska** | 자선게이밍 허가 종목에 **카드게임 없음**(빙고·래플·풀탭만). "포커는 스킬게임이니 contest of skill" 논리는 법문상 봉쇄(sect. 05.15.690(11)이 사격·경주 등으로 한정) | AS 05.15.100/.180/.690 |
| **Georgia·Tennessee** | **홈게임도 불법** | — |
| **Nebraska** | ❌"포커 없음"은 오류 — Grand Island Casino Resort가 2025-04 **"Nebraska's only live poker room"**(6테이블) 개장 | 공식 |
| **Kansas** | 라이브 포커 **있음** — Hollywood Casino at Kansas Speedway(21+). ⚠️Kansas Star·Boot Hill은 **하우스뱅킹 게임만**(예시로 쓰지 말 것) | 공식 |

### ★"카지노 ≠ 포커룸" 검증 목록 (라이브 포커 **없는** 곳)
NE WarHorse · NC Two Kings · AR Oaklawn/Southland(UTH만) · TN Southland · LA Kenner Fair Grounds OTB(비디오포커) · AL Wind Creek(Class-II 전자빙고만) · KY HHR 베뉴(슬롯만) · SC 육상 전부(크루즈만) · ID 트라이벌(전자만) · OR Chinook Winds(대회 없음) · IN Ameristar East Chicago(2015 폐쇄) · IN Hollywood Lawrenceburg(2022 폐쇄) · DE Bally's Dover/Harrington(폐쇄)

🚫 **AL letsgambleusa "Wetumpka 68 테이블게임+포커룸" = 거짓**(다수 2026 소스 반박) · **worldcasinodirectory "French Lick 라이브 포커 4테이블" = 거짓**

---

## 6. sweepstakes 금지 — 제정법 10개주 (2026 기준)

| 주 | 법안 | 성립 | 시행 | P2P 포커 예외 |
|---|---|---|---|---|
| Montana | SB 555 (Ch.626) | 2025-05 | 2025-10-01 | 없음 |
| Connecticut | SB 1235 (PA 25-112) | 2025-06-24 | 2025-10-01 | 없음 |
| New Jersey | A5447 (P.L.2025 c.128) | 2025-08-15 | 즉시 | **없음 — poker 명시 금지** |
| California | AB 831 (Ch.623) | 2025-10-11 | 2026-01-01 | 확정 불가 |
| New York | S5935-A (Ch.605) | 2025-12-05 | 즉시 | 확정 불가 |
| Indiana | HB 1052 (PL 153) | 2026-03-12 | 2026-07-01 | ★**있음** |
| Maine | LD 2007 (PL c.645) | 2026-04-06 | 2026-07-29 | 없음 |
| Oklahoma | SB 1589 | 2026-05(거부권 재의결) | 2026-11-01 | 확정 불가 |
| Louisiana | HB 883 (Act 182) | 2026-05-15 | 2026-08-01 | 없음 |
| Tennessee | SB 2136 (PC 1117) | 2026-05-22 | 즉시 | 없음 |

- **Indiana만 P2P 포커 예외** — IC 4-33-10-7 축자: *"the term does not include … **peer to peer skill-based poker games**"*
- 반대로 **NJ는 금지 대상 정의에 poker를 명시 열거**
- **Minnesota는 법이 아니라 AG 명령** — SF 4474는 2026-05-18 회기종료로 폐기, [Ellison AG cease-and-desist](https://www.ag.state.mn.us/Office/Communications/2025/11/05_IllegalGamblingWebsites.asp)(14개 사업자, 12/1 시한)
- ❌**Nevada 미포함** — SB 256에 "sweepstakes" 0회. 무면허 도박 형량 상향법일 뿐
- ❌**Utah·Kentucky 미포함** — 제정된 sweeps 금지법 없음
- **Iowa SF 2289**(2026-05 서명, 07-01 시행)는 **집행권한 부여형**이지 전면 금지 아님(TN과 성격 다름)

---

## 7. 🚫 인용 금지 stale 자료

| 자료 | 문제 |
|---|---|
| **WSOP Online FAQ** 일부 페이지 | 2022-08자 — "28% 원천징수"(현행 **24%**). 신분증 목록만 쓰고 **세금 수치 인용 금지** |
| **IRS Publication 901** | 도박 내용 0건. 조약은 **Pub 515**로 |
| **IRS Topic 419** | 2026-06 갱신인데 90% 손실제한 미반영 |
| **NJ DGE 승인 사이트 목록** | 폐쇄된 pokerstarsnj.com 게재 — **규제기관 목록도 stale할 수 있음** |
| **WSOP 미시간 약관 페이지** | 네바다 약관 본문을 서빙하는 버그 → 주별 약관은 본문 확인 필수 |
| **BetRivers 지오로케이션 헬프** | Wayback 2022~23 스냅샷만 — "0.5마일" 수치는 "과거 안내 기준"으로 한정 |
| **Delaware Internet Lottery Rules** | effective 2014-11-10, 12년 경과 |
| 어필리에이트 전반 | pokerlistings·somuchpoker·legaluspokersites·worldcasinodirectory·500nations — 오정보 반복 유입 확인 |

---

## 7-1. ✅ 인용 감사 결과 (2026-07-26, 14건 전수 실제 열람)

**원문 대조 통과(그대로 사용 가능)**: NV Reg 5A(현행 Rev. 05/24, §5A.110 전 항목 축자 일치) · WA RCW 9.46.240("class C felony" 확인, 2020 개정이 최신) · AZ §5-601(B)(1) · FL §849.086(12)(b) · Hard Rock 탬파(포커 18세 푸터 문구) · Mystic Lake(18세) · MD §9-1C-01(24시간 총액·21세·사전 사교관계 3항목 전부) · IRS W-2G 지침(24% 백업원천징수·포커는 토너먼트만 열거) · NJ CHAPTER 69O · Maine GCU(+Rulemaking 하위)

**적발되어 교체·삭제한 것**:
1. **IRS ITA 랜딩** — 30%도 면제국도 페이지에 없음(인터랙티브 툴 안내뿐) → **Pub 515로 교체**
2. **WSOP 출금 소요일수**(PayPal 4일/ACH 5일) — 인용한 정책 페이지에 **해당 문구 없음** → 기사에서 일수 삭제, 검증된 최소액·무수수료·14일만 유지
3. **DraftKings 무쿼리 URL** — 실제 브라우저에서 **포털 홈으로 리다이렉트**돼 본문이 안 보임 → 쿼리 포함 URL로 교체. 또한 "캐시게임·MTT 없음"은 그 페이지에 없는 주장이라 **출처를 분리**

**정밀화**: NV 규정 문언은 SSN 전체가 아니라 **끝 4자리**.

## 8. 확정 불가 (쓰지 말 것)

2. **ITIN이 실제 운영사 가입 UI에서 통과되는지** — 규정은 허용, 운영사 문서는 침묵 → "소포르테에 확인" 헤지 필수
3. **FanDuel "여권 거부"** — 미확인. 사실이면 외국인에게 치명적이므로 단정 금지
4. **FanDuel 지오로케이션 "연결 필수"** — 공식은 권장 수준
5. **Skrill/Neteller 4개 브랜드 전면 미지원** — 캐셔 페이지 개별 확인 안 됨 → "거의 없다"로 완화
6. **PA·DE 규정의 여권/TIN 등가 조항 원문**
7. **최소 입금액** — WSOP $10·BetMGM $10은 2차 출처. BetRivers·FanDuel 미확인
8. **WSOP 케이지 "당일 지급"** — 공식 확인 불가(최소 $50만 확정)

---

## 9. ★콘텐츠 각도 은행 — 언어 무관 (EN 재사용 최우선)

> 50개주 전수조사에서 나온 **훅·앵글**. register(말투)만 언어별이고 **아래는 전부 언어 무관**이라 EN에 그대로 쓴다. 상세 주별 데이터는 `docs/keyword-bank/es-us-search-demand-phase1.md`(50개주).

### 9-1. 전국 반복 훅 (어느 언어든 통함)

| 훅 | 왜 먹히나 | 해당 주 |
|---|---|---|
| **"스포츠벳은 되는데 포커는 왜 안 되나"** | 같은 앱·같은 주인데 결과가 달라 검색 혼동 최대. 원인은 "두 개의 다른 법"(스포츠벳법이 포커를 안 담음) | AZ·CO·MA·MD·NC·VA·OH·IN·IA·KS·AR·TN·LA·MO·KY·VT 등 다수 |
| **"카지노 있음 ≠ 포커 있음"** | 독자가 헛걸음하는 실제 피해. UTH·비디오포커·전자빙고·HHR을 포커로 오인 | §5 검증 목록 참조 |
| **"가장 가까운 합법 포커는 옆 주"** | 무포커 주 독자에게 유일한 실용 답 | KY→IN · TN→MS · GA/SC→NC · AL→MS · VT→MA · UT→NV |
| **"거주 ≠ 위치"** | 온라인 규제주 최대 오해. 방문만으로 합법 플레이 가능 | 규제 6개주 |
| **나이 이중구조** | 같은 건물에서 포커 18·슬롯 21(FL). 18~20세는 입장 가부가 갈림 | FL·MN·TX·NY·WY·WA |
| **"브랜드가 테이블을 합친다"** | MSIGA를 주 단위로 오해하는 게 보편적 | 규제 6개주 |

### 9-2. 주별 유니크 팩트 (★비대체 자산 — AI·경쟁사가 못 만드는 것)

발행 시 **그 주 글의 차별화 앵커**로 쓸 것. 전부 검증됨.

| 주 | 팩트 | 콘텐츠 가치 |
|---|---|---|
| **Idaho** | ★**주 헌법이 "poker"를 이름으로 열거해 금지** → 트라이벌도 불가 | 최강. 헌법에 게임명이 박힌 희귀 사례 |
| **Washington** | ★**플레이어에게 중범죄(felony)를 적용하는 유일 주** | 보호적 톤 = E-E-A-T. 경고 콘텐츠 |
| **Montana** | ★**바에서 라이브 포커가 합법**(카지노 밖 도박 허용 유일 주) | 의외성 최고 |
| **South Dakota** | Deadwood = **"죽은 자의 손(A-A-8-8)"의 고장** + 3개 라이브룸 + spread-limit이 시그니처 | 역사·문화 = 비대체 |
| **New Mexico** | ★구글이 `nuevo méxico`를 **국가 멕시코로 오인** → .mx 결과가 노출돼 주민에게 오답 | es 전용 훅(EN엔 해당 없음) |
| **Texas** | card house **회원제 모델**(rake 아닌 seat fee/멤버십) | 다른 주에 없는 구조 |
| **California** | ★**"póker mexicano"**(41장·조커·five of a kind) — The Bike 등에서 실제 스프레드 | 문화 자산. EN에도 "Mexican Poker" 수요 |
| **Nebraska** | 2025-04 개장한 **주 최초이자 유일한 라이브 포커룸** | 최신성 |
| **Maryland** | 홈게임 **24시간 $1,000 총액** + 사전 사교관계 요건 | 유니크 법조문 |
| **New Hampshire** | **charity poker**가 진짜 라이브(미 최대 charity 카지노) | 구조 자체가 설명거리 |
| **Kansas** | 육가공벨트 초고밀 히스패닉인데 **최근접 룸까지 3시간** | "정직한 거리안내"가 차별화 |
| **New York** | NYC에 **상업 포커룸 0**(다운스테이트 라이선스 대기) + 2025-12 sweeps 금지 | 최대 시장·최신성 |
| **Oregon** | 포틀랜드 **소셜클럽 단속 진행 중**(자원봉사 딜러 loophole) | 진행형 스토리 |
| **Indiana** | HB1052이 sweeps 금지하며 **P2P 포커만 예외** | 전국 유일 예외 |

### 9-3. 구조적 인사이트 (기획에 쓸 것)

- **★육가공벨트 슈퍼클러스터**: Liberal KS 69%·Schuyler NE 75%·Dodge City 67%·Worthington MN 45%·Springdale AR 42%·Yakima WA 54%. **초고밀 히스패닉 + 경쟁 0 + 카지노 원거리** → "온라인/홈게임/학습 + 정직한 거리안내"가 답. (EN에선 이 클러스터가 약함 — es 전용 강점)
- **★sweepstakes 전국 붕괴 중**: 10개주 제정법 금지 + MN은 AG 명령. **"합법 대안"이 아니라 "금지되는 중" 경고 앵글**로 써야 함. 시의성 최고 = 갱신 주기 짧음.
- **크로스보더가 실질 답인 주가 많다**: 무포커 10개주 + 접근성 나쁜 주. "네 주에 없다"로 끝내지 말고 **어디로 가면 되는지**까지 줘야 완결.
- **규제 전환 6개주 = 전환 퍼널**: 합법성 설명보다 **"어떻게 가입하나"**가 수요. cómo registrarse·지오로케이션·서류·출금이 핵심.

### 9-4. 에버그린 vs 시의성 (갱신 주기 설계)

| 성격 | 항목 | 갱신 |
|---|---|---|
| **에버그린** | 헌법·법령 조문(ID·WA·MD) · 나이 규정 · 게임 구조(카지노≠포커) · 크로스보더 지리 | 연 1회 |
| **중간** | 규제 6개주 운영사·MSIGA 풀 구조 · 세금 기준 | 반기 |
| **★시의성 높음** | sweeps 금지 목록 · 신용카드 정책 · 미출시 주 상태(CT·ME) · 신규 포커룸 개폐 | **분기** |

---

## 10. EN 트랙 활용 메모

- **EN 독자는 미국인** → 이 출처들이 es보다 **더 직접적으로 유용**. EN 글엔 "Sources" 섹션을 기본 포함.
- EN은 §13이 이미 검증된 마스터라, **이 문서는 §13이 아니라 "법·규제·세금 사실"의 출처 은행**이다(성격이 다름).
- **주별 EN 글**(예: "Is online poker legal in Texas?")을 쓸 때 이 문서의 §5·§6을 그대로 근거로 사용 가능.
- 갱신 주기: 법령·시행일이 걸린 항목(§6 sweeps, §3 미출시 주)은 **분기 1회 재확인** 권장. 나머지(연령·헌법 조문)는 안정적.
