# L-G GTO 13 — fr SERP 조사·처방 (2026-10-07 · fr 클러스터 0-2)

> 규격 = `00-brief.md` «레인마다 할 일» 1~8. 대상 = `fr-cluster-plan.md` §1 🅶 13편(EN 마스터 `lib/posts-en/<slug>.ts` 대조) + `/fr/solver` 경계.
> 측정: DataForSEO(location_code **2250** · language_code **fr** · 2026-10-07). 0-1에서 잰 볼륨(`fr-core-volumes.md` §2 🅶)은 다시 재지 않았다 — 여기 볼륨은 **새 후보만**. `-` = Google Ads 데이터 없음(≠ 수요 0).
> 원자료(gitignore): `tmp/fr-serp-G-ac.json` · `-ac2.json`(자동완성 60건) · `-vol.json`(새 후보 60개) · `-serp.json` · `-serp2.json`(SERP 16개) · `-heads-1.json` · `-heads-2.json`(헤딩 추출). 스크립트 = `tmp/fr-serp-G-dfs.mjs` · `tmp/fr-serp-G-heads.mjs`.
> 🔴 §1-E: 13편은 «검색 유입 글»이 아니라 **솔버 증거 자료**다. 처방은 실측 수요가 있는 자리만 넣고, 남의 헤드텀은 빌리지 않는다. `gto poker`·`solver poker`의 주인은 `/fr/solver`(`fr-gto-solver.md` 승계 — 여기서 다시 조사하지 않았고 SERP만 새로 확인).

---

## 0. 한 줄 결론

1. **주인 없는 실수요 두 개가 13편 안에 있다**: `check raise poker` 260(= `check raise` 260 · 한 수요)과 **`spr poker` 210**(0-1에 없던 새 수치). fr 51편에 check-raise 필라도 SPR 필라도 없고, EN 마스터가 이미 이 두 단어를 각각 `low-board-check-raise`·`3bet-pot-cbet`의 seoTitle·태그에 넣어 두었다 → **0-3 판정 재료 2건**(§8). 나머지 스팟어(monotone·pairé·pot 3bet·blind vs blind·avantage de range·range polarisée·sizing)는 전부 10 이하.
2. **프랑스어 텍스트 경쟁이 비어 있는 자리가 많다**: donk bet(1위 = reddit 기계번역, 프랑스어 정의 글 0) · board monotone(1페이지 전부 영어 + 프랑스어 영상 1) · blind vs blind(영어 + 2008년 PokerNews fr). 반대로 **check raise·board pairé·pot 3bet·avantage de range·sizing은 프랑스어 커뮤니티(Poker Académie·Kill Tilt·Club Poker·PokerStars.fr)가 채워 두었다** — 다만 솔버 수치가 있는 글은 0이다.
3. **PAA가 우리 FAQ 문장과 거의 축어로 맞는 자리 5개**: «Quelle est la définition de "donk" ?» · «C'est quoi le sizing ?» · «Qu'est-ce que signifie être polarisé au poker ?» · «C'est quoi le GTO ?» / «Que signifie GTO ?» · PA 포럼 제목 «Quelle est la probabilité de tomber sur un board pairé ?». 레인 A는 이 축어를 FAQ·H2에 그대로 옮긴다.

---

## 1. 새 후보 볼륨 (DFS search_volume · 2250 · fr · 0-1에 없던 것만)

| 검색어 | 월 볼륨 | 비고 |
|---|---:|---|
| poker gto | 480 | = `gto poker` 480(0-1)과 같은 수요 — 더하지 마라 |
| **check raise** | **260** | = `check raise poker` 260(0-1)과 같은 수요. 12개월 260~320 안정 |
| **spr poker** | **210** | 🆕 12개월 90~320 + 한 달 1,000 스파이크. 평시 ~140 |
| set poker | 170 | 🔴 **함정** — SERP = 포커 세트(칩 가방) 쇼핑(§3-L). 브렐랑 의미 아님 |
| donk bet | 140 | = `donk bet poker` 140(0-1)과 같은 수요 |
| donkbet poker | 140 | 같은 수요(붙여쓰기 변형 — Poker Académie·Club Poker 표기 «donkbet») |
| trips poker | 50 | ace-paired FAQ 재료 |
| gto poker gratuit | 30 | → `/fr/solver` |
| overbet poker | 30 | 3bet-pot-bet-sizing FAQ «overbet» 문항 재료 |
| poker gto memento | 20 | 책·PDF 의도(제외) |
| donk poker · donk bet poker definition · board poker · check back poker | 각 20 | |
| poker gto definition · gto poker definition · gto poker chart · gto poker trainer · check raise definition · check raise poker definition · donk bet definition · donk bet turn · paired board poker · monotone board poker · 3bet pot · nut advantage · range advantage(poker) · polarized range poker · range polarisée · geometric bet sizing poker · bet sizing(poker) · blind vs blind(poker) · equity realization poker · minimum defense frequency · lead poker | 각 10 | |
| check raise poker strategy | 0 | |
| c est quoi gto au poker · qu est ce que le gto au poker · gto poker signification · gto c'est quoi · poker gto range · double check raise poker · donk bet c'est quoi · donk bet traduction · board poker definition · board pairé · monotone flop poker · flop monotone · board monotone · 3bet pot poker · texture (de) board poker · spr poker c'est quoi · solver poker en français · solver poker c est quoi · mise de continuation · cbet 3bet pot | `-` | 자동완성에는 뜬다(§2) — 질문 표현 재료로만 |

---

## 2. 자동완성 (DFS autocomplete · 2250 · fr · 60건 · 전문 = `tmp/fr-serp-G-ac*.json`)

> 영어·다른 언어 변형(meaning · que es · là gì · significado …)과 무관어는 줄였다. 프랑스어 질문형은 **굵게**.

**GTO·솔버 (→ `/fr/solver` 몫 · 기록만)**
- gto poker: gto poker gratuit · meaning · solver · wizard · gems · api · chart · trainer · free · simplified · book · strategy · calculator · gratis
- gto poker c'est quoi → gto poker signification · definition · def · c'est quoi le gto au poker → **c est quoi gto au poker** · c quoi gto · **qu est ce que le gto au poker** · poker gto definition
- «poker * gto»: poker gto wizard · memento(pdf) · randomizer · api · spin(pdf) · range · preflop ranges · blog · style · chart · solver · trainer
- solver poker / solveur poker: **solver poker gratuit** · **solver poker gratuit en ligne** · en ligne · **en français** · mac · ia · api · **c est quoi** · android · online · app · preflop · open source · **winamax**
- c'est quoi un solver: c est quoi un solver · **c est quoi un solveur** · c est quoi solveur excel(🔴 Excel 오염 — `fr-gto-solver.md` §1-②)

**check-raise**
- check raise poker / check-raise poker / check raise au poker: definition · **brisbane · queensland · club · room · dc poker**(클럽 이름) · double check raise · fold/call check raise · check vs raise · poker check raise strategy
- check raise: check raise poker · **check raise ch**(스위스 대회 사이트) · definition · all in · fold · sizing · call · flop · crypto · texas holdem check raise · strategy
- 결과 없음: comment check raise poker · quand faire un check raise · quand check raise · c'est quoi un check raise · check raise c'est quoi
- → 프랑스어 질문형 자동완성 **0**. 정의형 + 클럽 브랜드.

