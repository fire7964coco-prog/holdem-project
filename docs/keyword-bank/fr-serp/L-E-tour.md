# L-E 토너먼트 — fr SERP 조사 (2026-10-07 · fr 클러스터 0-2)

> 브리프 = `00-brief.md` · 대상 5편(전부 fr 신규 · EN 마스터 `lib/posts-en/<slug>.ts` 대조): `holdem-tournament` · `holdem-icm` · `holdem-bubble` · `holdem-short-stack` · `holdem-tournament-vs-cash-game`
> 볼륨 정본 = `../fr-core-volumes.md`(0-1). 여기서는 **0-1에 없던 검색어만** 새로 쟀다(§1-B).
> 도구: DataForSEO(2250 · fr) 자동완성 49회 · SERP 14회(organic/live/advanced · depth 10 · desktop) · 볼륨 1회(64어). 원문 = Playwright(H1/H2/H3 DOM 축어 추출) + exa web_fetch(PokerStars.fr는 한국 IP에서 `pokerstars-01.com` 301 → 404라 캐시 전문으로 읽음 · GGPoker 403 동일). clubpoker.net = Cloudflare 차단 ✗.
> 원자료 = `tmp/fr-serp-E-autocomplete*.json` · `-serp*.json` · `-vol.json` · `-pages.json`(본문 전문) · 스크립트 `tmp/fr-serp-E-dfs.mjs` · `-pages.mjs`.
> 경쟁 글의 ICM·에퀴티·조합 수치는 §4-6에서 **전부 다시 계산**했다(Malmuth-Harville 재귀 · 7장 베스트5 몬테카를로 60,000회).

## 0. 한 줄 결론

1. **«icm poker»(480)는 정보형 SERP다** — 유기 9 중 정보형 8(PokerStars 가이드 · 위키 · reddit ELI5 · PokerPro · PokerListings · gtolab · clubpoker 사전), 계산기 1(icmizer). PAA 4 중 3이 «Que signifie / C'est quoi / Comment calculer l'ICM». → `holdem-icm`의 헤드. 🔴 단 `/fr/calculator` seo.title이 이미 «… et ICM»(§8-②).
2. **«tournoi (de) poker»(1,900)는 일정·장소 의도** — 자동완성 30/30이 도시·연도·근처, 유기 16자리 중 구조·전략 콘텐츠 **3자리(19 %)**. 반대로 PAA 8문 중 4문은 구조형(«Comment se déroule…» «Quel est le prix…» «Comment participer…»). → 글은 헤드 정면이 아니라 **PAA 문장**으로 들어간다(§8-①).
3. **프랑스 상위 글은 수치가 틀리거나 과정이 없다** — PokerStars 숏스택 «A♠9♠ vs 77+/AT+/KQ ≈ 42 %» → 실제 **36 %** · «버튼 셔브 ≈ 40 %» → 적힌 대로 세면 **52 %** · PokerStars 구조 글 «blindes 50/1 000» 오기 · cours-et-fiches ICM «~340 €» → 실제 354,29 €. 맞는 ICM 예시(PokerStars · PokerListings · 위키)도 위키 외엔 **계산 과정 0**. → EN의 «3인 재귀 손계산»이 그대로 차별점.

---

## 1. 볼륨

### 1-A. 0-1 값 (다시 재지 않음 · `fr-core-volumes.md` §2 🅴)

| slug | 헤드 | 롱테일 |
|---|---|---|
| holdem-tournament | tournoi poker / tournois poker 1,900(한 수요) · mtt poker 210 | tournoi poker freeroll 170 · sng poker 30 · stratégie tournoi poker 20 |
| holdem-icm | **icm poker 480** | icm poker def 40 · icm au poker 30 · icm calcul 10 |
| holdem-bubble | bulle poker 20 | bubble poker 10 · bulle tournoi poker `-` |
| holdem-short-stack | short stack poker 20 | push or fold 70(도구 몫) · push fold poker 10 |
| holdem-tournament-vs-cash-game | cash game poker 320 | cash game ou tournoi 10 · stratégie cash game 10 |

### 1-B. 새로 잰 것 (Google Ads · 2250 · fr · 64어 · 추세 = 최신→과거 12개월)

🔴 «tournoi de poker» 1,900은 0-1 «tournoi poker»와 **같은 시계열**(1900·2400·1900·2400·…) = 한 수요. 더하지 않는다.

