import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogLcpInfo, stripFirstBlogLcpBlock } from "@/lib/blog-lcp";
import { POSTS, getPost } from "@/lib/posts";
import { HTML_LANG } from "@/lib/intl";
import { secondaryLocalesForSlug } from "@/lib/intl-posts";
import { SITE } from "@/lib/site";
import BlogPostClient from "./blog-post-client";
import TournamentGuidePost from "@/components/tournament-guide-post";

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

  const lcpForMeta = getBlogLcpInfo(post.content);
  const firstImg = lcpForMeta?.src ?? null;
  const ogImage = firstImg ? `${SITE}${firstImg}` : `${SITE}/opengraph.jpg`;
  const url = `${SITE}/blog/${post.slug}`;
  const secondaries = secondaryLocalesForSlug(post.slug);

  let languages: Record<string, string> | undefined;
  if (secondaries.length > 0) {
    languages = { ko: url };
    for (const l of secondaries) languages[HTML_LANG[l]] = `${SITE}/${l}/blog/${post.slug}`;
    languages["x-default"] = secondaries.includes("en")
      ? `${SITE}/en/blog/${post.slug}`
      : `${SITE}/${secondaries[0]}/blog/${post.slug}`;
  }

  return {
    title: post.seoTitle || post.title,
    description: post.desc,
    keywords: post.tags.join(", "),
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "article",
      url,
      title: post.seoTitle || post.title,
      description: post.desc,
      siteName: "홀덤마스터",
      locale: "ko_KR",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
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
      "article:modified_time": post.updated || post.date,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const lcpForMeta = getBlogLcpInfo(post.content);
  const firstImg = lcpForMeta?.src ?? null;
  const lcp = post.keepImagesInBody ? null : lcpForMeta;
  const contentForClient = lcp ? stripFirstBlogLcpBlock(post.content, lcp) : post.content;
  const url = `${SITE}/blog/${post.slug}`;
  const ogImage = firstImg ? `${SITE}${firstImg}` : `${SITE}/opengraph.jpg`;

  // Article + Breadcrumb + (조건부) FAQ JSON-LD
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
      name: "홀덤마스터 편집팀",
      url: `${SITE}/about`,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
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

  /**
   * 첫 이미지(이전 LCP 후보)는 본문에서 제거되고 페이지 맨 하단 "이 글 전체 요약" 섹션으로 이동.
   * 모바일 LCP를 이미지 → 제목 텍스트로 전환하기 위함이며 priority 미지정 → 기본 lazy 로드.
   * OG/Twitter 이미지는 그대로 유지 (firstImg → ogImage).
   */
  const summarySlot =
    lcp != null && !post.hideSummaryImageSlot ? (
      <section
        aria-labelledby="post-summary-label"
        style={{
          marginTop: "60px",
          borderTop: "1px solid hsl(var(--border))",
          paddingTop: "32px",
        }}
      >
        <p
          id="post-summary-label"
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "hsl(var(--muted-foreground))",
            marginBottom: "12px",
          }}
        >
          📋 이 글 전체 요약
        </p>
        <figure className="my-0 max-w-2xl mx-auto w-full">
          <Image
            src={lcp.src}
            alt={lcp.alt.trim() || post.title}
            width={lcp.width}
            height={lcp.height}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="w-full h-auto rounded-xl border border-border bg-card/30"
          />
          {lcp.caption ? (
            <figcaption className="text-center text-sm text-primary font-semibold mt-3 px-2 leading-snug">
              {lcp.caption}
            </figcaption>
          ) : null}
        </figure>
      </section>
    ) : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      {post.layout === "tournament-guide" ? (
        <TournamentGuidePost post={{ ...post, content: contentForClient }} summarySlot={summarySlot} />
      ) : (
        <BlogPostClient post={{ ...post, content: contentForClient }} summarySlot={summarySlot} />
      )}
    </>
  );
}
