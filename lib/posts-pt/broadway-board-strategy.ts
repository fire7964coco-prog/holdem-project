import type { Post } from "../posts";

// PT-BR: tradução integral do EN revisado em 2026-09-02; foco na vantagem de nuts no Q-J-T.
// Preserva os draws e as mãos prontas como classificações separadas.
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Q-J-T: draws não bastam",
  seoTitle: "Flop Q-J-T: muitos draws, quase nenhum lead",
  desc: "No Q-J-T com dois naipes, 68% do range do BB tem draw e 99,9% dá check. Entenda como a vantagem de nuts muda esse flop conectado.",
  tldr: "No Q♠J♦T♠, depois de uma abertura do botão e um call do big blind, o big blind dá check em 99,9%, embora 68,4% do seu range tenha draw. O botão tem vantagem de nuts: sequências em 10,5% contra 7,1%, sets em 2,0% contra 0,7% e overpairs em 2,6% contra 0%. A realização de equity fica em 77,9% contra 119,4%, a maior diferença entre os três flops apresentados até aqui.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "10 min",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-pt.webp",
  imageAlt: "Resultado do solver HoldemMaster no flop Q♠J♦T♠: grade do big blind verde para check e painel de draws à direita",
  keepImagesInBody: true,
  tags: ["vantagem de nuts no Q-J-T", "vantagem de range e de nuts", "flop Broadway", "board two-tone", "GTO poker", "realização de equity"],
  content: `
O flop vem **Q♠ J♦ T♠**. Você tem KQ no big blind (BB), fora de posição (OOP): top pair e draw de sequência de duas pontas. Dar check com tudo isso parece errado.

Os dois spots anteriores, com [ás alto](/pt/blog/a-high-board-cbet) e [rei alto](/pt/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-pt.webp"), eram boards em que quase não havia draws. Aqui acontece o oposto: **68,4% do range do big blind tem draw.** Mesmo assim, o solver dá check em ==99,9%==. Sair apostando ficou *ainda mais raro*.

"Há muitos draws" e "você pode sair apostando" são afirmações diferentes. Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) da HoldemMaster, consultados no resultado do spot de estudo em 2026-08-19.

:::stripe
Spot | Botão (BTN) abre para 2,5bb → BB paga (heads-up)
Flop | Q♠ J♦ T♠ (two-tone — duas espadas)
Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb
Resultado | BB dá check em 99,9% — muitos draws, quase nenhum lead
:::

> **Resposta rápida**
> O big blind dá check em **99,9%** no Q♠J♦T♠, mesmo com draws em 68,4% do range. O motivo é a **vantagem de nuts**, a maior concentração das mãos mais fortes: o botão tem sequências em 10,5% contra 7,1%, sets em 2,0% contra 0,7% e overpairs em 2,6% contra 0%. As categorias mais fortes favorecem o botão; só dois pares fica praticamente empatado, em 6,0% para o BB contra 5,9% para o BTN. Assim, sair apostando tende a tirar do pote as mãos que você vence e receber calls das que o vencem.

## Quais condições produziram estes números?

A estrutura é a mesma dos exemplos anteriores: o botão (BTN), em posição (IP), abre para 2,5bb, o big blind paga e todos os outros foldam. São dois jogadores, pote de 5,5bb, 97,5bb para trás, ranges padrão online de 100bb e dois tamanhos de aposta disponíveis, aproximadamente um terço e três quartos do pote. Só o flop mudou.

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre para 2,5bb · BB paga · todos os outros foldam |
| Ranges | Aproximações do padrão online com 100bb |
| Flop | Q♠ J♦ T♠, two-tone (duas espadas) |
| Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb |
| Tamanhos de aposta | Aproximadamente 33% e 75% do pote |
| Rake | Não modelado |
| Data da consulta | 2026-08-19, resultado do spot de estudo |

## Por que dar check em 99,9% num board tão molhado?

**Porque a *qualidade* das mãos prontas determina a ação, e não a *quantidade* de draws.**

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **99,9%** | 452,5 |
| Bet 1,8bb (33% do pote) | 0,1% | 0,3 |
| Bet 4,1bb (75% do pote) | 0,0% | 0,2 |

No flop seco com rei alto, eram 99,8%. **O board passa a dar draw a dois terços do range, e o check fica ainda mais próximo de 100%.** É essa inversão que torna o spot útil para estudo.

## Quem tem vantagem de nuts no Q-J-T?

**Quem concentra o topo do range.** No Q-J-T, a ordem das categorias é sequência → set → **dois pares** → overpair. O botão aparece à frente em todas elas, exceto dois pares.

| Categoria forte | BB (OOP) | BTN (IP) | O que explica a diferença |
|---|---|---|---|
| Straight | 7,1% | **10,5%** | O big blind **não tem AK** |
| Set/Trinca (set) | 0,7% | **2,0%** | O big blind **não tem QQ nem JJ** |
| Dois pares | **6,0%** | 5,9% | Praticamente empatado — a única linha em que o big blind fica à frente |
| Overpair | 0,0% | **2,6%** | O big blind **não tem AA nem KK** |

Não inverta a ordem: **dois pares é a terceira melhor categoria aqui, acima de overpair.** No Q-J-T, JT forma ==J-J-T-T-Q==, dois pares, enquanto AA continua sendo um único par. Portanto, dizer que "todo o topo pertence ao botão" seria exagero. A conclusão ainda se sustenta: as duas categorias realmente próximas dos nuts, sequências e sets, favorecem o botão. A categoria empatada perde para ambas neste board.

Cada diferença nasceu pré-flop. O big blind dá 3-bet com AA, KK, QQ, JJ e AK, então nenhuma dessas mãos chega ao flop neste range de call. O botão abre com todas elas e as mantém no range.

Os combos correspondem à diferença. Só três mãos fazem sequência aqui: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)== e ==98 (Q-J-T-9-8)==. Nenhuma das cartas de que elas precisam — ás, rei, nove e oito — está no board. Por isso, cada mão tem 4 × 4 = 16 combos. O big blind tem K9 e 98, somando **32 combos**; o botão acrescenta AK e chega a **48**. Aplicar os 7,1% e 10,5% exibidos pelo solver aos respectivos ranges resulta em 32,2 e 48,1 combos: os mesmos totais, dentro do arredondamento.

**Toda a diferença vem de uma mão: AK.** Uma única decisão de 3-bet pré-flop desloca essa parcela das melhores mãos do flop.

## Qual é a diferença entre vantagem de range e vantagem de nuts?

**Vantagem de range indica quem é mais forte na média; vantagem de nuts indica quem concentra mais das melhores mãos.** As duas costumam caminhar juntas. Este flop mostra como elas podem ter intensidades diferentes.

| | Vantagem de range | Vantagem de nuts |
|---|---|---|
| Pergunta que responde | Qual range tem mais equity no conjunto? | Quem tem as melhores mãos? |
| No Q-J-T | Quase equilibrada — 46,7% contra 53,3% | Desigual — sequências, sets e overpairs favorecem o botão |
| O que influencia | Se você pode apostar | **Quanto apostar e quem pode aumentar** |

A equity média sugere uma disputa próxima de meio a meio. O topo do range mostra que um lado tem mãos capazes de suportar raises contra apostas grandes, enquanto o outro tem dificuldade para fazer essas apostas. Quando os dois indicadores divergem, **a vantagem de nuts determina o tamanho** e, para quem não a tem, ajuda a explicar por que sair apostando não é uma opção.

## Quanto de cada range tem draw?

**Contando somente draws imediatos: 68,4% para o big blind e 68,7% para o botão.** Com os backdoor flush draws, os valores chegam a 75,2% e 74,4%: cerca de três quartos dos dois ranges.

![Composição dos ranges do big blind e do botão no flop Broadway Q♠J♦T♠, conectado e com duas cartas de espadas](/images/gto-srp-broadway-ranges-pt.webp "Q♠J♦T♠ · categorias de mão — as quatro primeiras linhas explicam a estratégia do flop")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (sequência + flush) | 5,3% | 4,1% |
| Flush draw | 2,4% | 2,0% |
| OESD (sequência de duas pontas) | 28,7% | 27,7% |
| Gutshot | 32,0% | 34,9% |
| Backdoor FD | 6,8% | 5,7% |
| Sem draw | **24,7%** | **25,5%** |

**Os draws estão distribuídos de forma quase igual.** No flop com rei alto, 72,2% do range do big blind não tinha draw algum. Aqui, essa proporção cai para um quarto. Esta é uma classificação separada da categoria de mão: cada tabela soma 100% por conta própria. O painel de draws conta **somente o que ainda pode ser completado**. Uma sequência pronta com duas espadas, como K♠9♠, aparece numa linha de flush draw; uma sequência sem nenhum draw adicional fica em "Sem draw".

Assim, a disputa neste board não se decide por quem tem mais draws. Os draws são parecidos dos dois lados; a vantagem de nuts permanece desigual. Se você quer reforçar a contagem de outs, comece pelo guia de [probabilidades dos draws](/pt/blog/holdem-drawing-odds).

## Por que top pair exige cuidado aqui?

**Porque 21,0% do range do botão já vence top pair.** São 10,5% de sequências, mais 2,0% de sets, 5,9% de dois pares e 2,6% de overpairs.

No flop seco com rei alto, a mesma conta dava **3,6%**: sets em 1,9%, dois pares em 0,4% e overpairs em 1,3%.

| Parcela do range do botão que já vence top pair | |
|---|---|
| Flop seco com rei alto (K-8-3) | 3,6% |
| **Flop Broadway (Q-J-T)** | **21,0%** |

**O nome "top pair" é o mesmo, mas o risco é cerca de seis vezes maior.** À parte disso, 68,7% do range adversário tem algum draw — outro eixo, que se sobrepõe às mãos prontas que já estão à sua frente, e não 68,7% a mais somados a elas —, então até mãos que você vence agora podem passar à frente no turn e no river. Apostar por valor nas três streets com um par no Q-J-T faz você enfrentar ação forte que quase nunca consegue vencer. É um pote para controlar, sem tentar inflá-lo.

## Por que a realização de equity (EQR) é 78 contra 119 se a equity é 47 contra 53?

**Porque, quanto mais decisões um board exige, mais vale agir por último.**

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,7% | 53,3% |
| EV (bb) | 2,00 | 3,50 |
| **Realização de equity (EQR)** | **77,9%** | **119,4%** |

O cálculo da realização de equity está detalhado no [spot com rei alto](/pt/blog/k-high-board-cbet). Aqui, a parte do big blind pela equity é ==5,5 × 46,7% = 2,57bb==, contra um valor esperado (EV) de 2,00bb: daí os 77,9%. O botão transforma uma parte de 2,93bb em 3,50bb.

Coloque os três flops lado a lado e aparece uma tendência clara.

| Flop | EQR do BB | EQR do BTN | Diferença |
|---|---|---|---|
| A-7-2 (seco) | 84,0% | 113,1% | 29,1 pontos percentuais |
| K-8-3 (seco) | 80,7% | 116,7% | 36,0 pontos percentuais |
| **Q-J-T (conectado, two-tone)** | **77,9%** | **119,4%** | **41,5 pontos percentuais** |

Esses três spots sugerem que *mais draws significam uma diferença maior*. **A regra já falha no próximo exemplo**: o [9♥8♥7♣](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp") também tem três cartas consecutivas e dois naipes, mas a diferença é de **13,2 pontos percentuais, a menor entre os sete potes com uma única abertura pré-flop**. O big blind realiza 93,2%, a maior EQR desse grupo de sete. Na série inteira, os 117,8% do pote de 3-bet no Q-T-7 são maiores.

O que amplia a diferença não é o número de draws, mas **qual range concentra as mãos fortes que o board permite**. O Q-J-T aproveita AK, QQ, JJ, AA e KK do botão. No 9-8-7, essas mesmas cartas não acertam o board. ⚠ Isso não as torna irrelevantes: os overpairs no 9-8-7 ficam em **1,3% contra 6,4%**, uma diferença maior do que os 0% contra 2,6% do Q-J-T. Mas a vantagem de overpairs é frágil num board conectado, e por isso não garante o controle do topo do range. Veja por que agir por último vale tanto no guia de [jogo em posição](/pt/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Como o botão deve apostar num board dinâmico como este?

**A estratégia não se limita a apostas pequenas: o tamanho grande passa a fazer parte da mistura.** Com vantagem de nuts, apostar grande dificulta que o adversário responda com um raise. A concentração de sequências, sets e overpairs, em sua maioria, de um lado (o big blind tem só 7,1% de sequências e 0,7% de sets) deixa menos espaço para o outro reagir com agressividade.

É uma mudança em relação à receita dos boards secos. Neles, apostar pequeno e com frequência funcionava porque o objetivo era fazer mãos sem nada foldarem. Aqui, **68,4%** do range adversário tem draw, então **é mais caro conseguir folds**. Só o tamanho pequeno não resolve, e o grande precisa entrar na estratégia. ⚠ Isso não permite concluir "logo, a frequência diminui": este exemplo resolve apenas a primeira ação no flop, então não informa a distribuição dos tamanhos nem a frequência real de c-bet do botão. A comparação entre texturas está no guia de [estratégia de continuation bet](/pt/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Os números acima vêm do resultado do solver; esta seção os interpreta. O exemplo pré-calculado vai apenas até a primeira ação do big blind, então a distribuição dos tamanhos de aposta do botão não aparece nesta tela. Abra "Resolver este spot você mesmo" e calcule a árvore para obter esses números.]:::

## O que muda na prática?

- **Ter um draw não é motivo para sair apostando do big blind.** Os dois jogadores têm proporções parecidas de draws, então possuir um draw não cria vantagem por si só. Sair apostando com ele encontra as mãos prontas que só o adversário tem.
- **Não tente extrair três streets de valor com top pair no Q-J-T.** Já há 21,0% do range adversário à frente, e boa parte do restante tem draw contra você. Começar pagando tende a ser melhor do que apostar de frente contra esse range.
- **Lembre-se do que existe dentro desse check.** Os 99,9% do big blind incluem 32 combos de sequências, K9 e 98, e 27 combos de dois pares. Essas mãos não dão check por fraqueza: **o botão faz c-bet com frequência alta neste board, então passar a ação pode render mais do que sair apostando**, além de evitar que o range de check fique só com mãos sem nada. Portanto, não interprete o check como ausência de força nem descarte um check-raise. ⚠ A *frequência* desse check-raise não pode ser determinada nesta resolução: o exemplo para **na primeira ação do flop**. Tudo o que vem depois exige "Resolver este spot você mesmo".
- **Contra quem nunca folda draws, aumente o tamanho em vez de apostar mais vezes.** Tentar comprar folds é o que falha aqui; cobrar dos draws é o que funciona.

:::readnext[Continue lendo]
/pt/blog/k-high-board-cbet | K-8-3: 99,8% de check | /images/gto-srp-dry-king-oop-pt.webp
/pt/blog/a-high-board-cbet | A-7-2: top pair também dá check | /images/gto-srp-dry-ace-oop-pt.webp
:::

## Confira no solver de poker

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo → Board Broadway conectado, two-tone → ⚡ Ver resultados** e a tela aparece na hora.

Neste spot, observe o **painel Draws à direita**: OESD, os draws de sequência de duas pontas, e gutshots somam mais de 60%, pela primeira vez nesta série. Depois, no seletor de jogador, escolha **IP (BTN (open-raiser))** e veja a linha Straight, com 10,5%. Essa linha sustenta toda a explicação.

Para praticar, abra o **Treinador GTO** na barra lateral. Ele distribui mãos usando os pesos reais do range e avalia sua ação em big blinds perdidos. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. Quais mãos fazem sequência no Q-J-T?**

A. Três: AK faz A-K-Q-J-T, K9 faz K-Q-J-T-9 e 98 faz Q-J-T-9-8. Nenhuma das cartas de que essas mãos precisam — ás, rei, nove e oito — está no board. Por isso, cada mão tem 4 × 4 = 16 combos, 48 no total. O big blind dá 3-bet com AK pré-flop, ficando com 32.

**Q. Um board molhado não é bom para sair apostando como semiblefe?**

A. A quantidade de draws não decide isso sozinha. É preciso considerar a distribuição das mãos prontas, a vantagem de nuts e os blockers. Aqui, os draws de duas pontas ficam em 28,7% contra 27,7%, praticamente iguais. Já as sequências prontas ficam em 7,1% contra 10,5%, a favor do botão. Para sustentar um lead, o topo do range precisa ajudar você, não apenas a força média. Este flop mostra o cenário contrário. Há um board no conjunto de estudo em que a condição aparece: o [9-8-7 médio conectado](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp"), em que o big blind sai apostando em 23,7% das vezes, em vez de quase nunca.

**Q. Vantagem de range e vantagem de nuts são a mesma coisa?**

A. Vantagem de range trata da média: qual range tem mais equity considerando todas as mãos. Vantagem de nuts trata do topo: quem concentra as mãos mais fortes, que no Q-J-T seguem a ordem sequência, set, dois pares e overpair. A equity fica próxima, em 46,7% contra 53,3%, mas sequências e sets favorecem o botão. Só dois pares fica quase empatado, em 6,0% contra 5,9%. Quando a diferença é assim, a vantagem de nuts orienta o tamanho da aposta.

**Q. Posso usar estes números em qualquer limite?**

A. Como referência quando as condições forem iguais: heads-up, 100bb, ranges padrão de abertura e call, sem rake. Este board fica especialmente mais desigual com stacks profundos. Com 200bb, a diferença de 3,4 pontos percentuais nas sequências importa muito mais, porque há mais fichas para perder contra a mão que você não pode ter.
`.trim(),
};

export default POST;
