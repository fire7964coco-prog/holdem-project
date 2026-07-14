import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation bet (c-bet): quando disparar no flop, quanto apostar e quando dar check",
  seoTitle: "Por que 'c-bet em todo flop' sangra fichas — estratégia de c-bet",
  desc: "O que é uma c-bet, em quais flops apostar e em quais dar check, o sizing certo — pequeno em dry, grande em wet — e com que frequência disparar.",
  tldr: "Uma continuation bet (c-bet) é uma aposta no flop feita por quem deu raise no pré-flop. A regra moderna não é 'c-bet em todo flop' — é apostar pequeno e com frequência nos flops que favorecem o seu range (boards altos e dry como K-7-2) e dar check nos que favorecem o adversário (boards baixos e conectados como 7-6-5). Aposte pequeno — cerca de um terço do pote — em dry boards, grande — dois terços ou mais — nos wet, dê c-bet menos fora de posição e bem menos multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "15 min",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Um jogador de pôquer apostando fichas sobre um flop recém-distribuído depois de dar raise no pré-flop, o clássico momento da continuation bet no feltro verde",
  tags: ["continuation bet", "c-bet pôquer", "o que é c-bet", "sizing de c-bet", "frequência de c-bet", "quando dar c-bet", "quando não dar c-bet", "c-bet fora de posição", "c-bet multiway", "delayed c-bet"],
  content: `
Nos meus primeiros dois anos, "c-bet" era o único plano de flop que eu tinha. Eu tinha dado raise no pré-flop, então apostava no flop. Toda vez. Board com ás, eu apostava. Board cheio de sequências e flushes que claramente acertavam em cheio o cara que me pagou? Eu apostava mesmo assim — e levava aumento, pagamento e check-raise, perdendo pote atrás de pote. Eu achava que dar c-bet *era* a estratégia. Acontece que a c-bet é um bisturi, e eu a manejava como um martelo.

Uma **continuation bet (c-bet)**, ou aposta de continuidade, é uma aposta no flop feita por quem deu raise antes dele. É a aposta mais comum do pôquer — e a mais mal usada. O conselho antigo era "dê c-bet em quase todo flop". A estratégia moderna, checada em solver, diz algo mais útil e mais lucrativo: ==aposte nos flops que favorecem o *seu* range e dê check nos que favorecem o range do adversário.== Este é o playbook completo de c-bet — quais flops, com que frequência, quanto, dentro e fora de posição, multiway, e quando dar check é a jogada vencedora. É a metade de flop de uma [estratégia de Texas Hold'em](/pt/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") vencedora.

---

### A c-bet em números

:::stripe
~2 em 3 | A frequência com que uma mão erra o flop
⅓ do pote | O tamanho pequeno de "range bet" em dry boards
55–70% | Uma taxa geral saudável de c-bet no flop
Check | Muitas vezes a melhor jogada, não fraqueza
:::

---

## O que é uma continuation bet (c-bet)?

**Uma continuation bet é uma aposta feita no flop por quem foi o agressor antes do flop** — a última pessoa a dar raise. Você "continua" contando a história de força que começou no pré-flop. E o ponto crucial: ==você não precisa ter acertado o flop para dar c-bet==; boa parte das boas c-bets é feita com mãos que erraram completamente.

O motivo de funcionar é uma estatística simples: **uma mão erra o flop — não faz nem um par nem nada melhor — cerca de dois terços das vezes.** Então, quando você aposta, o seu adversário também costuma não ter nada e dá fold. Você não está apostando porque está forte; está apostando porque *ele provavelmente está fraco* e você foi quem tomou a liderança.

Depois que você domina a c-bet no flop, o resto da escada de "barreling" vem naturalmente:

- **Delayed c-bet** — você dá *check* no flop e aposta no turn. Ótima para potes em que o flop favoreceu o adversário, mas o turn muda as coisas.
- **Double barrel** — você dá c-bet no flop e aposta *de novo* no turn.
- **Triple barrel** — você aposta nas três ruas: flop, turn e river. A linha mais agressiva, para valor forte ou um bluff bem escolhido com blockers.

Se as [ações de aposta](/pt/blog/holdem-betting-actions) básicas de check, bet e raise ainda parecem confusas, comece por aí. Caso contrário, vamos corrigir o erro que quase todo mundo comete.

---

## O conselho antigo de "c-bet em todo flop" está errado — o que mudou

Se você aprendeu pôquer antes dos solvers, ensinaram você a dar c-bet de cerca de dois terços do pote na *maioria* dos flops. Funcionou por um tempo porque os adversários davam fold demais. Aí todo mundo aprendeu a revidar — flotando, dando check-raise e pagando até o fim — e a c-bet indiscriminada virou um vazamento.

Aqui está o ponto crucial que a estratégia moderna realmente diz, porque é fácil entender errado: **NÃO é "c-bet menos em todo lugar".** É uma *divisão*:

- Em boards que favorecem você, aposte **pequeno e até com mais frequência** do que o conselho antigo — às vezes o seu range inteiro.
- Em boards que favorecem o adversário, **dê check bem mais** — e aposte maior e de forma mais seletiva quando apostar.

O conceito por baixo disso é o ==range advantage==: de quem é o range geral mais forte nesse flop específico. Como quem deu raise no pré-flop, você tem mais cartas altas e overpairs, então **boards altos e dry pertencem a você** — e boards cheios de cartas médias conectadas pertencem a quem pagou. Domine essa única ideia e você já está à frente de todo jogador do tipo "só dar c-bet" na mesa.

---

## Em quais flops dar c-bet: é tudo sobre a textura do board

![Um flop dry e desconectado J-7-2 rainbow no feltro verde com uma pequena pilha de fichas apostada à frente, o tipo de board de cartas altas que pertence a quem deu raise no pré-flop](/images/holdem-cbet-dry-board.webp "Flops altos, dry e desconectados como este J-7-2 favorecem quem deu raise no pré-flop — os clássicos boards de c-bet pequena e de alta frequência")

Este é o coração da c-bet. Antes de pensar em sizing ou frequência, faça uma pergunta: **este flop acertou o meu range ou o do meu adversário?** Aqui está o mapa:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo de flop | Exemplo | Quem favorece | Em posição | Por quê |
|:---|:---|:---|:---|:---|
| **Alto, dry, desconectado** | K‑7‑2, A‑8‑3 | **Você (raiser)** | Aposte **com frequência & pequeno** (⅓) | Você tem mais top pairs & overpairs; ele errou |
| **Baixo, conectado** | 7‑6‑5, 9‑8‑6 | **Quem pagou** | **Dê check mais**; aposte grande & seletivo quando apostar | Acerta os suited connectors e pares pequenos dele |
| **Paired baixo** | 8‑8‑3, 5‑5‑2 | **Você (levemente)** | Aposte **com frequência & pequeno** | Nenhum tem trinca com frequência; suas overcards/overpairs lideram |
| **Monotone** | K♠9♠4♠ | Misto — cautela | Aposte **menos, menor** | Um flush feito limita os dois ranges; vá barato |
| **Two-tone & wet** | Q♥J♥7♣ | Tende ao caller | **Polarize:** grande com valor/draws, check com nada | Montes de draws — cobre deles ou saia |

</div>

Duas ideias relacionadas fazem todo o trabalho aqui:
- **O range advantage decide com que *frequência* você aposta.** Mais do seu range está forte neste board → aposte com mais frequência.
- **O nut advantage decide o *tamanho* da sua aposta.** Você tem mais das melhores mãos absolutas (sets, sequências) → aposte maior.

A parte sutil: dá para ter um sem o outro. Num A‑8‑3 você tem muito mais top pairs (range advantage), mas quase ninguém tem um set, então você **aposta com frequência, mas pequeno**. Num board em que você tem muito mais sets e overpairs, você **aposta grande**. Acerte essas duas alavancas e o sizing de c-bet deixa de ser um chute.

---

## Com que frequência você deve dar c-bet? (Frequência)

Não existe uma única porcentagem "correta" de c-bet — quem te dá um número só está te vendendo um vazamento. A frequência varia com a posição, o board e quantos jogadores estão no pote. Aqui está a referência rápida:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situação | Frequência aproximada de c-bet | Nota |
|:---|:---:|:---|
| **Em posição, heads-up, dry board** | **70–100%** (pequeno) | Clássica "range bet" — aposte quase tudo, minúsculo |
| **Em posição, heads-up, wet board** | **~50–60%** | Mais polarizado — valor e draws apostam, nada dá check |
| **Fora de posição, heads-up** | **~40–50%** | Dê check bem mais para proteger o seu checking range |
| **Multiway (2 adversários)** | **~50% ou menos** | Alguém provavelmente conectou — aperte |
| **Multiway (3+ adversários)** | **Só mãos fortes & bons draws** | O fold equity basicamente sumiu |

</div>

Como um check de saúde, a taxa geral de c-bet no flop de um bom jogador fica em algum lugar em torno de **55–70%** em todos os boards. Se você está dando c-bet em mais de ~85% dos flops, está no piloto automático e os bons jogadores vão te punir; abaixo de ~40%, você é honesto demais, só apostando quando acerta. Mas lembre — esse número é um *agregado*, não um alvo. Você chega lá apostando nos boards certos, não batendo uma cota.

---

## Quanto você deve apostar na c-bet? (Sizing)

O sizing segue direto da textura do board. Duas marchas cobrem quase tudo:

- **Pequeno — cerca de um terço do pote** — em boards dry, estáticos, de range advantage, especialmente em posição. O range do seu adversário é fraco e não vai melhorar muito, então você não precisa cobrar dos draws; uma aposta pequena já coloca todo o nada dele numa situação difícil enquanto mantém mãos piores dentro para te pagar. Uma aposta maior aqui só faz dar fold as mãos que você *quer* que paguem.
- **Grande — dois terços do pote ou mais** — em boards wet, dinâmicos e sempre que o seu range estiver polarizado. Agora você precisa cobrar dos flushes e projetos de sequência (negar o equity deles) e construir o pote com as suas mãos fortes. Uma aposta pequena deixa os draws pagarem barato demais.

Vamos aos números reais. Digamos que o pote seja de ==$30== no flop:

- Uma c-bet de **um terço do pote** é ==$10== — a sua range bet de dry board.
- Uma c-bet de **dois terços do pote** é ==$20== — o seu tamanho de wet board, para cobrar dos draws.

Em **torneios**, incline-se um pouco menor — muitas vezes **meio pote ou menos** — porque o seu stack é precioso e você não pode recarregar. Seja qual for a escolha, amarre o tamanho ao board, não ao hábito.

---

## Dando c-bet fora de posição

![Um jogador de pôquer agindo primeiro fora de posição, dedos no feltro ao lado das fichas com um adversário esperando nas sombras atrás](/images/holdem-cbet-oop.webp "Fora de posição você age primeiro sem informação, então dá check bem mais e dá c-bet com um range mais apertado e forte")

Dar c-bet é bem mais difícil **fora de posição** — quando você tem que agir primeiro em toda rua sem saber o que o adversário vai fazer. Dois ajustes:

1. **Dê c-bet com menos frequência.** Sem posição, você não consegue controlar tão bem o pote nem realizar o seu equity, então dá check bem mais — até mãos que seriam apostas automáticas em posição. Em alguns bons boards, um solver dá c-bet fora de posição só um quarto das vezes.
2. **Construa um checking range de verdade.** Se você só aposta quando está forte e dá check quando está fraco, um adversário observador te lê como um livro aberto e ataca todo check. Então você deliberadamente dá check em *algumas* mãos fortes também, o que mantém os seus checks perigosos e o seu jogo inteiro mais difícil de enfrentar. É exatamente por isso que a [posição](/pt/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") é uma vantagem estrutural tão grande — as c-bets simplesmente funcionam melhor quando você age por último.

---

## Dando c-bet em potes multiway

A maior armadilha de c-bet é **disparar contra vários adversários como se fosse heads-up.** Cada jogador extra no pote reduz a chance de que todos tenham errado — então o seu fold equity, o motor inteiro de uma c-bet de bluff, entra em colapso.

A regra multiway é simples: **aposte suas mãos feitas fortes e seus melhores draws por valor e proteção, e dê check em quase todo o resto.** Contra dois jogadores você já está apertando bem além do seu range de heads-up; contra três ou mais, uma c-bet de bluff puro é só queimar fichas, porque quase sempre alguém tem um pedaço. Range betting — apostar o seu range inteiro pequeno — é uma ideia de *heads-up* e não se transfere para potes multiway. Na dúvida, com uma mão marginal e dois ou mais adversários, dê check.

---

## A delayed c-bet

Dar check no flop não é o fim da mão. Uma **delayed c-bet** — dar check no flop como quem deu raise no pré-flop e depois apostar no turn — é uma das jogadas mais subutilizadas do pôquer. Ela brilha quando:

- O **flop favoreceu o seu adversário** (um board baixo e conectado), então apostar era ruim — mas o **turn muda o cenário** (uma overcard, ou uma carta que sobe o seu equity).
- Você **deu check back com uma mão decente** em posição e quer apostar uma rua de valor agora que o board está mais seguro.
- Você quer **pegar floats**: jogadores que planejavam dar bluff-raise na sua c-bet do flop não têm aposta nenhuma para atacar e aí enfrentam a sua aposta no turn.

Atrasar transforma uma situação em que uma c-bet automática teria sangrado fichas numa aposta controlada e informada uma rua depois.

---

## Quando NÃO dar c-bet (o check é uma arma, não uma bandeira branca)

Vamos deixar o "não" explícito, porque é onde o dinheiro é economizado:

- **O board acertou em cheio o range do seu adversário.** Um flop 7‑6‑5 ou 9‑8‑7 acerta as mãos que pagam um raise muito mais forte do que acerta as suas. Apostar aqui é só doar fichas — dê check.
- **Você está fora de posição num board dinâmico** com uma mão marginal. Agindo primeiro sem informação, mantenha o pote pequeno e dê check.
- **Você está multiway com nada.** Coberto acima — sem fold equity, sem aposta.
- **Sua mão quer proteger um checking range.** Às vezes você dá check numa mão forte de propósito para que os seus checks não sejam automaticamente fracos.

A mudança de mentalidade que te torna vencedor: **dar check não é render-se.** Bons jogadores dão check *muito*, de propósito, e isso torna as apostas deles bem mais assustadoras quando aparecem. Se você se sente obrigado a apostar só porque deu raise no pré-flop, esse reflexo está te custando dinheiro.

---

## Uma mão de c-bet real, do início ao fim

Duas situações da mesma sessão mostram os dois lados da decisão.

**Situação 1 — uma c-bet de manual.** Eu dou raise com ==A♣K♦== e o big blind paga. Flop: ==K♠ 7♦ 2♣.== É um board alto, dry e desconectado que pertence ao meu range — e eu flopei **top pair, top kicker**: meu K♦ pareia o K♠, com o ás como o melhor kicker possível (melhores cinco = K♦ K♠ A♣ 7♦ 2♣). Aposto **um terço do pote** como range bet: cobra de todas as mãos que ele errou e mantém reis piores e pares dentro. C-bet fácil e lucrativa.

**Situação 2 — um check de manual.** Mesma sessão, eu dou raise com ==A♥Q♥== e o big blind paga. Flop: ==7♠ 6♠ 5♦.== Este board esmaga exatamente as mãos com que ele pagou — suited connectors, pares pequenos e sequências — enquanto eu tenho só ás-alto sem par e sem draw (nenhuma copas no board, então nem um backdoor flush). Dois anos antes eu teria "continuado" por hábito e levado aumento. Agora eu **dou check e desisto.** Se vier um turn seguro e eu pegar equity, uma delayed c-bet está disponível; se não, perdi o mínimo.

Mesmo raise no pré-flop, flops opostos, jogadas corretas opostas. Essa é a lição inteira: **o board decide, não o fato de você ter dado raise.**

---

## Os 7 erros mais comuns de c-bet

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| O erro | Por que te custa | A correção |
|:---|:---|:---|
| **Dar c-bet em todo flop no piloto automático** | Ignora que muitos boards favorecem quem pagou | Leia a textura primeiro |
| **Apostar grande com um range amplo** | Ranges amplos querem sizing pequeno, não grande | Pequeno no dry, grande só quando polarizado |
| **Dar c-bet leve multiway** | O fold equity entra em colapso com mais jogadores | Só valor & draws contra 2+ |
| **Dar c-bet fora de posição com frequência demais** | Você não consegue realizar equity agindo primeiro | Dê check mais, construa um checking range |
| **Apostar num board que acertou eles** | 7‑6‑5 esmaga o range deles, não o seu | Dê check e desista |
| **Barreling "uma e pronto"** | C-bet no flop e sempre desistir no turn = fácil de flotar | Tenha um plano de turn antes de disparar |
| **Triple-barrel sem equity** | Blefar um stack inteiro sem outs ou blockers | Blefe com equity de reserva ou bons blockers |

</div>

Todos eles voltam à mesma raiz: **dar c-bet no piloto automático em vez de ler o board.** Corrija isso e o seu jogo de flop sobe um nível.

---

:::readnext[Continue lendo]
/pt/blog/holdem-strategy | As 5 decisões por trás do pôquer vencedor | /images/holdem-strategy-hero.webp
/pt/blog/holdem-3bet | Como dar 3-bet (e enfrentar um) | /images/holdem-3bet-hero.webp
:::

## FAQ

**Q. O que é uma continuation bet no pôquer?**

A. Uma continuation bet, ou c-bet, é uma aposta feita no flop por quem deu raise antes do flop. Você está "continuando" a representar a força que mostrou no pré-flop. Você não precisa ter acertado o flop para dar c-bet — como uma mão erra o flop cerca de dois terços das vezes, uma c-bet bem escolhida costuma ganhar o pote quando o seu adversário não tem nada.

**Q. Por que se chama continuation bet?**

A. Porque você está continuando a agressão que começou antes do flop. Você deu raise no pré-flop para tomar a liderança, e a aposta no flop continua essa história na rua seguinte. Se outra pessoa tivesse dado raise no pré-flop, a sua aposta no flop não seria uma c-bet — o termo significa especificamente quem deu raise no pré-flop apostando no flop.

**Q. Você deve dar c-bet em todo flop?**

A. Não — este é o erro de c-bet mais comum. Aposte nos flops que favorecem o seu range (boards altos e dry como K-7-2, onde você tem mais top pairs e overpairs) e dê check nos que favorecem o seu adversário (boards baixos e conectados como 7-6-5 que acertam as mãos com que ele pagou). Dar c-bet em todo flop no piloto automático é punido pelos bons jogadores.

**Q. Com que frequência você deve dar c-bet?**

A. Depende da posição, do board e do número de adversários, então trate isso como faixas, não regras: cerca de 70–100% (num tamanho pequeno) em posição heads-up num dry board, em torno de 40–50% fora de posição, e 50% ou menos multiway. Uma taxa geral saudável de c-bet no flop é cerca de 55–70% — acima de 85% significa que você está no piloto automático.

**Q. Quanto você deve apostar na c-bet?**

A. Ajuste o tamanho ao board. Em boards dry e estáticos, aposte pequeno — cerca de um terço do pote — porque o range do seu adversário é fraco e você não precisa cobrar dos draws. Em boards wet e dinâmicos, aposte grande — dois terços do pote ou mais — para cobrar dos flushes e projetos de sequência e construir o pote com as suas mãos fortes. Em torneios, incline-se menor, muitas vezes meio pote ou menos.

**Q. Você deve dar c-bet fora de posição?**

A. Com menos frequência do que em posição. Agindo primeiro em toda rua sem informação, você não consegue realizar o seu equity tão bem, então dá check bem mais — até algumas mãos que você apostaria automaticamente em posição — e deliberadamente mantém algumas mãos fortes no seu checking range para que os seus checks não sejam automaticamente fracos. A posição faz as c-bets funcionarem melhor, ponto final.

**Q. Você deve dar c-bet num pote multiway?**

A. Bem menos do que heads-up. Cada adversário extra torna mais provável que alguém tenha conectado, então o seu fold equity entra em colapso. Contra dois ou mais jogadores, aposte suas mãos feitas fortes e melhores draws por valor e proteção, e dê check em quase todo o resto. Apostar bluffs contra três ou mais jogadores é um clássico perde-dinheiro.

**Q. O que é uma delayed c-bet?**

A. Uma delayed c-bet é quando quem deu raise no pré-flop dá check no flop e depois aposta no turn. É útil quando o flop favoreceu o seu adversário (então apostar era ruim) mas o turn melhora o seu equity, quando você deu check back com uma mão decente em posição, ou para pegar adversários que planejavam dar bluff-raise na sua aposta do flop. É uma das jogadas lucrativas mais subutilizadas do pôquer.

**Q. Quando você NÃO deve dar c-bet?**

A. Não dê c-bet quando o board esmagou o range do seu adversário (boards baixos conectados), quando você está fora de posição com uma mão marginal num board dinâmico, quando você está multiway com nada, ou quando a sua mão prefere proteger um checking range. Dar check nessas situações não é fraqueza — economiza fichas e torna as suas apostas futuras mais críveis.

**Q. Uma c-bet é um bluff?**

A. Às vezes sim, às vezes não — esse é o ponto. Muitas c-bets são semi-bluffs ou bluffs puros com mãos que erraram, apostando porque o seu adversário provavelmente também errou. Outras são apostas de valor com mãos fortes. Uma estratégia equilibrada de c-bet mistura as duas nos mesmos boards, para que os adversários não consigam dizer se a sua aposta no flop significa força ou nada.

**Q. Qual é uma boa porcentagem de c-bet num HUD de pôquer?**

A. Em torno de 55–70% para a c-bet no flop é uma faixa saudável e equilibrada. Acima de cerca de 85% sinaliza alguém que dá c-bet demais e pode ser explorado com float e raise; abaixo de cerca de 40% sinaliza um jogador que só aposta quando está forte, então você pode dar fold com confiança contra as c-bets dele e disparar quando ele dá check. Trate isso como um check de saúde, não como um alvo.

---

## O playbook de c-bet, em resumo

1. **Uma c-bet é uma aposta no flop de quem deu raise no pré-flop** — e funciona porque as mãos erram o flop cerca de dois terços das vezes.
2. **O board decide.** Aposte em boards altos e dry que favorecem o seu range; dê check em boards baixos e conectados que favorecem o do seu adversário.
3. **O range advantage define a frequência; o nut advantage define o tamanho.** Aposte com frequência em boards que você domina; aposte grande só quando tiver mais das nuts.
4. **Pequeno (⅓) no dry, grande (⅔+) no wet.** Dê c-bet menos fora de posição e bem menos multiway.
5. **O check é uma arma.** Os melhores jogadores dão check com frequência e de propósito — a c-bet é um bisturi, não um martelo.

Acerte isso e você para de torrar potes em boards que nunca foram seus para apostar. Junte uma c-bet afiada com um bom [jogo de 3-bet](/pt/blog/holdem-3bet), consciência real de [posição](/pt/blog/holdem-position-play) e o [framework completo de estratégia](/pt/blog/holdem-strategy), e o seu jogo de flop deixa silenciosamente a turma do "aposta em todo flop" para trás.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O framework das 5 decisões</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Onde a c-bet se encaixa num jogo vencedor</div>
  </a>
  <a href="/pt/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-Bet explicado</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A c-bet também começa em potes de 3-bet</div>
  </a>
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Jogando a sua posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que as c-bets funcionam melhor em posição</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que uma c-bet grande cobra dos draws</div>
  </a>
</div>
`.trim(),
};

export default POST;