**donk**
- donk bet: donk bet poker · definition · **turn · flop · river** · traduction · **donk bet c'est quoi** · example · strategy · donk betting
- donk bet c'est quoi / c'est quoi un donk bet: **c'est quoi un donk bet au poker** · donk bet signification · def · definition · traduction
- donk poker / donk au poker: **donkbet poker** · donk bet au poker · donk poker definition · term · slang · traduction · donk shove · donk lead

**보드 텍스처**
- board monotone poker: monotone board poker meaning · monotone boards poker · board poker definition · flop monotone → monotone flop poker · **monotone flop odds** · cbet monotone / comment jouer un board monotone = 무관뿐
- board pairé poker: board poker · board poker definition · paired board poker · flop pairé poker / board humide poker = 결과 없음
- board sec poker: board si poker · board poker definition · board coverage poker
- texture (du) board poker: **texture de board poker** · board texture poker meaning · textured board poker
- c bet poker(🔴 L-D 몫 · 기록만): c bet poker definition · c bet range poker · continuation bet poker · delayed c bet poker · poker c bet strategy · c bet sizing poker

**레인지·사이징·SPR·3bet 팟·BvB**
- range advantage poker: range advantage meaning poker · range advantage quiz · avantage de range → **avantage de range poker** · nut advantage poker → nut advantage · nuts poker club
- range polarisée poker: polarized range poker (meaning) · range polarisée · range poker signification/pourcentage/pdf
- sizing poker: sizing poker definition · sizing poker agile · (이하 range poker 계열 13 — `/fr/hand-chart` 몫) · sizing au poker → **comment faire les sizing au poker** · **que veut dire sizing au poker** · sizing tell poker
- bet sizing poker: reddit · theory · value bet sizing · 3/4 bet size · c bet range · **geometric bet sizing poker** · optimal bet sizing · mise géométrique poker → mise geometrique poker · mise poker règle
- overbet poker: definition · meaning · overbet turn/river · overbetting · poker overbet strategy · overbet jam
- spr poker: definition · **spr poker c'est quoi** · calculator · explained · formula · chart · c'est quoi le spr au poker → **c est quoi le spr au poker** · spr def poker · **le spr au poker** · spr c'est quoi → **spr qu est ce que c est** · spr c quoi
- 3bet pot: 3bet pot poker · **3bet pot oop · 3bet pot ip** · 3bet pots cash game · **cbet in 3bet pots** · pot 3bet poker → pot 3 bet · poker 3 bet light · comment jouer pot 3bet = 결과 없음
- blind vs blind poker: small blind vs big blind in poker · blind poker meaning/signification/definition · blind contre blind poker = 결과 없음
- brelan ou set → brelan ou paire · ou couleur · ou carré · ou full («set»은 안 붙는다) · trips ou set = 곤충(thrips)뿐

**와일드카드**: «comment * au poker»(jouer · gagner · miser · distribuer · progresser …) · «qu'est-ce que * poker»(limper · ante · utg · cev · itm …) → GTO 의도 0 (L-A·L-D 몫).

---

## 3. SERP 상위 10 + PAA (organic/live/advanced · desktop · depth 10)

> featured snippet = **16개 SERP 전부 0**. AI overview = `gto poker` 1건뿐.

### 3-A. gto poker (480 · 주인 `/fr/solver`)
AIO 있음 — 첫 문장 축어 «Le GTO Wizard est un outil de pointe utilisé pour étudier la stratégie GTO au poker.»(인용 = gtowizard · spinelite.fr · pokerstars.fr GTO 글 · YouTube) · 이미지 팩. organic = 앱 스토어 4(GTO Poker Trainer · GTO Gecko · GTO Poker Edge · DTO MTT) · poker-academie 포럼 «Théorie GTO» · pokernews(영어) · YouTube · amazon.fr 책.
**PAA**: C'est quoi le GTO ? · Que signifie GTO ? · Qui est le goat du poker ? · Quels sont les différents styles de poker ?
→ 프랑스어 정보 글은 organic 0(AIO 인용으로만).

### 3-B. solver poker (320 · 주인 `/fr/solver`)
1 play.google JTO · 2 **eastriverpoker.com «Le solveur poker»**(2023) · 3 reddit ?tl=fr «Nouveau solver GTO gratuit : r/poker» · 4 앱 · 5 somuchpoker · 6 YouTube «Tuto GTO Wizzard…» · 7 poker-academie 포럼 «Applications post flop + et solver + (GTO)» · 8 betsperts · 9 888poker «Solver- Poker Definition» · 10 앱.
**PAA**: Quel est le meilleur solver de poker ? · C'est quoi un Solver ? · Quel est le meilleur logiciel pour gérer un tournoi de poker ? · Quel est le meilleur logiciel pour apprendre au poker ?
→ `fr-gto-solver.md` §2 «무료 프랑스어 브라우저 솔버 자리 비어 있음» 유지.

### 3-C. check raise poker (260)
1 **check-raise.ch «Tournois de Poker»**(스위스 대회 사이트 · 브랜드) · 2 **pokerstars.fr «Check-Raise au Poker : Stratégies de Valorisation et de Bluff»**(2025-10-24) · 3 checkraisepoker.com.au(호주 클럽) · 4 en.wikipedia «Check-raise» · 5 reddit(영어) «Why would I ever check raise any hand?» · 6 clubpoker.net «Check/raise - Lexique poker»(2018) · 7 pokerpro.fr «Check-Raise All-In — Définition Poker» · 8 eurosport.fr «Le Check-Raise»(2008) · 영상팩 = Kill Tilt «Check raise 2ème Paire : Les Clés de la Value en Expresso» · BlackRain79 · RMCSport «Décryptage technique : Le check-raise est-il encore à la mode ?» · 숏폼팩 · 관련 검색 = Check poker · Check raise ch · Texapoker · Call poker · Bet poker · Léman Poker · DC Poker Club · Tournoi Poker Suisse 2026.
**PAA(영어로 나옴)**: What is a good check-raise percentage? · What is the raise rule in poker? · How to announce raise in poker? · How much is a raise in poker?
→ **유형 분포: 브랜드(클럽) 2 · 정의/용어집 4(위키·Club Poker·PokerPro·Eurosport) · 전략 가이드 1(PokerStars.fr) · 포럼 1.** 정의 의도가 다수지만 프랑스어 전략 글 1편이 2위. 솔버 수치 있는 글 0.

### 3-D. donk bet poker (140)
1 reddit ?tl=fr **«Pourquoi le donk est-il si mauvais ? : r/poker»** · 영상팩 = Poker Académie·Paapillon «1001 saveurs de donkbet : quand et comment donkbet ?» · 「… Le donkbet à la turn en SRP」 · Canard Solaire «Pourquoi il ne faut pas donk bet au poker ?» · ALL IN «À QUEL MOMENT DONK BET EN MULTIWAY ?» · 2 poker-academie «Comment réagir au donk bet d'un fish»(영상 페이지 2024) · 3 pokercode(영어 용어) · 4 poker-academie 포럼 «Donkbet ou pas»(2012) · 5 YouTube(영어) · 6 bet442(영어) · 7 handhistorypoker(영어) · 8 phivolcs(기생 스팸) · 9 YouTube(영어).
**PAA**: **Quelle est la définition de "donk" ?** · Que signifie "bet" au poker ? · Que signifie le terme "shove" au poker ? · Quel est le plus gros coup au poker ?
→ **프랑스어 텍스트 정의·전략 글 0**(기계번역 reddit + 영상 + 2012 포럼). 프랑스 코치 영상은 «donkbet»(붙여쓰기)을 쓴다.

