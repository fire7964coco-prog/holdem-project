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
import { extractHeadings } from "@/lib/blog-headings";
import { renderMarkdown } from "@/lib/render-markdown";
import { relatedFor, courseNeighbors } from "@/lib/related-posts";
import { KO_CLUSTERS } from "@/lib/pillar-clusters";

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
    // noindex 글도 canonical은 자기 자신을 가리켜야 한다 —
    // "색인하지 마라 + 정본은 다른 URL"은 구글에 모순 신호다(lib/posts.ts의 noindex 주석 참조).
    ...(post.noindex ? { robots: { index: false, follow: true } } : {}),
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
  /**
   * ★대회 가이드(layout: "tournament-guide")는 화면에 **4단**을 그린다
   *   (홈 / 블로그 / 대회 가이드 / 제목 — components/tournament-guide-post.tsx).
   *   그런데 이 스키마는 3단이라 **화면과 마크업이 어긋나 있었다**(2026-08-04 발견).
   *   구글은 둘이 다르면 브레드크럼 리치결과를 주지 않는다.
   *   「대회 가이드」 단계는 실제로 의미가 있으므로(그 글들은 /tournaments 섹션의 일부다)
   *   화면을 깎는 대신 스키마를 4단으로 맞춘다.
   */
  const isTournamentGuide = post.layout === "tournament-guide";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "블로그", item: `${SITE}/blog` },
      ...(isTournamentGuide
        ? [{ "@type": "ListItem", position: 3, name: "대회 가이드", item: `${SITE}/tournaments` }]
        : []),
      { "@type": "ListItem", position: isTournamentGuide ? 4 : 3, name: post.title, item: url },
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

  // 대회/이벤트 글이면 Event JSON-LD 생성 (구글 이벤트 리치결과 대상)
  const eventSchema = post.event
    ? {
        "@context": "https://schema.org",
        "@type": "Event",
        name: post.event.name,
        startDate: post.event.startDate,
        ...(post.event.endDate ? { endDate: post.event.endDate } : {}),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: post.event.locationName,
          address: post.event.locationAddress,
        },
        image: [ogImage],
        description: post.desc,
        ...(post.event.lowPriceKRW
          ? {
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "KRW",
                lowPrice: post.event.lowPriceKRW,
                ...(post.event.highPriceKRW ? { highPrice: post.event.highPriceKRW } : {}),
                ...(post.event.offerUrl ? { url: post.event.offerUrl } : {}),
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
        ...(post.event.organizerName
          ? {
              organizer: {
                "@type": "Organization",
                name: post.event.organizerName,
                ...(post.event.organizerUrl ? { url: post.event.organizerUrl } : {}),
              },
            }
          : {}),
      }
    : null;

  // 순위/목록형 글이면 ItemList JSON-LD (족보 순위 등) — AI 오버뷰·발췌(GEO) 인용 최적화
  const itemListSchema = post.itemList
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: post.itemList.name,
        itemListOrder: `https://schema.org/ItemListOrder${
          post.itemList.order === "Ascending" ? "Ascending" : "Descending"
        }`,
        numberOfItems: post.itemList.items.length,
        itemListElement: post.itemList.items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          ...(it.description ? { description: it.description } : {}),
        })),
      }
    : null;

  // 자체 채널(@holdemmasterTV) 영상 임베드 시 VideoObject (소유자이므로 적합)
  const videoSchema = post.video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: post.video.name,
        description: post.video.description,
        thumbnailUrl: post.video.thumbnailUrl,
        uploadDate: post.video.uploadDate,
        embedUrl: post.video.embedUrl,
        ...(post.video.contentUrl ? { contentUrl: post.video.contentUrl } : {}),
        ...(post.video.duration ? { duration: post.video.duration } : {}),
        publisher: {
          "@type": "Organization",
          name: "홀덤마스터",
          logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
        },
      }
    : null;

  const graph = [
    articleSchema,
    breadcrumbSchema,
    ...(eventSchema ? [eventSchema] : []),
    ...(itemListSchema ? [itemListSchema] : []),
    ...(videoSchema ? [videoSchema] : []),
    ...(faqSchema ? [faqSchema] : []),
  ];

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

  // keepImagesInBody 포스트는 히어로 이미지가 본문 내 <img>로 렌더됨.
  // <link rel="preload">를 head에 주입해 브라우저가 HTML 파싱 초기에 이미지를 발견하도록 해 LCP 개선.
  // ★ 2026-08-01: 본문 이미지가 /_next/image 최적화를 타도록 바뀌었다.
  // 원본 경로를 preload하면 **최적화본과 원본을 둘 다 받는다**(이중 다운로드).
  // 그래서 preload도 렌더러(blog-post-client의 fullWidthImg)와 **똑같은**
  // src/srcset/sizes를 써야 브라우저가 같은 리소스로 인식해 재사용한다.
  // 양쪽이 어긋나면 조용히 두 번 받으므로, 한쪽을 고치면 반드시 다른 쪽도 고칠 것.
  const optUrl = (src: string, w: number, q = 75) =>
    `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}`;
  const heroPreload =
    post.keepImagesInBody && firstImg && firstImg.startsWith("/") ? (
      <link
        rel="preload"
        as="image"
        href={optUrl(firstImg, 750)}
        imageSrcSet={[384, 640, 750, 1080].map((w) => `${optUrl(firstImg, w)} ${w}w`).join(", ")}
        imageSizes="(max-width: 768px) 100vw, 672px"
        fetchPriority="high"
      />
    ) : null;

  // 이전/다음·관련글은 **서버에서 확정해서** 넘긴다.
  //
  // 연혁: 예전엔 클라이언트가 전체 POSTS(본문 ~9.5MB)를 번들했다 → 메타만 넘기게 바꿨고(2026-07),
  // 다시 실제로 읽는 8개 필드만 남겼다(2026-08-01, c50cb67).
  // ★ 2026-08-02: 그래도 57편치를 통째로 보내고 있었다. 정작 화면에 나오는 건 이전·다음·관련 3개
  //   = **5편뿐**이고, 나머지 52편은 __next_f 플라이트에 실려 나가는 순수 낭비였다(row 0이 35.5KB).
  //   고르는 일 자체를 서버로 옮긴다. 골라내는 규칙은 클라이언트에 있던 것과 **동일하다**
  //   (피드 순서 = 날짜 내림차순 / 관련글 = 같은 카테고리 3개 / 시리즈 = 첫 tournament-guide).
  const feed = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const feedIndex = feed.findIndex((p) => p.slug === post.slug);
  const navLink = (p: (typeof POSTS)[number] | undefined | null) =>
    p ? { slug: p.slug, title: p.title } : null;
  // ★2026-08-16: 이전·다음을 «커리큘럼 순서»(클러스터)로 바꿨다. 기존 날짜순 이웃은
  //   주제 정합이 0이었다 — 모바일 sticky 「다음 글」이 이걸 그대로 쓰는데, 모바일이
  //   오가닉의 68%다(1.57p vs 데스크톱 2.06p). 클러스터에 없는 글은 기존 날짜순 폴백.
  const course = courseNeighbors(post.slug, POSTS, KO_CLUSTERS);
  const bySlug = (s: string | null) => (s ? POSTS.find((p) => p.slug === s) ?? null : null);
  const prevPost =
    navLink(bySlug(course.prevSlug)) ?? (feedIndex > 0 ? navLink(feed[feedIndex - 1]) : null);
  const nextPost =
    navLink(bySlug(course.nextSlug)) ??
    (feedIndex >= 0 && feedIndex < feed.length - 1 ? navLink(feed[feedIndex + 1]) : null);
  // ★2026-08-16: 관련글을 클러스터 1순위 + 카테고리 원형 회전 폴백으로 교체(lib/related-posts.ts).
  //   기존 `filter(같은 category).slice(0,3)`은 배열 앞 3편 고정이라 전략 30편이 전부
  //   같은 3편을 띄웠고, 그 상수 목적지 9편이 내부 유입 125세션/28일을 독식했다.
  //   🔴 카드 셰이프(아래 6필드)는 성능 계약이다 — 필드를 늘리면 플라이트가 다시 분다.
  const relatedPosts = relatedFor(post.slug, POSTS, KO_CLUSTERS)
    .map((s) => POSTS.find((p) => p.slug === s))
    .filter((p): p is (typeof POSTS)[number] => !!p)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      image: p.image,
      imageAlt: p.imageAlt,
      emoji: p.emoji,
    }));
  const nextTourPost = navLink(
    POSTS.find((p) => p.layout === "tournament-guide" && p.slug !== post.slug),
  );

  // ★ 2026-08-02: 마크다운 렌더링을 서버로 옮겼다.
  // 렌더러 499줄이 브라우저 번들에서 빠지고, 하이드레이션 때 정규식 체인을 다시 돌지 않는다.
  // 클라이언트에는 **content를 넘기지 않는다** — 넘기면 마크다운 원문과 렌더된 HTML이
  // 둘 다 __next_f 플라이트에 실려 이득이 사라진다(측정: brotli 32.7→30.1KB는 원문을 뺐을 때의 값).
  const { content: _rawContent, ...postMeta } = post;
  const headings = extractHeadings(contentForClient);
  // 토너먼트 레이아웃은 예나 지금이나 본문을 쪼개지 않는다(퀴즈 위젯이 없다) → 통째로 렌더.
  const bodyParts =
    post.layout !== "tournament-guide" && contentForClient.includes(":::quiz:::")
      ? contentForClient.split(/^:::quiz:::$/m).map(renderMarkdown)
      : [renderMarkdown(contentForClient)];

  return (
    <>
      {heroPreload}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      {post.layout === "tournament-guide" ? (
        <TournamentGuidePost
          post={postMeta}
          headings={headings}
          bodyHtml={bodyParts[0]}
          summarySlot={summarySlot}
          related={relatedPosts}
          nextTourPost={nextTourPost}
        />
      ) : (
        <BlogPostClient
          post={postMeta}
          headings={headings}
          bodyParts={bodyParts}
          summarySlot={summarySlot}
          prevPost={prevPost}
          nextPost={nextPost}
          related={relatedPosts}
        />
      )}
    </>
  );
}
