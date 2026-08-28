# 나라별 홀덤대회 트랙 — 전략·실측·규율 정본

> **신설 2026-08-28 (사장님 지시)** — 「솔버 프로젝트처럼 본체 작업 중 짬이 날 때 따로 집중 관리하고 싶다.
> GSC 분석하다 여기까지 왔는데, 다른 날 나라별 대회를 쓰려면 맥락 파악이 안 될 것 같다」
>
> 🔴 **이 트랙을 열 때 이 파일을 먼저 통독한다.** 여기 있는 수치는 전부 2026-08-28 실측이고,
> 근거 원문은 `docs/seo-report-2026-08-28.md`·`docs/keyword-bank/en-country-strategy.md`에 있다.
> **결론만 옮겨 적지 말고 그 두 파일의 근거를 함께 읽어라** — 이 트랙의 판단은 전부 실측에서 나왔다.

---

## 0. 이 트랙은 어디서 왔나 (맥락 체인 — 재구성하지 말 것)

한 세션에서 이 순서로 도달했다. **각 단계가 다음 단계의 근거다.**

1. 사장님이 GA4·GSC 분석을 지시 → 참여율 「63%→59% 하락」이 **측정 아티팩트**였음이 드러남(실제 65.8%)
2. 같은 분석에서 **번역본 통계의 46%가 봇**이고, 걷어내면 **해외 독자가 한국 독자보다 오래 읽는다**는 것 확인
   → 「포스팅 방식이 문제」 가설 기각
3. 그 과정에서 **`zh-hant/tournaments`가 24.6위인데 CTR 10.6%** — 번역본 132페이지 중 **유일한 클릭원**이고
   그게 **대회 일정**이라는 사실 발견 → 이 트랙의 최초 씨앗
4. 「홀덤사이트」 판정에서 **«언제·어디서·얼마»는 이기고 «무엇이다»는 노출만 쌓인다**는 패턴 확정
5. 사장님 질문 「미국은 대형사이트를 못 이기니 경쟁 낮은 영어권 나라를 베이스로?」
   → SERP 10개 시장 실측 → **애그리게이터 슬롯**이 유일한 진입로임을 발견
6. 사장님 재질문 「어휘 기준을 어느 나라에 맞출까」 → 어휘 겹침률 실측
   → **핵심 주제는 88~92% 동일 = 재베이스 무의미**, 갈리는 건 **지명이 붙는 자리뿐**
7. → 사장님 결론: **`/en/`은 지금 기준 유지 + 나라별 대회를 깊게.** 본체 동의. 이 트랙 신설.

---

## 1. 전략 근거 — 왜 이 트랙이 «되는» 일인가

### 1-A. 영어권 SERP는 나라 불문 구조가 같다 (10개 시장 실측)

top10을 잡은 건 «대형 포커 미디어»가 아니라 **베뉴(카지노·펍리그) 본인들**이다.

| 시장 | 쿼리 | 볼륨/월 | 대형 미디어 top10 | 실제 점유자 |
|---|---|---:|---:|---|
| 미국 LA | poker tournaments los angeles | 2,400 | **5** | pokeratlas×2·cardplayer·reddit·hendonmob |
| 미국 베이거스 | poker tournaments las vegas | 8,100 | 2 | Wynn·Orleans·Caesars·Venetian·South Point |
| 호주 시드니 | poker tournaments sydney | 590 | **1** | Star Poker·NPL·APL·Poker Palace |
| 호주 멜버른 | poker tournaments melbourne | 390 | 2 | Crown Melbourne·APL·PlayLive |
| 아일랜드 더블린 | poker tournaments dublin | 260 | 2 | Irish Poker Tour·Dublin Poker Festival |
| 영국 런던 | poker tournaments london | 2,400 | 2 | Metropolitan·Hippodrome·Genting |
| 캐나다 에드먼턴 | poker tournaments edmonton | 880 | 4 | Pure Casino×2·RiverCree |
| NZ 오클랜드 | poker tournaments auckland | 70 | 3 | **SkyCity×3**·Clubs NZ·National Pub Poker League |
| 필리핀 마닐라 | poker tournaments manila | 70 | **1** | PokerStars Live Manila·APPT·GPI |
| 아시아 | poker tournaments asia | 20 | 1 | APT·lifeofpoker·somuchpoker |

🔴 **나라를 바꿔도 경쟁자의 «종류»는 안 바뀐다.** 바뀌는 건 볼륨과 베뉴 개수뿐이다.

### 1-B. 유일하게 비어 있는 자리 = 애그리게이터 슬롯 (시장당 하나)

**베뉴는 자기 일정만 안다.** 「이 도시의 모든 대회」는 어떤 베뉴도 답할 수 없다 — 그 자리가 우리 몫이다.

