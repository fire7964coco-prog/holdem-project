# fr 키워드 뱅크 — `/fr/calculator` (계산기 랜딩 · 2026-09-18)

> 실측 2026-09-18. 권역 = **프랑스 단일**(아래 §2에서 FR/BE/CH/CA 4지역 자동완성 **74시드 전부 동일** → 분리 근거 0 · `docs/local-voice/fr-fr.md` · 용어 정본 `docs/translation-terms-fr.md`).
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location **2250 France** · 110시드 · 🔴 `language_code` 생략 — search_volume은 location만 먹는다 · `tmp/fr-calc-vol.mjs` → `tmp/fr-calc-vol.json`) ·
> **구글 자동완성**(`suggestqueries.google.com` · `client=firefox` · `hl=fr` × `gl=FR/BE/CH/CA` 4지역 교차 · 74시드 · `tmp/fr-calc-suggest.mjs` → `tmp/fr-calc-suggest.json`) ·
> DFS SERP `serp/google/organic/live/advanced`(mobile · language `fr` · France · 7쿼리 · PAA 포함 · `tmp/fr-calc-serp*.json`) ·
> 상위 페이지 구조 = 서브에이전트(sonnet) 2개가 Playwright DOM에서 title/H1~H3/표 th/도구 라벨/FAQ를 프로그램으로 추출(요약 금지 · §12-B · 원본 `tmp/fr-extract-{A,B}.json`).
> 라쿠는 쓰지 않았다(DFS와 같은 Google Ads 원천). 질문검색은 ja 전용.
> EN 정본 = `en-calculator.md` · 선례 = `ja/zh/zh-hant/es/pt/de-calculator.md`. 수치·표 행 개수는 EN과 동일(§13) — 이 파일은 «문안·형태소·제목» 근거만 담는다.

---

## 🔴 0. fr 회차의 «다른 점» 두 가지 — 먼저 읽어라

### 0-A. fr 코퍼스는 **6편뿐**이다 (de 43 · es 73 · pt 55 · ja 57 · zh 56 · ms/hi 21)

`lib/posts-fr/` = 규칙 클러스터 6편(`texas-holdem-rules-for-beginners` · `holdem-game-order` · `holdem-betting-actions` · `holdem-blind-meaning` · `holdem-all-in-rules` · `holdem-showdown-rules`). **확률·에퀴티·ICM·아웃츠·팟오즈·스타팅핸드·숏스택 글이 하나도 없다.**

두 가지가 뒤집힌다:

1. 🟢 **카니발 경계가 없다.** de는 `holdem-probability`가 «Wahrscheinlichkeiten **Tabelle**»를 소유해 «Rechner»만 가져갈 수 있었지만, fr은 **정보형 축 전부가 소유자 0**이다 — «probabilité poker» 880 · «classement des mains poker» 1000 · «icm poker» 480 · «équité poker» 110 · «outs poker» 30. 계산기 랜딩이 이 축들을 **통째로** 가져가도 형제와 부딪히지 않는다.
   🔴 단 **fr 블로그가 이 글들을 나중에 발행하면 재판정**이다(그때는 §1 규율대로 «개념 정의는 블로그, 계산은 랜딩»으로 되돌린다). 이 문단이 그 판정의 근거다 — 지우지 마라.
2. 🔴 **링크할 곳이 없다.** EN quickRef 6표의 `link` 슬러그(probability·equity·outs·pot-odds·short-stack·tournament-vs-cash-game)와 related 8슬러그(+icm·starting-hands-chart·implied-odds)가 **fr에 단 하나도 없다.** 없는 슬러그를 그대로 베끼면 `/fr/blog/holdem-icm` = **404**다.
   → 처방: `link`는 **옵션 키**이니 실존하지 않으면 **비운다**(창작·타 로케일 링크 금지). related는 fr 실존 6편 전수. 게이트는 §7-A에서 이 규율을 코드로 박았다.

### 0-B. 인바운드가 **1건**뿐 (de는 14건)

`lib/posts-fr/texas-holdem-rules-for-beginners.ts:444` 한 줄만 `/fr/calculator`를 가리킨다 — 앵커는 «calculatrice de probabilités poker». 🔴 이 앵커가 §3 판정에서 **교체 대상**이 됐다(아래). 같은 줄이 `/hand-chart`(로케일 없는 ko 도구)도 가리킨다 → 둘 다 **포스트 수정**이라 이번 회차 범위 밖(§8 queue).

---

## 1. 볼륨 (월 · DFS France · 2026-09-18)

