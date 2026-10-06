# L-D 전략 — fr SERP 조사·처방 (fr 클러스터 0-2 · 2026-10-07)

> 규격 = `00-brief.md` 1~8. 대상 8편(새 fr · EN 마스터 `lib/posts-en/<slug>.ts` 대조): holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold.
> 측정: DataForSEO autocomplete · organic(2250 · fr · desktop · depth 10) · google_ads search_volume(2250 · fr) — 2026-10-07. 원자료(gitignore) = `tmp/fr-serp-D-autocomplete.json` · `-autocomplete-2.json` · `-serp-1.json` · `-serp-2.json` · `-vol.json` · `-pages-1.json` · `-pages-2.json`(정독 본문 12,000자·헤딩 전체).
> 정독 = 레포 Playwright(H1~H3 DOM 축어 · 단어 수 · 표/이미지/FAQ) · clubpoker.net은 Cloudflare 403 → exa 캐시. 0-1 볼륨은 재측정 안 함.
> 🔴 SERP 제목·PAA·헤딩은 **프랑스어 축어**. 자동완성은 **프랑스어·포커 관련 항목만** 옮겼다(외국어 «significado / là gì / 意思», 미국 앱·클럽명은 «…»로 생략 — 전체는 JSON). AI overview는 유무만.

---

## 0. 결론 3줄

1. **position poker 590 = positions poker 590(같은 수요).** 자동완성 45건이 전부 좌석 지도(6/8/9 max · table de 6 · low jack · utg · mp), PAA도 «Qu'est-ce que la position cut-off au poker ?»·«Quelle est la position UTG au poker ?» → 헤드 주인은 **holdem-positions**. position-play는 «jouer en / hors de position»(각 10)뿐.
2. **limp · cbet · quand se coucher**의 FR 1페이지에 프랑스어 해설 글이 **0**(포럼 2008~09·영어·기생 스팸). 반대로 **3bet · positions · mains de départ**는 cours-et-fiches.com(2026-02 일괄 템플릿 · 표 3~13 · FAQ)이 4개 SERP에 동시 노출되는 실질 경쟁자.
3. 새 볼륨 중 핵심: **utg poker 260** · **poker strategie 320**(«stratégie poker» 110과 다른 숫자) · **squeeze poker 140** · **tableau des mains à jouer au poker 110**(도구 몫).

---

## 1. 볼륨

### 1-A. 0-1 승계 (`fr-core-volumes.md` §2 🅳)
strategy: stratégie poker 110 · comment gagner au poker 170 · bluff poker 170 · astuces 90 · conseils 40 · comment bien jouer 70 / positions: **position poker 590** · cut off 170 · position poker 6 max 140 · position au poker 140 · position table 110 · bouton 110 · dealer 210 · under the gun 50 / limping: limp 260 · limper 170 · limp definition 40 / 3bet: 3bet = 3 bet 170 / cbet: c-bet·cbet 110 · continuation bet 70 / starting hands: quelles mains jouer 50 · mains de départ 30 / fold: fold poker 140.

### 1-B. 새 후보 (81개 1회 · `-` = 데이터 없음 · 같은 숫자 = 한 수요로 볼 것 · CPC 미사용)

| 검색어 | 볼륨 | 배정 / 비고 |
|---|---:|---|
| positions poker | 590 | positions — «position poker» 590과 같은 수요 |
| **utg poker** | **260** | positions(0-1에 없음 · under the gun 50과 다른 숫자) |
| hijack · high jack · low jack poker | 50 · 50 · 40 | positions (hijack 자동완성 = 미국 앱 «Hijack Poker» 혼재 → H2 앵커만) |
| bouton dealer poker · place au poker | 40 · 30 | positions(«bouton dealer … personnalisé» = 상품) |
| position poker 8 max · 9 max | 40 · 20 | positions |
| middle / early position poker | 각 10 | positions |
| jouer en position poker · hors de position poker | 10 · 10 | position-play(jouer hors position · poker hors position · meilleure position au poker = `-`) |
| range bouton poker | 20 | 도구 `/fr/hand-chart` |
| **poker strategie** | **320** | strategy — 어순 변형이 독립 숫자 · strategie poker 90 |
| technique poker | 90 | strategy |
| stratégie poker pdf · comment progresser au poker | 20 · 20 | strategy |
| stratégie poker tournoi | 20 | L-E 앵커 |
| stratégie poker texas hold em · cash game · comment gagner au poker entre amis · comment mieux jouer · astuce poker débutant · techniques avancées · tight aggressive poker · comment bien miser · comment bluffer | 각 10 | strategy |
| stratégie poker débutant · conseil poker debutant · comment bien débuter au poker · pourquoi bluffer | `-` | strategy(문구 재료) |
| limp poker c est quoi · over limp poker | 10 · 10 | limping (limp poker signification `-`) |
| **squeeze poker** | **140** | 3bet H2 |
| 4bet = 4 bet poker | 20 | 3bet |
| 3bet poker range · 3 bet light · c'est quoi un 3 bet au poker · quand 3bet | `-` | 3bet 문구 |
| c bet poker | 110 | = cbet poker 110(한 수요) |
| cbet poker definition · double barrel poker | 10 · 10 | cbet (signification · delayed · mise de continuation = `-`) |
| **tableau des mains à jouer au poker** | **110** | 🔴 도구 몫 |
| tableau main de départ poker | 30 | 🔴 도구 몫 |
| quelle main jouer au poker | 50 | = quelles mains 50(한 수요 추정) |
| avec quel main jouer · classement main de depart · mains à jouer | 각 10 | starting hands (ne pas jouer · meilleures · pire = `-`) |
| se coucher au poker · fold poker traduction | 20 · 20 | 정의 의도(0-3 ③) |
| quand se coucher au poker | 10 | when-to-fold |
| se coucher en anglais · fold definition · folder poker | 각 10 | 정의 의도 |
| (참고) check raise poker 260 · relance poker 90 · big blind poker 70 | | L-G · L-A 몫 |

---

## 2. 자동완성 (2250 · fr · 프랑스어·포커 항목 축어)

**positions**
- position poker: 6 max · 9 max · 8 max · a 6 · table · 5 max · table de 6 · low jack · a 8 · 6 joueurs · table 9 · 9 · utg · full ring · mp
- position au poker: places au poker · role au poker · meilleur position au poker · (나머지 = position poker와 같음)
- positions poker: positions poker 6 max · 8 max · position poker 9 max · table · placement poker · … · position poker 8 joueurs · poker positions explained · poker positions chart
- poker en position: poker etre en position · poker position · … (영어 positions 군)
- jouer en position poker: jouer hors position poker · poker en position / jouer hors position poker: poker hors position / comment jouer en position: comment jouer la position au poker
- bouton poker: bouton poker definition · poker bouton dealer · range bouton poker · position bouton poker · bouton mort poker · tableau bouton poker · etre au bouton poker · bouton cut off poker · … / position bouton poker: poker bouton signification
- cut off poker: cut off poker position · definition · range · cut off button poker · cut off traduction poker · bouton cut off poker · cut off hijack position poker · …
- under the gun poker: definition · positions · term · strategy · chart · rules · … (영어)
- 결과 0: pourquoi la position est importante au poker · hors de position poker · meilleure position poker(영어·게임만)

**strategy**
- stratégie poker: stratégie poker pdf · strategie poker en ligne🚫 · stratégie poker texas hold em · stratégie poker tournoi · strategie poker holdem · stratégie poker debutant · stratégie poker cash game · strategie poker expresso · strategie poker cash game micro limite · strategie poker texas hold em pdf · technique poker · conseil poker · (pokerogue = 비디오게임)
- comment gagner au poker: … en ligne🚫 · entre amis · red dead redemption(게임) · au casino🚫 · sur winamax🚫 · sur 1xbet🚫 · sur betclic🚫 · en cash game · menteur(다른 게임) · comment gagner facilement au poker
- comment bien jouer au poker: … en ligne🚫 · en tournoi · texas hold em · comment mieux jouer au poker · savoir bien jouer au poker · comment apprendre à bien jouer au poker · cash game
- conseils poker / astuces poker: astuce poker · guide poker pdf · conseil poker debutant · conseil poker texas hold em · conseil poker cash game · astuces poker debutant · astuce poker débutant · (winamax·betclic·rdr 제외)
- comment progresser au poker: … en ligne · progresser au poker · progresser au poker cash game
- quand relancer au poker: comment relancer au poker · qui relance au poker · relance poker règle / quand suivre au poker: comment suivre au poker · suivre au poker · suivre poker definition / quand bluffer au poker: bluffer au poker · pourquoi bluffer au poker · comment bluffer au poker / quand miser au poker: pourquoi miser au poker · quoi miser au poker
- tight agressif poker: tight aggressive poker (strategy · range chart · starting hands · vs loose aggressive …) — 영어 표기만
- 결과 0: jouer serré agressif poker · comment ne pas perdre au poker · comment jouer au poker texas holdem stratégie
- 🚫 «gagner au poker»: mots fléchés · 7 lettres(십자말풀이) · rdr2 · far cry 3 · crimson desert(게임)

