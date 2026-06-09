import type { Metadata } from "next";
import Link from "next/link";
import { EN_POSTS } from "@/lib/posts-en";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Texas Hold'em Strategy Blog — HoldemMaster",
  description: "Clear, practical Texas Hold'em guides: hand rankings, odds, position, and the rules that actually decide pots.",
  alternates: { canonical: `${SITE}/en/blog` },
  openGraph: {
    type: "website",
    url: `${SITE}/en/blog`,
    title: "Texas Hold'em Strategy Blog — HoldemMaster",
    description: "Clear, practical Texas Hold'em guides.",
    siteName: "HoldemMaster",
    locale: "en_US",
  },
};

export default function EnBlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-3">
          Texas Hold&apos;em Strategy Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Practical guides that explain not just <em>what</em> beats what, but <em>why</em> — and how to use it at the table.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {EN_POSTS.map((p) => (
          <Link key={p.slug} href={`/en/blog/${p.slug}`}>
            <article className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer group">
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
              <div className="mt-4 text-xs text-muted-foreground">{p.readTime} read</div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
