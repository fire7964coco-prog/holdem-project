"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MIN_VISIBLE_COUNT, REVIEW_EVENT, REVIEW_EVENT_BANNER_KO, koMonthDay } from "@/lib/participation-config";
import { getEventLabels } from "@/lib/event-config";
import { getReviewEventOverview, type ReviewEventRound } from "@/app/participation/actions";

/**
 * 커뮤니티 이벤트 탭 — «대회 후기 이벤트» (2026-09-28 · 설계 docs/participation-event-redesign-design.md §4)
 * 매주 번호 추첨(EVENT_OPERATION.acceptingEntries)을 멈춘 동안 app/community/event-tab.tsx 가 이 패널을 대신 그린다.
 * KO 대회 가이드 파일럿이라 다른 언어에는 «준비 중»만 보인다.
 */

const REVIEWS_ANCHOR = "participant-reviews";

function statusOf(r: ReviewEventRound): { text: string; tone: "live" | "wait" | "done" } {
  if (r.draw) return { text: "추첨 완료", tone: "done" };
  if (r.phase === "before") return { text: `대회 전 · 후기 응모는 ${koMonthDay(r.endDate)} 다음 날부터`, tone: "wait" };
  if (r.phase === "during") return { text: "대회 진행 중", tone: "wait" };
  if (r.entryWindowOpen) return { text: `응모 중 · ${koMonthDay(r.entryDeadline)}까지`, tone: "live" };
  return { text: `응모 마감 · ${koMonthDay(r.drawDate)} 오후 7시 추첨`, tone: "wait" };
}

function Round({ r }: { r: ReviewEventRound }) {
  const s = statusOf(r);
  const range = r.startDate === r.endDate ? koMonthDay(r.startDate) : `${koMonthDay(r.startDate)}~${koMonthDay(r.endDate)}`;
  const showCount = r.draw || r.entryCount >= MIN_VISIBLE_COUNT;
  return (
    <li className="rounded-2xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <p className="text-sm font-bold text-foreground">{r.label}</p>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
          s.tone === "live" ? "bg-primary text-primary-foreground" : s.tone === "done" ? "border border-primary/40 text-primary" : "border border-border text-muted-foreground"
        }`}>{s.text}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        대회 {range} · 응모 {koMonthDay(nextDay(r.endDate))}~{koMonthDay(r.entryDeadline)} · 추첨 {koMonthDay(r.drawDate)}(일) 오후 7시
        {showCount && <> · 응모 {r.draw ? r.draw.entries.length : r.entryCount}명</>}
      </p>
      {r.myStatus !== "none" && (
        <p className="text-xs font-semibold text-primary mt-1">{r.myStatus === "entry" ? "✓ 내 후기 응모 완료" : "내 후기 작성됨 (응모 안 함)"}</p>
      )}
      <div className="mt-3">
        <Link href={r.phase === "after" ? `/blog/${r.slug}#${REVIEWS_ANCHOR}` : `/blog/${r.slug}`}
          className="inline-flex px-3.5 py-2 rounded-lg text-xs font-bold bg-primary text-primary-foreground">
          {r.phase === "after" ? (r.myStatus === "none" ? "후기 쓰러 가기 →" : "내 후기 보기 →") : "대회 가이드 보기 →"}
        </Link>
      </div>

      {r.draw && (
        <div className="mt-4 p-3 rounded-xl border border-border bg-background space-y-2">
          <p className="text-xs font-bold text-foreground">🎉 당첨</p>
          {r.draw.winners.length === 0 ? (
            <p className="text-xs text-muted-foreground">응모한 후기가 없어 추첨 당첨자가 없습니다.</p>
          ) : (
            <ul className="text-xs text-foreground space-y-0.5">
              {r.draw.winners.map((w) => <li key={`${w.no}-${w.nickname}`}>추첨 · 응모 {w.no}번 {w.nickname} — {REVIEW_EVENT.prizeDraw}</li>)}
            </ul>
          )}
          {r.best.length > 0 && (
            <ul className="text-xs text-foreground space-y-0.5">
              {r.best.map((n, i) => <li key={i}>베스트 후기 · {n} — {REVIEW_EVENT.prizeBest}</li>)}
            </ul>
          )}
          <p className="text-[11px] text-muted-foreground">당첨자에게는 가입한 이메일로 연락드립니다.</p>
          <details className="text-[11px] text-muted-foreground">
            <summary className="cursor-pointer font-semibold">검증 정보 · 응모 목록 {r.draw.entries.length}명</summary>
            <p className="mt-2">추첨 블록 = 응모 마감({koMonthDay(r.entryDeadline)} 23:59:59 KST) 뒤 처음 채굴된 비트코인 블록 #{r.draw.blockHeight}</p>
            <p className="font-mono break-all">{r.draw.blockHash}</p>
            {r.draw.explorerUrl && (
              <a href={r.draw.explorerUrl} target="_blank" rel="noopener noreferrer" className="underline text-primary">블록 탐색기에서 확인 →</a>
            )}
            <p className="mt-2 leading-relaxed">
              계산법: i = 0, 1, 2 … 마다 SHA-256(&quot;블록 해시:i&quot;)의 앞 8자리(16진수)를 정수로 바꿔 응모 수로 나눈 나머지 + 1이 당첨 응모 번호입니다(이미 나온 번호는 건너뜀).
            </p>
            {r.draw.entries.length > 0 && (
              <ol className="mt-2 grid grid-cols-2 gap-x-3">
                {r.draw.entries.map((e) => <li key={e.no}>{e.no}. {e.nickname}</li>)}
              </ol>
            )}
          </details>
        </div>
      )}
    </li>
  );
}

