import type { Post } from "../posts";

// PT-BR: tradução do EN atual. Duas opções de aposta; valores exibidos arredondados.
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "A-A-6: a c-bet sobe para 80,1%",
  seoTitle: "Flop A-A-6: por que a c-bet do SB chega a 80,1%",
  desc: "No A-A-6 entre os blinds, o SB aposta 80,1% e tem 88 combos de trinca contra 66 do BB. Compare com o flop baixo pareado 6-6-3.",
  tldr: "Depois da abertura do small blind e do call do big blind, o flop A♠A♥6♦ recebe aposta em 80,1%: 79,6% a um terço do pote e 0,5% a três quartos, com check em 19,8%. No board pareado 6♣6♦3♥, a aposta era só 3,0%, mas ali também mudam os papéis e os ranges. O ponto não é apenas o board ter par, e sim qual range ele favorece. Aqui, as trincas com um ás somam 88 combos contra 66; A-K e A-Q, 16 desses combos, não existem no range de call do big blind.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-08-21",
  readTime: "10 min",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-pt.webp",
  imageAlt: "Tela do solver de poker da HoldemMaster no flop A♠A♥6♦, com a maior parte do range do small blind na cor da aposta pequena",
  keepImagesInBody: true,
  tags: ["c-bet no flop A-A-6", "board com ás pareado", "trips entre os blinds", "vantagem de range no A-A-6", "aposta em board pareado"],
  content: `
Você já deve ter ouvido que não se aposta em boards pareados. No [board 6-6-3](/pt/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-pt.webp") desta série, quem agia primeiro apostava só **3,0%**.

Este board também tem par: A♠ A♥ 6♦. E o small blind aposta **80,1%**.

Pote de 6bb, stack efetivo de 97bb e small blind como quem abriu: esses pontos são os mesmos dos dois exemplos anteriores. Um board antes, desse mesmo papel, [ele apostava só 9,6%](/pt/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-pt.webp"). Aqui está o outro extremo. Todos os números abaixo vêm do [solver de poker GTO da HoldemMaster](/pt/solver).

:::stripe
Spot | SB abre 3bb → BB paga (blind vs blind)
Flop | A♠ A♥ 6♦ (pareado · sem possibilidade de flush draw)
Pote · Stack | Pote 6bb · stack efetivo 97bb · SPR 16,2
Resultado | SB aposta **80,1%** — contra 3,0% no board pareado 6-6-3
:::

> **Resposta rápida**
> No board pareado A-A-6, a primeira ação do small blind é **aposta em 80,1%, check em 19,8%**; 79,6% do range usa um terço do pote. É o inverso dos 3,0% do 6-6-3. A diferença não se explica apenas pelo par no board, mas por **qual range é favorecido por esse par**, considerando também a mudança de posições e ranges entre os exemplos. As trincas com um ás somam **88 combos contra 66**, e **A-K e A-Q — 16 combos — não existem no range de call do big blind**. Essas mãos foram para a 3-bet antes do flop.

## Quais condições produziram estes números?

★**As mesmas dos dois exemplos anteriores, mas com duas opções de aposta.** Os exemplos ⑪ e ⑫ ofereciam apenas um terço do pote; este também permite três quartos.

| Condição | Este spot ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥T♦6♠ |
|---|---|---|---|
| Ação pré-flop | SB abre 3bb → BB paga | igual | igual |
| OOP (age primeiro) | SB — quem abriu | igual | igual |
| Pote · Stack efetivo | 6bb · 97bb | igual | igual |
| SPR | 16,2 | igual | igual |
| **Tamanhos de aposta** | **Dois: cerca de 33% e 75% do pote** | Um, 33% | Um, 33% |
| Range do SB | 503 combos | 572 combos | 538 combos |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ T♦ 6♠ |
| Rake | Não considerado | Não considerado | Não considerado |
| Data da consulta | 2026-08-08 (resultado do exemplo de estudo) | 2026-08-08 | 2026-08-08 |

O pote de 6bb é ==3 do SB mais 3 do BB==, o stack efetivo é ==100 − 3 = 97bb==, e a relação entre stack e pote (SPR) fica em ==97 ÷ 6 = 16,2==. Nos três exemplos, o range é o mesmo; **só o número de combos diminui conforme as cartas retiradas pelo board**. Dois ases no flop eliminam muitas combinações com ás, por isso 503 é o menor dos três totais. SB é o small blind, fora de posição (OOP); BB é o big blind, em posição (IP).

A tela usa **big blinds**: as apostas aparecem como "Bet 4,5bb (75% do pote)", e o valor esperado (EV), como "EV (bb)".

## Com que frequência o small blind aposta aqui?

**79,6% no tamanho pequeno, 0,5% no grande e 19,8% de check.** As apostas somam 80,1%, cerca de 403 dos 503 combos. Por arredondamento, as frequências exibidas não fecham o total exato, e os combos de aposta somam 403,1, sem que isso indique outra estratégia.

| Primeira ação do SB | Frequência | Combos |
|---|---|---|
| Bet 4,5bb (75% do pote) | 0,5% | 2,7 |
| Bet 2bb (33% do pote) | **79,6%** | 400,4 |
| Check | 19,8% | 99,8 |

Comparando com a série, dá para ver onde este resultado fica.

| Spot | Quem está fora de posição | Frequência de aposta OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB, quem pagou | 0,1%–1,9% |
| **6♣6♦3♥ board pareado (⑥)** | BB, quem pagou | **3,0%** |
| 6♠5♥2♦ baixo (⑦) | BB, quem pagou | 3,2% |
| 7♦6♦5♣ blind vs blind (⑫) | SB, quem abriu | 9,6% |
| Q♠9♠2♠ monotone (⑤) | BB, quem pagou | 11,2% |
| 9♥8♥7♣ conectado (④) | BB, quem pagou | 23,7% |
| K♥T♦6♠ blind vs blind (⑪) | SB, quem abriu | 67,4% |
| **A♠A♥6♦ board pareado (⑬)** | **SB, quem abriu** | **80,1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB, quem deu a 3-bet | 98%–100% |

**Os dois boards pareados ficam perto de extremos opostos da tabela.** Ou seja: o rótulo "board pareado" não determina a estratégia.

## Dois boards pareados, 3,0% e 80,1%: o que explica a diferença?

**O restante do range, não apenas o número de trincas.** O 6-6-3 é o contraexemplo decisivo: ali, **quem agia primeiro tinha mais trincas** e ainda assim apostava só 3,0%.

| Comparação | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Quem age primeiro | BB — quem pagou | **SB — quem abriu** |
| Parcela de trips | BB 5,3% vs BTN 4,0% — **quem age primeiro tem mais** | SB 17,5% vs BB 13,1% — quem age primeiro tem mais |
| Equity OOP | 47,2% | **56,2%** |
| EQR OOP | 83,7% | **104,1%** |
| Frequência de aposta OOP | **3,0%** | **80,1%** |

No 6-6-3, o big blind defendeu barato com mãos que o botão (BTN) não abre: J-6s, T-6s e 9-6s. Seus combos de trips com um seis somaram 26 (5,3%), contra 20 (4,0%) do adversário. **Mesmo assim, apostava só 3,0%.** Somando todas as mãos que acrescentam algo ao par do board, são **18,4% no big blind contra 20,3% no botão**: o botão está à frente. O big blind liderava apenas na linha de trips. Nos 81,6% restantes, a disputa de "par de seis com carta alta", também ficava atrás: 26,3% de A-high contra 31,9%.

Aqui, o restante do range também favorece o small blind. K-high ocupa 22,3% contra 18,2%; mãos que não acrescentaram nada ao board ficam em 39,8% contra 51,5%, **11,7 pontos percentuais a mais para o adversário**.

:::pull[A frequência de aposta depende da vantagem do range inteiro, não só da quantidade de combos da sua melhor categoria.]:::

O ás é uma carta mais presente no range do agressor pré-flop: neste exemplo, 95 combos contra 72, **cerca de 1,3 vez a quantidade**. Quando ele aparece duas vezes no flop, o topo e o restante do range ficam favorecidos **na mesma direção**. É quando a frequência de aposta chega a 80%.

## Quem tem mais trips no A-A-6?

**88 combos (17,5%) no small blind, 66 (13,1%) no big blind.** Mas **o que falta** importa mais que a quantidade. O solver usa o rótulo "Set/Trinca"; neste board, a categoria corresponde às trips, trincas feitas com o par do board.

![Comparação das categorias dos ranges do small blind e do big blind no flop A♠A♥6♦](/images/gto-sb-paired-ace-ranges-pt.webp "A-A-6 entre os blinds · mãos que não melhoraram o board: 39,8% contra 51,5%")

| Categoria | SB (OOP · quem abriu) | BB (IP · quem pagou) |
|---|---|---|
| Quadra | **0,2% (1 combo)** | 0,0% (0 combos) |
| Full house | 1,8% (9 combos) | 1,8% (9 combos) |
| Set/Trinca | **17,5% (88 combos)** | 13,1% (66 combos) |
| Dois pares | **18,5% (93 combos)** | 15,4% (78 combos) |
| K-high | **22,3% (112 combos)** | 18,2% (92 combos) |
| Sem mão feita | 39,8% (200 combos) | **51,5% (260 combos)** |

Três pontos resumem o spot.

- **As trips do big blind não incluem A-K nem A-Q.** Contra a abertura de 3bb do small blind, essas mãos dão 3-bet em vez de pagar. As trips superiores que só o small blind tem são ==8 combos de A-K + 8 de A-Q + 6 de A-J offsuit = 22 combos==. Ambos podem ter trinca de ases, mas essas mãos já vencem a disputa de kicker.
- **A quadra pertence apenas ao small blind.** Com A♠ e A♥ no board, só restam A♦ e A♣: A-A é **exatamente um combo**. O big blind dá 3-bet com A-A e não tem nenhum.
- **Mais da metade do range do big blind não melhorou o board.** São 260 combos (51,5%). Essa parcela oferece alvos para blefes, mas **51,5% não é uma frequência de fold calculada**; a resposta à aposta não está neste exemplo.

Só os full houses empatam em quantidade: ambos têm ==3 combos de 6-6 + 6 combos de A-6 = 9==. **Fora essa linha, as demais categorias superiores favorecem proporcionalmente o small blind; só a parte de baixo, das mãos que não melhoraram, pesa 11,7 pontos a mais para o big blind.**

A equity mostra o resultado.

| Métrica | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56,2%** | 43,8% |
| EV (bb) | 3,51 | 2,49 |
| **EQR (realização de equity)** | **104,1%** | 94,8% |

O pote é de 6bb, então a parcela bruta do small blind vale ==6 × 56,2% = 3,372bb==, contra um EV efetivo de 3,51bb: ==3,51 ÷ 3,372 = 104,1%==. Os dois EVs somam ==3,51 + 2,49 = 6,0bb==, exatamente o pote.

**A realização de equity passa de 100% mesmo fora de posição.** É a **maior dos três exemplos entre os blinds**: ⑪ com 103,1%, ⑫ com 85,3% e este com **104,1%**. É o segundo deles, na ordem da série, a ultrapassar 100%; a vantagem de range um pouco maior o leva além do ⑪. Os potes de 3-bet também passam de 100% fora de posição, com 106,9%–117,8%, mas ali a vantagem foi construída com uma 3-bet.

## Por que o tamanho grande quase não aparece?

**Porque a vantagem se espalha pelo range, em vez de ficar concentrada só em mãos muito fortes.** A aposta de três quartos do pote recebe 0,5%, apenas 2,7 combos. Na prática, quase tudo usa um tamanho.

Os potes de 3-bet mostraram o caso oposto. No [board baixo 8-5-2](/pt/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-pt.webp"), o big blind apostava dois terços do pote em 97,8%, pois o range se dividia em duas parcelas parecidas: **overpairs ou A-high**, um formato polarizado. Um range concentrado nos extremos favorece apostas grandes.

Aqui, a distribuição é **contínua**: trips 17,5%, dois pares 18,5%, K-high 22,3% e mãos que não melhoraram 39,8%. Nesse formato, o solver usa uma aposta pequena com muitas mãos. Os 51,5% do range adversário que não melhoraram oferecem oportunidades para ganhar o pote com folds, **sem que 51,5% seja a frequência de fold medida**. Quando há call, a aposta pequena mantém o pote menor e não compromete de imediato os 97bb restantes; isso não elimina o risco de aumentos ou apostas posteriores.

:::note[⚠ Este exemplo foi calculado com duas opções de tamanho: 33% e 75%. Se você incluir uma menor, como um quinto ou um quarto do pote, os 79,6% podem migrar para ela. Leia como "o menor dos tamanhos disponíveis", não como "33% é sempre a resposta".]:::

## Quais mãos formam os 19,8% de check?

**Nenhuma categoria fica inteira no check; há uma parcela de cada uma.** Na consulta ao app em 2026-08-21, os pares na mão davam check em **K-K 72,4%, Q-Q 66,2%, J-J 42,0% e T-T 21,6%**. K-K e Q-Q preferem check, mas **T-T já aposta cerca de 78%**. Os 99,8 combos de check também não se resumem a "força média": **as mãos que não melhoraram são o maior grupo, com cerca de 44%**, seguidas por K-high com cerca de 27%, dois pares com 17% e trips com 11%. As células com mais verde são **Broadways offsuit**, como Q-9o, Q-Jo, Q-To e J-9o. As mãos com ás e o 6-6 ficam principalmente na cor da aposta.

O motivo depende de **quem paga você**. K-K forma dois pares com os ases do board, mas **há pouco valor a extrair com apostas**. ⚠ Não traduza isso como "as mãos piores foldam, só trips melhores pagam": **a própria tabela desmente essa ideia**. Os 78 combos de dois pares do big blind são sete valores de pares na mão (42 combos) mais mãos com um seis (36), **todos abaixo de K-K**. Seus 92 combos de K-high também perdem. Contra um terço do pote, esses 170 combos, ou 33,7% do range, não foldam todos. Já as trips e os full houses que vencem K-K somam **75 combos (14,9%), menos que isso**. O valor é fino porque **muitas mãos piores podem pagar uma vez, mas não acompanhar você num pote grande**. Conforme a aposta cresce, a continuação tende a se concentrar nas trips. ⚠ **Outro ás no turn ou river não faz aqueles 170 combos ultrapassarem K-K**: num board A-A-A-6, K-K forma *full house de ases com reis*, e nenhuma daquelas mãos o vence. O check, por outro lado, dá espaço para os 260 combos que não melhoraram do big blind blefarem, e pagar pode ganhar valor — **sob a hipótese de que o adversário misture blefes**. ⚠ A frequência de blefe do big blind após o check não está neste cálculo: o exemplo termina na primeira ação do flop. Trata-se de uma interpretação da composição dos ranges.

**Isso combina com a maior parte das trips entrando na aposta.** Os 88 combos de trinca com um ás querem extrair valor dos K-high e das mãos fracas do adversário, então dão pouco check. ⚠ Dizer "todas apostam" seria errado: na consulta ao app em 2026-08-21, os **94 combos com exatamente um ás** — 88 trips mais os 6 combos de A-6 que formam full house — davam check entre **0,1% e 26,0%, com média de 12,3%**. **Nenhum combo tinha check exatamente igual a 0%.** A mistura é mais frequente nos ases com kicker baixo: A♣8♣ com 19,4%, A♣7♣ com 20,9% e A-5 até A-2 offsuit com média de 20,1%.

## O que muda na mesa?

- **Não transforme "board pareado significa check" em regra.** No 6-6-3, são 3,0%; no A-A-6, 80,1%. O critério não é apenas o par no board, **nem quantos combos daquele valor você tem**. No 6-6-3, o big blind tinha proporcionalmente mais seis — 5,3% contra 4,0% — e apostava só 3,0%. O critério é **a vantagem do seu range como um todo sobre o adversário**. A aposta chegou a 80% aqui porque o topo e o restante do range ficaram favorecidos **na mesma direção**.
- **Com dois ases no flop, não suponha que o seu ás perdeu o valor.** Se o adversário dá 3-bet com A-K e A-Q, a disputa de kicker tende a favorecer você. **Mas isso depende de essas mãos realmente irem para a 3-bet**. Contra quem só paga com A-K e A-Q, a premissa cai. Com trips de kicker fraco, você pode apostar sem procurar uma guerra de aumentos por um pote enorme.
- **Tamanho pequeno, frequência alta.** Quando a distribuição do range é contínua, o resultado aqui favorece apostar um terço com muitas mãos. O tamanho grande serve a [um range dividido entre mãos fortes e fracas](/pt/blog/3bet-pot-low-board). Mesmo nos potes de 3-bet, porém, o motivo pode mudar: num [board cheio de draws](/pt/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-pt.webp"), a aposta grande cobra caro pela continuação. **Os 80,1% também são de um cálculo heads-up**: com mais de um adversário na mão, reduza bastante as apostas com mãos que não melhoraram e concentre mais o valor em trips e dois pares.
- **Não aposte K-K e Q-Q apenas "porque são fortes".** Neste board, elas têm dificuldade para extrair muito valor de mãos piores. Dar check para capturar blefes pode ser melhor. ⚠ Esta é **uma interpretação da composição dos ranges**, não um valor medido neste exemplo. A saída pré-calculada mostra só a frequência da primeira ação do flop; não há resultado após o check **neste exemplo pré-calculado**. **A interpretação também depende de o adversário misturar blefes**: contra quem quase nunca blefa, uma aposta após seu check tende mais a representar um ás, e foldar pode ser melhor que insistir.

:::readnext[Continue lendo]
/pt/blog/blind-battle-connected-board | 7-6-5: a c-bet cai para 9,6% | /images/gto-sb-connected-oop-pt.webp
/pt/blog/a-high-board-cbet | A-7-2: top pair também dá check | /images/gto-srp-dry-ace-oop-pt.webp
:::

## Como conferir no solver de poker?

Você encontra estes números abrindo o [solver de poker](/pt/solver) e seguindo **Spots de estudo → "Board com A pareado" → [⚡ Ver resultados]**. Para jogar o mesmo spot como exercício, abra o [Treinador GTO](/pt/solver) na barra lateral. Ele distribui uma mão aleatória e, depois que você escolhe a ação, mostra a frequência da estratégia mista e a **perda de EV (bb)** da sua escolha. Sem login, o histórico fica no seu navegador.

**Alterne com o board pareado 6-6-3.** Os dois têm par, mas as matrizes mostram cores opostas. A comparação também troca os papéis pré-flop e os ranges; percorrer os exemplos deixa uma conclusão: não basta perguntar **qual é o board**, é preciso perguntar **qual range ele favorece**. É gratuito, sem instalação e sem necessidade de conta.

**Q. O que são trips no poker, e qual a diferença para set?**

A. Trips é a trinca formada com duas cartas do mesmo valor no board e uma na sua mão. No A-A-6, a maioria das mãos com um único ás se encaixa — **A-6 forma full house, não trips**, pois também combina com o seis. Aqui, são 88 combos (17,5%) no small blind e 66 (13,1%) no big blind. O *set* se forma com um par na mão e mais uma carta daquele valor no board. O 6-6 faz essa trinca de seis, mas o par de ases do board completa a melhor mão de cinco cartas: um **full house**.

**Q. Apostar com uma mão que não melhorou o board não é blefar?**

A. Mão a mão, sim. Mas, em GTO, **o blefe precisa ser pensado como uma parcela do range, não só como uma tentativa de enganar com uma mão isolada**. O solver calcula as frequências de ação das mãos; a média ponderada pelos combos produz a frequência de aposta do conjunto. Os 51,5% de mãos adversárias que não melhoraram criam oportunidades de fold, sem corresponder a uma taxa de fold medida; quando há continuação, os 88 combos de trips do small blind extraem valor. Valor e blefe usam o mesmo tamanho, impedindo que o adversário os diferencie só pela aposta.

**Q. Num board como A-A-6, qual a chance de o adversário ter um ás?**

A. Neste spot, **72 dos 505 combos do big blind (14,3%)**: 66 combos de trips mais 6 de A-6 que formam full house. Com A♠ e A♥ no board, restam só dois ases, então a frequência é menor do que pode parecer. O small blind tem **95 combos (18,9%)**: 88 trips, 6 de A-6 e 1 de A-A. O mesmo board produz respostas diferentes conforme a ação pré-flop.

**Q. Qual é a conclusão que atravessa a série?**

A. Que **"agir primeiro é uma desvantagem" conta só parte da história**. O big blind que pagou nos exemplos ① a ⑦ apostava 0,1%–23,7%. Agindo primeiro como 3-bettor, a frequência chega a 98%–100%; como small blind que abriu, varia de 9,6% a 80,1% conforme o board. É **a relação entre range e board**, junto do papel pré-flop, que determina a frequência. Você pode conferir cada um desses spots nos exemplos de estudo do [solver de poker GTO da HoldemMaster](/pt/solver).
`.trim(),
};

export default POST;
