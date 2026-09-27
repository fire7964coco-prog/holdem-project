# ms-gloss 브리프 — 🅴 용어 클러스터 6편 (A 구간 산출 · 2026-09-26)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5 · 키워드 근거 = `docs/keyword-bank/ms-gloss.md`.
> EN 기준 = 브랜치 `harden-ms-gloss` @ `4fd7dbb3`(main과 동일) · EN 6편 `updated` 전부 **2026-09-26** → ms `masterUpdated: "2026-09-26"`.

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 파일(읽기 전용 · 본문 골격 복사용)** — 정본 §3 🟢(🅱 파일럿 해석을 헤드가 승인). 브리프에 메타·H2·FAQ·이미지·디렉티브·링크·경험담·§13 행은 **축어로** 실었다. 표·단락 산문은 `lib/posts-en/<slug>.ts`에서 골격으로 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 B에서 열지 않는다.** 사실·수치·카드는 EN 축어뿐.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-ms/holdem-hand-rankings.ts`의 필드 모양 복사. `masterUpdated: "2026-09-26"` · `date`/`updated` = 집필일 · `slug`·이미지 경로 = EN과 동일 · `keepImagesInBody: true` 유지 · 🔴 **content에 히어로 넣지 않는다**.
- **등록**: `lib/posts-ms/index.ts`의 `// [ms-gloss import 시작]`~`끝` · `// [ms-gloss 배열 시작]`~`끝` 칸에만. 변수명 예 `holdemGlossary` · `holdemBadBeat` · `holdemCooler` · `holdemFish` · `holdemRake` · `holdemStraddle`.
- **1인칭**: 기존 ms 코퍼스는 경험담을 **saya**로 쓴다(`holdem-hand-rankings` «Entah berapa malam saya memerhati…»). 독자는 `anda`.

## 1. 공통 결정 (6편 전부)

### 1-A. 고정문 (정본 §1-A · 판단하지 말고 그대로)
`> **Jawapan ringkas**`(🟡 **EN 6편엔 `> **Quick answer**` 블록이 0개다** — 직답은 각 H2 첫 문단의 **굵은 첫 문장** 형태. B는 그 형태를 그대로 옮긴다. 블록을 새로 넣는다면 라벨은 이것뿐) · 하이라이트 색 `==g:…==`는 편마다 1곳 — 같은 문장에 유지 · `:::readnext[Baca seterusnya]` · `## Soalan Lazim` · `## Artikel Berkaitan` · readTime `"N minit"`(EN `N min` 숫자 그대로) · category `"glossary"`(EN 값 그대로 — 6편 전부) · 문중 `anda` / 문두·제목 `Anda`.
EN의 `## The 3 Things to Remember`(bad-beat·cooler·fish·rake·straddle) 자리 = **`## 3 Perkara untuk Diingati`**(코퍼스 선례 2편 `holdem-hand-rankings`·`holdem-tournament-vs-cash-game` · 「Yang Perlu Diingat」 1편은 따르지 않는다) · glossary의 `## Where to Go Next` = `## Ke Mana Seterusnya?` — 레인 안 통일.
EN `### The X, at a glance`(6편 L25) = **`### Ringkasan pantas`**(코퍼스 선례 `holdem-betting-actions` — stripe 바로 위 같은 자리).

### 1-C. 용어 (정본 `ms-posting-reference.md` + 코퍼스 21편 실측 09-26 + 이번 실측)

| EN | ms | 근거 |
|---|---|---|
| bad beat · cooler · fish · shark · whale · nit · donkey(donk) · calling station · reg · grinder · maniac · LAG/TAG | **영어 그대로**(첫 등장에 말레이어 뜻풀이 1회) | 포커 속어는 고유명처럼 쓴다 · 코퍼스 «bad beat» 1(`nut flush saya kalah kepada boat ialah bad beat…`) · 키워드 뱅크 SERP 표기 |
| rake · rakeback · time charge · rake cap · no flop, no drop · dead drop | **rake · rakeback 영어 그대로** · rake cap = **had maksimum (cap)** → 이후 «cap» · time charge = **time charge (bayaran ikut masa)** 첫 등장 병기 → 이후 time charge · «no flop, no drop»·dead drop 영어 그대로 + 풀이 | 코퍼스 rake 30 · `holdem-tournament-vs-cash-game` L91 «bayaran tempat duduk berdasarkan masa»와 뜻 정합 · 🔴 현지 MT 표기 **periuk(pot) · had topi(cap) · Tanpa Flop, Tanpa Penurunan · tirai(blind) · penggaruk(rake)** 전부 금지(poker.md/ms 반면교사) |
| straddle (UTG / Mississippi / button / sleeper / re-straddle / double straddle) | **영어 그대로** · 정의 풀이 = **blind tambahan sukarela** · 동사 «buat straddle» · 🔴 mengangkang · Straddle Tombol · Straddle Ganda · buta besar(인니 직역) 금지 | 코퍼스 straddle 4(`holdem-blind-meaning` L122 «blind tambahan *sukarela*») |
| weak player (fish 풀이) | **pemain lemah** — 🔴 «ikan»을 용어로 채택하지 마라(jmarian 사전의 «pemain baru»=초보 정의는 뉘앙스가 틀림 · 현장 사용 미확인). 첫 등장 한 번만 «fish (secara harfiah "ikan")» 식 어원 풀이는 허용 | fish 키워드 뱅크 |
| cooler 풀이 | 첫 문장에 «cooler dalam poker bukan penyejuk» 식 1회 구분 허용(말레이 PAA «Apakah maksud "cooler"?»의 현재 답이 사전 «penyejuk»뿐) — 🔴 이것은 ms 추가 문장이지 새 사실이 아니다 | cooler 키워드 뱅크 |
| cardroom / casino | **bilik kad** / **kasino** | 코퍼스 bilik kad 5 · kasino 8 |
| house | **pihak rumah** 또는 «bilik kad» (문맥) | 🆕 |
| tournament fee (juice / vig) | **yuran** (yuran penganjur) · juice/vig 영어 인용 | 코퍼스 yuran 6(«yuran penganjur») |
| variance | **variance** 영어 그대로 | 코퍼스 variance 11 · varians 0 |
| tilt | **tilt** 영어 그대로 | 코퍼스 2 |
| suckout / suck out | **suckout** 영어 그대로 (뜻풀이 «kad bertuah di akhir») | 🆕 |
| favorite / underdog | **pilihan utama(favourite)** / **underdog** — 수치 문장에서는 «~80% untuk menang» 식 풀이 권장 | 🆕 · 🔴 영국식 철자(favourite) — 말레이시아 표기 |
| weak player / recreational player | **pemain lemah** / **pemain rekreasi** | 코퍼스 pemain lemah 1 |
| dealer · button | **pengedar** · **butang pengedar**(BTN) | 코퍼스 54 · 17 |
| pot · side pot · showdown · muck · kicker · set · trips · the nuts · outs · draw · stack · buy-in · bankroll · heads-up | **영어 그대로** | 코퍼스 pot 579 · side pot 52 · showdown 127 · muck 34 · kicker 74 · set 138 · trips 96 · nuts 23 · buy-in 37 · bankroll 15 |
| chips | **cip** | 코퍼스 172 |
| betting round / bet | **pusingan pertaruhan** / bet·pertaruhan | 코퍼스 18 · 172 |
| position | **posisi** (🔴 kedudukan = 순위) | ms-posting-reference §1 |
| calculate | **kira / dikira** (🔴 hitung 금지) | ms-posting-reference §3 |
| stakes ($1/$2) | stakes · «permainan $1/$2» | 코퍼스 «stakes kecil» |
| -EV / EV | **-EV** · EV (nilai jangkaan) 첫 등장 | ms-posting-reference §8-C |
| 🔴 쓰지 마라 | kartu · uang · bisa · karena · ronde · hitung · gratis · setelah · baru(→baharu) · tombol · taruhan 남발(코퍼스 11 vs pertaruhan 172) | §3 지뢰 |

### 1-D. 링크 — **편차 0**
6편의 EN 내부링크 대상은 전부 §0-A «51편» 안에 있다(기존 ms: `holdem-betting-actions`·`holdem-hand-rankings`·`holdem-blind-meaning`·`holdem-tournament-vs-cash-game`·`holdem-all-in-rules`·`holdem-game-order`·`holdem-showdown-rules`·`texas-holdem-rules-for-beginners` / gloss 레인 6편 / rank: `holdem-tiebreak-rules`·`holdem-split-pot-rules` / prob: `holdem-pot-odds`·`holdem-outs`·`holdem-probability` / strat: `holdem-positions`·`holdem-position-play`·`holdem-starting-hands-chart` / tour: `holdem-tournament`). → **EN 링크를 전부 그대로** `/ms/blog/<slug>`로 건다. 썸네일 인자(`"thumb:/images/…"`)도 그대로. 앵커 텍스트만 말레이어로.
- 외부 링크 1건: straddle L126·(L126 두 번째 언급 포함) `https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/` — URL 그대로.
- 페이지 내 앵커 `(#…)` · `<a id=…>`: **6편 모두 없음**(해부 스크립트 확인).

**readnext·관련 글 카드에 쓸 기존 ms 제목(현재 값 · `lib/posts-ms/*.ts` 축어)**

| slug | ms title | image |
|---|---|---|
| holdem-betting-actions | Aksi Pertaruhan Texas Hold'em: Cek, Call, Raise, Fold | /images/holdem-betting-actions-hero.webp |
| holdem-hand-rankings | Susunan Kad Poker dalam Texas Hold'em — Dari Tertinggi hingga Terendah, dengan Kebarangkalian | /images/holdem-hand-rankings-hero.webp |
| holdem-blind-meaning | Apa Itu Blind Dalam Poker? Small Blind vs Big Blind, Dijelaskan Dengan Mudah | /images/holdem-blind-meaning-hero.webp |
| holdem-tournament-vs-cash-game | Cash Game vs Tournament Poker: Mana Patut Pemula Main Dahulu? | /images/holdem-tournament-vs-cash-hero.webp |

(readnext 제목은 짧게 줄여도 된다 — EN readnext도 대상 title이 아니라 짧은 라벨을 쓴다. 레인 30편 대상은 아직 ms 제목이 없으니 EN 라벨을 말레이어로 옮긴다.)

### 1-E. 관련 글 카드(`## Artikel Berkaitan` 아래 HTML 그리드)
EN의 `<div style=…><a href="/en/blog/…">` 카드 구조를 그대로 두고 **href만 `/ms/blog/…`**, 카드 안 라벨·제목·설명 3줄만 말레이어로. 스타일·`onmouseover` 문자열은 한 글자도 바꾸지 마라. 카드 라벨 `Glossary` = **Istilah** · `Rules` = **Peraturan** · `Hand Rankings` = **Susunan Kad** · `Strategy` = **Strategi** · `Odds` = **Odds** · `Tournament` = **Tournament**.
본문 안 `<div style="background:rgba(255,248,210,0.10)…">` 강조 박스(표를 감싸는 것)도 **여는·닫는 줄 축어 · 빈 줄 위치 그대로**.

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩(굵은 직답 안 강조는 `「」`/`==…==`) · tldr 안 마크다운 · 「lengkap/panduan lengkap」류 마무리 · slug·이미지 변경 · 인니어 · **말레이시아 카지노·대회·금액 창작**(EN 경험담의 장소·금액은 EN에 있는 것만 — 달러 그대로, RM 환산 금지) · **법 조문·처벌·합법성 판정 추가**(rake FAQ «Is taking a rake illegal?»는 EN 답변 프레임 그대로 — 말레이시아 법을 끌어오지 마라 · 메모리 `legality-ban-scope-topic-vs-tangent`) · 도박 홍보 어조(«jackpot», «rakeback»을 가입 유도로 쓰지 마라).


### 1-B. 검색 표면 = 말레이어 훅 + **영어 술어 토큰** + «dalam Poker» (키워드 뱅크 §0)
말레이시아는 이 6개 용어를 **영어로만** 친다(말레이어 문형 apa itu·maksud·dalam poker 볼륨 전부 null). 그런데 말레이어로 치면 SERP에 **사전·위키·인니어·기계번역뿐** — 말레이시아 말레이어 포커 글 0건. → seoTitle 공식 = «말레이어 훅 — Apa Itu <영어 용어> dalam Poker»(glossary만 «Istilah Poker (Poker Terms)»). 🔴 영어 단독어는 다의어다(cooler=가전 · fish/whale/shark=동물 · rake=갈퀴 · straddle=옵션거래·체조) → 제목·첫 H2·첫 문장에 **poker 한정 필수**.
선례: 기존 ms seoTitle «Ingat menang tetapi kalah pot? — Susunan Kad Poker Tertinggi»(훅 문장체 소문자 · 대시 뒤 Title Case).

### 1-G. 카피 판정 경위
«확정 카피»는 Fable 서브 1회(입력 = EN 메타·H2·FAQ + 키워드 요약 + PAA 축어 + §1-A 고정문 + posting.mdc SEO 카피 절)의 출력을 **Opus가 글자 수를 재고 9자리 손본 것**이다: glossary title·seoTitle(«Glosari Poker Terms» 어색 → «Istilah Poker (Poker Terms)») · glossary desc·tldr·H2 #3의 «betting» → **pertaruhan**(기존 ms 제목 «Aksi Pertaruhan…» 정합) · bad-beat tldr «dek»(오독 소지) → «kad terakhir» · rake desc·H2 #3 «caj masa» → **time charge**(§1-C) · rake FAQ #8 판정형 꼬리 삭제 · rake title «Cara Rumah Untung» → «Cara Bilik Kad Dapat Bayaran». 괄호 안 글자 수는 Opus 재측정값(node 코드포인트).


