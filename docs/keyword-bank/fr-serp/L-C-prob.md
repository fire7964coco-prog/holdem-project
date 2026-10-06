# L-C 확률 — fr SERP 조사 (fr 클러스터 0-2 · 2026-10-07)

> 브리프 = `00-brief.md` · 대상 7편(fr 신규 · EN 마스터 기준 해시 `a54b5f3d`): probability · pot-odds · outs · drawing-odds · implied-odds · equity · card-counting.
> 볼륨 정본 = `fr-core-volumes.md`(재측정 안 함) · 계산 의도 정본 = `fr-calculator.md`(§0-A «fr 블로그가 생기면 재판정» 조항이 이 레인에서 발동 → §8).
> 도구: DFS 자동완성(2250 · fr · 44시드) · 볼륨(2250 · 신규 71) · organic SERP(2250 · fr · desktop · depth 10 · 18쿼리) · 원문 = node fetch로 H1~H4 **프로그램 추출**(축어) + PokerStars.fr 3편은 지역 리다이렉트 때문에 exa 전문.
> 경쟁 글 수치는 **전부 다시 계산** — 매치업은 보드 1,712,304개 전수 열거, 아웃츠·플롭은 조합식(§4-C). 원자료 = `tmp/fr-serp-C-*.json`(22개).

---

## 0. 한 줄 결론 (레인 A가 먼저 읽을 것)

