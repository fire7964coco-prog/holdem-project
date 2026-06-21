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

// ── 이벤트 탭 다국어 라벨 ────────────────────────────────────
const EVENT_LABELS = {
  ko: {
    eventBadge: "2026년 6월 이벤트",
    eventTitle: "번호 6개 선택 — 기프트콘 증정!",
    eventDesc: "1~45 중 6개를 선택하세요. 3개 이상 일치하면 기프트콘을 드립니다.",
    match3: "3개 일치", match4: "4개 일치", match56: "5~6개 일치",
    prize3: "5,000원", prize4: "10,000원", prize56: "50,000원",
    loginRequired: "로그인 후 참여 가능",
    loginDesc: "이벤트에 참여하려면 로그인하세요.",
    loginBtn: "로그인 / 회원가입 →",
    condTitle: "🎯 참여 조건",
    condDesc: "아래 조건을 달성하면 번호를 선택할 수 있습니다.",
    postLabel: (n: number) => `글 작성 ${n}개`,
    likeLabel: (n: number) => `좋아요 ${n}개 받기`,
    condHint: "피드에 글을 올리고 좋아요를 받으면 참여 가능합니다!",
    resultTitle: (n: number) => `🎉 결과 발표 — ${n}개 일치!`,
    winningLabel: "당첨 번호",
    myNumLabel: "내가 선택한 번호",
    noMatch: "아쉽네요. 다음 이벤트를 기대해주세요! 🍀",
    doneTitle: "참여 완료!",
    doneNumLabel: "내가 선택한 번호",
    pending: "⏳ 결과 발표 대기 중",
    pendingDesc: "당첨 번호 발표 후 여기서 확인할 수 있습니다.",
    pickTitle: (picked: number) => `🎯 번호 선택 (${picked}/6)`,
    reset: "초기화",
    moreNeeded: (n: number) => `${n}개 더 선택`,
    moreNeededBtn: (n: number) => `${n}개 더 선택하세요`,
    submit: "🎰 번호 제출하기",
    submitting: "제출 중...",
  },
  en: {
    eventBadge: "June 2026 Event",
    eventTitle: "Pick 6 Numbers — Win a Gift Voucher!",
    eventDesc: "Choose 6 numbers from 1–45. Match 3 or more to win a gift voucher.",
    match3: "3 matches", match4: "4 matches", match56: "5–6 matches",
    prize3: "₩5,000", prize4: "₩10,000", prize56: "₩50,000",
    loginRequired: "Login to Participate",
    loginDesc: "Please log in to join the event.",
    loginBtn: "Log In / Sign Up →",
    condTitle: "🎯 Requirements",
    condDesc: "Meet the conditions below to unlock number selection.",
    postLabel: (n: number) => `Write ${n} posts`,
    likeLabel: (n: number) => `Get ${n} likes`,
    condHint: "Post on the feed and collect likes to unlock participation!",
    resultTitle: (n: number) => `🎉 Result — ${n} match${n !== 1 ? "es" : ""}!`,
    winningLabel: "Winning Numbers",
    myNumLabel: "My Numbers",
    noMatch: "Better luck next time! 🍀",
    doneTitle: "Entry Submitted!",
    doneNumLabel: "My Numbers",
    pending: "⏳ Awaiting Results",
    pendingDesc: "You can check here once the winning numbers are announced.",
    pickTitle: (picked: number) => `🎯 Pick Numbers (${picked}/6)`,
    reset: "Reset",
    moreNeeded: (n: number) => `${n} more to go`,
    moreNeededBtn: (n: number) => `Pick ${n} more number${n !== 1 ? "s" : ""}`,
    submit: "🎰 Submit Numbers",
    submitting: "Submitting...",
  },
  ja: {
    eventBadge: "2026年6月イベント",
    eventTitle: "6つの番号を選択 — ギフト券プレゼント!",
    eventDesc: "1〜45の中から6つを選んでください。3つ以上一致でギフト券をプレゼント。",
    match3: "3つ一致", match4: "4つ一致", match56: "5〜6つ一致",
    prize3: "₩5,000", prize4: "₩10,000", prize56: "₩50,000",
    loginRequired: "ログインして参加",
    loginDesc: "イベントに参加するにはログインしてください。",
    loginBtn: "ログイン / 会員登録 →",
    condTitle: "🎯 参加条件",
    condDesc: "以下の条件を達成すると番号を選択できます。",
    postLabel: (n: number) => `投稿 ${n}件`,
    likeLabel: (n: number) => `いいね ${n}件獲得`,
    condHint: "フィードに投稿していいねをもらうと参加できます！",
    resultTitle: (n: number) => `🎉 結果発表 — ${n}つ一致!`,
    winningLabel: "当選番号",
    myNumLabel: "選択した番号",
    noMatch: "残念でした。次のイベントをお楽しみに！ 🍀",
    doneTitle: "参加完了!",
    doneNumLabel: "選択した番号",
    pending: "⏳ 結果発表待ち",
    pendingDesc: "当選番号発表後にここで確認できます。",
    pickTitle: (picked: number) => `🎯 番号選択 (${picked}/6)`,
    reset: "リセット",
    moreNeeded: (n: number) => `あと${n}つ`,
    moreNeededBtn: (n: number) => `あと${n}つ選んでください`,
    submit: "🎰 番号を提出する",
    submitting: "送信中...",
  },
  zh: {
    eventBadge: "2026年6月活动",
    eventTitle: "选择6个号码 — 赢取礼品券!",
    eventDesc: "从1~45中选择6个号码，匹配3个或以上即可获得礼品券。",
    match3: "匹配3个", match4: "匹配4个", match56: "匹配5~6个",
    prize3: "₩5,000", prize4: "₩10,000", prize56: "₩50,000",
    loginRequired: "登录后参与",
    loginDesc: "请登录以参加活动。",
    loginBtn: "登录 / 注册 →",
    condTitle: "🎯 参与条件",
    condDesc: "达成以下条件即可选择号码。",
    postLabel: (n: number) => `发帖 ${n}篇`,
    likeLabel: (n: number) => `获得 ${n}个点赞`,
    condHint: "在动态发帖并获得点赞后即可参与！",
    resultTitle: (n: number) => `🎉 结果公布 — 匹配${n}个!`,
    winningLabel: "中奖号码",
    myNumLabel: "我选择的号码",
    noMatch: "遗憾！期待下次活动！ 🍀",
    doneTitle: "参与完成!",
    doneNumLabel: "我选择的号码",
    pending: "⏳ 等待结果公布",
    pendingDesc: "中奖号码公布后可在此查看。",
    pickTitle: (picked: number) => `🎯 选择号码 (${picked}/6)`,
    reset: "重置",
    moreNeeded: (n: number) => `还需${n}个`,
    moreNeededBtn: (n: number) => `请再选${n}个号码`,
    submit: "🎰 提交号码",
    submitting: "提交中...",
  },
} as const;

