"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Tag, ChevronLeft, ChevronRight, ChevronDown, Share2, Link2, Map, BookOpen } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { useState, useRef, useEffect, useCallback } from "react";
import type { Post } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { POST_LABELS, NAV_CTA, NAV_HOME_FEED, dirForLocale, type SecondaryLocale } from "@/lib/intl";
import { renderMarkdown, extractHeadings } from "@/app/blog/[slug]/blog-post-client";
import { clusterForSlug, EN_CLUSTERS, JA_CLUSTERS, ES_CLUSTERS, PT_CLUSTERS, DE_CLUSTERS, ZH_CLUSTERS, ID_CLUSTERS, type PillarCluster } from "@/lib/pillar-clusters";
import ClusterMinimap from "@/components/cluster-minimap";
import CommunityCTA from "@/components/community-cta";
import BlogTopBar from "@/components/blog-top-bar";
import ReadingProgressBar from "@/components/reading-progress-bar";
import CalcCtaButton from "@/components/calc-cta-button";

/**
 * 계산기 CTA 로케일별 라벨 — 클러스터 완역 로케일(en·ja·es·pt·de·zh·id)만.
 * 각 언어 포커 커뮤니티에서 실제로 쓰는 표현(equity/outs/pot odds는 대부분 영어 차용) 기준.
 */
const CALC_CTA_LABELS: Partial<Record<SecondaryLocale, { title: string; subtitle: string }>> = {
  en: { title: "Poker Odds Calculator", subtitle: "Win %, outs & pot odds instantly" },
  ja: { title: "ポーカー勝率計算機", subtitle: "勝率・アウツ・ポットオッズを即計算" },
  es: { title: "Calculadora de probabilidades", subtitle: "Equity, outs y pot odds al instante" },
  pt: { title: "Calculadora de probabilidades", subtitle: "Equity, outs e pot odds na hora" },
  de: { title: "Poker-Odds-Rechner", subtitle: "Equity, Outs & Pot Odds sofort" },
  zh: { title: "德州扑克概率计算器", subtitle: "胜率、补牌、底池赔率即时计算" },
  id: { title: "Kalkulator Odds Poker", subtitle: "Equity, outs & pot odds instan" },
};

