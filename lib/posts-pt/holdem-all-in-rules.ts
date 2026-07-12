import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Regras de all-in no Texas Hold'em: side pots, re-raise e showdown",
  seoTitle: "Foi de all-in e travou? — Regras de all-in e side pot no Hold'em",
  desc: "Shovou todas as fichas e não sabe o que pode ganhar? Regras de all-in no Texas Hold'em: table stakes, pote paralelo (side pot), re-raise e ordem do showdown.",
  tldr: "Ir de all-in é apostar todas as fichas que você tem. Você só pode ganhar de cada adversário o valor que igualou (o pote principal). O que os stacks maiores apostam além disso vira um pote paralelo (side pot) que você não pode ganhar. Um all-in menor que um aumento completo NÃO reabre a aposta para quem já agiu.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-12",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "regras de all in no poker",
    "all in texas holdem",
    "side pot poker o que e",
    "pote paralelo poker",
    "all in reabre a aposta",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in no Texas Hold'em — jogador empurra todas as fichas para o centro enquanto o dealer separa o pote principal e o pote paralelo no feltro verde",
  content: `
Você está com stack curto. Shova. O jogador de trás paga. Um terceiro aumenta. O dealer começa a separar as fichas em duas pilhas.

E você não tem ideia do que está acontecendo.

Eu já estive nessa mesa. Na primeira vez que fui de all-in num cash game ao vivo, eu não sabia se ainda podia ganhar alguma coisa, se o outro jogador podia aumentar de novo, nem qual pilha de fichas era minha. Ninguém explicou.

==Este guia cobre todas as situações: pote principal, potes paralelos, quando o re-raise é permitido e a ordem do showdown.== Chega de congelar quando o dealer começa a contar stacks. (Se o fluxo básico de apostas ainda estiver confuso, o [guia de regras para iniciantes](/pt/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") cobre isso primeiro.)

## O que significa "all-in" no Texas Hold'em?

Ir de all-in significa apostar todas as fichas que você tem na sua frente. Depois que você se compromete, não pode adicionar mais fichas — e ninguém pode te forçar a foldar.

A base é a regra de **table stakes**: você só pode apostar as fichas que estavam na mesa no início da mão. Não vale tirar dinheiro do bolso, pedir emprestado a um amigo, nem colocar relógio ou chave do carro — isso é pôquer de filme.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Termo | Significado |
|------|---------|
| Push / Shove / Jam | Gírias para ir de all-in ("shovar") |
| Table stakes | Você só aposta o que tinha no início da mão |
| Double up | Ganhar um all-in e dobrar o stack |
| Pote principal (main pot) | O pote que todos — inclusive quem está de all-in — podem ganhar |
| Pote paralelo (side pot) | Fichas que só os stacks maiores podem ganhar; quem está de all-in fica de fora |

</div>

==g:Uma vez de all-in, você tem garantia de ver todas as cartas comunitárias restantes.== Ninguém pode te tirar da mão com um blefe. Suas cartas seguem vivas até o river.

---

## Como declarar o all-in

Duas formas válidas:

**1. Declaração verbal** — Diga "all-in" com clareza, para o dealer e os adversários ouvirem. É o jeito mais seguro. Depois que falou, está valendo.

**2. Empurrar todas as fichas** — Deslize o stack inteiro para o centro em um único movimento. Empurrar fichas aos poucos pode parecer string bet, então mova tudo de uma vez.

![Showdown de all-in no Texas Hold'em — mesa K♠ 10♣ 7♦ 4♥ 2♣ com as fichas separadas em pote principal e pote paralelo identificados](/images/holdem-all-in-declare.webp)

==r:Nunca empurre uma única ficha sem dizer nada — o dealer conta só o valor daquela ficha, não o seu stack inteiro.== Sempre declare "all-in" em voz alta, ou mova o stack completo de uma vez.

---

## Como funcionam os side pots (potes paralelos)? — Por que o jogador de all-in fica limitado

O jogador de all-in só pode ganhar o valor que colocou multiplicado pelo número de pagadores. Qualquer ficha apostada além disso forma um **pote paralelo (side pot)** que pertence exclusivamente aos jogadores que o financiaram.

![Pote paralelo em all-in no Texas Hold'em — dealer separando as fichas em pote principal e pote paralelo enquanto o Jogador A fica limitado](/images/holdem-all-in-side-pot.webp)

### Exemplo com 3 jogadores (padrão)

| Jogador | Stack | Ação |
|--------|-------|--------|
| Jogador A | 100 fichas | All-in |
| Jogador B | 300 fichas | Paga 100 e aposta mais 50 |
| Jogador C | 300 fichas | Paga 100 e depois paga os 50 |

**Pote principal:** 100 × 3 = **300 fichas** (A, B e C concorrem)

**Pote paralelo:** 50 × 2 = **100 fichas** (só B e C concorrem)

==O Jogador A pode ganhar o pote principal de 300 fichas no showdown. Mas mesmo que A tenha a melhor mão da mesa, A não pode tocar no pote paralelo de 100 fichas.== B ou C vai levá-lo.

### Exemplo com 4 jogadores e stacks diferentes

É aqui que a coisa complica — e onde a maioria dos iniciantes se perde.

| Jogador | Stack | All-in de |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | paga tudo |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pote | Valor | Quem concorre |
|:---|:---:|:---|
| Pote principal | 100 × 4 = **400** | A, B, C, D |
| Pote paralelo 1 | 100 × 3 = **300** | B, C, D (A está limitado) |
| Pote paralelo 2 | 300 × 2 = **600** | C, D (A e B limitados) |
| **Total** | **1.300** | — |

</div>

A regra: ==cada pote paralelo é montado pegando a diferença até o próximo stack mais curto × o número de jogadores que a igualam.== Sempre do stack menor para o maior.

---

## O all-in reabre a aposta? — A regra que quase todo mundo erra

==r:Essa é a regra de all-in mais disputada nas mesas ao vivo — já vi dois jogadores discutirem por cinco minutos enquanto a mesa inteira esperava. Os dois estavam errados.==

**A regra:** se um jogador vai de all-in por **menos que um [aumento completo](/pt/blog/holdem-betting-actions)**, esse all-in NÃO reabre a aposta para quem já agiu naquela rodada.

![Regra de re-raise após all-in no pôquer — Jogador C vai de all-in por menos que um aumento completo e o Jogador A só pode pagar ou foldar](/images/holdem-all-in-reraise-rule.webp)

**Exemplo:**

Blinds de $1/$2. Quatro jogadores veem o flop.

1. O Jogador A aposta $10.
2. O Jogador B aumenta para $25.
3. O Jogador C vai de all-in por **$30** (só $5 a mais que o aumento de $25 de B — não é um incremento de aumento completo).

O que acontece com os Jogadores A e D?

- O Jogador A já agiu (apostou $10). Como o all-in de $30 de C é **menor que um aumento completo** (que exigiria no mínimo $40 = $25 + $15), a ação NÃO reabre para o Jogador A. ==A só pode pagar ou foldar — não pode aumentar de novo.==
- O Jogador D ainda não agiu — **D continua podendo aumentar normalmente**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Valor do all-in | Aumento completo? | Reabre a aposta? |
|--------------|-------------|-----------------|
| Menor que um aumento completo | Não | Não — quem já agiu só pode pagar ou foldar |
| Aumento completo ou mais | Sim | Sim — todos podem aumentar de novo |

</div>

Por que essa regra existe? Ela protege os jogadores de serem forçados a aumentos maiores por all-ins parciais. Um aumento completo sinaliza agressão de verdade — um all-in de migalhas de um stack curto, não.

### Caso avançado: e se vários jogadores forem de all-in curto?

Essa é a versão que derruba até os regulares. Vários all-ins curtos podem **se somar** até um aumento completo — e se os incrementos combinados atingirem o mínimo, a aposta reabre para quem já agiu.

Essa é a regra oficial de "re-opening the bet" da TDA, e a maioria dos clubes de pôquer a segue.

**Exemplo (blinds de $1/$2, no flop):**

1. O Jogador A aposta $10.
2. O Jogador B vai de all-in por **$14** (incremento de +$4 — sozinho, não é um aumento completo)
3. O Jogador C vai de all-in por **$21** (incremento de +$7 — sozinho, não é um aumento completo)

Incrementos combinados: $4 + $7 = **$11** — atinge o mínimo de aumento de $10.

**Resultado: a aposta REABRE para o Jogador A.** A pode foldar, pagar ou aumentar de novo, mesmo que nem B nem C tenham feito um aumento completo individualmente.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in de B | All-in de C | Incremento combinado | Reabre para A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — abaixo de $10 | ❌ Não |
| $14 (+$4) | $21 (+$7) | $11 — atinge $10 | ✅ Sim |
| $15 (+$5) | $25 (+$10) | $15 — atinge $10 | ✅ Sim |

</div>

O mínimo de aumento é sempre a *última aposta ou aumento completo válido* — nunca um total acumulado qualquer.

### Guia rápido de decisão — este all-in reabre a aposta?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situação | Reabre para quem já agiu? |
|---|---|
| Um all-in < aumento completo | ❌ Não — só pagar ou foldar |
| Um all-in ≥ aumento completo | ✅ Sim — todos podem aumentar de novo |
| Vários all-ins curtos, soma < aumento completo | ❌ Não |
| Vários all-ins curtos, soma ≥ aumento completo | ✅ Sim |
| Jogador que ainda NÃO agiu | ✅ Sempre pode aumentar (em qualquer caso) |

</div>

---

## Regras de showdown no all-in

Quando todas as apostas terminam e há um jogador de all-in, o showdown funciona assim:

1. **As cartas são viradas para cima.** Em torneios, todas as mãos envolvidas no all-in costumam ser abertas assim que as apostas terminam. Em cash games, vale primeiro a [regra padrão do último agressor no showdown](/pt/blog/holdem-showdown-rules), e depois os jogadores de all-in mostram.
2. **Os potes paralelos são pagos primeiro.** O dealer resolve o pote paralelo criado por último e vai voltando até o pote principal.
3. **As cartas falam.** A melhor mão ganha cada pote pelo qual concorre — independentemente do que os jogadores digam que têm.
4. **Pode haver mais de um vencedor.** O Jogador A pode ganhar o pote principal e o Jogador B, o pote paralelo. Nenhum dos dois leva tudo só porque ganhou "o seu" pote.

==g:Um jogador pode ganhar o pote principal e perder o pote paralelo. Os dois resultados são válidos.==

**Caso especial:** se um pote paralelo tiver só um jogador restante (todos os outros foldaram), esse jogador recebe as fichas de volta na hora — não precisa de showdown para aquele pote.

---

## O que acontece se você errar no all-in? — 5 erros para evitar

### Erro 1: achar que o jogador de all-in pode ganhar o pote paralelo
Não pode. Uma vez que o jogador de all-in está limitado, qualquer ficha extra apostada pelos stacks maiores pertence a um pote sobre o qual ele não tem nenhum direito.

### Erro 2: não conhecer a regra de reabertura do re-raise
Um all-in parcial do Jogador C não dá ao Jogador A uma segunda chance de aumentar. Saber isso de cor encerra a discussão antes de ela começar.

### Erro 3: adicionar fichas do bolso no meio da mão
Table stakes. O que está na mesa é tudo o que você pode apostar. Se você está de all-in por $80 e o pote é de $400, você só pode ganhar $80 de cada pagador.

### Erro 4: dar muck a mão rápido demais
Você está de all-in pelo pote principal. Dois outros jogadores brigam pelo pote paralelo. Não dê muck — sua mão continua viva pelo pote principal. ==Sempre espere o dealer resolver todos os potes antes de tocar nas suas cartas.==

### Erro 5: ir de all-in por frustração
O all-in é a jogada mais poderosa da mesa. Ele força os adversários a decisões de tudo ou nada. Esse poder some quando você shova de qualquer jeito. Use no momento certo — pressão de stack curto, mãos de valor que você quer que paguem, blefes com fold equity de verdade.

---

:::readnext[Continue lendo]
/pt/blog/texas-holdem-rules-for-beginners | Regras do Texas Hold'em para iniciantes | /images/rules-texas-holdem.webp
/pt/blog/holdem-showdown-rules | Regras do showdown explicadas | /images/holdem-showdown-rules-hero.webp
:::

## Perguntas frequentes

**Q. Dá para ir de all-in com menos que o big blind?**

A. Sim. Se você tem menos fichas que o big blind, entra automaticamente de all-in pelo que tiver quando os blinds chegarem. Os outros jogadores continuam pagando o big blind cheio — o que passar da sua contribuição vai para um pote paralelo.

**Q. O que acontece se eu ganhar o all-in mas perder o pote paralelo?**

A. Você leva o pote principal (o que igualou de cada jogador) e o outro jogador leva o pote paralelo. Cada um ganha a parte pela qual concorria.

**Q. Ir de all-in obriga a mostrar a mão?**

A. Em torneios, sim — quando as apostas terminam com um all-in, todas as mãos envolvidas costumam ser abertas. Em cash games ao vivo, valem as regras normais de showdown: o último agressor mostra primeiro, e os demais mostram ou dão muck.

**Q. Pode fazer run it twice num all-in de pôquer?**

A. O run it twice (distribuir as cartas comunitárias restantes duas vezes e dividir o pote) é permitido em muitos cash games se os dois jogadores concordarem após o all-in. Em torneios, geralmente não é permitido. O acordo precisa acontecer antes de as cartas comunitárias restantes serem abertas.

**Q. O que é exatamente a regra de "table stakes"?**

A. Table stakes significa que você só pode apostar as fichas que estavam na sua frente quando a mão começou. Não dá para adicionar dinheiro com a mão em andamento. Isso protege os dois lados — você nunca é forçado a arriscar mais que o seu stack, e o adversário não pode de repente apostar mais do que você consegue cobrir.

**Q. Se dois jogadores vão de all-in por valores diferentes, quem mostra primeiro?**

A. O último all-in é tratado como a última ação agressiva. Valem as regras normais de showdown: quem fez o último all-in ou movimento agressivo mostra primeiro. Em cash games, se foi um all-in pago sem mais ação, quem pagou pode dar muck se perder depois de ver a mão do jogador de all-in (em torneios, todas as mãos envolvidas ficam abertas).

**Q. As regras de all-in mudam entre torneio e cash game?**

A. As regras centrais são as mesmas, mas há duas diferenças práticas. Primeiro, em torneios todas as mãos envolvidas num all-in são abertas assim que as apostas terminam (Regra 16 da TDA) — não dá para dar muck antes do showdown. Em cash games, vale a ordem normal de showdown e os jogadores podem dar muck. Segundo, o run it twice é comum em cash games (se os dois concordarem), mas geralmente não é permitido em torneios.

---

## Posts relacionados

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/pt/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras do Texas Hold'em para iniciantes</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">As regras completas, dos blinds ao showdown</div>
  </a>
  <a href="/pt/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Regras do showdown</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Quem mostra primeiro e quando dá para dar muck</div>
  </a>
</div>
`.trim(),
};
