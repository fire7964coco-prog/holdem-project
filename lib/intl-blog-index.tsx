import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CHROME, POST_LABELS, OG_LOCALE, NAV_CTA, NAV_HOME_FEED, dirForLocale, type SecondaryLocale } from "@/lib/intl";
import { postsForLocale } from "@/lib/intl-posts";
import BlogTopBar from "@/components/blog-top-bar";

export function intlBlogIndexMetadata(locale: SecondaryLocale): Metadata {
  const t = POST_LABELS[locale];
  const url = `${SITE}/${locale}/blog`;
  // ⚠️ 여기 구분자가 원래 "??"(물음표 2개)로 박혀 있었다.
  //    em dash가 인코딩 사고로 U+3F U+3F가 된 채 커밋돼서
  //    25개 로케일 블로그 목록의 <title>에 "Blog ??HoldemMaster"로 나가고 있었다.
  const title = `${t.blogTitle} | ${CHROME[locale].brand}`;
  return {
    // absolute — 안 쓰면 루트 template("%s | 홀덤마스터")이 덧붙는다
    title: { absolute: title },
    description: t.blogIntro,
    alternates: { canonical: url },
    // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
    twitter: {
      card: "summary_large_image",
      title,
      description: t.blogIntro,
    },
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
    <div dir={dirForLocale(locale)}>
      <BlogTopBar
        homeHref={`/${locale}`}
        homeFeedLabel={NAV_HOME_FEED[locale]}
        communityLabel={NAV_CTA[locale]}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-extrabold text-foreground mb-3">{t.blogTitle}</h1>
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
    </div>
  );
}
