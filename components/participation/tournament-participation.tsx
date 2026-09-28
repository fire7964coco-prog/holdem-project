"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { loginHref } from "@/lib/auth-navigation";
import {
  EVENT_KIND_OPTIONS, MIN_VISIBLE_COUNT, REVIEW_BODY_MAX, REVIEW_BODY_MIN, REVIEW_EVENT, RESULT_OPTIONS,
  LINK_PATTERN, koMonthDay, phaseOf, type Phase,
} from "@/lib/participation-config";
import {
  deleteMyReview, getTournamentParticipation, submitReview, toggleAttendance,
  type ReviewView, type TournamentParticipation,
} from "@/app/participation/actions";

/**
 * 대회 가이드 «참가 예정 → 후기» (2026-09-28 · 설계 docs/participation-event-redesign-design.md §2)
 *
 * - 숫자·후기는 브라우저에서 불러온다(정적 HTML에 넣지 않는다 = 색인 보류 결정).
 * - 🔴 AggregateRating·Review 스키마를 만들지 않는다. 평균 별점은 화면에만, 5개 이상일 때만.
 * - DB를 못 읽으면(available:false) 바는 날짜만 보여 주고 후기 섹션은 그리지 않는다.
 */

export type ParticipationProps = {
  tournamentId: string;
  label: string;
  slug: string;
  /** 서버가 lib/tournaments.ts에서 읽어 넘긴다 — DB를 못 읽을 때의 기본 표시용 */
  startDate: string;
  endDate: string;
};

export const REVIEWS_ANCHOR = "participant-reviews";

const kindLabel = (v: string | null) => EVENT_KIND_OPTIONS.find((o) => o.value === v)?.label ?? null;
const resultLabel = (v: string | null) => RESULT_OPTIONS.find((o) => o.value === v)?.label ?? null;
const charLen = (s: string) => [...s].length;

/** p 가 없으면(파일럿 대상이 아닌 대회 글) 아무것도 불러오지 않는다 — 훅은 조건 없이 불러야 해서 선택 인자로 받는다. */
export function useTournamentParticipation(p: ParticipationProps | undefined) {
  const [data, setData] = useState<TournamentParticipation | null>(null);
  const tid = p?.tournamentId;

  const reload = useCallback(async () => {
    if (!tid) return;
    try {
      setData(await getTournamentParticipation(tid));
    } catch {
      setData({ available: false });
    }
  }, [tid]);

  useEffect(() => { reload(); }, [reload]);

  // 비로그인으로 [나도 참가]를 눌러 로그인하고 돌아온 경우(?attend=1) — 한 번만 자동 반영하고 주소에서 지운다.
  useEffect(() => {
    if (!tid || !data || !data.available) return;
    const url = new URL(window.location.href);
    if (url.searchParams.get("attend") !== "1") return;
    url.searchParams.delete("attend");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    if (data.isLoggedIn && !data.iAttend && data.phase !== "after") {
      toggleAttendance(tid, true).then((r) => { if (r.ok) reload(); });
    }
  }, [data, tid, reload]);

  // 화면 표시 단계: DB를 못 읽어도 날짜로는 알 수 있다.
  const phase: Phase | null = data && data.available ? data.phase : p ? phaseOf(p.startDate, p.endDate, new Date()) : null;
  return { data, reload, phase };
}

function scrollToReviews(openForm = false) {
  const el = document.getElementById(REVIEWS_ANCHOR);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (openForm) window.dispatchEvent(new CustomEvent("hm-open-review-form"));
}

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg text-xs font-bold border border-primary/40 text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 whitespace-nowrap";

