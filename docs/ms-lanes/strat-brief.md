# ms-strat 브리프 — 🅲 전략 클러스터 8편 (A 구간 산출 · 2026-09-26)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5 · 키워드 근거 = `docs/keyword-bank/ms-strat.md`.
> EN 기준 = 브랜치 `harden-ms-strat` @ `4fd7dbb3`(main과 동일) · EN 8편 `updated` 전부 **2026-09-26** → ms `masterUpdated: "2026-09-26"`.

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 파일(읽기 전용 · 본문 골격 복사용)** — 정본 §3 🟢(🅱 파일럿 해석 헤드 승인). 브리프에는 메타·H2·FAQ·이미지·디렉티브·링크·경험담·§13 자리를 실었다. 본문 산문(표·단락)은 EN 파일에서 골격으로 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 B에서 열지 않는다.** 사실·수치·카드의 출처는 EN 축어뿐이다.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-ms/holdem-hand-rankings.ts`의 필드 모양 복사. `masterUpdated: "2026-09-26"` · `date`/`updated` = 집필일 · `keepImagesInBody: true`(EN과 동일) · `slug`·`image`·`emoji` = EN과 동일 · 🔴 **content에 히어로 넣지 않는다**.
- **등록**: `lib/posts-ms/index.ts`의 `[ms-strat import 시작/끝]`·`[ms-strat 배열 시작/끝]` 칸에만. 변수명 = 기존 관례(`import { POST as holdemStrategy } from "./holdem-strategy"` 식 — 칸 위 기존 줄의 모양을 그대로 따른다).
- **8편 순서 권장**: holdem-strategy(필라 · 나머지 7편이 링크) → positions → position-play → starting-hands-chart → limping → 3bet → continuation-bet → when-to-fold.

## 1. 공통 결정 (8편 전부)

### 1-A. 고정문 (정본 §1-A · 판단하지 말고 그대로)
`> **Jawapan ringkas**`(EN `> **Quick answer**` 자리 — positions L35 · position-play L36 두 곳) · `:::readnext[Baca seterusnya]`(EN `:::readnext[Keep reading]` 8곳) · `## Soalan Lazim`(EN `## FAQ`) · `## Artikel Berkaitan`(EN `## Related Posts`) · readTime `"N minit"`(EN `N min`의 숫자 그대로) · category `"strategy"`(8편 전부 EN 값) · 문중 `anda` / 문두·제목 `Anda`.
EN의 다른 인용 라벨(`> **Live table note:**` · `> **Naming caveat:**` · `> **Live game tip:**` · `> **The discipline test:**`)은 말레이어 라벨로 옮긴다(예: `> **Nota meja live:**` · `> **Kaveat penamaan:**` · `> **Tip permainan live:**` · `> **Ujian disiplin:**` — 편 안에서 통일).

### 1-B. 검색 표면 = 말레이어 훅 + **영어 술어 토큰** (키워드 뱅크 §0)
말레이어 전략 어휘는 볼륨이 전멸이고 말레이어 SERP는 비어 있다. → seoTitle·H2에 `poker strategy` · `poker positions` · `in position` · `out of position` · `starting hands` · `poker chart` · `limp` · `3-bet` · `4-bet` · `continuation bet (c-bet)` · `fold`를 **영어 그대로** 두고 문장은 말레이어로 짠다.
🔴 **단독 금지 토큰**(브랜드·타 의도 오염 · 뱅크 §2): «4bet»(카지노 브랜드) · «3bet»(3betbdt) · «c bet»/«cbet»(연고·자격증) · «hijack poker»(앱 브랜드) · «limping»(의학) · «UTG» 단독(건축 규격). → 항상 «4-bet poker» · «3-bet poker» · «c-bet poker / continuation bet» · «posisi hijack» · «limp dalam poker» · «UTG poker» 식 문맥형.

### 1-C. 용어 (정본 `ms-posting-reference.md` + 코퍼스 21편 실측 · 이번 레인 신규는 진행 파일 «신규 용어»에 등재)
| EN | ms | 근거 (코퍼스 21편 · 대소문자 무관 낱말 경계 계수) |
|---|---|---|
| fold · call · raise · check · bet · bluff · check-raise · value bet | **영어 그대로** | fold 176 : lipat 0 · call 279 : panggil 0 · raise 227 : naikkan 3 · check 277 / cek 70 · bluff 71 : gertak 0 · check-raise 42. 🔴 경쟁 말레이어 글(xkdisplay)의 lipat·gertak·naikkan은 **기계번역** — 따르지 마라 |
| 3-bet · 4-bet · 5-bet · c-bet | **하이픈형 영어** | 3-bet 117 : 3bet 0 · c-bet 59 : cbet 0 · 4-bet 4 · 5-bet 1 |
| continuation bet | 첫 등장 «continuation bet (c-bet)» 이후 c-bet | 코퍼스 0(신규 표기 아님 — 영어 원어) |
| limp · open-limp · over-limp · limp-reraise · limper | **영어 그대로** | limp 5 · 🔴 «limping» 단독 태그 금지 |
| position (자리) | **posisi** | posisi 65 · 🔴 **kedudukan은 족보 순서 전용**(정본 §1) — 좌석에 쓰지 마라 |
| early / middle / late position | **posisi awal / posisi tengah / posisi lewat** | 코퍼스 «Posisi lewat: steal»(holdem-blind-meaning) |
| in position (IP) · out of position (OOP) | **영어 그대로 + 약어** · 첫 등장에 한 번 풀이(«bertindak terakhir» / «bertindak dahulu») | IP 43 · OOP 92 · in position 1 |
| seat · seat number | **tempat duduk · nombor tempat duduk** | tempat duduk 31 |
| button (좌석) · dealer button (원반) | 좌석 = **button (BTN)** · 원반 = **butang pengedar** | BTN 301 · butang pengedar 17. 🔴 좌석 이름으로 «butang» 단독을 쓰면 원반과 섞인다 |
| UTG · lojack (LJ) · hijack (HJ) · cutoff (CO) · small blind (SB) · big blind (BB) | **영어 그대로** | UTG 5 · SB 167 · BB 906 · cutoff 2 |
| full ring · 6-max · heads-up | 영어 그대로 | heads-up 33 · 6-max 1 |
| range · opening range | **range** (첫 등장 «range (julat tangan)» 1회) · opening range = **range open** 또는 «range pembukaan» 중 편 안 통일 | range 475 · julat tangan 14 · 정본 §8-C |
| starting hand(s) | **tangan permulaan** (seoTitle·첫 H2엔 «starting hands» 영어 토큰 병기) | tangan permulaan 11 · starting hand 0 |
| chart | **carta** (검색 토큰 자리에선 «poker chart») | carta 12 · chart 0 |
| pocket pair · suited · offsuit · suited connector | 영어 그대로(suited는 문장 속에서 «satu jenis»도 허용 — 편 안 통일) | pocket pair 47 · suited 22 · satu jenis 16 · offsuit 12 |
| tight-aggressive (TAG) | **tight-aggressive (TAG)** 영어 | 코퍼스 0 · 영어 원어 |
| passive · aggressive | **pasif · agresif** | pasif 5 · agresif 4 |
| board texture · dry · wet · multiway | **tekstur board · board kering · board basah · multiway** | tekstur 17 · kering 44 · basah 7 · multiway 1 |
| size / sizing · frequency | **saiz · kekerapan** | saiz 202 · kekerapan 95 |
| equity realization | **realisasi equity** («equity realization» 첫 등장 병기) | 정본 §8-C |
| EV loss vs positional disadvantage | **kerugian EV** vs **kelemahan posisi** | 🔴 정본 §3 — kerugian = 금전 손실 |
| advantage (range/position) | **kelebihan** | kelebihan 69 |
| initiative | **inisiatif** | 🆕 코퍼스 0(DBP 표준어) |
| isolation raise · squeeze · blind steal | 영어 그대로(«isolation raise» · «squeeze» · «steal»/«blind steal») | steal 7 · blind steal·re-steal 코퍼스 선례 |
| linear vs polarized range | **range linear** vs **range terpolarisasi** | terpolarisasi 11(태그 «range terpolarisasi» 선례) · 🆕 linear |
| flat (call) · cold call | **flat call** 영어 | 🆕 코퍼스 0 · 영어 원어 |
| light 3-bet · value 3-bet | **3-bet ringan** («light 3-bet» 첫 등장 병기) · **3-bet value** | 🆕 |
| sunk cost fallacy | **sunk cost fallacy** 영어 + 첫 등장 풀이 «(perangkap kos tenggelam)» | 🆕 · PRPM DBP에 «kos tenggelam»이 **Kamus Sains 표제로만** 걸려 있음(정의 원문 미열람 — 근거 강도 약) · 영어 1,300(일반 의도)이 실검색형 |
| hero call · hero fold · laydown · bluff-catcher · tilt | 영어 그대로 | bluff-catcher 1 · tilt 2 |
| pot-committed | **pot-committed** 영어 | 🆕 |
| fish · calling station · nit · regular | 영어 그대로(fish는 첫 등장 «pemain lemah» 풀이) | calling station 1 |
| chips · stack | **cip · stack** | cip 172 · stack 180 |
| opponent · player | **lawan · pemain** | lawan 183 |
| decision · mistake | **keputusan · kesilapan** | keputusan 100 · kesilapan 37 |
| calculate | **kira / dikira** | 🔴 hitung 금지 |
| 🔴 쓰지 마라 | kartu · uang · ronde · bisa · karena · setelah · gratis · hitung · coba · jawatan · bidai · lipat · gertak · kedudukan(좌석 뜻) · ekuiti | 인니어 또는 xkdisplay 기계번역 표기 |

### 1-D. 링크 — **블로그 링크 편차 0 · 도구 링크 3건은 EN 유지**
8편의 EN 블로그 링크 대상은 **전부 §0-A «51편» 안**이다(기존 ms: `holdem-betting-actions`·`holdem-blind-meaning`·`holdem-game-order`·`holdem-showdown-rules`·`holdem-hand-rankings`·`texas-holdem-rules-for-beginners`·`holdem-tournament-vs-cash-game`·`low-board-check-raise`·`a-high-board-cbet`·`3bet-pot-bet-sizing`·`3bet-pot-cbet` / 레인 글: prob `holdem-pot-odds`·`holdem-probability`·`holdem-equity`·`holdem-outs` · rank `holdem-tiebreak-rules` · gloss `holdem-glossary`·`holdem-fish` · strat 8편). → **EN 링크를 전부 그대로** `/ms/blog/<slug>`로 건다. 앵커 텍스트만 말레이어로. 페이지 내 앵커 `(#…)`·`<a id>`는 8편 모두 **없다**.
- 🔴 **GTO 역링크 3자리 = 이식한다**(ms는 대상 글을 보유 — `docs/locale-intentional-diffs.md` 08-19·08-26·08-27 행의 «해소 조건» 충족): continuation-bet **L65**(`a-high-board-cbet` · 98.2%) · **L129**(`3bet-pot-bet-sizing` · 98.4%) · position-play **L194**(`low-board-check-raise`) · 3bet **L301**(`3bet-pot-cbet`). EN 머리 주석(cbet L11~12 «7개 번역본에는 전파하지 않는다»)은 **당시 대상 부재 사유**였다 — ms에선 사유가 없다(es 09-10 해소 선례).
- 🔴 **thumb 인자**: 공용 히어로(`/images/holdem-*-hero.webp`)는 그대로. **GTO 썸네일 2개는 ms 변형으로**: `thumb:/images/gto-srp-dry-ace-oop-en.webp` → **`thumb:/images/gto-srp-dry-ace-oop-ms.webp`** · `thumb:/images/gto-3bp-dynamic-oop-en.webp` → **`thumb:/images/gto-3bp-dynamic-oop-ms.webp`**(= 대상 ms 글의 `image` 값 · id 선례 `-id` 동일 처리 · 파일 실재 확인 2026-09-26).
- **도구·파일 링크 3건(starting-hands-chart)**: L111 `/en/hand-chart` · L243 `/en/quiz` · L213 `/downloads/poker-starting-hands-chart.pdf` → **그대로 둔다**(ms 도구 페이지 없음 · 앱 디렉터리 `app/ms/`에 blog·calculator·solver뿐 · id 선례 동일). 앵커 텍스트는 말레이어로 옮기되 «(bahasa Inggeris)» 표기를 붙인다(PDF·퀴즈·도구가 영어라는 걸 독자에게 알린다). → 진행 파일 «링크 편차»에 기록됨.
- **관련 글 카드**(`## Artikel Berkaitan` 아래 HTML 그리드): 구조·스타일 문자열 한 글자도 바꾸지 마라. **href만 `/en/`→`/ms/`**, 카드 안 라벨·제목·설명 3줄만 말레이어로.
- **readnext**: `:::readnext[Baca seterusnya]` + 각 줄 `/ms/blog/<slug> | <말레이어 제목> | <이미지 그대로>`.

