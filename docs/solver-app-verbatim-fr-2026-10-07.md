# 솔버 앱 FR 축어 — 2026-10-07 (🅶 fr-gto 레인 A · 계획 §2-⑨)

> 공개 앱 `https://solver.holdemmaster.com/?lang=fr`를 Playwright Chromium으로 열고 실제 DOM(`document.body.innerText`·`select` 옵션·`button` 텍스트)에서 채집했다(2026-10-07 16:15경 KST).
> 08-24판(`solver-app-verbatim-fr-2026-08-24.md`)을 **대체**한다. 채집 방법 = `scripts/capture-solver-spots.mjs`를 scratchpad에 복사해 L10N `fr`만 추가해 돌림(레인은 `scripts/`를 고치지 않는다 — 스크립트에 fr 사전을 넣는 것은 헤드 몫 · 아래 §5).
> **이 문서는 화면 축어 기록이다. 전략 설명의 정본은 EN 해설과 `gto-solver-series-spec.md` §4-B다.** 앱 목록 설명문에는 폐기된 인과가 남아 있다(§4) — 해설 원문으로 복사하지 않는다.

## 0. 08-24판 대비 바뀐 것

| 자리 | 08-24 | 10-07 |
|---|---|---|
| ⑤ 설명문 | `…les grosses mises disparaissent au profit…` | `…les grosses mises se raréfient au profit…` |
| 결과 화면 뒤로 버튼 | (기록 없음) | `← Liste` |
| 홈 특징 | 4칸 | 5칸 — `Stratégie fixée (node lock)` 추가 |
| 홈 안내 | — | `Nouveau ici ?` 블록 · `Défi du jour` 버튼 · `[Fixer la stratégie de ce nœud]` · `[Travailler ce spot]` |

그 밖의 title·meta description·그룹 라벨·스팟 이름·설명문 12개는 08-24판과 축어 동일.

## 1. 화면에서 쓰는 이름

