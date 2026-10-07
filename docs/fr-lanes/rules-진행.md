# fr-rules 진행 — 🅰 규칙(기존 재작업)

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-A-rules.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).

> 🅰는 신규가 아니라 **기존 7월판 6편을 EN 현행으로 다시 쓰는 것**이다 — slug·URL 그대로 · index.ts 안 건드림.

## 상태 — A ✅(10-07 · 브리프 `docs/fr-lanes/rules-brief.md` · Fable 카피 1회 · Opus 정확성 수정 2) / B ✅(10-07 · 6편 · audit:hard 🔴 0 ×6 · structure·drift fr 0 · next build 통과) / C ✅(10-07 · 렌즈 4종 + 2차 교열 · audit 🔴0🟠0 ×6 · structure fr 0 · next build exit 0) · 커밋 (보고 참조)

> 실행 기록(AUTONOMY-LIMITS): A = 2026-10-07 11:59 시작 · 한도 90분 · 자식 = Fable 서브 1(카피 판정) · 사용량 지표 미관측(계정 한도 비율 확인 수단 없음 — 추정하지 않는다).
> B = 2026-10-07 12:13 시작 · 한도 90분 · 자식 = Opus 서브 6(편당 1 · 집필만 · 게이트·등록 판정은 본체).
> C = 2026-10-07 12:24 시작 · 마감 13:54 · 자식 = Opus 렌즈 4(딜러·수학 / fr 네이티브 / SEO·GEO / 교열 diff) + 2차 교열 1(조건부) · 사용량 지표 미관측.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| texas-holdem-rules-for-beginners | ✅ | ✅ | ✅ | H2 17(+현지 1) · FAQ 16 · 표 16 |
| holdem-game-order | ✅ | ✅ | ✅ | H3 +1 · FAQ 12 · UTG 직답 문구 반영 |
| holdem-betting-actions | ✅ | ✅ | ✅ | H3 +1 · 협회 표 +1 · FAQ 11 |
| holdem-blind-meaning | ✅ | ✅ | ✅ | FAQ 10 · «tapis de 20BB» → «stack de 20BB» |
| holdem-all-in-rules | ✅ | ✅ | ✅ | H3 +2 · FAQ 10 · «vous» 1 → 본체 수정 |
| holdem-showdown-rules | ✅ | ✅ | ✅ | H2 +1 · 비교표 +1 · FAQ 9 |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| dead button | bouton mort (dead button) | blind-meaning |
| blind steal / re-steal | vol de blindes (blind steal) · re-steal | blind-meaning |
| fold equity | fold equity (풀이 «de vraies chances de faire coucher l'adversaire») | all-in-rules |
| floor | floor | all-in-rules |
| uncalled bet | mise non suivie | all-in-rules |
| re-opening the bet | « re-opening the bet » (TDA 원어 병기) | all-in-rules |
| oversized chip | un unique dernier jeton de valeur trop forte | all-in-rules |
| set | «un brelan servi : sa paire en main plus un neuf au board» | game-order · §3-A ③ 정합(C 반영) |
| straddle | 첫 등장 «straddle (overblind)» ×3편 · live straddle = «straddle live»(«vivant» 폐기) | §3-A · C 통일 |
| live bet | mise vivante (첫 등장 풀이 «une mise qui compte pour le tour en cours») | betting-actions |
| effective stack | tapis effectif(H3·FAQ 검색형) · 본문 «stack effectif» | all-in · §3-A ④ |
| full raise | relance complète(betting-actions) · relance pleine(all-in · tldr 확정) — betting-actions에 «on dit aussi « relance pleine »» 병기 | 헤드 신규 용어 대조 때 판정 |
| street | 쓰지 않음 — «tour (de mises)» · «étape» | rules-for-beginners «rue» 7 → 제거 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| texas-holdem-rules-for-beginners | /downloads/texas-holdem-rules-for-beginners.pdf | EN PDF 유지 + 앵커 «(PDF en anglais)» (fr PDF 없음 · 브리프 §0-7) |
| 6편 공통 | 미번역 대상 35건(check:intl-links ✖) | 전부 51편 안 대상 — EN 1:1 유지(배포는 51편 머지 뒤 1회). prebuild가 이 상태로 실패하므로 B는 «next build» 단독으로 컴파일 확인(exit 0) |
| (추가 링크) | rules-for-beginners +4(betting-actions · hand-rankings · blind-meaning · probability) · blind-meaning +1(tournament) · betting-actions +1(strategy) · all-in +1(/fr/calculator) | 브리프 지정 현지 추가 FAQ·용어 줄 앵커 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- lib/posts-en/texas-holdem-rules-for-beginners.ts:L353 | «One pair 43.8% — the most frequent hand at showdown» | 43,8 %는 7장 기준 출현 빈도이지 쇼다운 빈도가 아니다(네이티브 렌즈 · 낮음) — fr은 EN 축어 유지
- lib/posts-en/holdem-game-order.ts:L119 | «check the turn, then suddenly fire big on the river → observant opponents read weakness» | 보통은 강함/블러프로 읽힌다는 반론(네이티브 렌즈 · 낮음) — fr은 EN 축어 유지

## 헤드 요청
- (판단) betting-actions 확정 태그 «parole poker»가 브리프 §3 함정(가사 SERP)과 어긋난다는 SEO 렌즈 지적(낮음) — 카피 확정 규칙상 C는 안 바꿈.
- fr PDF 생성(scripts/generate-beginner-pdf.mjs) — 생기면 rules-for-beginners 앵커 «(PDF en anglais)» 삭제 · game-order 도입·Related 카드 «PDF imprimable»도 그때 정합.
- 머지 순서: 🅰 6편은 미번역 링크 35건 때문에 단독 머지 시 prebuild(check:intl-links) 실패 — 51편 머지 뒤 빌드(계획 §4).

## C 결과 (10-07)
- 게이트: audit:hard fr 6/6 🔴0 🟠0 · check:structure fr 0(반영 중 생긴 game-order li −1 복원) · faq-schema fr 6 성립 · meta 초과 0 · number-format fr ✅ · seo-sync 0 · drift fr ✅ · next build exit 0 · intl-links ✖35 = 미번역 대상(링크 편차 표 · 51편 머지 뒤 해소).
- §13 전사 대조(스크립트 · fr 구분자 정규화 · 색값·날짜·이미지 경로 제외): 카드·수치 집합 불일치 3자리 → 전건 정상(rules «52»·«6:1» = 현지 FAQ·표기 · game-order 카드 +1 = 풀핸드 직답 요약 · blind «2BB» = 공백 정규화). 손검산 6자리 ✔(rules 7장 표 3행 · game-order 풀핸드·L141 · showdown cards speak).
- 외부 링크 200: laliguedepoker.org/reglement/ (인용 2문장 원문 축어 확인) · fr.wikipedia Texas_hold_%27em.
- 렌즈: 딜러·수학 4(채택 4) · fr 네이티브 약 56행(채택 약 42 · 기각 14) · SEO·GEO 6(채택 4 · 기각 1 · 헤드 판단 1) · 교열 18행(채택 18 — 대부분 «H2 직답 ↔ EN 첫 단락 반복»). 반영 = 편당 Opus 서브 6 → 2차 교열 12(전건 채택 · 본체 반영).
- 기각 근거: showdown 본문 «showdown» 단독 = 브리프 6′-6 혼용 허용 · 규정 인용 안쪽 « » = 원문 축어 · la/les WSOP·조항 표기 형식·«de UTG»·«limit fixe» = 낮음·취향 · EN 유래 뉘앙스 2 = EN-먼저 후보로.
- 미결 처리: 외부 링크 ✔ · rules 51행 «passe» 삭제(§3-A 우선 · «parole»·«tapis»만) · 카드 제목 정합 ✔ · 직답 겹침 전 편 해소 · 첫 병기 순서 ✔(game-order 22행 turn·river 병기 · blind Related 카드 병기 제거 — 본문에 turn/river 없음) · showdown Rule 17 비교 ✔ · §13 손검산 ✔.
