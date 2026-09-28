"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  COMMENT_BODY_MAX, COMMENT_BODY_MIN, EVENT_KIND_OPTIONS, LINK_PATTERN, MIN_RATINGS_FOR_AVERAGE,
  RESULT_OPTIONS, REVIEW_BODY_MAX, REVIEW_BODY_MIN, REVIEW_TOURNAMENTS, drawSunday, entryDeadline,
  isEntryWindowOpen, phaseOf, reviewTournamentById, type Phase,
} from "@/lib/participation-config";
import { pollById } from "@/lib/polls";
import { tournamentDates } from "@/lib/review-event";

/**
 * 참여 장치 서버 액션 (2026-09-28 · 설계 docs/participation-event-redesign-design.md)
 *
 * 🔴 DB 접근은 전부 여기서 service role로 한다(테이블은 RLS on + 정책 0개).
 *    그래서 **모든 입력을 여기서 검사한다** — 대회·투표 id는 설정 목록에 있는 것만, 로그인·기간·길이·링크까지.
 * 🔴 user_id 를 브라우저로 돌려주지 않는다 — «내 것인가»만 isMine 으로 알린다.
 * 🔴 DB나 키가 없으면 { available:false } — 화면은 조용히 기본 상태로 돌아간다(오류 문구로 글을 덮지 않는다).
 */

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const charLen = (s: string) => [...s].length;

async function currentUser() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return user ?? null;
  } catch {
    return null;
  }
}

function nicknameOf(row: any): string {
  const p = Array.isArray(row?.profiles) ? row.profiles[0] : row?.profiles;
  return (p?.nickname as string | undefined)?.trim() || "익명";
}

// ── 대회 «참가 예정 → 후기» ─────────────────────────────────────

export type ReviewView = {
  id: string;
  nickname: string;
  body: string;
  eventKind: string | null;
  result: string | null;
  rating: number | null;
  wasAttending: boolean;
  isEventEntry: boolean;
  isBest: boolean;
  isMine: boolean;
  createdAt: string;
};

export type MyReview = {
  body: string;
  eventKind: string | null;
  result: string | null;
  rating: number | null;
  isEventEntry: boolean;
  isHidden: boolean;
};

export type TournamentParticipation =
  | { available: false }
  | {
      available: true;
      phase: Phase;
      startDate: string;
      endDate: string;
      entryDeadline: string;
      drawDate: string;
      entryWindowOpen: boolean;
      isLoggedIn: boolean;
      attendCount: number;
      iAttend: boolean;
      reviewCount: number;
      reviews: ReviewView[];
      ratingCount: number;
      ratingAverage: number | null;
      myReview: MyReview | null;
    };

const REVIEW_COLS = "id, user_id, body, event_kind, result, rating, was_attending, is_event_entry, is_best, created_at, profiles(nickname)";

