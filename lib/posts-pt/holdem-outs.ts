import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Como contar outs no poker — a habilidade por trás de todo call por odds",
  seoTitle: "Quantas cartas te salvam? — Como contar outs no poker",
  desc: "Contar outs é a habilidade que ninguém ensina primeiro. Aprenda rápido: uma tabela projeto a projeto, a conversão outs→odds e os outs sujos que custam dinheiro.",
  tldr: "Um out é qualquer carta que sobrou no baralho e melhora sua mão para uma provável vencedora. Conte-os e converta: multiplique os outs por 4 no flop ou por 2 no turn para a % aproximada de acertar. Um projeto de flush são 9 outs ≈ 36% até o river.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infográfico de contagem de outs — A♥ K♥ contra um flop Q♠ J♦ 9♥ onde qualquer 10 completa a sequência máxima (4 outs)",
  tags: ["outs", "como contar outs no poker", "tabela de outs poker", "outs de projeto de flush", "outs de projeto de sequencia", "outs para odds", "outs sujos", "regra do 2 e 4"],
  content: `
No meu primeiro ano na mesa eu "jogava meus projetos" sem nunca contá-los. Um projeto de flush e um gutshot pareciam a mesma coisa — ambos eram "cartas que podiam vir" — então eu pagava igual nos dois e me perguntava por que continuava perdendo. O conserto não foi um curso de estratégia. Foi um hábito de cinco minutos: ==parar e de fato contar as cartas que me salvam.==

Esse hábito se chama contar **outs** — [a verdadeira resposta do poker para "contar cartas"](/pt/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — e é a única habilidade que está na base de toda decisão de odds no poker. Antes de perguntar "esse call é lucrativo?" você tem que responder "quantas cartas ganham a mão para mim?" Este guia é a metade da contagem — a [tabela de odds e probabilidade do poker](/pt/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") é a referência por trás dela, e [pot odds](/pt/blog/holdem-pot-odds) é o que você faz com o número depois de tê-lo.

---

### Outs num relance

:::stripe
9 | Outs num projeto de flush
8 | Outs num projeto aberto de sequência
×4 / ×2 | Multiplique os outs no flop / turn para sua %
:::

---

## O que são outs no poker?

**Um out é qualquer carta que ainda está no baralho e transforma sua mão em uma provável vencedora.** Se você tem um projeto de flush, toda carta restante do seu naipe completa o flush — e cada uma é um out desde que esse flush de fato ganhe.

É a palavra "provável" que carrega o peso aí. Um out de verdade tem que de fato *vencer* a mão, não só melhorar suas cartas. Parear seu 10 quando já há um flush na mesa não é um out — você melhorou, mas continua perdendo. Aprender a contar outs é na verdade aprender a contar as cartas que vencem, e a ignorar as que só *parecem* úteis.

Tudo daí para frente — sua equity, suas [pot odds](/pt/blog/holdem-pot-odds), seu call-ou-fold — começa nesse único número. Erre a contagem de outs e todo cálculo depois dela também estará errado. E uma vez que você sabe a contagem, as [drawing odds](/pt/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") te dizem exatamente com que frequência cada projeto realmente chega lá.

---

## Como contar seus outs (passo a passo)

> **Resposta rápida**
> Conte as cartas não vistas que levam você à mão-alvo e depois tire os candidatos que ainda te deixariam perdendo. Parta do total do naipe ou do valor e subtraia as cartas já visíveis. Cada carta física entra na conta uma única vez, mesmo quando completa dois projetos diferentes.

![Um jogador com o ás e o rei de espadas estuda um flop baixo de três cartas no feltro verde, contando outs de overcard antes de agir](/images/holdem-outs-counting.webp "A-K num flop baixo é um spot clássico de contagem — seis outs de overcard, mais os backdoors")

Contar outs é uma rotina de três passos que você roda em todo projeto até virar automático:

:::steps
Nomeie seu projeto | Que mão você está caçando? Flush, sequência, um par maior, uma trinca — seja específico sobre o alvo
Conte as cartas que o completam | Há 13 de cada naipe e 4 de cada valor. Subtraia as que você já consegue ver (suas cartas + a mesa)
Elimine as falsas | Risque qualquer "out" que completa sua mão mas ainda perde — uma carta de flush que pareia a mesa, uma sequência que dá a alguém uma maior
:::

Pegue um projeto de flush: existem 13 cartas do seu naipe, você consegue ver **quatro** delas (duas na sua mão, duas na mesa), então ==g:13 − 4 = 9 outs==. Essa subtração — contar as que você *não pode* pegar porque já as tem na mão — é onde os iniciantes escorregam.

A contagem só usa cartas que você consegue ver. Você não subtrai as cartas desconhecidas do adversário; você trata toda carta não vista como ainda viva. É por isso que as contagens brutas abaixo são as mesmas seja o que for que os outros tenham na mão — elas são o ponto de partida, antes de você riscar os outs sujos mais adiante.

---

## Tabela de outs no poker: todo projeto comum

> **Resposta rápida**
> As contagens de partida padrão são nove para um projeto de flush, oito para um projeto aberto de sequência e quatro para um gutshot. Projetos combinados pedem o desconto da sobreposição. Overcards e projetos que não são para os nuts pedem outra checagem: essas contagens descrevem cartas que melhoram sua mão, e só as que provavelmente vencem merecem valor cheio.

![Duas contagens de outs lado a lado — treze espadas com quatro riscadas ao lado de um 9 grande, e uma sequência aberta com as duas pontas marcadas ao lado de um 8 grande](/images/holdem-outs-nine-and-eight.webp "À esquerda o projeto de flush, à direita o projeto aberto — as duas contagens de outs que servem de referência para todas as outras")

Use estas contagens brutas como ponto de partida e depois aplique as checagens de outs sujos mais abaixo:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Seu projeto | Outs | Por quê |
|:---|:---:|:---|
| Flush + projeto aberto | 15 | 9 de flush + 8 de sequência − 2 cartas compartilhadas — o monstro |
| Flush + gutshot | 12 | 9 de flush + 4 de gutshot − 1 carta compartilhada |
| Projeto de flush | 9 | 13 de um naipe − 4 que você vê |
| Projeto aberto de sequência | 8 | Quatro cartas em cada ponta |
| Duas overcards | 6 | Três de cada valor para parear |
| Um par → dois pares ou trinca | 5 | 3 para parear seu kicker + 2 para trincar |
| Gutshot (sequência interna) | 4 | Só um valor preenche o buraco |
| Uma overcard | 3 | Três cartas para fazer top pair |
| Par na mão → trinca | 2 | As duas últimas do seu valor |

</div>

Os dois projetos combinados no topo são onde os jogadores erram a conta, então eles ganham uma seção própria abaixo. Todo o resto é subtração direta: conte os valores ou naipes que completam sua mão, tire o que você consegue ver.

---

## Outs para odds: a tabela de conversão

> **Resposta rápida**
> Nove outs acertam a próxima carta depois do flop 19,1% das vezes, ou pelo menos uma vez até o river 35,0% das vezes. O segundo número inclui duas chances. Escolha a coluna de uma carta quando estiver precificando só o turn; a de duas cartas pressupõe que você verá o runout inteiro.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Flop → turn (1 carta) | Até o river (2 cartas) | Odds no river |
|:---|:---:|:---:|:---:|
| 2 | 4,3% | 8,4% | 11 para 1 |
| 4 | 8,5% | 16,5% | 5 para 1 |
| 6 | 12,8% | 24,1% | 3,1 para 1 |
| 8 | 17,0% | 31,5% | 2,2 para 1 |
| 9 | 19,1% | 35,0% | 1,9 para 1 |
| 12 | 25,5% | 45,0% | 1,2 para 1 |
| 15 | 31,9% | 54,1% | 0,85 para 1 |

</div>

Dois números importam para todo projeto. **"Até o river"** conta as duas cartas restantes e vale quando não pode haver mais apostas — você está all-in, ou pagou um all-in. **"Flop → turn"** conta só a próxima carta (9 ÷ 47 = 19,1%; do turn para o river vira 9 ÷ 46 = 19,6%) — use isso no momento em que ainda há aposta por vir, porque você só tem garantia de ver uma carta de cada vez. Iniciantes citam o número gordo do "até o river" enquanto encaram uma aposta no turn, se convencem a pagar, e pagam caro por isso.

Repare no monstro de 15 outs: com duas cartas por vir ele completa 54,1% das vezes — contra um único par, isso normalmente o torna **favorito**, o raro projeto com o qual você pode alegremente ir de all-in no flop. Contra um set, não: a mesa pode parear e completar o full house do set — o exemplo de J♠ 10♠ em 9♠ 8♣ 2♠ mais abaixo tem só cerca de 40% contra um par de noves.

---

## A regra do 2 e 4: outs → odds de cabeça

> **Resposta rápida**
> Com uma contagem de outs limpa, multiplicar por quatro estima a chance de acertar em duas cartas; multiplicar por dois estima uma carta. Esses atalhos ficam menos confiáveis conforme o projeto cresce. Eles estimam a chance de completar a mão, então contar uma carta que ainda perde não se corrige escolhendo o multiplicador certo.

- **No flop (duas cartas por vir):** outs ×4 ≈ sua % de acertar até o river.
- **No turn (uma carta por vir):** outs ×2 ≈ sua % de acertar no river.

Um projeto de flush são 9 outs. No flop: 9 × 4 = **36%** (valor real 35,0% — na mosca). No turn: 9 × 2 = **18%** (real 19,6% — perto o suficiente para agir).

:::tip[O atalho do ×4 assume em silêncio que você verá *as duas* cartas sem mais aposta — só garantido quando não pode haver mais apostas (você está all-in, ou pagou um all-in). Se há uma aposta na sua frente, use o número do ×2 (uma carta) para a street em que você realmente está.]:::

O ponto fraco principal são as **contagens altas de outs no flop**. O cálculo exato de duas cartas considera acertar em qualquer uma das streets sem contar duas vezes o acerto duplo. A estimativa do ×4 começa a ficar um pouco alta já com 7 outs, mas a diferença cresce com projetos maiores; a correção usual abaixo é usada para mais de 8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | A regra diz (×4) | Real até o river | Erra por |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31,5% | +0,5% |
| 9 | 36% | 35,0% | +1% |
| 12 | 48% | 45,0% | +3% |
| 15 | 60% | 54,1% | +6% |

</div>

O conserto certeiro para projetos grandes: para **mais de 8 outs no flop**, multiplique por 4 e depois subtraia *(outs − 8)*. Para 15 outs: (15 × 4) − 7 = **53%**, quase exato. Para os projetos do dia a dia de 8 outs ou menos, o ×4 e ×2 simples são tudo que você precisa. As derivações completas estão na [tabela de probabilidade](/pt/blog/holdem-probability).

---

## Projetos combinados: por que 9 + 8 não é 17

> **Resposta rápida**
> Um projeto de flush mais um projeto aberto de sequência tem 15 cartas distintas que completam a mão, não 17: duas cartas da sequência já pertencem ao naipe do flush. Um flush mais gutshot tem 12, porque uma carta se sobrepõe. Conte a união dos projetos e, à parte, desconte as cartas que ainda perderiam.

Digamos que você tenha ==b:J♠ 10♠== num flop ==9♠ 8♣ 2♠==. Você tem dois projetos empilhados: um projeto de flush (espadas) e um projeto aberto de sequência (qualquer Q ou 7 faz a sequência). Some ingenuamente e dá 9 + 8 = 17. Mas o **Q♠ e o 7♠** completam cada um *os dois* — o flush e a sequência — eles já estão dentro das 9 outs de flush. Conte-os uma vez:

- Outs de flush: **9** (toda espada)
- Outs de sequência que não são espadas: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Total: **15 outs**, não 17

Mesma lógica num **flush + gutshot**: 9 outs de flush + 4 cartas de gutshot, mas uma dessas quatro é do seu naipe → 9 + 3 = **12**. Sempre que dois projetos compartilham cartas, subtraia a sobreposição — uma carta no flush + gutshot, duas no flush + projeto aberto. Essa é a forma mais comum de contar demais, e é por isso que as linhas de projetos combinados na tabela ficam abaixo da soma simples.

---

## Outs sujos: as cartas que só parecem vitórias

> **Resposta rápida**
> Um out sujo (ou "contaminado") melhora sua mão sem colocá-la na frente de forma confiável. Cartas de flush em boards pareados, flushes baixos contra projetos de flush maiores e overcards contra mãos feitas fortes pedem, todas, um olhar crítico. Comece pela contagem bruta e reduza-a conforme as mãos plausíveis do adversário, em vez de pagar por toda melhora como se fosse vitória.

![Infográfico de um board pareado 10♠ 8♥ 4♠ 4♣ 6♦ separando outs limpos de outs sujos](/images/holdem-outs-dirty-outs.webp "Num board pareado alguns dos seus outs são sujos — acertar o flush ainda pode pagar um full house")

Três situações para treinar seu olho:

:::card
♠ | O flush que não é nut | Com 8♠7♠ em K♠9♠2♣, você tem 9 "outs" de espadas — mas se vier uma espada e um adversário estiver no mesmo projeto de flush com uma espada mais alta, você faz flush e ainda perde. Desconte seus outs quando você não está com projeto do nut flush
🂮 | O board pareado | Um projeto de flush num board tipo J♥8♥8♣ parece 9 outs limpos, mas o board já está pareado — um full house feito pode estar esperando, então algumas das suas cartas de flush já nascem mortas
🃁 | Overcards contra força | Duas overcards (A-K em Q-8-3) contam como 6 outs no papel, mas se um aumento grande grita trinca ou dois pares, parear seu ás muitas vezes não é bom — conte 3, talvez 4, não 6
:::

Você raramente sabe o desconto exato, e tudo bem. O movimento é direcional: quando a mesa ou a ação te diz que um out pode não vencer, corte a contagem *para baixo* antes de converter. Um jogador que conta 9 outs numa mesa pareada e paga uma aposta do tamanho do pote está pagando preço cheio por um projeto que na verdade vale seis. Ler quais outs são limpos é uma habilidade de textura de mesa — construa-a com [como ler a mesa](/pt/blog/holdem-reading-the-board).

---

:::readnext[Continue lendo]
/pt/blog/holdem-pot-odds | Como calcular pot odds | /images/holdem-pot-odds-hero.webp
/pt/blog/holdem-probability | Tabela de odds e probabilidade do poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. O que são outs no poker?**

A. Outs são as cartas que restam no baralho e melhoram sua mão para uma provável vencedora. Um projeto de flush tem 9 outs (as 9 cartas não vistas do seu naipe); um projeto aberto de sequência tem 8. Você as conta para descobrir sua chance de acertar e se um call é lucrativo.

**Q. O que significa ter 9 outs no poker?**

A. Significa que nove cartas ainda no baralho completam a sua mão — na maioria das vezes um projeto de flush (as 13 cartas de um naipe menos as 4 que você já vê). Nove outs dão cerca de 35% de chance de acertar até o river a partir do flop — um número de duas cartas, que pressupõe que não vem mais aposta — ou 19,1% na carta única do turn. A regra vale para qualquer contagem: mais outs significam mais chance de acertar, e multiplicar seus outs por 4 no flop (ou por 2 no turn) dá a porcentagem na hora.

**Q. Como se conta outs no poker?**

A. Nomeie a mão que você está caçando, conte quantas cartas a completam (13 de cada naipe, 4 de cada valor), subtraia as que você já consegue ver na sua mão e na mesa, depois risque qualquer out "sujo" que ainda perderia. Um projeto de flush são 13 − 4 = 9.

**Q. Quantos outs tem um projeto de flush?**

A. Nove. Há 13 cartas de cada naipe; com duas na sua mão e duas na mesa você vê quatro, sobrando 9 cartas não vistas que completam seu flush. Isso é cerca de 35% de acertar até o river a partir do flop, ou 19,1% só na próxima carta se ainda vier aposta.

**Q. Quantos outs tem um projeto aberto de sequência?**

A. Oito — quatro cartas em cada ponta completam a sequência. Um gutshot (sequência interna) tem só 4 outs porque apenas um valor preenche o buraco. Um duplo gutshot também tem 8, o mesmo que um projeto aberto.

**Q. O que é a regra do 2 e 4?**

A. Um atalho para transformar outs em porcentagem: no flop multiplique os outs por 4 para sua chance de acertar até o river; no turn multiplique por 2 para a carta do river. Nove outs de flush ≈ 36% no flop, 18% no turn. Use ×4 só quando você verá as duas cartas sem mais aposta.

**Q. O que são outs sujos ou contaminados?**

A. Cartas que completam sua mão mas ainda podem perder — uma carta de flush quando um flush maior é possível, uma carta de sequência que também faz uma sequência maior para alguém, ou overcards contra uma provável trinca. Desconte (ou não conte) os outs sujos antes de converter em odds, senão você superestima sua equity.

**Q. Quantos outs tem um projeto de flush mais um projeto de sequência?**

A. 15, não 17. Um projeto de flush são 9 outs e um projeto aberto de sequência são 8, mas duas das cartas de sequência também são do seu naipe e já estão contadas no flush — então você subtrai a sobreposição. Quinze outs é favorito para acertar até o river (cerca de 54%), mas só se você for ver as duas cartas; se ainda vier uma aposta no turn, quem precifica seu call é o número de uma carta, 32%.

**Q. Você conta as cartas do adversário ao contar outs?**

A. Não. Você só subtrai cartas que consegue de fato ver — suas cartas na mão e a mesa comunitária. Toda outra carta não vista é tratada como viva, e é por isso que as contagens brutas (9 para um flush, 8 para um projeto aberto) continuam as mesmas seja o que for que seus adversários tenham. Se cada uma dessas cartas de fato ganha ainda depende da mão deles — essa é a checagem dos outs sujos.

---

## As 3 coisas para lembrar

1. **Conte o que vence, não o que melhora.** Um out tem que fazer a *melhor* mão, não só uma melhor. Subtraia só as cartas que você consegue ver.
2. **Converta com o 4 e o 2.** Outs × 4 no flop, × 2 no turn. No flop, corte a estimativa do ×4 para projetos grandes (mais de 8 outs) subtraindo *(outs − 8)*.
3. **Desconte as sujas.** Flushes que não são nut, mesas pareadas e overcards contra força — todos encolhem sua contagem real de outs. Na dúvida, conte menos.

Acerte a contagem e o resto da matemática do poker se encaixa. Leve sua contagem de outs direto para [como calcular pot odds](/pt/blog/holdem-pot-odds) e veja se o preço está certo, ou volte para a [tabela completa de odds e probabilidade do poker](/pt/blog/holdem-probability) para o número exato por trás de cada projeto.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matemática</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Transforme sua contagem de outs num call-ou-fold</div>
  </a>
  <a href="/pt/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matemática</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tabela de odds e probabilidade do poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">A referência completa por trás de cada projeto</div>
  </a>
  <a href="/pt/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Leitura de Mesa</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Como ler a mesa</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Enxergue todo projeto e conte outs limpos</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Mãos Iniciais</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tabela de mãos iniciais por posição</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Entre em potes com mãos que valem a pena projetar</div>
  </a>
</div>
`.trim(),
};

export default POST;
