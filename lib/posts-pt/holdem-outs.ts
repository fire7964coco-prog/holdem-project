import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Como contar outs no pôquer — a habilidade por trás de todo call por odds",
  seoTitle: "Quantas cartas te salvam de verdade? — Contando outs no pôquer",
  desc: "Contar outs é a habilidade que ninguém ensina primeiro. Aprenda rápido: uma tabela projeto a projeto, a conversão outs→odds e os outs sujos que custam dinheiro.",
  tldr: "Um out é qualquer carta que sobrou no baralho e melhora sua mão para uma provável vencedora. Conte-os e converta: multiplique os outs por 4 no flop ou por 2 no turn para a % aproximada de acertar. Um projeto de flush são 9 outs ≈ 36% até o river.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infográfico de contagem de outs — A♥ K♥ contra um flop Q♠ J♦ 9♥ onde qualquer 10 completa a sequência máxima (4 outs)",
  tags: ["outs", "como contar outs no poker", "tabela de outs poker", "outs de projeto de flush", "outs de projeto de sequencia", "outs para odds", "outs sujos", "regra do 2 e 4"],
  content: `
No meu primeiro ano na mesa eu "jogava meus projetos" sem nunca contá-los. Um projeto de flush e um gutshot pareciam a mesma coisa — ambos eram "cartas que podiam vir" — então eu pagava igual nos dois e me perguntava por que continuava perdendo. O conserto não foi um curso de estratégia. Foi um hábito de cinco minutos: ==parar e de fato contar as cartas que me salvam.==

Esse hábito se chama contar **outs** — [a verdadeira resposta do pôquer para "contar cartas"](/pt/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — e é a única habilidade que está por baixo de toda decisão de odds no pôquer. Antes de perguntar "esse call é lucrativo?" você tem que responder "quantas cartas ganham a mão para mim?" Este guia é a metade da contagem — a [tabela de odds e probabilidade do pôquer](/pt/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") é a referência por trás dela, e [pot odds](/pt/blog/holdem-pot-odds) é o que você faz com o número depois de tê-lo.

---

### Outs num relance

:::stripe
9 | Outs num projeto de flush
8 | Outs num projeto aberto de sequência
×4 / ×2 | Multiplique os outs no flop / turn para sua %
:::

---

## O que são outs no pôquer?

**Um out é qualquer carta que ainda está no baralho e transforma sua mão em uma provável vencedora.** Se você tem um projeto de flush, toda carta restante do seu naipe é um out — pegue uma e você tem um flush.

A palavra "provável" está trabalhando em silêncio aí. Um out de verdade tem que de fato *vencer* a mão, não só melhorar suas cartas. Parear seu 10 quando já há um flush na mesa não é um out — você melhorou, mas continua perdendo. Aprender a contar outs é na verdade aprender a contar as cartas que vencem, e a ignorar as que só *parecem* úteis.

Tudo daí para frente — sua equity, suas [pot odds](/pt/blog/holdem-pot-odds), seu call-ou-fold — começa nesse único número. Erre a contagem de outs e todo cálculo depois dela também estará errado. E uma vez que você sabe a contagem, as [drawing odds](/pt/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") te dizem exatamente com que frequência cada projeto realmente chega lá.

---

## Como contar seus outs (passo a passo)

![Um jogador com o ás e o rei de espadas estuda um flop baixo de três cartas no feltro verde, contando outs de overcard antes de agir](/images/holdem-outs-counting.webp "A-K num flop baixo é um spot clássico de contagem — seis outs de overcard, mais os backdoors")

Contar outs é uma rotina de três passos que você roda em todo projeto até virar automático:

:::steps
Nomeie seu projeto | Que mão você está caçando? Flush, sequência, um par maior, uma trinca — seja específico sobre o alvo
Conte as cartas que o completam | Há 13 de cada naipe e 4 de cada valor. Subtraia as que você já consegue ver (suas cartas + a mesa)
Elimine as falsas | Risque qualquer "out" que completa sua mão mas ainda perde — uma carta de flush que pareia a mesa, uma sequência que dá a alguém uma maior
:::

Pegue um projeto de flush: existem 13 cartas do seu naipe, você consegue ver **quatro** delas (duas na sua mão, duas na mesa), então ==g:13 − 4 = 9 outs==. Essa subtração — contar as que você *não pode* pegar porque já as tem na mão — é onde os iniciantes escorregam.

A contagem só usa cartas que você consegue ver. Você não subtrai as cartas desconhecidas do adversário; você trata toda carta não vista como ainda viva. É por isso que as contagens de outs padrão abaixo se sustentam independentemente do que qualquer outro tenha na mão.

---

## Tabela de outs no pôquer: todo projeto comum

![Uma sequência de oito alto disposta em ordem no feltro verde, mostrando a fileira de cartas que um projeto aberto está caçando](/images/holdem-reading-straight-example.webp "Um projeto aberto de sequência completa por qualquer das duas pontas — oito outs, o segundo maior projeto comum")

Memorize estas e você reconhecerá sua contagem de outs de bate-pronto. Esta é a tabela que todo jogador vencedor tem gravada na memória:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Seu projeto | Outs | Por quê |
|:---|:---:|:---|
| Flush + projeto aberto | 15 | O monstro — dois projetos de uma vez |
| Projeto de flush | 9 | 13 de um naipe − 4 que você vê |
| Projeto aberto de sequência | 8 | Quatro cartas em cada ponta |
| Flush + gutshot | 12 | 9 de flush + 4 de gutshot − 1 carta compartilhada |
| Dois overcards | 6 | Três de cada valor para parear |
| Um par → dois pares ou trinca | 5 | 3 para parear seu kicker + 2 para trincar |
| Gutshot (sequência interna) | 4 | Só um valor preenche o buraco |
| Um overcard | 3 | Três cartas para fazer top pair |
| Par na mão → trinca | 2 | As duas últimas do seu valor |

</div>

Os dois projetos combinados no topo são onde os jogadores erram a conta, então eles ganham uma seção própria abaixo. Todo o resto é subtração direta: conte os valores ou naipes que completam sua mão, tire o que você consegue ver.

---

## Outs para odds: a tabela de conversão

Contar outs só é útil depois que você as transforma em uma porcentagem que dá para comparar com o preço que está sendo oferecido. Aqui está a tabela mestra — as odds de acertar até o river, mais as odds de uma carta para quando você já está no turn:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Só o turn (1 carta) | Até o river (2 cartas) | Odds no river |
|:---|:---:|:---:|:---:|
| 2 | 4,3% | 8,4% | 11 para 1 |
| 4 | 8,5% | 16,5% | 5 para 1 |
| 6 | 12,8% | 24,1% | 3,1 para 1 |
| 8 | 17,0% | 31,5% | 2,2 para 1 |
| 9 | 19,1% | 35,0% | 1,9 para 1 |
| 12 | 25,5% | 45,0% | 1,2 para 1 |
| 15 | 31,9% | 54,1% | 0,85 para 1 |

</div>

Dois números importam para todo projeto. **"Até o river"** conta as duas cartas restantes e vale quando você está all-in no flop sem mais nada para apostar. **"Só o turn"** conta só a próxima carta — use isso no momento em que ainda há aposta por vir, porque você só tem garantia de ver uma carta de cada vez. Iniciantes citam o número gordo do "até o river" enquanto encaram uma aposta no turn, se convencem a pagar, e pagam caro por isso.

Repare no monstro de 15 outs: com duas cartas por vir ele é na verdade **favorito** (54,1%), o raro projeto com o qual você pode alegremente ir de all-in no flop.

---

## A regra do 2 e 4: outs → odds de cabeça

Você não consegue levar aquela tabela para a mesa, então use o atalho em que todo jogador se apoia:

- **No flop (duas cartas por vir):** outs ×4 ≈ sua % de acertar até o river.
- **No turn (uma carta por vir):** outs ×2 ≈ sua % de acertar no river.

Um projeto de flush são 9 outs. No flop: 9 × 4 = **36%** (valor real 35,0% — na mosca). No turn: 9 × 2 = **18%** (real 19,6% — perto o suficiente para agir).

:::tip[O atalho do ×4 assume em silêncio que você verá *as duas* cartas sem mais aposta — só verdade quando você já está all-in. Se há uma aposta na sua frente, use o número do ×2 (uma carta) para a street em que você realmente está.]:::

Há um lugar em que a regra mente: **contagens altas de outs no flop.** Como o ×4 conta em dobro a pequena chance de acertar nas *duas* streets, ele estoura assim que você passa de ~8 outs.

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

Os projetos grandes confundem as pessoas porque você não pode simplesmente somar as duas contagens de outs — algumas cartas fazem serviço duplo, e contá-las duas vezes infla sua equity.

Digamos que você tenha ==b:J♠ 10♠== num flop ==9♠ 8♣ 2♠==. Você tem dois projetos empilhados: um projeto de flush (espadas) e um projeto aberto de sequência (qualquer Q ou 7 faz a sequência). Some ingenuamente e dá 9 + 8 = 17. Mas o **Q♠ e o 7♠** completam cada um *os dois* — o flush e a sequência — eles já estão dentro das 9 outs de flush. Conte-os uma vez:

- Outs de flush: **9** (toda espada)
- Outs de sequência que não são espadas: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Total: **15 outs**, não 17

Mesma lógica num **flush + gutshot**: 9 outs de flush + 4 cartas de gutshot, mas uma dessas quatro é do seu naipe → 9 + 3 = **12**. Sempre que dois projetos compartilham uma carta, subtraia a sobreposição. Essa é a forma mais comum de contar demais, e é por isso que as linhas de projetos combinados na tabela parecem "uma a menos" que a soma.

---

## Outs sujos: as cartas que só parecem vitórias

![Infográfico de uma mesa pareada 10♠ 8♥ 4♠ 4♣ 6♦ separando outs limpos de outs sujos](/images/holdem-outs-dirty-outs.webp "Numa mesa pareada alguns dos seus outs são sujos — acertar o flush ainda pode pagar um full house")

Esta é a seção que a maioria dos guias pula, e é a que de fato economiza dinheiro. Um **out sujo** (ou "contaminado") é uma carta que completa sua mão mas ainda pode perder — então contá-lo no valor cheio superestima sua equity. Jogadores vencedores contam os outs brutos, depois *descontam* os sujos antes de recorrer à regra do 2 e 4.

Três situações para treinar seu olho:

:::card
♠ | O flush que não é nut | Com 8♠7♠ em K♠9♠2♣, você tem 9 "outs" de espadas — mas se vier uma espada e um adversário tiver uma espada maior, você faz flush e ainda perde. Desconte seus outs quando você não está com projeto do nut flush
🂮 | A mesa pareada | Um projeto de flush numa mesa tipo J♥8♥8♣ parece 9 outs limpos, mas a mesa já está pareada — um full house feito pode estar esperando, então algumas das suas cartas de flush já nascem mortas
🃁 | Overcards contra força | Dois overcards (A-K em Q-8-3) contam como 6 outs no papel, mas se um aumento grande grita trinca ou dois pares, parear seu ás muitas vezes não é bom — conte 3, talvez 4, não 6
:::

Você raramente sabe o desconto exato, e tudo bem. O movimento é direcional: quando a mesa ou a ação te diz que um out pode não vencer, corte a contagem *para baixo* antes de converter. Um jogador que conta 9 outs numa mesa pareada e paga o pote está pagando preço cheio por um projeto que em silêncio vale seis. Ler quais outs são limpos é uma habilidade de textura de mesa — construa-a com [como ler a mesa](/pt/blog/holdem-reading-the-board).

---

:::readnext[Continue lendo]
/pt/blog/holdem-pot-odds | Como calcular pot odds | /images/holdem-pot-odds-hero.webp
/pt/blog/holdem-probability | Tabela de odds e probabilidade do pôquer | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. O que são outs no pôquer?**

A. Outs são as cartas que restam no baralho e melhoram sua mão para uma provável vencedora. Um projeto de flush tem 9 outs (as 9 cartas não vistas do seu naipe); um projeto aberto de sequência tem 8. Você as conta para descobrir sua chance de acertar e se um call é lucrativo.

**Q. Como se conta outs no pôquer?**

A. Nomeie a mão que você está caçando, conte quantas cartas a completam (13 de cada naipe, 4 de cada valor), subtraia as que você já consegue ver na sua mão e na mesa, depois risque qualquer out "suja" que ainda perderia. Um projeto de flush são 13 − 4 = 9.

**Q. Quantos outs tem um projeto de flush?**

A. Nove. Há 13 cartas de cada naipe; com duas na sua mão e duas na mesa você vê quatro, sobrando 9 cartas não vistas que completam seu flush. Isso é cerca de 35% de acertar até o river a partir do flop.

**Q. Quantos outs tem um projeto aberto de sequência?**

A. Oito — quatro cartas em cada ponta completam a sequência. Um gutshot (sequência interna) tem só 4 outs porque apenas um valor preenche o buraco. Um duplo gutshot também tem 8, o mesmo que um projeto aberto.

**Q. O que é a regra do 2 e 4?**

A. Um atalho para transformar outs em porcentagem: no flop multiplique os outs por 4 para sua chance de acertar até o river; no turn multiplique por 2 para a carta do river. Nove outs de flush ≈ 36% no flop, 18% no turn. Use ×4 só quando você verá as duas cartas sem mais aposta.

**Q. O que são outs sujos ou contaminados?**

A. Cartas que completam sua mão mas ainda podem perder — uma carta de flush quando um flush maior é possível, uma carta de sequência que também faz uma sequência maior para alguém, ou overcards contra uma provável trinca. Desconte (ou não conte) os outs sujos antes de converter em odds, senão você superestima sua equity.

**Q. Quantos outs tem um projeto de flush mais um projeto de sequência?**

A. 15, não 17. Um projeto de flush são 9 outs e um projeto aberto de sequência são 8, mas duas das cartas de sequência também são do seu naipe e já estão contadas no flush — então você subtrai a sobreposição. Quinze outs é favorito para acertar até o river (cerca de 54%).

**Q. Você conta as cartas do adversário ao contar outs?**

A. Não. Você só subtrai cartas que consegue de fato ver — suas cartas na mão e a mesa comunitária. Toda outra carta não vista é tratada como viva, e é por isso que as contagens de outs padrão (9 para um flush, 8 para um projeto aberto) valem não importa o que seus adversários tenham.

---

## As 3 coisas para lembrar

1. **Conte o que vence, não o que melhora.** Um out tem que fazer a *melhor* mão, não só uma melhor. Subtraia só as cartas que você consegue ver.
2. **Converta com o 4 e o 2.** Outs × 4 no flop, × 2 no turn. Corte a estimativa para projetos grandes (mais de 8 outs) subtraindo *(outs − 8)*.
3. **Desconte as sujas.** Flushes que não são nut, mesas pareadas e overcards contra força — todos encolhem sua contagem real de outs. Na dúvida, conte menos.

Acerte a contagem e o resto da matemática do pôquer se encaixa. Leve sua contagem de outs direto para [como calcular pot odds](/pt/blog/holdem-pot-odds) e veja se o preço está certo, ou volte para a [tabela completa de odds e probabilidade do pôquer](/pt/blog/holdem-probability) para o número exato por trás de cada projeto.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Transforme sua contagem de outs num call-ou-fold</div>
  </a>
  <a href="/pt/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de odds e probabilidade do pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A referência completa por trás de cada projeto</div>
  </a>
  <a href="/pt/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Leitura de Mesa</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como ler a mesa</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Enxergue todo projeto e conte outs limpos</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Mãos Iniciais</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de mãos iniciais por posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Entre em potes com mãos que valem a pena projetar</div>
  </a>
</div>
`.trim(),
};

export default POST;
