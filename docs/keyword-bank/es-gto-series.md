# 키워드 뱅크 — 스페인어 GTO 솔버 시리즈 13편 (`/es/blog/<slug>` · 번역+5필드용 «키워드 팩»)

> 실측일 **2026-09-02**. 도구 = **라쿠 `search-volume-history`**(Spanish + **Mexico** / Spanish + **Spain** · 24개월 · 107종 × 2 = 30크레딧) +
> **DataForSEO Labs `keyword_suggestions`**(location 2484 MX · 2724 ES · 시드 15종) + **DataForSEO SERP**(google 모바일 · ES/MX · 10쿼리 + PAA) +
> 구글 자동완성 직접(`hl=es` · 49시드). 랜딩 `/es/solver`의 뱅크는 `es-gto-solver.md`(헤드텀 `rangos poker` 480 · `gto poker` 210/260 · `solver poker` 70은 **랜딩 소유**).
> 자사 카니발 = `lib/posts-es/` 발행 47편 title·seoTitle·tags·H2 전수 grep.
>
> 🔴 **읽는 법**: 이 팩은 «번역 + 5필드»(스펙 §4-A-3)의 5필드(seoTitle·desc·H2·FAQ 선택·내부링크) + 여섯째 «본문 용어 표기»를 정하는 근거다.
> **수치·논거·구조는 EN 정본 그대로**이고 여기 적힌 것은 «어떤 스페인어로 부르나»뿐이다. 볼륨 0이라도 개념어는 본문에 쓴다 — 「제목·H2 조준」만 볼륨으로 가른다.
> 🔴 볼륨은 «지역»별이지 «언어»별이 아니다(`rakko-playbook.md` 운영규칙 ⑤). 영어 문자열(`spr poker` 등)의 볼륨은 그 지역 전체다.

## 0. 한 줄 결론

**스페인어권에서 이 시리즈가 잡을 수 있는 축은 하나 반이다** — **`spr poker`(ES 70 · MX 20 · SD 0 · 자사 0편)**가 유일하게 두 자리를 넘고,
나머지 개념어(`check raise poker` · `donk bet poker` · `set vs trips` · `rango polarizado poker` · `blockers poker` · `overpair poker` · `bet sizing poker` · `3bet pot` · `monotone board poker` · `top pair poker` · `equity realization poker`)는 **전부 10**이다.
그리고 🔴 **스페인어 서술형 표기(`board seco` · `board pareado` · `guerra de ciegas` · `ventaja de rango` · `bloqueadores` · `realización de equity` · `textura del board`)는 라쿠·DFS 양쪽에서 전부 null**이다 —
검색은 **영어 술어**로 친다(ja의 「cb」와 같은 현상). **훅은 «숫자»로 쓴다**(「Top pair y aun así check el 98.2%」식). 「GTO」는 제목·H2에서 반드시 `poker`와 붙인다(멕시코 과나후아토 — `es-gto-solver.md` §1-①).

## 1. 실측 볼륨 (라쿠 · 24개월 연평균 · Spanish)

