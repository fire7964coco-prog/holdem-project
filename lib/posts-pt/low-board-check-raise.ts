import type { Post } from "../posts";

// PT-BR: EN vigente. Resultado pré-calculado e resolução separada não se misturam.
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "6-5-2: preparando o check-raise",
  seoTitle: "Check-raise no flop 6-5-2: por que começar com check",
  desc: "No 6-5-2, o BB dá check em 96,8%. Veja como sets e draws compõem o check-raise numa resolução separada, com as decisões seguintes.",
  tldr: "No flop baixo rainbow 6♠5♥2♦, o big blind dá check em 96,8% e sai apostando em apenas 3,2%, embora sua equity de 48,3% seja a segunda maior dos sete spots em que ele defende. Só 4-3 forma sequência neste flop, e nenhum dos ranges contém essa mão. Nenhum dos ranges tem vantagem no topo, então o BB quase nunca sai apostando fora de posição. A agressividade aparece depois: numa resolução separada da mesma árvore, que permite consultar as decisões seguintes, o BB dá check-raise contra 1,8bb em 14,9%, num range de aumento formado quase todo por draws.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "11 min",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-pt.webp",
  imageAlt: "Resultado do solver GTO no 6♠5♥2♦: matriz 13×13 do big blind quase toda verde, com uma faixa fina de apostas",
  keepImagesInBody: true,
  tags: ["check-raise", "flop 6-5-2", "board baixo rainbow", "GTO", "gutshot"],
  content: `
O flop é **6♠ 5♥ 2♦**. Três cartas baixas, três naipes diferentes: não há flush draw, e um flush exigiria as duas cartas restantes.

Parece o tipo de board em que o big blind deveria atacar. Sua equity é **48,3%**, a segunda maior entre os sete spots desta série em que ele defende, acima dos 45,1% do [flop com ás alto](/pt/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-pt.webp") e dos 46,3% do flop com rei alto.

Ele sai apostando em **3,2%** das vezes.

A explicação passa por uma mão. **Só uma combinação de valores forma sequência no 6-5-2, e nenhum jogador a tem no range.** Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) do HoldemMaster.

:::stripe
Spot | Botão (BTN) abre 2,5bb → big blind (BB) paga (heads-up)
Flop | 6♠ 5♥ 2♦ (baixo, rainbow)
Pote · Stack | Pote 5,5bb · stack efetivo 97,5bb (SPR de aproximadamente 17,7)
Resultado | BB dá check em 96,8% — equity alta, sem vantagem no topo
:::

> **Resposta rápida**
> Comece com check e reserve a agressividade para o aumento. Equity, sozinha, não determina quem deve apostar primeiro: a vantagem no topo dos ranges também importa, e este board não a dá a nenhum dos lados. Depois que o botão aposta, o big blind pode assumir a agressividade: na resolução separada descrita abaixo, ele dá check-raise com todos os seus sets e preenche grande parte dos aumentos com draws de sequência, grupo que tem em maior quantidade que o botão.

## Quais condições produziram esses números?

O botão abre para 2,5bb, o big blind paga e os demais foldam. São dois jogadores, pote de 5,5bb e stacks restantes de 97,5bb. **Há uma diferença em relação aos exemplos anteriores: só existe um tamanho de aposta.**

| Condição | Valor |
|---|---|
| Ação pré-flop | BTN abre 2,5bb · BB paga · os demais foldam |
| Ranges | Aproximações de ranges padrão do poker online com 100bb |
| Flop | 6♠ 5♥ 2♦ (rainbow — três naipes diferentes) |
| Pote · Stack | Pote 5,5bb · stack efetivo 97,5bb (SPR de aproximadamente 17,7) |
| Tamanhos de aposta | Aproximadamente 33% do pote — **um único tamanho** |
| Rake | Não incluído no modelo |
| Data da consulta | 2026-08-20 |

O pote de 5,5bb vem de ==2,5 da abertura + 2,5 do call + 0,5 do small blind que foldou==. O stack efetivo é ==100 − 2,5 = 97,5bb==. A relação entre stack e pote (SPR) é de aproximadamente 17,7.

**Ter um único tamanho importa para ler a tela.** Os exemplos anteriores ofereciam 33% e 75%; este foi resolvido apenas com 33%. Portanto, **não existe uma linha “Bet 4,1bb” neste resultado.** Não há dado faltando: essa opção nunca fez parte da árvore de decisões.

## Por que o BB dá check em 96,8% no 6-5-2?

**96,8% do range começa com check.** Dos 487 combos, 15,3 saem apostando e 471,7 dão check.

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Check | **96,8%** | 471,7 |
| Bet 1,8bb (33% do pote) | **3,2%** | 15,3 |

Os 3,2% não representam uma mão específica tentando uma aposta. Eles se distribuem em pequenas frequências pelo range, comportamento típico de uma decisão quase indiferente: a diferença de valor entre apostar e dar check é muito pequena.

## Por que o BB aposta 3,2% aqui e 23,7% no 9-8-7?

**Porque equity e condições para apostar primeiro são coisas diferentes.** Compare os sete spots: a ordem muda completamente.

| Flop | Artigo | Equity do BB | Aposta inicial do BB |
|---|---|---|---|
| Q♠J♦T♠ Broadway (two-tone) | ③ | 46,7% | 0,1% |
| K♠8♦3♣ seco | ② | 46,3% | 0,2% |
| A♥7♦2♣ seco | ① | 45,1% | 1,9% |
| 6♣6♦3♥ pareado | ⑥ | 47,2% | 3,0% |
| **6♠5♥2♦ baixo rainbow** | **⑦** | **48,3%** | **3,2%** |
| Q♠9♠2♠ monotone | ⑤ | 47,7% | 11,2% |
| 9♥8♥7♣ conectado | ④ | 48,5% | 23,7% |

O board de menor equity (45,1%) tem mais apostas iniciais que o Broadway (46,7%). O [flop monotone](/pt/blog/monotone-board-strategy) tem **menos** equity que este, 47,7% contra 48,3%, e sai apostando mais de três vezes mais.

Agora compare ⑦ e ④. A diferença de equity é **0,2 ponto percentual**. As frequências de aposta inicial são **3,2% contra 23,7%.**

**A diferença está nas sequências.** No [9-8-7](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp"), o BB chega com 24 combos de sequência pronta: J-T, T-6 do mesmo naipe e 6-5 do mesmo naipe. No 6-5-2, a única mão que completa sequência é **4-3**, formando ==2-3-4-5-6==. Para completar uma sequência pelo outro lado, seriam necessários 7, 8 e 9: **três cartas, e você só tem duas na mão.**

E 4-3 não está em nenhum dos ranges. **O painel de categorias nem tem a linha “Straight”**, e as células de 43s e 43o ficam cinza nas duas matrizes. Essa mão não chega a este spot em nenhuma das duas versões.

:::pull[Só uma mão forma sequência neste board, e nenhum dos jogadores a tem no range.]:::

## Como os dois ranges diferem no 6-5-2?

**O big blind tem mais pares ligados ao board, mas perde força acima deles.** Há mais top pair, segundo par e pares fracos no BB; sets e dois pares empatam; os overpairs ficam pouco acima da metade da frequência do botão. Quase três quartos dos dois ranges não têm par algum. Isso transforma o spot numa disputa de overcards e draws, em que a mão vencedora muitas vezes ainda vai se formar. O BB joga fora de posição (OOP), e o BTN, em posição (IP).

![Composição dos ranges no 6♠5♥2♦: big blind com mais pares ligados ao board e botão com mais overpairs](/images/gto-srp-low-rainbow-ranges-pt.webp "6♠5♥2♦ · as mãos que sustentam o check-raise")

| Categoria | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trinca | 1,8% | 1,8% |
| Dois pares | 0,4% | 0,4% |
| Overpair | 4,9% | **9,5%** |
| Top pair (um seis) | **7,4%** | 5,4% |
| Segundo par (um cinco) | **6,2%** | 4,2% |
| Par fraco | **3,7%** | 2,4% |
| Underpair | **2,5%** | 2,4% |
| A-high | 23,0% | **28,6%** |
| K-high | **15,6%** | 14,3% |
| Sem mão feita | **34,5%** | 31,0% |

Somando top pair, segundo par e par fraco, o BB fica à frente por **17,3% a 12,0%**. É uma vantagem real, mas pouco adequada para sair apostando: essas mãos não querem construir o pote fora de posição logo na primeira ação. Elas podem compor linhas de check-call e check-raise.

Duas linhas explicam o spot:

- **“Set/Trinca” aparece em 1,8% para os dois jogadores.** 🪶 Esse é o nome da categoria no app. Como o 6-5-2 não tem par, as trincas aqui são **sets**, formados com par na mão. Trips usa uma carta da mão e um par no board. Só 66, 55 e 22 formam set aqui; cada um tem exatamente ==3 combos==, porque uma carta de cada valor está no board. São nove combos para cada lado. **Os dois ranges têm a mesma quantidade das mãos mais fortes disponíveis.**
- **Overpairs aparecem em 4,9% contra 9,5%**, quase o dobro. Aqui, overpair é qualquer par de mão acima do seis, de 77 a AA. O BB dá 3-bet com JJ e os pares maiores antes do flop, ficando **apenas com 77 a TT** neste range de call. O botão mantém todos os pares do topo dessa lista.

## Por que a equity é 48,3%, mas a EQR fica em 84,3%?

**Porque equity é sua parcela teórica, e EQR mede quanto dela você realiza.**

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,3% | 51,7% |
| EV (bb) | 2,24 | 3,26 |
| **Realização de equity (EQR)** | **84,3%** | **114,7%** |

Num pote de 5,5bb, 48,3% de equity corresponde a ==5,5 × 48,3% = 2,66bb==. O valor esperado (EV) do BB é **2,24bb**; a divisão ==2,24 ÷ 2,66== dá sua realização de equity, **84,3%**. Os 51,7% do botão correspondem a 2,84bb, mas ele tem EV de 3,26bb: **114,7%**. Refazer as divisões com os números arredondados pode gerar diferença de um décimo de ponto percentual; o solver usa os valores sem arredondamento.

Compare com o [flop com ás alto](/pt/blog/a-high-board-cbet), em que o BB tinha **45,1%** de equity e realizava **84,0%**. Aqui, ele tem cerca de três pontos percentuais a mais de equity e realiza praticamente a mesma fração. No 9-8-7, por outro lado, realizava **93,2%**: tinha sequências e podia apostar mesmo fora de posição.

**Sem vantagem no topo do range, a posição pode pesar mais que três pontos percentuais de equity.** Essa é a diferença que importa.

## Quando dar check-raise neste flop?

**Depois da aposta do botão, com frequência relevante.** Diante de 1,8bb, o big blind aumenta em **14,9%** nesta resolução separada.

:::note[⚠ **Esta seção usa uma resolução separada, não o resultado pré-calculado do exemplo.** O spot publicado no app vai apenas até a primeira decisão no flop. Seus marcadores de ação não permitem navegar para as decisões seguintes, então as respostas a uma aposta não estão ali. Para obtê-las, reconstruímos a mesma árvore (aposta de 33%, aumento de 60%, pote de 5,5bb, stack de 97,5bb) e a resolvemos: **190 iterações, exploitability de 0,16 nas unidades internas daquela execução (0,016bb), equivalente a 0,29% do pote.** Todos os números das duas tabelas abaixo vêm dessa execução, não do exemplo pré-calculado.]:::

Primeiro, a ação do botão depois do check do BB:

| Ação do BTN após o check do BB | Frequência | Combos |
|---|---|---|
| Bet 1,8bb (33% do pote) | **63,0%** | 316,5 |
| Check back | 37,0% | 186,5 |

Em seguida, a resposta do big blind:

| Resposta do BB à aposta de 1,8bb | Frequência | Combos |
|---|---|---|
| **Aumentar para 7,3bb** | **14,9%** | 69,7 |
| Pagar | **65,6%** | 314,6 |
| Foldar | 19,5% | 93,2 |

(Há um detalhe: os percentuais exibidos pelo app e suas contagens de combos diferem um pouco neste ponto da árvore. Os 69,7 combos equivalem a ==69,7 ÷ 477,5 = 14,6%== dos 477,5 que chegaram à decisão, e não a 14,9%. Os percentuais acima reproduzem o painel. A diferença é de cerca de um terço de ponto percentual e não muda a leitura estratégica; ela explica por que a divisão feita à mão retorna 14,6%.)

Dois detalhes merecem atenção.

**O aumento é de 60% do pote, não do tamanho do pote inteiro.** É fácil confundir. Aumentar para 7,3bb coincide com o valor que já está no centro, ==5,5 + 1,8 = 7,3==, mas um aumento do tamanho do pote considera o pote **depois** de pagar: ==5,5 + 1,8 + 1,8 = 9,1==. Isso daria um aumento para **10,9bb**. O total de 7,3bb corresponde a ==(7,3 − 1,8) ÷ 9,1 = 60%== do pote, exatamente o tamanho de aumento configurado na árvore. Também é um pouco mais de quatro vezes a aposta: ==7,3 ÷ 1,8 = 4,06==.

**O BB folda apenas 19,5%**, ou seja, continua em **80,5%**. Contra 1,8bb em 5,5bb, a referência para impedir lucro automático de um blefe puro é ==5,5 ÷ (5,5 + 1,8) = 75,3%==. É a parcela que precisa continuar sob essa hipótese. O solver vai além dela neste resultado, porque um board tão baixo e seco dá a muitas mãos algum motivo para permanecer.

:::note[Uma ressalva sobre essa execução: a frequência de aposta inicial, na **raiz da árvore**, foi **2,0%**, contra 3,2% do exemplo pré-calculado, com 9,5 combos em vez de 15,3. As categorias de mãos, draws, equity, EV e EQR coincidiram nas casas decimais exibidas. Sair apostando aqui é uma decisão com diferença de EV próxima de zero, por isso a frequência varia entre resoluções. A leitura de 3,2% e 2,0% é a mesma: *quase nunca*. Sua execução também pode apresentar uma frequência nessa faixa.]:::

## Que mãos podem compor o check-raise neste flop?

**Todos os sets, os dois combos de dois pares e, depois, sobretudo draws de sequência.**

Lemos as 487 linhas da tabela de mãos, não apenas as que aparecem na primeira tela. Ordenado pela frequência de aumento, o topo da lista se divide de forma bastante clara.

| Mão | O que ela tem | Frequência de aumento |
|---|---|---|
| 66 · 55 · 22 | Trinca com par na mão — **todos os nove combos** | **100%** |
| 65s | Dois pares — só existem 6♦5♦ e 6♣5♣, pois 6♠ e 5♥ estão no board | **100%** |
| 64s | Top pair **e** gutshot | **100%** — dois dos três combos |
| 98s | Gutshot para o sete — equity de **35,8%** | 99%+ |
| 87s | Draw de duas pontas, para quatro ou nove — equity de **46,2%** | 80–83% |
| J4s · Q4s | Gutshot para o três, sem par | 67–90% |
| 54s | Segundo par e gutshot | 74–75% |

Leia a segunda coluna de cima para baixo: **abaixo de dois pares, todas as mãos destacadas têm draw de sequência.** As duas que também têm par, 64s e 54s, aumentam com o apoio do draw, não apenas pela força do par:

- **98s** reúne 5-6-8-9 e precisa do ==7==.
- **87s** reúne 5-6-7-8 e aceita ==4 ou 9==: é o único draw de duas pontas **presente neste range**. ⚠ Não é o único permitido pelo board: **74 forma 4-5-6-7** e espera 3 ou 8, um draw de duas pontas; 84 tem um double gutshot com os mesmos oito outs. Os 0,8% da tabela de draws indicam que os ranges deste solver não contêm 74 do mesmo naipe, e não que o board só permita um draw de duas pontas.
- **J4s, Q4s, 54s e 64s** reúnem 2-4-5-6 e precisam do ==3==.

**Nenhuma mão no topo dessa lista foi escolhida por sua carta alta.**

Essas sete linhas são o topo da lista ordenada e respondem por aproximadamente 30 dos 69,7 combos que aumentam. O restante vem de outras mãos do mesmo range, em frequências menores. Vale lembrar disso antes de concluir que *nenhuma* outra mão dá raise aqui.

Observe também quanto desse range é valor. Sets e dois pares juntos somam **2,2%** do range: ==2,2% × 487 ≈ 11 combos==, dentro dos 69,7 combos que aumentam. Mesmo contando as duas mãos que também fazem par com o board, **menos de um combo a cada quatro que aumentam é uma mão feita.** Isso ajuda o aumento a manter valor quando recebe call: grande parte do range que colocou dinheiro no pote ainda pode melhorar.

É nos draws de sequência que o solver aproveita essa vantagem.

| Draw | BB | BTN |
|---|---|---|
| OESD | 0,8% | 0,8% |
| **Gutshot** | **18,5%** | 13,9% |
| Backdoor FD | **20,5%** | 18,5% |
| Sem draw | 60,2% | **66,8%** |

**Gutshots: 18,5% contra 13,9%.** Com sets empatados em 1,8% e overpairs em 4,9% contra 9,5%, a linha de gutshots fornece boa parte das mãos para aumentar: o solver usa o grupo mais presente no BB como matéria-prima do check-raise.

## O 6-5-2 é um board com muitos draws ou um board seco?

**É seco nas mãos prontas mais fortes, mas oferece draws às mãos intermediárias.** Um **board com muitos draws**, também chamado de wet, tem cartas que se conectam para sequências ou flushes, permitindo que mãos atrás na disputa ainda melhorem. Um board seco oferece poucas dessas possibilidades. No 6-5-2, os dois aspectos aparecem juntos; o rótulo isolado não explica o spot.

Não há flush draw e, como vimos, nenhum dos ranges contém sequência pronta. Nesse sentido, o board é muito seco: a melhor categoria disponível é set, e os dois jogadores têm a mesma quantidade.

Por outro lado, **19,3% do range do BB tem draw de sequência**: 0,8% de duas pontas e 18,5% de gutshots. Outros 20,5% têm backdoor de flush. Só 60,2% não têm nenhum desses draws. Portanto, muitas mãos têm motivo para continuar mesmo sem mão feita.

Essa combinação de topo limitado e muitas possibilidades de melhora produz os números acima. Ninguém tem uma mão acima dos sets para sair pressionando com vantagem exclusiva, e poucos foldam porque muitas mãos ainda podem melhorar. Um board como [Q♠9♠2♠](/pt/blog/monotone-board-strategy) funciona de outra maneira: o topo é muito forte e cada jogador precisa considerar que o outro já o alcançou. A possibilidade de apostar acompanha a força do topo dos ranges, princípio que o guia de [c-bet](/pt/blog/holdem-continuation-bet) explora em outras texturas.

## O que muda na prática?

- **Pare de sair apostando em boards baixos rainbow só porque “acertou alguma coisa”.** Equity de 48,3% não basta. No 6-5-2, o range inteiro sai apostando em 3,2%, e as mãos que fazem isso usam frequências muito baixas. Só existe o tamanho de um terço do pote, então o botão precisa de **19,8%** de equity para o call na conta direta. Seus A-high e K-high, que juntos somam **42,9%** do range, ficam acima desse patamar. Você não os faz foldar facilmente, e o range que paga também contém mãos melhores que a sua.
- **Dê check-raise com seus sets.** Os nove combos aumentam em 100% nesta resolução separada. Fazer slowplay aqui, quando o botão tem a mesma quantidade de sets, abre mão de uma oportunidade de construir um pote grande com suas melhores mãos.
- **Escolha blefes pelos draws, não pelas cartas altas.** O range de aumento usa muitos gutshots. Um A-high sem draw, como A-J ou A-9, pertence ao range de call, os 65,6%, e não ao de aumento. A-K não chega a este spot: o range de defesa do big blind vai apenas até A-J.
- **Não folde demais contra uma aposta pequena.** Contra 1,8bb em 5,5bb, o solver continua com **80,5%** do range nesta resolução, acima da referência de 75,3%. Foldar K-high e pares fracos contra uma única aposta pequena é um hábito especialmente explorável num board como este.

:::readnext[Continue lendo]
/pt/blog/paired-board-strategy | 6-6-3: mais trincas, 97% de check | /images/gto-srp-paired-oop-pt.webp
/pt/blog/monotone-board-strategy | Flop monotone: check com nut flush | /images/gto-srp-monotone-oop-pt.webp
:::

## Confira no app

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo** e escolha **Board baixo e rainbow → ⚡ Ver resultados**.

Observe o que *não* aparece: **role o painel de categorias e confira a ausência da linha “Straight”.** Depois, veja as células 43s e 43o na matriz: estão cinza para os dois jogadores. Essa ausência resume o ponto central do artigo.

Para chegar aos números de check-raise, é preciso ir além, pois o exemplo pré-calculado termina na primeira decisão do flop. Clique em **Resolver este spot você mesmo**, mantenha a árvore carregada e execute o cálculo. Quando terminar, clique em **Check** e depois em **Bet** na faixa superior.

Depois, abra o **Treinador GTO** na barra lateral: ele distribui mãos usando os pesos reais dos ranges e avalia a perda de EV da sua decisão em big blinds. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. Quando dar check-raise neste tipo de flop?**

A. Quando seu range tem mãos que ganham com um pote maior e draws suficientes para acompanhá-las. No 6♠5♥2♦, a resolução separada mostra aumento em 14,9% do range do BB diante de 1,8bb: todos os sets, os dois combos de dois pares e um grupo de gutshots. O teste não é apenas “minha mão é boa?”, mas “ela quer aumentar o pote, e há blefes que podem melhorar quando recebem call?”.

**Q. Por que o BB quase não aposta primeiro no flop baixo?**

A. Porque equity sozinha não determina quem pode apostar primeiro. A vantagem no topo importa, e este board não a dá a nenhum dos lados. Sets empatam em 1,8% a 1,8%, e a única mão que os venceria, 4-3, está fora dos dois ranges. Sem vantagem sobre as melhores mãos do adversário, o BB tem pouco incentivo para começar construindo o pote e sai apostando em apenas 3,2%.

**Q. Por que a estratégia difere tanto do 9-8-7 com equity quase igual?**

A. Porque o topo do range pesa na decisão de apostar primeiro, não apenas a média de equity. No 9-8-7, o BB chega com 24 combos de sequência pronta; no 6-5-2, nenhum dos ranges tem sequência. São dois décimos de ponto percentual de diferença na equity, mas 23,7% contra 3,2% de aposta inicial.

**Q. Com quais mãos dar check-raise no 6-5-2?**

A. Com os nove combos de set (66, 55 e 22), os dois combos de 65 do mesmo naipe e draws de sequência: 98s pelo gutshot para o sete, 87s pelo draw de duas pontas e J4s, Q4s, 54s e 64s pelo gutshot para o três. Nenhuma dessas mãos foi escolhida só pela carta alta; os draws sustentam a parte de blefes do aumento.

**Q. Check-raise é permitido? É falta de etiqueta?**

A. É uma ação permitida pelas regras do poker, explicadas no guia de [ações de aposta](/pt/blog/holdem-betting-actions). A preocupação com etiqueta vem de jogos caseiros antigos que proibiam check-raise por regra da casa; a má fama durou mais que a regra. No poker atual, é uma ferramenta normal, e os números acima mostram sua importância: retirar o check-raise do jogo do BB neste flop elimina a ação usada por 14,9% do range, sem substituto equivalente.

**Q. Esses números valem para o limite em que jogo?**

A. Use as frequências como referência quando as condições coincidirem: heads-up, 100bb, abertura de 2,5bb do botão com ranges padrão de defesa e sem rake. Um detalhe é específico deste exemplo: só foi permitido o tamanho de 33% do pote, então o solver não pôde escolher uma aposta maior. Oferecer dois tamanhos muda as frequências, embora o motivo central para começar com check permaneça.
`.trim(),
};

export default POST;