| 시장 | 인컴번트 | 순위 | 판정 |
|---|---|---|---|
| 영국 런던 | pokerdiscover.com | **#1** | 🔴 굳었다 |
| 아시아 | pokercalendar.asia | **#1** | 🔴 굳었다 |
| 호주 멜버른 | australianpokerschedule.com.au | #3 | 🟡 |
| 아일랜드 더블린 | pokerdiscover.com | #5 | 🟡 |
| 필리핀 마닐라 | pokercalendar.asia | #6 | 🟡 |
| 호주 시드니 | australianpokerschedule.com.au | **#8** | 🟢 안 굳었다 |
| 미국 베이거스 | mttdb.com | #10 | 🟢 |

**증명: `pokerdiscover.com`이 런던(2,400/월)에서 카지노를 전부 제치고 #1이다.**
애그리게이터는 베뉴를 이길 수 있다.

### 1-C. 우리는 이미 이 포맷의 승자다

- `/tournaments` — **411세션 · 참여율 77.9% · 1:53 · PV 2.21** = 사이트 최대 유입이자 최고 성적
- 「국내 홀덤 대회 참가 방법」 **1위 · CTR 41.0%** · 「한국 포커 대회 참가 방법」 r1.6 · **CTR 41.1%**
- 「2026 홀덤대회 일정」 r2.7 CTR 18.4% · 「해외 홀덤대회일정」 r4.7 CTR 10.6% · 「홀덤 대회」 r5.1 CTR 5.2%
- 🔴 **`zh-hant/tournaments` r24.6인데 CTR 10.6%**(66노출 7클릭 · 「台灣德州撲克比賽2026」 **r8.2**)
  = 번역본 132페이지 중 **유일하게 클릭이 나는 자리**. **낮은 순위에서도 이 포맷은 팔린다.**

### 1-D. 🔴 어휘 재베이스는 하지 마라 (실측으로 기각됨)

같은 주제로 미국·호주·영국·캐나다·NZ 자동완성 겹침률(자카드)을 쟀다.

| 축 | 호주 | 영국 | 캐나다 | 뉴질랜드 |
|---|---:|---:|---:|---:|
| **핵심 주제(6필라)** | 88% | 89% | 86% | 92% |
| 상황·현지 축 | 48% | 55% | 54% | 67% |

- `poker position`·`poker bluff`·`tournament strategy`·`poker outs`·`texas holdem rules`·`starting hands`
  = **다섯 나라 100% 동일**. `big blind` 43%는 「big blind **pimple**」 같은 무관한 뜻이 섞인 것이지 용어 차이가 아니다.
- 상황 축이 갈리는 이유는 **전부 지명**이다: `pub poker sydney/gold coast/perth` · `poker room melbourne/brisbane` ·
  `poker club melbourne`. `home poker game`은 다섯 나라 100% 동일.
- 볼륨은 미국이 압도: `poker hands` 673,000 vs 호주 40,500(**16.6배**) · `texas holdem rules` 27,100 vs 1,600(**16.9배**).

→ **같은 말을 쓰는데 시장이 1/16인 쪽에 맞출 이유가 없다.** 그리고 «경쟁 낮은 나라의 이득»은
**이미 자동으로 받고 있다** — 구글이 나라별로 다른 SERP를 내므로 같은 페이지가 미국 40위·호주 15위일 수 있다.
**핵심 필라는 현재 미국 기준 표기를 유지하고, 지역 어휘는 나라별 대회 글에서만 쓴다.**

---

## 2. 자산 지도 — 다시 만들지 마라 (2026-08-28 실측)

### 2-A. 허브 라우트 `/tournaments` — **7개 로케일**

`ko` · `en` · `de` · `es` · `ja` · `zh` · `zh-hant`
🟠 **`id`·`pt`는 대회 글을 6편씩 갖고도 허브 라우트가 없다** — 이 트랙 착수 시 1순위 점검 항목.

### 2-B. 대회 관련 포스트 (파일명 패턴 실측 — 근사치이므로 착수 시 재확인)

| 로케일 | 편수 |
|---|---:|
| es | 8 |
| en · ja · zh · zh-hant | 7 |
| de · id · pt | 6 |
| ar · hi · ms · tr · vi | 1 |
| bn·fa·fil·fr·he·it·pl·ro·ru·sw·th·uk | 0 |

**KO 15편**(`lib/posts/`): `appt-korea-2026-guide` · `apt-incheon-2026-guide` · `apt-jeju-2026-fall-guide` ·
`ggpoker-wsop-express-satellite-guide` · `holdem-community-event-guide` · `holdem-masters-7th-guide` ·
`holdem-pub-first-visit-guide` · `holdem-pub-guide` · `holdem-tournament-buy-in-cost` ·
`holdem-tournament-how-to-enter` · `holdem-tournament-schedule-check`(⚠ noindex) ·
`holdem-tournament-tax-guide` · `holdem-tournament-vs-cash-game` · `pokerstars-appt-satellite-guide` ·
`wsop-2026-tournament-guide`