**starting hands**
- quelles mains jouer au poker: avec quel main jouer au poker · quelle main ne pas jouer au poker · quelles mains ne pas jouer au poker · quelles sont les mains a jouer au poker · quelles mains jouer preflop
- quelle main jouer au poker: quelle main ne pas jouer au poker · quel main jouer poker · quelle main jouer en cash game
- mains de départ poker: mains de depart poker · meilleures mains de depart poker · tableau main de départ poker · classement main de depart poker · pire main de depart poker · probabilité main de départ poker · poker statistiques mains de départ · mains de départ omaha
- meilleures mains de départ poker: meilleurs mains de départ au poker · meilleures mains poker · … / main de départ texas holdem: mains de départ au texas hold em · main texas holdem poker

**limping**
- limp poker: limp poker definition · limp poker c est quoi · limp poker reddit · limp poker traduction · limp poker signification · limp poker term · poker limp call · poker limp strategy · over limp poker · limp jam poker · (limper poker club 77 = 클럽명)
- limper poker: limper poker def · limper poker meaning · limper poker definition
- qu'est-ce que le limp: qu est ce que limper au poker · qu est ce que limp · (limpide 등 무관)
- poker c'est quoi(와일드카드): … · limp poker c est quoi · …

**3bet**
- 3bet poker: definition · range · stat · poker 3bet size · poker 3bet 4bet · poker 3bet percentage · poker 3bet light · 3bet pot poker · poker 3bet chart · …
- 3 bet poker: definition · range · example · 3-bet poker charts · strategy · hands · 3 bet light poker · 3 bet pot poker · min 3 bet poker · **quand 3 bet au poker** · 3 bet 4 bet poker · 2 bet 3 bet poker
- c'est quoi un 3bet: c'est quoi un 3 bet au poker · c'est quoi un 3 bet
- quand 3 bet au poker: 3 bet au poker · quand 3bet · **que veut dire 3 bet au poker** · poker 3 bet definition · poker 3 bet range
- 4bet poker: 4 bet poker · definition · range · 3bet 4bet poker · 4bet sizing poker · cold 4bet poker · 4 bet chart poker · …
- squeeze poker: squeeze poker definition · squeeze traduction poker · poker squeeze play
- sur relance poker: sur relance minimum poker · comment relancer poker · relance poker règle
- 결과 0: 3bet c'est quoi · quand faire un 3bet

**cbet**
- cbet poker: definition · signification · term · poker cbet sizing · poker cbet frequency · delayed cbet poker · cbet range poker · cbet percentage poker · cbet oop poker · whats a cbet poker · (cbet poker room houston = 클럽)
- c bet poker: c bet poker definition · c bet range poker · continuation bet poker · continuation bet poker definition · delayed c bet poker · poker c bet strategy · c bet sizing poker
- continuation bet poker: definition · meaning · poker continuation bet strategy · continuation betting poker
- c bet c'est quoi: c'est quoi cbet · **c est quoi cbet au poker** · cbet signification · **cbet signification poker** · cbet origine · cbet def · cbet definition
- 🔴 mise de continuation poker: **결과 0** → 검색 형태는 «cbet / c-bet / continuation bet»

**fold (0-3 ③)**
- fold poker: **traduction · definition · en francais · in french** · table · gif · meme · term · hand · cards · (외국어 4)
- se coucher au poker: se coucher au poker en anglais · quand se coucher au poker · **que signifie se coucher au poker · que veut dire se coucher au poker** · quand peut on se coucher au poker · **peut on se coucher au premier tour poker · peut on se coucher sans miser au poker**
- quand se coucher au poker: se coucher au poker · … en anglais · quand peut on se coucher au poker · **quand faut il se coucher au poker**
- 결과 0: quand folder poker · quand faut il se coucher au poker(꼬리 없음)

---

## 3. SERP 상위 10 + PAA (2250 · fr · desktop)

공통: **featured snippet 20개 쿼리 전부 없음** · AI overview = «quelle main ne pas jouer au poker»·«jouer hors position poker» 2개만 · 지식 패널 = «Position»(position poker·position au poker) · «Continuation bet»(cbet·continuation bet) · «3Bet Poker»(앱).
유형: 글 · 룸(운영사) · 포럼 · 사전 · 위키 · 영상 · 앱 · 영어 · 스팸.

### 3-1. position poker (590)
1 fr.pokernews.com «La sélection de mains préflop et l'équité post-flop» 글 · 2 partypoker.com «Comment jouer au poker hold'em no-limit en heads up» 룸 · 3 ruedesjoueurs.com «Stratégie Poker - Jeu Préflop et Mains de départ»(URL은 축구 베팅 경로 — 색인 이상) · 4 fr.pokerlistings.com «10 Façons dont les Débutants au Poker perdent de l'Argent» · 5 reddit «Comment appelle-t-on le joueur/la position qui mise en ...» · 6 poker-toolkit.com «[TOP] Les 10 questions meilleures pour analyser sa main ...» · 7 poker-academie.com «Le gap concept (revival)» · 8 pokercode.com 영어 · 9 pokerskill.com 영어 · 10 automaticpoker.com 영어
- **PAA**: Quel est l'ordre au poker ? · Qu'est-ce que la position cut-off au poker ? · Quelle est la position UTG au poker ? · Quelles sont les techniques les plus efficaces pour gagner au poker ?
- 판독: 590 헤드에 **프랑스어 «positions» 전용 글 0**(영어 3).

### 3-2. position au poker (140)
1 ruedesjoueurs · 2 poker-academie gap concept · 3 pinterest «Poker Button Position» · 4 pokercode 영어 · 5 reddit «quand ne devrais-je pas 3bet ? : r/poker» · 6 automaticpoker 영어 · 7 youtube Shorts «What is Position in Poker #poker» · 8 pokercoaching.com 영어 · 9 apps.apple.com «Poker Solver Pro» · 10 poker.stackexchange.com
- **PAA**: Comment s'appellent les différentes positions au poker ? · Quelle est la position UTG au poker ? · Qu'est-ce que la position cut-off au poker ? · C'est quoi la range au poker ?

### 3-3. position poker 6 max (경량)
nlh.poker(영어) · poker-academie 포럼 «[Article technique] Quelles mains relancer en MTT 6-max ...» · mystrikingly(스팸성) · scribd · pokertracker 포럼 · 888poker 영어 · circus-poker(대회) · blackrain79 · udemy · pokernews(뉴스) — 프랑스어 «6-max 좌석» 글 0.
- **PAA**: Qu'est-ce que la position cut-off au poker ? · Quel est l'ordre au poker ? · Quel est l'ordre des joueurs au poker ?

### 3-4. cut off poker (170 · 경량)
1 pokerstars.fr «Cut-Off Poker : Définition, Position & Stratégie»(크롤러 404) · 2 fr.wikipedia «Position (poker)» · 3 fr.pokernews «Cutoff | Dictionnaire Poker» · 4 cours-et-fiches «Les Positions au Poker : UTG, Cutoff, Bouton» · 5 clubpierrecharron «Lexique du Poker» · 6 gipsyteam 영어 · 7 thejokerhouse «Positions à la table de poker : UTG, bouton, blindes» · 8 clubpoker «Cut-off - Lexique poker» · 9 youtube · 10 pokersciences «Les positions au poker et les stratégies associées»
- **PAA**: Que signifie ITM au poker ? · Que signifie le terme "shove" au poker ? · Comment s'appellent les différentes positions au poker ?
- 관련: High jack poker · Position poker 6-max · Position poker 9-max · Termes poker en français · Les positions au poker · UTG poker · Position poker 8 max

### 3-5. jouer en position poker (0-3 ②)
1 pokerstars.fr «Middle Position au Poker : Stratégie et Équilibre» · 2 pokerstars.fr «Comment Miser au Poker comme un Pro» · 3 youtube «Les mains de départ par Benny» · 4 poker-academie 포럼 «Comment jouer hors de position» · 5 coupdepoker «Notion de position lors des tours de parole au Poker» · 6 pokerpro.fr «Positions au poker : ordre des places et rôle du bouton» · 7 clubpoker «Position - Lexique poker» · 8 pokerskill «Positions au poker : chaque siège et ce qu'il change» · 9 partypoker.fr «Comment jouer au poker: découvrir les règles du poker»
- 영상: YoH ViraL «How to PLAY PROPERLY based on POSITIONS» · Tuto-Poker «La position au poker (1)» · Kill Tilt «POKER BASICS #3: POSITION, PROFILING, EQUITY»
- **PAA**: Que signifie MTT au poker ? · C'est quoi la pire main au poker ? · Quel est le but du poker ? · Qui doit parler en premier au poker ?

