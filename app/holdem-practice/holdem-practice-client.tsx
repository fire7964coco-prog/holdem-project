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

/**
 * ★`<SEO>`는 useEffect로 브라우저 제목·description을 **런타임에 덮어쓴다.**
 *   그래서 page.tsx의 metadata가 옳아도 여기 문자열이 다르면 브라우저에서는 이쪽이 이긴다
 *   (2026-08-04 `/tournaments`에서 같은 원인으로 사고가 났다). `page.tsx`가 이 상수를 import해
 *   **두 곳이 같은 문자열을 쓰도록** 묶어 뒀다 — 한쪽만 고쳐지는 사고를 구조적으로 막는다.
 */
export const SEO_TITLE = "홀덤 연습장 — 무료 텍사스 홀덤 연습 게임";
export const SEO_DESC =
  "가입 없이 무료 연습 포인트로 즐기는 텍사스 홀덤 연습 게임. AI 상대로 프리플랍부터 리버까지 베팅·폴드·레이즈 판단을 마음껏 시험해보세요. 현금 가치 없는 교육·연습용입니다.";

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

/**
 * 헤더 — **`ready` 게이트 바깥에서 렌더한다.**
 *
 * ★2026-08-05: 원래 게임 상태(`ready`)를 기다린 뒤에야 화면 전체를 그려서,
 *   정적 HTML에는 "불러오는 중…" 한 줄만 남고 **h1도 본문도 없었다**(빌드 산출물 실측 h1=0).
 *   그런데 이 페이지는 사이트맵에 priority 0.75로 색인 요청 중이고 robots도 index다.
 *   → 구글에 "중요하다"고 제출해 놓고 빈 껍데기를 주던 상태. GSC 28일 노출 0이 그 결과다.
 *   localStorage가 필요한 건 **게임 상태뿐**이므로 헤더·본문은 서버에서 그려도 된다.
 */
function PracticeHeader() {
  return (
    <header className="text-center mb-6">
      <h1 className="font-serif font-black text-3xl sm:text-4xl text-gold-gradient mb-2">
        홀덤 연습장
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base">
        무료 연습 포인트로 AI 상대와 텍사스 홀덤을 연습하세요. 실제 현금 가치가 없는 연습용입니다.
      </p>
    </header>
  );
}

/**
 * 게임 아래 본문 — 정적 HTML에 실리는 유일한 고유 콘텐츠다.
 *
 * 🔴 **카니발 금지선 (2026-08-05 GSC 실측으로 확정).** 아래 주제는 여기서 **설명하지 않고
 *    링크로만 보낸다.** 각각 이미 임자가 있고, 여기서 다루면 그 페이지를 갉아먹는다:
 *      · 룰·하는법·게임 방법·포커 입문 → /rules  ← 28일 208노출 독점. 가장 위험하다
 *        (⚠ 이 주석에서 경로에 굵게 표시를 붙이지 말 것 — 별표+슬래시가 주석을 조기 종료시킨다)
 *      · 족보 → /hands + /blog/holdem-hand-rankings (★이 둘은 이미 서로 카니발 중)
 *      · 게임 진행 순서 → /blog/holdem-game-order
 *      · 팟오즈·확률 → /calculator · /blog/holdem-pot-odds-calculation
 *      · 승률 시뮬레이션 → /win-rate-quiz
 *    이 페이지가 가져갈 영역은 **"연습"뿐**이다 — 사이트 전체에서 제목·설명·태그 어디에도
 *    "연습"을 노리는 글이 없고 GSC 상위 1,073개 쿼리에도 "연습"이 0건이다(=빈 영역).
 */