🔴 **읽는 법**: 월별 시계열·CPC·입찰가가 **완전히 같은 쌍**은 Google Ads가 한 동의어군으로 묶은 것이다 — **볼륨으로는 그 둘을 못 가른다.** 아래 «≡»가 그 쌍이다. 가르는 근거는 §2 자동완성·§4 SERP뿐.

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **classement des mains poker** | **1,000** | 🟢 소유자 0(fr에 족보 글 없음) — 이번 회차 범위 밖이지만 **fr 최대 단일 축**. §8 발행 후보 |
| **probabilité poker ≡ proba poker** | **880** | 🟢 소유자 0 · 정보형 머리어 → **desc·H2가 받는다**(제목은 도구 명사 우선) |
| equilab | 880 | 브랜드(경쟁 도구) — 미채택 |
| **icm poker** | **480** | ✅ **제목 «ICM»** · de(110)의 **4.4배** · 12개월 390~720으로 안정. fr에서 ICM은 롱테일이 아니라 머리어다 |
| **calculateur poker ≡ calculatrice poker** | **390** | ✅ **자국어 머리어** · 12개월 210~390 · 🔴 둘의 선택은 §2·§4가 정한다(→ **calculateur**) |
| **poker odds calculator**(영문) | **260** | 🟠 자국어의 0.67배 — de(590:260 = 2.3배)와 **반대**다. 영문 토큰을 제목에 «녹일» 필요까지는 없고, desc·H2가 받는다 |
| poker calculator(영문) · poker odds · odds poker | 210 | 영문 축 — desc |
| **calcul probabilité poker** | **210** | ✅ 동사형이 명사형의 **21배**(«calculateur probabilité poker» 10) — 🔴 fr은 «계산기»보다 **«계산하다»**로 친다. H2·FAQ를 «Comment calculer…»로 |
| **spr poker** | **210** | 🟠 EN null · de 40인데 fr은 210 — 단 2026-05에 **1,000 스파이크**(이상치)가 섞여 있다. 12개월 중앙값은 ~140. 탭·표로 받되 제목 훅 금지(settled §1) |
| simulateur poker | 170 | 🟠 «simulateur» = 경쟁 표기(vmaths) · 자동완성 「simulateur cote poker」·「simulateur probabilité poker」 생존 → **desc 1회만** |
| **calculateur cote poker ≡ calcul cote poker** | **110** | ✅ **제목 «cotes du pot»의 근거** · 12개월 50~170 |
| **équité poker** | **110** | ✅ **Equity 탭 = «Équité»** — 영문 «equity poker» 50의 **2.2배**이고 시계열이 달라 **같은 군이 아니다**(§3-B) |
| pourcentage poker | 90 | desc 후보 |
| equity calculator poker ≡ poker equity calculator(영문) | 90 | 영문 축 — 병기 «équité (equity)»로 받는다 |
| cote poker ≡ cotes poker | 70 | 단수 «cote»가 지배형(§2) |
| probabilités poker · **calcul équité poker** | 70 | 🔴 «calcul **equity** poker» 10의 **7배** — 자국어 우세가 두 번째로 확인된다 |
| **tableau push or fold** | **70** | ✅ 🔴 **«push or fold»**(«push/fold» 아님 · §3-D) · «push fold poker» 10의 7배 |
| equity poker(영문) | 50 | |
| calculateur poker gratuit · calculateur de probabilité poker · calculateur/calcul pourcentage poker · fold equity poker · icm calculator · outs poker · push or fold poker | 30 | 탭·본문·FAQ |
| calculateur de cote poker · cote du pot poker · pot odds · pot odds poker · range push or fold · qui gagne au poker · bulle poker | 20 | |
| calculateur de poker · calculatrice de poker · calculateur poker en ligne/winamax · poker calculator who wins · texas holdem calculator · holdem calculator · calculateur/calculatrice probabilité poker · tableau probabilité poker · logiciel probabilité poker · calcul equity poker · equity poker definition · calculateur icm · icm poker calculator · calcul icm poker · icm deal · deal icm poker · chip chop poker · répartition gain poker · partage des gains poker · outs poker calculator · calcul des outs poker · cote du pot · calcul cote du pot poker · pot odds calculator · cotes implicites poker · implied odds poker · cote implicite poker · stack to pot ratio poker · push fold poker · tableau push or fold poker · nash push fold · push fold chart · quelle main gagne au poker · main de départ poker · aa vs kk | 10 | 롱테일 바닥값 — 본문·표·FAQ |
| m value poker | 0 | |
| **null**: calculateur poker main · calculatrice/calculateur texas holdem · calculatrice cote poker · probabilité poker preflop · probabilité main départ poker · calculateur chance poker · simulateur probabilité poker · **calculateur/calculatrice équité poker** · équité poker definition · **calculateur icm poker** · icm poker deal calculator · icm tournoi poker · répartition des gains tournoi poker · deal poker tournoi · calculer/compter ses outs poker · outs poker chart · tableau des outs poker · cotes du pot poker · calculateur pot odds · **règle du 4 et 2 poker · règle des 4 et 2 · règle 4 2 poker · astuce calcul poker · règle empirique poker · méthode rapide poker probabilité · calcul mental poker** · calculateur spr poker · **m de harrington poker · valeur m poker** · zone rouge poker harrington · tableau main de départ poker · bulle tournoi poker · calculateur de range poker · calculateur de variance poker | | 🔴 null ≠ 수요 없음 — §2 자동완성·§4 SERP로 교차했다 |

### 🔴 1-A. «de» 하나가 39배를 죽인다

