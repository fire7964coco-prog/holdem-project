# fr-tour 진행 — 🅴 토너먼트

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-E-tour.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = `docs/fr-lanes/tour-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터).

## 상태 — A ✅(10-07 · 브리프 + Fable 카피 1회 · Opus 조정 4) / B ✅(10-07 · Opus 서브 5 병렬 집필 · 자기 게이트 아래) / C ✅(10-07 · 게이트 전건 · §13 전사 대조 · 렌즈 4종 · 2차 교열) · 커밋 아래 git log «fr(tour): C 마감»

## C 결과 (10-07)
- 게이트: audit:hard fr 🔴 0 · meta · seo-sync · faq-schema · hangul · number-format · directives · heading-text · answer-echo exit 0 · structure 내 5편 결손 0 · intl-links = 다른 레인 «미번역»만(설계대로) · `npx next build` ✅
- §13 전사 대조(fr 구분자 정규화 스크립트): 카드 토큰 5편 EN과 완전 일치 · 숫자 차이 전건 설명됨(시간 «10 h 30» · «À retenir» 라벨 · APT 링크 편차 · 현지 추가 FAQ) · 손검산 22 vs AKo 전수 52,649 % ✓ · 43,9 % · 8,3 % · ICM 표 ✓ (딜러 렌즈 별도 재산 ~110자리 오류 0)
- 렌즈 4종: 딜러·수학 4(fr 오류 0 · 채택 3 · EN-먼저 1) · fr 네이티브 ~45 · SEO/GEO 15 · 교열 15 → 중복 합쳐 **채택 반영 약 75자리**(본문 수정 73 + 레인 내부 카드 제목 통일 15 + 외부 카드 제목 8) · 기각·보류는 아래 «헤드 요청»·«EN-먼저»
- 2차 교열(반영 diff 82헝크): 결함 7 → 반영 6(icm chip EV 성 잔존 1 · vs-cash L99 중복 → 원문 복귀 · vs-cash field 첫 풀이 · short-stack 괄호 중첩 · «et en dessous» · tournament MTT 직답 구도) · 유지 1(bubble abattage 병기 위치 — L56 기존 괄호와 겹침)
- 카피(title·seoTitle·desc·tldr·H2) 무변경(잠금 준수)

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-tournament | ✅ | ✅ | ✅ | 링크 편차 2 · FAQ 합법성 → 운영 질문 교체 · C: MTT·ITM H2 아래 굵은 직답 1문장씩 추가(EN·FAQ 축어 근거) |
| holdem-icm | ✅ | ✅ | ✅ | |
| holdem-bubble | ✅ | ✅ | ✅ | |
| holdem-short-stack | ✅ | ✅ | ✅ | C: FAQ «tapis effectif» 일반 서술 정정(데드머니 — «perdre»만) |
| holdem-tournament-vs-cash-game | ✅ | ✅ | ✅ | FAQ 세금 → 운영 질문 교체 · EN 태그 «ICM poker» 버림 · 굵은 직답 추가분(H2 2~10·12) 유지 판정(구조 패리티 «많은 것 허용» · 클러스터 일관) · 중복 4곳 정리 |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| MTT | MTT (첫 등장 «tournoi multi-tables») | AIO 축어 · mtt poker 210 |
| buy-in · fee | buy-in (첫 등장 «droit d'entrée») · salle 몫 = «les frais» | PokerStars.fr «frais d'entrée»와 혼동 방지 — «frais»는 EN fee 자리만 |
| prize pool · payout structure | prize pool (첫 등장 «la cagnotte») · structure des gains | PokerStars.fr «cagnotte» |
| pay jump | palier de gains (pay jump) | `local-voice` §2 «paliers» · PokerStars.fr «Payjump (palier de gains)» |
| ITM | ITM (« In The Money — dans l'argent ») | itm poker 170 · AIO |
| starting / big / medium / short stack · chip leader | stack de départ · gros stack · stack moyen · short stack · chip leader | §3-A ④ «stack» · PokerStars.fr bulle 3분할 |
| short stack 병기 | «short stack (« petit tapis »)» 첫 정의 1회만 | SERP 제목 3/9 병기 · §3-A ④ 예외(tapis=all-in 원칙 유지) |
| effective stack | stack effectif (« tapis effectif ») 1회 | PAA «Qu'est-ce que le tapis effectif au poker ?» · 도구 dict L272 |
| push/fold | push or fold | 도구 계산기 정본 표기 |
| first-in | first-in (premier à entrer dans le coup) | 도구 «first-in» |
| late reg · re-entry · rebuy | inscription tardive (late reg) · réentrée (re-entry) · recave (rebuy) | PokerStars.fr «inscription tardive · réinscription» · 코퍼스 cave |
| PKO | PKO (KO progressif) | 자동완성 «poker ko progressif» |
| seat card · tournament director · bag · dinner break | carte de placement (seat card) · directeur de tournoi · mettre ses jetons en sac (bag) · pause dîner | 🆕 서술형 |
| burst the bubble · stone bubble · money / final-table / satellite bubble | la bulle éclate · bulle stone (stone bubble) · bulle des places payées · bulle de la table finale · bulle de satellite | 위키 «La bulle éclate» · reddit «bulle stone» |
| bust on the bubble (관용) | faire la bulle | Winamax · 자동완성 «faire la bulle (au) poker» |
| hand-for-hand · stalling | hand-for-hand (main par main) · stalling (jouer la montre) | 🆕 |
| risk premium · ICM tax | risk premium (prime de risque) · taxe ICM (ICM tax) | risk premium poker 30 |
| chip EV · $EV | chip EV (cEV) · $EV | PokerPro «cEV v $EV» |
| M-ratio · zones | valeur M (M de Harrington, ou ratio M) · Zone verte/jaune/orange/rouge/morte | 도구 계산기 라벨 축어 · m ratio poker 10 |
| cash game | cash game (첫 등장 « partie libre ») | PokerStars.fr 축어 |
| buy-in (cash·뱅크롤 단위) | cave («20 à 40 caves») | 코퍼스 cave 5 |
| hourly · cash rate · micro stakes | taux horaire · taux d'ITM · micro-limites | PokerStars.fr «micro-limites» |
| ratholing · rack up | ratholing · ramasser ses jetons | 🆕 |
| field | **field** (첫 등장 «field (l'ensemble des inscrits)») · «gros field» — «champ» 금지 | C 네이티브 렌즈(Winamax 구어 «gros field») · vs-cash «champ» 4 → field |
| chip EV (성) | **la chip EV** (여성 — EV = espérance de valeur) | C 렌즈 갈림(교열 남성 · 네이티브 여성) → 여성 채택 · 🔴 다른 레인 대조 필요 |
| call off (올인 콜) | «payer un tapis» · «payer pour tout ton stack» — «payer à tapis» 금지 | 네이티브 렌즈 · icm·vs-cash 기존 표현 |
| flat call | «suivre (flat call)» — «payer en flat» 금지 | 네이티브 렌즈 |
| low stakes | petites limites (micro stakes만 micro-limites) | 교열 렌즈 |
| short-handed | short-handed (à peu de joueurs) 첫 등장 | 네이티브 렌즈 |
| x (배수) | «1,5×» (곱셈 기호) | bubble 기존 표기 · 브리프 §1-C |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| holdem-tournament | L191 본문 apt-incheon-2026-guide | 빼기 — 문장째(링크 안내문뿐이라 링크를 빼면 문장이 빈다) |
| holdem-tournament | L321 readnext apt-incheon-2026-guide | 대체 → holdem-icm(readnext 3장 유지 · ms 선례) |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `lib/posts-en/holdem-icm.ts:183`·`:238` | readnext·그리드 카드 제목 «Texas Hold'em Tournament Strategy» ≠ 대상 글 title «How Poker Tournaments Work — Buy-Ins, Formats & Day 1» | ms 레인 09-26 동일 지적 승계(미처리) — fr은 대상 fr title로 쓴다
- `lib/posts-en/holdem-bubble.ts` «Shove or fold — never limp or call off» | 숏스택에게 «올인 콜 절대 금지»는 과장 — 형제 글 short-stack L111(BB 콜 레인지의 핵심 = 스몰 페어·약한 에이스, 43.9% 바)과 충돌 | 딜러 렌즈(확신 낮음) · fr은 EN 충실 유지
- `lib/posts-en/holdem-tournament-vs-cash-game.ts:398` «re-entry lets you buy back in after busting during a set period» | «during a set period»가 탈락 시점인지 재입장 가능 기간인지 모호 | 네이티브 렌즈 · fr은 «pendant une période donnée, … si tu es éliminé»로 명확화
- `lib/posts-en/holdem-tournament.ts` H2 «Tournament formats»·«ITM» 아래 직답 문장 없음(바로 표/라벨) | GEO 직답 결손 | SEO 렌즈 · fr은 H2가 질문형(MTT·ITM)이라 굵은 직답 1문장씩 추가
- `lib/posts-en/holdem-bubble.ts` 앵커 «fold equity» → holdem-when-to-fold | «fold equity»는 holdem-equity의 헤드 | SEO 렌즈(확신 낮음) · fr 유지

## 헤드 요청
- 🔴 **`check:calc-parity:all` fr 불일치 14**(B 등록 직후 발생 · 원인 = fr에 holdem-icm·holdem-short-stack이 생겨 `app/fr/calculator` dict가 icmGuide.deal.link · related links[6]·[7]을 요구) → `app/`은 헤드 소유 · 계획 §3-B ⑦⑧ «배포 회차» 작업. 머지 전 처리 안 하면 prebuild가 막힌다.
- `check:intl-links` exit 1 = 다른 레인 대상 15건 «미번역»(equity · 3bet · pot-odds · when-to-fold · rake · starting-hands-chart · hand-rankings) — 계획 §2-③ 설계대로(전 레인 머지 뒤 0). 그래서 B는 `next build`를 prebuild 없이 직접 돌려 통과 확인(나머지 prebuild 검사 7종 exit 0).
- 참고: `check:structure` fr 🟠 4건은 🅰 파일(blind-meaning link 2·cardn −2 · rules-for-beginners link 1 · betting-actions li −3 · game-order faq −4) — 이 레인 5편이 생겨 «걸 수 있게 된» 링크 포함. 🅰 레인/헤드 판정.
- 브리프 오기: tour-brief.md:L768 vs-cash 표 «11» → 실제 12(같은 브리프 L831 목록·EN 모두 12).
- 브리프 전제 오기: tour-brief.md §1-A «EN 5편은 각 H2 첫 문장이 굵은 직답» → 실제로는 icm·bubble·short-stack만. tournament·vs-cash EN은 굵은 첫 문장 0 → B가 두 편을 다르게 처리한 원인. C 판정 = vs-cash 추가분 유지 · tournament는 EN 패리티 + 질문 H2 2곳(MTT·ITM)만 추가.
- 🔴 **레인 간 분열 «tableau des mains de départ»**: 계획 §3-A ⑤·§3-B ⑨ = `/fr/hand-chart` 앵커인데 다른 레인 파일에 같은 문구가 holdem-starting-hands-chart(글) 대상으로 12회(SEO 렌즈 실측). 이 레인은 «quelles mains de départ jouer»로 바꿈(tournament L200 · vs-cash L147) · 카드 제목 «Mains de départ au poker»(fr-strat 현재 title 축약 — 🅳 머지 뒤 대조).
- «lexique du poker» → holdem-glossary(글) 오용: 이 레인 1건 «jargon du poker»로 수정 · 다른 레인에 2건 더 있음(SEO 렌즈) — 헤드 대조.
- 🅳 미머지라 남긴 임시 카드 제목: «Les positions à la table de poker expliquées»(tournament 그리드) · «Quand se coucher au poker»(bubble readnext·그리드 · short-stack 그리드) · «Mains de départ au poker» → 🅳 머지 뒤 그 title로(헤드 또는 lane-sync 후 이 레인).
- chip EV 성: 이 레인 = 여성 «la chip EV» 통일 → 다른 레인(🅲 equity 등) 대조.
- «position précoce»(short-stack L94·L152·L215) vs 🅳 positions 표기 대조 · 클럽 구어 «en début de parole» 후보(네이티브 렌즈 · 낮음).
- 태그 카니발(카피 잠금이라 레인 무수정): short-stack «fold equity poker» ↔ 🅲 equity «fold equity» · «all in poker tournoi» ↔ 🅰 all-in «all in poker»(경미) · FAQ «L'ICM compte-t-il en cash game ?»(vs-cash) ↔ icm FAQ 같은 의도(EN도 양쪽).
- 🅰 game-order: 이 워크트리 사본 title은 «… à l'abattage», fr-integration은 «… au showdown» → 카드 제목은 fr-integration 축어로 씀(lane-sync 후 일치 확인).

## 미결
- 없음(B 미결 4건 C에서 종결: 확신 없는 자리 전건 판정 · 22 vs AKo 52,649 % ✓ · 🅰🅱🅲 카드 제목 교체 · 🅳는 «헤드 요청»으로).
