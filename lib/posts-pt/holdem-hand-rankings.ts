import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Ranking de mãos de pôquer no Texas Hold'em — da melhor à pior, com probabilidades",
  seoTitle: "Achou que tinha ganhado e perdeu o pote? — Mãos de pôquer",
  desc: "Fez flush e mesmo assim perdeu o pote? Quase sempre é uma única regra que passou despercebida. Aqui estão as 10 mãos de pôquer da melhor à pior, as probabilidades reais de cada uma e como o kicker e os empates decidem o vencedor.",
  tldr: "O ranking de mãos de pôquer, da melhor à pior, é: Royal Flush, Straight Flush, Quadra, Full House, Flush, Sequência, Trinca, Dois Pares, Par e Carta Alta.",
  category: "초보 가이드",
  date: "2026-06-09",
  updated: "2026-06-09",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🃏",
  tags: ["maos de poker", "ranking de maos de poker", "maos de texas holdem", "qual mao ganha no poker", "kicker poker", "empate no poker", "melhores maos de poker", "ordem das maos de poker"],
  content: `
Você está mano a mano no river. Fechou seu flush, tem certeza de que é o melhor… e então o dealer empurra o pote para o outro lado. A mesa estava pareada, seu adversário tinha full house, e você nunca viu isso chegando.

Quase todo momento de "achei que tinha ganhado" se resume à mesma coisa: não ler o **ranking de mãos de pôquer** rápido o suficiente. A ordem se aprende em cinco minutos. O difícil é lê-la ao vivo, sob pressão, com uma mesa pareada ou conectada — e quase ninguém explica isso bem.

Este guia resolve as duas coisas. Você terá a ordem completa com as probabilidades reais, todas as regras de desempate, três problemas de mesa reais para treinar o "ache suas melhores cinco cartas" e uma rotina de 1 segundo para ler qualquer mesa.

---

## Ranking de mãos de pôquer: a ordem completa

Comece por aqui. Este é o ranking inteiro, da mais forte à mais fraca, com a probabilidade aproximada de fechar cada mão até o river no Texas Hold'em.

| # | Mão | Também chamada de | O que é | Probabilidade (até o river) |
|------|------|------|------|------|
| **1** | Royal Flush | "Royal" | A-K-Q-J-10 do mesmo naipe | 0,0032% |
| **2** | Straight Flush | "Steel wheel" (A-5) | 5 em sequência, mesmo naipe | 0,0279% |
| **3** | Quadra | "Four of a kind" | Quatro cartas do mesmo valor | 0,168% |
| **4** | Full House | "Full" | Trinca + par | 2,60% |
| **5** | Flush | — | 5 cartas do mesmo naipe | 3,03% |
| **6** | Sequência | "Straight" | 5 em sequência, naipes variados | 4,62% |
| **7** | Trinca | "Set" / "Trips" | Três cartas do mesmo valor | 4,83% |
| **8** | Dois Pares | — | Dois pares diferentes | 23,5% |
| **9** | Par | — | Duas cartas do mesmo valor | 43,8% |
| **10** | Carta Alta | "Sem nada" | Nenhuma combinação | 17,4% |

> **A regra que encerra discussões**
> Par e Carta Alta juntos somam cerca de 61% de todas as mãos de sete cartas até o river. As mãos grandes parecem comuns porque ficam na memória — mas a maioria dos potes é decidida por um par e um kicker.

:::quiz:::

---

## Força das cartas: a base em 30 segundos

Antes das mãos, você precisa da força das cartas. Só duas coisas.

### Ordem de valor (da maior à menor)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

O Ás é a carta mais forte e também a única que quebra a regra: joga alto (A-K-Q-J-10) e baixo (A-2-3-4-5, "a wheel"). Mas não dá a volta pelo meio: Q-K-A-2-3 **não** é sequência.

### Os naipes não têm valor

No Texas Hold'em padrão, **nenhum naipe ganha de outro**. Espadas não ganham de copas. O naipe só importa para *formar* um flush, nunca para desempatar. Se dois jogadores têm as mesmas cinco cartas em naipes diferentes, o pote é dividido — sempre.

---

## As 10 mãos de pôquer explicadas

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10 de espadas:::

**A♠ K♠ Q♠ J♠ 10♠** — o straight flush mais alto e a melhor mão do pôquer.

Não pode ser batido nem empatado (dois royal flushes só acontecem em naipes diferentes, o que significa pote dividido). Aparece mais ou menos uma vez a cada 31.000 mãos, então muitos jogadores passam anos sem fechá-lo. Quando fechar, seu único trabalho é colocar o máximo de fichas possível.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — cinco copas em sequência:::

**9♥ 8♥ 7♥ 6♥ 5♥** — cinco cartas seguidas, todas do mesmo naipe.

Só perde para um straight flush mais alto ou para um royal flush. A versão mais baixa, A-2-3-4-5 do mesmo naipe, é a "steel wheel". Se dois straight flushes se enfrentam, ganha o de carta mais alta.

### #3 — Quadra

:::hand[8♣,8♦,8♥,8♠,K♥] Quadra — quatro oitos + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — as quatro cartas de um mesmo valor.

Entre duas quadras, ganha a de valor mais alto. Se as quatro estão *na mesa*, decide o **kicker** mais alto — e o Ás manda.

### #4 — Full House

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — três damas + dois cincos:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — uma trinca mais um par.

Compare **primeiro a trinca**: QQQ55 ganha de JJJ99 porque as damas superam os valetes, não importa o tamanho do par. Só se a trinca empatar é que se compara o par.

> **O "cooler" mais comum**
> Toda vez que a mesa parear, procure um full house antes de se comprometer com flush ou sequência. "Meu flush máximo perdeu para um full house" é o bad beat mais frequente do Hold'em.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — cinco ouros:::

**A♦ J♦ 8♦ 6♦ 2♦** — cinco cartas do mesmo naipe, sem importar a sequência.

Dois flushes se comparam carta a carta a partir da mais alta: A-J-8-6-2 ganha de A-J-8-5-2 porque o 6 supera o 5. Quatro cartas de um naipe **não** são flush: você precisa de cinco.

### #6 — Sequência (Straight)

:::hand[7♠,6♥,5♣,4♦,3♠] Sequência — cinco seguidas, naipes variados:::

**7♠ 6♥ 5♣ 4♦ 3♠** — cinco cartas em sequência, naipes variados.

- **A máxima:** A-K-Q-J-10 ("Broadway") é a sequência mais alta.
- **A wheel:** A-2-3-4-5 é a mais baixa (o Ás joga baixo).
- **Proibido:** não dá a volta — K-A-2-3-4 não é sequência.

Entre duas sequências, ganha a de carta mais alta.

### #7 — Trinca (set / trips)

:::hand[J♣,J♠,J♥,A♦,4♠] Trinca — três valetes + kickers:::

**J♣ J♠ J♥ A♦ 4♠** — três cartas do mesmo valor.

Há duas formas de fechá-la, e a diferença importa:

- **Set:** um par na mão mais uma carta da mesa (ex.: você tem J♣ J♠ e a mesa traz J♥). Disfarçado e perigoso.
- **Trips:** um par na mesa mais uma carta sua. Mais fácil de o adversário ler e de compartilhar.

O set tira mais fichas porque ninguém vê chegar.

### #8 — Dois Pares

:::hand[10♠,10♥,8♣,8♦,A♠] Dois Pares — dezes e oitos + kicker Ás:::

**10♠ 10♥ 8♣ 8♦ A♠** — dois pares diferentes.

Compara-se nesta ordem: **par alto → par baixo → kicker**. KK99-A ganha de QQJJ-A porque os reis superam as damas antes de olhar qualquer outra coisa.

### #9 — Par

:::hand[K♠,K♦,9♥,6♣,2♠] Par — reis + três kickers:::

**K♠ K♦ 9♥ 6♣ 2♠** — duas cartas do mesmo valor.

A mão feita mais comum do Hold'em. Dois pares iguais se decidem pelos kickers: **valor do par → kicker 1 → kicker 2 → kicker 3**, do maior ao menor. É aqui que acontece a maioria das derrotas com "a mesma mão": cuide do seu kicker.

### #10 — Carta Alta

:::hand[A♣,Q♠,9♥,5♦,3♣] Carta Alta — sem combinação:::

**A♣ Q♠ 9♥ 5♦ 3♣** — nada conecta.

No showdown ganha a carta mais alta, depois a seguinte, e assim com as cinco. Se as cinco coincidirem, divide-se. É o que sobra quando um blefe é pago e não fecha.

---

## Como kickers e empates funcionam de verdade

![Showdown de pôquer — comparando as melhores cinco cartas de dois jogadores](/images/holdem-hand-rankings-showdown.webp "No showdown, a melhor mão de cinco cartas leva o pote")

Esta é a parte que decide potes de verdade — e que a maioria das tabelas pula. Quando dois jogadores têm o **mesmo tipo de mão**, siga esta ordem exata:

1. **Compare o tipo de mão.** Um flush sempre ganha de uma sequência, um full house sempre ganha de um flush, e assim por diante.
2. **Compare as cartas que formam a mão.** Um par de ases ganha de um par de reis; um flush com Ás ganha de um com valete.
3. **Compare os kickers.** Se a mão feita empata, as cartas restantes decidem, uma a uma a partir da mais alta.
4. **Ainda idêntico? Divide-se o pote.** Os naipes nunca desempatam.

A etiqueta à direita indica se o **kicker é usado para decidir a mão**.

:::tiebreak
Royal Flush|Sempre empate (pote dividido)|-Sem kicker
Straight Flush|Só a carta mais alta|-Sem kicker
Quadra|Valor da quadra → 5ª carta|+Com kicker
Full House|Valor da trinca → do par|-Sem kicker
Flush|As 5, da maior à menor|+Com kicker
Sequência|Só a carta mais alta|-Sem kicker
Trinca|Valor da trinca → 2 kickers|+Com kicker
Dois Pares|Par alto → baixo → kicker|+Com kicker
Par|Valor do par → 3 kickers|+Com kicker
Carta Alta|As 5, da maior à menor|+Com kicker
:::

Um **kicker** é simplesmente uma carta que não faz parte da sua mão feita, mas que desempata. Com A-A-K contra A-A-Q, ambos têm par de ases — ganha o kicker K. Por isso os bons jogadores se importam tanto com a *qualidade* das cartas altas, não só em parear.

---

## Leia a mesa: 3 problemas reais

Saber a ordem não é o mesmo que lê-la rápido. Aqui vão três situações reais. Cubra a resposta, ache suas melhores cinco cartas entre as sete e confira.

### Problema 1 — O full house escondido

:::hand[A♠,A♦,K♥,K♣,Q♠] Mesa (5 cartas):::

Você tem **Q♥ Q♦**. Qual é sua melhor mão?

→ A mesa já mostra dois pares (A-A e K-K). Suas duas damas mais a Q♠ da mesa fazem **trinca de damas**, e junto com os ases da mesa você tem um **full house — QQQ + AA**. Essas são suas melhores cinco. Os iniciantes travam em "AAKK + Q não é só dois pares?" — não. Assim que você tem trinca, fica com o full house. **O full house ganha dos dois pares.**

### Problema 2 — O flush que na verdade é melhor

:::hand[7♥,8♥,9♥,10♥,J♠] Mesa (5 cartas):::

Você tem **K♥ 2♣**. A mesa tem quatro copas.

→ Seu K♥ é a quinta copas, então você pensa "flush". Mas olhe a sequência: **K♥ 10♥ 9♥ 8♥ 7♥** são cinco copas *seguidas* — um **straight flush com K**, a mão #2. Sempre confira se suas cartas de flush também estão conectadas antes de supor que é só flush.

### Problema 3 — Quando é preciso dividir

:::hand[K♠,K♦,K♥,A♠,2♠] Mesa (5 cartas):::

Você tem **A♥ 3♣**. A mesa já traz trinca de reis.

→ Seu A♥ pareia com o A♠ da mesa e te dá um **full house, KKK + AA**. Mas se seu adversário também tem um Ás, ele tem o *mesmo* full house e divide-se. Se ele não tem Ás e só um par menor, seu full house ganha. A lição: quando a mesa faz quase todo o trabalho, sua mão muitas vezes vale só uma carta extra.

---

## Respostas rápidas para os duelos que todo mundo discute

| Duelo | Ganha | Por quê |
|------|------|------|
| Flush vs Sequência | **Flush** | #5 ganha de #6 |
| Full House vs Flush | **Full House** | #4 ganha de #5 |
| Trinca vs Dois Pares | **Trinca** | #7 ganha de #8 |
| Sequência vs Trinca | **Sequência** | #6 ganha de #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (Ás alto)** | A wheel é a sequência mais baixa |
| Mesmo par, kicker K vs J | **Kicker K** | O kicker mais alto ganha |
| Quadra vs Full House | **Quadra** | #3 ganha de #4 |

---

## Por que a ordem é essa

O ranking não é arbitrário: é pura probabilidade. **Quanto mais difícil de fechar uma mão, mais alto ela está.** Em um baralho de 52 cartas, simplesmente há menos formas de fazer cinco do mesmo naipe do que cinco em sequência de qualquer naipe — por isso o flush fica acima da sequência. Esse único princípio explica todo o ranking.

Ele também explica a grande exceção que você vai encontrar: no **Short Deck (6+) Hold'em**, onde se tiram os dois aos cincos, os flushes ficam mais difíceis que os full houses — então, nesse formato, um **flush ganha de um full house**. A matemática mudou, a ordem mudou. Mais sobre as diferenças por modalidade abaixo.

---

## A rotina de 1 segundo para ler a mesa

Com o relógio correndo, repasse isto em ordem toda vez que a mesa estiver completa:

**1. Primeiro os naipes** — há três ou mais cartas do mesmo naipe na mesa? Se sim, o flush é possível. Olhe seu naipe.

**2. Depois a conexão** — há cartas próximas em valor (como 8-9-10)? Se sim, a sequência está viva.

**3. Por último os pares** — a mesa está pareada? Se sim, full houses e quadras estão em jogo, e seu flush ou sequência pode estar em perigo.

Jogadores treinados leem a mesa nesta ordem — primeiro o perigo (flush/sequência na mesa), depois se a mesa está pareada (o que ameaça tudo). Crie o hábito e você para de pagar à toa no river.

---

## Memorize em 3 passos

| Passo | O que fazer | Tempo |
|------|------|------|
| **1** | Aprenda três grupos: Premium (#1-3), Médio (#4-6), Comum (#7-10) | 1 dia |
| **2** | Treine só os duelos confusos: flush vs sequência, full house vs flush | 3 dias |
| **3** | Assista a streams de pôquer e cante o vencedor antes do dealer | 1-2 semanas |

Agrupar primeiro evita que a ordem pareça dez coisas aleatórias. Os duelos confusos do passo 2 causam 90% dos erros de iniciante, então insista neles.

---

## Ranking de mãos por modalidade

A ordem é comum a quase todas as variantes de pôquer, com alguns detalhes importantes.

| Jogo | Ranking | Diferença principal |
|------|------|------|
| **Texas Hold'em** | Padrão (este guia) | Use 0-2 das suas cartas |
| **Omaha** | Padrão | Você precisa usar *exatamente* 2 das suas 4 cartas |
| **Seven-Card Stud** | Padrão | Sem cartas comunitárias |
| **Short Deck (6+)** | Modificada | O flush ganha do full house; às vezes A-6-7-8-9 conta como sequência |

A conclusão: aprenda a ordem padrão uma vez e ela serve em quase todos os jogos. Só lembre da regra de "exatamente duas" do Omaha e da promoção do flush no Short Deck.

---

## Perguntas frequentes

**Q. O flush ganha da sequência no pôquer?**

A. Sim. O flush é a #5 e a sequência a #6, então o flush sempre ganha. Ele fica acima porque cinco cartas do mesmo naipe são mais difíceis de fechar do que cinco em sequência.

**Q. O full house ganha do flush?**

A. Sim. O full house (#4) ganha do flush (#5) e da sequência. Só perde para a quadra, o straight flush e o royal flush.

**Q. O que é um kicker?**

A. É uma carta que não faz parte da sua mão feita, mas desempata. Com dois pares iguais, ganha a carta lateral (kicker) mais alta. O melhor kicker possível é o Ás.

**Q. Dois jogadores podem ter a mesma mão?**

A. Sim. Se as melhores cinco cartas de ambos forem idênticas em valor, o pote é dividido. Os naipes nunca desempatam no Texas Hold'em.

**Q. É preciso usar as duas cartas da mão?**

A. No Hold'em, não — você forma suas melhores cinco com qualquer combinação das suas duas cartas e das cinco comunitárias, até usando zero. (O Omaha é diferente: você precisa usar exatamente duas.)

**Q. Qual a diferença entre set e trips?**

A. Os dois são trinca. Um *set* é um par na mão mais uma carta da mesa (bem disfarçado); *trips* é um par na mesa mais uma carta sua (mais fácil de ler). O set tira mais fichas.

**Q. Qual é a melhor mão do pôquer?**

A. O Royal Flush (A-K-Q-J-10 do mesmo naipe). Não pode ser batido e só empata com outro royal flush, o que dá pote dividido.

**Q. A trinca é melhor que dois pares?**

A. Sim. A trinca é a #7 e os dois pares a #8, então a trinca ganha. Dois pares só ganham do par e da carta alta.

---

## As 3 coisas para lembrar

1. **A ordem:** Royal Flush > Straight Flush > Quadra > Full House > Flush > Sequência > Trinca > Dois Pares > Par > Carta Alta.
2. **A armadilha:** o flush (#5) ganha da sequência (#6) — e qualquer mesa pareada pode esconder um full house que ganha dos dois.
3. **A realidade:** a maioria dos potes é ganha com par ou carta alta, então seu kicker vale mais do que você imagina.

Aprenda a ordem em uma tarde, treine os duelos confusos e repasse "naipes → sequências → pares" em cada mesa. Faça isso e nunca mais empurre o pote para o lado errado.
`.trim(),
};