| 자리 | 실제 FR 축어 |
|---|---|
| `<html lang>` | `fr` |
| `<title>` | `HoldemMaster GTO Trainer — Solver et trainer GTO gratuits pour le Texas Hold'em` |
| meta description | `Solver GTO gratuit qui tourne directement dans ton navigateur, rien à installer. Calcule la stratégie postflop du Texas Hold'em à partir de tes ranges, du board et des bet sizes. Par HoldemMaster.` |
| 사이드바 메뉴 | `Spots d'étude ⚡ Direct` · `Trainer GTO Note EV` · `Charts préflop Ranges` · `Equity % victoire` · `À propos` · `Mode d'emploi` |
| 홈 버튼 | `Voir les Spots d'étude` · `Trainer GTO` · `Défi du jour` · `Mode d'emploi` |
| 히어로 | `La stratégie GTO, directement dans ton navigateur.` / `Rien à installer, rien à payer. Saisis tes ranges et un board, et la stratégie optimale se calcule directement sur ton appareil.` |
| 특징 5칸 | `Gratuit` — `Toutes les fonctions, sans limite d'usage` · `Étude hors ligne` — `Ajoute-le à ton écran d'accueil et entraîne-toi sans connexion` · `Calcul rapide` — `Multithread — la vitesse d'un solver de bureau` · `Trainer GTO` — `Joue des spots, notés sur la perte d'EV par rapport au pot` · `Stratégie fixée (node lock)` — `Définis la stratégie adverse et recalcule — vois comment ta stratégie change quand ton adversaire fait des erreurs` |
| 신규 안내 | `Nouveau ici ?` / `Ouvre n'importe quel spot dans Spots d'étude et appuie sur [Voir les résultats] — les solutions s'affichent aussitôt` / `Passe par Mode d'emploi pour apprendre à lire l'écran de résultats` / `Essaie le Trainer GTO — il te montre exactement combien de bb chaque décision te coûte` / `Une fois à l'aise, calcule tes propres mains avec Spot personnalisé (①–⑤)` / `Une fois le calcul terminé, essaie de changer la stratégie adverse avec [Fixer la stratégie de ce nœud], puis résous des exercices sur ce spot avec [Travailler ce spot]` |
| 가이드 링크 문장 | `Tu préfères d'abord lire ce qu'est un solver GTO et comment interpréter ses résultats ? Va voir le guide du solver HoldemMaster.` |
| 성능 안내 | `Sur iOS et Safari, les limites du navigateur imposent un calcul monothread, donc plus lent — sur macOS, on recommande Chrome. La mémoire disponible est plafonnée à 4 Go (une limite de WebAssembly), donc les gros spots se calculent plus confortablement sur PC.` |
| 목록 제목 | `Spots d'étude — exemples en un clic` |
| 목록 안내 | `[⚡ Voir les résultats] affiche aussitôt la stratégie calculée. Utilise [Calculer toi-même] seulement si tu veux modifier les ranges ou explorer le turn et la river.` |
| 결과 보기 | `⚡ Voir les résultats` |
| 목록에서 직접 계산 | `Calculer toi-même` |
| 결과에서 직접 계산 | `Calcule ce spot toi-même` |
| 뒤로 | `← Liste` |
| 결과 범위 안내 | `Stratégie du flop uniquement. Envie de cliquer jusqu'au turn et à la river ? →` |
| 헤더 칩 | `Pot` `5,5` `bb` · `Stack` `97,5` `bb` (값·단위가 줄 나뉨) |
| 플레이어 선택 | `Joueur :` → `OOP (BB (caller))` / `IP (BTN (ouvreur))` |
| 첫 액션 안내 | `C'est la stratégie du joueur qui parle en premier (OOP). Pour voir l'adversaire (IP), passe « Joueur » sur IP au-dessus.` |
| 분류 패널 | `Mains` / `Tirages` |
| 요약 | `Résumé` |
| 바 너비 | `Largeur des barres :` → `Normalisé` / `Absolu` / `Plein` |
| 표시 | `Affichage :` → `% action` / `EV action` |
| 상세 표 헤더 | `Main` / `Stratégie` / `Poids` / `EQ` / `EV (bb)` / `EQR` / `B 4,1bb` / `B 1,8bb` / `Check` |
| 전체 행 | `Tout` |
| 콤보 | `combos` |
| 액션 칩 | `Bet 4,1bb (75 % du pot)` · `Bet 1,8bb (33 % du pot)` · `Check` (스팟마다 사이즈가 다르다 — §3) |
| 직접 입력 순서 | `① Range OOP` / `② Range IP` / `③ Board` / `④ Bet sizes` (`Réglages`) / `⑤ Calculer` |
| 결과 탭 잠금 | `Résultats` — `S’ouvre une fois ⑤ Calculer terminé` |
| 공유 | `🔗 Partager le spot` |
| AGPL | `Cette app est basée sur WASM Postflop (de Wataru Inariba, AGPL-3.0), localisée et enrichie par HoldemMaster. Le code source modifié complet est publié sur GitHub sous la même licence.` |

### 1-B. Trainer GTO 화면 (사이드바 `Trainer GTO Note EV` 클릭 · 10-07 실측)

| 자리 | FR 축어 |
|---|---|
| 제목 | `Trainer GTO — l'EV de chaque décision` |
| 필터 | `Tous` · `Single Raised` · `Pot 3-bet` · `Blind vs Blind` · `Mes spots` · `Révision (N)` · `Défi du jour` |
| 통계 | `Résolues` · `Série` · `Perte d'EV totale` · `Perte d'EV moyenne` · `Taux de bons choix` |
| 저장 안내 | `Ta progression est enregistrée uniquement sur cet appareil. Associe un compte HoldemMaster pour reprendre où tu en étais sur n'importe quel appareil.` · 버튼 `Continuer avec Google` |
| 문제 머리 | `Board sec A-high` / `BB (caller) (OOP) doit parler` / `Pot 7,3bb · Stack 97,5bb` / `Ligne : BB (caller) Check →BTN (ouvreur) Bet 1,8bb (33 % du pot)` / `Board` / `Ta main` / `Tu joues quoi ?` |
| 행동 버튼 | `Fold` · `Call` · `Raise 7,3bb` (노드마다 다름) |
| 풀기 전 안내 | `Choisis une action et tu verras la fréquence et l'EV de chaque action, plus ce que ton choix a coûté en bb.` |
| 채점 기준 | `La GTO mixe les actions avec la même main — un choix à basse fréquence n'est pas automatiquement une erreur. La mesure, c'est la perte d'EV par rapport au pot : ≤0,35 % Meilleur choix · ≤1 % Acceptable · au-delà, Spot à revoir. Pour ce spot (pot de 5,5bb), ça donne Meilleur choix ≤0,02bb · Acceptable ≤0,06bb.` |
| 푼 뒤 | `Ton choix` · 판정 `Spot à revoir` / `Acceptable` / `Meilleur choix` · `Perte d'EV 5,762bb` · `Les stratégies mixtes ne sont pas comptées comme des erreurs — la note se base sur l'écart d'EV entre les actions.` · `Détecteur de leaks` · `Résous au moins 3 mains par catégorie pour voir où tu perds de l'EV.` |