| 표기 | 볼륨 |
|---|--:|
| calculateur poker | **390** |
| calculateur **de** poker | 10 |
| calculatrice **de** poker | 10 |
| calculatrice **de probabilités** poker(= 09-17 승인 CTA 축어) | ~10 |

→ **전치사 «de»를 넣은 형태는 전부 바닥**이다. 제목·H1의 머리어는 «Calculateur poker»(무전치사)로 간다. de가 «합성어로 녹인다»였다면 fr은 **«전치사를 빼서 붙인다»**가 같은 자리의 처방이다.

---

## 2. 자동완성 (hl=fr · gl=FR/BE/CH/CA 4지역 교차 · 74시드)

🟢 **74시드 전부 4지역 동일.** 프랑스·벨기에·스위스·퀘벡은 계산기 축에서 자동완성 차이가 **0**이다 → 권역 분리 근거 없음(de의 DACH 3국 결론과 동형이지만, de는 2시드가 순서 차이였고 fr은 **0**이다).

### 살아 있는 축
| 시드 | 확장(FR) | 대응 |
|---|---|---|
| **calculateur poker** | gratuit · winamax gratuit · en ligne · **main** · poker calculateur de probabilité · **cote** · **équité** · pourcentage · **icm** | 🔴 **머리어 확정** — 확장 9개 전부 우리 탭에 대응 |
| calculatrice poker | **calculatrice poker probabilité** · **calculateur poker gratuit** · **calculateur poker winamax gratuit** · calcul poker pourcentage · **calculateur poker en ligne** · **calculateur poker main** · calculatrice cote poker · omaha | 🔴 **8개 중 4개가 «calculateur»로 되돌아온다** — 구글이 calculatrice를 calculateur로 재조준한다 |
| calculateur de poker | de cote · de probabilité · de main · de cote gratuit · **de range** · de chance · **de blind** · **de variance** · **de structure** | range·variance·structure·blind = §7 미채택 수요 |
| calculatrice de poker | 3개뿐(de cote poker · poker probabilité) | 🔴 **거의 죽은 갈래** |
| **icm poker** | **def** · **calculator** · meaning · book · **deal** · trainer · ranges · **final table** · pdf | 🟢 **오염 0** · «def/meaning» = 정의형(fr 소유자 0 → FAQ가 받는다) |
| calculateur équité poker(← «calculateur equity poker» 시드의 1번 확장) | **calculateur équité poker** · calcul equity poker · **calcul équité poker préflop** · **calcul équité poker flop** · equity calculator poker range/online/omaha/plo/preflop | 🔴 **영문 시드를 넣어도 구글이 «équité»를 1번으로 올린다** |
| équité poker | **équité poker calcul** · **équité poker définition** · équité poker def · probabilité poker … | Equity 탭 · FAQ |
| outs poker | definition · **calculator** · meaning · **chart** · berechnen · probability · **clean outs** · table · trainer | 아웃츠 탭 · 3표 |
| pot odds poker | definition · **formula** · **calculator** · **chart** · meaning · quiz · trainer · pokerstars · explained | 팟오즈 탭 |
| cote du pot poker | **calcul cote du pot poker** | 🔴 확장 1개 — 자국어 팟오즈 축은 얇다(§4가 보완) |
| **tableau push or fold** | **expresso** · **nash** · **10bb** · **poker** · jennifear · yoh viral · **20bb** · **mtt** · table push or fold | 🔴 9/9가 «push **or** fold» · 「expresso」=프랑스 스핀앤고 브랜드(Winamax) |
| nash push fold | hu · **equilibrium chart** · poker · **chart** · calculator · chart pdf · **tableau nash push or fold** | Push/Fold 탭 |
| qui gagne au poker | **qui gagne en cas d'égalité** · **main qui gagne** · **savoir qui gagne** · carte qui gagne · **couleur ou suite qui gagne** · **site pour savoir qui gagne au poker** | 🟢 Equity·Hand Rank 탭 의도 — 「site pour savoir qui gagne」는 **도구를 찾는 문장** |
| poker calculator | odds · holdem lab · gratuit · pokerstars · android · app · **who wins** · online · omaha | 영문 축의 «who wins» = 같은 의도 |
| aa vs kk | **probability** · **pre flop odds** · preflop · **odds** · **equity** · poker odds · **percentage** | quickRef 1표 · FAQ |
| classement des mains poker | **ordre des mains poker** · ordre des mains holdem · classement des cartes · **préflop** · texas hold em · meilleures mains · ordre des cartes | §8 발행 후보(Hand Rank 탭이 일부만 받는다) |
| main de départ poker | **tableau main de départ poker** · meilleure · classement · pire · **probabilité** | 스타팅 탭 |
| bulle poker | **bulle tournoi poker** · **faire la bulle poker** | ICM 가이드 H2 |
| répartition des gains tournoi poker(← «partage des gains poker») | **répartition des gains tournoi poker** · **répartition gain poker** | 🔴 «partage»보다 **«répartition»**이 산다 |

### 🔴 2-A. 오염 4갈래 — 「시드마다 확장 10개가 내 업종인가」(§3-H 규율 그대로)

