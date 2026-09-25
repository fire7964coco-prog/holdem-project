// FR calculator dictionary — every user-visible string of `components/calculator/calculator-tool.tsx`.
//
// ★2026-09-17 신설(10로케일 일괄 개설) → ★2026-09-18 «계산 기능 강조» 재조준 회차로 전면 개정.
//   구조·플레이스홀더·배열 길이는 `CALC_DICT_EN`과 1:1 · 수치는 EN 그대로(§13 언어 불변).
//   근거 정본 = `docs/keyword-bank/fr-calculator.md`(실측 09-18) · 브리프 `docs/harden-brief/calculator-landing-rewrite.md`.
//
// 09-18 회차가 뒤집은 두 가지 — 🔴 되돌리기 전에 뱅크 §3-A·§3-B를 읽어라:
//   ① 도구 명사 = «Calculateur»(«Calculatrice» 아님). 볼륨은 둘을 못 가른다(동의어군 390 · 시계열·CPC 동일).
//      가른 근거 셋 = 자동완성 재조준(«calculatrice poker» 확장 8개 중 4개가 «calculateur…») ·
//      전치사 «de»가 39배를 죽인다(«calculateur poker» 390 ↔ «calculateur de poker» 10) ·
//      SERP 프랑스어 도구 페이지 title 6/6이 «Calculateur»(«Calculatrice» 0건).
//   ② Equity 탭 = «Équité»(«Equity» 아님). 옛 주석은 «솔버 랜딩 관용을 따른다»였는데 실측이 반대였다 —
//      «équité poker» 110 : «equity poker» 50(동의어군 아님 · 시계열 다름) · «calcul équité poker» 70 : 10 ·
//      SERP #1 poktools «Calculateur équité…»(본문 équité 10회 : equity 1회) · #3 «Équité d'une main contre une main».
//      🪶 `/fr/solver`는 «equity»를 계속 쓴다 — 의도적으로 갈린 자리(`docs/locale-intentional-diffs.md`).
//      봉합 = hero.lead와 guide.cards[0].body에서 «équité (equity)» 병기(🔴 초안은 주석만 «hero»라 적고 실제로는
//      가이드 카드에만 있었다 — 교열 렌즈 09-18이 잡음).
//
// 🔴 fr 코퍼스는 규칙 6편뿐이다(`lib/posts-fr/`). EN quickRef 6링크·related 8슬러그가 **하나도 실존하지 않는다** →
//    `link`는 «생략»이 정답이고 related는 실존 6편 전수다. 없는 슬러그를 베끼면 /fr/blog/… 404다.
//    게이트 `npm run check:calc-parity -- fr`의 F항이 이 규율을 코드로 본다(셀프테스트 15/15).
//
// 조판(코퍼스 실측): % 앞 공백 19 : 0 · 천단위 공백(«1 300») · 소수 쉼표 · $ 유지 · guillemets « » · register = tu.
// 용어: tapis(=all-in · «tapis poker» 1 000 : «all in poker» 590 · 코퍼스 133회) · jetons · cote(단수 지배) ·
//   cotes du pot (pot odds) 병기(`lib/posts-fr/holdem-game-order.ts:309`) · «la règle du 2 et du 4»(경쟁 2사 축어 · 2가 먼저) ·
//   🔴 **Push or Fold**(영어 «or») — «push ou fold» 3변형 전부 null ↔ «push or fold» 70 · 자동완성 9/9 · SERP top10 전부.
//      PokerStars.fr만 «push ou fold»를 쓴다(자사 문체 · 뱅크 §3-D-1 = de 888poker «Quotenrechner»와 같은 유형).
//   🔴 «tapis ou fold»는 자동완성이 «tapis foldable»(접이식 매트)로 새므로 라벨·H2에 쓰지 않는다.
import type { CalcDict } from "@/components/calculator/dict";

