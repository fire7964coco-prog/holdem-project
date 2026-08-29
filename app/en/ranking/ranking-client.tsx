"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Shield, AlertTriangle, Scale, BookOpen, BookText, Info, Calculator, LayoutGrid, HelpCircle, ExternalLink } from "lucide-react";
import { SEO } from "@/components/seo";
// ★SITES·FAQS는 `ranking-data.ts`로 옮겼다 — 서버 page.tsx의 JSON-LD와 **같은 배열**을 써야 한다.
import { SITES, FAQS } from "./ranking-data";

// Public information (official URL, license jurisdiction, founding, notable facts) about
// widely known online poker sites. This is a factual summary — not a ranking or endorsement.
// Legality and availability must be verified by the reader. (As of 2026-07)

const CRITERIA = [
  {
    icon: Shield,
    title: "License & regulator",
    body: "Look for a license from a credible regulator (Malta MGA, UK UKGC, Isle of Man). Costa Rica/Curaçao licensing is comparatively light-touch, and unclear company or license details are a warning sign.",
  },
  {
    icon: CheckCircle,
    title: "Fairness & security",
    body: "Check for RNG fairness audits (BMM, eCOGRA), SSL encryption, and account security such as 2FA. No audit or security information at all is a red flag.",
  },
  {
    icon: Scale,
    title: "Fund segregation & payouts",
    body: "Confirm that player funds are held separately from operating funds, and check real withdrawal reports and processing speed. Frequent payout delays or refusals are a reason to walk away.",
  },
  {
    icon: Info,
    title: "Reputation & track record",
    body: "Look for a long, transparent operating history and a clear company address and support channel. Be wary of anonymous operations, sites reachable only via messaging apps, or unsolicited 'agent' pitches.",
  },
];

const RED_FLAGS = [
  "No or unverifiable license / company information",
  "Unrealistic ads like “100% guaranteed” or “guaranteed profit”",
  "Repeated reports of delayed or refused withdrawals (scam signal)",
  "No official site or app — runs only via Telegram / messaging apps",
  "Aggressive signup/deposit pressure or shady “agent” recruitment",
  "Unlicensed underground sites — using or promoting them carries legal risk",
];

