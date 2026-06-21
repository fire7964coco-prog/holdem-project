"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addComment, deleteComment, toggleLike } from "@/app/community/actions";
import PostCard, { type FeedPost, timeAgo, GOLD, BG, CARD } from "@/app/community/post-card";

export type CommentItem = {
  id: string;
  content: string;
  createdAt: string;
  authorId: string;
  authorNickname: string;
  authorAvatar: string | null;
  authorBadge: string | null;
};

export default function PostDetailClient({
  post: initialPost,
  comments: initialComments,
  myLanguage,
  currentUserId,
}: {
  post: FeedPost;
  comments: CommentItem[];
  myLanguage: string;
  currentUserId: string | null;
}) {
  const router = useRouter();
  const [post, setPost] = useState<FeedPost>(initialPost);
  const [comments, setComments] = useState<CommentItem[]>(initialComments);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();

  function onLike(postId: string) {
    if (!currentUserId) {
      router.push("/login");
      return;
    }
    setPost((p) => ({ ...p, liked: !p.liked, likeCount: p.likeCount + (p.liked ? -1 : 1) }));
    startTransition(async () => {
      await toggleLike(postId);
    });
  }

  function onSubmitComment() {
    const text = draft.trim();
    if (!text) return;
    if (!currentUserId) {
      router.push("/login");
      return;
    }
    startTransition(async () => {
      const res = await addComment(post.id, text);
      if (!res?.error) {
        setDraft("");
        router.refresh();
      }
    });
  }

  function onDeleteComment(commentId: string) {
    setComments((prev) => prev.filter((c) => c.id !== commentId));
    startTransition(async () => {
      await deleteComment(commentId, post.id);
      router.refresh();
    });
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG, fontFamily: "'Inter','Pretendard',sans-serif" }}>
      {/* 헤더 */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-4 py-3" style={{ background: "rgba(11,17,32,0.95)", borderBottom: "1px solid rgba(212,175,55,0.12)", backdropFilter: "blur(10px)" }}>
        <Link href="/" className="flex items-center justify-center w-8 h-8 rounded-full active:scale-90 transition-transform" style={{ background: "rgba(255,255,255,0.06)" }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: "#f0e8c8" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <span className="font-bold text-base" style={{ color: "#f0e8c8" }}>게시글</span>
      </header>

      <div className="flex-1 overflow-y-auto pb-28">
        {/* 본문 카드 */}
        <div className="pt-3">
          <PostCard post={post} myLanguage={myLanguage} onLike={onLike} clickable={false} />
        </div>

        {/* 댓글 */}
        <div className="px-4 pt-2">
          <p className="text-sm font-bold mb-3" style={{ color: "#f0e8c8" }}>
            댓글 <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>({comments.length})</span>
          </p>

          {comments.length === 0 ? (
            <p className="text-xs py-6 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
              첫 번째 댓글을 남겨보세요
            </p>
          ) : (
            <div className="space-y-3">
              {comments.map((c) => (
                <div key={c.id} className="flex gap-2.5">
                  {c.authorAvatar ? (
                    <img src={c.authorAvatar} alt={c.authorNickname} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <span className="text-xs font-bold" style={{ color: "#fff" }}>{c.authorNickname.slice(0, 1).toUpperCase()}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="rounded-2xl px-3 py-2" style={{ background: CARD }}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-[11px] font-bold" style={{ color: GOLD }}>{c.authorNickname}</p>
                        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>{timeAgo(c.createdAt)}</p>
                      </div>
                      <p className="text-[13px] leading-relaxed whitespace-pre-wrap" style={{ color: "rgba(240,232,200,0.85)" }}>{c.content}</p>
                    </div>
                    {currentUserId === c.authorId && (
                      <button onClick={() => onDeleteComment(c.id)} className="text-[10px] mt-1 ml-1" style={{ color: "rgba(248,113,113,0.7)" }}>
                        삭제
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 댓글 입력 */}
      {currentUserId ? (
        <div className="fixed bottom-0 left-0 right-0 flex items-center gap-2 px-3 py-3" style={{ background: "rgba(11,17,32,0.97)", borderTop: "1px solid rgba(212,175,55,0.15)", backdropFilter: "blur(10px)" }}>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onSubmitComment(); } }}
            placeholder="댓글을 입력하세요..."
            className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255,0.1)" }}
          />
          <button onClick={onSubmitComment} disabled={isPending || !draft.trim()} className="px-4 py-2.5 rounded-full text-sm font-bold disabled:opacity-50 flex-shrink-0" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
            등록
          </button>
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-3" style={{ background: "rgba(11,17,32,0.97)", borderTop: "1px solid rgba(212,175,55,0.15)", backdropFilter: "blur(10px)" }}>
          <p className="text-xs flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>댓글을 남기려면 로그인하세요</p>
          <Link href="/login" className="px-4 py-2.5 rounded-xl text-xs font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
            로그인 →
          </Link>
        </div>
      )}
    </div>
  );
}
