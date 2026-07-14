import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-position-play",
  title: "Estratégia de posição: in position vs out of position",
  seoTitle: "Posição vence cartas — in vs out of position no pôquer",
  desc: "Dois jogadores, mesmas cartas, resultados opostos — a cadeira fez tudo. In vs out of position, por que posição importa e ranges de abertura do UTG ao button.",
  tldr: "Estar in position significa agir por último — você vê a decisão de cada adversário antes de gastar uma ficha. Estudos de solver e de banco de dados sugerem que jogadores in position realizam algo em torno de 85–100% da sua equity, enquanto jogadores out of position capturam só cerca de 60–85%. É por isso que o UTG abre ~13% das mãos e o button ~43% — e por que posição reescreve cada c-bet, bluff e decisão de controle de pote no pós-flop.",
  category: "strategy",
  date: "2026-06-18",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🎯",
  image: "/images/holdem-position-play-hero.webp",
  imageAlt: "Vista de cima de uma mesa de pôquer profissional com 9 posições rotuladas e o dealer button destacando o button e o cutoff como zonas de lucro",
  tags: [
    "in position poker",
    "out of position poker",
    "estratégia de posição no poker",
    "under the gun poker",
    "por que posição importa no poker",
    "limpar ou aumentar UTG",
    "como jogar out of position",
    "melhor posição no poker",
  ],
  content: `
Na primavera passada, no meu 1/2 de sempre, joguei K♥Q♥ duas vezes na mesma sessão — uma do big blind, outra do button — e essas duas mãos me ensinaram mais sobre posição do que qualquer vídeo de treino.

Do big blind, paguei um aumento do button e flopei top pair num Q♠8♦4♣. Agindo primeiro em todas as ruas, dei check-call no flop, check-call no turn, e quando veio um terceiro barril no river fiquei olhando para o feltro e foldei. Talvez ele tivesse, talvez não — ==r:out of position, paguei duas ruas para não descobrir nada.==

Uma hora depois, mesmíssimo K♥Q♥, dessa vez no button. Aumentei, o big blind pagou e deu check no flop J♠7♦3♣. Dei check atrás. O turn Q♦ me deu top pair; ele deu check de novo, apostei, ele pagou — e pagou a minha aposta no river com uma mão pior. ==g:Mesmas cartas. Cadeiras opostas. Resultados opostos.== Isso é posição — a primeira das [cinco decisões](/pt/blog/holdem-strategy) que formam uma estratégia vencedora de Texas Hold'em, e a base sobre a qual todo o resto é construído.

---

> **Resposta rápida**
> **In position (IP)** significa agir por último; **out of position (OOP)** significa agir primeiro. Estudos de solver e de banco de dados sugerem que jogadores IP realizam algo em torno de ==g:**85–100% da sua equity**== enquanto jogadores OOP capturam só cerca de ==r:60–85%== — uma diferença que vem de informação, não de cartas. É por isso que o UTG abre ~13% das mãos, o button ~43%, e por que cada c-bet, bluff e decisão de controle de pote muda com a sua cadeira.

---

## O que significa "in position" no pôquer?

Estar **in position** significa que você age **depois** do seu adversário no flop, turn e river — você vê ele dar check, apostar ou desistir antes de comprometer uma única ficha. Posição é sempre medida em relação ao **dealer button**: quanto mais perto você senta do lado direito do button na ação, mais tarde você age, e o próprio button age por último em todas as ruas pós-flop, garantido.

Posição é decidida no pré-flop e nunca muda durante a mão. Se você está no button e o big blind paga o seu aumento, você fica IP a mão inteira. Se você abre do under the gun e o button paga, você fica OOP em todas as ruas até o showdown.

As nove cadeiras se dividem em quatro zonas amplas:

| Zona | Cadeiras (9-max) | Postura padrão |
|:---|:---|:---|
| Early | UTG, UTG+1, UTG+2 | Ranges mais apertados — OOP contra a maior parte da mesa |
| Middle | Lojack, Hijack | Alargando conforme o campo encolhe |
| Late | Cutoff, Button | Ranges mais largos — IP contra quase todo mundo |
| Blinds | SB, BB | Apostas forçadas, OOP contra toda cadeira que não é blind no pós-flop |

Para cada nome de cadeira, abreviação e o mapa completo de mesa 6-max vs 9-max, veja o [guia de nomes de posição e mapa da mesa](/pt/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") — este artigo é sobre o que *fazer* com cada cadeira.

---

## O que é "out of position" (OOP) — e por que agir primeiro te custa caro

**Out of position** significa que você age **antes** do seu adversário nas ruas pós-flop. Cada decisão que você toma entrega informação de graça a ele, e cada decisão que ele toma chega depois da sua — tarde demais para te ajudar.

Veja o que agir primeiro realmente custa:

:::compare
Out of position (age primeiro) | In position (age por último)
Aposta no escuro — ele pode aumentar, pagar ou foldar, e você só descobre depois do seu dinheiro já ter entrado | Vê o check, a aposta ou o fold dele antes de decidir qualquer coisa
Não consegue pegar uma carta grátis — dê check e ele te tira do seu projeto com uma aposta | Dá check atrás sempre que quiser ver a próxima carta de graça
O tamanho do pote foge do seu controle — você não consegue impedir ele de apostar quando você queria um showdown barato | Você decide se a mão vai para mais uma rua
Seu range é lido — linhas de check-call ficam transparentes com o tempo | Seus checks e apostas ficam ambíguos porque ele age no escuro
:::

Repare que nada disso envolve cartas. Dois jogadores podem segurar mãos idênticas a noite inteira, e o que age primeiro ainda vai fazer menos dinheiro com elas. É esse imposto estrutural que o resto deste guia te ensina a cobrar — ou a driblar.

---

## Por que posição é tão importante na estratégia de pôquer?

Porque posição converte as mesmas cartas em mais dinheiro. A forma mais limpa de enxergar isso é a **realização de equity** — quanto da sua [equity de pote](/pt/blog/holdem-equity) teórica você de fato captura até o fim da mão.

| Situação | Equity realizada (aprox.) | Por quê |
|:---|:---:|:---|
| **In position** | ==g:**~85–100%**== | Age por último → vê tudo → aposta valor e blefa nos momentos certos |
| **Out of position** | ==r:~60–85%== | Age primeiro → folda vencedoras, paga perdedoras, entrega cartas grátis |

Esses números são aproximados — outputs de solver e estudos de banco de dados variam conforme a profundidade de stack e o matchup — mas a direção é universal: ==**o jogador in position sistematicamente super-realiza, o jogador out of position sistematicamente sub-realiza.**==

![Comparação IP vs OOP — o Button (IP) age por último e realiza cerca de 85–100% de equity; o UTG (OOP) age primeiro e realiza só cerca de 60–85% de equity](/images/holdem-position-play-ip-vs-oop.webp)

Pega um 8♥7♥ num flop K♥4♠2♥. In position, seu flush draw joga lindamente: paga uma aposta barato, pega uma carta grátis quando te dão check, ou blefa quando ele mostra fraqueza duas vezes. Out of position, o mesmo projeto vaza: aposta e leva um aumento, ou dá check e vê ele te cobrar o máximo — ou pior, dá check e folda justo a carta que teria fechado a sua mão. Os mesmos nove outs, um preço bem diferente.

Ao longo de milhares de mãos, esse vazamento vira a maior diferença isolada entre jogadores vencedores e perdedores do mesmo nível de habilidade. ==g:Jogadores vencedores não jogam só cartas boas — jogam cartas boas em boas posições.==

---

## A melhor posição no pôquer — e a pior

**A melhor posição no pôquer é o button.** É a única cadeira garantida a agir ==**por último em toda rua pós-flop**== — flop, turn e river, não importa quem aumentou no pré-flop. É essa garantia que faz o button abrir com lucro ~43% das mãos enquanto o UTG se vira com só ~13%: posição, não força de carta, banca a diferença.

Aqui está a vantagem do button numa mão concreta. Você abre A♦9♦ no button, o big blind paga, e o flop vem **K♦7♠2♥** — uma board seca que acerta quase ninguém. O big blind dá check. Você errou completamente, mas esse check acabou de te contar que ele provavelmente também errou. ==g:Uma aposta aqui ganha muito mais vezes do que perde==, e quando ele folda, ace-high leva o pote sem showdown. Agora inverta as cadeiras: OOP com o mesmo A♦9♦, você dá check, ele aposta, e você folda a melhor mão numa fatia relevante das vezes. Mesmas cartas; a cadeira fez todo o trabalho.

O **cutoff** é o segundo melhor por um motivo: só o button age atrás de você, e quando o button folda — o que é frequente — você herda a última ação pelo resto da mão.

**E a pior cadeira?** Na verdade tem duas respostas, e vale manter as duas separadas:

| Cadeira | Resultado típico no longo prazo (médias de banco de dados) | Por quê |
|:---|:---|:---|
| **Button** | Claramente positivo — a cadeira mais lucrativa em praticamente toda amostra | Última ação pós-flop garantida |
| **Cutoff** | Positivo — a segunda melhor | Só o button atrás de você |
| Hijack / Lojack | De pequeno positivo a mais ou menos no zero a zero | Posição moderada, ranges moderados |
| UTG | Perto do zero a zero mesmo para jogadores sólidos | Range apertado, OOP na maioria das mãos |
| **Small blind** | Negativo — a ==r:**cadeira estruturalmente pior para se jogar uma mão**== | Primeiro a agir em toda rua pós-flop, meio blind já morto |
| **Big blind** | ==r:**O maior perdedor em bb/100 bruto**== | Posta um blind inteiro a cada órbita — mesmo o jogo perfeito só encolhe a perda |

A distinção importa: o **big blind perde mais fichas brutas por 100 mãos** simplesmente porque é forçado a botar um blind inteiro em toda órbita — estratégia nenhuma torna uma aposta forçada grátis. Mas o **small blind é a pior cadeira para de fato jogar**, porque você age primeiro em toda rua pós-flop sem um desconto compensatório que valha o incômodo. Os valores exatos de bb/100 variam por stake e pool de jogadores, então trate qualquer número específico como um resultado típico de banco de dados, não como lei — o *ranking*, porém, é notavelmente consistente.

> **Dica de jogo ao vivo:** num 1/2 ao vivo, jogadores limpam o button toda hora porque "não tenho uma mão ótima". Isso é deixar o imóvel mais valioso do pôquer sem uso. No button, é open-raise ou fold — o prêmio posicional é valioso demais para jogar fora com um limp.

---

## Under the gun: o que é e como jogar UTG

**Under the gun (UTG)** é a cadeira imediatamente à esquerda do big blind — o primeiro a agir no pré-flop, com zero informação sobre as oito mãos atrás. O nome é a estratégia: você está *under the gun*, sob pressão, forçado a se comprometer primeiro. (No pós-flop, note, a ordem muda: os blinds agem primeiro e o button por último — a maldição do UTG é abrir no escuro no pré-flop e depois geralmente jogar OOP contra quem pagou em posição tardia.)

Jogar bem o UTG é quase todo sobre contenção:

- **Abra mais ou menos as ~13% melhores mãos** — o núcleo são pares fortes (88+), AK/AQ e os melhores broadways suited (AJs, KQs), completados por pares médios e os melhores ases suited. Para a grade mão por mão exata, use a [tabela de starting hands](/pt/blog/holdem-starting-hands-chart).
- **Folde o que é bonito mas dominado.** KJo e QJo parecem jogáveis e sangram fichas em silêncio do UTG — quando acertam, alguém atrás costuma acertar mais forte.
- **Espere jogar a mão OOP.** Quem pagar a sua abertura do UTG provavelmente tem posição sobre você por três ruas, então seu range precisa ser forte o bastante para bancar esse imposto.

> **O teste de disciplina:** se foldar AJo do UTG parece um pouco errado, você provavelmente está jogando certo. Parece apertado, rende mais.

---

## É melhor limpar ou aumentar no UTG?

**Aumente ou folde — não limpe.** Se uma mão é forte o suficiente para jogar da pior cadeira pré-flop, é forte o suficiente para aumentar; se não é forte o suficiente para aumentar, jogá-la OOP contra vários adversários pelo resto da mão é exatamente a armadilha que a cadeira monta para você.

O open limp falha em três frentes no UTG:

1. **Convida a mesa inteira** com pot odds perfeitas, então você flopa contra quatro mãos aleatórias OOP.
2. **Limita o seu range percebido** — jogadores atentos atacam limpers sem dó, e você vai enfrentar aumentos contra os quais não dá para continuar confortável.
3. **Não ganha nada no pré-flop.** Um aumento pode levar os blinds de cara; um limp nunca leva.

Existe uma exceção estreita em jogos ao vivo bem passivos — limpar atrás de outros limpers com pares pequenos e suited connectors para ver um flop multiway barato — mas *abrir* com limp no UTG é um vazamento em basicamente qualquer mesa. O argumento completo, incluindo quando limpar atrás é de fato tranquilo, está no [guia de limping](/pt/blog/holdem-limping).

---

## Early position vs late position (roubando os blinds)

Early position é onde você defende; late position é onde você ataca. Do UTG até o UTG+2 o trabalho é simples — range apertado, cartas grandes, nada de firula. Do cutoff e do button, o trabalho muda por completo: você não está mais esperando mãos, ==g:você está colhendo dinheiro morto.==

**Roubar os blinds** é a jogada central de late position. Quando todo mundo folda até você no CO ou no button, o aumento não é bem sobre as suas cartas — é sobre as duas apostas forçadas paradas no pote e o fato de que os dois blinds precisam jogar a mão OOP se defenderem:

- **Roubo do cutoff:** aumente ~2,2–2,5× com um range largo quando foldarem até você — mas fique esperto que o button ainda espreita atrás.
- **Roubo do button:** mais largo ainda — mãos como K7s, Q9s e A2o viram aberturas lucrativas porque os dois blinds ficam OOP contra você para sempre.
- **Respeite o resteal:** blinds que dão 3-bet agressivo cortam o seu lucro de roubo; contra eles, aperte um pouco e dê 4-bet nos seus melhores candidatos.

![Um jogador de late position no button empurrando um aumento à frente enquanto os dois blinds foldam — um roubo de blinds de manual](/images/holdem-position-play-blind-steal.webp "Roubando os blinds do button quando folda até ele")

A assimetria é a lição: o mesmo K7s que é um roubo tranquilo de button é um fold instantâneo em early position. A mão nunca mudou — o número de jogadores a bater, e quem age primeiro depois, sim.

---

## Ranges de abertura por posição: a tabela de estratégia

Cada cadeira ganha o seu próprio range de abertura porque **o número de jogadores ainda por agir — e a sua posição pós-flop contra eles — muda o risco de cada mão**. Aqui está a base padrão de 9-max:

| Posição | Range de abertura (aprox.) | Racional |
|:---|:---:|:---|
| UTG | ~13% | Oito jogadores atrás, OOP na maioria das mãos |
| UTG+1 | ~14% | Mal mais largo que o UTG |
| UTG+2 | ~16% | Campo começando a encolher |
| Lojack | ~17% | Primeira middle position de verdade |
| Hijack | ~20% | Começam as oportunidades de roubo |
| **Cutoff** | **~27%** | Só o button atrás — cadeira nobre de roubo |
| **Button** | ==g:**~43%**== | Última ação pós-flop garantida — abertura mais larga |
| Small blind | ~40% (aumenta ou folda) | Largo quando folda até você, mas nunca só paga |
| Big blind | Defende largo vs roubos | Ação de fechamento + pot odds, não aberturas |

![Mesa de pôquer de 9 jogadores mostrando ranges de abertura alargando do UTG (~13%, vermelho apertado) ao Button (~43%, verde largo)](/images/holdem-position-play-opening-range.webp "Range de abertura por posição — o UTG abre ~13%, o button ~43%")

A regra prática: ==**cada passo em direção ao button alarga o range**== — um ponto ou dois por cadeira na early position, depois grandes saltos no cutoff (+7%) e no button (+16%), onde a posição vira quase certa. Indo no sentido contrário, ==r:corte primeiro as mãos suited mais fracas e os broadways offsuit.==

Essas porcentagens descrevem *tamanhos de range* — quais mãos específicas os preenchem (se T9s abre aqui, se K9o entra ali) é o trabalho da [tabela de starting hands por posição](/pt/blog/holdem-starting-hands-chart), que mapeia cada mão para cada cadeira.

---

## Como jogar out of position (quando não dá para evitar)

A maioria dos guias para em "evite jogar OOP". Beleza — mas você está nos blinds duas vezes por órbita, e às vezes a sua abertura do UTG é paga pelo button. Veja como perder o mínimo, e de vez em quando virar o jogo:

**1. O check-raise é o seu equalizador.** É a única arma que o OOP tem e o IP não: como ele espera apostar quando recebe check, ==g:um check-raise vira o piloto automático posicional dele contra ele mesmo.== Monte o range com honestidade — mãos fortes (trincas, two pair) mais projetos com equity de verdade (sequências abertas, flush draws) — para nunca ser só bluff nem só valor.

**2. Aposte maior quando apostar.** Apostas OOP precisam encerrar a mão mais cedo. Um sizing maior (pense em dois terços a três quartos do pote em vez de um terço) nega as cartas grátis e os floats baratos que a posição, caso contrário, deixaria seu adversário pegar. Jogar small-ball OOP só estende a mão — e cada rua extra favorece quem age por último.

**3. Controle de pote significa dar mais check, pagar mais e foldar mais cedo.** Mãos de força média OOP querem showdowns baratos. Linhas de check-call chegam lá; linhas de aposta-e-leva-aumento não. E quando o terceiro barril chega e a sua mão não melhorou, lembre o que mãos marginais OOP de fato são: ==r:bluff-catchers que sub-realizam.== Foldar o river OOP mais vezes do que parece natural costuma ser o certo.

**4. Lidere (donk-bet) raramente e com propósito.** Apostar contra o aumentador do pré-flop só funciona em boards que favorecem o seu range — flops baixos e conectados que arrebentam um range de defesa de blind e erram um range de aumentador. Como linha padrão é legível e explorável; como bisturi nos boards certos, é tranquilo.

**5. Melhor de tudo: não chegue nesse spot.** Só pagar aumentos do small blind, cold-callar em middle position com mãos dominadas, defender o big blind contra aberturas de early position com lixo — a maior parte da desgraça OOP é autoinfligida na decisão pré-flop.

---

## Como a posição afeta a frequência de c-bet?

Massivamente. A continuation bet é fundamentalmente uma jogada de informação, e informação é exatamente o que a posição fornece:

| Situação | Frequência típica de c-bet no solver (flop) |
|---|---|
| **IP (BTN/CO vs defesa de blind)** | **~65–75%** dos boards |
| OOP (potes de 3-bet dos blinds) | ~40–50% dos boards |
| Aumentador OOP vs pagador IP | ~30–45% — o mais seletivo |

In position, você pode dar c-bet num range largo — incluindo ar e backdoor draws — porque o seu adversário precisa responder sem saber a sua próxima jogada, e quando pagam você ainda age por último no turn. Out of position, a mesma aposta é mais arriscada: um check-raise encerra o seu bluff, e um call te deixa adivinhando primeiro em toda rua restante. É por isso que dar c-bet 100% cegamente "porque você aumentou no pré-flop" queima dinheiro OOP.

O framework completo de sizing e textura de board está no [guia de continuation bet](/pt/blog/holdem-continuation-bet).

---

## Estratégia de small blind: por que 3-bet ou fold?

O small blind parece barato — meio blind já dentro — e sai caro: você é o primeiro a agir em toda rua pós-flop contra todo mundo. A estratégia moderna convergiu para uma correção seca: ==**do SB, 3-bet ou fold — quase nunca só pagar.**==

Só pagar do SB te coloca num range limitado e transparente, OOP, com o big blind ainda atrás de você e com preço para dar squeeze. Em vez disso:

- **Dê 3-bet** nas suas mãos de valor e numa camada de blocker bluffs (A5s, A4s são os clássicos).
- **Folde** tudo que teria sido um call "barato" — o desconto não cobre o imposto posicional.
- **Aumente o tamanho para ~4× a abertura** (vs ~3× quando você dá 3-bet IP): como você não terá vantagem pós-flop, cobre mais no pré-flop e encerre mais mãos ali mesmo.

Para a mecânica dos próprios blinds — por que existem e como as apostas forçadas moldam o jogo — veja o [guia de small blind e big blind](/pt/blog/holdem-blind-meaning).

---

## 6-max vs full ring — e torneios vs cash

**O 6-max comprime o mapa.** Com três cadeiras de early removidas, o primeiro a agir no 6-max enfrenta só cinco adversários — então ==**o UTG de 6-max joga como o lojack de full ring, abrindo em torno de ~17%**== em vez dos ~13% do UTG de full ring. Toda outra cadeira alarga na mesma proporção, roubos aparecem mais vezes e 3-bets ficam mais frequentes no geral. O vazamento mais comum ao trocar de formato é carregar a aperto de 9-max para o 6-max — você acaba foldado para fora da mesa.

**Torneios mantêm a mesma mecânica com apostas diferentes em cada decisão.** Em cash games, vantagens posicionais se acumulam com calma ao longo de horas e os rebuys tornam os vazamentos recuperáveis. Em torneios, stacks encolhendo mudam a textura: abaixo de ~15 big blinds, o jogo colapsa para push/fold, onde a nuance posicional importa menos, enquanto em 20–30 BB o roubo de late position vira o motor da sobrevivência — até que o ICM da bolha torne alguns roubos matematicamente corretos em suicídio de torneio. A comparação completa está no [guia de torneio vs cash game](/pt/blog/holdem-tournament-vs-cash-game).

---

:::readnext[Continue lendo]
/pt/blog/holdem-positions | Nomes de posição e mapa da mesa | /images/holdem-positions-hero.webp
/pt/blog/holdem-starting-hands-chart | Tabela de starting hands por posição | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. O que significa out of position no pôquer?**

A. Out of position (OOP) significa que você precisa agir antes do seu adversário nas ruas pós-flop — flop, turn e river. Você compromete fichas sem saber o que ele vai fazer, não consegue pegar cartas grátis e sofre para controlar o tamanho do pote. Os blinds ficam OOP contra toda outra cadeira (entre os dois, o small blind age primeiro — então o big blind na verdade tem posição sobre o small blind); o button nunca fica OOP contra ninguém.

**Q. Por que posição importa tanto no pôquer?**

A. Porque agir por último converte as mesmas cartas em mais dinheiro. Estudos de solver e de banco de dados sugerem que jogadores in position realizam algo em torno de 85–100% da sua equity teórica enquanto jogadores out of position capturam só cerca de 60–85% — o jogador in position vê cada decisão do adversário antes de tomar a sua, então aposta valor, blefa e folda em momentos melhores com as mesmíssimas cartas.

**Q. Qual a posição mais lucrativa no pôquer?**

A. O button. É a única cadeira garantida a agir por último em toda rua pós-flop, e é por isso que estudos de banco de dados o mostram, de forma consistente, como o maior vencedor em qualquer tamanho de mesa — ele consegue abrir com lucro em torno de 43% das mãos, mais ou menos o triplo do que o UTG consegue. O cutoff vem em segundo, já que só o button age atrás dele.

**Q. Qual a posição mais fraca no pôquer?**

A. Duas respostas, dependendo da pergunta. O small blind é a cadeira estruturalmente pior para se jogar uma mão — primeiro a agir em toda rua pós-flop. O big blind perde mais fichas brutas por 100 mãos, simplesmente porque posta um blind forçado inteiro em toda órbita; mesmo o jogo perfeito só reduz essa perda. Entre as cadeiras que não são blind, o UTG é a mais fraca: primeiro no pré-flop, range mais apertado, geralmente OOP depois do flop.

**Q. É melhor limpar ou aumentar do UTG?**

A. Aumente ou folde — não abra com limp. Uma mão forte o bastante para jogar da pior cadeira pré-flop é forte o bastante para aumentar; limpar convida potes multiway que você vai jogar out of position, limita o seu range percebido e nunca ganha os blinds de cara. A exceção rara é limpar atrás de limpers já existentes em jogos ao vivo passivos com pares pequenos e suited connectors.

**Q. Quão largo eu devo abrir do UTG vs do button?**

A. Do UTG num jogo full ring, abra mais ou menos as ~13% melhores mãos — pares fortes, AK/AQ e os melhores broadways suited. Do button, em torno de ~43% é lucrativo porque a última ação garantida compensa cartas mais fracas. No 6-max, o UTG alarga para cerca de ~17%, jogando como um lojack de full ring.

**Q. Como a posição afeta a frequência de c-bet?**

A. In position (button ou cutoff), solvers dão c-bet em cerca de 65–75% dos flops — você age por último em toda rua seguinte, então apostar largo, incluindo ar, é seguro. Out of position isso cai para cerca de 30–50%, porque um check-raise pode encerrar o seu bluff e um call te deixa adivinhando primeiro no turn e no river. Dar c-bet na mesma frequência OOP e IP é um dos vazamentos mais comuns e mais caros.

**Q. Você deveria sempre dar 3-bet do small blind?**

A. Quando você entra no pote, na maioria das vezes sim — o padrão moderno do SB é 3-bet ou fold, não só pagar. Só pagar cria um range limitado e out of position que o big blind pode dar squeeze. Dê 3-bet nas suas mãos fortes mais blocker bluffs como A5s/A4s, aumente o tamanho para cerca de 4× a abertura (vs 3× em posição) e folde o resto.

---

## Os pontos-chave

1. **Posição = realização de equity.** ==g:In position, estudos sugerem que você captura algo em torno de 85–100% da sua equity==; ==r:out of position, só cerca de 60–85%==. A diferença vem de agir por último, não de cartas melhores.
2. **Ranges deslizam com a posição.** O UTG abre ~13%, o button ==g:~43%== — e cada cadeira no meio ganha um degrau na escada. ==r:Jogar mãos de button do UTG sangra fichas.==
3. **O button é a melhor cadeira; os blinds são as piores.** O BB perde mais fichas brutas (aposta forçada); o SB é a pior cadeira para de fato jogar (primeiro a agir em toda rua). Proteja o seu button e faça 3-bet-ou-fold do seu small blind.
4. **OOP não é caso perdido — é disciplina.** Check-raise como equalizador, aumente o tamanho ao apostar, controle potes com mãos médias e folde rivers mais do que parece natural.
5. **Aumente ou folde no under the gun.** Abrir com limp no UTG combina a pior cadeira com a linha mais fraca.
6. **O 6-max comprime o mapa.** O UTG de 6-max joga como o lojack de full ring (~17%) — recalibre ao trocar de formato.

Para cada nome de cadeira e o mapa completo da mesa, veja o [guia de nomes de posição e mapa da mesa](/pt/blog/holdem-positions). Para quais mãos exatas preenchem cada range, use a [tabela de starting hands por posição](/pt/blog/holdem-starting-hands-chart). E para entender por que as cadeiras "com desconto" custam mais caro, o [guia de small blind e big blind](/pt/blog/holdem-blind-meaning) cobre a matemática das apostas forçadas em detalhe.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Posições</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Nomes de posição e mapa da mesa</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">UTG, Lojack, Hijack, Cutoff, Button — cada cadeira explicada</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de starting hands por posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quais mãos jogar de cada cadeira — tabela de referência imprimível</div>
  </a>
  <a href="/pt/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estratégia de small blind e big blind</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que as cadeiras com desconto são as mais difíceis de lucrar</div>
  </a>
  <a href="/pt/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneio vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Como as decisões de posição mudam quando o ICM entra</div>
  </a>
</div>
`.trim(),
};

export default POST;
