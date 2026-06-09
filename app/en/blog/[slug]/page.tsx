import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogLcpInfo } from "@/lib/blog-lcp";
import { EN_POSTS, getEnPost } from "@/lib/posts-en";
import { getPost } from "@/lib/posts";
import { SITE } from "@/lib/site";
import EnBlogPostClient from "./en-blog-post-client";

export function generateStaticParams() {
  return EN_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getEnPost(params.slug);
  if (!post) return { title: "Post not found" };

  const lcpForMeta = getBlogLcpInfo(post.content);
  const firstImg = lcpForMeta?.src ?? null;
  const ogImage = firstImg ? `${SITE}${firstImg}` : `${SITE}/opengraph.jpg`;
  const url = `${SITE}/en/blog/${post.slug}`;
  const koUrl = `${SITE}/blog/${post.slug}`;
  const hasKo = !!getPost(post.slug);

  return {
    title: post.seoTitle || post.title,
    description: post.desc,
    keywords: post.tags.join(", "),
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
        ...(hasKo ? { ko: koUrl } : {}),
      },
    },
    openGraph: {
      type: "article",
      url,
      title: post.seoTitle || post.title,
      description: post.desc,
      siteName: "HoldemMaster",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ["HoldemMaster Editorial Team"],
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

export default function Page({ params }: { params: { slug: string } }) {
  const post = getEnPost(params.slug);
  if (!post) notFound();

  const lcpForMeta = getBlogLcpInfo(post.content);
  const firstImg = lcpForMeta?.src ?? null;
  const url = `${SITE}/en/blog/${post.slug}`;
  const ogImage = firstImg ? `${SITE}${firstImg}` : `${SITE}/opengraph.jpg`;

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
      name: "HoldemMaster Editorial Team",
      url: `${SITE}/about`,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    publisher: {
      "@type": "Organization",
      name: "HoldemMaster",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE}/en/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: url },
    ],
  };

  const oldFaq = [...post.content.matchAll(/\*\*Q\.\s*([^*\n]+)\*\*\n\n?A\.\s*([^\n]+)/g)];
  const stripMd = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/==(.+?)==/g, "$1");
  const faqItems = oldFaq.map((m) => ({
    "@type": "Question",
    name: stripMd(m[1].trim()),
    acceptedAnswer: { "@type": "Answer", text: stripMd(m[2].trim().replace(/\n/g, " ")) },
  }));
  const faqSchema =
    faqItems.length >= 2
      ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }
      : null;

  const graph = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      <EnBlogPostClient post={post} />
    </>
  );
}
