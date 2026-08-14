"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Clock, ChevronLeft, ChevronRight, ChevronDown, Share2, Link2, Map, Calculator, Trophy, TrendingUp, LayoutGrid, Zap, Book, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import type { Post } from "@/lib/posts";

/**
 * ★ 2026-08-02: 전체 목록을 받아 클라이언트가 고르던 것을 **서버가 골라 보내는** 방식으로 바꿨다.
 * 57편치 메타를 넘겨봐야 실제로 쓰는 건 이전·다음·관련 3개 = 5편뿐이고, 나머지 52편은
 * __next_f 플라이트에 그대로 실려 나가는 낭비였다. 필드도 카드가 그리는 것만 남긴다.
 */
type NavLink = Pick<Post, "slug" | "title">;
type RelatedCard = Pick<Post, "slug" | "title" | "category" | "image" | "imageAlt" | "emoji">;
import { SITE } from "@/lib/site";
import CommunityCTA from "@/components/community-cta";
import BlogTopBar from "@/components/blog-top-bar";
import SideRail from "@/components/side-rail";
import BottomTabBar, { TAB_BAR_HEIGHT } from "@/components/bottom-tab-bar";
import ReadingProgressBar from "@/components/reading-progress-bar";
import ClusterMinimap, { PILLAR_ICONS } from "@/components/cluster-minimap";
import RankingTable from "@/components/ranking-table";
import CalcCtaButton from "@/components/calc-cta-button";
import GtoSeriesNav from "@/components/gto-series-nav";
import { KO_CLUSTERS, clusterForSlug } from "@/lib/pillar-clusters";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

/** 한국어 미니맵 UI 라벨 */
const KO_MINIMAP_LABELS = { learningMap: "Learning Map", overview: "Overview", youAreHere: "You are here", hub: "Hub" };

const PokerOddsCalculator = dynamic(
  () => import("@/components/poker-odds-calculator").then((m) => m.PokerOddsCalculator),
  { ssr: false, loading: () => <div className="h-32 rounded-xl bg-card animate-pulse" /> }
);
const QuizWidget = dynamic(
  () => import("@/components/quiz-widget").then((m) => m.QuizWidget),
  { ssr: false, loading: () => <div className="h-24 rounded-xl bg-card animate-pulse" /> }
);


