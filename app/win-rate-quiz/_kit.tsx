"use client";

import { useId } from "react";
import type { Card } from "./_equity";

/**
 * 카드·칩·딜러 버튼 — 유튜브 공용 부품 kit-v1 «EMERALD ROOM»(2026-10-01 · 자체 SVG)을 옮긴 것 (S-034 ⑥).
 * 원본: 유튜브/productions/shared-assets/poker-scene/kit-v1/{cards,chips,ui}/*.svg
 *
 * ★파일(public/)로 복사하지 않고 인라인으로 그린다:
 *   ① 한 판에 카드가 최대 20장 넘게 깔리는데 장마다 요청이 생기고, 뒤집기 애니메이션 순간에
 *     아직 안 받은 그림이 빈칸으로 번쩍인다 ② 원본 앞면은 220×308 크기용 배치(모서리 글자 43px)라
 *     폰 좌석 카드(폭 30px)에서는 글자가 6px로 줄어 읽히지 않는다 → 같은 종이·잉크·무늬를 쓰되
 *     «큰 숫자 + 큰 무늬» 배치로 다시 놓았다. 무늬 path·색은 원본 그대로(색은 globals.css `.wrq` 토큰).
 * ★SVG 안 id(그라디언트)는 useId로 판마다 겹치지 않게 — 한 화면에 카드 여러 장이 같은 id를 쓰면
 *   첫 장의 정의를 나머지가 끌어다 쓴다.
 */

/** kit-v1 무늬 path(100×100 상자) — cards/A{s,h,d,c}.svg 원본 */
const SUIT_PATH: Record<string, string> = {
  "♠": "M50 4C39 21 8 36 8 57C8 78 33 85 46 68C43 80 36 88 28 96H72C64 88 57 80 54 68C67 85 92 78 92 57C92 36 61 21 50 4Z",
  "♥": "M50 94C40 83 7 60 7 32C7 4 40 0 50 22C60 0 93 4 93 32C93 60 60 83 50 94Z",
  "♦": "M50 3L88 50L50 97L12 50Z",
  "♣": "M50 6C28 6 25 32 36 42C13 33 3 48 8 65C12 81 35 86 46 67C43 80 36 88 29 96H71C64 88 57 80 54 67C65 86 88 81 92 65C97 48 87 33 64 42C75 32 72 6 50 6Z",
};
const SUIT_NAME: Record<string, string> = { "♠": "spades", "♥": "hearts", "♦": "diamonds", "♣": "clubs" };

const v = (name: string) => ({ fill: `var(--wrq-${name})` });

/** 앞면 */
export function KitCardFace({ card }: { card: Card }) {
  const id = useId();
  const ink = card.suit === "♥" || card.suit === "♦" ? "card-red" : "card-black";
  const ten = card.rank === "10";
  return (
    <svg viewBox="0 0 220 308" className="block w-full h-full" role="img" aria-label={`${card.rank} of ${SUIT_NAME[card.suit]}`}>
      <defs>
        <linearGradient id={`${id}p`} x2=".8" y2="1">
          <stop style={{ stopColor: "var(--wrq-card-paper)" }} />
          <stop offset="1" style={{ stopColor: "var(--wrq-card-paper-2)" }} />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="214" height="302" rx="20" fill={`url(#${id}p)`} strokeWidth="6" style={{ stroke: "var(--wrq-card-edge)" }} />
      <text x={ten ? 12 : 22} y="122" fontFamily="Georgia,serif" fontWeight="700" fontSize="124"
        letterSpacing={ten ? -14 : 0} style={v(ink)}>{card.rank}</text>
      <path d={SUIT_PATH[card.suit]} transform="translate(98 170) scale(1.06)" style={v(ink)} />
    </svg>
  );
}

/** 뒷면 — kit-v1 cards/back-emerald.svg(작은 크기에서 뭉개지는 직조 무늬는 뺐다) */
export function KitCardBack() {
  return (
    <svg viewBox="0 0 220 308" className="block w-full h-full" aria-hidden>
      <rect x="3" y="3" width="214" height="302" rx="20" strokeWidth="6" style={{ ...v("back-paper"), stroke: "var(--wrq-card-edge)" }} />
      <rect x="16" y="16" width="188" height="276" rx="11" style={v("back")} />
      <rect x="26" y="26" width="168" height="256" rx="7" fill="none" strokeWidth="5" style={{ stroke: "var(--wrq-back-line)" }} />
      <path d="M110 92L152 154 110 216 68 154Z" fill="none" strokeWidth="6" style={{ stroke: "var(--wrq-back-line)" }} />
      <path d={SUIT_PATH["♠"]} transform="translate(86 130) scale(0.48)" style={v("back-line")} />
    </svg>
  );
}

/** 빈 자리 — 아직 안 깐 보드 · 폴드한 좌석. 테두리만 두어 시선을 끌지 않는다 */
export function KitCardSlot() {
  return (
    <svg viewBox="0 0 220 308" className="block w-full h-full" aria-hidden>
      <rect x="6" y="6" width="208" height="296" rx="18" fill="none" strokeWidth="8" strokeDasharray="22 14"
        style={{ stroke: "var(--wrq-slot)" }} />
    </svg>
  );
}

/** 딜러 버튼 — kit-v1 ui/dealer.svg */
export function KitDealer({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size} className="shrink-0" role="img" aria-label="Dealer">
      <circle cx="64" cy="68" r="56" style={v("dealer-ink")} />
      <circle cx="64" cy="62" r="56" strokeWidth="4" style={{ ...v("dealer"), stroke: "var(--wrq-dealer-edge)" }} />
      <text x="64" y="84" textAnchor="middle" fontSize="62" fontFamily="Georgia,serif" fontWeight="700" style={v("dealer-ink")}>D</text>
    </svg>
  );
}

/** 무표기 금색 칩 낱개 — kit-v1 chips/chip-gold.svg(가장자리 띠 8개 · 금액은 옆 글자로) */
export function KitChip({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} className="shrink-0" aria-hidden>
      <circle cx="128" cy="134" r="110" style={v("chip-lo")} />
      <circle cx="128" cy="125" r="109" style={v("chip")} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <path key={a} d="M114 16h28l-4 32h-20Z" transform={`rotate(${a} 128 125)`} style={v("chip-stripe")} />
      ))}
      <circle cx="128" cy="125" r="74" strokeWidth="6" style={{ ...v("chip-lo"), stroke: "var(--wrq-chip-hi)" }} />
    </svg>
  );
}
