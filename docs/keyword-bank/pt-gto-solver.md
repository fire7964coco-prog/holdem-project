# pt 솔버 랜딩 키워드 뱅크 — `/pt/solver`

> 2026-08-23 실측. 도구 = **DataForSEO Labs**(서제스트·SD) + **라쿠 `search-volume-history`**(볼륨) +
> **DataForSEO SERP API**(google.com.br top-10 + PAA). 대상 지역 = **Brazil**(pt-BR이 우리 정본).
> 🟢 **두 벤더가 볼륨에서 일치**했다 — `gto poker` 590·590 · `range poker` 590·590 ·
> `solver poker` 170·170 · `poker solver` 50·50 · `estrategia de poker` 20·20.

---

## 0. 한 줄 결론

**pt는 es와 세 가지가 다르다.**
① **`range`가 영어 그대로**다(es는 `rangos`) — **정본 `pt/holdem-glossary` L233이 이미 그렇게 정해 뒀다.**
② **`gto poker` 590 = es(210)의 2.8배** — GTO 축이 제목에 들어갈 만큼 크다.
③ **오염된 단어가 다르다** — es 는 `GTO` 가 과나후아토였는데 **pt 는 `GTO` 가 깨끗하고 대신 `solver` 가 엑셀이다**(§1-B-①).

조준 1순위는 **`range poker`/`poker range` 590**이고, es와 같이 **플랍 이후로 가른다**.

🔴 **그리고 pt 고유의 함정이 셋 있다 — 아래 §1-B.** es의 함정(`GTO`=과나후아토)과 **자리가 다르다.**

---

## 1. 🔴 SD 를 «발행을 가르는 값»으로 쓰지 마라 (2026-08-23 실증)

검수장 M-035 §6이 ja 뱅크의 SD 재현 실패를 잡았다. **es에서 그 재확인을 실행했더니 우리도 걸렸다.**

| 키워드 (es · Spain) | `keyword_suggestions` | `bulk_keyword_difficulty` |
|---|---:|---:|
| `solver poker` | 0 | 0 ✅ |
| **`poker solver`** | **46** | **0** 🔴 |
| **`solver de poker`** | **46** | **0** 🔴 |
| **`gto poker`** | **6~7** | **0** 🔴 |
| `rangos poker` | 0~1 | 1 ✅ |

- **같은 엔드포인트 재실행에서는 46이 재현된다** — 「하루 변동」이 아니라 **엔드포인트가 서로 다른 값을 준다.**
- **대조군으로 `bulk`가 정상임을 확인**했다(`casino online` 79 · `poker` 48 · `poker online` 40).
  → **둘 다 «작동»하는데 값이 다르다.** 어느 쪽이 맞는지 우리는 판정할 수 없다.
- 🟢 **볼륨은 재현된다** — 라쿠와 DataForSEO가 6/6 일치, 그리고 pt에서도 5/5 일치했다.

🔴 **그래서 이 뱅크의 규칙**:
1. **정렬·우선순위는 «볼륨»으로 한다.** SD는 «참고»로만 적고, 옆에 출처 엔드포인트를 밝힌다.
2. **SD 하나로 판정을 세우지 마라.** es는 어순 판정을 `solver poker` SD 0 대 `poker solver` SD 46으로
   세웠는데 그 근거가 무너졌다(결론은 볼륨 70 대 50으로 살았다).
3. 🟢 **pt는 처음부터 볼륨으로 갈린다** — `solver poker` **170** 대 `poker solver` **50**이고
   **SD는 둘 다 17로 같다.** es보다 튼튼한 근거다.

---

## 1-B. 🔴 pt 고유의 함정 넷 (2026-08-23 실측)

### ① **`solver` 를 단독으로 쓰지 마라 — 브라질에서 «Excel 솔버»다**

`o que é solver` 는 **110 · SD 0** 으로 이 판에서 가장 «쉬운» 값이 나온다. **조준하면 안 된다.**

