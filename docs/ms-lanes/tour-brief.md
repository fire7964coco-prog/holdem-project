# ms-tour 브리프 — 🅳 토너먼트 클러스터 4편 (A 구간 산출 · 2026-09-26)

> **B 구간의 입력은 이 파일 + EN 마스터 4편(읽기 전용 · 골격 복사용)뿐이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5 · 키워드 근거 = `docs/keyword-bank/ms-tour.md`.
> EN 기준 = 브랜치 `harden-ms-tour` @ `4fd7dbb3`(main과 동일). EN `updated`: tournament **2026-09-24** · icm **2026-09-09** · bubble **2026-09-13** · short-stack **2026-09-24** → 편마다 `masterUpdated`에 그 값.

## 0. B가 이 브리프를 쓰는 법

- **EN 마스터 파일 = 골격 복사용 열람만**(정본 §3 🟢 — 🅱 파일럿 해석을 헤드가 승인). 메타·H2/H3·FAQ·이미지·디렉티브·링크·경험담·§13 자리는 이 브리프에 **축어/라인 번호로** 실었다. 산문 단락·표 본문은 EN 파일에서 옮긴다. 🔴 **사실·수치·카드는 EN 축어뿐** — 기억·웹·MCP·다른 로케일 파일로 보태지 마라(B에서 열지 않는다).
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-ms/holdem-hand-rankings.ts`의 필드 모양 복사. `date`/`updated` = 집필일 · `masterUpdated` = 위 EN `updated` · `slug`·`image`·본문 이미지 경로 = EN과 동일 · `keepImagesInBody: true`(EN 4편 전부 있음) · `imageAlt`는 말레이어로 옮긴다(hand-rankings 선례) · 🔴 **content에 히어로를 넣지 않는다**(다국어 렌더러가 그린다).
- **파일 끝**: EN icm·bubble·short-stack은 `export default POST;`가 있고 tournament는 없다 — ms 파일은 hand-rankings 모양을 따른다(형식 차이는 결손이 아니다).
- **등록**: `lib/posts-ms/index.ts`의 `// [ms-tour import 시작]`~`끝` · `// [ms-tour 배열 시작]`~`끝` 두 칸에만. 변수명 `holdemTournament` · `holdemIcm` · `holdemBubble` · `holdemShortStack`.

## 1. 공통 결정 (4편 전부)

### 1-A. 고정문 (정본 §1-A — 판단하지 말고 그대로)
`> **Jawapan ringkas**` · `:::readnext[Baca seterusnya]` · `## Soalan Lazim` · `## Artikel Berkaitan`(EN «Related Guides»·«Related Posts» 둘 다) · readTime `"N minit"`(EN 숫자 그대로: tournament 14 · icm 13 · bubble 13 · short-stack 13) · category `"tournament"`(EN 값) · 문중 `anda` / 문두·제목 `Anda`.
- EN 4편에는 `> **Quick answer**` 블록이 **없다** — 대신 각 H2 첫 문장이 굵은 직답(`**…**`)이다. ms도 **같은 자리에 굵은 직답 문장**을 둔다(40~75단어 자기완결 단락의 첫 문장). `> **Jawapan ringkas**` 블록을 새로 만들지 않는다(구조 패리티).

### 1-B. 검색 표면 = 말레이어 훅 + **영어 술어 토큰** (뱅크 §0)
말레이어형 볼륨 전멸 · SERP 전부 영어 → seoTitle·H2에 `poker tournament`·`ICM`·`chip chop`·`bubble`·`bubble factor`·`short stack`·`push/fold`·`fold equity`·`M-ratio`를 **영어 그대로** 두고 문장은 말레이어로. 🔴 단독 머리어(`icm`·`short stack`·`m ratio`·`chip chop`·`freezeout`)는 반드시 «poker»/짝 토큰과 붙인다(뱅크 §4).

### 1-C. 용어 (정본 `ms-posting-reference.md` + 이번 실측 · 🆕 = 진행 파일 «신규 용어» 표 등재)

| EN | ms | 근거 |
|---|---|---|
| tournament | **tournament** (제목·H2·산문 전부) — «kejohanan» 쓰지 마라 | 코퍼스 tournament 90 : kejohanan 35 · 형제 글 tvc가 tournament · 검색 표면 · 🆕 (기존 blind-meaning·계산기의 «kejohanan»은 헤드 정리 대상 — 헤드 요청) |
| buy-in · rake · fee | buy-in · rake · **yuran** | tvc buy-in 30 · yuran 4 |
| prize pool · payout · pay jump · min-cash | prize pool · payout · pay jump · min-cash 영어 | tvc prize pool 2 · payout 10 · pay jump 2 · `/ms/calculator` «prize pool» |
| ITM / in the money | **ITM** + 첫 등장 «kedudukan berbayar (in the money)» | tvc «kedudukan berbayar» 2 |
| bust / eliminated | **tersingkir** (동사 «tersingkir», 명사 «penyingkiran») · 관용 «bust» 영어는 표 라벨·인용에만 | tvc tersingkir 2 · bust 4 |
| survive / survival | **bertahan** / kelangsungan (산문) | tvc bertahan 8 |
| blind level · level | **blind level** (복수 «blind level») · 표 머리 «Level» | tvc blind level 3 · 🆕 |
| clock (blind 시계) | **jam** (시계 뜻 · blind-meaning «jam kejohanan» 선례) — «call the clock»·clock call 벌칙은 **clock** 영어 | 🆕 · 🔴 **shove를 «jam»으로 쓰지 마라** — 말레이어 jam = 시·시계(코퍼스 낱말 24건 전부 이 뜻) |
| structure sheet | **helaian struktur** (첫 등장 «(structure sheet)» 병기 1회) | blind-meaning L114 «helaian struktur» · 🆕 |
| starting stack | **stack permulaan** | 🆕 |
| chip leader | chip leader 영어 | 🆕 |
| big / medium / short stack | **big stack / medium stack / short stack** 영어 (bubble·icm 첫 등장 «medium stack (stack sederhana)» 병기 1회) | 검색 표면 short stack poker · tvc «stack sederhana» 1 · 🆕 |
| shove · jam · push | **shove** (동사 «shove», 명사 «shove») · push/fold 영어 · all-in 영어 | 코퍼스 shove 6 · push/fold 6 · all-in 91 |
| fold equity · risk premium · bubble factor · chip EV · $EV · ICM · ICM deal · chip chop · Nash | 영어 그대로 | 코퍼스 equity 190 : ekuiti 0 · `/ms/calculator` «Chip chop»·«deal ICM» |
| ICM tax | **«ICM tax»** 영어 + 첫 등장 «(cukai ICM)» 병기 | 🆕 |
| bubble · on the bubble · bubble boy · stone/hard/soft bubble · burst the bubble · pay the bubble · money bubble · final-table bubble · satellite bubble | 전부 영어 · 동사구 «bubble pecah»(burst) 산문 허용 | 코퍼스 bubble 13 : gelembung 0 · 🆕(«bubble pecah») |
| hand-for-hand · stalling · time bank | 영어 + stalling 첫 등장 «(sengaja melengahkan masa)» | 🆕 |
| final table | final table 영어 | tvc 3 |
| satellite · freezeout · PKO · bounty · KO · mystery bounty · re-entry · rebuy · add-on · deepstack · turbo · hyper-turbo · MTT · SNG · late reg | 영어 그대로 | tvc re-entry 3 · rebuy 1 |
| seat card | **kad tempat duduk** («(seat card)» 병기 1회) | 🆕 |
| loyalty card · photo ID | **kad keahlian** · **ID bergambar** | 🆕 |
| orbit | **pusingan meja** | `/ms/calculator` «Kos satu pusingan» · 🆕 |
| M-ratio · Harrington zones | **M-ratio (Nilai M)** · zon = **Zon hijau / Zon kuning / Zon oren / Zon merah / Zon mati** | `/ms/calculator` 축어(«Nilai M (M Harrington)»·zon 5종) |
| effective stack · first-in | **stack efektif** · **first-in** | `/ms/calculator` 축어 |
| pay/prize ladder · ladder up | **tangga payout** · «naik tangga payout» | 🆕 |
| deal (합의 분배) | **deal** (명사) · «berunding deal» | `/ms/calculator` «deal ICM» · 🆕 |
| casino · card room · poker room · tournament director | kasino · **bilik poker** · tournament director | 🆕 |
| dealer · pot · stack · chips · call · raise · fold · limp · min-raise · 3-bet | pengedar · pot · stack · cip · 액션은 영어 | 정본 §1 |
| position · early/late position · button · UTG · cutoff · small/big blind | **posisi** · posisi awal/lewat · button · UTG · cutoff · small blind / big blind · bb(단위) | 정본 §1 posisi · `/ms/calculator` «posisi lewat» |
| expected value | EV · chip EV | 정본 |
| calculate | kira / dikira / mengira | 🔴 hitung 금지 |
| 🔴 쓰지 마라 | kejohanan · gelembung · stack pendek(산문 병기 외) · timbunan cip · Model Cip Bebas · ekuiti · buta(blind) · tolakan(push) · pembahagian cip · kartu · uang · bisa · karena · ronde · setelah · gratis · hitung · jam(=shove) · «adalah + 명사» | kalkulator.com.my 직역 = 우리 정본과 반대(뱅크 §4) |