### 3-E. spr poker (210 · 🆕)
1 reddit(영어) «SPR still relevant?» · 2 888poker.de(독일어) · 영상팩 = Tuto-Poker «Le SPR» · The Poker Bank ×2 · Stop MyBroke «Le Stack to Pot Ratio - SPR» · 3 pokercoaching «SPR Definition» · 4 **toolsofpoker.com/fr «Entraîneur de ratio stack/pot (SPR) - Exercices»**(도구) · 5 casinobarcelona.es(스페인어) · 6 YouTube · 7 upswing glossary · 8 brasilpoker(포르투갈어) · 9 YouTube.
**PAA**: Comment puis-je bien miser au poker ? · Que signifie MTT au poker ? · Qui est le goat du poker ? · Est-ce que le poker est de la chance ?
→ **프랑스어 텍스트 글 0**(도구 1 + 영상 2). 1페이지가 다국어 정의 글로 채워진 «주인 없는» SERP.

### 3-F. bet sizing poker (10) · sizing poker (70 · 0-1)
- bet sizing poker: 전부 영어(reddit · BetMGM · upswing · hendonmob · pokernews · crushlive). PAA(영어): What is bet sizing in poker? · What is the 15/25/35 rule in poker? · What does bet size mean? · What is the 7/2 rule in poker?
- **sizing poker**: 영상팩 = ShiShi «Comment choisir son sizing au Poker ?» · Kill Tilt «Trouver le SIZING PARFAIT pour bluff» · ALL IN «Quel SIZING choisir en VALUE ?» · organic = pokerstars.fr «Tells du Curseur de Mise» · apprendrelepokerfacilement «Tout savoir sur le sizing au poker»(팟캐스트) · reddit ?tl=fr · poker-academie 퀴즈 · clubpoker 포럼 «Sizing post flop» · pokerstrategy fr 포럼 외. **PAA**: **C'est quoi le sizing ?** · Que signifie "cut off" au poker ? · Quand augmenter les blinds ? · Comment calculer les outs au poker ?
→ 프랑스어 정본 = «sizing»(차용어). «taille de mise»·«mise géométrique» = 0.

### 3-G. board monotone poker (10)
1 upswing glossary «What is a Monotone Board in Poker?» · 2 reddit(영어) · 3 **blog.gtowizard «Maximizing Value on Monotone Flops»**(2023) · 영상팩 = Poker Pro Academy · **Improve Your Poker «Comment jouer sur un board monocolor ? (Solver !)»** · BluffTheSpot · 4 americascardroom · 5 somuchpoker · 6 twoplustwo · 7 pokerstrategy «Why we slow down on monotone boards» · 8 pokerchipforum «Poker Odds for Monotone Flop?» · 9 888poker.
**PAA(프랑스어 일반)**: Qu'est-ce qu'un flop au poker ? · Que signifie "tnt" au poker ? · Quel est le plus gros coup au poker ? · C'est quoi le stack au poker ?
→ **프랑스어 텍스트 0**(프랑스어 영상 1 — 표기 «monocolor»). 앱 fr 라벨은 «monochrome»(`fr-gto-solver.md` §4).

### 3-H. board pairé poker (`-`)
1 **kill-tilt.fr 포럼 «Analyse d'un board pairé»** · 2 **poker-academie 포럼 «Quelle est la probabilité de tomber sur un board pairé?»** · 영상팩 = Kill Tilt ×2 · 3 pokerpro.fr «Top Pair — Définition» · 4 **pokerqz.com/fr «Board pairé | Glossaire»** · 5 **pokerstars.fr «Le C-Bet en 2020 – Quatrième Partie – Sizer Petit sur les Boards Statiques»**(2020-11) · 6 clubpierrecharron «Lexique du Poker» · 7 partypoker.fr «Comment jouer une paire au flop» · 8 purepokercoaching «Lexique» · 9 YouTube «FAUT-IL TOUT PAYER AVEC TOP PAIRE ?».
**PAA(일반)**: Quel est le plus gros coup au poker ? · Quel est l'ordre de parler au poker ? · Comment s'appelle le poker avec 5 cartes en main ? · Est-ce qu'on mélange les cartes au poker ?
→ **전부 프랑스어**(포럼 2 · 용어집 3 · 전략 1). 수요는 없지만 «board pairé» 표기는 프랑스 커뮤니티 정본.

### 3-I. pot 3bet poker (`-` · «3bet pot» 10)
1 reddit ?tl=fr «comment jouer les pots de 3bet OOP ?» · 2 **poker-academie «L'Art de la défense dans les pots 3bet»**(2015) · 3 poker-academie «Les clés du 2 barrel en position après un 3bet» · 4 cours-et-fiches «Le 3-bet au poker : surrelance, ranges et stratégie»(2026-02 · 프리플랍 3벳 — L-D `holdem-3bet` 몫) · 영상팩 = Poker Académie ×4(«Pots 3bet : Cbet en position & Défense Hors Position - Partie 1» 등) · 5 pokerstars.fr «Petite Blind contre Bouton et Pots 3-bet» · 6 kill-tilt 포럼 «Bet sizing dans les pots 3bet» · 7 clubpoker «3b ou 3bet - Lexique» · 8 fr.pokernews «Analyse des ranges dans les pots 3-bet préflop».
**PAA**: Comment gagner souvent au poker ? · C'est quoi la range au poker ? · Comment définir l'ordre de parole au poker ? · Quelles sont les différentes variantes du poker ?
→ 프랑스어 커뮤니티 정본 표기 = **«pots 3bet» / «pot 3-bet»**(앱 fr 라벨 «Pot 3-bet»과 일치). 수요 거의 0.

### 3-J. blind vs blind poker (10)
upswing · 영상(영어 4) · fr.wikipedia «Blind (jeux de cartes)» · reddit ?tl=fr · twoplustwo · pokerstars.fr «Stratégies pour jouer depuis les blindes» · stackexchange · **fr.pokernews «Stratégie poker - Big Blind vs Small Blind»(2008)** · gtowizard glossary «BvB».
**PAA**: C'est quoi les blindes au poker ? · Quelle est la valeur d'un blind au poker ? · Quand augmenter les blinds ? · C'est quoi une blind ?
→ PAA = 블라인드 규칙(L-A `holdem-blind-meaning` 몫). BvB 전략 프랑스어 글 = 2008년 1편.

### 3-K. 보강 SERP (스팟 글별 PAA 확보용)
- **avantage de range poker** (`-` · 10대): 1 kill-tilt 포럼 «AVANTAGE DE RANGE» · 2 reddit ?tl=fr «Besoin d'aide sur l'avantage de range.» · 3 **nicocoachpoker.fr «Avantage de range au poker…»** · 4 pokerstars.fr «Ranges au Poker» · 영상팩 = Nico Coach Poker «L'avantage de RANGE au POKER» · ShiShi «Qu'est ce que l'avantage de range au Poker ?» · P'tit Poks · 5 poker-academie 포럼 · 6 pokerskill fr · 7 rangecraftpoker fr · 8 fr.pokerlistings «Maitrisez le concept de range…». **PAA**: C'est quoi la range au poker ? · **Qu'est-ce que le "cbet range" au poker ?** · Quelle est la range d'ouverture au poker ? · Quel est le tableau des ranges au poker ?
- **range polarisée poker** (10): 1 pokerstars.fr «Pourquoi vous devriez 3-bet plus souvent en cash game» · 2 **gtogecko.com/fr «Sizing des Mises au Poker : Dimensionnez Vos…»** · 3 poker-academie «Contrôler la range adverse» · 4 twoplustwo · 5 fr.pokernews «Value Bluff : Dépolariser sa range…» · 6 clubpoker 포럼 · 7 reddit ?tl=fr · 8 888poker «Polarised» · 9 poker-academie 포럼 · 10 reddit. **PAA**: **Qu'est-ce que signifie être polarisé au poker ?** · C'est quoi la range au poker ? · Qu'est-ce que le "cbet range" au poker ? · Quelle est la range d'ouverture au poker ?
- **board sec poker**: 🔴 쓰레기 SERP(용어집 «Bankroll» · 포럼 · ESPN · 아마존 테이블 매트 4). → 산문 표기로만.
- **texture board poker** (`-`): 영어 6(pokerstars.uk «The Game Theory of Board Texture: Part 1 - Low Dry Flops» 등) + **fr.pokernews «Stratégie Poker : analyser la texture du flop»**. PAA 영어·무관.