SERP 실측(google.com.br · top-10 **8/8 이 엑셀**):
`support.microsoft.com`(**1위** · Definir e resolver um problema usando o Solver) · `nomus.com.br` ·
`youtube`(Excel SOLVER tool) · 대학 PDF(SOLVER(EXCEL): MANUAL DE REFERÊNCIA) · `sos.com.br` ·
`dicio.com.br`(사전) · `youtube` · `hashtagtreinamentos.com`
**PAA 축어**: `O que é a função Solver?` · `Como utilizar o Solver?` · **`Onde acho o Solver no Excel?`**

→ 🔴 **제목·H1·H2에서 `solver` 는 반드시 `poker` 와 붙여 쓴다.**

🪶 **es 와 «규율은 같고 이유가 다르다»** — es 는 **`GTO`** 가 과나후아토였고, pt 는 **`solver`** 가 엑셀이다.
   **es 규율을 그대로 옮기면 엉뚱한 단어를 지킨다.** pt 에서 `GTO` 단독은 오염이 없다(수확물 189개 중 0건).

### ② **`solver de poker` 는 볼륨이 0이다 — «자연스러운 쪽»이 검색어가 아니다**

| 표기 | 볼륨 | SD |
|---|---:|---:|
| **`solver poker`** | **170** | 17 |
| `poker solver` | 50 | 17 |
| **`solver de poker`** | **데이터 없음** | — |
| `solver de poker gratis` · `solver poker gratis` · `solver poker grátis` | **데이터 없음** | — |
| `solver poker gratuito` | 20 | — |

🔴 **앱 타이틀이 `Solver de poker GTO grátis` 라고 해서 그것이 검색어인 것은 아니다.**
   화면 문구(제품명)와 검색어(쿼리)는 다른 층이다. → **본문 산문은 `de` 를 넣어 읽히게 쓰고,
   «같은 것을 부르는 여러 이름» 문단에서 `solver poker` 를 축어로 한 번 놓는다.**
🪶 무료 수식어는 `grátis` 가 아니라 **`gratuito`** 쪽에만 값이 잡힌다(20 대 0).

### ③ **악센트가 볼륨을 가르고, 방향이 일정하지 않다**

| 무악센트 | 볼륨 | 악센트 | 볼륨 | 어느 쪽이 큰가 |
|---|---:|---|---:|---|
| `poker gratis` | **1,000** | `poker grátis` | 210 | 🔴 무악센트 **4.8배** |
| `maos de poker` | **3,600** | `mãos de poker` | 2,400 | 무악센트 1.5배 |
| `estrategia de poker` | 20 | **`estratégia de poker`** | **30** | 🔴 **악센트가 1.5배 — 반대 방향** |
| `o que e gto no poker` | **0** | **`o que é gto no poker`** | **30** | 🔴 악센트만 산다 |
| `poquer` | 2,900 | `pôquer` | 2,900 | 같음 |

🔴 **「브라질은 무악센트로 검색한다」로 일반화하지 마라** — 위 표에서 **두 줄이 반대로 간다.**
   `translation-terms-pt.md` 의 「검색은 무악센트도 흔함」은 맞지만 **규칙이 아니라 경향**이다. **표기마다 재라.**
🟢 **본문 표기는 정서법을 지킨다**(`grátis`·`mãos`). 철자를 틀리는 것은 검색량으로 살 이득보다 크게 잃는다.
   무악센트형은 **desc·tags 에서 흡수**한다.

### ④ 🔴 **`postflop`·`pós-flop`·`pos flop` 전부 볼륨 0 — es 와 여기서 갈린다**

es 는 `postflop` 을 조준축으로 썼다. **pt 는 그 말을 안 친다.**
→ **개념은 쓰되 키워드로 조준하지 않는다.** 대신 살아 있는 것:

