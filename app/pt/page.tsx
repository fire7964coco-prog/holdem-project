import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import CommunityClient, { type FeedPost, type CurrentUser } from "@/app/community/community-client";
import { CURRENT_EVENT_ID } from "@/lib/event-config";
import { SITE } from "@/lib/site";
import { postsForLocale } from "@/lib/intl-posts";

export const dynamic = "force-dynamic";

const LOCALE = "pt";

export const metadata: Metadata = {
  title: "Comunidade HoldemMaster — Feed Ao Vivo para Jogadores de Poker",
  description: "Discuta estratégia, mãos, blinds e ranking do Texas Hold'em com jogadores do mundo todo. Feed em tempo real — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/pt/` },
  openGraph: {
    title: "Comunidade HoldemMaster — Feed Ao Vivo para Jogadores de Poker",
    description: "Estratégia · mãos · ranking — discuta ao vivo com jogadores de poker de 14 países.",
    url: `${SITE}/pt/`,
    siteName: "HoldemMaster",
    locale: "pt_BR",
    type: "website",
  },
};

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let currentUser: CurrentUser | null = null;
  let myLanguage = LOCALE;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles").select("id, nickname, language, avatar_url, badge").eq("id", user.id).single();
    if (profile) { currentUser = profile as CurrentUser; myLanguage = profile.language; }
  }

  const { data: postsRaw } = await supabase
    .from("posts")
    .select("id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id, profiles(nickname, avatar_url, badge)")
    .or(`type.eq.community,and(type.eq.admin,language.eq.${LOCALE})`)
    .order("created_at", { ascending: false }).limit(30);

  let likedIds: string[] = [];
  if (user) {
    const { data: likes } = await supabase.from("likes").select("post_id").eq("user_id", user.id);
    likedIds = (likes ?? []).map((l) => l.post_id);
  }

  const toFeedPost = (p: any): FeedPost => ({
    id: p.id, type: p.type, language: p.language, title: p.title, content: p.content,
    imageUrl: p.image_url, likeCount: p.like_count, commentCount: p.comment_count, createdAt: p.created_at,
    authorNickname: p.profiles?.nickname ?? currentUser?.nickname ?? "Unknown",
    authorAvatar: p.profiles?.avatar_url ?? currentUser?.avatar_url ?? null,
    authorBadge: p.profiles?.badge ?? currentUser?.badge ?? null,
    liked: likedIds.includes(p.id),
  });

  const communityPosts: FeedPost[] = (postsRaw ?? []).map(toFeedPost);
  const blogTeasers: FeedPost[] = postsForLocale(LOCALE).map((p) => ({
    id: `blog:${p.slug}`, type: "admin", language: LOCALE, title: p.title,
    content: p.tldr || p.desc, imageUrl: p.image ?? null, likeCount: 0, commentCount: 0,
    createdAt: new Date(p.updated || p.date).toISOString(),
    authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
    blogSlug: p.slug, blogLocale: LOCALE, category: p.category, readTime: p.readTime,
  }));

  const posts: FeedPost[] = [...communityPosts, ...blogTeasers].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  let myPosts: FeedPost[] = [];
  if (user) {
    const { data: mine } = await supabase.from("posts")
      .select("id, type, language, title, content, image_url, like_count, comment_count, created_at, author_id")
      .eq("author_id", user.id).order("created_at", { ascending: false });
    myPosts = (mine ?? []).map(toFeedPost);
  }

  let eventData: { myEntry: { numbers: number[] } | null; myPostCount: number; myLikeCount: number } | null = null;
  if (user) {
    const [entryRes, postsForEvent] = await Promise.all([
      supabase.from("event_entries").select("numbers").eq("user_id", user.id).eq("event_id", CURRENT_EVENT_ID).maybeSingle(),
      supabase.from("posts").select("like_count").eq("author_id", user.id).eq("type", "community"),
    ]);
    eventData = {
      myEntry: entryRes.data ?? null,
      myPostCount: postsForEvent.data?.length ?? 0,
      myLikeCount: postsForEvent.data?.reduce((s, p) => s + (p.like_count ?? 0), 0) ?? 0,
    };
  }

  return (
    <CommunityClient currentUser={currentUser} myLanguage={myLanguage} pageLocale={LOCALE}
      initialPosts={posts} myPosts={myPosts} eventData={eventData} />
  );
}
