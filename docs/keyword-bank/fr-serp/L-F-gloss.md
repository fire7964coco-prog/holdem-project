# L-F 용어 — fr SERP 조사 (2026-10-07 · fr 클러스터 0-2)

> 브리프 = `00-brief.md` · 수요 정본 = `fr-core-volumes.md`(재측정 안 함 · §1은 새 후보만). 대상 6편(EN 마스터 `lib/posts-en/`): **glossary · fish · bad-beat · cooler · rake · straddle** + 도구 `/fr/glossary`(`app/fr/glossary/dict.ts`) 경계.
> 도구: DataForSEO(2250 · fr) 자동완성 40 · 볼륨 2배치 72어 · SERP 21(depth 10 · desktop). 원문 = 레포 Playwright 임시 스크립트(DOM에서 H1~H3 **축어** + 본문 저장) 23 URL. 원자료 = `tmp/fr-serp-F-*.json`(ac1·ac2·vol·vol2·serp1~4·read-fish·read-lex·read-rake·read-cb·read-str).
> 🔴 **AI Overview 0/21 · Featured snippet 0/21.** 검색 요약을 사실로 옮긴 곳 없음.
> ⚠️ pokerstars.fr 학습 페이지 3건(fish · cooler vs bad beat · straddle)이 한국 IP에서 «Page not found»(H1 «BAD BEAT - ERROR 404»). 같은 도메인 rake 페이지는 영어판으로 열림 → **지역 리다이렉트일 수 있어 «죽은 페이지»로 단정하지 않는다.**

---

## 0. 한 줄 결론 (먼저 읽을 것)

