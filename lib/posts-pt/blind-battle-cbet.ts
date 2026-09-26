import type { Post } from "../posts";

// PT-BR: tradução do EN atual, com rótulos do app conferidos em 2026-09-15.
export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "K-T-6: c-bet entre os blinds",
  seoTitle: "C-bet blind vs blind: o SB aposta 67,4% no K-T-6",
  desc: "No K-T-6 entre os blinds, o SB aposta 67,4% mesmo fora de posição. Veja como os ranges e a realização de equity explicam esse spot.",
  tldr: "Depois da abertura do small blind e do call do big blind, o flop K♥T♦6♠ recebe aposta em 67,4% e check em 32,6%. Nos sete potes com um único aumento anteriores da série, o jogador fora de posição apostava só 0,1%–23,7%. Duas coisas mudaram: agora ele é quem abriu o pote, não quem pagou, e o board favorece seu range. Juntas, elas levam sua realização de equity a 103,1%, mesmo fora de posição.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "10 min",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-pt.webp",
  imageAlt: "Tela do solver de poker da HoldemMaster no flop K♥T♦6♠, com a maior parte do range do small blind na cor da aposta de 2bb",
  keepImagesInBody: true,
  tags: ["c-bet blind vs blind", "flop K-T-6", "abertura do small blind", "realização de equity fora de posição", "board K-high"],
  content: `
Nos sete potes com um único aumento anteriores desta série, um padrão se repetiu: **quem age primeiro dá check na maior parte das vezes**. A maior frequência de aposta fora de posição foi 23,7%, no [board conectado 9-8-7](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp"). Nos outros seis, ela não passou de 11,2%. Até aqui, a exceção era o pote de 3-bet.

Este não é um pote de 3-bet. É uma mão comum: o small blind (SB) abre para 3bb e o big blind (BB) paga. E **quem age primeiro aposta em 67,4% do range**.

O que mudou? O pote é pequeno, de 6bb, e os stacks ainda têm 97bb. Mudaram **quem age primeiro e qual range o board favorece — as duas coisas ao mesmo tempo**. Todos os números abaixo vêm do [solver de poker GTO da HoldemMaster](/pt/solver).

:::stripe
Spot | SB abre 3bb → BB paga (blind vs blind)
Flop | K♥ T♦ 6♠ (rainbow)
Pote · Stack | Pote 6bb · stack efetivo 97bb · **SPR 16,2**
Resultado | SB aposta **67,4%** — primeiro pote com um único aumento da série em que OOP aposta na maioria das vezes
:::

> **Resposta rápida**
> No K-T-6 entre os blinds, a primeira ação do small blind é **aposta em 67,4%, check em 32,6%**. É o inverso dos 0,1%–23,7% dos exemplos ① a ⑦, e há **duas diferenças**: o jogador fora de posição (OOP) é **quem abriu o pote, não quem pagou**, e o board traz um rei acompanhado de outra carta Broadway. O papel pré-flop não explica tudo: o mesmo small blind que abriu aposta só **9,6%** no [board 7-6-5](/pt/blog/blind-battle-connected-board), mais adiante na série. Aqui, o agressor pré-flop também age primeiro e tem o range favorecido pelo board. O resultado é uma **realização de equity de 103,1% fora de posição**, a primeira acima de 100% num pote com um único aumento desta série.

## Quais condições produziram estes números?

★**A configuração mudou de novo.** Pote, stack e papéis são diferentes dos exemplos anteriores; por isso, a tabela vem primeiro.

| Condição | Este spot (blind vs blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (pote de 3-bet) |
|---|---|---|---|
| Ação pré-flop | **SB abre 3bb → BB paga** | BTN abre 2,5bb → BB paga | BB dá 3-bet para 11bb → BTN paga |
| OOP (age primeiro) | **SB — quem abriu** | BB — quem pagou | BB — quem deu a 3-bet |
| IP | BB — quem pagou | BTN — quem abriu | BTN — quem pagou |
| Pote inicial | **6bb** | 5,5bb | 22,5bb |
| Stack efetivo | **97bb** | 97,5bb | 89bb |
| SPR | **16,2** | 17,7 | 4,0 |
| Tamanhos de aposta | Cerca de um terço do pote, **um único tamanho** | Cerca de um terço e três quartos (⑦ tem só um) | Cerca de um terço e dois terços |
| Rake | Não considerado | Não considerado | Não considerado |
| Data da consulta | 2026-08-08 (resultado do exemplo de estudo) | 2026-08-08 | 2026-08-08 |

O pote de 6bb é ==3 do SB mais 3 do BB==. Os dois blinds participam da mão, então não existe um blind de outro jogador que foldou para acrescentar. O stack efetivo é ==100 − 3 = 97bb==. Nas comparações, BTN é o botão; IP indica o jogador em posição.

A tela usa **big blinds**: as apostas aparecem como "Bet 2bb (33% do pote)", com valor e fração do pote juntos, e o valor esperado (EV) aparece como "EV (bb)".

## Com que frequência o small blind aposta?

**67,4% de aposta, 32,6% de check.** Dos 538 combos, 362,1 entram na aposta.

| Primeira ação do SB | Frequência | Combos |
|---|---|---|
| Bet 2bb (33% do pote) | **67,4%** | 362,1 |
| Check | 32,6% | 175,9 |

Comparando com o restante da série, a diferença aparece:

| Spot | Quem está fora de posição | Frequência de aposta OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB, quem pagou | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB, quem pagou | 3,0%–3,2% |
| **7♦6♦5♣ blind vs blind (⑫)** | **SB, quem abriu** | **9,6%** |
| Q♠9♠2♠ monotone (⑤) | BB, quem pagou | 11,2% |
| 9♥8♥7♣ conectado (④) | BB, quem pagou | 23,7% |
| **K♥T♦6♠ blind vs blind (⑪)** | **SB, quem abriu** | **67,4%** |
| **A♠A♥6♦ blind vs blind (⑬)** | **SB, quem abriu** | **80,1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB, quem deu a 3-bet | 98%–100% |

**Não leia isso como "o papel do jogador é tudo".** O mesmo small blind que abre produz 9,6% no ⑫, 67,4% aqui e 80,1% no ⑬: uma **amplitude de 70,5 pontos percentuais**. E os 9,6% do ⑫ ficam *abaixo* dos jogadores que apenas pagaram no ⑤ (11,2%) e no ④ (23,7%). Só aparece uma separação absoluta entre callers e agressores se você apagar aquelas duas linhas. O que de fato se destaca são **os potes de 3-bet, com 98%–100%**; as outras frequências dependem **do papel pré-flop e do board juntos**.

## Por que o jogador fora de posição aposta primeiro aqui?

**Porque o agressor pré-flop também é o primeiro a agir no flop.** ⚠ Nesta série, toda aposta majoritária vem dessa posição, mas ela não garante nada, e quem pagou ainda pode sair apostando parte das vezes (23,7% no ④). A mesma estrutura produz **9,6%** [no ⑫](/pt/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-pt.webp") e **80,1%** [no ⑬](/pt/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-pt.webp"). O papel abre a possibilidade; o board determina quanto o range pode apostar.

Numa mão comum, essas duas funções ficam separadas. Quando o botão abre e o big blind paga, **o agressor é o botão, mas quem age primeiro é o big blind**. Daí vem a sequência de check seguido de c-bet, a estrutura dos exemplos ① a ⑦.

Entre os blinds, as duas funções se encontram. O small blind aumentou e é o primeiro no flop. **A vantagem de range e a primeira ação ficam com o mesmo jogador neste board.**

| Situação | Agressor pré-flop | Primeiro a agir no flop | Aposta OOP |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | funções separadas → 0,1%–23,7% |
| SB vs BB (⑪ K-T-6) | **SB** | **SB** | funções juntas → **67,4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | funções juntas, mas ainda assim → **9,6%** |

⚠ **Não apague a terceira linha.** Reunir as duas funções **permite apostar sem determinar a frequência**: o [⑫](/pt/blog/blind-battle-connected-board) tem exatamente a mesma estrutura de posições e aposta 9,6%. Sem essa combinação, o jogador raramente sai apostando nos exemplos da primeira linha. Com ela, ainda é preciso **que o board favoreça seu range**.

A equity quantifica essa vantagem: **55,3% do SB contra 44,7% do BB**. Nos exemplos ① a ⑦, o jogador fora de posição tinha 45,1%–48,5%, sempre menos da metade. Aqui, o sentido se inverte.

:::pull[A decisão de apostar primeiro depende da força do seu range neste board, não apenas da posição.]:::

A desvantagem de posição existe tanto para o big blind em ①–⑦ quanto para o small blind aqui. A diferença é **a relação entre range e board** — ⚠ e isso não pode ser reduzido ao range sozinho. No [board 7-6-5](/pt/blog/blind-battle-connected-board), o range é *literalmente o mesmo*, mas o check chega a 90,4%.

## Por que 67% aqui, se no pote de 3-bet a aposta chega a 100%?

**Porque o range de defesa do big blind é amplo.** Esse é o ponto em que o exemplo se afasta da aposta de 100% no pote de 3-bet.

Os dois ranges têm quase o mesmo tamanho: **538 combos no SB e 525 no BB**. Muitas mãos acompanharam a abertura. O small blind aumentou só para 3bb; como o big blind já havia colocado 1bb, precisava acrescentar apenas 2bb. O preço permitiu defender um range amplo.

Contra tanta variedade de mãos, **não dá para apostar tudo contando com folds**. Por isso, 32,6% fica no check.

As mãos que dão check cumprem funções diferentes. Ali estão tanto **mãos fracas demais para apostar** quanto **mãos que dão check para induzir uma aposta**. Se o adversário interpretar o check como fraqueza e apostar, pode encontrar um [check-raise](/pt/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-pt.webp").

:::note[⚠ Este exemplo foi calculado com uma única opção de aposta: um terço do pote. Se você permitir um tamanho maior na árvore, os próprios 67,4% podem mudar. Leia o resultado como "apostar pequeno com um range amplo é a resposta sob estas condições".]:::

## Como os dois ranges se diferenciam?

**As categorias fortes se concentram no small blind; as mãos não formadas, no big blind.**

![Composição dos ranges do small blind e do big blind no flop K♥T♦6♠, comparada por categoria de mão](/images/gto-sb-king-mid-ranges-pt.webp "K-T-6 entre os blinds · o big blind tem cerca de 10 pontos percentuais a mais de mãos não formadas")

| Categoria | SB (OOP · quem abriu) | BB (IP · quem pagou) |
|---|---|---|
| Set/Trinca | **1,7%** | 0,6% |
| Dois pares | 2,4% | **2,5%** |
| Overpair (AA) | **1,1%** | 0,0% |
| Top pair (K) | **15,6%** | 10,9% |
| Segundo par (T) | 11,7% | **13,7%** |
| Par fraco | 6,1% | **8,0%** |
| Underpair | **10,0%** | 8,0% |
| A-high | **26,8%** | 22,1% |
| Sem mão feita | 24,5% | **34,3%** |

Duas linhas são centrais. **Top pair fica em 15,6% contra 10,9% a favor do small blind; Sem mão feita, em 24,5% contra 34,3%, quase 10 pontos a mais para o big blind.**

⚠ Mas "sem mão feita" não significa "sem nada". O solver conta draws em uma classificação separada. **As quatro linhas abaixo são mutuamente exclusivas, e cada coluna soma 100%.**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| OESD (sequência de duas pontas) | 3,0% | 2,3% |
| Gutshot | **16,4%** | **16,0%** |
| Backdoor FD | 17,8% | **21,1%** |
| Sem draw | **62,8%** | 60,6% |

**Não existe linha de Flush draw**: o board tem três naipes diferentes, então nenhum jogador pode ter quatro cartas para um flush neste flop. Em compensação, há uma parcela considerável de backdoors. Eles precisam acertar turn e river, por isso completam poucas vezes.

Os 3,0% de draw de duas pontas equivalem a ==0,030 × 538 = cerca de 16 combos==. Neste board, uma única combinação de valores forma esse draw: **Q-J**. A sequência parcial K-Q-J-T precisa de um ás ou um nove: **oito outs**. Dezesseis é exatamente o número de combos de Q-J. A linha de gutshots é maior porque inclui A-Q, A-J, Q-9, J-9, 9-8 e 8-7.

Ainda assim, quando cerca de um terço do range adversário nem fez par e o topo do seu range é mais forte, apostar pequeno com muitas mãos é o padrão deste exemplo.

Os sets apontam na mesma direção. Três pares na mão formam set neste flop — K-K, T-T e 6-6 —, e **o small blind tem os três, nove combos (1,7%), enquanto o big blind fica só com 6-6, três combos (0,6%)**. Nesta configuração, o big blind dá 3-bet com K-K e T-T contra a abertura do small blind, em vez de pagar. Os overpairs pertencem ao small blind pelo mesmo motivo: A-A, seis combos.

## Por que a realização de equity chega a 103,1% fora de posição?

**Porque a vantagem de range supera por pouco a desvantagem de posição.** Comparar estes números com os da série ajuda a ver a diferença.

| Métrica | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55,3% | 44,7% |
| EV (bb) | 3,42 | 2,58 |
| **EQR (realização de equity)** | **103,1%** | 96,1% |

O pote é de 6bb, então a parcela bruta do small blind vale ==6 × 55,3% = 3,32bb==, enquanto o EV efetivo é 3,42bb. Assim, ==3,42 ÷ 3,32 ≈ 103,1%==.

Selecionando sete exemplos da série e ordenando pela EQR:

| Spot | Quem está fora de posição | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ seco (①) | quem pagou | 45,1% | 84,0% |
| 6♠5♥2♦ baixo (⑦) | quem pagou | 48,3% | 84,3% |
| 9♥8♥7♣ conectado (④) | quem pagou | 48,5% | 93,2% |
| **K♥T♦6♠ blind vs blind (⑪)** | **quem abriu** | **55,3%** | **103,1%** |
| 8♦5♣2♠ pote de 3-bet (⑩) | quem deu a 3-bet | 58,6% | 106,9% |
| A♦K♠2♥ pote de 3-bet (⑧) | quem deu a 3-bet | 68,9% | 109,6% |
| Q♥T♥7♠ pote de 3-bet (⑨) | quem deu a 3-bet | 58,3% | 117,8% |

**Todas as linhas acima de 100% pertencem a quem não foi o caller.** ⚠ A recíproca não vale: **"não ser o caller" não implica "passar de 100%"**. O [board 7-6-5](/pt/blog/blind-battle-connected-board), que não aparece nesta tabela, traz o mesmo small blind que abriu com **85,3%**, entre os callers. E este exemplo é o mais próximo do limite entre os que o ultrapassam: 103,1% passa por pouco.

⚠ **Uma EQR maior também não significa uma vantagem maior.** Veja a ordenação: a maior vantagem de range da tabela, no ⑧ com **68,9%** de equity, produz **109,6%** de EQR, *abaixo* dos **117,8%** do ⑨, que tem **58,3%** de equity — cerca de dez pontos a menos. A fórmula é ==EV ÷ (equity × pote)==, então **a equity está no denominador**: para o mesmo EV, quanto menor ela for, maior será a razão. Neste exemplo, a vantagem construída com uma abertura leva a 103,1%; não faz sentido julgá-la como se "pudesse ter chegado a 117,8%".

Os 96,1% do big blind são o outro lado do resultado. **Mesmo em posição, ele realiza menos que sua parcela bruta.** Para entender por que a posição costuma valer dinheiro e quando ela não basta, veja [por que a posição importa](/pt/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## O que muda na mesa?

- **Entre os blinds, não use "estou fora de posição, então dou check" como resposta automática.** Se você abriu do small blind, a vantagem de range **pré-flop** é sua, e neste board o solver aposta 67,4%. **Mas o board continua importando**: um rei acompanhado de uma carta Broadway combina com o range de abertura. Nos boards que favorecem quem pagou, o check volta mesmo dessa posição. O [7♦6♦5♣ conectado](/pt/blog/blind-battle-connected-board) mostra exatamente isso: o mesmo small blind aposta só 9,6%.
- **O tamanho é um terço do pote.** Com o big blind defendendo 525 combos, a solução deste exemplo é apostar pequeno com muitas mãos. ⚠ Não transforme isso em "apostar grande é pior": **a árvore só oferecia 33% do pote**. Como nenhum tamanho maior foi calculado, esta resolução não responde ao que aconteceria com uma aposta grande. O [exemplo A-A-6](/pt/blog/ace-paired-board-strategy), mais adiante, também oferece 75%.
- **★Com SPR 16,2, decida antes o que fará diante de um aumento.** Apostar 67,4% do range significa enfrentar aumentos com frequência. Com **dezesseis potes** ainda no stack, não é uma situação para comprometer tudo automaticamente com top pair. É diferente do pote de 3-bet com SPR 4,0, em que um aumento já colocava o stack em discussão. Aqui, pagar e ver o turn serve a uma parcela muito maior do range; fora dos nove combos de set e dos **dois pares (K-T, K-6, T-6)**, há pouco motivo para comprometer tudo. 🪶 Lembre que **A-A está abaixo de dois pares**: um overpair continua sendo apenas um par, e um par perde para dois. A tabela segue essa ordem: set → dois pares → overpair. Os 1,7% · 2,4% · 1,1% ao lado são parcelas do range, não uma classificação de força. ⚠ O nó após um aumento não está nesta resolução; esta é uma interpretação a partir do SPR, não uma frequência calculada pelo solver.
- **Ao defender o big blind, lembre o que acontece quando K-K e T-T vão para a 3-bet.** É exatamente a estrutura deste board: o único set do big blind é 6-6. Seu range de call perde aquelas mãos fortes.
- **Não interprete os 32,6% de check como fraqueza.** Mãos que podem dar check-raise também entram nessa mistura. Vale reler os critérios gerais de [estratégia de c-bet](/pt/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") pensando neste papel do small blind.

:::readnext[Continue lendo]
/pt/blog/3bet-pot-low-board | 8-5-2: overpairs mantêm a pressão | /images/gto-3bp-low-oop-pt.webp
/pt/blog/blind-battle-connected-board | 7-6-5: a c-bet cai para 9,6% | /images/gto-sb-connected-oop-pt.webp
:::

## Como conferir no solver de poker?

Você encontra estes números abrindo o [solver de poker](/pt/solver) e seguindo **Spots de estudo → "Board K-high com um T" → [⚡ Ver resultados]**. Para jogar o mesmo spot como exercício, abra o [Treinador GTO](/pt/solver) na barra lateral. Ele distribui uma mão aleatória e, depois que você escolhe a ação, mostra a frequência da estratégia mista e a **perda de EV (bb)** da sua escolha. Por padrão, o histórico fica neste dispositivo; ao entrar com uma conta HoldemMaster, o histórico de Spots de estudo e do Desafio do dia é sincronizado entre dispositivos.

Confira primeiro o seletor Jogador no alto: **"OOP (SB (open-raiser))"**. A diferença para o "OOP (BB (caller))" dos exemplos anteriores mostra, na própria tela, o que significa a mudança de papel. É gratuito, sem instalação e sem necessidade de conta.

**Q. O small blind deve dar c-bet sempre contra o big blind?**

A. Não. Neste board, o solver aposta 67,4% e deixa 32,6% no check. Ainda assim, é bem diferente dos potes comuns com um único aumento, nos quais o jogador fora de posição aposta 0,1%–23,7%. **Quando o papel muda, o ponto de partida muda.** Lembre que K-T-6 favorece quem abriu: assim como a textura separou 0,1% de 23,7% nos exemplos anteriores, a frequência do small blind cai nos boards que favorecem quem pagou.

**Q. Estar fora de posição é sempre ruim no poker?**

A. É uma desvantagem, mas não decide tudo. Aqui, o small blind realiza 103,1% de sua equity sem posição, enquanto o big blind, em posição, realiza 96,1%. Uma vantagem de range suficiente pode compensar a posição. O contrário também ocorre: um range fraco pode realizar mal sua equity mesmo em posição.

**Q. Por que apostar só um terço do pote?**

A. Porque o range de defesa do adversário é amplo. Os dois ranges têm tamanhos próximos: 538 e 525 combos. Contra uma defesa ampla, pressionar com muitas mãos a um preço pequeno é a solução encontrada aqui. Lembre, porém, que este exemplo oferecia apenas 33% do pote; não houve comparação calculada com uma aposta maior.

**Q. Por que 6-6 é o único set do big blind neste board?**

A. Porque, nesta configuração, K-K e T-T dão 3-bet contra a abertura do small blind, em vez de pagar. O range de call do big blind mantém só 6-6: três combos (0,6%). O small blind tem K-K, T-T e 6-6, somando nove (1,7%). A-A está fora do range do big blind pelo mesmo motivo.
`.trim(),
};

export default POST;
