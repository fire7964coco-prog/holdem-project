import type { Post } from "../posts";

// PT-BR: tradução do EN atual; probabilidades de uma carta e duas cartas têm escopos distintos.
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Q-T-7: 98,4% no mesmo tamanho",
  seoTitle: "Tamanho da c-bet no Q-T-7: 98,4% em dois terços",
  desc: "No Q-T-7 em pote de 3-bet, 98,4% do range aposta dois terços do pote. Compare o preço dos draws e os limites dessa conta de equity.",
  tldr: "No Q♥T♥7♠ em pote de 3-bet, o big blind aposta dois terços do pote (14,9bb) em 98,4% das vezes. A aposta pequena recebe 0,7%, e o check, 0,8% — juntos, pouco mais de um combo entre 73. No board anterior, A♦K♠2♥, o mesmo range dividia os tamanhos em 57,8% e 42,2%. O que faz essa divisão desaparecer é o preço que o caller precisa pagar para continuar com seus draws. Neste board com tantos draws, a aposta pequena cobra pouco.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "12 min",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-pt.webp",
  imageAlt: "Solver de poker GTO da HoldemMaster no pote de 3-bet Q♥T♥7♠, com quase toda a grade do big blind na cor da aposta de dois terços, usada em 98,4%",
  keepImagesInBody: true,
  tags: ["tamanho da c-bet no Q-T-7", "sizing em pote de 3-bet", "board com muitos draws", "aposta geométrica", "dois terços do pote"],
  content: `
No board anterior, o big blind apostava todo o range em [A♦K♠2♥](/pt/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-pt.webp") e dividia os tamanhos quase ao meio: 57,8% na aposta pequena e 42,2% na grande.

Agora o flop é Q♥ T♥ 7♠. Duas cartas de copas, e só falta o valete entre a dama e o dez. **Há muito mais draws, e a divisão desaparece:** dois terços do pote recebe ==98,4%==, enquanto o tamanho pequeno fica com 0,7%.

"Aposte grande em boards com muitos draws" é um conselho conhecido. O que costuma ficar de fora é o quanto isso pode se acentuar. Todos os números abaixo vêm do [solver de poker GTO grátis da HoldemMaster](/pt/solver).

:::stripe
Spot | BB faz 3-bet → BTN paga (heads-up)
Flop | Q♥ T♥ 7♠ (two-tone, conectado)
Pote · Stack | Pote 22,5bb · stack efetivo 89bb · SPR 4,0
Resultado | Dois terços do pote em 98,4% — a divisão entre tamanhos desaparece
:::

> **Resposta rápida**
> O big blind aposta **14,9bb, dois terços do pote, em 98,4% das vezes**. O tamanho pequeno, com 0,7%, e o check, com 0,8%, ficam tão perto de zero que não oferecem uma estratégia prática de mistura. A explicação está no preço. Um terço do pote exige cerca de ==19,8%== de equity do caller, valor que os quatro combos com flush draw do botão superam com folga na conta de uma carta. Dois terços exige cerca de ==28,5%==, e **só dois dos 40 combos de draw do botão ainda passam desse limite**: os combo draws de doze outs, que superavam a aposta pequena, já não chegam lá. No A-K-2, os tamanhos se dividiam porque todos os 63 combos tinham par ou melhor — um range sem a parte de baixo e sem draws dos quais cobrar.

## Quais condições produziram estes números?

**É o mesmo pote de 3-bet do board anterior; só mudou o flop.** O big blind fez 3-bet para 11bb, o botão pagou, e os dois veem Q♥T♥7♠ com 22,5bb no meio e 89bb para trás. Esses dois valores distinguem os potes de 3-bet dos potes com um único aumento desta série.

| Condição | Valor |
|---|---|
| Pré-flop | BTN abre → **BB faz 3-bet para 11bb** → BTN paga |
| OOP · IP | Fora de posição (OOP) = big blind (BB), quem fez a 3-bet · Em posição (IP) = botão (BTN), quem pagou |
| Flop | Q♥ T♥ 7♠ — duas cartas de copas, portanto **two-tone** |
| Pote · Stack | Pote 22,5bb · stack efetivo 89bb (**SPR 4,0**) |
| Tamanhos disponíveis | Cerca de um terço (7,4bb) e dois terços (14,9bb) do pote |
| Rake | Não considerado |
| Data da consulta | 2026-08-20 |

O pote de 22,5bb vem de ==11 da 3-bet + 11 do call + 0,5 do small blind que saiu da mão==, e o stack efetivo é ==100 − 11 = 89bb==. O solver usa big blinds em todos os valores; cada aposta aparece com seu valor e a proporção do pote.

## O range realmente usa um único tamanho?

**Na prática, sim: quase todo o range usa um tamanho.** Dos 73 combos, 71,9 escolhem dois terços do pote, enquanto a aposta pequena e o check dividem 1,1 combo. Os dois tamanhos estavam disponíveis na árvore, e o solver quase não usou um deles. Portanto, essa concentração resulta da estratégia, e não de uma restrição das opções.

| Primeira ação do big blind | Frequência | Combos |
|---|---|---|
| Bet 14,9bb (66% do pote) | **98,4%** | 71,9 |
| Check | 0,8% | 0,6 |
| Bet 7,4bb (33% do pote) | 0,7% | 0,5 |

Os combos não são números inteiros porque estão **ponderados pela frequência**: algumas mãos reservam uma parcela mínima para check ou aposta pequena e apostam grande no restante. Abaixo de um por cento, este resultado não permite separar uma mistura estratégica real de ruído de convergência do solver. Para uma aplicação prática, leia essas parcelas como zero. (Só o 0,1 ponto percentual que falta na soma das ações decorre do arredondamento.)

Coloque os dois potes de 3-bet lado a lado, e parecem jogos diferentes.

As duas linhas são potes de 3-bet com SPR 4,0 e o mesmo range de 3-bet com 14 tipos de mão.

| Flop | Um terço | Dois terços | Check |
|---|---|---|---|
| A♦K♠2♥ seco, rainbow | **57,8%** | 42,2% | 0,0% |
| **Q♥T♥7♠ two-tone, conectado** | 0,7% | **98,4%** | 0,8% |

## Por que este board com muitos draws prefere um tamanho grande?

**Porque o tamanho da aposta depende do que o adversário pode pagar para continuar, além da força da sua própria mão.** Conte os draws possíveis no botão e compare o preço de cada um com os dois tamanhos da árvore: a preferência fica mais clara. Em um board seco, essa contagem cai para perto de zero, o que ajuda a explicar por que a aposta pequena sobrevive no exemplo anterior.

| Draw | BB (quem fez a 3-bet) | BTN (quem pagou) |
|---|---|---|
| Combo draw | 2,7% | 3,0% |
| Flush draw | 2,7% | — |
| Sequência de duas pontas (OESD) | — | **4,5%** |
| Gutshot | **24,7%** | 22,6% |
| Backdoor flush draw | 26,0% | 27,1% |
| Sem draw | 43,8% | 42,9% |

**Contando só os draws imediatos, os dois lados chegam a 30,1%**: o big blind soma 2,7% de combo draw, 2,7% de flush draw e 24,7% de gutshot; o botão soma 3,0% de combo draw, 4,5% de duas pontas e 22,6% de gutshot.

🪶 Os backdoor flush draws ficam de fora de propósito. Exigem duas cartas seguidas do naipe necessário, o que acontece em apenas ==(10 ÷ 47) × (9 ÷ 46) = cerca de 4,2%== das vezes — uma chance pequena demais para ser o alvo dessa cobrança. E a tabela de draws é **uma classificação separada da tabela de mãos feitas**: um overpair com uma carta de copas também entra na linha de backdoor. No [flop K-high seco](/pt/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-pt.webp"), a linha "Sem draw" marcava 72,2% para o big blind e 77,7% para o botão. A diferença é enorme.

Aposte um terço do pote, 7,4bb, e o caller precisa de ==7,4 ÷ (22,5 + 7,4 + 7,4) = cerca de 19,8%== para continuar. Veja o que esse preço permite, contando uma carta por vez.

| Draw possível no botão | Combos | Outs | Próxima carta | vs. 1/3 (19,8%) | vs. 2/3 (28,5%) |
|---|---|---|---|---|---|
| Flush + duas pontas — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31,9%== | ✅ | ✅ |
| Flush + gutshot — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25,5%== | ✅ | ❌ |
| Duas pontas — K-J e 9-8 dos outros naipes | 6 | 8 | ==8 ÷ 47 = 17,0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8,5%== | ❌ | ❌ |

**Dos 40 combos de draw do botão, 38 ficam abaixo do preço de dois terços nessa conta.** K♥J♥ e 9♥8♥ combinam flush draw com duas pontas, e quinze outs superam **qualquer tamanho desta árvore pelas odds imediatas**. Mas são ==2 entre 40==, e ⚠ **os outs não são limpos.** O big blind tem exatamente quatro combos com duas copas — A♥K♥, A♥J♥, A♥5♥ e A♥4♥ —, e **todos contêm A♥**. A dama de copas está no board, então A♥Q♥ e K♥Q♥ não podem existir. Os flush draws de rei e nove do botão buscam nove cartas de copas contra um range cujos flushes são **todos o nuts**. Com SPR 4, uma carta de copas no turn pode transformar a mão em uma decisão pelo stack: é o risco das implied odds reversas. Ao reduzir para um terço do pote, o número de combos que passam do limite dobra para **quatro**, e os 30 gutshots restantes também recebem um preço muito menor para ver o turn. (Mãos feitas são outra questão: podem continuar pelo valor que já têm, sem depender apenas do preço de completar um draw.)

⚠ **A coluna acima calcula o preço de uma carta. Ver as duas é outra conta — e pode exigir novos pagamentos.** Com turn e river, o draw de quinze outs chega a ==cerca de 54,1%==, e o de doze outs, a ==cerca de 45,0%==; o draw de sequência de oito outs chega a ==31,5%==, e até um gutshot alcança ==16,5%==. O caller também tem posição, 74,1bb para trás depois do call e a opção de aumentar. **O tamanho grande cobra por esse conjunto de possibilidades.**

Há mais um ponto: **o caller também não pode simplesmente desistir de tudo.** Contra 14,9bb em um pote de 22,5bb, impedir o lucro automático de um blefe puro exige defender ==22,5 ÷ (22,5 + 14,9) = 60,2%== do range — a frequência mínima de defesa, ou MDF. As mãos feitas mais fortes do botão somam apenas **33,9%**: 6,8 de trinca, 20,3 de top pair e 6,8 de segundo par.

🪶 Mesmo assim, chegar a 60,2% não exige incluir draws: **33,9% de mãos feitas mais 36,1% de underpairs já somam 70,0%.** Mesmo que todos os 38 combos de draw sem preço imediato fossem descartados, sobrariam 71,4% do range, acima da referência. Assim, a aposta grande faz mais do que expulsar draws: ela **cobra caro para a parte intermediária do range do botão continuar**. Esses underpairs colocam dinheiro no pote diante de cartas acima do par e de todos os draws do board.

:::note[⚠ A MDF trata a aposta como um blefe puro, sem equity própria. Grande parte das mãos que apostam aqui não se encaixa nisso: 24,7% do range do big blind é gutshot, e um gutshot que depois desiste ainda tinha equity quando apostou. Use 60,2% como referência para pensar na defesa, não como uma cota obrigatória.]:::

🪶 Não resuma isso a "flush draw paga de qualquer jeito". Um flush draw sem draw de sequência tem nove outs: ==9 ÷ 47 = 19,1%==, abaixo até dos 19,8% exigidos pela aposta pequena. E **este range do botão não tem nenhum flush draw desse tipo**, como mostra o traço na tabela. Ele contém exatamente quatro mãos com duas copas, todas acompanhadas de draw de sequência: duas com gutshot e duas com duas pontas. Por isso, as quatro aparecem em "Combo draw". É verdade que um flush draw simples chega a ==cerca de 35,0%== até o river, mas essa não é a conta de uma carta usada aqui.

Para aprender a contar outs e avaliar o preço dos draws, veja [odds dos draws](/pt/blog/holdem-drawing-odds) e [pot odds](/pt/blog/holdem-pot-odds).

:::pull[O tamanho da aposta parte do preço que o adversário pode pagar para continuar.]:::

:::note[⚠ Textura parecida, conclusão oposta: os papéis mudam. Em um **pote com um único aumento**, o topo de um flop broadway two-tone favorece quem aumentou pré-flop, e o big blind, que só pagou, quase sempre dá check: no [Q♠J♦T♠](/pt/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-pt.webp"), são 99,9%. Conselhos como "aposte grande e polarize em boards com muitos draws", no [guia de c-bet](/pt/blog/holdem-continuation-bet), partem do lugar de quem aumentou. **A 3-bet troca esses papéis.** Aqui, o big blind tem o range que conecta e aposta com quase tudo. A textura sozinha não resolve a estratégia; primeiro, leia a ação pré-flop.]:::

## O que é um tamanho de aposta geométrico?

**É escolher uma fração do pote e repeti-la em cada street, de modo que a última aposta seja exatamente o all-in.** Com pote de 22,5bb e 89bb para trás, o pote final depois de três apostas e três calls precisa ser ==22,5 + 2 × 89 = 200,5bb==. Portanto, o pote deve crescer ==200,5 ÷ 22,5 = 8,91 vezes== em três streets. Isso corresponde a **cerca de 54% do pote, três vezes**.

O tamanho que o solver oferece aqui é maior, mas também permite colocar o stack:

- Flop: **14,9bb** → com call, o pote vai a 52,3bb, e sobram 74,1bb
- Turn: **34,5bb** → com call, sobram 39,6bb
- River: **39,6bb**, all-in

**==14,9 + 34,5 + 39,6 = 89,0==.** Três apostas colocam todo o stack no pote. A última é de 39,6 em um pote de 121,3, apenas ==cerca de 33%==. São duas apostas grandes e o restante do stack, portanto, e não três apostas grandes.

**Bem menos mãos podem planejar essa linha do que fazer a primeira aposta.** O flop recebe aposta em 98,4%. Considerando só a força, os candidatos a apostar nas três streets são os sets e overpairs, ==6 + 12 = 18 combos==, enquanto os A-high da parte de baixo apostam uma street e reavaliam. ⚠ Essa leitura vem das categorias, não de um resultado calculado para as streets seguintes: sem nó de turn ou river neste exemplo, a tela não confirma que esses 18 combos vão até o fim, nem define de que lado ficam os 15 combos de top pair. **É justamente com top pair que a decisão aperta**; pense no plano antes de apostar.

É esse o significado prático de um **SPR de 4,0**. Observe quantas apostas cabem no stack, além do dinheiro que sobra. Depois da aposta de 14,9bb e do call, o SPR do turn cai para ==74,1 ÷ 52,3 = 1,4==. A próxima aposta já pode exigir uma decisão pelo stack inteiro.

Por isso, o tamanho grande não diz respeito apenas ao flop. As equities dos draws até o river pressupõem ver as duas cartas, e o caller que paga dois terços pode enfrentar mais duas cobranças para vê-las. Começar pequeno reduziria o custo inicial, sem garantir cartas grátis depois.

## Por que mãos sem par apostam aqui?

**Porque 38,4% do range do big blind é A-high, e a maior parte busca uma sequência.** Dos 73 combos, 28 são A-high, e todos os 18 gutshots estão dentro desses 28. Não ter par não significa não ter equity: esses gutshots têm quatro outs para a sequência máxima, além da possibilidade de formar um par com uma carta da mão ou ganhar o pote imediatamente com folds.

| Os 28 combos de A-high | Combos | O que têm |
|---|---|---|
| AK | 16 | **Um valete** completa A-K-Q-J-T. Há 15 gutshots; A♥K♥ acrescenta o flush draw e vira combo draw |
| AJs | 4 | Busca o mesmo A-K-Q-J-T, mas precisa de **um rei**. Há 3 gutshots; A♥J♥ é combo draw |
| A5s · A4s | 8 | A♥5♥ e A♥4♥ são os dois flush draws sem draw de sequência |

Com dama e dez no board, **A-K e A-J buscam a mesma sequência A-K-Q-J-T, embora ainda não tenham par**. Se a aposta provoca folds, ganha o pote na hora; se recebe call, ainda há outs. Essa combinação sustenta a aposta.

JJ e 99 são o caso inverso. **Nenhuma das duas mãos tem draw imediato de sequência.** Os valetes, junto da dama e do dez do board, ainda precisam de duas cartas — rei e nove, ou ás e rei — para formar uma sequência. Elas têm par, uma força já feita; A-K é a mão que pode transformar tudo com uma única carta.

## O que o botão realmente tem?

**Mais de um terço do range, 36,1%, é underpair:** um par na mão abaixo da dama. O restante se divide entre mãos que conectaram com a dama, draws de copas e uma pequena parcela sem mão feita. Uma linha da tabela abaixo pode enganar à primeira vista; vale identificá-la antes de continuar.

![Composição dos ranges no pote de 3-bet Q-T-7 two-tone, com overpairs só no big blind e segundo par só no botão](/images/gto-3bp-dynamic-ranges-pt.webp "Pote de 3-bet Q-T-7 · overpairs pertencem ao big blind; segundo par, ao botão")

| Categoria | BB (quem fez a 3-bet) | BTN (quem pagou) |
|---|---|---|
| Trinca (set) | **8,2%** | 6,8% |
| Overpair | **16,4%** | — |
| Top pair (dama) | 20,5% | 20,3% |
| Segundo par (dez) | — | **6,8%** |
| Underpair | 16,4% | **36,1%** |
| A-high | **38,4%** | 24,1% |
| K-high · Sem mão feita | — | 6,0% |

Duas linhas concentram a explicação, e uma delas exige cuidado.

**Os overpairs pertencem mesmo a um só lado:** 16,4% para o big blind e nenhum para o botão, porque o range de call deste exemplo não contém **pares de mão** de ases ou reis. As cartas ás e rei, por sua vez, continuam presentes: 32 combos de A-K e A-J estão na linha de A-high. Isso é **uma configuração pré-flop inserida na árvore**, e não uma conclusão que o solver encontrou. Em outras soluções, algumas dessas mãos podem permanecer no call para proteger seu topo.

**As trincas não pertencem a um só lado, apesar da porcentagem maior do big blind.** 8,2% de 73 combos corresponde a 6; 6,8% de 133, a 9. **O botão tem mais sets aqui.** Uma parcela menor de um range mais amplo pode representar mais combos, e 133 contra 73 é uma diferença suficiente para inverter a contagem. O painel chama a linha de *Set/Trinca*. Em um flop sem par, quando o par da mão encontra uma carta igual no board, temos um **set**; a distinção é explicada no [exemplo de board pareado](/pt/blog/paired-board-strategy).

O segundo par só aparece no botão por uma razão estrutural: **o range de 3-bet do big blind não contém nenhuma mão com um único dez**. TT está no range, mas forma set no flop e sobe de categoria.

Top pair fica em 20,5% contra 20,3%. **As diferenças entre os ranges estão acima e abaixo dessa categoria, não nela.**

## Por que a EQR é 117,8% se a equity é 58,3%?

**Mesmo fora de posição, o big blind realiza 1,18 vez sua parcela do pote baseada em equity.** É mais que os 109,6% do A-K-2, mas **isso não torna este spot melhor**. O EV do big blind caiu: era 16,99bb no outro board e é **15,46bb** aqui.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,3% | 41,7% |
| EV (bb) | 15,46 | 7,04 |
| **Realização de equity** | **117,8%** | 75,1% |

Em um pote de 22,5bb, 58,3% de equity equivale a ==22,5 × 58,3% = 13,12bb==. Receber 15,46bb de EV corresponde a ==15,46 ÷ 13,12 = 117,8%==.

A distância de equity é menor que no A-K-2, onde era 68,9% contra 31,1%, mas a realização é maior. **Parte disso vem da redução do denominador.** A realização compara o EV com a própria parcela baseada em equity; quando a equity se aproxima de 50%, a mesma vantagem aparece como um múltiplo maior. ⚠ A parte maior da diferença, porém, vem de um ganho real acima dessa parcela. No A-K-2, o excedente era ==16,99 − 22,5 × 68,9% = cerca de 1,49bb==; aqui, é ==15,46 − 22,5 × 58,3% = cerca de 2,34bb==. Portanto, **o excedente também cresceu**. O que caiu foi a participação do big blind no EV total do pote: ==16,99 ÷ 22,5 = 75,5%== no A-K-2 contra ==15,46 ÷ 22,5 = 68,7%== aqui. EQR maior e parcela maior do pote são medidas diferentes.

Os 75,1% do botão também não são uma confirmação independente: os EVs dos dois lados somam o pote, então, quando um realiza mais de 100% de sua equity, o outro fica abaixo disso. O resultado se apoia na exclusividade dos overpairs, que permite cobrar caro das mãos intermediárias do botão. O valor habitual da posição é explicado em [como jogar em posição](/pt/blog/holdem-position-play).

:::note[Todos os valores de EQR desta série são citados como aparecem no solver. Recalcular com a equity e o EV já arredondados pode gerar uma diferença na casa decimal; isso é arredondamento, não divergência de estratégia.]:::

## O que muda na mesa?

Tudo abaixo pressupõe **heads-up, pote de 3-bet e SPR 4**. Acrescente um terceiro jogador ou reduza os stacks, e a conclusão de apostar quase todo o range deixa de ser garantida.

- **Escolha o tamanho a partir do board antes de olhar a própria mão.** Apostar grande com mãos fortes e pequeno com fracas torna sua estratégia legível. Aqui, o solver coloca 98,4% em um único tamanho.
- **Em pote de 3-bet com dois tipos de draw no board, considere primeiro o tamanho grande.** Um terço do pote oferece um preço de 19,8%, e todos os quatro combos com flush draw do botão passam desse valor com folga. ⚠ Isso não vira uma regra de "tem draw, aposte grande": **este artigo traz seu próprio contraexemplo.** No [board 8-5-2](/pt/blog/3bet-pot-low-board), 78,3% do range não tem draw, mas o tamanho grande também recebe 97,8%. Ali, a explicação é o **range polarizado**, e não os draws. Leia a densidade de draws junto da distribuição de força do range. Em pote com um único aumento, a mesma textura exige outra análise, como mostra a nota anterior.
- **A-K não precisa dar check neste flop só por estar sem par.** Com dama e dez, é um gutshot para a sequência máxima. Em um board sem essa conexão, **o mesmo A-K pode se aproximar do check**, mas não como regra: no 8-5-2 citado acima, o range aposta grande em 97,8% com A-K incluído. Ter ou não ter draw não resolve sozinho a ação de A-K, e os resultados agregados dos dois exemplos não fornecem sua frequência individual. A ideia prática é olhar primeiro a distribuição de força do range inteiro nesse board.
- **★Esta é uma resposta de flop, não um plano completo.** Apostar 14,9bb e receber call leva o SPR do turn a 1,4, e a próxima aposta praticamente coloca o stack em discussão. Decida antes se a mão pode seguir por esse caminho. **Uma carta de copas no turn afeta os dois lados**: completa os quatro combo draws do botão, mas também os seus quatro flush draws, todos com A♥. Quando você segura A♥, dois dos quatro combos de copas do botão ficam bloqueados. Para um A-high sem copas, o efeito é mais sutil: o valete necessário não desaparece, mas fica **contaminado**, porque J♥ também completa um flush. Um único tamanho de flop não resolve os três casos.
- **★Prepare a resposta a um raise.** Quando você aposta quase todo o range, quase todas as suas mãos podem enfrentar um aumento, e com SPR 4 isso pode exigir decidir pelo stack. Sets e overpairs são candidatos a continuar. **A-high sem duas copas — 24 dos 28 combos — é o candidato mais claro a fold**, já que um gutshot simples tem quatro outs. As quatro mãos de copas são candidatas a continuar; A♥K♥ e A♥J♥ são as mais fortes delas porque também têm gutshot. Top pair fica na decisão difícil, e um resultado só de flop não resolve essa resposta.
- **★No botão, planeje até onde os pares intermediários vão.** Underpairs representam 36,1% do range de call. ⚠ **A MDF de 60,2% não é uma cota de calls**: é uma referência calculada sob a hipótese de blefe puro sem equity, e **45,1% do range do big blind que aposta já tem mão feita** — 8,2 de trinca, 16,4 de overpair e 20,5 de top pair. Saber se a defesa ótima fica abaixo daquela referência exige uma resposta que **este resultado não fornece**. **O turn é o ponto de saída de muitos desses pares**: uma segunda aposta grande tende a expulsar a maioria deles, e pagar o flop sem pensar nisso pode custar caro. Como o nó de turn não está neste resultado, essa é uma leitura prática, não uma frequência calculada.

:::readnext[Continue lendo]
/pt/blog/3bet-pot-cbet | A-K-2: c-bet com todo o range | /images/gto-3bp-ace-king-oop-pt.webp
/pt/blog/3bet-pot-low-board | 8-5-2: overpairs mantêm a pressão | /images/gto-3bp-low-oop-pt.webp
:::

## Confira no solver de poker

Abra o [solver de poker GTO grátis](/pt/solver) e entre em **Spots de estudo → Board dinâmico two-tone → [⚡ Ver resultados]**.

Olhe primeiro a faixa de ações: **Bet 14,9bb (66% do pote) · 98,4% · 71,9 combos**. As outras duas opções ficam abaixo de um por cento. Depois, no seletor **Jogador:**, mude para **IP (BTN (caller))** e observe o que falta: o botão **não tem linha de Overpair nem de Flush draw**. Categorias com valor zero não aparecem no painel; essas duas ausências explicam boa parte do artigo.

Em seguida, abra o **Treinador GTO** na barra lateral. Ele distribui mãos de acordo com os pesos reais do range e avalia sua ação pelo EV perdido. É grátis, sem instalação e sem necessidade de conta.

Uma comparação útil é o board A-high do exemplo anterior. A♦K♠2♥ é rainbow, então **ninguém pode ter flush draw nele**, e todo o range do big blind tem par ou melhor. Aqui, "Sem draw" marca apenas 43,8%. ⚠ Os outros 56,2% não são todos draws imediatos: 26,0 pontos são **backdoors**, que precisam de duas cartas seguidas do naipe necessário e completam em cerca de 4,2% das vezes. Os draws imediatos somam 30,1%. **Essa linha sozinha, porém, não explica tudo:** no [flop 8-5-2](/pt/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-pt.webp"), mais adiante na série, "Sem draw" chega a 78,3%, e o tamanho grande ainda recebe 97,8%. A densidade de draws e a distribuição de força do range precisam ser lidas juntas.

## Perguntas frequentes

**Q. Quanto devo apostar no poker?**

A. Comece pelas possibilidades que o board dá ao adversário. No Q-T-7 com duas copas, há draws de flush e sequência, e o solver usa dois terços do pote em 98,4%. No A-K-2 seco, o mesmo range prefere um terço em 57,8%. Compare sempre o preço oferecido às mãos que ainda podem melhorar.

**Q. Por que apostar grande em um board com muitos draws?**

A. Para cobrar um preço ruim dos draws na conta imediata. Dois terços do pote exige cerca de 28,5% de equity, e apenas dois dos 40 combos de draw passam disso: K♥J♥ e 9♥8♥, com quinze outs e 31,9% na próxima carta. Os demais ficam abaixo, inclusive os combo draws de doze outs, com 25,5%. Um terço reduz a exigência para 19,8%, dobrando para quatro o número de combos que passam. Draws não são o único motivo para apostar grande: um range dividido entre mãos fortes e fracas, sem meio-termo, também chega a 97,8% em um [board seco como 8-5-2](/pt/blog/3bet-pot-low-board).

**Q. O que é uma aposta geométrica?**

A. É repetir a mesma fração do pote em cada street para que a última aposta seja exatamente o all-in. Isso pesa mais com SPR baixo, quando a escolha determina quantas decisões ainda cabem no stack. A conta deste spot e o motivo de o tamanho usado pelo solver ser maior que o geométrico estão detalhados acima.

**Q. Seria melhor usar uma overbet?**

A. Esta árvore só oferecia um terço e dois terços do pote, portanto não testou overbets. Ao acrescentar essa opção, os 98,4% poderiam se redistribuir entre dois terços e overbet: cobrar dos draws é uma razão para considerar esse tamanho. Mas essa redistribuição é uma hipótese, não um resultado medido. A frequência exata pertence a esta árvore.

**Q. Posso apostar A-K sem par aqui?**

A. Sim. Um único valete completa A-K-Q-J-T, então há um gutshot; 15 dos 18 combos de gutshot do big blind são A-K. Folds ganham o pote imediatamente, e calls ainda deixam outs. A conexão com o board sustenta a aposta, além das duas cartas altas.

**Q. E se o adversário pagar draws a qualquer preço?**

A. A fold equity diminui ou desaparece, e esses números deixam de descrever aquele adversário, pois pressupõem defesa ótima. Contra quem paga demais, priorize valor e reduza os blefes, mantendo o tamanho grande com as mãos de valor. O preço ruim que ele aceita pagar para buscar o draw é a fonte do ganho.

**Q. Esses números servem para o meu jogo?**

A. Como ponto de partida quando as condições coincidem. Mude o range de 3-bet, a profundidade dos stacks ou os tamanhos da árvore, e as frequências mudam; este exemplo também não considera rake. O padrão útil é que este board com muitos draws, em pote de 3-bet com SPR 4, favorece um tamanho grande. **As alturas das cartas importam tanto quanto os draws**: Q-T-7 tem cartas broadway suficientes para conectar com o range de 3-bet, algo que não acontece em todo flop com muitos draws.
`.trim(),
};

export default POST;