### 3-6. jouer hors position poker (경량 · AI overview 있음)
youtube Shorts «J'affronte un joueur AGRESSIF en étant hors de position !» · pokernews «L'importance de jouer en position par Calvin "cal42688" ...» · pokerstars «Comment jouer les paires de poche au poker» · reddit «Est-il préférable de c-bet en position ?» · pokerstrategy «Comment jouer JJ et TT» · clubpoker 포럼 · pokerpro «Quand suivre au poker» · poker-academie 포럼 · clubpoker PDF «Importance de la position» — «hors de position» 전용 글 0.
- **PAA**: (축구 hors-jeu 1) · Qu'est-ce que la position cut-off au poker ? · Quelles sont les techniques les plus efficaces pour gagner au poker ? · Comment s'appellent les différentes positions au poker ?

### 3-7. stratégie poker (110)
1 pokerstars.fr «Conseils stratégiques, tactiques et astuces pour le poker»(크롤러엔 영어판) · 2 clubpoker «STRATÉGIE DU POKER - Club Poker»(허브) · 3 lescahiersdelinnovation «Quelles sont les stratégies avancées au poker ?» · 4 fr.wikipedia «Stratégie au poker» · 5 winamax «Poker Texas Holdem | découvrez la stratégie sur Winamax» · 6 pokersciences «7 stratégies intéressantes au poker» · 7 pokerlistings «10 techniques poker essentielles du Hold'em pour l'isolation» · 8 partypoker.fr «18 astuces poker et conseils pour débutants» · 9 pokernews «Les meilleures stratégies avancées de poker»
- 영상: Skyyart «Les 17 Erreurs À NE JAMAIS FAIRE pour Gagner au Poker ...» · Kill Tilt · LUCKYSPIN - POKER FR
- **PAA**: Quelles sont les stratégies efficaces pour gagner au poker ? · Quelles sont les astuces pour gagner au poker en ligne ?🚫 · Comment bien miser au poker ? · Quels sont les fondamentaux du poker ?
- 관련: Technique pour gagner au poker en ligne · Stratégie tournoi Poker · Comment gagner au poker entre amis · Poker techniques avancées · Comment jouer au poker · …

### 3-8. comment gagner au poker (170)
- 영상 팩이 **1위 위**: Skyyart «Les 17 Erreurs …» · Skyyart «Tutoriel PokerComment Jouer & Gagner au Poker» · Kill Tilt «The Most Effective Technique to Win at Poker»
- **PAA**: Comment puis-je bien miser au poker ? · Comment bien débuter au poker ?
- 1 pokerstars.fr(위와 같음) · 2 coupdepoker «10 astuces essentielles pour mieux jouer au Poker» · 3 reddit «Des conseils pour s'améliorer au poker en ligne» · 4 pokerclublesoler «10 astuces pour gagner au poker»(지금은 클럽 홈 — 낡은 색인) · 5 clubpoker «JOUER AU POKER SÉRIEUSEMENT - Stratégie avancée» · 6 scienceetonnante «Une stratégie infaillible au poker»(2015) · 7 winamax · 8 wikipedia
- 관련: … · Comment jouer au poker débutant · Gagner 100 euros par jour au poker🚫 · Poker techniques avancées