export async function getTournamentParticipation(tournamentId: string): Promise<TournamentParticipation> {
  if (typeof tournamentId !== "string" || !reviewTournamentById(tournamentId)) return { available: false };
  const dates = tournamentDates(tournamentId);
  const db = createAdminClient();
  if (!dates || !db) return { available: false };

  try {
    const user = await currentUser();
    const now = new Date();
    const [att, rev, ratings, mine, myAtt] = await Promise.all([
      db.from("tournament_attendance").select("*", { count: "exact", head: true }).eq("tournament_id", tournamentId),
      db.from("tournament_reviews").select(REVIEW_COLS, { count: "exact" })
        .eq("tournament_id", tournamentId).eq("is_hidden", false)
        .order("is_best", { ascending: false }).order("created_at", { ascending: false }).limit(50),
      db.from("tournament_reviews").select("rating")
        .eq("tournament_id", tournamentId).eq("is_hidden", false).not("rating", "is", null).limit(5000),
      user
        ? db.from("tournament_reviews").select("body, event_kind, result, rating, is_event_entry, is_hidden")
            .eq("tournament_id", tournamentId).eq("user_id", user.id).maybeSingle()
        : Promise.resolve({ data: null, error: null }),
      user
        ? db.from("tournament_attendance").select("user_id").eq("tournament_id", tournamentId).eq("user_id", user.id).maybeSingle()
        : Promise.resolve({ data: null, error: null }),
    ]);
    if (att.error || rev.error || ratings.error || mine.error || myAtt.error) return { available: false };

    const ratingValues = (ratings.data ?? []).map((r: any) => Number(r.rating)).filter((n) => n >= 1 && n <= 5);
    const ratingAverage = ratingValues.length >= MIN_RATINGS_FOR_AVERAGE
      ? Math.round((ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length) * 10) / 10
      : null;
    const m: any = mine.data;

    return {
      available: true,
      phase: phaseOf(dates.startDate, dates.endDate, now),
      startDate: dates.startDate,
      endDate: dates.endDate,
      entryDeadline: entryDeadline(dates.endDate),
      drawDate: drawSunday(dates.endDate),
      entryWindowOpen: isEntryWindowOpen(dates.endDate, now),
      isLoggedIn: !!user,
      attendCount: att.count ?? 0,
      iAttend: !!myAtt.data,
      reviewCount: rev.count ?? 0,
      reviews: (rev.data ?? []).map((r: any) => ({
        id: r.id,
        nickname: nicknameOf(r),
        body: r.body,
        eventKind: r.event_kind,
        result: r.result,
        rating: r.rating,
        wasAttending: !!r.was_attending,
        isEventEntry: !!r.is_event_entry,
        isBest: !!r.is_best,
        isMine: !!user && r.user_id === user.id,
        createdAt: r.created_at,
      })),
      ratingCount: ratingValues.length,
      ratingAverage,
      myReview: m
        ? { body: m.body, eventKind: m.event_kind, result: m.result, rating: m.rating, isEventEntry: !!m.is_event_entry, isHidden: !!m.is_hidden }
        : null,
    };
  } catch {
    return { available: false };
  }
}

// strict:false 라 { ok:true } | { ok:false } 판별 유니언이 좁혀지지 않는다 — 한 모양으로 둔다.
type ActionResult = { ok: boolean; error?: string; requiresLogin?: boolean };

export async function toggleAttendance(tournamentId: string, want: boolean): Promise<ActionResult> {
  if (typeof tournamentId !== "string" || !reviewTournamentById(tournamentId)) return { ok: false, error: "대상 대회가 아닙니다." };
  const dates = tournamentDates(tournamentId);
  const db = createAdminClient();
  if (!dates || !db) return { ok: false, error: "잠시 후 다시 시도해 주세요." };
  const user = await currentUser();
  if (!user) return { ok: false, error: "로그인이 필요합니다.", requiresLogin: true };
  if (phaseOf(dates.startDate, dates.endDate, new Date()) === "after") {
    return { ok: false, error: "대회가 끝나 참가 예정 표시는 닫혔습니다. 후기를 남겨 주세요." };
  }
  const q = want
    ? db.from("tournament_attendance").upsert({ tournament_id: tournamentId, user_id: user.id }, { onConflict: "tournament_id,user_id", ignoreDuplicates: true })
    : db.from("tournament_attendance").delete().eq("tournament_id", tournamentId).eq("user_id", user.id);
  const { error } = await q;
  if (error) return { ok: false, error: "저장하지 못했습니다. 잠시 후 다시 시도해 주세요." };
  return { ok: true };
}

export type ReviewInput = {
  body: string;
  eventKind: string | null;
  result: string | null;
  rating: number | null;
  enterEvent: boolean;
};