---

## holdem-glossary — EN updated 2026-09-26

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | Texas Hold'em Glossary: Every Poker Term You'll Hear at the Table (65자) |
| seoTitle | From the Nuts to the Fish — The Texas Hold'em Glossary (54자) |
| desc | Every poker term you'll hear at the table, explained simply and grouped by situation: betting, positions, hands, slang, and the terms people always mix up. (155자) |
| tldr | This is a plain-English glossary of the poker terms that actually come up in a Texas Hold'em game, grouped by how you'll meet them — betting actions, positions, hands and board, player types, money, and table situations. Start with the 'most confused' terms below (check vs call, set vs trips, cooler vs bad beat), then browse by category. Terms with a deeper guide link straight to it. (386자) |
| category | glossary |
| readTime | 12 min |
| emoji | 📖 |
| image | /images/holdem-glossary-hero.webp |
| imageAlt | A Texas Hold'em table with chips, the dealer button, and community cards spread on green felt, representing the language of poker |
| date | 2026-07-05 |
| tags | ["poker terms", "poker glossary", "texas holdem terms", "poker slang", "poker terminology", "poker vocabulary", "poker words", "what does it mean in poker"] |

### 구조 (EN L## · 축어)

- L25 ### The glossary, at a glance
- L36 ## The Terms People Mix Up Most
- L59 ## Betting Actions
- L92 ## Positions
- L116 ## Hands & the Board
- L158 ## Player Types & Slang
- L184 ## Money & the Game
- L219 ## Situations, Stats & Etiquette
- L257 ## FAQ
- L293 ## Where to Go Next
- L306 ## Related Posts

FAQ 8문항 · 마크다운 표 7개 · HTML 카드 블록(<div style…>) L40 L63 L96 L122 L164 L188 L223 L308 · 디렉티브: L27 stripe · L252 readnext[Keep reading]

**FAQ 문항(EN 축어)**
- L259 Q. What are the most common poker terms every beginner should know?
- L263 Q. What does UTG (under the gun) mean in poker?
- L267 Q. What is the difference between a check and a call?
- L271 Q. What is the difference between a set and trips?
- L275 Q. What is the difference between a cooler and a bad beat?
- L279 Q. What is a 3-bet in poker, and why isn't the first raise the "1-bet"?
- L283 Q. What does "the nuts" mean in poker?
- L287 Q. What do VPIP and PFR mean in poker stats?

**본문 이미지(경로·alt·캡션 축어 — B는 경로 그대로, alt·캡션만 말레이어로)**
- L57 /images/holdem-glossary-categories.webp — alt: A six-tile map of poker vocabulary on dark green felt, each tile with a gold icon — Actions, Positions, Hands, Players, Money, and Slang — caption: The six groups this glossary is organized into — browse by the situation you're in, not just alphabetically
- L118 /images/holdem-button-dealer-board.webp — alt: Infographic of a gold dealer button and two face-down hole cards with a K♦ 7♣ 2♠ flop on green felt — caption: The board and your hole cards combine into your best five-card hand — most poker vocabulary describes exactly how
- L160 /images/holdem-glossary-player-types.webp — alt: Five poker player-type tiles — fish, whale, donk, nit and shark — each marked with the symbol that defines it — caption: Every table is a mix of types — learning the slang tells you who to target and who to avoid

**원시 HTML 줄(축어로 옮길 것)**
- L309   <a href="/en/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:
- L314   <a href="/en/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radiu
- L319   <a href="/en/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);bor
- L324   <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);borde

**readnext 카드(EN 축어)**
    :::readnext[Keep reading]
    /en/blog/holdem-cooler | Cooler vs Bad Beat, Explained | /images/holdem-cooler-hero.webp
    /en/blog/holdem-fish | What Is a Fish in Poker? | /images/holdem-fish-hero.webp
    :::

### 링크 — 편차 0
EN 내부링크 37개(본문 33 + 관련 글 카드 4) 전부 51편 안. 대상: cooler·fish·bad-beat·rake·straddle(레인) · pot-odds·outs·probability(prob) · tiebreak-rules·split-pot-rules(rank) · position-play·positions(strat) · betting-actions·all-in-rules·game-order·hand-rankings·tournament-vs-cash-game·blind-meaning·showdown-rules·texas-holdem-rules-for-beginners(기존 ms). → 전부 `/ms/blog/<slug>` 그대로. 썸네일 인자 5곳(L19 cooler · L21 fish · L61 betting-actions · L112 positions · L186 tournament-vs-cash-game) 그대로.

### 키워드 (실측 2026-09-26 · DFS=라쿠 · 상세 `docs/keyword-bank/ms-gloss.md` §holdem-glossary)
| 키워드 | 월 | 자리 |
|---|---:|---|
| poker terms (= poker jargon · poker terminology 클러스터) | 110 | seoTitle 영어 토큰 · tag |
| istilah poker · istilah dalam (permainan) poker | 10 | seoTitle·H1 말레이어 훅 · desc |
| istilah poker dalam bahasa inggris (자동완성) | — | 형식 근거: **용어 머리는 영어 그대로 + 말레이어 설명** (EN 표 구조 그대로가 정답) |
| poker terms for beginners · poker slang · poker glossary · poker vocabulary | 10 | tag |
| poker slang for weak player (자동완성) | — | Player Types 절 fish 행 문구 |
| 🔴 버림 | | poker hands 2,900(→ `holdem-hand-rankings`) · poker face 2,900(노래) · maksud nuts 50 / maksud tilt 70 / maksud bluff 30(일반어 의도) · «bom» 속어(미확인) |

### 현지 SERP
- 「istilah poker」·「istilah dalam permainan poker」(ms · mobile): 1위 langeek(인니어) · DBP 사전(poker = pakau) · ms.wikipedia · 인니 scribd PDF · Glosbe · reddit 기계번역 · ayopoker(인니 2017) — **말레이시아 말레이어 포커 용어집 0건.**
- 「poker terms」: en.wikipedia Glossary · 888poker · PokerNews · winstar — 영어 권위 독점(영어 헤드는 보조 토큰으로만).
- **PAA 축어**(poker terms): «What are some common poker terms?» · «What are the 10 types of hands in poker?» · «What are the calls in poker?» · «What are the commands in poker?»
- **우리가 더 줄 것 3가지**: ① 말레이시아 말레이어로 쓴 유일한 홀덤 용어집(kad·tangan·anda 표기 자체가 차별점) ② **정확성** — 인니 1위 용어집의 오류(tight = «agresif», rock = 공격형, chop = rake, Broadway = A-5)를 EN 정의 그대로 바로잡는다(EN 「The Terms People Mix Up Most」 절이 그 자리) ③ 상황별 6분류 + 영어 원어 머리(«istilah poker dalam bahasa inggris» 수요).

### 확정 카피 (Fable 서브 → Opus 재측정·수정)

**title (H1)**: Istilah Poker Texas Hold'em: Glosari Setiap Istilah yang Anda Dengar di Meja

**seoTitle**: Dari Nuts hingga Fish — Istilah Poker (Poker Terms) Hold'em
- EN 훅 «From the Nuts to the Fish» 그대로 살림. «poker terms»(110) 토큰 + Texas Hold'em.

**desc**: Dengar 'nuts' atau 'cooler' di meja tapi tak faham? Istilah poker Hold'em disusun ikut situasi: pertaruhan, posisi, slang dan istilah yang selalu keliru.

**tldr**:
Ini glosari ringkas istilah poker yang benar-benar muncul dalam permainan Texas Hold'em, disusun ikut cara anda menemuinya: aksi pertaruhan, posisi, tangan dan board, jenis pemain, wang serta situasi di meja. Mulakan dengan istilah yang paling sering keliru (check vs call, set vs trips, cooler vs bad beat), kemudian semak ikut kategori. Istilah yang ada panduan lebih mendalam dipautkan terus ke artikelnya.

**H2 set** (EN 11 → ms 11 · 질문형 6/8 = 75%):
1. ### Ringkasan pantas ← The glossary, at a glance
2. ## Istilah Poker Mana yang Paling Sering Keliru? ← The Terms People Mix Up Most
3. ## Apa Itu Aksi Pertaruhan dalam Poker? ← Betting Actions
4. ## Apa Maksud Posisi UTG, Button dan Blind dalam Poker? ← Positions
5. ## Apa Itu Nuts, Set dan Trips? Istilah Tangan & Board ← Hands & the Board
6. ## Siapa Fish, Shark dan Nit? Jenis Pemain & Slang Poker ← Player Types & Slang
7. ## Apa Itu Rake, Stack dan Buy-in? Istilah Wang dalam Poker ← Money & the Game
8. ## Situasi, Statistik & Etika di Meja ← Situations, Stats & Etiquette
9. ## Soalan Lazim ← FAQ
10. ## Ke Mana Seterusnya? ← Where to Go Next
11. ## Artikel Berkaitan ← Related Posts

**FAQ questions** (8):
1. Apakah istilah poker paling asas yang perlu diketahui pemula?
2. Apa maksud UTG (under the gun) dalam poker?
3. Apa beza check dengan call dalam poker?
4. Apa beza set dengan trips?
5. Apa beza cooler dengan bad beat?
6. Apa itu 3-bet dalam poker, dan kenapa raise pertama bukan '1-bet'?
7. Apa maksud 'the nuts' dalam poker?
8. Apa maksud VPIP dan PFR dalam statistik poker?

**tags** (8):
["poker terms", "poker glossary", "poker terminology", "poker slang", "texas holdem terms", "poker terms for beginners", "istilah poker", "istilah dalam permainan poker"]

**absorbed keywords**:
- poker terms (110) → seoTitle / title / desc / tag
- poker glossary / poker terminology → tag
- istilah poker (10) → title / desc / tag
- istilah dalam (permainan) poker (10) → tag
- poker terms for beginners (autocomplete) → FAQ #1 / tag
- poker slang for weak player (autocomplete) → H2 #6 (Siapa Fish, Shark dan Nit? … Slang Poker)
- istilah raise dalam poker (autocomplete) → H2 #3 (Tindakan Betting) + FAQ #6 (raise/3-bet)
- istilah full house dalam poker (autocomplete) → H2 #5 (Istilah Tangan & Board) — 본문 항목으로 흡수, H2 문구엔 넣지 않음
- PAA "What are some common poker terms?" → FAQ #1
- PAA "What are the calls in poker?" / "What are the commands in poker?" → H2 #3 (Tindakan Betting) — 본문 직답
- cannibal(poker hands / urutan kad poker) → 타깃 안 함, H2 #5는 «nuts/set/trips» 용어에 한정하고 족보 서열은 holdem-hand-rankings로 링크만
- 경쟁자 오류(tight=agresif · chop=rake · Broadway=A-5) → 본문에서 바로잡을 자리: H2 #2(Paling Sering Keliru)

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 수치·카드를 한 글자도 바꾸지 않는다)

- L50 | **VPIP vs PFR** | VPIP = how often you **play**; PFR = how often you **raise**. PFR can never exceed VPIP. |
- L102 | **Big blind (BB)** | The larger of the two blinds; stakes are named by the blind sizes ($1/$2), and one big blind is the standard unit for measuring stacks. |
- L118 ![Infographic of a gold dealer button and two face-down hole cards with a K♦ 7♣ 2♠ flop on green felt](/images/holdem-button-dealer-board.webp "The board and your hole cards combine into your best five-card hand — most poker vocabulary describes exactly how")
- L146 | **Suited connectors** | Two consecutive same-suit cards (e.g. 8♥9♥). |
- L148 | **The wheel** | The A-2-3-4-5 straight, the **lowest** straight (ace plays low). |
- L237 | **VPIP** | How often a player voluntarily puts money in preflop — the loose/tight stat. |
- L238 | **PFR** | How often a player raises preflop — the aggression stat (never higher than VPIP). |
- L273 A. Both are three of a kind and rank identically, but they're made differently. A set is a pocket pair that hits a matching card on the board (you hold 7‑7, a 7 comes). Trips is one hole card matching a pair already on the board (you hold A‑7, and 7‑7 is on the board). A set is more disguised and has better kicker control, so it usually wins more money.
- L287 **Q. What do VPIP and PFR mean in poker stats?**
- L289 A. VPIP (Voluntarily Put money In Pot) is the percentage of hands a player chooses to play preflop — a measure of how loose or tight they are. PFR (Pre-Flop Raise) is the percentage they raise preflop — a measure of aggression. PFR can never be higher than VPIP, and a big gap between the two marks a passive, calling-heavy player.

### 경험담 자리 — EN 1인칭 축어 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)

- L19 The first time I sat in a live game, the table might as well have been speaking another language. Someone was "under the gun," another guy "three-bet the cutoff," the dealer asked if I wanted to "run it twice," and when I lost with kings I was told it "wasn't even a bad beat, just a [cooler](/en/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")." I nodded like I understood. I did not.

