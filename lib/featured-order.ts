/**
 * 포스팅 배치 순서 — 홈 피드·/blog 목록이 같이 읽는 단일 정본.
 *
 * 근거: docs/post-placement-analysis-2026-09-16.md (GA4·GSC 28일 분석).
 * 원칙: «접속해서 보이는 자리 = 클릭 확률이 가장 높은 자리»이니 성과가 검증된 글을 앞에 둔다.
 *
 * 순서
 *   1. 진행 중 대회 가이드 (EVENT_UNTIL — 종료일 지나면 자동 강등, 배열 수정 불필요)
 *   2. S 티어 고정 (세션·참여율·GSC 클릭 셋 다 검증된 글, 전환 경로 순)
 *   3. 오늘의 글 1편 (A 티어에서 날짜 시드 — 방문마다가 아니라 «날마다» 바뀐다.
 *      랜덤 금지: 봇과 사람이 같은 날 같은 화면을 봐야 SEO 신호가 안 흔들린다)
 *   4. A 티어 (참여율 높고 노출 부족한 글)
 *   5. 나머지 날짜 내림차순 — B 티어(저참여)·종료된 대회 글은 여기로 자연 강등
 *
 * 🔴 slug는 절대 바꾸지 않는다. 여기 없는 slug는 5번으로 흘러가므로 오타가 있어도 빌드는 깨지지 않는다
 *    — 대신 `npm run build` 뒤 홈 상단 순서를 눈으로 확인할 것.
 */

/** 시한 글: 대회 종료일(KST, 포함). 이 날까지 최상단, 다음 날부터 5번으로 강등 */
export const EVENT_UNTIL: Record<string, string> = {
  "apt-jeju-2026-fall-guide": "2026-10-07",
  "holdem-masters-7th-guide": "2026-10-05", // 본문의 제8회 절이 10/5까지 진행
};

/** S 티어 — 전환 경로 순 */
export const FEATURED_ORDER: string[] = [
  "holdem-tournament-how-to-enter",
  "holdem-tournament-buy-in-cost",
  "holdem-tournament-tax-guide",
  "holdem-pub-first-visit-guide",
  "holdem-rules",
  "holdem-hand-rankings",
  "holdem-starting-hand-range",
];

/** A 티어 — 참여율 순. «오늘의 글»도 여기서 뽑는다 */
export const SECONDARY_ORDER: string[] = [
  "position-is-everything-in-holdem",
  "a-high-board-cbet",
  "holdem-strategy",
  "bluffing-strategy-when-and-how",
  "when-to-fold-preflop-holdem",
  "holdem-range-meaning",
  "wsop-2026-tournament-guide",
  "holdem-3bet-strategy",
  "ace-paired-board-strategy",
  "donk-bet-strategy",
  "3bet-pot-low-board",
  "3bet-pot-cbet",
  "monotone-board-strategy",
];

/** KST 오늘 (YYYY-MM-DD). 서버 컴포넌트에서만 부르고 결과를 props로 넘긴다 — 클라이언트에서 부르면 하이드레이션이 어긋난다 */
export function todayKST(now: number = Date.now()): string {
  return new Date(now + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/** 날짜 시드 결정적 인덱스 — 같은 날엔 항상 같은 값 */
function daySeed(today: string): number {
  let h = 0;
  for (let i = 0; i < today.length; i++) h = (h * 31 + today.charCodeAt(i)) >>> 0;
  return h;
}

export type Orderable = { slug: string; date: string };

/**
 * 배치 순서대로 정렬한 새 배열을 돌려준다. 입력은 바꾸지 않는다.
 * @param today KST 날짜 — 시한 글 강등·오늘의 글 시드에 쓴다
 */
export function orderForFeed<T extends Orderable>(posts: T[], today: string): T[] {
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const used = new Set<string>();
  const out: T[] = [];
  const take = (slug: string) => {
    const p = bySlug.get(slug);
    if (p && !used.has(slug)) {
      used.add(slug);
      out.push(p);
    }
  };

  // 1. 진행 중 대회
  for (const [slug, until] of Object.entries(EVENT_UNTIL)) if (today <= until) take(slug);
  // 2. S 티어
  FEATURED_ORDER.forEach(take);
  // 3. 오늘의 글
  const pool = SECONDARY_ORDER.filter((s) => bySlug.has(s));
  if (pool.length) take(pool[daySeed(today) % pool.length]);
  // 4. A 티어
  SECONDARY_ORDER.forEach(take);
  // 5. 나머지 날짜순
  const rest = posts.filter((p) => !used.has(p.slug)).sort((a, b) => b.date.localeCompare(a.date));
  return [...out, ...rest];
}