### 1-D. 숫자·시간·화폐
- §13 수치(%·bb·$·칩·비율·규정 번호)는 **EN 축어**(영어식 숫자라 변환 없음). `×`·`÷`·`≈`·`≥`·`≤`·`~`·`–` 기호도 그대로.
- 시각(tournament Day 1 타임라인): 숫자는 그대로 두고 오전/오후만 말레이어 — `10:30 pagi` · `12:00 tengah hari` · `12:40–2:40 petang` · `~3:30 petang` · `~5:00 petang` · `6–9 malam` · `9–11 malam`. (C 전사 대조 스크립트는 `am/pm`↔`pagi/tengah hari/petang/malam`을 정규화할 것.)
- 날짜 표기가 나오면 DD/MM/YYYY. `$`는 그대로(링깃 환산 금지).

### 1-E. 링크 — 51편 대조 결과

| EN 대상 | 상태 | ms 처리 |
|---|---|---|
| holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack | 🅳 이 레인 | `/ms/blog/<slug>` |
| holdem-tournament-vs-cash-game · holdem-blind-meaning · texas-holdem-rules-for-beginners | 기존 ms 21편 ✅ | 그대로 |
| holdem-rake · holdem-glossary | 🅴 gloss 레인 | 그대로 |
| holdem-starting-hands-chart · holdem-positions · holdem-3bet · holdem-when-to-fold | 🅲 strat 레인 | 그대로 |
| holdem-equity · holdem-pot-odds | 🅱 prob 레인 | 그대로 |
| `/en/calculator` | `/ms/calculator` 운영 ✅ | `/ms/calculator` |
| 🔴 **apt-incheon-2026-guide** (tournament L191 본문 · L321 readnext) | 제외 대회가이드 | **L191 = 문장째 빼기**(링크 하나를 위한 안내문이라 링크를 빼면 문장이 빈다 · 대체할 51편 없음) · **L321 = holdem-icm으로 대체**(readnext 3장 유지) → 진행 파일 «링크 편차» 2행 |

- 썸네일 인자(`"thumb:/images/…"`)는 EN 그대로. 앵커 텍스트만 말레이어.
- **페이지 내 앵커 `(#…)`·`<a id>`·`<br/>` = 4편 모두 0개**(grep 확인). 원시 HTML은 tournament의 Day 1 타임라인·체크리스트 카드·관련글 그리드, 나머지 3편의 관련글 그리드 + icm 표 3·bubble 표 1·short-stack 표 2를 감싼 `<div style=…>` 래퍼 — **축어로** 옮기고 글자만 말레이어로(스타일 문자열 한 글자도 바꾸지 마라).
- 외부 링크: 없음(규정 번호 WSOP 126·80·40·113·114, TDA RP-8-A/C/D는 링크 없는 인용 — 축어).

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩 · tldr 안 마크다운 · «lengkap/panduan lengkap/semua yang anda perlu tahu» · slug·이미지 변경 · 인니어 · **말레이시아 카지노·대회·금액 창작**(Genting·Poker Dream·링깃 금액 금지 — 수요는 있으나 EN에 사실이 없다 · 뱅크 §4) · **법·종교 축 추가**(PAA «Is poker halal» 금지 · tournament FAQ 5는 EN 중립 문장만) · EN에 없는 PAA 소재(42 rule·short deck) 추가.
하이라이트 색 마커(`==g:` `==r:`)는 EN 자리 그대로(tournament L89·L163 g · icm 표 r/g 6칸).

---

## holdem-tournament — EN updated 2026-09-24

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | How Poker Tournaments Work — Buy-Ins, Formats & Day 1 |
| seoTitle | Never Played a Poker Tournament? Here's How It Works |
| desc | How do poker tournaments work? Buy-ins, blind structure, payout structure, freezeout vs PKO vs satellite formats, and a first-timer Day-1 checklist. |
| tldr | In a poker tournament you pay a fixed buy-in for chips, blinds increase on a timer until one player holds all chips. Top 10–15% of players cash. Formats include freezeout, PKO, satellite, and deepstack — enter via direct buy-in, satellite, or online pre-registration. |
| category · readTime · emoji | tournament · 14 min · 🏆 |
| image · imageAlt | /images/holdem-tournament-hero.webp · Crowded live poker tournament floor with the blind clock showing 12,000/24,000 as players contest a hand |
| date · updated | 2026-06-16 · 2026-09-24 · `keepImagesInBody: true` |
| tags | how do poker tournaments work · poker tournament structure · poker tournament blind structure · poker tournament payout structure · types of poker tournaments · freezeout poker tournament · pko poker · satellite poker tournament · how to play tournament poker |

### 구조 (EN L## · 축어) — 표 5 · 이미지 0(본문) · HTML 카드 3 · FAQ 9

- L29–33 경험담 도입 3단락 → `---`
- L37 ### At a Glance · L39–43 `:::stripe` (3행: `10–15% | of the field typically gets paid` / `20–40 min | per blind level live (60+ at flagship Mains)` / `$100+$9 | how a typical buy-in splits — prize pool + fee`)
- L45 ## What Is a Poker Tournament? (30-Second Answer)
- L55 ## Poker Tournament Structure — Buy-Ins, Fees, and Starting Stacks — 표 L59 (2열 · 2행)
- L74 ## Poker Tournament Blind Structure — Levels, Antes, and the Clock — 표 L80 (4열 · 4행) · L89 `==g:…==` 규칙 한 단락
- L99 ## The 4 Stages Every Tournament Goes Through — H3 L101 Stage 1 — Early Levels (100–200 BB deep) · L104 Stage 2 — Middle Stages (30–60 BB) · L107 Stage 3 — The Bubble · L110 Stage 4 — Final Table
- L115 ## Types of Poker Tournaments — Freezeout, PKO, Satellite, Deepstack & More — 표 L117 (3열 · **10행** 형식) · H3 L134 What Is a Freezeout Poker Tournament? · L138 What Is PKO Poker? (Progressive Knockout) · L142 What Is a Deepstack Poker Tournament? · L146 rebuy/add-on 굵은 문단
- L150 ## What Is a Satellite Poker Tournament? — L154–157 예시 리스트 3 · L163 `==g:…==`
- L167 ## How to Enter a Poker Tournament — 3 Ways — H3 L169 Option A: Direct Buy-In at the Casino (Easiest)(번호 6) · L177 Option B: Online Pre-Registration(불릿 4) · L184 Option C: Satellite Qualifier(불릿 3) · L189 굵은 문단 · 🔴 L191 삭제(§1-E)
- L195 ## How to Play Tournament Poker — Strategy by Stage — 굵은 머리 4단락
- L209 ## What Happens on Day 1 — Hour by Hour — L213–245 HTML 타임라인(머리 «Day 1 Timeline — $300 Freezeout, 10,000 Starting Chips» + 7행)
- L249 ## Poker Tournament Payout Structure — Who Gets Paid What — 표 L253 (4열 · 4행) · L260–264 실사례 리스트 4
- L270 ## Tournament Glossary — Terms You'll Hear on Day 1 — 표 L274 (2열 · **16행** · `|------|` 구분선 형식)
- L295 ## First Tournament Checklist — L297–314 HTML 체크리스트(«Before You Leave Home» 5행 · «At the Venue» 4행 · 마지막 행 `!` 주황 아이콘)
- L318 `:::readnext[Keep reading]` 3장 → ms `:::readnext[Baca seterusnya]` (§링크)
- L324 ## FAQ (9문항) · L364 ## Related Guides(HTML 카드 6)

### 링크 (EN 축어 → ms `/ms/blog/<slug>`)

