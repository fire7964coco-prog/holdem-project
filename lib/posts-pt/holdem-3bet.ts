import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "3-bet no pôquer: quando dar, de quanto, e como responder a um",
  seoTitle: "O guia de 3-bet que mostra a matemática — quando, quanto, vs o quê",
  desc: "O que é um 3-bet e por que tem esse nome, quando 3-betar por valor ou como blefe, a matemática do sizing, e como responder quando levam um 3-bet em você.",
  tldr: "Um 3-bet é o primeiro re-raise antes do flop — chamado de 3-bet porque o big blind é a primeira aposta, o open-raise a segunda, e o seu re-raise a terceira. Value-3-bete um núcleo apertado (QQ+, AK) mais alguns blefes de bloqueio suited como A5s, dimensione em torno de 3x o open in position e 4x out of position, e mantenha sua frequência geral de 3-bet perto de 6–10%. Quando você é quem enfrenta um 3-bet, 4-bete suas mãos premium, pague as mãos que jogam bem, e folde o resto — foldando mais que o \"balanceado\" contra jogadores de stakes baixos que nunca blefam.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Um jogador de pôquer empurrando uma pilha de fichas à frente para um re-raise enquanto o raiser original observa, um confronto de 3-bet pré-flop no feltro verde",
  tags: ["3 bet poker", "o que é um 3-bet", "sizing de 3-bet", "range de 3-bet", "light 3-bet", "blefe de 3-bet", "quando dar 3-bet", "squeeze play", "enfrentar um 3-bet", "range linear vs polarizado"],
  content: `
A mão que me ensinou para que serve mesmo um 3-bet foi assim: um jogador loose deu open, olhei para o meu A-K e — como todo iniciante — só paguei. O flop veio ace-high, não coloquei dinheiro nenhum, e ele foldou para uma única aposta. Eu tinha transformado a melhor mão num pote minúsculo. Uma semana depois, mesmo spot, dei um *re-raise* no lugar. Ele pagou com um ás pior, empilhou num flop ace-high, e eu ganhei cinco vezes mais. Mesmas cartas. Uma decisão — o 3-bet — foi toda a diferença.

Um **3-bet** é uma das armas mais poderosas do No-Limit Hold'em, e também uma das mais mal compreendidas. A maioria dos guias te dá metade da história: como *dar* um 3-bet, mas não de quanto, não quais mãos são blefes e por quê, não o que fazer quando alguém dá um 3-bet em *você*. Este é o ==**manual completo de 3-bet**== — definição, sizing com a matemática de fato mostrada, ranges de valor e light, o squeeze, enfrentar um 3-bet, e os erros que silenciosamente te custam stacks. É uma peça central de uma [estratégia vencedora de Texas Hold'em](/pt/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") — o princípio de [aumentar ou foldar](/pt/blog/holdem-limping), elevado a outro nível.

---

### O 3-bet, em números

:::stripe
3ª aposta | Por que se chama "3-bet" (blind = aposta 1)
~3x / ~4x | Sizing: in position vs out of position
6–10% | Uma frequência geral de 3-bet saudável
QQ+, AK | O núcleo de valor com que quase todo mundo concorda
:::

---

## O que é um 3-bet no pôquer?

**Um 3-bet é o primeiro re-raise antes do flop** — você dá um re-raise num jogador que já fez um open-raise. Se alguém dá open para 3 big blinds e você faz 9, isso é um 3-bet.

Então por que se chama *três*-bet se é só o segundo aumento? Porque o nome conta as **apostas na sequência, não os aumentos.** O big blind é uma aposta forçada — essa é a ==aposta um==. O open-raise é a ==aposta dois==. Seu re-raise é a ==aposta três== — o 3-bet. Siga a cadeia para cima e o resto do vocabulário se encaixa:

- **4-bet** — o re-raise *sobre* um 3-bet (a quarta aposta). Muito forte ou polarizado.
- **5-bet** — o re-raise sobre um 4-bet. Com 100 big blinds isso costuma ser all-in.
- **Cold 4-bet** — um 4-bet de alguém que ainda não tinha aumentado (ex.: UTG dá open, você dá 3-bet, o button dá 4-bet "cold"). Grita força.

Essa é a escada de apostas inteira. Todo o resto deste guia é sobre o primeiro degrau — quando subi-lo, até onde, e o que fazer quando alguém o sobe em cima de você. Se as [ações de aposta](/pt/blog/holdem-betting-actions) básicas de check, pagar e aumentar ainda estão confusas, comece por ali e volte.

---

## Por que dar um 3-bet, afinal? O que um 3-bet realmente faz

Pagar um open-raise (chamado de **flatting**) te mantém no pote, mas um 3-bet faz quatro coisas que um flat não faz:

1. **Ganha o pote na hora, com frequência.** Boa parte das vezes, o raiser folda e você fica com o pote antes do flop sem showdown. Um flat nunca faz isso.
2. **Constrói um pote grande com suas melhores mãos.** Quando você tem ases ou reis, flatar deixa três outros jogadores entrarem barato. Dar 3-bet isola o raiser e coloca dinheiro enquanto você é um favoritão.
3. **Toma a iniciativa e a alavancagem de posição.** Você vira o agressor com a liderança da aposta em cada street — e contra um opener aberto, essa pressão imprime dinheiro.
4. **Nega equity e informação.** Um aumento cobra dos adversários para continuar em vez de deixá-los ver um flop barato com uma mão que pode te quebrar.

O detalhe: como um 3-bet é poderoso, fazê-lo *errado* é caro. Muitos jogadores só dão 3-bet com seus monstros, o que os deixa completamente legíveis. O resto deste guia é sobre fazer certo.

---

## Quando você deve dar um 3-bet? Mãos de valor vs. blefes light

![Um infográfico em grade escuro e on-brand dividindo as mãos de 3-bet em duas colunas — 3-BETS DE VALOR como par de ases, reis, damas e ás-rei, e 3-BETS LIGHT como ases de roda suited e conectores suited](/images/holdem-3bet-range-grid.webp "Um range de 3-bet saudável tem duas partes: um núcleo de valor que você quer que paguem, e alguns blefes de bloqueio suited que você folda tranquilo para um 4-bet")

Um range vencedor de 3-bet tem **duas partes distintas**, e entender essa divisão é o maior salto neste tema.

**3-bets de valor** — mãos que você *quer* que paguem porque você está à frente do que continua:
- **O núcleo, quase sempre:** ==g:QQ+ e AK.==
- **Estenda para** JJ, TT, AQs e KQs quando estiver contra um open mais aberto e de posição mais tardia — e recolha em direção ao núcleo contra um raiser apertado de posição inicial.

**3-bets light (blefes de 3-bet)** — mãos que você dá 3-bet *torcendo* para foldá-las, mas que ainda têm equity de reserva quando pagas. Os melhores candidatos não são lixo aleatório; são escolhidos por **blockers** e **jogabilidade**:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão de 3-bet light | Por que é um ótimo blefe |
|:---|:---|
| **A5s–A2s** (ases de roda suited) | Seu ás **bloqueia** as premium dele — derruba os combos de AA de 6 para 3 e de AK de 16 para 12 — então é menos provável que ele tenha uma mão que continua. Além disso flopa flushes, sequências e projetos de roda. |
| **Conectores suited** (76s, 65s) | Jogabilidade excelente — flopam sequências, flushes e projetos, então ganham bastante mesmo quando o blefe é pago. |
| **Suited one-gappers** (T8s, 97s) | Mesma ideia, um pouco mais fracos: disfarçados, flexíveis e baratos de foldar num 4-bet. |

</div>

A lógica do blocker numa frase: **ter um ás torna matematicamente menos provável que seu adversário tenha ases ou ás-rei**, então A5s é um blefe muito melhor que, digamos, A9o — que bloqueia as mesmas premium mas joga péssimo quando pago e só faz pares fracos. A equity de reserva importa porque seu adversário não vai foldar sempre; você quer um blefe que ainda possa ganhar o pote. É por isso que A5s ≈ 30% de equity contra um range que paga com QQ+/AK, enquanto o lixo offsuit fica bem abaixo disso. É a mesma disciplina de [mãos iniciais](/pt/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") de sempre — só aplicada ao re-raise.

---

## Ranges de 3-bet lineares vs. polarizados

Você vai ver essas duas palavras por todo canto na estratégia de 3-bet. Elas descrevem o *formato* do seu range, e escolher o certo é o que separa jogadores que pensam de robôs de tabela de mãos.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Linear (merged) | Polarizado |
|:---|:---|:---|
| **Formato** | Um bloco sólido das suas melhores mãos | Halteres: o valor mais forte **+** blefes, nada no meio |
| **Exemplo** | QQ+, AK, AQs, JJ, TT, KQs | AA-KK + blefes tipo A5s; flate o meio QQ/AQ/TT |
| **Use quando** | O open é **aberto e fraco** (posição tardia), ou você está **in position** | O open é **forte/apertado** (posição inicial), ou você está **nos blinds** |

</div>

A razão é simples: contra um open **aberto e fraco**, mãos como AQ e TT estão genuinamente à frente, então você as 3-beta por valor num bloco único merged (**linear**). Contra um open **apertado**, essas mesmas mãos do meio estão dominadas e são "explodidas" por 4-bets, então você só 3-beta valor de verdade mais blefes limpos e *flata* o meio (**polarizado**).

Uma nuance honesta que a turma da tabela de mãos ignora: **posição não é o único fator.** A pergunta real é *quão provável é você ser explodido da sua mão* — o que também depende da agressividade do adversário, do rake e do seu sizing. Contra alguém que paga muito e raramente dá 4-bet, com um size pequeno e rake baixo, incline para **linear**. Contra um adversário que adora 4-bet com um size grande e rake alto, incline para **polarizado**. Leia o spot, não decore uma regra.

---

## De quanto você deve dar um 3-bet? (Sizing, com a matemática)

A maioria dos guias te diz "3x in position, 4x out of position" e segue em frente. Aqui está o *porquê* e a aritmética de verdade, usando um open padrão de **3 big blinds** (chame de um open de $6 em $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situação | Size | Open de 3bb vira… | Por quê |
|:---|:---:|:---:|:---|
| **In position** (você age por último) | ~3x o open | **9bb** ($18) | A posição te deixa ganhar com um size menor, então você arrisca menos. |
| **Out of position** (você age primeiro) | ~4–4,5x | **12–13,5bb** ($24–27) | Maior cobra mais deles para ver um flop e nega uma passagem barata à sua desvantagem de posição. |
| **Squeeze** (open + um caller) | Size OOP **+ ~1x por caller** | **~14–15bb** ($30) | Dinheiro morto extra e um jogador a mais para empurrar para fora. |
| **Isolar um limper** | 3bb **+ 1bb por limper** (some mais 1 vivo) | ~4–5bb | Puna o limp, desencoraje overcalls, ainda seja pago aberto. |

</div>

A matemática está deliberadamente visível porque é onde iniciantes vazam: **3 × 3bb = 9bb** in position, **4 × 3bb = 12bb** out of position. Duas regras que passam por cima dos multiplicadores:

- **Nunca dê um 3-bet minúsculo out of position.** Um 3-bet OOP pequeno oferece um ótimo preço ao seu adversário para pagar e te superjogar com posição — exatamente o que você tenta evitar. Use o 4x+ completo.
- **Sizing não é lei.** Diminua o size *contra* jogadores que foldam demais (você blefa mais barato) e aumente o size e vá de puro valor contra calling stations que nunca foldam. Rake e profundidade de stack também mexem nisso.

Em torneios com stacks curtos, todo o cálculo muda: em torno de **10–25 big blinds**, muitas mãos viram um **3-bet all-in (um "shove")** em vez de um re-raise pequeno, porque não há espaço para aumentar-e-foldar. Pare de dar min-3-bet e comece a jammar conforme fica curto.

---

## 3-bet, flatar, ou foldar? Uma tabela de decisão

Enfrentando um open, você tem três escolhas, não duas. Este é o mapa que a maioria dos artigos nunca desenha — quando uma mão prefere um 3-bet, um flat (call), ou o mucke:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sua mão | In position (ex.: button vs um steal) | Out of position (ex.: nos blinds) |
|:---|:---|:---|
| **Premium** (QQ+, AK) | 3-bet por valor | 3-bet por valor |
| **Fortes** (JJ-TT, AQ, KQs) | 3-bet vs opens abertos; flate vs apertados | Majoritariamente 3-bet ou fold — flatar OOP é fraco |
| **Especulativas** (pares baixos, conectores suited) | Flate para set-mine / ver flops baratos | 3-bet como blefe, ou fold |
| **Blefes de bloqueio** (A5s-A2s) | 3-bet como aumento light | 3-bet como aumento light |
| **Todo o resto** | Fold | Fold |

</div>

A grande lição: **flatar é legítimo in position** — solvers modernos mantêm um range saudável de flat no button porque você consegue ver flops lucrativamente com a aposta fechada atrás. Out of position é mais fraco, mas com uma divisão importante: do **small blind**, prefira um *3-bet ou fold* polarizado, já que pagar aberto OOP realiza sua equity mal e constrói um range fraco e capado. O **big blind** é a exceção — porque você fecha a ação e já está recebendo um preço, você defende *pagando* muito mais aberto ali, especialmente contra steals de posição tardia. A posição, de novo, muda tudo — a mesma lição do [manual de posição](/pt/blog/holdem-position-play).

---

## O squeeze play: dar 3-bet num raiser *e* num caller

![As pilhas de fichas de três jogadores empurradas para o meio do feltro verde enquanto um jogador desliza um re-raise maior à frente, espremendo um open-raiser e um caller](/images/holdem-3bet-squeeze.webp "Um squeeze puna um open-raiser e um flat-caller ao mesmo tempo — o dinheiro morto extra torna até um 3-bet light lucrativo")

Um **squeeze play** é um 3-bet feito depois que já houve um open-raise *e* pelo menos um caller. Chama-se squeeze porque você coloca os dois adversários numa prensa: o raiser original agora tem que se preocupar com o caller atrás, e o caller — que acabou de mostrar uma mão não forte o suficiente para re-raise — raramente quer continuar contra a sua agressão.

Duas coisas tornam o squeeze especial:
- **Há mais dinheiro morto.** O pote já contém o aumento e o call, então um squeeze bem-sucedido ganha mais, o que significa que seus blefes precisam funcionar *menos* vezes para dar lucro.
- **Dimensione maior.** Some grosso modo um open-raise extra para cada caller. Contra um open de 3bb mais um caller, um squeeze para cerca de **14–15bb** é padrão — o size extra é o que empurra os dois jogadores para fora.

Bons blefes de squeeze são as mesmas mãos de bloqueio suited (A5s e companhia) que fazem bons blefes de 3-bet, porque você ainda quer foldar as mãos médias do raiser e ter equity quando pago.

---

## Enfrentando um 3-bet: você paga, dá 4-bet, ou folda?

![Um jogador de pôquer encarando um re-raise pré-flop com uma mão apoiada nas fichas, pesando se paga, dá 4-bet, ou folda a um 3-bet](/images/holdem-3bet-facing.webp "A metade do 3-bet que ninguém ensina: quando alguém te dá re-raise, a maior parte do seu range deveria simplesmente foldar — especialmente contra jogadores que nunca blefam")

Aqui está a metade do 3-bet que quase todo artigo pula: **você vai estar do lado que recebe muito mais vezes do que você mesmo dá 3-bet.** Quando você dá open e leva re-raise, você tem três respostas:

- **4-bet** — por valor com suas premium (QQ+, AK), mais o blefe de bloqueio ocasional (uma mão tipo A5s). Um 4-bet diz "eu não vou a lugar nenhum".
- **Pagar** — com mãos que flopam bem e têm a equity ou posição para continuar: pares para set-mine, broadways suited, e mãos fortes que não querem inflar o pote numa guerra de 4-bet.
- **Foldar** — todo o resto. A maior parte do seu range de open deveria simplesmente entregar a um 3-bet; isso é normal, não fraqueza.

Quanto você deve continuar? A referência teórica é a **Frequência Mínima de Defesa (MDF)** — a fatia do seu range que você precisa continuar para que o 3-bettor não possa lucrar blefando com duas cartas quaisquer. É ==pote ÷ (pote + aposta)== — onde *pote* é o que está no meio antes do 3-bet e *aposta* é o tamanho do 3-bet — o que, contra sizes típicos de 3-bet, dá em torno de **um terço do seu range** no vácuo (um 3-bet de 3x: 4,5bb de pote ÷ (4,5bb + 9bb) ≈ 33%). Mas aqui está o exploit que ganha dinheiro em mesas reais:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stat de fold-to-3-bet do vilão | O que te diz | Seu ajuste |
|:---:|:---|:---|
| **~35% (raramente folda)** | Um calling station — seus 3-bets e calls são pesados de valor | 3-bete ele **só por valor**, pare de blefar, e value-bete sem dó |
| **~55% (balanceado)** | Um regular que pensa | Jogue perto do GTO — misture valor e blefes de bloqueio |
| **~70%+ (folda demais)** | Um nit explorável | 3-bete ele **light muito mais vezes** — ele te entrega o pote |

</div>

A MDF assume um adversário *balanceado*. Em stakes baixos e jogos live, os jogadores **sub-blefam** feio seus 3-bets — então quando um jogador passivo de repente dá re-raise, acredite nele e **folde mais do que a MDF manda.** Você não deve a um nit uma defesa "balanceada".

---

## Uma mão real de 3-bet, do início ao fim

Chega de teoria — aqui está uma mão completa com os números, para você ver o fluxo inteiro (checado por §13). Cash $1/$2, 100bb de profundidade.

- **Pré-flop:** Um cutoff loose dá open para ==$6== (3bb). Estou no button com ==A♠Q♠==. Este é um claro **3-bet de valor** contra um open aberto de posição tardia, e estou in position, então faço ==$18== (3x). Os blinds foldam; o cutoff paga. O pote é $39.
- **Flop:** ==Q♦ 8♣ 4♥.== Eu flopo **top pair, top kicker** — meu A♠Q♠ faz um par de damas com o melhor kicker possível (o ás). Melhores cinco cartas: Q♠ Q♦ A♠ 8♣ 4♥ = um par (damas) com o kicker de ás. Contra o range dele de damas piores, oitos e floats, estou muito à frente.
- **O ponto:** porque dei 3-bet pré-flop, o pote já está grande e eu tenho a liderança da aposta, então aposto de novo por valor e sou pago por damas piores e projetos. Se eu tivesse só *flatado* pré-flop, três outros jogadores poderiam ter visto aquele flop, minha mão seria muito mais difícil de jogar, e o pote seria uma fração do tamanho. O 3-bet é o que transformou top pair num stack.

Agora inverta: se eu tivesse dado 3-bet numa mão **light** tipo A5s ali e o cutoff tivesse dado **4-bet** para $55, eu simplesmente foldaria — o blefe de bloqueio cumpriu seu papel me dando um descarte barato e limpo. Essa é a disciplina que torna o 3-bet light lucrativo em vez de esbanjador.

---

## Os 6 erros mais comuns de 3-bet

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| O erro | Por que te custa | A correção |
|:---|:---|:---|
| **3-bet pequeno demais OOP** | Oferece um ótimo preço para pagar — eles realizam equity in position contra você | Use o 4x+ completo out of position |
| **Só dar 3-bet por valor** | Você fica de cara aberta; bons jogadores foldam tudo menos coolers | Adicione blefes de bloqueio suited (A5s) |
| **Nunca blefar de 3-bet** | Deixa dinheiro na mesa vs steals abertos; seus flats ficam fracos demais | Balanceie valor com alguns 3-bets light |
| **3-bet merged vs um nit** | Seu "valor" está dominado pelo range só-premium dele | Vá polarizado ou simplesmente folde vs um nit de verdade |
| **Blefar de 3-bet com lixo (Q7o)** | Sem blockers, sem equity — você tem que foldar a todo 4-bet | Escolha só mãos de blocker/jogabilidade |
| **Flatar demais nos blinds** | Realização de equity ruim OOP; um range fraco e capado | Prefira um 3-bet-ou-fold polarizado |

</div>

Repare no fio que percorre os seis: um bom 3-bet tem um *motivo* — valor que você quer que paguem, ou um blefe com blockers e equity de reserva. Re-raise aleatório sem plano é como stacks desaparecem.

---

:::readnext[Continue lendo]
/pt/blog/holdem-strategy | As 5 decisões por trás do pôquer vencedor | /images/holdem-strategy-hero.webp
/pt/blog/holdem-position-play | Por que a posição te ganha potes | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. O que é um 3-bet no pôquer?**

A. Um 3-bet é o primeiro re-raise antes do flop — você dá re-raise num jogador que já fez um open-raise. Por exemplo, se alguém dá open para 3 big blinds e você faz 9, você deu um 3-bet. É a principal ferramenta para construir um pote com mãos fortes e para aplicar pressão em adversários que abrem demais.

**Q. Por que se chama 3-bet?**

A. Porque o nome conta as apostas na sequência, não os aumentos. O big blind é uma primeira aposta forçada, o open-raise é a segunda aposta, e o seu re-raise é a terceira — o "3-bet". É por isso que se chama três-bet mesmo sendo tecnicamente só o segundo aumento da mão.

**Q. Qual a diferença entre um 3-bet e um 4-bet?**

A. Um 3-bet é o primeiro re-raise (sobre um open-raise); um 4-bet é o próximo re-raise, feito sobre um 3-bet. Então a escada de apostas vai: open-raise (2ª aposta) → 3-bet (3ª aposta) → 4-bet (4ª aposta) → 5-bet (geralmente all-in). Um 4-bet representa um range muito forte e polarizado.

**Q. Que mãos você deve dar 3-bet?**

A. Divida seus 3-bets em valor e blefes. O núcleo de valor é QQ+ e AK, estendendo para JJ, TT, AQs e KQs contra opens mais abertos. Para blefes, use mãos suited com blockers e jogabilidade — A5s até A2s e conectores suited como 76s e 65s — não lixo offsuit aleatório.

**Q. Quando você deve dar 3-bet vs. só pagar (flatar)?**

A. Dê 3-bet quando você tem uma premium, quando o opener é aberto e fraco, ou quando você está out of position e quer evitar um flat ruim. Flatar é bom in position com mãos especulativas (pares baixos, conectores suited) onde você consegue ver flops baratos com o button. Out of position, prefira dar 3-bet ou foldar em vez de pagar.

**Q. O que é um 3-bet light?**

A. Um 3-bet light (ou blefe de 3-bet) é dar re-raise com uma mão que você não espera que seja a melhor, torcendo para foldar o opener. Os melhores 3-bets light têm blockers e equity de reserva — ases de roda suited como A5s bloqueiam os ases e o ás-rei do seu adversário enquanto ainda flopam flushes e sequências, então ganham mesmo quando pagos.

**Q. Qual a diferença entre um range de 3-bet linear e um polarizado?**

A. Um range linear (merged) é um bloco sólido das suas melhores mãos — usado contra opens abertos e fracos ou quando in position. Um range polarizado são suas mãos mais fortes mais blefes, com as mãos médias removidas e flatadas no lugar — usado contra opens apertados ou dos blinds, onde as mãos médias são explodidas por 4-bets.

**Q. De quanto você deve dar um 3-bet?**

A. Em torno de 3x o open in position e 4–4,5x out of position. Então contra um open de 3 big blinds, faça cerca de 9bb in position ou 12bb out of position. Some grosso modo um open-raise extra por caller quando estiver dando squeeze. Não dê 3-bet pequeno out of position — dá ao seu adversário um call barato e fácil in position.

**Q. Qual é uma boa porcentagem de 3-bet?**

A. Para um jogador sólido, uma frequência geral de 3-bet em torno de 6–10% é saudável, com cerca de 8% típico para um bom jogador de cash 6-max. Abaixo de ~4% é apertado demais e de cara aberta; acima de ~10% costuma ser agressivo demais e faz você levar 4-bet e ser pago muito light. É naturalmente mais alta dos blinds e do button do que contra opens de posição inicial.

**Q. O que é um squeeze play?**

A. Um squeeze é um 3-bet feito depois de um open-raise e pelo menos um caller. O dinheiro morto extra no pote o torna lucrativo, e ele pressiona os dois adversários ao mesmo tempo — o raiser e o flat-caller capado. Dimensione squeezes maiores que um 3-bet normal, somando cerca de um open-raise extra para cada caller.

**Q. Como você responde a um 3-bet?**

A. Você tem três opções: dar 4-bet nas suas premium (QQ+, AK) mais o blefe de bloqueio ocasional, pagar com mãos que flopam bem e têm equity ou posição (pares, broadways suited), e foldar todo o resto. A maior parte do seu range de open deveria foldar a um 3-bet — isso é normal. Contra jogadores que raramente blefam, folde ainda mais.

**Q. Qual é uma boa porcentagem de fold-to-3-bet?**

A. Em torno de 55% é uma referência razoável e mais ou menos balanceada — você continua com o topo do seu range e deixa o resto ir. Foldar muito mais que isso te deixa explorável por 3-bets light; foldar muito menos significa que você está pagando ou dando 4-bet aberto demais. Ajuste ao adversário: folde mais contra jogadores que nunca blefam de 3-bet.

**Q. Você deve dar 3-bet ou 4-bet all-in com um stack curto num torneio?**

A. Conforme os stacks ficam curtos — em torno de 10–25 big blinds — muitas mãos jogam melhor como um 3-bet all-in (um shove) em vez de um re-raise pequeno, porque não há espaço para aumentar e depois foldar a um 4-bet. Dar shove realiza toda a sua fold equity de uma vez. Mesas mais fortes contra-atacam o jam puro com 3-bets minúsculos, então misture 3-bets pequenos não-all-in quando puder.

---

## O manual de 3-bet, em resumo

1. **Um 3-bet é o primeiro re-raise pré-flop** — terceira aposta na sequência, porque o blind conta como aposta um.
2. **Construa dois ranges:** um núcleo de valor (QQ+, AK) que você quer que paguem, e blefes de bloqueio suited (A5s e companhia) escolhidos por blockers e jogabilidade.
3. **Dimensione ~3x in position, ~4x out** — e nunca pequeno out of position.
4. **Case o formato ao spot:** linear vs opens abertos/fracos, polarizado vs opens apertados e dos blinds.
5. **Enfrentando um 3-bet, a maioria das mãos folda** — 4-bete as premium, pague as jogáveis, e folde mais que o "balanceado" contra adversários que nunca blefam.

Acerte o 3-bet e você deixa de ser o jogador que só paga com ases e ganha um pote minúsculo. Combine com um [range disciplinado de mãos iniciais](/pt/blog/holdem-starting-hands-chart), consciência afiada de [posição](/pt/blog/holdem-position-play), e o [framework completo de estratégia](/pt/blog/holdem-strategy), e seu jogo pré-flop silenciosamente sai na frente do campo.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O framework das 5 decisões</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Onde o 3-bet se encaixa num jogo vencedor</div>
  </a>
  <a href="/pt/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Por que o limp te custa caro</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Aumente ou folde — não só pague</div>
  </a>
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jogando sua posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que 3-bets funcionam melhor in position</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de mãos iniciais</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quais mãos valem um aumento</div>
  </a>
</div>
`.trim(),
};

export default POST;