function TocList({
  headings,
  onNavigate,
}: {
  headings: { id: string; text: string; level: number }[];
  /** 모바일 sticky 바용: 지정 시 기본 scrollIntoView 대신 호출 (오프셋 보정 + 패널 닫기) */
  onNavigate?: (id: string) => void;
}) {
  let h2Count = 0;
  return (
    <>
      <ol className="space-y-1.5">
        {headings.map((h) => {
          if (h.level === 2) h2Count++;
          const isH3 = h.level === 3;
          return (
            <li key={h.id} className={`flex items-start gap-2.5 ${isH3 ? 'ml-5' : ''}`}>
              {isH3 ? (
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
              ) : (
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                  {h2Count}
                </span>
              )}
              <a
                href={`#${h.id}`}
                className={`hover:text-primary transition-colors leading-snug ${isH3 ? 'text-muted-foreground/60 text-xs' : 'text-muted-foreground text-sm'}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate(h.id);
                  else document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
}


export default function BlogPost({
  post,
  headings,
  bodyParts,
  summarySlot,
  prevPost,
  nextPost,
  related,
}: {
  /**
   * ★ content가 없다. 본문은 서버에서 이미 렌더돼 bodyParts로 온다.
   * content를 다시 넣으면 마크다운 원문과 렌더된 HTML이 **둘 다** 플라이트에 실린다.
   */
  post: Omit<Post, "content">;
  /** 목차 — 서버에서 extractHeadings(contentForClient)로 계산해 전달. */
  headings: { id: string; text: string; level: number }[];
  /**
   * 서버에서 렌더된 본문 HTML. `:::quiz:::` 로 나뉜 조각들이며,
   * 길이가 2 이상이면 조각 사이마다 <QuizWidget/>이 들어간다(길이 1 = 퀴즈 없음).
   */
  bodyParts: string[];
  /**
   * 서버(page.tsx)에서 본문 첫 이미지를 추출·제거 후 "이 글 전체 요약" 섹션으로 만들어 전달.
   * LCP를 제목 텍스트로 옮기기 위해 본문에서는 빠지고, 페이지 맨 하단(관련 글 다음)에 lazy 로드.
   */
  summarySlot?: ReactNode;
  /** 이전/다음 글 — /blog 피드와 같은 순서(날짜 내림차순)로 **서버에서** 고른 것. */
  prevPost: NavLink | null;
  nextPost: NavLink | null;
  /** 같은 카테고리 관련글 3개 — 서버에서 선별. */
  related: RelatedCard[];
}) {

  const [copied, setCopied] = useState(false);
  const [showStickyNext, setShowStickyNext] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const stickyToolsRef = useRef<HTMLDivElement>(null); // 모바일 sticky 도구 바
  const tocDetailsRef = useRef<HTMLDetailsElement>(null); // 모바일 목차 <details>
  const trailBoxRef = useRef<HTMLDivElement>(null); // 모바일 트레일 스크롤 박스
  const pageUrl = `${SITE}/blog/${post.slug}`;

  // 피드 등에서 진입 시 스크롤 상단 고정
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  /**
   * 모바일 상단 네비 숨김/표시 — **오직 위로 스크롤할 때만** 나타난다.
   *
   * ★2026-08-04 변경: 기본값을 false(보임) → true(숨김)로, 그리고
   *   `scrolled > 240` 예외를 없앴다. 그 예외 탓에 상단 근처에서는 아래로 내려가도
   *   바가 계속 떠 있어, 「한 줄 정답」을 지나는 순간 튀어나와 읽기를 방해했다.
   *   이제 진입 직후엔 아무것도 없고, 되돌아보려고 위로 올릴 때만 꺼내진다.
   *   임계값 6px — 손떨림·관성 스크롤로 바가 깜빡이지 않게 한다.
   */
  const [toolsHidden, setToolsHidden] = useState(true);
  const lastYRef = useRef(0);
  const idleTimerRef = useRef<number | undefined>(undefined);

  // 스크롤 60% 지나면 모바일 스티키 CTA 표시
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    setShowStickyNext(total > 0 && scrolled / total > 0.6);

    const dy = scrolled - lastYRef.current;
    if (Math.abs(dy) > 6) {
      setToolsHidden(dy > 0); // 내려가는 "동안"만 숨김, 위로 올리면 즉시 표시
      lastYRef.current = scrolled;
    }

    // ★스크롤이 멈추면 다시 꺼낸다 — 읽는 동안은 본문 100%, 손을 떼면 네비가 돌아온다.
    //   관성 스크롤이 이어지는 동안엔 타이머가 계속 리셋되므로 진짜 멈췄을 때만 뜬다.
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    idleTimerRef.current = window.setTimeout(() => setToolsHidden(false), 220);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    };
  }, [handleScroll]);

  /**
   * 모바일 목차 링크: 고정 크롬 높이만큼 보정해 스크롤 + 오버레이 패널 닫기.
   * ★도구 바의 **아래 모서리(bottom)** 를 그대로 오프셋으로 쓴다.
   *   전엔 `barH + 56`으로 상단바 56px을 상수로 더했는데, 이제 그 상단바가
   *   모바일엔 없고 lg 이상에만 있다. sticky인 도구 바의 bottom은 위에 뭐가 있든
   *   이미 그만큼 밀려 있으므로 화면폭에 따라 분기할 필요가 없다.
   */
  const handleTocNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    tocDetailsRef.current?.removeAttribute("open");
    const barBottom = stickyToolsRef.current?.getBoundingClientRect().bottom ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - Math.max(barBottom, 0) - 12;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, []);

  // 모바일 트레일 스크롤 박스: 첫 렌더 때 "You are here" 📍가 보이게 박스 내부만 스크롤 (페이지 스크롤 X)
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

  const hasToc = headings.length >= 2;
  /** 이 글이 속한 필라(=블로그 카테고리). 상단 네비의 첫 버튼 라벨이 된다. */
  const cluster = clusterForSlug(post.slug, KO_CLUSTERS);
  const showMinimap = cluster !== null;
  const PillarIcon = (cluster && PILLAR_ICONS[cluster.id]) || Book;

  /**
   * 상단 네비 드롭다운 상호 배타 — 패널이 전부 `absolute inset-x-0 top-full`이라
   * 둘이 동시에 열리면 겹쳐서 깨진다. native <details>는 자체 배타 기능이 없다.
   */
  const navRefs = useRef<(HTMLDetailsElement | null)[]>([]);
  const closeOtherPanels = useCallback((keep: HTMLDetailsElement | null) => {
    navRefs.current.forEach((d) => { if (d && d !== keep && d.open) d.open = false; });
  }, []);

  /** 뒤로 — 사이트 안에서 왔으면 히스토리, 검색 등 외부 유입이면 피드로 */
  const router = useRouter();
  const goBack = useCallback(() => {
    const cameFromSite =
      typeof document !== "undefined" &&
      document.referrer &&
      document.referrer.includes(window.location.host);
    if (cameFromSite && window.history.length > 1) router.back();
    else router.push("/");
  }, [router]);
  // ★좌측 컬럼은 이제 **항상** 있다 (2026-08-04) — 전역 레일이 그 안에 얹히기 때문이다.
  //   목차는 있으면 레일 아래에 붙는다. 예전엔 목차가 없으면 좌측 컬럼 자체가 없었다.
  //   폭(180/220/210)은 건드리지 않는다 — 고정 레일 방식으로 <main>을 212px 밀면
  //   본문이 978 → 766px로 좁아져서, 블로그 글만 이 방식을 쓴다(side-rail.tsx 주석 참조).
  const gridClass = showMinimap
    ? "xl:grid xl:grid-cols-[180px_1fr_210px] xl:gap-5"
    : "xl:grid xl:grid-cols-[220px_1fr] xl:gap-10";

  return (
    // pb-[62px]: 하단 고정 탭바가 마지막 콘텐츠를 가리지 않도록. lg 이상은 탭바가 없어 해제.
    <div className="min-h-screen pb-[62px] lg:pb-0">
      <ReadingProgressBar targetRef={contentRef} />
      {/* ★전역 이동 탑바는 데스크톱에서만 (2026-08-04).
          모바일은 「하단=전역 탭바 / 상단=섹션 내부 네비(도구 바)」 표준 구조를 따른다.
          데스크톱은 하단 탭바가 lg:hidden이라 여기까지 빼면 네비가 0이 된다. */}
      <div className="hidden lg:block xl:hidden">
        <BlogTopBar homeHref="/" communityLabel="커뮤니티" />
      </div>
      {/* 모바일 좌우 여백: px-4(16px) + article p-4(16px) = 한쪽 32px가 겹쳐 있었다.
          384px 화면에서 본문 폭이 318px까지 좁아져 한 줄 21자에 그쳤다(2026-08-01 실측).
          바깥을 px-2로 낮춰 본문 폭을 되찾는다. sm 이상은 기존 그대로. */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 py-10">
        <div className={gridClass}>

          {/* 데스크탑 좌측 컬럼 — xl 이상. 전역 레일(위) + 목차(아래).
              ★모바일이 「하단=전역 / 상단=섹션」이듯, 데스크톱은 「좌측 레일=전역 /
                목차·학습맵=섹션」이다. 레일을 목차 위에 세로로 얹어 본문 폭은 그대로 둔다. */}
          <aside className="hidden xl:block">
            <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain pe-1">
              <SideRail active="none" />
              {hasToc && (
                <nav className="mt-4 bg-card border border-border rounded-2xl p-5" aria-label="목차">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">📚 목차</p>
                  <TocList headings={headings} />
                </nav>
              )}
            </div>
          </aside>

          {/* 메인 콘텐츠 컬럼 */}
          <div className="min-w-0">
            {/* ★시각적 브레드크럼 (2026-08-05 신설).
                `page.tsx`는 BreadcrumbList JSON-LD를 예전부터 내보내고 있었는데 **화면에는 없었다**
                — 구조화 데이터만 있고 사람이 볼 경로가 없는 상태였다. 같은 사이트 안에서도
                /rules/*·tournament-guide-post는 이미 시각 브레드크럼을 갖고 있어 일관성도 깨져 있었다.

                ★단계는 JSON-LD와 **정확히 같은 3단**(홈 → 블로그 → 이 글)으로 맞춘다.
                  카테고리를 한 칸 끼워 넣고 싶어지지만, 카테고리는 URL이 없는 클라이언트 필터라
                  마크업에 없는 단계를 화면에만 만들면 구글 기준으로 불일치다. */}
            <nav aria-label="현재 위치" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">홈</Link>
                </li>
                <li aria-hidden="true" className="text-muted-foreground/50">
                  <ChevronRight className="w-3 h-3 breadcrumb-sep" />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">블로그</Link>
                </li>
                <li aria-hidden="true" className="text-muted-foreground/50">
                  <ChevronRight className="w-3 h-3 breadcrumb-sep" />
                </li>
                <li className="min-w-0 max-w-full truncate font-semibold text-foreground" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} 읽기
                </span>
                <time dateTime={post.date} className="text-xs text-muted-foreground">
                  {post.date} 작성
                </time>
                {post.updated && post.updated !== post.date && (
                  <time
                    dateTime={post.updated}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    title="이 글은 최신 정보로 업데이트되었습니다"
                  >
                    {post.updated} 업데이트
                  </time>
                )}
              </div>

              {/* ★제목 위 대형 이모지(text-6xl) 제거 — 2026-08-04 사장님 지시.
                  "AI가 생성한 느낌"이 든다는 것. E-E-A-T로 12년 경력·WSOP 취재를 내세우는
                  사이트에서 첫 화면의 인상이 그 반대로 읽히면 그 자체가 손해다.
                  post.emoji 필드는 지운 게 아니다 — 관련글 카드·피드 카드·로드맵에서
                  작은 아이콘으로 계속 쓰인다. 여기 히어로 자리에서만 뺀다.
                  다국어 글(intl-blog-post-client)에는 원래 이 블록이 없었다. */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{post.desc}</p>
            </header>

            {/* 한 줄 정답 — Featured Snippet 후보 */}
            {post.tldr && (
              <aside
                aria-label="한 줄 정답"
                className="mb-8 relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-primary"
                    aria-hidden="true"
                  >
                    💡 한 줄 정답
                  </span>
                </div>
                <p className="mt-2 text-base md:text-lg text-foreground leading-relaxed font-medium">
                  {post.tldr}
                </p>
              </aside>
            )}

            {/* ★태그 칩 제거 (2026-08-04, 사장님 지시).
                경위: 원래 6~10개가 전부 <span>이라 눌러도 무반응이었다 → 같은 날 `/blog?tag=`
                링크로 바꿨더니 **목적지가 블로그 목록 페이지**여서, 글을 읽던 사람을
                한 단계 뒤(목록)로 되돌려 보내는 동선이 됐다. 사장님 판단으로 통째로 뺀다.

                왜 이게 이득인가:
                - 모바일 첫 화면(844px)에서 태그가 3~4줄(약 150px)을 먹고 있었다.
                  「한 줄 정답」과 본문 첫 문단이 그만큼 위로 올라온다.
                  (근거: docs/ga4-engagement-report-2026-07-31.md §6 — 원래 이 블록을
                   헤더에서 여기로 내린 것도 같은 이유였다. 이번엔 아예 없앤 것.)
                - 같은 주제로 가는 탐색은 이미 더 나은 장치가 셋이나 있다:
                  학습맵(클러스터 미니맵) · 관련 글 카드 3개 · :::readnext 카드.
                  태그는 그중 가장 약한 경로였다.

                ★post.tags 필드는 지우지 않았다 — page.tsx의 keywords 메타,
                  /blog 목록 카드, 검색(`?q=`) 매칭에서 계속 쓰인다.
                ★`/blog?tag=` 필터도 목록 쪽에 그대로 살려 둔다. 링크를 잠깐 배포했던 터라
                  이미 수집된 URL이 있으면 그대로 동작하는 편이 낫다. */}

            {/* 순위/목록형 글(족보 순위 등) — 최상단 예쁜 순위표 (발췌·AI 인용 최적화) */}
            {post.itemList && (
              <RankingTable
                name={post.itemList.name}
                items={post.itemList.items}
                order={post.itemList.order}
              />
            )}

            {/* ── 모바일 sticky 도구 바 — xl 미만 (데스크탑은 사이드바) ──
                2026-08-01 재설계: 3행 스택(154px) → 아이콘 1행(44px).
                상단바 56px까지 더하면 832px 화면의 26%를 크롬이 먹고 있었다.
                여기에 "아래로 스크롤하면 숨김"을 붙여 읽는 동안 점유율을 0으로 만든다.
                각 패널은 absolute 오버레이라 본문을 밀지 않는다(CLS 0 유지).
                top-14 = BlogTopBar(56px) 바로 아래, z-40 = 상단바(z-50)보다 아래 */}
            <div
              ref={stickyToolsRef}
              /* ★fixed (2026-08-04) — 전엔 sticky라 **문서 흐름에 자리를 차지**했다.
                 그래서 숨김 상태(translate-y-full)여도 스크롤이 그 지점을 지날 때
                 화면을 통과하며 잠깐 보였다("한 줄 정답 아래부터 떠 있다"는 지적).
                 fixed로 흐름에서 빼면 toolsHidden일 때 완전히 화면 밖이라,
                 위로 스크롤할 때만 나타난다.
                 lg 이상은 BlogTopBar(56px)가 있으므로 그 아래(top-14)에 붙는다.
                 배경은 하단 전역 탭바와 같은 계열에 한 톤 밝게(#1a3a2a vs #0d1c14). */
              /* ★하단 전역 탭바와 완전 동일 규격 — 높이 62px, 아이콘 위 / 라벨 아래 세로 배치.
                 배경만 한 톤 밝게(#1a3a2a vs 하단 #0d1c14)해 상·하단을 구분한다. */
              style={{ background: "#1a3a2a", borderBottom: "1px solid rgba(255,255,255,0.10)", height: 62 }}
              className={`xl:hidden fixed inset-x-0 top-0 lg:top-14 z-40 px-2 sm:px-4 flex items-stretch shadow-[0_8px_18px_-14px_rgba(0,0,0,0.45)] transition-transform duration-200 ${
                toolsHidden ? "-translate-y-[calc(100%+1px)] lg:-translate-y-[calc(100%+3.5rem)]" : "translate-y-0"
              }`}
            >
              {/* ★상단 네비 (2026-08-04 재설계)
                  [←] · 카테고리 ▾ · 목차 ▾ · 바로가기 ▾ — 셋 다 "누르면 열리는" 같은 문법으로
                  통일해 하단 전역 탭바와 짝을 맞춘다. 전엔 계산기만 바로가는 링크라 성격이 튀었다.
                  카테고리 버튼은 현재 필라 이름을 그대로 달아 "지금 어느 카테고리인지"를 보여준다. */}
              <div className="relative flex w-full items-stretch">
                {/* 뒤로 — 하단 탭과 같은 세로 배치(아이콘 위 / 라벨 아래) */}
                <button
                  type="button"
                  onClick={goBack}
                  aria-label="뒤로 가기"
                  className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 hover:bg-white/10 transition-colors"
                  style={{ color: "#f4f0e7" }}
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[10px] font-semibold leading-tight">뒤로</span>
                </button>

                {/* 카테고리(= 이 글이 속한 필라) — 펼치면 전체 학습맵(현재 필라는 자동 펼침) */}
                {showMinimap && cluster && (
                  <details
                    ref={(el) => { navRefs.current[0] = el; }}
                    onToggle={(e) => { if (e.currentTarget.open) closeOtherPanels(e.currentTarget); }}
                    className="group/map flex-1 min-w-0"
                  >
                    <summary
                      className="flex h-full flex-col items-center justify-center gap-0.5 px-1 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-white/10 group-open/map:bg-white/10 transition-colors"
                      style={{ color: "#f4f0e7" }}
                    >
                      <PillarIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span className="flex max-w-full items-center gap-0.5 text-[10px] font-semibold leading-tight">
                        <span className="min-w-0 truncate">{cluster.pillarLabel}</span>
                        <ChevronDown className="w-2.5 h-2.5 flex-shrink-0 transition-transform duration-200 group-open/map:rotate-180" aria-hidden="true" />
                      </span>
                    </summary>
                    {/* ★한 번에 전체 학습맵 (2026-08-04) — 전엔 현재 필라 트레일만 보이고
                        「다른 카테고리 보기」를 또 눌러야 전체가 나왔다. 두 단계를 없앴다.
                        ClusterMinimap 기본 모드가 전 필라 아코디언 + 현재 필라 자동 펼침이다. */}
                    <div
                      ref={trailBoxRef}
                      className="absolute inset-x-0 top-full z-10 mt-1.5 max-h-[62vh] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl px-3 py-2.5"
                    >
                      <ClusterMinimap slug={post.slug} clusters={KO_CLUSTERS} hrefBase="/blog" labels={KO_MINIMAP_LABELS} bare />
                    </div>
                  </details>
                )}

                {/* 목차 — 이 글 안 */}
                {hasToc && (
                  <details
                    ref={(el) => { tocDetailsRef.current = el; navRefs.current[1] = el; }}
                    onToggle={(e) => { if (e.currentTarget.open) closeOtherPanels(e.currentTarget); }}
                    className="group/toc flex-1 min-w-0"
                  >
                    <summary
                      className="flex h-full flex-col items-center justify-center gap-0.5 px-1 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-white/10 group-open/toc:bg-white/10 transition-colors"
                      style={{ color: "#f4f0e7" }}
                      aria-label="목차 펼치기/접기"
                    >
                      <span className="text-[16px] leading-none">📚</span>
                      <span className="flex max-w-full items-center gap-0.5 text-[10px] font-semibold leading-tight">
                        <span className="min-w-0 truncate">목차 {headings.length}</span>
                        <ChevronDown className="w-2.5 h-2.5 flex-shrink-0 transition-transform duration-200 group-open/toc:rotate-180" aria-hidden="true" />
                      </span>
                    </summary>
                    <nav
                      className="absolute inset-x-0 top-full z-10 mt-1.5 max-h-[55vh] overflow-y-auto overscroll-contain rounded-xl bg-card border border-border shadow-xl p-4"
                      aria-label="목차"
                    >
                      <TocList headings={headings} onNavigate={handleTocNavigate} />
                    </nav>
                  </details>
                )}

                {/* 바로가기 — 대회 일정(GSC 1위)·계산기·승률 시뮬·핸드 차트 */}
                <details
                  ref={(el) => { navRefs.current[2] = el; }}
                  onToggle={(e) => { if (e.currentTarget.open) closeOtherPanels(e.currentTarget); }}
                  className="group/go flex-1 min-w-0"
                >
                  <summary
                    className="flex h-full flex-col items-center justify-center gap-0.5 px-1 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-white/10 group-open/go:bg-white/10 transition-colors"
                    style={{ color: "#e9c766" }}
                  >
                    <Zap className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span className="flex max-w-full items-center gap-0.5 text-[10px] font-semibold leading-tight">
                      <span className="min-w-0 truncate">바로가기</span>
                      <ChevronDown className="w-2.5 h-2.5 flex-shrink-0 transition-transform duration-200 group-open/go:rotate-180" aria-hidden="true" />
                    </span>
                  </summary>
                  <div className="absolute inset-x-0 top-full z-10 mt-1.5 rounded-xl bg-card border border-border shadow-xl overflow-hidden">
                    {([
                      // ★검색 진입점 (2026-08-05). 사이트에 검색 입력이 0개였다 — 그 첫 관문을
                      //   여기 맨 위에 둔다(블로그 글이 검색 유입의 착지점이라 가장 자주 열리는 메뉴다).
                      { href: "/blog#search",   Icon: Search,     label: "글 검색",       desc: "56편에서 주제 찾기" },
                      { href: "/tournaments",   Icon: Trophy,     label: "대회 일정",     desc: "국내외 홀덤 대회" },
                      { href: "/calculator",    Icon: Calculator, label: "계산기",        desc: "아웃츠·팟오즈·ICM" },
                      { href: "/win-rate-quiz", Icon: TrendingUp, label: "승률 시뮬레이터", desc: "핸드별 승률 확인" },
                      { href: "/hand-chart",    Icon: LayoutGrid, label: "핸드 차트",     desc: "포지션별 오픈 범위" },
                      // ⚠ 여기에 «/hands»를 넣지 마라 (2026-08-13에 넣었다가 같은 날 뺐다 — footer도 동일).
                      //   그 페이지는 noindex다. 블로그 글마다 「족보는 저기」라고 가리키면
                      //   색인 신호와 내부링크가 서로 반대를 말한다. 족보는 필라가 받는다.
                    ] as const).map(({ href, Icon, label, desc }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-2.5 px-3 py-2.5 no-underline border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors"
                      >
                        <Icon className="w-4 h-4 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-[12px] font-bold leading-tight text-foreground">{label}</span>
                          <span className="block text-[10px] leading-tight text-muted-foreground">{desc}</span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground/50" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
            </div>

            {/* Interactive Calculator — 확률 계산기 포스트 & 홀덤 확률 완전 정복 */}
            {(post.slug === "holdem-odds-calculator" || post.slug === "holdem-probability") && (
              <div>
                <PokerOddsCalculator />
              </div>
            )}

            {/* Article Body */}
            <article
              ref={contentRef}
              className="prose-holdem blog-prose bg-card border border-border rounded-2xl px-3 py-4 sm:p-6 md:p-10"
            >
              {/* 퀴즈가 있는 글만 조각별 <div>로 감싼다 — 없는 글의 DOM을 바꾸지 않기 위해 분기를 유지한다. */}
              {bodyParts.length > 1
                ? (
                    <>
                      {bodyParts.map((html, i) => (
                        <div key={i}>
                          <div
                            className="text-muted-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: `<p class="text-muted-foreground text-base leading-relaxed mb-4">${html}</p>`,
                            }}
                          />
                          {i < bodyParts.length - 1 && <QuizWidget />}
                        </div>
                      ))}
                    </>
                  )
                : (
                  <div
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `<p class="text-muted-foreground text-base leading-relaxed mb-4">${bodyParts[0]}</p>`,
                    }}
                  />
                )
              }
            </article>

            {/*
              GTO 솔버 시리즈 내비 — 시리즈 13편에서만 렌더된다(그 외에는 null).
              ★2026-08-15 신설. 아래 「이전 글 / 다음 글」은 **날짜순**인데 시리즈 13편이
              전부 같은 날 발행이라 순서가 사실상 임의였다. 시리즈 순서를 따로 준다.
            */}
            <GtoSeriesNav slug={post.slug} />

            {/* Prev / Next Navigation — 강조형 CTA 버튼 */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group">
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">← 이전 글</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {prevPost.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href="/blog" className="group">
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">← 가장 최신 글</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        블로그 전체 글 보기
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="group">
                  <div
                    className="flex items-center justify-between gap-4 p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 2px 12px rgba(212,175,55,0.25)" }}
                  >
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(13,28,20,0.6)" }}>다음 글 읽기 →</div>
                      <div className="text-sm font-extrabold leading-snug line-clamp-2" style={{ color: "#0d1c14" }}>
                        {nextPost.title}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(13,28,20,0.12)" }}>
                      <ChevronRight className="w-5 h-5" style={{ color: "#0d1c14" }} />
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href="/blog" className="group">
                  <div className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">블로그 전체 글 →</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        블로그 전체 글 보기
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Related Posts — 이미지 카드형 */}
            {related.length > 0 && (
              <div className="mt-12">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">✦ 함께 읽으면 좋은 글</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all cursor-pointer h-full flex flex-col">
                        {r.image ? (
                          <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                            <Image
                              src={r.image}
                              alt={r.imageAlt ?? r.title}
                              fill
                              sizes="(max-width:768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center aspect-[16/9] bg-primary/5 text-4xl">
                            {r.emoji}
                          </div>
                        )}
                        <div className="p-4 flex flex-col flex-1">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">{r.category}</div>
                          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug flex-1">{r.title}</h3>
                          <div className="flex items-center gap-1 mt-3 text-xs text-primary font-semibold">
                            읽기 <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 📋 이 글 전체 요약 — LCP 회피용으로 본문 첫 이미지를 페이지 최하단에 lazy 로드 */}
            {summarySlot}

            {/* Author Bio Card — E-E-A-T 강화 */}
            <aside
              className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-7"
              aria-label="작성자 정보"
            >
              <div className="flex items-start gap-5 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-3xl flex-shrink-0">
                  ♠
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground mb-0.5">작성자</div>
                  <div className="font-bold text-foreground text-lg mb-1">
                    <Link href="/about" className="hover:text-primary transition-colors">
                      홀덤마스터 편집팀
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    12년 경력의 포커 전략 전문가 팀. WSOP·KPT·APT 토너먼트 현장 취재 경험 보유.
                    GTO 솔버(GTO+, PioSolver) 분석 기반의 데이터 중심 전략 콘텐츠를 제공합니다.
                    모든 콘텐츠는 <strong className="text-foreground">실전 검증된 정보</strong>만을
                    담습니다.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border">
                {[
                  { label: "운영 경력", value: "12년+" },
                  { label: "발행 글 수", value: "57편" },
                  { label: "현장 취재", value: "WSOP·APT" },
                  { label: "솔버 분석", value: "Pio · GTO+" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <dt className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mb-0.5">
                      {label}
                    </dt>
                    <dd className="text-xs font-bold text-primary">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "포커 전략", href: "/strategy" },
                    { label: "GTO 분석", href: "/strategy" },
                    { label: "토너먼트", href: "/tournaments" },
                  ].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/25 hover:border-primary/50 transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  편집팀 상세 소개 <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

            {/* Social Share Buttons */}
            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <Share2 className="w-4 h-4 text-primary" aria-hidden="true" /> 이 글 공유하기
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="이 글을 트위터에 공유하기"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] text-xs font-semibold hover:bg-[#1da1f2]/20 transition-all"
                >
                  <FaXTwitter className="w-3.5 h-3.5" aria-hidden="true" /> Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="이 글을 페이스북에 공유하기"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] text-xs font-semibold hover:bg-[#1877f2]/20 transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" aria-hidden="true" /> Facebook
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="이 글의 링크를 복사하기"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
                >
                  <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
                  {copied ? "복사됨!" : "링크 복사"}
                </button>
              </div>
            </div>

            {/* Community CTA */}
            <CommunityCTA locale="ko" />

            {/* Back to Blog */}
            <div className="mt-10 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
                <ChevronLeft className="w-4 h-4" /> 블로그 목록으로 돌아가기
              </Link>
            </div>
          </div>{/* end main content column */}

          {/* 데스크탑 우측 학습 지도(미니맵) — xl 이상 */}
          {showMinimap && (
            <aside className="hidden xl:block">
              <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain pe-1">
                <CalcCtaButton />
                <ClusterMinimap slug={post.slug} clusters={KO_CLUSTERS} hrefBase="/blog" labels={KO_MINIMAP_LABELS} />
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* 모바일 스티키 CTA — 스크롤 60% 이후 표시, 다음 글 있을 때만.
          ★bottom을 0 → 하단 탭바 높이(62px)로 올렸다. 그대로 두면 탭바와 겹친다. */}
      {nextPost && (
        <div
          /* ★pointer-events-none 필수 — opacity-0은 클릭을 막지 않는다.
             bottom을 62px(탭바 위)로 올린 뒤 숨김 상태(translate-y-full)가 정확히
             탭바 자리(-7~62px)에 겹쳤고, z-50이라 탭을 눌러도 이 링크가 먹어
             엉뚱한 포스트로 이동했다. */
          className={`xl:hidden fixed left-0 right-0 z-50 transition-all duration-300 ${showStickyNext ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}
          style={{ bottom: TAB_BAR_HEIGHT, background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 -4px 24px rgba(212,175,55,0.35)" }}
        >
          <Link href={`/blog/${nextPost.slug}`} className="flex items-center justify-between gap-3 px-5 py-4">
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(13,28,20,0.55)" }}>다음 글 읽기 →</div>
              <div className="text-sm font-extrabold truncate" style={{ color: "#0d1c14" }}>{nextPost.title}</div>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(13,28,20,0.15)" }}>
              <ChevronRight className="w-5 h-5" style={{ color: "#0d1c14" }} />
            </div>
          </Link>
        </div>
      )}

      {/* ★하단 전역 탭바 (2026-08-04 신설).
          검색으로 이 글에 바로 떨어진 독자가 사이트의 나머지로 갈 길이 상단바뿐이었다. */}
      <BottomTabBar active="none" locale="ko" />
    </div>
  );
}