→ EN 본문의 **GTO Trainer** = `Trainer GTO` · **EV loss (bb)** = `Perte d'EV` · **Daily Challenge** = `Défi du jour` · «signing in … syncs your Study Spots and Daily Challenge history» = 위 저장 안내 축어의 뜻(«Associe un compte HoldemMaster …»)에 맞춘다.
🪶 트레이너 머리 줄 `13 Spots d'étude · 33 nœuds de décision · exploitabilité cible 0,5 %`는 개수가 하드코딩돼 있다 — 글에 옮기지 않는다(§6 «시리즈 총편 수 하드코딩 금지»).

**핸드 분류(실측 · 13스팟 합집합):** `Quinte`, `Couleur`, `Carré`, `Full`, `Set/Brelan`, `Double Paire`, `Overpair`, `Top paire`, `Deuxième paire`, `Paire faible`, `Underpair`, `Hauteur As`, `Hauteur Roi`, `Pas de main faite`.

**드로우 분류(실측):** `Tirage combo`, `Tirage couleur`, `Tirage quinte bilatéral`, `Tirage ventral`, `Tirage couleur backdoor`, `Aucun tirage`.

🔴 **숫자 표기가 자리마다 다르다.** 결과 화면 빈도 = 쉼표 소수 + **% 붙임**(`98,2%` · `0,9%`) · 액션 칩 괄호 = **% 앞 공백**(`75 % du pot`) · 목록 설명문 = **% 앞 공백**(`77,9 %` · `80,1 %`). 글 산문은 §3-A ②(`35 %`)를 따르고, 앱 화면 값을 «화면에 이렇게 뜬다»로 인용할 때만 화면 축어를 쓴다.

🪶 `Set/Brelan` 행은 페어드 보드(⑥·⑬)에서 실제로 trips를 담는다 — 앱 행 이름을 인용하되 산문에서 set(brelan servi)/trips(brelan avec une carte du board)를 구분.

## 2. 그룹·플레이어 축어

| 그룹 | 조건 줄 |
|---|---|
| `Single Raised Pot — BTN vs BB (fondamentaux)` | `OOP: BB (caller) · IP: BTN (ouvreur) · Pot 5,5bb · Stack 97,5bb` |
| `Pot 3-bet — BB 3-bet, BTN paye (SPR bas)` | `OOP: BB (3-betteur) · IP: BTN (caller) · Pot 22,5bb · Stack 89bb` |
| `Blind vs Blind — SB vs BB (ranges larges)` | `OOP: SB (ouvreur) · IP: BB (caller) · Pot 6bb · Stack 97bb` |

목록 맺음말: `Les ranges sont des approximations du jeu en ligne standard à 100bb. Charge un spot, modifie les ranges et compare — une excellente façon d'étudier.`

## 3. 스팟 이름·첫 액션 실측 (scratchpad `cap/data-fr.json`)

퍼센트는 개별 반올림값이라 합이 정확히 100이 아닐 수 있다. **13/13이 spec §4-B 고정표·de 10-02판과 수치 일치**(2026-10-07 대조).

