import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogLcpInfo } from "@/lib/blog-lcp";
import { getPost } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { CHROME, OG_LOCALE, HTML_LANG, type SecondaryLocale } from "@/lib/intl";
import { getPostByLocale, secondaryLocalesForSlug, postsForLocale } from "@/lib/intl-posts";
import IntlBlogPostClient from "@/components/intl-blog-post-client";
import { extractHeadings } from "@/lib/blog-headings";
import { renderMarkdown } from "@/lib/render-markdown";
import { relatedFor, courseNeighbors, linkedSlugsIn } from "@/lib/related-posts";
import { clustersForLocale } from "@/lib/pillar-clusters";

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
  /**
   * ★ og:image는 «지정된 히어로(post.image)»를 1순위로 쓴다 (2026-08-31).
   * 다국어 렌더러는 post.image를 히어로로 그리므로 content에는 히어로가 없다
   * (넣으면 두 번 나온다 — 39편이 그 상태였다 · posting.mdc STEP 3 대조표).
   * 그래서 content 기준으로만 고르면 og가 «첫 본문 이미지»가 되어 히어로가 아닌 것이 공유 카드에 뜬다.
   * 우선순위: post.image → content 첫 이미지 → 사이트 기본값.
   */
  const ogSrc = post.image || lcp?.src || null;
  const ogImage = ogSrc ? `${SITE}${ogSrc}` : `${SITE}/opengraph.jpg`;
  const url = `${SITE}/${locale}/blog/${post.slug}`;

  return {
    /**
     * ★ absolute 필수.
     * 이걸 안 쓰면 루트 레이아웃의 title.template("%s | 홀덤마스터")이 붙어서
     * 일본어·영어·스페인어 검색 결과에 한국어 브랜드명이 그대로 노출된다.
     * og:siteName은 진작 CHROME[locale].brand를 쓰고 있었는데 <title>만 새고 있었다.
     * (2026-07-29 발견 — 다국어 포스트 453편 전부 해당)
     */
    title: { absolute: `${post.seoTitle || post.title} | ${CHROME[locale].brand}` },
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
  /**
   * ★ og:image는 «지정된 히어로(post.image)»를 1순위로 쓴다 (2026-08-31).
   * 다국어 렌더러는 post.image를 히어로로 그리므로 content에는 히어로가 없다
   * (넣으면 두 번 나온다 — 39편이 그 상태였다 · posting.mdc STEP 3 대조표).
   * 그래서 content 기준으로만 고르면 og가 «첫 본문 이미지»가 되어 히어로가 아닌 것이 공유 카드에 뜬다.
   * 우선순위: post.image → content 첫 이미지 → 사이트 기본값.
   */
  const ogSrc = post.image || lcp?.src || null;
  const ogImage = ogSrc ? `${SITE}${ogSrc}` : `${SITE}/opengraph.jpg`;
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
  /**
   * ★2026-08-04: 홈 단계를 앞에 붙여 **3단**으로 맞췄다(전엔 블로그 → 글 2단).
   *   같은 날 화면에 그리기 시작한 시각 브레드크럼(intl-blog-post-client.tsx)과
   *   **정확히 같은 단계**여야 한다 — 구글은 마크업과 화면이 어긋나면 리치결과를 안 준다.
   *   한국어 글(app/blog/[slug]/page.tsx)도 홈 → 블로그 → 글 3단이라 이제 전 언어가 같다.
   *
   *   첫 단계 라벨로 CHROME[locale].brand("HoldemMaster")를 쓴다. 25개 언어에 「홈」을
   *   새로 번역해 넣는 대신 **이미 검증된 기존 문자열**을 그대로 쓰는 쪽을 택했다
   *   (지어낸 UI 번역은 원어민이 바로 알아본다).
   */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: CHROME[locale].brand, item: `${SITE}/${locale}` },
      { "@type": "ListItem", position: 2, name: CHROME[locale].blogLabel, item: `${SITE}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const oldFaq = [...post.content.matchAll(/\*\*Q\.\s*([^*\n]+)\*\*\n\n?A\.\s*([^\n]+)/g)];
  // ★ 2026-09-02 — 색상 하이라이트 접두(`==r:` `==g:` `==b:`)까지 벗긴다.
  //   예전 `==(.+?)==`는 접두를 안 벗겨 **FAQPage JSON-LD 답변이 `r:できません。`처럼
  //   쓰레기 문자로 시작**했다. 전수 스캔 결과 **108편·25로케일**이 이 상태였다
  //   (최다 `wpt-australia-2026-guide` 8로케일×10건 · ja판은 답변 6개 중 6개 전부).
  //   🔴 이 함수는 **JSON-LD 생성에만** 쓰인다(아래 faqItems 두 자리뿐) — 화면 렌더와 무관하므로
  //   본문의 색상 하이라이트는 그대로 살아 있다. 근거·판별법 = `docs/settled-decisions.md` §3.
  const stripMd = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*(.+?)\*\*/g, "$1")
      // ★ 2026-09-03 — 홑별표 이탤릭(*강조*)도 벗긴다.
      //   위 ** 규칙은 쌍별표만 먹어서 FAQPage 답변에 별표가 그대로 노출됐다
      //   (예: de holdem-pot-odds 「durch den gesamten Pot *nach* deinem Call」).
      //   🔴 실측 범위 = 301곳 · 192파일 · 거의 전 로케일.
      //   핸드오프의 「glossary 6편 8곳」은 부분 스캔값이라 틀렸다 —
      //   전수는 lib/posts* 의 FAQ 쌍 5,232개를 훑어야 나온다.
      //   여닫이 별표 안쪽에 공백을 금지해(\S) 「5 * 3 * 2」류 곱셈이 뭉개지지 않게 했다.
      //   현 코퍼스 301곳에서 느슨한 식과 결과가 동일했고(차이 0), 엄격한 쪽을 골랐다.
      .replace(/\*(\S|\S[^*\n]*?\S)\*/g, "$1")
      .replace(/==(?:[rgb]:)?(.+?)==/g, "$1");
  const faqItems = oldFaq.map((m) => ({
    "@type": "Question",
    name: stripMd(m[1].trim()),
    acceptedAnswer: { "@type": "Answer", text: stripMd(m[2].trim().replace(/\n/g, " ")) },
  }));
  const faqSchema =
    faqItems.length >= 2 ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems } : null;

  const graph = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  // 이전/다음·관련글은 **서버에서 확정해서** 넘긴다.
  //
  // ★ 2026-08-02: 전엔 Omit<Post,"content">로 로케일 전편(40여 편)을 통째로 넘겼다.
  // 그래서 tldr·desc·tags·seoTitle까지 직렬화돼 de/blog/holdem-hand-rankings.html의
  // 플라이트가 109.8KB였다(KO는 c50cb67에서 이미 좁혔는데 다국어 457편엔 적용이 안 돼 있었다).
  // 화면에 나오는 건 이전·다음·관련 3개 = 5편뿐이므로 고르는 일까지 서버로 옮긴다.
  // 규칙은 클라이언트에 있던 것과 동일: 피드는 postsForLocale 배열 순서 그대로.
  const localePosts = postsForLocale(locale);
  const idx = localePosts.findIndex((p) => p.slug === post.slug);
  const navLink = (p: (typeof localePosts)[number] | undefined | null) =>
    p ? { slug: p.slug, title: p.title } : null;
  // ★2026-08-16: 관련글·이전/다음을 클러스터 1순위 + 카테고리 원형 회전으로 교체.
  //   기존은 `filter(자기 제외).slice(0,3)` — 카테고리 필터조차 없어서 **그 로케일의
  //   모든 글이 배열 앞 3편**을 관련글로 가졌다(EN 43편 전부 동일 3편). 다국어 블로그
  //   상세의 세션당 페이지 1.27(전 그룹 최하)의 유력한 원인이었다.
  //   클러스터 맵이 없는 17개 로케일은 relatedFor가 자동으로 카테고리 회전 폴백을 쓴다.
  const clusters = clustersForLocale(locale);
  const course = courseNeighbors(post.slug, localePosts, clusters);
  const bySlug = (s: string | null) =>
    s ? localePosts.find((p) => p.slug === s) ?? null : null;
  const prevPost =
    navLink(bySlug(course.prevSlug)) ?? (idx > 0 ? navLink(localePosts[idx - 1]) : null);
  const nextPost =
    navLink(bySlug(course.nextSlug)) ??
    (idx >= 0 && idx < localePosts.length - 1 ? navLink(localePosts[idx + 1]) : null);
  //   ★2026-08-19: KO와 동일하게 «이미 화면에 있는 목적지»를 뒤로 미룬다(related-posts.ts `avoid`).
  //   🔴 다국어는 본문 링크가 로케일 경로(`/ja/blog/…`)라 slug만 뽑아야 맞물린다 — linkedSlugsIn이 그렇게 판다.
  const alreadyOnPage = [
    ...linkedSlugsIn(post.content),
    prevPost?.slug,
    nextPost?.slug,
  ].filter((s): s is string => !!s);
  const related = relatedFor(post.slug, localePosts, clusters, 3, alreadyOnPage)
    .map((s) => localePosts.find((p) => p.slug === s))
    .filter((p): p is (typeof localePosts)[number] => !!p)
    .map((p) => ({ slug: p.slug, title: p.title, emoji: p.emoji }));

  // ★ 마크다운 렌더링은 서버에서. 클라이언트에는 content를 넘기지 않는다(원문+HTML 이중 적재 방지).
  const { content: _rawContent, ...postMeta } = post;
  const headings = extractHeadings(post.content);
  // locale 은 `:::rangechart:::` 의 라벨·주석 선택에만 쓰인다(lib/range-chart.ts).
  const bodyHtml = renderMarkdown(post.content.replace(/^:::quiz:::$/m, ""), locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
      />
      <IntlBlogPostClient
        post={postMeta}
        locale={locale}
        headings={headings}
        bodyHtml={bodyHtml}
        prevPost={prevPost}
        nextPost={nextPost}
        related={related}
      />
    </>
  );
}
