import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "O que é straddle no pôquer? Regras, tipos e se você deveria",
  seoTitle: "A aposta que dobra as paradas — o que é straddle no pôquer?",
  desc: "O straddle é um blind voluntário que dobra as paradas antes das cartas. Veja as regras, cada tipo de straddle, quem age primeiro e se straddar dá lucro.",
  tldr: "O straddle é uma aposta de blind opcional — normalmente o dobro do big blind — postada antes de as cartas serem repartidas. Ela compra pro straddler a última ação e a opção de aumentar no pré-flop, dobrando as paradas. Em quase todo caso é uma jogada -EV, permitida só em cash games conforme as regras da casa.",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "Um jogador under the gun postando uma aposta de blind extra de duas fichas na frente do big blind antes de as cartas serem repartidas",
  tags: ["straddle", "o que é straddle no poker", "regras do straddle no poker", "mississippi straddle", "button straddle", "sleeper straddle", "straddle dá lucro", "utg straddle"],
  content: `
Na primeira vez que alguém deu um straddle na minha mesa de $1/$2, eu não fazia ideia de por que o cara under the gun jogou $4 antes de as cartas virem — e por que o dealer de repente começou a action duas cadeiras adiante. Chamei aquilo de "a aposta do rico" por uns bons trinta dias antes de aprender o que ela realmente faz: um straddle ==dobra as paradas e compra pra um jogador a última palavra==, tudo antes de qualquer um ter olhado uma carta.

Se você já viu um jogo ao vivo em que um blind extra aparece do nada, é esse o termo que você procura. Abaixo está exatamente o que é um **straddle**, cada tipo que você vai encontrar, quem age primeiro quando ele é postado, e a resposta honesta pra única pergunta que importa: ==g:você deveria mesmo fazer isso?==

---

### Straddle num relance

:::stripe
2× BB | Tamanho padrão do straddle
Última | A ação de pré-flop do straddler
Só cash | Quase nunca permitido em torneios
-EV | O veredito pra maioria dos jogadores
:::

---

## O que é straddle no pôquer?

**Um straddle é uma aposta de blind voluntária — normalmente o dobro do big blind — postada antes de as cartas serem repartidas.** Num jogo de $1/$2 o jogador under the gun (logo à esquerda do big blind) pode largar $4 "no straddle", e o jogo passa na hora a rolar como uma mesa de $1/$2/$4 naquela mão.

Duas coisas fazem disso mais do que só dinheiro extra no pote:

- É um **blind vivo (live).** Exatamente como o big blind, o straddler comprou a **opção de aumentar** mesmo que todo mundo só pague — um "terceiro blind" com o direito de agir sobre ele.
- É postado **às cegas.** Você dá o straddle *antes* de olhar suas cartas (na maioria das salas, antes mesmo de elas serem repartidas). Você está comprometendo dinheiro sem informação nenhuma, que é justamente por isso que costuma ser uma má ideia — mais sobre isso abaixo.

Um straddle não é um aumento no sentido normal — é um blind que reseta o preço. Se você entende [o que são o small e o big blind](/pt/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp"), um straddle é simplesmente um *terceiro* opcional que o jogador escolhe postar pra inflar as paradas e agarrar posição.

---

## Como o straddle funciona: quem age primeiro e por último

![Infográfico de um button de dealer dourado e duas cartas de mão viradas pra baixo atrás de um flop K♦ 7♣ 2♠, onde o button age por último no pós-flop](/images/holdem-button-dealer-board.webp "Um straddle UTG vivo transforma a cadeira à esquerda do big blind num terceiro blind — o straddler agora age por último antes do flop")

Essa é a parte que as páginas de definição pulam, e é onde os novatos se perdem. Um straddle **reorganiza a ordem de ação do pré-flop.** Acompanhe um jogo padrão de $1/$2 onde o UTG dá straddle pra $4:

:::steps
UTG posta o straddle | O jogador under the gun coloca $4 (2× o big blind de $2) antes de as cartas serem repartidas
Primeiro a agir = à esquerda do straddler | A action agora começa com o jogador à esquerda do straddler (UTG+1), não o UTG — o straddle age como um novo big blind
Volta na mesa | Todo mundo tem que pagar $4 (não $2) pra jogar; podem foldar, pagar ou aumentar normalmente
Os blinds decidem | O small e o big blind agem na sua vez, encarando o preço de $4
O straddler age POR ÚLTIMO | Se ninguém aumentou, o straddler pode dar check na sua opção ou aumentar — a última palavra antes do flop
:::

Essa "última ação no pré-flop" é o que o straddler está pagando. Mas repare na pegadinha: pra um **straddle UTG, o privilégio da última ação é só no pré-flop.** Assim que o flop vem, a ordem de aposta volta ao normal — o small blind age primeiro, e o straddler está de volta a uma cadeira inicial, fora de posição, com um pote inchado. Esse único fato é a razão de o straddle UTG tão frequentemente ser um perdedor de dinheiro: você paga o dobro pra ser o último por uma rua, e depois joga as três ruas seguintes fora de posição.

---

## Tipos de straddle (UTG, Mississippi, button e sleeper)

![Uma aposta de straddle postada ao lado do button do dealer, mostrando um button ou Mississippi straddle que compra a última posição na mão](/images/holdem-straddle-button.webp "Um button (Mississippi) straddle é postado a partir do button — o único straddle que compra a última ação também no pós-flop")

Nem todos os straddles são iguais — e as diferenças são todas sobre **onde a action começa e por quanto tempo você mantém a última posição.** Aqui está a comparação que nenhuma outra página coloca num só lugar:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo | Quem posta | A action começa | Último a agir | Compra a opção? |
|------|------|------|------|------|
| **UTG (padrão)** | Under the gun | À esquerda do straddler | Só pré-flop | Sim |
| **Mississippi** | Qualquer cadeira (muitas vezes button/CO) | À esquerda do straddler | Pré + pós-flop* | Sim |
| **Button** | O button | Small blind | Pré + pós-flop | Sim |
| **Sleeper** | Uma cadeira que não é UTG | Normal (UTG) | Não | Geralmente não |
| **Re-straddle** | À esquerda de um straddler | À esquerda do re-straddler | Só pré-flop | Sim |

</div>

*A última ação no pós-flop se aplica quando o Mississippi straddle está no button ou perto dele.

- **Straddle UTG** — o clássico. Postado under the gun, última ação só no pré-flop. O mais comum e o mais fraco, em termos de posição.
- **Mississippi straddle** — pode ser postado de **qualquer posição**, com mais força a partir do button ou cutoff. A action começa à esquerda do straddler, então um Mississippi straddle no button compra a **última ação tanto no pré-flop quanto no pós-flop** — o único straddle com um argumento posicional de verdade. Não é permitido em toda parte.
- **Button straddle** — um straddle no estilo Mississippi especificamente a partir do button; o button mantém a última ação até o fim. O fluxo exato (onde o small blind se encaixa) varia por sala — confirme com o dealer.
- **Sleeper straddle** — um blind de uma cadeira que não é UTG e que fica "dormindo": é **inativo a menos que a action folde toda de volta até ele**, e na maioria das salas ele **não** compra posição nem a opção de aumentar. Raro, e quase nunca visto online.
- **Re-straddle (double straddle)** — um jogador à esquerda pode dar straddle *por cima* de um straddle, por no mínimo o dobro do anterior ($4 → $8 → $16). Se é permitido, e de quais cadeiras, é pura regra da casa.

⚠️ Cada um desses depende das **regras da casa.** Na dúvida, pergunte ao floor antes de jogar fichas — a mecânica realmente muda de sala pra sala.

---

## Quanto vale um straddle?

O straddle padrão é **exatamente 2× o big blind** — $4 num jogo de $1/$2, $10 num jogo de $2/$5. Esse é o padrão em quase toda cardroom.

Algumas salas no-limit permitem mais:

- **Straddle sem teto / all-in** — algumas salas deixam o straddler postar qualquer valor, até o stack inteiro, como aposta de blind. Um straddle grande pode transformar um jogo pequeno num muito grande por uma única mão.
- **Progressão de re-straddle** — onde o re-straddle é permitido, cada um é no mínimo o dobro do último: $4, depois $8, depois $16, e assim por diante. Jogos onde a mesa toda dá straddle e re-straddle podem inflar as paradas efetivas várias vezes.

Se você está pagando pra entrar num pote com straddle, lembre que suas [pot odds](/pt/blog/holdem-pot-odds) agora são medidas contra um blind maior — o preço pra jogar cada mão dobrou, o que silenciosamente pune o call frouxo.

---

## Straddle é permitido em torneios?

**Quase nunca.** O straddle é uma característica de cash game. Torneios rodam numa estrutura fixa de níveis de blind que precisa se manter idêntica em toda mesa pra ser justa, e um blind extra voluntário quebraria isso — então a esmagadora maioria dos torneios, ao vivo e online, **proíbe o straddle por completo.**

Mesmo em cash games ele é opcional e depende das regras da casa: algumas salas permitem só o straddle UTG, algumas admitem Mississippi e button straddles, algumas limitam o tamanho, algumas banem o re-straddle. Online, os straddles são raros e, onde oferecidos, costumam se limitar a um simples botão UTG. A diferença entre uma aposta de cash game como essa e o formato rígido de torneio é um tópico por si só — veja [torneio vs cash game](/pt/blog/holdem-tournament-vs-cash-game).

---

## Straddle dá lucro? Você deveria straddar?

![Um grande pote inchado de fichas misturadas amontoadas no meio do feltro, o pote inflado que um straddle cria antes de qualquer um ter visto uma carta](/images/holdem-straddle-bloated-pot.webp "Um straddle dobra o blind e incha o pote — dinheiro comprometido antes de uma única carta ser vista")

A resposta honesta, e a que os solvers concordam: **pra quase todo mundo, não.** A análise do GTO Wizard coloca sem rodeios — do ponto de vista de valor esperado, straddar é uma jogada perdedora. Três motivos:

:::card
🎯 | Você compromete às cegas | O dinheiro entra antes de você ver suas cartas, então você está jogando um pote inchado sem informação — a mesma desvantagem que faz dos blinds as piores cadeiras da mesa
📉 | Encolhe sua vantagem posicional | Dobrar o blind incha o pote inicial e deixa mais jogadores ainda pra agir quando você está nas suas melhores cadeiras de roubo. Contra a intuição, os solvers respondem abrindo **menos** mãos em potes com straddle — cerca de 15–20% menos no button — não mais
💸 | Incha o rake | Potes maiores significam mais [rake](/pt/blog/holdem-rake) tirado deles, um imposto escondido em cada mão com straddle num cash game com rake
:::

Então quando *é* defensável? Só em spots específicos, e nunca como pura jogada de lucro:

- **Uma mesa loose-passive** onde os adversários pagam o blind maior com lixo e jogam fit-or-fold depois do flop — você pode ocasionalmente explorar isso, idealmente dando straddle de posição tardia.
- **Um jogo onde todo mundo já dá straddle** — se o straddle é universal, você não perde nenhuma posição *relativa* ao entrar na dança (embora a mesa toda estivesse melhor sem fazer isso).
- **Jogos de action / sociais** onde você está ali pra se divertir, não pelo EV máximo — um motivo perfeitamente válido, só seja honesto que está te custando dinheiro.

O que o straddle *não* vai fazer é "criar uma imagem loose" que compensa — você está pagando um preço real e mensurável por uma vantagem de imagem que raramente se concretiza. Se seu objetivo é ganhar, a jogada que de fato constrói vantagem é a [posição](/pt/blog/holdem-position-play), não um blind extra. Dê straddle por diversão se quiser; não dê straddle pra ganhar dinheiro.

---

:::readnext[Continue lendo]
/pt/blog/holdem-blind-meaning | O que são os blinds no pôquer? | /images/holdem-blind-meaning-hero.webp
/pt/blog/holdem-position-play | Como a posição muda tudo | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. O que é straddle no pôquer?**

A. Um straddle é uma aposta de blind voluntária, geralmente o dobro do big blind, postada antes de as cartas serem repartidas — na maioria das vezes pelo jogador under the gun. Ele dobra as paradas na mão e dá ao straddler a opção de aumentar e a última ação no pré-flop, igual a um terceiro blind.

**Q. Quanto vale um straddle no pôquer?**

A. O straddle padrão é 2× o big blind — $4 num jogo de $1/$2. Algumas salas no-limit permitem straddles maiores ou até sem teto (all-in), e onde o re-straddle é permitido cada um tem que ser no mínimo o dobro do straddle anterior ($4, $8, $16, e assim por diante).

**Q. Quem age primeiro depois de um straddle?**

A. O jogador logo à esquerda do straddler age primeiro, porque um straddle vivo funciona como um novo big blind. A action então dá a volta na mesa, o small e o big blind agem na sua vez, e o straddler age por último no pré-flop — com a opção de dar check ou aumentar se ninguém aumentou antes dele.

**Q. Um straddle é considerado um aumento?**

A. Não. Um straddle é uma aposta de blind, não um aumento — ele reseta o preço que todo mundo tem que pagar pra entrar no pote, e preserva a opção do straddler de aumentar depois. Se ele conta pro teto de aumentos em jogos limit é regra da casa: muitas salas não contam, mas algumas o tratam como aumento pra esse fim, então confira no local.

**Q. O que é um Mississippi straddle?**

A. Um Mississippi straddle pode ser postado de qualquer posição, não só under the gun — comumente do button ou cutoff. A action então começa à esquerda do straddler, então um Mississippi straddle no button compra a última ação tanto no pré-flop quanto no pós-flop, que é por que ele é o único straddle com um argumento posicional genuíno. Não é permitido em toda sala.

**Q. O que é um sleeper straddle?**

A. Um sleeper straddle é um blind postado de uma cadeira que não é UTG e que fica inativo ("dormindo") a menos que a action folde toda a volta até ele. Na maioria das salas ele não compra a opção de aumentar nem concede posição do jeito que um straddle vivo faz. É incomum e raramente oferecido online — sempre confirme a regra da casa.

**Q. Straddle é permitido em torneios?**

A. Quase nunca. Torneios dependem de uma estrutura fixa de blinds que precisa ser idêntica em todas as mesas, então um blind extra voluntário quebraria o formato. O straddle é essencialmente uma opção só de cash game, e mesmo ali depende das regras da casa da cardroom específica.

**Q. Straddle dá lucro? Você deveria straddar?**

A. Pra maioria dos jogadores, não — é uma jogada -EV. Você compromete dinheiro às cegas, comprime sua razão stack-to-pot (o que significa que você deveria jogar menos mãos, não mais) e infla o rake. Só é defensável em mesas loose-passive, em jogos onde todo mundo já dá straddle, ou puramente por diversão — nunca como um jeito de ganhar dinheiro.

---

## As 3 coisas para lembrar

1. **Um straddle é um terceiro blind opcional, geralmente 2× o big blind,** postado antes das cartas — ele dobra as paradas e compra a última ação no pré-flop.
2. **O tipo decide a posição.** Um straddle UTG é o último só no pré-flop; um Mississippi ou button straddle mantém a última ação também no pós-flop. Tudo depende das regras da casa.
3. **É -EV pra quase todo mundo.** Comprometer às cegas, inchar o pote fora de posição e alimentar o rake pesam mais que a diversão. Dê straddle pela imagem na mesa ou pelo entretenimento, não pelo lucro.

Agora que você conhece o blind extra, aperte os fundamentos que ele distorce: [o que os blinds realmente fazem](/pt/blog/holdem-blind-meaning), [por que a posição ganha dinheiro](/pt/blog/holdem-position-play) e [como as ações de aposta e os aumentos funcionam](/pt/blog/holdem-betting-actions) depois que o straddle reseta o preço.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Regras</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O que são os blinds no pôquer?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">O small e o big blind sobre os quais um straddle é construído</div>
  </a>
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como a posição muda tudo</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que a posição de um straddle importa mais que o tamanho dele</div>
  </a>
  <a href="/pt/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Regras</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ações de aposta: check, call, raise</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Como o preço reseta depois de um straddle</div>
  </a>
  <a href="/pt/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneio vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que straddles são coisa só de cash game</div>
  </a>
</div>
`.trim(),
};

export default POST;
