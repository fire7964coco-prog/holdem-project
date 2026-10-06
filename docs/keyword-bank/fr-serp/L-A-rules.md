# L-A 규칙 — fr SERP 조사 (2026-10-07 · fr 클러스터 0-2)

> 대상 6편(🅰 · 현 fr = 7월판 → EN 현행으로 다시 쓴다): `texas-holdem-rules-for-beginners`(필라) · `holdem-game-order` · `holdem-betting-actions` · `holdem-blind-meaning` · `holdem-all-in-rules` · `holdem-showdown-rules`.
> 규격 = `00-brief.md` 1~8. 볼륨 정본 = `fr-core-volumes.md`(0-1) — 여기서 잰 것은 **0-1에 없던 것만**(§1-B). 검색어·헤딩·PAA는 **프랑스어 원문 그대로**.
> 도구: DataForSEO(2250 · fr) 자동완성 · Ads 볼륨 · organic SERP(depth 10 · desktop). 원문 = Node fetch로 HTML h1~h4 **기계 추출(축어)** + 본문, 차단 페이지는 Playwright(레포 `node_modules/playwright`) 재시도.
> 원자료(gitignore): `tmp/fr-serp-A-ac1/ac2.json`(자동완성 35) · `-vol1/vol2`(볼륨 98) · `-serp1/2/3`(SERP 20) · `-read1`~`-read6`(원문 40 URL).
> 🔴 CPC 근거 금지 · 볼륨 `-` = Ads 데이터 없음(≠ 0) · 같은 숫자 여러 줄 = 한 수요.

---

## 0. 결론 (상위 3)

1. **프랑스 규칙 SERP = 운영사 학교 + 위키 + 포럼, 해설형 글이 거의 없다.** «règles du poker»(18,100) 1위는 협회 규정집(laliguedepoker · 조문 15,700단어), «regles du poker texas holdem» 상위 6은 2000년대 제휴 사이트. 피처드 스니펫 **0/20** · AI Overview **1/20**(«relance poker»만) → 질문형 H2 + 40~75단어 직답이 그대로 먹힐 자리.
2. **프랑스어 액션 용어는 협회 공식 명명이 있다**: La Ligue de Poker 규정 «mise/ouverture (bet), relance (raise), payé/suivi (call), **passe (fold)**, **parole (check)**, tapis (all in)» · PokerStars.com/fr «**passer**, checker, miser, suivre ou relancer». 우리 betting-actions엔 «parole»은 있고 **«passer = se coucher»가 없다.** 또 **turn/river 표기가 우리 글끼리 갈린다**(rules «tournant/rivière» vs game-order «river» 30회) → 0-3 용어 재료(§8-B).
3. **헤드 대부분이 «남의 SERP» — 질문 롱테일로 간다.** «all in poker»(590) 상위 10 중 6이 외국어(CZ·BR·DE·NL·EN·기계번역 reddit), «tapis au poker»는 **매트 쇼핑 4/10**, «ante poker»는 **용어사전 6/10 + KG «Blind»**, «flop turn river»는 PAA 4개가 **영어**. 반면 PAA는 깨끗한 규칙 질문이다(«Qui doit parler en premier au poker ?» · «Pourquoi dit-on tapis au poker ?» · «Est-ce que la grosse blinde peut relancer ?» · «Quelles sont les règles du showdown ?»).

---

## 1. 검색어 (볼륨)

### 1-A. 주력어 (0-1 승계) + SERP 의도 판정

| 검색어 | 볼륨(0-1) | SERP 의도(§3) | 주인 |
|---|---:|---|---|
| règles du poker / regle poker / poker regles | **18,100** (vol2 변형 재확인 — 같은 수요) | 정보형 — 협회 규정·운영사·vikidia·PDF·영상팩 · 🟡 2위 «poker classique»(5장 드로) | rules-for-beginners |
| comment jouer au poker | 1,900 | 정보형 — wikihow 1 · 운영사 3 · PDF 2 · 영상 | rules-for-beginners |
| regles du jeux poker / poker regle du jeu | 1,300 (vol1 같은 수요) | — | rules-for-beginners |
| all in poker | 590 | 🔴 외국어 6/10 + 포럼 3 | all-in-rules |
| ante poker | 210 | 🔴 용어사전 6/10 + KG «Blind» + 가구 쇼핑 1 | blind-meaning |
| flop turn river | 210 | 🟡 FR 2 · 영어 5 · 책·파일 · PAA 전부 영어 | game-order |
| fold poker | 140 | 🔴 «fast fold» 상품명·포럼·숏츠 · 정의 1(akroplay) | betting-actions(정의) — §8-A |
| showdown poker | 110 | 정보형 — fr.wiki «Abattage» 1위 · 사전 2 · 운영사 2 · 🔴 프라하 클럽·앱 3 | showdown-rules |

### 1-B. 신규 후보 (0-1에 없던 것 · vol1·vol2 실측)

| 검색어 | 볼륨 | 주인 · 비고 |
|---|---:|---|
| valeur jetons poker | **1,300** | 🟡 rules-for-beginners — SERP 포럼 1 + amazon(상품 의도 섞임). PAA «Combien de jetons faut-il prévoir par joueur au poker ?»만 흡수 |
| petite blinde | 390 | blind-meaning — 🔴 SERP 블라인드 박스·Balatro 오염 → «petite blinde grosse blinde» 묶음으로만 |
| combien de jetons au poker | 320 | rules-for-beginners H2 «jetons» |
| distribution cartes poker · combien de cartes au poker | 260 · 260 | rules-for-beginners (후자 SERP는 족보 섞임 → 숫자 직답 1문장 + L-B 위임) |
| blind poker · heads up poker | 210 · 210 | blind-meaning (heads up은 언급만) |
| règles du poker simple | 170 | rules-for-beginners |
| call poker · raise poker · relancer au poker | 각 90 | betting-actions |
| muck poker · répartition jetons poker | 90 · 90 | showdown · beginners |
| slow roll poker · comment se joue le poker · cave poker | 각 70 | showdown · beginners(PAA 축어형) · beginners(캐시 바이인 = cave) |
| riviere/rivière poker · preflop poker · under the gun poker · comment jouer au poker en famille | 각 50 | game-order ×3 · beginners |
| comment jouer au poker 2 joueurs · bouton dealer poker | 40 · 40 | beginners(→ blind-meaning heads-up) · game-order |
| comment distribuer les jetons au poker · ante poker definition · flop turn river poker · que veut dire check au poker · nombre de joueurs poker | 각 30 | beginners · blind · game-order · betting · beginners |
| 20: que veut dire tapis au poker · se coucher au poker · deroulement partie de poker · mise minimum poker · règles du poker pdf · apprendre le poker en 5 minutes · small blind poker · combien de joueurs au poker | 각 20 | all-in · betting(§8-A) · game-order · betting · beginners ×2 · blind · beginners |
| 10: ante poker c est quoi · big blind ante · flop poker definition · quand faire tapis au poker · all in poker regle · quand se coucher au poker · quand peut on checker au poker · relance poker minimum · relance poker regle · combien de fois peut on relancer au poker · check poker definition · burn card poker · string bet poker · checker poker · suivre au poker · table stakes poker · grosse blinde · pré flop poker · donneur poker · comment jouer au poker sans jetons / facilement / simple · poker comment distribuer les cartes | 각 10 | 해당 글 H2/FAQ 문구 재료 |
| `-`(자동완성·PAA엔 있음): qui doit parler en premier au poker · qui commence a parler/miser au poker · ordre blinde poker · ordre petite blinde grosse blinde · qui paye l ante au poker · tapis effectif poker · que signifie se coucher au poker · peut on se coucher sans miser au poker · relance minimale poker · sur relance poker · qui montre ses cartes en premier au poker · quand montrer ses cartes au poker · regle abattage poker · pot annexe / pot secondaire poker · la grosse blinde peut elle relancer · ordre du jeu poker · brûler une carte / carte brulée poker · passer poker · tournant poker · flop turn river en francais | `-` | 질문형 H2/FAQ 문구 근거 |
| (0-1 중복 재측정 — 0-1 값이 정본) all in poker 590 · check raise poker 260 · limper poker 170 · croupier/bouton poker 110 | — | — |

### 1-C. 함정 (이 레인에서 새로 확인)

