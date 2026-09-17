// `/pt/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 계산기 컴포넌트(화면 렌더)가 **같은 배열**을 쓴다.
// ★2026-09-17 신설. 정본 = `app/en/calculator/faq.ts`의 8문항을 pt-BR로 재저작한 것.
// §13: 수치는 전부 EN과 동일(35% · 19,6% · 23,1% · 3.000 ÷ 13.000 · $397 vs $300 · 33,3% · 16,6% · 13,3% · 40% · 6,7 pontos).
//   표기만 브라질식(천단위 `.` · 소수 `,`) — `lib/posts-pt/holdem-icm.ts`의 «$38,39 · $1.500»과 같은 규칙. 통화는 `$` 유지.
// 용어: ICM deal · chip chop · chip leader · short stack · pot odds · outs · equity · coin flip · bolha는 코퍼스 축어
//   (`holdem-icm.ts` L133~149 · `holdem-bubble.ts` · `holdem-outs.ts` L114~138 · `holdem-pot-odds.ts` tldr).
export const CALCULATOR_FAQ_PT: { q: string; a: string }[] = [
  {
    q: "Como usar a calculadora de ICM?",
    a: "Informe o número de jogadores, o stack de cada um e a estrutura de premiação (1º a 6º). A calculadora mostra na hora quanto cada stack vale de verdade em dinheiro de premiação — use para decisões de pagar ou foldar e para negociar deals na bolha e na final table.",
  },
  {
    q: "O que é ICM no poker?",
    a: "ICM é a sigla de Independent Chip Model — um modelo matemático que converte as fichas de torneio na expectativa real de premiação. A ideia central: dobrar as suas fichas não dobra a sua equity de premiação.",
  },
  {
    q: "Sou o chip leader — por que o meu valor de ICM é menor que a minha fatia de fichas?",
    a: "Porque ganhar continua pagando só o prêmio de 1º lugar, e não a premiação inteira. No exemplo de bolha abaixo, um leader com 40% das fichas tem um valor de ICM de apenas 33,3% (6,7 pontos a menos), enquanto o menor stack (13,3% das fichas) vale 16,6% — mais do que a sua fatia de fichas.",
  },
  {
    q: "Como calcular um deal por ICM na final table?",
    a: "Você divide a premiação restante na proporção do valor de ICM de cada jogador. O «valor ICM» que esta calculadora mostra — depois de você informar os stacks atuais e os prêmios restantes — é exatamente o valor justo do deal.",
  },
  {
    q: "Qual é a diferença entre chip chop e ICM deal?",
    a: "O chip chop divide os prêmios pela fatia bruta de fichas e favorece o chip leader. O ICM deal reflete a probabilidade de cada jogador terminar em cada colocação, então é mais justo com os short stacks. No exemplo abaixo, o short stack recebe cerca de $397 num ICM deal contra $300 num chip chop — se você está short, peça sempre um ICM deal.",
  },
  {
    q: "Por que devo foldar mais na bolha?",
    a: "Na bolha, o valor de ICM que você perde ao bustar é maior do que o valor que ganha ao vencer. Um call lucrativo em chip EV pode ser perdedor em EV de premiação (ICM), então os stacks médios, em especial, devem evitar coin flips.",
  },
  {
    q: "Como estimar a equity a partir dos outs?",
    a: "Multiplique os outs × 4 no flop e × 2 no turn para ter a porcentagem aproximada. Por exemplo, um flush draw com 9 outs tem cerca de 35% no flop e 19,6% no turn. Use a calculadora de outs acima para os números exatos.",
  },
  {
    q: "Qual é a fórmula das pot odds?",
    a: "Valor do call ÷ (pote + valor do call) = a equity mínima de que você precisa. Por exemplo, pagar 3.000 num pote de 10.000 é 3.000 ÷ 13.000 ≈ 23,1%, então o call é lucrativo quando a sua equity está acima de 23,1%.",
  },
];