| 키워드 | **ES** | **MX** | 편 | 메모 |
|---|---:|---:|---|---|
| ~~`poker set`~~ | 390 | 210 | — | 🔴 **오염 — 광고경쟁 100 = 「set de poker」(칩 세트 상품)**. 조준 금지([[keyword-volume-order-of-magnitude-trap]]) |
| `gto poker` / `poker gto` | 210 | **260** | — | 🔴 **랜딩 소유**. 13편은 본문 언급 + 허브 링크만 |
| `rangos poker` | 480 | 170 | — | 🔴 랜딩 소유(포스트플랍 레인지) |
| `solver poker` / `solver poker gratis` | 70 / 20 | 30 / 10 | — | 🔴 랜딩 소유. 본문 용어로는 자유(`es-gto-solver.md` §5) |
| **`spr poker`** | **70** | **20** | **⑧** | ✅ **시리즈 최대 축 · SD 0 · 자사 0편.** `spr poker significado` 10/10 · `stack to pot ratio` 10/10 · MX 12개월 **+29%**(유일한 상승 축) |
| `tercia poker` | 10 | **40** | ⑥ 보조 | 🔴 **멕시코 족보 용어(=trío)** — 정의는 hand-rankings 소유. ⑥에서 「(en México, tercia)」 한 번 병기만 |
| `fold equity poker` | 20 | 10 | ⑩ | `es/holdem-equity` 태그 보유 → ⑩은 «equity vs fold equity» 문맥만 |
| `trio poker` | 20 | 10 | — | 족보 정의 — hand-rankings·glossary 소유 |
| `que es gto en poker` | 20 | 20 | — | 랜딩 FAQ 소유 |
| **`check raise poker` / `check-raise poker` / `que es check raise en poker`** | 10 / 10 / 10 | 10 / 10 / 10 | **⑦** | ✅ 자사 betting-actions 태그 「check raise poker」 보유(정의 층) → ⑦은 **«6-5-2에서 어떻게 설계하나» 응용 층**. PAA 「¿Cuándo hacer check-raise?」 |
| **`donk bet poker` / `donk bet` / `donkear`** | 10 / 10 / 10 | 10 / 10 / **20** | **④** | ✅ 자사 glossary 정의 1행뿐 · H2 0. `donkear` MX 20 = 동사형이 산다. PAA 「¿Qué es donkear?」 |
| **`set vs trips` / `trips vs set` / `set vs trips poker`** | 10 / 10 / 10 | 10 / 10 / 10 | **⑥** | ✅ glossary가 「Set vs Trips」 정의 소유 → ⑥은 «6-6-3에서 둘이 어떻게 갈리나». `trips poker` 10 |
| **`rango polarizado poker`** | 10 | 10 | **⑩** | ✅ `es/holdem-3bet` H2 「lineales vs. polarizados」가 **프리플랍 3벳 레인지** 정의 소유 → ⑩은 «플랍에서 폴라라이즈된 3벳터가 어떻게 치나» |
| **`blockers poker`** | 10 | 10 | **⑬** | ✅ card-counting 태그 「bloqueadores poker」 = 정의 층 → ⑬은 «A 블로커가 이 보드에서» 응용 층. 🔴 `bloqueadores poker`는 라쿠 null — **검색 표기는 `blockers`** |
| **`overpair poker`** | 10 | 10 | ⑩ | 코퍼스는 `sobrepar` 21 : `overpair` 1 → 본문 「sobrepar (overpair)」 |
| **`bet sizing poker` / `sizing poker`** | 10 / 10 | 10 / 10 | **⑨** | ✅ pot-odds는 필요승률 표라 축이 다름. `overbet poker` 10/10 |
| `3bet pot` / `3bet pot oop` | 10 / 10 | 10 / 10 | ⑧⑨⑩ | 영어 표기가 검색어. 본문 「bote de 3-bet」(앱·랜딩 축어) + 태그 「3bet pot」 |
| `monotone board poker` | 10 | 10 | ⑤ | ES 3개월 +200%(신생). `board monotono/monocolor` null → 본문 「board monotone」(앱 축어) |
| `top pair poker` | 10 | 10 | ①② | 코퍼스 `top pair` 24 : `pareja máxima` 11 → **top pair** |
| `equity realization poker` | 10 | 10 | 공통 | `realizacion de equity` null. 본문 「realización de equity (EQR)」 · 태그 「equity realization」 |
| `postflop poker` / `juego postflop` | 10 / 10 | 10 / 10 | 공통 | 도입·결론 |
| `c-bet poker` / `cbet poker` | 10 | 10 | — | 🔴 **`es/holdem-continuation-bet` 소유**(태그 10개 전부 c-bet). ①②⑧⑨⑪은 롱테일·문맥만 · 제목에 「c-bet」 단독 금지 |
| `overcards poker` · `proyecto de color poker` · `postflop poker` | 10 | 10 | 보조 | |

