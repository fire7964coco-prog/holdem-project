# EN 국가 베이스 전략 — 실측 (2026-08-28)

> 발단: 사장님 질문 — *「en으로 미국을 하면 대형사이트를 못 이긴다. 영어권 중 특정 나라를 베이스로
> 롱테일 위주로 포스팅하면 어떨까?」*
> 측정: 구글 자동완성(gl=국가) 발굴 → DataForSEO `search_volume`(location_code) → SERP live(모바일) 실측.
> 🔴 `language`는 볼륨을 안 나눈다 — `location`만 먹는다([[rakko-lowfruits-division-of-labor]] 규율 준수).
> 🔴 `competition_index`는 **광고 경쟁이지 SEO 난이도가 아니다.** 난이도 판정은 SERP 실측으로만 했다.

---

## 1. 전제 검증 — 「미국은 못 이긴다」는 절반만 맞다

| 시장 | 쿼리 | 볼륨/월 | top10 중 대형 미디어 | 실제 top10 점유자 |
|---|---|---:|---:|---|
| 미국 LA | poker tournaments los angeles | 2,400 | **5** | pokeratlas×2·cardplayer·reddit·hendonmob + Bike·Commerce·HPC |
| 미국 베이거스 | poker tournaments las vegas | 8,100 | 2 | **Wynn·Orleans·Caesars·Venetian·South Point·Golden Nugget** |
| 호주 시드니 | poker tournaments sydney | 590 | **1** | Star Poker·NPL·APL·Poker Palace·australianpokerschedule |
| 호주 멜버른 | poker tournaments melbourne | 390 | 2 | Crown Melbourne·APL·australianpokerschedule·PlayLive |
| 아일랜드 더블린 | poker tournaments dublin | 260 | 2 | Irish Poker Tour·pokerdiscover·Dublin Poker Festival |
| 영국 런던 | poker tournaments london | 2,400 | 2 | **pokerdiscover(#1)**·Metropolitan·Hippodrome·Genting |
| 캐나다 에드먼턴 | poker tournaments edmonton | 880 | 4 | Pure Casino×2·RiverCree·GPI |
| NZ 오클랜드 | poker tournaments auckland | 70 | 3 | **SkyCity×3**·Clubs NZ·National Pub Poker League |
| 필리핀 마닐라 | poker tournaments manila | 70 | **1** | PokerStars Live Manila·pokercalendar.asia·APPT·GPI |
| 아시아 | poker tournaments asia | 20 | 1 | **pokercalendar.asia(#1)**·APT·lifeofpoker·somuchpoker |

🔴 **핵심 반전**: top10을 잡고 있는 건 「대형 포커 미디어」가 아니라 **베뉴(카지노·펍리그) 본인들**이다.
미국에서 못 이기는 진짜 이유는 미디어가 아니라 **베뉴가 자기 쿼리를 직접 잡고 그 수가 수백 개**라서다.
그리고 **이 구조는 모든 영어권이 동일하다** — 나라를 바꿔도 경쟁자의 «종류»는 안 바뀐다.
바뀌는 것은 **볼륨과 베뉴 개수**뿐이다.

## 2. 비어 있는 자리 = 「애그리게이터 슬롯」, 시장당 하나씩

베뉴는 **자기 일정만** 안다. 「이 도시의 모든 대회」는 아무 베뉴도 답할 수 없다 — 그 자리가 애그리게이터 몫이다.

| 시장 | 애그리게이터 인컴번트 | 그 순위 |
|---|---|---|
| 영국 런던 | pokerdiscover.com | **#1** (카지노 전부 제침) |
| 아시아 | pokercalendar.asia | **#1** |
| 호주 멜버른 | australianpokerschedule.com.au | #3 |
| 아일랜드 더블린 | pokerdiscover.com | #5 |
| 필리핀 마닐라 | pokercalendar.asia | #6 |
| 호주 시드니 | australianpokerschedule.com.au | #8 |
| 미국 베이거스 | mttdb.com | #10 |

**pokerdiscover가 런던(2,400/월)에서 카지노를 다 제치고 1위**라는 것이 증명이다 —
**애그리게이터는 베뉴를 이길 수 있다.** 그리고 호주는 인컴번트가 #3·#8이라 **슬롯이 아직 안 굳었다.**

## 3. 우리는 이미 그 포맷의 승자다 (자산 확인)

- `/tournaments` — 411세션 · 참여율 **77.9%** · 1:53 · 사이트 최대 유입이자 최고 성적
- 「국내 홀덤 대회 참가 방법」 **1위 · CTR 41.0%** · 「한국 포커 대회 참가 방법」 CTR 41.1%
- 🔴 **`zh-hant/tournaments`가 r24.6인데 CTR 10.6%** — 번역본 132페이지 중 **유일하게 클릭이 나는 자리**이고
  그게 대회 일정이다. **낮은 순위에서도 이 포맷은 팔린다**는 직접 증거.

## 4. 시장 크기 (실측)

| 국가 | 대회·도시 롱테일 | 상록(합법·세금·온라인) | 합계 | 미국 대비 |
|---|---:|---:|---:|---:|
| 미국 | 123,740 | — | 123,740 | 100% |
| 영국 | 17,140 | 5,110 | 22,250 | 18% |
| 캐나다 | 14,250 | 0 ⚠ | 14,250 | 12% |
| **호주** | **11,590** | **6,130** | **17,720** | **14%** |
| 인도 | 8,580 | — | 8,580 | 7% |
| 필리핀 | 2,660 | 560 | 3,220 | 3% |
| 아일랜드 | 2,300 | 750 | 3,050 | 2% |
| 뉴질랜드 | 1,760 | 490 | 2,250 | 2% |
| 남아공 | 1,370 | — | 1,370 | 1% |

⚠ **캐나다 상록 0종은 「없다」가 아니라 「측정 실패」로 본다** — 시드가 안 먹었다.
결론 내기 전 재측정할 것([[review-mechanize-not-repeat]]의 «「없다」 보고 전 탐지방법부터 의심»).

**호주 도시 분산** (롱테일 집합에 유리): 시드니 590 · 멜버른 390 · 브리즈번 260 · 퍼스 170 · 골드코스트 140 ·
poker tournament crown 590 · pub poker tonight near me 390 · poker near me 2,900.

## 5. 🔴 아시아 축 — 볼륨을 과대평가하지 마라

우리가 **유일하게 1차 데이터를 이미 가진** 영어 시장이다(APT·APPT·WSOP·한국·제주 — 레포에 검증 이력 다수).
SERP도 애그리게이터가 1위다. **그러나 볼륨이 작다.**

- `asian poker tour` / `apt poker` = 3,670 (9개국 합) — ⚠ 두 키워드의 국가별 값이 **바이트 단위로 동일**하다
  = 구글 애즈가 근접 변형을 한 버킷으로 묶은 것. 3,670을 두 번 세지 마라.
- 나머지(poker tournaments asia 500 · poker in japan 450 · poker calendar asia 290 · manila 160 …) 합쳐 ~2,000
- 🔴 **`appt` 316,800은 포커가 아니다 — "appointment" 오염이다**(미국 165,000 · 인도 90,500).
  [[keyword-volume-order-of-magnitude-trap]] 그대로. **절대 근거로 쓰지 마라.**

## 6. 진짜 제약은 키워드가 아니라 **데이터 공급**

애그리게이터의 가치는 **최신·교차베뉴·검증된 일정**이다. 이 레포가 이벤트 하나 검증하는 데 드는 비용을
보라 — §12-B 축어 추출·1차 출처 규율·Playwright 라이브 재실측(WORKLOG의 JTBC·APT·EPT·WPT·AJPC 회차).
**한 나라 일정을 상시 유지하는 건 글쓰기가 아니라 운영 약속이다.**
그리고 §13/E-E-A-T 때문에 **낡은 일정은 없는 것보다 나쁘다**(사실오류 표면이 된다).

→ 그래서 선택 변수는 «어느 나라가 매력적인가»가 아니라 **«그 나라 일정을 계속 댈 수 있는가»**다.

## 7. 판정 (우선순위)

**1순위 · 호주 — 조건부 추천**
- 볼륨 17,720(영어권 3위) · 애그리게이터 인컴번트가 **#3/#8로 안 굳었다**
- 🔑 **베뉴가 소수로 집중**: Star Sydney · Crown Melbourne/Perth · APL/NPL 펍리그 = **10~15개 소스면 커버**.
  미국 수백 개와 결정적으로 다르다 — 서울에서 유지 가능한 규모다
- 시차 AEST = KST+1 → **우리 근무시간에 라이브 검증 가능**(§12-B 준수 비용이 낮다)
- 영어 네이티브 → 번역 불필요
- **펍포커 문화가 크다** = 우리 `/pub` 포맷(참여율 87.5% · 3.08PV)과 같은 자산을 재사용

**2순위 · 뉴질랜드 파일럿 — 값싼 시험대**
- 볼륨 2,250으로 작지만 베뉴가 **SkyCity + Christchurch Casino + National Pub Poker League 3~4개**뿐
- 「애그리게이터 슬롯을 실제로 먹을 수 있는가」를 **최소 비용으로 검증**하는 용도.
  성공하면 같은 기계를 호주로 확대. 실패하면 호주에 큰돈을 안 쓰고 접는다

**3순위 · 아시아 영어 — 데이터는 있으나 볼륨이 작다**
- 신규 데이터 조달 비용 0(이미 하고 있다) · SERP도 애그리게이터가 이김
- 다만 ~5,700 수준이라 **[[low-volume-longtail-aggregation]] 방식**(리치글에 FAQ/H2로 흡수)이지
  단독 트랙으로 세울 규모는 아니다

**비추천 · 미국·캐나다** — 볼륨은 있으나 베뉴 밀도가 높아 원격 집계가 불가능

## 8. 값싼 대안 — 상록 축 (유지보수 0)

일정과 달리 **썩지 않는다**: 호주 6,130 / 영국 5,110 / 아일랜드 750 / 필리핀 560 / NZ 490.
예: `is online poker legal in australia`(110) · `is gambling legal in australia`(210) ·
`are poker winnings taxable uk`(30) · `do you pay tax on poker winnings uk`(20) · `poker rules nz`(10).

🔴 **두 가지 함정을 먼저 통과해야 한다**:
1. **의도 불일치** — 이 축의 최다 볼륨 `online poker australia`(1,900) · `poker uk sites`(1,600)는
   사실상 **「어디서 칠까」 의도**다. 「온라인 홀덤사이트」에서 배운 함정과 같다
   ([[holdem-site-keyword-intent-verdict]]) — **채택 전 SERP 실측 필수.**
2. **톤** — 합법성 글은 [[legality-info-not-judgment]] 규율 적용 대상이다.
   판정·처벌표가 아니라 정보 제공이고, 부정형 결론으로 끝내지 않는다.

## 9. 착수한다면 검증 순서 (미착수 — 지시 대기)

1. NZ 파일럿 1편(`/en/` 안에 오클랜드·크라이스트처치 일정 통합 페이지)으로 **슬롯 획득 가능성만** 시험
2. 8주 관측 — `npm run analytics` + GSC 쿼리 단위로 `poker tournaments auckland/nz` 순위 추적
3. 순위가 top20 안에 들면 호주로 확대, 안 들면 **상록 축으로 전환**하고 일정 트랙은 접는다
4. 🔴 어느 쪽이든 **일정 데이터의 1차 출처와 갱신 주기를 먼저 정하고 시작**한다.
   출처가 없으면 시작하지 않는다 — 낡은 일정은 자산이 아니라 부채다
