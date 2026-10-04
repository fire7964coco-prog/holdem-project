"use client";

import { useState, type CSSProperties } from "react";
import { setSolverAvatarHidden, setSolverFeedbackHidden, setSolverFeedbackReply } from "./actions";
import { avatarCharacterSrc } from "@/lib/solver-feedback-config";

/**
 * 어드민 «솔버 후기·질문» 탭 (2026-10-04 · 설계 docs/solver-review-design.md §3-2)
 * - 숨김 사유 = 링크·욕설·광고 셋뿐. 삭제 버튼은 없다(부정 후기는 지우지 않는다).
 * - 운영자 답글 한 칸 — 해명이 아니라 사실. 출시일·기능 약속 금지(사실 시트 §4).
 * - 프로필 이미지 숨김(같은 세 사유) — 숨기면 이니셜로 돌아가고 글은 그대로.
 * - «다시 검토 요청» 들어온 글을 맨 위에 모은다.
 */

const CARD = "#1c1810";
const BORDER = "#2e2818";
const INK = "#f4ead2";
const MUTED = "#a8977a";
const GOLD = "#c9a227";
const RED = "#c0392b";
const GREEN = "#4caf7a";

const REASONS: { value: "link" | "abuse" | "ad"; label: string }[] = [
  { value: "link", label: "링크" },
  { value: "abuse", label: "욕설" },
  { value: "ad", label: "광고" },
];
const REASON_KO: Record<string, string> = { link: "링크", abuse: "욕설", ad: "광고" };

function fmt(d?: string | null) {
  if (!d) return "—";
  return d.slice(0, 16).replace("T", " ");
}
function btn(color: string): CSSProperties {
  return { padding: "5px 11px", borderRadius: 7, border: `1px solid ${color}`, background: "transparent", color, cursor: "pointer", fontSize: 12, fontWeight: 600 };
}
const card: CSSProperties = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12 };

function avatarSrc(r: any, supabaseUrl: string): string | null {
  const rp = r.rp;
  if (!rp?.avatar_kind) return null;
  if (rp.avatar_kind === "char" && rp.avatar_char) return avatarCharacterSrc(rp.avatar_char);
  if (rp.avatar_kind === "upload" && rp.avatar_path) return `${supabaseUrl}/storage/v1/object/public/review-avatars/${rp.avatar_path}`;
  if (rp.avatar_kind === "provider") return r.profileAvatar ?? null;
  return null;
}

