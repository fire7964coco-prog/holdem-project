import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Flush ganha de sequência? A matemática e as leituras erradas",
  seoTitle: "Flush ganha de sequência? Sim — e o que ganha do flush",
  desc: "Empurrou a sequência e o flush levou o pote? O flush sempre ganha da sequência. Veja a matemática, o que ganha do flush e 3 mesas que enganam jogadores.",
  tldr: "Um flush (cinco cartas do mesmo naipe — cerca de 0,197% das mãos de cinco cartas) sempre ganha de uma sequência (cinco em sequência, cerca de 0,392%) no Texas Hold'em — porque um flush é quase duas vezes mais difícil de fechar.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Infográfico: flush de Ás A♠ J♠ 9♠ 6♠ 2♠ ao lado de uma sequência de nove alta com um selo dourado FLUSH WINS explicando por que o flush fica acima",
  tags: ["flush ganha de sequencia", "flush vs sequencia", "o que ganha do flush", "o que e straight flush", "por que flush ganha de sequencia", "flush vs full house", "flush mais alto", "diferenca entre flush e sequencia"],
  content: `
O primeiro pote grande que perdi numa mesa de cash ao vivo foi exatamente assim: fechei uma sequência de dez alta no river, empurrei as fichas como se fosse ouro — e um regular calado virou duas copas. ==r:O dealer empurrou o pote para o outro lado==, e eu refiz aquela mão a viagem inteira até em casa.

Se isso acabou de acontecer com você, a resposta curta é ==g:sim — o flush ganha da sequência, todas as vezes==. As partes interessantes são o *porquê*, o que mais ganha do flush e as três mesas em que os jogadores ainda erram isso ao vivo.

---

### A resposta curta

:::stripe
Flush > Sequência | Sem exceção no Texas Hold'em padrão
5.108 vs 10.200 | Combinações de flush vs sequência (cinco cartas) — o flush é cerca de 2× mais raro
#5 vs #6 | Onde flush e sequência ficam no ranking de 10 mãos
:::

> **Resposta rápida**
> Um **flush sempre ganha de uma sequência** no Texas Hold'em — sem exceção no jogo padrão. Um flush (cinco cartas do mesmo naipe) é estatisticamente mais difícil de fechar do que uma sequência (cinco cartas seguidas): cerca de **5.108** combinações de cinco cartas contra **10.200**.

---

## Flush ganha de sequência? Onde as duas mãos ficam

Sim — e nem chega perto de ser discutível. ==O flush fica um degrau acima da sequência, e isso nunca muda no Hold'em padrão.== Veja a vizinhança em torno das duas mãos que mais confundem as pessoas:

| Rank | Mão | Exemplo |
|------|------|------|
| #2 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Full House | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Flush** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Sequência** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Trinca | Q♠ Q♥ Q♦ 7♠ 3♣ |

Quer as dez mãos com probabilidades, exemplos e problemas de mesa? Isso está no [guia completo de ranking de mãos de pôquer](/pt/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — este artigo dá zoom no duelo flush contra sequência e nos vizinhos mais próximos.

---

## Por que o flush ganha da sequência? A matemática

A força de uma mão no pôquer é decidida por uma coisa só: **o quanto ela é difícil de fechar**. Quanto mais rara, mais alto ela fica. Nada na ordem é arbitrário — é pura frequência.

Conte as 2.598.960 mãos possíveis de cinco cartas de um baralho de 52 e a ordem sai sozinha:

| Mão | Combinações | Probabilidade | Veredito |
|:---|:---:|:---:|:---|
| Quadra | 624 | 0,024% | Ganha do flush |
| Full House | 3.744 | 0,144% | Ganha do flush |
| **Flush** | **5.108** | **0,197%** | **Ganha da sequência ✅** |
| **Sequência** | **10.200** | **0,392%** | **Perde para o flush ❌** |
| Trinca | 54.912 | 2,11% | Perde para a sequência |

Uma sequência tem mais ou menos ==r:o **dobro** de formas de se montar do que um flush==, então aparece duas vezes mais — o que a torna a mão mais fraca. A mesma regra de frequência explica a escada inteira; os números exatos de cada mão estão no gráfico de odds e probabilidade do pôquer.

### Por que isso parece invertido

Uma sequência só precisa de cinco valores em ordem, e ==**os naipes não importam**==. Essa liberdade cria um número enorme de combinações. O flush é o oposto: cada uma das cinco cartas tem que compartilhar ==**o mesmo naipe**==, e só um dos quatro naipes consegue por vez. ==g:Muito menos formas de chegar lá significa que o flush é mais raro — e o mais raro sempre ganha.==

:::tip[Se você tem um draw de flush e seu adversário está buscando a sequência, você está numa ótima posição — mesmo quando **os dois** draws fecham, seu flush ganha da sequência dele no showdown.]:::

---

## 3 mesas que ainda enganam os jogadores

![Mesa mostrando 8♥ 7♥ 6♥ 5♠ A♣ — três copas na mesa significam que um flush está vivo mesmo que você tenha uma sequência](/images/holdem-flush-vs-straight-board.webp "Três cartas do mesmo naipe na mesa — draw de flush vivo contra a sua sequência")

Saber a regra não é o mesmo que lê-la ao vivo — é exatamente essa habilidade que [ler a mesa](/pt/blog/holdem-reading-the-board) treina. Estas são as três situações em que o erro realmente acontece.

### Situação 1 — Você fecha uma sequência, mas a mesa tem três de um naipe

:::hand[8♥,7♥,6♥,5♠,A♣] Mesa (5 cartas):::

Você tem **9♠ 10♠** para uma **sequência 6-7-8-9-10** limpa. Parece forte — mas a mesa mostra **três copas**. Se seu adversário tiver duas copas, ele tem flush, e **o flush ganha da sequência**. Toda vez que houver três ou mais cartas de um mesmo naipe na mesa, um flush está vivo; precifique suas apostas e seus pagamentos de acordo.

### Situação 2 — Buscando ao mesmo tempo a sequência e o flush

:::hand[8♥,7♥,6♠,2♣] Mesa (4 cartas, turn):::

Você tem **9♥ 5♥**. Já fechou a **sequência 5-6-7-8-9** — então por que continuar de olho nas copas? Porque você também tem **quatro para o flush** (9♥ 8♥ 7♥ 5♥): qualquer copas no river melhora sua sequência para flush, e o **6♥ especificamente** completa um **straight flush 5-6-7-8-9 (#2)** que esmaga tudo. Quando dá para buscar uma mão maior de graça, jogue com essa melhora em mente.

### Situação 3 — Você tem o flush, ele mostra uma sequência

:::hand[J♠,9♠,7♠,4♣,2♦] Mesa (5 cartas):::

Você tem **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, um flush de Ás alto. Seu adversário mostra **10♥ 8♦** para uma sequência 7-8-9-10-J e anuncia confiante. Não pisque: seu flush é mais alto. Flush acima de sequência, sempre.

---

## O que ganha do flush no pôquer?

Seu flush é favorito contra a maior parte do baralho — mas exatamente **quatro tipos de mão** (mais um flush maior) ganham dele:

:::compare
Ganha do seu flush | Perde para o seu flush
Full house (#4) | Sequência (#6)
Quadra (#3) | Trinca (#7)
Straight flush (#2) | Dois pares (#8)
Royal flush (#1) | Par e carta alta (#9–#10)
Um flush mais alto | Qualquer flush mais baixo
:::

O duelo que mais gera discussão depois de flush vs sequência é **flush vs full house** — e o full house ganha. O sinal de perigo é uma **mesa pareada**. Olhe esta:

:::hand[K♠,9♠,9♥,4♠,2♦] Mesa (5 cartas):::

Você tem **A♠ 5♠** para o flush máximo: **A♠ K♠ 9♠ 5♠ 4♠**. Seu adversário tem **K♦ 9♦** e mostra **9♦ 9♠ 9♥ K♦ K♠** — noves cheios de reis. ==r:O full house ganha do flush==, e nenhum flush sobrevive a ele. Numa mesa não pareada, seu flush de Ás alto só é batido por um straight flush; no instante em que a mesa pareia, full houses e quadras entram em cena.

Quando dois jogadores têm o *mesmo* tipo de mão, o vencedor sai da comparação carta a carta — o sistema completo está nas [regras de desempate e kicker do pôquer](/pt/blog/holdem-tiebreak-rules).

---

## Flush vs flush, sequência vs sequência — quem ganha o empate?

Sim, um flush pode perfeitamente ser mais alto que outro. **Os naipes são irrelevantes** — compare as cinco cartas de cima para baixo, a mais alta primeiro:

| Jogador | Flush | Resultado |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Ganha** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Perde |

O Ás do Jogador A supera o rei do Jogador B logo na primeira carta, então A ganha. Um flush de espadas **não** ganha de um flush de copas — só os valores importam.

Sequências são ainda mais simples: compare só a **carta mais alta** — não há kicker.

- **A-K-Q-J-10** (Ás alto, "Broadway") é a sequência mais forte.
- **A-2-3-4-5** (a "wheel", com o Ás jogando baixo) é a mais fraca.

| Jogador | Sequência | Resultado |
|--------|------|------|
| A | Q-J-10-9-8 | **Ganha** |
| B | J-10-9-8-7 | Perde |

A dama supera o valete, então A ganha. Se as melhores cinco cartas dos dois jogadores forem idênticas em valor, é [pote dividido](/pt/blog/holdem-split-pot-rules).

---

## O que é um straight flush? Quando os dois acontecem juntos

![9♥ 8♥ 7♥ 6♥ 5♥ — um straight flush de copas, a mão #2 do pôquer](/images/holdem-flush-vs-straight-sf.webp "Straight flush — cinco copas em sequência, batido só por um royal flush")

Um **straight flush** é cinco cartas *consecutivas* de *um só naipe* — tipo 9♥ 8♥ 7♥ 6♥ 5♥. É a **mão #2 do pôquer**, batida só por um royal flush (que é simplesmente o straight flush de Ás alto, A-K-Q-J-10 do mesmo naipe). Com apenas **36 combinações (cerca de 0,00139%)**, é mais rara que tudo, exceto o próprio royal.

O detalhe: ==as *mesmas cinco cartas* têm que ser do mesmo naipe **e** em sequência==. Veja a diferença na mesa **8♥ 7♥ 6♥ Q♠ 3♦**:

- Com **K♥ 2♥** → suas cinco copas são K-8-7-6-2. Não são consecutivas — isso é ==um flush simples, não um straight flush==.
- Com **10♥ 9♥** → suas cinco copas são 10-9-8-7-6. Consecutivas *e* do mesmo naipe — ==g:um straight flush de dez alto==.

Se sua sequência usa umas cartas e seu flush usa outras, você não soma as duas — simplesmente joga a mais alta das duas, o flush.

---

## A única exceção real: Short Deck

No **Short Deck (6+) Hold'em**, os 2 até os 5 são retirados do baralho. Com menos cartas, um flush fica *mais difícil* de fechar do que um full house — então, nesse formato, o ranking muda e um ==r:**flush ganha de um full house**==. O princípio nunca muda: ==a mão mais rara ganha==. Só o baralho mudou. No Texas Hold'em padrão, com o baralho completo de 52 cartas, ==g:um flush ganha da sequência e perde para o full house, todas as vezes==.

---

:::readnext[Continue lendo]
/pt/blog/holdem-tiebreak-rules | Regras de kicker e desempate | /images/holdem-tiebreak-hero.webp
/pt/blog/holdem-split-pot-rules | Quando o pote é dividido? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. O flush ganha da sequência no pôquer?**

A. Sim. O flush é a mão #5 e a sequência é a #6, então o flush sempre ganha no Texas Hold'em padrão. Cinco cartas do mesmo naipe são estatisticamente mais difíceis de fechar do que cinco em sequência, e a mão mais rara sempre fica acima.

**Q. A sequência ganha do flush?**

A. Não. Uma sequência (#6) nunca ganha de um flush (#5) no Texas Hold'em padrão. É uma confusão comum porque a sequência pode parecer mais difícil de fechar, mas o flush é cerca de duas vezes mais raro — então o flush sempre leva o pote.

**Q. Por que o flush ganha da sequência?**

A. Matemática pura. A sequência ignora os naipes, então há cerca de 10.200 formas de fechar uma, contra apenas 5.108 formas de fechar um flush. O flush é cerca de duas vezes mais raro, e no pôquer a mão mais rara sempre fica acima.

**Q. O que ganha do flush no pôquer?**

A. Full house, quadra, straight flush e royal flush ganham todos do flush — e um flush mais alto (carta de topo melhor) também. Tudo abaixo dele (sequência, trinca, dois pares, par, carta alta) perde para ele.

**Q. O que ganha da sequência no pôquer?**

A. Flush, full house, quadra, straight flush e royal flush ganham todos da sequência — mais qualquer sequência mais alta. A sequência ainda ganha da trinca e de tudo abaixo. A ordem completa, da melhor à pior, está no [ranking completo de mãos](/pt/blog/holdem-hand-rankings).

**Q. Dá para ter um flush mais alto que o de outro jogador?**

A. Sim. Dois flushes são comparados carta a carta, de cima para baixo, então um flush de Ás alto (o "nut") ganha de um flush de rei alto. Se as cartas de topo empatam, decide a segunda mais alta, e assim por todas as cinco.

**Q. O naipe do flush importa?**

A. Não. O Texas Hold'em não tem ranking de naipes. Os naipes só importam para *formar* um flush, nunca para comparar mãos — quando dois flushes se enfrentam (sempre do mesmo naipe no Hold'em, já que compartilham cartas da mesa), só os valores decidem, e valores idênticos dividem o pote.

**Q. Um flush e uma sequência podem empatar ou dividir o pote?**

A. Não. Uma mão está sempre acima da outra, então o flush simplesmente ganha. Divisão só acontece entre duas mãos exatamente do mesmo rank com os mesmos cinco valores.

---

## As conclusões

1. **Flush (#5) ganha de sequência (#6)** — sem exceção no Hold'em padrão.
2. Ele ganha porque é cerca de **duas vezes mais raro**: 5.108 combinações de flush contra 10.200 de sequência.
3. Fique de olho na mesa: **três de um naipe** significa que um flush está vivo, uma **mesa pareada** significa que um full house pode ganhar do seu flush, e do mesmo naipe *mais* conectado é um straight flush.

Fixe a ordem completa com o [ranking completo de mãos](/pt/blog/holdem-hand-rankings), aprenda como as mãos apertadas são decididas no [guia de desempate e kicker](/pt/blog/holdem-tiebreak-rules) e, se você é totalmente novo, o [guia para iniciantes das regras do Texas Hold'em](/pt/blog/texas-holdem-rules-for-beginners) amarra tudo.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ranking de mãos de pôquer — da melhor à pior</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As 10 mãos com probabilidades, exemplos e problemas de mesa</div>
  </a>
  <a href="/pt/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Desempate</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras de kicker e desempate</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Mesmo flush ou sequência — quem leva o pote?</div>
  </a>
  <a href="/pt/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pote Dividido</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Quando o pote é dividido?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 situações de divisão, incluindo flushes idênticos</div>
  </a>
</div>
`.trim(),
};