| # | 키 | 글 slug | FR 스팟 이름 | 보드 | 첫 액션 (OOP) | Tout OOP / IP (Poids · EQ · EV · EQR) |
|---|---|---|---|---|---|---|
| ① | srp-dry-ace | a-high-board-cbet | `Board sec A-high` | A♥7♦2♣ | Bet 4,1bb 0,9% · Bet 1,8bb 1,0% · Check 98,2% | 464,0 · 45,1% · 2,09 · 84,0% / 463,0 · 54,9% · 3,41 · 113,1% |
| ② | srp-dry-king | k-high-board-cbet | `Board sec K-high` | K♠8♦3♣ | 0,1% · 0,1% · Check 99,8% | 474,0 · 46,3% · 2,06 · 80,7% / 480,0 · 53,7% · 3,44 · 116,7% |
| ③ | srp-broadway | broadway-board-strategy | `Broadway connecté, bicolore` | Q♠J♦T♠ | 0,0% · 0,1% · Check 99,9% | 453,0 · 46,7% · 2,00 · 77,9% / 458,0 · 53,3% · 3,50 · 119,4% |
| ④ | srp-middle-connected | donk-bet-strategy | `Board médian connecté, bicolore` | 9♥8♥7♣ | 6,9% · 16,8% · Check 76,2% | 462,0 · 48,5% · 2,48 · 93,2% / 472,0 · 51,5% · 3,02 · 106,4% |
| ⑤ | srp-monotone | monotone-board-strategy | `Board monochrome` | Q♠9♠2♠ | 3,2% · 8,0% · Check 88,8% | 468,0 · 47,7% · 2,37 · 90,4% / 474,0 · 52,3% · 3,13 · 108,8% |
| ⑥ | srp-paired | paired-board-strategy | `Board pairé` | 6♣6♦3♥ | 2,0% · 1,0% · Check 97,0% | 486,0 · 47,2% · 2,17 · 83,7% / 502,0 · 52,8% · 3,33 · 114,5% |
| ⑦ | srp-low-rainbow | low-board-check-raise | `Board bas rainbow` | 6♠5♥2♦ | Bet 1,8bb 3,2% · Check 96,8% | 487,0 · 48,3% · 2,24 · 84,3% / 503,0 · 51,7% · 3,26 · 114,7% |
| ⑧ | 3bp-ace-king | 3bet-pot-cbet | `Board A-high, avantage du 3-betteur` | A♦K♠2♥ | Bet 14,9bb (66 % du pot) 42,2% · Bet 7,4bb 57,8% · Check 0,0% | 63,00 · 68,9% · 16,99 · 109,6% / 130,0 · 31,1% · 5,51 · 78,7% |
| ⑨ | 3bp-dynamic | 3bet-pot-bet-sizing | `Board dynamique bicolore` | Q♥T♥7♠ | 98,4% · 0,7% · Check 0,8% | 73,00 · 58,3% · 15,46 · 117,8% / 133,0 · 41,7% · 7,04 · 75,1% |
| ⑩ | 3bp-low | 3bet-pot-low-board | `Board bas et sec` | 8♦5♣2♠ | 97,8% · 0,3% · Check 2,0% | 83,00 · 58,6% · 14,09 · 106,9% / 144,0 · 41,4% · 8,41 · 90,3% |
| ⑪ | sb-king-mid | blind-battle-cbet | `Board K-high avec un T` | K♥T♦6♠ | Bet 2bb (33 % du pot) 67,4% · Check 32,6% | 538,0 · 55,3% · 3,42 · 103,1% / 525,0 · 44,7% · 2,58 · 96,1% |
| ⑫ | sb-connected | blind-battle-connected-board | `Board bas connecté, bicolore` | 7♦6♦5♣ | Bet 2bb 9,6% · Check 90,4% | 572,0 · 49,6% · 2,54 · 85,3% / 534,0 · 50,4% · 3,46 · 114,4% |
| ⑬ | sb-paired-ace | ace-paired-board-strategy | `Board avec deux As` | A♠A♥6♦ | Bet 4,5bb (75 % du pot) 0,5% · Bet 2bb 79,6% · Check 19,8% | 503,0 · 56,2% · 3,51 · 104,1% / 505,0 · 43,8% · 2,49 · 94,8% |

재현 CTA의 스팟 이름은 **이 표의 축어**를 굵게 그대로 쓴다: «Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude** et choisis **[스팟 이름]** → **⚡ Voir les résultats**.» (앵커 문구 = 계획 §3-A ⑤ 도구 앵커 정본)

## 4. 앱 설명문 — 해설 원문으로 쓰지 않는다

13개 축어 전문(채집 그대로):