### 1-E. 모든 편 공통 금지
백틱 · `**` 중첩(굵은 직답 안 강조는 `「」`/`==…==`) · tldr 안 마크다운 · «lengkap/panduan lengkap/semua yang anda perlu tahu» 마무리 · slug·이미지 변경 · 인니어 · **말레이시아 카지노·대회·금액 창작**(EN 경험담의 $1/$2·$14·$6 등 **달러 금액 그대로** — RM 환산 금지) · 법·합법성 문장 추가.
PAA의 «42 rule · 80/20 · 15/25/35»는 EN에 없다 → **넣지 마라**(EN-먼저 후보로 진행 파일에 기록).
하이라이트 색 마커(`==r:…==` · `==g:…==`)는 EN 자리 그대로 유지(position-play 14 · starting-hands-chart 12 · when-to-fold 2 · limping 1 · 3bet 1).

---

## holdem-strategy — EN updated 2026-09-26 (필라 · 280행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | Texas Hold'em Strategy: The 5 Decisions Behind Every Winning Hand | 65 |
| seoTitle | Why Poker 'Tips' Never Stuck — Texas Holdem Strategy in 5 Decisions | 67 |
| desc | Winning poker isn't ten disconnected tips — it's the same five decisions every hand: position, hand selection, raise-or-fold, c-betting, and when to let go. | 156 |
| tldr | Every winning Texas Hold'em decision reduces to five repeatable questions: where am I sitting (position), is this hand worth playing, do I raise or fold rather than open-limp, do I keep betting on the flop, and when do I let go? A tight-aggressive player who answers those five well folds ~80% of hands preflop, plays them aggressively when they do, and beats almost every casual game — no memorized tip list required. | 418 |
| category · readTime · emoji | strategy · 14 min · ♠️ | |
| image / imageAlt | /images/holdem-strategy-hero.webp · «A focused poker player weighing a decision at a green-felt Texas Hold'em table, chips and community cards in front of them mid-hand» | |
| tags | "texas holdem strategy", "poker strategy", "poker strategy for beginners", "how to win at texas holdem", "tight aggressive", "when to fold in poker", "when to bluff", "when to 3-bet", "c-bet strategy" | |

### 구조 (EN L## · 축어)
- L25 ### What actually separates winners from everyone else → L27 `:::stripe`(4행: 5 · ~80% · 11.8% · 0%)
- L36 ## Poker Strategy Isn't a List of Tips — It's Five Decisions → L42~52 원시 HTML `<div style=…>` 박스(안에 5행 표 L44~50 · 링크 5개)
- L58 ## Decision 1 — Where Am I Sitting? (Position) → L60 이미지 `holdem-strategy-button-seat.webp`
- L74 ## Decision 2 — Is This Hand Even Worth Playing? (Hand Selection)
- L91 ## Decision 3 — Raise or Fold. Don't Just Limp. → L93 이미지 `holdem-strategy-raise-or-fold.webp`(영어 오버레이 — 경로 그대로)
- L107 ## Decision 4 — Do I Keep Betting on the Flop? (The C-Bet)
- L121 ## Decision 5 — When Do I Fold? (The Decision That Saves the Most Money) → L123 이미지 `holdem-strategy-fold-ace-high.webp`
- L133 ## The Math You Can't Skip
- L143 ## The 6 Leaks That Cost Beginners the Most — and the Fix → L147~158 원시 HTML 박스(표)
- L164 ## Tight-Aggressive: The One Style to Start With
- L175 `:::readnext` 2장(position-play · starting-hands-chart)
- L180 ## FAQ — **14문항**: L182 What is the best strategy for Texas Hold'em? · L186 What is the best poker strategy for beginners? · L190 How do you win at Texas Hold'em? · L194 When should you fold in poker? · L198 When should you bet vs. check in poker? · L202 When should you bluff in poker? · L206 When should you 3-bet? · L210 When should you raise vs. call? · L214 How many hands should you play in Texas Hold'em? · L218 What does tight-aggressive (TAG) mean? · L222 How often should you continuation bet (c-bet)? · L226 Is poker a game of skill or luck? · L230 What is GTO poker? · L234 How do you get better at poker?
- L240 ## The Five Decisions, One More Time
- L252 ## Related Posts → 카드 4장(position-play «Strategy» · starting-hands-chart · limping · pot-odds «Odds»)
- 마크다운 표 2 · 이미지 3 · 디렉티브 stripe·readnext

### 링크 (EN 대상 → ms 동일 slug · 편차 0)
L46 position-play · L47 starting-hands-chart · L48 limping · L49 betting-actions · L50 pot-odds · L62 position-play(thumb) · L70 blind-meaning · L78 starting-hands-chart(thumb) · L87 starting-hands-chart · L97 limping · L103 3bet(thumb) · L109 continuation-bet(thumb) · L113 continuation-bet · L117 betting-actions · L129 when-to-fold(thumb) + pot-odds(thumb) · L137 pot-odds · L139 probability · L224 continuation-bet · L248 starting-hands-chart · position-play · pot-odds

### 키워드 (실측 · 뱅크 §1·§5)
poker strategy **50** · how to win at poker / how to win poker **50** · poker tips 20 · texas holdem strategy 10(8월 40) · tight aggressive poker 10 · poker strategy for beginners 10 · is poker luck or skill 10 · how to get better at poker 10. 말레이어: strategi poker 10(간헐) · cara menang poker 10(간헐) · 나머지 null.
→ seoTitle 머리 = «poker strategy»/«Texas Hold'em strategy» · FAQ L190 = «how to win at poker» · FAQ L226 = «luck or skill» · FAQ L234 = «get better at poker».

### 현지 SERP
- `poker strategy`(MY): AIO → brilliant.org → reddit → 영상 → medium → en.wikipedia → UCSD PDF → thepokerbank → golfdigest → winstar. 전부 영어. `strategi poker texas holdem`: **말레이어 글 0**(id.scribd·id.wikihow 인니어). 원문: 888poker «5 Golden Rules / Top 5 Tips»(2,264단어 · 표 0 · 경험담 0).
- **우리가 더 줄 것 3**: ① 다섯 결정마다 심화 글 링크(허브) ② 1인칭 핸드(A♣K♣ 폴드) ③ 수치 앵커(~80% · 11.8% · 27% · 0%).
- PAA 축어: What's the best strategy for poker? · Is poker mostly luck or skill? · Is poker 100% luck? · What are 10 basic strategies to win poker? (🔴 42 rule · 80/20 rule — 넣지 마라)

### 확정 카피 (Fable 서브 → Opus 조정 · 자수 Opus 실측)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Strategi Texas Hold'em: 5 Keputusan di Sebalik Setiap Tangan yang Menang | |
| seoTitle | Kenapa Tip Poker Tak Melekat? — Poker Strategy: 5 Keputusan | 59 |
| desc | Dah baca banyak tip poker tapi masih kalah? Poker strategy yang menang cuma 5 keputusan setiap tangan: posisi, pilih tangan, raise atau fold, c-bet, bila fold. | 159 |
| tldr | Poker strategy yang menang bukan senarai tip, tetapi lima soalan yang berulang setiap tangan: di mana anda duduk, adakah tangan ini berbaloi dimainkan, raise atau fold, perlukah terus bet pada flop, dan bila perlu fold. Pemain tight-aggressive yang menjawabnya dengan baik fold kira-kira 80% tangan preflop dan bermain agresif apabila masuk pot. | 345 |
| tags | "poker strategy", "strategi poker texas holdem", "how to win at poker", "cara menang poker", "poker strategy untuk pemula", "tight aggressive poker", "bila patut bluff", "bila patut 3-bet" | |

**H2 (EN 순서 1:1)**: L36 `## Bagaimana Cara Menang Poker? Bukan Senarai Tip, Tetapi Lima Keputusan` · L58 `## Keputusan 1 — Di Mana Anda Duduk? (Posisi)` · L74 `## Keputusan 2 — Adakah Tangan Ini Berbaloi Dimainkan? (Pilihan Tangan)` · L91 `## Keputusan 3 — Raise atau Fold. Jangan Sekadar Limp.` · L107 `## Keputusan 4 — Perlukah Terus Bet pada Flop? (C-Bet)` · L121 `## Keputusan 5 — Bila Patut Fold? (Keputusan yang Paling Jimat Wang)` · L133 `## Apakah Matematik Poker yang Tak Boleh Dilangkau?` · L143 `## Apakah 6 Leak yang Paling Merugikan Pemain Baru — dan Cara Membaikinya?` · L164 `## Mengapa Mula dengan Gaya Tight-Aggressive (TAG)?` · L180 `## Soalan Lazim` · L240 `## Lima Keputusan, Sekali Lagi` · L252 `## Artikel Berkaitan` · H3 L25 `### Apa yang Sebenarnya Membezakan Pemenang daripada Orang Lain`
**키워드 배치**: poker strategy + poker tips → seoTitle·desc · how to win at poker → 첫 H2 · tight aggressive poker → L164 H2 · luck or skill / for beginners / get better → FAQ L226·L186·L234(EN 문항 그대로).
**Opus 조정**: seoTitle 64→59(«dalam»→«:») · tldr «Keputusan 1»을 EN처럼 «di mana anda duduk»으로(Fable은 «posisi»로 압축) · H2 «Saya»→«Anda»(1인칭 질문을 독자 질문으로 — EN «Where Am I Sitting?»의 독백 톤은 본문 경험담에 남긴다) · TAG H2 문법(«…Poker Gaya Pertama» 비문 → «Mengapa Mula dengan…»).

### §13 자리 (L## · 카드·수치 축어 · C 전사 대조 대상)
L29~31 stripe `~80%` · `11.8% … (≈1 in 8.5)` · `0%` · L78 `~80%` · L93 이미지 alt `1.5 ÷ 5.5` `27%` `11.8%` · L103 `2.5bb` `1bb` `1.5bb` `4bb` `27%` · L117 `35%` `65%` · **L123·L127 A♣ K♣ vs 2♥ 7♦ 9♠**(ace-high 폴드 핸드 — 카드 축어) · L137 `4-to-1` · «about 1-in-5» · **L139 5♣ K♠ 2♦ 5♠ 5♦** · `11.8%` · `88%` · L145 `90%` · L151 `80%` · L184 `80%` · L216 `80%` · L224 `35%` `65%` · L236 `80%` · L243 `80%`
🔴 L139는 C에서 7장→베스트5 손검산 대상.

