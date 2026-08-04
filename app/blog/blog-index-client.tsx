"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, ChevronRight, Tag, Search, X } from "lucide-react";
import { SEO } from "@/components/seo";
import CardThumb from "@/components/card-thumb";
import BottomTabBar from "@/components/bottom-tab-bar";

/**
 * 카드가 실제로 그리는 필드만. 본문(content)은 여기 없다 — page.tsx 주석 참조.
 * ★`@/lib/posts`에서 타입·상수를 import하지 않는 이유도 같다. 그 모듈을 클라이언트에서
 *   참조하는 순간 56편치 본문이 딸려 올 위험이 있어, 필요한 건 전부 props로 받는다.
 */
export type BlogCardMeta = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
};

/**
 * 검색 정규화 — 소문자 + 공백 제거.
 * 한국어 검색어는 띄어쓰기가 제각각이다("팟 오즈" / "팟오즈"). 공백을 지워 비교하면
 * 둘 다 같은 글을 찾는다. 영문 대소문자도 함께 흡수한다(ICM / icm).
 */
function normalize(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "");
}

/** 이 글이 검색어에 걸리는가 — 토큰 전부를 만족해야 한다(AND) */
function matchesQuery(post: BlogCardMeta, tokens: string[]): boolean {
  if (tokens.length === 0) return true;
  const haystack = normalize(`${post.title} ${post.desc} ${post.category} ${post.tags.join(" ")}`);
  return tokens.every((t) => haystack.includes(t));
}

