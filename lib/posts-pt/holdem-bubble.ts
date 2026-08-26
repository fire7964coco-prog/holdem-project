import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bubble",
  title: "Como jogar a bolha no poker — estratégia por big, médio e short stack",
  seoTitle: "Como jogar a bolha no poker (stack por stack)",
  desc: "Na bolha, sobreviver vale mais que fichas e a jogada se inverte. Como jogar big, médio ou short stack, além de bubble factor, satélites e hand-for-hand.",
  tldr: "A bolha é o momento logo antes do dinheiro, onde mais uma eliminação paga todo mundo. Como quebrar significa não ganhar nada, sobreviver vale mais que as fichas que você ganharia — então os ranges de call apertam muito enquanto os shoves continuam largos. Big stacks atacam, médios são os mais presos (não os short stacks), e numa bolha de satélite você folda tudo, até ases, assim que sua vaga está garantida.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-08-26",
  masterUpdated: "2026-08-26",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🫧",
  image: "/images/holdem-bubble-hero.webp",
  imageAlt: "Um short stack de fichas e um big stack gigantesco frente a frente numa mesa de torneio na bolha do dinheiro, uma escada de premiação ao fundo — o momento em que sobreviver passa a valer mais que fichas",
  tags: ["bolha poker", "como jogar a bolha", "o que é bolha no poker", "bubble factor", "short stack na bolha", "bolha do dinheiro", "bolha de satélite", "hand for hand poker"],
  content: `
O jogo mais disciplinado que já fiz foi a três jogadores do dinheiro num torneio de sexta, todo mundo foldando como se as cartas estivessem pegando fogo. Eu tinha um stack médio e abri e foldei ás-valete duas vezes — mãos que eu aumentaria toda vez num cash game. Duas rodadas depois o short stack quebrou, eu entrei raspando no min-cash… e terminei em 14º por um prêmio mal acima do meu buy-in. ==De tanto "sobreviver", fiquei fora de qualquer dinheiro de verdade.== Essa é a bolha numa história só: jogue com medo demais e você trava trocados; jogue certo e é aqui que torneios são de fato ganhos.

==Na bolha, mais uma eliminação paga todo mundo — então, por algumas mãos críticas, continuar vivo vale mais que as fichas que você poderia ganhar.== Esse único fato vira o poker normal de cabeça para baixo, e quase todo mundo erra das mesmas duas formas: os big stacks não atacam o suficiente, e os stacks médios pagam demais. Este guia é o manual stack por stack — o que fazer com big, médio ou short stack, nas três bolhas diferentes que você vai enfrentar.

Se você quer a matemática por trás do *porquê* as fichas param de equivaler a dinheiro aqui, isso é [ICM](/pt/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") — este guia é onde essa teoria vira folds e shoves na mesa de [torneio](/pt/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### A bolha num relance

:::stripe
1 eliminação | paga todo mundo — sobreviver dispara de valor
apertar calls | manter shoves largos
stack médio | o mais preso, não o short stack
:::

---

## O que é a bolha no poker? (E "on the bubble")

**A bolha é o momento logo antes do dinheiro — o ponto em que mais uma eliminação coloca todos que ainda estão sentados nas posições pagas.** Se um torneio paga o top 27, a bolha é atingida com ==28 jogadores restantes==: quebre agora e você não leva nada; sobreviva a mais uma eliminação e o dinheiro está garantido.

Alguns termos que você vai ouvir:

- ==**On the bubble**== — o torneio está a uma (ou poucas) eliminações do dinheiro. O jogo desacelera até quase parar.
- ==**Bubble boy**== — o jogador azarado que quebra a uma vaga do dinheiro e não ganha nada. Por aqui, o pessoal também diz que ele "foi o bolha" do torneio. Ninguém quer o título.
- ==**Stone bubble** (ou bolha dura)== — a única eliminação que estoura a bolha e paga todo mundo que sobrou. Numa stone bubble de verdade, todos os jogadores restantes têm dinheiro garantido no instante em que um jogador quebra.

A bolha importa porque as premiações de torneio são ==concentradas no topo==. O salto de *nada* para um min-cash é o maior salto percentual de toda a estrutura de premiação, e é exatamente por isso que sobreviver de repente supera acumular fichas — mas só por uma janela curta e intensa.

---

## Por que a bolha muda tudo: ICM em um parágrafo

**Porque fichas de torneio não são dinheiro — você só ganha um primeiro prêmio, então as fichas que protegem um dinheiro garantido valem mais que as fichas que buscam mais.** Este é o Modelo Independente de Fichas (Independent Chip Model), e perto de um pay jump ele significa que ==o risco de quebrar supera a recompensa de ganhar um cara ou coroa==. Um call que é break-even em fichas pode ser uma jogada perdedora em dólares de verdade.

Você não precisa fazer a conta na hora — é para isso que serve a nossa [calculadora de ICM](/en/calculator) (em inglês), e a explicação completa está no [guia de ICM](/pt/blog/holdem-icm). O que importa na mesa é a consequência: ==os calls ficam muito mais apertados, mas os shoves continuam largos==, porque ganhar sem showdown (fold equity) vale mais do que nunca quando todo mundo está jogando com medo. Lembre de uma linha: **aperte seus calls antes de apertar seus shoves.**

---

## As 3 bolhas que você vai enfrentar: dinheiro vs final table vs satélite

**Nem toda bolha é igual — a bolha do dinheiro, a bolha de final table e a bolha de satélite recompensam estratégias completamente diferentes.** Confundir as três é um dos erros mais caros no poker de torneio.

- ==**Bolha do dinheiro**== — o salto de nada para um min-cash. O prêmio por sobreviver é alto, mas o min-cash é pequeno, então você ainda quer *acumular* pelos prêmios de topo. Aplique pressão, não só se esconda.
- ==**Bolha de final table**== — a uma vaga da final table. A pressão de ICM aqui costuma ser a ==mais extrema de todo o torneio== porque os maiores prêmios agora estão em jogo. Short stacks têm mais a ganhar com uma corrida profunda; um big stack nessa bolha é, provavelmente, a melhor cadeira do evento inteiro.
- ==**Bolha de satélite**== — a exceção. Toda vaga classificatória paga ==exatamente o mesmo==. Assim que seu stack fica grande o bastante para estar seguro, fichas extras não valem *nada* — então a jogada correta se torna quase o oposto de uma bolha normal (mais sobre a regra de "foldar ases" abaixo).

Guarde essa distinção, porque o conselho stack por stack que vem a seguir muda dependendo de qual bolha você está.

---

![Infográfico de pressão de ICM — um big stack gigantesco de fichas paira sobre um short stack na bolha do dinheiro](/images/holdem-bubble-pressure.webp "Na bolha, a pressão de ICM deixa o big stack atacar — sobreviver vale mais que as fichas no meio")

## Como jogar um BIG stack na bolha

**Ataque sem parar — você tem o menor risk premium (prêmio de risco) da mesa e todo mundo tem que respeitar suas fichas.** O big stack é o maior beneficiário da bolha. Você pode quebrar qualquer um; ninguém pode te quebrar. Então aplique a pressão:

- **Abra largo e faça [3-bet](/pt/blog/holdem-3bet) light**, especialmente contra os stacks médios à sua direita que não conseguem pagar sem arriscar o torneio deles.
- **Mire os stacks médios, não os menores.** Essa é a nuance chave: short stacks estão mais dispostos a te pagar (têm menos a perder), e dobrar um deles é um desastre. Intimide os jogadores que estão ==mais com medo de quebrar== — os médios.
- **Não se empolgue.** Aplicar pressão significa roubar e foldar diante de resistência, não jogar seu stack fora em calls. Se um stack médio tight finalmente dá shove, respeite.

Jogado certo, um big stack pode imprimir fichas na bolha sem nunca mostrar uma mão no showdown.

---

## Como jogar um stack MÉDIO na bolha

**O stack médio é a cadeira mais presa da mesa — e este é o fato que quase todo artigo erra.** As pessoas acham que o short stack sente a maior pressão. Pela matemática de verdade (bubble factor), é o ==stack médio== o mais restrito: grande o bastante para ter equity de prêmio real a perder, não curto o bastante para justificar apostar.

Seu manual:

- **Aperte seu range de call mais que qualquer um.** Você tem mais a perder pagando e quebrando. Folde mãos que você pagaria feliz num cash game — até mãos tão fortes quanto alguns pares e ases grandes contra o shove de um stack maior.
- **Continue roubando dos stacks abaixo de você.** Estar preso nos calls não significa ser passivo. Abra e pressione os stacks mais curtos; só evite se enroscar com os big stacks à sua esquerda.
- **Consciência de escada, não medo.** Você está navegando até o dinheiro, mas não folde até virar um short stack e sair no blind — isso é trocar uma armadilha por uma pior.

Se você sente o cerco apertando na bolha, você provavelmente é um stack médio. Jogue os menores potes que der enquanto ainda rouba para se manter.

---

## Como jogar um SHORT stack na bolha

**Vá de all-in ou folde — nunca dê limp ou pague — e use o fato de que seu bubble factor é, na verdade, mais baixo que o do stack médio.** Como você já está provavelmente fadado a quebrar, dobrar te ajuda muito, então você é mais livre para apostar do que os stacks médios presos. Mas você aposta ==sendo o que dá shove==, não o que paga — o [manual completo de push/fold de short stack](/pt/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp") cobre a mecânica:

- **Shove ou folde.** A agressão de primeiro a entrar mantém sua [fold equity](/pt/blog/holdem-when-to-fold), que é sua arma mais valiosa. Dar open-limp ou flat-call com um short stack joga isso fora.
- **Espere se houver stacks mais curtos que você.** Se dois jogadores estão mais curtos, você pode foldar mãos marginais e deixar eles quebrarem primeiro — subindo na escada de graça. Se *você* é o mais curto, não pode se dar ao luxo de esperar; ache um spot e dê shove antes de sair no blind.
- **Não aperte até virar pó.** Foldar até dois big blinds "para sobreviver" é como você vira o bubble boy do mesmo jeito. Escolha um range de shove razoável e se comprometa.

O mantra do short stack: fold equity é tudo. Dê shove primeiro, e escolha seu spot antes que os blinds escolham por você.

---

## Bubble factor e risk premium: o número que te diz quando foldar

**O "bubble factor" mede quanto perder seu stack te custa a mais do que ganhar o mesmo pote te ajuda — e se converte direto na equity extra (o risk premium) que você precisa para pagar.** Um bubble factor de 1,0 significa que fichas e dinheiro andam juntos (no começo de um torneio). Um bubble factor de 1,5 significa que ==quebrar dói 1,5× mais do que ganhar ajuda==, então você precisa de uma vantagem muito maior para colocar suas fichas no meio.

Aqui está a parte útil: a equity que você precisa para empatar num call é ==c · BF ÷ (P + c · BF)==, onde **c** é o que o call te custa e **P** é o pote que você levaria. Quando você arrisca exatamente o que pode ganhar, isso encolhe para a forma que se costuma citar — ==BF ÷ (1 + BF)== — que é a usada na tabela abaixo.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bubble factor | Perder dói… | Equity sem dinheiro morto |
|:--|:--:|:--:|
| 1,0 (sem pressão) | igual ao que ganhar ajuda | 50% |
| 1,3 | 1,3× | ==57%== |
| 1,5 (bolha do dinheiro) | 1,5× | ==60%== |
| 1,7 (bolha de final table) | 1,7× | ==63%== |
| 2,0 (severo) | 2× | ==67%== |

</div>

Leia aquela última coluna como um teto, não como o seu spot: potes reais de bolha carregam dinheiro morto, e dinheiro morto empurra a exigência **para baixo**. Se o small blind dá jam de 10bb e você paga 9bb num pote que já tem 12bb, com bubble factor de 1,5 você precisa de ==52,9%==, não de 60% — e sem nenhuma pressão de ICM são simples pot odds, ==42,9%==.

A outra metade é que o bubble factor acompanha **quem está do outro lado**, não a fase. Em quatro jogadores com três pagos, um stack médio contra o chip leader carrega um bubble factor perto de ==3,0==, enquanto esse mesmo stack médio contra o jogador mais curto mal passa de ==1,1==; stacks iguais ficam perto de ==1,9==, e uma bolha de final table com seis roda de ==2,0== para cima. Trate 1,5–1,7 como o piso de uma bolha séria, não como o pico — e sim, caem de volta assim que você está no dinheiro. Coloque seus próprios stacks e premiações na [calculadora de ICM](/en/calculator) para ver seu número real num spot.

---

## Hand-for-hand e stalling: a mecânica que ninguém explica

**Quando o dinheiro está perto, os torneios mudam para "hand-for-hand" — toda mesa joga exatamente uma mão ao mesmo tempo, e então espera — justamente para impedir que jogadores deem stall para dentro do dinheiro.** Sem isso, jogadores em mesas lentas poderiam foldar mão após mão enquanto mesas mais rápidas queimavam a bolha. O hand-for-hand nivela o jogo:

- **Como funciona:** o diretor de torneio pausa o relógio, e a partir daí cada mão desconta ==2 minutos== fixos do nível, não importa quanto ela demore (regra 126.a e 126.c da WSOP; RP-8 da TDA) — então os blinds continuam subindo durante a bolha, só que por mão e não por minuto real. Todas as mesas dão uma mão, e nenhuma mesa começa a próxima até que todas tenham terminado. Se dois jogadores quebram na mesma mão hand-for-hand **na mesma mesa**, o que tinha menos fichas no início da mão fica com a colocação mais baixa (a da bolha); se quebram em **mesas diferentes**, são classificados como empate e dividem os dois prêmios envolvidos.
- **Stalling:** usar todo o time bank em cada decisão para ver menos mãos (e foldar para dentro do dinheiro). Funciona justamente porque enrolar não custa relógio: a mão desconta os seus 2 minutos do mesmo jeito, você foldando na hora ou queimando o time bank inteiro. Big stacks não têm motivo para dar stall — eles querem mais mãos para atacar. Short stacks e stacks médios às vezes dão stall para sobreviver, ==mas stall em excesso pode render um clock call ou uma penalidade== — tanke dentro do razoável, sem queimar o time bank de propósito.
- **Explore isso:** porque todo mundo desacelera, um big stack que continua aplicando pressão durante o hand-for-hand junta blinds e antes quase sem oposição.

---

## A bolha de satélite: quando foldar ases

**Num satélite, toda vaga paga o mesmo — então, no momento em que sua vaga está matematicamente garantida, você folda tudo, incluindo par de ases.** Este é o spot mais contraintuitivo do poker, e está correto. Se ganhar um cara ou coroa te dá a ==mesma vaga que você já garantiu== enquanto perdê-lo te elimina, não há recompensa e há risco enorme:

- **Assim que sua vaga está matematicamente segura** (ninguém mais consegue te alcançar), folde toda mão — sim, até AA e KK — e deixe os stacks mais curtos brigarem. E reavalie a conta a cada subida de blinds: a "zona segura" encolhe conforme os antes entram.
- **Não conte com o stall ao vivo.** Online, usar o relógio inteiro é de graça; ao vivo, esgotar o time bank de propósito para subir de posição é passível de penalidade pelas regras (a WSOP cita isso textualmente) — folde em ritmo normal e deixe os curtos brigarem.
- **A única exceção:** pague só se você cobrir o short stack em questão e a eliminação dele estourar a bolha *a seu favor* — e desde que a sua vaga fique garantida mesmo que você perca o pote.

Se você tirar uma coisa desta seção: um satélite não é um torneio normal. Fichas acima do limiar de segurança não valem nada, então jogue como se fosse assim.

---

## O maior erro na bolha: jogar pelo min-cash

**Foldar até o min-cash parece seguro, mas troca o dinheiro de verdade do torneio pelo seu menor prêmio.** Como as premiações são concentradas no topo, o min-cash é um piso, não um objetivo — o dinheiro está no alto da escada, e você só chega lá tendo fichas quando a bolha estoura.

Os jogadores que ganham torneios tratam a bolha como uma ==oportunidade de acumular== enquanto todo mundo se esconde. Sobreviver importa por algumas mãos em torno do pay jump; depois que a bolha estoura, a pressão de ICM alivia e é hora de voltar a construir stack para a vitória. Respeite a bolha — e pare de jogar com medo no instante em que ela acaba.

---

:::readnext[Continue lendo]
/pt/blog/holdem-icm | ICM explicado — por que fichas não são dinheiro | /images/holdem-icm-hero.webp
/pt/blog/holdem-when-to-fold | Quando foldar no poker | /images/holdem-when-to-fold-hero.webp
:::

## FAQ

**Q. O que significa "on the bubble" no poker?**

A. Significa que o torneio está a uma ou poucas eliminações do dinheiro. Se o top 27 paga, a bolha está com 28 jogadores restantes — o próximo a sair não ganha nada, e todos os outros têm dinheiro garantido. O jogo aperta drasticamente porque sobreviver vale, por um breve momento, mais que fichas.

**Q. Quem é o bubble boy no poker?**

A. O bubble boy é o jogador que quebra na última posição não paga — a uma vaga do dinheiro — e não ganha nada. É a pior colocação de um torneio: todas as horas, nenhum prêmio. Alguns eventos dão ao bubble boy um pequeno prêmio de consolação, mas tradicionalmente é zero.

**Q. Qual a diferença entre stone bubble e soft bubble?**

A. Uma stone bubble (ou bolha dura) é quando uma única eliminação coloca todos os jogadores restantes no dinheiro ao mesmo tempo. Uma soft bubble é mais frouxa — um trecho de algumas eliminações perto do dinheiro em vez de uma vaga exata. A stone bubble cria a pressão mais extrema porque uma eliminação paga todo mundo que sobrou.

**Q. Você deve foldar na bolha?**

A. Você deve foldar *calls* muito mais que o normal, mas não tudo — e deve continuar dando shove e roubando. Sobreviver vale mais que fichas perto do pay jump, então pagar e quebrar é o erro caro. Aperte muito seu range de call enquanto mantém sua agressão de primeiro a entrar larga.

**Q. Os short stacks sentem a maior pressão na bolha?**

A. Não — esse é o equívoco comum. Pelo bubble factor, o stack médio é o mais restrito: equity de prêmio suficiente a perder, não curto o bastante para justificar apostar. Short stacks na verdade têm um bubble factor mais baixo porque quebrar já é provável e dobrar ajuda muito, então eles podem apostar com mais liberdade (dando shove, não pagando).

**Q. O que é o jogo hand-for-hand?**

A. Perto da bolha do dinheiro, todas as mesas jogam exatamente uma mão simultaneamente e então esperam todas as mesas terminarem antes da próxima mão. Ele existe para impedir o stalling — sem isso, jogadores poderiam foldar devagar numa mesa para se infiltrar no dinheiro enquanto outra mesa estourava a bolha mais rápido.

**Q. Por que você foldaria ases numa bolha de satélite?**

A. Porque num satélite toda vaga paga o mesmo, então, assim que seu stack está seguramente dentro da bolha, ganhar uma mão não te dá nada a mais (você já tem sua vaga) enquanto perdê-la te elimina. Com todo o risco e nenhuma recompensa, foldar até par de ases é matematicamente correto.

---

## As 3 coisas para lembrar

1. **Sobreviver vale mais que fichas — por algumas mãos.** Perto do pay jump, aperte seus calls e mantenha seus shoves largos. Depois volte a acumular assim que a bolha estoura.
2. **O stack médio é a armadilha, não o short stack.** Big stacks atacam os médios; médios jogam mínimo; short stacks dão shove primeiro e usam a fold equity.
3. **Conheça seu tipo de bolha.** Bolhas do dinheiro, de final table e de satélite recompensam jogos diferentes — e num satélite, um stack seguro folda tudo, até ases.

O motor por trás de tudo isso é o [ICM](/pt/blog/holdem-icm); a disciplina por trás dos folds é [saber a hora de largar](/pt/blog/holdem-when-to-fold).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">ICM explicado</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">A matemática por trás de por que a bolha importa</div>
  </a>
  <a href="/pt/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Torneio</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Estratégia de torneio</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">O pilar ao qual a bolha pertence</div>
  </a>
  <a href="/pt/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Estratégia</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Quando foldar no poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">A disciplina que a bolha exige</div>
  </a>
  <a href="/en/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Ferramenta grátis</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Calculadora de ICM (em inglês)</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Descubra seu número real de bubble factor</div>
  </a>
</div>
`.trim(),
};

export default POST;
