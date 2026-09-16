import CommunityClient from "./community-client";
import { POSTS } from "@/lib/posts";
import { postsForLocale } from "@/lib/intl-posts";
import { orderForFeed } from "@/lib/featured-order";
import { isSecondaryLocale } from "@/lib/intl";
import { buildHeroLine } from "@/lib/tournaments-digest";

/**
 * 홈(커뮤니티 피드) 서버 래퍼.
 * 블로그 티저용 메타데이터(본문 content 제외)를 서버에서 계산해 CommunityClient(클라이언트)에 props로 전달한다.
 * → 클라이언트가 전체 POSTS/postsForLocale 본문(~수 MB)을 JS 번들에 싣지 않게 함.
 * 홈 라우트(app/page.tsx + app/<locale>/page.tsx)는 CommunityClient 대신 이 래퍼를 렌더한다.
 */
export default function CommunityHome({ pageLocale }: { pageLocale?: string }) {
  const src =
    pageLocale && isSecondaryLocale(pageLocale) ? postsForLocale(pageLocale) : POSTS;
  const todayISO = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
  // 배치 순서 = lib/featured-order.ts (GA4·GSC 분석 기반). 전엔 POSTS 배열 순서(LEGACY→NEW = 옛 글부터)였다.
  const blogPosts = orderForFeed(src, todayISO).map(({ content, ...meta }) => meta);
  return <CommunityClient pageLocale={pageLocale} blogPosts={blogPosts} tournamentTeaser={buildHeroLine(todayISO)} />;
}
