# fr-rules 브리프 — 🅰 규칙 6편 (기존 7월판 → EN 현행 재작성)

> 레인 A 산출물(2026-10-07). **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 골격 복사용)뿐.** 웹·MCP·다른 로케일 파일은 B에서 열지 않는다.
> 정본 = `docs/fr-cluster-plan.md` §3-A(고정문·용어) · §3-B(소유표) · §5(치환표) + `docs/ms-translation-lanes.md` §5. 이 파일과 §3-A가 어긋나면 §3-A가 이긴다.
> EN 기준 해시 `a54b5f3d` — 6편 모두 이후 변경 0(10-07 11:59 확인). SERP 근거 = `docs/keyword-bank/fr-serp/L-A-rules.md`(이하 «L-A») · 볼륨 = `fr-core-volumes.md`.
> 🔴 **«확정 카피» 칸(seoTitle·desc·tldr·title·H2 세트·FAQ 문항·tags)은 B·C가 바꾸지 않는다**(계획 §2-⑥). 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 6편 공통 — B가 매 편 지키는 것

### 0-1. 작업 방식 = 재작성(새로 쓰기)
- 기존 `lib/posts-fr/<slug>.ts`(7월판)는 **덮어쓴다.** 구조 골격은 **EN 현행 1:1**(H2/H3·표 행·리스트·이미지·디렉티브·`<div>` 카드·하이라이트 색 `==r:`/`==g:` 위치). 7월판 문장은 «괜찮은 표현이 있으면 가져와도 되는 참고»일 뿐이다 — 단 §3-A와 다른 표기(tournant/rivière 단독 · pré-flop · «Continue ta lecture» · «Questions fréquentes» · «Pour conclure» · vous)는 가져오지 않는다.
- 필드: `slug`·`category`·`date`·`image`·`keepImagesInBody`·`emoji`는 **현 fr 파일 값 유지**(= EN과 같다). `updated` = 집필일 · `masterUpdated` = 아래 각 절의 «EN updated»(헤드가 머지 때 델타 스윕 후 갱신 · 계획 §2-⑤) · `readTime` = EN 값 그대로(«N min»).
- 🔴 히어로 이미지는 content에 넣지 않는다(렌더러가 그린다). 본문 이미지(`![…](/images/…)`)는 EN 경로 그대로, alt만 프랑스어.
- `index.ts`는 건드리지 않는다(6편 모두 등록돼 있다).

