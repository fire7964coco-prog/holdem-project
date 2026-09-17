# es 키워드 뱅크 — `/es/calculator` (계산기 랜딩 · 2026-09-17)

> 실측 2026-09-17. 도구 = DFS `keywords_data/google_ads/search_volume/live`(location **2484 Mexico** 60시드 · **2724 Spain** 50 · **2170 Colombia** 24 · **2032 Argentina** 24 · 🔴 `language_code` 생략 — language는 볼륨을 안 나눈다) ·
> **구글 자동완성**(`suggestqueries.google.com` · `client=firefox` · `hl=es` × `gl=MX/AR/CO/ES/US` · 50시드 · 스크립트 `tmp/es-calc-suggest.mjs` → `tmp/es-calc-suggest.json`) ·
> DFS SERP `serp/google/organic/live/advanced`(mobile · language `es` · «calculadora de poker» MX · «calculadora icm poker» MX · «calculadora de probabilidades poker» AR) ·
> 상위 9페이지 구조 = 서브에이전트(sonnet) 2개가 Playwright DOM에서 title/H1~H3/table th/FAQ/위젯 라벨을 프로그램으로 추출(요약 금지 · §12-B · 원본 `tmp/es-calc-extract-{a,b}.json`).
> 라쿠는 쓰지 않았다(es-MX는 DFS와 같은 Google Ads 원천 · rakko-playbook 운영규칙). 질문검색은 ja 전용.
> EN 정본 = `en-calculator.md` · 선례 = `ja/zh/zh-hant-calculator.md`. 수치·표 행 개수는 EN과 동일(§13) — 이 파일은 «문안·형태소·제목» 근거만 담는다.
> 기존 실측 = `es-gto-solver.md` §2(08-22 · calculadora de poker ES 170·MX 70 · SD 1) — 이번 재측정과 같다.

## 1. 볼륨 (월 · DFS · 2026-09-17)

| 키워드 | MX | AR | CO | ES | 판정 |
|---|--:|--:|--:|--:|---|
| **calculadora de poker** | **70** | **90** | **70** | 170 | ✅ **제목 앞머리** · 자동완성 5지역 동일 |
| calculadora poker | 70 | 70 | 70 | 480 | 동의어(무관사) — 본문 자연 등장 |
| calculadora de probabilidades (de) poker | 10 | 10 | 10 | 10 | 🟠 현행 H1·CTA 앵커 — **H1·CTA·브레드크럼에만** |
| calculadora de odds poker · de equity poker · equity poker(calculadora) · icm · icm poker · de outs poker · de pot odds · texas holdem · holdem · de manos poker · gratis · online · de varianza · omaha · de ev poker | 10 | ≤10 | ≤10 | 10~40 | 롱테일 — 본문·FAQ·H2에 분산 |
| **icm calculator**(영문) | **140** | **140** | **70** | 210 | ✅ 스페인어권도 영어로 친다 → 제목 «ICM» |
| poker odds calculator(영문) | 90 | 50 | 30 | 320 | 설명·H1 부제 «probabilidades» |
| poker calculator(영문) | 70 | 70 | 40 | 140 | |
| poker equity calculator(영문) | 30 | 40 | 20 | 110 | ✅ 제목 «equity» |
| equilab | 110 | 90 | 50 | 320 | 브랜드 — 미채택 |
| jerarquia de manos poker | 390 | 70 | 90 | 70 | 🔴 `holdem-hand-rankings` 소유 — 탭 라벨로만 |
| probabilidades poker · probabilidad poker | 110 | 50 | 30 | 320 | 🔴 `holdem-probability` 소유 |
| chip chop | 70 | 20 | 10 | 480 | 🟠 ES 480은 비포커 오염 의심 — 표 라벨·본문 전용 |
| odds poker | 50 | 70 | 20 | 140 | 정보형 |
| aa vs kk | 50 | 10 | 10 | 20 | 12개월 10~260(스파이크) — quickRef 1표·FAQ 2 |
| icm poker | 40 | 30 | 10 | 110 | 정의형 반 = `holdem-icm` |
| equity poker · spr poker · tabla de probabilidades poker | 20 | 20 | 10 | 40~70 | |
| que es icm en poker | 10 | | | 20 | 정의형 = `holdem-icm` |
| **null**: tabla push fold · porcentaje de ganar poker · calculadora de ganador poker · regla del 2 y 4 poker · regla del 4 y 2 · ases vs reyes · m de harrington · acuerdo icm · odds implicitas poker · calculadora de fichas poker · probabilidad de ganar poker · simulador de manos poker · evaluador de manos poker · calculadora de apuestas poker | | | | | 근거로 쓰지 마라(null ≠ 수요 없음) |

