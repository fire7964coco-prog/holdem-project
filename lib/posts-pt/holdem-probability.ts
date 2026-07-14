import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Tabela de odds e probabilidade no pôquer — as chances reais de cada mão no Hold'em",
  seoTitle: "Com que frequência você acerta de verdade? — Tabela de odds no pôquer",
  desc: "As odds reais de cada mão, flop e projeto no Texas Hold'em — mais a regra do 2 e 4 e pot odds numa única tabela de probabilidade completa.",
  tldr: "Até o river você faz um par 43,8% das vezes, dois pares 23,5%, um flush 3,0% e um full house 2,6% — enquanto um royal flush aparece só uma vez a cada 31.000 mãos.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Vista de cima de uma mesa de Texas Hold'em em ação com cinco cartas comunitárias, pilhas de fichas espalhadas e jogadores no meio da mão",
  tags: ["odds no pôquer", "tabela de probabilidade pôquer", "odds das mãos de pôquer", "odds de trincar no flop", "regra do 2 e 4", "pot odds", "tabela de outs pôquer", "odds texas holdem"],
  content: `
A primeira vez que eu fiz set mining com um par de cincos numa mesa ao vivo e trinquei no flop, o cara do meu lado resmungou "quais são as *odds*?" — e eu sabia mesmo: cerca de ==1 em 8,5==. Foi esse número que me fez pagar em primeiro lugar.

Pôquer não é jogo de adivinhação. Cada call, fold e shove é uma ==pergunta de probabilidade disfarçada==, e os jogadores que ganham são os que transformaram "quais são as odds?" num reflexo. Esta é a ==**tabela de odds e probabilidade** completa== do Texas Hold'em — cada mão feita, cada flop, cada projeto — com o ==g:único atalho mental== que deixa você fazer a conta na mesa em dois segundos.

---

### Os números que mais importam

:::stripe
43,8% | Um par até o river
23,5% | Dois pares
3,0% | Fazer um flush
2,6% | Fazer um full house
1 em 30.940 | Um royal flush
:::

---

## Tabela de odds das mãos de pôquer: a probabilidade de cada mão

Aqui está a tabela mestra. O truque que a maioria dos sites pula: existem ==dois números diferentes== para cada mão, e confundir os dois é o motivo de as pessoas discutirem o quão raro um royal flush "realmente" é.

- **Odds de 5 cartas** = a chance de uma única mão aleatória de cinco cartas *ser* aquela mão (o número clássico dos livros).
- **Hold'em (até o river)** = a chance de você *terminar* com aquela mão depois de ver todas as sete cartas (suas 2 cartas na mão + 5 comunitárias). É esse o número que realmente importa na mesa.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão | Odds de 5 cartas (recebidas) | Odds no Hold'em (até o river) |
|:---|:---:|:---:|
| Royal Flush | 1 em 649.740 (0,000154%) | 1 em 30.940 (0,0032%) |
| Straight Flush | 1 em 72.193 (0,00139%) | 1 em 3.590 (0,0279%) |
| Quadra | 1 em 4.165 (0,0240%) | 1 em 595 (0,168%) |
| Full House | 1 em 694 (0,144%) | 1 em 39 (2,60%) |
| Flush | 1 em 509 (0,197%) | 1 em 33 (3,03%) |
| Sequência | 1 em 255 (0,392%) | 1 em 22 (4,62%) |
| Trinca | 1 em 47 (2,11%) | 1 em 21 (4,83%) |
| Dois Pares | 1 em 21 (4,75%) | 1 em 4,3 (23,5%) |
| Um Par | 1 em 2,4 (42,3%) | 1 em 2,3 (43,8%) |
| Carta Alta | 1 em 2,0 (50,1%) | 1 em 5,7 (17,4%) |

</div>

> **A estatística que surpreende todo mundo**
> Carta alta é a mão de cinco cartas *mais* comum (50%) mas um dos resultados *menos* comuns no Hold'em (17%). Por quê? Sete cartas te dão tantas chances de parear que "nenhum par até o river" acaba ficando raro. Mais cartas, mais conexões.

Repare como a ordem nunca muda — quanto mais rara uma mão é de fazer, mais alto ela ganha. Essa é toda a lógica por trás do [ranking de mãos de pôquer](/pt/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): a probabilidade *é* o ranking.

:::quiz:::

---

## Odds de receber cada mão inicial

![Par de ases — o ás de espadas e o ás de copas recém-distribuídos no feltro verde ao lado de fichas de pôquer](/images/holdem-probability-starting-hands.webp "Par de ases: a melhor mão inicial, distribuída só uma vez a cada 221 mãos")

Antes de qualquer flop, existem exatamente **1.326 mãos iniciais de duas cartas possíveis**. Veja com que frequência aparecem as que as pessoas mais perguntam.

| Mão inicial | Odds | Com que frequência |
|:---|:---:|:---|
| Um par específico na mão (ex.: A-A) | 1 em 221 (0,45%) | Uma vez a cada ~221 mãos |
| **Qualquer** par na mão | 1 em 17 (5,9%) | Cerca de duas vezes por hora ao vivo |
| A-K do mesmo naipe (específico) | 1 em 332 (0,30%) | Raro |
| A-K (do mesmo naipe *ou* de naipes diferentes) | 1 em 83 (1,2%) | — |
| Quaisquer duas cartas do mesmo naipe | 1 em 4,3 (23,5%) | Quase a cada quarta mão |

Então, da próxima vez que alguém disser "eu nunca pego ases", está mais ou menos certo — você vai receber um par *específico* como os ases só cerca de ==uma vez a cada 221 mãos==. Mas **qualquer** par na mão chega a cada 17 mãos, e é por isso que set mining é uma estratégia de verdade, não fantasia. Quais pares e mãos do mesmo naipe valem a pena jogar de cada posição fica coberto na [tabela de mãos iniciais por posição](/pt/blog/holdem-starting-hands-chart).

---

## Odds de flopar cada mão

Esta é a tabela que a maioria das páginas de odds enterra ou espalha por uma dúzia de artigos. São as odds de o flop *fazer* sua mão, dadas as cartas na mão da coluna da esquerda.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Você flopa… | Segurando | Odds | Contra |
|:---|:---|:---:|:---:|
| Uma trinca (ou melhor) | Um par na mão | 11,8% | ~7,5 para 1 |
| Um flush | Duas cartas do mesmo naipe | 0,84% | ~118 para 1 |
| Um projeto de flush | Duas cartas do mesmo naipe | 10,9% | ~8 para 1 |
| Uma sequência | Conectores do mesmo naipe (ex.: 8-7) | 1,3% | ~76 para 1 |
| Dois pares | Duas cartas não pareadas | 2,0% | ~49 para 1 |
| Um full house | Um par na mão | 0,98% | ~101 para 1 |
| Quadra | Um par na mão | 0,245% | ~407 para 1 |

</div>

A que vale memorizar é a primeira linha: ==**você flopa uma trinca cerca de 12% das vezes**, ou mais ou menos 1 em 8,5==. É esse único número que decide se pagar um raise para "fazer set mining" com um par pequeno é lucrativo — você precisa que o pote (e o stack provável do adversário) te pague mais de 7,5 para 1 quando você acerta. É essa a ponte para [pot odds](#pot-odds), logo abaixo. Para a derivação completa de cada linha aqui — mais a regra de stack do set mining e a divisão entre flush feito, projeto e completo — veja o mergulho fundo em [drawing odds e as odds de flopar cada mão](/pt/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Drawing odds: acertando seu flush ou sequência até o river

Você tem um projeto no flop. Com que frequência você o completa? Tudo se resume a **outs** — as cartas que sobraram no baralho e que fazem sua mão. Conte seus outs, depois leia na horizontal.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Projeto | Outs | Flop → river (2 cartas) | Turn → river (1 carta) |
|:---|:---:|:---:|:---:|
| Flush + sequência aberta (combo) | 15 | 54,1% | 32,6% |
| Flush + gutshot | 12 | 45,0% | 26,1% |
| Projeto de flush | 9 | 35,0% | 19,6% |
| Sequência aberta (open-ended) | 8 | 31,5% | 17,4% |
| Duas overcards | 6 | 24,1% | 13,0% |
| Sequência de dentro (gutshot) | 4 | 16,5% | 8,7% |
| Par → trinca / trinca → full house | 2 | 8,4% | 4,3% |

</div>

O caso clássico: você flopa um **projeto de flush** (nove outs). Você chega lá ==35% das vezes até o river== — melhor que uma em três. Um **projeto de sequência aberta** (oito outs) acerta 31,5%. Repare nas duas colunas: quando o turn vem em branco, suas odds numa *única* carta praticamente caem pela metade, e é exatamente por isso que os projetos ficam mais caros de perseguir rua após rua.

---

## Como calcular odds no pôquer: contando outs e a regra do 2 e 4

Você não consegue carregar aquela tabela na cabeça — mas nem precisa. A **regra do 2 e 4** te deixa dentro de um ponto percentual ou dois em um segundo:

:::steps
Conte seus outs | As cartas ainda não vistas que completam sua mão (projeto de flush = 9)
No flop (2 cartas por vir) | Multiplique outs × 4 → sua % aproximada de acertar até o river
No turn (1 carta por vir) | Multiplique outs × 2 → sua % aproximada de acertar no river
:::

**Exemplo resolvido.** Você tem quatro cartas para um flush depois do flop. São ==9 outs== (13 do seu naipe − 4 que você consegue ver). No flop: 9 × 4 = **36%** — o número real é 35,0%, então você está certeiro. No turn, se você errou: 9 × 2 = **18%** (real: 19,6%).

:::tip[A regra *super*estima um pouco quando você tem mais de uns 9 outs. Com um monstro de 15 outs, "×4" diz 60% mas o número real é 54% — desconte alguns pontos para projetos grandes.]:::

É esse o truque inteiro. Outs → vezes quatro no flop → sua [equity](/pt/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Todo o resto é só saber o que fazer com esse número. A única habilidade que essa regra assume que você já dominou é a própria contagem — para projetos combinados, outs sobrepostos e os outs "sujos" que não deveriam contar, veja o guia completo de [como contar outs no pôquer](/pt/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot odds: transformando suas odds em call ou fold

![Infográfico de pot odds — um pote de $100 e um call de $25, então 25 ÷ 125 significa que você precisa de 20% de equity](/images/holdem-probability-pot-odds.webp "Um call de $25 num pote de $100: 25 ÷ 125 = 20% de equity necessária para empatar")

Saber que você vai acertar 35% das vezes é inútil até comparar com o **preço**. Pot odds são simplesmente: *que fração do pote final estou pagando para dar call?* Se sua chance de ganhar for maior que essa fração, você paga.

**Exemplo resolvido.** O pote é $100. Seu adversário aposta $50, deixando-o em $150. Você precisa pagar $50 para ganhar esses $150.

:::steps
Pote depois da aposta | $100 + $50 = $150
Seu call | $50 para ganhar $150 (pote final $200)
Pot odds | 50 ÷ 200 = 25% — você precisa de pelo menos 25% de equity
Sua equity | Projeto de flush ≈ 35% (regra do 4)
Decisão | 35% > 25% → um ==g:call== claramente lucrativo
:::

É esse o momento em que todos os números compensam: suas **drawing odds (35%)** ganham das suas **pot odds (25%)**, então dar call ganha dinheiro no longo prazo mesmo que você vá perder a mão na maioria das vezes. Quando o projeto é maior que o preço, você paga; quando é menor, você folda — sem precisar de feeling. Para o método completo, o resumão de bet sizing e como as implied odds mudam o call, veja [como calcular pot odds](/pt/blog/holdem-pot-odds) e [implied odds](/pt/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp").

---

## Odds de royal flush e straight flush (e por que são tão raros)

![Infográfico de um royal flush de copas — A♥ K♥ na mão completando A-K-Q-J-10 de copas numa mesa 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Um royal flush de copas: a mão mais rara do pôquer, cerca de 1 em 30.940 até o river")

As duas mãos mais raras são as que os jogadores se gabam por anos — com razão.

- **Royal flush:** como uma mão distribuída de cinco cartas, ==1 em 649.740==. Jogando Hold'em até o river, melhora para cerca de 1 em 30.940 porque você escolhe suas melhores cinco entre sete cartas. De qualquer forma, a maioria dos jogadores passa *anos* entre um e outro.
- **Straight flush:** cerca de 1 em 72.193 como mão de cinco cartas. Ainda uma aparição de uma vez por ano para a maioria.

Por que tão raro? Um royal flush é exatamente **uma sequência específica de cartas em um naipe específico** — quatro formas de fazê-lo no baralho inteiro contra 1.302.540 formas de fazer uma carta alta simples. A raridade é toda a razão de ele ficar no topo do ranking.

:::note
Um mito comum: "um royal flush ganha de tudo, então pode dar *empate*". Dois royal flushes só são possíveis em naipes diferentes — e como os naipes nunca desempatam, isso é um split pot. Na prática, praticamente nunca acontece fora de coincidências de mesa compartilhada.
:::

---

## Odds improváveis: coolers, quadras e bad beats

Alguns números existem principalmente para explicar a pior noite da sua vida no pôquer.

| Improvável | Odds |
|:---|:---:|
| Receber um par de ases na mão | 1 em 221 |
| Flopar quadra com um par na mão | 1 em 407 |
| Flopar um straight flush (conectores do mesmo naipe) | ~1 em 4.900 |
| Fazer um royal flush até o river | 1 em 30.940 |

**Set over set** — você flopa uma trinca e perde para uma trinca maior — é o cooler supremo. Não há um número único e limpo porque depende de quantos jogadores seguram pares, mas a âncora é esta: *você* flopa uma trinca só 11,8% das vezes, e um adversário fazendo o mesmo na mesma mesa é raro o suficiente para a maioria dos jogadores lembrar de cada um. Quando acontece, é variância, não erro — a matemática esteve do seu lado o tempo todo. Se você quer ver exatamente como esses showdowns são pontuados, as [regras de kicker e desempate](/pt/blog/holdem-tiebreak-rules) cobrem cada caso limite.

---

:::readnext[Continue lendo]
/pt/blog/holdem-hand-rankings | Ranking de mãos de pôquer, do melhor ao pior | /images/holdem-hand-rankings-hero.webp
/pt/blog/holdem-starting-hands-chart | Quais mãos iniciais realmente jogar | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Quais são as odds de fazer um royal flush no Texas Hold'em?**

A. Cerca de 1 em 30.940 até o river quando você joga a mão de Hold'em até o fim (usando suas melhores cinco entre sete cartas). Como uma mão distribuída de cinco cartas, é 1 em 649.740. De qualquer forma, a maioria dos jogadores passa anos sem fazer um.

**Q. Quais são as odds de um straight flush?**

A. Mais ou menos 1 em 72.193 como mão de cinco cartas, ou cerca de 1 em 3.590 até o river no Hold'em. É a segunda mão mais rara, superada só pelo royal flush.

**Q. Quais são as odds de acertar um flush até o river?**

A. Se você flopa um projeto de flush (nove outs), você o completa cerca de 35% das vezes até o river — melhor que uma em três. Numa única carta (turn para river), cai para cerca de 19,6%.

**Q. Quais são as odds de flopar uma trinca?**

A. Cerca de 11,8%, ou mais ou menos 1 em 8,5, quando você segura um par na mão. Aquele número de "7,5 para 1 contra" é a base para decidir se fazer set mining com um par pequeno é lucrativo.

**Q. Quais são as odds de receber um par de ases na mão?**

A. 1 em 221 (0,45%) para os ases especificamente. Qualquer par na mão, porém, aparece bem mais vezes — cerca de 1 em 17 mãos (5,9%).

**Q. O que é a regra do 2 e 4 no pôquer?**

A. Um atalho para as odds de projeto: multiplique seus outs por 4 no flop (duas cartas por vir) ou por 2 no turn (uma carta por vir) para estimar sua chance em porcentagem de acertar. É preciso dentro de um ponto ou dois até uns nove outs.

**Q. Como calcular pot odds?**

A. Divida a quantia que você precisa pagar pelo pote total depois do seu call. Pagar $50 num pote de $150 significa 50 ÷ 200 = 25% — então você precisa de pelo menos 25% de equity para dar call com lucro. Compare isso com suas drawing odds: se sua chance de acertar for maior, você paga.

**Q. Quais são as odds de set over set?**

A. Não há um número fixo único — depende de quantos adversários seguram pares na mão — mas é raro. Você já flopa uma trinca só 11,8% das vezes, então dois jogadores flopando trincas na mesma mesa é o clássico "cooler" que custa stacks.

---

## Os 3 números para gravar na memória

1. **Flopar uma trinca: ~12% (1 em 8,5).** Decide todo call de set mining.
2. **Projeto de flush até o river: 35%.** Nove outs, regra do 4 → 9 × 4 = 36%.
3. **Pot odds ganham do feeling.** Se sua chance de acertar for maior que o preço do call, você paga — toda vez.

O pôquer recompensa os jogadores que tornaram isso automático. Aprenda a tabela, treine a regra do 2 e 4, e comece a perguntar "quais são as odds?" *antes* de agir, em vez de depois. Em seguida, ponha a matemática para trabalhar aprendendo [quais mãos iniciais jogar de cada posição](/pt/blog/holdem-starting-hands-chart), ou revise [por que um flush ganha de uma sequência](/pt/blog/holdem-flush-vs-straight) para sempre saber o quanto seus outs valem.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ranking de mãos de pôquer, do melhor ao pior</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A ordem que essas odds criam — cada mão no ranking</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Mãos Iniciais</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de mãos iniciais por posição</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quais dessas 1.326 mãos realmente jogar</div>
  </a>
  <a href="/pt/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Confronto de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Um flush ganha de uma sequência?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que a mão mais rara sempre ganha</div>
  </a>
  <a href="/pt/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Leitura de Mesa</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como ler a mesa no Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Conte seus outs enxergando cada projeto</div>
  </a>
  <a href="/pt/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como a posição muda tudo</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quando as odds justificam um call — e quando a posição justifica</div>
  </a>
</div>
`.trim(),
};
