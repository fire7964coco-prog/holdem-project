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
    /** 8 feature chips (emoji + label), aligned by index with the tabs. */
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
    th: { player: string; chips: string; chipPct: string; icmValue: string; icmPct: string; diff: string };
    /** "{medal} P{n}" — player cell. */
    playerCell: string;
    diffPlus: string;
    diffPlusNote: string;
    diffMinus: string;
    diffMinusNote: string;
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
    };
  };

  /** Tool guide cards. */
  guide: {
    badge: string;
    h2: string;
    /** 8 cards, aligned by index with the icons in code. */
    cards: { title: string; body: string }[];
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

  seo: {
    title: "Poker Odds Calculator — Outs, Pot Odds, Hand Rank, SPR & ICM",
    description: "Free Texas Hold'em calculator: outs & draw odds, pot odds, hand evaluator, starting hand strength, SPR, tournament M value, ICM, and push/fold Nash charts — 8 tools in one.",
    path: "/en/calculator",
  },

  hero: {
    badges: ["Free tool", "Real-time"],
    h1: "Poker Odds Calculator",
    h1Sub: "Every Hold'em number in one place",
    lead: "Outs · pot odds · hand evaluator · starting hand strength · SPR · tournament M value · ICM · Nash push/fold chart — get the math you need at the table, instantly.",
    chips: ["🎯 Outs", "💰 Pot Odds", "🃏 Hand Rank", "📊 Starting Hand", "📐 SPR", "🏆 M Value", "📈 ICM", "⚡ Push/Fold"],
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
      { label: "Nut flush draw", desc: "4 cards of a suit → need the 5th" },
      { label: "Open-ended straight draw (OESD)", desc: "e.g. 5-6-7-8, need a 4 or 9" },
      { label: "Flush + gutshot combo", desc: "9 flush + 3 gutshot (overlap removed)" },
      { label: "Gutshot straight", desc: "e.g. 5-6-8-9, need just a 7" },
      { label: "Two overcards", desc: "2 high ranks not on board × 3 each" },
      { label: "Two pair → full house", desc: "e.g. A-K on an A-K-x board → 2 aces + 2 kings left" },
      { label: "One pair → trips", desc: "2 cards of the rank remain" },
      { label: "Flush + OESD (monster)", desc: "9 flush + 8 straight (2 overlap)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 After flop",
    afterTurnBtn: "🔄 After turn",
    outsCount: "Number of outs: {v}",
    afterFlop: "After flop",
    afterTurn: "After turn",
    ruleOf4: "Rule of 4",
    ruleOf2: "Rule of 2",
    chanceFlop: "Chance to complete after the flop",
    chanceTurn: "Chance to complete after the turn",
    exact: " (exact)",
    ruleMental: "Rule of {n} (mental math):",
    exactNote: "Value above is the exact figure",
    verdict: { great: "Great 🔥", good: "Good ✅", fair: "Fair ⚠️", poor: "Poor ❌", veryPoor: "Very poor 💀" },
  },

  pot: {
    potSize: "Current pot size",
    callAmount: "Your call amount",
    potOddsCaption: "Pot odds (minimum equity needed)",
    orHigher: "or higher makes the call profitable",
    equityLabel: "Your hand equity: {v}",
    sliderGutshot: "Gutshot 8.7%",
    sliderFlush: "Flush 19%",
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
    unknownDesc: "Very weak hand",
    unknownAction: "Usually fold",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — Strong", "🥉 Tier 3 — Playable", "⚠️ Tier 4 — Marginal", "🚫 Tier 5 — Weak"],
    recommendedAction: "Recommended action:",
    axis: ["Premium", "Strong", "Playable", "Marginal", "Weak"],
    summaryTitle: "Hand tier summary",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Always raise" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Raise most positions" },
      { hands: "AJo KQo K10s QJs J10s 10-9s 77 A9s", action: "Raise late position" },
      { hands: "66–55 A8s–A2s KJo QJo suited connectors", action: "Selective in LP" },
      { hands: "44–22 weak offsuit hands", action: "Usually fold" },
    ],
    hands: {
      AA: { desc: "The best hand. Raise in every spot", action: "Always raise/re-raise (3-bet)" },
      KK: { desc: "Only watch for an ace on the flop", action: "Always raise/re-raise" },
      QQ: { desc: "Stronger than JJ, but don't overvalue", action: "Always raise; careful when deep" },
      JJ: { desc: "Watch for overcards on the flop", action: "Raise from any position" },
      "1010": { desc: "Loses value when overcards flop", action: "Raise mid/late, consider calling EP" },
      AKs: { desc: "The best drawing hand. Build the pot", action: "Always raise/re-raise" },
      AKo: { desc: "Weaker than AKs but still premium", action: "Always raise; can call a re-raise" },
      AQs: { desc: "Strong hand; more valuable in position", action: "Raise from most positions" },
      AJs: { desc: "Great on BTN/CO, weak from UTG", action: "Raise mid/late, consider calling EP" },
      A10s: { desc: "One of the top suited aces", action: "Raise in LP, call in EP" },
      KQs: { desc: "High flush + straight draw potential", action: "Raise from most positions" },
      KJs: { desc: "Strong drawing hand", action: "Raise in LP, call in EP" },
      "99": { desc: "Medium pair, watch overcard flops", action: "Raise most positions; careful deep" },
      "88": { desc: "Pocket pair with good set potential", action: "Raise LP, consider calling EP" },
      AQo: { desc: "Weaker offsuit; position matters", action: "Raise in mid/late position" },
      AJo: { desc: "Weak in EP, strong in LP", action: "Raise CO/BTN, careful in EP" },
      KQo: { desc: "Top offsuit connector", action: "Raise in LP, call/fold in EP" },
      K10s: { desc: "Suited king, strong in LP", action: "Raise LP, fold EP" },
      QJs: { desc: "Strong two-way draws", action: "Raise LP, more valuable when deep" },
      J10s: { desc: "One of the best suited connectors", action: "Raise LP, call EP on pot odds" },
      "109s": { desc: "Strong suited connector", action: "Raise/call in LP" },
      "77": { desc: "Set-mining hand, watch overcards", action: "Raise LP, call EP" },
      A9s: { desc: "Suited ace with flush potential", action: "Raise in LP" },
      "66": { desc: "Set-mining; needs pot odds", action: "Call/raise LP, best multiway" },
      "55": { desc: "Little value without a set", action: "Call LP, single-raised pots" },
      A8s: { desc: "Medium suited ace", action: "Play LP, fold EP" },
      A7s: { desc: "Medium suited ace", action: "Play LP only" },
      A6s: { desc: "Medium suited ace", action: "Play LP only" },
      A5s: { desc: "Wheel + ace-blocker value; a favorite 3-bet bluff", action: "LP only; implied odds matter" },
      A4s: { desc: "Suited ace with a wheel draw", action: "LP only" },
      A3s: { desc: "Bottom of the suited aces", action: "BTN/SB only" },
      A2s: { desc: "Wheel + nut flush, but weak", action: "BTN only" },
      KJo: { desc: "Domination risk; LP only", action: "Raise CO/BTN, fold to a re-raise" },
      QJo: { desc: "Moderate connectivity; needs position", action: "LP only" },
      "98s": { desc: "Strong suited connector", action: "Call/raise LP" },
      "87s": { desc: "Good suited connector", action: "Call LP" },
      "76s": { desc: "Suited connector", action: "Call LP on pot odds" },
      "44": { desc: "Almost no value without a set", action: "Call only at low pot odds" },
      "33": { desc: "Needs to set-mine; speculative", action: "Multiway pots, cheap calls only" },
      "22": { desc: "Lowest pocket pair", action: "Multiway pots, cheap calls only" },
      K10o: { desc: "K-10 offsuit, weak", action: "Occasionally from BTN" },
      Q10o: { desc: "Low-connectivity offsuit", action: "BTN only" },
      J10o: { desc: "Decent offsuit but vulnerable", action: "Occasionally from BTN" },
      Q10s: { desc: "Strong suited broadway, plays well in position", action: "Raise LP, call EP on pot odds" },
      A10o: { desc: "Marginal offsuit ace, domination-prone", action: "LP only" },
      "65s": { desc: "Suited connector; wants multiway/implied odds", action: "Call LP" },
      "54s": { desc: "Low suited connector; speculative", action: "Call LP, cheap multiway pots" },
    },
  },

  spr: {
    effectiveStack: "Effective stack (yours)",
    potSize: "Current pot size",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ pot",
    zones: {
      low: {
        label: "Low SPR (committed)",
        desc: "A big part of the pot is already in. With top pair top kicker or better, consider going all-in — folding can be a mistake here.",
        actions: [["TPTK+", "Consider all-in"], ["Draws", "Pot odds are a must"], ["Weak hands", "Fold carefully"]],
      },
      mid: {
        label: "Medium SPR (flexible)",
        desc: "This is the zone to play strong hands like two pair or better. Protecting your stack becomes important.",
        actions: [["Two pair+", "Value bet"], ["One pair", "Play it by feel"], ["Draws", "Weigh risk vs reward"]],
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
      dead: { name: "💀 Dead zone", desc: "You need to move all-in immediately. There's no room to wait for a better hand — shove your best available hand.", action: "All-in now" },
      red: { name: "🔴 Red zone", desc: "You need to double up soon. Use a push/fold strategy — shove your good hands, fold the rest.", action: "Push/fold" },
      orange: { name: "🟠 Orange zone", desc: "Your stack is shrinking. Tighten your range to strong hands only and look to open-shove.", action: "Tight range" },
      yellow: { name: "🟡 Yellow zone", desc: "The pressure is on. You need to actively gather chips — play aggressively when good spots come up.", action: "Play aggressive" },
      green: { name: "🟢 Green zone", desc: "You have a comfortable stack. Use a full range of strategies — grow your stack with position play and bluffs.", action: "Full strategy" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " is a way to calculate the real cash value of your tournament chips. Even the chip leader's ICM value is lower than their chip share, while short stacks are worth more than theirs. Use it for call/fold decisions at the final table and on the bubble.",
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
    th: { player: "Player", chips: "Chips", chipPct: "Chip %", icmValue: "ICM value", icmPct: "ICM %", diff: "Diff" },
    playerCell: "{medal} P{n}",
    diffPlus: "+diff",
    diffPlusNote: "ICM value above chip share → short-stack protection zone, avoid coin flips",
    diffMinus: "−diff",
    diffMinusNote: "ICM value below chip share → the chip leader's aggression pays off more",
    empty: "Set stacks and prizes above zero to see the ICM result.",
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
        text: "The key point: {b1} by 6.7 points. Because winning only pays 1st-place money, the leader gains less prize value from a coin flip than the chip count suggests. So on the bubble the leader should {b2}, while the short stack (13.3% chips → 16.6% ICM) is worth more than its chips and should {b3} to protect that survival value.",
        b1: "the chip leader's ICM value (33.3%) is lower than their chip share (40%)",
        b2: "apply pressure to short stacks",
        b3: "avoid unnecessary all-in calls",
      },
    },
    deal: {
      badge: "Prize split",
      h2: "ICM deal vs chip chop — splitting the prize pool",
      intro: "Now three players are left and discussing a deal. With stacks of 50% / 30% / 20% and $1,500 of prize money left, the two methods split very differently:",
      th: { player: "Player", chop: "Chip chop", icm: "ICM deal", diff: "Diff" },
      rows: [
        { player: "🥇 Chip leader (50%)", chop: "$750", icm: "$618", diff: "-$132", up: false },
        { player: "🥈 2nd (30%)", chop: "$450", icm: "$485", diff: "+$35", up: true },
        { player: "🥉 Short stack (20%)", chop: "$300", icm: "$397", diff: "+$97", up: true },
      ],
      summary: {
        text: "A chip chop splits by chip share and {b1}; an ICM deal reflects finishing probabilities and is {b2}. Above, the short stack gets $300 with a chip chop but about $397 with an ICM deal — {b3}. Ask for an ICM deal when you're short; propose a chip chop when you're the leader.",
        b1: "favors the chip leader",
        b2: "fairer to short stacks",
        b3: "$97 more",
      },
    },
  },

  guide: {
    badge: "Tools",
    h2: "How to use the 8 Hold'em calculators",
    cards: [
      { title: "Outs calculator", body: "Precisely calculates the chance your draw completes on the flop or turn. See both the Rule of 4 and 2 shortcut and the exact figure at once." },
      { title: "Pot odds & implied odds", body: "Decide whether to call or fold with math. When your opponent is deep, add implied odds for a more accurate decision." },
      { title: "Hand evaluator", body: "Pick cards to check the hand rank. Enter up to 7 cards and it finds the best 5-card combination automatically." },
      { title: "Starting hand strength", body: "Pick your two hole cards to see which of the 169 hands it is and the recommended action by position." },
      { title: "SPR (Stack-to-Pot Ratio)", body: "The stack-to-pot ratio tells you how strong a hand you need. The lower the SPR, the more it favors committing with a strong hand." },
      { title: "Tournament M value", body: "Harrington's M measures the pressure on your tournament stack. Your strategy shifts completely across the green/yellow/orange/red/dead zones." },
      { title: "ICM calculator", body: "The Independent Chip Model converts tournament chips into real prize-money value — essential for call/fold decisions and deal talks on the bubble and final table." },
      { title: "Nash push/fold chart", body: "A 13×13 heads-up chart computed from the Nash equilibrium: which hands to open-shove and which to call with at 1–25bb. A must-have for late-stage tournaments." },
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
    links: [
      { slug: "holdem-tournament", title: "Tournament Strategy", desc: "ICM, the bubble, and final-table play" },
      { slug: "holdem-equity", title: "Poker Equity Explained", desc: "Win %, fold equity, and realization" },
      { slug: "holdem-pot-odds", title: "How to Calculate Pot Odds", desc: "Turn call/fold spots into math" },
      { slug: "holdem-outs", title: "How to Count Outs", desc: "Outs by draw and the 4-2 rule" },
      { slug: "holdem-probability", title: "Poker Odds & Probability", desc: "The core numbers behind every hand" },
      { slug: "holdem-starting-hands-chart", title: "Starting Hands Chart", desc: "Which hands to play by position" },
    ],
  },
};
