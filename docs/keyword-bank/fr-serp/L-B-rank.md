# L-B 족보 — fr SERP 조사 (2026-10-07 · fr 클러스터 0-2)

> 브리프 = `00-brief.md` «레인마다 할 일» 1~8. 대상 글(EN 마스터 `lib/posts-en/`): **holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board**.
> 측정: DataForSEO 직접 호출(location_code **2250** · language_code **fr** · autocomplete client=chrome · organic depth 10 desktop · PAA click depth 1). 볼륨은 0-1(`fr-core-volumes.md`)에 **없는 것만** 쟀다.
> 원문: 레포 밖 임시 fetch 스크립트(HTML → H1~H3 축어 · 단어 수 · table/img/iframe 수 · FAQPage 스키마 유무) + 차단·JS 페이지는 exa web_fetch(전문 마크다운). firecrawl CLI는 이 PC에 없음(`which firecrawl` 없음).
> 원자료 = `tmp/fr-serp-B-ac-1.json` · `-ac-2` · `-serp-1`(11어) · `-serp-2`(8어) · `-serp-3`(5어) · `-vol-1`(107어) · `-read-1.json` · `-read-2.json`(gitignore).
> 🔴 수정 안 함 — 조사·처방만. 검색어·헤딩·PAA는 프랑스어 원문 그대로. 최종 seoTitle·desc는 쓰지 않는다(레인 A Fable 몫).

---

## 0. 한 줄 결론 (상위 발견)

1. 🆕 **«suite poker» 3,600**(0-1에 없음 · «quinte poker» 720의 5배) + **«royal flush» 1,300 · «flush poker» 880 · «straight poker» 260**. 검색자는 straight를 **«suite»**로 부르고, 자동완성은 «suite poker as 2 3 4 5 / roi as 2 3 4 / dame roi as 2 3»(휠·랩어라운드). → hand-rankings H3에 «Suite (quinte)»·영어 명칭 병기, reading-the-board에 «Roi-As-2-3-4는 없다» H2.
2. 🔴 **상위 글 §13 오류가 흔하다**(§4-C 8건): PokerNews FR «un brelan bat une quinte» · partypoker.fr «royale = quinte flush qui comporte un as» · combinaison-poker.com «couleur = … dont les valeurs se suivent» · PokerStars.fr 예시 **A♥ 두 장** · 123loterie «1/649 740 au Texas Hold'em»(5장 수치) 등. → 차별화 = 7장 베스트5 검산 예시 + 5장/7장 두 기준 확률표.
3. **SERP가 빈 곳 3개**: «suite ou couleur (poker)» · «égalité (au) poker» · «split pot / pot partagé» — 프랑스어 실질 가이드 0(포럼 2007·레딧·Zynga 도움말). 볼륨은 작지만 진입 비용 최저.
4. 메인 헤드 «combinaison poker»·«main poker»는 운영사 5곳(PokerStars·partypoker·Unibet·GGPoker·Winamax)+위키+PokerNews. 1위 = 인쇄용 PDF → «à imprimer / pdf / tableau» 의도 필수.
5. «kicker»·«nuts»·«texture» SERP는 앱·클럽·영어로 오염 — 프랑스어 정의형 2~3편만 실질 경쟁. ④ nuts 권고는 §8.

---

## 1. 새 후보 볼륨 (0-1에 없는 것만 · DFS Google Ads · 12개월 평균)

🔴 같은 숫자 = 한 묶음일 수 있음(합산 금지) · `-` = Ads 데이터 없음(≠0) · CPC 미사용. 107어 측정 · 누락 0.

| 검색어 | 볼륨 | 최근 3개월 | 몫 · 비고 |
|---|---:|---|---|
| **suite poker** | **3,600** | 4,400·2,900·2,400 | hand-rankings · 🆕 대형(«quinte poker» 720의 5배) · SERP = 족보 총람 |
| **royal flush** | **1,300** | 590·480·480 | hand-rankings H3 병기 · SERP 혼합(사전·앱·책) |
| **flush poker** | **880** | 1,300·1,000·880 | hand-rankings H3 «Couleur (flush)» |
| straight poker | 260 | 260·210·210 | «Suite (straight)» 병기 |
| combinaison poker holdem | 210 | 320·320·170 | |
| combinaison poker francais | 110 | 320·210·140 | 명칭 대응표 수요 |
| suite poker as 2 3 4 5 | 90 | 140·90·50 | 휠 → tiebreak·reading-the-board |
| main poker classement · **suite poker roi as 2 3 4**(랩어라운드) · suite ou couleur poker(0-1 묶음과 동일) | 70 각 | | |
| main poker français · quinte flush royale poker | 50 각 | | |
| combinaison poker à imprimer · ordre des combinaisons poker · couleur poker regle | 40 각 | | |
| combinaison poker 5 cartes · combinaison poker texas · ordre main gagnante poker · suite poker avec as · full ou couleur | 30 각 | | |
| combinaison poker 2 cartes · quinte flush probabilité · couleur poker combien de carte · nuts au poker · board poker · double paire poker qui gagne · qu est ce qu une quinte au poker | 20 각 | | |
| 족보·명칭 10: combinaison poker image/en anglais · ordre des mains poker holdem · quinte flush royale la plus forte · quinte flush royale vs carré d as · quinte flush en anglais · couleur poker hauteur · brelan plus paire poker · suite poker combien de carte/regle · quinte poker as 2 3 4 5 · meilleur main poker texas hold em · hauteur poker definition · qu est ce qu une paire/suite au poker | 10 각 | | |
| 비김·키커·분할 10: couleur poker qui gagne/egalite · suite ou couleur qui gagne · egalite poker texas hold em/couleur · poker egalite paire · égalité au poker qui gagne · egalite brelan/full/double paire poker · departager double paire poker · 2 paires poker qui gagne · poker double paire sur la table · carte haute poker regle · quelle main gagne au poker · kicker poker definition/texas hold em · regle kicker poker · avoir les nuts poker · partage poker · split pot poker rules | 10 각 | | **비김 질문이 족보별로 갈라짐** → tiebreak H2 족보별 |
| `-` 34어(표현 재료) | | | quel full est le plus fort · qui gagne au poker quand personne na rien · cas d égalité au poker · couleur ou suite qui gagne au poker · pot partagé poker · partage de pot · brelan poker signification · poker brelan ou suite/couleur · quinte flush vs carré · kicker au poker definition · nuts poker definition · texture board poker · calculateur main gagnante poker 외 — 전체 `tmp/fr-serp-B-vol-1.json` |

→ L-B 신규 수요의 90% 이상이 hand-rankings(suite 3,600 · royal flush 1,300 · flush 880). 나머지 5편은 **경쟁 공백 + 질문 표현**으로 이긴다(tr L2와 같은 모양).

---

## 2. 자동완성 (DFS autocomplete · 2250/fr · 원문 그대로 · 포커 무관·타 언어 서제스트는 «외 N»으로 생략)

