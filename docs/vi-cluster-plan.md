# vi(베트남어) 클러스터 완결 계획 — 2026-10-08 사장님 결정

> 정본. 핸드오프에는 링크만 둔다. 단계가 끝나면 §4 표의 상태 칸만 고친다.
> 선례 = **`docs/fr-cluster-plan.md`**(10-07 · 51편 · 같은 날 배포까지 완주). 레인 운영 규격(A 준비 → B 집필 → C 마감 · 진행 파일 · 헤드 머지)은 `docs/ms-translation-lanes.md` §3~§9 + fr 계획 §4-A~§5를 그대로 쓴다 — 여기엔 «vi라 다른 점»만 적는다.

## 0. 결정 (사장님 10-08)

- 축어: *«fr처럼 50편으로 가자 · 서치와 키워드실측 잘해서 vi에 맞춤 고품질 포스팅작업하자 · 진행해»* → tr(20편 축소판)이 아니라 **fr과 같은 EN 기준 51편 완결**.
- 축어: *«아스트라도 활용을 하면서 작업하자 · 시킬거있으면 시켜 · 아스트라도 최상위 모델이니까»* → 아스트라(Codex `gpt-6-astra`)를 **조사 레인·교차 검수의 상시 한 축**으로 쓴다(§3-B). 이 계획 회차 한정 지시 — 다른 작업에 자동 적용하지 않는다(메모리 astra-subreview).
- fr 판단 3건을 그대로 승계: ① GTO 예제 13편 포함(마지막 레인 · `settled-decisions` §1-E — GSC 수동 색인 요청 안 함) ② 대회 가이드 5편 제외(apt-incheon · ept-barcelona · wpt-australia · korea-poker-marathon · wsop-2026) ③ 0단계 = 본체 · 레인 = 워크트리 병렬.
- 🔴 vi GTO 13편 포함은 «ar·vi·tr 시리즈는 사장님 판단 전 착수 금지»(`settled-decisions` §1-E 운영 메모)를 **사장님 «fr처럼 50편» 지시로 해제**한 것으로 읽었다 — 0-3 보고 때 한 줄 재확인한다.

## 1. 범위 — 51편 · 레인 7개 (fr §1과 같은 슬러그)

| 레인 | 편수 | 슬러그 | 기존 vi |
|---|---:|---|---|
| 🅰 규칙(기존 재작업) | 6 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules | 6편 전부 있음 → EN 현행으로 다시 쓴다(slug·URL 그대로) |
| 🅱 족보 | 6 | holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board | hand-rankings 1편 있음(재작업) |
| 🅲 확률 | 7 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting | — |
| 🅳 전략 | 8 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold | — |
| 🅴 토너먼트 | 5 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game | tournament-vs-cash 1편 있음(재작업) |
| 🅵 용어 | 6 | holdem-glossary · holdem-bad-beat · holdem-cooler · holdem-fish · holdem-rake · holdem-straddle | — |
| 🅶 GTO 13 | 13 | donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet · k-high-board-cbet · ace-paired-board-strategy · paired-board-strategy · low-board-check-raise · blind-battle-cbet · blind-battle-connected-board · 3bet-pot-cbet · 3bet-pot-bet-sizing · 3bet-pot-low-board | — |

- 링크가 «걸려도 되는» vi 대상 = 위 51편 + vi 도구(`/vi/calculator` · `/vi/hand-chart` · `/vi/tournaments`) + (생기면) `/vi/solver`. 🔴 **vi엔 `/vi/glossary`가 없다**(fr과 다른 점) → 0-3에서 «용어 정의 의도»의 주인을 정한다(§3 쟁점 ①·⑪).
- 🅶은 마지막 레인. `/vi/solver` 랜딩(솔버 vi 배포 통지 대기 · `vi-gto-solver.md` §7)과 같은 회차에 묶는 안을 0-3에서 판정.

## 2. 재작업 방지 장치 (fr §2 ①~⑨ 승계 + vi 추가)

