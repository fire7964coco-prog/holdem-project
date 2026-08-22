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

## 4. 훅 판정 — 「무료」는 쓸 수 없다

영어권 SERP에 무료 브라우저 솔버가 이미 여럿이다:
[WASM Postflop](https://wasm-postflop.pages.dev/)(원조 · **2023-10 개발 중단** · AGPL-3.0+) ·
`pokergtosolver.com` · `PokerMoose`(플랍까지 무료, 이후 $25/월) · `Poker Academy` · `Lucid GTO`(무료 티어)
→ ja 회차의 「無料」와 같은 상황이다. **남들이 다 달고 있는 말은 훅이 못 된다.**

### ✅ 쓸 수 있는 훅 (스페인어 SERP 실측 기준)
1. **「설명하는 글은 많은데, 지금 바로 돌아가는 것이 없다」** — `solver poker` top-10의 절반이
   «솔버란 무엇인가» 설명 글이다. **클릭해서 바로 계산이 도는 페이지가 없다.**
2. **「설치도 등록도 없이」** — `sin instalar, sin registrarte`. 1·3·10위가 전부 설치/구독이다.
3. **「레이크까지 넣고 푼다」** — 무료 경쟁자 중 레이크·레이크캡을 다루는 곳이 SERP 상위에 없다.
4. **「해설 13편이 붙어 있다」** — 이건 **우리만 갖고 있다.** 솔버는 흔한데 «왜 이렇게 푸는지»가 붙은 솔버는 드물다.

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
- `seoTitle` 후보 B: **`Deja de mirar tablas preflop — rangos poker en el flop, turn y river`**
  (⚠ B는 `tablas preflop`을 **부정 대비**로만 쓴다. 그 축을 가져가는 게 아니다)
- `desc`: 「¿Sabes tu rango preflop pero te pierdes en el flop? Rangos poker postflop con un solver
  que corre en tu navegador — sin instalar, sin registrarte. N minutos.」

### H2 골격 (질문형 70% · 각 H2 직후 40~75단어 직답 · `> **La respuesta corta**` 블록)
1. `¿Qué es un solver poker y qué hace realmente?` → `solver poker` · `que es gto en poker`
2. `¿Por qué tus rangos se rompen después del flop?` → **`rangos poker` 본진**
3. `¿Cómo se leen los rangos en el poker postflop?` → `lectura de rangos poker` · `rangos en el poker`
4. `¿Necesitas instalar algo para usar un solver?` → **훅 2** (`sin instalar, sin registrarte`)
5. `¿El rake cambia la solución?` → **훅 3** (경쟁자 공백)
6. `¿Solver gratis o de pago: qué cambia de verdad?` → `solver poker gratis` (⚠ **금액 쓰지 않는다**)
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

## 7. 미결 — 판정이 필요한 것

| # | 무엇 | 왜 |
|---|---|---|
| 1 | **`calculadora de poker` 축(170/70 · SD 1 · 롱테일 12개+)을 랜딩이 흡수할지** | `/es/calculator`가 **없다**. 도구 3종 경화 때 만들 자리인데, 그때까지 비워 둘지 랜딩이 임시로 받을지. 롱테일이 전부 SD 10 이하다(`calculadora de probabilidades poker` 8 · `calculadora de odds poker` 9) |
| 2 | **`optimuspoker.com`(7위)이 실제로 브라우저에서 도는가** | 「plataforma con IA y solver GTO online」을 표방한다. 우리 훅 1(「돌아가는 게 없다」)의 유일한 반례 후보다. **착수 전 라이브 확인 필수** |
| 3 | **`tablas preflop`(210 · SD 0)을 `holdem-starting-hands-chart`에 소급할지** | 그 글은 `gto preflop charts`만 갖고 있는데 **스페인어 실사용 표기는 `tablas preflop`**이다. 랜딩 회차에 함께 고칠지 별건으로 둘지 |
| 4 | **우리 솔버가 WASM Postflop(AGPL-3.0+) 파생인가** | 랜딩의 「32비트 FP / 16비트 정수 · 4GB」가 그 사양과 일치한다. **파생이면 소스 공개 의무**가 생긴다. ⚠ **확인 안 했다 — 추측이다.** 솔버 쪽에 물어야 한다 |
