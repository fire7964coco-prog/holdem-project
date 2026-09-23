import type { Post } from "../posts";

/**
 * GOP 인천 II 2026 (Gods of Poker · The Labyrinth Trail) 가이드 — 2026-09-23 신규.
 *
 * 🔴 사실 정본 = `docs/tournament-factsheets/2026-10-kr-apl-wpt-gop.md` §C.
 *   godsofpoker.com/series/incheon-2026-ii(09-23 정상 로드 — 08-31엔 리다이렉트였다) ·
 *   메인 #32 이벤트 페이지 · p-city.com 공지 N_SEQ=5301을 2026-09-23 Playwright로 확인했다.
 * 🔴 이벤트 수는 공식 안에서 엇갈린다 — 헤더 「73 Total Events」 vs 일정표 번호 #1~#76(결번 0) + #0.
 *   한쪽으로 단정하지 말고 둘 다 적는다.
 * 🔴 «GOP» 단독 표기는 검색에서 군 GOP(일반전초)와 섞인다(자동완성 실측) → 제목·첫 문단은 «Gods of Poker(GOP)».
 * 🔴 1회차 우승자 Kyung Min Lee는 한글 표기를 확인하지 못했다 — 음역하지 마라.
 * 🔴 쓰지 않은 값: 온라인 예선(09-23 공지 없음) · GOP Reward 50% 할인(인천 II 적용 불명) ·
 *   자기부상열차(운행 미확인) · 2터미널 셔틀 시각(공식 페이지에서 재확인 못 함) · WPT와의 교차 셔틀(근거 없음).
 */
