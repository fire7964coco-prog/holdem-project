import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  // 본문 첫 이미지 추출 (LCP·OG 이미지)
  const faqMatch = post.content.match(/:::faqcard\[([^\]]+)\]/);
  const mdMatch = post.content.match(/!\[[^\]]*\]\(([^)\s]+)/);
  const firstImg = faqMatch ? faqMatch[1] : mdMatch ? mdMatch[1] : null;
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

  // 본문 첫 이미지 — LCP preload 힌트로 사용
  const faqMatch = post.content.match(/:::faqcard\[([^\]]+)\]/);
  const mdMatch = post.content.match(/!\[[^\]]*\]\(([^)\s]+)/);
  const firstImg = faqMatch ? faqMatch[1] : mdMatch ? mdMatch[1] : null;
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

  return (
    <>
      {firstImg && (
        // LCP 이미지 우선 다운로드 — Next.js 가 <head> 로 호이스팅
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link rel="preload" as="image" href={firstImg} fetchPriority="high" />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