### 하지 말 것
- **용어 머리(표 첫 열 `**Check**` 등)는 영어 그대로**, 설명 열만 말레이어. 🔴 표 107행의 **행 수·순서 그대로**(EN stripe «90+» 근거 — 107행 실측). 머리에 말레이어를 덧붙이지 마라(예 `**Fold** (lipat)` ✗ — 코퍼스는 fold 영어 통일). 머리의 괄호는 EN에 이미 있는 것(`Button (BTN)` · `UTG (under the gun)` 등)만 그대로.
- EN에 없는 용어(poker face · bom · pakau 등)를 **추가하지 마라** — 사실 출처는 EN뿐. «poker face» 수요(월 70+40+20, 의도 절반 노래)는 **EN-먼저 후보**로 진행 파일에 올렸다.
- 다른 글 몫 항목(all-in·betting·blind·showdown·cash game·hand rankings)은 EN처럼 **1~2줄 정의 + 링크**로 끝낸다 — 깊이를 늘리면 기존 ms 글과 카니발.
- Player Types 행(fish·whale·nit·donk…)은 1줄 정의 + fish 글 링크 — 깊이는 `holdem-fish` 소유.


---

## holdem-bad-beat — EN updated 2026-09-26

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | What Is a Bad Beat in Poker? When Being the Favorite Isn't Enough (65자) |
| seoTitle | You Were 80% to Win — and Lost. What Is a Bad Beat? (51자) |
| desc | A bad beat is losing as a big favorite when your opponent gets lucky. How it differs from a cooler, the bad beat jackpot, and why it's secretly good for you. (157자) |
| tldr | A bad beat is when you get your money in as a heavy favorite — usually 80% or more — and lose because your opponent hits a lucky card to 'suck out' on you. Unlike a cooler in the strict sense, you were ahead when the money went in; the deck just betrayed you at the end. It stings, but a steady stream of bad beats usually means opponents are putting money in behind — the kind of game you want to be in. (404자) |
| category | glossary |
| readTime | 11 min |
| emoji | 💔 |
| image | /images/holdem-bad-beat-hero.webp |
| imageAlt | A poker player clutching his head in anguish after losing a big pot he was a huge favorite to win, his chips stacked on the green felt |
| date | 2026-07-05 |
| tags | ["bad beat", "what is a bad beat in poker", "bad beat vs cooler", "bad beat jackpot", "poker suckout", "getting your money in good", "how to deal with bad beats"] |

### 구조 (EN L## · 축어)

- L25 ### The bad beat, at a glance
- L36 ## What Is a Bad Beat in Poker?
- L44 ## Bad Beat vs Cooler: The Difference That Matters
- L66 ## How Big a Favorite Makes It a "Real" Bad Beat?
- L80 ## Classic Bad Beat Examples (With the Odds)
- L104 ## What Is a Bad Beat Jackpot?
- L130 ## The Most Famous Bad Beat in Poker
- L140 ## Why Bad Beats Are Actually Good for You
- L150 ## How to Deal With a Bad Beat
- L167 ## FAQ
- L203 ## The 3 Things to Remember
- L213 ## Related Posts

FAQ 8문항 · 마크다운 표 3개 · HTML 카드 블록(<div style…>) L50 L86 L114 L215 · 디렉티브: L27 stripe · L162 readnext[Keep reading]

**FAQ 문항(EN 축어)**
- L169 Q. What is a bad beat in poker?
- L173 Q. What is the difference between a bad beat and a cooler?
- L177 Q. Is losing a coinflip a bad beat?
- L181 Q. What is a bad beat jackpot and what qualifies?
- L185 Q. What is the worst bad beat in poker history?
- L189 Q. Are bad beats more common online?
- L193 Q. How do you deal with bad beats in poker?
- L197 Q. Is a bad beat the same as playing badly?

**본문 이미지(경로·alt·캡션 축어 — B는 경로 그대로, alt·캡션만 말레이어로)**
- L46 /images/holdem-bad-beat-litmus.webp — alt: Infographic splitting a bad beat from a cooler — aces against sevens that improve to a set, beside kings running into aces that never had to improve — caption: The strict split: the aces were ahead going in and got outdrawn — a bad beat; the kings were behind going in and never caught up — a cooler
- L68 /images/holdem-bad-beat-suckout.webp — alt: A simple three-step visual of a bad beat — an 80 percent favorite, then a suckout on the river, then the loss — caption: The shape of a bad beat: you're an ~80% favorite, the river delivers a suckout, and the hand you should have won is gone
- L82 /images/holdem-bad-beat-aces-vs-set.webp — alt: Infographic of pocket aces at about 80 percent against pocket sevens at about 20 percent, the four-to-one edge that a flopped set of sevens cracks — caption: In every bad beat the math was on your side — the underdog just caught the card they needed

**원시 HTML 줄(축어로 옮길 것)**
- L216   <a href="/en/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radiu
- L221   <a href="/en/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:
- L226   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad
- L231   <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);bord

**readnext 카드(EN 축어)**
    :::readnext[Keep reading]
    /en/blog/holdem-cooler | What Is a Cooler in Poker? | /images/holdem-cooler-hero.webp
    /en/blog/holdem-fish | What Is a Fish in Poker? | /images/holdem-fish-hero.webp
    :::

### 링크 — 편차 0
대상: glossary(썸네일) · cooler(썸네일 L21 · L62 · L100) · fish(L40 · L209) · pot-odds(썸네일 L76) · 관련 글 카드 cooler·fish·pot-odds·tiebreak-rules. 전부 51편 안 → `/ms/blog/<slug>` 그대로.

### 키워드 (실측 2026-09-26 · 상세 `docs/keyword-bank/ms-gloss.md` §holdem-bad-beat)
| 키워드 | 월 | 자리 |
|---|---:|---|
| bad beat · bad beat poker | 20 · 20 | seoTitle·H1 영어 토큰(«Bad Beat» + «Poker») |
| bad beat jackpot | 20 | H2 「What Is a Bad Beat Jackpot?」 — 🔴 정보형만 |
| what is a bad beat in poker · bad beat meaning | 10 | 첫 H2 · tldr |
| poker cooler vs bad beat (최근 2개월 신생) | 10 | H2 「Bad Beat vs Cooler」 + cooler 글 링크 |
| bad beat jackpot rules · meaning | 10 | FAQ 「What is a bad beat jackpot and what qualifies?」 |
| how to deal with bad beats · tilt poker | 10 | H2 「How to Deal With a Bad Beat」 |
| 🔴 버림 | | ggpoker bad beat jackpot(브랜드) · maksud tilt 70 / tilt maksud 20(일반어: steering·head tilt) |

### 현지 SERP
- 「bad beat poker」 · 「apa itu bad beat dalam poker」(ms): 말레이어 포커 페이지 **0건**(PokerNews·pokerskill·wikipedia 등 영어 용어집 · AI Overview). 영어 상위 글도 «몇 %면 진짜 bad beat인가» 기준이 없다(pokerskill만 서술형).
- **PAA 축어**: «What is a bad beat in poker?» · «What does "bad beat" mean in slang?» · «What triggers a bad beat jackpot?» · «How much should you tip on a bad beat jackpot?»(→ EN에 없음 · 쓰지 마라)
- **우리가 더 줄 것 3가지**: ① EN의 «~80%+ 기준» + 고전 사례 표(AA vs 7-7 · AA vs random · 오버페어 vs 플러시 드로우 · runner-runner · one-outer) — 영어 경쟁 글에도 없는 수치 기준 ② jackpot을 **홍보 없이** 규칙 구조로(누가 몇 % 받나 · 리트머스를 쓰지 않는다는 점 — EN L124) ③ 1인칭 경험담 + tilt 대처 루틴을 말레이어로.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)

**title (H1)**: Apa Itu Bad Beat dalam Poker? Bila Jadi Favourite Pun Tak Cukup (63)

**seoTitle**: 80% menang tetapi kalah? — Apa Itu Bad Beat dalam Poker (55)
- EN 훅 «You Were 80% to Win — and Lost» 유지. 80%는 EN seoTitle/tldr 수치.

**desc**: Favourite 80% tetapi kalah? Itu bad beat. Ketahui bezanya dengan cooler, cara bad beat jackpot berfungsi, dan kenapa ia sebenarnya petanda baik untuk anda. (155)

**tldr**:
Bad beat berlaku apabila anda masuk wang sebagai favourite besar — biasanya 80% atau lebih — dan kalah kerana lawan dapat kad bertuah yang 'suck out' anda. Tidak seperti cooler dalam erti yang ketat, anda memang di hadapan ketika wang masuk; kad terakhir sahaja yang mengkhianati anda. Memang pedih, tetapi bad beat yang datang berterusan biasanya bermakna lawan masuk wang ketika di belakang — itulah jenis permainan yang anda mahukan.

**H2 set** (EN 12 → ms 12 · 질문형 6/8 = 75%):
1. ### Ringkasan pantas ← The bad beat, at a glance
2. ## Apa Itu Bad Beat dalam Poker? ← What Is a Bad Beat in Poker?
3. ## Bad Beat vs Cooler: Apa Bezanya? ← Bad Beat vs Cooler: The Difference That Matters
4. ## Berapa Besar Favourite untuk Dikira Bad Beat 'Sebenar'? ← How Big a Favorite Makes It a "Real" Bad Beat?
5. ## Contoh Bad Beat Klasik (Berserta Odds) ← Classic Bad Beat Examples (With the Odds)
6. ## Apa Itu Bad Beat Jackpot? ← What Is a Bad Beat Jackpot?
7. ## Bad Beat Paling Terkenal dalam Sejarah Poker ← The Most Famous Bad Beat in Poker
8. ## Kenapa Bad Beat Sebenarnya Baik untuk Anda? ← Why Bad Beats Are Actually Good for You
9. ## Bagaimana Menghadapi Bad Beat dalam Poker? ← How to Deal With a Bad Beat
10. ## Soalan Lazim ← FAQ
11. ## 3 Perkara untuk Diingati ← The 3 Things to Remember
12. ## Artikel Berkaitan ← Related Posts

**FAQ questions** (8):
1. Apa itu bad beat dalam poker?
2. Apa beza bad beat dengan cooler?
3. Adakah kalah coinflip dikira bad beat?
4. Apa itu bad beat jackpot dan apa yang melayakkannya?
5. Apa bad beat paling teruk dalam sejarah poker?
6. Adakah bad beat lebih kerap berlaku dalam poker online?
7. Bagaimana cara menghadapi bad beat dalam poker?
8. Adakah bad beat sama dengan bermain teruk?

**tags** (8):
["bad beat", "bad beat poker", "what is a bad beat in poker", "bad beat jackpot", "poker cooler vs bad beat", "how to deal with bad beats", "apa itu bad beat dalam poker", "maksud bad beat dalam poker"]

**absorbed keywords**:
- bad beat / bad beat poker (20) → seoTitle / title / tag
- what is a bad beat in poker (10) + PAA "What is a bad beat in poker?" → H2 #2 / FAQ #1 / tag
- bad beat jackpot (20) + PAA "What triggers a bad beat jackpot?" → H2 #6 / FAQ #4 / tag — 🔴 규칙 메커니즘만, 운영사·배당 홍보 없음
- poker cooler vs bad beat (10, 신규) → H2 #3 / FAQ #2 / tag
- how to deal with bad beats (10) → H2 #9 / FAQ #7 / tag
- PAA "What does "bad beat" mean in slang?" → H2 #2 직답 (스포츠 베팅·만화 뜻과 구분 한 줄)
- apa itu bad beat dalam poker / maksud bad beat dalam poker → tag (입력에 bad-beat 전용 Malay 쿼리는 없음 — global 패턴 «apa itu / maksud / dalam poker»을 적용한 형태. 불확실 항목)

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 수치·카드를 한 글자도 바꾸지 않는다)

