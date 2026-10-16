"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 포르투갈어(pt-BR)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 첫 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작.
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 독자 = 브라질(você체). 용어 출처: docs/translation-terms-pt.md → app/pt/calculator/dict.ts(족보 «Carta Alta»·«Dois Pares»·
 *   «Trinca»·«Sequência»·«Quadra» · «pot odds» · «foldar» · «overcards») → lib/posts-pt 코퍼스 빈도(10-13 grep):
 *   foldar 291 · pagar 298 · aumentar 167 · pote dividido 30 · pré-flop 313(preflop 17) · flush draw 92 · draw de sequência 12(projeto 8) ·
 *   top pair 114 · overpair 119 · blefe 147(bluff 25) · semi-blefe 4 · check-raise 63 · range de abertura 22 · pontos percentuais 25.
 * 숫자 = 브라질식(`fmtNum` pt-BR «1.000» · 산문 소수 콤마 «0,25») — de판과 같은 판단. 공용 UI 퍼센트 = decimalComma(«35,4%»).
 * 솔버 메뉴명 «Estudar flop» = 솔버 앱 flop-study-labels.ts pt.title 축어.
 * 헤드텀 실측(DFS Brazil · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md.
 */

const n = (x: number) => x.toLocaleString("pt-BR");
/** 문자열로 넘어오는 소수(gap·err·avgErr) — 표시만 콤마 */
const dec = (x: string) => x.replace(".", ",");

const PT_NAMES: HandNames = {
  categories: ["Carta Alta", "Par", "Dois Pares", "Trinca", "Sequência", "Flush", "Full House", "Quadra", "Straight Flush"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Draw de sequência",
};

const PT_UI: QuizUI = {
  names: PT_NAMES,
  streets: ["Pré-flop", "Flop", "Turn", "River"],
  hero: "Você",
  folded: "Foldou",
  raise: "Aumenta",
  call: "Paga",
  bet: "Aposta",
  check: "Check",
  allIn: "All-in",
  tableNote: "Mesa 6-max ou de 9 · escolha quantos veem o flop (2–6)",
  playersBtn: (k) => `${k} jogadores`,
  playersLabel: "Jogadores",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Estilo dos adversários",
  styleHint: "Estilo dos adversários — só muda as regras de ação a partir do flop; os ranges de pré-flop continuam os mesmos",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Agressivo" },
  loading: "Embaralhando e fazendo as contas…",

  myEquity: "Sua equity",
  vsOpponents: (k) => (k === 0 ? "não sobrou ninguém" : `contra ${k} adversário${k > 1 ? "s" : ""}`),
  basisSeat: "contra ranges por posição",
  basisRange: "contra as mãos que batem com as ações deles",
  roleOpen: "Abriu",
  roleDefend: "Defendeu",
  winShort: "Vence",
  tieShort: "Empate",
  loseShort: "Perde",
  revealedLabel: "👀 Contra as mãos à mostra",
  revealedNote: (gap) =>
    `O número de cima parte do princípio de que você não vê as cartas deles — por isso a diferença de ${dec(gap)} p.p. É o número de cima que você usaria para decidir de verdade.`,

  potOddsTitle: "Pot odds — a equity que um call precisa para não perder no longo prazo (break-even)",
  potLabel: "Pote",
  potBeforeLabel: "Pote (antes da aposta)",
  toCallLabel: "Para pagar",
  requiredLabel: "Equity necessária",
  noBet: "Ninguém apostou. Você vê a próxima carta de graça.",
  noBetAllIn: (river) =>
    river
      ? "Todo mundo que sobrou na mão já está all-in, então não há mais fichas para apostar. A mão vai direto para o showdown."
      : "Todo mundo que sobrou na mão já está all-in, então não há mais fichas para apostar. As cartas que faltam são distribuídas e a mão vai para o showdown.",
  verdictCall: "Pagar",
  verdictFold: "Foldar",
  impliedNote: "Mesmo assim, se você puder ganhar mais quando acertar (odds implícitas), pagar ainda pode ser o certo.",

  revealBtn: (next) => `Abrir o ${next} →`,
  newHandBtn: "Dar outra mão 🔄",
  showCards: "👀 Ver as cartas deles",
  hideCards: "🙈 Esconder as cartas deles",

  wonByFold: (pot) => `Todo mundo foldou — você leva o pote de ${n(pot)}`,
  splitLabel: (names) => `Pote dividido — empate entre ${names.join(" · ")}`,
  winLabel: (name, cat) => `${name} vence · ${cat}`,
  winLabelHero: (cat) => `Você vence · ${cat}`,

  reviewTitle: "📋 Revisão — onde você devia ter foldado?",
  reviewCols: ["Street", "Sua equity", "Necessária", "Veredito"],
  reviewNoMistake: "✅ Pagar foi o certo até o fim.",
  reviewMistake: (street) => `⚠️ No ${street.toLowerCase()} já era hora de foldar. Ali era o seu ponto de saída.`,
  reviewInvested: (invested, pot) => `Você colocou ${n(invested)} · pote final ${n(pot)}`,

  formulaTitle: "📐 De onde sai esse número",
  outsLabel: (k) => (k === 1 ? `${k} carta completa ou melhora sua mão` : `${k} cartas completam ou melhoram sua mão`),
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} para o flush` : "",
      o.straight > 0 ? `${o.straight} para a sequência` : "",
      o.set > 0 ? `${o.set} para set ou trinca` : "",
      o.twoPair > 0 ? `${o.twoPair} para dois pares` : "",
      o.over > 0 ? `${o.over} para parear uma overcard` : "",
      both > 0 ? `${both} servem para duas destas (contadas uma vez só)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Chance de sair uma destas cartas (regra do 2 e do 4)",
  winLabel2: "Sua equity no pote (simulada · empate conta como a sua parte do pote dividido)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Os dois medem coisas diferentes. O de cima é a chance de você ACERTAR; o de baixo é a sua parte do pote ao VENCER (empate conta como a parte que te cabe). Você pode acertar e ainda perder se um adversário melhorar mais, e pode errar e ainda vencer. O veredito usa o número de baixo.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Ainda é pré-flop, então o atalho «outs × 2/4» ainda não vale. A equity acima vem de jogar ${k} mãos contra as mãos com que cada adversário plausivelmente entraria no pote a partir da posição dele.`
      : `Você não tem nenhum dos outs que esta ferramenta conta — nenhuma carta completa flush ou sequência, nem sobe sua mão de categoria para set, dois pares ou um par ao parear uma overcard —, então o atalho «outs × 2/4» não vale aqui. A equity acima vem de jogar ${k} mãos contra todas as mãos que batem com as ações que você viu.`,
  foldWinNote: "Todos os adversários foldaram, então o pote é seu. Os 100% acima não são um número simulado — são o resultado desta mão.",
  riverNote: "É o river, então não há mais cartas para sair e o atalho «outs × 2/4» não vale. A equity acima compara sua mão final com todas as mãos que batem com as ações que você viu.",
  chartTitle: "📈 Equity street a street — todas as cartas abertas",
  resultTabs: ["📋 Revisão", "📈 Evolução", "🃏 Cálculo"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Veja este spot no solver GTO" : info.kind === "notReady" ? "Veja um spot parecido no solver GTO" : "Veja um spot heads-up no solver GTO",
  solverOpen: "Abrir «Estudar flop» no solver",
  solverNote: (info) => {
    const gto = "Mostra a estratégia no flop quando os dois jogadores jogam GTO (resultados pré-calculados · 6-max 100bb · só o flop), então os ranges, os tamanhos de aposta e as regras dos adversários não são os deste simulador.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} abre · ${info.caller} paga (pote single-raised no solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — o link abre as mesmas posições e o mesmo flop no «Estudar flop» do solver. ${gto}`
          : `${info.opener} abre · ${info.caller} paga — esta mão acabou antes do flop, então só o confronto de posições abre. Escolha as três cartas do flop no solver. ${gto}`;
      case "notReady":
        return `O confronto «${info.opener} abre · ${info.caller} paga» ainda não está pré-calculado no «Estudar flop» do solver. Escolha um confronto de posições parecido ou calcule você mesmo no solver.`;
      case "multiway":
        return `${info.players} jogadores viram este flop. Os resultados pré-calculados do solver cobrem só potes heads-up, então esta mão não abre do jeito que está — escolha no «Estudar flop» um confronto contra um único adversário.`;
      case "table9":
        return "Os resultados pré-calculados do solver são de mesas 6-max, então uma mão de mesa de 9 não abre do jeito que está — escolha no «Estudar flop» o confronto de posições mais próximo.";
    }
  },
  solverLang: "pt",
  fmtNum: n,
  decimalComma: true,
  chartRangeLegend: "O que você viu",
  chartNote: "As linhas contínuas são a equity de cada lugar com todas as mãos abertas; a tracejada é a equity que você viu na tela sem conhecer as cartas deles. A linha de quem foldou vai até a street anterior ao fold.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Qual é a sua equity?",
  quizGuessHint: "Marque seu palpite no controle deslizante",
  quizSubmit: "Conferir",
  quizCallSubmit: "Pagar → conferir",
  quizFoldSubmit: "Foldar → conferir",
  quizResult: (guess, err, points) => `Seu palpite ${guess}% · erro de ${dec(err)} p.p. · ${points} pts`,
  quizChoiceResult: (ok, verdict) => (ok ? `Decisão certa (${verdict})` : `Errou — o certo era ${verdict}`),
  quizNotCounted: "Não entra no seu histórico do quiz — você já tinha visto a equity ou as cartas dos adversários",
  quizStats: (s) => `${s.hands} mão${s.hands === 1 ? "" : "s"} · erro médio ${dec(s.avgErr)} p.p. · ${s.hits}/${s.decisions} acertos · ${n(s.points)} pts`,
  quizReset: "Zerar",
  quizResetConfirm: "Apagar o histórico do quiz salvo neste navegador? Não dá para desfazer.",
  quizInvite: "Entre na sua conta para guardar este histórico e vê-lo em qualquer celular ou PC.",
  quizInviteLink: "Entrar",
  quizGuessCol: "Palpite",
  quizChoiceCol: "Escolha",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Nesta mão: erro médio ${dec(avgErr)} p.p.${decisions > 0 ? ` · ${hits}/${decisions} decisões certas` : ""} · ${points} pts`,
  quizGuessLegend: "Seu palpite",
  customToggle: "✍️ Montar mão",
  customTitle: "Monte uma mão — repita uma que você jogou",
  customHint: "Toque num espaço e escolha uma carta abaixo. Os espaços vazios são sorteados, e os adversários continuam recebendo mãos dos ranges da posição deles.",
  customPos: "Sua posição",
  customRandom: "Aleatória",
  customHero: "Sua mão",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Dar esta mão →",
  customClear: "Limpar tudo",
  customClose: "Fechar",
  customOff: "Voltar para mãos aleatórias",
  customActive: "Sua mão montada · as próximas mãos mantêm estas cartas",
  customEdit: "Editar",
  shareBtn: "Copiar link desta mão",
  shareCopied: "Copiado. Quem abrir o link joga esta mão desde o pré-flop com as mesmas cartas e a mesma equity.",
  shareManual: "A cópia automática foi bloqueada. Copie o endereço abaixo.",
  sharedActive: "Mão compartilhada · mesmas cartas e mesma equity de quem enviou (não entra no seu histórico do quiz)",
  sharedInvalid: "Não deu para ler o link compartilhado, então esta é uma mão nova aleatória (o link pode estar cortado ou alterado)",
  rangeToggle: "Ver o range do adversário",
  rangeTitle: "Range do adversário — mãos que batem com a ação até agora",
  rangeCombos: (pre, cur, pct) => `Pré-flop ${pre} combos → agora ${cur} combos (restam ${pct}%)`,
  rangeLegend: ["Ainda no range (mais escuro = mais)", "Eliminada pela ação", "Nunca esteve no range", "Mão real", "Bloqueada pela sua mão ou pelo board"],
  rangeNote: "Começa pelo range de pré-flop da posição dele e, street a street, tira cada mão que teria agido de outro jeito pelas regras do adversário. A equity acima usa este mesmo range. Combos que usam uma carta da sua mão ou do board ficam de fora.",
  quizKinds: ["Chutar a equity + decidir", "Só decidir (pagar ou foldar?)"],
  decideTitle: "Pagar ou foldar?",
  decideHint: "Escolha pagar ou foldar sem ver as cartas deles. Mesmo se você foldar, a mão vai até o fim. Este modo não entra no seu histórico do quiz.",
  decideSummary: (hits, decisions) => `Nesta mão: ${hits}/${decisions} decisões certas pelas pot odds`,
  actualCol: "Cartas vistas",
  actualSummary: (hits, decisions) => `Certas se você soubesse as cartas deles: ${hits}/${decisions} — só como referência. Na mesa, o critério são as pot odds sem ver as cartas deles.`,

  ruleTitle: "O que este simulador assume",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Os adversários seguem as regras abaixo e mais nada.</b> Nenhum jogador de verdade
        joga assim — posição, adversário, profundidade de stack e imagem na mesa mudam tudo. Encare como o
        &ldquo;desconsidere o atrito&rdquo; de um problema de física.
      </p>
      <p className="mb-1">
        Estilo dos adversários agora: <b className="text-foreground">{PT_UI.styleNames[style]}</b> (a mesa inteira joga no mesmo estilo · troque no seletor acima)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Dois pares ou melhor → <b className="text-foreground">{style === "aggressive" ? "aumento de 150% do pote (overbet)" : "aumento do tamanho do pote"}</b></li>
        {style === "standard" && <li>Um par, ou um flush draw/draw de sequência → <b className="text-foreground">aposta de meio pote</b></li>}
        {style === "tight" && <>
          <li>Um par que seja top pair ou melhor feito com uma carta da mão (overpairs incluídos), ou um flush draw/draw de sequência → <b className="text-foreground">aposta de meio pote</b></li>
          <li>Qualquer par mais fraco (incluindo um par que está só no board) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>Um par, um flush draw/draw de sequência, ou uma carta da mão mais alta que todas as do board (uma overcard) → <b className="text-foreground">aposta de meio pote</b></li>}
        {style === "aggressive" && <>
          <li>Flush draw/draw de sequência → <b className="text-foreground">aumento (semi-blefe)</b></li>
          <li>Um par → <b className="text-foreground">aposta de meio pote</b></li>
          <li>Sem par e sem draw, mas com uma overcard → <b className="text-foreground">aumento (blefe)</b></li>
        </>}
        <li>Qualquer outra coisa → <b className="text-foreground">fold</b> (descarta sem mostrar, como no poker ao vivo)</li>
      </ul>
      <p className="mb-2">
        As regras são lidas de cima para baixo: vale a primeira linha que se encaixa. Draw é um padrão de flush ou sequência de quatro cartas no flop ou no turn que usa pelo menos uma carta da mão (no river não existe draw).{" "}
        {style === "aggressive" && "Todo aumento do estilo Agressivo, semi-blefes e blefes incluídos, é de 150% do pote. "}
        Quando alguém aumenta, todo mundo que segue na mão paga esse aumento, e uma aposta maior que o stack que
        sobrou fica limitada a um all-in. Depois de um all-in ninguém folda — o resto do board é distribuído e vai para o showdown. Não existe check-raise — cada adversário age uma vez por street pelas regras, e não há a etapa de dar check e depois responder de novo. Aqui você nunca aposta; você só paga até o river.
        Os ranges de pré-flop (abaixo) são os mesmos em qualquer estilo.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Sua equity é calculada como se você não visse as cartas deles.</b> A partir do
        flop, o range de cada adversário são as mãos do range de pré-flop da posição dele (abaixo) que teriam feito as ações que
        você viu pelas regras do estilo escolhido — contra adversários no estilo Normal, um aumento deixa só dois pares
        ou melhor; contra adversários no estilo Agressivo, draws e blefes com overcard também continuam. Os jogadores que foldam na tela
        também saem da conta.
      </p>
      <p className="mb-2">
        <b className="text-foreground">As mãos de pré-flop dos adversários saem de ranges por posição.</b> Dos
        jogadores no pote, quem age primeiro no pré-flop é tratado como quem abriu, e todos os outros como quem
        defendeu essa abertura com um call ou um 3-bet (range de abertura · range de defesa). Os ranges são ranges de
        consenso de cash 6-max 100bb conferidos em várias fontes públicas, com as mãos de fronteira misturadas a
        25/50/75%. Onde não existe tabela (HJ contra abertura de UTG · SB contra abertura de UTG, HJ ou CO) e do
        terceiro jogador em diante, entra a tabela de defesa mais próxima. Não há tabelas para mesa de 9, então na mesa de 9
        UTG, UTG+1, UTG+2 e LJ usam a tabela UTG de 6-max e cada um dos outros lugares usa a tabela 6-max de
        mesmo nome (uma posição inicial que defende a abertura de outra posição inicial, ou o HJ que a defende, usa a tabela CO contra UTG) — os três primeiros lugares de uma mesa de 9 saem mais abertos do que são na realidade. Só a sua mão é aleatória (a não ser que você a monte) — a ferramenta deixa
        você jogar qualquer mão até o river. Aqui um 3-bet não muda o tamanho do pote (simplificado).
      </p>
      <p className="mb-2">
        <b className="text-foreground">O veredito é só pot odds.</b> Odds implícitas não entram, e as
        tendências e blefes dos adversários só entram nos ranges até onde vão as regras do estilo escolhido. Os draws, principalmente, muitas vezes justificam um call mesmo quando as pot odds puras ficam
        um pouco abaixo.
      </p>
      <p>
        Todo mundo paga um ante de {ANTE} e começa com um stack de {n(STACK)}. Você nunca folda — essa é a ideia,
        para você ver o river e fazer a revisão. A equity é uma estimativa simulada com tamanho de amostra fixo:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} simulações</b> no pré-flop e{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simulações</b> a partir do flop (erro padrão de uns 0,25–0,35 pontos percentuais).
        Cada mão usa uma semente aleatória fixa, então a mesma mão mostra os mesmos números em qualquer aparelho. Os empates são divididos
        pelo número de jogadores que dividem o pote (metade para cada um num empate a dois).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Quando você mostra as cartas deles</b>, cada lugar recebe a sua equity com todas as mãos conhecidas. A partir
        do flop isso conta exatamente todas as cartas que faltam (só o pré-flop são {n(SAMPLES.known)} simulações),
        e nunca entra na equity nem no veredito de pagar/foldar da tela — numa mesa de verdade você não teria
        essa informação.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Com o Quiz ligado</b>, a equity e o veredito ficam escondidos até você responder. Em
        «Chutar a equity + decidir», você chuta a sua equity em cada street e, nas streets em que alguém aposta, também escolhe
        pagar ou foldar. Em «Só decidir (pagar ou foldar?)» não há chute: você só escolhe pagar ou foldar nas streets em que
        alguém aposta, e este modo não entra no seu histórico do quiz. A resposta é «Sua equity» acima (o
        número sem ver as cartas deles), e cada palpite vale <b className="text-foreground">100 − 4 × erro (p.p.)</b>,
        arredondado para um número inteiro e nunca abaixo de zero (zero se você errar por 25 p.p. ou mais). Escolher pagar/foldar conta como acerto quando bate com o veredito das pot odds. Seus
        totais ficam neste navegador e, se você estiver logado, também são salvos na sua conta para
        acompanhar você em outros aparelhos (as cartas e o board não são salvos).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ Montar mão</b> deixa você escolher sua posição, suas cartas e o board para repetir uma
        mão que você jogou de verdade. Os espaços vazios são sorteados. Você não pode escolher as cartas dos adversários — numa
        mesa de verdade você também não saberia —, então elas continuam saindo dos ranges por posição, e a equity na tela
        mantém a mesma premissa de «cartas desconhecidas». Mesmo com o board definido antes, a equity de cada street só usa
        as cartas distribuídas até ali. Como repetir a mesma mão deixaria você decorar as respostas, mãos montadas não
        entram no seu histórico do quiz.
      </p>
    </>
  ),
  footer: (
    <>
      Quer ver a conta?{" "}
      <a href="/pt/blog/holdem-pot-odds" className="text-primary underline">Como calcular pot odds →</a>
      {" · "}
      <a href="/pt/blog/holdem-position-play" className="text-primary underline">Por que a posição importa</a>
      {" · "}
      <a href="/pt/calculator" className="text-primary underline">Calculadora de poker</a>
    </>
  ),
};

export default function WinRateQuizClientPt() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Simulador de poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Jogue sem ver as cartas deles — e descubra onde você devia ter foldado</p>
      </div>
      <WinRateSimulator ui={PT_UI} />
    </div>
  );
}
