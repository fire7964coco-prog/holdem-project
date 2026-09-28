"use client";

import { useState, type CSSProperties } from "react";
import { setReviewHidden, setReviewBest, setPollCommentHidden, runReviewDraw, deleteReviewDraw } from "./actions";

/**
 * 어드민 «후기·투표» 탭 (2026-09-28 · 설계 docs/participation-event-redesign-design.md)
 * 대회 후기 숨김·베스트 지정 · 투표 현황 · 투표 코멘트 숨김 · 대회 후기 이벤트 추첨.
 * 색은 admin-client.tsx 와 같은 값(사이트 톤 다크+골드).
 */

const BG = "#12100c";
const CARD = "#1c1810";
const BORDER = "#2e2818";
const INK = "#f4ead2";
const MUTED = "#a8977a";
const GOLD = "#c9a227";
const RED = "#c0392b";

const KIND_KO: Record<string, string> = { main: "메인", side: "사이드", satellite: "새틀", spectator: "구경" };
const RESULT_KO: Record<string, string> = { bust: "탈락", itm: "ITM", final: "파이널" };

function fmt(d?: string | null) {
  if (!d) return "—";
  return d.slice(0, 16).replace("T", " ");
}

function btn(color: string): CSSProperties {
  return { padding: "5px 11px", borderRadius: 7, border: `1px solid ${color}`, background: "transparent", color, cursor: "pointer", fontSize: 12, fontWeight: 600 };
}

const card: CSSProperties = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12 };

const nick = (r: any) => (Array.isArray(r?.profiles) ? r.profiles[0] : r?.profiles)?.nickname ?? "?";

