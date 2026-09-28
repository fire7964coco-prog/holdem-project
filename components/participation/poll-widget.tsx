"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loginHref } from "@/lib/auth-navigation";
import { COMMENT_BODY_MAX, COMMENT_BODY_MIN, LINK_PATTERN } from "@/lib/participation-config";
import { POLL_MIN_VISIBLE, pollById } from "@/lib/polls";
import { addPollComment, castVote, deleteMyPollComment, getPollState, type PollState } from "@/app/participation/actions";

/**
 * 전략 글 «당신이라면?» 투표 (2026-09-28 · 설계 docs/participation-event-redesign-design.md §3)
 *
 * - 질문·선택지·솔버 답은 lib/polls.ts(정적)라 DB가 없어도 «누르면 솔버 답 공개»는 동작한다.
 * - 독자 선택 %는 투표가 POLL_MIN_VISIBLE(20) 이상일 때만 보인다.
 * - 투표는 비로그인 · 한 브라우저 한 표(localStorage 무작위 id) · 코멘트만 로그인.
 * - 🔴 본문(.blog-prose) 안에 들어가므로 p·ul·li를 쓰지 않는다 — 본문 글자 크기·여백이 새어 들어온다(2026-09-28 화면 확인).
 * - 막대 모양 = 솔버 핸드 복기 시안의 빈도 막대(참고자료/시안_핸드복기_2026-09-28) — 사이트 크림 테마로 옮김.
 */

const VOTER_KEY = "hm-voter-id";
const choiceKey = (id: string) => `hm-poll:${id}`;

function readLS(key: string): string | null {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function writeLS(key: string, value: string) {
  try { window.localStorage.setItem(key, value); } catch { /* 사생활 보호 모드 등 — 이번 방문 동안만 기억 */ }
}
function newUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const b = new Uint8Array(16);
  crypto.getRandomValues(b);
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}
function voterId(): string {
  const saved = readLS(VOTER_KEY);
  if (saved && /^[0-9a-f-]{36}$/i.test(saved)) return saved;
  const id = newUuid();
  writeLS(VOTER_KEY, id);
  return id;
}

const pct = (s: string) => Math.max(0, Math.min(100, parseFloat(s)));
const isRed = (card: string) => /[♥♦]/.test(card);

function Bar({ value, tone }: { value: number; tone: "solver" | "reader" }) {
  return (
    <div className="h-2.5 rounded-full bg-muted overflow-hidden" aria-hidden="true">
      <div className={`h-full rounded-full ${tone === "solver" ? "bg-primary" : "bg-foreground/35"}`}
        style={{ width: `${Math.max(value, value > 0 ? 1.5 : 0)}%` }} />
    </div>
  );
}

