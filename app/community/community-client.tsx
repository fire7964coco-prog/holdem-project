"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, createPost, toggleLike } from "./actions";

export type CurrentUser = {
  id: string;
  nickname: string;
  language: string;
  avatar_url: string | null;
  badge: string | null;
};

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
};

const GOLD = "#d4af37";
const BG = "#0b1120";
const CARD = "#0f1a2e";

const FLAG: Record<string, string> = {
  ko: "🇰🇷", en: "🇺🇸", ja: "🇯🇵", zh: "🇨🇳", es: "🇪🇸", de: "🇩🇪",
  pt: "🇧🇷", ar: "🇸🇦", tr: "🇹🇷", vi: "🇻🇳", id: "🇮🇩", ms: "🇲🇾", hi: "🇮🇳",
};

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "now";
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

export default function CommunityClient({
  currentUser,
  myLanguage,
  initialPosts,
}: {
  currentUser: CurrentUser | null;
  myLanguage: string;
  initialPosts: FeedPost[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"home" | "explore" | "event" | "profile">("home");
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [writeOpen, setWriteOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();

  function onLike(postId: string) {
    if (!currentUser) {
      router.push("/community/login");
      return;
    }
    // optimistic
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likeCount: p.likeCount + (p.liked ? -1 : 1) }
          : p
      )
    );
    startTransition(async () => {
      await toggleLike(postId);
    });
  }

  function onSubmitPost() {
    if (!draft.trim()) return;
    const fd = new FormData();
    fd.append("content", draft);
    startTransition(async () => {
      const res = await createPost(fd);
      if (!res?.error) {
        setDraft("");
        setWriteOpen(false);
        router.refresh();
      }
    });
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG, fontFamily: "'Inter','Pretendard',sans-serif" }}>
      {/* 헤더 */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3" style={{ background: "rgba(11,17,32,0.95)", borderBottom: "1px solid rgba(212,175,55,0.12)", backdropFilter: "blur(10px)" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}>
            <span className="font-black text-xs" style={{ color: BG }}>HM</span>
          </div>
          <span className="font-bold text-base" style={{ color: "#f0e8c8" }}>Community</span>
        </div>
        {currentUser ? (
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              {FLAG[currentUser.language] ?? "🌐"} {currentUser.nickname}
            </span>
            <form action={signOut}>
              <button className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}>
                로그아웃
              </button>
            </form>
          </div>
        ) : (
          <Link href="/community/login" className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
            로그인
          </Link>
        )}
      </header>

      {/* 본문 */}
      <div className="flex-1 overflow-y-auto pb-24">
        {tab === "home" && (
          <div>
            {posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                <span className="text-3xl mb-3">🃏</span>
                <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>아직 글이 없습니다</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  첫 번째 글을 남겨보세요!
                </p>
              </div>
            ) : (
              posts.map((p) => (
                <div key={p.id} style={{ background: CARD, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center gap-2 px-4 py-2.5">
                    {p.type === "admin" ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}>
                        <span className="font-black" style={{ fontSize: 8, color: BG }}>HM</span>
                      </div>
                    ) : p.authorAvatar ? (
                      <img src={p.authorAvatar} alt={p.authorNickname} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                    ) : (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                        <span className="text-xs font-bold" style={{ color: "#fff" }}>{p.authorNickname.slice(0, 1).toUpperCase()}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold" style={{ color: p.type === "admin" ? GOLD : "#f0e8c8" }}>
                        {p.type === "admin" ? "HoldemMaster" : p.authorNickname}
                      </p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {FLAG[p.language] ?? "🌐"} {timeAgo(p.createdAt)}
                      </p>
                    </div>
                  </div>

                  {p.title && p.title !== p.content && (
                    <div className="px-4 pb-1">
                      <p className="text-sm font-bold leading-snug" style={{ color: "#f0e8c8" }}>{p.title}</p>
                    </div>
                  )}
                  <div className="px-4 pb-2">
                    <p className="text-sm leading-snug whitespace-pre-wrap" style={{ color: "rgba(240,232,200,0.85)" }}>{p.content}</p>
                  </div>
                  {p.imageUrl && <img src={p.imageUrl} alt="" className="w-full object-cover" style={{ maxHeight: 320 }} />}

                  <div className="flex items-center gap-5 px-4 py-2.5">
                    <button onClick={() => onLike(p.id)} className="flex items-center gap-1.5 active:scale-90 transition-transform">
                      <svg className="w-5 h-5" fill={p.liked ? "#f87171" : "none"} viewBox="0 0 24 24" stroke={p.liked ? "#f87171" : "rgba(255,255,255,0.35)"} strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-xs" style={{ color: p.liked ? "#f87171" : "rgba(255,255,255,0.35)" }}>{p.likeCount}</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "rgba(255,255,255,0.35)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{p.commentCount}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {tab !== "home" && (
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
            <span className="text-3xl mb-3">🚧</span>
            <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>준비 중</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {tab === "explore" ? "탐색" : tab === "event" ? "이벤트" : "프로필"} 기능은 곧 추가됩니다
            </p>
          </div>
        )}
      </div>

      {/* 글쓰기 모달 */}
      {writeOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setWriteOpen(false)}>
          <div className="w-full max-w-md rounded-t-2xl p-4" style={{ background: CARD, border: "1px solid rgba(212,175,55,0.2)" }} onClick={(e) => e.stopPropagation()}>
            <p className="text-sm font-bold mb-3" style={{ color: "#f0e8c8" }}>새 글 작성</p>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="무슨 생각을 하고 계신가요?"
              rows={4}
              className="w-full px-3 py-2.5 rounded-xl text-sm outline-none resize-none"
              style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <div className="flex gap-2 mt-3">
              <button onClick={() => setWriteOpen(false)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                취소
              </button>
              <button onClick={onSubmitPost} disabled={isPending || !draft.trim()} className="flex-[2] py-2.5 rounded-xl text-sm font-bold disabled:opacity-50" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
                {isPending ? "게시 중..." : "게시하기"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      {tab === "home" && (
        <button
          onClick={() => (currentUser ? setWriteOpen(true) : router.push("/community/login"))}
          className="fixed flex items-center justify-center rounded-full active:scale-95 transition-transform"
          style={{ bottom: 80, right: 20, width: 52, height: 52, background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 4px 20px rgba(212,175,55,0.4)", zIndex: 45 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: BG }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}

      {/* 하단 네비 */}
      <nav className="fixed bottom-0 left-0 right-0 flex items-center" style={{ background: "rgba(11,17,32,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(212,175,55,0.12)", height: 64, zIndex: 40 }}>
        {([
          { key: "home", label: "피드" },
          { key: "explore", label: "탐색" },
          { key: "event", label: "이벤트" },
          { key: "profile", label: "프로필" },
        ] as const).map((n) => (
          <button key={n.key} onClick={() => setTab(n.key)} className="flex-1 flex flex-col items-center justify-center gap-1 py-2" style={{ color: tab === n.key ? GOLD : "rgba(255,255,255,0.3)" }}>
            <span className="text-[15px]">{n.key === "home" ? "🏠" : n.key === "explore" ? "🔍" : n.key === "event" ? "🎰" : "👤"}</span>
            <span className="text-[10px] font-semibold">{n.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
