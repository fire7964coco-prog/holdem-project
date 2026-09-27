# MS 키워드 뱅크 — 🅳 토너먼트 클러스터 4편 (ms-tour 레인 · 2026-09-26)

> 실측 2026-09-26 · 레인 A 구간. 도구 = DFS `keywords_data/google_ads/search_volume/live`(location 2458 · 70개) ·
> DFS Labs `keyword_suggestions`(«poker tournament» · 2458 · en) · `related_keywords`(«icm poker» — 결과 1건뿐) ·
> 라쿠 `search-volume-history`(Malaysia · Malay · requestId **1286785** · 38개 — **DFS와 전 행 일치**) ·
> 구글 자동완성(`client=firefox&gl=my`, `hl=ms`·`hl=en` — 두 결과가 거의 같다) ·
> DFS `serp/google/organic/live/advanced`(2458 · `ms` · mobile · 6회: poker tournament · icm poker · bubble poker · short stack poker · cara main tournament poker · apa itu ICM dalam poker) ·
> 상위 글 원문(레포 Playwright로 h1~h3 추출 · 요약 아님): kalkulator.com.my ICM · somuchpoker 토너먼트 가이드 · 888poker 입문 · gtolab ICM · pokerstrategy 새틀 버블 · blackrain79 숏스택.
> 🔴 CPC는 근거로 쓰지 않는다. 🔴 볼륨 «10»은 Google Ads 바닥값 — 서로 비교하지 마라.

## 0. 한 줄 결론

**확률 레인(`ms-prob.md` §0)과 같은 지형이다 — 말레이시아의 토너먼트 수요는 «영어 술어»로만 측정되고, 말레이어형은 전부 null이다.**
`kejohanan poker` · `gelembung poker` · `stack pendek poker` · `strategi tournament poker` · `cara main tournament poker` = **null**(`pertandingan poker`만 1개월 10).
말레이어로 쳐도 SERP는 영어 글이 채운다. 말레이어 경쟁 글은 **kalkulator.com.my ICM 계산기 1편**뿐(직역투 «Model Cip Bebas»·«gelembung»·«ekuiti»).
→ 처방: **본문·훅 = 말레이어, 술어 = 영어 토큰**(`poker tournament` · `ICM` · `bubble` · `short stack` · `push/fold` · `fold equity` · `chip chop`).

## 1. 볼륨 (Malaysia · 월 · DFS Google Ads = 라쿠 일치)

| 키워드 | Vol | 12개월 | 배정 |
|---|---:|---|---|
| **icm** (단독) | 720 | 590~880 | 🔴 **우리 것 아님** — 자동완성 = ICMS college·IC Markets·ICMP. 항상 «ICM poker/ICM dalam poker» |
| **short stack** (단독) | 390 | 260~480 | 🔴 **우리 것 아님** — 자동완성 = pancakes·band·font·«short stack girl». 항상 «short stack poker» |
| wsop | 590 | | 🔴 제외 대회가이드 몫(레인 범위 밖) |
| apt poker | 260 | 90~590 | 🔴 제외 대회가이드 몫 |
| **jam poker** | 140 | 50~260 · 12m +20% | short-stack — 자동완성 = «jam poker meaning/definition/term · poker jam vs shove» → **포커 용어 의도 맞다**. 단 말레이어 «jam» = 시(時)·시계 → 산문 동사로 쓰지 마라(§3) |
| poker malaysia | 140 | | 🔴 사이트·게임 의도 — 태그 금지 |
| poker tournament / tournament poker | 90 | 70~140 | tournament — 🔴 SERP = 일정·내비게이션(GPI·pokercalendar.asia·WPT·Poker Dream·Hendon Mob Genting) → **헤드어로는 못 이긴다.** 제목 토큰으로만 |
| genting poker tournament | 70 | 30~140 | 🔴 현지 대회 의도 — EN에 사실이 없다. 본문 금지(§4) |
| poker tournament asia | 50 | | 🔴 일정 의도 |
| poker tournament malaysia | 40 | | 🔴 일정 의도 · «…malaysia 2026» 20 |
| icm poker · poker icm · what is icm in poker | 각 20 | 10~50 · **12m +71%** | icm (seoTitle·H2 1) |
| chip chop | 20 | | icm — 🔴 단독은 음식(chip chop ham/cookies). «chip chop» 은 반드시 ICM deal 옆에 |
| mtt poker | 20 | 10~40 | tournament(형식 표 MTT 행) |
| how do poker tournaments work · poker tournament structure · …blind structure · …payout structure · how long do poker tournaments last | 각 10 | 간헐 | tournament H2·FAQ |
| freezeout(단독·poker) · pko poker · satellite poker · poker satellite · deepstack poker · mystery bounty · bounty poker · sit and go poker · itm poker · progressive knockout · rebuy poker | 각 10 | | tournament 형식 H3·FAQ·태그 |
| icm calculator · icm deal · independent chip model · icm poker meaning · chip ev | 각 10 | | icm — calculator는 🔴 `/ms/calculator` 몫(본문 CTA 링크만) |
| poker bubble · bubble poker · bubble factor · money bubble · satellite bubble · hand for hand poker · stone bubble | 각 10 | 간헐 | bubble |
| short stack poker · short stack strategy · push fold · push fold chart · push or fold · m ratio poker · fold equity · all in or fold · shove poker · risk premium poker · when to go all in poker | 각 10 | | short-stack(risk premium은 icm·bubble 공통) |
| types of poker tournaments · re-entry poker · min cash poker · late registration poker · poker tournament kl · chip chop vs icm · bubble boy poker · push fold strategy · poker all in strategy · harrington m · wsop malaysia | **null** | | — |
| **kejohanan poker · pertandingan poker(10·1개월) · gelembung poker · stack pendek poker · cara main tournament poker · strategi tournament poker** | **null** | | — 말레이어 전멸 |

