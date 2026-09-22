// `/pt/calculator` 사전 — `components/calculator/dict.ts`의 `CalcDict`를 pt-BR로 채운 것.
// ★2026-09-17 신설 → ★2026-09-17 (pt 회차) 재조준: EN 재저작(b337e436)·ja·zh·zh-hant·es(f839bb1e)와 동형 —
//   Equity 탭 · quickRef 6표 · 아웃츠 3스트리트 · ICM chip chop 열 · 새 ICM deal 예시 · 가이드 카드 9 · 관련 글 8 ·
//   딜러 렌즈 EN 정정 12항 동반. 근거 = docs/keyword-bank/pt-calculator.md(DFS 볼륨 Brazil 2076 · 자동완성 BR/PT 52시드 · SERP 3쿼리 · 상위 10페이지 구조).
// 공용 컴포넌트 `components/calculator/calculator-tool.tsx`가 이 객체 하나로 화면 전체를 그린다.
// 🔴 quickRef·icmGuide.deal의 수치는 EN 값 그대로(§13 언어 불변 · 정본 = scripts/calc-reference-tables.ts · scripts/calc-icm-example.ts).
//    표기만 브라질식(천단위 `.` · 소수 `,`) — `npm run check:calc-parity -- pt`가 소수점을 뒤집어 EN과 대조한다. 손으로 값을 고치지 마라.
// 용어 출처(우선순위 순): `docs/translation-terms-pt.md` → `lib/posts-pt/holdem-glossary.ts` →
//   `lib/posts-pt/{holdem-icm,holdem-outs,holdem-pot-odds,holdem-short-stack,holdem-bubble,holdem-equity,holdem-hand-rankings}.ts` 실제 표기
//   (2026-09-17 전수 grep 빈도): equity 519(«equidade» 0 — 자동완성·PAS에만 있어 hero.lead에 한 번 병기) · fold equity 64 ·
//   board 674(board pareado 26 ↔ mesa pareada 13 — «Mesa»는 6-max 테이블 라벨과 충돌하므로 Board) · regra do 2 e 4 19(«4 e 2» 0) ·
//   ICM deal 13(«deal por ICM» 0) · chip chop 12 · chip leader 12(«líder em fichas» 0) · bolha 131 · final table 24(mesa final 10) ·
//   stack efetivo 38 · dar limp / open-limp 33 · pagar um aumento · set mining 26 · pré-flop 272(preflop 16) · pote dividido 31 ·
//   empate 99 · odds implícitas 62(implied odds 49 · 글 제목도 «Odds implícitas») · flush draw 92(projeto de flush 32) · overcards 15(«sobrecartas» 0) ·
//   sequência 451 · wheel 24 · trinca 164 · azarão 8(«underdog» 0) · board seco 18 · combos 258 · payouts 10 · satélite 23 · vaga 63.
// 🔴 ICM 약어 오염(브라질 = 세금 ICMS + BMI = IMC): 자동완성 «calculadora icm» 10개 = ICMS 8 + IMC 1 · «acordo icm» 10개 = 전부 ICMS ·
//    «como calcular icm» = ICMS. → ICM은 늘 «de ICM»·«ICM do poker»·«ICM deal»로 앵커(코퍼스 앵커 «calculadora de ICM» 5곳) · «acordo»는 쓰지 않는다.
// 🔴 «regra do 4 e 2»는 의료(regra 4-2-1) 오염 → 코퍼스대로 «regra do 2 e 4».
// 판단 메모(09-17 pt 회차) —
//   ① 제목 앞머리 = «Calculadora de poker — odds, …»(SEO 렌즈가 초안 «Calculadora de odds de poker»를 머리어 정합으로 교체) — calculadora poker 390 · calculadora odds poker 260 · poker odds calculator(영문) 260 ·
//      calculadora de poker 170 · calculadora de odds poker 110을 한 구절에 싣는다(SERP «calculadora odds poker» 1위 gipsyteam.com.br 제목과 동형).
//      H1·CTA·브레드크럼은 코퍼스 앵커 «Calculadora de probabilidades»(`intl-blog-post-client.tsx` CALC_CTA_LABELS.pt · 볼륨 10~40)를 유지 —
//      SERP «calculadora poker» 1위 PokerNews BR이 «Calculadora de Probabilidades de Poker» 이름이다(브리프 §3-E·§3-F 분리 선례).
//   ② Equity 탭 라벨 = «Equity»(페이지명 «Calculadora de probabilidades»와 안 겹친다). 독자에게 «탭을 쓰라»는 문장은 탭 라벨로(브리프 §3-B).
//   ③ 인용부호 = « »(check:calc-parity E — 직선 " 금지 · pt 코퍼스는 "…"도 쓰지만 사전은 게이트 정본을 따른다).
//   ④ 방위어는 페이지 순서상 참인 «acima»(도구 → 예시 → 카드 → 표 → FAQ)만.
//   ⑤ 문체 = você(translation-terms-pt) · 명령형은 3인칭 형(«aumente», «folde», «dê shove»).
import type { CalcDict } from "@/components/calculator/dict";

