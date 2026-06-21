import type { Metadata } from "next";
import Link from "next/link";
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

const GOLD = "#d4af37";
const BG = "#0b1120";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 블로그 전용 미니 탑바 */}
      <div
        className="sticky top-0 z-50 flex items-center px-4 h-11"
        style={{ background: BG, borderBottom: "1px solid rgba(212,175,55,0.15)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-bold"
          style={{ color: GOLD }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          홈피드
        </Link>
        <span
          className="text-[11px] font-black tracking-widest ml-auto"
          style={{ color: "rgba(212,175,55,0.4)" }}
        >
          HM
        </span>
      </div>
      {children}
    </>
  );
}