### 3-L. 🔴 함정 — set poker (170)
1페이지 전부 **칩 세트 쇼핑**(amazon.fr «Coffrets De Poker» · manopoulos · 인기 상품 팩 · fnac «Mallettes de poker» · cdiscount «Set de poker» …) · 관련 검색 «Set Poker Winamax · Malette Poker professionnel».
→ 제목·H2·태그에 «set poker» 금지. 브렐랑은 «brelan», «set»은 괄호 병기만.

---

## 4. 상위 글 원문 정독 (헤딩 축어)

| # | URL | 날짜 | 분량 | 헤딩 축어 | 표·FAQ·예시 | 솔버 수치 | §13·사실 점검 |
|---|---|---|---|---|---|---|---|
| ① | pokerstars.fr/poker/learn/strategies/check-raise-poker/ (exa) | 2025-10-24 | ~1,800단어 | H1 «Maîtriser le Check-Raise au Poker : Valeur, Bluff et Timing» · H2 «Les Fondamentaux du Check-Raise» · «Stratégie de Check-Raise pour la Valeur» · «Tactiques de Check-Raise en Bluff» · «Lire la Texture du Tableau pour Check-Raise» · «Position et Profondeur de Tapis : Facteurs Clés» · «Fréquence et Équilibre du Check-Raise» · «Erreurs Courantes du Check-Raise» · «Concepts Avancés du Check-Raise» · «Mettre en Pratique vos Check-Raises» · H3 FAQ «À quelle fréquence dois-je check-raise dans les cash games ?» · «Puis-je check-raise avec des tirages de façon rentable ?» · «Dois-je ajuster mon sizing en fonction de la profondeur du tapis ?» · «Comment puis-je savoir si quelqu'un se couche trop face aux check-raises ?» · «Le check-raise est-il efficace dans les tournois ?» · «Comment pratiquer le Check-Raise?» · «Comment puis-je pratiquer le check-raise sans investir d'argent ?» | 표 5개(유형·사이징·보드 유형 5종·상대 프로필·체크리스트) · FAQ 7 · 보드 예시(A♠7♥2♣ · 9♥8♠7♦ · K♦9♦4♦ · A♣A♥5♠ · K♠6♥2♦) | **없음**(출처 없는 경험칙 «75 %/25 %» «8 % et 12 %») | 🔴 **자기모순**: 본문 «entre 8 % et 12 % du temps» vs FAQ «Environ 8 % à 15 %». 출처 없음. 9-8-7에서 «deux paires ou un brelan doivent check-raise» — 우리 솔버는 같은 9-8-7에서 BB가 **리드 23.7 %**(`donk-bet-strategy`) → 차별화 지점. 마지막은 PokerStars 프리롤 유도(실전 사이트 축) |
| ② | clubpoker.net/check-raise/definition-108 (exa · 직접 fetch는 Cloudflare 403) | 2018-03-15 | 1문장 | H1 «Check/raise» · 정의 축어 «Faire parole (check) dans l'idée de relancer (raise) une mise adverse.» · 동의어 «cr · Embuscade · c/r» | 용어집 | 없음 | 🟢 «embuscade» = 프랑스어 동의어(본문 1회 병기 재료) |
| ③ | eurosport.fr/poker/_sto1616118 | 2008-06-25 | ~700(사이드바 포함) | H1 «Le Check-Raise» · H2 «Un Check-Raise, ne doit pas être confondu avec un Re Raise ; …» | 없음 | 없음 | 낡음(2008) |
| ④ | pokerpro.fr/lexique/check-raise-all-in/ | — | ~600(목록 포함) | H1 «Check-Raise All-In» · H2 «Définition» · «Explication détaillée» · «Termes liés» | 용어집 | 없음 | — |
| ⑤ | pokerstars.fr «Qu'est-ce que le Poker GTO ?» (exa · AIO 인용) | 2025-08-29 | 긴 글(앞 5,000자 확인) | H1 «Qu'est-ce que le Poker GTO ? Comprendre la stratégie de la Théorie de Jeu Optimale» · H2 «Les Bases : Qu'est-ce que le Poker GTO exactement ?» · «Principes fondamentaux de la Stratégie GTO : l'équilibre est la clé» · H3 «Gammes équilibrées» … | «En bref» 요약 블록 | 없음 | 🟢 내쉬 균형 설명 정상. 프랑스어 표기 «la GTO»(여성) · «solveurs de poker» |
| ⑥ | spinelite.fr/blog/jeu-exploitant-versus-jeu-gto (exa) | 2024-02-18 | 긴 글 | H1 «Jeu exploitant versus Jeu GTO» · H2 «En quoi un jeu exploitant se base sur la GTO au poker ?» · H3 «Définition de la GTO» · «Pourquoi il est nécessaire de s'intéresser à la GTO pour jouer exploitant ?» · «Quand utiliser la GTO et quand utiliser un jeu exploitant au poker ?» · H2 «Comment et quoi travailler pour créer un jeu exploitant ?» · H3 «Quelle(s) situation(s) étudier en priorité ?» · «Le jeu préflop» | 레인지 이미지 | 없음 | Spin 포맷 한정. «exploitant» = «착취» 계열 — 우리 문구 규칙(«착취» 금지 · factsheet §5)과 충돌하므로 이 어휘를 가져오지 않는다 |
| ⑦ | eastriverpoker.com/le-solveur-poker.htm | 2023-12-19 | ~1,600 | H1 «Le solveur Poker» · H2 «Qu'est-ce qu'un Solveur ?» · «Exemple concret :» · «le solveur poker» · «Limitation du solveur poker» · H3 «Modélisation simplifiée :» · «Temps du calcul :» · «Taille de l'espace de recherche :» · «Interprétation humaine :» · «Dépendance à la qualité des modèles :» · «Paramètres incorrects :» · «Résultats non statués :» · «Enjeux avec faibles mises :» · «Interdiction d'utilisation du logiciel pendant le jeu :» · H2 «Malgré toutes ces limitations un solveur peux-t-il m'apporter quelque chose ?» | 표 1 · 이미지 25 | 없음 | `/fr/solver` FAQ «Puis-je l'utiliser pendant que je joue en ligne ?»가 «Interdiction…» 의도를 이미 받는다 |
| ⑧ | pokercode.com/terms/donk-bet (exa) | — | ~150 | H1 «Donk Bet» | 정의 + BTN/BB 예시 1 | 없음 | 🟢 «poker solvers proved that this move could be an effective part» — 우리 9-8-7 글이 그 «증거» 자체 |
| ⑨ | poker-academie forum «Donkbet ou pas» (exa) | 2012-04-13 | 포럼 | (스레드) | — | 없음 | 답글 «le relanceur initial preflop ne touchera son flop que 33% du tps» — 페어 없는 두 장이 플랍에서 페어 이상 될 확률 ≈ 32.4 %(1 − C(44,3)/C(50,3)) 근사로 수용 가능 · 정의 «donkbet» 붙여쓰기 |
| ⑩ | upswing glossary monotone (exa) | — | ~40 | H1 «What is Monotone Board in Poker?» | 정의 1문장 | 없음 | — |
| ⑪ | blog.gtowizard «Maximizing Value on Monotone Flops» | 2023-10-30 | (본문은 JS — 헤딩만) | H2 «Overview» · «Flushes Are Unlikely When the Pot Is Small» · «As the Pot Grows, Flush Cards Become More Important» · «Strategic Principles for Monotone Flops» · «Playing the Turn» · «Playing Blank Rivers» · «Playing 4-Flush (♥) Rivers» · «Playing 4-Flush (♥) Turns» · «Playing Rivers» · «Conclusion» | — | (유료 솔버) | 영어 · 턴/리버까지 — 우리 글은 플랍만 |
| ⑫ | pokerqz.com/fr glossary «Board pairé» (exa) | — | ~200 | H1 «Board pairé» · H3 «Définition de base» · «Situation spécifique» · «Points importants» · «Exemples d'utilisation du terme» | 예시 J J 3 · 6 6 2 2 | 없음 | 🟢 정의 정상. «bluffs avec un petit sizing de mise assez courants» — 우리 6-6-3 글은 **BB 체크 97 % · 큰 사이즈가 작은 사이즈보다 많음**이 핵심 → 통념 반박 훅 |
| ⑬ | pokerstars.fr «Le C-Bet en 2020 – Quatrième Partie…» (exa) | 2020-11-06 | 긴 글(앞 5,000자) | H1 동일 · H3 «C'est Quoi les Flops Statiques ?» · «Avantage d'Overpaire» · «Equilibre» … | 보드 예시 J♦J♥4♠ · A♥7♠5♣ · 7♦4♣2♠ · K♥K♠2♣ · K♥K♠8♠ | 없음(이론) | 🟢 «30 combinaisons de TT-AA (6 pour chaque paire)» = 5 × 6 = 30 ✓ · A75에서 «tirage quinte par le ventre n'a que 4 outs et une deuxième paire comme 7x, seulement 5» = 7 2장 + 키커 3장 = 5 ✓. 결론 «Sur les boards statiques, il convient d'utiliser un petit sizing» — 우리 paired-board(큰 사이즈 우세)·ace-paired(작은 사이즈 80.1 %)와 대비 재료 |
| ⑭ | poker-academie «L'Art de la défense dans les pots 3bet» | 2015-05-20 | ~2,600 | H1 동일 · H2 «L'importance des pots 3bet» · «Comment réagir à un 3bet avec une main moyenne ?» · «Pot 3bet : Que faire avec les tirages ?» · «La défense dans les pots 3bet : conclusion» · «Présentation de Freudinou» | 이미지 8 | 없음 | 낡음(2015 · 솔버 이전) |
| ⑮ | cours-et-fiches.com/poker-3bet/ | 2026-02-15 | ~2,800 | H2 «1. Qu'est-ce qu'un 3-bet ?» … «5. Ranges de 3-bet par position» · «6. Le concept de bloqueur» · «7. Défense face au 3-bet» · «8. Le 4-bet : surrelancer un 3-bet» · «9. Les erreurs fréquentes» · «10. Questions fréquentes» | 표 10 · FAQ | 없음 | **프리플랍 3벳** — L-D `holdem-3bet` 경쟁 글(기록만) |
| ⑯ | fr.pokernews «Stratégie poker - Big Blind vs Small Blind» | 2008-05-12 | ~1,100 | H1 동일(소제목 없음) | 없음 | 없음 | 낡음(2008) |

