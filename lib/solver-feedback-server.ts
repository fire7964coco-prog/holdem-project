import { revalidatePath, revalidateTag } from "next/cache";
import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminEmail } from "@/lib/admin";
import {
  AVATAR_BUCKET, FEATURED_MAX, FEEDBACK_BODY_MAX, FEEDBACK_BODY_MIN, FEEDBACK_DOWNSIDE_MAX, LINK_PATTERN,
  MIN_RATINGS_FOR_AVERAGE, QUESTIONS_PER_10MIN, SAVES_PER_10MIN, SOLVER_FEEDBACK_LOCALES, isSolverFeedbackLocale, nicknameProblem,
  normalizeNickname, solverLandingPath, type Device, type FeedbackKind, type HiddenReason, type SolverFeedbackLocale,
} from "@/lib/solver-feedback-config";

/**
 * 솔버 후기창 서버 공용 (2026-10-04 · 설계 docs/solver-review-design.md §7-2)
 *
 * 🔴 검사는 이 파일 한 벌이다 — 랜딩 서버 액션(app/solver-feedback/actions.ts)과
 *    앱 API(app/api/solver-feedback/route.ts)가 둘 다 여기를 부른다. 두 벌로 가르지 마라.
 * 🔴 user_id 를 화면으로 돌려주지 않는다 — «내 것인가»만 isMine 으로.
 * 🔴 오류는 «코드»로 돌려준다 — 화면 문구는 lib/solver-reviews-i18n.ts 가 12언어로 갖는다.
 */

export const SOLVER_FEEDBACK_TAG = "solver-feedback";

export type FeedbackError =
  | "login" | "unavailable" | "locale" | "body_short" | "body_long" | "link" | "downside_long"
  | "rating" | "rating_needs_body" | "rate" | "nickname_confirm" | "not_found" | "already_requested" | "bad_input"
  | "nickname_short" | "nickname_long" | "nickname_link" | "nickname_impersonation"
  | "image_type" | "image_size";

export type FeedbackResult = { ok: boolean; error?: FeedbackError };

const charLen = (s: string) => [...s].length;

/**
 * 랜딩 블록 읽기용 클라이언트 — 쿠키 없음(SSG 유지 · 설계 §6) + Next 데이터 캐시 태그.
 * 후기 등록·수정·숨김 때 revalidateTag 로 비운다 → 정적 HTML 이 다시 만들어진다.
 */
export function createTaggedReadClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input: any, init?: any) => fetch(input, { ...init, next: { tags: [SOLVER_FEEDBACK_TAG] } } as any),
    },
  });
}

/** 쓰기 뒤 랜딩 갱신 — 데이터 캐시 태그 + 그 언어 랜딩 경로 */
export function invalidateSolverFeedback(locale: SolverFeedbackLocale) {
  try {
    revalidateTag(SOLVER_FEEDBACK_TAG);
    revalidatePath(solverLandingPath(locale));
  } catch {
    // 빌드·테스트 문맥에서는 무시
  }
}

export function providerOf(user: Pick<User, "app_metadata"> | null): "google" | "kakao" | "email" | null {
  const p = String((user?.app_metadata as any)?.provider ?? "");
  return p === "google" || p === "kakao" || p === "email" ? p : null;
}

// ── 공개 목록 (랜딩 서버 컴포넌트) ──────────────────────────────

export type PublicFeedback = {
  id: string;
  kind: FeedbackKind;
  body: string;
  downside: string | null;
  rating: number | null;
  device: Device | null;
  provider: "google" | "kakao" | "email" | null;
  hasUsage: boolean;
  createdAt: string;
  nickname: string;
  joinedAt: string | null;
  avatar: { kind: "char"; id: string } | { kind: "url"; url: string } | null;
  reply: { body: string; createdAt: string } | null;
  helpful: number;
};

export type PublicFeedbackState =
  | { state: "unavailable"; reason: "no-key" | "no-table" }
  | {
      state: "ok";
      reviews: PublicFeedback[];
      featuredIds: string[];
      questions: PublicFeedback[];
      ratingCount: number;
      ratingAverage: number | null;
    };

function storagePublicUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");
  return `${base}/storage/v1/object/public/${AVATAR_BUCKET}/${path}`;
}

function toPublic(r: any): PublicFeedback {
  let avatar: PublicFeedback["avatar"] = null;
  if (r.avatar_kind === "char" && r.avatar_char) avatar = { kind: "char", id: r.avatar_char };
  else if (r.avatar_kind === "upload" && r.avatar_path) avatar = { kind: "url", url: storagePublicUrl(r.avatar_path) };
  else if (r.avatar_kind === "provider" && typeof r.provider_avatar_url === "string" && /^https:\/\//.test(r.provider_avatar_url)) {
    avatar = { kind: "url", url: r.provider_avatar_url };
  }
  return {
    id: r.id,
    kind: r.kind,
    body: r.body,
    downside: r.downside ?? null,
    rating: typeof r.rating === "number" ? r.rating : null,
    device: r.device ?? null,
    provider: r.auth_provider ?? null,
    hasUsage: !!r.has_usage,
    createdAt: r.created_at,
    nickname: (r.nickname as string | undefined)?.trim() || "—",
    joinedAt: r.joined_at ?? null,
    avatar,
    reply: r.reply_body ? { body: r.reply_body, createdAt: r.reply_at } : null,
    helpful: Number(r.helpful_count ?? 0),
  };
}

/** 대표 후기 = «도움됐어요» 많은 순 → 최신(운영자가 고르지 않는다 · 설계 §3-3). */
export function pickFeatured(reviews: PublicFeedback[]): string[] {
  return [...reviews]
    .sort((a, b) => b.helpful - a.helpful || b.createdAt.localeCompare(a.createdAt))
    .slice(0, FEATURED_MAX)
    .map((r) => r.id);
}

/** 개발 전용 화면 점검(screen-review) 표본 — `SOLVER_REVIEWS_FIXTURE=0|2|5` + `next dev` 에서만. 운영 빌드에선 절대 안 탄다. */
function devFixture(n: number): PublicFeedbackState {
  const now = Date.UTC(2026, 9, 4);
  const mk = (i: number, kind: FeedbackKind, extra: Partial<PublicFeedback> = {}): PublicFeedback => ({
    id: `00000000-0000-4000-8000-00000000000${i}`, kind, body: `표본 ${kind} ${i} — 화면 점검용 문장입니다. 줄바꿈과 길이를 봅니다.`,
    downside: null, rating: null, device: (["phone", "desktop", "tablet"] as const)[i % 3], provider: i % 2 ? "google" : "kakao",
    hasUsage: i === 1, createdAt: new Date(now - i * 86400_000 * 3).toISOString(), nickname: `테스터${i}`,
    joinedAt: new Date(now - 60 * 86400_000).toISOString(), avatar: i === 2 ? { kind: "char", id: "chip-gold" } : null,
    reply: null, helpful: 5 - i, ...extra,
  });
  const reviews = Array.from({ length: n }, (_, i) => mk(i + 1, "review", { rating: (5 - (i % 2)), downside: i === 0 ? "아쉬운 점 표본" : null }));
  const questions = n ? [mk(8, "question", { reply: { body: "운영자 답글 표본", createdAt: new Date(now).toISOString() } }), mk(9, "question")] : [];
  return { state: "ok", reviews, featuredIds: pickFeatured(reviews), questions, ratingCount: reviews.length, ratingAverage: n >= MIN_RATINGS_FOR_AVERAGE ? 4.6 : null };
}

export async function getPublicSolverFeedback(locale: SolverFeedbackLocale): Promise<PublicFeedbackState> {
  const fx = process.env.SOLVER_REVIEWS_FIXTURE;
  if (process.env.NODE_ENV === "development" && fx && /^\d$/.test(fx)) return devFixture(Number(fx));
  const db = createTaggedReadClient();
  if (!db) return { state: "unavailable", reason: "no-key" };
  try {
    const { data, error } = await db.from("solver_feedback_public").select("*")
      .eq("locale", locale).order("created_at", { ascending: false }).limit(500);
    if (error) return { state: "unavailable", reason: "no-table" };
    const all = (data ?? []).map(toPublic);
    const reviews = all.filter((r) => r.kind === "review");
    const questions = all.filter((r) => r.kind === "question");
    const ratings = reviews.map((r) => r.rating).filter((n): n is number => typeof n === "number");
    const ratingAverage = ratings.length >= MIN_RATINGS_FOR_AVERAGE
      ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10
      : null;
    return { state: "ok", reviews, featuredIds: pickFeatured(reviews), questions, ratingCount: ratings.length, ratingAverage };
  } catch {
    return { state: "unavailable", reason: "no-table" };
  }
}