| # | 앱 설명문 (축어) | 판정 |
|---|---|---|
| ① | `Le cas d'école de l'avantage de range. Regarde avec quelle range large BTN mise un petit c-bet après le check de BB — l'as tape en plein dans la range de l'ouvreur.` | 🔴 RP-20 — 이 사전 계산은 **BB 첫 결정만** 보여 준다. BTN c-bet 결과는 이 예제에 없다 |
| ② | `Compare avec le board A-high. Le board K-high favorise aussi BTN, mais les checks augmentent un peu. Tu sais pourquoi ?` | 🟢 |
| ③ | `Un board qui semble toucher les deux ranges. Pourtant c'est ici que BB réalise le moins bien son equity des 13 spots — 77,9 % réalisés contre 119,4 % pour BTN — et il check à 99,9 %. Le panneau « Mains / Tirages » montre pourquoi.` | 🟢 정정본 · ⚠ «des 13 spots» 하드코딩 |
| ④ | `La texture classique qui favorise le caller. La fréquence de c-bet de BTN s'effondre — ce spot montre exactement pourquoi « toujours c-bet » est une erreur.` | 🔴 RP-01 계열+RP-02 — 화면은 BB 첫 액션이고, BB의 리드는 c-bet이 아니라 donk bet |
| ⑤ | `Regarde pourquoi les grosses mises se raréfient au profit des petites mises et des checks. Remarque à quelle fréquence même une couleur faite se contente de checker.` | 🟢 (10-07 문구 변경) |
| ⑥ | `Personne ne touche ce board, donc la part de bluffs augmente. Utilise le tableau détaillé pour trouver quelles mains misent en bluff.` | 🟡 «블러프 빈도 상승»은 계산되지 않은 명제 — 원문 ⑥은 trips 구성 비교 |
| ⑦ | `Une guerre d'overcards — BB check-raise souvent sur cette texture. Suis la barre d'actions du haut après une mise pour voir les réponses.` | 🔴 RP-19+조작 지시 — 사전 결과는 후속 노드로 못 간다. check-raise 수치는 **별도 재솔브** |
| ⑧ | `Le meilleur flop possible pour le 3-betteur, dont la range est remplie d'AK, d'AA et de KK. À SPR bas, les petites mises mettent la pression sur toute la range.` | 🔴 RP-03 |
| ⑨ | `Un pot 3-bet sur un board qui convient aussi au caller — et pourtant le 3-betteur ne ralentit pas : 98,4 % de la range mise aux deux tiers du pot, toujours au même sizing. Regarde quelles mains composent les 0,8 % qui checkent.` | 🟢 정정본 |
| ⑩ | `Un board qui rate presque toute la range du 3-betteur — et pourtant les overpairs et les mains hauteur As maintiennent la pression. Equity contre fold equity.` | 🟢 완화형(`presque`) |
| ⑪ | `En blind vs blind, les ranges sont larges, donc les deux joueurs arrivent faibles au flop. Compare les fréquences avec le spot « Board sec K-high » de BTN vs BB.` | 🟢 |
| ⑫ | `Deux ranges larges se percutent sur un board ultra-connecté : doubles paires, quintes et tirages partout. C'est ici que le panneau « Mains / Tirages » est le plus parlant.` | 🟢 |
| ⑬ | `Deux as sur le board. Les brelans ne sont pas rares — SB en a simplement plus (88 combos contre 66 pour BB), donc SB mise à 80,1 %. Toute la question sur ce board : qui a le plus d'as dans sa range.` | 🟢 정정본 |

## 5. 산출물 · 헤드로 넘길 것

| 파일 | 내용 |
|---|---|
| scratchpad `cap/<key>-oop-fr.png` · `-ip-fr.png` · `data-fr.json` | 13스팟 OOP·IP 캡처와 추출값(세션 scratchpad — 레포 밖) |

- 🔴 **fr 히어로·레인지 차트 이미지(`public/images/gto-<key>-oop-fr.webp` · `-ranges-fr.webp`)는 아직 없다.** 레인은 `public/images/`·`scripts/`를 고치지 않는다 → 헤드 요청(진행 파일). 그때까지 B는 EN 이미지 경로(`-en`)를 쓴다(H-18 썸네일 교체도 같은 회차).
- `capture-solver-spots.mjs` L10N `fr` 한 줄(위 §1 축어: back `← Liste` · spots `Spots d'étude ⚡` · view `⚡ Voir les résultats` · noDraw `Aucun tirage` · combos `combos` · hands `Mains` · draws `Tirages` · all `Tout` · summary `Résumé` · barWidth `Largeur des barres :`)로 13/13 통과 확인 — 헤드가 스크립트에 넣을 때 그대로 쓰면 된다.
