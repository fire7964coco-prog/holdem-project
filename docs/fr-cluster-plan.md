# fr(프랑스어) 클러스터 완결 계획 — 2026-10-07 사장님 결정

> 정본. 핸드오프에는 링크만 둔다. 단계가 끝나면 §4 표의 상태 칸만 고친다.
> 레인 운영 규격(A 준비 → B 집필 → C 마감 · 진행 파일 · 헤드 머지)은 **`docs/ms-translation-lanes.md` §3~§9를 그대로 쓴다** — 여기엔 «fr이라 다른 점»과 «두 번 일하지 않기 위한 장치»만 적는다.

## 0. 결정 (사장님 10-07)

- «fr은 기존 방식대로 포스팅 꽉 채우자 — EN 버전처럼 · 경량화하지 말고.» → tr(20편 축소판)과 달리 **EN 56편 기준 완결**.
- «이번에는 두 번씩 일하지 않도록 워크플로 먼저.» → §2 재작업 방지 장치가 이 계획의 핵심이다.
- 판단 3건 = **권고대로**: ① GTO 예제 13편 포함(마지막 레인 · `settled-decisions` §1-E에 따라 GSC 수동 색인 요청 안 함) ② 대회 가이드 5편 제외(ms와 같음: apt-incheon · ept-barcelona · wpt-australia · korea-poker-marathon · wsop-2026) ③ 0단계 = 본체 · 레인 = 워크트리 병렬.
- 착수 시점 EN 기준 해시 = **`a54b5f3d`**(§2-⑤).

## 1. 범위 — 51편 · 레인 7개

| 레인 | 폴더·브랜치(예정) | 편수 | 슬러그 |
|---|---|---:|---|
| 🅰 규칙(기존 재작업) | `Holdem-fr-rules` · `harden-fr-rules` | 6 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules |
| 🅱 족보 | `Holdem-fr-rank` · `harden-fr-rank` | 6 | holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board |
| 🅲 확률 | `Holdem-fr-prob` · `harden-fr-prob` | 7 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting |
| 🅳 전략 | `Holdem-fr-strat` · `harden-fr-strat` | 8 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold |
| 🅴 토너먼트 | `Holdem-fr-tour` · `harden-fr-tour` | 5 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game |
| 🅵 용어 | `Holdem-fr-gloss` · `harden-fr-gloss` | 6 | holdem-glossary · holdem-bad-beat · holdem-cooler · holdem-fish · holdem-rake · holdem-straddle |
| 🅶 GTO 13 | `Holdem-fr-gto` · `harden-fr-gto` | 13 | donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet · k-high-board-cbet · ace-paired-board-strategy · paired-board-strategy · low-board-check-raise · blind-battle-cbet · blind-battle-connected-board · 3bet-pot-cbet · 3bet-pot-bet-sizing · 3bet-pot-low-board |

- 🅰는 «새 번역»이 아니라 **7월판을 EN 현행으로 다시 쓰는 것**이다(드리프트 6편 전부 · 7월 → EN 10월). 기존 slug·URL은 그대로.
- 링크가 «걸려도 되는» fr 대상 = 위 51편 + 도구 4종(`/fr/calculator` · `/fr/hand-chart` · `/fr/glossary` · `/fr/solver`). 제외한 대회 가이드 5편으로 가는 EN 링크는 ms §0-A처럼 빼거나 51편 중 하나로 대체하고 진행 파일 «링크 편차»에 적는다.
- 🅶은 다른 레인이 끝난 뒤 마지막(사장님 권고 수용). de 13편(10-02 · MB-150)이 선례 — `/fr/solver` 랜딩 13링크 · 러닝맵 fr 노드 · 필라 역링크까지 그 회차에.

## 2. 재작업 방지 장치 — 지난 재작업 원인 → 이번 대책

