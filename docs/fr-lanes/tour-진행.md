# fr-tour 진행 — 🅴 토너먼트

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-E-tour.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = `docs/fr-lanes/tour-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터).

## 상태 — A ✅(10-07 · 브리프 + Fable 카피 1회 · Opus 조정 4) / B ☐ / C ☐ · 커밋 —

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-tournament | ✅ | ☐ | ☐ | 링크 편차 2 · FAQ 합법성 → 운영 질문 교체 |
| holdem-icm | ✅ | ☐ | ☐ | |
| holdem-bubble | ✅ | ☐ | ☐ | |
| holdem-short-stack | ✅ | ☐ | ☐ | |
| holdem-tournament-vs-cash-game | ✅ | ☐ | ☐ | FAQ 세금 → 운영 질문 교체 · EN 태그 «ICM poker» 버림 |

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

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| holdem-tournament | L191 본문 apt-incheon-2026-guide | 빼기 — 문장째(링크 안내문뿐이라 링크를 빼면 문장이 빈다) |
| holdem-tournament | L321 readnext apt-incheon-2026-guide | 대체 → holdem-icm(readnext 3장 유지 · ms 선례) |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `lib/posts-en/holdem-icm.ts:183`·`:238` | readnext·그리드 카드 제목 «Texas Hold'em Tournament Strategy» ≠ 대상 글 title «How Poker Tournaments Work — Buy-Ins, Formats & Day 1» | ms 레인 09-26 동일 지적 승계(미처리) — fr은 대상 fr title로 쓴다

## 헤드 요청

## 미결
- B: 🅲·🅳 대상(equity · pot-odds · probability · when-to-fold · starting-hands-chart · positions) readnext·그리드 제목 = 임시 직역 → C에서 머지 파일 title로 교체(브리프 §1-D).
- B: 🅰 재작성 중인 blind-meaning · texas-holdem-rules-for-beginners · game-order 제목 → C에서 🅰 머지 파일과 대조.
