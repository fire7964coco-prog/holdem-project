import { EVENT_UNTIL } from "./featured-order";
import { POSTS } from "./posts";

/** 관문 페이지 추천 블록에 올릴 «진행 중 대회 가이드» 카드 */
export type EventGuideCard = { href: string; title: string; desc: string };

/**
 * 오늘(KST) 기준으로 아직 종료일이 지나지 않은 대회 가이드를 카드로 돌려준다.
 *
 * ★ 서버 전용 — POSTS(전 한국어 본문)를 읽는다. 클라이언트에서 import하면 본문 전체가
 *   번들에 딸려 들어간다(전례 3MB). page.tsx에서 불러 결과 몇 줄만 prop으로 내린다.
 * ★ 종료일 정본은 lib/featured-order.ts EVENT_UNTIL 하나다 — 홈·/blog·관문이 같은 날 같이 강등된다.
 *   제목·설명은 글의 title·desc를 그대로 쓴다(카드 문구 창작 금지).
 */
export function activeEventGuides(today: string): EventGuideCard[] {
  const out: EventGuideCard[] = [];
  for (const [slug, until] of Object.entries(EVENT_UNTIL)) {
    if (today > until) continue;
    const p = POSTS.find((x) => x.slug === slug);
    if (!p) continue;
    out.push({ href: `/blog/${slug}`, title: p.title, desc: p.desc });
  }
  return out;
}