function nextDay(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

export default function ReviewEventPanel({ lang = "ko" }: { lang?: string }) {
  const [data, setData] = useState<Awaited<ReturnType<typeof getReviewEventOverview>> | null>(null);

  useEffect(() => {
    if (lang !== "ko") return;
    getReviewEventOverview().then(setData).catch(() => setData({ available: false }));
  }, [lang]);

  if (lang !== "ko") {
    return (
      <div className="px-3 lg:px-0">
        <div className="rounded-2xl border border-border bg-card p-6 text-center">
          <p className="text-3xl mb-2">🎁</p>
          <p className="text-sm font-bold text-foreground">{getEventLabels(lang).paused}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 lg:px-0 space-y-4">
      <div className="rounded-2xl overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, rgba(var(--gold-dark-rgb),0.1), rgba(var(--gold-dark-rgb),0.04))" }}>
        <div className="h-1" style={{ background: "linear-gradient(90deg,rgb(var(--gold-dark-rgb)),#f0d060,transparent)" }} />
        <div className="p-5">
          <p className="text-xs font-bold text-primary mb-1">{REVIEW_EVENT_BANNER_KO.badge}</p>
          <h2 className="text-base font-bold text-foreground mb-2">다녀온 대회 후기를 남기면 기프트콘 추첨</h2>
          <div className="grid grid-cols-2 gap-2 text-center text-xs mb-3">
            <div className="rounded-xl py-2 px-1 border border-primary/20" style={{ background: "rgba(var(--gold-dark-rgb),0.08)" }}>
              <p className="font-bold text-primary">{REVIEW_EVENT.prizeDraw}</p>
              <p className="text-muted-foreground font-medium">추첨 {REVIEW_EVENT.drawWinners}명 (대회마다)</p>
            </div>
            <div className="rounded-xl py-2 px-1 border border-primary/20" style={{ background: "rgba(var(--gold-dark-rgb),0.08)" }}>
              <p className="font-bold text-primary">{REVIEW_EVENT.prizeBest}</p>
              <p className="text-muted-foreground font-medium">베스트 후기 {REVIEW_EVENT.bestWinners}명</p>
            </div>
          </div>
          <ol className="text-xs text-foreground space-y-1 list-decimal pl-4 leading-relaxed">
            <li>대회 전: 대회 가이드 상단에서 [나도 참가]를 눌러 두면 후기에 «사전 참가 표시»가 붙어요.</li>
            <li>대회가 끝난 다음 날부터 {REVIEW_EVENT.entryDays}일 동안, 가이드 아래 «참가자 후기»에 30자 이상 후기 + 응모 체크.</li>
            <li>응모 마감 뒤 첫 일요일 오후 7시에 추첨합니다. 추첨 블록은 «응모 마감 뒤 처음 채굴된 비트코인 블록»으로 미리 정해져 있어 누구나 같은 결과를 재현할 수 있어요.</li>
          </ol>
          <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
            응모한 후기에는 «이벤트 응모 후기» 표시가 붙습니다. 베스트 후기는 다음 참가자에게 쓸모 있는 구체적인 경험을 기준으로 운영자가 고릅니다.
            광고·대회와 무관한 글은 숨김 처리되고 응모에서 빠집니다.{" "}
            <Link href="/blog/holdem-community-event-guide" className="text-primary font-semibold underline underline-offset-2">자세한 안내</Link>
          </p>
        </div>
      </div>

      {!data ? (
        <p role="status" className="text-sm text-muted-foreground">대회별 현황을 불러오는 중…</p>
      ) : !data.available ? (
        <p className="text-sm text-muted-foreground">대회별 현황을 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.</p>
      ) : (
        <ul className="space-y-3">
          {data.rounds.map((r) => <Round key={r.id} r={r} />)}
        </ul>
      )}
    </div>
  );
}
