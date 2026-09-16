import type { Post } from "../posts";

// PT-BR: tradução integral do EN revisado em 2026-09-02; foco no flop K-8-3.
// Os números descrevem a primeira ação do BB; a estratégia posterior do BTN é interpretação.
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "K-8-3: 99,8% de check",
  seoTitle: "Flop K-8-3: por que o BB dá check em 99,8%",
  desc: "No flop K-8-3, o BB quase nunca sai apostando. Compare os ranges, os backdoors e a realização de equity com o exemplo de ás alto.",
  tldr: "No K♠8♦3♣, depois de uma abertura do botão e um call do big blind, o big blind dá check com 99,8% do range, ainda mais do que os 98,2% no flop com ás alto. Dois fatores explicam isso: o big blind não tem overpair, porque AA dá 3-bet pré-flop, e a realização de equity fica em 80,7% contra 116,7%.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "9 min",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-pt.webp",
  imageAlt: "Resultado do solver HoldemMaster no flop K♠8♦3♣: grade 13×13 do big blind quase toda verde, indicando check",
  keepImagesInBody: true,
  tags: ["estratégia no flop K-8-3", "flop com rei alto", "check com todo o range", "backdoor", "GTO poker", "realização de equity"],
  content: `
O flop vem **K♠ 8♦ 3♣**, rainbow: três naipes diferentes. Você tem K9 no big blind (BB), fora de posição (OOP): top pair. Já aprendeu a dar check no exemplo com ás alto. Com um rei deve ser diferente, certo?

É diferente: **o check fica ainda mais frequente.** O big blind dá check em ==99,8%==, mais do que os 98,2% no [flop com ás alto](/pt/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-pt.webp"). Os dois tamanhos de aposta somam 0,2%: um combo entre 474.

Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) da HoldemMaster, consultados no resultado do spot de estudo em 2026-08-19.

:::stripe
Spot | Botão (BTN) abre para 2,5bb → BB paga (heads-up)
Flop | K♠ 8♦ 3♣ (rainbow)
Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb
Resultado | BB dá check em 99,8% — ainda mais que no flop com ás alto
:::

> **Resposta rápida**
> Dê check com tudo e prepare-se para defender um range amplo depois. Só um combo entre 474 sai apostando, então trate o lead como uma opção ausente neste spot. Dois fatores tornam o check ainda mais frequente do que no exemplo com ás alto: o big blind **não tem overpair**, porque AA dá 3-bet pré-flop, e a realização de equity (EQR) fica em **80,7% contra 116,7%**, embora a equity dos dois jogadores seja próxima.

## Quais condições produziram estes números?

O botão (BTN), em posição (IP), abre para 2,5bb, o big blind paga e todos os outros foldam: dois jogadores, pote de 5,5bb e 97,5bb para trás. Os ranges são aproximações do padrão online com 100bb, o flop é K♠ 8♦ 3♣, com três naipes diferentes, e o solver dispõe de dois tamanhos de aposta: aproximadamente um terço e três quartos do pote. O rake não é modelado.

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre para 2,5bb · BB paga · todos os outros foldam |
| Ranges | Aproximações do padrão online com 100bb |
| Flop | K♠ 8♦ 3♣, rainbow (três naipes diferentes) |
| Pote · Stack | Pote de 5,5bb · stack efetivo de 97,5bb |
| Tamanhos de aposta | Aproximadamente 33% e 75% do pote |
| Rake | Não modelado |
| Data da consulta | 2026-08-19, resultado do spot de estudo |

O pote é ==2,5 da abertura + 2,5 do call + 0,5 do small blind que foldou = 5,5bb==. O stack efetivo corresponde aos 100bb iniciais menos os 2,5bb da abertura.

## Com que frequência o big blind dá check no K-8-3?

**99,8%.** Os 0,2% restantes se dividem entre os dois tamanhos de aposta.

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **99,8%** | 473,0 |
| Bet 1,8bb (33% do pote) | 0,1% | 0,6 |
| Bet 4,1bb (75% do pote) | 0,1% | 0,4 |

Um combo entre 474: uma participação mais próxima de um efeito do arredondamento do que de uma estratégia relevante. **Neste flop seco com rei alto, o big blind praticamente não tem lead**, e você não perde nada relevante na prática ao simplificar dessa forma.

## Por que o check é ainda mais frequente no K-8-3?

**Porque o big blind não tem overpair aqui, enquanto no flop com ás alto não existe overpair para nenhum jogador.** No K-8-3, o único par de mão acima da maior carta do board é AA. O big blind dá 3-bet com AA pré-flop, então essa mão não chega ao spot. Overpairs: **0,0% para o big blind, 1,3% para o botão.**

No A-7-2, essa categoria não existe para ninguém: não há par acima de um ás. Assim, os dois ranges ficam sem a mesma categoria e seus topos são mais parecidos. No board com rei alto, esse recurso pertence a um jogador só.

Os sets mostram o mesmo padrão. Os pares de mão que trincam aqui são KK, 88 e 33, mas **o big blind só tem 88 e 33.**

| Par de mão que forma set no flop | BB | BTN |
|---|---|---|
| KK | ❌ (dá 3-bet pré-flop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Proporção do range** | **1,3%** | **1,9%** |

A contagem corresponde ao solver. O big blind tem três combos de 88 e três de 33: seis entre 474, ou 1,27%. O botão acrescenta KK e chega a nove entre 480, ou 1,88%.

## Como os dois ranges se diferenciam?

**As categorias fortes se concentram no botão; as fracas, no big blind.** A comparação lado a lado deixa isso claro.

![Composição dos ranges do big blind e do botão no flop seco K♠8♦3♣, com barras verdes e douradas por categoria de mão](/images/gto-srp-dry-king-ranges-pt.webp "K♠8♦3♣ · categorias de mão — o botão concentra o topo do range")

| Categoria | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trinca — aqui, sempre set | 1,3% | **1,9%** |
| Dois pares | **0,8%** | 0,4% |
| Overpair | 0,0% | **1,3%** |
| Top pair (K) | 12,7% | **14,4%** |
| Segundo par (8) | **10,8%** | 10,0% |
| Par fraco | **3,2%** | 2,5% |
| Underpair | 8,9% | **11,3%** |
| A-high | 27,0% | **30,0%** |
| Sem mão feita | **35,4%** | 28,3% |

Leia de cima para baixo. **Sets, overpairs e top pair aparecem mais no botão. Já a categoria mais fraca, sem mão feita, pesa 7,1 pontos percentuais a mais no big blind.** O big blind fica à frente em dois pares, segundo par e par fraco. **Dois pares é a segunda melhor categoria neste board**, acima de overpair, e o big blind tem o dobro dela. Mas 0,8% de 474 combos significa **quatro mãos**. Essa categoria não sustenta o range porque é muito rara, não porque seja fraca. As outras duas são mãos intermediárias. Sair apostando com um range assim faz sua parte fraca pagar pela parte forte do adversário.

## Por que quase um terço dos dois ranges tem apenas ás alto?

**Isso acontece em boards sem ás.** A-high representa 27,0% do range do big blind e 30,0% do botão, perto de um terço de cada um. No A-7-2, esse grupo não existe, porque qualquer ás já forma top pair. Portanto, a comparação relevante não é "rei alto contra todo o resto", mas **"boards com ás contra boards sem ás"**. No flop 8-5-2 apresentado mais adiante na série, resolvido com um range de 3-bet, A-high chega a **48,2%**.

Esse grupo torna o flop interessante. AQ e AJ não têm par, mas vencem todas as mãos da categoria "Sem mão feita" do adversário, então têm valor de showdown. No botão, não são c-bets automáticas: parte das vezes, dão check atrás para tentar chegar a um showdown gratuito.

Para pensar no mesmo AJ no big blind, leve em conta que chegar ao showdown fora de posição é mais difícil. **Cartas iguais podem ter valores diferentes conforme a posição**. A próxima seção mede o efeito sobre os ranges completos; ela não apresenta uma comparação de EV específica para AJ.

## Por que a EQR é 81 contra 117 se a equity é 46 contra 54?

**Equity indica sua participação esperada no pote; realização de equity indica quanto dessa participação você consegue efetivamente aproveitar.** São medidas diferentes.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,3% | 53,7% |
| EV (bb) | 2,06 | 3,44 |
| **Realização de equity (EQR)** | **80,7%** | **116,7%** |

A conta é a seguinte: com um pote de 5,5bb, a parte do big blind pela equity é ==5,5 × 46,3% = 2,55bb==. Seu valor esperado (EV), porém, é 2,06bb: essa relação corresponde aos 80,7%. A parte do botão é 2,95bb, contra um EV de 3,44bb. Por isso, sua realização passa de 100%.

:::note[As EQRs desta série são as exibidas na tela do solver. Recalculá-las a partir da equity e do EV arredondados na mesma tela pode produzir uma diferença de décimos de ponto percentual. Isso é arredondamento, não uma contradição.]:::

No flop com ás alto, eram 84,0% contra 113,1%. **A textura continua seca, mas a diferença aumenta no board com rei.** A causa não é o board ser mais *parado*: as duas maiores diferenças de EQR desta série aparecem em boards cheios de draws. O [Q-J-T com dois naipes](/pt/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-pt.webp") tem 41,5 pontos percentuais de diferença; o pote de 3-bet no Q-T-7, 42,7. O que amplia a distância aqui é **uma categoria no topo do range**: no A-7-2, nenhum jogador tem overpair; no K-8-3, o botão tem 1,3% e o big blind não tem nenhum. O valor de agir por último está no guia de [jogo em posição](/pt/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Que backdoors existem num flop sem draws imediatos?

**Não há nenhum draw imediato.** K, 8 e 3 têm naipes diferentes e estão distantes demais para se conectar. Nenhum dos jogadores pode ter flush draw, draw de sequência de duas pontas **ou sequer gutshot**. Para haver draw de sequência no flop, duas cartas do board precisam caber numa mesma sequência de cinco cartas, porque você só tem duas cartas na mão. De K a 8 há cinco posições de distância no ranking, assim como de 8 a 3. Nenhuma sequência de cinco cartas inclui duas delas.

| Draw | BB | BTN |
|---|---|---|
| Backdoor FD (precisa de mais duas cartas do naipe) | 27,8% | 22,3% |
| Sem draw | **72,2%** | **77,7%** |

Restam os backdoors. O **backdoor flush** contado na tabela precisa que o turn *e* o river tragam o mesmo naipe. Assim, ele se completa em apenas ==10/47 × 9/46 = cerca de 4,2%== das vezes. A tabela não os conta, mas também existem **backdoors de sequência**: QJ, JT e T9 usam o rei do board; 67 e 65, o oito; 54, o três. Isso ainda faz diferença ao escolher blefes: **uma mão com backdoor é melhor do que uma mão sem nada**, porque, se o turn trouxer aquele naipe, você passa a ter um draw real e um motivo para apostar de novo. É uma forma de preparar uma c-bet atrasada no turn.

## Você deve fazer c-bet sempre num flop com rei alto?

**Quase sempre, com tamanho pequeno, mas "sempre" não serve para um grupo de mãos.** O big blind tem 35,4% de mãos sem mão feita, então cerca de um terço do range tende a foldar logo. Além disso, **72,2% do range inteiro não tem draw**. Atenção ao denominador: esse número inclui todo o range, até top pair (12,7%), segundo par (10,8%) e sets. Não é uma parte apenas da categoria "Sem mão feita". Ele indica que a situação tende a mudar pouco nas próximas streets. Apostar cerca de um terço do pote com a maior parte do range é a referência.

É comum recomendar check atrás com mãos A-high que têm valor de showdown. Neste board, isso está **certo pela metade**. AQ e AJ também misturam apostas pequenas com frequência: fazem mãos como QJ, JT e T9 foldarem, embora elas ainda possam melhorar, mesmo sem par. Além disso, um ás nas próximas streets dá a AQ e AJ o maior par do board. Mas dar check também custa pouco, então boa parte do **range de check atrás** vem dessas mãos. Nem "apostar sempre" nem "dar check sempre" descreve a estratégia; a resposta está na mistura de frequências.

:::note[⚠ Esta seção interpreta a composição dos ranges; não apresenta uma frequência calculada pelo solver. O exemplo pré-calculado vai apenas até a primeira decisão no flop, que é a do big blind. A frequência exata de c-bet do botão não aparece nesta tela. Abra "Resolver este spot você mesmo" e calcule a árvore para obtê-la.]:::

## O que muda na prática?

- **Depois de pagar uma abertura em heads-up, sair apostando num flop seco com rei alto não é uma opção relevante.** Nem com um rei. A lógica do check com todo o range no flop com ás alto vale ainda mais aqui. Mas a condição é a **composição do seu range**, não apenas a textura do board: quando seu range concentra mais mãos muito fortes do que o adversário, o big blind pode sair apostando. O contraexemplo é o [flop 9-8-7](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp"), em que o big blind aposta primeiro em **23,7%** das vezes.
- **Dar check não é jogar de check-fold.** Contra a c-bet pequena, o big blind continua com um range amplo: todos os reis, os pares de oito, os underpairs e A-high com backdoor. Top pair paga, e os check-raises vêm principalmente de 88, 33 e dois pares.
- **No botão, não dê sempre o mesmo tratamento a AQ e AJ.** Tanto apostar pequeno quanto dar check atrás faz sentido. Ajuste a mistura conforme a disposição do adversário para foldar overcards.
- **Contra um adversário equilibrado, não leia o check como fraqueza.** Esse range de check ainda tem sets, 88 e 33, e 12,7% de top pair. Nos limites baixos, o contrário costuma acontecer, porque vários jogadores saem apostando com suas mãos fortes. Continue apostando por valor e aceite o check-raise como um custo ocasional.

:::readnext[Continue lendo]
/pt/blog/a-high-board-cbet | A-7-2: top pair também dá check | /images/gto-srp-dry-ace-oop-pt.webp
/pt/blog/holdem-continuation-bet | Continuation bet (c-bet): quando disparar no flop, quanto apostar e quando dar check | /images/holdem-continuation-bet-hero.webp
:::

## Confira no solver de poker

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo → Board seco K-high → ⚡ Ver resultados** e a tela aparece na hora. Depois, no seletor de jogador, escolha **IP (BTN (open-raiser))**. A tabela de composição de range acima vem diretamente desse painel. Comparar os dois lados é a maneira mais rápida de entender por que um deles não consegue sair apostando.

Para praticar o spot, abra o **Treinador GTO** na barra lateral. Ele distribui uma mão usando os pesos reais do range, você escolhe uma ação e recebe a avaliação em big blinds perdidos. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. Por que o big blind quase nunca aposta no K-8-3?**

A. Porque faltam no range de call as mãos mais fortes que esse board permite: o set mais alto, KK, e o único overpair, AA. Ao mesmo tempo, 35,4% do range não tem mão feita. O big blind ainda tem sets de 88 e 33 e um pouco de dois pares, mas não o suficiente para sustentar um lead. Sair apostando com um range assim constrói um pote favorável ao adversário. O solver dá check em 99,8%.

**Q. O que é pior para o big blind: flop com ás alto ou com rei alto?**

A. Neste par de exemplos, o flop com rei alto. A equity é até maior: 46,3% contra 45,1% no A-7-2. Mas a realização é menor: 80,7% contra 84,0%. O big blind tem mais equity bruta aqui, mas seu EV é menor.

**Q. O que é um range de check atrás?**

A. É o conjunto de mãos com as quais o jogador em posição escolhe não apostar, tentando chegar a um showdown gratuito ou protegendo seu range de check para que ele não seja composto só de fraqueza. Neste flop, uma parte importante vem de mãos A-high como AQ e AJ, que vencem as mãos sem nada do adversário, mas ganham pouco ao apostar.

**Q. Quanto vale um backdoor flush draw?**

A. Ele tem cerca de 4,2% de chance de se completar a partir do flop, então não justifica um call por si só. Seu valor está na escolha dos blefes: uma mão que ganha um draw real no turn dá motivo para continuar apostando. É daí que podem surgir as c-bets atrasadas.

**Q. Posso usar estes números em qualquer limite?**

A. Como referência quando as condições forem iguais: heads-up, 100bb, ranges padrão de abertura e call, sem rake. Neste board, preste atenção especialmente à posição de quem abriu: se a abertura veio de under the gun, em vez do botão, o range contém ainda mais reis e ases. A situação do big blind fica pior do que a mostrada aqui.
`.trim(),
};

export default POST;