/** 한 줄 요약 바로 아래 바 — 대회 전 «참가 예정», 중 «진행 중», 후 «후기» */
export function ParticipationBar({ p, state }: { p: ParticipationProps; state: ReturnType<typeof useTournamentParticipation> }) {
  const { data, reload, phase } = state;
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const ready = data && data.available ? data : null;

  async function onToggle() {
    if (!ready || busy) return;
    setErr(null);
    setBusy(true);
    const r = await toggleAttendance(p.tournamentId, !ready.iAttend);
    if (!r.ok) setErr(r.error);
    await reload();
    setBusy(false);
  }

  const shell = "mb-8 min-h-[56px] px-4 py-3 rounded-2xl border border-primary/30 bg-card flex flex-wrap items-center gap-x-3 gap-y-2";

  if (!data) {
    return <div className={shell} aria-hidden="true"><span className="h-4 w-48 rounded bg-muted animate-pulse" /></div>;
  }

  const dateText = p.startDate === p.endDate ? koMonthDay(p.startDate) : `${koMonthDay(p.startDate)}~${koMonthDay(p.endDate)}`;

  if (!ready) {
    return (
      <div className={shell}>
        <p className="text-sm text-foreground font-semibold">📅 {dateText}</p>
        <p className="text-xs text-muted-foreground">대회가 끝나면 이 글에 참가자 후기를 모읍니다.</p>
      </div>
    );
  }

  if (phase === "after") {
    const many = ready.reviewCount >= MIN_VISIBLE_COUNT;
    return (
      <div className={shell}>
        <p className="text-sm font-semibold text-foreground flex-1 min-w-[180px]">
          {many ? <>⭐ 참가자 후기 <span className="text-primary">{ready.reviewCount}</span>개</> : <>⭐ 대회가 끝났습니다 · 첫 후기를 남겨 주세요</>}
          {ready.entryWindowOpen && (
            <span className="block text-xs font-medium text-muted-foreground mt-0.5">
              🎁 후기 이벤트 응모 중 · {koMonthDay(ready.entryDeadline)}까지
            </span>
          )}
        </p>
        <div className="flex gap-2">
          {many && <button type="button" className={BTN_GHOST} onClick={() => scrollToReviews(false)}>후기 보기</button>}
          <button type="button" className={BTN_PRIMARY} onClick={() => scrollToReviews(true)}>{ready.myReview ? "내 후기 보기" : "후기 쓰기"}</button>
        </div>
      </div>
    );
  }

  const many = ready.attendCount >= MIN_VISIBLE_COUNT;
  const lead = phase === "during"
    ? <>🔴 지금 진행 중{many && <> · 참가 예정 <span className="text-primary">{ready.attendCount}</span>명</>}</>
    : many ? <>🙋 참가 예정 <span className="text-primary">{ready.attendCount}</span>명</> : <>🙋 이 대회 가시나요?</>;
  const sub = phase === "during" ? "끝나면 이 글에 후기를 남겨 주세요." : `${dateText} · 참가 예정이라면 눌러 두세요.`;

  return (
    <div className={shell}>
      <p className="text-sm font-semibold text-foreground flex-1 min-w-[180px]">
        {lead}
        <span className="block text-xs font-medium text-muted-foreground mt-0.5">{sub}</span>
      </p>
      {ready.isLoggedIn ? (
        <button type="button" className={ready.iAttend ? BTN_GHOST : BTN_PRIMARY} onClick={onToggle} disabled={busy} aria-pressed={ready.iAttend}>
          {ready.iAttend ? "✓ 참가 예정 (취소)" : "나도 참가"}
        </button>
      ) : (
        <Link href={loginHref(`/blog/${p.slug}?attend=1`)} className={BTN_PRIMARY}>나도 참가</Link>
      )}
      {err && <p role="alert" className="basis-full text-xs text-destructive">{err}</p>}
    </div>
  );
}

function fmtDate(iso: string) {
  const d = new Date(new Date(iso).getTime() + 9 * 3600_000).toISOString().slice(0, 10);
  return d.replace(/-/g, ".");
}