export async function submitReview(tournamentId: string, input: ReviewInput): Promise<ActionResult> {
  if (typeof tournamentId !== "string" || !reviewTournamentById(tournamentId)) return { ok: false, error: "대상 대회가 아닙니다." };
  const dates = tournamentDates(tournamentId);
  const db = createAdminClient();
  if (!dates || !db) return { ok: false, error: "잠시 후 다시 시도해 주세요." };
  const user = await currentUser();
  if (!user) return { ok: false, error: "로그인이 필요합니다.", requiresLogin: true };

  const now = new Date();
  if (phaseOf(dates.startDate, dates.endDate, now) !== "after") return { ok: false, error: "후기는 대회가 끝난 다음 날부터 쓸 수 있습니다." };

  const body = String(input?.body ?? "").replace(/\r\n/g, "\n").trim();
  const len = charLen(body);
  if (len < REVIEW_BODY_MIN) return { ok: false, error: `후기는 ${REVIEW_BODY_MIN}자 이상 써 주세요. (지금 ${len}자)` };
  if (len > REVIEW_BODY_MAX) return { ok: false, error: `후기는 ${REVIEW_BODY_MAX}자까지입니다. (지금 ${len}자)` };
  if (LINK_PATTERN.test(body)) return { ok: false, error: "후기에는 링크·주소를 넣을 수 없습니다." };

  const eventKind = input?.eventKind ?? null;
  if (eventKind !== null && !EVENT_KIND_OPTIONS.some((o) => o.value === eventKind)) return { ok: false, error: "참가 이벤트 값이 올바르지 않습니다." };
  const result = input?.result ?? null;
  if (result !== null && !RESULT_OPTIONS.some((o) => o.value === result)) return { ok: false, error: "결과 값이 올바르지 않습니다." };
  const rating = input?.rating ?? null;
  if (rating !== null && !(Number.isInteger(rating) && rating >= 1 && rating <= 5)) return { ok: false, error: "별점 값이 올바르지 않습니다." };

  const windowOpen = isEntryWindowOpen(dates.endDate, now);
  const [existingRes, attRes] = await Promise.all([
    db.from("tournament_reviews").select("id, is_event_entry").eq("tournament_id", tournamentId).eq("user_id", user.id).maybeSingle(),
    db.from("tournament_attendance").select("user_id").eq("tournament_id", tournamentId).eq("user_id", user.id).maybeSingle(),
  ]);
  if (existingRes.error || attRes.error) return { ok: false, error: "저장하지 못했습니다. 잠시 후 다시 시도해 주세요." };

  const existing: any = existingRes.data;
  // 응모 여부: 응모 기간 안이면 체크박스대로, 기간이 지났으면 처음 값을 그대로 둔다(늦은 응모·사후 취소 둘 다 막음).
  const isEventEntry = windowOpen ? !!input?.enterEvent : !!existing?.is_event_entry;

  const fields = { body, event_kind: eventKind, result, rating, is_event_entry: isEventEntry, updated_at: now.toISOString() };
  const { error } = existing
    ? await db.from("tournament_reviews").update(fields).eq("id", existing.id).eq("user_id", user.id)
    : await db.from("tournament_reviews").insert({ ...fields, tournament_id: tournamentId, user_id: user.id, was_attending: !!attRes.data });
  if (error) {
    if (error.code === "23505") return { ok: false, error: "이미 후기를 남기셨습니다. 새로고침 후 수정해 주세요." };
    if (error.code === "23514") return { ok: false, error: "후기 내용이 조건(길이·링크 금지)에 맞지 않습니다." };
    return { ok: false, error: "저장하지 못했습니다. 잠시 후 다시 시도해 주세요." };
  }
  return { ok: true };
}

