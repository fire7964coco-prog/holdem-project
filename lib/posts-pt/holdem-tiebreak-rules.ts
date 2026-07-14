import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Como se desempata no pôquer — mesma mão, quem ganha?",
  seoTitle: "Mesma mão, mesmo par — quem ganha? Regras de desempate",
  desc: "Fez o mesmo par no showdown e perdeu? Como se desempata no pôquer: quem ganha com mesmo par ou dois pares, quando a 5ª carta decide e quando o pote divide.",
  tldr: "O desempate segue uma ordem fixa: primeiro o tipo de mão, depois as cartas que formam a mão, depois os kickers do mais alto ao mais baixo. Mesmo par → ganha o primeiro kicker mais alto; cinco cartas idênticas → pote dividido. Os naipes nunca desempatam.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Showdown de pôquer: A♠ K♦ vs A♥ 9♣ com mesa A♦ Q♠ 7♥ 3♣ 2♦ — mesmo par de ases, o kicker decide o vencedor",
  tags: ["regras de desempate no poker", "como se desempata no poker", "quem ganha mesmo par poker", "empate dois pares poker", "a 5 carta importa no poker", "kicker poker", "sequencia mais alta", "empates texas holdem"],
  content: `
Você vira um par de ases. Seu adversário também. O dealer conta as cartas laterais por um segundo — e então empurra o pote inteiro para *ele*. ==r:Mesmo par. Como você perdeu?==

Já vi esse exato momento travar mais jogos do que qualquer outra regra: alguém se levanta pela metade, o dealer bate no feltro, e a mesa inteira espera uma explicação. Aqui está ela. Todo empate no Texas Hold'em é resolvido por um procedimento fixo que fica um nível abaixo do [ranking de mãos de pôquer](/pt/blog/holdem-hand-rankings) — o ranking diz *qual mão* ganha; as regras de desempate dizem *qual jogador* ganha quando as duas mãos são do mesmo tipo.

Quase todo o trabalho é feito por uma carta: o ==**kicker**==. A definição completa — quais mãos têm kicker e quantos — está em [o que é kicker no pôquer](/pt/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Este guia é o *procedimento*: exatamente como se desempata com o mesmo par, dois pares, trinca, sequência e flush — e a quinta carta que todo mundo esquece.

---

### Desempates de relance

:::stripe
3 | Passos que resolvem todo empate no Hold'em
1 | Espaço de kicker numa mão de dois pares
0 | Empates já resolvidos pelo naipe
:::

---

## Como se desempata no pôquer? A ordem de 3 passos

**O desempate segue uma ordem fixa: compare primeiro o tipo de mão, depois as cartas que formam a mão, depois os kickers do mais alto ao mais baixo — e, se as cinco cartas ainda coincidirem, o pote é dividido.** Todo showdown roda os mesmos três testes:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Passo | Compare | Detalhe |
|:---:|---|---|
| **1** | Tipo de mão | A categoria mais alta sempre ganha (um flush ganha de uma sequência, etc.) |
| **2** | As cartas que formam a mão | Mesmo tipo? Ganha o par / trinca / carta mais alta superior |
| **3** | Kickers, do mais alto primeiro | A primeira diferença leva o pote |

</div>

Se o passo 1 resolve, você nunca chega ao passo 2. Se o passo 3 fica sem cartas, as mãos são idênticas e ==g:o pote é dividido== — como as fichas são então repartidas (ficha ímpar, divisões a três, potes paralelos) é assunto das [regras de pote dividido](/pt/blog/holdem-split-pot-rules). Os passos 2 e 3 são onde nascem as discussões, então é para lá que vamos.

---

## Quem ganha se dois jogadores têm o mesmo par?

**Ganha o primeiro kicker mais alto. Um par usa três kickers, comparados um a um de cima para baixo — a primeira diferença decide o pote.**

Pegue a mão da foto acima:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Jogador A:** A♠ K♦  ·  **Jogador B:** A♥ 9♣
**Mesa:** A♦ Q♠ 7♥ 3♣ 2♦

| Jogador | Melhores cinco | Kickers | Resultado |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Ganha** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Perde |

</div>

Mesmo par de ases, então os kickers vão de cabeça a cabeça em ordem: ==g:K ganha de Q — briga encerrada.== O nove do B ainda está *na* mão como segundo kicker, mas a comparação nunca chega tão longe.

Repare que o kicker de topo do B é a dama da **mesa**, não o 9 que ele tem. ==r:Um kicker só conta se realmente entrar nas suas melhores cinco== — uma carta mais alta na mesa empurra sua carta da mão para baixo na lista. É também por isso que a segunda carta com que você começa importa tanto quanto o próprio ás: A-K e A-9 são ambos "um par de ases" aqui, e só um deles ganha ([tabela de mãos iniciais](/pt/blog/holdem-starting-hands-chart)).

---

## Regras de desempate no pôquer para cada mão

**Cada tipo de mão tem sua própria ordem de comparação — algumas vão até os kickers, outras se resolvem inteiramente pelas cartas que as formam.** A etiqueta mostra se um kicker entra em jogo:

:::tiebreak
Royal Flush|Sempre empate (pote dividido)|-Sem kicker
Straight Flush|Só a carta mais alta|-Sem kicker
Quadra|Valor da quadra → 5ª carta|+Com kicker
Full House|Valor da trinca → do par|-Sem kicker
Flush|Compare as 5, da maior à menor|+Com kicker
Sequência|Só a carta mais alta|-Sem kicker
Trinca|Valor da trinca → 2 kickers|+Com kicker
Dois Pares|Par alto → par baixo → kicker|+Com kicker
Par|Valor do par → 3 kickers|+Com kicker
Carta Alta|Compare as 5, da maior à menor|+Com kicker
:::

As três linhas que mais causam discussão na mesa:

- **A trinca usa dois kickers, o de cima primeiro.** Numa mesa de A♣ A♥ 7♦ 5♣ 2♠, um jogador com A♠ J♠ faz A-A-A-==g:J==-7 e ganha do A-A-A-==r:10==-7 do A♦ 10♦ — o valete supera o dez, e o 7 compartilhado nem chega a ser conferido.
- **Full houses não têm kicker.** Primeiro o valor da trinca, depois o par: K-K-K-A-A ganha de K-K-K-Q-Q pelo par.
- **Flushes comparam as cinco cartas — ==r:nunca os naipes==.** Um flush de ás ganha de um flush de rei; valores idênticos dividem. O confronto completo (e as mesas que enganam) está em [flush ganha de sequência](/pt/blog/holdem-flush-vs-straight).

---

## Quem ganha se os dois jogadores têm dois pares?

**Compare o par mais alto, depois o par mais baixo, depois o único kicker — nessa ordem.** Dois pares carregam exatamente um kicker, então depois dos pares em si só sobra uma carta para discutir.

Numa mesa de **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ faz K♠ K♦ 9♣ 9♠ ==g:Q♦== e K♥ J♥ faz K♥ K♦ 9♣ 9♠ ==r:J♥==. Mesmos reis-e-noves, então o kicker solitário resolve: ==g:dama sobre valete.==

E aí tem a armadilha que decide dinheiro de verdade — ==r:**falsificação (counterfeiting)**==:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Você:** 5♠ 4♠  ·  **Adversário:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — seus dois pares (cincos e quatros) lideram contra o par de reis dele
**Turn 9♠, river 9♥** — mesa final 5♦ 4♥ K♣ 9♠ 9♥

| Jogador | Melhores cinco | Mão |
|--------|-----------|------|
| Você | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Noves e cincos — seus quatros sumiram |
| Adversário | K♦ K♣ 9♠ 9♥ A♣ | **Reis e noves — ganha** |

</div>

A mesa parear os noves deu a *ambos* os jogadores um segundo par melhor — seus quatros foram ==r:falsificados==, e a única comparação que restou foi o par de topo: reis sobre noves. A mão que liderava no flop perde o pote sem nenhum dos jogadores melhorar as próprias cartas.

---

## Dá para ter uma sequência mais alta? (Onde a roda se encaixa)

**Sim — as sequências são ranqueadas puramente pela carta mais alta, e a roda (wheel) de ás baixo é a sequência mais baixa do jogo.**

Numa mesa de 4♦ 3♣ 2♠ K♦ Q♥, um jogador com A♠ 5♠ faz a roda: 5-4-3-2-A. Um jogador com 6♥ 5♥ faz 6-5-4-3-2. ==r:O ás joga *baixo* numa roda==, então A-2-3-4-5 fica bem no fundo da escada das sequências — ==g:a sequência de seis alto ganha.== Duas sequências com a mesma carta mais alta são idênticas, e mãos idênticas dividem.

Duas coisas que a roda *não* faz: o ás não dá a volta pelo meio (Q-K-A-2-3 não é nada) e não pode ser alto e baixo ao mesmo tempo. Os flushes seguem a regra paralela — as cinco cartas comparadas de cima para baixo, naipes irrelevantes — com os detalhes em [flush vs sequência](/pt/blog/holdem-flush-vs-straight).

---

## A 5ª carta importa no pôquer?

**Sim — sempre que as primeiras quatro cartas de duas mãos são idênticas, a quinta carta é o pote inteiro.**

Mesa **A♥ K♣ Q♦ 4♣ 2♥**, e é A♠ 8♠ contra A♦ 7♦. Ambos têm par de ases. Primeiro kicker: o K da mesa — empate. Segundo kicker: a Q da mesa — empate. Terceiro kicker: ==g:8 ganha de 7.== A literal quinta carta da mão acabou de decidir tudo acima dela.

A mesma lógica vale em potes de quadra-na-mesa: todos compartilham quatro cartas, então a quinta é o showdown inteiro. E vale em empates de carta alta e flush, onde toda carta até a última é comparada. A quinta carta só deixa de importar quando a mesa a supera — que é a última peça do quebra-cabeça.

---

## Quando seu kicker não joga — e o pote é dividido

![Infográfico: a mesa A-K-Q-J-10 é a melhor mão de cinco para todos, então uma mão 9-7 não consegue batê-la e o pote é dividido](/images/holdem-tiebreak-best5.webp "Melhores cinco de sete: quando a mesa já é a melhor mão, suas cartas da mão saem dela")

**Se suas cartas da mão não conseguem furar as melhores cinco da própria mesa, elas não jogam — e quando isso vale para todos, o pote é dividido.**

Pegue a mesa acima: A♠ K♥ Q♣ J♦ 10♠, Broadway já completa. Seu 9♥ 7♠ *até* faz uma sequência — K-Q-J-10-9 — mas ela é **mais baixa** do que a sequência de ás alto que está no feltro, então suas melhores cinco são a própria mesa. As de todo mundo também.

A versão mais sutil é quando sua mão joga, mas seu kicker não. Mesa A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ contra A♦ 2♦. Ambos pareiam o ás, e os dois espaços de kicker se preenchem pela mesa — A-A-K-Q-J para cada jogador. O 3 e o 2 são peso morto; melhores cinco idênticas, ==g:divide.==

![Infográfico: numa mesa A-K-Q-J-9, A-3 e A-2 jogam ambos A-A-K-Q-J, então as mãos idênticas dividem o pote](/images/holdem-tiebreak-split.webp "Quando as melhores cinco coincidem valor a valor, o pote é repartido — os naipes nunca desempatam")

Enxergar esses desenvolvimentos antes da aposta do river é uma habilidade própria — é a [leitura da mesa](/pt/blog/holdem-reading-the-board). E o que acontece com as fichas quando as mãos empatam — partes iguais, a ficha ímpar, divisões a três, potes paralelos de all-in — está tudo no [guia de regras de pote dividido](/pt/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Continue lendo]
/pt/blog/holdem-kicker | O que é kicker no pôquer? | /images/holdem-kicker-hero.webp
/pt/blog/holdem-split-pot-rules | Quando o pote é dividido? | /images/holdem-split-pot-hero.webp
:::

## Perguntas frequentes

**Q. Como se desempata no pôquer?**

A. Numa ordem fixa: primeiro o tipo de mão, depois as cartas que formam a mão (o par mais alto, a trinca ou a carta de topo), depois os kickers do mais alto ao mais baixo. Se as cinco cartas coincidem em valor, o pote é dividido — os naipes nunca são usados.

**Q. Quem ganha se dois jogadores têm o mesmo par?**

A. O jogador cujas melhores cinco têm o kicker mais alto. Um par carrega três kickers, comparados de cima para baixo — a primeira diferença leva o pote. Se os três coincidem, é divisão.

**Q. Quem ganha se os dois jogadores têm dois pares?**

A. Compare primeiro o par mais alto, depois o par mais baixo, depois o único kicker. Ases-e-treses ganha de reis-e-damas, porque o par de topo é conferido antes de qualquer outra coisa.

**Q. A 5ª carta importa no pôquer?**

A. Sim. Quando as primeiras quatro cartas das duas mãos são idênticas, a quinta carta decide o pote inteiro — o terceiro kicker de um par, a carta mais baixa de um flush, a carta lateral de uma quadra na mesa. Ela só deixa de importar quando as cartas da mesa superam sua carta da mão.

**Q. Dá para usar o ás como 1 no pôquer?**

A. Sim, mas só na sequência A-2-3-4-5 (a "roda"), onde ele joga como carta mais baixa — o que faz da roda a sequência mais baixa do jogo. O ás não pode dar a volta pelo meio: Q-K-A-2-3 não é sequência.

**Q. Dá para ter uma sequência mais alta que a de outro jogador?**

A. Sim — as sequências são ranqueadas puramente pela carta mais alta, então 6-5-4-3-2 ganha da roda A-5, e a Broadway (A-K-Q-J-10) ganha de todas. Cartas de topo iguais significam sequências idênticas e pote dividido.

**Q. Os naipes desempatam alguma vez no Texas Hold'em?**

A. Não. Não há valor de naipe no Hold'em — se duas melhores mãos de cinco cartas coincidem valor a valor, o pote é dividido, não importam os naipes.

**Q. O que acontece se os dois jogadores têm exatamente a mesma mão?**

A. O pote é dividido igualmente — um "chop". Como as fichas são repartidas fisicamente, quem fica com a ficha ímpar e como os potes paralelos são resolvidos está coberto nas [regras de pote dividido](/pt/blog/holdem-split-pot-rules).

---

## O que fica

1. Todo empate roda o mesmo procedimento: ==**tipo de mão → cartas feitas → kickers → divisão**== — sem exceções, sem naipes.
2. Um kicker só conta se ==g:entra nas suas melhores cinco== — cartas da mesa podem substituí-lo, e uma mesa com dois pares pode falsificar seus dois pares por completo.
3. As sequências se ranqueiam pela carta mais alta (a roda é a mais baixa), os flushes comparam as cinco — e quando nada separa as mãos, o pote é repartido.

Fixe a ordem completa com o [ranking de mãos completo](/pt/blog/holdem-hand-rankings), pegue a carta lateral em si em [o que é kicker](/pt/blog/holdem-kicker) e veja exatamente como os potes empatados são repartidos no [guia de pote dividido](/pt/blog/holdem-split-pot-rules).

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O que é kicker no pôquer?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">A carta lateral em si — quais mãos têm e quantos</div>
  </a>
  <a href="/pt/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Ranking de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Ranking de mãos de pôquer — da melhor à pior</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As 10 mãos com probabilidades, exemplos e desafios de mesa</div>
  </a>
  <a href="/pt/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Confronto de Mãos</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">O flush ganha da sequência?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Matemática, mesas e casos de empate para a confusão nº 1</div>
  </a>
  <a href="/pt/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pote Dividido</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Quando o pote é dividido?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 situações de divisão e 3 coisas que os jogadores acham que ganham</div>
  </a>
</div>
`.trim(),
};