// ── 내 상태 (쓰기 칸이 마운트 때 묻는다) ────────────────────────

export type MyFeedbackState = {
  available: boolean;
  isLoggedIn: boolean;
  nickname: string | null;
  /** 첫 후기 전 이름 확인이 필요한가 — 이메일 앞부분이 닉네임으로 들어간 계정이면 «먼저 정하기» */
  nicknameNeedsConfirm: boolean;
  nicknameLooksLikeEmail: boolean;
  provider: "google" | "kakao" | "email" | null;
  hasProviderPhoto: boolean;
  avatar: { kind: "char"; id: string } | { kind: "url"; url: string } | null;
  avatarKind: "char" | "upload" | "provider" | null;
  avatarHiddenReason: HiddenReason | null;
  myReview: null | {
    id: string;
    body: string;
    downside: string | null;
    rating: number | null;
    status: "public" | "hidden";
    hiddenReason: HiddenReason | null;
    reviewRequested: boolean;
  };
  myQuestions: { id: string; body: string; status: "public" | "hidden"; hiddenReason: HiddenReason | null; reviewRequested: boolean }[];
  myHelpful: string[];
};

const EMPTY_STATE: MyFeedbackState = {
  available: false, isLoggedIn: false, nickname: null, nicknameNeedsConfirm: false, nicknameLooksLikeEmail: false,
  provider: null, hasProviderPhoto: false, avatar: null, avatarKind: null, avatarHiddenReason: null,
  myReview: null, myQuestions: [], myHelpful: [],
};

