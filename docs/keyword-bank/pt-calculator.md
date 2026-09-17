# pt 키워드 뱅크 — `/pt/calculator` (계산기 랜딩 · 2026-09-17)

> 실측 2026-09-17. 권역 판정 = **pt-BR**(`translation-terms-pt.md` 대상 = 브라질 · 코퍼스 숫자 표기 소수 콤마 1,637 : 점 0 · pt 태그 볼륨도 Brazil로 쟀다 `pt-tag-volumes.md`).
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location **2076 Brazil** 70시드 · 🔴 `language_code` 생략 — language는 볼륨을 안 나눈다) ·
> **구글 자동완성**(`suggestqueries.google.com` · `client=firefox` · `hl=pt-BR gl=BR` / 대조 `hl=pt-PT gl=PT` · 52시드 · 스크립트 `tmp/pt-calc-suggest.mjs` → `tmp/pt-calc-suggest.json`) ·
> DFS SERP `serp/google/organic/live/advanced`(mobile · language `pt` · Brazil · «calculadora poker» · «calculadora odds poker» · «calculadora icm poker») ·
> 상위 10페이지 구조 = 서브에이전트(sonnet) 2개가 Playwright DOM에서 title/H1~H3/table th/FAQ/위젯 라벨을 프로그램으로 추출(요약 금지 · §12-B · 원본 `tmp/pt-calc-extract-{a,b}.json`).
> 라쿠는 쓰지 않았다(DFS와 같은 Google Ads 원천). 질문검색은 ja 전용.
> EN 정본 = `en-calculator.md` · 선례 = `ja/zh/zh-hant/es-calculator.md`. 수치·표 행 개수는 EN과 동일(§13) — 이 파일은 «문안·형태소·제목» 근거만 담는다.

## 1. 볼륨 (월 · DFS Brazil · 2026-09-17)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **calculadora poker** | **390** | ✅ 머리어(무관사) — 제목 «Calculadora de … poker» 토큰 · 12개월 260~480 |
| **calculadora odds poker** | **260** | ✅ 제목 «Calculadora de odds de poker» · 자동완성 → «calculadora de pot odds poker» |
| **poker odds calculator**(영문) | **260** | ✅ 브라질도 영어로 친다 — 제목 «odds» |
| poker calculator(영문) | 210 | |
| **calculadora de poker** | **170** | ✅ 설명 첫 구절 «Calculadora de poker grátis» |
| icm poker · poker icm | 170 | 정의형 반 = `holdem-icm` · 제목 «ICM» |
| **calculadora de odds poker** | **110** | ✅ 제목과 거의 축어 |
| icm calculator(영문) | 110 | ✅ 제목 «ICM»(자국어 «calculadora icm» 10보다 11배 — es와 같은 결) |
| pot odds · spr poker | 90 · 90 | 탭·표 · SPR 제목 훅 금지(settled §1) |
| poker equity calculator(영문) | 70 | ✅ 제목 «equity» |
| simulador de poker | 70 | 게임 의도(es-gto-solver 판정과 동형) — 미채택 |
| calculadora probabilidade poker · de probabilidade poker | 40 · 30 | 🟠 H1·CTA 앵커 축(«Calculadora de probabilidades») |
| **calculadora de probabilidades poker** | **10** | 🟠 현행 H1·CTA 앵커 — **H1·CTA·브레드크럼에만** |
| equilab · flopzilla · pokerstove | 720 · 210 · 50 | 브랜드 — 미채택(equilab는 기업·연구소 오염 혼재) |
| sequencia poker · maos do poker · ranking de maos poker | 27,100 · 8,100 · 320 | 🔴 `holdem-hand-rankings` 소유 — 탭 라벨로만 |
| probabilidade(s) poker · odds poker | 210 · 210 | 🔴 `holdem-probability` 소유 · 정보형 |
| outs poker · pokerstove · chip chop · implied odds · pot odds calculator | 50 · 50 · 40 · 30 · 30 | 롱테일 — 본문·표·FAQ |
| calculadora poker online · equity poker · texas holdem calculator · equity calculator · porcentagem poker · poker hand calculator | 20~30 | |
| calculadora icm · calculadora icm poker · calculadora pot odds · calculadora de outs · aa vs kk · tabela push fold · calculadora poker gratis · … omaha · deal icm · m ratio poker · bolha poker · holdem calculator · push fold chart · icm poker calculator | 10 | 롱테일 바닥값 |
| **null**: regra do 4 e 2 · regra do 2 e 4 · calculadora de chances poker · acordo icm · tabela de probabilidades poker · chance de ganhar poker · qual mao ganha poker · quem ganha poker · calculadora de pot odds poker · tabela de odds poker | | 근거로 쓰지 마라(null ≠ 수요 없음) |