| 키워드 | 볼륨 | SD |
|---|---:|---:|
| **`flop turn river`** | **260** | 6 |
| `odds poker` | 210 | 6 |
| `o que é range no poker` | 20 | — |
| `equity poker` | 20 | 🔴 **59** |
| `como estudar poker` | 30 | 🔴 47 |
| `app de poker` | 70 | 🔴 42 |
| `texas holdem` | 5,400 | 32 |

🪶 `equity poker` SD 59 · `como estudar poker` SD 47 — **`range poker`(SD 2)와 자릿수가 다르다.**
   같은 판이 아니다. 조준하지 않는다.

## 2. 볼륨표 (Brazil · pt)

### 조준 가능 (소유자 확인 아래 §4)

| 키워드 | 볼륨 | SD(sugg) | 라쿠 대조 | 메모 |
|---|---:|---:|---|---|
| **`poker range` / `range poker`** | **590** | 1~2 | ✅ 590 | 🎯 **1순위.** es의 `rangos poker`(480)보다 크다 |
| **`gto poker` / `poker gto` / `gto in poker`** | **590** | 9 | ✅ 590 | 🎯 **제목에 넣을 만하다** (es 210의 2.8배) |
| **`range de mãos poker`** | **210** | 0 | ✅ 210 | `range de maos poker`(무악센트)도 같은 값 |
| **`solver poker`** | **170** | 17 | ✅ 170 | 🎯 `poker solver`(50)의 **3.4배** — 어순 판정 근거 |
| `calculadora de poker` | 170 | 0 | ✅ 170 | 🔴 `/pt/calculator` 자리 — 가져오지 않는다 |
| `tabela de range poker` | 110 | 0 | ✅ 110(`tabela de ranges poker`) | 🔴 프리플랍 → `holdem-starting-hands-chart` |
| `calculadora de odds poker` | 110 | 0 | — | 🔴 계산기 자리 |
| `poker solver` | 50 | 17 | ✅ 50 | 어순상 뒤 |
| `range de poker` | 50 | 2 | — | 🟢 |
| `tabela range poker` | 40 | 0 | — | 🔴 프리플랍 |
| `o que é gto no poker` | 30 | — | — | 🎯 FAQ |
| `range poker por posição` | 30 | — | — | 🔴 프리플랍(포지션별) |
| `o que é range no poker` | 20 | — | — | 🎯 FAQ |
| `solver poker gratuito` | 20 | — | — | 🎯 |
| `ranges de poker` | — | — | ✅ **70**(12개월 **+18%**) | 🟢 상승 중 |
| `estrategia de poker` | 20 | 14 | ✅ 20 | 🔴 `pt/holdem-strategy` 소유 |
| `simulador de poker` | — | — | ✅ 70 | ⚠ es에서 의도가 «게임»이었다. pt는 SERP 미확인 — **조준 안 함** |

### 경쟁 브랜드 (참고 · 직접 조준 금지)

| 키워드 | 볼륨 |
|---|---:|
| **`gto wizard`** | **6,600** (라쿠 · es 2,900의 2.3배) |
| `gto wizard poker` | 140 (SD 25) |
| `piosolver` | 140 |
| `maos de poker`(참고) | 3,600 |
| `poker texas holdem`(참고) | 1,300 |

🪶 **`poker range calculator` / `range calculator poker` 50 은 SD 53**으로 이 판에서 가장 높다.
   계산기 축이라 어차피 우리 자리가 아니다.

---

## 3. SERP 실측 (google.com.br · 2026-08-23)

### 🟢🟢 `range poker`(590) — **top-10이 전부 프리플랍. 포스트플랍은 0개** (es와 같은 구조)

`blog.freebetrange.com`(Ranges de poker: guia completo) · `pokerbrasil.com.br`(O que é range e qual
utilizar **em cada posição**) · `blog.reglife.com.br` · `play.google.com`(Range Calculator) ·
`gipsyteam.com.br`(**Poker Range Chart, as famosas tabelas**) · `reddit` · `pokerstars.com` ·
`dmcreditos.com.br` · `youtube` ×2