1. **18쿼리 어디에도 AI overview·featured snippet이 없다.** knowledge_graph는 «probabilité poker» 1건뿐. → 정답형 직답 블록(`> **바로 답**`)이 들어갈 자리가 비어 있다.
2. **«probabilité poker»(880) SERP = 도구 2(#1 pokernews · #3 pokerlistings 계산기) + 글 7** → 경계: **«probabilité / tableau / qu'est-ce que»는 글, «calcul / calculateur / simulateur»는 `/fr/calculator`**(§8).
3. **영문 헤드 4개는 FR SERP에서 죽어 있다**: «implied odds poker»·«pot odds poker»(영어 10/10) · «gutshot poker»(FR 글 0) · «outs poker»(«cash out» 잡음). 프랑스어 형태로 치면 FR 글이 나온다 → **«cotes implicites»** · **«calcul outs / calculer ses outs»** · **«cote (du pot)»**. 단 «gutshot poker» 170 ≫ «tirage ventral» 20 → gutshot은 영어 머리어 + «tirage ventral» 병기.
4. **1위권 경쟁 글에 §13 오류가 흔하다**(§4-C 표 · 15건): cours-et-fiches(«probabilité poker» #6 · «cote poker» #3 · «cotes implicites» #8 — 이 레인 최강 경쟁자) 5건 · pokersciences 4건 · grindlab(«calcul outs» #1 · «règle du 2 et du 4» #1) 2건 · PokerStars.fr 2건 · combinaison-poker 2건. **TT vs AJ 71 %(실제 57 %)** 같은 큰 오류도 있다 → «전수 계산한 표»가 차별점이 된다.
5. **«compter les cartes au poker»(90)는 SERP가 비었다** — reddit 2 · quora · 자동번역 블로그(jeretiens) · 스핀 글(laneuvelotte) · 영상. PAA 4문항이 EN FAQ와 1:1로 맞는다 → 7편 중 **이기기 가장 쉬운 글**이다.

---

## 1. 자동완성 (DFS · 2250 · fr · 44시드 · 전체 목록 = `tmp/fr-serp-C-autocomplete.json` · 잡음 항목은 생략 표시)

### 1-A. 확률 축
- **probabilité poker**(= probabilite · proba 같은 15개): main départ · preflop · quinte flush royale · simulateur · texas hold em · pdf · calcul · winamax · omaha · main · **3 joueurs** · holdem · **paire servie** · betclic · tableau
- **tableau probabilité poker**: tableau probabilité poker preflop · **calculateur probabilité poker** · tableau statistique poker · tableau pourcentage poker · tableau statistique poker holdem · table probabilité poker · **calculateur pourcentage poker** · **calculateur chance poker** · **calculateur stat poker** · tableau pourcentage main poker
- **probabilité d'avoir * au poker**: un carré · une paire · une couleur · un full · une suite · 2 as · un brelan · une paire servie · (probabilités d avoir) une quinte flush · une quinte flush royale
- **probabilité de * au poker**: **probabilité de gagner au poker** · probabilité au poker (texas hold em) · calcul de probabilité au poker · probabilité de chaque main au poker · probabilité carré au poker · probabilité main au poker
- **quelle est la probabilité d'avoir**: 포커는 1/15뿐 — «… une quinte flush royale»(나머지 = 쌍둥이·암·사고)
- **quinte flush royale probabilité**: poker … probabilité · ultimate · **au flop** · texas hold em · probabilite · proba
- **probabilité brelan poker**: proba brelan poker · probabilité full poker · probabilité brelan · **probabilité brelan flop** / **set poker probabilité**: set probability poker · poker probabilité paire · paire servie · 3 joueurs
- **pourcentage poker**: texas hold em · winamax · statistique pokerstars · statistique poker flop · pourcentage poker calcul · pourcentage poker main / **chance poker**: pokerogue·pokerus 잡음 + probabilité poker 반복

### 1-B. 팟오즈·아웃츠·드로
- **cote poker**: cote poker calcul · **cote poker tableau** · cote pokerstars · poker cote du pot · **poker cote implicite** · **calcul cote poker rapide** · simulateur cote poker · cote main poker · calculateur de cote poker gratuit · **cote et outs poker** (+ «cote d'azur / d'ivoire» 지역 잡음 4)
- **cote au poker**: calcul cote au poker · cote poker tableau · cote du pot au poker · côte poker / **cote du pot**: cote du pot poker · calcul cote du pot (poker) — 나머지는 potassium·potager 🔴 «poker» 없으면 샌다
- **pot odds poker** · **outs poker**: 영어·독어 확장만(definition · formula · calculator · chart · clean outs · trainer · berechnen …)
- **outs au poker**: probabilités au poker · outs poker definition · **calculer ses outs au poker** · outs poker calculator/meaning/chart · **out poker signification** / **combien d'outs**: 전부 «ours»(곰) — 포커 0
- **gutshot poker**: **gutshot poker def** · poker gutshot odds · **double gutshot poker** · poker gutshot draw · poker term gutshot (+ table·chips·mat·방콕 클럽·바 등 상품 잡음 9)
- **tirage ventral poker**: tirage couleur poker · **tirage ventral** · **tirage quinte ventrale** · tirage poker / **tirage poker**: 🔴 «loto poker» 복권 10개 + tirage couleur poker · tirage carte poker · tirage ventral poker / tirage couleur·tirage quinte = 사진 인화·경마 오염 · **tirage suite poker 0건**
- **règle du 2 et du 4** / **regle du 2 et 4 poker**: 포커 0(PMU «2 sur 4» · uno · 4-2-1) → `fr-calculator.md` §2-B 재확인

### 1-C. 에퀴티·임플라이드·카드 카운팅
- **équité poker**: équité poker calcul · **équité poker définition** · **egalite poker** · egalite poker texas hold em · probabilité poker … — 🔴 구글이 «équité»를 «égalité»(동점)와 섞는다 / **équité au poker**: egalite au poker · égalité au poker qui gagne · équité poker calcul · équité poker définition
- **equity poker**: calculator · definition · preflop · formula · chart · table · … · équité poker · équité poker calcul
- **implied odds**: 포커 4 + **스포츠 베팅 7** 🔴 / **implied odds poker**: explained · meaning · calculator · formula · reverse implied odds · **implied odds vs pot odds poker** … (영어권만)
- **cotes implicites**: cotes implicites poker · **cotes implicites inversées**
- **compter les cartes au poker**(= … poker): **… interdit** · **peut on compter les cartes au poker** · **que signifie compter les cartes au poker** · **apprendre a compter les cartes au poker**
- **compter les cartes**: au black jack · au poker · au casino · blackjack · au tarot · **au blackjack est-il illégal** · au black jack interdit · belote · au casino interdit

### 1-D. 와일드카드 (브리프 §1)
- **comment calculer * poker** (🟢 최고 수확): icm · son cev · **les probabilités** · **l équité** · **les outs** · les blinds · **les cotes** · un ko · son roi · **les pourcentage** · **l ev**
- «poker * c'est quoi» · «qu'est-ce que * poker» · «c'est quoi * poker» · «comment * poker»: **확률 축 0**(limper · ante · utg · itm · bounty · flush · gto · mtt …)

**읽는 법**: 프랑스 검색자는 확률을 **«comment calculer les … au poker»**와 **«probabilité d'avoir un/une … au poker»**로 묻는다. 정의형은 «c'est quoi»가 아니라 «… définition / def / signification». 영어 용어(pot odds·outs·implied odds·equity)는 FR 자동완성에서 영어권 확장만 돌아온다.

---

## 2. 신규 후보 볼륨 (0-1에 없던 것만 · DFS 2250 · `tmp/fr-serp-C-vol.json`)

🔴 «probabilités au poker» 880은 0-1 «probabilité poker» 880과 **월별 시계열 12개가 완전히 같다** → 한 수요(더하지 마라). 0-1과 겹친 4개(tirage couleur poker 10 · probabilité full poker null · tirage ventral poker null · cote poker calcul null)는 같은 값이 다시 나왔다 — 0-1 값이 정본.

| 검색어 | 볼륨 | 메모 |
|---|--:|---|
| probabilités au poker | 880 | ≡ probabilité poker(같은 군) |
| compter les cartes blackjack | 170 | 🔴 블랙잭 의도 — card-counting은 **비교 H2로만** 받는다(제목 금지) |
| **ev poker** | **110** | 🟢 EN equity FAQ «What is EV» 자리 · «comment calculer l ev au poker» 자동완성 생존 → equity 글 H2/FAQ |
| tableau probabilité poker preflop | 30 | probability 글 «mains de départ» 표 H2 |
| probabilité poker pdf · probabilité poker texas hold em · tableau statistique poker · calcul cote poker rapide · **gutshot poker def** · **tirage ventral** · **peut on compter les cartes au poker** | 20 | |
| 23개(전체 = JSON): probabilité de gagner au poker · probabilité d avoir un carré/une paire au poker · QFR au flop · cote poker tableau · poker cote implicite · double gutshot poker · tirage quinte ventrale · calculer ses outs au poker · équité poker définition/calcul · compter les cartes au poker interdit · apprendre a compter les cartes au poker · comment calculer les probabilités au poker · paire servie poker · set mining poker · reverse implied odds … | 10 | 바닥값 — H2·FAQ 문구 근거 |
| null 35개(자동완성엔 생존 · 전체 = JSON): probabilité d avoir une couleur/un full/une suite/2 as/un brelan/une QFR au poker · probabilité poker 3 joueurs · probabilité brelan flop · cotes implicites inversées · out poker signification · tableau équité poker · que signifie compter les cartes au poker · comment calculer l équité/les outs/les cotes/l ev au poker · espérance de gain poker … | — | null ≠ 수요 0 |

---

## 3. SERP 상위 10 + PAA (DFS · 2250 · fr · desktop · 18쿼리 · 원본 `tmp/fr-serp-C-serp-*.json`)

공통: **AI overview 0/18 · featured snippet 0/18** · knowledge_graph 1(«probabilité poker»). PAA는 축어.

### 3-1. «probabilité poker» (880 · 헤드)
1 fr.pokernews 🔧«Calculatrice de cotes de poker Texas Holdem en ligne» · 2 fr.wikipedia «Probabilité au poker» · 3 fr.pokerlistings 🔧«Calculatrice poker et probabilité des mains de dépar[t]» · 4 jeu-legal-france «Probabilité au Poker Texas Holdem»(제휴) · 5 YouTube «Poker et Probabilités» · 6 cours-et-fiches «Cotes au Poker : Pot Odds, Outs et Probabilités (Tableaux …» · 7 partypoker.fr «Probabilités Poker \| Les Statistiques au Poker» · 8 winamax «Texas Holdem : LES PROBABILITÉS au Flop - tirages» · 9 clubpoker «LEÇON N°4 : LES PROBABILITÉS AU POKER» · 10 pokerpro «Probabilités au poker : bases, cotes et pourcentages»
- **PAA**: Comment calculer les probabilités au poker ? · Quelles sont les statistiques de probabilité au poker ? · Comment gagner souvent au poker ? · Quel est le meilleur logiciel statistique pour le poker ?
- 관련검색: Probabilité poker simulateur · Tableau probabilité poker · Probabilité poker main départ · Tableau probabilité poker preflop · Calcul probabilité poker preflop · Probabilité poker quinte flush royale · Probabilité poker PDF · Calculatrice probabilité poker Omaha

### 3-2. «tableau probabilité poker» (390 · 헤드)
1 kill-tilt **포럼** «tableau de probabilité» · 2 dil.univ-mrs.fr **대학 과제 PDF** · 3 poker-academie «Poker fermé limite - Article 2»(다른 게임) · 4 reddit(자동번역) · 5 calcbe 🔧«Probabilités au poker (mains, outs, équité)» · 6 combinaison-poker «Comment calculer la probabilité de remporter un coup au …» · 7 poker-academie 포럼 · 8 secretsdujeu 🔧
- **PAA**: Quel est le meilleur logiciel statistique pour le poker ? · Comment calculer la probabilité d'un tirage ? · Comment calculer les probabilités ? · Comment calculer les outs au poker ?
- 🟢 «표» 헤드인데 1·2위가 포럼·과제 PDF — **이 레인에서 가장 약한 헤드 SERP**.

### 3-3. 경량·보조 쿼리 (상위 요지 + PAA 축어)
| 쿼리(볼륨) | 상위(유형) | PAA 축어 / 메모 |
|---|---|---|
| tableau probabilité poker preflop (30) | cours-de-poker · calculatrice.now🔧 · poker-builder🔧 · pokerstrategy · 앱 · 포럼 · reddit · 스팸 · studyraid · clubpoker 포럼 | Quelle est la probabilité de recevoir les As préflop au poker ? · Quel est le pourcentage de chances de réussir un quinte flush ? · Comment calculer les outs au poker ? |
| probabilité quinte flush royale (170) | 1 statisticseasily «Quinte Flush Royale : la main de poker ultime expliquée» · quizlet · reddit ×5 · pokerstars.com/fr · clubpoker 포럼 · gaming.net | Quelle est la probabilité d'une quinte flush royale ? · Quel est le plus gros coup au poker ? · Quelle est la différence entre un quinte flush et un quinte flush royale ? — 🔴 1위는 «1 sur 649 740»(**5장**)만, 7장(1/30 940) 미표기 |
| cote poker (70) | 1 **pokerstars.fr «Cote du pot au poker : le calcul qui guide vos décisions»** · 2 pokerlistings🔧 · 3 cours-et-fiches · 4 kill-tilt 포럼 «La cote du pot (calcul)» · 5 jeu-legal-france · 6 위키 · 7 pokersciences «Probabilité au poker - Tableaux aide-mémoire» · 8 poktools🔧 · 9 ggpoker «Tableau des probabilités et des cotes…» | PAA 없음 · 영상: Kill Tilt «Calculer les cotes au Poker en 1min» · 관련: Calcul cote poker rapide · Calculateur de cote poker gratuit → 의도 = **팟오즈** |
| cote du pot poker (20) | 무관 강좌·reddit·포럼 4 | 글 0 · PAA 없음 → **빈 SERP** |
| pot odds poker (20) | reddit · pokerbankrollapp · espn · bovada · stackexchange · pinterest · 2+2 · books · pokercode | 프랑스어 0 · PAA(영어): What are pot odds in poker? · What is the 4-2 rule in poker? |
| outs poker (30) / outs au poker | 포커 확률 글 0(«cash out»·«poker face»·Temu·Etsy) | Comment calculer les outs au poker ? · Comment calculer les probabilités de gagner au poker ? · Quel est le pourcentage de joueurs gagnants au poker ? / 영상: «Le Poker pour les Nuls #04 : Les Côtes et les Outs» |
| **calcul outs poker** (20) | 1 **grindlab «L'Equity au Poker : Comment la Calculer»** · 2 livepoker «Comment calculer rapidement ses outs selon la méthode …» · 3 kill-tilt 포럼 · 4 pokernews «« Pot Odds » - Avez-vous une bonne …» · 5 포럼 · 6 pccity · 7 combinaison-poker · 8 reddit · 9 tests-et-bons-plans «Comment calculer la côte du pot» · 10 reddit | Comment calculer les outs au poker ? · comment calculer les sorties ? · (ranges · blinds) — 🪶 «côte» 오기 2건 |
| gutshot poker (170) | reddit · YouTube · picharapoker(서) · wizardslots · 888poker.de · pokerzone · reddit(자동번역) · pokernews · pokervip | PAA 없음 · 🟢 **FR gutshot 글 0** |
| tirage ventral poker (null) / tirage poker (20) | ventral: 영상·인덱스·PDF / tirage: 1 reddit «…tirage quinte ventrale» · 2 **pokerpro «Gut Shot — Définition Poker»** · 3 포럼 · 7 **poker.md «Pourcentage de chance de flopper un tirage quinte ou …»** · 영상 다수 | ventral: **Quelle est la probabilité d'obtenir une quinte flush ?** · C'est quoi la range au poker ? / tirage: Quelle est la probabilité de gagner au poker ? · 영상팩: PMU Poker «Comment jouer un tirage couleur au Turn ?» |
| **équité poker** (110) | 1 **pokerstars.fr «L'équité : de quoi s'agit-il…»** · 2 poktools🔧 · 3 tuto-poker «Équité d'une main contre une main» · 4 poker-academie «Comment calculer l'équité postflop d'un tirage au poker ?» · 5 pokersciences «Comment calculer l'équité au poker - Guide pratique» · 6 clubpoker 용어집 · 7 poker-toolkit · 8 kill-tilt 포럼 | **Qu'est-ce que l'équité au poker ?** · Que se passe-t-il en cas d'égalité au poker ? · Est-il possible de gagner sa vie au poker ? / 관련: Équité poker calcul · Calcul équité poker préflop · **Tableau équité poker** |
| **cotes implicites poker** (10) | 1 **pokerstars.fr «Comment Calculer les Cotes Implicites et À Quel Moment …»** · 2 kill-tilt 포럼 «Explications cote implicite» · 3 **fr.pokernews «Cotes Implicites : Qu'est-ce Que C'est…»** · 4 clubpoker 용어집 «COTE IMPLICITE» · 5 pokerlistings «Jouer pour les cotes implicites (et inversées)» · 6 포럼 · 7 YouTube «La cote implicite» · 8 cours-et-fiches · 9 tests-et-bons-plans · 10 partypoker | Comment calculer l'équité au poker ? · Comment calculer les outs au poker ? · Qu'est-ce que l'équité au poker ? · Comment calculer les probabilités de gagner au poker ? — 🔴 제목 단수 «cote implicite» 5 : 복수 4 |
| implied odds poker (10) | 영어 10/10(pokerstars.com · pokernews · pokerstrategy · Upswing …) | PAA(영어) — fr 머리어로 쓰면 영어 SERP와 싸운다 |
| **compter les cartes au poker** (90) | 1 reddit(자동번역) · 2 fr.quora · 3 **jeretiens(기계번역)** · 4 YouTube · 5 **laneuvelotte(스핀)** · 6 pokerlistings «Calcul out poker – Comment compter les cartes au poker» · 7 reddit · 8 pokerstars(딜링 · 무관) · 9 YouTube · 10 위키 «Cartes du poker» | **Est-il possible de compter les cartes au poker ? · Est-il légal de compter les cartes ? · Le comptage des cartes au poker est-il efficace ? · C'est quoi compter les cartes au casino ?** / 관련: Compter les cartes au poker interdit · Exercice calcul out poker — 🟢 진짜 글 1편 |
| règle du 2 et du 4 poker (null) | 1 grindlab · 2 mypokermind · 3 reddit · 4~8 PMU·Etsy·스팸 | PAA 무관 |

---

## 4. 상위 글 원문 정독

### 4-A. 헤딩 축어 (H1~H3 · 프로그램 추출 · 「단어」= 본문 대략치 · 원본 `tmp/fr-serp-C-pages-*.json`)

**① cours-et-fiches.com/poker-cotes-pot/** — «probabilité» #6 · «cote» #3 · «cotes implicites» #8 · 3,738단어 · 표 6 · FAQ · 2026-02 갱신 · 경험담 0 · 이모지 H2 · **이 레인 최강 경쟁자**
H1 Mathématiques du poker : outs, pot odds et probabilités / H2 1. Comprendre les outs (H3 Comment compter ses outs) · 2. Tableau des outs et probabilités · 3. La règle du 2 et du 4 · 4. Les pot odds (H3 Formule · Exemple détaillé) · 5. Tableau des pot odds selon le sizing · 6. Prendre la bonne décision : le processus complet · 7. Les cotes implicites (implied odds) (H3 Quand les cotes implicites sont bonnes · … mauvaises · Exemple) · 8. Les cotes implicites inversées (reverse implied odds) · 9. Probabilités préflop (H3 Probabilités de toucher au flop) · 10. Confrontations classiques préflop · 11. Les erreurs fréquentes · Questions fréquentes
- 표 헤더 = `fr-calculator.md` §4-A 축어와 동일 + 규칙 검산표 `Situation | Outs | Calcul rapide | % estimé | % réel | Écart` · 매치업 `Scénario | Exemple | Favori | % favori | % outsider` · 보정식 «outs × 4 − (outs − 8)».

**② fr.wikipedia «Probabilité au poker»** — #2 · ~7,150단어 · 표 6: H2 Bases de calcul et notations · Poker ouvert : meilleure main sur 7 cartes (H3 족보 10종) · Poker fermé : mains de base · Poker fermé : amélioration d'une main (H3 tirage couleur · tirage quinte / H4 Tirage Quinte Bilatéral ("Open-Ended") · Tirage quinte ventral ou monolatéral («Gutshot»)) — 🔴 «quinte»·«bilatéral»·«ventral» 표기.

**③ jeu-legal-france** — #4 · 1,423단어 · 표 5 · 제휴: H1 Probabilité au poker Texas Holdem / H2 Probabilités des 2 cartes en main distribuées (« Pocket Cards ») · Probabilités de victoire en fonction de vos 2 cartes en main · Probabilités de mains après le Flop · Probabilités d'amélioration de votre main après le Flop · Probabilités de victoire entre 2 joueurs à tapis · Comment calculer la probabilité de tirage au poker · Meilleures salles de poker en ligne en France — 승률×인원 표(AA 85 %→32 %)가 combinaison-poker·pokersciences와 **숫자 동일**(출처 없는 복사 · 시뮬레이션이라 검산 불가).

**④ pokersciences 2편** — «Probabilité au poker - Tableaux aide-mémoire»(«cote» #7 · 표 4): H3 Quelle est la différence entre probabilité et cote ? / H2 Probabilité préflop des mains de départ · Probabilité des différentes combinaisons · Probabilité de compléter un tirage (astuce) · Probabilités de victoire en fonction de vos 2 cartes en main et du nombre de joueurs · Probabilité de victoire entre 2 joueurs à tapis — 7장 족보표는 정확. / «Comment calculer l'équité au poker - Guide pratique»(«équité» #5 · 1,697단어): H2 Qu'est-ce que l'équité au poker ? · Pourquoi l'équité est-elle si importante au poker ? · Comment calculer l'équité d'une main au poker ? · Comment calculer rapidement son équité ? · Quel est le meilleur calculateur d'équité de poker en ligne ? · Quelle est la différence entre l'équité et les probabilités au poker ? · Exemples d'équité entre 2 joueurs à tapis

**⑤ combinaison-poker** — «tableau» #6 · 1,787단어: H1 Comment calculer la probabilité de remporter un coup au poker ? / H2 Probabilité des mains de départ · Probabilité de victoire au poker en fonction de votre main de départ · Probabilité d'obtenir une combinaison au flop · Comment calculer la probabilité de tirage au poker ? · Le mot du Matheux

**⑥ pokerpro.fr** — #10 · 816단어: H1 Les probabilités de base au poker / H2 Les probabilités préflop · Les probabilités après le flop · Conclusion · Continuer sur GTO et solvers — 🪶 프로 실명(YoH ViraL)을 건 유일한 글(E-E-A-T 신호). **⑦ winamax** — #8 · 951단어: H1 Texas Holdem : LES PROBABILITÉS au Flop - tirages / H3 Tirage Couleur · Tirage Quinte. **⑧ calcbe**(도구+904단어): H2 Aperçu · Exemples · FAQ · Comment c'est calculé.

**⑨ grindlab.gg/fr** — «calcul outs» #1 · «règle du 2 et du 4» #1 · 3,570단어 · 표 4 · FAQ 7 · **EN equity 글과 구조가 거의 같다**
H1 L'Equity au Poker Expliquée : Comment la Calculer et l'Utiliser / H2 Qu'est-ce que l'Equity au Poker ? · Types d'Equity : Main vs Main, Main vs Range, Range vs Range · Comment Calculer l'Equity : Compter les Outs et la Règle du 2 et du 4 · Equity vs Pot Odds : Prendre des Décisions Profitables · Au-delà de l'Equity Brute : l'Equity Realization (EQR) · Fold Equity : Quand Votre Adversaire Fold · Scénarios d'Equity Courants que Tout Joueur Devrait Connaître · Comment Pratiquer les Calculs d'Equity · Points Clés à Retenir · Questions Fréquentes
FAQ 축어: Quelle est la différence entre l'equity et l'EV (expected value) ? · Comment calculer l'equity rapidement à la table ? · Quelle est une bonne equity pour call un bet ? · Quelle est la différence entre l'equity et les pot odds ? · Qu'est-ce que l'equity realization ? · Peut-on utiliser un calculateur d'equity pendant une partie ? · Qu'est-ce que la fold equity ?

**⑩ PokerStars.fr 3편**(지역 리다이렉트로 exa 전문)
- «L'équité : de quoi s'agit-il…»(«équité» #1 · 2024-08 · ~600단어 · 표·FAQ 0): H3 Qu'est-ce que l'équité ? · Comment calculer l'équité du pot ? · Utiliser l'équité pour prendre des décisions plus éclairées
- «Cote du pot au poker : le calcul qui guide vos décisions»(«cote» #1 · 2025-06): 리드 «En bref : c'est quoi la cote du pot ?» / H2 Comprendre la cote du pot (H3 Qu'est-ce que la cote du pot ? · Pourquoi la cote du pot change tout à la table · Cote du pot ou cote implicite ?) · Calculer la cote du pot (H3 La formule · Exemple étape par étape) · Appliquer la cote du pot du flop à la rivière (H3 Au flop · À la turn · À la rivière) · Des outs à l'équité : compter vos chances — 🟢 «règle de 4 réservée aux all-in au flop»(우리 EN과 같은 입장)
- «Comment calculer les cotes implicites et à quel moment le faire»(«cotes implicites» #1 · 2025-05): H2 Les cotes implicites, c'est quoi ? · À quels moments la cote implicite est-elle importante ? · Calcul des cotes implicites · Déterminer le gain attendu pour les cotes implicites
- 🪶 tu(리드 박스)/vous(본문) 혼용.

**⑪ fr.pokernews «Cotes Implicites…»**(#3 · 761단어 · WPT Global 기사): H2 Que sont les cotes implicites ? · Quelle est la différence entre les cotes implicites et les cotes du pot ? · Pourquoi les cotes implicites sont-elles importantes ?
**⑫ fr.pokerlistings 2편** — «Jouer pour les cotes implicites (et inversées)»(#5 · 2,331단어): H2 Cerner son adversaire pour bien utiliser les cotes implicites · De l'importance de la réflexion en amont · Les Cotes implicites inversées expliquées / «Comment compter les Outs au poker ?»(«compter les cartes» #6 · 1,838단어 · 보너스 박스 다수): H1 Calcul out poker – Comment compter les cartes au poker / H2 Qu'est-ce qu'un out au poker ? · Pourquoi est-il important de compter les outs ? · Comment compter les outs étape par étape · Erreurs courantes lors du décompte des outs · Calculer les cotes au poker après avoir compté les outs · Transformer les outs en probabilités · Exercice pratique : calcul des outs au poker
**⑬ poker-academie «Comment calculer l'équité postflop d'un tirage au poker ?»**(«équité» #4): H2 Calcul d'équité au poker : Introduction · Astuce de calcul d'équité n°1 : la règle de 2 · … n°2 : la règle de 4 · … n°3 : la règle 3n + 9 · Tableau avec probabilités exactes et cas de figure
**⑭ tuto-poker «main contre main»**(«équité» #3 · 628단어 · tu): H1 Comment estimer son équité au poker quand on connaît la main adverse ? / H2 Qu'est-ce que l'équité quand on connaît la main adverse ? · Méthode pour estimer son équité face à une main connue · L'estimation · Les erreurs courantes à éviter
**⑮ 경량·보조**: livepoker «STRATEGIE 1/2 : Comment calculer rapidement ses outs selon la méthode du 4 – 2 ?»(H2 없음 · **2019년**) · pokerpro 용어 «Gut Shot»(H2 Définition · Explication détaillée · Termes liés: Belly Buster · Quinte Ventrale · Inside Straight) · poker.md(H2 Connecteurs adaptés : chances de flopper des tirages quinte ou flush) · jeretiens(H2 Comment calculer les cotes au poker ? · Comment calculer l'équité au poker · Comparaison des cotes du pot à l'équité — 🔴 **기계번역**: «tirage au sort»=flush draw · «9 retraits»=9 outs) · laneuvelotte(H2 Compter les cartes au poker / au casino / au blackjack — 🔴 **스핀 텍스트**) · statisticseasily(광고 자리 H2 «Titre de l'annonce» ×3 — 자동생성)
- 접근 실패(기록만): clubpoker(Cloudflare 403) · ggpoker/fr(403) · partypoker.fr(JS 셸).

### 4-B. 공통 구조 관찰
- 질문형 H2 = **«Comment calculer …»**와 **«Qu'est-ce que … ?»** 두 틀(자동완성 §1-D와 같다) · **경험담 0/15**(교과서형 예시뿐) · 통화 €/$ 혼재 → 코퍼스 관습 $ 유지 가능 · 표 헤더 «Equity» + 본문 «équité» 공존 → 정본은 `fr-calculator.md` §3-B(«équité» + 첫 등장 병기).

### 4-C. 🔴 §13 검산 — 경쟁 글의 확률·에퀴티 (직접 계산)

매치업은 지정 수트 1조합 기준 전수 열거(보드 1,712,304개 · 에퀴티 = 승 + 무/2). 수트에 따라 ±1 %p 안쪽으로 움직인다(무늬 가중 평균은 집필 회차에서 `lib/poker-eval.ts`로 재확인).

| # | 글(순위) | 원문 축어 | 실제 | 판정 |
|---|---|---|---|---|
| 1 | cours-et-fiches(#6) | «Premium (QQ+, AKs) \| 1,5% \| 1 fois sur 66» | 22조합/1,326 = **1,66 % · 1/60** | ✗ |
| 2 | cours-et-fiches | «Paire vs 2 overcards \| JJ vs AKo \| JJ \| ~54%» (AKs 행도 54 %) | JJ vs AKo **57,3 %** · JJ vs AKs 53,9 % | ✗ (o/s를 같은 값으로) |
| 3 | cours-et-fiches | «Coin flip … \| 99 vs T♠J♠ \| 99 \| ~53%» | 99 vs JTs **51,1 %** | ✗(경미) |
| 4 | cours-et-fiches | 아웃츠 표 10행 «Gutshot + flush draw» = **10 outs**, 12행 «Flush draw + gutshot» = 12 outs | 같은 드로 = 9 + 4 − 1 = **12 outs** | ✗ 라벨 모순 |
| 5 | cours-et-fiches | «Paire en main \| Full ou mieux \| 1,0%» | 풀하우스 0,98 % · **풀 이상(쿼즈 포함) 1,22 %** | ✗(경미 · «ou mieux») |
| 6 | pokersciences(«cote» #7) | «Paire (ex : KK) 85% … 2 cartes inférieures (ex : 79)» | KK vs 97o **82,3 %** | ✗ |
| 7 | pokersciences | «KK 80% … Connecteurs assortis inférieurs (ex : 89s)» | KK vs 98s **77,7 %** | ✗ |
| 8 | pokersciences | «2 cartes (ex : A9) 66% … (ex : 86)» | A9 vs 86 **63,0 %** | ✗ |
| 9 | pokersciences | «A♠K♥ … 8♦8♠ … environ 46%» | **44,8 %** | ✗(경미) |
| 10 | grindlab(«calcul outs» #1) | «Paire vs un overcard (TT vs AJ) \| 71% vs 29%» | AJ는 **오버카드 2장** → TT vs AJo **57,4 %** | ✗ 큰 오류(라벨·수치) |
| 11 | grindlab | «Deux overcards vs undercards (AK vs 72) \| 65% vs 35%» | AKo vs 72o **67,6 %** | ✗(경미) |
| 12 | PokerStars.fr 임플라이드(#1) | «(taille du pot : 100 $ + gain attendu : 300 $) = 400 $/mise actuelle : 100 $ = cote implicite de 4:1» — 같은 글이 팟오즈는 «2:1»(상대 베팅 포함)로 계산 | 같은 기준이면 (100 + 100 + 300)/100 = **5:1** | ✗ 기준 불일치 |
| 13 | PokerStars.fr 에퀴티(#1) | «couleur au flop … équité d'environ 35 % … Si vous manquez la couleur au tournant, votre équité tombe à 17 %» | 9 outs / 46 = **19,6 %**(상대 핸드를 알면 9/44 = 20,5 %) | ✗ |
| 14 | combinaison-poker(«tableau» #6) | «25.3% pour deux cartes de même couleur» | 312/1,326 = **23,5 %** | ✗ 전치 |
| 15 | combinaison-poker | 플롭 표에 «Toucher un brelan» 2행(11,51 % / 1,5 %) · «tirage couleur» 3행(1 % / 11 % / 16 %) | 행 라벨이 자기모순(같은 이름에 다른 값) | ✗ 표 붕괴 |
| — | statisticseasily | «1 sur 649 740» | 5장 기준으로는 맞음 · 🔴 **홀덤 7장 = 1/30 940**을 안 밝힘 | 🟠 기준 미표기 |
| — | poker.md · cours-et-fiches | 연결 카드 OESD 플롭 «10.45%» vs «9,6%» | 정의(더블 거트샷·원엔드 포함 여부)에 따라 갈린다 — 순수 양쪽 열린 4연속만 세면 89 기준 **9,06 %** · 스트레이트 메이드 1,31 % ✅ | 🟠 정의 미표기 |

✅ 맞게 확인한 것(같은 방식 검산): cours-et-fiches 아웃츠 % 15행 · 사이징 표 8행 · AA vs KK ~81 % · 예시(7♥8♥ / 5♥6♠K♥ = 15 outs · 45/150 = 30 %) / pokersciences 7장 족보표 10행 · AA vs 44 81 % / grindlab AA vs KK 82 · AA vs AKs 87 · QQ vs AKo 57 · AKs vs JTs 60(61,3) · 88 vs AKo 55 · QQ vs 77 81(80,3) / PokerStars 팟오즈 40+10 → 5 contre 1 → 17 % · 10/70 = 14,3 % · 25/150 = 16,7 % / pokernews 임플라이드 4 contre 1 · ((1/20 %) × 30) − 60 = 90 $ / pokerlistings outs 예시 3개(8 · 15 · 2 outs) / pokerpro gutshot 4/47 = 8,5 %.

→ **레인 A 메모**: 우리 글은 표마다 **«기준(5장/7장 · 1장/2장 남음 · 오프/수티드)»을 표 머리에 명시**하고, 매치업은 o/s를 나눠 적는다. 위 ✗ 유형(o/s 혼동 · 오버카드 1장/2장 라벨 · 단위 혼동 · 임플라이드 분모)을 «흔한 오해» H2/FAQ 재료로 쓸 수 있다(경쟁사 실명 비판은 금지 — 오류 «유형»만).

---

## 5. 장단점 표

| 공통 강점(갖춰야 할 것) | 근거 |
|---|---|
| 아웃츠→% 변환표(«% au turn / % à la river / % flop → river») | cours-et-fiches · pokersciences · grindlab · 위키 |
| 베팅 사이즈별 필요 에퀴티 표(25/33/50/66/75/100/150/200 %) | cours-et-fiches · grindlab(같은 8행) |
| «règle du 2 et du 4» 검산(«% estimé vs % réel») + 큰 드로 보정식(«outs × 4 − (outs − 8)» · «3n + 9») | cours-et-fiches · poker-academie · grindlab |
| 프리플롭 받을 확률표(«1 fois sur 221» 형식 병기) | cours-et-fiches · jeretiens · pokersciences |
| 매치업 표(«% favori / % outsider») | cours-et-fiches · grindlab · pokersciences |
| 질문형 H2(«Comment calculer …» / «Qu'est-ce que … ?») | 15편 중 9편 |

| 공통 약점(차별화 지점) | 근거 |
|---|---|
| **수치 오류 15건**(§4-C) · 기준 미표기(5장/7장 · 정의) | 상위 5개 사이트 |
| **경험담 0** · 실전 핸드 0 | 15편 전부 |
| 정확형 SERP가 비었다: «tableau probabilité poker»(1위 포럼·2위 과제 PDF) · «cote du pot poker»(글 0) · «gutshot poker»(FR 글 0) · «compter les cartes au poker»(스핀·기계번역) | §3 |
| 승률×인원 표 출처 없는 복사(3사 동일) · 임플라이드 글에 역임플라이드·셋마이닝 수치 부재 · 낡음(livepoker 2019 · PokerStars 에퀴티 600단어) · 보너스 박스가 본문을 끊음 | §4-A |

---

## 6. 우리 글 대조 (EN 마스터 H2·FAQ ↔ FR 의도) + fr 도구 4종

| 글 | EN H2(축약) | FR에서 빠진 의도 / 이미 이기는 점 |
|---|---|---|
| probability | Hand Odds Chart · Dealt Each Starting Hand · Flopping Each Hand · Drawing Odds · How to Calculate (Outs + Rule of 2 and 4) · Pot Odds · Royal Flush · Long-Shot · FAQ 15 | 🟢 «probabilité d'avoir un carré/une paire/un full/une suite/une couleur/2 as au poker» 자동완성 7종 = EN FAQ 질문들과 1:1 · 빠진 것: **«probabilité de gagner au poker»**(승률×인원 표 의도 · EN에 없음) · «probabilité poker 3 joueurs»(상대 수) · «paire servie» 표기 · «quinte flush royale au flop» |
| pot-odds | What Are · How to Calculate · Ratio vs % · How Much Equity · Chart · vs Equity vs Implied · Rule of 4 and 2 · Mistakes · FAQ 11 | 🟢 «4 contre 1 / 1 fois sur 5» 이중 표기는 FR이 이미 쓰는 관습 · 빠진 것: **«cote» 단어**(EN은 pot odds만) · «calcul cote poker rapide»(=10-Second Method와 정확히 대응 🟢) |
| outs | What Are · How to Count · Chart · Outs to Odds · Rule of 4 and 2 · Combo Draws · Dirty Outs · FAQ 9 | 🟢 «Combo Draws: Why 9 + 8 Isn't 17» = cours-et-fiches 라벨 모순(§4-C #4)을 정면으로 다룸 · 빠진 것: **gutshot / double gutshot** 독립 H2(FR gutshot 170 · FR 글 0) · «out poker signification»(정의형) · «clean outs»(=propres) |
| drawing-odds | Flop Lifecycle · Set (Set-Mining) · Flush Made/Draw/Complete · Straight · Rare Flops · Dealt · FAQ 11 | 🟢 «probabilité brelan flop»·«paire servie» = set 섹션 · 빠진 것: **«tirage» 단어 전면화**(FR은 «drawing odds» 대신 «tirage couleur / tirage quinte (bilatéral · ventral)») · 연결 카드 OESD 정의(§4-C) |
| implied-odds | What Are · vs Pot Odds · How to Calculate · Worked Example · by Draw Type · Set Mining · Reverse · When NOT · FAQ 10 | 🟢 «Reverse» = FR «cotes implicites inversées»(자동완성 생존) · 🟢 공식+예시가 PokerStars FR(분모 불일치 ✗)보다 정확 · 빠진 것: 없음 — **표기만** «cotes implicites (implied odds)» |
| equity | What Is · Estimate Fast · vs Pot Odds · Fold Equity · Realization · All-In · Multiway · Putting It Together · FAQ 11 | 🟢 «ev poker» 110 = EN FAQ «What is EV» → **H2 승격 후보** · «Tableau équité poker»(관련검색) = 매치업 표 · 🔴 «équité»↔«égalité» 혼동(자동완성) → 첫 문단에서 «égalité(동점)과 다르다» 한 줄 + tiebreak 글 앵커 |
| card-counting | Can You · Why Blackjack Doesn't Work · Poker vs Blackjack · Real "Card Counting" (Outs · Blockers · Card Removal) · Is It Illegal · Stud · How to Start · FAQ 8 | 🟢 PAA 4문항 = EN H2/FAQ와 1:1(«Est-il possible» = Can You · «Est-il légal» = Illegal · «efficace» = Does it work · «au casino» = vs Blackjack) · 빠진 것: «que signifie compter les cartes au poker»(정의형) · «apprendre a compter les cartes au poker» |

**fr 도구 4종 점검**
- `/fr/calculator`(`app/fr/calculator/faq.ts`): FAQ 18문항 중 7문항이 이 레인 질문과 같은 뜻 — «Quelles sont les cotes de AA contre KK ?» · «AK contre une paire servie, est-ce vraiment un coin flip ?» · «Comment calculer les outs au poker avec la règle du 2 et du 4 ?» · «Un tirage couleur rentre à quelle fréquence ?» · «Comment calculer les cotes du pot ?» · «Quelles cotes du pot faut-il pour suivre avec un tirage couleur ?» · «Comment utiliser le calculateur de cotes implicites ?» → 글 FAQ에서 같은 문장 금지(§8).
- `/fr/glossary`: «Équité» · «Gutshot (tirage ventral)» · «Outs» · «Tirage (draw)» 항목 존재 → 용어집 → 글 링크 방향(0-3). 🪶 계산기 «Quinte ventrale (gutshot)» ↔ 용어집 «Gutshot (tirage ventral)» 표기 분열 — 볼륨상 «gutshot (tirage ventral)»(0-3 §3-A 재료).
- `/fr/hand-chart`·`/fr/solver`: 겹침 없음.

---

## 7. 처방 (레인 A 브리프 재료 · 🔴 최종 seoTitle·desc는 쓰지 않는다)

공통: 신설·개명 H2 직후 `> **바로 답**` 40~75단어 · 숫자 = 천 단위 공백·소수 쉼표·«%» 앞 공백 · 신규 수치는 §13 재계산 후 · 제목·H1에 «calcul/calculateur/simulateur» 금지(§8). 「←」 = 대응 EN H2(개명), 🆕 = 신설.

### 7-1. holdem-probability — 우선순위 **1**(880 + 390 · 갭 큼)
- **주력어**: «probabilité(s) au poker»(같은 군 880) + «tableau»(390). 훅: «1 fois sur 221» 빈도 표기 · «QFR 1 sur 30 940(7 cartes) vs 1 sur 649 740(5 cartes)» — 1위 글이 못 가른 지점.
- **H2**: «Tableau des probabilités au poker : chaque combinaison sur 7 cartes» ← Hand Odds Chart · «Quelle est la probabilité d'avoir une paire servie (ou deux as) ?» ← Dealt(PAA «…recevoir les As préflop…») · «Probabilité de toucher au flop : brelan, couleur, quinte» ← Flopping(«probabilité brelan flop») · «Probabilité de compléter un tirage au turn et à la river» ← Drawing Odds(→ drawing-odds 앵커) · «Comment calculer les probabilités au poker ? (outs et règle du 2 et du 4)» ← How to Calculate(PAA 축어 · 계산기 링크) · «Quelle est la probabilité d'une quinte flush royale ?» ← Royal Flush(PAA 축어) · 🆕 «Probabilité de gagner au poker selon le nombre de joueurs»(자동완성 «probabilité de gagner au poker»·«3 joueurs» · 상위 3편 공통) — 🔴 경쟁 표는 출처 없는 복사 → **집필 회차에 직접 시뮬레이션 못 하면 신설하지 않는다**
- **FAQ**: Comment calculer les probabilités au poker ? · Quelles sont les statistiques de probabilité au poker ? · Quelle est la probabilité d'une quinte flush royale ? · Quelle est la différence entre un quinte flush et un quinte flush royale ?(확률 차이만 · 족보는 hand-rankings 앵커) · probabilité d'avoir un carré / un full / une couleur / une suite au poker(EN FAQ 개명)
- **차별화**: 표 머리마다 기준(5장/7장) · «X % = 1 fois sur N» · 매치업 o/s 분리 · EN 경험담 승계. **받지 않음**: PAA «Quel est le meilleur logiciel statistique pour le poker ?»(트래커 의도 · 3회 반복).

### 7-2. holdem-pot-odds — 우선순위 **3**(cote 70 · 빈 SERP)
- **주력어**: «cote du pot» + «cotes du pot (pot odds)» 병기(계산기 정본) · 단수 «cote»가 검색형 · 훅 «calcul cote poker rapide» = EN «10-Second Method».
- **H2**: «Qu'est-ce que la cote du pot au poker ?» ← What Are · «Comment calculer la cote du pot (étape par étape)» ← How to Calculate(자동완성 «comment calculer les cotes au poker») · «Cote en ratio ou en pourcentage : 4 contre 1 = 20 %» ← Ratio vs % · «Quelle équité faut-il pour suivre ?» ← How Much Equity · «Tableau des cotes du pot selon la taille de la mise» ← Chart · «Cote du pot, équité et cotes implicites : la différence» ← vs · «La règle du 2 et du 4 : des outs à la cote» ← Rule of 4 and 2(🔴 이름 순서 «2 et 4») · «Les erreurs de débutant avec la cote du pot» ← Mistakes
- **FAQ**: Comment calculer les cotes au poker ? · Comment calculer les probabilités de gagner au poker ?(PAA) · EN 11문항 — 단 계산기 FAQ와 같은 문장 2개(«Comment calculer les cotes du pot ?» · «Quelles cotes du pot faut-il pour suivre avec un tirage couleur ?»)는 **문장을 바꾼다**(§8).
- **차별화**: «pot total»(상대 베팅 포함) 정의 명확화 · «règle de 4 = tapis au flop seulement»(PokerStars와 같은 입장) · 실전 핸드 유지.

### 7-3. holdem-outs — 우선순위 **2**(gutshot 170 + outs 30 + calcul outs 20 · FR gutshot 글 0)
- **주력어**: «outs au poker» + «calculer ses outs»(동사형) · H2에 «gutshot». 🔴 «outs poker» 단독 SERP는 잡음 → 동사형을 앞쪽에.
- **H2**: «Qu'est-ce qu'un out au poker ?» ← What Are(pokerlistings 축어 · «out poker signification») · «Comment calculer les outs au poker ? (étape par étape)» ← How to Count(PAA 축어 · 4개 SERP) · «Tableau des outs : chaque tirage» ← Chart · «Des outs aux pourcentages : le tableau de conversion» ← Outs to Odds(표 헤더 = 계산기 §4-A 축어) · «La règle du 2 et du 4» ← Rule of 4 and 2 · «Tirages combinés : pourquoi 9 + 8 ne font pas 17» ← Combo Draws · «Les outs « sales » : les cartes qui ne gagnent qu'en apparence» ← Dirty Outs · 🆕 **«Gutshot (tirage ventral) : combien d'outs ?»** — EN Chart의 gutshot 행 승격(4 outs · 8,5 %/8,7 % · 16,5 % · double gutshot 8 outs)
- **FAQ**: Comment calculer les outs au poker ? · Qu'est-ce qu'un gutshot au poker ?(«gutshot poker def») · Combien d'outs pour un tirage couleur ? · EN 9문항 유지
- **카니발**: outs = «세는 법·개수» / drawing-odds = «플롭에서 그 드로가 나올 확률·완성률». gutshot은 outs 소유, drawing-odds는 앵커.

### 7-4. holdem-drawing-odds — 우선순위 **5**(헤드 없음 · tirage poker 20)
- **주력어**: «tirage … au poker»(🔴 «au poker» 필수 — loto·사진 오염) · «tirage couleur» · «tirage quinte (bilatéral / ventral)»(위키 축어) · «flopper un brelan».
- **H2**: «Le cycle du flop : un seul tableau» ← Flop Lifecycle · «Probabilité de flopper un brelan (set) avec une paire servie» ← Set(«probabilité brelan flop» · «set mining poker» 10) · «Tirage couleur : flopper la couleur, le tirage, la compléter» ← Flush · «Tirage quinte : bilatéral ou ventral» ← Straight · «Flops rares : carré, full, quinte flush» ← Rare Flops · «Probabilité de recevoir sa main» ← Dealt(probability 앵커로 축소 가능)
- **FAQ**: Quelle est la probabilité d'obtenir une quinte flush ?(PAA) · Quelle est la probabilité de gagner au poker ?(PAA → 짧게 + equity 앵커) · EN «Why 7.5-to-1 but also 1 in 8?» → **«7,5 contre 1 ou 1 sur 8 : pourquoi deux chiffres ?»**(FR 경쟁 글 전부가 두 표기를 섞는다 🟢)
- **차별화**: 연결 카드 OESD 확률을 정의와 함께(§4-C) · set mining 손익분기 계산.

### 7-5. holdem-implied-odds — 우선순위 **6**(10 · FR 1위가 오류)
- **주력어**: «cotes implicites (implied odds)» — H1 복수 · 본문 «cote implicite» 혼용 OK · 영어는 괄호만(영어 SERP + 스포츠 베팅 오염).
- **H2**: «Qu'est-ce que les cotes implicites au poker ?» ← What Are · «Cotes implicites et cote du pot : la différence» ← vs(pokernews H2 축어) · «Comment calculer les cotes implicites» ← How to Calculate(PokerStars 축어 «Calcul des cotes implicites») · «Exemple : tirage couleur au turn» ← Worked Example · «Cotes implicites par type de tirage» ← by Draw Type · «Set mining : petites paires et cotes implicites» ← Set Mining · «Cotes implicites inversées : quand toucher son tirage fait perdre» ← Reverse(자동완성 축어) · «Quand ne pas compter sur les cotes implicites» ← When NOT
- **FAQ**: FR PAA(équité·outs·probabilités 계산)는 형제 글 앵커로 짧게 · EN 10문항 유지(«all-in이면 임플라이드 0» = FR 경쟁 글에 없음 🟢) · 계산기 FAQ «Comment utiliser le calculateur de cotes implicites ?»와 겹치는 «utiliser le calculateur» 표현 금지.
- **차별화**: 공식 분모 명확화(§4-C #12 유형) · 셋마이닝 «5 % / 10:1» 근거 계산.

### 7-6. holdem-equity — 우선순위 **4**(110 + ev 110 · 도구 경쟁 강함)
- **주력어**: «équité au poker» + 첫 등장 «équité (equity)» · 훅 = PAA 축어 «Qu'est-ce que l'équité au poker ?»(3개 SERP 반복).
- **H2**: «Qu'est-ce que l'équité au poker ?» ← What Is · «Comment calculer l'équité au poker rapidement ?» ← Estimate Fast(자동완성) · «Équité et cote du pot : la règle qui décide chaque call» ← vs Pot Odds · «Fold equity : gagner le pot avec la moins bonne main» ← Fold Equity(영어 유지 · grindlab도 영어) · «Réalisation d'équité : pourquoi 40 % ne veut pas dire 40 % des pots» ← Realization · «Équité à tapis» ← All-In(«Tableau équité poker» 관련검색) · «Équité en multiway» ← Multiway · 승격 **«Équité et EV : quelle différence ?»** ← FAQ «What is EV»+«Equity vs EV»(«ev poker» 110 · grindlab FAQ 축어)
- **FAQ**: Qu'est-ce que l'équité au poker ? · Comment calculer l'équité au poker ? · EN 11문항 유지 · PAA «Que se passe-t-il en cas d'égalité au poker ?»는 **받지 않고** «équité ≠ égalité» 한 줄 + tiebreak 앵커.
- **카니발**: 매치업 표는 계산기 quickRef «confrontations à tapis préflop»와 겹침 → 글은 «왜 그 숫자인가»(도미네이션·오버카드 라벨) 5~8행, 전체 표는 계산기 링크.

### 7-7. holdem-card-counting — 우선순위 **2**(공동 · 90 · 가장 빈 SERP)
- **주력어**: «compter les cartes au poker»(같은 군 90) · 훅 = PAA 질문 그대로.
- **H2**: «Peut-on compter les cartes au poker ?» ← Can You(자동완성 20 · PAA) · «Pourquoi le comptage du blackjack ne marche pas au poker» ← Why Blackjack(PAA «…est-il efficace ?») · «Compter les cartes : poker contre blackjack» ← Poker vs Blackjack(«compter les cartes blackjack» 170은 이 비교 H2로만) · «Le vrai « comptage » au poker : outs, bloqueurs, cartes mortes» ← Real Card Counting · «Compter les cartes au poker, est-ce interdit ?» ← Is It Illegal(자동완성 «interdit» · PAA «Est-il légal…») · «Le stud à 7 cartes, où le comptage fonctionne» ← Stud · «Comment commencer à « compter » dès ta prochaine session» ← How to Start(«apprendre a compter…»)
- **FAQ**(PAA 4 + 자동완성): Est-il possible de compter les cartes au poker ? · Est-il légal de compter les cartes ? · Le comptage des cartes au poker est-il efficace ? · C'est quoi compter les cartes au casino ? · Que signifie compter les cartes au poker ?
- **규율**: «interdit/légal»은 카지노 규칙·행위 구분 정보로만(메모리 «합법성 글=정보제공») — 온라인 합법성·사이트 추천으로 넓히지 않는다. 블로커 예시는 §13 7장 검산.

### 7-8. 우선순위 요약
1 probability(880+390 · «tableau» 1·2위가 포럼·PDF) → 2 outs(gutshot 170 FR 글 0 · 1위 grindlab 오류) = 2 card-counting(SERP 최약 · PAA 1:1) → 3 pot-odds(«cote du pot poker» 빈 SERP) → 4 equity(110+ev 110 · 단 1·2위 PokerStars·도구) → 5 drawing-odds(헤드 없음) → 6 implied-odds(10 · 1위 분모 오류)

---

## 8. 0-3 판정 재료 — `/fr/calculator` 경계 (판정하지 않음 · 증거 + 권고 1줄)

**근거 문서**: `fr-calculator.md` §0-A — «fr은 정보형 축 전부 소유자 0 → 계산기가 통째로 가져가도 된다. 🔴 단 fr 블로그가 이 글들을 발행하면 재판정(«개념 정의는 블로그, 계산은 랜딩»으로 되돌린다)». **이 레인 7편이 바로 그 발행이다.**

| 증거 | 값 |
|---|---|
| SERP 유형 | «probabilité poker» 도구 2(#1·#3) + 글 7 = 혼합 · «tableau …» 도구 2 + 포럼·PDF·글 = 표(글) 우세 · «équité poker» #1 글 · #2 도구 · #3~5 글 = 정의(글) 우세 · «cote poker» #1 글 · #2 도구 |
| 동사형 vs 명사형(0-1·계산기 실측) | «calcul probabilité poker» 210 ≫ «calculateur probabilité poker» 10 · «calcul cote poker» ≡ «calculateur cote poker» 110 · «équité poker calcul» 10 |
| 자동완성 «tableau probabilité poker» | 확장 10개 중 **4개가 «calculateur …»**(calculateur probabilité · pourcentage · chance · stat) → 구글은 «표»와 «계산기»를 이웃으로 본다 |
| 계산기 현재 문구 | desc «… outs, probabilités …» · FAQ 7문항이 이 레인 질문과 같은 의미(§6) |

**권고(1줄)**: 글 = **«probabilité / tableau / qu'est-ce que / comment calculer(손 계산법)»**, 계산기 = **«calcul / calculateur / simulateur / gratuit»** 명사·도구어 — 글 title·H1에 «calcul(ateur)»를 쓰지 않고, 계산기 FAQ와 **같은 질문 문장 7개를 글 FAQ에서 피하며**(의미가 같으면 문장을 바꾸거나 계산기로 앵커), 계산기 desc의 «probabilités»는 유지하되 계산기 related에 7편을 추가(§0-A 2번 «링크할 곳이 없다» 해소 — quickRef `link` 6개 슬러그가 이번에 전부 생긴다: probability · equity · outs · pot-odds · (short-stack · tournament-vs-cash-game은 L-E)).

용어 정본 재료(0-3): gutshot = «gutshot (tirage ventral)»(§6) · 아웃츠 표 헤더 «% au turn / % à la river»(도착점 어순)는 계산기와 글 동일 · «règle du 2 et du 4» / «règle du 2/4»(계산기 정본 · «règle de 2/de 4» 분리 명명은 1편뿐) · «cote(s) implicite(s)» 단·복수 혼용 허용(SERP 5:4).

---

## 9. 커버리지 표

### 9-A. 검색어별 (1 자동완성 · 2 볼륨 · 3 SERP·PAA · 4 원문 정독)
| 검색어 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| probabilité poker (헤드) | ✅ +악상·proba·와일드 | ✅ 880(0-1) | ✅ PAA 4 · KG | ✅ 5편(cours-et-fiches · 위키 · jeu-legal-france · winamax · pokerpro) · clubpoker 403 ✗ · partypoker JS ✗ · 도구 2는 제외 |
| tableau probabilité poker (헤드) | ✅ | ✅ 390(0-1) | ✅ PAA 4 | ✅ 3편(combinaison-poker · calcbe · pokersciences) — 1·2위는 포럼·과제 PDF |
| tableau probabilité poker preflop | ✅ | ✅ 30 | ✅ PAA 4 | ✗ 상위가 도구·앱·포럼 |
| probabilité quinte flush royale | ✅ | ✅ 170(0-1) | ✅ PAA 3 | ✅ statisticseasily |
| cote poker (경량) | ✅ +cote au poker · cote du pot | ✅ 70(0-1) | ✅ PAA 없음 | ✅ 2편(PokerStars 팟오즈 · cours-et-fiches) |
| cote du pot poker | ✅ | ✅ 20(0-1) | ✅ 글 0 | ✗ 무관 강좌·포럼뿐 |
| pot odds poker | ✅ | ✅ 20(0-1) | ✅ 영어 SERP | ✗ 프랑스어 글 0 |
| gutshot poker (경량) | ✅ +gutshot · tirage ventral | ✅ 170(0-1) · 신규 def 20 · double 10 · tirage ventral 20 | ✅ PAA 없음 · FR 글 0 | ✅ 대체 2편(pokerpro «Gut Shot» · 위키 «Tirage quinte ventral» 절) |
| tirage ventral poker / tirage poker | ✅ | ✅ | ✅ PAA 4 / 3 | ✅ poker.md · pokerpro |
| outs poker / outs au poker | ✅ | ✅ 30(0-1) | ✅ PAA 4 / 3(잡음 SERP) | ✗ 잡음 → «calcul outs poker»로 대체 |
| calcul outs poker | ✅ | ✅ 20(0-1) | ✅ PAA 4 | ✅ 3편(grindlab · livepoker · pokerlistings) |
| équité poker (경량) | ✅ +équité au poker · equity poker | ✅ 110(0-1) · 신규 ev poker 110 | ✅ PAA 4 | ✅ 5편(PokerStars · tuto-poker · poker-academie · pokersciences · grindlab) |
| compter les cartes au poker (경량) | ✅ +compter les cartes | ✅ 90(0-1) · 신규 6 | ✅ PAA 4 | ✅ 3편(pokerlistings · jeretiens · laneuvelotte — 뒤 2편은 기계번역·스핀이라 약점 증거로만) |
| implied odds poker (경량) | ✅ +implied odds | ✅ 10(0-1) | ✅ 영어 SERP | ✗ 영어 SERP → «cotes implicites poker»로 대체 |
| cotes implicites poker | ✅ | ✅ 10(0-1) · 신규 «poker cote implicite» 10 | ✅ PAA 4 | ✅ 4편(PokerStars · pokernews · pokerlistings · cours-et-fiches) |
| règle du 2 et du 4 (poker) | ✅(포커 0) | ✅ null(계산기 실측) | ✅ PAA 무관 | ✅ grindlab · cours-et-fiches · poker-academie |
| 와일드카드 5종 | ✅ | — | — | — |

### 9-B. 글별 «PAA·자동완성 질문 확보»
| 글 | PAA 축어 | 자동완성 질문형 | 판정 |
|---|---|---|---|
| holdem-probability | Comment calculer les probabilités au poker ? · Quelles sont les statistiques de probabilité au poker ? · Quelle est la probabilité d'une quinte flush royale ? · Quelle est la probabilité de recevoir les As préflop au poker ? · Quel est le pourcentage de chances de réussir un quinte flush ? | probabilité d'avoir un carré/une paire/une couleur/un full/une suite/2 as/un brelan au poker · quelle est la probabilité d avoir une quinte flush royale · probabilité de gagner au poker | ✅ |
| holdem-pot-odds | Comment calculer les probabilités de gagner au poker ? (outs/cotes implicites SERP) · PokerStars 리드 «c'est quoi la cote du pot ?» | comment calculer les cotes au poker · calcul cote poker rapide · cote poker tableau | ✅ |
| holdem-outs | Comment calculer les outs au poker ?(×4 SERP) · comment calculer les sorties ? | comment calculer les outs au poker · calculer ses outs au poker · out poker signification · gutshot poker def · double gutshot poker | ✅ |
| holdem-drawing-odds | Quelle est la probabilité d'obtenir une quinte flush ? · Comment calculer la probabilité d'un tirage ? · Quelle est la probabilité de gagner au poker ? | probabilité brelan flop · probabilité quinte flush royale au flop · tirage couleur poker · tirage quinte ventrale | ✅ |
| holdem-implied-odds | Comment calculer l'équité / les outs / les probabilités de gagner au poker ? · Qu'est-ce que l'équité au poker ? (FR SERP) | cotes implicites inversées · poker cote implicite · (영어권) implied odds vs pot odds poker · what is reverse implied odds | ✅ |
| holdem-equity | Qu'est-ce que l'équité au poker ? · Que se passe-t-il en cas d'égalité au poker ?(→ 위임) | comment calculer l équité au poker · équité poker définition · équité poker calcul · comment calculer l ev au poker | ✅ |
| holdem-card-counting | Est-il possible de compter les cartes au poker ? · Est-il légal de compter les cartes ? · Le comptage des cartes au poker est-il efficace ? · C'est quoi compter les cartes au casino ? | peut on compter les cartes au poker · que signifie compter les cartes au poker · compter les cartes au poker interdit · apprendre a compter les cartes au poker | ✅ |

✗ 항목은 전부 «정독할 프랑스어 글이 SERP에 없음»(영어·잡음·포럼 SERP) 또는 접근 차단(clubpoker 403 · ggpoker 403 · partypoker JS)이다 — 대체 쿼리로 같은 의도의 글을 정독했다. 글별 질문 확보는 7/7 ✅.