정독 불가: kill-tilt.fr 포럼 2건(fetch 실패) · clubpoker 직접 fetch(403 → exa로 대체) · pokerstars.fr 직접 fetch(301 → 다른 도메인 404 → exa로 대체).

---

## 5. 장단점 표 (상위 프랑스어 글 공통)

| 갖춰야 할 것(공통 강점) | 차별화 지점(공통 약점) |
|---|---|
| 정의를 첫 문단에서 1~2문장(Club Poker «Faire parole … dans l'idée de relancer» · PokerQZ «Définition de base») | **솔버 수치 0** — 16개 SERP의 프랑스어 글 어디에도 «이 보드에서 몇 %» 같은 계산값이 없다. 우리 13편은 전부 계산값(체크 98.2 % · 리드 23.7 % · 체크레이즈 14.9 % 등) |
| 보드 예시를 카드로 적는다(PokerStars 5보드 표) | 수치가 있으면 **출처 없는 경험칙**이고 자기모순까지 있다(PokerStars 8–12 % vs 8–15 %) |
| 표(가치 vs 블러프 · 보드 유형별) | 대부분 낡았다(2008 Eurosport·PokerNews · 2012 PA 포럼 · 2015 PA) |
| tu/vous: PokerStars는 vous, 코치 영상·SpinElite·우리 앱은 tu | 콤보 수(트립스 26 vs 20 · 3콤보만 맞음 등)를 세는 글 0 |
| 프랑스어 차용어 그대로: check-raise · donk(bet)/donkbet · sizing · range · board pairé · pot 3bet · SPR | donk bet·monotone·SPR·BvB는 **프랑스어 텍스트 글 자체가 없다**(영상·기계번역·영어만) |
| 영상 팩(Poker Académie·Kill Tilt·ShiShi·Canard Solaire)이 거의 모든 SERP에 있다 | 앱에서 «직접 열어 확인» 동선이 있는 글 0 — 우리 «Vérifie toi-même»(Check it yourself) 절이 유일 |

---

## 6. 우리 글 대조 (EN 마스터 H2·FAQ · fr 도구)

- 13편 공통 골격(EN): «What conditions produced these numbers?» → 스팟 질문 H2들 → «What changes at the table?» → «Check it yourself» → FAQ(4~7). 이 골격은 SERP 어느 글보다 깊다 — **구조 변경 불요**. 바꿀 것은 H2·FAQ의 **프랑스어 질문 표현**뿐.
- EN 태그·seoTitle이 이미 잡고 있는 검색어: donk-bet «donk bet poker» · monotone «monotone board poker» · broadway «nut advantage / range advantage vs nut advantage» · a-high «c bet percentage · dry board poker» · k-high «should you always c bet · delayed c bet» · ace-paired «trips poker» · paired «trips vs set» · **low-board «check raise poker · when to check raise»(seoTitle «When to Check-Raise in Poker»)** · blind-battle «blind vs blind poker» · connected «board texture poker» · **3bet-pot-cbet «poker spr · what is spr in poker»(seoTitle «What Poker SPR 4 Really Does»)** · bet-sizing «poker bet sizing · geometric bet sizing» · low-board 3bet «polarized range poker».
- fr 도구가 받는 의도: `/fr/glossary`(`app/fr/glossary/dict.ts`)에 **«Check-raise» · «GTO» · «SPR» · «Overpair (surpaire)»** 항목이 있다(donk·monotone·pairé 없음). `/fr/solver` = gto poker·solver poker·gratuit·range poker·calculateur(`fr-gto-solver.md` §5) · H2 11개 · FAQ 23 · /fr/blog 링크 11곳.
- 🔴 `/fr/calculator`·`/fr/hand-chart` 의도(«range poker», «gto poker chart», «poker gto preflop ranges», «spr poker calculator»)는 13편이 조준하지 않는다.

---

## 7. 처방 (레인 🅶 A 브리프 재료 · 글마다)

> 카피는 **방향만**(최종 seoTitle·desc = 레인 A Fable). 용어: check-raise · donk bet(본문 «donkbet» 1회 병기) · sizing · range · board pairé · board monotone(«monochrome»은 앱 라벨 인용 시만) · pot 3-bet(앱 라벨 «Pot 3-bet») · brelan(«set»·«trips»는 괄호 병기) · tu.
> 공통 차별화: 솔버 계산값 + 콤보 수 + 7장 베스트5 검산 예시 + «Vérifie toi-même» 앱 동선 + 앱 fr 라벨 축어(§2-⑨ 재추출 후).

### 7-1. low-board-check-raise — 🔴 우선 1 (check raise poker 260 · 0-3 ⑤ 판정 대기)
- 주력어(0-3 승인 시): **«check-raise»** 선두 + 훅은 EN «Zero straights» 유지. 0-3에서 «불가»면 seoTitle에서 check-raise를 빼고 «6-5-2» 스팟 훅만.
- H2 후보: EN «When should you check-raise on this flop?» → **«Quand faire un check-raise ? — la réponse du solver sur 6-5-2»**(PokerStars H2 «Fréquence et Équilibre du Check-Raise»의 질문형 대응) · 첫 H2 앞 정의 직답 1개 추가 후보 «Check-raise au poker : c'est quoi ?»(Club Poker 정의형 SERP 다수 대응 · 40~75단어 · «embuscade» 병기) — 🔴 정의 깊이는 `/fr/glossary` «Check-raise» 항목으로 앵커 위임, 글은 1문단만.
- FAQ 후보: EN «When should you check-raise in poker?» → «Quand faut-il check-raise au poker ?» · PAA(영어) «What is a good check-raise percentage?» → **«Quel est un bon pourcentage de check-raise ?»** — 답 = 이 스팟 계산값 14.9 %(EN 본문) + «8–12 %» 같은 일반 수치는 출처 없는 경험칙이라는 한 줄(PokerStars 이름은 쓰지 않는다) · EN «Is a check-raise allowed, and is it rude?» 유지(L-A 규칙 축과 겹치지 않음 — 1문장).
- 차별화: PokerStars 표가 «9-8-7 = check-raise»라 하는 자리에서 우리 9-8-7 글은 리드 23.7 %, 6-5-2는 리드 3.2 % + 체크레이즈 14.9 % → «같은 낮은 보드라도 다르다»는 계산 근거. ⚠ EN 본문 노트(«This section comes from a different solve… 190 iterations»)는 그대로 옮긴다.
- 카니발: c-bet 일반론은 L-D `holdem-continuation-bet`로 앵커.

### 7-2. donk-bet-strategy — 🔴 우선 2 (donk bet 140 · §1-E 예외 «그 단어의 주인»)
- 주력어: **«donk bet»**(seoTitle 앞쪽) · 본문 «donkbet» 병기 1회 · «lead» 병기.
- H2 후보: 첫 H2 앞 **«Donk bet : c'est quoi au poker ?»**(자동완성 «c'est quoi un donk bet au poker» · PAA «Quelle est la définition de "donk" ?») — 기존 FAQ «What is a donk bet in poker?»를 직답으로 승격, FAQ는 «Pourquoi…»부터.
- FAQ: EN «Why do people say donk betting is bad?» → **«Pourquoi dit-on que le donk bet est mauvais ?»**(SERP 1위 reddit 제목 «Pourquoi le donk est-il si mauvais ?»·영상 «Pourquoi il ne faut pas donk bet au poker ?» 대응) · 나머지 EN 6문항 직역 아닌 질문형 유지.
- 차별화: 프랑스어 텍스트 정의·전략 글 **0**. 영상(Paapillon «quand et comment donkbet ?»)만 있는 자리에 솔버 수치(9-8-7 리드 23.7 %, 작은 사이즈 2/3)로 «언제 맞나»를 텍스트로 처음 준다.
- 하지 않는 것: «donk bet turn/river»(자동완성 有 · 볼륨 0~10) 새 H2 — §1-E ②(새 스팟 = 필라 흡수).

