# 미국 입국 요건 — 로케일 공통 축 (WSOP·WSOP Circuit 21개 스톱용)

> **축 B 교차 문서.** 최초 작성 2026-07-29 (WSOP 2026 다국어 번역 준비 중 확보)
> 로케일별 상세는 `en.md` / `ja.md` / `zh.md` / `zh-hant.md` / `es.md`
> 대회는 `../tournament-spine.md`

---

## 왜 이 문서가 필요한가

우리 대회 데이터 107개 중 **미국이 21개**로 가장 많고, WSOP·WSOP Circuit·WPT 미국 스톱이 전부 여기 걸린다.
그런데 **"어떻게 참가하나요"의 답이 여권마다 정반대**다 — 일본·대만·스페인은 ESTA로 끝나지만
중국 본토·멕시코·아르헨티나는 비자를 받아야 한다. 한국어 원문을 그대로 번역하면 이 지점이 전부 틀린다.

---

## 1. Visa Waiver Program (VWP) — 정본 표

**출처: [DHS 공식 VWP 페이지](https://www.dhs.gov/visa-waiver-program)** (표에 국가별 VWP 시행일 명시) · 실측 2026-07-29 · **등급 S**

CBP 원문: *"The Visa Waiver Program (VWP)... permits citizens of **42 countries** to travel to the United States for business or tourism for stays of up to **90 days without a visa**."*
([CBP VWP](https://www.cbp.gov/travel/international-visitors/visa-waiver-program))

### 우리 로케일과 직결되는 국가

| 로케일 | 여권 | VWP | 시행일 | 실무 |
|---|---|:-:|---|---|
| `ja` | 🇯🇵 일본 | ✅ | 1988-12-15 | ESTA |
| `zh-hant` | 🇹🇼 대만 | ✅ | 2012-11-01 | ESTA |
| `es` | 🇪🇸 스페인 | ✅ | 1991-10-01 | ESTA |
| `es` | 🇨🇱 칠레 | ✅ | 2014-03-31 | ESTA. **라틴아메리카 유일** |
| `en` | 🇬🇧 영국 | ✅ | 1988-07-01 | ESTA |
| `en` | 🇦🇺 호주 | ✅ | 1996-07-29 | ESTA |
| `zh` | 🇸🇬 싱가포르 | ✅ | 1999-08-09 | ESTA |
| (참고) | 🇰🇷 한국 | ✅ | 2008-11-17 | ESTA |
| `zh` | 🇨🇳 **중국 본토** | ❌ | — | **B1/B2 비자 + EVUS** (§3) |
| `es` | 🇲🇽 **멕시코** | ❌ | — | **비자** |
| `es` | 🇦🇷 **아르헨티나** | ❌ | — | **비자** |
| `es`/`pt` | 🇧🇷 **브라질** | ❌ | — | **비자** |
| `es` | 🇨🇴 **콜롬비아** | ❌ | — | **비자** |
| `zh`/`zh-hant` | 🇲🇾 말레이시아 | ❌ | — | **비자** |

> ★ **대만이 VWP에 있는 근거**: DHS 페이지가 명시한다 —
> *"the Taiwan Relations Act of 1979... provides that '[w]henever the laws of the United States refer or relate to foreign countries... such terms shall include and such laws shall apply with respect to Taiwan.'... Accordingly, all references to 'country' or 'countries' in the Visa Waiver Program authorizing legislation, Section 217 of the Immigration and Nationality Act, 8 U.S.C. § 1187, are read to include Taiwan."*
> → `zh-hant` 글에서 "대만도 ESTA로 간다"를 쓸 때 이 근거를 댈 수 있다.

> ⚠️ **홍콩·마카오 여권은 42개국 목록에 없다.** `zh-hant` 독자에 홍콩이 포함되므로
> "번체 독자 = ESTA"로 뭉뚱그리면 안 된다. 대만만 ✅.

### VWP 42개국 전체 (DHS 표 원문 순서)

Andorra · Australia · Austria · Belgium · Brunei · Chile · Croatia · Czech Republic · Denmark ·
Estonia · Finland · France · Germany · Greece · Hungary · Iceland · Ireland · Israel · Italy ·
Japan · Korea, Republic of · Latvia · Liechtenstein · Lithuania · Luxembourg · Malta · Monaco ·
Netherlands† · New Zealand · Norway · Poland · Portugal · Qatar · San Marino · Singapore ·
Slovakia · Slovenia · Spain · Sweden · Switzerland · Taiwan‡ · United Kingdom§

---

## 2. ESTA — VWP 여권용

**출처: [esta.cbp.dhs.gov](https://esta.cbp.dhs.gov/)** (공식 신청 사이트) · 실측 2026-07-29 · **등급 S**

| 항목 | 원문 |
|---|---|
| 수수료 | *"Fee for application is **$40.27 USD**."* |
| 체류 | *"Your travel is for **90 days or less**."* |
| 여권 | *"**Valid passport(s) from a Visa Waiver Program country**."* |
| 결제 | MasterCard, VISA, American Express, Discover (JCB or Diners Club only), **PayPal** |
| 소요 | 신청서 작성 평균 **23분** (OMB 1651-0111) |
| 신청 시점 | CBP: *"apply as soon as they begin preparing travel plans or **prior to purchasing airline tickets**"* |

> ⚠️ **ESTA 승인 ≠ 입국 보장.** CBP 원문: *"Authorization via ESTA does not determine whether a traveler is admissible... CBP officers determine admissibility upon travelers' arrival."*
> → 모든 언어판에 이 단서를 넣을 것. 안 쓰면 오해를 만든다.
> ⚠️ ESTA 결제에 **UnionPay가 없다** — 중국계 독자에게 실질적 제약(§3의 EVUS와 대비).

---

## 3. EVUS — 중국 여권 전용 ★ `zh` 로케일 핵심

**출처: [evus.gov](https://www.evus.gov/)** (DHS 공식) · 실측 2026-07-29 · **등급 S**

VWP가 없는 중국 본토 독자에게는 이쪽이 실제 경로다. **비자가 있어도 EVUS를 안 하면 못 탄다.**

| 항목 | 원문 |
|---|---|
| 대상 | *"You are a **citizen of China**. You have a valid Chinese passport."* |
| 필요 비자 | *"A **full term 10-year U.S. visa**. A visa that is one of these classes: **B1, B2 or B1/B2**."* |
| 수수료 | *"Fee for enrollment is **$30.75 USD**."* |
| 결제 | MasterCard, VISA, American Express, Discover (JCB or Diners Club only), **UnionPay** ← ESTA엔 없음 |
| 소요 | 등록 평균 **20분** (OMB 1651-0139) |
| 그 외 | 미국 목적지 주소 필수. Global Entry ID·고용주 주소·미국 내 연락처가 요구될 수 있음 |

> ⏳ **미확인 — 쓰지 말 것**: EVUS **유효기간/갱신 주기**. 공식 홈·FAQ 접근 범위에서 확인 못 했다.
> "2년마다 갱신"류 서술은 2차 출처에 흔하지만 **1차 확인 전까지 쓰지 않는다.**
> 글에는 "갱신 시점은 evus.gov에서 확인" 정도로 넘긴다.

---

## 4. 로케일별 "WSOP 어떻게 가나요" 결론

| 로케일 | 결론 | 비용 | 글에서 잡을 각도 |
|---|---|---|---|
| `ja` | ESTA만 | $40.27 | **장벽이 아니다** — 일본은 이미 222명(5위)을 보낸다 |
| `zh-hant` | 대만 ESTA만 | $40.27 | 대만도 2012년부터 VWP. 단 **홍콩은 비자** |
| `zh` | B1/B2 비자 + EVUS | 비자 + $30.75 | **중국 169명(7위)이 이미 이 경로로 간다.** UnionPay 결제 가능 |
| `es` | **국가마다 갈린다** | — | 스페인·칠레 ESTA / 멕시코·아르헨티나·브라질·콜롬비아 비자. **es.md의 "갈 수 있나" 축 그대로** |
| `en` | 미국인 해당없음 / 영·호 ESTA | $40.27 | 영어권이 참가자 1·2·3위(미 5,634 · 캐 371 · 영 356) |

---

## 5. WSOP 현장 등록에서 여권별로 갈리는 지점

`lib/posts/wsop-2026-tournament-guide.ts`에 정리된 공식 규정 중 **국적 의존** 항목만 추림.

| 항목 | 내용 | 누구에게 걸리나 |
|---|---|---|
| **주소 2차 서류** | 신분증에 주소가 없으면 주소가 적힌 두 번째 서류 필요(운전면허·공과금·카드명세서) | ★ **여권에 주소란이 없는 나라 전부** — 한국·일본·대만·중국 |
| **ACH 결제** | **미국 거주자 전용** | 비미국인 전원 |
| **Luxon Pay** | 비미국인용으로 열려 있음 | 비미국인 전원 |
| 카드 결제 | 건당 **$10,000 한도 + 3% 수수료** → ME는 $10,300 | 전원 |
| 가상·디지털 카드 | **확인 수단으로 불인정** (실물 카드 필요) | 전원 |
| 카드 명의 | 신분증 이름과 **일치** 필수 (가족·법인 카드 불가) | 전원 |
| 전신송금 | **$100,000 이상**부터 + 사전 승인 | 전원 |
| 나이 | 만 **21세** 이상 (카지노 입장 조건) | 전원 |
| 계정 | **Caesars Rewards + WSOP LIVE** 둘 다 (Bravo Poker Live 아님) | 전원 |
| 확인 장소 | **Paris — Versailles Ballroom** | 전원 |

---

## 갱신 규칙

- ★ **VWP 국가는 추가·정지된다** (Qatar 2024-11-21 추가, Israel 2023-09-29 추가). 재실측 **6개월**
- ESTA·EVUS 수수료는 인상된 전례가 있다 → **글에 금액을 쓸 때마다 재확인**
- EVUS 유효기간은 미해결 (§3) — 1차 출처 확보되면 즉시 보강
- 홍콩·마카오 여권의 미국 입국 요건 ⏳ 미조사 (`zh-hant` 독자 일부가 해당)
