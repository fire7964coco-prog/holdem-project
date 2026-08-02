import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RankingClient from "./ranking-client";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다
//   (components/seo.tsx는 useEffect로만 도는 클라이언트 컴포넌트라 서버 HTML엔 안 박힌다).
//   이 페이지는 「홀덤사이트」 28일 1,896노출로 사이트 최대 쿼리를 받는데, 같은 쿼리를 홈(/)이
//   1,351노출로 나눠 갖고 있었다. canonical이 홈을 가리키니 구글이 둘을 가를 근거가 없었다.
export const metadata: Metadata = {
  title: "온라인 홀덤 사이트, 안전하게 고르는 법 — 체크리스트 & 주요 사이트 비교 [2026]",
  description:
    "온라인 홀덤 사이트를 찾기 전 꼭 확인할 안전·합법성 기준과 먹튀 경고 신호를 정리했습니다. 세계 주요 홀덤 사이트의 라이센스·규모·특징도 정보 목적으로 비교합니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/ranking` },
};

export default function Page() {
  return <RankingClient />;
}
