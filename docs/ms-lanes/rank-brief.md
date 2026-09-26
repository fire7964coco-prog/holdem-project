# ms-rank 브리프 — 🅰 족보 클러스터 5편 (A 구간 산출 · 2026-09-26)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5 · 키워드 근거 = `docs/keyword-bank/ms-rank.md`.
> EN 기준 = 브랜치 `harden-ms-rank` @ `4fd7dbb3`(main과 동일) · EN 5편 `updated` 전부 **2026-09-26** → ms `masterUpdated: "2026-09-26"`.

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 파일(읽기 전용 · 본문 골격 복사용)** — 정본 §3 🟢(🅱 파일럿 해석, 헤드 승인). 브리프에는 메타·H2/H3·FAQ 문항·이미지·디렉티브·링크·원시 HTML 줄·§13 카드 행·경험담을 **축어로** 실었다. 본문 산문·표는 `lib/posts-en/<slug>.ts`를 열어 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 열지 마라.** 사실·수치·카드의 출처는 EN 축어뿐이다.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-ms/holdem-hand-rankings.ts`의 필드 모양 복사. `masterUpdated: "2026-09-26"` · `date`/`updated` = 집필일 · `slug`·`image`·`keepImagesInBody: true` = EN과 동일 · `emoji` = EN 그대로 · 🔴 **content에 히어로 넣지 마라**(EN에도 없다 — 렌더러가 그린다).
- **EN 파일 꼬리**: kicker만 `export default POST;`가 있다 → ms도 그 편만 붙인다(다른 4편은 없음 · 등록은 `index.ts`가 `POST`를 import하는 모양을 따른다 — 기존 줄 확인).
- **등록**: `lib/posts-ms/index.ts`의 `// [ms-rank import 시작]`~`끝` · `// [ms-rank 배열 시작]`~`끝` 두 칸에만. 칸 밖 금지.

## 1. 공통 결정 (5편 전부)

### 1-A. 고정문 (정본 §1-A · 판단하지 말고 그대로)
| EN | ms |
|---|---|
| `> **Quick answer**` (flush-vs-straight L33 · split-pot L25 · reading-the-board L41) | `> **Jawapan ringkas**` |
| `:::readnext[Keep reading]` | `:::readnext[Baca seterusnya]` |
| `## FAQ` | `## Soalan Lazim` |
| `## Related Posts` | `## Artikel Berkaitan` |
| readTime `"11 min"` | `"11 minit"` (숫자 그대로) |
| category `"hand-rankings"` | `"hand-rankings"` (번역 금지) |
| 2인칭 | 문중 `anda` · 문두·제목 `Anda` |
| FAQ 형식 | `**Q. …?**` + 빈 줄 + `A. …` (EN과 동일 · 기존 ms 21편 관례 = Q./A. 영문자 유지) |

마무리 H2(EN «The Takeaways» · «The 3 Things to Remember»): 기존 ms 관례 = `## 3 Perkara untuk Diingati`(hand-rankings L397). → flush-vs-straight·tiebreak·split-pot·reading-the-board(«The Takeaways», 항목 3개) = **`## 3 Perkara untuk Diingati`** · kicker(«The 3 Things to Remember») = 같은 문구.
`### The Short Answer` / `### Kickers at a glance` / `### Tie-breaks at a glance` / `### The core numbers`(stripe 머리 H3) = `### Jawapan Pendek` / `### Kicker Sekali Pandang` / `### Pemecah Seri Sekali Pandang` / `### Angka Teras` — 🆕 신규(진행 파일 등재).

### 1-B. 검색 표면 = 말레이어 훅 + **영어 술어 토큰** (키워드 뱅크 §0)
말레이시아는 족보 주제를 영어로만 친다(말레이어형 볼륨 null 25종 · 말레이어 SERP에 말레이어 전문 글 0). → seoTitle·H2·태그에 `flush` · `straight` · `straight flush` · `full house` · `kicker` · `split pot` · `chop` · `playing the board` · `the nuts` · `board`를 **영어 그대로**, 문장은 말레이어로. 🅱 prob 레인과 같은 처방.

### 1-C. 용어 (정본 `ms-posting-reference.md` + 코퍼스 실측 2026-09-26 · 기존 ms 21편 grep 계수)
| EN | ms | 근거 |
|---|---|---|
| hand names (Royal Flush … High Card, one pair) | 영어 그대로. one pair = **Pair**(hand-rankings 선례) · 산문 «sepasang As» | hand-rankings L74~165 |
| tie | **seri** | 코퍼스 34 («pemecah seri», «apabila seri») · 🔴 태그·seoTitle에 «seri poker» 금지(인니어 seri = straight · 키워드 뱅크 §2) |
| tie-breaker | **pemecah seri** | hand-rankings desc·H2 |
| split pot / chop | **split pot**(술어) · 산문 «pot dibahagi» · 속어 «chop» | 코퍼스 dibahagi 12 · chop 3 · split pot 2 |
| kicker | **kicker** | 코퍼스 77 |
| side card | **kad sampingan** («kicker» 병기) | 코퍼스 1 |
| best five (cards) | **lima kad terbaik** | 코퍼스 25 |
| community cards / board | **kad komuniti** / **board** | 코퍼스 49 / 516 |
| hole cards | **hole card** (첫 등장 «hole card (dua kad peribadi anda)» 1회) | 코퍼스 hole card 10 · kad peribadi 2 · 🔴 «kad lubang»은 reddit 자동번역 표기 — 쓰지 마라 |
| suit | **suit** · 산문 «jenis kad» 허용 | 코퍼스 suit 65 · jenis kad 10 · hand-rankings «Jenis kad tidak pernah memecahkan seri» |
| dealer | **pengedar** | 코퍼스 54 |
| showdown · muck · side pot · main pot | showdown · muck · side pot · **pot utama** | 코퍼스 129 · 34 · 52 · 18 |
| trips · quads · boat | trips · quads · full house(«boat» 병기) | 코퍼스 96 · 25 · boat 7 |
| paired board | **board berpasangan** | 코퍼스 berpasangan 51 |
| dry / wet board | **board kering** / **board basah** | 코퍼스 kering 45 · basah 7 |
| the nuts | **the nuts** («nuts» 단독도) | 코퍼스 nuts 23 |
| wheel · Broadway | wheel · Broadway | 코퍼스 10 · 36 |
| counterfeit(ed) | **counterfeit** (첫 등장 «dipadamkan nilainya» 풀이 1회) | 코퍼스 1 · 🆕 풀이는 신규 |
| dominated (ace) | **As yang didominasi** («dominated ace» 병기) | 코퍼스 didominasi 1 |
| odd chip | **odd chip** («cip ganjil» 풀이 1회) | 🆕 코퍼스 0 — 신규 |
| kicker counts (first/second kicker) | **kicker pertama / kedua / ketiga** | 🆕 |
| cards speak | **"cards speak"** | showdown-rules H2 |
| rule citations | **Peraturan N TDA 2024** · **Peraturan N WSOP** (EN «TDA 2024 Rule 19» → «Peraturan 19 TDA 2024») | 코퍼스 «Peraturan 47-A TDA 2024», «Peraturan 16 TDA 2024» |
| card ranks in prose | As · K · Q · J · 10 (hand-rankings 선례 «sepasang As», «kicker K») | hand-rankings |
| 🔴 쓰지 마라 | kartu · kad lubang · seri poker(태그) · hitung · bisa · karena · uang · ronde · setelah · baru(→baharu) · adalah + 명사 · kerugian(→ 불리함은 kelemahan) · «berat»(가중치) | 정본 §3 |

### 1-D. 링크 — **편차 0**
5편의 EN 내부링크 대상은 전부 §0-A «51편» 안에 있다(기존 ms: `holdem-hand-rankings` · `texas-holdem-rules-for-beginners` · `holdem-showdown-rules` · `holdem-all-in-rules` · `holdem-tournament-vs-cash-game` / rank 레인 5편 / prob: `holdem-probability` / strat: `holdem-starting-hands-chart` / tour: `holdem-icm` / gloss: `holdem-glossary`). 제외 대회 가이드 5편으로 가는 링크 **없음**.
→ **EN 링크를 전부 그대로** `/ms/blog/<slug>`로. 썸네일 인자 `"thumb:/images/…"` 그대로. 앵커 텍스트만 말레이어.
- 페이지 내 앵커 `(#…)` **0건** · `<a id=` **0건**(5편 전부 grep 확인). 외부 링크 **0건**.
- readnext 카드 줄 = `/ms/blog/<slug> | <ms 제목> | <이미지 그대로>`.

### 1-E. 원시 HTML 줄 (축어 · 스타일 문자열 한 글자도 바꾸지 마라)
- **관련 글 그리드**(`## Artikel Berkaitan` 아래 `<div style="display:grid;…">`): href만 `/ms/blog/…`, 카드 안 3줄(라벨·제목·설명)만 말레이어. `onmouseover`/`onmouseout` 속성 그대로.
- **크림 박스**(`<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:…;margin:…">` … `</div>`): 표·카드 블록을 감싼다. 여는 줄·닫는 줄·**앞뒤 빈 줄**까지 EN 그대로(빈 줄이 없으면 마크다운 표가 안 그려진다).
- 디렉티브(`:::stripe` · `:::tip[…]:::` · `:::note[…]:::` · `:::hand[카드] 라벨:::` · `:::compare` · `:::steps` · `:::tiebreak`) = 형식 그대로, 사람이 읽는 글자만 번역. `:::hand[…]`의 카드 목록은 **축어**, 뒤 라벨 «Board (5 cards)» → **«Board (5 kad)»**(hand-rankings L211 선례) · «Board (4 cards, turn)» → «Board (4 kad, turn)».
- `:::compare` / `:::stripe` / `:::steps` / `:::tiebreak`는 줄 단위 `|` 구분 — `|` 개수 보존.

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩(굵은 문장 안 강조는 `==…==`) · tldr 안 마크다운 · 「lengkap / panduan lengkap / semua yang anda perlu tahu」류 마무리 · slug·이미지 변경 · 인니어 · **말레이시아 카지노·대회·금액 창작**(EN 경험담은 장소·금액이 없다 — 없는 채로 옮겨라) · 법 조문·처벌 언급 추가 · 하이라이트 색(`==g:` `==r:` `==b:` `==`) 변경.
PAA의 «Does 3 of a kind beat a flush?»·«straight flush vs quads»는 EN compare 표·FAQ가 이미 답한다 → **새 문단을 만들지 말고** 확정 카피의 H2/FAQ 문구로만 받는다.