type EventLangKey = keyof typeof EVENT_LABELS;

function getEL(lang: string) {
  return EVENT_LABELS[(lang as EventLangKey) in EVENT_LABELS ? (lang as EventLangKey) : "en"];
}

export default function EventTab({
  isLoggedIn,
  initialData,
  lang = "ko",
}: {
  isLoggedIn: boolean;
  initialData: EventData | null;
  lang?: string;
}) {
  const router = useRouter();
  const EL = getEL(lang);
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
              {EL.eventBadge}
            </span>
          </div>
          <h2 className="text-base font-black mb-1" style={{ color: "#f0e8c8" }}>
            {EL.eventTitle}
          </h2>
          <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            {EL.eventDesc}
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {[
              { match: EL.match3, prize: EL.prize3 },
              { match: EL.match4, prize: EL.prize4 },
              { match: EL.match56, prize: EL.prize56 },
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
          <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>{EL.loginRequired}</p>
          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            {EL.loginDesc}
          </p>
          <Link
            href="/login"
            className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
          >
            {EL.loginBtn}
          </Link>
        </div>
      )}

      {/* ── 로그인 + 조건 미충족 ── */}
      {isLoggedIn && !isEligible && !myEntry && (
        <div
          className="rounded-2xl p-5"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          <p className="text-sm font-bold mb-1" style={{ color: "#f0e8c8" }}>{EL.condTitle}</p>
          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            {EL.condDesc}
          </p>
          <div className="space-y-3">
            <ProgressBar
              value={myPostCount}
              max={EVENT_CONDITION.minPosts}
              label={EL.postLabel(EVENT_CONDITION.minPosts)}
            />
            <ProgressBar
              value={myLikeCount}
              max={EVENT_CONDITION.minLikes}
              label={EL.likeLabel(EVENT_CONDITION.minLikes)}
            />
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
            {EL.condHint}
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
                {EL.resultTitle(matchCount)}
                {prize && (
                  <span
                    className="ml-2 text-xs px-2 py-0.5 rounded-full font-black"
                    style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
                  >
                    {prize}
                  </span>
                )}
              </p>

              <p className="text-xs mb-2" style={{ color: GOLD }}>{EL.winningLabel}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {WINNING_NUMBERS.map((n) => (
                  <NumberBall key={n} n={n} selected={myEntry.numbers.includes(n)} winning disabled />
                ))}
              </div>

              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{EL.myNumLabel}</p>
              <div className="flex flex-wrap gap-2">
                {myEntry.numbers.map((n) => (
                  <NumberBall key={n} n={n} selected winning={WINNING_NUMBERS!.includes(n)} disabled />
                ))}
              </div>

              {matchCount < 3 && (
                <p className="text-xs mt-4 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {EL.noMatch}
                </p>
              )}
            </>
          ) : (
            /* 결과 발표 전 */
            <>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">✅</span>
                <p className="text-sm font-bold" style={{ color: "#f0e8c8" }}>{EL.doneTitle}</p>
              </div>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                {EL.doneNumLabel}
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
                <p className="text-xs font-bold" style={{ color: GOLD }}>{EL.pending}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {EL.pendingDesc}
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
              {EL.pickTitle(picked.length)}
            </p>
            {picked.length > 0 && (
              <button
                onClick={() => setPicked([])}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
              >
                {EL.reset}
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
                {EL.moreNeeded(6 - picked.length)}
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
            {isPending ? EL.submitting : picked.length === 6 ? EL.submit : EL.moreNeededBtn(6 - picked.length)}
          </button>
        </div>
      )}

    </div>
  );
}
