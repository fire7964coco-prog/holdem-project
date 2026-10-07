# fr-strat 브리프 — 🅳 전략 8편 (레인 A · 2026-10-07)

> **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)뿐이다.** 웹·MCP·다른 로케일 파일은 B에서 열지 않는다(ms 규격 §3 🟢). 사실·수치·카드의 출처는 EN 축어뿐.
> 정본: `docs/fr-cluster-plan.md` §3-A(고정문·용어 — **판단 없이 따른다**) · §3-B(소유표) · §5(ms→fr 치환표) + `docs/ms-translation-lanes.md` §5(B 규격).
> EN 기준 해시 **`a54b5f3d`** — 8편 모두 그 뒤 EN 변경 0(`git diff a54b5f3d..HEAD -- lib/posts-en/<8편>` 실측 10-07). `masterUpdated` = 아래 각 편 EN `updated`.
> 키워드·SERP 출처 = `docs/keyword-bank/fr-serp/L-D-strat.md`(0-2 · DataForSEO 2250/fr · 2026-10-07) + `fr-core-volumes.md` — 레인 A는 재조사하지 않았다(계획 §2-①). 볼륨은 그 문서 축어.
> 🔴 **확정 카피(seoTitle·desc·tldr·title·tags·H2 세트·FAQ 문항)는 B·C가 바꾸지 않는다**(계획 §2-⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 8편 공통 — B가 매 편 지킬 것

### 0-1. 고정문 (계획 §3-A ①)
| 자리 | 정본 |
|---|---|
| 직답 블록 라벨 | `> **Réponse rapide**` (EN «Quick answer» 자리 전부) |
| readnext | `:::readnext[À lire ensuite]` |
| FAQ H2 | `## FAQ` · 문항 `**Q. …**` + 빈 줄 + `A. …` (스키마 조건) |
| 관련 글 H2 | `## Articles liés` |
| 마무리 H2 | `## À retenir` (EN «Takeaways / Things to Remember / In Short / One More Time» 자리) |
| readTime | `"N min"` (EN 값 그대로) |
| 화자 | 1인칭 단수 · 남성형 일치(«je me suis figé») |

### 0-2. 문체·조판 (§3-A ②)
- **tu** 전용 · 명령형 훅(«Regarde… / Compare… / Essaie…») · vous 금지.
- 숫자: 천 단위 공백(`1 326`) · 소수점 쉼표(`11,8 %`) · `%` 앞 공백 · 비율 `2,7:1` · 화폐 `$` 앞붙임(`$1/$2`) — 🔴 **값은 EN 축어, 구분자만 바꾼다**.
- 인용 `« … »`(안쪽 공백) · 아포스트로피 곧은 `'` 만 · `Texas Hold'em`.
- 카드: 영어 랭크 문자 + 무늬 기호(`A♠ K♥ 10♠`) — R/D/V 금지. 하이라이트 `==A♣K♦==` 그대로. 풀어 쓸 때 «paire d'as», «roi», «dame», «valet».
  - 🔴 **무늬 붙은 카드의 T는 `10`으로**(`T♠` → `10♠` · fr 코퍼스 `10♠` 등 9건 · `T♠` 0 — 실측 10-07). EN에 `T♠`가 있는 편: position-play 2 · continuation-bet 2(`Q♥T♥7♠`). **핸드 클래스 표기 `ATs` · `KTo` · `TT` · `JTs`는 그대로**(코퍼스 JTs·ATs·TT). C의 전사 대조 스크립트는 `T♠`↔`10♠`를 같은 토큰으로 정규화한다.
- `préflop`(붙여 씀).
- 🔴 금지: 백틱 · `**` 중첩 · tldr 안 마크다운 · content에 히어로 이미지 넣기(렌더러가 그린다) · slug·이미지 경로 변경 · 영어 직역투.

### 0-3. 용어 (§3-A ④ 발췌 — 이 클러스터에 나오는 것)
| EN | fr 본문 | 비고 |
|---|---|---|
| position / in position / out of position | position · en position (IP) · hors de position (OOP) | 첫 등장 약어 병기 |
| UTG · LJ · HJ · CO · BTN · SB · BB | 약어 그대로 · 첫 등장 풀어 쓰기: under the gun (UTG) · lojack (LJ) · hijack (HJ) · cut-off (CO) · bouton (BTN) · petite blinde (SB) · grosse blinde (BB) | MP = middle position |
| dealer / button | donneur · bouton | «dealer»는 «bouton (dealer)» 병기 1회만 |
| blind | blinde · petite/grosse blinde | 첫 정의 «blinde (blind)» |
| check / bet / call / raise / fold | checker(«il checke») · miser · suivre(payer 허용) · relancer/relance · **se coucher**(재귀)·구어 «folder» | 카피·H2는 «fold» 허용 |
| re-raise / 3-bet / 4-bet | surrelance · 3-bet · 4-bet | 3bet 글 첫 정의 «3-bet (la surrelance)» |
| c-bet | c-bet · 첫 등장 «c-bet (continuation bet, ou « mise de continuation »)» | 이후 c-bet |
| limp / limper / iso-raise | limp · limper · limpeur · «relance d'isolation (iso-raise)» | — |
| all-in / stack | tapis · faire tapis (all-in) · stack | 🔴 tapis = all-in 뜻으로만 |
| turn / river | la turn (le tournant) · la river (la rivière) | 첫 등장 병기 |
| board / flop | le board (les cartes communes) · le flop | — |
| showdown | abattage | 첫 등장 «l'abattage (showdown)» |
| pot odds / equity / range | cotes du pot · équité · la range (여성) | — |
| outs / draw / gutshot | outs · tirage · gutshot (tirage ventral) | — |
| set / trips / two pair / flush / straight | brelan servi (set) · brelan · double paire · couleur · quinte | 본문에 «suite» 금지 |
| solver / GTO | solver · GTO | 헤드 조준 금지(§3-B ⑫) |
| fish / calling station | fish · calling station | fish 헤드 = holdem-fish 소유 |

### 0-4. 도구 링크 앵커 문구 (§3-A ⑤ — 고정)
- `/fr/hand-chart` = «tableau des mains de départ par position» 또는 «tableau range poker»
- `/fr/calculator` = «calculateur poker» · 기능별 «calculateur d'équité / d'outs»
- `/fr/solver` = «solver poker gratuit»
- `/fr/glossary` = «lexique du poker»

### 0-5. 링크 규칙
- EN 내부링크는 **1:1**로 `/fr/blog/<같은 slug>` · 도구 `/en/<tool>` → `/fr/<tool>` · readnext·thumb 속성 그대로(`"thumb:/images/…"`).
- 8편의 EN 링크 대상은 **전부 51편 + 도구 4종 안**이다(추출 실측) → 링크 편차 0이 기본. 예외는 각 편 «링크» 절에 적었다.
- GTO 역링크(continuation-bet ①·⑨ · position-play ⑦ · 3bet ⑧): **fr은 🅶 13편이 같은 배포에 나가므로 연다**(de 10-02 선례 · `docs/locale-intentional-diffs.md` L40). 문단은 fr 문맥으로 재저작 · 수치 불변(fr 구분자: 98,2 % · 98,4 %).
- 🔴 GTO 썸네일 `gto-*-en.webp`는 영어 오버레이다 — fr 변형(`-fr.webp`)은 아직 없다(실측 10-07). B는 **`-en.webp`를 그대로 쓰고**, 진행 파일 «헤드 요청»에 «🅶 레인이 `-fr` 변형을 만들면 교체» 1행을 둔다(이미 기재).
- 같은 클러스터 상호 앵커(§3-B): positions ↔ position-play 첫 문단 1개씩 · when-to-fold → holdem-betting-actions 정의 첫 등장 1개.

### 0-6. 구조 패리티
H2/H3·표 행·리스트·이미지·FAQ 수·디렉티브(`:::stripe` · `:::readnext` · `:::quiz:::`)·원시 HTML 줄(`<div style=…>` 카드 · `</div>`)·하이라이트 색(`==r:` · `==g:` 등)은 **EN과 같게**(많은 것 허용 · 적은 것 = 결손). 확정 카피의 «추가 H2»는 현지 추가로 허용.
이미지 alt·title(캡션)은 프랑스어로 재저작 · 경로 불변.
«Articles liés» 카드 그리드(`<div style="display:grid…">`)의 제목·부제는 프랑스어로, 카테고리 라벨은 아래 표로 통일(기존 fr 6편이 제각각이라 이 레인에서 정함 → 진행 파일 «신규 용어» 등재):

| EN 라벨 | fr | | EN 라벨 | fr |
|---|---|---|---|---|
| Strategy | Stratégie | | Odds | Probabilités |
| Position Strategy | Stratégie de position | | Positions | Positions |
| Starting Hands | Mains de départ | | Hand Rankings | Classement des mains |
| Glossary | Lexique | | Blinds | Blindes |
| Order of Play | Déroulé du jeu | | Beginner Guide | Guide débutant |
| Pillar | Pilier | | Tournament | Tournoi |

### 0-6-A. 확정 카피 읽는 법
- 각 편 «확정 카피»의 title·seoTitle·desc·tldr·tags = 필드에 **축어**. H2/FAQ 표는 EN 줄(L##)과 1:1 — 그 자리 헤딩·질문을 축어로 쓴다.
- «✅ 채택(A 확정)» 표시된 추가 FAQ는 **EN FAQ 문항 뒤에** 붙이고, 답은 괄호에 적힌 EN 절의 내용만으로 쓴다(새 수치 금지). 표시 없는 «ajout optionnel»·«❌ 기각»은 넣지 않는다.
- 괄호 속 주석(«ancre …», «pas de …»)은 B에 대한 지시다 — 헤딩 텍스트에 넣지 마라.

### 0-7. B 등록·게이트 (ms 규격 §5 + 계획 §5)
- 틀 = `lib/posts-fr/holdem-blind-meaning.ts`(필드 모양 · `masterUpdated` 필드) · `slug`·`image`·`category`·`emoji`·`keepImagesInBody` = EN 축어 · `date`·`updated` = 집필일.
- `lib/posts-fr/index.ts`의 **[fr-strat import 시작~끝] · [fr-strat 배열 시작~끝] 두 칸에만** 등록.
- 자기 게이트(편마다): `npm run audit:hard -- --locale=fr --slug=<slug>` 🔴 0 → 끝에 `npm run check:intl-links` · `npm run check:structure`(fr 행에서 내 슬러그 결손 0) · `npm run build`.

---

## holdem-strategy — EN updated 2026-10-05 · masterUpdated = "2026-10-05"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Texas Hold'em Strategy: The 5 Decisions Behind Every Winning Hand",
seoTitle: "Why Poker 'Tips' Never Stuck — Texas Holdem Strategy in 5 Decisions",
desc: "Winning poker isn't ten disconnected tips — it's the same five decisions every hand: position, hand selection, raise-or-fold, c-betting, and when to let go.",
tldr: "Every winning Texas Hold'em decision reduces to five repeatable questions: where am I sitting (position), is this hand worth playing, do I raise or fold rather than open-limp, do I keep betting on the flop, and when do I let go? A tight-aggressive player who answers those five well folds ~80% of hands preflop, plays them aggressively when they do, and beats almost every casual game — no memorized tip list required.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-05",
keepImagesInBody: true,
readTime: "14 min",
emoji: "♠️",
image: "/images/holdem-strategy-hero.webp",
imageAlt: "A focused poker player weighing a decision at a green-felt Texas Hold'em table, chips and community cards in front of them mid-hand",
tags: ["texas holdem strategy", "poker strategy", "poker strategy for beginners", "how to win at texas holdem", "tight aggressive", "when to fold in poker", "when to bluff", "when to 3-bet", "c-bet strategy"],
# seoTitle 길이 67
# desc 길이 156
# tldr 길이 418
```

### 구조 (EN content L18~L276 · L## = EN 파일 줄)
#### 헤딩
- L25 ### What actually separates winners from everyone else
- L36 ## Poker Strategy Isn't a List of Tips — It's Five Decisions
- L58 ## Decision 1 — Where Am I Sitting? (Position)
- L74 ## Decision 2 — Is This Hand Even Worth Playing? (Hand Selection)
- L91 ## Decision 3 — Raise or Fold. Don't Just Limp.
- L107 ## Decision 4 — Do I Keep Betting on the Flop? (The C-Bet)
- L121 ## Decision 5 — When Do I Fold? (The Decision That Saves the Most Money)
- L133 ## The Math You Can't Skip
- L143 ## The 6 Leaks That Cost Beginners the Most — and the Fix
- L164 ## Tight-Aggressive: The One Style to Start With
- L180 ## FAQ
- L240 ## The Five Decisions, One More Time
- L252 ## Related Posts

#### FAQ 14문항
- L182 **Q. What is the best strategy for Texas Hold'em?**
- L186 **Q. What is the best poker strategy for beginners?**
- L190 **Q. How do you win at Texas Hold'em?**
- L194 **Q. When should you fold in poker?**
- L198 **Q. When should you bet vs. check in poker?**
- L202 **Q. When should you bluff in poker?**
- L206 **Q. When should you 3-bet?**
- L210 **Q. When should you raise vs. call?**
- L214 **Q. How many hands should you play in Texas Hold'em?**
- L218 **Q. What does tight-aggressive (TAG) mean?**
- L222 **Q. How often should you continuation bet (c-bet)?**
- L226 **Q. Is poker a game of skill or luck?**
- L230 **Q. What is GTO poker?**
- L234 **Q. How do you get better at poker?**

#### 표 2개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L27 :::stripe
- L32 :::
- L42 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L52 </div>
- L60 ![A player sitting on the dealer button with two face-down hole cards and a chip stack, the seat that acts last on every postflop street](/images/holdem-strategy-button-seat.webp "The button acts last on every postflop s
- L93 ![Three numbered tiles under a RAISE / FOLD headline — OVER-LIMP with chips and a seat marker, BIG BLIND with 1.5 ÷ 5.5 and 27%, SET-MINING with a pair of fives and 11.8%](/images/holdem-strategy-raise-or-fold.webp "Rais
- L123 ![Infographic of A♣ K♣ against a rainbow 2♥ 7♦ 9♠ flop, met by a check-raise and answered with a gold FOLD banner](/images/holdem-strategy-fold-ace-high.webp "The most profitable move in poker is the one nobody notices —
- L147 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L158 </div>
- L175 :::readnext[Keep reading]
- L178 :::
- L254 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L256     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L257     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L258     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why the button prints money</div>
- L261     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L262     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart</div>
- L263     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The 80% you should be folding</div>
- L266     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L267     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Why Limping Costs You</div>
- L268     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Raise or fold — the case against just calling</div>
- L271     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
- L272     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>
- L273     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The 10-second math behind every fold</div>
- L275 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L46 /en/blog/holdem-position-play ✅
- L47 /en/blog/holdem-starting-hands-chart ✅
- L48 /en/blog/holdem-limping ✅
- L49 /en/blog/holdem-betting-actions ✅
- L50 /en/blog/holdem-pot-odds ✅
- L60 /images/holdem-strategy-button-seat.webp "The button acts last on every postflop street — the single most profitable seat at the table" img
- L62 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L70 /en/blog/holdem-blind-meaning ✅
- L78 /en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp" ✅
- L87 /en/blog/holdem-starting-hands-chart ✅
- L93 /images/holdem-strategy-raise-or-fold.webp "Raise or fold first-in — the main discounts are over-limping in position, a 27% big-blind defence, and set-mining" img
- L97 /en/blog/holdem-limping ✅
- L103 /en/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp" ✅
- L109 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L113 /en/blog/holdem-continuation-bet ✅
- L117 /en/blog/holdem-betting-actions ✅
- L123 /images/holdem-strategy-fold-ace-high.webp "The most profitable move in poker is the one nobody notices — folding a beaten hand before it costs you a stack" img
- L129 /en/blog/holdem-when-to-fold "thumb:/images/holdem-when-to-fold-hero.webp" ✅
- L129 /en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp" ✅
- L137 /en/blog/holdem-pot-odds ✅
- L139 /en/blog/holdem-probability ✅
- L224 /en/blog/holdem-continuation-bet ✅
- L248 /en/blog/holdem-starting-hands-chart ✅
- L248 /en/blog/holdem-position-play ✅
- L248 /en/blog/holdem-pot-odds ✅

### 키워드 (DataForSEO google_ads 2250·fr · 2026-10-07 · 출처 fr-core-volumes §2 🅳 + L-D §1-B)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| poker strategie (어순 변형 · 독립 숫자) | 320 | seoTitle·tags — «stratégie poker»와 둘 다 |
| comment gagner au poker | 170 | 첫 H2 · FAQ |
| bluff poker | 170 | FAQ «Quand bluffer au poker ?» (bluff 전용 글 없음 → 본문 1문단·FAQ만) |
| stratégie poker | 110 | seoTitle·H1 |
| strategie poker (악상 없음) | 90 | tags |
| technique poker | 90 | tags · 본문 1회 |
| astuces poker | 90 | 훅 대비 재료(«pas des astuces») |
| comment bien jouer au poker | 70 | FAQ/본문 |
| conseils poker | 40 | 본문 |
| comment progresser au poker · stratégie poker pdf | 20 · 20 | FAQ «Comment progresser…» · 마무리 요약 박스 |
| stratégie poker débutant · conseil poker debutant · comment bien débuter au poker | `-` | 문구 재료(FAQ) |
| 함정 🚫 | — | «en ligne» · «sur winamax/betclic/1xbet» · «au casino» · 비디오게임(rdr2·pokerogue) · «gagner 100 euros par jour» — 조준 금지 · «comment jouer au poker»=L-A · «stratégie poker tournoi»=L-E 앵커 |

### PAA·자동완성 (축어)
- PAA: Quelles sont les stratégies efficaces pour gagner au poker ? · Comment bien miser au poker ? · Comment puis-je bien miser au poker ? · Comment bien débuter au poker ? · Quels sont les fondamentaux du poker ?
- 자동완성: comment gagner au poker · comment bien jouer au poker · comment progresser au poker · quand / comment / pourquoi bluffer au poker · comment relancer au poker · stratégie poker texas hold em · stratégie poker cash game · technique poker · conseil poker

### 현지 SERP (L-D §3-7·3-8·4-2)
- 상위: pokerstars.fr 「Conseils stratégiques…」 · clubpoker 허브 · winamax «Texas Holdem Poker : la stratégie»(≈2 980단어·이미지 25·표·FAQ 0) · pokersciences «7 stratégies» · coupdepoker «10 astuces» · partypoker.fr «18 astuces»(수치 0) · pokerlistings «10 façons dont les débutants perdent» · 영상 팩(Skyyart «17 erreurs») 1위 위.
- 그들이 주는 것: 팁 목록(10·17·18개) · position·mains de départ·bluff 일반론. 빠진 것: 수치(팟 오즈·빈도) · 1인칭 실전 · FAQ · 결정 순서.
- 우리가 더 줄 것: ① «팁 18개가 아니라 결정 5개» 골격 ② 결정마다 수치 + 솔버 링크 ③ 1인칭 경험담 + 인쇄용 요약(«stratégie poker pdf» 의도는 «À retenir» 박스로 흡수 — PDF 파일을 새로 만들지 않는다).
- H2 처방(L-D §7-2): 첫 H2 → «Comment gagner au poker ? Pas avec des astuces, avec 5 décisions» · 추가 «Quels sont les fondamentaux du poker ?»(직답 박스로 흡수 가능) · Decision 3에 «Comment bien miser au poker ?» · 6 Leaks → «Les 6 erreurs de débutant qui coûtent le plus» · TAG → «Jouer serré-agressif (TAG)».
- FAQ 처방: Quelles sont les stratégies efficaces pour gagner au poker ? · Comment bien débuter au poker ? · Comment bien miser au poker ? · Le poker, hasard ou adresse ? · Comment progresser au poker ? · Quand bluffer au poker ?

### 소유표 (계획 §3-B)
- 주인인 검색어: stratégie poker · poker strategie · comment gagner au poker · technique/astuces/conseils poker · comment bien jouer au poker.
- 쓰면 안 되는 헤드(seoTitle·H1·tags): «position poker»(②→positions) · «tableau / range»(⑨→`/fr/hand-chart`) · «GTO poker»·«solver poker»(⑫→`/fr/solver` — EN FAQ «What is GTO poker?»는 유지하되 답 1~2문장 + «solver poker gratuit» 앵커) · «fold poker»·«se coucher» 정의(③→betting-actions) · «calcul/calculateur»(⑧) · «tournoi poker»(⑩).
- 위임 앵커: 결정 1 → holdem-positions · 결정 2 → holdem-starting-hands-chart + «tableau des mains de départ par position» · 결정 3 → holdem-limping · 결정 4 → holdem-continuation-bet · 결정 5 → holdem-when-to-fold · 수학 → holdem-pot-odds / «calculateur poker».

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 80 · seoTitle 58(≤60) · desc 151(≤160) · tldr 513

**title (H1, 80)** : Stratégie poker au Texas Hold'em : les 5 décisions derrière chaque main gagnante

**seoTitle (58)** : Pas d'astuces, 5 décisions — Stratégie poker Texas Hold'em

**desc (151)** : Tu as lu dix astuces et tu perds encore ? Gagner au poker tient à 5 décisions : position, mains à jouer, relancer ou se coucher, c-bet et quand lâcher.

**tldr** : Chaque décision gagnante au Texas Hold'em se ramène à cinq questions : où suis-je assis (la position), cette main vaut-elle la peine d'être jouée, est-ce que je relance ou je me couche plutôt que de limper, est-ce que je continue à miser au flop (le c-bet), et quand est-ce que je lâche ? Un joueur serré-agressif qui répond bien à ces cinq questions se couche sur environ 80 % de ses mains préflop, joue les autres agressivement et bat presque toutes les parties entre amateurs, sans liste d'astuces à mémoriser.

**tags** : ["stratégie poker", "poker strategie", "strategie poker", "comment gagner au poker", "technique poker", "comment bien jouer au poker", "conseils poker", "astuces poker", "stratégie poker texas hold em", "serré-agressif"]

#### H2 (EN → FR)
- L25 `### What actually separates winners from everyone else` → `### Ce qui sépare vraiment les gagnants des autres`
- L36 `## Poker Strategy Isn't a List of Tips — It's Five Decisions` → `## Comment gagner au poker ? Pas avec des astuces, avec 5 décisions`
- L58 `## Decision 1 — Where Am I Sitting? (Position)` → `## Décision 1 — Où suis-je assis ? (la position)`
- L74 `## Decision 2 — Is This Hand Even Worth Playing? (Hand Selection)` → `## Décision 2 — Cette main vaut-elle le coup d'être jouée ? (la sélection des mains)`
- L91 `## Decision 3 — Raise or Fold. Don't Just Limp.` → `## Décision 3 — Comment bien miser au poker ? Relancer ou se coucher, pas limper`
- L107 `## Decision 4 — Do I Keep Betting on the Flop? (The C-Bet)` → `## Décision 4 — Est-ce que je continue à miser au flop ? (le c-bet)`
- L121 `## Decision 5 — When Do I Fold? (The Decision That Saves the Most Money)` → `## Décision 5 — Quand lâcher ta main ? (la décision qui fait économiser le plus)`
- L133 `## The Math You Can't Skip` → `## Quelles maths faut-il vraiment connaître ? Cotes du pot et équité`
- L143 `## The 6 Leaks That Cost Beginners the Most — and the Fix` → `## Les 6 erreurs de débutant qui coûtent le plus (et comment les corriger)`
- L164 `## Tight-Aggressive: The One Style to Start With` → `## Jouer serré-agressif (TAG) : le seul style pour débuter`
- L180 `## FAQ` → `## FAQ`
- L240 `## The Five Decisions, One More Time` → `## À retenir : les 5 décisions`
- L252 `## Related Posts` → `## Articles liés`
- Question-form : 7/9 H2 de contenu (78 %). Aucun H2 ajouté — « Quels sont les fondamentaux du poker ? » (PAA) s'absorbe dans le bloc `> **Réponse rapide**` sous L36, pas en H2.

#### FAQ (EN → FR)
1. What is the best strategy for Texas Hold'em? → `Quelles sont les stratégies efficaces pour gagner au poker ?` (PAA verbatim)
2. What is the best poker strategy for beginners? → `Comment bien débuter au poker ?` (PAA verbatim)
3. How do you win at Texas Hold'em? → `Comment gagner au poker ?` (170)
4. When should you fold in poker? → `Quand faut-il se coucher au poker ?` (→ ancre holdem-when-to-fold dans la réponse)
5. When should you bet vs. check in poker? → `Comment bien miser au poker ? Miser ou checker ?` (PAA verbatim en tête)
6. When should you bluff in poker? → `Quand bluffer au poker ?`
7. When should you 3-bet? → `Quand faire un 3-bet au poker ?`
8. When should you raise vs. call? → `Quand relancer au poker plutôt que suivre ?`
9. How many hands should you play in Texas Hold'em? → `Combien de mains faut-il jouer au Texas Hold'em ?`
10. What does tight-aggressive (TAG) mean? → `Que veut dire serré-agressif (TAG) ?`
11. How often should you continuation bet (c-bet)? → `À quelle fréquence faire un c-bet ?`
12. Is poker a game of skill or luck? → `Le poker, hasard ou adresse ?`
13. What is GTO poker? → `GTO ou jeu exploitant : par quoi commencer au poker ?` (réponse = EN축어 의미: GTO 1문장 정의 + 저스테이크는 exploitant + ancre « solver poker gratuit » → /fr/solver ; « GTO » reste hors seoTitle/title/tags)
    - 🔧 Opus 조정(A): Fable안 «C'est quoi le GTO au poker ?»는 §3-B ⑫가 `/fr/solver`에 준 PAA «C'est quoi le GTO» 축어라 카니발 → EN 답의 실제 논지(GTO vs exploit, 초심자 순서)로 바꿨다.
14. How do you get better at poker? → `Comment progresser au poker ?` (20)

#### Mots-clés absorbés
- poker strategie (320) / stratégie poker (110) / strategie poker (90) → seoTitle · H1 · tags
- comment gagner au poker (170) → H2 L36 · FAQ 3 · tags
- bluff poker (170) → FAQ 6 (« Quand bluffer au poker ? »)
- technique poker (90) → tags (+ 1 occurrence corps)
- astuces poker (90) → seoTitle (hook « pas d'astuces ») · desc · tags
- comment bien jouer au poker (70) → tags · FAQ 2 voisinage
- conseils poker (40) → tags
- comment bien miser au poker (PAA) → H2 L91 · FAQ 5
- comment progresser au poker (20) → FAQ 14
- stratégie poker pdf (20) → bloc « À retenir » (pas de fichier)
- comment bien débuter au poker (autocomplete) → FAQ 2
- stratégie poker texas hold em (autocomplete) → seoTitle · tags
- quand 3 bet au poker (autocomplete) → FAQ 7

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L29 · L30 · L31 · L42 · L78 · L93 · L103 · L117 · L123 · L127 · L137 · L139 · L145 · L147 · L151 · L184 · L216 · L224 · L236 · L243 · L255 · L256 · L257 · L260 · L261 · L262 · L263 · L265 · L266 · L267 · L270 · L271 · L272 · L273

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L19: For my first two years I did what everyone does: I read the tip lists. "Ten quick tips." "Nine essential rules…
- L21: What finally made me a winning player wasn't a longer list. It was realizing that **every hand of Texas Hold'e…
- L127: Here's a concrete one from a hand I played. I raised ==A♣K♣== and got one caller. The flop came ==2♥ 7♦ 9♠== —…
- L137: **Pot odds** tell you whether a call is profitable: compare the price of the call to the size of the pot, then…

### 하지 말 것
- EN FAQ «What is GTO poker?»는 유지하되 답은 1~2문장 + «solver poker gratuit»(`/fr/solver`) 앵커 — «GTO poker» 헤드는 도구 소유(§3-B ⑫).
- «stratégie poker pdf»(20) 의도는 «À retenir» 요약으로만 받는다 — PDF 파일·다운로드 링크를 새로 만들지 않는다.
- «en ligne» · 운영사명(winamax·betclic) · «au casino» 문구 조준 금지.
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-positions — EN updated 2026-09-28 · masterUpdated = "2026-09-28"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Poker Positions: Every Seat Name & Chart",
seoTitle: "Your Seat Changes Names Every Hand — Poker Positions Chart",
desc: "The names move with the button, not the chairs. Every poker position name — UTG, hijack, cutoff, button — plus seat numbers, 6-max map, and who acts first.",
tldr: "Poker positions are seat names measured from the dealer button — UTG, lojack, hijack, cutoff, button, and the blinds — and they normally move one seat clockwise every hand. Preflop, UTG acts first and the big blind last; postflop, the small blind acts first and the button last (heads-up the button is the small blind: first to act preflop, last postflop). Physical seat numbers never move; positions do.",
category: "strategy",
date: "2026-06-13",
updated: "2026-09-28",
keepImagesInBody: true,
readTime: "12 min",
emoji: "🎯",
image: "/images/holdem-positions-hero.webp",
imageAlt: "Top-down view of a professional poker table showing 9 player positions with chip stacks and a gold dealer button",
tags: [
# seoTitle 길이 58
# desc 길이 155
# tldr 길이 404
```

### 구조 (EN content L26~L264 · L## = EN 파일 줄)
#### 헤딩
- L40 ## What Are the Positions at a Poker Table? (Full Seat Map)
- L66 ## Poker Position Names & Abbreviations: UTG, LJ, HJ, CO, BTN, SB, BB
- L87 ## Poker Seat Numbers vs Positions — Seat 1 Is Not a Position
- L107 ## What Is UTG in Poker?
- L117 ## The Hijack and Lojack — and Why They're Called That
- L130 ## The Cutoff and the Button (Dealer Position)
- L140 ## The Blinds: SB and BB Seats
- L153 ## Who Acts First in Poker — Preflop vs Postflop (Do the Blinds Go First?)
- L170 ## Poker Positions by Player Count: Heads-Up to 10-Handed (6-Max vs Full Ring)
- L197 ## FAQ
- L229 ## The Takeaways
- L240 ## Related Posts

#### FAQ 7문항
- L199 **Q. What does UTG stand for in poker?**
- L203 **Q. What is the hijack in poker?**
- L207 **Q. What is the lojack in poker?**
- L211 **Q. Who goes first, the small blind or the big blind?**
- L215 **Q. How many positions are there in 6-max poker?**
- L219 **Q. Do poker positions change every hand?**
- L223 **Q. What is Seat 1 in poker?**

#### 표 4개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L46 ![Nine-handed poker table with chip stacks at every seat and the dealer button marked D in front of one player](/images/holdem-button-position-hero.webp "The dealer button sets every seat's position and the order of play
- L95 :::compare
- L101 :::
- L192 :::readnext[Keep reading]
- L195 :::
- L242 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L244     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Beginner Guide</div>
- L245     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Texas Hold'em Rules for Beginners</div>
- L246     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">How a full hand works from deal to showdown</div>
- L249     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Position Strategy</div>
- L250     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">In vs Out of Position Strategy</div>
- L251     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Opening ranges and what to do from every seat</div>
- L254     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Order of Play</div>
- L255     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Order of Play in Texas Hold'em</div>
- L256     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Preflop → flop → turn → river action sequence</div>
- L259     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blinds</div>
- L260     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small Blind & Big Blind Explained</div>
- L261     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why they exist and how to play them correctly</div>
- L263 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L31 /en/blog/texas-holdem-rules-for-beginners ✅
- L46 /images/holdem-button-position-hero.webp "The dealer button sets every seat's position and the order of play" img
- L83 /en/blog/holdem-position-play ✅
- L113 /en/blog/holdem-position-play ✅
- L136 /en/blog/holdem-position-play ✅
- L149 /en/blog/holdem-blind-meaning ✅
- L166 /en/blog/holdem-showdown-rules ✅
- L166 /en/blog/holdem-game-order ✅
- L186 /en/blog/holdem-position-play ✅
- L186 /en/blog/holdem-starting-hands-chart ✅
- L236 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L236 /en/blog/holdem-starting-hands-chart ✅
- L236 /en/blog/holdem-hand-rankings ✅

### 키워드 (출처 fr-core-volumes §2 🅳 + L-D §1-B · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| position poker = positions poker (한 수요 · 더하지 마라) | 590 | seoTitle 선두·H1 |
| utg poker | 260 | H2 «Quelle est la position UTG au poker ?» · FAQ |
| dealer poker | 210 | H2 (bouton/dealer) — 🔴 의도 혼재(딜러 직업) → «bouton (dealer)» 병기만 |
| cut off poker | 170 | H2 · FAQ |
| position poker 6 max | 140 | H2 인원수 |
| position au poker | 140 | 본문·tags |
| position poker table | 110 | 좌석 지도 H2 |
| bouton poker | 110 | H2 |
| under the gun poker | 50 | UTG H2 첫 정의 병기 |
| hijack · high jack · low jack poker | 50 · 50 · 40 | H2 Hijack/Lojack (hijack 자동완성 = 미국 앱 «Hijack Poker» 혼재 → H2 앵커만) |
| bouton dealer poker · place au poker | 40 · 30 | 본문 |
| position poker 8 max · 9 max | 40 · 20 | 인원수 H2 |
| middle / early position poker | 각 10 | 본문 «middle position (MP)» |
| range bouton poker | 20 | 🔴 도구 `/fr/hand-chart` 앵커 |

### PAA·자동완성 (축어)
- PAA: Comment s'appellent les différentes positions au poker ? (최다) · Quelle est la position UTG au poker ? · Qu'est-ce que la position cut-off au poker ? · Quel est l'ordre au poker ? · Quel est l'ordre des joueurs au poker ? · Qui doit parler en premier au poker ?
- 자동완성: position poker 6 max · 9 max · 8 max · a 6 · table · 5 max · table de 6 · low jack · 6 joueurs · utg · full ring · mp / position au poker: places au poker · role au poker · meilleur position au poker / cut off poker definition · bouton poker definition · poker bouton signification · bouton mort poker · etre au bouton poker
- 지식 패널 «Position»(position poker · position au poker).

### 현지 SERP (L-D §3-1~3-4·4-1)
- 590 헤드에 프랑스어 «positions» 전용 글 **0**(영어 3). 경쟁 글: cours-et-fiches «La Position au Poker : Guide Complet par Position»(≈1 640·표 3·FAQ·경험 0·🔴 UTG «~15 %» 기준 미표기·열거 불일치 — 직접 셈 22종=13,0 %/136콤보=10,3 %) · pokerskill.com/fr(2026-10-03·tu·앱 홍보·FAQ 4) · pokersciences(6 600핸드 곡선) · coupdepoker · wikipedia.
- 우리가 더 줄 것: ① 6/8/9-max 3열 좌석표(경쟁은 6/9 · LJ 누락) ② 좌석 번호 vs 포지션 ③ PAA 3문을 그대로 H2로(경쟁 0) + `/fr/hand-chart` 앵커.
- H2 처방(L-D §7-1): «What Are the Positions … (Full Seat Map)» → «Comment s'appellent les différentes positions au poker ?» · «What Is UTG» → «Quelle est la position UTG au poker ?» · «The Cutoff and the Button» → «Qu'est-ce que la position cut-off au poker ? Et le bouton ?» · «Who Acts First» → «Quel est l'ordre des joueurs au poker ? Qui parle en premier ?»(진행 순서 자체는 holdem-game-order 앵커) · «By Player Count» → «Positions au poker en 6-max, 8-max et 9-max (full ring)» · Hijack/Lojack 유지 + «middle position (MP)».
- FAQ 처방: Quelle est la position UTG au poker ? · Qu'est-ce que la position cut-off au poker ? · Quel est l'ordre des joueurs au poker ? · Quelle est la meilleure position au poker ?(1줄 + position-play 앵커) · Les positions changent-elles à chaque main ?

### 소유표 (계획 §3-B ②)
- 주인: «position(s) poker» 590 · 좌석명(utg 260 · cut off 170 · bouton · dealer) · 인원수 변형(6/8/9 max).
- 쓰면 안 되는 헤드: «tableau / range»(⑨ 도구) · 전략 해설(«jouer en position») = position-play 앵커 · 레인지 표 금지.
- 상호 앵커: 첫 문단에 holdem-position-play 1개(그쪽도 첫 문단에 이 글 1개).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 80 · seoTitle 57(≤60) · desc 158(≤160) · tldr 518

**title (H1, 80)** : Les positions au poker : le nom de chaque siège, UTG, cut-off, bouton et blindes

**seoTitle (57)** : Ta place change de nom à chaque main — Positions au poker

**desc (158)** : UTG cette main, hijack la suivante ? Les noms suivent le bouton, pas les chaises. Les positions au poker de UTG aux blindes, le 6-max et qui parle en premier.

**tldr** : Les positions au poker sont les noms des sièges mesurés à partir du bouton (UTG, lojack, hijack, cut-off, bouton et les blindes), et elles tournent normalement d'un siège dans le sens des aiguilles d'une montre à chaque main. Préflop, UTG parle en premier et la grosse blinde en dernier ; postflop, la petite blinde parle en premier et le bouton en dernier (en heads-up, le bouton est la petite blinde : premier à parler préflop, dernier postflop). Les numéros de siège physiques ne bougent jamais ; les positions, si.

**tags** : ["position poker", "positions au poker", "utg poker", "cut off poker", "bouton poker", "position poker 6 max", "position poker table", "under the gun poker", "hijack poker"]

#### H2 (EN → FR)
- L40 `## What Are the Positions at a Poker Table? (Full Seat Map)` → `## Comment s'appellent les différentes positions au poker ? (plan de table)`
- L66 `## Poker Position Names & Abbreviations: UTG, LJ, HJ, CO, BTN, SB, BB` → `## Noms et abréviations des positions au poker : UTG, LJ, HJ, CO, BTN, SB, BB`
- L87 `## Poker Seat Numbers vs Positions — Seat 1 Is Not a Position` → `## Numéro de siège ou position ? Le siège 1 n'est pas une position`
- L107 `## What Is UTG in Poker?` → `## Quelle est la position UTG au poker ? (under the gun)`
- L117 `## The Hijack and Lojack — and Why They're Called That` → `## Hijack et lojack : d'où viennent ces noms ? (et la middle position, MP)`
- L130 `## The Cutoff and the Button (Dealer Position)` → `## Qu'est-ce que la position cut-off au poker ? Et le bouton (dealer) ?`
- L140 `## The Blinds: SB and BB Seats` → `## Les blindes : les sièges SB et BB`
- L153 `## Who Acts First in Poker — Preflop vs Postflop (Do the Blinds Go First?)` → `## Quel est l'ordre des joueurs au poker ? Qui parle en premier, préflop et postflop ?` (ordre de jeu lui-même → ancre holdem-game-order)
- L170 `## Poker Positions by Player Count: Heads-Up to 10-Handed (6-Max vs Full Ring)` → `## Combien de positions selon le nombre de joueurs ? 6-max, 8-max, 9-max (full ring)`
- L197 `## FAQ` → `## FAQ`
- L229 `## The Takeaways` → `## À retenir`
- L240 `## Related Posts` → `## Articles liés`
- Question-form : 7/9 (78 %). Aucun H2 ajouté.

#### FAQ (EN → FR)
1. What does UTG stand for in poker? → `Que signifie UTG au poker ?`
2. What is the hijack in poker? → `C'est quoi le hijack au poker ?`
3. What is the lojack in poker? → `C'est quoi le lojack (low jack) au poker ?`
4. Who goes first, the small blind or the big blind? → `Qui doit parler en premier au poker, la petite ou la grosse blinde ?` (PAA « Qui doit parler en premier au poker ? »)
5. How many positions are there in 6-max poker? → `Combien y a-t-il de positions au poker en 6-max ?`
6. Do poker positions change every hand? → `Les positions changent-elles à chaque main ?`
7. What is Seat 1 in poker? → `C'est quoi le siège 1 au poker ?`
- ✅ **채택(A 확정)** (ajout optionnel — réponse = EN L130 section) `Qu'est-ce que la position cut-off au poker ?` (PAA verbatim)
- ✅ **채택(A 확정 · EN L136 «button … most profitable seat» 근거 · 답 1~2문장 + holdem-position-play 앵커)** (ajout optionnel — réponse = EN L229 takeaways, 1 ligne + ancre holdem-position-play — seulement si le corps EN dit que le bouton est la meilleure place) `Quelle est la meilleure position au poker ?`

#### Mots-clés absorbés
- position poker / positions poker (590) → seoTitle (fin) · H1 · tags
- utg poker (260) → H2 L107 · FAQ 1 · tags
- dealer poker (210) → H2 L130 « bouton (dealer) » (intention mixte → mention seulement)
- cut off poker (170) → H2 L130 · FAQ optionnel · tags
- position poker 6 max (140) → H2 L170 · FAQ 5 · tags
- position au poker (140) → desc · tags · corps
- position poker table (110) → H2 L40 « plan de table » · tags
- bouton poker (110) → H2 L130 · H1 · tags
- under the gun poker (50) → H2 L107 · tags
- hijack / high jack / low jack poker (50·50·40) → H2 L117 · FAQ 2–3 · tags
- position poker 8 max · 9 max (40·20) → H2 L170
- middle / early position poker (10) → H2 L117 « middle position (MP) »
- PAA « Comment s'appellent les différentes positions au poker ? » → H2 L40 ; « Quel est l'ordre des joueurs au poker ? » → H2 L153 ; « Qui doit parler en premier » → FAQ 4
- range bouton poker (20) → ancre /fr/hand-chart dans le corps uniquement

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L27 · L29 · L89 · L91 · L170 · L172 · L182 · L188 · L225 · L243 · L244 · L245 · L248 · L249 · L250 · L253 · L254 · L255 · L258 · L259 · L260

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L27: My first live cash game, I was seated in what I'd later learn was UTG. I looked down at J♥ J♠ and raised. The …
- L29: Three hands later I was on the button with the same J♥ J♠. I raised. Everyone folded. I won $14 without ever s…
- L31: Same hand. Completely different result. The only thing that changed was my seat — and that night I realized I …

### 하지 말 것
- 레인지 표·오픈 % 표를 새로 만들지 않는다(EN에 있는 것만) — 전략 해설은 holdem-position-play 앵커, 레인지는 «tableau des mains de départ par position».
- «Qui parle en premier» 절의 진행 순서 상세는 holdem-game-order 앵커로 위임(EN에 링크가 없으면 추가 링크 1개 허용 — 진행 파일 «링크 편차»에 «추가» 기록).
- «dealer poker»(210)는 딜러 직업 의도 혼재 → «bouton (dealer)» 병기만, 카피 조준 금지.
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-position-play — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Position Strategy: In vs Out of Position",
seoTitle: "Position Beats Cards — In vs Out of Position Poker Strategy",
desc: "Two players, same cards, opposite results — the seat did it. In position vs out of position, why position matters, and opening ranges from UTG to the button.",
tldr: "Being in position means you act last — you see every opponent's decision before spending a chip. Solver examples show that position usually improves equity realization, but neither seat is mechanically locked above or below 100%: ranges, board, and action can reverse the usual pattern. That's why UTG opens ~13% of hands and the button ~43% — and why position rewrites every c-bet, bluff, and pot-control decision postflop.",
category: "strategy",
date: "2026-06-18",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "16 min",
emoji: "🎯",
image: "/images/holdem-position-play-hero.webp",
imageAlt: "Top-down view of a professional poker table with 9 labeled positions and dealer button highlighting the button and cutoff seats as profit zones",
tags: [
# seoTitle 길이 59
# desc 길이 157
# tldr 길이 424
```

### 구조 (EN content L27~L330 · L## = EN 파일 줄)
#### 헤딩
- L41 ## What Does "In Position" Mean in Poker?
- L60 ## What Is "Out of Position" (OOP) — and Why Acting First Costs You
- L78 ## Why Is Position So Important in Poker Strategy?
- L97 ## The Best Position in Poker — and the Worst
- L122 ## Under the Gun: What It Means and How to Play UTG
- L136 ## Is It Better to Limp or Raise UTG?
- L150 ## Early Position vs Late Position Strategy (Stealing the Blinds)
- L166 ## Opening Ranges by Position: The Strategy Chart
- L190 ## How to Play Out of Position (When You Can't Avoid It)
- L206 ## How Does Position Affect C-Bet Frequency?
- L222 ## Small Blind Strategy: Why 3-Bet or Fold?
- L236 ## 6-Max vs Full Ring — and Tournaments vs Cash
- L249 ## FAQ
- L293 ## The Takeaways
- L306 ## Related Posts

#### FAQ 10문항
- L251 **Q. What does out of position mean in poker?**
- L255 **Q. Who acts first — the small blind or the big blind?**
- L259 **Q. Why does position matter so much in poker?**
- L263 **Q. What is the most profitable position in poker?**
- L267 **Q. What is the weakest position in poker?**
- L271 **Q. Is the small blind an early position?**
- L275 **Q. Is it better to limp or raise from UTG?**
- L279 **Q. How wide should I open from UTG vs the button?**
- L283 **Q. How does position affect c-bet frequency?**
- L287 **Q. Should you always 3-bet from the small blind?**

#### 표 5개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L66 :::compare
- L72 :::
- L89 ![IP vs OOP comparison — Button (IP) acts last, while ranges, board, and action determine each seat's exact equity realization](/images/holdem-position-play-ip-vs-oop.webp)
- L160 ![A late-position player on the button pushing a raise forward while both blinds fold — a textbook blind steal](/images/holdem-position-play-blind-steal.webp "Stealing the blinds from the button when it folds around")
- L182 ![9-handed poker table showing opening ranges widening from UTG (~13%, tight red) to the Button (~43%, wide green)](/images/holdem-position-play-opening-range.webp "Opening range by position — UTG opens ~13%, the button 
- L244 :::readnext[Keep reading]
- L247 :::
- L308 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L310     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
- L311     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Seat Names & Table Map</div>
- L312     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">UTG, Lojack, Hijack, Cutoff, Button — every seat explained</div>
- L315     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Starting Hands</div>
- L316     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart by Position</div>
- L317     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Which hands to play from each seat — printable reference chart</div>
- L320     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blinds</div>
- L321     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small Blind & Big Blind Strategy</div>
- L322     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why the discounted seats are the hardest to profit from</div>
- L325     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
- L326     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tournament vs Cash Game Strategy</div>
- L327     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">How position decisions change when ICM applies</div>
- L329 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L32 /en/blog/holdem-strategy ✅
- L56 /en/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp" ✅
- L80 /en/blog/holdem-equity ✅
- L89 /images/holdem-position-play-ip-vs-oop.webp img
- L128 /en/blog/holdem-starting-hands-chart ✅
- L146 /en/blog/holdem-limping ✅
- L160 /images/holdem-position-play-blind-steal.webp "Stealing the blinds from the button when it folds around" img
- L179 /en/blog/holdem-limping ✅
- L182 /images/holdem-position-play-opening-range.webp "Opening range by position — UTG opens ~13%, the button ~43%" img
- L186 /en/blog/holdem-starting-hands-chart ✅
- L194 /en/blog/low-board-check-raise ✅
- L218 /en/blog/holdem-continuation-bet ✅
- L232 /en/blog/holdem-blind-meaning ✅
- L240 /en/blog/holdem-tournament-vs-cash-game ✅
- L302 /en/blog/holdem-positions ✅
- L302 /en/blog/holdem-starting-hands-chart ✅
- L302 /en/blog/holdem-blind-meaning ✅

### 키워드 (출처 L-D §1-B·§8-A · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| jouer en position poker | 10 | seoTitle·H2 |
| hors de position poker | 10 | seoTitle·H2 |
| jouer hors position poker · poker hors position · meilleure position au poker | `-` | H2·FAQ 문구 |
| (공유) position poker 590 | — | 🔴 주인은 positions. 여기선 seoTitle 선두 금지 |
| 함정 | — | «hors-jeu»(축구) PAA 1 섞임 · «position poker» 선두 = 카니발 |

### PAA·자동완성 (축어)
- (헤드 PAA 공유) + 경쟁 FAQ: «Pourquoi dit-on « en position » et « hors de position » ?» · «Quelle est la meilleure position au poker ?» · «Quelle est la pire position au poker ?»
- 자동완성: jouer hors position poker · poker etre en position · comment jouer la position au poker · meilleur position au poker
- 결과 0: pourquoi la position est importante au poker · hors de position poker(영어·게임만)
- AI overview 있음: «jouer hors position poker».

### 현지 SERP (L-D §3-5·3-6)
- jouer en position: pokerstars.fr «Middle Position au Poker» · coupdepoker «Notion de position…» · pokerpro.fr · clubpoker 사전 · pokerskill · 영상 3. «hors de position» 전용 글 **0**(pokernews 2016 420단어뿐).
- 우리가 더 줄 것: ① 바튼 vs 블라인드 수익(EN 수치·출처 그대로) ② 같은 핸드 IP/OOP 비교(§13) ③ «hors de position» 전용 실전 처방.
- H2 처방(L-D §7-6): «Que veut dire « être en position » au poker ?» · «Jouer hors de position : pourquoi parler en premier coûte cher» · «Pourquoi la position est-elle si importante au poker ?» · «Quelle est la meilleure (et la pire) position au poker ?» · 🔴 Opening Ranges → «Combien de mains ouvrir selon la position ?» + 도구 앵커 · «Comment jouer hors de position quand on ne peut pas l'éviter».
- FAQ 처방: Quelle est la position la plus rentable au poker ? · Quelle est la pire position ? · La petite blinde est-elle une position précoce ? · Faut-il limper ou relancer UTG ?(limping 앵커) · Comment la position change-t-elle la fréquence de c-bet ?(cbet 앵커)

### 소유표 (계획 §3-B ②·⑨)
- 주인: «jouer en / hors de position» · «pourquoi la position est importante» · «meilleure / pire position».
- 쓰면 안 되는 헤드: 🔴 seoTitle **선두**에 «position poker» 금지(뒤쪽 보조어는 허용) · 좌석명 정의 H2(UTG·cut-off 정의 = positions) · «tableau / range / chart»(⑨) — EN H2 «Opening Ranges by Position: The Strategy Chart»는 «Combien de mains ouvrir selon la position ?»로 · «check raise poker»(⑤ → low-board-check-raise 앵커만).
- 상호 앵커: 첫 문단에 holdem-positions 1개.

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 75 · seoTitle 58(≤60) · desc 153(≤160) · tldr 528

**title (H1, 75)** : Jouer en position ou hors de position : pourquoi la position bat les cartes

**seoTitle (58)** : Mêmes cartes, résultat opposé — Jouer en position au poker

**desc (153)** : Mêmes cartes, résultat opposé ? Ton siège a décidé. Jouer en position ou hors de position, pourquoi ça compte et combien de mains ouvrir d'UTG au bouton.

**tldr** : Être en position, c'est parler en dernier : tu vois la décision de chaque adversaire avant de dépenser un jeton. Les exemples de solveur montrent que la position améliore généralement la réalisation d'équité, mais aucun siège n'est mécaniquement bloqué au-dessus ou en dessous de 100 % : les ranges, le board et l'action peuvent inverser le schéma habituel. C'est pour ça qu'UTG ouvre environ 13 % des mains et le bouton environ 43 %, et que la position réécrit chaque décision de c-bet, de bluff et de contrôle du pot postflop.

**tags** : ["jouer en position poker", "hors de position poker", "jouer hors position poker", "poker hors position", "meilleure position au poker", "pire position au poker", "pourquoi la position est importante au poker", "ouvrir utg poker"]

#### H2 (EN → FR)
- L41 `## What Does "In Position" Mean in Poker?` → `## Que veut dire « être en position » au poker ?`
- L60 `## What Is "Out of Position" (OOP) — and Why Acting First Costs You` → `## Jouer hors de position (OOP) : pourquoi parler en premier coûte cher`
- L78 `## Why Is Position So Important in Poker Strategy?` → `## Pourquoi la position est-elle si importante au poker ?`
- L97 `## The Best Position in Poker — and the Worst` → `## Quelle est la meilleure (et la pire) position au poker ?`
- L122 `## Under the Gun: What It Means and How to Play UTG` → `## Comment jouer UTG (under the gun) ?` (pas de définition de siège : elle appartient à holdem-positions)
- L136 `## Is It Better to Limp or Raise UTG?` → `## Faut-il limper ou relancer UTG ?`
- L150 `## Early Position vs Late Position Strategy (Stealing the Blinds)` → `## Position précoce ou position tardive : comment voler les blindes ?`
- L166 `## Opening Ranges by Position: The Strategy Chart` → `## Combien de mains ouvrir selon la position ?` (+ ancre « tableau des mains de départ par position » → /fr/hand-chart)
- L190 `## How to Play Out of Position (When You Can't Avoid It)` → `## Comment jouer hors de position quand tu ne peux pas l'éviter ?`
- L206 `## How Does Position Affect C-Bet Frequency?` → `## Comment la position change-t-elle la fréquence de c-bet ?`
- L222 `## Small Blind Strategy: Why 3-Bet or Fold?` → `## Petite blinde : pourquoi 3-bet ou se coucher ?`
- L236 `## 6-Max vs Full Ring — and Tournaments vs Cash` → `## 6-max ou full ring, tournoi ou cash game : qu'est-ce qui change ?`
- L249 `## FAQ` → `## FAQ`
- L293 `## The Takeaways` → `## À retenir`
- L306 `## Related Posts` → `## Articles liés`
- Question-form : 11/12 (92 %). Aucun H2 ajouté.

#### FAQ (EN → FR)
1. What does out of position mean in poker? → `Que veut dire « hors de position » au poker ?`
2. Who acts first — the small blind or the big blind? → `Qui parle en premier, la petite blinde ou la grosse blinde ?`
3. Why does position matter so much in poker? → `Pourquoi dit-on que la position est si importante au poker ?`
4. What is the most profitable position in poker? → `Quelle est la position la plus rentable au poker ?`
5. What is the weakest position in poker? → `Quelle est la pire position au poker ?`
6. Is the small blind an early position? → `La petite blinde est-elle une position précoce ?`
7. Is it better to limp or raise from UTG? → `Vaut-il mieux limper ou relancer depuis UTG ?` (ancre holdem-limping)
8. How wide should I open from UTG vs the button? → `Combien de mains ouvrir UTG et au bouton ?`
9. How does position affect c-bet frequency? → `Comment la position influence-t-elle la fréquence de c-bet ?` (ancre holdem-continuation-bet)
10. Should you always 3-bet from the small blind? → `Faut-il toujours 3-bet depuis la petite blinde ?`
- ✅ **채택(A 확정)** (ajout optionnel — réponse = EN L41 + L60) `Pourquoi dit-on « en position » et « hors de position » ?`

#### Mots-clés absorbés
- jouer en position poker (10) → seoTitle · H1 · tags
- hors de position poker (10) → H1 · desc · H2 L60 · FAQ 1 · tags
- jouer hors position poker / poker hors position (autocomplete, AI overview) → H2 L190 · tags
- meilleure position au poker (autocomplete) → H2 L97 · FAQ 4 · tags
- pire position au poker (FAQ concurrente) → H2 L97 · FAQ 5 · tags
- pourquoi la position est importante au poker (0 résultat = trou) → H2 L78 · FAQ 3 · tags
- position poker (590, partagé) → seoTitle en position arrière uniquement (« en position au poker »), jamais en tête

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L28 · L30 · L32 · L37 · L85 · L91 · L99 · L101 · L114 · L116 · L128 · L172 · L173 · L174 · L175 · L176 · L177 · L178 · L179 · L182 · L184 · L196 · L212 · L213 · L214 · L216 · L238 · L240 · L261 · L265 · L269 · L281 · L285 · L295 · L296 · L300 · L309 · L310 · L311 · L314 · L315 · L316 · L319 · L320 · L321 · L324 · L325 · L326

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L28: Last spring at my regular 1/2 game I played K♥Q♥ twice in the same session — once from the big blind, once fro…
- L30: From the big blind, I called a button raise and flopped top pair on Q♠8♦4♣. Acting first on every street, I ch…
- L32: An hour later, same K♥Q♥, this time on the button. I raised, the big blind called and checked the J♠7♦3♣ flop.…
- L118: > **Live game tip:** At a 1/2 live game, players regularly limp the button because "I don't have a great hand.…
- L279: **Q. How wide should I open from UTG vs the button?**…

### 하지 말 것
- tldr·본문의 «equity realization» 문장은 10월 EN 개정 문구(«neither seat is mechanically locked above or below 100%»)를 의미 그대로 — 단정형으로 바꾸지 마라.
- EN H2 «Opening Ranges by Position: The Strategy Chart»는 확정 카피의 프랑스어 H2로(«chart»·«tableau» 금지) · 표 자체는 EN 행 그대로.
- ⑦ check-raise 링크(`low-board-check-raise`)는 연다(🅶 같은 배포).
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-starting-hands-chart — EN updated 2026-10-01 · masterUpdated = "2026-10-01"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Poker Starting Hands Chart & Best Hands",
seoTitle: "Fold 80% of Your Hands? — Best Poker Starting Hands Chart",
desc: "Most hole cards lose money. The best and good starting hands in poker, the full chart by position and 6-max, plus GTO vs beginner charts — in 10 minutes.",
tldr: "Of the 169 starting hand types, only a small top slice — about 15–20% of the hands you're dealt — is profitable for a beginner. Big pairs (AA–TT) and AK raise from any seat; the later you act, the wider you open — from ~13% under the gun to ~43% on the button (wider again in 6-max). Start with a simplified chart, add GTO preflop charts once raise-or-fold is automatic.",
category: "strategy",
date: "2026-06-14",
updated: "2026-10-01",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🂡",
tags: [
image: "/images/holdem-starting-hands-chart-hero.webp",
imageAlt: "Texas Hold'em starting hands chart showing Premium (AA KK QQ JJ AK), Strong (TT 99 AQ KQ) and Fold groups by position UTG to button",
# seoTitle 길이 57
# desc 길이 153
# tldr 길이 370
```

### 구조 (EN content L24~L307 · L## = EN 파일 줄)
#### 헤딩
- L35 ### Starting hands, by the numbers
- L46 ## The 10 Best Starting Hands in Poker, Ranked
- L71 ## What Counts as a Good Starting Hand in Poker?
- L88 ## Poker Starting Hands Chart by Position (Full 9-Max Chart)
- L113 ### Early position (UTG): the tightest range
- L129 ### Late position (cutoff and button): the widest range
- L142 ## 6-Max Starting Hands: How the Chart Changes
- L159 ## What Percentage of Starting Hands Should You Play?
- L171 ## GTO Preflop Charts vs Beginner Charts: Which to Use?
- L190 ## The Worst Starting Hands (That Look Playable)
- L209 ## Printable Starting Hands Chart (PDF Cheat Sheet)
- L228 ## Test Yourself: Preflop Hand Quiz
- L252 ## FAQ
- L288 ## Related Posts

#### FAQ 8문항
- L254 **Q. What is the best starting hand in poker?**
- L258 **Q. What are good starting hands in poker?**
- L262 **Q. How many starting hands are there in poker?**
- L266 **Q. What is the 7-2 rule in poker?**
- L270 **Q. What is the worst starting hand in poker?**
- L274 **Q. Should beginners use GTO preflop charts?**
- L278 **Q. Does being suited really matter?**
- L282 **Q. Should I always fold small pocket pairs like 22 or 33?**

#### 표 4개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L37 :::stripe
- L42 :::
- L63 ![Four premium Texas Hold'em starting hands — pocket aces, pocket kings, pocket queens, and ace-king suited — glowing gold on dark green felt](/images/holdem-starting-hands-premium.webp "The premium tier — hands you can 
- L84 :::tip[The tier is only half the answer. A speculative hand is "good" on the button and bad under the gun — which is why the real chart is organized by position, not by hand.]:::
- L109 :::rangechart:::
- L146 :::compare
- L153 :::
- L163 :::stat[15–20%] of dealt hands — a healthy beginner range at 9-max:::
- L177 :::compare
- L184 :::
- L201 ![Weak ace trap in Texas Hold'em — A♣ 4♦ outlined in red as a losing hand, dominated by A♠ K♦ in gold](/images/holdem-starting-hands-weak-ace-trap.webp "Weak aces look strong but stay dominated — fold them preflop")
- L217 :::steps
- L222 :::
- L241 :::quiz:::
- L247 :::readnext[Keep reading]
- L250 :::
- L290 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L292     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
- L293     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Hand Rankings — Best to Worst</div>
- L294     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">All 10 hands explained with odds and examples</div>
- L297     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
- L298     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Positions: UTG to Button</div>
- L299     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why position changes which hands to play</div>
- L302     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hand Rankings</div>
- L303     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Kicker and Tie-Breaker Rules</div>
- L304     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Same pair but different result — kicker decides</div>
- L306 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L29 /en/blog/holdem-strategy ✅
- L63 /images/holdem-starting-hands-premium.webp "The premium tier — hands you can raise from any position" img
- L67 /en/blog/holdem-glossary ✅
- L67 /en/blog/holdem-hand-rankings ✅
- L111 /en/hand-chart ✅ 도구
- L111 /en/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp" ✅
- L155 /en/blog/holdem-position-play ✅
- L167 /en/blog/holdem-probability ✅
- L186 /en/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp" ✅
- L201 /images/holdem-starting-hands-weak-ace-trap.webp "Weak aces look strong but stay dominated — fold them preflop" img
- L213 /downloads/poker-starting-hands-chart.pdf ❓
- L220 /en/blog/holdem-limping ✅
- L243 /en/quiz ❓
- L264 /en/blog/holdem-probability ✅

### 키워드 (출처 fr-core-volumes + L-D §1-B · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| quelles mains jouer au poker = quelle main jouer au poker (한 수요 추정) | 50 | seoTitle·H2 |
| mains de départ poker | 30 | seoTitle·H1 (🔴 글 소유 · 계획 §3-B ⑨) |
| avec quel main jouer · classement main de depart · mains à jouer | 각 10 | H2·FAQ 문구 |
| quelle main ne pas jouer au poker · meilleures mains de départ · pire main de depart | `-`(AIO 있음) | H2 «Quelle main ne pas jouer…» · FAQ |
| 🔴 tableau des mains à jouer au poker · tableau main de départ poker | 110 · 30 | **도구 몫** — 글 seoTitle·H1·tags 금지, 본문 앵커 «tableau des mains de départ par position» |
| 함정 | — | «meilleure main / main la plus forte»(완성 족보 = L-B) → 항상 «de départ» · «probabilité main de départ» = L-C 앵커 · «mains de départ omaha» 무관 |

### PAA·자동완성 (축어)
- PAA: Quelle main ne pas jouer au poker ? (3회 · AI overview) · Quelle est la meilleure main au poker ? · C'est quoi la range au poker ?
- 자동완성: avec quel main jouer au poker · quelles sont les mains a jouer au poker · quelle(s) main(s) ne pas jouer au poker · quelles mains jouer preflop · quelle main jouer en cash game · meilleures mains de depart poker · classement main de depart poker · pire main de depart poker

### 현지 SERP (L-D §3-9·4-3)
- 글형 가이드 우세: clubpoker «LES MAINS DE DÉPART» · cours-et-fiches «Les mains de départ au Texas Hold'em»(≈3 580·표 13·FAQ 7·UTG «~15 %» 기준 미표기) · winamax · coupdepoker · unibet(ranges) · poker-toolkit · partypoker «Tableau des mains de départ».
- 우리가 더 줄 것: ① % 기준 명시(타입 169 vs 콤보 1 326) ② 퀴즈 ③ 도구 앵커 + 공개 합의 레인지라는 정직한 표기(GTO라 부르지 않음).
- H2 처방(L-D §7-7): «Les 10 meilleures mains de départ au poker» · «Quelles mains jouer au poker ?» · Worst → «Quelle main ne pas jouer au poker ? Les pires mains de départ» · By Position → «Quelles mains jouer selon la position (UTG → bouton)» + 도구 앵커 · GTO Charts → 🔴 «Charts de solveurs ou ranges simples pour débuter ?»(우리 차트 = 공개 합의 레인지, GTO 아님) · PDF 유지.
- FAQ 처방: Quelle main ne pas jouer au poker ? · Quelle est la meilleure main de départ au poker ? · Combien y a-t-il de mains de départ au poker ?(169 · 1 326) · AKs ou JJ : laquelle est la plus forte ?(🔴 EN에 없는 질문 — 에퀴티를 무늬 조합 가중으로 직접 계산해야 하므로 **B에서 신설하지 않는다**: EN FAQ 8문항 유지가 기본) · Faut-il jouer les petites paires ?

### 소유표 (계획 §3-B ⑨)
- 주인: «mains de départ poker» · «quelles mains jouer (au poker)» · «quelle main ne pas jouer» · «meilleures mains de départ».
- 쓰면 안 되는 헤드(seoTitle·H1·tags): 🔴 «tableau» · «range» · «chart» · «GTO» · «solver poker». H2 안의 «chart»는 EN H2 축어 자리도 프랑스어로 바꾼다(«Charts de solveurs…»는 L-D 처방이나 «chart»가 H2에 남는 것 → Fable 판단으로 대체어 권장).
- 도구 앵커 문구: «tableau des mains de départ par position» · «tableau range poker»(→ `/fr/hand-chart`).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 76 · seoTitle 57(≤60) · desc 156(≤160) · tldr 497

**title (H1, 76)** : Mains de départ au poker : quelles mains jouer (et éviter) selon ta position

**seoTitle (57)** : Te coucher 80 % du temps ? — Quelles mains jouer au poker

**desc (156)** : La plupart de tes cartes perdent de l'argent. Les meilleures mains de départ au poker, quelles mains jouer selon ta position et en 6-max, lesquelles éviter.

**tldr** : Sur les 169 types de mains de départ, seule une petite tranche du haut, environ 15 à 20 % des mains que tu reçois, est rentable pour un débutant. Les grosses paires (AA à TT) et AK relancent depuis n'importe quel siège ; plus tu parles tard, plus tu ouvres large, d'environ 13 % under the gun à environ 43 % au bouton (encore plus large en 6-max). Commence par une sélection de mains simplifiée et passe aux ranges préflop de solveur une fois que « relancer ou se coucher » est devenu automatique.

**tags** : ["mains de départ poker", "quelles mains jouer au poker", "quelle main jouer au poker", "meilleures mains de départ poker", "quelle main ne pas jouer au poker", "classement main de départ poker", "mains à jouer au poker", "pire main de départ poker", "quelles mains jouer preflop"]

#### H2 (EN → FR)
- L35 `### Starting hands, by the numbers` → `### Les mains de départ en chiffres`
- L46 `## The 10 Best Starting Hands in Poker, Ranked` → `## Les 10 meilleures mains de départ au poker, classées`
- L71 `## What Counts as a Good Starting Hand in Poker?` → `## Qu'est-ce qu'une bonne main de départ au poker ?`
- L88 `## Poker Starting Hands Chart by Position (Full 9-Max Chart)` → `## Quelles mains jouer selon la position (UTG → bouton) ? La version 9-max` (+ ancre « tableau des mains de départ par position »)
- L113 `### Early position (UTG): the tightest range` → `### Position précoce (UTG) : la sélection la plus serrée`
- L129 `### Late position (cutoff and button): the widest range` → `### Position tardive (cut-off et bouton) : la sélection la plus large`
- L142 `## 6-Max Starting Hands: How the Chart Changes` → `## Quelles mains jouer en 6-max ? Ce qui change`
- L159 `## What Percentage of Starting Hands Should You Play?` → `## Quel pourcentage de mains de départ faut-il jouer ?`
- L171 `## GTO Preflop Charts vs Beginner Charts: Which to Use?` → `## Faut-il débuter avec les mains d'un solveur ou une sélection simplifiée ?` (ni « chart » ni « GTO » ; nos grilles = ranges de consensus public, pas GTO)
- L190 `## The Worst Starting Hands (That Look Playable)` → `## Quelle main ne pas jouer au poker ? Les pires mains de départ`
- L209 `## Printable Starting Hands Chart (PDF Cheat Sheet)` → `## La fiche des mains de départ à imprimer (PDF)`
- L228 `## Test Yourself: Preflop Hand Quiz` → `## Sauras-tu trouver la bonne décision ? Le quiz préflop`
- L252 `## FAQ` → `## FAQ`
- L288 `## Related Posts` → `## Articles liés`
- Question-form : 7/9 H2 de contenu (78 %). Aucun H2 ajouté. Le mot « chart » n'apparaît dans aucun H2.

#### FAQ (EN → FR)
1. What is the best starting hand in poker? → `Quelle est la meilleure main de départ au poker ?`
2. What are good starting hands in poker? → `Quelles sont les mains à jouer au poker ?` (autocomplete)
3. How many starting hands are there in poker? → `Combien y a-t-il de mains de départ au poker ?`
4. What is the 7-2 rule in poker? → `C'est quoi la règle du 7-2 au poker ?`
5. What is the worst starting hand in poker? → `Quelle est la pire main de départ au poker ?`
6. Should beginners use GTO preflop charts? → `Un débutant doit-il utiliser les ranges préflop de solveur ?`
7. Does being suited really matter? → `Être assorti (suited), ça change vraiment quelque chose ?`
8. Should I always fold small pocket pairs like 22 or 33? → `Faut-il toujours se coucher avec une petite paire comme 22 ou 33 ?`
- Aucun ajout : « AKs ou JJ » n'est pas créé (équité à pondérer, hors périmètre B).

#### Mots-clés absorbés
- quelles mains jouer au poker / quelle main jouer au poker (50) → seoTitle · H1 · H2 L88 · H2 L142 · tags
- mains de départ poker (30) → H1 · desc · H2 L46 · tags
- meilleures mains de départ (autocomplete) → desc · H2 L46 · FAQ 1 · tags
- quelle main ne pas jouer au poker (PAA ×3, AI overview) → H2 L190 · tags
- pire main de depart poker (autocomplete) → H2 L190 · FAQ 5 · tags
- classement main de depart poker (10) → H2 L46 « classées » · tags
- mains à jouer / avec quel main jouer (10) → FAQ 2 · tags
- quelles mains jouer preflop (autocomplete) → tags · H2 L228
- tableau des mains à jouer au poker (110) / tableau main de départ poker (30) → ancre corps « tableau des mains de départ par position » → /fr/hand-chart uniquement (pas dans seoTitle/H1/tags)

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L25 · L27 · L29 · L31 · L38 · L39 · L40 · L41 · L46 · L52 · L61 · L65 · L80 · L81 · L98 · L99 · L100 · L101 · L105 · L107 · L117 · L126 · L133 · L144 · L149 · L161 · L163 · L165 · L175 · L179 · L199 · L201 · L203 · L205 · L215 · L232 · L235 · L236 · L238 · L243 · L256 · L260 · L264 · L280 · L284 · L291 · L292 · L293 · L294 · L296 · L297 · L298 · L301 · L302 · L303

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L25: My first live session, I picked up A♣ 4♦ and thought "an ace, how bad can it be?"…
- L27: I called a raise, missed the flop, called again, missed the turn. By the river I'd lost 40 big blinds with not…
- L173: I keep solver outputs open when I study, and I still hand every beginner a simplified chart first. These are t…
- L282: **Q. Should I always fold small pocket pairs like 22 or 33?**…

### 하지 말 것
- 🔴 우리 차트를 «GTO»라 부르지 마라 — 공개 합의 레인지(도구 dict.ts «No locale may … call it «GTO»»).
- PDF 링크 `/downloads/poker-starting-hands-chart.pdf`는 영어 PDF다 → 앵커 문구에 «(PDF, en anglais)» 표기(ms·de 선례). 경로 불변.
- `/en/quiz`는 fr 퀴즈 라우트가 없다(app/fr에 quiz 없음 · 실측 10-07) → 링크 `/en/quiz` 유지 + «(en anglais)» 표기(ms 선례). 편차 아님(같은 대상).
- «meilleure main / main la plus forte»(완성 족보 = L-B) 단독 표현 금지 → 항상 «main de départ».
- L-D가 제안한 FAQ «AKs ou JJ»는 EN에 없다 → B에서 신설하지 않는다(에퀴티는 무늬 조합 가중 직접 계산이 필요 — §13 위험).
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-limping — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Limping in Poker: Why 'Just Calling' Preflop Usually Costs You",
seoTitle: "Why 'Just Calling' Preflop Quietly Costs You — Poker Limping",
desc: "Limping means just calling the big blind preflop. Why it's usually a mistake, the spots where it's actually fine, and how good players punish limpers.",
tldr: "Limping is entering a pot preflop by just calling the big blind instead of raising or folding. Open-limping (being first in) is almost always a mistake — a limp can't win the blinds uncontested, you give up initiative, and good players punish you. But limping isn't always wrong: completing the small blind, over-limping speculative hands behind other limpers, and some live and short-stacked tournament spots are legitimate exceptions.",
category: "strategy",
date: "2026-07-05",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "11 min",
emoji: "🚶",
image: "/images/holdem-limping-hero.webp",
imageAlt: "A poker player quietly sliding chips forward to just call the big blind preflop while other players wait, illustrating a passive limp",
tags: ["limping", "what is a limp in poker", "limping in poker", "open limping", "over-limping", "limp reraise", "why is limping bad", "when is limping ok"],
# seoTitle 길이 60
# desc 길이 150
# tldr 길이 436
```

### 구조 (EN content L18~L213 · L## = EN 파일 줄)
#### 헤딩
- L25 ### Limping, at a glance
- L36 ## What Does "Limping" Mean in Poker?
- L44 ## Open-Limp vs Over-Limp: Not the Same Thing
- L62 ## Why Limping Is Usually a Mistake (4 Reasons)
- L73 ## Why Raising First-In Beats Limping
- L83 ## So When Is Limping Actually OK?
- L104 ## What Is a Limp-Reraise?
- L112 ## Is Limping a "Fish" Tell? How Good Players Punish It
- L126 ## Limping in Live Low-Stakes vs Online / GTO
- L139 ## FAQ
- L179 ## The 3 Things to Remember
- L189 ## Related Posts

#### FAQ 9문항
- L141 **Q. What does it mean to limp in poker?**
- L145 **Q. Why is limping bad in poker?**
- L149 **Q. Is limping ever a good strategy?**
- L153 **Q. What is the difference between open-limping and over-limping?**
- L157 **Q. What is a limp-reraise?**
- L161 **Q. Should you ever open-limp preflop?**
- L165 **Q. Is it okay to limp in the small blind?**
- L169 **Q. What is the difference between a limper and a calling station?**
- L173 **Q. What is a player who limps a lot called?**

#### 표 2개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L27 :::stripe
- L32 :::
- L48 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L56 </div>
- L75 ![A visual guide showing three options — RAISE highlighted in gold with a check mark, LIMP marked in red with a warning, and FOLD in neutral grey](/images/holdem-limping-raise-or-fold.webp "The default that keeps you ahe
- L87 ![Several players have limped into the same hand, so multiple small stacks of chips sit pushed forward around the green felt in a cheap multiway pot](/images/holdem-limping-multiway.webp "Over-limping behind other player
- L89 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L98 </div>
- L114 ![Six-seat table diagram — the seat marked in red has limped for a single chip, four seats are folded and crossed out with the blinds' posted chips left behind, and the button answers in gold with a much larger stack, an
- L134 :::readnext[Keep reading]
- L137 :::
- L191 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L193     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L194     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L195     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why limping out of position hurts most</div>
- L198     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L199     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart</div>
- L200     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">What's worth raising in the first place</div>
- L203     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Glossary</div>
- L204     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">What Is a Fish?</div>
- L205     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The passive habits that mark a weak player</div>
- L208     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Glossary</div>
- L209     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Terms A-Z</div>
- L210     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Every bit of table vocabulary, explained</div>
- L212 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L21 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" ✅
- L40 /en/blog/holdem-glossary ✅
- L67 /en/blog/holdem-continuation-bet ✅
- L75 /images/holdem-limping-raise-or-fold.webp "The default that keeps you ahead of the field: raise or fold first-in, and treat the open-limp as the option to avoid" img
- L79 /en/blog/holdem-starting-hands-chart ✅
- L87 /images/holdem-limping-multiway.webp "Over-limping behind other players into a cheap multiway pot is where speculative hands like small pairs can actually pay off" img
- L100 /en/blog/holdem-pot-odds ✅
- L114 /images/holdem-limping-isolation-raise.webp "One chip buys you in — and the player on the button decides what the pot is going to cost you" img
- L122 /en/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp" ✅
- L185 /en/blog/holdem-starting-hands-chart ✅
- L185 /en/blog/holdem-position-play ✅

### 키워드 (출처 fr-core-volumes + L-D §1-B · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| limp poker | 260 | seoTitle·H1 |
| limper poker | 170 | seoTitle/desc·tags |
| limp poker definition | 40 | 첫 H2 |
| limp poker c est quoi · over limp poker | 10 · 10 | 첫 H2·open/over H2 |
| limp poker signification · qu est ce que limper au poker | `-` | FAQ |
| 함정 | — | «limper poker club 77»(클럽명) · «limpide» 무관 · 🔴 «fish poker» 1 300 = L-F 소유 → H2 제목 금지 |

### PAA·자동완성 (축어)
- PAA: Qu'est-ce qu'un limp au poker ? · Que signifie "limp" en français ? · (기타 shove·itm·cut off = 다른 글)
- 자동완성: limp poker definition · limp poker c est quoi · limp poker traduction · limp poker signification · poker limp call · over limp poker · limp jam poker · limper poker def · qu est ce que limper au poker
- 용어 형태(인접 글 축어): limp · limper · limpez · limpe · **limpeur** · over limp · open limp · limp jam.

### 현지 SERP (L-D §3-10·4-4)
- 17칸에 프랑스어 limp 해설 글 **0**(reddit · wam-poker 포럼 2008~09 · poker-academie 영상·포럼 · clubpoker 포럼).
- 인접 축어: pokersciences «Le limp, c'est-à-dire entrer dans un pot en payant simplement la grosse blinde sans relancer, est souvent signe de faiblesse» · cours-et-fiches «ne « limpez » pas» · unibet «Relancer permet d'isoler le limpeur».
- 우리가 더 줄 것: ① 40~75단어 정의 직답(경쟁 0) ② iso-raise 처방 ③ 라이브 경험(EN 1인칭).
- H2 처방(L-D §7-3): 정의 → «Qu'est-ce qu'un limp au poker ? (Que signifie "limp" en français)» · «Open-limp et over-limp : pas la même chose» · «Pourquoi limper est presque toujours une erreur» · «Quand le limp est-il acceptable ? (petite blinde, multiway)» · limp-reraise + «limp jam» 1줄 · fish tell → «Le limp est-il une preuve de faiblesse ?»(wam-poker 스레드 제목 축어) · 추가 «Que faire face à un ou plusieurs limpers ?»(🔴 EN에 별도 H2 없음 — EN «How Good Players Punish It»의 iso-raise 내용이 그 답이므로 그 H2 개명으로 흡수하는 쪽을 권장. 새 수치·표를 만들지 않는다).
- FAQ 처방: Qu'est-ce qu'un limp au poker ? · Que signifie "limp" en français ? · Le limp est-il une preuve de faiblesse ? · Faut-il limper en petite blinde ? · Que faire quand plusieurs joueurs limpent ?

### 소유표 (계획 §3-B)
- 주인: limp poker · limper poker · c'est quoi un limp · open-limp · over-limp.
- 쓰면 안 되는 헤드: «fish»(L-F holdem-fish 소유 — H2 제목 금지, 본문에서 holdem-fish 앵커) · «tableau / range»(⑨).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 72 · seoTitle 58(≤60) · desc 157(≤160) · tldr 516

**title (H1, 72)** : Le limp au poker : pourquoi « juste suivre » préflop te coûte des jetons

**seoTitle (58)** : Pourquoi « juste suivre » te coûte cher — Le limp au poker

**desc (157)** : Tu suis la blinde « juste pour voir le flop » ? Limper au poker est presque toujours une erreur : pourquoi, les cas où ça passe et comment punir les limpers.

**tldr** : Limper, c'est entrer dans un pot préflop en suivant simplement la grosse blinde au lieu de relancer ou de se coucher. L'open-limp (être le premier à entrer) est presque toujours une erreur : un limp ne peut pas gagner les blindes sans combat, tu abandonnes l'initiative et les bons joueurs te punissent. Mais limper n'est pas toujours faux : compléter en petite blinde, over-limper des mains spéculatives derrière d'autres limpers et certains spots en live ou en short stack en tournoi sont des exceptions légitimes.

**tags** : ["limp poker", "limper poker", "limp poker definition", "limp poker c est quoi", "over limp poker", "open limp poker", "limp poker signification", "qu est ce que limper au poker"]

#### H2 (EN → FR)
- L25 `### Limping, at a glance` → `### Le limp en bref`
- L36 `## What Does "Limping" Mean in Poker?` → `## Qu'est-ce qu'un limp au poker ? (Que signifie « limp » en français)`
- L44 `## Open-Limp vs Over-Limp: Not the Same Thing` → `## Open-limp et over-limp : pas la même chose`
- L62 `## Why Limping Is Usually a Mistake (4 Reasons)` → `## Pourquoi limper est-il presque toujours une erreur ? (4 raisons)`
- L73 `## Why Raising First-In Beats Limping` → `## Pourquoi relancer en premier bat le limp`
- L83 `## So When Is Limping Actually OK?` → `## Quand le limp est-il acceptable ? (petite blinde, multiway)`
- L104 `## What Is a Limp-Reraise?` → `## C'est quoi un limp-reraise ?` (mention « limp jam » 1 ligne dans la section seulement si le corps EN la contient)
- L112 `## Is Limping a "Fish" Tell? How Good Players Punish It` → `## Le limp est-il une preuve de faiblesse ? Que faire face à un ou plusieurs limpers` (absorbe l'iso-raise ; « fish » absent, ancre holdem-fish dans le corps)
- L126 `## Limping in Live Low-Stakes vs Online / GTO` → `## Limper en live à petites limites ou en ligne (GTO) : quelle différence ?`
- L139 `## FAQ` → `## FAQ`
- L179 `## The 3 Things to Remember` → `## À retenir : les 3 choses à garder`
- L189 `## Related Posts` → `## Articles liés`
- Question-form : 6/8 (75 %). Aucun H2 ajouté (« Que faire face aux limpers » est fusionné dans L112 comme recommandé).

#### FAQ (EN → FR)
1. What does it mean to limp in poker? → `Qu'est-ce que limper au poker ?` (autocomplete)
2. Why is limping bad in poker? → `Pourquoi le limp est-il mauvais au poker ?`
3. Is limping ever a good strategy? → `Limper peut-il être une bonne stratégie ?`
4. What is the difference between open-limping and over-limping? → `Quelle est la différence entre open-limp et over-limp ?`
5. What is a limp-reraise? → `Que signifie limp-reraise ?`
6. Should you ever open-limp preflop? → `Faut-il parfois open-limper préflop ?`
7. Is it okay to limp in the small blind? → `Faut-il limper en petite blinde ?`
8. What is the difference between a limper and a calling station? → `Quelle différence entre un limpeur et une calling station ?`
9. What is a player who limps a lot called? → `Comment appelle-t-on un joueur qui limpe beaucoup ?`
- ✅ **채택(A 확정)** (ajout optionnel — réponse = EN L36 section) `Que signifie « limp » en français ?` (PAA verbatim)
- ✅ **채택(A 확정)** (ajout optionnel — réponse = EN L112 section, iso-raise) `Que faire quand plusieurs joueurs limpent ?`

#### Mots-clés absorbés
- limp poker (260) → seoTitle · H1 · tags
- limper poker (170) → desc (« Limper au poker ») · tags
- limp poker definition (40) → H2 L36 · tags
- limp poker c est quoi (10) → H2 L36 · tags
- over limp poker (10) → H2 L44 · FAQ 4 · tags
- open limp (autocomplete) → H2 L44 · FAQ 6 · tags
- limp poker signification / qu est ce que limper au poker → FAQ 1 · tags
- PAA « Qu'est-ce qu'un limp au poker ? » → H2 L36 ; « Que signifie "limp" en français ? » → H2 L36 (parenthèse) + FAQ optionnel
- limpeur (forme locale) → FAQ 8 · corps
- fish poker (1 300, L-F) → aucun H2 ; ancre holdem-fish dans le corps de L112

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L29 · L48 · L89 · L96 · L100 · L128 · L192 · L193 · L194 · L197 · L198 · L199 · L202 · L203 · L204 · L207 · L208 · L209

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L19: When I started playing, I limped into almost every pot. It felt safe — I got to see a flop cheaply, I wasn't r…

### 하지 말 것
- H2 제목에 «fish» 금지(holdem-fish 소유) — 본문 링크 `/fr/blog/holdem-fish`는 EN대로 유지.
- iso-raise 산수·표를 새로 만들지 않는다 — «Que faire face aux limpers» 의도는 EN «How Good Players Punish It» 절 내용으로만 받는다.
- 11,8 % · «1 sur 8,5» 등 수치는 EN 축어(구분자만 fr).
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-3bet — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "3-Betting in Poker: When to 3-Bet, How Much, and How to Face One",
seoTitle: "The 3-Bet Guide That Shows the Math — When, How Much, vs What",
desc: "What a 3-bet is and why it's called that, when to 3-bet for value or as a light bluff, the exact sizing math, and how to respond when someone 3-bets you.",
tldr: "A 3-bet is the first re-raise before the flop — called a 3-bet because the big blind is the first bet, the open-raise the second, and your re-raise the third. Value-3-bet a tight core (QQ+, AK) plus a few suited blocker bluffs like A5s, size it around 3x the open in position and 4x out of position, and keep your overall 3-bet frequency near 6–10%. When you're the one facing a 3-bet, 4-bet your premiums, call the hands that play well, and fold the rest — folding more than 'balanced' against low-stakes players who never bluff.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "16 min",
emoji: "♦️",
image: "/images/holdem-3bet-hero.webp",
imageAlt: "A poker player sliding a stack of chips forward for a re-raise while the original raiser looks on, a preflop 3-bet confrontation on the green felt",
tags: ["3 bet poker", "what is a 3-bet", "3-bet sizing", "3-bet range", "light 3-bet", "3-bet bluff", "when to 3-bet", "squeeze play", "facing a 3-bet", "linear vs polarized range"],
# seoTitle 길이 61
# desc 길이 153
# tldr 길이 530
```

### 구조 (EN content L18~L331 · L## = EN 파일 줄)
#### 헤딩
- L25 ### The 3-bet, by the numbers
- L36 ## What Is a 3-Bet in Poker?
- L50 ## Why 3-Bet At All? What a 3-Bet Actually Does
- L63 ## When Should You 3-Bet? Value Hands vs. Light Bluffs
- L89 ## Linear vs. Polarized 3-Bet Ranges
- L109 ## How Much Should You 3-Bet? (Sizing, With the Math)
- L134 ## 3-Bet, Flat, or Fold? A Decision Table
- L154 ## The Squeeze Play: 3-Betting a Raiser *and* a Caller
- L168 ## Facing a 3-Bet: Do You Call, 4-Bet, or Fold?
- L194 ## A Real 3-Bet Hand, Start to Finish
- L206 ## The 6 Most Common 3-Betting Mistakes
- L230 ## FAQ
- L294 ## The 3-Bet Playbook, In Short
- L307 ## Related Posts

#### FAQ 15문항
- L232 **Q. What is a 3-bet in poker?**
- L236 **Q. Why is it called a 3-bet?**
- L240 **Q. What is the difference between a 3-bet and a 4-bet?**
- L244 **Q. What hands should you 4-bet with, and how much?**
- L248 **Q. When should you 5-bet in poker?**
- L252 **Q. What hands should you 3-bet?**
- L256 **Q. When should you 3-bet vs. just call (flat)?**
- L260 **Q. What is a light 3-bet?**
- L264 **Q. What is the difference between a linear and a polarized 3-bet range?**
- L268 **Q. How much should you 3-bet?**
- L272 **Q. What is a good 3-bet percentage?**
- L276 **Q. What is a squeeze play?**
- L280 **Q. How do you respond to a 3-bet?**
- L284 **Q. What is a good fold-to-3-bet percentage?**
- L288 **Q. Should you 3-bet or 4-bet all-in with a short stack in a tournament?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L27 :::stripe
- L32 :::
- L65 ![A dark, on-brand grid infographic splitting 3-bet hands into two columns — VALUE 3-BETS like pocket aces, kings, queens and ace-king, and LIGHT 3-BETS like suited wheel aces and suited connectors](/images/holdem-3bet-r
- L75 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L83 </div>
- L93 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L101 </div>
- L113 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L121 </div>
- L138 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L148 </div>
- L156 ![Three players' chip stacks pushed toward the middle of the green felt as one player slides a larger re-raise forward, squeezing an open-raiser and a caller](/images/holdem-3bet-squeeze.webp "A squeeze punishes an open-
- L170 ![A poker player staring down a preflop re-raise with a hand resting on their chips, weighing whether to call, 4-bet, or fold to a 3-bet](/images/holdem-3bet-facing.webp "The half of 3-betting nobody teaches: when someon
- L180 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L188 </div>
- L208 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L219 </div>
- L225 :::readnext[Keep reading]
- L228 :::
- L309 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L311     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L312     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The 5 Decisions Framework</div>
- L313     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Where 3-betting fits in a winning game</div>
- L316     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L317     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Why Limping Costs You</div>
- L318     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Raise or fold — don't just call</div>
- L321     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L322     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L323     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why 3-bets work better in position</div>
- L326     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L327     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart</div>
- L328     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Which hands are worth raising at all</div>
- L330 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L21 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" ✅
- L21 /en/blog/holdem-limping ✅
- L46 /en/blog/holdem-betting-actions ✅
- L65 /images/holdem-3bet-range-grid.webp "A healthy 3-bet range has two parts: a value core you want called, and a few suited blocker bluffs you're happy to fold to a 4-bet" img
- L85 /en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp" ✅
- L150 /en/blog/holdem-position-play ✅
- L156 /images/holdem-3bet-squeeze.webp "A squeeze punishes an open-raiser and a flat-caller at once — the extra dead money raises the payoff of even a light 3-bet" img
- L170 /images/holdem-3bet-facing.webp "The half of 3-betting nobody teaches: when someone re-raises you, most of your range should simply fold — especially against players who never bluff" img
- L301 /en/blog/3bet-pot-cbet ✅
- L303 /en/blog/holdem-starting-hands-chart ✅
- L303 /en/blog/holdem-position-play ✅
- L303 /en/blog/holdem-strategy ✅

### 키워드 (출처 fr-core-volumes + L-D §1-B · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| 3bet poker = 3 bet poker (한 수요) | 170 | seoTitle·H1 |
| squeeze poker | 140 | H2 squeeze · FAQ |
| 4bet poker = 4 bet poker | 20 | H2 facing · FAQ |
| c'est quoi un 3 bet au poker · que veut dire 3 bet au poker · quand 3 bet au poker · 3 bet light · 3bet poker range | `-` | H2·FAQ 문구 |
| surrelance (정식어) | — | 첫 정의 병기(cours-et-fiches H1 선례) |
| 함정 | — | «3Bet Poker»(앱·KG) · «range 3bet 6-max»(도구 의도) → 표 제목 금지 |

### PAA·자동완성 (축어)
- PAA: C'est quoi un 3 bet poker ? · C'est quoi la range au poker ? (2회) · (관련) Squeeze au poker
- 자동완성: c'est quoi un 3 bet au poker · que veut dire 3 bet au poker · quand 3 bet au poker · 3 bet light poker · squeeze poker definition · squeeze traduction poker · 4bet poker definition · cold 4bet poker · min 3 bet poker

### 현지 SERP (L-D §3-11·4-5)
- 실질 경쟁: cours-et-fiches «Le 3-bet au poker : surrelance, ranges et stratégie»(≈2 600·표 10·FAQ 6) · poker-academie «Le 3bet pour les débutants»(1인칭·트래커 3b%) · pokerlistings «Le 3-Bet Light» · pokernews 사전 · clubpoker 사전.
- 우리가 더 줄 것: ① 사이징 검산표(EN 수식) ② `/fr/solver` 3bet pot 링크(GTO 13편) ③ 실전 핸드(§13) + 솔버 빈도 각도.
- H2 처방(L-D §7-4): «C'est quoi un 3-bet au poker ? (la surrelance)» · «Quand faire un 3-bet ? Value contre 3-bet light» · «Combien 3-bet ? Le sizing en position et hors de position» · «Le squeeze au poker : 3-bet contre une relance et un suiveur» · «Face à un 3-bet : suivre, 4-bet ou se coucher ?».
- FAQ 처방: C'est quoi un 3 bet poker ? · Pourquoi dit-on « 3-bet » ? · Quelle est une bonne fréquence de 3-bet ? · C'est quoi la range au poker ?(🔴 EN에 없는 질문 — 넣으면 1~2문장 + 도구 앵커 «tableau range poker») · Qu'est-ce qu'un squeeze ? · Quelle différence entre 3-bet et 4-bet ?

### 소유표 (계획 §3-B)
- 주인: 3bet poker · surrelance · squeeze poker · 4bet poker · 3 bet light.
- 쓰면 안 되는 헤드: «range 3bet»를 표 제목·seoTitle에 금지(표 제목은 «exemples de mains») · «GTO poker»·«solver poker»(⑫) · «spr poker»(⑥ → 3bet-pot-cbet).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 74 · seoTitle 56(≤60) · desc 150(≤160) · tldr 618

**title (H1, 74)** : Le 3-bet au poker : quand surrelancer, de combien, et comment y faire face

**seoTitle (56)** : Surrelancer, mais quand et combien ? — Le 3-bet au poker

**desc (150)** : Ils 3-bet sans arrêt, toi jamais ? Le 3-bet (surrelance) au poker : quand 3-bet en value ou en light, le sizing calculé et quoi faire face à un 3-bet.

**tldr** : Un 3-bet est la première surrelance avant le flop : on l'appelle ainsi parce que la grosse blinde est la première mise, l'open-raise la deuxième et ta surrelance la troisième. 3-bet pour la value avec un noyau serré (QQ+, AK) plus quelques bluffs assortis avec bloqueur comme A5s, size autour de 3 fois l'ouverture en position et 4 fois hors de position, et garde une fréquence globale de 3-bet proche de 6 à 10 %. Face à un 3-bet, 4-bet tes premiums, suis avec les mains qui jouent bien et couche-toi avec le reste, en te couchant plus que « l'équilibre » contre des joueurs de petites limites qui ne bluffent jamais.

**tags** : ["3bet poker", "3 bet poker", "c'est quoi un 3 bet au poker", "quand 3 bet au poker", "3 bet light poker", "squeeze poker", "4bet poker", "surrelance poker", "squeeze poker definition", "face à un 3-bet"]

#### H2 (EN → FR)
- L25 `### The 3-bet, by the numbers` → `### Le 3-bet en chiffres`
- L36 `## What Is a 3-Bet in Poker?` → `## C'est quoi un 3-bet au poker ? (la surrelance)`
- L50 `## Why 3-Bet At All? What a 3-Bet Actually Does` → `## Pourquoi 3-bet ? Ce qu'un 3-bet fait vraiment`
- L63 `## When Should You 3-Bet? Value Hands vs. Light Bluffs` → `## Quand faire un 3-bet ? Value contre 3-bet light`
- L89 `## Linear vs. Polarized 3-Bet Ranges` → `## Range linéaire ou polarisée : quelle différence pour un 3-bet ?`
- L109 `## How Much Should You 3-Bet? (Sizing, With the Math)` → `## Combien 3-bet ? Le sizing en position et hors de position (avec les calculs)`
- L134 `## 3-Bet, Flat, or Fold? A Decision Table` → `## 3-bet, suivre ou se coucher ? La grille de décision` (titre de tableau interne : « exemples de mains », jamais « range 3bet »)
- L154 `## The Squeeze Play: 3-Betting a Raiser *and* a Caller` → `## Le squeeze au poker : 3-bet contre une relance et un suiveur`
- L168 `## Facing a 3-Bet: Do You Call, 4-Bet, or Fold?` → `## Face à un 3-bet : suivre, 4-bet ou se coucher ?`
- L194 `## A Real 3-Bet Hand, Start to Finish` → `## Une vraie main de 3-bet, du début à la fin`
- L206 `## The 6 Most Common 3-Betting Mistakes` → `## Les 6 erreurs de 3-bet les plus fréquentes`
- L230 `## FAQ` → `## FAQ`
- L294 `## The 3-Bet Playbook, In Short` → `## À retenir : le plan de jeu du 3-bet`
- L307 `## Related Posts` → `## Articles liés`
- Question-form : 7/10 (70 %). Aucun H2 ajouté.

#### FAQ (EN → FR)
1. What is a 3-bet in poker? → `Que veut dire 3-bet au poker ?` (autocomplete « que veut dire 3 bet au poker »)
2. Why is it called a 3-bet? → `Pourquoi dit-on « 3-bet » ?`
3. What is the difference between a 3-bet and a 4-bet? → `Quelle différence entre un 3-bet et un 4-bet ?`
4. What hands should you 4-bet with, and how much? → `Avec quelles mains 4-bet, et de combien ?`
5. When should you 5-bet in poker? → `Quand faire un 5-bet au poker ?`
6. What hands should you 3-bet? → `Avec quelles mains faut-il 3-bet ?`
7. When should you 3-bet vs. just call (flat)? → `Quand 3-bet plutôt que simplement suivre (flat) ?`
8. What is a light 3-bet? → `C'est quoi un 3-bet light ?`
9. What is the difference between a linear and a polarized 3-bet range? → `Quelle différence entre une range linéaire et une range polarisée ?`
10. How much should you 3-bet? → `De combien faut-il 3-bet ?`
11. What is a good 3-bet percentage? → `Quelle est une bonne fréquence de 3-bet ?`
12. What is a squeeze play? → `Qu'est-ce qu'un squeeze au poker ?`
13. How do you respond to a 3-bet? → `Comment réagir face à un 3-bet ?`
14. What is a good fold-to-3-bet percentage? → `Quel est un bon pourcentage de fold face au 3-bet ?`
15. Should you 3-bet or 4-bet all-in with a short stack in a tournament? → `En tournoi avec un short stack, faut-il 3-bet ou 4-bet all-in ?`
- ❌ **기각(A 확정 · «range» 정의는 도구 헤드 · EN L89는 range 일반 정의가 아님)** (ajout optionnel — réponse = EN L89 section, seulement si elle définit le mot ; 1–2 phrases + ancre « tableau range poker » → /fr/hand-chart) `C'est quoi la range au poker ?` (PAA ×2)

#### Mots-clés absorbés
- 3bet poker / 3 bet poker (170) → seoTitle · H1 · tags
- squeeze poker (140) → H2 L154 · FAQ 12 · tags
- 4bet poker (20) → H2 L168 · FAQ 3–4 · tags
- surrelance (terme officiel) → seoTitle (hook « Surrelancer ») · H1 · H2 L36 · desc · tags
- c'est quoi un 3 bet au poker (PAA/autocomplete) → H2 L36 · tags
- que veut dire 3 bet au poker (autocomplete) → FAQ 1
- quand 3 bet au poker (autocomplete) → H2 L63 · tags
- 3 bet light poker (autocomplete) → H2 L63 · FAQ 8 · tags
- squeeze poker definition (autocomplete) → FAQ 12 · tags
- 4bet poker definition (autocomplete) → FAQ 3
- 3bet poker range → absent des titres (règle) ; FAQ 9 garde « range linéaire / polarisée » comme dans l'EN

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L30 · L43 · L75 · L79 · L85 · L93 · L111 · L113 · L115 · L117 · L118 · L119 · L123 · L125 · L130 · L138 · L162 · L178 · L180 · L184 · L185 · L186 · L196 · L198 · L199 · L202 · L208 · L250 · L270 · L274 · L286 · L290 · L301 · L310 · L311 · L312 · L315 · L316 · L317 · L320 · L321 · L322 · L325 · L326 · L327

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L19: The hand that taught me what a 3-bet is really *for* went like this: a loose player opened, I looked down at A…
- L174: - **4-bet** — for value with your premiums (QQ+, AK), plus the occasional blocker bluff (an A5s-type hand). A …
- L198: - **Preflop:** A loose cutoff opens to ==$6== (3bb). I'm on the button with ==A♠Q♠==. This is a clear **value …
- L199: - **Flop:** ==Q♦ 8♣ 4♥.== I flop **top pair, top kicker** — my A♠Q♠ makes a pair of queens with the best possi…
- L200: - **The point:** because I 3-bet preflop, the pot is already big and I have the betting lead, so I bet again f…
- L202: Now flip it: if I'd 3-bet a **light** hand like A5s there and the cutoff had **4-bet** to $48 (about 2.7x — a …

### 하지 말 것
- 표 제목·seoTitle에 «range 3bet» 금지 — 핸드 목록 표는 «exemples de mains».
- «C'est quoi la range au poker ?» FAQ를 넣으면 1~2문장 + «tableau range poker» 앵커만(확정 카피가 넣었을 때).
- ⑧ `3bet-pot-cbet` 링크는 연다(🅶 같은 배포) · «spr poker» 헤드 조준 금지(⑥).
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-continuation-bet — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Continuation Bet (C-Bet): When to Fire the Flop, How Much, and When to Check",
seoTitle: "Why 'C-Bet Every Flop' Bleeds Chips — Continuation Bet Strategy",
desc: "What a continuation bet is, which flops to c-bet and which to check, exact sizing — small on dry boards, big on wet — and how often to fire in position.",
tldr: "A continuation bet (c-bet) is a bet on the flop by the player who raised preflop. The modern rule isn't 'c-bet every flop' — it's to bet the flops that favor your range (high, dry boards like K-7-2) small and often, and check the ones that favor your opponent (low, connected boards like 7-6-5). Size small — about one-third pot — on dry boards, big — two-thirds or more — on wet ones, c-bet less out of position when you were the single raiser (as the out-of-position 3-bettor it flipped to over 97% on the three boards we solved), and much less multiway.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "15 min",
emoji: "🔥",
image: "/images/holdem-continuation-bet-hero.webp",
imageAlt: "A poker player betting chips onto a freshly dealt flop after raising preflop, the classic continuation bet moment on the green felt",
tags: ["continuation bet", "c-bet poker", "what is a c-bet", "c-bet sizing", "c-bet frequency", "when to c-bet", "when not to c-bet", "c-bet out of position", "multiway c-bet", "delayed c-bet"],
# seoTitle 길이 63
# desc 길이 152
# tldr 길이 556
```

### 구조 (EN content L20~L302 · L## = EN 파일 줄)
#### 헤딩
- L27 ### The c-bet, by the numbers
- L38 ## What Is a Continuation Bet (C-Bet)?
- L54 ## The Old "C-Bet Every Flop" Advice Is Wrong — Here's What Changed
- L69 ## Which Flops to C-Bet: It's All About Board Texture
- L95 ## How Often Should You C-Bet? (Frequency)
- L115 ## How Much Should You C-Bet? (Sizing)
- L133 ## C-Betting Out of Position
- L144 ## C-Betting in Multiway Pots
- L152 ## The Delayed C-Bet
- L164 ## When NOT to C-Bet (Checking Is a Weapon, Not a White Flag)
- L177 ## A Real C-Bet Hand, Start to Finish
- L189 ## The 7 Most Common C-Bet Mistakes
- L214 ## FAQ
- L266 ## The C-Bet Playbook, In Short
- L278 ## Related Posts

#### FAQ 12문항
- L216 **Q. What is a continuation bet in poker?**
- L220 **Q. Why is it called a continuation bet?**
- L224 **Q. Should you c-bet every flop?**
- L228 **Q. How often should you c-bet?**
- L232 **Q. How much should you c-bet?**
- L236 **Q. Should you c-bet out of position?**
- L240 **Q. Should you c-bet in a multiway pot?**
- L244 **Q. What is a delayed c-bet?**
- L248 **Q. When should you NOT c-bet?**
- L252 **Q. Is a c-bet a bluff?**
- L256 **Q. What is a value bet in poker?**
- L260 **Q. What is a good c-bet percentage on a poker HUD?**

#### 표 3개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L29 :::stripe
- L34 :::
- L71 ![A dry, disconnected J-7-2 rainbow flop on the green felt with a small stack of chips bet in front, the kind of high-card board that belongs to the preflop raiser](/images/holdem-cbet-dry-board.webp "High, dry, disconne
- L75 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L85 </div>
- L99 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L109 </div>
- L135 ![A poker player acting first out of position, fingers on the felt beside their chips with an opponent waiting in the shadows behind](/images/holdem-cbet-oop.webp "Out of position you act first with no information, so yo
- L191 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L203 </div>
- L209 :::readnext[Keep reading]
- L212 :::
- L280 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L282     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L283     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The 5 Decisions Framework</div>
- L284     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Where the c-bet fits in a winning game</div>
- L287     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L288     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Betting Explained</div>
- L289     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-betting starts in 3-bet pots too</div>
- L292     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L293     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L294     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why c-bets work better in position</div>
- L297     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
- L298     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>
- L299     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why a big c-bet charges the draws</div>
- L301 </div>

#### EN 머리 주석
- L11: // 2026-08-19: range advantage 절에 `a-high-board-cbet` 역링크 한 문단 추가(EN·KO 전용 자산이라
- L12: //   7개 번역본에는 전파하지 않는다 — 의도적 차이. `docs/locale-intentional-diffs.md`에 기록).

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L23 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" ✅
- L50 /en/blog/holdem-betting-actions ✅
- L65 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L71 /images/holdem-cbet-dry-board.webp "High, dry, disconnected flops like this J-7-2 favor the preflop raiser — the classic small, high-frequency c-bet boards" img
- L105 /en/blog/holdem-position-play ✅
- L129 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅
- L135 /images/holdem-cbet-oop.webp "Out of position you act first with no information, so you check far more and c-bet a tighter, stronger range" img
- L137 /en/blog/holdem-position-play ✅
- L140 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L274 /en/blog/holdem-3bet ✅
- L274 /en/blog/holdem-position-play ✅
- L274 /en/blog/holdem-strategy ✅

### 키워드 (출처 fr-core-volumes + L-D §1-B · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| cbet poker = c bet poker = c-bet (한 수요) | 110 | seoTitle·H1 |
| continuation bet poker | 70 | seoTitle/desc·첫 H2 |
| cbet poker definition · double barrel poker | 10 · 10 | 첫 H2 · FAQ |
| c est quoi cbet au poker · cbet signification poker · delayed cbet · cbet oop | `-` | H2·FAQ 문구 |
| 🔴 mise de continuation poker | 자동완성 **0** | 본문 첫 정의 1회 병기만(«mise de continuation») — 카피 금지 |
| 함정 | — | «cbet poker room houston»(클럽) · 기생 스팸(ibama.gov.br · animateur-esport) |

### PAA·자동완성 (축어)
- PAA: Qu'est-ce que le "cbet range" au poker ? (2회) · Que signifie "bet" au poker ? (2회) · C'est quoi un 3 bet poker ?
- 자동완성: c est quoi cbet au poker · cbet signification poker · cbet definition · cbet origine · delayed cbet poker · cbet oop poker · cbet range poker · cbet sizing · cbet frequency · continuation bet poker definition
- 지식 패널 «Continuation bet».

### 현지 SERP (L-D §3-12·4-6)
- 프랑스어 해설 글 **0**(cbet) · continuation bet = poker-bluffe(≈760 · 🔴 D유형 2: «position intermédiaire … meilleure option» · «monocolore … absolument évité») + 미러 sallesdepoker. 교육은 영상(Poker Académie 3편).
- 우리가 더 줄 것: ① 낡은 조언 반박(EN «C-Bet Every Flop» H2) ② GTO 13편 허브(a-high · k-high · monotone · 3bet-pot-cbet · blind-battle-cbet) ③ 실전 핸드 2개(§13).
- H2 처방(L-D §7-5): «C'est quoi un cbet au poker ? (continuation bet : définition)» · «Sur quels flops faire un c-bet ? La texture du board» · 빈도 H2 개명 «Fréquence et "cbet range" : à quelle fréquence c-bet ?»(PAA 축어) · «Faire un c-bet hors de position (OOP)» · Delayed 유지 · HUD FAQ 유지.
- FAQ 처방: Qu'est-ce que le "cbet range" au poker ? · Que signifie "bet" au poker ?(🔴 EN에 없는 질문 — 넣으면 1문장 + holdem-betting-actions 앵커) · Faut-il c-bet sur un flop monocolore ?(EN에 없음 — monotone-board-strategy 앵커·스팟 확인 필요라 B 신설은 신중) · Qu'est-ce qu'un double barrel ? · Le c-bet est-il un bluff ?

### 소유표 (계획 §3-B)
- 주인: cbet poker · c-bet · continuation bet poker · cbet range · delayed c-bet.
- 쓰면 안 되는 헤드: GTO 스팟명(«a-high board», «monotone», «3bet pot») H2 제목 금지 → 앵커 · «GTO poker»·«solver poker»(⑫) · «spr poker»(⑥) · «bet» 정의(→ betting-actions).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 79 · seoTitle 58(≤60) · desc 156(≤160) · tldr 637

**title (H1, 79)** : Le c-bet (continuation bet) : quand miser au flop, de combien, et quand checker

**seoTitle (58)** : C-bet à chaque flop ? Ça te coûte — Continuation bet poker

**desc (156)** : Tu c-bet chaque flop par réflexe ? Le continuation bet au poker : quels flops miser ou checker, petit sur board sec, gros sur board humide, et la fréquence.

**tldr** : Un continuation bet (c-bet) est une mise au flop faite par le joueur qui a relancé préflop. La règle moderne n'est pas « c-bet à chaque flop » : mise petit et souvent sur les flops qui favorisent ta range (boards hauts et secs comme K-7-2) et checke ceux qui favorisent ton adversaire (boards bas et connectés comme 7-6-5). Size petit, environ un tiers du pot, sur les boards secs et gros, deux tiers ou plus, sur les boards humides ; c-bet moins hors de position quand tu étais le seul relanceur (en tant que 3-betteur hors de position, ça passe à plus de 97 % sur les trois boards que nous avons résolus) et beaucoup moins en multiway.

**tags** : ["cbet poker", "c-bet poker", "continuation bet poker", "cbet poker definition", "c est quoi cbet au poker", "cbet range poker", "cbet sizing", "cbet frequency", "delayed cbet poker", "cbet oop poker"]

#### H2 (EN → FR)
- L27 `### The c-bet, by the numbers` → `### Le c-bet en chiffres`
- L38 `## What Is a Continuation Bet (C-Bet)?` → `## C'est quoi un c-bet au poker ? (continuation bet : définition)` (« mise de continuation » en parenthèse une fois dans le corps, pas ici)
- L54 `## The Old "C-Bet Every Flop" Advice Is Wrong — Here's What Changed` → `## Pourquoi « c-bet à chaque flop » est un conseil dépassé : ce qui a changé`
- L69 `## Which Flops to C-Bet: It's All About Board Texture` → `## Sur quels flops faire un c-bet ? Tout dépend de la texture du board`
- L95 `## How Often Should You C-Bet? (Frequency)` → `## À quelle fréquence c-bet ? Fréquence et « cbet range »` (PAA verbatim)
- L115 `## How Much Should You C-Bet? (Sizing)` → `## De combien c-bet ? Le sizing`
- L133 `## C-Betting Out of Position` → `## Faut-il c-bet hors de position (OOP) ?`
- L144 `## C-Betting in Multiway Pots` → `## Faut-il c-bet dans un pot multiway ?`
- L152 `## The Delayed C-Bet` → `## C'est quoi un delayed c-bet ?`
- L164 `## When NOT to C-Bet (Checking Is a Weapon, Not a White Flag)` → `## Quand ne PAS c-bet ? Checker est une arme, pas un drapeau blanc`
- L177 `## A Real C-Bet Hand, Start to Finish` → `## Une vraie main de c-bet, du début à la fin`
- L189 `## The 7 Most Common C-Bet Mistakes` → `## Les 7 erreurs de c-bet les plus fréquentes`
- L214 `## FAQ` → `## FAQ`
- L266 `## The C-Bet Playbook, In Short` → `## À retenir : le plan de jeu du c-bet`
- L278 `## Related Posts` → `## Articles liés`
- Question-form : 8/11 (73 %). Aucun H2 ajouté ; aucun nom de spot GTO (a-high, monotone, 3bet pot) en H2 — ancres seulement.

#### FAQ (EN → FR)
1. What is a continuation bet in poker? → `Qu'est-ce qu'un continuation bet au poker ?`
2. Why is it called a continuation bet? → `Pourquoi l'appelle-t-on « continuation bet » ?` (autocomplete « cbet origine »)
3. Should you c-bet every flop? → `Faut-il c-bet à chaque flop ?`
4. How often should you c-bet? → `À quelle fréquence faut-il c-bet ?`
5. How much should you c-bet? → `De combien faut-il c-bet ?`
6. Should you c-bet out of position? → `Faut-il c-bet hors de position ?`
7. Should you c-bet in a multiway pot? → `Faut-il c-bet dans un pot multiway ?`
8. What is a delayed c-bet? → `Qu'est-ce qu'un delayed c-bet ?`
9. When should you NOT c-bet? → `Quand ne faut-il PAS c-bet ?`
10. Is a c-bet a bluff? → `Le c-bet est-il un bluff ?`
11. What is a value bet in poker? → `Qu'est-ce qu'une value bet au poker ?`
12. What is a good c-bet percentage on a poker HUD? → `Quel est un bon pourcentage de c-bet sur un HUD ?`
- ❌ **기각(A 확정 · PAA 축어는 H2 L95가 이미 받는다 · 별도 FAQ는 얇은 중복)** (ajout optionnel — réponse = EN L95 section, si elle parle de c-bet par range) `Qu'est-ce que le « cbet range » au poker ?` (PAA ×2)
- Non ajoutés : « Que signifie "bet" au poker ? » (→ holdem-betting-actions) · « double barrel » · « flop monocolore » (pas de réponse EN dans ce post).

#### Mots-clés absorbés
- cbet poker / c bet poker / c-bet (110) → seoTitle · H1 · tags
- continuation bet poker (70) → seoTitle · desc · H1 · H2 L38 · FAQ 1 · tags
- cbet poker definition (10) → H2 L38 · tags
- c est quoi cbet au poker (autocomplete) → H2 L38 · tags
- cbet range poker (PAA ×2) → H2 L95 · tags · FAQ optionnel
- cbet sizing / cbet frequency (autocomplete) → H2 L115 · H2 L95 · tags
- cbet oop poker (autocomplete) → H2 L133 · FAQ 6 · tags
- delayed cbet poker (autocomplete) → H2 L152 · FAQ 8 · tags
- cbet origine (autocomplete) → FAQ 2
- mise de continuation (0) → 1 parenthèse dans le corps uniquement

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L32 · L42 · L65 · L75 · L82 · L83 · L99 · L103 · L104 · L105 · L106 · L111 · L122 · L124 · L125 · L129 · L181 · L183 · L191 · L230 · L262 · L271 · L281 · L282 · L283 · L286 · L287 · L288 · L291 · L292 · L293 · L296 · L297 · L298

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L21: For my first couple of years, "c-bet" was the only flop plan I had. I raised preflop, so I bet the flop. Every…
- L73: This is the heart of c-betting. Before you think about sizing or frequency, ask one question: **did this flop …
- L181: **Spot 1 — a textbook c-bet.** I raise ==A♣K♦== and the big blind calls. Flop: ==K♠ 7♦ 2♣.== That's a high, dr…
- L183: **Spot 2 — a textbook check.** Same session, I raise ==A♥Q♥== and the big blind calls. Flop: ==7♠ 6♠ 5♦.== Thi…

### 하지 말 것
- EN 머리 주석 L11-12(«7개 번역본에는 전파하지 않는다»)는 GTO 미발행 로케일 사유다 → **fr은 🅶 13편이 같은 배포라 ①(A-high 98,2 %)·⑨(Q♥10♥7♠ 3-bet pot 98,4 %) 두 문단을 fr로 재저작해 연다**(de·es·pt·id 해제 선례 · `docs/locale-intentional-diffs.md`). 카드 표기 `Q♥T♥7♠` → fr은 `Q♥10♥7♠`(EN 표기 확인 후 §0-2 카드 규칙).
- «mise de continuation»은 첫 정의 1회 병기만(자동완성 0) — 카피·H2 금지.
- poker-bluffe의 낡은 조언(«position intermédiaire», «monocolore … absolument évité»)을 인용·반박 대상으로 이름 붙여 쓰지 않는다 — EN «Old advice» 절 논지로만.
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---

## holdem-when-to-fold — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "When to Fold in Poker: The Skill That Quietly Wins the Most",
seoTitle: "Why You Can't Lay Down a Good Hand — When to Fold in Poker",
desc: "Folding is the most underrated winning skill. When to fold preflop and on every street, the pot-odds threshold, and how to lay down a big hand without tilting.",
tldr: "Folding is the most underrated skill in poker — a fold's worst outcome is zero, while a losing call bleeds chips over time. A solid player folds around 75–85% of hands before the flop, releases missed hands and weak draws that don't meet their pot odds after it, and — hardest of all — lays down strong-but-beaten hands when a passive opponent's line screams value. Most players don't call too much because they can't read hands; they call because the chips already in the pot feel like theirs. They aren't.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "16 min",
emoji: "🛡️",
image: "/images/holdem-when-to-fold-hero.webp",
imageAlt: "A poker player sliding their cards face-down into the muck under the table lights, choosing to fold rather than pay off a bet",
tags: ["when to fold in poker", "when to fold preflop", "when to fold a good hand", "folding discipline", "sunk cost poker", "laying down a big hand", "fold to a river raise", "pot odds fold"],
# seoTitle 길이 58
# desc 길이 159
# tldr 길이 507
```

### 구조 (EN content L18~L283 · L## = EN 파일 줄)
#### 헤딩
- L25 ### Why folding wins
- L36 ## What Folding Really Is (and Why It's the Most Underrated Skill)
- L46 ## When to Fold Before the Flop
- L61 ## When to Fold After the Flop — Street by Street
- L75 ## The Math of Folding: The Pot-Odds Threshold
- L99 ## The Hardest Fold: Letting Go of a Good Hand
- L123 ## The Psychology of Folding: Sunk Cost, Ego, and Fear
- L139 ## "Should I Fold?" — A 30-Second Self-Check
- L157 ## A Real Laydown, Hand by Hand
- L170 ## The 7 Most Common Folding Mistakes
- L195 ## FAQ
- L247 ## The Folding Playbook, In Short
- L259 ## Related Posts

#### FAQ 12문항
- L197 **Q. When should you fold in poker?**
- L201 **Q. Do you lose money when you fold in poker?**
- L205 **Q. How often should you fold preflop?**
- L209 **Q. When should you fold a good hand?**
- L213 **Q. Should you ever fold pocket aces?**
- L217 **Q. When should you fold top pair?**
- L221 **Q. What is the sunk cost fallacy in poker?**
- L225 **Q. Should I fold or call when I'm unsure?**
- L229 **Q. How do you know when to fold to a river raise?**
- L233 **Q. Is folding a sign of weakness?**
- L237 **Q. Can you fold too much in poker?**
- L241 **Q. When should you fold an overpair?**

#### 표 3개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L27 :::stripe
- L32 :::
- L65 ![A full five-card board on the green felt beside a large pile of chips as a player holds two face-down cards, weighing whether to fold on a later street](/images/holdem-fold-board.webp "Each street changes the question:
- L79 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L88 </div>
- L105 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L115 </div>
- L127 ![A poker player deep in thought with a hand to his chin, agonizing over whether to call or fold, chips and face-down cards in the foreground](/images/holdem-fold-psychology.webp "The hardest folds are lost to emotion, n
- L143 :::steps
- L149 :::
- L172 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L184 </div>
- L190 :::readnext[Keep reading]
- L193 :::
- L261 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L263     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L264     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The 5 Decisions Framework</div>
- L265     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Where folding fits in a winning game</div>
- L268     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
- L269     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>
- L270     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The threshold behind every fold</div>
- L273     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L274     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Betting Explained</div>
- L275     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">When to fold to a re-raise</div>
- L278     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L279     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The Continuation Bet</div>
- L280     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">When to fold to a c-bet</div>
- L282 </div>

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L21 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" ✅
- L52 /en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp" ✅
- L55 /en/blog/holdem-3bet ✅
- L65 /images/holdem-fold-board.webp "Each street changes the question: on the flop you ask if you connected, by the river you ask only whether you can beat a value bet" img
- L90 /en/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp" ✅
- L127 /images/holdem-fold-psychology.webp "The hardest folds are lost to emotion, not math — the pull to 'see it', to be right, and to not let go of chips that already feel like yours" img
- L255 /en/blog/holdem-pot-odds ✅
- L255 /en/blog/holdem-3bet ✅
- L255 /en/blog/holdem-strategy ✅

### 키워드 (출처 fr-core-volumes + L-D §1-B·§8-B · 2026-10-07)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| quand se coucher au poker | 10 | seoTitle·H1 |
| quand faut il se coucher au poker · quand peut on se coucher | 자동완성 축어 | H2·FAQ |
| savoir folder · folder | 10(folder poker) | seoTitle 보조·본문 |
| 🔴 fold poker | 140 | 정의 의도 = holdem-betting-actions 소유 → seoTitle **선두 금지**(뒤쪽 보조어로 «fold» 허용) |
| 🔴 se coucher au poker · fold poker traduction · que signifie se coucher | 20 · 20 · — | 정의·번역 → betting-actions 앵커 |
| 🔴 peut on se coucher au premier tour / sans miser | 자동완성 | 규칙 → betting-actions(FAQ 1줄+앵커 · 넣는다면) |

### PAA·자동완성 (축어)
- PAA: Que signifie "se coucher" au poker ?(→ betting-actions) · Quel est le coup le plus fort au poker ?(L-B)
- 자동완성: quand faut il se coucher au poker · quand peut on se coucher au poker · peut on se coucher au premier tour poker · peut on se coucher sans miser au poker · que veut dire se coucher au poker
- 관련 검색(영어로만): When to fold in poker pre flop · Poker when to fold chart · Poker folding strategy

### 현지 SERP (L-D §3-13·4-7)
- «quand se coucher» 전용 글 **0** — pokernews «WPT Global : Comment Faire un Bon Fold»(≈910·프리플롭만·제휴) · pokerpro «Quand suivre au poker ?» · cours-et-fiches «Le Bluff au Poker»(MDF 수식 유일).
- 우리가 더 줄 것: ① 팟 오즈 임계 산수(`/fr/calculator` 앵커 «calculateur poker») ② 실전 레이다운 7장 검산 ③ 30초 체크리스트.
- H2 처방(L-D §7-8): «Quand se coucher avant le flop ?» · «Quand faut-il se coucher au poker après le flop ?»(자동완성 축어) · «Se coucher ou suivre ? Le seuil des cotes du pot» · «Se coucher avec une bonne main (top paire, overpaire, même AA)» · 심리 유지.
- FAQ 처방: Quand faut-il se coucher au poker ? · Perd-on de l'argent en se couchant ? · Peut-on se coucher avec des as ? · Se coucher ou suivre quand on hésite ? · 🔴 «Peut-on se coucher sans miser / au premier tour ?» = 규칙 → betting-actions(1줄+앵커).

### 소유표 (계획 §3-B ③)
- 주인: «quand (faut-il) se coucher au poker» · «savoir folder» · 전략 롱테일.
- 쓰면 안 되는 헤드: «fold poker» seoTitle 선두 · «se coucher» 정의 H2(«Que signifie se coucher» = betting-actions — 현 fr betting-actions H2 «C'est quoi se coucher (le fold) au poker ? Peut-on se coucher à tout moment ?») · «calcul/calculateur»(⑧ → `/fr/calculator` 앵커 «calculateur poker»).
- 상호 앵커: 정의 첫 등장에 holdem-betting-actions 1개.

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 🔴 B·C 변경 금지(계획 §2-⑥).
> 🔢 Opus 재측정(JS length): title 77 · seoTitle 57(≤60) · desc 155(≤160) · tldr 623

**title (H1, 77)** : Quand se coucher au poker : la compétence qui fait gagner le plus, en silence

**seoTitle (57)** : Incapable de lâcher ta main ? — Quand se coucher au poker

**desc (155)** : Tu es battu et tu suis quand même ? Quand se coucher au poker, préflop et à chaque street, le seuil des cotes du pot et lâcher une grosse main sans tilter.

**tldr** : Se coucher est la compétence la plus sous-estimée au poker : le pire résultat d'un fold est zéro, alors qu'un call perdant saigne des jetons sur la durée. Un joueur solide se couche sur environ 75 à 85 % des mains avant le flop, lâche après le flop les mains ratées et les tirages faibles qui n'atteignent pas leurs cotes du pot et, le plus dur, abandonne des mains fortes mais battues quand la ligne d'un adversaire passif crie la value. La plupart des joueurs ne suivent pas trop parce qu'ils ne savent pas lire les mains ; ils suivent parce que les jetons déjà au milieu leur semblent appartenir, et ce n'est pas le cas.

**tags** : ["quand se coucher au poker", "quand faut il se coucher au poker", "savoir folder au poker", "folder poker", "se coucher avec une bonne main", "sunk cost poker", "fold river poker", "cotes du pot fold"]

#### H2 (EN → FR)
- L25 `### Why folding wins` → `### Pourquoi se coucher fait gagner`
- L36 `## What Folding Really Is (and Why It's the Most Underrated Skill)` → `## Pourquoi se coucher est-il la compétence la plus sous-estimée au poker ?` (pas de H2 « c'est quoi se coucher » : la définition appartient à holdem-betting-actions, ancre à la première occurrence)
- L46 `## When to Fold Before the Flop` → `## Quand se coucher avant le flop ?`
- L61 `## When to Fold After the Flop — Street by Street` → `## Quand faut-il se coucher au poker après le flop ? Street par street` (autocomplete verbatim)
- L75 `## The Math of Folding: The Pot-Odds Threshold` → `## Se coucher ou suivre ? Le seuil des cotes du pot` (+ ancre « calculateur poker » → /fr/calculator ; pas de « calcul » dans le H2)
- L99 `## The Hardest Fold: Letting Go of a Good Hand` → `## Comment se coucher avec une bonne main (top paire, overpaire, même AA) ?`
- L123 `## The Psychology of Folding: Sunk Cost, Ego, and Fear` → `## Pourquoi est-ce si dur de se coucher ? Coût irrécupérable, ego et peur`
- L139 `## "Should I Fold?" — A 30-Second Self-Check` → `## « Je me couche ? » : l'auto-check en 30 secondes`
- L157 `## A Real Laydown, Hand by Hand` → `## Un vrai laydown, main par main`
- L170 `## The 7 Most Common Folding Mistakes` → `## Les 7 erreurs de fold les plus fréquentes`
- L195 `## FAQ` → `## FAQ`
- L247 `## The Folding Playbook, In Short` → `## À retenir : le plan de jeu du fold`
- L259 `## Related Posts` → `## Articles liés`
- Question-form : 7/9 (78 %). Aucun H2 ajouté.

#### FAQ (EN → FR)
1. When should you fold in poker? → `Quand faut-il se coucher au poker ?` (autocomplete verbatim)
2. Do you lose money when you fold in poker? → `Perd-on de l'argent en se couchant au poker ?`
3. How often should you fold preflop? → `À quelle fréquence se coucher préflop ?`
4. When should you fold a good hand? → `Quand se coucher avec une bonne main ?`
5. Should you ever fold pocket aces? → `Peut-on se coucher avec une paire d'as ?`
6. When should you fold top pair? → `Quand se coucher avec top paire ?`
7. What is the sunk cost fallacy in poker? → `C'est quoi le coût irrécupérable (sunk cost) au poker ?`
8. Should I fold or call when I'm unsure? → `Se coucher ou suivre quand tu hésites ?`
9. How do you know when to fold to a river raise? → `Comment savoir quand se coucher face à une relance à la river ?`
10. Is folding a sign of weakness? → `Se coucher est-il un signe de faiblesse ?`
11. Can you fold too much in poker? → `Peut-on trop se coucher au poker ?`
12. When should you fold an overpair? → `Quand se coucher avec une overpaire ?`
- Non ajouté : « Peut-on se coucher sans miser / au premier tour ? » (règle → holdem-betting-actions ; pas de réponse EN dans ce post — une ligne + ancre seulement si le rédacteur le souhaite).

#### Mots-clés absorbés
- quand se coucher au poker (10) → seoTitle · H1 · desc · H2 L46 · tags
- quand faut il se coucher au poker (autocomplete) → H2 L61 · FAQ 1 · tags
- quand peut on se coucher au poker (autocomplete) → FAQ 11 voisinage · corps
- savoir folder / folder poker (10) → tags · corps
- fold poker (140) → jamais en tête ; « fold » en H2 L170 et « À retenir » seulement
- se coucher au poker (20) / que signifie se coucher (PAA) → ancre holdem-betting-actions à la première occurrence
- sunk cost / coût irrécupérable → H2 L123 · FAQ 7 · tags
- fold river (relation EN) → FAQ 9 · tags
- cotes du pot → H2 L75 · desc · tags (+ ancre « calculateur poker »)

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L28 · L30 · L48 · L79 · L83 · L84 · L85 · L86 · L90 · L92 · L93 · L105 · L112 · L117 · L139 · L153 · L159 · L161 · L162 · L163 · L164 · L166 · L172 · L207 · L250 · L251 · L262 · L263 · L264 · L267 · L268 · L269 · L272 · L273 · L274 · L277 · L278 · L279

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 프랑스 독자 맥락으로 재저작 · 없는 장소·금액·대회 금지)
- L19: The most expensive hand of my first year wasn't one I lost — it was one I refused to lose. I flopped top two p…
- L67: **Flop — "Did this board help me, or them?"** When you miss and face a bet on a board that fits your opponent'…
- L71: **River — pure bluff-catching.** You're no longer drawing to anything; the only question is *"can my hand beat…
- L129: **Sunk cost — "I've already put so much in."** This is the big one. The chips you bet earlier are *no longer y…
- L131: **Ego — "I have to know if he's bluffing."** Calling to satisfy curiosity, or to avoid the sting of *maybe* be…
- L144: Can I name the worse hands they'd bet this way? | If the only hands that bet like this beat me, I'm paying off…
- L145: Do I clear the pot-odds threshold? | If my equity is below the number in the table, the price says fold.…
- L147: Am I only calling to "see it"? | Curiosity and ego are not reasons; they're the sunk-cost trap talking.…
- L148: Would I bet this hand for value here myself? | If not, I'm holding a bluff-catcher — the question becomes how …
- L153: Note what that last question is *not*. A value bet has to beat their **calling** range; a call only has to bea…
- L159: Here's a fold I'm proud of, spelled out so you can check it yourself. $1/$2 cash, 100bb deep.…
- L161: - **My hand:** ==A♥K♣.== I raise, the big blind — a tight, passive player — calls.…
- L162: - **Flop:** ==K♦ 9♠ 4♥.== I've got top pair, top kicker. I bet, he calls. Standard.…
- L163: - **Turn:** ==7♣.== A blank. I bet again for value, he calls again. Still looks fine.…
- L164: - **River:** ==9♥.== The board pairs, now reading ==K♦ 9♠ 4♥ 7♣ 9♥==, and the passive player suddenly **check-…
- L166: Let's count it out. My best five cards are ==K♣ K♦ 9♠ 9♥ A♥== — two pair, kings and nines, ace kicker. It *fee…
- L223: A. It's the false belief that because you've already put chips in the pot, you have to keep calling to "protec…
- L225: **Q. Should I fold or call when I'm unsure?**…

### 하지 말 것
- «se coucher» 정의 H2 금지(holdem-betting-actions 소유) — 정의 첫 등장에 `/fr/blog/holdem-betting-actions` 앵커 1개(EN에 없으면 추가 1 — 진행 파일 «링크 편차»에 «추가» 기록).
- «Peut-on se coucher sans miser / au premier tour ?»류 규칙 질문은 넣는다면 1줄 + betting-actions 앵커(확정 카피 FAQ에 있을 때만).
- 팟 오즈 계산 절의 도구 앵커는 «calculateur poker»(`/fr/calculator`) — 제목·H2에 «calcul(ateur)» 금지(⑧).
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

---
