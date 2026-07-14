import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "O que é ICM no pôquer? O Independent Chip Model explicado",
  seoTitle: "Suas fichas não valem o valor de face — ICM no pôquer",
  desc: "Num torneio suas fichas não são dinheiro — ganhar só paga o 1º lugar. O ICM (Independent Chip Model) transforma seu stack em prêmio real. Veja como funciona.",
  tldr: "O ICM (Independent Chip Model) converte seu stack de fichas de torneio no seu valor real em premiação, usando os payouts e os stacks de todo mundo. Como você só ganha um primeiro prêmio, dobrar suas fichas nunca dobra seu dinheiro — então o stack do chip leader vale menos do que sua fatia de fichas, e os short stacks valem mais. Essa diferença é o motivo de você foldar na bubble mãos que seriam calls fáceis num cash game.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Fichas de pôquer empilhadas na final table diante de uma escada de payout, mostrando que um stack maior de fichas não se converte um-para-um numa fatia maior da premiação",
  tags: ["poker icm", "o que é icm no poker", "significado de icm no poker", "icm vs chip ev", "icm deal", "chip chop vs icm", "como calcular icm", "estratégia de icm no poker"],
  content: `
A primeira vez que o ICM me custou dinheiro, eu nem sabia que ele existia. Sobravam quatro de nós, três ganhavam prêmio, e eu olhei para baixo e vi um par de valetes com um stack mediano. Dei shove, o chip leader pagou com ás-dez e eu bustei na bubble sem levar nada. ==Num cash game esse shove tá de boa. Naquela bubble foi um desastre== — e o motivo é a ideia mais importante de todo o pôquer de torneio.

==Fichas num torneio não são dinheiro. Você só ganha *um* primeiro prêmio, então dobrar seu stack nunca dobra o quanto você realmente vale.== O ICM — o Independent Chip Model — é a matemática que transforma sua pilha de fichas nos dólares reais que ela representa, e quando você enxerga isso, calls e folds que pareciam errados de repente fazem sentido. Este guia te leva de "o que significa ICM" até a divisão de um deal de final table, com cada número resolvido para você conferir na mão.

O ICM vive dentro do [jogo de torneio](/pt/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") especificamente — é por isso que o MTT nas fases finais não se parece em nada com um cash game.

---

### ICM num relance

:::stripe
fichas ≠ dinheiro | Você ganha só um primeiro prêmio
chip leader | vale MENOS que sua fatia de fichas
short stack | vale MAIS que sua fatia de fichas
:::

---

## O que é ICM no pôquer?

**O ICM (o Independent Chip Model) converte um stack de fichas no seu valor real em premiação, usando os payouts restantes e o tamanho do stack de cada jogador.** Ele responde uma pergunta: ==se o torneio acabasse agora com esses stacks, quanto a minha fatia da premiação realmente vale em dólares?==

Ele funciona estimando com que frequência cada jogador termina em cada posição paga — primeiro, segundo, terceiro e assim por diante — a partir da sua fatia de fichas, e depois multiplicando essas probabilidades pelos payouts. Quanto maior o seu stack, mais vezes você termina no alto; mas como ==o prêmio do topo é limitado, fichas extras compram cada vez menos dinheiro.==

A virada mental chave: num cash game uma ficha é um dólar, ponto final. Num torneio uma ficha é um *bilhete de loteria* sobre um conjunto fixo de prêmios. O ICM precifica esse bilhete. Ele se aplica só a torneios e sit-and-gos — [nunca a cash games](/pt/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), onde suas fichas já valem o valor de face.

---

## Por que suas fichas não valem o valor de face em dinheiro

**Porque a premiação é "pesada no topo" e travada abaixo de você.** Digamos que três prêmios pagam $50 / $30 / $20. No momento em que você entra no dinheiro, você está garantido a pelo menos $20 — então as fichas que protegem esses $20 são preciosas, enquanto as fichas indo atrás do primeiro lugar perseguem um prêmio que você só pode ganhar uma vez.

Isso faz a curva de fichas-para-dinheiro ==entortar==: as primeiras fichas (sobrevivência) valem muito, as últimas fichas (indo pela vitória) valem menos. Um jogador com metade das fichas não é dono de metade da premiação — ele é dono de bem menos, porque não pode terminar melhor que primeiro mas *pode* ainda bustar.

Vire ao contrário e o short stack é o vencedor dessa matemática. Ele já tem um direito real sobre os pay jumps abaixo dele, então ==cada uma das suas fichas vale mais que o valor de face==. Essa única assimetria — stack grande supervalorizado em fichas, short stack subvalorizado — comanda toda decisão de ICM que você vai tomar na vida.

---

## Como o ICM é calculado? (O modelo Malmuth–Harville)

**O ICM atribui a cada jogador a probabilidade de terminar em cada posição baseada puramente no tamanho do stack, e depois multiplica pelos payouts.** O método costuma ser chamado de modelo Malmuth–Harville — a matemática das probabilidades de colocação vem do trabalho de David Harville nos anos 1970 sobre odds de corrida de cavalos, que Mason Malmuth aplicou ao pôquer.

A regra é simples e recursiva:

- Sua chance de terminar em **1º** = seu stack ÷ total de fichas.
- Sua chance de terminar em **2º** = a soma, sobre cada outro jogador que poderia terminar em 1º, de (a chance dele de vencer) × (seu stack ÷ as fichas que sobram sem ele).
- Continue assim para cada posição abaixo.

Vamos fazer de verdade. Sobram três jogadores, os prêmios são ==$50 / $30 / $20== (pool de $100), e os stacks são:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Colocação | Leader (5.000 · 50%) | Middle (3.000 · 30%) | Short (2.000 · 20%) |
|:--|:--:|:--:|:--:|
| 1º | 50,0% | 30,0% | 20,0% |
| 2º | 33,9% | 37,5% | 28,6% |
| 3º | 16,1% | 32,5% | 51,4% |

</div>

Pegue o número de 2º lugar do leader para você ver a recursão: se o Middle vence o primeiro (30% das vezes), o leader então fica com 5.000 das 7.000 fichas restantes = 71,4%, e 0,30 × 0,714 = 21,4%; se o Short vence o primeiro (20%), o leader fica com 5.000 de 8.000 = 62,5%, e 0,20 × 0,625 = 12,5%. Some: ==33,9%== das vezes o leader termina em 2º.

Agora multiplique cada linha pelos payouts e você tem o valor em dólares de cada stack:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jogador | % de fichas | Valor ICM | % ICM | vs fichas |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50,0% | ==$38,39== | 38,4% | ==r:−11,6== |
| Middle | 30,0% | $32,75 | 32,8% | ==g:+2,8== |
| Short | 20,0% | $28,86 | 28,9% | ==g:+8,9== |

</div>

Lá está em números: o leader tem ==metade das fichas mas só 38,4% do dinheiro==, enquanto os 20% de fichas do short stack valem 28,9%. Você não precisa fazer essa conta na mão na mesa — a [calculadora de ICM](/calculator) faz na hora — mas ver a máquina funcionando uma vez é o que faz a estratégia grudar.

---

## ICM vs chip EV — qual a diferença?

**O chip EV mede uma decisão em fichas ganhas ou perdidas; o ICM (ou "$EV") mede em premiação real. Eles concordam cedo e se separam feio no fim.** Cedo num torneio, com pay jumps pequenos e distantes, uma ficha é basicamente uma ficha — você joga [chip EV](/pt/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"), acumulando sem parar. Perto do dinheiro e na final table, o ICM assume.

O confronto clássico é um all-in marginal. No chip EV, um cara-ou-coroa por um pote grande pode ser ok ou até bom — você ganha tantas fichas quanto perde. No ICM pode ser um ==fold== claro, porque bustar te custa premiação travada que você não recupera, enquanto as fichas que você ganharia valem menos que o valor de face.

Foi exatamente esse o erro que cometi com aqueles valetes: um shove ótimo em chip EV, um shove perdedor em ICM. ==O chip EV pergunta "isso vai construir meu stack?" O ICM pergunta "isso vai construir minha bankroll?"== — e só o segundo paga de verdade.

---

## O "imposto do ICM": por que perder fichas dói mais do que ganhar ajuda

**O "imposto do ICM" é a diferença entre a sua porcentagem de fichas e a sua porcentagem real de dinheiro — valor que evapora no momento em que os stacks ficam pesados no topo.** No exemplo resolvido, as fichas do leader dizem 50% mas o dinheiro diz 38,4%: um ==imposto de ICM de 11,6 pontos== por ser o stack grande.

O imposto aparece em todo all-in como um **risk premium** — a equity extra que você precisa *além* do break-even do chip EV antes de um call ser de fato lucrativo em dólares. Se a matemática das fichas diz que você precisa de 40% para pagar, o ICM pode exigir 48-50%, porque o lado ruim (bustar, perder a equity dos pay jumps) supera o lado bom (fichas valendo menos que o valor de face).

O jogador que sente isso mais é o **stack médio na bubble** — grande o bastante para ter equity real a perder, não curto o bastante para ser forçado a entrar. Ele carrega o maior risk premium e deve jogar o mais tight. O stack grande carrega o *menor* risk premium, que é o motor inteiro por trás da pressão de ICM.

---

![Um stack médio de torneio foldando ao shove de um stack grande na bubble do dinheiro, fichas e uma escada de payout à vista — o momento em que a pressão de ICM transforma um call normal num fold](/images/holdem-icm-pressure.webp "Pressão de ICM: o stack médio folda porque bustar custa premiação travada que as fichas não podem comprar de volta")

## Bubble factor & risk premium: como o ICM muda seus shoves e calls

**O "bubble factor" mede o quanto perder suas fichas te custa mais do que ganhar as mesmas fichas te ajuda — e ele dispara logo antes de cada pay jump.** Um bubble factor de 1,0 significa que fichas e dinheiro se movem juntos (início de jogo). Um bubble factor de 1,5 significa que um pote perdido dói 1,5× mais do que um pote idêntico ganho ajuda — então você precisa de uma vantagem bem maior para se envolver.

Duas regras práticas saem disso:

- **Stack grande: ataque.** Seu risk premium baixo te deixa [abrir e dar 3-bet](/pt/blog/holdem-3bet) sem parar contra jogadores que não podem pagar sem arriscar a vida no torneio. Isso é "aplicar pressão de ICM", e é a forma mais confiável de ganhar fichas numa final table.
- **Stacks médio e short: aperte seu range de call, mas continue sendo o primeiro a dar shove.** Ser quem move all-in (com fold equity) é muito melhor do que ser quem tem que pagar. Sob pressão, seu range de call deve encolher forte enquanto seu range de open-shove segue agressivo.

O assento pesadelo é o stack médio recebendo o shove — foldando mãos tão fortes quanto algumas que você pagaria na hora num cash game. Isso não é fraqueza; isso é ICM.

---

## ICM deal vs chip chop: como dividir a premiação de uma final table

**Um chip chop divide o dinheiro restante pela porcentagem bruta de fichas; um ICM deal divide pelo valor em dólares de ICM de cada jogador. O chip chop favorece stacks grandes, o ICM deal é mais justo com os short stacks.** Quando os jogadores concordam em encerrar um torneio cedo e dividir os prêmios, esses são os dois métodos na mesa — e saber a diferença vale dinheiro de verdade.

Digamos que três jogadores com 50% / 30% / 20% das fichas estão dividindo um pool restante de ==$1.500== (pagando $900 / $400 / $200):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jogador | Chip chop | ICM deal | Diferença |
|:--|:--:|:--:|:--:|
| Leader (50%) | $750 | ==$618== | ==r:−$132== |
| Middle (30%) | $450 | $485 | ==g:+$35== |
| Short (20%) | $300 | ==$397== | ==g:+$97== |

</div>

O short stack recebe ==$97 a mais== de um ICM deal do que de um chip chop, porque o ICM credita os pay jumps que ele já conquistou. Então a regra é fácil: ==se você está short, peça um ICM deal; se você é o chip leader, proponha um chip chop.== Na prática o chip leader muitas vezes negocia um pouco *acima* do seu número de ICM (e os short stacks aceitam um pouco abaixo) em troca da certeza de travar o dinheiro — tudo bem, desde que você saiba seu número de ICM primeiro. Rode seus próprios stacks e payouts na [calculadora de ICM deal](/calculator) antes de concordar com qualquer coisa.

---

## Quando o ICM importa mais — e quando você deve ignorá-lo?

**O ICM importa mais perto dos pay jumps e menos quando eles estão longe.** Apoie-se nele nestes spots:

- **A [bubble do dinheiro](/pt/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — o maior pulo de todos é de $0 para um prêmio, então os risk premiums batem no teto.
- **A bubble da final table e cada pay jump na final table** — cada degrau da escada é dinheiro real.
- **Satellites** — o caso extremo: cada vaga classificatória vale o mesmo, então quando você tem fichas suficientes para ganhar uma vaga, fichas extras valem quase *nada* e você folda quase tudo.

Ignore-o (jogue chip EV) quando:

- **Fases inicial e média**, onde o próximo pay jump é uma abstração distante e acumular fichas é o que ganha torneios.
- **Jogo deep-stacked com blinds pequenos**, onde você tem espaço para superar os adversários no jogo em vez de meter tudo.
- **Heads-up pelo título**, onde só restam dois prêmios e o ICM para de mudar sua estratégia — na prática é chip EV de novo.

Um vazamento comum é aplicar ICM demais: foldar até virar um short stack "para subir na escada" em vez de acumular quando a pressão ainda não está realmente ali. O ICM é uma ferramenta de fim de jogo, não uma desculpa para jogar com medo o torneio inteiro.

---

## Quão preciso é o ICM? Suas limitações

**O ICM é o melhor modelo simples que temos, mas é uma aproximação — ele assume que todo jogador tem a mesma habilidade e ignora quase tudo exceto o tamanho dos stacks.** Seja honesto sobre o que ele deixa de fora:

- **Habilidade.** O ICM trata um campeão mundial e um estreante com stacks iguais como iguais. As fichas de um jogador melhor valem mais do que o modelo diz.
- **Posição.** Um stack de 3 big blinds no button (prestes a ver flops baratos) vale mais do que o mesmo stack no big blind (prestes a ser forçado a entrar). O ICM não enxerga os assentos.
- **Blinds e jogo futuro.** O ICM congela o torneio neste instante; ele ignora blinds subindo, antes, e como as próximas rodadas vão de fato se desenrolar.

Tem até respaldo empírico para o ponto cego dele: um grande estudo de 2025 que testou o ICM contra resultados reais de torneio descobriu que ele tende a ==subestimar stacks grandes e superestimar short stacks==, em parte porque um chip leader habilidoso consegue alavancar a pressão de ICM para ganhar *mais* do que o modelo bruto prevê. Solvers avançados adicionam uma correção de "jogo futuro" exatamente por isso. Nada disso torna o ICM errado — torna ele uma forte primeira aproximação que você ajusta por habilidade e posição, não uma lei da física.

---

:::readnext[Continue lendo]
/pt/blog/holdem-tournament | Estratégia de torneio no Texas Hold'em | /images/holdem-tournament-hero.webp
/pt/blog/holdem-equity | Equity no pôquer explicada | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. O que é ICM no pôquer?**

A. O ICM (o Independent Chip Model) é uma fórmula que converte seu stack de fichas de torneio no seu valor real em premiação, usando os payouts restantes e o stack de cada jogador. Ele funciona porque você só ganha um primeiro prêmio, então fichas e dólares não são a mesma coisa — o ICM precifica a diferença.

**Q. Como o ICM é calculado?**

A. Ele atribui a cada jogador uma probabilidade de terminar em cada posição paga baseada na sua fatia de fichas (sua chance de terminar em primeiro = seu stack ÷ total de fichas, e depois recursivamente para as posições abaixo), e então multiplica essas probabilidades pelos payouts. A soma é o valor em dólares do seu stack. Na prática você usa uma calculadora de ICM; a questão é entender o que ela está fazendo.

**Q. Qual a diferença entre ICM e chip EV?**

A. O chip EV mede uma decisão em fichas ganhas ou perdidas; o ICM mede em dinheiro real. Eles concordam cedo num torneio e divergem perto do dinheiro, onde bustar custa equity de premiação travada. Um all-in cara-ou-coroa que está ok em chip EV pode ser um fold claro sob ICM.

**Q. O que é um ICM deal, e como ele difere de um chip chop?**

A. Ambos dividem uma premiação quando os jogadores concordam em encerrar cedo. Um chip chop divide o dinheiro pela porcentagem bruta de fichas (favorecendo stacks grandes); um ICM deal divide pelo valor em dólares de ICM de cada jogador (mais justo com os short stacks). Se você está short, peça um ICM deal; se você é o chip leader, um chip chop te paga mais.

**Q. O ICM se aplica a cash games?**

A. Não. Num cash game cada ficha já vale seu valor de face em dólares e você pode dar rebuy ou sair a qualquer hora, então não há nada a converter. O ICM só existe porque as fichas de torneio não podem ser sacadas pelo seu valor de face.

**Q. Quando eu deveria ignorar o ICM?**

A. Fases inicial e média, jogo deep-stacked com blinds pequenos, e heads-up pelo título — todos os spots onde os pay jumps estão longe ou só restam dois prêmios. Nesses casos você joga chip EV e foca em acumular fichas.

**Q. Quem inventou o ICM?**

A. A matemática das probabilidades de colocação costuma ser creditada a David Harville (a partir de pesquisa de corrida de cavalos dos anos 1970), que Mason Malmuth aplicou a torneios de pôquer — daí o modelo "Malmuth–Harville". Ele virou a forma padrão de avaliar stacks de torneio e dividir deals de final table.

---

## As 3 coisas para lembrar

1. **Fichas não são dinheiro.** Você ganha só um primeiro prêmio, então o chip leader vale menos que sua fatia de fichas e o short stack vale mais. Essa única diferença é todo o ICM.
2. **Fim de jogo, troque de chip EV para $EV.** Perto dos pay jumps, um call precisa de equity extra (um risk premium) para ser lucrativo. O stack médio folda mãos que um cash game pagaria na hora.
3. **Saiba seu número antes de fazer o deal.** Short stacks querem um ICM deal, stacks grandes querem um chip chop — rode a calculadora primeiro.

Daqui, veja como a pressão de ICM se encaixa na [estratégia de torneio](/pt/blog/holdem-tournament) mais ampla, ou volte à base com [equity no pôquer](/pt/blog/holdem-equity) e [pot odds](/pt/blog/holdem-pot-odds).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estratégia de torneio no Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">O pilar a que o ICM pertence</div>
  </a>
  <a href="/pt/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneio vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que o ICM nunca se aplica a cash</div>
  </a>
  <a href="/pt/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Equity no pôquer explicada</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chip EV é só equity em fichas</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ferramenta grátis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Calculadora de ICM</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Rode seus próprios stacks e deals</div>
  </a>
</div>
`.trim(),
};

export default POST;
