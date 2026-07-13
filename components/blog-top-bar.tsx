"use client";

import Link from "next/link";

const BG = "#1a3a2a";       // 커뮤니티 하단 네비와 동일 색상
const GOLD = "#d4af37";

interface BlogTopBarProps {
  homeHref?: string;         // 홈피드 링크 (기본: "/")
  homeFeedLabel?: string;    // 홈피드 버튼 레이블 (기본: "홈피드")
  communityLabel?: string;   // 커뮤니티 버튼 레이블 (기본: "커뮤니티")
}

export default function BlogTopBar({
  homeHref = "/",
  homeFeedLabel = "홈피드",
  communityLabel = "커뮤니티",
}: BlogTopBarProps) {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between px-5"
      style={{
        background: BG,
        borderBottom: "1px solid rgba(212,175,55,0.25)",
        height: "56px",
      }}
    >
      {/* 왼쪽: 홈피드 버튼 */}
      <Link
        href={homeHref}
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all hover:opacity-80 active:scale-95"
        style={{
          color: GOLD,
          background: "rgba(212,175,55,0.12)",
          border: "1px solid rgba(212,175,55,0.30)",
          letterSpacing: "-0.01em",
        }}
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {homeFeedLabel}
      </Link>

      {/* 가운데: 로고 (Playfair Display 세리프 마스트헤드) */}
      <span
        className="text-lg select-none"
        style={{
          color: GOLD,
          opacity: 0.8,
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontWeight: 800,
          letterSpacing: "0.04em",
        }}
      >
        ♠ HM
      </span>

      {/* 오른쪽: 커뮤니티 버튼 */}
      <Link
        href={homeHref}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-sm transition-all hover:opacity-90 active:scale-95"
        style={{
          background: "linear-gradient(135deg,#d4af37,#f0d060)",
          color: "#0d1c14",
          letterSpacing: "-0.01em",
        }}
      >
        {communityLabel}
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
