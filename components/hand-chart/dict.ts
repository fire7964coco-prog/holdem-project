// Starting-hand-chart UI dictionary — every user-visible string of the chart tool.
//
// `components/hand-chart/hand-chart-tool.tsx` renders the whole page body from one of these
// objects, so each locale ships its own `HandChartDict` (same shape, translated values) and reuses
// the exact same component. `HAND_CHART_DICT_EN` holds the English strings verbatim
// (★2026-10-05 회차 1 구조 전환 — EN SSR 마크업 전후 동일).
//
// Conventions (same as components/calculator/dict.ts)
// - `{name}` placeholders are filled by `fmtNodes()` in hand-chart-tool.tsx. Keep every placeholder.
// - The chart itself (169 cells · 5 tiers · colours), hand codes (AKs, 10-8s), position codes
//   (UTG HJ CO BTN SB) and the "Example hands" column are language-invariant and live in code.
// - 🔴 The chart is a consensus open range from public sources — NOT solver output
//   (docs/solver-factsheet.md). No locale may say the solver computed it or call it «GTO».
//   (The EN strings still say «GTO» — inherited copy, queued in docs/en-first-queue.md.)
// - Optional fields: EN omits them (its markup must stay byte-identical to the pre-refactor page);
//   locales ship them — they carry the ko page's «type vs combo» basis labels (2026-09-12 Q7-a ⑦).

/** Inline rich text — plain string, bold run, or internal link. */
export type RichSeg = string | { b: string } | { href: string; text: string };

export type HandChartDict = {
  /** BCP-47 tag for Number#toLocaleString (combo % decimals). */
  numberLocale: string;
  /** Gap between a number and "%" («12 %» in fr). Omit for none. */
  percentGap?: string;

  /** <SEO> props — must equal the server metadata of the page (check:seo-sync). */
  seo: {
    /** Without the "| HoldemMaster" suffix. */
    title: string;
    description: string;
    /** Locale-prefixed path, e.g. "/en/hand-chart". */
    path: string;
    keywords: string[];
  };

  hero: {
    badge: string;
    h1: string;
    lead: string;
    /** Unit after «169». */
    handsUnit: string;
    /** Unit after «5». */
    positionsUnit: string;
    tapHint: string;
  };

  filter: {
    caption: string;
    /** One-line note under the caption saying what the chip % counts (169 types). Locales only. */
    basisNote?: RichSeg[];
    showAll: string;
    /** Line under the chips when a seat is picked. {pos} = full seat name, {count} = «{n} hands» run, {pct} = whole number. */
    selected: string;
    /** «{n} hands» — the bold count inside `selected`. */
    handsCount: string;
  };

  /** Position full names, aligned by index with UTG · HJ · CO · BTN · SB. */
  positions: [string, string, string, string, string];
  /** «~{n}%» — the rounded type-share printed on legend / table. {n} = whole number (gap + % added by code). */
  typePct: string;

  grid: {
    swipe: string;
    pocketPair: string;
    suited: string;
    offsuit: string;
    /** Tooltip line. {pos} = coloured seat code. */
    openFrom: string;
    legendNote: string;
  };

  legend: {
    heading: string;
    /** Second line under each seat. {pct} = output of typePct. */
    seatLine: string;
    fold: string;
    foldSub: string;
  };

  table: {
    heading: string;
    /** Mobile-only swipe hint above the table. Locales only. */
    swipe?: string;
    position: string;
    hands: string;
    /** Small grey suffix on the «Hands» header (e.g. «(of 169)»). Locales only. */
    handsSub?: string;
    range: string;
    /** Small grey suffix on the «Range» header (e.g. «type / combo»). Locales only. */
    rangeSub?: string;
    examples: string;
    /** «/ combo {pct}» after the type share. Locales only — omit to hide the combo basis. */
    comboCell?: string;
    /** Footnote paragraphs under the table. */
    notes: RichSeg[][];
  };

  why: {
    heading: string;
    /** Four cards, aligned with icons 📍 ⚠️ ♠️ 🔄. */
    items: [WhyItem, WhyItem, WhyItem, WhyItem];
  };

  faqHeading: string;

  related: {
    heading: string;
    items: { href: string; tag: string; title: string; desc: string }[];
  };
};

type WhyItem = { title: string; desc: string };

export const HAND_CHART_DICT_EN: HandChartDict = {
  numberLocale: "en-US",
  seo: {
    title: "Poker Starting Hand Chart — Open Ranges by Position",
    description:
      "Interactive Texas Hold'em starting-hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded GTO open ranges.",
    path: "/en/hand-chart",
    keywords: ["poker starting hand chart", "preflop range chart", "holdem open ranges", "UTG range", "button range", "GTO starting hands"],
  },
  hero: {
    badge: "♠ Interactive starting-hand tool",
    h1: "Poker Starting Hand Chart",
    lead: "All 169 hands color-coded by position (UTG → SB). Tap a position to highlight only the hands you can open from that seat.",
    handsUnit: "hands",
    positionsUnit: "positions",
    tapHint: "Tap · hover for instant view",
  },
  filter: {
    caption: "Pick a position → playable hands highlight",
    showAll: "Show all",
    selected: "{pos} open range · {count} / 169 ({pct}%)",
    handsCount: "{n} hands",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Swipe to see the full chart →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Open from {pos}+",
    legendNote: "Top-right triangle = suited (s) · diagonal = pocket pairs · bottom-left triangle = offsuit (o)",
  },
  legend: {
    heading: "Color legend",
    seatLine: "{pct}",
    fold: "Fold",
    foldSub: "All positions",
  },
  table: {
    heading: "Open range by position",
    position: "Position",
    hands: "Hands",
    range: "Range",
    examples: "Example hands",
    notes: [["* GTO-based approximations — in practice, adjust for table tendencies, stack depth, and opponent ranges."]],
  },
  why: {
    heading: "Why position drives hand selection",
    items: [
      {
        title: "Position = information",
        desc: "The button (BTN) always acts last after the flop. Seeing everyone's bets and checks first makes the same hand far more profitable.",
      },
      {
        title: "UTG has 8 players behind",
        desc: "Open-raising from UTG at a 9-handed table, you don't know how the 8 players behind will react. The chance of a re-raise is high, so speculative hands like suited connectors can't realize their value — tighten to premium hands.",
      },
      {
        title: "The value of suited",
        desc: "A suited hand has roughly a 3–5% equity edge over the same offsuit hand. That's why you can open A8s from the hijack but wait for the button with A8o.",
      },
      {
        title: "The SB dilemma",
        desc: "The small blind always acts first after the flop. Even with a wider range than the button, it realizes less equity, so medium-strength hands become less profitable.",
      },
    ],
  },
  faqHeading: "Frequently asked questions",
  related: {
    heading: "Next steps — related guides",
    items: [
      { href: "/en/blog/holdem-starting-hands-chart", tag: "Deep guide", title: "Starting Hands Chart by Position", desc: "Which hands to open, and why, from every seat" },
      { href: "/en/blog/holdem-when-to-fold", tag: "Folding", title: "When to Fold in Poker", desc: "The discipline that quietly wins the most" },
      { href: "/en/blog/holdem-position-play", tag: "Position", title: "How Position Changes Everything", desc: "Why the button is the most profitable seat" },
      { href: "/en/blog/holdem-hand-rankings", tag: "Rankings", title: "Poker Hand Rankings", desc: "All 10 hands from royal flush to high card" },
      { href: "/en/calculator", tag: "Tool", title: "Poker Odds Calculator", desc: "Exact equity and pot odds for any hand" },
    ],
  },
};
