"use server";

import { randomUUID } from "node:crypto";
import { headers } from "next/headers";
import sharp from "sharp";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  AVATAR_BUCKET, AVATAR_CHARACTERS, AVATAR_SIZE, AVATAR_UPLOAD_MAX_BYTES, SOLVER_FEEDBACK_LOCALES,
  deviceFromUserAgent, isSolverFeedbackLocale,
} from "@/lib/solver-feedback-config";
import {
  deleteFeedback, invalidateSolverFeedback, readMyFeedbackState, requestReReview, saveFeedback, setNickname,
  toggleHelpful, type FeedbackInput, type FeedbackResult, type MyFeedbackState,
} from "@/lib/solver-feedback-server";

/**
 * 솔버 후기창 — 랜딩 서버 액션 (2026-10-04 · 설계 docs/solver-review-design.md)
 * 검사·저장 본체 = lib/solver-feedback-server.ts (앱 API 와 한 벌). 여기는 로그인 확인 + 기기 판별 + 프로필 이미지.
 */

async function currentUser() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return user ?? null;
  } catch {
    return null;
  }
}

export async function getMySolverFeedback(locale: string): Promise<MyFeedbackState> {
  const loc = isSolverFeedbackLocale(locale) ? locale : "ko";
  return readMyFeedbackState(await currentUser(), loc);
}

export async function submitSolverFeedback(input: FeedbackInput): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  const device = deviceFromUserAgent(headers().get("user-agent"));
  const r = await saveFeedback({ user, input, source: "landing", device });
  return { ok: r.ok, error: r.error };
}

export async function deleteMySolverFeedback(id: string): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  return deleteFeedback(user, id);
}

export async function requestSolverFeedbackReReview(id: string): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  return requestReReview(user, id);
}

export async function toggleSolverFeedbackHelpful(id: string, want: boolean): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  return toggleHelpful(user, id, !!want);
}

export async function changeSolverNickname(raw: string): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  const r = await setNickname(db, user.id, String(raw ?? ""));
  if (r.ok) {
    await db.from("solver_review_profiles").upsert(
      { user_id: user.id, nickname_confirmed_at: new Date().toISOString(), updated_at: new Date().toISOString() },
      { onConflict: "user_id" },
    );
    refreshAllLandings();
  }
  return r;
}

/** 이름·사진은 모든 언어 후기에 붙는다 → 12개 랜딩을 다 갱신 */
function refreshAllLandings() {
  for (const l of SOLVER_FEEDBACK_LOCALES) invalidateSolverFeedback(l);
}

// ── 프로필 이미지 (선택 · 기본 = 이니셜 원형) ────────────────────

async function writeAvatar(userId: string, fields: Record<string, unknown>): Promise<FeedbackResult> {
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  const { data: prev } = await db.from("solver_review_profiles").select("avatar_path, avatar_hidden_reason").eq("user_id", userId).maybeSingle();
  const { error } = await db.from("solver_review_profiles").upsert(
    // 새 이미지를 고르면 이전 이미지 숨김은 풀린다 — 숨긴 것은 «그 이미지»이지 사람이 아니다.
    { user_id: userId, avatar_hidden_reason: null, updated_at: new Date().toISOString(), ...fields },
    { onConflict: "user_id" },
  );
  if (error) return { ok: false, error: "unavailable" };
  const oldPath = (prev as any)?.avatar_path as string | null;
  if (oldPath && oldPath !== fields.avatar_path) {
    await db.storage.from(AVATAR_BUCKET).remove([oldPath]).catch(() => {});
  }
  refreshAllLandings();
  return { ok: true };
}

export async function chooseAvatarCharacter(id: string): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  if (!(AVATAR_CHARACTERS as readonly string[]).includes(id)) return { ok: false, error: "bad_input" };
  return writeAvatar(user.id, { avatar_kind: "char", avatar_char: id, avatar_path: null });
}

export async function chooseProviderAvatar(): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  return writeAvatar(user.id, { avatar_kind: "provider", avatar_char: null, avatar_path: null });
}

export async function clearAvatar(): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  return writeAvatar(user.id, { avatar_kind: null, avatar_char: null, avatar_path: null });
}

/**
 * 내 사진·이미지 올리기 — 브라우저가 512px 로 줄여 보낸 것을 서버가 다시
 * 정사각 256px webp 로 재인코딩한다. sharp 는 메타데이터를 붙이지 않으므로 EXIF·위치정보가 빠진다.
 */
export async function uploadAvatar(fd: FormData): Promise<FeedbackResult> {
  const user = await currentUser();
  if (!user) return { ok: false, error: "login" };
  const file = fd.get("file");
  if (!(file instanceof Blob)) return { ok: false, error: "image_type" };
  if (file.size > AVATAR_UPLOAD_MAX_BYTES) return { ok: false, error: "image_size" };
  if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) return { ok: false, error: "image_type" };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  let out: Buffer;
  try {
    out = await sharp(Buffer.from(await file.arrayBuffer()), { limitInputPixels: 40_000_000 })
      .rotate()
      .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: "cover", position: "attention" })
      .webp({ quality: 82 })
      .toBuffer();
  } catch {
    return { ok: false, error: "image_type" };
  }
  const path = `u/${user.id}/${randomUUID()}.webp`;
  const { error } = await db.storage.from(AVATAR_BUCKET).upload(path, out, { contentType: "image/webp", upsert: false });
  if (error) return { ok: false, error: "unavailable" };
  return writeAvatar(user.id, { avatar_kind: "upload", avatar_char: null, avatar_path: path });
}

