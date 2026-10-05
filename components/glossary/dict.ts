// Poker-glossary UI dictionary — every user-visible string of the glossary tool + its term list.
//
// `components/glossary/glossary-tool.tsx` renders the whole page body from one of these objects,
// so each locale ships its own `GlossaryDict` (same shape, translated values) and reuses the exact
// same component. `GLOSSARY_DICT_EN` holds the English strings verbatim
// (★2026-10-05 로케일 도구 확장 회차 2 구조 전환 — EN SSR 마크업 전후 동일 · docs/tools-locale-rollout-plan.md).
//
// Conventions
// - `{n}` / `{q}` placeholders are filled in glossary-tool.tsx. Keep every placeholder.
// - Category keys (Action·Hand·…) and their colours are language-invariant and live in code;
//   only the visible labels come from `cats`.
// - 🔴 Term definitions in a locale = that locale's `holdem-glossary` post wording, reused verbatim
//   (the post and the tool must say the same thing). Where the post has no entry, translate the EN
//   desc with the locale's corpus terms and mark it in the dict file's header comment.
// - §13: hand examples, numbers and card codes are invariant — never «improve» them in translation.

export type GlossaryCat = "Action" | "Hand" | "Position" | "Math" | "Board" | "Slang";

export type GlossaryTerm = {
  /** Display name in the locale's own table vocabulary (e.g. «ナッツ», «Nuts»). */
  term: string;
  cat: GlossaryCat;
  desc: string;
  /** Extra search keys (English original, common spellings). Not displayed. */
  aka?: string[];
};

export type GlossaryDict = {
  /** BCP-47 tag for localeCompare sorting. */
  sortLocale: string;
  /**
   * "letter" = A–Z sections (Latin-script locales).
   * "category" = one section per category in `cats` order (ja · zh · zh-hant · hi — first-letter
   *   grouping is meaningless there). Items keep the array order inside a section.
   */
  grouping: "letter" | "category";

  /** <SEO> props — must equal the server metadata of the page (check:seo-sync). */
  seo: {
    /** Without the "| HoldemMaster" suffix. */
    title: string;
    description: string;
    keywords: string;
    path: string;
  };

  hero: {
    /** «{n}» = number of terms. */
    badge: string;
    h1: string;
    /** Lead sentence split around one bold run. */
    leadBefore: string;
    leadStrong: string;
    leadAfter: string;
  };

  searchPlaceholder: string;
  allLabel: string;
  cats: Record<GlossaryCat, string>;

  empty: {
    /** «{q}» = the query. */
    title: string;
    hint: string;
  };

  related: {
    ariaLabel: string;
    heading: string;
    items: { href: string; label: string; desc: string }[];
  };

  terms: GlossaryTerm[];
};

import { TERMS as TERMS_EN } from "@/app/en/glossary/glossary-data";

export const GLOSSARY_DICT_EN: GlossaryDict = {
  sortLocale: "en",
  grouping: "letter",
  seo: {
    title: "Poker Glossary — Texas Hold'em Terms Explained (A–Z)",
    description:
      "A clear, accurate glossary of Texas Hold'em terms: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt and more. Search or filter 45+ essential poker terms.",
    keywords:
      "poker glossary, texas holdem terms, poker terminology, what does nuts mean poker, outs meaning, pot odds definition, 3-bet meaning, c-bet, ICM poker, SPR poker",
    path: "/en/glossary",
  },
  hero: {
    badge: "♠ {n} terms · searchable A–Z",
    h1: "Poker Glossary",
    leadBefore: "Every Texas Hold'em term you'll hear at the table — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " and more — defined clearly and correctly. Search or filter by category.",
  },
  searchPlaceholder: "Search a term (e.g. nuts, pot odds, outs)...",
  allLabel: "All",
  cats: { Action: "Action", Hand: "Hand", Position: "Position", Math: "Math", Board: "Board", Slang: "Slang" },
  empty: { title: "No terms found for “{q}”.", hint: "Try a different keyword or category." },
  related: {
    ariaLabel: "Related guides",
    heading: "Keep learning",
    items: [
      { href: "/en/blog/texas-holdem-rules-for-beginners", label: "The Rules", desc: "Blinds, showdown, the basics" },
      { href: "/en/blog/holdem-hand-rankings", label: "Hand Rankings", desc: "All 10 hands, ranked" },
      { href: "/en/blog/holdem-strategy", label: "Strategy", desc: "Position, pot odds, bluffing" },
      { href: "/en/hand-chart", label: "Starting Hands", desc: "Open ranges by position" },
      { href: "/en/calculator", label: "Calculator", desc: "Odds, pot odds, ICM" },
    ],
  },
  terms: TERMS_EN,
};
