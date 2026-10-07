# fr-rank 브리프 — 🅱 족보 클러스터 6편 (A 구간 산출 · 2026-10-07)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5(치환 = `docs/fr-cluster-plan.md` §5) · 용어 정본 = 계획 §3-A · 소유표 = 계획 §3-B · SERP 근거 = `docs/keyword-bank/fr-serp/L-B-rank.md`(B에서 다시 열 필요 없음 — 필요한 것은 여기 옮겼다).
> EN 기준 = 해시 **`a54b5f3d`**(브랜치 `harden-fr-rank` 착수 시점 = main `1c8cfb26`, `git diff a54b5f3d..HEAD -- lib/posts-en/<6편>` = 변경 0 확인 10-07).
> EN `updated`: hand-rankings · kicker · tiebreak-rules = **2026-10-06** · split-pot-rules · reading-the-board = **2026-10-05** · flush-vs-straight = **2026-09-28** → 각 글 `masterUpdated`는 이 값(헤드가 머지 때 델타 스윕 후 갱신 · 계획 §2-⑤).
> 🔴 **카피(title·seoTitle·desc·tldr·tags·H2·H3·FAQ 문항)는 이 브리프 «확정 카피»가 최종이다.** B·C는 바꾸지 않는다 — 바꿔야 하면 진행 파일 «헤드 요청»(계획 §2-⑥).

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)**. 브리프에는 메타·구조(L##)·링크·원시 HTML 줄·§13 자리·경험담·확정 카피를 실었다. 본문 산문·표·디렉티브는 EN 파일을 열어 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 열지 마라**(예외: 틀 복사용 `lib/posts-fr/holdem-blind-meaning.ts` 1편). 사실·수치·카드의 출처는 EN 축어 + 이 브리프 §1-G의 형제 글 인용뿐이다.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-fr/holdem-blind-meaning.ts`의 필드 모양(`masterUpdated` 포함) · `date`/`updated` = 집필일 · `slug`·`image`·`keepImagesInBody: true`·`emoji`·`category: "hand-rankings"` = EN 그대로 · `readTime` = `"N min"`(숫자는 EN 그대로) · `imageAlt`는 프랑스어로(카드 토큰 축어) · 🔴 **content에 히어로 넣지 마라**(EN에도 없다).
- **EN 파일 꼬리**: kicker만 `export default POST;`가 있다 → fr도 그 편만 붙인다.
- **등록**: `lib/posts-fr/index.ts`의 `// [fr-rank import 시작]`~`끝` · `// [fr-rank 배열 시작]`~`끝` 두 칸에만. import 이름 = camelCase(`holdemHandRankings` …). 칸 밖 금지.
- **자기 게이트**(편마다): `npm run audit:hard -- --locale=fr --slug=<slug>` 🔴 0 · 끝에 `npm run check:intl-links` · `npm run check:structure`(fr 행 내 슬러그 결손 0) · `npm run build`.

## 1. 공통 결정 (6편 전부)

### 1-A. 고정문 (계획 §3-A ① · 판단하지 말고 그대로)
| EN | fr |
|---|---|
| `> **Quick answer**`(flush-vs-straight L33 · split-pot L25 · reading-the-board L41) | `> **Réponse rapide**` |
| `:::readnext[Keep reading]` | `:::readnext[À lire ensuite]` |
| `## FAQ` | `## FAQ` |
| `## Related Posts` | `## Articles liés` |
| `## The Takeaways` · `## The 3 Things to Remember` | `## À retenir` (번호 목록 3개는 그대로) |
| `### The Short Answer` | `### La réponse courte` 🆕 |
| `### Kickers at a glance` · `### Tie-breaks at a glance` · `### The core numbers` | `### Le kicker en un coup d'œil` · `### Les égalités en un coup d'œil` · `### Les chiffres clés` 🆕 (확정 카피 H3 표가 다르면 그쪽이 이긴다) |
| readTime `"14 min"` | `"14 min"` |
| FAQ 형식 | `**Q. …**` + 빈 줄 + `A. …` (EN과 동일 · 기존 fr 관례) |
| `> **The one rule that wins arguments**`(hand-rankings L50) · `> **The most common cooler**`(L109) · `> **The check:**`(split L89) | 굵은 라벨만 번역(`> **La règle qui clôt les débats**` · `> **Le cooler le plus fréquent**` · `> **Le test :**`) — 인용 블록 모양 유지 |

### 1-B. 용어 (계획 §3-A ③④ 정본 + 이 레인 신규 — 진행 파일 «신규 용어»에 등재)
| EN | 본문 fr | 비고 |
|---|---|---|
| Royal Flush · Straight Flush · Four of a Kind · Full House · Flush · Straight · Three of a Kind · Two Pair · One Pair · High Card | quinte flush royale · quinte flush · carré · full · couleur · **quinte** · brelan · double paire · paire · carte haute | 첫 등장 병기: «quinte flush royale (royal flush)» · «couleur (flush)» · «quinte (suite)» · «carte haute (hauteur)». 🔴 본문에 «suite» 단독 금지(첫 병기 + 카피·H2·FAQ 문구 안에서만) |
| full house 읽기 | «full aux dames par les cinq» (QQQ55) · «full aux rois par les as»(KKK-AA) | 계획 §3-A ③ |
| quads · boat · trips · set | carré · full · brelan · **brelan servi**(set) | EN이 «Trips / Set»을 구분하는 자리(hand-rankings L132~144 · FAQ L366)는 «brelan (trips)» vs «brelan servi (set)»로 |
| wheel · steel wheel · Broadway | **la roue (wheel)** · «la roue à la couleur»(A-5 quinte flush · 🆕 신규) · **Broadway**(첫 등장 «Broadway (la quinte à l'as)») | 도구 용어집 «Roue (wheel)» |
| board | **le board** (첫 등장 «le board (les cartes communes)») | 🔴 «tableau»를 board 뜻으로 쓰지 마라(«tableau» = 표) |
| playing the board | **jouer le board** | 🆕 |
| hole cards · community cards | **cartes fermées** · **cartes communes** | 코퍼스 28 · 22 |
| best five (cards) | **les cinq meilleures cartes** / «ta meilleure main de 5 cartes» | 🆕 |
| tie · break a tie · tiebreaker | **égalité** · **départager** · «règle de départage» | 🆕 |
| split pot · chop · chopped pot | **pot partagé (split pot)** · «partager (le pot)» · 구어 «chop» 병기 1회 | 🆕 · 코퍼스 «pot partagé» 1 · «partage du pot» 1 |
| odd chip | **le jeton restant (odd chip)** | 🆕 — 코퍼스 0 · 서술형으로 고정(«jeton impair»는 쓰지 않는다) |
| side pot · main pot | pot annexe (side pot) · pot principal | §3-A ④ |
| kicker · side card | **kicker** · «carte d'accompagnement»(첫 정의에 1회 · 도구 용어집 축어) | — |
| first/second/third kicker | premier / deuxième / troisième kicker | 🆕 |
| dominated (ace) | **as dominé** | 🆕 |
| outkick | «battre au kicker» | 🆕 |
| the nuts · nut flush | **les nuts** · «la couleur max (nut flush)» | 🆕 «couleur max» |
| paired board · dry / wet board | **board pairé** · **board sec** / **board humide** | L-B §4-B pokerstars.fr 축어 |
| muck · table (v.) | «jeter (muck)» · «abattre / montrer ses cartes» | showdown = **abattage**(카피·H2는 «showdown» 허용) |
| dealer | **donneur** · 여성 딜러(reading-the-board L27 «she») = **la donneuse** | 코퍼스 donneur 46 |
| suit | **enseigne**(족보 couleur와 헷갈리는 문장) · 무늬 이름 pique · cœur · carreau · trèfle | — |
| rule citations | «(TDA 2024, règle 20)» · «règle 73 des règles de tournoi WSOP 2026» | 코퍼스 «(TDA 2024, règle 16)» · «règle 97» |

### 1-C. 조판 (계획 §3-A ②)
- **tu** 전용 · 곧은 `'` · `« … »`(안쪽 공백) · `Texas Hold'em`.
- 숫자 프랑스식: `10 200` · `2 598 960` · `3,03 %` · `0,0032 %` · `~0,197 %` · `1,5×` · `$` 앞붙임. **값은 EN 축어, 구분자만** 바꾼다(C 전사 대조가 정규화 후 비교).
- 카드 토큰(`A♠ K♥ 10♦`)과 랭크 문자열(`A-K-Q-J-10` · `QQQ55` · `K-K-K-Q-Q`)은 **축어**. 🔴 R/D/V 금지. 산문에서 풀어 쓸 때만 «paire d'as», «roi», «dame», «valet».
- EN 산문의 `T-9`(flush-vs-straight L96) 같은 T 표기는 `10-9`로(코퍼스 관례).
- 하이라이트 색(`==g:` `==r:` `==b:` `==`) · `**굵게**` 위치는 EN과 같게. `**` 중첩 금지.

### 1-D. 링크 — **편차 0**
6편의 EN 내부링크 대상은 전부 계획 §1 «51편» 안이다: hand-rankings · flush-vs-straight · kicker · tiebreak-rules · split-pot-rules · reading-the-board(🅱 이 레인) · texas-holdem-rules-for-beginners · showdown-rules · all-in-rules(🅰 기존 fr) · probability(🅲) · starting-hands-chart(🅳) · icm · tournament-vs-cash-game(🅴) · glossary(🅵). 제외 대회 가이드 5편 링크 **0** · 외부 링크 0 · 페이지 내 앵커 `(#…)` 0 · `<a id=` 0(6편 grep 확인).
→ **EN 링크를 전부 그대로** `/fr/blog/<slug>`로. 썸네일 인자 `"thumb:/images/…"` 그대로. 앵커 텍스트만 프랑스어.
- 🆕 **도구 앵커**(현지 추가 · 계획 §3-A ⑤ 문구 고정): hand-rankings와 reading-the-board에 각 1개 — `[calculateur d'équité](/fr/calculator)`(«board complet이면 승자와 이기는 패를 알려 준다» = 도구 FAQ 축어 «avec un board complet, il nomme le gagnant et la main gagnante»). 다른 편에는 넣지 않는다.
- readnext 카드 줄 = `/fr/blog/<slug> | <fr 제목> | <이미지 그대로>` — 제목은 이 레인 6편이면 확정 카피의 `title`(짧게 줄여도 됨), all-in-rules는 기존 fr 글의 제목을 줄여서.
- 관련 글 그리드 카드의 대상 중 아직 fr이 없는 글(starting-hands-chart)도 **건다**(배포는 51편 머지 뒤 1회).

### 1-E. 원시 HTML 줄 (축어 · 스타일 문자열 한 글자도 바꾸지 마라)
- **관련 글 그리드**(`## Articles liés` 아래 `<div style="display:grid;…">`): href만 `/fr/blog/…`, 카드 안 글자(라벨·제목·설명)만 프랑스어. `onmouseover`/`onmouseout` 그대로.
- **크림 박스**(`<div style="background:rgba(255,248,210,0.10);…">` … `</div>`): 여는 줄·닫는 줄·**앞뒤 빈 줄**까지 EN 그대로(빈 줄이 없으면 마크다운 표가 안 그려진다). padding 값이 편마다 다르다(`4px 20px 20px` / `16px 20px`) — 각 EN 줄을 그대로 복사.
- 디렉티브(`:::stripe` · `:::tip[…]:::` · `:::note[…]:::` · `:::hand[카드] 라벨:::` · `:::compare` · `:::steps` · `:::tiebreak` · `:::quiz:::`) = 형식 그대로, 사람이 읽는 글자만 번역. `:::hand[…]`의 카드 목록 **축어**, 라벨 «Board (5 cards)» → **«Board (5 cartes)»** · «Board (4 cards, turn)» → **«Board (4 cartes, turn)»**. `|` 개수 보존. `:::quiz:::`(hand-rankings L53)는 그대로 둔다(로케일 페이지에선 렌더러가 지운다 — `lib/intl-blog-page.tsx` L213).
- 이미지 줄 `![alt](path "title")`: path 축어, alt·title만 프랑스어(카드 토큰 축어).

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩 · tldr 안 마크다운 · «guide complet / tout savoir» 류 · slug·이미지 변경 · vous · 본문 «suite» 단독 · board 뜻 «tableau» · **프랑스 카지노·대회·금액 창작**(EN 경험담에 장소·금액이 없다 — 없는 채로 옮겨라. «cash game live»는 EN에 있으니 허용) · 합법성·실전 사이트 추천 · 하이라이트 색 변경 · 경쟁사 이름(SERP 오류는 «흔한 오해»로만 다룬다).

### 1-G. 형제 글 인용 (같은 사이트 안 같은 사실 · 축어로)
- **`:::tiebreak` 10행**: hand-rankings(L185~196)를 먼저 쓰고, tiebreak-rules(L83~94)는 **hand-rankings fr 행을 축어 복사**한다(두 번역이 갈리지 않게). EN 1행만 다르다(hand-rankings «Tie only when the board itself is the royal — everyone chops» vs tiebreak «Two of them only happens when the board is the royal — everyone chops») — 뜻이 같으니 tiebreak도 hand-rankings fr 1행을 그대로 쓴다. 라벨 `+Kicker` / `-No kicker` → `+Kicker` / `-Pas de kicker`.
- **로열 플러시 확률**(hand-rankings FAQ 🆕 «probabilité d'obtenir une quinte flush royale» 답 · EN holdem-probability L49 축어): «Royal Flush | 1 in 649,740 (0.000154%) | 1 in 30,940 (0.0032%)» → 5장 = 1 sur 649 740 (0,000154 %) · 리버까지 7장 = 1 sur 30 940 (0,0032 %) + `[probabilités au poker](/fr/blog/holdem-probability)` 앵커. hand-rankings EN L83 «roughly once in 31,000 hands»와 같은 값(반올림)이다 — 본문 L83은 EN대로 «environ une fois toutes les 31 000 mains».
- **flush vs straight 수치**는 두 편에서 같은 값: 5장 5 108 / 10 200 · 7장 3,03 % / 4,62 %(hand-rankings L256 · flush-vs-straight 전편). 
- **odd chip**: split-pot L114~122(TDA 2024 règle 20 · 버튼 왼쪽 첫 승자)와 tiebreak L157(WSOP 2026 règle 73 인용)은 같은 규칙 — 두 편의 fr 문장이 서로 모순되지 않게. WSOP 인용은 **영어 원문을 « » 이탤릭으로 그대로 두고** 바로 뒤에 프랑스어로 풀어 쓴다(번역문을 원문처럼 인용하지 않는다).

### 1-H. 카피 확정 경위 (A-⑥)
- Fable 서브 1회(입력 = 키워드 실측·PAA 축어·EN 메타/H2/H3/FAQ·§3-A 고정문·§3-B 금지 헤드·posting.mdc «SEO 카피» 절). 출력 그대로 각 편 «확정 카피»에 실었고, **Opus 조정 8건**만 가했다:
  1. hand-rankings H2 7 «Qui gagne, la couleur ou la suite ?» → «Pourquoi la couleur bat-elle la suite ? Le calcul en bref» (PAA 축어 헤드는 flush-vs-straight 몫 · L-B §7-1 «요약 + 앵커»)
  2. hand-rankings FAQ 4 «Qui est plus fort, la suite ou la couleur ?» → «La couleur bat-elle la suite au poker ?» (flush-vs-straight FAQ 1과 같은 문장 회피)
  3. hand-rankings FAQ 5 «Qui est le plus fort entre le full et la couleur ?» → «Le full bat-il la couleur ?» (flush-vs-straight FAQ 🆕와 같은 문장 회피)
  4. flush-vs-straight tag «quinte flush» → «couleur ou suite qui gagne» (족보 이름 헤드는 hand-rankings 몫)
  5. kicker tag «jouer le board» → «kicker poker définition» (reading-the-board 헤드)
  6. tiebreak tag «kicker poker» → «départager égalité poker» (kicker 헤드)
  7. split-pot tag «égalité au poker» → «partage de pot poker» (tiebreak 헤드)
  8. split-pot tag «le board joue poker» → «comment partager le pot poker» (reading-the-board 헤드)
- 글자 수 Opus 재측정(String.length): seoTitle 54~59 / 60 · desc 151~155 / 160 · tldr 264~316 · title 57~69 — 초과 0.
- Fable 판단 메모(축어):
1. **«Que se passe-t-il en cas d'égalité au poker ?»(PAA)가 tiebreak·split-pot 두 SERP에 걸린다** → H2 축어는 égalité 헤드 소유자 tiebreak에, split-pot은 FAQ 🆕로만. 같은 이유로 «couleur sur la table : qui gagne ?»(40)는 tiebreak 🆕 H2, reading-the-board는 FAQ를 «sur le board»로 변형.
2. **hand-rankings seoTitle을 «Sûr d'avoir gagné ?» 훅으로** — EN «Thought You Won but Lost the Pot?» 직역(«Tu pensais avoir gagné ?»)은 키워드 두 개를 넣으면 62~64자로 넘쳐 훅을 압축했다. desc에 «floppé une couleur et quand même perdu le pot»으로 EN 훅 전문을 살렸다.
3. **flush-vs-straight H2 2를 레딧 제목 축어 «Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ?»로** — EN «Why does a flush beat a straight?»의 직역 대신 프랑스인이 실제 던진 질문. 답(couleur가 더 희귀하니 더 강함)은 같은 수치로 이어진다. «probable»은 H2라 §2 ⑧ 금지(title·seoTitle·tags) 밖.
4. **kicker·tiebreak 훅 충돌 회피** — EN 둘 다 «Same pair»로 시작한다. kicker = «Même paire, pot perdu ?», tiebreak = «Même main, qui gagne ?»(égalité를 «qui gagne»와 붙여 équité 오인 방지).
5. **hand-rankings 🆕 «tableau à imprimer» H2는 선택적** — H2 1의 표와 내용이 겹친다. B가 중복으로 느끼면 H2 1 아래 H3로 내려도 좋다(«PDF» 약속 금지는 동일). «C'est quoi le T au poker ?»(PAA)는 EN에 없는 표기 사실이라 넣지 않았다.
6. **정보형 보조어로 끝낸 seoTitle 셋**(«ordre des mains» · «au poker» · «avoir les nuts»)은 posting.mdc «핵심 키워드 명사로 끝낼 것»에 맞춘 것 — hand-rankings의 «Combinaisons poker et ordre des mains»는 59자로 목표(≤58)를 1자 넘지만 하드리밋(60) 안이다. 60자 정각인 후보(«La couleur, et ce qui la bat»)는 쉼표를 빼 59로 내렸다.

---
## holdem-hand-rankings — EN updated 2026-10-06 · P1

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Poker Hand Rankings in Texas Hold'em — Best to Worst, With the Odds |
| seoTitle | Thought You Won but Lost the Pot? — Poker Hand Rankings & Ties |
| desc | Flopped a flush and still lost the pot? Here are all 10 poker hand rankings best to worst, the real odds behind each, and how kickers and ties decide it. |
| tldr | Poker hand rankings from best to worst are: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, and High Card. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-09 · 2026-10-06 · 14 min · 🃏 |
| image | /images/holdem-hand-rankings-hero.webp |
| imageAlt | Royal Flush — 10 J Q K A of spades on a poker table with chip stacks and dealer button |
| tags | "poker hand rankings", "texas holdem hands", "poker hands order", "what beats what in poker", "poker kicker", "poker tie breaker", "best poker hands", "holdem hand chart" |

### 소유표 (계획 §3-B)
- **주인인 검색어**: combinaison(s) poker 49 500 · main(s) poker 14 800 · ordre main / ordre des mains poker 2 400 · combinaison poker ordre 1 300 · classement · 족보 이름 단독(quinte flush royale 1 900 · quinte flush 1 600 · couleur 1 300 · royal flush 1 300 · brelan 880 · flush 880 · full 720 · quinte 720 · full house 590 · carré 210) · suite poker 3 600.
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: nuts(→ reading-the-board) · probabilité(→ 🅲 · FAQ 1문항 + 앵커만) · calcul/calculateur(→ `/fr/calculator`) · mains de départ / range / chart(→ 🅳·`/fr/hand-chart` — EN 태그 «holdem hand chart»는 **버린다**) · lexique/termes(→ `/fr/glossary`) · «suite ou couleur» 선두(→ flush-vs-straight) · «égalité» 선두(→ tiebreak).

### 구조 (EN L## · 축어 목록 — 본문은 EN 파일에서)
```
L27 [H] ## What Are the Poker Hand Rankings, Best to Worst?
L31 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L33 [표1] | # | Hand | Also called | What it is | Odds (by river) |
L46 [HTML] </div>
L50 [BOX] > **The one rule that wins arguments**
L51 [LINK] /en/blog/holdem-kicker  thumb=/images/holdem-kicker-hero.webp
L53 [DIR] :::quiz:::
L57 [H] ## Card Strength: The 30-Second Foundation
L61 [H] ### Rank order (high to low)
L67 [H] ### Suits don't rank
L73 [H] ## What Are the 10 Poker Hands? (Each One Explained)
L77 [H] ### #1 — Royal Flush
L79 [DIR] :::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10, all spades:::
L85 [H] ### #2 — Straight Flush
L87 [DIR] :::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — five hearts in sequence:::
L93 [H] ### #3 — Four of a Kind (Quads)
L95 [DIR] :::hand[8♣,8♦,8♥,8♠,K♥] Four of a Kind — four eights + kicker:::
L101 [H] ### #4 — Full House (Boat)
L103 [DIR] :::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — three queens + two fives:::
L109 [BOX] > **The most common cooler**
L112 [H] ### #5 — Flush
L114 [DIR] :::hand[A♦,J♦,8♦,6♦,2♦] Flush — five diamonds:::
L120 [H] ### #6 — Straight
L122 [DIR] :::hand[7♠,6♥,5♣,4♦,3♠] Straight — five in a row, mixed suits:::
L132 [H] ### #7 — Three of a Kind (Trips / Set)
L134 [DIR] :::hand[J♣,J♠,J♥,A♦,4♠] Three of a Kind — three jacks + kickers:::
L146 [H] ### #8 — Two Pair
L148 [DIR] :::hand[10♠,10♥,8♣,8♦,A♠] Two Pair — tens and eights + ace kicker:::
L154 [H] ### #9 — One Pair
L156 [DIR] :::hand[K♠,K♦,9♥,6♣,2♠] One Pair — kings + three kickers:::
L162 [H] ### #10 — High Card
L164 [DIR] :::hand[A♣,Q♠,9♥,5♦,3♣] High Card — no combination:::
L172 [H] ## How Do Kickers and Ties Work in Poker?
L174 [IMG] ![Poker showdown — comparing two players' best five-card hands](/images/holdem-kicker-showdown-neutral.webp "At showdown, the best five-card hand takes the pot")
L185 [DIR] :::tiebreak
L196 [DIR] :::
L198 [LINK] /en/blog/holdem-tiebreak-rules , /en/blog/holdem-split-pot-rules
L202 [H] ## Read the Board: 3 Live Puzzles
L204 [IMG] ![K-K-K-A-2 board on a poker table — can you spot the full house before the dealer does?](/images/holdem-hand-rankings-board-puzzle.webp "Poker board reading puzzle — find your best five-card hand")
L208 [H] ### Puzzle 1 — The hidden full house
L210 [DIR] :::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 cards):::
L216 [H] ### Puzzle 2 — The flush that's actually better
L218 [DIR] :::hand[7♥,8♥,9♥,10♥,J♠] Board (5 cards):::
L224 [H] ### Puzzle 3 — When you have to share
L226 [DIR] :::hand[K♠,K♦,K♥,A♠,2♠] Board (5 cards):::
L234 [H] ## What Beats What in Poker? The Matchups People Argue About
L238 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L240 [표2] | Matchup | Winner | Why |
L250 [HTML] </div>
L254 [H] ## Why Does a Flush Beat a Straight?
L256 [LINK] /en/blog/holdem-probability  thumb=/images/holdem-probability-hero.webp
L262 [H] ## The 1-Second Hand-Reading Routine
L264 [IMG] ![Infographic of a paired 9♥ Q♥ 9♠ 8♣ 7♠ community board — reading the pairs and possible straights to find your best five cards](/images/holdem-hand-rankings-board-read.webp "How to read a poker board fast — suits, stra
L278 [H] ## How Do You Memorize Poker Hands Fast?
L282 [표3] | Step | What to do | Time |
L292 [H] ## Are Poker Hand Rankings the Same in Every Game?
L296 [표4] | Game | Hand rankings | Key difference |
L307 [DIR] :::readnext[Keep reading]
L310 [DIR] :::
L312 [H] ## FAQ
L314 [Q] **Q. What is a flush in poker?**
L318 [Q] **Q. What is a full house in poker?**
L322 [Q] **Q. What is a straight in poker?**
L326 [Q] **Q. Does a flush beat a straight in poker?**
L328 [LINK] /en/blog/holdem-flush-vs-straight
L330 [Q] **Q. Does a full house beat a flush?**
L334 [Q] **Q. What beats a straight in poker?**
L338 [Q] **Q. What beats a flush in poker?**
L342 [Q] **Q. What beats a full house in poker?**
L346 [Q] **Q. What beats a royal flush in poker?**
L350 [Q] **Q. What beats a straight flush in poker?**
L354 [Q] **Q. What is a kicker?**
L358 [Q] **Q. Can two players have the same hand?**
L362 [Q] **Q. Do you have to use both of your hole cards?**
L366 [Q] **Q. What's the difference between a set and trips?**
L370 [Q] **Q. What is the highest hand in poker?**
L374 [Q] **Q. Is three of a kind better than two pair?**
L378 [Q] **Q. Does a straight flush beat four of a kind?**
L382 [Q] **Q. What is the lowest (worst) hand in poker?**
L386 [Q] **Q. Can you have three pairs in poker?**
L390 [Q] **Q. Can you use an ace as a 1 in poker?**
L396 [H] ## The 3 Things to Remember
L404 [LINK] /en/blog/holdem-starting-hands-chart
L408 [H] ## Related Posts
L410 [HTML] <div style="display:grid …> (관련 글 그리드)
L441 [HTML] </div>
```
- 표 **4**(L33 서열 10행 · L240 매치업 · L282 암기 3단계 · L296 게임별) · 본문 이미지 **3**(kicker-showdown-neutral · hand-rankings-board-puzzle · hand-rankings-board-read) · 디렉티브 quiz·hand×13·tiebreak·readnext · FAQ **20**.

### 링크
EN 내부링크 = kicker(L51 thumb) · tiebreak-rules · split-pot-rules(L198) · probability(L256 thumb) · flush-vs-straight(L328 FAQ) · starting-hands-chart(L404) + readnext 2(flush-vs-straight · tiebreak) + 그리드 6(flush-vs-straight · tiebreak · split-pot · texas-holdem-rules-for-beginners · starting-hands-chart · reading-the-board). **편차 0** · 🆕 도구 앵커 1(`/fr/calculator` «calculateur d'équité» — «The 1-Second Hand-Reading Routine» 절 끝 1문장) · 🆕 FAQ 확률 답의 holdem-probability 앵커(§1-G).

### 키워드·SERP 요지 (L-B §1·§3-1·§4-A·§7-1)
- SERP 1위 = 인쇄용 PDF · 운영사 5곳+위키+PokerNews(가장 단단한 SERP). 강점 = 10족보 표·족보별 H3·영어 명칭 병기·확률표·FAQPage. 약점 = §13 오류 다수 · 5장/7장 혼동 · 경험담 0 · 7장 퍼즐 없음 · 랩어라운드 언급 1편.
- **우리가 더 줄 것 3**: ① 7장 퍼즐 3개(EN L202~232) + 베스트5 명시 ② 서열표 «리버까지 확률» 열 + FAQ에서 5장 기준 대비(§1-G) ③ 경험담 4자리(아래).
- 흔한 오해(차별화 재료 · 경쟁사 이름 없이 «흔히 보는 설명» 정도로만): «un brelan bat une quinte»(✗) · «la royale = une quinte flush avec un as»(✗ — A-2-3-4-5 동무늬는 최저 quinte flush) · «couleur = cartes qui se suivent»(✗ = quinte flush). EN 본문에 이미 반박 근거가 있다(L35~44 표 · L85~91 · L112~118) — 새 문단을 만들지 말고 해당 H3 안 1문장으로.

### 확정 카피 (Fable 서브 1회 → Opus 글자 수 재측정)
#### 메타
- **title** (57) : Combinaisons au poker : l'ordre des mains et qui bat quoi
- **seoTitle** (59) : Sûr d'avoir gagné ? — Combinaisons poker et ordre des mains
- **desc** (152) : Tu as floppé une couleur et quand même perdu le pot ? Les 10 combinaisons du poker de la plus forte à la plus faible, qui bat quoi et le rôle du kicker.
- **tldr** (274) : L'ordre des combinaisons au poker, de la plus forte à la plus faible : quinte flush royale, quinte flush, carré, full, couleur, quinte (suite), brelan, double paire, paire et carte haute. Les enseignes ne départagent jamais ; à combinaison égale, c'est le kicker qui décide.
- **tags** (9) : "combinaison poker", "ordre des mains poker", "main poker", "quinte flush royale", "suite poker", "couleur poker", "brelan poker", "full poker", "combinaison poker holdem"

#### H2 (질문형 10/12 = 83 %)
| # | EN H2 | fr H2 | 형 |
|---|---|---|---|
| 1 | What Are the Poker Hand Rankings, Best to Worst? | Quel est l'ordre des combinaisons au poker, de la plus forte à la plus faible ? | Q |
| 🆕 | — (1 뒤) | Le tableau des combinaisons à imprimer | – |
| 2 | Card Strength: The 30-Second Foundation | Quel est l'ordre de force des cartes ? Les bases en 30 secondes | Q |
| 3 | What Are the 10 Poker Hands? (Each One Explained) | Quelles sont les mains au poker ? Les 10 combinaisons expliquées une par une | Q |
| 🆕 | — (3 뒤) | Comment s'appellent les combinaisons en anglais et en français ? | Q |
| 4 | How Do Kickers and Ties Work in Poker? | Égalité et kicker : qui gagne avec la même combinaison ? | Q |
| 5 | Read the Board: 3 Live Puzzles | Sais-tu lire le board ? 3 mains à décoder | Q |
| 6 | What Beats What in Poker? The Matchups People Argue About | Qu'est-ce qui bat quoi au poker ? Les duels qui font débat | Q |
| 7 | Why Does a Flush Beat a Straight? | Pourquoi la couleur bat-elle la suite ? Le calcul en bref | Q |
| 8 | The 1-Second Hand-Reading Routine | La routine d'une seconde pour lire ta main | – |
| 9 | How Do You Memorize Poker Hands Fast? | Comment retenir les combinaisons du poker rapidement ? | Q |
| 10 | Are Poker Hand Rankings the Same in Every Game? | L'ordre des combinaisons est-il le même dans toutes les variantes ? | Q |

🆕 메모: «tableau à imprimer» 절은 H2 1의 서열표를 인쇄용으로 다시 보여주는 자리 — **PDF 파일 약속 금지**, 본문 표 그대로. 「anglais et français」 절은 H3 병기 명칭을 2열 표로 모은 것(새 사실 0).

#### H3
| EN H3 | fr H3 |
|---|---|
| Rank order (high to low) | L'ordre des cartes (de la plus haute à la plus basse) |
| Suits don't rank | Les enseignes ne se classent pas |
| #1 — Royal Flush | #1 — Quinte flush royale (royal flush) |
| #2 — Straight Flush | #2 — Quinte flush (straight flush) |
| #3 — Four of a Kind (Quads) | #3 — Carré (four of a kind) |
| #4 — Full House (Boat) | #4 — Full (full house) |
| #5 — Flush | #5 — Couleur (flush) |
| #6 — Straight | #6 — Suite ou quinte (straight) |
| #7 — Three of a Kind (Trips / Set) | #7 — Brelan (three of a kind) |
| #8 — Two Pair | #8 — Double paire (two pair) |
| #9 — One Pair | #9 — Paire (one pair) |
| #10 — High Card | #10 — Carte haute ou hauteur (high card) |
| Puzzle 1 — The hidden full house | Énigme 1 — Le full caché |
| Puzzle 2 — The flush that's actually better | Énigme 2 — La couleur plus forte qu'elle ne paraît |
| Puzzle 3 — When you have to share | Énigme 3 — Quand il faut partager |

#### FAQ (EN 20 + 🆕 3)
| # | EN Q | fr Q |
|---|---|---|
| 1 | What is a flush in poker? | Qu'est-ce qu'un flush au poker ? |
| 2 | What is a full house in poker? | Qu'est-ce qu'une main full au poker ? |
| 3 | What is a straight in poker? | C'est quoi une suite au poker ? |
| 4 | Does a flush beat a straight in poker? | La couleur bat-elle la suite au poker ? |
| 5 | Does a full house beat a flush? | Le full bat-il la couleur ? |
| 6 | What beats a straight in poker? | Qu'est-ce qui bat une suite au poker ? |
| 7 | What beats a flush in poker? | Qu'est-ce qui bat une couleur au poker ? |
| 8 | What beats a full house in poker? | Qu'est-ce qui bat un full au poker ? |
| 9 | What beats a royal flush in poker? | Qu'est-ce qui bat une quinte flush royale ? |
| 10 | What beats a straight flush in poker? | Qu'est-ce qui bat une quinte flush ? |
| 11 | What is a kicker? | C'est quoi le kicker au poker ? |
| 12 | Can two players have the same hand? | Deux joueurs peuvent-ils avoir la même main ? |
| 13 | Do you have to use both of your hole cards? | Est-on obligé d'utiliser ses deux cartes fermées ? |
| 14 | What's the difference between a set and trips? | Quelle différence entre un brelan servi (set) et un brelan (trips) ? |
| 15 | What is the highest hand in poker? | Quelle est la combinaison la plus forte au poker ? |
| 16 | Is three of a kind better than two pair? | Qui gagne entre deux paires et un brelan ? |
| 17 | Does a straight flush beat four of a kind? | Une quinte flush bat-elle un carré ? |
| 18 | What is the lowest (worst) hand in poker? | Quelle est la combinaison la plus faible au poker ? |
| 19 | Can you have three pairs in poker? | Peut-on avoir trois paires au poker ? |
| 20 | Can you use an ace as a 1 in poker? | L'as compte-t-il comme un 1 dans la suite As-2-3-4-5 ? |
| 🆕 | — (PAA) | Quel full est le plus fort ? |
| 🆕 | — (PAA) | Quelle est la différence entre une quinte flush et une quinte flush royale ? |
| 🆕 | — (PAA · §2 ⑧ 허용 1문항) | Quelle est la probabilité d'obtenir une quinte flush royale ? |

🆕 메모: 마지막 문항의 답 수치는 **EN 본문 #1 절의 값 그대로**(입력 파일에는 미노출 → B가 EN 본문에서 복사). PAA «C'est quoi le T au poker ?»는 EN에 없는 표기 사실이라 제외.

#### 키워드 흡수
| 검색어 (볼륨) | 자리 |
|---|---|
| combinaison poker (49 500) | seoTitle · desc · tags · H2 1·3·9·10 · tldr |
| main poker / mains poker (14 800) | seoTitle(«ordre des mains») · tags · H2 3(PAA 축어) |
| ordre main poker / ordre des mains poker (2 400+2 400) | seoTitle · tags · H2 1 · tldr |
| combinaison poker ordre (1 300) · ordre des combinaisons poker (40) | H2 1 · H2 10 · tldr |
| de la plus forte à la plus faible (자동완성 «la plus forte» · «ordre croissant») | title · desc · H2 1 · tldr |
| quinte flush royale (1 900) · royal flush (1 300) | tags · H3 #1 · FAQ 9·🆕·🆕 |
| suite poker (3 600) · quinte poker (720) | tags · H3 #6 · FAQ 3·4·6 |
| couleur poker (1 300) · flush poker (880) | tags · desc · H3 #5 · FAQ 1·4·7 |
| brelan poker (880) | tags · H3 #7 · FAQ 14·16 |
| full poker (720) · full house (590) | tags · H3 #4 · FAQ 2·5·8·🆕 |
| combinaison poker holdem (210) | tags |
| combinaison poker en anglais / francais (자동완성·110) | 🆕 H2(3 뒤) |
| combinaison poker à imprimer / tableau (40·자동완성) | 🆕 H2(1 뒤) |
| Quelles sont les mains au poker ? (PAA) | H2 3 |
| Quelle est la combinaison la plus forte au poker ? (PAA) | FAQ 15 |
| Qui gagne, la couleur ou la suite ? (PAA) | H2 7 |
| Qui est le plus fort entre le full et la couleur ? (PAA) | FAQ 5 |
| Qui gagne entre deux paires et un brelan ? (PAA) | FAQ 16 |
| Qu'est-ce qu'une main full au poker ? / Quel full est le plus fort ? (PAA) | FAQ 2 · FAQ 🆕 |
| Qu'est-ce qu'un flush au poker ? (PAA) | FAQ 1 |
| kicker · égalité | desc · H2 4 · FAQ 11·12 (헤드는 kicker·tiebreak 글 몫 — 여기서는 보조) |

### §13 자리 (C 손검산·전사 대조 대상)
- 카드 L: 79 81 87 89 95 97 103 105 114 116 122 124 134 136 140 142 148 150 156 158 164 166 · **퍼즐 210~230** · 264(이미지 alt) · 316(FAQ)
- 수치 L: 35~44(서열표 «Odds (by river)» 열 0.0032% · 0.0279% · 0.168% · 2.60% · 3.03% · 4.62% · 4.83% · 23.5% · 43.8% · 17.4%) · 51(«roughly 61%») · 83(«once in 31,000 hands») · 256(3.03% · 4.62%) · 288(«90%»)
- 표 L240 매치업(«A-2-3-4-5 vs 10-J-Q-K-A» 등) · `:::tiebreak` L185~196 전체.

### 경험담 자리 (EN 축어 → 프랑스 독자 맥락으로 다시 쓰되 없는 사실 금지)
- L23: «I've spent more nights than I can count watching that exact "I thought I won" face across a table, and it almost always traces back to one missed detail on the board. …»
- L110: «> In twelve years around the felt, "my nut flush lost to a boat" is the single most frequent beat I hear players groan about. Any time the board pairs, check for a full house *before* you commit with a flush or a straight.»
- L214(퍼즐 1 답 안): «The first home game I ever dealt, I watched two different players muck this exact hand thinking "AAKK + Q is just two pair" — it isn't.»
- L274: «I still run this exact scan — flush, then straight, then pairs — on every single board, no matter how many hours I've been sitting there. …»

### 현지 추가 (확정 카피의 🆕 H2·FAQ를 채우는 법 — 새 사실 금지)
- 🆕 명칭 대응표 H2(있다면): EN 표 L33~44의 «Hand» 열 영어 명칭 ↔ §1-B fr 명칭 — 행 10개, 표 1개. 내용은 이름 대응뿐(새 수치 없음).
- 🆕 «à imprimer» H2(있다면): 본문 서열표(L33 표)를 가리키며 «이 표를 저장·인쇄해 테이블 옆에 두라» 1~2문장 + 서열을 한 줄로(ordre croissant 1줄 포함). 🔴 PDF 파일·다운로드 버튼 약속 금지(없다).
- 🆕 FAQ «Quel full est le plus fort ?»: EN L107 축어(«QQQ55 beats JJJ99 because queens top jacks, no matter how big the pair is. Only if the trips tie do you compare the pairs.») 근거로 «brelan 먼저, 그다음 paire».
- 🆕 FAQ 로열 확률: §1-G 수치 + holdem-probability 앵커.
- FAQ 16 «Qui gagne entre deux paires et un brelan ?» = EN L374 Q의 개명(새 문항 아님).
- 🆕 «tableau à imprimer» H2는 Fable 메모대로 **선택적**: 서열표와 겹친다고 판단되면 H2 1 아래 H3로 내려도 된다(카피 문구는 그대로).

### 하지 말 것
- EN 태그 «holdem hand chart» 승계 금지(§3-B ⑨). «Same in Every Game?» 절에서 poker menteur·32장 게임 같은 프랑스 변형을 **새로 서술하지 않는다**(EN 표 L296의 게임만).
- EN-먼저 후보: 없음(A에서 발견 0).

---

## holdem-flush-vs-straight — EN updated 2026-09-28 · P2

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Does a Flush Beat a Straight? The Math and the Misreads |
| seoTitle | Does a Flush Beat a Straight? Yes — and What Beats a Flush |
| desc | Slid a straight forward — and a flush took the pot? A flush always beats a straight. Here's the math, what beats a flush, and 3 boards that fool players. |
| tldr | A flush (five cards of one suit — ~0.197% of five-card deals) always beats a straight (five in sequence, ~0.392%) in Texas Hold'em — because a flush is rarer: across all seven cards to the river, 3.03% versus 4.62% for the straight. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-13 · 2026-09-28 · 11 min · ⚡ |
| image | /images/holdem-flush-vs-straight-hero.webp |
| imageAlt | Infographic: ace-high flush A♠ J♠ 9♠ 6♠ 2♠ beside a nine-high straight with a gold FLUSH WINS badge explaining why a flush ranks higher |
| tags | "does a flush beat a straight", "flush vs straight", "what beats a flush", "what is a straight flush", "why does a flush beat a straight", "flush vs full house", "higher flush", "flush and straight difference" |

### 소유표
- **주인**: suite ou couleur(4변형 70) · «… qui gagne» 50 · quinte ou couleur 20 · full ou couleur 20~30 · couleur ou quinte 10 · «qui est plus fort, la suite ou la couleur» (PAA).
- **금지 헤드**: «combinaison poker»·«ordre des mains» 선두(→ hand-rankings) · probabilité(제목·태그) · nuts · calcul.

### 구조
```
L25 [H] ### The Short Answer
L27 [DIR] :::stripe
L31 [DIR] :::
L33 [BOX] > **Quick answer**
L38 [H] ## Does a Flush Beat a Straight? Where the Two Hands Sit
L42 [표1] | Rank | Hand | Example |
L50 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L54 [H] ## Why Does a Flush Beat a Straight? The Math
L60 [표2] | Hand | Combinations | Probability | Verdict |
L68 [LINK] /en/blog/holdem-probability  thumb=/images/holdem-probability-hero.webp
L70 [H] ### Why this feels backwards
L74 [DIR] :::tip[If you hold a flush draw and your opponent is drawing to a straight, you win the collision — when **both** draws complete, your flush beats their straight at showdown. That is not the same as being the favorite: i
L78 [H] ## 3 Board Spots That Still Fool Players
L80 [IMG] ![Board showing 8♥ 7♥ 6♥ 5♠ A♣ — three hearts on board means a flush is live even if you hold a straight](/images/holdem-flush-vs-straight-board.webp "Three suited cards on board — a flush is possible against your straig
L82 [LINK] /en/blog/holdem-reading-the-board
L84 [H] ### Spot 1 — You make a straight, but the board is three of a suit
L86 [DIR] :::hand[8♥,7♥,6♥,5♠,A♣] Board (5 cards):::
L90 [H] ### Spot 2 — A made straight with a flush draw on top
L92 [DIR] :::hand[8♥,7♥,6♠,2♣] Board (4 cards, turn):::
L98 [H] ### Spot 3 — You have the flush, they table a straight
L100 [DIR] :::hand[J♠,9♠,7♠,4♣,2♦] Board (5 cards):::
L106 [H] ## What Beats a Flush in Poker?
L110 [DIR] :::compare
L117 [DIR] :::
L121 [DIR] :::hand[K♠,9♠,9♥,4♠,2♦] Board (5 cards):::
L125 [LINK] /en/blog/holdem-tiebreak-rules
L129 [H] ## Flush vs Flush, Straight vs Straight — Who Wins the Tie?
L133 [표3] | Player | Flush | Result |
L145 [표4] | Player | Straight | Result |
L150 [LINK] /en/blog/holdem-split-pot-rules
L154 [H] ## What Is a Straight Flush? When Both Happen at Once
L156 [IMG] ![9♥ 8♥ 7♥ 6♥ 5♥ — a straight flush in hearts, the #2 hand in poker](/images/holdem-flush-vs-straight-sf.webp "Straight flush — five hearts in sequence; only a higher straight flush or a royal flush beats it")
L169 [H] ## Are Poker Hands Ranked Differently in Short Deck?
L175 [DIR] :::readnext[Keep reading]
L178 [DIR] :::
L180 [H] ## FAQ
L182 [Q] **Q. Does a flush beat a straight in poker?**
L186 [Q] **Q. Does a straight beat a flush?**
L190 [Q] **Q. Why does a flush beat a straight?**
L194 [Q] **Q. What beats a flush in poker?**
L198 [Q] **Q. What beats a straight in poker?**
L200 [LINK] /en/blog/holdem-hand-rankings
L202 [Q] **Q. Can you have a higher flush than another player?**
L206 [Q] **Q. Does the suit of a flush matter?**
L210 [Q] **Q. Can a flush and a straight ever tie or split the pot?**
L216 [H] ## The Takeaways
L222 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-tiebreak-rules , /en/blog/texas-holdem-rules-for-beginners
L226 [H] ## Related Posts
L228 [HTML] <div style="display:grid …> (관련 글 그리드)
L244 [HTML] </div>
```
- 표 **4**(L42 서열 · L60 조합·확률 · L133 couleur vs couleur · L145 suite vs suite) · 본문 이미지 **2**(flush-vs-straight-board · -sf) · 디렉티브 stripe·tip·hand×4·compare·readnext · FAQ **8**.

### 링크
hand-rankings(L50 thumb · L200) · probability(L68 thumb) · reading-the-board(L82) · tiebreak-rules(L125) · split-pot-rules(L150) · takeaways L222(hand-rankings · tiebreak · texas-holdem-rules-for-beginners) · readnext 2(tiebreak · split-pot) · 그리드 3(hand-rankings · tiebreak · split-pot). **편차 0**.

### 키워드·SERP 요지 (L-B §3-1·§3-2·§7-2)
- 전용 비교 글 0 → 사실상 무경쟁. 레딧 1위 질문 «Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ?» = 우리 «The Math» 절이 정면으로 답한다.
- **우리가 더 줄 것 3**: ① 조합 수 10 200 vs 5 108 + 5장/7장 두 기준 ② 3장 동무늬 보드 7장 예시 3개(L84~102) ③ 페어드 보드 풀하우스 예시(L119~123 · 경험담).

### 확정 카피
#### 메타
- **title** (63) : Suite ou couleur : qui gagne au poker ? Les maths et les pièges
- **seoTitle** (59) : Suite ou couleur, qui gagne ? — La couleur et ce qui la bat
- **desc** (155) : Tu retournes ta suite et la couleur rafle le pot ? Au poker, la couleur bat toujours la suite : les maths, ce qui bat une couleur et 3 boards qui trompent.
- **tldr** (316) : Au Texas Hold'em, la couleur (cinq cartes de la même enseigne, environ 0,197 % des mains de cinq cartes) bat toujours la suite (cinq cartes qui se suivent, environ 0,392 %). La raison : elle est plus rare. Sur les sept cartes jusqu'à la river, tu touches une couleur dans 3,03 % des cas, contre 4,62 % pour la suite.
- **tags** (8) : "suite ou couleur", "suite ou couleur qui gagne", "flush poker", "couleur poker", "quinte ou couleur", "full ou couleur", "straight poker", "couleur ou suite qui gagne"

#### H2 (질문형 8/9 = 89 %)
| # | EN H2 | fr H2 | 형 |
|---|---|---|---|
| (H3) | The Short Answer | La réponse courte | – |
| 1 | Does a Flush Beat a Straight? Where the Two Hands Sit | Suite ou couleur : qui gagne ? Où se placent les deux mains | Q |
| 2 | Why Does a Flush Beat a Straight? The Math | Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ? | Q |
| 3 | 3 Board Spots That Still Fool Players | 3 boards qui piègent encore les joueurs | – |
| 4 | What Beats a Flush in Poker? | Qu'est-ce qui bat une couleur au poker ? | Q |
| 🆕 | — (4 뒤) | Full ou couleur, brelan ou suite : qui gagne ? | Q |
| 5 | Flush vs Flush, Straight vs Straight — Who Wins the Tie? | Couleur contre couleur, suite contre suite : qui gagne en cas d'égalité ? | Q |
| 6 | What Is a Straight Flush? When Both Happen at Once | C'est quoi une quinte flush ? Quand les deux arrivent en même temps | Q |
| 7 | Are Poker Hands Ranked Differently in Short Deck? | L'ordre des mains change-t-il en Short Deck ? | Q |

🆕 메모: 「autres duels」 절은 EN의 비교표·풀하우스 예시가 이미 답한 것만 재배치(brelan < suite < couleur < full) — 새 수치 0. H2 2는 레딧 제목 축어(«plus probable») — 본문 첫 문장에서 10 200 vs 5 108 · 0,392 % vs 0,197 % · 3,03 % vs 4,62 %(EN 값)로 연결.

#### H3
| EN H3 | fr H3 |
|---|---|
| The Short Answer | La réponse courte |
| Why this feels backwards | Pourquoi ça semble à l'envers |
| Spot 1 — You make a straight, but the board is three of a suit | Cas 1 — Tu fais une suite, mais le board a trois cartes de la même enseigne |
| Spot 2 — A made straight with a flush draw on top | Cas 2 — Une suite faite, avec un tirage couleur par-dessus |
| Spot 3 — You have the flush, they table a straight | Cas 3 — Tu as la couleur, l'adversaire retourne une suite |

#### FAQ (EN 8 + 🆕 2)
| # | EN Q | fr Q |
|---|---|---|
| 1 | Does a flush beat a straight in poker? | Qui est plus fort, la suite ou la couleur ? |
| 2 | Does a straight beat a flush? | Une suite peut-elle battre une couleur ? |
| 3 | Why does a flush beat a straight? | Pourquoi la couleur bat-elle la suite ? |
| 4 | What beats a flush in poker? | Quelles mains battent une couleur ? |
| 5 | What beats a straight in poker? | Qu'est-ce qui bat une suite au poker ? |
| 6 | Can you have a higher flush than another player? | Peut-on avoir une couleur plus forte qu'un autre joueur ? |
| 7 | Does the suit of a flush matter? | Une couleur à pique bat-elle une couleur à cœur ? |
| 8 | Can a flush and a straight ever tie or split the pot? | Une suite et une couleur peuvent-elles partager le pot ? |
| 🆕 | — (PAA) | Qui est le plus fort entre le full et la couleur ? |
| 🆕 | — (레딧 «Un brelan ne devrait-il pas être meilleur…» · «2 paires battent une couleur ??») | Un brelan ou une double paire peuvent-ils battre une couleur ? |

#### 키워드 흡수
| 검색어 (볼륨) | 자리 |
|---|---|
| suite ou couleur (70 ×4 변형) | title · seoTitle 선두 · tags · H2 1 |
| poker suite ou couleur qui gagne (50) · suite ou couleur qui gagne (자동완성) | seoTitle · tags · H2 1 |
| Qui est plus fort, la suite ou la couleur ? (PAA ×3 SERP) | FAQ 1 |
| Qui gagne, la couleur ou la suite ? (PAA) | H2 1 변형(«Suite ou couleur : qui gagne ?») — 축어는 hand-rankings H2 7 |
| Pourquoi est-il plus probable d'obtenir une suite qu'une couleur ? (레딧 축어) | H2 2 |
| quinte ou couleur (20) · couleur ou quinte (10) | tags |
| full ou couleur poker (20~30) · Qui est le plus fort entre le full et la couleur ? (PAA) | tags · 🆕 H2 · FAQ 🆕 |
| poker brelan ou suite · brelan ou couleur · carre ou couleur (자동완성) | 🆕 H2 · FAQ 🆕 |
| flush poker (880) · straight poker (260) | tags |
| ce qui bat une couleur (EN «what beats a flush») | seoTitle · desc · H2 4 · FAQ 4 |
| Une couleur à pique bat-elle une couleur à cœur ? (PAA 축어) | FAQ 7 |
| 5 108 · 10 200 · 0,197 % · 0,392 % · 3,03 % · 4,62 % (EN 수치) | tldr · H2 2 본문 |

### §13 자리
- 카드 L: 44~48(표1 예시) · 80(이미지 alt) · 86 88 92 94 96 100 102 · 121 123 · 135~136(표3) · 156 158 160 162~163
- 수치 L: 29(stripe 5,108 vs 10,200 · ~2×) · 34 · 58(2,598,960) · 62~66(표2 조합·확률) · 68(1.5× · 4.62% · 3.03%) · 188 · 192 · 219 · tldr(~0.197% · ~0.392% · 3.03% · 4.62%) · L158 «36 combinations»
- 🔴 L96 «anyone holding T-9» → fr «10-9»(§1-C).

### 경험담 자리
- L19: «The first big pot I ever lost in a live cash game went exactly like this: I rivered a ten-high straight, slid it forward like it was gold — and a quiet regular flipped over two hearts. ==r:The dealer pushed the pot the other way==, and I replayed that hand the whole drive home.»
- L119: «I've paid off more paired-board boats holding a pretty nut flush than I'd like to admit, so the danger sign I watch for now is simple: a **paired board**.»

### 현지 추가
- 🆕 «autres duels» H2(있다면): EN `:::compare`(L110~117)와 L119~123 풀하우스 예시가 이미 답한다 — 그 둘을 가리키는 짧은 절(full > couleur · couleur > brelan · suite > brelan · carré > couleur)로, 서열은 EN L42 표 순서에서만. 새 확률·조합 수 금지.
- 🆕 FAQ «Un brelan bat-il une suite ?» 류(있다면): 답 = 아니다, quinte(#6)가 brelan(#7) 위 — EN L42 표 근거.
- Short Deck 절(L169~171)은 EN 축어(«flush beats a full house» in 6+) — 프랑스 룸 이름 추가 금지.

### 하지 말 것
- EN-먼저 후보: 없음.

---

## holdem-kicker — EN updated 2026-10-06 · P3

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | What Is a Kicker in Poker — Rules, Counting & the Dominated Ace |
| seoTitle | What Is a Kicker in Poker? The Side Card That Wins Pots |
| desc | A kicker is the side card that breaks ties in poker — which hands have one and how many, why A9 loses to AK, and the quads exception most guides get wrong. |
| tldr | A kicker is the highest side card that isn't part of your main hand — it breaks ties when two players share the same rank. High card uses 4 kickers, one pair 3, two pair 1, trips 2; straights, flushes, full houses, and straight flushes have none. It's why AK beats AQ when the board pairs an ace. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-07-08 · 2026-10-06 · 10 min · 🃏 |
| image | /images/holdem-kicker-hero.webp |
| imageAlt | Two players turning over A-K and A-Q at showdown with an ace on the board — the king kicker deciding who wins the pot |
| tags | "poker kicker", "what is a kicker in poker", "kicker rules", "does a flush have a kicker", "playing the board", "dominated ace", "kicker card", "does four of a kind have a kicker" |

### 소유표
- **주인**: kicker poker 140 · kicker au poker 20 · «c'est quoi le kicker (au poker)» · «définition kicker».
- **금지 헤드**: mains de départ / range / chart(EN 태그 «dominated ace»는 OK · starting-hands-chart 링크는 앵커로만) · égalité 선두(→ tiebreak) · lexique.
- 도구 `/fr/glossary` «Kicker» 항목이 이 글로 앵커하는 것은 배포 회차(헤드) 몫 — B는 손대지 않는다.

### 구조
```
L23 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L27 [H] ### Kickers at a glance
L29 [DIR] :::stripe
L34 [DIR] :::
L38 [H] ## What Is a Kicker in Poker?
L48 [H] ## Which Poker Hands Have a Kicker — and Which Don't
L52 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L54 [표1] | Hand | Has a kicker? | Kicker cards |
L66 [HTML] </div>
L70 [LINK] /en/blog/holdem-tiebreak-rules  thumb=/images/holdem-tiebreak-hero.webp
L74 [H] ## How Many Kickers Does Each Hand Use?
L78 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L80 [표2] | Hand | Combination | + Kickers | = 5 cards |
L88 [HTML] </div>
L94 [H] ## AK vs AQ: How a Kicker Decides the Winner
L105 [DIR] :::note[Notice both hands share the 9 and 7 from the board. Kickers can come from the board too: if the highest side card is a community card, it fills the hand for *both* players and the next card decides. Your hole car
L109 [H] ## Playing the Board: When Your Kicker Doesn't Play
L118 [LINK] /en/blog/holdem-reading-the-board
L122 [H] ## Why Does A9 Lose to AK? (The Dominated Ace)
L126 [IMG] ![Two starting hands side by side on green felt — A-K next to A-9 — showing how the same ace with a weaker kicker becomes a dominated trap](/images/holdem-kicker-dominated.webp "Same ace, different fate: the kicker is wh
L133 [LINK] /en/blog/holdem-starting-hands-chart  thumb=/images/holdem-starting-hands-chart-hero.webp
L137 [H] ## Does Four of a Kind Have a Kicker?
L145 [DIR] :::readnext[Keep reading]
L148 [DIR] :::
L150 [H] ## FAQ
L152 [Q] **Q. What is a kicker in poker?**
L156 [Q] **Q. Does a flush have a kicker?**
L160 [Q] **Q. Does a straight have a kicker?**
L164 [Q] **Q. Does a full house have a kicker?**
L168 [Q] **Q. Does four of a kind have a kicker?**
L172 [Q] **Q. Does the kicker matter with three of a kind?**
L176 [Q] **Q. Do two pairs have a kicker?**
L180 [Q] **Q. Does the kicker have to be in your hand?**
L184 [Q] **Q. How many kickers are in a poker hand?**
L188 [Q] **Q. What is a good kicker in poker?**
L192 [Q] **Q. What is an ace kicker (or a king kicker)?**
L196 [Q] **Q. What does "playing the board" mean?**
L200 [Q] **Q. Do kickers matter in Texas Hold'em?**
L206 [H] ## The 3 Things to Remember
L212 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-tiebreak-rules
L216 [H] ## Related Posts
L218 [HTML] <div style="display:grid …> (관련 글 그리드)
L239 [HTML] </div>
```
- 표 **2**(L54 키커 유무 · L80 키커 개수) · 본문 이미지 **1**(kicker-dominated) · 디렉티브 stripe·note·readnext · FAQ **13** · 파일 끝 `export default POST;`.

### 링크
hand-rankings(L23 thumb · L212) · tiebreak-rules(L70 thumb · L212) · reading-the-board(L118) · starting-hands-chart(L133 thumb) · readnext 2(hand-rankings · tiebreak) · 그리드 4(hand-rankings · tiebreak · starting-hands-chart · reading-the-board). **편차 0**.

### 키워드·SERP 요지 (L-B §3-3·§4-B·§7-4)
- 프랑스어 kicker 가이드 1페이지 0(앱스토어 3 · 영상 · 2007 포럼 · 레딧). 지식 패널 축어 «… on compare …».
- 실재 질문(포럼 2007 축어): «le kicker intervient[-il] lorsque deux joueurs ont exactement la même suite mais un kicker différent» → 답 = 아니다(5장 족보 = 키커 없음) — EN L54 표 + FAQ L156·L160이 답.
- **우리가 더 줄 것 3**: ① 족보별 «키커 유무·개수» 표 2개 ② 7장 예시 3개(AK vs AQ · 보드 브로드웨이 · 경험담 A9 vs AK) ③ «carré의 키커» 예외(L137~141).

### 확정 카피
#### 메타
- **title** (62) : Kicker au poker : c'est quoi, combien par main, et l'as dominé
- **seoTitle** (55) : Même paire, pot perdu ? — C'est quoi le kicker au poker
- **desc** (151) : Même paire, pot perdu ? Le kicker au poker, la carte qui départage : quelles mains en ont et combien, pourquoi A9 perd contre AK, et le piège du carré.
- **tldr** (303) : Le kicker est la carte d'accompagnement la plus haute hors de ta combinaison : il départage deux joueurs qui ont la même main. Carte haute : 4 kickers, paire : 3, double paire : 1, brelan : 2 ; suite, couleur, full et quinte flush n'en ont aucun. Voilà pourquoi AK bat AQ quand un as tombe sur le board.
- **tags** (8) : "kicker poker", "kicker au poker", "règle kicker poker", "c'est quoi le kicker au poker", "kicker poker texas hold'em", "kicker poker définition", "as dominé", "carte d'accompagnement poker"

#### H2 (질문형 6/7 = 86 %)
| # | EN H2 | fr H2 | 형 |
|---|---|---|---|
| (H3) | Kickers at a glance | Le kicker en un coup d'œil | – |
| 1 | What Is a Kicker in Poker? | C'est quoi le kicker au poker ? | Q |
| 2 | Which Poker Hands Have a Kicker — and Which Don't | Quelles combinaisons ont un kicker, et lesquelles n'en ont pas ? | Q |
| 3 | How Many Kickers Does Each Hand Use? | Combien de kickers compte chaque combinaison ? | Q |
| 4 | AK vs AQ: How a Kicker Decides the Winner | A-K contre A-Q : comment le kicker désigne le gagnant ? | Q |
| 5 | Playing the Board: When Your Kicker Doesn't Play | Quand le kicker ne joue pas : jouer le board | – |
| 6 | Why Does A9 Lose to AK? (The Dominated Ace) | Pourquoi A9 perd contre AK ? L'as dominé | Q |
| 7 | Does Four of a Kind Have a Kicker? | Le carré a-t-il un kicker ? | Q |

🆕 H2 없음 — 프랑스어 kicker SERP가 비어 있어(1페이지 가이드 0) EN 구조만으로 충분. 자동완성·PAA는 H2 1·FAQ 1에 축어로 흡수.

#### H3
| EN H3 | fr H3 |
|---|---|
| Kickers at a glance | Le kicker en un coup d'œil |

#### FAQ (EN 13 + 🆕 0)
| # | EN Q | fr Q |
|---|---|---|
| 1 | What is a kicker in poker? | Quelle est la définition de « kicker » en français ? |
| 2 | Does a flush have a kicker? | La couleur a-t-elle un kicker ? |
| 3 | Does a straight have a kicker? | Le kicker intervient-il lorsque deux joueurs ont exactement la même suite ? |
| 4 | Does a full house have a kicker? | Le full a-t-il un kicker ? |
| 5 | Does four of a kind have a kicker? | Un carré peut-il perdre sur le kicker ? |
| 6 | Does the kicker matter with three of a kind? | Le kicker compte-t-il avec un brelan ? |
| 7 | Do two pairs have a kicker? | Une double paire a-t-elle un kicker ? |
| 8 | Does the kicker have to be in your hand? | Le kicker doit-il être dans ta main ? |
| 9 | How many kickers are in a poker hand? | Combien de kickers y a-t-il dans une main de poker ? |
| 10 | What is a good kicker in poker? | C'est quoi un bon kicker au poker ? |
| 11 | What is an ace kicker (or a king kicker)? | C'est quoi un kicker as (ou un kicker roi) ? |
| 12 | What does "playing the board" mean? | Que veut dire « jouer le board » ? |
| 13 | Do kickers matter in Texas Hold'em? | Le kicker compte-t-il au Texas Hold'em ? |

#### 키워드 흡수
| 검색어 (볼륨) | 자리 |
|---|---|
| kicker poker (140) · kicker au poker (20) | title · seoTitle · desc · tags · H2 1 |
| c'est quoi le kicker au poker (자동완성) · C'est quoi le kicker ? (PAA) | seoTitle · title · H2 1 |
| Quelle est la définition de « kicker » en français ? (PAA 축어) | FAQ 1 |
| regle kicker poker / kicker poker regle (자동완성) | title(«Règle») · tags |
| kicker poker texas hold em (자동완성) | tags · FAQ 13 |
| kickers definition poker (자동완성) | FAQ 1 · tldr(«carte d'accompagnement» = 도구 용어집 정의) |
| «le kicker intervient-il lorsque deux joueurs ont exactement la même suite» (포럼 축어) | FAQ 3 |
| «Deux paires avec un as comme kicker sur un board paire» (레딧) | FAQ 7 본문(EN two-pair 1 kicker 규칙으로만 답함) |
| A9 vs AK · as dominé (EN desc) | desc · H2 6 · tags |
| jouer le board (reading-the-board 헤드 — 보조) | tags · H2 5 · FAQ 12 |
| 4 · 3 · 1 · 2 · 0 kickers (EN tldr 수치) | tldr · H2 3 |

### §13 자리
- 카드 L: 19(경험담 A♠ 9♣ vs A♥ K♦) · 98 100~101(AK vs AQ) · 113 115~116(브로드웨이 보드) · 128 130~131(A9 vs AK) · 141(carré) · 174 · 178(FAQ)
- 표 L54 · L80 · stripe L29~33(4 · 3 · 1 · 0).
- 🔴 L118 «TDA 2024 Rule 19» → «(TDA 2024, règle 19)».

### 경험담 자리
- L19: «The hand that finally taught me what a kicker is cost me a full buy-in. I had ==b:A♠ 9♣==, the board paired my ace, and I shoved thinking top pair was gold. He flipped ==b:A♥ K♦== — same pair of aces, but his king outkicked me, and the pot slid his way. I hadn't lost to a better *hand*; I'd lost to a better ==side card.== …»
- L128~133: «Back to my buy-in. …» · «Same pair again — and my 9 never even got a vote. …» (상대 = «il» — EN «He»)

### 현지 추가
- 🆕 FAQ «Quelle est la définition de "kicker" en français ?»(확정 카피에 있으면): 답 = 프랑스어에도 «kicker»를 그대로 쓴다 + 풀이 «carte d'accompagnement»(도구 용어집 축어) — 새 사실 아님.
- 🆕 FAQ 레딧형 «Deux paires … sur un board pairé»(있다면): EN FAQ L176~178(K♥ Q♦ vs J♠ Q♥ / Q♣ 7♠ 7♦ 4♥ 2♣)로 답한다 — 새 예시 금지.

### 하지 말 것
- EN-먼저 후보: 없음.

---

## holdem-tiebreak-rules — EN updated 2026-10-06 · P2

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How Ties Are Broken in Poker — Same Hand, Who Wins? |
| seoTitle | Same Hand, Same Pair — Who Wins? Poker Tie-Breaker Rules |
| desc | Same pair at showdown and still lost? How ties are broken in poker — who wins with the same pair or two pair, when the 5th card matters, and when pots split. |
| tldr | Ties are broken in a fixed order: hand rank first, then the cards that make the hand, then kickers from highest to lowest. Same pair → higher first kicker wins; identical five cards → split pot. Suits never decide a tie. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-13 · 2026-10-06 · 12 min · ⚖️ |
| image | /images/holdem-tiebreak-hero.webp |
| imageAlt | Poker showdown: A♠ K♦ vs A♥ 9♣ with board A♦ Q♠ 7♥ 3♣ 2♦ — same pair of aces, kicker decides the winner |
| tags | "poker tie breaker rules", "how are ties broken in poker", "who wins same pair poker", "two pair tie poker", "does the 5th card matter in poker", "do suits matter in poker", "highest straight in poker", "poker kicker", "texas holdem ties" |

### 소유표
- **주인**: égalité au poker 50 · égalité poker 40 · «en cas d'égalité … qui gagne» · départager(자동완성 13 변형) · «qui gagne au poker (quand personne n'a rien)» · «couleur sur la table qui gagne» 40 · double paire qui gagne 20.
- **금지 헤드**: «pot partagé / split pot» 선두(→ split-pot) · «kicker» 선두(→ kicker · 태그 «kicker»는 EN 승계 허용 여부는 확정 카피를 따른다) · équité(🔴 구글 혼동 — 쓰지 마라).

### 구조
```
L21 [LINK] /en/blog/holdem-hand-rankings
L23 [LINK] /en/blog/holdem-kicker  thumb=/images/holdem-kicker-hero.webp
L27 [H] ### Tie-breaks at a glance
L29 [DIR] :::stripe
L33 [DIR] :::
L37 [H] ## How Are Ties Broken in Poker? The 3-Step Order
L41 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L43 [표1] | Step | Compare | Detail |
L49 [HTML] </div>
L51 [LINK] /en/blog/holdem-split-pot-rules
L55 [H] ## Who Wins if Two Players Have the Same Pair?
L61 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L66 [표2] | Player | Best Five | Kickers | Result |
L71 [HTML] </div>
L75 [LINK] /en/blog/holdem-starting-hands-chart
L79 [H] ## Poker Tie-Breaker Rules for Every Hand
L83 [DIR] :::tiebreak
L94 [DIR] :::
L100 [LINK] /en/blog/holdem-flush-vs-straight
L104 [H] ## Who Wins if Both Players Have Two Pair?
L112 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L118 [표3] | Player | Best Five | Hand |
L123 [HTML] </div>
L129 [H] ## Can You Have a Higher Straight? (Where the Wheel Ranks)
L137 [LINK] /en/blog/holdem-flush-vs-straight
L141 [H] ## Does the 5th Card Matter in Poker?
L151 [H] ## Do Suits Matter in Poker?
L163 [H] ## When Your Kicker Doesn't Play — and the Pot Splits
L165 [IMG] ![Infographic: the board A-K-Q-J-10 is the best five for everyone, so a 9-7 hand cannot beat it and the pot is split](/images/holdem-tiebreak-best5.webp "Best five of seven: when the board is already the best hand, your 
L173 [IMG] ![Infographic: on an A-K-Q-J-9 board, A-3 and A-2 both play A-A-K-Q-J, so the identical hands split the pot](/images/holdem-tiebreak-split.webp "When best fives match rank for rank, the pot is divided — suits never break
L175 [LINK] /en/blog/holdem-reading-the-board , /en/blog/holdem-split-pot-rules  thumb=/images/holdem-split-pot-hero.webp
L179 [DIR] :::readnext[Keep reading]
L182 [DIR] :::
L184 [H] ## FAQ
L186 [Q] **Q. How are ties broken in poker?**
L190 [Q] **Q. Who wins if two players have the same pair?**
L194 [Q] **Q. Who wins if both players have two pair?**
L198 [Q] **Q. Who wins if two players have the same three of a kind?**
L202 [Q] **Q. Does the 5th card matter in poker?**
L206 [Q] **Q. Can you use an ace as a 1 in poker?**
L210 [Q] **Q. Can you have a higher straight than another player?**
L214 [Q] **Q. Who wins if two players have the same straight?**
L218 [Q] **Q. Who wins if two players both have a flush?**
L222 [Q] **Q. Who wins if two players have the same full house?**
L226 [Q] **Q. What happens if two players both have a straight flush?**
L230 [Q] **Q. Do suits ever break a tie in Texas Hold'em?**
L234 [Q] **Q. What happens if both players have the exact same hand?**
L236 [LINK] /en/blog/holdem-split-pot-rules
L238 [Q] **Q. Is a tie (split pot) possible in poker?**
L244 [H] ## The Takeaways
L250 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-kicker , /en/blog/holdem-split-pot-rules
L254 [H] ## Related Posts
L256 [HTML] <div style="display:grid …> (관련 글 그리드)
L277 [HTML] </div>
```
- 표 **3**(L43 3단계 · L66 같은 페어 · L118 투페어 역전) · 본문 이미지 **2**(tiebreak-best5 · tiebreak-split) · 크림 박스 3(L41 · L61 · L112 — padding 서로 다름) · 디렉티브 stripe·tiebreak·readnext · FAQ **14**.

### 링크
hand-rankings(L21 · L250) · kicker(L23 thumb · L250) · split-pot-rules(L51 · L175 thumb · L236 · L250) · starting-hands-chart(L75) · flush-vs-straight(L100 · L137) · reading-the-board(L175) · readnext 2(kicker · split-pot) · 그리드 4(kicker · hand-rankings · flush-vs-straight · split-pot). **편차 0**.

### 키워드·SERP 요지 (L-B §2·§3-3·§4-B·§7-3)
- «égalité» SERP 가이드 0 · 2007 포럼이 순위 · 구글이 égalité↔équité 혼동.
- 실재 오해(포럼 축어 — 훅 재료 · 출처명 없이): «si les cartes en main n'amélioraient pas les 5 cartes sur le tapis … il y avait partage du pot … SAUF si l'une des deux mains possède un AS» → EN L163~175(키커가 플레이 안 할 때) + L169 브로드웨이 보드가 반박.
- **우리가 더 줄 것 3**: ① 3단계 순서표 + 족보별 `:::tiebreak` ② 족보별 «qui gagne» 7장 예시(같은 페어 · 투페어 · 트립스 · 휠 · 5번째 카드 · 보드 플레이) ③ WSOP 2026 원문 인용(L157).

### 확정 카피
#### 메타
- **title** (65) : En cas d'égalité au poker, qui gagne ? Les règles pour départager
- **seoTitle** (54) : Même main, qui gagne ? — Les règles d'égalité au poker
- **desc** (151) : Même paire et pourtant perdu ? En cas d'égalité au poker, qui gagne : même paire ou double paire, quand la 5e carte compte et quand le pot est partagé.
- **tldr** (306) : Au poker, une égalité se départage toujours dans le même ordre : d'abord le rang de la combinaison, puis les cartes qui la forment, puis les kickers du plus haut au plus bas. Même paire : le kicker le plus haut gagne ; cinq cartes identiques : le pot est partagé. L'enseigne des cartes ne départage jamais.
- **tags** (9) : "égalité au poker", "égalité poker qui gagne", "cas d'égalité au poker", "départager double paire poker", "double paire poker qui gagne", "couleur sur la table qui gagne", "qui gagne au poker", "départager égalité poker", "carte haute poker règle"

#### H2 (질문형 9/10 = 90 %)
| # | EN H2 | fr H2 | 형 |
|---|---|---|---|
| (H3) | Tie-breaks at a glance | Les égalités en un coup d'œil | – |
| 1 | How Are Ties Broken in Poker? The 3-Step Order | Que se passe-t-il en cas d'égalité au poker ? L'ordre en 3 étapes | Q |
| 2 | Who Wins if Two Players Have the Same Pair? | Même paire : qui gagne ? | Q |
| 3 | Poker Tie-Breaker Rules for Every Hand | Comment départager chaque combinaison ? | Q |
| 🆕 | — (3 뒤) | Personne n'a rien : qui gagne au poker ? | Q |
| 4 | Who Wins if Both Players Have Two Pair? | Double paire contre double paire : qui gagne ? | Q |
| 5 | Can You Have a Higher Straight? (Where the Wheel Ranks) | Suite contre suite : qui gagne ? La roue (As-2-3-4-5) est la plus petite | Q |
| 6 | Does the 5th Card Matter in Poker? | La 5e carte compte-t-elle au poker ? | Q |
| 7 | Do Suits Matter in Poker? | La couleur des cartes (pique, cœur) départage-t-elle ? | Q |
| 8 | When Your Kicker Doesn't Play — and the Pot Splits | Quand ton kicker ne joue pas : le pot est partagé | – |
| 🆕 | — (8 뒤) | Couleur sur la table : qui gagne ? | Q |

🆕 메모: 「Personne n'a rien」 = 자동완성 «qui gagne au poker quand personne na rien» 축어(아포스트로피 복원) — 답은 EN의 high-card 4-kicker 비교 규칙 그대로. 「Couleur sur la table」(40) = EN의 «flush tie(가장 높은 카드 비교)» + «board plays» 두 규칙을 합친 자리 — **새 핸드·수치 금지**, 규칙 서술만. H2 7의 «couleur des cartes»는 PAA 관습 표기 — 본문 첫 문장에서 «enseigne»로 연결(B 몫). 2007 포럼 오해(«SAUF si l'une des deux mains possède un AS»)는 H2 8 도입 훅 재료.

#### H3
| EN H3 | fr H3 |
|---|---|
| Tie-breaks at a glance | Les égalités en un coup d'œil |

#### FAQ (EN 14 + 🆕 2)
| # | EN Q | fr Q |
|---|---|---|
| 1 | How are ties broken in poker? | Comment départager une égalité au poker ? |
| 2 | Who wins if two players have the same pair? | Deux joueurs ont la même paire : qui gagne ? |
| 3 | Who wins if both players have two pair? | Deux joueurs ont une double paire : qui gagne ? |
| 4 | Who wins if two players have the same three of a kind? | Deux joueurs ont le même brelan : qui gagne ? |
| 5 | Does the 5th card matter in poker? | La 5e carte peut-elle faire la différence ? |
| 6 | Can you use an ace as a 1 in poker? | L'as peut-il valoir 1 dans une suite (As-2-3-4-5) ? |
| 7 | Can you have a higher straight than another player? | Une suite peut-elle être plus forte qu'une autre ? |
| 8 | Who wins if two players have the same straight? | Deux joueurs ont la même suite : qui gagne ? |
| 9 | Who wins if two players both have a flush? | Deux joueurs ont une couleur : comment départager ? |
| 10 | Who wins if two players have the same full house? | Deux joueurs ont un full : qui gagne ? |
| 11 | What happens if two players both have a straight flush? | Que se passe-t-il si deux joueurs ont une quinte flush ? |
| 12 | Do suits ever break a tie in Texas Hold'em? | Le pique bat-il le cœur au poker ? |
| 13 | What happens if both players have the exact same hand? | Que se passe-t-il si les deux joueurs ont exactement la même main ? |
| 14 | Is a tie (split pot) possible in poker? | Une égalité (pot partagé) est-elle possible au poker ? |
| 🆕 | — (자동완성 축어) | Qui gagne au poker quand personne n'a rien ? |
| 🆕 | — (2007 포럼 오해) | Un as en main fait-il gagner en cas d'égalité ? |

#### 키워드 흡수
| 검색어 (볼륨) | 자리 |
|---|---|
| égalité au poker (50) · égalité poker (40) | title · seoTitle · desc · tags · H2 1 · FAQ 1·14 |
| égalité + qui gagne (구글 équité 오인 방지) | seoTitle(«qui gagne … égalité») · desc · tags · H2 1→2 |
| Que se passe-t-il en cas d'égalité au poker ? (PAA 축어) | H2 1 |
| en cas d'égalité au poker qui gagne / cas d'égalité au poker (자동완성) | title · desc · tags |
| qui gagne au poker (20) · quelle main gagne au poker (10) | tags · H2 2·4·5 |
| qui gagne au poker quand personne na rien (자동완성 축어) | 🆕 H2 · FAQ 🆕 |
| poker couleur sur la table qui gagne (40) | tags · 🆕 H2 |
| double paire poker qui gagne (20) · departager double paire poker (10) · 2 paires poker qui gagne (10) | tags · H2 4 · FAQ 3 |
| egalite brelan / full / double paire poker · departager couleur·full·paire·suite·main (자동완성) | H2 3 · FAQ 2·4·8·9·10 |
| poker egalite carte haute · carte haute poker regle (10) | tags · 🆕 H2(«Personne n'a rien») |
| suite poker as 2 3 4 5 (reading 헤드 — 보조) | H2 5 · FAQ 6 |
| 5e carte (EN «does the 5th card matter») | desc · H2 6 · FAQ 5 |
| pot partagé (split-pot 글 몫 — «누가 이기나»까지만) | desc 끝 · H2 8 · FAQ 14 |

### §13 자리
- 카드 L: 63~64 · 68~69(표2) · 98(트립스 키커) · 108(투페어) · 114~116 · 120~121(표3 역전) · 133(휠 vs 6-high) · 145(5번째 카드) · 169 · 171(보드 플레이) · 204 · 212(FAQ)
- `:::tiebreak` L83~94 = hand-rankings fr 행 축어(§1-G) · stripe L29~33(3 · 1 · 0) · 표1 L43~48.
- L157 WSOP 2026 Rule 73 인용 → §1-G 처리.

### 경험담 자리
- L21: «I have watched that exact moment stall more games than any other rule: someone half-stands, the dealer taps the felt, and the whole table waits for an explanation. Here it is. …»
- (L159는 1인칭 아님 — «"my spades beat your hearts"»는 인용 대사)

### 현지 추가
- 🆕 «Personne n'a rien» H2(있다면): EN `:::tiebreak` «High Card | Compare all 5, high to low» + L145(5번째 카드 예시는 원페어) — 하이카드 끼리의 새 7장 예시를 **만들지 마라.** 규칙 서술(다섯 장을 높은 것부터 비교 · 다섯 장이 같으면 partage)만 하고 예시는 기존 것 참조.
- 🆕 «couleur sur la table» H2/FAQ(있다면): 근거는 이 글 EN FAQ L218~220(«Who wins if two players both have a flush?») · L151~159(무늬 서열 없음) · L163~171(보드가 플레이하면 partage)뿐 — 새 7장 예시를 만들지 마라.

### 하지 말 것
- EN-먼저 후보: 없음.

---

## holdem-split-pot-rules — EN updated 2026-10-05 · P3

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | When Is a Pot Split? Hold'em Chop Rules |
| seoTitle | Won the Hand but Got Half? — Poker Split Pot & Chop Rules |
| desc | Can you tie in poker? Yes — here's exactly when pots split: identical five-card hands, the board playing for everyone, the odd chip rule, and side-pot chops. |
| tldr | Yes — poker hands can tie. A pot is split (a chop) when two or more players show down the identical best five-card hand. Suits never break the tie, and any leftover odd chip goes to the first tied player left of the dealer button. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-13 · 2026-10-05 · 12 min · 🃏 |
| image | /images/holdem-split-pot-hero.webp |
| imageAlt | Poker split pot — board 8♠ 8♥ 8♦ A♣ K♠ with J♠ 10♥ vs 5♣ 2♦, chips divided by a gold line since neither hand beats the board |
| tags | "split pot poker", "can you tie in poker", "chopped pot", "when is a pot split", "odd chip rule poker", "board plays", "texas holdem chop" |

### 소유표
- **주인**: pot partagé · partage du pot / partage de pot · split pot poker · «comment fonctionnent les pots partagés» · chop.
- **금지 헤드**: «égalité … qui gagne» 선두(→ tiebreak — 단 PAA «Que se passe-t-il en cas d'égalité au poker ?»는 두 SERP 공통이라 이 글 H2/FAQ 허용 · 확정 카피 따름) · side pot 계산 헤드(→ all-in-rules) · ICM(→ holdem-icm · FAQ L205~207 앵커만).

### 구조
```
L25 [BOX] > **Quick answer**
L30 [H] ### The core numbers
L32 [DIR] :::stripe
L36 [DIR] :::
L40 [H] ## What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?)
L44 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L48 [H] ## Can You Tie in Poker? The 5 Situations That Split the Pot
L52 [H] ### 1. Identical best five cards
L55 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L57 [표1] | | Player A | Player B |
L63 [HTML] </div>
L67 [H] ### 2. The board plays
L70 [H] ### 3. The same straight
L73 [H] ### 4. The same flush
L78 [H] ### 5. Identical down to the last kicker
L79 [LINK] /en/blog/holdem-tiebreak-rules  thumb=/images/holdem-tiebreak-hero.webp
L83 [H] ## Can Two Players Win the Same Pot? When the Board Plays
L89 [BOX] > **The check:** does *your* best five — using at least one hole card — beat the board's own five? If yes, you play your hand. If not, the board plays and you're likely chopping. The full method for scanning a board this
L89 [LINK] /en/blog/holdem-reading-the-board
L91 [LINK] /en/blog/holdem-showdown-rules
L93 [DIR] :::tip[If the board plays and someone bets the river, **folding on autopilot is the mistake**. When nothing can beat the board the chop is certain, and calling still brings back your share of everything that was already 
L97 [H] ## 3 Things That Never Break a Tie in Poker
L99 [IMG] ![Board K♦ K♣ Q♥ Q♦ J♠ with K♠ 7♣ on the left and K♥ 2♦ on the right, a golden equals sign between them — both make the same full house K-K-K-Q-Q, and suits never decide a winner in Texas Hold'em](/images/holdem-split-po
L103 [H] ### ❌ "My suit is higher, so I win"
L106 [H] ### ❌ "My hole cards are higher, so I win"
L107 [LINK] /en/blog/holdem-kicker
L109 [H] ### ❌ "I used both my cards and they used one"
L114 [H] ## Who Gets the Extra Chip? The Odd Chip Rule
L124 [H] ## Do Side Pots Split Too? Ties When Someone Is All-In
L130 [HTML] <div style="background:rgba(255,248,210,0.10) …> (크림 박스 열기)
L132 [표2] | Player | Hole | Best five | Result |
L138 [HTML] </div>
L140 [LINK] /en/blog/holdem-all-in-rules
L144 [H] ## Is the Pot Ever Split Half High, Half Low?
L150 [DIR] :::readnext[Keep reading]
L153 [DIR] :::
L155 [H] ## FAQ
L157 [Q] **Q. When is a pot split in poker?**
L161 [Q] **Q. How is the pot split in poker?**
L165 [Q] **Q. Do you split the pot if both players have the same hand?**
L169 [Q] **Q. Do you split the pot on a full house, a straight, or two pair?**
L173 [Q] **Q. What does "chopped pot" mean in poker?**
L177 [Q] **Q. Does suit ever decide who wins a split?**
L181 [Q] **Q. Who gets the odd chip when a pot can't divide evenly?**
L185 [Q] **Q. Can more than two players split a pot?**
L189 [Q] **Q. How are split pots handled when someone is all-in?**
L193 [Q] **Q. How do you calculate a side pot?**
L197 [Q] **Q. Who is eligible for a side pot?**
L201 [Q] **Q. Can you win both the main pot and a side pot?**
L205 [Q] **Q. Is a tournament chop the same as a split pot?**
L207 [LINK] /en/blog/holdem-icm , /en/blog/holdem-tournament-vs-cash-game
L211 [H] ## The Takeaways
L217 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-tiebreak-rules , /en/blog/holdem-flush-vs-straight
L221 [H] ## Related Posts
L223 [HTML] <div style="display:grid …> (관련 글 그리드)
L239 [HTML] </div>
```
- 표 **2**(L57 같은 풀하우스 · L132 사이드팟 분할) · 본문 이미지 **1**(split-pot-suit-equals) · 디렉티브 stripe·tip·readnext · FAQ **13**.

### 링크
hand-rankings(L44 thumb · L217) · tiebreak-rules(L79 thumb · L217) · reading-the-board(L89) · showdown-rules(L91) · kicker(L107) · all-in-rules(L140) · icm · tournament-vs-cash-game(L207) · flush-vs-straight(L217) · readnext 2(reading-the-board · all-in-rules) · 그리드(EN L223~239 — 대상 hand-rankings · tiebreak · flush-vs-straight). **편차 0**.

### 키워드·SERP 요지 (L-B §3-3·§4-B·§7-5)
- 프랑스어 가이드 0(Zynga 도움말 177단어 · 레딧 · WPT 라이브). 레딧 «Pourquoi un Full house partagerait-il le pot (de manière inégale …)» = side pot 분할 질문 → EN L124~140이 답.
- **우리가 더 줄 것 3**: ① 5가지 분할 상황 각각 7장 예시 ② 남는 칩 규칙(TDA 2024 règle 20) ③ 사이드팟 분할 실례 표.

### 확정 카피
#### 메타
- **title** (69) : Pot partagé (split pot) au poker : quand et comment on partage le pot
- **seoTitle** (58) : Gagné, mais la moitié ? — Pot partagé (split pot) au poker
- **desc** (153) : Gagné, mais la moitié ? L'égalité existe au poker : quand le pot est partagé (split pot), le board qui joue pour tous, le jeton restant et le pot annexe.
- **tldr** (264) : Oui, l'égalité existe au poker. Le pot est partagé (split pot, ou « chop ») quand deux joueurs ou plus abattent exactement la même meilleure main de cinq cartes. L'enseigne ne départage jamais, et le jeton restant va au premier joueur à égalité à gauche du bouton.
- **tags** (8) : "split pot poker", "pot partagé poker", "partage du pot poker", "partage de pot poker", "jeton restant poker", "pot annexe poker", "comment partager le pot poker", "chop poker"

#### H2 (질문형 6/7 = 86 %)
| # | EN H2 | fr H2 | 형 |
|---|---|---|---|
| (H3) | The core numbers | L'essentiel en chiffres | – |
| 1 | What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?) | Pot partagé (split pot) : c'est quoi ? Et un « chop », c'est pareil ? | Q |
| 2 | Can You Tie in Poker? The 5 Situations That Split the Pot | Peut-il y avoir égalité au poker ? Les 5 cas où le pot est partagé | Q |
| 3 | Can Two Players Win the Same Pot? When the Board Plays | Deux joueurs peuvent-ils gagner le même pot ? Quand le board joue pour tout le monde | Q |
| 4 | 3 Things That Never Break a Tie in Poker | 3 choses qui ne départagent jamais une égalité | – |
| 5 | Who Gets the Extra Chip? The Odd Chip Rule | Le jeton restant : qui le reçoit ? | Q |
| 6 | Do Side Pots Split Too? Ties When Someone Is All-In | Le pot annexe (side pot) se partage-t-il aussi ? Égalité avec un joueur all-in | Q |
| 7 | Is the Pot Ever Split Half High, Half Low? | Le pot est-il parfois partagé moitié high, moitié low ? | Q |

🆕 H2 없음 — PAA 축어 «Que se passe-t-il en cas d'égalité au poker ?»는 tiebreak H2 1에 줬으므로(égalité 헤드 소유) 여기서는 FAQ 🆕로만 받는다.

#### H3
| EN H3 | fr H3 |
|---|---|
| The core numbers | L'essentiel en chiffres |
| 1. Identical best five cards | 1. Les mêmes cinq meilleures cartes |
| 2. The board plays | 2. Le board joue |
| 3. The same straight | 3. La même suite |
| 4. The same flush | 4. La même couleur |
| 5. Identical down to the last kicker | 5. Identiques jusqu'au dernier kicker |
| ❌ "My suit is higher, so I win" | ❌ « Mon enseigne (pique) est plus haute, donc je gagne » |
| ❌ "My hole cards are higher, so I win" | ❌ « Mes cartes fermées sont plus hautes, donc je gagne » |
| ❌ "I used both my cards and they used one" | ❌ « J'ai utilisé mes deux cartes, lui une seule » |

#### FAQ (EN 13 + 🆕 1)
| # | EN Q | fr Q |
|---|---|---|
| 1 | When is a pot split in poker? | Quand le pot est-il partagé au poker ? |
| 2 | How is the pot split in poker? | Comment fonctionnent les pots partagés ? |
| 3 | Do you split the pot if both players have the same hand? | Partage-t-on le pot si les deux joueurs ont la même main ? |
| 4 | Do you split the pot on a full house, a straight, or two pair? | Un full, une suite ou une double paire peuvent-ils partager le pot ? |
| 5 | What does "chopped pot" mean in poker? | Que veut dire « chop » au poker ? |
| 6 | Does suit ever decide who wins a split? | L'enseigne (pique, cœur) décide-t-elle d'un partage ? |
| 7 | Who gets the odd chip when a pot can't divide evenly? | Qui reçoit le jeton restant quand le pot ne se divise pas ? |
| 8 | Can more than two players split a pot? | Plus de deux joueurs peuvent-ils partager un pot ? |
| 9 | How are split pots handled when someone is all-in? | Comment partage-t-on le pot quand un joueur est all-in ? |
| 10 | How do you calculate a side pot? | Comment se forme un pot annexe (side pot) ? |
| 11 | Who is eligible for a side pot? | Qui peut gagner le pot annexe ? |
| 12 | Can you win both the main pot and a side pot? | Peut-on gagner le pot principal et le pot annexe ? |
| 13 | Is a tournament chop the same as a split pot? | Un chop en tournoi (deal), c'est la même chose qu'un pot partagé ? |
| 🆕 | — (PAA 축어) | Que se passe-t-il en cas d'égalité au poker ? |

#### 키워드 흡수
| 검색어 (볼륨) | 자리 |
|---|---|
| split pot poker (10) | title · seoTitle · desc · tags · H2 1 · tldr |
| pot partagé / partage du pot / partage de pot (표현 재료) | title · seoTitle · desc · tags · H2 1·2 · FAQ 1·3 |
| Que se passe-t-il en cas d'égalité au poker ? (PAA · égalité SERP 공통) | FAQ 🆕 (H2 축어는 tiebreak 몫) |
| Comment fonctionnent les pots partagés ? (Zynga 축어) | FAQ 2 |
| «Pourquoi un Full house partagerait-il le pot» (레딧) | FAQ 4 |
| chop / chopped pot (EN) | H2 1 · FAQ 5·13 · tags · tldr |
| jeton restant (EN odd chip rule) | desc · tags · H2 5 · FAQ 7 · tldr |
| le board joue (EN «board plays») | desc · tags · H2 3 · H3 2 |
| pot annexe / side pot (all-in-rules 글 몫 — 분할 동작까지만) | desc · tags · H2 6 · FAQ 10·11·12 |
| moitié high / moitié low (EN) | H2 7 |

### §13 자리
- 카드 L: 19(경험담 보드 8♠ 8♥ 8♦ A♣ K♠) · 59~60(표1) · 71 · 74 · 76 · 79 · 87 · 99(이미지 alt) · 107 · 128 · 134~136(표2)
- 수치: L116(101칩 = 50+50+1 · 25 → 5×5) · L128(올인 100 · 300 · 메인 300 = 100×3 · 사이드 400 = 200+200) · stripe L32~36.

### 경험담 자리
- L19: «Early in my poker days I led every street — raised preflop, bet the flop and turn, got called on the river. I flipped over J♠ 10♥. My opponent turned over **5♣ 2♦**. "I win, right?" The dealer said nothing and pointed at the board: ==**8♠ 8♥ 8♦ A♣ K♠**==. …»
- L68 · L87: «that's the 8-8-8-A-K pot from my story» · «That's my 8-8-8-A-K hand: …» (도입 일화 회수 — fr도 같은 자리에서 회수)

### 현지 추가
- H3 «❌ "My suit is higher, so I win"» 3개: 인용 대사 형식 유지(«❌ « Ma couleur est plus haute, donc je gagne » » 처럼 — 단 «couleur»가 족보로 읽히면 «Mon enseigne est plus forte…»). 확정 카피 H3 표를 따른다.

### 하지 말 것
- 사이드팟 계산 절차를 넓히지 마라(EN L124~140 분량 그대로 · 상세는 all-in-rules 앵커). Hi-Lo 절(L144~148)은 EN 분량 그대로.
- EN-먼저 후보: 없음.

---

## holdem-reading-the-board — EN updated 2026-10-05 · P3

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Read the Board in Hold'em: Your Best 5 Cards From 7 |
| seoTitle | Which 5 Cards Play? — How to Read the Board in Hold'em |
| desc | River's out and you still can't tell what you have? Read any Hold'em board fast: your best 5 cards from 7, board straights and flushes, and playing the board. |
| tldr | In Texas Hold'em you always play the best 5-card hand from 7 (2 hole cards + 5 community cards) — using both hole cards, one, or none at all (playing the board). Scan all 7 cards in a fixed order: flush → straight → paired ranks → high card. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-15 · 2026-10-05 · 11 min · 🃏 |
| image | /images/holdem-reading-the-board-hero.webp |
| imageAlt | Texas Hold'em board reading — 5 community cards on dark felt with gold arrows showing which cards combine for best 5-card hand |
| tags | "how to read the board in poker", "best 5 card hand from 7 cards", "playing the board texas holdem", "can you have a flush and a pair", "the nuts in poker", "wet board vs dry board", "paired board poker", |

### 소유표
- **주인**: **nuts poker 210**(계획 §3-B ④ — H2 «Comment savoir si tu as les nuts ?» + FAQ «Que signifie « nuts » au poker ?» 고정) · avoir les nuts · suite poker roi as 2 3 4 70 · as 2 3 4 5 90 · «meilleure main de 5 cartes parmi 7» · jouer le board · texture(H2 1개 · 전략은 GTO 앵커 없음 — EN에 GTO 링크 없음).
- **금지 헤드**: lexique/termes(→ `/fr/glossary` · EN L182의 glossary 링크는 holdem-glossary 글로 그대로) · combinaison poker 선두.

### 구조
```
L33 [H] ### The Short Answer
L35 [DIR] :::stripe
L39 [DIR] :::
L41 [BOX] > **Quick answer**
L42 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L46 [H] ## How to Make the Best 5-Card Hand From 7 Cards
L50 [표1] | How many hole cards you use | What it looks like | Of the 21 possible 5-card picks |
L60 [표2] | Your hole cards | Board | Best 5 cards | Hand |
L66 [LINK] /en/blog/holdem-kicker
L70 [H] ## How to Read the Board in 4 Steps
L74 [DIR] :::steps
L79 [DIR] :::
L88 [DIR] :::tip[You always play exactly 5 cards — if you made a straight AND hold a pair, the straight is your hand. Poker never adds them together.]:::
L92 [H] ## What Does "Playing the Board" Mean in Poker?
L98 [LINK] /en/blog/holdem-split-pot-rules  thumb=/images/holdem-split-pot-hero.webp
L108 [H] ## How to Spot a Straight on the Board
L114 [IMG] ![8-high straight in Texas Hold'em — 7 cards spread with 8-7-6-5-4 highlighted in gold showing the made straight](/images/holdem-reading-straight-example.webp)
L116 [표3] | Hold | Board | Straight? |
L128 [LINK] /en/blog/holdem-tiebreak-rules
L132 [H] ## How to Spot a Flush on the Board
L136 [표4] | Suited cards on board | What it means |
L143 [IMG] ![NOT A FLUSH — holding A♠ with only 3 spades on the board does not make a flush in Texas Hold'em](/images/holdem-reading-flush-draw-mistake.webp)
L147 [LINK] /en/blog/holdem-flush-vs-straight
L151 [H] ## What Happens When the Board Pairs? Trips, Boats, and Quads
L157 [표5] | You hold | Your best 5 | Hand |
L169 [H] ## Can You Have a Flush and a Pair at the Same Time?
L176 [LINK] /en/blog/holdem-hand-rankings
L180 [H] ## What Is the Best Possible Hand? Reading the Nuts
L182 [LINK] /en/blog/holdem-glossary
L194 [H] ## Wet Board vs Dry Board: Reading the Texture
L198 [DIR] :::compare
L203 [DIR] :::
L205 [IMG] ![Dry board vs wet board in Texas Hold'em — K72 rainbow (dry) vs JT8 two-tone (wet) with flush and straight draw arrows](/images/holdem-reading-dry-vs-wet-board.webp)
L211 [H] ## Board Reading Mistakes That Cost Real Money
L213 [H] ### Mistake 1 — Missing a straight you already made
L217 [H] ### Mistake 2 — Counting four suited cards as a flush
L221 [H] ### Mistake 3 — Forgetting the board is shared
L225 [H] ### Mistake 4 — Ignoring the boat on a paired board
L231 [DIR] :::readnext[Keep reading]
L234 [DIR] :::
L236 [H] ## FAQ
L238 [Q] **Q. How do you figure out your best 5-card hand from 7 cards?**
L242 [Q] **Q. Do you have to use both of your hole cards in Texas Hold'em?**
L246 [Q] **Q. What does "playing the board" mean in Texas Hold'em?**
L250 [Q] **Q. Can the board be the best hand for everyone?**
L254 [Q] **Q. Can you have a flush and a pair at the same time?**
L258 [Q] **Q. Can you use an ace in a straight?**
L262 [Q] **Q. Can a straight wrap around in poker?**
L266 [Q] **Q. How do you know if a flush is possible on the board?**
L270 [Q] **Q. If there is a flush on the board, who wins?**
L274 [Q] **Q. If there is a straight on the board, who wins?**
L278 [Q] **Q. Does a pair on the board count as part of your hand?**
L284 [H] ## The Takeaways
L290 [LINK] /en/blog/texas-holdem-rules-for-beginners , /en/blog/holdem-hand-rankings
L294 [H] ## Related Posts
L296 [HTML] <div style="display:grid …> (관련 글 그리드)
L312 [HTML] </div>
```
- 표 **5**(L50 홀카드 사용 · L60 예시 · L116 스트레이트 판별 · L136 동무늬 개수 · L157 페어드 보드) · 본문 이미지 **3**(reading-straight-example · reading-flush-draw-mistake · reading-dry-vs-wet-board) · 디렉티브 stripe·steps·tip·compare·readnext · FAQ **11**.
- 🔴 EN 이미지 3장 중 2장은 title 없음(L114 · L143 · L205 — `![alt](path)`만) → fr도 title 없이.

### 링크
hand-rankings(L42 thumb · L176 · L290) · kicker(L66) · split-pot-rules(L98 thumb) · tiebreak-rules(L128) · flush-vs-straight(L147) · glossary(L182) · texas-holdem-rules-for-beginners(L290) · readnext 2(tiebreak · split-pot) · 그리드(EN L296~312 — hand-rankings · tiebreak · split-pot). **편차 0** · 🆕 도구 앵커 1(`/fr/calculator` «calculateur d'équité» — «Board Reading Mistakes» 절 끝 또는 4단계 절 끝 1문장).

### 키워드·SERP 요지 (L-B §3-3·§4-B·§7-6·§8)
- 7장→베스트5 «선택 절차» 글 0 · 랩어라운드 질문(«suite poker roi as 2 3 4» 70 · «dame roi as 2 3» · «valet dame roi as deux» · «2 as roi dame valet») 무응답 → EN L126 «K-A-2-3-4 is not a straight»가 답 — 확정 카피가 이걸 H2로 올렸으면 L126 불릿을 그 H2 아래 직답으로 펼친다(새 예시 없이 L126 카드 그대로).
- nuts SERP: 정의형 3 · 해설형 2(«comment reconnaître les nuts sur un tableau») — 우리 EN L180~192(보드 Q♣ 9♥ 6♣ 5♦ 2♠ 3단계 스캔)가 해설형을 이긴다.
- **우리가 더 줄 것 3**: ① 4단계 스캔(steps) + 21조합 표 ② 랩어라운드·휠 직답 ③ 넛 스캔 예시 + 흔한 실수 4개.

### 확정 카피
#### 메타
- **title** (62) : Lire le board au poker : ta meilleure main de 5 cartes parmi 7
- **seoTitle** (57) : Quelles 5 cartes jouent ? — Lire le board, avoir les nuts
- **desc** (154) : La river tombe, et tu as quoi ? Lire le board au poker : ta meilleure main de 5 cartes parmi 7, suite ou couleur sur le board, jouer le board et les nuts.
- **tldr** (309) : Au Texas Hold'em, tu joues toujours la meilleure main de 5 cartes parmi 7 (tes 2 cartes fermées + les 5 cartes communes), avec tes deux cartes fermées, une seule ou aucune (jouer le board). Passe les 7 cartes en revue toujours dans le même ordre : couleur, puis suite, puis cartes appariées, puis carte haute.
- **tags** (9) : "nuts poker", "les nuts poker", "lire le board poker", "suite poker as 2 3 4 5", "suite poker roi as 2 3 4", "board poker", "jouer le board", "texture de board poker", "meilleure main 5 cartes poker"

#### H2 (질문형 10/11 = 91 %)
| # | EN H2 | fr H2 | 형 |
|---|---|---|---|
| (H3) | The Short Answer | La réponse courte | – |
| 1 | How to Make the Best 5-Card Hand From 7 Cards | Comment trouver ta meilleure main de 5 cartes parmi 7 ? | Q |
| 2 | How to Read the Board in 4 Steps | Comment lire le board en 4 étapes ? | Q |
| 3 | What Does "Playing the Board" Mean in Poker? | Jouer le board : c'est quoi ? | Q |
| 4 | How to Spot a Straight on the Board | Comment repérer une suite sur le board ? | Q |
| 🆕 | — (4 뒤) | Roi-As-2-3-4, c'est une suite ? | Q |
| 5 | How to Spot a Flush on the Board | Comment repérer une couleur sur le board ? | Q |
| 6 | What Happens When the Board Pairs? Trips, Boats, and Quads | Que se passe-t-il quand le board se paire ? Brelan, full et carré | Q |
| 7 | Can You Have a Flush and a Pair at the Same Time? | Peut-on avoir une couleur et une paire en même temps ? | Q |
| 8 | What Is the Best Possible Hand? Reading the Nuts | Comment savoir si tu as les nuts ? | Q |
| 9 | Wet Board vs Dry Board: Reading the Texture | Board sec ou humide : comment lire la texture ? | Q |
| 10 | Board Reading Mistakes That Cost Real Money | Les erreurs de lecture du board qui coûtent cher | – |

🆕 메모: 「Roi-As-2-3-4」 = 자동완성 «suite poker roi as 2 3 4»(70) 축어 — 답은 EN FAQ «Can a straight wrap around?»의 «아니오, 랩어라운드 없음» 그대로(짧은 절, 새 핸드 금지). H2 8은 §2 ④ 고정 문자열.

#### H3
| EN H3 | fr H3 |
|---|---|
| The Short Answer | La réponse courte |
| Mistake 1 — Missing a straight you already made | Erreur 1 — Rater une suite que tu as déjà |
| Mistake 2 — Counting four suited cards as a flush | Erreur 2 — Compter quatre cartes de la même enseigne comme une couleur |
| Mistake 3 — Forgetting the board is shared | Erreur 3 — Oublier que le board est à tout le monde |
| Mistake 4 — Ignoring the boat on a paired board | Erreur 4 — Ignorer le full sur un board pairé |

#### FAQ (EN 11 + 🆕 1)
| # | EN Q | fr Q |
|---|---|---|
| 1 | How do you figure out your best 5-card hand from 7 cards? | Comment choisir ses 5 cartes parmi les 7 ? |
| 2 | Do you have to use both of your hole cards in Texas Hold'em? | Peut-on gagner en n'utilisant qu'une seule de ses cartes au Texas Hold'em ? |
| 3 | What does "playing the board" mean in Texas Hold'em? | Que veut dire « jouer le board » au Texas Hold'em ? |
| 4 | Can the board be the best hand for everyone? | Que se passe-t-il si la meilleure combinaison est affichée sur le board ? |
| 5 | Can you have a flush and a pair at the same time? | Une couleur et une paire en même temps, c'est possible ? |
| 6 | Can you use an ace in a straight? | As-2-3-4-5, c'est une suite au poker ? |
| 7 | Can a straight wrap around in poker? | Une suite peut-elle faire le tour (Dame-Roi-As-2-3) ? |
| 8 | How do you know if a flush is possible on the board? | Comment savoir si une couleur est possible sur le board ? |
| 9 | If there is a flush on the board, who wins? | Il y a une couleur sur le board : qui gagne ? |
| 10 | If there is a straight on the board, who wins? | Il y a une suite sur le board : qui gagne ? |
| 11 | Does a pair on the board count as part of your hand? | Une paire sur le board compte-t-elle dans ta main ? |
| 🆕 | — (§2 ④ 고정 · PAA) | Que signifie « nuts » au poker ? |

#### 키워드 흡수
| 검색어 (볼륨) | 자리 |
|---|---|
| nuts poker (210) · les nuts poker (20) · avoir les nuts poker (자동완성) | seoTitle(«avoir les nuts») · desc · tags · H2 8(고정) · FAQ 🆕(고정) |
| Que signifie « nuts » au poker ? / C'est quoi les nuts ? (PAA) | FAQ 🆕(고정 문자열) |
| meilleure main de 5 cartes parmi 7 (L-B 헤드) | title · desc · tags · H2 1 · FAQ 1 · tldr |
| lire le board / jouer le board (L-B 헤드) | title · desc · tags · H2 2·3 · FAQ 3 |
| suite poker as 2 3 4 5 (90) | tags · FAQ 6 |
| suite poker roi as 2 3 4 (70) · dame roi as 2 3 (자동완성) | tags · 🆕 H2 · FAQ 7 |
| board poker (20) · texture de board poker (자동완성) | tags · H2 9 |
| Peut-on gagner en n'utilisant qu'une seule de ses cartes au Texas Hold'em ? (unibet 축어) | FAQ 2 |
| Que se passe-t-il si la meilleure combinaison est affichée sur le board ? (unibet 축어) | FAQ 4 |
| poker couleur sur la table qui gagne (40 · tiebreak 소유) | FAQ 9 변형(«sur le board») — H2 축어는 tiebreak 🆕 |
| Quelles 5 cartes jouent ? (EN 훅) | seoTitle |

---

### §13 자리
- 카드 L: 62~64(표2) · 81 · 85(워크스루) · 96 · 100~101(보드 플레이 AAA77) · 112 · 118~121(표3) · 126(랩어라운드) · 143(이미지 alt) · 145 · 155 · 159~161(표5) · 173~174 · 184 · 186(넛 스캔 · 스트레이트 플러시 조건) · 199(compare) · 207 · 219 · 272(FAQ)
- 수치: 표1 L50~56(21가지 5장 조합 분포).
- L174 «TDA 2024 Rule 12» → «(TDA 2024, règle 12)».

### 경험담 자리
- L27: «The first time a dealer read my hand better than I did, I was tabling what I thought was ace high. "Straight," she announced, pushing me a pot I had mentally given up — my 8-6 had quietly connected with three board cards while I was busy mourning a missed flush draw.» (딜러 = **la donneuse**)
- L72: «This is the exact scan I run on every river, in this order — from the hardest hand to spot down to the easiest:»

### 현지 추가
- 🆕 FAQ «Que signifie « nuts » au poker ?»: 정의 1~2문장(«la meilleure main possible sur ce board à ce moment-là» — EN L182 축어 뜻) + H2 «Comment savoir si tu as les nuts ?» 쪽 예시 참조. 정의를 길게 늘이지 않는다(정의 깊이는 도구 용어집).
- 🆕 FAQ «Peut-on gagner en n'utilisant qu'une seule de ses cartes ?»(있다면): EN FAQ L242(«Do you have to use both of your hole cards…»)와 같은 답 — 문구만 PAA형.

### 하지 말 것
- monotone·paired 보드 **전략**(베팅 사이즈·c-bet)으로 넓히지 마라 — GTO 13편 몫. wet/dry 절은 EN 분량 그대로.
- EN-먼저 후보: 없음.