## 2. 자동완성 (hl=pt-BR · gl=BR — PT는 대조용 차이만)

### 살아 있는 축
| 시드 | 확장(BR) | 대응 |
|---|---|---|
| calculadora de poker | online · texas holdem · **odds** · gratis · **equidade** poker · variancia · **icm** poker · probabilidade · **outs** | 제목·설명 · «equidade» = hero.lead 병기 1회(코퍼스 0) |
| calculadora poker | online · odds · **omaha** · gratis · 5 cartas · download · omaha 5 cartas · pokerstars · **pre flop** | 설명 «grátis» · Equity 탭(pré-flop) · Omaha = §7 |
| calculadora odds poker | omaha · **calculadora de pot odds poker** | 팟오즈 탭 |
| calculadora de equity | de equity poker · online · (home equity 오염) · **equity preflop** · equity omaha | Equity 탭 |
| icm poker | significado · **calculator** · calculator free · trainer · software · online · **calculadora** · meaning · **formula** | 제목 «ICM» · FAQ 10 |
| icm calculator | 🔴 imc calculator · imc calculadora · (BMI) · online · fórmula · hrc · icmizer · poker | «ICM»은 포커 앵커 필수 |
| outs poker | calculator · meaning · chart · **calcular outs poker** · 2 outs · 4 outs | 아웃츠 탭·3표 |
| pot odds poker | **formula** · significado · calculator · chart · trainer · table | FAQ 6 «Que fórmula a calculadora de pot odds usa?» |
| implied odds | poker · calculator · formula · (betting 오염) | 팟오즈 탭 토글 |
| probabilidade poker | texas holdem · maos · **calculadora** · tabela · quadra · app · cartas · flush · sequencia | 정보형 = holdem-probability |
| aa vs kk | odds · preflop odds · **equity** · vs qq odds calculator · preflop · … | quickRef 1표 · FAQ 2 |
| equity poker | calculator · app · meaning · significado · hands · formula · online · preflop · chart | «significado» = holdem-equity |
| spr poker | significado · formula · meaning · … · calculator | 탭·5표 |
| push fold | charts · poker · trainer · chart 10bb · calculator | push/fold 탭 |
| chip chop poker | **chip chop poker calculator** · survivor | ICM deal H2 · chop 열 |
| deal icm | **deal icm poker** · (imc ideal · vi 오염) · icm deal meaning · icmizer deal | ICM deal H2 |
| m ratio poker | **m ratio calculator poker** | M 탭 |
| como calcular pot odds / outs | … poker · rapidamente | 정보형 = holdem-pot-odds / holdem-outs |
| poker odds calculator | omaha 5 · pro · pokerstars · app · omaha · online · preflop · texas holdem | |
| porcentagem poker | calculadora · maos · tabela | |
| calculadora texas holdem | de odds texas holdem · de probabilidades poker texas holdem | |

### 🔴 오염·사망 시드
- **«calculadora icm» → ICMS(세금) 8 + IMC 1** · **«acordo icm» → 10개 전부 ICMS** · **«como calcular icm» → 전부 ICMS/IMC** · «icm calculator» → imc 3.
  → 브라질에선 ICM 약어가 **세금(ICMS)**과 **BMI(IMC)** 둘에 동시에 덮인다(es는 IMC만). ICM은 늘 «de ICM»·«ICM do poker»·«ICM deal»로 앵커, **«acordo»는 쓰지 않는다**(코퍼스도 «ICM deal» 13 · «deal por ICM» 0).
- **«regra do 4 e 2» → 의료(regra 4-2-1 · 망막병증)** → 코퍼스 «regra do 2 e 4»(19).
- «ak vs» → 소총(AK vs AR/M4) 오염 · «equilab» → 기업·연구소 오염.
- 죽음: «calculadora de probabilidade(s) poker»(확장 0) · «calculadora equity poker» · «calculadora icm poker» · «chance de ganhar poker» · «qual mão ganha no poker» · «par de ases contra reis» · «regra do 2 e 4» · «divisão de premiação poker» · «pode usar calculadora no poker» · «calculadora poker 888».