export default function ParticipationAdmin({ data, run, pending }: {
  data: any;
  run: (fn: () => Promise<any>, confirmText?: string) => void;
  pending: boolean;
}) {
  const [filter, setFilter] = useState<string>("all");

  if (data?.tableError) {
    return (
      <div style={{ ...card, fontSize: 13, lineHeight: 1.7 }}>
        ⚠️ 참여 장치 테이블을 읽지 못했습니다: <code>{data.tableError}</code><br />
        Supabase 대시보드 → SQL Editor에서 <code>supabase/participation.sql</code>을 실행했는지 확인하세요.
      </div>
    );
  }

  const tournaments: any[] = data?.tournaments ?? [];
  const allReviews: any[] = data?.reviews ?? [];
  const reviews = allReviews.filter((r) => filter === "all" || r.tournament_id === filter);
  const labelOf = (id: string) => tournaments.find((t) => t.id === id)?.label ?? id;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <section>
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 8 }}>
          대회 후기 이벤트 — 추첨은 응모 마감 뒤 첫 일요일 19:00 KST 크론이 자동 실행합니다. 당첨자 연락은 아래 이메일로.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tournaments.map((t) => {
            const d = (data?.draws ?? []).find((x: any) => x.tournament_id === t.id);
            const reviewN = allReviews.filter((r) => r.tournament_id === t.id).length;
            const entryN = allReviews.filter((r) => r.tournament_id === t.id && r.is_event_entry && !r.is_hidden).length;
            return (
              <div key={t.id} style={card}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <b>{t.label}</b>
                  <span style={{ fontSize: 12, color: MUTED }}>참가 예정 {t.attend} · 후기 {reviewN} · 응모 {entryN} (최근 200건 기준)</span>
                  <a href={`/blog/${t.slug}`} target="_blank" rel="noopener" style={{ fontSize: 12, color: GOLD }}>글↗</a>
                  {/* 추첨은 크론이 한다. 이 버튼은 크론이 실패했을 때만 — 응모 마감 전에는 보이지 않는다(마감 뒤 첫 블록이 아직 없다). */}
                  {!d && t.due && (
                    <button disabled={pending} onClick={() => run(() => runReviewDraw(t.id), `${t.label} 추첨을 지금 실행할까요?`)}
                      style={{ ...btn(GOLD), marginLeft: "auto" }}>지금 추첨</button>
                  )}
                  {!d && !t.due && <span style={{ fontSize: 12, color: MUTED, marginLeft: "auto" }}>응모 마감 전 — 추첨 대기</span>}
                  {d && <button onClick={() => run(() => deleteReviewDraw(t.id), `${t.label} 추첨 기록을 삭제할까요? (다시 추첨해도 같은 블록을 쓰므로, 응모 목록이 같으면 결과도 같습니다)`)} style={{ ...btn(RED), marginLeft: "auto" }}>기록 삭제</button>}
                </div>
                {d && (
                  <div style={{ fontSize: 12, color: MUTED, marginTop: 8, lineHeight: 1.7 }}>
                    응모 {(d.entry_ids ?? []).length}명 · 블록 {d.block_height} · {fmt(d.drawn_at)}{" "}
                    <a href={d.explorer_url} target="_blank" rel="noopener" style={{ color: GOLD }}>검증↗</a>
                    <br />
                    당첨: {(d.winners ?? []).length === 0
                      ? "없음"
                      : d.winners.map((w: any) => `#${w.no} ${w.nickname} <${w.email ?? "이메일 없음"}>`).join(" · ")}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, color: MUTED }}>후기 (최근 200) — 숨기면 목록·응모에서 빠집니다 · 베스트는 대회당 1명</span>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}
            style={{ marginLeft: "auto", padding: "5px 8px", borderRadius: 7, background: BG, border: `1px solid ${BORDER}`, color: INK }}>
            <option value="all">전체 대회</option>
            {tournaments.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {reviews.length === 0 && <div style={{ color: MUTED, fontSize: 13 }}>후기 없음</div>}
          {reviews.map((r) => (
            <div key={r.id} style={{ ...card, borderColor: r.is_best ? GOLD : BORDER, opacity: r.is_hidden ? 0.5 : 1 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", fontSize: 12, color: MUTED }}>
                <b style={{ color: INK }}>{nick(r)}</b>
                <span>{r.email ?? "이메일 없음"}</span>
                <span>{labelOf(r.tournament_id)}</span>
                <span>{[KIND_KO[r.event_kind], RESULT_KO[r.result], r.rating ? `★${r.rating}` : null].filter(Boolean).join(" · ")}</span>
                {r.was_attending && <span>사전참가</span>}
                {r.is_event_entry && <span style={{ color: GOLD }}>응모</span>}
                {r.is_hidden && <span style={{ color: RED }}>숨김</span>}
                {r.is_best && <span style={{ color: GOLD }}>★베스트</span>}
                <span>{fmt(r.created_at)}</span>
                <span style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                  <button onClick={() => run(() => setReviewBest(r.id, !r.is_best))} style={btn(GOLD)}>{r.is_best ? "베스트 해제" : "베스트"}</button>
                  <button onClick={() => run(() => setReviewHidden(r.id, !r.is_hidden), r.is_hidden ? undefined : "이 후기를 숨길까요? (응모에서도 빠집니다)")} style={btn(RED)}>
                    {r.is_hidden ? "복구" : "숨김"}
                  </button>
                </span>
              </div>
              <div style={{ fontSize: 13, marginTop: 6, whiteSpace: "pre-line", lineHeight: 1.6 }}>{r.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 8 }}>투표 현황</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {(data?.polls ?? []).map((p: any) => {
            const total = p.counts.reduce((a: number, b: number) => a + b, 0);
            return (
              <div key={p.id} style={{ ...card, padding: 10, fontSize: 12 }}>
                <b>{p.id}</b> <span style={{ color: MUTED }}>({p.hostSlug}) · {total}표</span>
                <div style={{ color: MUTED, marginTop: 4 }}>{p.labels.map((l: string, i: number) => `${l} ${p.counts[i]}`).join(" · ")}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 8 }}>투표 코멘트 (최근 100)</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {(data?.pollComments ?? []).length === 0 && <div style={{ color: MUTED, fontSize: 13 }}>코멘트 없음</div>}
          {(data?.pollComments ?? []).map((c: any) => (
            <div key={c.id} style={{ ...card, padding: 10, fontSize: 12, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", opacity: c.is_hidden ? 0.5 : 1 }}>
              <b>{nick(c)}</b>
              <span style={{ color: MUTED }}>{c.email ?? ""} · {c.poll_id} · {fmt(c.created_at)}</span>
              <span style={{ flex: 1, minWidth: 200 }}>{c.body}</span>
              <button onClick={() => run(() => setPollCommentHidden(c.id, !c.is_hidden))} style={btn(RED)}>{c.is_hidden ? "복구" : "숨김"}</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
