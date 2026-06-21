"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, createPost, toggleLike } from "./actions";
import PostCard, {
  type FeedPost,
  Avatar,
  FLAG,
  GOLD,
  BG,
  CARD,
  BORDER,
} from "./post-card";
import EventTab from "./event-tab";

export type { FeedPost } from "./post-card";

export type CurrentUser = {
  id: string;
  nickname: string;
  language: string;
  avatar_url: string | null;
  badge: string | null;
};

// ── 다국어 UI 라벨 ──────────────────────────────────────────
const LABELS = {
  ko: {
    logout: "로그아웃",
    login: "로그인",
    loginArrow: "로그인 →",
    loginSignup: "로그인 / 회원가입 →",
    feed: "피드",
    explore: "탐색",
    event: "이벤트",
    profile: "프로필",
    trendingExplore: "트렌딩/탐색",
    writePost: "✏️ 글 쓰기",
    searchPlaceholder: "전략, 핸드, 플레이어 검색...",
    writePlaceholder: "핸드, 전략, 결과를 공유해보세요...",
    postButton: "게시",
    posting: "게시 중...",
    postNow: "게시하기",
    writeModalTitle: "새 글 작성",
    draftPlaceholder: "무슨 생각을 하고 계신가요?",
    cancel: "취소",
    multiLangBannerFull: "모든 언어 포스팅을 표시합니다. 타언어 글에는 번역 버튼이 있습니다.",
    strategyPosts: "✦ 전략 포스팅",
    communityTab: "🌏 커뮤니티",
    communityPostsLong: "🌏 커뮤니티 글",
    emptyFeedTitle: "아직 글이 없습니다",
    emptyFeedSub: "첫 번째 글을 남겨보세요!",
    emptyStrategyTitle: "전략 글이 없습니다",
    emptyCommunityTitle: "커뮤니티 글이 없습니다",
    comingSoon: "곧 추가됩니다",
    eventComing: "이벤트 준비 중",
    eventComingSub: "로또형 이벤트가 곧 열립니다",
    loginRequired: "로그인이 필요합니다",
    loginRequiredSub: "내 글과 활동 내역을 확인하려면 로그인하세요",
    myPostsStat: "내 글",
    likesStat: "받은 좋아요",
    commentsStat: "댓글",
    myPostsSection: "내가 쓴 글",
    noPostsTitle: "아직 작성한 글이 없습니다",
    noPostsSub: "첫 글을 남겨보세요!",
    trendingTitle: "🔥 이번 주 인기글",
    eventBadge: "🎰 이벤트 · 준비 중",
    eventTitle: "번호 6개 선택\n기프트콘 증정!",
    eventDesc: "3개 일치 → 5천원 · 4개 → 1만원\n5~6개 → 5만원",
    eventButton: "이벤트 보기 →",
    communityLang: "🌐 커뮤니티 언어",
    badge_winner: "🏆 우승자",
    badge_hot: "🔥 인기 유저",
    badge_top: "⭐ TOP 유저",
    badge_participant: "🎟️ 이벤트 참여",
  },
  en: {
    logout: "Logout",
    login: "Log in",
    loginArrow: "Log in →",
    loginSignup: "Log in / Sign up →",
    feed: "Feed",
    explore: "Explore",
    event: "Events",
    profile: "Profile",
    trendingExplore: "Trending",
    writePost: "✏️ Write Post",
    searchPlaceholder: "Search strategy, hands, players...",
    writePlaceholder: "Share your hand, strategy, or results...",
    postButton: "Post",
    posting: "Posting...",
    postNow: "Post",
    writeModalTitle: "New Post",
    draftPlaceholder: "What's on your mind?",
    cancel: "Cancel",
    multiLangBannerFull: "Showing posts in all languages. Posts in other languages have a Translate button.",
    strategyPosts: "✦ Strategy Posts",
    communityTab: "🌏 Community",
    communityPostsLong: "🌏 Community Posts",
    emptyFeedTitle: "No posts yet",
    emptyFeedSub: "Be the first to post!",
    emptyStrategyTitle: "No strategy posts yet",
    emptyCommunityTitle: "No community posts yet",
    comingSoon: "Coming soon",
    eventComing: "Events Coming Soon",
    eventComingSub: "Lotto-style events opening soon",
    loginRequired: "Login Required",
    loginRequiredSub: "Log in to see your posts and activity",
    myPostsStat: "Posts",
    likesStat: "Likes",
    commentsStat: "Comments",
    myPostsSection: "My Posts",
    noPostsTitle: "No posts yet",
    noPostsSub: "Write your first post!",
    trendingTitle: "🔥 Trending This Week",
    eventBadge: "🎰 Event · Coming Soon",
    eventTitle: "Pick 6 Numbers\nWin Gift Cards!",
    eventDesc: "3 match → ₩5,000 · 4 match → ₩10,000\n5–6 match → ₩50,000",
    eventButton: "View Event →",
    communityLang: "🌐 Community Languages",
    badge_winner: "🏆 Winner",
    badge_hot: "🔥 Popular",
    badge_top: "⭐ Top User",
    badge_participant: "🎟️ Event Participant",
  },
  ja: {
    logout: "ログアウト",
    login: "ログイン",
    loginArrow: "ログイン →",
    loginSignup: "ログイン / 登録 →",
    feed: "フィード",
    explore: "探索",
    event: "イベント",
    profile: "プロフィール",
    trendingExplore: "トレンド",
    writePost: "✏️ 投稿する",
    searchPlaceholder: "戦略、ハンド、プレイヤーを検索...",
    writePlaceholder: "ハンド、戦略、結果をシェアしよう...",
    postButton: "投稿",
    posting: "投稿中...",
    postNow: "投稿する",
    writeModalTitle: "新規投稿",
    draftPlaceholder: "何を考えていますか？",
    cancel: "キャンセル",
    multiLangBannerFull: "全言語の投稿を表示しています。他言語の投稿には翻訳ボタンがあります。",
    strategyPosts: "✦ 戦略投稿",
    communityTab: "🌏 コミュニティ",
    communityPostsLong: "🌏 コミュニティ投稿",
    emptyFeedTitle: "まだ投稿がありません",
    emptyFeedSub: "最初の投稿をしてみよう！",
    emptyStrategyTitle: "戦略投稿がありません",
    emptyCommunityTitle: "コミュニティ投稿がありません",
    comingSoon: "近日公開",
    eventComing: "イベント準備中",
    eventComingSub: "ロト形式のイベントが近日開催",
    loginRequired: "ログインが必要です",
    loginRequiredSub: "投稿と活動履歴を確認するにはログインしてください",
    myPostsStat: "投稿",
    likesStat: "いいね",
    commentsStat: "コメント",
    myPostsSection: "自分の投稿",
    noPostsTitle: "まだ投稿がありません",
    noPostsSub: "最初の投稿をしよう！",
    trendingTitle: "🔥 今週のトレンド",
    eventBadge: "🎰 イベント · 準備中",
    eventTitle: "6つの数字を選んで\nギフト券をゲット！",
    eventDesc: "3一致 → ₩5,000 · 4一致 → ₩10,000\n5〜6一致 → ₩50,000",
    eventButton: "イベントを見る →",
    communityLang: "🌐 コミュニティ言語",
    badge_winner: "🏆 優勝者",
    badge_hot: "🔥 人気ユーザー",
    badge_top: "⭐ TOPユーザー",
    badge_participant: "🎟️ イベント参加",
  },
  zh: {
    logout: "退出登录",
    login: "登录",
    loginArrow: "登录 →",
    loginSignup: "登录 / 注册 →",
    feed: "动态",
    explore: "探索",
    event: "活动",
    profile: "我的",
    trendingExplore: "热门",
    writePost: "✏️ 发帖",
    searchPlaceholder: "搜索策略、手牌、玩家...",
    writePlaceholder: "分享你的手牌、策略或战果...",
    postButton: "发布",
    posting: "发布中...",
    postNow: "发布",
    writeModalTitle: "新帖子",
    draftPlaceholder: "你在想什么？",
    cancel: "取消",
    multiLangBannerFull: "显示所有语言的帖子。其他语言的帖子有翻译按钮。",
    strategyPosts: "✦ 策略帖子",
    communityTab: "🌏 社区",
    communityPostsLong: "🌏 社区帖子",
    emptyFeedTitle: "暂无帖子",
    emptyFeedSub: "来发第一条帖子吧！",
    emptyStrategyTitle: "暂无策略帖子",
    emptyCommunityTitle: "暂无社区帖子",
    comingSoon: "即将推出",
    eventComing: "活动准备中",
    eventComingSub: "彩票式活动即将开启",
    loginRequired: "需要登录",
    loginRequiredSub: "登录以查看你的帖子和活动记录",
    myPostsStat: "帖子",
    likesStat: "获赞",
    commentsStat: "评论",
    myPostsSection: "我的帖子",
    noPostsTitle: "暂无帖子",
    noPostsSub: "写下第一条帖子！",
    trendingTitle: "🔥 本周热帖",
    eventBadge: "🎰 活动 · 准备中",
    eventTitle: "选6个数字\n赢取礼品券！",
    eventDesc: "3个匹配 → ₩5,000 · 4个 → ₩10,000\n5~6个 → ₩50,000",
    eventButton: "查看活动 →",
    communityLang: "🌐 社区语言",
    badge_winner: "🏆 冠军",
    badge_hot: "🔥 人气用户",
    badge_top: "⭐ TOP用户",
    badge_participant: "🎟️ 活动参与者",
  },
} as const;

