/**
 * 「허브 셸」을 쓰는 경로 — components/hub-shell.tsx가 마스트헤드·좌측 레일·하단 탭바·
 * 우측 사이드바를 **전부 자기가** 그리는 페이지들이다.
 *
 * site-chrome.tsx는 이 목록을 보고 전역 크롬(BlogTopBar·FixedSideRail·<main> 패딩)을
 * **비켜준다**. 안 그러면 상단바가 2겹, 좌측 레일이 2개가 된다
 * (2026-08-04에 다국어 상단바가 정확히 이 방식으로 2겹이 됐던 전례가 있다).
 *
 * ★새 허브 페이지를 만들면 여기에 경로를 추가하고 page.tsx를 <HubPage>로 감쌀 것.
 *   둘 중 하나만 하면 크롬이 어긋난다.
 */
const HUB_ROUTES = [
  "/blog",
  "/tournaments",
  "/pub",
  "/strategy",
  "/rules",
  "/calculator",
  "/hand-chart",
  "/quiz",
  "/win-rate-quiz",
  "/glossary",
  "/holdem-practice",
] as const;

/** 하위 경로까지 셸을 쓰는 섹션 (예: /pub/gangnam, /rules/omaha) */
const HUB_SECTIONS = ["/pub", "/rules"] as const;

/**
 * 이 경로가 허브 셸을 쓰는가.
 * ⚠ `/blog/<slug>`(글 상세)는 **아니다** — 글은 목차·학습맵을 포함한 자기 3열 레이아웃을 갖는다.
 *   그래서 "/blog"는 정확히 일치할 때만 참이고, HUB_SECTIONS에 넣지 않았다.
 */
export function isHubRoute(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  if ((HUB_ROUTES as readonly string[]).includes(p)) return true;
  return (HUB_SECTIONS as readonly string[]).some((s) => p.startsWith(s + "/"));
}