- L19 The one that still stings: I had pocket aces, got it all in against a player who called with pocket fives, and watched one of the last two fives slam onto the river. I'd done everything right. My money went in as better than a 4-to-1 favorite, and I still lost the whole stack to ==one of the two cards in the deck that could beat me==. That's a bad beat, and if you play poker long enough, it will happen to you thousands of times.
- L29 80%+ | How big a favorite it usually takes
- L54 | **Who led when chips went in** | **You** were the favorite (often 80%+) | You were **behind** |
- L57 | **Classic example** | AA loses when 7‑7 spikes a set | KK runs into AA |
- L68 ![A simple three-step visual of a bad beat — an 80 percent favorite, then a suckout on the river, then the loss](/images/holdem-bad-beat-suckout.webp "The shape of a bad beat: you're an ~80% favorite, the river delivers a suckout, and the hand you should have won is gone")
- L72 - **~80% or more, and you lose to a suckout** — a genuine bad beat. Your aces (a ~4-to-1 favorite over a lower pair) getting cracked is the textbook case. A **one-outer** — losing to the single remaining card in the deck — is the purest bad beat of all.
- L73 - **60–70% favorite losing** — unpleasant, but really just variance. You were only a modest favorite; the other outcome was always going to happen fairly often.
- L74 - **A coinflip is never a bad beat.** Losing A‑K to Q‑Q (about 43/57 offsuit, 46/54 suited), or a pair to two overcards, is close enough to a coinflip — calling that a bad beat is like calling a lost coin toss a robbery. If it was close to even money, you didn't get *beaten*, you just lost a flip.
- L90 | **Aces cracked by a set** | AA vs a lower pair (e.g. 7‑7) | ~80% (4:1) | Their pair hits a set on the flop, turn or river |
- L91 | **Aces vs a random hand** | AA all-in preflop | ~85% | Any two cards run you down |
- L92 | **Overpair vs a flush draw (borderline)** | Overpair on the flop | ~63% (1.7:1) | Their nine flush outs, plus backdoor two pair or straight, get there by the river |
- L93 | **Runner-runner** | A made hand ahead on the flop | ~90%+ | Two perfect cards (turn *and* river) complete a draw |
- L94 | **The one-outer** | A near-locked hand | ~96% | The single card left in the deck beats you |
- L98 *By the bar in the previous section, overpair vs flush draw is the family's borderline case: at ~63%, it's more variance than a "true" bad beat — but it's what the table calls it anyway.*
- L100 The most iconic is **aces cracked by a set.** You get pocket aces all in preflop against pocket sevens — you're roughly an 80% favorite, a 4-to-1 lock in your favor. But there are two more sevens in the deck, and if one hits the board, their three-of-a-kind almost always beats your pair — only an ace or a rare runout (a flush, a straight, or trips on the board) saves you. Four times out of five you scoop it; the fifth time, you've got a bad beat story nobody wants to hear. The math was never wrong — you just landed on the wrong side of it, which is exactly why a single hand tells you [nothing about whether you played well](/en/blog/holdem-cooler).
- L118 | **Loser (the bad-beat hand)** | ~50% |
- L119 | **Winner of the hand** | ~25% |
- L120 | **Others dealt into the hand** | ~25% (split evenly) |
- L124 **One thing the jackpot does not use: the litmus at the top of this page.** Its qualifier is written in hand strength, not in who was ahead when the money went in. Run the test on the classic trigger: you hold A♠A♥ on a board of A♣ J♠ J♦ 7♥ 2♣ for aces full of jacks, and your opponent holds J♥J♣ for four jacks. Both hands were complete on the flop and that is where the chips went in, so nobody was outdrawn after the money was committed — by the standard above that is a **cooler**, and it is exactly what the jackpot pays. Treat "bad beat jackpot" as a cardroom product name, not a second definition of the term.
- L132 If you want to feel better about your own beats, remember that the worst ones happen on the biggest stages. The most legendary occurred at the **2008 World Series of Poker Main Event**, where **Motoyuki Mabuchi** turned his pocket aces into **four of a kind — quad aces**, a hand only a straight flush can beat — and *still lost*. On a board of A♥ 9♣ Q♦ 10♦, **Justin Phillips** (holding K♦ J♦) had already made an ace-high straight — Broadway, A-K-Q-J-10 — on the turn, ahead of Mabuchi's set of aces. The river **A♦** completed Mabuchi's quads while, on the very same card, turning Phillips' straight into a **royal flush** — the 10‑J‑Q‑K‑A of diamonds. The river action, as PokerNews reported it: Mabuchi checked, Phillips bet, Mabuchi announced "gamble!" and moved all in, and Phillips called instantly. The one card that made four aces was the one card that could beat them.
- L136 That's the ceiling of bad-beat pain: not an 80% favorite going down, but *four aces* — a hand you could play a lifetime without ever losing — beaten by a straight flush, the one category of hand that outranks four of a kind. It's worth keeping in your back pocket the next time your aces get cracked: however badly the deck treated you, someone once lost with quad aces.
- L179 A. No. A bad beat requires you to be a heavy favorite — usually around 80% or more — and then get sucked out on. Losing a near-even matchup like A‑K versus Q‑Q (A‑K wins only about 43% of the time offsuit, 46% suited) is just normal variance. If the hand was close to a coin toss, you didn't get beaten badly, you simply lost a flip that was always going to go the other way about half the time.

### 경험담 자리 — EN 1인칭 축어 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)

- L19 The one that still stings: I had pocket aces, got it all in against a player who called with pocket fives, and watched one of the last two fives slam onto the river. I'd done everything right. My money went in as better than a 4-to-1 favorite, and I still lost the whole stack to ==one of the two cards in the deck that could beat me==. That's a bad beat, and if you play poker long enough, it will happen to you thousands of times.
- L154 1. **Accept it out loud.** A simple "I got it in good, nothing I could do" beats stewing in silence. Naming it as variance closes the file.

### 하지 말 것
- jackpot 절: **운영사명·지급액·«cara menang jackpot»류 금지.** EN이 주는 분배 비율(~50/25/25)과 L124 예시만. 팁(tip) 질문은 EN에 없음 → 넣지 마라.
- 명예의 전당 사례(L132 Mabuchi vs Phillips 2008 WSOP): 인명·연도·카드·「PokerNews가 보도한 액션 순서」 **EN 축어** — 말레이어로 사건을 다시 서술할 때 카드·순서를 바꾸지 마라. L134 이탤릭 단서(«엄밀히는 bad beat도 아니다»)도 반드시 옮긴다.
- L98 이탤릭 단서(오버페어 vs 플러시 드로우 ~63%는 경계 사례)를 빠뜨리지 마라 — 빠지면 표가 «63%도 bad beat»로 읽힌다.
- 도박 규제국 독자 — «jackpot»·«menang besar» 홍보 어조 금지.


---

## holdem-cooler — EN updated 2026-09-26

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | What Is a Cooler in Poker? The Unavoidable Loss — and Why It's Not a Bad Beat (77자) |
| seoTitle | The Hand You Couldn't Fold If You Tried — What Is a Cooler? (59자) |
| desc | A cooler is when your monster hand runs into a bigger one and folding was never an option — and why it's not a bad beat, with the classic examples. (147자) |
| tldr | A cooler is a hand where you lose a big pot with a very strong holding you could almost never correctly fold — like pocket kings running into aces, or a set losing to a bigger set. In the strict sense used in this guide, you were behind when the money went in and no lucky card 'sucked out' on you: you played it right and still lost. It's poker's most honest kind of disaster. (377자) |
| category | glossary |
| readTime | 10 min |
| emoji | 🧊 |
| image | /images/holdem-cooler-hero.webp |
| imageAlt | A stunned poker player with his hand on his head after losing a big pot, watching his opponent pull a tall stack of chips across the green felt |
| date | 2026-07-05 |
| tags | ["cooler", "what is a cooler in poker", "cooler vs bad beat", "poker cooler meaning", "poker setup", "got coolered", "set over set", "cooler hand examples"] |

### 구조 (EN L## · 축어)

- L25 ### The cooler, at a glance
- L36 ## What Is a Cooler in Poker?
- L46 ## Cooler vs Bad Beat: The Difference Everyone Gets Wrong
- L73 ## Classic Cooler Examples (The Whole Family)
- L96 ## Is a Cooler the Same as a "Setup"? And What Does "Coolered" Mean?
- L108 ## Can You Actually Avoid Coolers?
- L116 ## When "It Was a Cooler" Is Just an Excuse
- L130 ## How to Recover From a Cooler
- L146 ## FAQ
- L190 ## The 3 Things to Remember
- L200 ## Related Posts

FAQ 10문항 · 마크다운 표 2개 · HTML 카드 블록(<div style…>) L57 L79 L202 · 디렉티브: L27 stripe · L122 pull · L141 readnext[Keep reading]

**FAQ 문항(EN 축어)**
- L148 Q. What is a cooler in poker?
- L152 Q. What is the difference between a cooler and a bad beat?
- L156 Q. Is a cooler bad luck or bad play?
- L160 Q. Is a setup the same as a cooler?
- L164 Q. Is pocket kings vs pocket aces a cooler?
- L168 Q. How often does set over set happen?
- L172 Q. What does it mean to get "coolered"?
- L176 Q. Is a cooler always all-in?
- L180 Q. How do you deal with a cooler?
- L184 Q. What is a cooler in a casino? Is it the same as in poker?

**본문 이미지(경로·alt·캡션 축어 — B는 경로 그대로, alt·캡션만 말레이어로)**
- L38 /images/holdem-cooler-collision.webp — alt: A visual showing pocket kings losing to pocket aces, labeled COOLER — two premium hands colliding with no misplay — caption: The essence of a cooler: two huge hands collide, the second-best one can't fold, and nobody did anything wrong
- L48 /images/holdem-cooler-vs-badbeat.webp — alt: Infographic of A♠ A♦ versus K♥ K♦ on a K♠ 7♦ 2♣ 8♥ 3♠ runout — the same collision seen from both sides — caption: One collision, two labels: preflop, kings against aces is the textbook cooler for the kings — and when the king spikes, the very same hand becomes a bad beat for the aces
- L75 /images/holdem-cooler-stacks-collide.webp — alt: Two players pushing their full chip stacks into the middle of the green felt, the collision where neither hand can fold — caption: Coolers happen when both players hold hands far too strong to fold — the money goes in and the second-best monster pays off

**원시 HTML 줄(축어로 옮길 것)**
- L203   <a href="/en/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:
- L208   <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);bord
- L213   <a href="/en/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad
- L218   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad

**readnext 카드(EN 축어)**
    :::readnext[Keep reading]
    /en/blog/holdem-fish | What Is a Fish in Poker? | /images/holdem-fish-hero.webp
    /en/blog/holdem-tiebreak-rules | Which Hand Wins at Showdown? | /images/holdem-tiebreak-hero.webp
    :::

### 링크 — 편차 0
대상: glossary(썸네일 L21) · fish(썸네일 L42 · L126 · L196) · pot-odds(썸네일 L69) · tiebreak-rules(L92) · position-play(L112) · 관련 글 카드 fish·tiebreak-rules·straddle·pot-odds. 전부 51편 안.

### 키워드 (실측 2026-09-26 · 상세 `docs/keyword-bank/ms-gloss.md` §holdem-cooler)
| 키워드 | 월 | 자리 |
|---|---:|---|
| cooler poker · poker cooler · what is a cooler in poker | 10(한 시계열) | seoTitle·H1 «Cooler dalam Poker» |
| poker cooler vs bad beat · cooler vs bad beat | 10(최근 2개월 신생 · 12m +300%) | **H2 핵심** 「Cooler vs Bad Beat」 + bad-beat 글 링크 |
| set over set · set over set poker | 10 | 예시 H2 안 · FAQ 「How often does set over set happen?」 |
| kk vs aa · aa vs kk | 10 | 예시 표 · FAQ 「Is pocket kings vs pocket aces a cooler?」 |
| coolered | 10 | H2 「…"Coolered"…」 |
| 말레이 PAA «Apakah maksud "cooler"?» | — | **첫 H2 직답 첫 문장**(현재 답 = Glosbe 사전 «penyejuk»뿐) |
| 🔴 버림 | | poker setup(테이블 세팅 의도 — **tag 금지**, 본문 동의어로만) · cooler 단독(가전·음료) |

### 현지 SERP
- 「cooler poker」 · 「maksud cooler dalam poker」(ms): 말레이어 포커 글 **0건** — Glosbe(penyejuk) · ms.wikipedia 일반 문서 · PokerNews(한 줄 정의) · natural8 블로그 · 888poker(2026-09-15 갱신 · Mabuchi 사례 · KK가 AA를 만날 빈도).
- **PAA 축어**: «What is a cooler in poker?» · «What does "cooler" mean?» · «Apakah maksud "cooler"?» (나머지 «42 rule»·«dirty diaper»·치팅 선수는 주제 이탈 — 쓰지 마라)
- **우리가 더 줄 것 3가지**: ① 말레이어 첫 문장 직답(«cooler dalam poker» ≠ penyejuk) ② EN의 cooler 가족 표(KK vs AA ~4.5:1 · set over set 1% · 11.8%) — PokerNews·natural8엔 수치 없음 ③ EN H2 「When "It Was a Cooler" Is Just an Excuse」 + :::pull 자기점검 질문 — 경쟁 글은 888만 한 문단.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)

**title (H1)**: Apa Itu Cooler dalam Poker? Kekalahan Tak Terelak yang Bukan Bad Beat (69)

**seoTitle**: Tangan yang mustahil anda fold — Apa Itu Cooler dalam Poker (59)
- EN 훅 «The Hand You Couldn't Fold If You Tried» 유지. «cooler» 단독은 penyejuk/쿨러박스라 «dalam Poker» 필수.

**desc**: Tangan monster anda bertemu tangan lebih besar dan fold bukan pilihan — itulah cooler. Kenapa ia bukan bad beat, dengan contoh KK vs AA dan set over set. (153)
- KK vs AA · set over set는 EN tldr의 예시(pocket kings vs aces · set vs bigger set)이자 측정 쿼리(각 10).

**tldr**:
Cooler ialah tangan di mana anda kalah pot besar dengan pegangan yang sangat kuat sehingga hampir mustahil untuk fold dengan betul — seperti pocket kings bertemu aces, atau set kalah kepada set yang lebih besar. Dalam erti ketat yang digunakan panduan ini, anda memang di belakang ketika wang masuk dan tiada kad bertuah yang 'suck out' anda: anda bermain betul tetapi tetap kalah. Ia bencana paling jujur dalam poker.