export async function deleteMyReview(tournamentId: string): Promise<ActionResult> {
  if (typeof tournamentId !== "string" || !reviewTournamentById(tournamentId)) return { ok: false, error: "대상 대회가 아닙니다." };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "잠시 후 다시 시도해 주세요." };
  const user = await currentUser();
  if (!user) return { ok: false, error: "로그인이 필요합니다.", requiresLogin: true };
  // 추첨이 끝난 대회의 응모 후기는 지울 수 없다 — 응모 목록(검증 자료)과 당첨 연락이 끊기지 않게. 수정은 된다.
  const [mineRes, drawRes] = await Promise.all([
    db.from("tournament_reviews").select("is_event_entry").eq("tournament_id", tournamentId).eq("user_id", user.id).maybeSingle(),
    db.from("review_event_draws").select("tournament_id").eq("tournament_id", tournamentId).maybeSingle(),
  ]);
  if (mineRes.error || drawRes.error) return { ok: false, error: "삭제하지 못했습니다. 잠시 후 다시 시도해 주세요." };
  if ((mineRes.data as any)?.is_event_entry && drawRes.data) {
    return { ok: false, error: "추첨이 끝난 대회의 응모 후기는 삭제할 수 없습니다. 내용 수정은 할 수 있습니다." };
  }
  const { error } = await db.from("tournament_reviews").delete().eq("tournament_id", tournamentId).eq("user_id", user.id);
  if (error) return { ok: false, error: "삭제하지 못했습니다. 잠시 후 다시 시도해 주세요." };
  return { ok: true };
}

// ── 대회 후기 이벤트 현황 (커뮤니티 이벤트 탭) ─────────────────────

export type ReviewEventRound = {
  id: string;
  label: string;
  slug: string;
  startDate: string;
  endDate: string;
  phase: Phase;
  entryDeadline: string;
  drawDate: string;
  entryWindowOpen: boolean;
  entryCount: number;
  myStatus: "none" | "review" | "entry";
  best: string[];
  draw: null | {
    blockHeight: number;
    blockHash: string;
    explorerUrl: string | null;
    drawnAt: string;
    entries: { no: number; nickname: string }[];
    winners: { no: number; nickname: string }[];
  };
};

export async function getReviewEventOverview(): Promise<{ available: false } | { available: true; isLoggedIn: boolean; rounds: ReviewEventRound[] }> {
  const db = createAdminClient();
  if (!db) return { available: false };
  try {
    const user = await currentUser();
    const now = new Date();
    const ids = REVIEW_TOURNAMENTS.map((t) => t.id);
    const [drawsRes, entryRows, bestRows, mineRows] = await Promise.all([
      db.from("review_event_draws").select("*").in("tournament_id", ids),
      Promise.all(ids.map((id) => db.from("tournament_reviews").select("*", { count: "exact", head: true })
        .eq("tournament_id", id).eq("is_event_entry", true).eq("is_hidden", false))),
      db.from("tournament_reviews").select("tournament_id, profiles(nickname)").in("tournament_id", ids).eq("is_best", true).eq("is_hidden", false),
      user
        ? db.from("tournament_reviews").select("tournament_id, is_event_entry").in("tournament_id", ids).eq("user_id", user.id)
        : Promise.resolve({ data: [], error: null }),
    ]);
    if (drawsRes.error || entryRows.some((r) => r.error) || bestRows.error || mineRows.error) return { available: false };

    const draws = new Map<string, any>((drawsRes.data ?? []).map((d: any) => [d.tournament_id, d]));
    const allEntryIds = [...new Set((drawsRes.data ?? []).flatMap((d: any) => d.entry_ids as string[]))];
    const nick = new Map<string, string>();
    if (allEntryIds.length) {
      const { data, error } = await db.from("tournament_reviews").select("id, profiles(nickname)").in("id", allEntryIds);
      if (error) return { available: false };
      for (const r of data ?? []) nick.set((r as any).id, nicknameOf(r));
    }

    const rounds: ReviewEventRound[] = [];
    for (const t of REVIEW_TOURNAMENTS) {
      const dates = tournamentDates(t.id);
      if (!dates) continue;
      const d = draws.get(t.id);
      const mine = (mineRows.data ?? []).find((r: any) => r.tournament_id === t.id) as any;
      const entryIds: string[] = d?.entry_ids ?? [];
      rounds.push({
        id: t.id,
        label: t.label,
        slug: t.slug,
        startDate: dates.startDate,
        endDate: dates.endDate,
        phase: phaseOf(dates.startDate, dates.endDate, now),
        entryDeadline: entryDeadline(dates.endDate),
        drawDate: drawSunday(dates.endDate),
        entryWindowOpen: isEntryWindowOpen(dates.endDate, now),
        entryCount: entryRows[ids.indexOf(t.id)]?.count ?? 0,
        myStatus: mine ? (mine.is_event_entry ? "entry" : "review") : "none",
        best: (bestRows.data ?? []).filter((r: any) => r.tournament_id === t.id).map(nicknameOf),
        draw: d
          ? {
              blockHeight: Number(d.block_height),
              blockHash: d.block_hash,
              explorerUrl: d.explorer_url,
              drawnAt: d.drawn_at,
              entries: entryIds.map((id, i) => ({ no: i + 1, nickname: nick.get(id) ?? "(삭제된 후기)" })),
              winners: (d.winner_ids as string[]).map((id) => ({ no: entryIds.indexOf(id) + 1, nickname: nick.get(id) ?? "(삭제된 후기)" })),
            }
          : null,
      });
    }
    return { available: true, isLoggedIn: !!user, rounds };
  } catch {
    return { available: false };
  }
}