### 🔴 라쿠·DFS 양쪽 null (제목·H2 조준 금지 · 본문 개념어로는 쓴다)
`board seco/húmedo/mojado/pareado/emparejado/conectado/coordinado/rainbow poker` · `textura del board` · `guerra de ciegas (poker)` · `ciega contra ciega` · `blind vs blind poker`(0) ·
`ventaja de rango poker` · `ventaja de nuts poker` · `nut advantage`(10 → 0 추세) · `bloqueadores poker` · `realización de equity` · `sobrepar poker` · `apuesta de continuación`(null · `apuesta de continuacion poker` 10) ·
`estrategia postflop poker` · `range check poker` · `check de rango` · `bote de 3-bet` · `que es spr/donk bet/check raise …` 일부 · `tamaño(s) de apuesta poker` · `rango polarizado` 단독 · `sobrecartas` · `segundo par`.

🪶 「null」은 «수요 없음»이 아니라 «구글 KWP 버킷 아래»다(`rakko-playbook.md` 6-3). SERP에는 이 표현으로 쓴 스페인어 글이 실재한다(§2). **본문 표기는 코퍼스·앱 축어를 따르고, 검색 표면(seoTitle·tags)만 영어 술어로 앵커한다.**

## 2. SERP 실측 (DataForSEO · google 모바일 · 2026-09-02) — «이길 자리»

| 쿼리 | ES top-3 | MX top-3 | PAA(축어) | 판정 |
|---|---|---|---|---|
| `spr poker` | casinobarcelona · zerospoker · 888poker.es | reddit · zerospoker · casinobarcelona | 「¿Qué significa SPR?」·「¿Qué es un SPR?」 | 🟢 **전부 «SPR이란»(정의 글)** — «SPR 4.0에서 100% 벳 · 사이즈는 SPR이 아니라 레인지 모양이 정한다»는 각도가 0개. ⑧이 먹는다 |
| `check raise poker` | 888poker.es · mentopoker · checkraisepoker.com.au(오염) | 888poker.es · checkraisepoker.com.au · reddit | 「When to check-raise in poker?」 | 🟢 정의·일반론뿐. **재솔브 수치(레이즈 14.9%·콜 65.6%·폴드 19.5%)를 가진 글 0개** |
| `donk bet poker` | educapoker · reddit · 888poker.es | educapoker · reddit · pokernews | 「¿Qué es un donk?」·「¿Qué es donkear?」 | 🟢 «동크벳이 맞는 유일한 SRP 보드 + 23.7%» 각도 0개 |
| `set vs trips poker` | thepokerbank · reddit · 888poker.es | reddit · thepokerbank · pokerchipforum | 「¿Quién gana en el pokar?」(오염) | 🟡 영어 사이트 지배 · **스페인어 글은 funfarm.pro #8·888 #3뿐** — ⑥은 «6-6-3 페어 보드에서 둘이 어떻게 갈리나»로 |
| `guerra de ciegas poker` | pokerstrategy · poker-red · codigopoker | pokerstrategy · codigopoker · poker-red | — | 🟢 **볼륨 null인데 스페인어 전용 글이 7개** = 살아 있는 표기. ⑪⑫⑬ 본문·H2 표기로 채택 |
| `board monotone poker` | reddit · upswing · 888poker.es | 동일 | — | 🟡 888 「Cómo jugar boards monotone」 실재 → 표기 확정 «board monotone» |
| `c bet poker` | pokerstars.es · reddit · gipsyteam | reddit · gipsyteam · mentopoker | 「¿Qué quiere decir bet?」(오염) | 🔴 자사 cbet 글 자리 — 13편 조준 금지 |
| `rango polarizado poker` | pokerstars.es · formapoker · poker-red | formapoker · reddit · pokerstrategy | 「¿Qué es la polarización y ejemplos?」 | 🟡 전부 프리플랍·개념 → ⑩은 «플랍 8-5-2에서 폴라라이즈드 3벳터» 응용 |
| `bloqueadores poker` | 888 · reddit · funfarm | 888 · reddit · funfarm(+메르카도리브레 카드가드 오염) | ai_overview 있음 | 🟡 정의 층은 888·upswing español → ⑬은 응용 |
| `ventaja de rango poker` | reddit · 888 · freebetrange | reddit · 888 · rangecraft | 「¿Qué es mejor, full o color?」(오염) | 🟢 upswingpokerespanol 「¿Qué es la ventaja de rango?」 1편뿐 → ①이 «A-7-2에서 수치로» |

