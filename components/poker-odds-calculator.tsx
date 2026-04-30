"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

const DRAW_PRESETS = [
  { label: "직접 입력", outs: 0, custom: true },
  { label: "플러시 드로우", outs: 9 },
  { label: "양방 스트레이트 드로우", outs: 8 },
  { label: "플러시 + 거트샷 콤보", outs: 12 },
  { label: "거트샷 스트레이트", outs: 4 },
  { label: "투페어 → 풀하우스", outs: 4 },
  { label: "오버카드 2장", outs: 6 },
  { label: "원페어 → 트리플", outs: 2 },
];

function getEquityColor(pct: number) {
  if (pct >= 35) return "text-green-400";
  if (pct >= 20) return "text-yellow-400";
  return "text-red-400";
}

function getEquityBg(pct: number) {
  if (pct >= 35) return "bg-green-400";
  if (pct >= 20) return "bg-yellow-400";
  return "bg-red-400";
}

function getEquityLabel(pct: number) {
  if (pct >= 45) return "매우 유리 🔥";
  if (pct >= 35) return "유리 ✅";
  if (pct >= 25) return "보통 ⚠️";
  if (pct >= 15) return "불리 ❌";
  return "매우 불리 💀";
}

function calcExactFlop(outs: number) {
  if (outs <= 0) return 0;
  const deck = 47;
  const p_miss_turn = (deck - outs) / deck;
  const p_miss_river = (deck - 1 - outs) / (deck - 1);
  return Math.round((1 - p_miss_turn * p_miss_river) * 1000) / 10;
}

function calcExactTurn(outs: number) {
  if (outs <= 0) return 0;
  return Math.round((outs / 46) * 1000) / 10;
}

