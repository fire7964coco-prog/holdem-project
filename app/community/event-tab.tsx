"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getEventData, submitEventEntry } from "./actions";
import { EVENT_CONDITION, WINNING_NUMBERS, PRIZE_TABLE } from "@/lib/event-config";
import { GOLD, BG, CARD, BORDER } from "./post-card";

type EventData = {
  myEntry: { numbers: number[] } | null;
  myPostCount: number;
  myLikeCount: number;
};

function ProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
        <span className="text-xs font-bold" style={{ color: value >= max ? GOLD : "rgba(255,255,255,0.5)" }}>
          {value} / {max} {value >= max ? "✓" : ""}
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: value >= max
              ? "linear-gradient(90deg,#d4af37,#f0d060)"
              : "rgba(212,175,55,0.35)",
          }}
        />
      </div>
    </div>
  );
}

function NumberBall({
  n,
  selected,
  winning,
  onClick,
  disabled,
}: {
  n: number;
  selected: boolean;
  winning?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const isMatch = selected && winning;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center rounded-full font-bold text-xs transition-all active:scale-95"
      style={{
        width: 36,
        height: 36,
        flexShrink: 0,
        cursor: disabled ? "default" : "pointer",
        background: isMatch
          ? "linear-gradient(135deg,#d4af37,#f0d060)"
          : selected
          ? "rgba(212,175,55,0.85)"
          : "rgba(255,255,255,0.07)",
        color: isMatch || selected ? BG : "rgba(255,255,255,0.55)",
        border: winning && !selected
          ? "2px solid rgba(212,175,55,0.6)"
          : selected
          ? "2px solid rgba(212,175,55,0.9)"
          : "2px solid transparent",
        boxShadow: isMatch ? "0 0 10px rgba(212,175,55,0.5)" : "none",
        transform: isMatch ? "scale(1.1)" : "none",
      }}
    >
      {n}
    </button>
  );
}

