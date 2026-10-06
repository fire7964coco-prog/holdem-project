# fr 키워드 뱅크 — 51편 수요 실측 (fr 클러스터 0-1 · 2026-10-07)

> 계획 정본 = `docs/fr-cluster-plan.md`. 이 문서는 **0-1 산출물**이다 — 0-2(SERP)·0-3(소유표)·레인 A 브리프가 여기서 수치를 가져간다. 레인은 볼륨을 다시 재지 않는다.
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location **2250 France** · 시드 210 · 응답 210 · 누락 0) + DFS Labs `keyword_suggestions`(2250 · fr · 시드 34 · KD·의도 포함). 원자료 = `tmp/fr-core-vol.json` · `tmp/fr-core-sugg.json` · `tmp/fr-core-sugg2.json`(gitignore).
> 🔴 CPC는 근거로 쓰지 않는다(`rakko-playbook`). 볼륨 `-` = Google Ads 데이터 없음(≠ 수요 0 · 플레이북 §6-3). BE·CA·CH는 재지 않았다 — 프랑스가 압도하고, 0-2 SERP를 FR로 보므로.
> Google Ads는 철자·악상 변형을 한 묶음으로 준다(«regles poker» = «règles du poker» = 18,100). **같은 숫자가 여러 줄에 나오면 한 수요다 — 더하지 마라.**

## 0. 한 줄 결론

- 수요는 **족보(combinaison 49,500 · mains 14,800)**와 **규칙(règles du poker 18,100)**에 몰려 있다. tr과 같은 모양이지만 자릿수가 10배다.
- 개별 족보 이름이 독립 수요다: quinte flush royale 1,900 · quinte flush 1,600 · couleur 1,300 · brelan 880 · full 720(+full house 590) · quinte 720 · paire 320 · carré 210.
- 전략·확률·GTO는 수백 단위 이하. 예외 = **fish poker 1,300(KD 0)** · position poker 590 · probabilité poker 880 · icm poker 480 · gto poker 480.

## 1. 🔴 함정 (볼륨이 포커가 아니다)

| 표면 | 볼륨 | 실제 | 처리 |
|---|---:|---|---|
| kicker | 60,500 | 스포츠·브랜드 | **«kicker poker» 140**만 포커 |
| icm | 6,600 | 다른 기관·약어 | **«icm poker» 480** |
| rake · straddle (단독) | 각 2,400 | 정원 도구·의류 등 | «rake poker» 210 · «straddle poker» 90 |
| cash game (단독) | 720 | «candy cash game» 33,100 · «game cash»(중고 게임 매장 체인) | «cash game poker» 320 |
| texas holdem (단독) | 3,600 | «zynga texas holdem poker» 8,100 — 앱 게임 의도 섞임 | «poker texas holdem» 1,000 · 규칙 시드와 같이 |
| tapis poker | 1,000 | **포커 매트(상품)** — «tapis de poker pro/personnalisé» | all-in = «faire tapis poker» 90 · «tapis au poker» 90 · «poker tapis règle» 50 |
| main poker 계열 일부 | 170 | «bonne main au poker mots fléchés / 5 lettres» = 십자말풀이 | 무시 |
| regles poker 계열 | — | omaha · stud · 5 cartes · menteur · cafards · strip · chinois = 다른 게임 | 텍사스 홀덤만 |
| tournoi poker | 1,900 | 롱테일 대부분이 **도시별 대회 일정**(paris 880 · bordeaux 480 · aix 390 · calendrier 2026 390) | `/fr/tournaments`가 **없다** → 글 `holdem-tournament`는 «구조·전략» 의도만. 일정 의도는 이번 범위 밖(🪶 §4) |
| ordre main poker | 2,400 | **족보 순서** 의도(tr «el sırası»와 같은 함정) | game-order가 아니라 **hand-rankings** 몫 |
| range poker | 1,600 | 차트(«tableau range poker» 210 · «6 max» 170 · «mtt» 90) | 도구 `/fr/hand-chart` 몫 |
| 계산기 의도 | — | «calculateur probabilité poker» 210 · «calcul probabilité» 210 · «règle du 2 et du 4» | 도구 `/fr/calculator` 몫(`fr-calculator.md` 실측 승계) |

## 2. 글별 후보 (볼륨 · KD — KD는 Labs 값, 없으면 `-`)