| # | 지난 재작업 | 원인 | 대책(선행 조건으로 박는다) |
|---|---|---|---|
| ① | tr SERP 보강 A~D | 볼륨만 재고 SERP 상위 글·PAA를 빠뜨렸다 | **0-2에서 51편 전부 SERP 조사 완료** — `docs/keyword-bank/fr-serp/` 없이는 레인 A를 띄우지 않는다. 레인 A는 SERP를 «다시 조사»하지 않고 이 산출물을 읽어 브리프에 옮긴다 |
| ② | tr «poker terimleri» 글↔도구 경쟁 | 키워드 주인을 발행 뒤에 정했다 | **0-3 소유표**(§3) 먼저. 차트·계산·용어사전·솔버 의도는 도구가 주인(`tools-over-posts` 확정) — 글 제목·H1·태그에 그 헤드텀을 쓰지 않는다 |
| ③ | tr 회차 3 뒤 재링크 | 글이 없어 링크를 비워 두고 나중에 걸었다 | 51편 동시 진행 → **처음부터 EN 링크 1:1**. 배포는 전 레인 머지 뒤 1회 |
| ④ | ms 레인 간 용어 분열 | 레인 5개가 각자 용어를 정했다 | **0-3 고정문·용어 정본**(§3-A) — 레인은 판단 없이 따른다. 새 용어는 진행 파일 «신규 용어» 표 → 헤드가 머지 때 대조 |
| ⑤ | ms 꼬리 드리프트(14편) | 집필 중 EN이 바뀌었는데 못 따라갔다 | 기준 해시 `a54b5f3d` 고정 → **헤드 머지 단계에서 `git diff a54b5f3d..HEAD -- lib/posts-en/<51편>` 한 번 훑어 같이 반영** → 각 글 `masterUpdated` = 그 시점 EN `updated` |
| ⑥ | 카피 재작업 | 카피를 집필 중에 같이 썼다 | 카피(seoTitle·desc·tldr·H2 세트)는 **레인 A 브리프에서 확정**(Fable 서브 1회). B·C는 카피를 바꾸지 않는다 — 바꿔야 하면 진행 파일 «헤드 요청» |
| ⑦ | 검수장 기준 해시 어긋남 | 우리가 고치는 중에 검수장이 봤다 | 0-4 착수 공지 MB에 «fr은 배포 해시로 한 번에» 요청. 배포 전 fr 파일은 검수장 대상이 아니다 |
| ⑧ | 기존 fr 6편 별도 재경화 | (예방) | 🅰 레인으로 이번 파이프라인에 넣었다 — 나중에 따로 하지 않는다 |
| ⑨ | 솔버 앱 라벨 어긋남 | 앱 축어 문서가 낡아 있었다(`solver-app-verbatim-fr-2026-08-24.md`) | 🅶 레인 A 전에 솔버 앱 fr 현행 축어를 다시 뜬다(앱 라이브 · Playwright) |

## 3. 소유표·고정문 (✅ 0-3 확정 · 2026-10-07)

> 레인은 이 절을 **판단 없이 따른다**(§2-④). 여기 없는 용어가 필요하면 진행 파일 «신규 용어» 표에 적고 헤드가 머지 때 대조한다.
> 근거 실측(10-07): 기존 fr 6편 전문 grep · `lib/intl.ts` fr 블록 · 도구 4종 사전(`app/fr/{calculator,glossary,hand-chart,solver}`) · `docs/translation-terms-fr.md` · `docs/local-voice/fr-fr.md` · 0-1 볼륨 · 0-2 L-A §8-B · L-B §0·§1 · L-C §8.
> 🔴 «검색 표기»와 «본문 표기»를 나눈다: 카피·H1·H2·FAQ 질문은 프랑스 검색자가 실제 치는 형태(볼륨 근거), 본문은 코퍼스·도구와 같은 표기. 둘이 다르면 글마다 **첫 등장에 병기**한다.

### 3-A. 고정문·표기

**① 구조 고정문**

| 자리 | 정본 | 근거 |
|---|---|---|
| 직답 블록 라벨 | `> **Réponse rapide**` | `lib/intl.ts` fr `quickAnswer` · blind-meaning 1 · EN «Quick answer» 50 · es «Respuesta rápida»와 같은 형 |
| readnext 라벨 | `:::readnext[À lire ensuite]` | fr 6편 중 5 («Continue ta lecture» 1 → 🅰에서 통일) |
| FAQ H2 | `## FAQ` | fr 6편 중 5 · 스키마는 H2 문구와 무관(`lib/intl-blog-page.tsx` = `**Q.**`+빈 줄+`A.` 쌍) |
| 관련 글 H2 | `## Articles liés` | `intl.related` · 6편 중 5 |
| 마무리 H2 | `## À retenir` | blind-meaning 선례(EN «Key Takeaways» 자리) |
| readTime | `"N min"` | 6편 전부 |
| 화자 | 1인칭 단수 · 작성자 일치는 남성형(«je me suis figé» — 코퍼스 관행) | blind-meaning 도입 |

**② 문체·조판**
- **tu**(명령형 훅 «Regarde… / Compare… / Essaie…»). vous 금지(인용·법규 축어 제외).
- 숫자: 천 단위 **공백**(`1 326` · `$2 300`) · 소수점 **쉼표**(`2,5` · `0,84 %`) · **% 앞 공백**(`35 %`) — 코퍼스는 일반 공백(U+0020)이다. 비율 `2,7:1`. §13 값은 불변, 구분자만 바꾼다.
- 화폐 = **`$` 앞붙임**(`$1/$2` · `$14`) — €로 바꾸지 않는다(§13 보존 · 코퍼스).
- 인용 = `« … »`(안쪽 공백) · 아포스트로피 = 곧은 `'`(코퍼스 866 · 굽은 0) · `Texas Hold'em`(굽은 0).
- 카드 = 영어 랭크 문자 + 무늬 기호(`A♠ K♥ Q♦ J♣ 10♠`) — R/D/V 금지. 풀어 쓸 때 소문자 «paire d'as», «roi», «dame», «valet».
- `préflop`(붙여 씀 · 36 vs pré-flop 13 → 🅰에서 통일).

