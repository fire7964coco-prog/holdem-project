"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Clock, Tag, ChevronLeft, ChevronRight, ChevronDown, Share2, Link2 } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { useState, useRef } from "react";
import type { Post } from "@/lib/posts";
import { EN_POSTS } from "@/lib/posts-en";
import { SITE } from "@/lib/site";
import { renderMarkdown, slugify, extractHeadings } from "@/app/blog/[slug]/blog-post-client";

function EnTocList({ headings }: { headings: { id: string; text: string; level: number }[] }) {
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

export default function EnBlogPost({
  post,
  summarySlot,
}: {
  post: Post;
  summarySlot?: ReactNode;
}) {
  const currentIndex = EN_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? EN_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < EN_POSTS.length - 1 ? EN_POSTS[currentIndex + 1] : null;
  const related = EN_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageUrl = `${SITE}/en/blog/${post.slug}`;

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const headings = extractHeadings(post.content);
  const hasToc = headings.length >= 2;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/en/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className={hasToc ? "xl:grid xl:grid-cols-[220px_1fr] xl:gap-10" : ""}>
          {/* Sticky sidebar TOC — desktop only */}
          {hasToc && (
            <aside className="hidden xl:block">
              <div className="sticky top-28">
                <nav className="bg-card border border-border rounded-2xl p-5" aria-label="Table of contents">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Contents</p>
                  <EnTocList headings={headings} />
                </nav>
              </div>
            </aside>
          )}

          {/* Main content column */}
          <div className="min-w-0">
            {/* Article Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                  Beginner Guide
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} read
                </span>
                <time dateTime={post.date} className="text-xs text-muted-foreground">
                  Published {post.date}
                </time>
                {post.updated && post.updated !== post.date && (
                  <time
                    dateTime={post.updated}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    title="This article has been updated with the latest information"
                  >
                    Updated {post.updated}
                  </time>
                )}
              </div>

              <div className="text-6xl mb-6">{post.emoji}</div>

              <h1 className="text-3xl md:text-4xl font-serif font-black text-foreground leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{post.desc}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Quick Answer — Featured Snippet candidate */}
            {post.tldr && (
              <aside
                aria-label="Quick answer"
                className="mb-8 relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-primary"
                    aria-hidden="true"
                  >
                    💡 Quick Answer
                  </span>
                </div>
                <p className="mt-2 text-base md:text-lg text-foreground leading-relaxed font-medium">
                  {post.tldr}
                </p>
              </aside>
            )}

            {/* Inline TOC — mobile only */}
            {hasToc && (
              <details className="xl:hidden group bg-card border border-border rounded-2xl mb-6">
                <summary
                  className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-2xl hover:bg-card/70 transition-colors"
                  aria-label="Toggle table of contents"
                >
                  <span className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-primary">
                    📚 Contents <span className="text-muted-foreground/60 font-normal normal-case tracking-normal">({headings.length})</span>
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <nav className="px-6 pb-6 pt-2 border-t border-border/60" aria-label="Table of contents">
                  <EnTocList headings={headings} />
                </nav>
              </details>
            )}

            {/* Article Body */}
            <article
              ref={contentRef}
              className="prose-holdem bg-card border border-border rounded-2xl p-6 md:p-10"
            >
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: `<p class="text-muted-foreground text-base leading-relaxed mb-4">${renderMarkdown(
                    post.content.replace(/^:::quiz:::$/m, ""),
                  )}</p>`,
                }}
              />
            </article>

            {/* Prev / Next Navigation */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`/en/blog/${prevPost.slug}`}>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group cursor-pointer">
                    <ChevronLeft className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Previous</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {prevPost.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link href={`/en/blog/${nextPost.slug}`}>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group cursor-pointer text-right justify-end">
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Next</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {nextPost.title}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                </Link>
              ) : <div />}
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-serif font-bold text-foreground mb-5">Related</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/en/blog/${r.slug}`}>
                      <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer group">
                        <div className="text-3xl mb-3">{r.emoji}</div>
                        <div className="text-xs text-muted-foreground mb-1">Beginner Guide</div>
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{r.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {summarySlot}

            {/* Social Share */}
            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <Share2 className="w-4 h-4 text-primary" aria-hidden="true" /> Share this article
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] text-xs font-semibold hover:bg-[#1da1f2]/20 transition-all"
                >
                  <FaXTwitter className="w-3.5 h-3.5" aria-hidden="true" /> Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] text-xs font-semibold hover:bg-[#1877f2]/20 transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" aria-hidden="true" /> Facebook
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="Copy link to this article"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
                >
                  <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
                  {copied ? "Copied!" : "Copy link"}
                </button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-10 text-center">
              <Link href="/en/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
