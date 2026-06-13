import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CHROME, POST_LABELS, OG_LOCALE, dirForLocale, type SecondaryLocale } from "@/lib/intl";
import { postsForLocale } from "@/lib/intl-posts";

export function intlBlogIndexMetadata(locale: SecondaryLocale): Metadata {
  const t = POST_LABELS[locale];
  const url = `${SITE}/${locale}/blog`;
  const title = `${t.blogTitle} — ${CHROME[locale].brand}`;
  return {
    title,
    description: t.blogIntro,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: t.blogIntro,
      siteName: CHROME[locale].brand,
      locale: OG_LOCALE[locale],
    },
  };
}

export function IntlBlogIndex({ locale }: { locale: SecondaryLocale }) {
  const t = POST_LABELS[locale];
  const posts = postsForLocale(locale);
  const base = `/${locale}/blog`;

  return (
    <div dir={dirForLocale(locale)} className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-3">{t.blogTitle}</h1>
        <p className="text-lg text-muted-foreground">{t.blogIntro}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {posts.map((p) => (
          <Link key={p.slug} href={`${base}/${p.slug}`}>
            <article className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer group">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  width={600}
                  height={338}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="px-6 pt-6 text-3xl">{p.emoji}</div>
              )}
              <div className="p-6 pt-4">
              <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
              <div className="mt-4 text-xs text-muted-foreground">{p.readTime} {t.readSuffix}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
