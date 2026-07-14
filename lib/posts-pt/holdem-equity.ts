import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Equity no pôquer explicada — Win %, fold equity e realização",
  seoTitle: "Seu Win % não é o que você fica — Equity no pôquer",
  desc: "Equity é sua fatia do pote — mas você nem sempre fica com ela. Por que 40% de equity não é 40% de vitórias, mais fold equity, realização e equity no all-in.",
  tldr: "Equity é sua fatia do pote — a porcentagem de vezes que sua mão ganha se todas as cartas forem distribuídas. Você paga quando sua equity supera as pot odds, mas posição e apostas fazem você raramente ficar com toda a sua equity — e a fold equity deixa você ganhar potes mesmo quando sua mão está atrás.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Dois jogadores em all-in com as cartas abertas no feltro verde, uma pilha de fichas no meio — o momento em que a equity de cada mão vira uma fatia real do pote",
  tags: ["equity poker", "o que e equity no poker", "fold equity", "realizacao de equity", "equity vs pot odds", "equity all in", "calculadora de equity poker", "como calcular equity poker"],
  content: `
Durante um ano eu achei que "equity" era só uma palavra pomposa para "quão provável é eu ganhar". Aí perdi três potes grandes numa noite em que eu era o favorito na entrada, e um jogador melhor me disse a frase que reformulou o jogo inteiro para mim: ==sua equity é o que você *tem direito*, não o que você *coleta*.== Você pode ter 40% de chance de ganhar uma mão e realizar quase nada dela — ou estar atrás e ainda assim imprimir dinheiro. Entender a diferença entre essas coisas é boa parte do que separa jogadores vencedores dos esperançosos.

==Equity é o único número que amarra todas as outras peças da matemática do pôquer — outs, pot odds, posição e agressão se resolvem numa só pergunta: que fatia deste pote é realmente minha?== Este guia cobre o que é equity, como estimá-la, e as três coisas que ninguém conta para iniciantes: por que você não fica com tudo, como um adversário que desiste te entrega um extra, e por que sua mão grande encolhe contra uma multidão.

As porcentagens brutas de vitória por trás de cada mão vêm da [tabela de odds e probabilidade no pôquer](/pt/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); este guia é como você transforma essas porcentagens em decisões na mesa.

---

### Equity num relance

:::stripe
pote × win% | Quanto sua mão vale agora
bruta × realização% | Quanto você de fato coleta
aposta ÷ (pote + aposta) | O % de fold que um blefe puro precisa
:::

---

## O que é equity no pôquer?

**Equity é sua fatia do pote — a porcentagem de vezes que sua mão ganha se a mão for jogada até o showdown.** Se o pote é $100 e você tem 60% de chance de ganhar, sua mão vale ==$60 agora==, mesmo que as fichas ainda não tenham sido empurradas.

Pense nela como sua fatia da pizza. Toda mão ainda viva tem uma fatia; as fatias sempre somam 100%. Quando você está heads-up com 70% de chance de ganhar um pote de $200, ==g:$140 dele são "seus"== no longo prazo — você não vai ganhar *este* pote 70% das vezes e perder o resto, mas ao longo de mil situações idênticas, essa é a fatia que você coleta.

Essa é a razão inteira de a equity importar: ela transforma "estou na frente?" em "quanto deste pote eu possuo?" — e esse é o número que você compara com o preço de um pagamento.

---

## Como estimar sua equity rápido

**Num projeto, multiplique seus outs por 4 no flop ou por 2 no turn; no pré-flop, memorize o punhado de confrontos que aparecem de novo e de novo.** Você quase nunca vai calcular a equity exata na mesa — você estima, e esses dois atalhos cobrem 90% das situações.

**Projetos (a Regra do 4 e 2):** conte seus [outs](/pt/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp"), depois multiplique. Um projeto de flush tem 9 outs → ==9 × 4 = 36%== no flop (valor real 35%). Os números exatos de cada projeto estão em [odds de projetos](/pt/blog/holdem-drawing-odds); aqui vai a referência rápida:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Projeto | Outs | Equity (2 cartas) |
|:---|:---:|:---:|
| Flush + sequência aberta | 15 | 54,1% |
| Projeto de flush | 9 | 35,0% |
| Sequência aberta (dois lados) | 8 | 31,5% |
| Sequência de dentro (gutshot) | 4 | 16,5% |

</div>

**Confrontos pré-flop (memorize estes):** no all-in antes do flop, as mesmas brigas se repetem. Aprenda estes e você vai saber na hora sua equity na maioria dos all-ins pré-flop.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Confronto | Equity | Tipo |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | Overpair domina |
| QQ vs AK | ~57% / ~43% | Par leva a "corrida" |
| 22 vs AK | ~52% / ~48% | O verdadeiro coin flip |
| AK vs AQ | ~73% / ~23% | Dominação (resto divide) |
| 88 vs A7 | ~70% / ~30% | Par vs uma overcard |

</div>

Duas coisas confundem as pessoas aqui. Um par contra duas overcards (QQ vs AK) ==r:não é um 50/50== — o par é um favorito modesto, algo como 57/43 offsuit (um pouco mais apertado, ~54/46, quando o AK é suited). E a expressão "coin flip" só serve mesmo para um par baixo contra duas cartas maiores (22 vs AK), onde é genuinamente equilibrado.

---

## Equity vs pot odds: a única regra que decide todo pagamento

**Pague quando sua equity for maior que suas pot odds — essa única comparação decide quase todo pagamento no pôquer.** As [pot odds](/pt/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") te dizem a equity que você *precisa* para empatar; a equity te diz o que você *tem*. Se você tem mais do que precisa, pagar dá lucro.

Encarando uma aposta de meio pote, suas pot odds exigem ==25%== para pagar. Um projeto de flush com duas cartas por vir tem ~35% de equity — 35 supera 25, então é um pagamento lucrativo. Essa é a decisão inteira, sem chute nenhum.

Mas aqui está o detalhe que quase todo guia pula: **"sua equity é igual à sua fatia do pote" só é verdade quando não há mais apostas.** No momento em que mais dinheiro pode entrar em ruas seguintes, 35% brutos não se traduzem automaticamente em 35% do pote final — você pode ser expulso do seu projeto, ou pagar quando acerta o segundo melhor. Essa diferença é exatamente onde entram as [implied odds](/pt/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (dinheiro que você vai ganhar depois) e a realização de equity (abaixo). Equity é onde a matemática *começa*, não onde ela termina.

---

## Fold equity: como você ganha potes quando sua mão está atrás

**Fold equity é a equity extra que você ganha da chance de o adversário foldar — é por isso que uma aposta pode ganhar um pote que sua mão sozinha perderia.** Quando você aposta, você tem duas formas de ganhar: seu adversário folda agora, ou paga e você ganha no showdown. Dar check só te dá a segunda.

:::compare
Apostando (agressão) | Dando check ou pagando (passivo)
Eles foldam agora → você ganha o pote | Sem fold equity — ninguém folda para um check
Eles pagam e você acerta → você ganha | Você acerta → você ganha
==g:Duas formas de ganhar== | ==r:Uma forma de ganhar==
:::

Para um ==blefe puro== sem chance de melhorar, o ponto de equilíbrio é simples: você precisa que seu adversário folde com frequência suficiente para cobrir o risco. Apostando $50 num pote de $100, sua taxa de fold de equilíbrio é ==aposta ÷ (pote + aposta) = 50 ÷ 150 = 33%==. Se eles foldam mais de um terço das vezes, apostar dá lucro — mesmo com a pior mão da mesa.

Agora acrescente um projeto, e fica muito melhor. Aqui está o quadro completo como um ==g:semi-blefe==: o pote é $100, você aposta $50 com um projeto de flush, seu adversário folda 40% das vezes, e quando ele paga você ainda tem 35% de equity para acertar até o river.

:::note
EV = (fold% × pote) + (pagar% × [equity × (pote + aposta) − (erro% × aposta)])
EV = (0,40 × $100) + (0,60 × [0,35 × $150 − 0,65 × $50])
EV = $40 + (0,60 × [$52,50 − $32,50]) = $40 + $12 = ==g:+$52==
:::

Apostar aquele projeto de flush vale ==+$52== versus dar check-fold — e a maior parte desse valor vem das vezes em que eles foldam, não das vezes em que você acerta. Isso é fold equity: a razão de a agressão vencer a passividade, e por que um projeto vale muito mais como aposta do que como pagamento.

---

## Realização de equity: por que 40% de equity não significa que você ganha 40%

**Realização de equity é quanto da sua equity bruta você de fato coleta — e geralmente é menos que 100%, porque posição e apostas te custam.** Seus "40% de chance de ganhar" assumem que você sempre chega ao showdown; na realidade você é expulso de projetos, forçado a foldar, e empurrado fora de posição. O que você fica é:

==b:Equity realizada = equity bruta × realização%==

Uma mão com 40% de equity bruta que só realiza 75% dela vale de verdade ==0,75 × 40% = 30%==. É por isso que você pode estar "na frente do range do adversário" e ainda perder dinheiro — você nunca consegue descontar a fatia inteira.

O que move sua realização para cima ou para baixo:

:::card
🪑 | Posição | Em posição você realiza *mais* que sua equity bruta (vê cartas de graça, controla o pote); fora de posição você realiza menos. Este é o maior fator
🎯 | Jogabilidade | Suited connectors e mãos que flopam projetos realizam bem; clunkers offsuit realizam mal mesmo com equity bruta decente
📚 | Profundidade de stack e habilidade | Stacks mais profundos e adversários mais duros deixam a equity marginal mais difícil de realizar
:::

Esta é a ideia mais importante que a maioria dos guias para iniciantes deixa de fora, e é por isso que a mesma mão joga de forma completamente diferente conforme a posição. Equity bruta é o teto; realização é o que você leva para casa.

---

## Equity no all-in: quando a equity bruta é tudo que importa

**Quando você está all-in, não há mais decisões — então você realiza 100% da sua equity, e a equity bruta vira a palavra final.** Toda complicação acima (posição, foldar, ser expulso da mão) desaparece, porque nenhuma aposta a mais pode acontecer. Seja qual for sua porcentagem de vitória, essa é exatamente a fatia do pote que você vai coletar ao longo do tempo.

É por isso que as equities de all-in pré-flop importam tanto: AA all-in contra KK embolsa seus ==82%== inteiros — sem imposto de realização, sem fold equity, só o número bruto se desenrolando. É também por isso que um "coin flip" (22 vs AK a ~52/48) é um verdadeiro cara-ou-coroa no all-in, mesmo que as mesmas duas mãos jogadas no pós-flop divergissem muito conforme a mesa e quem tem posição.

O all-in é o único ponto do pôquer onde a pizza é fatiada exatamente como a matemática diz — o que é tanto seu apelo quanto seu perigo.

---

## Equity multiway: por que sua mão grande encolhe contra uma multidão

**Sua equity cai rápido em potes multiway, porque a mesma pizza de 100% agora é dividida entre mais mãos.** Um par de ases fica em torno de 85% heads-up, mas contra três adversários isso desliza para ==r:~64%==, e contra quatro para ~56% — ainda a melhor mão, mas não mais o esmagamento que parece. Em três mãos, a equity *tem média* de 33% por definição, porque três jogadores dividem um pote.

![Infográfico de uma mesa Q♣ 9♥ 5♦ 3♠ J♦ mostrando como cada jogador extra no pote corta a equity de todas as mãos](/images/holdem-equity-multiway.webp "Quanto mais jogadores ainda no pote, menor a fatia de cada um — até um par de ases")

Duas coisas pioram multiway, não só sua fatia bruta:

- **A fold equity desaba.** Para ganhar um pote com uma aposta, agora *todo mundo* tem que foldar — muito menos provável com três adversários do que com um. Blefes e semi-blefes finos perdem valor rápido.
- **A realização cai.** Mais jogadores para agir significa mais formas de tomar um outdraw ou ser expulso da sua mão, então você realiza ainda menos de uma fatia já menor.

A lição prática: mãos que querem um pote multiway são as que fazem os nuts (trincas, suited aces para o nut flush), não pares grandes que jogam melhor heads-up. Quando o campo é grande, aperte na direção de mãos cuja equity se sustenta quando a pizza é cortada em cinco.

---

## Juntando tudo: como os pros de fato usam equity na mesa

**Bons jogadores não calculam equity exata — eles rodam uma estimativa rápida de quatro passos que soma realização e fold equity em cima do número bruto.** Aqui está o processo de pensamento, na ordem em que ele de fato acontece:

:::steps
Estime a equity bruta | Outs × 4 ou × 2 para projetos; lembre o confronto no pré-flop
Desconte pela realização | Fora de posição ou difícil de jogar? Corte um pouco — 40% brutos podem ser 30% reais
Some a fold equity | Se você está apostando, com que frequência o vilão folda? Essa é equity extra que sua mão sozinha não tem
Compare com o preço | Equity realizada + fold equity vs suas pot odds → pagar, apostar ou foldar
:::

Naquela noite que mencionei lá no começo, eu estava fazendo o passo um e parando — contando minha equity bruta e ignorando que, fora de posição, contra um bom jogador, eu nunca a realizaria. Assim que comecei a descontar pela posição e a pensar nos folds *deles* em vez de só nas minhas cartas, os vazamentos se fecharam. Equity não é um número que você consulta; é uma lente pela qual você passa toda decisão.

---

:::readnext[Continue lendo]
/pt/blog/holdem-pot-odds | Como calcular pot odds | /images/holdem-pot-odds-hero.webp
/pt/blog/holdem-implied-odds | Implied odds — quando um preço ruim é um bom pagamento | /images/holdem-implied-odds-hero.webp
:::

## FAQ

**Q. O que é equity no pôquer?**

A. Equity é sua fatia do pote — a porcentagem de vezes que sua mão ganha se a mão vai ao showdown. Se o pote é $100 e você tem 60% de chance de ganhar, sua equity vale $60. É o número central que você compara com o preço de um pagamento para decidir se continua.

**Q. Como calcular equity no pôquer?**

A. Para projetos, use a Regra do 4 e 2: multiplique seus outs por 4 no flop (duas cartas por vir) ou por 2 no turn. Nove outs de flush ≈ 36% no flop. No pré-flop, memorize confrontos comuns (AA vs KK é 82/18). Para números exatos, os jogadores usam calculadoras de equity longe da mesa para estudar — você estima enquanto joga.

**Q. Qual a diferença entre equity e pot odds?**

A. Equity é sua chance de ganhar (o que você tem); pot odds são a equity que você precisa para empatar num pagamento (o que o preço exige). A regra é simples: pague quando sua equity for maior que suas pot odds. As pot odds vêm do tamanho da aposta; a equity vem da sua mão e da mesa.

**Q. 50% de equity é bom no pôquer?**

A. Não é nem bom nem ruim por si só — 50% é um coin flip. Se é um pagamento depende do preço: contra uma aposta de meio pote você só precisa de 25%, então 50% é um pagamento fácil; mas arriscar seu stack inteiro como azarão de 50/50 por nada é aposta, não vantagem. Equity só faz sentido ao lado das pot odds.

**Q. De quanta fold equity eu preciso para blefar com lucro?**

A. Para um blefe puro, você precisa que seu adversário folde ao menos aposta ÷ (pote + aposta) das vezes. Apostar $50 em $100 dá 50 ÷ 150 = 33%. Se você também tem um projeto (um semi-blefe), precisa que eles foldem menos ainda, porque você ainda pode ganhar quando pago. É por isso que semi-blefar projetos é tão lucrativo.

**Q. O que é realização de equity?**

A. Realização de equity é quanto da sua equity bruta você de fato coleta. Equity realizada = equity bruta × realização%. Uma mão com 40% de equity bruta que realiza 75% vale de verdade 30%. Posição é o maior motor — em posição você realiza mais, fora de posição menos — e é por isso que a mesma mão vale mais no button do que nos blinds.

**Q. O que é equity no all-in?**

A. Equity no all-in é simplesmente sua porcentagem bruta de vitória quando nenhuma aposta a mais pode acontecer. Como não há decisões futuras, você realiza 100% dela, então a equity bruta vira a fatia exata do pote que você coleta ao longo do tempo. É o único ponto onde "equity é igual à fatia do pote" é literalmente verdade.

**Q. Por que minha equity cai em potes multiway?**

A. Porque o mesmo pote de 100% agora é dividido entre mais mãos — um par de ases a ~85% heads-up cai para ~64% contra três jogadores e ~56% contra quatro. Multiway também corta sua fold equity (todo mundo tem que foldar, não só um jogador) e sua realização (mais jogadores significam mais formas de tomar outdraw), então tanto sua fatia bruta quanto o que você fica dela encolhem.

---

## As 3 coisas para lembrar

1. **Equity é sua fatia do pote** — win% × tamanho do pote. Pague quando ela supera suas pot odds. Essa comparação é a espinha dorsal de toda decisão.
2. **Você raramente fica com tudo.** Equity realizada = bruta × realização%, e posição é o maior fator. Equity bruta é o teto, não o pagamento.
3. **Agressão fabrica equity.** Fold equity deixa uma aposta ganhar potes que sua mão perderia — mas ela desaba multiway, onde você precisa que todo mundo folde.

Domine isso e o resto da matemática do pôquer se encaixa. Daqui, transforme equity em pagamentos corretos com o [guia de pot odds](/pt/blog/holdem-pot-odds), ou veja como stacks profundos mudam o quadro com as [implied odds](/pt/blog/holdem-implied-odds).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de odds e probabilidade no pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As porcentagens brutas de vitória por trás de cada mão</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">O preço que sua equity precisa superar</div>
  </a>
  <a href="/pt/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Implied odds explicadas</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que equity não é sua fatia final do pote</div>
  </a>
</div>
`.trim(),
};

export default POST;
