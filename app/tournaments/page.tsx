import TournamentsClient from "./tournaments-client";

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
  return <TournamentsClient todayISO={todayISO} />;
}
