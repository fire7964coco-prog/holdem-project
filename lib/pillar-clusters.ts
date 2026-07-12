// 필라-클러스터 미니맵 데이터 (EN 프로토타입: Hand Rankings 필라만)
// "스타크래프트 미니맵"처럼 현재 글이 클러스터 어디쯤인지 보여주는 로드맵의 소스.
// 향후 6필라 전체 + 18언어 라벨 현지화로 확장 예정. slug는 전 언어 공유(hreflang).

export type ClusterNode = {
  slug: string;
  label: string; // 미니맵에 표시할 짧은 라벨 (220px 레일에 맞게 짧게)
};

export type PillarCluster = {
  pillarSlug: string; // 필라 허브 slug
  pillarLabel: string; // 미니맵 헤더에 표시할 필라 이름
  nodes: ClusterNode[]; // 클러스터 글 (허브 제외, 학습 순서)
};

// 각 클러스터는 허브(헤더) + 클러스터 글 노드(번호 리스트).
export const EN_CLUSTERS: PillarCluster[] = [
  {
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
];

/** 이 slug가 속한 클러스터를 반환 (허브이거나 노드이면 매치). 없으면 null. */
export function clusterForSlug(slug: string): PillarCluster | null {
  for (const c of EN_CLUSTERS) {
    if (c.pillarSlug === slug || c.nodes.some((n) => n.slug === slug)) return c;
  }
  return null;
}
