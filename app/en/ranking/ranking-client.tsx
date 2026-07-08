"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Shield, Clock, ChevronRight, Award } from "lucide-react";
import { SEO } from "@/components/seo";

const SITES = [
  {
    rank: 1,
    name: "GGPoker",
    logo: "GG",
    logoColor: "from-blue-600 to-blue-800",
    rating: 4.9,
    badge: "EDITOR'S CHOICE",
    badgeColor: "bg-yellow-500",
    license: "Isle of Man",
    founded: "2014",
    bonus: "100% first-deposit bonus up to $600",
    minDeposit: "$10",
    withdrawal: "Within 24 hours",
    pros: ["World's largest traffic", "Bad Beat Jackpot", "Rush & Cash fast-fold", "Huge tournament schedule", "Slick mobile app"],
    cons: ["Tough games for beginners", "VPN needed in some regions"],
    tags: ["Beginner-friendly", "Mobile app", "Big tournaments"],
    review: "GGPoker currently boasts the highest traffic of any online poker site in the world. It holds an exclusive online partnership with the WSOP and runs WSOP events online every year. With a wide range of game formats and stake levels, there's action at every hour.",
    href: "#",
  },
  {
    rank: 2,
    name: "PokerStars",
    logo: "PS",
    logoColor: "from-red-600 to-red-800",
    rating: 4.7,
    badge: "MOST POPULAR",
    badgeColor: "bg-red-600",
    license: "Isle of Man, Malta",
    founded: "2001",
    bonus: "10 free Spin & Go tickets + StarsCoin",
    minDeposit: "$20",
    withdrawal: "1–3 days",
    pros: ["Longest track record & trust", "WCOOP & SCOOP major series", "Best-in-class software", "Widest game variety", "Poker tracker support"],
    cons: ["High-level competition", "Complex bonus clearing"],
    tags: ["Industry leader", "Tournament powerhouse", "Rock-solid software"],
    review: "Since launching in 2001, PokerStars has stayed at or near the top of the industry for over 20 years. It runs multi-million-dollar tournament series like WCOOP and SCOOP every year, and its stable software and deep game variety still make it a favorite for players worldwide.",
    href: "#",
  },
  {
    rank: 3,
    name: "888poker",
    logo: "888",
    logoColor: "from-orange-500 to-orange-700",
    rating: 4.5,
    badge: "BEST BONUS",
    badgeColor: "bg-green-600",
    license: "Gibraltar, Malta",
    founded: "2002",
    bonus: "$88 no-deposit + 100% up to $400",
    minDeposit: "$10",
    withdrawal: "1–5 days",
    pros: ["Top no-deposit bonus", "Separate beginner tables", "Fast withdrawals", "888poker LIVE events", "Mobile optimized"],
    cons: ["Less traffic than GGPoker", "Limited high stakes"],
    tags: ["No-deposit bonus", "Beginner-friendly", "Fast withdrawals"],
    review: "888poker is famous for handing out $88 free just for signing up. It runs separate tables for beginners and processes withdrawals quickly, which keeps its trust rating high. Its annual 888poker LIVE series also connects online play to offline tournaments.",
    href: "#",
  },
  {
    rank: 4,
    name: "IDNPoker",
    logo: "IDN",
    logoColor: "from-purple-600 to-purple-800",
    rating: 4.3,
    badge: "ASIA #1",
    badgeColor: "bg-blue-600",
    license: "PAGCOR (Philippines)",
    founded: "2010",
    bonus: "Up to 0.5% weekly cashback + referral bonus",
    minDeposit: "$10",
    withdrawal: "Instant–24 hours",
    pros: ["Asia's #1 traffic", "Local & crypto payments", "Mobile-only app", "Low rake", "Softer fields"],
    cons: ["Few Western regulars", "Limited game variety"],
    tags: ["Asia's largest", "Recreational-heavy", "Mobile app"],
    review: "IDNPoker is the largest online poker network in Asia, used mainly by players across East and Southeast Asia. Its biggest draws are soft, recreational-heavy fields and flexible local payment options — a comfortable place to build a bankroll away from the toughest Western regulars.",
    href: "#",
  },
  {
    rank: 5,
    name: "WPT Global",
    logo: "WPT",
    logoColor: "from-emerald-600 to-emerald-800",
    rating: 4.1,
    badge: "TOURNAMENT KING",
    badgeColor: "bg-purple-600",
    license: "Kahnawake (Canada)",
    founded: "2021",
    bonus: "Free WPT Online Series tickets",
    minDeposit: "$20",
    withdrawal: "2–5 days",
    pros: ["World Poker Tour tie-in", "Big GTD tournaments", "Pro content", "Growing fast", "Streaming integration"],
    cons: ["Still in its growth stage", "Less traffic than the top sites"],
    tags: ["WPT official", "Live tie-in", "Pro events"],
    review: "WPT Global is the official online partner of the World Poker Tour. Through online satellites tied to WPT live events, it offers a real shot at a seat in an actual WPT tournament. It's a fast-growing site with a bright future.",
    href: "#",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`w-4 h-4 ${i <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`} />
      ))}
      <span className="ml-1.5 font-bold text-yellow-400 text-sm">{rating}/5</span>
    </div>
  );
}