| 시드 | 오염 | 무엇에 덮였나 |
|---|---|---|
| **calculateur icm** / calculatrice icm | «calculateur icm **bmw**» · «calcul icm **militaire**» · «calcul icm **spital**» | 🔴 BMW 차량 코드 · 군 지수 · 루마니아어 «병원». **es의 IMC(BMI)와 다른 대상**이다 |
| **icm calculator**(영문) | «icm calculator **weight**/**poids**/**peso**/**kg**» | 🔴 체중 계열 — **여기서 BMI 오염이 나온다**(자국어 시드가 아니라 **영문 시드**에서) |
| **règle du 4 et 2** | «règle du 4 **21**» · «regle du 4 **2 1**» · «regle du 4 2 1 **pédiatrie**» · «regle du **4x20**» · «regle du 4 2 **couple**» | 🔴 **소아과 수액 4-2-1 규칙** + 연애 규칙. es의 의료 4-2-1 오염과 **동형** |
| **m de harrington** | «m harrington **jacket**» · «**spiderman**» · «m&t **bank** harrington de» · «tree surgery» | 🔴 **de와 똑같은 재킷 브랜드**(§3-H). 로케일 상수처럼 보이지만 실은 «Harrington»이 영어권 고유명사라 전 라틴 로케일 공통 |
| **tapis ou fold** | «tapis **foldable**» · «tapis foldable **bag**/**buttonscarves**» | 🔴 **접이식 매트**. 🔴 현재 fr 사전 `pushfold.sbShove` = «SB : tapis ou fold» — UI 문안이라 검색어는 아니지만 **제목·H2·탭 라벨엔 절대 금지** |

🟢 반대로 «icm poker»·«calculateur icm poker»·«icm deal poker»·«icm poker calculator»는 **확장이 전부 포커**다 → **처방은 늘 같다: 「poker」 앵커를 붙인다.**

### 🔴 2-B. «4와 2 규칙»의 프랑스어 정본 = **«règle du 2 et du 4»** (표기 «règle du 2/4»)

- 직역 계열 **전멸**: «règle des 4 et 2 poker» 0확장·null · «règle du 2 et 4 poker» 0확장·null · «multiplier ses outs par 2» 0확장 · «regle du 4 et 2»는 §2-A대로 **소아과 오염**.
- 🔴 **정본 표기도 볼륨은 null이다**(«regle du 2 et du 4» · «regle du 2 et du 4 poker» · «regle du 2 4 poker» 전부 null). 근거는 볼륨이 아니라 **두 경쟁 페이지의 축어 일치**(§4 추출):
  - cours-et-fiches.com H2 축어 = **«3. La règle du 2 et du 4»**
  - poker-builder.com title 축어 = **«Calculateur d'outs — Règle du 2/4»** · meta = «règle du 2 et du 4»
  - 두 사이트 다 «règle des 4 et 2»·«règle de 2 et 4» 표기를 **쓰지 않는다**.
- → **산문형 = «la règle du 2 et du 4»**(«du»를 두 번 반복하는 게 정착형) · **짧은 표기 = «règle du 2/4»**. **순서는 2가 먼저**(de의 «2→4»와 같은 결 · EN «4 and 2»와 반대).
- 「Faustregel」에 해당하는 «rule-of-thumb» 단어를 fr은 **따로 쓰지 않는다** — 규칙 이름 자체가 «règle du 2 et du 4»다. de와 다른 결이다.
- 🔴 **탭 안 버튼 라벨은 EN의 계산 순서(Rule of 4 / Rule of 2)를 지킨다** — 그건 «어느 스트리트냐»에 묶인 기능 라벨이라 검색어가 아니다. **바뀌는 것은 산문·FAQ·표의 «규칙 이름»뿐**이다(§13 수치 불변).

---

## 3. 판정 — 이름·표기 (🔴 근거를 지우지 마라)

### 3-A. 도구 명사 = **«Calculateur»** («Calculatrice» 아님)

볼륨은 둘을 **못 가른다**(≡390 · 시계열·CPC·입찰가 완전 동일). 세 갈래 독립 근거로 판정:

1. **자동완성**: «calculatrice poker» 확장 8개 중 **4개가 «calculateur…»로 되돌아온다**(구글의 재조준). 역방향은 0.
2. **전치사**: «calculatrice **de** poker» 10 · 확장 3개(거의 죽음) ↔ «calculateur poker» 390 · 확장 9개.
3. **SERP(§4)**: 프랑스어 도구 페이지 title **6/6이 «Calculateur»** — poktools «**Calculateur** équité et probabilité Poker» · calculatrice.now «**Calculateur** de Probabilités au Poker» · vmaths «**Calculateur** d'odds et probabilités» · poker-builder «**Calculateur** d'outs» · icmizer «**Calculateur** d'ICM de poker» · poktools «**Calculateur** Push or Fold». **title·H1에 «Calculatrice»를 쓰는 페이지 0건.**
   🪶 단 «Calculatrice»가 죽은 말은 아니다 — poktools **본문**은 «Découvrez d'autres **calculatrices** poker»·«**Calculatrice** Push or Fold»로 쓴다(자기 도구엔 남성형, 카탈로그·타 도구 지칭엔 여성형). **갈리는 축은 «도구 성격»이 아니라 «문장 위치»**다. 우리는 **title·H1·CTA를 «Calculateur»**로 두고 본문에서 억지로 바꾸지 않는다.