**H2 set** (EN 11 → ms 11 · 질문형 6/8 = 75%):
1. ### Ringkasan pantas ← The cooler, at a glance
2. ## Apa Itu Cooler dalam Poker? ← What Is a Cooler in Poker?
3. ## Cooler vs Bad Beat: Apa Beza yang Ramai Silap Faham? ← Cooler vs Bad Beat: The Difference Everyone Gets Wrong
4. ## Contoh Cooler Klasik: KK vs AA, Set Over Set dan Lain-lain ← Classic Cooler Examples (The Whole Family)
5. ## Adakah Cooler Sama dengan 'Setup'? Apa Maksud 'Coolered'? ← Is a Cooler the Same as a "Setup"? And What Does "Coolered" Mean?
6. ## Boleh Ke Cooler Dielakkan? ← Can You Actually Avoid Coolers?
7. ## Bila 'Itu Cooler' Cuma Alasan Semata-mata? ← When "It Was a Cooler" Is Just an Excuse
8. ## Bagaimana Cara Pulih Selepas Kena Cooler? ← How to Recover From a Cooler
9. ## Soalan Lazim ← FAQ
10. ## 3 Perkara untuk Diingati ← The 3 Things to Remember
11. ## Artikel Berkaitan ← Related Posts

**FAQ questions** (10):
1. Apa itu cooler dalam poker?
2. Apa beza cooler dengan bad beat?
3. Adakah cooler itu nasib malang atau permainan yang teruk?
4. Adakah setup sama dengan cooler?
5. Adakah pocket kings vs pocket aces dikira cooler?
6. Berapa kerap set over set berlaku?
7. Apa maksud kena 'coolered'?
8. Adakah cooler mesti all-in?
9. Bagaimana cara menghadapi cooler?
10. Apa itu cooler di kasino? Sama ke dengan cooler dalam poker?

**tags** (8):
["cooler poker", "what is a cooler in poker", "poker cooler vs bad beat", "set over set", "kk vs aa", "got coolered", "apa itu cooler dalam poker", "maksud cooler dalam poker"]
- «poker setup»은 테이블 셋업 의도라 제외 (입력 trap).

**absorbed keywords**:
- cooler poker (10) → seoTitle / title / tag
- what is a cooler in poker (10) + PAA "What is a cooler in poker?" → H2 #2 / FAQ #1 / tag
- PAA "What does "cooler" mean?" + Malay PAA "Apakah maksud "cooler"?" → H2 #2 직답(«penyejuk가 아니라…» 한 줄) / tag «maksud cooler dalam poker»
- poker cooler vs bad beat (10, 상승) → H2 #3 / FAQ #2 / tag
- set over set (10) → desc / H2 #4 / FAQ #6 / tag
- kk vs aa (10) → desc / H2 #4 / FAQ #5 / tag
- got coolered → H2 #5 / FAQ #7 / tag
- cooler in a casino (EN FAQ #10) → FAQ #10 — 다의어 분리 자리

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 수치·카드를 한 글자도 바꾸지 않는다)

- L48 ![Infographic of A♠ A♦ versus K♥ K♦ on a K♠ 7♦ 2♣ 8♥ 3♠ runout — the same collision seen from both sides](/images/holdem-cooler-vs-badbeat.webp "One collision, two labels: preflop, kings against aces is the textbook cooler for the kings — and when the king spikes, the very same hand becomes a bad beat for the aces")
- L64 | **Classic example** | KK runs into AA | AA cracked when 7‑7 spikes a set |
- L69 Here's the same players showing both, so it clicks. **Bad beat:** you hold A♠A♥, get it all in preflop against 7♣7♦, and a **7** hits the board — your aces were a ~4‑to‑1 favorite (about 80%) and got outdrawn. **Cooler:** flip it around — you hold the **7♣7♦**, flop a set of sevens, and stack off against a set drawn from a bigger pair. You were the underdog from the flop on, and a flopped set is almost never folded. Same cards, opposite stories. Knowing which one just happened tells you whether to [review your play](/en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") or just shrug it off.
- L83 | **Kings vs Aces** | KK all-in preflop against AA | KK is a ~4.5:1 dog to AA, and you're almost never folding kings preflop |
- L92 The most iconic is **set over set.** Say you hold **7♣7♦** and the flop comes **J♦ 7♥ 2♣** — you've flopped middle set, three sevens. It's a hand you'll happily stack off with almost always. But your opponent holds **J♠J♥** and flopped top set, three jacks. By the river on a **J♦ 7♥ 2♣ 5♠ Q♦** board, your best five cards are 7‑7‑7‑Q‑J and theirs are J‑J‑J‑Q‑7 — three jacks beat three sevens, and your only escape was the single remaining seven in the deck. You didn't misplay a thing; you were simply drawing to one card the whole time. That's a cooler in its purest form, and it's why understanding [which hand wins a showdown](/en/blog/holdem-tiebreak-rules) matters even when the result is out of your hands.
- L166 A. Yes — it's the most classic cooler of all. Kings are roughly a 4.5-to-1 underdog to aces preflop, and almost no reasonable player folds pocket kings before the flop. It takes a read that screams aces, or tournament pressure such as a satellite bubble where ICM can make even kings a fold — and those spots rarely arrive. So the money goes in, you're behind from the start, and you lose a hand you were almost never getting away from.
- L170 A. Rarely — which is exactly why it stings. When two players each hold a pocket pair and both see the flop, they will *both* flop a set only about 1% of the time (roughly 1 in 96). Flopping a set at all happens about 11.8% of the time — around 1 in 8.5 — when you hold a pocket pair, so having a second player flop a bigger one on the very same board is the kind of cooler people remember for years.

### 경험담 자리 — EN 1인칭 축어 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)

- L19 I still remember the hand that taught me the word. I flopped a set of kings, got it all in on the turn, and turned my cards over already reaching for the pot — then watched my opponent flip up a set of aces. I hadn't done anything wrong. There was no bad play to regret, no draw I should have folded to. I'd been beaten from the moment the chips went in, and there was ==nothing I could have done about it==. That's a cooler, and once you understand it, you stop blaming yourself for the losses that were never yours to avoid.
- L42 The word paints the picture: you got "cooled off" — your hot hand went cold through no fault of your own. You'll also hear it used as a verb ("I got **coolered**") and as a near-synonym, **"setup,"** because it feels like the deck was *set up* to take your whole stack. What makes a cooler different from an ordinary loss is that a good player in the same spot would have lost a big pot too. Recognizing that is the first step to not letting these hands wreck your session — the same discipline that separates a winning player from a [fish](/en/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp").
- L101 - **Coolered (verb)** — to be on the losing end of a cooler. "I got coolered" means you lost a big pot with a hand too strong to fold. By definition, saying it correctly is an admission that you *made the right play* and still lost.
- L123 Would I make the exact same play again, with only the information I had at the time — ranges, price and stack depth, not just gut feel? If **no**, you misplayed — and that's a leak to fix, not bad luck. If **yes**, it was bad luck: a cooler if you were behind when the money went in, a bad beat if you were ahead and got outdrawn.
- L154 A. Timing and suckouts, at least in the strict sense. In a cooler you were behind when the money went in and lost to a bigger hand — no lucky card changed anything. In a bad beat you were ahead (usually a big favorite) and your opponent hit a lucky draw to overtake you. Some players call any big-hand-versus-bigger-hand clash a cooler, even when a late card decided it; the strict split just keeps the lesson clear. Cooler: "I never had a chance." Bad beat: "I should have won that."
- L174 A. To be coolered is to lose a big pot on the wrong end of a cooler — you had a hand too strong to fold and ran into a bigger one. Used correctly, "I got coolered" is actually an admission that you played the hand right and simply lost to the deck, not to your own mistake.

### 하지 말 것
- 첫 문장의 «bukan penyejuk» 구분은 **1회**만 — 사전 비교를 늘려 글이 어원 해설로 새지 않게.
- 888poker의 «KK가 AA를 만날 빈도 약 4%»는 **EN에 없는 수치 → 넣지 마라**.
- L69 «같은 선수가 둘 다 보여 주는» 예시(A♠A♥ vs 7♣7♦)와 L92 set over set(7♣7♦ vs J♠J♥ · 보드 J♦ 7♥ 2♣ 5♠ Q♦ · 베스트5 7-7-7-Q-J vs J-J-J-Q-7)의 **카드·무늬·베스트5 표기 축어**.
- 이미지 L48 alt의 카드(A♠ A♦ vs K♥ K♦ · K♠ 7♦ 2♣ 8♥ 3♠) — alt 번역 시 카드 토큰 그대로.
- L184 FAQ «What is a cooler in a casino?» — EN 답의 범위만(가전 cooler 설명을 늘리지 마라).


---

## holdem-fish — EN updated 2026-09-26

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | What Is a Fish in Poker? How to Spot One — and Make Sure It Isn't You (69자) |
| seoTitle | If You Can't Spot the Fish, It's You — What Is a Poker Fish? (60자) |
| desc | A fish is the weak player the whole table profits from. How to spot one, the shark/whale/nit/donkey slang decoded, and how to make sure the fish isn't you. (155자) |
| tldr | A 'fish' is poker slang for a weak, losing player the stronger players ('sharks') make their money from. Fish play too many hands, call too much, and can't fold — and the famous line warns that if you can't spot the fish at your table, you're it. It's the single most important read in the game: find the fish, or become one. (325자) |
| category | glossary |
| readTime | 10 min |
| emoji | 🐟 |
| image | /images/holdem-fish-hero.webp |
| imageAlt | A relaxed recreational player at a poker table pushing a big stack of chips into the pot while sharper opponents quietly watch |
| date | 2026-07-05 |
| tags | ["fish", "what is a fish in poker", "poker fish meaning", "how to spot a fish in poker", "fish vs shark", "am i the fish", "poker player types", "how to stop being a fish"] |

### 구조 (EN L## · 축어)

- L25 ### The fish, at a glance
- L36 ## What Does "Fish" Mean in Poker?
- L44 ## Why Are Bad Players Called "Fish"?
- L54 ## How to Spot a Fish: 8 Telltale Signs
- L73 ## The Poker Zoo: Fish vs Shark vs Whale vs Nit vs Donkey
- L104 ## "If You Can't Spot the Sucker…": The Famous Line, Corrected
- L122 ## Am I the Fish? An Honest Self-Check
- L147 ## How to Stop Being a Fish
- L167 ## FAQ
- L203 ## The 3 Things to Remember
- L213 ## Related Posts

FAQ 8문항 · 마크다운 표 2개 · HTML 카드 블록(<div style…>) L79 L126 L215 · 디렉티브: L27 stripe · L58 stripe · L112 pull · L162 readnext[Keep reading]

**FAQ 문항(EN 축어)**
- L169 Q. What does fish mean in poker?
- L173 Q. Is calling someone a fish an insult?
- L177 Q. What is the opposite of a fish in poker?
- L181 Q. What's the difference between a fish and a whale?
- L185 Q. What's the difference between a fish and a donkey?
- L189 Q. How do you tell if someone is a fish?
- L193 Q. How do you stop being a fish in poker?
- L197 Q. Who said "if you can't spot the sucker at the table, you are the sucker"?

**본문 이미지(경로·alt·캡션 축어 — B는 경로 그대로, alt·캡션만 말레이어로)**
- L46 /images/holdem-pub-players-table.webp — alt: Top-down infographic of a pub poker table with a K♦ 7♣ 2♠ 9♥ 3♦ board, chip stacks, and the dealer button — caption: Every table has a food chain: sharks quietly identify the fish and build their profit around them
- L75 /images/holdem-fish-food-chain.webp — alt: Four poker player types shown as chips of different sizes on green felt — FISH, SHARK, WHALE, and NIT — sized by how much money each type puts in play, the whale's chip by far the largest — caption: The poker food chain at a glance: the fish feeds the sharks, the whale is the big prize, and the nit just sits tight
- L106 /images/holdem-starting-hands-weak-ace-trap.webp — alt: Two starting hands side by side on the felt — a weak ace-four offsuit outlined in red, next to a premium ace-king outlined in gold — caption: The self-check that matters: if you're calling raises with the hand on the left, the table has already spotted you

**원시 HTML 줄(축어로 옮길 것)**
- L216   <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10
- L221   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad
- L226   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);borde
- L231   <a href="/en/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad

**readnext 카드(EN 축어)**
    :::readnext[Keep reading]
    /en/blog/holdem-starting-hands-chart | Which Hands Are Worth Playing | /images/holdem-starting-hands-chart-hero.webp
    /en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
    :::

### 링크 — 편차 0
대상: glossary(썸네일 L21) · starting-hands-chart(썸네일 L69 · L151 · L209) · pot-odds(썸네일 L153 · L209) · position-play(L155) · 관련 글 카드 starting-hands-chart·pot-odds·position-play·straddle. 전부 51편 안.

### 키워드 (실측 2026-09-26 · 상세 `docs/keyword-bank/ms-gloss.md` §holdem-fish)
| 키워드 | 월 | 자리 |
|---|---:|---|
| fish in poker · what is a fish in poker · poker fish · fish poker | 20(한 클러스터) | seoTitle·H1 «Fish dalam Poker» |
| poker fish meaning · fish poker meaning | 10 | 첫 H2 직답 · FAQ 1 |
| whale · donkey · nit · shark poker · calling station | 각 10 | H2 「The Poker Zoo」 표 |
| poker player types · types of poker players | 10 | Zoo H2 문구 · tag |
| poker fish vs donkey · (자동완성) poker fish vs whale | 10 · — | FAQ 「fish vs whale」·「fish vs donkey」 — PAA와 정확히 일치 |
| maksud fish dalam poker · apa itu fish dalam poker | null(자동완성 0) | 말레이어 H2 질문형(SERP 공백) |
| 🔴 버림 | | pemain poker(인니·유명인 의도) · go fish(다른 게임) · 단독 fish/whale/shark(해산물·loan shark·crypto whale) |

