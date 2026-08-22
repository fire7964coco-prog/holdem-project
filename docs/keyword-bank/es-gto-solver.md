# es 솔버 랜딩 키워드 뱅크 — `/es/solver`

> 2026-08-22 실측. 도구 = **라쿠 `search-volume-history`**(볼륨·시계열) + **DataForSEO Labs**(서제스트·SD) +
> **DataForSEO SERP API**(상위 10 + PAA). lowfruits는 그날 서버 장애로 못 썼다.
> 🔴 **이 파일의 숫자는 «지역»별이지 «언어»별이 아니다** — 근거는 `docs/rakko-playbook.md` 운영규칙 ⑤.
> 스페인어 문자열의 볼륨만 해석 가능하고, 영어 문자열(`gto poker` 등)의 볼륨은 그 지역 **전체**다.

---

## 0. 한 줄 결론

**조준 1순위는 `rangos poker`(ES 480 · MX 170 · SD 0~1)이고, 랜딩은 «포스트플랍 레인지»로 가른다.**
훅은 「무료」가 아니라 **「설명하는 글은 많은데 지금 바로 돌릴 수 있는 것이 없다」**이다.

---

## 1. 🔴 착수 전 반드시 알 것 넷

### ① 「GTO」를 단독으로 쓰지 마라 — 멕시코에서 **과나후아토 주 코드**다
lowfruits export(`gto_poker____1787383328.xlsx`)가 물어온 것: `ubicación de guanajuato` ·
`historia de guanajuato` · `cual es la capital de guanajuato` · `que es gto mexico` ·
`que es gto policia` · `¿qué es un gto carro`(폰티악 GTO) · `¿qué es gto anime`(ja에서도 걸린 드라마).
→ **제목·H1·H2에서 `GTO`는 반드시 `poker`와 붙여 쓴다.** `gto poker` / `poker gto`는 안전하다.
(ja의 「ジーティーオー = 드라마」 함정과 같은 계열인데 **3중**이라 더 심하다.)

### ② `simulador de poker`(ES 140 · MX 70)는 **의도가 다르다 — 조준 금지**
SERP 실측(google.es) top-10: misjuegos · minijuegos · juegos.elpais.com · reddit · playpager ·
zyngapoker · Google Play · **math4all.es(계산기)** · Steam · unmasked.poker
→ **「무료로 노는 포커 게임」**이다. 솔버가 아니다. 볼륨만 보고 넣으면 이탈률만 올린다.
(메모리 `keyword-volume-order-of-magnitude-trap`의 전형)

### ③ 어순이 난이도를 가른다 — **`solver poker`(SD 0)** 대 `poker solver`(SD 46)
뜻은 같은데 SD가 0 대 46이다. **본문·H2 표기는 `solver poker` 쪽으로 통일한다.**
`solver de poker`도 SD 46이다. 🪶 같은 현상이 EN ①의 `range advantage poker`(30) 대
`poker range advantage`(10)에서도 있었다 — 어순 하나가 자릿수를 바꾼다.

### ④ 볼륨은 지역만 따른다 — **US 스페인어는 측정 불가**
라쿠 US(Eng) vs US(Spa) **12/12 동일**, DataForSEO **6/6 동일**, 두 벤더 값도 **6/6 일치**.
→ 스페인어 문자열로 재면 US는 **10~20**뿐이다. **`/es-us/` 분할은 파이가 없어 성립하지 않는다.**
⚠ 「US 수요 0」이 아니라 **「구글이 그 축을 공개하지 않는다 + US SERP에 그 층이 없다」**가 정확한 서술이다.
   US SERP(WebSearch·US 지오)에서 스페인어 GTO 쿼리 상위는 **전부 스페인 사이트 + 앱 + 영어 글로벌 제품**이었고
   **미국 히스패닉 겨냥 스페인어 포커 전략 사이트는 0곳**이었다.

---

## 2. 볼륨표 — 스페인어 문자열 (해석 가능한 축)

