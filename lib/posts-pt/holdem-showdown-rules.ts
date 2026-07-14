import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Regras de showdown no Texas Hold'em: quem mostra primeiro, muck e slow roll",
  seoTitle: "Quem mostra primeiro no showdown? Regras e muck no poker",
  desc: "Pagou o river e ninguém vira as cartas? Veja quem mostra primeiro no showdown, quando dá para dar muck sem mostrar e por que slow roll pega mal no poker.",
  tldr: "No showdown, o último jogador que apostou ou aumentou mostra primeiro. Se todos deram check no river, o primeiro jogador ativo à esquerda do botão abre o jogo. Quem perdeu pode dar muck sem mostrar, mas qualquer jogador pode pedir para ver uma mão que participou de um showdown pago.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-12",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  tags: [
    "regras de showdown no poker",
    "quem mostra as cartas primeiro no poker",
    "muck no poker",
    "slow roll poker",
    "showdown all-in poker",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infográfico do showdown no Texas Hold'em — em uma mesa 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ vence com par de reis e kicker Ás",
  content: `
Você pagou a aposta no river. Agora vocês dois estão se encarando, cada um esperando o outro virar as cartas primeiro.

Ninguém se mexe.

O dealer olha de um lado para o outro. O resto da mesa suspira.

==Esse impasse acontece em praticamente toda mesa ao vivo== — porque a maioria dos iniciantes nunca aprendeu quem, pela regra, tem que mostrar primeiro. Este guia cobre todas as situações de showdown: mãos normais, river que passou em check, all-ins e por que dar slow roll vai render olhares tortos pelo resto da sessão.

## Quem mostra as cartas primeiro no showdown?

A regra depende de como a última rodada de apostas terminou (para a sequência completa, rua por rua, que leva até aqui, veja [a ordem do jogo](/pt/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ação na última rua | Quem mostra primeiro |
|--------------------|-----------------|
| Alguém apostou ou aumentou no river | ==O último jogador que apostou ou aumentou== mostra primeiro |
| Todos deram check no river | O primeiro jogador ativo à esquerda do botão mostra primeiro |
| All-in em rua anterior (sem apostas no river) | Todas as mãos viradas para cima antes/durante o runout |

</div>

![Infográfico da ordem do showdown no Texas Hold'em — quem mostra primeiro em uma mesa J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:A expressão-chave é "último agressor".== Se você apostou no river e foi pago, você mostra primeiro — não quem pagou. Quem pagou tem o direito de ver a sua mão antes de decidir se mostra ou dá muck na dele.

---

## Dá para dar muck no showdown sem mostrar as cartas?

Sim — **se você perdeu**.

Depois que o último agressor mostra a mão, os outros jogadores podem:
- **Mostrar a mão**, se acharem que ganham
- **Dar muck com as cartas viradas para baixo**, se virem que perderam — sem precisar revelar nada

==r:Mas existe uma exceção importante:== se a sua aposta no river foi paga, quem pagou comprou o direito de ver a sua mão. Qualquer jogador que recebeu cartas na mão pode pedir ao dealer para virar uma mão descartada que participou de um showdown pago — é a regra **"I want to see that hand"** ("quero ver essa mão") na maioria dos clubes. (Não confunda com o "show one, show all", que significa que, se você mostrar suas cartas voluntariamente a um jogador, todo mundo na mesa tem o direito de vê-las.)

Regra prática: ==se você blefou e foi pago, dê muck rápido. Se apostou por valor e foi pago, vire as cartas.==

---

## Ordem do showdown quando todos deram check no river

Se ninguém apostou no river (todos deram check), o showdown começa pelo **primeiro jogador ativo à esquerda do botão do dealer** e segue em sentido horário.

Exemplo: botão, small blind e big blind chegam ao river. O SB dá check, o BB dá check, o botão dá check. O showdown começa pelo SB (primeiro jogador ativo à esquerda do botão). O SB pode mostrar ou dar muck. Depois o BB. E o botão por último.

==g:Nesse caso, o botão mostra por último== — o que, na prática, é uma vantagem. O botão pode ver se alguém ganha dele antes de decidir se vira as cartas.

---

## Regras de showdown no all-in — quem está all-in mostra primeiro?

Quando um jogador vai de all-in e não há mais apostas possíveis, as cartas restantes normalmente são abertas com **todas as mãos viradas para cima**. Isso protege a integridade da mão — ninguém deve poder dar muck estrategicamente em uma situação de all-in.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Cenário de all-in | Regra de showdown |
|----------------|---------------|
| Jogador vai all-in, os outros pagam, sem mais apostas possíveis | Todas as mãos viradas para cima antes ou durante o runout |
| Aposta all-in no river é paga | Showdown normal — quem foi all-in é o último agressor e mostra primeiro |
| Vários all-ins criando vários side pots | Cada pote é resolvido separadamente; todas as mãos envolvidas são mostradas |

</div>

Um detalhe: se existe um **side pot** (pote paralelo — outros jogadores ainda têm fichas e continuam apostando), o side pot é decidido primeiro — o último agressor entre esses jogadores ativos mostra primeiro — e só depois vem o pote principal, onde a mão de quem está all-in é mostrada.

Para entender como os side pots são montados e pagos quando alguém está all-in, veja [as regras de all-in e side pots](/pt/blog/holdem-all-in-rules); para potes divididos, veja as regras de split pot e divisão do pote.

---

## O que é a regra "cards speak" (as cartas falam)?

![Infográfico da regra cards speak — uma mesa 8♠ 9♣ 10♥ J♦ Q♠ forma uma sequência até a dama, e no showdown as cartas falam por si](/images/holdem-showdown-cards-speak.webp)

"Cards speak" — as cartas falam — significa que ==a melhor mão ganha, não importa o que os jogadores digam==.

Se um jogador lê errado a própria mão e anuncia "tenho um par", mas na verdade tem uma sequência — a sequência ganha. O dealer lê as cartas e entrega o pote à melhor mão mostrada.

Isso vale para os dois lados. Se você acha que perdeu e dá muck sem mostrar, mas a sua mão era a vencedora — ==r:o pote já era==. Sua mão está morta no momento em que encosta no muck. Se não tiver 100% de certeza de que perdeu, sempre deixe o dealer ler a sua mão antes de descartar.

Situação real: você tem J♥ 10♥ em uma mesa Q♥ 9♥ 8♥ 2♣ 5♦. Você tem um straight flush até a dama (Q-J-10-9-8 de copas). O adversário mostra K♣ Q♦ (um par de damas). Você ganha de lavada. Não dê muck só porque viu a dama dele.

---

## O que é slow roll no poker?

Slow roll é ==demorar de propósito para mostrar uma mão muito forte quando você já sabe que ganhou==.

Você tem os nuts. O adversário mostra uma mão forte. Você pausa, finge pensar, olha as cartas devagar, faz todo mundo esperar — e então vira a mão vencedora. Tecnicamente permitido. Universalmente odiado.

![Slow roll no poker — jogadores irritados enquanto um deles demora de propósito para mostrar a mão vencedora](/images/holdem-showdown-slow-roll.webp)

==r:Slow roll é o jeito mais rápido de criar inimigos numa mesa de pôquer.== É interpretado como esfregar a vitória na cara do adversário. A regra não escrita: se você tem a melhor mão possível, vire na hora. Não existe nenhum ganho estratégico em dar slow roll. O único resultado é clima pesado.

Compare com o **tank** — levar tempo de verdade para tomar uma decisão difícil. Isso é aceito, até respeitado. Dar slow roll com os nuts é outra história.

---

## Precisa mostrar as cartas se ganhar sem showdown?

Não. ==g:Se todo mundo foldar antes do showdown, você leva o pote sem mostrar uma única carta.==

Você pode mostrar se quiser — tem jogador que mostra o blefe para tiltar o adversário, ou mostra a mão forte para construir uma imagem tight. Mas você nunca é obrigado a mostrar as cartas quando ganha porque todos os outros foldaram.

Essa é uma das razões pelas quais o pôquer é interessante. Nem sempre a melhor mão ganha — ganha o último que fica de pé.

---

## Etiqueta no showdown — o que os iniciantes erram

### Erro 1: esperar que quem pagou mostre primeiro

Você apostou no river. Alguém pagou. Você trava e fica esperando o outro mostrar. É o contrário. ==Você mostra primeiro — você foi o último agressor.== Ficar esperando parece slow roll, mesmo quando não é.

### Erro 2: dar muck antes de o dealer ler a mão

Você tem quase certeza de que perdeu. Empurra as cartas viradas para baixo em direção ao muck. O dealer recolhe. E aí descobre-se que você tinha a mão vencedora. Mão morta — pote perdido. ==Nunca dê muck sem ter certeza.== Deixe o dealer ler as duas mãos.

### Erro 3: exigir ver toda mão que foi paga

Na maioria dos clubes você pode pedir ao dealer para expor uma mão descartada — mas só uma mão que foi paga e chegou ao showdown. Mãos foldadas estão mortas e nunca podem ser recuperadas. Essa regra existe para proteger contra conluio, não para matar curiosidade, e abusar dela é considerado falta de educação. Use com moderação.

### Erro 4: não saber que pode mostrar antes da sua vez

Não existe regra contra virar a mão antes de chegar oficialmente a sua vez. ==g:Se você tem os nuts ou uma mão muito forte, mostre na hora.== Os outros jogadores agradecem. Acelera o jogo. E é o oposto do slow roll.

---

:::readnext[Continue lendo]
/pt/blog/holdem-game-order | A ordem do jogo no Hold'em | /images/blog-holdem-game-flow.webp
/pt/blog/holdem-all-in-rules | Regras de all-in e side pots | /images/holdem-all-in-rules-hero.webp
:::

## Perguntas frequentes

**Q. Quem mostra as cartas primeiro no showdown do poker?**

A. O último jogador que fez uma ação agressiva (aposta ou aumento) na última rodada de apostas mostra primeiro. Se a última rodada passou em check por todos, o primeiro jogador ativo à esquerda do botão do dealer mostra primeiro, e a ação segue em sentido horário.

**Q. Sou obrigado a mostrar as cartas se pagarem minha aposta no showdown?**

A. Sim — se você foi o último a apostar ou aumentar no river, você mostra primeiro quando é pago. Se foi você quem pagou a aposta de alguém, pode dar muck com as cartas viradas para baixo depois de ver a mão dele, caso tenha perdido. Porém, na maioria dos clubes, qualquer jogador da mesa pode pedir ao dealer para revelar uma mão paga que foi descartada.

**Q. Dá para dar muck no showdown sem mostrar?**

A. Sim, mas só se você claramente perdeu. Depois que a mão vencedora é mostrada, os perdedores podem dar muck com as cartas viradas para baixo. A exceção é quando a sua mão foi paga — os adversários podem pedir para vê-la. Nunca dê muck antes de o dealer ler as duas mãos se houver qualquer dúvida sobre quem ganhou.

**Q. O que é slow roll no poker e por que é tão malvisto?**

A. Slow roll é atrasar de propósito a exibição de uma mão vencedora que você já sabe ser a melhor. É permitido pelas regras, mas universalmente odiado, porque é visto como humilhar o adversário de propósito. Se você tem os nuts ou uma vitória clara, vire as cartas imediatamente. A velocidade com que você mostra diz muito sobre o seu caráter na mesa.

**Q. Em um all-in, quem mostra as cartas primeiro?**

A. Quando um jogador vai de all-in e não há mais apostas possíveis, todas as mãos envolvidas naquele pote normalmente são viradas para cima antes ou durante a abertura das cartas comunitárias. Se existe um side pot com apostas em andamento, o último agressor entre esses jogadores mostra primeiro para o side pot. A mão de quem está all-in é mostrada separadamente para o pote principal.

**Q. O que significa "cards speak" no poker?**

A. Cards speak (as cartas falam) significa que a melhor mão ganha pelo que as cartas realmente mostram — não pelo que os jogadores dizem. Um jogador que lê a própria mão errado e anuncia a mão incorreta ainda ganha se as cartas dele formarem a melhor mão. Por outro lado, quem dá muck sem confirmar que perdeu não tem nenhum direito ao pote, mesmo que a mão dele fosse a vencedora.

**Q. Preciso mostrar as cartas se ganhar sem showdown?**

A. Não. Se todos os outros foldarem antes do showdown, você leva o pote na hora e nunca precisa revelar suas cartas. Mostrar é opcional — tem jogador que vira o blefe para provocar os adversários, mas você nunca é obrigado a mostrar uma mão que ganhou sem disputa.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras do Texas Hold'em para iniciantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As regras completas — dos blinds ao showdown</div>
  </a>
</div>
`.trim(),
};
