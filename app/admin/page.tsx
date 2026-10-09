import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentEventId } from "@/lib/event-config";
import AdminClient from "./admin-client";
import { REVIEW_TOURNAMENTS, isDrawDue } from "@/lib/participation-config";
import { tournamentDates } from "@/lib/review-event";
import { POLLS } from "@/lib/polls";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin", robots: { index: false, follow: false } };

async function count(db: any, table: string, filter?: (q: any) => any) {
  let q = db.from(table).select("*", { count: "exact", head: true });
  if (filter) q = filter(q);
  const { count: c } = await q;
  return c ?? 0;
}

export default async function AdminPage() {
  const user = await requireAdmin();
  if (!user) redirect("/");

  const db = createAdminClient();
  if (!db) {
    return (
      <div style={{ maxWidth: 640, margin: "80px auto", padding: 24, fontFamily: "sans-serif", lineHeight: 1.7 }}>
        <h1 style={{ fontSize: 20, marginBottom: 12 }}>⚠️ 어드민 설정 필요</h1>
        <p><code>SUPABASE_SERVICE_ROLE_KEY</code> 환경변수가 없습니다.</p>
        <p>Supabase 대시보드 → Settings → API → <b>service_role</b> 키를 복사해<br />
          로컬 <code>.env.local</code>과 Vercel 환경변수에 추가한 뒤 재배포하세요.</p>
      </div>
    );
  }

  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  const todayIso = todayStart.toISOString();
  const eventId = getCurrentEventId();

  const [
    userCount, postCommunity, postAdmin, commentCount, chatCount,
    todayUsers, todayPosts,
    usersRes, profilesRes, postsRes, commentsRes, chatRes, popupsRes,
    entriesRes, drawsRes,
  ] = await Promise.all([
    count(db, "profiles"),
    count(db, "posts", (q: any) => q.eq("type", "community")),
    count(db, "posts", (q: any) => q.eq("type", "admin")),
    count(db, "comments"),
    count(db, "chat_messages"),
    count(db, "profiles", (q: any) => q.gte("created_at", todayIso)),
    count(db, "posts", (q: any) => q.eq("type", "community").gte("created_at", todayIso)),
    db.auth.admin.listUsers({ page: 1, perPage: 200 }),
    db.from("profiles").select("id, nickname, language, avatar_url, badge, created_at").order("created_at", { ascending: false }),
    db.from("posts").select("id, type, language, title, content, created_at, like_count, comment_count, author_id, profiles(nickname)").eq("type", "community").order("created_at", { ascending: false }).limit(50),
    db.from("comments").select("id, content, created_at, post_id, author_id, profiles(nickname)").order("created_at", { ascending: false }).limit(50),
    db.from("chat_messages").select("id, nickname, content, language, created_at, user_id").order("created_at", { ascending: false }).limit(50),
    db.from("popups").select("*").order("priority", { ascending: false }).order("created_at", { ascending: false }),
    db.from("event_entries").select("id", { count: "exact", head: true }).eq("event_id", eventId),
    db.from("event_draws").select("*").order("drawn_at", { ascending: false }).limit(10),
  ]);

  // ── 참여 장치(2026-09-28) — 테이블이 아직 없으면 에러 → 빈 목록으로 떨어진다(어드민 화면은 그대로 뜬다).
  const [reviewsRes, pollCommentsRes, reviewDrawsRes, attendCounts, pollCounts] = await Promise.all([
    db.from("tournament_reviews")
      .select("id, tournament_id, user_id, body, event_kind, result, rating, was_attending, is_event_entry, is_hidden, is_best, created_at, profiles(nickname)")
      .order("created_at", { ascending: false }).limit(200),
    db.from("poll_comments").select("id, poll_id, user_id, body, is_hidden, created_at, profiles(nickname)")
      .order("created_at", { ascending: false }).limit(100),
    db.from("review_event_draws").select("*"),
    Promise.all(REVIEW_TOURNAMENTS.map((t) => count(db, "tournament_attendance", (q: any) => q.eq("tournament_id", t.id)))),
    Promise.all(POLLS.map((p) => Promise.all(p.options.map((_, i) =>
      count(db, "poll_votes", (q: any) => q.eq("poll_id", p.id).eq("option_idx", i)))))),
  ]);
  // ── 솔버 후기창(2026-10-04) — 테이블이 없으면 에러 → 탭이 «SQL 실행 필요»를 보인다.
  // profiles 조인은 FK 이름을 박는다 — solver_feedback_helpful(feedback_id·user_id)이 다대다 경로를 하나 더 만들어
  // 그냥 profiles(...)면 PostgREST가 PGRST201(모호)로 거부한다(10-09 라이브 탭 «읽지 못했습니다»).
  const [sfRes, sfReplies, sfHelpful, sfProfiles] = await Promise.all([
    db.from("solver_feedback")
      .select("id, user_id, locale, kind, body, downside, rating, device, source, auth_provider, status, hidden_reason, review_requested_at, created_at, profiles!solver_feedback_user_id_fkey(nickname, avatar_url)")
      .order("created_at", { ascending: false }).limit(500),
    db.from("solver_feedback_replies").select("feedback_id, body"),
    db.from("solver_feedback_helpful").select("feedback_id").limit(20000),
    db.from("solver_review_profiles").select("user_id, avatar_kind, avatar_char, avatar_path, avatar_hidden_reason"),
  ]);
  const sfReplyMap = new Map<string, string>((sfReplies.data ?? []).map((r: any) => [r.feedback_id, r.body]));
  const sfHelpfulCount = new Map<string, number>();
  for (const h of sfHelpful.data ?? []) sfHelpfulCount.set((h as any).feedback_id, (sfHelpfulCount.get((h as any).feedback_id) ?? 0) + 1);
  const sfProfileMap = new Map<string, any>((sfProfiles.data ?? []).map((r: any) => [r.user_id, r]));

  const winnerIds = [...new Set((reviewDrawsRes.data ?? []).flatMap((d: any) => d.winner_ids ?? []))];
  const winnerRes = winnerIds.length
    ? await db.from("tournament_reviews").select("id, user_id, profiles(nickname)").in("id", winnerIds)
    : { data: [] as any[] };

  // 이메일 맵 (auth.users) 병합
  const emailMap = new Map<string, { email: string | null; lastSignIn: string | null }>();
  for (const u of usersRes?.data?.users ?? []) {
    emailMap.set(u.id, { email: u.email ?? null, lastSignIn: u.last_sign_in_at ?? null });
  }
  const members = (profilesRes.data ?? []).map((p: any) => ({
    ...p,
    email: emailMap.get(p.id)?.email ?? null,
    lastSignIn: emailMap.get(p.id)?.lastSignIn ?? null,
  }));
  // 최근 로그인순 정렬 (로그인 이력 없는 사람은 뒤로)
  members.sort((a: any, b: any) => {
    const ta = a.lastSignIn ? new Date(a.lastSignIn).getTime() : 0;
    const tb = b.lastSignIn ? new Date(b.lastSignIn).getTime() : 0;
    return tb - ta;
  });

  return (
    <AdminClient
      me={user.email ?? ""}
      stats={{
        users: userCount, postsCommunity: postCommunity, postsAdmin: postAdmin,
        comments: commentCount, chats: chatCount, todayUsers, todayPosts,
      }}
      members={members}
      posts={postsRes.data ?? []}
      comments={commentsRes.data ?? []}
      chats={chatRes.data ?? []}
      popups={popupsRes.data ?? []}
      currentEventId={eventId}
      entryCount={entriesRes.count ?? 0}
      draws={drawsRes.data ?? []}
      solverFeedback={{
        tableError: sfRes.error?.message ?? null,
        supabaseUrl: (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, ""),
        rows: (sfRes.data ?? []).map((r: any) => {
          const p = Array.isArray(r.profiles) ? r.profiles[0] : r.profiles;
          return {
            ...r, profiles: undefined, nickname: p?.nickname ?? null, profileAvatar: p?.avatar_url ?? null,
            email: emailMap.get(r.user_id)?.email ?? null, reply: sfReplyMap.get(r.id) ?? null,
            helpful: sfHelpfulCount.get(r.id) ?? 0, rp: sfProfileMap.get(r.user_id) ?? null,
          };
        }),
      }}
      participation={{
        tableError: reviewsRes.error?.message ?? null,
        tournaments: REVIEW_TOURNAMENTS.map((t, i) => {
          const d = tournamentDates(t.id);
          return { ...t, attend: attendCounts[i], due: !!d && isDrawDue(d.endDate, new Date()) };
        }),
        reviews: (reviewsRes.data ?? []).map((r: any) => ({ ...r, email: emailMap.get(r.user_id)?.email ?? null })),
        pollComments: (pollCommentsRes.data ?? []).map((c: any) => ({ ...c, email: emailMap.get(c.user_id)?.email ?? null })),
        polls: POLLS.map((p, i) => ({ id: p.id, hostSlug: p.hostSlug, labels: p.options.map((o) => o.label), counts: pollCounts[i] })),
        draws: (reviewDrawsRes.data ?? []).map((d: any) => ({
          ...d,
          winners: (d.winner_ids ?? []).map((id: string) => {
            const r: any = (winnerRes.data ?? []).find((x: any) => x.id === id);
            const p = Array.isArray(r?.profiles) ? r.profiles[0] : r?.profiles;
            return { no: (d.entry_ids ?? []).indexOf(id) + 1, nickname: p?.nickname ?? "(삭제된 후기)", email: r ? emailMap.get(r.user_id)?.email ?? null : null };
          }),
        })),
      }}
    />
  );
}
