import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "O que é rake no pôquer? Como a casa é paga — e quanto você realmente paga",
  seoTitle: "A taxa que come seus lucros em silêncio — o que é rake?",
  desc: "O rake é a taxa que a casa tira de cada pote no cash game. Veja como funcionam o rake do pote, o time charge e a taxa de torneio — e quanto você paga mesmo.",
  tldr: "O rake é a pequena fatia que a sala de pôquer tira de cada pote para sediar o jogo — geralmente 2,5–10% até um cap de alguns dólares. A maioria das salas não tira nada se todo mundo folda antes do flop ('no flop, no drop'). Ele pesa mais para quem joga stakes baixos e short-handed, e o rakeback devolve uma parte dele aos regulares.",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "Um dealer puxando uma pequena pilha de fichas do pote central para a fenda do rake numa mesa de feltro verde",
  tags: ["rake", "o que é rake no poker", "rake no poker explicado", "rakeback", "cap de rake no poker", "time rake", "rake de torneio", "como funciona o rake no poker"],
  content: `
Levei um mês deprimente de sessões "no zero" para descobrir para onde meu dinheiro estava realmente indo. Eu não estava perdendo para os outros jogadores — eu estava batendo eles, de leve. Eu estava perdendo para a ==fatia da casa em cada pote que eu ganhava.== Essa taxa silenciosa se chama **rake**, e até você entendê-la, você pode ser um jogador vencedor no papel e um perdedor no caixa.

O rake é como uma sala de pôquer ganha dinheiro num jogo em que ela não joga uma única mão. Abaixo está exatamente o que ele é, cada forma de cobrá-lo, a conta honesta de ==g:quanto você realmente paga por sessão==, e como o rakeback recupera parte dele. É a taxa que decide se bater o pôquer de stakes baixos é sequer possível.

---

### Rake num relance

:::stripe
2,5–10% | Faixa típica de rake do pote
$3–$6 | Cap de rake ao vivo comum
No flop, no drop | Geralmente sem rake se todos foldam no preflop
20–40% | Deal típico de rakeback
:::

---

## O que é rake no pôquer?

**O rake é a comissão que uma sala de pôquer tira de um cash game por sediá-lo.** Como o pôquer é jogado jogador-contra-jogador — a casa nunca aposta — o rake é como a sala, o cassino ou o app de fato ganha dinheiro. É uma taxa de serviço pelo dealer, pela mesa, pelas fichas e pela segurança, tirada aos poucos dos potes.

Num cash game ele geralmente é tirado direto do pote: uma pequena porcentagem do dinheiro que está no meio, jogada numa fenda na mesa antes de o vencedor ser pago. Num torneio funciona diferente — a taxa já vem embutida no seu buy-in lá no começo (mais sobre isso abaixo). De qualquer forma, o rake é separado de qualquer coisa que você ganhe ou perca para os outros jogadores, o que é exatamente por que ele é tão fácil de ignorar. Essa é uma das maiores diferenças práticas entre um [cash game e um torneio](/pt/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## Como o rake é tirado? Rake do pote, time charge e dead drop

![Um dealer varrendo algumas fichas do centro do pote para a fenda de rake da mesa antes de empurrar o resto para o vencedor](/images/holdem-rake-drop.webp "Rake do pote: uma pequena porcentagem tirada do pote e recolhida antes de o vencedor ser pago")

Não existe só um tipo de rake. Como a casa recolhe seu dinheiro depende dos stakes e da sala, e as diferenças importam — aqui está a comparação que nenhuma página concorrente coloca sozinha:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipo | Como é tirado | Valor típico | Onde você vai ver |
|:---|:---|:---:|:---|
| **Rake do pote (escalonado)** | % de cada pote, até um cap | 2,5–10%, cap $1–$6 | Maioria dos cash games low/mid, online |
| **Time charge** | Taxa fixa por jogador, a cada 30 min | ~$10–$15 por hora | High-stakes ao vivo ($10/$20+) |
| **Dead drop** | O botão paga um rake fixo por mão | Fixo por mão | Algumas salas ao vivo |
| **Taxa de torneio** | Somada ao buy-in lá no começo | ~5–20% do buy-in | Todo torneio |

</div>

Algumas regras governam como o rake do pote é de fato tirado:

- **No flop, no drop.** Na maioria das salas, se a mão acaba antes do flop — todo mundo folda para um aumento no preflop — a casa não tira **nenhum rake**. (Não é universal: alguns sites, notadamente o GGPoker, tiram rake de alguns potes preflop, então cheque a sua sala.)
- **O cap do rake.** A casa nunca tira a porcentagem cheia num pote gigante — ela para num máximo, comumente **$3–$6 ao vivo** e **$1–$3 online**. Os caps normalmente escalam com os stakes e frequentemente encolhem quando menos jogadores estão na mão (um pote heads-up pode ter cap de $1).
- **Time charge em vez de rake do pote.** Nos stakes mais altos, as salas frequentemente param de raquear os potes e em vez disso cobram uma taxa fixa — digamos $10–$15 por hora por jogador, tirada a cada meia hora. Isso favorece quem ganha potes grandes, já que um pote de $2.000 não é mais raqueado.
- **Dead drop.** Um método menos comum em que só o jogador no botão paga um rake fixo por mão, recolhido antes de as cartas serem distribuídas — feito para que os vencedores de potes grandes não sejam taxados mais do que os outros.

---

## Quanto de rake você realmente paga?

![Um pote modesto de fichas no feltro com alguns dólares já separados como rake, mostrando quanto uma única mão custa em silêncio](/images/holdem-rake-lowstakes.webp "Em jogos de stakes baixos o cap quase não sobe conforme os potes crescem, então os potes pequenos são proporcionalmente os mais raqueados")

Aqui está a parte que mudou como eu penso o jogo. A porcentagem parece minúscula — 5%, com cap de alguns dólares — mas você paga em quase todo pote que ganha, por horas.

**Um jogo ao vivo de $1/$2.** Com 10% de rake com cap de $5 e cerca de 30 mãos distribuídas por hora, a maioria dos potes disputados atinge ou chega perto do cap. Uma única mesa cheia pode pagar **$100+ por hora** para o drop entre todos os jogadores. Esse dinheiro sai direto dos ganhos coletivos — é a razão pela qual uma mesa cheia de jogadores mais ou menos parelhos sangra fichas devagar para a casa.

**A "armadilha do rake" dos stakes baixos.** Essa é a moral que todo iniciante deveria ouvir. Como o cap quase não sobe conforme você desce nos stakes, quanto *mais baixo* você joga, *maior* a mordida que o rake tira proporcionalmente. Um exemplo trabalhado no NL50 online (ilustrativo, e varia conforme quantas mãos você joga):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mesmo jogador, mesmo jogo | Rake pago | Resultado |
|:---|:---:|:---|
| Sala com **cap de $2** | ~5 bb/100 | Win rate de +8 bb/100 continua **vencedor (+3)** |
| Sala com **cap de $4** | ~8–9 bb/100 | +8 bb/100 vira **perdedor (−1)** |

</div>

Mesma habilidade, mesma vantagem sobre o campo — e só o rake é a diferença entre ganhar e perder. É por isso que os grinders sérios de stakes baixos se obcecam com a estrutura de rake e por que as [pot odds](/pt/blog/holdem-pot-odds) e o win rate sempre têm que ser lidos *depois* de a casa tirar a fatia dela.

---

## O que é rakeback?

Como a casa lucra com o volume que você gera, a maioria das salas devolve parte dele para te manter jogando. **Rakeback é uma porcentagem do rake que você paga pessoalmente, devolvida a você** — geralmente através de pontos, cashback ou um programa de fidelidade, pago semanal ou mensalmente. Um deal de 30% de rakeback simplesmente significa que você recebe de volta 30 centavos de cada dólar que você raqueia.

Há duas formas de calcular:

:::compare
Contributed | Dealt
Baseado no rake dos potes **em que você pôs dinheiro** — o método moderno padrão | Dividido igualmente entre **todos que receberam cartas** no pote raqueado, tenham contribuído ou não — hoje raro
:::

Para um jogador casual, o rakeback é um bônus menor. Para um regular de alto volume ele é enorme: a diferença entre um deal de 20% e um de 40% pode valer **dezenas de milhares por ano**, e para muitos grinders no zero, o rakeback *é* o lucro deles. Ele efetivamente baixa o seu rake real, então vale a pena checar antes de escolher onde jogar. Só fique atento a que boa parte dos conselhos de rakeback online é movida por afiliação — trate as páginas de "cadastre-se aqui" com o ceticismo que você daria a qualquer discurso de venda.

---

## Torneios têm rake?

Não do tipo do pote — mas você ainda paga uma taxa, e ela está escondida à vista de todos. Um buy-in de torneio é dividido em duas partes, mostradas com um **sinal de "+"**:

:::pull
Um torneio de **$100 + $9** significa que $100 vão para a premiação e **$9 são a taxa da casa.**
:::

Essa taxa — também chamada de **juice** ou **vig** — é o equivalente do rake no torneio. Ela costuma ser **5–20% do buy-in**, e é fixa: você a paga quer estoure em primeiro, quer ganhe o torneio inteiro. Buy-ins menores carregam taxas proporcionalmente mais altas (um sit-and-go de $3 + $0,30 é 10%), e uma regra de bolso comum é que os formatos **turbo rápidos deveriam ter taxa abaixo de ~13%** para continuarem batíveis no longo prazo. Como a estrutura de um torneio é totalmente diferente da de um cash game, a forma como você paga para jogar também é — uma distinção que vale a pena entender junto com os fundamentos de [torneio vs cash game](/pt/blog/holdem-tournament-vs-cash-game).

---

## Rake online vs ao vivo: qual é mais alto?

É um trade-off de verdade, e a resposta surpreende as pessoas:

- **O rake ao vivo** tende a ser uma **porcentagem mais alta (frequentemente 10%) com um cap mais alto ($4–$6)** — mas você só joga ~30 mãos por hora, então paga menos vezes.
- **O rake online** geralmente é uma **porcentagem mais baixa (3–5%) com um cap menor ($1–$3)** — mas você pode ver 250+ mãos por hora em várias mesas, então um grinder de volume pode pagar *mais* rake por hora do que um jogador ao vivo apesar da taxa menor.

A lição: nunca julgue o rake só pela porcentagem. O que importa é a porcentagem **vezes quantas vezes você paga.** Um jogo online "barato" de 5% que você joga em quatro mesas pode te custar mais do que um jogo ao vivo "caro" de 10% — que é exatamente por que o rakeback e a seleção de mesa importam mais online.

---

:::readnext[Continue lendo]
/pt/blog/holdem-straddle | O que é um straddle no pôquer? | /images/holdem-straddle-hero.webp
/pt/blog/holdem-tournament-vs-cash-game | Torneio vs Cash Game | /images/tournament-table-action.webp
:::

## FAQ

**Q. O que é rake no pôquer?**

A. O rake é a taxa que uma sala de pôquer tira de um cash game por sediá-lo — normalmente uma pequena porcentagem de cada pote (2,5–10%) até um máximo com cap. Como a casa não joga, o rake é a principal fonte de receita dela. Os torneios cobram uma taxa equivalente embutida no buy-in em vez disso.

**Q. Como o rake é calculado?**

A. Na maioria dos cash games é uma porcentagem do pote, recolhida antes de o vencedor ser pago, até um cap de alguns dólares. A porcentagem e o cap variam por sala e stakes, e o cap frequentemente encolhe quando menos jogadores estão na mão. Nos stakes mais altos, as salas podem cobrar uma taxa fixa de tempo por jogador em vez disso.

**Q. Você paga rake se todo mundo folda antes do flop?**

A. Geralmente não. A maioria das salas segue o "no flop, no drop" — se a mão acaba no preflop, nenhum rake é tirado. Não é universal, porém: alguns sites (notadamente o GGPoker) tiram rake de alguns potes preflop, então vale a pena confirmar a regra da sua sala.

**Q. Quanto de rake é tirado num jogo ao vivo de $1/$2?**

A. Comumente 10% do pote com cap em torno de $5. A maioria dos potes disputados atinge o cap, então uma única mesa cheia pode dropar $100 ou mais por hora coletivamente. Essa taxa é por que uma mesa de jogadores parelhos perde fichas devagar para a casa ao longo do tempo.

**Q. O que é rakeback?**

A. O rakeback devolve uma porcentagem do rake que você paga pessoalmente — frequentemente 20–40% — através de pontos, cashback ou um programa de fidelidade. Ele efetivamente baixa o seu rake real. Para jogadores casuais é um bônus pequeno; para regulares de alto volume pode ser a diferença entre um ano perdedor e um vencedor.

**Q. Torneios de pôquer têm rake?**

A. Sim, mas não do pote. A taxa é somada ao seu buy-in e mostrada com um "+" — um torneio de $100 + $9 manda $100 para a premiação e $9 para a casa. Essa taxa (o "juice" ou "vig") é tipicamente 5–20% do buy-in e é paga independentemente de como você termine.

**Q. Como o rake afeta o seu win rate?**

A. Significativamente — especialmente em stakes baixos e short-handed, onde o cap não escala para baixo junto com os stakes. O rake pode transformar um pequeno vencedor num perdedor: o mesmo jogador de +8 bb/100 pode acabar levemente negativo simplesmente por mudar para uma sala com um cap de rake mais alto. Sempre meça o seu win rate depois do rake.

**Q. O rake do pôquer online ou ao vivo é mais alto?**

A. O rake ao vivo é uma porcentagem mais alta com um cap mais alto, mas você joga bem menos mãos por hora. O rake online é uma porcentagem mais baixa com um cap menor, mas jogar em várias mesas significa que você o paga em muito mais mãos — então um grinder de volume pode pagar mais rake por hora online. Julgue o rake pela taxa vezes a frequência, não só pela taxa.

---

## As 3 coisas para lembrar

1. **O rake é a fatia da casa por sediar o jogo** — geralmente 2,5–10% de cada pote até um cap pequeno, e é separado do que você ganha ou perde para os adversários.
2. **Ele pesa mais em stakes baixos.** O cap quase não se move conforme você desce, então proporcionalmente você paga mais rake lá embaixo — a "armadilha do rake" que torna os micro-stakes tão difíceis de bater.
3. **Rakeback e estrutura importam.** Receber 20–40% do seu rake de volta, e escolher salas com caps amigáveis ao jogador, pode virar o seu resultado no longo prazo — meça tudo *depois* do rake.

Agora que você consegue enxergar a fatia da casa, os números que você lê em todo lugar fazem mais sentido: as suas [pot odds](/pt/blog/holdem-pot-odds), o seu win rate, e por que um [straddle](/pt/blog/holdem-straddle) que infla o pote também alimenta o rake em silêncio. O pôquer é batível — mas só quando você está batendo os outros jogadores por *mais* do que a casa tira.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Torneio vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Por que os dois te cobram de formas completamente diferentes</div>
  </a>
  <a href="/pt/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossário</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O que é um straddle?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A blind extra que infla o pote — e o rake</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Leia o seu pote depois de a casa tirar a fatia dela</div>
  </a>
  <a href="/pt/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Como funcionam os torneios de pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Para onde a taxa do buy-in realmente vai</div>
  </a>
</div>
`.trim(),
};

export default POST;