## 2. 자동완성 (gl=my · `hl=ms` ≡ `hl=en`)

| 시드 | 확장(축어) | 쓸 자리 |
|---|---|---|
| poker tournament | malaysia 2026 · las vegas · asia · calculator · singapore · near me · schedule | 🔴 전부 일정·지역 의도 |
| tournament poker | strategy · chips · near me · edge · **rules** · chip set · charts · preflop charts | tournament H2 «strategi mengikut peringkat» |
| icm poker | **meaning** · calculator · term · **formula** · chart · **chop** · explained · tournament · chip calculator | icm H2 1·3·7 |
| bubble poker / poker bubble | **meaning** · tournament · term · pokerstars · **bubble boy** · **bubble factor** (calculator) · protection · rush · **strategy** · **burst** · play | bubble H2 1·7 · FAQ 2·4 |
| short stack poker | cash games · **strategy** · rules · **tournament strategy** · **meaning** · **chart** · hand rankings · reddit · tips | short-stack H2 1·6 · FAQ 1·9 |
| jam poker | **meaning** · definition · term · là gì · poker jam rfid · **poker jam vs shove** · monster jam poker | short-stack FAQ 3(«shove atau jam» 1회) · 태그 |
| push fold | **chart** · chart poker · chart 10bb · calculator · 🔴 push folder to github · folding wagon | 항상 «push/fold chart»·«push/fold poker» |
| satellite poker | tournament · meaning · tournament strategy · strategy · pokerstars | tournament H2 «satellite» · bubble 새틀 절 |
| pko poker | **meaning** · tournament · strategy · rules | tournament H3 PKO |
| freezeout | 🔴 lake·hill(지명) · **poker** · poker meaning · tournament poker | 항상 «freezeout poker» |
| fold equity | poker · **meaning** · calculator · **formula** · explained · chart | short-stack H2 2 |
| m ratio | 🔴 «m ration» 인도 배급 포털 | 항상 «M-ratio poker» |
| chip chop | 🔴 cookies·ham·chopper·game | 항상 ICM deal과 짝 |
| kejohanan poker · cara main poker tournament · icm poker maksud · bubble poker maksud · short stack maksud | **(빈 배열)** | 말레이어 자동완성 없음 |
| pertandingan poker | pertandingan poker **dunia** | — |
| apa itu icm | icmp · icmi · icms · «icm dalam kebidanan» | 🔴 «apa itu ICM» 단독 금지 — 항상 «dalam poker» |

## 3. SERP (DFS advanced · 2458 · `ms` · mobile · 2026-09-26)

