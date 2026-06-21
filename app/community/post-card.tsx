"use client";

import { useState } from "react";
import Link from "next/link";

export type FeedPost = {
  id: string;
  type: "admin" | "community";
  language: string;
  title: string;
  content: string;
  imageUrl: string | null;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  authorNickname: string;
  authorAvatar: string | null;
  authorBadge: string | null;
  liked: boolean;
  /** 블로그 티저 카드용 — 설정 시 블로그 글 티저로 렌더 */
  blogSlug?: string | null;
  /** locale 피드에서 전달 — /en/blog/[slug] 등 locale-aware 링크 생성용 */
  blogLocale?: string | null;
  /** 블로그 카테고리 (티저 배지) */
  category?: string | null;
  /** 블로그 읽기 시간 (예: "8분") */
  readTime?: string | null;
};

export const GOLD = "#d4af37";
export const BG = "#0b1120";
export const CARD = "#0f1a2e";
export const BORDER = "rgba(212,175,55,0.12)";

export const FLAG: Record<string, string> = {
  ko: "🇰🇷", en: "🇺🇸", ja: "🇯🇵", zh: "🇨🇳", es: "🇪🇸", de: "🇩🇪",
  pt: "🇧🇷", ar: "🇸🇦", tr: "🇹🇷", vi: "🇻🇳", id: "🇮🇩", ms: "🇲🇾", hi: "🇮🇳",
};

const BADGE: Record<string, { label: string; color: string }> = {
  winner: { label: "🏆 우승", color: "#facc15" },
  hot: { label: "🔥 인기", color: "#f87171" },
  top: { label: "⭐ TOP", color: "#60a5fa" },
  participant: { label: "🎟️ 참여", color: "#34d399" },
};

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "now";
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

export function Avatar({
  post,
  size = 36,
}: {
  post: Pick<FeedPost, "type" | "authorAvatar" | "authorNickname">;
  size?: number;
}) {
  if (post.type === "admin") {
    return (
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size, background: "linear-gradient(135deg,#d4af37,#f0d060)" }}
      >
        <span className="font-black" style={{ fontSize: size * 0.28, color: BG }}>HM</span>
      </div>
    );
  }
  if (post.authorAvatar) {
    return (
      <img
        src={post.authorAvatar}
        alt={post.authorNickname}
        className="rounded-full object-cover flex-shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, background: "rgba(255,255,255,0.1)" }}
    >
      <span className="font-bold" style={{ fontSize: size * 0.4, color: "#fff" }}>
        {post.authorNickname.slice(0, 1).toUpperCase()}
      </span>
    </div>
  );
}

