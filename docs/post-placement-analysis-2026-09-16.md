# 포스팅 배치 전략 분석 보고서 (2026-09-16)

> 목적: 사장님 지시 «접속해서 보이는 포스팅을 클릭할 확률이 높으니 중요순으로 배치».
> 데이터: GA4 28일 `ga-fetch --pages --days 28` · GSC 28일 `gsc-fetch`(저장 `docs/gsc-tracking/data/2026-09-13-28d`).
> 창은 28일 고정(규율). 참여율은 오가닉 세션 기준. Direct 1,156세션(참여율 23%)은 봇 추정이라 뺐다.

## 1. 지금 배치가 어떻게 돼 있나 (문제 정의)

| 자리 | 현재 순서 | 문제 |
|---|---|---|
| 홈 피드 (`community-client.tsx`) | `POSTS` 배열 순서 = **LEGACY → NEW**, 즉 옛 글부터 고정 | 접속할 때마다 같은 옛 글이 먼저. 성과와 무관 |
| `/blog` 목록 (`blog-index-client.tsx`) | 날짜 내림차순, 히어로 = 최신 1편 | 최신 = 중요가 아니다. 한 번에 전부 렌더 |
| 시한 글(대회 가이드) | 다른 글과 같은 규칙 | 대회 끝난 뒤에도 같은 자리 |

**진짜 관문은 홈이 아니다.** 28일 오가닉 세션 기준 진입 페이지:

| 페이지 | 세션 | 참여율 | 이탈 |
|---|---:|---:|---:|
| /tournaments | 811 | 73.9% | 212 |
| /solver | 549 | 69.2% | 169 |
| / (홈) | 252 | 80.6% | 49 |
| /hand-chart | 203 | 72.9% | 55 |
| /pub | 154 | 90.3% | — |
| /ranking | 126 | 84.9% | 19 |
| /blog | 73 | 84.9% | — |

→ `/blog` 목록 순서를 바꿔도 28일에 73세션에만 닿는다. **/tournaments·/solver 하단의 «추천 글» 블록이 홈의 3배·2배 자리**다. 배치 전략은 이 두 관문을 포함해야 한다.

## 2. 글별 성과 티어 (KO 블로그)

점수 원칙: «검증된 글 = 세션도 있고 참여율도 높다». 세션만 높고 참여율이 낮으면 검색 의도 불일치라 상단에 두면 이탈만 는다.

### S — 관문 상단 고정 후보 (세션·참여·클릭 셋 다 검증)

| slug | GA 세션 | 참여율 | GSC 클릭 | 순위 | 비고 |
|---|---:|---:|---:|---:|---|
| holdem-tournament-how-to-enter | 157 | 61.8% | 141 | 6.6 | 필라. 전환 경로 1번 |
| holdem-hand-rankings | 117 | 89.7% | 8 | 11.7 | 필라. GSC 약한데 GA 강함 = 내부·직접 유입이 먹인다 |
| holdem-tournament-buy-in-cost | 89 | 70.8% | 90 | 5.0 | CTR 18.6% 최고 |
| holdem-pub-first-visit-guide | 103 | 55.3% | 79 | 7.4 | 세션 크고 참여 중간. 상단 두되 경화 대상 |
| holdem-rules | 68 | 86.8% | 12 | 13.0 | 필라. 입문 관문 |
| holdem-tournament-tax-guide | 68 | 64.7% | 40 | 5.6 | 대회 관문 짝 |
| holdem-starting-hand-range | 63 | 76.2% | 11 | 11.0 | 필라. 솔버 관문 짝 |

### A — 참여율 높고 노출이 부족 (내부 배치로 밀면 바로 오르는 글)

| slug | GA 세션 | 참여율 | GSC 클릭 |
|---|---:|---:|---:|
| holdem-range-meaning | 54 | 79.6% | 15 |
| holdem-3bet-strategy | 45 | 73.3% | 20 |
| when-to-fold-preflop-holdem | 40 | 82.5% | — |
| position-is-everything-in-holdem | 35 | 97.1% | 8 |
| bluffing-strategy-when-and-how | 35 | 88.6% | — |
| holdem-strategy | 30 | 90.0% | — |
| a-high-board-cbet | 29 | 96.6% | — |
| wsop-2026-tournament-guide | 41 | 75.6% | 16 |
| GTO 시리즈 5편(ace-paired-board·donk-bet·3bet-pot-low-board·3bet-pot-cbet·monotone-board) | 20~24 | **100%** | — |

GTO 시리즈는 세션 20대인데 참여율 100%다. 검색이 아니라 내부 유입으로만 읽히고 있고 읽으면 안 나간다. **묶음 블록으로 노출을 늘릴 가치가 가장 크다.**

