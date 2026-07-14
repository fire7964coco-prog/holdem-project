import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Tabela de mãos iniciais e as melhores mãos do pôquer",
  seoTitle: "Foldar 80% das suas mãos? — Tabela de mãos iniciais",
  desc: "A maioria das cartas fechadas perde dinheiro. As melhores mãos iniciais, a tabela completa por posição e 6-max, mais GTO vs iniciante — em 10 minutos.",
  tldr: "Dos 169 tipos de mãos iniciais, só uma pequena fatia do topo — cerca de 15–20% das mãos que você recebe — dá lucro pra um iniciante. Pares grandes (AA–TT) e AK aumentam de qualquer assento; quanto mais tarde você age, mais amplo você abre — de ~13% no under the gun a ~43% no button (ainda mais amplo no 6-max). Comece com uma tabela simplificada e adicione as tabelas GTO de preflop quando o aumentar-ou-foldar já for automático.",
  category: "strategy",
  date: "2026-06-14",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🂡",
  tags: [
    "boas mãos iniciais no poker",
    "tabela de mãos iniciais poker",
    "tabelas gto de preflop",
    "porcentagens de mãos iniciais",
    "mãos iniciais 6-max",
  ],
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Tabela de mãos iniciais do Texas Hold'em mostrando os grupos Premium (AA KK QQ JJ AK), Fortes (TT 99 AQ KQ) e Fold por posição do UTG ao button",
  content: `
Na minha primeira sessão ao vivo, peguei A♣ 4♦ e pensei "um ás, quão ruim pode ser?"

Paguei um aumento, errei o flop, paguei de novo, errei o turn. No river eu já tinha perdido 40 big blinds com nada.

Aqui está a matemática incômoda por trás dessa mão: ==o Texas Hold'em tem 169 tipos distintos de mãos iniciais — e cerca de 80% das mãos que você recebe deveriam ser foldadas no preflop.== Aprender quais mãos jogar — e de qual assento — é a maior evolução que iniciantes fazem no primeiro mês. A seleção de mãos é a segunda das [cinco decisões](/pt/blog/holdem-strategy) por trás de toda mão vencedora: acerte nela e cada rua seguinte fica mais fácil.

Esta página é a versão tudo-em-um: as 10 melhores mãos iniciais, o que faz uma mão ser *boa* pra começo de conversa, a tabela completa de mãos iniciais por posição (9-max e 6-max), tabelas GTO de preflop vs tabelas de iniciante, um resumo em PDF pra imprimir e um quiz rápido pra você se testar.

---

### Mãos iniciais, em números

:::stripe
169 | Tipos distintos de mãos iniciais (1.326 combos exatos)
~80% | Mãos que um iniciante deveria foldar no preflop
~13% → ~43% | Range de abertura do UTG até o button (9-max)
~85% | Com que frequência AA vence uma mão aleatória
:::

---

## As 10 melhores mãos iniciais do pôquer, ranqueadas

Estas são as melhores mãos iniciais do pôquer — as que você deveria quase sempre aumentar no preflop, de qualquer assento da mesa:

| Rank | Mão | Por que é forte |
|-----:|------|-----------------|
| 1 | AA | Melhor mão de preflop — favorita em ~85% sobre uma mão aleatória |
| 2 | KK | Só perde pra AA no preflop — ainda assim aumente e re-aumente |
| 3 | QQ | Forte, mas reavalie quando um A ou K aparece no flop |
| 4 | JJ | Premium — aumente forte, pise no freio contra ação pesada em flops A/K/Q |
| 5 | TT | Mão do top-5 — aumente entrando primeiro, mas cuidado com 3-bets grandes |
| 6 | AKs | Ás-rei suited — domina outras cartas grandes e faz o nut flush draw |
| 7 | AKo | AK offsuit — aumente de qualquer posição |
| 8 | AQs | AQ suited — forte, mas folde contra 3-bets grandes fora de posição |
| 9 | KQs | KQ suited — bom em posição tardia, mais complicado do UTG |
| 10 | AJs | AJ suited — forte em posição, folde contra resistência pesada |

![Quatro mãos iniciais premium do Texas Hold'em — pocket ases, pocket reis, pocket damas e ás-rei suited — brilhando em dourado sobre o feltro verde-escuro](/images/holdem-starting-hands-premium.webp "O tier premium — mãos que você pode aumentar de qualquer posição")

==g:Com as mãos 1–5 (os pocket pairs), sempre aumente e muitas vezes re-aumente no preflop pra crescer o pote.== Com AK e AQ, o objetivo é chegar heads-up onde suas cartas grandes têm equity máxima. Um número que vale decorar: AK é praticamente um ==cara ou coroa contra todo pocket pair menor== (o clássico "race") e algo em torno de 43–46% contra QQ — perto o suficiente pra que aumentar e re-aumentar com AK continue certo.

Pocket rockets, cowboys, big slick — se as gírias da mesa são novas pra você, o [glossário do pôquer](/pt/blog/holdem-glossary) cobre cada apelido de mão. E se você está enferrujado no que ganha do quê quando a mesa aparece, revise primeiro o [ranking de mãos do pôquer](/pt/blog/holdem-hand-rankings).

---

## O que conta como uma boa mão inicial no pôquer?

Boas mãos iniciais no pôquer têm uma característica em comum: ==elas fazem *mãos de cinco cartas* fortes com mais frequência do que as mãos que costumam enfrentar.== Pares altos já começam na frente. Cartas grandes suited fazem top pair com o melhor kicker, nut flushes e sequências altas. Todo o resto precisa de ajuda — e mãos que precisam de ajuda só valem a pena quando essa ajuda é barata.

Organizadas em tiers, as boas mãos iniciais do pôquer ficam assim:

| Tier | Exemplos | Como jogar |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Aumente de qualquer posição, re-aumente de forma agressiva |
| Forte | TT–88, AQ, AJs, ATs, KQs | Aumente da maioria das posições, pise no freio contra 3-bets pesados |
| Especulativa | Pares pequenos (77–22), suited connectors (JTs, T9s, 98s), ases suited (A2s–A9s) | Só em posição tardia — precisam de flops baratos e de posição |
| ==r:Lixo== | Ases offsuit fracos (A4o), rei-carta baixa (K3o), tralha offsuit baixa | ==r:Folde no preflop — isso custa fichas toda sessão== |

:::tip[O tier é só metade da resposta. Uma mão especulativa é "boa" no button e ruim no under the gun — e é por isso que a tabela de verdade é organizada por posição, não por mão.]:::

---

## Tabela de mãos iniciais do pôquer por posição (tabela completa 9-max)

==Sua posição na mesa muda quais mãos dão lucro.==

De posição inicial, muitos jogadores ainda agem depois de você — então você precisa de mãos mais fortes. Do button, você age por último em toda rua pós-flop, o que significa que dá pra jogar um range bem mais amplo com lucro.

Aqui está a tabela de mãos iniciais do pôquer pra uma mesa 9-max padrão:

| Posição | Range de abertura | Mãos-chave pra jogar |
|----------|-----------|-------------------|
| UTG (Inicial) | Top ~13% | TT+, AJs+, AKo, KQs |
| MP (Meio) | Top ~17% | Adicione 88, 99, ATs, KJs, QJs, JTs |
| CO (Cutoff) | Top ~27% | Adicione 55–77, A9s+, KTs+, suited connectors (T9s, 98s) |
| BTN (Button) | Top ~43% | Adicione 22–44, A2s+, broadways suited, mãos offsuit mais fracas |

A regra: ==quanto mais tarde você age, mais mãos você pode abrir com lucro==. Como o button sempre age por último no pós-flop, é o assento mais valioso do pôquer.

Explore a grade colorida completa — cada uma das 169 mãos por posição:

:::rangechart:::

Quer isso como uma ferramenta independente com ranges expandidos por assento? Use a [ferramenta de tabela de mãos iniciais do Texas Hold'em](/hand-chart). Pra um detalhamento de cada nome de assento (UTG, HJ, CO, BTN, SB, BB), veja o [guia de posições do pôquer](/pt/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Posição inicial (UTG): o range mais fechado

O UTG é o assento mais difícil de jogar. ==r:Oito jogadores ainda agem atrás de você.== Qualquer mão que você abra aqui precisa aguentar contra ranges fortes.

O núcleo do range do UTG (um range completo de ~13% se abre pra pares médios como 77–99, mais broadways suited e algumas mãos offsuit como AQo/AJo conforme você evolui):

- Pocket pairs: **TT, JJ, QQ, KK, AA**
- Suited premium: **AKs, AQs, AJs, KQs**
- Offsuit premium: **AKo** (e às vezes AQo)

Mãos que parecem fortes mas deveriam ser foldadas do UTG:

- **KJo, QJo, KTo** — dominadas em cenários demais contra quem paga uma abertura de UTG
- **77, 88** — ótimas do button, marginais do UTG
- **Ases suited fracos (A2s–A7s)** — guarde essas pra posição tardia

### Posição tardia (cutoff e button): o range mais amplo

O button é o melhor assento do pôquer. ==g:Você age por último no flop, no turn e no river em toda mão.== Essa vantagem te deixa adicionar com lucro:

- **Pocket pairs pequenos (22–66)** — na esperança de flopar um set
- **Qualquer ás suited (A2s–A9s)** — potencial de nut flush draw
- **Suited connectors (T9s, 98s, 87s)** — mãos baratas de altas implied odds
- **Broadway offsuit mais fraco (KTo, QJo)** — só em posição tardia, nunca cedo

Regra-chave: ==essas mãos especulativas precisam de posição pra dar lucro==. Se um jogador do UTG aumenta na sua frente, a maioria delas vai direto pro muck — a vantagem some sem posição.

---

## Mãos iniciais no 6-max: como a tabela muda

A maioria dos cash games online é 6-max, e a tabela desloca numa direção só: ==mais ampla==. Remova os três assentos mais fechados de uma mesa 9-max e cada posição restante efetivamente "sobe". O primeiro jogador a agir no 6-max está abrindo contra cinco adversários, não oito — então ==g:o UTG no 6-max joga mais ou menos como o MP no 9-max== (~15–17% em vez de ~13%).

:::compare
9-Max (Full Ring) | 6-Max
9 assentos — três posições iniciais antes do MP | 6 assentos — o UTG aqui é na real o lojack
Primeiro assento abre ~13% das mãos | Primeiro assento abre ~15–17% das mãos
As blinds voltam a cada 9 mãos — foldar é barato | As blinds voltam 1,5x mais rápido — foldar tudo sangra fichas
AJo, KQo = fold do primeiro assento | AJo, KQo = aberturas padrão do primeiro assento
Mãos especulativas quase só CO/BTN | Mãos especulativas jogáveis um assento antes
:::

O erro a evitar é jogar uma tabela 9-max num jogo 6-max: você vai foldar mãos claramente lucrativas e ser comido pelas blinds. O erro inverso — ranges de 6-max numa mesa full-ring — é como ases fracos acabam dominados a noite inteira. Quando a tabela já parecer automática, o [jogo de posição](/pt/blog/holdem-position-play) é a habilidade que converte esses ranges mais amplos em lucro de verdade: roubar, isolar e pressionar as blinds dos assentos que permitem isso.

---

## Que porcentagem das mãos iniciais você deveria jogar?

Ao longo de uma sessão inteira, ==uma boa meta pra iniciante é jogar mais ou menos 15–20% das mãos que você recebe== — o que significa foldar 80–85% no preflop. Isso não é um número fixo, é a *média* da tabela por posição acima: ~13% do UTG, ~17% do MP, ~27% do cutoff, ~43% do button.

:::stat[15–20%] das mãos recebidas — um range saudável pra iniciante no 9-max:::

Se você está jogando 30–40% das mãos numa mesa full-ring, você não está "vendo mais flops" — está pagando rake e reverse-implied odds em mãos que a tabela já mandou você foldar. Anote com honestidade por uma sessão; o número costuma ser maior do que parece.

Uma ressalva de escopo: isto é sobre que porcentagem do seu *range* jogar, não sobre com que frequência mãos específicas vencem umas às outras. Pra taxas de vitória mão-a-mão (AK vs QQ, par vs duas overcards e o resto), veja o [guia de odds e probabilidade do pôquer](/pt/blog/holdem-probability) — esse é o trabalho dele, não desta tabela.

---

## Tabelas GTO de preflop vs tabelas de iniciante: qual usar?

Eu mantenho os outputs do solver abertos quando estudo, e ainda assim entrego pra todo iniciante uma tabela simplificada primeiro. São duas ferramentas diferentes, e saber qual usar vale mais do que qualquer uma das tabelas sozinha.

**As tabelas GTO de preflop** vêm de solvers (PioSOLVER, GTO Wizard e companhia). São teoricamente inexploráveis — e também estão cheias de frequências mistas: abra esta mão 25% das vezes, folde 75%, dê 3-bet neste combo mas só com estes naipes. **As tabelas de iniciante** — como a desta página — comprimem tudo isso em uma ação clara por mão.

:::compare
Tabelas GTO de preflop | Tabela de iniciante simplificada
Frequências mistas — aumentar 25% / foldar 75% das vezes | Uma ação clara por mão — aumentar ou foldar
Assume que os adversários também jogam quase perfeito | Assume que os adversários cometem erros (e cometem)
Feita pra uma profundidade de stack, rake e formato específicos | Robusta na maioria dos jogos ao vivo e de baixo stake
Melhor pra: regs online, sessões de estudo, revisão de range | Melhor pra: seu primeiro ano, jogos ao vivo, construir disciplina
Mal aplicada = decisões aleatórias que você não sabe explicar | Levemente "fechada demais" — o defeito mais barato do pôquer
:::

Aqui está por que decorar tabelas de solver cegamente sai pela culatra: as frequências GTO são uma defesa contra adversários perfeitos. Seus adversários em baixo stake pagam demais, foldam de menos e nunca dão 3-bet leve — contra eles, os blefes cuidadosamente balanceados do solver fazem *menos* dinheiro do que simplesmente aumentar boas mãos e foldar lixo. Você acaba fazendo jogadas de frequência mista que não sabe explicar, em jogos onde a jogada simples rende mais. ==g:Aprenda a tabela simplificada até que aumentar-ou-foldar seja automático; adicione as tabelas GTO de preflop quando migrar pro online ou começar a estudar sério.== A ponte entre as duas é entender a [equity no pôquer](/pt/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — a matemática de fatia-de-vitória sobre a qual os EVs do solver são construídos.

---

## As piores mãos iniciais (que parecem jogáveis)

As piores mãos iniciais do pôquer não são tralha aleatória como 7-2 — ninguém precisa de tabela pra foldar isso. As caras são as mãos que *parecem* jogáveis e que perdem fichas de forma consistente ao longo das sessões:

| Tipo de mão | Por que perde | O que os iniciantes pensam |
|-----------|-------------|---------------------|
| ==r:Ases fracos (A2o–A8o)== | Faz o segundo melhor par vs. ases melhores | "Eu tenho um ás, deve ser boa" |
| Connectors offsuit baixos (74o, 85o) | Raramente conecta limpo, e é difícil de jogar quando conecta | "Pode fazer uma sequência" |
| Rei-carta baixa offsuit (K3o, K4o) | Dominada por todo rei melhor | "Um rei é uma carta grande" |
| Duas cartas quaisquer do mesmo naipe | Faz flush até o river só ~6,5% das vezes (flopa um em ~0,8%) | "Mas são do mesmo naipe" |

![Armadilha do ás fraco no Texas Hold'em — A♣ 4♦ contornado em vermelho como mão perdedora, dominada por A♠ K♦ em dourado](/images/holdem-starting-hands-weak-ace-trap.webp "Ases fracos parecem fortes mas continuam dominados — folde no preflop")

O ==r:erro mais caro que iniciantes cometem é pagar aumentos com ases fracos== como o A♣ 4♦ da introdução. Quando você finalmente acerta seu par de ases, muitas vezes você é o segundo melhor contra A♠ K♦ ou A♥ Q♦ — e perde um pote grande convencido de que tem top pair. E você tem. Eles também, com um kicker melhor.

(E a pior mão de verdade no pôquer? 7-2 offsuit — mais sobre isso, e a famosa "regra do 7-2", no FAQ abaixo.)

---

## Tabela de mãos iniciais pra imprimir (resumo em PDF)

Tabelas só funcionam se estiverem na sua frente na hora que importa. Pra jogos caseiros e sessões de estudo, deixamos tudo pronto pra imprimir:

**[Baixe a tabela gratuita de mãos iniciais do pôquer pra imprimir (PDF)](/downloads/poker-starting-hands-chart.pdf)** — uma página, ranges de abertura 9-max e 6-max lado a lado, formato de resumo. Imprima, ou mantenha aberta no celular entre as mãos.

Então use ela literalmente, toda mão, nas suas primeiras 20+ sessões:

:::steps
Confira sua posição primeiro | Antes mesmo de olhar suas cartas, veja onde você senta em relação ao button
Case suas cartas fechadas com a tabela | Ache sua mão no range daquela posição
Aumente ou folde | Evite pagar ([limping](/pt/blog/holdem-limping)) como ação padrão
Folde todo o resto | Mesmo quando parecer fechado demais — especialmente aí
:::

==g:Parece chato. É essa a ideia.== A seleção tight-aggressive no preflop é a base de todo estilo vencedor de pôquer, do cash game iniciante aos torneios de high-stakes.

---

## Se teste: quiz de mãos no preflop

Três spots de tabela. Decida antes de espiar as respostas:

**1. 9-max, você está no UTG com A♠ J♦ (offsuit).** Aumentar ou foldar?
→ ==r:Fold.== AJo não passa o corte do UTG — é dominado com frequência demais pelas mãos que pagam uma abertura de UTG. AJ*s* abre; AJo espera um assento mais tardio.

**2. Button, todo mundo folda até você, 7♠ 6♠.** Aumentar ou foldar?
→ ==g:Aumentar.== Suited connectors estão bem dentro do range de ~43% do button — este é exatamente o assento em que elas dão lucro.

**3. 6-max, o cutoff aumenta, você está no button com A♦ 4♣.** Pagar, aumentar ou foldar?
→ ==r:Fold.== Um ás fraco offsuit contra um aumento é a mão da introdução de novo — dominada quando acerta, inútil quando erra.

:::quiz:::

Acertou os três? Tente o [quiz completo de mãos do pôquer com 10 perguntas](/quiz) — as melhores cinco cartas de sete, contra o relógio.

---

:::readnext[Continue lendo]
/pt/blog/holdem-hand-rankings | Ranking de mãos do pôquer | /images/holdem-hand-rankings-hero.webp
/pt/blog/holdem-probability | Tabela de odds e probabilidade do pôquer | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Qual é a melhor mão inicial do pôquer?**

A. Pocket ases (AA) é a melhor mão inicial do pôquer. No preflop, os ases vencem cerca de 85% das vezes contra uma mão aleatória. Sempre aumente e re-aumente com ases — o objetivo é crescer um pote grande sendo o favorito estatístico.

**Q. Quais são as boas mãos iniciais do pôquer?**

A. As boas mãos iniciais do pôquer são pares premium (AA–TT), ases grandes (AK, AQ) e broadways suited fortes (KQs, AJs) — mais ou menos os 15–20% do topo de todas as mãos. Mãos especulativas como pares pequenos e suited connectors só são boas de posição tardia.

**Q. Quantas mãos iniciais existem no pôquer?**

A. Existem 169 tipos distintos de mãos iniciais (13 pares, 78 suited, 78 offsuit) dentro de 1.326 combinações exatas de duas cartas. A matemática por trás dessas contas está no [guia de probabilidade do pôquer](/pt/blog/holdem-probability).

**Q. O que é a regra do 7-2 no pôquer?**

A. A regra do 7-2 é um jogo paralelo da mesa, não uma regra oficial do pôquer: se um jogador ganha um pote com 7-2 offsuit — a pior mão — todos os outros jogadores pagam a ele uma pequena recompensa. Existe só pra dar tempero a jogos caseiros e de pub, premiando um blefe absurdo.

**Q. Qual é a pior mão inicial do pôquer?**

A. 7-2 offsuit é amplamente considerada a pior mão inicial do pôquer. As cartas estão distantes demais pra formarem uma sequência juntas, baixas demais pra vencer sem melhorar, e mesmo acertar um par te deixa com uma mão fraca e um kicker ruim.

**Q. Iniciantes deveriam usar tabelas GTO de preflop?**

A. Não de cara. As tabelas GTO de preflop usam frequências mistas feitas pra serem inexploráveis contra adversários fortes — exagero em jogos de iniciante, onde uma tabela simplificada de aumentar-ou-foldar rende mais. Aprenda a tabela simples até que fique automática, e depois adicione as tabelas GTO quando estudar ou subir de nível no online.

**Q. Ser suited faz diferença de verdade?**

A. Ser suited adiciona cerca de 2–3% de equity sobre a mesma mão offsuit — relevante, mas não é motivo pra jogar uma mão ruim. Duas cartas do mesmo naipe fazem flush até o river só ~6,5% das vezes (e um flush draw flopado fecha cerca de 35% das vezes até o river). Lixo suited continua lixo.

**Q. Devo sempre foldar pares pequenos como 22 ou 33?**

A. Nem sempre — a posição decide. Do cutoff ou do button, pares pequenos valem a pena pra "set mine": você flopa um set ou melhor cerca de 11,8% das vezes (mais ou menos 1 em 8,5). De posição inicial eles são difíceis de jogar com lucro e geralmente são folds.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ranking de mãos do pôquer — da melhor à pior</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As 10 mãos explicadas com odds e exemplos</div>
  </a>
  <a href="/pt/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Posições</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Posições do pôquer: do UTG ao button</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que a posição muda quais mãos jogar</div>
  </a>
  <a href="/pt/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras de kicker e desempate no pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Mesmo par, resultado diferente — o kicker decide</div>
  </a>
</div>
`.trim(),
};

export default POST;