export default function PostCard({
  post,
  myLanguage,
  onLike,
  clickable = true,
}: {
  post: FeedPost;
  myLanguage: string;
  onLike: (id: string) => void;
  clickable?: boolean;
}) {
  const isBlogTeaser = !!post.blogSlug;
  const blogHref = post.blogLocale
    ? `/${post.blogLocale}/blog/${post.blogSlug}`
    : `/blog/${post.blogSlug}`;
  const isMyLang = post.language === myLanguage;
  const [translated, setTranslated] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [transErr, setTransErr] = useState(false);

  const badge = post.authorBadge ? BADGE[post.authorBadge] : null;
  const showTitle = post.type === "admin" && post.title && post.title !== post.content;
  const bodyText = translated && !showOriginal ? translated : post.content;

  async function handleTranslate() {
    if (translated) {
      setShowOriginal((v) => !v);
      return;
    }
    setTranslating(true);
    setTransErr(false);
    try {
      const res = await fetch("/api/community/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id, target: myLanguage, text: post.content }),
      });
      const data = await res.json();
      if (data?.translated) {
        setTranslated(data.translated);
        setShowOriginal(false);
      } else {
        setTransErr(true);
      }
    } catch {
      setTransErr(true);
    } finally {
      setTranslating(false);
    }
  }

  // 목업 기준: 어드민=골드 테두리, 유저=초록 테두리로 시각 구분
  const adminBorder = post.type === "admin"
    ? "1px solid rgba(212,175,55,0.25)"
    : "1px solid rgba(52,211,153,0.18)";

  // ── 블로그 티저 카드 (목업의 "⭐ 어드민 티저 카드 → /blog 연결") ──
  if (isBlogTeaser) {
    return (
      <article
        className="mx-3 lg:mx-0 mb-3 rounded-2xl overflow-hidden"
        style={{ background: CARD, border: "1px solid rgba(212,175,55,0.25)" }}
      >
        <div
          className="hidden lg:block"
          style={{ height: 3, background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }}
        />
        <Link href={blogHref} className="block">
          {/* 작성자 */}
          <div className="flex items-center gap-2.5 px-4 lg:px-5 pt-3.5 lg:pt-4 pb-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
              <Avatar post={post} size={36} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <p className="text-[13px] lg:text-sm font-bold" style={{ color: GOLD }}>
                  HoldemMaster
                </p>
                {post.category && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.12)", color: GOLD, border: "1px solid rgba(212,175,55,0.3)" }}
                  >
                    {post.category}
                  </span>
                )}
              </div>
              <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                📖 {post.readTime ?? ""} · 블로그
              </p>
            </div>
          </div>

          {/* 제목 */}
          <div className="px-4 lg:px-5 pb-1.5">
            <p className="text-[15px] font-bold leading-snug" style={{ color: "#f0e8c8" }}>
              {post.title}
            </p>
          </div>

          {/* 요약 발췌 */}
          <div className="px-4 lg:px-5 pb-3">
            <p
              className="text-[13.5px] lg:text-sm leading-relaxed line-clamp-3"
              style={{ color: "rgba(240,232,200,0.7)" }}
            >
              {post.content}
            </p>
          </div>

          {post.imageUrl && (
            <img src={post.imageUrl} alt="" className="w-full object-cover" style={{ maxHeight: 340 }} />
          )}
        </Link>

        {/* 전체 읽기 CTA */}
        <div className="px-4 lg:px-5 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <Link
            href={blogHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl active:scale-95 transition-transform"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
          >
            전체 읽기 →
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className="mx-3 lg:mx-0 mb-3 rounded-2xl overflow-hidden transition-all"
      style={{
        background: CARD,
        border: adminBorder,
        opacity: isMyLang || translated ? 1 : 0.62,
        transition: "opacity 0.2s",
      }}
    >
      {/* 어드민 골드 상단 바 — 데스크탑에서만 */}
      {post.type === "admin" && (
        <div
          className="hidden lg:block"
          style={{ height: 3, background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }}
        />
      )}

      {/* 작성자 */}
      <div className="flex items-center gap-2.5 px-4 lg:px-5 pt-3.5 lg:pt-4 pb-2">
        {/* 모바일: w-8 / 데스크탑: w-10 */}
        <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
          <Avatar post={post} size={36} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p
              className="text-[13px] lg:text-sm font-bold truncate"
              style={{ color: post.type === "admin" ? GOLD : "#f0e8c8" }}
            >
              {FLAG[post.language] ?? "🌐"}{" "}
              {post.type === "admin" ? "HoldemMaster" : post.authorNickname}
            </p>
            {post.type === "admin" && (
              <span
                className="hidden lg:inline text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.12)", color: GOLD, border: "1px solid rgba(212,175,55,0.3)" }}
              >
                OFFICIAL
              </span>
            )}
            {badge && (
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.07)", color: badge.color }}
              >
                {badge.label}
              </span>
            )}
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              · {timeAgo(post.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <Link
        href={clickable ? `/post/${post.id}` : "#"}
        className={clickable ? "block" : "block pointer-events-none"}
      >
        {showTitle && (
          <div className="px-4 lg:px-5 pb-1.5">
            <p className="text-[15px] font-bold leading-snug" style={{ color: "#f0e8c8" }}>
              {post.title}
            </p>
          </div>
        )}

        <div className="px-4 lg:px-5 pb-3">
          {!isMyLang && translated && !showOriginal ? (
            <div
              className="rounded-lg p-3 mb-1"
              style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}
            >
              <p className="text-[11px] font-semibold mb-1" style={{ color: "rgba(212,175,55,0.7)" }}>
                🌐 Translated
              </p>
              <p className="text-[13.5px] lg:text-sm leading-relaxed" style={{ color: "#f0e8c8" }}>
                {bodyText}
              </p>
            </div>
          ) : (
            <p
              className="text-[13.5px] lg:text-sm leading-relaxed whitespace-pre-wrap"
              style={{
                color: isMyLang
                  ? "rgba(240,232,200,0.88)"
                  : "rgba(255,255,255,0.22)",
              }}
            >
              {bodyText}
            </p>
          )}
        </div>

        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt=""
            className="w-full object-cover"
            style={{ maxHeight: 340 }}
          />
        )}
      </Link>

      {/* 번역 버튼 */}
      {!isMyLang && (
        <div className="px-4 lg:px-5 pb-1">
          <button
            onClick={handleTranslate}
            disabled={translating}
            className="text-[11px] lg:text-xs font-semibold px-2.5 py-1 rounded-lg active:scale-95 transition-all disabled:opacity-50"
            style={{
              background: translated && !showOriginal
                ? "rgba(212,175,55,0.15)"
                : "rgba(255,255,255,0.06)",
              color: translated && !showOriginal ? GOLD : "rgba(255,255,255,0.5)",
              border: `1px solid ${translated && !showOriginal ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {translating
              ? "번역 중..."
              : translated
              ? showOriginal
                ? "🌐 번역 보기"
                : "↩ 원문 보기"
              : `🌐 ${FLAG[myLanguage] ?? ""} 번역`}
          </button>
          {transErr && (
            <span className="text-[11px] ml-2" style={{ color: "#f87171" }}>
              번역 실패
            </span>
          )}
        </div>
      )}

      {/* 액션 바 */}
      <div
        className="flex items-center gap-5 px-4 lg:px-5 py-2.5 lg:pt-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-1.5 active:scale-90 transition-transform"
        >
          <svg
            className="w-[18px] h-[18px] lg:w-5 lg:h-5"
            fill={post.liked ? "#f87171" : "none"}
            viewBox="0 0 24 24"
            stroke={post.liked ? "#f87171" : "rgba(255,255,255,0.35)"}
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span
            className="text-xs lg:text-sm"
            style={{ color: post.liked ? "#f87171" : "rgba(255,255,255,0.35)" }}
          >
            {post.likeCount}
          </span>
        </button>

        <Link
          href={`/post/${post.id}`}
          className="flex items-center gap-1.5 active:scale-90 transition-transform"
        >
          <svg
            className="w-[18px] h-[18px] lg:w-5 lg:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs lg:text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            {post.commentCount}
          </span>
        </Link>

        <span className="ml-auto text-xs hidden lg:block" style={{ color: "rgba(255,255,255,0.18)" }}>
          👁 {post.likeCount + post.commentCount * 3}
        </span>
      </div>
    </article>
  );
}
