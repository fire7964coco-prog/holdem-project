import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { type FeedPost } from "../../community-client";
import PostDetailClient, { type CommentItem } from "./post-detail-client";

export const dynamic = "force-dynamic";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let myLanguage = "ko";
  let currentUserId: string | null = null;
  if (user) {
    currentUserId = user.id;
    const { data: profile } = await supabase
      .from("profiles")
      .select("language")
      .eq("id", user.id)
      .single();
    if (profile) myLanguage = profile.language;
  }

  const { data: raw } = await supabase
    .from("posts")
    .select(
      "id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id, profiles(nickname, avatar_url, badge)"
    )
    .eq("id", params.id)
    .maybeSingle();

  if (!raw) {
    notFound();
  }

  let liked = false;
  if (user) {
    const { data: likeRow } = await supabase
      .from("likes")
      .select("id")
      .eq("post_id", params.id)
      .eq("user_id", user.id)
      .maybeSingle();
    liked = !!likeRow;
  }

  const p: any = raw;
  const post: FeedPost = {
    id: p.id,
    type: p.type,
    language: p.language,
    title: p.title,
    content: p.content,
    imageUrl: p.image_url,
    likeCount: p.like_count,
    commentCount: p.comment_count,
    createdAt: p.created_at,
    authorNickname: p.profiles?.nickname ?? "Unknown",
    authorAvatar: p.profiles?.avatar_url ?? null,
    authorBadge: p.profiles?.badge ?? null,
    liked,
  };

  const { data: commentsRaw } = await supabase
    .from("comments")
    .select("id, content, created_at, author_id, profiles(nickname, avatar_url, badge)")
    .eq("post_id", params.id)
    .order("created_at", { ascending: true });

  const comments: CommentItem[] = (commentsRaw ?? []).map((c: any) => ({
    id: c.id,
    content: c.content,
    createdAt: c.created_at,
    authorId: c.author_id,
    authorNickname: c.profiles?.nickname ?? "Unknown",
    authorAvatar: c.profiles?.avatar_url ?? null,
    authorBadge: c.profiles?.badge ?? null,
  }));

  return (
    <PostDetailClient
      post={post}
      comments={comments}
      myLanguage={myLanguage}
      currentUserId={currentUserId}
    />
  );
}
