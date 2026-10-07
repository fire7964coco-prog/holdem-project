# fr-gloss 진행 — 🅵 용어

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-F-gloss.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).

## 상태 — A ✅ (10-07 · 브리프 `docs/fr-lanes/gloss-brief.md` · Fable 카피 1회 → Opus 수정 10자리) / B ✅ (10-07 · 6편 + index [fr-gloss] 칸 2곳 · 미커밋 — C에서 커밋) / C ✅ (10-07 · 렌즈 4종 + 2차 교열 · 아래 «C 산출») · 커밋 = 이 진행 파일이 든 fr(gloss) 커밋

B 산출(2026-10-07): lib/posts-fr/ 6편 + index.ts [fr-gloss] 칸 두 곳. 집필 = Opus 서브 6개 병렬(편당 1 · 입력 = 브리프 §0·§1 + 담당 절 + EN 마스터 + 틀 blind-meaning + 계획 §3-A). 확정 카피 축어(글자 수 브리프와 일치). 자기 게이트: audit:hard fr 12/12 🔴 0 🟠 0 · check:structure 내 6편 결손 0 · EN↔fr 카드·수치 집합 6편 일치(차이 = «The 3 Things» 고정문 · 구분자) · 빌드 = prebuild에서 intl-links·calc-parity 빼고 전부 exit 0 + next build ✅ + postbuild ✅ · 산출물 FAQ 스키마 8/10/10/8/11/11 = fr 문항 수 · sitemap 원복.
패리티(EN→fr): glossary H2 10→11 · 표행 115→125(현지 대응표 10) · 링크 +3(/fr/glossary 1 · reading-the-board 2) / bad-beat FAQ 8→10 · 링크 +2(/fr/calculator «calculateur d'équité» · FAQ10 → holdem-probability) / cooler H2 10→11(현지 «Pourquoi dit-on « cooler »») / straddle FAQ 9→11 · 링크 +1(FAQ11 → blind-meaning) / fish·rake 1:1.
C 산출(2026-10-07): ⓪ main 머지(docs만) · ① audit:hard fr 12/12 🔴0 🟠0 · meta ✅ · seo-sync ✅ · structure 내 6편 결손 0 · intl-links 37 = 전부 다른 레인 대상(+1 = glossary FAQ → holdem-3bet 신규 앵커) · npx next build ✅ · ② 전사 대조 카드 6편 완전 일치 · 수치 불일치 = bad-beat alt «20 %»(EN «20 percent» 철자) · 카드 제목 «10 secondes» → 판정 완료 · 손검산 4자리(jackpot 풀 vs 쿼드 · 마부치 쿼드 vs 로열 · set over set · 쿨러 AA vs KK) 통과 · ③ 렌즈 4종 지적 약 70(딜러 5 · 네이티브 35 · SEO 11 · 교열 19 · 중복 포함) → 반영 약 60자리 · 기각 = 카피 잠금(rake desc time charge · glossary H2 «termes») · EN-먼저(아래) · 이미 링크 있음(glossary UTG → positions L132) · glossary 현지 표 박스 미적용(저) · date(헤드 요청 5) · ⑤ 2차 교열 지적 7 → 반영 6(seuil 성 일치 · devant 중복 · table 중복 · 3-bet 앵커 문구 · rake «dont» · cooler «le mot» 중복) · 1 선택(«quand l'argent est entré» 반복 = EN 동형) 기각.
C 주요 정정: glossary «carte assortie»(set 정의 오역) → «carte de même rang» · tapis=펠트 3자리 → feutre · offsuit → dépareillé(H-5 🅲 일치) · 직역투 다수(rue/barre/tableau/servis/lecture de travail/abusif/se bat/poches profondes 등) · «AA craqués» · fish 성수 일치 · cutoff → cut-off · top pair → top paire · straddle «lexique du poker» 앵커 → «jargon du poker»(§3-A ⑤ = /fr/glossary 전용) · 카드 제목을 대상 fr 제목에 맞춤(«Qui gagne en cas d'égalité ?» · «La cote du pot en 10 secondes» · «Cash game ou tournoi» · «Quelles mains jouer») · cooler → bad-beat 링크 1 신설(미결 해소) · cooler 현지 H2 어원 단락과 FAQ 중복 축소.
§13 커버리지 밖(게이트 미검사) = bad-beat 카드 문단 2(L124 full aux as vs carré de valets · L132 royal) · cooler 2(set over set 7♣7♦ vs J♠J♥ 외 1) — 서브 손검산 통과 보고 · C에서 다시 손검산.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-glossary | ✅ | ✅ | ✅ | 현지 추가 H2 1(영→불 대응) · 첫 화면 `/fr/glossary` 앵커 · nuts → reading-the-board 앵커 2 |
| holdem-bad-beat | ✅ | ✅ | ✅ | FAQ +2(traduction · chance) · `/fr/calculator` 앵커 선택 1 |
| holdem-cooler | ✅ | ✅ | ✅ | 현지 추가 H2 1(«Pourquoi dit-on cooler») · EN L102 MA-350 정정본 사용 |
| holdem-fish | ✅ | ✅ | ✅ | PAA «Comment appelle-t-on un joueur de poker ?» 주인(glossary와 배정) |
| holdem-rake | ✅ | ✅ | ✅ | FAQ L166 합법성 → «Pourquoi la salle prend-elle un rake ?» 교체 |
| holdem-straddle | ✅ | ✅ | ✅ | FAQ +2(traduction = overblind · mise de départ → blind-meaning) |

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

| hole cards | cartes privatives | B 레인 결정(glossary·bad-beat 일치) |
| community cards | cartes communes | B glossary |
| top pair | top paire | B(fish·bad-beat 일치) |
| orbit | tour de table | B(fish·bad-beat 일치) |
| offsuit / suited | dépareillé(e)(s) / assorti(e)(s) — fish 통일 · suited connectors = «connecteurs assortis» | C 통일(🅲 H-5와 같음) |
| felt | feutre (vert) — «tapis»는 all-in 전용이라 회피 | B(rake·cooler·straddle) |
| nut flush | couleur max | B cooler |
| leak | fuite | B cooler |
| TAG / LAG | 그대로 · 풀이 serré-agressif / large-agressif | B fish |
| home game | partie privée | B rake |
| short-handed | tables à peu de joueurs | B rake |
| under the gun | sous le gun (UTG) | B straddle |
| live blind | blinde vivante | B straddle |
| floor | floor (le responsable de salle) | B straddle |
| house rules | règles de la maison | B straddle |
| tie-breaker | règles de départage | B glossary |
| runout | board («tableau» 금지) | C 네이티브 |
| equity bar | seuil d'équité | C 네이티브 |
| dealt-in players | joueurs ayant reçu des cartes («servis»는 paire/brelan servi와 충돌) | C 네이티브 |
| working read | hypothèse de travail | C 네이티브 |
| street (bad-beat 1자리) | «un tour plus tôt, à la turn» — H-1 판정 대기라 street 회피 | C |
| cutoff | cut-off (CO) | §3-A ④ |
| solver(s) | solver(s) — «solveur» 금지 | §3-A ④ |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (없음) | 6편 EN 내부링크 전부 51편 안 · 대회 가이드 링크 0 | 편차 0 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `lib/posts-en/holdem-glossary.ts` L38 | «a dozen terms» 뒤에 8쌍뿐 | C 딜러 렌즈 — fr은 EN대로 둠
- `lib/posts-en/holdem-cooler.ts` | bad-beat로 가는 링크 없음(bad-beat → cooler만 있음) | C SEO 렌즈 — fr은 L78에 1개 추가
- `lib/posts-en/holdem-fish.ts` L96 | «competitors mix up» — 독자가 «상대»로 읽음 | C 네이티브
- `lib/posts-en/holdem-cooler.ts` L123 pull | 인용 안에서 I → you 전환 | C 네이티브
- `lib/posts-en/holdem-rake.ts` L76 근처 | $1/$2·$5 cap에서 «most pots brush the cap» → $100+/h 과대 | C SEO
- EN 6편 직답 길이 | rake L120 9단어 · bad-beat L130 153단어 등 40~75 범위 밖 H2 다수 | C SEO — fr은 구조 패리티 유지
- EN «Who wins at showdown» 카드 → tiebreak-rules | 대상 제목과 불일치 | C SEO
- `lib/posts-en/holdem-glossary.ts`(표 L59~L250) | TNT·ITM·squeeze·flat(call) 행 없음 | fr PAA «C'est quoi TNT poker ?»(tnt 320) · «Que signifie ITM au poker ?»(itm 170) · squeeze 140 · flat 50(L-F §1·§3-3) — EN에 없어 fr에서 추가하지 않았다. ms 레인 «poker face» 후보와 같은 성격

## 헤드 요청
1. **«glossaire»도 `/fr/glossary` 소유 헤드로 볼지 판정** — 계획 §3-B ①은 lexique/termes/vocabulaire 셋만 적었다. 레인은 보수 해석으로 glossaire를 seoTitle·H1·tags에서 뺐다(«glossaire poker» 10 · 같은 의도 묶음 L-F §2-1).
2. **카드 라벨 레인 간 통일**(위 신규 용어 표) — fr 코퍼스에 정본이 없다. 머지 때 다른 레인 라벨과 대조해 주십시오.
3. glossary 표 115행의 머리 형식 «**Fold** (se coucher)»(영어 + §3-A 대응어)는 레인 결정이다 — `/fr/glossary` 사전 표기(«Tapis (all-in)» = 프랑스어 먼저)와 순서가 반대다. 글은 «영→불» 각도라 영어 먼저를 택했다. 이견 있으면 B 전에 알려 주십시오.
4. 🟠 **빌드 prebuild 두 게이트가 레인 단독으로는 빨갛다(설계상 · ms 선례)**: ① check:intl-links 36건 = 전부 다른 fr 레인 대상(pot-odds · position-play · tournament-vs-cash-game 등 — 계획 §1 51편) ② check:calc-parity:all fr 7건 = fr 코퍼스가 6→12편이 되며 related 목표가 min(8, 코퍼스)=8로 올라 계산기 사전 related 6개가 부족(계획 §3-B ⑧ «계산기 related에 7편 추가(배포 회차)»와 같은 자리 · app/ 소유 밖). B는 두 개를 뺀 prebuild + next build + postbuild로 확인했다.

## 미결
- ✅ (C 해소) cooler → bad-beat 링크 · offsuit 표기 · «Comment calculer» 카드 제목(대상 fr 제목 «La cote du pot en 10 secondes»로 교체).
- 🟠 **헤드 요청 5 — date**: 6편 date = 집필일 2026-10-07(ms 규격 §5 «updated·date = 집필일»). 교열 렌즈 지적: 기존 fr 6편(🅰)·de/es/ja/pt 등은 EN date를 복사한다. 레인 통일 판정은 헤드.
- 🟠 **헤드 요청 6**: 🅰 blind-meaning에 EN의 holdem-straddle 링크 결손(check:structure) — 이제 대상이 생겼다. 🅳 tour의 holdem-tournament L271도 «lexique du poker» → holdem-glossary 앵커(§3-A ⑤ 위반 · SEO 렌즈 보고).
- 🪶 bad-beat readnext «Le cooler au poker» vs 카드 «C'est quoi un cooler ?»(fish 동일) — B 산출 그대로, 저우선.
- 🟠 **cooler 브리프 소유표 «bad beat 정의는 /fr/blog/holdem-bad-beat로 앵커(EN과 같은 자리)»** — EN cooler에는 bad-beat 링크가 없다(브리프 링크 목록 L467~473). B는 편차 0을 우선해 추가하지 않았다. C 또는 헤드 판정.
- C에서 볼 것: offsuit 표기 통일(위 신규 용어) · bad-beat 관련 글 카드 제목 «Comment calculer les cotes du pot»(§3-B ⑧ «calcul» 금지가 title·H1에만 걸리는지 — 카드 제목이라 B는 허용으로 봤다).
