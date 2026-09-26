import type { Post } from "../posts";

// PT-BR: tradução do EN vigente; dados do exemplo de 2026-08-20.
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "Flop monotone: check com nut flush",
  seoTitle: "Flop monotone: por que o nut flush dá check",
  desc: "No Q-9-2 de espadas, a aposta grande aparece só em 3,2% do range do BB. Até o nut flush mistura check: veja o papel dos blockers.",
  tldr: "No Q♠9♠2♠, com as três cartas do flop do mesmo naipe, o big blind dá check em 88,8%, aposta pequeno em 8,0% e aposta grande em apenas 3,2%. O tamanho grande quase desaparece porque o topo está concentrado nos flushes: um flush pronto já recebe calls de apostas pequenas, e apostar mais sem flush concentra os calls adversários em flushes. Até o nut flush dá check em 69,9% na média; os flushes abaixo dele dão ainda mais check, em 81,4%.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-02",
  readTime: "10 min",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-pt.webp",
  imageAlt: "Resultado do solver GTO no Q♠9♠2♠: matriz do big blind quase toda verde para check, com algumas apostas pequenas",
  keepImagesInBody: true,
  tags: ["flop monotone", "nut flush", "blockers", "tamanho de aposta", "GTO", "reverse implied odds"],
  content: `
O flop é **Q♠ 9♠ 2♠**: três cartas, um só naipe. Você olha para A♠J♠. É o **nut flush**, o maior flush possível, já pronto no flop.

Quanto apostar? A vontade é aumentar o pote. O solver dá check com essa mão **83,4% das vezes.**

O flop monotone costuma causar confusão porque tanto as mãos feitas quanto as mãos sem valor se comportam de um jeito diferente do habitual. Todos os números abaixo vieram do [solver de poker gratuito](/pt/solver) do HoldemMaster.

:::stripe
Spot | Botão (BTN) abre 2,5bb → big blind (BB) paga (heads-up)
Flop | Q♠ 9♠ 2♠ (monotone — três cartas do mesmo naipe)
Pote · Stack | Pote 5,5bb · stack efetivo 97,5bb
Resultado | Aposta grande em 3,2% — o tamanho grande perde espaço
:::

> **Resposta rápida**
> Aposte pequeno ou dê check; quase nunca aposte grande. No Q♠9♠2♠, o big blind dá check em **88,8%**, aposta um terço do pote em **8,0%** e três quartos em apenas **3,2%**. O topo está concentrado em um tipo de mão: um flush pronto já recebe calls de uma aposta pequena, e apostar mais sem flush concentra os calls em flushes. Isso ajuda a interpretar por que o tamanho grande perde espaço para os dois jogadores; as frequências calculadas aqui são da primeira ação do BB.

## O que é um board monotone no poker?

**É um flop com as três cartas do mesmo naipe.** Aqui, Q♠ 9♠ 2♠: qualquer jogador com duas espadas na mão já tem flush. É a mais rara das texturas comuns e a que mais altera o valor das mãos, porque uma única carta do naipe pode valer mais que um par.

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre 2,5bb · BB paga · os demais foldam |
| Ranges | Aproximações de ranges padrão do poker online com 100bb |
| Flop | Q♠ 9♠ 2♠, monotone (três espadas) |
| Pote · Stack | Pote 5,5bb · stack efetivo 97,5bb |
| Tamanhos de aposta | Aproximadamente 33% e 75% do pote |
| Rake | Não incluído no modelo |
| Data da consulta | 2026-08-20, resultado do spot de estudo |

## Como o big blind joga o flop monotone?

**Check em 88,8%; aposta antes do agressor em 11,2%.** O BB sai apostando menos que no [board conectado 9-8-7](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp"), onde isso ocorre em 23,7%, mas muito mais que nos flops secos: 1,9% no A-7-2 e 0,2% no K-8-3.

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **88,8%** | 415,7 |
| Bet 1,8bb (33% do pote) | 8,0% | 37,4 |
| Bet 4,1bb (75% do pote) | **3,2%** | 14,9 |

O ponto interessante não é a divisão entre os tamanhos dentro das apostas: **o volume total de apostas caiu.** A aposta grande representa 29% do range que sai apostando, quase a mesma proporção do 9-8-7 (6,9 de 23,7). O que mudou foi o total: as apostas caíram de 23,7% para 11,2%, e as apostas grandes, de 6,9% para 3,2%. Ambas ficaram perto da metade.

Na interpretação desses ranges, a aposta grande pouco ajuda tanto quem tem flush quanto quem não tem; a pequena ajuda mais o primeiro grupo. Por isso, a estratégia se concentra em “pequeno ou check”. Não significa que a aposta grande foi retirada: **o big blind está apostando menos no total**, e o comportamento dos flushes prontos mostra melhor o motivo.

## Por que o tamanho grande perde espaço no flop monotone?

**Porque o topo das mãos possíveis está bem definido.** Q, 9 e 2 não são cartas conectadas, então nenhum straight flush é possível neste flop. **O maior flush possível exige A♠ e outra espada na mão.** O ás de espadas determina quem pode ocupar o topo dos dois ranges.

Nesse cenário, apostas grandes ficam menos atraentes para os dois lados.

:::compare
Se você tem flush | Se você não tem flush
Uma aposta grande faz a maioria das mãos sem flush foldar | Uma aposta grande concentra os calls em flushes
Uma aposta pequena mantém mãos de um par no pote | Uma aposta pequena custa pouco, mas não faz um par foldar
:::

**O tamanho pequeno ajuda um dos grupos; o outro tem pouco a ganhar com qualquer tamanho.** A interpretação é uma estratégia mais voltada a “pequeno ou check”. Este é o board da série que melhor mostra como o tamanho depende de **quais mãos do adversário podem pagar**, e não apenas da força da sua mão.

## Por que dar check com o nut flush?

**Porque quase nada consegue pagar.** Role a tabela de mãos do solver até o final e reúna os oito combos de nut flush: todas as mãos com A♠ e outra espada que o big blind pode ter neste range.

| Mão | Equity | Check | Bet 1,8bb | Bet 4,1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97,7% | **83,4%** | 14,3% | 2,2% | 229,9% |
| A♠T♠ | 97,7% | **84,2%** | 14,5% | 1,2% | 232,3% |
| A♠8♠ | 97,7% | **79,1%** | 17,4% | 3,5% | 232,6% |
| A♠7♠ | 97,6% | **56,0%** | 20,6% | 23,4% | 231,3% |
| A♠6♠ | 97,6% | **60,2%** | 22,0% | 17,9% | 232,6% |
| A♠5♠ | 97,6% | **64,1%** | 20,2% | 15,7% | 233,6% |
| A♠4♠ | 97,6% | **52,7%** | 24,1% | 23,2% | 237,3% |
| A♠3♠ | 97,6% | **79,7%** | 0,0% | 20,3% | 240,6% |

**A média é 69,9% de check.** Uma mão com 97,6% de equity, que praticamente não perde, dá check sete vezes a cada dez.

Por que só oito combos? Três combinações de ás com outra carta do mesmo naipe são impossíveis porque **Q♠, 9♠ e 2♠ já estão no board.** Das nove que restam, A♠K♠ dá 3-bet antes do flop e não chega neste range de call. Sobram oito.

O motivo do check está no que você pode ganhar ao longo da mão. Uma aposta grande faz a maioria dos pares e das cartas altas foldar; uma mão com uma espada pode pagar, mas não tem como completar um flush que vença o nut flush. De qualquer forma, parte do dinheiro que poderia entrar depois deixa de entrar. Ao dar check, você permite que o adversário aposte com seu próprio par ou blefe, criando oportunidades de receber mais no turn e no river.

Os números deixam isso claro: **realização de equity (EQR) de 230%**, mais que o dobro da parcela do pote correspondente à equity. O pote tem 5,5bb e A♠J♠ tem valor esperado (EV) de ==12,36bb==. O que ainda pode entrar vale mais que o dinheiro já no centro.

Os blockers aparecem na mesma tabela. **A♠J♠ e A♠T♠ dão check em mais de 80%, enquanto A♠7♠ a A♠4♠ caem para 52–64% e apostam muito mais.** Segurar J♠ ou T♠ bloqueia **os flushes abaixo do nut flush que contêm essas cartas**. ⚠ Não existe “flush de valete” neste board: Q♠ já está na mesa, então qualquer flush pronto tem pelo menos dama como carta mais alta, e o segundo maior flush é o de rei. J♠ e T♠ ocupam uma **posição de kicker** nesses flushes, como K♠J♠ e J♠T♠. São justamente mãos que poderiam *pagar* sua aposta. Retirá-las do baralho reduz o range de call, torna a aposta menos valiosa e aumenta a preferência pelo check. Kickers baixos não bloqueiam esses combos, deixando mais mãos que podem pagar; por isso, apostar diretamente fica mais atraente. (A♠3♠ voltar a 79,7% lembra que isso é uma tendência, não uma regra.)

## Os flushes abaixo do nut flush jogam diferente?

**Eles dão ainda mais check.** Há 33 combos de flush pronto neste board; os 25 sem A♠ dão check em **81,4%** na média, contra 69,9% dos nut flushes.

| Mão | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (nuts) | 97,7% | 83,4% | 229,9% |
| K♠J♠ | 94,0% | **91,8%** | 197,0% |
| K♠8♠ | 93,6% | **76,3%** | 193,0% |
| K♠6♠ | 93,6% | **61,0%** | 193,7% |

A equity muda pouco, de 97,7% para 94%, mas a EQR cai para 197%. **Você ganha menos quando vence.** O motivo é que um flush de rei só perde para um flush de ás, justamente a mão disposta a colocar muito dinheiro no pote. Ganhar pequeno e perder grande é o efeito das **reverse implied odds**, o oposto das [implied odds](/pt/blog/holdem-implied-odds).

## Quem tem mais flushes neste spot?

**O big blind: 7,1% contra 5,7%.** Mas, nos *draws* de flush, a vantagem se inverte. O BB joga fora de posição (OOP); o BTN, em posição (IP).

![Composição dos ranges do big blind e do botão por categoria de mão no board Q♠9♠2♠](/images/gto-srp-monotone-ranges-pt.webp "Q♠9♠2♠ · distribuição por categoria — o BB tem mais flushes prontos; o BTN, mais flush draws e A-high")

| Categoria | BB (OOP) | BTN (IP) |
|---|---|---|
| Flush (pronto) | **7,1%** | 5,7% |
| Flush draw (uma espada, incluindo combo draws) | 25,6% | **29,2%** |
| Top pair (Q) | 10,9% | **12,0%** |
| Overpair (KK, AA) | 0,0% | **2,5%** |
| A-high | 25,6% | **28,5%** |

⚠ A linha de flush draws é um valor **derivado**: o solver separa “Flush draw” e “Combo draw”, e uma mão com uma espada pode aparecer em qualquer uma das duas categorias. A soma é ==20,5 + 5,1 = 25,6%== para o big blind e ==24,1 + 5,1 = 29,2%== para o botão. Lembre disso ao conferir os números na tela.

A diferença começa antes do flop. **O big blind defende mãos fracas do mesmo naipe por um preço baixo**: J4s, J5s e 85s entram no range de call, e suas versões de espadas viram flushes. O botão não abre essas mãos neste range.

Em compensação, o botão tem muito mais **Ax e Kx de naipes diferentes com uma espada**. Ainda não são flushes, mas podem se tornar um. É aí que A♠ ganha uma função especial: permite completar o nut flush e garante que o adversário **não pode** ter esse flush.

## O que uma única espada muda na sua mão?

**O mesmo top pair vira outra mão dependendo de ter ou não uma espada.**

Considere Q♥J♦: top pair, sem espada. Já perde para **12,0%** do range do botão (flushes em 5,7%, overpairs em 2,5%, mais sets e dois pares). Também perde no kicker para **AQ e KQ**: Q♠ está no board e Q♥ está na sua mão, então restam duas damas, formando 8 combos de AQ e 8 de KQ. São **cerca de 3,4%** de 474, levando a parcela que já está à frente a aproximadamente **15,4%**. Além disso, outros **29,2%** podem ultrapassá-la com uma carta. ⚠ Quatro daqueles 16 combos de kicker também têm uma espada e já entram nos 29,2%; não basta somar os dois valores. Essa não é uma mão para extrair valor em três streets: ela pode pagar uma aposta para pegar um blefe.

Agora considere 9♥8♠: segundo par com uma espada. Pode ganhar agora ou melhorar depois, o que dá flexibilidade para apostar ou pagar.

**Um naipe muda toda a avaliação das mãos neste board.**

## Por que a EQR fica em 90 contra 109 com equity de 48 contra 52?

**Porque um board que mantém os potes menores também reduz o valor da posição.**

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47,7% | 52,3% |
| EV (bb) | 2,37 | 3,13 |
| **Realização de equity (EQR)** | **90,4%** | **108,8%** |

A parcela do pote correspondente à equity do big blind é ==5,5 × 47,7% = 2,62bb==, contra 2,37bb de EV, o que resulta nos 90,4% exibidos.

A diferença de 18,4 pontos percentuais é a segunda menor **entre os sete potes com um único aumento pré-flop**, atrás dos 13,2 do 9-8-7. ⚠ Na série inteira, ela é apenas a quinta menor: os spots entre os blinds K-T-6 (7,0) e A-A-6 (9,3), além do pote de 3-bet 8-5-2 (16,6), têm diferenças menores e envolvem outras posições. Quando as apostas grandes diminuem, as decisões difíceis também diminuem, e **o valor da posição depende das decisões que ainda restam.**

## O que muda na prática?

- **A aposta grande já é rara neste board monotone.** No resultado teórico, o tamanho grande do BB aparece em **3,2%**. ⚠ Não transforme isso diretamente em “foldar um par contra uma aposta grande”. Os 3,2% medem a frequência com que o BB **sai apostando**; quando você está *enfrentando* uma aposta, as frequências de tamanho do botão não estão disponíveis nesta resolução. Veja também a coluna do botão: 5,7% de flushes prontos contra **29,2%** de draws com uma espada, mais de cinco vezes essa quantidade. Ler toda aposta grande como flush faz você foldar para semiblefes. Ao enfrentar uma aposta grande, confira primeiro se **sua própria mão tem A♠.**
- **Não conduza um flush baixo por três apostas grandes.** O solver dá check com flushes abaixo do nut flush em 81,4% (nut flushes: 69,9%). Extraia valor com apostas pequenas e, diante de um aumento grande, dê bastante peso ao A♠ até ter evidência em contrário.
- **Ter A♠ torna uma mão candidata a blefe.** Apostar sabendo que o adversário não pode ter o nut flush é diferente de blefar sem essa informação.
- **Contra quem nunca folda um par, pare de fazer armadilhas.** A média de 69,9% de check pressupõe que o adversário aposta quando você dá check. Se ele só paga, aposte seus flushes e extraia valor.

:::readnext[Continue lendo]
/pt/blog/donk-bet-strategy | 9-8-7: a hora da donk bet | /images/gto-srp-middle-connected-oop-pt.webp
/pt/blog/broadway-board-strategy | Q-J-T: draws não bastam | /images/gto-srp-broadway-oop-pt.webp
:::

## Confira no app

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo** e escolha **Board monotone → ⚡ Ver resultados**.

Neste spot, a tabela de mãos no rodapé concentra a lição: **role até o final.** Compare por que A♠J♠ e A♠4♠ diferem em 30 pontos percentuais de check e como a mesma dama muda de valor dependendo de vir acompanhada de uma espada.

Depois, abra o **Treinador GTO** na barra lateral e pratique uma mão de flush nesse board: escolher uma ação e ver seu custo em EV ajuda a entender a decisão mais rápido que apenas ler uma tabela. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. O que é um flop monotone?**

A. É um flop com as três cartas do mesmo naipe, como Q♠ 9♠ 2♠. Duas cartas desse naipe na mão já formam flush; uma só forma um draw. É a textura que mais muda o valor das mãos, porque os naipes passam a pesar mais que os valores das cartas na avaliação da situação.

**Q. Devo sempre apostar um flush pronto num flop monotone?**

A. Não. Nesta resolução, os oito combos de nut flush dão check entre 52,7% e 84,2%, com média de 69,9%; os demais flushes dão check em 81,4%. Uma aposta grande faz a maioria dos pares e das cartas altas foldar, e uma mão com uma espada que pague não consegue completar um flush maior que o nut flush. Dar check para induzir uma aposta e receber mais ao longo do turn e do river pode render mais no total.

**Q. Por que o big blind tem mais flushes que o botão?**

A. Porque já investiu parte do valor para entrar no pote e defende mãos baratas do mesmo naipe, como J4s, J5s e 85s. Elas viram flushes no board monotone. O botão não abre essas mãos neste range, por isso tem 5,7% de flushes prontos contra 7,1% do big blind.

**Q. Qual é a chance de acertar um flush no flop?**

A. É rara o suficiente para tornar o próprio flop monotone incomum: você precisa de duas cartas do mesmo naipe na mão e das três cartas certas no flop. Os percentuais exatos de acertar e completar flushes estão no guia de [probabilidades dos draws](/pt/blog/holdem-drawing-odds). Aqui, a questão é o que fazer depois que esse board aparece.

**Q. Por que A♠ importa tanto mesmo sem flush pronto?**

A. Ele é um blocker: enquanto você o segura, o adversário não pode ter o nut flush. Isso retira o topo da defesa adversária e faz das mãos com A♠ candidatas naturais a blefe para o solver. O contrário também importa: com um flush baixo, um aumento grande merece mais respeito que o habitual.
`.trim(),
};

export default POST;