- **combinaison poker** (후행 공백·«* combinaison poker» 동일 + à imprimer · anglais): ordre · ordre croissant · holdem · francais · texas holdem · pdf · 5 cartes · texas · image · tableau · 2 cartes · ordre francais · carte · menteur · en anglais
- **ordre main poker**: texas hold'em · holdem · ordre main gagnante poker · ordre meilleur main poker · ordre force main poker · ordre puissance main poker · ordre grandeur main poker · main poker ordre francais
- **ordre des mains poker**: holdem · ordre des combinaisons poker · ordre des mains au poker texas hold em · ordre des mains gagnantes poker · ordre force des mains poker · ordre des meilleurs mains poker · ordre des combinaisons au poker texas hold em · ordre des mains au poker pdf
- **main poker**: ordre · classement · français · force · holdem · texas hold em · ordre francais · probabilité · tableau · texas · liste · gagnante · combinaison (외 무관)
- **quinte flush royale**: probabilité · poker · la plus forte · pique · en anglais · c est quoi · coeur · communautaire · vs carré d as (외 무관) · «quinte flush royale ou» → royal flush · flash · définition
- **quinte flush**: poker · vs carré · probabilité · royal vs carre d as · en anglais · communautaire (외 무관)
- **couleur poker**: regle · combinaison · combien de carte · en anglais · qui gagne · hauteur · egalite · nombre · carte haute · main · suite · c'est quoi · valeur · ordre (외 jeton)
- **brelan poker**: en anglais · signification · poker brelan et paire · poker brelan vs double paire · poker brelan ou double paire · poker brelan ou suite · poker brelan ou couleur · double brelan poker · probabilité brelan poker · egalite brelan poker · 2 brelan poker · brelan plus paire poker (외 무관)
- **full poker**: 영어 서제스트뿐 — 프랑스어 «full» 질문 0 · **carré poker**: en anglais · poker carré d d'as contre quinte flush · poker carre ou couleur · probabilité carré poker · chance carré poker · carré main poker (외 무관)
- **suite ou couleur**: suite ou couleur poker · suite ou couleur qui gagne · suite ou couleur poker qui gagne · suite ou couleur meilleur (외 1)
- **suite poker** (+ «suite poker as»): as 2 3 4 5 · **roi as 2 3 4** · combien de carte · avec as · **2 as roi dame valet** · ordre · en anglais · **valet dame roi as deux** · 1 2 3 4 5 · **dame roi as 2 3** · regle · carte · francais · texas hold em · as 2 · as 2 3 4
- **quinte poker**: as 2 3 4 5 · def · en anglais · combinaison · avec as (외 «pmu poker …» 9)
- **double paire poker** (+ «2 paires poker»): qui gagne · deux paire poker qui gagne · deux paire poker · deux double paire poker qui gagne · egalite double paire poker · departager double paire poker · probabilité double paire poker · double paire hauteur poker · regle double pair poker · brelan ou double paire poker · poker double paire contre brelan · poker double paire sur la table · 2 paires poker qui gagne · poker 2 paires contre brelan (외 영어)
- **meilleure main poker**: meilleur main poker texas hold em · préflop · tableau · bonne main poker · ordre/classement meilleure main poker · meilleure main possible poker(→ «quelle est la meilleure main possible au poker») · meilleure main de depart poker
- **carte haute / hauteur poker**: carte haute poker regle · carte plus haute poker · couleur carte haute poker · egalite carte haute poker · hauteur poker definition · poker hauteur egalite · hauteur main poker · double paire hauteur poker
- **kicker poker** (+ «kicker au poker»): texas hold em · definition · regle kicker poker · kicker poker texas · poker kicker explained · kicker au poker definition (외 무관) · «kicker poker c est quoi» → **c'est quoi le kicker au poker** · kickers definition poker · kicker poker regle
- **égalité poker / égalité au poker**: egalite poker texas hold em · couleur · que faire · suite · poker egalite paire · poker egalite carte haute · poker égalité double paire · **égalité au poker qui gagne** · egalite brelan poker · egalite full poker · egalite main poker · regle egalite poker · **cas d'égalité au poker** · (+ équité poker ×3 — 구글이 égalité↔équité 혼동)
- **départager poker**: poker departager couleur · poker departager egalite · poker départager deux doubles paires · departager full poker · departager main poker · departager paire poker · departager suite poker · departager double paire poker · departager deux couleurs poker · départager au poker
- **qui gagne (au) poker**: **qui gagne au poker quand personne na rien** · en cas d'égalité au poker qui gagne · savoir qui gagne au poker · main qui gagne au poker · carte qui gagne au poker · qui gagne couleur poker · site pour savoir qui gagne au poker · couleur ou suite qui gagne au poker · poker qui gagne double paire · poker qui gagne suite ou couleur · qui gagne paire · simulateur poker qui gagne · poker qui gagne la couleur · «quelle main gagne au poker» → quelle main gagne · quel main gagne au poker
- **nuts poker / nuts au poker**: 전부 클럽·리그·칩(the nuts poker league · verona · club · room · hand · chips · stuttgart …) — 프랑스어 정의 0 · «les nuts poker» → **avoir les nuts poker** · nuts poker club
- **split pot poker**: rules · 2 pair · all in · example · high card · flush (외 무관) · «partage (du) pot poker» → partage poker · partage de pot
- **board poker**: definition · meaning · poker board texture strategy (외 무관) · **texture board poker**: texture de board poker · board texture poker meaning · textured board poker · texture poker · «lire le board poker» = 서제스트 0 · «jouer le tableau poker» = 무관
- 와일드카드: «poker * c est quoi» → **poker c est quoi une couleur** · **flush poker c est quoi** · «qu est ce qu une * au poker» → **couleur · quinte · suite · main · flush · paire** · «qu est ce que * poker»·«comment * poker» → 족보 관련 0(타 레인 용어만)

**판독**: ① ordre/classement/ordre croissant ② pdf/à imprimer/image/tableau ③ en anglais/francais ④ qui gagne/departager/egalite + 족보명 ⑤ suite + 카드열(휠·랩어라운드). 🔴 «couleur» = 무늬·flush 겸용(«couleur poker jeton») → 본문 무늬 = «enseigne/famille», 족보 = «couleur»(`translation-terms-fr.md` 11행).

---

## 3. SERP 상위 10 + PAA (organic/live/advanced · 2250 · fr · desktop)

유형: B=가이드 · C=룸·카지노 운영사/제휴 · W=위키/사전 · R=레딧(?tl=fr 자동번역) · F=포럼 · V=영상 · S=쇼핑/핀터레스트 · A=앱 · D=PDF · X=무관. FS(featured snippet)는 24개 SERP 전부 **없음**.

### 3-1. 헤드 (원문 정독 대상)

**«combinaison poker» 49,500** — PAA·AIO 없음 · 영상팩 있음
1 fr.pokerlistings.com «Classement des Mains au Poker»(**PDF 인쇄용**) D · 2 partypoker.com «Classement officiel des mains de poker» C · 3 youtube «Poker: The different combinations» V · 4 pinterest «Combinaisons poker : ordre des cartes & valeur des mains» S · 5 regledujeu.fr «Poker : Règle du jeu» B · 6 pokerfootball.fr «Combinaisons de Poker : Maîtrisez l'Art du Jeu …» B · 7 clubpoker «COMBINAISON définition poker» W · 8 fr.pokerlistings.com «**Quelle main gagne ? – Calculez la main de poker gagnante**»(도구) · 영상 3(YoH ViraL · Kill Tilt · Théo Zajac) · 10 audemondujeu.over-blog B
- 관련검색: Combinaison poker ordre · PDF · français · 5 cartes · ordre croissant · Règle poker débutant · à imprimer · Main poker
- 🔴 1위 PDF + 8위 승자 판정 도구 → «인쇄 표»와 «누가 이기나» 의도가 헤드에 섞임.

**«main poker» 14,800**
1 pokerstars.fr «Classement des mains de poker et tableaux» C · **PAA**: Quelles sont les mains au poker ? · Quelles sont les règles pour une main de poker ? · Quelle main ne pas jouer au poker ? · **Qu'est-ce qu'une main full au poker ?** · **Quel full est le plus fort ?** · **C'est quoi le T au poker ?** · 3 fr.wikipedia «Main au poker» W · 4 partypoker.fr «Mains au poker: toutes les combinaisons poker» C · 5 fr.pokernews.com «Combinaison Poker | Classement des mains du Poker» B · 6 unibet.fr «Classement des combinaisons au Poker : ordre des mains» C · 7 thejokerhouse.com «Mains au poker : le classement complet des combinaisons» B · 8 PDF D · 9 ggpoker «Classement des mains au poker …» C · 10 winamax.fr «École de poker : comment évaluer une main ?» C · 11 clubpoker «LES MAINS DE DÉPART»(= L-D)
- 관련검색: Main poker ordre · français · **Tableau des mains à jouer au poker** · Classement main poker · **Classement des mains au poker préflop** · Suite poker
- 🔴 운영사 5곳 — 가장 단단한 SERP. «T» 질문 = 카드 표기 «T=10».