### 7-3. 3bet-pot-cbet — 🟠 우선 3 (spr poker 210 · 0-3 신규 판정 재료)
- 주력어(0-3 승인 시): **«SPR»** — EN seoTitle «What Poker SPR 4 Really Does» 대응. 프랑스어 SERP 1페이지에 프랑스어 텍스트 SPR 글 0(도구 1 · 영상 2).
- H2: EN «What is SPR in poker?» → **«Le SPR au poker, c'est quoi ?»**(자동완성 «c'est quoi le spr au poker» · «le spr au poker» · «spr poker c'est quoi») — 정의 + 공식(stack effectif ÷ pot) + 이 스팟 값(앱 «Pot 3-bet — BB 3-bet, BTN paye (SPR bas)» 22,5bb · 89bb → 89 ÷ 22,5 ≈ 3,96 → «SPR ≈ 4» · 레인 B 검산).
- FAQ: EN «What does SPR mean in poker?» → «Que veut dire SPR au poker ?» · EN «How many bets can you make at an SPR of 4?» 유지.
- 카니발: `/fr/glossary` «SPR» 항목 = 짧은 정의 → 글이 «정의+계산 예시» 깊이를 가진다. glossary 항목에서 이 글로 링크하는 건 0-3에서 판정.

### 7-4. 3bet-pot-bet-sizing — 🟢 (sizing poker 70 · 0-1)
- 주력어: **«sizing»**(프랑스어 정본 · «taille de mise»는 0).
- FAQ: EN «How much should you bet in poker?» → **«C'est quoi le sizing ?»**(PAA 축어)로 앞에 하나 추가하거나 대체 + «Comment choisir son sizing ?»(ShiShi 영상 제목·자동완성 «comment faire les sizing au poker») · EN «What is geometric bet sizing?» → «Qu'est-ce que le sizing géométrique ?»(볼륨 10 · 표현만) · EN «Should I use an overbet instead?» → «overbet» 차용어 유지(overbet poker 30).
- 카니발: 프리플랍 사이징(open·3bet)은 L-D 몫 — 이 글은 «pot 3-bet 플랍 · 보드 humide» 한정.

### 7-5. 3bet-pot-low-board — 🟢 (range polarisée 10)
- FAQ: EN «What does a polarized range mean?» → **«Qu'est-ce que signifie être polarisé au poker ?»**(PAA 축어 · 문법 그대로 쓸지 레인 A 판단 — 최소 «être polarisé» 연속열 유지).
- H2·카피: 변경 없음. «pot 3-bet»(앱 라벨) 표기 통일.