| 표면 | 실제 | 처리 |
|---|---|---|
| «règles du poker classique / menteur / à 5 cartes» (자동완성 1·2·7위) | 다른 게임(5장 드로 «poker fermé» · 주사위 허세) — «règles du poker» 2위가 pokerlistings «Règle du poker classique» | 조준 안 함 · 필라 FAQ 1 «Texas Hold'em ou poker classique ?»(§7-1) |
| «… winamax / betclic / unibet / 1xbet / en ligne / sans argent» | 운영사·실전 | 🔴 조준 금지 |
| «tapis au poker» | 매트 쇼핑 4/10 + «tapis minimum … mots fléchés» | «faire tapis» + «all-in» 병기 · «tapis de poker» 금지 |
| «petite blinde» · «valeur jetons poker» | 장난감·게임 / 칩 쇼핑 | 규칙 의도만 흡수 |
| «showdown poker» · «abattage poker» | 프라하 클럽·앱 / «abattage pokémon» | «showdown (abattage)» 병기 · «règle abattage poker» |
| «all in poker» · «parole poker» · «miser au poker» 자동완성 | 영화·리그·로또 / «Poker Face» 가사 / 십자말풀이 | «all in poker regle» · «ordre parole poker» · «comment miser»만 |
| «relance internationale / americaine / bloquée» (자동완성) | 1차 원문 미확인 용어 | 🔴 정의하지 않는다 |

---

## 2. 자동완성 (DataForSEO 2250/fr · 목록 그대로 · 순수 비포커 항목만 «…» 표시 후 생략)

**règles du poker** → règles du poker classique · règles du poker menteur · règles du poker texas hold'em · règles du poker simple · règles du poker avec jetons · règles du poker pdf · règles du poker à 5 cartes · règles du poker holdem · regles du poker a 2 joueur · regle du poker carte · règle du poker classique pdf · regle du poker a 2 carte · regle du poker debutant · regle du poker winamax · regle du poker betclic

**comment jouer au poker** → comment jouer au poker 2 joueurs · … en famille · … débutant · … en ligne · … sur winamax · … sur betclic · … au casino · … 5 cartes · … sans jetons · … machine casino · … sur unibet · … menteur · … holdem · … facilement · … sans argent

**poker texas holdem** → poker texas holdem regle · … combinaison · … gratuit · … en ligne · … en ligne gratuit · … main · … gratuit sans inscription · … français · … hands · … rules · … online · … apk · … regeln · … zasady · … online gratis

**regles poker texas holdem** → règles poker texas holdem · regle poker texas holdem pdf · combinaison poker texas holdem · rules poker texas holdem · poker rules texas holdem for beginners · … pdf · … hands · règles poker texas hold em combinaisons · regles poker texas hold

**apprendre le poker** → apprendre le poker en ligne · … facilement.com · … en ligne gratuitement · … en 5 minutes · … gratuitement · … winamax · … pdf · … application · … texas hold em · … rapidement · **… pour les nuls** · … livre · … aux enfants · … jeu · … en jouant

**poker c est quoi / poker \* c est quoi** → poker c'est quoi · poker c est quoi tnt · poker c est quoi une couleur · strip poker · poker face · bounty poker · poker run · **limp poker c est quoi** · poker expresso · ultimate poker · flush poker · gto poker c'est quoi · planning poker · mtt poker · poker menteur

**qu est ce que \* poker** → (pokerayou · poker face · pokerogue · pokerus — 비포커) · qu est ce que le poker menteur · tnt poker · strip poker · **qu est ce que limper au poker** · ultimate poker · **qu est ce que ante au poker** · **qu est ce que utg au poker** · cev poker · street poker · itm au poker

