import type { Post } from "../posts";

// PT-BR: tradução integral do EN revisado em 2026-09-02; foco no flop A-7-2.
// Números históricos e limites do exemplo preservados; navegação conferida em PT.
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "A-7-2: top pair também dá check",
  seoTitle: "C-bet no flop A-7-2: por que o BB dá check em 98,2%",
  desc: "No flop A-7-2, o BB dá check com 98,2% do range, inclusive top pair. Veja a diferença entre equity e realização de equity neste spot.",
  tldr: "No A♥7♦2♣, depois de uma abertura do botão e um call do big blind, o big blind dá check com 98,2% do range, incluindo top pair, dois pares e sets. A equity fica próxima: 45,1% contra 54,9%. A grande diferença está na realização de equity: 84,0% fora de posição contra 113,1% em posição.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "9 min",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-pt.webp",
  imageAlt: "Resultado do solver HoldemMaster no flop A♥7♦2♣: grade 13×13 do big blind quase toda verde, indicando check",
  keepImagesInBody: true,
  tags: ["c-bet no flop A-7-2", "flop seco", "vantagem de range", "GTO poker", "realização de equity"],
  content: `
O flop vem **A♥ 7♦ 2♣**, rainbow: três naipes diferentes. Você está no big blind (BB), fora de posição (OOP), com A9 — top pair. Sair apostando parece óbvio. Não é bem assim.

Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) da HoldemMaster, consultados no resultado do spot de estudo em 2026-08-19. Você pode abrir a mesma tela com um clique.

:::stripe
Spot | Botão (BTN) abre para 2,5bb → BB paga (heads-up)
Flop | A♥ 7♦ 2♣ (rainbow)
Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb
Resultado | BB dá check em 98,2% — praticamente todo o range
:::

> **Resposta rápida**
> Dê check e planeje continuar na mão. Quando um range escolhe a mesma ação com praticamente todas as mãos, inclusive as fortes, temos um **check com todo o range**. É o que o big blind faz aqui: as apostas dos dois tamanhos somam apenas 1,9%. Dar check não é desistir do pote. Você mantém os blefes do botão na mão, e top pair continua sendo uma mão para defender quando vier a c-bet.

## Quais condições produziram estes números?

O botão (BTN), em posição (IP), abre para 2,5bb, o big blind paga e todos os outros foldam. Dois jogadores chegam ao flop com um pote de 5,5bb e 97,5bb para trás. Os dois ranges são aproximações do padrão online com 100bb, o flop é A♥ 7♦ 2♣ rainbow e o solver pode usar dois tamanhos de aposta: aproximadamente um terço e três quartos do pote. O rake não é modelado. Mude qualquer uma dessas condições e as frequências também mudam.

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre para 2,5bb · BB paga · todos os outros foldam |
| Ranges | Aproximações do padrão online com 100bb |
| Flop | A♥ 7♦ 2♣, rainbow |
| Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb |
| Tamanhos de aposta | Aproximadamente 33% e 75% do pote |
| Rake | Não modelado |
| Data da consulta | 2026-08-19, resultado do spot de estudo |

O pote tem 5,5bb porque soma a abertura de 2,5bb do botão, o call de 2,5bb do big blind e os 0,5bb do small blind que foldou. A tela usa big blinds em todos os valores: as apostas aparecem como "Bet 1,8bb (33% do pote)" e o valor esperado como "EV (bb)".

## Qual é uma boa frequência de c-bet num flop seco com ás alto?

Depende inteiramente de qual jogador você é. Para quem aumentou pré-flop, num board tão seco, a referência é apostar pequeno em aproximadamente **70%–100% das mãos**, em heads-up e em posição. O guia de [continuation bet](/pt/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") detalha isso por tipo de board. Para quem apenas pagou, a resposta é **praticamente zero**.

A rigor, quem pagou nem tem uma c-bet: o termo descreve a aposta no flop de quem aumentou pré-flop. A aposta inicial do big blind seria um **lead**, ou donk bet. Mas é essa frequência que interessa quando você está desse lado da mão:

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **98,2%** | 455,5 |
| Bet 1,8bb (33% do pote) | 1,0% | 4,5 |
| Bet 4,1bb (75% do pote) | 0,9% | 3,9 |

Dos 464 combos, cerca de oito apostam: 1,9% somando os dois tamanhos, com arredondamento. Na prática, você pode simplificar: **o big blind não sai apostando neste board.**

## Por que o BB dá check até com top pair?

Porque é mais fácil ganhar esse pote começando com check. Sair apostando com um par, fora de posição e contra quem tomou a iniciativa pré-flop é uma forma cara de jogar uma mão com a qual você gostaria de chegar ao showdown.

Três fatores pesam contra o lead. Primeiro, a **realização de equity**: os números abaixo mostram o big blind realizando 84,0% da sua equity, contra 113,1% do botão. Aumentar o pote fora de posição faz essa diferença custar mais. Segundo, o botão faz c-bet com frequência alta neste flop: **o check mantém os blefes dele no pote**, enquanto o lead permite que essas mãos foldem sem colocar mais fichas. Terceiro, o range do big blind é limitado no topo: sem AA, AK ou AQ, uma aposta inicial abre espaço para um raise justamente das mãos contra as quais ele não consegue continuar.

O que um lead **não** faz é tirar mãos melhores do pote. O range de abertura do botão contém todos os ases até A2, além de underpairs e pares de sete. Portanto, várias mãos piores pagariam. Esse não é o problema. O problema é o tamanho do pote que você constrói para tentar ganhá-lo.

Também importa entender que "um ás" não descreve uma única força de mão. A9 perde no kicker para AK, AQ, AJ e AT. Já A7 e A2 nem são top pair: neste board, A7 forma ==A-A-7-7-2==, dois pares. O check com todo o range coloca todas essas mãos atrás da mesma ação, sem deixar o adversário distingui-las.

**E as mãos que apostam não são as primeiras que você imaginaria.** Abra a tabela de detalhes: os ases mais fortes permitidos no range do big blind apostam de vez em quando. A♣J♣ usa o tamanho pequeno em 14,5% das vezes; A♦J♦, em 12,2%; A♠J♠, em 7,1%; A♠T♠, em 4,5%. São frequências pequenas, mas vêm do topo do range, e não de mãos sem nada. Por isso, o check não equivale a uma simples desistência.

## O que é um board seco e por que este favorece quem abriu o pote?

Um board seco não oferece flush draw e quase não oferece draws de sequência: são três cartas desconectadas de naipes diferentes, como A♥ 7♦ 2♣. Quase nada está esperando uma carta para completar uma mão: **71,3% do range do big blind não tem draw**, e a maior parte do restante tem backdoor flush draw. O board favorece quem abriu porque o range do botão mantém AK e AQ, além de AJ, enquanto o range de call do big blind só chega até AJ. Os melhores ases ficam concentrados de um lado, e faltam draws para equilibrar a situação nas próximas streets.

![Composição dos ranges do big blind e do botão no flop seco A♥7♦2♣, com barras verdes e douradas lado a lado por categoria de mão](/images/gto-srp-dry-ace-ranges-pt.webp "A♥7♦2♣ · categorias de mão — mais top pair no botão, mais mãos sem nada no big blind")

O big blind joga fora de posição (OOP), agindo primeiro; o botão joga em posição (IP).

| Categoria | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trinca — aqui, sempre set | 1,3% | **1,9%** |
| Dois pares | 3,9% | 3,9% |
| Top pair | 20,7% | **25,9%** |
| Segundo par | 5,2% | 5,2% |
| Par fraco | 1,3% | 0,0% |
| Underpair | 9,1% | **13,0%** |
| K-high | **17,2%** | 16,4% |
| Sem mão feita | **41,4%** | 33,7% |

A diferença vem das mãos permitidas em cada range. O botão abre com todos os ases, de A2 a AK. O range de call do big blind **vai somente até AJ**: não contém AA, AK ou AQ, porque essas mãos dão 3-bet. O ás do board é o mesmo para os dois, mas top pair aparece 5,2 pontos percentuais a mais no botão, e os ases mais fortes ficam inteiramente desse lado.

Os sets contam a mesma história em combos. Os pares de mão que trincam neste flop são AA, 77 e 22, e **o big blind só tem 77 e 22**: três combos de cada, seis entre 464, ou os 1,3% da tela. O botão mantém os três pares: nove combos, 1,9%. A conta corresponde ao resultado do solver.

## O que significa vantagem de range quando a equity está próxima?

Ter vantagem de range significa que o conjunto de mãos de um jogador se conecta melhor com o board do que o do outro. No A♥ 7♦ 2♣, isso aparece pouco na equity bruta: 45,1% contra 54,9%, uma diferença de 9,8 pontos percentuais que está longe de ser um desastre. A diferença fica clara no quanto cada lado consegue realizar dessa equity. Nesse aspecto, os dois jogadores estão bem distantes.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 45,1% | 54,9% |
| EV (bb) | 2,09 | 3,41 |
| **Realização de equity (EQR)** | **84,0%** | **113,1%** |

Realização de equity é a proporção da sua equity que você efetivamente consegue aproveitar. A parte do big blind pela equity vale ==5,5 × 45,1% = 2,48bb==, mas seu valor esperado (EV) é 2,09bb: ele perde cerca de um sexto daquilo que, pela equity, "lhe pertence". Os 113,1% do botão significam que ele recebe **mais do que sua parte**, porque age por último e tem um range forte o bastante para pressionar. Os valores exibidos na tela estão arredondados; por isso, recalcular a EQR à mão produz uma diferença de até 0,3 ponto percentual em relação ao valor mostrado.

Posição e vantagem de range se somam aqui: o botão tem a maior parte da equity **e** a melhor taxa de realização. O princípio geral está no [guia de equity](/pt/blog/holdem-equity). Já o valor de agir por último é explicado no guia de [jogo em posição](/pt/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Quando o botão deve fazer c-bet num flop seco com ás alto?

Quase sempre, com tamanho pequeno — **contra adversários que foldam.** O big blind tem 41,4% de mãos sem mão feita e 71,3% sem draw. Assim, é fácil conseguir folds, e as mãos que continuam raramente melhoram. É o cenário clássico para apostar pequeno; por isso, a aposta de 33% do pote, 1,8bb, é a referência aqui.

Contra uma mesa que paga com qualquer coisa, "apostar pequeno com tudo" deixa de funcionar tão facilmente: ninguém folda, e você constrói potes com mãos que não querem isso. O ajuste é reduzir as tentativas de blefe e concentrar as apostas em valor.

A regra prática se estende a outros boards com uma condição: **o lado com vantagem de range, mas sem vantagem clara de nuts, aposta pequeno e com frequência.** Nos boards em que um jogador também concentra as mãos mais fortes, o tamanho aumenta. Veja como isso muda entre texturas no guia de [estratégia de continuation bet](/pt/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[O exemplo pré-calculado vai apenas até a primeira decisão no flop. Por isso, a frequência exata de c-bet do botão não está entre os números apresentados nesta página. Para obtê-la, abra "Resolver este spot você mesmo" e calcule a árvore de decisões.]:::

## O que muda na prática?

- **Depois de pagar uma abertura em heads-up, deixe de lado a ideia de sair apostando num flop seco com ás alto.** Inclusive com top pair. O lead constrói um pote que você terá de jogar fora de posição com um par: é justamente a diferença de 84% contra 113% mostrada acima. Potes de limp e disputas entre os blinds têm outra estrutura e estão fora deste spot.
- **Dar check não é jogar de check-fold.** É aqui que a frequência costuma ser mal interpretada. Contra a c-bet pequena do botão, o big blind continua com um range amplo: todos os ases, a maioria dos pares de sete, os underpairs e K-high com backdoor. **A9 é uma mão para check-call**, normalmente também no turn. Os check-raises vêm principalmente de 77, 22, A7 e A2, além de alguns blefes com backdoor.
- **No botão, aposte pequeno com um range amplo contra quem folda.** Contra quem nunca folda, ajuste em duas direções: menos blefes, porque esse jogador não vai desistir seja qual for a aposta, especialmente no turn e no river, onde o segundo e o terceiro disparos só geram perda; e apostas maiores por valor com **top pair ou melhor**. A9, com seu kicker fraco, não é uma mão para aumentar o tamanho: é uma mão com a qual você simplesmente não aposta nas três streets.
- **Contra um adversário equilibrado, check aqui não significa fraqueza.** O range de check contém sets, 77 e 22, e dois pares, A7 e A2. Pressionar demais pode encontrar um check-raise. Nos limites baixos, muitas vezes acontece o contrário: vários jogadores saem apostando com as mãos fortes, então o check realmente indica fraqueza. Continue apostando por valor e encare o check-raise como um custo ocasional, não como motivo para frear.

:::readnext[Continue lendo]
/pt/blog/holdem-continuation-bet | Continuation bet (c-bet): quando disparar no flop, quanto apostar e quando dar check | /images/holdem-continuation-bet-hero.webp
/pt/blog/holdem-position-play | Estratégia de posição: in position vs out of position | /images/holdem-position-play-hero.webp
:::

## Confira no solver de poker

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo → Board seco A-high → ⚡ Ver resultados** e esta mesma tela aparece na hora. Alterne o seletor de jogador entre OOP e IP para comparar os ranges. Ordene a tabela de detalhes por qualquer coluna para encontrar as mãos que apostam. Os exemplos são pré-calculados **apenas até a primeira ação no flop**. Para explorar turn e river, ou mudar um range e acompanhar as frequências, use **Resolver este spot você mesmo** e calcule a árvore.

Para praticar o spot, abra o **Treinador GTO** na barra lateral. Ele distribui uma mão do range real, você escolhe a ação e recebe o custo dessa escolha em big blinds. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. A7 é top pair num board A-7-2?**

A. Não. O 7 do board também forma um par com sua mão, então A7 faz ==A-A-7-7-2==: dois pares. Top pair seria um ás com um kicker que não acerta o board, como A9 ou A8. A7 e A2 somam 18 combos de dois pares, 3,9% do range do big blind, e essas mãos também dão check.

**Q. Dar check em 98,2% significa que eu nunca devo apostar?**

A. Como padrão, sim, nesta textura. Contra um adversário que quase nunca faz c-bet, você pode incluir alguns leads, mas **somente com mãos de valor**. Top pair e pares de sete constroem um pote que esse jogador nunca construiria por você. As mãos sem nada devem continuar dando check: um adversário passivo oferece cartas e showdowns gratuitos que valem mais do que tentar o blefe.

**Q. Qual é a diferença entre board seco e board molhado?**

A. Um board seco não tem flush draw e oferece poucos draws de sequência. Por isso, é menos provável que a mão que está na frente no flop mude nas próximas streets. Um board molhado, com cartas conectadas e dois naipes, como 9-8-7 com duas cartas de copas, oferece draws aos dois jogadores. Os ranges continuam amplos e as equities mudam, então as apostas aumentam e os check-raises ficam mais frequentes.

**Q. A realização de equity pode passar de 100%?**

A. Sim. Ela compara o que você efetivamente ganha com a parte do pote que sua equity representa. Posição e força de range podem elevar essa relação acima de 100%. Aqui, o botão realiza 113,1% e recebe mais do que seus 54,9% de equity bruta sugerem.

**Q. Estes números valem em qualquer limite?**

A. Use-os como referência quando as condições forem iguais: heads-up, 100bb, ranges padrão de abertura e call, sem rake modelado. Profundidade dos stacks, ranges e tamanhos de aposta diferentes mudam as frequências. Contra quem se afasta muito do padrão, nunca foldando ou nunca fazendo c-bet, ajuste também: estes números pressupõem que o adversário joga bem.
`.trim(),
};

export default POST;