| 쿼리 | top 결과 | PAA (축어) | 판정 |
|---|---|---|---|
| poker tournament | GPI 일정 · en.wikipedia · pokercalendar.asia · 영상 · WPT · **Poker Dream Malaysia** · PokerAtlas · Arkadium · APT · **Hendon Mob «Festivals at Resorts World Genting»** | «Is poker halal in Islam?» · «Is it real money in poker tournaments?» · «What is the big poker tournament called?» · «How do you win in a poker tournament?» | 일정 SERP. «real money?»는 EN 본문(칩 무가치·buy-in 상한·prize pool)으로 받는다. 🔴 halal = 종교·합법성 축 → 절대 다루지 마라 |
| cara main tournament poker | AI Overview · 영상 4 · paulphuapoker · wikipedia · weezevent(주최법) · 888poker · pokerdiscover · **somuchpoker «How Does a Poker Tournament Work?»** · quora · masterclass | (없음) · 관련검색 «Poker tournament structure» · «How do poker tournaments make money» · «Poker tournament buy-in» | **말레이어 쿼리에도 전부 영어 글.** 관련검색 2개는 EN H2(구조)·FAQ 4(돈을 어떻게 버나)로 이미 받는다 |
| icm poker | AI Overview · ICMizer 계산기 · wikipedia · reddit ELI5 · PokerNews 용어 | «How do you explain ICM in simple terms?» · «Is ICM the same as chip EV?» · «What are common ICM mistakes?» · «What is the ICM model?» | 4개 전부 EN H2·FAQ에 대응(H2 1 · H2 4 · FAQ 7 · H2 3) |
| apa itu ICM dalam poker | AI Overview · **kalkulator.com.my «Kalkulator ICM Poker»(유일한 말레이어)** · 영상 · gtolab · bbzpoker · reddit · wikipedia · gtogecko · scribd · pokercode | — · 관련검색 «Icm meaning medical» | 말레이어 경쟁 1편 — 아래 §5 |
| bubble poker | AI Overview · PokerStrategy «Bubble Strategy (5): Satellites and DONs» · reddit «I busted on the bubble» · X · PokerListings(GG bubble protection) · Review-Journal(WSOP 버블 핸드) · 세미놀 hand-for-hand 기사 · netbet.ro | «Is poker 100% luck?» · «Does poker increase testosterone?» · «What is the most profitable poker strategy?» · «What is the 42 rule in poker?» | PAA는 주제 밖 → 쓰지 마라(42 rule은 EN에 없다). **체계적 스택별 가이드가 top10에 없다** = 우리 몫 |
| short stack poker | reddit(1/2 **cash** 숏스택) · upswing 용어 · blackrain79(**cash** 위주 + 토너 절) · stackexchange · thepokerbank · 영상(J. Little 토너 숏스택) · pokertube · pokernews 용어 · 2+2(cash) | «What does being a short stack mean?» · «What does "stack" mean in poker?» · «How short is a short stack?» · «What are the rules of short deck poker?» | **cash·토너 혼재.** 우리 글은 토너 push/fold — FAQ 9(«cash game에서도 다른가»)가 혼재 의도를 받는다. PAA 1·3 = H2 1·FAQ 1. short deck = 다른 게임 → 쓰지 마라 |

## 4. 함정

- 🔴 **단독 머리어 3종은 남의 것**: `icm`(720 · 학교·브로커) · `short stack`(390 · 팬케이크·밴드·체형) · `m ratio`(인도 배급) · `chip chop`(음식) · `freezeout`(호수) · `push fold`(github). → 태그·제목에서 **반드시 «poker»/«ICM deal»과 짝지어** 쓴다.
- 🔴 **«jam»은 말레이어 일상어다**(jam = 시·시계, «4 jam» = 4시간). 코퍼스 낱말 «jam» 24건이 **전부** 시간·시계 뜻이다(«empat jam bermain» · «arah jam» · blind-meaning L114 «jam kejohanan» = 대회 시계). → 산문 동사는 **shove**. «jam»은 짧은 인용 표기(«shove (atau "jam")»)와 태그 `jam poker`에만. 반대로 blind **시계**(clock)는 말레이어 «jam»이 정확한 뜻이다(blind-meaning 선례) → 시계 = jam · shove = shove로 **뜻을 나눠 쓴다.** 벌칙 «call the clock»·clock call만 영어 clock.
- 🔴 **현지 대회 의도(genting 70 · malaysia 40 · asia 50)**: 수요는 있지만 EN에 사실이 없다(Genting·Poker Dream·APT 일정은 제외 대회가이드 범주). B는 **말레이시아 카지노·대회·금액을 쓰지 않는다.** → 헤드 요청(«나라별 홀덤대회 트랙» 후보)으로만 남긴다.
- 🔴 **PAA «Is poker halal in Islam?»**: 종교·합법성 축 — `legality-ban-scope`(신규 발행은 합법성 축을 열지 않는다) · posting.mdc «합법/불법 얘기 금지». 건드리지 마라. tournament FAQ 5(홈게임 합법성)는 EN 축어의 **중립 한 줄**만 옮기고 말레이시아 법을 보태지 마라.
- 🔴 **태그 카니발**: 기존 ms `holdem-tournament-vs-cash-game` 태그에 **«ICM poker»**가 이미 있다 → icm 글 태그와 겹친다(기존 글은 레인이 못 고친다 → 헤드 요청). icm 글은 «ICM poker»를 **seoTitle·H2로 가져가고**, 태그는 «icm poker» 소문자 1개 유지(EN 태그 축어 «poker icm»의 말레이시아 실검색형).
- 🔴 kalkulator.com.my의 «gelembung(bubble) · buta(blind) · tolakan(push) · timbunan cip(chip stack) · Model Cip Bebas · ekuiti» = **자동번역 직역**이다. 우리 정본(코퍼스 bubble 13 : gelembung 0 · equity 190 : ekuiti 0)과 반대 — 따라 하지 마라.

