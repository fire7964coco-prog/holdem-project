"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";
import { authCallbackUrl, loginHref } from "@/lib/auth-navigation";
import {
  AVATAR_CHARACTERS, AVATAR_SOURCE_MAX_BYTES, FEEDBACK_BODY_MAX, FEEDBACK_DOWNSIDE_MAX, LINK_PATTERN,
  SOLVER_REVIEWS_ANCHOR, solverLandingPath, type SolverFeedbackLocale,
} from "@/lib/solver-feedback-config";
import { SOLVER_REVIEWS_I18N, type SolverReviewsDict } from "@/lib/solver-reviews-i18n";
import type { MyFeedbackState } from "@/lib/solver-feedback-server";
import {
  changeSolverNickname, chooseAvatarCharacter, chooseProviderAvatar, clearAvatar, deleteMySolverFeedback,
  getMySolverFeedback, requestSolverFeedbackReReview, submitSolverFeedback, toggleSolverFeedbackHelpful, uploadAvatar,
} from "@/app/solver-feedback/actions";
import ReviewAvatar from "./review-avatar";

/**
 * 솔버 «써 본 사람들» — 클라이언트 부분 (2026-10-04 · 설계 docs/solver-review-design.md §2-1)
 * - 칸은 하나(본문) · 별점 탭 한 번(다시 누르면 해제) · 아쉬운 점은 접힘
 * - 로그인은 마지막에: [남기기] 때 로그인 안 돼 있으면 구글(·카카오 = ko만) → 돌아오면 초안 그대로 자동 등록
 *   (단 첫 후기면 이름 확인을 먼저 보인다 — 구글 실명일 수 있다 · 설계 §3-1)
 * - 링크는 입력 중 실시간 «링크는 넣을 수 없어요»
 */

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-bold border border-primary/40 text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 whitespace-nowrap";
const LINK_BTN = "text-xs font-semibold text-primary underline-offset-2 hover:underline disabled:opacity-50";

const draftKey = (locale: string) => `hm-solver-feedback-draft:${locale}`;
type Draft = { kind: "review" | "question"; body: string; downside: string; rating: number | null };

function readDraft(locale: string): Draft | null {
  try {
    const raw = localStorage.getItem(draftKey(locale));
    if (!raw) return null;
    const d = JSON.parse(raw);
    return typeof d?.body === "string" ? d : null;
  } catch {
    return null;
  }
}
function writeDraft(locale: string, d: Draft | null) {
  try {
    if (d) localStorage.setItem(draftKey(locale), JSON.stringify(d));
    else localStorage.removeItem(draftKey(locale));
  } catch {
    // 저장소가 막혀 있어도 폼은 그대로 돈다
  }
}

// ── 공유 상태(내 상태를 한 번만 묻는다) ─────────────────────────

type Ctx = {
  locale: SolverFeedbackLocale;
  t: SolverReviewsDict;
  me: MyFeedbackState | null;
  refresh: () => Promise<MyFeedbackState | null>;
};
const ReviewsCtx = createContext<Ctx | null>(null);

export function SolverReviewsShell({ locale, children }: { locale: SolverFeedbackLocale; children: ReactNode }) {
  const t = SOLVER_REVIEWS_I18N[locale];
  const [me, setMe] = useState<MyFeedbackState | null>(null);
  const refresh = useCallback(async () => {
    try {
      const s = await getMySolverFeedback(locale);
      setMe(s);
      return s;
    } catch {
      return null;
    }
  }, [locale]);
  useEffect(() => { void refresh(); }, [refresh]);
  const value = useMemo(() => ({ locale, t, me, refresh }), [locale, t, me, refresh]);
  return <ReviewsCtx.Provider value={value}>{children}</ReviewsCtx.Provider>;
}

function useReviews() {
  const c = useContext(ReviewsCtx);
  if (!c) throw new Error("SolverReviewsShell missing");
  return c;
}

// ── 도움됐어요 ─────────────────────────────────────────────────

