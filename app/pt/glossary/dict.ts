// /pt/glossary — dicionário da ferramenta de glossário (회차 2 · 2026-10-05).
//
// 정의 출처: 글 축어 38개 (lib/posts-pt/holdem-glossary.ts 표 문안 · 링크 표기만 제거 · 일부는 1절로 자름)
//          · 번역 8개 = Board · Flop · Turn · River · Pré-flop · Offsuit · Posição · SPR
//            (글에 독립 항목이 없거나 «Flop / Turn / River»처럼 묶여 있어 EN desc를 번역 · 표기는 translation-terms-pt + 코퍼스 «pré-flop» 276회)
// SEO 헤드텀: DataForSEO google_ads search_volume (전세계 · 2026-10-05 · 1회, es와 같은 요청)
//   «termos do poker» 110 · «termos de poker» 50 · «glossario de poker» 20 · «dicionario de poker» 20 · «girias de poker» 20
//   → 앞머리 «Termos do poker», 뒤에 «glossário». 글 seoTitle(«Das nuts ao fish — o glossário de Texas Hold'em»)과 다른 문장.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_PT: GlossaryDict = {
  sortLocale: "pt-BR",
  grouping: "letter",
  seo: {
    title: "Termos do poker — glossário de Texas Hold'em de A a Z",
    description:
      "Glossário de poker com busca: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt e mais. Pesquise ou filtre os termos essenciais do Texas Hold'em.",
    keywords:
      "termos do poker, termos de poker, glossário de poker, dicionário de poker, gírias de poker, o que significa nuts no poker, outs poker, pot odds, 3-bet, c-bet, ICM poker, SPR poker",
    path: "/pt/glossary",
  },
  hero: {
    badge: "♠ {n} termos · busca de A a Z",
    h1: "Glossário de poker",
    leadBefore: "Todo termo de Texas Hold'em que você vai ouvir na mesa — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " e mais — explicado com clareza e precisão. Pesquise ou filtre por categoria.",
  },
  searchPlaceholder: "Busque um termo (ex.: nuts, pot odds, outs)...",
  allLabel: "Todos",
  cats: { Action: "Ações", Hand: "Mãos", Position: "Posição", Math: "Matemática", Board: "Board", Slang: "Gírias" },
  empty: { title: "Nenhum termo encontrado para «{q}».", hint: "Tente outra palavra ou categoria." },
  related: {
    ariaLabel: "Guias relacionados",
    heading: "Continue aprendendo",
    items: [
      { href: "/pt/blog/texas-holdem-rules-for-beginners", label: "As regras", desc: "Blinds, showdown, o básico" },
      { href: "/pt/blog/holdem-hand-rankings", label: "Ranking de mãos", desc: "As 10 mãos, em ordem" },
      { href: "/pt/blog/holdem-strategy", label: "Estratégia", desc: "Posição, pot odds, bluff" },
      { href: "/pt/hand-chart", label: "Mãos iniciais", desc: "Ranges de abertura por posição" },
      { href: "/pt/calculator", label: "Calculadora", desc: "Probabilidades, pot odds, ICM" },
    ],
  },
  terms: [
    { term: "3-bet", cat: "Action", desc: "O re-raise depois de um open (a terceira aposta, contando os blinds como a primeira).", aka: ["3-Bet", "three-bet", "re-raise"] },
    { term: "All-in", cat: "Action", desc: "Colocar todas as suas fichas; você só pode ganhar a parte do pote que cobriu.", aka: ["all in", "allin", "shovar"] },
    { term: "Ante", cat: "Action", desc: "Tradicionalmente, uma pequena aposta forçada de todo mundo pra alimentar o pote, separada dos blinds — hoje a maioria dos torneios usa o big blind ante, em que um só assento paga pela mesa." },
    { term: "Backdoor", cat: "Board", desc: "Um draw que precisa de duas cartas seguidas (turn e river)." },
    { term: "Bad beat", cat: "Slang", desc: "Perder como grande favorito pra um draw de sorte.", aka: ["Bad Beat"] },
    { term: "Bankroll", cat: "Slang", desc: "O dinheiro reservado pro poker no geral — não as fichas na mesa." },
    { term: "Blinds", cat: "Action", desc: "As apostas forçadas SB/BB que iniciam a ação — também o nome dos níveis de stake.", aka: ["blind", "small blind", "big blind", "SB", "BB"] },
    { term: "Bluff", cat: "Action", desc: "Um bluff aposta uma mão fraca pra fazer as melhores largarem.", aka: ["blefe", "blefar"] },
    { term: "Board", cat: "Board", desc: "As cartas comunitárias no meio da mesa. Um board molhado (wet) tem muitos draws e é perigoso; um board seco (dry) oferece poucos draws.", aka: ["cartas comunitárias", "mesa"] },
    { term: "Button (BTN)", cat: "Position", desc: "A posição do dealer; age por último no pós-flop — o melhor lugar da mesa.", aka: ["Button", "BTN", "botão", "dealer"] },
    { term: "Call", cat: "Action", desc: "Igualar a aposta atual pra continuar na mão (pagar).", aka: ["pagar", "igualar"] },
    { term: "Check", cat: "Action", desc: "Passar a vez sem apostar — só possível quando não falta nenhuma quantia para você igualar a aposta.", aka: ["dar check", "passar"] },
    { term: "Check-raise", cat: "Action", desc: "Dar check e depois aumentar depois que o oponente aposta — uma linha forte e enganosa (permitida nas salas modernas).", aka: ["Check-Raise", "checkraise"] },
    { term: "C-bet", cat: "Action", desc: "Uma «continuation bet» no flop feita por quem aumentou no pré-flop.", aka: ["Continuation Bet", "C-Bet", "cbet", "aposta de continuação"] },
    { term: "Cooler", cat: "Slang", desc: "Uma mão grande que perde pra uma maior sem nenhum erro." },
    { term: "Draw (projeto)", cat: "Hand", desc: "Uma mão que precisa melhorar — ex.: um flush draw (4 pro flush) ou um straight draw.", aka: ["Draw", "projeto", "flush draw", "straight draw"] },
    { term: "Equity", cat: "Math", desc: "Sua fatia percentual do pote agora, com base na sua chance de ganhar.", aka: ["equidade"] },
    { term: "Flop", cat: "Board", desc: "As três primeiras cartas comunitárias, distribuídas ao mesmo tempo; depois vem a segunda rodada de apostas." },
    { term: "Fold", cat: "Action", desc: "Largar a mão e qualquer direito ao pote.", aka: ["foldar", "largar", "desistir"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — uma estratégia equilibrada e inexplorável vinda dos solvers.", aka: ["Game Theory Optimal"] },
    { term: "Gutshot", cat: "Hand", desc: "Um straight draw por dentro precisando de um valor do meio (4 outs).", aka: ["gut shot"] },
    { term: "Range", cat: "Math", desc: "O conjunto completo de mãos que um jogador pode ter num spot; os pros pensam em ranges, não em mãos únicas.", aka: ["Hand Range", "range de mãos", "faixa de mãos"] },
    { term: "ICM", cat: "Math", desc: "O Independent Chip Model — converte fichas de torneio em equity de dinheiro real perto dos saltos de premiação.", aka: ["Independent Chip Model"] },
    { term: "Kicker", cat: "Hand", desc: "Uma carta de desempate entre mãos que de resto são iguais.", aka: ["carta de desempate"] },
    { term: "Limp", cat: "Action", desc: "Entrar no pré-flop só pagando o big blind em vez de aumentar — em geral uma jogada fraca e passiva.", aka: ["limpar", "limper"] },
    { term: "The nuts", cat: "Hand", desc: "A melhor mão possível dado o board atual (pode mudar nas streets seguintes).", aka: ["Nuts", "as nuts", "nut"] },
    { term: "Offsuit", cat: "Hand", desc: "Duas cartas de naipes diferentes (ex.: A♠K♦). Um pouco mais fraca que a versão do mesmo naipe da mesma mão, porque tem muito menos chance de formar flush.", aka: ["off suit", "AKo", "naipes diferentes"] },
    { term: "Outs", cat: "Math", desc: "As cartas que ainda podem transformar sua mão na vencedora.", aka: ["out"] },
    { term: "Overpair", cat: "Hand", desc: "Um par de bolso maior que qualquer carta no board.", aka: ["sobrepar"] },
    { term: "Posição", cat: "Position", desc: "Onde você age na ordem das apostas. Agir depois («in position») é uma grande vantagem, porque você vê os oponentes agirem antes de decidir.", aka: ["Position", "posicao", "in position", "out of position", "IP", "OOP"] },
    { term: "Pote (pot)", cat: "Board", desc: "O total de fichas em disputa (pote).", aka: ["Pot"] },
    { term: "Pot odds", cat: "Math", desc: "A razão entre o pote e o custo de pagar.", aka: ["Pot Odds", "odds do pote"] },
    { term: "Pré-flop", cat: "Board", desc: "A primeira rodada de apostas, antes de qualquer carta comunitária, quando cada jogador tem só as suas duas hole cards.", aka: ["Preflop", "pre-flop", "pre flop"] },
    { term: "Rake", cat: "Slang", desc: "A parte que a casa tira da maioria dos potes.", aka: ["taxa"] },
    { term: "Raise", cat: "Action", desc: "Aumentar a aposta atual, forçando os outros a igualar mais ou largar.", aka: ["aumentar", "aumento", "subir"] },
    { term: "River", cat: "Board", desc: "A quinta e última carta comunitária; depois vem a última rodada de apostas antes do showdown." },
    { term: "Semi-bluff", cat: "Action", desc: "Um bluff aposta uma mão fraca pra fazer as melhores largarem; um semi-bluff faz isso com um draw que ainda pode melhorar.", aka: ["Semi-Bluff", "semibluff", "semi-blefe"] },
    { term: "Set", cat: "Hand", desc: "Trinca usando um par de bolso + uma carta do board (bem disfarçada).", aka: ["trinca", "trincar"] },
    { term: "Showdown", cat: "Board", desc: "Revelar as mãos depois da última aposta pra decidir o vencedor." },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — stack efetivo ÷ pote. Um SPR baixo favorece se comprometer com mãos feitas fortes; um SPR alto recompensa draws e habilidade depois do flop.", aka: ["Stack-to-Pot Ratio"] },
    { term: "Stack", cat: "Slang", desc: "As fichas na frente de um jogador.", aka: ["fichas"] },
    { term: "Tilt", cat: "Slang", desc: "Jogo ruim movido pela emoção, geralmente depois de uma derrota.", aka: ["tiltar", "tiltado"] },
    { term: "Trips", cat: "Hand", desc: "Trinca usando uma hole card + um par no board (controle de kicker pior).", aka: ["trinca"] },
    { term: "Turn", cat: "Board", desc: "A quarta carta comunitária, distribuída depois do flop; depois vem a sua própria rodada de apostas." },
    { term: "Value bet", cat: "Action", desc: "Uma aposta com uma mão forte esperando ser paga por uma pior.", aka: ["Value Bet", "aposta de valor"] },
    { term: "The wheel", cat: "Hand", desc: "O straight A-2-3-4-5, o straight mais baixo (o ás vale baixo).", aka: ["Wheel", "roda"] },
  ],
};
