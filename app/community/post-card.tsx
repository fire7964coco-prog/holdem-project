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
  blogSlug?: string | null;
  blogLocale?: string | null;
  category?: string | null;
  readTime?: string | null;
  pageHref?: string | null;
  pageIcon?: string | null;
};

// ── 디자인 토큰 (에디토리얼 크림 팔레트) ──────────────────
export const BG     = "#f4f0e7";   // 크림 페이퍼 배경
export const CARD   = "#efe9da";   // 카드/섹션 배경
export const BORDER = "#ddd6c6";   // 디바이더
export const INK    = "#20312a";   // 다크그린 (주 텍스트)
export const MUTED  = "#8a7d5a";   // 웜브라운 (보조 텍스트)
export const RED    = "#7a2e2e";   // 좋아요·액센트
export const GREEN  = "#3a6b54";   // 라이브 표시
export const NAV    = "#20312a";   // 하단 탭바
export const GOLD   = "#20312a";   // 하위 호환 (= INK)

export const FLAG: Record<string, string> = {
  ko: "🇰🇷", en: "🇺🇸", ja: "🇯🇵", zh: "🇨🇳", es: "🇪🇸", de: "🇩🇪",
  pt: "🇧🇷", ar: "🇸🇦", tr: "🇹🇷", vi: "🇻🇳", id: "🇮🇩", ms: "🇲🇾", hi: "🇮🇳",
};

