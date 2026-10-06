# fr(프랑스어) 클러스터 완결 계획 — 2026-10-07 사장님 결정

> 정본. 핸드오프에는 링크만 둔다. 단계가 끝나면 §4 표의 상태 칸만 고친다.
> 레인 운영 규격(A 준비 → B 집필 → C 마감 · 진행 파일 · 헤드 머지)은 **`docs/ms-translation-lanes.md` §3~§9를 그대로 쓴다** — 여기엔 «fr이라 다른 점»과 «두 번 일하지 않기 위한 장치»만 적는다.

## 0. 결정 (사장님 10-07)

- «fr은 기존 방식대로 포스팅 꽉 채우자 — EN 버전처럼 · 경량화하지 말고.» → tr(20편 축소판)과 달리 **EN 56편 기준 완결**.
- «이번에는 두 번씩 일하지 않도록 워크플로 먼저.» → §2 재작업 방지 장치가 이 계획의 핵심이다.
- 판단 3건 = **권고대로**: ① GTO 예제 13편 포함(마지막 레인 · `settled-decisions` §1-E에 따라 GSC 수동 색인 요청 안 함) ② 대회 가이드 5편 제외(ms와 같음: apt-incheon · ept-barcelona · wpt-australia · korea-poker-marathon · wsop-2026) ③ 0단계 = 본체 · 레인 = 워크트리 병렬.
- 착수 시점 EN 기준 해시 = **`a54b5f3d`**(§2-⑤).

## 1. 범위 — 51편 · 레인 7개

| 레인 | 폴더·브랜치(예정) | 편수 | 슬러그 |
|---|---|---:|---|
| 🅰 규칙(기존 재작업) | `Holdem-fr-rules` · `harden-fr-rules` | 6 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules |
| 🅱 족보 | `Holdem-fr-rank` · `harden-fr-rank` | 6 | holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board |
| 🅲 확률 | `Holdem-fr-prob` · `harden-fr-prob` | 7 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting |
| 🅳 전략 | `Holdem-fr-strat` · `harden-fr-strat` | 8 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold |
| 🅴 토너먼트 | `Holdem-fr-tour` · `harden-fr-tour` | 5 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game |
| 🅵 용어 | `Holdem-fr-gloss` · `harden-fr-gloss` | 6 | holdem-glossary · holdem-bad-beat · holdem-cooler · holdem-fish · holdem-rake · holdem-straddle |
| 🅶 GTO 13 | `Holdem-fr-gto` · `harden-fr-gto` | 13 | donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet · k-high-board-cbet · ace-paired-board-strategy · paired-board-strategy · low-board-check-raise · blind-battle-cbet · blind-battle-connected-board · 3bet-pot-cbet · 3bet-pot-bet-sizing · 3bet-pot-low-board |

- 🅰는 «새 번역»이 아니라 **7월판을 EN 현행으로 다시 쓰는 것**이다(드리프트 6편 전부 · 7월 → EN 10월). 기존 slug·URL은 그대로.
- 링크가 «걸려도 되는» fr 대상 = 위 51편 + 도구 4종(`/fr/calculator` · `/fr/hand-chart` · `/fr/glossary` · `/fr/solver`). 제외한 대회 가이드 5편으로 가는 EN 링크는 ms §0-A처럼 빼거나 51편 중 하나로 대체하고 진행 파일 «링크 편차»에 적는다.
- 🅶은 다른 레인이 끝난 뒤 마지막(사장님 권고 수용). de 13편(10-02 · MB-150)이 선례 — `/fr/solver` 랜딩 13링크 · 러닝맵 fr 노드 · 필라 역링크까지 그 회차에.

## 2. 재작업 방지 장치 — 지난 재작업 원인 → 이번 대책

