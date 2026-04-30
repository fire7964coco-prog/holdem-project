import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogLcpInfo, stripFirstBlogLcpBlock } from "@/lib/blog-lcp";
import { POSTS, getPost } from "@/lib/posts";
import BlogPostClient from "./blog-post-client";

const SITE = "https://holdemmaster.com";

/**
 * 빌드 타임에 모든 블로그 포스트(29개) URL 정적 생성
 */
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "포스트를 찾을 수 없습니다" };

  const lcp = getBlogLcpInfo(post.content);
  const firstImg = lcp?.src ?? null;
  const ogImage = firstImg ? `${SITE}${firstImg}` : `${SITE}/opengraph.jpg`;
  const url = `${SITE}/blog/${post.slug}`;

  return {
    title: post.seoTitle || post.title,
    description: post.desc,
    keywords: post.tags.join(", "),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.seoTitle || post.title,
      description: post.desc,
      siteName: "홀덤마스터",
      locale: "ko_KR",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["홀덤마스터 편집팀"],
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
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const lcp = getBlogLcpInfo(post.content);
  const firstImg = lcp?.src ?? null;
  const contentForClient = lcp ? stripFirstBlogLcpBlock(post.content, lcp) : post.content;
  const url = `${SITE}/blog/${post.slug}`;
  const ogImage = firstImg ? `${SITE}${firstImg}` : `${SITE}/opengraph.jpg`;

  // Article + Breadcrumb + (조건부) FAQ JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.desc,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "홀덤마스터 편집팀", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "홀덤마스터",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
    keywords: post.tags.join(", "),
    inLanguage: "ko-KR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "블로그", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  // 본문에서 Q/A 추출 (FAQ schema 자동 생성)
  const oldFaq = [...post.content.matchAll(/\*\*Q\.\s*([^*\n]+)\*\*\n\n?A\.\s*([^\n]+)/g)];
  const newFaq = [...post.content.matchAll(/^### Q\d+\.\s*(.+)\n\n([^\n]+)/gm)];
  const stripMd = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/==(.+?)==/g, "$1");
  const faqItems = [...oldFaq, ...newFaq].map((m) => ({
    "@type": "Question",
    name: stripMd(m[1].trim()),
    acceptedAnswer: { "@type": "Answer", text: stripMd(m[2].trim().replace(/\n/g, " ")) },
  }));
  const faqSchema =
    faqItems.length >= 2
      ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems }
      : null;

  const graph = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  const heroSlot =
    lcp != null ? (
      <figure className="my-0 max-w-2xl mx-auto w-full">
        <Image
          src={lcp.src}
          alt={lcp.alt.trim() || post.title}
          width={lcp.width}
          height={lcp.height}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="w-full h-auto rounded-xl border border-border bg-card/30"
        />
        {lcp.caption ? (
          <figcaption className="text-center text-sm text-primary font-semibold mt-3 px-2 leading-snug">
            {lcp.caption}
          </figcaption>
        ) : null}
      </figure>
    ) : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      <BlogPostClient post={{ ...post, content: contentForClient }} heroSlot={heroSlot} />
    </>
  );
}