const AVG_COLORS = ["#20312a", "#7a2e2e", "#5a665e", "#8a7d5a", "#3a6b54"];

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "방금";
  if (m < 60) return `${m}분 전`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}시간 전`;
  return `${Math.floor(h / 24)}일 전`;
}

export function Avatar({
  post,
  size = 36,
  idx = 0,
}: {
  post: Pick<FeedPost, "type" | "authorAvatar" | "authorNickname">;
  size?: number;
  idx?: number;
}) {
  const bg = AVG_COLORS[idx % AVG_COLORS.length];
  if (post.type === "admin") {
    return (
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size, background: INK, border: `1.5px solid ${BORDER}` }}
      >
        <span className="font-bold" style={{ fontSize: size * 0.28, color: BG, letterSpacing: "0.02em" }}>HM</span>
      </div>
    );
  }
  if (post.authorAvatar) {
    return (
      <img
        src={post.authorAvatar}
        alt={post.authorNickname}
        className="rounded-full object-cover flex-shrink-0"
        style={{ width: size, height: size, border: `1.5px solid ${BORDER}` }}
      />
    );
  }
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, background: bg, border: `1.5px solid ${BORDER}` }}
    >
      <span className="font-semibold" style={{ fontSize: size * 0.38, color: BG, fontFamily: "var(--font-lora), serif" }}>
        {post.authorNickname.slice(0, 2).toUpperCase()}
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
  const isPageTeaser = !!post.pageHref;
  const blogHref = post.blogLocale
    ? `/${post.blogLocale}/blog/${post.blogSlug}`
    : `/blog/${post.blogSlug}`;

  const FONT_SANS = "var(--font-inter), var(--font-noto-sans-kr), sans-serif";
  const FONT_SERIF = "var(--font-lora), Georgia, serif";

  // ── 앱 페이지 바로가기 카드 ──
  if (isPageTeaser) {
    return (
      <Link
        href={post.pageHref!}
        className="block active:scale-[0.99] transition-transform"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-4 px-5 py-4">
          <span className="text-2xl flex-shrink-0">{post.pageIcon ?? "📄"}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold" style={{ color: INK, fontFamily: FONT_SANS }}>{post.title}</p>
            <p className="text-[12px] mt-0.5 line-clamp-1" style={{ color: MUTED, fontFamily: FONT_SANS }}>{post.content}</p>
          </div>
          <span className="text-[11px] font-semibold flex-shrink-0" style={{ color: MUTED, fontFamily: FONT_SANS }}>
            →
          </span>
        </div>
      </Link>
    );
  }

  const isMyLang = post.language === myLanguage;
  const [translated, setTranslated] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [transErr, setTransErr] = useState(false);

  const showTitle = post.type === "admin" && post.title && post.title !== post.content;
  const bodyText = translated && !showOriginal ? translated : post.content;

  async function handleTranslate() {
    if (translated) { setShowOriginal((v) => !v); return; }
    setTranslating(true);
    setTransErr(false);
    try {
      const res = await fetch("/api/community/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id, target: myLanguage, text: post.content }),
      });
      const data = await res.json();
      if (data?.translated) { setTranslated(data.translated); setShowOriginal(false); }
      else setTransErr(true);
    } catch { setTransErr(true); }
    finally { setTranslating(false); }
  }

  // ── 블로그 티저 카드 ──
  if (isBlogTeaser) {
    return (
      <article style={{ borderBottom: `1px solid ${BORDER}` }}>
        <Link href={blogHref} className="block px-5 pt-5 pb-4">
          {/* 키커 */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: MUTED, fontFamily: FONT_SANS }}
            >
              {post.category ?? "전략"} · HoldemMaster
            </span>
            <span style={{ flex: 1, height: 1, background: BORDER }} />
            {post.readTime && (
              <span className="text-[10px]" style={{ color: MUTED, fontFamily: FONT_SANS }}>
                📖 {post.readTime}
              </span>
            )}
          </div>

          {/* 세리프 헤드라인 */}
          <h2
            className="text-[20px] font-medium leading-snug mb-2"
            style={{ color: INK, fontFamily: FONT_SERIF, letterSpacing: "-0.3px" }}
          >
            {post.title}
          </h2>

          {/* 요약 */}
          <p
            className="text-[14px] leading-relaxed line-clamp-2"
            style={{ color: "#3f4b43", fontFamily: FONT_SANS }}
          >
            {post.content}
          </p>

          {post.imageUrl && (
            <div className="mt-3 rounded overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
              <img src={post.imageUrl} alt="" className="w-full object-cover" style={{ maxHeight: 200 }} />
            </div>
          )}

          {/* CTA */}
          <div className="mt-3 flex items-center gap-1.5">
            <span
              className="text-[12px] font-semibold"
              style={{ color: RED, borderBottom: `1px solid ${RED}`, paddingBottom: 1, fontFamily: FONT_SANS }}
            >
              전체 읽기
            </span>
            <span style={{ color: RED, fontSize: 11 }}>→</span>
          </div>
        </Link>
      </article>
    );
  }

  // ── 일반 커뮤니티/어드민 포스트 ──
  return (
    <article
      style={{
        borderBottom: `1px solid ${BORDER}`,
        opacity: isMyLang || translated ? 1 : 0.65,
        transition: "opacity 0.2s",
      }}
    >
      {/* 키커 라인 */}
      <div className="flex items-center gap-2 px-5 pt-4 mb-2">
        <span
          className="text-[12px]"
          style={{ color: MUTED, fontFamily: FONT_SERIF, fontStyle: "italic" }}
        >
          {post.type === "admin" ? "r/홀덤마스터" : "r/커뮤니티"}
        </span>
        <span style={{ flex: 1, height: 1, background: BORDER }} />
        <span className="text-[11px]" style={{ color: MUTED, fontFamily: FONT_SANS }}>
          {timeAgo(post.createdAt)}
        </span>
      </div>

      {/* 본문 */}
      <Link
        href={clickable && post.type !== "admin" ? `/post/${post.id}` : "#"}
        className={clickable && post.type !== "admin" ? "block px-5 pb-2" : "block px-5 pb-2 pointer-events-none"}
      >
        {/* 어드민 featured 헤드라인 */}
        {showTitle && (
          <h2
            className="text-[20px] font-medium leading-snug mb-2"
            style={{ color: INK, fontFamily: FONT_SERIF, letterSpacing: "-0.3px" }}
          >
            {post.title}
          </h2>
        )}

        {/* 본문 텍스트 */}
        {translated && !showOriginal ? (
          <div className="rounded p-3 mb-1" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <p className="text-[10px] font-semibold mb-1" style={{ color: MUTED, fontFamily: FONT_SANS }}>🌐 번역됨</p>
            <p className="text-[15px] leading-relaxed" style={{ color: INK, fontFamily: FONT_SERIF }}>
              {bodyText}
            </p>
          </div>
        ) : (
          <p
            className="text-[15px] leading-relaxed whitespace-pre-wrap"
            style={{
              color: isMyLang ? "#3f4b43" : MUTED,
              fontFamily: FONT_SERIF,
              fontSize: showTitle ? "15px" : "17px",
            }}
          >
            {bodyText}
          </p>
        )}

        {post.imageUrl && (
          <div className="mt-3 rounded overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
            <img src={post.imageUrl} alt="" className="w-full object-cover" style={{ maxHeight: 220 }} />
          </div>
        )}
      </Link>

      {/* 번역 버튼 */}
      {!isMyLang && (
        <div className="px-5 pb-2">
          <button
            onClick={handleTranslate}
            disabled={translating}
            className="text-[12px] font-semibold disabled:opacity-50"
            style={{
              color: translated && !showOriginal ? MUTED : RED,
              borderBottom: `1px solid ${translated && !showOriginal ? MUTED : RED}`,
              paddingBottom: 1,
              fontFamily: FONT_SANS,
            }}
          >
            {translating ? "번역 중..." : translated ? (showOriginal ? "🌐 번역 보기" : "↩ 원문 보기") : `🌐 ${FLAG[myLanguage] ?? ""} 번역`}
          </button>
          {transErr && <span className="text-[11px] ml-2" style={{ color: RED }}>번역 실패</span>}
        </div>
      )}

      {/* 저자 + 액션 */}
      <div className="flex items-center gap-2.5 px-5 py-3">
        <Avatar post={post} size={28} />
        <span className="text-[13px] font-semibold" style={{ color: INK, fontFamily: FONT_SANS }}>
          {post.type === "admin" ? "HoldemMaster" : post.authorNickname}
        </span>
        {post.language && <span className="text-[13px]">{FLAG[post.language] ?? "🌐"}</span>}

        <div className="ml-auto flex items-center gap-4">
          {/* 댓글 */}
          <Link href={`/post/${post.id}`} className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.6" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="text-[13px]" style={{ color: MUTED, fontFamily: FONT_SANS }}>{post.commentCount}</span>
          </Link>

          {/* 좋아요 */}
          <button
            onClick={() => onLike(post.id)}
            className="flex items-center gap-1.5 active:scale-90 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={post.liked ? RED : "none"} stroke={post.liked ? RED : MUTED} strokeWidth="1.6">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>
            </svg>
            <span className="text-[13px]" style={{ color: post.liked ? RED : MUTED, fontFamily: FONT_SANS }}>
              {post.likeCount}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