export default function EventTab({
  isLoggedIn,
  initialData,
}: {
  isLoggedIn: boolean;
  initialData: EventData | null;
}) {
  const router = useRouter();
  const [data, setData] = useState<EventData | null>(initialData);
  const [picked, setPicked] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // 로그인 유저 데이터를 초기화 후에도 새로 불러올 수 있게
  useEffect(() => {
    if (isLoggedIn && !initialData) {
      getEventData().then(setData);
    }
  }, [isLoggedIn, initialData]);

  const myPostCount = data?.myPostCount ?? 0;
  const myLikeCount = data?.myLikeCount ?? 0;
  const myEntry = data?.myEntry ?? null;

  const isEligible =
    myPostCount >= EVENT_CONDITION.minPosts &&
    myLikeCount >= EVENT_CONDITION.minLikes;

  function togglePick(n: number) {
    setPicked((prev) =>
      prev.includes(n)
        ? prev.filter((x) => x !== n)
        : prev.length < 6
        ? [...prev, n]
        : prev
    );
  }

  function handleSubmit() {
    if (picked.length !== 6) return;
    setSubmitError(null);
    startTransition(async () => {
      const res = await submitEventEntry(picked);
      if (res?.error) {
        setSubmitError(res.error);
      } else {
        setSubmitted(true);
        // 데이터 갱신
        const fresh = await getEventData();
        setData(fresh);
        setPicked([]);
        router.refresh();
      }
    });
  }

  // 결과 계산
  const matchCount =
    myEntry && WINNING_NUMBERS
      ? myEntry.numbers.filter((n) => WINNING_NUMBERS!.includes(n)).length
      : 0;
  const prize = PRIZE_TABLE[matchCount] ?? null;

  // ──────────────────────────────────────────────────────────
  // RENDER
  // ──────────────────────────────────────────────────────────

  return (
    <div className="px-3 lg:px-0 space-y-4">

      {/* ── 이벤트 헤더 카드 ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.04))",
          border: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        <div className="h-1" style={{ background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }} />
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🎰</span>
            <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(212,175,55,0.15)", color: GOLD }}>
              2026년 6월 이벤트
            </span>
          </div>
          <h2 className="text-base font-black mb-1" style={{ color: "#f0e8c8" }}>
            번호 6개 선택 — 기프트콘 증정!
          </h2>
          <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            1~45 중 6개를 선택하세요. 3개 이상 일치하면 기프트콘을 드립니다.
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {[
              { match: "3개 일치", prize: "5,000원" },
              { match: "4개 일치", prize: "10,000원" },
              { match: "5~6개 일치", prize: "50,000원" },
            ].map((r) => (
              <div
                key={r.match}
                className="rounded-xl py-2 px-1"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <p className="font-bold" style={{ color: GOLD }}>{r.prize}</p>
                <p style={{ color: "rgba(255,255,255,0.4)" }}>{r.match}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 비로그인 ── */}
      {!isLoggedIn && (
        <div
          className="rounded-2xl p-6 text-center"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          <div className="text-4xl mb-3">🔒</div>
          <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>로그인 후 참여 가능</p>
          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            이벤트에 참여하려면 로그인하세요.
          </p>
          <Link
            href="/community/login"
            className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
          >
            로그인 / 회원가입 →
          </Link>
        </div>
      )}

      {/* ── 로그인 + 조건 미충족 ── */}
      {isLoggedIn && !isEligible && !myEntry && (
        <div
          className="rounded-2xl p-5"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>🎯 참여 조건</p>
          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            아래 조건을 달성하면 번호를 선택할 수 있습니다.
          </p>
          <div className="space-y-3">
            <ProgressBar
              value={myPostCount}
              max={EVENT_CONDITION.minPosts}
              label={`글 작성 ${EVENT_CONDITION.minPosts}개`}
            />
            <ProgressBar
              value={myLikeCount}
              max={EVENT_CONDITION.minLikes}
              label={`좋아요 ${EVENT_CONDITION.minLikes}개 받기`}
            />
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
            피드에 글을 올리고 좋아요를 받으면 참여 가능합니다!
          </p>
        </div>
      )}

      {/* ── 이미 참여 완료 ── */}
      {isLoggedIn && myEntry && (
        <div
          className="rounded-2xl p-5"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          {WINNING_NUMBERS ? (
            /* 결과 발표 후 */
            <>
              <p className="text-sm font-bold mb-3" style={{ color: "#f0e8c8" }}>
                🎉 결과 발표 — {matchCount}개 일치!
                {prize && (
                  <span
                    className="ml-2 text-xs px-2 py-0.5 rounded-full font-black"
                    style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                  >
                    {prize}
                  </span>
                )}
              </p>

              {/* 당첨 번호 */}
              <p className="text-xs mb-2" style={{ color: GOLD }}>당첨 번호</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {WINNING_NUMBERS.map((n) => (
                  <NumberBall key={n} n={n} selected={myEntry.numbers.includes(n)} winning disabled />
                ))}
              </div>

              {/* 내 번호 */}
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>내가 선택한 번호</p>
              <div className="flex flex-wrap gap-2">
                {myEntry.numbers.map((n) => (
                  <NumberBall key={n} n={n} selected winning={WINNING_NUMBERS!.includes(n)} disabled />
                ))}
              </div>

              {matchCount < 3 && (
                <p className="text-xs mt-4 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  아쉽네요. 다음 이벤트를 기대해주세요! 🍀
                </p>
              )}
            </>
          ) : (
            /* 결과 발표 전 */
            <>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">✅</span>
                <p className="text-sm font-bold" style={{ color: "#f0e8c8" }}>참여 완료!</p>
              </div>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                내가 선택한 번호
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {myEntry.numbers.map((n) => (
                  <NumberBall key={n} n={n} selected disabled />
                ))}
              </div>
              <div
                className="rounded-xl px-4 py-3 text-center"
                style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <p className="text-xs font-bold" style={{ color: GOLD }}>⏳ 결과 발표 대기 중</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  당첨 번호 발표 후 여기서 확인할 수 있습니다.
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── 조건 충족 + 미참여 → 번호 선택 ── */}
      {isLoggedIn && isEligible && !myEntry && !submitted && (
        <div
          className="rounded-2xl p-5"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "#f0e8c8" }}>
              🎯 번호 선택 ({picked.length}/6)
            </p>
            {picked.length > 0 && (
              <button
                onClick={() => setPicked([])}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
              >
                초기화
              </button>
            )}
          </div>

          {/* 번호판 1~45 */}
          <div className="flex flex-wrap gap-2 mb-5">
            {Array.from({ length: 45 }, (_, i) => i + 1).map((n) => (
              <NumberBall
                key={n}
                n={n}
                selected={picked.includes(n)}
                onClick={() => togglePick(n)}
                disabled={!picked.includes(n) && picked.length === 6}
              />
            ))}
          </div>

          {/* 선택된 번호 미리보기 */}
          {picked.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 px-3 py-2.5 rounded-xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)" }}>
              {picked
                .slice()
                .sort((a, b) => a - b)
                .map((n) => (
                  <span
                    key={n}
                    className="text-xs font-black px-2 py-1 rounded-lg"
                    style={{ background: "rgba(212,175,55,0.2)", color: GOLD }}
                  >
                    {n}
                  </span>
                ))}
              <span className="text-xs ml-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                {6 - picked.length}개 더 선택
              </span>
            </div>
          )}

          {submitError && (
            <p className="text-xs text-red-400 mb-3 text-center">{submitError}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={picked.length !== 6 || isPending}
            className="w-full py-3 rounded-xl text-sm font-black transition-all disabled:opacity-40"
            style={{
              background: picked.length === 6
                ? "linear-gradient(135deg,#d4af37,#f0d060)"
                : "rgba(255,255,255,0.05)",
              color: picked.length === 6 ? BG : "rgba(255,255,255,0.3)",
            }}
          >
            {isPending ? "제출 중..." : picked.length === 6 ? "🎰 번호 제출하기" : `${6 - picked.length}개 더 선택하세요`}
          </button>
        </div>
      )}

    </div>
  );
}
