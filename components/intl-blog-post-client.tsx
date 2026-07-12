"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Tag, ChevronLeft, ChevronRight, ChevronDown, Share2, Link2, Map } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import type { Post } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { POST_LABELS, NAV_CTA, NAV_HOME_FEED, dirForLocale, type SecondaryLocale } from "@/lib/intl";
import { postsForLocale } from "@/lib/intl-posts";
import { renderMarkdown, extractHeadings } from "@/app/blog/[slug]/blog-post-client";
import { clusterForSlug } from "@/lib/pillar-clusters";
import ClusterMinimap from "@/components/cluster-minimap";
import CommunityCTA from "@/components/community-cta";
import BlogTopBar from "@/components/blog-top-bar";
import ReadingProgressBar from "@/components/reading-progress-bar";

function IntlTocList({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  let h2Count = 0;
  return (
    <ol className="space-y-1.5">
      {headings.map((h) => {
        h2Count++;
        return (
          <li key={h.id} className="flex items-start gap-2.5">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
              {h2Count}
            </span>
            <a
              href={`#${h.id}`}
              className="hover:text-primary transition-colors leading-snug text-muted-foreground text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {h.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function IntlBlogPostClient({
  post,
  locale,
  summarySlot,
}: {
  post: Post;
  locale: SecondaryLocale;
  summarySlot?: ReactNode;
}) {
  const t = POST_LABELS[locale];
  const dir = dirForLocale(locale);
  const posts = postsForLocale(locale);
  const base = `/${locale}/blog`;

  // 이전/다음 글: 다국어 /[locale]/blog 피드는 postsForLocale 배열 순서 그대로 노출되므로
  // 그 순서를 따라 "이전 글 = 피드에서 바로 위 / 다음 글 = 피드에서 바로 아래"가 되게 한다.
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageUrl = `${SITE}${base}/${post.slug}`;

  // ?? ??? ?? ? ??? ?? ??
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const headings = extractHeadings(post.content);
  const hasToc = headings.length >= 2;
  // 클러스터 미니맵 (현재 EN 프로토타입만). 클러스터 소속 글에만 노출.
  const showMinimap = locale === "en" && clusterForSlug(post.slug) !== null;
  const hasRail = hasToc || showMinimap;
  const bodyHtml = `<p class="text-muted-foreground text-base leading-relaxed mb-4">${renderMarkdown(
    post.content.replace(/^:::quiz:::$/m, ""),
  )}</p>`;

  return (
    <div dir={dir}>
      <ReadingProgressBar targetRef={contentRef} rtl={dir === "rtl"} />
      <BlogTopBar
        homeHref={`/${locale}`}
        homeFeedLabel={NAV_HOME_FEED[locale]}
        communityLabel={NAV_CTA[locale]}
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className={hasRail ? "xl:grid xl:grid-cols-[1fr_240px] xl:gap-10" : ""}>
          {hasRail && (
            <aside className="hidden xl:block xl:order-2">
              <div className="sticky top-16 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain pe-1">
                {hasToc && (
                  <nav className="bg-card border border-border rounded-2xl p-5" aria-label={t.contents}>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{t.contents}</p>
                    <IntlTocList headings={headings} />
                  </nav>
                )}
                {showMinimap && <ClusterMinimap slug={post.slug} />}
              </div>
            </aside>
          )}

          <div className="min-w-0 xl:order-1">
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                  {t.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} {t.readSuffix}
                </span>
                <time dateTime={post.date} className="text-xs text-muted-foreground">
                  {t.published} {post.date}
                </time>
                {post.updated && post.updated !== post.date && (
                  <time
                    dateTime={post.updated}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t.updated} {post.updated}
                  </time>
                )}
              </div>

              {/* H1 ?? ?? ? ??? LCP ?? (??? LCP?? ??) */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{post.desc}</p>

              {post.image && (
                <div className="mt-6 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </header>

            {post.tldr && (
              <aside
                aria-label={t.quickAnswer}
                className="mb-8 relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-primary" aria-hidden="true">
                    ?? {t.quickAnswer}
                  </span>
                </div>
                <p className="mt-2 text-base md:text-lg text-foreground leading-relaxed font-medium">
                  {post.tldr}
                </p>
              </aside>
            )}

            {hasToc && (
              <details className="xl:hidden group bg-card border border-border rounded-2xl mb-6">
                <summary className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-2xl hover:bg-card/70 transition-colors">
                  <span className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-primary">
                    ?? {t.contents} <span className="text-muted-foreground/60 font-normal normal-case tracking-normal">({headings.length})</span>
                  </span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <nav className="px-6 pb-6 pt-2 border-t border-border/60" aria-label={t.contents}>
                  <IntlTocList headings={headings} />
                </nav>
              </details>
            )}

            {showMinimap && (
              <details className="xl:hidden group bg-card border border-border rounded-2xl mb-6" open>
                <summary className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-2xl hover:bg-card/70 transition-colors">
                  <span className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-primary">
                    <Map className="w-4 h-4" aria-hidden="true" /> Learning Map
                  </span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-border/60">
                  <ClusterMinimap slug={post.slug} bare />
                </div>
              </details>
            )}

            <article ref={contentRef} className="prose-holdem blog-prose bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-10">
              <div className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
            </article>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`${base}/${prevPost.slug}`}>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group cursor-pointer">
                    <ChevronLeft className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{t.prev}</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {prevPost.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={base}>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group cursor-pointer">
                    <ChevronLeft className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {t.back}
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {nextPost ? (
                <Link href={`${base}/${nextPost.slug}`}>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group cursor-pointer text-right justify-end">
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{t.next}</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {nextPost.title}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                </Link>
              ) : (
                <Link href={base}>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group cursor-pointer text-right justify-end">
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {t.back}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                </Link>
              )}
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground mb-5">{t.related}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`${base}/${r.slug}`}>
                      <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer group">
                        <div className="text-3xl mb-3">{r.emoji}</div>
                        <div className="text-xs text-muted-foreground mb-1">{t.category}</div>
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{r.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {summarySlot}

            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <Share2 className="w-4 h-4 text-primary" aria-hidden="true" /> {t.share}
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] text-xs font-semibold hover:bg-[#1da1f2]/20 transition-all"
                >
                  <FaXTwitter className="w-3.5 h-3.5" aria-hidden="true" /> Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] text-xs font-semibold hover:bg-[#1877f2]/20 transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" aria-hidden="true" /> Facebook
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
                >
                  <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
                  {copied ? t.copied : t.copy}
                </button>
              </div>
            </div>

            {/* Community CTA */}
            <CommunityCTA locale={locale as Parameters<typeof CommunityCTA>[0]["locale"]} />

            <div className="mt-10 text-center">
              <Link href={base} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
                <ChevronLeft className="w-4 h-4" /> {t.back}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