### 현지 SERP
- 「maksud fish dalam poker」(ms): jmarian 사전(«ikan (pemain baru poker)» 한 줄) · 사전·인니 용어집뿐 — 말레이어 해설 **0건**. 「fish in poker」: PokerNews(How to Exploit · Fish vs Donkey · Is it Rude…) · partypoker 등 영어.
- **PAA 축어**: «What is a fish in poker?» · «What is the difference between a "donkey" and a "fish" in poker?» · «What is the difference between a whale and a fish in poker?» (🔴 «How to play go fish poker?» = 함정)
- **우리가 더 줄 것 3가지**: ① «dalam poker»로 한정한 말레이어 직답 ② Zoo 비교표(fish/whale/donkey/nit/shark) + VPIP/PFR 자기점검 표 — 인니 글의 «tight = agresif» 오류를 EN 정의대로 ③ «Am I the Fish?» 자기진단 + «sucker» 명언 바로잡기 + 경험담(PokerNews는 착취법에 치우침).

### 확정 카피 (Fable 서브 → Opus 재측정·수정)

**title (H1)**: Apa Itu Fish dalam Poker? Cara Kenal Pasti — dan Pastikan Bukan Anda (68)

**seoTitle**: Tak nampak fish? Andalah fish — Apa Itu Fish dalam Poker (56)
- EN 훅 «If You Can't Spot the Fish, It's You» 유지. bare fish는 해산물이라 «dalam Poker» 필수.

**desc**: Fish ialah pemain lemah yang jadi sumber untung seluruh meja. Cara kenal pasti fish, maksud shark, whale, nit dan donkey, serta pastikan fish itu bukan anda. (157)

**tldr**:
'Fish' ialah slang poker untuk pemain lemah yang sentiasa kalah — pemain yang lebih kuat ('shark') mengaut untung daripadanya. Fish bermain terlalu banyak tangan, terlalu kerap call dan tak reti fold; pepatah terkenal mengingatkan, kalau anda tak nampak fish di meja, andalah fish itu. Inilah bacaan paling penting dalam permainan: cari fish, atau jadi fish.

**H2 set** (EN 11 → ms 11 · 질문형 5/7 = 71%):
1. ### Ringkasan pantas ← The fish, at a glance
2. ## Apa Maksud 'Fish' dalam Poker? ← What Does "Fish" Mean in Poker?
3. ## Kenapa Pemain Lemah Dipanggil 'Fish'? ← Why Are Bad Players Called "Fish"?
4. ## Cara Kenal Pasti Fish: 8 Tanda Jelas ← How to Spot a Fish: 8 Telltale Signs
5. ## Fish vs Shark vs Whale vs Nit vs Donkey: Apa Bezanya? ← The Poker Zoo: Fish vs Shark vs Whale vs Nit vs Donkey
6. ## "Kalau Tak Nampak Sucker…": Pepatah Terkenal, Dibetulkan ← "If You Can't Spot the Sucker…": The Famous Line, Corrected
7. ## Adakah Saya Fish? Semakan Diri yang Jujur ← Am I the Fish? An Honest Self-Check
8. ## Bagaimana Cara Berhenti Jadi Fish dalam Poker? ← How to Stop Being a Fish
9. ## Soalan Lazim ← FAQ
10. ## 3 Perkara untuk Diingati ← The 3 Things to Remember
11. ## Artikel Berkaitan ← Related Posts

**FAQ questions** (8):
1. Apa maksud fish dalam poker?
2. Adakah memanggil seseorang 'fish' itu satu penghinaan?
3. Apa lawan kepada fish dalam poker?
4. Apa beza fish dengan whale dalam poker?
5. Apa beza fish dengan donkey dalam poker?
6. Bagaimana nak tahu seseorang itu fish?
7. Bagaimana cara berhenti jadi fish dalam poker?
8. Siapa yang berkata "kalau anda tak nampak sucker di meja, andalah sucker itu"?

**tags** (8):
["fish in poker", "what is a fish in poker", "poker player types", "poker fish vs donkey", "whale poker", "nit poker", "apa itu fish dalam poker", "maksud fish dalam poker"]

**absorbed keywords**:
- fish in poker / what is a fish in poker / poker fish (20) + PAA "What is a fish in poker?" → seoTitle / title / H2 #2 / FAQ #1 / tag
- whale poker (10) + PAA "difference between a whale and a fish" → H2 #5 / FAQ #4 / tag
- donkey poker (10) · poker fish vs donkey (10) + PAA "difference between a donkey and a fish" → H2 #5 / FAQ #5 / tag
- nit poker (10) → H2 #5 / desc / tag
- shark poker (10) → H2 #5 / desc / FAQ #3 (lawan kepada fish = shark)
- poker player types (10) → H2 #5 / tag
- PAA trap "How to play go fish poker?" → 무시 (다른 게임)

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 수치·카드를 한 글자도 바꾸지 않는다)

- L30 40–70% | A fish's typical VPIP (hands played)
- L46 ![Top-down infographic of a pub poker table with a K♦ 7♣ 2♠ 9♥ 3♦ board, chip stacks, and the dealer button](/images/holdem-pub-players-table.webp "Every table has a food chain: sharks quietly identify the fish and build their profit around them")
- L59 Plays too many hands | Sees flops with any two cards — a VPIP of 40–70% vs a solid player's 15–22%
- L128 | | VPIP (hands played) | PFR (hands raised) | The read |
- L130 | **Solid player** | 15–22% | 12–18% (never higher than their VPIP) | Tight, aggressive, close gap |
- L131 | **Fish** | 40–70% | under 10% | Loose and passive — playing everything, leading nothing |
- L132 | **Nit** | under 12% | under 8% | Too tight — predictable, usually not a fish |
- L136 The fish signature is the **wide VPIP / low PFR gap**: you're playing 45% of hands but raising only 5% of all hands dealt. That means you're *calling* your way into pots and hoping — the single biggest leak in poker. Beyond the stats, ask yourself honestly:
- L207 3. **Make sure it isn't you.** A wide VPIP with a low raise percentage is the fish signature. If that's you, the fixes are the easiest wins in poker: play fewer hands, fold more, and stop chasing.

### 경험담 자리 — EN 1인칭 축어 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)

- L19 The first time someone at a casino table quietly called me a fish, I didn't even know I'd been insulted. I thought I was playing fine — I was seeing lots of flops, calling to "keep them honest," chasing every draw because ==you never know==. Six months and a lot of lost buy-ins later I understood: I *was* the fish. Everyone at the table had known it before I sat down.

### 하지 말 것
- **«ikan»을 용어로 쓰지 마라**(현장 사용 미확인 · 사전 정의는 «초보»라 뉘앙스가 틀림). 어원 H2 「Why Are Bad Players Called "Fish"?」에서 뜻풀이로 1회만.
- «fish = pemain baru(초보)»로 정의하지 마라 — EN은 «약하고 지는 플레이어»다(오래 쳐도 fish일 수 있다).
- L197 FAQ «Who said "if you can't spot the sucker…"?» — EN 답의 인물·출처 축어(H2 「…The Famous Line, Corrected」와 같은 사실). 기억으로 인물을 바꾸지 마라.
- VPIP/PFR 수치(40–70% · 15–22% · 12–18% · under 10% · under 12% · under 8% · 45%/5%) 축어.
- 모욕 어조 금지 — EN 「Is calling someone a fish an insult?」 답과 «Don't tap the glass» 매너 절의 톤 유지.


---

## holdem-rake — EN updated 2026-09-26

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | What Is Rake in Poker? How the House Gets Paid — and How Much You Really Pay (76자) |
| seoTitle | The Fee Quietly Eating Your Winnings — What Is Poker Rake? (58자) |
| desc | Rake is the fee the house takes from most cash-game pots. How pot rake, time charges and tournament fees work, what you really pay, and what rakeback returns. (158자) |
| tldr | Rake is the small cut the cardroom takes from most pots to host the game — usually 2.5–10% up to a cap of a few dollars. Most rooms take nothing if everyone folds before the flop ('no flop, no drop'). It hits low-stakes and short-handed players hardest, and rakeback returns a slice of it to regulars. (301자) |
| category | glossary |
| readTime | 11 min |
| emoji | 🏦 |
| image | /images/holdem-rake-hero.webp |
| imageAlt | A dealer pulling a small stack of chips from the center pot into the rake drop slot on a green felt table |
| date | 2026-07-04 |
| tags | ["rake", "what is a rake in poker", "poker rake explained", "rakeback", "poker rake cap", "time rake", "tournament rake", "how does rake work in poker"] |

### 구조 (EN L## · 축어)

- L25 ### Rake at a glance
- L36 ## What Is Rake in Poker?
- L44 ## How Is Rake Taken? Pot Rake, Time Charge & Dead Drop
- L70 ## How Much Rake Do You Actually Pay?
- L93 ## What Is Rakeback?
- L108 ## Do Tournaments Have Rake?
- L120 ## Online vs Live Rake: Which Is Higher?
- L136 ## FAQ
- L184 ## The 3 Things to Remember
- L194 ## Related Posts

FAQ 11문항 · 마크다운 표 2개 · HTML 카드 블록(<div style…>) L50 L80 L196 · 디렉티브: L27 stripe · L99 compare · L112 pull · L131 readnext[Keep reading]

**FAQ 문항(EN 축어)**
- L138 Q. What is a rake in poker?
- L142 Q. How is rake calculated?
- L146 Q. Who pays the rake in poker?
- L150 Q. Do you pay rake if everyone folds before the flop?
- L154 Q. How much rake is taken in a live $1/$2 game?
- L158 Q. What is rakeback?
- L162 Q. How can you pay less rake in poker?
- L166 Q. Is taking a rake illegal? Why is taking a rake in poker illegal?
- L170 Q. Do poker tournaments have rake?
- L174 Q. How does rake affect your win rate?
- L178 Q. Is online or live poker rake higher?

**본문 이미지(경로·alt·캡션 축어 — B는 경로 그대로, alt·캡션만 말레이어로)**
- L46 /images/holdem-rake-drop.webp — alt: A dealer sweeping a few chips from the center of the pot into the table's rake slot before pushing the rest to the winner — caption: Pot rake: a small percentage skimmed from the pot and dropped before the winner is paid
- L72 /images/holdem-rake-lowstakes.webp — alt: A modest pot of chips on the felt with a couple of dollars already pulled aside as rake, showing how much a single hand quietly costs — caption: In low-stakes games the cap barely moves as pots grow, so small pots are proportionally raked the hardest

**원시 HTML 줄(축어로 옮길 것)**
- L197   <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0
- L202   <a href="/en/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad
- L207   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-rad
- L212   <a href="/en/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-r

**readnext 카드(EN 축어)**
    :::readnext[Keep reading]
    /en/blog/holdem-straddle | What Is a Straddle in Poker? | /images/holdem-straddle-hero.webp
    /en/blog/holdem-tournament-vs-cash-game | Tournament vs Cash Game | /images/tournament-table-action.webp
    :::

### 링크 — 편차 0
대상: glossary(썸네일 L21) · tournament-vs-cash-game(썸네일 L40 · L116) · pot-odds(L89 · L190) · straddle(L190) · 관련 글 카드 tournament-vs-cash-game·straddle·pot-odds·tournament. 전부 51편 안.

### 키워드 (실측 2026-09-26 · 상세 `docs/keyword-bank/ms-gloss.md` §holdem-rake)
| 키워드 | 월 | 자리 |
|---|---:|---|
| rake poker · poker rake · what is rake in poker | 30(한 클러스터 · 합산 금지) | seoTitle·H1 «Rake Poker» / «Rake dalam Poker» |
| rakeback · rakeback meaning · rakeback poker | 20 · 10 · 10 | H2 「What Is Rakeback?」 · FAQ |
| no flop no drop | 10 | H2 「How Is Rake Taken?」 안 굵게 · FAQ |
| poker rake calculator · rake poker cash game | 10 | H2 「How Much Rake Do You Actually Pay?」 표 |
| apa itu rake dalam poker · tournament rake · time charge poker | null | 말레이어 H2 질문형 · FAQ |
| 🔴 버림 | | rake 단독 3,600(갈퀴 · «maksud rake the leaves») · rakeback casino/deals/브랜드(제휴 의도) |

### 현지 SERP
- 「rake poker」 · 「apa itu rake dalam poker」(ms): 스팸(gov 도메인 도박앱) 2 · Amazon · 2+2 포럼(2018) · **poker.md/ms**(유일한 말레이어 글 = 제휴 광고 · 기계번역 «periuk·had topi·tirai·Tanpa Flop, Tanpa Penurunan») · GGPoker id(인니어) · reddit 기계번역.
- Google 지식그래프(자동번역) 축어: «Rake ialah yuran komisen berskala yang diambil oleh bilik kad yang mengendalikan permainan poker. Ia biasanya 2.5% hingga 10% daripada periuk…» → **우리 EN 수치(2.5–10%)와 일치** · 표기(periuk)는 따르지 마라.
- **PAA 축어**: «Why do people take a rake in poker?» · «Is 10% rake beatable?» · «What does 20% rakeback mean?» · «Why does Molly take a rake?»(→ EN FAQ L166 *Molly's Game* 언급과 연결)
- **우리가 더 줄 것 3가지**: ① «1시간에 실제로 얼마 내나» 산수(EN L76 $1/$2 · L78~85 NL50 cap 비교표) — 말레이어 경쟁 글에 계산 0 ② 라이브 3방식(pot rake · time charge · dead drop) 한 표 ③ 1인칭 «break-even인데 돈이 사라진 한 달» + rakeback 개념을 광고 없이.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)