🔴 **PAA 오염 지문**: 「¿Qué es mejor, full o color?」·「¿Quién gana en el pokar?」가 여러 쿼리에 붙는다 = **구글이 이 쿼리들의 의도를 못 잡고 족보 질문으로 뭉갠다.** FAQ에 족보 질문을 넣지 마라(hand-rankings 소유 + 의도 오염 증폭).
🪶 **스페인어권 경쟁자 지형**: 888poker.es · pokerstars.es · gipsyteam.es · mentopoker · codigopoker · poker-red · educapoker · formapoker · zerospoker · funfarm.pro. **전부 «개념 정의» 글이고 솔버 출력 수치로 한 보드를 해부한 글은 0개다** — 이 시리즈의 자리는 정의가 아니라 **수치**다.

## 3. 편별 배분 (5필드 근거)

| 편 | slug | 제목·H2 축(볼륨) | FAQ 흡수 | 내부링크(es 실재 — EN 1:1) |
|---|---|---|---|---|
| ① | a-high-board-cbet | 「ventaja de rango」(null·개념) · 「top pair」 10 · 「board seco」(null) · 훅 = **98.2% check** | 「¿Qué es un range check?」 · 「¿Qué es un board seco?」 | holdem-continuation-bet · holdem-equity · holdem-position-play |
| ② | k-high-board-cbet | 「board K-high」(0) · 훅 = **99.8% check** · 「¿Cuándo no cbetear?」(cbet 소유 롱테일만) | 「¿A-high o K-high, cuál es peor para BB?」 | holdem-continuation-bet · ① |
| ③ | broadway-board-strategy | 「ventaja de rango vs ventaja de nuts」(개념) · 「textura del board」 보조 · 훅 = **EQR 77.9%** | 「¿Diferencia entre ventaja de rango y de nuts?」 | holdem-reading-the-board · holdem-position-play |
| ④ | donk-bet-strategy | **「donk bet」 10 · 「donkear」 MX 20** · 훅 = **23.7%** | 「¿Qué es un donk bet?」 직답 | holdem-continuation-bet · holdem-drawing-odds |
| ⑤ | monotone-board-strategy | 「board monotone」 10 · 훅 = 「incluso un color hecho hace check el 69.9%」 | 「¿Qué es un board monotone?」 | holdem-flush-vs-straight · holdem-outs |
| ⑥ | paired-board-strategy | **「set vs trips」 10** · 「board pareado」(null) · 「tercia」 MX 병기 1회 | 「¿Set o trips, cuál es más fuerte?」 | holdem-hand-rankings(정의 링크) · holdem-reading-the-board |
| ⑦ | low-board-check-raise | **「check-raise」 10** · 「¿cuándo hacer check-raise?」(PAA) | 「¿Qué es un check-raise?」·「¿Es de mala educación?」 | holdem-betting-actions · holdem-outs |
| ⑧ | 3bet-pot-cbet | **「SPR」 70/20 · 「spr poker significado」** · 「bote de 3-bet」 | 「¿Qué es el SPR?」 직답 · 「¿Cómo se calcula el SPR?」 | holdem-3bet · holdem-continuation-bet |
| ⑨ | 3bet-pot-bet-sizing | **「bet sizing」 10 · 「overbet」 10** · 훅 = **98.4% del mismo tamaño** | 「¿Cómo elegir el tamaño de apuesta?」·「¿Qué es un overbet?」 | holdem-pot-odds · holdem-3bet |
| ⑩ | 3bet-pot-low-board | 「rango polarizado」 10 · 「sobrepar (overpair)」 10 · 「fold equity」 20 | 「¿Qué es un rango polarizado?」 | holdem-3bet · ⑧ |
| ⑪ | blind-battle-cbet | 「guerra de ciegas」(null · 표기 확정) · 훅 = **67.4%** | 「¿SB o BB, quién tiene ventaja?」 | holdem-position-play · holdem-blind-meaning |
| ⑫ | blind-battle-connected-board | 「board conectado」(null) · 「textura」 보조 · 훅 = **9.6%** | 「¿Board estático vs dinámico?」 | holdem-reading-the-board · ⑪ |
| ⑬ | ace-paired-board-strategy | **「blockers」 10**(응용 층) · 「board con A pareado」 | 「¿Qué es un blocker?」(정의는 card-counting 링크) | holdem-card-counting · ⑥ |
| 공통 | — | 「realización de equity (EQR)」 · 「postflop」 10 · 「juego postflop」 | 「¿Qué es la realización de equity?」 | /es/solver(허브) · holdem-equity |