## 2. 자동완성 (hl=es · MX/AR/CO/ES/US — 50시드 중 45시드가 5지역 완전 동일)

### 살아 있는 축
| 시드 | 확장(MX) | 대응 |
|---|---|---|
| calculadora de poker | texas · texas holdem · **omaha** · 888 · **preflop** · de equity poker · de varianza poker · de probabilidades poker · de outs poker | 제목 앞머리 · Equity 탭(preflop) · Omaha = §6 |
| calculadora poker | texas holdem · **gratis** · omaha · texas · online · **5 cartas** · odds · holdem · 888 | 설명 «gratis» |
| calculadora de equity | de equity poker · online · **equity preflop** · equity omaha · (home equity 오염) | Equity 탭 |
| calculadora de odds poker | omaha · **calculadora pot odds poker** | 팟오즈 탭 |
| icm poker | **icm poker calculator** · significado · free · software · online · **calculadora** · meaning · **formula** · app | 영문 «ICM» 제목 · FAQ 10 |
| icm calculator | 🔴 peso · kg · weight · imc calculator niños(BMI 오염) · formula · online · poker · mtt | «ICM»은 포커 앵커 필수 |
| outs poker | calculator · meaning · chart · calcular outs poker · contar outs poker · odds y outs poker | 아웃츠 탭·3표 |
| pot odds poker | **español** · formula · calculator · chart · explained · trainer · example | FAQ 6 «¿Qué fórmula usa la calculadora de pot odds?» |
| probabilidades poker | texas holdem · preflop · manos · omaha · tabla · cartas · app · combinaciones | 정보형 = holdem-probability |
| que mano gana poker | que mano le gana al poker de ases · **que mano le gana a cual en poker** · **como saber que mano gana en el poker** | FAQ 9 |
| quien gana poker | poker o full · o escalera · o flor imperial · o color · o flor · o escalera de color · o seguida | 족보 비교 = hand-rankings 소유 · Equity 탭 승자 표시가 도구 답 |
| aa vs kk | vs qq preflop all in · odds calculator · odds · preflop · equity · probability · poker odds | quickRef 1표 · FAQ 2 |
| regla del 2 y 4 | **regla del 2 y 4 poker** · (2 3 4 · 2 4 6 anestesia — 오염) | 코퍼스 표기 유지 |
| equity poker | calculator · **significado** · online · calculadora · meaning · hands · formula · preflop · chart | 「significado」 = holdem-equity |
| spr poker | significado · formula · meaning · calculator · explained · chart | 탭·5표 |
| push fold | charts · chart hu · chart 10bb · poker chart · calculator · chart 15bb | push/fold 탭 |
| chip chop poker | **chip chop poker calculator** · survivor | ICM 딜 H2 |
| burbuja poker | burbuja de premios poker | ICM 가이드 |
| como calcular pot odds | rapidamente · como calcular las pot odds (en poker) | 정보형 = holdem-pot-odds |
| como calcular outs | como calcular outs poker | holdem-outs |
| calculadora texas holdem | calculadora de póker texas holdem poker calculator · de probabilidades poker texas holdem · de odds texas holdem | |
| equilab | equilab poker · pokerstrategy · (기업 오염) | 미채택 |

