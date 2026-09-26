import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Tabela de odds e probabilidade no poker — as chances reais de cada mão no Hold'em",
  seoTitle: "Acerta menos do que pensa? — Tabela de probabilidade poker",
  desc: "As odds reais de cada mão, flop e projeto no Texas Hold'em — mais a regra do 2 e 4 e pot odds numa única tabela de probabilidade completa.",
  tldr: "Até o river você faz um par 43,8% das vezes, dois pares 23,5%, um flush 3,0% e um full house 2,6% — enquanto um royal flush aparece só uma vez a cada 31.000 mãos.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Vista de cima de uma mesa de Texas Hold'em em ação com cinco cartas comunitárias, pilhas de fichas espalhadas e jogadores no meio da mão",
  tags: ["probabilidade poker", "tabela de probabilidade poker", "probabilidade das maos do poker", "odds no poker", "odds das maos de poker", "odds de trincar no flop", "probabilidade flush poker", "odds texas holdem"],
  content: `
A primeira vez que eu fiz set mining com um par de cincos numa mesa ao vivo e trinquei no flop, o cara do meu lado resmungou "quais são as *odds*?" — e eu sabia mesmo: cerca de ==1 em 8,5==. Foi esse número que me fez pagar, para começar.

Poker não é jogo de adivinhação. Cada call, fold e shove é uma ==pergunta de probabilidade disfarçada==, e os jogadores que ganham são os que transformaram "quais são as odds?" num reflexo. Esta é a ==**tabela de odds e probabilidade** completa== do Texas Hold'em — cada mão feita, cada flop, cada projeto — com o ==g:único atalho mental== que deixa você fazer a conta na mesa em dois segundos.

---

### Os números que mais importam

:::stripe
43,8% | Um par até o river
23,5% | Dois pares
3,0% | Fazer um flush
2,6% | Fazer um full house
1 em 30.940 | Um royal flush
:::

---

## Tabela de probabilidade do poker: as odds de cada mão

> **Resposta rápida**
> A probabilidade das mãos do poker depende de quantas cartas você usa. No Hold'em, as melhores cinco entre sete cartas dão um par 43,8% das vezes e dois pares 23,5%. Essas frequências até o river não são as de uma mão de cinco cartas distribuída ao acaso; escolha a coluna certa antes de comparar o quão rara uma mão é em relação a outra.

- **Odds de 5 cartas** = a chance de uma única mão aleatória de cinco cartas *ser* aquela mão (o número clássico dos livros).
- **Hold'em (até o river)** = a chance de você *terminar* com aquela mão depois de ver todas as sete cartas (suas 2 cartas na mão + 5 comunitárias). É esse o número que realmente importa na mesa.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão | Odds de 5 cartas (recebidas) | Odds no Hold'em (até o river) |
|:---|:---:|:---:|
| Royal Flush | 1 em 649.740 (0,000154%) | 1 em 30.940 (0,0032%) |
| Straight Flush | 1 em 72.193 (0,00139%) | 1 em 3.590 (0,0279%) |
| Quadra | 1 em 4.165 (0,0240%) | 1 em 595 (0,168%) |
| Full House | 1 em 694 (0,144%) | 1 em 39 (2,60%) |
| Flush | 1 em 509 (0,197%) | 1 em 33 (3,03%) |
| Sequência | 1 em 255 (0,392%) | 1 em 22 (4,62%) |
| Trinca | 1 em 47 (2,11%) | 1 em 21 (4,83%) |
| Dois Pares | 1 em 21 (4,75%) | 1 em 4,3 (23,5%) |
| Um Par | 1 em 2,4 (42,3%) | 1 em 2,3 (43,8%) |
| Carta Alta | 1 em 2,0 (50,1%) | 1 em 5,7 (17,4%) |

</div>

> **A estatística que surpreende todo mundo**
> Carta alta é a mão de cinco cartas *mais* comum (50,1%), mas no Hold'em cai para **17,4%** — o terceiro resultado mais frequente, atrás de um par (43,8%) e dois pares (23,5%). Por quê? Sete cartas te dão tantas chances de parear que "nenhum par até o river" vira a exceção. Mais cartas, mais conexões.

A ordem do ranking segue a **coluna de cinco cartas**: quanto mais rara uma mão é entre cinco cartas aleatórias, mais alto ela fica no ranking — sem exceção, da carta alta até o royal flush. Com sete cartas isso vale em tudo, menos na carta alta: ela é mais rara que um par (43,8%) e ainda assim continua sendo a mão mais fraca. Essa é a lógica por trás do [ranking de mãos de poker](/pt/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): a probabilidade *é* o ranking — medida sobre cinco cartas.

:::quiz:::

---

## Odds de receber cada mão inicial

> **Resposta rápida**
> Um par de ases chega mais ou menos uma vez a cada 221 mãos, mas qualquer par na mão aparece cerca de uma vez a cada 17. A diferença está nas combinações: das 1.326 combinações de duas cartas, um par específico ocupa só seis. Quaisquer duas cartas do mesmo naipe saem 23,5% das vezes; já A-K do mesmo naipe, especificamente, só 0,30%.

![Par de ases — o ás de espadas e o ás de copas recém-distribuídos no feltro verde ao lado de fichas de poker](/images/holdem-probability-starting-hands.webp "Par de ases: a melhor mão inicial, distribuída só uma vez a cada 221 mãos")

Antes de qualquer flop, existem exatamente **1.326 mãos iniciais de duas cartas possíveis**. Veja com que frequência aparecem as que as pessoas mais perguntam.

| Mão inicial | Odds | Com que frequência |
|:---|:---:|:---|
| Um par específico na mão (ex.: A-A) | 1 em 221 (0,45%) | Uma vez a cada ~221 mãos |
| **Qualquer** par na mão | 1 em 17 (5,9%) | Cerca de duas vezes por hora ao vivo |
| A-K do mesmo naipe (específico) | 1 em 332 (0,30%) | Raro |
| A-K (do mesmo naipe *ou* de naipes diferentes) | 1 em 83 (1,2%) | — |
| Quaisquer duas cartas do mesmo naipe | 1 em 4,3 (23,5%) | Quase a cada quarta mão |

Então, da próxima vez que alguém disser "eu nunca pego ases", está mais ou menos certo — você vai receber um par *específico* como os ases só cerca de ==uma vez a cada 221 mãos==. Mas **qualquer** par na mão chega a cada 17 mãos, e é por isso que set mining é uma estratégia de verdade, não fantasia. Quais pares e mãos do mesmo naipe valem a pena jogar de cada posição fica coberto na [tabela de mãos iniciais por posição](/pt/blog/holdem-starting-hands-chart).

---

## Odds de flopar cada mão

> **Resposta rápida**
> Com um par na mão, você flopa trinca ou melhor 11,8% das vezes. Com duas cartas do mesmo naipe, o flush já feito sai só 0,84%, enquanto o projeto de flush sai 10,9%. São odds condicionais: partem das cartas na mão mostradas na tabela, não da frequência daquela mão em qualquer distribuição aleatória.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Você flopa… | Segurando | Odds | Contra |
|:---|:---|:---:|:---:|
| Uma trinca (ou melhor) | Um par na mão | 11,8% | ~7,5 para 1 |
| Um flush | Duas cartas do mesmo naipe | 0,84% | ~118 para 1 |
| Um projeto de flush | Duas cartas do mesmo naipe | 10,9% | ~8 para 1 |
| Uma sequência | Conectores do mesmo naipe (ex.: 8-7) | 1,3% | ~76 para 1 |
| Dois pares | Duas cartas não pareadas | 2,0% | ~49 para 1 |
| Um full house | Um par na mão | 0,98% | ~101 para 1 |
| Quadra | Um par na mão | 0,245% | ~407 para 1 |

</div>

Para set mining, ==7,5 para 1 é o retorno teórico de equilíbrio, não uma regra de stack suficiente==: pressupõe que toda trinca ganha e é paga. Na prática, a referência usual de 15–20× o stack efetivo deixa margem para o valor que não vem e para as trincas que perdem; mesmo isso é uma heurística, não um call automático. É essa a ponte para [pot odds](#pot-odds), logo abaixo. Para a derivação completa de cada linha aqui — mais a regra de stack do set mining e a divisão entre flush feito, projeto e completo — veja o mergulho fundo em [drawing odds e as odds de flopar cada mão](/pt/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Drawing odds: acertando seu flush ou sequência até o river

> **Resposta rápida**
> Um projeto de flush de nove outs se completa cerca de 35% das vezes somando turn e river, contra 19,6% só no river depois de um turn que não ajudou. Um projeto de sequência de oito outs acerta um pouco menos. São probabilidades de completar a mão, não vitórias garantidas: antes, desconte as cartas que melhoram sua mão mas deixam o adversário na frente.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Projeto | Outs | Flop → river (2 cartas) | Turn → river (1 carta) |
|:---|:---:|:---:|:---:|
| Flush + sequência aberta (combo) | 15 | 54,1% | 32,6% |
| Flush + gutshot | 12 | 45,0% | 26,1% |
| Projeto de flush | 9 | 35,0% | 19,6% |
| Sequência aberta (open-ended) | 8 | 31,5% | 17,4% |
| Duas overcards | 6 | 24,1% | 13,0% |
| Sequência de dentro (gutshot) | 4 | 16,5% | 8,7% |
| Par → trinca | 2 | 8,4% | 4,3% |
| Trinca → full house ou quadra | 7 (flop) / 10 (turn) | 33,4% | 21,7% |

</div>

A linha das duas overcards pressupõe que parear qualquer uma delas ganha. Contra dois pares, uma trinca ou um projeto mais forte, parte dessas cartas — ou todas — pode estar suja: desconte-as em vez de tratar os seis como outs vencedores garantidos. A linha da trinca também conta a quarta carta do seu valor: só o full house fica em cerca de 29,1% a partir do flop e 19,6% no turn.

O caso clássico: você flopa um **projeto de flush** (nove outs). Você chega lá ==35% das vezes até o river== — melhor que uma em três. Um **projeto de sequência aberta** (oito outs) acerta 31,5%. Repare nas duas colunas: quando o turn é um brick você passa a ter uma carta por vir em vez de duas, então suas odds praticamente caem pela metade — os 35% do projeto de flush viram 19,6% —, e é exatamente por isso que os projetos ficam mais caros de perseguir street após street.

---

## Como calcular odds no poker: contando outs e a regra do 2 e 4

> **Resposta rápida**
> A regra do 2 e 4 estima a porcentagem de completar um projeto: use o dobro dos outs para uma carta por vir e quatro vezes os outs para turn e river juntos. A estimativa de duas cartas só serve para precificar um call no flop se você não precisar pagar de novo para ver as duas. É um atalho, não a equity exata.

:::steps
Conte seus outs | As cartas ainda não vistas que completam sua mão (projeto de flush = 9)
No flop, se você vai ver as duas cartas sem pagar de novo | Multiplique outs × 4 → sua % aproximada de acertar até o river
No turn (1 carta por vir) | Multiplique outs × 2 → sua % aproximada de acertar no river
:::

**Exemplo resolvido.** Você tem quatro cartas para um flush depois do flop. São ==9 outs== (13 do seu naipe − 4 que você consegue ver). No flop: 9 × 4 = **36%** — o número real é 35,0%, então você está certeiro. No turn, se você errou: 9 × 2 = **18%** (real: 19,6%).

:::tip[A estimativa do ×4 já fica um pouco alta com 7 outs; a diferença pesa mais em projetos maiores. Com um monstro de 15 outs, "×4" diz 60% mas o número real é 54% — desconte alguns pontos para projetos grandes.]:::

É esse o atalho: outs limpos → o multiplicador das cartas que você vai ver → uma estimativa do projeto para usar junto com sua [equity](/pt/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Todo o resto é só saber o que fazer com esse número. A única habilidade que essa regra assume que você já dominou é a própria contagem — para projetos combinados, outs sobrepostos e os outs "sujos" que não deveriam contar, veja o guia completo de [como contar outs no poker](/pt/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot odds: transformando suas odds em call ou fold

> **Resposta rápida**
> Pot odds transformam um call num alvo de equilíbrio: divida o call pelo pote já somado a ele. Compare esse preço com sua chance de ganhar nas cartas que o call realmente compra. O número de flush de duas cartas não justifica pagar só pelo turn quando outra aposta pode vir; os ganhos futuros pedem uma estimativa à parte.

![Infográfico de pot odds — um pote de $100 e um call de $25, então 25 ÷ 125 significa que você precisa de 20% de equity](/images/holdem-probability-pot-odds.webp "Um call de $25 num pote de $100: 25 ÷ 125 = 20% de equity necessária para empatar")

**Exemplo resolvido.** O pote é $100. Seu adversário aposta $50, deixando-o em $150. Você precisa pagar $50 para ganhar esses $150.

:::steps
Pote depois da aposta | $100 + $50 = $150
Seu call | $50 para ganhar $150 (pote final $200)
Pot odds | 50 ÷ 200 = 25% — você precisa de pelo menos 25% de equity
Sua equity | Projeto de flush ≈ 35% até o river (regra do 4) — o número pressupõe que você vê ==as duas== cartas
Decisão | Com duas cartas por vir: 35% > 25% → um ==g:call== claramente lucrativo
:::

É esse o momento em que todos os números compensam — mas **use o número da street que você está pagando**. Se as duas cartas vêm (você está all-in, ou o turn passa sem mais aposta), seus **35%** superam o preço de **25%** e dar call ganha dinheiro no longo prazo mesmo que você vá perder a mão na maioria das vezes. Se o vilão vai apostar de novo no turn, este call só compra a carta do turn — do flop isso dá ==9 ÷ 47 = 19,1%==, *abaixo* do preço — e aí o projeto precisa das [implied odds](/pt/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp"), o dinheiro que você ganha nas streets depois de acertar, para cobrir essa diferença. Gastar o número do ×4 numa decisão de uma carta só é a forma mais comum de o iniciante superestimar um projeto. Para o método completo e o resumão de bet sizing, veja [como calcular pot odds](/pt/blog/holdem-pot-odds).

---

## Odds de royal flush e straight flush (e por que são tão raros)

> **Resposta rápida**
> Um royal flush aparece cerca de uma vez a cada 30.940 mãos aleatórias de sete cartas no Hold'em, muito mais que numa mão de cinco cartas. Um straight flush que não é royal sai perto de 1 em 3.590 até o river — menos raro, mas ainda excepcional. Nenhum dos dois mede sua chance a partir de um projeto específico: com as cartas na mão e o flop conhecidos, a conta passa a ser condicional.

![Infográfico de um royal flush de copas — A♥ K♥ na mão completando A-K-Q-J-10 de copas num board 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Um royal flush de copas: a mão mais rara do poker, cerca de 1 em 30.940 até o river")

- **Royal flush:** como uma mão distribuída de cinco cartas, ==1 em 649.740==. Jogando Hold'em até o river, melhora para cerca de 1 em 30.940 porque você escolhe suas melhores cinco entre sete cartas. De qualquer forma, a maioria dos jogadores passa *anos* entre um e outro.
- **Straight flush:** cerca de 1 em 72.193 como mão de cinco cartas, ou perto de 1 em 3.590 até o river no Hold'em. Ainda uma aparição de uma vez por ano para a maioria.

Por que tão raro? Um royal flush é exatamente **uma sequência específica de cartas em um naipe específico** — quatro formas de fazê-lo no baralho inteiro contra 1.302.540 formas de fazer uma carta alta simples. A raridade é toda a razão de ele ficar no topo do ranking.

:::note
Um mito comum: "um royal flush ganha de tudo, então pode dar *empate*". O pote pode ser dividido, sim, mas não do jeito que costumam explicar. Dois royal flushes em naipes *diferentes* exigiriam dez cartas específicas, e dois jogadores só dispõem de nove — duas cartas na mão de cada um mais as cinco da mesa —, então não acontece. A única forma de os dois terem royal flush é a própria mesa ser o royal flush: todo mundo joga a mesa, e o pote é dividido. Na prática, você praticamente nunca vai ver isso.
:::

---

## Odds improváveis: coolers, quadras e bad beats

> **Resposta rápida**
> Odds improváveis precisam de um ponto de partida. Flopar quadra com um par na mão sai cerca de uma vez em 408; receber um par de ases é uma em 221 antes de você ver qualquer carta. Esses eventos explicam resultados raros, mas uma derrota rara, sozinha, não mostra se a decisão anterior estava certa ou errada.

| Improvável | Odds |
|:---|:---:|
| Receber um par de ases na mão | 1 em 221 |
| Flopar quadra com um par na mão | 1 em 408 |
| Flopar um straight flush (conectores do mesmo naipe 54s–JTs) | ~1 em 4.900 |
| Fazer um royal flush até o river | 1 em 30.940 |

**Set over set** — você flopa uma trinca e perde para uma trinca maior — é o cooler supremo. Não há um número único e limpo porque depende de quantos jogadores seguram pares, mas a âncora é esta: *você* flopa uma trinca só 11,8% das vezes, e um adversário fazendo o mesmo na mesma mesa é raro o suficiente para a maioria dos jogadores lembrar de cada um. Quando acontece, a derrota sozinha não prova que o call foi um erro — nem que foi certo; julgue pelo preço e pela profundidade de stack que você tinha naquele momento, não pelo showdown. Se você quer ver exatamente como esses showdowns são pontuados, as [regras de kicker e desempate](/pt/blog/holdem-tiebreak-rules) cobrem cada caso limite.

---

:::readnext[Continue lendo]
/pt/blog/holdem-hand-rankings | Ranking de mãos de poker, do melhor ao pior | /images/holdem-hand-rankings-hero.webp
/pt/blog/holdem-starting-hands-chart | Quais mãos iniciais realmente jogar | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Quais são as odds de fazer um royal flush no Texas Hold'em?**

A. Cerca de 1 em 30.940 até o river quando você joga a mão de Hold'em até o fim (usando suas melhores cinco entre sete cartas). Como uma mão distribuída de cinco cartas, é 1 em 649.740. De qualquer forma, a maioria dos jogadores passa anos sem fazer um.

**Q. Quais são as odds de um straight flush?**

A. Mais ou menos 1 em 72.193 como mão de cinco cartas, ou cerca de 1 em 3.590 até o river no Hold'em. É a segunda mão mais rara, superada só pelo royal flush.

**Q. Quais são as odds de acertar um flush até o river?**

A. Se você flopa um projeto de flush (nove outs), você o completa cerca de 35% das vezes até o river — melhor que uma em três. Numa única carta (turn para river), cai para cerca de 19,6%.

**Q. Quais são as odds de flopar uma trinca?**

A. Cerca de 11,8%, ou mais ou menos 1 em 8,5, quando você segura um par na mão. As odds equivalentes de 7,5 para 1 descrevem erros contra acertos, não uma profundidade de stack recomendada. Um call de set mining também precisa de pagamento futuro realista; a referência prática de 15–20× deixa margem para trincas que não recebem ação ou que perdem.

**Q. Quais são as odds de flopar um royal flush?**

A. Praticamente nulas. Mesmo quando você já tem duas das cinco cartas em naipe — digamos A♥ K♥ — o flop traz exatamente Q♥ J♥ 10♥ só cerca de 1 vez em 19.600 flops. Partindo de uma mão inicial aleatória é muito mais raro ainda, e é por isso que quase todo royal flush que sai é completado no turn ou no river, não no flop.

**Q. Quais são as odds de receber um par de ases na mão?**

A. 1 em 221 (0,45%) para os ases especificamente. Qualquer par na mão, porém, aparece bem mais vezes — cerca de 1 em 17 mãos (5,9%).

**Q. Qual é a probabilidade de fazer um flush no Texas Hold'em?**

A. Jogando as sete cartas até o river, 3,03% — cerca de 1 em 33 mãos (em cinco cartas distribuídas, só 0,197%). Não confunda com *completar* um projeto de flush já flopado, que fecha 35% das vezes: um número é a chance de a mão inteira terminar em flush, o outro pressupõe que você já tem quatro cartas do naipe.

**Q. Qual é a probabilidade de uma quadra no poker?**

A. 0,168% até o river — 1 em 595 mãos. Com um par na mão, você flopa a quadra só 1 vez em 408 (0,245%). Em cinco cartas distribuídas é ainda mais raro: 1 em 4.165. É por isso que uma quadra costuma virar história de mesa por meses.

**Q. Qual é a probabilidade de uma sequência no poker?**

A. 4,62% até o river — cerca de 1 em 22 mãos. Com conectores você flopa uma sequência *feita* só 1,3% das vezes, mas flopa um projeto aberto perto de 10% — e esse projeto completa 31,5% até o river. Em cinco cartas distribuídas, a sequência sai 0,392%.

**Q. Qual é a probabilidade de um full house no poker?**

A. 2,60% até o river — cerca de 1 em 39 mãos. Em cinco cartas distribuídas, 0,144% (1 em 694). Repare na ordem: o full house é mais raro que o flush (3,03%), que por sua vez é mais raro que a sequência (4,62%) — exatamente a ordem em que o ranking coloca as três.

**Q. O que é a regra do 2 e 4 no poker?**

A. A regra do 2 e 4 estima as odds de projeto: multiplique seus outs por 4 no flop para turn e river juntos, ou por 2 no turn só para o river. Nove outs dão 36% em duas cartas pelo ×4, contra 35,0% exatos; o ×2 dá 18% para a carta do river, contra 19,6%. Confira a tabela exata quando o preço estiver apertado e reserve o número de duas cartas para quando você vê as duas sem mais aposta.

**Q. Como calcular pot odds?**

A. Divida a quantia que você precisa pagar pelo pote total depois do seu call: pagar $50 num pote de $150 dá 50 ÷ 200 = 25%, a equity de que você precisa. Esta página entrega a outra metade da comparação — com que frequência o seu projeto realmente chega. O lado do preço está em [o guia de pot odds — ratios, atalhos de tamanho de aposta e os erros mais caros](/pt/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

**Q. Quais são as odds de set over set?**

A. Não há um número fixo único — depende de quantos adversários seguram pares na mão — mas é raro. Você já flopa uma trinca só 11,8% das vezes, então dois jogadores flopando trincas na mesma mesa é o clássico "cooler" que custa stacks.

**Q. Qual é a mão vencedora mais comum no poker?**

A. Um par, seguido de dois pares. Como todo mundo divide as mesmas cinco cartas comunitárias, a maioria dos potes de Texas Hold'em é decidida por um único par e seu kicker — flushes, sequências e full houses ganham bem menos do que os iniciantes imaginam. A frequência completa de cada resultado está na tabela lá em cima.

**Q. Com que frequência a melhor mão ganha no poker?**

A. Menos do que você imagina, se contar antes do river. Até um par de ases — a melhor mão inicial — ganha só cerca de 85% das vezes em heads-up, e bem menos contra uma mesa cheia. No river, as melhores cinco cartas ganham por definição; as viradas acontecem antes, quando uma mão feita é ultrapassada por um projeto vivo.

**Q. Quais são as odds de ter os nuts?**

A. Não existe número único — os nuts (a melhor mão possível naquela mesa) mudam a cada mesa nova. Numa mesa seca e sem pares, os nuts podem ser o top set; numa mesa conectada, podem ser uma sequência ou um flush. A habilidade não é decorar uma porcentagem, é ler qual mão *é* os nuts e avaliar a chance de um adversário tê-la.

---

## Os 3 números para gravar na memória

1. **Flopar uma trinca: ~12% (1 em 8,5).** A frequência de acerto abre a conta do set mining; a profundidade dos stacks e o pagamento provável decidem se o call compensa.
2. **Projeto de flush até o river: 35%.** Nove outs, regra do 4 → 9 × 4 = 36%.
3. **Pot odds ganham do feeling.** Use a probabilidade das cartas que este call compra e compare o preço com sua chance de ganhar — completar o projeto nem sempre basta.

O poker recompensa os jogadores que tornaram isso automático. Aprenda a tabela, treine a regra do 2 e 4, e comece a perguntar "quais são as odds?" *antes* de agir, em vez de depois. Em seguida, ponha a matemática para trabalhar aprendendo [quais mãos iniciais jogar de cada posição](/pt/blog/holdem-starting-hands-chart), ou revise [por que um flush ganha de uma sequência](/pt/blog/holdem-flush-vs-straight) para sempre saber o quanto seus outs valem.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Ranking de mãos de poker, do melhor ao pior</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">A ordem que essas odds criam — cada mão no ranking</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mãos Iniciais</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tabela de mãos iniciais por posição</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quais dessas 1.326 mãos realmente jogar</div>
  </a>
  <a href="/pt/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Confronto de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Um flush ganha de uma sequência?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Por que a mão mais rara sempre ganha</div>
  </a>
  <a href="/pt/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Leitura de Mesa</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Como ler a mesa no Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Conte seus outs enxergando cada projeto</div>
  </a>
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Como a posição muda tudo</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Quando as odds justificam um call — e quando a posição justifica</div>
  </a>
</div>
`.trim(),
};
