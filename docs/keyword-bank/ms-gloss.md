# MS 키워드 뱅크 — 🅴 용어 클러스터 6편 (ms-gloss 레인 · 2026-09-26)

> 실측 2026-09-26 · 레인 A 구간(서브에이전트 3개 병렬 · 편당 2편). 도구 = DataForSEO Labs `keyword_suggestions`·`related_keywords`·`keyword_ideas`(location 2458) ·
> DFS `keywords_data/google_ads/search_volume/live`(2458 · 🔴 `language_code` 없이 — 선례 `ms-calculator.md` §0) ·
> 라쿠 `search-volume-history`(Malaysia · Malay · requestId **1286786**(bad-beat·cooler) · **1286788**(rake·straddle) · **1286790**(glossary·fish) — **DFS와 전 행 일치** = 같은 Ads 원천, 독립 검증 아님) ·
> 구글 자동완성(`client=firefox&gl=my`, `hl=ms`·`hl=en` · 합계 약 155회) · DFS `serp/google/organic/live/advanced`(2458 · `ms` · mobile · 13회 중 12 성공).
> 원문 확인: Playwright MCP 브라우저 미설치 → 레포 playwright·curl로 원문 HTML의 h2/h3 추출(요약 아님). reddit(`?tl=ms`)·GGPoker id(MY 403)는 SERP 스니펫만.
> 🔴 CPC는 근거로 쓰지 않는다. 🔴 볼륨 «10»은 Google Ads 바닥값 — 서로 비교하지 마라. 🔴 같은 월별 시계열을 가진 키워드는 Ads 클러스터 = **합산 금지**.

## 0. 한 줄 결론

**6편 전부 «말레이어 문형(apa itu·maksud·dalam poker) 볼륨 null + 말레이어 SERP는 사전·위키·인니어·기계번역뿐» — 말레이시아 말레이어 포커 글이 1페이지에 0건이다.**
→ 확률 레인(`ms-prob.md` §0)·계산기 랜딩과 **같은 처방**: 본문·훅 = 말레이어, 술어 = 영어 토큰(`bad beat`·`cooler`·`fish`·`rake`·`straddle`·`poker terms`) + **«Poker» 필수**(단독어는 가전·해산물·갈퀴·옵션거래 의도).
실수요 축(월): poker terms **110**(=jargon·terminology 클러스터) · rake poker **30**(클러스터) · straddle poker **30**(클러스터) · bad beat / bad beat poker / bad beat jackpot **각 20** · rakeback **20** · fish in poker **20**(클러스터) · 나머지 10 이하.

| slug | 헤드(영어 토큰) | 말레이어 훅 자리 | 카니발(기존 ms) | 주의 |
|---|---|---|---|---|
| holdem-glossary | poker terms 110 | istilah poker · istilah dalam permainan poker(SERP 공백) | poker hands 2,900 → `holdem-hand-rankings` 몫 · all-in·betting·blind·showdown·cash game 항목은 **1~2줄 정의 + 링크**만 | maksud nuts/tilt/bluff/poker face = 일반어·노래 의도 |
| holdem-bad-beat | bad beat poker 20 · bad beat jackpot 20 | apa itu bad beat dalam poker | 🔴 `holdem-hand-rankings` L110~111 «Cooler paling lazim» 라벨 + 본문 «bad beat» 혼용(헤드 요청) | jackpot = 운영사 프로모 의도 — 규칙 구조만 |
| holdem-cooler | poker cooler vs bad beat(최근 2개월 신생) · cooler poker | Apakah maksud "cooler"?(말레이 PAA · 현재 답 = 사전 «penyejuk») | 위와 같음 | poker setup 태그 = 테이블 세팅 의도 |
| holdem-fish | fish in poker 20 | maksud fish dalam poker | glossary의 Player Types 절 → 1줄 정의 + 링크 | ikan 용어 채택 금지 · «go fish» 다른 게임 |
| holdem-rake | rake poker 30 · rakeback 20 | apa itu rake dalam poker | `holdem-tournament-vs-cash-game` L91·L370 짧은 언급 — 확장 금지 | rakeback deals/브랜드 = 제휴 의도 · illegal 자동완성 = 판정 금지 |
| holdem-straddle | straddle poker 30 | apa itu straddle dalam poker(1위 = 무관 ms.wikipedia) | 🔴 `holdem-blind-meaning` L118 H2 «(Serta Straddle)» + L122 정의 — 같은 문장 재사용 금지 | PAA 일부 옵션거래 문구 |

---

## holdem-glossary · ms (Malaysia) 키워드·SERP 조사

> 2026-09-26 · DFS 호출 9회(ideas 1 · related 1 · search_volume 2 · SERP 5 중 4 성공 — fish용 1건 40101) · Rakko requestId **1286790**(Malaysia/Malay, 12m, 37개) · 자동완성 73회(hl=ms 43 + hl=en 30, gl=my) · SERP 2건이 이 글 몫(istilah poker · poker terms, +istilah dalam permainan poker)
> Playwright MCP 브라우저 미설치 → curl + 노드 파싱으로 대체(원문 HTML 직접). reddit은 차단돼 SERP 스니펫만.
> 🔴 Rakko 수치 = DFS와 **완전히 동일**(둘 다 Google Ads 원천). 교차검증 = «같은 값 확인»이지 독립 표본이 아니다.

### 볼륨

| keyword | DFS vol | Rakko 12m 추이 | 배정 |
|---|---|---|---|
| poker terms | 110 | 40~210 변동, 최근월 40(-62%) | **seoTitle 영어 토큰** + tag |
| poker jargon / poker terminology | 110 (poker terms와 **같은 묶음값** — Ads 동의어 클러스터, 합산 금지) | 동일 | tag |
| maksud poker face | 70 | 50~90 안정 | **H3 1개 + FAQ 1** («maksud poker face dalam poker») — 🔴 의도 절반 이상은 Lady Gaga 노래·표정(자동완성 «maksud lagu poker face») |
| poker face maksud | 40 | 20~50 | 위와 동일 자리 |
| maksud poker face bahasa melayu | 20 | 10~30 | 위와 동일 |
| maksud tilt | 70 | 50~110 | 버림(헤드) — 자동완성이 «tilt steering / tilted side» = 일반어. 본문 tilt 항목에 «maksud tilt» 문구만 흡수 |
| maksud nuts | 50 | 40~70 | 버림(헤드) — «nutshell / lagu nuts / cashew» 일반어. nuts 항목 H3 문구로만 |
| maksud bluff / maksud bluffing | 30 | 10~70 | nuts와 같은 처리(«maksud bluff di uno» 혼입) |
| rake poker | 30 | 20~90 | 본문 항목(Money 절) |
| maksud poker | 20 | 10~40 | tag |
| limp poker | 20 | 10~30 | 본문 항목 |
| all in poker / bluff poker | 20 | — | 본문 항목 · 🔴 카니발(holdem-all-in-rules) |
| istilah poker | 10(바닥) | 대부분 0 | **seoTitle 말레이어 훅 단어**(볼륨 아닌 SERP 공백 근거) |
| istilah dalam poker · istilah dalam permainan poker | 10 | 0~10 | H2/desc 문구 |
| poker slang · poker glossary · texas holdem terms · poker terms for beginners · poker terms list · poker terms explained · poker vocabulary | 10(바닥) | 0~10 | tag |
| the nuts poker · nuts poker · what does nuts mean in poker · check poker meaning · donk bet · calling station · tilt poker | 10 | — | 본문 항목 |
| poker hands | 2900 | 1900~6600 | 버림 — **holdem-hand-rankings 몫**(카니발) |
| poker face | 2900 | 2400~3600 | 버림 — 노래/표정 헤드 |

