import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CommunityClient, { type FeedPost, type CurrentUser } from "./community/community-client";
import { CURRENT_EVENT_ID } from "@/lib/event-config";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "홀덤마스터 커뮤니티 — 전 세계 포커 플레이어의 피드",
  description:
    "홀덤 전략·블라인드·족보·핸드를 실전 경험과 함께 토론하세요. 14개국 포커 플레이어들의 라이브 피드 — 홀덤마스터 커뮤니티.",
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    title: "홀덤마스터 커뮤니티 — 전 세계 포커 플레이어의 피드",
    description:
      "홀덤 전략·블라인드·족보를 실전 경험과 함께 토론. 14개국 플레이어 라이브 피드.",
    url: `${SITE}/`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "website",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  // OAuth 에러 (bad_oauth_state 등) → 로그인 페이지로 안내
  const sp = await searchParams;
  if (sp.error || sp.error_code) {
    redirect("/login?error=oauth");
  }

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

  const communityPosts: FeedPost[] = (postsRaw ?? []).map(toFeedPost);

  // 블로그 글 29편을 "티저 카드"로 피드에 자동 노출 → /blog/[slug] 로 연결.
  // 어드민 전략 콘텐츠 역할을 하며 Strategy 필터에 포함된다.
  const blogTeasers: FeedPost[] = POSTS.map((p) => ({
    id: `blog:${p.slug}`,
    type: "admin",
    language: "ko",
    title: p.title,
    content: p.tldr || p.desc,
    imageUrl: p.image ?? null,
    likeCount: 0,
    commentCount: 0,
    createdAt: new Date(p.updated || p.date).toISOString(),
    authorNickname: "HoldemMaster",
    authorAvatar: null,
    authorBadge: null,
    liked: false,
    blogSlug: p.slug,
    category: p.category,
    readTime: p.readTime,
  }));

  // 앱 내부 도구/필라 페이지 카드 — 피드에 고정 노출
  const PAGE_TEASERS: FeedPost[] = [
    {
      id: "page:ranking",
      type: "admin", language: "ko",
      title: "홀덤 족보 완전 정리",
      content: "로열플러시부터 하이카드까지 — 10가지 핸드 랭킹을 한눈에 확인하세요.",
      imageUrl: null, likeCount: 0, commentCount: 0,
      createdAt: "2026-01-01T00:00:00Z",
      authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
      pageHref: "/ranking/", pageIcon: "🃏",
    },
    {
      id: "page:hand-chart",
      type: "admin", language: "ko",
      title: "스타팅 핸드 차트",
      content: "포지션별 오픈/콜/3-bet 핸드 범위를 차트로 확인하세요.",
      imageUrl: null, likeCount: 0, commentCount: 0,
      createdAt: "2026-01-02T00:00:00Z",
      authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
      pageHref: "/hand-chart/", pageIcon: "📊",
    },
    {
      id: "page:calculator",
      type: "admin", language: "ko",
      title: "팟오즈 & 에퀴티 계산기",
      content: "내 핸드의 에퀴티와 팟오즈를 실시간으로 계산해보세요.",
      imageUrl: null, likeCount: 0, commentCount: 0,
      createdAt: "2026-01-03T00:00:00Z",
      authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
      pageHref: "/calculator/", pageIcon: "🧮",
    },
    {
      id: "page:quiz",
      type: "admin", language: "ko",
      title: "홀덤 실력 테스트 퀴즈",
      content: "10문제로 내 홀덤 수준을 확인해보세요. 결과 공유도 가능!",
      imageUrl: null, likeCount: 0, commentCount: 0,
      createdAt: "2026-01-04T00:00:00Z",
      authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
      pageHref: "/quiz/", pageIcon: "🎯",
    },
    {
      id: "page:glossary",
      type: "admin", language: "ko",
      title: "홀덤 용어 사전",
      content: "올인, 블러프, ICM, 팟오즈… 헷갈리는 용어를 한 번에 정리.",
      imageUrl: null, likeCount: 0, commentCount: 0,
      createdAt: "2026-01-05T00:00:00Z",
      authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
      pageHref: "/glossary/", pageIcon: "📖",
    },
    {
      id: "page:pub",
      type: "admin", language: "ko",
      title: "내 근처 홀덤펍 찾기",
      content: "서울·경기 홀덤펍 위치, 바이인, 블라인드 구조 한 번에 비교.",
      imageUrl: null, likeCount: 0, commentCount: 0,
      createdAt: "2026-01-06T00:00:00Z",
      authorNickname: "HoldemMaster", authorAvatar: null, authorBadge: null, liked: false,
      pageHref: "/pub/", pageIcon: "🍺",
    },
  ];

  // 커뮤니티 글 + 블로그 티저 + 앱 페이지 카드 통합 후 최신순 정렬
  const posts: FeedPost[] = [...communityPosts, ...blogTeasers, ...PAGE_TEASERS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

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

  // 이벤트 탭용: 내 참여 현황
  let eventData: { myEntry: { numbers: number[] } | null; myPostCount: number; myLikeCount: number } | null = null;
  if (user) {
    const [entryRes, postsForEvent] = await Promise.all([
      supabase
        .from("event_entries")
        .select("numbers")
        .eq("user_id", user.id)
        .eq("event_id", CURRENT_EVENT_ID)
        .maybeSingle(),
      supabase
        .from("posts")
        .select("like_count")
        .eq("author_id", user.id)
        .eq("type", "community"),
    ]);
    eventData = {
      myEntry: entryRes.data ?? null,
      myPostCount: postsForEvent.data?.length ?? 0,
      myLikeCount: postsForEvent.data?.reduce((s, p) => s + (p.like_count ?? 0), 0) ?? 0,
    };
  }

  return (
    <CommunityClient
      currentUser={currentUser}
      myLanguage={myLanguage}
      initialPosts={posts}
      myPosts={myPosts}
      eventData={eventData}
    />
  );
}
