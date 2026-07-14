import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-strategy",
  title: "Estratégia de Texas Hold'em: as 5 decisões por trás de toda mão vencedora",
  seoTitle: "Por que 'dicas' de pôquer nunca colam — estratégia em 5 decisões",
  desc: "Pôquer vencedor não são dez dicas soltas — são as mesmas cinco decisões toda mão: posição, seleção de mãos, aumentar ou foldar, c-bet e quando largar.",
  tldr: "Toda decisão vencedora no Texas Hold'em se resume a cinco perguntas que se repetem: onde estou sentado (posição), essa mão vale a pena jogar, eu aumento ou foldo (nunca dou limp), continuo apostando no flop, e quando eu largo a mão? Um jogador tight-aggressive que responde bem a essas cinco folda ~80% das mãos no pré-flop, joga com agressividade quando entra, e ganha de quase todo jogo casual — sem lista de dicas decorada.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "♠️",
  image: "/images/holdem-strategy-hero.webp",
  imageAlt: "Um jogador concentrado pesando uma decisão numa mesa de Texas Hold'em de feltro verde, fichas e cartas comunitárias na frente dele no meio da mão",
  tags: ["estratégia texas holdem", "estratégia de poker", "estratégia de poker para iniciantes", "como ganhar no texas holdem", "tight aggressive", "quando foldar no poker", "quando blefar", "quando dar 3-bet", "estratégia de c-bet"],
  content: `
Nos meus primeiros dois anos eu fiz o que todo mundo faz: li as listas de dicas. "Dez dicas rápidas." "Nove regras essenciais." Eu conseguia recitar todas — jogue menos mãos, seja agressivo, respeite a posição — e mesmo assim *continuava* perdendo. O problema não era que as dicas estavam erradas. É que eram um monte de regras soltas sem nada ligando uma à outra, então na mesa, na hora, eu não fazia ideia de qual aplicar.

O que finalmente me tornou um jogador vencedor não foi uma lista mais longa. Foi perceber que **toda mão de Texas Hold'em são as mesmas cinco decisões, feitas de novo e de novo** — onde estou sentado, essa mão vale a pena jogar, eu aumento ou foldo, continuo apostando, e quando eu largo. Acerte essas cinco e você ganha de quase todo jogo casual em que se senta. Este é o ==framework completo de **estratégia de Texas Hold'em**== construído em torno delas, com links para o aprofundamento de cada uma pra você treinar exatamente onde está vazando.

---

### O que de fato separa os vencedores de todo mundo

:::stripe
5 | Decisões que se repetem em toda mão
~80% | Mãos que um jogador tight-aggressive folda no pré-flop
11,8% | Chance de um par na mão flopar uma trinca (≈1 em 8,5)
0% | Chance de um limp ganhar o pote antes do flop
:::

---

## Estratégia de pôquer não é uma lista de dicas — são cinco decisões

Abra qualquer artigo de "estratégia de pôquer para iniciantes" e você recebe uma listinha numerada: dez dicas, nove regras, sete hábitos. Elas não estão *erradas* — mas uma lista é a pior forma de aprender, porque o jogo não te entrega um cardápio numerado. Ele te entrega uma cadeira, duas cartas e uma aposta para reagir.

Então, em vez de uma lista, use uma **espinha de decisões**. Toda mão que você joga passa pelas mesmas cinco perguntas, na mesma ordem. Cada uma tem um manual dedicado neste site — este hub é o mapa que conecta todas:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | A decisão | A pergunta que você realmente está fazendo | Aprofundamento |
|:---:|:---|:---|:---|
| **1** | **Posição** | Onde estou sentado, e quem age depois de mim? | [Jogar a posição](/pt/blog/holdem-position-play) |
| **2** | **Seleção de mãos** | Essa mão vale a pena entrar no pote? | [Starting hands](/pt/blog/holdem-starting-hands-chart) |
| **3** | **Agressão pré-flop** | Eu aumento ou foldo — nunca só dou limp? | [Por que limpar custa caro](/pt/blog/holdem-limping) |
| **4** | **Continuação** | Continuo apostando no flop, ou desisto? | [Ações de aposta](/pt/blog/holdem-betting-actions) |
| **5** | **Disciplina** | Quando eu largo uma mão? | [Pot odds e folds](/pt/blog/holdem-pot-odds) |

</div>

A mágica não está em nenhuma decisão isolada — está em como elas *se encadeiam*. Boa posição facilita a seleção de mãos. Seleção de mãos mais apertada deixa seus aumentos mais assustadores. Aumentos assustadores ganham mais potes no flop. E saber quando foldar mantém pequenos os potes que você perde. Perca um elo e a corrente arrebenta. Vamos passar por cada um.

---

## Decisão 1 — Onde estou sentado? (Posição)

![Um jogador no botão do dealer com cartas e fichas no feltro verde, a cadeira que age por último em cada street depois do flop](/images/holdem-button-position-hero.webp "O botão age por último em todas as streets pós-flop — a cadeira mais lucrativa da mesa")

Antes mesmo de olhar suas cartas, a informação mais importante já está definida: **sua cadeira.** No Hold'em, o jogador que age *por último* depois do flop tem uma vantagem enorme — ele vê o que todo mundo faz antes de comprometer uma ficha. É por isso que o [botão](/pt/blog/holdem-position-play "thumb:/images/holdem-button-position-hero.webp") é a cadeira mais lucrativa do jogo e os blinds são as menos.

Agir por último te permite fazer três coisas que ninguém em posição inicial consegue:

- **Colher informação** — você vê todo mundo dar check, apostar ou foldar antes de decidir, então nunca fica adivinhando às cegas.
- **Controlar o pote** — você pode dar check atrás para manter o pote pequeno com uma mão marginal, ou apostar para inflá-lo com uma mão forte.
- **Roubar mais** — uma aposta de posição tardia é mais crível e passa muito mais vezes.

A regra prática que sai disso: **jogue mais mãos em posição tardia e menos em posição inicial.** Uma mão como K‑J é fold em UTG mas é um aumento fácil no botão. Se você só lembrar de uma coisa sobre posição, que seja essa. O detalhamento completo cadeira por cadeira — UTG, meio, cutoff, botão e os [blinds](/pt/blog/holdem-blind-meaning) — está no manual de posição.

---

## Decisão 2 — Essa mão vale a pena jogar? (Seleção de mãos)

O maior vazamento do pôquer é jogar mãos demais. Iniciantes pagam com qualquer ás, quaisquer duas figuras, quaisquer duas cartas do mesmo naipe — e depois passam o resto da mão em apuros. A correção é a habilidade menos glamourosa do jogo e a mais lucrativa: **folde a maior parte do que te deram.**

Quanto é "a maior parte"? Um bom iniciante [tight-aggressive](/pt/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") folda **cerca de 80% das mãos antes do flop.** Isso soa absurdamente apertado até você internalizar o motivo: as mãos que você *de fato* joga são, na média, mais fortes que as dos adversários, então você ganha os potes que importam e pula os spots marginais que sangram fichas em silêncio.

Quais mãos entram na conta depende da sua posição (a Decisão 1 alimentando a Decisão 2), mas uma regra de bolso pra começar:

- **Sempre aumente:** pares grandes (A‑A, K‑K, Q‑Q, J‑J) e A‑K.
- **Geralmente aumente:** pares médios, A‑Q e broadways fortes do mesmo naipe (K‑Q, A‑J suited) — mais livremente quanto mais tarde a sua cadeira.
- **Especulativas, dependentes de posição:** pares pequenos e suited connectors, que querem potes multiway baratos (mais da matemática abaixo).
- **Folde:** quase todo o resto, especialmente lixo de naipes diferentes como J‑4, Q‑7, K‑3.

O [starting hands chart](/pt/blog/holdem-starting-hands-chart) transforma isso numa grade colorida que você consegue de fato decorar. Disciplina aqui deixa toda decisão seguinte mais fácil.

---

## Decisão 3 — Aumentar ou foldar. Nunca só dar limp.

![Infográfico de um botão de dealer dourado, duas hole cards viradas para baixo e um flop K♦ 7♣ 2♠ — o botão age por último pós-flop](/images/holdem-button-dealer-board.webp "Dar open-limp convida um pote multiway inflado sem iniciativa — aumente para ganhar agora, ou folde e espere um spot melhor")

Depois de decidir que uma mão vale a pena jogar, tem uma segunda decisão que a maioria dos iniciantes erra: *como* entrar no pote. A resposta, quase sempre, é **aumentar — não dar limp.**

Dar [limp](/pt/blog/holdem-limping) é só igualar o big blind em vez de aumentar. Parece seguro e barato, e é um dos hábitos mais caros do pôquer, por três motivos:

1. **Um limp nunca ganha o pote no pré-flop.** Quando você aumenta sendo o primeiro a entrar, todo mundo pode foldar e você abocanha os blinds de graça. Dê limp e essa chance é exatamente **zero** — você jogou fora a forma mais limpa de ganhar.
2. **Você entrega a iniciativa.** Quem aumentou no pré-flop continua contando uma história no flop (Decisão 4). Dê limp e você entrega essa história para outra pessoa.
3. **Você pinta um alvo em você mesmo.** Jogadores fortes aumentam grande atrás de um limper para isolá-lo, e depois passam a mão inteira jogando melhor em posição. Um open-limp anuncia "jogador fraco e passivo aqui".

O padrão que corrige isso é direto: **se a mão é boa o suficiente para jogar, é boa o suficiente para aumentar; se não é, folde.** E quando *outra* pessoa já aumentou, aumentar de novo — um [3-bet](/pt/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp") — é como você pune aberturas largas e constrói potes com suas melhores mãos. A única exceção comum é o *over*-limp — pagar *atrás* de alguém que já deu limp, em posição, com uma mão especulativa como um par pequeno — onde você está pegando um preço barato para entrar num pote multiway. Isso é um desconto, não uma estratégia. Todo o resto? Aumentar ou foldar.

---

## Decisão 4 — Continuo apostando no flop? (O C-Bet)

Você aumentou no pré-flop, alguém pagou, e agora o flop está aberto. É aqui que a maioria dos potes é de fato ganha e perdida — e a ferramenta é o [continuation bet (c-bet)](/pt/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp"): apostar no flop depois de ter sido quem aumentou no pré-flop, tendo o board ajudado você ou não.

O c-bet funciona porque *você* é quem representou força no pré-flop, então o board "pertence" a você. Mas eis o erro a evitar: **não existe uma única porcentagem de c-bet correta.** O conselho antigo dizia "aposte quase todo flop". A estratégia moderna diz que depende de três coisas:

- **Posição** — em posição num board seco de carta alta (digamos K‑7‑2), você pode dar c-bet com frequência, talvez **60–80%** das vezes. Fora de posição, isso cai para **40–50%** porque você tem menos informação e menos fold equity.
- **Textura do board** — boards secos que erram o adversário favorecem apostar; boards molhados e conectados (9‑8‑7 com duas do mesmo naipe) que acertam ranges de pagador pedem cautela.
- **Número de adversários** — heads-up você pode apostar livremente; contra dois ou mais pagadores, dê c-bet **menos da metade** das vezes, porque alguém conectou com *alguma coisa*.

Sobre sizing, uma aposta pequena de **25–35% do pote** funciona quando você está apostando um range largo num board seco; uma aposta maior de **65%+** cabe num range polarizado de valor e blefe num board mais molhado. Se você levar um **aumento** e não tiver nada, isso flui direto para a Decisão 5. A mecânica de [dar check, apostar e aumentar](/pt/blog/holdem-betting-actions) está coberta no guia de ações de aposta.

---

## Decisão 5 — Quando eu foldo? (A decisão que economiza mais dinheiro)

![Infográfico visto de cima de uma mesa de Hold'em com um board completo K♦ 7♣ 2♠ 9♥ 3♦, pilhas de fichas e o botão do dealer](/images/holdem-pub-players-table.webp "A jogada mais lucrativa do pôquer é a que ninguém repara — foldar uma mão vencida antes que ela te custe um stack")

Agressão ganha potes. **Disciplina mantém stacks.** A decisão que separa jogadores empate-zero de vencedores não é um hero call ou um blefe genial — é o ato chato e repetido de foldar quando você está vencido.

Aqui vai um concreto de uma mão que joguei. Aumentei ==A♣K♣== e peguei um pagador. O flop veio ==2♥ 7♦ 9♠== — miss total. Tenho ás alto, sem par, sem projeto. Disparo um c-bet (Decisão 4, em posição, board seco), e meu adversário me dá check-**raise**. Nesse ponto a matemática é simples: tenho a melhor carta alta possível e mais nada, e um check-raise nesse board quase nunca é um blefe em stakes baixas. Então eu foldo o ás alto e perco o mínimo. Dois anos antes eu teria "só pagado para ver" — e pagado uma trinca de noves toda vez.

A regra geral: **[quando a história que seu adversário está contando bate a mão que você de fato tem](/pt/blog/holdem-when-to-fold "thumb:/images/holdem-when-to-fold-hero.webp"), e você não tem odds para melhorar, largue.** Foldar uma mão boa mas vencida parece perder. Na verdade é o hábito mais lucrativo do jogo. Quando você *de fato* tem um projeto, a decisão de foldar ou pagar se resume a [pot odds](/pt/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") — o preço que você está pegando versus a chance de acertar.

---

## A matemática que você não pode pular

Você não precisa ser matemático, mas dois números sustentam metade das suas decisões.

**Pot odds** te dizem se um call é lucrativo: compare o preço do call com o tamanho do pote, depois com a sua chance de acertar. Se o pote te oferece 4 para 1 e seu projeto fecha cerca de 1 em 5, pagar fica mais ou menos no empate; melhor que isso, é lucro. Esse é o motor por trás de todo spot de "eu persigo esse projeto?" — e o [guia de pot odds](/pt/blog/holdem-pot-odds) transforma isso numa leitura de tabela de 10 segundos.

**Odds de set-mining** explicam por que pares pequenos são especulativos. Pague um aumento com um par de cincos na esperança de flopar uma trinca — three-of-a-kind — e você vai conectar só cerca de **11,8% das vezes, mais ou menos 1 em 8,5.** Quando funciona é lindo: flopar ==5♣ K♠ 2♦== com ==5♠5♦== e você tem uma trinca escondida que estaca um overpair. Mas como você erra ~88% dos flops, set-mining só é lucrativo quando os stacks efetivos são profundos o bastante para te pagar quando você acerta — um guia grosseiro é **pelo menos ~15–20× o tamanho do call.** Stacks curtos? Aquele call especulativo vira um vazamento. A [tabela completa de odds e probabilidade](/pt/blog/holdem-probability) tem todo número que você um dia vai precisar.

---

## Os 6 vazamentos que mais custam aos iniciantes — e a correção

Se você reduzir a estratégia ao que de fato faz iniciantes perderem dinheiro, é a mesma listinha toda vez. Corrija esses seis e você fez 90% do trabalho:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| O vazamento | Por que sangra fichas | A correção |
|:---|:---|:---|
| **Jogar mãos demais** | Mãos iniciais fracas flopam mãos feitas fracas que te custam pós-flop | Folde ~80% no pré-flop (Decisão 2) |
| **Pagar demais** | Um call só ganha se você já está na frente — nunca faz ninguém foldar | Aumente ou folde; pare de "pagar para ver" (Decisão 3) |
| **Ser passivo demais** | Vencedores apostam e aumentam por valor; passividade ganha potes minúsculos e perde os grandes | Tome a linha agressiva quando você tem a mão |
| **Ignorar a posição** | Jogar lixo fora de posição significa adivinhar em toda street | Jogue mais apertado cedo, mais solto tarde (Decisão 1) |
| **Perseguir projetos sem odds** | Calls de "esperança" que o pote não justifica | Confira as pot odds antes de todo call de projeto (Decisão 5) |
| **Jogar em tilt** | Decisões emocionais incendeiam uma boa sessão | Pare quando não está pensando com clareza |

</div>

Repare que cinco dos seis mapeiam diretamente nas cinco decisões. O framework não é abstrato — é literalmente a lista de vazamentos, virada do lado certo.

---

## Tight-Aggressive: o único estilo para começar

Se as cinco decisões são o *o quê*, **tight-aggressive (TAG)** é o *como* — o único estilo que toda fonte concorda ser o ponto de partida certo. São duas palavras fazendo todo o trabalho:

- **Tight** — você joga poucas mãos (Decisão 2). Você folda e folda e folda, e espera spots em que provavelmente está na frente.
- **Aggressive** — mas quando você *de fato* joga, você entra aumentando e apostando (Decisões 3 e 4), não pagando. Você coloca os adversários em decisões, em vez do contrário.

TAG funciona porque ataca os dois maiores vazamentos de iniciante de uma vez — jogar demais e jogar passivo demais — com a curva de aprendizado mais rasa de qualquer estilo vencedor. Não é o *ótimo* teórico; jogadores modernos fortes abrem para ranges mais agressivos (LAG) e balanceados. Mas como base com a qual você bate quase qualquer jogo casual, nada chega perto. Domine tight-aggressive primeiro, depois solte deliberadamente quando as cinco decisões forem segunda natureza.

---

:::readnext[Continue lendo]
/pt/blog/holdem-position-play | Como a posição ganha potes pra você | /images/holdem-position-play-hero.webp
/pt/blog/holdem-starting-hands-chart | Quais mãos jogar de verdade | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Qual a melhor estratégia para Texas Hold'em?**

A. Jogue um estilo tight-aggressive construído em torno de cinco decisões que se repetem: escolha mãos com base na sua posição, folde a maior parte do que te dão (cerca de 80% no pré-flop), entre nos potes aumentando em vez de dar limp, dê continuation bet no flop quando tiver a iniciativa, e faça folds disciplinados quando estiver vencido. Essa combinação bate quase todo jogo casual sem nenhuma teoria avançada.

**Q. Qual a melhor estratégia de pôquer para iniciantes?**

A. Tight-aggressive (TAG). Jogue poucas mãos, mas jogue com agressividade — aumente em vez de pagar, e folde rápido quando erra. Corrige diretamente os dois vazamentos mais comuns de iniciante (jogar mãos demais e jogar passivo demais) e tem a curva de aprendizado mais rasa de qualquer estilo vencedor. Comece por aí antes de experimentar abordagens mais soltas e avançadas.

**Q. Como se ganha no Texas Hold'em?**

A. Você não ganha jogando mais mãos — ganha tomando decisões melhores nos mesmos cinco spots em toda mão: posição, seleção de mãos, aumentar ou foldar, c-bet e foldar. Vencedores foldam mais, aumentam mais e pagam menos que perdedores. Com o tempo, mãos iniciais mais apertadas e folds disciplinados significam que você ganha os potes grandes e perde os pequenos — que é o jogo inteiro.

**Q. Quando você deve foldar no pôquer?**

A. Folde quando a história que seu adversário está contando bate a mão que você de fato tem e você não tem as pot odds para continuar puxando o projeto. Concretamente: folde mãos fracas antes do flop, folde quando erra e enfrenta agressão de verdade, e folde projetos quando o preço está errado. Foldar uma mão boa mas vencida parece perder, mas é o hábito mais lucrativo do pôquer.

**Q. Quando você deve apostar vs. dar check no pôquer?**

A. Aposte quando você tem uma mão que vale a pena construir um pote, ou um bom spot de blefe onde os adversários conseguem foldar — apostar ganha potes de duas formas (eles foldam, ou você tem a melhor mão). Dê check quando sua mão é marginal e você prefere manter o pote pequeno, quando está fora de posição sem plano claro, ou quando dar check te deixa armar uma cilada com uma mão forte. Como quem aumentou no pré-flop, um continuation bet no flop costuma ser seu padrão.

**Q. Quando você deve blefar no pôquer?**

A. Blefe quando a história é crível e seu adversário de fato consegue foldar — não só porque você errou. Os melhores blefes vêm com backup: um projeto (um semi-blefe) que ainda pode ganhar se pago, em posição, contra um adversário, num board que favorece o seu range. Blefar contra vários pagadores ou jogadores que nunca foldam é só tocar fogo no dinheiro.

**Q. Quando você deve dar 3-bet?**

A. Dê 3-bet (re-aumentar quem aumentou no pré-flop) por valor com suas mãos mais fortes — pares grandes e A-K — para construir o pote enquanto está na frente, e adicione um número menor de blefes com mãos que jogam bem quando pagas, como suited connectors ou ases do mesmo naipe. Dê mais 3-bet de posição tardia e contra jogadores que abrem largo demais; folde, em vez de só pagar, suas mãos mais fracas fora de posição.

**Q. Quando você deve aumentar vs. pagar?**

A. Prefira aumentar a pagar sempre que tiver uma mão que vale a pena continuar. Aumentar ganha potes de duas formas (fold equity mais a melhor mão) e toma a iniciativa; pagar só ganha se você já está na frente e deixa outros entrarem barato. Pague quando sua mão é forte o suficiente para continuar mas não para construir um pote grande, quando está fazendo set-mining com um par pequeno, ou quando quer manter os blefes de um jogador mais fraco na mão.

**Q. Quantas mãos você deve jogar no Texas Hold'em?**

A. Bem menos do que parece natural. Um jogador tight-aggressive vencedor folda cerca de 80% das mãos antes do flop, jogando mais apertado em posição inicial e mais solto no botão. Se você está entrando em potes com mais de uma em cada cinco mãos, quase certamente está jogando demais — apertar é a forma mais rápida de melhorar.

**Q. O que significa tight-aggressive (TAG)?**

A. Tight-aggressive descreve jogar um range estreito de mãos fortes (tight) mas jogá-las de forma assertiva com apostas e aumentos em vez de calls (aggressive). É o estilo mais recomendado para iniciantes porque é ao mesmo tempo lucrativo e simples: folde a maioria das mãos, e ataque com as que você guarda. O oposto — loose-passive, jogar muitas mãos e majoritariamente pagar — é o perfil clássico do perdedor.

**Q. Com que frequência você deve dar continuation bet (c-bet)?**

A. Não há um número único — depende da posição, do board e de quantos adversários você enfrenta. Em posição contra um jogador num board seco você pode dar c-bet 60–80% das vezes; fora de posição ou contra dois ou mais adversários cai para 40–50% ou menos. Aposte mais em boards que erram o range do adversário, menos em boards molhados que conectam com ele, e faça sizing pequeno (25–35% do pote) quando aposta largo, maior (65%+) quando polarizado.

---

## As Cinco Decisões, mais uma vez

1. **Posição** — jogue mais mãos tarde, menos cedo; o botão é sua cadeira mais lucrativa.
2. **Seleção de mãos** — folde ~80% no pré-flop; as mãos que você guarda são mais fortes que as dos adversários.
3. **Aumentar ou foldar** — nunca dê open-limp; um aumento pode ganhar o pote agora, um limp nunca.
4. **Continuação** — dê c-bet quando tiver a iniciativa, mas ajuste para o board, a posição e os adversários.
5. **Disciplina** — folde mãos vencidas e projetos sem odds; é a jogada que mais economiza dinheiro.

Esse é o framework inteiro. Não são dez dicas para decorar — são cinco perguntas para fazer, em ordem, em toda mão. Fique bom em respondê-las e você vai discretamente passar os jogadores ainda caçando uma lista mais longa. Comece com o [starting hands chart](/pt/blog/holdem-starting-hands-chart) e consciência real de [posição](/pt/blog/holdem-position-play), adicione [pot odds](/pt/blog/holdem-pot-odds), e você construiu um jogo que bate quase toda mesa em que vai se sentar.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jogando a sua posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que o botão imprime dinheiro</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Os 80% que você deveria estar foldando</div>
  </a>
  <a href="/pt/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Por que limpar custa caro</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Aumentar ou foldar — o caso contra só pagar</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A matemática de 10 segundos por trás de todo fold</div>
  </a>
</div>
`.trim(),
};

export default POST;
