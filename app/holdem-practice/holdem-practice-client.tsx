"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { SEO } from "@/components/seo";
import { RANK_LABELS, SUIT_SYMBOLS, isRedSuit, type Card } from "./_lib/cards";
import {
  createInitialState,
  startHand,
  applyAction,
  getLegalActions,
  totalPot,
  START_CHIPS,
  BIG_BLIND,
  type GameState,
} from "./_lib/engine";
import { decideAction } from "./_lib/ai";

const POINTS_KEY = "holdem-practice-points";
const AI_DELAY_MS = 850;

function loadPoints(): number {
  if (typeof window === "undefined") return START_CHIPS;
  const raw = window.localStorage.getItem(POINTS_KEY);
  const n = raw ? parseInt(raw, 10) : NaN;
  return Number.isFinite(n) && n >= 0 ? n : START_CHIPS;
}

function savePoints(points: number) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(POINTS_KEY, String(points));
}

/** 핸드 시작 전 AI 스택이 바닥나면 자동 리바이 */
function rebuyAI(state: GameState): GameState {
  const next = structuredClone(state);
  for (const p of next.players) {
    if (!p.isHuman && p.chips < next.bigBlind) p.chips = START_CHIPS;
  }
  return next;
}

function PlayingCard({ card, hidden, small }: { card?: Card; hidden?: boolean; small?: boolean }) {
  const w = small ? "w-9 h-12 text-sm" : "w-12 h-16 text-lg sm:w-14 sm:h-20 sm:text-xl";
  if (hidden || !card) {
    return (
      <div
        className={`${w} rounded-md flex items-center justify-center font-black select-none`}
        style={{
          background: "repeating-linear-gradient(45deg,#3b1d12,#3b1d12 6px,#4a2417 6px,#4a2417 12px)",
          border: "1px solid rgba(212,175,55,0.35)",
        }}
        aria-hidden="true"
      >
        <span className="text-[10px] text-primary/60">♠</span>
      </div>
    );
  }
  const red = isRedSuit(card.suit);
  return (
    <div
      className={`${w} rounded-md bg-[#fdf8ee] flex flex-col items-center justify-center font-black leading-none select-none shadow-md`}
      style={{ border: "1px solid #d4af37", color: red ? "#c0392b" : "#0f172a" }}
    >
      <span>{RANK_LABELS[card.rank]}</span>
      <span>{SUIT_SYMBOLS[card.suit]}</span>
    </div>
  );
}

