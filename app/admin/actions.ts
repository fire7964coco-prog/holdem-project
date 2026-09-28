"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { performDraw } from "@/lib/event-draw";
import { performReviewDraw } from "@/lib/review-event";

const BADGES = ["winner", "hot", "top", "participant"] as const;

/** 공통 가드: 어드민 아니면 throw, 서비스 클라이언트 없으면 에러 반환 */
async function guard() {
  const user = await requireAdmin();
  if (!user) return { error: "권한 없음" as const, db: null };
  const db = createAdminClient();
  if (!db) return { error: "SUPABASE_SERVICE_ROLE_KEY 미설정" as const, db: null };
  return { error: null, db };
}

// ── 모더레이션 ──────────────────────────────────────────────
export async function deletePost(id: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("posts").delete().eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  revalidatePath("/");
  return { success: true };
}

export async function deleteComment(id: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("comments").delete().eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

export async function deleteChat(id: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("chat_messages").delete().eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

// ── 회원 관리 ──────────────────────────────────────────────
export async function setBadge(userId: string, badge: string | null) {
  const { error, db } = await guard();
  if (error) return { error };
  if (badge !== null && !BADGES.includes(badge as (typeof BADGES)[number])) {
    return { error: "잘못된 뱃지" };
  }
  const { error: e } = await db.from("profiles").update({ badge }).eq("id", userId);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  revalidatePath("/");
  return { success: true };
}

// ── 팝업 관리 ──────────────────────────────────────────────
function popupFields(fd: FormData) {
  const s = (k: string) => {
    const v = String(fd.get(k) ?? "").trim();
    return v === "" ? null : v;
  };
  return {
    title: String(fd.get("title") ?? "").trim().slice(0, 100),
    body: s("body"),
    image_url: s("image_url"),
    link_url: s("link_url"),
    link_label: s("link_label"),
    locale: s("locale"),
    starts_at: s("starts_at"),
    ends_at: s("ends_at"),
    priority: Number(fd.get("priority") ?? 0) || 0,
    active: fd.get("active") === "on" || fd.get("active") === "true",
  };
}

export async function createPopup(fd: FormData) {
  const { error, db } = await guard();
  if (error) return { error };
  const f = popupFields(fd);
  if (!f.title) return { error: "제목을 입력해주세요." };
  const { error: e } = await db.from("popups").insert(f);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

export async function updatePopup(id: string, fd: FormData) {
  const { error, db } = await guard();
  if (error) return { error };
  const f = popupFields(fd);
  if (!f.title) return { error: "제목을 입력해주세요." };
  const { error: e } = await db.from("popups").update(f).eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

export async function togglePopup(id: string, active: boolean) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("popups").update({ active }).eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

export async function deletePopup(id: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("popups").delete().eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

// ── 이벤트 추첨 테스트 ──────────────────────────────────────
/** 지정 회차 추첨을 즉시 실행(테스트). force=true면 기존 결과 덮어씀. */
export async function runDrawTest(eventId: string, force: boolean) {
  const { error, db } = await guard();
  if (error) return { error };
  if (!/^\d{4}-W\d{2}$/.test(eventId)) return { error: "회차 형식 오류 (YYYY-WNN)" };
  const res = await performDraw(db, eventId, { force });
  if (res.error) return { error: res.error };
  revalidatePath("/admin");
  revalidatePath("/");
  return { success: true, result: res.result ?? null, skipped: res.skipped ?? false };
}

/** 특정 회차 추첨 결과 삭제(테스트 정리용) */
export async function deleteDraw(eventId: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("event_draws").delete().eq("event_id", eventId);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

// ── 참여 장치: 대회 후기 · 투표 코멘트 · 후기 이벤트 추첨 (2026-09-28) ──────────
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** 후기 숨김/복구 — 숨긴 후기는 목록·응모에서 빠진다(이미 끝난 추첨 결과는 그대로). */
export async function setReviewHidden(id: string, hidden: boolean) {
  const { error, db } = await guard();
  if (error) return { error };
  if (!UUID_RE.test(id)) return { error: "id 형식 오류" };
  const { error: e } = await db.from("tournament_reviews").update({ is_hidden: !!hidden }).eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

/** 베스트 후기 지정/해제 */
export async function setReviewBest(id: string, best: boolean) {
  const { error, db } = await guard();
  if (error) return { error };
  if (!UUID_RE.test(id)) return { error: "id 형식 오류" };
  // 베스트는 대회당 1명(설계 §4) — 지정할 때 같은 대회의 다른 베스트를 먼저 해제한다.
  if (best) {
    const { data: row, error: rErr } = await db.from("tournament_reviews").select("tournament_id").eq("id", id).maybeSingle();
    if (rErr || !row) return { error: rErr?.message ?? "후기를 찾지 못했습니다" };
    const { error: cErr } = await db.from("tournament_reviews").update({ is_best: false }).eq("tournament_id", row.tournament_id).neq("id", id);
    if (cErr) return { error: cErr.message };
  }
  const { error: e } = await db.from("tournament_reviews").update({ is_best: !!best }).eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

/** 투표 코멘트 숨김/복구 */
export async function setPollCommentHidden(id: string, hidden: boolean) {
  const { error, db } = await guard();
  if (error) return { error };
  if (!UUID_RE.test(id)) return { error: "id 형식 오류" };
  const { error: e } = await db.from("poll_comments").update({ is_hidden: !!hidden }).eq("id", id);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}

/** 대회 후기 이벤트 추첨을 지금 실행 — 크론이 실패했을 때의 수동 실행용. 응모 마감 전·이미 추첨한 회차는 거부/건너뜀. */
export async function runReviewDraw(tournamentId: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const res = await performReviewDraw(db, tournamentId);
  if (res.error) return { error: res.error };
  revalidatePath("/admin");
  return { success: true, ...res };
}

/** 대회 후기 이벤트 추첨 기록 삭제(테스트 정리용) */
export async function deleteReviewDraw(tournamentId: string) {
  const { error, db } = await guard();
  if (error) return { error };
  const { error: e } = await db.from("review_event_draws").delete().eq("tournament_id", tournamentId);
  if (e) return { error: e.message };
  revalidatePath("/admin");
  return { success: true };
}
