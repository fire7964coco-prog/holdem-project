import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandsClient from "./hands-client";

// 카니발 방지: /blog/holdem-hand-rankings 필라가 "홀덤 족보" 키워드 소유 → 이 도구는 noindex.
// ★2026-08-02 canonical 추가: 루트 layout의 alternates.canonical(홈 절대주소)을 물려받아
//   **noindex 페이지가 홈을 표준으로 지목**하고 있었다. noindex와 홈 canonical이 겹치면
//   구글에 모순된 신호가 간다(이 URL은 색인하지 말라 + 이 URL의 정본은 홈이다).
//   noindex를 확실히 전달하려면 자기 자신을 가리켜야 한다.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE}/hands` },
};

export default function Page() {
  return <HandsClient />;
}
