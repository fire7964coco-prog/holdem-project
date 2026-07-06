"use client";

import { useState, useTransition, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import {
  deletePost, deleteComment, deleteChat, setBadge,
  createPopup, updatePopup, togglePopup, deletePopup,
  runDrawTest, deleteDraw,
} from "./actions";

// 사이트 톤(다크+골드)
const BG = "#12100c";
const CARD = "#1c1810";
const BORDER = "#2e2818";
const INK = "#f4ead2";
const MUTED = "#a8977a";
const GOLD = "#c9a227";
const RED = "#c0392b";
const FONT = "var(--font-inter), sans-serif";

const TABS = ["대시보드", "회원", "모더레이션", "팝업", "이벤트"] as const;
type Tab = (typeof TABS)[number];

const BADGES = ["", "winner", "hot", "top", "participant"];
const BADGE_LABEL: Record<string, string> = {
  "": "없음", winner: "🏆 우승자", hot: "🔥 인기", top: "⭐ TOP", participant: "🎟️ 참여",
};

function fmt(d?: string | null) {
  if (!d) return "—";
  return d.slice(0, 16).replace("T", " ");
}

export default function AdminClient(props: {
  me: string;
  stats: { users: number; postsCommunity: number; postsAdmin: number; comments: number; chats: number; todayUsers: number; todayPosts: number };
  members: any[];
  posts: any[];
  comments: any[];
  chats: any[];
  popups: any[];
  currentEventId: string;
  entryCount: number;
  draws: any[];
}) {
  const [tab, setTab] = useState<Tab>("대시보드");
  const router = useRouter();
  const [pending, start] = useTransition();
  const [msg, setMsg] = useState<string | null>(null);

  function run(fn: () => Promise<any>, confirmText?: string) {
    if (confirmText && !window.confirm(confirmText)) return;
    setMsg(null);
    start(async () => {
      const res = await fn();
      if (res?.error) setMsg("❌ " + res.error);
      else { setMsg("✅ 완료"); router.refresh(); }
    });
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: INK, fontFamily: FONT }}>
      <header style={{ borderBottom: `1px solid ${BORDER}`, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, background: BG, zIndex: 10 }}>
        <b style={{ color: GOLD }}>⚙ HoldemMaster Admin</b>
        <span style={{ color: MUTED, fontSize: 12 }}>{props.me}</span>
        <a href="/" style={{ marginLeft: "auto", color: MUTED, fontSize: 13, textDecoration: "none" }}>← 사이트로</a>
      </header>

      <nav style={{ display: "flex", gap: 4, padding: "10px 16px", borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: "7px 14px", borderRadius: 8, border: "none", cursor: "pointer", whiteSpace: "nowrap",
              background: tab === t ? GOLD : "transparent", color: tab === t ? "#1a1508" : MUTED, fontWeight: 600, fontSize: 13 }}>
            {t}
          </button>
        ))}
      </nav>

      {msg && (
        <div style={{ padding: "8px 20px", fontSize: 13, color: msg.startsWith("❌") ? RED : GOLD }}>
          {msg}{pending ? " …" : ""}
        </div>
      )}

      <main style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
        {tab === "대시보드" && <Dashboard s={props.stats} eventId={props.currentEventId} entryCount={props.entryCount} />}
        {tab === "회원" && <Members members={props.members} onBadge={(id, b) => run(() => setBadge(id, b || null))} />}
        {tab === "모더레이션" && (
          <Moderation posts={props.posts} comments={props.comments} chats={props.chats}
            onDelPost={(id) => run(() => deletePost(id), "이 글을 삭제할까요?")}
            onDelComment={(id) => run(() => deleteComment(id), "이 댓글을 삭제할까요?")}
            onDelChat={(id) => run(() => deleteChat(id), "이 채팅을 삭제할까요?")} />
        )}
        {tab === "팝업" && <Popups popups={props.popups} run={run} />}
        {tab === "이벤트" && <EventPanel eventId={props.currentEventId} entryCount={props.entryCount} draws={props.draws} run={run} pending={pending} />}
      </main>
    </div>
  );
}

