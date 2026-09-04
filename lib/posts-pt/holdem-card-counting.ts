import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-card-counting",
  title: "Dá para contar cartas no poker? Contagem vs blackjack",
  seoTitle: "Contar cartas no poker? Sim — mas não como no blackjack",
  desc: "A contagem estilo blackjack morre no poker — mas o poker tem a sua. Por que ela não se aplica, se é legal, e como outs e blockers a substituem.",
  tldr: "Não do jeito que você faz no blackjack — o baralho é reembaralhado toda mão e poucas cartas ficam expostas, então rastrear cartas altas e baixas não te dá vantagem nenhuma. Mas o poker tem a sua própria contagem legal: contar outs, usar blockers e rastrear cartas mortas para ler o que o seu adversário não pode ter.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-09-04",
  masterUpdated: "2026-08-14",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🧮",
  image: "/images/holdem-card-counting-hero.webp",
  imageAlt: "Infográfico de um flush draw 9♠ 8♠ num flop Q♠ 7♠ 2♥ com nove outs — a contagem que realmente funciona no poker",
  tags: ["contar cartas poker", "dá para contar cartas no poker", "contar cartas é ilegal no poker", "contagem de cartas vs blackjack", "contar cartas texas holdem", "blockers poker", "contar outs", "card removal poker"],
  content: `
Todo jogador de poker que veio do blackjack faz a mesma pergunta na primeira sessão: "será que eu consigo só contar cartas aqui?" Eu também fiz — passei um mês tentando manter um running count numa mesa de Hold'em antes de um dealer rir e me dizer que eu estava desperdiçando meu cérebro na matemática errada. Ele estava certo. A contagem de blackjack é inútil no poker, mas isso não quer dizer que contar seja. Só quer dizer que você conta ==coisas diferentes.==

==Sim, você "conta cartas" no poker — só não o baralho. Você conta outs, blockers e cartas mortas, e é totalmente legal.== Este guia explica exatamente por que o método do blackjack morre numa mesa de poker, o que é de fato a versão do poker, se algo disso é contra as regras, e a família de poker em que a contagem à moda antiga realmente funciona.

O lado de crunchar números disso — transformar cartas que você enxerga numa decisão de verdade — começa com [contar os seus outs](/pt/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp"), que é a verdadeira habilidade de "contagem" no poker.

---

### Contar no poker, num relance

:::stripe
0 | Vantagem da contagem de baralho estilo blackjack
9 | Outs num flush draw — o número real que você conta
100% | O quão legal é contar outs e blockers
:::

---

## Dá para contar cartas no poker?

**Sim e não — você não consegue contar o baralho do jeito que faz no blackjack, mas você absolutamente conta outs, blockers e cartas mortas, e tudo isso é legal.** O hábito de blackjack de rastrear cartas altas e baixas para achar um "baralho quente" não te dá vantagem nenhuma no poker. A versão do poker é uma matemática diferente para um jogo diferente.

Se você está imaginando um running count de altas e baixas como nos filmes, esquece — ele morre numa mesa de poker por razões estruturais (próxima seção). Mas se "contar cartas" significa ==usar as cartas que você enxerga para descobrir o que provavelmente vem e o que o seu adversário não pode ter,== então o poker é *só* contagem. Essa é a habilidade que separa os vencedores dos esperançosos.

---

## Por que a contagem de cartas do blackjack não funciona no poker

**A contagem de blackjack só funciona porque um shoe vai sendo jogado ao longo de muitas mãos enquanto você tenta vencer um dealer de regras fixas — o poker quebra as três condições.** Eis exatamente por que o método não se aplica:

:::card
🔀 | O baralho reinicia toda mão | A contagem de blackjack precisa de um shoe jogado ao longo de dezenas de mãos para a informação se acumular. O poker reembaralha a cada mão, então nada é carregado adiante — cada mão começa de um baralho cheio e aleatório
🙈 | Poucas cartas ficam expostas | As hole cards de cada jogador ficam viradas para baixo. Você só chega a ver o board compartilhado — um punhado de cartas — nunca o suficiente para rastrear a composição do baralho
👥 | Você joga contra adversários, não contra a casa | Não há um dealer fixo do qual ganhar vantagem. Um "baralho rico em cartas altas" não significa nada quando um par de ases é premium de qualquer jeito — você ganha tendo uma mão melhor ou tomando uma decisão melhor, não por uma contagem favorável
:::

No blackjack, um baralho carregado de cartas altas te favorece matematicamente, então você aposta grande quando a contagem está boa. No poker não existe um "baralho favorável" equivalente — a vantagem vem inteiramente de jogar contra os *jogadores*.

---

## Contagem de cartas: poker vs blackjack

**Os dois jogos pedem informações completamente diferentes, e é por isso que um método não passa para o outro.** Lado a lado:

:::compare
Blackjack | Poker
Você vs a casa, regras fixas | Você vs outros jogadores
Um shoe ao longo de muitas mãos | Reembaralhado toda mão
Rastrear o equilíbrio de altas/baixas do baralho | Nada para rastrear entre as mãos
Apostar grande quando o baralho te favorece | Não existe "baralho favorável"
A contagem pode te fazer ser barrado | A contagem é esperada e legal
:::

O blackjack recompensa a memória do que já saiu; o poker recompensa ler o que você enxerga *agora* — o board, a ação e as cartas que a sua própria mão remove do range do adversário.

---

## A verdadeira "contagem de cartas" no poker: outs, blockers e card removal

**A versão de contagem do poker são três habilidades vivas — contar outs, usar blockers e rastrear cartas mortas — todas feitas de cabeça, todas legais, e todas valendo muito mais do que uma contagem de blackjack jamais valeria.**

### Contar os seus outs

Um ==out== é qualquer carta não vista que melhora a sua mão para uma provável vencedora. Um flush draw tem ==9 outs== (13 de um naipe menos as 4 que você enxerga). Converta outs numa chance aproximada de ganhar com a ==regra do 2 e 4==: multiplique por 4 com duas cartas por vir, por 2 com uma.

Um flush draw de 9 outs fecha até o river cerca de ==g:35%== das vezes (9 × 4 = 36% como estimativa rápida — o valor real é 35,0%). Esse número conta as duas cartas restantes, então ele só decide o call quando você realmente vê as duas: você está all-in no flop sem mais nada para apostar. Se há uma aposta no flop que você terá de pagar de novo no turn, conte só a próxima carta: ==9 ÷ 47 = 19,1%==. O método completo — outs sujos, combo draws, porcentagens exatas — está no [guia de como contar outs](/pt/blog/holdem-outs), e as odds por trás de todo projeto estão na [tabela de probabilidade](/pt/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Blockers (card removal)

Um ==blocker== é uma carta na sua mão que reduz as combinações que o seu adversário pode ter. Se o board mostra três de espadas e você tem o ==b:A♠==, o seu adversário ==r:não pode ter o nut flush== — você está segurando a única carta que o faz. Isso deixa os seus blefes muito mais críveis, porque a mão mais assustadora com que ele pagaria é impossível.

![Infográfico de A♠ J♦ num flop todo de espadas K♠ 9♠ 4♠ — segurar o ás de espadas bloqueia o nut flush](/images/holdem-card-counting-blocker.webp "Segurar o A♠ num board de três espadas significa que nenhum adversário pode ter o nut flush — é o card removal em ação")

Blockers também funcionam parcialmente. Num board ==b:Q-J-9==, o nut straight é K-10. Normalmente há 16 maneiras de ter K-10 (4 reis × 4 dez); se você mesmo tem um rei ou um dez, isso cai para ==12 combinações==, então o nut straight fica 25% menos provável no range dele. Esse é o núcleo da seleção de blefes moderna — mais no [guia de 3-bet e blockers](/pt/blog/holdem-3bet).

### Card removal e cartas mortas

Toda carta que você enxerga remove possibilidades. Você já usou isso ao contar outs: as 9 outs de flush pressupõem 4 cartas do naipe à vista — se você enxergar mais uma fora disso (um adversário mostrando a mão, uma carta virada por engano), aquele out está ==morto== e você cai para 8. Ler o board dessa forma é um ajuste constante e silencioso que bons jogadores fazem em toda street. É contagem, só que não do tipo que precisa de um total corrente.

---

## Contar cartas é ilegal no poker?

**Não — contar outs, calcular odds e usar blockers é 100% legal no poker, porque não passa de matemática de cabeça.** Nenhuma regra em lugar nenhum proíbe pensar. É a definição de habilidade.

Aqui está a parte que as pessoas confundem: contar cartas também não é ilegal no *blackjack* — não é crime, só aritmética mental. Mas, na maioria das jurisdições, um cassino é um negócio privado e pode barrar ou recusar um suspeito de contar, porque um contador custa dinheiro à *casa*. O poker inverte isso por completo: você está jogando contra ==outros jogadores==, e a casa só leva o rake não importa quem ganhe. Ninguém tem qualquer motivo para te impedir de contar os seus outs — então todo o problema de "ser expulso" simplesmente não existe aqui.

:::note
A linha que você nunca deve cruzar é a trapaça física ou informacional — cartas marcadas, conluio, compartilhar info das hole cards ou software de solver em tempo real online. Isso não é "contagem", é fraude. Fazer contas de cabeça sempre vale.
:::

---

## A família de poker em que a contagem tradicional funciona: Seven Card Stud

**No Seven Card Stud, uma boa parte das cartas de cada jogador é distribuída virada para cima — então você genuinamente consegue contar o baralho à moda antiga.** Se você precisa de uma carta específica para completar a sua mão, dá para olhar em volta da mesa e literalmente contar quantos dos seus outs já estão aparecendo nas up-cards dos adversários. Cada um que você identifica é um out morto.

O Hold'em só expõe as cinco cartas comunitárias compartilhadas, então isso fica limitado ao board. Mas o Stud — e os seus parentes, o Razz e o Stud Hi-Lo, que distribuem as mesmas cartas viradas para cima — recompensa exatamente o tipo de rastreamento de cartas em que os contadores de blackjack são bons. É o mais perto que o poker chega da versão do filme.

---

## Como começar a "contar" na sua próxima sessão

**Você não precisa de um sistema — só três hábitos que transformam cartas visíveis em decisões melhores.**

:::steps
Conte os seus outs em todo projeto | No momento em que você tem um projeto, conte as cartas que o completam e multiplique — ×4 só quando as duas cartas vêm de graça (você está all-in no flop), caso contrário ×2 só pela próxima carta. Pague quando essa chance vencer o preço
Pergunte o que a sua mão bloqueia | Antes de blefar, veja se você tem uma carta que torna a mão de call mais forte dele impossível ou menos provável
Ajuste para o que está no board | Subtraia qualquer out que já esteja aparecendo. Cartas que você enxerga são cartas que o seu adversário não pode ter
:::

Faça isso por algumas sessões e vira automático — você vai estar "contando cartas" em toda mão, só que à maneira do poker. O próximo passo é transformar essas contagens em calls e folds com [pot odds](/pt/blog/holdem-pot-odds), a matemática que te diz se os seus outs valem o preço.

---

:::readnext[Continue lendo]
/pt/blog/holdem-outs | Como contar os seus outs | /images/holdem-outs-hero.webp
/pt/blog/holdem-probability | Tabela de odds e probabilidade do poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Dá para contar cartas no poker como no blackjack?**

A. Não. A contagem de blackjack rastreia o equilíbrio de altas e baixas de um shoe jogado ao longo de muitas mãos, mas o poker reembaralha toda mão e mantém as hole cards viradas para baixo, então não há nada para rastrear entre as mãos. O poker tem a sua própria contagem — outs, blockers e cartas mortas.

**Q. Contar cartas é ilegal no poker?**

A. Não. Contar outs, calcular odds e usar blockers é 100% legal — é só matemática de cabeça, e é o núcleo do bom jogo. (Contar cartas também não é tecnicamente ilegal no blackjack; os cassinos apenas barram suspeitos de contar. No poker você joga contra outros jogadores, não contra a casa, então isso nunca acontece.)

**Q. A contagem de cartas funciona no Texas Hold'em?**

A. A contagem de baralho estilo blackjack não — o baralho reinicia a cada mão e poucas cartas ficam expostas. Mas as formas de contagem do poker absolutamente funcionam no Hold'em: contar os seus outs, identificar blockers e ajustar para as cartas no board são habilidades essenciais.

**Q. Por que a contagem de cartas funciona no blackjack mas não no poker?**

A. O blackjack é você contra um dealer de regras fixas usando um shoe ao longo de muitas mãos, então um baralho rico em cartas altas te favorece matematicamente e você aposta de acordo. O poker reembaralha toda mão e te coloca contra outros jogadores, então não há "baralho favorável" para rastrear — a vantagem vem de ler os adversários.

**Q. Qual é o equivalente da contagem de cartas no poker?**

A. Contar outs (cartas que melhoram a sua mão), usar blockers (cartas que você tem que reduzem as combinações do adversário) e rastrear cartas mortas (outs que você já viu sair de jogo — uma carta exposta por engano, uma mão mostrada no fold). Juntos, eles deixam você ler o que provavelmente vem e o que o seu adversário não pode ter.

**Q. Dá para contar cartas no Seven Card Stud?**

A. Sim — muito mais do que no Hold'em. No Stud, várias cartas de cada jogador são distribuídas viradas para cima, então dá para olhar em volta da mesa e contar quantos dos seus outs já estão aparecendo. Isso é contagem de baralho genuína, e é uma vantagem real no Stud.

**Q. Você vai ser expulso de uma sala de poker por contar cartas?**

A. Não. Contar outs e usar blockers é jogo esperado e habilidoso, e a casa só ganha o rake não importa quem vença — então não há motivo para te impedir. Essa é uma diferença chave em relação ao blackjack, onde os cassinos podem barrar contadores.

**Q. Contar outs é a mesma coisa que contar cartas?**

A. É a versão do poker disso. Você não está rastreando o baralho inteiro como um contador de blackjack; você está contando as cartas não vistas específicas que completam a sua mão, e depois convertendo isso numa porcentagem com a regra do 2 e 4 para decidir se continua.

---

## As 3 coisas para lembrar

1. **A contagem de blackjack está morta no poker.** O baralho é reembaralhado toda mão, poucas cartas aparecem, e você joga contra adversários, não contra a casa — então rastrear cartas altas e baixas não te rende nada.
2. **A contagem do poker são outs, blockers e cartas mortas.** Tudo matemática de cabeça, tudo legal, e tudo muito mais valioso do que um running count seria.
3. **É uma habilidade, não um segredo.** Ninguém te barra por isso. Conte os seus outs, pergunte o que você bloqueia e subtraia o que está no board — em toda mão.

Comece pelo número que decide a maioria das mãos: os seus outs. Veja o método completo no [guia de como contar outs](/pt/blog/holdem-outs), depois transforme essas contagens em calls lucrativos com [pot odds](/pt/blog/holdem-pot-odds).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Como contar os seus outs</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">A verdadeira habilidade de contagem no poker</div>
  </a>
  <a href="/pt/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-bet e blockers</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Usar card removal para escolher blefes</div>
  </a>
  <a href="/pt/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tabela de odds e probabilidade do poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Transforme a sua contagem de outs numa porcentagem</div>
  </a>
  <a href="/pt/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matemática</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Como calcular pot odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Se os seus outs valem o preço</div>
  </a>
</div>
`.trim(),
};

export default POST;