**③ 족보** (본문 = 왼쪽 · 검색 표기 = 오른쪽)

| EN | 본문 정본 | 검색 표기·병기 규칙 |
|---|---|---|
| Royal Flush | quinte flush royale | 첫 등장 «quinte flush royale (royal flush)» — «royal flush» 1 300 |
| Straight Flush | quinte flush | — |
| Four of a Kind | carré | — |
| Full House | full («full aux X par les Y») | — |
| Flush | couleur | «flush poker» 880 → hand-rankings·flush-vs-straight 첫 등장 «couleur (flush)». 무늬 뜻의 couleur와 헷갈리는 문장은 무늬를 «enseigne»로 |
| Straight | **quinte** | 🔴 **«suite»가 검색 표기다**(«suite poker» 3 600 vs «quinte poker» 720). 카피·H2·FAQ는 «suite» 허용(예: «suite ou couleur»), 본문 첫 등장 «quinte (suite)», 이후 quinte. 도구 계산기(Quinte 18)·앱(quinte)과 맞춘다. `local-voice` §2 «suite 피할 것»은 **본문 한정**으로 읽는다 |
| Three of a Kind | brelan (set = «brelan servi») | — |
| Two Pair | double paire | 코퍼스 11 · 계산기 «Double paire» · «deux paires» 0 |
| One Pair | paire | — |
| High Card | carte haute | 첫 등장 «carte haute (hauteur)» — 계산기 «Carte haute» |
| wheel | **la roue (wheel)** = A-2-3-4-5, la plus petite quinte | 도구 용어집 «Roue (wheel)» · 계산기 «roue» · 자동완성 «suite poker as 2 3 4 5» 축어를 H2·FAQ에 |

**④ 스트리트·액션·자리**

| EN | 본문 정본 | 규칙·근거 |
|---|---|---|
| turn / river | **la turn · la river** | 첫 등장 «la turn (le tournant)» · «la river (la rivière)». 검색량(river 210 vs rivière 50) · 도구(river 28·turn 38 vs rivière 4) · PokerStars «La turn». 🅰 rules·showdown의 tournant/rivière 다수 → 재작성 때 교체 |
| preflop / flop | préflop · le flop | — |
| board | le board (첫 등장 «le board (les cartes communes)») | 도구·EN 일치 |
| blind | **blinde** · petite blinde (SB) · grosse blinde (BB) | 첫 정의에 «blinde (blind)». 코퍼스 blinde 227 · 도구 45 |
| check | checker (3인칭 «il checke») · 선언어 «parole» | 협회 «parole» |
| bet / call / raise | miser · suivre (payer 허용) · relancer / relance | 코퍼스 suivre 49 · caller 0 (단 GTO 🅶은 앱 축어 «caller»·«ouvreur»·«3-betteur» 허용 — `local-voice` §2) |
| fold | **se coucher**(재귀 필수) · 구어 «folder» | 협회 «passe»는 betting-actions에서 1회 소개만. 카피·H2는 «fold» 허용(«fold poker» 140) |
| all-in | **tapis / faire tapis** · all-in | 카피는 «all-in»(590 · «tapis»는 매트 오염 — L-A §6) |
| stack | **stack** (짧은 스택 = «short stack») | 🔴 «tapis»는 all-in 뜻으로만 쓴다(코퍼스 stack 0이었지만 short-stack·ICM 글에서 tapis 이중 의미가 혼동을 만든다). 도구 계산기의 «tapis»(스택 뜻)는 손대지 않는다 |
| showdown | **abattage** | 카피·H2는 «showdown»(110 vs abattage 10) · 첫 등장 «l'abattage (showdown)» |
| side pot / main pot | pot annexe (side pot) · pot principal | 첫 등장 병기 후 «side pot» 허용(all-in 코퍼스 22) |
| dealer / button | donneur · bouton (BTN) | 코퍼스 donneur 46 · dealer 0 |
| 자리 약어 | UTG · HJ · CO («cut-off») · BTN · SB · BB | 첫 등장 풀어 쓰기 |
| c-bet / 3-bet / limp | c-bet («mise de continuation» 첫 등장 병기) · 3-bet · limp / limper | «cbet poker» 110 · 도구 «c-bet» · «3-bet» |
| outs / draw | outs · tirage (gutshot = «gutshot (tirage ventral)») | L-C §8 · 계산기 |
| pot odds / implied | cote(s) du pot · cotes implicites (단·복수 혼용 허용) | 계산기 «cotes du pot» · SERP 5:4 |
| rule of 2 and 4 | «règle du 2 et du 4» (표기 «règle du 2/4») | `fr-calculator.md` §2-B 정본 |
| equity / range | équité · la range (여성) | 계산기 §3-B «Équité» · `local-voice` §2 |
| solver / GTO | solver · résoudre un spot · GTO | `local-voice` §2 · 🅶만 |
| straddle / bad beat | straddle (첫 등장 «straddle (overblind)») · bad beat (첫 등장 «bad beat (sale coup)») | L-F §0·§7 |