function Chip({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
        active ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40"
      }`}>
      {children}
    </button>
  );
}

function ReviewCard({ r }: { r: ReviewView }) {
  const kind = kindLabel(r.eventKind);
  const res = resultLabel(r.result);
  return (
    <li className="p-4 rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <span className="text-sm font-bold text-foreground mr-1">{r.nickname}{r.isMine && <span className="text-xs text-muted-foreground font-medium"> (나)</span>}</span>
        {r.isBest && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-primary-foreground">베스트 후기</span>}
        {r.wasAttending && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-primary/40 text-primary">사전 참가 표시</span>}
        {r.isEventEntry && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-border text-muted-foreground">이벤트 응모 후기</span>}
        <span className="ml-auto text-[11px] text-muted-foreground">{fmtDate(r.createdAt)}</span>
      </div>
      {(kind || res || r.rating) && (
        <p className="text-xs text-muted-foreground mb-1.5">
          {[kind, res, r.rating ? `${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}` : null].filter(Boolean).join(" · ")}
        </p>
      )}
      <p className="text-sm text-foreground leading-relaxed whitespace-pre-line break-words">{r.body}</p>
    </li>
  );
}

/** 본문 바로 뒤 «참가자 후기» — 대회가 끝난 뒤에만 그린다 */
export function ReviewsSection({ p, state }: { p: ParticipationProps; state: ReturnType<typeof useTournamentParticipation> }) {
  const { data, reload, phase } = state;
  const ready = data && data.available ? data : null;
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState("");
  const [kind, setKind] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [enter, setEnter] = useState(true);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [shown, setShown] = useState(10);

  const startEdit = useCallback(() => {
    const m = ready?.myReview;
    setBody(m?.body ?? "");
    setKind(m?.eventKind ?? null);
    setResult(m?.result ?? null);
    setRating(m?.rating ?? null);
    setEnter(m ? m.isEventEntry : true);
    setErr(null);
    setEditing(true);
  }, [ready?.myReview]);

  // 로그인하고 #participant-reviews 로 돌아온 경우 — 섹션이 데이터 뒤에 그려지므로 그때 한 번 스크롤한다.
  const shownNow = !!ready && phase === "after";
  useEffect(() => {
    if (shownNow && window.location.hash === `#${REVIEWS_ANCHOR}`) {
      document.getElementById(REVIEWS_ANCHOR)?.scrollIntoView({ block: "start" });
    }
  }, [shownNow]);

  useEffect(() => {
    const open = () => { if (ready?.isLoggedIn) startEdit(); };
    window.addEventListener("hm-open-review-form", open);
    return () => window.removeEventListener("hm-open-review-form", open);
  }, [ready?.isLoggedIn, startEdit]);

  if (!ready || phase !== "after") return null;

  const len = charLen(body.trim());
  const tooShort = len < REVIEW_BODY_MIN;
  const tooLong = len > REVIEW_BODY_MAX;
  const hasLink = LINK_PATTERN.test(body);

  async function onSubmit() {
    if (busy || tooShort || tooLong || hasLink) return;
    setBusy(true);
    setErr(null);
    const r = await submitReview(p.tournamentId, { body, eventKind: kind, result, rating, enterEvent: enter });
    if (!r.ok) setErr(r.error);
    else { setEditing(false); await reload(); }
    setBusy(false);
  }

  async function onDelete() {
    if (busy || !window.confirm("내 후기를 삭제할까요? 이벤트 응모도 함께 취소됩니다.")) return;
    setBusy(true);
    const r = await deleteMyReview(p.tournamentId);
    if (!r.ok) setErr(r.error);
    await reload();
    setBusy(false);
  }

  const many = ready.reviewCount >= MIN_VISIBLE_COUNT;
  const others = ready.reviews.filter((r) => !r.isMine);
  const mine = ready.reviews.find((r) => r.isMine);

  return (
    <section id={REVIEWS_ANCHOR} className="mt-12 scroll-mt-24" aria-labelledby={`${REVIEWS_ANCHOR}-h`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
        <h2 id={`${REVIEWS_ANCHOR}-h`} className="text-xl font-serif font-bold text-foreground">참가자 후기</h2>
        {many && <span className="text-sm text-muted-foreground">{ready.reviewCount}개</span>}
        {ready.ratingAverage !== null && (
          <span className="text-sm text-muted-foreground">★ {ready.ratingAverage.toFixed(1)} <span className="text-xs">(별점 {ready.ratingCount}개)</span></span>
        )}
      </div>

      {ready.entryWindowOpen && (
        <div className="mb-5 p-4 rounded-xl border border-primary/30 text-sm leading-relaxed text-foreground" style={{ background: "rgba(var(--gold-dark-rgb),0.07)" }}>
          <p className="font-bold mb-1">🎁 {p.label} 후기 이벤트</p>
          <p className="text-muted-foreground">
            {koMonthDay(ready.entryDeadline)}까지 후기를 남기고 응모하면 <b className="text-foreground">{REVIEW_EVENT.drawWinners}명</b>을 추첨해 {REVIEW_EVENT.prizeDraw}을 드리고,
            구체적인 경험이 담긴 <b className="text-foreground">베스트 후기 {REVIEW_EVENT.bestWinners}명</b>에게 {REVIEW_EVENT.prizeBest}을 드립니다.
            추첨은 {koMonthDay(ready.drawDate)} 오후 7시, 비트코인 블록 해시로 공개 진행합니다. 응모한 후기에는 «이벤트 응모 후기» 표시가 붙습니다.
            {" "}<Link href="/?tab=event" className="text-primary font-semibold underline underline-offset-2">이벤트 안내</Link>
          </p>
        </div>
      )}

      {/* 쓰기 영역 */}
      {!ready.isLoggedIn ? (
        <div className="mb-6 p-4 rounded-xl border border-border bg-card flex flex-wrap items-center gap-3">
          <p className="text-sm text-muted-foreground flex-1 min-w-[180px]">다녀오셨나요? 다음 참가자에게 도움이 되는 후기를 남겨 주세요.</p>
          <Link href={loginHref(`/blog/${p.slug}#${REVIEWS_ANCHOR}`)} className={BTN_PRIMARY}>로그인하고 후기 쓰기</Link>
        </div>
      ) : editing ? (
        <div className="mb-6 p-4 md:p-5 rounded-xl border border-primary/30 bg-card space-y-4">
          <div>
            <p className="text-xs font-bold text-foreground mb-2">참가한 이벤트 <span className="font-normal text-muted-foreground">(선택)</span></p>
            <div className="flex flex-wrap gap-2">
              {EVENT_KIND_OPTIONS.map((o) => <Chip key={o.value} active={kind === o.value} onClick={() => setKind(kind === o.value ? null : o.value)}>{o.label}</Chip>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground mb-2">결과 <span className="font-normal text-muted-foreground">(선택)</span></p>
            <div className="flex flex-wrap gap-2">
              {RESULT_OPTIONS.map((o) => <Chip key={o.value} active={result === o.value} onClick={() => setResult(result === o.value ? null : o.value)}>{o.label}</Chip>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground mb-2">별점 <span className="font-normal text-muted-foreground">(선택)</span></p>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((n) => <Chip key={n} active={rating === n} onClick={() => setRating(rating === n ? null : n)}>{"★".repeat(n)}</Chip>)}
            </div>
          </div>
          <div>
            <label htmlFor="hm-review-body" className="text-xs font-bold text-foreground mb-2 block">후기 <span className="font-normal text-muted-foreground">({REVIEW_BODY_MIN}~{REVIEW_BODY_MAX}자 · 링크 불가)</span></label>
            <textarea id="hm-review-body" value={body} onChange={(e) => setBody(e.target.value)} rows={5} maxLength={REVIEW_BODY_MAX + 50}
              placeholder="예) 등록 줄은 몇 시에 얼마나 길었는지, 블라인드 속도는 어땠는지, 다음에 간다면 무엇을 다르게 할지"
              className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground leading-relaxed focus:outline-none focus:border-primary" />
            <p className={`text-[11px] mt-1 ${tooLong || hasLink ? "text-destructive" : "text-muted-foreground"}`}>
              {hasLink ? "링크·주소는 넣을 수 없습니다." : `${len}자${tooShort ? ` · ${REVIEW_BODY_MIN - len}자 더` : tooLong ? ` · ${len - REVIEW_BODY_MAX}자 초과` : ""}`}
            </p>
          </div>
          {ready.entryWindowOpen && (
            <label className="flex items-start gap-2 text-xs text-foreground cursor-pointer">
              <input type="checkbox" checked={enter} onChange={(e) => setEnter(e.target.checked)} className="mt-0.5" />
              <span>후기 이벤트에 응모합니다. <span className="text-muted-foreground">(응모한 후기에는 «이벤트 응모 후기» 표시가 붙습니다)</span></span>
            </label>
          )}
          {err && <p role="alert" className="text-xs text-destructive">{err}</p>}
          <div className="flex gap-2 justify-end">
            <button type="button" className={BTN_GHOST} onClick={() => setEditing(false)} disabled={busy}>취소</button>
            <button type="button" className={BTN_PRIMARY} onClick={onSubmit} disabled={busy || tooShort || tooLong || hasLink}>
              {busy ? "저장 중…" : ready.myReview ? "수정 저장" : "후기 올리기"}
            </button>
          </div>
        </div>
      ) : ready.myReview ? (
        <div className="mb-6">
          <p className="text-xs font-bold text-muted-foreground mb-2">내 후기</p>
          {ready.myReview.isHidden ? (
            <p className="p-4 rounded-xl border border-border bg-card text-sm text-muted-foreground">운영 기준에 따라 숨겨진 후기입니다. 문의는 커뮤니티로 남겨 주세요.</p>
          ) : (
            <ul><ReviewCard r={mine ?? {
              id: "mine", nickname: "나", body: ready.myReview.body, eventKind: ready.myReview.eventKind,
              result: ready.myReview.result, rating: ready.myReview.rating, wasAttending: false,
              isEventEntry: ready.myReview.isEventEntry, isBest: false, isMine: false, createdAt: new Date().toISOString(),
            }} /></ul>
          )}
          <div className="flex gap-2 mt-2 justify-end">
            <button type="button" className={BTN_GHOST} onClick={startEdit} disabled={busy}>수정</button>
            <button type="button" className={BTN_GHOST} onClick={onDelete} disabled={busy}>삭제</button>
          </div>
          {err && <p role="alert" className="text-xs text-destructive mt-2">{err}</p>}
        </div>
      ) : (
        <div className="mb-6 p-4 rounded-xl border border-border bg-card flex flex-wrap items-center gap-3">
          <p className="text-sm text-muted-foreground flex-1 min-w-[180px]">다녀오셨나요? 다음 참가자에게 도움이 되는 후기를 남겨 주세요.</p>
          <button type="button" className={BTN_PRIMARY} onClick={startEdit}>후기 쓰기</button>
        </div>
      )}

      {/* 목록 */}
      {others.length === 0 ? (
        !ready.myReview && <p className="text-sm text-muted-foreground">아직 후기가 없습니다. 첫 후기를 남겨 주세요.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {others.slice(0, shown).map((r) => <ReviewCard key={r.id} r={r} />)}
          </ul>
          {others.length > shown && (
            <div className="mt-4 text-center">
              <button type="button" className={BTN_GHOST} onClick={() => setShown(shown + 10)}>후기 더 보기</button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

/**
 * 대회 보드(/tournaments) 카드용 한 줄 — 가이드 글의 바와 같은 대회 id·같은 숫자를 쓴다(2026-09-28).
 * 대회 전/중 = 참가 예정 수 + [나도 참가] · 대회 후 = 후기 수 + 가이드 «참가자 후기»로 가는 링크.
 * DB를 못 읽으면 아무것도 그리지 않는다(카드 높이만 조금 줄어든다 — 카드 목록 맨 아래 줄이라 밀림이 없다).
 */
export function BoardParticipation({ p }: { p: ParticipationProps }) {
  const state = useTournamentParticipation(p);
  const { data, reload, phase } = state;
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const ready = data && data.available ? data : null;
  if (!ready) return null;

  const chip = "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors";
  if (phase === "after") {
    return (
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        <span className="font-semibold text-foreground">
          {ready.reviewCount >= MIN_VISIBLE_COUNT ? <>⭐ 참가자 후기 {ready.reviewCount}개</> : <>⭐ 참가자 후기를 모으는 중</>}
        </span>
        <Link href={`/blog/${p.slug}#${REVIEWS_ANCHOR}`} className={`${chip} bg-primary text-primary-foreground hover:opacity-90`}>
          {ready.myReview ? "내 후기 보기 →" : "후기 쓰기 →"}
        </Link>
        {ready.entryWindowOpen && <span className="text-muted-foreground">🎁 후기 이벤트 {koMonthDay(ready.entryDeadline)}까지</span>}
      </div>
    );
  }

  async function onToggle() {
    if (!ready || busy) return;
    setBusy(true);
    setErr(null);
    const r = await toggleAttendance(p.tournamentId, !ready.iAttend);
    if (!r.ok) setErr(r.error ?? "저장하지 못했습니다.");
    await reload();
    setBusy(false);
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px]">
      <span className="font-semibold text-foreground">
        {ready.attendCount >= MIN_VISIBLE_COUNT ? <>🙋 참가 예정 {ready.attendCount}명</> : <>🙋 가시나요?</>}
      </span>
      {ready.isLoggedIn ? (
        <button type="button" onClick={onToggle} disabled={busy} aria-pressed={ready.iAttend}
          className={`${chip} ${ready.iAttend ? "border border-primary/40 text-primary-ink" : "bg-primary text-primary-foreground hover:opacity-90"} disabled:opacity-50`}>
          {ready.iAttend ? "✓ 참가 예정 (취소)" : "나도 참가"}
        </button>
      ) : (
        <Link href={loginHref(`/tournaments?attend=1#tournament-${p.tournamentId}`)} className={`${chip} bg-primary text-primary-foreground hover:opacity-90`}>
          나도 참가
        </Link>
      )}
      <span className="text-muted-foreground">🎁 다녀와서 후기 쓰면 기프트콘 추첨</span>
      {err && <span role="alert" className="basis-full text-destructive">{err}</span>}
    </div>
  );
}
