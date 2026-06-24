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

// ── 블로그 티저 카드 UI 라벨 (언어별) ────────────────────────
const CARD_LABELS: Record<string, { blog: string; readMore: string; goTo: string }> = {
  ko: { blog: "블로그",   readMore: "전체 읽기 →", goTo: "바로가기 →" },
  en: { blog: "Blog",     readMore: "Read more →",  goTo: "Go →" },
  ja: { blog: "ブログ",   readMore: "続きを読む →", goTo: "詳細 →" },
  zh: { blog: "博客",     readMore: "阅读全文 →",   goTo: "前往 →" },
  es: { blog: "Blog",     readMore: "Leer más →",   goTo: "Ver →" },
  de: { blog: "Blog",     readMore: "Weiterlesen →", goTo: "Öffnen →" },
  ar: { blog: "مدوّنة",  readMore: "اقرأ المزيد →", goTo: "انتقل →" },
  tr: { blog: "Blog",     readMore: "Devamını oku →", goTo: "Git →" },
  vi: { blog: "Blog",     readMore: "Đọc thêm →",   goTo: "Xem →" },
  id: { blog: "Blog",     readMore: "Baca selengkapnya →", goTo: "Buka →" },
  ms: { blog: "Blog",     readMore: "Baca lagi →",  goTo: "Buka →" },
  pt: { blog: "Blog",     readMore: "Ler mais →",   goTo: "Abrir →" },
  hi: { blog: "ब्लॉग",  readMore: "पूरा पढ़ें →", goTo: "जाएँ →" },
};

// 한국어 카테고리 문자열 → 언어별 번역
const CATEGORY_I18N: Record<string, Partial<Record<string, string>>> = {
  "초보 가이드": { en: "Beginner Guide", ja: "初心者ガイド", zh: "新手指南", es: "Guía básica", de: "Einsteiger-Guide", ar: "دليل المبتدئين", tr: "Başlangıç Rehberi", vi: "Hướng dẫn cơ bản", id: "Panduan Pemula", ms: "Panduan Asas", pt: "Guia Básico", hi: "शुरुआती गाइड" },
  "토너먼트":   { en: "Tournament",      ja: "トーナメント",   zh: "锦标赛",     es: "Torneo",        de: "Turnier",          ar: "بطولة",             tr: "Turnuva",          vi: "Giải đấu",          id: "Turnamen",          ms: "Kejohanan",          pt: "Torneio",       hi: "टूर्नामेंट" },
  "strategy":   { en: "Strategy",        ja: "戦略",           zh: "策略",       es: "Estrategia",    de: "Strategie",        ar: "استراتيجية",        tr: "Strateji",         vi: "Chiến thuật",       id: "Strategi",          ms: "Strategi",           pt: "Estratégia",    hi: "रणनीति" },
  "tournament": { en: "Tournament",      ja: "トーナメント",   zh: "锦标赛",     es: "Torneo",        de: "Turnier",          ar: "بطولة",             tr: "Turnuva",          vi: "Giải đấu",          id: "Turnamen",          ms: "Kejohanan",          pt: "Torneio",       hi: "टूर्नामेंट" },
};

function getCardLabel(lang: string) {
  return CARD_LABELS[lang] ?? CARD_LABELS.en;
}

function translateCategory(category: string, lang: string): string {
  if (lang === "ko") return category;
  return CATEGORY_I18N[category]?.[lang] ?? category;
}