### 경험담 자리 (EN 축어 — 없는 사실 추가 금지)
- **L19**: For my first two years I did what everyone does: I read the tip lists. "Ten quick tips." "Nine essential rules." I could recite them all — play fewer hands, be aggressive, respect position — and I was *still* losing. The problem wasn't that the tips were wrong. It was that they were a pile of disconnected rules with nothing tying them together, so at the table, in the moment, I had no idea which one applied.
- **L21**: What finally made me a winning player wasn't a longer list. It was realizing that **every hand of Texas Hold'em is the same five decisions, asked over and over** — … Get those five right and you beat almost every casual game you sit in.
- **L127**: Here's a concrete one from a hand I played. I raised ==A♣K♣== and got one caller. The flop came ==2♥ 7♦ 9♠== — a total miss. … my opponent check-**raises** me. … So I fold ace-high and lose the minimum. Two years earlier I'd have "just called to see" — and paid off a set of nines every time.
→ 말레이시아 독자 맥락: «tip list» = 말레이시아 독자가 보는 «10 petua»류 영어 영상·글 — 장소·금액을 새로 만들지 마라.

### 하지 말 것
- EN 훅은 «tips»를 **부정**하는 구조다 — ms seoTitle에 «tips»를 긍정 키워드로 박지 마라.
- 태그: «c-bet strategy» → «strategi c-bet»로 옮기지 마라(기존 `donk-bet-strategy` 태그 카니발 · 뱅크 §6).

---

## holdem-positions — EN updated 2026-09-26 (266행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | Poker Positions: Every Seat Name & Chart | 40 |
| seoTitle | Your Seat Changes Names Every Hand — Poker Positions Chart | 58 |
| desc | The names move with the button, not the chairs. Every poker position name — UTG, hijack, cutoff, button — plus seat numbers, 6-max map, and who acts first. | 155 |
| tldr | Poker positions are seat names measured from the dealer button — UTG, lojack, hijack, cutoff, button, and the blinds — and they normally move one seat clockwise every hand. Preflop, UTG acts first and the big blind last; postflop, the small blind acts first and the button last. Physical seat numbers never move; positions do. | 326 |
| category · readTime · emoji | strategy · 12 min · 🎯 | |
| image / imageAlt | /images/holdem-positions-hero.webp · «Top-down view of a professional poker table showing 9 player positions with chip stacks and a gold dealer button» | |
| tags | "poker positions", "poker position names", "poker seat numbers", "poker positions chart", "hijack lojack poker", "position poker table", "who acts first poker" | |

### 구조
- L27~31 도입 경험담(아래) · **L35 `> **Quick answer**` → `> **Jawapan ringkas**`**
- L40 ## What Are the Positions at a Poker Table? (Full Seat Map) → L46 이미지 `holdem-button-position-hero.webp`
- L62 `> **Live table note:**` 인용
- L66 ## Poker Position Names & Abbreviations: UTG, LJ, HJ, CO, BTN, SB, BB
- L87 ## Poker Seat Numbers vs Positions — Seat 1 Is Not a Position → L95 `:::compare`
- L107 ## What Is UTG in Poker?
- L117 ## The Hijack and Lojack — and Why They're Called That
- L130 ## The Cutoff and the Button (Dealer Position)
- L140 ## The Blinds: SB and BB Seats
- L153 ## Who Acts First in Poker — Preflop vs Postflop (Do the Blinds Go First?)
- L170 ## Poker Positions by Player Count: Heads-Up to 10-Handed (6-Max vs Full Ring) → L188 `> **Naming caveat:**`
- L192 `:::readnext` 2장(position-play · starting-hands-chart)
- L197 ## FAQ — **7문항**: L199 What does UTG stand for in poker? · L203 What is the hijack in poker? · L207 What is the lojack in poker? · L211 Who goes first, the small blind or the big blind? · L215 How many positions are there in 6-max poker? · L219 Do poker positions change every hand? · L223 What is Seat 1 in poker?
- L229 ## The Takeaways
- L240 ## Related Posts → 카드 4장(texas-holdem-rules-for-beginners · position-play · game-order · blind-meaning)
- 마크다운 표 4 · 이미지 1 · 디렉티브 compare·readnext

### 링크 (편차 0)
L31 texas-holdem-rules-for-beginners · L83 position-play · L113 position-play · L136 position-play · L149 blind-meaning · L166 showdown-rules + game-order · L186 position-play + starting-hands-chart · L236 position-play(thumb) + starting-hands-chart + hand-rankings

### 키워드
**poker positions / position in poker 90**(KD 46 · 클러스터 최대 · 이 글이 머리어 소유) · poker table positions 20 · poker position names 20 · utg poker 10 · utg meaning poker 10 · cutoff poker 10 · lojack poker 10 · 6 max positions 10 · poker positions chart/explained 10 · who acts first in poker 10. 말레이어 posisi poker·kedudukan poker = null.
→ «By Player Count» H2 ← «poker position names 6 players / 9 players» · «poker positions 9-handed / 6 max»(자동완성·관련검색 축어).

### 현지 SERP
- `poker positions`(MY): pokercode #1(3,208단어 · 표 0 · 경험담 0 · 인원별 매핑·Seat 1 구분 없음) → en.wikipedia → stonesgamblinghall → pokerfans.jp → reddit → 영상 → pokertrainer.se → youtube → partypoker → 888poker. `posisi dalam poker`: #1 ms.wikipedia(족보 설명 · «kartu» 인니어) = **의도 불일치 공백**.
- **우리가 더 줄 것 3**: ① Seat 1 ≠ 포지션(좌석 번호 vs 이름) ② 인원별(heads-up~10-handed) 매핑 표 ③ 1인칭 JJ 두 번(UTG vs 버튼).
- PAA: What is the strongest position in poker? · What does "in position" mean? · Is it better to play early or late position?
- 관련검색: Poker positions 6 players · 9-handed · 8 handed · 5 players · ranked · order · Hijack Lojack · 7 players · Best poker positions · with dealer · 10 handed

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Poker Positions: Setiap Nama Tempat Duduk & Carta | |
| seoTitle | Kerusi Sama, Nama Lain Tiap Tangan? — Poker Positions Chart | 59 |
| desc | Nama posisi ikut butang pengedar, bukan kerusi. Nama poker positions — UTG, hijack, cutoff, button — nombor tempat duduk, peta 6-max, siapa bertindak dahulu. | 157 |
| tldr | Poker positions ialah nama tempat duduk yang diukur dari butang pengedar — UTG, lojack, hijack, cutoff, button dan blinds — dan biasanya beralih satu tempat ikut arah jam setiap tangan. Preflop, UTG bertindak dahulu dan big blind terakhir; postflop, small blind dahulu dan button terakhir. Nombor tempat duduk kekal; posisi bergerak. | 333 |
| tags | "poker positions", "nama posisi poker", "poker position names", "nombor tempat duduk poker", "poker positions chart", "hijack lojack poker", "UTG poker", "who acts first poker" | |

**H2**: L40 `## Apakah Poker Positions di Meja Poker? (Peta Tempat Duduk Penuh)` · L66 `## Nama dan Singkatan Poker Positions: UTG, LJ, HJ, CO, BTN, SB, BB` · L87 `## Mengapa Seat 1 Bukan Posisi? Nombor Tempat Duduk vs Poker Positions` · L107 `## Apakah Maksud UTG dalam Poker?` · L117 `## Apakah Posisi Hijack dan Lojack — dan Mengapa Dinamakan Begitu?` · L130 `## Apakah Posisi Cutoff dan Button (Posisi Pengedar)?` · L140 `## Blinds: Tempat Duduk Small Blind dan Big Blind` · L153 `## Siapa Bertindak Dahulu dalam Poker — Preflop vs Postflop? (Adakah Blinds Dahulu?)` · L170 `## Bagaimana Poker Positions Berubah Ikut Bilangan Pemain: Heads-Up hingga 10-Handed (6-Max vs Full Ring)` · L197 `## Soalan Lazim` · L229 `## Perkara yang Perlu Diingat` · L240 `## Artikel Berkaitan`
**키워드 배치**: poker positions + chart → seoTitle · poker position names → L66 · utg meaning → L107 · hijack는 항상 «Posisi Hijack … Lojack»와 짝 → L117 · cutoff → L130 · who acts first → L153 · 6 max / 9-handed / names 6·9 players → L170 · PAA «strongest position» / «early or late» → BTN·UTG 절 직답 첫 문장(새 FAQ 문항 금지).
**Opus 조정**: «dealer button»(원반)을 «butang pengedar»로(Fable은 «button» — 좌석 BTN과 섞인다 · §1-C) · desc 167→157 · tldr «Kerusi kekal»→«Nombor tempat duduk kekal»(EN «Physical seat numbers») · L130 «(Posisi Dealer)»→«(Posisi Pengedar)».

### §13 자리
**L27 J♥ J♠**(UTG에서 raise → hijack·cutoff·button call · big blind 3-bet) · **L29 J♥ J♠** · `$14` · 좌석 표(L66~ 약어 표 · L170~ 인원별 표 — 인원 수·좌석 이름 행 축어). 🔴 인원별 표의 «N-handed → 포함 좌석» 행은 한 칸도 바꾸지 마라.

### 경험담 자리 (EN 축어)
- **L27**: My first live cash game, I was seated in what I'd later learn was UTG. I looked down at J♥ J♠ and raised. The hijack called. The cutoff called. The button called. The big blind 3-bet. I had no idea what to do — I called and bled chips across three streets.
- **L29**: Three hands later I was on the button with the same J♥ J♠. I raised. Everyone folded. I won $14 without ever seeing a flop.
- **L31**: Same hand. Completely different result. The only thing that changed was my seat — …
→ `$14` 그대로(RM 환산 금지).

### 하지 말 것
- «kedudukan»을 좌석 뜻으로 쓰지 마라(족보 전용).
- 태그 «hijack poker» 단독 금지(앱 브랜드) — EN «hijack lojack poker» 그대로.
- 태그 «siapa bertindak dulu dalam poker» 금지(`holdem-game-order` 보유) — EN «who acts first poker» 그대로.

---

## holdem-position-play — EN updated 2026-09-26 (332행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | Position Strategy: In vs Out of Position | 40 |
| seoTitle | Position Beats Cards — In vs Out of Position Poker Strategy | 59 |
| desc | Two players, same cards, opposite results — the seat did it. In position vs out of position, why position matters, and opening ranges from UTG to the button. | 157 |
| tldr | Being in position means you act last — you see every opponent's decision before spending a chip. Solver examples show that position usually improves equity realization, but neither seat is mechanically locked above or below 100%: ranges, board, and action can reverse the usual pattern. That's why UTG opens ~13% of hands and the button ~43% — and why position rewrites every c-bet, bluff, and pot-control decision postflop. | 424 |
| category · readTime · emoji | strategy · 16 min · 🎯 | |
| image / imageAlt | /images/holdem-position-play-hero.webp · «Top-down view of a professional poker table with 9 labeled positions and dealer button highlighting the button and cutoff seats as profit zones» | |
| tags | "in position poker", "out of position poker", "poker position strategy", "under the gun poker", "why position matters in poker", "limp or raise UTG", "how to play out of position", "best position in poker" | |

### 구조
- L28~32 도입 경험담 · **L36 `> **Quick answer**` → `> **Jawapan ringkas**`** · L37 굵은 정의 인용
- L41 ## What Does "In Position" Mean in Poker?
- L60 ## What Is "Out of Position" (OOP) — and Why Acting First Costs You → L66 `:::compare`
- L78 ## Why Is Position So Important in Poker Strategy? → L89 이미지 `holdem-position-play-ip-vs-oop.webp`(title 없음)
- L97 ## The Best Position in Poker — and the Worst
- L118 `> **Live game tip:**` · L132 `> **The discipline test:**`
- L122 ## Under the Gun: What It Means and How to Play UTG
- L136 ## Is It Better to Limp or Raise UTG?
- L150 ## Early Position vs Late Position Strategy (Stealing the Blinds) → L160 이미지 `holdem-position-play-blind-steal.webp`
- L166 ## Opening Ranges by Position: The Strategy Chart → L172~179 표(좌석별 %) · L182 이미지 `holdem-position-play-opening-range.webp`
- L190 ## How to Play Out of Position (When You Can't Avoid It)
- L206 ## How Does Position Affect C-Bet Frequency?
- L222 ## Small Blind Strategy: Why 3-Bet or Fold?
- L236 ## 6-Max vs Full Ring — and Tournaments vs Cash
- L244 `:::readnext` 2장(positions · starting-hands-chart)
- L249 ## FAQ — **10문항**: L251 What does out of position mean in poker? · L255 Who acts first — the small blind or the big blind? · L259 Why does position matter so much in poker? · L263 What is the most profitable position in poker? · L267 What is the weakest position in poker? · L271 Is the small blind an early position? · L275 Is it better to limp or raise from UTG? · L279 How wide should I open from UTG vs the button? · L283 How does position affect c-bet frequency? · L287 Should you always 3-bet from the small blind?
- L293 ## The Takeaways
- L306 ## Related Posts → 카드 4장(positions · starting-hands-chart · blind-meaning · tournament-vs-cash-game)
- 마크다운 표 5 · 이미지 3 · 디렉티브 compare·readnext · 색 하이라이트 14