### 🅰 규칙 (기존 6편 재작업)

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| texas-holdem-rules-for-beginners | **règles du poker / regles poker 18,100 (KD 26)** · comment jouer au poker 1,900 · poker texas holdem 1,000 | regles du jeux poker 1,300 · regles du poker debutant 880 · apprendre le poker 720 · regles poker cartes 720 · regles du poker holdem 480 · apprendre a jouer le poker 320 · regles poker texas hold'em 210 · comment jouer au poker débutant 140 · poker pour les nuls 140 · regle poker texas holdem 140 · règles texas holdem 90 · poker regles simple 70 · quelle sont les regles du poker 70 |
| holdem-game-order | (헤드 없음) | flop turn river 210 · flop poker 210 · river poker 210 · turn poker 50 · qui commence au poker 40 · ordre de jeu poker 30 · qui parle en premier poker 10 |
| holdem-betting-actions | (헤드 없음) | fold poker 140 · check poker 110 · relancer / relance poker 90 · parole poker 20 · miser poker 10 |
| holdem-blind-meaning | ante poker 210 | blinde poker 90 · poker blinde 70 · big blind poker 70 · petite blinde grosse blinde 50 · blinde au poker 40 · petite blinde poker 30 · grosse blinde poker 20 |
| holdem-all-in-rules | **all in poker 590** | faire tapis poker 90 · tapis au poker 90 · poker tapis règle 50 · regles poker tapis 50 · side pot poker 20 |
| holdem-showdown-rules | showdown poker 110 | abattage poker 10 · «qui montre ses cartes en premier» `-` |

### 🅱 족보

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-hand-rankings | **combinaison poker 49,500 (KD 4)** · **mains / main poker 14,800 (KD 8)** · ordre main poker 2,400 · ordre des mains poker 2,400 | main de poker 1,600 · main au poker 1,600 · combinaison poker ordre 1,300 · classement des mains poker 1,000 · meilleure main poker 720 · poker combinaison ordre 720 · classement poker 590 · combinaison de poker 480 · combinaison cartes poker 480 · main gagnante poker 480 · combinaison poker texas holdem 260 · tableau main poker 320 · liste main poker 210 · tableau combinaison poker 170 · combinaison poker pdf 170 · hiérarchie poker 170 · valeur main poker 170 · main la plus forte au poker 140 · combinaison poker ordre croissant 110 · main la plus faible au poker 90 |
| 〃 (족보 이름 · H2/앵커 후보) | quinte flush royale 1,900 · quinte flush 1,600 · couleur poker 1,300 · brelan poker 880 · full poker 720 · full house poker 590 · quinte poker 720 · paire poker 320 · carré poker 210 · hauteur poker 140 · carte haute poker 70 · double paire poker 50 | qu'est-ce qu'une couleur au poker 40 · qu'est-ce qu'un full 30 · brelan d'as 140 |
| holdem-flush-vs-straight | **«suite ou couleur» 70 (4변형 각 70)** | poker suite ou couleur qui gagne 50 · quinte ou couleur 20 · full ou couleur poker 20 · couleur ou quinte 10 — 🔴 검색자는 «quinte»보다 **«suite»**로 묻는다 |
| holdem-kicker | kicker poker 140 | kicker au poker 20 |
| holdem-tiebreak-rules | égalité au poker 50 · égalité poker 40 | poker couleur sur la table qui gagne 40 · qui gagne au poker 20 |
| holdem-split-pot-rules | split pot poker 10 | partage du pot · pot partagé `-` |
| holdem-reading-the-board | nuts poker 210 | les nuts poker 20 · texture board `-` · 🔴 «nuts»는 glossary와 나눠야 함(0-3) |

### 🅲 확률

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-probability | **probabilité poker 880 (KD 0)** | tableau probabilité poker 390 · probabilité quinte flush royale 170(+«quinte flush royale probabilité» 110 · «proba» 170) · probabilité main poker 90 · probabilité poker main départ 70 · probabilité carré poker 20 · 계산 의도 = 도구 몫(§1) |
| holdem-pot-odds | cote poker 70 | pot odds 20 · cote du pot poker 20 · règle du 2 et du 4(`fr-calculator.md` §2-B) |
| holdem-outs | gutshot poker 170 | outs poker 30 · calcul outs poker 20 |
| holdem-drawing-odds | (헤드 없음) | tirage poker 20 · tirage couleur poker 10 |
| holdem-implied-odds | (헤드 없음) | implied odds 10 · cotes implicites poker 10 |
| holdem-equity | équité poker 110 | equity poker 50 |
| holdem-card-counting | compter les cartes au poker 90 | compter les cartes poker 90(같은 수요) |