⚠ **PAA가 완전히 딴소리다** — `Como chama quando faz 4 gols?`(축구) · `Qual poker Neymar joga?` ·
`O que a Bíblia diz sobre poker?` · `O que é reg poker?`
→ **구글이 이 쿼리의 의도를 아직 못 잡았다.** es와 같다 — **우리가 «포스트플랍 레인지»로 정의하러 들어갈 자리.**
🪶 다만 `O que é reg poker?` 하나는 포커 질문이라 FAQ 소재가 된다.

### 🟢 `solver poker`(170) — **«돌아가는» 무료 솔버가 top-10에 0개**

`gtowizard.com`(구독) · `play.google.com`(앱) · `apps.apple.com`(앱) · `solvers.poker`(리뷰) ·
`reddit` · `br.pokernews.com`(도구 리뷰) · `youtube` · `gipsyteam.com.br`(설명) ·
`piosolver.com`(설치형) · `pokerstrategy.com`(리뷰)

**PAA 축어**: **`O que é um Solver?`** · `Qual o segredo do poker?` · `Porque 7 e 2 é a pior mão do poker?` ·
`O que a Bíblia diz sobre poker?`
→ 🎯 **`O que é um Solver?`를 FAQ 문항으로 그대로 쓴다.**

### `gto poker`(590) — 설명 글이 지배. 도구는 하나뿐

`gtowizard.com` · `blog.reglife.com.br`(GTO x Explorável) · `play.google.com`(GTO Preflop: Poker
Treinador) · `pokerstars.com`(O que é GTO no Poker?) · `reddit` · `youtube` · `superpoker.com.br` ·
`upswingpoker.com` · `youtube` · **`instagto.com`**(InstaGTO: GTO Poker — Solver. Trainer. Analyzer)

🪶 **브라질 로컬 경쟁자가 뚜렷하다**: `pokerbrasil.com.br` · `reglife.com.br` · `gipsyteam.com.br` ·
`superpoker.com.br` · `dmcreditos.com.br` · `br.pokernews.com`.
es(스페인 브랜드가 굳어 있음)와 달리 **브라질은 매체형이 많고 도구형이 적다.**

---

## 4. 카니발 — pt 43편 전수 태그 grep

| 축 | 소유자 | 랜딩의 처리 |
|---|---|---|
| **`tabelas gto de preflop`** | 🔴 `pt/holdem-starting-hands-chart`(태그) + seoTitle `Tabela de mãos iniciais` | **프리플랍 표는 그 글.** 랜딩은 **포스트플랍**으로 가른다 |
| `range de 3-bet` · `range linear vs polarizado` | `pt/holdem-3bet` | 프리플랍 3벳 하위축 — 침범 금지 |
| **`estratégia de poker` 외 3형** | 🔴 `pt/holdem-strategy`(seoTitle + 태그 4개) | 가져가지 않는다 |
| **`calculadora de equity poker`** | 🔴 `pt/holdem-equity`(태그) | 🔴 **es와 다르다** — pt는 계산기 축 일부를 이미 글이 갖고 있다 |
| `tabela de outs poker` · `tabela de pot odds` · `tabela de probabilidade pôquer` | `holdem-outs`·`holdem-pot-odds`·`holdem-probability` | 무관 |
| **`range poker` 일반형 · `solver` · `gto poker` · `postflop`** | 🟢 **소유자 0** | **랜딩이 가져간다** |

---

## 5. 🔴 앱 실측 (`?lang=pt` · Playwright · 2026-08-23)

⚠ **`curl`로는 못 본다** — SSR 초기 HTML이 한국어이고 **타이틀은 JS 실행 후 바뀐다.**
   (실제로 `curl`이 「홀덤마스터 GTO 솔버」를 돌려줬다. **JS를 돌리는 도구로 봐야 한다.**)