1. 🔴 **«fish poker» 1,300은 정의 수요가 아니다.** 같은 1,300이 «poker fish»·«fishpoker»에도 붙는다(한 묶음). SERP 1·7위 = **앱 «FishPoker»**, «fish au poker» 4위 = **트래커 «Poker Fish»(poker-fish.fr)** + 관련검색 «Poker Fish prix · avis». 자동완성 15개 중 정의 의도 2~3개, 이탈리아어 «fiches»(칩) 6개. **정의형 실수요 = fish au poker 10 · qu'est-ce qu'un fish 10 · shark 140 · nit 90.** → fish는 «1,300 대어»가 아니라 **«정의 SERP가 비어서 들어갈 수 있는 소형 글»**로 기대치를 낮춰라.
2. **정의 SERP가 전부 약하다.** 프랑스어 정보 글: fish poker 0/9 · straddle poker 1/8(포럼) · cooler(사전 2줄 2건 + 404, 나머지 영어) · nuts poker 0/8(앱·클럽·축제·회사등기) · bad beat poker 1위 = 영어 «Bad Beat Jackpot» · «c'est quoi un straddle au poker» 전용 글 0/10. 프랑스어 정의 글이 1페이지에 제대로 있는 것은 **rake**(pokerpro 2019 · pokerlistings · poker-toolkit)와 **lexique**(yourpokerdream A~Z)뿐.
3. **«lexique / termes / vocabulaire poker» 1페이지 = 용어 목록·용어 단위 페이지**(사전형이 이긴다) → 주인 = 도구 `/fr/glossary`(이미 seo.title «Lexique du poker — termes et vocabulaire du Texas Hold'em»). 글 glossary는 **«jargon / langage / expressions du poker» + 영어→프랑스어 대응** 각도.
4. 프랑스 질문 패턴 **«c'est quoi un X au poker» / «qu'est-ce qu'un X au poker» / «que veut dire X au poker»**(자동완성 대량) → 정의형 H2는 이 축어로. straddle의 프랑스 명칭 **«option» / «overblind»**(over-pair 축어 · PokerStars FR 제목 «straddle (option)») 병기.
5. 도구 사전 공백: `/fr/glossary` 46용어에 **Fish · Straddle · Nit · Shark · Whale · Reg · Rakeback · Shove · Squeeze · ITM · TNT 없음**(Bad beat·Cooler·Rake·Nuts는 있음) → fish·straddle은 글이 단독 주인(도구 보강은 범위 밖 🪶).

---

## 1. 새 후보 볼륨 (0-1에 없던 것만 · DFS google_ads · 2250 · fr · 72어 · 🔴 같은 숫자 = 한 수요 · `-` = 데이터 없음)

| 담당 | 검색어 = 볼륨 | 메모 |
|---|---|---|
| fish | poker fish = fishpoker = **1,300**(«fish poker»와 같은 묶음) · fish poker app 0 · fiches poker 170(칩) · fish 18,100(일반어) | §0-1 혼입 |
| fish | fish au poker 10 · qu'est-ce qu'un fish au poker 10 · fish poker definition 10 · c'est quoi un fish au poker - · fish poker signification - | **정의 실수요** |
| fish(zoo) | shark poker 140 · nit poker 90 · calling station 50 · reg poker 30 · donk poker 20 · whale poker 10 · requin poker 10 | 도구 사전에 nit·shark·whale·reg 없음 |
| glossary | termes du poker 260(= termes poker 260 · 한 수요) · termes poker en français 70 · langage poker 50 · expression poker 50 · lexique poker pdf 40 · vocabulaire poker anglais 30 · dictionnaire poker 20 · terminologie / mots poker 10 · termes poker en anglais - · glossaire/lexique poker texas holdem - | «lexique/termes/vocabulaire» 외 각도 후보 = langage·expression·en français |
| glossary 소항목 | tnt poker 320 · que veut dire tnt au poker 40 · itm poker 170 · shove poker 170 · squeeze poker 140 · tilt poker 140 · flat poker 50 · poker face signification 140(가요 혼입 · 제외) | TNT·ITM = 토너먼트 용어(L-E 앵커) |
| rake | rakeback 140 · rakeback poker 50 · rake winamax 70 · rake pokerstars 20 · rake poker definition / c'est quoi le rake au poker / qu'est-ce que le rake au poker / rake poker cash game 10 각 · rake poker traduction / en ligne / tournoi - | 🔴 룸 이름 = 관찰만 |
| bad beat | badbeat 110(= bad beat 110) · bad beat traduction 20 · bad beat jackpot 20 · bad beat poker definition 10 · qu'est-ce qu'un bad beat - | «traduction» = 대응어 수요 |
| cooler | cooler vs bad beat 10 · cooler poker hand 0 · cooler poker def - | — |
| straddle | mississippi straddle 10 · straddle poker def / c'est quoi / traduction · c'est quoi un straddle au poker · straddle définition - | 자동완성엔 있음 = 소량 실수요 |
| nuts | nuts au poker 20 · les nuts au poker 10 · the nuts poker 10 · second nuts 10 · avoir les nuts / c'est quoi les nuts au poker / nuts poker signification - | 0-3 ④ 재료 |

## 2. 자동완성 (DFS autocomplete · 2250 · fr · 40회 · 축어 · 무관 제안은 «…» · 원본 `tmp/fr-serp-F-ac1.json`·`-ac2.json`)

### 2-1. 헤드
- **fish poker / fish au poker** → fish poker definition · fish poker term · fish poker meaning · fish poker valore · pokerstars fish · fish poker app · fish poker player · fish and chips poker · fiches poker professionali · poker fish amazon · fish poker png · fish poker online · fish poker personalizzate · fish poker come si scrive · fish poker da stampare · fiches poker dal negro (🔴 이탈리아어 «fish/fiches»=칩 6/15 · 정의 의도 3)
- **c'est quoi un fish au poker** → c est quoi un fish au poker · fish poker signification · poker fish definition
- **poisson / requin / pigeon poker · fish signification** → 포커 정의 의도 0(morgan poisson poker · requin pokemon · pigeon lake poker rally · poisson signification spirituelle …) · whale poker → whale poker meaning · whale poker term · baleine poker · poker whale vs fish …
- **lexique poker** → lexique poker pdf · lexique poker kill tilt · lexique poker winamax · lexique poker holdem · lexique poker icm · lexique poker squeeze · lexique poker flat · termes poker en français · termes poker · définition poker face · définition poker · termes poker en anglais · definition poker face francais · mots poker · definition poker menteur
- **termes poker** → termes poker en français · termes poker en anglais · terme poker carte · terme poker razz · terme poker shove · terme poker river · terme poker flop · terme poker limp · termes de poker en 6 lettres · termes techniques poker
- **vocabulaire poker** → vocabulaire poker anglais · vocabulaire poker texas holdem · vocabulaire poker francais · vocabulaire poker espagnol · termes poker · langage poker · dictionnaire poker · mot poker · expressions poker · termes poker en anglais · vocabulary poker
- **glossaire poker** → terminologie poker · dico poker · guide poker pdf · …(pokerogue 게임 혼입) · **lexique du poker** → terme du poker · mots du poker · lexique termes du poker · … · **jargon poker** → expression poker · expression poker face · langage poker · terminologie poker · … · expression poker en anglais · expression poker tapis · expression poker all in · poker jargon texas holdem · lingo poker · poker jargon words · **argot poker** → argo poker · argot casino · poquer argot
- **rake poker / rake au poker** → rake pokerstars · rake poker traduction · rake pokerstars cash game · rake poker definition · rake pokerstars spin and go · rake poker cash game · rake pokerstars zoom · rake poker betclic · rake poker live · rake poker significado · rake poker là gì · rake poker term · rake poker sites · rake poker game · rake poker comparison (+ definition rake au poker · rake poker def · rake poker calculator)
- **c'est quoi le rake au poker / qu'est-ce que le rake** → c est quoi le rake au poker · c est quoi rake · qu est ce que le rake au poker · poker le rake · qu'est ce que le rake · qu est ce que le rakeback · qu'est ce que le rakeback au poker · qu'est ce que le rakeback sur stake · qu est ce qu un rake
- **rakeback** → 룸 이름 12/15(betclic · winamax · unibet · pmu · pokerstars · stake · bet365 · coinpoker …) + rakeback poker · rakeback definition (🔴 관찰만)
- **bad beat poker** → bad beat poker jackpot · bad beat poker casino montreal · bad beat poker definition · lac leamy bad beat poker · bad beat pokerstars · bad beat poker casino · bad beat poker stake · bad beat poker club · bad beat poker rules · bad beat poker significado · bad beat poker hands · bad beat poker reddit · bad beat poker online · bad beat poker room · bad beat poker payout
- **bad beat** → bad beat poker · bad beat traduction · bad beat winamax · bad beat jackpot · bad beat radio · bad bit · **qu'est-ce qu'un bad beat** → qu'est-ce qu'un bad beat au poker · bad beat jackpot → …casino montreal · …rules · what are the odds of a bad beat jackpot(퀘벡 = fr-CA 신호)
- **cooler poker** → cooler poker def · cooler poker term · cooler poker là gì · cooler poker hand · cooler significado poker · cooler poker slang · cooler poker significato · cooler pokerkoffer · cooler poker reddit · cool poker …(무관 6) · **qu'est-ce qu'un cooler au poker** → (빈 결과)
- **straddle poker = straddle au poker**(동일 15) → straddle poker def · straddle poker traduction · straddle poker cash game · straddle poker c'est quoi · straddle poker là gì · straddle poker explained · straddle poker rules · straddle poker que es · straddle poker reddit · straddle poker strategy · straddle poker texas holdem · straddle poker terms · straddle poker significado · straddle poker bedeutung · straddle poker o que é
- **c'est quoi un straddle** → c'est quoi un straddle au poker · straddle explication · straddle exemple · straddle définition · qu est ce qu un straddle
- **nuts poker** → the nuts poker league · nuts poker verona · nuts poker club · … · nuts poker room · nuts poker hand · nuts poker chips · …(🔴 클럽·리그 이름 13/15) · **les nuts poker** → avoir les nuts poker · nuts poker club · **c'est quoi les nuts au poker** → c est quoi les nuts au poker · poker nuts signification · les nuts au poker · nuts def poker

### 2-2. 와일드카드
- **c'est quoi un * au poker** → brelan · full · flush · **fish** · bounty · flop · carré · tnt · stack · flip · **nit** · bracelet · **rake** · kicker · reg (각 «c est quoi un X au poker»)
- **qu'est-ce qu'un * au poker** → full · brelan · flop · flush · **fish** · tnt · carré · bounty · broadway · **rake** · flip · reg · limp · nit · tracker
- **que veut dire * au poker** → (빈칸) · limper · tnt · utg · check · fold · itm · tapis · icm · ante · shove · raise · flat · call · parole
- **poker * c'est quoi** → c'est quoi poker · tnt · une couleur · strip poker · poker face · bounty · poker run · limp · poker expresso · ultimate poker · flush · gto · planning poker · mtt · poker menteur
- **\* poker signification** → poker · poker face(×3) · itm · roi · cave · abi · carte · tnt · tatouage carte · coup de poker · add on
- **poker * definition** → english · francais · définition · poker face · poker menteur · tnt · limp · spr · mtt · utg · ante · squeeze · freezeout · cev · strip
- **comment * poker** → 6편과 무관(poker comment jouer · comment gagner · comment distribuer les cartes · comment miser …) — L-A/L-D 참고
> 🔎 질문형 3패턴(«c'est quoi / qu'est-ce qu'un / que veut dire … au poker»)에 걸리는 우리 6편 용어 = **fish · rake**뿐. straddle·cooler·bad beat는 상위 15에 없다(수요 작음).

## 3. SERP 상위 10 + PAA (organic/live/advanced · 2250 · fr · depth 10 · desktop)

> 공통: **AI Overview ✗ · Featured snippet ✗ (17/17)**. 유형 약어 = 블로그(교육 사이트) · 룸(운영사) · 제휴(룸 리뷰·보너스) · 사전(용어 1개 페이지) · 포럼 · 영상 · 앱 · 영어(비프랑스어 페이지).

### 3-1. «fish poker» (1,300 · §0-1 혼입) · 영상 팩 ✓
1 play.google.com «FishPoker - Apps en Google Play»(앱) · 2 poker.stackexchange «How to play against a fish when having straight»(영어) · 3 fastcompany «6 Poker Lessons For The Executive Table»(영어) · 4 reddit «Tios for dealing with aggro fish/calling stations?»(영어) · 5 youtube 쇼츠(영어) · 6 quora «…meaning of shark and fish in poker»(영어) · 7 play.google.com «FishPoker – Apps no Google Play»(앱) · 8 2+2 «do we want fish or nits to our direct left?»(영어) · 9 youtube 쇼츠
- **PAA**: «C'est quoi un fish au poker ?» · «Comment appelle-t-on un joueur de poker ?»
- **영상**: RMC Poker show «Dans la tête d'un fish» · Poker Académie «Comment réagir au donk bet d'un fish» · Kill Tilt «Are you sure you aren't a fish at poker?» · Dailymotion RMC
- 프랑스어 정의 글 **0/9**.

### 3-2. «fish au poker» (10 · 정의 실수요 대표) · 영상 팩 ✓
| # | 도메인 | 제목(축어) | 유형 |
|---|---|---|---|
| 1 | pokerstars.fr | Comment Repérer un Fish au Poker : 7 Signes et ... | 룸(⚠️ 한국 IP 404) |
| 2 | fr.pokerlistings.com | Comment exploiter le fish au poker pour ne pas en devenir ... | 제휴 블로그 |
| 3 | poker-academie.com | Qu est ce q'un fish? - Stratégie Générale | 포럼 |
| 4 | poker-fish.fr | Poker Fish | 트래커 소프트웨어 |
| 5 | partypoker.fr | Comment Repérer un Fish au Poker | 룸 |
| 6 | clubpoker.net | Fish - Lexique poker : définitions, glossaire poker - Club Poker | 사전(차단) |
| 7 | fr.pokernews.com | Fish \| Dictionnaire Poker | 사전(1문장) |
| 8 | kill-tilt.fr | [Debutant] Reperer / Exploiter un fish | 포럼 |
| 9 | pokerpro.fr | Comment exploiter les fish | 블로그 |
- **PAA**: «Qu'est-ce qu'un fish au poker ?» · «C'est quoi un fish ?» · «Que signifie "faire tapis" au poker ?» · «Quelle main ne pas jouer au poker ?»
- **영상**: Kill Tilt «4 astuces simples pour exploiter les fish en Cash Game» · LUCKYSPIN «What is a Fish/Recreational player in Poker? (Spin)» · Kill Tilt «3 Tips to Avoid Being a Fish - POKER STARTER GUIDE #3»
- **관련검색**: Poker Fish prix · Poker Fish avis · Tracker poker gratuit · Poker Tracker · Pock fish · Pazienza poker · Stat poker · HUD poker

### 3-3. «lexique poker» (260)
1 clubpoker «Position - Lexique poker : définitions, glossaire poker»(사전) · 2 pokeo.fr «Lexique du Poker - Le Blog Pokeo»(블로그 · 인증서 만료) · 3 fr.yourpokerdream «Lexique du poker : tous les termes expliqués de A à Z»(A~Z) · 4 youtube «Vous voulez jouer au poker mais son langage vous paraît ...» · 5 jeu-legal-france «Lexique du poker - Poker légal en France»(제휴 목록) · 6 poker-academie «Petit lexique pour bien "tchater"» · 7 PDF «Lexique du poker» · 8 instagram «Lexique du poker — Le jargon expliqué» · 9 pokerpro «Main — Définition Poker - Lexique»(사전) · 10 clubpoker «C définition poker | Lexique poker…»(문자 색인)
- **PAA**: «Comment appelle-t-on un joueur de poker ?» · «C'est quoi TNT poker ?» · «Comment s'appellent les cartes au poker ?» · «Comment dit-on "poker" en français ?»

### 3-4. «rake poker» (210) · 지식 패널 ✓
1 pokerstars.fr «Calcul du prélèvement de la salle de poker - Rake»(룸 요율표) · 2 pokerpro «Rake au poker : définition en cash game et tournoi» · 3 fr.pokernews «Rake | Dictionnaire Poker» · 4 poker-toolkit «Rake et rakeback au poker en ligne» · 5 fr.pokerlistings «Qu'est-ce que le rake au poker ?» · 6 en.wikipedia «Rake (poker)» · 7 kill-tilt «Le rake»(포럼) · 8 pokerstars.fr «Qu'est-ce que le rake au poker sur PokerStars»(도움말) · 9 youtube «Le rake en micro-limites» · 10 pokerenligne «Rake Poker | Présentation et Meilleurs Sites Rakeback»(제휴)
- **PAA**: «Qu'est-ce que le rake au poker ?» · «Quel est le rake sur Winamax ?» · «C'est quoi le rake ?» · «Quel est le site de poker avec le meilleur rakeback ?» (🔴 2·4번 = 룸 의도 · 조준 금지)
- **관련검색**: Rake PokerStars · Rake poker Winamax · Rake traduction · Rake GG poker · Poker terms · Pagao poker · Poker TORSE

### 3-5. «bad beat poker» (170) · 영상 팩 ✓ · 지식 패널 ✓
1 pokernews.com «Bad Beat Jackpot Definition»(영어) · 2 quora «What is the definition of a bad beat in poker?» · 3 poker-academie «Comment éviter un bad beat»(포럼 2006) · 4 drummondpoker «Bad beat jackpot»(캐나다 카지노) · 5 pokerpro «Les pires bad beats de l'histoire du poker» · 6 youtube «What does "Bad Beat" mean in poker?» · 7 quora · 8 reddit «Why is it called "bad beat jackpot"…» · 9 it.wikipedia «Bad beat»
- **PAA**: «Qu'est-ce qu'un flop au poker ?» · «Qui est le goat du poker ?» · «Est-ce que le poker est de la chance ?» · «Quelles sont les statistiques de probabilité au poker ?» (bad beat 직접 질문 0 → «운 vs 실력»·«확률» 인접 의도)
- **영상**: PokerStars en Français «TOP 5 DES PIRES BADBEATS» · «LES 5 PIRES BAD BEATS: Faire tapis et tout perdre Poker» · Poker Perfected «The Rarest Bad Beats In Poker History»
- **관련검색**: Bad Beat poker jackpot · Bad Beat jackpot · Bad Beat jackpot rules · Bad beat jackpot Zynga Poker · Poker bad beat examples · Bad Beat Jackpot payouts · Who wins the bad beat jackpot · GGPoker Bad Beat Jackpot rules

### 3-6. «cooler poker» (10) · 영상 팩 ✓
1 clubpoker «Cooler - Lexique poker : définitions, glossaire poker»(사전 · 차단) · 2 pokerstars.fr «Cooler vs Bad Beat Poker : La Différence»(⚠️ 한국 IP 404) · 3 fr.pokernews «Cooler | Dictionnaire Poker»(2문장) · 4 reddit «Are coolers worth avoiding?» · 5 quora «What exactly is a 'cooler' in poker, and how is it different ...» · 6 upswingpoker «What is a Cooler in Poker?» · 7 pokerstrategy «Poker Basics - Bad Beats vs Coolers» · 8 pokervip «Cooler - Poker Definition & Meaning» · 9 redchippoker «What's A Cooler In Poker? Two Sick Hands…» — 4~9 전부 영어
- **PAA**: «Quels sont les différents styles de poker ?» · «Quel est le jeu le plus fort au poker ?» · «Comment miser au poker ?» (cooler 직접 질문 0)
- **영상**: Texapoker «The worst cooler in poker at the WSOP-C Paris final table» · GGPoker «The ULTIMATE Poker Cooler» · PokerFansHome «The ultimate cooler setup #poker»
- **관련검색**: Why is it called a cooler in poker · Poker cooler vs bad beat · What is a cooler in a casino · What is a cooler person · What is a cooler in a bar · What is a heater in poker · Poker hands · What is a cooler drink

### 3-7. «straddle poker» (90) · 영상 팩 ✓ · 쇼츠 ✓
1 blog.checkreplay «Straddle in Poker: What It Is and Should You Use It?»(영어) · 2 pokerqz «Straddle | Glossary»(영어) · 3 torontopoker «Playing vs Straddles» · 4 poker-academie «Le cash game straddle vous intéresse?»(포럼) · 5 reddit «Votre région applique-t-elle mal la règle du Mississippi ...»(자동번역) · 6 betmasteryhub · 7 poker.stackexchange · 8 liveabout «Playing the Straddle in Poker» — 프랑스어 글 1/8(포럼)
- **PAA**: «Que signifie le terme "straddle" ?» · «Comment s'appelle la mise de départ au poker ?» · «Quelle est la traduction de "straddling" en français ?»
- **영상**: Tight Poker «What is a straddle in poker?» · Poker Rail Bird «UTG Straddle in Poker: Smart Play or Costly Mistake?» · Detroit Poker «Live Poker Straddle Explained»

### 3-8. «straddle au poker» (-) · 영상 ✓ · 쇼츠 ✓
1 pokerstars.fr «Qu'est-ce qu'un straddle (option) au poker et quand faut-il l' ...»(⚠️ 한국 IP 404) · 2 fr.pokernews «Explication du " Straddle " (ce n'est pas aussi bizarre que ...» · 3 reddit(자동번역) · 4 clubpoker «Straddle - Lexique poker…» · 5 winstar(영어) · 6 reddit(영어) · 7 wikihow «Poker Straddles: Types and Strategies» · 8 fr.pokernews «Poker Live : Le Straddle, une mise aveugle pour plus d'action»(2013)
- **PAA**: «Que signifie le terme "straddle" ?» · «Comment s'appelle la mise de départ au poker ?» · «Comment se passent les mises au poker ?»
- **관련검색**: Who can straddle in poker · Can anyone straddle in poker · Double straddle poker · Button straddle poker · What is a straddle in gymnastics · Straddle option · Can you straddle in a poker tournament · ATC poker

### 3-9. «nuts poker» (210)
1 apps.apple.com «The Nuts: Poker Coaching Game»(앱) · 2 clubpoker «Nuts Poker Team - Équipe poker»(팀명) · 3 joa.fr «Nuts Poker Festival | Casino JOA de Gujan-Mestras»(지역 대회) · 4 poker.betmgm «The Nuts in Poker Explained – BetMGM»(영어) · 5 youtube «QUAND LES JOUEURS ONT LES SECOND NUTS ...» · 6 gov.uk 회사등기 «the nuts poker league limited» · 7 thehendonmob «What's the Low Nuts?»(오마하 하이로) · 8 apps.apple.com «What's The Nuts? - Poker Training Game»
- **PAA**: «Que signifie "nuts" au poker ?» · «Que signifie l'expression "nuts" ?» · «Quel est le jeu le plus fort au poker ?» · «Qu'est-ce qu'un limp au poker ?»
- 프랑스어 정보 페이지 **0/8**.

### 3-10. 보조 SERP 12건 (원본 `tmp/fr-serp-F-serp2~4.json`)

| 검색어(볼륨) | 상위 구성 | PAA 축어 |
|---|---|---|
| c'est quoi un fish au poker (-) | fish **정의** 글 0/10 — 포럼 6 · tolkers «Le langage du Poker en ligne…» · clubpoker · fishacademy | «Qu'est-ce qu'un fish au poker ?» · «Que signifie "faire tapis" au poker ?» · «Quelle main ne pas jouer au poker ?» · «C'est quoi Shove au poker ?» |
| termes poker (260) | 사전형 6/10(pokerstrategy «… - Glossaire de termes poker» 4 · pokerlistings 1) · 포럼 «Language pokeristique» · 목록 2 · amazon 책 · instagram | «Quels sont les fondamentaux du poker ?» · «Comment définir l'ordre de parole au poker ?» |
| vocabulaire poker (210) | youtube «2.3 Lexique : Styles de jeux - Cours de poker»(1위) · yourpokerdream(2위) · 목록·사전 6 · 포럼 1 | «Quel est l'ordre du poker ?» · «Comment dit-on "poker" en français ?» · «C'est quoi TNT poker ?» · «Que signifie ITM au poker ?» |
| termes poker en français (70) | 대응표 페이지 **0/10** — stake.com «Les termes du poker expliqués»(1위) · pokerstrategy 2 · 무관 4 | «Quels sont les fondamentaux du poker ?» · «Quel est l'ordre de parler au poker ?» · «Comment s'appellent les cartes au poker ?» |
| qu'est-ce que le rake au poker (10) | reddit 자동번역 **7/10** · pokernews «Adapter sa stratégie selon le rake (Kipik Poker)» · wam «Qu'est-ce que le Rakeback?» | «Qu'est-ce que le rake au poker ?» · «Quel est le rake sur Winamax ?» · «C'est quoi le rake ?» · «Que signifie "rake" dans le contexte du poker ?» |
| rakeback (140) | 제휴 1위(pokernews.com «Best Rakeback Poker Sites…») · reddit 3 · 외국어 3 — 프랑스어 정의 0 | 위 4개 + «Quel est le pourcentage de rakeback appliqué par Winamax ?» · «Quel est le site de poker avec le meilleur rakeback ?»(🔴 조준 금지) |
| bad beat (110) | 영어·위키 8/9 · 지식패널 ✓ · 영상 **M6+ «BadBeat c'est un sale coup au poker !»** | (없음) |
| bad beat au poker (-) | egamersworld «Gérer les **mauvais coups** au poker en ligne» · pokerstars.fr «Cinq astuces pour survivre à un bad run au poker» · pokerpro · 외국어 | «C'est quoi un flop au poker ?» · «Qui est le goat du poker ?» · «Quelle main ne pas jouer au poker ?» · «Quel est le pourcentage de chances de réussir un quinte flush ?» |
| cooler au poker (-) | §3-6과 같은 도메인군 + blackrain79 «How to Avoid Coolers in Poker (Is It Possible?)» | «Quels sont les différents styles de poker ?» · «Comment travailler son jeu au poker ?» |
| c'est quoi un straddle au poker (-) | straddle **전용** 글 0/10 — over-pair «Lexique du poker»(1위) · orangegames «Termes de Poker de A à Z» · 무관 8 | «Comment s'appelle la mise de départ au poker ?» · «Comment fonctionnent les mises au poker ?» · «Quelles sont les différentes variantes du poker ?» |
| nuts au poker (20) | **프랑스어 0/9**(이·독·체·스·헝·스웨덴·영 사전) | «Que signifie "nuts" au poker ?» · «Comment s'appellent les cartes au poker ?» · «Que signifie "tnt" au poker ?» · «Que signifie l'expression "nuts" ?» |
| les nuts au poker (10) | 프랑스어 정보 글 0 — reddit 자동번역 · 쇼츠 4 · x.com Winamax | «Que signifie l'expression "nuts" ?» · «Qu'est-ce qu'un limp au poker ?» · «Quel est le jeu le plus fort au poker ?» |

---

## 4. 상위 글 원문 정독 (Playwright DOM · 헤딩 축어)

> 수집 실패(정독 대상에서 제외): clubpoker.net ×1(Cloudflare 차단) · worldpokerfederation(봇 확인) · upswingpoker(봇 확인) · fr.egamersworld(보안 확인) · pokeo.fr(인증서 만료 ERR_CERT_DATE_INVALID) · pokerstars.fr 학습 3건(한국 IP 404 — 상단 ⚠️).

### 4-1. fr.pokerlistings.com «Comment exploiter le fish au poker pour ne pas en devenir un ?» (fish au poker 2위)
- 약 5,190단어 · 이미지 20 · 표·FAQ·영상 0 · 저자 «Claude Moreau» · «Dernière mise à jour le : 17 décembre 2025 · 25 minutes à lire»
- 헤딩 축어(H2 + H3 일부): H2 Signes que vous êtes un TAG Fish au poker(H3 8개: «1. Vous ne pensez qu'au range de votre adversaire» … «8. Vous tiltez trop / souvent») / H2 Comment exploiter un TAGFish au poker(H3 6개: «1. Punir les C-bettors à répétition.» · «3. Ne payez pas les fish de poker» · «4. Three-Bet avec un range plus large» …) / H2 Isoler les fish au poker : Vous aide à imprimer de l'argent(H3 «Asseyez-vous à la gauche du fish» · «ISO RAISE: Même avec des mains faibles») / H2 Choisir les bonnes mains de poker contre les bons joueurs / H2 Ne jamais » taper sur le verre » au poker
- 정의 축어: «Un fish au poker est un joueur qui est généralement inexpérimenté et qui est susceptible de perdre de nombreux pots…»
- 약점: 본문 절반이 **«TAGfish»**(초보 fish 정의 의도와 어긋남) · «don't tap the glass»를 «taper sur le verre / la vitre / frappe le verre» 3가지로 혼용.

### 4-2. partypoker.fr «Astuces pour repérer un fish au poker» (5위 · 약 1,100단어 · 이미지·표·FAQ 0)
- 헤딩 축어: H2 Comment repérer un fish? / H3 1) Suivre tout du long · 2) Miser trop ou pas assez · 3) La frime · 4) L'abattage · 5) Le moulin à paroles · 6) La critique · 7) Tout miser · 8) La position · 9) 1 contre 1 · 10) Miser / H2 Vous avez identifié le fish. Que faites-vous maintenant ?
- 예시 축어 «un joueur mise 1 000 jetons "under the gun" avec des blinds de seulement 10/20 … risquer 1 000 jetons pour en voler 30 ?» — 산수 ✓.