**comment \* poker** → comment poker (facebook · quelqu'un) · poker comment jouer · poker comment gagner · **poker comment distribuer les cartes** · **poker comment ca marche** · **poker comment miser** · poker comment jouer contre un joueur agressif · (pokerayou · pokerogue ×4 — 비포커)

**qui commence au poker** → qui commence a parler au poker · qui commence a jouer au poker · qui commence a miser au poker · qui commence le tour au poker · comment savoir qui commence au poker

**qui parle en premier au poker** → qui doit parler en premier au poker · qui parle en 1er au poker

**flop turn river** → flop turn river poker · … etymology · **… en francais** · … hole · **… order** · … meaning · … nyt · … significado · **… origin** · … connections · … poker terms · … bust · flop river turn sud · … texas holdem · … meaning poker

**qu est ce que le flop au poker** → qu'est ce qu'un flop au poker · flop def poker · flop poker signification · flop poker definition

**flop poker** → flop poker definition · … en francais · … signification · (room podgorica · là gì · club) · … terms · … river · poker odds flop · flop poker holdem · … significado · fold poker · fold poker traduction · poker flop turn river · fold poker meaning

**turn poker** → turn poker definition · … apk · … en francais · … term · switch poker · poker turn river · (switch poker club/games/night) · poker turn based · **poker turn order** · poker turn river flop · poker turn names · poker turn rules · poker turn strategy

**river poker** → river poker meaning · … term · … rules · … hand · … run · … table · … flop · (club · سایت · league · bangalore ×2 · portland ×3 — 장소)

**fold poker** → fold poker traduction · … definition · … en francais · … in french · … significado · … table · … gif · … meme · … term · … que es · … hand · … cards · … significato · … bedeutung · flip poker

**se coucher au poker** → se coucher au poker en anglais · **quand se coucher au poker** · **que signifie se coucher au poker** · **peut on se coucher au premier tour poker** · **peut on se coucher sans miser au poker**

**checker au poker** → quand checker au poker · checker poker definition · **quand peut on checker au poker** · chequer poker

**relance poker** → relance poker minimum · relance poker règle · poker relance bloquée · relancer poker en anglais · poker relance preflop · poker relance americaine · relance au poker texas hold em · tableau relance poker · regles relance poker texas hold em · **relance minimale poker** · fausse relance poker · range relance poker · montant relance poker · relance internationale poker · relance bloquée poker

**suivre poker** → suivre au poker en anglais · suivre poker definition · suivi poker

**miser au poker** → (mots fléchés · 5 lettres · 4 lettres — 십자말풀이) · mise au poker holdem · mise au poker en anglais · **comment miser au poker** · tout miser au poker · quand miser au poker · combien miser au poker · bien miser au poker

**parole poker** → (Poker Face 가사 ×9 · pokerap) · **ordre parole poker** · **check parole poker**

**blinde poker** → blinde poker définition · blinde poker en anglais · blind poker timer · … app · … dealer · poker blinde explication · free poker blind · blind poker site · grosse blinde poker · **ordre blinde poker** · blind meaning poker · blind poker player · blind poker rules · blind poker calculator · blind poker online

**petite blinde grosse blinde** → petite blinde grosse blinde poker · regle petite blinde grosse blinde · **ordre petite blinde grosse blinde** · dealer petite blinde grosse blinde

**c est quoi la blinde au poker** → c est quoi la blind au poker · la blinde poker · poker blinde explication · poker blinde definition · blinde poker définition

**ante poker** → ante poker definition · … traduction · … texas holdem · … signification · **… c'est quoi** · … term · … pronunciation · … stake · … buy in · … tournament · … payment · … english · … pot · … bet · … bedeutung

**ante au poker** → ante au poker c est quoi · ante poker def · … traduction · … texas holdem · … signification · **qui paye l ante au poker** · ante poker meaning · (이하 «ante poker» 영어 변형 반복)

**all in poker** → **all in poker regle** · all in poker texas holdem · (triangle · club bucuresti · movie · club · league · lotto) · … significado · … significato · … gif · … chips · all in poker rules · (olg) · all in poker meaning

**faire tapis poker** → faire tapis poker en anglais · faire tapis au poker définition · faire tapis au poker avec une paire de · … avec une paire de deux · **quand faire tapis au poker**

**tapis au poker** → tapis au poker en anglais · **tapis au poker règle** · tapis au poker all in · (tapis minimum … 5 lettres / mots fléchés) · faire tapis au poker · mettre tapis au poker · faire tapis au poker définition · … avec une paire de · **expression tapis au poker** · (tapis poker 200x100 · tapis poker winamax — 매트)

**side pot poker** → side pot poker rules · … explained · … meaning · (night at the inventory ×2 · là gì) · … chips · dry side pot poker · side pot calculator poker · main pot side pot poker · main vs side pot poker · who wins side pot poker · side pot rule in poker · all in side pot poker · poker side pot regeln
→ 🔴 **전부 영어 표현.** 프랑스어 «pot annexe»(pokerlistings) · «pot secondaire»(tables-poker) · «pot latéral»(pokerlistings 도구 H1)은 볼륨 `-` → 본문 «side pot (pot annexe)».

**showdown poker** → (club prague · pokerogue · palace · zürich · room · tour) · showdown poker traduction · showdown poker chips · showdown poker rules · duel poker · duel poker live · game poker ×3

**abattage poker** → **regle abattage poker** · (abattage pokemon ×2)

**qui montre ses cartes en premier** → **qui montre ses cartes en premier au poker** · qui montre ses cartes au poker · **quand montrer ses cartes au poker** · (carte qui se transforme en montre)

---

## 3. SERP 상위 10 + PAA (2250/fr · depth 10 · desktop · 2026-10-07)

유형: 운영사(룸 학교) · 제휴 · 위키 · 사전 · 포럼(reddit `?tl=fr` = 기계번역) · 영상 · 앱 · 쇼핑 · PDF · 외국어. SERP 피처 20건 전수: **FS 0** · **AIO 1**(relance poker) · 영상팩 4(règles du poker · comment jouer · flop turn river · combien de cartes) · KG 2(ante · blinde — 둘 다 «Blind»).

**3-1. «règles du poker»(18,100)** — 1 laliguedepoker «Règlement officiel du poker de tournoi ...»(협회) · 2 fr.pokerlistings «Règle du poker classique»(제휴 · 5장 드로) · 3 youtube «THE RULES OF POKER - WHO BEATS WHAT?»(EN) · 4 fr.vikidia «Poker - Vikidia…» · 5 winamax «École de poker : Pokerschool - Règles et lexique» · 6 perso.esiee.fr «Jeu de Poker»(PDF) · 7 clubpoker «LA DISTRIBUTION DES CARTES AU POKER - Règles du poker» · 8 pokerstars.com «Comment jouer au Texas Hold'em» · 9 partypoker.fr «Le poker avec des dés…»
- **PAA**: Combien de cartes sont utilisées sur la table de poker ? · Quelle est la probabilité de gagner au poker ? · Comment distribuer les jetons au poker ? · Qui doit parler en premier au poker ?
- 영상: Les règles de Poker expliquées par Benny | PokerStars Learn · LEARN POKER: Rules, Hand Rankings… (Kill Tilt) · Comment jouer au poker par Benny
- 관련: Règle poker débutant · Règles poker classique 5 cartes · Règle poker débutant PDF · Règles du poker avec jetons · Poker combinaison · Règle poker à 2 joueurs · Comment jouer au poker en famille · Règle du poker classique PDF

**3-2. «comment jouer au poker»(1,900)** — 1 fr.wikihow «Comment jouer au poker (avec images)» · 2 pokerstars.fr «Comment Jouer au Poker pour les Débutants»(KR 404) · 3 ludosierre.ch(PDF) · 4 joa.fr «Les règles du Poker Texas Hold'em - Casino | JOA»(403) · 5 partypoker.fr «Comment jouer au poker: découvrir les règles du poker» · 6 poker.pmu.fr «Les règles du poker»(JS) · 7 fr.pokerlistings «Règle poker débutant PDF» · 8 youtube(EN)
- **PAA**: Comment se joue le jeu de poker ? · Comment bien débuter au poker ? · Comment jouer au poker simple ? · Quels sont les règles du poker ?
- 영상: Comment jouer au poker (EPJT) · Tutoriel Poker… (Skyyart) · Benny | PokerStars Learn

**3-3. «comment jouer au poker débutant»(140)** — kill-tilt 포럼 · partypoker.com «Comment jouer dans les tournois de poker» · reddit ×5 · combinaison-poker.com «Comment bien débuter au poker» · quizz.biz · instagram · tel-gagnant.com(실전) → **포럼·SNS 7/10 = 해설 공백 최대**
- **PAA**: Comment se joue le poker ? · Comment bien débuter au poker ? · Comment jouer au poker simple ? · Comment démarrer une partie de poker ?

**3-4. «regles du poker texas holdem»** — 1 bwin.com(JS) · 2 le-poker-holdem.com «Les règles du jeu pour le poker Texas Hold'em» · 3 yetipoker · 4 jeuxpayants · 5 votrecasino · 6 guide-poker.info · 7·8 youtube(전략) · 9 jeux-hasard · 10 snowmakingmiami(스팸) → **낡은 제휴 = 약한 SERP**
- **PAA**: Quelles sont les règles du poker ? · Comment jouer au poker débutant ? · Quelles sont les bases du poker ? · **Quel est l'ordre de parole au poker Texas Hold'em ?**

**3-5. «qui commence au poker»(40)** — 1 winamax «la river» · 2 swisscasinos.ch «Règles de jeu» · 3 poker-vibe «Comment jouer au Texas Hold'em» · 4 alohaexpresstn(스팸) · 5 pokerlistings.cm «Règles de base du poker pour les nouveaux joueurs» · 6 clubpoker 포럼 · 7 gaming.net «Comment jouer au poker pour les débutants (2026)» · 8 reddit · 9 fr.johnnybet · 10 trictrac 포럼 → **직답 페이지 0**
- **PAA**: Qui commence à parler au poker ? · Qui joue en premier au poker ? · Quel est l'ordre des joueurs au poker ? · Quel est l'ordre du poker ?

**3-6. «flop turn river»(210)** — 1 fr.pokerlistings «Flop turn river : Comment créer une stratégie de poker» · 2 fr.wikipedia «Cartes communes au poker» · 3 dummies(EN) · 4 en.wikipedia · 5 partypoker.com(EN) · 6 amazon.fr(책) · 7 betkings(EN 어원) · 8 quora(EN) · 9 wikimedia 파일
- **PAA(영어 그대로)**: What is the turn river and flop? · Why is it called flop turn river? · What are the four actions in poker? · Why is it called flop?
- 영상: 7 conseils POKER (Flop, Turn, River) pour les DÉBUTANTS (LUCKYSPIN - POKER FR) · Kill Tilt · BlackRain79
- 관련: Flop turn river etymology · Flop poker · River poker · Turn poker · Combien de carte au poker par personne · Règle poker à 3 joueurs

**3-7. «river poker»(210)** — 1 fr.wikipedia «Cartes communes» · 2 partypoker.fr «River Poker | Comment Jouer le Turn & River» · 3 pokerstars.fr «La River (Rivière) au Poker» · 4 eastriverpoker(쇼핑) · 5 fr.pokerlistings(3-6) · 6 clubpoker «RIVER définition poker» · 7 winamax «la river» · 8 youtube · 9 pokerpro «River — Définition Poker» · 10 dictionnaires.com «Rivière (river) : définition et règles au poker»
- **PAA**: C'est quoi la river au poker ? · Qu'est-ce que le flop au poker ? · Quel est le plus gros coup au poker ? · Que signifie le terme "shove" au poker ?
- → 제목 표기 다수가 **영어 앞 + 프랑스어 괄호**(«La River (Rivière)»).

**3-8. «fold poker»(140 · 경량)** — youtube shorts · pokercode «Fast Fold Poker Meaning» · poker-academie 포럼 · reddit «snap fold» · akroplay «"Fold" au poker : définition et explication» · clubpoker «Push or fold - L'outil online» · liberamos ×2(스팸) — 결과 8개
- **PAA**: Que signifie "raise" au poker ? · Que signifie "cut off" au poker ?

**3-9. «se coucher au poker»(20) — 0-3 ③** — 1 pokerstars.fr «À quel moment se coucher au poker» · 2 fr.pokerlistings «Quand se coucher tes cartes au poker» · 3 reddit ELI5 · 4 youtube «POKER QUAND SE COUCHER» · 5 dictionnaires.com «Se coucher : définition et règles au poker» · 6 partypoker.fr «Le fold: quand se coucher au poker?» · 7 fr.pokernews «Se coucher avec une bonne main» · 8 reddit · 9 kelbet «Se coucher au poker : quand faut-il vraiment ?» · 10 pokerpro «Quand se coucher au poker»
- **PAA**: Que signifie "se coucher" au poker ? · Comment s'appellent les différentes positions au poker ? · Que signifie être en tilt au poker ? · Pourquoi dit-on tapis au poker ?
- 관련: Call poker · Check poker · Raise Poker · Que veut dire Check au poker

**3-10. «relance poker»(90) — AIO 있음** — 축어(사실로 쓰지 않음): «Une relance (ou *raise*) au poker consiste à miser davantage que la mise ou la relance précédente. … Règles de la relance minimum — Avant le flop : La relance doit être au moins égale au double de la grosse blinde ou de la mise précédente.»(인용 clubpoker «principe-encheres-poker» · circus-poker · reddit) → «double de la mise précédente»는 단순화(정확: 직전 증가분 이상) = 우리 min-raise 절의 자리.
- 1 pokerstars.fr «Guide du Cash Game : Relancer ou Payer» · 2 winamax «A-A: relancer ou s'embusquer» · 3 reddit · 4 pokernews(squeeze) · 5 **legifrance** «Règles applicables au Omaha poker 4 high»(🪶 합법성 축 — 조준 안 함) · 6 pokerstrategy «Minraise - Glossaire» · 7 PDF · 8 reddit · 9 clubpoker «relancer un all in»
- **PAA**: Quelles sont les règles du poker ? · Comment bien miser au poker ?

**3-11. «check poker»(110)** — pokernews · 666casino(EN 제휴 check-raise) · reddit · pokerlistings · 포럼 6 → **정의 페이지 0/10**
- **PAA**: C'est quoi un check au poker ? · Qu'est-ce qu'un limp au poker ? · Que signifie "cut off" au poker ? · Que signifie le terme "shove" au poker ?

**3-12. «valeur jetons poker»(1,300)** — commentcamarche 포럼 · amazon (결과 2)
- **PAA**: Quel est le prix d'un jeton de poker ? · Combien de jetons faut-il prévoir par joueur au poker ? · Quels sont les meilleurs jetons de poker ?

**3-13. «ante poker»(210)** — 1 partypoker.fr «Le concept d'ante au poker et comment le maîtriser» · 2 pokerstars.fr «Ante au poker : Règles, coûts et stratégie pour bien jouer» · 3 clubpoker «ANTE définition poker» · 4 winamax «les blindes et ante» · 5 clubpierrecharron «Lexique du Poker» · 6 reddit «Comment fonctionne l'ante du BB ?» · 7 artemest(가구) · 8 fr.pokerlistings «Ante poker : Définition…» · 9 fr.pokernews «Ante | Dictionnaire Poker» · 10 wam-poker «Les ante»
- **PAA**: Qu'est-ce que l'ante au poker ? · C'est quoi l'ante ? · Qu'est-ce qu'une blinde au poker ? · Que signifie "itm" au poker ?
- **KG**: «Blind — Au poker, on appelle blind la ou les mises obligatoires faites avant toute distribution de cartes. C'est donc une « mise à l'aveugle », d'où son nom.» · 관련: **Tableau blind poker** · Termes poker en français · Lexique poker PDF

**3-14. «blinde poker»(90) · «petite blinde»(390)** — blinde: reddit «Comment calcule-t-on la petite blind et la grosse blind…» · pokerpro «Limp-In» · 포럼 ×3 · youtube · poker-academie(BB 디펜스) · 블라인드 타이머 앱 · reverso · reddit → **정의 글 0**. petite blinde: poker-academie «SB vs BB» · facebook · instagram 블라인드 박스 · Balatro
- **PAA**(blinde): Qu'est-ce qu'une blinde au poker ? · Quelle est la valeur d'un blind au poker ? · C'est quoi une blind ? · **Est-ce que la grosse blinde peut relancer ?**
- **PAA**(petite blinde): Quand augmenter les blinds ? · **Est-ce que la grosse blinde peut relancer ?** · Quelle est la valeur d'un blind au poker ? · Qu'est-ce que le poker ?

**3-15. «all in poker»(590)** — 1 reddit «Règles du all-in tête-à-tête : r/poker» · 2 upswingpoker(EN) · 3 bwincasino.be «Cashout All-in» · 4 poker-academie 포럼 · 5 pokerarena.cz · 6 copag.com.br · 7 clubpoker 포럼 · 8 pokerstrategy FR «suivre et isoler les all-ins» · 9 pokerstrategy DE · 10 onkpoker.nl
- **PAA**: Quel est l'ordre du poker ? · **Que signifie "faire un all-in" ?** · Quelle est la plus longue partie de poker du monde ? · Comment s'appelle la mise au poker ?
- 관련(영어): All in poker rules · 3 way all-in Poker · **If someone goes all in in poker do you have to go all in**

**3-16. «tapis au poker»(90)** — 1 fr.wikipedia «Tapis (poker)» · 2 tables-poker.fr «Tapis au Poker : Définition, Règles et Stratégies du All-In» · 3 pokerstars.fr «Six situations dans lesquelles faire tapis»(KR 404) · 4·5·7·8 매트 쇼핑 · 6 reddit ELI5 · 9 fr.pokerlistings «Calcul des pots annexes au poker | Règles des All-in / Tapis» · 10 clubpoker «[REGLES] TAPIS : quand et comment?»
- **PAA**: **Pourquoi dit-on tapis au poker ?** · **Qu'est-ce que le tapis effectif au poker ?** · C'est quoi un playmat ? · Quelle est la combinaison la plus forte au poker ?
- 관련: Poker tapis règle · **Que veut dire tapis au poker** · **Quand faire tapis au poker** · All-in poker règle

**3-17. «showdown poker»(110 · 경량)** — 1 fr.wikipedia «Abattage (poker)» · 2 clubpoker «Showdown - Lexique poker» · 3 showdown.cz · 4 pokerstars.fr «Showdown au poker : qu'est-ce que l'abattage et comment ...» · 5 winamax «le showdown» · 6 en.wikipedia · 7 clubpoker «L'ABATTAGE (SHOWDOWN) AU POKER - Règles du poker» · 8 fr.pokerlistings «La Showdown Value…» · 9·10 앱
- **PAA**: **Quelles sont les règles du showdown ?** · Est-ce que Patrick Bruel joue toujours au poker ? · Que signifie "shove" au poker ? · Que signifie "cut off" au poker ?

**3-18. «qui montre ses cartes en premier au poker»(`-`)** — 1 pokerstars.fr 도움말 «Explication des termes et des règles du poker» · 2 clubpoker 포럼 · 3 poker-academie 포럼 «Quand un joueur peut obliger l'autre … à montrer … à l'abattage» · 4 jackpots.ch «Règles du poker Texas Hold'em» · 5 wam 포럼 · 6 pokerpro «Quand montrer ses cartes au poker ?»(본문 = 코칭 영상 소개, 답 없음) · 7 wam · 8 pokerpro «Distribution des cartes…» · 9 dailymotion · 10 pokerstars.fr 글로서리 → **포럼 4 · 직답 0**
- **PAA**(족보로 샌다): Quel est l'ordre des cartes au poker ? · Comment s'appelle le distributeur de cartes au casino ? · Comment s'appelle le poker à 5 cartes ? · Qui gagne, la couleur ou la suite ?

**3-19. «combien de cartes au poker»(260)** — pokerlistings «Valeur carte poker…» · pierrecharron «Poker 3 Cartes» · youtube combinaisons · unibet 족보 · vikidia · evolugame · peppermillcasino.be · fr.wiki «Mains au poker» · circus-poker
- **PAA**: Combien de cartes sont utilisées dans un jeu de poker standard ? · Qu'est-ce que "taper tapis" au poker ? · Comment s'appelle le poker à 5 cartes ?

---

## 4. 상위 글 원문 정독 (헤딩 = HTML 기계 추출 축어 · 🔴 = 직접 검산한 오류)

### 4-1. 규칙·입문 (beginners)
- **laliguedepoker /reglement/**(1위 · ~15,750단어 · 표 0) — H2 REGLEMENT OFFICIEL DU POKER DE TOURNOI EN ASSOCIATION / H3 No Limit Hold'Em – Gratuit – Freezout – Sans Croupier Version 2025-02 / H4 ARTICLE 1 : CONCEPTS GENERAUX · 3 : PRATIQUES GENERALES · 4 : AVANT LE JEU · 5 : LA REGULARITE DE LA DONNE ET LES ANNONCES PAR LE DONNEUR · 6 : ERREUR LORS DE LA DONNE INITIALE · 7 : ERREUR DE DONNE A PARTIR DU FLOP · 8 : LES CARTES MORTES · 9 : MISES ET RELANCES · 10 : FIN D'UN COUP. 초보 설명 0.
  - ★ **용어 1차 출처(축어)**: «…mise/ouverture (bet), relance (raise), payé/suivi (call), passe (fold), parole (check), tapis (all in). L'utilisation de termes qui n'entrent pas dans cette nomenclature…» · «Il est convenu que taper sur la table signifie « parole » ou « check ».»
- **fr.pokerlistings /regles-du-poker/classique**(2위 · ~1,720단어 · 표 1 · FAQPage ✅) — H2 Qu'est-ce que le poker classique ? · Comment jouer au poker classique · Variantes du poker classique · Règles détaillées du poker classique · Différences entre le poker classique et le Texas Hold'em · Conseils pour débuter au poker classique · FAQ(Quelle variante du poker classique est la plus populaire ? · Pourquoi le Texas Hold'em a-t-il remplacé le poker classique ? · Le poker fermé est-il considéré comme du poker classique ?…). 제휴 박스(CoinPoker·888poker). → «règles du poker» 검색자 일부가 **5장 드로**를 찾는다.
- **winamax «la base»**(5위 · ~655단어 · 영상) — H1 Les règles de base / H2 52 cartes, un tapis et des jetons.
- **pokerstars.com/fr …/texas-holdem/**(8위 · ~3,400단어) — H2 Qu'est-ce que le poker Texas Hold'em ? · Les règles du Texas Hold'em(H3 Les blinds · Options de mise des joueurs · Pré-flop · Le flop · **La turn** · **La rivière** · L'abattage) · Combien y a-t-il de combinaisons de mains au Texas Hold'em ? · Comment les mains sont-elles classées… ? · Limit, No Limit, Pot Limit et Mixed Texas Hold'em. 표기 «blind»·«**passer**(=fold), checker, miser, suivre ou relancer». 축어: «L'action se déroule dans le sens des aiguilles d'une montre, en commençant par le joueur « under the gun » (celui qui se trouve immédiatement à la gauche de la grosse blind).»
- **fr.wikihow /jouer-au-poker**(«comment jouer» 1위 · ~5,760단어 · 이미지 139) — H2 Étapes(H3 Jouer au Texas Hold'em · Miser et développer une stratégie · Avoir une approche professionnelle · Apprendre des variantes populaires) · Conseils · Avertissements. 표기 «le tournant / la rivière» · «Une suite ou une quinte».
  - 🔴 **§13**: «Si vous avez les quatre as, cela signifie que personne ne peut avoir de quinte flush royale, car il n'y aura aucun as disponible.» — 홀덤에선 거짓. 반례 검산: 나 A♠A♥ / 보드 A♦ A♣ K♣ Q♣ J♣ → 나 베스트5 = A♠A♥A♦A♣K♣(포카드) · 상대 T♣x → A♣K♣Q♣J♣T♣(로열) → **상대 승**. 보드 A♣는 공유 카드.
- **partypoker.fr /how-to-play/index**(5위 · Playwright ~1,830단어) — H1 Comment jouer au poker: découvrir les règles du poker / H2 Les règles de base du poker(H3 1. Choisir où jouer au poker · 2. Comprendre l'enjeu de la position à la table · 3. Connaître les mains au poker · 4. Maîtriser la distribution des cartes et les blindes · 5. Comprendre les tours de mise dans la partie) + 허브 링크 H2. 1단계 = 실전 유도.
- **pokerlistings.cm /regles-du-poker**(~2,330단어) — H2 Guide du débutant au poker – Bases utiles(H3 Le sens du poker · Règles de base du poker · Les mises au poker · Voir et relancer · La conduite pendant la partie de poker · Positions au poker · Classement des cartes de poker) · Règles de poker pour les jeux courants. 표기 «préflop, flop, tournant et rivière».
- **gaming.net /fr/how-to-play-poker/**(~2,260단어) — H2 Les tours de poker, étape par étape(H3 PreFlop · Le Flop · Le Turn et le River · Le Showdown) · Les mains de poker(H3 … **Quatre de la même valeur** · … **Trois de la même valeur** …). 🔴 기계번역: «soit **appeler**, soit se coucher, soit **augmenter**» · «Appeler, c'est rencontrer le pari du tour» — 프랑스 실용어(suivre·relancer·carré·brelan) 0.
- **le-poker-holdem.com**(«…texas holdem» 2위 · ~930단어) — H1 Le Texas Hold'em / H2 Le but du jeu · Les phases de jeu · Les blindes + «TOP 3 POKER ROOMS … JOUER MAINTENANT».
- ✗ pokerstars.fr débutants(KR → `pokerstars-01.com` 301 → 404, Playwright 동일) · joa.fr(Cloudflare 403 ×2) · pmu·bwin(JS 셸).

### 4-2. 진행 순서 (game-order)
- **fr.pokerlistings «Flop turn river…»**(~1,750단어 · 표 2) — H2 Le flop(H3 Stratégies sur le flop) · Le tournant(H3 Stratégies et réflexion sur le tournant) · La rivière(H3 … sur la river · Bluff et value bet sur une partie · Flop turn river : stratégie optimale de jeu) · Conclusion. 축어 «Une carte est brûlée par le dealer du tour avant de dévoiler le flop.» 전략 위주 · 순서 규칙 1문장 · 경험담 0.
- **fr.wikipedia «Cartes communes au poker»**(~1,050단어 · 표 3) — H2 Variante du poker comprenant ce système · Déroulement en trois phases(H3 Le flop · Le tournant · La rivière) · Texas Hold'em · Hold'em Omaha. 어원 설명 없음.
- **winamax «la river»**(«qui commence» 1위 · ~517단어) — H1 La River만. 순서 직답 없음.
- **poker-vibe.com**(~850단어) — H2 Comment jouer au Texas Hold'em · 인코딩 깨짐 · «On l'appelle le "Tournant"».
- **dictionnaires.com «Rivière (river)»**(~930단어 · FAQPage ✅) — 템플릿 사전(H2 Définition · Les quatre repères essentiels · Exemple concret · À ne pas confondre · Questions fréquentes…).

### 4-3. 액션·fold (betting-actions · when-to-fold)
- **akroplay «"Fold" au poker»**(~380단어) — H1만. 축어 «Quand on dit d'un joueur de poker qu'il fold, cela signifie qu'il se couche et abandonne le coup…». 카지노 제휴 내비가 대부분.
- **partypoker.fr «Le fold: quand se coucher au poker?»**(Playwright) — H2 Savoir abandonner une bonne main · Faire confiance à votre instinct · Déceler les signes de danger · Savoir calculer votre coup(H3 Je demande la cote) · Le pouvoir du raisonnement — **전략형**.
- **fr.pokerlistings «L'art de savoir quand se coucher (fold)…»**(~3,820단어) — H2 L'ego au Poker · Bataille pour le pot : l'erreur de se sentir marié(e) avec sa main · Savoir jeter ses cartes quand il le faut(H3 La question à se poser : Que pouvez-vous battre ?) · Lorsque vous êtes battu, vous êtes battu ! — **전략형**. 관용 «Le joueur **premier de parole** relance…».
- **kelbet «Se coucher au poker : quand faut-il vraiment ?»**(~540단어) — H2 Coucher sa main pré-flop · Les principaux cas après le flop · 2 cas d'école — **전략형**.
- **dictionnaires.com «Se coucher»**(~950단어 · FAQPage ✅) — 템플릿 사전 · 유일한 정의형.
- ✗ pokerstars.fr «À quel moment se coucher» · «Relancer ou Payer»(지역 차단).

### 4-4. 블라인드·앤티 (blind-meaning)
- **winamax «les blindes et ante»**(ante 4위 · ~540단어 · H2 없음) — 축어: «…les deux joueurs assis directement à gauche du donneur placent des mises forcées appelées les blinds (de l'anglais blind qui signifie aveugle).» · «…dans les tournois, les blinds augmentent régulièrement. On appelle cette augmentation « la structure des blinds ».» · «Les "ante" … **Ils sont placés par TOUS les joueurs de la table.** Cependant, les ante sont essentiellement pratiqués en tournoi…»
  - 🟡 낡음: **big blind ante**(현행 대형 토너먼트 표준) 언급 없음 — reddit «Comment fonctionne l'ante du BB ?»가 6위 = 프랑스어 정답 페이지 부재.
- **pokerlistings 글로서리 «Ante»**(~67단어) · **pokernews 사전 «Ante»**(~44단어) — 한 문단.
- ✗ partypoker 블로그(Cloudflare · Playwright «Vérification de sécurité» 정지) · pokerstars.fr ante(KR 404).

### 4-5. 올인 (all-in-rules)
- **fr.wikipedia «Tapis (poker)»**(1위 · ~450단어 스텁) — H2 Règles sur le tapis · « Faire tapis ». 축어 «…chaque joueur est en droit de demander, à un autre, à tout moment, la valeur totale des jetons de son tapis.»
  - 🔴 **규칙 오류**: «soit payer le tapis (miser le total de vos jetons) … même si le joueur adverse a un nombre de jetons supérieur …, **il doit miser la totalité de ses jetons**» — 틀림. 큰 스택은 **올인 금액만** 콜한다(1,000 올인 vs 5,000 → 콜 1,000, 4,000 유지).
- **tables-poker.fr «Tout savoir sur le tapis au poker…»**(2위 · ~1,120단어 · 쇼핑몰 블로그) — H2 **Pourquoi dit-on "tapis" au poker ?**(H3 Une origine liée aux nappes de jeu · L'équivalent international : le "All-in") · Comment faire un tapis au poker ?(H3 1. La procédure en cercle de jeu ou casino · 2. Le fonctionnement en ligne · 3. La règle des "Table Stakes") · Quand est-ce qu'on est à tapis au poker ?(H3 Le cas du "Side Pot" (Pot extérieur) · L'impossibilité de se coucher) · Stratégie : Quand miser tout son tapis ? · FAQ : Tout comprendre sur le tapis au poker(Peut-on perdre plus que son tapis au poker ? · Que se passe-t-il si deux joueurs font tapis avec le même montant ? · Qu'est-ce qu'un "tapis payé" ? · Pourquoi les joueurs attendent avant de retourner leurs cartes après un tapis ?)
  - 강점: PAA를 H2로 정면 응답(→ 2위). 약점: side pot 숫자 계산 0 · 재오픈 규칙 0 · 경험 0 · «10 à 15 blindes … Push or Fold» 근거 없는 단언.
- **fr.pokerlistings «Calculatrice du pot latéral»**(~1,480단어 · 도구) — H2 Règles pour les situations de all-in au poker · Plus de joueurs = calcul d'un ou plusieurs pot(s) annexe(s) · Situations particulières de tapis au poker. 2인 예(축어 요지): 팟 200 · 나 50 남음 · 상대 200 베팅 → 상대에게 150 반환 · 승자 300. 검산 200 + 50 + 50 = **300 ✅**.
- **upswingpoker «All-In Poker Rules»**(EN · «all in poker» 2위) — H2 All-In Poker: The Rules · Side Pots · Poker All-In: When To Shove — 영어가 FR 2위 = 프랑스어 대체재 부재.

### 4-6. 쇼다운 (showdown-rules)
- **fr.wikipedia «Abattage (poker)»**(1위 · ~650단어) — H2 Ordre et obligation de montrer ses mains. 축어: «…le joueur ayant été suivi doit montrer sa main. S'il ne le fait pas, il perd la partie.» · «Si aucun joueur n'a relancé lors du dernier tour d'enchères, alors le dernier joueur ayant relancé lors des tours précédent doit montrer ses cartes en premier. Cette règle n'est pas toujours appliquée…, il est courant que la personne la plus près du bouton montre ses cartes en premier.» · 위키 자체 태그 «Article manquant de références depuis mars 2026».
  - 🔴 **하우스룰을 규칙으로 서술**: 우리 EN 마스터(TDA 기준) «If nobody bet on the river (everyone checked) … the showdown starts from the first active player left of the dealer button» — 이전 스트리트 레이저가 아니다. 1위 페이지보다 정확할 수 있는 지점.
- **winamax «le showdown»**(~440단어) — H2 Qui a gagné ? · 순서 규칙 없음 · «S'il y a égalité entre deux joueurs, le pot est partagé en deux.»
- **pokerpro «Quand montrer ses cartes au poker ?»**(~470단어) — 제목만 질문, 본문은 코칭 영상 소개.
- ✗ pokerstars.fr showdown(curl = PNG · Playwright = 이미지 URL — 봇 차단) · clubpoker(403 ×2).

---

## 5. 장단점 (상위 글 공통)

| 구분 | 내용 | 우리 처방 |
|---|---|---|
| ✅ 강점 | 운영사 학교 브랜드(Winamax·PokerStars·partypoker·PMU) · 영상팩(PokerStars «Benny») · PAA 정면 H2(tables-poker → 2위) · 프랑스 관용 용어(parole·passe·tapis·cave·premier de parole) | 중립·규정 원문 인용·경험담·검산 예시로 차별화 · PAA 축어 H2 · 협회 용어표 |
| ❌ 짧다 | 학교 440~655단어 · 사전 44~380 · 위키 스텁 450~650 | 완결형(직답 + 예시 + 표 + FAQ) |
| ❌ 오류·낡음 | wikihow 로열/포카드 · fr.wiki Tapis 콜 금액 · fr.wiki Abattage 순서 · Winamax ante(BB ante 누락) · AIO min-raise 단순화 · gaming.net 기계번역 | §13 검산 예시 + TDA·협회 원문 인용 |
| ❌ 질문에 답 안 하는 1위 | qui commence → «la river» · qui montre → 포럼 · check 정의 0/10 · blinde → reddit | 40~75단어 직답 블록(라벨 = 0-3 고정문) |
| ❌ 외국어·기계번역 점유 | all in 6/10 · flop turn river 5/10 · reddit `?tl=fr` | 원어민 문장 · tu 화법 |
| ❌ 경험담 0 · 실전 유도 | 백과형 · «Choisir où jouer» · TOP 3 ROOMS | EN 1인칭 라이브 경험 유지 · 룸 추천 없음 |

---

## 6. 우리 글 대조 (현 fr seoTitle · 갭 — 상세 처방은 §7)

| 글 | 현 fr seoTitle(masterUpdated → EN updated) | 이미 이기는 점 | 빠진 것(SERP 근거) |
|---|---|---|---|
| rules-for-beginners | «Règles du Texas Hold'em pour débutants — jouer pas à pas + antisèche»(07-12 → 10-04) | «Qui commence» · «jetons» · «Comment distribuer» · «Combien de joueurs» H2가 PAA 3/4와 이미 겹침 · 프린트 antisèche(= PDF 의도) | «règles du poker» 축어 없음 · EN FAQ «for dummies» 2문항을 «version la plus simple»로 옮기며 «simple(170)/pour les nuls(140)» 축어 상실 · PAA «Comment se joue…» · «bien débuter» · «Combien de cartes…» · poker classique 혼동 · «cave» 0회 |
| game-order | «Ordre du jeu au Texas Hold'em — quand miser, à qui de parler ?»(07-02 → 10-01) | 한 핸드 전체 추적(K♦9♠3♥ · 2♣ · A♥) — SERP에 0 | 🔴 EN 드리프트: FAQ 11 vs fr 7 — 누락 «Who goes first in poker?» · «Who bets first after the flop?» · «Who shows their cards first at showdown?» · «Why does the dealer burn a card…?» · EN H2 «Who Bets First…» 재정렬 · PAA «Qui commence à parler…» · «Quel est l'ordre de parole…» · «C'est quoi la river…» · «ordre de parole/premier de parole» 0회 |
| betting-actions | «Checker, suivre ou se coucher ? — Les actions au poker»(07-11 → 10-06) | «parole» 3회(협회 일치) · min-raise 절(AIO 단순화 교정 가능) · TDA 90.d · 라이브 실수 4 | **«passer = se coucher» 없음** · PAA «C'est quoi un check au poker ?»(정의 0/10) · «Que signifie "se coucher"…» · «Que signifie "raise"…» · «Comment bien miser…» · 자동완성 «peut on se coucher sans miser» · «relance minimale» |
| blind-meaning | «Miser avant de voir tes cartes ? — Petite et grosse blinde»(07-11 → 10-06) | 완결형(정의·누가·얼마·BB ante·heads-up·dead blind·FAQ 8) — 1페이지에 경쟁 0 | ante 단독 정의 H2 없음(현 «big blind ante (Et le straddle)») · PAA «**Est-ce que la grosse blinde peut relancer ?**»(2 SERP) · «Quelle est la valeur d'un blind…» · «Quand augmenter les blinds ?» · «blind» 표기 병기 |
| all-in-rules | «Tapis au poker : que peux-tu vraiment gagner ? — Side pots»(08-12 → 10-06) | 3·4인 side pot 계산 · 재오픈 규칙 · 쇼다운 순서 — 상위(스텁·쇼핑몰·EN)보다 압도 | «all-in»(590) 축어가 제목에 없음(«tapis»는 매트 오염) · PAA «Pourquoi dit-on tapis…» · «tapis effectif» · «faire un all-in» · «quand faire tapis» |
| showdown-rules | «Qui montre en premier ? Règles de l'abattage au poker»(07-12 → 10-06) | 질문형 H2 7 전부 SERP 빈자리(직답 0) · cards speak · slow roll · 체크다운 순서(fr.wiki보다 정확) · «muck» 13회 | PAA «Quelles sont les règles du showdown ?» · 자동완성 «quand montrer ses cartes» · «showdown»(110) vs «abattage»(10) — 제목 «abattage» 단독 |

- 도구: beginners 팟 오즈 절 → `/fr/calculator`(«règle du 2 et du 4» 소유 — `fr-calculator.md` §2-B) · 용어 → `/fr/glossary`(도구는 «Checker (parole)» · «Se coucher (fold)» · «Rivière (river)» · «Tapis (all-in)» 표기).

---

## 7. 처방 (레인 A 브리프 재료 — 최종 seoTitle·desc는 쓰지 않는다)

### 7-1. texas-holdem-rules-for-beginners — 우선 1
- **주력어(앞쪽)**: «règles du poker»(18,100) + «comment jouer au poker»(1,900) + «Texas Hold'em». 보조 «débutant»(880) · «simple»(170) · «pour les nuls»(140). 훅: «antisèche à imprimer» · «en 30 secondes».
- **H2**: ① EN «Basic Rules» → «**Quelles sont les règles du poker Texas Hold'em ?**»(PAA 2 SERP) ② EN «Beginner Flow Summary» → «**Comment se joue le poker, étape par étape ?**»(PAA «Comment se joue le jeu de poker ?» · vol 70) ③ EN «What Chips…» → «**Comment répartir les jetons au poker ?**»(PAA «Comment distribuer les jetons…» · «Combien de jetons faut-il prévoir par joueur…» · vol 320/90 — 개수·색 배분 표, SERP에 표 0) ④ «How Much Money» 유지 + «cave» ⑤ EN «How to Deal» → «**Comment distribuer les cartes au poker ?**»(vol 260) ⑥ 🆕 짧은 H2 또는 FAQ «**Texas Hold'em ou poker classique : quelle différence ?**»(자동완성 1위 · SERP 2위 — EN에 없는 추가, 3문장 + 표 1행) ⑦ EN «Strategy for Beginners» → «**Comment bien débuter au poker ?**»(PAA 2 SERP)
- **FAQ(PAA 축어)**: «Combien de cartes sont utilisées sur la table de poker ?»(52장 · 보드 5 + 각자 2 · 족보는 L-B 링크) · «Comment jouer au poker simple ?» / «…pour les nuls ?»(EN dummies 2문항 복원) · «Comment démarrer une partie de poker ?»(홈게임 — «en famille» 50) · «Comment jouer au poker à 2 joueurs ?»(→ blind-meaning heads-up 앵커) · 🔴 «Quelle est la probabilité de gagner au poker ?» → **L-C probability 앵커 위임**(1문장).
- **차별화**: wikihow 오류를 뒤집는 «보드 카드는 모두의 것» 7장 예시(§4-1 검산) · 칩 배분 표 · 협회 용어표(La Ligue de Poker 링크) · antisèche.
- **카니발**: 족보 «combinaison poker»(49,500)는 L-B 앵커 1회 · «règle du 2 et du 4»를 H2 제목에 쓰지 않고 계산기 링크 · 실전·룸 의도 금지.

### 7-2. holdem-game-order — 우선 2
- **주력어**: «qui parle en premier / qui commence au poker» · «ordre de parole» · «flop turn river»(210) · «river»(210). 훅: «c'est à qui ?»(현 desc 승계 가능).
- **H2**: ① EN «Who Bets First in Texas Hold'em?» → «**Qui parle en premier au poker ? (l'ordre de parole)**»(PAA «Qui commence à parler…» · 자동완성 «qui doit parler en premier» · «qui commence a miser» — 직답: 프리플랍 UTG, 플랍 이후 버튼 왼쪽 첫 생존자) ② EN «Whole Order at a Glance» → «**Quel est l'ordre du jeu au poker ?**»(PAA «Quel est l'ordre du poker ?» · «…des joueurs…» 2 SERP) ③ Stage 2·4 → «**Qu'est-ce que le flop au poker ?**» · «**C'est quoi la river au poker ?**»(PAA 축어) ④ 🆕 «**Pourquoi dit-on flop, turn et river ?**»(영어 PAA 2/4 · «etymology/origin/en francais») — 🔴 어원 1차 출처를 못 찾으면 프랑스어 이름(«tournant/rivière»)만 다루는 H3로 축소.
- **FAQ**: EN 누락 4문항 복원(«Qui parle en premier au poker ?» · «Qui mise en premier après le flop ?» · «Qui montre ses cartes en premier à l'abattage ?»→ showdown 앵커 · «Pourquoi le donneur brûle-t-il une carte, et combien ?») + «Qui joue en premier au poker ?»(PAA).
- **차별화**: 핸드 추적 유지 · «premier de parole» 표(프리플랍/포스트플랍 2열) · heads-up 예외(→ blind-meaning).
- **카니발**: «ordre main poker»(2,400 · 족보) — 제목에 «ordre»+«main» 결합 금지 · 액션 정의는 betting-actions 앵커.

### 7-3. holdem-showdown-rules — 우선 3
- **주력어**: «qui montre ses cartes en premier»(SERP 직답 0) · «showdown (abattage)» 병기(110 vs 10) · «règles du showdown».
- **H2**: 첫 H2 앞 개요 또는 H2 «**Quelles sont les règles du showdown ?**»(PAA 축어 · 5줄) · H2 1 «Qui doit montrer ses cartes en premier…» 유지(자동완성 «…en premier au poker» 축어로 미세 조정) · EN «Can You Muck…» → «Peux-tu jeter tes cartes (muck) sans les montrer ?» · «**Quand montrer ses cartes au poker ?**»(자동완성 — EN «win without showdown» H2와 합침).
- **FAQ**: «Quelles sont les règles du showdown ?» · «Quand montrer ses cartes au poker ?» + 기존 7.
- **차별화**: fr.wiki 1위 «체크다운 = 이전 레이저» vs TDA 현행(버튼 왼쪽부터) 비교 표 — 레인 A가 TDA 원문 조항 확인(`tda-rules-primary-source-path`) · «cards speak» 7장 예시(§13).
- **카니발**: all-in 쇼다운 세부는 all-in-rules와 상호 앵커.

### 7-4. holdem-all-in-rules — 우선 4
- **주력어**: «all-in»(590 · 앞쪽) + «faire tapis»(90) · «side pot». 🔴 «tapis» 단독·«tapis de poker» 금지.
- **H2**: EN «What Does "All-In" Mean» → «**Que veut dire faire tapis (all-in) au poker ?**»(PAA «Que signifie "faire un all-in" ?» · «Que veut dire tapis…» 20) + H3 «**Pourquoi dit-on tapis au poker ?**»(PAA 2 SERP · tables-poker 2위 근거) + 🆕 H3 «**Qu'est-ce que le tapis effectif ?**»(PAA — 두 스택 중 작은 쪽 · 숫자 예시) · side pot H2 유지(«pot annexe» 괄호).
- **FAQ**: «Qu'est-ce que le tapis effectif au poker ?» · «Quand faire tapis au poker ?»(1문장 + push-or-fold = `/fr/calculator` 몫 · 0-1) · «Si quelqu'un fait tapis, dois-je aussi faire tapis ?»(관련 검색 영어 질문의 fr 대응 — 답 = 올인 금액만 콜 · fr.wiki 오류 교정).
- **차별화**: fr.wiki 오류 반박 예시(1,000 vs 5,000) · 3·4인 side pot 산수 표 · 재오픈 결정표(SERP 0).
- **카니발**: «언제 올인» 전략은 short-stack·tournament(L-E)·계산기 앵커.

### 7-5. holdem-betting-actions — 우선 5 (0-3 ③ 반영)
- **주력어**: «check · suivre · relancer · se coucher» + «fold poker»(140 · 정의) · «check poker»(110) · «relance poker»(90). 훅: «parole» · «passe».
- **H2**: «**C'est quoi un check au poker ?**»(PAA 축어 — 현 «C'est quoi checker (le check)…» 미세 조정) · «**Que signifie se coucher (fold) au poker ? Peut-on se coucher à tout moment ?**»(PAA · 자동완성 «sans miser / au premier tour») · min-raise H2 유지 + «**relance minimale**» 축어(AIO 단순화 교정 예시) · 🆕 표 «**Les mots qu'on entend à table : parole, passe, tapis…**»(협회 명명 6개 · 출처 링크).
- **FAQ**: «Que signifie "raise" au poker ?»(PAA) · «Comment bien miser au poker ?»(PAA — 1문장 + strategy 앵커) · «Peut-on se coucher sans miser au poker ?».
- **차별화**: min-raise 산수 예시 · TDA 90.d · 협회 용어표(SERP에 없음) · `/fr/glossary`.
- **카니발**: «quand se coucher»(전략)는 when-to-fold 앵커 1회(§8-A) · all-in 세부 → all-in-rules · «check raise poker»(260)는 0-3 ⑤(L-G) — 정의 1문장만.

### 7-6. holdem-blind-meaning — 우선 6 (경쟁 최약 · 이미 강함)
- **주력어**: «petite blinde · grosse blinde» + «blind» 병기(210 > 90) · «ante»(210).
- **H2**: EN «What Is a Big Blind Ante? (Plus the Straddle)» → «**Qu'est-ce que l'ante au poker (et le big blind ante) ?**»(PAA «Qu'est-ce que l'ante…» · «C'est quoi l'ante ?» · «qui paye l ante») — 전원 앤티(Winamax 설명) vs BB ante 비교 · EN «How Big Are the Blinds?» → «**Quelle est la valeur des blindes au poker ?**»(PAA 2 SERP) + «structure des blinds»(Winamax 축어) · straddle은 L-F 앵커.
- **FAQ**: «**La grosse blinde peut-elle relancer ?**»(PAA 2 SERP — 아무도 레이즈 안 하면 체크 또는 레이즈 옵션) · «Quand augmentent les blindes en tournoi ?» · «Qui paie l'ante au poker ?».
- **차별화**: 레벨 표(캐시 vs 토너먼트) · BB ante 산수 · heads-up.
- **카니발**: straddle(L-F) · «heads up poker»(210) 조준 안 함.

### 7-7. 우선순위 요약

| 순위 | 글 | 근거(볼륨 × 갭) | 핵심 처방 3 |
|---|---|---|---|
| 1 | rules-for-beginners | 18,100 + 1,900 + 1,300 + 롱테일 ~3,000 · débutant SERP 포럼 7/10 | «règles du poker» 앞쪽 · PAA 4종 H2 · simple/pour les nuls + poker classique |
| 2 | game-order | 210 ×3 · FR SERP 반이 영어 · «qui commence» 직답 0 | «Qui parle en premier» · EN 누락 FAQ 4 · flop/river 정의 H2 |
| 3 | showdown-rules | 110 + muck 90 + slow roll 70 · 직답 0 · 1위 위키 부정확 | «règles du showdown» · TDA vs 하우스룰 표 · «quand montrer» |
| 4 | all-in-rules | 590 + 90 + 90 · FR 해설 공백 | «all-in» 앞 + «faire tapis» · «Pourquoi dit-on tapis»·«tapis effectif» · 위키 오류 반박 |
| 5 | betting-actions | 140 + 110 + 90 ×3 · check 정의 0/10 | «C'est quoi un check» · 협회 용어표 · relance minimale |
| 6 | blind-meaning | 210 + 210 + 90 · 경쟁 최약 | ante 단독 H2 · «grosse blinde peut relancer» · blind/blinde 병기 |

---

## 8. 0-3 판정 재료 (판정은 하지 않는다)

### 8-A. ③ fold 헤드 (betting-actions vs when-to-fold)

| 증거 | 내용 |
|---|---|
| «fold poker»(140) SERP | 정의·용어 의도: 숏츠·«fast fold»·포럼·akroplay 정의·스팸 · 결과 8 · PAA 2개 모두 **용어 정의형**(«Que signifie "raise"…» · «…"cut off"…») |
| «fold poker» 자동완성 | 15개 중 **정의·번역 8**(traduction · definition · en francais · in french · significado · term · meaning · que es) · 전략형 0 |
| «se coucher au poker» SERP | **제목 7/10 전략형**(«À quel moment se coucher» · «Quand se coucher…» ×3 · «Le fold: quand se coucher…» · «Se coucher avec une bonne main» · «…quand faut-il vraiment ?») · 정의형 1(dictionnaires) |
| 그 PAA | «Que signifie "se coucher" au poker ?»(정의) + 무관 3 |
| 자동완성 «se coucher au poker» | 전략 «quand se coucher»(10) / 규칙 «que signifie…» · «peut on se coucher au premier tour» · «…sans miser»(`-`) |
| 우리 현황 | betting-actions H2 «C'est quoi se coucher (le fold)… ? Peut-on se coucher à tout moment ?» = 규칙 · when-to-fold(L-D) = 전략 |

**권고 1줄**: «fold poker»(정의·번역)와 «que signifie / peut-on se coucher»(규칙)는 **betting-actions**, «quand se coucher au poker»(전략 SERP 7/10)는 **when-to-fold** — when-to-fold 제목·H1은 «fold poker» 단독 대신 «quand se coucher (folder)», 두 글은 상호 앵커 1회.

### 8-B. (참고 · §3-A 용어 정본 재료) 표기 갈림

| 항목 | SERP·원문 증거 | 우리 현황 |
|---|---|---|
| turn | «turn poker» 50 · «tournant poker» `-` · PokerStars «La turn» · fr.wiki·pokerlistings·wikihow «le tournant» | rules «tournant» 14 · game-order «turn» · glossary «tournant» |
| river | «river poker» 210 · «rivière poker» 50 · PokerStars «La River (Rivière)» · dictionnaires «Rivière (river)» | rules «rivière» 15 · game-order «river» 30 · showdown «rivière» 29 · glossary «Rivière (river)» |
| blind | «blind poker» 210 · «blinde poker» 90 · «petite blinde» 390 · KG «Blind» · Winamax 혼용 | 전 글 «blinde» 우세(blind-meaning 127) |
| fold | 협회 «passe» · PokerStars «passer» · 일반 «se coucher» | «se coucher (fold)» · «passer» 0 |
| check · all-in | 협회 «parole» · «tapis» | «checker» + «parole» ✓ · «tapis» + «all-in» ✓ |

**권고 1줄**: 검색량이 영어 표기에 몰리므로(river 210 > rivière 50 · blind 210 > blinde 90) 6편 공통으로 «river (rivière)» · «turn (tournant)» 첫 등장 병기 규칙을 하나로 고정하고, «blinde»는 본문 유지 + 첫 정의에 «blind» 병기.

### 8-C. 🪶 범위 밖
- «relance poker» 5위 legifrance(카지노 규정) — 합법성 축, 인용·조준 안 함. La Ligue de Poker(«poker associatif») — 규칙 출처로만, 리그 안내는 범위 밖.

---

## 9. 커버리지 표

### 9-A. 검색어별 (1 자동완성 · 2 신규 볼륨 · 3 SERP+PAA · 4 원문)

| 검색어 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| règles du poker | ✅ (+ texas holdem · apprendre) | ✅ 0-1 승계 · 변형 재확인 | ✅ §3-1·3-4 | ✅ laliguedepoker · pokerlistings classique · winamax · pokerstars.com · le-poker-holdem (5) |
| comment jouer au poker | ✅ (+ «comment \* poker») | ✅ 0-1 · vol1 롱테일 | ✅ §3-2·3-3·3-19 | ✅ wikihow · partypoker(PW) · pokerlistings.cm · gaming.net (4) · ✗ pokerstars.fr(KR 404 ×3경로) · joa(403 ×2) · pmu·bwin(JS) |
| all in poker | ✅ (+ faire tapis · tapis au poker · side pot) | ✅ | ✅ §3-15·3-16 | ✅ fr.wiki Tapis · tables-poker · pokerlistings side pot · upswing (4) · ✗ pokerstars.fr(404) |
| ante poker | ✅ (+ ante au poker · blinde · petite blinde grosse blinde) | ✅ | ✅ §3-13·3-14 | ✅ winamax · pokerlistings 글로서리 · pokernews (3) · ✗ partypoker(Cloudflare) · pokerstars.fr(404) |
| flop turn river | ✅ (+ flop · turn · river · qui commence · qui parle) | ✅ vol2 표기 변형 | ✅ §3-5·3-6·3-7 | ✅ pokerlistings · fr.wiki · winamax river · poker-vibe · dictionnaires (5) |
| fold poker (경량) | ✅ (+ se coucher · checker · relance · suivre · miser · parole) | ✅ | ✅ §3-8~3-11 | ✅ akroplay · partypoker · pokerlistings · kelbet · dictionnaires (5) |
| showdown poker (경량) | ✅ (+ abattage · qui montre) | ✅ muck · slow roll | ✅ §3-17·3-18 | ✅ fr.wiki Abattage · winamax · pokerpro (3) · ✗ pokerstars.fr(봇 차단) · clubpoker(403) |

### 9-B. 글별 (완료 조건)

| 글 | PAA 질문 확보 | 자동완성 질문 확보 | 처방 |
|---|---|---|---|
| texas-holdem-rules-for-beginners | ✅ (§3-1·3-2·3-3·3-4·3-19) | ✅ (simple · pdf · avec jetons · 2 joueurs · en famille · pour les nuls · comment se joue) | ✅ §7-1 |
| holdem-game-order | ✅ (§3-4 ordre de parole · 3-5 · 3-6 · 3-7) | ✅ (qui commence a parler/miser · qui doit parler en premier · ordre parole · flop definition) | ✅ §7-2 |
| holdem-betting-actions | ✅ (§3-8~3-11) | ✅ (peut on se coucher sans miser / au premier tour · quand peut on checker · relance minimale) | ✅ §7-5 |
| holdem-blind-meaning | ✅ (§3-13·3-14) | ✅ (qui paye l ante · ordre blinde · ordre petite blinde grosse blinde · ante c'est quoi) | ✅ §7-6 |
| holdem-all-in-rules | ✅ (§3-15·3-16) | ✅ (quand faire tapis · tapis au poker règle · que veut dire tapis · all in poker regle) | ✅ §7-4 |
| holdem-showdown-rules | ✅ (§3-17·3-18) | ✅ (qui montre ses cartes en premier au poker · quand montrer · regle abattage) | ✅ §7-3 |

- ✗ 사유: PokerStars FR 학습 페이지 = 한국 IP에서 `pokerstars.fr` → `pokerstars-01.com` 301 → 404 또는 이미지 반환(curl·WebFetch·Playwright 3경로 동일) — 지역/봇 차단 확정, 프랑스 SERP 제목만 확보. clubpoker · joa · partypoker 블로그 = Cloudflare 403(Playwright 재시도 1회 동일). 묶음마다 대체 원문 3편 이상 확보 → 처방 빈칸 없음.
- 0-3 재료: ③ fold ✅(§8-A) · 용어 표기(참고) ✅(§8-B).