- `<html lang="pt">` · title **`HoldemMaster GTO Solver — Solver de poker GTO grátis no navegador`**
- 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
- 히어로 **`Estratégia GTO, direto no seu navegador.`** / **`Nada para instalar, nada para pagar.`**
- 특징 4칸 **`Grátis — Todos os recursos, sem limite de uso`** · `Estudo offline` ·
  `Cálculo rápido — Multithread, velocidade de solver de desktop` ·
  **`Treinador GTO — Jogue spots; sua nota vem da perda de EV em relação ao pote`**
  🟢 **트레이너 문구가 이미 정정본이다**(「em relação ao pote» = 팟 대비). 08-22 솔버 배포가 반영됐다.
- 네비 `Spots de estudo` · `Treinador GTO` · **`Tabelas pré-flop`** · `Equity`
- 사이드바 `① Range OOP ② Range IP ③ Board ④ Bet sizes ⑤ Calcular`
- PWA `Adicionar à tela`

### 🟢 앱이 이미 고쳐 놓은 것 셋 (랜딩이 그대로 써도 된다)

| 스팟 | 앱 pt 축어 |
|---|---|
| ③ `Q♠J♦T♠` | 「Um board que **parece** conectar com os dois ranges. Mas o BB realiza menos equity aqui do que em qualquer um dos 13 spots — **77,9% contra 119,4%** — e dá check em **99,9%**」 |
| ⑨ `Q♥T♥7♠` | 「o 3-bettor **não freia**: **98,4%** do range aposta com o mesmo tamanho de dois terços. Veja quais mãos formam os **0,8%** que dão check」 |
| ⑬ `A♠A♥6♦` | 「As trincas **não são raras** — o SB simplesmente tem mais delas (**88 combos contra 66**), então o SB aposta **80,1%**」 |

### 🔴 앱이 «아직» 안 고친 것 하나 — **④ `9♥8♥7♣`**

앱 pt 축어: 「A textura clássica que **favorece o caller**. A frequência de c-bet do BTN **despenca**」

**검수장 M-035 결함 1·2가 pt 앱에도 살아 있다는 실측이다.**
- 「favorece o caller」 = 시리즈가 이름까지 대며 폐기한 명제
  (KO ④ `donk-bet-strategy`: **레인지 우위는 여전히 BTN · 48.5% 대 51.5%**)
- 「c-bet do BTN despenca」 = **화면에서 확인 불가**(스팟은 BB 첫 액션에서 멈춘다)

🔴 **랜딩은 정정본을 쓴다.** 그리고 **솔버에 통지할 것**(M-036에서 「④는 다음 통지에」라고 적어 뒀다 —
   이제 **es·ja·pt 세 언어에서 확인**됐으니 근거가 셋이다).

---

## 6. ✅ 발행됨 — `/pt/solver` (2026-08-23)

### 조준 (실제 배치)
- **1차**: `range poker` / `poker range` (590 · SD 2) — **플랍 이후 한정** · `solver poker` (170 · SD 17)
- **1차**: `gto poker` / `poker gto` (590 · SD 9) — 🟢 **es와 달리 제목에 넣었다**(오염 없음 + 볼륨 2.8배)
- **2차**: `range de mãos poker`(210) · `range de poker`(50) · `ranges de poker`(70, 상승) ·
  `o que é range no poker`(20) · `o que é gto no poker`(30) · `solver poker gratuito`(20) ·
  `flop turn river`(260 · SD 6)
- **제외**: `tabela de range poker`·`tabela range poker`·`range poker por posição`(프리플랍) ·
  `calculadora *`(계산기 자리) · `estratégia de poker`(holdem-strategy) ·
  `simulador de poker`(의도 미확인) · 🔴 **`o que é solver`(110·SD 0 — 엑셀)**

