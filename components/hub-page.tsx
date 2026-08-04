import type { ReactNode } from "react";
import { POSTS } from "@/lib/posts";
import { postsForLocale } from "@/lib/intl-posts";
import { buildHubTrending } from "@/lib/hub-trending";
import HubShell from "@/components/hub-shell";
import HubSidebar from "@/components/hub-sidebar";
import type { SecondaryLocale } from "@/lib/intl";

/**
 * 허브 페이지 래퍼 — **각 page.tsx가 실제로 쓰는 것은 이것 하나다.**
 *
 * 셸(좌 레일·마스트헤드·하단 탭바)과 우측 사이드바 데이터 조립을 여기서 끝내
 * 페이지마다 같은 코드를 복사하지 않게 한다. 서버 컴포넌트이므로 POSTS를 여기서 읽어도
 * 클라이언트 번들에는 들어가지 않는다(트렌딩 4줄만 직렬화된다).
 *
 * 사용법:
 *   export default function Page() {
 *     return <HubPage title="전략"><StrategyClient /></HubPage>;   // 한국어
 *   }
 *   export default function Page() {
 *     return <HubPage title="Calculator" locale="en"><CalcEn /></HubPage>;  // 영어
 *   }
 */
export default function HubPage({
  title,
  locale = null,
  children,
}: {
  /** 데스크톱 마스트헤드에서 「지금 여기」로 표시될 짧은 이름 (h1 아님) */
  title: string;
  /** null이면 한국어. 넘기면 셸 전체가 그 언어의 홈(`/en` 등)을 향한다. */
  locale?: SecondaryLocale | null;
  children: ReactNode;
}) {
  /**
   * 트렌딩은 **그 로케일의 글로만** 만든다.
   * 각 언어는 한국어 번역본이 아니라 독자적인 포스팅 세트다(사장님, 2026-08-04).
   * 순서 규칙(필라 2 + 최신 2)은 lib/hub-trending.ts 참조 — 슬러그 하드코딩은 없다.
   */
  const pool = locale ? postsForLocale(locale) : POSTS;
  const trending = buildHubTrending(
    pool.map((p) => ({ slug: p.slug, title: p.title, date: p.date, updated: p.updated })),
    locale
  );
  return (
    <HubShell title={title} locale={locale} sidebar={<HubSidebar trending={trending} locale={locale} />}>
      {children}
    </HubShell>
  );
}