**title (H1)**: Apa Itu Rake dalam Poker? Cara Bilik Kad Dapat Bayaran dan Berapa Anda Bayar

**seoTitle**: Yuran senyap makan untung anda — Apa Itu Rake dalam Poker (57)
- EN 훅 «The Fee Quietly Eating Your Winnings» 유지. bare rake(3,600)는 갈퀴라 «dalam Poker» 필수.

**desc**: Rake ialah bayaran bilik kad daripada kebanyakan pot cash game. Pot rake, time charge, yuran tournament, berapa anda sebenarnya bayar dan apa itu rakeback.

**tldr**:
Rake ialah potongan kecil yang bilik kad ambil daripada kebanyakan pot sebagai bayaran menganjurkan permainan — biasanya 2.5–10% sehingga had (cap) beberapa dolar. Kebanyakan bilik tidak mengambil apa-apa jika semua orang fold sebelum flop ('no flop, no drop'). Rake paling memberi kesan kepada pemain stake rendah dan meja short-handed, dan rakeback memulangkan sebahagian daripadanya kepada pemain tetap.

**H2 set** (EN 10 → ms 10 · 질문형 6/6):
1. ### Ringkasan pantas ← Rake at a glance
2. ## Apa Itu Rake dalam Poker? ← What Is Rake in Poker?
3. ## Bagaimana Rake Diambil? Pot Rake, Time Charge & Dead Drop ← How Is Rake Taken? Pot Rake, Time Charge & Dead Drop
4. ## Berapa Banyak Rake yang Anda Sebenarnya Bayar? ← How Much Rake Do You Actually Pay?
5. ## Apa Itu Rakeback? ← What Is Rakeback?
6. ## Adakah Tournament Juga Kena Rake? ← Do Tournaments Have Rake?
7. ## Rake Online vs Live: Mana Lebih Tinggi? ← Online vs Live Rake: Which Is Higher?
8. ## Soalan Lazim ← FAQ
9. ## 3 Perkara untuk Diingati ← The 3 Things to Remember
10. ## Artikel Berkaitan ← Related Posts

**FAQ questions** (11):
1. Apa itu rake dalam poker?
2. Bagaimana rake dikira?
3. Siapa yang bayar rake dalam poker?
4. Kena bayar rake ke jika semua orang fold sebelum flop?
5. Berapa rake yang diambil dalam permainan live $1/$2?
6. Apa itu rakeback?
7. Bagaimana cara bayar rake lebih sedikit dalam poker?
8. Adakah mengambil rake dalam poker menyalahi undang-undang?
9. Adakah poker tournament ada rake?
10. Bagaimana rake menjejaskan win rate anda?
11. Rake poker online atau live yang lebih tinggi?

- FAQ #8 답은 EN의 중립 답을 그대로 옮긴다 — 판정 없음. «haram» 같은 종교적 어휘 금지 (말레이시아 맥락에서 별개 의미).
- FAQ #6: PAA «What does 20% rakeback mean?»의 20%는 EN 원문에 없어 질문에 넣지 않았다.

**tags** (8):
["rake poker", "poker rake", "what is rake in poker", "rakeback", "rakeback meaning", "no flop no drop", "apa itu rake dalam poker", "maksud rake dalam poker"]
- «poker rake calculator»(10)는 글에 계산기가 없어 태그 제외.

**absorbed keywords**:
- rake poker / poker rake / what is rake in poker (30) + PAA "Why do people take a rake in poker?" → seoTitle / title / H2 #2 / FAQ #1 / tag
- rakeback (20) · rakeback meaning (10) → H2 #5 / FAQ #6 / desc / tag — 🔴 개념 설명만, 딜·사이트명·추천 없음
- no flop no drop (10) → FAQ #4 / tldr / tag
- PAA "Is 10% rake beatable?" → H2 #4 (Berapa Banyak Rake…) + FAQ #10 (win rate) 본문 직답 — 숫자 10%는 EN tldr «2.5–10%» 범위 안
- PAA "What does 20% rakeback mean?" → FAQ #6 본문에서 «peratus rakeback» 개념으로만 (20% 수치 미기재)
- poker rake calculator (10) → 미흡수 (계산기 없음)

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 수치·카드를 한 글자도 바꾸지 않는다)

- L28 2.5–10% | Typical pot rake range
- L29 $3–$6 | Common live rake cap
- L31 20–40% | Typical rakeback deal
- L54 | **Pot rake (scaled)** | % of eligible pots, up to a cap | 2.5–10%, capped $1–$6 | Most low/mid cash games, online |
- L55 | **Time charge** | Flat fee per player, every 30 min | ~$10–$15 per hour | High-stakes live ($10/$20+), and every stake where pot rake isn't an option |
- L57 | **Tournament fee** | Charged with the buy-in up front | ~5–20% of buy-in | Almost every tournament |
- L64 - **The rake cap.** The house never takes the full percentage on a huge pot — it stops at a maximum, commonly **$3–$6 live** and **$1–$3 online**. Caps do rise as the stakes rise, but not proportionally — they move in coarse steps, so several stakes often share the same cap. On top of that they often shrink when fewer players are dealt in (a heads-up pot might be capped at $1).
- L65 - **Time charge instead of pot rake.** At higher stakes, rooms often stop raking pots and instead collect a flat fee — say $10–$15 an hour per player, taken every half-hour. This favors players who win big pots — though what you save is the *capped* rake, not a slice of the pot: against a $3–$6 cap, a $2,000 pot was only ever giving up a few dollars.
- L74 Here's the part that changed how I think about the game. The percentage sounds tiny — 5%, capped at a few bucks — but you pay it on nearly every pot you win, for hours.
- L76 **A live $1/$2 game.** With 10% rake capped at $5 and roughly 30 hands dealt an hour, most contested pots hit or near the cap. A single busy table can pay **$100+ an hour** into the drop between all the players. That money comes straight out of the collective winnings — it's the reason a table full of roughly even players slowly bleeds chips to the house.
- L78 **The low-stakes "rake trap."** This is the punchline every beginner should hear. Because the cap barely falls as you move down in stakes, the *lower* you play, the *bigger* a bite the rake takes proportionally. Here is a worked example at online NL50 (illustrative — the exact figure moves with how many pots you contest and how the room applies its cap, not with how many hands you log). The two caps below sit one inside the usual online band and one outside it: $2 is inside the $1–$3 most rooms post, $4 is above it.
- L84 | Room with a **$2 cap** | ~5 bb/100 | +8 bb/100 win rate stays a **winner (+3)** |
- L85 | Room with a **$4 cap** | ~8–9 bb/100 | +8 bb/100 breaks even or turns into a **loser (0 to −1)** |
- L95 Since the house profits from the volume you generate, most rooms give some of it back to keep you playing. **Rakeback is a percentage of the rake you personally pay, returned to you** — usually through points, cashback, or a loyalty program, paid out weekly or monthly. A 30% rakeback deal simply means you get back 30 cents of every dollar you rake.
- L104 For a casual player, rakeback is a minor perk. For a high-volume regular it's enormous: the gap between a 20% and a 40% deal scales with the rake you actually generate, so it only turns into serious money if you're putting in real volume at meaningful stakes — and for many break-even grinders, rakeback *is* their profit. It effectively lowers your true rake, so it's worth checking before you pick where to play. Just be aware that much of the rakeback advice online is affiliate-driven — treat "sign up here" pages with the skepticism you'd give any sales pitch.
- L113 A **$100 + $9** tournament means $100 goes into the prize pool and **$9 is the house's fee.**
- L116 That fee — also called the **juice** or **vig** — is the tournament equivalent of rake. It's usually **5–20% of the buy-in**, and it's flat: you pay it whether you bust first or win the whole thing. Lower buy-ins carry proportionally higher fees (a $3 + $0.30 sit-and-go is 10%), and because fast **turbo formats compress your edge**, the fee bites hardest there — the lower the percentage, the more of your skill survives it. Since a tournament's structure is entirely different from a cash game's, the way you pay to play is too — a distinction worth understanding alongside the [tournament vs cash game](/en/blog/holdem-tournament-vs-cash-game) fundamentals.
- L124 - **Live rake** tends to be a **higher percentage (often 10%) with a higher cap ($3–$6)** — but you only play ~30 hands an hour, so you pay it fewer times.
- L125 - **Online rake** is usually a **lower percentage (3–5%) with a smaller cap ($1–$3)** — but you might see 250+ hands an hour across multiple tables, so a volume grinder can pay *more* rake per hour than a live player despite the lower rate.
- L127 The lesson: never judge rake by the percentage alone. What matters is what you actually pay per pot — the percentage, up to the cap — **times how often you pay it.** A "cheap" 5% online game you four-table can cost you more than a "pricey" 10% live game — which is exactly why rakeback and table selection matter more online.
- L140 A. Rake is the fee a cardroom takes from a cash game for hosting it — normally a small percentage of eligible pots (2.5–10%) up to a capped maximum. Because the house doesn't play, the rake is its main source of revenue. Tournaments charge an equivalent fee built into the buy-in instead.
- L154 **Q. How much rake is taken in a live $1/$2 game?**
- L156 A. Commonly 10% of the pot capped at around $5. Most contested pots reach the cap, so a single busy table can drop $100 or more per hour collectively. That fee is why a table of evenly matched players slowly loses chips to the house over time.
- L160 A. Rakeback returns a percentage of the rake you personally pay — often 20–40% — through points, cashback, or a loyalty program. It effectively lowers your true rake. For casual players it's a small perk; for high-volume regulars it can be the difference between a losing and a winning year.
- L172 A. Yes, but not from the pot. The fee is collected with your entry payment. A split price such as $100 + $9 sends $100 to the prize pool and $9 to the house; series such as the WSOP instead quote one buy-in with the fee already included. That fee (the "juice" or "vig") is typically 5–20% of the buy-in and is paid regardless of how you finish.
- L176 A. Significantly — most of all at low stakes, where the cap doesn't scale down with the stakes. Short-handed adds a second effect that has nothing to do with the cap: the same rake per pot is shared by fewer players, and you post the blinds far more often per 100 hands — so your share per hand goes up. (Per *hour* you also pay more, simply because more hands run, but that is a different question from bb/100.) Rake can turn a small winner into a loser: the same +8 bb/100 player can end up slightly negative simply by moving to a room with a higher rake cap. Always measure your win rate after rake.
- L186 1. **Rake is the house's cut for hosting the game** — usually 2.5–10% of eligible pots up to a small cap, and it's separate from what you win or lose to opponents.
- L188 3. **Rakeback and structure matter.** Getting 20–40% of your rake back, and choosing rooms with player-friendly caps, can flip your long-term result — measure everything *after* the rake.

### 경험담 자리 — EN 1인칭 축어 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)

- L19 It took me a depressing month of "break-even" sessions to figure out where my money was actually going. I wasn't losing to the other players — I was beating them, slightly. I was losing to the ==house's cut on every pot I won.== That quiet fee is called the **rake**, and until you understand it, you can be a winning player on paper and a losing one at the cashier.
- L74 Here's the part that changed how I think about the game. The percentage sounds tiny — 5%, capped at a few bucks — but you pay it on nearly every pot you win, for hours.