export default function RankingEn() {
  const jsonLd = [
    {
      "@type": "ItemList",
      "name": "2026 Best Online Poker Sites Ranking",
      "description": "HoldemMaster's independently tested ranking of the best online Texas Hold'em sites for 2026",
      "itemListElement": SITES.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": s.name,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.holdemmaster.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Top 5 Online Poker Sites", "item": "https://www.holdemmaster.com/en/ranking" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Best Online Poker Sites 2026 — Top 5 Tested & Ranked"
        description="Not sure which poker site to trust? Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared."
        keywords="best online poker sites, online poker site rankings, GGPoker review, PokerStars review, 888poker bonus, online poker comparison, IDNPoker, poker bonus"
        canonical="https://www.holdemmaster.com/en/ranking"
        schema={jsonLd}
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-bold mb-6">
            <Award className="w-4 h-4" /> Last updated: 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">
            Online Poker Sites<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-primary">Top 5 Ranking</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Not sure how to find a <strong className="text-foreground">safe poker site</strong>? Start here.
            This is our ranking of <strong className="text-foreground">online poker sites</strong> the HoldemMaster team
            tested end-to-end — signup, deposit, play, and withdrawal.
            We weighed licensing, security, traffic, and bonuses.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
            {[
              { icon: Shield, text: "Independently tested" },
              { icon: CheckCircle, text: "License verified" },
              { icon: Clock, text: "Updated monthly" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
          {SITES.map((site, idx) => (
            <motion.div
              key={site.rank}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              {/* Top bar */}
              <div className={`flex items-center gap-4 p-5 border-b border-border bg-background/40`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${site.logoColor} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                  {site.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded text-white ${site.badgeColor}`}>
                      #{idx + 1} · {site.badge}
                    </span>
                    {site.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-background border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{site.name}</h2>
                  <StarRating rating={site.rating} />
                </div>
                <div className="hidden md:flex flex-col items-end gap-2">
                  <a href={site.href} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                    Read review
                  </a>
                  <a href={site.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">Official site →</a>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Info */}
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{site.review}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Pros</div>
                      {site.pros.map(p => (
                        <div key={p} className="flex items-center gap-1.5 text-xs text-foreground mb-1">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {p}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Cons</div>
                      {site.cons.map(c => (
                        <div key={c} className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                          <span className="w-3.5 h-3.5 flex-shrink-0 text-center text-red-400">✕</span> {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Side stats */}
                <div className="bg-background rounded-xl p-4 flex flex-col gap-3 border border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">🎁 Bonus</div>
                    <div className="text-sm font-bold text-primary">{site.bonus}</div>
                  </div>
                  <div className="border-t border-border pt-3 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-muted-foreground">Min deposit</div>
                      <div className="font-bold text-foreground">{site.minDeposit}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Withdrawal</div>
                      <div className="font-bold text-foreground">{site.withdrawal}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">License</div>
                      <div className="font-bold text-foreground">{site.license}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Founded</div>
                      <div className="font-bold text-foreground">{site.founded}</div>
                    </div>
                  </div>
                  <a href={site.href} className="w-full text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all mt-1 md:hidden">
                    Read review
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto px-4 mt-10 p-5 bg-card border border-border rounded-xl text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">⚠️ Important notice:</strong> This ranking is provided for informational purposes only. Online poker may be restricted by the laws of your country of residence — always check your local legal requirements. You must be of legal age to play (18+/21+ depending on jurisdiction). This site provides poker information and educational content and does not promote real-money gambling.
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Before you start playing</h2>
          <p className="text-muted-foreground text-sm mb-6">Learn the basic rules and strategy before you pick a site.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/en/blog/texas-holdem-rules-for-beginners" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Learn the basic rules <ChevronRight className="w-4 h-4" />
            </a>
            <a href="/en/blog/holdem-strategy" className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-all font-bold text-sm flex items-center justify-center gap-2">
              See the strategy guide <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
