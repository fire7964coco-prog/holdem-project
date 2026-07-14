import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "O que é kicker no pôquer — regras, contagem e o ás dominado",
  seoTitle: "O que é kicker no pôquer? A carta lateral que leva o pote",
  desc: "O kicker é a carta lateral que desempata no pôquer — quais mãos têm um e quantos, por que A9 perde para AK e a exceção da quadra que quase todo guia erra.",
  tldr: "O kicker é a carta lateral mais alta que não faz parte da sua mão feita — ele desempata quando dois jogadores têm o mesmo valor. Um par usa 3 kickers, dois pares 1, a trinca 2; sequências, flushes e full houses não têm nenhum. É por isso que AK ganha de AQ quando a mesa pareia um ás.",
  category: "hand-rankings",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "Dois jogadores virando A-K e A-Q no showdown com um ás na mesa — o kicker rei decidindo quem leva o pote",
  tags: ["kicker poker", "o que e kicker no poker", "regras do kicker", "flush tem kicker", "jogar a mesa", "as dominado", "carta kicker", "quadra tem kicker"],
  content: `
A mão que finalmente me ensinou o que é um kicker me custou um buy-in inteiro. Eu tinha ==b:A♠ 9♣==, a mesa pareou meu ás e eu fui de all-in achando que top pair era ouro. Ele virou ==b:A♥ K♦== — o mesmo par de ases, mas o rei dele superava meu nove, e o pote deslizou para o lado dele. Eu não tinha perdido para uma *mão* melhor; tinha perdido para uma ==carta lateral melhor.== Essa carta lateral é o kicker, e ele decide mais potes do que qualquer iniciante imagina.

==O kicker é o desempate embutido no próprio pôquer — quando dois jogadores têm o mesmo valor, ganha a carta restante mais alta.== A maioria dos guias te dá uma definição de uma linha e um exemplo de AK contra AQ. Este aqui te dá o quadro completo: exatamente quais mãos têm kicker (e quantos), a única exceção que todo mundo erra e por que "jogar a mesa" significa que seu kicker de repente não importa mais nada.

Onde o kicker se encaixa no quadro maior do [ranking de mãos de pôquer](/pt/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") é simples: ele só aparece *depois* que dois jogadores empatam no valor — nunca ganha de uma mão de valor mais alto.

---

### Kickers de relance

:::stripe
3 | Kickers em uma mão de um par
1 | Kicker em dois pares (e na quadra)
0 | Kickers em uma sequência, flush ou full house
:::

---

## O que é um kicker no pôquer?

**O kicker é a carta mais alta da sua mão de cinco cartas que não faz parte da sua combinação de valor — ele define o vencedor quando dois jogadores têm o mesmo valor.** Também é chamado de "carta lateral". O pôquer é sempre um jogo de cinco cartas (suas melhores cinco entre sete no Hold'em), então, assim que seu par ou trinca está travado, os espaços restantes são preenchidos por kickers.

A ideia central: um kicker ==nunca ganha de uma mão de valor mais alto.== Um par de reis com kicker dois ainda esmaga um par de dezes com kicker ás — valor primeiro, kicker só como desempate. Kickers só importam quando os ==r:valores são idênticos==: par contra o mesmo par, trinca contra a mesma trinca.

Digamos que você tenha A-K e seu adversário tenha A-Q, e a mesa pareie um ás. Os dois têm "um par de ases" — valor idêntico. Agora as cartas laterais decidem, e seu rei supera a dama dele. Ninguém fez uma mão melhor; o kicker apenas fez seu trabalho silencioso.

---

## Quais mãos de pôquer têm kicker — e quais não têm

**Só as mãos que usam menos de cinco cartas para a combinação têm kicker — tudo que preenche as cinco cartas sozinho não tem nenhum.** Esta é a tabela que os concorrentes enterram no meio de parágrafos. Aqui está ela de relance:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão | Tem kicker? | Cartas kicker |
|:---|:---:|:---:|
| Carta alta | Sim — as cinco comparadas em ordem | até 4 |
| Um par | ✅ Sim | 3 |
| Dois pares | ✅ Sim | 1 |
| Trinca | ✅ Sim | 2 |
| Quadra | ✅ Sim (raramente importa) | 1 |
| Sequência | ❌ Não | — |
| Flush | ❌ Não* | — |
| Full house | ❌ Não | — |
| Straight flush / Royal flush | ❌ Não | — |

</div>

A lógica é pura aritmética: **cartas da combinação + kickers sempre somam cinco.** Um par usa 2 cartas, então 3 kickers preenchem o resto. Uma sequência, flush ou full house já usa as cinco, então não sobra nada para desempatar — duas sequências ou dois full houses se resolvem pelos valores *dentro* deles, não por uma carta lateral.

==*Os flushes são a exceção com asterisco:== tecnicamente, um flush não tem "kicker". Quando dois flushes se enfrentam, você compara as cinco cartas da mais alta à mais baixa (um flush com ás ganha de um flush com rei). As pessoas chamam de forma solta a carta mais alta de "kicker", mas, a rigor, é uma comparação de cinco cartas altas. A ordem completa de desempate de cada mão está em [como os empates são desfeitos no pôquer](/pt/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Quantos kickers cada mão usa?

**Um par usa três kickers, a trinca usa dois, e dois pares e a quadra usam só um.** Saber a contagem te diz exatamente até onde um desempate pode ir.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mão | Combinação | + Kickers | = 5 cartas |
|:---|:---:|:---:|:---:|
| Um par | 2 | 3 | ✅ |
| Trinca | 3 | 2 | ✅ |
| Dois pares | 4 | 1 | ✅ |
| Quadra | 4 | 1 | ✅ |

</div>

Isso importa no showdown porque os kickers são comparados ==em ordem, do mais alto primeiro.== Com um par, se os primeiros kickers empatam, você passa para o segundo, depois o terceiro. Dois jogadores podem ter o mesmo par *e* o mesmo kicker de topo e ainda serem separados pela terceira carta — que é exatamente por que "meu kicker era bom" nem sempre é bom o suficiente.

---

## AK vs AQ: como um kicker decide o vencedor

Vamos rodar carta por carta para deixar a mecânica concreta.

A mesa é ==b:A♣ 9♦ 5♠ 2♥ 7♣==. Você tem ==b:A♠ K♠==, seu adversário tem ==b:A♦ Q♦==.

- **Você:** A♠ K♠ + mesa → um par de ases. Melhores cinco = ==g:A♠ A♣ K♠ 9♦ 7♣== (par de ases, kickers K-9-7).
- **Adversário:** A♦ Q♦ + mesa → também um par de ases. Melhores cinco = ==A♦ A♣ Q♦ 9♦ 7♣== (kickers Q-9-7).

Mesmo par, então compare os kickers de cima para baixo: seu ==g:K ganha da Q dele.== Você vence, A-A-K-9-7 contra A-A-Q-9-7. O 9 e o 7 nem entram em jogo — o primeiro kicker resolveu.

:::note[Repare que as duas mãos dividem o 9 e o 7 da mesa. Kickers também podem vir da mesa: se a carta lateral mais alta é comunitária, ela preenche a mão dos *dois* jogadores e a próxima carta decide. Sua carta de mão só é kicker se ela superar o que já está na mesa.]:::

---

## Jogar a mesa: quando seu kicker não conta

**Se as cinco cartas comunitárias já formam a melhor mão possível e suas cartas de mão não podem melhorá-la, você está "jogando a mesa" — e não existe kicker nenhum.** Todos que continuam na mão usam as mesmas cinco cartas, então o pote é dividido.

A mesa é ==b:10♠ J♦ Q♣ K♥ A♠== — uma sequência feita de dez a ás (Broadway), em naipes variados, então nenhum flush é possível.

- Você tem ==b:2♣ 3♦==. Suas melhores cinco são a sequência da mesa; o 2 e o 3 não somam nada.
- Seu adversário tem ==b:4♥ 5♦==. Mesma história — a sequência da mesa também é a melhor cinco dele.

Nenhum de vocês consegue passar do ás, então os dois "jogam a mesa" e ==g:dividem o pote.== Uma sequência não tem kicker, então essas cartas de mão são peso morto. Quando você ouve "a mesa joga", é isto — e é o único ponto em que uma carta de mão de aparência forte não vale absolutamente nada. (Mais sobre identificar esses runouts em [ler a mesa](/pt/blog/holdem-reading-the-board).)

---

## O ás dominado: por que A9 perde para AK

**Uma mão está "dominada" quando divide uma carta com uma mão mais forte e vai perder a batalha do kicker quase toda vez que conectar — a armadilha clássica é um ás fraco como A9 contra AK.** É aqui que os kickers deixam de ser curiosidade e passam a custar dinheiro.

![Duas mãos iniciais lado a lado no feltro verde — A-K ao lado de A-9 — mostrando como o mesmo ás com um kicker mais fraco vira uma armadilha dominada](/images/holdem-kicker-dominated.webp "Mesmo ás, destino diferente: o kicker é o que separa uma mão premium de uma dominada")

De volta ao meu buy-in. Mesa ==b:A♦ 7♣ 2♥ Q♠ 4♦==, sem sequência nem flush por ali.

- **A9:** A♠ 9♣ → par de ases, melhores cinco ==A♠ A♦ Q♠ 9♣ 7♣==.
- **AK:** A♥ K♦ → par de ases, melhores cinco ==g:A♥ A♦ K♦ Q♠ 7♣==.

Mesmo par de novo — e meu 9 nem teve direito a voto. Ele foi empurrado para segundo kicker pela dama da mesa, e a comparação se resolveu no primeiro kicker: o K dele contra a Q da mesa — então, para todos os efeitos, meu "kicker" estava ==r:morto== antes de a mão começar. Isso é dominação: quando você acerta seu ás, muitas vezes está só pagando um ás maior. É a razão inteira de a [tabela de mãos iniciais](/pt/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") tratar A9 offsuit com muito mais cautela do que AK — o kicker é a diferença entre uma mão premium e uma armadilha.

---

## A quadra tem kicker?

**Sim — a quadra tem um kicker de uma carta, mas ele quase nunca decide uma mão no Hold'em porque a quadra costuma estar compartilhada na mesa.** Esta é a exceção que a maioria dos guias erra ao jogar a quadra no balaio das "mãos de cinco cartas que não têm kicker".

A conta é clara: quatro cartas fazem a quadra, uma carta é o kicker. Ela só importa quando dois jogadores de alguma forma empatam na *mesma* quadra — o que, no Hold'em, exige que as quatro estejam na mesa (já que só há quatro de cada valor). Se a mesa é ==b:5♠ 5♥ 5♦ 5♣ K♦==, todo mundo tem quadra de cincos, e a quinta carta é o kicker: um jogador com um ás joga ==g:5-5-5-5-A== e ganha de quem fica com o ==5-5-5-5-K== da mesa. Raro, mas real — e estar certo nos casos de borda é o que separa um guia confiável de um vago.

---

:::readnext[Continue lendo]
/pt/blog/holdem-hand-rankings | Ranking de Mãos de Pôquer (Ordem Completa) | /images/holdem-hand-rankings-hero.webp
/pt/blog/holdem-tiebreak-rules | Como os Empates São Desfeitos no Pôquer | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. O que é um kicker no pôquer?**

A. O kicker é a carta lateral mais alta da sua mão de cinco cartas que não faz parte da sua combinação de valor. Ele desempata quando dois jogadores têm o mesmo valor — por exemplo, A-K ganha de A-Q quando a mesa pareia um ás, porque o kicker rei supera a dama. Um kicker nunca ganha de uma mão de valor mais alto.

**Q. O flush tem kicker?**

A. Não. Um flush usa as cinco cartas, então não há kicker separado. Quando dois flushes se enfrentam, você compara as cinco cartas da mais alta à mais baixa — um flush com ás ganha de um flush com rei. As pessoas às vezes chamam a carta mais alta de "kicker" de forma solta, mas é, na verdade, uma comparação de cinco cartas.

**Q. A sequência tem kicker?**

A. Não. Uma sequência é cinco cartas consecutivas, então já está completa. Se dois jogadores fazem a mesma sequência, dividem o pote — cartas de mão extras não importam. Só uma sequência mais alta ganha de uma mais baixa.

**Q. O full house tem kicker?**

A. Não. Um full house é uma trinca mais um par — as cinco cartas. Os empates se resolvem primeiro pelo valor da trinca, depois pelo par, nunca por uma carta lateral.

**Q. A quadra tem kicker?**

A. Sim, a quadra tem um kicker de uma carta, mas ele raramente importa no Hold'em. Ele só decide uma mão quando dois jogadores empatam na mesma quadra exata — o que exige que as quatro cartas estejam na mesa — e aí ganha a quinta carta mais alta.

**Q. Quantos kickers há em uma mão de pôquer?**

A. Depende da mão: um par usa três kickers, a trinca usa dois, e dois pares e a quadra usam um cada. Sequências, flushes, full houses e straight flushes não têm kicker porque já preenchem as cinco cartas.

**Q. O que é um bom kicker no pôquer?**

A. Um alto — um kicker ás ou rei é forte, enquanto um kicker baixo como um nove te deixa "dominado". É por isso que AK e AQ são muito melhores que A9 ou A5: quando todo mundo pareia o ás, o maior kicker leva o pote.

**Q. O que significa "jogar a mesa"?**

A. Jogar a mesa significa que as cinco cartas comunitárias são sua melhor mão e suas cartas de mão não podem melhorá-la. Como todo mundo usa as mesmas cinco cartas, o pote é dividido. Não há kicker porque a mesa já forma uma mão completa de cinco cartas.

**Q. Os kickers importam no Texas Hold'em?**

A. Muito. Como todo mundo divide as cartas comunitárias, os jogadores frequentemente fazem o mesmo par ou a mesma trinca, e o kicker decide esses potes. Escolher mãos com kickers fortes (e foldar as dominadas) é uma parte central do jogo vencedor.

---

## As 3 coisas para lembrar

1. **Kicker = carta lateral, só desempate.** Ele resolve empates entre valores iguais e nunca ganha de uma mão de valor mais alto.
2. **Combinação + kickers = cinco.** Um par tem 3 kickers, a trinca 2, dois pares e a quadra 1; sequências, flushes e full houses não têm nenhum.
3. **Kickers decidem dinheiro de verdade.** A dominação (A9 vs AK) e jogar a mesa se resumem ao kicker — escolha mãos com cartas laterais fortes e saiba quando a sua está morta.

Acerte o kicker e uma categoria inteira de mãos "como foi que eu perdi essa?" deixa de ser mistério. Daqui, veja a ordem completa do [ranking de mãos de pôquer](/pt/blog/holdem-hand-rankings), ou as [regras completas de desempate](/pt/blog/holdem-tiebreak-rules) para cada tipo de mão.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ranking de Mãos de Pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A ordem completa embaixo da qual o kicker fica</div>
  </a>
  <a href="/pt/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como os Empates São Desfeitos</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ordem completa de desempate de cada mão</div>
  </a>
  <a href="/pt/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Mãos Iniciais</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabela de Mãos Iniciais</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que ases de kicker fraco são foldados</div>
  </a>
  <a href="/pt/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Leitura da Mesa</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como Ler a Mesa</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Identifique quando você está jogando a mesa</div>
  </a>
</div>
`.trim(),
};

export default POST;
