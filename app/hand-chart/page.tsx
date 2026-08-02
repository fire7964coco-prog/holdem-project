import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartClient from "./hand-chart-client";

// 카니발 방지: /blog/holdem-starting-hand-range 필라가 "홀덤 스타팅 핸드" 키워드 소유.
// 도구는 기능·내부링크만 유지하고 SERP 경쟁에서 제외(과거 /hands·/rules/texas-holdem 선례).
// ★2026-08-02 canonical 추가 — 이유는 app/hands/page.tsx 주석 참조(noindex ↔ 홈 canonical 모순).
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE}/hand-chart` },
};

export default function Page() {
  return <HandChartClient />;
}
