import TournamentsClient from "./tournaments-client";
import { resolveBlogLinks } from "@/lib/tournaments-blog-links";

/**
 * 기준일은 서버(빌드 시점)에서 계산해 내려준다.
 * 클라이언트에서 new Date()를 쓰면 하이드레이션 불일치가 나므로 반드시 prop으로 전달.
 * → 배포할 때마다 대회 상태(예정/진행중/종료)가 자동으로 갱신된다.
 */
export default function Page() {
  // 한국 사이트이므로 KST(UTC+9) 기준으로 날짜를 계산한다.
  // toISOString()은 UTC라 한국 시간과 최대 9시간 어긋난다.
  const todayISO = new Date(Date.now() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  // ★ 가이드 링크는 서버에서 해결해 내려준다.
  //   resolveBlogLinks가 POSTS(전 한국어 본문)를 읽으므로 클라이언트에서 부르면
  //   본문 전체가 번들에 딸려 들어간다. 결과는 대회 id → 경로 몇 줄뿐이다.
  //   ko도 존재 검사를 타므로, 한국어판이 없는 가이드는 링크가 조용히 숨는다.
  return <TournamentsClient todayISO={todayISO} blogLinks={resolveBlogLinks("ko")} />;
}
