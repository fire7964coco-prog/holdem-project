// 필라-클러스터 로드맵 데이터 (EN 전체 6필라).
// "스타크래프트 전체 미니맵"처럼 사이트 전체 학습 지도에서 현재 글 위치를 보여주는 소스.
// docs/en-blog-pillar-cluster-map.md 기준. 슬러그는 전 언어 공유(hreflang) — 전부 실존 확인됨.
// 향후 KO·18언어 라벨 현지화로 확장.

export type ClusterNode = {
  slug: string;
  label: string; // 미니맵에 표시할 짧은 라벨
  group?: string; // 같은 필라 내 하위그룹 라벨(예: "Live Events"). 그룹 시작 노드에 표시.
};

export type PillarCluster = {
  id: string; // 아이콘 매핑용 키
  pillarSlug: string; // 필라 허브 slug (아코디언 헤더 = 허브)
  pillarLabel: string; // 필라 이름
  nodes: ClusterNode[]; // 클러스터 글 (허브 제외, 학습 순서)
};

export const EN_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "Rules",
    nodes: [
      { slug: "holdem-game-order", label: "Game Flow" },
      { slug: "holdem-betting-actions", label: "Betting Actions" },
      { slug: "holdem-blind-meaning", label: "Blinds" },
      { slug: "holdem-all-in-rules", label: "All-In Rules" },
      { slug: "holdem-showdown-rules", label: "Showdown" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "Hand Rankings",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "Flush vs Straight" },
      { slug: "holdem-kicker", label: "Kicker Rules" },
      { slug: "holdem-tiebreak-rules", label: "Tiebreakers" },
      { slug: "holdem-split-pot-rules", label: "Split Pots" },
      { slug: "holdem-reading-the-board", label: "Reading the Board" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "Odds & Math",
    nodes: [
      { slug: "holdem-pot-odds", label: "Pot Odds" },
      { slug: "holdem-outs", label: "Counting Outs" },
      { slug: "holdem-drawing-odds", label: "Drawing Odds" },
      { slug: "holdem-implied-odds", label: "Implied Odds" },
      { slug: "holdem-equity", label: "Equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "Strategy",
    nodes: [
      { slug: "holdem-positions", label: "Positions & Seats" },
      { slug: "holdem-position-play", label: "Position Play" },
      { slug: "holdem-starting-hands-chart", label: "Starting Hands" },
      { slug: "holdem-limping", label: "Limping" },
      { slug: "holdem-3bet", label: "3-Betting" },
      { slug: "holdem-continuation-bet", label: "C-Betting" },
      { slug: "holdem-when-to-fold", label: "When to Fold" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "Tournament",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "MTT vs Cash" },
      { slug: "holdem-icm", label: "ICM Basics" },
      { slug: "holdem-bubble", label: "Bubble Play" },
      { slug: "holdem-short-stack", label: "Short Stack" },
      { slug: "apt-incheon-2026-guide", label: "APT Incheon 2026", group: "Live Events" },
      { slug: "korea-poker-marathon-2026", label: "Korea Marathon 2026", group: "Live Events" },
      { slug: "wpt-australia-2026-guide", label: "WPT Australia 2026", group: "Live Events" },
      { slug: "ept-barcelona-2026-guide", label: "EPT Barcelona 2026", group: "Live Events" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "Glossary",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "Rake" },
      { slug: "holdem-fish", label: "Fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad Beat" },
    ],
  },
];

/** 이 slug가 속한 필라를 반환 (허브이거나 노드이면 매치). 없으면 null. */
export function clusterForSlug(slug: string): PillarCluster | null {
  for (const c of EN_CLUSTERS) {
    if (c.pillarSlug === slug || c.nodes.some((n) => n.slug === slug)) return c;
  }
  return null;
}