| 검색어 | 볼륨 | 추세 | 몫 |
|---|---:|---|---|
| tournoi de poker | 1,900 | 1600~2400 | = tournoi poker · 일정 우세 |
| tournoi poker paris · bordeaux | 880 · 480 | 안정 | 🪶 일정(§8-①) |
| **stack poker** | **170** | 110~210 | short-stack FAQ(PAA «C'est quoi un stack au poker ?») · 🔴 앱 «Stack Poker» 섞임 |
| **itm poker** | **170** | 110~390 | tournament H3/FAQ(PAA «Que signifie être ITM…») |
| tournoi poker france 2026 | 170 | 0→320 | 🪶 일정 |
| bounty poker | 90 | 50~140 | tournament H3(PKO) |
| tournoi de poker autour de moi · live calendrier 2026 · tournoi poker 2026 | 70 · 70 · 50 | | 🪶 일정 |
| bankroll poker | 70 | 50~90 | vs 글 뱅크롤 H2 |
| freezeout poker | 50 | 40~110 | tournament H3 |
| icm poker def · icm au poker | 40 · 30 | | 0-1 재확인 |
| risk premium poker · deepstack poker | 30 · 30 | | icm/bubble H2 · tournament H3 |
| mtt poker definition · structure tournoi poker · satellite poker · table finale poker | 각 20 | | tournament |
| exemple structure tournoi poker · organiser un tournoi de poker | 20 · 20 | | 🔴 홈게임 개최 의도 — 범위 밖 |
| icm poker calculator · calcul icm poker | 10 · 10 | 평탄 | **도구 `/fr/calculator` 몫** |
| icm poker deal · bubble factor poker · faire la bulle poker · short stack poker strategy · m ratio poker | 각 10 | | 각 글 H2/FAQ |
| comment jouer / gagner un tournoi de poker(+en ligne) · conseil tournoi poker | 각 10 | | tournament H2 |
| cash game poker c'est quoi · cash game poker règle | 10 · 10 | | vs 글 H2 |
| bounty poker c est quoi · poker ko progressif · re entry poker · rebuy poker · mtt poker ranges | 각 10 | | tournament H3/FAQ |
| **`-`(Ads 데이터 없음 ≠ 0)**: icm poker signification / définition · c est quoi l icm poker · icm poker trainer / ranges · tableau icm poker · mtt poker c est quoi · bulle poker c est quoi · faire la bulle au poker · poker bulle definition · bubble boy poker · short stack poker range · tapis effectif poker · comment bien jouer un tournoi de poker · combien de temps dure un tournoi de poker · structure blind tournoi poker · strategie tournoi poker live · tournoi poker debutant · cash game définition · cash game ou tournoi poker rentable · cash game ou tournois · deal poker icm · prix tournoi poker | — | | 자동완성엔 전부 뜸 → 질문 표현 재료 |

**판단**: 실수요는 ICM(480) 하나. 나머지는 «tournoi» 일정 수요 아래 10~200대 롱테일이다. 구조·전략 롱테일(structure 20 · comment jouer 10 · mtt definition 20 · itm 170 · bounty 90 · freezeout 50)은 **tournament 한 글이 H2/H3로 모아** 받는다(EN 구조 그대로).

---

## 2. 자동완성 (DataForSEO · 2250 · fr · 목록 그대로 · 무관 항목은 «…»로 접음 — 전체는 JSON)

### 2-1. ICM
- **icm poker**: icm poker calculator · icm poker def · icm poker meaning · icm poker trainer · icm poker book · icm poker deal · icm poker ranges · icm poker final table · icm poker reddit · icm poker pdf · icm poker formula · poker term icm · icm poker calculator app · icm poker chart · icm poker shop
- **icm au poker**: terme icm au poker · (위와 같은 항목) · icm poker strategy
- **icm poker c'est quoi**: icm poker signification · icm poker définition · icm poker traduction · icm poker def
- **qu'est-ce que l'icm poker**: qu est ce que l icm poker · c est quoi l icm poker · icm signification poker · qu est ce que l icm
- **calcul icm poker**: icm poker calculator · icm poker
- **icm poker deal**: icm poker deal calculator · deal icm poker là gì · icm poker strategy · icm poker def · icm poker definition · icm poker définition
- **deal poker**: deal poker cards · deal poker meaning · deal poker movie · deal poker film · **deal poker icm** · … · **payjump poker**: pay jump poker là gì · pay jump poker meaning · pay jump · paypal poker → 🔴 «payjump» 프랑스어 수요 없음(본문 용어로만)

### 2-2. 토너먼트
- **tournoi poker**: bordeaux · gujan · gujan mestras · casino bordeaux · bordeaux barriere · france 2026 · hendaye · barcelone 2026 · gironde · paris · sud ouest · biarritz · landes · pau · la rochelle → **15/15 장소·연도**
- **tournoi de poker**: bordeaux · gujan · live calendrier 2026 · autour de moi · france · gironde · poitiers · pau · limoges · 2026 · la rochelle · barbotan · barcelone · royan · casino gujan mestras → **15/15 장소·연도·근처**
- **comment jouer un tournoi de poker**: comment bien jouer un tournoi de poker · comment jouer tournoi poker en ligne · comment gagner un tournoi de poker en ligne
- **comment gagner un tournoi de poker**: … en ligne · comment gagner tournoi poker winamax · comment gagner un tournois de poker
- **combien de temps dure un tournoi de poker**: … betclic · … winamax · … en ligne · combien de temps dure un match de poker · … un tournois de poker · combien dure un tournoi de poker · combien de temps dure un poker
- **structure tournoi poker**: … gratuit · … 8 joueurs · … 6 joueurs · … 10 joueurs · organisation tournoi poker · calculateur structure tournoi poker · exemple structure tournoi poker · structure blind tournoi poker · application organisation tournoi poker · … 7 joueurs → 🔴 대부분 **홈 토너먼트 개최** 의도
- **stratégie tournoi poker**: strategie tournoi poker live · conseil tournoi poker live · conseil tournoi poker
- **tournoi poker débutant**: tournoi poker debutant · tournoi poker demain · tournoi poker decembre · tournoi poker decembre 2023
- **tournoi poker freeroll**: tournoi poker free · … freeroll pokerstars · club poker freeroll password … → 사이트 의도(조준 안 함) · **tournoi poker bounty**: tournoi bounty hunters · tournoi bounty hunter
- **mtt poker**: mtt poker definition · mtt pokerstars · mtt poker coaching · mtt poker course · mtt poker ranges · mtt poker variance calculator · mtt poker def · mtt poker solver · mtt poker c est quoi · mtt poker cheat sheet · mtt poker coach · mtt poker staking · mtt poker roi · mtt poker paris · mtt poker bankroll
- **mtt poker c'est quoi**: mtt poker c est quoi · mtt poker signification · mtt poker definition
- **sng poker**: sng poker meaning · rules · strategy · definition · tournament · term · heads up sng poker · … · **satellite poker**: satellite pokerstars · satellite poker tournament · … meaning · … strategy · …
- **itm poker**: itm poker signification · itm poker expresso · itm poker meaning · itm poker tournament · itm poker calculator · itm poker term · poker itm percentage · etre itm poker · pourcentage itm poker · icm itm poker · …(외국어)
- **poker ko**: poker koh lanta · poker kool shen · **poker ko progressif** · …(외국어)
- **poker * c'est quoi**: c'est quoi poker · poker c est quoi tnt · poker c est quoi une couleur · strip poker c est quoi · poker face c est quoi · **bounty poker c est quoi** · poker run c est quoi · limp poker c est quoi · poker expresso c est quoi · ultimate poker c est quoi · flush poker c est quoi · gto poker c'est quoi · planning poker c est quoi · **mtt poker c est quoi** · poker menteur c est quoi
- 결과 없음(40102): premier tournoi de poker · qu'est-ce qu'un tournoi de poker · tournoi poker rebuy · comment * tournoi poker · comment fonctionne un tournoi de poker · tournoi poker c'est quoi · jouer short stack poker · petit stack poker

### 2-3. 버블
- **bulle poker**: bulle tournoi poker · faire la bulle poker · boule poker · bulle poker c est quoi · bullet poker
- **bulle au poker**: faire la bulle au poker · bulle poker c est quoi · poker bulle definition
- **bubble poker**: bubble poker meaning · bubble poker tournament · bubble poker term · poker bubble boy · poker bubble factor · pokerstars bubble rush · bubble man poker · poker bubble protection · poker bubble strategy · poker bubble time · …(poke bowl 등)

### 2-4. 숏스택
- **short stack poker**: … range · strategy · meaning · cash games · hand rankings · tournament strategy · rules · chart · reddit · tips · tournament · short stacking poker · short stack play poker · poker short stack strategy cash game · short stacked poker meaning → **전부 영어** — 프랑스 검색자도 영어 어형 그대로
- **short stack**: font · meaning · poker · police · pancakes · traduction · … → 🔴 «poker» 앵커 필수 · **short stack tournoi**: short stack showdown · tournoi short handed · short stack winamax · short stack poker · short tournament
- **tapis court poker**: tapis vert poker · … · tapis poker pro/professionnel · **petit tapis poker**: poker tapis règle · tapis poker personnalisé → 🔴 둘 다 검색어 아님(매트 상품)
- **tapis effectif poker**: tapis effectif · tapis poker professionnel · tapis poker explication · tapis poker règle
- **stack poker**: stack poker definition · 6 personne · 5 personnes · 4 personnes · stack poker app · chips · stack meaning poker · …

### 2-5. 캐시게임 vs 토너먼트
- **cash game poker**: cash game poker c'est quoi · deauville · toulouse · aix en provence · normandie · casino · **cash game poker règle** · nice · lyon · paris · coaching · live · tracker · bankroll management · barcelona → 장소 8/15
- **cash game c'est quoi**: c'est quoi cash game · cash game betclic c est quoi · cash game poker c est quoi · … · **cash game définition** · **cash game explication** · cash game definition · **cash game comment jouer**
- **cash game ou tournoi**: cash game ou tournois · **cash game ou tournoi poker rentable** · cash game or tournament poker · cash game ou spin
- **cash game vs tournoi / tournoi vs cash game**: cash game vs tournament · cash game ou tournoi · cash game ou tournois · tournoi ou cash game · poker tournoi ou cash game · tournois ou cash game

**읽는 법**: ① 정의형은 «**c'est quoi / signification / définition / def**» 네 꼴(«qu'est-ce que»는 ICM 하나뿐) → 직답·FAQ 질문은 «C'est quoi … ?»·«Que signifie … ?». ② 숏스택·버블·MTT·ITM·bounty는 **영어 용어 그대로** 검색 — «petit tapis»는 SERP 제목 괄호 병기로만(§3-8). ③ «tournoi» 시드는 거의 전부 지역·연도.

---

## 3. SERP 상위 10 + PAA (2250 · fr · desktop)

유형: **콘텐츠**(가이드·블로그) · **사전** · **운영사**(룸 상품·프로모) · **일정**(대회·장소·이벤트) · 포럼 · 영상 · 도구. 번호 = rank_absolute.

