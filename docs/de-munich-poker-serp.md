# de 「뮌헨에서 포커 치기」 — 경쟁 SERP 실측 (2026-08-15)

> 사장님 지시로 실제 웹서치를 돌려 **경쟁 페이지가 무엇을 제공하는지**를 봤다.
> 🔴 **여기 적힌 수치는 «경쟁 지형 파악»용이다.** 글에 쓸 값은 **원문에서 다시 확인**해야 한다(§12-B).
> 조사 경로: 구글 SERP 429 · Bing 오작동 → **Exa 검색**으로 갈음.

## 1. 경쟁 페이지 5유형

| 유형 | 대표 | 무엇을 주나 | 약점 |
|---|---|---|---|
| **디렉터리/포털** | `poker.de/regional/muenchen/` 「Hier spielen Sie Live Poker in München」 | 뮌헨엔 카지노 없음 → 주변 5곳(Bad Wiessee·Seefeld(AT)·Bad Kötzting·Lindau·Feuchtwangen) + 뮌헨 클럽 5곳 나열 | 🔴 **본문에 「Jahr 2024」** — 2년 묵었다 |
| **미디어/블로그** | `hochgepokert.com` (2024-09-30) | ★**마리엔플라츠 기준 거리·시간**(King's 2시간 · Bad Wiessee 45분 · Liechtenstein 2시간+ · Grand Casino Aš 3시간) · 「**aus regulatorischen Gründen** quasi nicht vorhanden」 | 🔴 2024년 · 일정 없음 |
| **주최자 직영** | `munichpoker.de` · `isar-poker.de` · `pokerturniere-muenchen.de` | 자기 대회만. isar-poker는 실제 일정 보유(Eching·Kirchheim) · pokerturniere-muenchen은 피자리아 개최 + 자체 WSOP 랭킹 | **각자 자기 것만** — 비교가 안 된다 |
| **공식 운영사** | `spielbanken-bayern.de` · `slsv-bayern.de` | SBPM 일정·티켓 판매. 9개 하우스 전부 | **하우스별로 흩어져 있다.** 「뮌헨에서 어디로」를 답하지 않는다 |
| **카지노 정보 사이트** | `isa-guide.de` · `poker-in.com` | isa-guide = **날짜별 상세 일정**(SBPM 110€ · Big Bounty 330€ …) · poker-in = 하우스별 요일·바이인 | 뮌헨 관점 없음 |

## 2. 🔴 아무도 안 하는 것 = 우리 자리

1. **최신성** — 1위권 두 곳(poker.de · hochgepokert)이 **2024년 기준**이다.
2. **통합 표가 없다.** 거리는 hochgepokert에만, 일정은 isa-guide에만, 요일·바이인은 poker-in에만 있다.
   **「몇 분 + 얼마 + 무슨 요일」을 한 표로 묶은 페이지가 없다.**
3. ★**Casino-Blitz 셔틀버스** — `poker-in.com` 축어: 뮌헨 중앙역(Seidlstraße 3)·Harras 출발,
   **왕복 7,50 €에 입장료 포함, 매일·공휴일도 운행**, Garmisch행.
   **뮌헨 사람에게 결정적인 정보인데 상위 두 곳이 안 다룬다.**
4. **「왜 뮌헨엔 없나」** — hochgepokert가 「규제상」이라고 한 줄 쓰고 만다. 검색자의 진짜 의문일 수 있다.

## 3. 우리가 이미 가진 것 / 없는 것

**가진 것**(`lib/posts-de/holdem-tournament.ts` · `docs/dach-tournaments-2026.md`):
바이에른 9곳(뮌헨 없음) · SBPM 11회 10만 € 보장 · Bad Wiessee/Garmisch 110 € 체크인 시각 ·
Rozvadov 「왜 독일 시리즈가 체코에서」 · 공식 출처 축어

**없는 것**: 뮌헨 기준 거리·소요시간 · 셔틀버스 · 뮌헨 클럽 목록(Munich Poker·Queens·Poker Company·Isar-Poker·Schwabmünchen) · 규제 배경

## 4. 판단

**경쟁력 있다.** 다만 **일정으로 이기려 하면 안 된다** — 휘발성이라 우리가 유지 못 하고,
isa-guide가 이미 날짜별로 촘촘하다. **구조로 이긴다**:

> 「뮌헨에서 **몇 분** · **얼마** · **무슨 요일**」을 한 표로 + 셔틀버스 같은 **접근 수단** +
> 「왜 시내엔 없나」 + 일정은 **어디서 확인하는지 링크**

⚠ 착수 시 반드시: ① 거리·요금·시각은 **공식 원문 재확인**(위 값은 Exa 요약이다)
② `poker.de`가 2024년이라는 것은 **우리 글이 낡으면 똑같이 당한다**는 뜻이다 — `updated` 관리 필수
