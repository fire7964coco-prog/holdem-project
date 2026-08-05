import type { Metadata } from "next";
import HoldemPracticeClient, { SEO_TITLE, SEO_DESC } from "./holdem-practice-client";
import HubPage from "@/components/hub-page";

const SITE = "https://www.holdemmaster.com";

/**
 * ★제목·description은 클라이언트의 `<SEO>`와 **같은 상수**를 쓴다.
 *   `<SEO>`가 런타임에 덮어쓰기 때문에, 문구를 따로 적으면 정적 HTML과 브라우저가 갈린다.
 */
export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESC,
  alternates: { canonical: `${SITE}/holdem-practice` },
  openGraph: {
    type: "website",
    url: `${SITE}/holdem-practice`,
    title: SEO_TITLE,
    description:
      "무료 연습 포인트 10,000점으로 AI 상대와 텍사스 홀덤을 연습하세요. 포지션·베팅 전략을 실전처럼 시험해보는 교육용 게임.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <HubPage title="연습장">
      <HoldemPracticeClient />
    </HubPage>
  );
}