export default function RankingEn() {

  return (
    <>
      <SEO
        /* 🔴 2026-08-29 — page.tsx의 서버 metadata와 **같아야 한다**(seo.tsx가 런타임에 덮어쓴다).
           서버가 title:{absolute:"… | HoldemMaster"}이므로 여기엔 **접미를 빼고** 적는다(seo.tsx가 붙인다). */
        title="Best Online Poker Sites 2026 — Top 5 Tested & Ranked"
        description="Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared."
        keywords="best online poker sites, safe online poker, how to choose a poker site, online poker comparison, GGPoker, PokerStars, 888poker, IDNPoker, WPT Global, avoid poker scams"
        path="/en/ranking"
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-bold mb-6">
            <Shield className="w-4 h-4" /> Safety & legality first
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">
            Online Poker Sites<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-primary">How to Choose Safely</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Looking for an <strong className="text-foreground">online poker site</strong>? Start with the major sites below,
            then use our <strong className="text-foreground">safety criteria and scam warning signs</strong> to tell the good from the bad.
            Where you play matters as much as <strong className="text-foreground">how you spot a safe site</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
            {[
              { icon: Info, text: "Major site info" },
              { icon: Shield, text: "Safety checklist" },
              { icon: AlertTriangle, text: "Scam warning signs" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major sites */}
      <section className="py-14 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 text-center">
            Major online poker sites, at a glance
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-6 max-w-2xl mx-auto">
            A factual summary of <strong className="text-foreground">publicly known details (founding, license jurisdiction, features)</strong> for widely
            known sites. This is not a ranking or endorsement — check the <strong className="text-foreground">safety criteria</strong> below and verify the <strong className="text-foreground">laws where you live</strong> yourself.
          </p>
          <div className="flex flex-col gap-6">
            {SITES.map((site, idx) => (
              <motion.div
                key={site.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="flex items-center gap-4 p-5 border-b border-border bg-background/40">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${site.logoColor} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                    {site.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground">{site.name}</h3>
                    <span className="text-xs text-primary font-semibold">{site.tag}</span>
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors text-sm font-bold whitespace-nowrap"
                  >
                    Official site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{site.note}</p>
                    <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Notable features</div>
                    {site.features.map(f => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-foreground mb-1">
                        <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-background rounded-xl p-4 flex flex-col gap-3 border border-border">
                    <div>
                      <div className="text-muted-foreground text-xs">License</div>
                      <div className="font-bold text-foreground text-sm">{site.license}</div>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="text-muted-foreground text-xs">Founded</div>
                      <div className="font-bold text-foreground text-sm">{site.founded}</div>
                    </div>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="sm:hidden inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors text-sm font-bold mt-1"
                    >
                      Official site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/80 text-center mt-6">
            ※ External links point to each site's official domain. HoldemMaster has no affiliate or sponsorship relationship with them. Access and legality vary by region.
          </p>
        </div>
      </section>

      {/* Criteria */}
      <section className="py-14 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 text-center">
            4 criteria for choosing a safe poker site
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-10 max-w-2xl mx-auto">
            If even one of these can't be confirmed, be careful — no matter how flashy the advertising is.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CRITERIA.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">Warning signs of a scam site</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RED_FLAGS.map(flag => (
              <div key={flag} className="flex items-start gap-2.5 bg-card border border-border rounded-xl p-4">
                <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>
                <span className="text-sm text-foreground leading-relaxed">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — ★서버 page.tsx의 FAQPage 스키마와 **같은 FAQS 배열**을 쓴다.
          스키마에만 있고 화면에 없으면 구글 FAQPage 스펙 위반이고, LLM도 읽지 못한다. */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">Online poker sites — FAQ</h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground text-sm mb-2 flex items-start gap-2">
                  <span className="text-primary font-serif text-base flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free tools */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-2">
              <Calculator className="w-4 h-4" /> Free — no signup, no deposit
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Before you pick a site — sharpen your game for free
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
              All free, with no real-money value. Building skill first is the surest investment on any site.
            </p>
          </div>

          {/* Main: calculator */}
          <a href="/en/calculator" className="group block bg-gradient-to-br from-primary/15 to-background border border-primary/40 rounded-2xl p-6 mb-4 hover:border-primary transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Calculator className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-lg font-bold text-foreground mb-0.5">Free Poker Odds Calculator — Calculate now ▶</div>
                <div className="text-sm text-muted-foreground">Instantly compute your equity and pot odds. See exactly when a call or fold is +EV, by the numbers.</div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Sub: quiz · chart · glossary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/en/quiz", icon: HelpCircle, title: "Poker Quiz", desc: "Test your hand-reading & odds sense" },
              { href: "/en/hand-chart", icon: LayoutGrid, title: "Starting Hand Chart", desc: "See which hands to play at a glance" },
              { href: "/en/glossary", icon: BookText, title: "Poker Glossary", desc: "Every term, clearly explained" },
            ].map(({ href, icon: Icon, title, desc }) => (
              <a key={href} href={href} className="group bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-colors">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <div className="font-bold text-foreground text-sm mb-0.5">{title}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & responsible gaming */}
      <section className="py-10 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-5 bg-card border border-border rounded-xl text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">⚠️ Legal & responsible gaming:</strong> This page is for information and education only, and does not rank or endorse any operator.
            Online poker is regulated differently around the world and <strong className="text-foreground">may be restricted where you live — always check your local laws.</strong>
            You must be of legal age (18+/21+ depending on jurisdiction). Gamble responsibly; if gambling stops being fun,
            seek help — for example <strong className="text-foreground">BeGambleAware.org</strong> or a support service in your country.
          </div>
        </div>
      </section>

      {/* Learn first */}
      <section className="py-16 bg-card border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-3">
            <BookOpen className="w-4 h-4" /> Before you pick a site
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Building skill first is the surest investment</h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
            On any site, you won't last long without the rules, strategy, and bankroll basics.
            Get a solid foundation with HoldemMaster's free guides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              { href: "/en/blog/texas-holdem-rules-for-beginners", title: "Texas Hold'em Rules", desc: "From card dealing to betting — start here" },
              { href: "/en/blog/holdem-hand-rankings", title: "Poker Hand Rankings", desc: "What beats what, in order" },
              { href: "/en/blog/holdem-strategy", title: "Strategy Roadmap", desc: "Preflop to bankroll, step by step" },
              { href: "/en/blog/holdem-pot-odds", title: "Pot Odds", desc: "When a call is +EV, by the numbers" },
            ].map(link => (
              <a key={link.href} href={link.href} className="group bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-foreground text-sm mb-0.5">{link.title}</div>
                  <div className="text-xs text-muted-foreground">{link.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a href="/en/blog" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all">
              Browse all free guides <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