| 키워드 | **ES** | **MX** | US | SD | 소유자 |
|---|---:|---:|---:|---:|---|
| **`rangos poker` / `poker rangos` / `rangos del poker`** | **480** | **170** | 20 | **0~1** | 🟢 없음 |
| **`tablas preflop`** | **210** | 40 | 10 | **0** | 🔴 프리플랍 → `holdem-starting-hands-chart` |
| **`calculadora de poker`** | **170** | 70 | 30 | **1** | 🟢 없음 (⚠ `/es/calculator` 미존재) |
| ~~`simulador de poker`~~ | 140 | 70 | 10 | 1 | ❌ **의도 다름(게임) — 제외** |
| `tablas preflop poker` | 110 | 20 | — | 0 | 🔴 프리플랍 |
| **`estrategia poker` / `poker estrategia` / `estrategia del poker`** | **110** | 40 | — | **0** | 🔴 `es/holdem-strategy`가 태그 보유 |
| `rangos de poker` | 90 | — | 20 | 0 | 🟢 없음 |
| `rangos de manos poker` | 50 | — | — | — | 🟢 없음 |
| `estrategia de poker` | 50 | — | — | 0 | 🔴 `holdem-strategy` |
| `tablas preflop zeros` / `~ zeros pdf` | 50 / 40 | 10 / 10 | — | 0 | 경쟁사 브랜드(zerospoker) |
| `tabla de rangos poker` | 30 | 20 | 10 | **42** | 🔴 프리플랍 + SD 높음 |
| `tablas preflop torneos pdf` · `~ spin and go` | 30 · 30 | — | — | — · 0 | 프리플랍 |
| `que es gto en poker` | 20 | **30** | 10 | — | 🟢 없음 |
| **`solver poker gratis`** | **20** | 10 | — | — | 🟢 없음 |
| `calculadora de probabilidades poker` | 20 | 10 | — | **8** | 🟢 없음 |
| `calculadora de odds poker` | 20 | 10 | — | **9** | 🟢 없음 |
| `rangos en el poker` | 10 | 20 | — | 0 | 🟢 없음 |
| `tablas preflop educapoker` | 20 | — | — | — | 경쟁사 브랜드 |
| `rangos de apertura poker` · `lectura de rangos poker` · `rangos poker texas holdem` | 10 | 10 | — | — | 🟢 없음 |
| `tablas gto poker` · `gto poker gratis` · `estrategia gto poker` · `juego gto poker` | 10 | 10 | 10 | — | 🟢 없음 |

### 영어 문자열 (스페인어권에서도 그대로 친다)

| 키워드 | **ES** | **MX** | US | SD |
|---|---:|---:|---:|---:|
| `gto poker` / `poker gto` | 210 | **260** | 3,600 | **6~7** |
| `gto in poker` | 210 | — | — | 10 |
| **`solver poker`** | **70** | 30 | 140 | **0** |
| `poker solver` | 50 | 20 | 1,600 | **46** |
| `gto wizard poker` | 30 | — | — | — |
| `gto poker solver` · `poker gto solver free` · `solver poker free` · `free poker solver` | 10 | 10 | — | — |
| `gto wizard`(경쟁 브랜드 · 참고) | 2,900 | 1,000 | 12,100 | — |
| `piosolver`(경쟁 브랜드 · 참고) | 140 | 40 | 590 | — |

🪶 **MX가 ES보다 큰 유일한 축이 `gto poker` 260 대 210**이다. GTO 표기는 멕시코가 더 쓴다.
🪶 `educapoker` ES **5,400**(MX 210) · `formapoker` ES 480 · `preflop vision` ES 390 —
   **스페인은 포커 교육 시장이 브랜드로 굳어 있고 멕시코는 비어 있다.**

---

## 3. SERP 실측 (google.es · DataForSEO SERP API · 2026-08-22)

### 🟢 `rangos poker` — **top-10이 전부 «프리플랍»이다. 포스트플랍은 0개.**
`es.pokernews.com`(10 Tablas de Rangos de Póker) · `freebetrange.com` · `pokerstrategy.com` ·
`youtube.com` · `educapoker.com` · `es.wikipedia.org` · `pokersciences.com`(Spin&Go) ·
`reddit.com` · `formapoker.com` · `pokerstars.es`
⚠ PAA가 **완전히 딴소리**다(`¿Qué es mejor, full o color?`·`¿Qué vale más, la JO o la K?`·`¿Qué es el full?`
= 족보 질문). **구글이 이 쿼리의 의도를 아직 못 잡고 있다** → 우리가 «포스트플랍 레인지»로 정의하러 들어갈 여지.

