# fr-gloss 브리프 — 🅵 용어 클러스터 6편 (A 구간 산출 · 2026-10-07)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5(fr 치환 = `docs/fr-cluster-plan.md` §5) · 용어·소유 정본 = `docs/fr-cluster-plan.md` §3 · SERP 근거 = `docs/keyword-bank/fr-serp/L-F-gloss.md`(다시 조사하지 않았다 · 계획 §2-①).
> EN 기준 해시 `a54b5f3d` · EN 6편 `updated` 전부 **2026-10-06** → fr `masterUpdated: "2026-10-06"`(헤드가 머지 때 델타 스윕 후 갱신 · §2-⑤).
> 🟡 기준 해시 뒤 EN 변경 1건: `holdem-cooler` L102 «Cold deck» 문장(058a9718 · MA-350 · updated 불변). B는 **현재 브랜치의 EN 파일**(그 수정 포함)을 골격으로 쓴다.

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)**. 🔴 웹·MCP·다른 로케일 파일·다른 fr 레인 파일은 B에서 열지 않는다. 사실·수치·카드의 출처는 EN 축어뿐.
- **순서**(ms §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-fr/holdem-blind-meaning.ts`의 필드 모양(라벨은 아래 §1-A가 이긴다). 필드 = slug · title · seoTitle · desc · tldr · category(`"glossary"` — EN 값 그대로) · date/updated(= 집필일) · masterUpdated(`"2026-10-06"`) · keepImagesInBody: true · readTime(`"N min"` — EN 숫자 그대로) · emoji(EN 그대로) · image(EN 경로 그대로) · imageAlt(프랑스어) · tags · content.
- 🔴 **content에 히어로 이미지를 넣지 않는다**(렌더러가 그린다). 본문 이미지 경로는 EN 그대로, alt·캡션만 프랑스어.
- **등록**: `lib/posts-fr/index.ts`의 `// [fr-gloss import 시작]`~`끝` · `// [fr-gloss 배열 시작]`~`끝` 칸에만. 변수명 `holdemGlossary` · `holdemBadBeat` · `holdemCooler` · `holdemFish` · `holdemRake` · `holdemStraddle`.
- **화자**: 1인칭 단수 · 작성자 일치 남성형(«je me suis figé» 코퍼스 관행) · 독자 **tu**(명령형 훅 «Regarde… / Compare… / Essaie…»). vous 금지.

## 1. 공통 결정 (6편 전부)

### 1-A. 고정문 (계획 §3-A ① · 판단하지 말고 그대로)

| 자리 | EN | fr 정본 |
|---|---|---|
| 요약 H3 (stripe 바로 위 · 6편 L25) | ### The X, at a glance | `### En bref` (선례 `holdem-betting-actions` L36) |
| 직답 블록 | (EN 6편엔 `Quick answer` 블록 0개 — 직답은 각 H2 첫 문단의 **굵은 첫 문장**) | 형태 그대로 옮긴다. 블록을 새로 넣는다면 라벨은 `> **Réponse rapide**`뿐 |
| readnext | :::readnext[Keep reading] | `:::readnext[À lire ensuite]` |
| FAQ H2 | ## FAQ | `## FAQ` (문항 = `**Q. …**` + 빈 줄 + `A. …` 쌍 그대로) |
| 마무리 H2 | ## The 3 Things to Remember (5편) | `## À retenir` |
| glossary 마무리 | ## Where to Go Next | `## Par où continuer ?` (레인 신규 — 신규 용어 표) |
| 관련 글 H2 | ## Related Posts | `## Articles liés` |
| readTime | "N min" | `"N min"` (숫자 EN 그대로) |
| 하이라이트 | `==…==` · `==g:…==` | 같은 문장에 유지(편마다 g 1곳) |
| 디렉티브 | :::stripe · :::steps · :::compare · :::pull · :::card | 줄 구조·구분자(`|`) 그대로, 셀 텍스트만 프랑스어 |

### 1-B. 조판 (계획 §3-A ②)
- 숫자: 천 단위 **공백**(`1 326` · `$2 000`) · 소수 **쉼표**(`2,5` · `11,8 %`) · **% 앞 공백**(`80 %`) · 범위 `40–70 %` · 비율 `4:1` → `4:1`(그대로) · «4-to-1» → «4 contre 1». 🔴 §13 **값**은 EN 축어, 구분자만 바꾼다.
- 화폐 = **`$` 앞붙임**(`$1/$2` · `$4` · `$100 + $9`) — €로 바꾸지 않는다.
- 인용 `« … »`(안쪽 공백) · 아포스트로피 곧은 `'` · `Texas Hold'em`.
- 카드 = 영어 랭크 문자 + 무늬 기호 그대로(`A♠A♥` · `7♣7♦` · `J♦ 7♥ 2♣`) — R/D/V 금지. 풀어 쓸 때 «paire d'as», «paire de rois», «brelan de sept».
- `préflop`(붙여 씀) · `-EV` 그대로.

### 1-C. 용어 (계획 §3-A ③④ + 레인 결정 — 레인 결정분은 진행 파일 «신규 용어»에 올렸다)

| EN | fr 본문 | 규칙 |
|---|---|---|
| bad beat | **bad beat** | 첫 등장 «bad beat (sale coup)» (§3-A) · 이후 bad beat. 복수 «des bad beats» |
| straddle | **straddle** | 첫 등장 «straddle (overblind)» (§3-A). 🔴 «option»을 straddle의 이름으로 쓰지 마라 — 프랑스어 «option»은 BB(와 straddler)의 «relancer할 권리»(EN «check their option»)다. 그 뜻으로는 «option» 사용 |
| cooler | **cooler** | 영어 그대로 · 동사형 «coolered» = «se faire cooler» / «prendre un cooler»(따옴표 인용 1회 «"coolered"») |
| fish · shark · whale · nit · donkey(donk) · calling station · reg · maniac · LAG/TAG · grinder | **영어 그대로** | 첫 등장에 프랑스어 뜻 1회: fish «(littéralement « poisson »)» · shark «(« requin »)» · whale «(« baleine »)». 🔴 «poisson/requin/pigeon»을 용어로 채택하지 마라(검색 의도 0 — L-F §2-1) |
| suckout / suck out | **suckout** · «se faire aspirer»(구어) 허용 | 첫 등장 «suckout (la carte miracle de l'adversaire)» |
| favorite / underdog | **favori** / **outsider** | 수치 문장은 «favori à 80 %» |
| variance · tilt · bankroll · heads-up · cash game · buy-in | 영어 그대로(variance는 프랑스어와 같음) | — |
| rake | **rake** | 첫 등장 «rake (la commission prélevée par la salle)» · «prélèvement» 병기 1회 (L-F §7-3) |
| rake cap | **plafond (cap)** → 이후 «plafond» · «rake plafonné» | 경쟁 «rake capé»는 쓰지 않는다 |
| time charge | **time charge (forfait horaire)** 첫 등장 → 이후 time charge | — |
| no flop, no drop · dead drop | 영어 그대로 + 풀이(«no flop, no drop » : pas de flop, pas de rake) | — |
| tournament fee / juice / vig | **frais d'inscription** (de la salle) · «juice»/«vig» 인용 | — |
| rakeback | **rakeback** | 🔴 룸 추천·비교·가입 유도 금지 |
| cardroom · house · casino | **salle de poker / la salle** · la maison(문맥) · casino | — |
| pocket pair · overpair · set · trips | **paire servie** · **overpair (paire supérieure au board)** · **brelan servi (set)** · **brelan (trips)** | §3-A: set = «brelan servi». «set over set» = «brelan servi contre brelan servi supérieur (set over set)» 첫 등장 |
| quads · straight flush · royal flush · full house · flush · straight | carré · quinte flush · quinte flush royale (royal flush) · full · couleur · **quinte** | 🔴 본문에 «suite» 금지(카피만 허용) |
| stakes ($1/$2) | «une partie $1/$2» · «les limites» | — |
| -EV / EV | -EV · EV (espérance) 첫 등장 | — |
| dealer · button | donneur · bouton (BTN) | — |
| blinds · SB · BB · ante | blinde · petite blinde (SB) · grosse blinde (BB) · ante | — |
| check · call · raise · fold · all-in | checker · suivre · relancer · se coucher · faire tapis / tapis | — |
| stack | stack (🔴 «tapis»는 all-in 뜻으로만) | — |
| showdown · muck | abattage (첫 등장 «l'abattage (showdown)») · jeter ses cartes (muck) | — |
| turn · river | la turn · la river (첫 등장 «la turn (le tournant)» · «la river (la rivière)») | — |
| equity · range · outs · draw · pot odds | équité · la range · outs · tirage · cotes du pot | — |

### 1-D. 링크 — **편차 0**
6편의 EN 내부링크 대상은 전부 계획 §1의 51편 안이다(대회 가이드 5편으로 가는 링크 0). → **EN 링크를 전부 그대로** `/fr/blog/<slug>`로 건다. 썸네일 인자 `"thumb:/images/…"`도 그대로. 앵커 텍스트만 프랑스어.
- 외부 링크 1건: straddle L126 `https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/` — URL 그대로.
- 페이지 내 앵커 `(#…)`·`<a id=…>`: 6편 모두 없음(해부 스크립트).
- **도구 링크(현지 추가 · 계획 §3-A ⑤ 앵커 정본)**: glossary 첫 화면에 `/fr/glossary` 1개(필수 — 각 편 절 참고). 그 밖의 추가 링크는 편 절에 적은 것만.

### 1-E. 관련 글 카드 · readnext
- `## Articles liés` 아래 HTML 그리드: 구조·스타일·`onmouseover`/`onmouseout` 문자열 **한 글자도 바꾸지 마라.** href만 `/fr/blog/…`, 카드 안 라벨·제목·설명 3줄만 프랑스어.
- 카드 라벨(레인 결정): `Glossary` = **Jargon** · `Rules` = **Règles** · `Hand Rankings` = **Mains** · `Strategy` = **Stratégie** · `Odds &amp; Math` = **Cotes &amp; maths** · `Tournament` = **Tournoi**.
- 본문 강조 박스 `<div style="background:rgba(255,248,210,0.10)…">`(표를 감싸는 것): 여는·닫는 줄 축어 · 빈 줄 위치 그대로.
- readnext 카드 제목은 짧은 프랑스어 라벨(대상 글 title이 아님 — EN도 짧은 라벨). 이미지 경로 그대로.

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩(굵은 직답 안 강조는 `« »`나 `==…==`) · tldr 안 마크다운 · «guide complet / tout savoir / de A à Z» · slug·이미지 변경 · vous · 본문 «suite» · R/D/V 카드 · € 환산 · **프랑스 카지노·클럽·대회·금액 창작**(경험담의 장소·금액은 EN에 있는 것만) · **법·과세·합법성 문장 추가**(Légifrance 2 %·1 € 포함 — 계획 §3-B · `legality-ban-scope`) · 룸 이름 추가(EN에 있는 GGPoker·WSOP·GTO Wizard만 EN 문맥 그대로) · 트래커·HUD·앱 소개 · 계획 §3-B 금지 헤드(각 편 «소유표»).

### 1-G. 카피 판정 경위
«확정 카피»는 Fable 서브 1회(입력 = EN 메타·H2·FAQ + 키워드·PAA 축어(L-F) + §3-A 고정문·용어 + §3-B 금지 헤드 + posting.mdc «SEO 카피» 규칙)의 출력을 **Opus가 글자 수(node 코드포인트)를 재고 손본 것**이다. 손본 자리는 각 편 «확정 카피» 끝에 적었다. 🔴 **B·C는 카피를 바꾸지 않는다**(계획 §2-⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

---

## holdem-glossary — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "Texas Hold'em Glossary: Every Poker Term You'll Hear at the Table" (65자)
- seoTitle: "From the Nuts to the Fish — The Texas Hold'em Glossary" (54자)
- desc: "Every poker term you'll hear at the table, explained simply and grouped by situation: betting, positions, hands, slang, and the terms people always mix up." (155자)
- tldr: "This is a plain-English glossary of the poker terms that actually come up in a Texas Hold'em game, grouped by how you'll meet them — betting actions, positions, hands and board, player types, money, and table situations. Start with the 'most confused' terms below (check vs call, set vs trips, cooler vs bad beat), then browse by category. Terms with a deeper guide link straight to it." (386자)
- category: "glossary" (8자)
- readTime: "12 min" (6자)
- emoji: "📖" (1자)
- image: "/images/holdem-glossary-hero.webp" (33자)
- imageAlt: "A Texas Hold'em table with chips, the dealer button, and community cards spread on green felt, representing the language of poker" (129자)
- date: "2026-07-05" (10자)
- updated: "2026-10-06" (10자)
- tags: ["poker terms", "poker glossary", "texas holdem terms", "poker slang", "poker terminology", "poker vocabulary", "poker words", "what does it mean in poker"]

### 구조 (EN L## · 축어 — 이미지 경로 그대로, alt·캡션만 프랑스어)
L25 ### The glossary, at a glance
L27 :::stripe
L32 :::
L36 ## The Terms People Mix Up Most
L57 ![A six-tile map of poker vocabulary on dark green felt, each tile with a gold icon — Actions, Positions, Hands, Players, Money, and Slang](/images/holdem-glossary-categories.webp "The six groups this glossary is organized into — browse by the situation you're…
L59 ## Betting Actions
L92 ## Positions
L116 ## Hands & the Board
L118 ![Infographic of a gold dealer button and two face-down hole cards with a K♦ 7♣ 2♠ flop on green felt](/images/holdem-button-dealer-board.webp "The board and your hole cards combine into your best five-card hand — most poker vocabulary describes exactly how")
L158 ## Player Types & Slang
L160 ![Five poker player-type tiles — fish, whale, donk, nit and shark — each marked with the symbol that defines it](/images/holdem-glossary-player-types.webp "Every table is a mix of types — learning the slang tells you who to target and who to avoid")
L184 ## Money & the Game
L219 ## Situations, Stats & Etiquette
L252 :::readnext[Keep reading]
L255 :::
L257 ## FAQ
L259 **Q. What are the most common poker terms every beginner should know?**
L263 **Q. What does UTG (under the gun) mean in poker?**
L267 **Q. What is the difference between a check and a call?**
L271 **Q. What is the difference between a set and trips?**
L275 **Q. What is the difference between a cooler and a bad beat?**
L279 **Q. What is a 3-bet in poker, and why isn't the first raise the "1-bet"?**
L283 **Q. What does "the nuts" mean in poker?**
L287 **Q. What do VPIP and PFR mean in poker stats?**
L293 ## Where to Go Next
L306 ## Related Posts

- 마크다운 표 7개 · 강조 박스(`<div style="background:rgba(255,248,210…">`) L40 L63 L96 L122 L164 L188 L223
- 관련 글 카드(href → `/fr/blog/…` · 라벨/제목/설명만 프랑스어):
  - L309   <a href="/en/blog/holdem-fish" …> — Glossary / What Is a Fish? / The player types, decoded
  - L314   <a href="/en/blog/holdem-cooler" …> — Glossary / Cooler vs Bad Beat / The two losses everyone confuses
  - L319   <a href="/en/blog/holdem-betting-actions" …> — Rules / Betting Actions / Check, bet, call, raise, fold
  - L324   <a href="/en/blog/holdem-hand-rankings" …> — Hand Rankings / What Beats What / The full hand ranking order

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href)
- /en/blog/holdem-cooler : 19*,47,149,300,314h
- /en/blog/holdem-fish : 21*,162,300,309h
- /en/blog/holdem-bad-beat : 47,150,213,300
- /en/blog/holdem-pot-odds : 49,233,299
- /en/blog/holdem-betting-actions : 61*,297,319h
- /en/blog/holdem-all-in-rules : 72
- /en/blog/holdem-position-play : 94
- /en/blog/holdem-positions : 112*
- /en/blog/holdem-game-order : 120
- /en/blog/holdem-tiebreak-rules : 130,298
- /en/blog/holdem-outs : 141,299
- /en/blog/holdem-hand-rankings : 154,298,324h
- /en/blog/holdem-tournament-vs-cash-game : 186*
- /en/blog/holdem-blind-meaning : 192
- /en/blog/holdem-rake : 199,300
- /en/blog/holdem-straddle : 201,300
- /en/blog/holdem-showdown-rules : 227
- /en/blog/holdem-split-pot-rules : 229
- /en/blog/holdem-probability : 235,299
- /en/blog/texas-holdem-rules-for-beginners : 297

### 소유표 (계획 §3-B)
- **주인인 검색어**: jargon poker 20 · langage poker 50 · expression(s) poker 50 · argot poker(자동완성) — 각도 = «영어→프랑스어 대응 + 헷갈리는 말».
- 🔴 **쓰면 안 되는 헤드(seoTitle·H1·tags)**: lexique · termes · vocabulaire(«vocabulaire poker anglais» 포함) · glossaire(같은 의도 묶음 — 레인 보수 해석 · 헤드 요청에 올림) → 주인 `/fr/glossary`(§3-B ①). **nuts**는 seoTitle 금지(§3-B ④ 주인 = holdem-reading-the-board).
- **처리**: ① 첫 화면(EN L21 둘째 문단)에 `[lexique du poker](/fr/glossary)` 1개(앵커 정본 §3-A ⑤ · tr 0개 실수 방지) ② 표 행 «**The nuts**»(L129) 정의 1줄 그대로 + 끝에 `[lire le tableau](/fr/blog/holdem-reading-the-board)`류 앵커 1개(현지 추가) ③ FAQ «the nuts»(L283) 답 끝에도 같은 글로 앵커 1 ④ H2 본문에서 «lexique/termes/vocabulaire»를 쓰는 것은 허용(제목·태그만 금지).

### 키워드 (0-1·0-2 실측 · DataForSEO 2250/fr · 2026-10-07 · 재조사 안 함)
| 검색어 | 월(FR) | 자리 |
|---|---:|---|
| termes poker en français | 70 | H2/본문 «en français» 각도(«termes»는 태그·H1·seoTitle 금지) |
| langage poker · expression poker | 50 · 50 | seoTitle·H1·desc·tags |
| vocabulaire poker anglais | 30 | 본문(영→불 대응) · 태그 금지 |
| jargon poker | 20 | seoTitle·tags |
| «que veut dire * au poker»(자동완성 축어: limper · utg · check · fold · itm · tapis · icm · ante · shove · raise · flat · call · parole) | — | FAQ 문형 · 표 행 정의 첫 문장 |
| 🔴 버림 | | lexique/termes/vocabulaire 260/260/210(도구 몫) · poker face 140(가요) · TNT 320·ITM 170(EN에 없음 → EN-먼저 후보) |

### 현지 SERP (L-F-gloss §3·§4 축어)
- 1페이지 = 사전형·A~Z 목록(yourpokerdream 130용어 · pokerstrategy·clubpoker 단어 페이지). **영→불 대응표 페이지 0/10**(«termes poker en français»).
- PAA 축어: «Comment appelle-t-on un joueur de poker ?» · «C'est quoi TNT poker ?» · «Que signifie ITM au poker ?» · «Comment s'appellent les cartes au poker ?» · «Comment dit-on "poker" en français ?»
- **우리가 더 줄 것 3가지**: ① 표 115행 전부 **영어 용어 + 프랑스어 대응**(§1-C·§3-A에 있는 대응만 — 예 «**Fold** (se coucher)») ② «헷갈리는 말» 절(check vs call · set vs trips · cooler vs bad beat — 경쟁 FAQ와 일치하나 우리는 표로) ③ 1인칭 «테이블이 외국어 같았다» 경험담(경쟁 0).

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (76자): Jargon du poker : les expressions à connaître à table, traduites en français

**seoTitle** (58자): Une autre langue à table — langage et expressions du poker

**desc** (148자): À ta première partie, la table parlait une autre langue ? Le langage du poker expliqué simplement, avec l'équivalent français, classé par situation.

**tldr** (514자 · 평문):
Voici, en français simple, les mots du poker que tu entends vraiment dans une partie de Texas Hold'em, classés selon la façon dont tu les rencontres : actions de mise, positions, mains et board, types de joueurs, argent, situations de table. Commence par les mots que tout le monde confond (check et call, set et trips, cooler et bad beat), puis parcours les catégories. Chaque mot est donné avec son équivalent français quand il en existe un, et ceux qui méritent un article à part renvoient directement vers lui.

**tags** (7): ["jargon poker","langage poker","expression poker","argot poker","poker anglais francais","expressions poker anglais","jargon poker texas holdem"]

**H2 세트** (EN → fr):
1. ### En bref ← The glossary, at a glance
2. ## Quels sont les mots du poker qu'on confond le plus ? ← The Terms People Mix Up Most
3. ## Comment dit-on les termes du poker en français ? ← **현지 추가**(2 바로 뒤 · 짧은 단락 + 대응 표 ≤10행). 🔴 대응어는 §1-C·계획 §3-A에 있는 것만(Fold → se coucher · All-in → tapis · Showdown → abattage · Blind → blinde · Call → suivre · Raise → relancer · Check → checker · Dealer → donneur · Turn/River → la turn/la river · Straight → quinte). 역사·어원 주장 금지(«왜 영어인가»를 설명하지 않는다). `/fr/glossary` 앵커는 도입부 1개 — 여기서 반복하지 않는다
4. ## Que veut dire check, call, raise ou fold au poker ? ← Betting Actions
5. ## Comment s'appellent les positions autour de la table ? ← Positions
6. ## Comment s'appellent les mains et les cartes du board au poker ? ← Hands & the Board
7. ## Fish, shark, nit, reg : que veulent dire ces surnoms de joueurs ? ← Player Types & Slang (→ fish 글 앵커)
8. ## Rake, straddle, buy-in, stack : les mots de l'argent au poker ← Money & the Game
9. ## Que veulent dire tilt, VPIP ou run it twice au poker ? ← Situations, Stats & Etiquette
10. ## FAQ · ## Par où continuer ? · ## Articles liés
(내용 H2 8개 중 질문형 7 = 88 %)

**FAQ**:
1. Quels sont les termes de poker à connaître quand on débute ? ← What are the most common poker terms every beginner should know?
2. Que veut dire UTG (under the gun) au poker ? ← What does UTG mean
3. Quelle est la différence entre check et call au poker ? ← check vs call
4. Quelle est la différence entre un set et un trips au poker ? ← set vs trips
5. Quelle est la différence entre un cooler et un bad beat ? ← cooler vs bad beat
6. C'est quoi un 3-bet au poker, et pourquoi la première relance n'est pas un « 1-bet » ? ← 3-bet
7. Que veut dire « les nuts » au poker ? ← the nuts (답 끝 → `/fr/blog/holdem-reading-the-board` 앵커)
8. Que signifient VPIP et PFR dans les stats de poker ? ← VPIP/PFR

**흡수**:
- langage poker 50 · expression poker 50 → seoTitle · tags / jargon poker 20 · argot poker → H1 · tags
- termes poker en français 70 → H2 #3(현지 추가) — seoTitle·H1·tags에는 없음
- vocabulaire poker anglais 30 → tags «poker anglais francais»·«expressions poker anglais»(«vocabulaire» 단어는 어디에도 안 씀)
- «que veut dire check / call / raise / fold / tapis au poker» → H2 #4 + 표 행 / «Comment s'appellent les cartes au poker ?» → H2 #6 형태
- nuts → FAQ 7만(seoTitle 금지 준수)

**손본 자리**: Fable 원안 → Opus 수정 4곳: ① tags «utg poker»·«3bet poker»·«texas holdem» 삭제(utg = holdem-positions 소유 §3-B ② · 3-bet = holdem-3bet 몫) → «expressions poker anglais»·«jargon poker texas holdem» ② H2 #5 «Que veut dire UTG au poker ? Les positions…» → 좌석명 헤드 회피 ③ H2 #7 «Comment appelle-t-on les joueurs au poker ?…»가 fish 글 Zoo H2와 같은 문장 → 개명 ④ FAQ 9 «Comment appelle-t-on un joueur de poker ?»(PAA) 삭제 — 레인 배정상 fish가 주인(FAQ 8 = EN 수)

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L49 | **Pot odds vs Implied odds** | [Pot odds](/en/blog/holdem-pot-odds) count only chips **in the pot now**; implied odds add what you'll **win later**. |
L102 | **Big blind (BB)** | The larger of the two blinds; stakes are named by the blind sizes ($1/$2), and one big blind is the standard unit for measuring stacks. |
L118 ![Infographic of a gold dealer button and two face-down hole cards with a K♦ 7♣ 2♠ flop on green felt](/images/holdem-button-dealer-board.webp "The board and your hole cards combine into your best five-card hand — most poker vocabulary describes exactly how")
L146 | **Suited connectors** | Two consecutive same-suit cards (e.g. 8♥9♥). |
L233 | **Pot odds** | The ratio of the pot to the cost of a call — [how to calculate](/en/blog/holdem-pot-odds). |
L234 | **Implied odds** | Pot odds adjusted for the chips you expect to win on later streets. |
L299 - **The math:** [pot odds](/en/blog/holdem-pot-odds), [outs](/en/blog/holdem-outs), and [probability](/en/blog/holdem-probability).

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
- L19 (EN 축어는 아래 해부 «FIRST PERSON»). 프랑스 독자 맥락 = «라이브 첫 판에서 영어 은어가 쏟아졌다» 그대로 — 장소·스테이크를 새로 만들지 마라.
L19 The first time I sat in a live game, the table might as well have been speaking another language. Someone was "under the gun," another guy "three-bet the cutoff," the dealer asked if I wanted to "run it twice," and when I lost with kings I was told it "wasn't even a bad beat, just a [cooler](/en/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")." I nodded like I understood. I did not.

### 하지 말 것
- 🔴 **표 115행의 행 수·순서 그대로.** 용어 머리 = **영어 그대로** + (§1-C/§3-A에 대응어가 있을 때만) 괄호 프랑스어: 예 `**Fold** (se coucher)` · `**All-in** (tapis)` · `**Showdown** (abattage)` · `**Blind** (blinde)`. 대응어가 없으면 머리는 영어만, 설명 열에서 풀어 쓴다. EN 머리에 이미 있는 괄호(`Button (BTN)` 등)는 유지하고 프랑스어를 뒤에 덧붙이지 마라(한 머리에 괄호 1개).
- EN에 없는 용어(TNT · ITM · shove 단독 · squeeze · flat · poker face)를 **추가하지 마라** → 진행 파일 «EN-먼저 후보»에 올렸다.
- «Comment appelle-t-on un joueur de poker ?»는 **fish 글이 주인**(레인 배정) — glossary는 같은 문장의 FAQ를 만들지 말고 Player Types 절에서 fish로 앵커.
- 다른 글 몫 항목(all-in·blind·showdown·hand rankings·positions)은 EN처럼 1~2줄 정의 + 링크로 끝낸다.

---

## holdem-bad-beat — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "What Is a Bad Beat in Poker? When Being the Favorite Isn't Enough" (65자)
- seoTitle: "You Were 80% to Win — and Lost. What Is a Bad Beat?" (51자)
- desc: "A bad beat is losing as a big favorite when your opponent gets lucky. How it differs from a cooler, the bad beat jackpot, and why it's usually a good sign." (155자)
- tldr: "A bad beat is when you get your money in as a heavy favorite — usually 80% or more — and lose because your opponent hits a lucky card to 'suck out' on you. Unlike a cooler in the strict sense, you were ahead when the money went in; the deck just betrayed you at the end. It stings, but a steady stream of bad beats usually means opponents are putting money in behind — the kind of game you want to be in." (404자)
- category: "glossary" (8자)
- readTime: "11 min" (6자)
- emoji: "💔" (1자)
- image: "/images/holdem-bad-beat-hero.webp" (33자)
- imageAlt: "A poker player clutching his head in anguish after losing a big pot he was a huge favorite to win, his chips stacked on the green felt" (134자)
- date: "2026-07-05" (10자)
- updated: "2026-10-06" (10자)
- tags: ["bad beat", "what is a bad beat in poker", "bad beat vs cooler", "bad beat jackpot", "poker suckout", "getting your money in good", "how to deal with bad beats"]

### 구조 (EN L## · 축어 — 이미지 경로 그대로, alt·캡션만 프랑스어)
L25 ### The bad beat, at a glance
L27 :::stripe
L32 :::
L36 ## What Is a Bad Beat in Poker?
L44 ## Bad Beat vs Cooler: The Difference That Matters
L46 ![Infographic splitting a bad beat from a cooler — aces against sevens that improve to a set, beside kings running into aces that never had to improve](/images/holdem-bad-beat-litmus.webp "The strict split: the aces were ahead going in and got outdrawn — a bad…
L66 ## How Big a Favorite Makes It a "Real" Bad Beat?
L68 ![A simple three-step visual of a bad beat — an 80 percent favorite, then a suckout on the river, then the loss](/images/holdem-bad-beat-suckout.webp "The shape of a bad beat: you're an ~80% favorite, the river delivers a suckout, and the hand you should have …
L80 ## Classic Bad Beat Examples (With the Odds)
L82 ![Infographic of pocket aces at about 80 percent against pocket sevens at about 20 percent, the four-to-one edge that a flopped set of sevens cracks](/images/holdem-bad-beat-aces-vs-set.webp "In every bad beat the math was on your side — the underdog just caug…
L104 ## What Is a Bad Beat Jackpot?
L130 ## The Most Famous Bad Beat in Poker
L140 ## Why Bad Beats Are Actually Good for You
L150 ## How to Deal With a Bad Beat
L162 :::readnext[Keep reading]
L165 :::
L167 ## FAQ
L169 **Q. What is a bad beat in poker?**
L173 **Q. What is the difference between a bad beat and a cooler?**
L177 **Q. Is losing a coinflip a bad beat?**
L181 **Q. What is a bad beat jackpot and what qualifies?**
L185 **Q. What is the worst bad beat in poker history?**
L189 **Q. Are bad beats more common online?**
L193 **Q. How do you deal with bad beats in poker?**
L197 **Q. Is a bad beat the same as playing badly?**
L203 ## The 3 Things to Remember
L213 ## Related Posts

- 마크다운 표 3개 · 강조 박스(`<div style="background:rgba(255,248,210…">`) L50 L86 L114
- 관련 글 카드(href → `/fr/blog/…` · 라벨/제목/설명만 프랑스어):
  - L216   <a href="/en/blog/holdem-cooler" …> — Glossary / What Is a Cooler? / The loss with no suckout — in the strict sense, no bad beat
  - L221   <a href="/en/blog/holdem-fish" …> — Glossary / What Is a Fish? / The player whose suckouts pay your bills
  - L226   <a href="/en/blog/holdem-pot-odds" …> — Odds &amp; Math / How to Calculate Pot Odds / Know when you're the favorite in the first place
  - L231   <a href="/en/blog/holdem-tiebreak-rules" …> — Hand Rankings / Who Wins at Showdown / How the winning hand is actually decided

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href)
- /en/blog/holdem-glossary : 21*
- /en/blog/holdem-cooler : 21*,62,100,216h
- /en/blog/holdem-fish : 40,209,221h
- /en/blog/holdem-pot-odds : 76*,226h
- /en/blog/holdem-tiebreak-rules : 231h

### 소유표 (계획 §3-B)
- **주인인 검색어**: bad beat poker 170 · bad beat 110 · bad beat traduction 20(→ «sale coup» 병기가 직답) · bad beat jackpot 20 · qu'est-ce qu'un bad beat au poker.
- 🔴 쓰면 안 되는 헤드(seoTitle·H1·tags): **probabilité(s)** · calcul(ateur)(주인 = 확률 글 7편·`/fr/calculator` · §3-B ⑧). PAA «Quelles sont les statistiques de probabilité au poker ?»를 쓰면 답에서 `/fr/blog/holdem-probability`로 앵커.
- cooler와의 경계: «cooler vs bad beat»는 양쪽 글 모두 H2가 있다(EN 동일) — 정의 깊이는 각자, 서로 첫 화면 링크(EN L21·L62 그대로).
- 현지 추가 링크(선택 1): «Classic Examples» 절 끝에 `[calculateur d'équité](/fr/calculator)` 1개(앵커 정본 §3-A ⑤ · L-F §7-2 차별화).

### 키워드 (0-1·0-2 실측 · DataForSEO 2250/fr · 2026-10-07 · 재조사 안 함)
| 검색어 | 월(FR) | 자리 |
|---|---:|---|
| bad beat poker · bad beat | 170 · 110 | seoTitle·H1·tags |
| bad beat traduction | 20 | 첫 정의 «bad beat (sale coup)» + FAQ/본문 직답 |
| bad beat jackpot | 20 | Jackpot H2(짧게 · EN 분량) |
| cooler vs bad beat | 10 | Bad beat vs cooler H2 |
| PAA 인접 «Est-ce que le poker est de la chance ?» | — | FAQ 추가 후보(답 = EN «Why Bad Beats Are Actually Good» 논리 · 새 사실 금지) |

### 현지 SERP (L-F-gloss §3·§4 축어)
- 1위 = 영어 «Bad Beat Jackpot Definition»(pokernews.com) · quora · 2006년 포럼 · pokerpro «pires bad beats»(주어 오류 1건) · 위키(it). 영상 = PokerStars en Français «TOP 5 DES PIRES BADBEATS» · M6+ «BadBeat c'est un sale coup au poker !».
- 대응어: «sale coup»(M6+) · «mauvais coup»(egamersworld).
- **우리가 더 줄 것 3가지**: ① 확률 표(80 %·85 %·63 %·96 %)와 «진짜 bad beat 기준선»(경쟁 0) ② Mabuchi vs Phillips를 **EN의 엄밀 판정**(suckout은 턴에서)으로 — yourpokerdream은 «bad beat»로 단정 ③ 1인칭 AA vs 55 경험담.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (65자): C'est quoi un bad beat au poker ? Quand être favori ne suffit pas

**seoTitle** (57자): Favori à 80 %, tu perds quand même — le bad beat au poker

**desc** (159자): Un bad beat, c'est perdre en gros favori sur une carte miracle adverse. La différence avec un cooler, le bad beat jackpot, et pourquoi c'est souvent bon signe.

**tldr** (471자 · 평문):
Un bad beat (sale coup), c'est quand tu mets ton argent au milieu en gros favori, en général à 80 % ou plus, et que tu perds parce que l'adversaire touche la carte chanceuse qui le sauve. Contrairement au cooler au sens strict, tu étais devant au moment de la mise ; c'est le paquet qui t'a trahi à la fin. Ça pique, mais une série régulière de bad beats veut souvent dire que tes adversaires mettent leur argent en étant derrière, exactement la partie que tu veux jouer.

**tags** (8): ["bad beat poker","bad beat","bad beat traduction","bad beat jackpot","cooler vs bad beat","sale coup poker","suckout poker","variance poker"]

**H2 세트** (EN → fr):
1. ### En bref
2. ## C'est quoi un bad beat au poker ? ← What Is a Bad Beat in Poker?
3. ## Bad beat ou cooler : quelle est la différence ? ← Bad Beat vs Cooler
4. ## À partir de quel pourcentage parle-t-on d'un « vrai » bad beat ? ← How Big a Favorite…
5. ## Quels sont les bad beats classiques, cotes à l'appui ? ← Classic Bad Beat Examples (With the Odds)
6. ## C'est quoi un bad beat jackpot ? ← What Is a Bad Beat Jackpot?
7. ## Quel est le bad beat le plus célèbre de l'histoire du poker ? ← The Most Famous Bad Beat (EN L134 엄밀 판정 그대로: suckout은 턴)
8. ## Pourquoi les bad beats sont-ils en fait bon signe ? ← Why Bad Beats Are Actually Good for You
9. ## Comment encaisser un bad beat ? ← How to Deal With a Bad Beat
10. ## FAQ · ## À retenir · ## Articles liés
(내용 H2 8/8 질문형)

**FAQ**:
1. Qu'est-ce qu'un bad beat au poker ? ← What is a bad beat
2. Quelle est la différence entre un bad beat et un cooler ? ← bad beat vs cooler
3. Perdre un coin flip, c'est un bad beat ? ← coinflip
4. C'est quoi un bad beat jackpot, et quelles mains y donnent droit ? ← jackpot
5. Quel est le pire bad beat de l'histoire du poker ? ← worst
6. Les bad beats sont-ils plus fréquents en ligne ? ← online
7. Comment gérer les bad beats au poker ? ← deal with
8. Un bad beat, est-ce la même chose que mal jouer ? ← playing badly
9. Comment traduit-on « bad beat » en français ? ← **추가**(답 = «sale coup» · 변형 «mauvais coup» — 근거 §1-C/L-F · 1~2문장)
10. Est-ce que le poker est de la chance ? ← **추가 PAA**(답 = EN «Why Bad Beats Are Actually Good» 논리만: 단기 결과는 운, 장기는 결정의 질 · 끝에 `/fr/blog/holdem-probability` 앵커 · «probabilité»를 질문 문장에 넣지 않는다)

**흡수**:
- bad beat poker 170 · bad beat 110 → H1 · seoTitle · tags / bad beat traduction 20 → FAQ 9 · tldr «bad beat (sale coup)»
- bad beat jackpot 20 → H2 #6 · FAQ 4 / cooler vs bad beat 10 → H2 #3 · FAQ 2
- PAA «Est-ce que le poker est de la chance ?» → FAQ 10 · «statistiques de probabilité» → FAQ 10 답의 앵커로만

**손본 자리**: Fable 원안 → Opus 수정 1곳: desc 167자 → 159자(«de l'adversaire» → «adverse» · EN 10-06 정정 «usually a good sign»에 맞춰 «c'est bon signe» → «c'est souvent bon signe»).

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L19 The one that still stings: I had pocket aces, got it all in against a player who called with pocket fives, and watched one of the last two fives slam onto the river. I'd done everything right. My money went in as better than a 4-to-1 favorite, and I still lost the whole stack to ==one of the two cards in the deck that could beat…
L29 80%+ | How big a favorite it usually takes
L54 | **Who led when chips went in** | **You** were the favorite (often 80%+) | You were **behind** |
L68 ![A simple three-step visual of a bad beat — an 80 percent favorite, then a suckout on the river, then the loss](/images/holdem-bad-beat-suckout.webp "The shape of a bad beat: you're an ~80% favorite, the river delivers a suckout, and the hand you should have won is gone")
L72 - **~80% or more, and you lose to a suckout** — a genuine bad beat. Your aces (a ~4-to-1 favorite over a lower pair) getting cracked is the textbook case. A **one-outer** — losing to the single remaining card in the deck — is the purest bad beat of all.
L73 - **60–70% favorite losing** — unpleasant, but really just variance. You were only a modest favorite; the other outcome was always going to happen fairly often.
L76 The rule of thumb: a bad beat requires **both** a big edge (a heavy favorite) **and** a suckout (the underdog improving to win). Miss either condition and it's just the normal texture of the game. Being honest about this is what separates a player who studies from one who blames the deck for every loss — the same self-honesty th…
L80 ## Classic Bad Beat Examples (With the Odds)
L90 | **Aces cracked by a set** | AA vs a lower pair (e.g. 7‑7) | ~80% (4:1) | Their pair hits a set on the flop, turn or river |
L91 | **Aces vs a random hand** | AA all-in preflop | ~85% | Any two cards run you down |
L92 | **Overpair vs a flush draw (borderline)** | Overpair on the flop | ~63% (1.7:1) | Their nine flush outs, plus backdoor two pair or straight, get there by the river |
L93 | **Runner-runner** | A made hand ahead on the flop | ~90%+ | Two perfect cards (turn *and* river) complete a draw |
L94 | **The one-outer** | A near-locked hand | ~96% | The single card left in the deck beats you |
L98 *By the bar in the previous section, overpair vs flush draw is the family's borderline case: at ~63%, it's more variance than a "true" bad beat — but it's what the table calls it anyway.*
L100 The most iconic is **aces cracked by a set.** You get pocket aces all in preflop against pocket sevens — you're roughly an 80% favorite, a 4-to-1 lock in your favor. But there are two more sevens in the deck, and if one hits the board, their three-of-a-kind almost always beats your pair — only an ace or a rare runout (a flush, a…
L118 | **Loser (the bad-beat hand)** | ~50% |
L119 | **Winner of the hand** | ~25% |
L120 | **Others dealt into the hand** | ~25% (split evenly) |
L124 **One thing the jackpot does not use: the litmus at the top of this page.** Its qualifier is written in hand strength, not in who was ahead when the money went in. Run the test on the classic trigger: you hold A♠A♥ on a board of A♣ J♠ J♦ 7♥ 2♣ for aces full of jacks, and your opponent holds J♥J♣ for four jacks. Both hands were c…
L132 If you want to feel better about your own beats, remember that the worst ones happen on the biggest stages. The most legendary occurred at the **2008 World Series of Poker Main Event**, where **Motoyuki Mabuchi** turned his pocket aces into **four of a kind — quad aces**, a hand only a straight flush can beat — and *still lost*.…
L134 *By the bar above, the river wasn't the suckout — Phillips had already passed Mabuchi's set when the turn 10♦ completed his straight, so the big river all-in went in with Phillips ahead. The suckout came a street earlier. But poker remembers it as the most famous bad beat ever dealt, and the name stuck.*
L136 That's the ceiling of bad-beat pain: not an 80% favorite going down, but *four aces* — a hand you could play a lifetime without ever losing — beaten by a straight flush, the one category of hand that outranks four of a kind. It's worth keeping in your back pocket the next time your aces get cracked: however badly the deck treate…
L179 A. No. A bad beat requires you to be a heavy favorite — usually around 80% or more — and then get sucked out on. Losing a near-even matchup like A‑K versus Q‑Q (A‑K wins only about 43% of the time offsuit, 46% suited) is just normal variance. If the hand was close to a coin toss, you didn't get beaten badly, you simply lost a fl…
L226   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,…
L227     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Math</div>
L228     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
- L19 AA vs 55(«plus de 4 contre 1»·리버 5) — 카드·수치 축어.
L19 The one that still stings: I had pocket aces, got it all in against a player who called with pocket fives, and watched one of the last two fives slam onto the river. I'd done everything right. My money went in as better than a 4-to-1 favorite, and I still lost the whole stack to ==one of the two cards in the deck that could beat me==. That's a bad beat, and if you play poker long enough, it will h…
L58 | **The feeling** | "I got outdrawn" | "I never had a chance" |
L154 1. **Accept it out loud.** A simple "I got it in good, nothing I could do" beats stewing in silence. Naming it as variance closes the file.

### 하지 말 것
- Jackpot 절: 금액·룸·지역(퀘벡·몬트리올 카지노) 추가 금지 — EN의 분배 비율(~50/25/25)과 판정 규칙만.
- L134 이탤릭 단락(Mabuchi 엄밀 판정)과 L98(overpair vs flush draw borderline) **뉘앙스 그대로** — «bad beat이 아니다»로 강화하지도, 지우지도 마라(EN 10-06 정정 반영본).
- «Why Bad Beats Are Actually Good» 절의 «Getting your money in good and losing is still a winning decision ... as long as ...» 조건절을 빼지 마라(EN 10-06 정정).

---

## holdem-cooler — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "What Is a Cooler in Poker? The Unavoidable Loss — and Why It's Not a Bad Beat" (77자)
- seoTitle: "The Hand You Couldn't Fold If You Tried — What Is a Cooler?" (59자)
- desc: "A cooler is when your monster hand runs into a bigger one and folding was never an option — and why, strictly, it's not a bad beat, with classic examples." (154자)
- tldr: "A cooler is a hand where you lose a big pot with a very strong holding you could almost never correctly fold — like pocket kings running into aces, or a set losing to a bigger set. In the strict sense used in this guide, you were behind when the money went in and no lucky card 'sucked out' on you: you played it right and still lost. It's poker's most honest kind of disaster." (377자)
- category: "glossary" (8자)
- readTime: "10 min" (6자)
- emoji: "🧊" (1자)
- image: "/images/holdem-cooler-hero.webp" (31자)
- imageAlt: "A stunned poker player with his hand on his head after losing a big pot, watching his opponent pull a tall stack of chips across the green felt" (143자)
- date: "2026-07-05" (10자)
- updated: "2026-10-06" (10자)
- tags: ["cooler", "what is a cooler in poker", "cooler vs bad beat", "poker cooler meaning", "poker setup", "got coolered", "set over set", "cooler hand examples"]

### 구조 (EN L## · 축어 — 이미지 경로 그대로, alt·캡션만 프랑스어)
L25 ### The cooler, at a glance
L27 :::stripe
L32 :::
L36 ## What Is a Cooler in Poker?
L38 ![A visual showing pocket kings losing to pocket aces, labeled COOLER — two premium hands colliding with no misplay](/images/holdem-cooler-collision.webp "The essence of a cooler: two huge hands collide, the second-best one can't fold, and nobody did anything …
L46 ## Cooler vs Bad Beat: The Difference Everyone Gets Wrong
L48 ![Infographic of A♠ A♦ versus K♥ K♦ on a K♠ 7♦ 2♣ 8♥ 3♠ runout — the same collision seen from both sides](/images/holdem-cooler-vs-badbeat.webp "One collision, two labels: preflop, kings against aces is the textbook cooler for the kings — and when the king spi…
L73 ## Classic Cooler Examples (The Whole Family)
L75 ![Two players pushing their full chip stacks into the middle of the green felt, the collision where neither hand can fold](/images/holdem-cooler-stacks-collide.webp "Coolers happen when both players hold hands far too strong to fold — the money goes in and the…
L96 ## Is a Cooler the Same as a "Setup"? And What Does "Coolered" Mean?
L108 ## Can You Actually Avoid Coolers?
L116 ## When "It Was a Cooler" Is Just an Excuse
L122 :::pull
L124 :::
L130 ## How to Recover From a Cooler
L141 :::readnext[Keep reading]
L144 :::
L146 ## FAQ
L148 **Q. What is a cooler in poker?**
L152 **Q. What is the difference between a cooler and a bad beat?**
L156 **Q. Is a cooler bad luck or bad play?**
L160 **Q. Is a setup the same as a cooler?**
L164 **Q. Is pocket kings vs pocket aces a cooler?**
L168 **Q. How often does set over set happen?**
L172 **Q. What does it mean to get "coolered"?**
L176 **Q. Is a cooler always all-in?**
L180 **Q. How do you deal with a cooler?**
L184 **Q. What is a cooler in a casino? Is it the same as in poker?**
L190 ## The 3 Things to Remember
L200 ## Related Posts

- 마크다운 표 2개 · 강조 박스(`<div style="background:rgba(255,248,210…">`) L57 L79
- 관련 글 카드(href → `/fr/blog/…` · 라벨/제목/설명만 프랑스어):
  - L203   <a href="/en/blog/holdem-fish" …> — Glossary / What Is a Fish? / The player who calls a cooler a bad beat
  - L208   <a href="/en/blog/holdem-tiebreak-rules" …> — Hand Rankings / Who Wins at Showdown / How ties and second-best hands are decided
  - L213   <a href="/en/blog/holdem-straddle" …> — Glossary / What Is a Straddle? / The bet that builds bigger, cooler-prone pots
  - L218   <a href="/en/blog/holdem-pot-odds" …> — Odds &amp; Math / How to Calculate Pot Odds / Tell a cooler from a call you should fold

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href)
- /en/blog/holdem-glossary : 21*
- /en/blog/holdem-fish : 42*,126,196,203h
- /en/blog/holdem-pot-odds : 69*,218h
- /en/blog/holdem-tiebreak-rules : 92,208h
- /en/blog/holdem-position-play : 112
- /en/blog/holdem-straddle : 213h

### 소유표 (계획 §3-B)
- **주인인 검색어**: cooler poker 10 · cooler au poker · cooler poker def · cooler vs bad beat 10(bad-beat와 공유 — EN 구조 그대로).
- 🔴 쓰면 안 되는 헤드: 없음(§3-B 해당 0). bad beat 정의를 길게 반복하지 말고 `/fr/blog/holdem-bad-beat`로 앵커(EN과 같은 자리).

### 키워드 (0-1·0-2 실측 · DataForSEO 2250/fr · 2026-10-07 · 재조사 안 함)
| 검색어 | 월(FR) | 자리 |
|---|---:|---|
| cooler poker · cooler au poker | 10 · — | seoTitle·H1·첫 H2·tags |
| cooler vs bad beat | 10 | 둘째 H2 · FAQ 2 |
| 관련검색(영어 축어) «Why is it called a cooler in poker» | — | 첫 H2 본문의 어원 문장(EN L42 «cooled off»)·FAQ 마지막(EN L184 casino) |
| «What is a heater in poker» | — | 🔴 EN에 없음 → 쓰지 않는다 |

### 현지 SERP (L-F-gloss §3·§4 축어)
- 프랑스어 cooler 전용 글 **사실상 0**: clubpoker 사전(차단) · pokerstars.fr «Cooler vs Bad Beat»(한국 IP 404) · pokernews 사전 2문장 · 나머지 영어(upswing · redchip · pokerstrategy · pokervip).
- PAA 직접 질문 0 → 관련검색 축어 대체(위 표).
- **우리가 더 줄 것 3가지**: ① 같은 플레이어 시점의 bad beat/cooler 대비(EN L69) ② «It was a cooler»가 핑계가 되는 순간(자기 검사 질문) ③ set over set 빈도(1 % · 1/96)와 7장 검산된 예시.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (69자): C'est quoi un cooler au poker ? La main que tu ne pouvais pas coucher

**seoTitle** (54자): Impossible à coucher — c'est quoi un cooler au poker ?

**desc** (154자): Ta main monstre tombe sur plus fort et coucher n'était pas une option : le cooler au poker. Pourquoi ce n'est pas un bad beat, et les exemples classiques.

**tldr** (413자 · 평문):
Un cooler, c'est une main où tu perds un gros pot avec un jeu très fort que tu ne pouvais presque jamais coucher correctement, comme une paire de rois qui tombe sur les as, ou un set battu par un set plus gros. Au sens strict utilisé ici, tu étais derrière au moment de la mise et aucune carte chanceuse n'a renversé le coup : tu as bien joué et tu as quand même perdu. C'est le désastre le plus honnête du poker.

**tags** (8): ["cooler poker","cooler au poker","cooler vs bad beat","cooler poker def","set contre set","kk contre aa","cold deck poker","setup poker"]

**H2 세트** (EN → fr):
1. ### En bref
2. ## C'est quoi un cooler au poker ? ← What Is a Cooler in Poker?
3. ## Pourquoi dit-on « cooler » au poker ? ← **현지 추가**(관련검색 «Why is it called a cooler in poker»). 재료 = EN L42(«cooled off») + FAQ L184(casino 어원)만 — 2단락 이하. 🔴 첫 H2에서 같은 문장을 반복하지 마라(L42 어원 문장을 이 H2로 옮긴다)
4. ## Cooler ou bad beat : pourquoi tout le monde se trompe sur la différence ? ← Cooler vs Bad Beat
5. ## Quels sont les coolers classiques ? Toute la famille ← Classic Cooler Examples
6. ## Un « setup », c'est la même chose qu'un cooler ? Et que veut dire « se faire cooler » ? ← Setup / Coolered
7. ## Peut-on vraiment éviter les coolers ? ← Can You Actually Avoid Coolers?
8. ## Quand « c'était un cooler » n'est qu'une excuse ← When "It Was a Cooler" Is Just an Excuse
9. ## Comment se remettre d'un cooler ? ← How to Recover
10. ## FAQ · ## À retenir · ## Articles liés
(내용 H2 8개 중 질문형 7 = 88 %)

**FAQ**:
1. Qu'est-ce qu'un cooler au poker ?
2. Quelle est la différence entre un cooler et un bad beat ?
3. Un cooler, c'est de la malchance ou une erreur de jeu ?
4. Un setup, c'est la même chose qu'un cooler ?
5. Rois contre as, c'est un cooler ?
6. À quelle fréquence arrive un set contre set ?
7. Que veut dire « se faire cooler » ?
8. Un cooler est-il toujours à tapis ?
9. Comment gérer un cooler ?
10. Un cooler au casino, c'est la même chose qu'au poker ?
(EN 10문항 1:1 순서 그대로)

**흡수**:
- cooler poker 10 · cooler au poker · cooler poker def → H1 · seoTitle · tags · FAQ 1
- cooler vs bad beat 10 → H2 #4 · FAQ 2 / «Why is it called a cooler» → H2 #3 / «What is a cooler in a casino» → FAQ 10
- set contre set(1 % · 1 sur 96) · KK contre AA(4,5 contre 1) → H2 #5 · FAQ 5·6 · tags

**손본 자리**: Fable 원안 그대로(H2 #3 현지 추가 범위만 Opus가 한정).

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L48 ![Infographic of A♠ A♦ versus K♥ K♦ on a K♠ 7♦ 2♣ 8♥ 3♠ runout — the same collision seen from both sides](/images/holdem-cooler-vs-badbeat.webp "One collision, two labels: preflop, kings against aces is the textbook cooler for the kings — and when the king spikes, the very same hand becomes a bad beat for the aces")
L69 Here's the same players showing both, so it clicks. **Bad beat:** you hold A♠A♥, get it all in preflop against 7♣7♦, and a **7** hits the board — your aces were a ~4‑to‑1 favorite (about 80%) and got outdrawn. **Cooler:** flip it around — you hold the **7♣7♦**, flop a set of sevens, and stack off against a set drawn from a bigge…
L83 | **Kings vs Aces** | KK all-in preflop against AA | KK is a ~4.5:1 dog to AA, and you're almost never folding kings preflop |
L92 The most iconic is **set over set.** Say you hold **7♣7♦** and the flop comes **J♦ 7♥ 2♣** — you've flopped middle set, three sevens. It's a hand you'll happily stack off with almost always. But your opponent holds **J♠J♥** and flopped top set, three jacks. By the river on a **J♦ 7♥ 2♣ 5♠ Q♦** board, your best five cards are 7‑7…
L166 A. Yes — it's the most classic cooler of all. Kings are roughly a 4.5-to-1 underdog to aces preflop, and almost no reasonable player folds pocket kings before the flop. It takes a read that screams aces, or tournament pressure such as a satellite bubble where ICM can make even kings a fold — and those spots rarely arrive. So the…
L170 A. Rarely — which is exactly why it stings. When two players each hold a pocket pair and both see the flop, they will *both* flop a set only about 1% of the time (roughly 1 in 96). Flopping a set at all happens about 11.8% of the time — around 1 in 8.5 — when you hold a pocket pair, so having a second player flop a bigger one on…
L218   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,…
L219     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Math</div>
L220     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
- L19 KKK vs AAA 경험담 · L42/L101/L123/L154/L174는 1인칭 아님(설명문 — 해부 스크립트의 과다 포착).
L19 I still remember the hand that taught me the word. I flopped a set of kings, got it all in on the turn, and turned my cards over already reaching for the pot — then watched my opponent flip up a set of aces. I hadn't done anything wrong. There was no bad play to regret, no draw I should have folded to. I'd been beaten from the moment the chips went in, and there was ==nothing I could have done abo…
L42 The word paints the picture: you got "cooled off" — your hot hand went cold through no fault of your own. You'll also hear it used as a verb ("I got **coolered**") and as a near-synonym, **"setup,"** because it feels like the deck was *set up* to take your whole stack. What makes a cooler different from an ordinary loss is that a good player in the same spot would have lost a big pot too. Recogniz…
L65 | **The feeling** | "I never had a chance" | "I should have won that" |
L101 - **Coolered (verb)** — to be on the losing end of a cooler. "I got coolered" means you lost a big pot with a hand too strong to fold. By definition, saying it correctly is an admission that you *made the right play* and still lost.
L123 Would I make the exact same play again, with only the information I had at the time — ranges, price and stack depth, not just gut feel? If **no**, you misplayed — and that's a leak to fix, not bad luck. If **yes** — and it still holds up when you actually run those ranges and that price (plenty of wrong calls feel right every time) — it was bad luck: in the strict sense, a cooler if two strong han…
L154 A. Timing and suckouts, at least in the strict sense. In a cooler you were behind when the money went in and lost to a bigger hand — no lucky card changed anything. In a bad beat you were ahead (usually a big favorite) and your opponent hit a lucky draw to overtake you. Some players call any big-hand-versus-bigger-hand clash a cooler, even when a late card decided it; the strict split just keeps t…
L174 A. To be coolered is to lose a big pot on the wrong end of a cooler — you had a hand too strong to fold and ran into a bigger one. Used correctly, "I got coolered" is actually an admission that you played the hand right and simply lost to the deck, not to your own mistake.

### 하지 말 것
- L102 «Cold deck»은 **현재 EN 문장**(MA-350 정정: «Some poker glossaries use it…»)을 옮긴다 — «사전에서는»으로 단정하지 마라.
- L123·L126·L158·L193~196(10-06 정정: «ranges and price로 버티는가»·«give or take the rare second-best hand») 조건 그대로.
- «cooler»를 프랑스어로 번역하지 마라(가전 «glacière» 등 금지).

---

## holdem-fish — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "What Is a Fish in Poker? How to Spot One — and Make Sure It Isn't You" (69자)
- seoTitle: "If You Can't Spot the Fish, It's You — What Is a Poker Fish?" (60자)
- desc: "A fish is the weak player the whole table profits from. How to spot one, the shark/whale/nit/donkey slang decoded, and how to make sure the fish isn't you." (155자)
- tldr: "A 'fish' is poker slang for a weak, losing player the stronger players ('sharks') make their money from. Fish play too many hands, call too much, and can't fold — and the famous line warns that if you can't spot the fish at your table, you're it. It's the single most important read in the game: find the fish, or become one." (325자)
- category: "glossary" (8자)
- readTime: "10 min" (6자)
- emoji: "🐟" (1자)
- image: "/images/holdem-fish-hero.webp" (29자)
- imageAlt: "A relaxed recreational player at a poker table pushing a big stack of chips into the pot while sharper opponents quietly watch" (126자)
- date: "2026-07-05" (10자)
- updated: "2026-10-06" (10자)
- tags: ["fish", "what is a fish in poker", "poker fish meaning", "how to spot a fish in poker", "fish vs shark", "am i the fish", "poker player types", "how to stop being a fish"]

### 구조 (EN L## · 축어 — 이미지 경로 그대로, alt·캡션만 프랑스어)
L25 ### The fish, at a glance
L27 :::stripe
L32 :::
L36 ## What Does "Fish" Mean in Poker?
L44 ## Why Are Bad Players Called "Fish"?
L46 ![Top-down infographic of a pub poker table with a K♦ 7♣ 2♠ 9♥ 3♦ board, chip stacks, and the dealer button](/images/holdem-pub-players-table.webp "Every table has a food chain: sharks quietly identify the fish and build their profit around them")
L54 ## How to Spot a Fish: 8 Telltale Signs
L58 :::stripe
L67 :::
L73 ## The Poker Zoo: Fish vs Shark vs Whale vs Nit vs Donkey
L75 ![Four poker player types shown as chips of different sizes on green felt — FISH, SHARK, WHALE, and NIT — sized by how much money each type puts in play, the whale's chip by far the largest](/images/holdem-fish-food-chain.webp "The poker food chain at a glance…
L104 ## "If You Can't Spot the Sucker…": The Famous Line, Corrected
L106 ![Two starting hands side by side on the felt — a weak ace-four offsuit outlined in red, next to a premium ace-king outlined in gold](/images/holdem-starting-hands-weak-ace-trap.webp "The self-check that matters: if you're calling raises with the hand on the l…
L112 :::pull
L114 :::
L122 ## Am I the Fish? An Honest Self-Check
L147 ## How to Stop Being a Fish
L162 :::readnext[Keep reading]
L165 :::
L167 ## FAQ
L169 **Q. What does fish mean in poker?**
L173 **Q. Is calling someone a fish an insult?**
L177 **Q. What is the opposite of a fish in poker?**
L181 **Q. What's the difference between a fish and a whale?**
L185 **Q. What's the difference between a fish and a donkey?**
L189 **Q. How do you tell if someone is a fish?**
L193 **Q. How do you stop being a fish in poker?**
L197 **Q. Who said "if you can't spot the sucker at the table, you are the sucker"?**
L203 ## The 3 Things to Remember
L213 ## Related Posts

- 마크다운 표 2개 · 강조 박스(`<div style="background:rgba(255,248,210…">`) L79 L126
- 관련 글 카드(href → `/fr/blog/…` · 라벨/제목/설명만 프랑스어):
  - L216   <a href="/en/blog/holdem-starting-hands-chart" …> — Strategy / Starting Hands Chart / The fastest way to stop being the fish
  - L221   <a href="/en/blog/holdem-pot-odds" …> — Odds &amp; Math / How to Calculate Pot Odds / Stop chasing draws without a price
  - L226   <a href="/en/blog/holdem-position-play" …> — Strategy / Playing Your Position / The edge fish throw away every hand
  - L231   <a href="/en/blog/holdem-straddle" …> — Glossary / What Is a Straddle? / The bet that bloats the pot for the fish

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href)
- /en/blog/holdem-glossary : 21*
- /en/blog/holdem-starting-hands-chart : 69*,151,209,216h
- /en/blog/holdem-pot-odds : 153*,209,221h
- /en/blog/holdem-position-play : 155,226h
- /en/blog/holdem-straddle : 231h

### 소유표 (계획 §3-B)
- **주인인 검색어**: fish au poker · c'est quoi / qu'est-ce qu'un fish au poker · shark 140 · nit 90 · calling station 50 · reg 30 · donk 20 · whale 10 · PAA «Comment appelle-t-on un joueur de poker ?»(레인 배정: fish가 주인 · glossary는 앵커). 도구 `/fr/glossary`에 Fish 항목 없음 → 글 단독 주인.
- 🔴 쓰면 안 되는 헤드: 없음(§3-B 해당 0). 단 **«fish poker» 단독을 seoTitle 앞자리 주력어로 세우지 않는다**(1 300 = 앱 «FishPoker»·트래커 «Poker Fish» 혼입 · L-F §0-1).

### 키워드 (0-1·0-2 실측 · DataForSEO 2250/fr · 2026-10-07 · 재조사 안 함)
| 검색어 | 월(FR) | 자리 |
|---|---:|---|
| fish poker (= poker fish = fishpoker 묶음) | 1 300 | seoTitle 보조 · tags(앞자리 단독 금지) |
| fish au poker · qu'est-ce qu'un fish au poker · c'est quoi un fish au poker | 10 · 10 · — | H1·첫 H2·FAQ 1 |
| shark poker · nit poker · calling station · reg poker · donk poker · whale poker | 140 · 90 · 50 · 30 · 20 · 10 | Zoo H2·tags |
| 🔴 버림 | | poker fish tracker 110 · fish poker app · fiches poker(칩·이탈리아어) · poisson/requin/pigeon(포커 의도 0) |

### 현지 SERP (L-F-gloss §3·§4 축어)
- «fish poker»: 프랑스어 정의 글 **0/9**(앱 2 · 영어 포럼 · 쇼츠). «fish au poker»: pokerlistings(절반이 «TAGfish» — 초보 fish 의도와 어긋남) · partypoker(10신호) · pokerpro(2020) · 사전 1문장(pokernews).
- PAA 축어: «C'est quoi un fish au poker ?» · «Qu'est-ce qu'un fish au poker ?» · «C'est quoi un fish ?» · «Comment appelle-t-on un joueur de poker ?»
- **우리가 더 줄 것 3가지**: ① «Am I the Fish?» 자가진단(VPIP/PFR 표 · 경쟁 0) ② 명언 출처 교정 절(EN L104~) ③ 1인칭 «내가 fish였다» 경험담. 첫 문장에서 «joueur faible» 정의로 앱·트래커와 혼동을 끊는다(브랜드 이름은 쓰지 마라).

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (74자): C'est quoi un fish au poker ? Le repérer, et vérifier que ce n'est pas toi

**seoTitle** (59자): Tu ne vois pas le fish ? C'est toi — fish et shark au poker

**desc** (158자): Le fish est le joueur faible dont toute la table profite. Apprends à le repérer, décode shark, whale, nit et donkey, et vérifie que le fish, ce n'est pas toi.

**tldr** (392자 · 평문):
Au poker, un « fish » (poisson) désigne un joueur faible et perdant, celui sur qui les bons joueurs (les « sharks », requins) gagnent leur argent. Un fish joue trop de mains, suit trop souvent et n'arrive pas à se coucher, et la phrase célèbre prévient : si tu ne repères pas le fish à ta table, c'est que c'est toi. C'est la lecture la plus importante du jeu : trouve le fish, ou deviens-le.

**tags** (8): ["fish poker","fish au poker","shark poker","nit poker","calling station","reg poker","donk poker","whale poker"]

**H2 세트** (EN → fr):
1. ### En bref
2. ## C'est quoi un fish au poker ? ← What Does "Fish" Mean in Poker?
3. ## Pourquoi appelle-t-on les mauvais joueurs des « fish » ? ← Why Are Bad Players Called "Fish"?
4. ## Comment repérer un fish à ta table ? Les 8 signes qui ne trompent pas ← How to Spot a Fish: 8 Telltale Signs
5. ## Comment appelle-t-on les joueurs au poker ? Fish, shark, whale, nit et donkey ← The Poker Zoo (PAA «Comment appelle-t-on un joueur de poker ?»의 주인 자리)
6. ## « Si tu ne vois pas le pigeon à la table… » : la phrase célèbre, remise d'aplomb ← "If You Can't Spot the Sucker…" (명언 속 «sucker» = «pigeon» 번역은 허용 — 용어 «fish»의 대체어로는 쓰지 않는다)
7. ## Et si le fish, c'était toi ? L'auto-diagnostic honnête ← Am I the Fish?
8. ## Comment arrêter d'être un fish au poker ? ← How to Stop Being a Fish
9. ## FAQ · ## À retenir · ## Articles liés
(내용 H2 7개 중 질문형 6 = 86 %)

**FAQ**:
1. Qu'est-ce qu'un fish au poker ? ← What does fish mean in poker? (PAA 형)
2. Traiter quelqu'un de fish, c'est une insulte ? ← insult
3. Quel est le contraire d'un fish au poker ? ← opposite
4. Quelle est la différence entre un fish et une whale ? ← fish vs whale
5. Quelle est la différence entre un fish et un donkey ? ← fish vs donkey
6. Comment savoir si un joueur est un fish ? ← How do you tell
7. Comment ne plus être un fish au poker ? ← stop being a fish
8. Qui a dit « si tu ne vois pas le pigeon à la table, c'est toi » ? ← Who said…

**흡수**:
- fish poker 1 300(오염) → tags·H1 보조, seoTitle 앞자리 단독 아님 · 본문 첫 문장 = «joueur faible»
- fish au poker / qu'est-ce qu'un / c'est quoi un fish au poker → H1 · H2 #2 · FAQ 1
- shark 140 · requin 10 → seoTitle · H2 #5 · tldr / nit 90 · calling station 50 · reg 30 · donk 20 · whale 10 → H2 #5 · tags
- PAA «Comment appelle-t-on un joueur de poker ?» → H2 #5

**손본 자리**: Fable 원안 그대로(글자 수 기준 안 · 소유표 위반 0).

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L30 40–70% | A fish's typical VPIP (hands played)
L46 ![Top-down infographic of a pub poker table with a K♦ 7♣ 2♠ 9♥ 3♦ board, chip stacks, and the dealer button](/images/holdem-pub-players-table.webp "Every table has a food chain: sharks quietly identify the fish and build their profit around them")
L59 Plays too many hands | Sees flops with any two cards — a VPIP of 40–70% vs a solid player's 15–22%
L63 Chases every draw | Pays any price for a flush or straight, ignoring the odds
L130 | **Solid player** | 15–22% | 12–18% (never higher than their VPIP) | Tight, aggressive, close gap |
L131 | **Fish** | 40–70% | under 10% | Loose and passive — playing everything, leading nothing |
L132 | **Nit** | under 12% | under 8% | Too tight — predictable, usually not a fish |
L136 The fish signature is the **wide VPIP / low PFR gap**: you're playing 45% of hands but raising only 5% of all hands dealt. That means you're *calling* your way into pots and hoping — one of the biggest leaks in poker. Beyond the stats, ask yourself honestly:
L153 3. **Stop chasing without a price.** Learn basic [pot odds](/en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") so you only draw when the math pays — not "because you might hit."
L164 /en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
L195 A. Do less, not more: play far fewer starting hands, fold when the action says you're beaten, stop chasing draws without the right pot odds, raise-or-fold instead of limping, use your position, and quit when you're tilting. These are the six biggest leaks in weak play, and every one of them is fixable without learning a single a…
L209 The old line is right for a reason. Look around your next table and find the fish in the first half hour — and if you genuinely can't, the most valuable thing poker will ever teach you is that it's time to work on your own game. Start with a tighter [starting hand range](/en/blog/holdem-starting-hands-chart) and a real feel for …
L221   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,…
L222     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Math</div>
L223     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
- L19 (casino table · «six mois et pas mal de buy-ins perdus») — EN에 있는 것만. 장소를 «un casino»로 일반화 유지.
L19 The first time someone at a casino table quietly called me a fish, I didn't even know I'd been insulted. I thought I was playing fine — I was seeing lots of flops, calling to "keep them honest," chasing every draw because ==you never know==. Six months and a lot of lost buy-ins later I understood: I *was* the fish. Everyone at the table had known it before I sat down.
L122 ## Am I the Fish? An Honest Self-Check

### 하지 말 것
- 트래커·HUD·앱 소개 금지(상업 · L-F §7-1). «Comment jouer contre un fish ?» 절을 새로 만들지 마라(EN에 독립 절 없음 — Zoo 표의 «how to exploit» 열이 그 자리).
- 명언 절(L104~L120): 인물·영화 이름(Rounders · Amarillo Slim 등)과 «교정» 결론은 EN 축어 그대로 — 기억으로 출처를 보태지 마라.

---

## holdem-rake — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "What Is Rake in Poker? How the House Gets Paid — and How Much You Really Pay" (76자)
- seoTitle: "The Fee Quietly Eating Your Winnings — What Is Poker Rake?" (58자)
- desc: "Rake is the fee the house takes from most cash-game pots. How pot rake, time charges and tournament fees work, what you really pay, and what rakeback returns." (158자)
- tldr: "Rake is the small cut the cardroom takes from most pots to host the game — usually 2.5–10% up to a cap of a few dollars. Most rooms take nothing if everyone folds before the flop ('no flop, no drop'). It hits low-stakes and short-handed players hardest, and rakeback returns a slice of it to regulars." (301자)
- category: "glossary" (8자)
- readTime: "11 min" (6자)
- emoji: "🏦" (1자)
- image: "/images/holdem-rake-hero.webp" (29자)
- imageAlt: "A dealer pulling a small stack of chips from the center pot into the rake drop slot on a green felt table" (105자)
- date: "2026-07-04" (10자)
- updated: "2026-10-06" (10자)
- tags: ["rake", "what is a rake in poker", "poker rake explained", "rakeback", "poker rake cap", "time rake", "tournament rake", "how does rake work in poker"]

### 구조 (EN L## · 축어 — 이미지 경로 그대로, alt·캡션만 프랑스어)
L25 ### Rake at a glance
L27 :::stripe
L32 :::
L36 ## What Is Rake in Poker?
L44 ## How Is Rake Taken? Pot Rake, Time Charge & Dead Drop
L46 ![A dealer sweeping a few chips from the center of the pot into the table's rake slot before pushing the rest to the winner](/images/holdem-rake-drop.webp "Pot rake: a small percentage skimmed from the pot and dropped before the winner is paid")
L70 ## How Much Rake Do You Actually Pay?
L72 ![A modest pot of chips on the felt with a couple of dollars already pulled aside as rake, showing how much a single hand quietly costs](/images/holdem-rake-lowstakes.webp "In low-stakes games the cap barely moves as pots grow, so small pots are proportionally…
L93 ## What Is Rakeback?
L99 :::compare
L102 :::
L108 ## Do Tournaments Have Rake?
L112 :::pull
L114 :::
L120 ## Online vs Live Rake: Which Is Higher?
L131 :::readnext[Keep reading]
L134 :::
L136 ## FAQ
L138 **Q. What is a rake in poker?**
L142 **Q. How is rake calculated?**
L146 **Q. Who pays the rake in poker?**
L150 **Q. Do you pay rake if everyone folds before the flop?**
L154 **Q. How much rake is taken in a live $1/$2 game?**
L158 **Q. What is rakeback?**
L162 **Q. How can you pay less rake in poker?**
L166 **Q. Is taking a rake illegal? Why is taking a rake in poker illegal?**
L170 **Q. Do poker tournaments have rake?**
L174 **Q. How does rake affect your win rate?**
L178 **Q. Is online or live poker rake higher?**
L184 ## The 3 Things to Remember
L194 ## Related Posts

- 마크다운 표 2개 · 강조 박스(`<div style="background:rgba(255,248,210…">`) L50 L80
- 관련 글 카드(href → `/fr/blog/…` · 라벨/제목/설명만 프랑스어):
  - L197   <a href="/en/blog/holdem-tournament-vs-cash-game" …> — Tournament / Tournament vs Cash Game / Why the two charge you completely differently
  - L202   <a href="/en/blog/holdem-straddle" …> — Glossary / What Is a Straddle? / The extra blind that bloats the pot — and the rake
  - L207   <a href="/en/blog/holdem-pot-odds" …> — Odds &amp; Math / How to Calculate Pot Odds / Read your pot after the house takes its cut
  - L212   <a href="/en/blog/holdem-tournament" …> — Tournament / How Poker Tournaments Work / Where the buy-in fee really goes

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href)
- /en/blog/holdem-glossary : 21*
- /en/blog/holdem-tournament-vs-cash-game : 40*,116,197h
- /en/blog/holdem-pot-odds : 89,190,207h
- /en/blog/holdem-straddle : 190,202h
- /en/blog/holdem-tournament : 212h

### 소유표 (계획 §3-B)
- **주인인 검색어**: rake poker 210 · rake au poker 20 · c'est quoi / qu'est-ce que le rake au poker 10 · rake poker definition 10 · rakeback 140 · rakeback poker 50(정의 의도만).
- 🔴 조준 금지: «rake winamax/pokerstars» · «meilleur rakeback» · «site de poker»(룸·제휴 의도 · PAA 2개 포함).
- 🔴 **FAQ L166 «Is taking a rake illegal?…» 삭제 → 같은 자리에 운영 질문으로 교체**(계획 §3-B «레인 A로 넘기는 처리»): 확정 카피의 FAQ 목록 참고. 답은 EN L36~L42(«How the house gets paid» · 하우스는 플레이하지 않는다 · 주 수입원)와 L166 답의 **첫 문장 앞부분(«Charging a fee to host the game is the entire business model of a … cardroom»)만** 재료로 — 법·관할·«Molly's Game» 문장은 쓰지 않는다. 프랑스 과세 2 %·1 €(Légifrance)도 쓰지 않는다.

### 키워드 (0-1·0-2 실측 · DataForSEO 2250/fr · 2026-10-07 · 재조사 안 함)
| 검색어 | 월(FR) | 자리 |
|---|---:|---|
| rake poker · rake au poker | 210 · 20 | seoTitle·H1·tags |
| c'est quoi le rake (au poker) · qu'est-ce que le rake au poker | 10 | 첫 H2 · FAQ 1 |
| rakeback · rakeback poker | 140 · 50 | Rakeback H2(정의·산수만) · tags |
| rake poker traduction | — | 첫 정의 «commission / prélèvement de la salle» 병기 |
| 경쟁 H2 «no flop, no drop» · «rake capé» | — | «How Is Rake Taken?» H2 본문(EN L63·L64에 이미 있음 — 소절 승격 금지, 굵은 첫 구 그대로) |

### 현지 SERP (L-F-gloss §3·§4 축어)
- 1위 pokerstars.fr 요율표(룸) · pokerpro 2019(«10 %» 근거 없음) · pokernews 사전 · poker-toolkit 2026-04(국가 과세 각도 — 2차 출처) · pokerlistings(no flop no drop H3) · 위키(en) · 제휴 «meilleurs sites rakeback».
- PAA 축어: «Qu'est-ce que le rake au poker ?» · «C'est quoi le rake ?» · «Que signifie "rake" dans le contexte du poker ?» (조준 금지: «Quel est le rake sur Winamax ?» · «Quel est le site de poker avec le meilleur rakeback ?»)
- **우리가 더 줄 것 3가지**: ① time charge·dead drop(라이브 관점 · 경쟁 0) ② «실제로 얼마 내나» 산수(NL50 $2 cap vs $4 cap 표) ③ 룸 광고 없는 중립 설명 + 1인칭 «break-even 한 달» 경험담.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (74자): C'est quoi le rake au poker ? Comment la salle se paie et combien tu paies

**seoTitle** (57자): Ce qui grignote tes gains — c'est quoi le rake au poker ?

**desc** (152자): Le rake, c'est la commission de la salle sur la plupart des pots. Rake au pot, frais de tournoi : combien tu paies vraiment, et ce que rend le rakeback.

**tldr** (376자 · 평문):
Le rake, c'est la petite part que la salle prélève sur la plupart des pots pour organiser la partie, en général 2,5 à 10 % plafonnés à quelques dollars. La plupart des salles ne prennent rien si tout le monde se couche avant le flop (« no flop, no drop »). Il pèse surtout sur les petites limites et les tables à peu de joueurs, et le rakeback en rend une partie aux habitués.

**tags** (8): ["rake poker","rake au poker","rakeback","rakeback poker","rake poker definition","commission poker","no flop no drop","time charge poker"]

**H2 세트** (EN → fr):
1. ### En bref
2. ## C'est quoi le rake au poker ? ← What Is Rake in Poker?
3. ## Comment le rake est-il prélevé ? Rake au pot, time charge et dead drop ← How Is Rake Taken?
4. ## Combien de rake paies-tu vraiment ? ← How Much Rake Do You Actually Pay?
5. ## C'est quoi le rakeback ? ← What Is Rakeback?
6. ## Y a-t-il du rake dans les tournois ? ← Do Tournaments Have Rake?
7. ## Rake en ligne ou en live : lequel est le plus élevé ? ← Online vs Live Rake
8. ## FAQ · ## À retenir · ## Articles liés
(내용 H2 6/6 질문형)

**FAQ**:
1. Qu'est-ce que le rake au poker ? ← What is a rake (PAA 형 · 답 첫 문장에 «commission / prélèvement de la salle»)
2. Comment le rake est-il calculé ?
3. Qui paie le rake au poker ?
4. Paie-t-on le rake si tout le monde se couche avant le flop ? (= «no flop, no drop» 직답)
5. Combien de rake prend une partie live en $1/$2 ?
6. C'est quoi le rakeback ?
7. Comment payer moins de rake au poker ?
8. Pourquoi la salle prend-elle un rake ? ← **교체**(EN «Is taking a rake illegal?…» · 답 재료는 «소유표» 절 · 합법성 0)
9. Y a-t-il du rake dans les tournois de poker ?
10. Comment le rake influence-t-il ton win rate ?
11. Le rake est-il plus élevé en ligne ou en live ?

**흡수**:
- rake poker 210 · rake au poker 20 → H1 · seoTitle · tags / c'est quoi · qu'est-ce que le rake au poker → H1 · H2 #2 · FAQ 1
- rakeback 140 · rakeback poker 50 → H2 #5 · FAQ 6 · tags(정의·산수만)
- rake poker definition · traduction → tags · FAQ 1 답 «commission / prélèvement»
- no flop, no drop → FAQ 4 · tags · H2 #3 본문 불릿(EN L63 굵은 첫 구)

**손본 자리**: Fable 원안 → Opus 수정 3곳: ① 현지 추가 H2 «Que veut dire « no flop, no drop » ?» 삭제 — EN L63은 H2 #3 안의 불릿이라 승격하면 목록이 깨진다(구조 패리티) · 같은 질의는 FAQ 4가 받는다 ② tags «rake capé» → «time charge poker»(§1-C «capé» 미채택) ③ FAQ 5 «1 $/2 $» → «$1/$2»(§1-B).

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L28 2.5–10% | Typical pot rake range
L29 $3–$6 | Common live rake cap
L31 20–40% | Typical rakeback deal
L54 | **Pot rake (scaled)** | % of eligible pots, up to a cap | 2.5–10%, capped $1–$6 | Most low/mid cash games, online |
L55 | **Time charge** | Flat fee per player, every 30 min | ~$10–$15 per hour | High-stakes live ($10/$20+), and every stake where pot rake isn't an option |
L57 | **Tournament fee** | Charged with the buy-in up front | ~5–20% of buy-in | Almost every tournament |
L64 - **The rake cap.** The house never takes the full percentage on a huge pot — it stops at a maximum, commonly **$3–$6 live** and **$1–$3 online**. Caps do rise as the stakes rise, but not proportionally — they move in coarse steps, so several stakes often share the same cap. On top of that they often shrink when fewer players ar…
L65 - **Time charge instead of pot rake.** At higher stakes, rooms often stop raking pots and instead collect a flat fee — say $10–$15 an hour per player, taken every half-hour. This favors players who win big pots — though what you save is the *capped* rake, not a slice of the pot: against a $3–$6 cap, a $2,000 pot was only ever gi…
L74 Here's the part that changed how I think about the game. The percentage sounds tiny — 5%, capped at a few bucks — but you pay it on nearly every pot you win, for hours.
L76 **A live $1/$2 game.** With 10% rake capped at $5 and roughly 30 hands dealt an hour, most contested pots hit or near the cap. A single busy table can pay **$100+ an hour** into the drop between all the players. That money comes straight out of the collective winnings — it's the reason a table full of roughly even players slowly…
L78 **The low-stakes "rake trap."** This is the punchline every beginner should hear. Because the cap barely falls as you move down in stakes, the *lower* you play, the *bigger* a bite the rake takes proportionally. Here is a worked example at online NL50 (illustrative — the exact figure moves with how many pots you contest and how …
L84 | Room with a **$2 cap** | ~5 bb/100 | +8 bb/100 win rate stays a **winner (+3)** |
L85 | Room with a **$4 cap** | ~8–9 bb/100 | +8 bb/100 breaks even or turns into a **loser (0 to −1)** |
L89 Same skill, same edge over the field — and the rake alone is the difference between winning and losing. That's why serious low-stakes grinders obsess over rake structure and why [pot odds](/en/blog/holdem-pot-odds) and win rate always have to be read *after* the house takes its cut.
L95 Since the house profits from the volume you generate, most rooms give some of it back to keep you playing. **Rakeback is a percentage of the rake you personally pay, returned to you** — usually through points, cashback, or a loyalty program, paid out weekly or monthly. A 30% rakeback deal simply means you get back 30 cents of ev…
L104 For a casual player, rakeback is a minor perk. For a high-volume regular it's enormous: the gap between a 20% and a 40% deal scales with the rake you actually generate, so it only turns into serious money if you're putting in real volume at meaningful stakes — and for many break-even grinders, rakeback *is* their profit. It effe…
L113 A **$100 + $9** tournament means $100 goes into the prize pool and **$9 is the house's fee.**
L116 That fee — also called the **juice** or **vig** — is the tournament equivalent of rake. It's usually **5–20% of the buy-in**, and it's flat: you pay it whether you bust first or win the whole thing. Lower buy-ins carry proportionally higher fees (a $3 + $0.30 sit-and-go is 10%), and because fast **turbo formats compress your edg…
L124 - **Live rake** tends to be a **higher percentage (often 10%) with a higher cap ($3–$6)** — but you only play ~30 hands an hour, so you pay it fewer times.
L125 - **Online rake** is usually a **lower percentage (3–5%) with a smaller cap ($1–$3)** — but you might see 250+ hands an hour across multiple tables, so a volume grinder can pay *more* rake per hour than a live player despite the lower rate.
L127 The lesson: never judge rake by the percentage alone. What matters is what you actually pay per pot — the percentage, up to the cap — **times how often you pay it.** A "cheap" 5% online game you four-table can cost you more than a "pricey" 10% live game — which is exactly why rakeback and table selection matter more online.
L140 A. Rake is the fee a cardroom takes from a cash game for hosting it — normally a small percentage of eligible pots (2.5–10%) up to a capped maximum. Because the house doesn't play, the rake is its main source of revenue. Tournaments charge an equivalent fee built into the buy-in instead.
L154 **Q. How much rake is taken in a live $1/$2 game?**
L156 A. Commonly 10% of the pot capped at around $5. Most contested pots reach the cap, so a single busy table can drop $100 or more per hour collectively. That fee is why a table of evenly matched players slowly loses chips to the house over time.
L160 A. Rakeback returns a percentage of the rake you personally pay — often 20–40% — through points, cashback, or a loyalty program. It effectively lowers your true rake. For casual players it's a small perk; for high-volume regulars it can be the difference between a losing and a winning year.
L172 A. Yes, but not from the pot. The fee is collected with your entry payment. A split price such as $100 + $9 sends $100 to the prize pool and $9 to the house; series such as the WSOP instead quote one buy-in with the fee already included. That fee (the "juice" or "vig") is typically 5–20% of the buy-in and is paid regardless of h…
L176 A. Significantly — most of all at low stakes, where the cap barely scales down with the stakes. Short-handed adds a second effect that has nothing to do with the cap: the same rake per pot is shared by fewer players, and you post the blinds far more often per 100 hands — so your share per hand goes up. (Per *hour* you also pay m…
L186 1. **Rake is the house's cut for hosting the game** — usually 2.5–10% of eligible pots up to a small cap, and it's separate from what you win or lose to opponents.
L188 3. **Rakeback and structure matter.** Getting 20–40% of your rake back, and choosing rooms with player-friendly caps, can flip your long-term result — measure everything *after* the rake.
L190 Now that you can see the house's cut, the numbers you read everywhere else make more sense: your [pot odds](/en/blog/holdem-pot-odds), your win rate, and why a [straddle](/en/blog/holdem-straddle) that bloats the pot also quietly feeds the rake. Poker is beatable — but only once you're beating the other players by *more* than th…
L207   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,…
L208     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Math</div>
L209     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
- L19 «break-even 한 달» · L74 «Here's the part that changed how I think» — EN 그대로.
L19 It took me a depressing month of "break-even" sessions to figure out where my money was actually going. I wasn't losing to the other players — I was beating them, slightly. I was losing to the ==house's cut on every pot I won.== That quiet fee is called the **rake**, and until you understand it, you can be a winning player on paper and a losing one at the cashier.
L74 Here's the part that changed how I think about the game. The percentage sounds tiny — 5%, capped at a few bucks — but you pay it on nearly every pot you win, for hours.

### 하지 말 것
- 금액은 **$ 그대로**(€·프랑스 룸 요율 금지). GGPoker(L63·L152)·WSOP(L110·L172)는 EN 문맥 그대로 1회씩 — 다른 룸 이름 추가 금지.
- L78~L89 NL50 예시는 «illustrative» 단서 그대로 · 표 수치 축어.

---

## holdem-straddle — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "What Is a Straddle in Poker? Rules, Types, and Whether You Should" (65자)
- seoTitle: "The Bet That Doubles the Stakes — What Is a Poker Straddle?" (59자)
- desc: "A straddle is a voluntary blind that doubles the stakes before cards are dealt. The rules, every straddle type, who acts first, and whether it's profitable." (156자)
- tldr: "A straddle is an optional blind bet — usually twice the big blind — posted before the cards are dealt. It buys the straddler the last action preflop and the option to raise, doubling the stakes. In almost every case it's a -EV play, and outside cash games it's almost never allowed." (282자)
- category: "glossary" (8자)
- readTime: "10 min" (6자)
- emoji: "💰" (1자)
- image: "/images/holdem-straddle-hero.webp" (33자)
- imageAlt: "An under-the-gun player posting an extra blind bet of two chips in front of the big blind before the cards are dealt" (116자)
- date: "2026-07-04" (10자)
- updated: "2026-10-06" (10자)
- tags: ["straddle", "what is a straddle in poker", "poker straddle rules", "mississippi straddle", "button straddle", "sleeper straddle", "is straddling profitable", "utg straddle"]

### 구조 (EN L## · 축어 — 이미지 경로 그대로, alt·캡션만 프랑스어)
L25 ### Straddle at a glance
L27 :::stripe
L32 :::
L36 ## What Is a Straddle in Poker?
L49 ## How a Straddle Works: Who Acts First and Last
L51 ![Preflop action order with a $4 UTG straddle over $1/$2 blinds — UTG+1 acts first, the straddler acts last, and the minimum raise doubles to $8](/images/holdem-straddle-action-order.webp "A live UTG straddle turns the seat left of the big blind into a third b…
L55 :::steps
L61 :::
L67 ## Types of Straddle (UTG, Mississippi, Button & Sleeper)
L69 ![A straddle bet posted beside the dealer button, showing a button or Mississippi straddle posted from the seat that already acts last after the flop](/images/holdem-straddle-button.webp "A button (Mississippi) straddle posts from the button — the one straddle…
L97 ## How Much Is a Straddle?
L110 ## Is Straddling Allowed in Tournaments?
L118 ## Is Straddling Profitable? Should You Straddle?
L120 ![A large bloated pot of mixed chips piled in the middle of the felt, the inflated pot a straddle creates before anyone has seen a card](/images/holdem-straddle-bloated-pot.webp "A straddle doubles the blind and bloats the pot — money committed before a single…
L124 :::card
L128 :::
L140 :::readnext[Keep reading]
L143 :::
L145 ## FAQ
L147 **Q. What is a straddle in poker?**
L151 **Q. How much is a straddle in poker?**
L155 **Q. Who acts first after a straddle?**
L159 **Q. Who can straddle in poker? Can anyone straddle?**
L163 **Q. Is a straddle considered a raise?**
L167 **Q. What is a Mississippi straddle?**
L171 **Q. What is a sleeper straddle?**
L175 **Q. Is straddling allowed in tournaments?**
L179 **Q. Is straddling profitable? Should you straddle?**
L185 ## The 3 Things to Remember
L195 ## Related Posts

- 마크다운 표 1개 · 강조 박스(`<div style="background:rgba(255,248,210…">`) L73
- 관련 글 카드(href → `/fr/blog/…` · 라벨/제목/설명만 프랑스어):
  - L198   <a href="/en/blog/holdem-blind-meaning" …> — Rules / What Are the Blinds in Poker? / The small and big blinds a straddle builds on
  - L203   <a href="/en/blog/holdem-position-play" …> — Strategy / How Position Changes Everything / Why a straddle's position matters more than its size
  - L208   <a href="/en/blog/holdem-betting-actions" …> — Rules / Betting Actions: Check, Call, Raise / How the price resets after a straddle
  - L213   <a href="/en/blog/holdem-tournament-vs-cash-game" …> — Tournament / Tournament vs Cash Game / Why straddles are a cash-game-only thing

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href)
- /en/blog/holdem-glossary : 21*
- /en/blog/holdem-blind-meaning : 45*,191,198h
- /en/blog/holdem-pot-odds : 106
- /en/blog/holdem-tournament-vs-cash-game : 114,213h
- https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/ : 126
- /en/blog/holdem-rake : 127
- /en/blog/holdem-position-play : 136,191,203h
- /en/blog/holdem-betting-actions : 191,208h

### 소유표 (계획 §3-B)
- **주인인 검색어**: straddle poker 90 · straddle au poker · c'est quoi un straddle au poker · straddle définition / traduction · mississippi straddle 10. 도구 `/fr/glossary`에 Straddle 항목 없음 → 글 단독 주인.
- 🔴 쓰면 안 되는 헤드: 없음(§3-B 해당 0). «mise de départ / blindes» 정의는 `/fr/blog/holdem-blind-meaning` 몫 → PAA «Comment s'appelle la mise de départ au poker ?»를 쓰면 답 1~2문장 + 앵커.

### 키워드 (0-1·0-2 실측 · DataForSEO 2250/fr · 2026-10-07 · 재조사 안 함)
| 검색어 | 월(FR) | 자리 |
|---|---:|---|
| straddle poker · straddle au poker | 90 · — | seoTitle·H1·tags |
| c'est quoi un straddle au poker · straddle définition | — | 첫 H2 · FAQ 1 |
| straddle poker traduction · PAA «traduction de "straddling" en français» | — | 첫 정의 «straddle (overblind)» = 직답 · FAQ |
| mississippi straddle | 10 | Types H2 · FAQ |

### 현지 SERP (L-F-gloss §3·§4 축어)
- straddle 전용 프랑스어 글 = pokernews FR 1편(오역 FAQ «Combien pouvez-vous miser au poker ?» · 오타 · «jamais +EV» 단정) + 포럼 · 영어 1위 checkreplay(FAQ 6) · over-pair 사전 «Straddle : Voir Option. / Option : Overblind, facultatif.»
- PAA 축어: «Que signifie le terme "straddle" ?» · «Quelle est la traduction de "straddling" en français ?» · «Comment s'appelle la mise de départ au poker ?»
- **우리가 더 줄 것 3가지**: ① 행동 순서 단계표(:::steps · $1/$2/$4 · 최소 레이즈 $8) ② 유형 비교표(UTG·Mississippi·Button·Sleeper) ③ «-EV인가» 조건부 판정(GTO Wizard 출처 링크) + $1/$2 첫 straddle 경험담.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (79자): C'est quoi un straddle (overblind) au poker ? Règles, types et faut-il le faire

**seoTitle** (56자): Doubler les enjeux avant la donne — le straddle au poker

**desc** (156자): Le straddle est une blinde volontaire qui double les enjeux avant la donne. Les règles, chaque type de straddle, qui parle en premier, et si c'est rentable.

**tldr** (382자 · 평문):
Un straddle (overblind) est une blinde facultative, en général le double de la grosse blinde, posée avant que les cartes soient distribuées. Elle donne au straddler la dernière parole préflop et le droit de relancer, ce qui double les enjeux de la table. Dans presque tous les cas c'est un coup à espérance négative (-EV), et en dehors du cash game il est presque toujours interdit.

**tags** (8): ["straddle poker","straddle au poker","straddle définition","overblind poker","mississippi straddle","straddle poker traduction","utg straddle","re-straddle"]

**H2 세트** (EN → fr):
1. ### En bref
2. ## C'est quoi un straddle au poker ? ← What Is a Straddle in Poker?
3. ## Comment fonctionne un straddle ? Qui parle en premier, qui parle en dernier ← How a Straddle Works
4. ## Quels sont les types de straddle ? UTG, Mississippi, bouton et sleeper ← Types of Straddle
5. ## Combien coûte un straddle ? ← How Much Is a Straddle?
6. ## Le straddle est-il autorisé en tournoi ? ← Allowed in Tournaments?
7. ## Le straddle est-il rentable ? Faut-il straddler ? ← Is Straddling Profitable?
8. ## FAQ · ## À retenir · ## Articles liés
(내용 H2 6/6 질문형)

**FAQ**:
1. Qu'est-ce qu'un straddle au poker ?
2. Combien coûte un straddle au poker ?
3. Qui parle en premier après un straddle ?
4. Qui peut straddler au poker ? Tout le monde ?
5. Un straddle compte-t-il comme une relance ?
6. C'est quoi un Mississippi straddle ?
7. C'est quoi un sleeper straddle ?
8. Le straddle est-il autorisé en tournoi ?
9. Le straddle est-il rentable ? Faut-il straddler ?
10. Comment dit-on « straddle » en français ? ← **추가 PAA**(«traduction de "straddling"» · 답 = overblind · «option» 금지)
11. Comment s'appelle la mise de départ au poker ? ← **추가 PAA**(답 = 블라인드(petite/grosse) 1~2문장 + `/fr/blog/holdem-blind-meaning` 앵커 · straddle은 그 위에 얹는 «blinde en plus» · 🔴 ante 언급 금지 — straddle EN에 없음)

**흡수**:
- straddle poker 90 · straddle au poker · c'est quoi un straddle au poker → H1 · seoTitle · H2 #2 · FAQ 1
- straddle définition · traduction · overblind → H1 · tldr · tags · FAQ 10 / mississippi straddle 10 → H2 #4 · FAQ 6 · tags
- PAA «mise de départ» → FAQ 11(앵커)

**손본 자리**: Fable 원안 → Opus 수정 2곳: ① H1 «…Règles, types d'overblind et faut-il le faire» → «C'est quoi un straddle (overblind) au poker ? Règles, types et faut-il le faire»(«types d'overblind» 부자연) ② tags «cash game poker» 삭제(cash game 헤드 = holdem-tournament-vs-cash-game 몫) → «re-straddle» · FAQ 11 답에서 ante 배제(EN에 없음).

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L19 The first time someone straddled at my $1/$2 table, I had no idea why the guy under the gun tossed out $4 before the cards came — and why the dealer suddenly started the action one seat further along. I called it "the rich-guy bet" for about a month before I learned what it actually does: a straddle ==doubles the stakes and buys…
L38 **A straddle is a voluntary blind bet — normally twice the big blind — posted before the cards are dealt.** In a $1/$2 game the under-the-gun player (immediately left of the big blind) can drop $4 "on the straddle," and the game instantly plays like a $1/$2/$4 table for that hand.
L51 ![Preflop action order with a $4 UTG straddle over $1/$2 blinds — UTG+1 acts first, the straddler acts last, and the minimum raise doubles to $8](/images/holdem-straddle-action-order.webp "A live UTG straddle turns the seat left of the big blind into a third blind — the straddler now acts last before the flop")
L53 This is the part definition pages skip, and it's where new players get lost. A straddle **rearranges the preflop action order.** Walk through a standard $1/$2 game where UTG straddles to $4:
L56 UTG posts the straddle | The under-the-gun player puts out $4 (2× the $2 big blind) before cards are dealt
L58 Around the table | Everyone must call $4 (not $2) to play; they can fold, call, or raise — and the minimum raise is now $8, double the straddle, just as over a normal big blind
L59 Blinds decide | The small and big blinds act in turn, facing the $4 price
L91 - **Re-straddle (double straddle)** — a player to the left can straddle *over* a straddle, for a minimum of double the previous one ($4 → $8 → $16). Whether it's allowed, and from which seats, is pure house rules.
L99 The standard straddle is **exactly 2× the big blind** — $4 in a $1/$2 game, $10 in a $2/$5 game. That's the default in nearly every cardroom.
L104 - **Re-straddle progression** — where re-straddling is allowed, each one is at least double the last: $4, then $8, then $16, and so on. Games where the whole table straddles and re-straddles can balloon the effective stakes several times over.
L106 If you're calling into a straddled pot, remember your [pot odds](/en/blog/holdem-pot-odds) are now measured against a bigger blind — the price to play every hand has doubled, which quietly punishes loose calling.
L125 🎯 | You commit blind | Money goes in before you see your cards, so you're playing a bloated pot with no information — the same disadvantage that makes the blinds the worst seats at the table. It also halves your effective depth: at $1/$2 a $200 stack is 100 big blinds, but with a $4 straddle on, the same stack plays like 50
L126 📉 | A UTG straddle buys position for one street | It makes you last preflop, then leaves you out of position to every caller but the blinds for the next three streets, in a pot you inflated yourself. Nor does a straddle loosen up the late seats: in [GTO Wizard's straddled-pot sims](https://blog.gtowizard.com/preflop-strategy-in…
L153 A. The standard straddle is 2× the big blind — $4 in a $1/$2 game. Some no-limit rooms allow larger or even uncapped (all-in) straddles, and where re-straddling is permitted each one must be at least double the previous straddle ($4, $8, $16, and so on).

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
- L19 «ma table $1/$2» · «$4» · «le "pari du riche" pendant un mois» — EN 그대로.
L19 The first time someone straddled at my $1/$2 table, I had no idea why the guy under the gun tossed out $4 before the cards came — and why the dealer suddenly started the action one seat further along. I called it "the rich-guy bet" for about a month before I learned what it actually does: a straddle ==doubles the stakes and buys one player the last word before the flop==, all before anyone has loo…

### 하지 말 것
- 🔴 «option»을 straddle 이름으로 쓰지 마라(§1-C). over-pair의 «Voir Option»은 인용하지 않는다.
- L122·L126·L181 GTO Wizard 인용(« a massive disadvantage » · « still almost always a money-losing proposition »)은 EN 축어를 프랑스어로 옮기되 **인용부호 안 의미 그대로**, 링크 URL 그대로. 수치(«fewer» 등)를 보태지 마라.
- L80 Sleeper 행 «Preflop, only if folded to it»·L90 문장(10-06 정정) 그대로.

---