### 4-3. pokerpro.fr «Comment exploiter les fish ?» (9위 · 2020-10-01 · 약 2,440단어)
- H2 축어: La définition d'un fish au poker : / Pourquoi les joueurs de poker, ciblent-ils les fish ? / Les tendances de jeu du fish / Apprendre, ajuster et s'adapter / Les fish sont vos amis — 용어 툴팁이 본문에 자동 삽입.

### 4-4. fr.pokernews.com 사전 (각 1~2문장 · 3~7위)
- Fish 축어: «Un Fish ("poisson") est un joueur débutant au poker ou un mauvais joueur à l'inverse des Sharks ("requins").»
- Cooler 축어: «…une situation où une grosse main est battue par une main de plus forte valeur encore. Votre couleur battue par une quinte flush royale est un cooler.»(§13 ✓) → **정의형 SERP 문턱이 낮다.**

### 4-5. fr.yourpokerdream.com «Lexique du poker : tous les termes expliqués de A à Z» (lexique 3위 · vocabulaire 2위 · 수정 2026-09-16) — **실질 최강 경쟁자**
- 약 6,690단어 · H3 용어 약 130개 · 표 1 · 이미지 7 · **FAQ ✓** · 2인칭 **tu** · <title> «Lexique du poker : tous les termes de A à Z en 2026»
- 구조 축어: H2 Par où commencer si tu débutes / H2 Lexique du poker de A à Z(H3 «EV (Expected Value)» … «WSOP») / H2 Comment utiliser ce lexique pour progresser vraiment / H2 Questions fréquentes sur le vocabulaire du poker — FAQ H3: Quels termes de poker apprendre en premier quand on débute · **Pourquoi le vocabulaire du poker est il majoritairement anglais** · Quelle différence entre une 3-bet et une 4-bet · Que signifient cotes du pot et équité · Quelle différence entre un set et des trips · **Le vocabulaire est il le même en Belgique en Suisse et au Québec** · Les logiciels de suivi et les HUD sont ils encore autorisés · Que veut dire jouer en position
- 우리 용어 정의 축어(발췌): Fish «Un fish est un joueur faible, généralement trop large et trop passif. Le repérer rapidement et se placer à sa gauche vaut plus que n'importe quel ajustement technique.» · Straddle «Le straddle est une blinde supplémentaire volontaire, posée par le joueur situé à gauche de la big blind, pour au moins le double de celle ci.» · Cooler «…deux très grosses mains se rencontrent et où personne ne pouvait raisonnablement se coucher. Un brelan servi contre un brelan supérieur, par exemple.» · Bad beat «…Le cas le plus célèbre reste le Main Event WSOP 2008, où le carré d'as de Motoyuki Mabuchi s'est fait battre par la quinte flush royale de Justin Phillips.» · Nuts «…la meilleure main possible compte tenu des cartes visibles… les nuts évoluent à chaque nouvelle carte» · Rake «…commission prélevée par la salle sur chaque pot en cash game, et sous forme de frais d'inscription en tournoi…»(dealt rake / contribution pondérée 언급)
- §13: «Un tirage couleur au flop a environ deux chances sur trois de ne pas rentrer d'ici la rivière» — 9아웃 2장 ≈ 35.0% 적중 → 65% 미적중 ✓. Mabuchi를 «bad beat»로 단정 — **우리 EN은 «턴에서 이미 역전 → 엄밀히는 깨끗한 bad beat 아님»으로 구분**(차별화).
- 약점: 경험담 0 · 핸드 예시 1~2개 · 용어당 2~3문장.