### 🅳 전략

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-strategy | stratégie poker 110 · comment gagner au poker 170 | bluff poker 170 · astuces poker 90 · conseils poker 40 · comment bien jouer au poker 70 |
| holdem-positions | **position poker 590** | cut off poker 170 · position poker 6 max 140 · position au poker 140 · position table poker 110 · bouton poker 110 · dealer poker 210 · under the gun poker 50 |
| holdem-position-play | «poker in position» (590 묶음 공유) | position au poker 140 — 🔴 positions와 카니발 판정 필요(0-3) |
| holdem-starting-hands-chart | quelles mains jouer au poker 50 | mains de départ poker 30 · 🔴 range·tableau 의도 = 도구 `/fr/hand-chart`(§1) |
| holdem-limping | limp poker 260 | limper poker 170 · limp poker definition 40 |
| holdem-3bet | 3bet poker 170 | 3 bet poker 170(같은 수요) |
| holdem-continuation-bet | c-bet / cbet poker 110 | continuation bet poker 70 · mise de continuation `-` |
| holdem-when-to-fold | fold poker 140(betting-actions와 나눔 · 0-3) | quand se coucher / folder `-` |

### 🅴 토너먼트

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-tournament | tournoi poker 1,900(🔴 일정 의도 우세 · §1) · mtt poker 210 | tournoi poker freeroll 170 · sng poker 30 · stratégie tournoi poker 20 |
| holdem-icm | **icm poker 480** | icm poker def 40 · icm au poker 30 |
| holdem-bubble | bulle poker 20 | bubble poker 10 |
| holdem-short-stack | short stack poker 20 | push or fold 70(도구 `/fr/calculator` 몫 — `fr-calculator.md` §3-D) |
| holdem-tournament-vs-cash-game | cash game poker 320 | cash game ou tournoi 10 |

### 🅵 용어

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-glossary | lexique poker 260 · termes poker 260 · vocabulaire poker 210 | jargon poker 20 · glossaire poker 10 · 🔴 tr 판단 ②(«용어는 도구로») → 주인 = `/fr/glossary` 도구 후보(0-3) |
| holdem-fish | **fish poker 1,300 (KD 0)** | poker fish tracker 110(소프트웨어 — 제외) · poisson poker 10 |
| holdem-bad-beat | bad beat poker 170 | bad beat 110 · bad beat jackpot 20 |
| holdem-rake | rake poker 210 | rake au poker 20 |
| holdem-straddle | straddle poker 90 | — |
| holdem-cooler | cooler poker 10 | — |

### 🅶 GTO 13 (§1-E: 검색 유입 글이 아니라 솔버 증거 자료)

| 검색어 | 볼륨 | 주인 |
|---|---:|---|
| gto poker | 480 | `/fr/solver` |
| solver poker | 320 | `/fr/solver` (`fr-gto-solver.md` §1-③ 어순) |
| check raise poker | 260 | 🔴 fr엔 check-raise 필라가 없다 → `low-board-check-raise`가 받을지 0-3 판정(§1-E «남의 헤드텀 빌리지 마라»와 충돌 여부) |
| donk bet poker | 140 | `donk-bet-strategy`(§1-E 예외 — 그 단어의 주인) |
| sizing poker | 70 | — (bet sizing 10) |
| blind vs blind · board monotone · board pairé · pot 3bet | `-`~10 | 없음 |

## 3. 0-2(SERP)에 넘길 것

- SERP를 볼 헤드(레인별 1~3개): règles du poker · comment jouer au poker · combinaison poker · ordre main poker · quinte flush royale · suite ou couleur · all in poker · ante poker · probabilité poker · tableau probabilité poker · position poker · stratégie poker · limp poker · icm poker · tournoi poker · cash game poker · fish poker · lexique poker · rake poker · bad beat poker · gto poker · check raise poker · nuts poker · flop turn river.
- 볼륨이 `-`~30뿐인 글(split-pot · drawing-odds · implied · bubble · cooler · straddle · game-order 등)은 **SERP 1개 + 자동완성·PAA**로 질문 표현만 확보한다 — 헤드가 없으니 PAA가 H2 재료다.
- 0-3 판정 대기 5건: ① glossary 글 ↔ `/fr/glossary` 도구 ② positions ↔ position-play ③ fold 헤드(betting-actions vs when-to-fold) ④ nuts(reading-the-board vs glossary) ⑤ check raise poker ↔ low-board-check-raise.

## 4. 🪶 범위 밖 관찰 (자동 착수 금지)

- **`/fr/tournaments`가 없다**: «tournoi poker» 롱테일이 도시별 일정(paris 880 · bordeaux 480 · aix 390 · calendrier 2026 390 · la grande motte 260…)이다. 보드 로케일 신설(`lib/tournaments-hreflang.ts` `TOURNAMENT_LOCALES`) + 프랑스 대회 카드 데이터 공급은 이번 51편과 별개 — 사장님 판단(나라별 대회 트랙 규율: 데이터 공급 미확정이면 착수 금지).
- 족보 이름 단독 수요(quinte flush royale 1,900 등)는 hand-rankings 한 글이 H2·앵커로 받는다. 이름별 독립 글을 만들지 않는다(EN 구조 그대로 · 카니발 방지).
