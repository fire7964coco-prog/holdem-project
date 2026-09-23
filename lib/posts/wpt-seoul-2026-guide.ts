import type { Post } from "../posts";

/**
 * WPT 서울 2026 (INSPIRE) 참가 가이드 — 2026-09-23 신규.
 *
 * 🔴 사실 정본 = `docs/tournament-factsheets/2026-10-kr-apl-wpt-gop.md` §B.
 *   wptseoul.com(주최 Khartes) · worldpokertour.com 이벤트 상세 · 선수 가이드 PDF(07-21·08-26) ·
 *   inspireresorts.com을 2026-09-23에 Playwright로 열어 확인했다.
 * 🔴 이벤트 수는 **45**다. 7월 보도자료(WPT·PR Times)의 「46」은 낡은 값 — 공식 사이트·가이드 두 판·
 *   일정표 번호(#1~#45 결번 0)가 전부 45.
 * 🔴 «한국 첫 WPT»라고 쓰지 마라 — 제주 WPT Korea가 2023·2024년 3월·2024년 11월에 열렸다(WPT 보도 2024-10-28).
 * 🔴 쓰지 않은 값: 테이블 수(70/80/65 출처 충돌) · 층수(2층/3층 충돌) · 공식 사이트 카드의 반올림 표기
 *   (₩1.8M 등) · 셔틀 시각(공식 표의 시각은 «리조트 → 공항» 방향이라 공항 출발 시각으로 쓰면 틀린다) ·
 *   결제 통화·송금 불가(09-23 재확인 시 공식 본문에서 못 찾음 — FAQ는 «등록 세부는 추후 게시»).
 * 🔴 합법성: 판정하지 않는다(posting.mdc). «외국인 전용 카지노 안 포커룸 → 해외이주 서류 없는 한국 국적자 입장 불가»는
 *   입장 실무 정보로만 쓰고, 법 조문은 출처 섹션에만 둔다.
 */