### 4-6. jeu-legal-france.fr «LEXIQUE DU POKER»(lexique 5위 · 2,030단어 · 헤딩 H1뿐 · 룸 비교 사이트) — Nuts·Fish·Rake·Bad beat ✓ · **Straddle·Cooler ✗**
### 4-7. over-pair.com «Lexique du poker»(c'est quoi un straddle 1위 · 2017) — 축어 «Straddle : Voir Option.» · «Option : Overblind, facultatif.» · «Sucker (US) : Voir Fish.» → 프랑스 전통 용어 **option / overblind** 근거.

### 4-8. fr.pokernews.com «Explication du " Straddle " (ce n'est pas aussi bizarre que ça en a l'air)» (straddle au poker 2위)
- 약 2,630단어 · 표 1 · 이미지 6 · FAQ ✓ · 저자 Robert Woolley(+ Vivian Saliba 영상)
- H2 축어: Qu'est-ce qu'un Straddle au poker ? / La mise Straddle dans les parties en No-Limit / Poker Straddle : Trois scénarios à connaître / Le "Button Straddle" / Vivian Saliba … explique les avantages et les inconvénients du Straddle Bet / Vidéo : Comment utiliser le Straddle Bet pour gagner plus de mains / Poker Straddle F.A.Q.
- FAQ 축어: «Pourquoi straddle au poker ?» · «Le straddle est-il considéré comme une relance ?» · «Combien pouvez-vous miser au poker ?» · «Le straddle est-il rentable au poker ?»
- 본문 축어: «La taille de la mise straddle est le double de la grosse blind, et agit effectivement comme une troisième blind volontaire» · «Le straddle du Mississippi : Tout joueur peut straddle - tant qu'il le fait avant que les cartes ne soient distribuées. Si personne ne re-straddle (oui, c'est possible), le joueur qui place la mise straddle est le dernier à agir avant le flop.» · «Selon les Robert's Rules of Poker de Bob Ciaffone, le straddle est une troisième blind, pas une relance.» · «Dans une partie de Hold'em 1$/2$, la mise straddle est de 4$.»(✓)
- 약점: FAQ «Combien pouvez-vous miser au poker ?» = «How much is a straddle?» **오역** · «stradddle» 오타 · «il n'est jamais +EV d'investir dans votre main avant de voir quelles cartes vous avez» = **D유형 단정**(우리 EN은 조건부).