🔴 **EN 내부링크 구조와 1:1**([[translation-link-structure-equals-en]]) — 대상 slug를 `/es/blog/`로 바꾸되 **개수·readnext·thumb까지 동일**.
✅ **EN 13편이 거는 외부 slug 10종(continuation-bet · position-play · drawing-odds · 3bet · pot-odds · hand-rankings · strategy · implied-odds · equity · betting-actions)은 전부 `lib/posts-es/`에 실재한다**(2026-09-02 파일 실존 확인) → 대체 링크 불필요. 시리즈 내부 링크 13종은 이번 회차에 함께 생긴다.

## 4. 표기 판정 (되돌리지 마라)

1. **set / trips / trío** — `es/holdem-glossary` L47·L135·L136 정본: 「Ambos son trío — un **set** usa un par servido; los **trips** usan una carta de mano + una pareja en la mesa」. 앱 등급 라벨은 **「Trío」**(set·trips 구분 없음) → 표에서 앱 라벨을 인용할 땐 「Trío」 축어 + 언페어 보드(①②③④⑤⑦⑧⑨⑩⑪⑫)면 EN 각주와 같은 «aquí siempre es set» 각주. 페어 보드(⑥⑬)에서만 trips가 실재한다. 🔴 「tercia」는 ⑥에서 「(en México, tercia)」 1회 병기만 — 정의 층 침범 금지.
2. **「GTO」 = 제목·H1·H2에서 반드시 `poker`/`solver`와 결합**(멕시코 과나후아토 · `es-gto-solver.md` §1-①). 산문의 「el GTO」는 자연스러움 우선. 「solver」는 본문 자유(코퍼스 정본 «los solvers») · seoTitle 앞머리 금지(랜딩과 카니발).
3. **c-bet 표기** = 코퍼스 정본 「apuesta de continuación (c-bet)」 첫 1회 → 이후 「c-bet」 · 동사 「cbetear」(코퍼스 53회). 제목에 「c-bet」 단독 금지(cbet 글 소유).
4. **board** = 「board」(앱·랜딩·SERP 전부) — 코퍼스 룰·족보 글의 「la mesa」는 그 글 문맥. 시리즈는 **board**로 통일(「tablero」 금지). 텍스처 어휘 = 앱 축어: **seco · monotone · pareado · rainbow · two-tone · conectado · dinámico**(「bicolor」·「monocolor」·「emparejado」 금지).
5. **카드 표기** = 산문 `10♠`(코퍼스 10♠ 60 : T♠ 0) · **레인지 표기·앱 캡처·표 안의 핸드는 축어**(T9s · TT · Q♥T♥7♠는 앱 헤더 축어). 수치 = 언어 불변(반각 % · 소수점 `.` · `bb` · 천단위 `,`) — `translation-terms-es.md` 「Números — EN 포맷 유지」.
6. **top pair**(코퍼스 24) · **sobrepar (overpair)**(코퍼스 21 : 1 · 앱 라벨은 「Overpair」 축어) · **segunda pareja** · **pareja débil** · **underpair**(앱 축어) · **sin jugada**(앱 축어 = no made hand) · **doble pareja** · **proyecto**(draw) · **gutshot** · **proyecto a dos puntas**(OESD · 앱) · **proyecto de color** · **proyecto combinado** · **proyecto backdoor**(앱) · **color**(=flush) · **escalera** · **full house**(앱) · **quads**(앱) / 산문 「póker」(=four of a kind — 코퍼스 정본).
7. **bote**(코퍼스 790 : pozo 4) · **stack efectivo** · **farol / farolear**(코퍼스 166 : bluff 9 — 앱 note의 「bluff」는 축어 인용 시만) · **las nuts**(16 : 12) · **realización de equity (EQR)** · **ventaja de rango** · **ventaja de nuts** · **puntos**(%p — 「5.2 puntos」) · **fuera de posición (OOP) / en posición (IP)** · **guerra de ciegas** · **bote de 3-bet** · **bote de subida simple (single raised pot)** — 첫 1회 병기 후 「bote de subida simple」 · **3-bettor / caller / open-raiser**(앱 축어 — 산문에선 「el que hace 3-bet」·「el que paga」·「el que abre」 교대 허용).
8. **문체** = tú · neutral LATAM(`local-voice/es-latam.md` §0.4 · §8-1 반도어 금지: coste→costo · coger · lanzadera …) · 앵글리시즘 -ear 동사 허용(cbetear · foldear · limpear) · 「¿…?」 여는 물음표 필수 · 「—」 전환 허용.