## 3. SERP (DFS 모바일 · pt · Brazil · 2026-09-17)

| 쿼리 | 1~10 | 특징 |
|---|---|---|
| calculadora poker | **br.pokernews** «Calculadora de Probabilidades de Poker - Calculadora de Odds» · cardmates.com.br «Calculadora online de probabilidades no pôquer» · App Store · **gipsyteam.com.br** «Calculadora de odds de poker» · cardplayer(EN) · 앱 팩 3 · cienciapoker «Calculadora de Odd's» · 888poker.**es**(스페인어) · YouTube · pokerlistings.**es**(스페인어) | 🟢 **1페이지 10자리 중 4자리가 영어·스페인어** — 포르투갈어 도구 페이지가 얇다. 11~ calcbe pt-br · natural8(EN) · thesocialpoker · omnicalculator(EN) · math4all(es) · ggpoker pt-br 표 · pokerstars learn BR |
| calculadora odds poker | **gipsyteam.com.br** · cardmates · **pt.pokernews**(포르투갈판) · 앱 팩 · pokerstars learn BR · (UFRJ 도메인 스팸) · cienciapoker · App Store · **AI Overview** · 888poker.es | PAS «Calculadora equidade poker» · «Tabela de equidade poker» · «Tabela de outs poker» |
| calculadora icm poker | icmizer pt «Calculadora de ICM de pôquer»(위젯 229단어) · **gipsyteam.com.br «Calculadora de ICM»** · holdemresources(EN) · (UFRJ 스팸) · 앱 · mttdb(EN) · (ibama.gov.br 스팸) · gipsyteam.com(EN) · App Store · Amazon | 🟢 **포르투갈어 ICM 도구는 2곳뿐**(icmizer 위젯 · gipsyteam) · 나머지 영어·정부 도메인 스팸. PAS «ICM deal calculator» · «Icm poker chop» · «Nash icm calculator» |

**PAS(Outras pessoas pesquisaram) 합집합**: calculadora poker 5 cartas · gratis · probabilidade poker · omaha · download · poker probabilidades tabela · simulador de poker · calculadora de outs poker · odds poker · **equidade poker** · tabela de outs poker · **tabela de equidade poker** · calculadora equidade poker · porcentagem das maos do poker · icm calculator · ICM poker calculator app · icm poker formula · free icm calculator · ICM poker chart · icm poker tournament · nash icm calculator · icm poker chop · **ICM deal calculator** · icmizer · icm range calculator.

## 4. 상위 페이지 구조 (원문 추출 · `tmp/pt-calc-extract-{a,b}.json`)