### 🟢🟢 `solver poker` — **«돌릴 수 있는» 무료 솔버가 top-10에 0개다**
| 순위 | 도메인 | 성격 |
|---:|---|---|
| 1 | `gtowizard.com` | 유료 구독 |
| 2 | `play.google.com` (Poker Solver+) | 유료 앱 |
| 3 | `www.pocketsolver.com` | 유료 앱 |
| 4 | **`educapoker.com`** | **TexasSolver(무료 오픈소스)를 «소개하는 글»** |
| 5 | `www.casinobarcelona.es` | 「솔버란 무엇인가」 설명 글 |
| 6 | `solvers.poker` | 리뷰 글 |
| 7 | `optimuspoker.com` | AI+솔버 플랫폼 (온라인 표방 — ⚠ 착수 전 실물 확인) |
| 8 | `apps.apple.com` | 앱 |
| 9 | `www.888poker.es` | 설명 글 |
| 10 | `piosolver.com` | 유료 설치형 |

**PAA**: `¿Cuánto cuesta GTO Wizard?` · `¿Qué son los Solvers?` ·
`¿Cuál es la mejor aplicación para jugar poker?` · `¿Dónde puedo encontrar clases de poker gratis?`
→ 🔴 **`¿Cuánto cuesta GTO Wizard?`가 PAA에 있다 = 가격 불만이 검색어로 나와 있다.**

---

## 3-A. 🟢 솔버 본체는 **이미 스페인어를 완역 지원한다** (2026-08-22 라이브 실측)

`solver.holdemmaster.com/?lang=es` → `<html lang="es">` · 완역된 UI.
**언어 셀렉터 = `ko · en · ja · es · pt · de · zh` 7개** — **pt·de 랜딩도 UI가 이미 준비돼 있다.**

**앱 es 축어** (⚠ ja 교훈 ⑤ — **«보드»에만 쓰고 «해설»에는 쓰지 마라.** 판정은 `docs/gto-solver-series-spec.md` §4-B):
- `<title>`: `HoldemMaster GTO Solver — Solver GTO gratis en el navegador`
- `desc`: `Solver GTO gratis que funciona directamente en tu navegador, sin instalar nada. Calcula la estrategia postflop de Texas Hold'em por rango, board y tamaño de apuesta.`
- H1: **`Estrategia GTO, directo en tu navegador.`**
- 서브: **`Nada que instalar, nada que pagar.`**
- 특징 4칸: **`Gratis — Todas las funciones, sin límites de uso`** · `Estudio offline` ·
  `Cálculo rápido — Multihilo, velocidad de solver de escritorio` · `Entrenador GTO`
- 네비: `Spots de estudio` · `Entrenador GTO` · **`Tablas preflop`** · `Equity`

🔴 **앱 es 문구 검증 대상 1건**: `Entrenador GTO — recibe tu nota por **pérdida de EV**`.
앱은 2026-08-15에 채점을 **팟 대비 비율**로 바꿨다(핸드오프 「되돌리지 마라」 표). **es·pt·de·zh 앱 문구가
낡은 주장을 들고 있을 수 있다** — ja에서 정확히 이 유형으로 사실오류 3건이 나왔다. **솔버 쪽에 확인 요청.**

---

## 4. 훅 판정 — 「무료」는 쓸 수 없다

