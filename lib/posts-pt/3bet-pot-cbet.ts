import type { Post } from "../posts";

// PT-BR: tradução do EN vigente; dados do exemplo de 2026-08-20.
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "A-K-2: c-bet com todo o range",
  seoTitle: "C-bet em pote de 3-bet: 100% de apostas no A-K-2",
  desc: "No A-K-2 em pote de 3-bet, os 63 combos do BB apostam. Veja como SPR, ranges pré-flop e ausência de AA e KK no BTN mudam o spot.",
  tldr: "No A♦K♠2♥ em pote de 3-bet, o big blind aposta em 100%. O check fica em 0,0%: nenhum dos 63 combos. Nos sete spots anteriores, o padrão era dar check entre 76,2% e 99,9%. A principal mudança está na ação pré-flop: o BB deu 3-bet em vez de pagar e mantém as mãos do topo neste flop, enquanto AA e KK do botão saíram do range de call por darem 4-bet. Com SPR de 4,0, há menos espaço para adiar a construção do pote.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "12 min",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-pt.webp",
  imageAlt: "Resultado do solver GTO no pote de 3-bet A♦K♠2♥: todos os combos da matriz 13×13 do big blind apostam e o check aparece em 0,0%",
  keepImagesInBody: true,
  tags: ["c-bet em pote de 3-bet", "flop A-K-2", "SPR", "stack efetivo", "GTO"],
  content: `
Nos sete spots anteriores, a resposta do big blind era quase sempre dar check. Mesmo no [flop 9-8-7](/pt/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-pt.webp"), onde sair apostando tinha mais importância, ele apostava em apenas 23,7%. Nos demais, dava check entre 88,8% e 99,9%.

Aqui acontece o contrário: **o big blind aposta com o range inteiro**, todos os 63 combos, todas as vezes.

A principal mudança está na ação pré-flop: o big blind **deu 3-bet** em vez de pagar. O pote passou de 5,5bb para 22,5bb. ⚠ O board também mudou: o spot ① era A♥7♦2♣, e este é A♦K♠2♥. Portanto, não é uma comparação controlada em que só o pré-flop muda. Essa diferença transforma a estratégia no flop. Todos os números abaixo vêm do [solver de poker gratuito](/pt/solver) do HoldemMaster.

:::stripe
Spot | Big blind (BB) dá 3-bet → botão (BTN) paga (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pote · Stack | Pote 22,5bb · stack efetivo 89bb · **SPR 4,0**
Resultado | BB aposta em 100% — check em 0,0%
:::

> **Resposta rápida**
> O big blind aposta com o range inteiro. O tamanho pequeno, 7,4bb ou 33% do pote, aparece em 57,8%; o grande, 14,9bb ou 66%, em 42,2%. Não é porque todas as mãos são fortes: 38,1% do range é composto por pares de mão abaixo do rei. A razão é que **AA e KK do botão deram 4-bet antes do flop**, deixando o topo deste board com o BB. Com SPR de 4,0, há menos espaço para adiar a construção do pote.

## Quais condições produziram esses números?

★ **As condições mudaram em relação aos sete primeiros spots.** O pote, os stacks e os papéis são diferentes. Por isso, a comparação vem primeiro. Fora de posição (OOP) é quem age primeiro; em posição (IP) é quem age depois.

| Condição | Este spot (pote de 3-bet) | ①–⑦ (pote com um aumento pré-flop) |
|---|---|---|
| Ação pré-flop | BTN abre → **BB dá 3-bet para 11bb** → BTN paga | BTN abre 2,5bb → BB paga |
| OOP (age primeiro) | **BB — quem deu a 3-bet** | BB — quem pagou |
| IP | BTN — quem pagou | BTN — quem abriu o pote |
| Pote inicial | **22,5bb** | 5,5bb |
| Stack efetivo | **89bb** | 97,5bb |
| **SPR** | **4,0** | 17,7 |
| Tamanhos de aposta | Aproximadamente 1/3 e 2/3 do pote | Aproximadamente 33% e 75% (⑦ tinha um tamanho) |
| Rake | Não incluído no modelo | Não incluído no modelo |
| Data da consulta | 2026-08-20 | 2026-08-20 |

O pote de 22,5bb vem de ==11 da 3-bet + 11 do call + 0,5 do small blind que foldou==, e o stack efetivo é ==100 − 11 = 89bb==.

## A frequência de check é mesmo 0%?

**0,0%.** A coluna de combos também mostra 0,0: nenhum dos 63 combos dá check, sem uma pequena parcela escondida pelo arredondamento. As apostas se dividem entre dois tamanhos: 57,8% usam 7,4bb e 42,2% usam 14,9bb. Em cada um dos sete potes com um único aumento pré-flop anteriores, o padrão do big blind era o oposto.

| Primeira ação do BB | Frequência | Combos |
|---|---|---|
| Bet 7,4bb (33% do pote) | **57,8%** | 36,6 |
| Bet 14,9bb (66% do pote) | 42,2% | 26,4 |
| Check | **0,0%** | **0,0** |

(Os percentuais e as contagens de combos do solver usam agregações diferentes, então a divisão não coincide exatamente: ==36,6 ÷ 63 = 58,1%==, contra os 57,8% exibidos. **A tabela reproduz os valores do painel.** O resultado de zero combos de check não muda.)

Uma frequência de 0,0% não significa que dar check seja proibido. Significa que **o check não foi usado na estratégia exibida para esta árvore e estes ranges.** A frequência isolada não informa a diferença de EV entre as ações de cada mão.

Nos spots anteriores, a ação menos escolhida ainda recebia uma pequena frequência: 0,2%, 0,1%. Aqui, o check não fica nem com essa parcela.

## Por que todo o range aposta no A-K-2?

**Porque o big blind mantém as mãos do topo deste board.** Três pares de mão podem formar set no A-K-2, e o BB tem dois deles. Quando quem age primeiro também tem as melhores mãos com muito mais frequência, apostar pode proteger o range melhor que dar check. A tabela de categorias mostra o tamanho dessa vantagem.

| Categoria | BB (OOP) | Combos | BTN (IP) | Combos |
|---|---|---|---|---|
| Set/Trinca (sets) | **9,5%** | 6 | 2,3% | **3** |
| Dois pares | **14,3%** | 9 | 6,9% | 9 |
| Top pair (um ás) | **33,3%** | 21 | 20,8% | 27 |
| Segundo par (um rei) | 4,8% | 3 | **11,5%** | 15 |
| Underpair | 38,1% | 24 | **46,2%** | 60 |
| Sem mão feita | **0,0%** | **0** | 12,3% | 16 |

(Na tela do big blind, “Sem mão feita” nem aparece: categorias em 0% não são desenhadas.)

Veja a primeira linha. **AA, KK e 22 formam set no A-K-2, mas o botão só tem o último.** O painel chama essa categoria de *Set/Trinca*. Num board sem par, a trinca feita com par na mão e uma carta do board é um **set**; a diferença está explicada no [spot de board pareado](/pt/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-pt.webp"). O botão dá 4-bet com AA e KK antes do flop, então fica com três combos de set contra seis do big blind.

Esse é o ponto central. Quando o adversário quase não pode ter as melhores mãos, você consegue apostar com partes do range que não são fortes. Aqui, 38,1% do range é composto por pares de mão *abaixo* do rei.

**“Sem mão feita: 0,0%” não é a causa, embora pareça uma explicação fácil.** O mesmo range de 3-bet num board baixo mostra por quê: no [flop 8-5-2](/pt/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-pt.webp"), que aparece depois nesta série, 48,2% do range do BB é A-high sem par, mas o check ainda fica em apenas **2,0%**. Passar de 0% para 48% de mãos sem par muda o check em dois pontos percentuais. O que faz o check ganhar espaço não é apenas a quantidade de mãos sem par, mas quanto o board favorece quem pagou a 3-bet.

:::note[⚠ Este spot inverte a situação do [flop com ás alto em pote com um aumento pré-flop](/pt/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-pt.webp"). Lá, o range do big blind era **limitado no topo**, sem AA, AK ou AQ, pois essas mãos dariam 3-bet; ele dava check em 98,2%. Aqui também há ás alto, mas os papéis se invertem: quem deu a 3-bet mantém o topo do range.]:::

## O que o SPR de aproximadamente 4 muda neste pote?

**SPR é a relação entre stack e pote: o stack efetivo dividido pelo pote no início do flop.** Aqui, ==89 ÷ 22,5 = 4,0==. O stack restante é de apenas quatro vezes o dinheiro já no centro. Por isso, a decisão no flop se aproxima de uma decisão sobre o stack inteiro: há menos espaço para adiar a construção do pote.

| Situação | Pote | Stack efetivo | SPR |
|---|---|---|---|
| Pote com um aumento pré-flop (①–⑦) | 5,5bb | 97,5bb | **17,7** |
| Pote de 3-bet (este spot) | 22,5bb | 89bb | **4,0** |

Esse número ajuda a entender **quantas apostas ainda cabem**, não apenas quantas fichas restam. Pegue o tamanho de 66% oferecido pelo solver e acompanhe a conta por street:

- Flop: **14,9bb** → após o call, o pote tem 52,3bb e restam 74,1bb.
- Turn: **34,5bb** → após o call, restam 39,6bb.
- River: **39,6bb**, all-in.

**Três apostas completam o stack: ==14,9 + 34,5 + 39,6 = 89,0==.** Duas apostas somam 49,4bb, ou 55,5% do stack, não o stack inteiro. Para que três apostas da mesma fração do pote terminem exatamente em all-in, a fração seria de ==aproximadamente 54% do pote==.

Faça as mesmas três apostas de dois terços num pote com um aumento pré-flop e terá investido ==3,67 + 8,56 + 19,96 = 32,2bb==, um terço do stack. **Essa é a diferença prática entre SPR 17,7 e SPR 4,0:** a quantidade de apostas e decisões que ainda cabem. Com menos espaço para adiar a construção do pote, dar check ganha menos valor por esse motivo.

## Por que o tamanho pequeno é usado com mais frequência?

**Pelo formato do range, não pela profundidade do stack.** Todos os 63 combos têm par ou melhor: **não existe a parte mais fraca, sem par**, então o range não se divide em “nuts ou nada”. Sem mãos sem par para acompanhar o tamanho grande, há maior preferência pelo pequeno; 57,8% sai apostando um terço do pote. Um range sem a parte mais fraca *e* sem as melhores mãos costuma ser chamado de “condensado”. Esse nome não serve aqui, porque o BB tem justamente o topo do board: os seis combos de seus sets de AA e KK.

O A-K-2 rainbow também oferece pouquíssimos draws, então não há a mesma necessidade de cobrar caro de mãos que podem melhorar. Nessa combinação, o formato do range explica o tamanho.

⚠ **“Stacks rasos pedem apostas pequenas” não explica o resultado.** Dois spots posteriores têm exatamente o mesmo SPR de 4,0 e usam a aposta *grande* quase sempre: Q-T-7 em **98,4%** e [8-5-2](/pt/blog/3bet-pot-low-board) em **97,8%**, por motivos diferentes. O Q-T-7 tem muitos draws, e o tamanho grande cobra por essa possibilidade de melhora. O 8-5-2 é seco como este, mas o range se divide principalmente entre overpairs e A-high, com pouco no meio; esse formato polarizado favorece apostas grandes. Mesma profundidade, preferência de tamanho oposta: a profundidade não explica essa diferença.

**A aposta grande também não corresponde simplesmente à parcela de mãos fortes.** Some os combos capazes de disputar um stack inteiro — sets, dois pares e top pair — e terá ==6 + 9 + 21 = 36 combos, 57,1%==, mais que os 42,2% que apostam grande.

O sinal está nas **contagens fracionadas de combos**: 26,4 na aposta grande e 36,6 na pequena. Se cada categoria inteira usasse apenas um tamanho, essas contagens seriam inteiras. **A mesma mão mistura os dois tamanhos.** Os 42,2% significam “42,2% do range”, não uma categoria específica. Essa mistura impede que o tamanho revele diretamente a força da mão.

## O que o botão tem no range de call?

**Quase metade do range, 46,2%, é composta por pares de mão sem ás nem rei.** Eles chegam a um board que tem os dois.

![Composição dos ranges no pote de 3-bet A♦K♠2♥: big blind com os sets mais altos e botão concentrado em pares intermediários](/images/gto-3bp-ace-king-ranges-pt.webp "Pote de 3-bet A-K-2 · o BB mantém as mãos do topo, enquanto o BTN concentra mais mãos no meio do range")

Underpairs somam 46,2%, ou 60 combos: QQ a 33, dez pares com seis combos cada. São mãos com dificuldade para pagar duas apostas seguidas nesta textura.

Uma ressalva: esses 130 combos representam a **defesa teórica definida para o exemplo**. Na prática, há adversários que foldam pares médios e pagam com A-Q, A-J e K-Q. Contra esse jogador, os 46,2% não estarão presentes. Considere o que o adversário realmente paga antes de aplicar os números numa mesa ao vivo.

## Como o botão responde à c-bet de um terço do pote?

**É difícil pagar até o river neste spot.** Os underpairs do botão enfrentam um ás e um rei no board e, com SPR de 4,0, poucas apostas grandes bastam para comprometer o stack.

⚠ A aposta que chega ao all-in depende do tamanho usado. Com dois terços, a conta é 14,9 → 34,5 → 39,6, exatamente três apostas. Com os **7,4bb de um terço do pote** desta seção, três apostas somam ==7,4 + 12,3 + 20,4 = 40,1bb==, apenas 45% do stack. A decisão no turn não está disponível nesta resolução: o exemplo pré-calculado termina na primeira ação do flop. Portanto, esta seção interpreta a composição dos ranges, e as sequências de apostas são contas ilustrativas, não resultados calculados para turn e river.

Contra 7,4bb em 22,5bb, impedir lucro automático de um blefe puro exigiria continuar com cerca de ==22,5 ÷ (22,5 + 7,4) = 75,3%== do range: a **frequência mínima de defesa (MDF)**. Mas as mãos do botão que acertaram o A-K-2 somam apenas ==20,8 + 11,5 + 6,9 + 2,3 = 41,5%==. 🪶 Os 2,3% de sets são **22**, que acertou o dois, não o ás nem o rei. Contando apenas as mãos que fizeram par com ás ou rei, o total é **39,2%**.

⚠ **Neste spot, porém, a premissa da MDF não se aplica diretamente.** Ela encontra a frequência que torna indiferente um **blefe puro com equity zero**. O range de aposta do BB tem **0,0% na categoria Sem mão feita: nenhum combo**. Sem blefes puros de equity zero, não há esse blefe a tornar indiferente, e a interpretação aponta para foldar **mais**, não menos. ⚠ Duas ressalvas são essenciais: ① “0% sem mão feita” não significa “0% blefes”; um underpair fraco pode apostar como blefe ou por proteção. ② A resposta do botão não está disponível nesta resolução, então não é possível confirmar a frequência ideal de defesa. Não leia os 41,5% como “logo, preciso continuar com pares médios”. O tamanho pequeno oferece um preço melhor aos 60 combos, mas sua razão principal continua sendo o **formato do range**, discutido antes; esse preço é uma consequência.

:::note[⚠ A MDF simplifica a aposta como um blefe puro. Sua aplicação depende da presença de blefes; quando todo o range tem par ou melhor, como aqui, a hipótese de blefe puro com equity zero deixa de descrever a situação. O número é apenas uma referência aproximada. Na prática, considere também quanto a mão resiste às apostas nas streets seguintes.]:::

## Por que a EQR do BB chega a 109,6% fora de posição?

**Porque uma vantagem de range suficientemente grande pode superar a desvantagem de posição.** Este é o primeiro spot da série em que o jogador fora de posição realiza mais que sua parcela de equity. Os 68,9% contra 31,1% representam uma diferença muito maior que a dos potes com um único aumento, nos quais o jogador OOP tinha **45,1% a 48,5%**, contra **51,5% a 54,9%** do jogador IP.

| Métrica | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68,9%** | 31,1% |
| EV (bb) | 16,99 | 5,51 |
| **Realização de equity (EQR)** | **109,6%** | 78,7% |

Num pote de 22,5bb, 68,9% de equity corresponde a ==22,5 × 68,9% = 15,50bb==. O valor esperado (EV) do BB é **16,99bb**; a divisão ==16,99 ÷ 15,50== dá sua realização de equity: **109,6%**.

:::pull[A posição amplia uma vantagem. Não cria essa vantagem sozinha.]:::

Os 78,7% do botão não são uma evidência independente: são o mesmo resultado visto do outro lado. Como os dois EVs somam o pote, quando um jogador realiza mais que 100%, o outro precisa realizar menos. O que importa é o tamanho da diferença. Nos spots ①–⑦, o jogador fora de posição realizava entre **77,9% e 93,2%**; aqui, passa de 100%, porque o dinheiro abandonado pelo botão fica com o big blind. O motivo de a posição normalmente ter valor está no guia de [jogo em posição](/pt/blog/holdem-position-play).

## O que muda na prática?

- **Neste pote de 3-bet, a decisão central é o tamanho da c-bet, mas a conclusão vale para heads-up.** Num board seco com ás alto em que quem deu a 3-bet mantém o topo, o range inteiro aposta. Se um terceiro jogador paga a 3-bet e também vê o flop, “apostar com tudo” deixa de ser uma referência adequada; os underpairs são os primeiros candidatos a sair do range de aposta a cada jogador adicional.
- **Conte o SPR antes de o flop chegar.** Um pote maior significa menos apostas até o all-in, não simplesmente menos fichas. **Nesta linha com SPR 4, duas apostas grandes e o restante no river completam o stack.** Conte as apostas que ainda cabem e depois escolha os tamanhos.
- **★Apostar com o range inteiro não significa ir all-in com o range inteiro.** Aqui, 38,1% das mãos que apostam são pares de mão abaixo do rei. Há diferenças dentro desse grupo: QQ vence mais da metade do range de call do botão e é candidato a dar check no turn; TT e 99 estão entre as primeiras mãos a abandonar diante de um aumento.
- **★Top pair depende do kicker.** Os 21 combos incluem **A5s e A4s**, mãos que deram 3-bet como blockers e têm kickers fracos. O range que aceita colocar 89bb no pote é estreito: **22 e A-K formam seu núcleo**, com top pairs fortes como A-Q dependendo do adversário. **A-4 não vence nenhuma dessas mãos.** Os sets de AA e KK vencem todas. **A-K fica no meio:** divide contra o A-K do botão e perde para 22. Assim, “SPR 4, posso colocar tudo” só vale sem essa ressalva para **AA e KK**; com A-K, depende de quantas mãos o adversário aceita pagar.
- **★Um aumento no flop exige decidir sobre o stack.** A interpretação do SPR 4 é que um aumento pode comprometer o restante das fichas: em vez de pagar sem plano para o turn, decida se a mão quer ir all-in ou foldar. Sets querem colocar dinheiro; underpairs baixos e top pairs de kicker fraco tendem ao fold. ⚠ Isso é uma orientação extraída do SPR e das categorias, não uma saída do solver. O exemplo não tem a resposta a um aumento, então não é possível confirmar os limites exatos entre all-in, call e fold. Com dois pares, A-K, a decisão depende da amplitude do range de raise; contra apenas sets e A-K, você nunca está à frente.
- **Não leve o “check 0%” para todo pote de 3-bet.** O board muda o resultado: o mesmo range de 3-bet dá check em 2,0% no [8-5-2](/pt/blog/3bet-pot-low-board), e boards favoráveis a quem pagou podem gerar checks com mais frequência. **O ás e o rei juntos produziram este zero neste exemplo; não é uma exigência para todo pote de 3-bet.** A construção do range antes do flop está no guia de [estratégia de 3-bet](/pt/blog/holdem-3bet).

:::readnext[Continue lendo]
/pt/blog/low-board-check-raise | 6-5-2: preparando o check-raise | /images/gto-srp-low-rainbow-oop-pt.webp
/pt/blog/paired-board-strategy | 6-6-3: mais trincas, 97% de check | /images/gto-srp-paired-oop-pt.webp
:::

## Confira no app

Abra o [solver de poker gratuito](/pt/solver), entre em **Spots de estudo** e escolha **Board A-high, vantagem do 3-bettor → ⚡ Ver resultados**.

Confira primeiro o cabeçalho: **Pote 22,5bb · Stack 89bb**. Esses valores, em vez dos 5,5bb e 97,5bb dos spots anteriores, resumem a mudança de contexto. Depois, procure a categoria ausente: o painel **Mãos** mostra apenas **cinco** categorias para o BB; falta “Sem mão feita”. Acima, na faixa de ações, o marcador de check mostra **0,0% / 0,0 combos**.

Depois, abra o **Treinador GTO** na barra lateral: ele distribui mãos usando os pesos reais dos ranges e avalia a perda de EV da sua decisão em big blinds. É gratuito, sem instalação e sem conta.

## Perguntas frequentes

**Q. O que significa SPR no poker?**

A. É a relação entre stack e pote. Na prática, ajuda a estimar quantas apostas ainda cabem até o all-in: o mesmo buy-in de 100bb gera SPR de 4,0 aqui e de 17,7 num pote com um único aumento pré-flop. Essas duas situações permitem quantidades bem diferentes de apostas e decisões.

**Q. Quantas apostas cabem com SPR de 4?**

A. Nesta sequência, três, com a terceira em all-in. Usar 66% do pote e ajustar a última ao stack dá 14,9 → 34,5 → 39,6bb, exatamente os 89bb restantes. Parar depois de duas significa investir 49,4bb, pouco mais da metade. Um tamanho maior pode chegar ao all-in em duas: o tamanho escolhido determina quantas decisões ainda cabem.

**Q. Quem deu a 3-bet deve sempre fazer c-bet?**

A. Neste board, o solver aposta com tudo e dá check em 0,0%. Mas a condição depende do board: o mesmo range no 8-5-2 tem 48,2% de A-high e ainda dá check em apenas 2,0%, enquanto um board favorável a quem pagou permite mais checks. Este zero específico vem do ás e do rei juntos, que deixam as mãos mais fortes fora do range de quem pagou.

**Q. Por que o botão não tem AA nem KK?**

A. O range de call definido para o exemplo não contém essas mãos: AA e KK normalmente dão 4-bet. É uma configuração pré-flop da árvore, não uma conclusão calculada pelo solver neste flop. Outras resoluções podem manter alguns combos no call para proteger o topo. Mudar isso também muda a linha de sets.

**Q. Por que o tamanho pequeno aparece mais que o grande?**

A. Pelo formato do range: todos os 63 combos têm par ou melhor, sem a parte de mãos sem par que criaria uma divisão entre “nuts ou nada”. Esse formato favorece a aposta pequena. **Não é simplesmente porque o stack é raso:** o [spot Q-T-7](/pt/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-pt.webp") tem o mesmo SPR de 4,0 e usa a aposta grande em 98,4%.

**Q. Esses números valem para o limite em que jogo?**

A. Use-os como referência quando as condições coincidirem. Esta resolução só permitiu dois tamanhos, um terço e dois terços do pote. Num jogo em que overbets também fazem parte das opções, a distribuição de frequências muda. O mesmo vale para outros ranges de 3-bet ou stacks, e o cálculo não inclui rake.
`.trim(),
};

export default POST;