### B — 유입은 큰데 참여율이 낮다 (상단 배치 금지 · 경화 대기열)

| slug | GA 세션 | 참여율 | GSC 클릭 | 손실 세션 |
|---|---:|---:|---:|---:|
| holdem-blind-meaning | 122 | 47.5% | 90 | 64 |
| holdem-game-order | 38 | 57.9% | 22 | 16 |
| holdem-tiebreak-rules | 42 | 57.1% | 16 | 18 |
| holdem-tournament-vs-cash-game | 34 | 55.9% | 16 | 15 |
| holdem-bubble-strategy | 25 | 48.0% | 11 | 13 |
| wsop-2025-tournament-guide | 30 | 56.7% | 18 | 13 |
| holdem-odds-calculator | 30 | 60.0% | 8 | 12 |

blind-meaning은 클릭 90으로 사이트 2위인데 절반이 바로 나간다. 배치 문제가 아니라 의도 불일치(단어 뜻만 알고 싶은 검색자). 상단에 올리면 홈 참여율만 깎는다. 2025 WSOP는 낡은 글이라 강등.

### 시한 글 (대회 가이드) — 별도 규칙

| slug | GA 세션 | 참여율 | 시한 |
|---|---:|---:|---|
| appt-korea-2026-guide | 159 | 88.1% | 대회 전까지 최상단 |
| apt-jeju-2026-fall-guide | 43 | 97.7% | 9/20 이벤트 수 재확인 후 |
| apt-incheon-2026-guide | 57 | 91.2% | 8/16 종료. 결과 아카이브 전환 예정 |
| holdem-masters-7th-guide | 62 | 64.5% | 확인 필요 |

시한 글은 참여율이 가장 높다(다 88~98%). **대회일 전까지는 무조건 최상단, 종료 후 자동 강등**을 코드 규칙으로 둔다(날짜 필드 기준).

## 3. 배치안

### 홈 피드 · `/blog` 목록 공통 순서

1. **진행 중 대회 가이드**(시한 글, 대회일 미경과) — 최상단
2. **S 티어 7편** — 고정. 순서는 전환 경로대로: 대회 참가법 → 바이인 → 세금 → 펍 첫방문 → 룰 → 족보 → 스타팅 레인지
3. **오늘의 글 1편** — A 티어에서 날짜 기반 결정적 셔플(방문마다가 아니라 날마다 바뀜)
4. **A 티어** — 참여율 순
5. **나머지** — 날짜 내림차순. B 티어와 종료된 대회 글은 여기로 자연 강등
6. `/blog` 목록은 HTML엔 전 카드, 화면엔 20장씩 단계 공개(봇은 전부 봄)

### 관문별 «추천 글» 블록 (이게 진짜 큰 자리)

| 관문 | 세션 | 넣을 글 |
|---|---:|---|
| /tournaments (811) | 대회 관문 | how-to-enter · buy-in-cost · tax-guide · pub-first-visit · 진행 중 대회 가이드 |
| /solver (549) | 전략 관문 | starting-hand-range · range-meaning · 3bet-strategy · GTO 시리즈 묶음 |
| /hand-chart (203) | 프리플랍 | starting-hand-range · when-to-fold-preflop · position-is-everything |
| /ranking·/pub (280) | 입문·펍 | hand-rankings · rules · pub-first-visit · pub-guide |

## 4. 구현 시 지킬 것

- slug·라우트 불변. 순서는 `lib`에 slug 배열 하나(`FEATURED_ORDER`)로 두고 홈·목록·관문 블록이 같이 읽는다.
- 시한 글 강등은 배열이 아니라 날짜 규칙. 배열에 넣으면 대회 끝나고도 남는다.
- 랜덤 금지. «오늘의 글»은 날짜 시드라 봇과 사람이 같은 날 같은 화면.
- 카드 높이 고정(CLS). 클라이언트에 POSTS 본문 import 금지(번들 3MB 전례).
- 배포 전 이 표를 기준선으로 남기고, 4주 뒤 같은 창으로 홈·/blog·관문 참여율과 S·A 티어 세션 변화를 비교한다.

## 5. 이 보고서가 못 본 것

- 번역본은 뺐다(세션 5~19·봇 비중 커 배치 판단 불가). 배치는 KO 먼저.
- GA4 «손실» 열은 (not set) 랜딩 유실 보정 전 값이다. 티어 판정엔 참여율·세션만 썼다.
- 관문 블록의 현재 구성은 확인 안 했다. 구현 회차에서 각 페이지의 추천 블록 유무부터 본다.