| # | 장치 | vi 적용 |
|---|---|---|
| ① | 0-2 SERP 51편 전부 완료 전 레인 A 금지 | `docs/keyword-bank/vi-serp/` 7레인 · 커버리지 ✗ 0 |
| ② | 0-3 소유표 먼저 | 도구가 주인인 의도(차트·계산·솔버)는 글 제목·H1·태그에 쓰지 않는다 |
| ③ | 처음부터 EN 링크 1:1 · 배포 1회 | 51편 동시 진행 |
| ④ | 0-3 고정문·용어 정본 | vi 족보·액션 번역어(thùng/sảnh/cù lũ/sám cô · tố/theo/bỏ bài · mù) = 0-2 상위 글 집계 + 기존 vi 8편 + `lib/intl.ts` vi 블록 + vi 도구 사전 |
| ⑤ | EN 기준 해시 고정 → 헤드 머지 때 diff 1회 | 해시 = 0-4 착수 시점에 적는다 |
| ⑥ | 카피는 레인 A 브리프에서 확정 | B·C는 카피 불변 |
| ⑦ | 착수 공지 MB에 «vi는 배포 해시로 한 번에» | 0-4 |
| ⑧ | 기존 vi 8편 = 이번 파이프라인 안 | 🅰 6 + 🅱 1 + 🅴 1 |
| ⑨ | 솔버 앱 vi 축어 | 🅶 레인 A 전에 앱 라이브 vi 축어(솔버 vi 배포 후) — 미배포면 🅶은 영어 앱 라벨 축어로 쓰고 배포 뒤 한 줄 교체 |
| 🆕 ⑩ | **vi 오염 판정** | 0-1에서 «X là gì»·족보 이름 볼륨 다수가 포커 밖(과일·로비·속어·Tiến lên). 0-2 0단계에서 SERP 포커 결과 수로 판정하고, 오염 헤드는 카피에 쓰지 않는다 |
| 🆕 ⑪ | **다른 게임 혼동** | 베트남 «poker 5 lá·xì tố·mậu binh·tiến lên» 족보 용어(sảnh rồng 등)를 홀덤 족보 번역어로 들여오지 않는다 — 0-3 용어 정본에서 확정 |

## 3. 소유표·고정문 (0-3에서 채운다)

### 3-A. 고정문·표기 — (0-3)
### 3-B. 아스트라 활용 지도 (10-08 사장님 지시)

| 단계 | 아스트라 몫 | Claude 몫 |
|---|---|---|
| 0-2 SERP | L-A 규칙 · L-B 족보 · L-F 용어(본체가 DFS 원자료를 떠 주고 원문 정독·처방) | L-C · L-D · L-E · L-G(Opus 서브 · DFS 직접) |
| 0-3 판정 | 판정 재료 교차(본체 판정 초안을 «베트남 현장 코치» 페르소나로 반박) | 본체 판정 |
| 레인 B 집필 | — (쓰기 불가 구성 · 레포 쓰기 금지) | 집필 |
| 레인 C 검수 | **교차 렌즈 1종 상시**(레인마다 · 스크래치 사본 · 네이티브 자연스러움 + §13 독립 검산) | 렌즈 4종 + 2차 교열 |
| 헤드 판정 | 51편 전수 용어 일관성 스윕(사본) | 머지·빌드·배포 |

### 3-C. 카니발 소유표 — (0-3)

## 4. 단계 (한 실행 = 한 단계 · AUTONOMY-LIMITS 90분)

| 단계 | 내용 | 선행 조건 | 상태 |
|---|---|---|---|
| 0-1 | 수요 실측 → `docs/keyword-bank/vi-core-volumes.md` | — | ✅ 10-08 |
| 0-2 | SERP 7레인 → `docs/keyword-bank/vi-serp/`(00-brief + L-A~L-G) · 본체 대조 · 새 후보 볼륨 일괄 측정 | 0-1 | ▶ 10-08 7/7 산출 ✅ · 남은 것 = 커버리지 보완(L-A §2 볼륨 · 원형 AC · nuts là gì SERP · organic 부족 헤드) → 0-3 착수 전 본체 DFS |
| 0-3 | 소유표·고정문·용어 정본(§3) + 아스트라 교차 → 사장님 보고(쟁점 판정) | 0-2 | |
| 0-4 | 착수 공지 MB · 레인 워크트리 · EN 기준 해시 | 0-3 승인 | |
| 1 | 레인 🅰~🅵 병렬(A 준비 → B 집필 → C 마감) | 0-4 | |
| 2 | 🅶 GTO 13(+ `/vi/solver` 판정) | 1 머지 | |
| 3 | 헤드 판정 → 배포 1회 → MB · IndexNow · 사장님 GSC 수동 색인 목록 | 2 | |
