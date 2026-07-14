import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bubble",
  title: "Como jogar a bubble no pôquer — estratégia por big, médio e short stack",
  seoTitle: "Como jogar a bubble no pôquer (stack por stack)",
  desc: "Na bubble, sobreviver vale mais que fichas e a jogada se inverte. Como jogar big, médio ou short stack, além de bubble factor, satélites e hand-for-hand.",
  tldr: "A bubble é o momento logo antes do dinheiro, onde mais uma eliminação paga todo mundo. Como quebrar significa não ganhar nada, sobreviver vale mais que as fichas que você ganharia — então os ranges de call apertam muito enquanto os shoves continuam largos. Big stacks atacam, médios são os mais presos (não os short stacks), e numa bubble de satélite você folda tudo, até ases, assim que sua vaga está garantida.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🫧",
  image: "/images/holdem-bubble-hero.webp",
  imageAlt: "Um short stack de fichas e um big stack gigantesco frente a frente numa mesa de torneio na bubble do dinheiro, uma escada de premiação ao fundo — o momento em que sobreviver passa a valer mais que fichas",
  tags: ["bubble pôquer", "como jogar a bubble", "estratégia de bubble poker", "bubble factor", "short stack bubble", "bubble do dinheiro", "bubble de satélite", "hand for hand poker"],
  content: `
O jogo mais disciplinado que já fiz foi a três jogadores do dinheiro num torneio de sexta, todo mundo foldando como se as cartas estivessem pegando fogo. Eu tinha um stack médio e abri-e-foldei ás-valete duas vezes — mãos que eu aumentaria toda vez num cash game. Duas rodadas depois o short stack quebrou, eu entrei de limp no min-cash… e terminei em 14º por um prêmio mal acima do meu buy-in. ==Eu "sobrevivi" para fora de qualquer dinheiro de verdade.== Essa é a bubble numa história só: jogue com medo demais e você trava trocados; jogue certo e é aqui que torneios são de fato ganhos.

==Na bubble, mais uma quebra paga todo mundo — então, por algumas mãos críticas, continuar vivo vale mais que as fichas que você poderia ganhar.== Esse único fato vira o pôquer normal de cabeça para baixo, e quase todo mundo erra das mesmas duas formas: os big stacks não atacam o suficiente, e os stacks médios pagam demais. Este guia é o manual stack por stack — o que fazer com big, médio ou short stack, nas três bubbles diferentes que você vai enfrentar.

Se você quer a matemática por trás do *porquê* as fichas param de equivaler a dinheiro aqui, isso é [ICM](/pt/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") — este guia é onde essa teoria vira folds e shoves na mesa de [torneio](/pt/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### A bubble num relance

:::stripe
1 quebra | paga todo mundo — sobreviver dispara de valor
apertar calls | manter shoves largos
stack médio | o mais preso, não o short stack
:::

---

## O que é a bubble no pôquer? (E "on the bubble")

**A bubble é o momento logo antes do dinheiro — o ponto em que mais uma eliminação coloca todos que ainda estão sentados nas posições pagas.** Se um torneio paga o top 27, a bubble é atingida com ==28 jogadores restantes==: quebre agora e você não leva nada; sobreviva a mais uma eliminação e o dinheiro está garantido.

Alguns termos que você vai ouvir:

- ==**On the bubble**== — o torneio está a uma (ou poucas) eliminações do dinheiro. O jogo desacelera até quase parar.
- ==**Bubble boy**== — o jogador azarado que quebra a uma vaga do dinheiro e não ganha nada. Ninguém quer o título.
- ==**Stone bubble** (ou bubble dura)== — a única eliminação que estoura a bubble e paga todo mundo que sobrou. Numa stone bubble de verdade, todos os jogadores restantes têm dinheiro garantido no instante em que um jogador quebra.

A bubble importa porque as premiações de torneio são ==concentradas no topo==. O salto de *nada* para um min-cash é o maior salto percentual de toda a estrutura de premiação, e é exatamente por isso que sobreviver de repente supera acumular fichas — mas só por uma janela curta e intensa.

---

## Por que a bubble muda tudo: ICM em um parágrafo

**Porque fichas de torneio não são dinheiro — você só ganha um primeiro prêmio, então as fichas que protegem um dinheiro garantido valem mais que as fichas que buscam mais.** Este é o Modelo de Fichas Independentes (Independent Chip Model), e perto de um pay jump ele significa que ==o risco de quebrar supera a recompensa de ganhar um cara ou coroa==. Um call que é break-even em fichas pode ser uma jogada perdedora em dólares de verdade.

Você não precisa fazer a conta na hora — é para isso que serve a nossa [calculadora de ICM](/calculator), e a explicação completa está no [guia de ICM](/pt/blog/holdem-icm). O que importa na mesa é a consequência: ==os calls ficam muito mais apertados, mas os shoves continuam largos==, porque ganhar sem showdown (fold equity) vale mais do que nunca quando todo mundo está jogando com medo. Lembre de uma linha: **aperte seus calls antes de apertar seus shoves.**

---

## As 3 bubbles que você vai enfrentar: dinheiro vs final table vs satélite

**Nem toda bubble é igual — a bubble do dinheiro, a bubble de final table e a bubble de satélite recompensam estratégias completamente diferentes.** Confundir as três é um dos erros mais caros no pôquer de torneio.

- ==**Bubble do dinheiro**== — o salto de nada para um min-cash. O prêmio por sobreviver é alto, mas o min-cash é pequeno, então você ainda quer *acumular* pelos prêmios de topo. Aplique pressão, não só se esconda.
- ==**Bubble de final table**== — a uma vaga da final table. A pressão de ICM aqui costuma ser a ==mais extrema de todo o torneio== porque os maiores prêmios agora estão em jogo. Short stacks têm mais a ganhar com uma corrida profunda; um big stack com 9 jogadores é, provavelmente, a melhor cadeira do evento inteiro.
- ==**Bubble de satélite**== — a exceção. Toda vaga classificatória paga ==exatamente o mesmo==. Assim que seu stack fica grande o bastante para estar seguro, fichas extras não valem *nada* — então a jogada correta se torna quase o oposto de uma bubble normal (mais sobre a regra de "foldar ases" abaixo).

Guarde essa distinção, porque o conselho stack por stack que vem a seguir muda dependendo de qual bubble você está.

---

![Infográfico de pressão de ICM — um big stack gigantesco de fichas paira sobre um short stack na bubble do dinheiro](/images/holdem-bubble-pressure.webp "Na bubble, a pressão de ICM deixa o big stack atacar — sobreviver vale mais que as fichas no meio")

## Como jogar um BIG stack na bubble

**Ataque sem parar — você tem o menor prêmio de risco da mesa e todo mundo tem que respeitar suas fichas.** O big stack é o maior beneficiário da bubble. Você pode quebrar qualquer um; ninguém pode te quebrar. Então aplique a pressão:

- **Abra largo e faça [3-bet](/pt/blog/holdem-3bet) light**, especialmente contra os stacks médios à sua direita que não conseguem pagar sem arriscar o torneio deles.
- **Mire os stacks médios, não os menores.** Essa é a nuance chave: short stacks estão mais dispostos a te pagar (têm menos a perder), e dobrar um deles é um desastre. Intimide os jogadores que estão ==mais com medo de quebrar== — os médios.
- **Não se empolgue.** Aplicar pressão significa roubar e foldar diante de resistência, não jogar seu stack fora em calls. Se um stack médio tight finalmente dá shove, respeite.

Jogado certo, um big stack pode imprimir fichas na bubble sem nunca mostrar uma mão no showdown.

---

## Como jogar um stack MÉDIO na bubble

**O stack médio é a cadeira mais presa da mesa — e este é o fato que quase todo artigo erra.** As pessoas acham que o short stack sente a maior pressão. Pela matemática de verdade (bubble factor), é o ==stack médio== o mais restrito: grande o bastante para ter equity de prêmio real a perder, não curto o bastante para justificar apostar.

Seu manual:

- **Aperte seu range de call mais que qualquer um.** Você tem mais a perder pagando e quebrando. Folde mãos que você pagaria feliz num cash game — até mãos tão fortes quanto alguns pares e ases grandes contra o shove de um stack maior.
- **Continue roubando dos stacks abaixo de você.** Estar preso nos calls não significa ser passivo. Abra e pressione os stacks mais curtos; só evite se enroscar com os big stacks à sua esquerda.
- **Consciência de escada, não medo.** Você está navegando até o dinheiro, mas não folde até virar um short stack e sair no blind — isso é trocar uma armadilha por uma pior.

Se você sente o torno apertando na bubble, você provavelmente é um stack médio. Jogue os menores potes que der enquanto ainda rouba para se manter.

---

## Como jogar um SHORT stack na bubble

**Vá de all-in ou folde — nunca dê limp ou pague — e use o fato de que seu bubble factor é, na verdade, mais baixo que o do stack médio.** Como você já está provavelmente fadado a quebrar, dobrar te ajuda muito, então você é mais livre para apostar do que os stacks médios presos. Mas você aposta ==sendo o que dá shove==, não o que paga — o [manual completo de push/fold de short stack](/pt/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp") cobre a mecânica:

- **Shove ou folde.** A agressão de primeiro a entrar mantém sua [fold equity](/pt/blog/holdem-when-to-fold), que é sua arma mais valiosa. Dar open-limp ou flat-call com um short stack joga isso fora.
- **Espere se houver stacks mais curtos que você.** Se dois jogadores estão mais curtos, você pode foldar mãos marginais e deixar eles quebrarem primeiro — subindo na escada de graça. Se *você* é o mais curto, não pode se dar ao luxo de esperar; ache um spot e dê shove antes de sair no blind.
- **Não aperte até o esquecimento.** Foldar até dois big blinds "para sobreviver" é como você vira o bubble boy do mesmo jeito. Escolha um range de shove razoável e se comprometa.

O mantra do short stack: fold equity é tudo. Dê shove primeiro, e escolha seu spot antes que os blinds escolham por você.

---

## Bubble factor e prêmio de risco: o número que te diz quando foldar

**O "bubble factor" mede quanto perder seu stack te custa a mais do que ganhar o mesmo pote te ajuda — e se converte direto na equity extra que você precisa para pagar.** Um bubble factor de 1,0 significa que fichas e dinheiro andam juntos (no começo de um torneio). Um bubble factor de 1,5 significa que ==quebrar dói 1,5× mais do que ganhar ajuda==, então você precisa de uma vantagem muito maior para colocar suas fichas no meio.

Aqui está a parte útil: a equity que você precisa para empatar num call é simplesmente ==bubble factor ÷ (1 + bubble factor)==.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bubble factor | Perder dói… | Equity para pagar |
|:--|:--:|:--:|
| 1,0 (sem pressão) | igual ao que ganhar ajuda | 50% |
| 1,3 | 1,3× | ==57%== |
| 1,5 (bubble do dinheiro) | 1,5× | ==60%== |
| 1,7 (bubble de final table) | 1,7× | ==63%== |
| 2,0 (severo) | 2× | ==67%== |

</div>

Então um cara ou coroa de chip-EV que você pegaria a 50% vira um ==fold claro== quando seu bubble factor é 1,5 e você tem só 50% — agora você precisa de 60%. Bubble factors costumam chegar ao pico em torno de ==1,5–1,7== nas bubbles do dinheiro e de final table, e depois caem de volta assim que você está no dinheiro. Coloque seus próprios stacks e premiações na [calculadora de ICM](/calculator) para ver seu número real num spot.

---

## Hand-for-hand e stalling: a mecânica que ninguém explica

**Quando o dinheiro está perto, os torneios mudam para "hand-for-hand" — toda mesa joga exatamente uma mão ao mesmo tempo, e então espera — justamente para impedir que jogadores dêem stall para dentro do dinheiro.** Sem isso, jogadores em mesas lentas poderiam foldar mão após mão enquanto mesas mais rápidas queimavam a bubble. O hand-for-hand nivela o jogo:

- **Como funciona:** o diretor de torneio pausa o relógio; todas as mesas dão uma mão, e nenhuma mesa começa a próxima até que todas tenham terminado. Se dois jogadores quebram na mesma mão hand-for-hand, o que tinha menos fichas no início da mão geralmente fica com a colocação mais baixa (a da bubble).
- **Stalling:** usar todo o time bank em cada decisão para ver menos mãos (e foldar para dentro do dinheiro). Big stacks não têm motivo para dar stall — eles querem mais mãos para atacar. Short e stacks médios às vezes dão stall para sobreviver, ==mas stall em excesso pode render um clock call ou uma penalidade==, então enrole com bom senso.
- **Explore isso:** porque todo mundo desacelera, um big stack que continua aplicando pressão durante o hand-for-hand junta blinds e antes quase sem oposição.

---

## A bubble de satélite: quando foldar ases

**Num satélite, toda vaga paga o mesmo — então, no momento em que seu stack está seguramente dentro da bubble, você folda tudo, incluindo par de ases.** Este é o spot mais contraintuitivo do pôquer, e está correto. Se ganhar um cara ou coroa te dá a ==mesma vaga que você já garantiu== enquanto perdê-lo te elimina, não há recompensa e há risco enorme:

- **Assim que sua vaga está matematicamente segura** (você está dentro da bubble o suficiente para não ser alcançado), folde toda mão — sim, até AA e KK — e deixe os stacks mais curtos brigarem.
- **Dê stall em toda mão** para preservar esse stack. Numa bubble de satélite, o stall não é só tolerado, é ótimo.
- **A única exceção:** pague só se quebrar o short stack específico contra o qual você está travaria a bubble *a seu favor* — ou seja, a eliminação dele garante sua vaga.

Se você tirar uma coisa desta seção: um satélite não é um torneio normal. Fichas acima do limiar de segurança não valem nada, então jogue como se fosse assim.

---

## O maior erro de bubble: jogar pelo min-cash

**Foldar até o min-cash parece seguro, mas troca o dinheiro de verdade do torneio pelo seu menor prêmio.** Como as premiações são concentradas no topo, o min-cash é um piso, não um objetivo — o dinheiro está no alto da escada, e você só chega lá tendo fichas quando a bubble estoura.

Os jogadores que ganham torneios tratam a bubble como uma ==oportunidade de acumular== enquanto todo mundo se esconde. Sobreviver importa por algumas mãos em torno do pay jump; depois que a bubble estoura, a pressão de ICM alivia e é hora de voltar a construir stack para a vitória. Respeite a bubble — e pare de jogar com medo no instante em que ela acaba.

---

:::readnext[Continue lendo]
/pt/blog/holdem-icm | ICM explicado — por que fichas não são dinheiro | /images/holdem-icm-hero.webp
/pt/blog/holdem-when-to-fold | Quando foldar no pôquer | /images/holdem-when-to-fold-hero.webp
:::

## FAQ

**Q. O que significa "on the bubble" no pôquer?**

A. Significa que o torneio está a uma ou poucas eliminações do dinheiro. Se o top 27 paga, a bubble está com 28 jogadores restantes — o próximo a sair não ganha nada, e todos os outros têm dinheiro garantido. O jogo aperta drasticamente porque sobreviver vale, por um breve momento, mais que fichas.

**Q. Quem é o bubble boy no pôquer?**

A. O bubble boy é o jogador que quebra na última posição não paga — a uma vaga do dinheiro — e não ganha nada. É a pior colocação de um torneio: todas as horas, nenhum prêmio. Alguns eventos dão ao bubble boy um pequeno prêmio de consolação, mas tradicionalmente é zero.

**Q. Qual a diferença entre stone bubble e soft bubble?**

A. Uma stone bubble (ou bubble dura) é quando uma única eliminação coloca todos os jogadores restantes no dinheiro ao mesmo tempo. Uma soft bubble é mais frouxa — um trecho de algumas eliminações perto do dinheiro em vez de uma vaga exata. A stone bubble cria a pressão mais extrema porque uma quebra paga todo mundo que sobrou.

**Q. Você deve foldar na bubble?**

A. Você deve foldar *calls* muito mais que o normal, mas não tudo — e deve continuar dando shove e roubando. Sobreviver vale mais que fichas perto do pay jump, então pagar e quebrar é o erro caro. Aperte muito seu range de call enquanto mantém sua agressão de primeiro a entrar larga.

**Q. Os short stacks sentem a maior pressão de bubble?**

A. Não — esse é o equívoco comum. Pelo bubble factor, o stack médio é o mais restrito: equity de prêmio suficiente a perder, não curto o bastante para justificar apostar. Short stacks na verdade têm um bubble factor mais baixo porque quebrar já é provável e dobrar ajuda muito, então eles podem apostar com mais liberdade (dando shove, não pagando).

**Q. O que é o jogo hand-for-hand?**

A. Perto da bubble do dinheiro, todas as mesas jogam exatamente uma mão simultaneamente e então esperam todas as mesas terminarem antes da próxima mão. Ele existe para impedir o stalling — sem isso, jogadores poderiam foldar devagar numa mesa para se infiltrar no dinheiro enquanto outra mesa estourava a bubble mais rápido.

**Q. Por que você foldaria ases numa bubble de satélite?**

A. Porque num satélite toda vaga paga o mesmo, então, assim que seu stack está seguramente dentro da bubble, ganhar uma mão não te dá nada a mais (você já tem sua vaga) enquanto perdê-la te elimina. Com todo o risco e nenhuma recompensa, foldar até par de ases é matematicamente correto.

---

## As 3 coisas para lembrar

1. **Sobreviver vale mais que fichas — por algumas mãos.** Perto do pay jump, aperte seus calls e mantenha seus shoves largos. Depois volte a acumular assim que a bubble estoura.
2. **O stack médio é a armadilha, não o short stack.** Big stacks atacam os médios; médios jogam mínimo; short stacks dão shove primeiro e usam a fold equity.
3. **Conheça seu tipo de bubble.** Bubbles do dinheiro, de final table e de satélite recompensam jogos diferentes — e num satélite, um stack seguro folda tudo, até ases.

O motor por trás de tudo isso é o [ICM](/pt/blog/holdem-icm); a disciplina por trás dos folds é [saber a hora de largar](/pt/blog/holdem-when-to-fold).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM explicado</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A matemática por trás de por que a bubble importa</div>
  </a>
  <a href="/pt/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Estratégia de torneio</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">O pilar ao qual a bubble pertence</div>
  </a>
  <a href="/pt/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Quando foldar no pôquer</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A disciplina que a bubble exige</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ferramenta grátis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Calculadora de ICM</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Descubra seu número real de bubble factor</div>
  </a>
</div>
`.trim(),
};

export default POST;