### 하지 말 것
- **금액은 달러 그대로 · 링깃 환산 금지.** $3–$6 · $1–$3 · $10–$15 · $100+ · $2,000 · NL50 · $100 + $9 · $3 + $0.30 전부 EN 축어.
- rakeback: **사이트명·거래 추천·순위표·링크 금지**(EN에도 없다).
- FAQ L166 «Is taking a rake illegal?» — EN 답(«허가된 bilik kad·kasino·규제 온라인의 사업 모델 · 규제는 관할마다 다름 · 홈게임은 비용 분담 · *Molly's Game*»)의 **범위 그대로.** 말레이시아 법·처벌·«haram/judi» 판정을 보태지 마라(posting.mdc 합법성 금지). 질문 문구도 판정형으로 강화하지 마라.
- L78 «illustrative» 단서 · L85 «breaks even or turns into a loser (0 to −1)» 범위 표기 축어.


---

## holdem-straddle — EN updated 2026-09-26

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | What Is a Straddle in Poker? Rules, Types, and Whether You Should (65자) |
| seoTitle | The Bet That Doubles the Stakes — What Is a Poker Straddle? (59자) |
| desc | A straddle is a voluntary blind that doubles the stakes before cards are dealt. The rules, every straddle type, who acts first, and whether it's profitable. (156자) |
| tldr | A straddle is an optional blind bet — usually twice the big blind — posted before the cards are dealt. It buys the straddler the last action preflop and the option to raise, doubling the stakes. In almost every case it's a -EV play, and outside cash games it's almost never allowed. (282자) |
| category | glossary |
| readTime | 10 min |
| emoji | 💰 |
| image | /images/holdem-straddle-hero.webp |
| imageAlt | An under-the-gun player posting an extra blind bet of two chips in front of the big blind before the cards are dealt |
| date | 2026-07-04 |
| tags | ["straddle", "what is a straddle in poker", "poker straddle rules", "mississippi straddle", "button straddle", "sleeper straddle", "is straddling profitable", "utg straddle"] |

### 구조 (EN L## · 축어)

- L25 ### Straddle at a glance
- L36 ## What Is a Straddle in Poker?
- L49 ## How a Straddle Works: Who Acts First and Last
- L67 ## Types of Straddle (UTG, Mississippi, Button & Sleeper)
- L97 ## How Much Is a Straddle?
- L110 ## Is Straddling Allowed in Tournaments?
- L118 ## Is Straddling Profitable? Should You Straddle?
- L145 ## FAQ
- L185 ## The 3 Things to Remember
- L195 ## Related Posts

FAQ 9문항 · 마크다운 표 1개 · HTML 카드 블록(<div style…>) L73 L197 · 디렉티브: L27 stripe · L55 steps · L124 card · L140 readnext[Keep reading]

**FAQ 문항(EN 축어)**
- L147 Q. What is a straddle in poker?
- L151 Q. How much is a straddle in poker?
- L155 Q. Who acts first after a straddle?
- L159 Q. Who can straddle in poker? Can anyone straddle?
- L163 Q. Is a straddle considered a raise?
- L167 Q. What is a Mississippi straddle?
- L171 Q. What is a sleeper straddle?
- L175 Q. Is straddling allowed in tournaments?
- L179 Q. Is straddling profitable? Should you straddle?

**본문 이미지(경로·alt·캡션 축어 — B는 경로 그대로, alt·캡션만 말레이어로)**
- L51 /images/holdem-straddle-action-order.webp — alt: Preflop action order with a $4 UTG straddle over $1/$2 blinds — UTG+1 acts first, the straddler acts last, and the minimum raise doubles to $8 — caption: A live UTG straddle turns the seat left of the big blind into a third blind — the straddler now acts last before the flop
- L69 /images/holdem-straddle-button.webp — alt: A straddle bet posted beside the dealer button, showing a button or Mississippi straddle posted from the seat that already acts last after the flop — caption: A button (Mississippi) straddle posts from the button — the one straddle posted from the seat that already acts last after the flop
- L120 /images/holdem-straddle-bloated-pot.webp — alt: A large bloated pot of mixed chips piled in the middle of the felt, the inflated pot a straddle creates before anyone has seen a card — caption: A straddle doubles the blind and bloats the pot — money committed before a single card is seen

**원시 HTML 줄(축어로 옮길 것)**
- L198   <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);borde
- L203   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);borde
- L208   <a href="/en/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);bor
- L213   <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0

**readnext 카드(EN 축어)**
    :::readnext[Keep reading]
    /en/blog/holdem-blind-meaning | What Are the Blinds in Poker? | /images/holdem-blind-meaning-hero.webp
    /en/blog/holdem-position-play | How Position Changes Everything | /images/holdem-position-play-hero.webp
    :::

### 링크 — 편차 0
대상: glossary(썸네일 L21) · blind-meaning(썸네일 L45 · L191) · pot-odds(L106) · tournament-vs-cash-game(L114) · rake(L127) · position-play(L136 · L191) · betting-actions(L191) · 관련 글 카드 blind-meaning·position-play·betting-actions·tournament-vs-cash-game. 전부 51편 안.
외부 링크 L126 `https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/` — URL 그대로 · 앵커만 말레이어(«simulasi GTO Wizard untuk pot straddle» 등).

### 키워드 (실측 2026-09-26 · 상세 `docs/keyword-bank/ms-gloss.md` §holdem-straddle)
| 키워드 | 월 | 자리 |
|---|---:|---|
| straddle poker · poker straddle · what is a straddle in poker | 30(한 클러스터) | seoTitle·H1 «Straddle Poker» / «Straddle dalam Poker» |
| straddle poker meaning | 10 | desc · 첫 H2 직답 |
| mississippi · utg · button · sleeper · double straddle | 각 10 | H2 「Types of Straddle」 표 · FAQ |
| poker straddle strategy · (PAA) is straddle profitable | 10 | H2 「Is Straddling Profitable?」 |
| apa itu straddle dalam poker · straddle maksud (자동완성 실재 · 볼륨 null) | — | 말레이어 H2 질문형 |
| who can straddle / can anyone straddle (related 2회 반복) | — | FAQ 「Who can straddle in poker?」 |
| 🔴 버림 | | straddle 단독 3,600(옵션거래·체조·높이뛰기) |

### 현지 SERP
- 「apa itu straddle dalam poker」(ms): 1위 **ms.wikipedia «Poker»(straddle 언급 0 · 인니어 혼입)** · 2위 reddit 기계번역 · 나머지 인니어(WPT Global id · eferrit MT «mengangkang·buta besar»). 말레이어 전용 글 **0건**.
- **PAA 축어**: «What is an example of a straddle?» · «How to straddle on poker now?» («Is straddle strategy profitable?»·«How risky is a straddle?»는 옵션거래 문구 혼입 가능 — 포커 맥락으로만 답한다)
- **우리가 더 줄 것 3가지**: ① EN :::steps 행동 순서(UTG straddle 시 UTG+1 먼저 · straddler 마지막 · min-raise $8) ② 스택 깊이 산수(EN L125 · $200 = 100 BB → straddle 하에서 절반) ③ 1인칭 «rich-guy bet» 경험담 + «siapa boleh straddle / dalam tournament?» FAQ 직답.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)

**title (H1)**: Apa Itu Straddle dalam Poker? Peraturan, Jenis dan Patutkah Anda Buat (69)

**seoTitle**: Bet yang gandakan stake — Apa Itu Straddle dalam Poker (54)
- EN 훅 «The Bet That Doubles the Stakes» 유지. bare straddle(3,600)은 옵션거래/체조라 «dalam Poker» 필수.

**desc**: Straddle ialah blind sukarela yang menggandakan stake sebelum kad diedar. Peraturan, jenis straddle, siapa bertindak dahulu dan adakah ia menguntungkan. (152)
- 카니발 주의: 기존 holdem-blind-meaning의 «blind tambahan sukarela (biasanya 2x BB)» 문장을 반복하지 않음 — 이 글은 «메커니즘(마지막 액션·raise 옵션)·유형·EV»로 더 깊이 간다.

**tldr**:
Straddle ialah bet blind pilihan — biasanya dua kali ganda big blind — yang dipasang sebelum kad diedar. Ia memberi straddler tindakan terakhir preflop dan pilihan untuk raise, sekali gus menggandakan stake. Dalam hampir setiap kes ia permainan -EV, dan di luar cash game ia hampir tidak pernah dibenarkan.

**H2 set** (EN 10 → ms 10 · 질문형 5/6 = 83%):
1. ### Ringkasan pantas ← Straddle at a glance
2. ## Apa Itu Straddle dalam Poker? ← What Is a Straddle in Poker?
3. ## Bagaimana Straddle Berfungsi: Siapa Bertindak Dahulu dan Terakhir? ← How a Straddle Works: Who Acts First and Last
4. ## Jenis-jenis Straddle (UTG, Mississippi, Button & Sleeper) ← Types of Straddle (UTG, Mississippi, Button & Sleeper)
5. ## Berapa Jumlah Straddle? ← How Much Is a Straddle?
6. ## Adakah Straddle Dibenarkan dalam Tournament? ← Is Straddling Allowed in Tournaments?
7. ## Adakah Straddle Menguntungkan? Patutkah Anda Straddle? ← Is Straddling Profitable? Should You Straddle?
8. ## Soalan Lazim ← FAQ
9. ## 3 Perkara untuk Diingati ← The 3 Things to Remember
10. ## Artikel Berkaitan ← Related Posts

- «who can straddle / can anyone straddle»(related searches 반복)은 EN FAQ #4가 이미 덮어 현지 H2를 추가하지 않았다. 필요하면 «## Siapa Boleh Straddle?» «현지 추가» H2를 #3 뒤에 넣을 수 있다 (선택).

**FAQ questions** (9):
1. Apa itu straddle dalam poker?
2. Berapa jumlah straddle dalam poker?
3. Siapa bertindak dahulu selepas straddle?
4. Siapa boleh straddle dalam poker? Sesiapa pun boleh straddle ke?
5. Adakah straddle dikira sebagai raise?
6. Apa itu Mississippi straddle?
7. Apa itu sleeper straddle?
8. Adakah straddle dibenarkan dalam tournament?
9. Adakah straddle menguntungkan? Patutkah anda straddle?

**tags** (8):
["straddle poker", "what is a straddle in poker", "mississippi straddle", "utg straddle", "button straddle", "sleeper straddle", "apa itu straddle dalam poker", "straddle maksud"]

**absorbed keywords**:
- straddle poker / poker straddle / what is a straddle in poker (30) → seoTitle / title / H2 #2 / FAQ #1 / tag
- apa itu straddle dalam poker (autocomplete) → FAQ #1 축어 / tag
- straddle maksud (autocomplete) → tag
- mississippi straddle (10) → H2 #4 / FAQ #6 / tag
- utg straddle (10) · button straddle (10) · sleeper straddle (10) → H2 #4 / FAQ #7 / tag
- double straddle poker (10) → H2 #4 본문 항목으로 흡수 (EN H2 괄호에 없어 H2 문구엔 미기재)
- who can straddle / can anyone straddle (related) → FAQ #4
- PAA "What is an example of a straddle?" → H2 #3 본문 예시
- PAA "How to straddle on poker now?" → H2 #3 (절차) — 옵션거래형 PAA는 무시

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 수치·카드를 한 글자도 바꾸지 않는다)

- L19 The first time someone straddled at my $1/$2 table, I had no idea why the guy under the gun tossed out $4 before the cards came — and why the dealer suddenly started the action one seat further along. I called it "the rich-guy bet" for about a month before I learned what it actually does: a straddle ==doubles the stakes and buys one player the last word before the flop==, all before anyone has looked at a card.
- L38 **A straddle is a voluntary blind bet — normally twice the big blind — posted before the cards are dealt.** In a $1/$2 game the under-the-gun player (immediately left of the big blind) can drop $4 "on the straddle," and the game instantly plays like a $1/$2/$4 table for that hand.
- L51 ![Preflop action order with a $4 UTG straddle over $1/$2 blinds — UTG+1 acts first, the straddler acts last, and the minimum raise doubles to $8](/images/holdem-straddle-action-order.webp "A live UTG straddle turns the seat left of the big blind into a third blind — the straddler now acts last before the flop")
- L53 This is the part definition pages skip, and it's where new players get lost. A straddle **rearranges the preflop action order.** Walk through a standard $1/$2 game where UTG straddles to $4:
- L56 UTG posts the straddle | The under-the-gun player puts out $4 (2× the $2 big blind) before cards are dealt
- L58 Around the table | Everyone must call $4 (not $2) to play; they can fold, call, or raise — and the minimum raise is now $8, double the straddle, just as over a normal big blind
- L59 Blinds decide | The small and big blinds act in turn, facing the $4 price
- L91 - **Re-straddle (double straddle)** — a player to the left can straddle *over* a straddle, for a minimum of double the previous one ($4 → $8 → $16). Whether it's allowed, and from which seats, is pure house rules.
- L99 The standard straddle is **exactly 2× the big blind** — $4 in a $1/$2 game, $10 in a $2/$5 game. That's the default in nearly every cardroom.
- L104 - **Re-straddle progression** — where re-straddling is allowed, each one is at least double the last: $4, then $8, then $16, and so on. Games where the whole table straddles and re-straddles can balloon the effective stakes several times over.
- L125 🎯 | You commit blind | Money goes in before you see your cards, so you're playing a bloated pot with no information — the same disadvantage that makes the blinds the worst seats at the table. It also halves your effective depth: at $1/$2 a $200 stack is 100 big blinds, but with a $4 straddle on, the same stack plays like 50
- L126 📉 | It shrinks your positional edge | Doubling the blind bloats the starting pot and leaves more players still to act when you're in your best stealing seats. Counterintuitively, solvers respond by opening **fewer** hands from the button in straddled pots — around 15–20% fewer, per [GTO Wizard's straddled-pot sims](https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/) — not more
- L153 A. The standard straddle is 2× the big blind — $4 in a $1/$2 game. Some no-limit rooms allow larger or even uncapped (all-in) straddles, and where re-straddling is permitted each one must be at least double the previous straddle ($4, $8, $16, and so on).

### 경험담 자리 — EN 1인칭 축어 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)

- L19 The first time someone straddled at my $1/$2 table, I had no idea why the guy under the gun tossed out $4 before the cards came — and why the dealer suddenly started the action one seat further along. I called it "the rich-guy bet" for about a month before I learned what it actually does: a straddle ==doubles the stakes and buys one player the last word before the flop==, all before anyone has looked at a card.

### 하지 말 것
- 🔴 카니발: 기존 ms `holdem-blind-meaning` L122가 «blind tambahan *sukarela* (biasanya 2x BB)» 정의를 이미 쓴다 → 이 글 첫 직답은 **같은 문장 복사 금지**, EN L38 확장형(누가·언제·얼마·무엇을 사는가)으로.
- $1/$2 · $4 · $8 · $16 · $10($2/$5) · $200 · 100 big blinds · «15–20% fewer»(GTO Wizard 출처) 축어. 링깃 환산 금지.
- 옵션거래 «straddle»과 다르다는 구분은 필요하면 **1줄**만(EN에 없는 추가 설명 — 사실 주장 없이).
- 토너먼트 규정: EN L110~116 범위만 — 대회·룸 이름이나 추가 규정을 창작하지 마라.
