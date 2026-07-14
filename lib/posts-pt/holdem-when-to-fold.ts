import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-when-to-fold",
  title: "Quando foldar no pôquer: a habilidade que mais vence em silêncio",
  seoTitle: "Por que você não larga uma boa mão — quando foldar no pôquer",
  desc: "Foldar é a habilidade vencedora mais subestimada. Quando foldar no pré-flop e em cada street, o limite das pot odds e como largar uma mão grande.",
  tldr: "Foldar é a habilidade mais subestimada do pôquer — o pior resultado de um fold é zero, enquanto um call perdedor sangra fichas toda vez. Um bom jogador folda cerca de 75–85% das mãos antes do flop, larga mãos que erraram e projetos fracos que não batem suas pot odds depois dele e — o mais difícil de tudo — abre mão de mãos fortes mas derrotadas quando a linha de um adversário passivo grita valor. A maioria não paga demais porque não sabe ler mãos; paga porque as fichas que já estão no pote parecem suas. Não são.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🛡️",
  image: "/images/holdem-when-to-fold-hero.webp",
  imageAlt: "Um jogador de pôquer deslizando as cartas viradas para baixo em direção ao muck sob as luzes da mesa, escolhendo foldar em vez de pagar uma aposta",
  tags: ["quando foldar no poker", "quando foldar no pre-flop", "quando foldar uma boa mão", "disciplina de fold", "sunk cost poker", "largar uma mão grande", "foldar para raise no river", "fold por pot odds"],
  content: `
A mão mais cara do meu primeiro ano não foi uma que perdi — foi uma que me recusei a perder. Flopei top two pair, um velhinho passivo me deu raise num river que pareou, e todos os alarmes gritavam *ele tem um full house.* Paguei mesmo assim. Falei pra mim mesmo que "não dava pra foldar depois de botar tanto ali". Ele virou o boat, e dirigi pra casa reprisando o exato momento em que eu sabia e paguei do mesmo jeito. Naquela noite aprendi a verdade que todo jogador vencedor acaba aceitando: ==o fold é a jogada mais poderosa do pôquer, e a mais difícil de fazer.==

**Foldar — jogar sua mão no muck em vez de pagar ou aumentar — é de longe a habilidade mais subestimada do jogo.** Não tem melhor momento em vídeo nem pico de dopamina, mas o pior resultado possível de um fold é exatamente *zero*, enquanto um call ruim perde dinheiro toda vez. Este é o guia completo de *quando foldar*: antes do flop, em cada street depois dele, a matemática exata que decide os spots apertados, como largar uma mão genuinamente boa e como vencer a psicologia que faz foldar parecer impossível. É a disciplina que ancora uma [estratégia de Texas Hold'em](/pt/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") vencedora.

---

### Por que foldar vence

:::stripe
75–85% | Mãos que um bom jogador folda antes do flop
0 | O máximo que um fold pode te custar (daqui pra frente)
25% | Equity que você precisa para pagar uma aposta de meio pote
Matemática > medo | O único motivo para foldar, ou não
:::

---

## O que foldar realmente é (e por que é a habilidade mais subestimada)

Em toda mão você tem três opções: apostar/aumentar, pagar ou foldar. Foldar significa entregar o pote e não arriscar mais nenhuma ficha. Jogadores novos encaram isso como perder. Os vencedores encaram como ==recusar-se a perder mais.==

Aqui está a ideia que reformula tudo: **o valor esperado de um fold, daquela decisão em diante, é zero.** Quando você está genuinamente derrotado, toda outra opção é *negativa* — pagar te custa o call, aumentar te custa mais. Zero vence negativo. Foldar não ganha o pote, mas ganha o jogo de longo prazo ao não doar fichas em spots nos quais você está atrás.

Uma ressalva precisa, porque importa: foldar *não é de graça.* As fichas que já estão no pote se foram no instante em que você as colocou ali — foldar só te impede de jogar *dinheiro bom atrás de dinheiro ruim.* Essa distinção é toda a psicologia do fold, e vamos voltar a ela. Primeiro, a mecânica.

---

## Quando foldar antes do flop

O maior vazamento do pôquer é jogar mãos demais, então a maior correção individual é foldar a maioria delas. **Um bom jogador tight-aggressive folda cerca de 75–85% das mãos no pré-flop** — mais perto de 75–80% em jogos 6-max e 80–86% em full-ring. Se isso soa extremo, lembre: as mãos que você mantém são, em média, mais fortes que as dos adversários, e é daí que vem sua vantagem.

Folde no pré-flop quando:

- **Sua mão é simplesmente fraca ou lixo** — cartas offsuit desconectadas (J‑4, Q‑7, K‑3), ases fracos (A‑7 offsuit e abaixo em posições iniciais) e a maioria das mãos offsuit de "uma carta grande". Se não está na sua [tabela de starting hands](/pt/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") para aquela posição, jogue no muck.
- **Você está em posição inicial** — vai agir primeiro em cada street, então precisa de uma mão mais forte para entrar. K‑J offsuit é fold no under the gun e raise no button.
- **Você está dominado.** A‑9 offsuit contra um raise apertado de posição inicial costuma estar batido pelo A‑T, A‑J, A‑Q, A‑K dele — mesmo ás, kicker pior. A dominação é o assassino silencioso; folde em vez de ser superado no kicker.
- **Você enfrenta um [3-bet](/pt/blog/holdem-3bet) com a parte mais fraca do seu range.** Você abriu largo, então a maior parte desse range folda para um re-raise — continue com suas melhores mãos e deixe o resto ir. Contra um **4-bet** grande, folde seus pares pequenos e suas mãos suited especulativas; suas implied odds desabaram.

A única mão que você essencialmente *nunca* folda no pré-flop num cash game é o par de ases — é favorita sobre qualquer outra mão. (As raras exceções vivem em spots de bolha de torneio e satélite, onde a sobrevivência pode pesar mais que uma vantagem minúscula. Num cash game: nunca.)

---

## Quando foldar depois do flop — street por street

Foldar no pós-flop é onde o dinheiro de verdade é economizado, e cada street faz uma pergunta diferente.

![Uma mesa completa de cinco cartas no feltro verde ao lado de uma grande pilha de fichas enquanto um jogador segura duas cartas viradas para baixo, avaliando se folda numa street posterior](/images/holdem-fold-board.webp "Cada street muda a pergunta: no flop você pergunta se conectou, no river você pergunta apenas se consegue vencer uma aposta de valor")

**Flop — "Essa mesa me ajudou, ou ajudou eles?"** Quando você erra e enfrenta uma aposta numa mesa que encaixa no range do adversário, deixe ir. Ás-alto sem projeto numa mesa coordenada não vale um call "pra ver o turn". Folde projetos fracos também — um gutshot sem outra equity e com um preço ruim é fold, não perseguição.

**Turn — a street da desistência.** Este é o fold mais importante do pôquer e o que os jogadores pulam. No turn, os ranges polarizam para "muito forte ou estourado", e os tamanhos das apostas incham. Seu float do flop que não melhorou, seu second pair que agora enfrenta um segundo barrel, seu projeto que acabou de errar com uma carta restante e um preço ruim — estes são turns para largar, não para se convencer de mais um call. Se você estava "flutuando o flop pra blefar o turn" e o turn não te deu um motivo, desista.

**River — puro bluff-catching.** Você não está mais projetando pra nada; a única pergunta é *"minha mão vence as mãos que eles apostariam por valor aqui?"* Se um jogador passivo dispara grande numa mesa assustadora, a resposta honesta costuma ser não. Folde as mãos que só vencem um blefe quando seu adversário raramente blefa. O que nos leva à matemática.

---

## A matemática do fold: o limite das pot odds

Calls apertados não são um sentimento — são uma fração. Para pagar uma aposta com lucro, sua chance de vencer precisa superar o preço que estão te oferecendo. Memorize esta tabela e metade dos seus spots difíceis se resolvem sozinhos:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tamanho da aposta (no pote) | Pot odds que você recebe | Equity para pagar | Folde se tiver menos |
|:---|:---:|:---:|:---:|
| **Meio pote** | 3 : 1 | **25%** | abaixo de 25% |
| **Dois terços do pote** | 2,5 : 1 | **~29%** | abaixo de 29% |
| **Pote inteiro** | 2 : 1 | **~33%** | abaixo de 33% |
| **Overbet (1,5× o pote)** | ~1,7 : 1 | **~37,5%** | abaixo de 37,5% |

</div>

Agora coloque em prática. Digamos que você tem um flush draw — nove cartas o completam — com uma carta por vir. Nove outs entre as 46 cartas não vistas é ==9 ÷ 46 ≈ 19,6%==, ou cerca de **4 para 1 contra** fechar. (Atalho rápido: a [regra do 2](/pt/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") — outs × 2 ≈ sua porcentagem para uma carta, então 9 × 2 ≈ 18%.)

- **O pote é $100 e seu adversário aposta $50 no turn.** Você paga $50 para ganhar $150 — isso é 3 para 1, então você precisa de **25%** de equity. Seu projeto é só ~19,6%. ==r:Fold.== O preço está errado.
- **Mesmo projeto, mas ele aposta só $25 num pote de $100.** Agora você paga $25 para ganhar $125 — 5 para 1, precisando de só **16,7%**. Seus ~19,6% superam com folga. ==g:Pague.==

Mesma mão, decisões opostas — porque o *preço* mudou, não as cartas. Isso são as pot odds, e é a diferença entre perseguir e pagar. (As implied odds — dinheiro que você vai ganhar *depois*, quando fechar — podem justificar alguns calls mais finos, mas nunca as assuma contra um short stack ou uma mesa que mata sua ação.)

---

## O fold mais difícil: largar uma boa mão

Foldar lixo é fácil. Foldar uma *boa* mão — top pair, um overpair, até um set — é o que separa os jogadores vencedores do resto. A armadilha mental é pensar "essa é uma mão forte", quando a única pergunta que importa é "ela é forte *agora, contra essa linha*?"

**Top pair não é o topo do seu range.** Num pote com raise ou re-raise, top pair e overpairs são mãos de força média. Contra agressão pesada de várias streets — especialmente um raise num river assustador — elas costumam estar batidas, e a disciplina de largá-las é uma **boa laydown**, não fraqueza. Aqui estão as mãos com que os jogadores se casam quando deveriam estar pedindo o divórcio:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão à qual você se agarra | A armadilha | Por que você deveria foldar |
|:---|:---|:---|
| **Top pair, kicker fraco** | Enfrentando apostas grandes no turn + river | Você vence blefes e pares piores — mas o value range deles te supera no kicker |
| **Overpair (JJ/QQ)** | Um jogador passivo dá raise numa mesa coordenada | Passivos dão raise nos nuts, não em ar — você está projetando fino |
| **Top pair top kicker** | A mesa fecha quatro para flush ou sequência | Seu único par não vence o flush/sequência que ele representa |
| **Um set** | Mesa monotone ou de quatro em sequência, raise grande | Set-over-set é um cooler, mas o flush fechado não é — leia a textura |
| **Second pair** | Pagando três streets "pra mantê-lo honesto" | Você está pagando valor três vezes pra pegar um blefe |

</div>

A imagem espelhada também importa, porque **foldar pode ser um vazamento por si só.** Uma *boa* laydown larga uma mão batida contra uma linha que faz sentido. Uma *má* laydown folda a melhor mão para uma carta assustadora por medo — e se você faz isso com frequência, adversários pensantes vão te blefar sem parar. O objetivo não é foldar mais ou foldar menos; é foldar *quando a evidência está lá.*

---

## A psicologia do fold: sunk cost, ego e medo

Aqui está o segredo que as tabelas de estratégia não te contam: **a maioria dos calls ruins não são erros de leitura — são erros emocionais.** Três culpados fazem o estrago.

![Um jogador de pôquer em pensamento profundo com a mão no queixo, agonizando sobre pagar ou foldar, fichas e cartas viradas para baixo em primeiro plano](/images/holdem-fold-psychology.webp "Os folds mais difíceis são perdidos para a emoção, não para a matemática — a vontade de 'ver', de estar certo e de não largar fichas que já parecem suas")

**Sunk cost — "Eu já botei tanto ali."** Este é o grande. As fichas que você apostou antes *não são mais suas* — pertencem ao pote. Toda decisão é independente, julgada apenas pelo que acontece *daqui pra frente.* "Estou pot-committed porque investi tanto" é a falácia do sunk cost numa cadeira de pôquer. (Pot-commitment real existe, mas vem do preço *atual* em relação a um pote grande — não do que você gastou três streets atrás.)

**Ego — "Eu tenho que saber se ele está blefando."** Pagar para satisfazer a curiosidade, ou para evitar a dor de *talvez* estar sendo blefado, é pagar o máximo por uma informação que você não precisa. Você vai ser blefado às vezes. Tudo bem — um botão de fold que *nunca* está errado significa que você folda demais e sangra para toda aposta de valor. Gerencie suas decisões, não seu ego.

**Medo — foldar a melhor mão para uma carta assustadora.** A falha oposta: com tanto medo de estar batido que você larga vencedoras. A correção para os dois polos é a mesma frase — ==folde por matemática, não por medo.== Folde porque o preço está errado ou a história é valor, não porque você "tem um mau pressentimento".

Entre os dois extremos ficam os dois perfis perdedores: a **calling station** que nunca folda e paga toda aposta de valor, e o **nit** que folda tanto que bons jogadores simplesmente apostam todo pote e passam por cima dele. O fold vencedor vive no meio disciplinado: apertado, mas não assustado.

---

## "Devo foldar?" — um autoteste de 30 segundos

Antes de qualquer call grande, rode este checklist. Se as respostas honestas continuam apontando para "eu só venço um blefe aqui", você tem um fold:

:::steps
Consigo nomear as mãos piores que ele apostaria assim? | Se as únicas mãos que apostam assim me vencem, estou pagando valor.
Supero o limite das pot odds? | Se minha equity está abaixo do número na tabela, o preço diz fold.
Essa linha é uma aposta de valor ou um blefe? | Jogadores passivos e raises grandes no river são valor — acredite neles.
Estou pagando só pra "ver"? | Curiosidade e ego não são motivos; são a armadilha do sunk cost falando.
Eu mesmo apostaria essa mão por valor aqui? | Se eu não apostaria, provavelmente também não posso pagar uma aposta com ela.
:::

Nada disso leva trinta segundos de verdade quando vira hábito — mas desacelerar nas grandes decisões é exatamente o que a calling station nunca faz.

---

## Uma laydown de verdade, passo a passo

Aqui está um fold do qual me orgulho, detalhado pra você conferir você mesmo (§13-verificado). Cash de $1/$2, 100bb de profundidade.

- **Minha mão:** ==A♥K♣.== Eu aumento, o big blind — um jogador tight e passivo — paga.
- **Flop:** ==K♦ 9♠ 4♥.== Tenho top pair, top kicker. Aposto, ele paga. Padrão.
- **Turn:** ==7♣.== Um blank. Aposto de novo por valor, ele paga de novo. Ainda parece bem.
- **River:** ==9♥.== A mesa pareia, agora lendo ==K♦ 9♠ 4♥ 7♣ 9♥==, e o jogador passivo de repente me dá **check-raise** grande.

Vamos contar. Minhas cinco melhores cartas são ==K♣ K♦ 9♠ 9♥ A♥== — dois pares, reis e noves, ás de kicker. *Parece* enorme. Mas um jogador tight e passivo que pagou até aqui e agora dá raise num river que pareou o nove está contando uma história muito específica: ele tem um nove — trinca de noves, ou um full house tipo noves-full — e quase nunca um blefe. Contra o range de raise dele, meus dois pares estão quase sempre batidos. Eu foldo. Doeu; também valeu mais que o pote, porque essa mesma disciplina economiza um stack toda sessão. **A mão era forte. A situação não era.**

---

## Os 7 erros de fold mais comuns

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| O erro | Por que te custa | A correção |
|:---|:---|:---|
| **Pagar demais (a station)** | Você paga toda aposta de valor do salão | Padrão para fold quando você só vence um blefe |
| **Pagar a aposta de valor óbvia** | Apostas grandes de passivos quase nunca são blefes | Acredite na história; folde |
| **Casar com top pair / overpairs** | São mãos médias em potes grandes | Folde para agressão pesada de várias streets |
| **Perseguir projetos sem o preço** | As pot odds dizem que seu call perde no longo prazo | Supere o limite ou folde |
| **Pagar por sunk cost** | "Já estou dentro" não é motivo | Julgue apenas a decisão à sua frente |
| **Hero-call pra "mantê-lo honesto"** | Você pega um blefe, paga dez valores | Reserve para jogadores que realmente blefam |
| **Foldar demais para toda carta assustadora (o nit)** | Bons jogadores te blefam pra fora da melhor mão | Folde para linhas de valor, não para o medo |

Repare que os dois polos estão aqui: folde *mais* contra os jogadores value-heavy que nunca blefam (a maior parte da população de stakes baixas) e folde *menos* contra os regulares pensantes que blefam o suficiente para explorar um nit.

</div>

---

:::readnext[Continue lendo]
/pt/blog/holdem-strategy | As 5 decisões por trás do pôquer vencedor | /images/holdem-strategy-hero.webp
/pt/blog/holdem-pot-odds | A matemática que decide os calls apertados | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. Quando você deve foldar no pôquer?**

A. Folde sempre que pagar ou aumentar perde dinheiro no longo prazo: quando sua mão é fraca demais no pré-flop, quando você erra o flop e enfrenta agressão numa mesa que encaixa no range do adversário, quando um projeto não bate suas pot odds e quando uma linha value-heavy vence a mão que você tem. O pior resultado de um fold é zero, então foldar um spot perdedor sempre vence pagá-lo.

**Q. Com que frequência você deve foldar no pré-flop?**

A. Um bom jogador tight-aggressive folda cerca de 75–85% das mãos antes do flop — mais perto de 75–80% em jogos 6-max e 80–86% em full-ring. Jogar menos mãos, mais fortes, é a maior correção individual para a maioria dos jogadores perdedores. Se você está entrando em bem mais de um quinto das mãos, quase certamente está jogando demais.

**Q. Quando você deve foldar uma boa mão?**

A. Folde uma mão forte quando a ação te diz que ela está batida: top pair ou um overpair enfrentando agressão pesada de várias streets, especialmente um raise de um jogador passivo ou um river assustador que fecha projetos óbvios. Top pair não é o topo do seu range num pote grande. Uma laydown disciplinada de uma mão forte batida é uma jogada vencedora, não uma fraca.

**Q. Você deve algum dia foldar par de ases?**

A. Num cash game, essencialmente nunca antes do flop — os ases são o favorito matemático sobre qualquer outra mão inicial. Depois do flop, um overpair de ases pode ocasionalmente ser foldado para agressão extrema numa mesa perigosa. As raras exceções pré-flop são spots de bolha de torneio e satélite, onde a sobrevivência pode pesar mais que uma pequena vantagem.

**Q. Quando você deve foldar top pair?**

A. Folde top pair quando seu kicker é fraco e você enfrenta apostas grandes no turn e no river, quando a mesa fecha num flush ou sequência óbvia e seu adversário aposta nela, ou quando um jogador passivo dá raise. Top pair vence blefes e pares piores, mas contra uma linha value-heavy costuma estar atrás — e pagar três streets pra pegar um blefe perde dinheiro.

**Q. O que é a falácia do sunk cost no pôquer?**

A. É a falsa crença de que, por já ter botado fichas no pote, você tem que continuar pagando pra "proteger" aquele investimento. Aquelas fichas não são mais suas — pertencem ao pote — então cada decisão deve ser julgada apenas pelo que acontece daqui pra frente. "Já estou dentro por tanto" é a armadilha clássica do sunk cost, e é a causa número um de calls ruins.

**Q. Devo foldar ou pagar quando estou em dúvida?**

A. Quando está genuinamente apertado e você está em dúvida, foldar costuma ser o padrão melhor — especialmente em stakes baixas, onde os adversários blefam muito menos do que deveriam. Pergunte se você supera o limite das pot odds e se a linha deles parece valor ou blefe. Se você não consegue nomear mãos piores suficientes que ele apostaria, folde e siga para um spot mais claro.

**Q. Como saber quando foldar para um raise no river?**

A. Trate um raise no river, especialmente de um jogador passivo, como valor até que se prove o contrário. A maioria dos jogadores não tem blefes suficientes no seu range de raise no river, então um raise grande geralmente significa uma mão que vence um par ou dois pares. A menos que o adversário seja agressivo e capaz de bluff-raise, foldar todas menos suas mãos mais fortes é o correto.

**Q. Foldar é sinal de fraqueza?**

A. Não — foldar com disciplina é sinal de habilidade. Os melhores jogadores do mundo foldam a grande maioria das mãos e largam mãos fortes quando a situação exige. O que parece fraqueza é na verdade recusar-se a doar fichas para spots perdedores. A fraqueza de verdade é a incapacidade de largar, que todo adversário forte vai explorar.

**Q. Dá pra foldar demais no pôquer?**

A. Sim. Foldar toda vez que você enfrenta pressão te faz um "nit", e adversários atentos simplesmente vão apostar todo pote pra passar por cima de você, te blefando pra fora da melhor mão. O objetivo não é foldar o máximo possível — é foldar quando a matemática ou a linha do adversário diz que você está batido, enquanto ainda defende o suficiente pra não poder ser blefado à vontade.

**Q. Quando você deve foldar um overpair?**

A. Folde um overpair quando um adversário passivo mostra agressão real numa mesa coordenada ou pareada — um check-raise ou um barrel grande no turn e no river. Jogadores passivos dão raise em mãos fortes, não em ar, então seu overpair geralmente está atrás de um set, dois pares ou uma sequência. Contra adversários agressivos que blefam, você pode continuar mais, mas uma linha passiva gritando força é fold.

---

## O playbook do fold, em resumo

1. **O pior resultado de um fold é zero** — quando você está batido, isso vence toda alternativa negativa.
2. **Folde a maioria das mãos no pré-flop** (75–85%), folde as mãos que erraram e os projetos sem preço depois do flop, e trate o **turn como a street da desistência.**
3. **Supere o limite das pot odds ou folde** — 25% contra uma aposta de meio pote, ~33% contra uma aposta do tamanho do pote.
4. **Largue boas mãos quando a linha grita valor** — top pair não é o topo do seu range.
5. **Folde por matemática, não por medo** — vença a armadilha do sunk cost, ignore seu ego, e lembre que as fichas no pote nunca foram suas para proteger.

Domine o fold e você deixa de ser o jogador que "não conseguiu largar". Combine essa disciplina com uma matemática afiada de [pot odds](/pt/blog/holdem-pot-odds), um bom [jogo de 3-bet](/pt/blog/holdem-3bet) e o [framework de estratégia](/pt/blog/holdem-strategy) completo, e você vai vencer em silêncio os potes que importam ao perder os que não importam.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O framework das 5 decisões</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Onde o fold se encaixa num jogo vencedor</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">O limite por trás de todo fold</div>
  </a>
  <a href="/pt/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-Bet explicado</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quando foldar para um re-raise</div>
  </a>
  <a href="/pt/blog/holdem-continuation-bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">A continuation bet</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quando foldar para uma c-bet</div>
  </a>
</div>
`.trim(),
};

export default POST;