export const CALC_DICT_PT: CalcDict = {
  numberLocale: "pt-BR",

  // 🔴 app/pt/calculator/page.tsx metadata는 여기서 파생한다(check:seo-sync). 접미 «| HoldemMaster»만 page에서.
  seo: {
    title: "Calculadora de poker — odds, equity, ICM e pot odds",
    description:
      "Calculadora de poker grátis: equity (equidade) mão contra mão, pot odds, outs, ranking de mãos, SPR, M, ICM deal e chip chop. 9 ferramentas, sem cadastro.",
    path: "/pt/calculator",
  },

  hero: {
    badges: ["Ferramenta grátis", "Sem cadastro"],
    h1: "Calculadora de probabilidades de poker",
    h1Sub: "Calculadora de odds com equity, ICM e pot odds",
    lead: "Coloque duas mãos e veja quem ganha (a equity, ou equidade, de cada uma) — depois confira as pot odds, os outs, os ICM deals, o SPR, o M de torneio e os ranges de push/fold. Nove calculadoras de poker grátis, com cálculo exato sempre que ele é rápido o bastante.",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot odds", "🃏 Ranking de mãos", "📊 Mão inicial", "📐 SPR", "🏆 M-ratio", "📈 ICM", "⚡ Push/fold"],
  },

  equity: {
    label: "Equity", sub: "Mão contra mão",
    hero: "Sua mão",
    opp: "Adversário {n}",
    random: "Mão aleatória",
    board: "Board",
    pickerHint: "Escolha um jogador ou o board e depois as cartas.",
    addPlayer: "+ Adicionar adversário", removePlayer: "− Remover adversário",
    needTwo: "Dê 2 cartas a cada mão (ou marque um adversário como mão aleatória).",
    boardCount: "Deixe o board vazio para o pré-flop, ou coloque 3 cartas (flop), 4 (turn) ou 5 (river).",
    th: { player: "Jogador", hand: "Mão", win: "Vitória", tie: "Empate", equity: "Equity" },
    exactNote: "Exato — todas as {n} combinações possíveis das cartas que faltam foram enumeradas.",
    mcNote: "Monte Carlo — {n} simulações aleatórias; o resultado varia cerca de ±0,3 ponto de um cálculo para outro.",
    winner: "{p} vence com {hand}",
    chop: "Pote dividido — {n} mãos empatam com {hand}",
    showdownNote: "Showdown — o board já está completo, então este é o resultado final.",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Odds do draw" },
    pot: { label: "Pot odds", sub: "Pagar ou foldar" },
    hand: { label: "Ranking de mãos", sub: "Escolha as cartas" },
    starting: { label: "Mão inicial", sub: "Força pré-flop" },
    spr: { label: "SPR", sub: "Stack / pote" },
    m: { label: "M de torneio", sub: "M-ratio" },
    icm: { label: "ICM", sub: "Equity de premiação" },
    pushfold: { label: "Push/fold", sub: "Tabela de Nash" },
  },

  workspace: {
    chooseCalculator: "Escolha uma calculadora",
    resetInputs: "Limpar valores",
    resetAria: "Limpar {label}",
    resetMessage: "Valores de {label} limpos.",
  },

  cardPicker: {
    clearAll: "Limpar tudo",
  },

  outs: {
    drawType: "Tipo de draw",
    presets: [
      { label: "Valor personalizado" },
      // 딜러 렌즈(EN): «Nut flush draw» 한정 제거 — 넛이든 아니든 outs는 9
      { label: "Flush draw", desc: "4 cartas do mesmo naipe → falta a 5ª (9 outs, seja ou não o nut flush)" },
      { label: "Sequência aberta (OESD)", desc: "ex.: 5-6-7-8, serve um 4 ou um 9" },
      { label: "Flush + gutshot (combo)", desc: "9 de flush + 3 de gutshot (sem contar a carta repetida)" },
      { label: "Gutshot (sequência interna)", desc: "ex.: 5-6-8-9, só serve um 7" },
      // 딜러 렌즈(EN): 오버카드는 메이드 핸드 상대로 크게 할인
      { label: "Duas overcards", desc: "2 cartas mais altas que qualquer carta do board × 3 outs cada — desconte bastante contra uma mão feita: parear uma overcard muitas vezes ainda perde" },
      { label: "Dois pares → full house", desc: "ex.: A-K num board A-K-x → sobram 2 ases + 2 reis" },
      { label: "Par → trinca", desc: "sobram 2 cartas desse valor" },
      { label: "Flush + OESD (monstro)", desc: "9 de flush + 8 de sequência (2 repetidas)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    // ★2026-09-17 3번째 스트리트(플롭 → 다음 1장) — 플롭에서 벳 하나를 마주할 때 쓰는 값
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Chance de acertar na próxima carta a partir do flop",
    outsCount: "Número de outs: {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Regra do 4",
    ruleOf2: "Regra do 2",
    chanceFlop: "Chance de completar até o river a partir do flop (as duas cartas — num all-in)",
    chanceTurn: "Chance de completar no river a partir do turn",
    exact: " (exato)",
    ruleMental: "Regra do {n} (conta de cabeça):",
    // 방위어 금지(브리프 §3-C) — «acima» → «o número grande»
    exactNote: "O número exibido em tamanho grande é o valor exato",
    verdict: { great: "Ótimo 🔥", good: "Bom ✅", fair: "Razoável ⚠️", poor: "Fraco ❌", veryPoor: "Muito fraco 💀" },
  },

  pot: {
    // 딜러 렌즈(EN): 팟에는 «지금 마주한 벳»이 포함된다
    potSize: "Tamanho do pote (incluindo a aposta que você enfrenta)",
    callAmount: "Valor do call",
    potOddsCaption: "Pot odds (equity mínima necessária)",
    // 🔴 «ou mais»는 경계(= EV 0)를 포함해 verdict.even과 어긋난다 → «acima disso»(브리프 §5 · es 동형)
    orHigher: "— acima disso, o call é lucrativo",
    equityLabel: "Equity da sua mão: {v}",
    sliderGutshot: "Gutshot 8,7%",
    // 딜러 렌즈(EN): 19% → 19,6%(9/46 · turn → river)
    sliderFlush: "Flush draw 19,6%",
    impliedToggle: "Odds implícitas {toggle}",
    close: "Fechar ▲",
    add: "Adicionar ▼",
    extraWinnings: "Ganho extra esperado (se acertar): {v}",
    none: "Nenhum",
    impliedCaption: "Odds implícitas (com o ganho extra)",
    impliedNote: "Equity mínima necessária, contando {n} a mais",
    needImplied: "odds implícitas de {n}%",
    needPot: "pot odds de {n}%",
    verdict: {
      call: { title: "Call (lucrativo)", body: "Sua equity de {eq}% > {need} → lucrativo no longo prazo" },
      even: { title: "Ponto de equilíbrio (EV 0)", body: "Sua equity de {eq}% = {need} → pagar não ganha nem perde. Decida por fatores fora das pot odds, como posição e tendências do adversário" },
      fold: { title: "Fold recomendado", body: "Sua equity de {eq}% < {need} → perde no longo prazo" },
    },
  },

  handEval: {
    pickerLabel: "Escolha as cartas (5–7)",
    emptyTitle: "Escolha 5 cartas ou mais para avaliar a mão",
    emptyHint: "Com 7 cartas, a melhor combinação de 5 é encontrada automaticamente",
    bestFrom: "Melhor mão com {n} cartas",
    // 족보 이름 = holdem-hand-rankings.ts tldr 축어
    rankNames: [
      "Carta Alta", "Par", "Dois Pares", "Trinca", "Sequência",
      "Flush", "Full House", "Quadra", "Straight Flush", "Royal Flush",
    ],
    resultNames: [
      "Carta Alta 🃏", "Par 1️⃣", "Dois Pares ✌️", "Trinca 3️⃣", "Sequência ➡️",
      "Flush 🌊", "Full House 🏠", "Quadra 💎", "Straight Flush 🌟", "Royal Flush 👑",
    ],
    axis: ["Carta Alta", "Par", "Flush", "Quadra", "Royal"],
  },

  starting: {
    pickerLabel: "Escolha suas 2 cartas fechadas",
    emptyPrompt: "Escolha suas 2 cartas fechadas",
    // 딜러 렌즈(EN): 미등재 핸드 = «약한 손»이 아니라 «코어 차트 밖»
    unknownDesc: "Fora da tabela básica de abertura",
    unknownAction: "Suited: se todos foldaram até você, abra qualquer mão suited do BTN; do CO fique com os reis suited, as duas cartas de 8 ou mais (Q8s, 10-8s) e os connectors até 54s. Offsuit: só do BTN — qualquer ás (A9o, A5o) ou duas cartas de 9 ou mais (K9o, 10-9o). O resto (J2o, 93o, 72o): folde",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — Forte", "🥉 Tier 3 — Jogável", "⚠️ Tier 4 — Marginal", "🚫 Tier 5 — Fraca"],
    recommendedAction: "Ação recomendada:",
    axis: ["Premium", "Forte", "Jogável", "Marginal", "Fraca"],
    summaryTitle: "Resumo por tier",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Sempre aumente" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Aumente da maioria das posições" },
      { hands: "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s K9s Q9s J9s", action: "Aumente de posição tardia" },
      { hands: "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s", action: "Jogue seletivo em posição tardia" },
      { hands: "mãos offsuit fracas (J2o, 93o, 72o)", action: "Geralmente folde" },
    ],
    // 딜러 렌즈(EN 12항): «considere pagar em EP» = 오픈 림프 권고로 읽힌다 → «aumente ou folde — não dê open-limp».
    //   EN 77/88 「call EP」와 87s·65s·54s «Call LP»·33/22는 «레이즈에 콜»로 명시해 옮겼다(브리프 §3-F·§5).
    //   ✅ 2026-09-20: EN 77·88·KQo가 정정돼 이제 EN이 정본이다(pt KQo는 이미 EN과 같은 형이었다).
    //   66·44 set mining은 «~15×» 조건. dar limp = 코퍼스 정본.
    hands: {
      AA: { desc: "A melhor mão. Aumente em qualquer spot", action: "Sempre aumente/reaumente (3-bet)" },
      KK: { desc: "Só fique de olho num ás no flop", action: "Sempre aumente/reaumente" },
      QQ: { desc: "Mais forte que JJ, mas não supervalorize", action: "Sempre aumente; cuidado com stacks profundos" },
      JJ: { desc: "Cuidado com overcards no flop", action: "Aumente de qualquer posição" },
      "1010": { desc: "Perde valor quando vêm overcards no flop", action: "Aumente de qualquer posição — não dê open-limp" },
      AKs: { desc: "A melhor mão de draw. Construa o pote", action: "Sempre aumente/reaumente" },
      AKo: { desc: "Mais fraca que AKs, mas ainda premium", action: "Sempre aumente; pode pagar um reaumento" },
      AQs: { desc: "Mão forte; vale mais em posição", action: "Aumente da maioria das posições" },
      AJs: { desc: "Ótima no BTN/CO, fraca do UTG", action: "Aumente de posição média/tardia; do UTG aumente ou folde — nunca dê limp" },
      A10s: { desc: "Um dos melhores ases suited", action: "Aumente em posição tardia; em posição inicial folde, a não ser que a mesa seja passiva (aí aumente)" },
      KQs: { desc: "Potencial de flush alto + sequência", action: "Aumente da maioria das posições" },
      KJs: { desc: "Mão de draw forte", action: "Aumente em posição tardia; em posição inicial aumente ou folde — nunca dê limp" },
      "99": { desc: "Par médio, cuidado com flops de overcards", action: "Aumente da maioria das posições; cuidado com stacks profundos" },
      "88": { desc: "Par na mão com bom potencial de set", action: "Aumente em posição tardia; em posição inicial pague um aumento e, se ninguém entrou, aumente ou folde — não dê open-limp" },
      AQo: { desc: "Offsuit mais fraca; a posição importa", action: "Aumente de posição média/tardia" },
      AJo: { desc: "Fraca em posição inicial, forte em posição tardia", action: "Aumente do CO/BTN, cuidado em posição inicial" },
      KQo: { desc: "O melhor conector offsuit", action: "Aumente em posição tardia; em posição inicial, aumente ou folde se ninguém entrou e geralmente folde diante de um aumento — não dê open-limp" },
      K10s: { desc: "Rei suited, forte em posição tardia", action: "Aumente em posição tardia, folde em posição inicial" },
      QJs: { desc: "Draws fortes dos dois lados", action: "Aumente em posição tardia; vale mais com stacks profundos" },
      J10s: { desc: "Um dos melhores suited connectors", action: "Aumente em posição tardia; pague um único aumento se tiver posição" },
      "109s": { desc: "Suited connector forte", action: "Se ninguém entrou, aumente de posição tardia; pague um único aumento com posição" },
      "77": { desc: "Mão de set mining, cuidado com overcards", action: "Aumente em posição tardia; em posição inicial pague um aumento e, se ninguém entrou, aumente ou folde — não dê open-limp" },
      A9s: { desc: "Ás suited com potencial de flush", action: "Aumente em posição tardia" },
      K9s: { desc: "Rei suited; mesmo ao formar um par de reis, você pode estar dominado", action: "Abra com um aumento do CO/BTN se todos antes de você foldaram; diante de um aumento, avalie a posição, o preço e os stacks efetivos" },
      Q9s: { desc: "Dama suited com potencial de sequência; cuidado com damas de kicker melhor", action: "Abra com um aumento do CO/BTN se todos antes de você foldaram; diante de um aumento, avalie a posição, o preço e os stacks efetivos" },
      J9s: { desc: "Suited one-gapper com potencial de sequência e flush", action: "Abra com um aumento do CO/BTN se todos antes de você foldaram; diante de um aumento, avalie a posição, o preço e os stacks efetivos" },
      "66": { desc: "Set mining; precisa de odds implícitas", action: "Pague um aumento se você e quem aumentou tiverem, cada um, pelo menos 15× o valor do call atrás; em posição tardia, se ninguém entrou, aumente" },
      "55": { desc: "Pouco valor sem acertar o set", action: "Se ninguém entrou, aumente de posição tardia; pague um único aumento só se os dois tiverem pelo menos 15× o valor do call atrás" },
      A8s: { desc: "Ás suited médio", action: "Jogue em posição tardia, folde em posição inicial" },
      A7s: { desc: "Ás suited médio", action: "Só em posição tardia" },
      A6s: { desc: "Ás suited médio", action: "Só em posição tardia" },
      A5s: { desc: "Wheel + bloqueador de ás; um dos blefes de 3-bet favoritos", action: "Só em posição tardia; as odds implícitas importam" },
      A4s: { desc: "Ás suited com draw de wheel", action: "Só em posição tardia" },
      A3s: { desc: "Carta de wheel + draw de nut flush, um degrau acima de A2s", action: "Só no BTN/SB" },
      A2s: { desc: "Wheel + nut flush, mas fraca", action: "Só no BTN" },
      KJo: { desc: "Risco de dominação; só em posição tardia", action: "Aumente do CO/BTN e folde diante de um reaumento" },
      QJo: { desc: "Conectividade moderada; precisa de posição", action: "Só em posição tardia" },
      "98s": { desc: "Suited connector forte", action: "Se ninguém entrou, aumente de posição tardia; pague um aumento com posição" },
      "87s": { desc: "Bom suited connector", action: "Se ninguém entrou, aumente de posição tardia; pague um aumento com posição" },
      "76s": { desc: "Suited connector", action: "Se ninguém entrou, aumente de posição tardia; pague um aumento só com posição e stacks profundos" },
      "44": { desc: "Quase nenhum valor sem acertar o set", action: "Se ninguém entrou, aumente de posição tardia; pague um único aumento só se os dois tiverem pelo menos 15× o valor do call atrás" },
      "33": { desc: "Precisa acertar o set; especulativa", action: "Se ninguém entrou, aumente de posição tardia; fora isso, só pagando um aumento em potes multiway com stacks profundos" },
      "22": { desc: "O menor par na mão", action: "Se ninguém entrou, aumente de posição tardia; fora isso, só pagando um aumento em potes multiway com stacks profundos" },
      K10o: { desc: "K-10 offsuit, fraca", action: "De vez em quando do BTN" },
      Q10o: { desc: "Offsuit de pouca conectividade", action: "Só no BTN" },
      J10o: { desc: "Offsuit razoável, mas vulnerável", action: "De vez em quando do BTN" },
      Q10s: { desc: "Broadway suited forte, joga bem em posição", action: "Aumente em posição tardia; folde em posição inicial" },
      A10o: { desc: "Ás offsuit marginal, fácil de ser dominado", action: "Só em posição tardia" },
      "65s": { desc: "Suited connector; quer potes multiway e odds implícitas", action: "Se ninguém entrou, aumente de posição tardia; pague um aumento só com posição e stacks profundos" },
      "54s": { desc: "Suited connector baixo; especulativo", action: "Se ninguém entrou, aumente de posição tardia; pague um aumento só com posição e em potes multiway baratos" },
    },
  },

  spr: {
    // 딜러 렌즈(EN): 실효 스택 = «두 스택 중 짧은 쪽»
    effectiveStack: "Stack efetivo (o menor dos dois)",
    potSize: "Tamanho atual do pote",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ pote",
    zones: {
      low: {
        label: "SPR baixo (comprometido)",
        // 딜러 렌즈(EN): 보드 텍스처 단서 — board pareado·3 do mesmo naipe·3 conectadas에서는 원페어는 원페어
        desc: "Boa parte do pote já está no meio. Com top pair top kicker ou melhor num board seco, pense em colocar o resto — nessa profundidade, foldar costuma ser o maior dos dois erros. Em boards pareados, com três cartas do mesmo naipe ou três conectadas, ou diante de uma ação que só um set ou uma sequência explicam, um par continua sendo um par.",
        actions: [["TPTK+", "Considere o all-in"], ["Draws", "Pot odds obrigatórias"], ["Mãos fracas", "Folde com cuidado"]],
      },
      mid: {
        label: "SPR médio (flexível)",
        desc: "É a zona para jogar mãos fortes como dois pares ou melhor. Proteger o stack passa a importar.",
        actions: [["Dois pares+", "Aposte por valor"], ["Um par", "Uma ou duas streets e depois controle o pote"], ["Draws", "Semiblefe se houver fold equity; se não, desista"]],
      },
      high: {
        label: "SPR alto (ficando deep)",
        desc: "Os stacks estão ficando profundos. Draws e mãos feitas fortes sobem de valor relativo.",
        actions: [["Set+", "Jogue forte"], ["Draws", "As odds implícitas sobem"], ["Um par/TPTK", "Siga com cautela"]],
      },
      deep: {
        label: "SPR muito alto (deep)",
        desc: "É um jogo de stacks profundos. Posição, potencial de draw e leitura do range do adversário pesam muito.",
        actions: [["Mãos nuts", "Pode apostar grande"], ["Draws", "Odds implícitas altíssimas"], ["Mãos feitas fracas", "Cuidado, vulneráveis a blefes"]],
      },
    },
    legend: ["Comprometido", "Flexível", "Ficando deep", "Deep"],
  },

  m: {
    inputs: { stack: "Seu stack", bb: "Big blind", sb: "Small blind", ante: "Ante" },
    players: "Jogadores na mesa: {v}",
    headsUp: "2 (heads-up)",
    orbitCaption: "Custo da órbita (blinds por volta)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    mCaption: "M-ratio (o M de Harrington)",
    zones: {
      // 딜러 렌즈(EN): 데드존 = 폴드 에퀴티 소멸 · «받는 패 중 쓸 만한 것»(프리미엄을 기다리라는 뜻이 아니다 · 브리프 §3-E) · 오픈 안 된 팟
      dead: { name: "💀 Zona morta", desc: "A fold equity já não existe — o all-in é a sua única jogada, então coloque tudo com a primeira mão jogável que vier antes de os blinds chegarem em você, de preferência num pote em que ninguém entrou.", action: "All-in já" },
      red: { name: "🔴 Zona vermelha", desc: "Você precisa dobrar logo. Jogue push/fold — dê shove com as mãos boas e folde o resto.", action: "Push/fold" },
      orange: { name: "🟠 Zona laranja", desc: "Seu stack está encolhendo. Feche o range em mãos fortes e procure spots de open-shove.", action: "Range fechado" },
      yellow: { name: "🟡 Zona amarela", desc: "A pressão começou. Você precisa acumular fichas ativamente — jogue agressivo quando aparecerem bons spots.", action: "Jogue agressivo" },
      green: { name: "🟢 Zona verde", desc: "Você tem um stack confortável. Use o repertório inteiro — faça o stack crescer com jogo de posição e blefes.", action: "Estratégia completa" },
    },
  },

  icm: {
    introStrong: "O ICM (Independent Chip Model)",
    // 딜러 렌즈(EN): «mais de uma posição paga» 조건 + call/fold는 «ganhar vs bustar vs foldar» 비교. 🔴 라틴 문자라 선행 공백 유지(EN 타입 주석)
    introRest: " converte stacks de torneio em dinheiro de premiação esperado segundo o ICM. Para decidir entre pagar e foldar, multiplique o seu valor após cada resultado possível (vitória, empate ou derrota) pela probabilidade real desse resultado e compare a soma com o valor após foldar. Na eliminação, conte o prêmio realmente recebido, não zero automaticamente.",
    numPlayers: "Número de jogadores",
    paidPlaces: "Posições pagas",
    stacksTitle: "Stacks dos jogadores",
    total: "total {n}",
    decStack: "Diminuir o stack do jogador {n}",
    stackInput: "Stack do jogador {n}",
    incStack: "Aumentar o stack do jogador {n}",
    prizesTitle: "Prêmios",
    decPrize: "Diminuir o prêmio do {n}º lugar",
    prizeInput: "Prêmio do {n}º lugar",
    incPrize: "Aumentar o prêmio do {n}º lugar",
    currencyNote: "Digite os prêmios em qualquer moeda.",
    resultTitle: "Resultado do ICM",
    // ★2026-09-17 chop 열(선택 키) = % de fichas × premiação restante · 라벨 = 코퍼스 «chip chop»(12)
    th: { player: "Jogador", chips: "Fichas", chipPct: "% de fichas", icmValue: "Valor de ICM", icmPct: "% ICM", diff: "Dif.", chop: "Chip chop" },
    playerCell: "{medal} J{n}",
    diffPlus: "+dif.",
    // 딜러 렌즈(EN): 가장 타이트해야 하는 것은 숏스택이 아니라 미들스택 · 블라인드에 죽을 숏은 예외
    diffPlusNote: "Sua parte da premiação pelo ICM é maior que sua fatia de fichas. O sinal sozinho não diz se você deve pagar ou foldar.",
    diffMinus: "−dif.",
    diffMinusNote: "Sua parte da premiação pelo ICM é menor que sua fatia de fichas. O sinal sozinho não diz se a agressão é lucrativa.",
    diffUnit: "pp",
    empty: "Use stacks e prêmios positivos, com os prêmios do maior para o menor; valores iguais são permitidos.",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "Sem ante",
    bbAnteOn: "BB ante ligado",
    table: "Mesa",
    headsUp: "Heads-up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Cenário",
    sbShove: "SB: shove ou fold",
    bbCall: "BB: pagar um shove",
    position: "Posição {hint}",
    firstInHint: "(first-in — todos foldaram até você)",
    effectiveStack: "Stack efetivo: {v}",
    captionHuPush: "Mãos com que o SB dá shove com {stack}bb",
    captionHuCall: "Mãos com que o BB paga um shove com {stack}bb",
    // 🔴 sem artigo antes de {pos} (brief §3-F — SB/BTN/UTG misturados)
    captionMw: "Shove first-in — posição {pos}, mesa {table}-max, {stack}bb",
    withAnte: " (com ante)",
    combosSuffix: " / {total} combos",
    legendPush: "Push (all-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Diagonal = pares · canto superior direito = suited · canto inferior esquerdo = offsuit",
      p1: "A grade está ordenada por ",
      strong2: "valor das cartas, não por força",
      p2: ", então é normal que células marcadas e não marcadas se alternem na mesma linha — AQo, KQo e QQ ficam lado a lado, mas não em ordem de força. A5s entrar enquanto A6s fica de fora também está certo: A5s pode formar a",
      strong3: "sequência wheel (A-2-3-4-5)",
      p3: ", e isso pesa mais que o kicker mais baixo.",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Equilíbrio de Nash, heads-up (SB vs BB)",
      p1: ": assume-se que o SB só dá shove ou folda. A opção de ante acrescenta 0,125bb por jogador (o equivalente a um big blind ante, ≈12,5%). Os ranges abrem conforme os stacks encurtam — e abaixo de ~3–4bb o BB paga corretamente com um range ",
      em: "mais largo",
      p2: " do que o que o SB usa para dar shove, por causa das pot odds.",
    },
    mwNote: {
      strong: "Tabela de shove first-in, mesa {table}-max",
      p1: ": todo mundo na sua frente foldou e você dá shove ou folda. É um equilíbrio no estilo Nash de ",
      strong2: "chip EV puro",
      p2: " — os ranges de call dos jogadores que ficam atrás são resolvidos ao mesmo tempo — com a aproximação padrão de que um pote pago se resolve heads-up contra o primeiro a pagar (potes com vários calls são ignorados). Os ranges abrem conforme sobram menos jogadores atrás de você (UTG → BTN → SB), conforme os stacks encurtam e com os antes ligados (0,125bb por jogador). Por ser chip EV puro, os ranges de 10bb das posições iniciais (UTG/MP) saem mais fechados do que as regras populares (os pares baixos foldam) — na prática, ajuste por ICM e pelos adversários.",
    },
    readMore: "Para os fundamentos do jogo de short stack, leia o nosso",
    shortStackLink: { slug: "holdem-short-stack", text: "guia de estratégia de short stack" },
    readMoreEnd: ".",
  },

  icmGuide: {
    bubble: {
      badge: "Guia de ICM",
      h2: "Como usar a calculadora de ICM — um exemplo de bolha em 3 minutos",
      intro: "Digamos que sobram quatro jogadores e três são pagos (a bolha). Os stacks são 60.000 / 40.000 / 30.000 / 20.000 e os prêmios, $500 / $300 / $200. Coloque isso na calculadora e você vê a fatia de fichas de cada jogador ao lado do valor real dele em premiação (ICM):",
      th: { player: "Jogador", chipPct: "% de fichas", icmPct: "% ICM", diff: "Dif." },
      rows: [
        { player: "🥇 Chip leader", chip: "40,0%", icm: "33,3%", diff: "-6,7 pts", up: false },
        { player: "🥈 2º", chip: "26,7%", icm: "27,2%", diff: "+0,6 pt", up: true },
        { player: "🥉 3º", chip: "20,0%", icm: "22,9%", diff: "+2,9 pts", up: true },
        { player: "4º (short stack)", chip: "13,3%", icm: "16,6%", diff: "+3,3 pts", up: true },
      ],
      keyPoint: {
        // 딜러 렌즈(EN): «evitar calls de all-in» → 자리를 고른다 · 블라인드에 먹히기 직전은 예외.
        //   조건절은 text 쪽에(브리프 §3-B · EN b3 조건절 위치 문제를 피한 zh·es 구조).
        text: "A tabela mostra que {b1}, por 6,7 pontos percentuais; isso não é um limite para pagar ou foldar. Os stacks médios costumam enfrentar o maior risk premium, então um líder que os cobre pode {b2} quando os ranges permitem. Os short stacks devem {b3}. A decisão depende de stacks, prêmios e adversários, não só do sinal da diferença.",
        b1: "o valor de ICM do chip leader (33,3%) fica abaixo da fatia de fichas dele (40%)",
        b2: "pressionar os stacks médios",
        b3: "escolher os calls com cuidado, com exceção dos stacks prestes a ser engolidos pelos blinds",
      },
    },
    deal: {
      // ★2026-09-17 재조준(EN 동형) — 옛 예시(50/30/20 · $1.500 · 618/485/397)는 lib/posts-pt/holdem-icm.ts L133~149
      //   «ICM deal vs chip chop»과 표까지 동일해 카니발이었다. 새 예시 = 4명 · 45/25/18/12 · $2.300(1.000/600/400/300) ·
      //   정본 scripts/calc-icm-example.ts. 🔴 수치는 EN 그대로(표기만 브라질식).
      //   H2 = 코퍼스 H2 «ICM deal vs chip chop: como dividir a premiação…»와 겹치지 않게 «calculadora + 값» 축(EN 「ICM chop calculator」).
      //   🔴 «acordo»는 자동완성이 ICMS(세금)로 덮인다 → «deal».
      badge: "Calculadora de ICM deal",
      h2: "Calculadora de ICM deal — quanto vale de verdade um deal na final table",
      intro: "Sobram quatro jogadores e eles estão conversando sobre um deal. Os stacks são 450.000 / 250.000 / 180.000 / 120.000 (45% / 25% / 18% / 12%) e restam $2.300 de premiação, pagos em $1.000 / $600 / $400 / $300. Coloque esses dados na calculadora de ICM acima e a coluna «Chip chop» mostra os dois números lado a lado:",
      th: { player: "Jogador", chop: "Chip chop", icm: "ICM deal", diff: "Dif." },
      rows: [
        { player: "🥇 Chip leader (45%)", chop: "$1.035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 2º (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 3º (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "4º (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        text: "Um chip chop puro divide pela fatia de fichas e {b1}; um ICM deal reflete a probabilidade de cada jogador terminar em cada posição e é {b2}. Aqui o menor stack leva $276 pelas fichas, mas $458 pelo ICM — {b3}. Calcule os dois números antes de negociar. O que um clube chama de chip chop muitas vezes é um «save and chop»: primeiro todo mundo garante o próximo prêmio a ser pago (aqui, os $300 do 4º lugar) e só o resto é dividido pelas fichas, o que fica perto do ICM e não da divisão pura desta coluna. E o ICM supõe que todos jogam igualmente bem e ignora quem vai pagar os próximos blinds, então conte com o stack grande negociando acima do número de ICM dele.",
        b1: "favorece o chip leader",
        b2: "mais justo com os short stacks",
        b3: "$182 a mais",
      },
      linkLead: "O modelo por trás desses números, com o bubble factor e as regras não escritas dos deals, está em",
      link: { slug: "holdem-icm", text: "O que é ICM no poker?" },
    },
  },

  // ★2026-09-17 빠른 참조 6표 — 🔴 모든 값 = scripts/calc-reference-tables.ts 출력(09-17 · EN과 동일 · 표기만 브라질식). 라벨·intro·note만 포르투갈어.
  //   H2 = «Calculadora de X» + 표 성격(EN 「X calculator reference」 동형) — 형제 글 H2(holdem-probability «Tabela de probabilidade do poker»·
  //   holdem-outs «Tabela de outs»·holdem-pot-odds «Tabela de pot odds»)와 겹치지 않게 «tabela de …» 단독 표현은 H2에 쓰지 않는다.
  quickRef: [
    {
      badge: "Referência rápida",
      h2: "Calculadora de equity: all-in pré-flop mão contra mão",
      intro: "Esta tabela de equidade pré-flop mostra a equity de duas mãos que vão all-in, na média de todas as combinações de naipes de cada confronto (calculada de antemão: os 1.712.304 boards possíveis de cada um). Uma combinação específica pode variar cerca de um ponto — coloque as cartas exatas na aba «Equity» acima.",
      th: ["Confronto", "Mão A", "Mão B", "Empate"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81,9%", "18,1%", "0,5%"],
        ["AA vs AKs", "87,9%", "12,1%", "1,3%"],
        ["AA vs 87s", "77,5%", "22,5%", "0,3%"],
        ["AA vs 72o", "88,2%", "11,8%", "0,4%"],
        ["KK vs AKs", "65,9%", "34,1%", "0,8%"],
        ["QQ vs AKo", "56,8%", "43,2%", "0,4%"],
        ["QQ vs AKs", "54,0%", "46,0%", "0,4%"],
        ["JJ vs TT", "82,0%", "18,0%", "0,4%"],
        ["TT vs A9o", "72,2%", "27,8%", "0,4%"],
        ["TT vs 87s", "80,3%", "19,7%", "0,5%"],
        ["22 vs AKo", "52,6%", "47,4%", "0,6%"],
        ["AKo vs AQo", "74,4%", "25,6%", "4,7%"],
        ["AKs vs QJs", "63,5%", "36,5%", "0,5%"],
        ["AKo vs JTs", "59,5%", "40,5%", "0,5%"],
      ],
      note: "A equity é a sua parte média do pote, contando os empates (potes divididos). Um par na mão contra duas overcards é o coin flip clássico; um par contra um par maior é azarão de cerca de 4,5 para 1. A tabela completa de probabilidades, street por street, está em",
      link: { slug: "holdem-probability", text: "Tabela de odds e probabilidade no poker" },
      linkTail: ".",
    },
    {
      badge: "Referência rápida",
      h2: "Equity de AA em potes multiway: de 1 a 8 adversários",
      intro: "Quantas vezes AA ganha quando todos vão all-in no pré-flop contra N mãos aleatórias (Monte Carlo, 8.000.000 de simulações por linha). Os dois primeiros adversários que pagam tiram cerca de 10 pontos cada dos ases; a partir daí, cada um tira menos.",
      th: ["Adversários", "Equity de AA"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85,2%"], ["2", "73,4%"], ["3", "63,8%"], ["4", "55,9%"],
        ["5", "49,2%"], ["6", "43,6%"], ["7", "38,7%"], ["8", "34,6%"],
      ],
      note: "Por isso os ases querem um pote heads-up: contra cinco mãos aleatórias, a melhor mão inicial do Hold'em já não é favorita para levar o pote (49,2%, e os outros cinco dividem o resto). Marque um adversário como «Mão aleatória» na aba «Equity» para testar qualquer mão do mesmo jeito (aceita até três adversários). Por que as mãos grandes perdem força em potes multiway, em",
      link: { slug: "holdem-equity", text: "Equity no poker explicada" },
      linkTail: ".",
    },
    {
      badge: "Referência rápida",
      h2: "Calculadora de outs: chance de acertar pelo número de outs",
      intro: "A chance de o seu draw completar: flop → river (faltam duas cartas), flop → turn (só a próxima carta) e turn → river (uma carta) — exata, ao lado da estimativa da regra do 2 e 4. Conte primeiro os seus outs e depois leia a linha.",
      th: ["Outs", "Draw típico", "Flop → river", "Flop → turn", "Turn → river", "Regra do 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4,3%", "2,1%", "2,2%", "4% · 2%"],
        ["2", "Par na mão → set", "8,4%", "4,3%", "4,3%", "8% · 4%"],
        ["3", "Uma overcard", "12,5%", "6,4%", "6,5%", "12% · 6%"],
        ["4", "Gutshot", "16,5%", "8,5%", "8,7%", "16% · 8%"],
        ["5", "Par → dois pares ou trinca", "20,4%", "10,6%", "10,9%", "20% · 10%"],
        ["6", "Duas overcards", "24,1%", "12,8%", "13,0%", "24% · 12%"],
        ["7", "–", "27,8%", "14,9%", "15,2%", "28% · 14%"],
        ["8", "Sequência aberta", "31,5%", "17,0%", "17,4%", "32% · 16%"],
        ["9", "Flush draw", "35,0%", "19,1%", "19,6%", "36% · 18%"],
        ["10", "Gutshot + duas overcards", "38,4%", "21,3%", "21,7%", "40% · 20%"],
        ["11", "Sequência aberta + uma overcard", "41,7%", "23,4%", "23,9%", "44% · 22%"],
        ["12", "Flush draw + gutshot", "45,0%", "25,5%", "26,1%", "48% · 24%"],
        ["13", "–", "48,1%", "27,7%", "28,3%", "52% · 26%"],
        ["14", "Sequência aberta + duas overcards", "51,2%", "29,8%", "30,4%", "56% · 28%"],
        ["15", "Flush draw + sequência aberta", "54,1%", "31,9%", "32,6%", "60% · 30%"],
        ["16", "–", "57,0%", "34,0%", "34,8%", "64% · 32%"],
        ["17", "–", "59,8%", "36,2%", "37,0%", "68% · 34%"],
        ["18", "–", "62,4%", "38,3%", "39,1%", "72% · 36%"],
        ["19", "–", "65,0%", "40,4%", "41,3%", "76% · 38%"],
        ["20", "–", "67,5%", "42,6%", "43,5%", "80% · 40%"],
      ],
      note: "O número de duas cartas só vale quando você vai ver as duas sem pagar de novo (um all-in). Se enfrenta uma aposta no flop, use a coluna flop → turn: 9 outs = 19,1%. As overcards são os outs menos confiáveis — contra uma mão feita, parear uma delas muitas vezes ainda perde, então desconte. Para não contar o mesmo out duas vezes, veja",
      link: { slug: "holdem-outs", text: "Como contar outs no poker" },
      linkTail: ".",
    },
    {
      badge: "Referência rápida",
      h2: "Calculadora de pot odds: equity mínima pelo tamanho da aposta",
      intro: "Diante de uma aposta deste tamanho, esta é a equity mínima com que um call fica no ponto de equilíbrio: call ÷ (pote depois da aposta + call). A tabela mostra as duas formas — como odds e como a equity que elas exigem; a calculadora mostra a forma de equity. Compare com as odds exatas do seu draw na tabela de outs acima.",
      th: ["Tamanho da aposta", "Odds (X : 1)", "Equity mínima"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ do pote", "5 : 1", "16,7%"],
        ["⅓ do pote", "4 : 1", "20,0%"],
        ["½ do pote", "3 : 1", "25,0%"],
        ["⅔ do pote", "2,5 : 1", "28,6%"],
        ["¾ do pote", "2,33 : 1", "30,0%"],
        ["Pote inteiro", "2 : 1", "33,3%"],
        ["1,5× o pote", "1,67 : 1", "37,5%"],
        ["2× o pote", "1,5 : 1", "40,0%"],
        ["3× o pote", "1,33 : 1", "42,9%"],
      ],
      note: "Um flush draw (35,0% com duas cartas por vir, 19,1% na próxima) só paga uma aposta do tamanho do pote no flop quando é all-in. Fora isso, a calculadora de odds implícitas — o botão da aba «Pot odds» — soma o que você espera ganhar depois, desde que o adversário tenha fichas atrás e uma mão que vá pagar; desconte bastante quando o seu draw não é para o nuts. O método de 10 segundos para qualquer spot está em",
      link: { slug: "holdem-pot-odds", text: "Como calcular pot odds no poker" },
      linkTail: ".",
    },
    {
      badge: "Referência rápida",
      h2: "Calculadora de SPR: quanta mão você precisa",
      intro: "O SPR é stack efetivo ÷ pote atual, e o stack efetivo é o menor dos dois — tudo o que qualquer um dos dois pode ganhar ou perder. Quanto mais baixo, mais desse stack já está comprometido e mais fraca pode ser a mão com que você coloca tudo; quanto mais alto, mais perto do nuts você precisa estar para um pote grande. Leia as zonas como um plano para o flop: num board molhado ou pareado, um par continua sendo um par.",
      th: ["SPR", "Zona", "Força da mão · ação"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Comprometido", "Top pair top kicker ou melhor num board seco: pense em colocar tudo — nessa profundidade, foldar costuma ser o maior dos dois erros"],
        ["4 ≤ SPR < 8", "Flexível", "Dois pares ou melhor por valor; um par aguenta uma ou duas streets e depois você controla o pote"],
        ["8 ≤ SPR < 15", "Ficando deep", "Set ou melhor para colocar o stack; os draws ganham odds implícitas"],
        ["SPR ≥ 15", "Deep", "Potes grandes só com mãos de nível nuts — as mãos feitas fracas viram alvo de blefe"],
      ],
      note: "A calculadora de SPR acima coloca qualquer stack e pote numa destas quatro zonas. Para os ranges por profundidade de stack, leia",
      link: { slug: "holdem-short-stack", text: "Como jogar short stack no poker" },
      linkTail: ".",
    },
    {
      badge: "Referência rápida",
      h2: "Calculadora de M-ratio: em que zona está o seu stack",
      intro: "O M é o seu stack ÷ o custo de uma órbita (small blind + big blind + todos os antes): quantas voltas você aguenta sem jogar uma mão. As zonas supõem uma mesa cheia, de nove ou dez jogadores; com menos, multiplique antes o M por (jogadores ÷ 10) — o «M efetivo» de Harrington —, então um M de 10 numa final table de seis se joga como um 6 (a aba «M de torneio» mostra o M bruto; essa conversão fica com você).",
      th: ["Zona", "M", "Estratégia"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Zona morta", "< 1", "A fold equity já não existe — coloque tudo com a primeira mão jogável antes de os blinds chegarem em você, de preferência se ninguém entrou"],
        ["🔴 Zona vermelha", "1–5", "Push/fold: shove com as mãos boas, fold com o resto, dobre logo"],
        ["🟠 Zona laranja", "6–9", "Feche o range em mãos fortes e procure o open-shove"],
        ["🟡 Zona amarela", "10–19", "A pressão começou — acumule fichas com agressividade nos bons spots"],
        ["🟢 Zona verde", "20+", "Stack confortável — estratégia completa, jogo de posição e blefes"],
      ],
      note: "Por que os stacks de torneio se medem em órbitas e blinds e não em fichas, em",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Torneio de poker ou cash game?" },
      linkTail: ".",
    },
  ],

  guide: {
    badge: "Ferramentas",
    h2: "Como usar as 9 calculadoras de poker",
    cards: [
      { icon: "🎲", title: "Calculadora de equity (mão contra mão)", body: "Coloque de 2 a 4 mãos e qualquer board para ver o % de vitória, o % de empate e a equity de cada uma. Com todas as mãos conhecidas, o flop e o turn são enumerados de forma exata; no pré-flop, ou com um adversário de mão aleatória, ela roda 60.000 simulações e avisa." },
      { icon: "🎯", title: "Calculadora de outs", body: "Calcula com precisão a chance de o seu draw completar depois do flop ou do turn. Você vê ao mesmo tempo o atalho da regra do 2 e 4 e o número exato." },
      // 딜러 렌즈(EN): «adversário deep» 조건 → «o que você espera ganhar nas streets seguintes»
      { icon: "💰", title: "Pot odds e odds implícitas", body: "Decida entre pagar e foldar com matemática; o botão de odds implícitas soma o dinheiro que você espera ganhar nas streets seguintes." },
      { icon: "🃏", title: "Ranking de mãos", body: "Escolha as cartas para ver que mão você tem no ranking. Coloque até 7 cartas e a calculadora encontra sozinha a melhor combinação de 5." },
      { icon: "📊", title: "Força da mão inicial", body: "Escolha as suas duas cartas fechadas para ver qual das 169 mãos iniciais você tem e qual é a ação recomendada por posição." },
      { icon: "📐", title: "SPR (Stack-to-Pot Ratio)", body: "A relação entre stack e pote diz quanta mão você precisa. Quanto menor o SPR, mais vale se comprometer com uma mão forte." },
      { icon: "🏆", title: "M de torneio", body: "O M de Harrington mede a pressão sobre o seu stack no torneio. A estratégia muda por completo entre as zonas verde, amarela, laranja, vermelha e morta." },
      { icon: "📈", title: "Calculadora de ICM", body: "O Independent Chip Model converte fichas de torneio em valor real de premiação, com uma coluna de chip chop ao lado — os números por trás das decisões de bolha e dos deals na final table." },
      { icon: "⚡", title: "Tabela push/fold de Nash", body: "Uma tabela 13×13 de Nash para heads-up, 6-max e 9-max: com que mãos dar open-shove e com quais pagar de 1 a 25bb. Indispensável nas fases finais de um torneio." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "Perguntas frequentes sobre a calculadora de poker e a de ICM",
    q: "P. {q}",
  },

  related: {
    badge: "Aprofunde",
    h2: "Guias para ler quando a conta fizer sentido",
    // ★2026-09-17 6 → 8(EN과 «개수» 동일 · holdem-icm · holdem-short-stack · holdem-implied-odds 편입 · holdem-tournament 제외).
    //   제목 = lib/posts-pt 실제 title의 단축형.
    links: [
      { slug: "holdem-icm", title: "O que é ICM no poker?", desc: "Chip EV vs EV de premiação, bubble factor e deals" },
      { slug: "holdem-equity", title: "Equity no poker explicada", desc: "Win %, fold equity e realização" },
      { slug: "holdem-pot-odds", title: "Como calcular pot odds", desc: "Transforme cada call ou fold em conta" },
      { slug: "holdem-outs", title: "Como contar outs", desc: "Outs por draw e a regra do 2 e 4" },
      { slug: "holdem-probability", title: "Tabela de odds e probabilidade", desc: "A tabela completa de odds por trás de cada mão" },
      { slug: "holdem-starting-hands-chart", title: "Tabela de mãos iniciais", desc: "Quais mãos jogar por posição" },
      { slug: "holdem-short-stack", title: "Como jogar short stack", desc: "Como usar uma tabela push/fold e os limites dela" },
      { slug: "holdem-implied-odds", title: "Odds implícitas no poker", desc: "Quando um preço ruim é um bom call" },
    ],
  },
};
