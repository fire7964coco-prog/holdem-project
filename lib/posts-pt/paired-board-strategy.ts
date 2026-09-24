import type { Post } from "../posts";

// PT-BR: tradução do EN vigente; dados do exemplo de 2026-08-20.
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "6-6-3: mais trincas, 97% de check",
  seoTitle: "Flop pareado 6-6-3: mais trincas, mas 97% de check",
  desc: "No 6-6-3, o BB tem 26 combos de trinca contra 20 do BTN e ainda dá check em 97%. Entenda por que contar trincas não resolve a estratégia.",
  tldr: "No flop baixo pareado 6♣6♦3♥, o big blind dá check em 97,0%. O curioso é que tem mais trincas que o botão: 26 combos com um seis contra 20. Ainda assim, dá check porque apenas 18,4% do seu range tem algo além do par do board; os outros 81,6% disputam o pote com cartas altas, terreno em que o botão leva vantagem. Os pares de mão acima do seis ganham valor: TT tem 76,0% de equity neste spot.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-24",
  readTime: "10 min",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-pt.webp",
  imageAlt: "Resultado do solver GTO no 6♣6♦3♥: matriz do big blind quase toda verde, com categorias de quadra e full house no painel",
  keepImagesInBody: true,
  tags: ["flop pareado", "trips e set", "pares de mão", "GTO", "frequência mínima de defesa"],
  content: `
O flop é **6♣ 6♦ 3♥**: cartas baixas, duas delas do mesmo valor. Parece um board que ninguém acertou.

Com TT, sua equity é **76,0%**. Esse mesmo TT tem cerca de 54–57% contra AK antes do flop, então este flop é *melhor* para ele que o conhecido coin flip. Com A9, você não acertou nada, mas quatro quintos do range adversário também não têm nada além do par do board. Foldar imediatamente abre mão da disputa pelo pote.

**Um board que ninguém acertou vira uma disputa para ver quem tem as melhores cartas altas.** Os flops com [ás alto](/pt/blog/a-high-board-cbet) e [rei alto](/pt/blog/k-high-board-cbet) giravam em torno de quem acertou alguma coisa. Aqui, a disputa ocorre entre dois ranges que, em sua maioria, não acertaram. Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) do HoldemMaster.

:::stripe
Spot | Botão (BTN) abre 2,5bb → big blind (BB) paga (heads-up)
Flop | 6♣ 6♦ 3♥ (board baixo pareado)
Pote · Stack | Pote 5,5bb · stack efetivo 97,5bb
Resultado | BB dá check em 97,0%, mesmo tendo mais trincas
:::

> **Resposta rápida**
> Dê check com quase tudo e defenda mais mãos do que parece natural. Ter um seis não é motivo para sair apostando: a aposta tende a fazer mãos que você já vence foldarem, então os seis permanecem no range de check. O big blind dá check em **97,0%** neste spot. Os pares de mão acima do seis ganham valor; A-high e os melhores K-high merecem mais defesa.

## Quais condições produziram esses números?

O botão abre para 2,5bb, o big blind paga e os demais foldam: dois jogadores, pote de 5,5bb, stacks restantes de 97,5bb, ranges padrão do poker online com 100bb, duas opções de aposta próximas de um terço e três quartos do pote, sem rake no modelo. Mudar os ranges ou os tamanhos também muda as frequências.

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre 2,5bb · BB paga · os demais foldam |
| Ranges | Aproximações de ranges padrão do poker online com 100bb |
| Flop | 6♣ 6♦ 3♥ (board pareado, três naipes diferentes) |
| Pote · Stack | Pote 5,5bb · stack efetivo 97,5bb |
| Tamanhos de aposta | Aproximadamente 33% e 75% do pote |
| Rake | Não incluído no modelo |
| Data da consulta | 2026-08-20, resultado do spot de estudo |

## Como trips e set se formam de maneiras diferentes?

**Set é uma trinca feita com um par na mão e uma carta do board; trips usa uma carta da mão e o par do board.** As duas têm a mesma classificação, trinca, na [hierarquia das mãos](/pt/blog/holdem-hand-rankings), mas a situação estratégica muda bastante.

Todos os outros flops de potes com um único aumento pré-flop nesta série formavam sets. O outro board pareado, A♠A♥6♦, aparece depois, no grupo entre os blinds. No A-7-2, o big blind precisava ter 77 ou 22 na mão. Aqui, o board traz seu próprio par: **qualquer seis na mão forma trips**, e 66 forma quadra.

| Sua mão no 6♣6♦3♥ | O que você tem |
|---|---|
| A6, K6s, 96s… qualquer mão com um seis | **Trips** — trinca de seis |
| 66 | **Quadra** |
| 33 | **Full house** — trinca de três com par de seis |
| TT, 99, 88, 77… | **Dois pares** — seu par e os seis do board |

A diferença importa porque trips aparece com muito mais frequência que set e **o adversário também pode ter essa mão com facilidade.** Um set é raro e geralmente é a melhor mão. Trips num board pareado é uma possibilidade para os dois ranges, por isso o solver não o trata como autorização automática para apostar.

## Como o big blind joga o flop baixo pareado?

**Check em 97,0%.** No 6♣6♦3♥, o big blind sai apostando em apenas 3,0% no total: 2,0% com 4,1bb e 1,0% com 1,8bb. Assim, devolve a iniciativa a quem abriu o pote. Vale prestar atenção no tamanho escolhido nas poucas apostas, porque é aqui que a preferência se inverte nesta sequência de exemplos.

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **97,0%** | 471,7 |
| Bet 4,1bb (75% do pote) | **2,0%** | 9,6 |
| Bet 1,8bb (33% do pote) | 1,0% | 4,7 |

**A aposta grande aparece mais que a pequena**, pela primeira vez nesta sequência. Nos dois boards em que sair apostando tinha peso relevante, a pequena superava a grande em mais de dois para um: 16,8% contra 6,9% no [spot de donk bet 9-8-7](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp") e 8,0% contra 3,2% no [flop monotone](/pt/blog/monotone-board-strategy). Aqui, a relação se inverte. A tabela por mão abaixo ajuda a explicar por quê.

## Por que o BB dá check mesmo com mais trincas?

**Porque trips representa apenas 5,3% do range.** Os outros 94,7% são, em sua maioria, o par de seis do board acompanhado de uma carta alta, e nesse aspecto o botão está à frente.

Primeiro, a contagem. Com 6♣ e 6♦ no board, restam apenas 6♠ e 6♥. Cada mão 6x *do mesmo naipe* tem dois combos; A6 de naipes diferentes tem seis. Toda a categoria depende desses dois seis restantes.

| Mão 6x | BB (range de call) | BTN (range de abertura) |
|---|---|---|
| A6 (mesmo naipe + naipes diferentes) | ✅ 8 combos | ✅ 8 combos |
| K6s · Q6s | ✅ 4 combos | ✅ 4 combos |
| **J6s · T6s · 96s** | ✅ **6 combos** | ❌ fora do range de abertura |
| 86s · 76s · 65s · 64s | ✅ 8 combos | ✅ 8 combos |
| **Total** | **26 combos = 5,3%** | **20 combos = 4,0%** |

**A diferença está em J6s, T6s e 96s: seis combos.** O big blind os defende por um preço baixo; o botão não os abre neste range.

Agora olhe o range inteiro e a vantagem muda de lado. O BB joga fora de posição (OOP); o BTN, em posição (IP).

![Composição dos ranges do big blind e do botão por categoria de mão no board pareado 6♣6♦3♥](/images/gto-srp-paired-ranges-pt.webp "6♣6♦3♥ · o BB tem mais trips; o BTN tem mais dois pares e A-high")

| Categoria | BB (OOP) | BTN (IP) |
|---|---|---|
| Quadra (66) | 0,2% | 0,2% |
| Full house (33) | 0,6% | 0,6% |
| Set/Trinca (um seis: trips) | **5,3%** | 4,0% |
| Dois pares | 12,3% | **15,5%** |
| A-high | 26,3% | **31,9%** |
| K-high | **16,5%** | 15,1% |
| Sem mão feita | **38,7%** | 32,7% |

**Mãos com algo além do par do próprio board somam 18,4% no big blind e 20,3% no botão.** Os outros **81,6%** do range do BB têm o par de seis acompanhado de cartas altas. O botão leva vantagem nessa disputa, com 31,9% de A-high contra 26,3%.

Sair apostando encontra dificuldades dos dois lados: com um seis, você tende a afastar as mãos que já vence; com o restante, expõe um range que sofre diante de um aumento. Por isso, os seis também ficam no range de check.

## Equity de 47 contra 53: por que a EQR fica em 84 contra 115?

**Porque o board afeta os dois ranges de forma parecida, mas eles não extraem o mesmo valor.** No 6-6-3, quase todo mundo tem o par de seis do board sem nada adicional, o que mantém a equity bruta próxima. O valor que cada jogador consegue realizar fica bem mais distante.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47,2% | 52,8% |
| EV (bb) | 2,17 | 3,33 |
| **Realização de equity (EQR)** | **83,7%** | **114,5%** |

A parcela do pote correspondente à equity do BB é ==5,5 × 47,2% = 2,60bb==, mas seu valor esperado (EV) é 2,17bb: ==2,17 ÷ 2,60 ≈ 83,7%==. A parcela do botão é 2,90bb, contra EV de 3,33bb; ele realiza **114,5%**, mais do que a equity bruta indicaria.

A diferença de **30,8 pontos percentuais** é quase igual aos 29,1 pontos do [board seco com ás alto](/pt/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-pt.webp"). **Um board pareado se comporta como um board seco:** cerca de quatro quintos dos ranges têm o mesmo par de seis com cartas altas diferentes. A mão tende a seguir com menos ação, e quem age por último observa o que o adversário faz antes de decidir. Essa vantagem explica a distância.

:::note[Os valores de EQR desta série são os exibidos pelo solver. Refazer a divisão com equity e EV arredondados pode produzir uma pequena diferença, da ordem de um décimo de ponto percentual: é efeito do arredondamento.]:::

## Qual é a força dos pares de mão no 6-6-3?

**Quase todo par de mão vira dois pares aqui.** TT forma T-T-6-6-3. As exceções são os pares que coincidem com o board: 66 forma quadra e 33 forma full house.

| Mão | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76,0% | 6,66 | 159,4% | 97,7% |
| 99 | 72,6% | 5,68 | 142,4% | 96,1% |
| 88 | 69,9% | 4,96 | 128,9% | 94,8% |
| 77 | 68,5% | 4,63 | 123,0% | 94,7% |
| 55 | 63,7% | 3,82 | 108,9% | 93,8% |
| 44 | 61,8% | 3,42 | 100,5% | 93,9% |
| 22 | 50,4% | 1,83 | 66,0% | 95,8% |

(Médias dos seis combos de cada mão; os combos individuais variam em cerca de um décimo de ponto percentual.)

**TT, com 76,0%, está no topo do range do big blind** depois de separar as mãos com um seis, 33 e 66: JJ e os pares maiores dão 3-bet antes do flop e não chegam a este spot.

**Na parte mais baixa, porém, há uma queda.** 44 realiza praticamente toda sua parcela de equity, com EQR de 100,5%, e ainda tem EV de 3,42bb contra a média de 2,17bb do range. Portanto, não é uma mão marginal. 22 é o caso que perde força: 50,4% de equity, EQR de 66,0% e EV de 1,83bb.

**A linha divisória é o três, não o seis.** 55 e 44 são menores que o seis e ainda realizam toda sua parcela. O dois está abaixo dos *dois* valores do board: perde para 33 e para qualquer mão com um três, e a chegada de outro três pode anular seu par, levando-o a jogar o board. A conclusão útil não é “pares baixos ficam bem em boards baixos”, mas **“os pares acima do três mantêm valor; o par de dois é a exceção que perde força”.**

Há outro grupo fácil de esquecer que também forma dois pares: **qualquer mão com um três.** A3 joga com seis e três, acompanhados do ás, vencendo 22 e perdendo para qualquer par de mão acima do três.

## Quantos combos de quadra e full house existem?

**Um combo de quadra e três de full house.** Dá para contar os dois grupos à mão.

- **Quadra (66):** com 6♣ e 6♦ no board, a única combinação restante é ==6♠6♥==. 0,2% de 486 combos equivale a 1,0, e a tabela de mãos tem exatamente uma linha.
- **Full house (33):** com 3♥ no board, restam ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0,6% × 486 = 2,9.

63 também formaria full house, mas nem 63 do mesmo naipe nem 63 de naipes diferentes estão nos ranges. **Toda a categoria de full house deste spot é composta por 33.**

Esses quatro combos ajudam a explicar por que boards pareados parecem perigosos. Na coluna EQR da tabela de mãos, 6♠6♥ realiza **359,7%** da sua parcela de equity, com EV de 19,78bb. Os três combos de 33 têm **309,8%, 309,8% e 309,5%**, de três a quatro vezes sua parcela do pote. São raros, mas podem disputar stacks inteiros.

## Por que a aposta grande aparece mais que a pequena?

**Porque trips e quadra preferem o tamanho grande nas poucas vezes em que apostam.** Veja por mão:

| Mão | Bet 4,1bb (75% do pote) | Bet 1,8bb (33% do pote) | Check |
|---|---|---|---|
| K♠6♠ | **7,8%** | 0,3% | 92,0% |
| Q♥6♥ | **7,9%** | 0,7% | 91,5% |
| J♥6♥ | **9,0%** | 3,3% | 87,7% |
| 6♠6♥ (quadra) | **9,6%** | 0,0% | 90,4% |
| T♠T♥ (dois pares) | 0,8% | 1,7% | 97,5% |

Trips e quadra às vezes usam o tamanho pequeno: K♠6♠ em 0,3%, Q♥6♥ em 0,7% e J♥6♥ em 3,3%. Mas o tamanho grande aparece várias vezes mais. A única linha com 0,0% na aposta pequena é 6♠6♥, **uma quadra, não trips.** Dois pares como TT quase não apostam e, quando apostam, preferem o tamanho pequeno.

A explicação está nas mãos com que o adversário pode pagar. Um seis está perto do topo neste spot, então há interesse em aumentar o pote. Como a maioria dos seis já dá check, **os poucos que apostam têm motivo para escolher um tamanho grande.** Dois pares perdem para qualquer seis e para os três combos de 33, por isso têm menos interesse em um pote grande. O grupo que quer aumentar o pote prefere evitar a aposta pequena; o que quer receber um call mais modesto evita a grande.

⚠ **Não leia isso como “quanto melhor o kicker, maior a aposta”: a tabela mostra o contrário.** A frequência da aposta grande segue K♠6♠ 7,8% < Q♥6♥ 7,9% < **J♥6♥ 9,0%**. O kicker mais fraco aposta mais. Não é possível atribuir essa diferença apenas ao bloqueio de trips pelo kicker: a carta seis na sua mão já elimina os combos suited daquele naipe, e K6o e Q6o não estão no range do botão. A tabela mostra a mistura calculada, mas não isola a causa dessas diferenças.

Isso não explica todas as apostas grandes: os seis são 26 dos 486 combos e contribuem com aproximadamente um quarto dos cerca de 9,7 combos de aposta grande. O restante vem de outras categorias.

O big blind sai apostando em apenas 3,0%, então essa decisão aparece pouco na prática. Ainda assim, demonstra um princípio: **o tamanho é escolhido em função dos ranges, não apenas da mão isolada.**

## Devo foldar A-high contra uma [c-bet](/pt/blog/holdem-continuation-bet)?

**Muito menos do que parece natural.** Apenas 18,4% do seu range tem algo além do par do board; foldar todo o restante entrega o pote com facilidade.

Contra uma aposta de 1,8bb em 5,5bb, impedir que um blefe puro tenha lucro exige continuar em aproximadamente ==5,5 ÷ (5,5 + 1,8) = 75,3%==. Essa estimativa é a **frequência mínima de defesa (MDF)**.

Somando todos os A-high (26,3%) e K-high (16,5%) àqueles 18,4%, você chega a apenas **61,2%**, abaixo dos 75,3%.

⚠ **Isso não significa automaticamente que você precisa defender mais.** A MDF trata a aposta adversária como blefe puro com equity zero, mas um blefe no flop ainda tem turn e river para melhorar, portanto tem equity. Além disso, o jogador fora de posição realiza sua equity com dificuldade. ⚠ Este exemplo não mostra onde está a defesa ideal: o resultado vai **apenas até a primeira decisão no flop**. A resposta do BB a uma aposta não está disponível, então **não é possível concluir por este material** se a frequência ideal de defesa fica acima ou abaixo da MDF.

Essa conta serve para lembrar que **uma carta alta não é motivo suficiente para foldar**, e não para impor uma meta de 75%. Muitos A-high e K-high ainda podem pagar aqui. Foldar todos eles contra uma única c-bet pequena é um hábito explorável.

(Num board pareado, ninguém tem literalmente apenas A-high: todos têm o par de seis do board. “A-high” aqui indica esse par acompanhado de um ás como melhor carta adicional.)

:::note[A MDF simplifica a aposta adversária como um blefe puro. Na prática, a frequência adequada também depende de quanto a mão realiza de equity nas streets seguintes; use-a como ponto de partida, não como regra fixa. O outro lado dessa conta está no guia de [pot odds](/pt/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), e a [defesa contra 3-bet](/pt/blog/holdem-3bet) aplica a mesma fórmula antes do flop.]:::

## O que muda na prática?

- **Não subestime pares de mão médios em flops baixos pareados.** De 77 a TT, a equity fica em 68–76% aqui, no topo do range de call. Mas há um limite: 44 e 55 ainda superam a média do range, enquanto 22 realiza apenas dois terços da sua parcela de equity, porque está abaixo dos dois valores do board.
- **Acertar trips no flop não é motivo para sair apostando.** As mãos com um seis apostam mais que as outras categorias neste spot, mas ainda dão check nove vezes a cada dez. Apostar tende a afastar mãos que você já vence; dar check permite que elas coloquem dinheiro no pote e deixa espaço para check-raise ou para pagar apostas. ⚠ O exemplo não informa *quanto* a mais a linha de check-raise rende: ele vai **apenas até a primeira decisão no flop**, sem frequência de c-bet do botão nem EV do check-raise.
- **Não folde A-high automaticamente contra uma aposta pequena.** 79,7% do range do botão também não tem nada além do par do board: A-high em 31,9%, K-high em 15,1% e sem mão feita em 32,7%.
- **O kicker decide a força do seu trips.** Só três combos de uma categoria superior podem vencer sua trinca: os três full houses de 33. A quadra deixa de ser possível quando você segura um seis; portanto, os quatro combos contados antes viram três do seu ponto de vista. E só dizer “três combos me vencem” é correto se seu kicker for um ás. O segundo kicker vem do 3 do board, então a carta ao lado do seu seis decide a comparação: com 76s, você está dominado pelos A6, K6, Q6 e 86 do botão. Trips com kicker fraco funciona como mão para pegar blefes, não como motivo automático para aumentar o pote.

:::readnext[Continue lendo]
/pt/blog/monotone-board-strategy | Flop monotone: check com nut flush | /images/gto-srp-monotone-oop-pt.webp
/pt/blog/donk-bet-strategy | 9-8-7: a hora da donk bet | /images/gto-srp-middle-connected-oop-pt.webp
:::

## Confira no app

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo** e escolha **Board pareado → ⚡ Ver resultados**.

Procure **a única linha de 6♠6♥** na tabela de mãos: a única quadra permitida neste board. Sua EQR de **359,7%** é a maior da série; a segunda é a de 6♥6♣ no [flop baixo rainbow](/pt/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-pt.webp"), com **318,9%**. Compare com as três linhas de 33 logo abaixo para ver como poucos combos ocupam o topo de um board pareado.

Depois, abra o **Treinador GTO** na barra lateral: ele distribui mãos usando os pesos reais dos ranges e avalia a perda de EV da sua decisão em big blinds. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. Por que trips fica mais vulnerável que set num board pareado?**

A. Porque o board facilita que os dois jogadores tenham a mão. Set exige um par na mão que combine com uma carta do board; trips precisa de uma carta que combine com o par já exposto. Por isso, o botão tem 20 combos de trips aqui contra 26 do big blind. Além disso, o segundo kicker vem do board: um seis com kicker fraco fica dominado por outro seis com kicker melhor. A [classificação da mão](/pt/blog/holdem-hand-rankings) é a mesma; a situação é diferente.

**Q. O que os pares de mão viram no board 6-6-3?**

A. Dois pares, em quase todos os casos: TT joga como T-T-6-6-3. As exceções são 66, que forma quadra, e 33, que forma full house. Mas nem todos os dois pares têm a mesma força: 22 está abaixo dos dois valores do board, perde para qualquer outro par de mão e cai para 50,4% de equity.

**Q. Por que quem pagou tem mais trips que quem abriu?**

A. Porque o big blind já investiu parte do valor para entrar no pote e defende mãos que o botão não abre. J6s, T6s e 96s formam exatamente esse grupo: seis combos extras, toda a diferença entre 26 e 20. O BB ainda dá check porque trips representa apenas 5,3% do seu range.

**Q. O que é frequência mínima de defesa?**

A. É uma estimativa de quanto você precisa continuar para impedir lucro automático de um blefe puro: pote ÷ (pote + aposta). Contra 1,8bb em 5,5bb, dá 75,3%. A conta pressupõe um blefe puro, condição que raramente descreve uma aposta real no flop. Ela orienta quanto evitar foldar, sem dizer exatamente quanto pagar.

**Q. Com que frequência o flop vem pareado?**

A. Em cerca de **17,2%** das vezes, aproximadamente um flop em seis. Para as três cartas terem valores diferentes, a segunda precisa evitar o valor da primeira, e a terceira precisa evitar os dois: ==(48 ÷ 51) × (44 ÷ 50) = 82,8%==. O restante contém par ou trinca. Um board pareado, portanto, aparece com frequência suficiente para exigir um plano. Ainda assim, não é o evento *mais* comum: uma mão inicial sem par não acerta nenhum par no flop em ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67,6%== das vezes, acertando pelo menos um par em **32,4%**, perto do dobro da frequência de um board pareado.

**Q. Esses números valem para o limite em que jogo?**

A. Use-os como referência quando as condições forem compatíveis: heads-up, 100bb, abertura de 2,5bb do botão com ranges padrão de defesa e sem rake. Um ajuste merece atenção: contra quem raramente faz c-bet em boards pareados, pode valer a pena sair apostando mais que os 3,0% do solver, já que o pote tenderia a seguir sem apostas.
`.trim(),
};

export default POST;