export async function readMyFeedbackState(user: User | null, locale: SolverFeedbackLocale): Promise<MyFeedbackState> {
  const db = createAdminClient();
  if (!db) return EMPTY_STATE;
  if (!user) return { ...EMPTY_STATE, available: true };
  try {
    const [profRes, rpRes, mineRes, helpfulRes] = await Promise.all([
      db.from("profiles").select("nickname, avatar_url").eq("id", user.id).maybeSingle(),
      db.from("solver_review_profiles").select("*").eq("user_id", user.id).maybeSingle(),
      db.from("solver_feedback").select("id, kind, body, downside, rating, status, hidden_reason, review_requested_at")
        .eq("user_id", user.id).eq("locale", locale).order("created_at", { ascending: false }).limit(50),
      db.from("solver_feedback_helpful").select("feedback_id").eq("user_id", user.id).limit(1000),
    ]);
    if (rpRes.error || mineRes.error || helpfulRes.error) return EMPTY_STATE;
    const nickname = (profRes.data as any)?.nickname ?? null;
    const email = user.email ?? "";
    const emailLocal = email.split("@")[0];
    const looksLikeEmail = !!nickname && !!emailLocal && nickname === emailLocal;
    const rp: any = rpRes.data;
    const providerPhoto = (profRes.data as any)?.avatar_url as string | null;
    let avatar: MyFeedbackState["avatar"] = null;
    if (rp && !rp.avatar_hidden_reason) {
      if (rp.avatar_kind === "char" && rp.avatar_char) avatar = { kind: "char", id: rp.avatar_char };
      else if (rp.avatar_kind === "upload" && rp.avatar_path) avatar = { kind: "url", url: storagePublicUrl(rp.avatar_path) };
      else if (rp.avatar_kind === "provider" && providerPhoto && /^https:\/\//.test(providerPhoto)) avatar = { kind: "url", url: providerPhoto };
    }
    const rows: any[] = mineRes.data ?? [];
    const review = rows.find((r) => r.kind === "review");
    return {
      available: true,
      isLoggedIn: true,
      nickname,
      nicknameNeedsConfirm: !rp?.nickname_confirmed_at,
      nicknameLooksLikeEmail: looksLikeEmail,
      provider: providerOf(user),
      hasProviderPhoto: !!providerPhoto && /^https:\/\//.test(providerPhoto),
      avatar,
      avatarKind: rp?.avatar_kind ?? null,
      avatarHiddenReason: rp?.avatar_hidden_reason ?? null,
      myReview: review
        ? {
            id: review.id, body: review.body, downside: review.downside, rating: review.rating,
            status: review.status, hiddenReason: review.hidden_reason, reviewRequested: !!review.review_requested_at,
          }
        : null,
      myQuestions: rows.filter((r) => r.kind === "question").map((r) => ({
        id: r.id, body: r.body, status: r.status, hiddenReason: r.hidden_reason, reviewRequested: !!r.review_requested_at,
      })),
      myHelpful: (helpfulRes.data ?? []).map((h: any) => h.feedback_id),
    };
  } catch {
    return EMPTY_STATE;
  }
}

// ── 쓰기 ───────────────────────────────────────────────────────

export type FeedbackInput = {
  locale: string;
  kind: string;
  body: string;
  downside?: string | null;
  rating?: number | null;
  /** 이름 확인 — 첫 후기 때 «○○ 으로 남깁니다»를 본 뒤 보낸 값(바꿨으면 새 이름) */
  nickname?: string | null;
  /** 받기는 하지만 쓰지 않는다 — 사용 기록은 서버가 trainer_attempts 로 판정한다 */
  hasUsage?: boolean;
};

type Validated = {
  locale: SolverFeedbackLocale;
  kind: FeedbackKind;
  body: string;
  downside: string | null;
  rating: number | null;
};

export function validateFeedbackInput(input: FeedbackInput): { value?: Validated; error?: FeedbackError } {
  if (!input || typeof input !== "object") return { error: "bad_input" };
  if (!isSolverFeedbackLocale(input.locale)) return { error: "locale" };
  const kind = input.kind === "question" ? "question" : input.kind === "review" ? "review" : null;
  if (!kind) return { error: "bad_input" };
  const body = String(input.body ?? "").replace(/\r\n/g, "\n").trim();
  const rating = input.rating ?? null;
  if (rating !== null && !(Number.isInteger(rating) && rating >= 1 && rating <= 5)) return { error: "rating" };
  // 글 없는 별점은 받지 않는다(봇·스팸 구별 · 설계 §2-1)
  if (!body && rating !== null) return { error: "rating_needs_body" };
  const len = charLen(body);
  if (len < FEEDBACK_BODY_MIN) return { error: "body_short" };
  if (len > FEEDBACK_BODY_MAX) return { error: "body_long" };
  if (LINK_PATTERN.test(body)) return { error: "link" };
  const downsideRaw = kind === "review" ? String(input.downside ?? "").replace(/\r\n/g, "\n").trim() : "";
  if (charLen(downsideRaw) > FEEDBACK_DOWNSIDE_MAX) return { error: "downside_long" };
  if (downsideRaw && LINK_PATTERN.test(downsideRaw)) return { error: "link" };
  return {
    value: {
      locale: input.locale,
      kind,
      body,
      downside: downsideRaw || null,
      rating: kind === "review" ? rating : null,
    },
  };
}

function nicknameError(p: ReturnType<typeof nicknameProblem>): FeedbackError | null {
  return p === "short" ? "nickname_short" : p === "long" ? "nickname_long" : p === "link" ? "nickname_link"
    : p === "impersonation" ? "nickname_impersonation" : null;
}

/** 닉네임 바꾸기 — profiles.nickname(커뮤니티와 같은 값) · 같은 검사 + 사칭 금지어 */
export async function setNickname(db: SupabaseClient, userId: string, raw: string): Promise<FeedbackResult> {
  const err = nicknameError(nicknameProblem(raw));
  if (err) return { ok: false, error: err };
  const nickname = normalizeNickname(raw);
  const { error } = await db.from("profiles").update({ nickname }).eq("id", userId);
  if (error) return { ok: false, error: "unavailable" };
  return { ok: true };
}

async function confirmNickname(db: SupabaseClient, userId: string): Promise<boolean> {
  const { error } = await db.from("solver_review_profiles").upsert(
    { user_id: userId, nickname_confirmed_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    { onConflict: "user_id" },
  );
  return !error;
}

/**
 * 후기·질문 저장 — 랜딩(서버 액션)·앱(API) 공용.
 * 후기는 1인 1언어 1개: 이미 있으면 수정. 질문은 새 행(속도 제한만).
 */
export async function saveFeedback(args: {
  user: User;
  input: FeedbackInput;
  source: "app" | "landing";
  device: Device | null;
}): Promise<FeedbackResult & { id?: string }> {
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  const { value, error: vErr } = validateFeedbackInput(args.input);
  if (!value) return { ok: false, error: vErr };
  const { user } = args;

  try {
    const [rpRes, profRes] = await Promise.all([
      db.from("solver_review_profiles").select("nickname_confirmed_at").eq("user_id", user.id).maybeSingle(),
      db.from("profiles").select("nickname").eq("id", user.id).maybeSingle(),
    ]);
    if (rpRes.error || profRes.error || !profRes.data) return { ok: false, error: "unavailable" };

    // 첫 후기 때 이름 확인(설계 §3-1) — 확인 전이면 폼이 보낸 이름으로 확정한다(같은 이름이면 그대로).
    if (!(rpRes.data as any)?.nickname_confirmed_at) {
      if (typeof args.input.nickname !== "string") return { ok: false, error: "nickname_confirm" };
      const wanted = normalizeNickname(args.input.nickname);
      const current = String((profRes.data as any).nickname ?? "");
      const emailLocal = (user.email ?? "").split("@")[0];
      // 이메일 앞부분이 그대로 닉네임인 계정은 «먼저 이름을 정하게» — 같은 값으로는 확정하지 않는다.
      if (emailLocal && wanted === emailLocal && current === emailLocal) return { ok: false, error: "nickname_confirm" };
      if (wanted !== current) {
        const r = await setNickname(db, user.id, wanted);
        if (!r.ok) return r;
      } else {
        const err = nicknameError(nicknameProblem(wanted));
        if (err) return { ok: false, error: err };
      }
      if (!(await confirmNickname(db, user.id))) return { ok: false, error: "unavailable" };
    } else if (typeof args.input.nickname === "string") {
      // 확인을 마친 계정도 같은 POST 의 nickname 으로 이름을 바꿀 수 있다(앱 [바꾸기] · S-035 ⓓ · 별도 API 없음).
      const wanted = normalizeNickname(args.input.nickname);
      if (wanted && wanted !== String((profRes.data as any).nickname ?? "")) {
        const r = await setNickname(db, user.id, wanted);
        if (!r.ok) return r;
        for (const l of SOLVER_FEEDBACK_LOCALES) if (l !== value.locale) invalidateSolverFeedback(l);
      }
    }

    // «솔버 사용 기록 있음» = 이 계정의 트레이너 기록(trainer_attempts)이 하나라도 있는가 — 서버가 직접 본다(클라이언트 주장 안 믿음).
    const { count: usageCount } = await db.from("trainer_attempts").select("id", { count: "exact", head: true }).eq("user_id", user.id).limit(1);
    const hasUsage = (usageCount ?? 0) > 0;

    // 속도 제한
    const since = new Date(Date.now() - 10 * 60_000).toISOString();
    const { count, error: cErr } = await db.from("solver_feedback").select("*", { count: "exact", head: true })
      .eq("user_id", user.id).eq("kind", value.kind).gte("updated_at", since);
    if (cErr) return { ok: false, error: "unavailable" };
    if ((count ?? 0) >= (value.kind === "question" ? QUESTIONS_PER_10MIN : SAVES_PER_10MIN)) return { ok: false, error: "rate" };

    const now = new Date().toISOString();
    const base = {
      body: value.body,
      downside: value.downside,
      rating: value.rating,
      device: args.device,
      auth_provider: providerOf(user),
      updated_at: now,
    };

    if (value.kind === "review") {
      const { data: existing, error: eErr } = await db.from("solver_feedback").select("id, has_usage")
        .eq("user_id", user.id).eq("locale", value.locale).eq("kind", "review").maybeSingle();
      if (eErr) return { ok: false, error: "unavailable" };
      if (existing) {
        // 수정 — 숨김 상태는 그대로 둔다(고쳐서 숨김을 푸는 길을 만들지 않는다 · 재검토 요청으로만)
        const { error } = await db.from("solver_feedback")
          .update({ ...base, has_usage: (existing as any).has_usage || hasUsage })
          .eq("id", (existing as any).id).eq("user_id", user.id);
        if (error) return { ok: false, error: error.code === "23514" ? "link" : "unavailable" };
        invalidateSolverFeedback(value.locale);
        return { ok: true, id: (existing as any).id };
      }
    }

    const { data, error } = await db.from("solver_feedback").insert({
      ...base,
      user_id: user.id,
      locale: value.locale,
      kind: value.kind,
      source: args.source,
      has_usage: hasUsage,
    }).select("id").single();
    if (error) {
      if (error.code === "23505") return { ok: false, error: "rate" };
      if (error.code === "23514") return { ok: false, error: "link" };
      return { ok: false, error: "unavailable" };
    }
    invalidateSolverFeedback(value.locale);
    return { ok: true, id: (data as any).id };
  } catch {
    return { ok: false, error: "unavailable" };
  }
}

export async function deleteFeedback(user: User, id: string): Promise<FeedbackResult> {
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  if (typeof id !== "string" || !/^[0-9a-f-]{36}$/i.test(id)) return { ok: false, error: "not_found" };
  const { data, error } = await db.from("solver_feedback").delete().eq("id", id).eq("user_id", user.id).select("locale");
  if (error) return { ok: false, error: "unavailable" };
  const row: any = (data ?? [])[0];
  if (!row) return { ok: false, error: "not_found" };
  if (isSolverFeedbackLocale(row.locale)) invalidateSolverFeedback(row.locale);
  return { ok: true };
}

/** 숨김 뒤 «다시 검토 요청» — 1회 */
export async function requestReReview(user: User, id: string): Promise<FeedbackResult> {
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  if (typeof id !== "string" || !/^[0-9a-f-]{36}$/i.test(id)) return { ok: false, error: "not_found" };
  const { data, error } = await db.from("solver_feedback").select("status, review_requested_at")
    .eq("id", id).eq("user_id", user.id).maybeSingle();
  if (error) return { ok: false, error: "unavailable" };
  if (!data || (data as any).status !== "hidden") return { ok: false, error: "not_found" };
  if ((data as any).review_requested_at) return { ok: false, error: "already_requested" };
  const { error: uErr } = await db.from("solver_feedback").update({ review_requested_at: new Date().toISOString() })
    .eq("id", id).eq("user_id", user.id);
  return uErr ? { ok: false, error: "unavailable" } : { ok: true };
}

/** 도움됐어요 — 로그인 1인 1표 · 내 글엔 못 누른다 · 운영자는 누르지 않는다(설계 §3-2) */
export async function toggleHelpful(user: User, id: string, want: boolean): Promise<FeedbackResult> {
  if (isAdminEmail(user.email)) return { ok: false, error: "not_found" };
  const db = createAdminClient();
  if (!db) return { ok: false, error: "unavailable" };
  if (typeof id !== "string" || !/^[0-9a-f-]{36}$/i.test(id)) return { ok: false, error: "not_found" };
  const { data, error } = await db.from("solver_feedback").select("user_id, locale, status").eq("id", id).maybeSingle();
  if (error) return { ok: false, error: "unavailable" };
  if (!data || (data as any).status !== "public" || (data as any).user_id === user.id) return { ok: false, error: "not_found" };
  const q = want
    ? db.from("solver_feedback_helpful").upsert({ feedback_id: id, user_id: user.id }, { onConflict: "feedback_id,user_id", ignoreDuplicates: true })
    : db.from("solver_feedback_helpful").delete().eq("feedback_id", id).eq("user_id", user.id);
  const { error: wErr } = await q;
  if (wErr) return { ok: false, error: "unavailable" };
  if (isSolverFeedbackLocale((data as any).locale)) invalidateSolverFeedback((data as any).locale);
  return { ok: true };
}