export default function HoldemPracticeClient() {
  const [state, setState] = useState<GameState | null>(null);
  const [points, setPoints] = useState<number>(START_CHIPS);
  const [raiseTo, setRaiseTo] = useState<number>(0);
  const [ready, setReady] = useState(false);
  const aiTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 최초 마운트: 포인트 로드 후 초기 상태 생성
  useEffect(() => {
    const p = loadPoints();
    setPoints(p);
    setState(createInitialState(p));
    setReady(true);
  }, []);

  // 핸드 종료 시 사람 포인트 저장
  useEffect(() => {
    if (!state) return;
    if (state.stage === "handover") {
      const humanChips = state.players[0].chips;
      setPoints(humanChips);
      savePoints(humanChips);
    }
  }, [state]);

  // AI 자동 행동
  useEffect(() => {
    if (!state) return;
    const isBetting = ["preflop", "flop", "turn", "river"].includes(state.stage);
    if (!isBetting) return;
    const seat = state.toAct;
    if (seat < 0) return;
    const actor = state.players[seat];
    if (actor.isHuman || actor.folded || actor.allIn) return;

    aiTimer.current = setTimeout(() => {
      setState((cur) => {
        if (!cur) return cur;
        const s2 = cur;
        const stillBetting = ["preflop", "flop", "turn", "river"].includes(s2.stage);
        if (!stillBetting || s2.toAct !== seat) return cur;
        const action = decideAction(s2, seat);
        return applyAction(s2, seat, action);
      });
    }, AI_DELAY_MS);

    return () => {
      if (aiTimer.current) clearTimeout(aiTimer.current);
    };
  }, [state]);

  const beginHand = useCallback(() => {
    setState((cur) => {
      if (!cur) return cur;
      return startHand(rebuyAI(cur));
    });
  }, []);

  const resetPoints = useCallback(() => {
    savePoints(START_CHIPS);
    setPoints(START_CHIPS);
    setState(createInitialState(START_CHIPS));
  }, []);

  // 사람 액션 핸들러
  const humanAct = useCallback(
    (type: "fold" | "check" | "call" | "raise", amountTo?: number) => {
      setState((cur) => {
        if (!cur || cur.toAct !== 0) return cur;
        return applyAction(cur, 0, { type, amountTo });
      });
    },
    []
  );

  // 사람 차례가 되면 레이즈 슬라이더 기본값 세팅
  useEffect(() => {
    if (!state || state.toAct !== 0) return;
    const legal = getLegalActions(state, 0);
    setRaiseTo(legal.minRaiseTo);
  }, [state]);

  if (!ready || !state) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-muted-foreground">
        불러오는 중...
      </div>
    );
  }

  const human = state.players[0];
  const isHumanTurn = state.toAct === 0 && ["preflop", "flop", "turn", "river"].includes(state.stage);
  const legal = isHumanTurn ? getLegalActions(state, 0) : null;
  const pot = totalPot(state);
  const handIdle = state.stage === "handover";
  const humanCantPlay = handIdle && human.chips < BIG_BLIND;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
      <SEO
        title="홀덤 연습장 — 무료 텍사스 홀덤 연습 게임"
        description="가입 없이 무료 연습 포인트로 즐기는 텍사스 홀덤 연습 게임. AI 상대로 프리플랍부터 리버까지 베팅 전략을 마음껏 시험해보세요."
        path="/holdem-practice"
      />

      {/* 헤더 */}
      <header className="text-center mb-6">
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-gold-gradient mb-2">
          홀덤 연습장
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          무료 연습 포인트로 AI 상대와 텍사스 홀덤을 연습하세요. 실제 현금 가치가 없는 연습용입니다.
        </p>
      </header>

      {/* 포인트 바 */}
      <div className="flex items-center justify-between gap-3 mb-5 rounded-xl border border-primary/25 bg-card/60 px-4 py-3">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">내 연습 포인트</div>
          <div className="text-2xl font-black text-primary">{points.toLocaleString()} P</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">블라인드</div>
          <div className="text-lg font-bold text-foreground">{state.smallBlind} / {state.bigBlind}</div>
        </div>
      </div>

      {/* 테이블 */}
      <div
        className="relative rounded-[2rem] border border-primary/30 px-4 py-6 sm:px-8 sm:py-8 mb-5"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(152 50% 14%) 0%, hsl(152 55% 7%) 70%)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* AI 좌석 */}
        <div className="flex justify-center gap-4 sm:gap-10 mb-6">
          {[1, 2].map((seat) => (
            <SeatView key={seat} state={state} seat={seat} pot={pot} />
          ))}
        </div>

        {/* 보드 + 팟 */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="text-sm font-bold text-primary">팟 {pot.toLocaleString()}</div>
          <div className="flex gap-1.5 sm:gap-2 min-h-[4rem] items-center">
            {state.board.length === 0 ? (
              <span className="text-muted-foreground text-sm">— 커뮤니티 카드 —</span>
            ) : (
              state.board.map((c, i) => <PlayingCard key={i} card={c} />)
            )}
          </div>
          <div className="text-xs text-muted-foreground h-4">{state.message}</div>
        </div>

        {/* 사람 좌석 */}
        <div className="flex justify-center">
          <SeatView state={state} seat={0} pot={pot} />
        </div>
      </div>

      {/* 결과 패널 */}
      {handIdle && state.results && (
        <div className="rounded-xl border border-primary/30 bg-card/70 px-4 py-4 mb-5 text-center">
          {state.results.map((r, i) => (
            <p key={i} className="text-sm text-foreground">
              <span className="font-bold text-primary">
                {r.winners.map((id) => state.players[id].name).join(", ")}
              </span>
              {" 님이 "}
              <span className="font-bold">{r.amount.toLocaleString()}</span>
              {" 획득"}
              {r.handName ? ` — ${r.handName}` : ""}
            </p>
          ))}
        </div>
      )}

      {/* 액션 영역 */}
      <div className="rounded-xl border border-primary/25 bg-card/60 px-4 py-4">
        {handIdle ? (
          <div className="flex flex-col items-center gap-3">
            {humanCantPlay ? (
              <>
                <p className="text-sm text-destructive font-semibold">
                  포인트가 부족합니다. 연습 포인트를 리셋하세요.
                </p>
                <button
                  type="button"
                  onClick={resetPoints}
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:brightness-110 transition"
                >
                  연습 포인트 10,000 리셋
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={beginHand}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition"
              >
                {state.handNumber === 0 ? "게임 시작" : "다음 핸드"}
              </button>
            )}
          </div>
        ) : isHumanTurn && legal ? (
          <HumanControls
            legal={legal}
            raiseTo={raiseTo}
            setRaiseTo={setRaiseTo}
            pot={pot}
            currentBet={state.currentBet}
            onAct={humanAct}
          />
        ) : (
          <div className="text-center text-muted-foreground text-sm py-2">
            상대가 행동 중입니다...
          </div>
        )}
      </div>

      {/* 안내 / 면책 */}
      <p className="text-center text-[11px] text-muted-foreground mt-5 leading-relaxed">
        본 게임은 <strong>연습·교육용</strong>이며 포인트는 현금이나 상품으로 교환되지 않습니다.<br />
        실제 베팅이 아닌 전략 연습 도구입니다. 진행이 막히면 이 페이지만 새로고침하세요.
      </p>

      <div className="text-center mt-4">
        <Link href="/blog/holdem-button-position" className="text-sm text-primary hover:underline">
          → 포지션별 전략이 궁금하다면: 홀덤 버튼 포지션 가이드
        </Link>
      </div>
    </div>
  );
}

