import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Posições no pôquer: nome de cada assento e o mapa",
  seoTitle: "Seu assento muda de nome toda mão — posições no pôquer",
  desc: "Os nomes andam com o button, não com as cadeiras. Cada posição do pôquer — UTG, hijack, cutoff, button — mais o mapa 6-max e quem age primeiro.",
  tldr: "Posições no pôquer são nomes de assento medidos a partir do dealer button — UTG, lojack, hijack, cutoff, button e os blinds — e elas andam um assento no sentido horário toda mão. No preflop, o UTG age primeiro e o big blind por último; no postflop, o small blind age primeiro e o button por último. Os números de assento físicos nunca mudam; as posições sim.",
  category: "strategy",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Vista de cima de uma mesa profissional de pôquer mostrando 9 posições de jogador com stacks de fichas e um dealer button dourado",
  tags: [
    "posições no poker",
    "nomes das posições no poker",
    "números de assento no poker",
    "mapa de posições poker",
    "hijack lojack poker",
    "posição na mesa de poker",
    "quem age primeiro no poker",
  ],
  content: `
Na minha primeira cash game ao vivo, eu estava sentado no que mais tarde aprenderia ser o UTG. Olhei para baixo e vi J♥ J♠ e aumentei. O hijack pagou. O cutoff pagou. O button pagou. O big blind deu 3-bet. Eu não fazia ideia do que fazer — paguei e sangrei fichas ao longo de três streets.

Duas voltas depois eu estava no button com o mesmo J♥ J♠. Aumentei. Todo mundo foldou. Ganhei $14 sem nunca ver um flop.

Mesma mão. Resultado completamente diferente. A única coisa que mudou foi o meu assento — e naquela noite percebi que eu nem sabia como os assentos se *chamavam*, muito menos o que significavam. Se você ainda está aprendendo como uma mão inteira flui do deal ao showdown, comece pelo [guia de regras do Texas Hold'em](/pt/blog/texas-holdem-rules-for-beginners); este artigo é o mapa de assentos que aquele guia assume que você já conhece.

---

> **Resposta rápida**
> Posições no pôquer são os ==assentos nomeados medidos a partir do dealer button== — UTG, lojack, hijack, cutoff, button, small blind, big blind — e elas ==andam um assento no sentido horário toda mão== conforme o button anda. No preflop, o UTG age primeiro e o big blind por último. No postflop, o small blind age primeiro e o button por último.

---

## Quais são as posições numa mesa de pôquer? (mapa completo de assentos)

Uma posição não é uma cadeira — é um **nome para onde você senta em relação ao dealer button**, e ela determina ==quando você age em cada street==. Como o button anda um assento no sentido horário depois de cada mão, cada jogador na mesa usa um nome diferente a cada mão.

Aqui está o mapa completo de posições 9-max — o nome de cada assento, a abreviação, a zona, e exatamente quando ele age antes e depois do flop:

![Mesa de pôquer com nove jogadores, stacks de fichas em cada assento e o dealer button marcado com D na frente de um jogador](/images/holdem-button-position-hero.webp "O dealer button define a posição de cada assento e a ordem de jogo")

| Assento | Abrev | Zona | Preflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Early | 1º (primeiro) | 3º |
| Under the Gun +1 | **UTG+1** | Early | 2º | 4º |
| Under the Gun +2 | **UTG+2** | Early | 3º | 5º |
| Lojack | **LJ** | Middle | 4º | 6º |
| Hijack | **HJ** | Middle | 5º | 7º |
| Cutoff | **CO** | Late | 6º | 8º |
| Button | **BTN** | Late | 7º | **Último** |
| Small Blind | **SB** | Blind | 8º | **1º** |
| Big Blind | **BB** | Blind | 9º (último) | 2º |

Repare na inversão: ==os blinds agem por último no preflop mas primeiro no postflop==, enquanto o button age por último em toda street postflop. Essa ordem — e não as cartas — é o que torna alguns assentos estruturalmente melhores do que outros.

> **Nota de mesa ao vivo:** o button é um disco físico que anda um assento no sentido horário a cada mão. "UTG" é quem quer que esteja sentado três assentos à esquerda do button naquele momento — não uma cadeira fixa.

---

## Nomes e abreviações das posições: UTG, LJ, HJ, CO, BTN, SB, BB

Cada nome de posição que você vai ouvir numa mesa ou ler num artigo de estratégia, decifrado:

| Abrev | Nome completo | Grupo | A que se refere |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Early (EP) | Primeiro a agir no preflop, logo à esquerda do big blind |
| **UTG+1 / UTG+2** | Under the Gun mais um / dois | Early (EP) | Os próximos assentos no sentido horário a partir do UTG |
| **LJ** | Lojack | Middle (MP) | Três assentos à direita do button |
| **HJ** | Hijack | Middle (MP) | Dois assentos à direita do button |
| **CO** | Cutoff | Late (LP) | Um assento à direita do button |
| **BTN** | Button (Dealer) | Late (LP) | O assento com o disco de dealer — último a agir no postflop |
| **SB** | Small Blind | Blinds | Primeiro assento à esquerda do button; posta a aposta forçada pequena |
| **BB** | Big Blind | Blinds | Segundo assento à esquerda do button; posta a aposta forçada cheia |

Você também vai ver os rótulos de zona mais amplos: ==**EP** (early position)== cobre os assentos UTG, ==**MP** (middle position)== cobre o lojack e o hijack, e ==**LP** (late position)== cobre o cutoff e o button. Livros mais antigos agrupam lojack e hijack como "MP1/MP2" — mesmos assentos, rótulos diferentes.

Saber os nomes é o passo um. O que de fato *fazer* de cada um deles — ranges, steals, jogo in-position versus out-of-position — é uma questão de estratégia, e ela vive no [guia de estratégia de posição](/pt/blog/holdem-position-play).

---

## Números de assento vs posições — o Assento 1 não é uma posição

Isso pega quase todo jogador ao vivo de primeira viagem: quando o floor chama **"Mesa 12, Assento 5"**, esse número não tem ==nada a ver com as posições do pôquer==.

Na maioria dos card rooms, os assentos físicos são numerados a partir da esquerda imediata do dealer — ==o Assento 1 é convencionalmente a primeira cadeira à esquerda do dealer==, contando no sentido horário até o Assento 9 ou 10 à direita do dealer. Esses números estão parafusados nas cadeiras. A equipe os usa para logística: sentar novos jogadores, entregar fichas, marcar o tempo.

As posições são o oposto — elas ==giram um assento no sentido horário a cada mão== com o button. O Assento 5 pode ser o button nesta mão, o cutoff na próxima, e o hijack na mão seguinte.

:::compare
Números de assento (físicos) | Posições (pôquer)
Fixos à cadeira — o Assento 1 costuma ser a esquerda imediata do dealer | Andam com o dealer button toda mão
Usados pela equipe: "Assento 5, fichas a caminho" | Usados pela estratégia: "o cutoff abre"
Nunca mudam durante uma sessão | Mudam a cada mão, um assento no sentido horário
Te dizem ONDE você senta | Te dizem QUANDO você age
:::

Então "o que é o Assento 1 no pôquer?" tem uma resposta chata — é uma cadeira — e é exatamente esse o ponto. ==Um número de assento é um endereço; uma posição é uma função==, e a função é reatribuída toda mão.

---

## O que é UTG no pôquer?

**UTG significa "Under the Gun"** — o assento imediatamente à esquerda do big blind, e o ==primeiro jogador a agir no preflop==. O nome evoca a pressão do lugar: você precisa comprometer fichas antes de ver o que um único adversário faz, como se agisse sob a mira de uma arma.

Num jogo cheio de 9 jogadores existem na verdade três assentos "under the gun" — **UTG, UTG+1 e UTG+2** — contados no sentido horário a partir do big blind. Só o primeiro age realmente às cegas; os assentos +1 e +2 pelo menos veem uma ou duas decisões antes.

Essa é a definição. *Como jogar* o UTG — por que ele exige o range mais fechado da mesa, e por que aumentar-ou-foldar é a linha padrão ali — está coberto no [guia de estratégia de posição](/pt/blog/holdem-position-play).

---

## O hijack e o lojack — e por que se chamam assim

**O hijack (HJ)** é o assento dois à direita do button. **O lojack (LJ)** é um a mais, três à direita do button. Juntos, eles formam a middle position num jogo 9-max moderno.

Os nomes não têm origem oficial documentada — a gíria do pôquer raramente tem — mas a história mais contada é assim:

- **Hijack:** o cutoff e o button são os assentos clássicos de roubar blind. Quando o jogador um assento antes aumenta primeiro, ele ==**"sequestra" o steal**== que os assentos tardios estavam esperando fazer — então o próprio assento herdou o nome.
- **Lojack:** veio depois, como uma ==brincadeira em cima de "hijack"== — o assento um degrau "mais baixo" na hierarquia. A maioria das versões também ouve um eco da marca antifurto LoJack: um hijack, um degrau abaixo.

Trate os dois como folclore de mesa, não como etimologia. O que não é folclore: o hijack e o lojack são nomes reais e padrão que você vai ver em todo mapa de range moderno e site de treino, e é por isso que vale saber de cor.

---

## O cutoff e o button (posição de dealer)

**O cutoff (CO)** é o assento ==um à direita do button== — a última posição antes do dealer. Duas histórias de origem circulam: uma diz que o assento "corta" (cuts off) a chance do button de roubar os blinds aumentando primeiro; uma mais antiga diz que em jogos caseiros com auto-deal, o jogador à direita do dealer ==cortava o baralho== depois do embaralhamento. De qualquer forma, o nome pegou, e o cutoff é universalmente contado como late position.

**O button (BTN)** — também chamado de **posição de dealer** — é o assento marcado pelo disco físico de dealer. Em jogos de cassino um dealer profissional cuida das cartas, então o button simplesmente marca ==quem *estaria* dando as cartas==, que é o que ancora a ordem de aposta: o button age ==por último em toda street postflop==, e todo o resto na mesa é nomeado pela distância até esse disco.

Essa última ação garantida é o motivo pelo qual o button é considerado o assento mais lucrativo do pôquer — o argumento completo, com os números por trás, está no [guia de estratégia de posição](/pt/blog/holdem-position-play).

---

## Os blinds: assentos SB e BB

Os dois assentos à esquerda do button são posições *e* apostas forçadas ao mesmo tempo:

- **Small blind (SB):** o primeiro assento à esquerda do button. Posta uma aposta forçada — geralmente metade do big blind — antes de as cartas serem distribuídas.
- **Big blind (BB):** o próximo assento no sentido horário. Posta a aposta forçada cheia que define o preço de entrar na mão.

Como posições, elas são definidas pela inversão na ordem de ação: os blinds agem ==por último no preflop== (já pagaram, então todo mundo precisa responder às apostas deles primeiro) mas ==primeiro no postflop==, à frente da mesa inteira, no flop, no turn e no river igualmente.

Por que os blinds existem, quanto custam por volta, e como defendê-los é um tópico próprio — o [guia do small blind e big blind](/pt/blog/holdem-blind-meaning) cobre a mecânica e a matemática das apostas forçadas por completo.

---

## Quem age primeiro no pôquer — preflop vs postflop (os blinds vão primeiro?)

A pergunta mais feita sobre posições, respondida numa tabela só:

| Street | Primeiro a agir | Último a agir |
|:---|:---|:---|
| **Preflop** | **UTG** — primeiro assento à esquerda do big blind | **Big blind** — pode dar check ou aumentar |
| **Flop / Turn / River** | **Small blind** — ou o primeiro assento ainda ativo à esquerda do button | **Button** — ou o assento ativo mais próximo antes dele |

Então — **os blinds vão primeiro?** ==No preflop, não. No postflop, sim.== Antes do flop os blinds já colocaram dinheiro, então a ação começa no UTG e volta até eles por último — o big blind age por último de todos. Depois do flop a ordem reinicia no sentido horário a partir do button: o small blind fala primeiro, o big blind em segundo, e o button sempre por último.

E entre os dois blinds: ==o small blind age antes do big blind em toda street==, no preflop e no postflop igualmente — com uma exceção, heads-up, coberta abaixo.

Uma pergunta vizinha que merece uma linha: no **showdown**, o padrão é que o último jogador que apostou ou aumentou mostra primeiro (se o river passa em check, o primeiro assento ativo à esquerda do button mostra) — a etiqueta completa está no [guia de regras de showdown](/pt/blog/holdem-showdown-rules). Para a sequência completa de uma mão, street por street, veja [a ordem de jogo](/pt/blog/holdem-game-order).

---

## Posições no pôquer por número de jogadores: heads-up a 10-handed (6-max vs full ring)

Os nomes das posições não mudam com o tamanho da mesa — ==eles vão sumindo pela early position primeiro== conforme os jogadores são removidos. O button, os blinds, o cutoff e o hijack sobrevivem por mais tempo; os assentos UTG só existem quando a mesa está cheia. Aqui está o mapa de 2 a 10 jogadores, listado na ordem de ação do preflop:

| Jogadores | Ordem de ação no preflop (primeiro → último) |
|:---:|:---|
| **2 (heads-up)** | BTN (posta o small blind) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (o assento "UTG" aqui) → BTN → SB → BB |
| **5** | HJ (o assento "UTG" aqui) → CO → BTN → SB → BB |
| **6 (6-max)** | UTG (também chamado de LJ) → HJ → CO → BTN → SB → BB |
| **9 (full ring)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**O heads-up é o que quebra a intuição de todo mundo.** Com só dois jogadores, ==o button posta o small blind== — o mesmo assento é BTN e SB ao mesmo tempo. Isso significa que o button age ==**primeiro** no preflop== (o big blind age por último, como sempre) mas ainda age ==**por último** em toda street postflop==, enquanto o big blind age primeiro no postflop. Todo outro tamanho de mesa segue o padrão normal; só o heads-up funde o melhor assento com um blind.

**6-max vs full ring** é subtração pura: os três assentos extras (UTG+1, UTG+2 e um assento do meio) não existem, então o 6-max roda UTG → HJ → CO → BTN → SB → BB. A consequência prática é que ==todo assento no 6-max joga "mais tarde" do que o seu xará do full ring== — o UTG do 6-max enfrenta cinco adversários, não oito — e é por isso que os ranges ficam mais amplos em toda a linha em jogos short-handed. Os números assento por assento vivem no [guia de estratégia de posição](/pt/blog/holdem-position-play), e as mãos exatas que preenchem cada range estão mapeadas na [tabela de starting hands](/pt/blog/holdem-starting-hands-chart).

> **Ressalva de nomenclatura:** alguns sites e salas rotulam o primeiro assento do 6-max como "LJ" ou "MP" em vez de UTG, e os assentos do meio no 10-handed às vezes aparecem como "MP1/MP2". Os rótulos variam; a ordem de ação nunca.

---

:::readnext[Continue lendo]
/pt/blog/holdem-position-play | Estratégia de posição: dentro vs fora de posição | /images/holdem-position-play-hero.webp
/pt/blog/holdem-starting-hands-chart | Tabela de starting hands por posição | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. O que significa UTG no pôquer?**

A. UTG significa "Under the Gun" — o assento imediatamente à esquerda do big blind, e o primeiro jogador a agir no preflop. O nome evoca a pressão de comprometer fichas antes de ver a decisão de qualquer adversário. Em jogos full ring os dois próximos assentos se chamam UTG+1 e UTG+2.

**Q. O que é o hijack no pôquer?**

A. O hijack (HJ) é o assento dois à direita do dealer button, logo antes do cutoff. É o mais tardio dos dois assentos de middle position num jogo 9-max e o segundo assento a agir no preflop em 6-max. A história mais contada por trás do nome: um aumento desse assento "sequestra" o roubo de blind que o cutoff e o button estavam posicionados para fazer.

**Q. O que é o lojack no pôquer?**

A. O lojack (LJ) é o assento três à direita do button — o mais adiantado dos dois assentos de middle position no 9-max. Em 6-max é o primeiro assento a agir, onde costuma ser chamado só de UTG. O nome é geralmente contado como uma brincadeira em cima de "hijack" (um assento mais baixo), muitas vezes ligado à marca antifurto LoJack — folclore de mesa, não etimologia documentada.

**Q. Quem vai primeiro, o small blind ou o big blind?**

A. O small blind age antes do big blind em toda street. No preflop, os dois blinds agem por último (o big blind por último de todos, com a opção de dar check ou aumentar); no postflop, o small blind é o primeiro assento a agir na mesa. A única exceção é o heads-up, onde o button posta o small blind e o big blind age primeiro no postflop.

**Q. Quantas posições existem no pôquer 6-max?**

A. Seis: UTG (também chamado de lojack), hijack, cutoff, button, small blind e big blind. Comparado com uma mesa 9-max, o UTG+1, o UTG+2 e um assento do meio simplesmente não existem — os nomes são removidos primeiro da early position, então todo assento restante joga "mais tarde" do que o seu xará do full ring.

**Q. As posições no pôquer mudam a cada mão?**

A. Sim. O dealer button anda um assento no sentido horário depois de cada mão, e como todas as posições são nomeadas pela distância até o button, a posição de cada jogador se desloca um assento a cada mão. Ao longo de uma volta completa você vai ocupar cada posição da mesa exatamente uma vez.

**Q. O que é o Assento 1 no pôquer?**

A. O Assento 1 é uma cadeira física, não uma posição — na maioria dos card rooms é o primeiro assento à esquerda imediata do dealer, com os números correndo no sentido horário até o Assento 9 ou 10. A equipe usa os números de assento para acomodação e logística. As posições do pôquer (UTG, button, blinds) giram de forma independente a cada mão, então o Assento 1 pode ser qualquer posição.

---

## O que levar

1. **Posições são nomes, não cadeiras.** Todo assento é nomeado pela distância até o dealer button, e todo nome anda um assento no sentido horário a cada mão.
2. **O mapa numa linha:** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. O preflop começa no UTG e termina no big blind; o postflop começa no small blind e termina no button.
3. **Números de assento ≠ posições.** O Assento 1 é convencionalmente a esquerda imediata do dealer e nunca anda; as posições giram a cada mão. Um é um endereço, o outro é uma função.
4. **O tamanho da mesa subtrai pela frente.** O 6-max derruba os assentos iniciais; o heads-up funde o button com o small blind — primeiro a agir no preflop, último a agir no postflop.

Uma vez que os nomes viram segunda natureza, a vantagem de verdade vem do que você faz com eles — [como jogar cada posição](/pt/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"), das ranges de abertura ao jogo in-position versus out-of-position, é a próxima leitura. A partir daí, a [tabela de starting hands](/pt/blog/holdem-starting-hands-chart) mapeia mãos exatas para assentos exatos, e o [guia de ranking de mãos](/pt/blog/holdem-hand-rankings) resolve o que de fato vence no showdown.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Guia para iniciantes</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras do Texas Hold'em para iniciantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Como uma mão inteira funciona do deal ao showdown</div>
  </a>
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia de posição</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estratégia dentro vs fora de posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ranges de abertura e o que fazer de cada assento</div>
  </a>
  <a href="/pt/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ordem de jogo</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ordem de jogo no Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Sequência de ação preflop → flop → turn → river</div>
  </a>
  <a href="/pt/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Small blind e big blind explicados</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que existem e como jogá-los corretamente</div>
  </a>
</div>
`.trim(),
};

export default POST;
