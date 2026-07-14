import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Odds de projeto no pôquer — as chances de flopar e completar cada mão",
  seoTitle: "Qual a real chance de você flopar? — Odds de projeto no pôquer",
  desc: "As chances reais de flopar um set, um flush, quadra e cada projeto no Hold'em — com a combinatória e a matemática de set mining que as outras páginas escondem.",
  tldr: "Você flopa um set com um par na mão 11,8% das vezes (7,5 para 1 contra), flopa um flush com duas cartas do mesmo naipe apenas 0,84%, e completa um flush draw flopado até o river 35% das vezes. Cada número abaixo vem do baralho, não de chute.",
  category: "odds",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "Um par pequeno na mão ao lado de uma pilha de fichas no feltro verde enquanto o flop é distribuído, o momento em que um call de set mining acerta ou erra",
  tags: ["odds de projeto", "odds de flopar um set", "odds de flopar um flush", "odds de flopar quadra", "set mining", "odds de receber par de ases", "odds de flop no poker", "odds de projeto texas holdem"],
  content: `
A mão que me fez aprender isso de cor: eu paguei um aumento com um par de cincos, flopei meu set, quebrei um cara que tinha ases, e meu parceiro perguntou como eu "sabia" que era pra pagar. Eu não *sabia* — eu sabia o número. ==Você flopa um set mais ou menos 1 vez em cada 8,5 tentativas==, e os stacks estavam fundos o bastante pra me pagar quando eu acertei. Aquela fração sozinha transformou um call de "parece sorte" num call lucrativo.

É isso que odds de projeto realmente são: não sorte, mas a ==matemática fixa de um baralho de 52 cartas==. Com que frequência você flopa um set, flopa um flush, completa um projeto até o river — cada um desses é um número que dá pra derivar, e os jogadores que ganham têm tudo memorizado. Este guia são as ==g:probabilidades por trás do flop e do projeto==, cada uma com a combinatória de verdade pra você enxergar *por que* o número é o que é. É o companheiro da [tabela completa de odds e probabilidade do pôquer](/pt/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); depois que você sabe as odds daqui, [contar outs](/pt/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") e [pot odds](/pt/blog/holdem-pot-odds) transformam elas em decisões.

---

### Os números pra gravar

:::stripe
11,8% | Flopar um set com um par na mão
0,84% | Flopar um flush feito com duas cartas do mesmo naipe
35% | Completar um flush draw flopado até o river
407 para 1 | Flopar quadra com um par na mão
:::

---

## O ciclo de vida do flop: uma tabela que toda página de odds separa

Aqui está a tabela que ninguém monta num lugar só. A maioria dos sites te conta as odds de *flopar* uma mão numa página e as odds de *completar um projeto* em outra — mas na mesa é uma história só, contínua. Você recebe duas cartas, você flopa algo feito **ou** um projeto, e se é projeto você completa ou não.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão | Flopar feito | Flopar o projeto | Completar até o river |
|:---|:---:|:---|:---|
| Par na mão → set | 11,8% (7,5 para 1) | — | set→boat 33% até o river |
| Duas do naipe → flush | 0,84% (118 para 1) | 10,9% flush draw | 35% (9 outs) |
| Conectoras → sequência | 1,3% (76 para 1) | ~10% OESD | 31,5% (8 outs) |
| Duas despareadas → par | ~32% | — | — |
| Par na mão → quadra | 0,245% (407 para 1) | — | — |

</div>

Leia ao longo de uma linha e você vê o ciclo de vida inteiro de uma mão. Duas cartas do mesmo naipe quase nunca flopam um flush *feito* (0,84%) — mas flopam um **flush draw** treze vezes mais (10,9%), e esse projeto chega lá até o river 35% das vezes. Confundir esses três números é o erro de odds mais comum que existe, então vamos separar cada um abaixo com a conta na mesa.

---

## Odds de flopar um set (e a matemática do set mining)

![Infográfico de um botão de dealer dourado e duas cartas na mão viradas pra baixo num flop K♦ 7♣ 2♠ — o momento em que um call de set mining é decidido](/images/holdem-button-dealer-board.webp "O flop decide um call de set mining: acerte seu two-outer 11,8% das vezes, ou folde e espere o próximo par")

**Você flopa um set (ou melhor) com um par na mão 11,8% das vezes — cerca de 1 em 8,5, ou 7,5 para 1 contra.** Esse é o número de projeto mais importante do jogo, porque é a base inteira do *set mining*: pagar um aumento com um par pequeno puramente pra flopar trinca.

De onde vem 11,8%? Segure um par na mão e sobram duas cartas no baralho que te pareiam. O flop são três cartas tiradas das 50 que você não vê. O jeito limpo de contar é ao contrário — a chance de você **errar** todas as três:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Passo | Conta |
|------|------|
| Flops que erram seu par | C(48,3) = 17.296 |
| Total de flops possíveis | C(50,3) = 19.600 |
| Chance de você errar | 17.296 ÷ 19.600 = 88,2% |
| **Chance de flopar um set** | **1 − 0,882 = 11,8%** |

</div>

### Quando o set mining realmente compensa

Flopar um set 11,8% das vezes significa que você **erra 88% das vezes** e folda. Pra lucrar, os 12% em que você acerta têm que pagar por todas as vezes que você erra. O ponto de equilíbrio é 7,5 para 1 — então se você paga pra fazer set mining, você quer que o pote mais o que dá pra ganhar nas ruas seguintes valha **pelo menos 7,5×** o seu call, e na prática ==g:15 para 1 ou mais== pra cobrir as vezes em que seu set não é pago ou é ultrapassado.

:::tip[A regra prática: só pague um aumento pra fazer set mining se os stacks efetivos forem mais ou menos 15-20× o preço do call. Stacks fundos fazem pares pequenos valerem ouro; stacks curtos os transformam em lixo. O par não mudou — as implied odds mudaram.]:::

Set mining é a jogada de [implied odds](/pt/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") mais pura que existe — uma chance minúscula de ganhar um pote grande depois. O framework completo — a fórmula, os múltiplos de stack projeto a projeto, e as reverse implied odds — está naquele guia.

Dois números relacionados que as pessoas perguntam:

- **Acertar um set até o river** (do preflop, vendo todas as cinco cartas da mesa) é ==**19,2%**== — 1 − C(48,5)/C(50,5). Maior que o número do flop porque você recebe mais duas cartas, mas você não pode contar em chegar ao river barato, e é por isso que o número do flop rege o set mining.
- **Set sobre set** — você flopa um set e perde pra um maior — não tem um número fixo único porque depende de quantos adversários têm pares, mas com dois jogadores segurando pares dá perto de ~1%. É o clássico cooler: a matemática esteve do seu lado o caminho todo.

---

## Odds de flush: feito vs projeto vs completar

![Ás-rei de copas com um flop dama-sete de copas no feltro verde, um flush draw de nove outs flopado ao lado de uma pilha curta de fichas](/images/holdem-drawing-odds-flush-draw.webp "Duas copas na mão, duas no flop — um flush draw, não um flush feito: 10,9% pra flopar, 35% pra completar até o river")

É aqui que os concorrentes borram três números completamente diferentes. Com duas cartas do mesmo naipe na mão, existem **três perguntas separadas**, e elas estão a uma ordem de grandeza de distância:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pergunta | Odds | A conta |
|:---|:---:|:---|
| Flopar um **flush feito** (3 do seu naipe) | 0,84% · 118 para 1 | C(11,3) ÷ C(50,3) = 165 ÷ 19.600 |
| Flopar um **flush draw** (mais 2 do seu naipe) | 10,9% · 8 para 1 | C(11,2)×39 ÷ C(50,3) = 2.145 ÷ 19.600 |
| **Completar** um flush draw flopado até o river | 35,0% · 1,9 para 1 | 1 − C(38,2) ÷ C(47,2) |

</div>

Então a frase honesta é: duas cartas do mesmo naipe flopam um **projeto** muito mais do que um flush feito, e esse projeto é um cara-ou-coroa de 35% pra chegar lá. Perseguir toda mão do mesmo naipe "pelo flush" ignora que você vai flopar o flush feito menos de uma vez a cada 100 mãos.

O número de completar se divide por rua, e isso importa no instante em que ainda há aposta:

- **Flop → river (as duas cartas):** 35,0% — use isso só quando você está all-in no flop.
- **Flop → turn (uma carta):** 9 ÷ 47 = 19,1%.
- **Turn → river (uma carta):** 9 ÷ 46 = 19,6%.

Um flush **backdoor** (runner-runner) — você flopa só *uma* carta extra do seu naipe e precisa que tanto o turn quanto o river sejam do seu naipe — sai por volta de 4,2%, valendo mais ou menos um out extra de equity. Não é motivo pra pagar, mas um desempate real em spots apertados. Pra transformar qualquer um desses num call-ou-fold, passe o número por [como calcular pot odds](/pt/blog/holdem-pot-odds).

---

## Odds de sequência: flopar uma vs ter projeto de uma

![Uma sequência de oito alto disposta em ordem no feltro verde, a mão pronta que um open-ended draw está perseguindo](/images/holdem-reading-straight-example.webp "Um open-ended straight draw completa por qualquer das pontas — oito outs, 31,5% pra completar até o river")

Conectoras como 8♠7♠ têm o próprio ciclo de vida. Você vai **flopar uma sequência feita só 1,3%** das vezes (76 para 1) — mais raro do que a maioria dos jogadores imagina. Bem mais frequente é flopar um **projeto**:

- **Open-ended straight draw (OESD):** ~10% dos flops com conectoras. Oito outs, completa **31,5%** até o river — 1 − C(39,2)/C(47,2) — ou 17% em qualquer carta única.
- **Gutshot (projeto de sequência por dentro):** quatro outs, completa **16,5%** até o river, 8,5% numa carta. Metade da equity de um open-ended, e é por isso que as mesmas conectoras jogam tão diferente dependendo do flop.

Repare que o OESD (31,5%) e o flush draw (35%) estão perto — os dois são "um projeto grande", os dois mais ou menos um terço pra acertar até o river. Esse é o atalho que vale internalizar: um projeto grande normal é cerca de ==**um em três**== pra completar até o river, e cai pra mais ou menos um em seis numa rua só.

---

## Flops raros: quadra, trinca, full house e straight flush

Esses são os números por trás das melhores (e piores) noites da sua vida no pôquer. Cada um é um problema limpo de combinatória sobre os 19.600 flops possíveis:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flopar isto | Mão | Odds | A conta |
|:---|:---|:---:|:---:|
| **Quadra** | Um par na mão | 0,245% · 407 para 1 | 48 ÷ 19.600 |
| **Full house** | Um par na mão | 0,98% · 101 para 1 | 192 ÷ 19.600 |
| **Trinca** | Duas cartas despareadas | 1,35% · 73 para 1 | 264 ÷ 19.600 |
| **Straight flush** | Conectoras do mesmo naipe | 0,02% · ~4.900 para 1 | 4 ÷ 19.600 |

</div>

Uma distinção crucial que as páginas do topo erram sempre: um **set** é um par na mão mais uma carta da mesa que combina (11,8%), enquanto **trinca** é uma carta *despareada* da mão que a mesa pareia duas vezes (1,35%). A mesma trinca no papel, odds e jogabilidade completamente diferentes — um set é disfarçado, a trinca é óbvia. Não deixe ninguém te dizer que são a mesma coisa.

O número do straight flush é o de emoldurar: com conectoras do mesmo naipe existem exatamente **quatro** flops que o fazem (uma sequência no seu naipe), então 4 ÷ 19.600 ≈ 1 em 4.900. É por isso que straight flushes flopados são histórias que as pessoas contam por uma década.

O número do full house conta cada jeito de o flop te dar um boat com um par na mão — incluindo os flops que vêm como trinca de outro valor por cima do seu par — e é por isso que dá 0,98% em vez dos ~0,73% mais estreitos que algumas tabelas citam pra "set mais um par na mesa" só.

---

## Odds de receber sua mão

Antes de tudo isso, tem a distribuição. Com **1.326 combinações possíveis de duas cartas**, aqui está com que frequência as mãos que as pessoas perguntam aparecem:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Receber isto | Odds | Com que frequência |
|:---|:---:|:---:|
| Par de ases (par específico) | 220 para 1 · 0,45% | 6 ÷ 1.326 |
| Qualquer par na mão | 16 para 1 · 5,9% | 78 ÷ 1.326 |
| A-K do mesmo naipe | 331 para 1 · 0,3% | 4 ÷ 1.326 |
| Duas cartas do mesmo naipe | 3,25 para 1 · 23,5% | quase toda 4ª mão |

</div>

O que surpreende as pessoas: se **você** tem ases numa mesa de 10 jogadores, a chance de um *segundo* jogador também ter ases é cerca de **1 em 136** (nove adversários, cada um 1 ÷ C(50,2) = 1/1.225). Raro, mas é exatamente o cooler ases-contra-ases que esvazia um stack e leva a culpa de software "viciado". É só o baralho. Pra saber quais dessas 1.326 mãos valem a pena jogar de cada assento, veja a [tabela de mãos iniciais por posição](/pt/blog/holdem-starting-hands-chart).

---

:::readnext[Continue lendo]
/pt/blog/holdem-outs | Como contar outs no pôquer | /images/holdem-outs-hero.webp
/pt/blog/holdem-pot-odds | Como calcular pot odds | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. Quais são as odds de flopar um set?**

A. Cerca de 11,8%, ou 1 em 8,5, quando você tem um par na mão — geralmente citado como "7,5 para 1 contra". Vem de 1 − C(48,3)/C(50,3): dos 19.600 flops possíveis, 17.296 erram seu par. Esse número é a base inteira pra saber se fazer set mining com um par pequeno é lucrativo.

**Q. Por que dizem 7,5 para 1 mas também 1 em 8?**

A. São as mesmas odds ditas de dois jeitos. "7,5 para 1 contra" conta erros contra acertos (7,5 erros pra cada acerto), o que dá 1 acerto a cada 8,5 tentativas — ou seja, cerca de 1 em 8,5, ou 11,8%. "Odds contra" e "1 em N" sempre descrevem a mesma probabilidade; não some os dois.

**Q. Qual a diferença entre um set e uma trinca?**

A. Um set é um par na mão mais uma carta que combina na mesa — você flopa 11,8% das vezes e fica bem escondido. Trinca é uma carta despareada da mão que a mesa pareia (duas cartas iguais na mesa) — só 1,35% no flop, e bem mais óbvia pros adversários. Mesmo valor de trinca, odds e valor bem diferentes.

**Q. Quais são as odds de flopar um flush?**

A. Apenas 0,84% (cerca de 118 para 1) com duas cartas do mesmo naipe — isso é C(11,3)/C(50,3). Não confunda com flopar um flush *draw*, que é 10,9%, ou *completar* esse projeto até o river, que é 35%. Duas cartas do mesmo naipe flopam um projeto treze vezes mais do que um flush feito.

**Q. Se eu flopar um flush draw, quais são as odds de completar?**

A. Cerca de 35% até o river com nove outs (1 − C(38,2)/C(47,2)) — um pouco melhor que um em três. Numa carta única é mais ou menos 19%: 9/47 flop-pro-turn, 9/46 turn-pro-river. Use o número de uma carta sempre que ainda houver aposta por vir.

**Q. Quais são as odds de flopar quadra?**

A. 0,245%, ou 407 para 1, segurando um par na mão — existem exatamente 48 flops (suas duas últimas cartas iguais mais qualquer terceira carta, C(48,1)) em 19.600. Flopar um straight flush é ainda mais raro, cerca de 1 em 4.900.

**Q. Quais são as odds de receber um par de ases?**

A. 220 para 1 (0,45%) pra ases especificamente — 6 das 1.326 combinações iniciais. Qualquer par na mão é bem mais comum, a 16 para 1 (5,9%). E se você tem ases numa mesa cheia, outro jogador também com ases é cerca de 1 em 136.

**Q. Quais são as odds de set sobre set?**

A. Não existe um número fixo único — depende de quantos adversários têm pares na mão — mas quando dois jogadores têm pares e ambos flopam sets é mais ou menos 1%. É o cooler máximo: você flopa um set só 11,8% das vezes pra começar, então dois de vocês fazendo isso na mesma mesa é uma história, não um erro.

---

## As 3 coisas pra lembrar

1. **Flopar um set: 11,8% (7,5 para 1).** O número que decide todo call de set mining — só pague fundo o bastante pra ser pago 15× ou mais quando você acerta.
2. **Feito vs projeto vs completar são números diferentes.** Duas cartas do mesmo naipe flopam um flush feito 0,84%, um flush draw 10,9%, e completam esse projeto 35%. Nunca cite o errado.
3. **Um projeto grande é cerca de um em três até o river.** Flush draw 35%, open-ended 31,5% — e mais ou menos um em seis numa rua só.

Cada número aqui vem direto do baralho, não de um palpite. Leve isso pra [como contar outs](/pt/blog/holdem-outs) pra montar o número em tempo real, depois [pot odds](/pt/blog/holdem-pot-odds) pra transformar num call ou fold — ou volte pra tabela completa de [odds e probabilidade do pôquer](/pt/blog/holdem-probability) pra ter todo número de mão feita e de tiro longo num lugar só.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds e Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de odds e probabilidade do pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Todo número de mão feita e de tiro longo num lugar só</div>
  </a>
  <a href="/pt/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds e Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como contar outs no pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Transforme essas odds numa contagem de outs ao vivo</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds e Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">O preço está certo pro seu projeto?</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Mãos Iniciais</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de mãos iniciais por posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Com quais pares e mãos do mesmo naipe vale a pena projetar</div>
  </a>
</div>
`.trim(),
};

export default POST;
