/**
 * `/pt/hand-chart` FAQ — 화면(`<details>`)과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-05 신설. 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «타입 42% vs 콤보 35.4%» 판). 숫자 = pt-BR(1.326 · 35,4%).
 */
export const HAND_CHART_FAQ_PT: { q: string; a: string }[] = [
  {
    q: "Tenho que seguir a tabela de mãos iniciais à risca?",
    a: "A tabela é um ponto de partida. Em mesas 6-max, jogue cada posição um ou dois assentos mais solto do que no 9-max. Com ante, amplie o range inteiro em 5–8%. Em mesas cheias de jogadores fracos, jogar mais tight para extrair o máximo de valor costuma dar mais lucro.",
  },
  {
    q: "São exatamente 169 mãos iniciais?",
    a: "Sim. Sem distinguir naipes, existem exatamente 169 tipos de mão: 13 pocket pairs, 78 mãos suited e 78 mãos offsuit. No baralho real, o total de combinações é 1.326.",
  },
  {
    q: "Por que o big blind não aparece na tabela?",
    a: "O big blind já colocou 1 BB, então ele não abre com aumento: ele defende (paga ou dá re-raise). O range de defesa do BB muda completamente conforme a posição e o tamanho da abertura do adversário, por isso precisa de uma tabela própria.",
  },
  {
    q: "Tudo bem abrir 42% das mãos no button?",
    a: "Primeiro é preciso comparar pelo mesmo critério. Os 42% desta tabela são a proporção sobre os 169 «tipos» de mão, enquanto os 40–50% de button citados nos materiais GTO são medidos sobre as 1.326 «combinações». Convertido em combos, o range de button desta tabela é de 35,4% — até mais estreito que essa faixa GTO. Então os 42% não são um problema por serem amplos; o ponto é que, se os adversários forem tight ou iniciantes, focar mais nas mãos premium costuma render mais na prática. A tabela é uma referência equilibrada.",
  },
  {
    q: "O que fazer quando tomo um 3-bet?",
    a: "O seu range de abertura e o seu range para pagar um 3-bet são diferentes. Em geral, diante de um 3-bet você responde com mãos premium como AA-JJ e AKs-AQs, mais alguns blefes (ases suited de wheel, como A5s e A4s, que bloqueiam AA e AK e podem fazer o nut flush). O resto vai para o fold.",
  },
];