## 5. 현지 상위 글 원문 (Playwright h1~h3 · 2026-09-26)

| 글 | 언어·분량·표 | 주는 것 | 빠진 것 = 우리가 더 줄 것 |
|---|---|---|---|
| kalkulator.com.my «Kalkulator ICM Poker» | ms-MY · 1,528단어 · 표 2 | 계산기 UI · «Mengapa ICM penting» · 한계 4줄 · FAQ 7(«Adakah ini sama dengan pembahagian cip?» «Mengapa menggandakan cip saya tidak menggandakan nilai ICM saya?» «Bolehkah saya menggunakan ini untuk rundingan perjanjian?» «Bilakah saya harus menggunakan ICM paling banyak?») | **손으로 푼 예시 0**(재귀 계산·$ 값 표 없음) · chip EV 대조 없음 · bubble factor 수치 없음 · 경험담 0 · 직역투 |
| somuchpoker «How Does a Poker Tournament Work? Full Guide 2026» | en · 5,280단어 · 표 6 | 구조·형식 10종·테이블 크기·payout·전략 단계·bankroll·자격 경로 | 사이트 제휴 목록이 본문 절반 · 1인칭 Day 1 타임라인 없음 · 실제 payout 사례 수치 없음 |
| 888poker «How to Play Tournament Poker» | en · 1,549단어 · 표 0 | 입문 전략·payout·chop 여부 | 구조(blind 표)·형식 정의 없음 |
| gtolab «What Is ICM in Poker?» | en · 2,127단어 · 표 2 | chip EV vs ICM 예시 · risk premium · 한계 | ICM deal vs chip chop 금액 비교 없음 |
| pokerstrategy «Bubble Strategy (5): Satellites and DONs» | en · 1,768단어 · 표 2 | 새틀 버블 4단계 판단 | 머니 버블·스택별 플레이북·hand-for-hand 규정 없음 |
| blackrain79 «Short Stack Poker Strategy» | en · 3,817단어 · 표 2 | **cash** 숏스택 5팁 + 토너 절 1개 | M-ratio 존·push/fold 차트 한계·BB 콜 가격 계산 없음 |

**용어 표기(ms 독자가 실제로 보는 것)**: 우리 사이트 `/ms/calculator`(말레이어 UI)가 이미 **«Nilai M (M Harrington)» · «Zon hijau/kuning/oren/merah/mati» · «Nilai ICM» · «Chip chop» · «deal ICM» · «prize pool» · «Stack efektif» · «first-in» · «Push/Fold»**를 쓴다 → 블로그도 이 라벨을 그대로 쓴다(글↔도구 표기 일치). 기존 ms `holdem-tournament-vs-cash-game`은 «stack sederhana»·«final table»·«payout»·«bubble»·«shove»를 쓴다.

## 6. 이 레인의 winnable 흡수 계획 (브리프 «키워드» 절의 근거)

| 편 | 흡수 토큰 → 자리 |
|---|---|
| tournament | how do poker tournaments work → seoTitle·H2 1 · structure / blind structure / payout structure → H2 2·3·10 · freezeout / pko / satellite / deepstack / mtt / sit and go / mystery bounty → 형식 표·H3·H2 6 · itm / how long → FAQ 1·6 · PAA «real money?» → H2 1 직답·FAQ 8 |
| icm | icm poker / what is icm in poker (+71%) → seoTitle·H2 1 · icm formula / how is icm calculated → H2 3 · chip ev → H2 4 · icm deal + chip chop → H2 7·FAQ 4 · common icm mistakes(PAA) → FAQ 7 · icm calculator → `/ms/calculator` 링크 |
| bubble | bubble poker meaning → H2 1 · bubble factor → H2 7·FAQ 7 · money/satellite bubble → H2 3·9 · hand for hand → H2 8·FAQ 8 · bubble boy / burst → FAQ 2·4 · bubble strategy → seoTitle |
| short-stack | short stack poker / strategy / meaning → seoTitle·H2 1 · PAA «how short is a short stack» → H2 1·FAQ 1 · push/fold (chart) → H2 2·6 · fold equity → H2 2·FAQ 8 · M-ratio → H2 3·FAQ 7 · all in or fold / jam → FAQ 3 · cash 혼재 의도 → FAQ 9 |