### 0-2. 고정문 (계획 §3-A ① 축어)
| 자리 | 정본 |
|---|---|
| 직답 블록 | `> **Réponse rapide**` (EN «Quick answer» 자리 · 각 H2 직후 40~75단어 직답은 일반 단락으로) |
| EN «Quick summary» · «The core numbers» · «How to play … in 30 seconds» · «One hand in 15 seconds» 류 H3 | 같은 자리 H3를 프랑스어로(예: «### En bref» · «### Les chiffres clés» · «### Le Texas Hold'em en 30 secondes») — 확정 카피에 문구가 있으면 그것 |
| readnext | `:::readnext[À lire ensuite]` · 카드 줄 = `/fr/blog/<slug> \| <프랑스어 카드 제목> \| <EN 이미지 경로>` |
| FAQ | `## FAQ` · 문항 = `**Q. …**` + 빈 줄 + `A. …` (스키마 조건) |
| 관련 글 | `## Articles liés` · `<div>` 카드 그리드 EN 축어 · href `/fr/blog/…` · 카드 안 3줄(라벨·제목·설명) 프랑스어 |
| 마무리 H2 | `## À retenir` (EN «Final Takeaway» · «The Takeaways» · «The 3 Things to Remember» 자리) |

### 0-3. 문체·조판 (§3-A ②)
- **tu** · 명령형 훅(«Regarde… / Compare… / Essaie…») · vous 금지(법규·규정 축어 인용만 예외).
- 숫자: 천 단위 **공백**(`1 326` · `1 300`) · 소수 **쉼표**(`2,5`) · **% 앞 공백**(`35 %`) · 비율 `2,7:1` · 화폐 `$` 앞붙임(`$1/$2` · `$10`) — €로 바꾸지 않는다. 🔴 §13 **값**은 EN 축어, **구분자만** 바꾼다.
- 인용 `« … »`(안쪽 공백) · 아포스트로피 곧은 `'` · `Texas Hold'em` · `préflop`(붙여 씀). `? ! : ;` 앞 공백.
- 카드 = 영어 랭크 + 무늬 기호(`A♠ K♥ Q♦ J♣ 10♠`) — R/D/V 금지. 풀어 쓸 때 «paire d'as», «roi», «dame», «valet»(소문자).
- 🔴 백틱 금지 · 굵은 단락 안 `**` 중첩 금지(강조는 «» 또는 `==…==`) · tldr 평문.

### 0-4. 용어 (§3-A ③④에서 이 6편에 나오는 것만 — 첫 등장 병기는 **글마다** 한 번)
| EN | 본문 | 첫 등장 |
|---|---|---|
| turn / river | la turn · la river | «la turn (le tournant)» · «la river (la rivière)» |
| preflop · flop · board | préflop · le flop · le board | «le board (les cartes communes)» |
| blind / SB / BB | blinde · petite blinde (SB) · grosse blinde (BB) | «blinde (blind)» |
| ante · big blind ante | ante · big blind ante («ante de la grosse blinde» 설명 1회 허용) | — |
| check | checker (il checke) · 선언어 «parole» | — |
| bet / call / raise / re-raise | miser · suivre (payer 허용) · relancer / relance · surrelancer / surrelance | — |
| min-raise | relance minimale (min-raise) | «relance minimale (min-raise)» |
| fold | **se coucher**(재귀) · 구어 «folder» | 협회어 «passe»는 betting-actions에서만 소개 |
| all-in | faire tapis · être à tapis · all-in | «faire tapis (all-in)» |
| stack | stack («short stack») — «tapis»를 스택 뜻으로 쓰지 않는다 | — |
| showdown | l'abattage | «l'abattage (showdown)» |
| main pot / side pot | pot principal · side pot | «side pot (pot annexe)» |
| dealer / button | donneur · bouton (BTN) | — |
| UTG · HJ · CO · BTN · SB · BB | 약어 그대로 | 첫 등장 풀어 쓰기(«under the gun (UTG)» · «cut-off (CO)») |
| hole cards | cartes fermées (cartes privées 허용) | — |
| muck | jeter ses cartes (muck) | «jeter ses cartes (muck)» |
| slow roll · cards speak · string bet · straddle · limp | slow roll · « cards speak » (les cartes parlent) · string bet · straddle · limper | 그대로 + 첫 등장 짧은 풀이 |
| table stakes | « table stakes » | 첫 등장 풀이 |
| run it twice | « run it twice » | — |
| pot odds | cote(s) du pot | «cote du pot (pot odds)» |
| Royal/Straight Flush … High Card | quinte flush royale · quinte flush · carré · full · couleur · quinte · brelan · double paire · paire · carte haute | «quinte flush royale (royal flush)» · «couleur (flush)» · «quinte (suite)» · «carte haute (hauteur)» — 족보 표가 있는 편(rules·game-order)만 |
| wheel / small straight | la roue (wheel) = A-2-3-4-5 | — |

새 용어가 필요하면 진행 파일 «신규 용어» 표에 `EN | 채택 fr | 근거`로.

### 0-5. 도구 앵커 (§3-A ⑤ 축어)
| EN 링크 | fr 링크 · 앵커 |
|---|---|
| `/en/calculator` | `/fr/calculator` · «calculateur poker» (기능별 «calculateur d'équité / d'outs») |
| `/en/hand-chart` | `/fr/hand-chart` · «tableau des mains de départ par position» |
| (EN에 없음 · 추가 허용 1회) | `/fr/glossary` · «lexique du poker» |

### 0-6. 소유표 공통 (§3-B)
- 이 6편의 **seoTitle·title(H1)·tags**에 쓰면 안 되는 헤드: lexique/termes/vocabulaire · tableau/range/chart · calcul/calculateur · solver/GTO · «ordre» + «main» 결합(= hand-rankings) · «quand se coucher»(= when-to-fold) · «mains de départ»(= starting-hands-chart) · «position poker»(= positions) · «nuts»(= reading-the-board) · «ICM».
- 본문 앵커 문구로는 쓸 수 있다(예: «quelles mains jouer selon ta position» → starting-hands-chart).
- 🔴 «règle du 2 et du 4»는 **H2/H3 제목에 쓰지 않는다**(계산기 소유 · L-A §7-1). 본문에는 써도 된다 + `/fr/calculator` 앵커.
- 합법성 축 열지 않음 · 룸·실전 추천 없음(winamax/betclic/en ligne 금지) · 외부 출처 인용은 규정(TDA·WSOP·La Ligue de Poker) 축어만.

### 0-7. 링크 대상 (계획 §1 · ms §0-A)
EN 6편의 내부링크 대상은 **전부 51편 + 도구 안**이다(점검: hand-rankings · flush-vs-straight · reading-the-board · tiebreak-rules · split-pot-rules · game-order · blind-meaning · betting-actions · all-in-rules · showdown-rules · positions · position-play · starting-hands-chart · tournament · tournament-vs-cash-game · strategy · pot-odds · when-to-fold · limping · straddle · texas-holdem-rules-for-beginners · `/en/calculator` · `/en/hand-chart`). → **EN 1:1로 `/fr/…`에 건다**(아직 안 쓰인 글도 건다 — 배포는 51편 머지 뒤 1회). 링크 편차 0이 목표.
- 예외 1건: rules-for-beginners L326 PDF `/downloads/texas-holdem-rules-for-beginners.pdf` — **fr PDF가 없다**(`public/downloads/`에 de·id·ja·ko·pt·zh만). B는 EN PDF 링크를 유지하고 앵커에 «(PDF en anglais)»를 붙인다 → 진행 파일 «링크 편차» + «헤드 요청»(fr PDF 생성 = `scripts/generate-beginner-pdf.mjs` · 헤드 소유).
- `"thumb:…"` 링크 제목은 EN 축어로 옮긴다(경로 그대로).

### 0-8. 현지 추가 규칙
- «현지 추가»(EN에 없는 H2/H3/FAQ)는 **아래 각 절에 문구·사실·출처가 적힌 것만**. 새 사실·수치 금지 — 수치는 EN 값 또는 아래에 적힌 출처 축어만.
- 외부 사이트를 «틀렸다»고 지목하지 않는다(«on lit souvent que…» → 정확한 규칙). 반례는 EN 숫자로.

---

## 1. texas-holdem-rules-for-beginners — EN updated 2026-10-04 (필라 · 우선 1)

### 메타 (EN 축어)
- title: How to Play Texas Hold'em for Beginners — Rules, Chips, Hands, and First Strategy
- seoTitle: How to Play Texas Hold'em for Beginners — Rules & Cheat Sheet
- desc: Never played before? How to play Texas Hold'em step by step — blinds, chip setup, hand rankings, and a printable cheat sheet even dummies can follow.
- tldr: Texas Hold'em gives each player 2 hole cards and 5 shared community cards. There are up to four betting rounds, and the best 5-card poker hand wins at showdown — unless everyone else folds first.
- tags(EN): texas holdem rules for beginners · how to play texas holdem for beginners · texas holdem basic rules · who goes first in texas holdem · texas holdem cheat sheet · poker chips for beginners · how many players in texas holdem · no limit texas holdem
- category rules · readTime 14 min · image `/images/rules-texas-holdem.webp` · imageAlt(EN L16 → 프랑스어)
- 현 fr: seoTitle «Règles du Texas Hold'em pour débutants — jouer pas à pas + antisèche» · masterUpdated 2026-07-12

### 구조 (EN L##)
- 도입 L28~34(경험 L34) · H3 «How to play Texas Hold'em in 30 seconds» L36
- H2: L53 Basic Rules(표 L64 · 7장 예시 표 L78~81 · `<div>` 카드 L61~71) → L87 Beginner Flow Summary(표 L92 · 이미지 L102) → L108 How Many Players(표 L113) → L126 Who Goes First(표 L131) → L145 What Chips(표 L152 · `<div>` 표 L159~168) → L174 How Much Money(표 L183) → L196 No-Limit/Limit/Pot-Limit(표 L201) → L210 How to Deal(이미지 L229) → L235 Position(표 L240) → L252 Strategy for Beginners(`<div>` 표 L258~268 · L272~285) → L291 Pot Odds(H3 L295 · H3 L301 · `<div>` 표 L305~312) → L322 Printable Cheat Sheet(PDF L326 · 표 L329 · 표 L344) → L360 Common Beginner Mistakes(H3 ×5 L364~380) → readnext L386 → FAQ L391(12문) → L443 Final Takeaway → L453 Related Posts(카드 6)
- FAQ 12: step by step · who goes first · what chips · how much money · small straight · how many starting hands · dummies simplest · dummies blinds · quick version · how many players · no-limit · how long one hand
- 표 개수·이미지 2(L102 · L229)·디렉티브(readnext 1)·하이라이트 위치 = EN 그대로.

### 링크
EN 대상(L57 blind-meaning · L73 reading-the-board · L83 hand-rankings·flush-vs-straight · L104 game-order · L122·L190 tournament-vs-cash-game · L141·L248 positions · L206 betting-actions · L287 starting-hands-chart·betting-actions · L356 tiebreak-rules·split-pot-rules · L449 hand-rankings·`/en/hand-chart`·`/en/calculator` · readnext game-order·hand-rankings · Related 6) → 전부 `/fr/` 1:1.
- 앵커 지정: L287 starting-hands-chart → «quelles mains jouer selon ta position»(«tableau» 금지 — 그건 도구 앵커) · L449 `/fr/hand-chart` → «tableau des mains de départ par position» · `/fr/calculator` → «calculateur poker».
- 편차: PDF L326(§0-7).

### 키워드 (0-1 + L-A · DataForSEO 2250/fr · 2026-10-07)
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| règles du poker / regles poker | 18 100 | seoTitle 앞쪽 · title · H2 1 · tags |
| comment jouer au poker | 1 900 | title 또는 desc · H2 2 근처 · tags |
| regles du jeux poker | 1 300 | (같은 수요 · 본문 1회) |
| poker texas holdem | 1 000 | title |
| regles du poker debutant | 880 | seoTitle/title «débutant» |
| apprendre le poker | 720 | 도입 1회 |
| combien de jetons au poker · répartition jetons poker | 320 · 90 | H2 5 + FAQ |
| distribution cartes poker · combien de cartes au poker | 260 · 260 | H2 8 · FAQ «Combien de cartes…» |
| règles du poker simple · poker pour les nuls | 170 · 140 | FAQ 2문(EN dummies 2문) |
| comment se joue le poker · cave poker | 70 · 70 | H2 2 · H2 6 본문 «cave» |
| comment jouer au poker en famille · 2 joueurs | 50 · 40 | FAQ 2문 |
- 함정: «règles du poker classique / à 5 cartes / menteur»(다른 게임) → 현지 추가 H2로만 받는다 · «… winamax/betclic/en ligne» 조준 금지 · «valeur jetons poker»(1 300)는 칩 쇼핑 섞임 → PAA «Combien de jetons faut-il prévoir par joueur» 의도만.

### 현지 SERP (L-A §3-1~3-4 · §4-1 · §6 · §7-1)
- 상위가 주는 것: 협회 규정집(조문형 · 초보 설명 0) · 운영사 학교 440~655단어 · wikihow 장문 · 2000년대 제휴 · 포럼(«débutant» SERP 7/10). FS 0 · AIO 0.
- 우리가 더 줄 것 3: ① 7장 «보드 카드는 모두의 것» 예시(EN L78~81) ② 칩 배분 표(EN L152·L159) — SERP에 표 0 ③ 인쇄용 antisèche + 경험담.
- PAA(축어): Combien de cartes sont utilisées sur la table de poker ? · Comment distribuer les jetons au poker ? · Qui doit parler en premier au poker ? · Comment se joue le jeu de poker ? · Comment bien débuter au poker ? · Comment jouer au poker simple ? · Quelles sont les règles du poker ? · Quelles sont les bases du poker ? · Comment démarrer une partie de poker ? · Combien de jetons faut-il prévoir par joueur au poker ? · Quelle est la probabilité de gagner au poker ?

### 현지 추가
1. **H2 «Texas Hold'em ou poker classique : quelle différence ?»** — H2 «règles de base» 바로 뒤 · 3문장 + 2열 표 1개(3행 이내). 사실(이것만): 프랑스에서 «poker classique»(«poker fermé», «poker à 5 cartes»)라 부르는 게임은 각자 **5장을 비공개로** 받고 **공용 카드가 없으며** 카드를 교환(tirage)한다 · Texas Hold'em은 **2장 비공개 + 5장 공용**이다 · 이 글은 Texas Hold'em만 다룬다. 출처 = L-A §4-1(fr.pokerlistings «Règle du poker classique» 원문 정독 — 5장 드로). 링크 없음.
2. **FAQ «Combien de cartes sont utilisées sur la table de poker ?»** — 답: 52장 한 벌 · 각자 2장 + 보드 5장 · 족보는 `/fr/blog/holdem-hand-rankings` 앵커 1회.
3. **FAQ «Comment démarrer une partie de poker ?»**(entre amis / en famille) — 답 = EN 본문(딜·칩·블라인드 절)을 요약하는 3문장, 새 사실 없음.
4. **FAQ «Comment jouer au poker à 2 joueurs ?»** — 답: 헤즈업에선 버튼이 스몰 블라인드를 내고 프리플랍 먼저 말한다(EN blind-meaning L125~ · game-order tldr의 «Heads-up flips this») → `/fr/blog/holdem-blind-meaning` 앵커.
5. **FAQ «Quelle est la probabilité de gagner au poker ?»** — 1~2문장 + `/fr/blog/holdem-probability` 앵커. 수치 쓰지 않는다.
- EN dummies 2문은 «pour les nuls» / «simple» 축어를 살려 옮긴다(현 fr은 «version la plus simple»로 축어 상실 — L-A §6).
- 선택(권장): 용어 표가 있는 자리(L64 «Term» 표 등)나 첫 액션 언급에 «le vocabulaire officiel (La Ligue de Poker) : parole = check, passe = fold, tapis = all-in» 한 줄 + `/fr/blog/holdem-betting-actions` 앵커. 협회 표 전체는 betting-actions 몫.

### 확정 카피 — (Fable 서브 · §6에 채움)

### 소유표
- 주인: «règles du poker» · «comment jouer au poker» · «règles du Texas Hold'em» · «débutant» · «combien de jetons / répartition des jetons» · «distribuer les cartes».
- 쓰면 안 되는 헤드(seoTitle·H1·tags): §0-6 공통 + «poker classique»(본문 H2만) · «règle du 2 et du 4» · «combinaison poker»(49 500 · hand-rankings — 본문 앵커 1회) · «qui parle en premier»(game-order — 이 글 H2 4는 «Qui commence au Texas Hold'em ?» 형).

### §13 자리 (C 전사 대조 + 손검산)
EN L79~81(7장 예시 표 3행 — 🔴 손검산: A♠K♠ + A♦7♣7♥2♠9♣ = 투페어 A·7 키커 K / 8♠8♦ + K♣8♥4♠4♦J♣ = 풀하우스 8 풀 오브 4 / 2♣3♦ + 보드 로열) · L153~155 · L166 · L170 · L184~186(칩·바이인 수치) · L229(플롭 A♠K♦8♥) · L246 · L283 · L297~299 · L309~310(팟 오즈 예시 산수) · L314~316(2와 4 규칙 표) · L345~354(antisèche 족보 표) · L378(A♣4♦) · FAQ L403 · L407(169 · 1 326) · L415.

### 경험담 자리 (EN에 있는 것만 · 프랑스 독자 맥락으로 다시 쓰되 없는 사실 금지)
L34(키친 테이블·홈게임·카드룸) · L362(홈게임 주최 · 같은 실수 5개) · L370(처음 딜한 홈게임 · 순서 착각) · L378(약한 에이스로 칩 잃는 초보).
- 🔴 프랑스 카지노·클럽·대회·금액을 지어내지 않는다.

### 하지 말 것
- 파일 머리 주석 없음(동결 지시 없음). · H2 제목에 «règle du 2 et du 4» 금지 · 족보 정의를 길게 늘리지 않는다(hand-rankings 몫 · EN 분량 그대로).

---

## 2. holdem-game-order — EN updated 2026-10-01 (우선 2)

### 메타 (EN 축어)
- title: How to Play Texas Hold'em: The Order of Play From Blinds to Showdown
- seoTitle: Who Bets First in Texas Hold'em? — The Order of Play
- desc: Whose turn is it — and who bets first? The full Texas Hold'em order of play: blinds, preflop, flop, turn, river, showdown, and who acts first on every street.
- tldr: Preflop, the player to the left of the big blind bets first. On the flop, turn and river it is the first live player to the left of the button — usually the small blind. (Heads-up flips this.) The hand itself runs blinds → hole cards → preflop → flop → turn → river → showdown, with up to four betting rounds.
- tags(EN): who bets first in texas holdem · who goes first in poker · poker betting order · texas holdem order of play · poker order of play · who acts first in poker · preflop flop turn river · poker showdown
- readTime 16 min · image `/images/blog-holdem-game-flow.webp`
- 현 fr: seoTitle «Ordre du jeu au Texas Hold'em — quand miser, à qui de parler ?» · masterUpdated 2026-07-02(🔴 FAQ 7 vs EN 11 · H2 «Who Bets First» 재정렬 미반영 — L-A §6)
- EN 머리 주석 L6~12(«who bets first» 축 재조준 · 근거 = US 볼륨) → fr에선 그 축을 «qui parle / qui commence en premier»로 받는다. 주석은 fr 파일에 옮기지 않는다.

### 구조 (EN L##)
- 도입 L26~30 · H3 «One hand in 15 seconds» L32
- H2: L40 What Is Texas Hold'em? → L48 Before the Deal(표 L59) → L71 Stage 1 Preflop(H3 L84 starting hands L86~88) → L94 Stage 2 Flop(이미지 L103) → L109 Stage 3 Turn → L123 Stage 4 River → L137 Stage 5 Showdown(이미지 L141) → L155 Who Bets First(표 L164) → L180 Whole Order at a Glance(표 L185 · H3 L195) → L205 Follow One Full Hand(이미지 L207 · H3 Preflop L216 · Flop L221 · Turn L229 · River L237 · Showdown L246) → L257 The 7 Moves(이미지 L259 · 표 L266) → L283 10 Hand Rankings(표 L290~300) → L308 5 Mistakes(H3 ×5) → L334 How to Start Playing Today → readnext L347 → FAQ L352(11문) → L400 The 3 Things to Remember → L410 Related Posts
- FAQ 11: exact order · who goes first in poker · who bets first after the flop · who shows first at showdown · preflop vs flop · checking vs calling · both hole cards · pot odds · when all-in · how many betting rounds · why burn a card

### 링크
EN: L54 blind-meaning · L90 starting-hands-chart · L151 showdown-rules · L172·L318 positions · L279 betting-actions · L304 hand-rankings · L388 all-in-rules · readnext rules-for-beginners·betting-actions · Related(rules-for-beginners · hand-rankings · positions …) → 전부 `/fr/` 1:1. L90 앵커 «quelles mains jouer selon ta position» 형(«tableau»·«mains de départ» 단독 헤드 금지는 제목 한정 — 앵커에 «mains de départ» 포함은 허용).

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| qui commence au poker · qui parle en premier poker · ordre de jeu poker | 40 · 10 · 30 (+ 자동완성 «qui doit parler en premier» · «qui commence a parler/miser» `-`) | seoTitle · H2 8 · FAQ 2 |
| flop turn river · flop poker · river poker | 210 · 210 · 210 | H2 4·6 · tags · desc |
| turn poker · riviere poker · preflop poker · under the gun poker | 50 ×4 | H2 5 · 본문 첫 등장 병기 · UTG 풀어 쓰기 |
| bouton dealer poker · deroulement partie de poker | 40 · 20 | H2 2 · 도입 |
- 함정: «ordre main poker»(2 400 = 족보) → seoTitle·title·H2에 «ordre»+«main» 결합 금지 · H2 12(족보 표)는 «classement des mains» 형.

### 현지 SERP (L-A §3-5~3-7 · §4-2 · §7-2)
- «qui commence au poker» 직답 페이지 0(1위 = Winamax «la river» 정의) · «flop turn river» FR 2/10 · PAA 영어 · 위키 «Cartes communes» · pokerlistings 전략형.
- 더 줄 것 3: ① 프리플랍/포스트플랍 «premier de parole» 2열 표(EN L164) ② 한 핸드 전체 추적(EN L205~ · SERP 0) ③ 헤즈업 예외 + 번 카드.
- PAA(축어): Qui commence à parler au poker ? · Qui joue en premier au poker ? · Quel est l'ordre des joueurs au poker ? · Quel est l'ordre du poker ? · Quel est l'ordre de parole au poker Texas Hold'em ? · C'est quoi la river au poker ? · Qu'est-ce que le flop au poker ?
- 관용: «premier de parole»(fr.pokerlistings 축어) — 본문에 1~2회 써도 된다.

### 현지 추가
1. **H3 «Pourquoi dit-on flop, turn et river ?»**(Stage 5 다음 또는 H2 9 안) — 🔴 어원 1차 출처 없음(L-A §7-2) → **프랑스어 이름만** 다룬다: 프랑스에서도 «flop · turn · river»를 그대로 쓰고, 옛 표기 «le tournant · la rivière»가 함께 쓰인다(PokerStars FR «La turn» · «La River (Rivière)» — L-A §3-7 제목 축어). 단어의 기원·역사 서술 금지.
2. **FAQ «Qui joue en premier au poker ?»**(PAA) — EN «Who goes first in poker?» 답을 프랑스어 질문형으로 받는다(FAQ 2와 합칠지 별문할지는 확정 카피 따름).

### 확정 카피 — (§6)

### 소유표
- 주인: «qui parle / qui commence en premier au poker» · «ordre de parole / ordre du jeu» · «flop turn river» · «C'est quoi la river / le flop».
- 금지 헤드: §0-6 + «ordre»+«main».

### §13 자리
L60~61 · L82 · L86~88(시작 핸드 목록) · L103(K♥7♦2♣ · 9♠ · Q♥) · L141(10♣7♥J♦4♠9♣ · A♥A♦ vs K♥K♣) · L186 · L211~249(풀핸드: A♠K♥ vs 9♦9♣ · 플롭 K♦9♠3♥ · 턴 2♣ · 리버 A♥ — 🔴 손검산: A = A♠K♥A♥K♦9♠ 투페어 A·K / B = 9♦9♣9♠K♦A♥ 트립스 9 → B 승) · L291~300(족보 표 10행) · L314(15~25 %) · L322 · L384.
- L141 손검산: A♥A♦ + 10♣7♥J♦4♠9♣ = 원페어 A(A·A·J·10·9) / K♥K♣ = K·K·J·10·9 → A 승. 스트레이트 없음(7·9·10·J — 8 없음) ✔.

### 경험담 자리
L26(«Wait — whose turn is it…») · L129 · L310(«I've watched each one cost a beginner») · L314(첫 테이블 최대 leak) · L330(투페어 착각·스트레이트 착각 공개).

### 하지 말 것
- «tournant/rivière» 단독 본문 사용 금지(첫 병기 뒤 turn/river) · 족보 표 수치·카드 변경 금지.

---

## 3. holdem-betting-actions — EN updated 2026-10-06 (우선 5)

### 메타 (EN 축어)
- title: Texas Hold'em Betting Actions: Check, Call, Raise, Fold
- seoTitle: Check, Call or Fold? — Poker Betting Actions & Raise Rules
- desc: Action's on you and your mind goes blank? Learn what a check, call, raise and fold mean in poker, the min-raise rule, and how many times you can re-raise.
- tldr: Texas Hold'em has 5 betting actions: check (pass for free), bet (open the round), call (match a bet), raise (increase it — the minimum raise equals the last full bet or raise), and fold. You can only check when there is no live bet in front of you — preflop that normally means only the big blind (or whoever posted a live straddle).
- tags(EN): poker betting actions · what is a check in poker · what is a call in poker · min raise poker rules · how many times can you raise in poker · can you raise after checking · string bet
- readTime 9 min · image `/images/holdem-betting-actions-hero.webp`
- 현 fr: seoTitle «Checker, suivre ou se coucher ? — Les actions au poker» · masterUpdated 2026-07-11

### 구조 (EN L##)
- 도입 L27~31(경험 L27·L29) · H3 «Quick summary» L35 + `:::stripe` L37~42
- H2: L44 5 Betting Actions(표 L49) → L62 What Is a Check → L72 When Can You Check → L85 What Is a Call (Check vs Call)(표 L92 · 예시 L97) → L101 What Is a Fold — Any Time? → L111 Min-Raise(이미지 L113 · 표 L124) → L139 How Many Times Can You Raise → L152 All-In → L162 Knowing the Actions Is Step One(링크 목록 L166~168) → L174 Live Betting Mistakes I See Every Week(H3 ×4) → readnext L196 → FAQ L201(8문) → Related L237
- 🔴 이 글엔 «À retenir»가 없다(EN에 마무리 H2 없음) — 추가하지 않는다.

### 링크
L31·L81 game-order · L107 when-to-fold · L135·L166 strategy · L158 all-in-rules·split-pot-rules · L167 hand-rankings · L168 positions · L233 limping · readnext all-in-rules·strategy · Related(rules-for-beginners · game-order · blind-meaning …) → `/fr/` 1:1.
- 🔴 L107 when-to-fold 앵커 = «savoir quand se coucher» 형(§3-B ③ 상호 앵커 1 · 이 글 제목엔 «quand se coucher» 금지).

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| fold poker · se coucher au poker | 140 · 20 | seoTitle · H2 5 · FAQ |
| check poker · que veut dire check au poker | 110 · 30 | H2 2 |
| relance poker / relancer · raise poker · call poker | 90 ×3 | H2 4·6 · FAQ |
| parole poker · mise minimum poker · relance poker minimum | 20 · 20 · 10 | 협회 표 · H2 6 «relance minimale» |
| combien de fois peut on relancer au poker · string bet poker | 10 · 10 | H2 7 · FAQ |
- 함정: «miser au poker»(십자말풀이) · «parole poker»(Poker Face 가사) → «ordre parole» · «check parole»만 · «relance internationale/americaine/bloquée»(원문 미확인) → 정의하지 않는다.

### 현지 SERP (L-A §3-8~3-11 · §4-3 · §7-5 · §8-A)
- «check poker» 정의 페이지 0/10 · «fold poker» 숏츠·fast fold·포럼 · «relance poker» AIO가 min-raise를 «double de la mise précédente»로 단순화(정확: 직전 증가분 이상 — EN L111~ 그대로가 교정).
- 더 줄 것 3: ① 협회 공식 용어표 ② min-raise 산수(EN L113·L124) ③ TDA/WSOP 조항 + 라이브 실수 4.
- PAA(축어): C'est quoi un check au poker ? · Que signifie "se coucher" au poker ? · Que signifie "raise" au poker ? · Comment bien miser au poker ?
- 자동완성(축어): peut on se coucher sans miser au poker · peut on se coucher au premier tour poker · quand peut on checker au poker · relance minimale poker.

### 현지 추가
1. **용어 표 «Les mots qu'on entend à table»**(H2 1 안 H3 또는 별 H2 — 확정 카피 따름). 1차 출처 축어(La Ligue de Poker 규정 «Règlement officiel du poker de tournoi en association», L-A §4-1): «…mise/ouverture (bet), relance (raise), payé/suivi (call), passe (fold), parole (check), tapis (all in).» + «Il est convenu que taper sur la table signifie « parole » ou « check ».» → 표 3열(action · ce qu'on dit à table · sens) 6행. 출처 링크 `https://www.laliguedepoker.org/reglement/`(L-A §4-1 원문 URL 경로 — 🔴 C가 200 확인 · 안 열리면 링크 빼고 «règlement de La Ligue de Poker» 텍스트만). PokerStars FR «passer» 표기는 언급만(링크 없음).
2. **FAQ «Que signifie « raise » au poker ?»** — 답 = relancer 정의 + min-raise 1문장(EN L111 요지).
3. **FAQ «Comment bien miser au poker ?»** — 1~2문장 + `/fr/blog/holdem-strategy` 앵커(EN L135 문장 재사용).
4. **FAQ «Peut-on se coucher sans miser au poker ?»** — 답 = 언제든 자기 차례에 가능하지만 체크가 공짜일 때 폴드는 손해(EN L101~107 · L186 «big blind folding a free flop» 요지). 새 규칙 금지.

### 확정 카피 — (§6)

### 소유표
- 주인(§3-B ③): «fold poker» · «se coucher»(정의·«que signifie»·«peut-on se coucher») · «check poker / c'est quoi un check» · «relance minimale» · «parole/passe»(협회어).
- 금지 헤드: §0-6 + «quand se coucher» · «check raise»(low-board-check-raise 소유 — 본문 정의 1문장까지만).

### §13 자리
L31 · L39(stripe 수치) · L53 · L87 · L97(K♠8♦ · $10 · $20) · L113(이미지 alt: $6 → $12 · $6 → $10) · L125~128(min-raise 표 — 🔴 산수: 베팅 $6 → 최소 레이즈 $12 / 프리플랍 $6 오픈(BB $2 → 증가분 $4) → 최소 리레이즈 $10) · L135(2,5x · 3x) · L188 · L192 · L209.

### 경험담 자리
L27~29(첫 라이브 «action is on you»에 얼어붙음) · L174~176(주간 로우스테이크 라이브) · L182~184(«I call... actually, raise!» · Rule 90.d).

### 하지 말 것
- TDA/WSOP 조항 번호 변경 금지(L105 Rule 84 · L132 Rule 90.d·103 · L148 Rule 100.b · L180 Rule 90.a·90.b.1 · L192 Rule 97 · L209 TDA 2024 Rule 47-B · L229 Rules 42~45·43·103·90.d).
- «passe»를 본문 기본어로 쓰지 않는다(소개 1회 · 기본은 se coucher).

---

## 4. holdem-blind-meaning — EN updated 2026-10-06 (우선 6)

### 메타 (EN 축어)
- title: What Are Blinds in Poker? Small Blind vs Big Blind, Explained Simply
- seoTitle: Chips In Before Cards? — Small Blind vs Big Blind in Poker
- desc: Two players pay before a card is dealt — why? What the small blind and big blind are, who posts them, SB vs BB amounts, the big blind ante, and heads-up rules.
- tldr: Blinds are forced bets posted before cards are dealt. The small blind sits left of the dealer button and the big blind to their left (heads-up, the button itself posts the small blind); the big blind — usually double the small blind — is the table's betting unit.
- tags(EN): what is a blind in poker · what is the big blind · what is the small blind · small blind vs big blind · big blind small blind rules · big blind ante · texas holdem blinds
- readTime 9 min · image `/images/holdem-blind-meaning-hero.webp`
- 현 fr: seoTitle «Miser avant de voir tes cartes ? — Petite et grosse blinde» · masterUpdated 2026-07-11 · 🔴 tldr에 헤즈업 괄호 누락(EN 현행엔 있음) · FAQ H2 «Questions fréquentes» → «FAQ»

### 구조 (EN L##)
- 도입 L19~21 · `> **Quick answer**` L25 · H3 «The core numbers» L30 + `:::stripe` L32~36
- H2: L40 What Is a Blind — Why Exist → L48 Small Blind → L56 Big Blind(표 L65) → L78 Rules: Who Posts, When(표 L83 · Note 라벨 L89) → L93 How Big Are the Blinds(표 L100 · 라벨 «The golden rule» L108 · 리스트 L112~113) → L117 Big Blind Ante (Plus Straddle)(L121 straddle) → L125 Heads-Up → L131 Miss Your Blind (Dead Blinds) → L137 How to Play From the Blinds(이미지 L139 · 리스트 L143~145) → readnext L149 → FAQ L154(8문) → L190 The Takeaways(L196 링크) → Related L200
- 라벨 «Note» · «The golden rule»은 `> **Note :**` · `> **La règle d'or :**`로(직답 라벨 아님).

### 링크
L21 rules-for-beginners · L58 betting-actions · L89 game-order·positions · L112 tournament-vs-cash-game · L113·L119 tournament · L121 straddle · L144 pot-odds · L145 position-play · L196 rules-for-beginners(thumb)·game-order·positions · readnext rules-for-beginners·position-play · Related → `/fr/` 1:1.

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| petite blinde (+ grosse blinde) | 390 | seoTitle · title · H2 2·3 |
| ante poker · ante poker definition | 210 · 30 | H2 6 · FAQ · tags |
| blind poker · big blind poker · small blind poker | 210 · 70 · 20 | 첫 정의 «blinde (blind)» · desc 또는 tags |
| blinde poker · poker blinde · blinde au poker | 90 · 70 · 40 | H2 1 |
| petite blinde grosse blinde | 50 | seoTitle |
- 함정: «petite blinde» 단독 = 블라인드 박스·Balatro → 항상 «grosse blinde»와 묶음 · «heads up poker»(210) 조준 안 함 · «ante» 단독 SERP = 용어사전 6/10 + 가구.

### 현지 SERP (L-A §3-13~3-14 · §4-4 · §7-6)
- 정의 글 0(blinde SERP = reddit·포럼·타이머 앱) · Winamax «les blindes et ante»(540단어 · 🟡 big blind ante 누락 · «ante는 TOUS les joueurs»).
- 더 줄 것 3: ① 캐시 vs 토너먼트 레벨 표(EN L100) ② 전원 앤티 vs BB 앤티 비교(EN L117~) ③ 헤즈업·데드 블라인드.
- PAA(축어): Qu'est-ce que l'ante au poker ? · C'est quoi l'ante ? · Qu'est-ce qu'une blinde au poker ? · Quelle est la valeur d'un blind au poker ? · C'est quoi une blind ? · Est-ce que la grosse blinde peut relancer ? · Quand augmenter les blinds ?
- 자동완성: qui paye l ante au poker · ordre blinde poker · ordre petite blinde grosse blinde.
- 인용 가능 1차 문구(Winamax «les blindes et ante» 축어 · L-A §4-4): «…dans les tournois, les blinds augmentent régulièrement. On appelle cette augmentation « la structure des blinds ».» → 본문에 «structure des blindes» 표현만 쓰고(사실 동일 · EN L113), 외부 링크는 걸지 않는다.

### 현지 추가
1. **FAQ «La grosse blinde peut-elle relancer ?»**(PAA 2 SERP) — EN FAQ «If no one raises, can the big blind just check?»(L168) 답 + «아무도 레이즈하지 않으면 BB는 체크 또는 레이즈 옵션» — EN L58 «If nobody raises…» 문장 근거. 확정 카피가 두 문항을 합치면 그대로.
2. **FAQ «Qui paie l'ante au poker ?»** — EN L117~ 근거: 전통 앤티 = 모든 플레이어 · big blind ante = 빅 블라인드 한 명이 테이블 몫을 낸다(EN 본문 문장만).
3. **FAQ «Quand augmentent les blindes en tournoi ?»** — EN L113 «rise on a timer (e.g. 25/50 → 50/100 → 100/200)» + `/fr/blog/holdem-tournament` 앵커. 레벨 시간(분) 등 EN에 없는 수치 금지.

### 확정 카피 — (§6)

### 소유표
- 주인: «petite blinde / grosse blinde» · «blinde/blind poker» · «ante poker» · «big blind ante» · «la grosse blinde peut-elle relancer».
- 금지 헤드: §0-6 + «straddle»(holdem-straddle 소유 — H2 6 괄호 언급·앵커만) · «heads up poker».

### §13 자리
L21 · L26 · L35(stripe) · L50 · L58($1/$2 · $2) · L64~70(SB/BB 표) · L85 · L89 · L95(Rule 104) · L101~108(레벨 표 — $1/$2 · $1/$3 · $2/$3 등) · L112 · L121 · L144(BB 디펜스 팟 오즈) · L166 · L192.

### 경험담 자리
L19(첫 라이브 핸드 «Small blind, please.» · 12년) · L141~143(블라인드에서 칩 새는 초보).

### 하지 말 것
- Rule 104(L95) 번호 유지 · 레벨 예시 숫자 변경 금지.

---

## 5. holdem-all-in-rules — EN updated 2026-10-06 (우선 4)

### 메타 (EN 축어)
- title: Texas Hold'em All-In Rules: Side Pots, Re-Raises & Showdown
- seoTitle: Went All-In and Confused? — Hold'em All-In Rules & Side Pots
- desc: Shoved all your chips and not sure what you can win? Texas Hold'em all-in rules — table stakes, side pots, re-raise eligibility, and showdown order.
- tldr: Going all-in means betting every chip you have. You can only win what you matched from each opponent (the main pot). Extra chips that two or more bigger stacks bet beyond that form a side pot only they can win; a lone extra bet is simply returned. In no-limit and pot-limit, an all-in for less than a full raise does NOT reopen the betting for a player who already acted — unless several short all-ins add up to at least a full raise over what that player has already put in.
- tags(EN): texas holdem all in rules · poker all in rules · side pot poker explained · does all in reopen betting poker · poker all in showdown rules
- readTime 10 min · image `/images/holdem-all-in-rules-hero.webp`
- 현 fr: seoTitle «Tapis au poker : que peux-tu vraiment gagner ? — Side pots» · masterUpdated 2026-08-12

### 구조 (EN L##)
- 도입 L25~31(경험 L29)
- H2: L33 What Does "All-In" Mean(용어 표 `<div>` L40~50) → L55 How to Declare All-In(이미지 L63 · TDA 45-A/B L61) → L69 How Do Side Pots Work(이미지 L73 · H3 3-Player L75 표 L78 · H3 4-Player L89 표 L94 · `<div>` 표 L101~108) → L115 Does Going All-In Reopen the Betting?(이미지 L121 · 표 L138 · H3 Advanced Case L146 표 L165 · H3 Quick Decision Guide L174 표 L181) → L192 All-In Showdown Rules(번호 목록) → L207 5 Mistakes(H3 ×5) → readnext L228 → FAQ L233(7문) → Related L265
- 🔴 마무리 H2 없음 — 추가하지 않는다.

### 링크
L119 betting-actions · L196 showdown-rules · readnext L229~230 rules-for-beginners·showdown-rules · Related(split-pot-rules 포함) → `/fr/` 1:1.

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| all in poker | 590 | 🔴 seoTitle 앞쪽 · title · tags |
| faire tapis poker · tapis au poker | 90 · 90 | H2 1 «faire tapis (all-in)» · desc |
| poker tapis règle · regles poker tapis · all in poker regle | 50 · 50 · 10 | title/H2 «règles» |
| side pot poker · table stakes poker | 20 · 10 | H2 3 · FAQ |
| que veut dire tapis au poker · quand faire tapis au poker | 20 · 10 | H3 · FAQ |
- 함정: «tapis au poker» 매트 쇼핑 4/10 · «tapis minimum … mots fléchés» → «tapis» 단독·«tapis de poker» 금지(카피) · «all in poker» 자동완성 = 영화·리그·로또.

### 현지 SERP (L-A §3-15~3-16 · §4-5 · §7-4)
- «all in poker» 상위 10 중 6 외국어 · fr.wiki «Tapis» 스텁 · tables-poker(쇼핑몰 블로그 · PAA 정면 H2로 2위 · side pot 산수 0) · upswing EN이 FR 2위.
- 더 줄 것 3: ① 3·4인 side pot 산수 표(EN L78·L94~108) ② 재오픈 결정표(EN L181 · SERP 0) ③ «큰 스택은 올인 금액만 콜» 반례.
- PAA(축어): Que signifie "faire un all-in" ? · Pourquoi dit-on tapis au poker ? · Qu'est-ce que le tapis effectif au poker ? · (관련) Que veut dire tapis au poker · Quand faire tapis au poker · If someone goes all in in poker do you have to go all in.

### 현지 추가
1. **H3 «Pourquoi dit-on tapis au poker ?»**(H2 1 아래) — 🔴 어원 서술 금지. 쓸 것: 프랑스어에서 «tapis»는 플레이어 앞에 놓인 칩 전체를 가리키는 말로도 쓰이고, 그래서 «faire tapis» = 그 전부를 거는 것 = all-in · 국제 용어는 «all-in», 영어 은어 push/shove/jam(EN L44 표). 이 H3 안에서만 «tapis = 칩 전체» 뜻을 설명하고, 그 밖 본문에서 스택은 «stack»(§3-A ④).
2. **H3 «Qu'est-ce que le tapis effectif ?»** — 정의: 두 플레이어 중 **작은 쪽 스택**이 실제로 걸 수 있는 최대치. 예시는 EN 3인 표 숫자만: A 100 vs B 300 → tapis effectif 100(B는 A의 all-in에 100만 지불하면 된다 · 나머지 200은 그대로).
3. **FAQ «Si quelqu'un fait tapis, dois-je aussi faire tapis ?»** — 답: 아니다 · 그 금액만 콜(또는 폴드/레이즈) · 숫자 = 위 100/300 예시. 🔴 «on lit parfois que le gros stack doit tout miser — c'est faux» 톤은 허용하되 출처 사이트 이름은 쓰지 않는다(L-A §4-5 fr.wiki 오류).
4. **FAQ «Qu'est-ce que le tapis effectif au poker ?»** — H3 2 요지 2문장(중복 허용 — PAA 축어 질문).
5. **FAQ «Quand faire tapis au poker ?»** — 1~2문장: 규칙이 아니라 전략(EN L223 «out of frustration» 실수 요지) + `/fr/blog/holdem-short-stack` 앵커 또는 `/fr/calculator`(«calculateur poker»). 수치(«10~15 BB») 금지.

### 확정 카피 — (§6)

### 소유표
- 주인: «all in poker» · «faire tapis» · «tapis au poker règle» · «side pot (pot annexe)» · «tapis effectif» · «table stakes».
- 금지 헤드: §0-6 + «push or fold»(도구 · §3-B ⑪) · «quand faire tapis»는 FAQ 질문으로만(제목 금지).

### §13 자리
L63(K♠10♣7♦4♥2♣ 보드 이미지) · L79~85(3인: 100×3 = 300 · 50×2 = 100) · L104~107(4인: 400 · 300 · 600 · 합 1 300 — 🔴 산수 확인: 100×4 + 100×3 + 300×2 = 400 + 300 + 600 = 1 300 ✔) · L125~128 · L132~133(재오픈 예시 수치) · L152~160 · L166~168(복수 숏 올인 표) · L218 · FAQ L235(빅 블라인드 미만 올인).

### 경험담 자리
L29(첫 라이브 캐시 올인 · 무엇을 이길 수 있는지 몰랐다) · L117(재오픈 규칙으로 5분 언쟁 목격).

### 하지 말 것
- TDA 2024 Rule 45-A·45-B·47·47-B·48·16 · WSOP Tournament Rule 92 · Live Action Rule 149·154·175·176 번호 유지.

---

## 6. holdem-showdown-rules — EN updated 2026-10-06 (우선 3)

### 메타 (EN 축어)
- title: Texas Hold'em Showdown Rules: Who Shows First, Mucking, and Slow Rolling
- seoTitle: Who Flips First? Texas Hold'em Showdown Rules & Mucking
- desc: Who shows cards first at showdown? Can you muck without showing? Hold'em showdown rules — last aggressor, cards speak, slow roll, and all-in rules explained.
- tldr: In a non-all-in tournament showdown, the last river aggressor shows first; if the river checks through, the first active player left of the button does. With an all-in, all remaining hands must be shown once betting is complete. A river caller who retains or tables their cards can request the last aggressor's hand. Cash games follow house rules for showing and mucking.
- tags(EN): texas holdem showdown rules · who shows cards first poker · can you muck at showdown poker · slow roll poker · all in showdown rules
- readTime 10 min · image `/images/holdem-showdown-rules-hero.webp`
- 현 fr: seoTitle «Qui montre en premier ? Règles de l'abattage au poker» · masterUpdated 2026-07-12 · 🔴 «rivière» 29회(→ river)

### 구조 (EN L##)
- 도입 L25~31(«This exact standoff…»)
- H2: L33 Who Has to Show First(표 `<div>` L38~45 · 이미지 L47) → L53 Can You Muck Without Showing(L59 TDA 16 · L61 TDA 18 · L63) → L67 Checked River Order → L77 All-In Showdown(표 L84~88 · L91) → L97 Cards Speak(이미지 L99 · 예시 L107) → L111 Slow Rolling(이미지 L117) → L125 Win Without Showdown → L135 Etiquette(H3 ×4 L139~151) → readnext L157 → FAQ L162(7문) → Related L194
- 🔴 마무리 H2 없음.

### 링크
L35 game-order(thumb) · L93 all-in-rules·split-pot-rules · readnext L158~159 game-order·all-in-rules · Related(split-pot-rules · tiebreak-rules · rules-for-beginners …) → `/fr/` 1:1.

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| showdown poker | 110 | seoTitle · title «showdown (abattage)» · tags |
| muck poker | 90 | H2 2 · tags |
| slow roll poker | 70 | H2 6 · tags |
| abattage poker · regle abattage poker | 10 · `-` | title 병기 · 본문 |
| qui montre ses cartes en premier (au poker) · quand montrer ses cartes au poker | `-`(자동완성) | H2 1 · H2 7 · FAQ |
- 함정: «showdown poker» = 프라하 클럽·앱 섞임 · «abattage poker» = «abattage pokémon».

### 현지 SERP (L-A §3-17~3-18 · §4-6 · §7-3)
- 1위 fr.wiki «Abattage» 650단어 — «체크다운이면 이전 스트리트 마지막 레이저가 먼저»(위키 스스로 «pas toujours appliquée» · 근거 표시 결여 태그). «qui montre…» SERP 포럼 4 · 직답 0.
- 더 줄 것 3: ① 체크다운 순서 = 버튼 왼쪽 첫 생존자(EN L67~75 · TDA 2024 Rule 17 = all-in L257이 인용) ② cards speak 예시(EN L107 · §13) ③ muck·show 요청 조항(TDA 16·18·14).
- PAA(축어): Quelles sont les règles du showdown ? · (자동완성) qui montre ses cartes en premier au poker · quand montrer ses cartes au poker · regle abattage poker.

### 현지 추가
1. **«Quelles sont les règles du showdown ?»** — 첫 H2 앞 짧은 H2 또는 FAQ 1번(확정 카피 따름). 5줄 요약 = EN tldr 4문장을 다시 풀어 쓴 것(새 규칙 없음).
2. **H2 3(체크다운 순서) 안 비교 2행**: «On lit souvent que le dernier relanceur des tours précédents montre en premier» vs «Règle TDA (Rule 17) : premier joueur actif à gauche du bouton». 출처 사이트 이름 쓰지 않는다. 표로 할지 문장으로 할지는 B 재량(EN 구조에 표 추가 = «현지 추가»로 진행 파일 기록).
3. **FAQ «Quand montrer ses cartes au poker ?»** — EN H2 7(L125~) + H2 1 요지.

### 확정 카피 — (§6)

### 소유표
- 주인: «showdown poker» · «abattage» · «qui montre ses cartes en premier» · «muck» · «slow roll» · «cards speak».
- 금지 헤드: §0-6 + «split pot / partage»(split-pot-rules · 앵커만).

### §13 자리
L23(imageAlt: 4♥7♣Q♦K♠2♥ · A♠K♥ 원페어 K·A 키커) · L47(J♥9♠4♦2♠K♥) · L71 · L99(8♠9♣10♥J♦Q♠ 보드 스트레이트) · L105~107(🔴 손검산: J♥10♥ + Q♥9♥8♥2♣5♦ = Q♥J♥10♥9♥8♥ 스트레이트 플러시 Q-하이 / K♣Q♦ = 원페어 Q(Q·Q·K·9·8) → J♥10♥ 승 ✔) · L186.
- L99 확인 포인트: 보드 8-9-10-J-Q 자체가 스트레이트 — 홀카드 K나 9-하이 카드로 더 높은 스트레이트가 되는지는 이미지 문맥만(본문 주장 그대로 옮기고 바꾸지 않는다).

### 경험담 자리
L25~31(리버 콜 후 서로 기다리는 정적) · L103 · L137(«four I end up correcting») · L141(«You show first»).

### 하지 말 것
- TDA 2024 Rule 14·16·17·17-B·18·18-A·18-B · WSOP Rule 72·109·117·143·147·149 번호 유지 · «cash games follow house rules» 뉘앙스 유지(토너먼트 규칙을 캐시에 일반화하지 않는다).

---

## 6′. 확정 카피 (Fable 서브 1회 · 2026-10-07 · 글자 수 = Opus 재측정 String.length)

> B·C는 이 절의 문구를 바꾸지 않는다(계획 §2-⑥). H2 문구는 그대로 쓰고, H2 직후 40~75단어 직답을 붙인다. «현지 추가»는 위 각 절 «현지 추가»의 사실·출처 범위 안에서만. 각 절의 «### 확정 카피 — (§6)» 자리 = 이 절.
> Opus 수정 2건(정확성): ① betting-actions tldr «checker (… passer sans miser)» → «passer»는 협회어로 fold라서 혼동 → 아래 문구로 교체 · «la relance minimum égale la dernière mise ou relance» → «… au moins la dernière mise ou relance complète»(EN «last full bet or raise») ② betting-actions H2 5 «peut-on fold» → «peut-on se coucher».

### 6′-1. texas-holdem-rules-for-beginners
- title: Règles du poker Texas Hold'em pour débutants : comment jouer pas à pas
- seoTitle: Jamais joué ? — Règles du poker Texas Hold'em pour débutant
- desc: Jamais joué ? Les règles du poker Texas Hold'em pas à pas : blindes, jetons, distribution des cartes, classement des mains et antisèche pour débutant.
- tldr: Au Texas Hold'em, chaque joueur reçoit 2 cartes fermées et partage 5 cartes communes posées au milieu de la table. Il y a jusqu'à 4 tours d'enchères, et la meilleure main de 5 cartes gagne à l'abattage (showdown), sauf si tous les autres se sont couchés avant.
- tags: règles du poker · comment jouer au poker · poker texas holdem · regles du poker debutant · apprendre le poker · combien de jetons au poker · distribution cartes poker · poker pour les nuls

| EN | fr H2/H3 |
|---|---|
| H3 30 seconds | ### Comment se joue le poker en 30 secondes ? |
| 1 Basic Rules | ## Quelles sont les règles du poker Texas Hold'em ? |
| (현지 추가) | ## Texas Hold'em ou poker classique : quelle différence ? |
| 2 Flow Summary | ## Comment se joue le poker, étape par étape ? |
| 3 How Many Players | ## Combien de joueurs faut-il pour jouer au Texas Hold'em ? |
| 4 Who Goes First | ## Qui commence au Texas Hold'em ? |
| 5 What Chips | ## Combien de jetons au poker et comment les répartir ? |
| 6 How Much Money | ## Combien d'argent pour commencer ? La cave au poker |
| 7 NL/L/PL | ## No-limit, limit ou pot-limit : à quel Texas Hold'em joues-tu ? |
| 8 How to Deal | ## Comment distribuer les cartes au poker ? |
| 9 Position | ## La position au Texas Hold'em : pourquoi ta place à table change tout |
| 10 Strategy | ## Comment bien débuter au poker ? |
| 11 Pot Odds | ## Les cotes du pot : la seule notion de maths qui fait économiser des jetons aux débutants |
| H3 one example | ### Comment marchent les cotes du pot (un exemple) |
| H3 Rule of 2 and 4 | ### Outs ×2 ou ×4 : le raccourci pour estimer tes chances |
| 12 Cheat Sheet | ## Antisèche des règles du poker à imprimer |
| 13 Mistakes | ## Les erreurs que font tous les débutants au poker |
| FAQ · Final Takeaway · Related | ## FAQ · ## À retenir · ## Articles liés |

FAQ(16): 1 Comment se joue le jeu de poker ? · 2 Qui commence au Texas Hold'em, préflop et après le flop ? · 3 Comment distribuer les jetons au poker ? · 4 Combien d'argent faut-il pour commencer une partie de poker ? · 5 Y a-t-il une « petite suite » au Texas Hold'em ? · 6 Combien de mains de départ existe-t-il au Texas Hold'em ? · 7 Quelles sont les règles du poker pour les nuls, en version simple ? · 8 Poker pour les nuls : que veulent dire les blindes ? · 9 Comment jouer au poker simple ? · 10 À combien de joueurs peut-on jouer au poker ? · 11 Que veut dire no-limit au Texas Hold'em ? · 12 Combien de temps dure une main de Texas Hold'em ? · 13 [추가] Combien de cartes sont utilisées sur la table de poker ? · 14 [추가] Comment démarrer une partie de poker entre amis ou en famille ? · 15 [추가] Comment jouer au poker à 2 joueurs ? · 16 [추가] Quelle est la probabilité de gagner au poker ?
- 1~12 = EN FAQ 1~12 순서 대응. FAQ 5 답의 본문 표기는 «quinte»(질문만 «petite suite» 검색형) · 휠 = «la roue (wheel)».

### 6′-2. holdem-game-order
- title: Ordre du jeu au poker : qui parle en premier, des blindes au showdown
- seoTitle: À qui de parler ? — Ordre du jeu au poker, flop turn river
- desc: Tu hésites sur « à qui de jouer » ? L'ordre du jeu au poker Texas Hold'em : blindes, préflop, flop, turn, river, showdown et qui parle en premier.
- tldr: Préflop, c'est le joueur à gauche de la grosse blinde qui parle en premier. Au flop, à la turn et à la river, c'est le premier joueur encore en jeu à gauche du bouton, en général la petite blinde (en heads-up, c'est l'inverse). Une main suit toujours le même ordre : blindes, cartes fermées, préflop, flop, turn, river, showdown, avec jusqu'à 4 tours d'enchères.
- tags: flop turn river · ordre de jeu poker · qui commence au poker · preflop poker · river poker · under the gun poker · bouton dealer poker · deroulement partie de poker

| EN | fr H2/H3 |
|---|---|
| H3 15 seconds | ### Une main de poker en 15 secondes |
| 1 What Is | ## C'est quoi le Texas Hold'em, en deux mots ? |
| 2 Before the Deal | ## Avant la donne : le bouton (dealer) et les blindes |
| 3 Preflop | ## Étape 1 — Le préflop : c'est quoi « under the gun » ? |
| 4 Flop | ## Étape 2 — Qu'est-ce que le flop au poker ? |
| 5 Turn | ## Étape 3 — C'est quoi la turn (le tournant) au poker ? |
| 6 River | ## Étape 4 — C'est quoi la river au poker ? |
| (현지 추가 · H2 6 끝) | ### Flop, turn, river : comment dit-on en français ? |
| 7 Showdown | ## Étape 5 — Le showdown (l'abattage) : la meilleure main de 5 cartes gagne |
| 8 Who Bets First | ## Qui parle en premier au poker ? L'ordre de parole, tour par tour |
| 9 At a Glance | ## Quel est l'ordre des joueurs au poker ? Le déroulement en un coup d'œil |
| 10 Full Hand | ## Une main réelle décortiquée, étape par étape |
| 11 The 7 Moves | ## Quels sont les 7 coups possibles au poker ? |
| 12 Hand Rankings | ## Quelles sont les 10 mains du poker à connaître ? |
| 13 Mistakes | ## 5 erreurs de débutant à éviter dès ta première partie |
| 14 Start Today | ## Comment commencer à jouer dès aujourd'hui ? |
| FAQ · 3 Things · Related | ## FAQ · ## À retenir · ## Articles liés |

- 🔴 H2 3 «under the gun»: EN Stage 1(L71~)은 UTG를 이름으로 부르지 않고 «Action starts to the left of the big blind»라고만 쓴다 → 직답 첫 문장에 «le joueur assis à gauche de la grosse blinde, appelé under the gun (UTG), parle en premier préflop»로 그 문장을 받는다(용어 라벨만 추가 · 새 규칙 없음).
- H2 5 «la turn (le tournant)» = 이 글 turn 첫 등장 병기를 겸한다. H3 추가는 §2 «현지 추가 1» 범위(어원 금지).

FAQ(12): 1 Quel est l'ordre de parole au poker Texas Hold'em ? · 2 Qui commence à parler au poker ? · 3 Qui parle en premier après le flop ? · 4 Au showdown, qui montre ses cartes en premier ? · 5 Quelle est la différence entre le préflop et le flop ? · 6 Quelle est la différence entre checker et suivre ? · 7 Dois-je utiliser mes deux cartes fermées au showdown ? · 8 C'est quoi les cotes du pot ? · 9 Quand faut-il faire all-in ? · 10 Combien de tours d'enchères y a-t-il dans une main ? · 11 Pourquoi le donneur brûle-t-il une carte, et combien ? · 12 [추가] Qui joue en premier au poker ?
- 1~11 = EN FAQ 1~11 순서 대응.

### 6′-3. holdem-betting-actions
- title: Check, call, relance, fold : les actions de mise au Texas Hold'em
- seoTitle: À toi de parler ? — Check, call, relance et fold au poker
- desc: C'est à toi de parler et ta tête se vide ? Ce que veulent dire check, call, relance et fold au poker, la mise minimum et la règle de la relance.
- tldr: Au Texas Hold'em, il y a 5 actions : checker (dire « parole » : ne pas miser tout en restant dans le coup), miser (ouvrir le tour), suivre (payer la mise), relancer (la relance minimum égale au moins la dernière mise ou relance complète) et se coucher (fold). Tu ne peux checker que s'il n'y a aucune mise devant toi : préflop, c'est en général seulement la grosse blinde, ou le joueur qui a posé un straddle.
- tags: fold poker · check poker · relance poker · call poker · raise poker · se coucher au poker · mise minimum poker · parole poker

| EN | fr H2/H3 |
|---|---|
| H3 Quick summary | ### En bref |
| 1 5 Actions | ## Quelles sont les 5 actions au poker : check, mise, call, relance, fold ? |
| (현지 추가 · H2 1 끝) | ### Les mots qu'on entend à table : parole, passe, tapis… |
| 2 Check | ## C'est quoi un check au poker ? |
| 3 When Check | ## Quand peut-on checker au poker ? |
| 4 Call | ## C'est quoi un call au poker ? Check ou call, la différence |
| 5 Fold | ## Que signifie « se coucher » au poker, et peut-on se coucher à tout moment ? |
| 6 Min-Raise | ## C'est quoi la relance minimum (min-raise) ? Les règles de mise et de relance au Hold'em |
| 7 How Many Raises | ## Combien de fois peut-on relancer au poker ? |
| 8 All-In | ## Faire all-in (tapis) : la dernière action possible |
| 9 Step One | ## Connaître les actions, c'est l'étape 1 : les choisir, c'est de la stratégie |
| 10 Live Mistakes | ## Les erreurs de mise que je vois chaque semaine en live |
| FAQ · Related | ## FAQ · ## Articles liés |

FAQ(11): 1 Peut-on relancer après avoir checké au poker ? · 2 Peut-on relancer sa propre mise ? · 3 Y a-t-il une limite au nombre de relances au Texas Hold'em ? · 4 Peut-on se coucher quand ce n'est pas son tour ? · 5 Peut-on checker préflop ? · 6 Peut-on relancer après un all-in ? · 7 C'est quoi un string bet au poker ? · 8 Que veut dire limper au poker ? · 9 [추가] Que signifie « raise » au poker ? · 10 [추가] Comment bien miser au poker ? · 11 [추가] Peut-on se coucher sans miser au poker ?
- 본문 용어: H2·FAQ의 «check/call/fold»는 검색 표기 — 본문은 checker · suivre · se coucher(§0-4). 본문 min-raise 첫 등장은 «relance minimale (min-raise)»(§0-4) — H2 6의 «relance minimum»은 검색형으로 둔다.

### 6′-4. holdem-blind-meaning
- title: Qu'est-ce qu'une blinde au poker ? Petite blinde, grosse blinde et ante
- seoTitle: Miser sans voir ? — Petite blinde, grosse blinde, ante poker
- desc: Deux joueurs paient avant de voir une carte, pourquoi ? Le blind au poker : petite blinde et grosse blinde, qui les paie, leurs montants et l'ante.
- tldr: Les blindes sont des mises obligatoires posées avant la distribution des cartes. La petite blinde est à gauche du bouton du donneur et la grosse blinde juste à sa gauche (en heads-up, c'est le bouton qui paie la petite blinde). La grosse blinde, en général le double de la petite, sert d'unité de mise à toute la table.
- tags: petite blinde grosse blinde · blind poker · ante poker · blinde poker · big blind poker · small blind poker · ante poker definition

| EN | fr H2/H3 |
|---|---|
| H3 core numbers | ### Les chiffres clés |
| 1 What Is a Blind | ## Qu'est-ce qu'une blinde au poker (blind), et pourquoi ça existe ? |
| 2 Small Blind | ## C'est quoi la petite blinde (small blind) ? |
| 3 Big Blind | ## C'est quoi la grosse blinde (big blind) ? |
| 4 Rules | ## Petite blinde et grosse blinde : qui les paie, et quand |
| 5 How Big | ## Quelle est la valeur d'un blind au poker ? Cash game et tournoi |
| 6 BB Ante | ## Qu'est-ce que l'ante au poker (et le big blind ante) ? |
| 7 Heads-Up | ## Qui paie les blindes en heads-up ? |
| 8 Miss Blind | ## Que se passe-t-il si tu rates ta blinde ? (blinde morte) |
| 9 Play From Blinds | ## Comment jouer depuis les blindes : la version 30 secondes |
| FAQ · Takeaways · Related | ## FAQ · ## À retenir · ## Articles liés |

FAQ(10): 1 Pourquoi doit-on payer les blindes avant de voir ses cartes ? · 2 La petite blinde ou la grosse blinde : qui agit en premier ? · 3 La petite blinde vaut-elle toujours exactement la moitié de la grosse blinde ? · 4 Est-ce que la grosse blinde peut relancer ? (EN FAQ 4 «can the BB just check» 흡수 — 답에 체크 옵션 포함) · 5 Peut-on se coucher après avoir posé une blinde ? · 6 En heads-up, qui paie la petite blinde : le bouton ou l'autre joueur ? · 7 Faut-il rattraper une blinde manquée ? (답 = EN FAQ 7 «miss your blind» 내용 그대로) · 8 « La grosse blinde » et « les blindes », c'est la même chose ? · 9 [추가] Qui paie l'ante au poker ? · 10 [추가] Quand augmenter les blinds en tournoi ?
- «blind»(남성·영어)는 H2 5·desc·FAQ 10의 검색형 · 본문은 «blinde».

### 6′-5. holdem-all-in-rules
- title: Règles de l'all-in au poker : faire tapis, side pots, relances et showdown
- seoTitle: All-in poker : tu gagnes quoi ? — Faire tapis et side pot
- desc: Tu fais tapis et le donneur sépare les jetons en deux tas ? Les règles de l'all-in : table stakes, pot principal, side pots, relances et showdown.
- tldr: Faire all-in (tapis), c'est miser tous les jetons que tu as devant toi. Tu ne peux gagner de chaque adversaire que ce que tu as couvert, c'est le pot principal ; les jetons misés au-delà par deux stacks plus gros ou plus forment un side pot (pot annexe) qu'eux seuls peuvent gagner, et une mise supplémentaire isolée est simplement rendue. En no-limit et en pot-limit, un all-in inférieur à une relance pleine ne rouvre pas les enchères pour un joueur qui a déjà parlé, sauf si plusieurs petits all-in cumulés atteignent au moins une relance pleine au-dessus de ce qu'il a déjà mis.
- tags: all in poker · faire tapis poker · tapis au poker · side pot poker · regles poker tapis · all in poker regle · table stakes poker

| EN | fr H2/H3 |
|---|---|
| 1 What Does All-In Mean | ## Que veut dire faire tapis (all-in) au poker ? |
| (현지 추가) | ### Pourquoi dit-on tapis au poker ? |
| (현지 추가) | ### Qu'est-ce que le tapis effectif au poker ? |
| 2 How to Declare | ## Comment annoncer un all-in à table ? |
| 3 Side Pots | ## Comment fonctionnent les side pots au poker ? (Pourquoi le joueur all-in est plafonné) |
| H3 3-Player | ### Exemple à 3 joueurs (le cas standard) |
| H3 4-Player | ### Exemple à 4 joueurs avec plusieurs stacks |
| 4 Reopen | ## Un all-in rouvre-t-il les enchères ? La règle que presque tout le monde rate |
| H3 Advanced | ### Cas avancé : plusieurs joueurs font all-in pour moins qu'une relance |
| H3 Quick Decision | ### Décision express : cet all-in rouvre-t-il les enchères ? |
| 5 Showdown | ## All-in et showdown : ce qui change à l'abattage |
| 6 Mistakes | ## Que se passe-t-il si tu fais all-in de travers ? 5 erreurs à éviter |
| FAQ · Related | ## FAQ · ## Articles liés |

FAQ(10): 1 Peut-on faire all-in pour moins que la grosse blinde ? · 2 Que se passe-t-il si tu gagnes l'all-in mais perds le side pot ? · 3 Faire all-in oblige-t-il à montrer sa main ? · 4 Peut-on faire « run it twice » lors d'un all-in ? · 5 C'est quoi exactement la règle des « table stakes » ? · 6 Si deux joueurs font all-in pour des montants différents, qui montre en premier ? · 7 Les règles de l'all-in sont-elles différentes en tournoi et en cash game ? · 8 [추가] Qu'est-ce que le tapis effectif au poker ? · 9 [추가] Si quelqu'un fait tapis, dois-je aussi faire tapis ? · 10 [추가] Quand faire tapis au poker ?

### 6′-6. holdem-showdown-rules
- title: Règles du showdown au poker : qui montre en premier, muck et slow roll
- seoTitle: Qui montre ses cartes en premier ? — Showdown poker et muck
- desc: Qui montre ses cartes en premier au showdown ? Règles de l'abattage au poker : dernier relanceur, cards speak, muck sans montrer, slow roll et all-in.
- tldr: En tournoi, sans all-in, le dernier joueur à avoir misé ou relancé sur la river montre en premier ; si tout le monde a checké la river, c'est le premier joueur encore en jeu à gauche du bouton. Après un all-in, toutes les mains restantes doivent être montrées une fois les enchères terminées. Le joueur qui a payé la river et garde ses cartes peut demander à voir la main du dernier relanceur ; en cash game, ce sont les règles de la salle qui décident de qui montre et qui peut jeter sa main.
- tags: showdown poker · muck poker · slow roll poker · abattage poker · qui montre ses cartes en premier au poker · regle abattage poker · cards speak poker

| EN | fr H2 |
|---|---|
| (현지 추가 · 첫 H2 앞) | ## Quelles sont les règles du showdown ? |
| 1 Who Shows First | ## Qui montre ses cartes en premier au poker ? |
| 2 Muck | ## Peux-tu jeter tes cartes (muck) sans les montrer au showdown ? |
| 3 Checked River | ## Qui montre en premier quand tout le monde a checké la river ? |
| 4 All-In Showdown | ## Showdown après un all-in : le joueur all-in montre-t-il en premier ? |
| 5 Cards Speak | ## La règle « cards speak » : ce sont les cartes qui parlent |
| 6 Slow Rolling | ## C'est quoi le slow roll au poker ? |
| 7 Win Without Showdown | ## Quand montrer ses cartes au poker ? Et si tu gagnes sans showdown ? |
| 8 Etiquette | ## L'étiquette du showdown : ce que les débutants font de travers |
| FAQ · Related | ## FAQ · ## Articles liés |

FAQ(9): 1 Qui montre ses cartes en premier au showdown ? · 2 Dois-tu montrer tes cartes si tu es payé au showdown ? · 3 Peut-on jeter ses cartes (muck) au showdown sans les montrer ? · 4 C'est quoi un slow roll au poker, et pourquoi c'est mal vu ? · 5 En cas d'all-in, qui montre ses cartes en premier ? · 6 Que veut dire « cards speak » au poker ? · 7 Dois-tu montrer tes cartes si tu gagnes sans showdown ? · 8 [추가] Quelles sont les règles du showdown ? · 9 [추가] Quand montrer ses cartes au poker ?
- 본문 첫 등장 «l'abattage (showdown)» — 이후 본문은 abattage/showdown 혼용 허용(H2가 showdown 검색형).

### 6′-7. 글자 수 (Opus 재측정)
| slug | title | seoTitle | desc | tldr |
|---|---:|---:|---:|---:|
| rules-for-beginners | 70 | 59 | 150 | 260 |
| game-order | 69 | 58 | 146 | 362 |
| betting-actions | 65 | 57 | 144 | 409 |
| blind-meaning | 71 | 60 | 147 | 319 |
| all-in-rules | 74 | 57 | 146 | 582 |
| showdown-rules | 70 | 59 | 150 | 493 |
- 전부 seoTitle ≤ 60 · desc ≤ 150(한도 160) · tldr 마크다운 0 · seoTitle·title·tags 금지 헤드 0(스크립트 대조). tldr 길이는 EN과 같은 비율(EN all-in tldr 자체가 길다) — 조정하지 않음.
