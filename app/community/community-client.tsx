"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, createPost, toggleLike } from "./actions";
import PostCard, { type FeedPost, Avatar, FLAG, GOLD, BG, CARD } from "./post-card";

export type { FeedPost } from "./post-card";

export type CurrentUser = {
  id: string;
  nickname: string;
  language: string;
  avatar_url: string | null;
  badge: string | null;
};

const BADGE_LABEL: Record<string, string> = {
  winner: "🏆 우승자", hot: "🔥 인기 유저", top: "⭐ TOP 유저", participant: "🎟️ 이벤트 참여",
};

export default function CommunityClient({
  currentUser,
  myLanguage,
  initialPosts,
  myPosts,
}: {
  currentUser: CurrentUser | null;
  myLanguage: string;
  initialPosts: FeedPost[];
  myPosts: FeedPost[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"home" | "explore" | "event" | "profile">("home");
  const [exploreSub, setExploreSub] = useState<"strategy" | "community">("strategy");
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [writeOpen, setWriteOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();

  function onLike(postId: string) {
    if (!currentUser) {
      router.push("/community/login");
      return;
    }
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

  const strategyPosts = posts.filter((p) => p.type === "admin");
  const communityPosts = posts.filter((p) => p.type === "community");
  const explorePosts = exploreSub === "strategy" ? strategyPosts : communityPosts;

  const totalLikes = myPosts.reduce((s, p) => s + p.likeCount, 0);
  const totalComments = myPosts.reduce((s, p) => s + p.commentCount, 0);

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
      <div className="flex-1 overflow-y-auto pt-3 pb-24">
        {/* ── 피드 ── */}
        {tab === "home" && (
          posts.length === 0 ? (
            <EmptyState icon="🃏" title="아직 글이 없습니다" sub="첫 번째 글을 남겨보세요!" />
          ) : (
            posts.map((p) => (
              <PostCard key={p.id} post={p} myLanguage={myLanguage} onLike={onLike} />
            ))
          )
        )}

        {/* ── 탐색 ── */}
        {tab === "explore" && (
          <div>
            <div className="flex gap-2 px-3 mb-3">
              {([
                { key: "strategy", label: "✦ 전략 포스팅" },
                { key: "community", label: "🌏 커뮤니티" },
              ] as const).map((s) => (
                <button
                  key={s.key}
                  onClick={() => setExploreSub(s.key)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={
                    exploreSub === s.key
                      ? { background: GOLD, color: BG }
                      : { background: "rgba(212,175,55,0.08)", color: "rgba(212,175,55,0.55)", border: "1px solid rgba(212,175,55,0.15)" }
                  }
                >
                  {s.label}
                </button>
              ))}
            </div>
            {explorePosts.length === 0 ? (
              <EmptyState
                icon={exploreSub === "strategy" ? "📚" : "🌏"}
                title={exploreSub === "strategy" ? "전략 글이 없습니다" : "커뮤니티 글이 없습니다"}
                sub={exploreSub === "strategy" ? "곧 전략 콘텐츠가 추가됩니다" : "첫 글을 남겨보세요!"}
              />
            ) : (
              explorePosts.map((p) => (
                <PostCard key={p.id} post={p} myLanguage={myLanguage} onLike={onLike} />
              ))
            )}
          </div>
        )}

        {/* ── 이벤트 ── */}
        {tab === "event" && (
          <EmptyState icon="🎰" title="이벤트 준비 중" sub="로또형 이벤트가 곧 열립니다" />
        )}

        {/* ── 프로필 ── */}
        {tab === "profile" && (
          !currentUser ? (
            <div className="px-4">
              <div className="rounded-2xl p-6 text-center" style={{ background: CARD, border: "1px solid rgba(212,175,55,0.2)" }}>
                <div className="text-3xl mb-3">👤</div>
                <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>로그인이 필요합니다</p>
                <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>내 글과 활동 내역을 확인하려면 로그인하세요</p>
                <Link href="/community/login" className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
                  로그인 / 회원가입 →
                </Link>
              </div>
            </div>
          ) : (
            <div className="px-3 space-y-3">
              {/* 프로필 헤더 */}
              <div className="flex flex-col items-center py-6 rounded-2xl" style={{ background: CARD, border: "1px solid rgba(212,175,55,0.12)" }}>
                <Avatar post={{ type: "community", authorAvatar: currentUser.avatar_url, authorNickname: currentUser.nickname }} size={64} />
                <p className="font-bold text-base mt-3" style={{ color: "#f0e8c8" }}>
                  {FLAG[currentUser.language] ?? "🌐"} {currentUser.nickname}
                </p>
                {currentUser.badge && BADGE_LABEL[currentUser.badge] && (
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full mt-2" style={{ background: "rgba(212,175,55,0.12)", color: GOLD }}>
                    {BADGE_LABEL[currentUser.badge]}
                  </span>
                )}
                <div className="flex gap-8 mt-4">
                  {[
                    { label: "내 글", val: myPosts.length },
                    { label: "받은 좋아요", val: totalLikes },
                    { label: "댓글", val: totalComments },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-base font-bold" style={{ color: "#f0e8c8" }}>{s.val}</p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 내 글 목록 */}
              <p className="text-xs font-bold px-1 pt-1" style={{ color: "rgba(212,175,55,0.7)" }}>내가 쓴 글</p>
              {myPosts.length === 0 ? (
                <EmptyState icon="✍️" title="아직 작성한 글이 없습니다" sub="첫 글을 남겨보세요!" />
              ) : (
                myPosts.map((p) => (
                  <div key={p.id} className="-mx-3">
                    <PostCard post={p} myLanguage={myLanguage} onLike={onLike} />
                  </div>
                ))
              )}
            </div>
          )
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
      {(tab === "home" || tab === "explore") && (
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
          { key: "home", label: "피드", icon: "🏠" },
          { key: "explore", label: "탐색", icon: "🔍" },
          { key: "event", label: "이벤트", icon: "🎰" },
          { key: "profile", label: "프로필", icon: "👤" },
        ] as const).map((n) => (
          <button key={n.key} onClick={() => setTab(n.key)} className="flex-1 flex flex-col items-center justify-center gap-1 py-2" style={{ color: tab === n.key ? GOLD : "rgba(255,255,255,0.3)" }}>
            <span className="text-[15px]">{n.icon}</span>
            <span className="text-[10px] font-semibold">{n.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

function EmptyState({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <span className="text-3xl mb-3">{icon}</span>
      <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>{title}</p>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{sub}</p>
    </div>
  );
}