### 3-1. «icm poker» — PAA · organic · video · related · KG(«Independent Chip Model») · AIO **없음** · FS **없음**
2 pokerstars.fr «ICM au Poker : Guide pour Maîtriser le Modèle ...»(콘텐츠) · 3 fr.wikipedia «Independent Chip Model» · 4 reddit «Peux-tu expliquer ce qu'est l'ICM au poker comme si j'avais ...»(포럼·자동번역) · 5 icmizer «Calculateur d'ICM de poker pour les offres de table finale»(도구) · 6 영상 팩(YoH ViraL «Qu'est Ce Que L'ICM Au Poker» · ChoveKiPeu «Understanding ICM with FLAVIEN GUENAN» · Poker Académie «ICM : les concepts essentiels pour réussir ses fins de tournoi» · zChance44 «Mission Poker #7 – L'ICM, Risk Premium…») · 7 pokerpro.fr «L'ICM au poker et comment il fonctionne» · 8 fr.pokerlistings «Le Guide de l'ICM pour les Joueurs de Tournoi de Poker» · 9 gtolab «What Is ICM in Poker? …»(영어) · 10 clubpoker «ICM - Lexique poker : définitions…»(사전)
- **PAA**: Que signifie ICM au poker ? · Comment calculer l'ICM au poker ? · C'est quoi l'ICM ? · Que signifie MTT au poker ?
- **related**: ICM poker définition · Tableau ICM poker · Icm poker calculator · Icm poker ranges · ITM poker · Équité poker · EV poker · Jam poker
- 집계: 정보형 8/9 · 도구 1/9

### 3-2. «tournoi poker» — AIO(비동기 · 본문 미반환 → «있다»만) · organic · PAA · related
1 winamax «Les tournois poker - Le Totem – avec Moundir»(운영사) · 4 pokerstars.fr «PokerStars™ Omania – Tournois quotidiens Omaha…»(운영사) · 5 texapoker «CFIPA»(일정 · Aix Pasino) · 6 clubpoker «Paris Île-de-France Cette semaine | Allô Poker»(일정) · 7 pokerpro «Les tournois de poker en ligne»(콘텐츠) · 8 croc.poker «Tournoi Poker Grand Est Gratuit»(일정) · 9 ggpoker «Guide des Stratégies de Tournoi de Poker pour Chaque…»(콘텐츠) · 10 sortir.orleans-metropole «Tournoi de poker associatif»(일정) · 11 fr.pokernews «Ajuster sa stratégie selon les phases d'un tournoi…»(콘텐츠)
- **PAA**: Quels sont les tournois de poker les plus connus ? · Comment participer à un tournoi de poker ? · Quel est le prix d'un tournoi de poker ? · Comment se déroule un tournoi de poker ?
- **related**: tournoi poker près de france · tournoi poker près de paris

### 3-3. «tournoi de poker» — AIO(비동기) · organic · PAA · video · images · related
1 clubpoker «Les tournois CP au Winamax Poker Tour»(일정) · 5 winamax Totem(운영사) · 6 texapoker «TPS Monsterstacks»(일정 · Nice) · 7 croc.poker «Tournoi de poker gratuit dans le Bouches-du-Rhône (13)»(일정) · 8 pokerstars Omania(운영사) · 9 clubpoker «Tournois Club Poker du lundi 23 au dimanche 29 septembre…»(일정) · 11 facebook «[TOURNOI POKER] Le Club de Poker Pins…»(일정)
- **PAA**: Où trouver des tournois de poker ? · Comment participer à un tournoi de poker ? · Quels sont les tournois de poker les plus connus ? · Y aura-t-il un tournoi de poker en France en 2026 ?
- **video**: Ouest-France «Tournoi de poker à Nantes : 900 joueurs…» · Poker Académie «ICM : les concepts essentiels…» · Carjass «Le plus GROS TOURNOI de Poker Amateur en France (VLOG»

### 3-4. «comment jouer un tournoi de poker»(구조 의도 대조군 · 10) — video · PAA · organic · related · AIO 없음
1 영상 팩(YoH ViraL «COMMENT JOUER EN TOURNOI» · SpinElite «Comment bien débuter en tournoi de poker» · Kill Tilt «Le Jeu en Début de Tournoi» · Balti «ORGANISEZ UN TOURNOI DE POKER…») · 3 pokerstars.fr «Comprendre la structure d'un tournoi de poker» · 4 pokerlistings «Conseils de Negreanu pour les Tournois de poker modernes» · 5 imagina «Comment organiser un tournoi de poker»(개최) · 6 pokerpro «8 conseils pour bien jouer en tournois de poker» · 7 pokerstars.fr «Début et milieu de tournoi» · 8 partypoker.com «Comment jouer dans les tournois de poker» · 9 weezevent «7 étapes pour organiser un tournoi de poker réussi»(개최) · 10 pokerstars.fr «Stratégie de tournoi de poker : Tous les Conseils Essentiels»
- **PAA**: Comment fonctionne un tournoi de poker ? · Quel est le prix d'entrée pour un tournoi de poker ? · Est-il possible d'organiser un tournoi de poker ? · Quel est le tableau range pour un tournoi de poker ?
- **related**: Structure tournoi poker gratuit · Organiser un tournoi de poker pour une association · Calculateur structure tournoi poker · Exemple structure tournoi poker · Structure tournoi poker 8 joueurs · Organiser une soirée poker légal · Structure tournoi poker 10 joueurs · Organiser une partie de poker privée
- 🔴 «organiser» 축(유기 2/9 · related 5/8 · PAA 1/4) = 홈 토너먼트 개최 → 범위 밖. PAA «tableau range» = `/fr/hand-chart` 몫.
- 2차 «comment fonctionne un tournoi de poker»: 유기 = clubpoker 규정 · pokerstrategy «Comment jouer un tournoi» · pokerlistings 집중력 · pokerstars.com 헬프 · wam-poker «Tournoi Re entry» 등 / **PAA**: Quelle est la différence entre un cash game et un tournoi ? · Comment participer à un tournoi de poker ? · Comment fonctionne un tournoi ? · Quel est le prix d'un tournoi de poker ?

### 3-5. «mtt poker»(경량) — **AIO(본문 있음)** · PAA · organic · images
- **AIO 첫 문장 축어**(사실로 옮기지 않음): «Un MTT (Multi-Table Tournament) est un tournoi de poker qui se joue sur plusieurs tables en même temps, avec des blindes qui augmentent régulièrement jusqu'à ce qu'un seul joueur remporte tous les jetons.» · 인용 = clubpoker · pokerlistings 사전 · unibet
- 유기 8: poker-academie 포럼 · 앱스토어(GTO Ranges+) · clubpoker 포럼 ×2 · wam-poker 포럼 ×2 · winamax 블로그 «Ma botte secrète en MTT» · pokerlistings «Markup ou Discount…» → **포럼 5 · 정의 글 0**
- **PAA**: C'est quoi MTT au poker ? · Que signifie être ITM au poker ? · Qui est le goat du poker ? · Que signifie icm au poker ?

### 3-6. «bulle poker»(경량) — **AIO(본문 있음)** · organic · PAA · images
2 pokerstrategy «Bulle - Glossaire de termes poker»(사전) · 4 rmcsport «Comment jouer la "bulle", ce moment d'extrême tension?»(영상 기사) · 5 reddit «Conseils pour le poker de tournoi : comment jouer la bulle»(자동번역) · 6 hendonmob «Arnaud Bulle»(🔴 동명 선수) · 7 wam-poker «[MTT 5e] Comment gérer l'avant bulle quand on est short»(포럼) · 9 youtube shorts «Je risque tout mon Tournoi sur un GROS BLUFF près de la bulle» · 10 pokerqz «Bulle | Glossaire» · 11 tv.apple «C'est quoi faire la bulle ? - La Story Poker avec Winamax»
- **AIO 첫 문장 축어**: «Au poker, la **bulle** désigne le moment critique d'un tournoi où il ne reste qu'une seule élimination (ou quelques-unes dans les grands tournois) avant d'atteindre les places payées, appelées In The Money (ITM).» · 소제목 «Qu'est-ce que la bulle ?» · «Bubble boy / girl» · 인용 = fr.wikipedia «Bulle (poker)» · pokerstars.fr «strategie-sur-la-bulle-au-poker»
- **PAA**(🔴 일반 포커로 샘): C'est quoi le stack au poker ? · Qu'est-ce qu'un flop au poker ? · Quelles sont les techniques les plus efficaces pour gagner au poker ? · Quel est le principe du poker ?
- 집계: **버블 전략 본문 글 0/8** → 빈 SERP
- 2차 «bulle tournoi poker»: 유기 = rmcsport · pokerqz · reddit «Je viens de **bulle stone** un tournoi live…» · pokerlistings «7 Conseils pour de meilleurs résultats en Tournois» · poker-academie 포럼 «A la bulle d'une table finale» · maisonjaune(책 «gagnez en tournois ; de la 1ère main à la bulle») · WPT 라이브 «La bulle financière éclate» / **PAA**: Qu'est-ce que la bulle au poker ? · Quel est le meilleur logiciel pour gérer un tournoi de poker ? · Comment fonctionne un tournoi de poker ? · Y aura-t-il un tournoi de poker en janvier 2026 ?
- 표현 채집: «faire la bulle»(Winamax 제목·자동완성) · «la bulle éclate»(위키 H2·WPT) · «bulle stone»(reddit · EN stone bubble) · «avant-bulle»(wam-poker)

### 3-7. «short stack poker»(경량) — organic · PAA · video · AIO 없음
1 youtube «JOUER EN SHORT TRACK EST-CE EV+ ou EV» · 3 영상 팩(Kill Tilt «NL1000: How to play against a short stack» · P'tit Poks «Maitriser le jeu short-stack en table finale…» · ALL IN Baki & Hugo «Comment S'adapter face à un short stack» · StepUp «Preflop, le jeu en short stack») · 4 bluffingmonkeys(영어) · 5 poker-academie «Dossier Shortstacking (stratégie du petit tapis)»(2009 포럼) · 6 partypoker.es(스페인어) · 7 youtube(영어) · 8 reddit(영어) · 9 educapoker(스페인어) · 10 yourpokerdream(영어) · 11 br.pokernews(포르투갈어)
- **PAA**: Quelle est la mise de départ au poker ? · Quel est le plus gros coup au poker ? · C'est quoi un stack au poker ? · Qu'est-ce que le tapis effectif au poker ?
- 판독: 프랑스어 글 **1/10**(2009 포럼) → 프랑스어 답은 «… **tournoi**»를 붙여야 나온다(3-8).

### 3-8. «short stack tournoi poker»(2차 · 프랑스어 대조군) — organic · PAA · video · related
1 pokerstars.fr «Comment Jouer un Short Stack en Tournoi : 7 Stratégies…» · 2 clubpoker «Shortstack - définitions, glossaire poker»(사전) · 3 partypoker.fr «La stratégie à suivre en short stack au poker» · 5 pokerlistings «Comment gérer un Short stack ou un petit tapis au poker ?» · 6 reddit «Généralités du jeu deep vs short stack» · 7 kill-tilt «Stratégie Shortstack fin de tournoi»(포럼) · 8 poker-academie «Les 5 règles fondamentales du jeu short-stack au poker» · 10 pokernews «Tournoi Poker : stratégie du petit tapis (short stack partie 1)» · 11 pokerpro «5 conseils pour survivre en étant short stack (petit tapis)»
- **PAA**: Que signifie "stack" dans le contexte du poker ? · Comment calculer le stack au poker ? · Quand augmenter les blinds ? · Quel est le meilleur logiciel pour gérer un tournoi de poker ?
- **related**: Short stack poker · Short track · SharkScope · Short stack traduction
- 표기 집계(제목 9): «short stack» 단독 4 · «short stack / petit tapis» 병기 3 · «shortstack» 붙여쓰기 2 · «short-stack» 1(중복 포함)

### 3-9. «push or fold poker»(경계 확인만) — 유기 10 = reddit 6 · 앱스토어 2 · 영어 포럼·사전 2 → 프랑스어 콘텐츠 0 · PAA 4 전부 영어(«What is push in poker?» 등) → `/fr/calculator` Push or Fold 탭 몫(`fr-calculator.md` §3-D)

### 3-10. «cash game poker» — organic · PAA · video · related · KG(«Cash game») · AIO 없음
1 fr.wikipedia «Cash game» · 3 영상 팩(Kill Tilt ×3 «Voici comment détruire le Cash Game petites limites en 2026» 외) · 4 partypoker.fr «Comment jouer au cash game poker: comprendre les règles» · 5 unibet(운영사) · 6 youtube(영어) · 7 poker.pmu.fr «Tables Cash Game No limit Hold'em»(운영사) · 8 pokerstars.fr «Cours sur le Cash Game»(강좌 목차) · 9 pokerstarslive «Poker - Règlement des cash games» · 10 circus-poker «Cash Game au Club Circus de Paris»(장소) · 11 pokerlistings «Tournois de Poker ou Cash Game (parties d'argent) ?»
- **PAA**: Quelle est la différence entre un cash game et un tournoi ? · Quelle est la stratégie pour bien jouer les micro-limites au poker cash game ? · Est-il possible de gagner sa vie au poker ? · Quelles sont les tactiques efficaces pour gagner au poker ?
- **related**: Cash game poker règle · Cash game poker casino · Cash game Poker Paris · Cash game Poker Toulouse · Cash Game Winamax · Cash Game Betclic · Cash game canal plus · Cash game bienvenue dans mon metavers
- 2차 «cash game poker c est quoi»: 유기 = en.wikipedia · pokerstars.fr «Le Cash Game - PokerStars Learn FR» · pokerpro «5 questions sur le Cash Game» · pokerpro «Comment jouer en cash game» · casino777.ch «Poker cash game ou tournoi de poker ? Partie II» · apprendre-poker.fr «Tournois de poker : règles spécifiques vs cash game» 등 / **PAA**: Quel est le plus gros coup au poker ? · Comment puis-je bien miser au poker ? · Quelles sont les tactiques efficaces pour gagner au poker ? · Comment fonctionne un tournoi de poker ?

### 3-11. «cash game ou tournoi» — organic · PAA · video
1 pokerstars.fr «Tournoi ou cash game : quel format choisir pour débuter au…»(**2026-09-22**) · 3 pokerpro «Cash game ou tournoi?»(2020) · 4 kill-tilt «MTT ou Cash Game j'hésite pour mon retour.»(포럼) · 5 reddit «Cash ou tournois et pourquoi ?» · 6 영상 팩(PokerPRO «Différences de Stratégie entre Tournois et Cash Game» · Ya2ecoles · Kill Tilt Radio avec Flavien Guénan) · 7 gusandco.net «Cash game VS Tournois»(2010) · 8 cours-et-fiches «Tournoi vs Cash Game au Poker : Différences et Stratégie…»(2026-02) · 9 fr.wikipedia «Cash game» · 10 pokerstars.fr «Du Cash Game au Tournoi : La Stratégie Complète Pour…» · 11 clubpoker 포럼
- **PAA**: Quelle est la différence entre un cash game et un tournoi ? · Quels sont les différents types de poker ? · Quel est le plus gros coup au poker ? · Comment fonctionne un tournoi ?

---

## 4. 상위 글 원문 정독 (헤딩 = DOM/전문 축어 · 사이트 공통 내비·광고 헤딩 제외)

### 4-1. ICM
**① pokerstars.fr ICM 가이드**(#2 · 2025-11-20 · Giovanni Angioni · exa)
- H1 ICM au poker : le guide complet pour optimiser votre stratégie de tournoi · H3 L'essentiel de l'ICM en 3 points · H2 Cash game et tournoi : deux mondes différents · H2 Qu'est-ce que l'ICM au poker ? · H2 Comment fonctionnent les calculs ICM · H2 Quand l'ICM compte le plus : les situations critiques en tournoi · H2 La stratégie ICM en pratique : ajustez vos ranges et vos décisions · H2 L'ICM sur PokerStars : applications par format · H2 Erreurs courantes avec l'ICM · H2 Concepts ICM avancés : Nash, négociations et exploitation · H2 Questions fréquemment posées sur l'ICM → H3 Quand dois-je commencer à penser à l'ICM ? · Jusqu'à quel point dois-je serrer mon jeu sous pression ICM ? · L'ICM s'applique-t-il aux cash games ? · Dois-je mémoriser des tableaux ICM ? · Comment fonctionne l'ICM en heads-up ?
- 표 3(Cash vs Tournoi · ICM 결과표 · 상황별 압력표) · 용어 정의 3(ICM · **Bubble Factor** · **Payjump (palier de gains)**) · 경험담 0 · 계산 과정 0(«vous n'avez pas besoin de faire ces calculs»)
- **§13**: 6 000/3 000/1 000 · 600/300/100 € → «464,76 €, 346,67 € et 188,57 €» ✅ · «60 % des jetons… environ 77 %» = 77,5 % ✅ · 짧은 스택 1,89배 ✅

**② fr.wikipedia «Independent Chip Model»**(#3 · 1,398단어 · 표 4)
- H1 Independent Chip Model · H2 Historique · H2 Applications → H3 Exemple de mise en application · H2 Précision du modèle → H3 Dans une partie à 2 joueurs · H3 Dans une partie à 3 joueurs · H2 Notes et références
- 3인 50/30/20 % · 2자리 지급 70/30 → 확률 전개를 **수식으로 전부**(유일)
- **§13**: 45,18 / 32,25 / 22,57 ✅ · 칩당 0,904 / 1,075 / 1,128 5 ✅. 🪶 EN 예시와 **칩 분포가 같다**(50/30/20) — 지급 구조만 다름 → 비교 재료

**③ pokerpro.fr «L'ICM au poker et comment il fonctionne»**(#7 · 2021-07-14 · 1,297단어)
- H1 L'ICM au poker et comment il fonctionne · H2 Introduction à l'ICM Poker : Qu'est-ce que l'Independent Chip Model ? · H2 Qu'est-ce que l'ICM, exactement ? · H2 Pourquoi l'ICM n'existe-t-il que dans les tournois ? · H2 cEV v $EV · H2 Exemple de calcul de l'ICM au poker · H2 La valeur de l'apprentissage de l'ICM · H2 Comment l'ICM affecte-t-il la prise de décision ?
- 예시 7 000/1 000/1 000/1 000 · 500/300/200 $ → «les valeurs de chaque tapis seraient les suivantes :» 뒤 **숫자 없음**(텍스트 0) · 내 계산 431,67 / 189,44 ×3 → 🔴 독자가 결과를 못 봄
- 표기 «cEV / $EV» 실사용

**④ fr.pokerlistings ICM 가이드**(#8 · 1,930단어 · 날짜 없음 · 제휴 배너)
- H1 Le Guide de l'ICM pour les Joueurs de Tournoi de Poker · H2 Pourquoi est-ce important de connaître la Valeur de ses Jetons ? · H2 Comment fonctionne l'ICM au poker ? · H2 Utiliser l'ICM pour prendre de meilleures décisions · H2 Les six grandes lignes de l'ICM · H2 Les limites de l'ICM
- **§13**: 5 000/2 000/2 000/1 000 · 50/30/20 $ → 37,18 / 24,33 / 24,33 / 14,17 ✅(과정은 «utiliser un calculateur ICM»)
- 🪶 «Si vous avez un stack moyen à la bulle, vous devez quasiment toujours éviter les coin-flips … et vous coucher» — 과단정(D유형)

clubpoker(#10) ✗ 차단 · gtolab(#9) 영어 → 생략

### 4-2. 토너먼트
**① pokerstars.fr «Comprendre la structure d'un tournoi de poker»**(«comment jouer» #3 · 2024-10-24)
- H1 Comprendre la structure d'un tournoi de poker · H3 Les buy-in et les stacks de départ · H3 Structure des blindes · H3 Les réentrées et les inscriptions tardives · H3 Le nombre d'entrées · H3 Les prize pools, les tournois garantis et les payouts · H3 Les formats spéciaux
- 용어: «buy-in, également appelé **frais d'entrée**» · freezeout · **inscription tardive** · réinscription · **overlay** · cagnotte · tournois **bounty** (primes progressives · primes mystères) · 레벨 «10 à 15 minutes … 5 minutes … turbo … 3 minutes … hyper turbo»
- 🔴 «Si les blindes commencent à **50/1 000**, vous avez 50 grosses blindes» → 존재하지 않는 블라인드 · **500/1 000 오타** · 표·FAQ·경험담 0

**② pokerstars.fr «Stratégie de tournoi de poker : Tous les Conseils Essentiels»**(#10 · 2025-08-21 · exa 앞부분)
- H1 Stratégie de tournoi de poker : guide complet pour progresser sur PokerStars · H2 Comprendre la structure des tournois de poker → H3 Blinds et antes · H3 Les phases d'un tournoi de poker · H3 Le stack moyen et son importance · H2 Les fondamentaux de la stratégie en tournoi → H3 Jouer serré ou large : quand et pourquoi · H3 Agressivité et taille des mises · H3 Position et dynamique de table · H2 Sélection des mains de départ → H3 Mains premium · H3 Connecteurs assortis · H3 Gamme de mains selon la phase du tournoi · H2 S'adapter aux types de …(잘림)
- 표 3 — 🪶 **5단계 표**(Début / Milieu / Bulle / **Dans l'argent** / Table finale) — EN은 4단계(ITM 단계 없음)
- 🪶 «des all-ins préflop avec AA ou KK sont courants dès les premiers niveaux» — 근거 없는 단정

**③ pokerpro.fr «8 conseils pour bien jouer en tournois de poker»**(#6 · 2023-02-22 · 2,227단어 · 영상 1)
- H1 8 conseils… · H2 1. N'essayez pas de conserver votre pile de départ · 2. Jouez pour gagner · 3. Jouez de façon exploitable, mais pas trop. · 4. Battez-vous pour les antes · 5. N'ayez pas peur de défendre votre grosse blind lorsque vous avez un petit stack. · 6. Jouez plus serré lorsque vous avez un petit stack et que vous êtes près de la bulle. · 7. Mettez la pression sur vos adversaires quand vous avez un gros stack près d'une bulle · 8. Évitez les inscriptions tardives si possible · H2 Résumé des conseils pour les tournois

**④ pokerpro.fr «Les tournois de poker en ligne»**(«tournoi poker» #7 · 2023-08-27 · 737단어) — H2 1. Les Micro Buy-in : Parfaits pour les Débutants · 2. … Les Tournois à Prize Pool Garanti · 3. Les Tournois Knockout : Devenez un Chasseur de Primes · 4. Les Satellites : Un Chemin Économique vers les Grands Événements · 5. Les Grands Événements : L'Apogée du Poker en Ligne · Conclusion — 등록·Day 1·지급 구조 0

**⑤ ggpoker.com/fr 단계별 전략**(«tournoi poker» #9 · exa · «6 min Read») — H2 Le Début de Partie · L'Équilibre Délicat · La Fin de Partie : Dernier Tour de Mise · La Psychologie de la Victoire · Les Nuances du Poker en Ligne · L'Élément Humain · Stratégies Clés à Travers Toutes les Phases en Tournoi · Maîtriser le Jeu — 수치·예시 0 · 자동번역 문체 · CTA «JOUEZ AU POKER ICI»

**⑥ fr.pokernews «Ajuster sa stratégie selon les phases…»**(#11 · 1,206단어) — H2 L'expected Value en tournoi · Les différentes phases d'un tournoi · Fin de tournoi · Conseils supplémentaires · Championnat PokerNews sur Pokerstars.fr(낡은 프로모)

partypoker.com/fr(#8) ✗ 봇 확인 페이지

### 4-3. 버블
**① pokerstars.fr «Stratégie sur la bulle au poker»**(AIO 인용처 · 2024-09-20) — H1 Stratégie sur la bulle au poker · H3 Qu'est-ce que la bulle ? · H3 Surveillez l'argent facile · H3 Petits stacks · H3 Stacks moyens · H3 Gros stacks — 용어 «min-cash» · «gros laydown» · «coin flip» · 수치·예시·FAQ 0 · 스택 3분할은 EN과 같음
- 정의 축어: «Dans les petits tournois, la bulle désigne généralement le fait qu'il ne reste qu'un seul joueur à éliminer avant l'argent. Dans les grands tournois multi-tables (MTT), la bulle peut survenir alors qu'il reste encore plusieurs joueurs avant d'atteindre l'argent.»

**② fr.wikipedia «Bulle (poker)»**(AIO 인용처 · 328단어 · ébauche) — H2 Stratégie · H2 « La bulle éclate » — 축어 «des joueurs jeter de très bonnes mains (paires de dames, paires de rois) juste pour ne pas être le **bubble boy**»

**③ fr.pokerlistings 숏스택 글 속 «Scénario classique de la bulle : cas pratique»**(유일한 프랑스어 버블 실전 예시) — WSOP 1 500 $ · 블라인드 10 000/20 000 · 히어로 BTN 620 000 · Q♥Q♣ · MP 780 000 올인 → 상대 레인지 4갈래 서술 · «Si AA est favori à 80% contre une autre paire» ≈ AA vs KK 82 % → 근사 허용

rmcsport(#4) 텍스트 159단어(영상) · pokerstrategy(#2) 사전 166단어 → 정독 대상 아님

### 4-4. 숏스택
**① pokerstars.fr «Comment Jouer un Short Stack en Tournoi : 7 Stratégies Gagnantes»**(#1 · 2025-07-22 · **tu 2인칭** · exa 앞 7,000자)
- H2 1. Connais tes seuils de push/fold · H2 2. Vole sans relâche depuis les positions tardives · H2 3. Ajuste ta range en fonction du ratio stack/pot · H2 4. Attaque les bons adversaires · (5~7 잘림)
- 표: 스택 구간(«Moins de 10bb / 10-15bb / 15-20bb / Plus de 20bb») · CO 셔브 레인지(8/10/12/15bb) · 경험담형 도입(«Tu n'as rien eu pendant une heure… 14 big blinds») = 강점
- 🔴 «Contre une range de call typique de la big blind (paires 77+, [Ax][Tx]+, [Kx][Qx]), A♠ 9♠ a environ **42%** d'équité» → MC 60,000회: 106콤보 **36,4 %** · 수딧 한정 58콤보 **35,0 %**
- 🔴 버튼 셔브 «Toute paire, tout as, [Kx][2x]+, [Qx][5x]+, [Jx][7x]+, [Tx][7x]+, Suited connectors jusqu'à 5♥ 4♥ … environ **40%**» → 78+192+176+112+64+48+20 = **690/1326 = 52,0 %**
- 🪶 «Chaque orbite te coûte 1,5bb en blinds et antes» — 앤티 포함이면 1,5bb 초과 · H2 3 «ratio stack/pot»인데 본문은 SPR 아님

**② fr.pokerlistings «Comment gérer un Short stack ou un petit tapis en tournoi de poker ?»**(#5 · 2025-02-20 · 1,994단어) — H2 Une bonne stratégie en short stack : un indispensable pour gagner · H2 Scénarios de tournoi : La bulle → H3 Scénario classique de la bulle : cas pratique · H3 Quel est votre ambition pour le tournoi ? — 🪶 예시 히어로 620 000/20 000 = 31bb(숏스택 아님) · M-비율·푸시폴드 표 0

**③ fr.pokernews «Tournoi Poker : stratégie du petit tapis (short stack partie 1)»**(#10 · 인터뷰) — H2 Petit tapis et fold equity · H2 Ajuster la sélection des mains de départ · (Everest Poker 광고 = **낡음**) — 축어 «vous pouvez définitivement sur-relancer tapis (shove) avec 10 big blinds… j'aime mieux avoir 15 big blinds contre un joueur compétent»

**④ poker-academie «Les 5 règles fondamentales du jeu short-stack au poker»**(#8 · 945단어) — H2 Sur-relancer pour la valeur de votre main · Sur-relancer un adversaire faible · Le squeeze, pour récupérer la dead money · Jouer serré dans les premières positions · Voler les blindes à bas prix · Résumé

**⑤ pokerpro.fr «5 conseils pour survivre en étant short stack (petit tapis)»**(#11 · 2019 · 1,883단어) — H3 Ouvrir plus de « belles cartes » et moins de « petites cartes » · Utilisez des ranges de c-betting polarisées … · Faire tapis avec de petites paires · Exploiter les ranges de call en position · **Envisager d'utiliser une stratégie de Limp** · Conclusion — EN FAQ «limp with a short stack?»의 반대 측 근거

bluffingmonkeys(영어 · H2 What Is Short-Stack Strategy? · When Are You Considered Short-Stacked? · Understanding the ICM… · FAQs) 구조 참고만 · partypoker.fr ✗ 봇 확인 · poker-academie 2009 포럼 ✗

### 4-5. 캐시게임 vs 토너먼트
**① pokerstars.fr «Tournoi ou cash game : quel format choisir pour débuter au poker ?»**(#1 · **2026-09-22** · Willy Paul · exa)
- H2 Tournoi ou cash game : les différences en un coup d'œil · H2 Qu'est-ce qu'un cash game au poker ? · H2 Qu'est-ce qu'un tournoi de poker ? · H2 Quel format choisir pour débuter : les quatre critères qui comptent → H3 Le temps que vous pouvez consacrer à une session · H3 Votre budget et votre gestion de bankroll · (잘림)
- 첫 문단 직답(«le cash game aux micro-limites constitue le point de départ le plus simple») · 6행 표(Coût d'entrée · Durée de la session · Valeur des jetons · Structure des blinds · Possibilité de quitter la table · Répartition des gains)
- 용어 축어: «On peut parfois rencontrer le terme français de « **partie libre** », mais on parle plus généralement de « cash game »» · «micro-limites» · «Spin & Go … à trois joueurs»

**② pokerstars.fr «Du Cash Game au Tournoi : La Stratégie Complète Pour Dominer»**(#10 · 2025-09-04) — H2 1. En tournoi, la sélection de mains est un art, pas une science · 2. Vous devrez peut-être renoncer à des situations EV+ · 3. Les petites mises sont plus efficaces · (잘림) — §13: «+0,50 €» EV ✅ · 팟 사이즈 벳 콜 «33 %» ✅

**③ cours-et-fiches «Tournoi vs Cash Game au Poker…»**(#8 · 2026-02-28 · 2,911단어 · 표 5)
- H1 Cash Game vs Tournoi : les différences stratégiques au poker · H2 1. Les différences fondamentales · 2. Structure et blindes(H3 Cash game : les blindes ne bougent jamais · Tournoi : les blindes augmentent sans cesse · Les antes) · 3. La valeur des jetons(H3 Cash game : 1 jeton = 1 unité monétaire · Tournoi : la valeur des jetons est non-linéaire) · 4. L'ICM : le concept clé des tournois(H3 Pourquoi l'ICM change tout · Implications stratégiques de l'ICM) · 5. Stratégie selon la taille du tapis · 6. Les phases d'un tournoi(H3 Phase 1 : Early stage (début) · Phase 2 : Middle stage (milieu) · Phase 3 : Bubble (bulle) · Phase 4 : In The Money (ITM) · Phase 5 : Table finale) · 7. La bulle : le moment critique · 8. Adapter votre jeu de cash game au tournoi(Ajustement 1~5) · 9. Bankroll et variance · 10. Quel format choisir ? · 11. Les erreurs fréquentes · Questions fréquentes
- §13: 앤티 «500/1 000 · ante 100 · 9-max → 2 400» ✅ · ICM(50 000/30 000/20 000 · 500/300/200 €) «environ 280€» → **288,57** · «~340€» → **354,29** · «+60€ / -80€» → **+65,71 / −88,57** 🔴(방향은 맞음)
- 🪶 «ROI 3-10 BB/100 · 15-30 % de ROI» · «ITM ~15-20%» 무출처 · 광고 링크 끼임(«Réserver un golf»)

**④ fr.pokerlistings «Tournois contre Cash Games au poker – Les différences clés»**(#11 · 2025-02-20 · 2,148단어 · 1인칭 칼럼) — H2 Investissement et retour attendu · Pas la même bankroll selon lequel des deux jeux · La qualité des joueurs n'est pas la même · Tournois contre cash games : Une valeur des jetons différente · Des styles de jeu différents entre tournois et parties d'argent · Les Coin Flips ne sont pas les mêmes · La spécificité du jeu à la bulle en tournoi — 🪶 «gagner quelque chose comme 1 tournoi sur 40» 무출처

**⑤ partypoker.fr «Comment jouer au cash game poker: comprendre les règles»**(#4 · 930단어) — H2 Pourquoi jouer aux cash games(H3 Cinq raisons…) · H2 Six règles à prendre en compte pour gagner aux cash games(H3 1. Commencez doucement · 2. Ne misez que si vous avez quelque chose de bien… · 3. Faites attention à la position · 4. Prenez le contrôle · 5. Disputez des parties à cinq ou six joueurs · 6. Ne soyez pas trop dur avec vous-même) — 🪶 제목은 «règles»인데 규칙(바이인 최소·최대 · 리바이 · 이탈) 거의 없음

**⑥ fr.wikipedia «Cash game»**(#1 · 530단어) — H2 Règles · Exemples — 축어 «les joueurs peuvent rentrer avec un tapis de vingt à cents blindes» · rake 정의 / pokerpro «Cash game ou tournoi?»(2020 · H2 Comment choisir? · Quel est le format le plus avantageux?) 낡음

### 4-6. 경쟁 글 수치 검산 요약

| 글 | 주장(축어) | 내 계산 | 판정 |
|---|---|---|---|
| PokerStars ICM | 464,76 / 346,67 / 188,57 € | 동일 | ✅ |
| 위키 ICM | 45,18 / 32,25 / 22,57 | 동일 | ✅ |
| PokerListings ICM | 37,18 / 24,33 / 24,33 / 14,17 $ | 동일 | ✅ |
| PokerPro ICM | 결과 숫자 없음 | 431,67 / 189,44 ×3 | ✗ 누락 |
| cours-et-fiches ICM | ~280 € → ~340 € · +60/−80 | 288,57 → 354,29 · +65,71/−88,57 | 🔴 근사 오차 |
| cours-et-fiches 앤티 | 2 400 | 2 400 | ✅ |
| PokerStars 숏스택 | A♠9♠ ≈ 42 % | 36,4 %(수딧 해석 35,0 %) | 🔴 |
| PokerStars 숏스택 | 버튼 셔브 ≈ 40 % | 52,0 %(690/1326) | 🔴 |
| PokerStars 구조 | «50/1 000» → 50 BB | 500/1 000 오타 | 🔴 |
| PokerStars cash→tournoi | +0,50 € · 33 % | 0,50 · 33,3 % | ✅ |
| PokerListings 버블 | AA ≈ 80 % vs 다른 페어 | AA vs KK ≈ 82 % | ✅ 근사 |

---

## 5. 장단점 표

| 축 | 상위 글 공통 강점(갖출 것) | 공통 약점(차별화 지점) |
|---|---|---|
| ICM | 결과 표(PokerStars) · Cash vs Tournoi 대비표 · Bubble Factor·Payjump 용어 · 상황별 압력표 · FAQ 5 | **계산 과정 0**(위키 수식 제외) · 결과 누락(PokerPro) · deal vs chip chop 수치 0 · 경험담 0 |
| 토너먼트 | 구조 6요소(PokerStars) · 5단계 표 · 형식 종류(KO·새틀·개런티) | **등록 방법·Day 1·체크리스트 0편**(PAA «Comment participer…» 직답 없음) · 지급 구조 수치 0 · 블라인드 오기 · 자동번역 문체(GG) |
| 버블 | 스택 3분할(PokerStars) · bubble boy·«la bulle éclate»(위키) | **본문 글 SERP 0편** · 버블 팩터 수치 0 · 새틀 AA 폴드 계산 0 · hand-for-hand 0 |
| 숏스택 | tu·경험담 도입·구간표·셔브표(PokerStars) · «petit tapis» 병기 | **에퀴티·범위 % 오류** · M-비율 0편 · 셔브 vs 콜 레인지 구분 0 · 2009~2019 낡은 글 · «short stack poker» SERP는 외국어 |
| vs | 2026-09 PokerStars(직답+6행 표+4기준) · cours-et-fiches 표 5·FAQ | 수익성 무출처 · ICM 근사 오차 · 라이브 룸 질문 0 · (세금·합법은 조준 금지) |

---

## 6. 우리 글 대조 (EN H2·FAQ ↔ 프랑스 의도)

fr 도구: `/fr/calculator` = seo.title «Calculateur poker — équité, cotes du pot et ICM» · ICM 탭 · icmGuide H2 «Comment utiliser le calculateur ICM — un exemple de bulle en 3 minutes» · Push or Fold 탭 · FAQ «Comment utiliser le calculateur ICM ?» 외. `/fr/glossary` = 용어 사전. `/fr/hand-chart` = 레인지 차트. `/fr/tournaments` = **없음**.

| slug | EN이 이미 이기는 점 | EN에 없는 프랑스 의도(→ §7) |
|---|---|---|
| holdem-tournament | 구조·블라인드·4단계·형식·새틀·등록 3방법·**Day 1 시간표**·지급 구조·용어·체크리스트·FAQ 9 | «Comment se déroule / fonctionne un tournoi de poker ?»(PAA 3) · «Quel est le prix (d'entrée)…»(PAA 3) · «Que signifie être ITM…»(itm 170) · «C'est quoi MTT…»(mtt 210) · «Combien de temps dure…»(자동완성 7변형 = EN FAQ 1) · ITM 단계 · 프랑스 용어(frais d'entrée · inscription tardive · réentrée · KO progressif) |
| holdem-icm | 3인 재귀 손계산 · ICM vs chip EV · ICM tax · bubble factor · deal vs chip chop · 한계 · FAQ 8 | «Que signifie / C'est quoi l'ICM ?»(PAA 2) · «Comment calculer l'ICM…»(PAA = EN H2) · Payjump(palier de gains) · cEV/$EV 표기 · «L'ICM s'applique-t-il aux cash games ?»(= EN FAQ 5) |
| holdem-bubble | 정의·3종 버블·스택 3분할·bubble factor·hand-for-hand·새틀 AA 폴드·min-cash 함정·FAQ 9 | «C'est quoi faire la bulle ?» · «la bulle éclate» · «bulle stone» · «avant-bulle» · 🔴 도구 icmGuide가 «bulle» 예시 사용(§8-②) |
| holdem-short-stack | BB 정의·fold equity·M-ratio 5존·깊이·포지션별 셔브·셔브 vs 콜·차트·버블 ICM·실수 5·FAQ 9 | «C'est quoi un stack au poker ?»(PAA 2 · 170) · «tapis effectif»(PAA) · «petit tapis» 병기 · 표기 «push or fold»(도구 정본 · EN «push/fold»와 다름) |
| holdem-tournament-vs-cash-game | 핵심 차이·정의·칩≠돈·블라인드·전략·ICM·난이도·수익성·뱅크롤·떠날 때·입문·라이브 룸·FAQ 10 | «Quelle est la différence entre un cash game et un tournoi ?»(**PAA 4회** — 레인 최다) · «cash game c'est quoi / définition / comment jouer» · «partie libre» · «… rentable» · micro-limites · Spin & Go(«cash game ou spin») |

---

## 7. 처방 (레인 A 재료 — 카피는 방향만 · 최종 seoTitle·desc는 레인 A Fable)

공통: 신설·개명 H2 직후 `> **바로 답**` 40~75단어 · 2인칭 tu(PokerStars 숏스택도 tu — 0-3 §3-A 확정 전 후보) · 숫자 «464,76 €» · 신규 수치 §13 검산 후 기재 · 다른 글의 ICM 단락은 2~3문장 + `holdem-icm` 앵커(§8-⑤).

### 7-1. holdem-icm — 우선순위 **1**(480 × 경쟁 글 계산 과정 0)
- **주력어**: «ICM au poker» / «ICM poker»(SERP 제목 6/7이 «ICM au poker») · 보조 «Independent Chip Model» · 정의형 «signification / c'est quoi». 훅 = «Les jetons ne valent pas de l'argent comptant»(PokerStars 축어와 같은 축 · EN «face value») + **«calcul à la main»**(아무도 안 보여 줌).
- **H2**: «Que signifie ICM au poker ?»(EN What Is 개명 · PAA) · «Comment calculer l'ICM au poker ? (le modèle Malmuth–Harville)»(EN How Is ICM Calculated 개명 · PAA · 끝에 `/fr/calculator` ICM 앵커 1회) · «ICM ou chip EV (cEV vs $EV) : quelle différence ?»(개명) · «Bubble factor, risk premium et payjump : pourquoi suivre coûte plus cher»(확장 · «palier de gains» 병기) · «Deal ICM ou chip chop : comment partager une table finale ?»(유지 · «icm poker deal») · 나머지 EN H2 유지
- **FAQ**: C'est quoi l'ICM ? · Comment calculer l'ICM au poker ? · L'ICM s'applique-t-il aux cash games ? · («Que signifie ITM…»는 tournament 앵커)
- **차별화**: EN 3인 손계산(38,39/32,75/28,86 · 2위 확률 33,9 % 전개) + **위키와 같은 칩 50/30/20 %에 지급만 70/30으로 바꾸면 45,18/32,25/22,57** 비교 1줄 · deal vs chip chop 수치 · `/fr/solver`·`/fr/calculator` 앵커
- **카니발**: «calculateur ICM / calcul icm poker»(각 10) = 도구 몫 → 제목·H1에 «calculateur» 금지(§8-②)

### 7-2. holdem-tournament — 우선순위 **2**(헤드는 일정 의도 · 구조 롱테일 + PAA 무주공산)
- **주력어**: «tournoi de poker» + «comment ça se déroule / fonctionne» · «MTT» 병기. 🔴 제목·H1에 도시·연도·calendrier·«près de» 금지. 훅 = «첫 대회»(EN «Never played…») — 프랑스 SERP에 첫 대회 축 글 0(«premier tournoi de poker» 자동완성 결과 없음 = 경쟁 없음).
- **H2**: «Comment se déroule un tournoi de poker ? (la réponse en 30 secondes)»(EN What Is 개명 · PAA 3) · «Quel est le prix d'un tournoi de poker ? Buy-in, frais et tapis de départ»(EN Structure 개명 · PAA 3) · «Structure des blindes en tournoi : niveaux, antes et horloge»(유지) · «Les 4 phases d'un tournoi»(유지 · **«Dans l'argent (ITM)» H3 추가 검토** = EN 외 추가 → 진행 파일 기록) · «C'est quoi un MTT ? Freezeout, KO progressif (bounty), satellite, deepstack»(EN Types 개명 · PAA · «bounty poker c est quoi») · «Comment participer à un tournoi de poker ? 3 façons de s'inscrire»(EN How to Enter 개명 · PAA 4회) · 지급 구조 H2에 «Que signifie être ITM au poker ?» 직답 흡수
- **FAQ**: Comment participer à un tournoi de poker ? · Quel est le prix d'un tournoi de poker ? · Que signifie être ITM au poker ? · Combien de temps dure un tournoi de poker ? · Peut-on s'inscrire en retard ? · C'est quoi un tournoi bounty ?
- **차별화**: Day 1 시간표·체크리스트(프랑스 0편) · 지급 구조 수치 · 블라인드 표 정확 표기 · 경험담
- **편차**: EN이 `/en/tournaments`·제외 대회 가이드 5편을 가리키면 fr엔 대상 없음 → 진행 파일 «링크 편차». 🔴 EN FAQ «Is it legal to host a poker tournament at home?» = 합법성 축 → 빼거나 중립 한 줄(레인 A · `legality-ban-scope`). «organiser un tournoi» 의도 조준 금지.

### 7-3. holdem-tournament-vs-cash-game — 우선순위 **3**(320 × PAA 4회)
- **주력어**: «cash game ou tournoi»(SERP #1 어순 «Tournoi ou cash game») · «cash game poker». 🔴 «cash game» 단독 오염(candy cash game · game cash 매장 — 0-1 §1) → «poker» 앵커 필수. 경쟁 = PokerStars 2026-09 신작 → EN의 넓이(ICM·bb/100·뱅크롤·떠날 때·라이브 룸) + 수치 정확성.
- **H2**: «Quelle est la différence entre un cash game et un tournoi ?»(EN Core Difference 개명 · PAA 4) · «C'est quoi un cash game au poker ? (règles et fonctionnement)»(EN 개명 · «partie libre» 1회 병기) · «Cash game ou tournoi : lequel est le plus rentable ? bb/100 vs ROI»(EN 개명 · «… rentable» 자동완성) · ICM H2는 2~3문장 + icm 앵커 · 나머지 유지
- **FAQ**: Quelle est la différence entre un cash game et un tournoi ? · Cash game ou tournoi : par quoi commencer ? · L'ICM existe-t-il en cash game ? · Combien de caves faut-il en cash game et en tournoi ?
- **차별화**: ICM 짧은 예시를 정확값으로(50k/30k/20k · 500/300/200 → 288,57 · 이기면 354,29 · 지면 200) · 출처 있는 수익성 · 라이브 룸 질문. 🔴 EN FAQ «taxed on poker tournament winnings?» = 세금 축 → 빼거나 «국가별 다름» 중립 한 줄.

### 7-4. holdem-bubble — 우선순위 **4**(10~20 × **본문 경쟁 0 빈 SERP**)
- **주력어**: «bulle au poker» / «faire la bulle» · 보조 «bubble» · «bulle tournoi poker».
- **H2**: «C'est quoi la bulle au poker ? (et « faire la bulle »)»(EN What Is 개명 · PAA · 자동완성) · 스택별 3 H2 유지(PokerStars «Petits stacks / Stacks moyens / Gros stacks»와 같은 분할) · «Bubble factor : le chiffre qui dit quand se coucher»(유지) · «Hand-for-hand et « la bulle éclate » : ce qui se passe à la table»(EN 개명 · 위키 관용구) · «Bulle de satellite : pourquoi coucher les As ?»(유지)
- **FAQ**: Qu'est-ce que la bulle au poker ? · C'est quoi faire la bulle ? · Qui est le bubble boy ? · C'est quoi une bulle stone ? · Faut-il se coucher sur la bulle ?
- **차별화**: 버블 팩터 수치 · 새틀 AA 폴드 계산 · 경험담. **카니발**: 도구 icmGuide «exemple de bulle» → 글은 정의·전략 축, 도구는 «calculateur» 축 · 상호 앵커(§8-②).

### 7-5. holdem-short-stack — 우선순위 **5**(20 · «push or fold» 70은 도구 몫)
- **주력어**: «short stack» + «tournoi» + «(petit tapis)» 병기 — 프랑스어 글은 «short stack **tournoi**»에서만 노출. 🔴 «tapis court / petit tapis» 단독 금지(매트). «push or fold»는 본문·앵커 표기.
- **H2**: «C'est quoi un short stack au poker ? (combien de big blinds)»(EN 개명 · PAA «C'est quoi un stack…» 2회) · «Tapis effectif : le stack qui compte vraiment» 🆕 EN 외 H3 후보(PAA · 진행 파일 기록) · «Push or fold : pourquoi le short stack shove»(EN Why Push/Fold 개명 · 도구 Push or Fold 앵커) · «Le ratio M de Harrington : zones verte, jaune, orange, rouge»(유지 · 프랑스 0편) · 나머지 유지
- **FAQ**: C'est quoi un stack au poker ? · Qu'est-ce que le tapis effectif ? · Combien de big blinds pour être short stack ? · Faut-il limper avec un short stack ?(PokerPro «Envisager … Limp» 대조)
- **차별화**: PokerStars 오류(42→36 % · 40→52 %) 같은 함정을 피한 정확한 에퀴티·콤보 수(우리 셔브 예시도 콤보/1326 · MC 검산 필수) · M-비율 · 셔브/콜 구분

---

## 8. 0-3 판정 재료 (판정 안 함 — 증거 + 권고 1줄)

### 8-① «tournoi poker» 일정 의도 비중 (`fr-core-volumes` §4 🪶 재료)

| 표본 | 일정·장소·이벤트 | 운영사 상품·프로모 | 구조·전략 콘텐츠 |
|---|---:|---:|---:|
| 자동완성 «tournoi poker» + «tournoi de poker» 30 | **30 (100 %)** | 0 | 0 |
| 유기 «tournoi poker» 9 | 4 | 2 | 3 |
| 유기 «tournoi de poker» 7 | 5 | 2 | 0 |
| **유기 합계 16** | **9 (56 %)** | **4 (25 %)** | **3 (19 %)** — pokerpro 형식 · GG 단계 · pokernews 단계 |
| PAA 합계 8 | 4 (50 %) — 플러스 connus ×2 · Où trouver · en France en 2026 | — | **4 (50 %)** — Comment participer ×2 · prix · se déroule |
| related 4 | 4(près de france/paris ×2) | | |
| AI overview | 두 검색어 모두 «있다»(비동기 · 본문 미반환) | | |
| 볼륨 | paris 880 · bordeaux 480 · france 2026 170 · autour de moi 70 · calendrier 2026 70 · 2026 50 (+0-1: aix 390 · calendrier 2026 390 · la grande motte 260) | | structure 20 · comment jouer 10 · stratégie 20 · mtt 210 · itm 170 |

- 요약: 헤드 화면의 **유기 81 %가 비콘텐츠**(일정 56 + 운영사 25), 자동완성 100 % 일정. 구조·전략은 유기 19 % · PAA 50 %. 참고로 구조 질의(«comment jouer un tournoi de poker»)로 바꾸면 유기 9 중 콘텐츠 7 · 개최 2.
- **권고 1줄**: `holdem-tournament`는 헤드 정면 대신 PAA 4문(participer · prix · se déroule · fonctionne)과 MTT/ITM 롱테일로 들어가고, 일정 의도는 보드 로케일 + 프랑스 대회 데이터 공급이 확정될 때만 별도 트랙으로 판단한다.

### 8-② ICM 소유: `holdem-icm` ↔ `/fr/calculator`(seo.title «… et ICM» · ICM 탭 · icmGuide «exemple de bulle»)
- 증거: «icm poker» 유기 정보형 8/9 · 도구 1(icmizer) · PAA 정의형 2 + 계산 방법 설명형 1 · 볼륨 «icm poker» 480 · def 40 vs «icm poker calculator» 10 · «calcul icm poker» 10. `fr-calculator.md` §1이 «icm poker 480을 제목에» 넣은 근거는 «fr 정보형 축 소유자 0»이었고 51편 착수로 전제가 바뀐다.
- **권고 1줄**: «icm poker»(정의·개념)는 `holdem-icm`, «calculateur/calcul ICM»은 `/fr/calculator`로 나누고, 도구 title의 «ICM»은 기능 나열로 둔 채 상호 앵커(글 → Calculateur ICM · 도구 icmGuide → Qu'est-ce que l'ICM)로 정리할지 0-3에서 확정.

### 8-③ «push or fold» — 유기 프랑스어 콘텐츠 0 · PAA 영어 4 → **권고**: short-stack 글은 H2 문구 일부·앵커로만, 헤드는 도구(현 소유 유지).
### 8-④ «Quel est le tableau range pour un tournoi de poker ?»(PAA) → **권고**: `/fr/hand-chart` 몫 · tournament·short-stack에서 앵커 위임.
### 8-⑤ ICM 중복 정의 — EN 4편(vs «ICM: The Tournament Concept…» · bubble «ICM in One Paragraph» · short-stack «The ICM Twist» · tournament 용어집)이 각자 ICM을 설명, 프랑스 SERP에선 ICM이 독립 헤드(480) → **권고**: 네 글의 ICM 단락은 2~3문장 + `holdem-icm` 앵커, 정의 H2 금지(tr L4 처방과 같음).

---

## 9. 커버리지 표

| 검색어 | 1 자동완성 | 2 새 볼륨 | 3 SERP·PAA | 4 원문 정독 |
|---|---|---|---|---|
| **icm poker** | ✅ + au/c'est quoi/qu'est-ce que/calcul/deal | ✅ 0-1 480 · 신규 12어 | ✅ PAA 4 · KG · 영상 · AIO·FS 없음 | ✅ PokerStars · 위키 · PokerPro · PokerListings — ✗ clubpoker(차단) · gtolab(영어) |
| **tournoi poker** | ✅ 15/15 일정 | ✅ 0-1 1,900 · 일정 6어 | ✅ PAA 4 · AIO 있음 | ✅ GGPoker · PokerNews · PokerPro — 일정·운영사 6자리 ✗(콘텐츠 아님 · §8-① 집계) |
| tournoi de poker | ✅ 15/15 일정 | ✅ 1,900(같은 수요) | ✅ PAA 4 · AIO · 영상 | ✗ 7자리 전부 일정·운영사(정독할 콘텐츠 0) |
| comment jouer un tournoi de poker | ✅ | ✅ 10 | ✅ PAA 4 · related 8 | ✅ PokerStars 구조(오기 1) · PokerStars 전략 · PokerPro 8 conseils — ✗ partypoker(봇) · 개최 2편(범위 밖) |
| comment fonctionne un tournoi de poker | ✅ 결과 없음 | ✅ `-` 계열 | ✅ PAA 4 | ✗ 규정·포럼·헬프뿐 — 위 글로 갈음 |
| **cash game poker** | ✅ + c'est quoi/ou tournoi/vs | ✅ 0-1 320 · 신규 4어 | ✅ PAA 4 · KG · 영상 | ✅ 위키 · partypoker.fr · PokerListings vs |
| cash game ou tournoi | ✅ | ✅ 0-1 10 · 신규 `-` 2 | ✅ PAA 4 | ✅ PokerStars 2026-09 · PokerStars cash→tournoi(✅) · cours-et-fiches(🔴) · PokerPro 2020 |
| cash game poker c'est quoi | ✅ | ✅ 10 | ✅ PAA 4 | ✗ 사전·허브뿐 — 위 글로 갈음 |
| mtt poker(경량) | ✅ + c'est quoi | ✅ 0-1 210 · definition 20 | ✅ PAA 4 · AIO 본문 | ✗ 포럼 5·앱·블로그 — 정의 글 0(빈 SERP) |
| bulle poker(경량) | ✅ + au poker · bubble | ✅ 0-1 20 · faire la bulle 10 | ✅ PAA 4 · AIO 본문 | ✅ PokerStars 버블 · 위키 — rmcsport(영상) · pokerstrategy(사전) |
| bulle tournoi poker | ✅ | ✅ 0-1 `-` | ✅ PAA 4 | ✅ PokerListings 버블 사례 |
| short stack poker(경량) | ✅ 영어 + 프랑스어 변형 5종 | ✅ 0-1 20 · stack 170 · strategy 10 | ✅ PAA 4 · 영상 | ✅ bluffingmonkeys(구조만) — ✗ 2009 포럼 · 외국어 |
| short stack tournoi poker | ✅ | ✅ 0-1 `-` | ✅ PAA 4 · related | ✅ PokerStars 7 stratégies(🔴 2건) · PokerListings · PokerNews · Poker Académie · PokerPro — ✗ partypoker.fr(봇) · clubpoker(차단) |
| push or fold poker | (`fr-calculator.md` 승계) | (0-1 70) | ✅ 경계 확인 | ✗ 도구 몫 · 프랑스어 글 0 |
| itm · bounty · freezeout · satellite · sng · table finale · deal | ✅ 각 시드 | ✅ 1-B | — (H3/FAQ 재료 · 별도 SERP 없음) | — |

### 글별 «PAA·자동완성 질문 확보»

| slug | 확보한 질문(축어) | 판정 |
|---|---|---|
| holdem-icm | Que signifie ICM au poker ? · Comment calculer l'ICM au poker ? · C'est quoi l'ICM ? · icm poker signification / définition / def · c est quoi l icm poker · icm poker deal | ✅ |
| holdem-tournament | Comment se déroule un tournoi de poker ? · Comment fonctionne un tournoi (de poker) ? · Comment participer à un tournoi de poker ? · Quel est le prix (d'entrée pour) d'un tournoi de poker ? · C'est quoi MTT au poker ? · Que signifie être ITM au poker ? · combien de temps dure un tournoi de poker · comment (bien) jouer / gagner un tournoi de poker · bounty poker c est quoi | ✅ |
| holdem-bubble | Qu'est-ce que la bulle au poker ? · bulle poker c est quoi · faire la bulle (au) poker · poker bulle definition · poker bubble boy · poker bubble factor · C'est quoi faire la bulle ?(Winamax) | ✅ |
| holdem-short-stack | C'est quoi un stack au poker ? · Que signifie "stack" dans le contexte du poker ? · Qu'est-ce que le tapis effectif au poker ? · Comment calculer le stack au poker ? · short stack poker meaning / strategy / range | ✅ |
| holdem-tournament-vs-cash-game | Quelle est la différence entre un cash game et un tournoi ?(PAA 4회) · cash game poker c'est quoi · cash game définition / explication / comment jouer · cash game poker règle · cash game ou tournoi poker rentable | ✅ |

✗ 사유: clubpoker.net 전 페이지 Cloudflare 차단 · partypoker.fr/.com 봇 확인 · «tournoi de poker»·«mtt poker»는 정독할 콘텐츠가 상위에 없음(유형 집계로 대체). **글별 질문 확보 ✗ 0.**
