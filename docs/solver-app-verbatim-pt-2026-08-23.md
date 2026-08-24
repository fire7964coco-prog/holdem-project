# 솔버 앱 축어 — `?lang=pt` (2026-08-23 · Playwright DOM 실측)

> **왜 이 파일이 있나**: 검수장은 브라우저가 없어 앱 화면을 못 본다(M-038 §3 한계).
> 그래서 «앱 축어»는 본체가 떠서 넘겨야 판정이 가능하다. M-042 ⑦에서 요청받은 것의 pt 분이다.
>
> 🔴 **이 파일은 «정본»이 아니라 «앱이 지금 무엇을 말하는가»의 기록이다.**
> 사실 판정 기준은 **`docs/gto-solver-series-spec.md` §4-B 확정표**다.
> 둘이 어긋나면 **§4-B 가 이긴다** — 그것이 M-035·M-038 이 반복해서 확인한 규율이다.
>
> 채집 방법: `mcp__playwright__browser_navigate` → `?lang=pt` → 「Spots de estudo」 클릭 →
> `browser_evaluate` 로 리프 텍스트 노드 전수. **`curl` 로는 못 본다** — SSR 초기 HTML 이
> 한국어이고 타이틀은 JS 실행 후 바뀐다(실제로 curl 이 「홀덤마스터 GTO 솔버」를 돌려줬다).

---

## 1. 화면 골격

| 자리 | pt 축어 |
|---|---|
| `<html lang>` | `pt` |
| `<title>` | `HoldemMaster GTO Solver — Solver de poker GTO grátis no navegador` |
| meta description | `Solver GTO grátis que roda direto no seu navegador, sem instalar nada. Calcule a estratégia pós-flop de Texas Hold'em por range, board e tamanho de aposta.` |
| 언어 셀렉터 | **8개** — `ko` `en` `ja` `es` `pt` `de` `zh` `zh-hant` |
| 히어로 | `Estratégia GTO, direto no seu navegador.` / `Nada para instalar, nada para pagar.` |
| 네비 | `Spots de estudo ⚡ Na hora` · `Treinador GTO Nota EV` · `Tabelas pré-flop Ranges` · `Equity % de vitória` |
| 사이드바 | `① Range OOP` · `② Range IP` · `③ Board -` · `④ Bet sizes Ajustes` · `⑤ Calcular` |
| 상단 탭 | `Solver` · `Resultados` |
| 기타 버튼 | `Ver os Spots de estudo` · `Treinador GTO` · `Desafio do dia ●` · `Como usar` · `♠ Adicionar à tela` · `É seguro?` |
| 결과 패널 이름 | `Mãos / Draws` (스팟 해설이 그렇게 부른다) |
| 칩 안내 | `Informe os valores em fichas inteiras (os spots personalizados usam unidades de ficha arbitrárias). Para raciocinar em big blinds, recomendamos 10 fichas = 1bb.` |
| 스팟 목록 꼬리 | `Os ranges são aproximações do padrão online de 100bb. Carregue um spot, ajuste os ranges e compare — é um ótimo jeito de estudar.` |

### 특징 4블록

- `Grátis` / `Todos os recursos, sem limite de uso`
- `Estudo offline`
- `Cálculo rápido` / `Multithread, velocidade de solver de desktop`
- `Treinador GTO` / **`Jogue spots; sua nota vem da perda de EV em relação ao pote`**

🟢 **트레이너 문구가 이미 정정본이다** — es 화면은 아직 「pérdida de EV」뿐인데
pt 는 **「em relação ao pote」**까지 들어와 있다(2026-08-15 변경분이 pt 에 반영됨).

🪶 트레이너 CTA 는 `Experimente o Treinador GTO — ele mostra exatamente quantos bb cada decisão custa a você`
로 **bb** 를 쓴다. **이것은 결함이 아니다** — 화면에 뜨는 «값»은 실제로 bb 이고 «합격선»만 팟 대비다.
(2026-08-23 솔버 왕복에서 이 구조를 확인하고 본체가 자기 지적 하나를 철회했다.)

