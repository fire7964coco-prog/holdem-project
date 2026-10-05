"use client";

// Poker-glossary tool — shared by /en/glossary and the locale glossaries.
// ★2026-10-05 로케일 도구 확장 회차 2: app/en/glossary/glossary-client.tsx 를 옮겨 왔다.
//   EN 사전으로 렌더하면 마크업이 전환 전과 바이트 동일해야 한다(게이트) — EN 분기의 JSX는 그대로 두라.
// Strings + terms = components/glossary/dict.ts (`GlossaryDict`).

import { SEO } from "@/components/seo";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import type { GlossaryCat, GlossaryDict, GlossaryTerm } from "./dict";

// ── Categories (keys + colours are language-invariant) ───────
const CATS: { key: GlossaryCat; color: string }[] = [
  { key: "Action", color: "#60a5fa" },
  { key: "Hand", color: "rgb(var(--gold-dark-rgb))" },
  { key: "Position", color: "#22c55e" },
  { key: "Math", color: "#a78bfa" },
  { key: "Board", color: "#22d3ee" },
  { key: "Slang", color: "#fb923c" },
];
const CAT_COLOR: Record<GlossaryCat, string> = Object.fromEntries(CATS.map((c) => [c.key, c.color])) as Record<GlossaryCat, string>;

type Group = { letter: string; items: GlossaryTerm[] };

function groupByLetter(list: GlossaryTerm[], sortLocale: string): Group[] {
  const sorted = [...list].sort((a, b) => a.term.localeCompare(b.term, sortLocale));
  const groups: Group[] = [];
  for (const t of sorted) {
    // NFD: «Á»·«Ü» → A·U so accented initials join their letter section.
    const c = t.term[0].normalize("NFD")[0].toUpperCase();
    const letter = /[A-Z]/.test(c) ? c : "#";
    const last = groups[groups.length - 1];
    if (last && last.letter === letter) last.items.push(t);
    else groups.push({ letter, items: [t] });
  }
  return groups;
}

function groupByCategory(list: GlossaryTerm[], dict: GlossaryDict): Group[] {
  return CATS.map((c) => ({ letter: dict.cats[c.key], items: list.filter((t) => t.cat === c.key) })).filter(
    (g) => g.items.length > 0,
  );
}

export default function GlossaryTool({ dict }: { dict: GlossaryDict }) {
  const TERMS = dict.terms;
  const byCategory = dict.grouping === "category";
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<GlossaryCat | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TERMS.filter((t) => {
      const catOk = activeCat === "All" || t.cat === activeCat;
      const qOk =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q) ||
        (t.aka ?? []).some((a) => a.toLowerCase().includes(q));
      return catOk && qOk;
    });
  }, [TERMS, query, activeCat]);

  const groups = useMemo(
    () => (byCategory ? groupByCategory(filtered, dict) : groupByLetter(filtered, dict.sortLocale)),
    [filtered, byCategory, dict],
  );

  // Split around placeholders so the SSR text nodes match the pre-refactor EN markup exactly.
  const [badgeBefore, badgeAfter] = dict.hero.badge.split("{n}");
  const [emptyBefore, emptyAfter] = dict.empty.title.split("{q}");

  return (
    <>
      <SEO
        title={dict.seo.title}
        description={dict.seo.description}
        keywords={dict.seo.keywords}
        path={dict.seo.path}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-ink text-xs font-bold tracking-wide mb-5">
            {badgeBefore}{TERMS.length}{badgeAfter}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {dict.hero.h1}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {dict.hero.leadBefore}<strong className="text-foreground">{dict.hero.leadStrong}</strong>{dict.hero.leadAfter}
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
            placeholder={dict.searchPlaceholder}
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
            {dict.allLabel}
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
                {dict.cats[c.key]}
              </button>
            );
          })}
        </div>

        {/* Terms grouped by letter (or by category for non-Latin scripts) */}
        {groups.length > 0 ? (
          <div className="space-y-8">
            {groups.map((g) => (
              <section key={g.letter}>
                <div className="flex items-center gap-3 mb-3">
                  {byCategory ? (
                    <span className="text-lg font-black text-primary-ink/80 font-serif whitespace-nowrap">{g.letter}</span>
                  ) : (
                    <span className="text-2xl font-black text-primary-ink/80 font-serif w-7">{g.letter}</span>
                  )}
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
                          {dict.cats[item.cat]}
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
            <p className="font-semibold">{emptyBefore}{query}{emptyAfter}</p>
            <p className="text-sm mt-1">{dict.empty.hint}</p>
          </div>
        )}

        {/* Related pages */}
        <nav aria-label={dict.related.ariaLabel} className="mt-14">
          <h2 className="text-base font-bold text-muted-foreground mb-4">{dict.related.heading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {dict.related.items.map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 hover:bg-primary/5 transition-all text-center group h-full">
                  <div className="font-bold text-sm text-foreground group-hover:text-primary-ink transition-colors">{label}</div>
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
