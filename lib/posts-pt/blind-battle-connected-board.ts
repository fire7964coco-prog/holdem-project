import type { Post } from "../posts";

// PT-BR: tradução do EN atual. Mesmos parâmetros do K-T-6; só o board muda.
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "7-6-5: a c-bet cai para 9,6%",
  seoTitle: "Flop conectado entre os blinds: c-bet de 9,6% no 7-6-5",
  desc: "Os mesmos ranges e stacks, outro flop: no 7-6-5, o SB aposta só 9,6%. Compare com K-T-6 e veja como a textura muda a estratégia.",
  tldr: "Depois da abertura do small blind e do call do big blind, o flop 7♦6♦5♣ recebe aposta em apenas 9,6% e check em 90,4%. Pote, stack, SPR, tamanho da aposta e os dois ranges são idênticos aos do exemplo anterior. Só as três cartas do board mudaram, e a aposta caiu de 67,4% para 9,6%. A vantagem pré-flop estava nas cartas altas; o board baixo e conectado a elimina. A equity se inverte para 49,6% contra 50,4%, e a realização fora de posição cai a 85,3%.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 min",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-pt.webp",
  imageAlt: "Tela do solver de poker da HoldemMaster no flop 7♦6♦5♣, com a matriz do small blind quase toda verde indicando check",
  keepImagesInBody: true,
  tags: ["c-bet no flop conectado", "blind vs blind no 7-6-5", "textura do board no poker", "overpair em board conectado", "vantagem de range no flop baixo"],
  content: `
No exemplo anterior, o small blind apostava **67,4% mesmo fora de posição**. Ele era o agressor pré-flop e também o primeiro a agir; naquele board, a vantagem de range e a primeira ação ficavam com o mesmo jogador.

Então o small blind deveria sempre apostar contra o big blind? Este exemplo responde.

**O pote continua em 6bb, o stack efetivo em 97bb, e a única aposta disponível ainda é de um terço do pote.** Os dois ranges também são os mesmos. Só mudaram **as três cartas do board**. E a aposta do small blind despenca para **9,6%**. Todos os números abaixo vêm do [solver de poker GTO da HoldemMaster](/pt/solver).

:::stripe
Spot | SB abre 3bb → BB paga (blind vs blind)
Flop | 7♦ 6♦ 5♣ (conectado · two-tone)
Pote · Stack | Pote 6bb · stack efetivo 97bb · SPR 16,2
Resultado | SB aposta **9,6%** — no mesmo papel em que apostava 67,4% no board anterior
:::

> **Resposta rápida**
> No board conectado 7-6-5 entre os blinds, a primeira ação do small blind é **aposta em 9,6%, check em 90,4%**. Pote, stack, SPR, tamanho da aposta e os dois ranges são **idênticos** aos do exemplo anterior, K♥T♦6♠. Só o board mudou, e a aposta caiu de 67,4% para 9,6%. A vantagem do range de abertura estava nas **cartas altas**; num board com 5, 6 e 7, ela desaparece. A equity chega a **se inverter para 49,6% contra 50,4%**, e a realização de equity do small blind cai de 103,1% para **85,3%**.

## Quais condições produziram estes números?

**São as mesmas do exemplo anterior.** Como a comparação é justamente "mesmas condições, outro resultado", vale separar o que foi mantido do que mudou.

| Condição | Este spot ⑫ | Spot anterior ⑪ | Igual? |
|---|---|---|---|
| Ação pré-flop | SB abre 3bb → BB paga | SB abre 3bb → BB paga | **igual** |
| OOP (age primeiro) | SB — quem abriu | SB — quem abriu | **igual** |
| Pote inicial | 6bb | 6bb | **igual** |
| Stack efetivo | 97bb | 97bb | **igual** |
| SPR | 16,2 | 16,2 | **igual** |
| Tamanho da aposta | Um tamanho, cerca de um terço do pote | Um tamanho, cerca de um terço do pote | **igual** |
| Range do SB | 572 combos | 538 combos | mesmo range (mudam só os blockers do board) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ T♦ 6♠** | **diferente** |
| Rake | Não considerado | Não considerado | — |
| Data da consulta | 2026-08-08 (resultado do exemplo de estudo) | 2026-08-08 | — |

O pote de 6bb é ==3 do SB mais 3 do BB==. O stack efetivo é ==100 − 3 = 97bb==, e a relação entre stack e pote (SPR) fica em ==97 ÷ 6 = 16,2==. SB é o small blind, fora de posição (OOP); BB é o big blind, em posição (IP).

O número de combos muda — 572 contra 538 — porque **as cartas do board eliminam as combinações que usariam essas cartas**, não porque os ranges foram alterados. Um board com K, T e 6 remove mais combos de um range carregado de cartas Broadway.

A tela usa **big blinds**: as apostas aparecem como "Bet 2bb (33% do pote)", e o valor esperado (EV), como "EV (bb)".

## Com que frequência o small blind aposta aqui?

**9,6% de aposta, 90,4% de check.** Dos 572 combos, só 55 entram na aposta; os outros 517 dão check.

| Primeira ação do SB | Frequência | Combos |
|---|---|---|
| Bet 2bb (33% do pote) | **9,6%** | 55,0 |
| Check | **90,4%** | 517,0 |

Comparando com a série, fica mais fácil localizar este resultado.

| Spot | Quem está fora de posição | Frequência de aposta OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB, quem pagou | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB, quem pagou | 3,0%–3,2% |
| **7♦6♦5♣ blind vs blind (⑫)** | **SB, quem abriu** | **9,6%** |
| Q♠9♠2♠ monotone (⑤) | BB, quem pagou | 11,2% |
| 9♥8♥7♣ conectado (④) | BB, quem pagou | 23,7% |
| K♥T♦6♠ blind vs blind (⑪) | SB, quem abriu | 67,4% |
| A♠A♥6♦ blind vs blind (⑬) | SB, quem abriu | 80,1% |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB, quem deu a 3-bet | 98%–100% |

**O papel pré-flop sozinho não explica a tabela.** Quem abriu aparece tanto com 67,4% quanto com 9,6%. Se o exemplo anterior dizia que mudar o papel altera o ponto de partida, este acrescenta a condição: **o board pode desfazer essa vantagem inicial**.

## Por que 67,4% vira 9,6% quando só o flop muda?

**Porque a vantagem de quem abriu está nas cartas altas.** O range de abertura para 3bb do small blind é carregado de ases, reis, damas e combinações Broadway. Essas cartas altas não fazem par com 5, 6 ou 7.

O board anterior era o oposto. **A carta mais alta era um rei**, e as combinações com rei são muito mais numerosas do lado de quem abriu. Quando o mesmo range encontra um board baixo e conectado, a relação se inverte.

| Métrica | K♥T♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Carta mais alta do board | **K** — favorece quem abriu | **7** — favorece quem pagou |
| Equity do SB | **55,3%** | **49,6%** |
| EQR do SB | **103,1%** | **85,3%** |
| Frequência de aposta do SB | **67,4%** | **9,6%** |

:::pull[A vantagem de range é construída pré-flop; sua realização depende das três cartas que aparecem no flop.]:::

O artigo anterior terminou explicando que, *nos boards que favorecem quem pagou, o check volta mesmo dessa posição*. Este é o caso, e a frequência de aposta que o solver encontra é **9,6%**.

## Por que este board favorece o big blind?

**Porque algumas combinações extras que conectam com 5-6-7 permanecem só no range de call do big blind.** As cinco primeiras linhas abaixo mostram as categorias formadas neste board; tirando os overpairs, nenhuma delas tem proporção maior no small blind.

![Comparação por categoria das mãos do small blind e do big blind no flop 7♦6♦5♣](/images/gto-sb-connected-ranges-pt.webp "7-6-5 entre os blinds · top pair passa de 6,8% no small blind para 11,2% no big blind")

| Categoria | SB (OOP · quem abriu) | BB (IP · quem pagou) |
|---|---|---|
| Straight | 2,8% (16 combos) | **3,7% (20 combos)** |
| Set/Trinca | 1,6% (9 combos) | 1,7% (9 combos) |
| Dois pares | 1,2% (7 combos) | **2,4% (13 combos)** |
| Overpair | **7,3% (42 combos)** | 2,2% (12 combos) |
| Top pair (7) | 6,8% (39 combos) | **11,2% (60 combos)** |
| Segundo par (6) | 5,8% | **6,2%** |
| Par fraco | 4,2% | **6,2%** |
| Underpair | 3,1% | **3,4%** |
| A-high | **25,2%** | 18,7% |
| K-high | **16,1%** | 15,7% |
| Sem mão feita | 25,9% | **28,5%** |

Três linhas explicam a diferença.

- **Top pair: 39 combos contra 60.** O big blind tem cerca de uma vez e meia a quantidade de mãos com sete. O range de abertura do small blind não inclui mãos offsuit como T-7, 9-7 e 8-7. Já o big blind, que colocou 1bb e precisa acrescentar só 2bb, mantém todas elas.
- **Sequências: 16 combos contra 20.** Ambos têm 9-8, formando 9-8-7-6-5. O big blind também tem 4-3 suited, que forma 7-6-5-4-3. O range de abertura do small blind não inclui 4-3 suited.
- **Dois pares: 7 combos contra 13.** Os seis combos de 7-6 offsuit pertencem exclusivamente ao big blind.

Os sets são a exceção. Ambos têm 7-7, 6-6 e 5-5, com **exatamente nove combos de cada lado**. A diferença de 1,6% para 1,7% vem apenas do tamanho menor do range do big blind, com 534 combos: os mesmos nove ocupam uma parcela um pouco maior.

Entre essas categorias fortes, o small blind lidera nos **overpairs: 42 combos (7,3%)**, contra 12 (2,2%) do big blind. Como T-T e os pares acima dele dão 3-bet contra a abertura do small blind, só 8-8 e 9-9 permanecem no range de call.

O problema é que **um overpair não representa uma mão dominante neste board**. O adversário já tem ==9 sets + 13 dois pares + 20 sequências = 42 combos== que o vencem. Os 60 combos de top pair que ainda perdem podem virar dois pares ou trinca até o river, e os draws também são mais abundantes do lado do big blind.

| Draw | SB | BB |
|---|---|---|
| Combo draw | 3,0% | **3,7%** |
| Flush draw | **2,8%** | 2,6% |
| OESD (sequência de duas pontas) | 21,2% | **24,9%** |
| Gutshot | 19,4% | **23,8%** |
| Backdoor FD | **21,0%** | 15,5% |
| Sem draw | **32,7%** | 29,4% |

**Os draws de duas pontas vão de 21,2% para 24,9%, e os gutshots, de 19,4% para 23,8%.** Somando só os draws imediatos — combo draw, flush draw, duas pontas e gutshot —, são **46,4% no small blind contra 55,0% no big blind**. Até a parte ainda não formada do range do big blind tem mais possibilidades de melhorar.

🪶 **O small blind lidera exatamente duas categorias de draw**: flush draws, por 2,8% a 2,6%, e backdoors de flush, por 21,0% a 15,5%. A primeira diferença é de 0,2 ponto percentual, praticamente um empate; a segunda precisa de duas cartas seguidas do mesmo naipe e completa só cerca de 4,2% das vezes. As seis linhas compõem o total de 100%, sujeito ao arredondamento da tela; não interprete "Sem draw" como o complemento apenas dos draws imediatos.

## Como quem abriu fica atrás em equity?

**Porque A-high e K-high perdem muito valor neste board.** Juntas, essas categorias ocupam 41,3% do range do small blind (25,2 + 16,1). Acima de 5-6-7, continuam sendo apenas cartas altas.

| Métrica | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 49,6% | **50,4%** |
| EV (bb) | 2,54 | **3,46** |
| **EQR (realização de equity)** | **85,3%** | **114,4%** |

O pote é de 6bb, então a parcela bruta do small blind vale ==6 × 49,6% = 2,976bb==, enquanto o EV efetivo é 2,54bb. Assim, ==2,54 ÷ 2,976 = 85,3%==. A soma dos EVs dá ==2,54 + 3,46 = 6,0bb==, exatamente o pote.

**A equity quase empata, em 49,6% contra 50,4%, mas a realização se afasta: 85,3% contra 114,4%.** A diferença mostra o valor da posição. No exemplo anterior, a vantagem de range mais que compensava essa desvantagem, e o small blind realizava 103,1%. Aqui, não sobra vantagem de range para compensá-la.

Ordenando a EQR fora de posição de **seis exemplos selecionados**, este fica entre os callers. O fundo da série inteira, porém, é ③ com 77,9%, ② com 80,7% e ⑥ com 83,7%, todos callers. A tabela abaixo é um recorte e não inclui esses três.

| Spot | Quem está fora de posição | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ seco (①) | quem pagou | 45,1% | 84,0% |
| 6♠5♥2♦ baixo (⑦) | quem pagou | 48,3% | 84,3% |
| **7♦6♦5♣ blind vs blind (⑫)** | **quem abriu** | **49,6%** | **85,3%** |
| 9♥8♥7♣ conectado (④) | quem pagou | 48,5% | 93,2% |
| K♥T♦6♠ blind vs blind (⑪) | quem abriu | 55,3% | 103,1% |
| 8♦5♣2♠ pote de 3-bet (⑩) | quem deu a 3-bet | 58,6% | 106,9% |

**Quem abriu, no meio dos callers.** Na série, **cinco** exemplos de caller ficam abaixo deste: ③ 77,9 · ② 80,7 · ⑥ 83,7 · ① 84,0 · ⑦ 84,3. Portanto, ele não está entre os últimos. O ponto é outro: **o mesmo small blind que abriu tem 103,1% no ⑪ e 85,3% aqui**. O board muda o resultado, mesmo sem trocar o papel do jogador.

## Quais mãos formam os 9,6% que apostam?

**Não é uma classe inteira: são pequenas parcelas espalhadas pelo range.** Nenhuma célula da matriz fica totalmente na cor da aposta; a maioria mostra só uma faixa estreita. Até A-A e K-K ficam principalmente no verde do check.

Três tipos de mão têm faixas de aposta visivelmente maiores. As frequências abaixo são médias dos combos de cada classe, obtidas percorrendo toda a tabela individual do app em 2026-08-21.

- **8-8: aposta em 39,5%, a classe que mais aposta no range.** No 7-6-5, oito-oito é **overpair e draw de sequência de duas pontas ao mesmo tempo**: 8-7-6-5 completa com quatro ou nove. Há valor e draw na mesma mão, portanto dois motivos para apostar. A equity medida vai de 73,4%–75,2%, e a EQR, de 133%–138%.
- **A-7 suited e K-7 suited**: top pair de setes. A escolha não vem só da força da mão, mas da combinação de **valor fino com blocker de ás ou rei** — uma carta dessas a menos no range adversário. Em quantidade total de top pair, o small blind está atrás: 39 combos contra 60.
- **K-4 suited e Q-4 suited**: um quatro suited. Com o 7-6-5, ele forma ==4-5-6-7==, um draw de duas pontas que completa com três ou oito. Pela média da classe, Q-4s aposta 30,9% e K-4s, 27,1%. Mas, **como combos individuais, Q♠4♠ e Q♥4♥ chegam a 54,7%, a maior frequência de todo o spot**.

Os 9,6% misturam um pouco de valor com alguns draws. Oito-oito lidera entre as classes porque **a mesma mão cumpre as duas funções**. ⚠ Isso não é uma regra geral: **os três exemplos de combos individuais mais frequentes citados a seguir não cumprem as duas funções**. Q♠4♠, com 54,7%, é draw puro; A♣7♣, com 54,4%, é valor fino com blocker; T♣9♣, com 52,2%, é gutshot. O combo que mais aposta entre os 88, 8♦8♣, fica *abaixo*, em 47,1%. **Nenhum critério sozinho explica a seleção dos 9,6%.** **E dar check em 90,4% não é desistir deste board**: a interpretação é que sair apostando por valor fino e enfrentar um aumento custa mais do que rende. ⚠ Não procure o motivo no pote de 6bb, no stack de 97bb ou no SPR de 16,2. Os três são **exatamente as mesmas constantes** no [⑪ K-T-6](/pt/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-pt.webp") e no [board A-A-6](/pt/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-pt.webp"), em que o mesmo small blind aposta 67,4% e 80,1%. Quem produziu os 9,6% foram **as três cartas do board**.

:::note[⚠ Este exemplo foi calculado com uma única opção de aposta: um terço do pote. Se você permitir um tamanho maior na árvore, os 9,6% podem mudar. Leia o resultado como "sob estas condições, poucas mãos encontram motivo para sair apostando, mesmo pequeno".]:::

## O que muda na mesa?

- **Não transforme "é blind vs blind, então aposto" em regra.** Os 67,4% do exemplo anterior e os 9,6% daqui foram separados pelo board, não pela posição. Mesmo tendo aberto do small blind, quando o flop vem baixo e conectado — com cartas como 5, 6, 7 e 8 —, você precisa reconsiderar a vantagem de iniciativa.
- **Não use um overpair como motivo automático para aumentar o pote.** O small blind tem 42 combos de overpairs, três vezes e meia a quantidade do big blind. Mas o adversário já tem 42 combos que os vencem: não é uma mão para planejar duas ou três apostas sem reavaliar. Isso não condena uma aposta pequena isolada; o ponto é **não tratá-la como uma mão para comprometer todo o stack**. ⚠ Também não significa "foldar assim que vier um aumento". O adversário tem 24,9% de draws de duas pontas, 23,8% de gutshots e 3,7% de combo draws, portanto seu range de aumento pode conter blefes. Foldar automaticamente um overpair contra um range cheio de draws também é explorável. **Evitar o all-in e foldar são decisões diferentes.** O nó de aposta seguida de aumento não está nesta resolução, então ela não fornece uma frequência para essa resposta. A série volta ao mesmo ponto: [um board conectado reduz a vantagem do agressor pré-flop](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp").
- **Não confunda A-high com força.** Cerca de um quarto do range do small blind é A-high. Para os A-high sem draw imediato, a principal melhora é formar um par. Os draws de sequência do adversário, quando completam, formam uma sequência: a diferença não está só na chance de melhorar, mas **no valor dessa melhora**. A equity de 49,6% mostra o resultado do conjunto.
- **Decida antes como responder depois do check.** Com 90,4% no check, a próxima questão é quais mãos pagam e quais dão [check-raise](/pt/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-pt.webp") contra a aposta adversária. ⚠ **Essa resposta não está neste cálculo**: o exemplo pré-calculado vai apenas até a **primeira ação no flop**. Os nós após o check — frequência de aposta do big blind e check-raise do small blind — não estão disponíveis. Para estudar um check-raise realmente calculado, o exemplo baixo e rainbow é o único da série com frequências de uma resolução separada. **Mas os papéis são diferentes**: lá, o big blind é quem pagou e enfrenta o botão.

:::readnext[Continue lendo]
/pt/blog/blind-battle-cbet | K-T-6: c-bet entre os blinds | /images/gto-sb-king-mid-oop-pt.webp
/pt/blog/ace-paired-board-strategy | A-A-6: a c-bet sobe para 80,1% | /images/gto-sb-paired-ace-oop-pt.webp
:::

## Como conferir no solver de poker?

Você encontra estes números abrindo o [solver de poker](/pt/solver) e seguindo **Spots de estudo → "Board baixo conectado, two-tone" → [⚡ Ver resultados]**. Para jogar o mesmo spot como exercício, abra o [Treinador GTO](/pt/solver) na barra lateral. Ele distribui uma mão aleatória e, depois que você escolhe a ação, mostra a frequência da estratégia mista e a **perda de EV (bb)** da sua escolha. Sem login, o histórico fica no seu navegador.

**Alterne com "Board K-high com um T"**, o exemplo anterior. O seletor Jogador mostra "OOP (SB (open-raiser))" nos dois, e pote e stack são idênticos. Mesmo assim, a matriz muda completamente de cor. É a demonstração mais direta da série do que um board pode mudar. É gratuito, sem instalação e sem necessidade de conta.

**Q. Por que o mesmo range muda de valor de um board para outro?**

A. Porque cada range concentra determinadas cartas. O range de abertura do small blind tem muitos ases, reis e damas, por isso ganha força em boards altos. O range de call do big blind tem muitos conectores e mãos baixas suited, por isso ganha força em boards baixos e conectados. No K♥T♦6♠, o small blind tem 55,3% de equity; com os mesmos dois ranges no 7♦6♦5♣, cai para 49,6%. Os ranges não mudaram: só o board.

**Q. Abri do small blind e o flop veio baixo e conectado. Como continuo?**

A. Neste exemplo, principalmente com check: o solver dá check em 90,4% no 7♦6♦5♣. Os 9,6% de aposta se espalham por **8-8, overpair que também tem duas pontas** — 39,5% na média da classe, a maior daqui —, top pairs como A-7s e K-7s e quatros suited com duas pontas, K-4s e Q-4s. Isso não é desistir. A interpretação é preservar opções de call e check-raise após o check, em vez de sair apostando por valor fino e enfrentar um aumento; as frequências posteriores não foram calculadas neste exemplo.

**Q. O small blind tem mais de três vezes os overpairs. Por que aposta só 9,6%?**

A. Porque o adversário tem muitas mãos que já vencem um overpair: 42 combos de sets, dois pares e sequências, além de 24,9% de draws de duas pontas e 23,8% de gutshots. Até os 60 combos de top pair que ainda perdem podem virar o jogo até o river. Um overpair aqui pode estar à frente agora sem querer apostar várias vezes. ⚠ Não atribua os 9,6% ao SPR de 16,2: pote de 6bb, stack de 97bb e SPR de 16,2 são **as mesmas constantes** nos boards [K-T-6](/pt/blog/blind-battle-cbet) e [A-A-6](/pt/blog/ace-paired-board-strategy), em que o mesmo small blind aposta 67,4% e 80,1%. A diferença está nas três cartas do board.

**Q. Qual dos dois exemplos representa o padrão de blind vs blind?**

A. Nenhum sozinho. A comparação mostra que o mesmo papel produz tanto 9,6% quanto 67,4%, dependendo do board. A pergunta útil não é "sou small blind, então aposto?", mas **qual range combina melhor com a carta mais alta e a textura do flop**. Nestes ranges, rei, dama ou ás favorecem quem abriu; uma sequência de cartas baixas como 5, 6, 7 e 8 favorece quem pagou.
`.trim(),
};

export default POST;
