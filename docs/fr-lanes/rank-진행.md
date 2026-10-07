# fr-rank 진행 — 🅱 족보

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-B-rank.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).

## 상태 — A ✅(10-07 · 브리프 `docs/fr-lanes/rank-brief.md` · Fable 카피 1회 + Opus 조정 8) / B ✅(10-07 · Opus 포크 6 병렬 · index 칸 등록 · 자기 게이트 아래 «미결») / C ✅(10-07 · 게이트 전건 · 전사 대조 · 손검산 48자리 · 렌즈 4종 지적 59/반영 45 · 2차 교열 10/반영 8) · 커밋 (이 커밋)

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-hand-rankings | ✅ | ✅ | ✅ | 36KB · H2 14(🆕1) · H3 16(à imprimer 강등) · FAQ 23 · 표 5 |
| holdem-flush-vs-straight | ✅ | ✅ | ✅ | 21KB · H2 🆕1 · FAQ 10 |
| holdem-kicker | ✅ | ✅ | ✅ | 19KB · FAQ 13 · 🔴 audit 시나리오 미검출 → C 손검산 |
| holdem-tiebreak-rules | ✅ | ✅ | ✅ | 30KB · H2 🆕2 · FAQ 16 · 🔴 audit 미검출 → C 손검산 |
| holdem-split-pot-rules | ✅ | ✅ | ✅ | 24KB · FAQ 14 · 🔴 audit 미검출 → C 손검산 |
| holdem-reading-the-board | ✅ | ✅ | ✅ | 27KB · H2 🆕1 · FAQ 12 · 🔴 audit 미검출 → C 손검산 |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| tie · break a tie | égalité · départager | L-B §2 자동완성(égalité au poker qui gagne · départager 13변형) · 코퍼스 égalité 1 |
| split pot · chop | pot partagé (split pot) · partager le pot · 구어 «chop» 1회 | 코퍼스 pot partagé 1 · partage du pot 1 · 도구 용어집 Pot «(split pot)» |
| odd chip | le jeton restant (odd chip) | 코퍼스 0 · 서술형 고정(«jeton impair»는 1차 근거 없어 미채택) |
| playing the board | jouer le board | §3-A board = le board |
| best five | les cinq meilleures cartes · ta meilleure main de 5 cartes | 신규 |
| first / second / third kicker | premier / deuxième / troisième kicker | 신규 |
| dominated ace · outkick | as dominé · battre au kicker | 신규 |
| nut flush | la couleur max (nut flush) | 신규 |
| steel wheel · Broadway | la roue à la couleur · Broadway (la quinte à l'as) | 도구 용어집 «Roue (wheel)» 확장 |
| paired / dry / wet board | board pairé · board sec · board humide | L-B §4-B pokerstars.fr 축어 |
| female dealer | la donneuse | 코퍼스 donneur 46 |
| H3 The Short Answer · … at a glance · The core numbers | La réponse courte · … en un coup d'œil · Les chiffres clés | 고정문 보조(브리프 확정 카피 H3가 우선) |
| tiebreak 라벨 No kicker | Pas de kicker | 신규 |
| (B) top pair · buy-in · side card | paire max · cave · carte d'à côté(경험담 1회) | kicker B — 포크가 buy-in을 «recave»(= rebuy)로 써서 통합 단계에서 «cave»로 교정 |
| X-high straight / straight flush / flush | **quinte hauteur X · quinte flush hauteur X · couleur hauteur X**(C 통일 — «au 10»·«au six»·«à la dame»·«couleur à l'as» 전부 교체) · Broadway = «la quinte à l'as»는 고정 별칭이라 유지 | C 네이티브 렌즈 |
| pocket pair · top set · ace high | paire servie · **brelan servi (le brelan max)** · hauteur as | C — «top brelan»은 §1-B «brelan servi»와 섞여 교체 |
| (B) counterfeit | contrefaçon (counterfeit) | tiebreak B |
| (B) bring-in | qui ouvre l'action (bring-in) | tiebreak B |
| (B) floor · prize pool · tournament chop | superviseur · dotation · deal | split-pot B |
| (B) table a hand (v.) | abattre | flush-vs-straight B · 브리프 §1-B 범위 |
| (C) felt · stack | **la table / le feutre** · **stack** — «tapis»는 all-in 뜻만(계획 §3-A ④). 펠트·스택 뜻 tapis 8자리 교체 | C 네이티브 렌즈 · 형제 레인 대조 대상 |
| (C) first mention glosses | la river (la rivière) · la turn (le tournant) · board (les cartes communes) — 편마다 첫 산문 등장 1회 | 계획 §3-A ④ — B에서 0이었던 것을 C에서 넣음 |
| (B) time bank | time bank | hand-rankings B — 포크 «pendule»을 통합 단계에서 교정 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (6편 전부) | — | 편차 0 — EN 대상 전부 51편 안 · 제외 대회 가이드 링크 0 |
| holdem-hand-rankings · holdem-reading-the-board | (현지 추가) | `/fr/calculator` «calculateur d'équité» 앵커 각 1 (계획 §3-A ⑤) |
| holdem-hand-rankings | (현지 추가) | FAQ 🆕 로열 확률 답 → holdem-probability 앵커 1 (브리프 §1-G) |
| holdem-split-pot-rules | (현지 추가) | FAQ 🆕 «en cas d'égalité» 답 → holdem-tiebreak-rules 앵커 1 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- 없음(렌즈 4종 모두 EN 유래 결함 0 — EN 6편 7장 예시 전건 재검산 포함)

## 헤드 요청
- ① **`app/fr/calculator` 사전 related**(레인 밖): fr 코퍼스가 6→12편이 되면서 `check:calc-parity:all` 🔴 fr 7(«C related 8 vs 6» + related.links[6]·[7] 없음). 머지와 함께 사전 related를 EN 8과 맞춰야 main prebuild가 통과한다(ms 🅲 헤드 요청 ③과 같은 종류 · 배포 회차 «도구 4종 related»와 같은 일).
- ② 🅰 rules 레인 참고: 이 레인 6편이 생기면서 `check:structure`가 🅰 4편(betting-actions · game-order · showdown-rules · texas-holdem-rules-for-beginners)의 «링크 개수 결손»(rank 6편 대상)을 새로 보인다 — 🅰 재작업 몫.
- ③ **카피 동결 자리 — SEO 렌즈 지적(판정은 헤드)**: 확정 카피라 C가 바꾸지 않았다.
  - flush-vs-straight tags «couleur poker»(hand-rankings 태그와 정확히 중복) · «flush poker» · «straight poker» = 족보 이름 헤드(hand-rankings 몫) → 비교형 롱테일(«brelan ou suite poker» · «carré ou couleur poker»)로 교체 제안 · 확신 중간
  - split-pot tag «pot annexe poker» = 기존 holdem-all-in-rules 태그와 정확히 중복 → 빼거나 «partage pot égalité poker» · 확신 중간
  - hand-rankings FAQ 질문 3개가 주인 글 문장과 축어 동일: «Qu'est-ce qui bat une suite au poker ?»(= flush-vs-straight FAQ) · «Qu'est-ce qui bat une couleur au poker ?»(= flush-vs-straight H2) · «C'est quoi le kicker au poker ?»(= kicker H2·seoTitle) → «Quelles mains sont plus fortes qu'une suite / qu'une couleur ?» · «À quoi sert le kicker dans l'ordre des mains ?» 제안(A-⑥ 조정 2·3과 같은 종류) · 확신 중간
  - (낮음) hand-rankings H2 «Pourquoi la couleur bat-elle la suite ? Le calcul en bref» ≈ flush-vs-straight FAQ · kicker FAQ «Que veut dire « jouer le board » ?» ≈ reading-the-board FAQ 3
- ④ **링크 편차 판정**: split-pot 🆕 FAQ의 holdem-tiebreak-rules 앵커 1(위 «링크 편차» 표)은 브리프 §1-D «편차 0» 밖의 현지 추가다 — 교열 렌즈 지적, 레인 형제 글이라 유지. 헤드가 빼라 하면 문장만 남기고 링크 제거.

## 미결
- (C 종결) B→C 미결 3건 전부 처리: 손검산 4편 48자리 오류 0 · vous 3건 유지(복수 용법 — 네이티브 렌즈 수용), «Aucun de vous» 1건만 «vous deux» · «à imprimer» H3 강등 유지(SEO 렌즈 확인).
- (헤드) 머지 시 위 «헤드 요청» ①~④ + 신규 용어 «tapis 정리»·«hauteur X» 통일을 다른 fr 레인과 대조(계획 §2-④).
