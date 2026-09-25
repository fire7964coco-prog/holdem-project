// Calculator UI dictionary — every user-visible string of the calculator tool.
//
// `components/calculator/calculator-tool.tsx` renders the whole tool from one of these objects,
// so each locale ships its own `CalcDict` (same shape, translated values) and reuses the exact
// same component. `CALC_DICT_EN` holds the English strings verbatim.
//
// Conventions
// - `{name}` placeholders are filled by `fmt()` / `fmtNodes()` (see calculator-tool.tsx).
//   Keep every placeholder of the English template in the translation (order may change).
// - Pure symbols, hand codes (AA, AKs), card ranks/suits, formulas and numbers stay in code.
//   Language-invariant tokens (SPR, ICM, BB, bb, UTG+1…) also stay in code unless they sit inside
//   a sentence — then the whole sentence is a dict template.
// - Arrays marked "aligned by index" must keep the English length and order (the code holds the
//   matching numbers/icons/colors at the same index).

export type CalcDict = {
  /** BCP-47 tag passed to Number#toLocaleString for every formatted number ("en-US"). */
  numberLocale: string;

  /**
   * ★2026-09-19 — Gap printed between a number and "%" by the tool's `pf()` helper.
   * Typography is measured per corpus, not derived from `numberLocale`: French writes «81,9 %»
   * (fr dict corpus 19 : 0) while German writes «81,9%» even though ICU would insert a space for
   * de-DE. Every other locale ships "" (de·pt·id 186 : 0 digit-then-% in their own dicts).
   * Omit for no gap.
   */
  percentGap?: string;

  /** <SEO> props (client-side metadata sync — must equal the server metadata of the page). */
  seo: {
    /** Without the "| Brand" suffix — seo.tsx appends it. */
    title: string;
    description: string;
    /** Locale-prefixed path, e.g. "/en/calculator". */
    path: string;
  };

  /** Hero block at the top of the page. */
  hero: {
    /** Two pill badges. */
    badges: [string, string];
    /** H1 first line. */
    h1: string;
    /** H1 second (gold gradient) line. */
    h1Sub: string;
    lead: string;
    /** 9 feature chips (emoji + label) — equity first, then the 8 tabs in order (locales without dict.equity ship 8). */
    chips: string[];
  };

  /** Tab strip (label + subtitle per tool). */
  tabs: {
    outs: { label: string; sub: string };
    pot: { label: string; sub: string };
    hand: { label: string; sub: string };
    starting: { label: string; sub: string };
    spr: { label: string; sub: string };
    m: { label: string; sub: string };
    icm: { label: string; sub: string };
    pushfold: { label: string; sub: string };
  };

  /** Strings owned by <CalculatorWorkspace> (tablist aria-label, reset button, live region). */
  workspace: {
    chooseCalculator: string;
    resetInputs: string;
    /** "Reset {label}" */
    resetAria: string;
    /** "{label} inputs reset." */
    resetMessage: string;
  };

  cardPicker: {
    clearAll: string;
  };

  /** 1. Outs calculator. */
  outs: {
    drawType: string;
    /** 9 presets, aligned by index with DRAW_PRESETS (outs counts live in code). `desc` omitted for the custom row. */
    presets: { label: string; desc?: string }[];
    /** " ({n} outs)" — appended to the preset label in the <select>. */
    outsSuffix: string;
    street: string;
    afterFlopBtn: string;
    afterTurnBtn: string;
    /** Optional third street (flop → next card only). All three keys or none. */
    flopOneBtn?: string;
    afterFlopOne?: string;
    chanceFlopOne?: string;
    /** "Number of outs: {v}" — {v} is the highlighted number. */
    outsCount: string;
    /** Result cards. */
    afterFlop: string;
    afterTurn: string;
    ruleOf4: string;
    ruleOf2: string;
    chanceFlop: string;
    chanceTurn: string;
    /** " (exact)" — appended after chanceFlop/chanceTurn. */
    exact: string;
    /** "Rule of {n} (mental math):" */
    ruleMental: string;
    exactNote: string;
    /** plabel() verdicts by probability band. */
    verdict: { great: string; good: string; fair: string; poor: string; veryPoor: string };
  };

  /** 2. Pot odds + implied odds. */
  pot: {
    potSize: string;
    callAmount: string;
    potOddsCaption: string;
    orHigher: string;
    /** "Your hand equity: {v}" */
    equityLabel: string;
    sliderGutshot: string;
    sliderFlush: string;
    /** "Implied odds {toggle}" — {toggle} is close/add below. */
    impliedToggle: string;
    close: string;
    add: string;
    /** "Expected extra winnings (if you hit): {v}" */
    extraWinnings: string;
    none: string;
    impliedCaption: string;
    /** "Minimum equity needed, counting {n} extra" */
    impliedNote: string;
    /** "implied odds {n}%" / "pot odds {n}%" — the threshold phrase inside the verdict body. */
    needImplied: string;
    needPot: string;
    /** Verdict box. Bodies take {eq} and {need}. */
    verdict: {
      call: { title: string; body: string };
      even: { title: string; body: string };
      fold: { title: string; body: string };
    };
  };

  /** 3. Hand evaluator. */
  handEval: {
    pickerLabel: string;
    emptyTitle: string;
    emptyHint: string;
    /** "Best hand from {n} cards" */
    bestFrom: string;
    /** 10 plain rank names, low → high (High Card … Royal Flush). */
    rankNames: string[];
    /** 10 decorated result names, low → high (shown as the evaluated hand). */
    resultNames: string[];
    /** 5 axis labels under the strength bar. */
    axis: string[];
  };

  /** 4. Starting hand strength. */
  starting: {
    pickerLabel: string;
    emptyPrompt: string;
    /** Fallback for hands not in the table. */
    unknownDesc: string;
    unknownAction: string;
    /** 5 tier badges, index 0 = tier 1. */
    tierNames: string[];
    recommendedAction: string;
    /** 5 axis labels under the tier bar. */
    axis: string[];
    summaryTitle: string;
    /** 5 summary rows, index 0 = tier 1. `hands` is the hand list (may contain prose like "suited connectors"). */
    summary: { hands: string; action: string }[];
    /** Per hand code (AA, AKs, 1010 …): description + recommended action. Tiers live in code. */
    hands: Record<string, { desc: string; action: string }>;
  };

  /** 5. SPR. */
  spr: {
    effectiveStack: string;
    potSize: string;
    caption: string;
    stackDivPot: string;
    /** Zone card: label, description, 3 [hand, action] rows (colors live in code). */
    zones: {
      low: { label: string; desc: string; actions: [string, string][] };
      mid: { label: string; desc: string; actions: [string, string][] };
      high: { label: string; desc: string; actions: [string, string][] };
      deep: { label: string; desc: string; actions: [string, string][] };
    };
    /** 4 legend labels, aligned by index with the SPR ranges in code. */
    legend: string[];
  };

  /** 6. Tournament M value. */
  m: {
    inputs: { stack: string; bb: string; sb: string; ante: string };
    /** "Players at table: {v}" */
    players: string;
    headsUp: string;
    orbitCaption: string;
    /** "BB {bb} + SB {sb} + ante {ante}×{players}" */
    orbitFormula: string;
    mCaption: string;
    /** Zone name/description (result card) + short action (legend). Ranges live in code. */
    zones: {
      dead: { name: string; desc: string; action: string };
      red: { name: string; desc: string; action: string };
      orange: { name: string; desc: string; action: string };
      yellow: { name: string; desc: string; action: string };
      green: { name: string; desc: string; action: string };
    };
  };

  /** 7. ICM calculator. */
  icm: {
    introStrong: string;
    /** Text that follows the bold term (keep the leading space). */
    introRest: string;
    numPlayers: string;
    paidPlaces: string;
    stacksTitle: string;
    /** "total {n}" */
    total: string;
    /** aria-labels: "Decrease player {n} stack" … */
    decStack: string;
    stackInput: string;
    incStack: string;
    prizesTitle: string;
    decPrize: string;
    prizeInput: string;
    incPrize: string;
    currencyNote: string;
    resultTitle: string;
    /** `chop` (optional) adds a chip-chop column = chip share × remaining prize pool. */
    th: { player: string; chips: string; chipPct: string; icmValue: string; icmPct: string; diff: string; chop?: string };
    /** "{medal} P{n}" — player cell. */
    playerCell: string;
    diffPlus: string;
    diffPlusNote: string;
    diffMinus: string;
    diffMinusNote: string;
    /** Percentage-point unit, not a percent change. */
    diffUnit: string;
    empty: string;
  };

  /** 8. Push/fold Nash chart. */
  pushfold: {
    ante: string;
    noAnte: string;
    bbAnteOn: string;
    table: string;
    headsUp: string;
    sixMax: string;
    nineMax: string;
    scenario: string;
    sbShove: string;
    bbCall: string;
    /** "Position {hint}" — {hint} is the muted span holding firstInHint. */
    position: string;
    firstInHint: string;
    /** "Effective stack: {v}" */
    effectiveStack: string;
    /** Result captions: {stack}, {pos}, {table}. */
    captionHuPush: string;
    captionHuCall: string;
    captionMw: string;
    /** " (with ante)" */
    withAnte: string;
    /** " / {total} combos" — appended after the combo count. */
    combosSuffix: string;
    legendPush: string;
    legendCall: string;
    legendFold: string;
    /** Grid explanation paragraph, in render order. */
    note: { strong1: string; p1: string; strong2: string; p2: string; strong3: string; p3: string };
    /** Cell title: "{hand} — {action}" */
    cellTitle: string;
    cell: { push: string; call: string; fold: string };
    huNote: { strong: string; p1: string; em: string; p2: string };
    /** {table} placeholder in strong. */
    mwNote: { strong: string; p1: string; strong2: string; p2: string };
    readMore: string;
    shortStackLink: { slug: string; text: string };
    readMoreEnd: string;
  };

  /** ICM worked examples (SEO content below the tool). */
  icmGuide: {
    bubble: {
      badge: string;
      h2: string;
      intro: string;
      th: { player: string; chipPct: string; icmPct: string; diff: string };
      rows: { player: string; chip: string; icm: string; diff: string; up: boolean }[];
      /** "{b1} … {b2} … {b3}" — the three bold fragments. */
      keyPoint: { text: string; b1: string; b2: string; b3: string };
    };
    deal: {
      badge: string;
      h2: string;
      intro: string;
      th: { player: string; chop: string; icm: string; diff: string };
      rows: { player: string; chop: string; icm: string; diff: string; up: boolean }[];
      summary: { text: string; b1: string; b2: string; b3: string };
      /** Optional link sentence rendered after the summary (calculator → blog). */
      linkLead?: string;
      link?: { slug: string; text: string };
    };
  };

  /**
   * 0. Equity (hand vs hand) calculator — ★2026-09-17 · OPTIONAL. The tab (first position) renders only when present,
   * so locales adopt it one at a time. Values: label/sub = tab chrome · presets = quick matchups as "AsAh" strings.
   */
  equity?: {
    label: string; sub: string;
    hero: string;
    /** "Opponent {n}" */
    opp: string;
    random: string;
    board: string;
    pickerHint: string;
    addPlayer: string; removePlayer: string;
    needTwo: string;
    boardCount: string;
    th: { player: string; hand: string; win: string; tie: string; equity: string };
    /** "Exact — all {n} runouts enumerated" */
    exactNote: string;
    /** "Monte Carlo — {n} random runouts" */
    mcNote: string;
    /** "{p} wins with {hand}" */
    winner: string;
    /** "Chop — {n} hands tie with {hand}" */
    chop: string;
    /** Shown instead of exactNote when the board has 5 cards and every hand is known. */
    showdownNote: string;
    presets: { label: string; hands: string[] }[];
  };

  /**
   * Static quick-reference tables rendered between the guide cards and the FAQ — ★2026-09-17 · OPTIONAL.
   * Every number must come from scripts/calc-reference-tables.ts (§13). `emphasis` = column index shown bold.
   */
  quickRef?: {
    badge: string;
    h2: string;
    intro: string;
    th: string[];
    align?: ("left" | "right")[];
    emphasis?: number;
    /** Column indices that must not wrap (short labels/numbers) — the table scrolls sideways instead. Column 0 never wraps. */
    nowrap?: number[];
    rows: string[][];
    note?: string;
    /** Rendered right after `note` as a link into the locale's blog. */
    link?: { slug: string; text: string };
    linkTail?: string;
  }[];

  /** Tool guide cards. */
  guide: {
    badge: string;
    h2: string;
    /** Cards aligned by index with the icons in code unless `icon` is given (EN gives all 9 explicitly). */
    cards: { title: string; body: string; icon?: string }[];
  };

  faq: {
    badge: string;
    h2: string;
    /** "Q. {q}" */
    q: string;
  };

  /** Related guides (calculator → blog). Links resolve to /{locale}/blog/{slug}. */
  related: {
    badge: string;
    h2: string;
    links: { slug: string; title: string; desc: string }[];
  };
};