export const POST: Post = {
  slug: "gop-incheon-2026-ii-guide",
  title: "Gods of Poker 인천 II 2026 — 일정·참가 자격",
  seoTitle: "6억 보장 — Gods of Poker 인천 II 일정",
  desc: "Gods of Poker(GOP) 인천 II가 10월 30일 파라다이스시티에서 열립니다. 메인 143만원·6억 보장, 새틀라이트, 내국인 입장 가능 여부까지 확인했습니다.",
  tldr: "Gods of Poker(GOP) 인천 II는 2026년 10월 30일~11월 8일 인천 영종도 파라다이스 시티에서 열리며, 메인이벤트(#32)는 11월 3~8일·바이인 143만원·보장 6억원입니다. 파라다이스 카지노는 만 19세 이상 외국인과 해외 영주권을 가진 한국 국적자만 이용할 수 있어, 국내 거주 한국 국적자는 참가할 수 없습니다.",
  category: "토너먼트",
  date: "2026-09-23",
  updated: "2026-09-23",
  readTime: "9분",
  emoji: "⚡",
  layout: "tournament-guide",
  tags: ["GOP 인천", "Gods of Poker 인천", "GOP 인천 II", "파라다이스시티 카지노", "파라다이스시티 카지노 내국인", "홀덤 대회 일정", "GOP 메인이벤트"],
  image: "/images/gop-incheon-2026-ii-guide-hero.webp",
  imageAlt: "Gods of Poker 인천 II 2026 정보 카드 — 10월 30일~11월 8일 파라다이스 시티, 메인 143만원·6억 보장",
  keepImagesInBody: true,
  event: {
    name: "Gods of Poker 인천 2026 II (The Labyrinth Trail)",
    startDate: "2026-10-30",
    endDate: "2026-11-08",
    locationName: "파라다이스 시티 (Paradise City)",
    locationAddress: "인천광역시 영종구 영종해안남로321번길 186",
    lowPriceKRW: 330000,
    highPriceKRW: 14700000,
    offerUrl: "https://godsofpoker.com/series/incheon-2026-ii",
    organizerName: "Gods of Poker",
    organizerUrl: "https://godsofpoker.com",
  },
  content: `
![Gods of Poker 인천 II 2026 정보 카드 — 10월 30일~11월 8일 파라다이스 시티, 메인 143만원·6억 보장](/images/gop-incheon-2026-ii-guide-hero.webp)

**Gods of Poker(GOP)**가 올해 두 번째로 인천 파라다이스 시티에 옵니다. 5월 1회차 메인이벤트는 356엔트리가 모였고, 이번 2회차 «The Labyrinth Trail»은 메인 보장을 **6억원**으로 걸었습니다.

대회를 준비할 때 제가 가장 먼저 보는 건 메인 플라이트가 몇 번 열리고 레벨이 몇 분인지입니다. 이 글은 그 구조와 참가 자격, 새틀라이트, 가는 길을 2026년 9월 23일에 공식 일정표를 직접 긁어 확인한 값으로 정리했습니다. 대회에 나가는 일반적인 경로는 [홀덤 대회 참가 방법](/blog/holdem-tournament-how-to-enter)에 따로 정리해 두었습니다.

### 이 글 핵심 요약
:::stripe
10/30~11/8 | 일정 (10일)
6억원 | 메인 보장
143만원 | 메인 바이인
33만원~ | 최저 바이인
외국인 전용 | 파라다이스 카지노
:::

---

> **바로 답**
> GOP 인천 II는 **2026년 10월 30일~11월 8일, 인천 영종도 파라다이스 시티**에서 열립니다. 메인이벤트(#32)는 **11월 3~8일 · 바이인 143만원 · 보장 6억원 · 시작 스택 120,000**입니다. 바이인은 **33만원부터 1,470만원까지**입니다. 파라다이스 카지노는 **만 19세 이상 외국인과 해외 영주권을 가진 한국 국적자**만 이용할 수 있어, 국내 거주 한국 국적자는 참가할 수 없습니다.

---

## 한국 사람도 GOP 인천에 참가할 수 있나요?

<div style="background:rgba(239,68,68,0.08);border:2px solid rgba(239,68,68,0.45);border-radius:14px;padding:20px 24px;margin:24px 0">
<div style="font-size:15px;font-weight:800;color:#ef4444;margin-bottom:10px">한국 국적자는 입장 불가 (해외 영주권자 예외)</div>
<p style="font-size:14px;color:hsl(var(--foreground));line-height:1.7;margin:0 0 12px">파라다이스 시티 카지노는 <strong>외국인 전용</strong>입니다. GOP 인천 II도 이곳에서 열립니다.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
<div style="padding:10px 14px;background:rgba(239,68,68,0.10);border-radius:8px;border:1px solid rgba(239,68,68,0.25)">
<div style="font-weight:700;color:#ef4444;margin-bottom:4px">입장 불가</div>
<div style="color:hsl(var(--muted-foreground))">대한민국 국적자 (해외 거주라도 영주권이 없으면 불가)</div>
</div>
<div style="padding:10px 14px;background:rgba(34,197,94,0.07);border-radius:8px;border:1px solid rgba(34,197,94,0.25)">
<div style="font-weight:700;color:#22c55e;margin-bottom:4px">입장 가능</div>
<div style="color:hsl(var(--muted-foreground))">만 19세 이상 외국인 / 해외 영주권 소지 한국 국적자</div>
</div>
</div>
</div>
</div>

**해외 영주권(거주증)이 없는 한국 국적자는 참가할 수 없습니다.** 파라다이스 시티 공식 공지가 이용 대상을 이렇게 적고 있습니다. 「이용대상: 여권을 소지한 만 19세 이상 외국인 및 대한민국 국적의 해외 영주권(거주증) 소지자」.

기준은 «어디 사느냐»가 아니라 해외 영주권(거주증)이 있느냐입니다. 영주권이 있다면 입장할 수 있습니다. 입장할 때 확인하는 서류는 다음과 같습니다.

| 구분 | 필요 서류 |
|---|---|
| 한국 방문 외국인 | 여권 |
| 한국 거주 외국인 | 여권 또는 외국인 등록증 |
| 해외 영주권(거주증) 소지자 | ① 여권 ② 영주권 카드(거주증) ③ 방문일 기준 7일 내 발급 주민등록표 초본(재외국인, 말소자 표기) |

영주권자는 **초본을 방문 7일 안에 새로 떼야** 한다는 점을 놓치기 쉽습니다. 한국에 들어오기 전에 발급 방법을 미리 알아 두세요. 같은 파라다이스 시티에서 열린 [APT 인천 2026](/blog/apt-incheon-2026-guide "thumb:/images/apt-incheon-2026-guide-hero.webp")도 같은 규정을 따랐습니다.

국내 거주자가 같은 가을에 칠 수 있는 대회를 찾는다면, 한 주 먼저 서울에서 열리는 [APL 서울 2026](/blog/apl-seoul-2026-guide)이 카지노가 아닌 곳에서 열립니다.

---

## GOP 인천 II는 언제, 어디서 열리나요?

**2026년 10월 30일(금)부터 11월 8일(일)까지 10일간, 인천 영종도 파라다이스 시티**에서 열립니다. 시리즈 이름은 «The Labyrinth Trail»입니다.

| 항목 | 내용 |
|---|---|
| 대회명 | GOP INCHEON 2026 II — The Labyrinth Trail |
| 일정 | 2026년 10월 30일(금) ~ 11월 8일(일) |
| 메인이벤트 | #32 GOP Main Event · 11월 3~8일 |
| 장소 | 파라다이스 시티 (인천광역시 영종구 영종해안남로321번길 186) |
| 바이인 범위 | 33만원 ~ 1,470만원 |
| 주최 | Gods of Poker |

**이벤트 수는 공식 안에서 표기가 두 가지입니다.** 시리즈 페이지 헤더는 「73 Total Events」인데, 일정표에는 이벤트 번호가 **#1부터 #76까지 빠짐없이** 붙어 있고 인플루언서 팀 프리롤인 #0도 따로 있습니다. 어느 쪽을 세든 **70개가 넘는 이벤트가 열흘 동안 열린다**는 점은 같습니다.

---

## 메인이벤트 구조는 어떻게 되나요?

**바이인 143만원(상금풀 130만원 + 수수료 13만원), 보장 6억원, 시작 스택 120,000**입니다. Day 1이 다섯 번 열립니다.

| 날짜 | 일정 | 시작 | 레벨 |
|---|---|---|---|
| 11/3(화) | Flight A | 12:30 | 40분 |
| 11/4(수) | Flight B | 12:30 | 40분 |
| 11/5(목) | Flight C | 12:30 | 40분 |
| 11/6(금) | Flight D | 12:30 | 30분 |
| 11/6(금) | Flight E | 18:00 | 20분 |
| 11/7(토) | Day 2 | 12:30 | 60분 |
| 11/8(일) | Final Day | 12:30 | 60분 |

이 대회의 핵심은 **각 플라이트가 «입상권까지» 진행된다**는 점입니다. 공식 규정 원문은 「Each starting flight plays down to approximately 13.5% of the field (In the Money)」입니다. 플라이트에서 살아남으면 곧바로 상금권이고, 모든 플라이트의 입상자가 Day 2에서 합쳐져 파이널 테이블 9명까지(엔트리 수에 따라 자정 무렵까지) 진행합니다. Day 2는 블라인드 8,000-16,000(빅블라인드 앤티)에서 다시 시작합니다.

플라이트 A~C는 40분 레벨이고 **Day 1 마지막 날인 11/6에는 D가 30분, E가 20분**으로 빨라집니다. 여러 번 도전할 계획이면 앞쪽 플라이트부터 들어가는 편이 구조상 여유가 있습니다. 상금풀의 4%는 스태프 몫으로 배정된다고 공식이 밝혀 두었습니다(「4% of the prize pool is allocated for staffing」).

---

## 이벤트와 바이인은 얼마부터 얼마까지인가요?

**가장 싼 이벤트는 33만원, 가장 비싼 이벤트는 1,470만원(#34 Demigods Challenge)입니다.** 메인 말고 보장 상금이 걸린 이벤트는 개막일의 #1 GOP Olympians 하나입니다.

| 이벤트 | 날짜 | 바이인 | 비고 |
|---|---|---:|---|
| #1 GOP Olympians | 10/30~31 | 44만원 | 4천만원 보장 · 플라이트 4번 |
| 하이퍼 터보·여성 이벤트·메인 새틀라이트 | 기간 중 | 33만원 | 최저가 10개 (새틀라이트 3개 포함) |
| #65 Mini Main | 11/7~8 | 77만원 | 플라이트 4번 |
| #32 GOP Main Event | 11/3~8 | 143만원 | 6억원 보장 |
| #3 Titan Stack High Roller | 10/30~ | 550만원 | — |
| #18 GOP High Roller | 11/1~ | 660만원 | — |
| #43 GOP Super High Roller | 11/4~ | 1,060만원 | — |
| #34 Demigods Challenge | 11/3 | 1,470만원 | 최고가 |

여성 전용 «Aphrodite's Event»가 네 번(#9·#19·#59·#67) 모두 33만원으로 열리고, NLH 말고도 PLO·5카드 PLO·빅오·트리플 드로 믹스 같은 종목이 많습니다. 바이인을 어느 수준으로 잡을지는 [홀덤 대회 바이인·참가비](/blog/holdem-tournament-buy-in-cost)에서 단계별 기준을 볼 수 있습니다.

---

## 새틀라이트로 메인 시트를 딸 수 있나요?

**네, 현장에서 메인행 새틀라이트가 세 번 열리고 바이인은 각각 33만원입니다.** 공식 이벤트명에 붙은 「Win Your Seat at 200,000」은 **칩 200,000을 모으면 시트를 받는** 방식으로 읽힙니다.

| 새틀라이트 | 날짜·시작 | 바이인 | 목표 이벤트 |
|---|---|---:|---|
| #38 Satellite to GOP Main Event | 11/3(화) 19:00 | 33만원 | 메인 |
| #45 Satellite to GOP Main Event | 11/4(수) 19:00 | 33만원 | 메인 |
| #53 Last Chance Satellite | 11/5(목) 19:00 | 33만원 | 메인 |
| #11 Satellite to GOP High Roller | 10/31(토) 17:00 | 110만원 | 하이롤러 |
| #27 Satellite to Demigods | 11/2(월) 17:00 | 242만원 | Demigods |
| #36 Satellite to GOP Super High Roller | 11/3(화) 17:00 | 176만원 | 슈퍼 하이롤러 |

메인행 새틀라이트는 모두 저녁 7시라, **그날 밤 딴 시트로 다음 날 낮 플라이트에 들어가는** 동선이 됩니다. 11/5 밤 Last Chance에서 따면 11/6 Flight D·E가 남은 기회입니다.

**온라인 예선은 9월 23일 기준 공지되지 않았습니다.** GOP 시리즈 페이지의 Updates 탭도 「Stay tuned for more news.」만 적혀 있습니다.

---

## 등록은 어떻게 하나요?

**GOP 공식 사이트에서 계정을 만들고 본인 인증을 마친 뒤, 현장에서 등록합니다.** 공식 안내 문구는 「All players must be verified before taking their seat」입니다. 이용약관에는 KHold'em 등록·기록 절차를 따라야 한다는 조항도 있습니다.

:::steps
GOP 계정 | godsofpoker.com에서 가입하고 본인 인증을 끝낸다
카지노 입장 | 파라다이스 카지노 입구에서 여권(영주권자는 서류 3종) 확인
현장 등록 | 원하는 이벤트를 현장에서 등록 · 바이인은 원화 표기
문의 | registrations@godsofpoker.com
:::

---

## 파라다이스 시티는 어떻게 가나요?

**인천공항 1터미널 1층 3C 정류장에서 무료 순환 셔틀버스가 20분 간격으로 다닙니다(05:10~23:10).** 셔틀은 파라다이스시티 → 하얏트 리젠시 → 1터미널을 도는 순환 노선입니다. 2터미널에서 오는 노선과 대중교통 안내는 [파라다이스시티 오시는 길](https://www.p-city.com/front/contents/pcity/location?Type=LOCATION)에 있습니다. 운행 시각은 도로 사정 등으로 바뀔 수 있으니 도착 전날 공식 페이지를 한 번 더 보세요.

GOP가 따로 내건 공식 호텔 패키지는 확인되지 않았습니다(9월 23일 기준).

---

## 5월 1회차는 어땠나요?

**GOP 인천 2026 1회차 «The Prophecy Unfolds»는 5월 15~24일 같은 파라다이스 시티에서 83개 이벤트로 열렸습니다.** 메인이벤트는 보장 7억원에 **356엔트리**가 모였고 **51명**이 입상했습니다. 우승은 **Kyung Min Lee**로, 헤즈업에서 Chien Te Lee를 꺾고 **1억 4,828만원**을 가져갔습니다(GOP 공식 기사, 5월 24일).

메인 보장은 1회차 7억원, 이번 2회차 6억원입니다.

---

## 같은 주에 영종도에서 열리는 다른 대회는?

**거의 같은 기간(WPT 서울 10월 30일~11월 9일), 영종도의 인스파이어 리조트에서 WPT 서울이 열립니다.** 장소가 다른 두 대회입니다. WPT 서울 메인은 11월 5~9일, 바이인 175만원·보장 10억원이고, 인스파이어 카지노도 외국인 전용입니다. 두 대회를 이어서 치려는 사람은 GOP 메인(11/3~8)과 WPT 메인 Day 1(11/5~7)이 겹치는 날짜를 먼저 맞춰 보세요. 자세한 내용은 [WPT 서울 2026 가이드](/blog/wpt-seoul-2026-guide)에 정리했습니다.

:::readnext[이어서 읽기]
/blog/wpt-seoul-2026-guide | WPT 서울 2026 — 참가 자격·일정·예선 경로 | /images/wpt-seoul-2026-guide-hero.webp
/blog/apt-incheon-2026-guide | APT 인천 2026 결과 — 파라다이스 시티 대회 기록 | /images/apt-incheon-2026-guide-hero.webp
:::

---

## FAQ

**Q. GOP 인천 II 2026은 언제 열리나요?**

A. 2026년 10월 30일부터 11월 8일까지 인천 영종도 파라다이스 시티에서 열립니다. 메인이벤트(#32)는 11월 3~8일입니다.

**Q. 파라다이스시티 카지노에 내국인이 들어갈 수 있나요?**

A. 해외 영주권(거주증)이 없는 한국 국적자는 들어갈 수 없습니다. 해외에 살고 있어도 마찬가지입니다. 파라다이스 시티 공지 기준 이용 대상은 여권을 가진 만 19세 이상 외국인과 해외 영주권(거주증)을 가진 한국 국적자입니다.

**Q. GOP 인천 II 메인이벤트 바이인은 얼마인가요?**

A. 143만원(상금풀 130만원 + 수수료 13만원)이고 보장 상금은 6억원입니다. 시작 스택은 120,000이며 플라이트 A~E 중 하나로 들어갑니다.

**Q. GOP 인천 II 이벤트는 몇 개인가요?**

A. 공식 시리즈 페이지 헤더는 73개로 적고 있고, 일정표에는 #1부터 #76까지 이벤트 번호가 붙어 있습니다(#0 프리롤 별도). 표기가 두 가지이니 참가할 이벤트는 번호로 확인하세요.

**Q. GOP 인천 II 온라인 예선이 있나요?**

A. 9월 23일 기준 온라인 예선은 공지되지 않았습니다. 현장에서 메인행 새틀라이트(33만원)가 11월 3·4·5일 저녁 7시에 열립니다.

**Q. GOP 인천 II와 WPT 서울은 같은 대회인가요?**

A. 아닙니다. 기간이 거의 겹칠 뿐 GOP 인천 II는 파라다이스 시티, WPT 서울은 인스파이어 리조트에서 따로 열리는 대회입니다.

---

## 출처

이 글의 일정·바이인·구조·입장 규정은 아래 1차 출처를 **2026년 9월 23일**에 직접 열어 확인했습니다.

- [GOP INCHEON 2026 II — 공식 시리즈 페이지](https://godsofpoker.com/series/incheon-2026-ii) — 일정, 「73 Total Events」, 메인 6억 보장, 이벤트 #0~#76 전체 일정표(바이인·플라이트)
- [GOP Main Event (#32) 상세](https://godsofpoker.com/event/6a2f7822-9e21-4d3a-8447-58152b467a1f) — 바이인 구성, 시작 스택, 플라이트별 약 13.5% 입상, Day 2 재개 레벨, 스태프 4%
- [파라다이스시티 공지 — 카지노 이용 대상 및 지참 서류](https://www.p-city.com/front/notice/detail?N_SEQ=5301) — 이용 대상, 입장 확인 서류
- [파라다이스시티 오시는 길](https://www.p-city.com/front/contents/pcity/location?Type=LOCATION) — 공항 순환 셔틀
- [GOP 인천 2026 (1회차) 시리즈 페이지](https://godsofpoker.com/series/incheon-2026) · [1회차 하이라이트 기사](https://godsofpoker.com/news/gods-of-poker-incheon-festival-highlights-hanh-tran-wins-pos-title) — 5월 15~24일, 83개 이벤트, 메인 356엔트리·51명 입상·우승 상금
- 관광진흥법 제28조 제1항 제4호(카지노 사업자의 내국인 입장 제한, 「해외이주법」에 따른 해외이주자 제외) — [국가법령정보센터](https://www.law.go.kr/)

> 일정·바이인은 주최 측 사정으로 바뀔 수 있습니다. 출발 전에 공식 시리즈 페이지에서 다시 확인하세요.

---

## 관련 글

- [WPT 서울 2026 — 참가 자격·일정·예선 경로](/blog/wpt-seoul-2026-guide)
- [APL 서울 2026 — 참가 방법·일정·SEAT 얻는 곳](/blog/apl-seoul-2026-guide)
- [APT 인천 2026 결과 — 파라다이스 시티 대회 기록](/blog/apt-incheon-2026-guide)
- [2026 홀덤 대회 일정 전체](/tournaments)
`,
};

export default POST;
