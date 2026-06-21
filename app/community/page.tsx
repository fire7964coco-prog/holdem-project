import { createClient } from "@/lib/supabase/server";
import CommunityClient, { type FeedPost, type CurrentUser } from "./community-client";

export const dynamic = "force-dynamic";

export default async function CommunityPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let currentUser: CurrentUser | null = null;
  let myLanguage = "ko";

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("id, nickname, language, avatar_url, badge")
      .eq("id", user.id)
      .single();
    if (profile) {
      currentUser = profile as CurrentUser;
      myLanguage = profile.language;
    }
  }

  // 어드민 글: 내 언어만 / 커뮤니티 글: 전체 언어
  const { data: postsRaw } = await supabase
    .from("posts")
    .select(
      "id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id, profiles(nickname, avatar_url, badge)"
    )
    .or(`type.eq.community,and(type.eq.admin,language.eq.${myLanguage})`)
    .order("created_at", { ascending: false })
    .limit(30);

  // 내가 좋아요한 글 id 목록
  let likedIds: string[] = [];
  if (user) {
    const { data: likes } = await supabase
      .from("likes")
      .select("post_id")
      .eq("user_id", user.id);
    likedIds = (likes ?? []).map((l) => l.post_id);
  }

  const toFeedPost = (p: any): FeedPost => ({
    id: p.id,
    type: p.type,
    language: p.language,
    title: p.title,
    content: p.content,
    imageUrl: p.image_url,
    likeCount: p.like_count,
    commentCount: p.comment_count,
    createdAt: p.created_at,
    authorNickname: p.profiles?.nickname ?? currentUser?.nickname ?? "Unknown",
    authorAvatar: p.profiles?.avatar_url ?? currentUser?.avatar_url ?? null,
    authorBadge: p.profiles?.badge ?? currentUser?.badge ?? null,
    liked: likedIds.includes(p.id),
  });

  const posts: FeedPost[] = (postsRaw ?? []).map(toFeedPost);

  // 프로필 탭용: 내가 쓴 글 전체
  let myPosts: FeedPost[] = [];
  if (user) {
    const { data: mine } = await supabase
      .from("posts")
      .select(
        "id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id"
      )
      .eq("author_id", user.id)
      .order("created_at", { ascending: false });
    myPosts = (mine ?? []).map(toFeedPost);
  }

  return (
    <CommunityClient
      currentUser={currentUser}
      myLanguage={myLanguage}
      initialPosts={posts}
      myPosts={myPosts}
    />
  );
}