**⑤ 도구 링크 앵커 문구 고정**(도구가 헤드의 주인임을 앵커로 알린다 · 3-B와 짝)

| 도구 | 앵커 정본 |
|---|---|
| `/fr/calculator` | «calculateur poker» · 기능별 «calculateur d'équité / d'outs / ICM» |
| `/fr/hand-chart` | «tableau range poker» · «tableau des mains de départ par position» |
| `/fr/glossary` | «lexique du poker» |
| `/fr/solver` | «solver poker gratuit» |

### 3-B. 카니발 소유표

**원칙(이번에 확정)**: ① **목록·도구형 헤드**(lexique/termes · tableau/range · calcul/calculateur · solver/GTO)는 도구가 주인(`tools-over-posts` · tr «poker terimleri» 선례). ② **단일 용어·개념 헤드**(nuts · check-raise · SPR · ICM · fish · rake …)는 그 개념을 다루는 **글**이 주인 — 도구의 사전 항목 한 줄로는 그 SERP를 이기지 못하고(유기 정보형 우세), 도구는 해당 항목에서 글로 앵커한다. ③ 주인 아닌 쪽은 seoTitle·H1·tags에 그 헤드를 쓰지 않고 앵커로 위임한다.

| # | 검색어(볼륨) | 주인 | 주인 아닌 쪽의 처리 | 판정 근거 |
|---|---|---|---|---|
| ① | lexique / termes / vocabulaire poker | **`/fr/glossary`**(현행 유지) | holdem-glossary = «jargon / langage / expressions du poker + 영어→프랑스어 대응» 각도 · 첫 화면 도구 링크 · seoTitle·H1·tags에 셋 금지 | L-F §8 ① · 원칙① · tr 10-06 선례 |
| ② | position(s) poker 590 · 좌석명(utg 260 · cut off 170 · bouton) | **holdem-positions** | holdem-position-play = «jouer en / hors de position · pourquoi la position est importante» · seoTitle 선두에 «position poker» 금지 · 서로 첫 문단 앵커 1 | L-D §8-A |
| ③ | fold poker 140 · se coucher (정의·번역·«peut-on se coucher») | **holdem-betting-actions** | holdem-when-to-fold = «quand (faut-il) se coucher au poker · savoir folder» 전략 롱테일 · 정의는 앵커 · 상호 앵커 1 | L-A §8-A · L-D §8-B 일치 |
| ④ | nuts poker 210 (+ nuts au poker 20) | **holdem-reading-the-board** — H2 «Comment savoir si tu as les nuts ?» + FAQ «Que signifie « nuts » au poker ?» · 카피 보조어로 «nuts» 허용(Fable 판단) | `/fr/glossary` Nuts 항목 = 정의 1줄 유지 + 글로 앵커(배포 회차) · holdem-glossary = 정의 1줄 + 앵커 · seoTitle에 «nuts» 금지 | 🔴 L-B(도구) vs L-F(글) 엇갈림 → **원칙② 채택**: FR 정보 페이지 0/8 · PAA 정의 2 + «avoir les nuts» 보드 의도 · EN H2 «Reading the Nuts» |
| ⑤ | check raise poker 260 | **low-board-check-raise**(EN parity · seoTitle·첫 정의 H2) | 정의 깊이는 `/fr/glossary` «Check-raise»로 앵커 · fr check-raise 필라가 생기면 그날 반납 | L-G §8 ⑤ · `settled-decisions` §1-E ③(주인 없는 검색어) |
| ⑥ | spr poker 210 | **3bet-pot-cbet**(EN parity) | «spr poker calculator/chart»는 조준 안 함(계산기에 SPR 탭은 있으나 헤드 «calculateur poker»만 유지) | L-G §8 ⑥ · ⑤와 같은 논리 |
| ⑦ | icm poker 480 (정의·개념) | **holdem-icm** | `/fr/calculator`는 «calculateur ICM / calcul ICM»만 · 도구 title «… et ICM»은 기능 나열이라 그대로 둔다 · 상호 앵커(글 → «calculateur ICM» · 도구 icmGuide → holdem-icm)는 배포 회차 · bubble·short-stack·tournament·tournament-vs-cash의 ICM 단락 = 2~3문장 + 앵커(정의 H2 금지) | L-E §8-②·⑤ · `fr-calculator.md` §0-A 재판정 조건 발동 |
| ⑧ | probabilité · tableau probabilité · équité · cote poker | **확률 글 7편**(probabilité · tableau · qu'est-ce que · comment calculer = 손 계산법) | `/fr/calculator` = calcul · calculateur · simulateur · gratuit · 글 title·H1에 «calcul(ateur)» 금지 · 계산기 FAQ 7문항과 같은 질문 문장 금지(의미가 같으면 계산기로 앵커) · 계산기 related에 7편 추가(배포 회차) | L-C §8 · `fr-calculator.md` §0-A |
| ⑨ | mains de départ poker · quelles mains jouer · meilleures mains de départ | **holdem-starting-hands-chart** | `/fr/hand-chart` = «tableau range poker · tableau des mains de départ (par position) · range» · 글 title·H1에 «tableau / range / chart» 금지 · 도구 title(«Tableau range poker — mains de départ par position»)은 그대로 둔다(뒷부분은 기능 서술) | L-D §8-C · SERP 글형 가이드 우세 |
| ⑩ | tournoi poker (일정 81 %) | 조준 안 함 | holdem-tournament = PAA 4문(participer · prix · se déroule · fonctionne) + MTT 210 · ITM 170 롱테일 · 일정 의도는 보드 로케일·데이터 공급 확정 때 별도 트랙 | L-E §8-① · `country-tournament-playbook` 착수 금지 조건 |
| ⑪ | push or fold · «tableau range tournoi» | 도구(`/fr/calculator` push or fold · `/fr/hand-chart`) | short-stack·tournament는 H2 문구 일부·앵커로만 | L-E §8-③·④ |
| ⑫ | gto poker 480 · solver poker 320 · solver poker gratuit 110 · PAA «C'est quoi le GTO / un solver» | **`/fr/solver`** | GTO 13편 seoTitle·H1·tags에 «GTO poker»·«solver poker» 금지 — EN seoTitle에 «GTO» 단독이 든 3편(ace-paired · blind-battle-cbet · blind-battle-connected)은 «solver» 앵커 문구로 바꾸되 헤드 조준이 아님을 🅶 레인 A가 확인 · «meilleur solver» 문항 신설 금지(factsheet §5) | L-G §8 · `fr-gto-solver.md` |

**레인 A로 넘기는 처리 확정**
- 🅵 rake: EN FAQ «Is taking a rake illegal?» = fr에서 합법성 축 → **빼고** 같은 자리를 «Pourquoi la salle prend-elle un rake ?»류 운영 질문으로 바꾼다(`legality-ban-scope` · 신규 발행은 합법성 축을 열지 않는다). 프랑스 과세 2 %·상한 1 €는 Légifrance 원문이 없으면 **쓰지 않는다**(§12-B).
- 🅰 «relance poker»의 legifrance 결과·La Ligue de Poker = 인용·조준 안 함(규칙 출처로만 · L-A §8-C).
- 🪶 범위 밖(자동 착수 금지): `/fr/glossary` 사전에 PAA가 묻는 TNT·ITM·shove · fish·straddle·nit 항목 없음 → 사전 보강은 별도 회차(L-F §8 ①). 배포 회차에 하는 것은 «Nuts·ICM·Check-raise 항목 → 글 앵커»뿐.

## 4. 단계 (한 실행 = 한 단계 · AUTONOMY-LIMITS 90분)

| 단계 | 내용 | 산출물 | 선행 조건 | 상태 |
|---|---|---|---|---|
| 0-1 수요 | DataForSEO 볼륨(France 2250 · fr) — 51편 헤드·롱테일 시드. 필요 시 BE·CA·CH 비교 | `docs/keyword-bank/fr-core-volumes.md` | — | ✅ 10-07 (시드 210 + Labs 34 · 함정 11 · 0-3 판정 대기 5) |
| 0-2 SERP | 볼륨 상위 검색어의 구글 FR 상위 10 → 실제 글 정독(원문 · §12-B) · PAA · 자동완성 → 레인별 처방 | `docs/keyword-bank/fr-serp/<레인>.md` | 0-1 | ✅ 10-07 (7레인 · 글별 PAA·자동완성 51/51 · 0-3 재료 10건 = `fr-serp/00-brief.md` 끝 절) |
| 0-3 정본 | §3-A 고정문·용어 확정 · §3-B 소유표 | 이 문서 §3 | 0-1·0-2 | ✅ 10-07 (고정문 7 · 족보 11 · 액션·자리 20 · 도구 앵커 4 · 소유 12건 — ④ nuts = 글 reading-the-board로 판정) |
| 0-4 공지 | 검수장 착수 공지 MB(§2-⑦) · 레인 워크트리 7개 생성 + 각 `HARDEN.md` | MB 1행 · 워크트리 | 0-3 | ✅ 10-07 (MB-196 · 워크트리 7 + HARDEN.md · 진행 파일 7 · index 칸 6 · lane-sync fr 7레인 · §5 치환표) |
| 레인 🅰~🅵 | A 준비(브리프 + Fable 카피) → B 집필 → C 마감(게이트·렌즈·2차) | `docs/fr-lanes/<id>-*.md` · `lib/posts-fr/*` | 0-4 | ☐ |
| 레인 🅶 | 솔버 앱 fr 축어 재추출(§2-⑨) → A·B·C | 〃 | 🅰~🅵 머지 | ☐ |
| 헤드 머지 | 레인 머지 · 신규 용어 대조 · EN 델타 스윕(§2-⑤) · 아스트라 교차 1회 → 반영 | — | 전 레인 C | ☐ |
| 배포 | fr index · `/fr/blog` · 러닝맵 · `/fr/solver` 13링크 · 도구 4종 related · 빌드 · push · MB · IndexNow · 수동 색인 목록(GTO 13 제외) | 라이브 | 헤드 머지 | ☐ |

- 모델: 본체·레인 = Opus 5.5 · 카피 판정 = Fable 서브 1회/레인 · 렌즈 = Opus 서브 · 다른 계열 교차 = GPT 아스트라(ms §2 그대로).
- 🔴 라쿠 MCP는 경로 스코프라 새 워크트리에 수동 등록이 필요하다(ms 선례) — 0-1·0-2를 본체에서 끝내 두면 레인은 라쿠가 필요 없다.

## 4-A. 헤드 머지 = 통합 브랜치 `fr-integration` (10-07 결정)

- 🔴 **레인은 main이 아니라 `fr-integration`(폴더 `Holdem-fr-head`)에 머지한다.** main에 넣으면 그때부터 main을 push할 수 없다(push = Vercel 배포 → 반쪽 fr + 끊긴 링크가 라이브). main은 계속 MB 회신·다른 로케일 배포에 쓴다. 배포 회차에 `fr-integration` → main 머지 1회.
- 통합 트리 빌드 = `npx next build`(prebuild의 intl-links·calc-parity는 전 레인 + 계산기 사전 전까지 실패가 정상).
- 머지 기록: ✅ 🅰 rules `2b236c8f` · ✅ 🅲 prob `c2d159bf` (10-07 · 헤드 요청 ⑤⑧ 반영 `0f514ece`) · ✅ 🅱 rank `62843e1f` (10-07 · 헤드 요청 ③ FAQ 3문항 분리 반영) · ✅ MA-354 형제 fr 2자리 `698e1b4b` · ✅ 🅳 strat `b43c47cd` (10-07 · strategy FAQ «se coucher» 분리 `cd1c8683`) · ✅ 🅵 gloss `d8ec6c21` (10-07 · cooler는 MA-350 정정 문면 확인) · ✅ 🅴 tour `51c38a5c` (10-07 · 통합 트리 fr 38편 audit 🔴 0 · intl-links 잔여 4 = 전부 🅶 대상) · ▶ **🅶 gto 시작 신호 ✅ 10-07** (`harden-fr-gto`에 main + fr-integration 머지 `94accc28` — 38편이 보인다) · ☐ 🅴 · ☐ 🅵 · ☐ 🅶

### 4-B. 헤드 판정 대기 (전 레인 C 뒤 신규 용어 대조 때 한 번에)
| # | 자리 | 레인 | 내용 |
|---|---|---|---|
| H-1 | street | 🅰 «tour (de mises)·étape», street 안 씀 ↔ 🅲 «street» 통일 | 🔴 레인 간 분열 — 하나로 |
| H-2 | full raise | 🅰 relance complète / relance pleine 병기 | 통일 |
| H-3 | suite 본문 병기 | 🅲 브리프 «본문 suite 금지» ↔ §3-A ③ «quinte (suite)» 첫 병기 | 족보 글 외 적용 범위 |
| H-4 | X-to-1 | 🅲 «X contre 1» · «1 sur N» | §3-A ②에 추가할지 |
| H-5 | suited/offsuit | 🅲 assorties / dépareillées | 코퍼스 대조 |
| H-6 | 태그 | 🅰 «parole poker»(가사 SERP) · 🅲 «règle du 2 et du 4» 3편 중복 | 카피 잠금 해제 판단 |
| H-7 | 계산기 사전 | 🅲 `check:calc-parity:all` fr 🔴 16 — quickRef 4 + related 5 | 배포 회차(§3-B ⑧) |
| H-8 | PDF | 🅰 fr 초보 PDF 없음 → «(PDF en anglais)» | 생성 여부 |
| H-10 | 태그 중복 | 🅱 flush-vs-straight «couleur poker»(= hand-rankings) · «flush/straight poker» · split-pot «pot annexe poker»(= all-in) | H-6과 같이 |
| H-11 | tapis·hauteur | 🅱 펠트·스택 뜻 tapis 8 → table/feutre·stack · «quinte hauteur X» 통일 | 🅰·🅲·🅳~🅵에 같은 정리 필요한지 대조 |
| H-12 | 🅰 링크 결손 | 🅱 6편 생기며 🅰 4편(betting-actions·game-order·showdown·beginners) `check:structure` 링크 개수 결손 | 헤드가 통합 트리에서 EN대로 복원 |
| H-13 | 현지 추가 링크 | 🅱 split-pot FAQ → tiebreak 앵커 1 | 유지 판정(레인 형제) |
| H-9 | EN-먼저 | 🅰 rules L353 «43.8% most frequent at showdown» · game-order L119 · 🅳 c-bet L181 «charges all his missed hands»(fr은 «met sous pression»으로 먼저) · position-play L128·281 AK/AQ ↔ chart L121 · c-bet L105 «over 97% on all three boards» | queue 등재 후보 |
| H-14 | solveur | 🅳 starting-hands·position-play 카피(H2·FAQ·tldr)에 «solveur» ↔ §3-A ④ «solver»(본문은 C가 통일) | 카피 잠금 해제 |
| H-15 | 3-bet FAQ | 🅳 strategy FAQ «Quand faire un 3-bet au poker ?» = 3bet H2·태그 | 앵커는 있음 · 문항 분리 여부 |
| H-16 | tldr 길이 | 🅳 3bet 618 · c-bet 637 · when-to-fold 623자(EN +50 %) | 2~3줄 규칙(`tldr-two-to-three-lines`) |
| H-17 | limpers | 🅳 카피 «limpers» ↔ 본문 «limpeurs» | 표기 통일 |
| H-19 | glossaire | 🅵 «glossaire»도 `/fr/glossary` 소유로 보고 글 seoTitle·H1·tags에서 뺐다 | §3-B ①에 추가할지 |
| H-20 | 카드 라벨 | 🅵 관련 글 카드 라벨(범주명) — 레인마다 다름(🅲 «Cotes & maths»·«Stratégie» 등) | 전 레인 통일 |
| H-21 | glossary 표 머리 | 🅵 «**Fold** (se coucher)» 영→불 순서 ↔ 도구 사전 «Tapis (all-in)» 불→영 | 글 각도라 유지 판정 예정 |
| H-22 | date | 🅵 date = 집필일 · 🅰·타 로케일 = EN date 복사 | 통일 |
| H-23 | 링크 | 🅰 blind-meaning에 EN의 holdem-straddle 링크 결손 · 🅴 tournament L271 «lexique du poker» 앵커가 글로 감(§3-A ⑤ 위반) · cooler → bad-beat 추가 1(EN에 없음) | 헤드 정리 |
| H-24 | EN-먼저 | 🅵 glossary L38 «a dozen terms»(8쌍) · rake «most pots brush the cap» · fish «competitors» · cooler 인용 I→you · «Who wins at showdown» 카드 | H-9와 합침 |
| H-25 | 앵커 분열 | 🅴 «tableau des mains de départ»가 다른 레인에서 글(starting-hands-chart) 대상 12회 — §3-A ⑤는 `/fr/hand-chart` · «lexique du poker» → 글 오용 2건 더 | 전수 치환 |
| H-26 | 카드 제목 | 🅴 임시 카드 제목 3(positions · when-to-fold · starting-hands) → 🅳 실제 title로 · game-order 카드는 «au showdown» 판 | 전수 대조 |
| H-27 | 성·표기 | 🅴 «la chip EV»(여성) · «position précoce» ↔ 🅳 표기 | 대조 |
| H-28 | 태그 카니발 | 🅴 short-stack «fold equity poker» ↔ 🅲 equity · «all in poker tournoi» ↔ 🅰 · vs-cash FAQ «L'ICM compte-t-il en cash game ?» ↔ icm | H-6·H-10과 같이 |
| H-29 | 🅰 구조 결손 | 🅴 실측: blind-meaning link 2·카드 −2 · beginners link 1 · betting-actions li −3 · game-order FAQ −4 | H-12와 같이 — 🅰 FAQ −4는 확인 필요 |
| H-30 | 계산기 사전 | `check:calc-parity:all` fr 14(icmGuide.deal.link · related 6→8) | H-7과 같이 · 배포 전 필수 |
| H-18 | GTO 썸네일 | 🅳 c-bet readnext가 `gto-*-en.webp`(fr 변형 없음) | 🅶 레인에서 `-fr` 생성 시 교체 |

## 5. 레인 운영 — `ms-translation-lanes.md`를 fr로 읽는 치환표 (0-4 · 10-07)

> 레인은 ms 규격 §3~§9를 그대로 따르되, **아래 표의 자리만 바꿔 읽는다.** 표에 없는 자리는 ms 규격 축어.

| ms 규격 자리 | fr에서는 |
|---|---|
| 폴더·파일 이름 `ms-` | `fr-` — 진행 `docs/fr-lanes/<id>-진행.md` · 브리프 `docs/fr-lanes/<id>-brief.md` · 키워드 `docs/keyword-bank/fr-<id>.md`(선택 · 브리프에 다 넣었으면 만들지 않는다) |
| §0 범위 · §0-A 링크 대상 | 이 문서 §1(51편 + 도구 4종 · 대회 가이드 5편 링크는 빼거나 대체 → 진행 파일 «링크 편차») |
| §1-A 고정문 · §1-B 용어 | **이 문서 §3-A**(정본) → 보조 `docs/local-voice/fr-fr.md` · `docs/translation-terms-fr.md`(§3-A와 어긋나면 §3-A가 이긴다). 인니어 유입 대신 🔴 **영어 직역투·vous·«suite»를 본문에 쓰기**가 fr 최대 위험 |
| §1-B «숫자 = 영어식» | 🔴 **fr은 프랑스식**(`1 326` · `2,5` · `35 %` · `2,7:1`) — §13 **값**은 EN 축어, **구분자만** 바꾼다. 카드는 영어 랭크 문자(R/D/V 금지) |
| §4-③ 키워드 실측 · §4-④ 현지 SERP | 🔴 **다시 조사하지 않는다**(§2-①). 입력 = `docs/keyword-bank/fr-serp/<레인>.md`(L-A-rules · L-B-rank · L-C-prob · L-D-strat · L-E-tour · L-F-gloss · L-G-gto) + `00-brief.md` + `fr-core-volumes.md`. 산출물에 없는 질문·볼륨이 꼭 필요하면 진행 파일 «헤드 요청»(레인이 DataForSEO를 직접 치는 것은 1회 · 2250/fr · 결과를 브리프에 축어로) |
| §4-⑤ 브리프 | 편마다 «### 소유표» 줄 추가 — 이 문서 §3-B에서 그 글이 주인인 검색어 · 쓰면 안 되는 헤드(seoTitle·H1·tags)를 적는다 |
| §4-⑥ Fable 카피 | 입력에 §3-A ① 고정문 + §3-B 금지 헤드 추가. 🔴 확정 뒤 B·C는 카피를 바꾸지 않는다(§2-⑥) |
| §5 B 틀 | 필드 모양 = `lib/posts-fr/holdem-blind-meaning.ts`(Réponse rapide · À retenir 선례) — 라벨은 §3-A가 이긴다. `masterUpdated` = 기준 해시 `a54b5f3d` 시점 EN `updated`(헤드가 머지 때 델타 스윕 후 갱신 · §2-⑤) |
| §5 등록 | `lib/posts-fr/index.ts`의 **자기 레인 칸 두 곳**(`[fr-<id> import 시작]~끝` · `[fr-<id> 배열 시작]~끝`). 🅰 rules는 이미 등록돼 있어 index를 건드리지 않는다 |
| §5·§6 게이트 | `--locale=fr` · `check:structure`는 fr 행 · 🅰는 추가로 `check:drift`(fr 6편 masterUpdated) |
| §6-② 전사 대조 스크립트 | 숫자 비교 전 fr 구분자를 정규화(공백 천 단위 제거 · 소수 쉼표 → 마침표 · `% ` 붙이기) — 안 하면 전부 불일치로 뜬다 |
| §6-③ 네이티브 렌즈 | 페르소나 = 파리 클럽 레귤러(Winamax·PokerStars.fr 용어) · 출판 교정자(tu 일관 · 조판 규칙 §3-A ②) · 벨기에/퀘벡 초심자(프랑스 전용 은어가 막는 자리) |
| §6-⑥ 커밋 | `git add lib/posts-fr/<내 슬러그>.ts lib/posts-fr/index.ts docs/fr-lanes/<id>-*` · 메시지 «fr(<id>): …» |
| §7 헤드 | 배포는 🅰~🅶 전부 머지 뒤 1회(§4). 🅶은 🅰~🅵 머지 뒤 헤드가 «시작» 신호 — 그 전엔 A도 하지 않는다 |
| §8 교차 | 헤드 머지 단계 아스트라 1회(§4) + 배포 해시로 검수장 1회(§2-⑦ · 배포 전 fr 파일은 검수장 대상 아님) |
| 🅶 A 앞 | §2-⑨ 솔버 앱 fr 현행 축어 재추출(Playwright · 앱 라이브) → `docs/solver-app-verbatim-fr-<날짜>.md` 신설 후 A |