function SeatView({ state, seat, pot }: { state: GameState; seat: number; pot: number }) {
  const p = state.players[seat];
  const isTurn = state.toAct === seat && ["preflop", "flop", "turn", "river"].includes(state.stage);
  const showCards = p.isHuman || state.stage === "handover";
  const revealName = state.reveal?.[p.id];
  const isDealer = state.dealer === seat;

  return (
    <div
      className={`flex flex-col items-center gap-1.5 rounded-xl px-3 py-2.5 transition ${
        isTurn ? "bg-primary/15 ring-2 ring-primary" : "bg-black/20"
      } ${p.folded ? "opacity-40" : ""}`}
    >
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold text-foreground">{p.name}</span>
        {isDealer && (
          <span className="w-5 h-5 rounded-full bg-[#fdf8ee] text-[#0f172a] text-[10px] font-black flex items-center justify-center">
            D
          </span>
        )}
      </div>
      <div className="flex gap-1">
        {p.hole.length === 0 ? (
          <>
            <PlayingCard hidden small />
            <PlayingCard hidden small />
          </>
        ) : (
          p.hole.map((c, i) => <PlayingCard key={i} card={c} hidden={!showCards} small />)
        )}
      </div>
      <div className="text-xs font-bold text-primary">{p.chips.toLocaleString()}</div>
      {p.bet > 0 && (
        <div className="text-[11px] text-amber-300">베팅 {p.bet.toLocaleString()}</div>
      )}
      {p.folded && <div className="text-[11px] text-muted-foreground">폴드</div>}
      {p.allIn && !p.folded && <div className="text-[11px] text-destructive font-bold">올인</div>}
      {revealName && !p.folded && (
        <div className="text-[11px] text-emerald-300 font-semibold">{revealName}</div>
      )}
    </div>
  );
}

function HumanControls({
  legal,
  raiseTo,
  setRaiseTo,
  pot,
  currentBet,
  onAct,
}: {
  legal: ReturnType<typeof getLegalActions>;
  raiseTo: number;
  setRaiseTo: (v: number) => void;
  pot: number;
  currentBet: number;
  onAct: (type: "fold" | "check" | "call" | "raise", amountTo?: number) => void;
}) {
  const canSlide = legal.canRaise && legal.maxRaiseTo > legal.minRaiseTo;
  const potRaise = Math.min(legal.maxRaiseTo, Math.max(legal.minRaiseTo, currentBet + pot));

  return (
    <div className="flex flex-col gap-3">
      {/* 레이즈 슬라이더 */}
      {legal.canRaise && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>레이즈 금액</span>
            <span className="text-primary font-bold text-sm">{raiseTo.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={legal.minRaiseTo}
            max={legal.maxRaiseTo}
            step={50}
            value={Math.min(Math.max(raiseTo, legal.minRaiseTo), legal.maxRaiseTo)}
            onChange={(e) => setRaiseTo(Number(e.target.value))}
            disabled={!canSlide}
            className="w-full accent-[#d4af37]"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setRaiseTo(legal.minRaiseTo)}
              className="px-2.5 py-1 text-[11px] rounded border border-primary/30 text-muted-foreground hover:text-primary"
            >
              최소
            </button>
            <button
              type="button"
              onClick={() => setRaiseTo(potRaise)}
              className="px-2.5 py-1 text-[11px] rounded border border-primary/30 text-muted-foreground hover:text-primary"
            >
              팟
            </button>
            <button
              type="button"
              onClick={() => setRaiseTo(legal.maxRaiseTo)}
              className="px-2.5 py-1 text-[11px] rounded border border-primary/30 text-muted-foreground hover:text-primary"
            >
              올인
            </button>
          </div>
        </div>
      )}

      {/* 액션 버튼 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => onAct("fold")}
          className="px-4 py-3 rounded-lg bg-destructive/90 text-white font-bold hover:brightness-110 transition"
        >
          폴드
        </button>
        {legal.canCheck ? (
          <button
            type="button"
            onClick={() => onAct("check")}
            className="px-4 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-110 transition"
          >
            체크
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAct("call")}
            disabled={!legal.canCall}
            className="px-4 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-110 transition disabled:opacity-40"
          >
            콜 {legal.callAmount.toLocaleString()}
          </button>
        )}
        <button
          type="button"
          onClick={() => onAct("raise", raiseTo)}
          disabled={!legal.canRaise}
          className="col-span-2 sm:col-span-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:brightness-110 transition disabled:opacity-40"
        >
          {legal.canCheck ? "벳" : "레이즈"} {raiseTo.toLocaleString()}
        </button>
      </div>
    </div>
  );
}