### 링크 (편차 0)
L32 strategy · L56 positions(thumb) · L80 equity · L128 starting-hands-chart · L146 limping · L179 limping · L186 starting-hands-chart · **L194 low-board-check-raise(GTO 역링크 — 이식)** · L218 continuation-bet · L232 blind-meaning · L240 tournament-vs-cash-game · L302 positions + starting-hands-chart + blind-meaning

### 키워드
in position poker(«poker positions» 클러스터 90 — 이 글은 «in/out of position» 몫) · **out of position 30(+37%)** · out of position poker 10 · best position in poker 10 · worst position in poker(자동완성) · poker position strategy 10 · under the gun poker 10 · small blind strategy 10 · stealing blinds 10 · open raise poker 10.

### 현지 SERP
- `in position poker`(MY): AIO → reddit → stackexchange → pokersites.io → pokernews → gtopokerbench → amazon(커플 게임). 전용 가이드 약함.
- **우리가 더 줄 것 3**: ① K♥Q♥ 두 번(BB vs 버튼) 1인칭 ② 좌석별 opening range 표(13%→43%) ③ solver 수치(79.6% · 57.8% · 97%)로 «IP가 기계적으로 100% 위»가 아님을 보여 줌.
- PAA: What does it mean to play in position in poker? · What does "in position" mean? · Is it better to play early or late position? · What is the weakest position in poker? · What is the most profitable poker strategy?

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Strategi Posisi: In Position vs Out of Position | |
| seoTitle | Kad Sama, Hasil Lain? — In Position vs Out of Position Poker | 60 |
| desc | Kad sama, hasil bertentangan — tempat duduk yang menentukan. In position vs out of position, mengapa posisi penting, dan opening range dari UTG ke button. | 154 |
| tldr | In position bermaksud anda bertindak terakhir dan melihat keputusan setiap lawan sebelum membelanjakan cip. Contoh solver menunjukkan posisi biasanya meningkatkan realisasi equity, tetapi range, board dan aksi boleh membalikkan corak itu. Sebab itu UTG open kira-kira 13% tangan dan button kira-kira 43%. | 304 |
| tags | "in position poker", "out of position poker", "strategi posisi poker", "under the gun poker", "mengapa posisi penting dalam poker", "limp atau raise UTG", "cara main out of position", "posisi terbaik dalam poker" | |

**H2**: L41 `## Apakah Maksud "In Position" dalam Poker?` · L60 `## Apakah "Out of Position" (OOP) — dan Mengapa Bertindak Dahulu Merugikan Anda?` · L78 `## Mengapa Posisi Begitu Penting dalam Strategi Poker?` · L97 `## Apakah Posisi Terbaik dalam Poker — dan Posisi Paling Teruk?` · L122 `## Under the Gun: Apa Maksudnya dan Bagaimana Bermain dari UTG?` · L136 `## Lebih Baik Limp atau Raise dari UTG?` · L150 `## Strategi Posisi Awal vs Posisi Lewat (Stealing the Blinds)` · L166 `## Opening Range Ikut Posisi: Carta Strategi` · L190 `## Bagaimana Bermain Out of Position (Bila Tak Dapat Dielakkan)?` · L206 `## Bagaimana Posisi Mempengaruhi Kekerapan C-Bet?` · L222 `## Small Blind Strategy: Mengapa 3-Bet atau Fold?` · L236 `## 6-Max vs Full Ring — dan Tournament vs Cash Game` · L249 `## Soalan Lazim` · L293 `## Perkara yang Perlu Diingat` · L306 `## Artikel Berkaitan`
**키워드 배치**: in/out of position → seoTitle·L41·L60·L190 · best/worst position → L97(PAA «weakest position» = FAQ L267 EN 문항) · under the gun → L122 · stealing blinds → L150 · small blind strategy → L222.
**Opus 조정**: tldr «equity realization»→«realisasi equity»(§1-C) + «Contoh solver menunjukkan»·«corak itu» 복원(EN의 «neither seat is mechanically locked» 뉘앙스 — 단정 금지 · §13 자리 경고 참조) · L78 «Poker Strategy»→«Strategi Poker»(머리어는 필라 몫) · L97 괄호 «(Best Position)» 삭제(비문 · 볼륨 바닥).

### §13 자리
**L28 K♥Q♥** · **L30 Q♠8♦4♣**(BB에서 top pair) · **L32 K♥Q♥ · J♠7♦3♣ · 턴 Q♦** · L37 `100%` `~13%` `~43%` · L85 `100%` · **L91 8♥ 7♥ · K♥ 4♠ 2♥** · L99 `43%` `13%` · **L101 A♦ 9♦ · K♦ 7♠ 2♥** · L128~132 핸드(AQ · AJs · KQs · KJo · QJo · AJo) · L157·162 K7s · Q9s · A2o · **L172~179 opening range 표 13/14/16/17/20/27/43/40%** · L184 `7%` `16%` · L186 T9s · K9o · **L196 A♠ A♥ vs 6♦ A♦ K♠ 2♥ · Q♥ T♥ 7♠ · 8♦ 5♣ 2♠ · 79.6% · 57.8%** · L212 `75%` · **L213 Q♥ T♥ 7♠ · 8♦ 5♣ 2♠ · A♦ K♠ 2♥ · 97% · 1% · 57.8%** · L214 `45%` · L216 `100%` · L228 A5s · A4s · L238 `17%` `13%` · L240 `15 big blinds` `30 BB` · FAQ L261~300(43% · 13% · AQ · 17% · 75% · 45% · A4s)
🔴 L196·L213은 solver 수치 — 숫자·보드 축어. L91·L101 보드는 C 손검산 대상.
🔴 **tldr·L37의 «neither seat is mechanically locked above or below 100%»** — 정정된 문장(IP≠항상 100% 초과)이다. 뜻을 «IP는 늘 100% 이상»으로 단순화하지 마라.

### 경험담 자리 (EN 축어)
- **L28**: Last spring at my regular 1/2 game I played K♥Q♥ twice in the same session — once from the big blind, once from the button — and those two hands taught me more about position than any training video ever did.
- **L30**: From the big blind, I called a button raise and flopped top pair on Q♠8♦4♣. Acting first on every street, I check-called the flop, check-called the turn, and when a third barrel came on the river I stared at the felt and folded. … ==r:out of position, I paid two streets to learn nothing.==
- **L32**: An hour later, same K♥Q♥, this time on the button. I raised, the big blind called and checked the J♠7♦3♣ flop. I checked behind. The turn Q♦ gave me top pair; he checked again, I bet, he called — and paid off my river bet with a worse hand. ==g:Same cards. Opposite seats. Opposite results.==
- **L118**: > **Live game tip:** At a 1/2 live game, players regularly limp the button because "I don't have a great hand." …
→ «1/2 game»은 그대로(«permainan 1/2»). 장소 추가 금지.

### 하지 말 것
- 머리어 «poker positions»를 seoTitle에 두지 마라(`holdem-positions`와 카니발).
- 태그: «blind lawan blind» 금지(`blind-battle-*` 보유).

---

## holdem-starting-hands-chart — EN updated 2026-09-26 (309행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | Poker Starting Hands Chart & Best Hands | 39 |
| seoTitle | Fold 80% of Your Hands? — Best Poker Starting Hands Chart | 57 |
| desc | Most hole cards lose money. The best and good starting hands in poker, the full chart by position and 6-max, plus GTO vs beginner charts — in 10 minutes. | 153 |
| tldr | Of the 169 starting hand types, only a small top slice — about 15–20% of the hands you're dealt — is profitable for a beginner. Big pairs (AA–TT) and AK raise from any seat; the later you act, the wider you open — from ~13% under the gun to ~43% on the button (wider again in 6-max). Start with a simplified chart, add GTO preflop charts once raise-or-fold is automatic. | 370 |
| category · readTime · emoji | strategy · 10 min · 🂡 | |
| image / imageAlt | /images/holdem-starting-hands-chart-hero.webp · «Texas Hold'em starting hands chart showing Premium (AA KK QQ JJ AK), Strong (TT 99 AQ KQ) and Fold groups by position UTG to button» | |
| tags | "good starting hands in poker", "poker starting hands chart", "gto preflop charts", "starting hands percentages", "6-max starting hands" | |
| 🪶 필드 순서 | EN은 `tags` 다음에 `image`·`imageAlt` — 순서는 무관, 값만 같게 | |

### 구조
- L25~29 도입 경험담 · L35 ### Starting hands, by the numbers → L37 `:::stripe`(80% · 13%/43% · 85%/AA 등)
- L46 ## The 10 Best Starting Hands in Poker, Ranked → L50~61 표(AA~AJs 10행) · L63 이미지 `holdem-starting-hands-premium.webp` · L65 수치 문단(AK vs QQ 등)
- L71 ## What Counts as a Good Starting Hand in Poker? → L79~82 등급 표 · **L84 `:::tip[…]:::` 한 줄 디렉티브**(대괄호 안 문장 번역)
- L88 ## Poker Starting Hands Chart by Position (Full 9-Max Chart) → L96~101 표 · L105 · **L109 `:::rangechart:::`**(축어) · L111 도구 링크 · L113 ### Early position (UTG): the tightest range · L129 ### Late position (cutoff and button): the widest range
- L142 ## 6-Max Starting Hands: How the Chart Changes → L146 `:::compare`
- L159 ## What Percentage of Starting Hands Should You Play? → **L163 `:::stat[15–20%] of dealt hands — a healthy beginner range at 9-max:::`**(값 `15–20%` 축어 · 뒤 문장 번역)
- L171 ## GTO Preflop Charts vs Beginner Charts: Which to Use? → L177 `:::compare`
- L190 ## The Worst Starting Hands (That Look Playable) → L194~199 표 · L201 이미지 `holdem-starting-hands-weak-ace-trap.webp` · L203~205 A♣4♦ vs A♠K♦ 문단
- L209 ## Printable Starting Hands Chart (PDF Cheat Sheet) → L213 PDF 링크 · L217 `:::steps`
- L228 ## Test Yourself: Preflop Hand Quiz → L232~238 퀴즈 3문항(카드) · **L241 `:::quiz:::`**(축어) · L243 퀴즈 링크
- L247 `:::readnext` 2장(hand-rankings · probability)
- L252 ## FAQ — **8문항**: L254 What is the best starting hand in poker? · L258 What are good starting hands in poker? · L262 How many starting hands are there in poker? · L266 What is the 7-2 rule in poker? · L270 What is the worst starting hand in poker? · L274 Should beginners use GTO preflop charts? · L278 Does being suited really matter? · L282 Should I always fold small pocket pairs like 22 or 33?
- L288 ## Related Posts → 카드 3장(hand-rankings «Pillar» · positions · tiebreak-rules)
- 마크다운 표 4 · 이미지 2 · 디렉티브 stripe·tip·rangechart·compare×2·stat·steps·quiz·readnext · 색 하이라이트 12