→ 🔴 **09-16에 승인된 CTA 앵커 «Calculatrice de probabilités poker»는 «분리»가 아니라 «교체»한다.** §3-E(zh-hant)는 CTA가 **볼륨 0**이라 제목에서 분리했지만, fr은 CTA 표기가 **시장 표기와 어긋나는 쪽**이다 — 분리해 두면 우리만 쓰는 말이 남는다. 그 앵커는 fr 코퍼스 **단 한 줄**(§0-B)에서 왔지 시장에서 온 게 아니다.
→ 바꾸는 자리: `dict.seo.title`·`dict.hero.h1` · `page.tsx` TITLE/OG/JSON-LD/breadcrumb · `components/intl-blog-post-client.tsx` `CALC_CTA_LABELS.fr`. **포스트 본문 앵커 1건은 §8 queue**(posting.mdc 절차).

### 3-B. Equity 탭 = **«Équité»** («Equity» 아님) — 🔴 현재 fr 사전 주석을 뒤집는다

현재 `app/fr/calculator/dict.ts:12` 주석은 *«equity»는 솔버 랜딩 관용을 따른다 — 블로그 코퍼스의 «équité»(1회)는 자연문 병기로만*이라고 적었다. **실측은 반대다.**

| 근거 | 값 |
|---|---|
| DFS(같은 군 아님 · 시계열 다름) | **équité poker 110** : equity poker 50 · **calcul équité poker 70** : calcul equity poker 10 |
| 자동완성 | 영문 시드 «calculateur equity poker»의 **1번 확장이 «calculateur équité poker»** · «calcul équité poker préflop/flop»도 생존 |
| SERP «equite poker» | #1 poktools «Calculateur **équité** et probabilité Poker» · #2 PokerStars «L'**équité** : de quoi s'agit-il…» · #3 tuto-poker «**Équité** d'une main contre une main» ← **우리 Equity 탭의 정의 그 자체** |
| PAA | «Qu'est-ce que l'**équité** au poker ?» |