### 확정된 제목·설명
- `seoTitle` **`Solver de poker GTO grátis — sem cadastro, sem limites | HoldemMaster`**
- `desc` **`Solver de poker GTO grátis no navegador: sem instalar, sem cadastro e sem limites. Calcule os ranges de poker no flop, turn e river com equity, EV e EQR.`**
- `h1` **`Solver de poker GTO grátis — calcule os seus ranges depois do flop`**

🪶 `solver`는 세 자리 전부에서 `poker`와 붙어 있다(§1-B-①). `range`는 H1·H2가 받는다.

### H2 (실제 발행본 · 10개)
1. `O que é um solver de poker e no que ele difere de uma tabela?` ← PAA `O que é um Solver?`
2. **`Por que os seus ranges quebram depois do flop?`** ← **1순위 축**(③ 0,1% 대 ④ 23,7% 대비)
3. `Como usar o solver de poker em 5 passos`
4. `Como ler os ranges de poker na tela de resultados`
5. `É grátis mesmo? — tudo o que está incluído`
6. `Por que ele só calcula depois do flop` ← 카니발 본체
7. `Treinador GTO — pratique e meça quanto EV você deixa`
8. `13 spots de estudo já resolvidos`
9. `Qual é a diferença para o GTO Wizard ou o PioSOLVER?`
10. `Dá para usar no celular e sem internet?` ← PWA

FAQ **20문항**(빌드 산출물 `Question` 20개 실측). PAA 축어 2건 흡수 — `O que é um Solver?` ·
`O que é reg poker?`(→ `O que é reg no poker?`).

### 내부링크 (⚠ **`app/pt/`는 `blog`·`page.tsx`·`solver`뿐. `tournaments`도 없다**)
`holdem-starting-hands-chart`(첫 링크 · 프리플랍 넘김) · `holdem-pot-odds` · `holdem-equity` ·
`holdem-position-play` · `holdem-3bet` · `holdem-strategy` · `holdem-reading-the-board` ·
`holdem-glossary` · `holdem-continuation-bet` — **9종 전건 실존 확인**(빌드 후 재확인).

### 🟢 발행 후 게이트 결과
`check:hreflang` 0건(5랜딩 세트 `ko-KR en-US ja-JP es-ES pt-BR` 일치) · `check:directives` 0건 ·
`check:meta-lang` 🔴 0건 · `robots: index, follow` · `<html lang="pt-BR">` · h1 1개 · h2 14개 ·
크롬 2겹 없음(es와 구조 동일). 사이트맵 static URL 63 → **64**.

---

## 7. 🔴 등록 시 주의 — pt 는 es 보다 «가진 것»이 적다

| | es | **pt** |
|---|---|---|
| `app/<locale>/` | `blog` · `tournaments` · `page.tsx` | **`blog` · `page.tsx`뿐** (⚠ tournaments 없음) |
| `LOCALE_HUB_ROUTES` | 있음 | ✅ **08-23에 신설**(`/pt/blog`·`/pt/solver` 둘만 — tournaments 없음) |
| `lib/hub-i18n.ts` | ✅ 있음 | ✅ **08-23에 `PT` 신설** — 값은 `community-client.tsx`의 `LABELS.pt` 9키 축어 복사. 🔴 **이 파일 주석의 「안 하면 영어가 섞인다」가 실제로 걸린 첫 사례다** |
| 포스트 | 60편 | 43편 |
| GTO 시리즈 | 0/13 | **0/13** (SPOT_GROUPS `slug` 비워 둔다) |

---

## 8. 미결

| # | 무엇 |
|---|---|
| 1 | **`simulador de poker`(70) SERP 미확인** — es는 의도가 «무료 게임»이었다. pt도 같은지 안 봤다. 조준 안 했으니 급하지 않다 |
| 2 | **`calculadora de equity poker`를 `pt/holdem-equity`가 이미 태그로 갖고 있다** — es와 다르다. `/pt/calculator` 신설 시 그 글과 조율 필요 |
| 3 | **④ `9♥8♥7♣` 앱 문구** — 솔버 통지 대기(es·ja·pt 3언어 확인) |