### 링크
L29 strategy · L67 glossary + hand-rankings · **L111 `/en/hand-chart`(도구 — EN 유지)** + positions(thumb) · L155 position-play · L167 probability · L186 equity(thumb) · **L213 `/downloads/poker-starting-hands-chart.pdf`(영어 PDF — 유지)** · L220 limping · **L243 `/en/quiz`(EN 유지)** · L264 probability

### 키워드
**poker chart 140 · poker cheat sheet 140(KD 7) · poker hand chart 110(KD 50) · poker chart hands 110** · worst hand in poker 40 · best starting hands poker 20 · poker starting hands chart 20 · preflop chart 20 · 7 2 poker 10 · 7 2 offsuit 10 · gto preflop chart(s) 10 · pocket pairs poker 10 · poker hand chart pdf 10.
🔴 **의도 분열**: `poker hand chart` 1페이지 = 족보 차트 7 : 프리플랍 차트 3 · 자동완성에도 «ranking» → **seoTitle·첫 문단에 «tangan permulaan / preflop»을 박아 족보 차트가 아님을 밝힌다.** 족보 의도는 기존 ms `holdem-hand-rankings` 몫(태그 금지).

### 현지 SERP
- `poker hand chart`(MY): reddit(hand rankings chart) → istock → redchippoker(preflop charts) → uwindsor PDF → txst PDF → pinterest → metropolitancasinos → WPT → britannica → pokertraining.com(starting hand charts).
- **우리가 더 줄 것 3**: ① 좌석별 % 표 + 인터랙티브 `:::rangechart:::` ② 인쇄 PDF(cheat sheet 수요) ③ «약한 에이스 함정» 1인칭(A♣4♦ −40bb) + 퀴즈.
- 관련검색: Poker hand chart pre flop · Poker hands chart printable · Best starting hands in poker · Poker starting hands chart · Poker hand chart pdf · Free poker hands chart · What is the best hand in poker 2 cards

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Carta Tangan Permulaan Poker & Tangan Terbaik | |
| seoTitle | Fold 80% Tangan? — Poker Hand Chart Preflop & Starting Hands | 60 |
| desc | Kebanyakan hole card rugi wang. Starting hands terbaik dalam poker, poker hand chart preflop ikut posisi dan 6-max, serta carta pemula vs GTO preflop chart. | 156 |
| tldr | Daripada 169 jenis tangan permulaan, hanya kira-kira 15–20% tangan yang anda terima menguntungkan pemula. Pasangan besar (AA–TT) dan AK raise dari mana-mana posisi; semakin lewat posisi, semakin luas range open — kira-kira 13% di UTG hingga 43% di button. Mula dengan carta ringkas, tambah GTO preflop chart kemudian. | 317 |
| tags | "poker starting hands chart", "tangan permulaan poker terbaik", "poker hand chart preflop", "gto preflop chart", "peratus tangan permulaan", "6-max starting hands", "poker cheat sheet preflop" | |

**H2**: L46 `## Apakah 10 Tangan Permulaan Terbaik dalam Poker (Best Starting Hands)?` · L71 `## Apakah yang Dikira Tangan Permulaan yang Baik dalam Poker?` · L88 `## Poker Starting Hands Chart Ikut Posisi (Carta 9-Max Penuh)` · H3 L113 `### Posisi awal (UTG): range paling ketat` · H3 L129 `### Posisi lewat (cutoff dan button): range paling luas` · L142 `## Bagaimana Carta Berubah untuk 6-Max Starting Hands?` · L159 `## Berapa Peratus Tangan Permulaan Patut Anda Main?` · L171 `## GTO Preflop Chart vs Carta Pemula: Yang Mana Patut Digunakan?` · L190 `## Tangan Permulaan Paling Teruk yang Nampak Boleh Dimainkan` · L209 `## Poker Cheat Sheet: Starting Hands Chart Boleh Cetak (PDF)` · L228 `## Uji Diri Anda: Kuiz Tangan Preflop` · L252 `## Soalan Lazim` · L288 `## Artikel Berkaitan` · H3 L35 `### Tangan permulaan, dalam angka`
**키워드 배치**: poker hand chart(110) + preflop → seoTitle(«Preflop»이 족보 차트와 가른다) · poker chart(140)는 «Poker Hand Chart» 부분일치로 흡수 · best starting hands → L46·desc · poker starting hands chart → L88 · gto preflop chart → L171·desc · poker cheat sheet(140) + pdf → L209 · worst hand 7 2 → L190 본문·FAQ L266(EN «7-2 rule» 문항).
**Opus 조정**: tldr «169 tangan»→«169 jenis tangan»(EN «starting hand types» · 1,326 조합과 혼동 방지) · «range»→«range open» · L190 괄호 «(Worst Hand in Poker)» 삭제(키워드 뱅크: 자동완성 = tattoo·족보 의도 — 족보 글로 오인 유도) · 태그 «poker cheat sheet» 단독 → «poker cheat sheet preflop»(족보 cheat sheet와 분리).

### §13 자리
**L25 A♣ 4♦** · L27 `40 big blinds` · L29·39 `80%` · L40 `13%` `43%` · L41 `85%` AA · **L50~61 10대 핸드 표**(AA · KK · QQ · JJ · TT · AKs · AKo · AQs · KQs · AJs — 순서 축어) · L52 `85%` · **L65 AK vs QQ 등 `47%` `45%` `43%` `50%`**(매치업 에퀴티 — 숫자 축어) · L79~82 등급 표 · L96~101 좌석 표 `13%` `17%` `27%` `43%` · L105 `13%` `58` · L117~136 UTG/레이트 핸드 목록 · L144·149 `17%` `13%` · L150 `1.5x` · L161 `20%` `85%` `13%` `17%` `27%` `43%` · L163 `15–20%` · L165 `40%` · L175·179 `25%` `75%` · **L194~199 최악 핸드 표 A8o · 76o · 65o · K3o · K4o · `6.4%` `0.8%`** · **L201·203 A♣ 4♦ vs A♠ K♦ · A♥ Q♦** · L205 `32%` `35%` · **L232~238 퀴즈 A♠ J♦ · 7♠ 6♠ · A♦ 4♣** · L236 `43%` · L256 `85%` · L260 `20%` `5%` · L264 `78` · **L280 AKs `67%` · AKo `65%` · `6.4%` `35%`** · L284 `11.8%`
🔴 L65·L280 매치업 에퀴티는 C에서 EN 대조(재계산 아님 — 메모리 «무늬 조합 가중»).

### 경험담 자리 (EN 축어)
- **L25**: My first live session, I picked up A♣ 4♦ and thought "an ace, how bad can it be?"
- **L27**: I called a raise, missed the flop, called again, missed the turn. By the river I'd lost 40 big blinds with nothing.
- **L173**: I keep solver outputs open when I study, and I still hand every beginner a simplified chart first. These are two different tools, and knowing which one to use is worth more than either chart alone.

### 하지 말 것
- 태그에 «susunan kad poker» · «poker hand ranking» · «kedudukan tangan poker» 금지(`holdem-hand-rankings`).
- `:::rangechart:::` · `:::quiz:::`는 한 글자도 바꾸지 마라(컴포넌트 호출).
- FAQ L266 «7-2 rule»은 **EN에 있는 문항**이다(홈게임 사이드 규칙) — PAA의 «42 rule»과 혼동해 지우지 마라.

---

## holdem-limping — EN updated 2026-09-26 (217행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | Limping in Poker: Why 'Just Calling' Preflop Usually Costs You | 62 |
| seoTitle | Why 'Just Calling' Preflop Quietly Costs You — Poker Limping | 60 |
| desc | Limping means just calling the big blind preflop. Why it's usually a mistake, the spots where it's actually fine, and how good players punish limpers. | 150 |
| tldr | Limping is entering a pot preflop by just calling the big blind instead of raising or folding. Open-limping (being first in) is almost always a mistake — a limp can't win the blinds uncontested, you give up initiative, and good players punish you. But limping isn't always wrong: completing the small blind, over-limping speculative hands behind other limpers, and some live and short-stacked tournament spots are legitimate exceptions. | 436 |
| category · readTime · emoji | strategy · 11 min · 🚶 | |
| image / imageAlt | /images/holdem-limping-hero.webp · «A poker player quietly sliding chips forward to just call the big blind preflop while other players wait, illustrating a passive limp» | |
| tags | "limping", "what is a limp in poker", "limping in poker", "open limping", "over-limping", "limp reraise", "why is limping bad", "when is limping ok" | |

### 구조
- L19 도입 경험담 · L21 strategy 링크 · L25 ### Limping, at a glance → L27 `:::stripe`(0% 등)
- L36 ## What Does "Limping" Mean in Poker?
- L44 ## Open-Limp vs Over-Limp: Not the Same Thing → L48~56 원시 HTML 박스(표)
- L62 ## Why Limping Is Usually a Mistake (4 Reasons)
- L73 ## Why Raising First-In Beats Limping → L75 이미지 `holdem-limping-raise-or-fold.webp`
- L83 ## So When Is Limping Actually OK? → L87 이미지 `holdem-limping-multiway.webp` · L89~98 원시 HTML 박스
- L104 ## What Is a Limp-Reraise?
- L112 ## Is Limping a "Fish" Tell? How Good Players Punish It → L114 이미지 `holdem-limping-isolation-raise.webp`
- L126 ## Limping in Live Low-Stakes vs Online / GTO
- L134 `:::readnext` 2장(position-play · starting-hands-chart)
- L139 ## FAQ — **9문항**: L141 What does it mean to limp in poker? · L145 Why is limping bad in poker? · L149 Is limping ever a good strategy? · L153 What is the difference between open-limping and over-limping? · L157 What is a limp-reraise? · L161 Should you ever open-limp preflop? · L165 Is it okay to limp in the small blind? · L169 What is the difference between a limper and a calling station? · L173 What is a player who limps a lot called?
- L179 ## The 3 Things to Remember
- L189 ## Related Posts → 카드 4장(position-play · starting-hands-chart · fish «Glossary» · glossary)
- 마크다운 표 2 · 이미지 3 · 디렉티브 stripe·readnext

### 링크 (편차 0)
L21 strategy(thumb) · L40 glossary · L67 continuation-bet · L79 starting-hands-chart · L100 `[implied odds](/en/blog/holdem-pot-odds)`(앵커는 implied odds, 대상은 pot-odds — pot-odds 글 desc·태그가 implied odds를 다루므로 **EN 그대로** · `holdem-implied-odds`로 바꾸지 마라) · L122 fish(thumb) · L185 starting-hands-chart + position-play

### 키워드
limp poker / limping poker / limp in poker **20(+20%)** · what is limping in poker 10 · limp poker meaning 10 · open limp 10 · poker limp raise 10 · fish poker 20 · calling station 10.
🔴 «limping» 단독 = 의학(«limping meaning in malay» 30 · 자동완성 gait·child·walk) → 제목·태그에 항상 «limp … poker».

### 현지 SERP
- `limp poker`(MY): reddit → pokernews(용어) → clubpoker(불어) → 영상 → upswing(봇 차단 · 미열람) → betsperts → quora → redchip → ultimatepokercoaching → 쇼츠. 관련검색: Poker limp raise · Open limp poker · When to limp poker reddit · **Why is limping bad in poker** · Limp poker definition · **Limping in poker tournament**.
- **우리가 더 줄 것 3**: ① open-limp vs over-limp 구분 표 ② «limp가 괜찮은 자리» 박스(SB complete · over-limp · live/short-stack) ③ 1인칭 «2년간 limper였다».

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Limp dalam Poker: Mengapa 'Call Saja' Preflop Biasanya Merugikan | |
| seoTitle | 'Call Saja' Preflop Rugi Senyap-Senyap? — Limp dalam Poker | 58 |
| desc | Selalu call saja preflop? Itu limp — sekadar call big blind. Mengapa limping poker biasanya kesilapan, bila ia OK, dan cara pemain bagus menghukum limper. | 154 |
| tldr | Limp ialah masuk pot preflop dengan sekadar call big blind, bukan raise atau fold. Open-limp hampir selalu kesilapan: ia tak boleh menang blinds tanpa lawan, anda hilang inisiatif, dan pemain bagus menghukumnya. Pengecualiannya: complete small blind, over-limp di belakang limper lain, dan beberapa spot live atau short stack tournament. | 337 |
| tags | "limp dalam poker", "apa itu limp poker", "limping poker", "open-limp", "over-limp", "limp-reraise", "kenapa limp merugikan", "bila limp OK" | |