**«ordre main poker» 2,400**
1 ezracard «Principes de base du poker» B · **PAA**: **Qui gagne, la couleur ou la suite ?** · Quel est l'ordre de parler au poker ? · Comment démarrer une partie de poker ? · Qui mise en premier au poker ? · Comment bien miser au poker ? · Quel est le plus gros coup au poker ? · 3 reddit «Tier list pour tous les 169 combos de mains» R · 4 pronostips «Couleurs au poker : signification et hiérarchie des mains» B · 5 clubpoker «Hierarchie des combinaisons avec 32 cartes» F · 6 francia.org.ve(스팸 카지노) X · 7 univ-mrs PDF 과제 D · 8 Governor of Poker 도움말 A · 9 liberamos(스팸) X
- 🔴 PAA 절반이 «말하는 순서»(L-A game-order 몫). 그러나 **실질 가이드 0편** → hand-rankings H2에 «ordre des combinaisons/mains»를 넣으면 가장 싸게 들어갈 2,400 헤드.

**«combinaison poker ordre» 1,300** — PAA: Qui gagne, la couleur ou la suite ? · Comment définir l'ordre de parole au poker ? · **Quelle est la combinaison la plus forte au poker ?** · Qui doit parler en premier au poker ? · 1·7·11 pinterest S · 3 clubpoker 32 cartes F · 4 **combinaison-poker.com** B(EMD) · 5 **123loterie «Liste des combinaisons au poker - Tout comprendre facilement»** B · 6 scribd «Combinaisons de Poker à Imprimer | PDF» D · 8 twitch-overlay.fr · 9 supersoluce · 10 hand2noteguide «Classement des mains de poker dans l'ordre»

**«suite poker» 3,600 🆕**
1 sites.google.com «Poker and Gamble - Les 10 combinaisons de mains au poker» B · **PAA**: **Quel est l'ordre des cartes au poker ?** · Où puis-je trouver un PDF des règles de base du poker pour débutant ? · (나머지 4 = 블라인드·칩·승률·시간) · 3 partypoker.fr C · 4 pokerstars.fr «Couleur au Poker : Définition, Classement & Stratégie» C · 5 clubpoker «QUINTE sur la table» F · 6 lyceedadultes PDF D · 7 fr.wikipedia «Poker» W · 8 joa.fr «Les règles du Poker Texas Hold'em» C · 9 pinterest · 10 dicel.fr · 11 audemondujeu
- 관련검색: **Suite poker As 2 3 4 5 · Suite poker Dame Roi As 2 3 · Petite suite poker** · Couleur poker · Combinaison poker ordre …
- 🔴 «suite» 전용 글 0 · 1위가 무료 구글 사이트(604단어) → hand-rankings «Suite» H3를 두껍게.

**«quinte flush royale» 1,900** — 영상·숏폼팩
1 pokerqz.com «Quinte flush royale : définition et règles du poker»(용어집 292단어) B · **PAA**: **Comment faire une quinte flush ?** · Qui gagne, la couleur ou la suite ? · Quel est l'ordre du poker ? · C'est quoi la river au poker ? · 3 영화 X · 4 baidu W · 5 **reddit «quelqu'un a déjà eu une quinte flush royale ? …»**(경험담) R · 6 유희왕 X · 영상: Mathieu Passion Poker «JE PERDS CONTRE QUINTE FLUSH ROYALE !!» 외 2 · 9 pokerpro.fr «Les mains au poker …» B · 10 bdfugue 만화 X · 11 clubpoker 포럼 F
- 🔴 비포커 4 · 실질 가이드 2(얇음) · 경험담이 레딧·영상에만.

**«suite ou couleur» 70 / «suite ou couleur poker» 70**
- 단독: AIO · PAA **Qui est plus fort, la suite ou la couleur ?** · Quel est l'ordre de couleur ? · Comment classer par couleur ? · Quel est le synonyme de "couleur" ? · 유기 10 = **전부 비포커**(facebook·자동차 색·Dell·instagram·호텔·CorelDRAW).
- «… poker»: PAA·AIO 없음 · 1 reddit «Pourquoi est-il plus probable d'obtenir une suite qu'une ...» · 2 combinaison-poker.com/main-de-poker · 3 gamblingngo «Classement des mains de poker 2026» · 4 dicel · 5 supersoluce · 6 **wam-poker «Le kicker dans une suite»**(2007) · 7 strategie-poker.net · 8 reddit «Why does three of a kind win over a flush here??» · 9 스팸 · 10 joueurdepoker.fr
- 🔴 **전용 비교 글 0** → flush-vs-straight 사실상 무경쟁.

### 3-2. 명칭·보조 헤드

