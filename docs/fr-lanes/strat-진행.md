# fr-strat 진행 — 🅳 전략

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-D-strat.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = `docs/fr-lanes/strat-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

## 상태 — A ✅ (10-07 · 브리프 + Fable 카피 1회 · 글자수 조정 0 · Opus 조정 1: strategy FAQ13 GTO PAA 카니발 회피) / B ✅ (10-07 · 8편 집필 · Opus fork 4병렬 × 2편 · audit fr 🔴 0 🟠 0 · structure 내 8편 결손 0 · build ✅ 880 — intl-links·calc-parity 제외 체인, fr-rank 선례) / C ✅ (10-07 · 게이트 전건 · 전사 대조 불일치 0 · 손검산 16자리 · 렌즈 4종 지적 53(렌즈 간 중복 포함) · 반영 45 · 미반영 8 = EN-먼저 3 · 헤드 요청 2 · 기각 3(«d'UTG» — «au lieu de UTG»는 정상 · EN 유래 FAQ 의미중복 · export default 누락은 fr 코퍼스 관행) · 2차 교열 지적 6 · 반영 5 · 잠금 카피 참고 1) · 커밋 (C 커밋)

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-strategy | ✅ | ✅ | ✅ | EN updated 2026-10-05 |
| holdem-positions | ✅ | ✅ | ✅ | EN updated 2026-09-28 |
| holdem-position-play | ✅ | ✅ | ✅ | EN updated 2026-10-06 · ⑦ check-raise 링크 연다 |
| holdem-starting-hands-chart | ✅ | ✅ | ✅ | EN updated 2026-10-01 · PDF·/en/quiz «(en anglais)» |
| holdem-limping | ✅ | ✅ | ✅ | EN updated 2026-10-06 |
| holdem-3bet | ✅ | ✅ | ✅ | EN updated 2026-10-06 · ⑧ 3bet-pot-cbet 링크 연다 |
| holdem-continuation-bet | ✅ | ✅ | ✅ | EN updated 2026-10-06 · ①·⑨ GTO 문단 연다 |
| holdem-when-to-fold | ✅ | ✅ | ✅ | EN updated 2026-10-06 |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| 카드 `T♠`(무늬 붙은 10) | `10♠` (핸드 클래스 `ATs`·`TT`는 그대로) | fr 코퍼스 `10♠` 등 9 · `T♠` 0 · `JTs`·`ATs`·`TT` 사용(grep 10-07) — §3-A ②엔 예시만 있고 T 규칙이 없다 |
| 관련 글 카드 라벨 Strategy · Odds · Position Strategy · Positions · Starting Hands · Hand Rankings · Glossary · Blinds · Order of Play · Beginner Guide · Pillar · Tournament | Stratégie · Probabilités · Stratégie de position · Positions · Mains de départ · Classement des mains · Lexique · Blindes · Déroulé du jeu · Guide débutant · Pilier · Tournoi | 기존 fr 6편 라벨이 제각각(Abattage·Enchères·Actions d'enchères·Pilier·Guide pilier…) → 이 레인 값. 다른 레인과 대조 필요 |
| iso-raise | relance d'isolation (iso-raise) | unibet 축어 «Relancer permet d'isoler le limpeur»(L-D §4-4) |
| limper (사람) | limpeur | 같은 곳 축어 |
| top two pair | double paire max | §3-A «double paire» 응용 (when-to-fold) |
| sunk cost | coût irrécupérable (sunk cost) | 확정 카피 H2·FAQ 축어 (when-to-fold) |
| open-ended (draw) | quinte par les deux bouts | position-play — 본문 «suite» 금지 회피 |
| value bet | une value bet (여성) | 확정 카피 when-to-fold FAQ 11 축어 |
| laydown · bluff-catcher · float · squeeze · resteal · cold-call · donk-bet · nit | 영어 그대로 | 정본 없음 · 확정 카피 «Un vrai laydown» 선례 — 다른 레인(🅶·🅵)과 대조 필요 |

| felt(테이블 천) | **feutre** («feutre vert») — tapis는 all-in 뜻만 | §3-A ④ · 🅱 H-11 선례 · alt 9 + 본문 1 교체 |
| blank (턴·리버) | une brique (carte neutre) | 네이티브 렌즈 (a) · when-to-fold |
| coinflip | le « flip » | 네이티브 렌즈 (a) — «course» 폐기 · starting-hands |
| break-even (player) | break-even | 렌즈 — «à l'équilibre»가 GTO 균형과 충돌 · strategy·position-play |
| street | **street** (la street) — c-bet의 «rue» 6 → street | 레인 내 다수결 · H-1(🅰 tour vs 🅲 street)과 같이 판정 |
| caller (명사) | suiveur | §3-A ④ suivre · 3bet 선례 |
| check-call (동사) | check-call («je check-call») | «checke-suis» 폐기 · 네이티브 렌즈 (a) |
| tight-aggressive | serré-agressif (when-to-fold 2 통일) | strategy 13 · 초심자 렌즈 (c) |

## 링크 편차 — slug | EN 링크 대상 | 처리(빼기/대체 → 대상)
| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (전 편) | 8편 EN 링크 전부 51편+도구 안(추출 실측 10-07) | 편차 0 예정 — B가 추가 링크(positions → game-order · when-to-fold → betting-actions)를 넣으면 «추가»로 여기 기록 |
| holdem-strategy | — | **추가 (C · 브리프 L231 위임 앵커 · SEO 렌즈)** `/fr/blog/holdem-positions`(결정 1) · `/fr/hand-chart` «tableau des mains de départ par position»(결정 2) · `/fr/calculator` «calculateur poker»(maths) · `/fr/blog/holdem-3bet`(FAQ «Quand faire un 3-bet» 답) |
| holdem-strategy | — | **추가** `/fr/solver` (FAQ 13 GTO 답 · 앵커 «solver poker gratuit» · 브리프 지시) |
| holdem-positions | — | **추가** `/fr/hand-chart` (cut-off/bouton 절 · «tableau des mains de départ par position» · 키워드 «range bouton poker») |
| holdem-position-play | — | **추가** `/fr/hand-chart` (H2 «Combien de mains ouvrir…» · 브리프 지시) |
| holdem-when-to-fold | — | **추가** `/fr/blog/holdem-betting-actions` (첫 문단 «se coucher» 정의 · 소유표 ③) · **추가** `/fr/calculator` (cotes du pot 절 · «calculateur poker» · 브리프 H2 지시) |
| holdem-starting-hands-chart | `/downloads/poker-starting-hands-chart.pdf` · `/en/quiz` | 유지(fr 대체물 없음) + 앵커에 «(en anglais)» — 대상 동일이라 편차 아님 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- posts-en/holdem-continuation-bet.ts:181 «it charges all his missed hands» — ⅓팟 c-bet에 미스 핸드는 폴드한다 → «pressures». fr은 «met sous pression»으로 먼저 고쳤다(딜러·네이티브 렌즈 · 낮음~중간)
- posts-en/holdem-position-play.ts:128·281 «AK/AQ» UTG 코어 ↔ starting-hands-chart:121 «AKo (and sometimes AQo)» — 형제 글 표기 불일치(딜러 렌즈 · 낮음) · fr은 EN대로 둠
- posts-en/holdem-continuation-bet.ts:105 «over 97% on all three boards» ↔ position-play «Q♥T♥7♠·8♦5♣2♠만 97%+, A♦K♠2♥는 ⅓ 57,8 %» — 범위 표현 차이, 솔버 원자료 확인 필요(교열 렌즈 · 낮음) · fr은 EN대로
- GEO 직답 40단어 미만(EN 구조 그대로): starting-hands 2 · c-bet 3 · when-to-fold 2 · 3bet 2 H2 (SEO 렌즈 · 낮음)

## 헤드 요청
- GTO 썸네일 `gto-srp-dry-ace-oop-en.webp`·`gto-3bp-dynamic-oop-en.webp`(continuation-bet ①·⑨ 링크 thumb)는 영어 오버레이다. fr 변형이 없어(10-07 실측 — de·es·hi·id·ja·ms·pt·zh·zh-hant만 있음) B는 `-en`을 쓴다 → 🅶 레인이 `-fr` 변형을 만들면 헤드가 교체.

- `check:calc-parity:all` 🔴 fr 8 — `app/fr/calculator` 사전 related(«C related 8 vs 6» · slug 누락 holdem-starting-hands-chart · links[6]·[7] 없음). 레인 밖 파일 → fr-rank 헤드 요청 ①과 같은 건(배포 회차 «도구 4종 related»). main prebuild 통과에 필요.
- `check:intl-links` ✖ = 다른 레인 대상(51편 · 계획 §1) — 전 레인 머지 뒤 0이 된다.

- 카피 잠금 해제 판단 4건(C는 안 고쳤다): ① «solveur»(starting-hands H2 L166·FAQ L269·tldr · position-play tldr) ↔ §3-A ④ «solver» — 본문은 C가 solver로 통일 ② strategy FAQ «Quand faut-il se coucher au poker ?» = when-to-fold FAQ1 축어 · «Quand faire un 3-bet au poker ?» = 3bet H2·태그 이중 배정(답에 앵커는 C가 넣음) ③ tldr 3bet 618·c-bet 637·when-to-fold 623자 — EN 대비 +50 % ④ limping 카피 «limpers» ↔ 본문 «limpeur»
- 레인 밖 관찰: 🅰 holdem-betting-actions tags «check raise poker» — §3-B ⑤ 주인은 low-board-check-raise
- H-11 tapis: 🅳도 펠트 뜻 tapis 9 · 스택 뜻 2를 정리했다(feutre · stack) — 🅴·🅵 대조 때 같은 기준

## 미결
- (없음 — «limp = boiter»는 유지 판정(어원 사실 · 네이티브 렌즈 권고 문장으로 보강) · 손검산 16자리 완료)