### 1-G. 형제 글 인용 규칙
tiebreak-rules의 `:::tiebreak` 10행은 **기존 ms `holdem-hand-rankings.ts` L186~197의 행을 축어 복사**한다(사이트 안 같은 표가 두 번역으로 갈리지 않게). 단 1행만 EN이 다르다(hand-rankings EN «Tie only when…» vs tiebreak EN «Two of them only happens when…») — 뜻이 같으므로 ms 1행도 hand-rankings 것 그대로 써도 된다: `Royal Flush|Seri hanya jika board itu sendiri royal flush — semua berkongsi pot|-Tiada kicker`.
나머지 9행(축어):
```
Straight Flush|Hanya kad tertinggi|-Tiada kicker
Four of a Kind|Nilai quad → kad ke-5|+Guna kicker
Full House|Nilai trio → pasangan|-Tiada kicker
Flush|Kelima-limanya, tinggi ke rendah|-Tiada kicker
Straight|Hanya kad tertinggi|-Tiada kicker
Three of a Kind|Nilai trio → 2 kicker|+Guna kicker
Two Pair|Pasangan tinggi → rendah → kicker|+Guna kicker
Pair|Nilai pasangan → 3 kicker|+Guna kicker
High Card|Kelima-limanya, tinggi ke rendah|+Guna kicker
```

---

## holdem-flush-vs-straight — EN updated 2026-09-26

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Does a Flush Beat a Straight? The Math and the Misreads |
| seoTitle | Does a Flush Beat a Straight? Yes — and What Beats a Flush |
| desc | Slid a straight forward — and a flush took the pot? A flush always beats a straight. Here's the math, what beats a flush, and 3 boards that fool players. |
| tldr | A flush (five cards of one suit — ~0.197% of five-card deals) always beats a straight (five in sequence, ~0.392%) in Texas Hold'em — because a flush is rarer: across all seven cards to the river, 3.03% versus 4.62% for the straight. |
| category · date · readTime · emoji | hand-rankings · 2026-06-13 · 11 min · ⚡ |
| image | /images/holdem-flush-vs-straight-hero.webp |
| imageAlt | Infographic: ace-high flush A♠ J♠ 9♠ 6♠ 2♠ beside a nine-high straight with a gold FLUSH WINS badge explaining why a flush ranks higher |
| tags | "does a flush beat a straight", "flush vs straight", "what beats a flush", "what is a straight flush", "why does a flush beat a straight", "flush vs full house", "higher flush", "flush and straight difference" |

**ms 태그(확정)**: `"flush vs straight"`, `"does a flush beat a straight"`, `"straight flush"`, `"flush poker"`, `"flush vs full house"`, `"what beats a flush"`, `"straight poker"`, `"flush menang straight"` — 앞 7개는 실측 볼륨(390·320·110·50·50·10·10), 마지막 1개는 말레이어 표면(볼륨 null · 본문 H2 형태소와 일치시키는 용도).

### 구조 (EN L## · 축어)
- L19~21 인트로 2단락(경험담 — 아래 «경험담 자리»)
- L25 ### The Short Answer → L27 `:::stripe` 3행 → L33 `> **Quick answer**` 블록(2줄)
- L38 ## Does a Flush Beat a Straight? Where the Two Hands Sit — 표 1(Rank|Hand|Example, 5행) · L50 hand-rankings 링크(thumb)
- L54 ## Why Does a Flush Beat a Straight? The Math — 표 2(Hand|Combinations|Probability|Verdict, 5행) · L68 probability 링크(thumb)
- L70 ### Why this feels backwards · L74 `:::tip[…]:::`
- L78 ## 3 Board Spots That Still Fool Players · L80 이미지 `holdem-flush-vs-straight-board.webp`(alt+title) · L82 reading-the-board 링크
- L84 ### Spot 1 — You make a straight, but the board is three of a suit · L86 `:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 cards):::`
- L90 ### Spot 2 — A made straight with a flush draw on top · L92 `:::hand[8♥,7♥,6♠,2♣] Board (4 cards, turn):::` · L96 «Two warnings» 단락
- L98 ### Spot 3 — You have the flush, they table a straight · L100 `:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 cards):::`
- L106 ## What Beats a Flush in Poker? · L110 `:::compare` 6행(머리 1 + 5) · L121 `:::hand[K♠,9♠,9♥,4♠,2♦] Board (5 cards):::` · L125 tiebreak 링크
- L129 ## Flush vs Flush, Straight vs Straight — Who Wins the Tie? — 표 3(Player|Flush|Result) · 불릿 2 · 표 4(Player|Straight|Result) · L150 split-pot 링크
- L154 ## What Is a Straight Flush? When Both Happen at Once · L156 이미지 `holdem-flush-vs-straight-sf.webp` · 불릿 2
- L169 ## Are Poker Hands Ranked Differently in Short Deck?
- L175 `:::readnext[Keep reading]` 2줄(tiebreak · split-pot)
- L180 ## FAQ — **8문항** · L216 ## The Takeaways(번호 3) + L222 링크 3개 · L226 ## Related Posts(그리드 카드 3: hand-rankings · tiebreak · split-pot)
- 표 **4** · 이미지(본문) **2** · 디렉티브 stripe·tip·hand×4·compare·readnext

**FAQ 문항(EN 축어)**
- L182 Q. Does a flush beat a straight in poker?
- L186 Q. Does a straight beat a flush?
- L190 Q. Why does a flush beat a straight?
- L194 Q. What beats a flush in poker?
- L198 Q. What beats a straight in poker? (L200 hand-rankings 링크)
- L202 Q. Can you have a higher flush than another player?
- L206 Q. Does the suit of a flush matter?
- L210 Q. Can a flush and a straight ever tie or split the pot?

### 링크 (9 · 편차 0)
L50 hand-rankings(thumb) · L68 probability(thumb) · L82 reading-the-board · L125 tiebreak-rules · L150 split-pot-rules · L200 hand-rankings · L222 hand-rankings · tiebreak-rules · texas-holdem-rules-for-beginners · (readnext 2 · 그리드 3)

### 키워드 (실측 · DFS=라쿠 · 2026-09-26)
- 주: **flush vs straight 50**(12m +23% 상승) · does a flush beat a straight 10 → seoTitle · H2-1 · FAQ-1
- **straight flush 390** · straight flush poker 70 · straight flush vs royal flush 70 · what is a straight flush 20 → H2 «What Is a Straight Flush?» (EN L158 «royal flush … simply the ace-high straight flush»가 vs royal flush 질문에 이미 답함)
- **flush poker 320** → 태그 · 본문 첫 단락 표면
- **flush vs full house 50** · what beats a flush 10 → H2 «What Beats a Flush» · paired board 예시
- poker flush vs flush(자동완성) → H2 «Flush vs Flush»
- 🔴 함정: «straight or flush» 390(= straight flush 합산 가짜) · «apa itu straight»(비포커) · «flush» 단독(aircond flushing)

### 현지 SERP (키워드 뱅크 §3)
- 상위 = boardgamegeek·pokernews 전략글·reddit·YouTube·facebook·quora·medium·cardplayerlifestyle — **말레이어 전문 가이드 0**. 말레이어 결과는 reddit 자동번역과 id.wikipedia(인니어)뿐.
- 우리가 더 줄 것 3: ① **5,108 vs 10,200 + 7장 3.03% vs 4.62%** 두 층 수치(경쟁글은 한 층만) ② **보드 3개 함정**(Spot 1~3)과 paired board 예시 ③ Short Deck 예외를 한 H2로.
- PAA 축어: «What's better, straight or flush in poker?» · «Can anything beat a straight flush?» · «Why is flush rarer than straight?» · «Does 3 if a kind beat a flush?»

### 확정 카피 — (A-⑥ Fable 서브 출력 · 아래 «확정 카피 모음» 절 참조)

