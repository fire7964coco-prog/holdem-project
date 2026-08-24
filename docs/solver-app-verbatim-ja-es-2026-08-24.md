# 솔버 앱 13스팟 «전수» 축어 — ja·es (2026-08-24 · Playwright DOM 실측)

> **M-053 요청분** — 「ja·es 앱 «전수» 축어는 실물 미보유 — 주시면 (c)가 완전히 닫힌다」에 대한 납품.
> 기존 `docs/solver-app-verbatim-5langs-2026-08-24.md`(ko·en·de·zh·zh-hant)와 합쳐 **8개 언어 전수 완성**.
>
> 🔴 **이 파일은 «정본»이 아니라 «앱이 지금 무엇을 말하는가»의 기록이다.**
> 사실 판정 기준은 `docs/gto-solver-series-spec.md` §4-B이고, 둘이 어긋나면 §4-B가 이긴다.
>
> 채집: `?lang=ja` / `?lang=es` → 학습 스팟 패널 열기 → `document.body.innerText` 추출.
> `curl` 불가(SSR 초기 HTML은 한국어).

## 0. 🔴 한 줄 결론 — 이 실측으로 갱신되는 판정 둘

1. **① RP-20 = 8/8 전 언어 확정.** ja(«BBのチェック後…観察しましょう»)·es(«después del check de
   BB»)도 결함형이다. M-053의 「6/8 확인」이 8/8로 닫힌다.
2. 🆕 **⑩ RP-17 절대형이 es 앱에도 있다 — 잔존 3언어(ko·zh·zh-hant)가 «4언어» 후보가 된다.**
   es ⑩ = «Un board que **no conecta en absoluto** con el rango del 3-bettor»(«전혀 맞지 않는다» —
   부정+en absoluto는 절대 서술). en «largely misses»·de «weitgehend verfehlt»·ja «ほぼ丸ごと»의
   완화형과 달리 완화어가 없다. §4-B ⑩ 실측(거트샷 4.8% + 백도어 16.9%)과 모순 →
   **결함형 판정을 제안한다. 재판정은 검수장 몫.**

| 자리 | ja | es |
|---|---|---|
| ① RP-20(체크 «다음» 주장) | 🔴 결함형 | 🔴 결함형 |
| ④ RP-01 계열+RP-02(콜러 우위+C벳 빈도) | 🔴 | 🔴 |
| ⑦ RP-19+조작 지시 | 🔴 | 🔴 |
| ⑧ RP-03(낮은 SPR 인과) | 🔴 | 🔴 |
| ⑩ RP-17 | 🟢 완화형(«ほぼ») | 🔴 **절대형(«en absoluto») — 🆕** |
| ③⑨⑬ 정정 수치 | 🟢 전부 정정본 | 🟢 전부 정정본 |
| ③ 「13スポット中/13 spots」 하드코딩 | ⚠ 있음(권고 대상) | ⚠ 있음(권고 대상) |

## 1. 화면 골격 — ja

- `<html lang="ja">` · title `HoldemMaster GTOソルバー — 無料ブラウザGTOソルバー`
- meta desc `インストール不要、ブラウザで動く無料GTOソルバー。テキサスホールデムのポストフロップ戦略をレンジ・ボード・ベットサイズ別に計算します。HoldemMaster提供。`
- 네비 `学習スポット ⚡ すぐ見る` · `GTOトレーナー EV採点` · `プリフロップ レンジ表` · `エクイティ計算機 勝率`
- 사이드바 `① OOPレンジ ② IPレンジ ③ ボード ④ ベットサイズ 設定 ⑤ ソルバーを実行`
- 그룹 라벨 `シングルレイズポット — BTN vs BB（基本）`(팟 5.5bb·스택 97.5bb) /
  `3ベットポット — BB 3ベット vs BTN コール（低SPR）`(22.5bb·89bb) /
  `ブラインド戦（BvB） — SB vs BB（ワイドレンジ）`(6bb·97bb)
- 꼬리 문장 `レンジは100bbオンライン標準の近似値です。…`

## 2. 13스팟 축어 — ja (전수)

