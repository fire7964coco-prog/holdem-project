# 자율 런 기록 — 2026-08-06 (사장님 부재)

> 계획서: `C:\Users\하봄\.claude\plans\golden-hatching-frog.md`
> 운영 규칙: push까지 자율 · 검수도 이 폴더 · Agent 렌즈 허가 · **사실 미확인이면 "미공표"로 남기고 지어내지 않음**
> 착수 시점 HEAD `06bbe79` · 작업 트리 깨끗 · `origin/main` 동기

## 진행 상황

| # | 항목 | 상태 | 커밋 |
|---:|---|---|---|
| 1 | WSOP 2026 ME 결과 6개 언어 | 🔵 진행 — 사실 수집 완료 | |
| 2 | 제7회 마스터스 결과 + 제8회 절 | ⬜ 대기 | |
| 3 | `/win-rate-quiz` SSR 본문 복구 | ⬜ 대기 | |
| 4 | 기계 결함 6건 | ⬜ 대기 | |

---

## 1순위 — WSOP 2026 ME: 확정된 사실 (공식 1차 출처)

**출처**: `https://www.wsop.com/tournaments/2026-57th-annual-world-series-of-poker/` (공식 일정표) ·
`https://www.wsop.com/tournaments/result/619/` (Event #82 Final Result)
**수집 방법**: Playwright `browser_evaluate`로 `<tr>` DOM을 직접 파싱해 내 정규식으로 카운트 (§12-B 준수).
WebSearch는 URL 찾기에만 썼고 검색 요약은 사실로 쓰지 않았다. **확인일 2026-08-06.**

### Event #82 헤더 (공식 페이지 필드 그대로)
| 항목 | 공식 값 |
|---|---|
| 이벤트명 | #82: $10,000 MAIN EVENT NLH World Championship |
| 시작 | Jul 02, 11:00 AM |
| **종료** | **Aug 05, 01:48 AM** |
| 바이인 | $10,000 |
| 엔트리 | **9,208** |
| ITM | **Top 1,383 players** |
| **상금풀** | **$87,568,080** |
| 우승자 | **Lucas Jumalon** · $10,000,000 |

### 파이널 테이블 최종 순위 1~9위 (공식 Final Result 표)
| 순위 | 선수 | 국적 | 상금 |
|---:|---|---|---|
| 1 | **Lucas Jumalon** | United States | **$10,000,000** |
| 2 | Lauri Saaskilahti | Finland | $6,000,000 |
| 3 | Gregor Mueller | Canada | $3,750,000 |
| 4 | Michael Gagliano | United States | $2,750,000 |
| 5 | Hanming Feng | United States | $2,250,000 |
| 6 | Rami Hammoud | Canada | $1,750,000 |
| 7 | Jamie Shaevel | United States | $1,500,000 |
| 8 | Mario Boos | France | $1,250,000 |
| 9 | Evagoras Evagorou | Cyprus | $1,000,000 |

완전성 검증: 1~9위 번호 누락 없음. 표 1페이지가 1~50위(50행)이고 총 28페이지(ITM 1,383).

### 브레이슬릿 — **100개 전부 수여 완료**
공식 일정표 100행(Event#1~#100, **누락 번호 0**)의 Winner 열을 전수 검사 → **100/100 우승자 확정**.
→ 전 언어의 `99개 수여 완료` · `100イベントのうち99本授与済み` 서술을 **100개 완료**로 갱신해야 한다.

### ja판 전용 — 일본인 최고위 **확정**
공식 Final Result 1~50위에서 `Country == Japan`은 **23위 Kyosuke Nagami $325,000 단 한 명**.
23위보다 높은 1~22위에 일본이 없으므로 **일본인 최고위 = 23위**로 확정된다.
→ ja판 `:::note`의 「10位以下の順位と賞金は…未公開」 유보를 해제하고 追記한다(글에서 약속한 것).

### 🔴 우리 글과 공식이 어긋나는 수치 (경화 시 반드시 반영)
| 항목 | 우리 글(7/29 기준) | 공식(8/6 확인) |
|---|---|---|
| ME 상금풀 | **$85,634,400** | **$87,568,080** |
| ME ITM | (확인 필요) | 1,383 |

**공식이 심판이다.** 상금풀은 전 언어에서 등장 자리를 전수 grep해 교체한다.
(참고: 9,208 × $10,000 = $92,080,000. 공식 상금풀은 그 95.1%.)

### 국적별 최고 순위 — 공식 결과 1~50위 전수 파싱 (각 언어판의 약속 이행용)
`browser_evaluate`로 1~50위 전 행의 Country 열을 정규식으로 분류. **1~50위 범위 내 확정**이며
51위 이하는 미확인이다(각 글에 "1~50위 기준"을 명시할 것).

| 대상 | 최고 순위 | 선수 | 상금 | 비고 |
|---|---|---|---|---|
| 일본 | **23위** | Kyosuke Nagami | $325,000 | ja판 追記 약속 이행 |
| 중국 | **28위** | Tianle Wang | $265,000 | 36위 Junjie Tang $215,000도 있음 |
| 대만·홍콩·마카오 | **1~50위 없음** | — | — | zh-hant판 「華人 최고」는 중국 28위가 최상 |
| 한국 | **1~50위 없음** | — | — | ko 훅 "한국은 순위권 밖"과 정합 |
| 스페인어권 | **12위** | Antonio Galiana (Spain) | $510,000 | es판 최대 훅. 멕시코·브라질·중남미는 1~50위 없음 |

1~50위에 등장한 국적 15개: United States(23) · United Kingdom(6) · France(4) · Canada(3) ·
Germany(3) · China(2) · Finland · Cyprus · Spain · Japan · Jamaica · Belarus · Bulgaria · Russia · Lithuania

### 미검증 — 아직 손대지 않은 것
- 시리즈 총계(`총 251,899 엔트리` · `$469,975,059` · `35,157 ITM` · `참가국 111개`)는
  ME 상금풀이 바뀐 만큼 총 상금도 달라질 수 있다. **공식 시리즈 총계 페이지로 별도 확인 후 반영/유지 결정.**
