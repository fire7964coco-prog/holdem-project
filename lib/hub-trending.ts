import type { Post } from "./posts";

/**
 * 「이번 주 인기」 목록 — 홈 우측 사이드바가 보여주는 것과 **같은 4개**를 서버에서 만든다.
 *
 * ★왜 별도 파일인가: 홈(community-client.tsx)의 getTrending()은 Supabase에서 받아온 피드
 *   배열에 의존한다. 허브 페이지(계산기·전략·규칙…)에서 그걸 쓰려면 86KB짜리 클라이언트
 *   컴포넌트를 통째로 끌어와야 하고, 로그인도 필요 없는 정적 페이지에서 Supabase 왕복까지 하게 된다.
 *
 * ★홈과 같은 결과가 나오는 근거
 *   홈의 순서는 (1) TRENDING_PIN_SLUG 최상단 고정 → (2) 나머지는 좋아요 순인데 정적 티저는
 *   전부 0이라 배열 순서가 유지됨 → 그 배열은 sortFeed()가 PINNED_IDS 순으로 정렬한 것.
 *   즉 실질 결과는 「고정 슬러그 + PINNED_IDS 순서」다. 여기서는 그 규칙을 직접 적는다.
 *   ⚠ community-client.tsx의 TRENDING_PIN_SLUG·PINNED_IDS를 바꾸면 여기도 같이 바꿔야 한다.
 */

/** 최상단 고정 슬러그 — community-client.tsx의 TRENDING_PIN_SLUG와 같은 값 */
export const TRENDING_PIN_SLUG = "bluffing-strategy-when-and-how";

/**
 * 홈 PINNED_IDS를 허브용으로 옮긴 것. `slug`는 블로그 글, `href`가 있으면 일반 페이지.
 * (홈의 "page:tournaments" 티저에 해당하는 항목이 아래 첫 줄이다.)
 */
const PINNED_AFTER: { slug?: string; href?: string; title?: string }[] = [
  { href: "/tournaments", title: "2026 홀덤 대회 일정" },
  { slug: "holdem-masters-7th-guide" },
  { slug: "apt-incheon-2026-guide" },
  { slug: "holdem-tiebreak-rules" },
  { slug: "appt-korea-2026-guide" },
  { slug: "pocket-kings-kk-strategy" },
];

export type TrendingItem = {
  href: string;
  title: string;
};

/**
 * 홈과 같은 4개. 존재하지 않는 슬러그는 조용히 건너뛴다(글이 지워져도 목록이 비지 않게).
 *
 * @param posts 그 로케일의 글 목록
 * @param base  로케일 경로 접두어. 한국어는 ""(빈 문자열), 그 외 "/en" 같은 값.
 *
 * ★다국어에서는 고정 슬러그가 그 언어에 없는 경우가 많다(예: en엔 bluffing-strategy가 없다).
 *   그래서 고정 목록으로 4개를 못 채우면 **남은 글로 최신순 채움**을 한다.
 *   빈 사이드바보다 그 언어의 실제 글이 뜨는 편이 낫다.
 */
export function buildHubTrending(
  posts: Pick<Post, "slug" | "title" | "date" | "updated">[],
  base = ""
): TrendingItem[] {
  const bySlug = new Map(posts.map((p) => [p.slug, p.title]));
  const used = new Set<string>();
  const resolve = (e: { slug?: string; href?: string; title?: string }): TrendingItem | null => {
    /**
     * 페이지 항목(/tournaments)은 **한국어에서만** 쓴다.
     * ★2026-08-04 실측에서 잡은 사고: 다국어에도 통과시켰더니 /en/calculator의
     *   「TRENDING THIS WEEK」 1번이 한국어 "2026 홀덤 대회 일정"으로 떴다.
     *   제목이 이 파일에 한국어로 박혀 있기 때문이다.
     *   다국어용 제목을 여기서 새로 지어내는 대신, 페이지 항목을 빼고 **그 언어의 실제 글**로
     *   채운다(아래 fill). 대회 페이지로 가는 길은 좌측 레일이 이미 갖고 있다.
     */
    if (e.href) {
      if (base) return null;
      return { href: e.href, title: e.title ?? e.href };
    }
    if (!e.slug) return null;
    const title = bySlug.get(e.slug);
    if (!title) return null;
    used.add(e.slug);
    return { href: `${base}/blog/${e.slug}`, title };
  };

  const pinnedTitle = bySlug.get(TRENDING_PIN_SLUG);
  const head: TrendingItem[] = [];
  if (pinnedTitle) {
    used.add(TRENDING_PIN_SLUG);
    head.push({ href: `${base}/blog/${TRENDING_PIN_SLUG}`, title: pinnedTitle });
  }

  const tail = PINNED_AFTER.map(resolve).filter((x): x is TrendingItem => x !== null);
  const picked = [...head, ...tail];

  if (picked.length < 4) {
    const fill = [...posts]
      .filter((p) => !used.has(p.slug))
      .sort((a, b) => (b.updated || b.date).localeCompare(a.updated || a.date))
      .slice(0, 4 - picked.length)
      .map((p) => ({ href: `${base}/blog/${p.slug}`, title: p.title }));
    picked.push(...fill);
  }
  return picked.slice(0, 4);
}