**EN 7편**: `apt-incheon-2026-guide` · `ept-barcelona-2026-guide` · `holdem-tournament` ·
`holdem-tournament-vs-cash-game` · `korea-poker-marathon-2026` · **`wpt-australia-2026-guide`** · `wsop-2026-tournament-guide`
🔷 **`wpt-australia-2026-guide`가 이미 있다** — 호주 착수 시 맨바닥이 아니다.

### 2-C. 검증 이력 (이미 치른 비용 — 재조사 금지, 먼저 grep)

WORKLOG에 축적된 1차 출처 실측: **APT 인천/제주**(p-city 공지 N_SEQ 축어) · **JTBC**(9/4 「8 days left」 축어) ·
**AJPC 4–13 Des** · **EPT €1.100/€690** · **WPT 호주 NSW**(starpoker 이벤트 3건 축어 + 현금한도 §73A) ·
**WSOP Rule 원문**(pdftotext) · **TDA 룰**(버지니아 주정부 공개 PDF) · **GOP/Labyrinth·Olympus**.
관련 메모리: [[wsop-rules-primary-source-asset]] · [[tda-rules-primary-source-path]] ·
[[primary-source-self-contradiction]] · [[data-hierarchy-mixing-error]] · [[event-guide-consistency-review]].

### 2-D. 시한 관리

`docs/update-calendar.md` — 대회 일정은 **여기가 정본**이다. 핸드오프에 시한을 적지 마라.

---

## 3. 🔴 확정 규율 — 이 트랙의 심판

1. **데이터 공급을 먼저 정하고 시작한다.** 애그리게이터의 가치는 «최신·교차베뉴·검증된 일정»이다.
   출처와 갱신 주기가 안 정해졌으면 **착수하지 않는다.**
2. **낡은 일정은 자산이 아니라 부채다.** §13·E-E-A-T상 사실오류 표면이 된다.
   유지 못 할 나라는 **열지 않는 것이 옳다.**
3. **재조사 금지 — 먼저 grep.** 위 2-C의 검증은 이미 비용을 치렀다. WORKLOG를 slug로 grep하라
   (CLAUDE.md 세션 시작 §3).
4. **1차 출처만.** §12-B 전면 적용 — 열거·개수는 **Playwright로 DOM을 긁어 직접 센다.**
   WebFetch 요약을 사실로 쓰지 않는다. 공식 페이지가 자기모순이면 [[primary-source-self-contradiction]] 절차.
5. **층을 섞지 마라.** 대회는 레그→이벤트→새틀 3층이다([[data-hierarchy-mixing-error]]).
   층을 넘나들며 집계하면 문장은 참인데 결론이 거짓이 된다.
6. **어휘는 층으로 분리한다.** 핵심 필라 = 미국 기준 표기 유지. 나라별 대회 글 = 현지 어휘
   (`pub poker`는 AU·NZ·UK·IE 말이고 미국에선 거의 안 쓴다 / AU=leagues club · NZ=clubs · UK=casino).
7. **어휘 재베이스 금지** — §1-D에서 실측으로 기각됐다. 되살리지 마라.
8. **문서 간 일관성까지 본다.** 각 문장이 참이어도 문서끼리 모순될 수 있다([[event-guide-consistency-review]]) —
   fact-instance 전수 diff·표 불변식 대조.

---

## 4. 국가·언어 우선순위 (데이터 공급 비용 순)

**우리가 이미 1차 데이터를 가진 순서로 간다.** 볼륨 순이 아니다.

| 순위 | 대상 | 근거 | 데이터 조달 |
|---|---|---|---|
| 1 | **한국 심화** | `/tournaments` 참여율 77.9% · CTR 41% — 이미 1위, 지역별·월별로 더 깊게 | 이미 보유 |
| 2 | **대만(zh-hant)** | r24.6에 **CTR 10.6%** · 「台灣德州撲克比賽2026」 **r8.2** — 유일한 번역본 클릭원 | 일부 보유 |
| 3 | **일본·필리핀·마카오** | APT·APPT·WSOP Asia를 우리가 이미 추적 중 | 대부분 보유 |
| 4 | **호주** | 볼륨 17,720(영어권 3위) · 인컴번트 #3/#8로 **안 굳음** · 베뉴가 **10~15개로 집중** · AEST=KST+1로 근무시간 검증 가능 · `wpt-australia-2026-guide` 기보유 | **신규 조달 필요** |
| 5 | **뉴질랜드 파일럿** | 베뉴가 SkyCity+Christchurch+NPPL **3~4개뿐** — 「슬롯을 실제로 먹을 수 있나」 최소비용 시험대 | 신규(소량) |
| — | **미국·캐나다 비추천** | 볼륨은 있으나 베뉴 밀도가 높아 원격 집계 불가 | 불가 |

