# fr-gloss 진행 — 🅵 용어

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-F-gloss.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).

## 상태 — A ✅ (10-07 · 브리프 `docs/fr-lanes/gloss-brief.md` · Fable 카피 1회 → Opus 수정 10자리) / B ☐ / C ☐ · 커밋 —

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-glossary | ✅ | ☐ | ☐ | 현지 추가 H2 1(영→불 대응) · 첫 화면 `/fr/glossary` 앵커 · nuts → reading-the-board 앵커 2 |
| holdem-bad-beat | ✅ | ☐ | ☐ | FAQ +2(traduction · chance) · `/fr/calculator` 앵커 선택 1 |
| holdem-cooler | ✅ | ☐ | ☐ | 현지 추가 H2 1(«Pourquoi dit-on cooler») · EN L102 MA-350 정정본 사용 |
| holdem-fish | ✅ | ☐ | ☐ | PAA «Comment appelle-t-on un joueur de poker ?» 주인(glossary와 배정) |
| holdem-rake | ✅ | ☐ | ☐ | FAQ L166 합법성 → «Pourquoi la salle prend-elle un rake ?» 교체 |
| holdem-straddle | ✅ | ☐ | ☐ | FAQ +2(traduction = overblind · mise de départ → blind-meaning) |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| The X, at a glance (H3) | ### En bref | fr 선례 `holdem-betting-actions` L36 |
| Where to Go Next (glossary) | ## Par où continuer ? | 레인 결정(§3-A에 자리 없음) |
| 카드 라벨 Glossary / Rules / Hand Rankings / Strategy / Odds & Math / Tournament | Jargon / Règles / Mains / Stratégie / Cotes &amp; maths / Tournoi | fr 코퍼스 라벨 불통일(Pilier·Guide pilier·Blindes…) → 레인 결정 · 다른 레인과 대조 필요 |
| suckout | suckout (첫 등장 «la carte miracle de l'adversaire») · 구어 «se faire aspirer» | 레인 결정 |
| favorite / underdog | favori / outsider | 레인 결정 |
| rake | rake (첫 등장 «la commission prélevée par la salle») · prélèvement 병기 | L-F §7-3 (PokerStars FR 제목 축어) |
| rake cap | plafond (cap) · rake plafonné — «capé» 미채택 | 레인 결정 |
| time charge | time charge (forfait horaire) | 레인 결정 |
| tournament fee / juice / vig | frais d'inscription · «juice»/«vig» 인용 | yourpokerdream 축어(L-F §4-5) |
| overpair | overpair (paire supérieure au board) | 레인 결정 |
| set over set | brelan servi contre brelan servi supérieur (set over set) | §3-A set = brelan servi |
| coolered | se faire cooler / prendre un cooler | 레인 결정 |
| fish · shark · whale | 영어 그대로 + 첫 등장 «poisson» · «requin» · «baleine» | L-F §5(경쟁 공통 병기) |
| straddle «option» | 🔴 straddle 이름으로 «option» 금지(BB의 relancer 권리와 충돌) — overblind만 | §3-A «straddle (overblind)» 보강 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (없음) | 6편 EN 내부링크 전부 51편 안 · 대회 가이드 링크 0 | 편차 0 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `lib/posts-en/holdem-glossary.ts`(표 L59~L250) | TNT·ITM·squeeze·flat(call) 행 없음 | fr PAA «C'est quoi TNT poker ?»(tnt 320) · «Que signifie ITM au poker ?»(itm 170) · squeeze 140 · flat 50(L-F §1·§3-3) — EN에 없어 fr에서 추가하지 않았다. ms 레인 «poker face» 후보와 같은 성격

## 헤드 요청
1. **«glossaire»도 `/fr/glossary` 소유 헤드로 볼지 판정** — 계획 §3-B ①은 lexique/termes/vocabulaire 셋만 적었다. 레인은 보수 해석으로 glossaire를 seoTitle·H1·tags에서 뺐다(«glossaire poker» 10 · 같은 의도 묶음 L-F §2-1).
2. **카드 라벨 레인 간 통일**(위 신규 용어 표) — fr 코퍼스에 정본이 없다. 머지 때 다른 레인 라벨과 대조해 주십시오.
3. glossary 표 115행의 머리 형식 «**Fold** (se coucher)»(영어 + §3-A 대응어)는 레인 결정이다 — `/fr/glossary` 사전 표기(«Tapis (all-in)» = 프랑스어 먼저)와 순서가 반대다. 글은 «영→불» 각도라 영어 먼저를 택했다. 이견 있으면 B 전에 알려 주십시오.

## 미결
- (없음)