### 7-6. paired-board-strategy · ace-paired-board-strategy — 🟢 (board pairé `-` · trips 50 · 🔴 set poker 함정)
- paired H2 «Trips vs a set — on a paired board it's trips» → **«Brelan sur un board pairé : trips ou set ?»**(«set» 단독 금지 — §3-L) · FAQ EN «How often does the flop come paired?» → **«Quelle est la probabilité d'avoir un board pairé au flop ?»**(PA 포럼 제목 «Quelle est la probabilité de tomber sur un board pairé?» 대응 · 레인 B §13: 정확히 한 쌍 = 13 × C(4,2) × 48 / C(52,3) = 3,744/22,100 ≈ 16,9 % · 트립스 보드 52/22,100 ≈ 0,24 % · EN 값과 대조).
- ace-paired FAQ «What are trips in poker, and how do they differ from a set?» → «Trips et set : quelle différence ?»(trips poker 50).
- 차별화: PokerStars 2020 «Sur les boards statiques… petit sizing» · PokerQZ «bluffs avec un petit sizing» 통념 vs 6-6-3 체크 97 %(큰 사이즈가 더 많음) · A-A-6 작은 사이즈 80.1 % — «같은 pairé인데 3,0 % vs 80,1 %».
- 금지: «set poker» 태그·제목.

### 7-7. monotone-board-strategy — 🟢 (board monotone 10)
- H2 첫 «What is a monotone board in poker?» → **«Board monotone au poker : c'est quoi ?»**(«monocolore» 병기 1회 — 프랑스어 영상 «board monocolor») · FAQ «How likely is it to flop a flush?» 유지(자동완성 «monotone flop odds» 대응 · 레인 B 검산).
- 차별화: 1페이지 프랑스어 텍스트 0. 처방 추가 없음.

### 7-8. broadway-board-strategy · a-high-board-cbet · k-high-board-cbet — ⚪/🟢 (avantage de range `-` · 10대)
- broadway H2 «Range advantage vs nut advantage — what's the difference?» → **«Avantage de range ou avantage de nuts : quelle différence ?»**(자동완성 «avantage de range poker» · 프랑스 코치 영상 «Qu'est ce que l'avantage de range au Poker ?» — 볼륨 없음, 표현만).
- a-high H2 «What's a good c-bet percentage on a dry ace-high board?» → 한정어(«sur un board sec hauteur As») 유지 — L-D c-bet 글과 공존. PAA «Qu'est-ce que le "cbet range" au poker ?»는 **L-D `holdem-continuation-bet` 몫**으로 넘긴다(기록).
- k-high: 처방 없음(«delayed c bet» 표현은 «c-bet retardé» 병기 정도 — 레인 A 판단).
- «board sec poker»는 SERP가 쓰레기(§3-K) → 제목에 «board sec» 넣어도 조준 효과 없음. 산문 표기로만.

### 7-9. blind-battle-cbet · blind-battle-connected-board — ⚪ (blind vs blind 10)
- PAA가 전부 블라인드 규칙(L-A `holdem-blind-meaning` 몫) → 새 FAQ 없음. 표기 «blind contre blind (BvB)» — 앱 라벨 «Blind vs Blind — SB vs BB (ranges larges)»와 맞춘다.
- connected: «texture de board» 표현만(자동완성 有 · 볼륨 `-`). H2 «Why does this board favor the big blind?» 등 유지.
- 🔴 «C'est quoi les blindes au poker ?» FAQ를 여기에 넣지 마라(L-A 헤드).

---

## 8. 0-3 판정 재료

### ⑤ «check raise poker» (260) ↔ `low-board-check-raise`
**SERP 증거**: 1페이지 10건 = 브랜드(포커 클럽) 2 · **정의/용어집 4**(Wikipedia EN · Club Poker 2018 · PokerPro · Eurosport 2008) · **전략 가이드 1**(PokerStars.fr 2025 — 2위) · 포럼 1(영어) + 영상·숏폼 팩. PAA는 프랑스어가 아니라 영어(«What is a good check-raise percentage?»). 자동완성은 정의·클럽명뿐, 프랑스어 질문형 0. 솔버 수치 있는 글 0.
**규칙 대조**: §1-E «남의 헤드텀을 빌리지 마라»는 **주인이 있는 단어**에 대한 금지다(ko `holdem-check-raise`가 있을 때). fr 51편·EN 마스터 어디에도 check-raise 필라가 없고, EN `low-board-check-raise`가 이미 seoTitle·태그로 이 단어를 갖고 있다 → fr에서 «빌리는» 것이 아니라 **EN parity**다. §1-E ③ «주인 없는 검색어가 실측된 경우»에도 해당.
**권고 1줄**: `low-board-check-raise`가 «check-raise»를 seoTitle·첫 정의 H2로 받는다(EN parity · §1-E 위반 아님) — 단 정의 깊이는 `/fr/glossary` «Check-raise»로 앵커 위임하고, 나중에 fr check-raise 필라가 생기면 그날 반납한다(⑧ SPR 반납 선례).

### ⑥ 🆕 «spr poker» (210) ↔ `3bet-pot-cbet` (0-1 목록에 없던 재료 — 0-3에 추가 요청)
**SERP 증거**: 프랑스어 텍스트 글 0(1페이지 = 영어·독·스·포 정의 글 + toolsofpoker fr 도구 + 프랑스어 영상 2). PAA 무관(일반 포커 질문). 자동완성 «spr poker c'est quoi» · «c'est quoi le spr au poker» · «spr poker calculator» · «spr poker chart».
**규칙 대조**: ko에서는 `holdem-spr` 필라가 주인이고 §1-E가 «⑧의 SPR 반납»을 선례로 든다. 그러나 fr(및 EN)에는 SPR 필라가 없고 EN `3bet-pot-cbet` seoTitle이 «Poker SPR»을 이미 쓴다.
**권고 1줄**: ⑤와 같은 논리로 `3bet-pot-cbet`가 «SPR»을 받되(EN parity), «spr poker calculator/chart» 의도는 `/fr/calculator`에 SPR이 없으므로 조준하지 않는다.

### `/fr/solver` 경계
- `gto poker`(480 = poker gto) · `solver poker`(320) · `gto poker gratuit`(30) · `solver poker gratuit`(110 · 0-1/뱅크) · «solver poker en français»(자동완성) · PAA «C'est quoi le GTO ?» «Que signifie GTO ?» «C'est quoi un Solver ?» «Quel est le meilleur solver de poker ?» → **전부 `/fr/solver` 몫.** 13편은 제목·H1·태그에 «GTO poker»·«solver poker»를 쓰지 않는다(EN seoTitle에 «GTO» 단독이 들어간 3편 — ace-paired «— GTO» · blind-battle-cbet «Blind vs Blind GTO» · connected «— GTO Solver» — 은 fr에서 «solver» 앵커 문구로 바꾸되 헤드 조준이 아님을 레인 A가 확인).
- 랜딩 FAQ에 «Quel est le meilleur solver de poker ?»류 비교 문항은 이미 있음(«C'est le même genre d'outil que GTO Wizard ou PioSolver ?») — 문구 규칙(유료 솔버와 정확도·가격 비교 금지 · factsheet §5) 때문에 «meilleur» 문항을 새로 만들지 않는다.
- 🪶 자동완성 «solver poker winamax» — 프랑스 룸 브랜드 결합. 실전 사이트 축이라 조준하지 않는다(관찰만).
- 13편 → `/fr/solver` 링크 + 랜딩 «Pour aller plus loin» 13링크는 계획 §1(de 선례)대로 배포 회차에.

---

## 9. 처방 요약