// ── 전략 글 투표 ────────────────────────────────────────────────

export type PollState =
  | { available: false }
  | {
      available: true;
      counts: number[];
      total: number;
      myChoice: number | null;
      isLoggedIn: boolean;
      comments: { id: string; nickname: string; body: string; isMine: boolean; createdAt: string }[];
    };

async function readPoll(pollId: string, voterId: string | null): Promise<PollState> {
  const poll = pollById(pollId);
  const db = createAdminClient();
  if (!poll || !db) return { available: false };
  const user = await currentUser();
  const countQs = poll.options.map((_, i) =>
    db.from("poll_votes").select("*", { count: "exact", head: true }).eq("poll_id", pollId).eq("option_idx", i));
  const [mineRes, commentsRes, ...countRes] = await Promise.all([
    voterId
      ? db.from("poll_votes").select("option_idx").eq("poll_id", pollId).eq("voter_id", voterId).maybeSingle()
      : Promise.resolve({ data: null, error: null }),
    db.from("poll_comments").select("id, user_id, body, created_at, profiles(nickname)")
      .eq("poll_id", pollId).eq("is_hidden", false).order("created_at", { ascending: false }).limit(20),
    ...countQs,
  ]);
  if (mineRes.error || commentsRes.error || countRes.some((r: any) => r.error)) return { available: false };
  const counts = countRes.map((r: any) => r.count ?? 0);
  return {
    available: true,
    counts,
    total: counts.reduce((a, b) => a + b, 0),
    myChoice: (mineRes.data as any)?.option_idx ?? null,
    isLoggedIn: !!user,
    comments: (commentsRes.data ?? []).map((c: any) => ({
      id: c.id, nickname: nicknameOf(c), body: c.body, isMine: !!user && c.user_id === user.id, createdAt: c.created_at,
    })),
  };
}

export async function getPollState(pollId: string, voterId: string | null): Promise<PollState> {
  if (typeof pollId !== "string" || !pollById(pollId)) return { available: false };
  const vid = typeof voterId === "string" && UUID.test(voterId) ? voterId : null;
  try {
    return await readPoll(pollId, vid);
  } catch {
    return { available: false };
  }
}

const VOTES_PER_IP_PER_HOUR = 30;