| # | 보드 | 앱 note (축어) | 판정 |
|---|---|---|---|
| ① | A♥7♦2♣ | `レンジ優位の教科書的スポットです。BBのチェック後、BTNが非常に広いレンジで小さくCベットする理由を観察しましょう（Aはオープンレイザーに有利なカードです）。` | 🔴 **RP-20** |
| ② | K♠8♦3♣ | `Aハイボードと比較してみましょう。KハイボードでもBTN優位ですが、チェックがわずかに増えます。なぜでしょうか？` | 🟢 |
| ③ | Q♠J♦T♠ | `両者に当たったように見えるボードです。ところがBBのエクイティ実現率は13スポット中で最も低く、77.9%（BTNは119.4%）。99.9%チェックになる理由を分類パネルで確かめましょう。` | 🟢 정정본 · ⚠ 「13スポット中」 하드코딩 |
| ④ | 9♥8♥7♣ | `コーラー（BB）優位ボードの代表例です。BTNのCベット頻度が大きく下がることを確認しましょう — 「常にCベット」がなぜ間違いなのかを学べるスポットです。` | 🔴 **RP-01 계열+RP-02** |
| ⑤ | Q♠9♠2♠ | `大きなベットが消え、小さなベットとチェックが中心になる理由を学びます。完成したフラッシュでさえ頻繁にチェックすることを観察しましょう。` | 🟢 |
| ⑥ | 6♣6♦3♥ | `どちらのレンジもボードとほとんど噛み合いません → ブラフの比率が上がります。どのハンドがブラフベットをするのか、詳細表で探してみましょう。` | 🟢 |
| ⑦ | 6♠5♥2♦ | `オーバーカードの戦いです。BBのチェックレイズ頻度が高くなるボード — 上部ストリップでベット後の相手のアクションを追ってみましょう。` | 🔴 **RP-19+조작 지시** |
| ⑧ | A♦K♠2♥ | `3ベットレンジ（AK・AA・KKが多い）にとって最高のボードです。低SPRで小さなベットを使い、レンジ全体に圧力をかけるパターンを学びます。` | 🔴 **RP-03** |
| ⑨ | Q♥T♥7♠ | `3ベットポットなのにコーラーにも良いカードが多いボードです。それでも3ベッターは止まりません — 98.4%が同じ2/3サイズで打ちます。チェックに残る0.8%がどんなハンドか見てみましょう。` | 🟢 정정본 |
| ⑩ | 8♦5♣2♠ | `3ベットレンジがほぼ丸ごと外れるボードです。それでもオーバーペアとAハイで圧力をかけられる理由を学びます — エクイティ対フォールドエクイティです。` | 🟢 완화형(`ほぼ`) |
| ⑪ | K♥T♦6♠ | `ブラインド戦はレンジが広く、お互いに弱いのが特徴です。同じKハイボードでも、BTN vs BBのときと頻度がどう違うか比較してみましょう。` | 🟢 |
| ⑫ | 7♦6♦5♣ | `ワイドレンジ同士がぶつかる非常にコネクトしたボードです。ツーペア・ストレート・ドローが続出します。分類パネルがにぎやかになるスポットです。` | 🟢 |
| ⑬ | A♠A♥6♦ | `Aが2枚落ちた特殊なボードです。トリップスは珍しくありません — SBが88コンボ、BBが66コンボで、Aを多く持つSBが80.1%打ちます。どちらがAを多く持つかがこのボードのすべてです。` | 🟢 정정본 |

## 3. 화면 골격 — es

- `<html lang="es">` · title `HoldemMaster GTO Solver — Solver GTO gratis en el navegador`
- meta desc `Solver GTO gratis que funciona directamente en tu navegador, sin instalar nada. Calcula la estrategia postflop de Texas Hold'em por rango, board y tamaño de apuesta. De HoldemMaster.`
- 스팟 패널 헤더 `Spots de estudio — ejemplos con un clic` · 버튼 `⚡ Ver resultados` · `Resolver tú mismo`
- 그룹 라벨 `Single Raised Pot — BTN vs BB (fundamentos)`(Bote 5.5bb·Stack 97.5bb) /
  `Bote de 3-bet — BB 3-betea y BTN paga (SPR bajo)`(22.5bb·89bb) /
  `Guerra de ciegas — SB vs BB (rangos amplios)`(6bb·97bb)

## 4. 13스팟 축어 — es (전수)