export default function PollWidget({ pollId, slug }: { pollId: string; slug: string }) {
  const poll = pollById(pollId);
  const [vid, setVid] = useState<string | null>(null);
  const [state, setState] = useState<PollState | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [voteErr, setVoteErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [comment, setComment] = useState("");
  const [commentErr, setCommentErr] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!poll) return;
    const id = voterId();
    setVid(id);
    const saved = readLS(choiceKey(poll.id));
    if (saved !== null && /^\d$/.test(saved) && Number(saved) < poll.options.length) setChoice(Number(saved));
    getPollState(poll.id, id).then(async (s) => {
      setState(s);
      if (!s.available) return;
      if (s.myChoice !== null) { setChoice(s.myChoice); writeLS(choiceKey(poll.id), String(s.myChoice)); return; }
      // 이 브라우저엔 선택이 남아 있는데 서버엔 표가 없다(지난번 저장 실패) — 조용히 한 번 더 저장한다.
      const local = readLS(choiceKey(poll.id));
      if (local !== null && /^\d$/.test(local) && Number(local) < poll.options.length) {
        const r = await castVote(poll.id, id, Number(local)).catch(() => null);
        if (r?.ok && r.state) setState(r.state);
      }
    }).catch(() => setState({ available: false }));
  }, [poll]);

  if (!poll) return null;

  async function vote(i: number) {
    if (!poll || busy || choice !== null || !vid) return;
    setChoice(i); // 솔버 답은 바로 공개한다(저장 결과를 기다리지 않는다)
    writeLS(choiceKey(poll.id), String(i));
    setBusy(true);
    setVoteErr(null);
    const r = await castVote(poll.id, vid, i).catch(() => ({ ok: false, error: "투표를 저장하지 못했습니다.", state: undefined }));
    if (r.ok && r.state) {
      setState(r.state);
      if (r.state.available && r.state.myChoice !== null && r.state.myChoice !== i) {
        setChoice(r.state.myChoice); // 이미 찍어 둔 표가 있었다 — 처음 표를 보여 준다
        writeLS(choiceKey(poll.id), String(r.state.myChoice));
      }
    } else {
      // 저장 실패 — 솔버 답은 계속 보여 주되, 이 브라우저의 «투표함» 기록은 지워 다음 방문에 다시 찍을 수 있게 한다.
      setVoteErr(r.error ?? "투표를 저장하지 못했습니다.");
      try { window.localStorage.removeItem(choiceKey(poll.id)); } catch { /* 무시 */ }
    }
    setBusy(false);
  }

  async function sendComment() {
    if (!poll || busy) return;
    const body = comment.replace(/\s+/g, " ").trim();
    const len = [...body].length;
    if (len < COMMENT_BODY_MIN || len > COMMENT_BODY_MAX) { setCommentErr(`코멘트는 ${COMMENT_BODY_MIN}~${COMMENT_BODY_MAX}자입니다.`); return; }
    if (LINK_PATTERN.test(body)) { setCommentErr("링크·주소는 넣을 수 없습니다."); return; }
    setBusy(true);
    setCommentErr(null);
    const r = await addPollComment(poll.id, body);
    if (r.ok) {
      setComment("");
      setState(await getPollState(poll.id, vid));
    } else setCommentErr(r.error);
    setBusy(false);
  }

  async function removeComment(id: string) {
    if (!poll || busy || !window.confirm("이 코멘트를 삭제할까요?")) return;
    setBusy(true);
    const r = await deleteMyPollComment(id);
    if (!r.ok) setCommentErr(r.error);
    setState(await getPollState(poll.id, vid));
    setBusy(false);
  }

  const revealed = choice !== null;
  const live = state && state.available ? state : null;
  const showReaders = !!live && live.total >= POLL_MIN_VISIBLE;
  const comments = live?.comments ?? [];

  return (
    <aside className="my-8 rounded-2xl border border-primary/30 bg-card p-4 md:p-6 not-prose" aria-label="당신이라면? 투표">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <div className="text-base font-bold text-foreground">🤔 당신이라면?</div>
        <div className="text-[11px] text-muted-foreground">솔버 답 = 홀덤마스터 GTO 솔버 · 레인지 전체 빈도</div>
      </div>
      <div className="text-xs text-muted-foreground mb-3">{poll.spot}</div>
      <div className="flex gap-1.5 mb-3" aria-label={`플랍 ${poll.board.join(" ")}`}>
        {poll.board.map((c) => (
          <span key={c} className={`inline-flex items-center justify-center w-9 h-12 rounded-md border border-border bg-background text-sm font-bold ${isRed(c) ? "text-red-600" : "text-foreground"}`}>{c}</span>
        ))}
      </div>
      <div className="text-sm font-semibold text-foreground mb-4 leading-relaxed">{poll.question}</div>

      {!revealed ? (
        <div className="grid gap-2 sm:grid-cols-3">
          {poll.options.map((o, i) => (
            <button key={o.label} type="button" onClick={() => vote(i)} disabled={!vid}
              className="px-3 py-3 rounded-xl border border-primary/40 text-sm font-bold text-foreground bg-background hover:bg-primary/10 hover:border-primary transition-colors disabled:opacity-60">
              {o.label}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-end gap-4 text-[11px] text-muted-foreground mb-2">
            {showReaders && <span className="flex items-center gap-1"><span className="inline-block w-2.5 h-2.5 rounded-full bg-foreground/35" />독자</span>}
            <span className="flex items-center gap-1"><span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />솔버</span>
          </div>
          <div className="space-y-3">
            {poll.options.map((o, i) => {
              const readerPct = showReaders && live ? Math.round((live.counts[i] / live.total) * 1000) / 10 : 0;
              return (
                <div key={o.label}>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {o.label}
                    {choice === i && <span className="ml-2 text-[11px] font-bold text-primary">← 내 선택</span>}
                  </div>
                  {showReaders && (
                    <div className="grid grid-cols-[1fr_52px] items-center gap-2 mb-1">
                      <Bar value={readerPct} tone="reader" />
                      <span className="text-xs text-muted-foreground text-right tabular-nums">{readerPct.toFixed(1)}%</span>
                    </div>
                  )}
                  <div className="grid grid-cols-[1fr_52px] items-center gap-2">
                    <Bar value={pct(o.freq)} tone="solver" />
                    <span className="text-xs font-bold text-foreground text-right tabular-nums">{o.freq}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-xs text-muted-foreground mt-3">
            {voteErr
              ? <span role="alert">{voteErr} 솔버 답은 그대로 보세요.</span>
              : live
                ? showReaders
                  ? `독자 ${live.total.toLocaleString("ko-KR")}명 참여`
                  : `아직 투표가 적어요 (${live.total}명) — ${POLL_MIN_VISIBLE}명이 모이면 독자 선택 비율을 함께 보여 드려요.`
                : ""}
          </div>
          <div className="text-sm text-foreground leading-relaxed mt-3">{poll.explain}</div>
          {poll.sourceSlug !== slug && (
            <Link href={`/blog/${poll.sourceSlug}`} className="inline-block mt-2 text-sm font-semibold text-primary underline underline-offset-2">
              {poll.sourceLabel} →
            </Link>
          )}

          {/* 한 줄 코멘트 */}
          {live && (
            <div className="mt-5 pt-4 border-t border-border">
              <div className="text-xs font-bold text-foreground mb-2">💬 한 줄 코멘트{comments.length > 0 && <span className="font-normal text-muted-foreground"> {comments.length >= 20 ? "20+" : comments.length}</span>}</div>
              {comments.length > 0 && (
                <div className="space-y-1.5 mb-3">
                  {(showAll ? comments : comments.slice(0, 3)).map((c) => (
                    <div key={c.id} className="text-sm text-foreground break-words">
                      <span className="font-semibold">{c.nickname}</span>
                      <span className="text-muted-foreground"> · </span>
                      {c.body}
                      {c.isMine && (
                        <button type="button" onClick={() => removeComment(c.id)} className="ml-2 text-[11px] text-muted-foreground underline">삭제</button>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {comments.length > 3 && !showAll && (
                <button type="button" onClick={() => setShowAll(true)} className="text-xs text-primary font-semibold mb-3">코멘트 더 보기</button>
              )}
              {live.isLoggedIn ? (
                <div className="flex gap-2">
                  <input value={comment} onChange={(e) => setComment(e.target.value)} maxLength={COMMENT_BODY_MAX + 20}
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.nativeEvent.isComposing) sendComment(); }}
                    placeholder="왜 그렇게 골랐나요? (80자)" aria-label="한 줄 코멘트"
                    className="flex-1 min-w-0 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                  <button type="button" onClick={sendComment} disabled={busy}
                    className="px-3.5 py-2 rounded-lg text-xs font-bold bg-primary text-primary-foreground disabled:opacity-50 whitespace-nowrap">남기기</button>
                </div>
              ) : (
                <Link href={loginHref(`/blog/${slug}`)} className="text-xs font-semibold text-primary underline underline-offset-2">로그인하고 한 줄 남기기</Link>
              )}
              {commentErr && <div role="alert" className="text-xs text-destructive mt-2">{commentErr}</div>}
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