## 5. 카니발 판정 (2026-09-02 · es 47편 전수)

| 축 | 소유 글 | 13편의 대응 |
|---|---|---|
| c-bet 헤드(태그 10종) | `holdem-continuation-bet` | ①②⑧⑨⑪은 롱테일·문맥만. seoTitle에 「c-bet」 단독 금지 |
| set/trips/trío·tercia 정의 | `holdem-glossary`·`holdem-hand-rankings` | 정의 H2 금지 · 링크로 넘김. ⑥은 «6-6-3에서 갈리는 법» |
| 「mesa emparejada poker」·「mesa peligrosa vs seca」 | `holdem-reading-the-board`(태그·H2) | ⑥⑫은 «이 보드에서» 응용 · 「mesa」 표기 안 씀(board) |
| 「bloqueadores poker」·「contar outs」 | `holdem-card-counting` | ⑬은 응용 층(A 블로커 88 vs 66 콤보) |
| 「rango lineal vs polarizado」·「sizing de 3-bet」·「rango de 3-bet」 | `holdem-3bet` | ⑧⑨⑩은 **플랍** 국면. 프리플랍 3벳 표 금지 · 링크 |
| 「check raise poker」 | `holdem-betting-actions`(태그) | ⑦은 «설계» 층(재솔브 수치) |
| 「realizacion de equity」·「fold equity」 | `holdem-equity` | 공통 개념어 — 정의는 링크, 수치는 각 편 |
| 「rangos poker」·「gto poker」·「solver poker」 | `/es/solver` 랜딩 | 13편은 허브 링크로 모은다(13×13 금지 — `lib/gto-series.ts`) |
| 「defender la ciega grande」·「estrategia de posicion」 | `holdem-blind-meaning`·`holdem-position-play` | ⑪은 «오픈 레이저가 OOP» 축 |

## 6. 재현

```
mcp__rakko__search-volume-history { keywords:[107종], language:"Spanish", location:"Mexico"|"Spain", aggregationPeriodMonths:24 }   // 15크레딧/요청
node _probe-dfs.mjs   // dataforseo_labs/google/keyword_suggestions/live · location_code 2484·2724 · language_code es (회차 후 삭제된 임시 스크립트 — 본문 §1의 REST 형식과 동일)
node _probe-serp.mjs  // serp/google/organic/live/advanced · device mobile · depth 10 · people_also_ask_click_depth 1
```
시드 15종(DFS): c-bet poker · check raise poker · donk bet poker · spr poker · board monotono poker · rango polarizado · guerra de ciegas poker · bloqueadores poker · set vs trips · bet sizing poker · ventaja de rango poker · board seco poker · equity realization poker · sobrepar poker · flop poker estrategia.
🪶 구글 자동완성은 `gl=` 파라미터가 결과를 안 가른다(요청 IP 기준 — `rakko-playbook.md` ⑤). 자동완성이 준 것: 「c bet poker significado」·「que es c bet poker」·「check raise poker español」·「que es check raise en poker」·「donk bet poker significado」·「que es donk bet en poker」·「spr poker significado/formula/explained」·「stack pot ratio español」·「rango polarizado poker」·「guerra de ciegas poker」·「blockers en el poker」·「overpair significado poker」·「que es un cbet en poker」.