**시장 크기 참고**(대회·도시 롱테일 + 상록):
미국 123,740 · 영국 22,250 · **호주 17,720** · 캐나다 14,250 · 인도 8,580 · 필리핀 3,220 · 아일랜드 3,050 · NZ 2,250 · 남아공 1,370.
⚠ 캐나다 상록 0종은 «없다»가 아니라 **측정 실패**(시드 미작동) — 재측정 전 결론 금지.

---

## 5. 착수 순서

1. **이 파일 통독** + `docs/keyword-bank/en-country-strategy.md` 근거 확인
2. **WORKLOG를 slug로 grep** — 이미 손댄 글인지 확인(안 읽어서 2026-08-02에 2건 오판했다)
3. **데이터 공급 확정** — 그 나라 일정의 1차 출처 URL + 갱신 주기를 문서에 적는다. **없으면 중단.**
4. **자동완성 발굴**(`gl=<국가>`) + **DataForSEO `location_code` 볼륨** → 뱅크 파일 작성
   (🔴 `language`는 볼륨을 안 나눈다 · `competition_index`는 광고 경쟁이지 SEO 난이도가 아니다)
5. **SERP 실측**(모바일·해당 location) — 애그리게이터 인컴번트 순위 확인. #1이면 재고, #3 이하면 진입
6. **자사 코퍼스 전수 grep**(카니발) — 기존 대회 글과 겹치는지
7. 작성 → 8. 빌드+게이트(`npm run audit:hard --slug` 🔴 0 · `npm run build`) →
9. **적대검수 4렌즈**(Opus) → 10. 2차 교열 → 11. 배포 → 12. `docs/update-calendar.md`에 시한 등재
13. **관측**: `npm run analytics` 주 1회 + GSC 쿼리 단위로 목표 쿼리 순위 추적

---

## 6. 미해결 · 판단 대기

- 🟠 **`id`·`pt`에 `/tournaments` 허브 라우트 부재** — 대회 글 6편씩 있는데 허브가 없다. 신설할지 판정
- **NZ 파일럿을 실제로 돌릴지** — 8주 관측 후 호주 확대/철수를 가르는 시험대
- **호주 일정 1차 출처 미확정** — Star Sydney·Crown Melbourne/Perth·APL·NPL의 공개 일정 페이지를
  Playwright로 안정 파싱 가능한지 미검증
- **`poker hands` 673,000 vs `poker hand rankings` 49,500(13배)** — EN 필라 제목이 큰 쪽 표기를 안 쓴다.
  🔴 지금 손대지 마라: seoTitle이 CTR 좋은 호기심형이라 §17 「호기심형을 정보형으로 단독 교체 금지」에 걸리고,
  **GSC 스냅샷을 먼저 떠야** 전후 비교가 된다(판단 대기 #5와 같은 이유)
- **경화 vs 이 트랙의 순서** — 사장님 계획은 「언어별 경화 완료 후」인데, `zh-hant/tournaments`가 이미
  CTR 10.6%라 **대만은 경화를 기다리지 않아도 될 가능성**이 있다. 병렬 여부는 사장님 판정

---

## 7. 도구·명령어

| 무엇 | 방법 |
|---|---|
| 관측(추세 누적) | `npm run analytics` → `docs/analytics-log.md` · 기준선 행 **2026-08-26** |
| GSC 쿼리 단위 | `npm run gsc -- --days 28` · 언어별 `npm run gsc:lang` |
| 롱테일 발굴 | 구글 자동완성 `suggestqueries.google.com/complete/search?client=chrome&hl=en&gl=<국가>` |
| 볼륨·SERP | DataForSEO REST 직접(`node .mjs`) — 🔴 **MCP는 40100 재현**, `docs/rakko-playbook.md` 2026-08-27 절 |
| 라이브 검증 | Playwright(BotID 때문에 curl 폴링 금지) |
| 도구 분업 | `docs/rakko-playbook.md` — **발굴·SD=DataForSEO / 볼륨·시계열=라쿠 / lowfruits=SERP약점** |

## 8. 관련 문서

`docs/seo-report-2026-08-28.md`(이 트랙이 나온 분석 회차) · `docs/keyword-bank/en-country-strategy.md`(국가 실측) ·
`docs/update-calendar.md`(시한 정본) · `docs/analytics-log.md`(관측 누적) ·
`REVIEW-PROTOCOL.md`(검수 3층) · `.cursor/rules/posting.mdc`(작성 마스터)