function IntlTocList({
  headings,
  onNavigate,
}: {
  headings: { id: string; text: string; level: number }[];
  /** 모바일 sticky 바용: 지정 시 기본 scrollIntoView 대신 호출 (오프셋 보정 + 패널 닫기) */
  onNavigate?: (id: string) => void;
}) {
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
                if (onNavigate) onNavigate(h.id);
                else document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  allPosts,
}: {
  post: Post;
  locale: SecondaryLocale;
  summarySlot?: ReactNode;
  /** 관련글·이전/다음 계산용 메타(본문 content 제외). 서버에서 전달 — 클라이언트가 전 로케일 본문을 번들하지 않게. */
  allPosts: Omit<Post, "content">[];
}) {
  const t = POST_LABELS[locale];
  const dir = dirForLocale(locale);
  const posts = allPosts;
  const base = `/${locale}/blog`;

  // 이전/다음 글: 다국어 /[locale]/blog 피드는 postsForLocale 배열 순서 그대로 노출되므로
  // 그 순서를 따라 "이전 글 = 피드에서 바로 위 / 다음 글 = 피드에서 바로 아래"가 되게 한다.
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const stickyToolsRef = useRef<HTMLDivElement>(null); // 모바일 sticky 도구 바
  const tocDetailsRef = useRef<HTMLDetailsElement>(null); // 모바일 목차 <details>
  const trailBoxRef = useRef<HTMLDivElement>(null); // 모바일 트레일 스크롤 박스
  const pageUrl = `${SITE}${base}/${post.slug}`;

  // 피드 등에서 진입 시 스크롤 상단 고정
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  /** 모바일 목차 링크: sticky 바(도구 바 + 상단 헤더 56px) 높이만큼 보정해 스크롤 + 오버레이 패널 닫기 */
  const handleTocNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    tocDetailsRef.current?.removeAttribute("open");
    const barH = stickyToolsRef.current?.getBoundingClientRect().height ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - barH - 56 - 12;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, []);

  // 모바일 트레일 스크롤 박스: 첫 렌더 때 "You are here" 스톱이 보이게 박스 내부만 스크롤 (페이지 스크롤 X)
  useEffect(() => {
    const box = trailBoxRef.current;
    const cur = box?.querySelector<HTMLElement>("[data-current-stop]");
    if (box && cur) {
      box.scrollTop = Math.max(0, cur.offsetTop - box.clientHeight / 2 + cur.clientHeight / 2);
    }
  }, []);

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const headings = extractHeadings(post.content);
  const hasToc = headings.length >= 2;
  // 클러스터 미니맵: 전 필라를 완역한 로케일만(en·ja·es·pt·de·zh·id). 라벨은 로케일별 클러스터, UI라벨은 EN 유지.
  const localeClusters: PillarCluster[] | null =
    locale === "en" ? EN_CLUSTERS : locale === "ja" ? JA_CLUSTERS : locale === "es" ? ES_CLUSTERS : locale === "pt" ? PT_CLUSTERS : locale === "de" ? DE_CLUSTERS : locale === "zh" ? ZH_CLUSTERS : locale === "id" ? ID_CLUSTERS : null;
  const showMinimap = localeClusters !== null && clusterForSlug(post.slug, localeClusters) !== null;
  // 3단 배치: 목차(좌) · 본문(중앙) · 학습맵(우). 있는 것만 컬럼 생성.
  const gridClass =
    hasToc && showMinimap
      ? "xl:grid xl:grid-cols-[200px_1fr_240px] xl:gap-6"
      : hasToc
        ? "xl:grid xl:grid-cols-[220px_1fr] xl:gap-10"
        : showMinimap
          ? "xl:grid xl:grid-cols-[1fr_250px] xl:gap-10"
          : "";
  const bodyHtml = `<p class="text-muted-foreground text-base leading-relaxed mb-4">${renderMarkdown(
    post.content.replace(/^:::quiz:::$/m, ""),
  )}</p>`;

  return (
    <div dir={dir} lang={locale}>
      <ReadingProgressBar targetRef={contentRef} rtl={dir === "rtl"} />
      <BlogTopBar
        homeHref={`/${locale}`}
        homeFeedLabel={NAV_HOME_FEED[locale]}
        communityLabel={NAV_CTA[locale]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className={gridClass}>
          {hasToc && (
            <aside className="hidden xl:block">
              <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain pe-1">
                <nav className="bg-card border border-border rounded-2xl p-5" aria-label={t.contents}>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{t.contents}</p>
                  <IntlTocList headings={headings} />
                </nav>
              </div>
            </aside>
          )}

          <div className="min-w-0">
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

            {/* ── 모바일 슬림 sticky 도구 바 — xl 미만 (데스크탑은 사이드바, 절대 불변) ──
                행1 계산기 CTA(클러스터 완역 로케일만) / 행2 목차 토글(오버레이 패널)
                / 행3 학습맵(기본 접힘 → 현재 필라 트레일 + 전체맵 중첩 토글).
                sticky(in-flow)라 CLS 없음. 목차 패널은 absolute 오버레이 → 본문 안 밀림.
                top-14 = BlogTopBar(56px) 바로 아래, z-40 = 상단바(z-50)보다 아래. -mx-4/inset-x-0은 좌우 대칭이라 RTL 안전 */}
            {(localeClusters !== null || hasToc || showMinimap) && (
              <div
                ref={stickyToolsRef}
                className="xl:hidden sticky top-14 z-40 -mx-4 mb-6 px-4 pt-2 pb-2 bg-background/95 backdrop-blur-sm border-b border-border/70 shadow-[0_8px_18px_-14px_rgba(0,0,0,0.3)]"
              >
                {/* 행1 — 계산기 CTA (슬림: mb·py 축소, .calc-pulse 유지) — 로케일 현지 라벨 */}
                {localeClusters !== null && CALC_CTA_LABELS[locale] && (
                  <div className="[&>a]:mb-0 [&>a]:py-2">
                    <CalcCtaButton
                      href="/calculator"
                      title={CALC_CTA_LABELS[locale]!.title}
                      subtitle={CALC_CTA_LABELS[locale]!.subtitle}
                    />
                  </div>
                )}

                {/* 행2 — 목차 토글: 펼침 패널은 오버레이 + max-h 자체 스크롤 (본문을 통째로 덮지 않음) */}
                {hasToc && (
                  <details ref={tocDetailsRef} className="group/toc relative mt-1.5">
                    <summary
                      className="flex items-center justify-between gap-3 px-3 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-xl bg-card border border-border hover:bg-card/70 transition-colors"
                      aria-label={t.contents}
                    >
                      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary">
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> {t.contents}{" "}
                        <span className="text-muted-foreground/60 font-normal normal-case tracking-normal">({headings.length})</span>
                      </span>
                      <ChevronDown
                        className="w-4 h-4 text-primary transition-transform duration-200 group-open/toc:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <nav
                      className="absolute inset-x-0 top-full z-10 mt-1.5 max-h-[50vh] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-4"
                      aria-label={t.contents}
                    >
                      <IntlTocList headings={headings} onNavigate={handleTocNavigate} />
                    </nav>
                  </details>
                )}

                {/* 행3 — 학습맵(기본 접힘, 탭하면 현재 필라 트레일 + 전체맵 토글). UI 라벨은 EN 기조 유지 */}
                {showMinimap && (
                  <details className="group/map mt-1.5 rounded-xl bg-card border border-border">
                    <summary className="flex items-center justify-between gap-3 px-3 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-xl hover:bg-card/70 transition-colors">
                      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary">
                        <Map className="w-3.5 h-3.5" aria-hidden="true" /> Learning Map
                      </span>
                      <ChevronDown
                        className="w-4 h-4 text-primary transition-transform duration-200 group-open/map:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div
                      ref={trailBoxRef}
                      className="relative max-h-32 overflow-y-auto overscroll-contain border-t border-border/60 px-3 pt-1.5 pb-2.5"
                    >
                      <ClusterMinimap slug={post.slug} clusters={localeClusters!} hrefBase={base} bare currentOnly />
                    </div>
                    {/* 전체 학습맵 보기 — 탭하면 전체 필라 지도 펼침(자체 스크롤, 본문 안 밀림) */}
                    <details className="group/fullmap border-t border-border/60">
                      <summary className="flex items-center justify-between gap-2 px-3 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80 hover:text-primary transition-colors">
                        <span className="flex items-center gap-1.5"><Map className="w-3.5 h-3.5" aria-hidden="true" /> Full learning map</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-open/fullmap:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="max-h-[55vh] overflow-y-auto overscroll-contain border-t border-border/60 px-3 pt-1.5 pb-2.5">
                        <ClusterMinimap slug={post.slug} clusters={localeClusters!} hrefBase={base} bare />
                      </div>
                    </details>
                  </details>
                )}
              </div>
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

          {showMinimap && (
            <aside className="hidden xl:block">
              <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain pe-1">
                <ClusterMinimap slug={post.slug} clusters={localeClusters!} hrefBase={base} />
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