export const POST: Post = {
  slug: "wpt-seoul-2026-guide",
  title: "WPT 서울 2026 — 참가 자격·일정·예선 경로",
  seoTitle: "내국인 불가 — WPT Seoul 2026 인스파이어 일정",
  desc: "WPT 서울 2026은 외국인 전용 인스파이어 카지노 안 포커룸에서 열립니다. 10월 30일~11월 9일 일정, 메인 10억 보장, 누가 참가할 수 있는지 확인했습니다.",
  tldr: "WPT 서울 2026은 10월 30일~11월 9일 인천 영종도 인스파이어의 YY Poker Club에서 열리며, 이벤트 45개 가운데 메인이벤트는 바이인 175만원·보장 10억원입니다. 포커룸이 외국인 전용 카지노 안에 있어 한국 국적자는 해외 영주권(해외이주) 서류가 없으면 입장할 수 없고, 외국인과 서류를 갖춘 해외이주자는 참가할 수 있습니다.",
  category: "토너먼트",
  date: "2026-09-23",
  updated: "2026-09-23",
  readTime: "10분",
  emoji: "🌟",
  layout: "tournament-guide",
  tags: ["WPT 서울", "WPT Seoul 2026", "인스파이어 카지노", "WPT 인스파이어", "인스파이어 카지노 내국인", "WPT Global 예선", "홀덤 대회 일정"],
  image: "/images/wpt-seoul-2026-guide-hero.webp",
  imageAlt: "WPT 서울 2026 정보 카드 — 10월 30일~11월 9일 인스파이어, 메인 175만원·10억 보장, 외국인 전용 카지노",
  keepImagesInBody: true,
  event: {
    name: "WPT 서울 2026 (WPT Seoul 2026)",
    startDate: "2026-10-30",
    endDate: "2026-11-09",
    locationName: "인스파이어 엔터테인먼트 리조트 YY Poker Club",
    locationAddress: "인천광역시 영종구 공항문화로 127",
    lowPriceKRW: 300000,
    highPriceKRW: 8000000,
    offerUrl: "https://wptseoul.com/",
    organizerName: "World Poker Tour · Khartes",
    organizerUrl: "https://wptseoul.com/",
  },
  content: `
![WPT 서울 2026 정보 카드 — 10월 30일~11월 9일 인스파이어, 메인 175만원·10억 보장, 외국인 전용 카지노](/images/wpt-seoul-2026-guide-hero.webp)

WPT 서울 이야기를 하면 한국 플레이어들이 제일 먼저 묻는 건 상금이 아닙니다. «우리도 칠 수 있어?»입니다. 답부터 하면, **해외 영주권(해외이주) 서류가 없는 한국 국적자는 이 대회 테이블에 앉을 수 없습니다.** 포커룸이 외국인 전용 카지노 안에 있기 때문입니다.

그래도 이 글을 끝까지 읽을 이유는 있습니다. 해외 영주권이 있는 교포, 외국인 친구의 대회 일정을 함께 짜는 사람, 11월 영종도 일정을 짜는 사람에게 필요한 것을 공식 자료에서 전부 확인해 모았습니다(2026년 9월 23일 기준). 대회에 나가는 일반적인 경로는 [홀덤 대회 참가 방법](/blog/holdem-tournament-how-to-enter)에 따로 정리해 두었습니다.

### 이 글 핵심 요약
:::stripe
10/30~11/9 | 일정 (11일)
45개 | 이벤트 수
175만원 | 메인 바이인
10억원 | 메인 보장
외국인 전용 | 카지노 안 포커룸
:::

---

> **바로 답**
> WPT 서울 2026은 **10월 30일~11월 9일** 인천 영종도 **인스파이어 엔터테인먼트 리조트의 YY Poker Club**에서 열립니다. 이벤트는 **45개**, 메인이벤트(#27)는 **11월 5~9일 · 바이인 175만원 · 보장 10억원**입니다. 포커룸이 **외국인 전용 인스파이어 카지노 안**에 있어, **한국 국적자는 해외 영주권(해외이주) 서류가 없으면 입장할 수 없습니다.** 외국인과 서류를 갖춘 해외이주자는 참가할 수 있습니다.

---

## 한국 사람도 WPT 서울에 참가할 수 있나요?

<div style="background:rgba(239,68,68,0.08);border:2px solid rgba(239,68,68,0.45);border-radius:14px;padding:20px 24px;margin:24px 0">
<div style="font-size:15px;font-weight:800;color:#ef4444;margin-bottom:10px">한국 국적자는 입장 불가 (해외이주자 예외)</div>
<p style="font-size:14px;color:hsl(var(--foreground));line-height:1.7;margin:0 0 12px">인스파이어 카지노는 <strong>외국인 전용 카지노</strong>이고, WPT 서울이 열리는 YY Poker Club은 그 카지노 안의 포커룸입니다.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
<div style="padding:10px 14px;background:rgba(239,68,68,0.10);border-radius:8px;border:1px solid rgba(239,68,68,0.25)">
<div style="font-weight:700;color:#ef4444;margin-bottom:4px">입장 불가</div>
<div style="color:hsl(var(--muted-foreground))">대한민국 국적자 (해외 거주라도 해외이주 서류가 없으면 불가)</div>
</div>
<div style="padding:10px 14px;background:rgba(34,197,94,0.07);border-radius:8px;border:1px solid rgba(34,197,94,0.25)">
<div style="font-weight:700;color:#22c55e;margin-bottom:4px">입장 가능</div>
<div style="color:hsl(var(--muted-foreground))">외국인(외국 국적자) / 서류를 갖춘 해외이주자</div>
</div>
</div>
</div>
</div>

**WPT 서울은 외국인 전용 카지노 안에서 열려, 해외이주 서류가 없는 한국 국적자는 들어갈 수 없습니다.** 인스파이어 공식 사이트가 카지노를 「한국 최대 규모의 외국인 전용 인스파이어 카지노」로 소개하고, 주최 측 사이트는 YY Poker Club을 「the largest card room within a casino in Asia」, 즉 **카지노 안의 카드룸**이라고 적었습니다.

주최 측 안내도 같은 방향입니다. 「Before entering the INSPIRE Casino entrance, all guests must complete the registration form below」 — 카지노 입구를 지나야 포커룸에 갑니다. 대회 등록에는 **여권과 인스파이어 멤버십 카드**가 필요합니다. 한국인 불가를 따로 적은 공식 문장은 없지만, 입장 절차 자체가 외국인 전용 카지노의 절차입니다.

**해외이주자(해외 영주권자)는 예외입니다.** 기준은 «어디 사느냐»가 아니라 해외이주 서류가 있느냐입니다. 해외에 살아도 영주권·이주 서류가 없으면 입장할 수 없습니다. 인스파이어가 공개한 입장 서류는 다음과 같습니다.

| 구분 | 필요 서류 |
|---|---|
| 외국인 | 여권 |
| 해외이주자 | 여권 + 영주자격 증명서 + 주민등록표 초본·등본·말소자 초본 중 1개 |

해외이주자의 초본·등본에는 「재외국민」, 「현지이주말소」, 「이민출국말소」 중 하나가 반드시 찍혀 있어야 하고, **제출일 기준 7일 이내에 발급된 것**이어야 합니다. 영주 국가에 따라 추가 서류를 요청받을 수 있으니 출국 전 입장 데스크에 먼저 물어보세요.

국내 거주자가 같은 시기에 칠 수 있는 대회를 찾는다면, 한 주 먼저 서울에서 열리는 [APL 서울 2026](/blog/apl-seoul-2026-guide)이 카지노가 아닌 곳에서 열립니다.

---

## WPT 서울 2026은 언제, 어디서 열리나요?

**2026년 10월 30일(금)부터 11월 9일(월)까지 11일간, 인천 영종도 인스파이어 엔터테인먼트 리조트**에서 열립니다. 메인이벤트인 챔피언십은 11월 5~9일입니다.

| 항목 | 내용 |
|---|---|
| 대회명 | WPT Seoul 2026 |
| 일정 | 2026년 10월 30일(금) ~ 11월 9일(월) |
| 메인이벤트 | #27 WPT Seoul INSPIRE Championship · 11월 5~9일 |
| 장소 | YY Poker Club, 인스파이어 엔터테인먼트 리조트 |
| 주소 | 인천광역시 영종구 공항문화로 127 |
| 이벤트 수 | 45개 |
| 바이인 범위 | 30만원 ~ 800만원 |

**이벤트 수는 45개입니다.** 7월 보도자료에는 «46개»라고 나왔지만, 공식 사이트(「11 days, 45 events」)와 선수 가이드 두 판, 일정표의 이벤트 번호(#1~#45)가 모두 45로 맞습니다. 옛 숫자를 보고 헷갈릴 필요는 없습니다.

---

## WPT 공식 투어 대회인가요? — 알고 가야 할 한 줄

**아니요. WPT 서울은 WPT 정규 투어가 아니라 «스페셜 이벤트»입니다.** WPT 공식 이벤트 페이지에 이렇게 적혀 있습니다. 「WPT Seoul is not considered an official event of the World Poker Tour and players will not accrue WPT Player-of-the-Year points」. 올해의 선수(POY) 포인트가 쌓이지 않는다는 뜻입니다. 주최는 Khartes입니다(WPT 표현 그대로 「special event presented by Khartes」).

WPT 브랜드가 한국에 처음 오는 것도 아닙니다. 제주에서 열린 **WPT Korea는 2024년 11월 대회가 세 번째**였습니다(WPT 2024년 10월 보도자료: 「Nov. will mark the third WPT Korea event in three years」). WPT 서울은 **인스파이어에서 처음 열리는 WPT 대회**입니다.

메인 **1위 상금에는 2026 WPT 월드챔피언십 참가권($10,400)이 포함**됩니다. 선수 가이드 각주 원문은 「1st Place Includes A 2026 $10,400 World Championship Entry Taken From Prizepool」입니다. 상금과 별도인 보너스가 아니라, 1위 상금의 일부를 라스베이거스 월드챔피언십 참가권으로 받는 방식입니다.

---

## 메인이벤트 구조는 어떻게 되나요?

**바이인 175만원(상금풀 157만 5천원 + 수수료 17만 5천원), 보장 10억원, 시작 스택 40,000**입니다. Day 1이 네 번(1A~1D) 열립니다.

| 날짜 | 일정 | 시작 |
|---|---|---|
| 11/5(목) | Day 1A | 11:30 |
| 11/6(금) | Day 1B | 11:30 |
| 11/7(토) | Day 1C | 11:30 |
| 11/7(토) | Day 1D | 18:00 |
| 11/8(일) | Day 2 | 11:30 |
| 11/9(월) | Final Day | 11:30 |

| 규정 | 내용 |
|---|---|
| 레벨 | Day 1은 40분 · Day 2·Final Day는 60분 · 헤즈업부터 30분 |
| 등록 마감 | 각 Day 1의 **Level 10 시작 시** |
| 입상 | 엔트리 **8명 중 1명**(약 12.5%) |
| 1위 상금 | 2026 WPT 월드챔피언십 참가권($10,400) 포함 · 상금풀에서 차감 |

선수 가이드 일정표를 보면 **1D만 저녁 6시 시작이고 레벨이 20분**으로 적혀 있습니다(WPT 이벤트 페이지는 Day 1 레벨을 40분으로 안내 — 현장 공지를 확인하세요). 20분이 맞다면 나머지 세 플라이트보다 두 배 빨리 진행되니, 같은 40,000 스택이라도 운영 여유가 다릅니다. 시간이 된다면 1A~1C로 들어가는 편이 구조상 편합니다.

---

## 이벤트 45개, 바이인은 얼마부터인가요?

**가장 싼 이벤트는 30만원이고, 가장 비싼 이벤트는 800만원(#29 슈퍼 하이롤러)입니다.** 메인 외에 보장 상금이 걸린 이벤트는 두 개입니다.

| 이벤트 | 날짜 | 바이인 | 보장 |
|---|---|---:|---:|
| #4 · #14 하이퍼 터보 | 10/30 · 11/1 | 30만원 | — |
| #16 딥스택 | 11/2 | 30만원 | — |
| #6 챔피언십 워밍업 | 10/31 (Day 1A~1C) | 70만원 | 1억원 |
| #27 메인이벤트 | 11/5~9 | 175만원 | 10억원 |
| #39 하이롤러 | 11/8~9 | 350만원 | 1억 5천만원 |
| #29 슈퍼 하이롤러 | 11/5~6 | 800만원 | — |

이벤트마다 **스태프 fee**가 적용됩니다. 선수 가이드 원문은 「4% Up To ₩1,300,000 Buyin And 3% For Buyins > ₩1,300,000」, 즉 바이인 130만원까지는 4%, 그보다 비싼 이벤트는 3%입니다. 별표(*)가 붙은 이벤트는 예외입니다.

NLH 말고도 PLO, 5카드 PLO, 빅오(Big O), PLO 4/5/6 같은 오마하 계열 이벤트가 섞여 있습니다. 대회 바이인을 어느 수준으로 잡을지는 [홀덤 대회 바이인·참가비](/blog/holdem-tournament-buy-in-cost "thumb:/images/tournament-buyin-cost-tiers.webp")에서 단계별 기준을 볼 수 있습니다.

---

## 온라인 예선으로 메인 시트를 딸 수 있나요?

**네, WPT Global에서 1.10달러짜리 스텝부터 올라가 1,500달러 패키지를 딸 수 있습니다.** 온라인 경로는 지역마다 이용 사정이 다르니 각자 확인하세요. 이 글은 공식이 밝힌 구조만 옮깁니다. **패키지를 따도 카지노 입장 자격(위 절)은 똑같이 필요합니다.**

:::steps
$1.10 Step | 가장 아래 단계
$8.80 Satellite | 다음 단계
$88 Qualifier | 매주 일요일 12:05 UTC · 1,500달러 패키지 3개 보장
$1,500 패키지 | 메인 Day 1A 참가권 + 경비 250달러 + 호텔 4박(선착 30명)
:::

패키지는 **11월 5일 Day 1A 참가권**으로 주어집니다. 1B~1D로 바꿀 수 있다는 문구는 없으니 11월 5일에 맞춰 일정을 잡아야 합니다. 호텔 4박(Brown Dot Hotel Airport New Town)은 **먼저 딴 30명에게만** 붙습니다.

---

## 현장 새틀라이트는 언제 열리나요?

**메인 시트를 노리는 현장 새틀라이트 「WYS at 50K Milestone」이 11월 1~6일에 여섯 번 열립니다. 바이인은 40만원입니다.** (11/8 하이롤러 새틀라이트 60만원은 별도) 칩을 50,000까지 모으면 그 자리에서 메인 시트를 받는 방식입니다.

| 날짜·시작 | 새틀라이트 | 바이인 |
|---|---|---:|
| 11/1(일) 20:30 | WYS at 50K Milestone | 40만원 |
| 11/3(화) 20:30 | WYS at 50K Milestone (2 SEAT GTD) | 40만원 |
| 11/4(수) 13:00 | WYS at 50K Milestone (10 SEAT GTD) | 40만원 |
| 11/4(수) 20:30 | WYS at 50K Milestone (3 SEAT GTD) | 40만원 |
| 11/5(목) 20:30 | WYS at 50K Milestone (3 SEAT GTD) | 40만원 |
| 11/6(금) 20:30 | WYS at 50K Milestone (5 SEAT GTD) | 40만원 |
| 11/8(일) 12:30 | High Roller Satellite | 60만원 |

메인 175만원을 한 번에 내는 것과 40만원 새틀라이트로 시트를 노리는 것 중 무엇이 나은지는 실력과 일정에 달렸습니다. 11/5·11/6 밤 새틀라이트에서 딴 시트는 **다음 날 1B·1C로 바로** 쓸 수 있는 동선입니다.

---

## 등록은 어떻게 하나요?

**공식 사이트(wptseoul.com)의 사전 등록 폼에 영문 이름과 여권 정보를 미리 넣어 두면 현장 시간이 줄어듭니다.** 대회 당일에는 여권으로 인스파이어 플레이어 카드(멤버십 카드)를 만들어야 하는데, 주최 측 문구 그대로 「Every player needs a valid passport to register a player's card」입니다.

:::steps
사전 등록 | wptseoul.com 등록 폼에 영문 이름·생년월일·여권 번호 입력
카지노 입장 | 인스파이어 카지노 입구에서 여권(해외이주자는 추가 서류) 확인
플레이어 카드 | 여권으로 인스파이어 멤버십 카드 발급 — 대회 등록에 필수
바이인 | 현장에서 원하는 이벤트 등록
:::

공식 FAQ는 등록 세부 사항을 스케줄 페이지에 추후 올리겠다고 적어 두었습니다(9월 23일 기준). 결제 방법은 출발 전에 공식 사이트에서 다시 확인하세요.

---

## 인스파이어는 어떻게 가나요? 호텔은?

**인천공항 1·2터미널에서 인스파이어 무료 셔틀버스를 탑니다.** 1터미널은 1층 **2C·14C** 정류장, 2터미널은 1층 **8A** 정류장입니다. 인스파이어 공식 안내 기준 1터미널 노선은 주중 60분·주말 30분 간격, 2터미널 노선은 60분 간격입니다. 운행 시각은 특별 운행 공지가 수시로 붙으니 [인스파이어 오시는 길](https://www.inspireresorts.com/ko/about-us/getting-here)에서 당일 기준으로 보세요.

**WPT 서울 참가자 전용 객실 요금도 있습니다.** 주최 측 안내 기준(조식 불포함, 1박):

| 객실 | 일~목 | 금·토 |
|---|---:|---:|
| 킹 | 22만원 | 37만 4천원 |
| 트윈 | 25만 3천원 | 40만 7천원 |

예약할 때 **그룹 코드 3285 · 비밀번호 wptseoul**을 넣습니다. 메인이 목요일(11/5)에 시작하니, 1A부터 칠 계획이라면 주중 요금 구간에 묵을 수 있습니다.

---

## 같은 주에 영종도에서 열리는 다른 대회는?

**10월 30일~11월 8일, 같은 영종도의 파라다이스 시티에서 GOP 인천 II가 열립니다.** 두 대회는 날짜가 거의 겹치지만 장소가 다릅니다. GOP 인천 II의 메인은 11월 3~8일, 바이인 143만원·보장 6억원입니다. 파라다이스 시티 카지노도 외국인 전용이라 입장 조건은 비슷합니다. 자세한 내용은 [GOP 인천 II 2026 가이드](/blog/gop-incheon-2026-ii-guide)에 정리했습니다.

:::readnext[이어서 읽기]
/blog/gop-incheon-2026-ii-guide | Gods of Poker 인천 II 2026 — 일정·참가 자격 | /images/gop-incheon-2026-ii-guide-hero.webp
/blog/apl-seoul-2026-guide | APL 서울 2026 — 참가 방법·일정·SEAT 얻는 곳 | /images/apl-seoul-2026-guide-hero.webp
:::

---

## FAQ

**Q. WPT 서울 온라인 예선은 어디서 하나요?**

A. WPT Global에서 1.10달러 스텝부터 8.80달러 새틀라이트, 88달러 퀄리파이어를 거쳐 1,500달러 패키지를 딸 수 있습니다. 88달러 퀄리파이어는 매주 일요일 12:05 UTC에 열리고 패키지 3개가 보장됩니다. 패키지에는 11월 5일 메인 Day 1A 참가권이 들어 있습니다.

**Q. 인스파이어 카지노에 내국인이 들어갈 수 있나요?**

A. 한국 국적자는 해외 영주권(해외이주) 서류가 없으면 들어갈 수 없습니다. 해외에 살고 있어도 마찬가지입니다. 인스파이어 카지노는 외국인 전용이고, WPT 서울 포커룸도 그 카지노 안에 있습니다. 외국인과 서류를 갖춘 해외이주자는 입장할 수 있습니다.

**Q. 해외 영주권자는 어떤 서류가 필요한가요?**

A. 인스파이어 안내 기준으로 여권, 영주자격 증명서, 그리고 「재외국민」·「현지이주말소」·「이민출국말소」 중 하나가 표시된 주민등록표 초본·등본·말소자 초본 1개가 필요합니다. 초본·등본은 제출일 기준 7일 이내 발급분이어야 합니다.

**Q. WPT 서울 메인이벤트 바이인은 얼마인가요?**

A. 175만원(상금풀 157만 5천원 + 수수료 17만 5천원)이고 보장 상금은 10억원입니다. 시작 스택은 40,000, Day 1 레벨은 40분이며 엔트리 8명 중 1명이 입상합니다.

**Q. WPT 서울에서 이기면 WPT 포인트가 쌓이나요?**

A. 아닙니다. WPT 공식 페이지에 따르면 WPT 서울은 정규 투어가 아닌 스페셜 이벤트라 올해의 선수(POY) 포인트가 쌓이지 않습니다. 메인 1위 상금에는 2026 WPT 월드챔피언십 참가권($10,400)이 포함됩니다(상금풀에서 차감).

**Q. WPT 서울 이벤트는 몇 개인가요?**

A. 45개입니다. 7월 보도자료의 46개는 이전 값이고, 공식 사이트와 선수 가이드, 일정표 번호(#1~#45)가 모두 45개입니다.

---

## 출처

이 글의 일정·바이인·구조·입장 서류는 아래 1차 출처를 **2026년 9월 23일**에 직접 열어 확인했습니다.

- [WPT Seoul 공식 사이트](https://wptseoul.com/) — 「11 days, 45 events」, 메인 바이인·보장, 월드챔피언십 참가권. [FAQ](https://wptseoul.com/faq) · [포커룸](https://wptseoul.com/poker-room) · [선수 안내](https://wptseoul.com/player-info)(호텔 요금·그룹 코드·여권 규정) · [사전 등록](https://wptseoul.com/registration)
- [WPT 공식 이벤트 상세 — WPT Seoul Inspire Championship](https://www.worldpokertour.com/event/special-events-special-event-wpt-seoul-season-2026/details) — 바이인 구성, 등록 마감(Level 10), 레벨, 입상 비율, 스페셜 이벤트·POY 미적립 문구
- WPT Seoul 선수 가이드 PDF(2026-07-21 · 08-26판) — 45개 이벤트 전체 일정, 스태프 fee 4%·3%
- [WPT Global — WPT Seoul Package](https://www.wptglobal.com/poker/promotions/wpt-seoul-2026) — 스텝 구조, 일요일 퀄리파이어, 패키지 구성
- [인스파이어 카지노](https://www.inspireresorts.com/ko/casino) — 외국인 전용 카지노
- [인스파이어 — 외국인·해외이주자 입장 서류 안내](https://www.inspireresorts.com/ko/page/identification-documents-for-foreigners-and-overseas-emigrants) — 해외이주자 필수 서류·7일 이내 발급
- [인스파이어 — 오시는 길](https://www.inspireresorts.com/ko/about-us/getting-here) — 공항 셔틀 정류장·배차 간격
- WPT 보도자료(2024-10-28, worldpokertour.com) — 「Nov. will mark the third WPT Korea event in three years」, 제주 WPT Korea 세 번째 개최
- 관광진흥법 제28조 제1항 제4호(카지노 사업자의 내국인 입장 제한, 「해외이주법」에 따른 해외이주자 제외) — [국가법령정보센터](https://www.law.go.kr/)

> 일정·바이인은 주최 측 사정으로 바뀔 수 있습니다. 출발 전에 공식 사이트에서 다시 확인하세요.

---

## 관련 글

- [Gods of Poker 인천 II 2026 — 일정·참가 자격](/blog/gop-incheon-2026-ii-guide)
- [APL 서울 2026 — 참가 방법·일정·SEAT 얻는 곳](/blog/apl-seoul-2026-guide)
- [APT 인천 2026 결과 — 파라다이스 시티 대회 기록](/blog/apt-incheon-2026-guide)
- [2026 홀덤 대회 일정 전체](/tournaments)
`,
};

export default POST;