### §13 자리 (카드·수치 축어 — C 전사 대조 대상)
- L28~30 stripe: `Flush > Straight` · `5,108 vs 10,200` · `~2×` · `#5 vs #6`
- L34: 5,108 · 10,200
- L42~48 표 1: #2 9♥ 8♥ 7♥ 6♥ 5♥ · #4 J♠ J♥ J♦ 8♠ 8♥ · #5 A♠ J♠ 9♠ 6♠ 2♠ · #6 9♣ 8♥ 7♦ 6♣ 5♠ · #7 Q♠ Q♥ Q♦ 7♠ 3♣
- L58 2,598,960 · L60~66 표 2: 624 0.024% · 3,744 0.144% · 5,108 0.197% · 10,200 0.392% · 54,912 2.11%
- L68: twice · 10,200 / 5,108 / 2,598,960 · ~1.5× · 4.62% / 3.03%
- L86~88 Spot 1: 보드 8♥7♥6♥5♠A♣ · 9♠ 10♠ · 6-7-8-9-10
- L92~96 Spot 2: 보드 8♥7♥6♠2♣ · 9♥ 5♥ · 5-6-7-8-9 · 9♥ 8♥ 7♥ 5♥ · 6♥ · straight flush (#2) · T-9 → 10-9-8-7-6 · 9♥ · A♥ 2♥
- L100~102 Spot 3: 보드 J♠9♠7♠4♣2♦ · A♠ 6♠ → A♠ J♠ 9♠ 7♠ 6♠ · 10♥ 8♦ → 7-8-9-10-J
- L110~116 compare: #4 #3 #2 #1 / #6 #7 #8 #9–#10
- L121~123: 보드 K♠9♠9♥4♠2♦ · A♠ 5♠ → A♠ K♠ 9♠ 5♠ 4♠ · K♦ 9♦ → 9♦ 9♠ 9♥ K♦ K♠
- L133~136 표 3: A♠ J♠ 9♠ 6♠ 2♠ Wins · K♥ Q♥ 10♥ 8♥ 3♥ Loses
- L142~148: A-K-Q-J-10 · A-2-3-4-5 · 표 4 Q-J-10-9-8 Wins · J-10-9-8-7 Loses
- L158: 9♥ 8♥ 7♥ 6♥ 5♥ · #2 · A-K-Q-J-10 · **36 combinations** · ~0.00139% · 0.028%
- L160~163: 보드 8♥ 7♥ 6♥ Q♠ 3♦ · K♥ 2♥ → K-8-7-6-2 · 10♥ 9♥ → 10-9-8-7-6
- L171: 2s through 5s removed · 52-card
- FAQ L184·188·192: #5 #6 · 5,108 / 10,200 · 3.03% / 4.62% · ~1.5 · L218~219 takeaways 같은 수치
- ✅ A 구간 손검산(Opus · 7장→베스트5): Spot 1~3 · paired board · 표 3·4 · SF 예시 2 · 조합 수 5종 전부 EN과 일치. **EN-먼저 후보 없음.**

### 경험담 자리 (EN 축어 — 없는 사실 추가 금지)
- **L19**: «The first big pot I ever lost in a live cash game went exactly like this: I rivered a ten-high straight, slid it forward like it was gold — and a quiet regular flipped over two hearts. ==r:The dealer pushed the pot the other way==, and I replayed that hand the whole drive home.»
- **L119**: «I've paid off more paired-board boats holding a pretty nut flush than I'd like to admit, so the danger sign I watch for now is simple: a **paired board**.»
→ 장소·금액 없음. «live cash game»·«drive home»은 말레이시아 독자 맥락으로 자연스럽게(예: «perjalanan pulang») 옮기되 **도시·카지노 이름을 넣지 마라**.

### 하지 말 것
- EN tip(L74)의 단서 «That is not the same as being the favorite …»를 빼지 마라(충돌 시 이기는 것 ≠ 에퀴티 우위 — D유형 방지 문장).
- L96 «Two warnings» 단락(T-9 · A♥ 2♥)을 줄이지 마라.
- L138 괄호 «(In a real Hold'em hand two flushes are always the *same* suit…)» 유지 — 예시가 섞인 무늬인 이유.
- «flush menang ke atas straight»는 hand-rankings ms FAQ(L327)와 같은 표현 — 문장 모양은 같아도 된다(사실 동일). 🔴 수치는 이 글의 EN 값만.

---

## holdem-kicker — EN updated 2026-09-26

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | What Is a Kicker in Poker — Rules, Counting & the Dominated Ace |
| seoTitle | What Is a Kicker in Poker? The Side Card That Wins Pots |
| desc | A kicker is the side card that breaks ties in poker — which hands have one and how many, why A9 loses to AK, and the quads exception most guides get wrong. |
| tldr | A kicker is the highest side card that isn't part of your main hand — it breaks ties when two players share the same rank. High card uses 4 kickers, one pair 3, two pair 1, trips 2; straights, flushes, full houses, and straight flushes have none. It's why AK beats AQ when the board pairs an ace. |
| category · date · readTime · emoji | hand-rankings · 2026-07-08 · 10 min · 🃏 |
| image | /images/holdem-kicker-hero.webp |
| imageAlt | Two players turning over A-K and A-Q at showdown with an ace on the board — the king kicker deciding who wins the pot |
| tags | "poker kicker", "what is a kicker in poker", "kicker rules", "does a flush have a kicker", "playing the board", "dominated ace", "kicker card", "does four of a kind have a kicker" |
| 꼬리 | `export default POST;` 있음 |

**ms 태그(확정)**: `"kicker poker"`, `"poker kicker"`, `"what is a kicker in poker"`, `"poker kicker rules"`, `"kicker card"`, `"ace kicker"`, `"does a flush have a kicker"`, `"kicker dalam poker"` — 앞 5개 실측(20·20·20·10·10), ace kicker는 관련검색 축어, 마지막은 말레이어 표면(null).

### 구조 (EN L## · 축어)
- L19~23 인트로 3단락(경험담 L19) · L23 hand-rankings 링크(thumb)
- L27 ### Kickers at a glance → L29 `:::stripe` 4행
- L38 ## What Is a Kicker in Poker? (3단락 · 첫 문장 굵은 직답)
- L48 ## Which Poker Hands Have a Kicker — and Which Don't · L52 크림 박스 `<div …padding:4px 20px 20px;margin:24px 0">` + 표 1(Hand|Has a kicker?|Kicker cards, 9행) + L66 `</div>` · L70 tiebreak 링크(thumb)
- L74 ## How Many Kickers Does Each Hand Use? · L78 크림 박스 + 표 2(Hand|Combination|+ Kickers|= 5 cards, 5행) + L88 `</div>`
- L94 ## AK vs AQ: How a Kicker Decides the Winner · 불릿 2 · L105 `:::note[…]:::`
- L109 ## Playing the Board: When Your Kicker Doesn't Play · 불릿 2 · L118 reading-the-board 링크
- L122 ## Why Does A9 Lose to AK? (The Dominated Ace) · L126 이미지 `holdem-kicker-dominated.webp` · 불릿 2 · L133 starting-hands-chart 링크(thumb)
- L137 ## Does Four of a Kind Have a Kicker?
- L145 `:::readnext[Keep reading]` 2줄(hand-rankings · tiebreak)
- L150 ## FAQ — **13문항** · L206 ## The 3 Things to Remember(번호 3) + L212 링크 2 · L216 ## Related Posts(그리드 카드 4: hand-rankings · tiebreak · starting-hands-chart · reading-the-board)
- 표 **2**(둘 다 크림 박스 안) · 본문 이미지 **1** · 블록 인용 없음(Quick answer 없음 — 추가하지 마라, 구조 패리티)

**FAQ 문항(EN 축어)**
- L152 Q. What is a kicker in poker?
- L156 Q. Does a flush have a kicker?
- L160 Q. Does a straight have a kicker?
- L164 Q. Does a full house have a kicker?
- L168 Q. Does four of a kind have a kicker?
- L172 Q. Does the kicker matter with three of a kind?
- L176 Q. Do two pairs have a kicker?
- L180 Q. Does the kicker have to be in your hand?
- L184 Q. How many kickers are in a poker hand?
- L188 Q. What is a good kicker in poker?
- L192 Q. What is an ace kicker (or a king kicker)?
- L196 Q. What does "playing the board" mean?
- L200 Q. Do kickers matter in Texas Hold'em?

### 링크 (6 · 편차 0)
L23 hand-rankings(thumb) · L70 tiebreak-rules(thumb) · L118 reading-the-board · L133 starting-hands-chart(thumb) · L212 hand-rankings · tiebreak-rules · (readnext 2 · 그리드 4)

### 키워드
- 주: **kicker poker 20 · poker kicker 20 · what is a kicker in poker 20** (2월 피크 40) → seoTitle · H2-1 · FAQ-1
- poker kicker rules 10 · kicker card 10 → H2-2·3 표면 · 태그
- 관련검색 축어: «Ace kicker poker» · «King kicker poker» · «Poker kicker two pair» · «When does a kicker not play in poker» · «Is there a second kicker in poker» → FAQ «ace kicker»(EN 있음) · H2 «Playing the Board» · H2 «How Many Kickers»(second kicker = 두 번째 kicker 개념이 이미 L90에)
- PAA: «Can a straight have a kicker?»(= EN FAQ L160) · «What does "kicker" mean?»
- 🔴 함정: «kicker» 단독 = Kickers 신발(말레이시아 매장) · «kicker poker rdr2»(게임)

### 현지 SERP
- 상위 = en.wikipedia · reddit · **pokernews**(2026-03 갱신, ~2,760단어) · stackexchange · YouTube · casino.org · fandom · upswing · pokercoaching · natural8. 말레이어 결과 = reddit `?tl=ms` 1건뿐.
- pokernews 구조: hand별 kicker H3 5 · «When a Kicker Does Not Matter» · «Best Five-Card Rule» · «Top 4 Kicker Mistakes»(Overvaluing Ace-X · Ignoring the Second Kicker · Assuming Your Hole Card Always Plays · Misreading Two Pair Kickers).
- 우리가 더 줄 것 3: ① **개수 표(4/3/2/1/0)와 «합계 = 5» 산수** ② **quads kicker 예외**(보드 5♠5♥5♦5♣K♦) ③ 1인칭 buy-in 사고로 여는 dominated ace.

### 확정 카피 — «확정 카피 모음» 절

### §13 자리
- L19: A♠ 9♣ · A♥ K♦
- L29~33 stripe: 4 · 3 · 1 · 0
- L54~64 표 1: High card 4 · One pair 3 · Two pair 1 · Three of a kind 2 · Four of a kind 1 · 나머지 —
- L68: 2 cards → 3 kickers
- L80~86 표 2: 1+4 · 2+3 · 3+2 · 4+1 · 4+1
- L98~103: 보드 A♣ 9♦ 5♠ 2♥ 7♣ · A♠ K♠ → A♠ A♣ K♠ 9♦ 7♣ (K-9-7) · A♦ Q♦ → A♦ A♣ Q♦ 9♦ 7♣ (Q-9-7) · A-A-K-9-7 over A-A-Q-9-7
- L113~118: 보드 10♠ J♦ Q♣ K♥ A♠ · 2♣ 3♦ · 4♥ 5♦ · **TDA 2024 Rule 19**
- L128~133: 보드 A♦ 7♣ 2♥ Q♠ 4♦ · A♠ 9♣ → A♠ A♦ Q♠ 9♣ 7♣ · A♥ K♦ → A♥ A♦ K♦ Q♠ 7♣
- L141: 보드 5♠ 5♥ 5♦ 5♣ K♦ · 5-5-5-5-A · 5-5-5-5-K
- FAQ L174: 보드 K♣ K♥ 7♦ 5♣ 2♠ · K♠ A♠ → K-K-K-A-7 · K♦ Q♦ → K-K-K-Q-7
- FAQ L178: K♥ Q♦ · J♠ Q♥ · 보드 Q♣ 7♠ 7♦ 4♥ 2♣ · Q-Q-7-7-K over Q-Q-7-7-J
- FAQ L186 · L209: 4 · 3 · 2 · 1
- ✅ A 손검산: 전 예시 EN과 일치. **EN-먼저 후보 없음.**

### 경험담 자리
- **L19**: «The hand that finally taught me what a kicker is cost me a full buy-in. I had ==b:A♠ 9♣==, the board paired my ace, and I shoved thinking top pair was gold. He flipped ==b:A♥ K♦== — same pair of aces, but his king outkicked me, and the pot slid his way. I hadn't lost to a better *hand*; I'd lost to a better ==side card.==»
- **L128·L133** «Back to my buy-in.» / «my 9 never even got a vote … my "kicker" was ==r:dead== before the hand began» — 같은 사건의 재등장. 인칭 유지.
→ 금액·장소 없음(«a full buy-in»만). 그대로.

### 하지 말 것
- L60 «Four of a kind | ✅ Yes (rarely matters) | 1»와 L139 «This is the exception most guides fumble» — 🔴 **quads에 kicker가 있다**는 이 글의 차별점. 경쟁글(pokernews)도 quads를 kicker 있는 쪽에 두므로 정합. 뒤집지 마라.
- L56 High card «Yes — all five compared in order | 4» 유지(«5»로 고치지 마라 — 1 + 4 kickers 논리, 표 2와 짝).
- L70 flush 별표(*) 단락 유지.
- L118 «only if you turn your hole cards face up … (TDA 2024 Rule 19)» 유지.

---

## holdem-tiebreak-rules — EN updated 2026-09-26

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How Ties Are Broken in Poker — Same Hand, Who Wins? |
| seoTitle | Same Hand, Same Pair — Who Wins? Poker Tie-Breaker Rules |
| desc | Same pair at showdown and still lost? How ties are broken in poker — who wins with the same pair or two pair, when the 5th card matters, and when pots split. |
| tldr | Ties are broken in a fixed order: hand rank first, then the cards that make the hand, then kickers from highest to lowest. Same pair → higher first kicker wins; identical five cards → split pot. Suits never decide a tie. |
| category · date · readTime · emoji | hand-rankings · 2026-06-13 · 12 min · ⚖️ |
| image | /images/holdem-tiebreak-hero.webp |
| imageAlt | Poker showdown: A♠ K♦ vs A♥ 9♣ with board A♦ Q♠ 7♥ 3♣ 2♦ — same pair of aces, kicker decides the winner |
| tags | "poker tie breaker rules", "how are ties broken in poker", "who wins same pair poker", "two pair tie poker", "does the 5th card matter in poker", "do suits matter in poker", "highest straight in poker", "poker kicker", "texas holdem ties" |

**ms 태그(확정)**: `"poker tie breaker"`, `"poker tie rules"`, `"poker tie"`, `"do suits matter in poker"`, `"highest straight in poker"`, `"two pair tie breaker"`, `"flush tie breaker"`, `"pemecah seri poker"` — 앞 5개 실측(각 10), 6·7번째는 관련검색 축어(«Poker two pair tie breaker» · «Poker flush tie breaker»), 마지막 말레이어 표면(null). 🔴 «poker kicker» 태그는 kicker 글 몫이라 **넣지 않는다**(EN엔 있다 — ms 레인 내 카니발 회피 · 진행 파일 «신규 용어/편차»에 기록).

### 구조 (EN L## · 축어)
- L19~23 인트로 3단락(경험담 L21) · L21 hand-rankings 링크 · L23 kicker 링크(thumb)
- L27 ### Tie-breaks at a glance → L29 `:::stripe` 3행
- L37 ## How Are Ties Broken in Poker? The 3-Step Order · L41 크림 박스(padding:4px 20px 20px;margin:24px 0) + 표 1(Step|Compare|Detail, 3행) + L49 `</div>` · L51 split-pot 링크
- L55 ## Who Wins if Two Players Have the Same Pair? · L61 크림 박스(**padding:16px 20px;margin:20px 0**) — 안에 굵은 두 줄(Player A/B · Board) + 표 2(Player|Best Five|Kickers|Result) + L71 `</div>` · L75 starting-hands-chart 링크
- L79 ## Poker Tie-Breaker Rules for Every Hand · L83 `:::tiebreak` 10행(§1-G) · 불릿 3 · L100 flush-vs-straight 링크
- L104 ## Who Wins if Both Players Have Two Pair? · L112 크림 박스(padding:16px 20px;margin:20px 0) — 굵은 세 줄 + 표 3(Player|Best Five|Hand) + L123 `</div>`
- L129 ## Can You Have a Higher Straight? (Where the Wheel Ranks) · L137 flush-vs-straight 링크
- L141 ## Does the 5th Card Matter in Poker?
- L151 ## Do Suits Matter in Poker? · L157 **WSOP Rule 73 인용문**(축어 인용은 영어 원문 유지 + 말레이어 풀이 — 아래 «하지 말 것»)
- L163 ## When Your Kicker Doesn't Play — and the Pot Splits · L165 이미지 `holdem-tiebreak-best5.webp` · L173 이미지 `holdem-tiebreak-split.webp` · L175 reading-the-board · split-pot(thumb) 링크
- L179 `:::readnext[Keep reading]` 2줄(kicker · split-pot)
- L184 ## FAQ — **14문항** · L244 ## The Takeaways(번호 3) + L250 링크 3 · L254 ## Related Posts(그리드 카드 4: kicker · hand-rankings · flush-vs-straight · split-pot)
- 표 **3** · 본문 이미지 **2** · Quick answer 없음

**FAQ 문항(EN 축어)**
- L186 Q. How are ties broken in poker?
- L190 Q. Who wins if two players have the same pair?
- L194 Q. Who wins if both players have two pair?
- L198 Q. Who wins if two players have the same three of a kind?
- L202 Q. Does the 5th card matter in poker?
- L206 Q. Can you use an ace as a 1 in poker?
- L210 Q. Can you have a higher straight than another player?
- L214 Q. Who wins if two players have the same straight?
- L218 Q. Who wins if two players both have a flush?
- L222 Q. Who wins if two players have the same full house?
- L226 Q. What happens if two players both have a straight flush?
- L230 Q. Do suits ever break a tie in Texas Hold'em?
- L234 Q. What happens if both players have the exact same hand? (L236 split-pot 링크)
- L238 Q. Is a tie (split pot) possible in poker?

### 링크 (12 · 편차 0)
L21 hand-rankings · L23 kicker(thumb) · L51 split-pot · L75 starting-hands-chart · L100 flush-vs-straight · L137 flush-vs-straight · L175 reading-the-board · L175 split-pot(thumb) · L236 split-pot · L250 hand-rankings · kicker · split-pot · (readnext 2 · 그리드 4)

### 키워드
- 주: **poker tie breaker 10 · poker tie rules 10 · poker tie 10** → seoTitle · H2-1·3 · FAQ-1
- do suits matter in poker 10 → H2 «Do Suits Matter» · highest straight in poker 10 → H2 wheel 절(L135 Broadway 문장)
- 관련검색 축어: «Poker tie breaker straight» · «Poker flush tie breaker» · «Poker two pair tie breaker» · «Full house tie breaker» → H2 two pair · wheel · FAQ flush/full house(EN 있음)
- 🔴 이 글은 «절차(누가 이기나)». «what is a kicker»(정의) 의도는 kicker 글로 넘긴다(EN L23 문장 그대로).

### 현지 SERP
- 상위 = reddit · **pokernews «Tied Poker Hands»**(odd chip · hand별 비교 H3 6 · «Does Suit Ever Break a Tie?» · 실수 3 «Ignoring the Fifth Card») · truman.edu PDF · scribd · somuchpoker · metropolitancasinos · wikipedia · stackexchange · quora. 말레이어 0.
- 우리가 더 줄 것 3: ① **counterfeit 워크스루**(5♠4♠ vs A♣K♦) ② WSOP Rule 73/85 원문 근거로 «suit는 좌석만 가른다» ③ 5번째 카드가 팟 전체를 가르는 예시(A♠8♠ vs A♦7♦).

### 확정 카피 — «확정 카피 모음» 절

### §13 자리
- L29~32 stripe: 3 · 1 · 0
- L63~69: A♠ K♦ · A♥ 9♣ · 보드 A♦ Q♠ 7♥ 3♣ 2♦ · A♠ A♦ K♦ Q♠ 7♥ (K-Q-7) Wins · A♥ A♦ Q♠ 9♣ 7♥ (Q-9-7) Loses
- L98: 보드 A♣ A♥ 7♦ 5♣ 2♠ · A♠ J♠ → A-A-A-J-7 · A♦ 10♦ → A-A-A-10-7
- L99: K-K-K-A-A beats K-K-K-Q-Q
- L108: 보드 K♦ 9♣ 9♠ 5♦ 2♥ · K♠ Q♦ → K♠ K♦ 9♣ 9♠ Q♦ · K♥ J♥ → K♥ K♦ 9♣ 9♠ J♥
- L114~121 counterfeit: 5♠ 4♠ vs A♣ K♦ · flop 5♦ 4♥ K♣ · turn 9♠ · river 9♥ · 보드 5♦ 4♥ K♣ 9♠ 9♥ · You 9♠ 9♥ 5♠ 5♦ K♣ · Opp K♦ K♣ 9♠ 9♥ A♣
- L133: 보드 4♦ 3♣ 2♠ K♦ Q♥ · A♠ 5♠ → 5-4-3-2-A · 6♥ 5♥ → 6-5-4-3-2
- L135: A-K-Q-J-10 · L137 Q-K-A-2-3
- L145: 보드 A♥ K♣ Q♦ 4♣ 2♥ · A♠ 8♠ vs A♦ 7♦ · 8 beats 7
- L157: **WSOP 2026 tournament rules Rule 73** 인용문(영어 축어): *"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*
- L169: 보드 A♠ K♥ Q♣ J♦ 10♠ · 9♥ 7♠ → K-Q-J-10-9
- L171: 보드 A♥ K♣ Q♦ J♠ 9♥ · A♠ 3♠ vs A♦ 2♦ → A-A-K-Q-J
- FAQ L192: A-Q-7-3-2 · A-9 → A-A-Q-9-7 · A-K
- FAQ L196: aces-and-threes > kings-and-queens · 보드 K-K-9-9-5 · king / nine / pocket fives / pocket pair above nines
- FAQ L200: 9-9-9-A-K beats 9-9-9-A-Q
- FAQ L204: A♠ 3♠ vs A♦ 2♦ on A♥ K♣ Q♦ J♠ 9♥ → A-A-K-Q-J
- FAQ L208: A-2-3-4-5 · Q-K-A-2-3
- FAQ L212: 보드 5♦ 6♣ 7♠ 8♥ 2♦ · 9♣ 4♠ → 9-8-7-6-5 · 4♥ 3♦ → 8-7-6-5-4
- FAQ L216: Q-J-10-9-8 beats J-10-9-8-7
- FAQ L224: K-K-K-2-2 beats Q-Q-Q-A-A
- FAQ L232: **Tournament Rule 85** · three, two and one tables left · «rank and suit»
- ✅ A 손검산: 전 예시 EN과 일치(FAQ L196 «pocket pair above nines» 포함). **EN-먼저 후보 없음.**

### 경험담 자리
- **L21**: «I have watched that exact moment stall more games than any other rule: someone half-stands, the dealer taps the felt, and the whole table waits for an explanation.»
→ 장소 없음. 그대로.

### 하지 말 것
- L157 WSOP 인용문: **영어 원문을 따옴표째 축어로 두고**, 바로 뒤에 말레이어 풀이를 붙인다(인용을 말레이어로 «번역해 인용부호 안에» 넣으면 존재하지 않는 원문을 만든다). «(Rule 73)» → «(Peraturan 73)».
- L232 «Tournament Rule 85» → «Peraturan Kejohanan 85 WSOP» 식 풀이 가능 · 숫자 85 불변 · «rank and suit» 인용은 영어 그대로.
- FAQ L196의 긴 조건문(«unless someone holds a king, a nine, pocket fives, or a pocket pair above nines») — 🔴 조건 4개 하나도 빼지 마라(§13 핵심).
- FAQ L204 «It stops mattering only when …» 두 경우 모두 유지.

---

## holdem-split-pot-rules — EN updated 2026-09-26

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | When Is a Pot Split? Hold'em Chop Rules |
| seoTitle | Won the Hand but Got Half? — Poker Split Pot & Chop Rules |
| desc | Can you tie in poker? Yes — here's exactly when pots split: identical five-card hands, the board playing for everyone, the odd chip rule, and side-pot chops. |
| tldr | Yes — poker hands can tie. A pot is split (a chop) when two or more players show down the identical best five-card hand. Suits never break the tie, and any leftover odd chip goes to the first tied player left of the dealer button. |
| category · date · readTime · emoji | hand-rankings · 2026-06-13 · 12 min · 🃏 |
| image | /images/holdem-split-pot-hero.webp |
| imageAlt | Poker split pot — board 8♠ 8♥ 8♦ A♣ K♠ with J♠ 10♥ vs 5♣ 2♦, chips divided by a gold line since neither hand beats the board |
| tags | "split pot poker", "can you tie in poker", "chopped pot", "when is a pot split", "odd chip rule poker", "board plays", "texas holdem chop" |

**ms 태그(확정)**: `"split pot poker"`, `"chop pot"`, `"chopped pot"`, `"can you tie in poker"`, `"side pot poker"`, `"odd chip poker"`, `"pot dibahagi poker"` — 앞 5개 실측(각 10), odd chip은 EN 태그 계승(null), 마지막 말레이어 표면(null). 🔴 «split pot» 단독 태그 금지(요거트).

### 구조 (EN L## · 축어)
- L19~21 인트로 2단락(경험담 L19)
- L25 `> **Quick answer**` 블록(2줄) · L30 ### The core numbers → L32 `:::stripe` 3행
- L40 ## What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?) · L44 hand-rankings 링크(thumb)
- L48 ## Can You Tie in Poker? The 5 Situations That Split the Pot
  - L52 ### 1. Identical best five cards · L55 크림 박스(padding:4px 20px 20px;**margin:20px 0**) + 표 1(|Player A|Player B, 3행) + L63 `</div>`
  - L67 ### 2. The board plays · L70 ### 3. The same straight · L73 ### 4. The same flush · L78 ### 5. Identical down to the last kicker · L79 tiebreak 링크(thumb)
- L83 ## Can Two Players Win the Same Pot? When the Board Plays · L89 `> **The check:**` 인용 블록(→ ms `> **Semakan:**` · 🆕) + reading-the-board 링크 · L91 showdown-rules 링크 · L93 `:::tip[…]:::`(빈도 수학)
- L97 ## 3 Things That Never Break a Tie in Poker · L99 이미지 `holdem-split-pot-suit-equals.webp` · L103/L106/L109 ### ❌ H3 3개(따옴표 속 오해 문장) · L107 kicker 링크
- L114 ## Who Gets the Extra Chip? The Odd Chip Rule · L118 `> ==…==` 인용 블록 1줄
- L124 ## Do Side Pots Split Too? Ties When Someone Is All-In · L130 크림 박스(padding:4px 20px 20px;margin:20px 0) + 표 2(Player|Hole|Best five|Result, 3행) + L138 `</div>` · L140 all-in-rules 링크
- L144 ## Is the Pot Ever Split Half High, Half Low?
- L150 `:::readnext[Keep reading]` 2줄(reading-the-board · all-in-rules)
- L155 ## FAQ — **13문항** · L211 ## The Takeaways(번호 3) + L217 링크 3 · L221 ## Related Posts(그리드 카드 3: hand-rankings · tiebreak · flush-vs-straight)
- 표 **2** · 본문 이미지 **1**

**FAQ 문항(EN 축어)**
- L157 Q. When is a pot split in poker?
- L161 Q. How is the pot split in poker?
- L165 Q. Do you split the pot if both players have the same hand?
- L169 Q. Do you split the pot on a full house, a straight, or two pair?
- L173 Q. What does "chopped pot" mean in poker?
- L177 Q. Does suit ever decide who wins a split?
- L181 Q. Who gets the odd chip when a pot can't divide evenly?
- L185 Q. Can more than two players split a pot?
- L189 Q. How are split pots handled when someone is all-in?
- L193 Q. How do you calculate a side pot?
- L197 Q. Who is eligible for a side pot?
- L201 Q. Can you win both the main pot and a side pot?
- L205 Q. Is a tournament chop the same as a split pot? (L207 icm · tournament-vs-cash-game 링크)

### 링크 (11 · 편차 0)
L44 hand-rankings(thumb) · L79 tiebreak-rules(thumb) · L89 reading-the-board · L91 showdown-rules · L107 kicker · L140 all-in-rules · L207 icm · tournament-vs-cash-game · L217 hand-rankings · tiebreak-rules · flush-vs-straight · (readnext 2 · 그리드 3)

### 키워드
- 주: **split pot poker 10 · chop pot 10 · chopped pot 10 · can you tie in poker 10** → seoTitle · H2-1·2 · FAQ-1·5
- side pot poker 10 → H2 «Do Side Pots Split Too?» · FAQ 4문항
- PAA 축어: «How does split the pot work?»(= FAQ L161) · «Do you split the pot on a full house?»(= FAQ L169)
- 🔴 함정: «split pot» 단독(요거트·aldi) · «split-pot poker»(드래곤퀘스트 무기) · «chop calculator»(토너 딜 — FAQ L205가 받는 별개 의도)

### 현지 SERP
- 상위 = reddit ELI5 · **pokernews «Split Pot»**(2026-09-09 갱신 · 3 상황 H3) · pokerchipforum · helpshift · dragon-quest · YouTube · casino.org · de.wikipedia · stackexchange · redchip. 말레이어 0.
- 우리가 더 줄 것 3: ① **5 상황**(경쟁 3) ② 사이드팟 숫자 표(300/400)와 «all-in은 자기가 낸 팟만» ③ board plays일 때 river 콜/폴드 빈도(2/3 · 1/2 · 1/3).

### 확정 카피 — «확정 카피 모음» 절

### §13 자리
- L19: J♠ 10♥ · 5♣ 2♦ · 보드 8♠ 8♥ 8♦ A♣ K♠
- L32~35 stripe: 5 · 0 · 1
- L57~61 표 1: K♠ 7♣ · K♥ 2♦ · 보드 K♦ K♣ Q♥ Q♦ J♠ · K-K-K-Q-Q
- L71: 보드 7♣ 6♦ 5♥ K♠ 2♣ · 9♠ 8♠ · 9♥ 8♦ · 9-8-7-6-5
- L74~76: 보드 K♠ J♠ 8♠ 4♠ 2♠ · A♥ Q♦ · 10♥ 9♦ · K-J-8-4-2 · 3♠ → K-J-8-4-3 · A♠
- L79: 보드 A♦ Q♠ 9♣ 6♥ 2♠ · A♠ K♦ vs A♥ K♣ · A-A-K-Q-9
- L87: 8-8-8-A-K · J♠ 10♥ · 5♣ 2♦ · 보드 A♠ K♠ Q♠ J♠ 10♠
- L91: **WSOP live-action Rule 172 · WSOP tournament Rule 75**
- L93 tip: **2 times in 3 · about half the time · one time in three** · half of it heads-up
- L107: 보드 9♠ 8♦ 7♣ 6♥ 5♠ · A♠ K♦ · 2♣ 3♥ · 9-8-7-6-5
- L116: 101-chip · 50 each · **TDA 2024 Rule 20** · 5s · 25 → five 5s
- L120: three-way split · two odd chips
- L128~136: all-in 100 · 300 · main 300 (100 × 3) · side 400 (200 + 200) · 보드 A♦ J♥ 7♠ 4♣ 2♥ · A♠ Q♦ A-A-Q-J-7 → 150 · A♣ Q♥ A-A-Q-J-7 → 150 + 400 · K♦ K♠ K-K-A-J-7 → 0
- FAQ L195: 100 · 300 · 100 × 3 = 300 · 200 × 2 = 400
- ✅ A 손검산: 전 예시 일치 · L93 빈도 검산 — 팟 P, 베팅 P: 찹 시 순이익 +0.5P, 패배 −P → 손익분기 q = 2/3 ✓ · 하프팟: +0.5P vs −0.5P → 1/2 ✓. **EN-먼저 후보 없음.**

### 경험담 자리
- **L19**: «Early in my poker days I led every street — raised preflop, bet the flop and turn, got called on the river. I flipped over J♠ 10♥. My opponent turned over **5♣ 2♦**. "I win, right?" The dealer said nothing and pointed at the board: ==**8♠ 8♥ 8♦ A♣ K♠**==. ==r:Neither of our hole cards beat trip eights with an ace-king kicker==, so the dealer quietly cut the pot in half.»
- **L87** «That's my 8-8-8-A-K hand …» — 재등장.
- ⚠️ L19 `==**8♠ 8♥ 8♦ A♣ K♠**==` = 하이라이트 안 굵게 — EN 그대로 둔다(`**` 중첩이 아니라 `==` 안 `**` 1겹 — 렌더 선례 있음). 🔴 이 자리에 `**`를 더 넣지 마라.

### 하지 말 것
- L93 tip 전체(빈도 3개 · «with more players still in … the bar rises» 단서) 축약 금지 — D유형 방지.
- L91 «A mucked hand is dead even when it would have chopped» + 규칙 번호 2개 유지.
- L120 «House rules can vary … ask the floor» 유지.
- L146 «(eight-or-better)» · «Omaha Hi-Lo · Stud Hi-Lo» 영어 그대로.

---

## holdem-reading-the-board — EN updated 2026-09-26

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Read the Board in Hold'em: Your Best 5 Cards From 7 |
| seoTitle | Which 5 Cards Play? — How to Read the Board in Hold'em |
| desc | River's out and you still can't tell what you have? Read any Hold'em board fast: your best 5 cards from 7, board straights and flushes, and playing the board. |
| tldr | In Texas Hold'em you always play the best 5-card hand from 7 (2 hole cards + 5 community cards) — using both hole cards, one, or none at all (playing the board). Scan all 7 cards in a fixed order: flush → straight → paired ranks → high card. |
| category · date · readTime · emoji | hand-rankings · 2026-06-15 · 11 min · 🃏 |
| image | /images/holdem-reading-the-board-hero.webp |
| imageAlt | Texas Hold'em board reading — 5 community cards on dark felt with gold arrows showing which cards combine for best 5-card hand |
| tags(여러 줄 배열) | "how to read the board in poker", "best 5 card hand from 7 cards", "playing the board texas holdem", "can you have a flush and a pair", "the nuts in poker", "wet board vs dry board", "paired board poker" |
| 필드 순서 주의 | EN은 `tags`가 `image` **앞**에 있다 — 순서는 무관하나 여러 줄 배열 모양은 유지해도 된다 |

**ms 태그(확정)**: `"playing the board"`, `"board poker"`, `"the nuts poker"`, `"poker board texture"`, `"community cards poker"`, `"play the board poker"`, `"lima kad terbaik"`, `"cara baca board poker"` — 앞 6개 실측(각 10), 뒤 2개 말레이어 표면(null · 코퍼스 «lima kad terbaik» 25). 🔴 «tekstur board poker»는 GTO 편 태그 — 쓰지 마라. 🔴 «the nuts» 단독 금지.

### 구조 (EN L## · 축어)
- L27~29 인트로 2단락(경험담 L27)
- L33 ### The Short Answer → L35 `:::stripe` 3행 → L41 `> **Quick answer**` 블록(2줄 · 안에 hand-rankings 링크 thumb)
- L46 ## How to Make the Best 5-Card Hand From 7 Cards · 표 1(3열, 3행 · «21 possible 5-card picks») · L56 설명 1줄 · 표 2(Your hole cards|Board|Best 5 cards|Hand, 3행) · L66 kicker 링크
- L70 ## How to Read the Board in 4 Steps · L74 `:::steps` 4행 · 워크스루 불릿 4 · L88 `:::tip[…]:::`
- L92 ## What Does "Playing the Board" Mean in Poker? · L98 split-pot 링크(thumb) · 불릿 3
- L108 ## How to Spot a Straight on the Board · L114 이미지 `holdem-reading-straight-example.webp`(alt만, title 없음) · 표 3(Hold|Board|Straight?, 4행) · 불릿 2 · L128 tiebreak 링크
- L132 ## How to Spot a Flush on the Board · 표 4(Suited cards on board|What it means, 4행) · L143 이미지 `holdem-reading-flush-draw-mistake.webp` · L147 flush-vs-straight 링크
- L151 ## What Happens When the Board Pairs? Trips, Boats, and Quads · 표 5(You hold|Your best 5|Hand, 3행)
- L169 ## Can You Have a Flush and a Pair at the Same Time? · 불릿 2 · L176 hand-rankings 링크
- L180 ## What Is the Best Possible Hand? Reading the Nuts · L182 glossary 링크 · 번호 목록 3
- L194 ## Wet Board vs Dry Board: Reading the Texture · L198 `:::compare` 4행 · L205 이미지 `holdem-reading-dry-vs-wet-board.webp`
- L211 ## Board Reading Mistakes That Cost Real Money · L213/217/221/225 ### Mistake 1~4
- L231 `:::readnext[Keep reading]` 2줄(tiebreak · split-pot)
- L236 ## FAQ — **11문항** · L284 ## The Takeaways(번호 3) + L290 링크 2 · L294 ## Related Posts(그리드 카드 3: hand-rankings · tiebreak · split-pot)
- 표 **5** · 본문 이미지 **3**

**FAQ 문항(EN 축어)**
- L238 Q. How do you figure out your best 5-card hand from 7 cards?
- L242 Q. Do you have to use both of your hole cards in Texas Hold'em?
- L246 Q. What does "playing the board" mean in Texas Hold'em?
- L250 Q. Can the board be the best hand for everyone?
- L254 Q. Can you have a flush and a pair at the same time?
- L258 Q. Can you use an ace in a straight?
- L262 Q. Can a straight wrap around in poker?
- L266 Q. How do you know if a flush is possible on the board?
- L270 Q. If there is a flush on the board, who wins?
- L274 Q. If there is a straight on the board, who wins?
- L278 Q. Does a pair on the board count as part of your hand?

### 링크 (9 · 편차 0)
L42 hand-rankings(thumb) · L66 kicker · L98 split-pot(thumb) · L128 tiebreak · L147 flush-vs-straight · L176 hand-rankings · L182 glossary · L290 texas-holdem-rules-for-beginners · hand-rankings · (readnext 2 · 그리드 3)

### 키워드
- 주: **playing the board 10 · play the board poker 10 · board poker 10** → seoTitle · H2-3 · FAQ-3
- the nuts poker 10 → H2 «Reading the Nuts» · poker board texture 10 → H2 wet/dry · community cards poker 10 → tldr·H2-1 표면
- PAA 축어: «What does playing the board mean in poker?»(= H2-3 · FAQ L246)
- 🔴 함정: «board poker game/steam»(게임) · «community cards»(단독 혼합 의도) · «the nuts»(비포커)

### 현지 SERP
- 상위 = reddit · 영상팩 · **pokernews «Playing the Board»**(보드별 H3 4 · counterfeit 워크스루 · 1998 WSOP 사례) · upswing · wikipedia · 888poker · quora · pokerskill · bicyclecards. 말레이어 쿼리 «cara baca kad board poker» → Steam 게임 · ms.wikipedia · 앱팩 — 말레이어 가이드 0.
- 우리가 더 줄 것 3: ① **4단계 스캔 순서**(flush → straight → paired → high) ② **21가지 조합 표**(both 10 · one 10 · none 1) ③ the nuts 3문항 체크 + 돈 잃는 실수 4.

### 확정 카피 — «확정 카피 모음» 절

### §13 자리
- L36~38 stripe: 5 · 3 · 4
- L50~54 표 1: Both 10 of the 21 · One 10 of the 21 · None 1 of the 21 · L56 «(7 choose 5)»
- L60~64 표 2: A♠ K♥ + Q♦ J♣ 10♠ 2♦ 7♣ → A-K-Q-J-10 · 9♥ 9♦ + 9♠ 2♦ J♣ 5♥ K♣ → 9-9-9-K-J · 7♦ 2♣ + A♠ K♠ Q♠ J♠ 10♠ → board
- L81~86: A♥ 5♥ · 보드 A♦ 7♦ 4♠ 10♣ 2♠ · Hearts 2 · diamonds 2 · spades 2 · clubs 1 · A-T-7-5-4-2 · wheel misses a 3 · A♥ + A♦ · A-A-T-7-5 · T-7-5
- L96: 보드 A♠ A♦ A♣ 7♥ 7♦ · K♣ Q♣ · A-A-A-7-7 · A-A-A-K-7
- L100~102: A♥ · 7♠ 7♣ · 8-8 through K-K
- L104: A-K-Q-J-10 of one suit
- L112: 8♦ 6♣ · 보드 7♥ 5♠ 4♣ K♦ 2♠ · K, 8, 7, 6, 5, 4, 2 · 8-7-6-5-4
- L118~121 표 3: 8♦ 6♣ / 7♥ 5♠ 4♣ K♦ 2♠ / 8-7-6-5-4 · J♠ 9♣ / 10♥ 8♦ 7♠ 2♣ K♥ / J-10-9-8-7 · A♥ 3♦ / 2♠ 4♣ 5♥ 9♦ K♠ / A-2-3-4-5 · K♥ Q♦ / J♠ 10♣ 8♥ 3♦ 2♠ / No — 9 or an ace
- L125~126: A-K-Q-J-10 · A-2-3-4-5 · K-A-2-3-4 · A♦ 2♦ on K♠ Q♥ 3♣ 4♦ 9♠ → A-K-Q-9-4
- L138~141 표 4: 0–2 · 3 · 4 · 5
- L145: A♠ 4♦ · 보드 2♠ 5♠ 9♥ J♥ 10♠ · 2♠ 5♠ 10♠ · A-J-10-9-5
- L155~161 표 5: 보드 K♣ K♦ 7♠ 3♥ 2♣ · K♥ 9♦ → K-K-K-9-7 · 7♥ 7♦ → 7-7-7-K-K · A♠ Q♦ → K-K-A-Q-7
- L173~174: A♠ K♠ on Q♠ 7♠ 2♠ K♦ 3♣ → A♠ K♠ Q♠ 7♠ 2♠ · 8♥ 8♦ on 7♣ 6♦ 5♠ 4♥ K♦ → 8-7-6-5-4 · **TDA 2024 Rule 12 · Rule 13-A · Rule 22**
- L184~190: 보드 Q♣ 9♥ 6♣ 5♦ 2♠ · 9-6-5 + 8-7 → 9-8-7-6-5
- L199~201 compare: K♠ 7♦ 2♣ | J♥ 10♥ 8♣ · L207 any heart, any 9, any 7, any Q
- L219: 보드 9♠ 6♠ 3♠ Q♠ J♦ · A♥ K♥ → A-K-Q-J-9
- FAQ L248: **WSOP tournament Rule 75 · TDA 2024 Rule 19**
- FAQ L252: A-A-A-7-7
- FAQ L272: K♠ 6♠ 5♠ 4♠ 3♠ · 2♠ (six-high straight flush) · 7♠ (seven-high straight flush) · A♠
- FAQ L276: 5-6-7-8-9 · 10 → 6-7-8-9-10
- ✅ A 손검산: 전 예시 일치(the nuts 8-7 · FAQ L272 SF 두 장 포함). **EN-먼저 후보 없음.**

### 경험담 자리
- **L27**: «The first time a dealer read my hand better than I did, I was tabling what I thought was ace high. "Straight," she announced, pushing me a pot I had mentally given up — my 8-6 had quietly connected with three board cards while I was busy mourning a missed flush draw.»
- **L72** «This is the exact scan I run on every river» · **L215** «My 8-6 story at the top of this page» — 재등장.
→ 🔴 EN «she» = 딜러 성별. 말레이어는 3인칭 «dia»라 성별이 사라진다 — 문제 없음, 새로 성별을 넣지 마라.

### 하지 말 것
- L141 표 4 «5» 행 전체(«…on a connected board any card of that suit that completes a straight flush — even a lower one — beats every flush») 축약 금지.
- L147 «as long as the board isn't paired» 단서 유지.
- L174 TDA 규칙 3개(12 · 13-A · 22) 유지.
- L56 «Those are counts … not how often each case comes up at the table» 유지(조합 수 ≠ 빈도 — 오독 방지).
- L114·L143·L205 이미지: EN에 title 속성이 없다 → ms도 alt만.

---

## 확정 카피 모음 (A-⑥ Fable 서브 1회 → Opus 글자 수 재측정)

> Fable 서브 1회(2026-09-26 · 입력 = EN 메타·H2 + 실측 키워드표 + PAA 축어 + §1-A + posting.mdc SEO 카피 절) → **Opus 판정 5종 반영**:
> ① 글자 수 재측정 → 넘친 3개 트리밍(kicker seoTitle 62→53 · tiebreak desc 166→155 · reading desc 169→151 · split seoTitle 63→53)
> ② **레지스터 정규화** — Fable의 구어체(«Macam Mana · Tak · Ke? · Dua-dua · Kalau»)를 기존 ms H2 실측 관례(Mengapa 33 · Bagaimana 24 · Adakah 11 · Kenapa 4 · Tak 1)에 맞춰 표준체로. DBP 교정자 페르소나 방지선.
> ③ **hand → tangan**(코퍼스 tangan 536+79 : hand 86+1) · **Ace → As**(hand-rankings 선례) · seoTitle의 영어 «Rules» → «Peraturan»(«poker kicker rules»·«poker tie rules» 볼륨 각 10 — 말레이어 문장 품질 우선)
> ④ flush-vs-straight H2-7은 Fable이 «Flush vs Full House»로 각도를 틀었다 → EN 질문(«Are Poker Hands Ranked Differently in Short Deck?»)을 살리고 키워드는 괄호로
> ⑤ 현지 추가 FAQ 2문항(아래) 채택 — 답은 EN 문장에서만 조립
> 글자 수 = `[...str].length`(유니코드 코드포인트). 🔴 B는 이 문자열을 **그대로** 쓴다(바꾸면 다시 잰다).

### holdem-flush-vs-straight
| 필드 | 확정 ms | 길이 |
|---|---|---:|
| title | Adakah Flush Menang ke atas Straight? Matematik dan Salah Baca | 62 |
| seoTitle | Straight Kalah kepada Flush? — Flush vs Straight Poker | 54 |
| desc | Buka straight, tetapi pot pergi kepada flush? Flush sentiasa menang. Ini matematiknya, apa yang mengalahkan flush, dan 3 board yang mengelirukan pemain. | 152 |
| tldr | Flush (lima kad satu suit, kira-kira 0.197% daripada tangan lima kad) sentiasa menang ke atas straight (lima kad berturutan, kira-kira 0.392%) dalam Texas Hold'em. Sebabnya flush lebih jarang: merentas tujuh kad hingga river, flush muncul 3.03% berbanding 4.62% untuk straight. | 277 |

H2 (EN 순서 1:1 · Q 6/7):
1. `## Adakah Flush Menang ke atas Straight? Kedudukan Kedua-dua Tangan`
2. `## Mengapa Flush Menang ke atas Straight? Matematiknya`
3. `## 3 Situasi Board yang Masih Mengelirukan Pemain`
4. `## Apa yang Mengalahkan Flush dalam Poker?`
5. `## Flush lawan Flush, Straight lawan Straight — Siapa Menang Jika Seri?`
6. `## Apa Itu Straight Flush? Apabila Kedua-duanya Berlaku Serentak`
7. `## Adakah Susunan Tangan Berbeza dalam Short Deck? (Flush vs Full House)`
H3: `### Jawapan Pendek` · `### Mengapa ini terasa terbalik` · `### Situasi 1 — Anda buat straight, tetapi board ada tiga kad satu suit` · `### Situasi 2 — Straight siap dengan flush draw di atasnya` · `### Situasi 3 — Anda ada flush, lawan tunjuk straight`
**현지 추가 FAQ 2**(FAQ 끝에 · 답은 EN 축어 조립):
- `**Q. Adakah apa-apa yang boleh mengalahkan straight flush?**` ← PAA «Can anything beat a straight flush?» · 답 = EN L158 «only a higher straight flush or a royal flush (which is simply the ace-high straight flush, A-K-Q-J-10 suited) beats it»
- `**Q. Adakah three of a kind menang ke atas flush?**` ← PAA «Does 3 if a kind beat a flush?» · 답 = EN L112~113 compare(«Loses to your flush: … Three of a kind (#7)») + L196 «Everything below it (straight, three of a kind, …) loses to it»
흡수: flush vs straight / does a flush beat a straight → seoTitle·H2-1·2 · straight flush(390)·vs royal flush → H2-6 + 추가 FAQ 1 · flush vs full house → H2-4 본문(paired board)·H2-7 괄호 · what beats a flush → H2-4 · «Why is flush rarer than straight?» → H2-2

### holdem-kicker
| 필드 | 확정 ms | 길이 |
|---|---|---:|
| title | Apa Itu Kicker dalam Poker — Peraturan, Kiraan & As yang Didominasi | 67 |
| seoTitle | A9 Kalah kepada AK? — Maksud & Peraturan Kicker Poker | 53 |
| desc | Board keluar As, tetapi A9 anda kalah kepada AK? Itulah kuasa kicker. Tangan mana yang ada kicker, berapa banyak, dan pengecualian Four of a Kind. | 146 |
| tldr | Kicker ialah kad sampingan tertinggi yang bukan sebahagian daripada tangan utama anda — ia memecahkan seri apabila dua pemain memegang tangan yang sama nilainya. High Card guna 4 kicker, Pair 3, Two Pair 1, Three of a Kind 2; Straight, Flush, Full House dan Straight Flush tiada kicker. Itulah sebabnya AK menang ke atas AQ apabila board berpasangan dengan As. | 360 |

H2 (Q 7/7):
1. `## Apa Itu Kicker dalam Poker?`
2. `## Tangan Poker Mana yang Ada Kicker — dan Mana yang Tiada?`
3. `## Berapa Banyak Kicker bagi Setiap Tangan?`
4. `## AK lawan AQ: Bagaimana Kicker Menentukan Pemenang?`
5. `## Bilakah Kicker Anda Tidak Dikira? Playing the Board`
6. `## Mengapa A9 Kalah kepada AK? (As yang Didominasi)`
7. `## Adakah Four of a Kind Ada Kicker?`
H3: `### Kicker Sekali Pandang`
흡수: kicker poker / what is a kicker in poker → seoTitle·H2-1 · poker kicker rules → seoTitle «Peraturan» · kicker card → «kad sampingan» H2-1 본문 · ace/king kicker → FAQ L192(EN 있음)·H2-6 · «Can a straight have a kicker?» → H2-2·FAQ L160 · «When does a kicker not play» → H2-5 · «second kicker»·«two pair» → H2-3·FAQ L176

### holdem-tiebreak-rules
| 필드 | 확정 ms | 길이 |
|---|---|---:|
| title | Bagaimana Seri Dipecahkan dalam Poker — Tangan Sama, Siapa Menang? | 66 |
| seoTitle | Pair Sama, Siapa Menang Pot? — Peraturan Tie Breaker Poker | 58 |
| desc | Pair sama di showdown, tetapi kalah? Peraturan tie breaker poker: siapa menang apabila pair atau two pair sama, bila kad ke-5 dikira dan bila pot dibahagi. | 155 |
| tldr | Seri dipecahkan mengikut urutan tetap: kedudukan tangan dahulu, kemudian kad yang membentuk tangan itu, kemudian kicker dari tertinggi ke terendah. Pair sama — kicker pertama yang lebih tinggi menang; lima kad yang serupa — pot dibahagi. Suit tidak pernah menentukan seri. | 272 |

H2 (Q 7/8):
1. `## Bagaimana Seri Dipecahkan dalam Poker? Urutan 3 Langkah`
2. `## Siapa Menang Jika Dua Pemain Ada Pair yang Sama?`
3. `## Peraturan Tie Breaker Poker untuk Setiap Tangan`
4. `## Siapa Menang Jika Kedua-dua Pemain Ada Two Pair?`
5. `## Straight Mana Paling Tinggi? (Dan di Mana Kedudukan Wheel)`
6. `## Adakah Kad Ke-5 Penting dalam Poker?`
7. `## Adakah Suit Penting dalam Poker?`
8. `## Bilakah Kicker Tidak Dikira — dan Pot Dibahagi?`
H3: `### Pemecah Seri Sekali Pandang`
흡수: poker tie breaker / rules → seoTitle·H2-3 · poker tie → H2-1 · do suits matter in poker → H2-7·tldr · highest straight in poker·«tie breaker straight» → H2-5 · «two pair tie breaker» → H2-4 · «flush / full house tie breaker» → `:::tiebreak` 행·FAQ L218·L222

### holdem-split-pot-rules
| 필드 | 확정 ms | 길이 |
|---|---|---:|
| title | Bilakah Pot Dibahagi? Peraturan Chop Hold'em | 44 |
| seoTitle | Menang tetapi Dapat Separuh? — Split Pot Poker & Chop | 53 |
| desc | Boleh seri dalam poker? Ya — inilah bila split pot berlaku: lima kad terbaik yang serupa, board dimainkan semua pemain, peraturan odd chip dan chop side pot. | 157 |
| tldr | Ya — tangan poker boleh seri. Pot dibahagi (chop) apabila dua atau lebih pemain menunjukkan lima kad terbaik yang serupa semasa showdown. Suit tidak pernah memecahkan seri, dan odd chip yang berbaki diberikan kepada pemain seri pertama di sebelah kiri butang pengedar. | 268 |

H2 (Q 6/7):
1. `## Apa Itu Split Pot dalam Poker? (Dan Adakah "Chop" Perkara yang Sama?)`
2. `## Boleh Seri dalam Poker? 5 Situasi yang Membahagi Pot`
3. `## Bolehkah Dua Pemain Memenangi Pot yang Sama? Apabila Board yang Dimainkan`
4. `## 3 Perkara yang Tidak Pernah Memecahkan Seri dalam Poker`
5. `## Siapa Dapat Cip Lebihan? Peraturan Odd Chip`
6. `## Adakah Side Pot Juga Dibahagi? Seri Apabila Ada Pemain All-In`
7. `## Adakah Pot Pernah Dibahagi Separuh High, Separuh Low?`
H3: `### Angka Teras` · `### 1. Lima kad terbaik yang serupa` · `### 2. Board dimainkan` · `### 3. Straight yang sama` · `### 4. Flush yang sama` · `### 5. Serupa hingga kicker terakhir` · `### ❌ "Suit saya lebih tinggi, jadi saya menang"` · `### ❌ "Hole card saya lebih tinggi, jadi saya menang"` · `### ❌ "Saya guna kedua-dua kad, dia guna satu sahaja"`
흡수: split pot poker·chop → seoTitle·H2-1 · can you tie in poker → H2-2·desc · side pot poker → H2-6 · odd chip → H2-5 · «How does split the pot work?» → FAQ L161 · «Do you split the pot on a full house?» → FAQ L169
🔴 «cip»(코퍼스 163)는 칩 일반명사, 규칙 이름 «odd chip»은 영어 유지(첫 등장 «odd chip (cip ganjil)» 1회).

### holdem-reading-the-board
| 필드 | 확정 ms | 길이 |
|---|---|---:|
| title | Cara Membaca Board dalam Hold'em: 5 Kad Terbaik daripada 7 | 58 |
| seoTitle | 5 Kad Mana yang Dikira? — Cara Baca Board Poker Hold'em | 55 |
| desc | River sudah keluar tetapi masih keliru? Baca board Hold'em dengan pantas: 5 kad terbaik daripada 7, straight dan flush di board, dan playing the board. | 151 |
| tldr | Dalam Texas Hold'em anda sentiasa bermain tangan 5 kad terbaik daripada 7 kad (2 hole card + 5 kad komuniti) — sama ada guna kedua-dua hole card, satu sahaja, atau tiada langsung (playing the board). Imbas kesemua 7 kad mengikut urutan tetap: flush → straight → nilai berpasangan → high card. | 292 |

H2 (Q 8/10):
1. `## Bagaimana Membentuk Tangan 5 Kad Terbaik daripada 7 Kad?`
2. `## Cara Membaca Board dalam 4 Langkah`
3. `## Apa Maksud "Playing the Board" dalam Poker?`
4. `## Bagaimana Mengesan Straight di Board?`
5. `## Bagaimana Mengesan Flush di Board?`
6. `## Apa Berlaku Apabila Board Berpasangan? Trips, Full House dan Quads`
7. `## Bolehkah Anda Ada Flush dan Pair Serentak?`
8. `## Apakah Tangan Terbaik yang Mungkin? Membaca the Nuts`
9. `## Board Basah lawan Board Kering: Bagaimana Membaca Tekstur?`
10. `## Kesilapan Membaca Board yang Merugikan Wang Sebenar`
H3: `### Jawapan Pendek` · `### Kesilapan 1 — Terlepas straight yang sudah siap` · `### Kesilapan 2 — Mengira empat kad satu suit sebagai flush` · `### Kesilapan 3 — Lupa board dikongsi` · `### Kesilapan 4 — Abaikan full house di board berpasangan`
흡수: playing the board → H2-3·desc·tldr · board poker → seoTitle «Board Poker» 연속 · the nuts poker → H2-8 · poker board texture → H2-9(«Tekstur» — 코퍼스 GTO 편 표기와 일치) · best 5 cards → seoTitle 훅·H2-1 · community cards poker → tldr «kad komuniti»
«Merugikan Wang» — 금전 손실이라 «rugi» 계열이 정확(정본 §3: kerugian = 금전 손실 ✓).

### Fable이 남긴 위험 메모(판정)
- «straight flush 390을 제목에 밀지 마라 — hand-rankings 몫일 수 있다» → 🟢 채택(H2-6·추가 FAQ로만).
- «Seri가 poker 옆에 있으면 인니 seri=straight 함정이 안 터진다» → 🟡 태그·seoTitle에는 «seri» 자체를 넣지 않았다(본문 H2-5의 «Jika Seri»는 문장 속이라 무해).
- «"Chop Pun Benda Sama Ke?"는 KL 구어» → 표준체로 교체(②).