| # | 보드 | 앱 note (축어) | 판정 |
|---|---|---|---|
| ① | A♥7♦2♣ | `El spot de manual de la ventaja de rango. Observa con qué rango tan amplio apuesta BTN con un c-bet pequeño después del check de BB — el as encaja de lleno en el rango del open-raiser.` | 🔴 **RP-20** |
| ② | K♠8♦3♣ | `Compáralo con el board A-high. El board K-high también favorece a BTN, pero los checks aumentan un poco. ¿Sabes por qué?` | 🟢 |
| ③ | Q♠J♦T♠ | `Un board que parece conectar con ambos rangos. Pero BB realiza menos equity aquí que en cualquiera de los 13 spots — 77.9% frente al 119.4% de BTN — y hace check el 99.9%. El panel de manos y proyectos explica por qué.` | 🟢 정정본 · ⚠ 「los 13 spots」 하드코딩 |
| ④ | 9♥8♥7♣ | `La textura clásica que favorece al caller. La frecuencia de c-bet de BTN se desploma — este spot muestra exactamente por qué «siempre c-bet» es un error.` | 🔴 **RP-01 계열+RP-02** |
| ⑤ | Q♠9♠2♠ | `Las apuestas grandes desaparecen a favor de apuestas pequeñas y checks. Fíjate con qué frecuencia incluso un color hecho se limita a hacer check.` | 🟢 |
| ⑥ | 6♣6♦3♥ | `Nadie conecta con este board, así que la proporción de bluffs sube. Usa la tabla de detalle para encontrar qué manos apuestan como bluff.` | 🟢 |
| ⑦ | 6♠5♥2♦ | `Una guerra de overcards. BB hace check-raise muy seguido en esta textura — sigue la tira superior después de una apuesta para ver las respuestas.` | 🔴 **RP-19+조작 지시** |
| ⑧ | A♦K♠2♥ | `El mejor flop posible para el 3-bettor (cargado de AK, AA y KK). Con SPR bajo, las apuestas pequeñas presionan todo el rango.` | 🔴 **RP-03** |
| ⑨ | Q♥T♥7♠ | `Un bote de 3-bet en un board que también le gusta al caller — y aun así el 3-bettor no frena: el 98.4% del rango dispara con el mismo tamaño de dos tercios. Mira qué manos forman ese 0.8% que hace check.` | 🟢 정정본 |
| ⑩ | 8♦5♣2♠ | `Un board que no conecta en absoluto con el rango del 3-bettor — y aun así los overpairs y las A-high mantienen la presión. Equity vs fold equity.` | 🔴 **RP-17 절대형 — 🆕 이번 실측이 처음 확인** |
| ⑪ | K♥T♦6♠ | `En la guerra de ciegas los rangos son amplios y ambos jugadores llegan débiles al flop. Compara las frecuencias con el spot K-high de BTN vs BB.` | 🟢 |
| ⑫ | 7♦6♦5♣ | `Dos rangos amplios chocan en un board ultraconectado: dobles parejas, escaleras y proyectos por todos lados. Aquí es donde el panel de clasificación se luce.` | 🟢 |
| ⑬ | A♠A♥6♦ | `Dos ases en el board. Los tríos no son raros — SB simplemente tiene más (88 combos frente a los 66 de BB), así que SB apuesta el 80.1%. Quién tiene más ases lo explica todo aquí.` | 🟢 정정본 |

## 5. (c) 종결 정리 — 8개 언어 전수 완성 시점의 앱 잔존 결함

| 결함 | 언어 확인 (8/8 전수 기준) |
|---|---|
| ① RP-20 (체크 «다음» 주장) | **8/8 전 언어** — 이번 ja·es로 닫힘 |
| ④ RP-01 계열+RP-02 | 8/8 전 언어 (기확인) |
| ⑦ RP-19+조작 지시 | 8/8 전 언어 — 이번 ja·es 축어로 문안까지 확인 |
| ⑧ RP-03 | 8/8 전 언어 — 이번 ja·es 축어로 문안까지 확인 |
| ⑩ RP-17 절대형 | **ko·zh·zh-hant + 🆕 es(재판정 요청)** — en·de·ja는 완화형 통과 |
| ③ 「13개 중」 하드코딩(권고) | 7/8 확인(ko·en·de·zh·zh-hant·ja·es — 문안 실측 기준) |