### 3-9. quelles mains jouer au poker (50) · mains de départ poker (30) · quelle main ne pas jouer (경량)
- quelles mains jouer: 1 clubpoker «LES MAINS DE DÉPART - Stratégie du poker» · 2 winamax «École de poker : comment évaluer une main ?» · 3 youtube «Poker: Which Hand to Play» · 4 cours-et-fiches «Mains de Départ au Poker : Quelles Mains Jouer ? (Guide ...» · 5 unibet «Ranges de Poker : tableaux préflop, sélectionner ses mains» · 6 reddit «Alors, je suis débutant. Quelles mains je devrais jouer ...» · 7 poker-toolkit «[RANGE POKER] Tableaux des mains de départ en MTT, ...» · 8 pokerstars «Classement des mains de poker et tableaux» · 9 pokerstrategy «Classement des mains de poker et tableaux …» · 10 wikipedia «Main au poker»
  - **PAA**: Quelle main ne pas jouer au poker ?
  - 관련: Tableau des mains à jouer au poker · Classement des mains au poker préflop · Ordre des mains au poker · Tableau main de départ poker · Les mains au poker PDF · Meilleur main poker
- mains de départ: clubpoker · pokerstars «Les mains de départ au poker - PokerStars Learn FR»(크롤러 404) · cours-et-fiches · coupdepoker «Conseils pour choisir les mains de départ au Poker» · winamax · poker-toolkit · partypoker «Tableau des mains de départ au poker» · unibet · wikipedia
  - 영상: PokerStars en Français «Les mains de départ par Benny» · Tuto-Poker · YoH ViraL
  - **PAA**: Comment s'appelle la mise de départ au poker ?(블라인드 — L-A) · Quelle main ne pas jouer au poker ? · Quelle est la mise de départ au poker ?
  - 관련: … · Tableau main poker pourcentage · Les mains au poker PDF
- quelle main ne pas jouer(**AI overview**): winamax · partypoker «Apprenez à éviter les mains dangereuses au poker» · clubpoker · youtube · reddit «Pires mains au poker» · pokerstars · cours-et-fiches · unibet · pokerlistings «Quelle est la pire main et la vraie poubelle au poker ?»
  - **PAA**: Quelle est la meilleure main au poker ? · 관련: Main la plus faible au poker · Meilleur main de départ poker

### 3-10. limp poker (260) · limper poker (170)
- limp poker: 1 reddit «Quoi faire avec des as assortis quand 5-6 joueurs limp» · 2 wam-poker «Tournoi: Le limp en table à 6»(포럼 2009) · 3 poker-academie «Le jeu SB vs BB (4) [BB face à limp]»(영상) · 4 clubpoker «Over limp - Espace débutants»(포럼) · 5 poker-academie «Le limp au omaha»(포럼) · 6 clubpoker «MTT 5euros : habitude de jeu vs limp» · 7 poker-academie «Le jeu SB vs BB (2) [Open Limp]»(영상)
  - **PAA**: Qu'est-ce qu'un limp au poker ? · Qu'est-ce qu'un shove au poker ? · Que signifie "itm" au poker ? · Que signifie "cut off" au poker ?
- limper poker: wam-poker «Le limp est il une preuve de faiblesse?»(포럼 2008) · reddit «Question GTO : Le limping» · pokerstars «Comment repérer les joueurs faibles à votre table»(크롤러엔 영어) · clubpoker PLO · natural8·somuchpoker 영어 · poker-academie 포럼 · pokerpro 허브 · kill-tilt «Caracteriser les Fishs»
  - **PAA**: C'est quoi Shove au poker ? · Que signifie "limp" en français ? · Que signifie "cut off" au poker ? · Que signifie "itm" au poker ?
- 판독: 17칸에 **프랑스어 limp 해설 글 0**.

### 3-11. 3bet poker (170) · c'est quoi un 3 bet au poker
- 3bet poker: 1 poker-academie «Stratégie poker : Le 3bet pour les débutants» · 2 cours-et-fiches «Le 3-bet au poker : surrelance, ranges et stratégie» · 3 pokerstars «Le 3-bet pré-flop - PokerStars Learn FR»(크롤러 404) · 4 clubpoker «3b ou 3bet - Lexique poker» · 5 pokernews «Three-Bet | Dictionnaire Poker» · 6 pokerlistings «Le 3-Bet Light | Les 10 Coups Essentiels du Texas Hold'em» · 7 kill-tilt 포럼 «Construire ses range 3BET …» · 8 play.google «3Bet Poker»(앱) · 9 pokerstars «Maîtriser le 3-bet au poker: Guide stratégique»(크롤러 404) · 10 winstar 영어
  - **PAA**: (칩 배분 — 무관) · C'est quoi la range au poker ? · C'est quoi Shove au poker ?
  - 관련: 4-bet poker · C-bet poker · Shove poker · Range poker · Range 3bet 6-max · Sizing poker
- c'est quoi un 3 bet: 위 글들 + pokerlistings «3 bet poker: Définition d'un terme au poker lexique» · rmcsport «Le "3bet light", qu'est-ce que c'est?»
  - 영상: Kill Tilt «Une arme cruciale au Poker - Le 3bet light» · Winamax «Jouer les 3-BET hors de position Avec _WINDA» · Kill Tilt «POKER VOCABULARY (Cbet, check-raise, 3-bet...»
  - **PAA**: C'est quoi un 3 bet poker ? · C'est quoi la range au poker ? · 관련: … · **Squeeze au poker**

### 3-12. cbet poker (110) · continuation bet poker (70)
- cbet: 1 poker-academie 포럼 «Stat de cbet turn = stat 2ème barrel?» · 2 purepokercoaching «vs Cbet GTO»(유료 영상) · 3 twoplustwo 영어 · 4 igaming.org 영어 · 5 reddit «Quel est ton fold to cbet% ? …» · 6·8 servicos.ibama.gov.br(🔴 기생 스팸 2) · 7 educapoker(스페인어)
  - 영상: Poker Académie — Paapillon «Paapillon reprend les bases : le Cbet - Partie 1» · JeffBluffley «Le CBet en Pot 3-bet OOP & la défense IP» · «Pots 3bet : Cbet en position & Défense Hors Position»
  - **PAA**: Qu'est-ce que le "cbet range" au poker ? · Que signifie "bet" au poker ?
  - 판독: 프랑스어 해설 글 **0**.
- continuation bet: 1 poker-bluffe «Le continuation bet au Poker» · 2~6 영어(pokerstars.uk · bluffingmonkeys · pokervip · reddit · betmgm) · 7 animateur-esport.fr «PMU BLOG POKER … Comment utiliser le Continuation Bet ?»(🔴 기생 · 본문 0) · 8 viverinvestirportugal(🔴 무관) · 9 youtube · 10 sallesdepoker.eu «Le continuation bet au Poker»(1위 미러 의심)
  - **PAA**: Que signifie "bet" au poker ? · C'est quoi un 3 bet poker ? · Qu'est-ce que le "cbet range" au poker ?

### 3-13. fold poker (140) · se coucher au poker (20) · quand se coucher au poker (10) — 0-3 ③
- fold poker: slowplay.store 영어 상점 · poker-academie 포럼 4 · orangegames 고객센터 · 888poker «Fold - Poker Definition» · wordreference «to fold (poker)»(번역) · casinobarcelona(스페인어)
  - 영상: SmartPokerStudy · PartyPokerTV «KNOWING WHEN TO FOLD» · «FOLD - Poker Actions Explained #shorts»
  - **PAA**: Quel est le coup le plus fort au poker ? · **Que signifie "se coucher" au poker ?** · Que signifie "raise" au poker ? · Pourquoi dit-on tapis au poker ?
  - 관련(영어로 나옴): When to fold in poker pre flop · Poker when to fold chart · Poker folding strategy · Fold pre
- se coucher: clubpoker «POKER ZEN» · unibet «Bluff au Poker : Définition, Techniques et quand l'utiliser» · pokerlistings «L'importance du sommeil …»(잠 오해) · pokerstars «3 conseils pour jouer en position haute …» · reddit «"si je me couche, montrez-vous ?"» · youtube Shorts · pokernews «WPT Global : Comment Faire un Bon Fold au Poker ?» · gusandco(2010) · pokerstars «Voler les Blinds …» · sites.google
  - **PAA**: Que signifie "se coucher" au poker ? · Comment s'appellent les différentes positions au poker ? · Que signifie être en tilt au poker ? · Pourquoi dit-on tapis au poker ?
- quand se coucher: pokerlistings «Quand et comment observer ses adversaires …» · clubpoker POKER ZEN · unibet bluff · reddit «Vous suivez toujours les tapis avec des Rois ou des As …» · cours-et-fiches «Le Bluff au Poker : Stratégie, Timing et Psychologie» · pokerlistings 잠 · pokerstars «La Course Episode 13 – 5 Conseils pour le Jeu Post-Flop» · pokerqz 규칙 · instagram
  - **PAA**: Que signifie "se coucher" au poker ? · Comment s'appellent les différentes positions au poker ?
  - 판독: 전용 글 **0** — 의도 매칭 실패.

---

## 4. 원문 정독 (H1~H3 축어)

### 4-1. positions / position-play
**cours-et-fiches — «La Position au Poker : Guide Complet par Position»** (≈1,640단어 · 표 3 · FAQ · 2026-02-28 · 경험담 0)
- H2 1. Pourquoi la position est si importante · 2. Les positions en 6-max · 3. Les positions en Full Ring (9-max) · 4. Chaque position en détail (H3 UTG (Under The Gun) · Hijack (HJ) · Cutoff (CO) · Bouton (BTN) · Petite blinde (SB) · Grosse blinde (BB)) · 5. Pourcentage de mains par position · 6. Stratégie par position (H3 En position précoce (UTG, HJ) : la discipline · En position tardive (CO, BTN) : l'agression · En Small Blind : 3-bet or fold · En Big Blind : défense calibrée) · 7. Les erreurs fréquentes · Questions fréquentes
- FAQ: Quelle est la meilleure position au poker ? · Quelle est la pire position au poker ? · Combien de mains dois-je jouer au Bouton ? · Les positions changent-elles en tournoi ? · Pourquoi dit-on « en position » et « hors de position » ?
- 🔴 §13: 표 «UTG ~15% — 77+, ATs+, KTs+, QTs+, JTs, AJo+, KQo». 직접 셈: 페어 8종×6=48 · 수티드 10종×4=40 · 오프 4종×12=48 → **22종(169 중 13.0 %) · 136콤보(1 326 중 10.3 %)**. «~15 %»는 어느 기준과도 안 맞고 기준도 미표기. 6-max 표엔 LJ 없음.

**pokerskill.com/fr — «Positions au poker : chaque siège et ce qu'il change»** (≈2,240 · 표 1 · FAQ · **2026-10-03** · tu 2인칭 · 앱 홍보)
- H2 En bref · Les sièges, comptés à rebours depuis le bouton · Pourquoi parler en dernier change tout · Le bouton, le siège le plus rentable · Les blindes, là où partent les jetons · Quand la logique de position te trompe · Trois questions avant d'entrer dans un pot · La place de la position dans ton jeu · Questions fréquentes
- FAQ: Quelles sont les positions au poker ? · Quelle est la meilleure position au poker ? · Pourquoi le premier siège à parler est-il le pire ? · La grosse blinde est-elle une bonne position ?

**pokersciences — «Les positions au poker et les stratégies associées»** (≈2,050 · FAQ 없음)
- H2 Liste des positions en 6-max au poker · Les différentes catégories de positions · Les avantages de la position au poker (H3 Agir après vos adversaires et obtenir plus d'informations · Contrôler la taille du pot · Faciliter les bluffs · Voir plus de cartes gratuites · Calculer les cotes du pot) · Comment choisir les mains à jouer selon sa position au poker ? (H3 Positions précoces · intermédiaires · tardives · Blindes) · Comment bien choisir sa position ? · Quelle position est la plus profitable au poker ?
- 강점: «6 600 mains» 바튼 vs SB 수익 곡선 2장(증거형 장치).

**coupdepoker — «Notion de position lors des tours de parole au poker»** (≈900 · 2024-02): H2 Position au poker et tours de parole · Position et mises · Stratégie de position au poker
그 외: pokerpro.fr 포지션(2017-03 · 본문 H2 없음) · wikipedia «Position (poker)»(표 3 · H2 Liste des positions) · pokernews Calvin Anderson(2016 · 420단어).

### 4-2. strategy
**winamax — «Texas Holdem Poker : la stratégie»** (≈2,980 · 이미지 25 · 표·FAQ 0): H2 Avant de jouer au Texas Holdem, commencez par évaluer votre main · Holdem Poker: la "position" avant tout ! · Quand miser, quand relancer, et combien?... · Quand relancer ? · Comprendre la notion de risque et de cote · En résumé
**pokersciences — «7 stratégies intéressantes au poker»** (≈2,260): H2 1. Jouer moins de mains préflop · 2. ABC Poker : une stratégie rentable à tous les niveaux · 3. Comprendre et accepter la variance · 4. Ne pas être le premier à limp · 5. Jouer agressif de manière stratégique (H3 Le semi-bluff : votre première arme d'agression) · 6. Utiliser la position à votre avantage · 7. Choisir les parties les plus profitables · Quelle est la stratégie optimale au poker ?
**coupdepoker — «10 astuces essentielles pour mieux jouer au poker»** (≈1,470 · 2025-06): H2 Réduisez le nombre des mains que vous jouez · Une autre astuce poker : changez de style · Soyez attentif pour bien jouer au poker · Surveillez le temps de réponse des joueurs · Veillez à miser intelligemment · Faîtes attention à la position des joueurs · Astuce poker : adaptez vos mises à la partie · Faîtes des pauses pour un jeu optimal · Utilisez le bluff à bon escient · Laissez vos problèmes à la porte
**pokerlistings — «10 Façons dont les Débutants perdent de l'Argent»** (≈2,780 · 2025-02): H2 1- Ignorer la position · 2- Etre trop agressif · 3- Donner trop d'indices (Tells) · 4- Mal ajuster ses mises · 5- Jouez trop de mains · 6- Ignorer le nombre de joueurs à la table · 7- Jouer en ayant peur de perdre son argent · 8- Suivre comme si votre vie en dépendait · 9- Laisser les émotions dicter votre jeu · 10- Surévaluer les cartes assorties · Le Top 5 des façons de perdre son tapis au poker
**partypoker.fr — «18 astuces poker et conseils pour débutants»** (≈1,000 · H3 18개 · 수치 0): Soyez attentif · Comptez les jetons · … · Soyez un "relanceur", pas un "suiveur" · … · Jouez de votre position · Battez les tyrans
**lescahiersdelinnovation** (≈790 · 2024-08): H2 N'utilisez pas la même stratégie · Le bouton, une position qui aide à prendre de bonnes décisions · Jouez serré · Misez intelligemment · Bluffez de façon intelligente
**clubpoker «STRATÉGIE DU POKER»**(exa): 링크 허브 — H3 Débuter au poker : construire des bases de jeu solides · Dois-je miser ? · Les mains de départ · L'EV et la variance au poker · Le resteal · La défense de blind · Le 4bet preflop en cash-game · Le continuation bet · Continuation bet : l'illusion de l'initiative
- 근거 제외: pokerstars.fr strategy(영어판 렌더) · pokerclublesoler(리다이렉트) · clubpoker «JOUER AU POKER SÉRIEUSEMENT»(403).

### 4-3. starting hands
**cours-et-fiches — «Les mains de départ au Texas Hold'em»** (≈3,580 · **표 13** · FAQ · 2026-02-28)
- H2 1. La notation des mains · 2. La grille 13×13 des mains de départ · 3. Les 4 catégories de mains · 4. Classement par tier : de la meilleure à la pire · 5. Quelles mains jouer par position (H3 UTG — ~15% des mains · HJ — ~19% · CO — ~27% · BTN — ~43% · SB — stratégie spéciale · BB — défense large) · 6. Suited vs Offsuit : pourquoi ça change tout · 7. Les connecteurs assortis : le cas spécial · 8. Les mains pièges à éviter · 9. 5 principes fondamentaux (H3 … Principe 3 : Relancer ou coucher — ne « limpez » pas) · 10. Les erreurs classiques des débutants · Questions fréquentes
- FAQ: Quelle est la meilleure main de départ au poker ? · Faut-il toujours relancer avec AA et KK ? · Pourquoi 72o est-elle considérée comme la pire main ? · AKs ou JJ : quelle main est la plus forte ? · Combien de mains dois-je jouer en moyenne ? · Ces ranges changent-ils en tournoi ? · Qu'est-ce qu'un « range chart » et où en trouver ?
- §13: «1 326 combinaisons … 169 mains distinctes» ✅ · UTG «~15 %» = 4-1과 같은 불일치.
**clubpoker — «Les mains de départ»**(exa · Dicomaniaque): 목차 Pourquoi ne pas jouer toutes les mains ? · Pourquoi ne pas jouer seulement les paires de rois et les paires d'as ? · Quels facteurs prendre en compte pour décider de jouer une main ? · Concrètement, quelles mains dois-je jouer ? · Ajustements de l'éventail · Conclusion — §13 «22100 flops» ✅(52·51·50/6) · AA/KK «2 * 12 / (52 * 51) = 0.90%» ✅(12/1 326).
**unibet — «RANGES DE POKER : TABLEAUX PRÉFLOP …»**(운영사 · FAQ): H2 QU'EST-CE QU'UNE RANGE DE POKER ? · COMMENT LIRE UN TABLEAU DE RANGES PREFLOP · LES RANGES D'OUVERTURE PAR POSITION · LES RANGES DE DÉFENSE FACE À UNE RELANCE · RANGES EN CASH GAME VS EN MTT · ADAPTER SA RANGE SELON LA PROFONDEUR DE TAPIS · ERREURS FRÉQUENTES … — FAQ 중 «Que se passe-t-il si un adversaire limpe avant mon tour de parole ?»
**coupdepoker** «Conseils pour choisir les mains de départ»(≈760): H3 Les mains de départ premiums · à potentiel · pièges · poubelles / **partypoker** «Comment jouer les mains dangereuses»: As-as · Valet-valet · Roi-valet · Paires contre overcards · Les petites paires … / **pokerlistings** «Quelle est la pire main …»(2026-03): H2 7-2, la poubelle ultime au poker ? Pas sûr… · L'As à la con, un classique parmi les classiques.

### 4-4. limping
정독할 프랑스어 해설 글 없음 — 포럼 2(wam-poker 2008-12 · 2009-01 스레드). 인접 글 축어: pokersciences «Le limp, c'est-à-dire entrer dans un pot en payant simplement la grosse blinde sans relancer, est souvent signe de faiblesse …» · cours-et-fiches «ne « limpez » pas» · unibet «un adversaire limpe … Relancer permet d'isoler le limpeur». 용어 형태: limp · limper · limpez · limpe · **limpeur** · over limp · open limp · limp jam.

### 4-5. 3bet
**poker-academie — «Stratégie poker : Le 3bet pour les débutants»** (≈1,800 · 1인칭 필자): H2 Définition du 3bet · Les taux de 3b par limite sur Party Poker · La force du 3b en NL2 et NL4 · Le 3b est-il respecté pour la force qu'il représente ? · 3b pour value, ne 3b pas en bluff · Viser 4 à 5% de 3b mergés vs les récréatifs · Viser 1,5% de 3b polarisés vs les bons regs · C'est quoi un bon reg pour un 3b pot ? · 3b uniquement pour value les regs inconnus · En résumé
- 축어: «bouton ouvre à 3bb et je décide en BB de le relancer à 11bb» · 트래커 «NL2 3,9% / NL4 3,6% / NL10 4,7% / NL25 5,0%»(필자 표본).
**cours-et-fiches — «Le 3-bet au poker : surrelance, ranges et stratégie»** (≈2,600 · **표 10** · FAQ · 2026-02)
- H2 1. Qu'est-ce qu'un 3-bet ? · 2. Pourquoi 3-bet ? · 3. Le sizing du 3-bet · 4. 3-bet value vs 3-bet bluff · 5. Ranges de 3-bet par position · 6. Le concept de bloqueur (H3 Pourquoi A5s est le 3-bet bluff parfait) · 7. Défense face au 3-bet · 8. Le 4-bet : surrelancer un 3-bet · 9. Les erreurs fréquentes · 10. Questions fréquentes
- FAQ: Quelle est une bonne fréquence de 3-bet ? · Dois-je 3-bet JJ face à un open d'UTG ? · Pourquoi utilise-t-on des As suited comme bluffs et pas des connecteurs ? · Le 3-bet fonctionne-t-il pareil en tournoi ? · Comment savoir si un adversaire me 3-bet trop souvent ? · Puis-je 3-bet en position précoce ?
- §13 산수: IP «3 × 2,5 = 7,5 BB» ✅ · OOP «4 × 2,5 = 10 BB» ✅ · «2 callers … 3 × 2,5 + 2 × 2,5 = 12,5 BB» ✅. 용어: 정식어 **«surrelance»** H1 병기.
**pokerlistings — «Le 3-bet light»**(2025-02): H2 Le 3-Bet Light fait proprement · Les Bonnes Mains pour le 3-Bet · Le 3-Bet Light équilibre et fait varier votre éventail · Le 3-Bet Light en Action. (pokerstars.fr 3-bet 2건 = 크롤러 404 · 미정독)

### 4-6. continuation-bet
**poker-bluffe — «Le continuation bet au poker»** (≈760 · 표 2 · 날짜 없음): H2 Définitions et principes de base · Application du continuation bet · Mise en garde relative au continuation bet · Utilisation du continuation bet
- 🔴 D유형 2건(축어): ① «Une position intermédiaire semble être ici la meilleure option.»(c-bet에서 IP보다 «중간 포지션» 우위 — 근거 없음) ② «le continuation bet doit être absolument évité … Il s'agit du tirage d'un flop monocolore»(절대 금지 단정 — 우리 `monotone-board-strategy`는 같은 보드 계열을 «작게 또는 체크, 크게는 거의 안 함»의 **사이즈·빈도 문제**로 다룬다. 단 그 글 스팟은 BB 선행 액션이므로 c-bet 수치로 옮길 땐 스팟 확인).
**sallesdepoker.eu**(≈700 · 표 2 · 이미지 6 — 1위와 제목·구조 동일): H2 Principes de base du continuation bet · Astuces et techniques du continuation bet.
프랑스어 c-bet 교육은 **영상**(Poker Académie 3편)이 받고 있다.

### 4-7. when-to-fold
**pokernews — «WPT Global : Comment Faire un Bon Fold au Poker ?»** (≈910 · 2023-06 · 운영사 제휴): H2 Connaître les mains à coucher pré-flop · Le danger de jouer de mauvaises mains de départ · Quand peut-on jouer de mauvaises mains au poker ? · Rejoignez WPT Global aujourd'hui🚫 — 프리플롭만, 팟 오즈 임계 없음.
**pokerpro — «Quand suivre au poker ?»**(2019-06): H2 Le préflop · Le post flop.
**cours-et-fiches — «Le Bluff au Poker»**(≈3,200 · 표 5 · FAQ): H3 «Condition 1 : L'adversaire est capable de se coucher» · «La Minimum Defense Frequency (MDF)» — 상위 글 중 «언제 접나»를 수식(MDF)으로 다룬 유일한 글.

---

## 5. 장단점 표

| 축 | 공통 강점(갖출 것) | 공통 약점(차별화) |
|---|---|---|
| 구조 | cours-et-fiches형 번호 H2 10 + 표 3~13 + FAQ 5~7 · 6-max/9-max 이원 표 | PAA 문구를 H2로 쓴 글 0 · 질문형 H2 드묾 |
| 수치 | 3-bet 사이징 산수 · 1 326/169 | % 기준(타입/콤보) 미표기 · UTG «~15 %» 열거 불일치 |
| 경험 | poker-academie 트래커 3b% · pokersciences 6 600핸드 곡선 | 나머지 1인칭·실전 핸드 0 |
| 최신성 | pokerskill(2026-10-03) · cours-et-fiches(2026-02) | pokernews 2016 · pokerpro 2017/2019 · wam-poker 2008~09 |
| 의도 | 3bet·mains de départ는 정의+전략+FAQ | **limp · cbet · quand se coucher · hors de position** 전용 FR 글 0 |
| 정확성 | 산수 대부분 ✅ | c-bet «position intermédiaire»·«monocolore 절대 금지» · 낡은 색인(pokerstars 404 · 리다이렉트) |
| 표기 | 정식어 병기(surrelance · se coucher · bouton) | 포럼형 «3b»·«cbet» 약어만 — 초보 PAA(«Que signifie …») 미응답 |

---

## 6. 우리 글 대조 (EN 마스터 → FR 의도)

| 글 | EN이 이미 이기는 점 | FR 의도 중 EN에 없는 것 |
|---|---|---|
| strategy | 5 décisions 골격 · 6 leaks · TAG · 수학 · FAQ 14 | «Comment bien miser au poker ?»(PAA 2회) · «Quels sont les fondamentaux du poker ?» · «Comment bien débuter au poker ?» · progresser · PDF 요약 |
| positions | 좌석 지도 · 약어 · seat number vs position · 인원수별 · FAQ 7 | «Comment s'appellent les différentes positions au poker ?»(PAA 최다) · «Quel est l'ordre (des joueurs) au poker ?» · 8 max/5 max · MP 표기 |
| position-play | IP/OOP · best/worst · UTG limp vs raise · OOP 플레이 · c-bet 빈도 · SB · FAQ 10 | «Pourquoi dit-on « en position » et « hors de position » ?» · «hors de position» 표기 · 🔴 EN H2 «Opening Ranges by Position: The Strategy Chart» = 도구 경계 |
| starting-hands-chart | TOP10 · 9-max 차트 · 6-max · % · worst · PDF · 퀴즈 · FAQ 8 | «Quelle main ne pas jouer au poker ?»(PAA 3회 · AIO) · «Quelle est la meilleure main au poker ?» · «AKs ou JJ» · 🔴 EN H2 «GTO Preflop Charts vs Beginner Charts» — 우리 차트를 GTO라 부르지 말 것 |
| limping | 정의 · open/over-limp · 4 reasons · 예외 · limp-reraise · fish tell · FAQ 9 | «Que signifie "limp" en français ?» · «Qu'est-ce qu'un limp au poker ?» · 정의·번역 의도 우세 · «face à plusieurs limpers» |
| 3bet | 정의 · linear/polar · 사이징 수식 · 결정표 · squeeze · facing · 실전 · FAQ 15 | «C'est quoi un 3 bet poker ?» · «surrelance» · «C'est quoi la range au poker ?»(PAA 2회) · «3bet light» |
| continuation-bet | 정의 · 낡은 조언 반박 · 텍스처 · 빈도 · 사이징 · OOP · 멀티웨이 · delayed · FAQ 12 | «Qu'est-ce que le "cbet range" au poker ?»(PAA 2회) · «Que signifie "bet" au poker ?»(PAA 2회) · «cbet signification / c est quoi» |
| when-to-fold | street별 · 팟 오즈 임계 · 좋은 패 접기 · 심리 · 체크 · FAQ 12 | «quand faut il se coucher au poker» · «quand peut on se coucher»(규칙 → betting-actions) · «Que signifie "se coucher"»(정의 → betting-actions) |

도구: `/fr/hand-chart` seo.title «Tableau range poker — mains de départ par position» · H1 «Tableau range poker par position» · keywords에 «mains de départ poker» 포함 / `/fr/glossary` «Lexique du poker …» — Limp · limper · 3-bet · C-Bet · Continuation Bet · Fold · folder · Position · Bouton (BTN) 항목 있음 / `/fr/calculator`(팟 오즈 — when-to-fold 앵커) / `/fr/solver`(c-bet·3bet pot 스팟 — cbet·3bet 앵커). 현 fr betting-actions H2 «C'est quoi se coucher (le fold) au poker ? Peut-on se coucher à tout moment ?» 존재.

---

## 7. 처방 (레인 A 재료 · 🔴 최종 seoTitle·desc는 쓰지 않는다)

### 7-1. holdem-positions (우선 1)
- 주력어: «positions au poker / position poker»(590) 앞 + «UTG · cut-off · bouton». 훅: 한 판마다 이름이 바뀌는 자리(EN) · 6-max와 9-max에서 같은 자리가 다른 이름.
- H2(EN→FR): «What Are the Positions … (Full Seat Map)» → **«Comment s'appellent les différentes positions au poker ?»** · «What Is UTG» → **«Quelle est la position UTG au poker ?»** · «The Cutoff and the Button» → **«Qu'est-ce que la position cut-off au poker ? Et le bouton ?»** · «Who Acts First» → **«Quel est l'ordre des joueurs au poker ? Qui parle en premier ?»**(진행 순서 자체는 L-A game-order 앵커) · «By Player Count» → **«Positions au poker en 6-max, 8-max et 9-max (full ring)»** · Hijack/Lojack 유지 + «middle position (MP)».
- FAQ: Quelle est la position UTG au poker ? · Qu'est-ce que la position cut-off au poker ? · Quel est l'ordre des joueurs au poker ? · Quelle est la meilleure position au poker ?(1줄 + position-play 앵커) · Les positions changent-elles à chaque main ?
- 차별화: 6/8/9-max 3열 좌석표(경쟁은 6/9 · LJ 누락) · 좌석 번호 vs 포지션 · `/fr/hand-chart` 앵커.
- 카니발: 전략 해설 → position-play 앵커 · 레인지 표 금지.

### 7-2. holdem-strategy (우선 2)
- 주력어: «stratégie poker» + **«poker stratégie»(320)** 어순 둘 다 + «comment gagner au poker»(170). 훅: «팁 18개가 아니라 결정 5개»(partypoker 18 · coupdepoker 10과 대비).
- H2: EN 첫 H2 → **«Comment gagner au poker ? Pas avec des astuces, avec 5 décisions»** · 추가 **«Quels sont les fondamentaux du poker ?»**(직답 박스로 흡수 가능) · Decision 3 + **«Comment bien miser au poker ?»** · 6 Leaks → «Les 6 erreurs de débutant qui coûtent le plus» · TAG → «Jouer serré-agressif (TAG)».
- FAQ: Quelles sont les stratégies efficaces pour gagner au poker ? · Comment bien débuter au poker ? · Comment bien miser au poker ? · Le poker, hasard ou adresse ? · Comment progresser au poker ? · Quand bluffer au poker ?
- 차별화: 결정마다 수치 + 솔버 링크 · 1인칭 · 인쇄용 요약 박스(«stratégie poker pdf» 20).
- 🚫 en ligne · sur winamax/betclic/1xbet · au casino · 비디오게임 · comment jouer au poker(L-A) · stratégie tournoi(L-E) → 앵커.

### 7-3. holdem-limping (우선 3)
- 주력어: «limp poker» + «limper au poker» · «c'est quoi un limp». 훅: 그냥 콜만 하는 게 조용히 돈을 잃게 한다(EN).
- H2: 정의 → **«Qu'est-ce qu'un limp au poker ? (Que signifie "limp" en français)»** · «Open-limp et over-limp : pas la même chose» · «Pourquoi limper est presque toujours une erreur» · «Quand le limp est-il acceptable ? (petite blinde, multiway)» · limp-reraise + «limp jam» 1줄 · fish tell → **«Le limp est-il une preuve de faiblesse ?»**(wam-poker 스레드 제목 축어) · 추가 «Que faire face à un ou plusieurs limpers ?»(reddit 1위 · unibet FAQ · iso-raise 표).
- FAQ: Qu'est-ce qu'un limp au poker ? · Que signifie "limp" en français ? · Le limp est-il une preuve de faiblesse ? · Faut-il limper en petite blinde ? · Que faire quand plusieurs joueurs limpent ?
- 차별화: FR 해설 글 0 → 40~75단어 직답 + iso-raise 산수 + 라이브 경험.
- 카니발: fish 헤드(L-F 1,300) H2 제목 금지 → «faiblesse»로.

### 7-4. holdem-3bet (우선 4)
- 주력어: «3bet / 3-bet poker» + 정식어 **«surrelance»** 병기. 훅: 수식을 보여 주는 3-bet 가이드(EN).
- H2: **«C'est quoi un 3-bet au poker ? (la surrelance)»** · «Quand faire un 3-bet ? Value contre 3-bet light» · «Combien 3-bet ? Le sizing en position et hors de position» · squeeze → **«Le squeeze au poker : 3-bet contre une relance et un suiveur»**(140) · facing → «Face à un 3-bet : suivre, 4-bet ou se coucher ?».
- FAQ: C'est quoi un 3 bet poker ? · Pourquoi dit-on « 3-bet » ? · Quelle est une bonne fréquence de 3-bet ? · C'est quoi la range au poker ?(1~2문장 + 도구 앵커) · Qu'est-ce qu'un squeeze ? · Quelle différence entre 3-bet et 4-bet ?
- 차별화: 사이징 검산표 · `/fr/solver` 3bet pot 링크 · 실전 핸드(§13) · 솔버 빈도 각도.
- 카니발: «range 3bet» 표 제목 금지(«exemples de mains»).

### 7-5. holdem-continuation-bet (우선 5)
- 주력어: **«cbet / c-bet poker»** + «continuation bet». «mise de continuation»은 본문 1회 병기만(자동완성 0). 훅: «모든 플롭 c-bet은 칩을 흘린다»(EN · poker-bluffe 낡은 조언 반박).
- H2: **«C'est quoi un cbet au poker ? (continuation bet : définition)»** · «Sur quels flops faire un c-bet ? La texture du board» · 빈도 H2 개명 **«Fréquence et "cbet range" : à quelle fréquence c-bet ?»**(PAA 축어) · «Faire un c-bet hors de position (OOP)» · Delayed 유지 · HUD FAQ 유지.
- FAQ: Qu'est-ce que le "cbet range" au poker ? · Que signifie "bet" au poker ?(1문장 + betting-actions 앵커) · Faut-il c-bet sur un flop monocolore ?(monotone 글 앵커 · 스팟 확인) · Qu'est-ce qu'un double barrel ? · Le c-bet est-il un bluff ?
- 차별화: GTO 13편(a-high · k-high · monotone · 3bet-pot-cbet · blind-battle-cbet) 허브.
- 카니발: 스팟명 헤드텀 H2 금지 → 앵커.

### 7-6. holdem-position-play (우선 6)
- 주력어: «jouer en position / hors de position» + «pourquoi la position est importante». 🔴 seoTitle 선두에 «position poker» 금지.
- H2: **«Que veut dire « être en position » au poker ?»** · «Jouer hors de position : pourquoi parler en premier coûte cher» · **«Pourquoi la position est-elle si importante au poker ?»** · **«Quelle est la meilleure (et la pire) position au poker ?»** · Opening Ranges → 🔴 «Combien de mains ouvrir selon la position ?» + 도구 앵커 · «Comment jouer hors de position quand on ne peut pas l'éviter».
- FAQ: Quelle est la position la plus rentable au poker ? · Quelle est la pire position ? · La petite blinde est-elle une position précoce ? · Faut-il limper ou relancer UTG ?(limping 앵커) · Comment la position change-t-elle la fréquence de c-bet ?(cbet 앵커)
- 차별화: 바튼 vs 블라인드 수익(EN 수치·출처) · 같은 핸드 IP/OOP 비교(§13).

### 7-7. holdem-starting-hands-chart (우선 7 · 도구 경계)
- 주력어: **«quelles mains jouer au poker»** + «mains de départ». 🔴 «tableau / range / chart» = 도구 → seoTitle·H1·태그 금지, 본문 앵커.
- H2: «Les 10 meilleures mains de départ au poker» · **«Quelles mains jouer au poker ?»** · Worst → **«Quelle main ne pas jouer au poker ? Les pires mains de départ»** · By Position → «Quelles mains jouer selon la position (UTG → bouton)» + 도구 앵커 · GTO Charts → 🔴 «Charts de solveurs ou ranges simples pour débuter ?»(우리 차트 = 공개 합의 레인지, GTO 아님) · PDF 유지.
- FAQ: Quelle main ne pas jouer au poker ? · Quelle est la meilleure main de départ au poker ? · Combien y a-t-il de mains de départ au poker ?(169 · 1 326 ✅) · AKs ou JJ : laquelle est la plus forte ?(🔴 에퀴티는 무늬 조합 가중으로 직접 계산) · Faut-il jouer les petites paires ?
- 차별화: % 기준 명시(타입 vs 콤보) · 퀴즈 · 도구.
- 카니발: «meilleure main / main la plus forte»(완성 족보) = L-B 몫 → 항상 «de départ» · «probabilité main de départ» = L-C 앵커.

### 7-8. holdem-when-to-fold (우선 8)
- 주력어: **«quand se coucher au poker»** + «savoir folder». 🔴 «fold poker» 단독 = 정의 의도 → 선두 금지. 훅: 좋은 패를 못 내려놓는 이유(EN · FR 경쟁 0).
- H2: «Quand se coucher avant le flop ?» · **«Quand faut-il se coucher au poker après le flop ?»**(자동완성 축어) · «Se coucher ou suivre ? Le seuil des cotes du pot»(`/fr/calculator`) · «Se coucher avec une bonne main (top paire, overpaire, même AA)» · 심리 유지.
- FAQ: Quand faut-il se coucher au poker ? · Perd-on de l'argent en se couchant ? · Peut-on se coucher avec des as ? · Se coucher ou suivre quand on hésite ? · 🔴 «Peut-on se coucher sans miser / au premier tour ?» = 규칙 → betting-actions(1줄+앵커).
- 차별화: 팟 오즈 임계 산수 · 실전 레이다운 7장 검산 · 체크리스트.

---

## 8. 0-3 판정 재료 (판정 안 함)

### 8-A. ② positions ↔ position-play
- 볼륨: position poker 590 = positions poker 590 = «poker in position» 묶음 — **한 수요**. jouer en position 10 · hors de position 10.
- 자동완성: 헤드 3종 45건 전부 좌석·인원수·좌석명. 전략형은 «jouer en position poker → jouer hors position poker · poker en position» 2건뿐.
- PAA: 좌석 정의(UTG · cut-off · ordre · «Comment s'appellent …»)뿐.
- SERP: Google은 «position poker»와 «jouer en position poker»를 **같은 풀**로 섞음(pokerskill · pokerpro · coupdepoker 양쪽 등장) · KG «Position»은 헤드에만 · 경쟁 글은 좌석+전략 한 글.
- **권고 1줄**: «position(s) poker»(590)·좌석명(UTG 260 · cut off 170 · bouton · dealer)·인원수 변형은 **holdem-positions**, position-play는 «jouer en / hors de position · pourquoi importante · meilleure position»만 주력어(seoTitle에 «position poker» 선두 금지) — 서로 첫 문단 앵커 1개씩.

### 8-B. ③ fold 헤드 (betting-actions vs when-to-fold)
- 볼륨: fold poker 140 · se coucher 20 · fold traduction 20 · quand se coucher 10 · en anglais 10 · definition 10 · folder 10.
- 자동완성: «fold poker» = 정의·번역 9건 + gif·meme. «se coucher» = 정의 2 · **규칙 2**(premier tour · sans miser) · 전략 2~3(quand peut on / faut il).
- PAA: 세 SERP 모두 «Que signifie "se coucher" au poker ?» + «raise»·«tapis» 용어 묶음.
- SERP: fold poker = 888poker 사전 · wordreference 번역 · 포럼 · 영어 상점. 전략 의도는 영어 관련 검색(«When to fold in poker pre flop» …)에만. «quand se coucher» 전용 글 0.
- **권고 1줄**: «fold poker»·«se coucher au poker»(정의·번역·규칙)의 주인은 **holdem-betting-actions**(현 H2가 이미 받음), when-to-fold는 «quand (faut-il) se coucher au poker»·«savoir folder» 전략 롱테일만, 정의는 앵커 위임.

### 8-C. 차트 도구 경계 (`/fr/hand-chart`)
- 도구: seo.title·H1에 «Tableau range poker» · keywords에 **«mains de départ poker»** 포함 · dict.ts «No locale may … call it «GTO»».
- SERP: «quelles mains jouer»·«mains de départ» 1페이지는 **글형 가이드 우세**(clubpoker · cours-et-fiches · coupdepoker · winamax) + 표형 2(unibet · poker-toolkit) · partypoker «Tableau des mains de départ».
- 관련 검색: «Tableau des mains à jouer au poker»(110) · «Tableau main de départ poker»(30) · «Tableau main poker pourcentage» · «Range 3bet 6-max» → 표·range = 도구 의도.
- **권고 1줄**: «tableau / range / chart»는 도구, starting-hands-chart는 «quelles mains jouer / ne pas jouer / meilleures mains de départ» 질문형 — 도구 keywords의 «mains de départ poker»(30)는 SERP상 글 의도이므로 0-3 소유표에 «mains de départ = 글 · tableau·range = 도구»로 갈라 적을지 판정 필요.

---

## 9. 우선순위 (볼륨 × 갭)

| 순위 | 글 | 볼륨(중복 제외) | 갭 | 핵심 | 카니발 |
|---|---|---|---|---|---|
| 1 | positions | ~1,300 (590 · utg 260 · dealer 210 · cut off 170 · 6 max 140 · bouton 110 · table 110) | 최대 — FR 좌석 글 0 | PAA 3 H2 · 6/8/9-max 표 | 전략 → position-play |
| 2 | strategy | ~800 (poker strategie 320 · comment gagner 170 · stratégie 110 · strategie 90 · technique 90 · bien jouer 70) | 중 — 팁 목록, 수치·경험 0 | comment gagner · bien miser · fondamentaux | 온라인·운영사 금지 |
| 3 | limping | ~430 (260 · 170) | 최대 — FR 글 0 | 정의 PAA 2 · faiblesse · face aux limpers | fish 헤드 금지 |
| 4 | 3bet | ~330 (170 · squeeze 140 · 4bet 20) | 소~중 — cours-et-fiches 강함 | surrelance · squeeze · 3bet light | range 표 금지 |
| 5 | continuation-bet | ~190 (110 · 70 · 10 · 10) | 큼 — FR 글 0, 미러 글 오류 | c'est quoi · cbet range · OOP | 스팟명 → GTO 앵커 |
| 6 | position-play | ~20 + 590 묶음 공유 | 중 — hors de position 글 0 | être en position · meilleure/pire | position poker 선두 금지 |
| 7 | starting-hands-chart | ~110 (50 · 30 · 10×3) | 소 — cours-et-fiches 3,580단어·표 13 | ne pas jouer · TOP10 · % 기준 | tableau/range = 도구 · GTO 금지 |
| 8 | when-to-fold | ~10~30 | 중 — 전용 글 0 | quand faut-il se coucher · 팟 오즈 | 정의·규칙 → betting-actions |

---

## 10. 커버리지 표

### 10-A. 검색어별 (① 자동완성 · ② 새 볼륨 · ③ SERP+PAA · ④ 원문 정독)

| 검색어 | ① | ② | ③ | ④ |
|---|---|---|---|---|
| position poker (590) | ✅ 15 | ➖ 승계 | ✅ PAA 4 · KG | ✅ cours-et-fiches · pokerskill · pokersciences · coupdepoker · wiki · pokerpro |
| positions poker / position au poker | ✅ 15/15 | ✅ 590 / ➖ | ✅ (au poker PAA 4) | ➖ 같은 풀 |
| position poker 6 max | ✅ | ➖ 140 | ✅ PAA 3 | ➖ FR 정독 대상 없음 |
| cut off poker | ✅ 15 | ➖ 170 | ✅ PAA 3 | ✅ cours-et-fiches · wiki (pokerstars 404) |
| bouton · under the gun · hijack | ✅ 14·15·15 | ✅ utg 260 · hijack 50 | ➖ cut off·position SERP로 대표 | ➖ 같은 풀 |
| jouer en position poker | ✅ 2 | ✅ 10 | ✅ PAA 4 · 영상 3 | ✅ coupdepoker · pokerpro · pokerskill · pokernews |
| jouer hors position poker | ✅ 2 | ✅ `-` / 10 | ✅ AIO · PAA 4 | ✅ pokernews(유일 FR 글) |
| stratégie poker / poker strategie | ✅ 15+15 | ✅ 320 · 90 | ✅ PAA 4 · 영상 3 | ✅ winamax · pokersciences · partypoker · lescahiers · clubpoker 허브(exa) |
| comment gagner au poker | ✅ 15 (+gagner 15) | ➖ 170 | ✅ PAA 2 · 영상 3 | ✅ coupdepoker · pokerlistings (pokerclublesoler 리다이렉트 · clubpoker 403) |
| conseils · astuces · bien jouer · progresser | ✅ 15·11·9·3 | ✅ 10~20 | ➖ 위 SERP로 대표 | ➖ |
| quelles mains jouer au poker | ✅ 5+3 | ✅ 50 | ✅ PAA 1 | ✅ clubpoker(exa) · cours-et-fiches · coupdepoker · unibet · winamax |
| mains de départ poker | ✅ 8+5+4 | ✅ 30 · 10 | ✅ PAA 3 · 영상 3 | ✅ 위 + partypoker |
| quelle main ne pas jouer | ✅ | ✅ `-` | ✅ AIO · PAA 1 | ✅ partypoker · pokerlistings |
| limp poker | ✅ 15 (+2 와일드카드) | ✅ 10 · 10 · `-` | ✅ PAA 4 | ✅ wam-poker 2 + 인접 글 축어 3(FR 해설 글 0) |
| limper poker | ✅ 5 | ➖ 170 | ✅ PAA 4 | ➖ 포럼·영어만 |
| 3bet poker | ✅ 15+15 | ✅ 4bet 20 · squeeze 140 | ✅ PAA 3 · KG | ✅ poker-academie · cours-et-fiches · pokerlistings (pokerstars 404 2) |
| c'est quoi un 3 bet au poker | ✅ 3+5 | ✅ `-` | ✅ PAA 2 · 영상 3 | ➖ 같은 풀 |
| squeeze · 4bet poker | ✅ 10·15 | ✅ 140·20 | ➖ 3bet 관련 검색 | ➖ cours-et-fiches 4-bet H2 |
| cbet poker | ✅ 15+15+c'est quoi | ✅ 110 · 10 · 10 | ✅ PAA 2 · 영상 3 · KG | ➖ FR 글 0 → 다음 행 |
| continuation bet poker | ✅ 6 (+mise de continuation 0) | ➖ 70 | ✅ PAA 3 · KG | ✅ poker-bluffe · sallesdepoker (PMU 기생 본문 0) |
| fold poker | ✅ 15 | ✅ 20 · 10 · 10 | ✅ PAA 4 · 영상 3 | ➖ 사전·포럼·영어 — 의도 확인만 |
| se coucher / quand se coucher | ✅ 7 / 4 | ✅ 20 / 10 | ✅ PAA 4 / 2 | ✅ pokernews WPT · pokerpro · cours-et-fiches bluff(MDF) |

➖ = 실행했으나 대상 없음 또는 다른 행으로 대표(사유 기재). **✗ 0건.** 접근 실패: clubpoker(403 → exa 2건 대체) · pokerstars.fr learn 4건(404/영어판 — 근거 제외) · pokerclublesoler(리다이렉트) · animateur-esport(본문 0).

### 10-B. 글별 «PAA·자동완성 질문 확보» (완료 조건)

| 글 | PAA 축어 | 자동완성 질문형 | 상태 |
|---|---|---|---|
| strategy | Quelles sont les stratégies efficaces pour gagner au poker ? · Comment bien miser au poker ? · Comment puis-je bien miser au poker ? · Comment bien débuter au poker ? · Quels sont les fondamentaux du poker ? | comment gagner au poker · comment bien jouer au poker · comment progresser au poker · quand / comment / pourquoi bluffer au poker · comment relancer au poker | ✅ |
| positions | Comment s'appellent les différentes positions au poker ? · Quelle est la position UTG au poker ? · Qu'est-ce que la position cut-off au poker ? · Quel est l'ordre au poker ? · Quel est l'ordre des joueurs au poker ? · Qui doit parler en premier au poker ? | position poker 6/8/9 max · table de 6 · low jack · cut off poker definition · bouton poker definition · poker bouton signification | ✅ |
| position-play | (헤드 PAA 공유) + 경쟁 FAQ «Pourquoi dit-on « en position » et « hors de position » ?» · «Quelle est la meilleure / pire position au poker ?» | jouer hors position poker · poker etre en position · comment jouer la position au poker · meilleur position au poker | ✅ |
| starting-hands-chart | Quelle main ne pas jouer au poker ? · Quelle est la meilleure main au poker ? · C'est quoi la range au poker ? | avec quel main jouer au poker · quelles sont les mains a jouer au poker · quelle(s) main(s) ne pas jouer · quelles mains jouer preflop · pire main de depart poker | ✅ |
| limping | Qu'est-ce qu'un limp au poker ? · Que signifie "limp" en français ? | limp poker c est quoi · signification · definition · qu est ce que limper au poker · over limp poker | ✅ |
| 3bet | C'est quoi un 3 bet poker ? · C'est quoi la range au poker ? | c'est quoi un 3 bet au poker · que veut dire 3 bet au poker · quand 3 bet au poker · 3 bet light poker · squeeze poker definition | ✅ |
| continuation-bet | Qu'est-ce que le "cbet range" au poker ? · Que signifie "bet" au poker ? · C'est quoi un 3 bet poker ? | c est quoi cbet au poker · cbet signification poker · cbet definition · delayed cbet poker · cbet oop poker | ✅ |
| when-to-fold | Que signifie "se coucher" au poker ?(→ betting-actions) · Quel est le coup le plus fort au poker ? | quand faut il se coucher au poker · quand peut on se coucher au poker · peut on se coucher au premier tour / sans miser · que veut dire se coucher au poker | ✅ |