export default function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogCardMeta[];
  categories: string[];
}) {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * URL 쿼리(?q= · ?tag=) 읽기 — **useSearchParams()를 쓰지 않는다.**
   *
   * ★이유(2026-08-05에 실제로 한 번 밟은 지뢰): 정적 렌더 페이지에서 useSearchParams()를
   *   호출하면 가장 가까운 Suspense 경계까지가 통째로 클라이언트 렌더로 떨어진다.
   *   그 결과 빌드 산출물 `.next/server/app/blog.html`에 **글 목록이 한 편도 안 남았다**
   *   (post 링크 56개 → 1개). 크롤러에겐 빈 페이지가 되는 것이라 SEO상 치명적이다.
   *
   *   대신 마운트 후 window.location에서 읽는다. 정적 HTML에는 전체 목록이 그대로 남고,
   *   ?q=·?tag= 가 붙어 들어온 경우에만 하이드레이션 직후 필터가 적용된다.
   *   ⚠ 되돌리지 말 것 — 되돌리면 목록 HTML이 다시 빈다.
   */
  const syncFromUrl = useCallback(() => {
    const sp = new URLSearchParams(window.location.search);
    setQuery(sp.get("q") ?? "");
    setActiveTag(sp.get("tag"));
  }, []);

  useEffect(() => {
    syncFromUrl();
    // 뒤로/앞으로 가기 — 같은 라우트 안에서 쿼리만 바뀌면 컴포넌트가 다시 마운트되지 않는다
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [syncFromUrl]);

  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [posts]
  );

  /** 검색어를 공백으로 쪼갠 토큰들. "팟오즈 리버" 처럼 두 단어를 다 만족하는 글만 남긴다. */
  const tokens = useMemo(
    () => query.trim().split(/\s+/).map(normalize).filter(Boolean),
    [query]
  );

  const filtered = useMemo(
    () =>
      sorted.filter(
        (p) =>
          (activeCategory === "전체" || p.category === activeCategory) &&
          (!activeTag || p.tags.includes(activeTag)) &&
          matchesQuery(p, tokens)
      ),
    [sorted, activeCategory, activeTag, tokens]
  );

  /** 필터가 하나라도 걸려 있으면 추천 포스트 없이 결과 그리드만 보여준다 */
  const isFiltering = activeCategory !== "전체" || !!activeTag || tokens.length > 0;

  const featured = sorted[0];
  const rest = sorted.slice(1);

  /** 검색 제출 — 입력 중에는 로컬 필터로 즉시 반응하고, 제출 시에만 URL에 남긴다(공유·뒤로가기용) */
  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.replace(q ? `/blog?q=${encodeURIComponent(q)}` : "/blog", { scroll: false });
    inputRef.current?.blur();
  }

  function clearAll() {
    setQuery("");
    setActiveTag(null);
    setActiveCategory("전체");
    router.replace("/blog", { scroll: false });
  }

  const jsonLd = [
    {
      "@type": "Blog",
      "name": "홀덤마스터 블로그",
      "description": "텍사스 홀덤 전략, 포커 팁, 토너먼트 정보를 정기적으로 업데이트합니다.",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "홀덤 전략 블로그", "item": "https://www.holdemmaster.com/blog" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="⚡ 온라인홀덤 전략 블로그 — 포커 실전 팁 매주 업데이트"
        description="⚡홀덤 전략⚡ 실력 올리는 가장 빠른 법. 블러핑·포지션 플레이·토너먼트 공략 등 실전 검증된 칼럼을 2~3일마다 업데이트합니다."
        keywords="홀덤 블로그, 포커 전략 칼럼, 텍사스 홀덤 팁, 홀덤 뉴스, 포커 토너먼트 정보, 홀덤 초보 팁, 블러핑 전략, 홀덤 포지션"
        path="/blog"
        schema={jsonLd}
      />

      {/* Header */}
      <section className="relative py-16 md:py-20 border-b border-gray-500/40 overflow-hidden bg-gray-500">
        {/* 로드맵 이미지 — 흑백, 콘트라스트 높여서 필름B&W 질감
            장식용 배경(decorative)이라 fetchpriority=high·preload 안 함.
            webp로 교체해 ~80% 용량 절감, eager+동기 디코딩으로 LCP 직전에만 페인트. */}
        <img
          src="/images/roadmap-preview.webp"
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{
            opacity: 0.32,
            filter: "grayscale(100%) invert(1) contrast(1.1) brightness(1.0)",
            objectPosition: "center 38%",
          }}
        />
        {/* 상단 페이드 — 네비와 자연스럽게 */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-500 to-transparent" />
        {/* 하단 페이드 */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-gray-500/80" />
        {/* 중간 스크림 */}
        <div className="absolute inset-0 bg-gray-500/25" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-primary mb-3">
            홀덤 전략 블로그
          </h1>
          <p className="max-w-xl mx-auto mb-6" style={{ color: "#fef3c7" }}>
            텍사스 홀덤 전략, 초보 가이드, 토너먼트 소식을 2~3일마다 업데이트합니다.
          </p>

          {/* ★사이트 검색 (2026-08-05 신설).
              그 전까지 사이트 전체에 type="search" 입력이 **0개**였다 — 한국어 56편 +
              다국어 457편을 카테고리 칩으로만 훑어야 했다.
              layout.tsx의 WebSite SearchAction이 이미 `/blog?q={search_term_string}` 를
              선언하고 있었으므로(구글에 약속만 해 두고 구현이 없던 상태) 그 계약을 그대로 구현한다. */}
          <form
            onSubmit={submitSearch}
            role="search"
            className="max-w-2xl mx-auto mb-8"
            id="search"
          >
            <label htmlFor="blog-search" className="sr-only">
              블로그 글 검색
            </label>
            <div className="relative">
              <Search
                className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="찾는 주제를 검색하세요 — 팟오즈, 블라인드, 족보…"
                autoComplete="off"
                className="w-full h-12 ps-12 pe-24 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground/70 text-sm md:text-base shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 transition-colors"
              />
              <button
                type="submit"
                className="absolute end-1.5 top-1/2 -translate-y-1/2 h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:brightness-95 active:scale-95 transition-all"
              >
                검색
              </button>
            </div>
          </form>

          {/* 로드맵 배너 */}
          <Link href="/blog/roadmap">
            <motion.div
              className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* 배경 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c0b35] via-[#0d1f3a] to-[#071a0e]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.18)_0%,transparent_65%)]" />

              {/* shimmer 광택 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,220,80,0.13) 50%, transparent 60%)", width: "200%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "linear", repeatDelay: 1.2 }}
              />

              {/* 박동 테두리 */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                animate={{ borderColor: ["rgba(212,175,55,0.35)", "rgba(212,175,55,0.75)", "rgba(212,175,55,0.35)"] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              />

              <div className="relative px-5 py-5 flex items-center gap-4">
                {/* 아이콘 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-yellow-500/15 border border-yellow-400/40 flex items-center justify-center text-3xl">
                  🗺️
                </div>

                {/* 텍스트 */}
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block text-[11px] bg-yellow-400 text-black font-black px-2.5 py-0.5 rounded-full uppercase tracking-wide leading-tight">
                      처음이라면 필독
                    </span>
                  </div>
                  <p className="text-[17px] font-black text-white leading-snug">
                    홀덤마스터 학습 로드맵
                  </p>
                  <p className="text-xs text-yellow-300/75 mt-0.5">
                    어디서부터 읽어야 할지 한눈에 정리했습니다
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["족보", "기초규칙", "확률", "포지션", "전략", "토너먼트"].map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-white/10 text-white/65 border border-white/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA 버튼 */}
                <motion.div
                  className="flex-shrink-0 px-4 py-2.5 bg-yellow-400 text-black font-black text-sm rounded-xl flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                  whileHover={{ backgroundColor: "#fef08a" }}
                >
                  로드맵 보기 →
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {["전체", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* 활성 필터 표시 — 지금 무엇으로 걸러진 목록인지 알려주고, 해제 경로를 준다 */}
        {isFiltering && (
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted-foreground">
              <strong className="text-foreground">{filtered.length}편</strong>
            </span>
            {tokens.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-semibold">
                <Search className="w-3.5 h-3.5" aria-hidden="true" /> {query.trim()}
              </span>
            )}
            {activeTag && (
              /* Link가 아니라 button인 이유: 같은 라우트로의 이동은 컴포넌트를 다시 마운트하지
                 않아 URL만 바뀌고 화면은 그대로 남는다. 상태를 직접 지우고 URL을 정리한다. */
              <button
                type="button"
                onClick={clearAll}
                aria-label={`태그 필터 «${activeTag}» 해제`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-semibold hover:bg-primary/25 transition-colors"
              >
                <Tag className="w-3.5 h-3.5" aria-hidden="true" /> {activeTag}
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
            {activeCategory !== "전체" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                {activeCategory}
              </span>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-muted-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              필터 해제
            </button>
          </div>
        )}

        {!isFiltering ? (
          <>
            {/* Featured Post */}
            <Link href={`/blog/${featured.slug}`}>
              <motion.article
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="h-52 md:h-auto md:w-72 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center justify-center flex-shrink-0">
                    <CardThumb slug={featured.slug} featured />
                  </div>
                  <div className="p-7 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                        ★ 추천 포스트
                      </span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-card border border-border text-muted-foreground">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{featured.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                      읽기 <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {rest.map((post, idx) => (
                <PostCard key={post.slug} post={post} delay={idx * 0.07} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filtered.length > 0
              ? filtered.map((post, idx) => <PostCard key={post.slug} post={post} delay={idx * 0.07} />)
              : (
                <div className="md:col-span-3 text-center py-20 text-muted-foreground">
                  <div className="text-5xl mb-4">—</div>
                  <p className="text-lg font-semibold">일치하는 글이 없습니다</p>
                  <p className="text-sm mt-2">
                    다른 검색어를 써 보시거나{" "}
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-primary font-semibold underline underline-offset-2"
                    >
                      전체 글
                    </button>
                    을 둘러보세요.
                  </p>
                </div>
              )
            }
          </div>
        )}
      </div>

      {/* 하단 전역 탭바 — 목록도 블로그 섹션이므로 blog 탭 활성 */}
      <BottomTabBar active="none" locale="ko" />
      <div className="h-[62px] lg:hidden" aria-hidden />
    </>
  );
}

function PostCard({ post, delay }: { post: BlogCardMeta; delay: number }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col"
      >
        <div className="h-36 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center justify-center">
          <CardThumb slug={post.slug} />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
          <h3 className="font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">{post.desc}</p>
          {/* ★카드 안의 태그는 링크로 만들지 않는다 — 카드 전체가 이미 <Link>라
              그 안에 또 <a>를 넣으면 중첩 앵커가 되어 HTML이 무효가 된다.
              태그를 눌러 필터링하는 경로는 글 상세 페이지의 태그 칩이 맡는다. */}
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.slice(0, 2).map(t => (
              <span key={t} className="flex items-center gap-0.5 text-xs text-muted-foreground/70">
                <Tag className="w-2.5 h-2.5" /> {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
            <span>{post.date}</span>
            <span className="flex items-center gap-0.5 text-primary font-semibold group-hover:gap-1 transition-all">
              읽기 <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