**H2**: L36 `## Apakah Maksud Limp dalam Poker?` · L44 `## Open-Limp vs Over-Limp: Apa Bezanya?` · L62 `## Mengapa Limp Biasanya Kesilapan? (4 Sebab)` · L73 `## Mengapa Raise First-In Lebih Baik daripada Limp?` · L83 `## Jadi, Bila Limp Sebenarnya OK?` · L104 `## Apakah Limp-Reraise?` · L112 `## Adakah Limp Tanda "Fish"? Cara Pemain Bagus Menghukumnya` · L126 `## Limp dalam Permainan Live Low-Stakes vs Online / GTO` · L139 `## Soalan Lazim` · L179 `## 3 Perkara untuk Diingati` · L189 `## Artikel Berkaitan` · H3 L25 `### Limp, sepintas lalu`
**키워드 배치**: limp poker/limp in poker → seoTitle·L36 · what is limping / meaning → L36 · open limp → L44 · why is limping bad → L62 · limp raise → L104 · fish poker → L112 · limping in poker tournament → L126·FAQ.
**Opus 조정**: tldr에 EN «raising or folding»의 «atau fold» 복원 · «short stack tournament»(EN «short-stacked tournament spots») · L62 «Limping Poker»→«Limp»(H2 반복 토큰 과다 · «limping poker»는 desc가 받는다) · L104 괄호 «(Limp Raise Poker)» 삭제 · L179 = 기존 ms `holdem-hand-rankings` «3 Perkara untuk Diingati»와 같은 틀 · 태그 하이픈형(EN «open limping»·«limp reraise» 표기 통일).

### §13 자리
L29 `0%`(limp가 프리플랍에 팟을 이길 확률) · L96·L128 `100bb` · L100 `11.8%` · L108·L159 AQ · 원시 HTML 박스 표(L48~56 · L89~98)의 수치 행 축어.

### 경험담 자리 (EN 축어)
- **L19**: When I started playing, I limped into almost every pot. It felt safe — I got to see a flop cheaply, I wasn't risking much, and I "kept my options open." What I didn't realize was that every seasoned player at the table had me pegged the moment I did it. Limping is the clearest tell in low-stakes poker that someone doesn't fully know what they're doing — and for two years, that someone was me.

### 하지 말 것
- 태그 «limping» 단독 금지 → «limping poker» / «limp dalam poker».

---

## holdem-3bet — EN updated 2026-09-26 (335행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | 3-Betting in Poker: When to 3-Bet, How Much, and How to Face One | 64 |
| seoTitle | The 3-Bet Guide That Shows the Math — When, How Much, vs What | 61 |
| desc | What a 3-bet is and why it's called that, when to 3-bet for value or as a light bluff, the exact sizing math, and how to respond when someone 3-bets you. | 153 |
| tldr | A 3-bet is the first re-raise before the flop — called a 3-bet because the big blind is the first bet, the open-raise the second, and your re-raise the third. Value-3-bet a tight core (QQ+, AK) plus a few suited blocker bluffs like A5s, size it around 3x the open in position and 4x out of position, and keep your overall 3-bet frequency near 6–10%. When you're the one facing a 3-bet, 4-bet your premiums, call the hands that play well, and fold the rest — folding more than 'balanced' against low-stakes players who never bluff. | 530 |
| category · readTime · emoji | strategy · 16 min · ♦️ | |
| image / imageAlt | /images/holdem-3bet-hero.webp · «A poker player sliding a stack of chips forward for a re-raise while the original raiser looks on, a preflop 3-bet confrontation on the green felt» | |
| tags | "3 bet poker", "what is a 3-bet", "3-bet sizing", "3-bet range", "light 3-bet", "3-bet bluff", "when to 3-bet", "squeeze play", "facing a 3-bet", "linear vs polarized range" | |

### 구조
- L19 도입 경험담 · L21 strategy·limping 링크 · L25 ### The 3-bet, by the numbers → L27 `:::stripe`(3x/4x · 10% · AK)
- L36 ## What Is a 3-Bet in Poker? → L38~43 번호 매기기(3 big blinds · 100 big blinds)
- L50 ## Why 3-Bet At All? What a 3-Bet Actually Does
- L63 ## When Should You 3-Bet? Value Hands vs. Light Bluffs → L65 이미지 `holdem-3bet-range-grid.webp`(영어 오버레이) · L70~71 · L75~83 원시 HTML 박스 · L85 A5s·A9o `30%`
- L89 ## Linear vs. Polarized 3-Bet Ranges → L93~101 원시 HTML 박스 · L103
- L109 ## How Much Should You 3-Bet? (Sizing, With the Math) → L111 · L113~121 원시 HTML 박스(**$6 open → 3x $18 / 4.5x $24 / +1x $30 · 9bb·13.5bb·16.5bb · 27·33**) · L123~130
- L134 ## 3-Bet, Flat, or Fold? A Decision Table → L138~148 원시 HTML 박스(표)
- L154 ## The Squeeze Play: 3-Betting a Raiser *and* a Caller → L156 이미지 `holdem-3bet-squeeze.webp` · L162 `3bb` `16.5bb` · L164 A5s
- L168 ## Facing a 3-Bet: Do You Call, 4-Bet, or Fold? → L170 이미지 `holdem-3bet-facing.webp` · L174 4-bet 목록 · L178 `3x` `4.5bb` `9bb` `33%` · L180~188 원시 HTML 박스(`35%` `55%` `70%`)
- L194 ## A Real 3-Bet Hand, Start to Finish → L196~202 번호 매기기(1인칭 핸드)
- L206 ## The 6 Most Common 3-Betting Mistakes → L208~219 원시 HTML 박스
- L225 `:::readnext` 2장(strategy · position-play)
- L230 ## FAQ — **15문항**: L232 What is a 3-bet in poker? · L236 Why is it called a 3-bet? · L240 What is the difference between a 3-bet and a 4-bet? · L244 What hands should you 4-bet with, and how much? · L248 When should you 5-bet in poker? · L252 What hands should you 3-bet? · L256 When should you 3-bet vs. just call (flat)? · L260 What is a light 3-bet? · L264 What is the difference between a linear and a polarized 3-bet range? · L268 How much should you 3-bet? · L272 What is a good 3-bet percentage? · L276 What is a squeeze play? · L280 How do you respond to a 3-bet? · L284 What is a good fold-to-3-bet percentage? · L288 Should you 3-bet or 4-bet all-in with a short stack in a tournament?
- L294 ## The 3-Bet Playbook, In Short
- L307 ## Related Posts → 카드 4장(strategy · limping · position-play · starting-hands-chart)
- 마크다운 표 6 · 이미지 3 · 원시 HTML 박스 6 · 디렉티브 stripe·readnext
- 🪶 H2 L154의 `*and*` 이탤릭은 H2 안 마크다운 — ms에서도 같은 자리에 `*…*`를 유지해도 되고 빼도 된다(TOC 텍스트에 별표가 남는지 C에서 빌드 산출물로 확인).

### 링크 (편차 0)
L21 strategy(thumb) + limping · L46 betting-actions · L85 starting-hands-chart(thumb) · L150 position-play · **L301 3bet-pot-cbet(GTO 역링크 — 이식)** · L303 starting-hands-chart + position-play + strategy

### 키워드
3-bet / 3bet **30(+110%)** · 3 bet poker 10 · what is 3 bet in poker 10 · 3 bet meaning (poker) 10 · 3bet range 10 · 4 bet poker 10 · squeeze play / squeeze poker 10 · 3 bet vs 4 bet 10 · 5 bet poker 10.
🔴 «4bet» 단독 90 = 카지노 브랜드 · «3bet» 단독 = 3betbdt → 태그는 하이픈형 문맥구만.

### 현지 SERP
- `3 bet poker`(MY): AIO → 영상 → reddit → jonathanlittle(영상) → youtube → pokerstars(3-bet pot) → tournamentpokeredge ×2. **입문 정의·사이징 수학을 한 글에 담은 결과가 없다.**
- **우리가 더 줄 것 3**: ① 사이징 수학 박스($6 → $18/$24/$30) ② 3-bet/flat/fold 결정 표 ③ 1인칭 A-K 두 번(flat vs 3-bet) + A♠Q♠ 핸드.
- PAA: How much is a 3 bet? · When to call a 3 bet? · What is a 3 bet poker? · Why is it called a 3bet?

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | 3-Bet dalam Poker: Bila Perlu 3-Bet, Berapa Saiznya dan Cara Menghadapinya | |
| seoTitle | 3-Bet Ikut Rasa? — 3-Bet Poker: Bila, Berapa & Matematiknya | 59 |
| desc | Kena 3-bet dan terus keliru? Apa itu 3-bet poker, bila 3-bet untuk value atau bluff ringan, matematik saiz yang tepat, dan cara respons bila anda kena 3-bet. | 157 |
| tldr | 3-bet ialah re-raise pertama sebelum flop — bet ketiga selepas big blind dan open-raise. Value 3-bet dengan QQ+ dan AK, tambah beberapa bluff blocker suited seperti A5s; saiz kira-kira 3x open in position dan 4x out of position, dengan kekerapan keseluruhan sekitar 6–10%. Bila kena 3-bet: 4-bet tangan premium, call tangan yang main baik, fold selebihnya. | 356 |
| tags | "3-bet poker", "apa itu 3-bet", "saiz 3-bet", "range 3-bet", "3-bet ringan", "bluff 3-bet", "bila perlu 3-bet", "squeeze play", "hadapi 3-bet", "range linear vs terpolarisasi" | |

**H2**: L36 `## Apakah 3-Bet dalam Poker?` · L50 `## Mengapa Perlu 3-Bet? Apa Sebenarnya Fungsi 3-Bet` · L63 `## Bila Patut Anda 3-Bet? Tangan Value vs Bluff Ringan` · L89 `## Range 3-Bet Linear vs Terpolarisasi: Apa Bezanya?` · L109 `## Berapa Saiz 3-Bet yang Patut? (Sizing, dengan Matematik)` · L134 `## 3-Bet, Flat atau Fold? Jadual Keputusan` · L154 `## Squeeze Play: 3-Bet ke atas Raiser *dan* Caller` · L168 `## Kena 3-Bet: Call, 4-Bet atau Fold?` · L194 `## Contoh Tangan 3-Bet Sebenar, dari Mula hingga Akhir` · L206 `## Apakah 6 Kesilapan 3-Bet Paling Biasa?` · L230 `## Soalan Lazim` · L294 `## Playbook 3-Bet, Secara Ringkas` · L307 `## Artikel Berkaitan` · H3 L25 `### 3-bet, dalam angka`
**키워드 배치**: 3-bet poker → seoTitle(하이픈형 — «3bet»·«4bet» 단독은 브랜드) · what is 3 bet / meaning → L36 · «Why is it called a 3bet?» → FAQ L236(EN 문항) · 3bet range → L89 · «How much is a 3 bet?» → L109 · squeeze → L154 · 4-bet poker + «When to call a 3 bet?» → L168 · 3 bet vs 4 bet · 5-bet → FAQ L240·L248.
**Opus 조정**: seoTitle 원안 «Tak Tahu Saiz Re-raise? — … vs Apa»(«vs Apa» 비문) → EN 훅 «shows the math»를 살려 «3-Bet Ikut Rasa? … & Matematiknya» · tldr «bluff seperti A5s»→«beberapa bluff blocker suited seperti A5s»(EN 축어 복원) + «kekerapan keseluruhan» · L89 «Polarized»→«Terpolarisasi»(코퍼스 태그 선례) · L154 EN 이탤릭 `*and*` 자리를 `*dan*`로 유지(C에서 TOC 별표 확인).

