import type { ReactNode } from "react";
import { POSTS } from "@/lib/posts";
import { buildHubTrending } from "@/lib/hub-trending";
import HubShell from "@/components/hub-shell";
import HubSidebar from "@/components/hub-sidebar";

/**
 * 허브 페이지 래퍼 — **각 page.tsx가 실제로 쓰는 것은 이것 하나다.**
 *
 * 셸(좌 레일·마스트헤드·하단 탭바)과 우측 사이드바 데이터 조립을 여기서 끝내
 * 페이지마다 같은 코드를 복사하지 않게 한다. 서버 컴포넌트이므로 POSTS를 여기서 읽어도
 * 클라이언트 번들에는 들어가지 않는다(트렌딩 4줄만 직렬화된다).
 *
 * 사용법:
 *   export default function Page() {
 *     return <HubPage title="전략">{<StrategyClient />}</HubPage>;
 *   }
 */
export default function HubPage({
  title,
  children,
}: {
  /** 데스크톱 마스트헤드에서 「지금 여기」로 표시될 짧은 이름 (h1 아님) */
  title: string;
  children: ReactNode;
}) {
  const trending = buildHubTrending(POSTS.map((p) => ({ slug: p.slug, title: p.title })));
  return (
    <HubShell title={title} sidebar={<HubSidebar trending={trending} />}>
      {children}
    </HubShell>
  );
}