---

## 2. 스팟 그룹 조건 (축어)

| 그룹 | 라벨 | 조건 |
|---|---|---|
| ①~⑦ | **`Single Raised Pot — BTN vs BB (fundamentos)`** (영어 유지) | `OOP: BB (caller) · IP: BTN (open-raiser) · Pote 5,5bb · Stack 97,5bb` |
| ⑧~⑩ | `Pote de 3-bet — BB dá 3-bet e BTN paga (SPR baixo)` | `OOP: BB (3-bettor) · IP: BTN (caller) · Pote 22,5bb · Stack 89bb` |
| ⑪~⑬ | `Blind vs Blind — SB vs BB (ranges amplos)` | `OOP: SB (open-raiser) · IP: BB (caller) · Pote 6bb · Stack 97bb` |

🔴 **pt 앱은 소수 구분자로 «쉼표»를 쓴다**(`5,5bb`). **es 앱은 마침표였다**(`5.5bb`).
   **언어마다 다르니 한쪽 주석을 다른 쪽으로 옮기지 마라.**
🪶 pt 3벳팟 조건에는 **SPR 표기가 없다**(es 에는 `SPR ≈ 4,0` 이 있다).

---

## 3. 🔴 13스팟 축어 (앱이 지금 말하는 것 그대로)

> **판정 열**: 🟢 = §4-B 와 일치 · 🔴 = 어긋남(랜딩은 정정본을 쓴다)

| # | 보드 | 앱 name | 앱 note (축어) | 판정 |
|---|---|---|---|---|
| ① | A♥7♦2♣ | `Board seco A-high` | `O spot clássico de vantagem de range. Repare como o BTN dá um c-bet pequeno com um range amplíssimo depois do check do BB — o ás acerta em cheio no range de quem abriu.` | 🟢 |
| ② | K♠8♦3♣ | `Board seco K-high` | `Compare com o board A-high. O board K-high também favorece o BTN, mas os checks aumentam um pouco. Sabe dizer por quê?` | 🟢 |
| ③ | Q♠J♦T♠ | `Board Broadway conectado, two-tone` | `Um board que parece conectar com os dois ranges. Mas o BB realiza menos equity aqui do que em qualquer um dos 13 spots — 77,9% contra 119,4% do BTN — e dá check em 99,9%. O painel Mãos / Draws mostra o porquê.` | 🟢 **이미 정정본** |
| ④ | 9♥8♥7♣ | `Board médio conectado, two-tone` | **`A textura clássica que favorece o caller. A frequência de c-bet do BTN despenca — este spot mostra exatamente por que «sempre dar c-bet» é um erro.`** | 🔴🔴 **결함 2개** (아래 §4) |
| ⑤ | Q♠9♠2♠ | `Board monotone` | `As apostas grandes somem e dão lugar a apostas pequenas e checks. Repare com que frequência até um flush fechado só dá check.` | 🟢 |
| ⑥ | 6♣6♦3♥ | `Board pareado` | `Ninguém conecta com este board, então a proporção de blefes sobe. Use a tabela de detalhes para achar quais mãos apostam como blefe.` | 🟢 |
| ⑦ | 6♠5♥2♦ | `Board baixo e rainbow` | `Uma guerra de overcards. O BB dá check-raise com muita frequência nesta textura — siga a faixa superior depois de uma aposta para ver as respostas.` | 🟢 |
| ⑧ | A♦K♠2♥ | `Board A-high, vantagem do 3-bettor` | **`O melhor flop possível para o 3-bettor (carregado de AK, AA e KK). Com SPR baixo, apostas pequenas pressionam o range inteiro.`** | 🔴 **RP-03** |
| ⑨ | Q♥T♥7♠ | `Board dinâmico two-tone` | `Um pote de 3-bet num board que também agrada ao caller — e mesmo assim o 3-bettor não freia: 98,4% do range aposta com o mesmo tamanho de dois terços. Veja quais mãos formam os 0,8% que dão check.` | 🟢 **이미 정정본** |
| ⑩ | 8♦5♣2♠ | `Board baixo e seco` | `Um board que não conecta em nada com o range do 3-bettor — e mesmo assim os overpairs e as mãos A-high mantêm a pressão. Equity vs fold equity.` | 🔴 **RP-17 계열** (아래 §4) |
| ⑪ | K♥T♦6♠ | `Board K-high com um T` | `No blind vs blind os ranges são amplos e os dois jogadores chegam fracos ao flop. Compare as frequências com o spot K-high de BTN vs BB.` | 🟡 **RP-18 감시 대상** |
| ⑫ | 7♦6♦5♣ | `Board baixo conectado, two-tone` | `Dois ranges amplos se chocam num board ultraconectado: dois pares, straights e draws por todo lado. É aqui que o painel Mãos / Draws brilha.` | 🟢 |
| ⑬ | A♠A♥6♦ | `Board com A pareado` | `Dois ases no board. As trincas não são raras — o SB simplesmente tem mais delas (88 combos contra 66 do BB), então o SB aposta 80,1%. Quem tem mais ases explica tudo aqui.` | 🟢 **이미 정정본** |