### §13 자리
L29 `3x` `4x` · L30 `10%` · L31 AK · L38 `3 big blinds` · L43 `100 big blinds` · L70~71 AK · JJ · TT · AQs · KQs · L79~81 AA · AK · 76s · 65s · T8s · 97s · **L85 A5s · A9o · `30%`** · L98·103 · **L111~119 사이징 박스: `$1`/`$2` · `$6` open(3bb) → 3x `9bb` `$18` · 4.5x `13.5bb` `$24` · +1x `16.5bb` `$30` · pot `27` `33`** · L123~127 `3bb` `1bb` `5bb` `9bb` `12bb` `4x` · L130 `25 big blinds` · L142~145 · L162 `3bb` `16.5bb` · L174 QQ+ · AK · A5s · L178 `3x` `4.5bb` `9bb` `33%` · L184~186 `35%` `55%` `70%` · **L196~202 핸드: `$1/$2` `100bb` · cutoff `$6`(3bb) · A♠Q♠ · `$18`(3x) · pot `$39` · 플롭 Q♦ 8♣ 4♥ · 베스트5 «Q♠ Q♦ A♠ 8♣ 4♥» · 4-bet `$48`(2.7x) · `2.2–2.5x`** · L212~216 `4x` · A5s · Q7o · FAQ L234~290(3 big blinds · 2.5x · 100 big blinds · 10% · 8% · 4% · 55% · 3x · 66.7% · 30% · 25 big blinds) · L297~301 `3bb` `9bb` `100bb` `19.5bb` `7.5bb`
🔴 L198 «Pot is $39.» — A 구간 산수 확인: SB $1 + BB $2(폴드한 블라인드의 데드머니) + CO $18 + BTN $18 = **$39 ✓**. L199 베스트5 축어(C 손검산 대상).

### 경험담 자리 (EN 축어)
- **L19**: The hand that taught me what a 3-bet is really *for* went like this: a loose player opened, I looked down at A-K, and — like every beginner — I just called. The flop came ace-high, I got no money in, and he folded to a single bet. I'd turned the best hand into a tiny pot. A week later, same spot, I *re-raised* instead. He called with a worse ace, stacked off on an ace-high flop, and I won five times as much. Same cards. One decision — the 3-bet — was the whole difference.
- **L198~202**: A Real 3-Bet Hand(위 §13 자리) — 1인칭 그대로.

### 하지 말 것
- 태그 «4bet»·«3bet» 단독 금지.
- 사이징 박스의 `$` 금액을 RM으로 바꾸지 마라.

---

## holdem-continuation-bet — EN updated 2026-09-26 (306행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | Continuation Bet (C-Bet): When to Fire the Flop, How Much, and When to Check | 76 |
| seoTitle | Why 'C-Bet Every Flop' Bleeds Chips — Continuation Bet Strategy | 63 |
| desc | What a continuation bet is, which flops to c-bet and which to check, exact sizing — small on dry boards, big on wet — and how often to fire in position. | 152 |
| tldr | A continuation bet (c-bet) is a bet on the flop by the player who raised preflop. The modern rule isn't 'c-bet every flop' — it's to bet the flops that favor your range (high, dry boards like K-7-2) small and often, and check the ones that favor your opponent (low, connected boards like 7-6-5). Size small — about one-third pot — on dry boards, big — two-thirds or more — on wet ones, c-bet less out of position when you were the single raiser (as the out-of-position 3-bettor it flips to almost always), and much less multiway. | 529 |
| category · readTime · emoji | strategy · 15 min · 🔥 | |
| image / imageAlt | /images/holdem-continuation-bet-hero.webp · «A poker player betting chips onto a freshly dealt flop after raising preflop, the classic continuation bet moment on the green felt» | |
| tags | "continuation bet", "c-bet poker", "what is a c-bet", "c-bet sizing", "c-bet frequency", "when to c-bet", "when not to c-bet", "c-bet out of position", "multiway c-bet", "delayed c-bet" | |
| 🔴 머리 주석 | EN L11~12 `// 2026-08-19: range advantage 절에 a-high-board-cbet 역링크 한 문단 추가(EN·KO 전용 자산이라 7개 번역본에는 전파하지 않는다 — 의도적 차이…)` | ms에는 **옮기지 않는다** — ms는 대상 글 보유(§1-D) |

### 구조
- L21 도입 경험담 · L23 strategy 링크 · L27 ### The c-bet, by the numbers → L29 `:::stripe`(70% 등)
- L38 ## What Is a Continuation Bet (C-Bet)? → L42 `67.6%` · L50 betting-actions 링크
- L54 ## The Old "C-Bet Every Flop" Advice Is Wrong — Here's What Changed → **L65 GTO 역링크 문단(A-7-2 · 98.2% · 45.1% / 54.9%) — 이식**
- L69 ## Which Flops to C-Bet: It's All About Board Texture → L71 이미지 `holdem-cbet-dry-board.webp` · L73 · L75~85 원시 HTML 박스(K♠9♠4♠ · Q♥J♥7♣ 등)
- L95 ## How Often Should You C-Bet? (Frequency) → L99~109 원시 HTML 박스(100% · 60% · Q♥T♥7♠/8♦5♣2♠/A♦K♠2♥ 45% · 97% · 57.8% · 50%) · L111 `70%` `85%` `40%`
- L115 ## How Much Should You C-Bet? (Sizing) → L122~125 `$30` `$10` `$20` · **L129 GTO 역링크 문단(Q♥T♥7♠ · 98.4%) — 이식**
- L133 ## C-Betting Out of Position → L135 이미지 `holdem-cbet-oop.webp`
- L144 ## C-Betting in Multiway Pots
- L152 ## The Delayed C-Bet
- L164 ## When NOT to C-Bet (Checking Is a Weapon, Not a White Flag)
- L177 ## A Real C-Bet Hand, Start to Finish → L181 Spot 1 · L183 Spot 2(1인칭)
- L189 ## The 7 Most Common C-Bet Mistakes → L191~203 원시 HTML 박스
- L209 `:::readnext` 2장(strategy · 3bet)
- L214 ## FAQ — **12문항**: L216 What is a continuation bet in poker? · L220 Why is it called a continuation bet? · L224 Should you c-bet every flop? · L228 How often should you c-bet? · L232 How much should you c-bet? · L236 Should you c-bet out of position? · L240 Should you c-bet in a multiway pot? · L244 What is a delayed c-bet? · L248 When should you NOT c-bet? · L252 Is a c-bet a bluff? · L256 What is a value bet in poker? · L260 What is a good c-bet percentage on a poker HUD?
- L266 ## The C-Bet Playbook, In Short
- L278 ## Related Posts → 카드 4장(strategy · 3bet · position-play · pot-odds «Odds»)
- 마크다운 표 3 · 이미지 3 · 원시 HTML 박스 3 · 디렉티브 stripe·readnext

### 링크 (편차 0)
L23 strategy(thumb) · L50 betting-actions · **L65 a-high-board-cbet — thumb `gto-srp-dry-ace-oop-ms.webp`** · L105 position-play · **L129 3bet-pot-bet-sizing — thumb `gto-3bp-dynamic-oop-ms.webp`** · L137 position-play · L140 position-play(thumb) · L274 3bet + position-play + strategy

### 키워드
**continuation bet 10(+300% 12m)** · c bet poker / cbet poker / c bet 10 · what is c bet in poker 10 · c bet meaning (poker) 10 · delayed c bet 10 · continuation bet sizing(자동완성).
🔴 «c bet» 단독 = 연고(c bet cream) · «cbet» = 자격증 → 항상 «c-bet poker»/«continuation bet».
🔴 **태그 카니발**: 기존 ms `a-high-board-cbet`·`k-high-board-cbet`가 «c-bet poker», `k-high-board-cbet`가 «delayed c-bet», `donk-bet-strategy`가 «strategi c-bet»를 쓴다 → 이 필라의 머리 태그 = **«continuation bet poker» · «apa itu c-bet»**. «c-bet poker»·«delayed c-bet»·«strategi c-bet»는 태그에 넣지 않는다(본문 H2로만 받는다).

### 현지 SERP
- `c bet poker`(MY): gipsyteam #1(1,116단어 · H2 3개 · 표 0) → 영상 → reddit → youtube(PLO) → 2+2 → pokerstrategy 포럼 → amazon. **약한 SERP.**
- **우리가 더 줄 것 3**: ① 보드 텍스처 지도 박스 ② 빈도·사이징 수치(solver 98.2%·98.4% + GTO 글 링크) ③ Spot 1/Spot 2 1인칭.
- PAA: What is a good C bet percentage? · What is a C bet in poker? (🔴 15/25/35 rule — 넣지 마라)

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Continuation Bet (C-Bet): Bila Bet Flop, Berapa Saiznya dan Bila Check | |
| seoTitle | 'C-Bet Setiap Flop' Buat Cip Bocor? — Continuation Bet Poker | 60 |
| desc | C-bet setiap flop? Apa itu continuation bet, flop mana patut c-bet atau check, saiz kecil di board kering, besar di board basah, dan kekerapan in position. | 155 |
| tldr | Continuation bet (c-bet) ialah bet pada flop oleh pemain yang raise preflop. Jangan c-bet setiap flop: bet board tinggi dan kering (K-7-2) dengan saiz kecil dan kerap, check board rendah yang bersambung (7-6-5). Saiz kira-kira satu pertiga pot di board kering, dua pertiga atau lebih di board basah; jauh kurang dalam pot multiway. | 331 |
| tags | "continuation bet poker", "apa itu c-bet", "saiz c-bet", "kekerapan c-bet", "bila perlu c-bet", "bila tidak perlu c-bet", "c-bet out of position", "c-bet multiway" | |

**H2**: L38 `## Apakah Continuation Bet (C-Bet) dalam Poker?` · L54 `## Mengapa Nasihat Lama "C-Bet Setiap Flop" Salah — Apa yang Berubah?` · L69 `## Flop Mana Patut Di-C-Bet? Semuanya Tentang Tekstur Board` · L95 `## Berapa Kerap Patut Anda C-Bet? (Kekerapan)` · L115 `## Berapa Saiz C-Bet yang Patut? (Sizing)` · L133 `## Bagaimana C-Bet Bila Out of Position?` · L144 `## C-Bet dalam Pot Multiway` · L152 `## Apakah Delayed C-Bet?` · L164 `## Bila TIDAK Patut C-Bet? (Check Itu Senjata, Bukan Bendera Putih)` · L177 `## Contoh Tangan C-Bet Sebenar, dari Mula hingga Akhir` · L189 `## Apakah 7 Kesilapan C-Bet Paling Biasa?` · L214 `## Soalan Lazim` · L266 `## Playbook C-Bet, Secara Ringkas` · L278 `## Artikel Berkaitan` · H3 L27 `### C-bet, dalam angka`
**키워드 배치**: continuation bet(+300%) → seoTitle·L38·tldr · what is c bet / meaning → L38 · «good C bet percentage» → L95 + FAQ L260(HUD) · continuation bet sizing → L115 · delayed c-bet → L152(H2로만 · 태그 금지).
**Opus 조정**: 태그에서 «c-bet poker»·«delayed c-bet» 제거(뱅크 §6 카니발) · L69 «Flop Mana Patut C-Bet»→«…Di-C-Bet»(타동 피동 — 선택: B가 «Flop Mana yang Patut Anda C-Bet?»로 바꿔도 된다) · tldr에서 EN의 OOP 문장(«c-bet less out of position … flips to almost always»)은 길이상 뺐다 — 본문 L133 절이 받는다.