영어권 SERP에 무료 브라우저 솔버가 이미 여럿이다:
[WASM Postflop](https://wasm-postflop.pages.dev/)(원조 · **2023-10 개발 중단** · AGPL-3.0+) ·
`pokergtosolver.com` · `PokerMoose`(플랍까지 무료, 이후 $25/월) · `Poker Academy` · `Lucid GTO`(무료 티어)
→ ja 회차의 「無料」와 같은 상황이다. **남들이 다 달고 있는 말은 훅이 못 된다.**

### 🔴 `optimuspoker.com`(7위) 실측 — **반례가 아니다. 오히려 훅을 선명하게 한다**
Playwright 라이브(2026-08-22). 「Web-Based GTO Solver」를 표방하는 게 맞는데 조건이 다르다:

| | OptimusPoker | **우리** |
|---|---|---|
| 무료 티어 | **`STARTER · FREE Forever · SOLVER 1 Solution / Day`** | **무제한** (`sin límites de uso`) |
| 등록 | **필수** — 모든 CTA가 `Register` | **없음** |
| 과금 | 크레딧제 — 축어: *"lock a flop in a single-raised pot, that click **makes use of one credit**"* | 없음 |
| 유료 | `$14.90` / `$23` / `$29.08` per month | — |

→ 「돌아가는 무료 솔버가 없다」는 **부정확했다.** 정확한 훅은 **「등록도 없고, 하루 제한도 없고, 크레딧도 없다」**이다.
   이 셋이 `solver poker` SERP top-10 **전부와** 갈린다.

### ✅ 확정된 훅 (우선순위 순)
1. **「등록 없음 · 사용 제한 없음 · 크레딧 없음」** — `sin registrarte, sin límites`.
   경쟁자 전부가 구독·등록·일일제한 중 하나 이상을 건다. **앱 축어 `Todas las funciones, sin límites de uso`와 일치.**
2. **「설치가 없다」** — `nada que instalar`. SERP 1·3·10위가 설치형/앱이다.
3. **「레이크까지 넣고 푼다」** — 무료 경쟁자 중 레이크·레이크캡을 다루는 곳이 SERP 상위에 없다.
4. **「해설 13편이 붙어 있다」** — **우리만 갖고 있다.** 솔버는 흔한데 «왜 이렇게 푸는지»가 붙은 솔버는 드물다.
5. **「오픈소스 · 소스 공개」** — 🔴 **본문·FAQ에만 쓴다. 제목·H1에는 쓰지 않는다**(2026-08-22 사장님 판정).
   근거: `educapoker.com`이 「TexasSolver. Un GTO solver **gratuito y OpenSource**」 글로 `solver poker`
   **4위**다 → «무료 오픈소스 솔버»는 스페인어권에서 **실제로 검색되는 개념**이다. GTO Wizard·OptimusPoker의
   블랙박스와 갈리는 신뢰 신호이자 **AGPL-3.0+ 의무 충족**이기도 하다(솔버는 WASM Postflop 파생 —
   그래서 도메인을 분리하고 소스를 공개했다).

⚠ **가격 비교를 본문에 쓰지 마라** — `app/solver/solver-client.tsx`의 `COMPARE` 주석이
「가격·무료 티어 수치는 넣지 않는다(§12-B)」로 못박아 뒀다. PAA에 `¿Cuánto cuesta GTO Wizard?`가
있어도 **우리가 그 금액을 적지는 않는다.** 「구독이냐 아니냐」라는 **구조**로만 대비시킨다.

---

## 5. 카니발 — 자사 es 60편 전수 대조

| 축 | 소유자 | 랜딩의 처리 |
|---|---|---|
| `gto preflop charts` | 🔴 `es/holdem-starting-hands-chart`(태그) | **프리플랍 표는 그 글의 것.** 랜딩은 **포스트플랍**으로 가른다 |
| `estrategia poker` 외 3형 | 🔴 `es/holdem-strategy`(seoTitle + 태그 4개) | **가져가지 마라.** 랜딩은 `estrategia gto poker`(10)만 |
| `rango de 3-bet` · `rango lineal vs polarizado` | `es/holdem-3bet` | 프리플랍 3벳 하위축 — 침범 금지 |
| `estrategia burbuja/icm/posicion/short stack` | 각 클러스터 글 | 무관 |
| **`rangos poker` 일반형** | 🟢 **소유자 0** | **랜딩이 가져간다** (포스트플랍 한정) |
| **`solver poker` · `gto poker` · `postflop` · `calculadora`** | 🟢 **소유자 0** | 랜딩이 가져간다 |

🪶 **탐지 오탐 하나** — `grep -i solver`가 es 20편을 잡았는데 **14건이 스페인어 `resolver`**였다.
단어경계로 다시 세면 실제 `solver`는 **4편**(`card-counting`·`continuation-bet`·`position-play`·
`starting-hands-chart`)이고 전부 **본문 용어**(`los solvers`·`PioSOLVER`)다. 태그 소유는 0이다.
→ 🟢 **es 코퍼스는 이미 「solver」를 본문 용어로 쓰고 있다.** ja의 「ソルバー」(죽은 표기)와 다른 상황이고,
   `solver poker` SD 0이 이를 뒷받침한다. **본문에서 자유롭게 쓸 수 있다.**

---

## 6. 배치안 — `/es/solver`

### 조준 (1차 / 2차)
- **1차**: `rangos poker` (480/170 · SD 0~1) — **포스트플랍 한정**
- **1차**: `solver poker` (70/30 · **SD 0**) · `solver poker gratis` (20/10)
- **2차**: `gto poker` / `poker gto` (210/**260** · SD 6~7) · `que es gto en poker` (20/**30**)
- **2차**: `rangos de poker`(90) · `rangos de manos poker`(50) · `rangos en el poker`(10/20) ·
  `rangos de apertura poker` · `lectura de rangos poker` · `rangos poker texas holdem`
- **흡수(FAQ)**: `tablas gto poker` · `gto poker gratis` · `estrategia gto poker` · `juego gto poker` ·
  `poker gto solver free` · `solver poker free` · `free poker solver`
- **제외**: `simulador de poker`(의도=게임) · `tablas preflop` 계열 전부(프리플랍=다른 글) ·
  `estrategia poker` 일반형(`holdem-strategy` 소유) · `poker solver`/`solver de poker`(SD 46)

### 제목·설명 초안 (§17 공식 = 훅 — 키워드 2~3개)
- `seoTitle` 후보 A: **`Los rangos que nadie te enseña — solver poker postflop gratis`**
- `seoTitle` 후보 B: **`Sabes tu rango preflop, ¿y en el flop? — rangos poker y solver GTO`**
  (⚠ **`tablas preflop`은 제목에 넣지 않는다** — 그 축은 `holdem-starting-hands-chart`의 것으로 판정됐다.
   B는 「프리플랍은 알지만」이라는 **상태 서술**로만 대비시킨다)
- `desc`: 「¿Sabes tu rango preflop pero te pierdes en el flop? Rangos poker postflop con un solver
  que corre en tu navegador — sin instalar, sin registrarte, sin límites. N minutos.」
- ⚠ **`GTO`는 반드시 `poker`/`solver`와 붙여** 쓴다(§1-① 과나후아토). ⚠ **`OpenSource`는 제목 금지**(§4-5).

### H2 골격 (질문형 70% · 각 H2 직후 40~75단어 직답 · `> **La respuesta corta**` 블록)
1. `¿Qué es un solver poker y qué hace realmente?` → `solver poker` · `que es gto en poker`
2. `¿Por qué tus rangos se rompen después del flop?` → **`rangos poker` 본진**
3. `¿Cómo se leen los rangos en el poker postflop?` → `lectura de rangos poker` · `rangos en el poker`
4. `¿Hace falta instalarlo o registrarse?` → **훅 1+2** (`sin registrarte, sin límites, nada que instalar`)
5. `¿El rake cambia la solución?` → **훅 3** (경쟁자 공백)
6. `¿Solver gratis o de pago: qué cambia de verdad?` → `solver poker gratis`
   ⚠ **금액을 쓰지 않는다.** 「구독이냐 · 하루 몇 번이냐 · 크레딧이냐」라는 **구조**로만 대비시킨다.
   여기에 **훅 5(오픈소스)를 한 문장** 넣는다 — 「계산이 네 기기에서 돌고, 코드가 공개돼 있다」
7. `¿Cómo practicar lo que dice el solver?` → 트레이너 + 해설 13편 (**훅 4**)

### FAQ (PAA 실측에서 그대로)
- `¿Qué son los solvers?` (PAA 축어)
- `¿Cuál es la mejor aplicación para jugar poker?` (PAA 축어 — 도구 vs 플레이 구분으로 답한다)
- `¿Dónde puedo encontrar clases de poker gratis?` (PAA 축어 → 해설 13편으로 흡수)
- ⚠ `¿Cuánto cuesta GTO Wizard?`는 **PAA에 있어도 쓰지 않는다**(§12-B 가격 금지 · COMPARE 주석)

### 내부링크 (⚠ `app/es/`는 `blog`·`tournaments` 둘뿐 — 도구 링크는 전부 404다)
EN 랜딩의 `hand-chart`·`calculator`·`win-rate-quiz` 자리를 **es 블로그 글로 갈아 끼운다**:
- **프리플랍 넘김**: `es/holdem-starting-hands-chart` (**첫 내부링크** — 「preflop은 저기」)
- `es/holdem-3bet` (3벳 레인지) · `es/holdem-continuation-bet` (C벳) ·
  `es/holdem-equity` · `es/holdem-position-play` · `es/holdem-strategy` (전략 허브)
- 🔴 착수 시 `es/holdem-glossary`(보유 확인됨)에서 **`rango`·`equity`·`solver` 정본 표기를 먼저 확인**한다
  (M-034 교훈 — 코퍼스 정본이 있으면 재량이 아니다). `docs/translation-terms-es.md`에는
  **`solver`·`GTO` 항목이 없다 → 이번에 신설**한다.

---

## 7. ✅ 판정 완료 (2026-08-22 사장님) — 되돌리지 마라

| # | 안건 | 판정 |
|---|---|---|
| 1 | `calculadora de poker` 축(170/70 · SD 1 · 롱테일 12개+) | 🔴 **랜딩이 가져가지 않는다.** `/es/calculator`를 붙일 예정이고 **그 키워드는 계산기 페이지의 것**이다. 롱테일 12개(`calculadora de probabilidades poker` SD 8 · `calculadora de odds poker` SD 9 · `~de outs/equity/icm/varianza/manos/fichas/omaha/online/gratis/porcentajes poker`)는 **계산기 페이지 착수 시 이 파일 §2에서 가져다 쓴다** |
| 2 | `optimuspoker.com`이 반례인가 | ❌ **아니다.** 무료는 **하루 1솔루션 + 등록 필수 + 크레딧제**다(§4 실측표). 훅이 오히려 선명해졌다 |
| 3 | `tablas preflop`(210 · SD 0)을 어디로 | ✅ **포스팅 `es/holdem-starting-hands-chart`로 소급한다.** 그 글은 영어형 `gto preflop charts`만 갖고 있는데 **스페인어 실사용 표기는 `tablas preflop`**이다. ⚠ 솔버 앱 네비에도 `Tablas preflop`이 있지만 **본체는 noindex**이고, **기존 포스팅과의 카니발이 최우선**이다(사장님). 랜딩은 **포스트플랍으로 깨끗이 갈린다** |
| 4 | 우리 솔버가 WASM Postflop(AGPL-3.0+) 파생인가 | ✅ **파생이 맞다.** 그래서 **도메인을 `solver.holdemmaster.com`으로 분리하고 소스를 GitHub에 공개**했다. **법적 리스크 없음** — 오히려 §4 훅 5번의 근거가 된다 |
| 5 | 랜딩 순서 | ✅ **es 하나 먼저 완성 → 검수 → 그 후 pt·de.** 솔버 앱은 이미 7개 언어를 지원하므로 UI는 병목이 아니다 |

## 8. 🔴 남은 확인 — 솔버 쪽에 물을 것

| 무엇 | 왜 |
|---|---|
| **앱 es(및 pt·de·zh) 트레이너 문구가 `pérdida de EV`인가** | 앱은 2026-08-15에 채점을 **팟 대비 비율**로 바꿨다. 라이브 es 화면에 아직 `recibe tu nota por pérdida de EV`가 있다. **ja에서 정확히 이 유형으로 사실오류 3건**이 나왔다(핸드오프 「솔버 앱에 통지할 것」) |
| **GitHub 저장소 URL** | 훅 5번(오픈소스)을 본문에 쓰려면 **링크할 주소가 필요하다.** 지어내지 않는다 |
| **ja 앱에 남아 있는 사실오류 3건**(⑨ `Q♥T♥7♠` 체크 0.8% · ⑬ `A♠A♥6♦` 트립스 17.5% · ③ `Q♠J♦T♠` 너트 BTN 쏠림) | 이미 통지 대기 중이다. **es 랜딩 작성 시 같은 문장을 스페인어로 복제하지 마라** |