- **royal flush 1,300 🆕**: AIO·이미지팩 · PAA: **C'est quoi une quinte flush ?** · **Quelle est la probabilité d'obtenir une quinte flush royale ?** · Que signifie le mot "flush" ? · **Quelle est la différence entre un quinte flush et un quinte flush royale ?** · 유기 = 사전·스톡·앱·쇼핑·책·레딧 → **프랑스어 가이드 0**.
- **flush poker 880 🆕**: 지식 패널 «Flush» · PAA: Quel est le coup le plus fort au poker ? · **Que signifie le mot "flush" ?** · **Qu'est-ce qu'un flush au poker ?** · **Quelle est la traduction de "flush" en français ?** · 유기 = 레딧 · 영상 · thejokerhouse · baidu · 스톡 · **pokerpro.fr «Qu'est-ce que la couleur au Poker ?»** · purpoker.ca · EN 2 · **clubpoker «Pourquoi flush>quinte ?»**
- **couleur poker 1,300**: PAA: **Qui est le plus fort entre le full et la couleur ?** · Quel est l'ordre des couleurs des jetons de poker ? · Quels jetons distribuer au poker ? · 유기 = casino.org/replaypoker C · combinaison-poker.com/main-de-poker · **clubpoker «couleur et départage des égalité.»** F · **wam-poker «Départage des mains (couleur)»** F · pokernews «La texture du flop» · reddit «Un brelan ne devrait-il pas être meilleur qu'une couleur …» · amazon 칩 · reddit «Pourquoi est-il plus probable d'obtenir une suite …» · **reddit «2 paires battent une couleur ??»** → 비김·«왜 couleur>suite» 질문이 살아 있는 헤드.
- **brelan poker 880**: PAA: **Qui gagne entre deux paires et un brelan ?** · **Qu'est-ce qu'un brelan ?** · **Pourquoi dit-on brelan ?** · Quelles sont les mains au poker ? · 유기 = partypoker.fr · reddit «Si 2 joueurs ont le même type de main (paire, 2 …» · 영상(PokerStars FR) · 포럼 ×3 · Le Robert
- **full poker 720**: AIO · PAA **C'est quoi un full house ?** · 유기 = 레딧·클럽·Full Tilt 뉴스 → 가이드 0.

### 3-3. 경량 헤드

- **kicker poker 140**: 지식 패널 축어 «Lors de l'abattage des cartes au poker, il arrive que certains joueurs se trouvent avec une main de niveau équivalent. Pour déterminer le vainqueur de ce coup, on compare …» · PAA: **C'est quoi le kicker ?** · Que signifie le mot "kickers" ? · **Quelle est la définition de "kicker" en français ?** · (나머지 3 무관) · 유기 = **앱스토어 «Kicker Poker Play» ×3** · gambit(EN) · **pokerstrategy.com/fr 포럼 «Besoin d'une confirmation sur la règle du kicker …»** · reddit «Deux paires avec un as comme kicker sur un board paire» · usatoday 크로스워드 · casinoedge(EN) · cazinoz.ro
- **kicker au poker 20**: 영상팩 선두(PokerStars en Français «1.1 Lexique : Kicker - Cours de poker» · Kill Tilt «Jouer une top paire sans Kicker») · PAA + «Que signifie "avoir un kick" ?» · 유기 = pokerstars.uk(EN)·앱 ×3 → **프랑스어 kicker 가이드 1페이지 0**.
- **égalité poker 40**: PAA: C'est quoi l'équité au poker ? · Comment calculer l'équité au poker ? · **Quel est l'ordre des gains dans le poker ?** · Qui gagne, la couleur ou la suite ? · 유기 = chipup 확률 계산기 · 포럼 · PDF · 블랙잭 스팸 · 커튼 쇼핑 → 🔴 구글이 **égalité↔équité 혼동**, 가이드 0.
- **égalité au poker 50**: PAA **Que se passe-t-il en cas d'égalité au poker ?**(+규칙 일반 4) · 유기 = PDF·영상·블랙잭 등 → 가이드 0.
- **qui gagne au poker 20**: AIO · 유기 = clubpoker «qui gagne? - Espace débutants» · 대회 뉴스 ×5 · reddit «Quelle main gagne ici, full house, ou ce que mon …» · **double paire poker qui gagne 20**: 포럼·123loterie·gamblingngo·레딧 · PAA 무관.

- **split pot poker 10**: PAA 없음 · 1 **zyngasupport «Comment fonctionnent les pots partagés»**(유일한 프랑스어 문서) · 나머지 = 레딧·스톡·DQ11·외국어
- **pot partagé poker (볼륨 없음)**: PAA: **Que se passe-t-il en cas d'égalité au poker ?** · Quelles sont les règles du jeu de carte "Le Pot" ? · 유기 = **reddit «Pourquoi un Full house partagerait-il le pot (de manière …»** · WPT 라이브 «Pot partagé pour …» ×2 · PLO 포럼 ×3 · 뉴스 → **가이드 0**. PAA «cas d'égalité»가 égalité·pot partagé 두 SERP 공통 = tiebreak↔split **경계 질문**(§7).
- **nuts poker 210**: 1 **clubpoker «Nuts - Lexique poker : définitions, glossaire poker»** W · **PAA**: **Que signifie "nuts" au poker ?** · **C'est quoi les nuts ?** · Que signifie l'expression "nuts" ? · Quel est le jeu le plus fort au poker ? · 3 클럽 X · 4 **partypoker.fr «Les nuts au poker : ses origines et comment les gérer»** C · 5 **pokerstars.fr «Que sont les nuts au poker : définition et exemples»** C · 6 en.wikipedia «Nut hand» · 7 reddit «Question sur "les nuts"» · 8 **pokerlistings «Nuts poker : Définition d'un terme au poker lexique»** W · 9·10 리그 X · 영상(Kill Tilt · PokerStars FR «1.1 Lexique : Les nuts») · 관련검색: **Termes poker en français · Expressions poker · Lexique Poker Kill Tilt · Lexique poker pdf** · Buster/Sick/Tilt poker
- **les nuts au poker**: 영상팩 선두 · PAA «Qu'est-ce que les nuts ?» · 유기 전부 외국어.
- **texture board poker (볼륨 없음)**: 1 clubpoker «Texture - Lexique» · 2 **pokerstars.fr «La texture du board au poker : comment lire le flop»** · 3 **tolkers «La texture du Board au Poker et son influence sur un coup»** · 9 pokerstrategy/fr «Post-flop - Textures du flop» · 나머지 EN · PAA **전부 영어**(What is a wet board in poker? …) → reading-the-board H2 1개로 충분. 🔴 monotone·paired 보드 «전략»은 L-G GTO 몫.

---

## 4. 상위 글 원문 정독 (헤딩 축어 · 단어 수는 본문 추출 근사)

### 4-A. 족보 총람 (hand-rankings · flush-vs-straight 재료)

| 글(순위) | 분량·형식 | 헤딩 축어(H1 → H2 / H3) | 메모 |
|---|---|---|---|
| **fr.pokernews.com**(main 5) | 3,685단어 · 표 2 · FAQPage ✅ | Combinaison Poker: Classement des mains du Poker → Les mains de Poker dans l'ordre croissant / Vous n'êtes pas sûr de ce qui bat quoi au poker ? / Comprendre les mains de poker gagnantes / Mains gagnantes au poker : Quelles sont les meilleures mains au poker ? / Probabilité des mains de poker / Tableau des cotes des mains de poker / Valeur absolue et valeur relative des mains de poker / Classement des mains de poker F.A.Q. / Outils de poker utiles | FAQ 축어: Quel est l'ordre des mains au poker ? · Qu'est-ce qui bat quoi au poker ? · Qu'est-ce qui bat une quinte au poker? · Qu'est-ce qui bat la couleur au poker? · Un Full bat-il une Quinte ? · Qu'est-ce qui bat un full au poker ? — 🔴 §4-C ①② · 기계번역(«Quatuor», 표에 «Four-of-a-Kind») |
| **unibet.fr**(main 6) | 1,872단어 · 표 1 · FAQPage ✅ | Classement des combinaisons au Poker : ordre des mains → Pourquoi connaître l'ordre des combinaisons de poker ? / Le classement des combinaisons au poker / Toutes les combinaisons de poker, main par main / **Règles d'égalité et importance du kicker** (H3 Le kicker : la carte décisive · Quand le pot est partagé) / Combinaisons au poker : différences selon les variantes / … / Questions fréquentes sur les combinaisons au poker | FAQ 축어: Qui gagne si deux joueurs ont la même couleur ? · Peut-on gagner en n'utilisant qu'une seule de ses cartes au Texas Hold'em ? · Que se passe-t-il si la meilleure combinaison est affichée sur le board ? · Comment départage-t-on deux full houses identiques ? — 키커 예시(«paire d'As … K-J-8 … K-J-4») ✅ · 경험담 0 |
| **fr.wikipedia «Main au poker»**(main 3) | 2,717단어 · 카드 이미지 표 31 | Préambule (H3 Vocabulaire pour les cartes au poker · Forces des cartes au poker) / Ordre des niveaux des mains (H3 Quinte flush royale · Quinte flush · Carré · Full · Couleur · **Suite** · Brelan (aussi appelé Main Presque Pleine) · Double paire · Paire · **Hauteur**) / Comparaison des mains au même niveau / **Égalité** / **Confusion courante chez les débutants** (H3 Une main de poker fait 5 cartes · Toutes les cartes comptent) | 🔑 위키 표제가 **«Suite»·«Hauteur»** = 프랑스어 표준 명칭 근거 · 예시 ✅ |
| **partypoker.fr**(main 4 · exa) | ≈600단어 · 이미지 위주 | Maîtrisez l'ordre des mains au poker / (족보 10 단락) / Égalité et kicker cards / Télécharger le tableau des combinaisons | 🔴 §4-C ③ · 오탈자 «quicker card» · 강점 = 인쇄 PDF |
| **thejokerhouse.com**(main 7 · flush 4 · exa) | ≈3,000단어+ | Mains au poker : classement complet des combinaisons et probabilités → Les dix combinaisons du poker, de la plus forte à la plus faible / Comment se forme une main de poker / Le classement, de haut en bas / 1. Quinte flush royale (royal flush) / 2. Quinte flush (straight flush) / 3. Carré (four of a kind) / 4. Full (full house) / 5. Couleur (flush) / … | 🔑 **가장 강한 경쟁 글**: 족보마다 «Comment on départage» · «la roue ou wheel» · «Une "quinte" D-R-A-2-3 n'existe pas» · «Le mythe du pique» · 5장/7장 확률 구분 · 2인칭 tu. 확률 검산 ✅(7장 SF «1 sur 3 500» ≈ 37,260/133,784,560) |
| **123loterie.com**(combi ordre 5) | 3,095단어 · 영상 1 | Liste des combinaisons au poker : tout comprendre facilement → Quels sont les différents types de jeux de poker ? / Quelles sont les règles de base du poker ? / Quelles sont les mains gagnantes au poker ? (H3 … Straight … Deux Paires · Une paire (One Pair) · Carte haute (High Card)) / Comment déterminez-vous le gagnant au poker ? / Quelles sont les chances d'obtenir chaque main au poker ? / Quelles sont les stratégies pour gagner au poker ? / Foire aux questions | 🔴 §4-C ⑤ · 질문형 H2 구성 |
| **joueurdepoker.fr**(s/c poker 10) | 5,082단어 · 표 1 · 이미지 12 | Combinaisons au poker: notre guide pour bien débuter → Liste et ordre des combinaisons au poker Texas Hold'em / Ordre des combinaisons au poker Texas Holdem à imprimer / La règle du kicker au poker / Quelques autres règles pour départager les mains de poker / FAQ sur les combinaisons au poker (H3 족보별 «Qu'est-ce qu'un(e) … au poker?» 10개 · 그중 **«Qu'est-ce qu'une suite ou quinte au poker?»**) | 서열표 예시 ✅ · 무료 영상 강좌 유도 |
| **combinaison-poker.com**(홈 combi ordre 4 · /main-de-poker s/c poker 2 · couleur 3) | 437 / 1,085단어 | 홈: Les Combinaisons au Poker → Les 10 combinaisons à connaitre au Poker (H3 Carte Haute ( ou hauteur ) · … · **Quinte ( ou suite )** · …) · /main-de-poker: Main de poker et noms des cartes → Valeur et combinaison des cartes au poker / Explications sur la valeur des mains de poker / Noms emblématiques de chaque main de poker | 🔴 §4-C ④ · EMD로 순위만 높음 |
| **pokerstars.fr couleur**(suite 4 · exa · 2025-08-29) | ≈1,800단어+ · 표 2 | Qu'est-ce qu'une Couleur au poker ? → La couleur au poker : les faits essentiels / Classement de la couleur … / Couleur contre les autres mains : qui gagne ? (H3 Tableau comparatif · **Couleur contre quinte : qui est plus fort ?** · Couleur contre full : qui gagne ?) / **Comment départager deux couleurs ?** (H3 Exemples de départage entre couleurs · Règle d'or pour le départage) / Qu'est-ce qu'un tirage couleur (flush draw) ? | «environ 35 % … (9 outs)» ✅ · «10 200 … quintes contre … 5 108 … couleurs» ✅ · 🔴 §4-C ⑥ · 오탈자 «ramaslez» |
| 얇은 상위 글 | 292~1,385단어 | pokerqz «Quinte flush royale»(QFR 1 · Définition de base · Situation spécifique · Points importants · Exemples d'utilisation du terme) · pokerpro «Les mains au poker …»(529) · pokerpro «Qu'est-ce que la couleur au Poker ?»(1,184 · 소제목 0) · pokerandgamble(suite 1 · 604 · H1 «Suite») · strategie-poker.net(«Quinte (Suite/Séquence/Straight)») · dicel(683 · 키워드 반복) · regledujeu(규칙 총람) · pronostips(벨기에 사이트 추천) | 1위권에 300~600단어 글 다수 = **깊이로 이길 수 있다** |
| **gamblingngo.com**(s/c poker 3 · exa) | 목차 축어 | Comment départager les égalités au sein d'une même catégorie de mains · Si les deux joueurs ont la même paire, le kicker décide qui gagne. · Erreur courante au poker avec deux paires sur les tableaux appariés · Trips vs. Sets : Leur différence · **Classement des hétérosexuels** · **La distinction entre une quinte flush et une quinte flush** · **Comment jouer quand on a les noix** · Les textures du plateau les plus mal interprétées au poker · Roue droite mal comprise (A-2-3-4-5) | 🔴 기계번역 사고(§4-C ⑧) — 구조(비김·보드 함정)는 EN 마스터와 닮음 |

### 4-B. 키커·비김·분할·넛·보드 (경량 정독)

- **wam-poker «Le kicker dans une suite»**(2007 · s/c poker 6) — 질문 축어: «je voulais savoir si le kicker intervient lorsque deux joueurs ont exactement la même suite mais un kicker différent / Par exemple 1 joueur KQ l'autre K3 / board : A-Q-J-10-5». 답 «Partage du pot» · 인용 «pour les combinaisons de cinq cartes (Quinte, Couleur, Full, Quinte Flush), le Kicker ne joue jamais.» — 검산 ✅(둘 다 A-K-Q-J-10). 두 번째 예시(A-4 vs 5-6 / 보드 2-3-4-5-J → 2-3-4-5-6 승) ✅.
- **wam-poker «Départage des mains (couleur)»**(2007 · couleur 5) — 질문 축어: «Main n° 1 : [qc] [7d] Main n° 2 : [jc] [3h] / Sur le tapis : [3c] [6c] [7c] [10c] [kc]» + 오해 «si les cartes en main n'amélioraient pas les 5 cartes sur le tapis … il y avait partage du pot … SAUF si l'une des deux mains possède un AS.» · 정답 «K Q 10 7 6 de trèfle … K J 10 7 6» ✅. 🔑 **18년 된 스레드가 순위 = 이 질문에 답하는 현대 글이 없다.**
- **zyngasupport «Comment fonctionnent les pots partagés ?»**(split 1) — 177단어 · 규칙 축어 3줄: «Aucune carte extérieure aux cinq cartes n'a d'influence sur la force de la main (par exemple, la sixième carte kicker n'existe pas)» · «Les cinq cartes sont prises en compte pour calculer la force de la main» · «Vous devez créer la meilleure main possible en utilisant exactement cinq cartes». 홀수 칩·사이드팟 0.
- **pokerstars.fr «Que sont les nuts au poker : définition et exemples»**(nuts 5 · 2026-06-08 · exa) — Définition des nuts : la meilleure main possible / **Comment reconnaître les nuts sur un tableau** / Les nuts peuvent changer du flop à la rivière / Les différents types de nuts : nut flush, nut straight et nut low (H3 La nut flush (la meilleure couleur) · La nut straight (la meilleure quinte) · Le nut low (en Omaha Hi-Lo et en lowball)) / Peut-on perdre avec les nuts ? / Foire aux questions sur les nuts au poker. 예시 3개 검산 ✅(Th-Jh-Qh-4c-7s + Ah-Kh 로열 · 2h-3s-7d-Jc-Ks에서 K-K = 넛(2장으로 휠·스트레이트 불가, 플러시 불가, 무페어) · 7-8-9 플롭 J-10 → 턴 10에 Q-J가 8-9-10-J-Q로 역전). 용어 «tableau»·«famille».
- **clubpoker «Nuts» 사전**(nuts 1 · exa) — 축어: «Littéralement les noisettes. C'est le meilleur jeu possible, ou un jeu imbattable. Attention, les nuts ne restent pas toujours les nuts …» · 예시 2 ✅(Q-J / 8♠10♦A♥7♣K♥ = 브로드웨이 · 8♦5♥ / 5♦8♣8♠2♦3♥ = 남은 8이 8♥ 하나라 쿼즈 불가 → 888-55가 넛). pokerlistings 용어집(nuts 8) = 68단어 정의.
- **pokerstars.fr «La texture du board au poker : comment lire le flop»**(2026-08-13) — Qu'est-ce que la texture du board au poker / Les principaux types de texture du board (H3 Board sec (statique) · Board dynamique (humide) · Board pairé · Board monotone et board connecté) / Comment analyser la texture du board en trois questions / Adapter votre jeu à la texture du board / Les erreurs fréquentes dans la lecture du board — 편집 잔재 «[URL à confirmer]» 노출.
- **tolkers «La texture de Board au Poker»** 1,072단어 — Les textures du Flop (H3 Flop Rainbow – « Dry » · Flop « Drawy » (Straight Draw / Flush Draw)) / Flop pairé / Relativiser sur la force de sa main en fonction du Board (H3 Main n°1 · Main n°2 · Main n°3 : « La Quinte Frustrante ») / En résumé sur la lecture de Board — 🔴 §4-C ⑦.

### 4-B'. 형식 관찰
- 상위 족보 글 1인칭 경험담 0(경험 서사는 레딧·유튜브에만) · 대부분 5장 예시만(보드+홀 예시 = PokerStars couleur·nuts·포럼뿐) · 인쇄 표(1위 PDF·«Télécharger le tableau»·«à imprimer»)가 1위 요인 · 명칭 병기(«Quinte (Suite/Séquence/Straight)» · «Une paire (One Pair)») 일반적.

### 4-C. 🔴 경쟁 글 §13 오류 (직접 검산 · 축어)

| # | 글(순위) | 축어 | 판정 |
|---|---|---|---|
| ① | pokernews FAQ(main 5) | «du plus élevé au plus bas … Quinte flush royale, Quinte flush, Quatuor, Full House, **Quinte flush**, Quinte, Brelan …» | ✗ 5위는 **Couleur** · «Quinte flush» 중복 |
| ② | 〃 | «**un brelan bat une quinte** ; … un full house bat une flush» · «Un Full bat-il une Quinte ? Oui, un Full bat une Flush.» | ✗ 스트레이트(10,200조합) > 트립스(54,912조합) · 문답 불일치 |
| ③ | partypoker.fr(main 4) | «Une quinte flush royale est **une quinte flush qui comporte un as**.» | ✗ A-2-3-4-5 동무늬(스틸 휠)도 A 포함 = **최저** SF. 로열은 10-V-D-R-A뿐. (같은 글 «Toutes les quintes sont composées soit d'un 5 soit d'un 10» ✅) |
| ④ | combinaison-poker.com/main-de-poker(s/c poker 2 · couleur 3) | «La couleur … cinq cartes de même couleur (**toutes de couleur noire ou rouge et jamais rouge et noire**) et **dont les valeurs se suivent**. Cinq cartes de pique noire … 5, 6, 8, 9 et le valet» | ✗ 플러시 = 같은 **무늬**(색 아님) · «valeurs se suivent»면 SF · 자기 예시와 모순 |
| ⑤ | 123loterie(combi ordre 5) | «une Quinte Flush Royale ne survient qu'une fois sur **649 740** distributions **au Texas Hold'em**» | ✗ 649,740 = **5장**. 홀덤 7장 = 4,324/133,784,560 ≈ **1/30,940** |
| ⑥ | pokerstars.fr couleur(suite 4) | «Tableau : 9♥ 6♥ 3♥ V♠ 2♦ **Joueur A : A♥ R♥** … **Joueur B : A♥ D♥**» | ✗ **A♥ 두 장** — 예시 성립 불가(결론 R>D 원리는 맞음) |
| ⑦ | tolkers(texture 3) | 보드 Q♠J♣7♦10♣A♥, 7♥7♣: «brelans supérieurs (AA, **KK**, JJ, QQ, TT)» | △ 보드에 K 없음 → KK는 brelan이 아니라 A-K-Q-J-10 스트레이트(분류 오류) |
| ⑧ | gamblingngo(s/c poker 3) | «Classement des hétérosexuels» · «… une quinte flush et une quinte flush» · «les noix» | ✗ 기계번역 |
| 참 | thejokerhouse·joueurdepoker·unibet·wiki·PokerStars nuts·clubpoker nuts·wam 2건 | 예시·확률 | ✅ |

→ **처방 근거**(§7에 반영): 예시는 보드 5 + 홀 2 · 확률 5장/7장 두 열 · «royale = 10-V-D-R-A uniquement» · «couleur = même enseigne». 경쟁사 이름은 본문에 쓰지 않는다.

---

## 5. 장단점 표

| 구분 | 상위 글 공통 강점(갖춰야 할 것) | 공통 약점(차별화 지점) |
|---|---|---|
| hand-rankings | 10족보 서열표(이미지/표) · 족보별 H3 · 인쇄용 PDF/표 · 영어 명칭 병기 · 확률표 · FAQPage | 오류 다수(§4-C) · 5장/7장 확률 혼동 · 경험담 0 · 7장 퍼즐 없음 · «suite» 명칭 처리 제각각 · 휠·랩어라운드 언급 1편 |
| flush-vs-straight | (전용 글 없음) PokerStars couleur의 «Couleur contre quinte : qui est plus fort ?» H3 · 조합 수 10,200 vs 5,108 | **전용 글 0** · «왜 직관과 반대인가»(레딧 질문) 답이 짧다 · 3장 동무늬 보드 함정 예시 없음 |
| kicker | 지식 패널 정의 · unibet 키커 예시 | **프랑스어 kicker 가이드 1페이지 0** · «suite·couleur·full엔 키커 없음» 포럼 질문(2007) 방치 · «carré의 키커» 예외 설명 드묾 |
| tiebreak | thejokerhouse «Comment on départage» 족보별 · unibet FAQ 2문 | «égalité» SERP에 가이드 0 · 족보별 «qui gagne/departager» 롱테일(paire·double paire·couleur·brelan·full·carte haute) 일괄 답변 글 없음 · 2007 포럼이 순위 |
| split-pot | Zynga 도움말 3줄 규칙 | **가이드 0** · 홀수 칩·사이드팟 분할·«보드가 플레이» 예시 전무 · PAA «Que se passe-t-il en cas d'égalité au poker ?» 미답 |
| reading-the-board | PokerStars nuts·texture(2026 신규 · 예시 정확) · clubpoker 사전 정의 | 7장→베스트5 «선택 절차» 글 0 · «suite roi-as-2-3-4» 랩어라운드 질문 무응답 · texture 글 편집 잔재 · nuts SERP 클럽명 오염 |

---

## 6. 우리 글 대조 (EN 마스터 → fr 의도) · fr 도구

- **도구**: `/fr/glossary`에 «Kicker»·«Nuts»·«Tableau (board)»·«Pot(split pot)» 항목 + meta keywords **«nuts poker signification»**(`app/fr/glossary/dict.ts` 26행) → 정의 의도 일부를 이미 받는다. `/fr/calculator` = «quelle main gagne / simulateur poker qui gagne / site pour savoir qui gagne au poker»(승자 판정) 의도 후보 — 레인 A가 계산기의 승자 판정 표시 여부 확인 후 앵커만. `/fr/hand-chart` = «mains de départ / tableau des mains à jouer / préflop»(main poker 관련검색·PAA «Quelle main ne pas jouer au poker ?») 몫. `/fr/solver` 무관.
- **이미 이기는 점(6편 공통)**: 7장 퍼즐·베스트5 명시 · 족보별 비김 H2 · 키커 예외(carré) · 홀수 칩·사이드팟 · 랩어라운드 FAQ · 경험담 — fr 1페이지에 이 조합을 가진 글이 없다.

---

## 7. 처방 (레인 A 브리프 재료 · 최종 카피 아님)

> 우선순위(볼륨 × 갭): **P1** hand-rankings · **P2** flush-vs-straight · tiebreak · **P3** kicker · split-pot · reading-the-board. H2는 «EN H2 → fr 개명/🆕추가». FAQ 답 방향만(정답은 §13 검산 후 집필).

### 7-1. hand-rankings — P1
- **주력어**: «combinaison(s) poker» + «ordre / classement des mains»(49,500 · 2,400 · 1,300 · 1,000) · 보조 «main(s) au poker»(14,800). H3 명칭 = **«Suite (quinte)»** · «Couleur (flush)» · «Quinte flush royale (royal flush)» · «Full (full house)» · «Brelan» · «Double paire» · «Paire» · «Carte haute (hauteur)» — 프랑스어 먼저, 영어 괄호.
- **훅 재료**: «서열은 아는데 쇼다운에서 졌다»(EN 훅 유효) · «brelan > suite ?»·«royale = quinte flush avec un as ?» 같은 흔한 오해 · «정확한 확률 5장/7장».
- **H2**: «What Are the Poker Hand Rankings, Best to Worst?» → **«Quel est l'ordre des combinaisons au poker ?»** + 서열표 + 역순(ordre croissant) 1줄 · «What Are the 10 Poker Hands?» → «Les 10 combinaisons expliquées une par une»(Suite H3에 휠·«petite suite»·랩어라운드 불가 1줄 + reading-the-board 앵커) · 🆕 **«Noms des combinaisons en anglais et en français»**(royal flush 1,300 · flush 880 · straight 260 · full house 590 · francais 110) · «How Do Kickers and Ties Work?» → «Égalité et kicker : qui gagne avec la même combinaison ?»(요약 + tiebreak·kicker·split 앵커) · «Read the Board: 3 Live Puzzles» 유지 · «What Beats What» → **«Qu'est-ce qui bat quoi au poker ?»** · «Why Does a Flush Beat a Straight?» → 요약 + flush-vs-straight 앵커 · 🆕 **«Tableau des combinaisons à imprimer»**(pdf 170 · à imprimer 40) · «Same in Every Game?» 유지(poker menteur·32 cartes는 다른 게임 1줄) · 🆕(짧게) «Combinaison ≠ main de départ» → `/fr/hand-chart`
- **FAQ(PAA 축어)**: Quelles sont les mains au poker ? · Quelle est la combinaison la plus forte au poker ? · **Quel full est le plus fort ?**(브렐란 먼저 — 8-8-8-2-2 > 7-7-7-A-A) · Qu'est-ce qu'une main full au poker ? · **Quelle est la différence entre un quinte flush et un quinte flush royale ?** · **Quelle est la probabilité d'obtenir une quinte flush royale ?**(5장 1/649 740 · 7장 ≈ 1/30 940 · L-C 앵커) · **C'est quoi le T au poker ?**(T=10) · Qui gagne entre deux paires et un brelan ? · Quelle est la main la plus faible au poker ? · Qu'est-ce qu'une suite / une couleur au poker ? · (Pourquoi dit-on brelan ? = 1차 출처 있을 때만)
- **카니발**: «suite ou couleur»→flush-vs-straight · «kicker»→kicker · «égalité»→tiebreak · «probabilité quinte flush royale»→L-C probability(수치 1줄+앵커) · «mains de départ»→hand-chart.

### 7-2. flush-vs-straight — P2
- **주력어**: **«suite ou couleur»**(4변형 70 · «… qui gagne» 50) — 🔴 «quinte»보다 «suite»가 앞. 보조 «couleur ou suite qui gagne» · «qui est plus fort».
- **훅**: PAA «Qui est plus fort, la suite ou la couleur ?» · 레딧 1위 «Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ?» → «직관과 반대: 10 200 vs 5 108».
- **H2**: «Where the Two Hands Sit» → **«Suite ou couleur : qui gagne ?»** · «The Math» → «Pourquoi la couleur bat la suite (le calcul)» · «3 Board Spots» 유지 · «What Beats a Flush» → «Qu'est-ce qui bat une couleur ?» · 🆕 **«Full ou couleur, brelan ou suite : les autres duels»**(full ou couleur 30 · brelan ou suite/couleur · carre ou couleur · «2 paires battent une couleur ??») · «Flush vs Flush, Straight vs Straight» → «Couleur contre couleur, suite contre suite»(tiebreak 앵커) · «Straight Flush» · «Short Deck» 유지(규칙은 1차 출처 확인)
- **FAQ**: Qui est plus fort, la suite ou la couleur ? · Qui gagne, la couleur ou la suite ? · Qui est le plus fort entre le full et la couleur ? · Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ? · Un brelan bat-il une suite ?(아니다 — 오해 정정형) · Une couleur à pique bat-elle une couleur à cœur ?(무늬 서열 없음)
- **차별화**: 동무늬 3장 보드 7장 예시 · 5장/7장 빈도 두 기준(7장 straight 4.62% · flush 3.03% — L-C와 수치 일치).

### 7-3. tiebreak-rules — P2
- **주력어**: **«égalité au poker / égalité poker»**(50·40) + **«qui gagne»** + **«départager»**(자동완성 13). 🔴 «égalité» 단독은 구글이 équité로 오인 → «égalité» + «qui gagne» 병기.
- **훅**: 실재하는 오해 축어(wam 2007: «couleur au roi déjà présente sur le tapis … partage du pot … SAUF si l'une des deux mains possède un AS») · «même paire, qui gagne ?».
- **H2**(EN 족보별 구조 유지 · 축어로 개명): «3-Step Order» → **«En cas d'égalité au poker, qui gagne ?»** · «Same Pair» → «Même paire : qui gagne ?» · «Both Have Two Pair» → **«Double paire contre double paire : qui gagne ?»** · «Rules for Every Hand» → «Départager chaque combinaison : brelan, suite, couleur, full, carré» · «Higher Straight / Wheel» → «Suite contre suite : la roue (As-2-3-4-5) est la plus petite» · «5th Card» 유지 · «Do Suits Matter?» → «La couleur des cartes départage-t-elle ?» · «When Your Kicker Doesn't Play» → **«Couleur sur la table : qui gagne ?»**(0-1 40 + wam) · 🆕 **«Personne n'a rien : la carte haute départage»**
- **FAQ**: Que se passe-t-il en cas d'égalité au poker ? · Qui gagne si deux joueurs ont la même couleur ? · Comment départage-t-on deux full identiques ? · Qui gagne quand personne n'a rien ? · Le kicker compte-t-il avec une suite ou une couleur ? · Égalité au poker : que faire ?(= 분할 → split 앵커)
- **카니발**: «pot partagé / split pot» 헤드는 split-pot. 여기는 «누가 이기나»까지, odd chip·side pot은 앵커.

### 7-4. kicker — P3
- **주력어**: «kicker (au) poker»(140·20) + «c'est quoi le kicker». PAA «Quelle est la définition de "kicker" en français ?» → 프랑스어 대체어 1줄(0-3 용어 확정 · 도구 사전은 «carte d'accompagnement»).
- **H2**: «What Is a Kicker?» → **«C'est quoi le kicker au poker ?»** · «Which Hands Have a Kicker» → «Quelles combinaisons ont un kicker ? (la suite, la couleur et le full n'en ont pas)» · «How Many Kickers» · «AK vs AQ»(«A-R contre A-D») · «Playing the Board» → «Quand le kicker ne joue pas : jouer le tableau» · «Dominated Ace» 유지 · «Four of a Kind» → «Le carré a-t-il un kicker ?»(fr 경쟁 중 thejokerhouse만 언급)
- **FAQ**: C'est quoi le kicker ? · Que signifie le mot "kickers" ? · Quelle est la définition de "kicker" en français ? · Le kicker compte-t-il dans une suite ? · Deux paires avec un as comme kicker sur un tableau pairé : qui gagne ?(레딧 5위 제목 = 실제 질문)
- **차별화**: 영상 위주 SERP에 «표 1 + 7장 예시 3». glossary «Kicker» 항목 → 이 글 링크.

### 7-5. split-pot-rules — P3
- **주력어**: **«pot partagé» / «partage du pot»** + «split pot» 병기. 볼륨 미미 — 무경쟁 1페이지 확보용.
- **H2**: «What Is a Split Pot?» → **«Pot partagé (split pot) : c'est quoi ?»** · «5 Situations» → **«Que se passe-t-il en cas d'égalité ? Les 5 cas de partage»**(PAA 축어 · 두 SERP 공통) · «When the Board Plays» → «Quand le tableau joue pour tout le monde» · «3 Things That Never Break a Tie» 유지 · «Odd Chip» → «Jeton impair : qui le reçoit ?»(TDA 원문) · «Side Pots» → «Pot annexe (side pot) et partage»(레딧 «… partagerait-il le pot (de manière inégale …)» 답) · «Half High, Half Low» 유지(Hi-Lo 1줄)
- **FAQ**: Que se passe-t-il en cas d'égalité au poker ? · Comment fonctionnent les pots partagés ?(Zynga 제목) · Pourquoi le pot n'est-il pas partagé à parts égales ? · Peut-on partager un pot à trois ? · Un deal en tournoi, c'est un pot partagé ?
- **카니발**: 판정은 tiebreak 앵커 · side pot 계산은 L-A all-in-rules 몫(여기선 분할 동작만).

### 7-6. reading-the-board — P3
- **주력어**: «lire le tableau (board)» + «meilleures 5 cartes sur 7» · «jouer le tableau». «nuts poker»는 §8.
- **H2**: «Best 5-Card Hand From 7» → **«Comment trouver sa meilleure main de 5 cartes parmi 7»** · «4 Steps» 유지 · «Playing the Board» → «Jouer le tableau : c'est quoi ?» · «Spot a Straight» → «Repérer une suite sur le tableau» + 🆕 FAQ→H2 승격 **«Roi-As-2-3-4 : la suite qui tourne n'existe pas»**(«suite poker roi as 2 3 4» 70 · «dame roi as 2 3» · «valet dame roi as deux» · «2 as roi dame valet» · «as 2 3 4 5» 90 — 휠 성립·랩어라운드 불성립) · «Spot a Flush» 유지(«3 cartes de la même famille minimum») · «Board Pairs» · «Flush and a Pair» 유지 · «Reading the Nuts» → **«Les nuts : comment reconnaître la meilleure main possible»** · «Wet vs Dry» → «Tableau sec ou humide»(짧게 · 전략은 GTO 앵커)
- **FAQ**: Que signifie "nuts" au poker ?(§8에 따라) · Peut-on faire une suite avec Roi-As-2-3-4 ? · L'As compte-t-il comme 1 dans une suite ? · Peut-on gagner en n'utilisant qu'une seule de ses cartes ?(unibet 축어) · Que se passe-t-il si la meilleure combinaison est affichée sur le board ?(→ split 앵커)
- **카니발**: monotone·paired 보드 전략 = GTO 13편 · «texture» 단독 헤드 조준 안 함.

---

## 8. 0-3 판정 재료 ④ — «nuts poker»(210) 소유: reading-the-board vs glossary

**SERP 증거(직접 셈)**
- 유기 10 = **정의형 용어사전 3**(1 clubpoker «Lexique poker» · 6 en.wikipedia «Nut hand» · 8 pokerlistings «glossaire» 68단어) · **해설형 2**(4 partypoker.fr 블로그 · 5 pokerstars.fr «définition et exemples» — H2 «Comment reconnaître les nuts sur un tableau» · «Les nuts peuvent changer du flop à la rivière») · 비포커 4 · 레딧 1.
- PAA 6 중 **정의 질문 3**(Que signifie "nuts" au poker ? · C'est quoi les nuts ? · Que signifie l'expression "nuts" ?). 관련검색 = **용어집 방향**(Termes poker en français · Expressions poker · Lexique Poker Kill Tilt · Lexique poker pdf). 자동완성 = 클럽·리그뿐 + «avoir les nuts poker».
- `/fr/glossary` meta keywords에 이미 «nuts poker signification» · «Nuts» 정의 1줄 보유. EN: reading-the-board H2 «What Is the Best Possible Hand? Reading the Nuts».

**판독**: 헤드 의도는 정의 우세, 단 «tableau에서 찾는 법» 해설형(PokerStars 2026 신규)도 5위에 들어 있다 — 두 의도가 공존.

**권고 1줄**: «nuts poker» 헤드(정의)는 **`/fr/glossary` 도구 항목이 주인** — reading-the-board는 제목·H1에 «nuts»를 쓰지 않고 H2 «comment reconnaître les nuts sur le tableau»(7장 예시형)로 2차 의도만 받으며, 도구/glossary 글의 «Nuts» 항목이 그 H2로 앵커 링크한다.

---

## 9. 커버리지 표 (브리프 1~4)

### 9-1. 검색어별

| 검색어 | 1 자동완성 | 2 새 볼륨 | 3 SERP+PAA | 4 원문 정독 |
|---|---|---|---|---|
| combinaison poker | ✅ + 선행 와일드카드 | ✅ | ✅ (PAA 없음) | ✅ partypoker(exa)·regledujeu·combinaison-poker.com·123loterie |
| main poker | ✅ | ✅ | ✅ | ✅ pokernews·unibet·wiki·partypoker.fr·thejokerhouse |
| ordre main poker · combinaison poker ordre | ✅ + ordre des mains | ✅ | ✅ 둘 다 | ✅ 실질 가이드 0 → combinaison-poker.com·123loterie·pronostips |
| quinte flush royale | ✅ + «quinte flush» · «… ou» | ✅ | ✅ | ✅ pokerqz·pokerpro(경량 2 — 나머지 비포커·포럼) |
| suite poker 🆕 | ✅ + «suite poker as» | ✅ | ✅ | ✅ pokerandgamble·pokerstars.fr couleur(exa)·dicel·wiki «Suite» |
| couleur poker · flush poker 🆕 | ✅ | ✅ | ✅ 둘 다 | ✅ pokerpro·pronostips·wam(exa)·thejokerhouse |
| royal flush 🆕 | ✗ 단독 호출 안 함(«quinte flush royale ou» 서제스트로 대체) | ✅ | ✅ | ✗ 1페이지에 프랑스어 가이드 0 |
| brelan · full · carré poker | ✅ 3개 | ✅ | ✅ brelan·full · ✗ carré(볼륨 210 · H3 재료로 충분) | ✗ 가이드 = 이미 정독한 총람뿐 |
| suite ou couleur (poker) | ✅ | ✅ | ✅ 둘 다 | ✅ combinaison-poker.com·gamblingngo(exa)·joueurdepoker·strategie-poker·wam |
| kicker poker (경량) | ✅ + au · c est quoi | ✅ | ✅ 둘 다 + 지식 패널 | △ wam(exa)·unibet·joueurdepoker 키커 절 · ✗ pokerstrategy 포럼 403 · clubpoker 403 |
| égalité poker (경량) | ✅ + au · départager · qui gagne | ✅ | ✅ 4개 | △ 1페이지 가이드 0 → wiki «Égalité»·unibet FAQ·wam |
| nuts poker (경량) | ✅ + les · au | ✅ | ✅ 둘 다 | ✅ pokerstars.fr(exa)·clubpoker(exa)·pokerlistings · ✗ partypoker 블로그 403 |
| split pot · pot partagé (경량) | ✅ + partage | ✅ | ✅ 둘 다 | △ Zynga 1편 — 프랑스어 가이드가 SERP에 없음 |
| texture board · board poker (경량) | ✅ + lire/jouer le tableau | ✅ | ✅ | ✅ pokerstars.fr(exa)·tolkers·pokerstrategy/fr |

### 9-2. 글별 «PAA·자동완성 질문 확보» (필수)

| 글 | 확보 | 근거 |
|---|---|---|
| holdem-hand-rankings | ✅ PAA 축어 20+(main·royal flush·brelan·full·flush·suite) + 자동완성 10묶음 | §2 · §3-1~3-2 · §7-1 |
| holdem-flush-vs-straight | ✅ «Qui est plus fort, la suite ou la couleur ?» · «Qui gagne, la couleur ou la suite ?»(3개 SERP 공통) · «… entre le full et la couleur ?» + «suite ou couleur …»·«brelan ou suite/couleur» | §3-1·3-2 · §7-2 |
| holdem-kicker | ✅ «C'est quoi le kicker ?» · «Quelle est la définition de "kicker" en français ?» · «c'est quoi le kicker au poker» | §3-3 · §7-4 |
| holdem-tiebreak-rules | ✅ «Que se passe-t-il en cas d'égalité au poker ?» · «Quel est l'ordre des gains dans le poker ?» + departager 13 · egalite 15 · qui gagne 11 | §2 · §3-3 · §7-3 |
| holdem-split-pot-rules | ✅ «Que se passe-t-il en cas d'égalité au poker ?»(pot partagé SERP) · «Comment fonctionnent les pots partagés ?» · «partage poker / partage de pot» | §3-3 · §7-5 |
| holdem-reading-the-board | ✅ «Que signifie "nuts" au poker ?» · «C'est quoi les nuts ?» · «suite poker roi as 2 3 4 / dame roi as 2 3 / as 2 3 4 5» · «avoir les nuts poker» | §2 · §3-3 · §7-6 |

**✗·△ 사유**: royal flush·brelan/full/carré 원문 ✗ = 1페이지에 프랑스어 가이드 없음(이미 정독한 총람 제외) · kicker·égalité·split △ = 프랑스어 가이드가 SERP에 존재하지 않음(그 자체가 발견) + clubpoker·pokerstrategy·partypoker 블로그 봇 차단(403)·exa 실패. 0-1 볼륨 재측정 0건.