- L51 [Poker Tournament vs Cash Game — Which Should You Play?](/en/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")
- L64 [how poker rake works] → holdem-rake
- L91 [short-stack strategy — when to push or fold] → holdem-short-stack
- L95 [what the small blind and big blind actually are] → holdem-blind-meaning
- L108 [the bubble deserves its own guide] → holdem-bubble
- L111 [ICM (the Independent Chip Model)](/en/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp")
- 🔴 L191 [APT Incheon 2026 guide] → **문장 삭제**(링크 편차)
- L199 [starting hands chart] → holdem-starting-hands-chart
- L203 [short-stack strategy] → holdem-short-stack
- L272 [poker glossary] → holdem-glossary
- readnext L319–321: `/en/blog/holdem-tournament-vs-cash-game | Tournament vs Cash Game | /images/tournament-table-action.webp` · `/en/blog/holdem-bubble | What Is the Bubble in Poker? | /images/holdem-bubble-hero.webp` · 🔴 `/en/blog/apt-incheon-2026-guide | … ` → **`/ms/blog/holdem-icm | <icm ms title> | /images/holdem-icm-hero.webp`**. 제목 = 대상 ms Post의 `title` 현재 값(tvc = «Cash Game vs Tournament Poker: Mana Patut Pemula Main Dahulu?» · bubble·icm = 아래 확정 카피 title).
- 관련글 카드 L367–396 (라벨 · 제목 · 설명 3줄 말레이어 · href만 `/ms/blog/…`): holdem-tournament-vs-cash-game(Deep Dive) · holdem-starting-hands-chart(Strategy) · holdem-short-stack(Short Stack) · texas-holdem-rules-for-beginners(Start Here) · holdem-blind-meaning(Blinds) · holdem-positions(Positions)

### 키워드 (실측 2026-09-26 · 뱅크 §1·§6)
| 토큰 | Vol | 자리 |
|---|---:|---|
| poker tournament / tournament poker | 90 (SERP = 일정 — 헤드어 불가) | seoTitle·title 토큰만 |
| mtt poker | 20 | 형식 표 MTT 행 · 태그 |
| how do poker tournaments work · poker tournament structure · blind structure · payout structure | 각 10 | seoTitle·desc·H2 L45·L55·L74·L249 |
| freezeout poker · pko poker · satellite poker · sit and go poker · mystery bounty · itm poker · how long do poker tournaments last | 각 10 | H3·H2 L150·FAQ 1·6·태그 |
| PAA «Is it real money in poker tournaments?» | — | H2 L45 직답(«칩은 돈이 아니다·freezeout 최대 손실 = buy-in») · FAQ 8 |
🔴 함정: 헤드어·지역어(genting 70 · malaysia 40 · asia 50) = 일정 의도 → 태그 금지 · PAA «halal» 금지.

### 현지 SERP
- 말레이어 쿼리(«cara main tournament poker»)에도 top10 전부 영어 · 말레이어 토너먼트 입문 글 **0**.
- 상위 somuchpoker(5,280단어 · 표 6)는 제휴 사이트 목록이 절반 · 888poker는 blind 표·형식 정의 없음.
- **우리가 더 줄 것 3가지**: ① 1인칭 첫 대회 경험 + 시간대별 Day 1 타임라인(경쟁 0) ② blind level 표로 «칩을 잃지 않았는데 200BB→10BB» 보여주기 ③ 실제 payout 사례(WPT Seminole 2024 수치) + 16개 용어표.
- PAA 축어: «Is it real money in poker tournaments?» → H2 L45·FAQ 8 · «How do you win in a poker tournament?» → H2 L195(전략 골격) 첫 문장이 받는다(새 사실 X).

### 확정 카피 (Fable 서브 1회 → Opus 글자 수 실측·조정 · 2026-09-26)

| 필드 | ms | 글자 |
|---|---|---:|
| title | Bagaimana Poker Tournament Berjalan — Buy-in, Format & Hari Pertama | 67 |
| seoTitle | Belum Pernah Masuk Poker Tournament? Ini Cara Ia Berjalan | 57 |
| desc | Kali pertama masuk poker tournament? Fahami buy-in, blind structure, payout structure, freezeout vs PKO vs satellite, serta senarai semak Hari 1. | 145 |
| tldr | Dalam poker tournament, anda bayar buy-in tetap untuk cip, dan blind naik mengikut jam sehingga seorang pemain memegang semua cip. Sekitar 10–15% pemain teratas dibayar (ITM). Format termasuk freezeout, PKO, satellite dan deepstack — masuk melalui buy-in terus, satellite atau pendaftaran awal dalam talian. | 307 |
| tags | "poker tournament", "how do poker tournaments work", "poker tournament structure", "poker tournament payout structure", "freezeout poker", "pko poker", "satellite poker", "cara main tournament poker" | |

**H2/H3 (EN L## 1:1 · (Q) = 질문형)**
- L37 ### Sekilas Pandang
- L45 ## Apakah Itu Poker Tournament? (Jawapan 30 Saat) (Q)
- L55 ## Bagaimana Struktur Poker Tournament? Buy-in, Yuran dan Stack Permulaan (Q)
- L74 ## Bagaimana Blind Structure Poker Tournament Berfungsi? Level, Ante dan Jam (Q)
- L99 ## 4 Peringkat yang Dilalui Setiap Tournament — H3 L101 Peringkat 1 — Level Awal (100–200 BB) · L104 Peringkat 2 — Pertengahan (30–60 BB) · L107 Peringkat 3 — Bubble · L110 Peringkat 4 — Final Table
- L115 ## Apakah Jenis-jenis Poker Tournament? Freezeout, PKO, Satellite, Deepstack & Lain-lain (Q) — H3 L134 Apakah Itu Freezeout Poker Tournament? · L138 Apakah Itu PKO Poker? (Progressive Knockout) · L142 Apakah Itu Deepstack Poker Tournament?
- L150 ## Apakah Itu Satellite Poker Tournament? (Q)
- L167 ## Bagaimana Cara Masuk Poker Tournament? 3 Cara (Q) — H3 L169 Pilihan A: Buy-in Terus di Kasino (Paling Mudah) · L177 Pilihan B: Pendaftaran Awal Dalam Talian · L184 Pilihan C: Layak Melalui Satellite
- L195 ## Bagaimana Cara Main Tournament Poker? Strategi Ikut Peringkat (Q)
- L209 ## Apa yang Berlaku pada Hari 1? Jam demi Jam (Q)
- L249 ## Bagaimana Payout Structure Poker Tournament? Siapa Dapat Berapa (Q)
- L270 ## Glosari Tournament — Istilah yang Anda Dengar pada Hari 1
- L295 ## Senarai Semak Tournament Pertama Anda
- L324 ## Soalan Lazim · L364 ## Artikel Berkaitan
- (질문형 9/13 = 69%)

**FAQ (형식 = `**Q. …?**` + 빈 줄 + `A. …`)**
- L326 Berapa lama poker tournament berlangsung?
- L330 Apakah beza PKO dengan bounty tournament?
- L334 Apakah peraturan rebuy dan add-on?
- L338 Bagaimana poker tournament menjana wang?
- L342 Bolehkah saya anjurkan poker tournament di rumah? — 🔴 답은 EN 3문장 중립만(판정·법 조문 없음 · posting.mdc «접근 가능성 한 줄»). Fable은 «Adakah sah…»를 냈으나 질문에 «sah(합법)»를 박지 않도록 Opus 조정.
- L346 Apakah maksud ITM dalam poker?
- L350 Bolehkah anda sertai poker tournament selepas ia bermula?
- L354 Bolehkah anda keluar awal dari poker tournament dan simpan cip anda?
- L358 Poker tournament lebih kepada nasib atau skill?

- 키워드 배치: how do poker tournaments work → seoTitle 훅·desc·H2 L45 · structure / blind structure / payout structure → H2 L55·L74·L249·desc · freezeout / PKO / satellite → H3·H2 L150·desc·태그 · ITM → tldr·FAQ L346 · how long → FAQ L326 · PAA «real money?» → H2 L45 직답 · PAA «how do you win?» → H2 L195 첫 문장 · mtt poker → 형식 표 MTT 행(태그 8개 한도로 제외)
- Opus 조정 공통(4편 · Fable 원안 대비): 산문 «chip» → **cip**(코퍼스 cip 172 : chip 3 · «chip leader»·«chip EV»·«chip chop»만 영어) · «online» → **dalam talian**(코퍼스 14 : 1) · «Fi» → **yuran**(tvc) · «Starting Stack» → **Stack Permulaan** · tldr는 EN 길이에 맞춰 문장 복원(EN tldr 자체가 300~430자) · 태그는 EN 축어 우선.

### §13 자리 (C 전사 대조·손검산 대상 — 카드 0 · 수치만)
- L40–42 stripe 10–15% · 20–40 min · 60+ · $100+$9
- L59–64 $109 = $100 + $9 · 8–10% · **$9/$109 ≈ 8.3%**(검산 8.26 ✅)
- L66 10,000~50,000칩 · 100–300 BB
- L78 20–40분 · 60분+ · WPT Australia 2026 60분 → 후반 90분
- L80–87 표: 25/50→200BB · 75/150(ante 150)→67BB · 200/400(400)→25BB · 500/1,000(1,000)→10BB (검산 10,000/150 = 66.7 ✅)
- L89 20 / 15 / 10 big blinds
- L101–111 100–200 BB · 30–60 BB · 6–9명
- L140 PKO 50/50
- L155–159 $10,000 · $500 × 20명 = 1석 ✅ · L161 $5 → $55 → $215 → $1,050
- L189 1–3시간
- L199–203 100BB+ · 30–60BB · under 20BB
- L211–245 $300 freezeout · 10,000칩 · 시각 7행 · 25/50 · 200BB · ~40% · 1시간
- L251–258 표 4행 (100→~13 · 500→~60 · 2,000→~250 · 10,000→~1,200 · 배수·% 전부)
- L260–264 WPT Seminole Rock 'N' Roll Poker Open Championship 2024 · $3,500 · 1,435 entries · $4,592,000 ($3,200 × 1,435 = 4,592,000 ✅) · 180명(12.54% ✅ ~12.5%) · 1.83x · $662,200(14.42% ✅ ~14%)
- L301 buy-in + 20% · L304 6–12시간 · L309 30–45분
- FAQ L328 4–8시간 · 4–6일 · L340 8–10% · L348 200명·25명·175명 탈락 ✅ · 1.5–2x · L352 2~4시간

### 경험담 자리 — EN 축어
- **L29** I walked into my first live poker tournament with $200, a vague idea of how Texas Hold'em worked, and zero clue what a "blind level" or "bubble" meant.
- **L31** Four hours later I was out. But I knew exactly what every term meant, why I lost, and when to come back.
- **L33** This guide is everything I wish someone had told me before that day — how tournament structure actually works, which format you're entering, how to register without looking clueless, and what Day 1 feels like hour by hour.
→ ms: 1인칭 유지 · $200·4시간 그대로 · 장소는 EN처럼 **특정하지 않는다**(말레이시아 카지노 이름 금지).

### 하지 말 것
- L140 «(A full PKO strategy guide is coming to this cluster soon.)» — EN 약속문. **그대로 옮긴다**(EN 패리티 · 뺄지 말지는 EN이 정한다).
- L179·L185 브랜드·앱 이름(WSOP LIVE · Caesars Rewards · PokerStars «Events»·«Live» 탭 · Power Path · GGPoker) 축어 — 말레이시아 이용 가능성 논평을 붙이지 마라.
- FAQ L344 합법성: EN 3문장만(«관할마다 다르다·한 줄 테스트는 추측이다·확인하라»). 말레이시아 법 추가 금지.
- L274 용어표 머리 «Shove / JAM» → ms «Shove / Jam» 행은 **설명에 «(bukan "jam" = waktu)» 같은 해설을 붙이지 말고** «Masuk all-in …»으로 뜻만. 산문에서는 jam 금지(§1-C).
- tldr «Top 10–15% of players cash» 수치 그대로.

---

## holdem-icm — EN updated 2026-09-09

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | What Is ICM in Poker? The Independent Chip Model, Explained |
| seoTitle | Your Chips Aren't Worth Face Value — ICM in Poker |
| desc | In a tournament your chips aren't cash — winning only pays first. ICM (the Independent Chip Model) turns your stack into real prize money. Here's how it works. |
| tldr | ICM (Independent Chip Model) converts your tournament chip stack into its real prize-money value, using the payouts and everyone's stacks. Because you only win one first prize, doubling your chips never doubles your money — so the chip leader's stack is worth less than its chip share, and short stacks are worth more. That gap is why you fold hands on the bubble that would be easy calls in a cash game. |
| category · readTime · emoji | tournament · 13 min · 🏆 |
| image · imageAlt | /images/holdem-icm-hero.webp · Final-table poker chips stacked in front of a payout ladder, showing that a bigger chip stack does not convert one-to-one into a bigger share of the prize money |
| date · updated | 2026-07-09 · 2026-09-09 · `keepImagesInBody: true` |
| tags | poker icm · what is icm in poker · icm poker meaning · icm vs chip ev · icm deal · chip chop vs icm · how is icm calculated · icm poker strategy |

### 구조 (EN L## · 축어) — 표 3(전부 `<div style=…>` 래퍼) · 본문 이미지 1 · FAQ 8

- L19 경험담 · L21 `==…==` 강조 도입 · L23 필라 링크 문장 → `---`
- L27 ### ICM at a glance · L29–33 `:::stripe` (`chips ≠ money | You win only one first prize` / `chip leader | worth LESS than their chip share` / `short stack | worth MORE than their chip share`)
- L37 ## What Is ICM in Poker?
- L47 ## Why Your Chips Aren't Worth Their Face Value in Money
- L57 ## How Is ICM Calculated? (The Malmuth–Harville Model) — 불릿 3(L63–65) · 래퍼 표 L69–77(4열 · 3행) · L79 재귀 산식 단락 · 래퍼 표 L83–91(5열 · 3행 · `==$38.39==` `==r:−11.6==` `==g:+2.8==` `==g:+8.9==`)
- L97 ## ICM vs Chip EV — What's the Difference?
- L107 ## The "ICM Tax": Why Losing Chips Hurts More Than Winning Helps
- L117 이미지 `![A medium tournament stack folding to a big stack's shove on the money bubble, chips and a payout ladder in view — the moment ICM pressure turns a normal call into a fold](/images/holdem-icm-pressure.webp "ICM pressure: the medium stack folds because busting on the bubble costs the entire min-cash and every prize above it")` — 🔴 **H2 L119 바로 위**(EN 위치 그대로)
- L119 ## Bubble Factor & Risk Premium: How ICM Changes Your Shoves and Calls — 불릿 2
- L132 ## ICM Deal vs Chip Chop: How to Split a Final-Table Prize Pool — 래퍼 표 L138–146(4열 · 3행 · `==$618==` `==r:−$132==` `==g:+$35==` `==$397==` `==g:+$97==`)
- L152 ## When Does ICM Matter Most — and When Should You Ignore It? — 불릿 3 + 3
- L170 ## How Accurate Is ICM? Its Limitations — 불릿 3
- L182 `:::readnext[Keep reading]` 2장 · L187 ## FAQ (8) · L223 ## The 3 Things to Remember(번호 3 + 링크 문단) · L233 ## Related Posts(카드 4)

### 링크
- L23 [tournament game](/en/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp")
- L43 [never to cash games](/en/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")
- L93 [ICM calculator](/en/calculator) → `/ms/calculator`
- L99 [chip EV](/en/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")
- L125 [open and 3-bet] → holdem-3bet
- L148 [ICM deal calculator](/en/calculator) → `/ms/calculator`
- L156 [money bubble](/en/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")
- L227 [calculator](/en/calculator) → `/ms/calculator`
- L229 [tournament strategy] → holdem-tournament · [poker equity] → holdem-equity · [pot odds] → holdem-pot-odds
- readnext L183–184: `/en/blog/holdem-tournament | Texas Hold'em Tournament Strategy | /images/holdem-tournament-hero.webp` · `/en/blog/holdem-equity | Poker Equity Explained | /images/holdem-equity-hero.webp` → ms 제목 = **대상 ms Post `title`**(tournament = 아래 확정 카피 title · equity = prob 레인 브리프 확정 title **«Equity dalam Poker — Win %, Fold Equity dan Realisasi Equity»**(`Holdem-ms-prob` prob-brief 2026-09-26 · C에서 머지된 실제 파일 값과 대조)
- 관련글 카드 L236–255: holdem-tournament(Tournament · «The pillar ICM belongs to») · holdem-tournament-vs-cash-game(Tournament · «Why ICM never applies to cash») · holdem-equity(Strategy · «Chip EV is just equity in chips») · `/en/calculator`(Free Tool · «ICM Calculator» · «Run your own stacks and deals») → `/ms/calculator`

### 키워드
| 토큰 | Vol | 자리 |
|---|---:|---|
| icm poker · poker icm · what is icm in poker | 각 20 · **12m +71%** | seoTitle · H2 L37 · FAQ 1 |
| chip chop · icm deal | 20 · 10 | H2 L132 · FAQ 4 (chip chop 단독 태그 금지 → «chip chop vs icm» EN 축어 유지) |
| independent chip model · icm poker meaning · chip ev | 각 10 | title · H2 L97 · FAQ 3 |
| icm calculator | 10 | 🔴 `/ms/calculator` 몫 — 본문 링크만 |
| PAA «How do you explain ICM in simple terms?» · «Is ICM the same as chip EV?» · «What are common ICM mistakes?» · «What is the ICM model?» | — | H2 L37 직답 · H2 L97 · FAQ 7 · H2 L57 |
🔴 함정: «icm» 단독 720 = 학교·브로커 · «apa itu icm» = icmp·icmi → 항상 «ICM poker/ICM dalam poker». 기존 ms tvc 태그 «ICM poker»와 카니발(헤드 요청).

### 현지 SERP
- «icm poker»: ICMizer 계산기 · wikipedia · reddit · PokerNews 용어 — **손으로 푼 예시 가진 글 top5에 0**.
- 유일한 말레이어 경쟁 = kalkulator.com.my «Kalkulator ICM Poker»(1,528단어 · 계산기 중심 · 직역투 «Model Cip Bebas»·«gelembung»·«ekuiti»). 그들이 주는 것: 계산기 · «Mengapa ICM penting» · 한계 4줄 · FAQ 7.
- **우리가 더 줄 것 3가지**: ① $50/$30/$20 재귀 계산을 손으로 푼 표 2개 ② ICM deal vs chip chop 금액 비교(+$97) ③ 1인칭 버블 실수 + «세금은 call에 붙는다» 교정.
- PAA 축어는 위 키워드 표.

### 확정 카피 (Fable 서브 1회 → Opus 글자 수 실측·조정 · 2026-09-26)

| 필드 | ms | 글자 |
|---|---|---:|
| title | Apakah Itu ICM dalam Poker? Independent Chip Model Dijelaskan | 61 |
| seoTitle | Cip Anda Tak Bernilai Seperti Angkanya — ICM dalam Poker | 56 |
| desc | Cip tournament bukan wang tunai — hadiah pertama hanya satu. ICM (Independent Chip Model) menukar stack anda kepada nilai hadiah sebenar. Ini caranya. | 150 |
| tldr | ICM (Independent Chip Model) menukar stack cip tournament anda kepada nilai wang hadiah sebenar, berdasarkan payout dan stack semua pemain. Kerana hadiah pertama hanya satu, menggandakan cip tidak pernah menggandakan wang — stack chip leader bernilai kurang daripada bahagian cipnya, short stack pula lebih. Jurang itulah sebabnya anda fold di bubble tangan yang mudah di-call dalam cash game. | 393 |
| tags | "icm poker", "what is icm in poker", "icm poker meaning", "icm vs chip ev", "icm deal", "chip chop vs icm", "how is icm calculated", "ICM dalam poker" | |

**H2/H3**
- L27 ### ICM Sekilas Pandang
- L37 ## Apakah Itu ICM dalam Poker? (Q)
- L47 ## Kenapa Cip Anda Tidak Bernilai Seperti Angkanya dalam Wang? (Q)
- L57 ## Bagaimana ICM Dikira? (Model Malmuth–Harville) (Q)
- L97 ## ICM vs Chip EV — Apakah Bezanya? (Q)
- L107 ## "ICM Tax": Kenapa Kalah Cip Lebih Sakit daripada Menang Cip? (Q)
- L119 ## Bubble Factor & Risk Premium: Cara ICM Mengubah Shove dan Call Anda
- L132 ## ICM Deal vs Chip Chop: Bagaimana Bahagikan Prize Pool Final Table? (Q)
- L152 ## Bilakah ICM Paling Penting — dan Bilakah Boleh Diabaikan? (Q)
- L170 ## Sejauh Mana ICM Tepat? Batasannya (Q)
- L187 ## Soalan Lazim · L223 ## 3 Perkara untuk Diingat · L233 ## Artikel Berkaitan
- (질문형 8/9 · Opus 조정: Fable «"Cukai ICM"» → 영어 «ICM Tax» + 질문형. 본문 첫 등장에 «(cukai ICM)» 병기)

**FAQ**
- L189 Apakah itu ICM dalam poker?
- L193 Bagaimana ICM dikira?
- L197 Apakah beza ICM dengan chip EV?
- L201 Apakah itu ICM deal, dan apa bezanya dengan chip chop?
- L205 Adakah ICM terpakai dalam cash game?
- L209 Bilakah saya patut abaikan ICM?
- L213 Apakah kesilapan ICM yang paling biasa?
- L217 Siapakah yang mencipta ICM?

- 키워드 배치: icm poker / what is icm in poker → title·seoTitle·H2 L37·FAQ L189 · formula / how is icm calculated → H2 L57·FAQ L193 · chip EV → H2 L97·FAQ L197 · ICM deal + chip chop → H2 L132·FAQ L201 · PAA «simple terms» → H2 L37 직답 · «common ICM mistakes» → FAQ L213 · icm calculator → `/ms/calculator` 링크만(Fable 원안의 «ICM calculator» 태그는 계산기 랜딩 몫이라 뺐다) · 태그 = EN 축어 7 + «ICM dalam poker»

### §13 자리 (카드 0 · 핸드 명칭 2 · 수치)
- L19 «pocket jacks»(JJ) vs «ace-ten»(AT) · 4명 남음 · 3명 지급 — 카드 기호 없음, 명칭 축어(«pocket jacks»·«ace-ten» 영어 유지 또는 «JJ»·«A-10»으로 바꾸지 마라)
- L49 $50 / $30 / $20 · $20 보장
- L63–65 재귀 규칙
- L67 $50 / $30 / $20 ($100 pool) · 표 L71–75: 5,000(50%) · 3,000(30%) · 2,000(20%) · 1st 50.0/30.0/20.0 · 2nd 33.9/37.5/28.6 · 3rd 16.1/32.5/51.4 (**재계산 ✅ 전 칸 일치**)
- L79 30% · 5,000/7,000 = 71.4% · 0.30 × 0.714 = 21.4% · 20% · 5,000/8,000 = 62.5% · 0.20 × 0.625 = 12.5% · 합 33.9% ✅
- L85–89 표: $38.39 / 38.4% / −11.6 · $32.75 / 32.8% / +2.8 · $28.86 / 28.9% / +8.9 (**재계산 ✅** 38.39 · 32.75 · 28.86)
- L93 half the chips ↔ 38.4% · 20% ↔ 28.9%
- L109 50% vs 38.4% = 11.6포인트
- L111 40% → 48-50% (🔴 EN은 하이픈 «48-50%» — 축어 유지)
- L121 bubble factor 1.0 · 1.5 · 1.5×
- L136–144 $1,500 · $900/$400/$200 · 표 $750/$618/−$132 · $450/$485/+$35 · $300/$397/+$97 (**재계산 ✅** 617.9 · 485.0 · 397.1)
- L148 $97
- L175 3-big-blind stack
- L178 2025 study
- FAQ L195 «your stack ÷ total chips»

### 경험담 자리 — EN 축어
- **L19** The first time ICM cost me money, I didn't even know it existed. Four of us left, three getting paid, and I looked down at pocket jacks with a middling stack. I shoved, the chip leader called with ace-ten, and I busted on the bubble for nothing. ==For years I filed that away as proof the shove was wrong. It wasn't== — I just had no idea *where* a bubble actually charges you, and that turns out to be the single most important idea in tournament poker.
- **L103**(교정 회고) That is where I had those jacks backwards. The tax is charged on the *call*, and the mirror of that is what makes a bubble playable: because everyone's calling range tightens, your fold equity is worth **more** than it is in chips. First-in shoving is the middle stack's weapon on a bubble, not its leak — I ran into the one player who could call widest, which is variance, not a strategy error. ==Chip EV asks "will this build my stack?" ICM asks "will this build my bankroll?"== — and only the second one pays out.
→ ms: L19와 L103은 **한 이야기**다(«shove가 틀린 줄 알았다 → 아니었다, 세금은 call에 붙는다»). 🔴 두 자리의 결론을 뒤집지 마라 — «shove가 실수였다»로 옮기면 D유형(유해 조언)이다. 이탤릭 `*where*`·`*call*`은 ms에서 `*…*` 유지 가능.

### 하지 말 것 (되돌리지 마라 · EN 확정 문구)
- L101 괄호 «(the guaranteed minimum itself stays yours; on the bubble, where nothing is locked in yet, it costs everything)» — 버블 전/후 구분 단서. **빼지 마라.**
- L134·FAQ L203 «In its simplest form a chip chop…» + FAQ «middle version that first sets aside the payout each player has already locked up» — 뉘앙스 축어.
- L158·L164 «multi-seat satellite … (a winner-take-all satellite is played for first on chip EV)» · «Heads-up for the title, where only two prizes remain» — 조건 단서 유지.
- L175 괄호(3bb 버튼 vs BB 설명) 축어.
- L178 «a large 2025 study … underestimate big stacks and overestimate short stacks» — 출처 링크 없음 · EN 그대로(보태지 마라).
- 🟡 **EN-먼저 후보**: readnext L183 «Texas Hold'em Tournament Strategy»·관련글 카드 L238 동명 — 대상 글 title은 «How Poker Tournaments Work — Buy-Ins, Formats & Day 1»(라벨이 낡음). ms는 대상 ms title로 쓴다.

---

## holdem-bubble — EN updated 2026-09-13

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | How to Play the Bubble in Poker — Big, Medium & Short Stack Strategy |
| seoTitle | How to Play the Bubble in Poker (Stack by Stack) |
| desc | On the bubble, survival beats chips — so the right play flips. How to play a big, medium, or short stack, plus bubble factor, satellites, and hand-for-hand. |
| tldr | The bubble is the spot right before the money, where one more elimination pays everyone else. Because busting means winning nothing, survival is worth more than the chips you'd gain — so calling ranges tighten hard while shoving stays wide. Big stacks attack, medium stacks are the most trapped (not short stacks), and on a multi-seat satellite bubble you fold everything, even aces, once your seat is locked. |
| category · readTime · emoji | tournament · 13 min · 🫧 |
| image · imageAlt | /images/holdem-bubble-hero.webp · A short chip stack and a towering big stack across a tournament table on the money bubble, a payout ladder in the background — the moment survival becomes worth more than chips |
| date · updated | 2026-07-09 · 2026-09-13 · `keepImagesInBody: true` |
| tags | poker bubble · how to play the bubble · bubble strategy poker · bubble factor · short stack bubble · money bubble · satellite bubble · hand for hand poker |

### 구조 — 표 1(래퍼) · 본문 이미지 1 · FAQ 9
- L19 경험담 · L21 `==…==` 도입 · L23 ICM·tournament 링크 문장 → `---`
- L27 ### The bubble in one glance · L29–33 `:::stripe` (`1 bust-out | pays everyone else — survival spikes in value` / `tighten calls | keep shoves wide` / `medium stack | the most trapped, not the short stack`)
- L37 ## What Is the Bubble in Poker? (And "On the Bubble") — 용어 불릿 3(`==**On the bubble**==` 식 하이라이트+굵게 — ms도 `==**…**==` 형태 유지 · 🔴 `**` 중첩 아님)
- L51 ## Why the Bubble Changes Everything: ICM in One Paragraph
- L59 ## The 3 Bubbles You'll Face: Money vs Final-Table vs Satellite — 불릿 3
- L71 이미지 `![ICM pressure infographic — a towering big chip stack looms over a short stack on the money bubble](/images/holdem-bubble-pressure.webp "On the bubble ICM pressure lets the big stack attack — survival is worth more than the chips in the middle")` — H2 L73 바로 위
- L73 ## How to Play a BIG Stack on the Bubble — 불릿 3
- L85 ## How to Play a MEDIUM Stack on the Bubble — 불릿 3
- L99 ## How to Play a SHORT Stack on the Bubble — 불릿 3
- L111 ## Bubble Factor & Risk Premium: The Number That Tells You When to Fold — 산식 단락 L115 · 래퍼 표 L117–127(3열 · 5행)
- L135 ## Hand-for-Hand and Stalling: The Mechanics Nobody Explains — 불릿 3(규정 번호 다수)
- L145 ## The Satellite Bubble: When to Fold Aces — 불릿 3
- L157 ## The Biggest Bubble Mistake: Playing for the Min-Cash
- L165 `:::readnext` 2장 · L170 ## FAQ (9) · L210 ## The 3 Things to Remember · L220 ## Related Posts(카드 4)

### 링크
- L23 [ICM](/en/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") · [tournament](/en/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp")
- L55 [ICM calculator](/en/calculator) → `/ms/calculator` · [ICM guide] → holdem-icm
- L77 [3-bet] → holdem-3bet
- L101 [short-stack push/fold playbook](/en/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp")
- L103 [fold equity] → holdem-when-to-fold
- L131 [ICM calculator](/en/calculator) → `/ms/calculator`
- L216 [ICM] → holdem-icm · [knowing when to let go] → holdem-when-to-fold
- readnext L166–167: `/en/blog/holdem-icm | ICM Explained — Why Chips Aren't Money | /images/holdem-icm-hero.webp` · `/en/blog/holdem-when-to-fold | When to Fold in Poker | /images/holdem-when-to-fold-hero.webp` → ms 제목 = 대상 ms title(when-to-fold는 strat 레인 — 2026-09-26 A 시점에 strat 브리프 없음 → B는 «Bila Patut Fold dalam Poker» 임시 · 🔴 C에서 strat 머지 파일의 title로 교체)
- 관련글 카드 L223–242: holdem-icm · holdem-tournament · holdem-when-to-fold · `/en/calculator`(«ICM Calculator» · «Find your real bubble-factor number») → `/ms/calculator`

### 키워드
| 토큰 | Vol | 자리 |
|---|---:|---|
| poker bubble · bubble poker | 10 | seoTitle · H2 L37 · 자동완성 «bubble poker meaning» |
| bubble factor | 10 | H2 L111 · FAQ 7 |
| money bubble · satellite bubble | 10 | H2 L59 · L145 |
| hand for hand poker | 10 | H2 L135 · FAQ 8 |
| stone bubble | 10 | FAQ 3 |
| 자동완성 «poker bubble boy» · «bubble burst» · «bubble strategy» | — | FAQ 2 · FAQ 4 · seoTitle |
🔴 함정: SERP PAA(«42 rule»·«testosterone»·«100% luck») 주제 밖 → 쓰지 마라. «bubble protection»(GG 상품) → 쓰지 마라(EN에 없다).

### 현지 SERP
- 영어 결과뿐 · top10에 **스택별 체계 가이드 없음**(PokerStrategy는 새틀/DON 한정 · 나머지 뉴스·reddit·X).
- **우리가 더 줄 것 3가지**: ① big/medium/short 스택별 플레이북 ② bubble factor → 필요 equity 표 + 데드머니 보정(52.9%·42.9%) ③ hand-for-hand 규정 번호(WSOP 126·TDA RP-8) + 새틀 «AA 폴드».

### 확정 카피 (Fable 서브 1회 → Opus 글자 수 실측·조정 · 2026-09-26)

| 필드 | ms | 글자 |
|---|---|---:|
| title | Cara Main Bubble dalam Poker — Strategi Big, Medium & Short Stack | 65 |
| seoTitle | Selangkah dari Hadiah — Cara Main Bubble Poker Ikut Stack | 57 |
| desc | Di bubble, bertahan mengatasi cip — langkah yang betul pun terbalik. Cara main big, medium dan short stack, bubble factor, satellite dan hand-for-hand. | 151 |
| tldr | Bubble ialah saat sebelum wang hadiah: satu lagi pemain tersingkir, semua yang tinggal dibayar. Tersingkir bermakna pulang kosong, jadi bertahan lebih bernilai daripada cip — calling range ketat, shoving range kekal luas. Big stack menyerang, medium stack paling terperangkap (bukan short stack), dan di satellite multi-seat anda fold semua, termasuk aces, sebaik seat terkunci. | 378 |
| tags | "bubble poker", "poker bubble strategy", "bubble factor", "money bubble", "satellite bubble", "hand for hand poker", "short stack bubble", "cara main bubble poker" | |

**H2/H3**
- L27 ### Bubble Sekilas Pandang
- L37 ## Apakah Itu Bubble dalam Poker? (Dan Maksud "On the Bubble") (Q)
- L51 ## Kenapa Bubble Mengubah Segalanya? ICM dalam Satu Perenggan (Q)
- L59 ## 3 Jenis Bubble yang Anda Hadapi: Money vs Final Table vs Satellite
- L73 ## Bagaimana Main BIG Stack di Bubble? (Q)
- L85 ## Bagaimana Main MEDIUM Stack di Bubble? (Q)
- L99 ## Bagaimana Main SHORT Stack di Bubble? (Q)
- L111 ## Bubble Factor & Risk Premium: Nombor yang Memberitahu Bila Perlu Fold
- L135 ## Apakah Itu Hand-for-Hand dan Stalling? Mekanik yang Jarang Diterangkan (Q)
- L145 ## Satellite Bubble: Bilakah Anda Patut Fold Aces? (Q)
- L157 ## Kesilapan Bubble Terbesar: Main untuk Min-Cash
- L170 ## Soalan Lazim · L210 ## 3 Perkara untuk Diingat · L220 ## Artikel Berkaitan
- (질문형 7/10 · Opus 조정: «Tiada Siapa Terangkan»(과장 단정) → «Jarang Diterangkan»)

**FAQ**
- L172 Apakah maksud "on the bubble" dalam poker?
- L176 Siapakah bubble boy dalam poker?
- L180 Apakah beza stone bubble dengan soft bubble?
- L184 Apakah maksud "pay the bubble" atau burst the bubble?
- L188 Patutkah anda fold di bubble?
- L192 Adakah short stack paling merasai tekanan bubble?
- L196 Apakah itu bubble factor dalam poker?
- L200 Apakah itu hand-for-hand play?
- L204 Kenapa anda fold aces di satellite bubble?

- 키워드 배치: bubble poker (meaning) → title·seoTitle·H2 L37·FAQ L172 · bubble strategy → title «Strategi»·H2 L73~L99 · bubble factor → H2 L111·FAQ L196·desc · money/satellite bubble → H2 L59·L145·FAQ L204 · hand for hand → H2 L135·FAQ L200·desc · stone bubble → FAQ L180 · bubble boy / burst → FAQ L176·L184 · 태그: Fable 원안 «bubble boy» → EN 축어 «short stack bubble»로 교체(EN 태그 보존 우선)

### §13 자리 (카드 = 핸드 명칭만 · 수치)
- L19 «three players from the money» · «ace-jack» 두 번 오픈폴드 · 14위 · min-cash
- L39·FAQ L174 top 27 지급 → 28명 남음
- L113 BF 1.0 · 1.5 · 1.5×
- L115 산식 `c · BF ÷ (P + c · BF)` · `BF ÷ (1 + BF)` — 🔴 기호·변수명 축어(c·P·BF)
- L119–125 표: 1.0→50% · 1.3→57% · 1.5→60% · 1.7→63% · 2.0→67% (**재계산 ✅** 56.5·60·63.0·66.7 반올림)
- L129 SB 10bb shove · call 9bb · pot 12bb · BF 1.5 → **52.9%** · no ICM → **42.9%** (**재계산 ✅** 13.5/25.5 = 52.94 · 9/21 = 42.86)
- L131 4명 3지급 · BF ~3.0 · ~1.1 · ~1.9 · 6-handed final-table bubble 2.0+ · 1.5–1.7
- L139 2분 · WSOP Tournament Rule 126.a · 126.b · 126.c · TDA RP-8-A · RP-8-C · RP-8-D
- L140 2분 · WSOP 126.a · 126.c
- L147·L149·FAQ L206 AA · KK · «pocket aces»
- L150 WSOP Tournament Rule 80 · Rules 40, 113 and 114 · 인용문 «purposely depleting time banks to ladder up in the payout»(🔴 인용부호 안 영어 원문 유지 + 뒤에 말레이어 풀이)
- FAQ L198 BF ÷ (1 + BF) · 60% · 10bb · 9bb · 12bb · 약 53% · 50%

### 경험담 자리 — EN 축어
- **L19** The most disciplined I have ever played was three players from the money in a Friday tournament, everyone folding like the cards were on fire. I had a middle stack and open-folded ace-jack twice — hands I'd raise every time in a cash game. Two orbits later the short stack busted, I limped into the min-cash… and finished 14th for a payout barely above my buy-in. ==I "survived" my way out of any real money.== That's the bubble in one story: play it too scared and you lock up peanuts; play it right and it's where tournaments are actually won.
→ ms: «limped into the min-cash»는 액션 limp가 아니라 «겨우 기어들어갔다»는 비유 — 말레이어로 비유를 살리고(예: «terhegeh-hegeh masuk ke min-cash») **액션 «limp»로 오독되게 옮기지 마라.** «Friday tournament»의 장소 특정 금지.

### 하지 말 것 (되돌리지 마라)
- L101·FAQ L194 «short stack bubble factor is lower than medium» — 방향 뒤집기 금지(D유형).
- L139 hand-for-hand 동시 탈락 규정: «같은 테이블 = 핸드 시작 시 칩이 적은 쪽이 낮은 순위 · 다른 테이블 = 공동 순위(126.b)·실무상 두 상금 분할 · 선언 순간 진행 중 핸드 = WSOP 126.c·TDA RP-8-A 공통 분할» — 🔴 조건 4개를 **하나도 빼거나 합치지 마라**(규정 정확성).
- L140 «stalling은 핸드 수를 줄이지 못한다(각 핸드 2분 차감)» 논리 유지.
- L147·L151 새틀 예외(«winner-take-all 1석 = chip EV» · «내 자리가 여전히 보장될 때만 call»).
- FAQ L186 «pay the bubble»(위로금)과 «burst the bubble»(마지막 탈락) 구분 유지.

---

## holdem-short-stack — EN updated 2026-09-24

### 메타 (EN 축어)

| 필드 | EN |
|---|---|
| title | How to Play a Short Stack in Poker — Push/Fold Strategy by Stack Depth |
| seoTitle | How to Play a Short Stack in Poker (Push/Fold) |
| desc | Short-stacked in a tournament? Learn push/fold by stack depth — when to jam at 15, 10, and 5 big blinds, the M-ratio zones, and the ICM twist on the bubble. |
| tldr | A short stack (roughly under 20–25 big blinds) can't play normal postflop poker, and from about 15 big blinds down it switches to push/fold: move all-in first-in to keep your fold equity, and never open-limp or min-raise-then-fold. Shove wider from late position, keep your calling range tighter than your shoving range, and don't blind down to nothing 'waiting for a hand' — your fold equity is the weapon, and it fades hard below about 8 big blinds. |
| category · readTime · emoji | tournament · 13 min · 📉 |
| image · imageAlt | /images/holdem-short-stack-hero.webp · A short stack of tournament chips beside a large stack on green felt with a tournament clock behind — the moment a short-stacked player has to move all-in or fold |
| date · updated | 2026-07-09 · 2026-09-24 · `keepImagesInBody: true` |
| tags | short stack strategy · how to play a short stack · push fold strategy · push fold chart · M ratio poker · short stack poker · poker all in strategy · fold equity |

### 구조 — 표 2(래퍼) · 본문 이미지 1 · FAQ 9
- L19 경험담 · L21 `==…==` 도입 + 3부작 링크 → `---`
- L25 ### Short-stack rules at a glance · L27–31 `:::stripe` (`shove first-in | keep your fold equity` / `call tighter | than you shove` / `~8bb | fold equity fades below here — act sooner`)
- L35 ## What Is a Short Stack in Poker? (And How Many Big Blinds) — 래퍼 표 L41–51(3열 · 5행: 25bb+ · 20bb · 15bb · 10bb · ≤5bb)
- L57 ## Why Short Stacks Play Push/Fold: Fold Equity Explained
- L67 이미지 `![A short chip stack pushed all-in across the felt while a bigger stack decides whether to call, tournament clock glowing behind](/images/holdem-short-stack-shove.webp "Short-stack push/fold: the all-in forces a yes-or-no decision and wins the blinds when everyone folds")` — H2 L69 바로 위
- L69 ## The M-Ratio (Harrington Zones): Green, Yellow, Orange, Red, Dead — 래퍼 표 L73–83(4열 · 5행 · 이모지 🟢🟡🟠⚠⚫ 축어) · L85 매핑 단락
- L89 ## When to Go All-In: First-In Shoving by Stack Depth and Position — 불릿 4
- L102 ## Shoving vs. Calling a Shove: Two Different Ranges — 불릿 2 · L111 가격 단락
- L117 ## How to Use a Push/Fold Chart (and Its Limits) — 불릿 3 · L127 이탤릭 괄호 단락 `*(…)*`
- L131 ## Short Stack on the Bubble: The ICM Twist — 불릿 3
- L145 ## The 5 Short-Stack Mistakes That Kill Your Tournament — 번호 5
- L157 `:::readnext` 2장 · L162 ## FAQ (9) · L202 ## The 3 Things to Remember · L212 ## Related Posts(카드 4)

### 링크
- L21 [ICM](/en/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") · [the bubble](/en/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") · [tournament](/en/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp")
- L63 [such a good price] → holdem-pot-odds
- L111 [when to fold] → holdem-when-to-fold
- L123 [bubble/ICM pressure] → holdem-bubble
- L125 [ICM calculator](/en/calculator) → `/ms/calculator`
- L133 [bubble guide] → holdem-bubble
- L141 [ICM guide] → holdem-icm · [calculator](/en/calculator) → `/ms/calculator`
- L208 [ICM] → holdem-icm · [bubble strategy] → holdem-bubble
- readnext L158–159: `/en/blog/holdem-bubble | How to Play the Bubble | /images/holdem-bubble-hero.webp` · `/en/blog/holdem-icm | ICM Explained — Why Chips Aren't Money | /images/holdem-icm-hero.webp` → ms 제목 = 대상 ms title
- 관련글 카드 L215–234: holdem-bubble · holdem-icm · holdem-when-to-fold · `/en/calculator`(«ICM Calculator» · «Compute your real shove/call spot») → `/ms/calculator`

### 키워드
| 토큰 | Vol | 자리 |
|---|---:|---|
| jam poker | **140** (포커 용어 의도 · 12m +20%) | 태그 `jam poker` · FAQ 3에 «shove (atau "jam")» 1회 — 🔴 산문 동사 금지 |
| short stack poker · short stack strategy | 10 | seoTitle · H2 L35 · 🔴 «short stack» 단독 태그 금지 |
| push fold · push fold chart · push or fold | 10 | H2 L57 · L117 · FAQ 2 |
| m ratio poker | 10 | H2 L69 · FAQ 7 (🔴 «m ratio» 단독 = 배급 포털) |
| fold equity · all in or fold · shove poker · when to go all in poker | 10 | H2 L57 · FAQ 8 · FAQ 3 · H2 L89 |
| PAA «What does being a short stack mean?» · «How short is a short stack?» | — | H2 L35 직답 · FAQ 1 |
🔴 함정: SERP가 cash 숏스택(reddit 1/2 · blackrain79)과 섞인다 → 본문은 토너 push/fold 유지, FAQ 9가 혼재 의도를 받는다. «short deck» PAA = 다른 게임 → 금지.

### 현지 SERP
- 영어 결과뿐 · 용어 정의(upswing·pokernews) + cash 숏스택 + 영상.
- **우리가 더 줄 것 3가지**: ① 스택 깊이별 5단 표 + M-ratio 5존(우리 계산기 라벨과 동일) ② «shove 범위 ≠ call 범위» + BB 콜 가격 43.9% · 22 vs AKo 52.65% ③ 1인칭 «12bb에서 min-raise→fold 반복» 실수담.

### 확정 카피 (Fable 서브 1회 → Opus 글자 수 실측·조정 · 2026-09-26)

| 필드 | ms | 글자 |
|---|---|---:|
| title | Cara Main Short Stack dalam Poker — Strategi Push/Fold Ikut Saiz Stack | 70 |
| seoTitle | Cip Makin Susut? Cara Main Short Stack Poker (Push/Fold) | 56 |
| desc | Short stack dalam tournament? Belajar push/fold ikut saiz stack — bila perlu shove pada 15, 10 dan 5 big blind, zon M-ratio, dan kesan ICM di bubble. | 149 |
| tldr | Short stack (kira-kira bawah 20–25 big blind) tidak boleh main postflop biasa, dan dari sekitar 15 big blind ia bertukar ke push/fold: all-in first-in untuk jaga fold equity, jangan open-limp atau min-raise lalu fold. Shove lebih luas dari posisi lewat, calling range lebih ketat daripada shoving range, dan jangan tunggu tangan sehingga blind habiskan stack — fold equity pudar teruk bawah kira-kira 8 big blind. | 413 |
| tags | "short stack poker", "short stack strategy", "push fold strategy", "push fold chart", "M ratio poker", "fold equity", "jam poker", "cara main short stack poker" | |

**H2/H3**
- L25 ### Peraturan Short Stack Sekilas Pandang
- L35 ## Apakah Itu Short Stack dalam Poker? (Berapa Big Blind?) (Q)
- L57 ## Kenapa Short Stack Main Push/Fold? Fold Equity Dijelaskan (Q)
- L69 ## M-Ratio Poker (Nilai M Harrington): Zon Hijau, Kuning, Oren, Merah, Mati — 표 «Zon» 열 = `/ms/calculator` 라벨(«Zon hijau» 등) + EN 이모지 축어
- L89 ## Bilakah Perlu All-In? Shove First-In Ikut Saiz Stack dan Posisi (Q)
- L102 ## Shove vs Call Shove: Kenapa Dua Range Berbeza? (Q)
- L117 ## Bagaimana Guna Push/Fold Chart? (dan Batasannya) (Q)
- L131 ## Short Stack di Bubble: Bagaimana ICM Mengubahnya? (Q)
- L145 ## 5 Kesilapan Short Stack yang Membunuh Tournament Anda
- L162 ## Soalan Lazim · L202 ## 3 Perkara untuk Diingat · L212 ## Artikel Berkaitan
- (질문형 6/8)

**FAQ**
- L164 Berapa big blind dikira short stack?
- L168 Apakah itu strategi push/fold?
- L172 Apakah maksud "all-in or fold" dalam poker? — 답 안에 «shove (atau "jam")» **1회**(jam poker 140 흡수 · 이 자리 외 jam = shove 금지)
- L176 Bagaimana anda patut bertindak balas terhadap all-in shove?
- L180 Patutkah anda limp dengan short stack?
- L184 Adakah min-raise pernah betul ketika short stack?
- L188 Apakah itu M-ratio dalam poker?
- L192 Apakah itu fold equity dan kenapa ia mengecil?
- L196 Adakah strategi short stack berbeza dalam cash game?

- 키워드 배치: short stack poker → title·seoTitle·H2 L35·FAQ L164 · push/fold (chart) → title·seoTitle·desc·H2 L57·L117·FAQ L168 · M-ratio poker → H2 L69·FAQ L188·desc · fold equity → H2 L57·FAQ L192·tldr · all in or fold / jam → FAQ L172·태그 · PAA «how short is a short stack» → H2 L35 직답·FAQ L164 · 태그: EN 축어 우선(«push fold strategy»·«M ratio poker») · Opus 조정: Fable은 jam을 H2 L89 본문에 두자 했으나 FAQ L172(용어 풀이 자리)로 옮김 — 동사 자리보다 오독이 적다

### §13 자리 (핸드 2 · 수치)
- L19 12-big-blind · 1.5 blinds/orbit · 4 big blinds · 두 명 콜
- L28–30 stripe ~8bb
- L37 20–25 · 15 · 60 · 12 big blinds
- L45–49 표 25bb+ · 20bb · 15bb · 10bb · ≤5bb
- L53 12-big-blind · 40-big-blind · ≤5bb
- L63 12–15 · 8–10 · 4–5 big blinds
- L71 산식 `M = your stack ÷ (small blind + big blind + all antes per orbit)` 축어
- L77–81 표: 20+ · ~30bb+ / 10 to under 20 · ~15–30bb / 6 to under 10 · ~9–15bb / 1 to under 6 · ~1.5–9bb / under 1 · under ~1.5bb (🔴 «to under» 경계 표현을 «hingga bawah»처럼 **경계가 살아 있게** — «10–20»으로 줄이지 마라)
- L85 1.5 big blinds · M ≈ bb ÷ 1.5 · M 10 ≈ 15bb · M 5 ≈ 7–8bb
- L93–96 12–15bb · 10–15bb · ~6bb
- L111·FAQ L178 **10bb jam · 9bb risk · 20.5bb pot · 43.9%**(재계산 9/20.5 = 43.90 ✅) · **22 vs AKo 52.65%**(C에서 `lib/poker-eval.ts` 전수 대조)
- L127 10–15 big blinds
- L150 ~8–10bb · L182 15 big blinds · FAQ L166 20–25 · 15 · 10 · ~15 · FAQ L190 20+ · 10 to under 20 · 6 to under 10 · 1 to under 6 · under 1 · ÷ 1.5 · FAQ L194 5 big blinds

### 경험담 자리 — EN 축어
- **L19** The fastest I ever went from "still alive" to "out" was a night I kept min-raising a 12-big-blind stack, folding to the re-raise every time, and bleeding a blind and a half each orbit until I was too short to scare anyone. By the time I finally shoved, I had four big blinds and got called by two players. ==I didn't get unlucky — I played a short stack like it was a deep one.== Once your stack gets small, the entire game changes, and the players who know the new rules run the table.

### 하지 말 것 (되돌리지 마라)
- L111·FAQ L178 «small pairs and weak aces are the *core* of a BB calling range» · «The leak isn't the hand class» — 2026-09 EN 정정 문구. **«작은 페어·약한 에이스는 콜하지 마라»로 되돌리지 마라**(D유형).
- L149 mistake 3 «in the big blind the dead small blind means a genuine flip already clears the chip-EV bar» — 축어 논리 유지.
- L174 «GGPoker's All-in or Fold» 상품명 축어.
- L96 «Under ~6bb … take the next reasonable spot» · L150 «commonly, before you drop under ~8–10bb» — 수치 범위 그대로.
- EN desc의 «jam at 15, 10, and 5 big blinds» → ms desc에서 동사 «jam» 금지(§1-C) → «shove».