function PracticeGuide() {
  return (
    <section className="mt-10 max-w-3xl mx-auto text-[15px] leading-relaxed text-foreground/90">
      <h2 className="font-serif font-black text-xl mb-2">이 연습장에서 뭘 연습할 수 있나요?</h2>
      <p className="mb-4">
        <strong>판단</strong>입니다. 카드가 뭔지 아는 것과, 그 카드로 얼마를 걸지 정하는 것은 완전히 다른
        문제예요. 이 연습장은 프리플랍부터 리버까지 폴드·체크·콜·레이즈를 직접 눌러 보면서
        <strong> 돈이 걸리지 않은 상태로 그 결정을 반복</strong>하게 해줍니다. 실전에서 가장 비싸게 배우는
        것이 바로 이 부분이라, 여기서 미리 틀려 보는 값이 쌉니다.
      </p>

      <h2 className="font-serif font-black text-xl mb-2">돈이 드나요? 가입해야 하나요?</h2>
      <p className="mb-4">
        둘 다 아닙니다. 로그인 없이 바로 시작되고, 포인트는 브라우저에 저장될 뿐 현금이나 상품으로
        교환되지 않습니다. 포인트가 떨어지면 새로고침해서 다시 받으면 됩니다. 실제 베팅이 아니라
        <strong> 전략을 시험해 보는 도구</strong>입니다.
      </p>

      <h2 className="font-serif font-black text-xl mb-2">AI 상대는 실제 사람과 얼마나 다른가요?</h2>
      <p className="mb-4">
        솔직히 말하면 다릅니다. AI는 패의 세기에 따라 비교적 일관되게 움직이기 때문에, 사람이 자주 하는
        무리한 블러프나 감정적인 콜은 잘 나오지 않아요. 그래서 <strong>이 연습장으로 &ldquo;상대 읽기&rdquo;를
        훈련할 수는 없습니다.</strong> 대신 자기 판단의 습관 — 약한 패로 끝까지 따라가는지, 좋은 자리에서
        충분히 압박하는지 — 을 보는 데는 충분합니다. 그 습관이 실전 손실의 대부분을 만듭니다.
      </p>

      <h2 className="font-serif font-black text-xl mb-2">연습할 때 뭘 보면 실력이 느나요?</h2>
      <p className="mb-3">
        아무 생각 없이 여러 판 돌리는 것보다, 판마다 한 가지만 정해 놓고 보는 편이 훨씬 빨리 늡니다.
      </p>
      <ul className="list-disc pl-5 space-y-1.5 mb-4">
        <li><strong>폴드한 판을 세어 보세요.</strong> 열 판에 서너 판도 안 접고 있다면 너무 많이 들어가는 겁니다.</li>
        <li><strong>같은 패라도 자리에 따라 다르게 쳐보세요.</strong> 늦게 행동하는 자리가 왜 유리한지는 눌러 봐야 몸에 붙습니다.</li>
        <li><strong>진 판을 그냥 넘기지 마세요.</strong> 어느 시점에 접었어야 했는지 되짚는 게 이기는 판을 복기하는 것보다 남습니다.</li>
      </ul>

      <div className="rounded-xl border p-4 mb-4" style={{ borderColor: "hsl(var(--border))" }}>
        <p className="font-bold mb-2 text-sm">📚 이어서 보면 좋은 것</p>
        <ul className="space-y-1.5 text-sm">
          <li>
            규칙부터 다시 보고 싶다면 —{" "}
            <Link href="/rules" className="text-primary hover:underline">포커 게임 종류별 규칙</Link>
          </li>
          <li>
            어떤 패가 센지 헷갈린다면 —{" "}
            <Link href="/blog/holdem-hand-rankings" className="text-primary hover:underline">홀덤 족보 순위 10가지</Link>
          </li>
          <li>
            자리에 따라 왜 달라지는지 —{" "}
            <Link href="/blog/position-is-everything-in-holdem" className="text-primary hover:underline">홀덤 포지션이 왜 중요한가</Link>
          </li>
          <li>
            내 승률이 실제로 몇 %인지 —{" "}
            <Link href="/win-rate-quiz" className="text-primary hover:underline">승률 시뮬레이터</Link>
          </li>
          <li>
            콜이 이득인지 계산하려면 —{" "}
            <Link href="/blog/holdem-pot-odds-calculation" className="text-primary hover:underline">팟오즈 계산하는 법</Link>
          </li>
        </ul>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        본 연습장은 <strong>연습·교육용</strong>이며 포인트는 현금이나 상품으로 교환되지 않습니다.
        만 19세 미만은 이용할 수 없습니다.
      </p>
    </section>
  );
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

  // 🔴 게임 상태만 기다린다. 헤더·본문은 위에서 이미 서버가 그린 상태여야 한다(PracticeHeader 주석).
  if (!ready || !state) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
        <SEO title={SEO_TITLE} description={SEO_DESC} path="/holdem-practice" />
        <PracticeHeader />
        <div className="min-h-[40vh] flex items-center justify-center text-muted-foreground">
          불러오는 중...
        </div>
        <PracticeGuide />
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
      <SEO title={SEO_TITLE} description={SEO_DESC} path="/holdem-practice" />
      <PracticeHeader />

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

      <p className="text-center text-[11px] text-muted-foreground mt-5 leading-relaxed">
        진행이 막히면 이 페이지만 새로고침하세요.
      </p>

      <PracticeGuide />
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
