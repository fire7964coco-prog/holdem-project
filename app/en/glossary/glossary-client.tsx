"use client";

import { SEO } from "@/components/seo";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

// ── Categories ──────────────────────────────────────────────
type Cat = "Action" | "Hand" | "Position" | "Math" | "Board" | "Slang";
const CATS: { key: Cat; color: string }[] = [
  { key: "Action", color: "#60a5fa" },
  { key: "Hand", color: "#d4af37" },
  { key: "Position", color: "#22c55e" },
  { key: "Math", color: "#a78bfa" },
  { key: "Board", color: "#22d3ee" },
  { key: "Slang", color: "#fb923c" },
];
const CAT_COLOR: Record<Cat, string> = Object.fromEntries(CATS.map((c) => [c.key, c.color])) as Record<Cat, string>;

// ── Terms (accuracy-checked) ────────────────────────────────
type Term = { term: string; cat: Cat; desc: string };
const TERMS: Term[] = [
  { term: "3-Bet", cat: "Action", desc: "The first re-raise of a hand. The big blind counts as the first bet and the open-raise as the second, so the re-raise is the 3-bet. It signals a very strong hand — or a bluff." },
  { term: "All-in", cat: "Action", desc: "Betting your entire stack in one move. Once you're all-in you can't bet again, and a side pot forms if opponents have more chips behind." },
  { term: "Ante", cat: "Action", desc: "A small forced bet posted by every player before the deal to build the pot. Common in later tournament levels, unlike blinds, which only two players post." },
  { term: "Backdoor", cat: "Board", desc: "A draw that needs both the turn and the river to complete — for example, a backdoor flush when you flop just one extra card of your suit." },
  { term: "Bad Beat", cat: "Slang", desc: "Losing a hand you were a big favorite to win, usually to an unlikely turn or river card." },
  { term: "Bankroll", cat: "Slang", desc: "The money you've set aside specifically for poker, kept separate from everyday finances so downswings don't hurt your life." },
  { term: "Blinds", cat: "Action", desc: "Forced bets posted before the cards are dealt: the small blind (SB) sits left of the button, the big blind (BB) next. They create action every hand." },
  { term: "Bluff", cat: "Action", desc: "Betting or raising with a weak hand to make a better hand fold. Reckless bluffing bleeds chips; well-timed bluffs win pots you'd otherwise lose." },
  { term: "Board", cat: "Board", desc: "The community cards in the middle of the table. A 'wet' board is draw-heavy and dangerous; a 'dry' board offers few draws." },
  { term: "Button (BTN)", cat: "Position", desc: "The dealer position, marked by a round disc. It acts last after the flop — the most profitable seat — and moves one seat clockwise each hand." },
  { term: "Call", cat: "Action", desc: "Matching the current bet to stay in the hand. A player who calls far too often is called a 'calling station'." },
  { term: "Check", cat: "Action", desc: "Passing the action without betting — only possible when no one has bet before you in the round." },
  { term: "Check-Raise", cat: "Action", desc: "Checking first, then raising after an opponent bets. A powerful move to trap opponents holding a strong hand, or to punish habitual bettors." },
  { term: "Continuation Bet (C-Bet)", cat: "Action", desc: "A bet on the flop by the player who raised preflop, keeping the initiative they already had. Effective because opponents often miss the flop." },
  { term: "Cooler", cat: "Slang", desc: "A hand where two very strong holdings collide and someone was always going to lose big — like a set running into a higher set. Rarely avoidable." },
  { term: "Draw", cat: "Hand", desc: "An unfinished hand that becomes strong if the right card arrives — most often a flush draw or a straight draw." },
  { term: "Equity", cat: "Math", desc: "Your share of the pot based on your chance to win. A hand that's 60% to win has 60% equity in the current pot." },
  { term: "Flop", cat: "Board", desc: "The first three community cards, dealt at the same time, followed by the second betting round." },
  { term: "Fold", cat: "Action", desc: "Giving up the hand and forfeiting any chips already in the pot. It stops further losses. Also called 'mucking'." },
  { term: "GTO", cat: "Math", desc: "Game Theory Optimal — a balanced, unexploitable strategy that can't be beaten long-term, even when opponents know exactly what you're doing." },
  { term: "Gutshot", cat: "Hand", desc: "An inside straight draw needing one specific rank — just 4 outs. Example: 5-6-8-9 needing a 7." },
  { term: "Hand Range", cat: "Math", desc: "The full set of hands an opponent could hold in a given spot. 'Putting someone on a range' means narrowing down their likely holdings." },
  { term: "ICM", cat: "Math", desc: "Independent Chip Model — converts tournament chips into real cash-prize value. Essential for correct call/fold decisions on the bubble and at the final table." },
  { term: "Kicker", cat: "Hand", desc: "A side card that breaks a tie when two players share the same made hand. Example: on an ace pair, A-K beats A-Q because the king outkicks the queen." },
  { term: "Limp", cat: "Action", desc: "Just calling the big blind preflop instead of raising. Usually a passive, weak play that invites others in cheaply." },
  { term: "Nuts", cat: "Hand", desc: "The best possible hand given the current board. If you 'have the nuts', you cannot lose the hand as it stands." },
  { term: "Offsuit", cat: "Hand", desc: "Two cards of different suits (e.g., A♠K♦). Slightly weaker than the suited version of the same hand because it's far less likely to make a flush." },
  { term: "Outs", cat: "Math", desc: "The cards left in the deck that improve you to the winning hand. A flush draw has 9 outs; an open-ended straight draw has 8." },
  { term: "Overpair", cat: "Hand", desc: "A pocket pair higher than every card on the board — for example, QQ on a J-7-3 flop." },
  { term: "Position", cat: "Position", desc: "Where you act in the betting order. Acting later ('in position') is a major edge because you see opponents act before you decide." },
  { term: "Pot", cat: "Board", desc: "The total chips wagered in a hand. The winner takes it all; tied hands split it evenly (a split pot)." },
  { term: "Pot Odds", cat: "Math", desc: "The ratio of your call to the pot: call ÷ (pot + call). If your chance to win beats that percentage, calling is profitable long-term." },
  { term: "Preflop", cat: "Board", desc: "The first betting round, before any community cards, when each player has only their two hole cards." },
  { term: "Rake", cat: "Slang", desc: "The small cut the house or poker site takes from each pot or tournament entry — how the room makes money." },
  { term: "Raise", cat: "Action", desc: "Increasing the current bet. It seizes initiative and pressures opponents to fold or commit more chips." },
  { term: "River", cat: "Board", desc: "The fifth and final community card, followed by the last betting round before showdown." },
  { term: "Semi-Bluff", cat: "Action", desc: "Betting a hand that's weak now but can improve — like a flush draw. Safer than a pure bluff because you can still hit and win if called." },
  { term: "Set", cat: "Hand", desc: "Three of a kind made with a pocket pair plus one matching board card. Very well disguised — opponents rarely see it coming. (Compare 'Trips'.)" },
  { term: "Showdown", cat: "Board", desc: "After the final bet, remaining players reveal their cards. The best five-card hand wins the pot." },
  { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — effective stack ÷ pot. A low SPR favors committing with strong made hands; a high SPR rewards draws and post-flop skill." },
  { term: "Stack", cat: "Slang", desc: "The chips a player has on the table. A 'deep stack' is large relative to the blinds; a 'short stack' is small." },
  { term: "Tilt", cat: "Slang", desc: "Playing emotionally and poorly after a bad beat or frustration. It's the leak that costs most players more than any single hand ever does." },
  { term: "Trips", cat: "Hand", desc: "Three of a kind made with one hole card and a pair on the board. Stronger-looking to opponents than a set, so it gets less value. (Compare 'Set'.)" },
  { term: "Turn", cat: "Board", desc: "The fourth community card, dealt after the flop, followed by its own betting round." },
  { term: "Value Bet", cat: "Action", desc: "Betting a strong hand to get called by a worse one — the opposite of a bluff, and where most long-term profit comes from." },
  { term: "Wheel", cat: "Hand", desc: "The lowest possible straight, A-2-3-4-5, in which the ace plays low." },
];

function groupByLetter(list: Term[]) {
  const sorted = [...list].sort((a, b) => a.term.localeCompare(b.term, "en"));
  const groups: { letter: string; items: Term[] }[] = [];
  for (const t of sorted) {
    const c = t.term[0].toUpperCase();
    const letter = /[A-Z]/.test(c) ? c : "#";
    const last = groups[groups.length - 1];
    if (last && last.letter === letter) last.items.push(t);
    else groups.push({ letter, items: [t] });
  }
  return groups;
}

export default function GlossaryEn() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<Cat | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TERMS.filter((t) => {
      const catOk = activeCat === "All" || t.cat === activeCat;
      const qOk = !q || t.term.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, activeCat]);

  const groups = useMemo(() => groupByLetter(filtered), [filtered]);

  const jsonLd = [
    {
      "@type": "FAQPage",
      "mainEntity": TERMS.slice(0, 8).map((t) => ({
        "@type": "Question",
        "name": `What does "${t.term}" mean in poker?`,
        "acceptedAnswer": { "@type": "Answer", "text": t.desc },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.holdemmaster.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Poker Glossary", "item": "https://www.holdemmaster.com/en/glossary" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Poker Glossary — Texas Hold'em Terms Explained (A–Z)"
        description="A clear, accurate glossary of Texas Hold'em terms: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt and more. Search or filter 45+ essential poker terms."
        keywords="poker glossary, texas holdem terms, poker terminology, what does nuts mean poker, outs meaning, pot odds definition, 3-bet meaning, c-bet, ICM poker, SPR poker"
        canonical="https://www.holdemmaster.com/en/glossary"
        schema={jsonLd}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wide mb-5">
            ♠ {TERMS.length} terms · searchable A–Z
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Poker Glossary
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every Texas Hold'em term you'll hear at the table — <strong className="text-foreground">nuts, outs, pot odds,
            3-bet, ICM</strong> and more — defined clearly and correctly. Search or filter by category.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-5">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border border-primary/30 rounded-xl bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            placeholder="Search a term (e.g. nuts, pot odds, outs)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Category filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCat("All")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
              activeCat === "All"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            All
          </button>
          {CATS.map((c) => {
            const active = activeCat === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActiveCat(active ? "All" : c.key)}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all"
                style={
                  active
                    ? { backgroundColor: c.color, borderColor: c.color, color: "#0a0a0a" }
                    : { borderColor: c.color + "55", color: c.color }
                }
              >
                {c.key}
              </button>
            );
          })}
        </div>

        {/* Terms grouped by letter */}
        {groups.length > 0 ? (
          <div className="space-y-8">
            {groups.map((g) => (
              <section key={g.letter}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-primary/80 font-serif w-7">{g.letter}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {g.items.map((item) => (
                    <div
                      key={item.term}
                      className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h2 className="text-base font-bold text-foreground leading-tight">{item.term}</h2>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: CAT_COLOR[item.cat] + "1f", color: CAT_COLOR[item.cat] }}
                        >
                          {item.cat}
                        </span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <div className="text-4xl mb-3">🔍</div>
            <p className="font-semibold">No terms found for &ldquo;{query}&rdquo;.</p>
            <p className="text-sm mt-1">Try a different keyword or category.</p>
          </div>
        )}

        {/* Related pages */}
        <nav aria-label="Related guides" className="mt-14">
          <h2 className="text-base font-bold text-muted-foreground mb-4">Keep learning</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { href: "/en/blog/texas-holdem-rules-for-beginners", label: "The Rules", desc: "Blinds, showdown, the basics" },
              { href: "/en/blog/holdem-hand-rankings", label: "Hand Rankings", desc: "All 10 hands, ranked" },
              { href: "/en/blog/holdem-strategy", label: "Strategy", desc: "Position, pot odds, bluffing" },
              { href: "/en/hand-chart", label: "Starting Hands", desc: "Open ranges by position" },
              { href: "/en/calculator", label: "Calculator", desc: "Odds, pot odds, ICM" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 hover:bg-primary/5 transition-all text-center group h-full">
                  <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