| 페이지 | 단어 | 구조 |
|---|---:|---|
| br.pokernews «Calculadora de Probabilidades de Poker Texas Hold'em do PokerNews» | 1,758 | H2 O Que é a Calculadora de Odds de Poker? / O Que São Odds no Poker? / FAQ · H3 Por Que Usar / Como Usar / O Que São Outs · **FAQ 13**(«O que são odds de 2 para 1 no poker?» · «Como calcular rapidamente as odds no poker?» · «O que são pot odds…?» · «O que são odds implícitas…?» · «Precisa ser bom em matemática para vencer no poker?» · «As odds importam no poker?» · «Como Usar a Calculadora de Odds de Poker?» · «Como Calcular Outs no Poker?» …) · 표 0 · Monte Carlo/exato 언급 0 · 사이트 광고 H2(PokerStars/888/partypoker) |
| cardmates.com.br | 1,600 | H1 Calculadora online de probabilidades no pôquer · H2 O que é…? / Como usar… / Prós e contras · FAQ 1 · 표 0 |
| gipsyteam.com.br equity | 1,335 | H 없음(H3 3 = 사이드 링크) · 위젯(Hold'em/Short Deck/Omaha 4·5·6) · 표 0 |
| cienciapoker «Calculadora de Odd's» | 304 | 위젯만(Texas/Omaha/Short Deck) · 뉴스 H3 |
| calcbe pt-br «Probabilidades de Poker» | 648 | H2 Visão geral / Exemplos / Perguntas frequentes / Como é calculado · 표 1(Mão/Quantidade/Probabilidade/1 em N · 9행) · FAQ 4(«Qual é a taxa de acerto de um flush draw com 9 outs?» · «Qual é a diferença entre distribuição de mãos e equity?») · **Monte Carlo·exato 언급 있음**(유일) · 위젯 «Cartas por vir 1 (turn or river) 2 (turn & river)» |
| icmizer pt | 229 | 위젯만 · H 0 |
| gipsyteam.com.br ICM | 1,422 | H3만 · FAQ 4(«O que é uma calculadora de ICM no poker?» · «Por que o ICM no poker é importante?» · «Onde baixar…?» · «Como usar uma calculadora de ICM de poker?») · «acordo»·«mesa final»·«equidade» 사용 |
| pt.pokernews(포르투갈판) | 2,404 | H1 Calculadora de Probabilidades de Poker Texas Hold'em · H2 Sobre… / Odds de Poker e Pot Odds / O que são Outs / O que são Implied Odds / FAQs · 표 1(Draw/Outs 6행) · FAQ 8(«A Calculadora de Odds é precisa?» · «Iniciantes podem usar a Calculadora de Odds?») · pt-PT 문체(«Mantém-te», «SUBSCREVE») |
| ggpoker pt-br 표 | — | 🔴 403(WAF) — 추출 불가 |
| pokerstars learn BR | 753 | 본문 H 미렌더(쿠키 배너만) — 구조 판정 불가 |

**공통형 = 도구 + (표 0~1) + FAQ**. 브라질 SERP는 es보다 얇다 — 표가 있는 곳은 pt.pokernews(6행)·calcbe(9행)뿐, **스트리트 3열 아웃츠 표·수트 가중 매치업 표·ICM deal vs chip chop 병렬 열은 0곳**.
pt 차별점 = 도구 9 + 표 6 + FAQ 18 + 열거/Monte Carlo 명시(calcbe만 언급) + ICM chip chop 열 + TDA 2024 Rule 5 FAQ.

## 5. GSC (`/pt/calculator` · 90일 · 2026-06-16~09-14)

노출 0 · 클릭 0 · 쿼리 0 — 09-17 신설. 다음 28일 창(10/15경)에서 쿼리 단위로 첫 판독(«calculadora poker»·«calculadora odds poker»·«icm calculator» 축).

## 6. 채택 (09-17)

- **제목** `Calculadora de odds de poker — equity, ICM e pot odds`(53자 · 브랜드 포함 68) · **설명** «Calculadora de poker grátis: equity mão contra mão, pot odds, odds implícitas, outs, ranking de mãos, SPR, M, ICM deal e chip chop. 9 ferramentas, sem cadastro.»
  - 앞머리 = §1 머리어 3개(calculadora poker 390 · calculadora odds poker 260 · calculadora de odds poker 110)를 한 구절에. 🔴 옛 앞머리 «Calculadora de probabilidades de poker»(10~40)는 **H1·CTA·브레드크럼에만**(CTA `intl-blog-post-client.tsx` pt · SERP 1위 PokerNews BR 이름 = 동의어군).
  - 🔴 ICM은 제목에서 «Calculadora de odds de poker» 뒤(«calculadora icm» 단독 = ICMS/IMC). 본문·H2는 코퍼스 «calculadora de ICM»(holdem-bubble·holdem-icm·holdem-short-stack 5곳).
  - SPR·BB·«regra do 4 e 2»·«ranking de mãos»(설명의 도구 이름 나열 제외)는 메타 금지.
- **«equidade»**: 자동완성·PAS에만 있고 코퍼스 0 → hero.lead에 «a equity, ou equidade, de cada uma»로 1회 병기(용어는 equity 유지).
- **Equity 탭** «Equity»(sub «Mão contra mão») · 결과 열 «Jogador / Mão / Vitória / Empate / Equity» · 승자 «{p} vence com {hand}» · 무승부 «Pote dividido».
- **아웃츠 3스트리트** «Flop → river / Flop → turn / Turn → river»(코퍼스 원어).
- **용어**: dar limp·open-limp(«nunca dê limp» / «não dê open-limp») · pagar um aumento · stack efetivo · comprometido · chip leader · ICM deal · chip chop · bolha · final table · equity de premiação · set mining · par na mão · órbita · coin flip · pote dividido · regra do 2 e 4 · odds implícitas · flush draw · overcards · azarão · board seco · posição tardia/inicial.
- **숫자** = 브라질식(`numberLocale: "pt-BR"` · 81,9% · 1.712.304 · $1.035 · 2,5 : 1). 🔴 `check:calc-parity`는 이번 회차에 소수 콤마 로케일 정규화(`numL`)를 추가해 EN과 대조한다(심은 오류 2/2 검출 셀프테스트).
- **quickRef H2** = «Calculadora de X: …» — «Tabela de …» 단독 H2는 형제 글(holdem-probability·holdem-outs·holdem-pot-odds) 소유.
- **FAQ 8 → 18**: EN 17 명제 + pt 고유 1 = **«Pode usar calculadora de poker na mesa?»**(형제 글 holdem-pot-odds FAQ가 «na mesa você não pode usar uma»라고만 적음 · es·zh-hant 선례 · 1차 출처 `docs/sources/tda-2024-rules-v1.txt` Rule 5-A·5-C·5-D · 합법성 축 금지). 옛 «O que é ICM no poker?»(holdem-icm FAQ 1과 축어 동일)는 뺐다.
  - 형제 글 FAQ와 충돌 회피: «O que é a regra do 2 e 4?»(pot-odds·outs·probability) → «Quão precisa é a regra do 2 e 4?» · «Quais são as odds de acertar um flush até o river?»(probability) → «Qual a chance de um flush draw completar em cada street?» · «Como o ICM é calculado?» → «Como usar a calculadora de ICM?».
- **ICM deal 새 예시**(EN 동형 · 45/25/18/12 · $2.300) — 옛 예시(50/30/20 · $1.500 · 618/485/397)는 `lib/posts-pt/holdem-icm.ts` «ICM deal vs chip chop» 절과 표까지 동일(카니발).
- **딜러 렌즈 EN 정정 12항** 동반 + 브리프 §5 회灌 4건(orHigher «acima disso» · ×2 오차 서술 · 가중 평균 · «pagar um aumento» 명시) · 관련 글 6 → 8(holdem-icm · holdem-short-stack · holdem-implied-odds 편입, holdem-tournament 제외).

## 7. 값이 없어 쓰지 않은 것 (창작 금지)

| 항목 | 왜 |
|---|---|
| **Omaha 계산기**(자동완성 «calculadora poker omaha»·«omaha 5 cartas»·«calculadora odds poker omaha» · PAS) | 🟠 **미구현 수요**(es와 동일) — FAQ에 «못 한다»로 넣지 않는다. gipsyteam·cienciapoker 위젯은 Omaha 4/5/6 지원 |
| calculadora de variância(자동완성) | 미구현 — EN 뱅크 variance 후보와 같은 줄 |
| calculadora poker 5 cartas · download(PAS·자동완성) | 5장 드로 / 앱 의도 |
| simulador de poker 70 | 게임 의도 |
| equity/icm/spr/pot odds «significado» | 정의형 = 각 블로그 소유 |
| «tabela de equidade poker»·«tabela de outs poker»(PAS) | quickRef 표가 부분 대응하지만 H2 «Tabela de …»는 형제 글 소유 — H2에 안 씀 |
| 경쟁 FAQ «O que são odds de 2 para 1?» · «Precisa ser bom em matemática?» | 정의형·에세이형 — holdem-pot-odds(«Como converter pot odds de razão para porcentagem?»)와 의도 충돌 |

## 8. 다음 로케일 인계 (de)

- pt 교훈: **약어 오염은 로케일마다 대상이 다르다** — es는 IMC(BMI)만, pt는 **ICMS(세금)까지** 겹쳐 «acordo icm»이 10/10 세금이었다. de는 «ICM Rechner»가 무엇에 덮이는지 자동완성으로 먼저.
- 🔴 **소수 콤마 로케일(pt·de·fr·id)은 `check:calc-parity`가 이제 `numL`로 정규화한다** — 사전의 `numberLocale`이 판정 기준. 코퍼스 표기를 먼저 세고(pt 1,637 : 0) numberLocale을 정하라.
- **SERP가 얇은 로케일**(pt 1페이지 4/10이 타 언어)은 표 6개 자체가 차별점 — 표 H2를 «Tabela de …»로 올리고 싶은 유혹은 형제 글 소유라 참는다.
- 영문 «poker odds calculator»가 자국어 머리어와 같은 체급(pt 260 = calculadora odds poker 260)일 수 있다 — 제목엔 자국어로 쓰되 «odds»를 넣어 영문 토큰을 공유.
