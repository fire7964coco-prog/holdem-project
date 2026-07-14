import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "Glossário de Texas Hold'em: todo termo de pôquer que você vai ouvir na mesa",
  seoTitle: "Das nuts ao fish — o glossário de Texas Hold'em",
  desc: "Todo termo de pôquer que você vai ouvir na mesa, explicado simples e agrupado por situação: apostas, posições, mãos, gírias e os termos que todo mundo confunde.",
  tldr: "Este é um glossário direto dos termos de pôquer que realmente aparecem numa mesa de Texas Hold'em, agrupados pela forma como você vai encontrá-los — ações de aposta, posições, mãos e board, tipos de jogador, dinheiro e situações de mesa. Comece pelos termos 'mais confundidos' logo abaixo (check vs call, set vs trips, cooler vs bad beat) e depois navegue por categoria. Os termos com um guia mais completo linkam direto pra ele.",
  category: "glossary",
  date: "2026-07-05",
  updated: "2026-07-05",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "Uma mesa de Texas Hold'em com fichas, o botão do dealer e as cartas comunitárias espalhadas no feltro verde, representando a linguagem do pôquer",
  tags: ["termos de poker", "glossário de poker", "termos texas holdem", "gírias de poker", "terminologia de poker", "vocabulário de poker", "palavras de poker", "o que significa no poker"],
  content: `
Na primeira vez que sentei num jogo ao vivo, a mesa bem que podia estar falando outra língua. Um cara estava "under the gun", outro "deu three-bet no cutoff", o dealer perguntou se eu queria "run it twice" e, quando perdi com os reis, me disseram que "nem foi bad beat, foi só um [cooler](/pt/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")". Acenei com a cabeça como se tivesse entendido. Não entendi nada.

O pôquer tem um vocabulário próprio, e sabê-lo faz duas coisas: te impede de parecer um [fish](/pt/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp") e te deixa acompanhar de verdade a estratégia que dá dinheiro. Este glossário reúne os termos que realmente aparecem numa mesa de Texas Hold'em — agrupados por ==g:como você vai de fato esbarrar neles==, não jogados numa parede gigante de A a Z. Comece pelos termos que as pessoas mais confundem e depois navegue pela categoria que você precisar. Onde um termo tem um guia completo, você vai achar um link direto pra ele.

---

### O glossário, num relance

:::stripe
6 | Categorias, agrupadas por como você as encontra
80+ | Termos definidos em português simples
8 | Pares "mais confundidos", resolvidos primeiro
→ | Guias mais completos linkados a partir dos termos-chave
:::

---

## Os termos que as pessoas mais confundem

Se você só for esclarecer uma dúzia de termos, que sejam estes — são os que mais causam confusão (e os erros mais caros) na mesa:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| A galera confunde | A diferença |
|:---|:---|
| **Check vs Call** | Um check não arrisca **nenhuma ficha** (só quando não há aposta ativa); um call **iguala** uma aposta que já existe. |
| **Blind vs Ante** | Blinds são apostas forçadas **posicionais** (SB/BB); antes são pagos por **todo mundo** pra alimentar o pote. |
| **Set vs Trips** | Ambos são uma trinca — um **set** usa um par de bolso; **trips** usa uma carta da mão + um par no board. |
| **Cooler vs Bad Beat** | Um [cooler](/pt/blog/holdem-cooler) = você estava atrás e não tinha como largar; um [bad beat](/pt/blog/holdem-bad-beat) = você estava na frente e foi ultrapassado. |
| **Value bet vs Bluff** | Uma value bet quer um **call de mão pior**; um bluff quer que **mãos melhores desistam**. |
| **Pot odds vs Implied odds** | [Pot odds](/pt/blog/holdem-pot-odds) contam só as fichas que **já estão no pote agora**; implied odds somam o que você vai **ganhar depois**. |
| **VPIP vs PFR** | VPIP = com que frequência você **joga**; PFR = com que frequência você **aumenta**. PFR nunca pode passar o VPIP. |
| **A contagem do 3-bet** | Os blinds são a aposta 1, o open-raise é a aposta 2, então o **re-raise é o 3-bet** (não o primeiro aumento). |

</div>

---

![Um mapa visual das seis categorias de termos deste glossário — Ações de Aposta, Posições, Mãos, Tipos de Jogador, Dinheiro e Situações](/images/holdem-glossary-categories.webp "Os seis grupos em que este glossário está organizado — navegue pela situação em que você está, não só por ordem alfabética")

## Ações de aposta

Tudo o que você pode fazer fisicamente na sua vez. Se você é totalmente novato, comece pela [ordem das apostas](/pt/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|:---|:---|
| **Check** | Passar a vez sem apostar — só possível quando ninguém apostou nesta rodada. |
| **Bet** | Ser o primeiro a colocar fichas no pote numa rodada de apostas. |
| **Call** | Igualar a aposta atual pra continuar na mão (pagar). |
| **Raise** | Aumentar a aposta atual, forçando os outros a igualar mais ou largar. |
| **Fold** | Largar a mão e qualquer direito ao pote. |
| **All-in** | Colocar todas as suas fichas; você só pode ganhar a parte do pote que cobriu (veja [side pot](/pt/blog/holdem-all-in-rules)). |
| **Limp** | Entrar no pré-flop só pagando o big blind em vez de aumentar — em geral uma jogada fraca e passiva. |
| **Open (open-raise)** | Ser o primeiro jogador a entrar no pote com um aumento. |
| **3-bet** | O re-raise depois de um open (a terceira aposta, contando os blinds como a primeira). |
| **4-bet** | Um re-raise de um 3-bet. |
| **C-bet** | Uma "continuation bet" no flop feita por quem aumentou no pré-flop. |
| **Donk bet** | Liderar contra o agressor da street anterior estando fora de posição (já foi visto como erro, hoje é uma ferramenta de baixa frequência). |
| **Value bet** | Uma aposta com uma mão forte esperando ser paga por uma pior. |
| **Bluff / Semi-bluff** | Um bluff aposta uma mão fraca pra fazer as melhores largarem; um semi-bluff faz isso com um draw que ainda pode melhorar. |
| **Check-raise** | Dar check e depois aumentar depois que o oponente aposta — uma linha forte e enganosa (legal nas salas modernas). |
| **Min-raise** | O menor aumento legal. |
| **String bet** | Um movimento ilegal e não declarado de voltar pra buscar mais fichas; é julgado como call, não raise. |
| **Jam / Shove** | Ir de all-in. |
| **Snap call** | Um call instantâneo, sem hesitação. |
| **Hero call** | Pagar com uma mão fraca porque você leu que o oponente está blefando. |

</div>

---

## Posições

Onde você senta decide quando você age — e agir por último é uma vantagem permanente. Pra saber como usá-las de verdade, veja [jogo posicional](/pt/blog/holdem-position-play).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|:---|:---|
| **Button (BTN)** | A posição do dealer; age **por último** no pós-flop — o melhor lugar da mesa. |
| **Small blind (SB)** | Aposta forçada à esquerda do button; age primeiro no pós-flop (o pior lugar pós-flop). |
| **Big blind (BB)** | O maior dos dois blinds; os stakes recebem o nome dos tamanhos dos blinds ($1/$2), e um big blind é a unidade padrão pra medir stacks. |
| **UTG (under the gun)** | Primeiro a agir no pré-flop — precisa do range de abertura mais fechado. |
| **Cutoff (CO)** | À direita do button; o segundo melhor lugar, ótimo pra roubar blinds. |
| **Hijack (HJ)** | Dois lugares à direita do button; o começo da posição tardia. |
| **Lojack (LJ)** | À direita do hijack; posição tardia-média (os rótulos mudam com o tamanho da mesa). |
| **Early / Middle / Late** | Agrupamentos por quão cedo você age — early = mais fechado, late = mais aberto e mais lucrativo. |
| **In / Out of position** | Você está *in position* se age depois do oponente, *out of position* se age primeiro. |

</div>

Pra ver o mapa completo dos assentos, veja o [guia de posições na mesa](/pt/blog/holdem-positions "thumb:/images/holdem-button-position-hero.webp").

---

## Mãos e o board

![Infográfico de um botão de dealer dourado e duas hole cards viradas pra baixo com um flop K♦ 7♣ 2♠ no feltro verde](/images/holdem-button-dealer-board.webp "O board e suas hole cards se combinam na sua melhor mão de cinco cartas — a maior parte do vocabulário de pôquer descreve exatamente como")

As cartas em si, e o que você faz com elas. Novato no fluxo das streets? Comece pela [ordem do jogo](/pt/blog/holdem-game-order).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|:---|:---|
| **Hole cards** | Suas duas cartas privadas, viradas pra baixo. |
| **Community cards** | As cinco cartas compartilhadas, viradas pra cima, que todos usam. |
| **Flop / Turn / River** | As três primeiras cartas compartilhadas / a quarta / a quinta e última. |
| **The nuts** | A melhor mão possível dado o board atual (pode mudar nas streets seguintes). |
| **Kicker** | Uma carta de desempate entre mãos que de resto são iguais (veja [desempates](/pt/blog/holdem-tiebreak-rules)). |
| **Pocket pair** | Duas hole cards do mesmo valor (par de bolso). |
| **Overpair** | Um par de bolso maior que qualquer carta no board. |
| **Top pair** | Formar par entre a carta mais alta do board e uma hole card. |
| **Set** | Trinca usando um **par de bolso** + uma carta do board (bem disfarçada). |
| **Trips** | Trinca usando **uma hole card** + um par no board (controle de kicker pior). |
| **Two pair** | Dois pares diferentes. |
| **Made hand** | Uma mão já formada, em oposição a um draw. |
| **Draw** | Uma mão que precisa melhorar — ex.: um **flush draw** (4 pro flush) ou um straight draw. |
| **Gutshot** | Um straight draw por dentro precisando de um valor do meio (4 [outs](/pt/blog/holdem-outs)). |
| **Open-ender** | Um straight draw aberto dos dois lados, que fecha em qualquer ponta (8 outs). |
| **Backdoor** | Um draw que precisa de **duas** cartas seguidas (turn *e* river). |
| **Overcard** | Uma carta mais alta que o board. |
| **Suited connectors** | Duas cartas consecutivas do mesmo naipe (ex.: 8♥9♥). |
| **Broadway** | O straight 10-J-Q-K-A, o straight mais alto. |
| **The wheel** | O straight A-2-3-4-5, o straight **mais baixo** (o ás vale baixo). |
| **Cooler** | Uma mão grande que perde pra uma maior sem nenhum erro — [guia completo](/pt/blog/holdem-cooler). |
| **Bad beat** | Perder como grande favorito pra um draw de sorte — [guia completo](/pt/blog/holdem-bad-beat). |

</div>

Ainda aprendendo o que ganha de quê? O [guia de ranking de mãos](/pt/blog/holdem-hand-rankings) tem a ordem completa.

---

## Tipos de jogador e gírias

![Infográfico visto de cima de uma mesa de Texas Hold'em de pub com um board K♦ 7♣ 2♠ 9♥ 3♦, fichas e um botão de dealer](/images/holdem-pub-players-table.webp "Toda mesa é uma mistura de tipos — aprender as gírias te diz quem mirar e de quem fugir")

O zoológico de apelidos pras pessoas do outro lado do feltro. A análise completa está no [guia do fish](/pt/blog/holdem-fish).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|:---|:---|
| **Fish** | Um jogador recreativo fraco e perdedor — a fonte de lucro da mesa. |
| **Shark** | Um jogador forte e vencedor que ataca os mais fracos. |
| **Whale** | Um recreativo rico e fraco em stakes altas — um "fish com bolso fundo". |
| **Nit** | Um jogador extremamente fechado que só joga mãos premium. |
| **Donkey (donk)** | Um termo pejorativo pra um jogador ruim e sem habilidade. |
| **Calling station** | Um jogador passivo que paga demais e raramente larga ou aumenta. |
| **Reg** | Um "regular" — um jogador habitual, em geral competente, numa stake. |
| **Grinder** | Um jogador que lucra por volume constante e disciplina. |
| **LAG / TAG** | Loose-aggressive / tight-aggressive — dois estilos agressivos vencedores. |
| **Maniac** | Um jogador hiperagressivo que aumenta e blefa sem controle. |
| **Mark** | O jogador fraco de quem a mesa está tentando ganhar dinheiro. |

</div>

---

## Dinheiro e o jogo

Fichas, stakes e os dois formatos. A grande bifurcação é [cash game vs torneio](/pt/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|:---|:---|
| **Blinds** | As apostas forçadas SB/BB que iniciam a ação — também o nome dos níveis de stake ([blinds explicados](/pt/blog/holdem-blind-meaning)). |
| **Ante** | Uma pequena aposta forçada de todo mundo pra alimentar o pote, separada dos blinds. |
| **Pot** | O total de fichas em disputa (pote). |
| **Side pot** | Um pote separado criado quando um jogador está all-in e os outros continuam apostando. |
| **Stack** | As fichas na frente de um jogador. |
| **Bankroll** | O dinheiro reservado pro pôquer no geral — não as fichas na mesa. |
| **Buy-in** | O valor necessário pra entrar num jogo ou torneio. |
| **Rake** | A parte que a casa tira de cada pote — [guia completo](/pt/blog/holdem-rake). |
| **Rakeback** | Uma devolução que retorna parte do rake que você pagou. |
| **Straddle** | Um blind opcional (em geral 2× BB) que compra a última ação pré-flop — [guia completo](/pt/blog/holdem-straddle). |
| **Cash game** | Fichas de valor real, entra ou sai a qualquer hora, blinds fixos. |
| **Tournament** | Buy-in fixo, blinds subindo, joga até quebrar ou vencer. |
| **Freezeout** | Um torneio sem rebuys — quebrou, acabou. |
| **Bounty (knockout)** | Um torneio que paga um prêmio por cada jogador que você elimina. |
| **Sit & Go (SNG)** | Um torneio pequeno que começa assim que enche. |
| **MTT** | Um torneio multi-mesa que junta as mesas conforme os jogadores quebram. |
| **ICM** | O Independent Chip Model — converte fichas de torneio em equity de dinheiro real perto dos saltos de premiação. |
| **Bad beat jackpot** | Um prêmio promocional pago quando uma mão muito forte perde — [como funciona](/pt/blog/holdem-bad-beat). |

</div>

---

## Situações, estatísticas e etiqueta

As palavras pro que está acontecendo — e como se comportar enquanto acontece.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|:---|:---|
| **Showdown** | Revelar as mãos depois da última aposta pra decidir o vencedor ([regras do showdown](/pt/blog/holdem-showdown-rules)). |
| **Muck** | Descartar uma mão virada pra baixo. |
| **Chop / Split pot** | Dividir o pote quando as mãos empatam ([potes divididos](/pt/blog/holdem-split-pot-rules)). |
| **Slow roll** | Demorar de propósito pra mostrar uma mão vencedora só pra provocar — uma quebra séria de etiqueta. |
| **Tilt** | Jogo ruim movido pela emoção, geralmente depois de uma derrota. |
| **Tell** | Um sinal físico ou de comportamento que vaza informação sobre a mão. |
| **Pot odds** | A razão entre o pote e o custo de pagar — [como calcular](/pt/blog/holdem-pot-odds). |
| **Implied odds** | Pot odds ajustadas pelas fichas que você espera ganhar nas streets seguintes. |
| **Equity** | Sua fatia percentual do pote agora ([guia de probabilidade](/pt/blog/holdem-probability)). |
| **EV (valor esperado)** | O resultado médio de longo prazo de uma decisão; +EV ganha com o tempo. |
| **VPIP** | Com que frequência um jogador coloca dinheiro voluntariamente no pré-flop — a estatística de solto/fechado. |
| **PFR** | Com que frequência um jogador aumenta no pré-flop — a estatística de agressão (nunca maior que o VPIP). |
| **GTO** | Game Theory Optimal — uma estratégia equilibrada e inexplorável vinda dos solvers. |
| **Range** | O conjunto completo de mãos que um jogador pode ter num spot; os pros pensam em ranges, não em mãos únicas. |
| **Cold deck** | Uma distribuição azarada que produz um cooler (originalmente um baralho pré-arrumado de trapaceiro). |
| **"Don't tap the glass"** | Não critique jogadores fracos — você vai espantar aqueles de quem lucra. |
| **Run it twice** | Os jogadores all-in distribuem o resto do board duas vezes, cada uma valendo metade do pote, pra reduzir a variância. |

</div>

---

:::readnext[Continue lendo]
/pt/blog/holdem-cooler | Cooler vs Bad Beat, explicados | /images/holdem-cooler-hero.webp
/pt/blog/holdem-fish | O que é um fish no pôquer? | /images/holdem-fish-hero.webp
:::

## FAQ

**Q. Quais são os termos de pôquer mais comuns que todo iniciante deveria saber?**

A. O essencial são as ações de aposta (check, bet, call, raise, fold, all-in), as streets (flop, turn, river), as posições (button, small blind, big blind, UTG) e um punhado de termos de mão (the nuts, kicker, set, top pair). Aprenda os pares "mais confundidos" lá de cima — principalmente check vs call e set vs trips — e você vai acompanhar quase qualquer conversa de mesa.

**Q. O que significa UTG (under the gun) no pôquer?**

A. UTG é o assento imediatamente à esquerda do big blind, então esse jogador é o primeiro a agir antes do flop. Como todo mundo age depois dele com mais informação, UTG é a posição mais fechada — você deve abrir as poucas e mais fortes mãos de lá.

**Q. Qual é a diferença entre um check e um call?**

A. Um check passa a ação sem colocar nenhuma ficha, e só é permitido quando ninguém apostou ainda nesta rodada. Um call iguala uma aposta que alguém já fez. Dar check é de graça; pagar te custa o valor da aposta atual. Confundir os dois é o erro de iniciante mais comum que existe.

**Q. Qual é a diferença entre um set e trips?**

A. Ambos são uma trinca e valem exatamente o mesmo, mas são formados de jeitos diferentes. Um set é um par de bolso que acerta uma carta correspondente no board (você tem 7‑7, vem um 7). Trips é uma hole card que casa com um par já no board (você tem A‑7, e 7‑7 está no board). Um set é mais disfarçado e tem melhor controle de kicker, então em geral ganha mais dinheiro.

**Q. Qual é a diferença entre um cooler e um bad beat?**

A. Num bad beat você era o favorito quando o dinheiro entrou e foi ultrapassado por uma carta de sorte. Num cooler você esteve atrás o tempo todo com uma mão forte demais pra largar, e nenhuma carta de sorte foi necessária — a mão maior estava na frente desde o começo. Teste rápido: se o oponente precisou *melhorar* pra ganhar, é bad beat; se não, é cooler.

**Q. O que é um 3-bet no pôquer, e por que o primeiro aumento não é o "1-bet"?**

A. Um 3-bet é o primeiro re-raise antes do flop. A contagem inclui os blinds: o big blind é tratado como a primeira aposta, o aumento de abertura é a segunda aposta ("2-bet"), então o próximo aumento é o terceiro — o 3-bet. Um re-raise em cima disso é um 4-bet. Confunde os iniciantes porque o "primeiro aumento" já é a segunda aposta da sequência.

**Q. O que significa "the nuts" no pôquer?**

A. The nuts é a melhor mão possível dadas as cartas no board naquele momento. Se você tem the nuts, nenhuma outra mão pode te vencer agora — embora uma carta posterior possa mudar qual é the nuts. As "second nuts" são a segunda melhor mão possível.

**Q. O que significam VPIP e PFR nas estatísticas de pôquer?**

A. VPIP (Voluntarily Put money In Pot) é a porcentagem de mãos que um jogador escolhe jogar no pré-flop — uma medida de quão solto ou fechado ele é. PFR (Pre-Flop Raise) é a porcentagem em que ele aumenta no pré-flop — uma medida de agressão. O PFR nunca pode ser maior que o VPIP, e uma diferença grande entre os dois marca um jogador passivo e de muito call.

---

## Pra onde ir agora

Este glossário é o mapa; o aprendizado de verdade está nos guias pra onde ele leva. Alguns bons pontos de partida:

- **O básico absoluto:** [como jogar Texas Hold'em](/pt/blog/texas-holdem-rules-for-beginners) e a [ordem das apostas](/pt/blog/holdem-betting-actions).
- **Mãos:** [o que ganha de quê](/pt/blog/holdem-hand-rankings) e as [regras de desempate](/pt/blog/holdem-tiebreak-rules).
- **A matemática:** [pot odds](/pt/blog/holdem-pot-odds), [outs](/pt/blog/holdem-outs) e [probabilidade](/pt/blog/holdem-probability).
- **As gírias, a fundo:** [fish](/pt/blog/holdem-fish), [cooler](/pt/blog/holdem-cooler), [bad beat](/pt/blog/holdem-bad-beat), [straddle](/pt/blog/holdem-straddle) e [rake](/pt/blog/holdem-rake).

Salve esta página e volte sempre que uma palavra te travar. Fale a língua, e o jogo deixa de parecer algo que acontece *com* você — e passa a parecer algo que você faz *com* a mesa.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossário</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O que é um fish?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Os tipos de jogador, decifrados</div>
  </a>
  <a href="/pt/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossário</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cooler vs Bad Beat</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As duas derrotas que todo mundo confunde</div>
  </a>
  <a href="/pt/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Regras</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ações de aposta</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Check, bet, call, raise, fold</div>
  </a>
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O que ganha de quê</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A ordem completa de ranking das mãos</div>
  </a>
</div>
`.trim(),
};

export default POST;
