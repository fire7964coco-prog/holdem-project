"use client";

import { SEO } from "@/components/seo";
// ★TERMS는 `glossary-data.ts`로 옮겼다 — 서버 page.tsx의 DefinedTermSet과 **같은 배열**을 써야 한다.
import { TERMS, type Term } from "./glossary-data";
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


  return (
    <>
      <SEO
        title="Poker Glossary — Texas Hold'em Terms Explained (A–Z)"
        description="A clear, accurate glossary of Texas Hold'em terms: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt and more. Search or filter 45+ essential poker terms."
        keywords="poker glossary, texas holdem terms, poker terminology, what does nuts mean poker, outs meaning, pot odds definition, 3-bet meaning, c-bet, ICM poker, SPR poker"
        path="/en/glossary"
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
