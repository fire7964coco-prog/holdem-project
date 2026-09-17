// `/pt/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 calculator-tool.tsx(화면)가 같은 배열을 쓴다.
// ★2026-09-17 신설(8) → ★2026-09-17 (pt 회차) 8 → 18: EN 17문항(app/en/calculator/faq.ts · 계산기형만 · 정의형 제외)의 «명제»를 옮기고,
//   pt 고유 1문항을 더했다(check:calc-parity C = EN 17 + 고유 1) —
//   ① «Posso usar uma calculadora de poker na mesa?» = 형제 글 축(holdem-pot-odds FAQ «Existe calculadora ou simulador de probabilidade para poker?»의 답이
//      «na mesa você não pode usar uma»라고만 적는다 — 근거 조항은 여기서) + es·zh-hant 선례(경쟁 FAQ 축). 답은 **규정 사실만**(TDA 2024 Rule 5-A·5-C·5-D ·
//      1차 출처 docs/sources/tda-2024-rules-v1.txt L40~53) — 온라인 사이트 약관·합법성은 다루지 않는다(합법성 축 금지).
//      🔴 TDA 2022판 Rule 5는 «live hand 중»만 금지했지만 2024판 5-D는 «at the table» 전체다 — 2022 문구로 되돌리지 마라(zh-hant 회차 교훈).
//   ✖ Omaha 문항(자동완성 «calculadora poker omaha» · PAS)은 넣지 않았다 — «못 한다»는 답은 수요를 못 채운다(뱅크 §7 미구현 수요).
//   정의형(«O que é ICM no poker?» 등)은 `holdem-icm`·`holdem-pot-odds`·`holdem-equity`가 소유 — 옛 8문항의 «O que é ICM no poker?»는
//   holdem-icm FAQ 1과 축어 동일이라 뺐다.
// 형제 글 FAQ와 축어·의도 충돌 회피(09-17 grep):
//   holdem-pot-odds/outs/probability «O que é a regra do 2 e 4?» → «Quão precisa é a regra do 2 e 4?» ·
//   holdem-probability «Quais são as odds de acertar um flush até o river?» → 스트리트 3종을 주는 계산기형 «Qual a chance de um flush draw completar em cada street?»(답 첫머리 «Na calculadora de outs») ·
//   holdem-icm «Como o ICM é calculado?» → «Como usar a calculadora de ICM?» · «Qual a diferença entre ICM e chip EV?» → 결과형 «Por que um call lucrativo em fichas…» ·
//   «O que é um ICM deal, e como ele difere de um chip chop?» → «Quanto muda a divisão entre um chip chop e um ICM deal?» ·
//   holdem-bubble «Você deve foldar na bolha?» → «Como a calculadora de ICM mostra quando foldar na bolha?» ·
//   holdem-icm H2 «Por que suas fichas não valem…» → «Quanto a calculadora de ICM tira do chip leader na bolha?» ·
//   holdem-icm H2 «ICM deal vs chip chop…» → «Que números colocar na calculadora para um ICM deal?» ·
//   holdem-hand-rankings(320) → «Como a calculadora mostra qual mão ganha?» (SEO 렌즈 09-17).
//   «bustar»(코퍼스 5)은 «ser eliminado»로 통일(네이티브 렌즈 — 초보 독자).
//   🔴 질문 뒤에 명사 키워드를 «덧붙이지» 마라 · 한 q에 질문 두 개 금지(zh 09-17) · 인용부호는 « »만(check:calc-parity E).
// 질문 표기 = 경쟁 FAQ 형태(PokerNews BR «Como Usar a Calculadora de Odds de Poker?» · gipsyteam «Como usar uma calculadora de ICM de poker?» ·
//   calcbe «Qual é a taxa de acerto de um flush draw com 9 outs?») + 자동완성(«pot odds poker formula» · «aa vs kk odds»).
// §13: 모든 수치 = scripts/calc-reference-tables.ts(EN과 동일 · 표기만 브라질식). AA vs KK 81,9% = 전 수트 평균(81.95) · AK vs 포켓페어 밴드 = settled-decisions §3-F ·
//   19,1% = 9/47(flop → turn) · 19,6% = 9/46(turn → river). 페이지 순서 = 도구 → ICM 예시 → 가이드 카드 → 표 → FAQ이므로 «acima»가 맞다.
//   ✱ «regra do 2 e 4» 오차 서술은 EN «×2 runs 1–2 points low»(5~11 outs만 참)가 아니라 표 값으로 고쳐 적었다(es 교열 렌즈 · 브리프 §5).
//   ✱ ICM 비교는 «승률로 가중한 평균»(EN «average» 가중치 누락 · es 네이티브 렌즈 · 브리프 §5).
export const CALCULATOR_FAQ_PT: { q: string; a: string }[] = [
  {
    q: "Como funciona uma calculadora de odds de poker?",
    a: "Uma calculadora de odds (ou de probabilidades) de poker distribui todas as cartas que ainda faltam e conta quantas vezes cada mão ganha. Com todas as mãos conhecidas, esta calculadora enumera de forma exata cada combinação possível no flop e no turn (990 no flop num heads-up, 44 no turn; menos com mais jogadores, e no river o board já está completo). No pré-flop são 1,7 milhão de boards por confronto, e um adversário de mão aleatória multiplica isso de novo, então nesses casos ela roda 60.000 simulações aleatórias e avisa embaixo do resultado — o número varia cerca de 0,3 ponto de um cálculo para outro.",
  },
  {
    q: "Quais são as odds de AA contra KK?",
    a: "Os ases ganham dos reis no pré-flop cerca de 82% das vezes (81,9% na média de todas as combinações de naipes, com 0,5% de empate). AA contra AK suited fica em mais ou menos 88% a 12%, e KK contra AK suited, 66% a 34%.",
  },
  {
    q: "AK contra um par na mão é um coin flip?",
    a: "Quase, contra qualquer par abaixo de ases e reis, mas nunca é um 50/50 exato. AK offsuit tem cerca de 46–47% de equity contra 22–44, perto de 45% contra 55–99 e perto de 43% contra TT–QQ; AK suited ganha uns 2,5–3 pontos a mais. Contra KK cai para perto de 30% e contra AA para perto de 7%, então o rótulo só vale para os pares que ficam abaixo do ás e do rei.",
  },
  {
    q: "Quão precisa é a regra do 2 e 4?",
    a: "É um atalho de cabeça para as odds de um draw: com duas cartas por vir (flop → river), multiplique os seus outs por 4; com uma carta por vir (turn → river), por 2. Com 9 outs dá 36% e 18%; os números exatos estão na próxima resposta. A parte do × 4 fica a um ponto ou menos até 9 outs e daí em diante o exagero cresce cerca de um ponto a cada out a mais (15 outs são na verdade 54,1%, não 60%); a do × 2 fica abaixo do exato, e mais abaixo quanto mais outs você tem (1,6 ponto com 9 outs, 2,6 com 15). E o × 4 só vale quando você vai ver as duas cartas sem pagar de novo.",
  },
  {
    q: "Qual a chance de um flush draw completar em cada street?",
    a: "Na calculadora de outs, com 9 outs, um flush draw completa 35,0% das vezes do flop ao river (duas cartas por vir), 19,1% na próxima carta a partir do flop e 19,6% do turn ao river.",
  },
  {
    q: "Que fórmula a calculadora de pot odds usa?",
    a: "Call ÷ (pote depois da aposta + call) = a equity mínima de que você precisa. Por exemplo, pagar 3.000 quando o pote já tem 10.000 contando a aposta é 3.000 ÷ 13.000 ≈ 23,1%, então o call é lucrativo quando a sua equity passa de 23,1%. Uma aposta do tamanho do pote sempre exige 33,3%; uma de meio pote, 25%.",
  },
  {
    q: "De que pot odds preciso para pagar com flush draw?",
    a: "Se você enfrenta uma única aposta no flop, conte só a próxima carta: 9 outs entram 19,1% das vezes, então você precisa de pot odds melhores que uns 4,2 para 1 — ou de odds implícitas que cubram a diferença, o que exige que o adversário tenha fichas atrás e uma mão que vá pagar. Desconte bastante quando o seu draw não é para o nuts: um flush que não é o nut flush, quando recebe muita ação, costuma perder mais do que ganha para um flush maior. Se é garantido que você vê as duas cartas (um all-in), vale o número de duas cartas, 35,0%.",
  },
  {
    q: "Como usar a calculadora de odds implícitas?",
    a: "Abra a aba «Pot odds», ligue «Odds implícitas» e digite quanto você espera ganhar a mais nas streets seguintes se acertar. A calculadora soma isso ao pote e baixa a equity que o seu call precisa agora. Seja honesto com esse valor: ele só conta se o adversário tem essas fichas atrás e vai mesmo pagar quando o seu draw entrar.",
  },
  {
    q: "Como a calculadora mostra qual mão ganha?",
    a: "Na aba «Equity», coloque as cartas fechadas de cada jogador e as cinco cartas do board: com o board completo, ela diz quem ganha e com qual jogo, ou se o pote é dividido. Para avaliar uma mão só, coloque de 5 a 7 cartas na aba «Ranking de mãos» e a calculadora encontra sozinha a melhor combinação de cinco.",
  },
  {
    q: "Como usar a calculadora de ICM?",
    a: "Informe o número de jogadores, o stack de cada um e a estrutura de premiação (do 1º ao 6º). A calculadora mostra na hora quanto cada stack vale de verdade em dinheiro de premiação, ao lado do que um chip chop pagaria. Para decidir entre pagar e foldar, use duas vezes — uma com os stacks que você teria se ganhasse a mão e outra com os que teria se fosse eliminado — e compare a média, ponderada pela sua chance de ganhar a mão, com o seu valor se simplesmente foldar.",
  },
  {
    q: "O que significa o «valor de ICM» desta calculadora?",
    a: "O seu valor real em dinheiro de premiação: a parte da premiação restante que o seu stack deve receber, conforme a probabilidade de cada jogador terminar em cada posição. Não é a sua fatia de fichas: quando mais de uma posição é paga, dobrar as suas fichas nunca dobra o seu valor de ICM, e por isso o valor de ICM do chip leader fica abaixo da fatia de fichas dele.",
  },
  {
    q: "Quando vale a pena usar a calculadora de ICM?",
    a: "Sempre que os prêmios dependem da posição final e o dinheiro está perto: na bolha, na final table, quando alguém propõe um deal e nos satélites em que todos os prêmios valem o mesmo (uma vaga cada). Ela não serve para cash games, em que uma ficha sempre vale o que está escrito nela.",
  },
  {
    q: "Por que um call lucrativo em fichas pode perder dinheiro na premiação?",
    a: "Porque o chip EV conta fichas e o ICM conta dinheiro de premiação — não são a mesma coisa. Ganhar a mão soma fichas, mas ser eliminado tira todos os prêmios que você ainda podia alcançar, então o call pode ganhar em fichas e perder equity de premiação. É perto da bolha e nas final tables que os dois mais se separam, e por isso os ranges por ICM são mais fechados que os de chip EV.",
  },
  {
    q: "Quanto a calculadora de ICM tira do chip leader na bolha?",
    a: "No exemplo de bolha acima, o chip leader tem 40% das fichas mas só 33,3% do dinheiro de premiação — 6,7 pontos a menos —, e o menor stack vale mais do que a fatia de fichas dele. O motivo: o máximo que o chip leader pode levar é o prêmio do 1º lugar, e não a premiação inteira, enquanto ser eliminado tira dele todos os prêmios que ainda podia alcançar.",
  },
  {
    q: "Que números colocar na calculadora para um ICM deal?",
    a: "Coloque os stacks atuais e os prêmios que faltam; o «valor de ICM» de cada jogador é a base do deal. Na prática, a mesa costuma deixar uma parte combinada — muitas vezes a diferença entre o 1º e o 2º — para continuar jogando, e o floor para o relógio e confirma que todos os jogadores que restam concordam antes de pagar qualquer coisa.",
  },
  {
    q: "Quanto muda a divisão entre um chip chop e um ICM deal?",
    a: "O chip chop divide pela fatia de fichas; o ICM deal, pela probabilidade de cada jogador terminar em cada posição — o exemplo acima mostra a diferença ($276 contra $458 para o menor stack). O que cada clube chama de chip chop varia: muitos fazem um «save and chop» — todo mundo garante primeiro o próximo prêmio a ser pago e só o resto é dividido pelas fichas —, que fica perto do ICM, então pergunte antes de aceitar qualquer um dos dois.",
  },
  {
    q: "Como a calculadora de ICM mostra quando foldar na bolha?",
    a: "Coloque na calculadora de ICM os stacks que você teria se ganhasse a mão e se fosse eliminado: na bolha, o dinheiro de premiação que você perde ao ser eliminado é maior do que o que ganha ao levar o pote, como mostra o exemplo de bolha acima, então um call lucrativo em fichas pode ser perdedor em EV de premiação. Os stacks médios — e os curtos que não estão prestes a ser engolidos pelos blinds — devem evitar pagar all-ins em situações de coin flip. O outro lado: todo mundo também está foldando, então, como agressor, abra e dê re-shove com um range mais largo, e pague shoves com um range mais fechado.",
  },
  {
    q: "Posso usar uma calculadora de poker na mesa?",
    a: "Não nos torneios que seguem as regras da TDA. A versão 2024 das regras da Poker Tournament Directors Association (regra 5) diz que aplicativos de apostas, tabelas e outras ferramentas de estratégia de poker não podem ser usados na mesa, nem o jogador pode receber ou usar dados de estratégia de outra pessoa ou fonte, e que um jogador com a mão ativa não pode interagir com um aparelho eletrônico ou de comunicação nem operá-lo; aparelhos e ferramentas também ficam sujeitos às regras da casa e à regulamentação de jogos. Então esta calculadora é para se preparar antes, revisar as mãos depois e estudar — na mesa, valem a regra do 2 e 4 de cabeça e as tabelas acima decoradas.",
  },
];
