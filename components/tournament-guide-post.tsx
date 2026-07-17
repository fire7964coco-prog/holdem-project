"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CardThumb from "./card-thumb";
import { ChevronLeft, ChevronRight, ChevronDown, Share2, Link2, MapPin, Calendar, DollarSign, AlertTriangle, BookOpen } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import type { Post } from "@/lib/posts";

type PostMeta = Omit<Post, "content">;
import { SITE } from "@/lib/site";
import { useState, useRef } from "react";
import { renderMarkdown, slugify, extractHeadings } from "./tournament-guide-utils";
import ReadingProgressBar from "./reading-progress-bar";

export default function TournamentGuidePost({
  post,
  summarySlot,
  allPosts,
}: {
  post: Post;
  summarySlot?: ReactNode;
  /** 관련글·이전/다음 계산용 메타데이터(본문 content 제외). 서버에서 전달. */
  allPosts: PostMeta[];
}) {
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const related = allPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageUrl = `${SITE}/blog/${post.slug}`;

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const headings = extractHeadings(post.content);
  const hasToc = headings.length >= 2;

  // Next tournament guide post (same series)
  const tourSeriesPosts = allPosts.filter(p => p.layout === "tournament-guide" && p.slug !== post.slug);
  const nextTourPost = tourSeriesPosts[0] ?? null;

  return (
    <>
      <ReadingProgressBar targetRef={contentRef} />
      {/* ──── Breadcrumb ──── */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">홈</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">블로그</Link>
          <span>/</span>
          <Link href="/tournaments" className="hover:text-primary transition-colors">대회 가이드</Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
        </div>
      </div>

      {/* ──── Series Banner ──── */}
      <div className="border-b border-primary/20" style={{ background: "rgba(212,175,55,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-2.5 py-1 rounded-full">
            대회 참가 완전 가이드 시리즈
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            처음부터 끝까지 — 단계별 실전 신청 가이드
          </span>
          <div className="ml-auto hidden sm:flex gap-2">
            {[
              { label: "APT 인천", href: "/blog/apt-incheon-2026-guide" },
              { label: "APPT 코리아", href: "/blog/appt-korea-2026-guide" },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition-colors ${
                  post.slug === item.href.replace(/.*\/blog\//, "")
                    ? "bg-primary text-primary-foreground border-primary"
                    : "text-muted-foreground border-border hover:border-primary/40"
                }`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ──── Hero Header ──── */}
      <div className="border-b border-border" style={{ background: "rgba(0,0,0,0.15)" }}>
        {post.image && (
          <div className="relative h-48 md:h-64 w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover opacity-40"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={630}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/20 border border-primary/40 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/60">{post.date} 업데이트</span>
                  <span className="text-xs text-white/60">{post.readTime} 읽기</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-black text-white leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        )}

        {!post.image && (
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/20 border border-primary/40 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.date} 업데이트</span>
            </div>
                <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground leading-tight mb-3">
              {post.title}
            </h1>
          </div>
        )}
      </div>

      {/* ──── Tags + TLDR ──── */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.slice(0, 5).map(tag => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {post.tldr && (
          <aside className="mb-8 p-5 md:p-6 border-l-4 border-primary rounded-r-2xl"
            style={{ background: "rgba(212,175,55,0.07)" }}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">한 줄 요약</p>
            <p className="text-base text-foreground font-medium leading-relaxed">{post.tldr}</p>
          </aside>
        )}
      </div>

      {/* ──── Main layout ──── */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className={hasToc ? "xl:grid xl:grid-cols-[240px_1fr] xl:gap-10" : ""}>

          {/* Sticky TOC sidebar */}
          {hasToc && (
            <aside className="hidden xl:block">
              <div className="sticky top-28">
                <nav className="bg-card border border-border rounded-2xl p-5" aria-label="목차">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">단계별 목차</p>
                  <ol className="space-y-2">
                    {headings.map((h, i) => (
                      <li key={h.id} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5"
                          style={{ background: "rgba(212,175,55,0.15)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.35)" }}>
                          {i + 1}
                        </span>
                        <a href={`#${h.id}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                          onClick={e => {
                            e.preventDefault();
                            document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}>
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>

                  {/* Next in series */}
                  {nextTourPost && (
                    <div className="mt-6 pt-5 border-t border-border">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">시리즈 다음 글</p>
                      <Link href={`/blog/${nextTourPost.slug}`}
                        className="block p-3 rounded-xl border border-border hover:border-primary/40 transition-colors">
                        <span className="text-[10px] text-primary font-bold">다음 →</span>
                        <p className="text-xs font-semibold text-foreground mt-1 leading-snug line-clamp-2">{nextTourPost.title}</p>
                      </Link>
                    </div>
                  )}
                </nav>
              </div>
            </aside>
          )}

          {/* Main content */}
          <div className="min-w-0">

            {/* Mobile TOC */}
            {hasToc && (
              <details className="xl:hidden group bg-card border border-border rounded-2xl mb-6">
                <summary className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-2xl hover:bg-card/70 transition-colors">
                  <span className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-primary">
                    단계별 목차 <span className="text-muted-foreground/60 font-normal normal-case tracking-normal">({headings.length}단계)</span>
                  </span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <nav className="px-6 pb-6 pt-2 border-t border-border/60">
                  <ol className="space-y-2">
                    {headings.map((h, i) => (
                      <li key={h.id} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5"
                          style={{ background: "rgba(212,175,55,0.15)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.35)" }}>
                          {i + 1}
                        </span>
                        <a href={`#${h.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                          onClick={e => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" }); }}>
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>
            )}

            {/* Article body — guide style */}
            <article ref={contentRef} className="prose-tournament">
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: `<p class="text-muted-foreground text-base leading-relaxed mb-4">${renderMarkdown(post.content)}</p>`,
                }}
              />
            </article>

            {/* Next in series — mobile CTA */}
            {nextTourPost && (
              <Link href={`/blog/${nextTourPost.slug}`}>
                <div className="mt-10 p-5 border border-primary/30 rounded-2xl hover:border-primary/60 transition-colors cursor-pointer"
                  style={{ background: "rgba(212,175,55,0.05)" }}>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">시리즈 다음 글</p>
                  <p className="font-bold text-foreground text-sm leading-snug">{nextTourPost.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    계속 읽기 <ChevronRight className="w-3.5 h-3.5" />
                  </p>
                </div>
              </Link>
            )}

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-serif font-bold text-foreground mb-5">관련 대회 가이드</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}`}>
                      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-full flex flex-col">
                        {r.image ? (
                          <div className="relative h-36 flex-shrink-0">
                            <Image
                              src={r.image}
                              alt={r.imageAlt ?? r.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-36 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center justify-center flex-shrink-0">
                            <CardThumb slug={r.slug} />
                          </div>
                        )}
                        <div className="p-4 flex flex-col flex-1">
                          <div className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 self-start mb-2">{r.category}</div>
                          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-1">{r.title}</h3>
                          <div className="flex items-center justify-end text-xs text-primary font-semibold mt-3 pt-3 border-t border-border gap-0.5">
                            읽기 <span>›</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {summarySlot}

            {/* Author bio */}
            <aside className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-7" aria-label="작성자 정보">
              <div className="flex items-start gap-5 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-3xl flex-shrink-0">♠</div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground mb-0.5">작성자</div>
                  <div className="font-bold text-foreground text-lg mb-1">
                    <Link href="/about" className="hover:text-primary transition-colors">홀덤마스터 편집팀</Link>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    12년 경력의 포커 전략 전문가 팀. WSOP·KPT·APT 토너먼트 현장 취재 경험 보유.
                    모든 대회 참가 가이드는 <strong className="text-foreground">공식 사이트 + 현장 경험</strong> 기반으로 작성합니다.
                  </p>
                </div>
              </div>
            </aside>

            {/* Share */}
            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <Share2 className="w-4 h-4 text-primary" /> 이 글 공유하기
                </span>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] text-xs font-semibold hover:bg-[#1da1f2]/20 transition-all">
                  <FaXTwitter className="w-3.5 h-3.5" /> Twitter
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] text-xs font-semibold hover:bg-[#1877f2]/20 transition-all">
                  <FaFacebookF className="w-3.5 h-3.5" /> Facebook
                </a>
                <button type="button" onClick={copyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-all">
                  <Link2 className="w-3.5 h-3.5" />
                  {copied ? "복사됨!" : "링크 복사"}
                </button>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
                <ChevronLeft className="w-4 h-4" /> 블로그 목록으로
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