export const CALC_DICT_FR: CalcDict = {
  numberLocale: "fr-FR",
  // ★2026-09-19 — 도구가 계산해서 찍는 퍼센트도 이 조판을 따른다(«81,9 %»). 그전까지 `toFixed(1)` + 하드코딩 «%»였고,
  //   그래서 도구가 «81.9%»를 찍는 바로 아래에서 우리 quickRef 표가 «81,9 %»로 찍혔다(브리프 §5 🟠🟠 · 이 회차에서 해소).
  //   🔴 공백을 쓰는 로케일은 fr 하나다 — 전 사전 실측에서 숫자 뒤 «%»는 de 186:7(7은 열 머리글)·pt 188·id 190이 전부 붙여 쓴다.
  //   문자는 사전 본문 195곳과 같은 반각 공백(게이트 `check:calc-parity`가 `[\s  ]`로 정규화한다).
  //   🔴 문자는 **고정공백(U+00A0)**이다 — 반각 공백으로 두면 390px에서 «23,1» / «%»로 두 줄로 꺾인다(팟오즈 캡처 실측).
  //      사전 본문 195곳은 반각 공백이지만 그쪽은 전부 nowrap 열 안이라 안 꺾인다(렌더 폭은 같다).
  percentGap: " ",

  // ★2026-09-18 재조준 — 🔴 app/fr/calculator/page.tsx metadata와 «같은 문자열»(check:seo-sync).
  //   머리어 «Calculateur poker» 390 + «équité» 110 + «cote» 110 + «ICM» 480(fr에서 ICM은 롱테일이 아니라 머리어다).
  //   영문 «poker odds calculator» 260은 자국어의 0.67배라 제목에 안 넣는다(de는 2.3배라 넣었다 — 로케일 상수가 아니다).
  seo: {
    title: "Calculateur poker — équité, cotes du pot et ICM",
    // 158자(EN 158 · es 155 · pt 154와 같은 대역). «probabilités» 880(소유자 0) · «push or fold» 70 ·
    // 🪶 «sans inscription»은 실제 차별점이다 — 경쟁 poktools의 ICM 결과표는 **로그인 뒤**에 있다(뱅크 §4-A).
    description: "Calculateur poker gratuit : équité main contre main, cotes du pot, outs, probabilités, SPR, valeur M, ICM et push or fold. 9 outils Hold'em, sans inscription.",
    path: "/fr/calculator",
  },

  hero: {
    badges: ["Outil gratuit", "Sans inscription"],
    h1: "Calculateur poker",
    h1Sub: "Équité, cotes du pot et ICM au même endroit",
    lead: "Saisis deux mains et vois qui gagne, avec l'équité (equity) de chacune — puis vérifie tes cotes du pot, tes outs, un deal ICM, le SPR, la valeur M et les ranges de push or fold. Neuf calculateurs Hold'em gratuits, avec le calcul exact sur chaque street où c'est assez rapide.",
    chips: ["🎲 Équité", "🎯 Outs", "💰 Cotes du pot", "🃏 Classement", "📊 Main de départ", "📐 SPR", "🏆 Valeur M", "📈 ICM", "⚡ Push or Fold"],
  },

  // ★2026-09-18 신설. 라벨 «Équité» = 뱅크 §3-B · sub는 tuto-poker(SERP #3) title 축어 «Équité d'une main contre une main».
  //   프리셋 라벨은 EN 그대로(핸드 코드 · 게이트 B가 축어 대조).
  equity: {
    label: "Équité", sub: "Main contre main",
    hero: "Ta main",
    opp: "Adversaire {n}",
    random: "Main aléatoire",
    board: "Board",
    pickerHint: "Choisis un siège ou le board, puis sélectionne ses cartes.",
    addPlayer: "+ Ajouter un adversaire", removePlayer: "− Retirer un adversaire",
    needTwo: "Donne 2 cartes à chaque main (ou marque un adversaire comme main aléatoire).",
    boardCount: "Laisse le board vide pour le préflop, ou donne-lui 3 (flop), 4 (turn) ou 5 (river) cartes.",
    th: { player: "Joueur", hand: "Main", win: "Victoire", tie: "Égalité", equity: "Équité" },
    exactNote: "Exact — les {n} déroulements possibles ont tous été énumérés.",
    mcNote: "Monte-Carlo — {n} déroulements aléatoires ; le résultat varie d'environ ±0,3 point d'un calcul à l'autre.",
    winner: "{p} gagne avec {hand}",
    chop: "Partage — {n} mains se partagent le pot avec {hand}",
    showdownNote: "Abattage — le board est complet, c'est donc le résultat final.",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Cote des tirages" },
    pot: { label: "Cotes du pot", sub: "Suivre / se coucher" },
    hand: { label: "Classement", sub: "Choisis tes cartes" },
    starting: { label: "Main de départ", sub: "Force à l'ouverture" },
    spr: { label: "SPR", sub: "Ratio tapis / pot" },
    m: { label: "Valeur M", sub: "M de tournoi" },
    icm: { label: "ICM", sub: "Équité en gains" },
    pushfold: { label: "Push or Fold", sub: "Tableau de Nash" },
  },

  workspace: {
    chooseCalculator: "Choisis un calculateur",
    resetInputs: "Réinitialiser",
    resetAria: "Réinitialiser les champs « {label} »",
    resetMessage: "Champs « {label} » réinitialisés.",
  },

  cardPicker: {
    clearAll: "Tout effacer",
  },

  outs: {
    drawType: "Type de tirage",
    presets: [
      { label: "Saisie libre" },
      // 🔴 EN 09-17 정정: 커플러 couleur는 max든 아니든 9 outs다(옛 «nut flush draw» 라벨은 오해를 낳았다).
      { label: "Tirage couleur", desc: "4 cartes de la même couleur → il te faut la 5e (9 outs, que ce soit la couleur max ou non)" },
      // 「quinte bilatérale (OESD)」 = 시장 축어(poker-builder.com 프리셋 버튼)
      { label: "Quinte bilatérale (OESD)", desc: "ex. 5-6-7-8, il te faut un 4 ou un 9" },
      { label: "Tirage couleur + quinte ventrale (combo)", desc: "9 outs couleur + 3 outs ventrale (doublons retirés)" },
      { label: "Quinte ventrale (gutshot)", desc: "ex. 5-6-8-9, il te faut exactement un 7" },
      // 🔴 EN 09-17 정정 + pt 네이티브 렌즈: overcard = «board의 어느 카드보다 높은» 카드이지 «board에 없는» 카드가 아니다.
      { label: "Deux overcards", desc: "2 hauteurs supérieures à toutes les cartes du board × 3 chacune — à dévaluer fortement face à une main faite : apparier une overcard perd souvent quand même" },
      { label: "Double paire → full", desc: "ex. A-K sur un board A-K-x → 2 as + 2 rois restants" },
      { label: "Paire → brelan", desc: "il reste 2 cartes de cette hauteur" },
      { label: "Tirage couleur + bilatérale (monstre)", desc: "9 outs couleur + 8 outs quinte (2 en double)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    // ★2026-09-17 세 번째 스트리트(플롭에서 다음 카드 한 장만) — 플롭에서 베팅 하나를 받았을 때 필요한 수치
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Chance de compléter sur la carte suivante depuis le flop",
    outsCount: "Nombre d'outs : {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Règle du 4",
    ruleOf2: "Règle du 2",
    chanceFlop: "Chance de compléter entre le flop et la river (les deux cartes à venir — un tapis)",
    chanceTurn: "Chance de compléter à la river depuis le turn",
    exact: " (exact)",
    ruleMental: "Règle du {n} (calcul mental) :",
    exactNote: "Le chiffre affiché en grand est la valeur exacte",
    verdict: { great: "Excellent 🔥", good: "Bon ✅", fair: "Moyen ⚠️", poor: "Faible ❌", veryPoor: "Très faible 💀" },
  },

  pot: {
    // 🔴 EN 09-17 정정(딜러 렌즈): «pot»이 «내가 받은 베팅을 포함한» 값임을 라벨이 말해야 한다
    potSize: "Taille du pot (mise adverse incluse)",
    callAmount: "Montant à suivre",
    potOddsCaption: "Cotes du pot (équité minimale requise)",
    // 🔴 EN 09-17 정정 + es 렌즈: «ou plus»면 정확히 같을 때(EV 0)와 어긋난다 → «au-dessus»
    orHigher: "— au-dessus de ce seuil, le call devient rentable",
    equityLabel: "Équité de ta main : {v}",
    sliderGutshot: "Ventrale 8,7 %",
    // 🔴 EN 09-17 정정: 19 % → 19,6 %(턴→리버 실제값)
    sliderFlush: "Couleur 19,6 %",
    impliedToggle: "Cotes implicites {toggle}",
    close: "Fermer ▲",
    add: "Ajouter ▼",
    extraWinnings: "Gains supplémentaires attendus (si tu touches) : {v}",
    none: "Aucun",
    impliedCaption: "Cotes implicites (gains supplémentaires inclus)",
    impliedNote: "Équité minimale requise, en comptant {n} de plus",
    needImplied: "les cotes implicites {n} %",
    needPot: "les cotes du pot {n} %",
    verdict: {
      call: { title: "Suivre (rentable)", body: "Ton équité {eq} % > {need} → rentable sur le long terme" },
      even: { title: "À l'équilibre (EV 0)", body: "Ton équité {eq} % = {need} → suivre ne gagne ni ne perd. Décide selon d'autres facteurs que les cotes du pot : la position, les tendances de l'adversaire" },
      fold: { title: "Se coucher (recommandé)", body: "Ton équité {eq} % < {need} → perdant sur le long terme" },
    },
  },

  handEval: {
    pickerLabel: "Choisis tes cartes (5 à 7)",
    emptyTitle: "Choisis au moins 5 cartes pour évaluer la main",
    emptyHint: "Avec 7 cartes, la meilleure combinaison de 5 cartes est trouvée automatiquement",
    bestFrom: "Meilleure main sur {n} cartes",
    rankNames: [
      "Carte haute", "Paire", "Double paire", "Brelan", "Quinte",
      "Couleur", "Full", "Carré", "Quinte flush", "Quinte flush royale",
    ],
    resultNames: [
      "Carte haute 🃏", "Paire 1️⃣", "Double paire ✌️", "Brelan 3️⃣", "Quinte ➡️",
      "Couleur 🌊", "Full 🏠", "Carré 💎", "Quinte flush 🌟", "Quinte flush royale 👑",
    ],
    axis: ["Carte haute", "Paire", "Couleur", "Carré", "Royale"],
  },

  starting: {
    pickerLabel: "Choisis tes 2 cartes fermées",
    emptyPrompt: "Choisis tes 2 cartes fermées",
    // 🔴 EN 09-17 정정: 옛 폴백 «Main très faible / Se coucher en général»은 **사실 오류**였다 —
    //   K9s·QTs·J9s처럼 표에 없을 뿐 약하지 않은 핸드가 전부 여기로 떨어진다(브리프 §3-I).
    unknownDesc: "Absente du tableau d'ouverture principal",
    unknownAction: "Assorties : si tout le monde s'est couché avant toi, ouvre n'importe quelle main assortie au BTN ; au CO, garde les rois assortis, les deux cartes de 8 ou plus (Q8s, 10-8s) et les connecteurs jusqu'à 54s. Dépareillées : BTN uniquement — n'importe quel as (A9o, A5o) ou deux cartes de 9 ou plus (K9o, 10-9o). Le reste (J2o, 93o, 72o) : se coucher",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — Forte", "🥉 Tier 3 — Jouable", "⚠️ Tier 4 — Marginale", "🚫 Tier 5 — Faible"],
    recommendedAction: "Action recommandée :",
    axis: ["Premium", "Forte", "Jouable", "Marginale", "Faible"],
    summaryTitle: "Résumé des tiers de mains",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Toujours relancer" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Relancer depuis la plupart des positions" },
      { hands: "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s K9s Q9s J9s", action: "Relancer en position tardive" },
      { hands: "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s", action: "Sélectif en LP" },
      { hands: "mains dépareillées faibles (J2o, 93o, 72o)", action: "Se coucher en général" },
    ],
    // 🔴 EN 09-17 딜러 렌즈가 **오픈 림프 권유를 전수 제거**했다. 옛 fr 사전은 13개 핸드에 «suivre en EP»가
    //    그대로 남아 있었다(브리프 §3-I) — «레이즈에 콜»인지 «오픈 림프»인지 모호한 자리는 전부 명시했다.
    //    셋마이닝 정량 기준(~15×)·first-in 레이즈도 EN 정본대로 되살렸다.
    hands: {
      AA: { desc: "La meilleure main. Relance dans tous les spots", action: "Toujours relancer / sur-relancer (3-bet)" },
      KK: { desc: "Le seul danger : un as au flop", action: "Toujours relancer / sur-relancer" },
      QQ: { desc: "Plus forte que JJ, mais ne la surestime pas", action: "Toujours relancer ; prudence en tapis profond" },
      JJ: { desc: "Attention aux overcards au flop", action: "Relancer depuis n'importe quelle position" },
      "1010": { desc: "Perd de la valeur quand des overcards tombent au flop", action: "Relancer depuis n'importe quelle position — jamais d'open-limp" },
      AKs: { desc: "La meilleure main à tirages. Fais grossir le pot", action: "Toujours relancer / sur-relancer" },
      AKo: { desc: "Moins forte qu'AKs mais toujours premium", action: "Toujours relancer ; peut suivre une sur-relance" },
      AQs: { desc: "Main forte ; vaut plus en position", action: "Relancer depuis la plupart des positions" },
      AJs: { desc: "Excellente au BTN/CO, faible depuis UTG", action: "Relancer en mid/late ; depuis UTG, relancer ou se coucher — jamais de limp" },
      A10s: { desc: "L'un des meilleurs as assortis", action: "Relancer en mid/late ; depuis UTG, relancer ou se coucher — jamais de limp" },
      KQs: { desc: "Potentiel couleur haute + quinte", action: "Relancer depuis la plupart des positions" },
      KJs: { desc: "Main à tirages solide", action: "Relancer en LP ; en EP, relancer ou se coucher — jamais de limp" },
      "99": { desc: "Paire moyenne, attention aux flops avec overcards", action: "Relancer depuis la plupart des positions ; prudence en tapis profond" },
      "88": { desc: "Paire servie avec un bon potentiel de brelan", action: "Relancer depuis la plupart des positions ; payer une relance — jamais d'open-limp" },
      AQo: { desc: "Dépareillée, plus faible ; la position compte", action: "Relancer en position mid/late" },
      AJo: { desc: "Faible en EP, forte en LP", action: "Relancer au CO/BTN, prudence en EP" },
      // 🔴 딜러 렌즈 09-18(高): 초안이 EP를 «personne n'est entré면 relancer»로만 적어 **폴드 선택지를 지웠다** —
      //    ✅ 2026-09-20: EN은 이제 «raise or fold when nobody has entered, and usually fold facing a raise», de도 동형이다.
      //    9-max UTG에서 KQo 오픈은 AK·AQ·KK·QQ에 도미네이트되고, 같은 파일 summary 3티어(«position tardive»)와도 모순이었다.
      KQo: { desc: "Le meilleur connecteur dépareillé", action: "Relancer en LP ; en EP, relancer ou se coucher si personne n'est entré, et se coucher face à une relance" },
      K10s: { desc: "Roi assorti, fort en LP", action: "Relancer en LP, se coucher en EP" },
      QJs: { desc: "Tirages solides dans les deux sens", action: "Relancer en LP, vaut plus en tapis profond" },
      J10s: { desc: "L'un des meilleurs connecteurs assortis", action: "Relancer en LP ; payer une seule relance quand tu as la position" },
      "109s": { desc: "Connecteur assorti solide", action: "Relancer si tu ouvres le coup depuis la LP ; payer une seule relance avec la position" },
      "77": { desc: "Main à chercher le brelan, attention aux overcards", action: "Relancer en LP ; en EP, payer une relance, et relancer ou se coucher si tu ouvres le coup — jamais d'open-limp" },
      A9s: { desc: "As assorti avec potentiel couleur", action: "Relancer en LP" },
      K9s: { desc: "Roi assorti ; une paire de rois peut être dominée", action: "Ouvre en relançant au CO/BTN si tout le monde s’est couché avant toi ; face à une relance, évalue la position, le prix et les tapis effectifs" },
      Q9s: { desc: "Dame assortie avec potentiel de quinte ; attention aux dames mieux accompagnées", action: "Ouvre en relançant au CO/BTN si tout le monde s’est couché avant toi ; face à une relance, évalue la position, le prix et les tapis effectifs" },
      J9s: { desc: "Main assortie à un trou, avec potentiel de quinte et de couleur", action: "Ouvre en relançant au CO/BTN si tout le monde s’est couché avant toi ; face à une relance, évalue la position, le prix et les tapis effectifs" },
      // 🔴 EN 09-17: «누구의» 스택인지 명시(pt 렌즈) — 양쪽 유효 스택이다
      "66": { desc: "Chercher le brelan — il faut les cotes implicites", action: "Ne payer une relance que si toi et le relanceur avez au moins ~15× le call derrière ; relancer en LP" },
      "55": { desc: "Peu de valeur sans brelan", action: "Relancer si tu ouvres le coup depuis la LP ; ne payer une seule relance en LP que si toi et le relanceur avez au moins ~15× le call derrière" },
      A8s: { desc: "As assorti moyen", action: "Jouer en LP, se coucher en EP" },
      A7s: { desc: "As assorti moyen", action: "Jouer en LP uniquement" },
      A6s: { desc: "As assorti moyen", action: "Jouer en LP uniquement" },
      A5s: { desc: "Roue + bloqueur à l'as ; un 3-bet bluff favori", action: "LP uniquement ; les cotes implicites comptent" },
      A4s: { desc: "As assorti avec tirage à la roue", action: "LP uniquement" },
      A3s: { desc: "Carte de roue + tirage couleur max, un cran au-dessus de A2s", action: "LP uniquement" },
      A2s: { desc: "Roue + couleur max, mais faible", action: "LP uniquement" },
      KJo: { desc: "Risque de domination ; LP uniquement", action: "Relancer au CO/BTN, se coucher face à une sur-relance" },
      QJo: { desc: "Connectivité moyenne ; il faut la position", action: "LP uniquement" },
      "98s": { desc: "Connecteur assorti solide", action: "Relancer si tu ouvres le coup depuis la LP ; payer une relance avec la position" },
      "87s": { desc: "Bon connecteur assorti", action: "Relancer si tu ouvres le coup depuis la LP ; payer une relance avec la position" },
      "76s": { desc: "Connecteur assorti", action: "Relancer si tu ouvres le coup depuis la LP ; ne payer une relance qu'avec la position et des tapis profonds" },
      // 🔴 딜러 렌즈 09-18(高): 초안은 «tu»만 적어 66(«toi et le relanceur»)과 갈렸다 — 셋마이닝 임플라이드의 기준은
      //    «유효 스택»(둘 중 작은 쪽)이다. 레이저가 3×뿐이면 셋을 쳐도 회수할 돈이 없어 그 콜은 전부 손실이다.
      "44": { desc: "Presque aucune valeur sans brelan", action: "Relancer si tu ouvres le coup depuis la LP ; ne payer une seule relance en LP que si toi et le relanceur avez au moins ~15× le call derrière" },
      "33": { desc: "Doit toucher le brelan ; spéculative", action: "Relancer si tu ouvres le coup depuis la LP ; sinon, pots multiway en tapis profonds uniquement" },
      "22": { desc: "La plus petite paire servie", action: "Relancer si tu ouvres le coup depuis la LP ; sinon, pots multiway en tapis profonds uniquement" },
      K10o: { desc: "K-10 dépareillé, faible", action: "Ouvre en relançant au CO/BTN si tout le monde s’est couché avant toi" },
      Q10o: { desc: "Dépareillée, peu connectée", action: "BTN uniquement" },
      J10o: { desc: "Dépareillée correcte mais vulnérable", action: "BTN uniquement" },
      Q10s: { desc: "Broadway assorti solide, se joue bien en position", action: "Relancer en LP ; se coucher en EP" },
      A10o: { desc: "As dépareillé marginal, souvent dominé", action: "LP uniquement" },
      "65s": { desc: "Connecteur assorti ; veut du multiway et des cotes implicites", action: "Relancer si tu ouvres le coup depuis la LP ; ne payer une relance qu'avec la position et des tapis profonds" },
      "54s": { desc: "Petit connecteur assorti ; spéculatif", action: "Relancer si tu ouvres le coup depuis la LP ; ne payer une relance qu'avec la position, dans des pots multiway pas chers" },
    },
  },

  spr: {
    // 🔴 EN 09-17 정정: «내 것»이 아니라 «둘 중 작은 쪽»이다
    effectiveStack: "Tapis effectif (le plus petit des deux tapis)",
    potSize: "Taille actuelle du pot",
    caption: "SPR (ratio tapis / pot)",
    stackDivPot: "tapis ÷ pot",
    zones: {
      low: {
        label: "SPR bas (engagé)",
        // 🔴 EN 09-17 마지막 문장이 옛 fr 사전에서 «통째로 누락»돼 있었다(브리프 §3-I) —
        //    그대로 두면 젖은 보드에서도 TPTK 스택오프를 권하는 D유형 조언이 된다.
        desc: "Une grosse part du pot est déjà au milieu. Avec top paire top kicker ou mieux sur un flop sec, prévois d'engager le reste — à cette profondeur, se coucher est souvent la plus grosse erreur. Sur un board pairé, à trois cartes de la même couleur ou à trois cartes qui se suivent, ou face à une action que seuls un brelan ou une quinte justifient, une paire reste une paire.",
        actions: [["TPTK+", "Envisager le tapis"], ["Tirages", "Cotes du pot obligatoires"], ["Mains faibles", "Se coucher avec prudence"]],
      },
      mid: {
        label: "SPR moyen (flexible)",
        desc: "C'est la zone où jouer les mains fortes, double paire ou mieux. Protéger ton tapis devient important.",
        // 🔴 EN 09-17 정정: «Au feeling»·«Peser le risque et le gain»은 계산기가 줄 수 있는 최악의 조언이었다(D유형 · 브리프 §3-I)
        actions: [["Double paire+", "Miser pour la valeur"], ["Une paire", "Une ou deux streets, puis contrôle du pot"], ["Tirages", "Semi-bluff avec de la fold equity ; abandonne quand tu n'en as pas"]],
      },
      high: {
        label: "SPR élevé (ça devient profond)",
        desc: "Les tapis deviennent profonds. Les tirages et les mains faites fortes gagnent en valeur relative.",
        actions: [["Brelan+", "Jouer fort"], ["Tirages", "Les cotes implicites montent"], ["Une paire / TPTK", "Avancer avec prudence"]],
      },
      deep: {
        label: "SPR très élevé (profond)",
        desc: "C'est une partie en tapis profonds. La position, le potentiel des tirages et la lecture des ranges adverses comptent énormément.",
        actions: [["Mains max (nuts)", "Peut miser gros"], ["Tirages", "Cotes implicites très élevées"], ["Mains faites faibles", "Prudence, vulnérables aux bluffs"]],
      },
    },
    legend: ["Engagé", "Flexible", "Ça devient profond", "Profond"],
  },

  m: {
    inputs: { stack: "Ton tapis", bb: "Grosse blinde", sb: "Petite blinde", ante: "Ante" },
    players: "Joueurs à table : {v}",
    headsUp: "2 (heads-up)",
    orbitCaption: "Coût d'un tour (blindes par orbite)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    // 🪶 «M de Harrington»은 자동완성이 재킷 브랜드·스파이더맨으로 새므로(뱅크 §2-A) 탭 이름엔 인명을 넣지 않는다.
    //    본문 괄호 병기만 유지 — 개념 이름으로는 정확하기 때문이다.
    mCaption: "Valeur M (le M de Harrington)",
    zones: {
      // 🔴 EN 09-17 정정: «최고의 패를 기다려라»로 읽히던 문장 → «받는 패 중 쓸 만한 것»으로(zh-hant 렌즈) + 오픈 스팟 선호
      dead: { name: "💀 Zone morte", desc: "Ta fold equity a disparu — le tapis est ton seul coup. Prends la meilleure main jouable qui se présente avant que les blindes t'atteignent, de préférence quand personne n'est encore entré.", action: "Tapis maintenant" },
      red: { name: "🔴 Zone rouge", desc: "Tu dois doubler vite. Joue en push or fold — fais tapis avec tes bonnes mains, couche le reste.", action: "Push or fold" },
      orange: { name: "🟠 Zone orange", desc: "Ton tapis fond. Resserre ta range aux mains fortes uniquement et cherche l'open-shove.", action: "Range serrée" },
      yellow: { name: "🟡 Zone jaune", desc: "La pression monte. Tu dois activement récupérer des jetons — joue agressif quand les bons spots se présentent.", action: "Jouer agressif" },
      green: { name: "🟢 Zone verte", desc: "Tu as un tapis confortable. Utilise toute la palette stratégique — fais grossir ton tapis avec la position et les bluffs.", action: "Stratégie complète" },
    },
  },

  icm: {
    introStrong: "L'ICM (Independent Chip Model)",
    // 🔴 EN 09-17 개정문 — 옛 문장은 «table finale et bulle에 쓰라»로 끝나 «어떻게»가 없었다.
    introRest: " convertit les tapis de tournoi en gains attendus selon l’ICM. Pour suivre ou se coucher, pondère ta valeur après chaque issue possible (victoire, partage ou défaite) par sa probabilité réelle, puis compare la somme à ta valeur après un fold. En cas d’élimination, compte le gain réellement reçu, pas automatiquement zéro.",
    numPlayers: "Nombre de joueurs",
    paidPlaces: "Places payées",
    stacksTitle: "Tapis des joueurs",
    total: "total {n}",
    decStack: "Diminuer le tapis du joueur {n}",
    stackInput: "Tapis du joueur {n}",
    incStack: "Augmenter le tapis du joueur {n}",
    prizesTitle: "Gains",
    decPrize: "Diminuer le gain de la place {n}",
    prizeInput: "Gain de la place {n}",
    incPrize: "Augmenter le gain de la place {n}",
    currencyNote: "Saisis les gains dans n'importe quelle devise.",
    resultTitle: "Résultat ICM",
    // 표 헤더 출처 = pokerstars.fr ICM 가이드(«Joueur» · «Tapis (Jetons)» · «% des Jetons» · «Valeur Réelle (ICM)»).
  // 🪶 축어 그대로 쓴 것은 «Joueur»뿐이고 나머지는 우리 열 폭에 맞춰 줄였다(교열 렌즈 09-18 정정).
    // ★2026-09-17 신설 열 = chop(칩 비율 × 남은 상금). «Chip chop»은 fr 포커 매체가 그대로 쓴다(fr.pokernews).
    th: { player: "Joueur", chips: "Jetons", chipPct: "% des jetons", icmValue: "Valeur ICM", icmPct: "% ICM", diff: "Écart", chop: "Chip chop" },
    playerCell: "{medal} J{n}",
    diffPlus: "+écart",
    // 🔴 EN 09-17 정정: «petit tapis 보호 구역»이라는 옛 문장은 틀렸다 — 리스크 프리미엄이 가장 높은 것은 «중간 스택»이고,
    //    블라인드에 먹힐 만큼 짧은 스택은 오히려 예외다.
    diffPlusNote: "Ta part des gains selon l’ICM dépasse ta part de jetons. Le signe seul ne dit pas si tu dois suivre ou te coucher.",
    diffMinus: "−écart",
    diffMinusNote: "Ta part des gains selon l’ICM est inférieure à ta part de jetons. Le signe seul ne dit pas si l’agression est rentable.",
    diffUnit: "pp",
    empty: "Saisis des tapis et des gains positifs, avec les gains du plus élevé au plus faible ; les montants égaux sont acceptés.",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "Sans ante",
    bbAnteOn: "BB ante ON",
    table: "Table",
    headsUp: "Heads-up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Scénario",
    // 🔴 «tapis ou fold»는 자동완성이 «tapis foldable»(접이식 매트)로 샌다 — 동사형으로 푼다
    sbShove: "SB : faire tapis ou se coucher",
    bbCall: "BB : payer un tapis",
    position: "Position {hint}",
    firstInHint: "(first-in — tout le monde s'est couché avant toi)",
    effectiveStack: "Tapis effectif : {v}",
    captionHuPush: "Mains avec lesquelles la SB fait tapis à {stack}bb",
    captionHuCall: "Mains avec lesquelles la BB paie un tapis à {stack}bb",
    // 🪶 es 렌즈 교훈: pos 값에 성이 섞이므로 관사를 붙이지 않는다(«depuis {pos}»)
    captionMw: "Tapis first-in depuis {pos} à une table {table}-max, {stack}bb",
    withAnte: " (avec ante)",
    combosSuffix: " / {total} combos",
    legendPush: "Push (tapis)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Diagonale = paires · en haut à droite = assorties · en bas à gauche = dépareillées",
      p1: "La grille est classée par ",
      strong2: "hauteur, pas par force",
      p2: ", donc voir des cases colorées et non colorées alterner sur une même ligne est normal — AQo, KQo et QQ sont côte à côte sans être dans l'ordre de force. Qu'A5s soit dedans alors qu'A6s est dehors est correct aussi : A5s peut compléter la",
      strong3: "roue (A-2-3-4-5)",
      p3: ", ce qui pèse plus lourd que le kicker inférieur.",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Équilibre de Nash, heads-up (SB contre BB)",
      p1: " : on suppose que la SB fait tapis ou se couche. Le réglage ante ajoute 0,125bb par joueur (l'équivalent d'un big blind ante, ≈12,5 %). Les ranges s'élargissent quand les tapis raccourcissent — et sous ~3-4bb, la BB paie correctement ",
      em: "plus large",
      p2: " que la SB ne pousse, à cause des cotes du pot.",
    },
    mwNote: {
      strong: "Tableau de tapis first-in {table}-max",
      p1: " : tout le monde s'est couché devant toi et tu fais tapis ou tu te couches. C'est un équilibre de type Nash en ",
      strong2: "pur EV jetons",
      p2: " — les ranges de call des joueurs derrière sont résolues simultanément — avec l'approximation standard qu'un tapis payé se joue en heads-up contre le premier caller (les pots à plusieurs callers sont ignorés). Les ranges s'élargissent quand il reste moins de joueurs derrière toi (UTG → BTN → SB), quand les tapis raccourcissent et avec les antes ON (0,125bb par joueur). Comme c'est du pur EV jetons, les ranges 10bb en position précoce (UTG/MP) ressortent plus serrées que les règles empiriques courantes (les petites paires se couchent) — en pratique, ajuste selon l'ICM et tes adversaires.",
    },
    // 🔴 fr 코퍼스에 holdem-short-stack이 없다 → 실존하는 tapis 규칙 글로 대체(게이트 F항이 실존을 본다)
    readMore: "Pour le fonctionnement du tapis et des side pots, lis notre",
    shortStackLink: { slug: "holdem-all-in-rules", text: "guide des règles du tapis (all-in)" },
    readMoreEnd: ".",
  },

  icmGuide: {
    bubble: {
      badge: "Guide ICM",
      h2: "Comment utiliser le calculateur ICM — un exemple de bulle en 3 minutes",
      intro: "Imaginons qu'il reste quatre joueurs et que trois soient payés (la bulle). Les tapis sont 60 000 / 40 000 / 30 000 / 20 000 et les gains $500 / $300 / $200. Saisis ça dans le calculateur et tu obtiens, pour chaque joueur, sa part de jetons face à sa valeur réelle en gains (ICM) :",
      th: { player: "Joueur", chipPct: "% des jetons", icmPct: "% ICM", diff: "Écart" },
      rows: [
        { player: "🥇 Chip leader", chip: "40,0 %", icm: "33,3 %", diff: "-6,7 pts", up: false },
        { player: "🥈 2e", chip: "26,7 %", icm: "27,2 %", diff: "+0,6 pt", up: true },
        { player: "🥉 3e", chip: "20,0 %", icm: "22,9 %", diff: "+2,9 pts", up: true },
        { player: "4e (petit tapis)", chip: "13,3 %", icm: "16,6 %", diff: "+3,3 pts", up: true },
      ],
      keyPoint: {
        // 🔴 EN 09-17 개정: b3의 «단, 블라인드에 먹히기 직전이면 얘기가 다르다» 조건절을 «text» 쪽으로 옮겼다
        //    (zh 2차 교열 렌즈 — 볼드 조각이 조건절로 끝나면 뒤의 목적절과 어긋나게 읽힌다 · 브리프 §3-B).
        text: "Le tableau montre que {b1}, de 6,7 points de pourcentage ; ce n’est pas un seuil pour suivre ou se coucher. Les tapis moyens subissent souvent la plus forte prime de risque : un leader qui les couvre peut {b2} si les ranges le permettent. Les petits tapis doivent {b3}. La décision dépend des tapis, des gains et des adversaires, pas du signe seul.",
        b1: "la valeur ICM du chip leader (33,3 %) est inférieure à sa part de jetons (40 %)",
        b2: "mettre la pression sur les tapis moyens",
        b3: "choisir leurs calls avec soin, sauf s’ils sont sur le point d’être absorbés par les blindes",
      },
    },
    deal: {
      // ★2026-09-17 EN 재조준 — 옛 예시(50/30/20 · 618/485/397)는 EN `holdem-icm` 본문 표와 동일해 카니발이었다.
      //   새 예시 = 4명 · 45/25/18/12 · $2 300(1 000/600/400/300) · 값 출처 `scripts/calc-icm-example.ts`.
      //   🔴 fr 코퍼스에 holdem-icm이 없어 `linkLead`/`link`는 «생략»이 정답이다(게이트 F항 · 뱅크 §0-A).
      badge: "Calculateur de chop ICM",
      h2: "Calculateur de chop ICM — ce que vaut vraiment un deal de table finale",
      intro: "Il reste quatre joueurs et ils discutent d'un deal. Les tapis sont 450 000 / 250 000 / 180 000 / 120 000 (45 % / 25 % / 18 % / 12 %) et il reste $2 300 de gains, payés $1 000 / $600 / $400 / $300. Saisis-les dans le calculateur ICM ci-dessus : sa colonne « Chip chop » met les deux chiffres côte à côte :",
      th: { player: "Joueur", chop: "Chip chop", icm: "Deal ICM", diff: "Écart" },
      rows: [
        { player: "🥇 Chip leader (45 %)", chop: "$1 035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 2e (25 %)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 3e (18 %)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "4e (12 %)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        // 🔴 EN 09-17 + pt 렌즈: «next payout» = «다음에 지급될(남은 것 중 가장 낮은) 상금»이지 «다음 상금 점프»가 아니다 → 값을 괄호로 못박았다
        text: "Un chip chop brut partage au prorata des jetons et {b1} ; un deal ICM reflète la probabilité de chaque joueur de finir à chaque place et est {b2}. Ici le plus petit tapis touche $276 au prorata des jetons mais $458 à l'ICM — {b3}. Calcule les deux avant d'ouvrir la discussion. Ce qu'une salle appelle un chip chop est souvent un save and chop — on paie d'abord à chacun le prochain gain à verser (ici les $300 de la 4e place) et on ne partage au prorata que le reste — ce qui tombe près de l'ICM, pas du partage brut de cette colonne. Et l'ICM suppose un niveau égal et ignore qui va poster les prochaines blindes : attends-toi à ce que le gros tapis négocie au-dessus de son chiffre ICM.",
        b1: "avantage le chip leader",
        b2: "plus juste pour les petits tapis",
        b3: "$182 de plus",
      },
    },
  },

  // ★2026-09-18 빠른 참조 6표 — 🔴 모든 값 = `scripts/calc-reference-tables.ts` 출력(09-17). 손으로 고치지 마라(§13).
  //   🔴 `link`/`linkTail`은 전 표에서 «생략»이다 — fr 코퍼스에 probability·equity·outs·pot-odds·short-stack·
  //      tournament-vs-cash-game 글이 하나도 없다(뱅크 §0-A). 없는 슬러그를 베끼면 404다.
  //   🪶 열 이름은 cours-et-fiches.com 축어를 따랐다(«Tirage type» · «Cote offerte») — 단 스트리트는 EN처럼
  //      화살표형을 유지한다. 프랑스어 관용 «% au turn / % à la river»는 «어디서 출발했는지»를 안 적어
  //      세 열을 나란히 놓으면 모호해진다(그 사이트는 두 열만 쓴다 · «% flop → river» 화살표형도 그 사이트 축어다).
  quickRef: [
    {
      badge: "Référence rapide",
      h2: "Référence du calculateur d'équité — confrontations à tapis préflop",
      intro: "L'équité quand deux mains font tapis préflop, moyennée sur toutes les combinaisons d'enseignes de la confrontation (précalcul hors ligne : les 1 712 304 boards de chaque ligne). Une combinaison précise peut s'écarter d'environ un point — saisis les cartes exactes dans l'onglet « Équité » ci-dessus.",
      th: ["Confrontation", "Main A", "Main B", "Égalité"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81,9 %", "18,1 %", "0,5 %"],
        ["AA vs AKs", "87,9 %", "12,1 %", "1,3 %"],
        ["AA vs 87s", "77,5 %", "22,5 %", "0,3 %"],
        ["AA vs 72o", "88,2 %", "11,8 %", "0,4 %"],
        ["KK vs AKs", "65,9 %", "34,1 %", "0,8 %"],
        ["QQ vs AKo", "56,8 %", "43,2 %", "0,4 %"],
        ["QQ vs AKs", "54,0 %", "46,0 %", "0,4 %"],
        ["JJ vs TT", "82,0 %", "18,0 %", "0,4 %"],
        ["TT vs A9o", "72,2 %", "27,8 %", "0,4 %"],
        ["TT vs 87s", "80,3 %", "19,7 %", "0,5 %"],
        ["22 vs AKo", "52,6 %", "47,4 %", "0,6 %"],
        ["AKo vs AQo", "74,4 %", "25,6 %", "4,7 %"],
        ["AKs vs QJs", "63,5 %", "36,5 %", "0,5 %"],
        ["AKo vs JTs", "59,5 %", "40,5 %", "0,5 %"],
      ],
      note: "L'équité au poker, c'est ta part moyenne du pot, égalités comprises. Une paire face à deux overcards, c'est la course classique ; une paire face à une paire plus haute est outsider à environ 4,5 contre 1.",
    },
    {
      badge: "Référence rapide",
      // 🔴 SEO 렌즈 09-18(高): 뱅크 §1이 «probabilité poker» **880**(소유자 0)을 «desc·H2가 받는다»로 확정했는데
      //   H2 11개 중 **0개**가 받고 있었다. 이 표가 곧 «이길 확률»이라 억지가 아니다 — 축어 근거는 poktools H2
      //   «Comment calculer sa probabilité de gagner durant la partie ?»(뱅크 §4-A 추출).
      h2: "Probabilité de gagner avec une paire d'as — selon le nombre d'adversaires",
      intro: "À quelle fréquence AA gagne — plus précisément son équité, égalités comprises — quand tout le monde est à tapis préflop face à N mains aléatoires (Monte-Carlo, 8 000 000 de déroulements par ligne). Les deux premiers callers coûtent aux as environ 10 points chacun ; ensuite chaque adversaire supplémentaire coûte moins.",
      th: ["Adversaires", "Équité de AA"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85,2 %"], ["2", "73,4 %"], ["3", "63,8 %"], ["4", "55,9 %"],
        ["5", "49,2 %"], ["6", "43,6 %"], ["7", "38,7 %"], ["8", "34,6 %"],
      ],
      note: "C'est pour ça que les as veulent un pot en heads-up : face à cinq mains aléatoires, la meilleure main de départ du Hold'em n'est plus favorite pour remporter le pot (49,2 %, les cinq autres se partageant le reste). Mets un adversaire sur « Main aléatoire » dans l'onglet « Équité » pour tester n'importe quelle main de la même façon (jusqu'à trois adversaires).",
    },
    {
      badge: "Référence rapide",
      h2: "Référence du calculateur d'outs — cotes des tirages selon le nombre d'outs",
      intro: "La probabilité que ton tirage rentre : flop → river (deux cartes à venir), flop → turn (la carte suivante seulement) et turn → river (une carte) — les valeurs exactes, à côté de l'estimation par la règle du 2 et du 4. Compte d'abord tes outs, puis lis la ligne.",
      th: ["Outs", "Tirage type", "Flop → river", "Flop → turn", "Turn → river", "Règle du 2 et du 4 (×4 · ×2)"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4,3 %", "2,1 %", "2,2 %", "4 % · 2 %"],
        ["2", "Paire servie → brelan", "8,4 %", "4,3 %", "4,3 %", "8 % · 4 %"],
        ["3", "Une overcard", "12,5 %", "6,4 %", "6,5 %", "12 % · 6 %"],
        ["4", "Quinte ventrale", "16,5 %", "8,5 %", "8,7 %", "16 % · 8 %"],
        ["5", "Paire → double paire ou brelan", "20,4 %", "10,6 %", "10,9 %", "20 % · 10 %"],
        ["6", "Deux overcards", "24,1 %", "12,8 %", "13,0 %", "24 % · 12 %"],
        ["7", "–", "27,8 %", "14,9 %", "15,2 %", "28 % · 14 %"],
        ["8", "Quinte bilatérale", "31,5 %", "17,0 %", "17,4 %", "32 % · 16 %"],
        ["9", "Tirage couleur", "35,0 %", "19,1 %", "19,6 %", "36 % · 18 %"],
        ["10", "Ventrale + deux overcards", "38,4 %", "21,3 %", "21,7 %", "40 % · 20 %"],
        ["11", "Bilatérale + une overcard", "41,7 %", "23,4 %", "23,9 %", "44 % · 22 %"],
        ["12", "Tirage couleur + ventrale", "45,0 %", "25,5 %", "26,1 %", "48 % · 24 %"],
        ["13", "–", "48,1 %", "27,7 %", "28,3 %", "52 % · 26 %"],
        ["14", "Bilatérale + deux overcards", "51,2 %", "29,8 %", "30,4 %", "56 % · 28 %"],
        ["15", "Tirage couleur + bilatérale", "54,1 %", "31,9 %", "32,6 %", "60 % · 30 %"],
        ["16", "–", "57,0 %", "34,0 %", "34,8 %", "64 % · 32 %"],
        ["17", "–", "59,8 %", "36,2 %", "37,0 %", "68 % · 34 %"],
        ["18", "–", "62,4 %", "38,3 %", "39,1 %", "72 % · 36 %"],
        ["19", "–", "65,0 %", "40,4 %", "41,3 %", "76 % · 38 %"],
        ["20", "–", "67,5 %", "42,6 %", "43,5 %", "80 % · 40 %"],
      ],
      note: "Le chiffre à deux cartes ne vaut que si tu vas voir les deux sans repayer (un tapis). Face à une mise au flop, prends la colonne flop → turn : 9 outs = 19,1 %. Les overcards sont les outs les moins fiables — face à une main faite, en apparier une perd souvent quand même, alors dévalue-les.",
    },
    {
      badge: "Référence rapide",
      h2: "Référence du calculateur de cotes du pot — l'équité qu'il te faut pour suivre",
      intro: "Face à une mise de cette taille dans le pot, voici l'équité minimale pour que suivre soit à l'équilibre : montant à suivre ÷ (pot après la mise + montant à suivre). C'est donné des deux façons — en cote offerte et en équité requise ; le calculateur affiche la forme en équité. Compare-la aux cotes exactes de ton tirage dans le tableau des outs ci-dessus.",
      th: ["Taille de la mise", "Cote offerte (X : 1)", "Équité minimale"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ du pot", "5 : 1", "16,7 %"],
        ["⅓ du pot", "4 : 1", "20,0 %"],
        ["½ du pot", "3 : 1", "25,0 %"],
        ["⅔ du pot", "2,5 : 1", "28,6 %"],
        ["¾ du pot", "2,33 : 1", "30,0 %"],
        ["Le pot", "2 : 1", "33,3 %"],
        ["1,5× le pot", "1,67 : 1", "37,5 %"],
        ["2× le pot", "1,5 : 1", "40,0 %"],
        ["3× le pot", "1,33 : 1", "42,9 %"],
      ],
      note: "Un tirage couleur (35,0 % avec deux cartes à venir, 19,1 % sur la carte suivante) ne paie une mise de la taille du pot au flop que si c'est un tapis. Sinon, le calculateur de cotes implicites — le bouton de l'onglet « Cotes du pot » — ajoute l'argent que tu comptes gagner plus tard, à condition que l'adversaire ait du tapis derrière et une main qui paiera ; dévalue-le fortement quand tu ne tires pas vers la main max.",
    },
    {
      badge: "Référence rapide",
      h2: "Référence du calculateur de SPR au poker — quelle force de main il te faut",
      intro: "Le SPR, c'est le tapis effectif ÷ le pot actuel, le tapis effectif étant le plus petit des deux — tout ce que l'un ou l'autre peut gagner ou perdre. Plus il est bas, plus une part de ce tapis est déjà engagée et plus tu peux t'engager avec une main faible ; plus il est haut, plus il faut approcher de la main max pour un gros pot. Lis les zones comme un plan de flop : sur un board dangereux ou pairé, une paire reste une paire.",
      th: ["SPR", "Zone", "Force de main · action"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Engagé", "Top paire top kicker ou mieux sur un flop sec : prévois de tout engager — à cette profondeur, se coucher est souvent la plus grosse erreur"],
        ["4 ≤ SPR < 8", "Flexible", "Double paire ou mieux pour la valeur ; une paire prend une ou deux streets, puis contrôle du pot"],
        ["8 ≤ SPR < 15", "Ça devient profond", "Brelan et mieux jouent pour les tapis ; les tirages gagnent des cotes implicites"],
        ["SPR ≥ 15", "Profond", "Les gros pots seulement avec des mains de classe max — les mains faites faibles sont des cibles à bluff"],
      ],
      note: "Le calculateur de SPR ci-dessus transforme n'importe quel tapis et n'importe quel pot en l'une de ces quatre zones.",
    },
    {
      badge: "Référence rapide",
      h2: "Calculateur de valeur M — les cinq zones de tournoi",
      intro: "Le M, c'est ton tapis ÷ le coût d'une orbite (petite blinde + grosse blinde + toutes les antes) : combien de tours tu peux survivre sans jouer une main. Les zones supposent une table pleine à neuf ou dix joueurs ; à table courte, multiplie d'abord le M par (joueurs ÷ 10) — le M effectif de Harrington — si bien qu'un M de 10 à une table finale à six joueurs se joue comme un 6 (l'onglet « Valeur M » ci-dessus affiche le M brut ; fais la conversion toi-même).",
      th: ["Zone", "M", "Stratégie"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Zone morte", "< 1", "Ta fold equity a disparu — fais tapis avec la meilleure main jouable qui se présente avant que les blindes t'atteignent, de préférence en premier entrant"],
        ["🔴 Zone rouge", "1–5", "Push or fold : tapis avec tes bonnes mains, couche le reste, double vite"],
        ["🟠 Zone orange", "6–9", "Resserre aux mains fortes et cherche l'open-shove"],
        ["🟡 Zone jaune", "10–19", "La pression est là — récupère des jetons agressivement dans les bons spots"],
        ["🟢 Zone verte", "20+", "Tapis confortable — stratégie complète, jeu en position et bluffs"],
      ],
      note: "C'est aussi pour ça qu'un tapis de tournoi se mesure en orbites et en blindes plutôt qu'en jetons.",
    },
  ],

  guide: {
    badge: "Outils",
    h2: "Comment utiliser les 9 calculateurs Hold'em",
    cards: [
      { icon: "🎲", title: "Calculateur d'équité (main contre main)", body: "Saisis 2 à 4 mains et n'importe quel board pour obtenir, pour chaque main, son pourcentage de victoire, d'égalité et son équité (equity). Quand toutes les mains sont connues, le flop et le turn sont énumérés exactement ; en préflop, ou face à un adversaire en main aléatoire, l'outil échantillonne 60 000 déroulements et le signale." },
      { icon: "🎯", title: "Calculateur d'outs", body: "Calcule précisément la chance que ton tirage rentre au flop ou au turn. Tu vois d'un coup le raccourci de la règle du 2 et du 4 et le chiffre exact." },
      { icon: "💰", title: "Cotes du pot et cotes implicites", body: "Décide de suivre ou de te coucher avec les maths ; le bouton des cotes implicites ajoute l'argent que tu comptes gagner sur les streets suivantes." },
      { icon: "🃏", title: "Évaluateur de main — le classement des mains", body: "Choisis des cartes pour connaître le rang de la main. Saisis jusqu'à 7 cartes et il trouve automatiquement la meilleure combinaison de 5 cartes." },
      { icon: "📊", title: "Force des mains de départ", body: "Choisis tes deux cartes fermées pour voir laquelle des 169 mains c'est, et l'action recommandée selon la position." },
      { icon: "📐", title: "SPR (ratio tapis / pot)", body: "Le ratio tapis / pot te dit de quelle force de main tu as besoin. Plus le SPR est bas, plus il est favorable de s'engager avec une main forte." },
      { icon: "🏆", title: "Valeur M de tournoi", body: "Le M de Harrington mesure la pression sur ton tapis de tournoi. Ta stratégie change du tout au tout entre les zones verte / jaune / orange / rouge / morte." },
      { icon: "📈", title: "Calculateur ICM", body: "L'Independent Chip Model convertit les jetons de tournoi en valeur réelle en gains, avec une colonne chip chop juste à côté — les chiffres derrière les décisions de bulle et les négociations de deal en table finale." },
      // 🔴 SEO 렌즈 09-18(中高): «tableau push or fold»(70 · 자동완성 9/9)의 연속 문자열을 «de Nash»가 끊고 있었다.
      //   탭 sub는 «Tableau de Nash» 그대로 둔다(«tableau nash push or fold» 자동완성도 살아 있다).
      { icon: "⚡", title: "Tableau push or fold (Nash)", body: "Un tableau de Nash 13×13 pour le heads-up, le 6-max et le 9-max : avec quelles mains faire tapis en premier et avec lesquelles payer un tapis, de 1 à 25bb. Incontournable en fin de tournoi." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "FAQ — calculateur ICM et calculateur Hold'em",
    q: "Q. {q}",
  },

  // 🔴 fr 코퍼스는 규칙 6편뿐이라 related = **전수 6**이다(EN 8과 개수가 다른 유일한 로케일).
  //    게이트 `check:calc-parity`의 F항이 «min(EN 8, 코퍼스 크기)»로 판정한다 — 개수를 억지로 8로 채우면 404가 난다.
  //    카드 desc는 각 글의 title/seoTitle 축어 범위 안에서만 썼다(창작 금지 · settled §3-A).
  related: {
    badge: "Pour aller plus loin",
    h2: "Les guides à lire une fois que les maths sont claires",
    links: [
      { slug: "texas-holdem-rules-for-beginners", title: "Règles du Texas Hold'em pour débutants", desc: "Jouer pas à pas : jetons, mains et première stratégie" },
      { slug: "holdem-blind-meaning", title: "Les blindes au poker", desc: "Petite et grosse blinde, expliquées simplement" },
      { slug: "holdem-betting-actions", title: "Les actions au Texas Hold'em", desc: "Checker, suivre, relancer, se coucher" },
      { slug: "holdem-all-in-rules", title: "Règles du tapis (all-in)", desc: "Side pots, relances et abattage" },
      { slug: "holdem-game-order", title: "L'ordre du jeu au Texas Hold'em", desc: "Quand miser, à qui de parler — des blindes à l'abattage" },
      { slug: "holdem-showdown-rules", title: "Règles de l'abattage", desc: "Qui montre en premier, jeter ses cartes et le slow roll" },
    ],
  },
};
