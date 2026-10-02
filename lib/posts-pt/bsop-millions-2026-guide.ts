import type { Post } from "../posts";

/**
 * ★ pt 고유 글(EN·KO 마스터 없음) — 2026-10-02 신설.
 * 사실 정본 = docs/tournament-factsheets/2026-11-bsop-millions.md (열람일 10-02 · 전부 bsop.com.br 원문 DOM 추출)
 * 🔴 BSOP Championship 바이인은 1차 출처끼리 충돌한다(그리드 R$ 25.000 · 기사 R$ 15.000) — 고르지 말고 병기 유지.
 * 🔴 2026 Main Event 개런티는 미발표 — 2025의 R$ 10M GTD를 2026 값처럼 쓰지 말 것.
 * 🔴 훅이 죽는 날 = 11/20 20:00(Main Event 마지막 Dia 1J) · 11/23 Main 결승 → 결과 아카이브 전환(docs/update-calendar.md)
 */
export const POST: Post = {
  slug: "bsop-millions-2026-guide",
  title: "BSOP Millions 2026: programação, buy-in e inscrição",
  seoTitle: "R$ 5.000 ou US$ 109? Como jogar o BSOP Millions 2026",
  desc: "BSOP Millions 2026 vai de 13 a 28/11 no WTC, em São Paulo. Main Event de R$ 5.000 com 10 dias iniciais, satélites, GameID e os torneios mais baratos da grade.",
  tldr: "O BSOP Millions 2026 acontece de 13 a 28 de novembro no Complexo WTC (WTC Sheraton), em São Paulo, com 103 torneios na grade oficial. O Main Event custa R$ 5.000, tem 10 dias iniciais entre 16 e 20 de novembro (12h e 20h) e a mesa final em 23 de novembro. Dá para chegar mais barato pelos satélites do PokerStars (vaga por US$ 109 ou pacote com hotel por US$ 320) ou pelo mega satélite ao vivo de R$ 600 no dia 15. A inscrição é feita no caixa do evento ou no app GameID, com documento oficial com foto e idade mínima de 18 anos.",
  category: "tournament",
  date: "2026-10-02",
  updated: "2026-10-02",
  readTime: "14 min",
  emoji: "🇧🇷",
  layout: "tournament-guide",
  tags: [
    "bsop millions 2026",
    "bsop millions",
    "bsop sao paulo",
    "bsop 2026",
    "bsop main event",
    "bsop satelite",
    "bsop inscrição",
    "programação bsop millions",
    "torneio de poker são paulo",
  ],
  image: "/images/bsop-millions-2026-guide-hero.webp",
  imageAlt: "Resumo do BSOP Millions 2026 — 13 a 28 de novembro no Complexo WTC em São Paulo, Main Event de R$ 5.000 com 10 dias iniciais, satélites a partir de US$ 109 e torneios a partir de R$ 500",
  keepImagesInBody: true,
  content: `
No ano passado, o Main Event do BSOP Millions fechou com ==**2.659 inscrições**== e ==**R$ 10.643.800**== distribuídos. O buy-in era de R$ 5.000 — e o garantido de R$ 10 milhões foi superado.

Em 2026 a etapa acontece no Complexo WTC, em São Paulo, com ==**103 torneios**== na grade e uma mudança que pesa na rotina: pela primeira vez, vários torneios começam ==**ao meio-dia**==. Este guia junta, só com o que está publicado no site oficial do BSOP, as datas, o preço de cada porta de entrada e o passo a passo da inscrição.

Se você ainda está montando a base de torneio, o [guia de torneio de Texas Hold'em](/pt/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") explica estrutura, blinds e reentrada antes de você encarar 16 dias de festival.

---

> **Resposta rápida**
> O BSOP Millions 2026 vai de ==**13 a 28 de novembro**==, no ==**Complexo WTC (WTC Sheraton), em São Paulo**==. O ==**Main Event custa R$ 5.000**==, tem ==**10 dias iniciais de 16 a 20 de novembro**== (12h e 20h) e decide o título em ==**23 de novembro**==. Os caminhos mais baratos são o satélite do PokerStars (==g:US$ 109 a vaga==) e o mega satélite ao vivo de ==g:R$ 600== no dia 15. Para se inscrever: cadastro no BSOP, caixa do evento ou app ==**GameID**==, documento com foto e ==**18 anos ou mais**==.

---

### O essencial do BSOP Millions 2026

:::stripe
13–28/11 | 16 dias de festival no Complexo WTC
103 | torneios na grade oficial
R$ 5.000 | buy-in do Main Event (10 dias iniciais)
2.659 | inscrições no Main Event de 2025
:::

## Quando e onde é o BSOP Millions 2026?

O BSOP Millions 2026 acontece de ==**13 a 28 de novembro de 2026**== no ==**Complexo WTC**==, o mesmo endereço do hotel WTC Sheraton, em São Paulo. O próprio BSOP chama a etapa de "a última e maior etapa da temporada 2026 do Campeonato Brasileiro de Poker", com mais de 100 torneios e buy-ins de R$ 200 a R$ 500.000.

| Item | O que diz o site oficial |
|---|---|
| Datas | ==**13 a 28 de novembro de 2026**== (16 dias) |
| Local | Complexo WTC · WTC Sheraton · São Paulo-SP |
| Grade | ==**103 torneios**== (#1 a #103), de R$ 200 a R$ 500.000 |
| Main Event | #26 · ==**R$ 5.000**== · 40.000 fichas · final em 23/11 |
| Caixa de inscrições | ==**11h às 2h**== (pagamento de prêmios só a partir das 14h) |
| Cash game | 24 horas por dia, segundo o BSOP |
| Atendimento | bsop@bsop.com.br · WhatsApp (11) 91562-1712 (seg. a sex., 10h–19h) |

Para comer, o FAQ oficial lembra que há opções no próprio salão e a ==**praça de alimentação do Shopping D&D**==, que fica dentro do complexo. Para quem vai de carro, o estacionamento do WTC Sheraton cobra ==**R$ 38 (até 1 hora) e R$ 100 (até 12 horas)**== para não hóspedes, e R$ 59 a diária para hóspedes.

:::note
==r:Atenção ao horário novo.== Em 2026, vários torneios com mais de um dia inicial começam às ==**12h**==, e os flights noturnos foram antecipados. No Main Event, a grade oficial mostra os Day 1 noturnos às ==**20h**== — e não às 19h, como em outros torneios. Confira sempre o horário do evento específico na grade.
:::

## Quanto custa o Main Event do BSOP Millions?

O Main Event do BSOP Millions 2026 (#26, Torneio Gold) custa ==**R$ 5.000**== e dá ==**40.000 fichas**== iniciais. São ==**10 dias iniciais**==, dois por dia de 16 a 20 de novembro (12h e 20h), seguidos do Dia 2 em 21/11, Dia 3 em 22/11 e Dia Final em ==**23 de novembro, às 13h**==.

![Calendário dos 10 dias iniciais do Main Event do BSOP Millions 2026 — dois flights por dia, às 12h e às 20h, de 16 a 20 de novembro, e as fases finais de 21 a 23 de novembro](/images/bsop-millions-2026-main-event-flights.webp)

| Dia | Flights (horário de Brasília) |
|---|---|
| Seg 16/11 | Dia 1A 12h · Dia 1B 20h |
| Ter 17/11 | Dia 1C 12h · Dia 1D 20h |
| Qua 18/11 | Dia 1E 12h · Dia 1F 20h |
| Qui 19/11 | Dia 1G 12h · Dia 1H 20h |
| Sex 20/11 | Dia 1I 12h · ==**Dia 1J 20h (último)**== |
| Sáb 21/11 | Dia 2 · 13h |
| Dom 22/11 | Dia 3 · 13h |
| Seg 23/11 | ==**Dia Final · 13h**== |

**Reentrada mudou em 2026.** O BSOP anunciou no Instagram oficial, em 24 de setembro, que "o Main Event e o BSOP Championship contarão com ==1 reentrada por flight==". Ou seja: em cada Day 1 você tem a entrada e mais uma bala.

**Só se inscreva de novo depois de cair.** O FAQ é direto: você só pode fazer uma segunda inscrição "após ter sido eliminado do torneio" — se registrar dois dias iniciais ao mesmo tempo, ==r:é desclassificado==. Trocar o dia inicial é permitido, desde que você peça no balcão antes de o dia escolhido começar.

O garantido do Main Event de 2026 ainda não aparece nas páginas oficiais que consultei em 2 de outubro. Em 2025, o mesmo buy-in de R$ 5.000 veio com ==R$ 10 milhões garantidos== — e o field passou disso, com R$ 10.643.800 distribuídos.

Uma observação de quem já jogou séries com muitos Day 1: o flight das 20h parece o mais confortável para quem trabalha durante o dia, mas ele termina de madrugada e ==r:você chega cansado ao Dia 2==. Outra vantagem do flight das 12h: se você cair cedo, ainda dá tempo de se inscrever de novo no flight das 20h do mesmo dia.

## Quais são os torneios mais baratos do BSOP Millions?

O torneio mais barato da grade custa ==**R$ 200**== — são os mega satélites ao vivo. Fora dos satélites, a porta de entrada é de ==**R$ 500**==, com eventos como o BSOP Primeira Vez, o Meia Milha e os Super 500. Pela grade oficial, 31 dos 103 eventos têm buy-in de até R$ 1.500.

![Faixas de buy-in do BSOP Millions 2026 — satélites de R$ 200, eventos de R$ 500 como Primeira Vez e Meia Milha, Millionaire Maker de R$ 1.200 e Start-Up Mystery Million de R$ 1.500](/images/bsop-millions-2026-buyins.webp)

| Torneio | Buy-in | Datas | Por que olhar |
|---|---|---|---|
| #7 BSOP Primeira Vez | ==**R$ 500**== | 13/11 · 18h | feito para a estreia no BSOP |
| #11 Meia Milha | ==**R$ 500**== | Dia 1 em 14/11 (12h, 19h, 22h) · final 15/11 | três flights num só dia |
| Super 500 (#23, #84, #91, #103) | R$ 500 | 15, 25, 26 e 28/11 | torneios de um dia |
| #74 Uma Milha | R$ 1.000 | Dia 1 de 24 a 26/11 · final 28/11 | 50.000 fichas iniciais |
| #38 Millionaire Maker (Gold) | ==**R$ 1.200**== | Dia 1 de 18 a 22/11 · final 24/11 | ==g:R$ 5 milhões garantidos== e R$ 1 milhão para o campeão |
| #1 Start-Up Mystery Million | R$ 1.500 | Dia 1 de 13 a 16/11 · final 18/11 | envelope de ==g:R$ 1 milhão== |
| #68 Mini Main Event | R$ 2.500 | 23/11 (12h e 20h) · final 25/11 | metade do buy-in do Main Event |

O Millionaire Maker e o Start-Up Mystery Million são as apostas do BSOP para quebrar o recorde de field de um torneio no Brasil. O recorde atual, segundo o próprio BSOP, é de ==**4.162 inscrições**==, no Start-Up Mystery Bounty do BSOP Millions de 2021.

Há ainda eventos de público restrito: o ==**Seniors (50+)**==, de R$ 2.500 (Dia 1 em 15/11), e o ==**Ladies**==, de R$ 1.000 (Dia 1 em 21/11, às 15h).

## Como se inscrever no BSOP Millions 2026?

Para se inscrever no BSOP Millions você precisa de um ==**cadastro no BSOP**==, ter ==**mais de 18 anos**== e apresentar ==**documento oficial com foto**==. A inscrição sai no caixa do evento ou pelo app ==**GameID**==; quem nunca jogou o BSOP economiza fila fazendo o cadastro pelo app antes de chegar.

:::steps
Cadastro | Crie a conta no GameID e vincule ao BSOP (ou faça o cadastro direto no caixa)
Escolha o torneio | No Main Event, o registro abre no primeiro dia do festival, às 12h, para qualquer Day 1. Nos eventos paralelos, a inscrição presencial abre 1 hora antes do início
Pagamento | No GameID: PIX ou saldo no sistema do BSOP. No caixa: dinheiro, PIX, débito, crédito, cripto, Luxon Pay, saldo PokerStars ou GamersWallet / GB Wallet
Recibo | O recibo traz mesa e assento. Se ainda não houver mesas, elas saem perto de 2 horas antes, em "Meus Tickets"
Na mesa | Documento com foto na inscrição e para sentar — uma conta GameID validada vale como documento
:::

Três regras do FAQ que pegam muita gente:

- ==r:Não existe inscrição para terceiros.== Seu amigo precisa estar lá, com documento.
- ==r:Sem assinatura, sem torneio.== Todo jogador assina o termo de concordância com o regulamento e a autorização de uso de imagem.
- ==r:O saldo do PokerStars vale só para torneios== — não para o cash game.

Se o torneio estiver cheio, você entra como ==**alternate**==: a inscrição está feita, mas você aguarda perto do salão até ser chamado no microfone para ocupar uma vaga aberta.

## Como ganhar uma vaga por satélite para o BSOP Millions?

Os satélites do PokerStars são o caminho mais barato para o Main Event do BSOP Millions: a ==**vaga custa US$ 109**== e o ==**pacote com hospedagem e buy-in sai por US$ 320**==. Segundo o BSOP, eles costumam rodar ==**às terças, quintas e domingos**==, por volta das 21h (horário de Brasília), e há feeders diários e até freerolls para chegar a eles gastando menos.

| Rota | Preço | Prêmio | Onde |
|---|---|---|---|
| Satélite PokerStars | ==**US$ 109**== | vaga no Main Event | PokerStars · Eventos → Live → Americas → BSOP Millions |
| Satélite PokerStars (pacote) | ==**US$ 320**== | Main Event + hotel oficial | mesmo caminho |
| Feeders / freerolls | menos que isso | vaga no satélite | lobby do PokerStars |
| #19 Mega Satélite ao vivo | ==**R$ 600**== | ==50 vagas garantidas== no Main Event | WTC · 15/11 · 14h |

**Ganhou duas vagas? Agora vale.** Em 2026, quem ganhar mais de uma classificação para o mesmo torneio recebe a vaga extra como ==**ticket de US$ 1.000**== no PokerStars. Ele só pode ser usado ao vivo, no BSOP Millions, em torneio de buy-in mínimo de US$ 240 (o equivalente ao Millionaire Maker de R$ 1.200). Se o torneio custar menos, a diferença volta como T-Money — por exemplo, ==US$ 1.000 − US$ 240 = US$ 760==. Se custar mais, você completa com saldo próprio. Os tickets não se somam.

**Vaga de satélite tem regras próprias.** A vaga ganha em satélite ao vivo não vira dinheiro, mas pode ser transferida se você avisar a equipe de registros antes de o torneio começar. A vaga online não pode ser cancelada, transferida nem levada para outra etapa — e o PokerStars pode pedir que você jogue com um patch da marca.

Se você se classificar pelo PokerStars e já tiver cadastro, a vaga aparece no GameID: escolha o dia do Main Event e, no pagamento, toque em "Utilizar Vaga". Classificados em clubes parceiros também entram na lista; quem se classificou em clube ==r:não parceiro== paga a inscrição normalmente.

## Quais são os Torneios Gold do BSOP Millions 2026?

O BSOP Millions 2026 tem ==**oito Torneios Gold**==, com buy-ins de R$ 1.200 a R$ 500.000. Quem vence leva a joia exclusiva feita pelo joalheiro Pedro Yossef, e esses torneios dão mais pontos no ranking da temporada — que se decide justamente nesta etapa.

| Torneio Gold | Buy-in | Datas |
|---|---|---|
| Millionaire Maker | R$ 1.200 | 18 a 24/11 |
| Super Million | R$ 2.500 | 27 a 28/11 |
| BSOP Main Event | ==**R$ 5.000**== | 16 a 23/11 |
| Mini Championship | R$ 6.000 | 25 a 28/11 |
| Pot Limit Omaha Main Event | R$ 10.000 | 25 a 27/11 |
| 15K Grand High Roller | R$ 15.000 | 22 a 24/11 |
| BSOP Championship | ==r:R$ 25.000 na grade== (ver nota) | 21 a 28/11 |
| 500K Super High Roller Main Event | R$ 500.000 | 20 a 22/11 |

:::note
==r:O buy-in do BSOP Championship aparece com dois valores no site oficial.== A grade de torneios lista o #57 BSOP Championship a ==**R$ 25.000**==, mas duas notícias anteriores do BSOP falam em R$ 15.000. Antes de planejar o bankroll, confirme o valor no caixa ou no atendimento do BSOP.
:::

Millionaire Maker, Super Million e Pot Limit Omaha Main Event são ==**inéditos**== no BSOP Millions. Para os high rollers, a ==**Super High Roller Series**== volta de 14 a 23 de novembro com nove torneios entre R$ 50.000 e R$ 500.000.

## Quanto pagou o BSOP Millions 2025?

O Main Event do BSOP Millions 2025 teve ==**2.659 inscrições**== e distribuiu ==**R$ 10.643.800**==. O campeão foi o colombiano ==**Martin Romero**==, que levou R$ 1.221.805, segundo a galeria de campeões do BSOP. Em 2025, o torneio tinha R$ 10 milhões garantidos — e passou do garantido.

| Main Event 2025 | Valor |
|---|---|
| Inscrições | ==**2.659**== |
| Premiação distribuída | ==**R$ 10.643.800**== |
| Campeão | Martin Romero (Colômbia) — R$ 1.221.805 |
| 2º lugar | Getúlio Carvalho — R$ 803.240 |
| 9º lugar | Mateus Moraes — R$ 130.000 |

O maior prêmio do festival, porém, saiu na Super High Roller Series: o tcheco ==**Zdenek Zizka**== venceu o Main Event de R$ 500 mil, que reuniu 36 inscrições, e levou ==**R$ 6 milhões**== — segundo o BSOP, o maior prêmio já pago na história do poker latino-americano.

Repare que, na galeria oficial de 2025, os cinco primeiros aparecem com asterisco e o 4º colocado recebeu mais que o 2º e o 3º — sinal de que os valores do topo não seguem a tabela padrão. Para comparar edições, olhe o total distribuído e não só o prêmio do campeão.

## Dicas para quem vai jogar o BSOP Millions pela primeira vez

A melhor dica para a primeira vez no BSOP Millions é chegar com ==**cadastro feito no GameID**==, documento na mão e o Day 1 escolhido com folga — a fila do caixa é o primeiro adversário do festival. Depois disso, planeje comida, horário de saída e o pagamento de prêmios antes de sentar.

- **Nem sempre o prêmio sai na hora.** Se você for eliminado já dentro da premiação, um floor registra sua eliminação e você vai ao caixa. Parte ou o total pode ser pago por ==**transferência bancária em até 3 dias úteis**== após o fim do BSOP.
- **Imposto.** Para residentes no Brasil, o BSOP paga o prêmio ==**integral**== e entrega uma cartilha explicando como pagar e declarar o imposto devido. Ninguém pode receber o prêmio por você.
- **Intervalos.** Em geral há pausa a cada ==**2 horas**==; nos torneios longos, o jantar dura ==**75 minutos**== quando a estrutura prevê. As estruturas ficam em folhas no balcão de informações e, segundo o FAQ, em PDF "em breve".
- **Dá para assistir.** Há áreas do salão abertas ao público — só respeite as áreas exclusivas de jogadores e imprensa.
- **Cash game.** Além das mesas 24 horas, o BSOP promete o Mystery Cash, com sorteios às 20h30 e às 2h30 para quem estiver jogando, e prêmios de até R$ 1.000.000 nesta etapa.

Uma coisa que aprendi em festivais longos: quem vem de fora tende a jogar tudo no primeiro fim de semana e chega ao Main Event com o bankroll e a cabeça no fim. Com uma grade de 103 torneios, vale escolher antes os ==**três ou quatro eventos que você realmente quer jogar**== e tratar o resto como bônus. Se o seu plano é o Main Event, olhe também o ==g:mega satélite de R$ 600 do dia 15== — ele cai um dia antes do primeiro Day 1.

Para viagem, o BSOP tem agência oficial, a ==**Flush Tour**==, que monta passagem, traslado e hotel. Pacotes de satélite do PokerStars incluem café da manhã para o vencedor e valem para o jogador e um acompanhante.

:::readnext[Continue lendo]
/pt/blog/holdem-tournament | Guia de Torneio de Texas Hold'em | /images/holdem-tournament-hero.webp
/pt/blog/holdem-icm | ICM no poker: como a premiação muda suas decisões | /images/holdem-icm-hero.webp
:::

## FAQ — BSOP Millions 2026

**Q. Quando é o BSOP Millions 2026?**

A. De ==**13 a 28 de novembro de 2026**==, no Complexo WTC (WTC Sheraton), em São Paulo. O Main Event tem os dias iniciais de 16 a 20 de novembro e a mesa final em 23 de novembro.

**Q. Quanto custa o Main Event do BSOP Millions?**

A. O buy-in é de ==**R$ 5.000**==, com 40.000 fichas iniciais e 10 dias iniciais. Pelos satélites do PokerStars, a vaga sai por US$ 109; o mega satélite ao vivo do dia 15 de novembro custa R$ 600 e garante 50 vagas.

**Q. Qual a idade mínima para jogar o BSOP?**

A. ==**Mais de 18 anos**==, com documento oficial com foto na inscrição e na mesa. O Seniors é restrito a maiores de 50 anos e o Ladies, a mulheres.

**Q. Como funciona o GameID no BSOP?**

A. O GameID é o app usado pelo BSOP para inscrições e reentradas, com relógio e blinds de cada torneio. Você se cadastra, vincula a conta ao BSOP e paga com PIX ou saldo no sistema do BSOP — ou faz um pré-cadastro e paga em dinheiro no caixa.

**Q. Posso jogar dois Day 1 do Main Event?**

A. Pode, mas só depois de ser eliminado no primeiro. Registrar dois dias iniciais ao mesmo tempo dá desclassificação. Em 2026, o Main Event também tem 1 reentrada por flight.

**Q. Dá para pagar o BSOP com saldo do PokerStars?**

A. Sim, para torneios. O saldo do PokerStars ==r:não vale para o cash game==.

**Q. Precisa reservar vaga com antecedência?**

A. Não. O BSOP diz que o evento foi planejado para um grande número de jogadores e que não é preciso se preocupar com lotação. Quando o salão enche, você entra como alternate e aguarda uma vaga abrir.

---

## Resumo — o que fazer antes de novembro

- ==**Quer o Main Event gastando pouco**== → satélite do PokerStars de US$ 109 (terças, quintas e domingos) ou o mega satélite de R$ 600 em 15/11
- ==**Quer hotel incluso**== → pacote de US$ 320 no PokerStars
- ==**Primeira vez no BSOP**== → BSOP Primeira Vez ou Meia Milha, de R$ 500, já no primeiro fim de semana
- ==**Só pode ir no fim de semana**== → o último Day 1 do Main é ==**sexta, 20/11, às 20h**==
- ==**Antes de viajar**== → cadastro no GameID e documento com foto na mochila

O BSOP Millions entra na reta final da temporada, e com 2.659 inscrições no Main Event do ano passado, a bolha vai pesar. Vale chegar com a [bolha no poker](/pt/blog/holdem-bubble) e o [jogo de short stack](/pt/blog/holdem-short-stack) revisados. Para comparar com outras séries, veja a [agenda de torneios](/pt/tournaments).

---

## Fontes

- **Datas, local e grade completa (103 torneios, buy-ins, fichas e horários)** — [BSOP · BSOP Millions](https://bsop.com.br/bsop-millions/) (oficial; consultado em 2 de outubro de 2026)
- **Cash game 24 horas e destaques da etapa** — [BSOP · página inicial](https://bsop.com.br/) (oficial; consultado em 2 de outubro de 2026)
- **Regras de inscrição, GameID, pagamento, documentos, prêmios e estacionamento** — FAQ da página [BSOP Millions](https://bsop.com.br/bsop-millions/) (oficial; consultado em 2 de outubro de 2026)
- **Satélites do PokerStars (dias, US$ 109 e US$ 320) e "a última e maior etapa da temporada"** — [BSOP · Satélites](https://bsop.com.br/satelites) e [BSOP · Veja a agenda de satélites do PokerStars](https://bsop.com.br/veja-a-agenda-de-satelites-do-pokerstars-para-o-bsop-millions-nesta-semana/) (oficial)
- **Vaga extra em ticket de US$ 1.000** — [BSOP · Conquistou uma vaga nos satélites?](https://bsop.com.br/conquistou-uma-vaga-nos-satelites-do-bsop-millions-agora-voce-pode-ir-em-busca-da-segunda/) (oficial)
- **Torneios Gold** — [BSOP · Conheça os oito Torneios Gold do BSOP Millions 2026](https://bsop.com.br/novidades-e-grandes-premiacoes-conheca-os-oito-torneios-gold-do-bsop-millions-2026/) (oficial)
- **Grade, SHR Series e recorde de 4.162 inscrições** — [BSOP · Confira a grade de torneios](https://bsop.com.br/bsop-millions-2026-confira-a-grade-de-torneios-da-maior-edicao-da-historia-da-serie/) (oficial)
- **Horário das 12h** — [BSOP · Nova programação de horários](https://bsop.com.br/bsop-millions-2026-tera-nova-programacao-de-horarios-confira-os-torneios-que-comecam-as-12h/) (oficial)
- **1 reentrada por flight** — [Instagram oficial @bsopoficial, 24 de setembro de 2026](https://www.instagram.com/p/DdrficuCWw-/)
- **Main Event 2025 (2.659 inscrições, R$ 10.643.800, mesa final)** — [BSOP · Galeria de campeões · Main Event](https://bsop.com.br/galeria-de-campeoes/main-event-torneio-gold-3/) (oficial)
- **Garantido de R$ 10 milhões em 2025** — [BSOP · Buy-in de R$ 5 mil e R$ 10 milhões garantidos](https://bsop.com.br/buy-in-de-r-5-mil-e-r-10-milhoes-garantidos-o-maior-main-event-do-ano-na-america-latina/) (oficial, 2025)
- **SHR Series 2025 (Zdenek Zizka, R$ 6 milhões)** — [BSOP · Maior premiação da história do poker latino-americano](https://bsop.com.br/maior-premiacao-da-historia-do-poker-latino-americano-foi-entregue-no-ultimo-bsop-millions/) (oficial)

※ Datas, horários e valores podem mudar. A confirmação final é sempre na [página oficial do BSOP Millions](https://bsop.com.br/bsop-millions/).
`.trim(),
};

export default POST;