### 🔴 오염·사망 시드
- **«calculadora icm» → 10개 전부 «calculadora imc»(체질량지수)** · «como calcular icm» → 전부 IMC. → ICM은 늘 «de poker»/«de ICM»/«ICM de poker»로 앵커.
- **«regla del 4 y 2» → 의료(4-2-1 수액 · 망막병증)** → 코퍼스 «regla del 2 y 4».
- «m de harrington» → 인명·재킷 오염 · «valor m poker» 0 · «ases contra reyes» 0 · «acuerdo icm» 0 · «reparto de premios poker» 0 · «tabla push fold» 0 · «se puede usar calculadora en poker» 0 · «proyecto de color probabilidad» 0 · «calculadora de manos poker» 0.

## 3. SERP (DFS 모바일 · es · 2026-09-17)

| 쿼리 | 1~10 | 특징 |
|---|---|---|
| calculadora de poker (MX) | **es.pokernews** «Calculadora de Probabilidades de Texas Holdem póker» · math4all «Calculadora de Póker» · **pokerlistings.es** «Calculadora de Probabilidades – Odds y Manos de Poker» · **888poker.es** blog «Calculadora de Poker: Odds, Probabilidades, Equity y EV» · 앱 팩 3 · formapoker «Calculadora»(EV) · evenbeter · reddit · Google Play · GGPoker «Tabla de Probabilidades» | 🔴 1·3위가 «probabilidades» 이름으로 «poker» 쿼리에 오른다 = 동의어군. PAA 없음 |
| calculadora icm poker (MX) | icmizer(EN) · **gipsyteam.es «Calculadora de ICM»** · 앱 · 888 ICM 글 · mttdb(EN) · holdemresources(EN) · gipsyteam.com(EN) · **academypokergto «Calculadora ICM Gratis para Torneos de Poker»** · apps.apple · icmizer | 11~ 4theglorypoker «Calculadora ICM Poker» · primedope · snapshove — **스페인어 ICM 도구는 3곳**(gipsyteam.es 위젯+로그인 · academypokergto 268단어 · 4theglory 1,505단어) |
| calculadora de probabilidades poker (AR) | math4all · pokernews · pokerlistings · 앱 · pokerstrategy ES 글 · YouTube · 888 · **AI Overview** · gipsyteam.es «Calculadora de odds de poker» · Microsoft 앱 | 11~ GGPoker 표 · zerospoker · evenbeter · pokerlistings **«Calculadora de “¿Qué mano gana al poker?”»**(20위) |

**PAS(También se buscó) 합집합**: calculadora poker 5 cartas · calculadora de poker omaha · calculadora de poker gratis · calculadora de poker texas holdem · simulador de poker gratis · calculo de poker · calculadora odds poker · simulador de póker · tabla de probabilidades poker · solucionador de poker · comprobador de poker · calculadora de odds · cardplayer calculadora · calculator poker holdem · ICMIZER (gratis) · icm deal · equity poker · resources poker · odds poker holdem · probabilidad manos poker · zerospoker calculo de probabilidades · probabilidad y estadistica poker.

## 4. 상위 페이지 구조 (원문 추출 · `tmp/es-calc-extract-{a,b}.json`)