| # | 지난 재작업 | 원인 | 대책(선행 조건으로 박는다) |
|---|---|---|---|
| ① | tr SERP 보강 A~D | 볼륨만 재고 SERP 상위 글·PAA를 빠뜨렸다 | **0-2에서 51편 전부 SERP 조사 완료** — `docs/keyword-bank/fr-serp/` 없이는 레인 A를 띄우지 않는다. 레인 A는 SERP를 «다시 조사»하지 않고 이 산출물을 읽어 브리프에 옮긴다 |
| ② | tr «poker terimleri» 글↔도구 경쟁 | 키워드 주인을 발행 뒤에 정했다 | **0-3 소유표**(§3) 먼저. 차트·계산·용어사전·솔버 의도는 도구가 주인(`tools-over-posts` 확정) — 글 제목·H1·태그에 그 헤드텀을 쓰지 않는다 |
| ③ | tr 회차 3 뒤 재링크 | 글이 없어 링크를 비워 두고 나중에 걸었다 | 51편 동시 진행 → **처음부터 EN 링크 1:1**. 배포는 전 레인 머지 뒤 1회 |
| ④ | ms 레인 간 용어 분열 | 레인 5개가 각자 용어를 정했다 | **0-3 고정문·용어 정본**(§3-A) — 레인은 판단 없이 따른다. 새 용어는 진행 파일 «신규 용어» 표 → 헤드가 머지 때 대조 |
| ⑤ | ms 꼬리 드리프트(14편) | 집필 중 EN이 바뀌었는데 못 따라갔다 | 기준 해시 `a54b5f3d` 고정 → **헤드 머지 단계에서 `git diff a54b5f3d..HEAD -- lib/posts-en/<51편>` 한 번 훑어 같이 반영** → 각 글 `masterUpdated` = 그 시점 EN `updated` |
| ⑥ | 카피 재작업 | 카피를 집필 중에 같이 썼다 | 카피(seoTitle·desc·tldr·H2 세트)는 **레인 A 브리프에서 확정**(Fable 서브 1회). B·C는 카피를 바꾸지 않는다 — 바꿔야 하면 진행 파일 «헤드 요청» |
| ⑦ | 검수장 기준 해시 어긋남 | 우리가 고치는 중에 검수장이 봤다 | 0-4 착수 공지 MB에 «fr은 배포 해시로 한 번에» 요청. 배포 전 fr 파일은 검수장 대상이 아니다 |
| ⑧ | 기존 fr 6편 별도 재경화 | (예방) | 🅰 레인으로 이번 파이프라인에 넣었다 — 나중에 따로 하지 않는다 |
| ⑨ | 솔버 앱 라벨 어긋남 | 앱 축어 문서가 낡아 있었다(`solver-app-verbatim-fr-2026-08-24.md`) | 🅶 레인 A 전에 솔버 앱 fr 현행 축어를 다시 뜬다(앱 라이브 · Playwright) |

## 3. 소유표·고정문 (0-3에서 채운다)

### 3-A. 고정문·표기 — 정본 후보 = `docs/translation-terms-fr.md` · `docs/local-voice/fr-fr.md` · 기존 fr 6편 · 도구 4종 사전 실측
_(0-3에서 기존 fr 코퍼스 다수결 + 도구 사전 대조로 확정 — 직답 라벨 · readnext 라벨 · FAQ H2 · 관련 글 H2 · readTime · 2인칭(tu) · 숫자(천 단위 공백 · 소수점 쉼표 · « % » 앞 공백) · 족보·액션 용어)_

### 3-B. 카니발 소유표
_(0-1·0-2 실측 뒤 채운다)_

## 4. 단계 (한 실행 = 한 단계 · AUTONOMY-LIMITS 90분)

| 단계 | 내용 | 산출물 | 선행 조건 | 상태 |
|---|---|---|---|---|
| 0-1 수요 | DataForSEO 볼륨(France 2250 · fr) — 51편 헤드·롱테일 시드. 필요 시 BE·CA·CH 비교 | `docs/keyword-bank/fr-core-volumes.md` | — | ✅ 10-07 (시드 210 + Labs 34 · 함정 11 · 0-3 판정 대기 5) |
| 0-2 SERP | 볼륨 상위 검색어의 구글 FR 상위 10 → 실제 글 정독(원문 · §12-B) · PAA · 자동완성 → 레인별 처방 | `docs/keyword-bank/fr-serp/<레인>.md` | 0-1 | ☐ |
| 0-3 정본 | §3-A 고정문·용어 확정 · §3-B 소유표 | 이 문서 §3 | 0-1·0-2 | ☐ |
| 0-4 공지 | 검수장 착수 공지 MB(§2-⑦) · 레인 워크트리 7개 생성 + 각 `HARDEN.md` | MB 1행 · 워크트리 | 0-3 | ☐ |
| 레인 🅰~🅵 | A 준비(브리프 + Fable 카피) → B 집필 → C 마감(게이트·렌즈·2차) | `docs/fr-lanes/<id>-*.md` · `lib/posts-fr/*` | 0-4 | ☐ |
| 레인 🅶 | 솔버 앱 fr 축어 재추출(§2-⑨) → A·B·C | 〃 | 🅰~🅵 머지 | ☐ |
| 헤드 머지 | 레인 머지 · 신규 용어 대조 · EN 델타 스윕(§2-⑤) · 아스트라 교차 1회 → 반영 | — | 전 레인 C | ☐ |
| 배포 | fr index · `/fr/blog` · 러닝맵 · `/fr/solver` 13링크 · 도구 4종 related · 빌드 · push · MB · IndexNow · 수동 색인 목록(GTO 13 제외) | 라이브 | 헤드 머지 | ☐ |

- 모델: 본체·레인 = Opus 5.5 · 카피 판정 = Fable 서브 1회/레인 · 렌즈 = Opus 서브 · 다른 계열 교차 = GPT 아스트라(ms §2 그대로).
- 🔴 라쿠 MCP는 경로 스코프라 새 워크트리에 수동 등록이 필요하다(ms 선례) — 0-1·0-2를 본체에서 끝내 두면 레인은 라쿠가 필요 없다.