export const CALC_DICT_EN: CalcDict = {
  numberLocale: "en-US",

  // ★2026-09-17 재조준 — 근거 docs/keyword-bank/en-calculator.md. 🔴 app/en/calculator/page.tsx metadata와 «같은 문자열»(check:seo-sync).
  seo: {
    title: "Poker Odds Calculator — Equity, ICM & Pot Odds",
    description: "Free Texas Hold'em calculator: hand-vs-hand equity (win %), pot odds, implied odds, outs, hand ranks, SPR, M value, ICM deal & chip chop — 9 tools, no signup.",
    path: "/en/calculator",
  },

  hero: {
    badges: ["Free tool", "No signup"],
    h1: "Poker Odds Calculator",
    h1Sub: "Equity calculator, ICM & pot odds in one place",
    lead: "Enter two hands and see who wins — then check pot odds, outs, ICM deals, SPR, tournament M and push/fold ranges. Nine free Hold'em calculators, with exact enumeration on every street where it is fast enough.",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot Odds", "🃏 Hand Rank", "📊 Starting Hand", "📐 SPR", "🏆 M Value", "📈 ICM", "⚡ Push/Fold"],
  },

  equity: {
    label: "Equity", sub: "Hand vs hand",
    hero: "Your hand",
    opp: "Opponent {n}",
    random: "Random hand",
    board: "Board",
    pickerHint: "Select a seat or the board, then pick its cards.",
    addPlayer: "+ Add opponent", removePlayer: "− Remove opponent",
    needTwo: "Give every hand 2 cards (or mark an opponent as a random hand).",
    boardCount: "Leave the board empty for preflop, or give it 3 (flop), 4 (turn) or 5 (river) cards.",
    th: { player: "Player", hand: "Hand", win: "Win", tie: "Tie", equity: "Equity" },
    exactNote: "Exact — all {n} possible runouts enumerated.",
    mcNote: "Monte Carlo — {n} random runouts; results vary by about ±0.3 points between runs.",
    winner: "{p} wins with {hand}",
    chop: "Chop — {n} hands split the pot with {hand}",
    showdownNote: "Showdown — the board is complete, so this is the final result.",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Draw odds" },
    pot: { label: "Pot Odds", sub: "Call/fold" },
    hand: { label: "Hand Rank", sub: "Pick cards" },
    starting: { label: "Starting Hand", sub: "Open strength" },
    spr: { label: "SPR", sub: "Stack/pot ratio" },
    m: { label: "Tournament M", sub: "M value" },
    icm: { label: "ICM", sub: "Prize equity" },
    pushfold: { label: "Push/Fold", sub: "Nash chart" },
  },

  workspace: {
    chooseCalculator: "Choose a calculator",
    resetInputs: "Reset inputs",
    resetAria: "Reset {label}",
    resetMessage: "{label} inputs reset.",
  },

  cardPicker: {
    clearAll: "Clear all",
  },

  outs: {
    drawType: "Draw type",
    presets: [
      { label: "Custom input" },
      { label: "Flush draw", desc: "4 cards of a suit → need the 5th (9 outs whether or not it is the nut flush)" },
      { label: "Open-ended straight draw (OESD)", desc: "e.g. 5-6-7-8, need a 4 or 9" },
      { label: "Flush + gutshot combo", desc: "9 flush + 3 gutshot (overlap removed)" },
      { label: "Gutshot straight", desc: "e.g. 5-6-8-9, need just a 7" },
      // 🔴 2026-09-20 — «not on board»는 오버카드의 정의가 아니다(pt 네이티브 렌즈 09-17).
      //    보드가 A-K-Q일 때 7·2도 «보드에 없는» 카드지만 오버카드가 아니고, ×3=6 아웃츠 산술이 성립하지 않는다.
      //    정의는 «보드의 «모든» 카드보다 높은 2장»이다. hi·id는 이미 이렇게 고쳐져 있었다(EN이 마지막).
      { label: "Two overcards", desc: "2 ranks higher than every card on the board × 3 each — discount hard against a made hand: pairing an overcard often still loses" },
      { label: "Two pair → full house", desc: "e.g. A-K on an A-K-x board → 2 aces + 2 kings left" },
      { label: "One pair → trips", desc: "2 cards of the rank remain" },
      { label: "Flush + OESD (monster)", desc: "9 flush + 8 straight (2 overlap)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    // ★2026-09-17 third street (flop → next card only) — the number you need when facing one bet on the flop
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Chance to hit on the next card from the flop",
    outsCount: "Number of outs: {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Rule of 4",
    ruleOf2: "Rule of 2",
    chanceFlop: "Chance to complete by the river from the flop (both cards — an all-in)",
    chanceTurn: "Chance to complete on the river from the turn",
    exact: " (exact)",
    ruleMental: "Rule of {n} (mental math):",
    /**
     * 🔴 2026-09-20 — 구 문구 «The big number is the exact figure»는 **«big»이 활자 크기인지
     *    값 크기인지 갈린다.** 값으로 읽으면 거짓이다: 15 아웃츠에서 Rule of 4는 60%를 내놓고
     *    정확값은 54.1%라 **규칙 쪽 숫자가 더 크다.** 로케일이 «더 큰 값»으로 옮기면 사실오류가 된다.
     *    → «활자가 큰 쪽»이라고 못 박는다. 로케일 번역도 «글자 크기» 축으로 옮겨라.
     */
    exactNote: "The figure in large type is the exact one",
    verdict: { great: "Great 🔥", good: "Good ✅", fair: "Fair ⚠️", poor: "Poor ❌", veryPoor: "Very poor 💀" },
  },

  pot: {
    potSize: "Pot size (including the bet you face)",
    callAmount: "Your call amount",
    potOddsCaption: "Pot odds (minimum equity needed)",
    orHigher: "above this makes the call profitable",
    equityLabel: "Your hand equity: {v}",
    sliderGutshot: "Gutshot 8.7%",
    sliderFlush: "Flush 19.6%",
    impliedToggle: "Implied odds {toggle}",
    close: "Close ▲",
    add: "Add ▼",
    extraWinnings: "Expected extra winnings (if you hit): {v}",
    none: "None",
    impliedCaption: "Implied odds (with extra winnings)",
    impliedNote: "Minimum equity needed, counting {n} extra",
    needImplied: "implied odds {n}%",
    needPot: "pot odds {n}%",
    verdict: {
      call: { title: "Call (profitable)", body: "Your equity {eq}% > {need} → profitable long term" },
      even: { title: "Break-even (EV 0)", body: "Your equity {eq}% = {need} → calling neither gains nor loses. Decide on factors outside pot odds, such as position and opponent tendencies" },
      fold: { title: "Fold recommended", body: "Your equity {eq}% < {need} → losing long term" },
    },
  },

  handEval: {
    pickerLabel: "Select cards (5–7)",
    emptyTitle: "Pick 5 or more cards to evaluate the hand",
    emptyHint: "With 7 cards, the best 5-card combination is found automatically",
    bestFrom: "Best hand from {n} cards",
    rankNames: [
      "High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight",
      "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush",
    ],
    resultNames: [
      "High Card 🃏", "One Pair 1️⃣", "Two Pair ✌️", "Three of a Kind 3️⃣", "Straight ➡️",
      "Flush 🌊", "Full House 🏠", "Four of a Kind 💎", "Straight Flush 🌟", "Royal Flush 👑",
    ],
    axis: ["High Card", "One Pair", "Flush", "Quads", "Royal"],
  },

  starting: {
    pickerLabel: "Select your 2 hole cards",
    emptyPrompt: "Pick your 2 hole cards",
    unknownDesc: "Not in the core opening chart",
    unknownAction: "Suited: from the button open any suited hand when it folds to you; from the cutoff keep to suited kings, two cards 8 or higher (Q8s, 10-8s) and connectors down to 54s. Offsuit: button only — any ace (A9o, A5o), or two cards 9 or higher (K9o, 10-9o). Everything else (J2o, 93o, 72o): fold",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — Strong", "🥉 Tier 3 — Playable", "⚠️ Tier 4 — Marginal", "🚫 Tier 5 — Weak"],
    recommendedAction: "Recommended action:",
    axis: ["Premium", "Strong", "Playable", "Marginal", "Weak"],
    summaryTitle: "Hand tier summary",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Always raise" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Raise most positions" },
      { hands: "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s K9s Q9s J9s", action: "Raise late position" },
      { hands: "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s", action: "Selective in LP" },
      { hands: "weak offsuit hands (J2o, 93o, 72o)", action: "Usually fold" },
    ],
    hands: {
      AA: { desc: "The best hand. Raise in every spot", action: "Always raise/re-raise (3-bet)" },
      KK: { desc: "Only watch for an ace on the flop", action: "Always raise/re-raise" },
      QQ: { desc: "Stronger than JJ, but don't overvalue", action: "Always raise; careful when deep" },
      JJ: { desc: "Watch for overcards on the flop", action: "Raise from any position" },
      "1010": { desc: "Loses value when overcards flop", action: "Raise from any position — do not open-limp" },
      AKs: { desc: "The best drawing hand. Build the pot", action: "Always raise/re-raise" },
      AKo: { desc: "Weaker than AKs but still premium", action: "Always raise; can call a re-raise" },
      AQs: { desc: "Strong hand; more valuable in position", action: "Raise from most positions" },
      AJs: { desc: "Great on BTN/CO, weak from UTG", action: "Raise mid/late; from UTG raise or fold — never limp" },
      A10s: { desc: "One of the top suited aces", action: "Raise mid/late; from UTG raise or fold — never limp" },
      KQs: { desc: "High flush + straight draw potential", action: "Raise from most positions" },
      KJs: { desc: "Strong drawing hand", action: "Raise in LP; fold or raise from EP — never limp" },
      "99": { desc: "Medium pair, watch overcard flops", action: "Raise most positions; careful deep" },
      // 🔴 2026-09-25 — 88은 요약행(T2 «Raise most positions»)·99와 같은 급이다. 09-21의 «88 = 77 동문»은
      //    T2 배지 옆에 T3 문구가 뜨는 설계라 폐기했다(MA-153~157). 원칙 = 단조성: 지배하는 핸드가
      //    지배당하는 핸드보다 좁게 권고되지 않는다(99 ≥ 88 ≥ 77). 검산 = 169핸드 지배 쌍 역전 0.
      "88": { desc: "Pocket pair with good set potential", action: "Raise most positions; call a raise — never open-limp" },
      AQo: { desc: "Weaker offsuit; position matters", action: "Raise in mid/late position" },
      AJo: { desc: "Weak in EP, strong in LP", action: "Raise CO/BTN, careful in EP" },
      KQo: { desc: "Top offsuit connector", action: "Raise in LP; in EP raise or fold when nobody has entered, and usually fold facing a raise" },
      K10s: { desc: "Suited king, strong in LP", action: "Raise LP, fold EP" },
      QJs: { desc: "Strong two-way draws", action: "Raise LP, more valuable when deep" },
      J10s: { desc: "One of the best suited connectors", action: "Raise LP; call a single raise with position" },
      "109s": { desc: "Strong suited connector", action: "Raise first in from LP; call a single raise with position" },
      "77": { desc: "Set-mining hand, watch overcards", action: "Raise LP; in EP call a raise, and raise or fold when first in — never open-limp" },
      A9s: { desc: "Suited ace with flush potential", action: "Raise in LP" },
      K9s: { desc: "Suited king; a paired king can be dominated", action: "Open-raise CO/BTN when folded to you; facing a raise, weigh position, price and effective stacks" },
      Q9s: { desc: "Suited queen with straight potential; beware stronger queens", action: "Open-raise CO/BTN when folded to you; facing a raise, weigh position, price and effective stacks" },
      J9s: { desc: "Suited one-gapper with straight and flush potential", action: "Open-raise CO/BTN when folded to you; facing a raise, weigh position, price and effective stacks" },
      "66": { desc: "Set-mining — needs implied odds", action: "Raise first in from LP; call a raise when you and the raiser each have at least ~15× the call behind" },
      "55": { desc: "Little value without a set", action: "Raise first in from LP; call a single raise in LP when you and the raiser each have at least ~15× the call behind" },
      A8s: { desc: "Medium suited ace", action: "Play LP, fold EP" },
      A7s: { desc: "Medium suited ace", action: "Play LP only" },
      A6s: { desc: "Medium suited ace", action: "Play LP only" },
      A5s: { desc: "Wheel + ace-blocker value; a favorite 3-bet bluff", action: "LP only; implied odds matter" },
      A4s: { desc: "Suited ace with a wheel draw", action: "LP only" },
      // 🔴 2026-09-20 — 구 문구 «Bottom of the suited aces»는 **같은 표에 A2s가 있어 거짓**이었다.
      A3s: { desc: "Nut flush draw with a wheel card, a notch above A2s", action: "LP only" },
      // 🔴 2026-09-25 — A3s·A2s «BTN only»는 폴백의 «cutoff: suited kings»(K3s·K2s)보다 좁았다 — A가 K를 지배하는데 역전.
      A2s: { desc: "Wheel + nut flush, but weak", action: "LP only" },
      KJo: { desc: "Domination risk; LP only", action: "Raise CO/BTN, fold to a re-raise" },
      QJo: { desc: "Moderate connectivity; needs position", action: "LP only" },
      "98s": { desc: "Strong suited connector", action: "Raise first in from LP; call a raise with position" },
      "87s": { desc: "Good suited connector", action: "Raise first in from LP; call a raise with position" },
      "76s": { desc: "Suited connector", action: "Raise first in from LP; call a raise only with position and deep stacks" },
      "44": { desc: "Almost no value without a set", action: "Raise first in from LP; call a single raise in LP when you and the raiser each have at least ~15× the call behind" },
      "33": { desc: "Needs to set-mine; speculative", action: "Raise first in from LP; otherwise multiway pots with deep stacks only" },
      "22": { desc: "Lowest pocket pair", action: "Raise first in from LP; otherwise multiway pots with deep stacks only" },
      // 🔴 2026-09-25 — K10o «Occasionally from BTN»은 Q10o «BTN only»·폴백 K9o(버튼 오픈)보다 좁았다.
      //    K10o = KJo와 같은 CO/BTN · J10o = Q10o·폴백 J9o와 같은 BTN. 폴백 오프수트 분기는 그대로다(콤보 모델 49.32%).
      K10o: { desc: "K-10 offsuit, weak", action: "Open-raise CO/BTN when folded to you" },
      Q10o: { desc: "Low-connectivity offsuit", action: "BTN only" },
      J10o: { desc: "Decent offsuit but vulnerable", action: "BTN only" },
      Q10s: { desc: "Strong suited broadway, plays well in position", action: "Raise LP; fold from EP" },
      A10o: { desc: "Marginal offsuit ace, domination-prone", action: "LP only" },
      "65s": { desc: "Suited connector; wants multiway/implied odds", action: "Raise first in from LP; call a raise only with position and deep stacks" },
      "54s": { desc: "Low suited connector; speculative", action: "Raise first in from LP; call a raise only with position in cheap multiway pots" },
    },
  },

  spr: {
    effectiveStack: "Effective stack (the shorter of the two stacks)",
    potSize: "Current pot size",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ pot",
    zones: {
      low: {
        label: "Low SPR (committed)",
        desc: "A big part of the pot is already in. With top pair top kicker or better on a dry flop, plan to get the rest in — at this depth folding is often the bigger mistake. On paired, three-flush or three-straight boards, or facing action only a set or straight makes, one pair is still one pair.",
        actions: [["TPTK+", "Consider all-in"], ["Draws", "Pot odds are a must"], ["Weak hands", "Fold carefully"]],
      },
      mid: {
        label: "Medium SPR (flexible)",
        desc: "This is the zone to play strong hands like two pair or better. Protecting your stack becomes important.",
        actions: [["Two pair+", "Value bet"], ["One pair", "One or two streets, then pot control"], ["Draws", "Semi-bluff with fold equity; give up without it"]],
      },
      high: {
        label: "High SPR (getting deep)",
        desc: "Stacks are getting deep. Draws and strong made hands rise in relative value.",
        actions: [["Set+", "Play strong"], ["Draws", "Implied odds go up"], ["One pair/TPTK", "Proceed with care"]],
      },
      deep: {
        label: "Very high SPR (deep)",
        desc: "This is a deep-stacked game. Position, draw potential, and reading opponent ranges matter a lot.",
        actions: [["Nut hands", "Can bet big"], ["Draws", "Very high implied odds"], ["Weak made hands", "Careful, vulnerable to bluffs"]],
      },
    },
    legend: ["Committed", "Flexible", "Getting deep", "Deep"],
  },

  m: {
    inputs: { stack: "Your stack", bb: "Big blind", sb: "Small blind", ante: "Ante" },
    players: "Players at table: {v}",
    headsUp: "2 (heads-up)",
    orbitCaption: "Orbit cost (blinds per lap)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    mCaption: "M value (Harrington's M)",
    zones: {
      dead: { name: "💀 Dead zone", desc: "Fold equity is gone — the all-in is your only move, so take the best live hand you see before the blinds reach you, and prefer a spot where the pot is unopened.", action: "All-in now" },
      red: { name: "🔴 Red zone", desc: "You need to double up soon. Use a push/fold strategy — shove your good hands, fold the rest.", action: "Push/fold" },
      orange: { name: "🟠 Orange zone", desc: "Your stack is shrinking. Tighten your range to strong hands only and look to open-shove.", action: "Tight range" },
      yellow: { name: "🟡 Yellow zone", desc: "The pressure is on. You need to actively gather chips — play aggressively when good spots come up.", action: "Play aggressive" },
      green: { name: "🟢 Green zone", desc: "You have a comfortable stack. Use a full range of strategies — grow your stack with position play and bluffs.", action: "Full strategy" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " converts tournament stacks into expected prize money under ICM. For a call/fold decision, weight your value after each possible outcome (win, tie or loss) by its actual probability, then compare that sum with your value after folding. A bust-out is worth the payout actually received, not automatically zero.",
    numPlayers: "Number of players",
    paidPlaces: "Paid places",
    stacksTitle: "Player chip stacks",
    total: "total {n}",
    decStack: "Decrease player {n} stack",
    stackInput: "Player {n} chip stack",
    incStack: "Increase player {n} stack",
    prizesTitle: "Prizes",
    decPrize: "Decrease place {n} prize",
    prizeInput: "Place {n} prize",
    incPrize: "Increase place {n} prize",
    currencyNote: "Enter prize amounts in any currency unit.",
    resultTitle: "ICM result",
    th: { player: "Player", chips: "Chips", chipPct: "Chip %", icmValue: "ICM value", icmPct: "ICM %", diff: "Diff", chop: "Chip chop" },
    playerCell: "{medal} P{n}",
    diffPlus: "+diff",
    diffPlusNote: "Your share of the prize pool under ICM is higher than your chip share. The sign alone does not tell you whether to call or fold.",
    diffMinus: "−diff",
    diffMinusNote: "Your share of the prize pool under ICM is lower than your chip share. The sign alone does not tell you whether aggression is profitable.",
    diffUnit: "pp",
    empty: "Use positive stacks and prizes, with payouts ordered highest to lowest (equal payouts are allowed).",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "No ante",
    bbAnteOn: "BB ante ON",
    table: "Table",
    headsUp: "Heads-Up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Scenario",
    sbShove: "SB: shove or fold",
    bbCall: "BB: call a shove",
    position: "Position {hint}",
    firstInHint: "(first-in — folded to you)",
    effectiveStack: "Effective stack: {v}",
    captionHuPush: "Hands the SB shoves at {stack}bb",
    captionHuCall: "Hands the BB calls a shove with at {stack}bb",
    captionMw: "First-in shove from the {pos} at a {table}-max table, {stack}bb",
    withAnte: " (with ante)",
    combosSuffix: " / {total} combos",
    legendPush: "Push (all-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Diagonal = pairs · upper right = suited · lower left = offsuit",
      p1: "The grid is ordered by ",
      strong2: "rank, not by strength",
      p2: ", so highlighted and unhighlighted cells alternating within a row is expected — AQo, KQo and QQ sit side by side but are not in strength order. A5s being in while A6s is out is also correct: A5s makes the",
      strong3: "wheel straight (A-2-3-4-5)",
      p3: ", which outweighs the lower kicker.",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Nash equilibrium, heads-up (SB vs BB)",
      p1: ": the SB is assumed to either shove or fold. The ante setting adds 0.125bb per player (a big-blind ante equivalent, ≈12.5%). Ranges widen as stacks get shorter — and below ~3-4bb the BB correctly calls ",
      em: "wider",
      p2: " than the SB shoves, because of pot odds.",
    },
    mwNote: {
      strong: "{table}-max first-in shove chart",
      p1: ": everyone in front has folded and you either shove or fold. It is a ",
      strong2: "pure chip-EV",
      p2: " Nash-style equilibrium — the calling ranges of the players behind are solved simultaneously — using the standard approximation that a called pot is resolved heads-up against the first caller (multi-caller pots are ignored). Ranges widen as fewer players are left behind you (UTG → BTN → SB), as stacks get shorter, and with antes ON (0.125bb per player). Because it is pure chip-EV, the early-position (UTG/MP) 10bb ranges come out tighter than popular rules of thumb (small pairs fold) — adjust for ICM and opponents in practice.",
    },
    readMore: "For short-stack fundamentals, read our",
    shortStackLink: { slug: "holdem-short-stack", text: "short stack strategy guide" },
    readMoreEnd: ".",
  },

  icmGuide: {
    bubble: {
      badge: "ICM guide",
      h2: "How to use the ICM calculator — a 3-minute bubble example",
      intro: "Say four players remain and three get paid (the bubble). Stacks are 60,000 / 40,000 / 30,000 / 20,000 and the prizes are $500 / $300 / $200. Enter those into the calculator and you get each player's chip share versus their real prize value (ICM):",
      th: { player: "Player", chipPct: "Chip %", icmPct: "ICM %", diff: "Diff" },
      rows: [
        { player: "🥇 Chip leader", chip: "40.0%", icm: "33.3%", diff: "-6.7pts", up: false },
        { player: "🥈 2nd", chip: "26.7%", icm: "27.2%", diff: "+0.6pts", up: true },
        { player: "🥉 3rd", chip: "20.0%", icm: "22.9%", diff: "+2.9pts", up: true },
        { player: "4th (short stack)", chip: "13.3%", icm: "16.6%", diff: "+3.3pts", up: true },
      ],
      keyPoint: {
        text: "The table shows {b1} by 6.7 percentage points; this is not a call/fold threshold. Medium stacks often face the greatest risk premium, so a covering leader can {b2} when their ranges allow it. Short stacks should {b3}. Decisions depend on stacks, payouts and opponents, not the sign of the difference alone.",
        b1: "the chip leader's ICM value (33.3%) is lower than their chip share (40%)",
        b2: "pressure medium stacks",
        b3: "choose calls carefully, with an exception for stacks about to be blinded out",
      },
    },
    deal: {
      // ★2026-09-17 재조준 — 옛 예시(50/30/20 · $900/$400/$200 · 618/485/397)는 lib/posts-en/holdem-icm.ts §「ICM Deal vs Chip Chop」과
      //   표까지 동일해 카니발이었다(SEO 렌즈). 새 예시 = 4명 · 45/25/18/12 · $2,300(1,000/600/400/300) · scripts/calc-icm-example.ts.
      badge: "ICM chop calculator",
      h2: "ICM chop calculator — what a final-table deal is actually worth",
      intro: "Four players are left and talking about a deal. Stacks are 450,000 / 250,000 / 180,000 / 120,000 (45% / 25% / 18% / 12%) and $2,300 of prize money remains, paid $1,000 / $600 / $400 / $300. Enter those into the ICM calculator above and its Chip chop column puts the two numbers side by side:",
      th: { player: "Player", chop: "Chip chop", icm: "ICM deal", diff: "Diff" },
      rows: [
        { player: "🥇 Chip leader (45%)", chop: "$1,035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 2nd (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 3rd (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "4th (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        text: "A raw chip chop splits by chip share and {b1}; an ICM deal reflects each player's chance of finishing in each place and is {b2}. Here the shortest stack gets $276 by chips but $458 by ICM — {b3}. Run both numbers before you talk. What a room calls a chip chop is often a save-and-chop — everyone is paid the next payout first and only the remainder is split by chips — which lands near ICM, not the raw split this column shows. And ICM assumes equal skill and ignores who posts the next blinds, so expect the big stack to negotiate above its ICM figure.",
        b1: "favors the chip leader",
        b2: "fairer to short stacks",
        b3: "$182 more",
      },
      linkLead: "The model behind these numbers, with bubble factor and deal etiquette, is in",
      link: { slug: "holdem-icm", text: "What Is ICM in Poker?" },
    },
  },

  // ★2026-09-17 빠른 참조 6표 — 🔴 모든 값 = scripts/calc-reference-tables.ts 출력(09-17). 손으로 고치지 마라.
  quickRef: [
    {
      badge: "Quick reference",
      h2: "Equity calculator reference — preflop all-in matchups",
      intro: "Equity when two hands go all-in preflop, averaged over every suit combination of the matchup (precomputed offline: all 1,712,304 boards for each one). A specific combination can differ by about a point — enter the exact cards in the equity calculator above.",
      th: ["Matchup", "Hand A", "Hand B", "Tie"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81.9%", "18.1%", "0.5%"],
        ["AA vs AKs", "87.9%", "12.1%", "1.3%"],
        ["AA vs 87s", "77.5%", "22.5%", "0.3%"],
        ["AA vs 72o", "88.2%", "11.8%", "0.4%"],
        ["KK vs AKs", "65.9%", "34.1%", "0.8%"],
        ["QQ vs AKo", "56.8%", "43.2%", "0.4%"],
        ["QQ vs AKs", "54.0%", "46.0%", "0.4%"],
        ["JJ vs TT", "82.0%", "18.0%", "0.4%"],
        ["TT vs A9o", "72.2%", "27.8%", "0.4%"],
        ["TT vs 87s", "80.3%", "19.7%", "0.5%"],
        ["22 vs AKo", "52.6%", "47.4%", "0.6%"],
        ["AKo vs AQo", "74.4%", "25.6%", "4.7%"],
        ["AKs vs QJs", "63.5%", "36.5%", "0.5%"],
        ["AKo vs JTs", "59.5%", "40.5%", "0.5%"],
      ],
      note: "Equity is your average share of the pot, counting ties (chops). A pair against two overcards is the classic race; a pair against a higher pair is about a 4.5 to 1 underdog. The full odds chart, street by street, is in",
      link: { slug: "holdem-probability", text: "Poker Odds & Probability Chart" },
      linkTail: ".",
    },
    {
      badge: "Quick reference",
      h2: "Pocket aces vs random hands — by number of opponents",
      intro: "How often AA wins when everyone is all-in preflop against N random hands (Monte Carlo, 8,000,000 runouts per row). The first two callers cost the aces about 10 points each; after that each one costs less.",
      th: ["Opponents", "AA equity"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85.2%"], ["2", "73.4%"], ["3", "63.8%"], ["4", "55.9%"],
        ["5", "49.2%"], ["6", "43.6%"], ["7", "38.7%"], ["8", "34.6%"],
      ],
      note: "That is why aces want a heads-up pot: against five random hands the best starting hand in Hold'em is no longer a favorite to win the pot (49.2%, with the other five sharing the rest). Set an opponent to “Random hand” in the equity calculator to test any hand the same way (it takes up to three opponents). Why big hands shrink in multiway pots is in",
      link: { slug: "holdem-equity", text: "Poker Equity Explained" },
      linkTail: ".",
    },
    {
      badge: "Quick reference",
      h2: "Outs calculator reference — draw odds by number of outs",
      intro: "Chance your draw completes: flop → river (two cards to come), flop → turn (the next card only) and turn → river (one card) — exact, next to the Rule of 4 and 2 estimate. Count outs first, then read across.",
      th: ["Outs", "Typical draw", "Flop → river", "Flop → turn", "Turn → river", "Rule of 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4.3%", "2.1%", "2.2%", "4% · 2%"],
        ["2", "Pocket pair → set", "8.4%", "4.3%", "4.3%", "8% · 4%"],
        ["3", "One overcard", "12.5%", "6.4%", "6.5%", "12% · 6%"],
        ["4", "Gutshot straight", "16.5%", "8.5%", "8.7%", "16% · 8%"],
        ["5", "Pair → two pair or trips", "20.4%", "10.6%", "10.9%", "20% · 10%"],
        ["6", "Two overcards", "24.1%", "12.8%", "13.0%", "24% · 12%"],
        ["7", "–", "27.8%", "14.9%", "15.2%", "28% · 14%"],
        ["8", "Open-ended straight", "31.5%", "17.0%", "17.4%", "32% · 16%"],
        ["9", "Flush draw", "35.0%", "19.1%", "19.6%", "36% · 18%"],
        ["10", "Gutshot + two overcards", "38.4%", "21.3%", "21.7%", "40% · 20%"],
        ["11", "Open-ended + one overcard", "41.7%", "23.4%", "23.9%", "44% · 22%"],
        ["12", "Flush draw + gutshot", "45.0%", "25.5%", "26.1%", "48% · 24%"],
        ["13", "–", "48.1%", "27.7%", "28.3%", "52% · 26%"],
        ["14", "Open-ended + two overcards", "51.2%", "29.8%", "30.4%", "56% · 28%"],
        ["15", "Flush draw + open-ended", "54.1%", "31.9%", "32.6%", "60% · 30%"],
        ["16", "–", "57.0%", "34.0%", "34.8%", "64% · 32%"],
        ["17", "–", "59.8%", "36.2%", "37.0%", "68% · 34%"],
        ["18", "–", "62.4%", "38.3%", "39.1%", "72% · 36%"],
        ["19", "–", "65.0%", "40.4%", "41.3%", "76% · 38%"],
        ["20", "–", "67.5%", "42.6%", "43.5%", "80% · 40%"],
      ],
      note: "The two-card figure only applies when you will see both cards without paying again (an all-in). Facing one bet on the flop, use the flop-to-turn column: 9 outs = 19.1%. Overcards are the least reliable outs — against a made hand, pairing one often still loses, so discount them. How to count outs without double-counting is in",
      link: { slug: "holdem-outs", text: "How to Count Outs" },
      linkTail: ".",
    },
    {
      badge: "Quick reference",
      h2: "Pot odds calculator reference — equity you need to call",
      intro: "Facing a bet of this size into the pot, this is the minimum equity a call needs to break even: call ÷ (pot after the bet + call). It is shown both ways — as odds and as the equity they require; the calculator reports the equity form. Compare it with your draw's exact odds in the outs table above.",
      th: ["Bet size", "Odds (X : 1)", "Equity needed"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ pot", "5 : 1", "16.7%"],
        ["⅓ pot", "4 : 1", "20.0%"],
        ["½ pot", "3 : 1", "25.0%"],
        ["⅔ pot", "2.5 : 1", "28.6%"],
        ["¾ pot", "2.33 : 1", "30.0%"],
        ["Pot", "2 : 1", "33.3%"],
        ["1.5× pot", "1.67 : 1", "37.5%"],
        ["2× pot", "1.5 : 1", "40.0%"],
        ["3× pot", "1.33 : 1", "42.9%"],
      ],
      note: "A flush draw (35.0% with two cards to come, 19.1% on the next card) calls a pot-sized bet on the flop only when it is all-in. Otherwise the implied odds calculator — the toggle in the pot odds tab — adds the money you expect to win later, provided your opponent has chips behind and a hand that will pay; discount it heavily when you are not drawing to the nuts. The 10-second method for any spot is in",
      link: { slug: "holdem-pot-odds", text: "How to Calculate Pot Odds" },
      linkTail: ".",
    },
    {
      badge: "Quick reference",
      h2: "SPR calculator reference — how strong a hand you need",
      intro: "SPR is effective stack ÷ current pot, where the effective stack is the shorter of the two stacks — all either player can win or lose. The lower it is, the more of that stack is already committed and the weaker the hand you can stack off with; the higher it is, the closer to the nuts you need to be for a big pot. Read the zones as flop planning: on a wet or paired board, one pair is still one pair.",
      th: ["SPR", "Zone", "Hand strength · action"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Committed", "Top pair top kicker or better on a dry flop: plan to get it in — at this depth folding is often the bigger mistake"],
        ["4 ≤ SPR < 8", "Flexible", "Two pair or better for value; one pair takes one or two streets, then pot control"],
        ["8 ≤ SPR < 15", "Getting deep", "Sets and better play for stacks; draws gain implied odds"],
        ["SPR ≥ 15", "Deep", "Big pots only with nut-class hands — weak made hands are bluff targets"],
      ],
      note: "The SPR calculator above turns any stack and pot into one of these four zones. For ranges by stack depth see",
      link: { slug: "holdem-short-stack", text: "Short Stack & Push/Fold Strategy" },
      linkTail: ".",
    },
    {
      badge: "Quick reference",
      h2: "M value calculator — the five tournament zones",
      intro: "M is your stack ÷ one orbit's cost (small blind + big blind + all antes): how many laps you can survive without playing a hand. The zones assume a full nine- or ten-handed table; short-handed, multiply M by (players ÷ 10) first — Harrington's Effective M — so an M of 10 at a six-handed final table plays like a 6 (the calculator above shows raw M; make that conversion yourself).",
      th: ["Zone", "M", "Strategy"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Dead zone", "< 1", "Fold equity is gone — shove the best live hand you see before the blinds reach you, preferably first in"],
        ["🔴 Red zone", "1–5", "Push/fold: shove your good hands, fold the rest, double up soon"],
        ["🟠 Orange zone", "6–9", "Tighten to strong hands and look to open-shove"],
        ["🟡 Yellow zone", "10–19", "Pressure is on — gather chips aggressively in good spots"],
        ["🟢 Green zone", "20+", "Comfortable stack — full strategy, position play and bluffs"],
      ],
      note: "Why tournament stacks are measured in orbits and blinds rather than chips is in",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Tournament vs Cash Game" },
      linkTail: ".",
    },
  ],

  guide: {
    badge: "Tools",
    h2: "How to use the 9 Hold'em calculators",
    cards: [
      { icon: "🎲", title: "Equity calculator (hand vs hand)", body: "Enter 2–4 hands and any board to get each hand's win %, tie % and equity. With every hand known, the flop and turn are enumerated exactly; preflop, or with a random-hand opponent, it samples 60,000 runouts and says so." },
      { icon: "🎯", title: "Outs calculator", body: "Precisely calculates the chance your draw completes on the flop or turn. See both the Rule of 4 and 2 shortcut and the exact figure at once." },
      { icon: "💰", title: "Pot odds & implied odds", body: "Decide whether to call or fold with math; the implied odds toggle adds the money you expect to win on later streets." },
      { icon: "🃏", title: "Hand evaluator", body: "Pick cards to check the hand rank. Enter up to 7 cards and it finds the best 5-card combination automatically." },
      { icon: "📊", title: "Starting hand strength", body: "Pick your two hole cards to see which of the 169 hands it is and the recommended action by position." },
      { icon: "📐", title: "SPR (Stack-to-Pot Ratio)", body: "The stack-to-pot ratio tells you how strong a hand you need. The lower the SPR, the more it favors committing with a strong hand." },
      { icon: "🏆", title: "Tournament M value", body: "Harrington's M measures the pressure on your tournament stack. Your strategy shifts completely across the green/yellow/orange/red/dead zones." },
      { icon: "📈", title: "ICM calculator", body: "The Independent Chip Model converts tournament chips into real prize-money value, with a chip chop column beside it — the numbers behind bubble decisions and final-table deal talks." },
      { icon: "⚡", title: "Nash push/fold chart", body: "A 13×13 Nash chart for heads-up, 6-max and 9-max: which hands to open-shove and which to call with at 1–25bb. A must-have for late-stage tournaments." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "ICM calculator & Hold'em calculator FAQ",
    q: "Q. {q}",
  },

  related: {
    badge: "Go deeper",
    h2: "Guides to read once the math clicks",
    // ★2026-09-17 6 → 8 (ICM · short stack 추가). 로케일 사전은 EN과 «개수» 동일이 규율(translation-link-structure-equals-en).
    links: [
      { slug: "holdem-icm", title: "What Is ICM in Poker?", desc: "Chip EV vs prize EV, bubble factor, deals" },
      { slug: "holdem-equity", title: "Poker Equity Explained", desc: "Win %, fold equity, and realization" },
      { slug: "holdem-pot-odds", title: "How to Calculate Pot Odds", desc: "Turn call/fold spots into math" },
      { slug: "holdem-outs", title: "How to Count Outs", desc: "Outs by draw and the 4 and 2 rule" },
      { slug: "holdem-probability", title: "Poker Odds & Probability Chart", desc: "The full odds chart behind every hand" },
      { slug: "holdem-starting-hands-chart", title: "Starting Hands Chart", desc: "Which hands to play by position" },
      { slug: "holdem-short-stack", title: "Short Stack & Push/Fold", desc: "How to use a push/fold chart and its limits" },
      { slug: "holdem-implied-odds", title: "Implied Odds Explained", desc: "When a bad price is still a good call" },
    ],
  },
};
