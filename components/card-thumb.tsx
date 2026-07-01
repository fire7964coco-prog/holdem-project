type Suit = "♠" | "♥" | "♦" | "♣";
interface CardData { rank: string; suit: Suit; rank2?: string; suit2?: Suit; }

const CARD_MAP: Record<string, CardData> = {
  "ak-offsuit-strategy":              { rank: "A", suit: "♠", rank2: "K",  suit2: "♣" },
  "holdem-split-pot-rules":           { rank: "8", suit: "♥", rank2: "8",  suit2: "♠" },
  "holdem-vs-7poker-hand-rankings":   { rank: "7", suit: "♥", rank2: "J",  suit2: "♠" },
  "holdem-hand-rankings-confusing":   { rank: "Q", suit: "♠", rank2: "J",  suit2: "♣" },
  "holdem-tiebreak-rules":            { rank: "5", suit: "♦", rank2: "5",  suit2: "♣" },
  "holdem-hand-rankings":             { rank: "A", suit: "♥", rank2: "K",  suit2: "♦" },
  "holdem-odds-calculator":           { rank: "9", suit: "♣", rank2: "8",  suit2: "♣" },
  "holdem-blind-meaning":             { rank: "K", suit: "♦", rank2: "K",  suit2: "♣" },
  "holdem-small-blind-role":          { rank: "5", suit: "♠", rank2: "10", suit2: "♦" },
  "holdem-check-meaning":             { rank: "7", suit: "♣", rank2: "7",  suit2: "♦" },
  "holdem-button-position":           { rank: "A", suit: "♣", rank2: "9",  suit2: "♣" },
  "holdem-3bet-strategy":             { rank: "A", suit: "♦", rank2: "5",  suit2: "♦" },
  "holdem-range-meaning":             { rank: "Q", suit: "♣", rank2: "10", suit2: "♣" },
  "holdem-cbet-strategy":             { rank: "K", suit: "♠", rank2: "Q",  suit2: "♠" },
  "holdem-check-raise":               { rank: "6", suit: "♥", rank2: "6",  suit2: "♣" },
  "holdem-value-bet-sizing":          { rank: "A", suit: "♥", rank2: "J",  suit2: "♥" },
  "holdem-bubble-strategy":           { rank: "4", suit: "♠", rank2: "4",  suit2: "♦" },
  "icm-poker-meaning":                { rank: "Q", suit: "♦", rank2: "8",  suit2: "♦" },
  "pocket-aces-aa-strategy":          { rank: "A", suit: "♠", rank2: "A",  suit2: "♦" },
  "pocket-kings-kk-strategy":         { rank: "K", suit: "♠", rank2: "K",  suit2: "♥" },
  "holdem-pub-legal":                 { rank: "5", suit: "♣", rank2: "2",  suit2: "♣" },
  "holdem-pub-first-visit-guide":     { rank: "J", suit: "♦", rank2: "8",  suit2: "♠" },
  "holdem-game-order":                { rank: "A", suit: "♥", rank2: "Q",  suit2: "♠" },
  "bluffing-strategy-when-and-how":   { rank: "J", suit: "♥", rank2: "9",  suit2: "♦" },
  "position-is-everything-in-holdem": { rank: "K", suit: "♣", rank2: "J",  suit2: "♠" },
  "wsop-2025-tournament-guide":       { rank: "K", suit: "♥", rank2: "J",  suit2: "♥" },
  "when-to-fold-preflop-holdem":      { rank: "7", suit: "♠", rank2: "2",  suit2: "♣" },
  "holdem-starting-hand-range":       { rank: "A", suit: "♣", rank2: "A",  suit2: "♥" },
  "holdem-outs-calculation":          { rank: "9", suit: "♦", rank2: "8",  suit2: "♦" },
  "holdem-overbet-strategy":          { rank: "10", suit: "♠", rank2: "10", suit2: "♣" },
  "holdem-beginner-mistakes-10":      { rank: "8", suit: "♥", rank2: "3",  suit2: "♠" },
  "apt-jeju-classic-2026-guide":      { rank: "A", suit: "♦", rank2: "J",  suit2: "♦" },
  "holdem-flush-vs-straight":         { rank: "7", suit: "♣", rank2: "6",  suit2: "♣" },
  "holdem-pot-odds-calculation":      { rank: "10", suit: "♦", rank2: "9",  suit2: "♦" },
  "holdem-probability":               { rank: "J", suit: "♠", rank2: "10", suit2: "♥" },
  "apt-incheon-2026-guide":           { rank: "A", suit: "♠", rank2: "K",  suit2: "♥" },
  "appt-korea-2026-guide":            { rank: "K", suit: "♦", rank2: "Q",  suit2: "♦" },
};

