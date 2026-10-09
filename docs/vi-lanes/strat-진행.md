# vi-strat 진행 — 🅳 전략

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-D-strat.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = `docs/vi-lanes/strat-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

> positions = «vị trí trong poker» 헤드 · position-play = IP/OOP 롱테일(§3-C ⑤) · starting-hands-chart title·H1에 «chart/bảng» 금지(⑥ · 도구 CTA «bảng bài khởi đầu theo vị trí») · strategy에 bluff H2(⑰) · when-to-fold는 정의 앵커만(③) · «3 bet»·«cbet»·«limp là gì»·«under the gun» 단독 = 오염 · «mẹo chơi poker luôn thắng» 약속형 금지.

## 상태 — A ✅ (10-09 · 브리프 123KB + Fable 카피 1회 · 글자수 초과 0 · Opus 조정 7건: desc 분 수치→EN readTime 7편 · strategy FAQ 4 중복 회피 · strategy 추가 H2 범위 제한 · positions FAQ 7 병합 해제 · position-play 추가 H2→H3 범위 제한 · limping FAQ 3·8 재구성 + tag «limp call là gì» 제거 · EN 드리프트 0 실측) / B ☐ / C ☐ · 커밋 —

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-strategy | ✅ | ☐ | ☐ | EN updated 2026-10-05 · 추가 H2 2(bluff ⑰ · cash/tour 앵커만) · FAQ 13 GTO 각도 변경 |
| holdem-positions | ✅ | ☐ | ☐ | EN updated 2026-09-28 · EN tags 없음 → vi 10개 신설 |
| holdem-position-play | ✅ | ☐ | ☐ | EN updated 2026-10-06 · L194 check-raise 링크 연다 · 추가 H3 BB 방어 · EN tags 없음 → 8개 신설 |
| holdem-starting-hands-chart | ✅ | ☐ | ☐ | EN updated 2026-10-01 · PDF·/en/quiz «(tiếng Anh)» · title·tags «chart/bảng» 0 · EN tags 없음 → 8개 신설 |
| holdem-limping | ✅ | ☐ | ☐ | EN updated 2026-10-06 |
| holdem-3bet | ✅ | ☐ | ☐ | EN updated 2026-10-06 · L301 3bet-pot-cbet 링크 연다 |
| holdem-continuation-bet | ✅ | ☐ | ☐ | EN updated 2026-10-06 · L65·L129 GTO 문단 연다(thumb `-en.webp`) |
| holdem-when-to-fold | ✅ | ☐ | ☐ | EN updated 2026-10-06 · 정의는 betting-actions 앵커 |

## 신규 용어
| EN | 채택 vi | 근거 |
|---|---|---|
| 관련 글 카드 라벨 Strategy · Odds · Position Strategy · Positions · Starting Hands · Blinds | Chiến thuật · Xác suất · Chiến thuật vị trí · Vị trí · Bài khởi đầu · Blind | §3-A ⑥에 없는 라벨 6종 — 이 레인 값(브리프 §0-6). 기존 vi 8편 «Bài trụ cột / Trụ cột / Mù (Blinds) / Thứ tự chơi / Nước Cược»은 🅰 정리 대상 · 다른 레인과 대조 필요 |
| 카드 `T♥`(무늬 붙은 10) | `10♥` (핸드 클래스 `TT`·`ATs`·`JTs`·`T9s`는 그대로) | §3-A ② · fr H-20 동형 · position-play L196·L213 · continuation-bet L105·L129 |
| over-limp / iso-raise / limper | over-limp (limp theo sau) · iso-raise (raise cô lập) · limper | §3-A ④ limp 행 확장 · 브리프 §0-3 |
| delayed c-bet / double·triple barrel / float / bluff-catcher | delayed c-bet (c-bet trì hoãn) · double barrel · triple barrel · float · bluff-catcher | §3-A ④ GTO 행의 «c-bet trì hoãn» 승계 · 나머지 영어 보존 |
| equity realization / top pair / overpair / sunk cost / laydown / hero call | mức equity thực hiện được (equity realization) · top pair (đôi cao nhất) · overpair (đôi trên board) · chi phí chìm (sunk cost) · laydown (bỏ bài lớn) · hero call | 정본 없음 — 이 레인 값 · 🅵·🅶과 대조 필요 |
| tight-aggressive (TAG) / LAG / nit / calling station / reg | tight-aggressive (TAG) + «chơi chặt – đánh mạnh» 풀이 1회 · LAG · nit · calling station · reg | 영어 보존 · 🅵 fish 글과 대조 |
| board texture / dry / wet / two-tone | kết cấu board (board texture) · board khô / ướt · hai chất (two-tone) | §3-A ④ GTO 행(«board khô / ướt» · «bicolor = hai chất») 승계 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (전 편) | 8편 EN 링크 전부 51편+도구 안(스크립트 추출 실측 10-09) | 편차 0 예정 — B가 추가 앵커(§0-5: position-play 첫 문단→positions · when-to-fold→betting-actions · strategy→`/vi/hand-chart` · positions→`/vi/hand-chart` · position-play→`/vi/hand-chart` · when-to-fold→`/vi/calculator`)를 넣으면 «추가»로 여기 기록 |
| holdem-starting-hands-chart | `/downloads/poker-starting-hands-chart.pdf` · `/en/quiz` | 유지(vi PDF·퀴즈 없음 — `app/vi/`에 quiz 없음 실측) + 앵커 «(tiếng Anh)» — 대상 동일이라 편차 아님 |
| holdem-continuation-bet · position-play · 3bet | GTO 13편 역링크(a-high-board-cbet · 3bet-pot-bet-sizing · low-board-check-raise · 3bet-pot-cbet) | **연다**(🅶 같은 배포 · fr 선례) — EN 파일 머리 주석 «7개 번역본 전파 안 함»은 fr 이후 해제로 읽었다(헤드 요청 ①) |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- (A에서 발견 없음 — fr 🅳 C가 올린 3건(continuation-bet:181 «charges» · position-play:128 AK/AQ ↔ starting-hands:121 · continuation-bet:105 «over 97% on all three» 범위 표현)은 EN이 그대로라 vi B는 EN대로 쓰고 C가 재판정)

## 헤드 요청
- ① GTO 썸네일 `gto-srp-dry-ace-oop-en.webp` · `gto-3bp-dynamic-oop-en.webp`(continuation-bet L65·L129 thumb)는 영어 오버레이 — `-vi` 변형 없음(10-09 실측 · `-en`만). B는 `-en`을 쓴다 → 🅶 레인이 `-vi` 변형을 만들면 헤드가 교체. 같은 건으로 EN continuation-bet 파일 머리 주석(«7개 번역본에는 전파하지 않는다») 갱신 여부 판정.
- ② 관련 글 카드 라벨 6종(신규 용어 표) — 다른 vi 레인 값과 대조해 하나로.
- ③ vi 퀴즈(`/vi/quiz`)·vi 시작 핸드 PDF 없음 — starting-hands-chart는 영어 자료 링크 + «(tiếng Anh)». 도구 확장 회차 후보로만 기록.
- ④ 솔버 vi 랜딩 없음 → strategy FAQ 13(GTO)은 솔버 이름만(링크 없음 · §3-A ⑤). `/vi/solver` 생기면 한 줄 교체 자리.

## 미결
- (없음)