export async function castVote(pollId: string, voterId: string, optionIdx: number): Promise<{ ok: boolean; error?: string; state?: PollState }> {
  const poll = typeof pollId === "string" ? pollById(pollId) : undefined;
  if (!poll) return { ok: false, error: "투표를 찾지 못했습니다." };
  if (typeof voterId !== "string" || !UUID.test(voterId)) return { ok: false, error: "투표를 저장하지 못했습니다." };
  if (!Number.isInteger(optionIdx) || optionIdx < 0 || optionIdx >= poll.options.length) return { ok: false, error: "선택지가 올바르지 않습니다." };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "투표를 저장하지 못했습니다." };
  try {
    const ip = (headers().get("x-forwarded-for") ?? "").split(",")[0].trim();
    const ipHash = ip ? createHash("sha256").update(`hm-poll:${ip}`).digest("hex").slice(0, 32) : null;
    if (ipHash) {
      const since = new Date(Date.now() - 3600_000).toISOString();
      const { count, error } = await db.from("poll_votes").select("*", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("created_at", since);
      if (error) return { ok: false, error: "투표를 저장하지 못했습니다." };
      if ((count ?? 0) >= VOTES_PER_IP_PER_HOUR) return { ok: false, error: "잠시 후 다시 투표해 주세요." };
    }
    // 한 브라우저 한 표 — 이미 찍었으면 처음 표를 그대로 둔다.
    const { error } = await db.from("poll_votes").upsert(
      { poll_id: pollId, voter_id: voterId, option_idx: optionIdx, ip_hash: ipHash },
      { onConflict: "poll_id,voter_id", ignoreDuplicates: true },
    );
    if (error) return { ok: false, error: "투표를 저장하지 못했습니다." };
    return { ok: true, state: await readPoll(pollId, voterId) };
  } catch {
    return { ok: false, error: "투표를 저장하지 못했습니다." };
  }
}

export async function addPollComment(pollId: string, bodyRaw: string): Promise<ActionResult> {
  if (typeof pollId !== "string" || !pollById(pollId)) return { ok: false, error: "투표를 찾지 못했습니다." };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "잠시 후 다시 시도해 주세요." };
  const user = await currentUser();
  if (!user) return { ok: false, error: "로그인이 필요합니다.", requiresLogin: true };
  const body = String(bodyRaw ?? "").replace(/\s+/g, " ").trim();
  const len = charLen(body);
  if (len < COMMENT_BODY_MIN || len > COMMENT_BODY_MAX) return { ok: false, error: `코멘트는 ${COMMENT_BODY_MIN}~${COMMENT_BODY_MAX}자입니다.` };
  if (LINK_PATTERN.test(body)) return { ok: false, error: "코멘트에는 링크·주소를 넣을 수 없습니다." };
  const since = new Date(Date.now() - 10 * 60_000).toISOString();
  const { count, error: cErr } = await db.from("poll_comments").select("*", { count: "exact", head: true }).eq("user_id", user.id).gte("created_at", since);
  if (cErr) return { ok: false, error: "저장하지 못했습니다. 잠시 후 다시 시도해 주세요." };
  if ((count ?? 0) >= 3) return { ok: false, error: "잠시 후 다시 남겨 주세요." };
  const { error } = await db.from("poll_comments").insert({ poll_id: pollId, user_id: user.id, body });
  if (error) return { ok: false, error: "저장하지 못했습니다. 잠시 후 다시 시도해 주세요." };
  return { ok: true };
}

export async function deleteMyPollComment(commentId: string): Promise<ActionResult> {
  if (typeof commentId !== "string" || !UUID.test(commentId)) return { ok: false, error: "코멘트를 찾지 못했습니다." };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "잠시 후 다시 시도해 주세요." };
  const user = await currentUser();
  if (!user) return { ok: false, error: "로그인이 필요합니다.", requiresLogin: true };
  const { error } = await db.from("poll_comments").delete().eq("id", commentId).eq("user_id", user.id);
  if (error) return { ok: false, error: "삭제하지 못했습니다." };
  return { ok: true };
}