**판정**: 말레이어 쿼리는 전부 바닥(10). 수요는 **영어 «poker terms» 110 하나**. → **seoTitle = 말레이어 훅 + English term token**(예: «… — Istilah Poker (Poker Terms) Texas Hold'em»).

### 자동완성

| seed | expansions (축어) | 쓸 자리 |
|---|---|---|
| istilah poker (ms) | istilah poker dalam bahasa indonesia · istilah poker face · istilah poker di hayday · istilah poker dalam bahasa inggris · istilah poker kartu · istilah dalam poker · istilah di poker · arti istilah poker face · apa istilah poker | «dalam bahasa inggris» = 영어 용어 그대로 쓰고 말레이어 설명 → 본문 형식 근거. 🔴 «kartu·arti·bahasa indonesia» = 인니 오염 |
| istilah dalam poker | istilah dalam permainan poker · istilah dalam kartu poker · istilah dalam main poker · **istilah raise dalam poker** · **istilah bom dalam poker** · **istilah full house dalam poker** · istilah dalam bermain poker | raise·full house → 항목 앵커 · «bom» = 인니/현지 카드게임 속어(four of a kind), H3 금지·FAQ 한 줄 후보 |
| maksud poker | maksud poker face · maksud poker face bahasa melayu · maksud poker face meaning · maksud poker dalam bahasa melayu · maksud lagu poker face · maksud muka poker · apakah maksud poker · maksud dari poker face | poker face H3 · «muka poker» = 말레이어 번역형 |
| poker terms | poker terms list · for beginners · slang · hole · and phrases · boat · and meanings · explained · river · flop river turn · for winning · all in · ante in poker terms | H2 구조 = «for beginners / slang / flop turn river» · boat → Hands 절 |
| poker slang | poker slang terms · meaning · for hands · for winning · boat · **for weak player** · for three of a kind · quads · for ace | Slang 절에 fish(=weak player)·trips/set·quads·«bullets/rockets»(ace) |
| poker glossary | poker glossary pdf · wikipedia · upswing poker glossary · poker slang glossary · poker hands glossary | — |
| maksud all in / maksud fold / maksud check | 전부 일반어(all in one · folder · hold · rata kanan) · «arti check in poker»(인니형 1건) | 버림 |
| maksud bluff | maksud bluffing · bluffing dalam bahasa melayu · bluff dalam bahasa malaysia · bluff di uno | bluff 항목 문구 |
| maksud tilt / maksud nuts / maksud flop | 일반어(tilt steering · nutshell · flip flop) | 버림 |
| maksud calling station / maksud river poker / apa itu nuts dalam poker / istilah poker maksud | **(빈 결과)** | 수요 0 — 롱테일 H3로 굳이 만들 근거 없음 |

### SERP

| query·lang | top10 요약 | 판정 |
|---|---|---|
| istilah poker · ms · mobile | 1 langeek.co(인니어 «Kata-kata Bahasa Inggris untuk 'Istilah Poker'») 2 prpm.dbp.gov.my(사전: poker = pakau) 4 ms.wikipedia Poker 5 id.scribd(인니 PDF) 6 ms.glosbe(사전) 7 reddit r/poker ?tl=ms(기계번역) 8 merriam-webster 9 pokerfans.jp(EN) 10 YouTube(EN) 11 id.wikipedia · PASF 2블록 | **말레이어 전용 포커 용어집 = 0건.** 사전·위키·인니 문서·기계번역뿐 → 완전 공백. winnable |
| istilah dalam permainan poker · ms | 1 id.wikipedia «Daftar tangan dalam poker» 2 langeek 4 id.scribd 5 ms.wikipedia 6 ms.glosbe 7 YouTube(인니) 8 ayopokerweb.wordpress(인니, 2017) 9 id.scribd «Poker88» 10 reddit ?tl=ms 11 poker-mon-30.webself(인니, 2020) | 동일 — 상위 전부 인니어·스팸성 도박사이트 블로그. 말레이시아 말레이어 0 |
| poker terms · ms(hl) | 1 en.wikipedia Glossary 3 winstar.com 5 888poker 6 pokernews 7 pokerprofessor 8 pokerfans.jp 9 poker.org 10 partypoker 11 riverboatgamingpoker · 비디오 PokerStars 3개 | 영어 권위 사이트 독점 — ms 페이지로는 난공. 영어 토큰은 title 보조로만 |

PASF(«Orang lain turut mencari») 축어:
- istilah poker: Istilah poker dalam bahasa indonesia · Istilah raise dalam poker · Urutan poker · Cara main kad poker · Urutan kartu poker tertinggi · Maksud poker face / Nama poker · Level poker · Combo poker · Bom poker · Wikipedia poker · Hand poker
- istilah dalam permainan poker: Urutan kad poker · Cara main kad poker · Urutan poker tertinggi · Cara main kad terup · Level poker · Combo poker / Urutan kad terup · Urutan kartu poker dari tertinggi sampai terendah · Poker hand · Full house poker · Cara main poker biar menang · Poker card
- poker terms: Poker terms for beginners · hole · slang · river · cap · dud / for winning · turn · for cards on table · arch · rich · flop river turn

### PAA 축어

(istilah poker·istilah dalam permainan poker SERP에는 PAA 없음)
- poker terms (hl=ms): «What are some common poker terms?» · «What are the 10 types of hands in poker?» · «What are the calls in poker?» · «What are the commands in poker?»

### 현지 상위 글

| URL | 주는 것 | 빠진 질문 | 쓰는 용어 축어 |
|---|---|---|---|
| https://ms.wikipedia.org/wiki/Poker | 정의 1문단 + «Jenis susunan kartu»(1-pair … Flush 표) | 베팅 행동·포지션·속어 전무 | «Poker [po-kĕr] atau pakau» · «permainan daun terup» · «poker hand» · «putaran pertaruhan» · «lipat»(=fold) · «Sepasang kad berangka sama» · 🔴 H3 제목에 «kartu»(인니형) 섞임 |
| https://ayopokerweb.wordpress.com/2017/07/30/istilah-istilah-dalam-poker/ (인니어, SERP 8위) | A~Z 약 150항목 «Term = 설명» 1줄 사전 | 상황별 분류·예시·혼동쌍 없음. **오류 다수**: «Tight = ketat dan agresif»·«Rock … ketat dan agr[esif]»(rock은 수동), «Chop = rake»(chop=분할), «Broadway = A-5 / 10-A»(A-5는 휠), «Lock = 1/2 pot» | «Calling Station = Tipe pemain yang hanya melakukan calling» · «Donkey = Pemain yang buruk (Fish)» · «Fish = Pemain yang buruk/jelek permainannya» · «On Tilt … karena hati sedang panas» · «Ring Game = … Cash Game» · «sedaun»(=suited) · «modal»(=bankroll/stack) |
| https://www.winstar.com/blog/mastering-poker-lingo-a-comprehensive-guide-for-players/ (EN, poker terms 3위) | H2: The Basics of Poker Lingo and Terms · Table Positions and Lingo · Community Cards and Game Variations · Hand Rankings and Common Poker Terms · Additional Poker Terms | 경험담·혼동쌍·속어 뉘앙스 없음 | — |
| reddit r/poker ?tl=ms (SERP 스니펫만, 본문 차단) | 약어 풀이 | — | «SB: Small Blind. Selalunya digunakan untuk merujuk kepada pemain yang mendapat kad di posisi small blind pada tangan itu.» — Google 기계번역이 **kad·tangan·posisi**를 씀 = 우리 코퍼스와 일치 |

### winnable 후보 · 함정 · 카니발 후보

- **winnable**: «istilah poker» · «istilah dalam (permainan) poker» · «istilah poker dalam bahasa inggris»(자동완성) — SERP 말레이어 공백, 경쟁 = 사전·위키·인니 PDF. 볼륨은 바닥이지만 1위가 현실적.
- **winnable(H3/FAQ)**: «maksud poker face dalam poker» — 헤드 70+40+20인데 상위는 노래 해설. 포커 의미 1단락으로 롱테일 가능.
- 함정: «maksud nuts / tilt / bluff / all in / fold / check» — 전부 일반어 의도(nutshell·tilt steering·all in one·folder). 볼륨 보고 H2로 올리지 말 것.
- 함정: «poker face» 2900 · «poker hands» 2900 — 의도 불일치/타 글 몫.
- 함정(인니 오염): 자동완성·SERP의 **kartu · arti · Anda(대문자) · bahasa indonesia · biar menang · sedaun · modal** — 우리 본문에 쓰지 말 것(말레이시아형 = kad · maksud · anda).
- 🔴 «judi»: ms.wikipedia 정의문이 «unsur-unsur judi»를 씀. 우리 글에서는 도박 광고 연상 단어 회피(합법성 축 열지 않음).
- **카니발**: poker hands/«urutan kad poker»(PASF 반복) → holdem-hand-rankings(susunan kad poker 140)로 링크만 · all in → holdem-all-in-rules · check/call/raise/fold → holdem-betting-actions · blind → holdem-blind-meaning · showdown → holdem-showdown-rules · cash game/ring game → holdem-tournament-vs-cash-game. 용어집은 **1~2줄 정의 + 링크**로 끝내고 깊이는 형제 글에 양보.

### 우리가 더 줄 것 3가지

1. **말레이시아 말레이어로 쓴 유일한 홀덤 용어집** — 현재 상위는 인니어·사전·기계번역뿐. «kad / tangan / anda» 표기 자체가 차별점.
2. **정확성** — 인니 상위 글의 오류(tight≠agresif, rock=수동, chop≠rake, Broadway=A-K-Q-J-10, wheel=A-5)를 우리는 맞게. «The Terms People Mix Up Most» 절이 바로 이 혼동쌍을 다룸 → 말레이어 H2로 강조.
3. **상황별 분류 + «maksud poker face dalam poker» 같은 실제 검색문 직답** — A~Z 나열 대신 베팅/포지션/핸드/속어/돈 절 구조 + 영어 원어 병기(자동완성 «istilah poker dalam bahasa inggris» 수요).

### 신규 용어 후보

| EN | Malay seen in the wild | source URL |
|---|---|---|
| poker (card game) | pakau / poker | https://prpm.dbp.gov.my/Cari1?keyword=poker&d=72508& · https://ms.wikipedia.org/wiki/Poker |
| playing cards | daun terup · kad terup (PASF «Cara main kad terup», «Urutan kad terup») | ms.wikipedia / SERP PASF |
| fold | lipat | https://ms.wikipedia.org/wiki/Poker (본문 «… atau lipat») |
| betting round | putaran pertaruhan | https://ms.wikipedia.org/wiki/Poker |
| pair | sepasang kad berangka sama | ms.wikipedia (SERP 스니펫) |
| poker face | muka poker (자동완성 «maksud muka poker») | suggestqueries hl=ms gl=my |
| four of a kind (현지 속어) | bom («istilah bom dalam poker», PASF «Bom poker») — 🔴 인니/현지 카드게임 속어 추정, 확인 전 본문 금지 | 자동완성/PASF |
| hand ranking | urutan kad poker · susunan kad | SERP PASF |
| fish | ikan (pemain baru poker) | https://jmarian.com/ms/en-fish |

---

## holdem-bad-beat — ms (MY) 키워드·SERP 조사

2026-09-26 · 도구 호출: DFS 7회(Labs suggestions 2 · related 1 · Ads search_volume 4, 2458/언어 미지정) · Rakko requestId **1286786** (Malaysia/Malay, 12m) · 자동완성 40회(ms 23 · en 17, gl=my) · SERP 4회(2458/ms/mobile — 이 글 2회: "bad beat poker", "apa itu bad beat dalam poker"; cooler 글과 공유 2회)

**한 줄 결론:** MY의 bad beat 수요는 **전부 영어 쿼리**(합계 월 ~100 미만, 대부분 Ads 하한 10). 말레이 형태("maksud"·"apa itu"·"dalam poker")는 자동완성 0 · 볼륨 null. SERP 상위 10에 **말레이어 페이지 0건**. → seoTitle = 말레이 훅 + 영어 용어 토큰("Bad Beat"). 이기기는 쉽고(말레이 경쟁 없음) 트래픽 천장은 낮다.

### 볼륨

| keyword | DFS vol | Rakko 12m (범위/추세) | 배정 |
|---|---|---|---|
| bad beat | 20 | 20 · 10–30 · 12m −43% | seoTitle 토큰 |
| bad beat poker | 20 | 20 · 10–50(3월 피크) · 12m +4% | seoTitle/H1 토큰 ("Bad Beat Poker") |
| what is a bad beat in poker | 10 | 20(Rakko는 bad beat poker와 동일 시계열 = 병합 추정) | H2 "Apa Itu Bad Beat dalam Poker?" |
| bad beat jackpot | 20 | 20 · 10–70(3월 스파이크) · 12m −50% | H2 (정보형 한정) |
| bad beat jackpot poker | 10 | 10 · 0–10 | tag |
| bad beat jackpot meaning | 10 | — | FAQ |
| bad beat jackpot rules | 10 | — | FAQ ("apa yang mencetuskan") |
| ggpoker bad beat jackpot | 10 | 10 · 12m −100% | **버림**(운영사 브랜드·거래 의도) |
| bad beat meaning | 10 | 10 · 평탄 | tag / 도입부 |
| bad beat poker meaning | 10 | 10 · 25-12 이후 등장 | tag |
| bad beat poker hands | 10 | — | H2 "Contoh Bad Beat Klasik" 유지 |
| poker cooler vs bad beat | 10 | 10 · 최근 2개월 출현 | H2 (cooler 글 링크) |
| how to deal with bad beats | 10(1개월만) | — | H2 유지(말레이 재작성) |
| poker suckout / suck out poker | 10(1개월) | — | 본문 용어만 |
| tilt poker / poker tilt | 10 / 10 | 10 평탄 | H2 안 tilt 문단 · tag |
| tilt maksud | 20 | 20 · 10–40 · 12m **+71%** | 버림(일반어 의도 — 아래 함정) |
| maksud tilt | **70** | — | 버림(일반어: "tilt steering", "head tilt") |
| bad beat maksud · apa itu bad beat | null | null | (볼륨 없음 — H2 문구로만) |

※ Ads 하한 10은 서로 비교 금지. 유의미한 차이는 "bad beat / bad beat poker / bad beat jackpot = 20" 셋뿐.

### 자동완성

| seed | expansions (축어) | 쓸 자리 |
|---|---|---|
| bad beat (ms) | bad beat manhwa, bad beat jackpot, bad beat chapter 1, bad beat poker, bad beat jackpot stake, bad beat brewing, bad beat meaning, bad beat playground, bad beat band | "manhwa"·"brewing"·"band" = 비포커 의도 섞임 → 제목에 poker 한정 필수 |
| bad beat poker | bad beat poker meaning, bad beat poker jackpot, bad beat poker payout, bad beat poker hands, bad beat poker gippsland, bad beat poker playground, bad beat poker room, bad beat poker club, bad beat poker rules | meaning→도입 · hands→예시 H2 · payout/rules→jackpot H2 FAQ |
| bad beat jackpot | bad beat jackpot stake, …ggpoker, …rules, …poker, …meaning, …playground, …grosvenor, …payouts, pokerdom bad beat jackpot | rules/meaning만 FAQ. 운영사명(stake·ggpoker·pokerdom·grosvenor) 금지 |
| bad beat a | …at playground, …at casino, a bad beat in poker | 무시 |
| apa itu bad beat · bad beat maksud · bad beat dalam poker · bad beat adalah · kalah bad beat | **[] (빈 목록)** | 말레이 문형 수요 없음 확인 |
| tilt poker | tilt poker room(인도 방갈로르·구르가온 포커룸), tilt poker meaning | "tilt poker"는 인도 포커룸 브랜드 오염 |
| tilt maksud / maksud tilt | tilt maksud in malay, maksud tilt dalam bahasa melayu, maksud tilt steering, pelvic tilt maksud, head tilt maksud, maksud tilting, maksud tilted | 전부 일반어 — 포커 의도 아님 |
| kk vs aa / set over set | (cooler 글 참조) | — |

### SERP

| query·lang | top10 요약 | 판정 |
|---|---|---|
| "bad beat poker" · ms · mobile | 1 en.wikipedia Bad_beat (sitelinks: Types / Reacting / Bad beats online / Bad beat jackpot) · PAA · 영상팩(Poker Perfected, partypoker) · 2 reddit r/poker · 3 playnow.com BBJ · 4 playground.ca BBJ Rules · 5 Zynga help "What is Bad Beat Jackpot?" · 6 YouTube Shorts PokerNews · 7 pokernews.com/pokerterms/bad-beat · 8 consciouspoker 7 Tips. **전부 영어**, 말레이 0 | 정의형 + BBJ 규칙(카지노 운영 페이지)이 섞인 혼합 SERP. 사전형 얇은 페이지(pokernews 용어집·Zynga FAQ)가 순위 → 경험담+odds 표로 이길 여지 있음 |
| "apa itu bad beat dalam poker" · ms · mobile | AI Overview · 영상 3 · 1 Wikipedia · 2 Zynga help · 3 pokerskill.com "Meaning, Examples, Bad Beat vs Cooler" · 4 playground.ca · 5 Quora · 6 888poker 대처법 · 7 reddit · 8 pokernews BBJ Definition. **말레이 결과 0** | 말레이 쿼리에도 영어 페이지를 줌 = 말레이 콘텐츠 공백. 말레이 페이지 1개면 진입 가능성 높음 |

Related searches(축어, "Orang lain turut mencari"): Bad Beat poker jackpot · Bad beat poker payout · Bad beat poker online · Bad Beat jackpot · Bad Beat jackpot rules · What is a bad beat · Poker bad beat examples · **What is a bad beat in sports betting** · Bad beat blackjack · Bad beat vs cooler · Bad beats espn · Bad Beat Jackpot GGPoker · Bad beat jackpot minimum hand · Bad Beat band

### PAA 축어

("bad beat poker")
- What is a bad beat in poker?
- What does "bad beat" mean in slang?
- Does 3 if a kind beat a flush? (원문 오타 그대로)
- How much should you tip on a bad beat jackpot?
- What triggers a bad beat jackpot?
- How much to tip on $5000 jackpot?

("apa itu bad beat dalam poker") — PAA 없음, AI Overview만.

### 현지 상위 글

말레이어 상위 글 **존재하지 않음**(SERP 2회 + exa 말레이어 탐색 1회 → 중문·타갈로그·영문만). MY SERP에서 실제 순위 잡은 영문 글을 열어 헤딩 추출(curl+grep, 원문 HTML).

| URL | 주는 것 | 빠진 질문 | 용어 축어 |
|---|---|---|---|
| https://www.pokernews.com/pokerterms/bad-beat.htm | 정의 한 문단 + "Bad Beat in Online Poker and Live Poker" + FAQ | 얼마나 유리해야 bad beat인가(%) · cooler 차이 · 대처법 | "highly favored hand losing to an underdog" |
| https://www.pokerskill.com/poker-glossary/bad-beat/ | What a bad beat is · Bad beat vs cooler vs suckout vs runner-runner · When a hand really is a bad beat · Example: aces lose to turned-and-rivered set · Common mistakes (Calling every cooler a bad beat / Counting an overplay as a bad beat / Letting the bad beat justify the next ten hands / Ignoring effective stack) · FAQ(same as suckout? How rare? change next hand?) | Jackpot · 유명 사례 · 왜 bad beat가 이득인가 | "gets the chips in good", "suckout", "runner-runner" |
| https://en.wikipedia.org/wiki/Bad_beat | Types of bad beats · Reacting to bad beats · Bad beats online · Bad beat jackpot | 확률 표 · 실전 대처 | — |

### winnable 후보 · 함정 · 카니발 후보

**winnable**
- "bad beat poker" / "what is a bad beat in poker" — 말레이 경쟁 0, 영어 SERP도 얇은 용어집이 상위. 메인 타깃.
- "bad beat vs cooler"(related search 등장) — cooler 글과 상호 링크로 쌍 점유.
- "bad beat jackpot meaning / rules / what triggers" — **정보형 설명에 한정**하면 PAA 2개 흡수 가능.

**함정**
- "jackpot": SERP 4~5위가 카지노 BBJ 프로모 페이지(playnow·playground·Zynga) + 자동완성에 운영사명(stake·ggpoker·pokerdom·grosvenor). 말레이시아 = 도박 규제국 → **운영사명·지급액·"cara menang jackpot" 류 금지**, 규칙 메커니즘(자격 핸드·분배 구조)만. 팁 PAA("How much should you tip")는 버림.
- "bad beat" 단독 = 비포커 의도 혼재(manhwa·band·brewing·**sports betting**·blackjack). seoTitle에 "Poker" 필수.
- "tilt maksud"(20)/"maksud tilt"(70)는 볼륨 커 보이지만 자동완성이 steering·pelvic·head tilt = 일반어. 포커 tilt 글 신설 근거로 쓰지 말 것.
- 인도네시아 형태: 이번 조사에서 **야생 사례 발견 없음**(kartu/uang/bisa/karena/ronde 미검출 — 말레이·인니 포커 bad beat 페이지 자체가 없음). 번역 시 kad/wang/boleh/kerana/pusingan 유지.

**카니발**
- `holdem-hand-rankings`(ms) 110–111행: 콜아웃 라벨이 **"Cooler paling lazim"** 인데 본문은 "…ialah **bad beat** yang paling kerap…" — 두 글이 이 둘을 구분하는 게 핵심이라 라벨-본문 불일치가 드러남. EN 원문과 대조 후 본체 판단 요망(이 조사에선 수정 안 함).
- `holdem-showdown-rules` / `holdem-all-in-rules`: 현재 bad beat·cooler 언급 없음 → 카니발 위험 낮음. all-in-rules에서 bad beat로 내부링크 1개 권장.

### 우리가 더 줄 것 3가지

1. **"얼마나 유리했어야 진짜 bad beat인가" 에퀴티 표**(AA vs 55 등, §13 검산) — 상위 영문 용어집은 전부 %기준 없음(pokerskill만 서술형).
2. **Jackpot을 도박 홍보 없이 설명** — 자격 핸드·"kalah dengan tangan kuat" 구조·왜 rake에서 떼는지. PAA "What triggers a bad beat jackpot?"에 직답 블록.
3. **1인칭 경험담 + tilt 대처 루틴을 말레이어로** — 말레이어 페이지 자체가 0이라 "apa itu bad beat dalam poker" 쿼리에 대해 유일한 현지어 답.

추천 seoTitle 형식: "Menang 80% Tapi Tetap Kalah? Apa Itu Bad Beat dalam Poker" (말레이 훅 + 영어 토큰 "Bad Beat" + "Poker")

### 신규 용어 후보

| EN | Malay seen | source URL |
|---|---|---|
| bad beat | (말레이 번역어 야생 없음 — 영어 그대로) · 우리 ms 코퍼스 이미 "bad beat" 사용 | lib/posts-ms/holdem-hand-rankings.ts:111 |
| bad beat jackpot | 없음 — 영어 그대로 권장 | — |
| tilt | 코퍼스 이미 "tilt" 영어 그대로 | lib/posts-ms/ (grep "tilt" 2건, 파일 미특정) |
| suckout / runner-runner | 없음 — 영어 + 괄호 풀이 | https://www.pokerskill.com/poker-glossary/bad-beat/ |
| (SERP UI) "Orang lain turut mencari" | Google MY 말레이 UI 문구 — 참고용 | DFS SERP 응답 |

---

## holdem-cooler — ms (MY) 키워드·SERP 조사

2026-09-26 · 도구 호출: DFS 7회(Labs suggestions 2 · related 1 · Ads search_volume 4, 2458/언어 미지정 — bad-beat 글과 공유) · Rakko requestId **1286786** (Malaysia/Malay, 12m) · 자동완성 40회(ms 23 · en 17, gl=my — 공유) · SERP 4회 중 이 글 2회("cooler poker", "maksud cooler dalam poker"; 2458/ms/mobile)

**한 줄 결론:** 모든 cooler 쿼리가 Ads 하한 10(비교 불가). 말레이 문형("apa itu cooler poker", "cooler maksud poker", "cooler dalam poker", "cooler poker adalah") 자동완성 0·볼륨 null. 그러나 **"maksud cooler dalam poker" SERP에 말레이 PAA "Apakah maksud "cooler"?"가 뜨고, 결과는 영문 + ms.wikipedia(Poker 일반) + Glosbe 사전("penyejuk")** = 말레이 답 공백이 확인됨. seoTitle = 말레이 훅 + "Cooler" 영어 토큰 + "Poker" 필수(가전 의도 차단).

### 볼륨

| keyword | DFS vol | Rakko 12m (범위/추세) | 배정 |
|---|---|---|---|
| cooler poker | 10 | 10 · 10–30(2월 피크) · 12m −20% | seoTitle 토큰 ("Cooler dalam Poker") |
| poker cooler | 10 | 10 · 동일 시계열 | tag |
| what is a cooler in poker | 10 | — (DFS 시계열이 cooler poker와 동일 = 병합) | H2 "Apa Itu Cooler dalam Poker?" |
| cooler poker meaning / poker cooler meaning / cooler meaning poker | 10 / 10 / 10 | 10 평탄 | tag · 도입 직답 |
| cooler hand poker | 10(3개월만) | — | H2 "Contoh Tangan Cooler" |
| poker cooler vs bad beat | 10 | 10 · 최근 2개월 출현(12m +300%) | **H2 핵심** (자동완성·related 모두 등장) |
| cooler vs bad beat | 10 | 10 · 간헐 | 위와 병합 |
| set over set | 10 | 10 · 간헐 | H3/예시 |
| set over set poker | 10 | 10 · 간헐 | tag |
| set over set odds | 없음 | 0 | FAQ(확률 1문) — 볼륨 근거 없음 |
| kk vs aa / aa vs kk | 10 / 10 | 10 평탄(11/12개월) | 예시 H3 + FAQ |
| kk vs aa odds | 10(2개월) | 10 간헐 | FAQ에 흡수 |
| poker setup | 10 | — | 버림(포커 테이블 "세팅" 의도 가능성 · 본문 동의어만) |
| coolered | 10(4개월) | — | 본문 용어만 |
| apa itu cooler poker / cooler maksud | null | null | (H2 문구로만) |

### 자동완성

| seed | expansions (축어) | 쓸 자리 |
|---|---|---|
| cooler poker (ms) | cooler poker meaning, cooler poker term, cooler significado poker, cooler poker slang, cooler poker significato, cooler poker là gì, cooler poker hand, cooler pokerkoffer, cooler poker reddit | meaning/term/slang → 정의 직답 · hand → 예시 H2 |
| poker cooler (ms) | poker cooler meaning, **poker cooler vs bad beat**, poker cooler term, poker cooler hand, cooler poker def | vs bad beat = H2 |
| poker cooler (en) | … poker frat cooler, ggpoker cooler | 버림 |
| cooler vs bad beat (en) | cooler vs bad beat poker, cooler and bad beat, is cooler better than fan, are hard or soft coolers better… | **가전 의도 혼입 실증** → "poker" 없는 문형 금지 |
| set over set | set over set poker, set over set odds, probability of set over set, set over set meaning, set over set poker odds, flop set over set odds, how often does set over set happen, how to fold set over set | FAQ: "Berapa kerap set over set berlaku?" · "Boleh fold set over set?" |
| kk vs aa | kk vs aa odds, …preflop odds, …probability, …equity, …poker, …preflop, …reddit, kassouf kk vs aa, chances of kk vs aa | FAQ: KK vs AA 에퀴티(§13 검산 — 메모리 기준 AA 81.95%) |
| apa itu cooler poker · cooler maksud poker · cooler dalam poker · cooler poker adalah | **[]** | 말레이 문형 수요 없음 |

### SERP

| query·lang | top10 요약 | 판정 |
|---|---|---|
| "cooler poker" · ms · mobile | 1 reddit "Are coolers worth avoiding?" · PAA · 2 pokernews.com/pokerterms/cooler · 영상팩(Poker At The Lodge, Jonathan Little ×2) · 3 Quora "cooler vs bad beat" · 4 upswingpoker glossary · 5 thinkingpoker "Bluff Cooler" · 6 blackrain79 "How to Avoid Coolers" · 7 pokervip · 8 redchippoker hand examples. **전부 영어** | 포커 의도로 정리된 SERP(가전 없음) — "poker"가 붙으면 안전. 얇은 용어집 다수 → 경험담+예시로 이길 여지 |
| "maksud cooler dalam poker" · ms · mobile | 1 redchippoker · 2 Quora · PAA **"Apakah maksud "cooler"?"** · 3 **ms.wikipedia.org/wiki/Poker**(일반) · 4 888poker terms/cooler(2026-09-15 갱신) · 5 **ms.glosbe.com "Terjemahan cooler" = jel, pendingin, penyejuk** · 6 pokernews · 7 upswing · 8 pokercode · 9 reddit · 10 natural8.com/en | 말레이 쿼리에 말레이 답이 **사전 번역(penyejuk)뿐** = 공백. 도입 첫 문장에서 "bukan penyejuk" 식 구분 직답이 스니펫 후보 |

Related searches 축어: Why is it called a cooler in poker · Poker cooler vs bad beat · What is a cooler in a casino · What does cooler mean in poker · What is a cooler in a bar · What is a cooler person · What is a heater in poker · Whats a cooler · What is a cooler drink · Playing the rush poker · Poker hands · Bad beat in poker · **Cara main kad poker · Urutan kad poker · Urutan poker tertinggi · Cara main kad terup · Urutan kad terup** · Poker terms

→ 말레이 related가 전부 "urutan kad poker"(= hand-rankings) · "cara main"(= rules) 쪽 → 기존 ms 글로 내부링크 연결 근거.

### PAA 축어

("cooler poker")
- What is a cooler in poker?
- What does "cooler" mean?
- What is the 42 rule in poker?
- What is a dirty diaper in poker?
- Who was the female poker player accused of cheating?
- What is a bad poker player called?

("maksud cooler dalam poker")
- Apakah maksud "cooler"?

### 현지 상위 글

말레이어 포커 cooler 글 **없음**(SERP 2 + exa 1: 중문·타갈로그·영문만). MY SERP 실제 순위 영문 글 원문 헤딩/본문 추출(curl).

| URL | 주는 것 | 빠진 질문 | 용어 축어 |
|---|---|---|---|
| https://www.pokernews.com/pokerterms/cooler.htm | Understanding / Significance / Cooler Strategy / Examples / FAQs — 한 줄 정의 수준 | vs bad beat 구체 기준 · 확률 · 어원 | "almost impossible to fold" |
| https://www.natural8.com/en/blog/what-is-a-cooler-in-poker (아시아 운영사 블로그) | 정의(KK vs AA) · Is a Cooler Different From a Bad Beat? · Can You Avoid Coolers? (EV 예: $100×0.9 − $200×0.1 = $70) · How to Deal With Coolers(bankroll·휴식) | 어원 · set over set 확률 · "핑계로서의 cooler" | "coolered", "sick cooler" |
| https://www.888poker.com/magazine/poker-terms/cooler (2026-09-15 갱신) | What Makes a Hand a Cooler?(3조건) · Cooler vs Bad Beat · Premium Pairs Pre-Flop(KK 9인 테이블 AA 약 4%) · Set Over Set(Selbst vs Baumann 2017) · Full House Battles(Mabuchi vs Phillips 2008) · Should You Ever Fold · How to Handle · FAQ(어원 "cold deck" · 얼마나 자주 · 토너 vs 캐시 · cooler vs 실수 구분 · 프로도 당하나) | 거의 완전. 빠진 것: "It was a cooler"가 핑계일 때 판정 체크리스트의 구체 수치 | "cold deck", "cooled/coolered" |

(참고: upswingpoker glossary는 본문이 JS/광고 블록에 묻혀 헤딩 추출 불가.)

### winnable 후보 · 함정 · 카니발 후보

**winnable**
- "apa itu cooler dalam poker" / "maksud cooler poker" — 말레이 PAA 존재 + 답은 Glosbe 사전뿐 → 직답 블록으로 PAA/스니펫 노림.
- "poker cooler vs bad beat" — 자동완성·related·볼륨 신생(최근 2개월) 삼중 신호. bad-beat 글과 쌍으로.
- "set over set" / "kk vs aa" — 확률 FAQ(§13 검산)로 롱테일 흡수.

**함정**
- "cooler" 단독 = 가전(air cooler·cooler box, "is cooler better than fan") + 음료(cooler drink)·바. seoTitle·H1·첫 문장에 **"poker" 동반 필수**. Glosbe가 "penyejuk"로 번역 → 말레이 독자에게 "cooler ≠ penyejuk" 한 줄 해명이 오히려 가치.
- "poker setup" = 포커 테이블 세팅 의도 가능 → 태그 금지.
- PAA "Who was the female poker player accused of cheating?" 등은 주제 이탈 — 버림.
- 인도네시아 형태: 야생 사례 **미발견**. (related "Cara main kad terup"는 말레이 정형.)

**카니발**
- `holdem-hand-rankings`(ms) 110행 콜아웃 "**Cooler paling lazim**"(flush vs full house) — 라벨은 cooler, 본문 111행은 "bad beat"라 부름. 이 글 발행 시 두 글의 정의가 충돌해 보임 → 본체가 EN 원문 대조 후 한쪽 정리 권고. 겸해서 그 콜아웃에서 이 글로 내부링크.
- `holdem-showdown-rules`·`holdem-all-in-rules`: cooler 언급 없음 → 카니발 없음.

### 우리가 더 줄 것 3가지

1. **말레이어 첫 문장 직답**("Dalam poker, cooler bukan penyejuk — …") — PAA "Apakah maksud "cooler"?"의 유일한 현지어 답.
2. **KK vs AA · set over set 확률을 §13 검산한 표** + "얼마나 자주 당하나"(9인 테이블 KK가 AA 만나는 빈도) — pokernews·natural8엔 수치 없음.
3. **"It was a cooler"가 핑계일 때 판정 체크**(EN 원문 H2 "When 'It Was a Cooler' Is Just an Excuse") — 상위 글 중 888만 한 문단, 나머지 없음. 경험담과 묶어 E-E-A-T.

추천 seoTitle 형식: "Tangan Yang Mustahil Anda Fold — Apa Itu Cooler dalam Poker?" (말레이 훅 + "Cooler" + "Poker")

### 신규 용어 후보

| EN | Malay seen | source URL |
|---|---|---|
| cooler | (포커 의미 말레이어 없음) · 사전 번역 "penyejuk / pendingin" = **포커 의미로 쓰면 오역** | https://ms.glosbe.com/en/ms/cooler |
| set over set | 없음 — 영어 유지 (set = "set"; 코퍼스 확인 필요) | — |
| cold deck (어원) | 없음 — 영어 + 풀이 | https://www.888poker.com/magazine/poker-terms/cooler |
| playing cards (일반) | "kad terup", "kad poker", "urutan kad" | DFS SERP related ("Urutan kad poker", "Cara main kad terup") |
| poker (위키 정의) | "Poker [po-kĕr] atau pakau … permainan daun terup" | https://ms.wikipedia.org/wiki/Poker |

---

## holdem-fish · ms (Malaysia) 키워드·SERP 조사

> 2026-09-26 · DFS 호출 9회(glossary와 공용: ideas 1 · related 1 · search_volume 2 · SERP 5 — 이 글 몫 3건: «fish poker maksud» **40101 실패** → «maksud fish dalam poker»로 재시도 성공 · «fish in poker» 성공) · Rakko requestId **1286790**(Malaysia/Malay, 12m) · 자동완성 73회(공용) 중 fish 관련 ~30
> Playwright MCP 브라우저 미설치 → curl + 노드 파싱. 🔴 Rakko 수치 = DFS와 동일(같은 Google Ads 원천).

### 볼륨

| keyword | DFS vol | Rakko 12m 추이 | 배정 |
|---|---|---|---|
| fish poker / fish in poker / what is a fish in poker / poker fish | 20 (**4개 같은 묶음값** — 합산 금지) | 10~30 안정 | **seoTitle 영어 토큰 «Fish»** + H2 «Apa maksud fish dalam poker?» |
| fish poker meaning · fish in poker meaning · poker fish meaning · fish poker term | 10 | 0~10 | FAQ 1 / tag |
| fish poker player | 10 | 거의 0 | tag |
| whale poker · whale poker meaning · poker whale | 10 | 0~10(6개월만) | H3(Zoo 절) |
| donk poker · donkey poker | 10 | 10 | H3 + FAQ «fish vs donkey» |
| nit poker · nit poker meaning | 10 | 10 | H3 |
| shark poker · poker shark · shark poker meaning | 10 | 10 | H3 |
| calling station | 10 | 10 | H3/본문 |
| poker player types · types of poker players | 10 | 0~10 | H2 문구(Zoo 절) + tag |
| tag poker · lag poker · tight/loose aggressive poker · maniac poker · rock poker | 10 | 0~10 | 본문 |
| poker fish vs donkey | 10 | — | FAQ |
| poker fish vs whale · poker slang for weak player · whale poker player | — (값 없음) | — | FAQ 문구(자동완성엔 존재) |
| nit poker player | 0 | — | 버림 |
| pemain poker · pemain poker profesional | 10 | 0~10 | 버림 — 자동완성이 «pemain poker indonesia / terbaik dunia» = 인니·유명인 의도 |

**판정**: 전 키워드 바닥. 말레이어 «fish» 질의형(fish dalam poker · fish poker maksud · maksud fish poker)은 **자동완성 0건 = 수요 무**. 실제 검색은 영어 «fish in poker / what is a fish in poker» → **seoTitle = 말레이어 훅 + «Fish» 영어 토큰**(예: «Kalau anda tak nampak 'fish' di meja… — Apa Itu Fish dalam Poker?»).

### 자동완성

| seed | expansions (축어) | 쓸 자리 |
|---|---|---|
| fish poker (ms/en) | fish poker chips · fiches poker professionali · fish poker term · poker fish amazon · fish poker meaning · fish poker png · fish poker valore · pokerstars fish · fish poker online · fish poker pops · fish poker player · fish poker definition · fish poker cards | term/meaning/definition/player만 관련. chips·fiches = 칩(이탈리아어 fiches) 혼입 |
| fish in poker | fish in poker meaning · fish in poker terms · fish in poker game · go fish in poker · fish hooks in poker · define fish in poker · **big fish in poker** · fish player in poker | «fish hooks»(=J-J) 한 줄 FAQ 후보 · «go fish» 함정 |
| poker fish | poker fish meaning · poker fish hook · **poker fish vs donkey** · poker fish meme · poker fish app · poker fish gif · poker fishing game · poker fish tracker · **poker fish vs whale** · poker fishman · poker fishka | vs donkey / vs whale → FAQ 2개 |
| fish dalam poker (hl=en) | fish di poker · **what does it mean to be a fish in poker** · **what is a fish in poker** | H2 직답 문구 |
| fish dalam poker / fish poker maksud (hl=ms) | (빈 결과) | 말레이어 질의 수요 없음 |
| whale poker | whale poker meaning · term · face · definition · cup · slang · player · poker whale vs fish · poker whale shark | whale H3 |
| donk poker | donk poker meaning · term · definition · meme · slang · player · poker donk bet · donk bet meaning · donk lead | donk H3 + donk bet 구분 한 줄(→ glossary 링크) |
| nit poker | nit poker meaning · term · origin · player · definition · team · game · player meaning · acronym · reddit | nit H3(«origin» 수요 → 어원 한 줄) |
| shark poker | shark poker perth · league · stats · glasses · club · meaning · player · term · pokerstars shark | 대부분 지명·브랜드. meaning/term만 |
| poker player types | poker player types stats · type chart · type test · archetypes · different · 4 poker player types · all · 5 poker player types | Zoo 절을 **표(chart)**로 · «4/5 types» = TAG/LAG/nit/fish 4분면 |
| poker slang (공용) | **poker slang for weak player** | H2 도입 문구 |
| maksud fish / fish maksud | maksud fishy · fishing · fisher · phishing · fish cake · fish maw · fish oil · fish maksud in malay | 🔴 전부 해산물·일반어 — 버림 |
| maksud whale / maksud shark / maksud donkey | whale dalam bahasa melayu · whale dalam crypto · whale shark · loan shark · shark tank · baby shark · donkey dalam bahasa melayu | 🔴 동물·crypto·loan shark — «maksud X» 헤드 금지. 단 «whale dalam crypto»는 비유 이해를 돕는 예로 1문장 가능 |
| pemain poker | pemain poker indonesia · terbaik dunia · profesional · asal medan · terkaya di dunia · indonesia ferdinand · terkenal | 🔴 인니 의도 — 버림 |

### SERP

| query·lang | top10 요약 | 판정 |
|---|---|---|
| fish in poker · ms · mobile | PAA 최상단 → 1 reddit «What's something only fish say at the table?» 2 poker-fish.fr(HUD 앱) 3 pokernews «What is a Fish in Poker? | Fish Definition» 4 exceptionalpoker «10 Ways To Spot a Fish» 5 blackrain79 «How to Easily Spot the Fish at the Poker Table» 6 partypoker «Poker fish: what is a fish and how to spot them?» 7 upswingpoker glossary/fish · 비디오 BlackRain79 4개 | 영어 권위·포럼 독점. 말레이어 결과 0 |
| maksud fish dalam poker · ms · mobile | 1 ms.glosbe «Terjemahan "fish"»(ikan) 2 prpm.dbp.gov.my(lauk ikan) 3 ms.wikipedia Poker 4 **jmarian.com «ikan (pemain baru poker)»** 5 pokerstrategy glossary/Fish 6 pokerskill glossary/fish 7 jurojinpoker 8 ms.glosbe poker 9 pokercode 10 partypoker.es(EN) | **말레이어 포커 해설 = 0.** 사전 3개 + EN 용어집 → 공백 확실. winnable |
| fish poker maksud · ms | DFS 40101 Internal SE Server Error (재시도 대신 위 쿼리로 대체) | — |

PASF 축어:
- fish in poker: Poker fish vs donkey · Poker fish app · Fish poker player · Poker whale · What is a shark in poker · What is a donkey in poker / Fish poker reddit · Poker fish hook · Pucker Fish · Croaker fish · Nit in poker · Poker slang

### PAA 축어

- fish in poker (hl=ms): «What is a fish in poker?» · «What is the difference between a "donkey" and a "fish" in poker?» · «What is the difference between a whale and a fish in poker?» · «How to play go fish poker?»(🔴 함정 — 다른 게임)
- 참고(PokerNews fish 페이지 FAQ 축어): «What is a fish in poker?» · «What is the difference between a fish and a donkey in poker?» · «How to deal with fish in poker?» · «Is a fish the same as a whale, donkey, or pigeon in poker?»

### 현지 상위 글

| URL | 주는 것 | 빠진 질문 | 쓰는 용어 축어 |
|---|---|---|---|
| https://jmarian.com/ms/en-fish (maksud fish dalam poker 4위, 말레이어 사전) | fish 의미 목록 중 1줄 «ikan (pemain baru poker)» + 영어 예문 | 식별법·zoo·자가진단 전무. 🔴 «pemain baru»(초보)로만 정의 — 초보≠fish(오래 쳐도 지는 사람) 뉘앙스 틀림 | «ikan (pemain baru poker)» · «go fish» · «dolar»(fish=달러 속어) |
| https://www.pokernews.com/pokerterms/fish.htm (EN, fish in poker 3위) | H2: Fish Definition: What is a Fish in Poker? · How to Exploit a Fish in Poker · Fish vs Donkey - What's the Difference? · Is it Rude to Call Someone a Fish in Poker? · How do you Stop Being a Fish in Poker? · Poker Fish FAQ / H3: How to Spot a Fish in Poker — 5 ways · Bet big v. fish · Get into pots v fish | 자가진단 체크리스트·«sucker» 명언 바로잡기·whale/nit/shark 비교표 약함 | fish · donkey · whale · pigeon |
| https://ayopokerweb.wordpress.com/2017/07/30/istilah-istilah-dalam-poker/ (인니어 용어집, 참고) | 선수 유형 정의 1줄씩 | — | «Fish = Pemain yang buruk/jelek permainannya» · «Donkey = Pemain yang buruk (Fish)» · «Calling Station = Tipe pemain yang hanya melakukan calling» · «Maniac = … sangat Loose dan Agresif» · 🔴 «Tight = … ketat dan agresif»·«Rock = … ketat dan agr[esif]» 오류(tight/rock ≠ 공격적) |
| partypoker poker-fish (6위) | curl로 H2 추출 실패(JS 렌더) — 미확인 | — | — |

### winnable 후보 · 함정 · 카니발 후보

- **winnable**: «maksud fish dalam poker» · «apa itu fish dalam poker» · «fish poker maksud» — 말레이어 SERP가 사전뿐. 수요는 바닥이나 경쟁 0.
- **winnable(FAQ)**: «fish vs donkey» · «fish vs whale» — PAA 2개가 정확히 이 비교. 말레이어 직답 블록으로.
- 함정: «fish / whale / shark / donkey» 단독·«maksud X» = 해산물·동물·loan shark·crypto whale. 제목·H2엔 반드시 «dalam poker» 한정.
- 함정: «go fish» (PAA «How to play go fish poker?») — 다른 카드게임. 언급 시 «bukan permainan Go Fish» 1줄 정도만.
- 함정: jmarian의 «ikan = pemain baru» 정의 — 우리가 «초보≠fish»를 명시하면 차별점이 되지만 번역체로 «ikan»을 용어로 채택하지는 말 것(현지 포커 담론에서 «ikan» 사용 실례 미확인). 표기 = **fish**(영어 그대로) + 첫 등장 시 «(ikan)» 괄호 병기 정도.
- 함정(인니 오염): «pemain poker indonesia», «jelek», «kartu», «modal» — 쓰지 말 것. 말레이시아형 = teruk/lemah, kad, stack/cip.
- **카니발**: holdem-glossary(ms, 같은 배치)의 «Player Types & Slang» 절 — glossary는 fish/whale/nit **1줄 정의 + holdem-fish 링크**로, 깊이는 이 글이 소유. donk bet은 glossary 소유(이 글은 «donk ≠ donk bet» 1줄). holdem-tournament-vs-cash-game(캐시게임 fish 언급 시 링크만).

### 우리가 더 줄 것 3가지

1. **말레이어로 된 유일한 fish 해설** — 현 SERP는 사전(ikan)·영어 용어집뿐. «dalam poker» 한정 H2 직답으로 공백을 먹는다.
2. **Zoo 비교표(fish/whale/donkey/nit/shark/calling station/TAG/LAG)** — 자동완성 «poker player type chart», «4/5 poker player types» + PAA «fish vs donkey / whale vs fish»를 한 표로. 인니 글의 «tight = agresif» 오류를 바로잡은 정의.
3. **«Am I the Fish?» 자가진단 + «sucker» 명언 바로잡기 + 경험담** — 경쟁 EN 글도 약한 1인칭 판단 기준(VPIP 감각·핑계 패턴). PokerNews는 «How to Exploit»에 치우침.

### 신규 용어 후보

| EN | Malay seen in the wild | source URL |
|---|---|---|
| fish | ikan (pemain baru poker) — 🔴 사전 정의, 현장 사용 미확인 | https://jmarian.com/ms/en-fish |
| fish (dish, 함정) | lauk ikan | https://prpm.dbp.gov.my/Cari1?keyword=fish&d=175768& |
| weak player | pemain yang buruk (ayopoker는 인니어 «buruk/jelek» — buruk만 공용) | https://ayopokerweb.wordpress.com/2017/07/30/istilah-istilah-dalam-poker/ |
| calling station | «Tipe pemain yang hanya melakukan calling»(인니 정의, 용어는 영어 유지) | 동상 |
| whale (crypto 비유) | «maksud whale dalam crypto»(자동완성) — 말레이시아 독자에게 익숙한 비유 | suggestqueries hl=ms gl=my |
| loan shark (함정) | «maksud loan shark dalam bahasa melayu»(자동완성) — shark 헤드 의도 오염원 | 동상 |
| poker (card game) | pakau | https://prpm.dbp.gov.my/Cari1?keyword=poker&d=72508& |

---

## holdem-rake — ms(MY) 키워드·SERP 조사

- 날짜 2026-09-26 · 위치 Malaysia(2458)
- 도구 호출: DFS n=10 (labs suggestions 2 · related 1(빈 결과) · ideas 1 · search_volume 2 · SERP 4 — 이 글 몫 SERP 2) · Rakko requestId **1286788** (Malaysia/Malay, 34 kw, 두 글 공용) · 자동완성 n=42 (ms/en × 21 시드, 두 글 공용) · Exa URL 탐색 2 · 페이지 확인 = repo Playwright 4 URL + curl 3
- ⚠ Playwright MCP는 브라우저 미설치로 실패 → repo `node_modules/playwright`로 대체. GGPoker(id)=지역 403, Reddit(?tl=ms)=network security 차단 → 스니펫(SERP 축어)만 사용

### 볼륨 (keyword | DFS vol | Rakko 12m range/trend | 배정)

> DFS·Rakko 값이 전건 동일 = 같은 Google Ads 원천(교차검증 아님, 재확인일 뿐). 🔴 아래 «30» 4개는 **월별 시계열이 완전히 같다** = Ads가 한 클러스터로 묶은 값 → **합산 금지, 실수요 ≈ 30/월 하나**.

| keyword | DFS vol | Rakko 12m (range · 추세) | 배정 |
|---|---|---|---|
| poker rake / rake poker / what is rake in poker / rake in poker(Rakko) | 30 (클러스터) | 20–90 · 2026-04 스파이크 90, 12m −40% | **seoTitle·H1 토큰 = "rake poker"** |
| rake in poker (DFS 단독) | 10 | (Rakko는 30으로 클러스터 처리) | 본문 첫 문단 |
| rakeback | 20 | 10–30 · 평탄 | H2 «Apa itu rakeback?» |
| rakeback meaning | 10 | 10–20 | 같은 H2 직답 |
| rakeback poker / poker rakeback | 10 | 0–10 | 같은 H2 |
| rake meaning poker / rake poker meaning | 10 | 10 고정(바닥) | desc·tldr "maksud rake" |
| rake maksud | 10 | 10–20 · +41% | 🟡 의도 혼재(자동완성 «maksud rake the leaves») — 도입부에 "rake dalam poker" 로만 흡수 |
| poker rake calculator | 10 | 0–10 | 계산 예시 표(H2 «Berapa rake…») |
| rake poker cash game | 10 | 거의 0 | 본문 |
| no flop no drop | 10 | 거의 0 | H2 «Bagaimana rake diambil» 안 굵게 |
| rakeback casino | 10 | — | ❌ 쓰지 않음(카지노 프로모 의도) |
| rake poker term | 10 | — | — |
| tournament rake / time charge poker / apa itu rake dalam poker | null | null | 볼륨 없음 → H2/FAQ 문구로만 |
| rake (단독) | 3600 | 2900–4400 | ❌ 갈퀴(정원도구)·기타 의도. 경쟁 HIGH. 쓰지 말 것 |

### 자동완성 (seed | expansions verbatim | 쓸 자리)

| seed (hl) | expansions (축어) | 쓸 자리 |
|---|---|---|
| rake poker (ms) | rake poker meaning · rake pokerstars · **rake poker meaning illegal** · rake poker bet365 · rake poker significado · rake poker é ilegal · rake poker là gì · rake pokerstars cash game · rake poker term | «illegal» → FAQ «Kenapa ambil rake dikatakan haram/menyalahi undang-undang?» (행위 구분만, §합법성 규율) |
| rake poker (en) | … rake poker sites · rake poker game · rake pokerstars spin and go · rake poker cash game | — |
| poker rake (ms/en 동일) | poker rake meaning · poker rake calculator · poker rake comparison · poker rakeback · poker rakeback meaning · poker rake comparison 2026 · poker rakeback deals · poker rakeback calculator · poker rake vegas | calculator → 계산 표 · comparison/deals ❌(제휴 의도) |
| rakeback (ms) | rakeback casino · rakeback meaning · **rakeback artinya**(ID) · rakeback stake · rakeback poker · rakeback pokerstars · rakeback wizard · rakeback coinpoker · rakeback ggpoker | meaning → 직답. 브랜드·casino ❌ |
| rakeback (en) | rakeback meaning · rakeback stake · rakeback casino · rakeback calculator · rakeback coinpoker · rakeback wizard · rakeback bonus · rakeback calculator stake · rakeback meaning in hindi | — |
| apa itu rake (ms/en) | apa itu raker · rakernas · raket … (전부 무관) · apa itu rake | Malay 질문형은 «rake» 단독이면 무관어로 흐름 |
| rake maksud (ms) | rake maksud · rake maksud in malay · maksud rake the leaves · apa maksud rake | (en) + maksud rake dalam bahasa melayu · maksud rake leaves → 🔴 갈퀴 의도 |
| rake dalam poker (ms) | **apa itu rake dalam poker** | H2 질문형 «Apa itu rake dalam poker?» (볼륨 null이지만 자동완성 실재) |
| rake dalam poker (en) | apa itu rake dalam poker · what does it mean to rake a poker game · **what does no rake mean in poker** | FAQ «Apa maksud no rake / rake-free?» |
| rake poker a | rake at poker · rake a poker game meaning · rake au poker · rake acr poker · poker rake at casino · poker rake amazon · rake at poker table · poker rake at encore boston · poker rake amount | amount → 금액 H2 |
| rake poker b | rake poker bet365 · rake poker bedeutung · rake back poker · **poker rake box** · rakeback meaning in poker · poker rake by site · rake box poker table · ggpoker rakeback · coinpoker rake back | rake box → 라이브 드롭 슬롯 설명 한 줄 |
| rakeback poker | rakeback pokerstars · rakeback poker meaning · rakeback poker italia · … 2025/2026 · rakeback poker sites · rakeback poker online · rakeback pokertracker | meaning만 |
| rake poker maksud · komisen poker | (결과 없음) | «komisen poker»는 검색 관습 아님 → 본문 설명어로만 |

### SERP (query·lang | top10 summary | 판정)

| query·lang | top10 요약 | 판정 |
|---|---|---|
| "rake poker" · ms · mobile | AI Overview → **지식그래프(Malay 자동번역 Wikipedia 발췌)** → PAA 4 → reddit r/poker(2020) · 2+2 포럼 «Time Charge vs Rake»(2018) · **스팸 2개**(pne.mec.gov.br «gg poker rake structure \|qqpk\|», maharashtra.gov.in 도박앱 스팸) · Amazon UK rake box. (응답은 8위까지만 반환) | 🟢 **약함.** 1페이지에 정식 Malay 기사 0, 스팸·포럼·쇼핑이 자리 차지. 결과 언어 전부 EN(지식그래프만 Malay 기계번역) |
| "apa itu rake dalam poker" · ms · mobile | 1 en.wikipedia Rake(poker) · 2 **ggpoker.com/id**(인니어) · 3 winstar(US 카지노) · 4 reddit ELI5 **?tl=ms**(기계번역 Malay) · 5 americascardroom · 6 platoapp/ms(무관) · 7 YouTube Upswing · 8 pokernews · 9 pokerstarslive · 10 gtowizard blog | 🟢 **winnable.** Malay 원문 기사 0(인니어 1·MT reddit 1). 사람이 쓴 Malay 글이 들어갈 자리 비어 있음 |

**Related searches 축어** ("apa itu rake dalam poker"): Why is taking a rake in poker illegal · What is a rake in poker · What is a rake in poker Molly's game · Poker rake calculator · Do casinos take a rake in poker · Casino rake poker · How to calculate rake in poker · How does a rake work in poker · Rake back poker · What is a rake in poker and why is it illegal · Online poker rake · Online poker rake comparison

### PAA 축어

("rake poker", ms, mobile)
- Why does Molly take a rake?
- Why do people take a rake in poker?
- Is 10% rake beatable?
- What does 20% rakeback mean?

("apa itu rake dalam poker") — PAA 블록 없음, related만.

지식그래프 Malay 축어(Google 자동번역): «Rake ialah yuran komisen berskala yang diambil oleh bilik kad yang mengendalikan permainan poker. Ia biasanya 2.5% hingga 10% daripada periuk dalam setiap tangan poker, sehingga jumlah maksimum yang telah ditetapkan.»

### 현지 상위 글 (URL | 주는 것 | 빠진 질문 | 용어 축어)

| URL | 주는 것 | 빠진 질문 | 용어 축어 |
|---|---|---|---|
| https://poker.md/ms/main-poker-rake/ (lang=ms, 2020, curl로 H2 확인) | H2: «10 Penyedia Poker Dalam Talian Rake Rendah» · «The House Share: Mengapa Terdapat Rake dalam Poker Dalam Talian» · «Rake dalam Kejohanan Sit & Go dan Poker» · «Poker dan Rake Dalam Talian: Apa yang Perlu Diperhatikan di Kongsi House». 사이트별 rake 표, 50% rakeback 배너 | 라이브 카지노 rake·time charge·dead drop 없음 · 실제 1시간 비용 계산 없음 · 경험담 없음 · **제휴 광고 글**(rakeback 배너) | «komisen» · «bilik poker» · «permainan tunai» · «periuk»(pot 기계번역) · «**tirai**»(blinds 기계번역 ✗) · «had topi»(cap ✗) · «**Tanpa Flop, Tanpa Penurunan**»(no flop no drop ✗) · «kejohanan» · «yuran penyertaan» · «pembelian»(buy-in) |
| https://ggpoker.com/id/blog/an-introduction-to-rake-and-cashback/ (SERP 2위) | 스니펫만(본문 = MY 지역 403): «Rake mengacu pada persentase kecil dari setiap pot yang diambil oleh ruang poker sebagai biaya untuk menyelenggarakan permainan» | 확인 불가 | 🔴 인니어: mengacu · persentase · biaya · ruang poker |
| https://www.reddit.com/r/explainlikeimfive/comments/17law96/…/?tl=ms (SERP 4위, 본문 차단) | 스니펫: «Kat kebanyakan negeri, meja Texas Hold'em kenakan "rake", iaitu peratusan kecil daripada pot sehingga jumlah maksimum» | — | «peratusan kecil daripada pot sehingga jumlah maksimum» · «Rumah sentiasa menang»(house always wins) |
| (참고·인니) https://gamblingngo.com/id/guides/what-is-rake-in-poker/ | 정의·no flop no drop·rake-free·합법성·rakeback | — | 🔴 uang · biaya · bandar · penggaruk(rake 직역 ✗) · kasino daring |

### winnable 후보 · 함정 · 카니발 후보

**winnable**
- «apa itu rake dalam poker» / «rake poker» — Malay 원문 경쟁자 0. 스팸·포럼이 1페이지에 있을 만큼 약함
- «rakeback maksud / apa itu rakeback» — 볼륨 20+10, 경쟁 정보글 부재(나머지는 제휴·브랜드)
- «no flop no drop», «time charge» — 볼륨 바닥이지만 SERP상 2+2 포럼(2018)이 순위 → 정의 H2 하나로 흡수

**함정**
- «rake» 단독 3600 = 갈퀴/기타. «rake maksud» 자동완성에 «maksud rake the leaves» → 제목·H1에 반드시 «poker» 동반
- «rake poker meaning **illegal**» / «why is taking a rake in poker illegal» / «Molly's game» = 불법 홈게임 rake 의도. 다룰 경우 **행위 구분만(허가 없는 사설 게임에서 rake 징수 = 대부분 관할 불법)**, 말레이시아 법 판단 금지(합법성 규율)
- rakeback/deals/comparison/casino/브랜드(pokerstars·ggpoker·coinpoker·stake) = 🔴 judi 제휴 의도. **사이트 추천·순위 표·링크 금지**, 개념 설명만
- 볼륨 30 네 개 = 한 클러스터(합산 금지)
- 인니어 오염: 경쟁 글에 persentase·biaya·uang·bisa·kartu·bandar. ms 정본은 **peratus · yuran/bayaran · wang · boleh · kad · pengedar**

**카니발 후보**
- `/ms/blog/holdem-tournament-vs-cash-game` — 91행 «Pihak kasino atau kelab mengambil rake…», 370행 «rake paling menjejaskan permainan st…». → 짧게만 언급 + 본 글로 링크하는 구조 유지. rake 정의를 거기서 확장하지 말 것
- `holdem-blind-meaning` — 무관(rake 언급 없음)

### 우리가 더 줄 것 3가지

1. **「1시간에 실제로 얼마 내나」 산수** — «5% cap $5, 시간당 N팟» 계산 표(링깃 병기 금지, EN 수치 그대로 §13 검산). 경쟁 Malay 글에 계산 0, EN 경쟁(pokerskill)은 있음
2. **라이브 3방식(pot rake · time charge · dead drop) + no flop no drop**을 한 표로 — poker.md는 온라인 사이트 비교만
3. **1인칭 경험담(«break-even인데 돈이 사라진 한 달»)** + rakeback을 «광고 없이» 개념만 설명(20% rakeback 뜻 = PAA 직답). 제휴 글과의 차별점 = E-E-A-T

### 신규 용어 후보 (EN | Malay seen | source URL)

| EN | Malay seen | source | 권고 |
|---|---|---|---|
| rake | rake (그대로) · «yuran komisen» · «komisen» | Google 지식그래프 / poker.md/ms | **rake** 유지 + 첫 등장 «rake (yuran rumah daripada pot)» |
| pot | periuk (MT) · pot | 지식그래프 / reddit ?tl=ms | **pot** 유지(ms 코퍼스·reddit 실사용). periuk ✗ |
| cardroom / poker room | bilik kad · bilik poker | 지식그래프 / poker.md | «bilik poker» 허용 |
| cap | had topi (MT ✗) · jumlah maksimum | poker.md / reddit | **had maksimum (cap)** |
| no flop, no drop | Tanpa Flop, Tanpa Penurunan (MT ✗) | poker.md | 영어 그대로 «no flop, no drop» + 풀이 |
| time charge | (없음) | — | «time charge (bayaran ikut masa)» — ms 코퍼스 «bayaran tempat duduk berdasarkan masa»(tournament-vs-cash 91행)와 맞출 것 |
| tournament fee | yuran penyertaan | poker.md | 채택 가능 |
| blinds | tirai (MT ✗) | poker.md | ✗ — blind 유지 |
| rakeback | rakeback · (인니 «rakeback artinya») | 자동완성 | rakeback 유지 |
| house always wins | Rumah sentiasa menang | reddit ?tl=ms | 인용 안 함(MT) |

---

## holdem-straddle — ms(MY) 키워드·SERP 조사

- 날짜 2026-09-26 · 위치 Malaysia(2458)
- 도구 호출: DFS n=10 (labs suggestions 2 · related 1 · ideas 1 · search_volume 2 · SERP 4 — 이 글 몫 SERP 2) · Rakko requestId **1286788** (Malaysia/Malay, 두 글 공용) · 자동완성 n=42 (두 글 공용) · Exa URL 탐색 2 · 페이지 확인 = repo Playwright 4 URL + curl 2
- ⚠ Playwright MCP 브라우저 미설치 → repo playwright로 대체. Reddit(?tl=ms) 차단 → SERP 스니펫만 인용

### 볼륨 (keyword | DFS vol | Rakko 12m range/trend | 배정)

> DFS = Rakko 전건 동일(같은 Ads 원천). 🔴 «30» 셋은 월별 시계열이 완전 동일 = 한 클러스터 → **실수요 ≈ 30/월 하나**, 합산 금지.

| keyword | DFS vol | Rakko 12m (range · 추세) | 배정 |
|---|---|---|---|
| straddle poker / poker straddle / what is a straddle in poker | 30 (클러스터) | 20–70 · 2026-02 피크 70, 3m +12.5% | **seoTitle·H1 토큰 = "straddle poker"** |
| straddle poker meaning / straddle meaning poker / poker straddle meaning | 10 | 10 고정(바닥) | desc «maksud straddle poker» |
| mississippi straddle | 10 | 0–10 (최근 5개월 0) | H2 «Jenis straddle» |
| utg straddle | 10 | 0–10 | 같은 H2 |
| button straddle | 10 | 0–10 | 같은 H2 |
| sleeper straddle | 10 | 0–10 | 같은 H2 |
| double straddle poker | 10 | 0–10 | 같은 H2 / FAQ |
| poker straddle strategy | 10 | 거의 0 | H2 «Patutkah anda straddle?» |
| straddle poker term | 10 | 거의 0 | — |
| straddle poker rules / straddle poker explained | 0 | 0 | 볼륨 0 — 자동완성엔 실재 → H2 문구로만 |
| apa itu straddle dalam poker / apa itu straddle di poker / straddle maksud / maksud straddle dalam bahasa melayu | null | null | 볼륨 없음, 자동완성 실재 → Malay H2 질문형 |
| straddle (단독) | 3600 | 2900–4400 | ❌ 옵션 트레이딩·체조/높이뛰기·부상·straddle carrier. 쓰지 말 것 |

### 자동완성 (seed | expansions verbatim | 쓸 자리)

| seed (hl) | expansions (축어) | 쓸 자리 |
|---|---|---|
| straddle poker (ms) | straddle poker meaning · straddle poker rules · straddle poker là gì · straddle poker term · straddle poker significado · straddle poker bedeutung · straddle poker explained · straddle poker definition · straddle poker que es | rules → H2 «Peraturan straddle» |
| straddle poker (en) | … straddle poker reddit · straddle poker strategy · straddle poker cash game | cash game → 토너먼트 불허 H2 |
| poker straddle (ms) | poker straddle meaning · poker straddle rules · poker straddle explained · poker straddle strategy · poker straddle bet · poker straddle button · poker straddle reddit · poker straddle nedir | — |
| apa itu straddle (ms) | apa itu straddle · apa itu straddle vault · apa itu straddle injury · **apa itu straddle di poker** · apa itu straddle carrier · apa itu gaya straddle · apa itu posisi straddle · apa itu gaya straddle dalam lompat tinggi | 🔴 poker 외 의도 다수 → H1/H2에 «dalam poker» 필수 |
| apa itu straddle (en) | … apa maksud straddle · apa yang dimaksud dengan straddle(ID형) | — |
| straddle maksud | maksud straddle dalam bahasa melayu · (en) straddle meaning in english · straddle explained · straddle him meaning · **straddle meaning in options** | 옵션 의도 함정 |
| straddle dalam poker (ms) | **apa itu straddle dalam poker** | **H2 1순위 문구** |
| straddle dalam poker (en) | apa itu straddle dalam poker · **arti straddle dalam poker**(ID) · define straddle in poker · how does a straddle work in poker · straddle rules poker · explain straddle in poker | «how does a straddle work» → H2 «Bagaimana straddle berfungsi» |
| straddle poker a | straddle au poker · straddle ante poker · auto straddle poker · (en) how does a straddle work in poker · why straddle in poker · who can straddle in poker | FAQ «Siapa boleh straddle?» · «Kenapa orang straddle?» |
| straddle poker w | straddle poker why · how does straddle work poker · whats straddle poker · why straddle poker reddit | — |
| mississippi straddle | mississippi straddle poker · … rules · … strategy · … meaning · **mississippi straddle any position** · mississippi button straddle · how does mississippi straddle work · gto wizard mississippi straddle | Mississippi = 아무 자리(주로 button) 설명 |
| utg straddle | utg straddle 2bb · utg straddle meaning · utg straddle poker · straddle utg only meaning · button vs utg straddle · can only utg straddle · (en) what are straddle ups | «2bb» → 금액 H2 · «UTG only» → 하우스룰 문단 |
| straddle poker maksud | (결과 없음) | — |

### SERP (query·lang | top10 summary | 판정)

| query·lang | top10 요약 | 판정 |
|---|---|---|
| "straddle poker" · ms · mobile | AI Overview → reddit r/poker(2017, +2 서브링크) → PAA 4 → winstar(US, 2025-11) → quora → 영상팩(Chipy·Upswing·FB 딜러 James) → related. (응답 depth 짧음) | 🟡 EN 권위 글+UGC. Malay 결과 0. 의도는 전부 poker(옵션 의도는 related에만) |
| "apa itu straddle dalam poker" · ms · mobile | 1 **ms.wikipedia Poker**(straddle 언급 없음, 족보 표) · 2 **reddit ?tl=ms «Apa itu straddle? : r/poker»**(MT) · 영상팩 4 · 3 thelodgepokerclub · 4 YouTube «Is Straddling in Poker Profitable?» · 5 winstar · 6 quora · 7 pokerskill · 8 redchippoker(2022) · 9 pokerpower(2021) | 🟢 **winnable.** 1위가 straddle을 다루지도 않는 ms 위키 → 전용 Malay 글 공백 |

**Related searches 축어**: ("straddle poker") Who can straddle in poker · Can anyone straddle in poker · Double straddle poker · Button straddle poker · What is a straddle in options · Straddle meaning / ("apa itu straddle dalam poker") Who can straddle in poker · Can anyone straddle in poker · Cara main kad poker · Urutan kad poker · Double straddle poker · Poker straddle rules · Urutan poker tertinggi · Button straddle poker · Cara main kad terup · What is a straddle in finance · What does straddle mean · What is a straddle in options

### PAA 축어

("straddle poker", ms, mobile)
- Is straddle strategy profitable?
- How risky is a straddle?
- How to straddle on poker now?
- What is an example of a straddle?

⚠ «Is straddle strategy profitable?»·«How risky is a straddle?»는 **옵션 트레이딩 PAA가 섞였을 가능성** 있음(문구가 options 관용구). poker 맥락으로만 답하되 «옵션 straddle과 다르다» 한 줄 구분 권장. «How to straddle on poker now?» = PokerNow(온라인 홈게임 앱) 의도.

### 현지 상위 글 (URL | 주는 것 | 빠진 질문 | 용어 축어)

| URL | 주는 것 | 빠진 질문 | 용어 축어 |
|---|---|---|---|
| https://ms.wikipedia.org/wiki/Poker (Playwright 확인, lang=ms) | H2: Tatamain · Jenis susunan kartu · Rujukan. 족보 표만 | straddle 전무 — 순위는 도메인 힘 | 🔴 인니어 혼입: «kartu» · «diperbolehkan» · «dibagi» · «bisa» · «putaran pertaruhan» · «lipat»(fold) · «daun terup» |
| https://www.reddit.com/r/poker/comments/bp2btt/whats_a_straddle/?tl=ms (SERP 2위, 본문 차단) | 스니펫: «Ia adalah blind tambahan yang meningkatkan jumlah panggilan minimum untuk bermain tangan. Juga, sesiapa sahaja pemain dengan straddle itu.» | 종류·순서·수익성 없음 | «blind tambahan» · «jumlah panggilan minimum»(MT: call → panggilan ✗) · «tangan» |
| (참고·인니) https://wptglobal.com/id-id/poker/blog/panduan-poker/pemula/penjelasan-straddle-poker (curl H2) | H2: Apa itu Straddle dalam Poker? · Berapa Nilai Taruhan Straddle? · Perbedaan antara Taruhan Blind dan Straddle · Jenis-jenis Straddle · Straddle Under-the-Gun (UTG) · Straddle Ganda and Tripel · Straddle Tombol · Straddle Mississippi · Keuntungan Menggunakan Straddle · Kerugian Melakukan Straddle · Strategi Straddle Poker · Pertanyaan Umum | 1인칭 경험·행동 순서 표·스택 깊이(BB 반감) 없음 | 🔴 인니어: kartu · keping(chip) · uang tunai · Perbedaan · «blind besar» · «Straddle Tombol»(button 직역) · «Straddle Ganda» |
| (참고·인니 MT) https://id.eferrit.com/memainkan-straddle-di-poker/ | 정의·Mississippi·카지노 규칙 | — | ✗ «mengangkang»(straddle 직역) · «buta besar»(big blind 직역) · «posisi pistol» — 반면교사 |

### winnable 후보 · 함정 · 카니발 후보

**winnable**
- «apa itu straddle dalam poker» — 1위가 무관 ms 위키, 2위 MT reddit. 전용 Malay 글이면 상위 진입 여지 큼
- «straddle poker» 클러스터(30) — EN 권위 글뿐, Malay 대안 0
- 롱테일 FAQ: «siapa boleh straddle» (who can straddle / can anyone straddle — related 2회 반복), «double straddle», «button straddle», «Mississippi straddle any position»

**함정**
- «straddle» 단독 3600 = 옵션·체조(«straddle vault», «gaya straddle dalam lompat tinggi»)·부상·straddle carrier. 제목·H1·첫 문장에 «poker» 필수
- PAA 일부가 옵션 트레이딩 문구 — poker 답으로 쓰되 구분 한 줄
- 볼륨 30 세 개 = 한 클러스터
- 인니어/직역 오염: kartu·keping·uang·bisa·blind besar·mengangkang·tombol. ms 정본 = **kad · cip · wang · boleh · big blind(BB) · button**
- 토너먼트 straddle 불허 사실 — EN 원문 수치·규정 그대로(§13), 추가 규정 창작 금지

**카니발 후보**
- 🔴 `/ms/blog/holdem-blind-meaning` — H2 118행 «**Apa Itu Big Blind Ante? (Serta Straddle)**», 122행에 straddle 정의(«blind tambahan *sukarela* (biasanya 2x BB)…») + 본 글 링크 예고. → 그 글은 **정의 1문단 + 본 글 링크** 유지, straddle 종류·전략은 본 글에만. 본 글 H2 «Apa itu straddle» 직답 문구는 blind-meaning 122행 문구와 **축어 일치시키지 말고** 확장형으로(중복 스니펫 회피)
- `holdem-betting-actions` — straddle 언급 없음(grep 0) → 무관

### 우리가 더 줄 것 3가지

1. **행동 순서 표**(straddle 있을 때 preflop 누가 먼저·누가 마지막) — UTG / button(Mississippi) 두 경우를 좌석 표로. Malay·인니 경쟁 글 모두 문장뿐
2. **스택 깊이 산수**: $1/$2 + $4 straddle → 100BB 스택이 50 «straddle-BB»로 줄어든다(EN 원문 수치 §13 검산) — «Adakah straddle menguntungkan?» 직답 근거
3. **1인칭 경험담**(«rich-guy bet»이라 부르던 첫 $1/$2 테이블) + «siapa boleh straddle / boleh straddle dalam kejohanan?» FAQ — related에 2회 반복된 질문을 직답

### 신규 용어 후보 (EN | Malay seen | source URL)

| EN | Malay seen | source | 권고 |
|---|---|---|---|
| straddle | straddle (그대로) · ✗mengangkang(인니 MT) | reddit ?tl=ms / eferrit(id) | **straddle** 유지, 동사 «buat straddle / pasang straddle» |
| voluntary extra blind | blind tambahan · blind tambahan sukarela | reddit ?tl=ms / ms holdem-blind-meaning 122행 | **blind tambahan sukarela** (코퍼스 정합) |
| call amount | jumlah panggilan minimum (MT ✗) | reddit ?tl=ms | ✗ — «jumlah minimum untuk call» |
| button straddle | Straddle Tombol (인니 직역 ✗) | wptglobal id | «button straddle» 영어 유지 |
| double straddle | Straddle Ganda (인니) | wptglobal id | «double straddle» 유지 + 풀이 «straddle berganda» 선택 |
| live (straddle) | taruhan live, bukan raise | wptglobal id | «straddle ‹live›» 영어 유지 |
| cash game | uang tunai (인니) · permainan tunai(poker.md ms) | wptglobal / poker.md | ms 코퍼스 = **cash game** 유지 |
| hand rankings | Urutan kad poker · Urutan poker tertinggi | related searches(MY) | 내부링크 앵커 후보(holdem-hand-rankings) |
| how to play | Cara main kad poker | related searches(MY) | 내부링크 앵커 후보(texas-holdem-rules-for-beginners) |

---
