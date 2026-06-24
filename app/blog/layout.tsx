import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "⚡ 홀덤 블로그 — 블라인드·족보·전략 가이드 모음",
  description:
    "【홀덤 블로그】블라인드 뜻·족보 판정·C벳·체크레이즈·홀덤펍 가이드까지. ⚡초보·중급 실전 글을 주제별로 모았습니다 — 인기 글부터 읽어보세요.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "⚡ 홀덤 블로그 — 기초·전략 가이드 | 홀덤마스터",
    description: "홀덤 기초 규칙·족보·베팅 전략 칼럼 모음.",
    url: `${SITE}/blog`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
