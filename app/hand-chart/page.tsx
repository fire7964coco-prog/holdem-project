import type { Metadata } from "next";
import HandChartClient from "./hand-chart-client";

// 카니발 방지: /blog/holdem-starting-hand-range 필라가 "홀덤 스타팅 핸드" 키워드 소유.
// 도구는 기능·내부링크만 유지하고 SERP 경쟁에서 제외(과거 /hands·/rules/texas-holdem 선례).
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Page() {
  return <HandChartClient />;
}