| 페이지 | 단어 | 구조 |
|---|---:|---|
| es.pokernews 「Calculadora de Odds de Póker Texas Hold'em」 | 2,895 | H3 ¿Qué es…? / ¿Cómo funciona…? / Odds y Pot Odds · FAQ 12 — **«¿Se Permite el Uso de Calculadoras de Odds en Póker?» · «¿Están permitidas las calculadoras de odds en póker online?»** · 표 없음 · Monte Carlo/exacto 언급 0 |
| math4all | 27(보이는 텍스트) | H1만 · 위젯 · 🔴 전면 투명 광고 오버레이(클릭재킹형) |
| pokerlistings.es 확률 계산기 | 1,796 | H2 ¿Cómo usar…? / **Probabilidades en % tras el Flop**(표 14행: MANO/MEJORAR A/OUTS/EN EL FLOP/EN EL TURN) / **Manos de All-In más comunes**(표 16행) / Cómo contar tus Outs / Probabilidades en el Bote / Probabilidades implícitas · FAQ 6 — **우리 골격(도구 + 아웃츠 표 + 매치업 표 + FAQ)과 가장 가깝다** |
| pokerlistings.es «Qué mano gana» | 1,496 | H1 Calculadora de Qué Mano Gana en Poker · FAQ 7(«¿Qué significa una odd de 2 a 1 en el poker?») |
| 888poker.es 블로그 | (본문 추출 실패) | H2 19(¿Qué es…? / Calculadora de probabilidades / de equity / de outs / de EV / de varianza / de rake / ICM / gratis / Errores comunes) · 표 3 · FAQ 9 — **«¿Se puede usar una calculadora de poker mientras se juega online?»** · 도구 없음(글) |
| gipsyteam.es ICM | 1,422 | H3만 · 위젯(2~20명) + 로그인 · FAQ 2 · «acuerdos más justos» |
| gipsyteam.es equity | 1,185 | H3만 · FAQ 7 · 위젯 |
| academypokergto ICM | 268 | 위젯(push/fold ICM · **«Chip Chop (Deal)»** 모드) · FAQ 8(«¿Cuál es la diferencia entre Push/Fold ICM y Chip Chop?») |
| 4theglorypoker ICM | 1,505 | H1 Calculadora ICM de poker · H2 Cómo leer el resultado / Ejemplo 3-handed / Risk premium y bubble factor / ICM vs chip EV · 표 7 · FAQ 11 · 버튼 **«ICM Deal / Chip Chop / Save 1ro + ICM»** · «reparto de premios» |

**공통형 = 도구 + 정적 표 + FAQ**(EN·ja·zh·zh-hant 동형). 딜 용어는 스페인어 SERP도 **«Chip Chop»·«Deal» 영어 그대로** + «acuerdo»·«reparto de premios» 서술 — 코퍼스 «acuerdo por ICM»·«chip chop»과 같은 결.
es 차별점 = 도구 9 + 표 6(스트리트 3열 · 수트 가중 매치업) + FAQ 18 + 열거/Monte Carlo 명시(경쟁 4곳 언급 0) + **ICM 딜 vs chip chop 병렬 열**(스페인어 SERP에선 4theglory만 버튼) + TDA 2024 Rule 5 FAQ.

## 5. GSC (`/es/calculator` · 90일 · 2026-06-16~09-14)

노출 0 · 클릭 0 · 쿼리 0 — 09-17 신설. 다음 28일 창(10/15경)에서 쿼리 단위로 첫 판독(«calculadora de poker»·«icm calculator» 축).

## 6. 채택 (09-17)

- **제목** `Calculadora de poker — probabilidades, equity e ICM`(51자 · 브랜드 포함 66) · **설명** 152자(equity mano contra mano · pot odds · odds implícitas · outs · jerarquía · SPR · M · ICM y chip chop · 9 herramientas · sin registro).
  - 앞머리 = §1 머리어. 🔴 옛 앞머리 «Calculadora de probabilidades de poker»(10)는 **H1·CTA·브레드크럼에만**(코퍼스 앵커 `texas-holdem-rules-for-beginners` L471 · CTA `intl-blog-post-client.tsx` es · SERP 1·3위 이름).
  - 🔴 ICM은 제목에서 «Calculadora de poker» 뒤에 둬 앵커를 건다(«calculadora icm» 단독 = IMC). 본문·H2는 코퍼스 «calculadora de ICM».
  - SPR·BB·«regla del 4 y 2»·«jerarquía de manos»(390 = hand-rankings 소유)는 메타 금지(설명의 «jerarquía»는 도구 이름 나열).