// ── 커뮤니티 디자인 토큰 ─────────────────────────────────────
export const GOLD = "#d4af37";
export const BG = "#0b1120";
export const CARD = "#162032";            // ↑ 카드 배경 한 톤 올림 (대비 향상)
export const BORDER = "rgba(212,175,55,0.14)";
export const TEXT_PRIMARY = "#f8f2e2";   // ↑ 제목·강조 — 거의 화이트 아이보리
export const TEXT_BODY = "#ede5cf";       // ↑ 본문 — 밝고 선명하게
export const TEXT_SECONDARY = "#d4c9aa";  // ↑ 설명·메타 — 이전보다 훨씬 밝음
export const TEXT_MUTED = "#a89f88";     // ↑ 비활성·데코 — 읽을 수 있는 수준
export const DIVIDER = "rgba(255,255,255,0.10)";
export const SURFACE = "rgba(255,255,255,0.09)";

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
      style={{ width: size, height: size, background: SURFACE }}
    >
      <span className="font-bold" style={{ fontSize: size * 0.4, color: TEXT_PRIMARY }}>
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
  const isPageTeaser = !!post.pageHref;
  const blogHref = post.blogLocale
    ? `/${post.blogLocale}/blog/${post.blogSlug}`
    : `/blog/${post.blogSlug}`;

  if (isPageTeaser) {
    return (
      <Link
        href={post.pageHref!}
        className="block mx-3 my-1.5 rounded-2xl overflow-hidden active:scale-[0.99] transition-transform"
        style={{ background: "linear-gradient(135deg, #0f1a2e 0%, #162035 100%)", border: "1px solid rgba(212,175,55,0.18)" }}
      >
        <div className="flex items-center gap-4 px-5 py-4">
          <span className="text-3xl flex-shrink-0">{post.pageIcon ?? "📄"}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold" style={{ color: GOLD }}>{post.title}</p>
            <p className="text-[12px] mt-0.5 line-clamp-1" style={{ color: TEXT_SECONDARY }}>{post.content}</p>
          </div>
          <span className="text-[11px] font-bold px-3 py-1.5 rounded-xl flex-shrink-0" style={{ background: "rgba(212,175,55,0.12)", color: GOLD }}>
            {getCardLabel(myLanguage).goTo}
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

  const badge = post.authorBadge ? BADGE[post.authorBadge] : null;
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

  const adminBorder = post.type === "admin"
    ? "1px solid rgba(212,175,55,0.25)"
    : "1px solid rgba(52,211,153,0.18)";

  if (isBlogTeaser) {
    const cardLang = post.blogLocale ?? myLanguage;
    const CL = getCardLabel(cardLang);
    return (
      <article
        className="mx-3 lg:mx-0 mb-3 rounded-2xl overflow-hidden"
        style={{ background: CARD, border: "1px solid rgba(212,175,55,0.25)" }}
      >
        <div className="hidden lg:block" style={{ height: 3, background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }} />
        <Link href={blogHref} className="block">
          <div className="flex items-center gap-2.5 px-4 lg:px-5 pt-3.5 lg:pt-4 pb-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
              <Avatar post={post} size={36} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <p className="text-[13px] lg:text-sm font-bold" style={{ color: GOLD }}>HoldemMaster</p>
                {post.category && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0" style={{ background: "rgba(212,175,55,0.12)", color: GOLD, border: "1px solid rgba(212,175,55,0.3)" }}>
                    {translateCategory(post.category, cardLang)}
                  </span>
                )}
              </div>
              <p className="text-[10px] mt-0.5" style={{ color: TEXT_MUTED }}>
                📖 {post.readTime ?? ""} · {CL.blog}
              </p>
            </div>
          </div>
          <div className="px-4 lg:px-5 pb-1.5">
            <p className="text-[15px] font-bold leading-snug" style={{ color: TEXT_PRIMARY }}>{post.title}</p>
          </div>
          <div className="px-4 lg:px-5 pb-3">
            <p className="text-[13.5px] lg:text-sm leading-relaxed line-clamp-3" style={{ color: TEXT_BODY }}>
              {post.content}
            </p>
          </div>
          {post.imageUrl && (
            <img src={post.imageUrl} alt="" className="w-full object-cover" style={{ maxHeight: 340 }} />
          )}
        </Link>
        <div className="px-4 lg:px-5 py-3" style={{ borderTop: `1px solid ${DIVIDER}` }}>
          <Link href={blogHref} className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl active:scale-95 transition-transform" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
            {CL.readMore}
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className="mx-3 lg:mx-0 mb-3 rounded-2xl overflow-hidden"
      style={{ background: CARD, border: adminBorder }}
    >
      {post.type === "admin" && (
        <div className="hidden lg:block" style={{ height: 3, background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }} />
      )}

      <div className="flex items-center gap-2.5 px-4 lg:px-5 pt-3.5 lg:pt-4 pb-2">
        <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
          <Avatar post={post} size={36} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p className="text-[13px] lg:text-sm font-bold truncate" style={{ color: post.type === "admin" ? GOLD : TEXT_PRIMARY }}>
              {FLAG[post.language] ?? "🌐"}{" "}
              {post.type === "admin" ? "HoldemMaster" : post.authorNickname}
            </p>
            {post.type === "admin" && (
              <span className="hidden lg:inline text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0" style={{ background: "rgba(212,175,55,0.12)", color: GOLD, border: "1px solid rgba(212,175,55,0.3)" }}>
                OFFICIAL
              </span>
            )}
            {badge && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: SURFACE, color: badge.color }}>
                {badge.label}
              </span>
            )}
            <span className="text-[10px]" style={{ color: TEXT_MUTED }}>
              · {timeAgo(post.createdAt)}
            </span>
          </div>
        </div>
      </div>

      <Link href={clickable ? `/post/${post.id}` : "#"} className={clickable ? "block" : "block pointer-events-none"}>
        {showTitle && (
          <div className="px-4 lg:px-5 pb-1.5">
            <p className="text-[15px] font-bold leading-snug" style={{ color: TEXT_PRIMARY }}>{post.title}</p>
          </div>
        )}
        <div className="px-4 lg:px-5 pb-3">
          {!isMyLang && translated && !showOriginal ? (
            <div className="rounded-lg p-3 mb-1" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}>
              <p className="text-[11px] font-semibold mb-1" style={{ color: GOLD }}>🌐 Translated</p>
              <p className="text-[13.5px] lg:text-sm leading-relaxed" style={{ color: TEXT_BODY }}>{bodyText}</p>
            </div>
          ) : (
            <p className="text-[13.5px] lg:text-sm leading-relaxed whitespace-pre-wrap" style={{ color: TEXT_BODY }}>
              {bodyText}
            </p>
          )}
        </div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt="" className="w-full object-cover" style={{ maxHeight: 340 }} />
        )}
      </Link>

      {!isMyLang && (
        <div className="px-4 lg:px-5 pb-1">
          <button
            onClick={handleTranslate}
            disabled={translating}
            className="text-[11px] lg:text-xs font-semibold px-2.5 py-1 rounded-lg active:scale-95 transition-all disabled:opacity-50"
            style={{
              background: translated && !showOriginal ? "rgba(212,175,55,0.15)" : SURFACE,
              color: translated && !showOriginal ? GOLD : TEXT_SECONDARY,
              border: `1px solid ${translated && !showOriginal ? "rgba(212,175,55,0.3)" : DIVIDER}`,
            }}
          >
            {translating ? "번역 중..." : translated ? (showOriginal ? "🌐 번역 보기" : "↩ 원문 보기") : `🌐 ${FLAG[myLanguage] ?? ""} 번역`}
          </button>
          {transErr && <span className="text-[11px] ml-2" style={{ color: "#f87171" }}>번역 실패</span>}
        </div>
      )}

      <div className="flex items-center gap-5 px-4 lg:px-5 py-2.5 lg:pt-3" style={{ borderTop: `1px solid ${DIVIDER}` }}>
        <button onClick={() => onLike(post.id)} className="flex items-center gap-1.5 active:scale-90 transition-transform">
          <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5" fill={post.liked ? "#f87171" : "none"} viewBox="0 0 24 24" stroke={post.liked ? "#f87171" : TEXT_MUTED} strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs lg:text-sm font-semibold" style={{ color: post.liked ? "#f87171" : TEXT_SECONDARY }}>{post.likeCount}</span>
        </button>
        <Link href={`/post/${post.id}`} className="flex items-center gap-1.5 active:scale-90 transition-transform">
          <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: TEXT_MUTED }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs lg:text-sm font-semibold" style={{ color: TEXT_SECONDARY }}>{post.commentCount}</span>
        </Link>
        <span className="ml-auto text-xs hidden lg:block" style={{ color: TEXT_MUTED }}>
          👁 {post.likeCount + post.commentCount * 3}
        </span>
      </div>
    </article>
  );
}
