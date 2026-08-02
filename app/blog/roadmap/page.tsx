import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import BlogRoadmapClient from "./blog-roadmap-client";

// ★2026-08-02: metadata 미선언이라 상위 app/blog/layout.tsx의 canonical(=/blog)을 물려받아
//   **자기 자신이 아니라 블로그 목록을 표준으로 지목**하고 있었다. 사이트맵에는 들어 있으므로
//   색인 대상이 맞다 → 자기 참조로 바로잡는다.
export const metadata: Metadata = {
  title: "홀덤 학습 로드맵 — 뭐부터 읽어야 하나",
  description:
    "홀덤을 처음 배우는 순서대로 글을 엮었습니다. 규칙과 족보에서 시작해 포지션·확률·전략까지, 어디까지 읽었는지 따라가며 볼 수 있는 학습 지도입니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/blog/roadmap` },
};

export default function Page() {
  return <BlogRoadmapClient />;
}