→ 탭 라벨 = **«Équité»** · sub = **«Main contre main»**(tuto-poker #3 축어). 첫 등장(hero lead·guide 카드)은 **«équité (equity)» 병기** — fr 코퍼스가 이미 쓰는 병기형이다(`holdem-game-order.ts:309` «cotes du pot (pot odds)»).
🪶 `/fr/solver`는 «equity»를 쓴다(22회). **의도적으로 갈린 자리**다 — 솔버는 GTO 도구라 영어 관용이 강하고, 계산기는 일반 검색자용이다. 병기가 봉합한다. `docs/locale-intentional-diffs.md`에 등재.

### 3-C. 제목·설명

- **title** = `Calculateur poker — équité, cotes du pot et ICM` (46자 · 브랜드 포함 61 — EN과 동일 대역)
  - «Calculateur poker» 390(머리어) · «équité» 110 · «cote» 110 · «ICM» **480**. 🔴 fr은 ICM이 480이라 **뒤가 아니라 끝자리 강조**로 둔다.
  - 영문 «poker odds calculator» 260은 자국어의 0.67배라 **제목에 안 넣는다**(de 590:260과 반대 — §1).
- **description** ≤160 — «probabilité» 880 · «calcul…» 210 · 9도구 · 무가입.
- **H1** = «Calculateur poker» · **H1Sub** = «Équité, cotes du pot et ICM au même endroit».
- **breadcrumb** = «Calculateur».

### 3-D. push **or** fold · 기타 표기

| 자리 | 정본 | 근거 |
|---|---|---|
| Push/Fold 탭·표 | **«Push or Fold»**(영어 «or») | **§3-D-1 아래** |
| all-in | **«tapis»** | «tapis poker» **1,000** : «all in poker» 590 · fr 코퍼스 136회 · poktools 4/4 페이지가 «tapis»만 쓰고 «all-in» **0회**. 🔴 단 «tapis ou fold»는 §2-A 오염 — **탭 라벨·H2에 금지** |
| odds | **«cote»**(단수 지배) | «cote poker» ≡ «cotes poker» 70 · 자동완성 «calculatrice **cote** poker»·«calcul **cote du pot** poker» |
| pot odds | **«cotes du pot (pot odds)»** 병기 | 코퍼스 «cotes du pot» 5회 + `holdem-game-order.ts:309` 병기형 |
| 4·2 규칙 | **«la règle du 2 et du 4»** / 짧게 «règle du 2/4» | §2-B |
| 딜 분배 | **«répartition»** > «partage» | §2 자동완성. 🔴 «accord»·«chip chop»은 PokerStars ICM 글에서 **0회** — 프랑스어는 딜을 **«deal»(영어 그대로)**로 부른다(그 글 본문 축어 «Les négociations en table finale (**deals**)») |
| 칩 | **«jetons»** · 스택은 **«tapis»** | PokerStars ICM 글 = jetons 27 · stack 25 · tapis 4 / 우리 코퍼스·poktools는 tapis. **표 헤더는 PokerStars 축어 «Tapis (Jetons)»·«% des Jetons»**를 따른다 |
| register | **tu** | 코퍼스 6편 전부 |
| 숫자 | 천단위 공백 · 소수 쉼표 · % 앞 공백 | `docs/translation-terms-fr.md` · 게이트 `numL`(numberLocale `fr-FR`) |

#### 🔴 3-D-1. «push **or** fold» — 1위 경쟁사(PokerStars)의 표기가 볼륨 0이다

| 표기 | 볼륨 |
|---|--:|
| push **or** fold | **70** |
| tableau push **or** fold | **70** |
| push **ou** fold · push ou fold poker · tableau push ou fold | **null ×3** |

- 자동완성 «tableau push or fold» 확장 **9/9가 «or»**(expresso · nash · 10bb · jennifear · yoh viral · 20bb · mtt …).
- SERP top10도 전부 «push or fold»(kill-tilt · poker-academie · tuto-poker · poker-toolkit · clubpoker) · **poktools** title·H1 = «Calculateur **Push or Fold**».
- ↔ **PokerStars.fr은 «push ou fold»를 6회** 쓴다(ICM 글 관련링크 «Push ou fold : le guide complet sur l'all-in ou le fold») · «push or fold» 0회.
- → 🔴 **§3-H 교훈의 두 번째 실증**: 888poker.de의 «Quotenrechner»(0)와 **같은 유형**이다. 시장 1위가 자사 문체로 프랑스어화한 표기이지 검색어가 아니다. **경쟁 FAQ에서 문안을 빌릴 때도 그 명사를 따로 재라.**

---

## 4. SERP 구조 (DFS mobile · France · 2026-09-18)

| 쿼리 | 1~3위 | 읽은 것 |
|---|---|---|
| calculateur poker | pokerstars.fr · **poktools.com** · worldpokertour.com | 🔴 **poktools가 fr 계산기 축의 진짜 경쟁자** — «calculateur poker» #2 · «équité poker» **#1** · «calculateur cote poker» #2 · «icm poker» #7 · «calcul probabilité poker» #8 · «tableau push or fold» #9. **6쿼리 전부에 있다** |
| calcul probabilité poker | fr.pokerlistings.com · pokerstars.fr · clubpoker.net | 4위 cours-et-fiches «Cotes au Poker : Pot Odds, Outs et Probabilités (**Tableaux Complets**)» — **표가 차별점**인 시장 |
| icm poker | pokerstars.fr · fr.wikipedia.org · reddit | 4위 **icmizer** «Calculateur d'ICM de poker pour les offres de table finale» · 5위 pokernews «Comment Faire un Deal… ICM, **Chip Chop**» |
| équité poker | **poktools.com** · pokerstars.fr · tuto-poker.fr | #3 «**Équité d'une main contre une main**» = 우리 Equity 탭의 정의(§3-B) |
| calculateur cote poker | pokerstars.fr · poktools.com · cours-et-fiches.com | 6위 kelbet «Calcul de cote au poker : **3 formules simples**» |
| tableau push or fold | kill-tilt.fr · poker-academie.com · tuto-poker.fr | 10위 안에 «push **or** fold» 표기만(§3-D) |
| outs poker | fr.pokernews.com · pokerstars.fr · fr.pokerlistings.com | 5위 poker-builder «Calculateur d'outs — **Règle du 2/4**»(§2-B) |

**공통형 = 도구 + 정적 표 + (얕은) FAQ.** EN·de와 같다. 🟢 **fr SERP는 얇다** — 「calculateur poker」 top10에 App Store·Google Play·omnicalculator(영어)가 3자리를 먹는다. **표 6개 + FAQ 18 자체가 차별점**(pt 브라질과 같은 결).

### 4-A. 상위 페이지 원문 추출 (Playwright DOM · 09-18 · `tmp/fr-extract-{A,B}.json`)

| 페이지 | 단어 | 구조 | 우리가 쓴 축어 |
|---|--:|---|---|
| **poktools `/equitycalc`** | 1,089 | title «Calculateur équité et probabilité Poker» · h1 «**Simulateur** équité et probabilité Poker» · **H2 6개가 전부 질문형**(«Qu'est ce que l'équité au Poker?» · «Comment se calcule l'équité ?» · «Comment fonctionne le calculateur d'équité ?» · «Comment calculer sa probabilité de gagner durant la partie ?») · 아코디언 FAQ **0건**(질문형 H2가 FAQ 역할) | **«équité» 10회 : «equity» 1회**(§3-B 결정타) |
| poktools `/app-fastpok` | — | title «Calculateur **Push or Fold** - Ranges Poker» · h1 동일 | §3-D-1 |
| poktools `/app-risk-premium-calculator` | — | 입력 = `Stacks` / `Payouts` 2칸 · 🔴 **결과표는 로그인 뒤** — 열 이름 축어 **미확보**(에이전트가 지어내지 않고 보고) | — |
| **cours-et-fiches.com** | 3,478 | H2 11 + FAQ 7. **아웃츠 표 · 규칙 검산표 · 팟오즈 표 · 프리플롭 확률표 4개** | 🔴 **표 헤더 축어**(아래) |
| poker-builder.com | 851 | title «Calculateur d'outs — **Règle du 2/4**» · 프리셋 버튼형(«🃏 Du flop à la river (×4)» · «🎴 Du turn à la river (×2)») | §2-B · outs 버튼 라벨 |
| **pokerstars.fr ICM 가이드** | 4,487 | H2 10 + FAQ 6 · 표 3 | 🔴 **ICM 표 헤더 축어**(아래) |
| vmaths.fr | 361 | 순수 도구(정적 표 0) · label «Taille du pot (€)» · «Mise à suivre (€)» | 🔴 **통화가 €** — 우리는 $ 유지(코퍼스 관습 · §6) |
| poker-academie.com | — | 🔴 «push or fold 표» **단독 페이지가 없다**(포럼 스레드뿐 · 후보 URL 6개 전부 404) — 에이전트가 스킵하고 그대로 보고 | — |

**🔴 채택한 표 헤더 축어** (창작 금지 · 이 줄이 근거다)

- 아웃츠 표(cours-et-fiches): `Outs` · `Tirage type` · `% au turn` · `% à la river` · `% flop → river` · `Cote (flop → river)`
  → 🔴 프랑스어는 스트리트를 **«도착점»으로 말한다**: «% au turn» = 플롭→턴 · «% à la river» = 턴→리버. EN의 «Flop → turn» 화살표형과 **어순이 다르다**.
- 팟오즈 표(cours-et-fiches): `Mise adverse (% du pot)` · `Cote offerte` · `Equity minimum pour call`
  → 🪶 표 헤더에서는 **악상 없는 «Equity»**를 쓴다(본문은 «équité»). 우리는 본문·헤더 다 «équité»로 통일하되 hero에서 한 번 병기한다.
- ICM 표(pokerstars.fr): `Joueur` · `Tapis (Jetons)` · `% des Jetons` · `Valeur « Naïve » (Cash Game)` · `Valeur Réelle (ICM)`
  → 우리 `icm.th` = `Joueur` · `Jetons` · `% des jetons` · `Valeur ICM` · `% ICM` · `Écart` · `Chip chop`. **«Valeur ICM»은 PokerStars 축어와 일치**.
- 🔴 프랑스어 겹따옴표는 **guillemets « »**(PokerStars 표 헤더 축어 «Valeur « Naïve »»). 게이트 E항이 직선 `"`를 잡는다.

## 5. PAA (DFS · 모바일 · France)

- **outs poker**: 🟢 «**Comment calculer les outs au poker ?**» ← 계산기형. 나머지 8개는 무관(«Pourquoi je perds toujours au poker ?»·«syndrome du joueur»).
- **icm poker**: «**C'est quoi l'ICM ?**» · 나머지는 용어집 오염(itm·shove·flip·ante·tapis).
- **équité poker**: «**Qu'est-ce que l'équité au poker ?**» · 나머지 무관.
- 🔴 **calcul probabilité poker**: PAA 8개가 **전부 일반 수학**(«Comment calculer la probabilité P(A) ?»·«formule du PA»·«probabilité de a et b»). → **이 쿼리의 PAA는 근거로 쓰지 않는다**(메모리 「키워드 자릿수 함정」 동형 · 「계산기형 문항」만 살린다).

→ fr은 정보형 소유자가 0이라(§0-A) 이 정의형 PAA 3개를 **FAQ가 받아도 카니발이 아니다**. EN 17문항의 명제를 옮기되 질문 표기를 이 PAA 축어로 맞춘다.

## 6. 채택 (09-18)

- **기능**: Equity 탭(«Équité» / «Main contre main») · quickRef 6표 · FAQ 17 + fr 고유 1 · related 6(§7-A) · guide 카드 9 · hero chips 9.
- **fr 고유 FAQ 1문항** = **«Peut-on utiliser un calculateur de poker à la table ?»** — 근거 3종(§3-F/es·zh-hant 방법 그대로): ① 자동완성 «calculatrice autorisée poker» 0이지만 «poker calculator app»·«calculateur poker en ligne» 생존 ② SERP 경쟁 FAQ 0건(**공백**) ③ 1차 출처 = **TDA 2024 Rule 5-D**(«at the table» 전체로 넓어진 판 · zh-hant·es·pt·de와 동일 인용).
- 🔴 **§3-I 개정 7자리를 EN 정본으로 먼저 대조**(fr은 09-17 EN 경화가 안 실린 4로케일 중 하나) — 착수 전 필수.
- 🔴 **링크 없는 quickRef**: 6표 전부 `link`/`linkTail` 생략(§0-A). `icmGuide.deal.link`도 생략. `pushfold.shortStackLink`는 fr 실존 `holdem-all-in-rules`로 이미 대체돼 있다(유지).

## 7. 인계 — 다음 로케일이 그대로 쓴다

### 🔴 7-A. 게이트 `check:calc-parity`에 «링크 실존» 축을 신설했다 (fr 회차 산출)

fr의 게이트 첫 실행 59건 중 **9건이 오탐**이었다 — «related 8 vs 6» + «related slug 누락 ×8». 전건 원문 판정 결과 **fr 코퍼스가 6편이라 원리상 못 채우는 자리**였다(메모리 `gate-tuning-loop-is-the-work`).

고친 규칙(`scripts/calc-dict-parity.ts` C·F항):
1. related 개수 = **min(EN 8, 그 로케일 코퍼스 크기)** — 코퍼스가 8편 미만이면 «전수 링크»가 만점.
2. «related slug 누락»은 **그 슬러그가 그 로케일에 실존할 때만** 잡는다.
3. quickRef `link`·`icmGuide.deal.link`는 EN 슬러그가 로케일에 **없으면 «생략»이 정답** — 다른 슬러그를 창작하면 잡는다.
4. 🆕 **전 링크 슬러그 실존 검사**(related · quickRef · pushfold.shortStackLink · icmGuide.deal) — EN 슬러그를 그대로 베껴 **404를 배포하는 유형**을 닫는다. 🔴 이건 fr만의 문제가 아니다: 게이트는 지금까지 «개수»만 봤고 «그 슬러그가 존재하나»는 **아무도 안 봤다**(메모리 「게이트가 원리상 못 보는 자리를 알아 둬라」 동형).

셀프테스트 = `npm run check:calc-parity:selftest`.

### 7-B. 그 밖에 fr이 남긴 것

- 🔴 **볼륨이 «같은 군»이면 볼륨으로 판정하지 마라** — 월별 시계열·CPC·입찰가가 **완전히 같으면** Google Ads가 묶은 것이다(fr에서 5쌍: calculateur≡calculatrice · probabilité≡proba · calcul cote≡calculateur cote · cote≡cotes · equity calculator≡poker equity calculator). de는 이 쌍을 안 만났다. **판정은 자동완성 재조준 방향 + SERP title 표기**로.
- 🔴 **«영문 머리어 대 자국어»는 로케일마다 뒤집힌다** — de 590:260(영문 2.3배) ↔ **fr 260:390(자국어 1.5배)** ↔ pt 260:260. §3-H를 「영문이 크다」로 일반화하지 마라. **매번 잰다.**
- 🔴 **명사형보다 동사형이 클 수 있다** — «calcul probabilité poker» 210 : «calculateur probabilité poker» 10(21배). H2·FAQ를 «Comment calculer…»로 짜는 근거. 다음 로케일도 «calcul/calculer» 대 «calculateur»를 따로 재라.
- 🔴 **전치사 하나가 갈래를 죽인다**(fr «de» 39배 · §1-A). 합성어 언어(de)는 «녹이고», 전치사 언어(fr)는 **«뺀다»**. es·pt의 «de»는 반대로 살아 있었다(«calculadora de poker» 70~170) — **로케일 상수가 아니다.**
- 🔴 **BMI 오염은 «자국어 약어»가 아니라 «영문 시드»에서 올 수 있다** — fr «calculateur icm»은 BMW·군·병원으로 샜고, **«icm calculator»(영문)가 weight/poids/peso/kg**로 샜다. es(IMC)·pt(ICMS)만 보고 «자국어 약어만 확인»하면 놓친다.
- 🔴 **«경쟁사 1위 표기 ≠ 검색어»가 두 번째로 실증됐다**(§3-D-1) — de 888poker의 «Quotenrechner»(0), fr PokerStars의 «push **ou** fold»(null ×3 ↔ «push **or** fold» 70). 🔴 이번엔 **자국어화가 함정**이었다: 프랑스어 «ou»로 옮긴 쪽이 죽고 영어 «or»가 산다. **«자국어가 늘 이긴다»로 일반화하지 마라** — 같은 회차 안에서 équité(자국어 승) ↔ push **or** fold(영어 승)가 **반대로** 나왔다. 축은 언어가 아니라 **그 구(句)가 시장에 정착한 형태**다.
- 🔴 **«Harrington» 오염은 라틴 로케일 공통일 가능성이 높다** — de «harrington m»=재킷 · fr «m de harrington»=재킷·스파이더맨·은행. 다음 로케일은 **확인만 하고 넘어가도 된다**(M 탭 이름에 인명을 넣지 않는다).
- 🪶 **코퍼스가 얇은 로케일의 «형제 소유»는 «없음»이 정답일 수 있다** — fr은 정보형 축 전부 소유자 0이라 카니발 판정 자체가 불필요했다. 🔴 단 **그 사실을 뱅크에 적어 둬야** 나중에 글이 생겼을 때 되돌린다(§0-A).
- 🪶 미채택 수요(자동완성): «calculateur de **range**» · «de **variance**» · «de **structure**» · «de **blind**» · «poker calculator **omaha**/plo» — 전부 미구현. `equilab` 880은 경쟁 소프트 브랜드.