export function PokerOddsCalculator() {
  const [tab, setTab] = useState<"outs" | "pot">("outs");

  const [selectedPreset, setSelectedPreset] = useState(1);
  const [customOuts, setCustomOuts] = useState(9);
  const [stage, setStage] = useState<"flop" | "turn">("flop");

  const [potSize, setPotSize] = useState(10000);
  const [callAmount, setCallAmount] = useState(3000);
  const [myEquity, setMyEquity] = useState(20);

  const preset = DRAW_PRESETS[selectedPreset];
  const outs = preset.custom ? customOuts : preset.outs;
  const flopPct = calcExactFlop(outs);
  const turnPct = calcExactTurn(outs);
  const displayPct = stage === "flop" ? flopPct : turnPct;

  const potOdds = callAmount > 0 ? Math.round((callAmount / (potSize + callAmount)) * 1000) / 10 : 0;
  const potDecision = myEquity > potOdds;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="my-10 rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-[#0a1a0d] to-[#0d1f12] shadow-2xl shadow-black/40"
    >
      <div className="px-6 pt-6 pb-4 border-b border-primary/20">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">포커 확률 계산기</h3>
            <p className="text-xs text-muted-foreground">아웃츠와 팟 오즈를 실시간으로 계산하세요</p>
          </div>
        </div>
      </div>

      <div className="flex border-b border-primary/20">
        {(["outs", "pot"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-semibold transition-all ${
              tab === t
                ? "text-primary border-b-2 border-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t === "outs" ? "🃏 아웃츠 계산기" : "💰 팟 오즈 계산기"}
          </button>
        ))}
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {tab === "outs" ? (
            <motion.div
              key="outs"
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  드로우 종류 선택
                </label>
                <select
                  value={selectedPreset}
                  onChange={(e) => setSelectedPreset(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  {DRAW_PRESETS.map((p, i) => (
                    <option key={i} value={i}>
                      {p.label}{!p.custom ? ` (아웃츠 ${p.outs}개)` : ""}
                    </option>
                  ))}
                </select>
              </div>

              {preset.custom && (
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    아웃츠 수 직접 입력: <span className="text-primary">{customOuts}개</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={customOuts}
                    onChange={(e) => setCustomOuts(Number(e.target.value))}
                    className="w-full accent-primary h-2 rounded-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1개</span><span>10개</span><span>20개</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  현재 게임 단계
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["flop", "turn"] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setStage(s)}
                      className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                        stage === s
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {s === "flop" ? "🃏 플랍 이후" : "🔄 턴 이후"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-card border border-border p-5">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {stage === "flop" ? "플랍 이후 완성 확률 (Rule of 4)" : "턴 이후 완성 확률 (Rule of 2)"}
                    </p>
                    <div className={`text-5xl font-black ${getEquityColor(displayPct)}`}>
                      {displayPct}%
                    </div>
                    <p className={`text-sm font-bold mt-1 ${getEquityColor(displayPct)}`}>
                      {getEquityLabel(displayPct)}
                    </p>
                  </div>
                  <div className="hidden sm:block text-right text-xs text-muted-foreground space-y-1">
                    <div>Rule of 4: <span className="text-foreground font-bold">{outs} × 4 = ~{outs * 4}%</span></div>
                    <div>Rule of 2: <span className="text-foreground font-bold">{outs} × 2 = ~{outs * 2}%</span></div>
                    <div className="text-primary/70">정밀 계산값 표시 중</div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-3 rounded-full ${getEquityBg(displayPct)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(displayPct, 100)}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className={`rounded-xl p-4 border ${stage === "flop" ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}>
                  <p className="text-xs text-muted-foreground mb-1">플랍 이후</p>
                  <p className={`text-2xl font-black ${getEquityColor(flopPct)}`}>{flopPct}%</p>
                </div>
                <div className={`rounded-xl p-4 border ${stage === "turn" ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}>
                  <p className="text-xs text-muted-foreground mb-1">턴 이후</p>
                  <p className={`text-2xl font-black ${getEquityColor(turnPct)}`}>{turnPct}%</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="pot"
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    현재 팟 크기 (원)
                  </label>
                  <input
                    type="number"
                    value={potSize}
                    onChange={(e) => setPotSize(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="10000"
                    step={1000}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    내 콜 금액 (원)
                  </label>
                  <input
                    type="number"
                    value={callAmount}
                    onChange={(e) => setCallAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="3000"
                    step={500}
                  />
                </div>
              </div>

              <div className="rounded-xl bg-card border border-border p-4">
                <p className="text-xs text-muted-foreground mb-1">필요 최소 승률 (팟 오즈)</p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-primary">{potOdds}%</span>
                  <span className="text-sm text-muted-foreground mb-1">이상이면 콜이 유리</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  계산식: {callAmount.toLocaleString()} ÷ ({potSize.toLocaleString()} + {callAmount.toLocaleString()}) = {potOdds}%
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  내 핸드 예상 승률: <span className="text-primary">{myEquity}%</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={85}
                  value={myEquity}
                  onChange={(e) => setMyEquity(Number(e.target.value))}
                  className="w-full accent-primary h-2 rounded-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1%</span><span>거트샷 8.7%</span><span>플러시 19%</span><span>85%</span>
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 0.3 }}
                key={potDecision ? "call" : "fold"}
                className={`rounded-2xl p-5 border-2 text-center ${
                  potDecision
                    ? "border-green-500/50 bg-green-500/10"
                    : "border-red-500/50 bg-red-500/10"
                }`}
              >
                <div className="text-4xl mb-2">{potDecision ? "✅" : "❌"}</div>
                <div className={`text-2xl font-black mb-2 ${potDecision ? "text-green-400" : "text-red-400"}`}>
                  {potDecision ? "콜 (수익적)" : "폴드 권장"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {potDecision
                    ? `내 승률 ${myEquity}% > 팟 오즈 ${potOdds}% → 장기적으로 이익`
                    : `내 승률 ${myEquity}% < 팟 오즈 ${potOdds}% → 장기적으로 손해`}
                </p>
              </motion.div>

              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">임플라이드 오즈 참고:</strong> 상대 스택이 많다면 핸드 완성 시 추가 수익 기대 가능. 팟 오즈보다 낮아도 콜이 맞는 경우가 있어요.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