---

## 4. 🔴 앱에 남은 결함 (랜딩은 전부 정정본을 쓴다)

### ④ `9♥8♥7♣` — **결함 둘이 한 문장에** (통지 대기)

1. **「favorece o caller」** = 시리즈 ④가 이름까지 대며 폐기한 명제.
   정본: KO ④ `lib/posts/donk-bet-strategy.ts` 축어 「**레인지 우위가 BB로 넘어간 것은 아니다** —
   에퀴티는 **48.5% 대 51.5%**로 여전히 BTN 이 앞선다」 ·
   EN ④ FAQ 「Does the big blind have the advantage? → **No.**」
2. **「A frequência de c-bet do BTN despenca」** = **화면에서 확인 불가.**
   스팟은 **플랍 첫 액션(BB 차례)에서 멈춘다.**
   같은 이유로 「«sempre dar c-bet» é um erro」 절도 성립하지 않는다.

**ja·es·pt 세 언어에서 같은 결함 확인** → 앱 통지 근거 3건.

### ⑧ `A♦K♠2♥` — RP-03 (발원지는 EN 랜딩, 앱에도 있다)

「**Com SPR baixo**, apostas pequenas pressionam o range inteiro」 =
시리즈 ⑧ `lib/posts/3bet-pot-cbet.ts` 반박 문단이 폐기한 인과.
정본: 「SPR 이 똑같이 4.0인 ⑨는 큰 사이즈 **98.4%**, ⑩은 **97.8%**다.
**사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양**이다」.

🔴 **본체 랜딩(pt)이 이 문장을 앱에서 그대로 받아 갔다** — M-042 ①이 확인한 «앱 계보»의 실증.

### ⑩ `8♦5♣2♠` — RP-17 계열

「não conecta **em nada**」 = 절대 서술. 반례 = **백도어 플러시 16.9%(14콤보)**.
정본은 ja 「ほぼ丸ごと外れる」. 랜딩 en·es·pt 는 2026-08-24 에 완화형으로 정정했다.
🪶 **앱은 아직 절대형이다** — ④·⑧과 함께 통지 대상에 넣는 것이 맞는지 판정 바람.

### ⑪ `K♥T♦6♠` — RP-18 감시 (지금은 참)

「os ranges são amplos e os dois jogadores chegam fracos」 — **서술로 읽히므로 지금은 참**이다.
🔴 **빈도 수치(67.4% / 9.6%)를 이 문장에 붙이는 순간 인과가 되어 폐기 명제가 된다.**

---

## 5. 남은 언어

| 언어 | 축어 채집 |
|---|---|
| ja | ✅ (2026-08-21) |
| es | ✅ (2026-08-22) |
| **pt** | ✅ **이 파일** |
| ko · en · de · zh · zh-hant | 🔜 **de 랜딩 착수 회차에 함께** (M-042 ⑦ 합의) |