### 4-9. rake 4편
- **pokerpro.fr «Qu'est-ce que le rake au poker ?»**(2위 · 2019-05-31 · 약 1,350단어 · 표·FAQ 0) — H2 Définition / Le rake en tournoi ? / Le rake en cash game — 축어 «En moyenne, le rake des tournois online s'élève aux alentours des 10 % du buy-in … un tournoi à 10 € … 9 € seront dans le prizepool, et 1 €…»(산수 ✓ · 10 % 근거 미제시)
- **fr.pokerlistings.com «Le rake au poker et son influence sur le jeu»**(5위 · 약 1,430단어 · 표 1) — H2 Les différents types de rake(H3 Rake dans les tournois (MTT et Sit & Go) · Rake dans le cash game · **Qu'est-ce que « No Flop, No Drop » ?**) / H2 Comment le rake affecte votre stratégie ?(H3 Impact sur les décisions préflop · Ajustements post flop en fonction du rake) / H2 Conclusion
- **poker-toolkit.com «[RAKE-RAKEBACK] Combien prélèvent les sites de poker en ligne ?»**(4위 · 2026-04-19 · 약 3,290단어) — H2 Qu'est ce que le rake au poker ? / **Pourquoi le rake est-il élevé en France ?** / **Le rake : l'État français et le poker** / Les différentes formes de rake au poker en ligne / Une autre manière de penser le rake / Qu'est ce que le "no flop no drop" ? / Le rake capé sur les micro-limites et sur les limites hautes en Cash Game(H3 «Rake de 5,75% capé à 0,40€ en NL2» · «…capé à 3€ en NL400») / Qu'est ce que le rakeback ? / (이하 Winamax 요율 계산·룸 비교 H2 다수 — 룸 의도)
  - 🔎 프랑스 고유 각도 축어: «Depuis l'ouverture du marché du poker en ligne en France en 2010, la loi prévoit un prélèvement d'environ 2% capé à 1€ sur les mises jouées au poker.» + Légifrance 인용 «…fixée à 2 % des mises dans la limite de 1 € par donne…». 🔴 **2차 출처** — 쓰려면 Légifrance 원문 확인(§12-B) · 합법성 축에 걸치므로 한 줄 이하.
- **pokerstars.fr 요율표**(1위) — 한국 IP에서 영어판(표 7) · 룸 요율 = 관찰만.

### 4-10. bad beat — pokerpro.fr «Les pires bad beats de l'histoire du poker» (5위 · 2021-02-10 · 약 1,200단어 · H2 0)
- §13 검산: ① Moneymaker A-Q vs Ivey 9-9, Q-Q-6 / 9 / A(WSOP 2003): 턴 Ivey 9-9-9-Q-Q > Moneymaker Q-Q-Q-A-9 · 리버 A → Q-Q-Q-A-A ✓. 글의 «Seul un As, un 6 ou une dame» = A×3 + 6×3(Q-Q-Q-6-6 > 9-9-9-Q-Q) + Q×1 = **7아웃 ✓**. ② Festejo A-2 vs Ardebili 2-3, K-7-2 / 3: 플롭 키커 A>3 ✓ · 턴 3-3-2-2-K ✓. ③ Hellmuth A♥K♥ vs Varkonyi Q♣10♣, A-Q-10 → 투페어 ✓. ④ ❌ Raymer K-K vs Kanter Q♥J♥: «Kanter envoie un deuxième barrel … et Kanter relance» — **주어 오류**(플러시 논리는 ✓).
- 3위 poker-academie «Comment éviter un bad beat» = 2006년 포럼 3글. nuts = 프랑스어 정보 글 1페이지 0(영어 betmgm 4위 · H2 What is Nuts in Poker? / Drawing to the nuts / 룸 홍보 2).

### 4-11. 영어 1위 글 — straddle 1위 checkreplay(2026-07-15 · 3,000단어) FAQ: What is a straddle in poker? · How much is a straddle in poker? · Is a straddle a good idea in poker? · Should I call more when someone straddles? · Can you straddle in online poker? · What is a button straddle? · bad beat poker 1위 pokernews.com «Bad Beat Jackpot»(704단어 · FAQ ✓).

---

## 5. 장단점 표 (상위 글 공통)

| 축 | 공통 강점(갖춰야 할 것) | 공통 약점(차별화 지점) |
|---|---|---|
| 정의 | 첫 문단 1~2문장 정의(pokernews·yourpokerdream) — 구글이 2줄 사전에도 3~7위를 준다 | 정의만 있고 **«왜/언제/어떻게»가 없다**(사전 2줄) |
| 언어 | 프랑스어 대응어 병기: poisson/requin(fish/shark) · option/overblind(straddle) · sale coup/mauvais coup(bad beat) · prélèvement/commission(rake) | 대부분 영어 원어만 · 번역 흔들림(«taper sur le verre/vitre») · 오역 FAQ(pokernews straddle) |
| 예시 | 실전 사례(WSOP 유명 핸드) | **7장 베스트5 검산 없는 서술**(pokerpro 주어 오류) · cooler/bad beat 경계를 사례로 판정한 글 0 |
| 수치 | rake: 퍼센트·캡·no flop no drop(poker-toolkit·pokerlistings) | 출처 없는 «10 %» · 확률(아웃·에퀴티)로 bad beat/cooler를 정량화한 프랑스어 글 0 |
| 구조 | 번호 매긴 신호 목록(fish 8~10개) · FAQ 블록(yourpokerdream·pokernews) | FAQ 있는 프랑스어 글 = 2편뿐 · PAA 축어에 맞춘 H2 0 |
| 신선도 | yourpokerdream 2026-09 · poker-toolkit 2026-04 · pokerlistings 2025-12 | pokerpro 2019~2021 · poker-academie 2006 · over-pair 2017 · pokernews straddle(연도 미표기) |
| 경험담 | — (거의 없음) | **1인칭 테이블 경험담 0** — E-E-A-T 공백 |
| 상업성 | — | 룸·제휴 페이지가 rake·fish·lexique에 섞임(재미·정보 의도에 판매 문구) |

---

## 6. 우리 글 대조 (EN 마스터 H2·FAQ ↔ 프랑스 의도 · 도구 경계) — H2 개명·추가 처방은 §7

| 글 | ✅ 이미 이기는 점(프랑스 1페이지에 없음) | ❌ 빠진 프랑스 의도 | 도구 /fr/glossary |
|---|---|---|---|
| glossary(EN 25.6KB · H2 7 · FAQ 8) | «The Terms People Mix Up Most» 혼동쌍 · set vs trips FAQ(경쟁 FAQ와 일치) | 영어→프랑스어 대응(«termes poker en français» 70 · 대응표 페이지 0/10) · PAA 5종(§9) · «Pourquoi le vocabulaire du poker est-il anglais ?»(yourpokerdream FAQ) | **헤드 3종 보유**(§8-①) · dict 주석 «fr holdem-glossary 글 없음 → seoTitle 충돌 없음» = 글이 생기면 전제가 바뀐다 |
| fish(EN 21.3KB · H2 7 · FAQ 8) | «Am I the Fish?» 자가진단 · zoo 비교표(shark 140·nit 90 흡수) · 명언 출처 교정 | PAA «Comment appelle-t-on un joueur de poker ?» · «poisson / requin» 대응 · 경쟁 공통 실전 팁 «se placer à sa gauche»(EN에 «fish 상대로 어떻게 치나» 절이 약한지 레인 A 확인) · 트래커·앱 브랜드와 구분 | Fish **없음** → 글 단독 |
| bad-beat(EN 25.6KB · H2 8 · FAQ 8) | «With the Odds» 확률 · «real bad beat» 기준선 · Mabuchi 엄밀 판정 | PAA 2종(chance · probabilité) · 대응어 «sale coup / mauvais coup» · 프랑스어 영상 맥락(PokerStars en Français «pires bad beats») · jackpot은 퀘벡 신호(짧게) | Bad beat 1문장 — 충돌 없음 |
| cooler(EN 23.5KB · H2 7 · FAQ 10) | 프랑스어 cooler 전용 글 사실상 0(사전 2줄 + 404) · «Can You Actually Avoid Coolers?»(영어 SERP와 일치) · «핑계» 절 | 관련검색 «Why is it called a cooler in poker»(EN 어원 유무 확인) · «What is a heater in poker»(한 줄) | Cooler 있음 — 충돌 없음 |
| rake(EN 20.7KB · H2 6 · FAQ 11) | time charge·dead drop(라이브 관점 · 경쟁 0) · 실제 지불액 산수 | **«no flop, no drop»**(경쟁 2편 H2/H3) · **«rake capé / cap»** · PAA(§3-4) · «rake traduction» → «prélèvement / commission» 병기 · «Comment le rake affecte votre stratégie ?»(pokerlistings H2). 🔴 EN FAQ «Is taking a rake illegal?» = 미국 사설 게임 법률 맥락 → 프랑스판 합법성 축 위험(레인 A 판정) | Rake 있음 — 충돌 없음 |
| straddle(EN 20.9KB · H2 6 · FAQ 9) | H2가 영어 1위 checkreplay FAQ 6 + 관련검색(Who can · Double · Button · tournament · Straddle option)을 거의 1:1로 덮음 | **«option / overblind»** 명칭 · PAA 2종(mise de départ · traduction) · «double straddle / re-straddle» · «straddle en ligne»(EN 유무 확인) | Straddle **없음** → 글 단독 |

## 7. 처방 (레인 A 브리프 재료 · 🔴 최종 seoTitle·desc는 쓰지 않는다 · 우선순위 = 볼륨 × 갭)

| 순위 | 글 | 근거 한 줄 |
|---|---|---|
| 1 | fish | 프랑스어 정의 글 0/9 · 질문형 자동완성 최다 · 단 실수요는 소형(§0-1) |
| 2 | bad-beat | 170+110 · 1위가 영어 jackpot 정의 · 확률 다룬 프랑스어 글 0 |
| 3 | rake | 210 · 프랑스어 글 3편(낡음 2019 / 상업적) · no flop no drop 갭 |
| 3 | straddle | 90 · straddle 전용 프랑스어 글 = pokernews 1편(오역·단정) |
| 4 | glossary | 헤드 260은 도구 몫 → 허브(내부링크) 가치 |
| 5 | cooler | 10 · 그러나 프랑스어 글 사실상 0 — bad beat와 세트로 품질 |

### 7-1. holdem-fish
- **카피 방향**: 주력어 **«fish au poker»** + «c'est quoi un fish au poker»(SERP가 정의로 정렬된 형태). «fish poker»는 넣되 앞자리 단독 주력어 금지(1,300 = 앱·트래커 혼입). 훅 = EN «If You Can't Spot the Fish, It's You» 승계 · «poisson» 직역 1회.
- **H2**: «What Does "Fish" Mean» → **«C'est quoi un fish au poker ?»** · «Why… Called "Fish"?» 유지(poisson/requin 어원 — pokernews 축어와 정합) · «How to Spot a Fish: 8 Telltale Signs» → **«Comment repérer un fish : 8 signes»**(partypoker·pokerlistings 패턴) · «The Poker Zoo» → **«Fish, shark, whale, nit, donk : comment appelle-t-on les joueurs de poker ?»**(PAA 흡수) · «Am I the Fish?» → «Et si le fish, c'était toi ?» · **추가 검토** «Comment jouer contre un fish ?»(경쟁 공통 «se placer à sa gauche» — EN에 해당 문단 없으면 레인 A 판단)
- **FAQ**: «Qu'est-ce qu'un fish au poker ?»(= «C'est quoi un fish ?» 통합) · «Comment appelle-t-on un joueur de poker ?» · EN 8개 유지
- **차별화**: 자가진단 · 명언 출처 교정 · 경험담 · (EN에 있으면) VPIP 수치. 경쟁 3편 = TAGfish 혼동 · 2020년 · FAQ 0.
- **주의**: 첫 문단은 «joueur faible» 정의로 — 트래커 «Poker Fish»·앱 «FishPoker»와 혼동 차단. 트래커·HUD 소개 금지(상업).

### 7-2. holdem-bad-beat
- **카피 방향**: 주력어 **«bad beat poker»** / «bad beat». 대응어 **«sale coup / mauvais coup»** 본문 병기(M6+·egamersworld · «bad beat traduction» 20). 훅 = EN «You Were 80% to Win — and Lost» 승계(% 훅은 프랑스 SERP에 없음).
- **H2**: «What Is a Bad Beat» → **«Qu'est-ce qu'un bad beat au poker ?»**(자동완성 축어) · «Bad Beat vs Cooler» → «Bad beat ou cooler : quelle différence ?»(관련검색 · 10) · «Classic Examples (With the Odds)» 유지 · «The Most Famous Bad Beat» → «…Mabuchi vs Phillips (WSOP 2008)» — yourpokerdream 단정을 EN 엄밀 판정으로 교정 · «Bad Beat Jackpot» 짧게(볼륨 20 · 퀘벡 신호)
- **FAQ**: **«Est-ce que le poker est de la chance ?»**(PAA · 답 = 단기 운·장기 실력) · «Quelles sont les statistiques de probabilité au poker ?»(PAA → `holdem-probability` 앵커 · 헤드 880은 L-C 몫) · EN 8개 유지
- **차별화**: 확률 + 7장 베스트5 검산(경쟁 0) · 경험담 · `/fr/calculator` 링크

### 7-3. holdem-rake
- **카피 방향**: 주력어 **«rake poker» / «rake au poker»** + «c'est quoi le rake». 대응어 «commission / prélèvement de la salle»(PokerStars FR 제목 축어). 훅 = EN «The Fee Quietly Eating Your Winnings» 승계.
- **H2**: «What Is Rake» → **«C'est quoi le rake au poker ?»** · «How Is Rake Taken?» → «Comment est prélevé le rake ? (pourcentage, plafond, time charge)» + **«no flop, no drop»** 소절 · «How Much Rake Do You Actually Pay?» 유지(EN 수치) · «What Is Rakeback?» → «Qu'est-ce que le rakeback ?»(140 · 🔴 룸 비교·추천 금지) · «Do Tournaments Have Rake?» → «Y a-t-il du rake en tournoi ?»(pokerpro H2 패턴) · «Online vs Live» 유지(🔴 국가 과세 2 %·1 €는 Légifrance 원문 확인 시에만 한 줄) · FAQ «How does rake affect your win rate?» → H2 승격 검토 «Comment le rake affecte ton winrate ?»
- **FAQ**: «Qu'est-ce que le rake au poker ?»(= «C'est quoi le rake ?») · «Que signifie "rake" dans le contexte du poker ?» · EN «Who pays the rake» · «…if everyone folds before the flop?» 유지. 🔴 PAA «Quel est le rake sur Winamax ?»·«…meilleur rakeback ?» 조준 금지 · 🔴 EN «Is taking a rake illegal?» 프랑스판 처리 = 레인 A 판정(삭제 또는 일반론).
- **차별화**: time charge·dead drop · 지불액 산수 · 룸 광고 없는 중립 설명(상위 3/10이 룸·제휴)

### 7-4. holdem-straddle
- **카피 방향**: 주력어 **«straddle poker» / «straddle au poker»** + «c'est quoi un straddle». 첫 문단에 **«option»**(+ «overblind») 병기 = PAA «Quelle est la traduction de "straddling" en français ?» 직답. 훅 = EN «The Bet That Doubles the Stakes» 승계.
- **H2**: «What Is a Straddle» → **«C'est quoi un straddle (option) au poker ?»** · «Who Acts First and Last» → «Qui parle en premier après un straddle ?» · «Types (UTG, Mississippi, Button & Sleeper)» 유지 + «double straddle / re-straddle» 한 줄 · «How Much Is a Straddle?» → «Combien vaut un straddle ?» · «Allowed in Tournaments?» 유지 · «Is Straddling Profitable?» 유지(pokernews «jamais +EV» 단정 대비 조건부 = 차별화)
- **FAQ**: «Que signifie le terme "straddle" ?» · «Quelle est la traduction de "straddling" en français ?» · «Comment s'appelle la mise de départ au poker ?»(답 = 블라인드·ante · `holdem-blind-meaning` 앵커) · «Le straddle est-il considéré comme une relance ?»(= EN FAQ) · EN 나머지 유지
- **차별화**: 구조·정확도(경쟁 = 오역·오타·단정 1편) · 라이브 캐시 경험담 · 행동 순서 그림(EN에 있으면)

### 7-5. holdem-glossary
- **카피 방향**: 주력어 **«jargon / langage / expressions du poker»**(20~50) + «termes du poker en français / anglais»(70) 각도. 훅 «à table, tout le monde parle anglais» · «les mots qu'on confond». 🔴 **«lexique» · «termes» · «vocabulaire»를 seoTitle·H1 앞자리에 쓰지 않는다**(§8-①). EN «From the Nuts to the Fish» 훅은 가능하나 «nuts»를 키워드로 세우지 않는다(§8-④).
- **H2**: «The Terms People Mix Up Most» → «Les mots que tout le monde confond à table» · **추가** «Pourquoi le vocabulaire du poker est-il en anglais ?»(yourpokerdream FAQ 축어 · PAA «Comment dit-on "poker" en français ?») + 영어→프랑스어 대응표(표기 = `/fr/glossary` dict 축어) · «Player Types & Slang» → **«Comment appelle-t-on un joueur de poker ? (fish, reg, nit, shark…)»** + fish 앵커 · 소항목 후보(PAA·도구에 없음): TNT(320 · PAA 2회) · ITM(170) · shove(170) · squeeze(140) · flat(50) — 🔴 TNT·ITM은 정의 1줄 + L-E 앵커
- **FAQ**: «Comment appelle-t-on un joueur de poker ?» · «C'est quoi TNT poker ?» · «Que signifie ITM au poker ?» · «Comment s'appellent les cartes au poker ?»(→ hand-rankings·rules 앵커) · «Comment dit-on "poker" en français ?» · EN set vs trips · cooler vs bad beat · 3-bet 유지
- **차별화·카니발**: 혼동쌍 + 대응표(경쟁 0) · 용어마다 «테이블에서 들리는 문장» 경험담 · **글 → `/fr/glossary` 링크를 첫 화면에**(tr에서 0개였던 실수 방지) · nuts는 1줄 + reading-the-board 앵커

### 7-6. holdem-cooler
- **카피 방향**: 주력어 «cooler poker» / «cooler au poker». bad beat 글과 첫 화면 상호 링크. 훅 = EN «The Hand You Couldn't Fold If You Tried» 승계.
- **H2**: → «C'est quoi un cooler au poker ?» · «Cooler ou bad beat : la différence que tout le monde rate» · «Classic Cooler Examples» 유지(set over set · AA vs KK · flush over flush — 7장 검산) · «Can You Actually Avoid Coolers?» 유지 · 관련검색 «Why is it called a cooler in poker» → EN «Setup» 절에 어원이 있으면 제목에 «pourquoi "cooler" ?» 반영
- **FAQ**: PAA 직접 질문 0 → 관련검색·자동완성 축어: «Cooler ou bad beat ?» · «Pourquoi dit-on "cooler" au poker ?» · EN «What is a cooler in a casino?» 유지(관련검색 근거)
- **차별화**: «How often does set over set happen?» 확률 · «핑계» 절 · 경험담. bad beat 정의 반복 금지(앵커).

## 8. 0-3 판정 재료 (판정은 0-3에서 · 증거 + 권고 1줄)

### ① holdem-glossary 글 ↔ `/fr/glossary` 도구 — «lexique / termes / vocabulaire poker»
- **SERP 증거**: 세 헤드 모두 1페이지 = 용어 목록·용어 단위 페이지(lexique 사전형 5/10 + A~Z 3/10 · termes 사전형 6/10, pokerstrategy 개별 용어 페이지 4건 · vocabulaire A~Z·사전 6/10). PAA = «C'est quoi TNT poker ?»·«Que signifie ITM au poker ?»·«Comment appelle-t-on un joueur de poker ?» = **개별 용어 조회**. 서술형 글 상위 = yourpokerdream(실질 130용어 A~Z 사전) 하나.
- **현 상태**: 도구 seo.title·H1·keywords가 세 헤드 보유 · DefinedTermSet. 선례 = tr «poker terimleri» 주인 = 도구(10-06 확정 · `tr-serp/L3-terms.md` §1-2) · `tools-over-posts` 확정.
- **권고 1줄**: **주인 = `/fr/glossary`(현행 유지)** — 글은 seoTitle·H1에 셋을 쓰지 않고 «jargon / langage / expressions du poker + 영어→프랑스어 대응» 각도, 첫 화면에 도구 링크.
- 🪶 범위 밖: 도구 사전에 PAA가 묻는 TNT·ITM·shove와 fish·straddle·nit 등 없음 — 사전 보강은 별도 회차.

### ④ «nuts poker» (210) — reading-the-board ↔ glossary
- **SERP 증거**: 1페이지 = 앱 2 · 팀명 · 지역 축제(JOA Gujan-Mestras) · 회사등기 · 영어 룸 블로그 · 영상 · 오마하 low nuts → **프랑스어 정보 페이지 0/8**. 자동완성 13/15 = 클럽·리그 이름. 정의형 꼬리(«nuts au poker» 20 · «les nuts au poker» 10)도 프랑스어 0/9 · 0/8. PAA = «Que signifie "nuts" au poker ?»·«Que signifie l'expression "nuts" ?»(정의) + «Quel est le jeu le plus fort au poker ?». 자동완성 «avoir les nuts poker» · 영상 «QUAND LES JOUEURS ONT LES SECOND NUTS» = **보드에서 nuts 찾기** 의도.
- **현 상태**: `/fr/glossary`에 Nuts 항목(keywords «nuts poker signification») · EN glossary seoTitle «From the Nuts to the Fish».
- **권고 1줄**: **«nuts poker» 헤드 = `holdem-reading-the-board`**(H2 «Comment savoir si tu as les nuts ?» + FAQ «Que signifie "nuts" au poker ?») — glossary 글은 정의 1줄 + 앵커, seoTitle에 «nuts» 금지; 도구는 DefinedTerm으로 유지.

---

## 9. 커버리지 표 (브리프 1~4 · 검색어별)

| 검색어(볼륨 · 출처) | 1 자동완성 | 2 새 볼륨 | 3 SERP+PAA | 4 원문 정독 |
|---|---|---|---|---|
| fish poker (1,300 · 0-1) | ✅ | ✅ 묶음 확인 | ✅ §3-1 | ✗ 프랑스어 정의 글 0/9 → «fish au poker»로 대체 |
| fish au poker (10) | ✅ | ✅ | ✅ §3-2 | ✅ pokerlistings · partypoker · pokerpro · pokernews(사전) (pokerstars 404 · clubpoker 차단) |
| c'est quoi un fish au poker (-) | ✅ | ✅ | ✅ §3-10 | ✗ 정의 글 0/10(포럼) |
| poisson / requin / pigeon / whale poker | ✅ | ✅ | ✗ 자동완성에서 포커 의도 0 | ✗ |
| lexique poker (260 · 0-1) | ✅ | — | ✅ §3-3 | ✅ yourpokerdream · jeu-legal-france · over-pair (pokeo 인증서 만료) |
| termes poker (260 · 0-1) | ✅ | ✅ termes du poker = 동일 | ✅ §3-10 | ✗ 사전형 6/10 — 형식 확인으로 충분 |
| vocabulaire poker (210 · 0-1) | ✅ | — | ✅ §3-10 | ✅ (2위 = yourpokerdream) |
| termes poker en français (70) | ✅ | ✅ | ✅ §3-10 | ✗ 대응표 페이지 0/10 |
| glossaire / jargon / argot / langage poker | ✅ | ✅ | ✗ 소형 — 자동완성으로 각도만 | ✗ |
| rake poker (210 · 0-1) | ✅ | ✅ | ✅ §3-4 | ✅ pokerpro · pokerlistings · poker-toolkit · pokerstars(요율표) · pokernews(사전) |
| qu'est-ce que le rake au poker (10) | ✅ | ✅ | ✅ §3-10 | ✗ reddit 자동번역 7/10 |
| rakeback (140) | ✅ | ✅ | ✅ §3-10 | ✗ 제휴 의도(조준 금지) |
| bad beat poker (170 · 0-1) | ✅ | ✅ | ✅ §3-5 | ✅ pokerpro(§13 4핸드 검산) · poker-academie · pokernews.com(헤딩) |
| bad beat (110 · 0-1) · bad beat au poker (-) | ✅ | ✅ badbeat = 동일 | ✅ §3-10 ×2 | ✗ 영어·위키·보안 차단 — 위와 중복 |
| bad beat jackpot (20 · 0-1) | ✅ | — | ✗ «bad beat poker» SERP 1·4위·관련검색으로 대표 | ✅ 헤딩(pokernews.com) |
| cooler poker (10 · 0-1) · cooler au poker (-) | ✅ | ✅ | ✅ §3-6 · §3-10 | ⚠️ pokernews(사전)만 — pokerstars 404 · clubpoker·upswing 차단 · 나머지 영어 = **프랑스어 정독 가능한 글이 1편뿐인 것 자체가 발견** |
| straddle poker (90 · 0-1) | ✅ | ✅ | ✅ §3-7 | ✅ checkreplay(영어 1위 · 헤딩·FAQ) |
| straddle au poker (-) | ✅ | ✅ | ✅ §3-8 | ✅ pokernews FR(전문 · FAQ 축어) |
| c'est quoi un straddle au poker (-) | ✅ | ✅ | ✅ §3-10 | ✅ over-pair(«option / overblind») |
| nuts poker (210 · 0-1) | ✅ | ✅ | ✅ §3-9 | ✅ betmgm(영어 4위) · 프랑스어 정보 글 0 |
| nuts au poker (20) · les nuts au poker (10) | ✅ | ✅ | ✅ §3-10 ×2 | ✗ 프랑스어 페이지 0/9 · 0/8 |
| 와일드카드 7종 | ✅ §2-2 | ✅(tnt·itm·shove·squeeze·flat·nit·reg) | ✗ 변형은 대표 질문형으로 조회 | — |
| `/fr/glossary` 도구 | — | — | ✅ dict.ts 실측(46용어 · seo · keywords) | — |

### 글별 «PAA·자동완성 질문 확보» (완료 조건 · 축어는 §2·§3·§7)

| 글 | PAA 축어 | 자동완성 질문형 | 판정 |
|---|---|---|---|
| glossary | ✅ 5(joueur de poker · TNT · ITM · cartes · «poker» en français) | ✅ «que veut dire / c'est quoi un * au poker» 각 15 · termes poker en français/anglais | ✅ |
| fish | ✅ 4(C'est quoi / Qu'est-ce qu'un fish au poker · C'est quoi un fish · joueur de poker) | ✅ c'est quoi / qu'est-ce qu'un fish au poker · fish poker signification · nit/reg | ✅ |
| bad-beat | ✅ 2 인접(poker = chance ? · statistiques de probabilité) — 직접 질문 0 | ✅ qu'est-ce qu'un bad beat au poker · bad beat traduction · bad beat jackpot rules | ✅ |
| cooler | ⚠️ PAA 무관 → **관련검색 축어 대체**(Why is it called a cooler in poker · Poker cooler vs bad beat · What is a cooler in a casino) | ✅ cooler poker def · cooler vs bad beat | ✅(대체 명시) |
| rake | ✅ 3(Qu'est-ce que le rake · C'est quoi le rake · Que signifie "rake") + 조준 금지 2 | ✅ c'est quoi le rake au poker · qu'est-ce que le rakeback | ✅ |
| straddle | ✅ 3(Que signifie "straddle" · traduction de "straddling" · mise de départ) | ✅ c'est quoi un straddle au poker · straddle poker c'est quoi · straddle définition | ✅ |

**✗ 남은 것(결론 영향 없음)**: 봇·인증서 차단 6 URL(clubpoker · worldpokerfederation · upswing · egamersworld · pokeo · pokerstars.fr 학습 3건 = 한국 IP 404) — FR IP 재확인이 필요하면 레인 A에서 1회. 프랑스 국가 rake 과세 수치는 2차 출처뿐 → Légifrance 원문 미확인.