type LangKey = keyof typeof LABELS;

function getL(lang: string) {
  return LABELS[(lang as LangKey) in LABELS ? (lang as LangKey) : "en"];
}

const FILTER_PILLS = ["All", "Strategy", "Community"] as const;
type FilterKey = (typeof FILTER_PILLS)[number];

function getTrending(posts: FeedPost[]) {
  return [...posts].sort((a, b) => b.likeCount - a.likeCount).slice(0, 4);
}

type EventData = {
  myEntry: { numbers: number[] } | null;
  myPostCount: number;
  myLikeCount: number;
} | null;

export default function CommunityClient({
  currentUser,
  myLanguage,
  initialPosts,
  myPosts,
  eventData,
}: {
  currentUser: CurrentUser | null;
  myLanguage: string;
  initialPosts: FeedPost[];
  myPosts: FeedPost[];
  eventData: EventData;
}) {
  const router = useRouter();
  const L = getL(myLanguage);

  const [tab, setTab] = useState<"home" | "explore" | "event" | "profile">("home");
  const [exploreSub, setExploreSub] = useState<"strategy" | "community">("strategy");
  const [feedFilter, setFeedFilter] = useState<FilterKey>("All");
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [writeOpen, setWriteOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isPending, startTransition] = useTransition();

  const badgeLabel: Record<string, string> = {
    winner: L.badge_winner,
    hot: L.badge_hot,
    top: L.badge_top,
    participant: L.badge_participant,
  };

  function onLike(postId: string) {
    if (!currentUser) { router.push("/login"); return; }
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likeCount: p.likeCount + (p.liked ? -1 : 1) }
          : p
      )
    );
    startTransition(async () => { await toggleLike(postId); });
  }

  function onSubmitPost() {
    if (!draft.trim()) return;
    const fd = new FormData();
    fd.append("content", draft);
    startTransition(async () => {
      const res = await createPost(fd);
      if (!res?.error) { setDraft(""); setWriteOpen(false); router.refresh(); }
    });
  }

  const filteredPosts =
    feedFilter === "Strategy"
      ? posts.filter((p) => p.type === "admin")
      : feedFilter === "Community"
      ? posts.filter((p) => p.type === "community")
      : posts;

  const explorePosts =
    exploreSub === "strategy"
      ? posts.filter((p) => p.type === "admin")
      : posts.filter((p) => p.type === "community");

  const trending = getTrending(posts);
  const totalLikes = myPosts.reduce((s, p) => s + p.likeCount, 0);
  const totalComments = myPosts.reduce((s, p) => s + p.commentCount, 0);

  // ── 탭별 컨텐츠 ────────────────────────────────────────────
  function TabContent({ desktop = false }: { desktop?: boolean }) {
    return (
      <>
        {/* 피드 */}
        {tab === "home" && (
          filteredPosts.length === 0
            ? <EmptyState icon="🃏" title={L.emptyFeedTitle} sub={L.emptyFeedSub} />
            : filteredPosts.map((p) => (
                <PostCard key={p.id} post={p} myLanguage={myLanguage} onLike={onLike} />
              ))
        )}

        {/* 탐색 */}
        {tab === "explore" && (
          <div>
            {!desktop && (
              <div className="flex gap-2 px-3 mb-3">
                {(["strategy", "community"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setExploreSub(s)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
                    style={
                      exploreSub === s
                        ? { background: GOLD, color: BG }
                        : { background: "rgba(212,175,55,0.08)", color: "rgba(212,175,55,0.55)", border: "1px solid rgba(212,175,55,0.15)" }
                    }
                  >
                    {s === "strategy" ? L.strategyPosts : L.communityTab}
                  </button>
                ))}
              </div>
            )}
            {explorePosts.length === 0
              ? <EmptyState
                  icon={exploreSub === "strategy" ? "📚" : "🌏"}
                  title={exploreSub === "strategy" ? L.emptyStrategyTitle : L.emptyCommunityTitle}
                  sub={L.comingSoon}
                />
              : explorePosts.map((p) => (
                  <PostCard key={p.id} post={p} myLanguage={myLanguage} onLike={onLike} />
                ))
            }
          </div>
        )}

        {/* 이벤트 */}
        {tab === "event" && (
          <EventTab
            isLoggedIn={!!currentUser}
            initialData={eventData}
          />
        )}

        {/* 프로필 */}
        {tab === "profile" && (
          !currentUser
            ? (
              <div className="px-4">
                <div className="rounded-2xl p-6 text-center" style={{ background: CARD, border: "1px solid rgba(212,175,55,0.2)" }}>
                  <div className="text-3xl mb-3">👤</div>
                  <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>{L.loginRequired}</p>
                  <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>{L.loginRequiredSub}</p>
                  <Link href="/login" className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
                    {L.loginSignup}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="px-3 space-y-3">
                <div className="flex flex-col items-center py-6 rounded-2xl" style={{ background: CARD, border: "1px solid rgba(212,175,55,0.12)" }}>
                  <Avatar post={{ type: "community", authorAvatar: currentUser.avatar_url, authorNickname: currentUser.nickname }} size={64} />
                  <p className="font-bold text-base mt-3" style={{ color: "#f0e8c8" }}>{FLAG[currentUser.language] ?? "🌐"} {currentUser.nickname}</p>
                  {currentUser.badge && badgeLabel[currentUser.badge] && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full mt-2" style={{ background: "rgba(212,175,55,0.12)", color: GOLD }}>
                      {badgeLabel[currentUser.badge]}
                    </span>
                  )}
                  <div className="flex gap-8 mt-4">
                    {[
                      { label: L.myPostsStat, val: myPosts.length },
                      { label: L.likesStat, val: totalLikes },
                      { label: L.commentsStat, val: totalComments },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="text-base font-bold" style={{ color: "#f0e8c8" }}>{s.val}</p>
                        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold px-1 pt-1" style={{ color: "rgba(212,175,55,0.7)" }}>{L.myPostsSection}</p>
                {myPosts.length === 0
                  ? <EmptyState icon="✍️" title={L.noPostsTitle} sub={L.noPostsSub} />
                  : myPosts.map((p) => (
                      <div key={p.id} className="-mx-3">
                        <PostCard post={p} myLanguage={myLanguage} onLike={onLike} />
                      </div>
                    ))
                }
              </div>
            )
        )}
      </>
    );
  }

  // ── 글쓰기 모달 ────────────────────────────────────────────
  const WriteModal = writeOpen && (
    <div
      className="fixed inset-0 z-50 flex items-end lg:items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={() => setWriteOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-t-2xl lg:rounded-2xl p-5"
        style={{ background: CARD, border: "1px solid rgba(212,175,55,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm font-bold mb-3" style={{ color: "#f0e8c8" }}>{L.writeModalTitle}</p>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={L.draftPlaceholder}
          rows={4}
          className="w-full px-3 py-2.5 rounded-xl text-sm outline-none resize-none"
          style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255,0.1)" }}
        />
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setWriteOpen(false)}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
          >{L.cancel}</button>
          <button
            onClick={onSubmitPost}
            disabled={isPending || !draft.trim()}
            className="flex-[2] py-2.5 rounded-xl text-sm font-bold disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
          >{isPending ? L.posting : L.postNow}</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: BG, fontFamily: "'Inter','Pretendard',sans-serif" }}>

      {/* ════════════════════════════════════════════════════════
          MOBILE  (< lg)
      ════════════════════════════════════════════════════════ */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* 모바일 헤더 */}
        <header
          className="sticky top-0 z-40 flex items-center justify-between px-4 py-3"
          style={{ background: "rgba(11,17,32,0.95)", borderBottom: "1px solid rgba(212,175,55,0.12)", backdropFilter: "blur(10px)" }}
        >
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
                  {L.logout}
                </button>
              </form>
            </div>
          ) : (
            <Link href="/login" className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}>
              {L.login}
            </Link>
          )}
        </header>

        {/* 모바일 본문 */}
        <div className="flex-1 overflow-y-auto pt-3 pb-24">
          <TabContent />
        </div>

        {/* 모바일 FAB */}
        {(tab === "home" || tab === "explore") && (
          <button
            onClick={() => currentUser ? setWriteOpen(true) : router.push("/login")}
            className="fixed flex items-center justify-center rounded-full active:scale-95 transition-transform"
            style={{ bottom: 80, right: 20, width: 52, height: 52, background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 4px 20px rgba(212,175,55,0.4)", zIndex: 45 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: BG }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        )}

        {/* 모바일 하단 네비 */}
        <nav
          className="fixed bottom-0 left-0 right-0 flex items-center"
          style={{ background: "rgba(11,17,32,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(212,175,55,0.12)", height: 64, zIndex: 40 }}
        >
          {([
            { key: "home",    label: L.feed,    icon: "🏠" },
            { key: "explore", label: L.explore, icon: "🔍" },
            { key: "event",   label: L.event,   icon: "🎰" },
            { key: "profile", label: L.profile, icon: "👤" },
          ] as const).map((n) => (
            <button
              key={n.key}
              onClick={() => setTab(n.key)}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-2"
              style={{ color: tab === n.key ? GOLD : "rgba(255,255,255,0.3)" }}
            >
              <span className="text-[15px]">{n.icon}</span>
              <span className="text-[10px] font-semibold">{n.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* ════════════════════════════════════════════════════════
          DESKTOP  (≥ lg)
      ════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block min-h-screen">

        {/* 데스크탑 스티키 헤더 */}
        <header
          className="sticky top-0 z-50"
          style={{ background: "rgba(11,17,32,0.96)", borderBottom: `1px solid ${BORDER}`, backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center gap-4 px-6 py-3 max-w-screen-xl mx-auto">
            {/* 로고 */}
            <div className="flex items-center gap-2.5 mr-4 flex-shrink-0">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}>
                <span className="font-black text-sm" style={{ color: BG }}>HM</span>
              </div>
              <span className="font-black text-base" style={{ color: GOLD }}>HoldemMaster</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(212,175,55,0.1)", color: "rgba(212,175,55,0.7)" }}>Community</span>
            </div>

            {/* 검색창 */}
            <div
              className="flex items-center gap-2 flex-1 max-w-sm px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
            >
              <span style={{ color: "rgba(255,255,255,0.3)" }}>🔍</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>{L.searchPlaceholder}</span>
            </div>

            {/* 상단 네비 */}
            <nav className="flex items-center gap-1 ml-4">
              {([
                { key: "home",    label: L.feed },
                { key: "explore", label: L.explore },
                { key: "event",   label: L.event },
              ] as const).map((n) => (
                <button
                  key={n.key}
                  onClick={() => setTab(n.key)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: tab === n.key ? "rgba(212,175,55,0.15)" : "transparent",
                    color: tab === n.key ? GOLD : "rgba(255,255,255,0.4)",
                  }}
                >
                  {n.label}
                </button>
              ))}
            </nav>

            {/* 우측 */}
            <div className="flex items-center gap-2 ml-auto">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
                style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.4)" }}
              >
                {FLAG[myLanguage] ?? "🌐"} {myLanguage.toUpperCase()}
              </div>
              {currentUser ? (
                <>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black cursor-pointer"
                    style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                    onClick={() => setTab("profile")}
                  >
                    {currentUser.nickname.slice(0, 2).toUpperCase()}
                  </div>
                  <form action={signOut}>
                    <button
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                    >
                      {L.logout}
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-sm font-bold px-4 py-2 rounded-full"
                  style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                >
                  {L.loginArrow}
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* 데스크탑 3컬럼 */}
        <div className="flex max-w-screen-xl mx-auto px-4 py-6 gap-6">

          {/* ── 왼쪽 사이드바 ── */}
          <aside style={{ width: 220, flexShrink: 0 }}>
            <div className="sticky top-20 flex flex-col gap-1">
              {([
                { key: "home",    icon: "⊞", label: L.feed },
                { key: "explore", icon: "🔥", label: L.trendingExplore },
                { key: "event",   icon: "🎰", label: L.event, badge: "Soon" },
                { key: "profile", icon: "👤", label: L.profile },
              ] as const).map((item) => (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all"
                  style={{
                    background: tab === item.key ? "rgba(212,175,55,0.1)" : "transparent",
                    color: tab === item.key ? GOLD : "rgba(255,255,255,0.4)",
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className="ml-auto text-[9px] px-1.5 py-0.5 rounded-full font-black"
                      style={{ background: "#f97316", color: "#fff" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <div style={{ borderTop: `1px solid ${BORDER}`, margin: "8px 0" }} />

              <button
                onClick={() => currentUser ? setWriteOpen(true) : router.push("/login")}
                className="w-full py-2.5 rounded-xl text-sm font-bold"
                style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
              >
                {L.writePost}
              </button>
            </div>
          </aside>

          {/* ── 메인 피드 ── */}
          <main style={{ flex: 1, maxWidth: 640 }}>
            {/* 필터 칩 (Home 탭에서만) */}
            {tab === "home" && (
              <>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {FILTER_PILLS.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFeedFilter(f)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                      style={{
                        background: feedFilter === f ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.05)",
                        color: feedFilter === f ? GOLD : "rgba(255,255,255,0.4)",
                        border: `1px solid ${feedFilter === f ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {f}
                    </button>
                  ))}
                  <span className="ml-auto text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    🌏 {Object.keys(FLAG).length} languages
                  </span>
                </div>

                {/* 글쓰기 박스 (인라인) */}
                <div
                  className="rounded-2xl p-4 mb-4 flex items-center gap-3 cursor-pointer"
                  style={{ background: CARD, border: `1px solid ${BORDER}` }}
                  onClick={() => currentUser ? setWriteOpen(true) : router.push("/login")}
                >
                  {currentUser ? (
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                    >
                      {currentUser.nickname.slice(0, 2).toUpperCase()}
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>👤</span>
                    </div>
                  )}
                  <div
                    className="flex-1 px-4 py-2 rounded-full text-sm"
                    style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)", border: `1px solid ${BORDER}` }}
                  >
                    {L.writePlaceholder}
                  </div>
                  <button
                    className="px-4 py-2 rounded-full text-sm font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                  >
                    {L.postButton}
                  </button>
                </div>

                {/* 다국어 배너 */}
                <div
                  className="rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2"
                  style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}
                >
                  <span>🌐</span>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {L.multiLangBannerFull}
                  </p>
                </div>
              </>
            )}

            {/* Explore 서브탭 (데스크탑) */}
            {tab === "explore" && (
              <div className="flex gap-2 mb-4">
                {(["strategy", "community"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setExploreSub(s)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                    style={
                      exploreSub === s
                        ? { background: GOLD, color: BG }
                        : { background: "rgba(212,175,55,0.08)", color: "rgba(212,175,55,0.55)", border: "1px solid rgba(212,175,55,0.15)" }
                    }
                  >
                    {s === "strategy" ? L.strategyPosts : L.communityPostsLong}
                  </button>
                ))}
              </div>
            )}

            <TabContent desktop />
          </main>

          {/* ── 오른쪽 사이드바 ── */}
          <aside style={{ width: 260, flexShrink: 0 }}>
            <div className="sticky top-20 flex flex-col gap-4">

              {/* 트렌딩 */}
              {trending.length > 0 && (
                <div className="rounded-2xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <p className="text-sm font-bold mb-3" style={{ color: "#f0e8c8" }}>{L.trendingTitle}</p>
                  {trending.map((t, i) => (
                    <Link
                      href={`/post/${t.id}`}
                      key={t.id}
                      className="flex items-start gap-3 mb-3 last:mb-0 hover:opacity-80 transition-opacity"
                    >
                      <span
                        className="text-base font-black w-5 flex-shrink-0 text-center"
                        style={{ color: i === 0 ? GOLD : "rgba(255,255,255,0.3)" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-semibold leading-snug line-clamp-2" style={{ color: "#f0e8c8" }}>
                          {FLAG[t.language] ?? "🌐"} {t.title || t.content.slice(0, 40)}
                        </p>
                        <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                          ❤️ {t.likeCount} · 💬 {t.commentCount}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* 이벤트 배너 */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.04))", border: "1px solid rgba(212,175,55,0.25)" }}
              >
                <p className="text-xs font-bold mb-1" style={{ color: GOLD }}>{L.eventBadge}</p>
                <p className="text-sm font-bold mb-1.5 whitespace-pre-line" style={{ color: "#f0e8c8" }}>{L.eventTitle}</p>
                <p className="text-xs mb-3 whitespace-pre-line" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {L.eventDesc}
                </p>
                <button
                  onClick={() => setTab("event")}
                  className="w-full py-2 rounded-xl text-sm font-bold"
                  style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                >
                  {L.eventButton}
                </button>
              </div>

              {/* 커뮤니티 언어 */}
              <div className="rounded-2xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="text-xs font-bold mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{L.communityLang}</p>
                <div className="flex flex-wrap gap-1.5">
                  {(["ko", "en", "ja", "zh", "es", "de"] as const).map((l) => (
                    <span
                      key={l}
                      className="text-xs px-2 py-1 rounded-lg font-semibold"
                      style={{
                        background: l === myLanguage ? "rgba(212,175,55,0.18)" : "rgba(255,255,255,0.05)",
                        color: l === myLanguage ? GOLD : "rgba(255,255,255,0.4)",
                        border: `1px solid ${l === myLanguage ? "rgba(212,175,55,0.3)" : "transparent"}`,
                      }}
                    >
                      {FLAG[l]} {l.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* 공용 글쓰기 모달 */}
      {WriteModal}
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