const FALLBACK_POOL: CardData[] = [
  { rank: "Q", suit: "♥",  rank2: "9",  suit2: "♥" },
  { rank: "J", suit: "♣",  rank2: "10", suit2: "♣" },
  { rank: "8", suit: "♠",  rank2: "8",  suit2: "♦" },
  { rank: "A", suit: "♦",  rank2: "4",  suit2: "♦" },
  { rank: "K", suit: "♣",  rank2: "9",  suit2: "♣" },
  { rank: "10", suit: "♥", rank2: "7",  suit2: "♥" },
  { rank: "6", suit: "♠",  rank2: "5",  suit2: "♠" },
  { rank: "Q", suit: "♠",  rank2: "6",  suit2: "♦" },
];

function getFallbackCard(slug: string): CardData {
  const hash = [...slug].reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return FALLBACK_POOL[hash % FALLBACK_POOL.length];
}

function isRed(suit: Suit) { return suit === "♥" || suit === "♦"; }

function PokerCard({ rank, suit, w, h, tilt = 0, shadow = true }:
  { rank: string; suit: Suit; w: number; h: number; tilt?: number; shadow?: boolean }) {
  const color = isRed(suit) ? "#c0392b" : "#0f172a";
  const fontSize = rank === "10" ? Math.round(h * 0.14) : Math.round(h * 0.16);
  const suitSize = Math.round(h * 0.42);
  const cornerFontSize = Math.round(h * 0.14);
  const cornerSuitSize = Math.round(h * 0.12);
  void fontSize;

  return (
    <g transform={`rotate(${tilt})`} style={{ filter: shadow ? "drop-shadow(0 3px 8px rgba(0,0,0,0.45))" : "none" }}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={Math.round(w * 0.1)}
        fill="#fdf8ee" stroke="#d4af37" strokeWidth={1.2} />
      <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize + 2}
        fontSize={cornerFontSize} fill={color} fontFamily="Georgia,Times New Roman,serif" fontWeight="bold">{rank}</text>
      <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize * 2 + 4}
        fontSize={cornerSuitSize} fill={color} fontFamily="Georgia,Times New Roman,serif">{suit}</text>
      <text x={0} y={suitSize * 0.26} textAnchor="middle"
        fontSize={suitSize} fill={color} fontFamily="Georgia,Times New Roman,serif">{suit}</text>
      <g transform="rotate(180)">
        <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize + 2}
          fontSize={cornerFontSize} fill={color} fontFamily="Georgia,Times New Roman,serif" fontWeight="bold">{rank}</text>
        <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize * 2 + 4}
          fontSize={cornerSuitSize} fill={color} fontFamily="Georgia,Times New Roman,serif">{suit}</text>
      </g>
    </g>
  );
}

export default function CardThumb({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const data = CARD_MAP[slug] ?? getFallbackCard(slug);
  const { rank, suit, rank2, suit2 } = data;

  const W = featured ? 90 : 60;
  const H = Math.round(W * 1.4);
  const svgW = featured ? 240 : 160;
  const svgH = featured ? 160 : 110;

  return (
    <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: "visible" }}>
      <g transform={`translate(${svgW / 2 - W * 0.18}, ${svgH / 2})`}>
        {rank2 && suit2 && (
          <PokerCard rank={rank2} suit={suit2 as Suit} w={W} h={H} tilt={-8} shadow />
        )}
      </g>
      <g transform={`translate(${svgW / 2 + W * 0.18}, ${svgH / 2})`}>
        <PokerCard rank={rank} suit={suit} w={W} h={H} tilt={8} shadow />
      </g>
    </svg>
  );
}