// ── 대시보드 ────────────────────────────────────────────────
function Dashboard({ s, eventId, entryCount }: { s: any; eventId: string; entryCount: number }) {
  const cards = [
    { label: "회원", val: s.users, sub: `오늘 +${s.todayUsers}` },
    { label: "커뮤니티 글", val: s.postsCommunity, sub: `오늘 +${s.todayPosts}` },
    { label: "공지(admin) 글", val: s.postsAdmin },
    { label: "댓글", val: s.comments },
    { label: "채팅", val: s.chats },
    { label: `이번 회차 참여 (${eventId})`, val: entryCount },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12 }}>
      {cards.map((c) => (
        <div key={c.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 12, color: MUTED }}>{c.label}</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: INK, marginTop: 4 }}>{c.val}</div>
          {c.sub && <div style={{ fontSize: 11, color: GOLD, marginTop: 2 }}>{c.sub}</div>}
        </div>
      ))}
    </div>
  );
}

// ── 회원 ────────────────────────────────────────────────────
function Members({ members, onBadge }: { members: any[]; onBadge: (id: string, b: string) => void }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = members.filter((m) =>
    !q || (m.nickname ?? "").toLowerCase().includes(q.toLowerCase()) || (m.email ?? "").toLowerCase().includes(q.toLowerCase())
  );
  const DAY = 86400000;
  const recentCount = members.filter((m) => m.lastSignIn && Date.now() - new Date(m.lastSignIn).getTime() < DAY).length;
  const isRecent = (d?: string | null) => d && Date.now() - new Date(d).getTime() < DAY;
  return (
    <div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="닉네임·이메일 검색"
        style={{ width: "100%", maxWidth: 320, padding: "8px 12px", marginBottom: 12, borderRadius: 8, background: CARD, border: `1px solid ${BORDER}`, color: INK }} />
      <div style={{ fontSize: 12, color: MUTED, marginBottom: 8 }}>
        총 {filtered.length}명 · <span style={{ color: "#3fb950" }}>🟢 최근 24시간 로그인 {recentCount}명</span> · 최근 로그인순
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((m) => (
          <div key={m.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              {isRecent(m.lastSignIn) && <span title="24시간 내 로그인" style={{ fontSize: 9, color: "#3fb950" }}>🟢</span>}
              <b>{m.nickname}</b>
              <span style={{ fontSize: 12, color: MUTED }}>{m.email ?? "(이메일 없음)"}</span>
              <span style={{ fontSize: 11, color: MUTED }}>{m.language}</span>
              {m.badge && <span style={{ fontSize: 11, color: GOLD }}>{BADGE_LABEL[m.badge] ?? m.badge}</span>}
              <span style={{ fontSize: 11, color: MUTED, marginLeft: "auto" }}>로그인 {fmt(m.lastSignIn)}</span>
              <button onClick={() => setOpen(open === m.id ? null : m.id)} style={btn(GOLD)}>정보/뱃지</button>
            </div>
            {open === m.id && (
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${BORDER}`, fontSize: 13, color: MUTED, display: "flex", flexDirection: "column", gap: 4 }}>
                <div>ID: <code style={{ color: INK }}>{m.id}</code></div>
                <div>가입: {fmt(m.created_at)}</div>
                <div>최근 로그인: {fmt(m.lastSignIn)}</div>
                <div style={{ marginTop: 6, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
                  <span>뱃지:</span>
                  {BADGES.map((b) => (
                    <button key={b} onClick={() => onBadge(m.id, b)}
                      style={{ ...btn(m.badge === b || (!m.badge && b === "") ? GOLD : BORDER), background: m.badge === b || (!m.badge && b === "") ? GOLD : "transparent", color: m.badge === b || (!m.badge && b === "") ? "#1a1508" : MUTED }}>
                      {BADGE_LABEL[b]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 모더레이션 ──────────────────────────────────────────────
function Moderation({ posts, comments, chats, onDelPost, onDelComment, onDelChat }: any) {
  const [sub, setSub] = useState<"글" | "댓글" | "채팅">("글");
  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {(["글", "댓글", "채팅"] as const).map((s) => (
          <button key={s} onClick={() => setSub(s)} style={{ ...btn(sub === s ? GOLD : BORDER), background: sub === s ? GOLD : "transparent", color: sub === s ? "#1a1508" : MUTED }}>
            {s} {s === "글" ? `(${posts.length})` : s === "댓글" ? `(${comments.length})` : `(${chats.length})`}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {sub === "글" && posts.map((p: any) => (
          <Row key={p.id} onDelete={() => onDelPost(p.id)}
            who={p.profiles?.nickname ?? "?"} when={fmt(p.created_at)}
            text={p.title || p.content} extra={`♥${p.like_count} 💬${p.comment_count} · ${p.language}`} />
        ))}
        {sub === "댓글" && comments.map((c: any) => (
          <Row key={c.id} onDelete={() => onDelComment(c.id)}
            who={c.profiles?.nickname ?? "?"} when={fmt(c.created_at)} text={c.content} />
        ))}
        {sub === "채팅" && chats.map((c: any) => (
          <Row key={c.id} onDelete={() => onDelChat(c.id)}
            who={c.nickname} when={fmt(c.created_at)} text={c.content} extra={c.language} />
        ))}
      </div>
    </div>
  );
}

function Row({ who, when, text, extra, onDelete }: any) {
  return (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, color: MUTED, marginBottom: 3 }}>
          <b style={{ color: INK }}>{who}</b> · {when}{extra ? ` · ${extra}` : ""}
        </div>
        <div style={{ fontSize: 14, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{text}</div>
      </div>
      <button onClick={onDelete} style={btn(RED)}>삭제</button>
    </div>
  );
}

// ── 팝업 ────────────────────────────────────────────────────
function Popups({ popups, run }: { popups: any[]; run: (fn: () => Promise<any>, c?: string) => void }) {
  const [editing, setEditing] = useState<any | null>(null); // null=닫힘, {}=새로, obj=수정
  return (
    <div>
      <button onClick={() => setEditing({})} style={{ ...btn(GOLD), color: "#1a1508", marginBottom: 12 }}>+ 새 팝업</button>
      {editing && <PopupForm popup={editing} onClose={() => setEditing(null)}
        onSave={(fd: FormData) => { run(() => editing.id ? updatePopup(editing.id, fd) : createPopup(fd)); setEditing(null); }} />}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {popups.length === 0 && <div style={{ color: MUTED, fontSize: 13 }}>팝업 없음</div>}
        {popups.map((p) => (
          <div key={p.id} style={{ background: CARD, border: `1px solid ${p.active ? GOLD : BORDER}`, borderRadius: 10, padding: 12 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 6, background: p.active ? GOLD : BORDER, color: p.active ? "#1a1508" : MUTED }}>
                {p.active ? "ON" : "OFF"}
              </span>
              <b>{p.title}</b>
              <span style={{ fontSize: 11, color: MUTED }}>{p.locale ?? "전체언어"} · p{p.priority}</span>
              <span style={{ fontSize: 11, color: MUTED }}>{p.starts_at ? fmt(p.starts_at) : "즉시"} ~ {p.ends_at ? fmt(p.ends_at) : "무기한"}</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                <button onClick={() => run(() => togglePopup(p.id, !p.active))} style={btn(BORDER)}>{p.active ? "끄기" : "켜기"}</button>
                <button onClick={() => setEditing(p)} style={btn(BORDER)}>수정</button>
                <button onClick={() => run(() => deletePopup(p.id), "팝업 삭제?")} style={btn(RED)}>삭제</button>
              </div>
            </div>
            {p.body && <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>{p.body}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function PopupForm({ popup, onSave, onClose }: any) {
  const F = (name: string, label: string, type = "text", defVal?: any) => (
    <label style={{ display: "flex", flexDirection: "column", gap: 3, fontSize: 12, color: MUTED }}>
      {label}
      <input name={name} type={type} defaultValue={defVal ?? popup[name] ?? ""}
        style={{ padding: "7px 10px", borderRadius: 7, background: BG, border: `1px solid ${BORDER}`, color: INK }} />
    </label>
  );
  return (
    <form action={onSave} style={{ background: CARD, border: `1px solid ${GOLD}`, borderRadius: 12, padding: 16, marginBottom: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      <div style={{ gridColumn: "1 / -1", fontWeight: 700, color: GOLD }}>{popup.id ? "팝업 수정" : "새 팝업"}</div>
      {F("title", "제목 *")}
      {F("priority", "우선순위(숫자)", "number", popup.priority ?? 0)}
      <label style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 3, fontSize: 12, color: MUTED }}>
        본문
        <textarea name="body" defaultValue={popup.body ?? ""} rows={2}
          style={{ padding: "7px 10px", borderRadius: 7, background: BG, border: `1px solid ${BORDER}`, color: INK, resize: "vertical" }} />
      </label>
      {F("image_url", "이미지 URL")}
      {F("link_url", "링크 URL")}
      {F("link_label", "버튼 라벨")}
      {F("locale", "언어(비우면 전체: ko/en…)")}
      {F("starts_at", "시작 (YYYY-MM-DDTHH:MM 또는 비움)")}
      {F("ends_at", "종료 (YYYY-MM-DDTHH:MM 또는 비움)")}
      <label style={{ gridColumn: "1 / -1", display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: INK }}>
        <input name="active" type="checkbox" defaultChecked={!!popup.active} /> 즉시 활성화(ON)
      </label>
      <div style={{ gridColumn: "1 / -1", display: "flex", gap: 8 }}>
        <button type="submit" style={{ ...btn(GOLD), background: GOLD, color: "#1a1508" }}>저장</button>
        <button type="button" onClick={onClose} style={btn(BORDER)}>취소</button>
      </div>
    </form>
  );
}

// ── 이벤트 ──────────────────────────────────────────────────
function EventPanel({ eventId, entryCount, draws, run, pending }: any) {
  const [target, setTarget] = useState(eventId);
  const [force, setForce] = useState(false);
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 4 }}>이번 회차</div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>{eventId} <span style={{ fontSize: 14, color: GOLD }}>· 참여 {entryCount}명</span></div>
        <p style={{ fontSize: 12, color: MUTED, marginTop: 8, lineHeight: 1.6 }}>
          추첨은 매주 일요일 19:00 KST 크론이 자동 실행합니다. 아래 버튼으로 지금 즉시 테스트 추첨을 돌릴 수 있어요.
          (비트코인 최신 블록 해시 → 번호 6개). <b>force</b> 체크 시 기존 회차 결과를 덮어씁니다.
        </p>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12, flexWrap: "wrap" }}>
          <input value={target} onChange={(e) => setTarget(e.target.value)}
            style={{ padding: "8px 10px", borderRadius: 7, background: BG, border: `1px solid ${BORDER}`, color: INK, width: 140 }} />
          <label style={{ fontSize: 13, display: "flex", gap: 5, alignItems: "center" }}>
            <input type="checkbox" checked={force} onChange={(e) => setForce(e.target.checked)} /> force(덮어쓰기)
          </label>
          <button disabled={pending} onClick={() => run(() => runDrawTest(target, force))} style={{ ...btn(GOLD), background: GOLD, color: "#1a1508" }}>
            지금 추첨 실행
          </button>
        </div>
      </div>

      <div style={{ fontSize: 13, color: MUTED, marginBottom: 8 }}>최근 추첨 결과</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {draws.length === 0 && <div style={{ color: MUTED, fontSize: 13 }}>추첨 기록 없음</div>}
        {draws.map((d: any) => (
          <div key={d.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <b>{d.event_id}</b>
            <span style={{ display: "flex", gap: 4 }}>
              {d.winning_numbers.map((n: number) => (
                <span key={n} style={{ width: 26, height: 26, borderRadius: "50%", background: GOLD, color: "#1a1508", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700 }}>{n}</span>
              ))}
            </span>
            <span style={{ fontSize: 11, color: MUTED }}>블록 {d.block_height} · {fmt(d.drawn_at)}</span>
            <a href={d.explorer_url} target="_blank" rel="noopener" style={{ fontSize: 11, color: GOLD }}>검증↗</a>
            <button onClick={() => run(() => deleteDraw(d.event_id), `${d.event_id} 추첨 삭제?`)} style={{ ...btn(RED), marginLeft: "auto" }}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function btn(color: string): CSSProperties {
  return { padding: "5px 11px", borderRadius: 7, border: `1px solid ${color}`, background: "transparent", color, cursor: "pointer", fontSize: 12, fontWeight: 600 };
}
