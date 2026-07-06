import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentEventId } from "@/lib/event-config";
import AdminClient from "./admin-client";

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
    />
  );
}
