import type { Post } from "../posts";

// PT-BR: tradução do EN atual; valores e limites preservados. UI conferida em 2026-09-15.
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "8-5-2: overpairs mantêm a pressão",
  seoTitle: "Pote de 3-bet no 8-5-2: 97,8% no tamanho grande",
  desc: "No 8-5-2 em pote de 3-bet, o BB aposta dois terços em 97,8% do range. Veja por que overpairs mantêm a pressão sem acertar o flop.",
  tldr: "Depois de uma 3-bet do big blind e do call do botão, o flop 8♦5♣2♠ recebe uma aposta de dois terços do pote em 97,8% do range. O detalhe: dos 83 combos do big blind, exatamente três fizeram par com este board — os A5s —, e 88, 55 e 22 nem estão no range. A aposta aparece porque a distribuição se concentra em 36 combos de overpairs e 40 de A-high, com quase nada entre eles. Esse formato polarizado favorece o tamanho grande.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 min",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-pt.webp",
  imageAlt: "Resultado do solver de poker da HoldemMaster no flop 8♦5♣2♠: matriz do big blind quase toda na cor da aposta grande em um pote de 3-bet",
  keepImagesInBody: true,
  tags: ["c-bet no flop baixo", "pote de 3-bet no 8-5-2", "range polarizado depois do flop", "overpairs no poker", "board seco"],
  content: `
O flop vem **8♦ 5♣ 2♠**. Você deu a 3-bet antes do flop, o board é bem seco e sua mão é A-K. Sem par, sem draw imediato. **É o tipo de situação em que dar check parece óbvio.**

O solver faz o contrário. **Aposta 14,9bb — dois terços do pote — em 97,8% do range.** E esse número não é uma frequência específica de A-K. Dos 83 combos do big blind (BB), apenas ==três== realmente fizeram um par com uma carta deste board.

Os números abaixo explicam por que esse range, que quase não fez par com o flop, usa o tamanho grande. Todos vêm do [solver de poker gratuito](/pt/solver) da HoldemMaster.

:::stripe
Spot | BB dá 3-bet → BTN paga (heads-up)
Flop | 8♦ 5♣ 2♠ (rainbow, desconectado)
Pote · Stack | Pote 22,5bb · stack efetivo 89bb · **SPR 4,0**
Resultado | Dois terços do pote em 97,8% — três combos fizeram par com o board
:::

> **Resposta rápida**
> No 8-5-2 em um pote de 3-bet, o big blind aposta **dois terços do pote em 97,8%** do range. Dos seus 83 combos, porém, só **três — os A5s — fizeram par com o board**, e 88, 55 e 22 nem estão no range. A aposta continua porque a distribuição se concentra em **36 combos de overpairs (43,4%) e 40 de A-high (48,2%)**, com quase nada entre eles. Mãos muito fortes ou sem par: quando falta a parte intermediária, o tamanho aumenta.

## Quais condições produziram estes números?

A configuração do pote de 3-bet é a mesma dos exemplos [A-K-2](/pt/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-pt.webp") e [Q-T-7](/pt/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-pt.webp"). Só o board mudou.

| Condição | Configuração |
|---|---|
| Ação pré-flop | BTN abre → **BB aumenta para 11bb com a 3-bet** → BTN paga |
| Posições | Fora de posição (OOP) = big blind, quem deu a 3-bet · Em posição (IP) = botão (BTN), quem pagou |
| Flop | 8♦ 5♣ 2♠ (três naipes diferentes) |
| Pote · Stack | Pote 22,5bb · stack efetivo 89bb (**SPR 4,0**) |
| Tamanhos de aposta | Cerca de um terço do pote (7,4bb) e dois terços (14,9bb) |
| Rake | Não considerado |
| Data da consulta | 2026-08-08 (resultado do exemplo de estudo) |

O pote de 22,5bb é ==11 da 3-bet + 11 do call + 0,5 do small blind que foldou==. A tela usa **big blinds**: o valor esperado (EV) aparece como "EV (bb)", e cada aposta mostra o valor junto da fração do pote.

## Com que frequência quem deu a 3-bet aposta?

**O tamanho grande aparece em 97,8% do range.** Quase a mesma frequência do board cheio de draws do exemplo anterior (98,4%).

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Bet 14,9bb (66% do pote) | **97,8%** | 81,1 |
| Check | 2,0% | 1,7 |
| Bet 7,4bb (33% do pote) | 0,3% | 0,2 |

O curioso é isto: **o [Q-T-7](/pt/blog/3bet-pot-bet-sizing), cheio de draws, e este board, que quase não tem nenhum, usam o mesmo tamanho com frequências quase iguais.** No exemplo anterior, a aposta grande cobrava dos draws do adversário. Aqui, o adversário não tem draws imediatos a que cobrar esse preço. **O motivo muda; a escolha de tamanho, não.**

## Só três combos fizeram par com este board?

**Sim: três combos de A5s.** Veja a composição dos 83 combos:

| Categoria | Parcela do range | Combos | Composição |
|---|---|---|---|
| Overpair | 43,4% | 36 | AA · KK · QQ · JJ · TT · 99 |
| A-high | 48,2% | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Segundo par (5) | 3,6% | 3 | **A5s** |
| K-high | 4,8% | 4 | KQs |
| **Set/Trinca** | **0%** | **0** | 88, 55 e 22 não estão neste range de 3-bet |
| **Top pair (8)** | **0%** | **0** | Nenhuma mão do range contém um oito |

As combinações fecham em números inteiros. Os 36 combos de overpairs são seis pares na mão, de 99 até AA, com seis combos cada. **Todo par na mão acima de oito vira overpair: é isso que um board baixo faz.** A5s tem três combos, e não quatro, porque o 5♣ está no board. Restam A♠5♠, A♥5♥ e A♦5♦.

Também há uma única classe de gutshot. **Os quatro combos de A4s** precisam de uma carta — um três — para completar a sequência baixa A-2-3-4-5, a wheel. O painel Draws do solver se divide em três linhas mutuamente exclusivas: **Gutshot 4,8% · Backdoor FD 16,9% (14 combos) · Sem draw 78,3%.** Isso não significa que "78,3% é tudo o que sobra depois do gutshot". É preciso somar as três linhas para chegar a 100, e os 16,9% de backdoor ficam entre as outras duas. Eles precisam de duas cartas seguidas do mesmo naipe, o que acontece em cerca de 4,2% das vezes.

## Por que apostar grande com um range que quase não acertou o flop?

**Porque o range se divide entre mãos muito fortes e mãos sem par, com quase nada no meio.** Quando essa parte intermediária falta, o tamanho aumenta.

Os 36 combos de overpairs ocupam todo o topo do range do big blind. **Com AA ou KK, você só perde para os nove combos de set do botão.** Na outra ponta, os 40 combos de A-high vencem muito pouca coisa no showdown **contra o range que paga uma aposta grande**. Contra os 144 combos iniciais do botão, a situação é diferente: 58,3% deles também não fizeram par neste board.

⚠ Não trate todos os overpairs como uma mão só. O botão também tem overpairs: 16,7%, ou 24 combos de QQ, JJ, TT e 99. Assim, o 99 do big blind perde para 18 desses combos, TT para 12 e JJ para 6. **Também existe uma hierarquia dentro da linha "Overpair".**

| Formato do range | Tamanho |
|---|---|
| Mãos fortes, médias e fracas bem distribuídas (aposta de range) | Pequeno: as mãos médias precisam receber calls |
| **Mãos fortes ou sem par (polarizado)** | **Grande: quase não há mãos médias a preservar com um preço menor** |

A relação entre stack e pote, ou SPR, de 4 mostra até onde esse tamanho pode levar. Ela não é o *motivo* da escolha; o motivo é o formato polarizado descrito acima. Com apenas 89bb para trás, **duas apostas de dois terços do pote e o que sobrar no river colocam o stack inteiro no meio**: 14,9bb no flop, 34,5bb no turn e 39,6bb no river. As duas primeiras somam ==14,9 + 34,5 = 49,4bb==, ou 55,5% do stack de 89bb.

⚠ **Isso não significa que começar pequeno elimina a possibilidade de chegar ao all-in.** Começando com 7,4bb: depois do call, o pote fica em 37,3bb e restam 81,6bb; dois terços no turn são 24,6bb, deixando pote de 86,5bb e stack de 57,0bb; o all-in de 57,0bb no river equivale a 65,9% do pote. **Além disso, a profundidade do stack não escolhe o tamanho por si só**: o [board A-K-2](/pt/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-pt.webp") tem o mesmo SPR de 4,0 e usa o tamanho **pequeno** em 57,8%. Aqui, quem produz a aposta grande é o range polarizado, não o SPR.

E os 40 combos de A-high **ganham o pote assim que o adversário folda**. Neste board, 58,3% do range do botão está nas categorias A-high, K-high ou Sem mão feita. ⚠ Mas "não fez par" não significa "vai foldar": **o nó com a resposta do botão à aposta não está disponível nesta resolução**, portanto ela não fornece uma frequência de fold. Além disso, os ases altos do botão vão de A-K a A-T e conservam algum valor de showdown. Para entender quando um blefe é lucrativo, veja a [estratégia de blefe](/pt/blog/holdem-strategy).

## Por que todos os sets estão do outro lado?

**Porque 88, 55 e 22 ficaram fora deste range de 3-bet e dentro do range de call.** É o primeiro exemplo da série em que as mãos mais fortes possíveis neste board pertencem exclusivamente ao jogador em posição.

![Comparação das categorias de mãos do big blind e do botão no flop 8♦5♣2♠ em um pote de 3-bet](/images/gto-3bp-low-ranges-pt.webp "8-5-2 em pote de 3-bet · sets só no botão; overpairs mais frequentes no big blind")

| Categoria | BB (quem deu a 3-bet) | BTN (quem pagou) |
|---|---|---|
| **Set/Trinca** | **0,0%** | **6,3%** (9 combos) |
| Overpair | **43,4%** | 16,7% |
| Top pair (8) | 0,0% | 2,1% |
| Segundo par (5) | 3,6% | — |
| Underpair | — | **16,7%** |
| A-high | **48,2%** | 36,1% |
| K-high · Sem mão feita | 4,8% | **22,2%** |

Os nove combos do botão são 88, 55 e 22, três de cada. Como uma carta de cada valor está no board, cada par na mão cai de seis combos para três. 🪶 A tabela e a tela do solver usam o rótulo **"Set/Trinca"**. No 8-5-2, só é possível formar um **set**, porque o board não tem par. Trips é a trinca formada com uma carta da mão e o par do board. O rótulo do app foi preservado; aqui, leia-o como *set*.

**Essa distribuição importa na mesa.** Todos os sets estão do outro lado, e o big blind não tem uma mão acima deles. Seus overpairs, portanto, não são as nuts neste board.

⚠ Não transforme isso em "se vier um aumento, o overpair não ganha de nada". Há dois motivos. Primeiro, **o nó de resposta a um aumento não está disponível nesta resolução**: o exemplo termina na primeira ação do flop. Segundo, a conclusão seria falsa mesmo assim. Para aumentar contra um range que aposta quase inteiro, com 97,8% no tamanho grande, é preciso misturar blefes às mãos de valor — os nove combos de set —, e **AA e KK vencem tudo nesse range de aumento, exceto esses nove combos**.

## Por que o botão realiza mais equity aqui do que nos dois exemplos anteriores?

**A realização de equity (EQR) do botão sobe para 90,3%, na mesma estrutura de pote de 3-bet.** Nos dois exemplos anteriores, era 78,7% e 75,1%. ⚠ Não foi uma melhora isolada do botão: os dois valores de EV somam o pote, então **se a parcela de EV de um sobe, a do outro cai**. A EQR do big blind desceu de 117,8% para 106,9%. São dois lados da mudança na distribuição do pote.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,6% | 41,4% |
| EV (bb) | 14,09 | 8,41 |
| **EQR** | **106,9%** | **90,3%** |

| Pote de 3-bet, três boards | EQR do BB | EQR do BTN |
|---|---|---|
| A♦K♠2♥ seco (⑧) | 109,6% | 78,7% |
| Q♥T♥7♠ two-tone (⑨) | 117,8% | 75,1% |
| **8♦5♣2♠ baixo (⑩)** | **106,9%** | **90,3%** |

O motivo está na localização dos sets. **Só o botão pode ter um**, e esses nove combos podem ganhar stacks inteiros. Seus 16,7% de underpairs — 77, 66, 44 e 33 — também estão à frente de A-high, o que dá a essas mãos um motivo para pagar a aposta.

**Neste board baixo, quem deu a 3-bet segue à frente, mas converte sua vantagem em dinheiro menos bem.** A equity de 58,6% é até um pouco maior que os 58,3% do Q-T-7, enquanto a **realização** cai de 117,8% para 106,9%. ⚠ Não interprete a mudança de 15,2 pontos do lado do **botão** (⑨ 75,1% → ⑩ 90,3%) como "a parcela que o adversário leva": EQR é a razão entre equity realizada e equity bruta, não a participação no pote. Pela participação efetiva, o botão recebe ==8,41 ÷ 22,5 = 37,4%==, contra ==7,04 ÷ 22,5 = 31,3%== no ⑨: diferença de **6,1 pontos percentuais**.

## O que muda na mesa?

- **Não use "errei o flop, então dou check" como resposta automática num board baixo e seco.** Em um pote de 3-bet, o adversário também errou: **58,3%** do range do botão não fez par aqui. ⚠ Não converta esses 58,3% em uma frequência de fold; a resposta à aposta não está nesta resolução. O motivo para apostar não é "ele vai foldar", e sim **"meu range é polarizado, e isso dá utilidade ao tamanho grande"**.
- **Mas não trate um overpair como nuts diante de um aumento.** Os nove combos de set estão do outro lado, e o botão ainda tem 24 combos de QQ até 99. **Seu 99 e seu TT são overpairs que perdem para outros overpairs.**
- **Contra quem raramente folda, reduza a parte de A-high.** Os 97,8% no tamanho grande partem de uma situação em que boa parte do range adversário não acertou o board. ⚠ De novo: "58,3% não fez par" não significa "58,3% folda". Esta resolução não fornece frequência de fold, e os 36,1% de A-high do botão são da família A-K, A-Q, A-J e A-T, sem ases fracos. 🪶 Contra 14,9bb em 22,5bb, a frequência mínima de defesa (MDF) é **60,2%**, mas é um **ponto de partida, não uma cota de calls**. A MDF trata a aposta como um blefe puro, sem equity; aqui, o range que aposta contém 36 combos de overpairs, então essa premissa não se sustenta. Se a defesa ótima fica abaixo dessa referência é algo que esta resolução não responde. Contra um jogador que paga demais, insistir com A-high por duas ou três apostas transforma a parte de blefe em prejuízo; concentre as apostas de valor nos overpairs.
- **Do lado do botão, os pares pequenos têm mais valor aqui do que nos outros exemplos da série.** 88, 55 e 22 formam sets; 77, 66, 44 e 33 estão à frente de A-high. É o contrário do [exemplo A-K-2](/pt/blog/3bet-pot-cbet), em que os underpairs tinham pouco a fazer. A construção do range de 3-bet determina essa diferença; veja a [estratégia de 3-bet](/pt/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp").
- **Calcule o SPR antes de apostar.** Com SPR 4, duas apostas de dois terços (14,9 → 34,5) e um all-in de 39,6bb no river completam exatamente 89bb. Ao apostar no flop, você já precisa ter decidido se pretende seguir até o fim.

:::readnext[Continue lendo]
/pt/blog/3bet-pot-bet-sizing | Q-T-7: 98,4% no mesmo tamanho | /images/gto-3bp-dynamic-oop-pt.webp
/pt/blog/blind-battle-cbet | K-T-6: c-bet entre os blinds | /images/gto-sb-king-mid-oop-pt.webp
:::

## Como conferir no solver de poker?

Você encontra estes números abrindo o [solver de poker](/pt/solver) e seguindo **Spots de estudo → "Board baixo e seco" → [⚡ Ver resultados]**. Para jogar o mesmo spot como exercício, abra o [Treinador GTO](/pt/solver) na barra lateral. Ele distribui uma mão aleatória e, depois que você escolhe a ação, mostra a frequência da estratégia mista e a **perda de EV (bb)** da sua escolha. Sem login, o histórico fica no seu navegador.

Procure a **ausência da linha "Set/Trinca"** no painel Mãos. Depois mude Jogador para "IP (BTN (caller))": a linha aparece com 6,3%. Ela resume quem tem o topo deste board. É gratuito, sem instalação e sem necessidade de conta.

**Q. Devo dar c-bet com A-K num flop baixo em pote de 3-bet?**

A. Neste exemplo, A-K participa de um range que aposta quase inteiro: no 8-5-2, o tamanho grande recebe 97,8% do range, apesar de A-K não ter par nem draw imediato. O motivo é o formato **polarizado — overpairs ou A-high, em duas parcelas de tamanho parecido**. Com quase nada no meio, o tamanho cresce e é usado amplamente. Os 58,3% do adversário que não fizeram par ajudam a explicar o contexto, mas não significam "58,3% folda": a resposta à aposta não está nesta resolução.

**Q. O que significa um range polarizado?**

A. Um range concentrado em mãos muito fortes e mãos fracas, com pouca presença intermediária. Aqui, o big blind tem 43,4% de overpairs e 48,2% de A-high, com quase nada entre eles. Sem muitas mãos médias que precisem receber calls, diminui o motivo para manter a aposta pequena.

**Q. Por que quem deu a 3-bet não tem sets?**

A. Porque, na configuração deste exemplo, pares pequenos como 88, 55 e 22 ficam no call ou no fold pré-flop, em vez de entrar na 3-bet. Assim, os nove combos de set deste board pertencem ao botão. É por isso que a sensação de "eu domino num pote de 3-bet" fica menos segura neste flop baixo.

**Q. Posso levar estes números diretamente para um jogo ao vivo?**

A. Use-os como referência quando as condições forem as mesmas. Se o seu range de 3-bet incluir pares pequenos ou suited connectors, a composição neste board muda, e a distribuição dos tamanhos muda junto. O cálculo não considera rake.
`.trim(),
};

export default POST;
