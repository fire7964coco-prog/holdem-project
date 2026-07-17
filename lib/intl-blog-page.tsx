import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogLcpInfo } from "@/lib/blog-lcp";
import { getPost } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { CHROME, OG_LOCALE, HTML_LANG, type SecondaryLocale } from "@/lib/intl";
import { getPostByLocale, secondaryLocalesForSlug, postsForLocale } from "@/lib/intl-posts";
import IntlBlogPostClient from "@/components/intl-blog-post-client";

/** 해당 슬러그의 모든 언어 대체 링크 (ko + 번역된 보조 언어 + x-default) */
function hreflangLanguages(slug: string): Record<string, string> {
  const langs: Record<string, string> = {};
  if (getPost(slug)) langs.ko = `${SITE}/blog/${slug}`;
  const secondaries = secondaryLocalesForSlug(slug);
  for (const l of secondaries) langs[HTML_LANG[l]] = `${SITE}/${l}/blog/${slug}`;
  const enUrl = secondaries.includes("en") ? `${SITE}/en/blog/${slug}` : undefined;
  langs["x-default"] = enUrl ?? `${SITE}/${secondaries[0]}/blog/${slug}`;
  return langs;
}

export function intlBlogMetadata(locale: SecondaryLocale, slug: string): Metadata {
  const post = getPostByLocale(locale, slug);
  if (!post) return { title: "Not found" };

  const lcp = getBlogLcpInfo(post.content);
  const ogImage = lcp?.src ? `${SITE}${lcp.src}` : `${SITE}/opengraph.jpg`;
  const url = `${SITE}/${locale}/blog/${post.slug}`;

  return {
    title: post.seoTitle || post.title,
    description: post.desc,
    keywords: post.tags.join(", "),
    alternates: { canonical: url, languages: hreflangLanguages(slug) },
    openGraph: {
      type: "article",
      url,
      title: post.seoTitle || post.title,
      description: post.desc,
      siteName: CHROME[locale].brand,
      locale: OG_LOCALE[locale],
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [`${CHROME[locale].brand} Editorial Team`],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.desc,
      images: [ogImage],
    },
    other: {
      "article:published_time": post.date,
      "article:modified_time": post.updated || post.date,
    },
  };
}

export function IntlBlogArticle({ locale, slug }: { locale: SecondaryLocale; slug: string }) {
  const post = getPostByLocale(locale, slug);
  if (!post) notFound();

  const lcp = getBlogLcpInfo(post.content);
  const ogImage = lcp?.src ? `${SITE}${lcp.src}` : `${SITE}/opengraph.jpg`;
  const url = `${SITE}/${locale}/blog/${post.slug}`;
  const brand = CHROME[locale].brand;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.desc,
    ...(post.tldr ? { abstract: post.tldr } : {}),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: `${brand} Editorial Team`,
      url: `${SITE}/about`,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    publisher: {
      "@type": "Organization",
      name: brand,
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
    keywords: post.tags.join(", "),
    inLanguage: HTML_LANG[locale],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: CHROME[locale].blogLabel, item: `${SITE}/${locale}/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: url },
    ],
  };

  const oldFaq = [...post.content.matchAll(/\*\*Q\.\s*([^*\n]+)\*\*\n\n?A\.\s*([^\n]+)/g)];
  const stripMd = (s: string) =>
    s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1").replace(/==(.+?)==/g, "$1");
  const faqItems = oldFaq.map((m) => ({
    "@type": "Question",
    name: stripMd(m[1].trim()),
    acceptedAnswer: { "@type": "Answer", text: stripMd(m[2].trim().replace(/\n/g, " ")) },
  }));
  const faqSchema =
    faqItems.length >= 2 ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems } : null;

  const graph = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  // 관련글·이전/다음 계산용 메타(본문 content 제외) — 클라이언트가 전 로케일 본문을 번들하지 않도록 서버에서 전달.
  const allPostsMeta = postsForLocale(locale).map(({ content, ...meta }) => meta);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
      />
      <IntlBlogPostClient post={post} locale={locale} allPosts={allPostsMeta} />
    </>
  );
}