export function HelpfulButton({ id, initial }: { id: string; initial: number }) {
  const { t, me } = useReviews();
  const voted = !!me?.myHelpful.includes(id);
  const [local, setLocal] = useState<{ on: boolean; count: number } | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const on = local?.on ?? voted;
  const count = local?.count ?? initial;
  const isMine = me?.myReview?.id === id;

  async function click() {
    if (!me?.isLoggedIn) { setHint(t.errors.login); return; }
    const want = !on;
    setLocal({ on: want, count: Math.max(0, count + (want ? 1 : -1)) });
    const r = await toggleSolverFeedbackHelpful(id, want);
    if (!r.ok) { setLocal({ on, count }); setHint(t.errors[r.error ?? "unavailable"] ?? t.errors.unavailable); }
  }

  if (isMine) {
    return <p className="mt-2 text-xs text-muted-foreground">👍 {t.helpful} {count}</p>;
  }
  return (
    <p className="mt-2 flex items-center gap-2">
      <button type="button" onClick={click} aria-pressed={on}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors min-h-[32px] ${on ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
        👍 {t.helpful} {count}
      </button>
      {hint && <span className="text-[11px] text-muted-foreground">{hint}</span>}
    </p>
  );
}

// ── 쓰기 칸 ────────────────────────────────────────────────────

export function SolverFeedbackForm({ locale, empty }: { locale: SolverFeedbackLocale; empty: boolean }) {
  const { t, me, refresh } = useReviews();
  const [kind, setKind] = useState<"review" | "question">("review");
  const [body, setBody] = useState("");
  const [downside, setDownside] = useState("");
  const [showDownside, setShowDownside] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [needLogin, setNeedLogin] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showAvatar, setShowAvatar] = useState(false);
  const [loadedMine, setLoadedMine] = useState<string | null>(null);
  const autoTried = useRef(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const landing = solverLandingPath(locale);
  const returnPath = `${landing}?fb=1#${SOLVER_REVIEWS_ANCHOR}`;
  const linkInBody = LINK_PATTERN.test(body) || LINK_PATTERN.test(downside);
  const editing = kind === "review" && !!me?.myReview;
  const errText = (code?: string) => t.errors[code ?? "unavailable"] ?? t.errors.unavailable;

  // 내 후기가 있으면 «수정 화면»으로(1인 1언어 1후기)
  useEffect(() => {
    const r = me?.myReview;
    if (r && loadedMine !== r.id && kind === "review") {
      setBody(r.body);
      setDownside(r.downside ?? "");
      setShowDownside(!!r.downside);
      setRating(r.rating);
      setLoadedMine(r.id);
    }
  }, [me?.myReview, loadedMine, kind]);

  // 이메일 앞부분이 이름인 계정 → 이름 정하기를 먼저 연다
  useEffect(() => {
    if (me?.isLoggedIn && me.nicknameNeedsConfirm && me.nicknameLooksLikeEmail) {
      setEditingName(true);
      setNameInput("");
    }
  }, [me?.isLoggedIn, me?.nicknameNeedsConfirm, me?.nicknameLooksLikeEmail]);

  // 앵커로 들어왔으면 바로 커서
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === `#${SOLVER_REVIEWS_ANCHOR}`) {
      textRef.current?.focus({ preventScroll: true });
    }
  }, []);

  const doSubmit = useCallback(async (d: Draft, nickname: string | null) => {
    setBusy(true);
    setErr(null);
    setMsg(null);
    try {
      const r = await submitSolverFeedback({ locale, kind: d.kind, body: d.body, downside: d.downside || null, rating: d.rating, nickname });
      if (r.ok) {
        writeDraft(locale, null);
        setMsg(t.saved);
        if (d.kind === "question") setBody("");
        await refresh();
      } else if (r.error === "login") {
        writeDraft(locale, d);
        setNeedLogin(true);
      } else if (r.error === "nickname_confirm") {
        setEditingName(true);
        setErr(errText(r.error));
      } else {
        setErr(errText(r.error));
      }
    } catch {
      setErr(t.errors.unavailable);
    } finally {
      setBusy(false);
    }
  }, [locale, refresh, t]); // eslint-disable-line react-hooks/exhaustive-deps

  // 로그인하고 돌아왔다 → 초안 복원 · 이름 확인이 끝난 계정이면 그대로 등록
  useEffect(() => {
    if (!me || autoTried.current) return;
    const draft = readDraft(locale);
    if (!draft) return;
    autoTried.current = true;
    setKind(draft.kind);
    setBody(draft.body);
    setDownside(draft.downside);
    setShowDownside(!!draft.downside);
    setRating(draft.rating);
    const fromLogin = new URLSearchParams(window.location.search).get("fb") === "1";
    if (me.isLoggedIn && fromLogin && !me.nicknameNeedsConfirm) void doSubmit(draft, null);
  }, [me, locale, doSubmit]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    const trimmed = body.trim();
    if (!trimmed) { setErr(rating !== null ? t.errors.rating_needs_body : t.errors.body_short); return; }
    if (linkInBody) { setErr(t.errors.link); return; }
    const d: Draft = { kind, body: trimmed, downside: kind === "review" ? downside.trim() : "", rating: kind === "review" ? rating : null };
    if (!me?.isLoggedIn) { writeDraft(locale, d); setNeedLogin(true); return; }
    let nickname: string | null = null;
    if (me.nicknameNeedsConfirm) {
      nickname = editingName ? nameInput.trim() : me.nickname ?? "";
      if (!nickname) { setEditingName(true); setErr(t.errors.nickname_confirm); return; }
    }
    await doSubmit(d, nickname);
    if (editingName) setEditingName(false);
  }

  async function oauth(provider: "google" | "kakao") {
    setBusy(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: authCallbackUrl(window.location.origin, returnPath),
          scopes: provider === "kakao" ? "profile_nickname account_email" : undefined,
        },
      });
      if (error) { setErr(t.errors.unavailable); setBusy(false); }
    } catch {
      setErr(t.errors.unavailable);
      setBusy(false);
    }
  }

  async function saveName() {
    setBusy(true);
    setErr(null);
    const r = await changeSolverNickname(nameInput);
    setBusy(false);
    if (!r.ok) { setErr(errText(r.error)); return; }
    setEditingName(false);
    await refresh();
  }

  async function onDelete(id: string) {
    if (!window.confirm(t.confirmDelete)) return;
    setBusy(true);
    const r = await deleteMySolverFeedback(id);
    setBusy(false);
    if (!r.ok) { setErr(errText(r.error)); return; }
    if (me?.myReview?.id === id) { setBody(""); setDownside(""); setRating(null); setLoadedMine(null); }
    await refresh();
  }

  async function onReReview(id: string) {
    setBusy(true);
    const r = await requestSolverFeedbackReReview(id);
    setBusy(false);
    if (!r.ok) setErr(errText(r.error));
    await refresh();
  }

  const myHidden = [
    ...(me?.myReview && me.myReview.status === "hidden" ? [{ ...me.myReview, kind: "review" as const }] : []),
    ...(me?.myQuestions ?? []).filter((q) => q.status === "hidden").map((q) => ({ ...q, kind: "question" as const })),
  ];

  return (
    <div className="mt-4 rounded-2xl border border-primary/30 bg-card p-4 sm:p-5">
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className="font-bold">{t.formTitle}</p>
          <div className="inline-flex rounded-lg border border-border p-0.5 text-xs font-bold" role="tablist">
            {(["review", "question"] as const).map((k) => (
              <button key={k} type="button" role="tab" aria-selected={kind === k}
                onClick={() => { setKind(k); setErr(null); setMsg(null); if (k === "question") { setBody(""); } else { setLoadedMine(null); } }}
                className={`px-3 py-1.5 rounded-md min-h-[36px] ${kind === k ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                {k === "review" ? t.tabReview : t.tabQuestion}
              </button>
            ))}
          </div>
        </div>

        {kind === "review" && (
          <div className="mt-3 flex items-center gap-1" role="radiogroup" aria-label={t.ratingLabel}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" role="radio" aria-checked={rating === n} aria-label={`${n}/5`}
                onClick={() => setRating(rating === n ? null : n)}
                className={`w-11 h-11 text-2xl leading-none rounded-lg transition-colors ${rating !== null && n <= rating ? "text-primary" : "text-muted-foreground/40 hover:text-primary/60"}`}>
                ★
              </button>
            ))}
          </div>
        )}

        <textarea ref={textRef} value={body} onChange={(e) => { setBody(e.target.value); setErr(null); setMsg(null); }} maxLength={FEEDBACK_BODY_MAX + 50}
          placeholder={kind === "review" ? t.placeholderReview : t.placeholderQuestion} rows={3}
          className="mt-3 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />

        {kind === "review" && (showDownside ? (
          <textarea value={downside} onChange={(e) => setDownside(e.target.value)} maxLength={FEEDBACK_DOWNSIDE_MAX + 20}
            placeholder={t.downsidePlaceholder} rows={2}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        ) : (
          <button type="button" className={`${LINK_BTN} mt-1`} onClick={() => setShowDownside(true)}>{t.downsideToggle}</button>
        ))}

        {linkInBody && <p className="mt-1 text-xs font-semibold text-red-600" role="alert">{t.linkWarn}</p>}

        {me?.isLoggedIn && (
          <div className="mt-3 text-xs text-muted-foreground">
            {editingName ? (
              <div className="flex flex-wrap items-center gap-2">
                {me.nicknameLooksLikeEmail && me.nicknameNeedsConfirm && <p className="w-full text-amber-700 dark:text-amber-300">{t.nicknameEmailWarn}</p>}
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} maxLength={24} autoComplete="nickname"
                  className="flex-1 min-w-[140px] rounded-lg border border-border bg-background px-2.5 py-2 text-base sm:text-sm" />
                <button type="button" className={BTN_GHOST} disabled={busy || !nameInput.trim()} onClick={saveName}>{t.nicknameSave}</button>
                {!(me.nicknameLooksLikeEmail && me.nicknameNeedsConfirm) && (
                  <button type="button" className={LINK_BTN} onClick={() => setEditingName(false)}>{t.nicknameCancel}</button>
                )}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <ReviewAvatar nickname={me.nickname ?? "?"} avatar={me.avatar} size={28} />
                <span className={me.nicknameNeedsConfirm ? "font-semibold text-foreground" : ""}>{t.postingAs(me.nickname ?? "")}</span>
                <button type="button" className={LINK_BTN} onClick={() => { setNameInput(me.nickname ?? ""); setEditingName(true); }}>[{t.change}]</button>
                <button type="button" className={LINK_BTN} onClick={() => setShowAvatar((v) => !v)}>{t.avatarTitle}</button>
              </div>
            )}
            {me.avatarHiddenReason && <p className="mt-1 text-amber-700 dark:text-amber-300">{t.avatarHidden(t.reasons[me.avatarHiddenReason])}</p>}
            {showAvatar && <AvatarPicker onDone={() => setShowAvatar(false)} onError={(c) => setErr(errText(c))} />}
          </div>
        )}

        <div className="mt-3 flex items-center justify-end gap-3">
          {msg && <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300" role="status">{msg}</span>}
          <button type="submit" className={BTN_PRIMARY} disabled={busy || linkInBody}>{editing ? t.submitEdit : t.submit}</button>
        </div>
        {err && <p className="mt-2 text-xs font-semibold text-red-600" role="alert">{err}</p>}
      </form>

      {needLogin && !me?.isLoggedIn && (
        <div className="mt-3 rounded-xl border border-border p-3">
          <p className="text-sm font-semibold">{t.loginTitle}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" className={BTN_GHOST} disabled={busy} onClick={() => oauth("google")}>{t.loginGoogle}</button>
            {locale === "ko" && <button type="button" className={BTN_GHOST} disabled={busy} onClick={() => oauth("kakao")}>{t.loginKakao}</button>}
            <a className={LINK_BTN + " self-center"} href={loginHref(returnPath)}>{t.loginEmail}</a>
          </div>
        </div>
      )}

      {me?.myReview && (
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold">{t.mine}</span>
          <button type="button" className={LINK_BTN} onClick={() => { setKind("review"); setLoadedMine(null); textRef.current?.focus(); }}>{t.edit}</button>
          <button type="button" className={LINK_BTN} disabled={busy} onClick={() => onDelete(me.myReview!.id)}>{t.del}</button>
        </div>
      )}

      {myHidden.map((h) => (
        <div key={h.id} className="mt-2 rounded-lg bg-amber-500/10 px-3 py-2 text-xs">
          <p className="font-semibold">{t.hiddenMine(h.hiddenReason ? t.reasons[h.hiddenReason] : "")}</p>
          <p className="mt-0.5 text-muted-foreground line-clamp-2">{h.body}</p>
          {h.reviewRequested
            ? <p className="mt-1 text-muted-foreground">{t.requested}</p>
            : <button type="button" className={`${LINK_BTN} mt-1`} disabled={busy} onClick={() => onReReview(h.id)}>{t.requestReview}</button>}
        </div>
      ))}

      {(me?.myQuestions ?? []).filter((q) => q.status === "public").length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-3 text-xs text-muted-foreground">
          {(me?.myQuestions ?? []).filter((q) => q.status === "public").map((q) => (
            <span key={q.id} className="inline-flex items-center gap-1">
              <span className="line-clamp-1 max-w-[220px]">{t.tabQuestion}: {q.body}</span>
              <button type="button" className={LINK_BTN} disabled={busy} onClick={() => onDelete(q.id)}>{t.del}</button>
            </span>
          ))}
        </div>
      )}

      {empty && !me?.myReview && <p className="mt-3 text-sm text-muted-foreground">{t.firstReview}</p>}
    </div>
  );
}

// ── 프로필 이미지 고르기 ────────────────────────────────────────

async function shrinkImage(file: File): Promise<Blob> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = url;
    });
    const scale = Math.min(1, 512 / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
    return await new Promise<Blob>((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error("blob"))), "image/jpeg", 0.9));
  } finally {
    URL.revokeObjectURL(url);
  }
}

function AvatarPicker({ onDone, onError }: { onDone: () => void; onError: (code?: string) => void }) {
  const { t, me, refresh } = useReviews();
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function run(fn: () => Promise<{ ok: boolean; error?: string }>) {
    setBusy(true);
    try {
      const r = await fn();
      if (!r.ok) onError(r.error);
      else { await refresh(); onDone(); }
    } catch {
      onError("unavailable");
    } finally {
      setBusy(false);
    }
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (!/^image\//.test(f.type)) { onError("image_type"); return; }
    if (f.size > AVATAR_SOURCE_MAX_BYTES) { onError("image_size"); return; }
    await run(async () => {
      const blob = await shrinkImage(f);
      const fd = new FormData();
      fd.append("file", blob, "avatar.jpg");
      return uploadAvatar(fd);
    });
  }

  const sel = "ring-2 ring-primary";
  return (
    <div className="mt-2 rounded-xl border border-border p-3">
      <p className="font-semibold text-foreground">{t.avatarCharacter}</p>
      <div className="mt-2 grid grid-cols-6 gap-2 max-w-[340px]">
        {AVATAR_CHARACTERS.map((id) => (
          <button key={id} type="button" disabled={busy} aria-label={id} onClick={() => run(() => chooseAvatarCharacter(id))}
            className={`rounded-full ${me?.avatarKind === "char" && me.avatar?.kind === "char" && me.avatar.id === id ? sel : ""}`}>
            <ReviewAvatar nickname="" avatar={{ kind: "char", id }} size={44} />
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className={BTN_GHOST} disabled={busy} onClick={() => run(() => clearAvatar())}>{t.avatarInitial}</button>
        <button type="button" className={BTN_GHOST} disabled={busy} onClick={() => fileRef.current?.click()}>{t.avatarUpload}</button>
        {me?.hasProviderPhoto && (
          <button type="button" className={BTN_GHOST} disabled={busy} onClick={() => run(() => chooseProviderAvatar())}>{t.avatarProvider}</button>
        )}
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="hidden" onChange={onFile} />
      </div>
    </div>
  );
}
