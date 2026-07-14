import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "Nunca jogou um torneio? Veja como funciona de verdade",
  title: "Como funcionam os torneios de pôquer — buy-in, formatos e o Day 1",
  desc: "Como funcionam os torneios de pôquer? Buy-in, estrutura de blinds, payout, freezeout vs PKO vs satellite e um checklist de Day 1 pra quem é de primeira viagem.",
  tldr: "Num torneio de pôquer você paga um buy-in fixo por fichas, e os blinds sobem num relógio até uma pessoa ficar com todas as fichas. Os 10–15% melhores do field entram no dinheiro. Os formatos incluem freezeout, PKO, satellite e deepstack — você entra por buy-in direto, satellite ou pré-registro online.",
  category: "tournament",
  date: "2026-06-16",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "Salão lotado de um torneio de pôquer ao vivo com o relógio dos blinds marcando 12.000/24.000 enquanto os jogadores disputam uma mão",
  tags: [
    "como funcionam torneios de pôquer",
    "estrutura de torneio de pôquer",
    "estrutura de blinds torneio de pôquer",
    "payout torneio de pôquer",
    "tipos de torneio de pôquer",
    "freezeout torneio de pôquer",
    "pko poker",
    "satellite torneio de pôquer",
    "como jogar torneio de pôquer",
  ],
  content: `
Entrei no meu primeiro torneio de pôquer ao vivo com $200, uma ideia vaga de como o Texas Hold'em funcionava e zero noção do que era um "nível de blind" ou uma "bubble".

Quatro horas depois eu estava fora. Mas sabia exatamente o que cada termo significava, por que perdi e quando voltar.

Este guia é tudo o que eu queria que alguém tivesse me contado antes daquele dia — como a estrutura de um torneio funciona de verdade, em qual formato você está entrando, como se registrar sem parecer perdido e como é o Day 1, hora a hora.

---

### Num relance

:::stripe
10–15% | do field costuma entrar no dinheiro
20–40 min | por nível de blind em eventos ao vivo
$100+$9 | como um buy-in típico se divide — prize pool + taxa
:::

## O que é um torneio de pôquer? (resposta em 30 segundos)

Um torneio de pôquer é uma competição em que todo mundo paga a mesma taxa de inscrição (o **buy-in**), recebe a mesma quantidade de fichas iniciais e joga até uma pessoa ficar com todas as fichas do jogo.

**Resumo em uma frase:** num cash game suas fichas são dinheiro de verdade e você pode sair a qualquer hora. Num torneio, sua perda máxima é exatamente o buy-in — mas você está disputando uma fatia de um prize pool muito maior.

Essa única diferença muda o valor das fichas, a pressão dos blinds e a estratégia da base ao topo. → Detalhamento completo: [Torneio vs Cash Game — qual você deveria jogar?](/pt/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## Estrutura de um torneio de pôquer — buy-in, taxas e stacks iniciais

Quando você se registra, paga um buy-in. Esse dinheiro se divide em dois:

| Buy-in de $109 (escrito como "$100+$9") | Para onde vai |
|:---|:---|
| **$100** | → Prize pool, dividido entre todos os inscritos |
| **$9** | → Taxa da casa (rake) que fica com o local |

Grandes eventos ao vivo costumam ficar com 8–10% do buy-in como taxa (torneios diários pequenos muitas vezes pegam mais) — aqui $9 de $109, cerca de 8,3%. Como essa taxa funciona (e por que o online é diferente do ao vivo) é o tema de [como funciona o rake no pôquer](/pt/blog/holdem-rake).

Em troca, você recebe um **stack inicial** — normalmente de 10.000 a 50.000 fichas de torneio, em geral com 100–300 big blinds de profundidade no Nível 1.

**Seu stack inicial não tem valor em dinheiro.** Um stack de 10.000 fichas não equivale a $10.000 — é só a sua vida no torneio. O que importa é ter mais fichas que os outros jogadores quando os spots de dinheiro chegarem.

Todo torneio publica sua estrutura numa **structure sheet**: stack inicial, níveis de blind, duração de cada nível, tabela de antes e payouts. Peça na hora de se registrar — é o documento mais útil que existe na sala.

---

## Estrutura de blinds no torneio — níveis, antes e o relógio

Isto é o que a maioria dos guias pra iniciante pula, e é o conceito mecânico mais importante dos torneios.

**Os blinds começam pequenos e sobem num relógio — normalmente a cada 20–40 minutos em eventos ao vivo.**

| Nível | Blinds | Antes | Seu stack de 10k = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 big blinds |
| 3 | 75 / 150 | 150 | 67 big blinds |
| 6 | 200 / 400 | 400 | 25 big blinds |
| 9 | 500 / 1.000 | 1.000 | 10 big blinds |

Repare: **você não perdeu uma única ficha** entre o Nível 1 e o Nível 9. Mas seu stack foi de 200BB pra 10BB porque os blinds subiram. É assim que os torneios forçam ação e acabam eliminando os jogadores.

==g:Regra de bolso: abaixo de 20 big blinds, você está em território de push-or-fold. Abaixo de 10 big blinds, precisa dar all-in com quase qualquer mão jogável antes que os blinds te devorem vivo.==

Quando chegar lá, os ranges exatos de all-in estão em [estratégia de short stack — quando dar push ou fold](/pt/blog/holdem-short-stack).

**O que são antes?** Depois dos níveis iniciais, a maioria dos torneios adiciona um "ante" — uma aposta forçada extra recolhida em toda mão por cima dos blinds. Na maior parte dos eventos ao vivo modernos é um único "big blind ante", igual a um big blind, pago pelo jogador do big blind em nome da mesa inteira (por isso a coluna de antes acima bate com o big blind). Isso aumenta o tamanho do pote e acelera o jogo. Quando os antes entram, suas fichas encolhem ainda mais rápido.

Novo em blinds no geral? Comece por [o que são de verdade o small blind e o big blind](/pt/blog/holdem-blind-meaning) — é o que faz cada número "BB" acima fazer sentido.

---

## Os 4 estágios pelos quais todo torneio passa

### Estágio 1 — Níveis iniciais (100–200 BB de profundidade)
Você tem espaço pra jogar. Mãos especulativas, set-mining, ver flops — tudo razoável. A maioria dos iniciantes joga apertado demais aqui. Os blinds são baratos; aprenda a mesa.

### Estágio 2 — Estágios intermediários (30–60 BB)
Os antes já costumam estar em jogo a essa altura. A pressão sobre o stack começa. Jogadores com short stack começam a dar all-in. É aqui que a maior parte do field é eliminada.

### Estágio 3 — A bubble
O estágio mais estressante. Mais uma eliminação e todos os que sobram **entram no dinheiro** (ITM = In The Money). Short stacks travam. Big stacks intimidam. Jogar bem aqui pode agregar equity de verdade sem ganhar um único pote — [a bubble merece o próprio guia](/pt/blog/holdem-bubble).

### Estágio 4 — Final table
Normalmente sobram 6–9 jogadores. Os payouts sobem forte a cada eliminação. O [ICM (Modelo de Fichas Independente)](/pt/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") comanda as decisões aqui — o EV em fichas e o EV em dinheiro real divergem bastante.

---

## Tipos de torneio de pôquer — freezeout, PKO, satellite, deepstack e mais

| Formato | Como funciona | Melhor para |
|:---|:---|:---|
| **Freezeout** | Um buy-in, sem rebuy. Quebrou = fora. | Iniciantes — custo fixo |
| **Rebuy / Re-entry** | Paga de novo depois de quebrar (durante os níveis iniciais) | Jogadores agressivos com bankroll maior |
| **Bounty / KO** | Ganha um bounty fixo em dinheiro por cada jogador que eliminar | Jogadores de ação — renda extra por knockout |
| **PKO (Progressive KO)** | Os bounties crescem a cada knockout — parte vem pra você, parte é somada à sua cabeça | Jogadores de alta variância e grande upside |
| **Deepstack** | Stacks iniciais maiores (normalmente 100–200BB+) com níveis mais lentos | Quem quer mais jogo pós-flop |
| **Satellite** | Prêmio = entrada num torneio maior, não dinheiro | Jogadores com orçamento mirando grandes eventos |
| **MTT** | Multi-Table Tournament — field grande em várias mesas | Qualquer um — o formato mais comum |
| **SNG (Sit & Go)** | Começa quando as cadeiras enchem (sem horário fixo) — normalmente 6–9 jogadores | Jogo rápido, sem depender de agenda |

**Para iniciantes:** comece por um **Freezeout MTT** — custo conhecido, regras simples, sem decisões de rebuy pra estressar.

Os três nomes de formato que você mais vai ver numa programação de torneio merecem uma definição decente:

### O que é um torneio freezeout?

Um torneio freezeout dá a cada jogador exatamente um buy-in. Perdeu suas fichas e você está eliminado — sem rebuys, sem re-entries. É o formato original de torneio, e o melhor pra iniciantes porque seu custo total é fixo no momento em que você se registra.

### O que é PKO no poker? (Progressive Knockout)

Um PKO (Progressive Knockout) é um torneio de bounty em que tipicamente cerca de metade de cada buy-in vai pro prize pool normal e a outra metade vira um bounty na cabeça daquele jogador. Quando você elimina alguém, normalmente embolsa parte do bounty dele em dinheiro na hora, e o resto é somado ao seu próprio bounty — te tornando um alvo maior conforme você ganha. A divisão exata varia por site e evento; 50/50 é comum mas não universal, então confira o lobby ou a structure sheet. (Um guia completo de estratégia de PKO chega em breve a este cluster.)

### O que é um torneio deepstack?

Um torneio deepstack te dá muito mais fichas em relação aos blinds — normalmente 100 big blinds ou mais, muitas vezes 200BB+ — e em geral vem com níveis de blind mais longos. Mais fichas e um relógio mais lento significam mais jogo pós-flop, mais espaço pra se recuperar de um erro e dias mais longos.

**E os rebuys e add-ons?** Num evento de rebuy você pode pagar de novo depois de quebrar durante uma janela inicial definida; um add-on é uma compra opcional única de fichas, geralmente oferecida quando essa janela fecha. Depois disso, o evento segue como um freezeout.

---

## O que é um torneio satellite?

Um satellite é um torneio menor em que o prêmio não é dinheiro — é **um ticket de entrada** num torneio maior e mais caro.

**Exemplo:**
- Buy-in do WSOP Main Event: **$10.000**
- Buy-in do satellite: **$500** (20 jogadores)
- Prêmio: **1 vaga** no Main Event

Em vez de gastar $10.000, você disputa um torneio de $500 contra outros 19 jogadores. Uma pessoa ganha a vaga de $10.000.

**Satellites encadeados** vão ainda mais baixo. Um super-satellite de $5 → qualifier de $55 → evento de $215 → Main Event de $1.050. Muitos jogadores em grandes eventos entraram por uma corrente de satellites por uma fração do buy-in direto.

==g:A estratégia de satellite é diferente do jogo de torneio normal — assim que você tem fichas suficientes pra garantir uma vaga, pare de correr riscos. Folde até mãos boas pra não quebrar na bubble.==

---

## Como entrar num torneio de pôquer — 3 formas

### Opção A: buy-in direto no cassino (mais fácil)
1. Ache o balcão de registro da poker room (ou o balcão de torneios em eventos maiores)
2. Apresente um **documento com foto válido** + cartão de fidelidade se exigido
3. Pague o buy-in em dinheiro, fichas ou cartão
4. Receba o seu seat card (número da mesa + número da cadeira)
5. Vá até a sua mesa, entregue o seat card ao dealer e receba suas fichas
6. Conte seu stack inicial antes de jogar a primeira mão — erros acontecem

### Opção B: pré-registro online
A maioria dos grandes festivais ao vivo deixa você se registrar online com antecedência:
- Crie uma conta na plataforma do evento (ex.: Bravo Poker Live pro WSOP, o app PokerStars Live pra eventos EPT/APPT)
- Pague o buy-in online
- Chegue ao local → verificação de documento → imprima o seat card num totem ou pegue no balcão
- Pula a fila de registro — vale a pena em eventos grandes

### Opção C: qualifier via satellite
- Ache torneios satellite online (PokerStars Power Path, GGPoker SuperSatellites) ou no local
- Ganhe o satellite → receba um ticket de vaga pro evento alvo
- Chegue ao balcão de registro do evento principal → apresente ticket + documento → receba o seat card

**O registro normalmente abre 1–3 horas antes do início do torneio.** Em grandes festivais, registre-se online no dia anterior pra garantir a vaga.

Jogando na Ásia? Veja o [guia do APT Incheon 2026](/pt/blog/apt-incheon-2026-guide) pra ver a programação, os buy-ins e o fluxo de registro de um festival de verdade.

---

## Como jogar torneio de pôquer — estratégia por estágio

Um post só não ensina estratégia completa de torneio — é pra isso que servem os guias do cluster — mas aqui está o esqueleto estágio a estágio no qual todo plano vencedor se apoia:

**Níveis iniciais (100BB+):** jogue um pôquer apertado e atento à posição, e veja flops baratos com mãos que quebram pares grandes. Uma [tabela de starting hands](/pt/blog/holdem-starting-hands-chart) disciplinada evita a maioria dos desastres de iniciante. Não blefe seu stack inteiro na primeira hora — ninguém dá fold no Nível 1.

**Estágios intermediários (30–60BB):** os antes fazem todo pote valer a briga. Abra mais leve das posições finais, roube blinds, defenda seu big blind com mais frequência e comece a rastrear quem está de short stack na sua mesa.

**Short stack (abaixo de 20BB):** o push-or-fold assume — a matemática aqui está essencialmente resolvida, e chutar custa dinheiro de verdade. Aprenda os ranges de all-in em [estratégia de short stack](/pt/blog/holdem-short-stack).

**Bubble e final table:** a matemática da sobrevivência passa por cima da matemática das fichas. A pressão do payout muda quais mãos você pode jogar — os guias de bubble e ICM linkados na seção de estágios acima explicam exatamente como.

---

## O que acontece no Day 1 — hora a hora

Isto é o que nenhum outro guia te conta. Aqui está uma linha do tempo realista de Day 1 pra um freezeout ao vivo de $300 com início às 12h:

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Linha do tempo do Day 1 — freezeout de $300, 10.000 fichas iniciais</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">10h30</div>
<div style="color:var(--foreground)">Registro abre. Mostre o documento, pague, pegue o seat card. Ache sua mesa.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">12h00</div>
<div style="color:var(--foreground)">Cartas na mesa. Nível 1: blinds 25/50. Você tem 200BB. Jogue um pôquer exploratório.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">13h–15h</div>
<div style="color:var(--foreground)">Níveis 2–4. Late registration ainda aberto. O field cresce. Alguns jogadores já quebram.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~15h30</div>
<div style="color:var(--foreground)">Late reg fecha. Tamanho final do field anunciado. Prize pool confirmado. Antes entram.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~17h00</div>
<div style="color:var(--foreground)">Pausa pro jantar (normalmente 1 hora). ~40% do field eliminado. As mesas são consolidadas.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">18h–21h</div>
<div style="color:var(--foreground)">A bubble se aproxima. Começa o jogo hand-for-hand. A pressão atinge o pico. Um quebra = todo mundo entra no dinheiro.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">21h–23h</div>
<div style="color:var(--foreground)">ITM — a money bubble estoura. Os jogadores restantes ensacam fichas ou jogam até um final table hoje à noite.</div>
</div>
</div>
</div>

---

## Estrutura de payout no torneio — quem ganha o quê

**Estrutura típica:** os 10–15% melhores do field entram no dinheiro.

| Tamanho do field | Jogadores pagos | Min-cash (típico) | 1º lugar (típico) |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1,5–2x o buy-in | 25–30% do prize pool |
| 500 | ~60 | 1,5–2x o buy-in | 20–25% do prize pool |
| 2.000 | ~250 | 1,7–2,2x o buy-in | 13–18% do prize pool |
| 10.000 | ~1.200 | 1,5–2x o buy-in | 8–12% do prize pool |

**Exemplo real (WPT Seminole Rock 'N' Roll Poker Open Championship 2024, buy-in de $3.500, 1.435 inscritos):**
- Prize pool: $4.592.000 ($3.200 de cada buy-in vai pro pool — o resto é a taxa)
- Jogadores pagos: 181 (~12,6% do field)
- Min-cash: aproximadamente 1,5x o buy-in
- 1º lugar: $662.200 (~14% do prize pool)

A estrutura de payout é sempre anunciada antes de o torneio começar. Peça a **structure sheet** no registro — ela lista os níveis de blind, os antes, o stack inicial e a tabela de payout.

---

## Glossário de torneio — termos que você vai ouvir no Day 1

Estes 13 termos cobrem a maior parte do que você vai ouvir na mesa. Pra ver o A a Z completo, veja o [glossário de pôquer](/pt/blog/holdem-glossary).

| Termo | O que significa |
|------|--------------|
| **ITM** | In The Money — você chegou a uma posição paga |
| **Bubble** | O estágio logo antes do ITM — uma eliminação de todo mundo entrar no dinheiro |
| **Hand-for-hand** | Todas as mesas jogam uma mão de cada vez durante a bubble pra evitar enrolação |
| **Structure sheet** | O documento oficial com níveis de blind, antes e payouts |
| **Chip leader** | O jogador com mais fichas |
| **Short stack** | Um jogador com pouquíssimas fichas em relação aos blinds |
| **Shove / JAM** | Dar all-in (empurrar o stack inteiro pro meio) |
| **Late reg** | Janela de late registration — dá pra entrar depois de o torneio começar |
| **Re-entry** | Comprar de novo depois de quebrar (só durante a janela de late reg) |
| **Satellite** | Um torneio qualifier cujo prêmio é uma vaga num evento maior |
| **PKO** | Progressive Knockout — torneios de bounty em que o prêmio cresce |
| **ICM** | Independent Chip Model — um framework matemático pro valor das fichas no torneio |
| **Min-cash** | A posição de payout mais baixa — o mínimo que você leva por entrar no dinheiro |

---

## Checklist do primeiro torneio

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Antes de sair de casa</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Documento com foto válido</strong> — passaporte ou carteira de motorista. Sem exceção.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Buy-in + 20% extra</strong> em dinheiro — alguns locais não aceitam cartão</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Cartão de fidelidade do cassino</strong> se exigido (ex.: Caesars Rewards pro WSOP)</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>E-mail de confirmação do registro</strong> se você se pré-registrou online</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Roupa confortável — torneios rolam por 6–12 horas. Leve uma jaqueta (as salas são frias).</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:var(--primary);margin:16px 0 10px">No local</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Chegue 30–45 min antes do início. As filas de registro podem ser longas.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Conte suas fichas iniciais antes de jogar a primeira mão. Avise o dealer na hora se estiver faltando.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Peça a structure sheet — saiba quando os antes entram e quando é a pausa pro jantar.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>Sem celular na mesa enquanto uma mão está em jogo</strong> — a maioria das salas pune isso.</span></div>
</div>
</div>

---

:::readnext[Continue lendo]
/pt/blog/holdem-tournament-vs-cash-game | Torneio vs Cash Game | /images/tournament-table-action.webp
/pt/blog/holdem-bubble | O que é a bubble no pôquer? | /images/holdem-bubble-hero.webp
/pt/blog/apt-incheon-2026-guide | Guia do APT Incheon 2026 | /images/apt-incheon-2026-guide-hero.webp
:::

## FAQ

**Q. Quanto tempo dura um torneio de pôquer?**

A. Torneios diários em cassinos locais normalmente rolam por 4–8 horas. Grandes eventos de série como os campeonatos do WPT duram 4–6 dias com vários day bags — e o WSOP Main Event se estende por quase duas semanas, dos flights de Day 1 até o final table. Quando você se registrar, peça a structure sheet — ela vai te dizer a duração esperada do dia com base na duração dos níveis de blind e no tamanho inicial do field.

**Q. Qual a diferença entre PKO e torneios de bounty?**

A. Num torneio de bounty (knockout) normal, cada jogador carrega um bounty fixo — elimine alguém e você leva o valor inteiro, e os bounties nunca mudam. Num PKO (Progressive Knockout), os bounties crescem: você normalmente leva parte do bounty do jogador eliminado em dinheiro e o resto é somado ao bounty na sua própria cabeça. Isso torna os chip leaders num PKO alvos cada vez mais valiosos conforme o evento avança.

**Q. Quais são as regras de rebuy e add-on?**

A. Num torneio de rebuy você pode pagar a taxa de inscrição de novo depois de quebrar (ou às vezes quando seu stack cai abaixo de um limite), mas só durante um período de rebuy definido — normalmente os primeiros níveis de blind. Um add-on é uma compra opcional única de fichas, geralmente oferecida a todo mundo no fim do período de rebuy, independentemente do tamanho do stack. Assim que essa janela fecha, o evento segue como um freezeout. As regras exatas variam por local, então confira a structure sheet.

**Q. É legal organizar um torneio de pôquer em casa?**

A. Depende da sua jurisdição. Em muitos lugares, jogos sociais privados em casa são legais desde que o anfitrião não pegue rake, corte da taxa de inscrição ou lucro além de jogar — todo o dinheiro volta pros jogadores. Cobrar uma taxa da casa, tirar uma porcentagem do prize pool ou anunciar publicamente é o que normalmente transforma um jogo caseiro em jogatina ilegal. As leis variam muito por país e por estado, então confira as regulamentações locais antes de organizar.

**Q. O que significa ITM no pôquer?**

A. ITM = "In The Money". Você chegou a uma colocação que garante um payout. Num torneio de 200 jogadores que paga 25 posições, você está ITM assim que 175 jogadores forem eliminados e só restarem 25. Seu min-cash normalmente é 1,5–2x o seu buy-in.

**Q. Dá pra entrar num torneio de pôquer depois de ele ter começado?**

A. Sim, durante a janela de late registration — normalmente os primeiros níveis de blind, muitas vezes de duas a quatro horas depois do início. Você ainda recebe o stack inicial completo, mas como os blinds subiram vai sentar com menos big blinds que os inscritos do começo. Assim que o late reg fecha, nenhuma nova entrada é permitida.

**Q. Dá pra sair cedo de um torneio de pôquer e ficar com as fichas?**

A. Não. Diferente de um cash game, as fichas de torneio não têm valor em dinheiro e não podem ser trocadas no meio do evento. Se você for embora, suas fichas continuam em jogo e seguem pagando blinds e antes até acabarem. Você só recebe dinheiro se terminar numa posição paga (ITM).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Aprofundamento</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneio vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Valor das fichas, blinds subindo, ICM — qual formato combina com você</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de Starting Hands</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quais mãos jogar nos níveis iniciais</div>
  </a>
  <a href="/pt/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Short Stack</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estratégia de Short Stack</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Push-or-fold quando os blinds se aproximam</div>
  </a>
  <a href="/pt/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Comece Aqui</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras do Texas Hold'em pra iniciantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Domine o básico primeiro</div>
  </a>
  <a href="/pt/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O que são os blinds no pôquer?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Os níveis de blind começam aqui — SB, BB e antes</div>
  </a>
  <a href="/pt/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Posições</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Posições na mesa de pôquer explicadas</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que a sua cadeira comanda cada decisão no torneio</div>
  </a>
</div>
`.trim(),
};

export default POST;