export default function SolverFeedbackAdmin({ data, run, pending }: {
  data: { tableError: string | null; rows: any[]; supabaseUrl: string };
  run: (fn: () => Promise<any>, confirmText?: string) => void;
  pending: boolean;
}) {
  const [filter, setFilter] = useState<"all" | "review" | "question" | "hidden" | "requested">("all");
  const [locale, setLocale] = useState<string>("all");
  const [replyDraft, setReplyDraft] = useState<Record<string, string>>({});

  if (data.tableError) {
    return (
      <div style={card}>
        <p style={{ color: RED, fontWeight: 700 }}>솔버 후기 테이블을 읽지 못했습니다</p>
        <p style={{ color: MUTED, fontSize: 13, marginTop: 6 }}>
          Supabase SQL Editor 에서 <code>supabase/solver-reviews.sql</code> 을 실행했는지 확인하세요. ({data.tableError})
        </p>
      </div>
    );
  }

  const locales = [...new Set(data.rows.map((r) => r.locale))].sort();
  const rows = data.rows
    .filter((r) => locale === "all" || r.locale === locale)
    .filter((r) => filter === "all" ? true
      : filter === "hidden" ? r.status === "hidden"
      : filter === "requested" ? r.status === "hidden" && !!r.review_requested_at
      : r.kind === filter)
    .sort((a, b) => Number(!!b.review_requested_at && b.status === "hidden") - Number(!!a.review_requested_at && a.status === "hidden"));
  const requested = data.rows.filter((r) => r.status === "hidden" && r.review_requested_at).length;
  const unanswered = data.rows.filter((r) => r.kind === "question" && r.status === "public" && !r.reply).length;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ ...card, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <b style={{ color: GOLD }}>솔버 후기·질문</b>
        <span style={{ color: MUTED, fontSize: 12 }}>
          전체 {data.rows.length} · 답 없는 질문 {unanswered} · 재검토 요청 {requested}
        </span>
        <span style={{ flex: 1 }} />
        {(["all", "review", "question", "hidden", "requested"] as const).map((f) => (
          <button key={f} style={btn(filter === f ? GOLD : MUTED)} onClick={() => setFilter(f)}>
            {{ all: "전체", review: "후기", question: "질문", hidden: "숨김", requested: "재검토 요청" }[f]}
          </button>
        ))}
        <select value={locale} onChange={(e) => setLocale(e.target.value)}
          style={{ background: "transparent", color: INK, border: `1px solid ${BORDER}`, borderRadius: 7, padding: "4px 8px", fontSize: 12 }}>
          <option value="all">전 언어</option>
          {locales.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      {rows.length === 0 && <p style={{ color: MUTED, fontSize: 13 }}>해당하는 글이 없습니다.</p>}

      {rows.map((r) => {
        const av = avatarSrc(r, data.supabaseUrl);
        const draft = replyDraft[r.id] ?? r.reply ?? "";
        return (
          <div key={r.id} style={{ ...card, borderColor: r.status === "hidden" ? RED : BORDER }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              {av
                // eslint-disable-next-line @next/next/no-img-element
                ? <img src={av} alt="" width={36} height={36} referrerPolicy="no-referrer" style={{ borderRadius: 999, objectFit: "cover", flexShrink: 0 }} />
                : <span style={{ width: 36, height: 36, borderRadius: 999, background: BORDER, flexShrink: 0 }} />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: MUTED, fontSize: 12 }}>
                  <b style={{ color: INK }}>{r.nickname ?? "?"}</b> · {r.email ?? "—"} · [{r.locale}] {r.kind === "review" ? "후기" : "질문"}
                  {r.rating ? ` · ★${r.rating}` : ""} · {r.source} · {r.device ?? "—"} · {r.auth_provider ?? "—"} · {fmt(r.created_at)}
                  {r.helpful ? ` · 👍${r.helpful}` : ""}
                </p>
                <p style={{ color: INK, fontSize: 14, marginTop: 4, whiteSpace: "pre-line", wordBreak: "break-word" }}>{r.body}</p>
                {r.downside && <p style={{ color: MUTED, fontSize: 13, marginTop: 4, whiteSpace: "pre-line" }}>— {r.downside}</p>}
                {r.status === "hidden" && (
                  <p style={{ color: RED, fontSize: 12, marginTop: 4, fontWeight: 700 }}>
                    숨김 · 사유 {REASON_KO[r.hidden_reason] ?? r.hidden_reason}
                    {r.review_requested_at ? ` · 🔁 재검토 요청 ${fmt(r.review_requested_at)}` : ""}
                  </p>
                )}
                {r.rp?.avatar_hidden_reason && (
                  <p style={{ color: RED, fontSize: 12, marginTop: 2 }}>프로필 이미지 숨김 · 사유 {REASON_KO[r.rp.avatar_hidden_reason]}</p>
                )}
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10, alignItems: "center" }}>
              {r.status === "public" ? (
                <>
                  <span style={{ color: MUTED, fontSize: 12 }}>글 숨김:</span>
                  {REASONS.map((x) => (
                    <button key={x.value} style={btn(RED)} disabled={pending}
                      onClick={() => run(() => setSolverFeedbackHidden(r.id, x.value), `«${x.label}» 사유로 숨길까요?`)}>{x.label}</button>
                  ))}
                </>
              ) : (
                <button style={btn(GREEN)} disabled={pending} onClick={() => run(() => setSolverFeedbackHidden(r.id, null))}>다시 공개</button>
              )}
              {r.rp?.avatar_kind && (
                r.rp.avatar_hidden_reason
                  ? <button style={btn(GREEN)} disabled={pending} onClick={() => run(() => setSolverAvatarHidden(r.user_id, null))}>이미지 복구</button>
                  : (
                    <>
                      <span style={{ color: MUTED, fontSize: 12, marginLeft: 8 }}>이미지 숨김:</span>
                      {REASONS.map((x) => (
                        <button key={x.value} style={btn(RED)} disabled={pending}
                          onClick={() => run(() => setSolverAvatarHidden(r.user_id, x.value), `프로필 이미지를 «${x.label}» 사유로 숨길까요?`)}>{x.label}</button>
                      ))}
                    </>
                  )
              )}
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <textarea value={draft} rows={2} placeholder="운영자 답글 (사실만 · 출시일·기능 약속 금지 · 비우고 저장하면 삭제)"
                onChange={(e) => setReplyDraft((d) => ({ ...d, [r.id]: e.target.value }))}
                style={{ flex: 1, background: "transparent", color: INK, border: `1px solid ${BORDER}`, borderRadius: 7, padding: 6, fontSize: 13 }} />
              <button style={btn(GOLD)} disabled={pending || draft === (r.reply ?? "")}
                onClick={() => run(() => setSolverFeedbackReply(r.id, draft))}>답글 저장</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
