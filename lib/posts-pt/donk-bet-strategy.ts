import type { Post } from "../posts";

// PT-BR: tradução integral do EN revisado em 2026-09-02; foco na donk bet no 9-8-7.
// Mais sequências prontas não significa mais combos do nuts: JT tem 16 de cada lado.
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "9-8-7: a hora da donk bet",
  seoTitle: "Donk bet no flop 9-8-7: por que o BB aposta 23,7%",
  desc: "No 9-8-7, o BB sai apostando com 23,7% do range. Veja a distribuição das mãos fortes e por que a donk bet depende do spot.",
  tldr: "No 9♥8♥7♣, depois de uma abertura do botão e um call do big blind, o big blind dá check em 76,2% e sai apostando em 23,7%. É o primeiro spot da série em que o lead tem peso real na estratégia. A vantagem de range não mudou de lado: a equity continua em 48,5% contra 51,5%. O que mudou foi a diferença entre os ranges e onde se concentram as mãos fortes de cada jogador.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "9 min",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-pt.webp",
  imageAlt: "Resultado do solver HoldemMaster no flop 9♥8♥7♣: grade do big blind mistura checks verdes e apostas laranjas e rosas",
  keepImagesInBody: true,
  tags: ["donk bet no flop 9-8-7", "donk bet poker", "flop médio conectado", "aposta inicial do BB", "GTO poker", "vantagem de range"],
  content: `
Uma das primeiras recomendações que você aprende no poker é **dar check para quem aumentou**. Quem foi o agressor pré-flop recebe a oportunidade de fazer a primeira aposta no flop.

Os três spots anteriores seguiram essa recomendação quase à risca. Nos flops com [ás alto](/pt/blog/a-high-board-cbet), [rei alto](/pt/blog/k-high-board-cbet) e [cartas Broadway](/pt/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-pt.webp"), o lead do big blind (BB) ficou abaixo de 2% em todos os casos. No K-8-3 e no Q-J-T, foi de 0,2% ou menos: praticamente zero.

No **9♥ 8♥ 7♣**, a frequência é **23,7%**. Aqui aparece a exceção.

A aposta de quem apenas pagou pré-flop, antes de o agressor agir, é uma **donk bet**. O nome vem de *donkey*, "burro" em inglês, e mostra como essa jogada foi vista durante muito tempo. Também é chamada de **lead**. Os solvers a incluem na estratégia em boards específicos, e este é o exemplo mais claro no conjunto de estudo.

Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) da HoldemMaster, consultados no resultado do spot de estudo em 2026-08-19.

:::stripe
Spot | Botão (BTN) abre para 2,5bb → BB paga (heads-up)
Flop | 9♥ 8♥ 7♣ (two-tone — duas cartas de copas)
Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb
Resultado | BB sai apostando em 23,7% — o primeiro lead relevante da série
:::

> **Resposta rápida**
> No 9♥8♥7♣, o big blind dá check em **76,2%** e sai apostando em **23,7%**, somando os dois tamanhos, com valores arredondados. Mas **a vantagem de range não mudou de lado**: a equity continua em 48,5% contra 51,5%, a favor do botão. O que mudou foi o tamanho da diferença e a distribuição das mãos fortes. O big blind concentra sua força em sequências prontas; o botão, em overpairs ameaçados por este board.

## Quais condições produziram estes números?

O botão (BTN), em posição (IP), abre para 2,5bb. O big blind, fora de posição (OOP), paga, e todos os outros foldam: dois jogadores, pote de 5,5bb e 97,5bb para trás. Os ranges são aproximações do padrão online com 100bb, o flop é 9♥ 8♥ 7♣, com duas cartas de copas, e o solver dispõe de dois tamanhos de aposta, aproximadamente um terço e três quartos do pote. O rake não é modelado. Os números foram consultados em 2026-08-19.

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre para 2,5bb · BB paga · todos os outros foldam |
| Ranges | Aproximações do padrão online com 100bb |
| Flop | 9♥ 8♥ 7♣, two-tone (duas cartas de copas) |
| Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb |
| Tamanhos de aposta | Aproximadamente 33% e 75% do pote |
| Rake | Não modelado |
| Data da consulta | 2026-08-19, resultado do spot de estudo |

## Com que frequência o big blind faz donk bet no 9-8-7?

**23,7%**, com mais de dois terços dessas apostas no tamanho pequeno.

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **76,2%** | 352,0 |
| Bet 1,8bb (33% do pote) | **16,8%** | 77,8 |
| Bet 4,1bb (75% do pote) | 6,9% | 32,2 |

Compare os quatro flops para ver a mudança.

| Flop | BB sai apostando |
|---|---|
| A-7-2 (seco) | 1,9% |
| K-8-3 (seco) | 0,2% |
| Q-J-T (conectado, two-tone) | 0,1% |
| **9-8-7 (médio conectado, two-tone)** | **23,7%** |

**De menos de 2% para 23,7%: um aumento de mais de dez vezes.** Não é apenas uma aposta ocasional; a estratégia mudou.

## O que mudou em relação aos três primeiros flops?

**Pela primeira vez, o big blind fica à frente na categoria de sequências prontas.** São 5,2% contra 4,2%.

A contagem de combos mostra exatamente por quê. Três mãos fazem sequência aqui: ==JT (J-T-9-8-7)==, ==T6 (T-9-8-7-6)== e ==65 (9-8-7-6-5)==.

| Mão que faz sequência | BB (range de call) | BTN (range de abertura) |
|---|---|---|
| JT | ✅ suited e offsuit (16 combos) | ✅ suited e offsuit (16 combos) |
| T6 | ✅ **T6s (4 combos)** | ❌ fora do range de abertura |
| 65 | ✅ 65s (4 combos) | ✅ 65s (4 combos) |
| **Total** | **24 combos = 5,2%** | **20 combos = 4,2%** |

**Toda a diferença vem de T6s: quatro combos.** Neste solver, o range de abertura do botão começa em T7s, então T6 do mesmo naipe não chega ao flop. O big blind defende essa mão porque paga mais barato: 1bb dos 2,5bb já foi colocado como blind. Essa única célula decide quem tem mais **sequências prontas**. Ela não decide quem tem mais combos do nuts: a melhor mão aqui é J-T, e os dois jogadores têm todos os 16 combos.

Há também uma diferença no sentido contrário. Os overpairs se concentram no botão.

| Overpair (par de mão acima do 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 combos | ✅ 6 combos |
| JJ · QQ · KK · AA | ❌ todos dão 3-bet pré-flop | ✅ 24 combos |
| **Total** | **6 combos = 1,3%** | **30 combos = 6,4%** |

## Este flop realmente dá vantagem de range ao BB?

**Não. A equity continua em 48,5% contra 51,5%.** Vale deixar isso claro, porque é a conclusão errada mais fácil de tirar: aparecer um lead não significa que a vantagem de range mudou de lado.

![Composição dos ranges do big blind e do botão no flop médio conectado 9♥8♥7♣, com duas cartas de copas](/images/gto-srp-middle-connected-ranges-pt.webp "9♥8♥7♣ · categorias de mão — mais sequências no big blind, mais overpairs e A-high no botão")

| Categoria | BB (OOP) | BTN (IP) |
|---|---|---|
| Straight | **5,2%** | 4,2% |
| Set/Trinca — aqui, set | 1,9% | 1,9% |
| Dois pares | 2,8% | 2,8% |
| Overpair | 1,3% | **6,4%** |
| Top pair (9) | **13,6%** | 12,7% |
| Segundo par (8) | **8,4%** | 7,6% |
| Par fraco (terceiro par ou inferior) | **6,5%** | 6,4% |
| Underpair | **6,5%** | 6,4% |
| A-high | 24,2% | **30,5%** |
| K-high | **13,9%** | 11,9% |
| Sem mão feita | **15,6%** | 9,3% |

As colunas somam 99,9 e 100,1: é efeito do arredondamento.

**Só duas linhas favorecem o botão**: overpairs, com 6,4% contra 1,3%, e A-high, com 30,5% contra 24,2%. Sets estão empatados em 1,9%, assim como dois pares em 2,8%. Nas demais categorias, o big blind tem a maior proporção.

É preciso ler os draws junto com essa distribuição.

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (sequência + flush) | **4,5%** | 3,6% |
| Flush draw | **3,2%** | 2,3% |
| OESD (sequência de duas pontas) | **26,2%** | 23,7% |
| Gutshot | **21,6%** | 20,6% |
| Backdoor FD | 14,1% | **17,6%** |
| Sem draw | 30,3% | **32,2%** |

**Contando apenas draws imediatos, sem os backdoors, o big blind tem 55,5% contra 50,2% do botão.** Neste board, a composição do big blind não melhora apenas nas mãos prontas, mas também nas mãos que ainda podem se completar.

O mesmo aparece ao considerar o valor que cada jogador consegue extrair. A realização de equity ainda favorece o botão, mas por uma diferença menor do que nos exemplos anteriores.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,5% | 51,5% |
| EV (bb) | 2,48 | 3,02 |
| **Realização de equity (EQR)** | **93,2%** | **106,4%** |

Depois de 84,0%, 80,7% e 77,9% nos três primeiros flops, a realização de equity do big blind **se recupera aqui**. Com 93,2%, ele chega mais perto de conservar toda a sua parte. Esse é o sinal relevante: o lead aparece quando o jogador fora de posição finalmente consegue aproveitar quase todo o valor que sua equity representa.

Duas mudanças ajudam a explicar isso.

**Primeiro, a diferença diminuiu.** A distância de 3,0 pontos percentuais de equity é a menor entre os quatro flops até aqui. No A-7-2, eram 9,8 pontos; no Q-J-T, 6,6.

**Segundo, a força do botão está em categorias vulneráveis.** As únicas duas em que ele tem maior proporção são overpairs (6,4%) e A-high (30,5%), e uma delas nem é uma mão forte pronta. As mãos A-high não formam par aqui. Quando têm draw, o big blind também possui draws, então esse recurso existe dos dois lados e não cria uma vantagem exclusiva. A vulnerabilidade dos overpairs está explicada na próxima seção. Já a diferença a favor do big blind aparece em mãos que **já estão prontas**.

Um lead pode fazer sentido quando, além da força média, **a distribuição das mãos fortes favorece a aposta e o adversário não consegue apostar com confiança**. As duas condições aparecem aqui: o big blind tem mais sequências prontas, e o botão, com 30,5% de A-high, não pode sair disparando com um range amplo. O lead ocupa essa oportunidade de aposta.

## Por que os overpairs do botão são vulneráveis?

**Porque quase metade das cartas possíveis piora o turn para eles.**

Imagine que você tem QQ. Neste momento, sua mão está perto das melhores. Das 47 cartas que você não vê:

- **T, J, 6 e 5: 16 cartas.** Qualquer uma delas **permite uma sequência** usando uma única carta da mão do adversário. Um valete deixa o board em J-9-8-7, e **qualquer jogador com um dez já tem J-T-9-8-7.**
- **As cartas de copas restantes que ainda não foram contadas: 7 cartas.** Elas completam o flush.

São **23 de 47 cartas, cerca de 49%**. ⚠ Essa conta vale para QQ sem copas: se você tem Q♥, uma daquelas sete cartas está na sua mão, então são 22 de 47, cerca de 47%. Aproximadamente um turn em cada dois dificulta o jogo. Para reforçar a contagem desses outs pelo outro lado, veja o guia de [probabilidades dos draws](/pt/blog/holdem-drawing-odds).

Por isso, overpair aqui é uma mão para **cobrar dos draws agora e frear ao enfrentar um raise**, sem buscar um pote enorme. O pote a evitar é aquele que cresce depois de um turn ruim, não o que você constrói no flop.

## Por que mais de dois terços dos leads usam o tamanho pequeno?

**Porque o lead representa uma estratégia de range, não uma única mão.** Dos 23,7%, são 16,8 pontos percentuais em apostas de um terço do pote e 6,9 em apostas de três quartos.

Uma aposta pequena comunica que o board serve ao conjunto do seu range. Se apenas as mãos fortes apostarem, a estratégia se divide em "aposta = força, check = fraqueza", e o adversário recebe essa informação de graça. Misturar sequências, top pair e draws no mesmo tamanho pequeno impede essa leitura fácil.

O tamanho grande também tem uma função. Se toda sequência usasse só a aposta pequena, o botão poderia pagar com tudo sem enfrentar um pote grande. **Os dois tamanhos tornam menos confortável tanto pagar quanto aumentar.**

## Quando evitar a c-bet? A exceção do 9-8-7

**Neste flop, como agressor pré-flop, evite apostar automaticamente.** Isso vale para sua avaliação da mão tanto quando o big blind sai apostando quanto quando ele dá check; a c-bet propriamente dita só é possível depois do check. É o exemplo mais claro do conjunto para pensar em "quando não fazer c-bet". O motivo não é só a textura, mas como seu range se encaixa nela. A aplicação desse raciocínio a outros boards está no guia de [estratégia de continuation bet](/pt/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

A razão está na composição dos ranges. A-high representa 30,5% do range do botão; K-high, 11,9%; sem mão feita, 9,3%: são 51,7% sem par. ⚠ **Mas "não ter par" não explica tudo.** A mesma soma no big blind dá **53,7%**. O big blind tem *mais* mãos sem par, por 2,0 pontos percentuais, e é ele quem sai apostando em 23,7% das vezes. O que realmente limita o botão é **o que permanece no range de check**: 76,2% das mãos do big blind continuam ali, com sequências e mãos da categoria top pair, que representa 13,6% do range inicial. Apostar de forma ampla pode encontrar um **check-raise**. ⚠ Parte daqueles 24 combos de sequência sai apostando, então nem todos ficam no range de check. E esta resolução não contém a *frequência* de check-raise.

Cartas altas **offsuit** que não acertaram o board, como AKo e AQo, são exemplos típicos de check atrás: têm valor de showdown, mas não conseguem continuar confortavelmente contra um raise. As versões suited são outra situação: A♥K♥ e A♥Q♥ têm nut flush draw aqui, o draw para o maior flush possível, e apostam.

:::note[O exemplo pré-calculado vai apenas até a primeira decisão no flop, que é a do big blind. A queda exata na frequência de c-bet do botão depois do check não aparece nesta tela. Abra "Resolver este spot você mesmo" e calcule a árvore para vê-la.]:::

## O que muda na prática?

- **Leads aparecem em boards médios conectados depois de uma abertura ampla de posição final.** O board monotone do próximo spot também tem cerca de 11% de leads, enquanto os flops secos com ás alto e rei alto ficam praticamente em zero. ⚠ Porém, o único board médio conectado efetivamente resolvido nesta série é o 9-8-7. A condição não é só a textura: importa **a distribuição das mãos fortes entre os ranges**. A prova está na própria série: o [flop 6-5-2](/pt/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-pt.webp") também é um pote com uma abertura do botão e call do big blind, mas o BB sai apostando em apenas **3,2%**. A única mão que faz sequência é 4-3, e nenhum dos ranges a contém. Ser baixo e conectado não produz um lead por si só.
- **Você ainda dá check em três quartos das vezes.** Quando sair apostando, use principalmente o tamanho pequeno e inclua mais do que apenas suas melhores mãos. Um range que só sai apostando com sequências é fácil de ler; top pair e draws precisam entrar no mesmo tamanho. Mas mantenha o total em vista: **o lead completo é de 23,7%, sendo 16,8 pontos no tamanho pequeno**. Transformar isso em "apostar com todo draw" alcançaria metade do range e inverteria a estratégia. Os outros 76,2% dão check.
- **No botão, resista à c-bet automática nesta textura.** Mais da metade do seu range não tem par, e os overpairs querem controlar o pote, sem torná-lo grande demais.
- **Contra quem faz c-bet em excesso, dar check pode valer mais do que sair apostando.** E considere o **check-raise**, em vez de apenas check-call, com sequências e top pair. Deixar o adversário apostar contra suas mãos fortes pode render mais do que tomar a iniciativa, desde que você depois cobre por isso.
- **Leia a situação pelo outro lado também.** Contra quem dá check atrás em boards molhados, sair apostando pode valer mais do que a frequência do solver sugere: dar check ali simplesmente perde uma street de aposta.

:::readnext[Continue lendo]
/pt/blog/broadway-board-strategy | Q-J-T: draws não bastam | /images/gto-srp-broadway-oop-pt.webp
/pt/blog/k-high-board-cbet | K-8-3: 99,8% de check | /images/gto-srp-dry-king-oop-pt.webp
:::

## Confira no solver de poker

Abra o [solver de poker gratuito](/pt/solver) e entre em **Spots de estudo → Board médio conectado, two-tone → ⚡ Ver resultados**.

A melhor maneira de estudar este exemplo é **compará-lo com um board seco**. Abra primeiro "Board seco K-high" e observe a grade coberta por um único verde. Depois, volte a este spot e veja as apostas laranjas e rosas aparecerem. Mesmos jogadores, mesmos ranges: três cartas mudaram a estratégia.

Abra então o **Treinador GTO** na barra lateral para praticar a situação que acabou de estudar. Ele sorteia uma mão com os pesos reais do range e informa, em big blinds, o custo de uma decisão errada. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. O que é donk bet no poker?**

A. É uma aposta no flop de quem não aumentou pré-flop, feita antes de o agressor agir, em vez de dar check para ele. O nome vem de "donkey", refletindo como a jogada foi vista por muito tempo. Os solvers mostram que ela faz sentido em texturas específicas. Neste flop, representa 23,7% da estratégia do big blind.

**Q. Por que dizem que donk bet é ruim?**

A. Porque, em muitos boards, ela não funciona bem. Nesta série, os flops com ás alto, rei alto e cartas Broadway tiveram menos de 2% de leads do big blind, já que o range do agressor pré-flop se conecta melhor com essas cartas. A exceção aparece quando **quem pagou concentra mais mãos muito fortes**. O 9-8-7 é o exemplo mais claro.

**Q. O big blind tem vantagem no 9-8-7?**

A. Não no conjunto. A equity fica em 48,5% contra 51,5%, e a realização de equity, em 93,2% contra 106,4%, ambas a favor do botão. O lead aparece porque o big blind tem mais sequências prontas, enquanto a força do botão se concentra em overpairs ameaçados pelo board. Isso não significa que o big blind esteja à frente na média.

**Q. Quando dar check em vez de sair apostando?**

A. Em três quartos das vezes, mesmo neste flop: 76,2% do range do big blind dá check. Dê check quando seu range não concentra mais mãos prontas fortes, como nos exemplos de flops secos com ás alto ou rei alto, e quando o adversário já aposta em excesso. Deixá-lo disparar pode valer mais do que tomar a iniciativa. O lead é uma exceção, não uma melhoria automática.

**Q. O que fazer se eu sair apostando e enfrentar um raise?**

A. Planeje antes de apostar, porque o lead de um terço do pote convida a raises. Sequências e draws de sequência de duas pontas continuam: têm equity para disputar um pote grande. Top pair com um nove paga uma vez e costuma frear num turn ruim. Mãos sem par nem draw devem foldar, em vez de pagar "para ver": é justamente essa parte do range que o raise pressiona.

**Q. Qual tamanho usar na donk bet?**

A. Principalmente o pequeno. O solver coloca 16,8 dos 23,7 pontos percentuais em apostas de um terço do pote e 6,9 em três quartos. O tamanho pequeno é a referência porque o objetivo é pressionar com uma estratégia de range. O grande existe para que o adversário não possa simplesmente pagar com tudo.

**Q. Essas frequências de lead valem no meu limite?**

A. O princípio do board continua útil, mas os 23,7% exatos não se transferem sem ajustes. O resultado pressupõe heads-up, 100bb, abertura do botão para 2,5bb, ranges padrão de defesa e ausência de rake. Uma abertura maior no jogo ao vivo muda o pote e a relação entre stack e pote. Se o big blind defender muito mais mãos do que o modelo, pode chegar com ainda mais sequências, o que torna o lead mais atraente nesse aspecto.
`.trim(),
};

export default POST;