- **Equity 탭** «Equity»(sub «Mano contra mano») · 결과 열 «Jugador / Mano / Gana / Empate / Equity» · 승자 «{p} gana con {hand}» · 무승부 «Bote dividido».
- **아웃츠 3스트리트** «Flop → river / Flop → turn / Turn → river»(스트리트 이름은 코퍼스가 원어).
- **용어**: limpear·open-limp(«nunca limpees» / «no hagas open-limp») · stack efectivo · comprometido · líder en fichas · acuerdo por ICM · chip chop · burbuja · en premios · set mining · par servido · órbita · coin flip / carrera · bote dividido · regla del 2 y 4.
- **quickRef H2** = «Calculadora de X: …»(EN «X calculator reference» 동형) — «tabla de probabilidades» 단독 표현은 H2에 안 쓴다(holdem-probability 소유).
- **FAQ 8 → 18**: EN 17 명제 + es 고유 1 = **«¿Se puede usar una calculadora de poker en la mesa?»**(PokerNews·888 FAQ 축 · 1차 출처 `docs/sources/tda-2024-rules-v1.txt` Rule 5-C·5-D · 온라인 약관·합법성은 안 다룬다). 옛 «¿Qué es el ICM en el póker?»(holdem-icm FAQ 1과 축어 동일)는 뺐다.
  - 형제 글 FAQ와 축어 충돌 회피: «¿Qué es la regla del 2 y 4?»(pot-odds·outs) → «¿Qué tan exacta es la regla del 2 y 4?» · «¿Qué son los pot odds y cómo se calculan?» → «¿Qué fórmula usa la calculadora de pot odds?» · «¿Cómo se calcula el ICM?»(icm) → «¿Cómo se usa la calculadora de ICM?».
- **ICM 딜 새 예시**(EN 동형 · 45/25/18/12 · $2,300) — 옛 예시(50/30/20 · $1,500 · 618/485/397)는 `lib/posts-es/holdem-icm.ts` «Acuerdo por ICM vs chip chop»과 표까지 동일(카니발).
- **딜러 렌즈 EN 정정 12항** 동반(사전 주석에 자리마다 표기) · 관련 글 6 → 8(holdem-icm · holdem-short-stack · holdem-implied-odds 편입, holdem-tournament 제외).

## 7. 값이 없어 쓰지 않은 것 (창작 금지)

| 항목 | 왜 |
|---|---|
| **Omaha 계산기**(자동완성 «calculadora de poker omaha»·«calculadora poker omaha»·«calculadora equity omaha» 5지역 + PAS 2쿼리) | 🟠 **미구현 수요** — FAQ «¿Sirve para Omaha?»는 «못 한다»가 답이라 수요를 못 채워 뺐다. PLO 에퀴티 탭은 후보(EN «poker odds calculator omaha» 자동완성도 있음) |
| calculadora de varianza · de EV · de rake(888 H2) | 미구현 — EN 뱅크 §1 variance(KD 3)·EV 후보와 같은 줄 |
| calculadora poker 5 cartas(PAS · 자동완성) | 5장 드로 의도 — 다른 게임 |
| simulador de poker(PAS) | 게임 의도(es-gto-solver §1 판정) |
| quien gana poker o full/escalera/color… | 족보 비교 = `holdem-hand-rankings` 소유 |
| equity/icm/spr «significado» | 정의형 = 각 블로그 소유 |
| chip chop ES 480 | 비포커 오염 의심 — 판정 안 함(메타 미사용) |

## 8. 다음 로케일 인계 (pt)

- es 교훈: **«calculator» 명사는 같아도 뒤 명사가 갈린다**(de poker 70~170 ↔ de probabilidades 10). 로케일마다 «calculadora/calculatrice/Rechner + X»의 X를 따로 재라.
- 🔴 **약어 오염을 자동완성으로 먼저 걸러라** — ICM↔IMC(스페인어·포르투갈어 BMI = IMC · pt도 동일할 가능성 높다) · «4 y 2» 의료.
- 라틴계 로케일은 **영문 «icm calculator»가 자국어보다 크다**(MX 140 vs 10) — 제목엔 «ICM»을 넣되 자국어 명사에 붙여 앵커.
- 경쟁 FAQ «계산기 사용 허용?» 축은 es·zh-hant 둘 다 있었다 → 답은 TDA 2024 Rule 5 규정 사실만(합법성 축 금지).