| 순위 | 글 | 수요(실측) | 갭 | 핵심 처방 | 카니발 주의 |
|---|---|---|---|---|---|
| 1 | low-board-check-raise | check raise poker 260 | 중 — 프랑스어 전략 글 1(PokerStars, 수치 무출처·자기모순) | (0-3 ⑤ 승인 시) check-raise 선두 · 정의 H2 1 · FAQ «Quel est un bon pourcentage de check-raise ?» | 정의 깊이는 `/fr/glossary` 위임 |
| 2 | donk-bet-strategy | donk bet 140 | 큼 — 프랑스어 텍스트 0 | 정의 H2 «Donk bet : c'est quoi au poker ?» · FAQ «Pourquoi dit-on que le donk bet est mauvais ?» | — |
| 3 | 3bet-pot-cbet | spr poker 210 | 큼 — 프랑스어 텍스트 0 | (0-3 ⑥ 승인 시) H2 «Le SPR au poker, c'est quoi ?» | `/fr/glossary` SPR 항목과 깊이 구분 |
| 4 | 3bet-pot-bet-sizing | sizing poker 70 | 중 — 영상·포럼 위주 | FAQ «C'est quoi le sizing ?» | 프리플랍 사이징은 L-D |
| 5 | paired · ace-paired | trips 50 · pairé `-` | 중 — 프랑스어 포럼·용어집뿐 | «board pairé» 표기 · 확률 FAQ(PA 포럼 질문) · trips/set FAQ | 🔴 «set poker» 금지 |
| 6 | 3bet-pot-low-board | 10 | 소 | PAA «être polarisé» FAQ | — |
| 7 | monotone · broadway | 10대 | 텍스트 0 / 영상·포럼 | 정의 H2 프랑스어화 · «avantage de range» 표현 | — |
| — | a-high · k-high · blind-battle 2편 | 0~10 | — | 처방 없음(§1-E) | «cbet range» PAA는 L-D · 블라인드 PAA는 L-A |

---

## 10. 커버리지 표 (브리프 «할 일» 1~4)

| 검색어 | 1 자동완성 | 2 볼륨 | 3 SERP+PAA | 4 원문 정독 |
|---|---|---|---|---|
| gto poker (→ /fr/solver) | ✅ (+c'est quoi·와일드카드 2) | ➖ 0-1 480 · poker gto 480 확인 | ✅ AIO·PAA 4 | ✅ PokerStars.fr GTO(AIO 인용) · SpinElite · ➖ PA 포럼(본문 30단어) |
| solver poker (→ /fr/solver) | ✅ (+solveur poker · c'est quoi un solver) | ➖ 0-1 320 | ✅ PAA 4 | ✅ eastriverpoker (나머지 앱·영어 = `fr-gto-solver.md` 승계) |
| check raise poker | ✅ (+check raise · check-raise · au poker · 질문형 5종 = 결과 없음) | ✅ check raise 260(같은 수요) | ✅ PAA 4(영어) | ✅ PokerStars.fr · Club Poker · Eurosport · PokerPro |
| donk bet poker | ✅ (+donk bet · c'est quoi · donk poker · au poker) | ✅ donk bet·donkbet 140(같은 수요) | ✅ PAA 4 | ✅ pokercode · PA 포럼 · ➖ PA 영상 페이지(본문 없음) |
| spr poker | ✅ (+c'est quoi 2종) | ✅ 210 🆕 | ✅ | ➖ 프랑스어 텍스트 0(영어 정의 글·도구·영상) — 정독 대상 없음 |
| sizing poker · bet sizing poker | ✅ (+sizing au poker · mise géométrique) | ✅ bet sizing 10 · overbet 30 | ✅ 2개 SERP(PAA «C'est quoi le sizing ?») | ➖ 프랑스어 텍스트 = 팟캐스트·포럼·tells 글 — 사이징 전략 글 없음 |
| board monotone poker | ✅ (+flop monotone · cbet monotone) | ✅ 10 | ✅ | ✅ upswing · GTO Wizard(헤딩) |
| board pairé poker | ✅ (+flop pairé = 결과 없음) | ✅ paired board 10 · board pairé `-` | ✅ | ✅ PokerQZ · PokerStars.fr C-bet 2020 · ✗ Kill Tilt 포럼(fetch 실패 — PA·PokerQZ로 대체) |
| pot 3bet poker | ✅ (+3bet pot · comment jouer = 없음) | ✅ 3bet pot 10 | ✅ | ✅ PA 3bet 방어 · cours-et-fiches |
| blind vs blind poker | ✅ (+contre = 없음) | ✅ 10 | ✅ | ✅ PokerNews fr 2008 |
| avantage de range · nut advantage | ✅ | ✅ 10 · 10 | ✅ (avantage de range) | ➖ 포럼·코치 영상 — PAA·헤딩만 사용 |
| range polarisée poker | ✅ | ✅ 10 | ✅ PAA «être polarisé» | ➖ 프리플랍 3벳 글 위주(L-D 몫) |
| texture board · board sec | ✅ | ✅ `-` | ✅ 2개(board sec = 쓰레기 SERP) | ➖ 대상 없음 |
| set poker (함정) | ✅ brelan ou set · trips ou set | ✅ 170 · trips 50 | ✅ 쇼핑 SERP 확인 | ➖ 함정 |

**글별 «PAA·자동완성 질문 확보»**

| 글 | 확보 | 출처 |
|---|---|---|
| donk-bet-strategy | ✅ | PAA «Quelle est la définition de "donk" ?» · 자동완성 «c'est quoi un donk bet au poker» · reddit 제목 |
| low-board-check-raise | ✅ | PAA «What is a good check-raise percentage?»(영어로 노출) · 자동완성 «check raise poker definition» · PokerStars FAQ 축어 |
| 3bet-pot-cbet | ✅ | 자동완성 «c'est quoi le spr au poker» · «spr poker c'est quoi» |
| 3bet-pot-bet-sizing | ✅ | PAA «C'est quoi le sizing ?» · 자동완성 «comment faire les sizing au poker» «que veut dire sizing au poker» |
| 3bet-pot-low-board | ✅ | PAA «Qu'est-ce que signifie être polarisé au poker ?» |
| paired-board-strategy | ✅ | PA 포럼 «Quelle est la probabilité de tomber sur un board pairé?» · 자동완성 «paired board poker» |
| ace-paired-board-strategy | ✅ | 자동완성 «brelan ou …» · trips poker(볼륨) — 🪶 프랑스어 질문형 PAA 없음(SERP 쇼핑 함정) → EN FAQ 질문 유지 |
| monotone-board-strategy | ✅ | 자동완성 «monotone flop odds» «monotone board poker meaning» — PAA는 일반 질문뿐(그룹 A) |
| broadway-board-strategy | ✅ | 자동완성 «avantage de range poker» · 코치 영상 «Qu'est ce que l'avantage de range au Poker ?» |
| a-high-board-cbet | ✅ | PAA «Qu'est-ce que le "cbet range" au poker ?»(→ L-D 위임) — 그룹 A |
| k-high-board-cbet | ✅ | 자동완성 «delayed c bet poker»(c bet poker 계열) — 그룹 A |
| blind-battle-cbet | ✅ | PAA 4(블라인드 규칙 → L-A 위임) — 그룹 A |
| blind-battle-connected-board | ✅ | 자동완성 «texture de board poker» — 그룹 A |

**그룹 A(SERP가 사실상 비어 있음 · 질문이 일반/타 레인 몫)**: monotone · a-high · k-high · blind-battle 2편 — 스팟 고유 프랑스어 질문이 없다. §1-E대로 EN FAQ 질문을 프랑스어 질문형으로 옮기는 것으로 충분하고, 새 FAQ를 만들지 않는다.

✗ 1건: Kill Tilt 포럼 2건 원문 fetch 실패(board pairé · avantage de range) — 같은 SERP의 다른 프랑스어 글로 대체했고 처방에 영향 없음. 그 외 ✗ 0.