### §13 자리
L32 `70%` · L42 `67.6%` · **L65 «A-7-2 rainbow»(EN은 카드 기호 없이 하이픈 표기 — 그대로) · `98.2%` · `45.1%` · `54.9%`** · **L82 K♠ 9♠ 4♠ · L83 Q♥ J♥ 7♣** · L103 `100%` · L104 `60%` · **L105 Q♥ T♥ 7♠ · 8♦ 5♣ 2♠ · A♦ K♠ 2♥ · `45%` `97%` `57.8%`** · L106 `50%` · L111 `70%` `85%` `40%` · L122~125 `$30` `$10` `$20` · **L129 Q♥ T♥ 7♠ · `98.4%`** · **L181 A♣ K♦ vs K♠ 7♦ 2♣ · 베스트5 «K♦ K♠ A♣ 7♦ 2♣»** · **L183 A♥ Q♥ vs 7♠ 6♠ 5♦**(«no hearts on the board») · FAQ L230 `100%` `45%` `50%` `70%` `85%` · L262 `70%` `85%` `40%`
🔴 **ms GTO 글과 수치 일치 확인**: ms `a-high-board-cbet` desc/tldr = «98.2%» · «45.1% berbanding 54.9%» — EN과 동일. «T»는 EN 표기 그대로(`T♥` — 🔴 `10♥`로 바꾸지 마라 · ms GTO 글의 보드 표기를 C에서 대조하라).

### 경험담 자리 (EN 축어)
- **L21**: For my first couple of years, "c-bet" was the only flop plan I had. I raised preflop, so I bet the flop. Every time. … I thought c-betting *was* the strategy. It turns out the c-bet is a scalpel, and I was swinging it like a hammer.
- **L181·L183**: Spot 1 / Spot 2(위 §13) — 1인칭 그대로. «Two years earlier I'd have "continued" out of habit and gotten raised.»

### 하지 말 것
- 머리 주석(«7개 번역본 미전파»)을 근거로 L65·L129 문단을 빼지 마라.
- 태그 «c-bet poker» · «delayed c-bet» · «strategi c-bet» 금지(카니발).

---

## holdem-when-to-fold — EN updated 2026-09-26 (287행)

### 메타 (EN 축어)
| 필드 | EN | 자수 |
|---|---|---:|
| title | When to Fold in Poker: The Skill That Quietly Wins the Most | 59 |
| seoTitle | Why You Can't Lay Down a Good Hand — When to Fold in Poker | 58 |
| desc | Folding is the most underrated winning skill. When to fold preflop and on every street, the pot-odds threshold, and how to lay down a big hand without tilting. | 159 |
| tldr | Folding is the most underrated skill in poker — a fold's worst outcome is zero, while a losing call bleeds chips every time. A solid player folds around 75–85% of hands before the flop, releases missed hands and weak draws that don't meet their pot odds after it, and — hardest of all — lays down strong-but-beaten hands when a passive opponent's line screams value. Most players don't call too much because they can't read hands; they call because the chips already in the pot feel like theirs. They aren't. | 508 |
| category · readTime · emoji | strategy · 16 min · 🛡️ | |
| image / imageAlt | /images/holdem-when-to-fold-hero.webp · «A poker player sliding their cards face-down into the muck under the table lights, choosing to fold rather than pay off a bet» | |
| tags | "when to fold in poker", "when to fold preflop", "when to fold a good hand", "folding discipline", "sunk cost poker", "laying down a big hand", "fold to a river raise", "pot odds fold" | |

### 구조
- L19 도입 경험담 · L21 strategy 링크 · L25 ### Why folding wins → L27 `:::stripe`(85% · 25% 등)
- L36 ## What Folding Really Is (and Why It's the Most Underrated Skill)
- L46 ## When to Fold Before the Flop → L48 `85%` `80%` · L52 starting-hands-chart · L55 3bet
- L61 ## When to Fold After the Flop — Street by Street → L65 이미지 `holdem-fold-board.webp` · L67~71 스트리트별
- L75 ## The Math of Folding: The Pot-Odds Threshold → L79~88 원시 HTML 박스(25% · 29% · 33% · 37.5%) · **L90~93 계산 문단**
- L99 ## The Hardest Fold: Letting Go of a Good Hand → L105~115 원시 HTML 박스 · L117 카드
- L123 ## The Psychology of Folding: Sunk Cost, Ego, and Fear → L127 이미지 `holdem-fold-psychology.webp` · L129 Sunk cost · L131 Ego
- L139 ## "Should I Fold?" — A 30-Second Self-Check → L143 `:::steps`(파이프 표 형식 4행) · L153 `1.5x` `37.5%`
- L157 ## A Real Laydown, Hand by Hand → L159~166 1인칭 핸드
- L170 ## The 7 Most Common Folding Mistakes → L172~184 원시 HTML 박스(L181 Hero-call)
- L190 `:::readnext` 2장(strategy · pot-odds)
- L195 ## FAQ — **12문항**: L197 When should you fold in poker? · L201 Do you lose money when you fold in poker? · L205 How often should you fold preflop? · L209 When should you fold a good hand? · L213 Should you ever fold pocket aces? · L217 When should you fold top pair? · L221 What is the sunk cost fallacy in poker? · L225 Should I fold or call when I'm unsure? · L229 How do you know when to fold to a river raise? · L233 Is folding a sign of weakness? · L237 Can you fold too much in poker? · L241 When should you fold an overpair?
- L247 ## The Folding Playbook, In Short
- L259 ## Related Posts → 카드 4장(strategy · pot-odds «Odds» · 3bet · continuation-bet)
- 마크다운 표 3 · 이미지 2 · 원시 HTML 박스 3 · 디렉티브 stripe·steps·readnext

### 링크 (편차 0)
L21 strategy(thumb) · L52 starting-hands-chart(thumb) · L55 3bet · L90 outs(thumb · 앵커 «rule of 2 and 4») · L255 pot-odds + 3bet + strategy

### 키워드
fold poker / folding poker / poker fold **30** · when to fold in poker 10 · fold poker meaning 10 · when to fold preflop 10 · hero call 40(본문 L181 «Hero-call» 자리) · hero fold 10 · laydown poker 10 · overpair 10 · top pair 10.
🔴 «sunk cost fallacy» 1,300 = 일반 심리학 의도 → H2 「Sunk Cost, Ego…」 안 토큰으로만.

### 현지 SERP
- `when to fold in poker`(MY): 앱 1개(ICM Trainer · 알바니아어 설명) + PAA + **유튜브 쇼츠 2개뿐 — 가이드 글 0.** 영어권에서도 극약.
- **우리가 더 줄 것 3**: ① pot-odds 임계값 표(25~37.5%) ② 30초 자가 점검 ③ 1인칭 두 장면(도입 풀하우스 콜 · A♥K♣ 레이다운).
- PAA: How do you know if you should fold in poker? · Is it better to call or fold all in? · How often should I be folding in poker? · What's the point of folding in poker? · Is folding losing in poker? · What's the luckiest hand in poker?

### 확정 카피 (Fable → Opus 조정)
| 필드 | ms | 자수 |
|---|---|---:|
| title | Bila Patut Fold dalam Poker: Kemahiran yang Diam-Diam Paling Banyak Menang | |
| seoTitle | Tak Sanggup Lepas Tangan Bagus? — Bila Patut Fold dalam Poker | 61 |
| desc | Fold ialah kemahiran menang paling dipandang rendah. Bila patut fold preflop dan setiap street, ambang pot odds, dan cara lepaskan tangan besar tanpa tilt. | 155 |
| tldr | Fold ialah kemahiran paling dipandang rendah: hasil terburuk fold ialah sifar, sedangkan call yang kalah membocorkan cip. Pemain mantap fold sekitar 75–85% tangan preflop, melepaskan draw yang tak cukup pot odds, dan melepaskan tangan kuat apabila corak lawan pasif jelas menunjukkan value. Cip yang sudah dalam pot bukan milik anda lagi. | 338 |
| tags | "bila patut fold dalam poker", "when to fold in poker", "fold preflop", "fold tangan bagus", "disiplin fold", "sunk cost poker", "lepaskan tangan besar", "fold kepada raise river" | |

**H2**: L36 `## Apakah Sebenarnya Fold dalam Poker (dan Mengapa Ia Kemahiran Paling Dipandang Rendah)?` · L46 `## Bila Patut Fold Sebelum Flop?` · L61 `## Bila Patut Fold Selepas Flop — Street demi Street?` · L75 `## Matematik Fold: Apakah Ambang Pot Odds?` · L99 `## Fold Paling Sukar: Bagaimana Melepaskan Tangan yang Bagus?` · L123 `## Psikologi Fold: Sunk Cost, Ego dan Rasa Takut` · L139 `## "Patutkah Saya Fold?" — Semakan Diri 30 Saat` · L157 `## Contoh Laydown Sebenar, Tangan demi Tangan` · L170 `## Apakah 7 Kesilapan Fold Paling Biasa?` · L195 `## Soalan Lazim` · L247 `## Playbook Fold, Secara Ringkas` · L259 `## Artikel Berkaitan` · H3 L25 `### Mengapa fold menang`
**키워드 배치**: when to fold in poker + fold poker → seoTitle · fold poker meaning → L36 · when to fold preflop → L46(«Sebelum Flop» — EN «Before the Flop» · 자동완성 «when to fold before the flop») · hero fold → L99 본문(H2 괄호 X) · sunk cost → L123 H2 토큰까지만 · hero call → 본문 L181(Hero-call 실수 항목) · PAA «How often should I be folding» → FAQ L205.
**Opus 조정**: tldr «menjerit value»(«screams value» 직역) → «corak lawan pasif jelas menunjukkan value» · 마지막 문장 EN «They aren't.» 뜻 복원(«bukan milik anda lagi») · L99 괄호 «(Hero Fold)» 삭제(EN에 없는 라벨) · L123 «Sunk Cost Fallacy»→«Sunk Cost»(EN 축어 · 일반 의도 쿼리 끌어오기 방지) · L46 «Preflop»→«Sebelum Flop».

### §13 자리
L28 `85%` · L30 `25%` · L48 `85%` `80%` · **L83~86 임계값 표 `25%` `29%` `33%` `37.5%`** · **L90 `46` · `19.6%` · `4-to-1` · `18%`** · **L92 `$100` `$50` `$150` · `3-to-1` · `25%` · `19.6%`** · **L93 `$25` `$100` `$125` · `5-to-1` · `16.7%` · `19.6%`** · L110 QQ · L112 `34%` · **L117 9♠ 9♣ 9♥ · 5♥ 2♥ · A♥ K♥ · `34%` `16%`** · L153 `1.5x` `37.5%` · **L159~166 `$1/$2` `100bb` · A♥ K♣ · K♦ 9♠ 4♥ · 7♣ · 9♥ · 베스트5 «K♣ K♦ 9♠ 9♥ A♥»** · L207 `85%` `80%` · L250 `85%` · L251 `25%` `33%`
🔴 L90~93 팟오즈 산수·L117·L166은 C 손검산 대상. «X-to-1»은 ms에서 «X:1»로 써도 되나(🅱 레인 결정) **숫자 불변** — C 스크립트가 정규화한다.

### 경험담 자리 (EN 축어)
- **L19**: The most expensive hand of my first year wasn't one I lost — it was one I refused to lose. I flopped top two pair, a passive old-timer raised me on a paired river, and every alarm bell said *he has a full house.* I called anyway. I told myself I "couldn't fold after putting that much in." He tabled the boat, and I drove home replaying the exact moment I knew and called regardless. That night I learned the truth every winning player eventually accepts: ==the fold is the most powerful move in poker, and the hardest to make.==
- **L159**: Here's a fold I'm proud of, spelled out so you can check it yourself. $1/$2 cash, 100bb deep. (→ L161~166)
- **L166 끝**: **The hand was strong. The situation wasn't.**

### 하지 말 것
- 태그 «sunk cost poker»는 EN 그대로 두어도 되나 말레이어 «kos tenggelam» 단독 태그 금지(볼륨 null · 일반 경제 용어).
- seoTitle 머리에 «sunk cost fallacy» 금지.
