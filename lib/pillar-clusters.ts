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

// 한국어 필라-클러스터 로드맵 (KO 8필라, 실존 슬러그만 — 라이브 :::pillarhub에서 추출·전수 검증).
// EN(6필라)과 구조가 다름: KO는 펍·포지션·스타팅핸드 필라가 별도이고 glossary 필라 없음.
export const KO_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "holdem-rules",
    pillarLabel: "규칙",
    nodes: [
      { slug: "holdem-game-order", label: "게임 진행 6단계" },
      { slug: "holdem-blind-meaning", label: "블라인드 뜻" },
      { slug: "holdem-check-meaning", label: "체크 뜻" },
      { slug: "holdem-beginner-mistakes-10", label: "초보 실수 10가지" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "족보",
    nodes: [
      { slug: "holdem-hand-rankings-confusing", label: "헷갈리는 족보 TOP7" },
      { slug: "holdem-flush-vs-straight", label: "플러시 vs 스트레이트" },
      { slug: "holdem-tiebreak-rules", label: "족보가 같을 때" },
      { slug: "holdem-split-pot-rules", label: "스플릿 팟" },
      { slug: "holdem-vs-7poker-hand-rankings", label: "홀덤 vs 7포커 족보" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "확률·수학",
    nodes: [
      { slug: "holdem-outs-calculation", label: "아웃츠 계산법" },
      { slug: "holdem-pot-odds-calculation", label: "팟오즈 계산" },
      { slug: "holdem-implied-odds", label: "임플라이드 오즈" },
      { slug: "holdem-odds-calculator", label: "확률 빠른 계산" },
    ],
  },
  {
    id: "starting",
    pillarSlug: "holdem-starting-hand-range",
    pillarLabel: "스타팅 핸드",
    nodes: [
      { slug: "when-to-fold-preflop-holdem", label: "언제 폴드하나" },
      { slug: "holdem-raise-how-much", label: "레이즈 얼마나" },
      { slug: "ak-offsuit-strategy", label: "AK 오프수트" },
      { slug: "pocket-aces-aa-strategy", label: "포켓 AA" },
      { slug: "pocket-kings-kk-strategy", label: "포켓 KK" },
    ],
  },
  {
    id: "position",
    pillarSlug: "position-is-everything-in-holdem",
    pillarLabel: "포지션",
    nodes: [
      { slug: "holdem-button-position", label: "버튼 포지션" },
      { slug: "holdem-small-blind-role", label: "스몰블라인드 역할" },
      { slug: "holdem-blind-steal", label: "블라인드 스틸" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "전략",
    nodes: [
      { slug: "holdem-range-meaning", label: "레인지란" },
      { slug: "holdem-3bet-strategy", label: "3벳 전략" },
      { slug: "holdem-cbet-strategy", label: "C벳 전략" },
      { slug: "holdem-check-raise", label: "체크레이즈" },
      { slug: "holdem-value-bet-sizing", label: "밸류벳 사이즈" },
      { slug: "bluffing-strategy-when-and-how", label: "블러핑" },
      { slug: "holdem-overbet-strategy", label: "오버벳" },
      { slug: "holdem-bankroll-management", label: "뱅크롤 관리" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament-how-to-enter",
    pillarLabel: "토너먼트",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "토너먼트 vs 캐시게임" },
      { slug: "holdem-tournament-buy-in-cost", label: "바이인·참가비" },
      { slug: "holdem-tournament-schedule-check", label: "일정 확인법" },
      { slug: "holdem-bubble-strategy", label: "버블 전략" },
      { slug: "icm-poker-meaning", label: "ICM이란" },
      { slug: "holdem-tournament-tax-guide", label: "대회 세금" },
    ],
  },
  {
    id: "pub",
    pillarSlug: "holdem-pub-guide",
    pillarLabel: "홀덤펍",
    nodes: [
      { slug: "holdem-pub-first-visit-guide", label: "처음 가는 법" },
      { slug: "holdem-pub-legal", label: "합법인가요?" },
      { slug: "holdem-pub-promotion", label: "(사장님) 무료 소개" },
    ],
  },
];

// 일본어 필라-클러스터 로드맵 (JA). 구조·슬러그는 EN과 100% 동일(ja는 EN 41편 1:1 완역),
// 라벨만 일본어. UI 라벨(Learning Map 등)은 EN 유지(KO 선례).
export const JA_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "ルール",
    nodes: [
      { slug: "holdem-game-order", label: "ゲームの流れ" },
      { slug: "holdem-betting-actions", label: "ベッティングアクション" },
      { slug: "holdem-blind-meaning", label: "ブラインド" },
      { slug: "holdem-all-in-rules", label: "オールインのルール" },
      { slug: "holdem-showdown-rules", label: "ショーダウン" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "役の強さ",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "フラッシュ vs ストレート" },
      { slug: "holdem-kicker", label: "キッカー" },
      { slug: "holdem-tiebreak-rules", label: "引き分けの決め方" },
      { slug: "holdem-split-pot-rules", label: "スプリットポット" },
      { slug: "holdem-reading-the-board", label: "ボードの読み方" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "確率・オッズ",
    nodes: [
      { slug: "holdem-pot-odds", label: "ポットオッズ" },
      { slug: "holdem-outs", label: "アウツの数え方" },
      { slug: "holdem-drawing-odds", label: "ドローの確率" },
      { slug: "holdem-implied-odds", label: "インプライドオッズ" },
      { slug: "holdem-equity", label: "エクイティ" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "戦略",
    nodes: [
      { slug: "holdem-positions", label: "ポジションと席" },
      { slug: "holdem-position-play", label: "ポジションプレー" },
      { slug: "holdem-starting-hands-chart", label: "スターティングハンド" },
      { slug: "holdem-limping", label: "リンプ" },
      { slug: "holdem-3bet", label: "3ベット" },
      { slug: "holdem-continuation-bet", label: "Cベット" },
      { slug: "holdem-when-to-fold", label: "フォールド判断" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "トーナメント",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "MTT vs キャッシュ" },
      { slug: "holdem-icm", label: "ICM基礎" },
      { slug: "holdem-bubble", label: "バブル" },
      { slug: "holdem-short-stack", label: "ショートスタック" },
      { slug: "apt-incheon-2026-guide", label: "APT仁川 2026", group: "ライブイベント" },
      { slug: "korea-poker-marathon-2026", label: "コリアマラソン 2026", group: "ライブイベント" },
      { slug: "wpt-australia-2026-guide", label: "WPTオーストラリア 2026", group: "ライブイベント" },
      { slug: "ept-barcelona-2026-guide", label: "EPTバルセロナ 2026", group: "ライブイベント" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "用語集",
    nodes: [
      { slug: "holdem-straddle", label: "ストラドル" },
      { slug: "holdem-rake", label: "レーキ" },
      { slug: "holdem-fish", label: "フィッシュ" },
      { slug: "holdem-cooler", label: "クーラー" },
      { slug: "holdem-bad-beat", label: "バッドビート" },
    ],
  },
];

// 스페인어 필라-클러스터 로드맵 (EN 6필라와 구조·슬러그 동일, 라벨만 현지화. es 42편 전부 실존).
export const ES_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "Reglas",
    nodes: [
      { slug: "holdem-game-order", label: "Orden de juego" },
      { slug: "holdem-betting-actions", label: "Acciones de apuesta" },
      { slug: "holdem-blind-meaning", label: "Ciegas" },
      { slug: "holdem-all-in-rules", label: "Reglas del all-in" },
      { slug: "holdem-showdown-rules", label: "Showdown" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "Jerarquía de manos",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "Color vs escalera" },
      { slug: "holdem-kicker", label: "El kicker" },
      { slug: "holdem-tiebreak-rules", label: "Desempates" },
      { slug: "holdem-split-pot-rules", label: "Bote dividido" },
      { slug: "holdem-reading-the-board", label: "Leer la mesa" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "Odds y matemática",
    nodes: [
      { slug: "holdem-pot-odds", label: "Pot odds" },
      { slug: "holdem-outs", label: "Contar outs" },
      { slug: "holdem-drawing-odds", label: "Odds de proyecto" },
      { slug: "holdem-implied-odds", label: "Odds implícitas" },
      { slug: "holdem-equity", label: "Equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "Estrategia",
    nodes: [
      { slug: "holdem-positions", label: "Posiciones" },
      { slug: "holdem-position-play", label: "Juego posicional" },
      { slug: "holdem-starting-hands-chart", label: "Manos iniciales" },
      { slug: "holdem-limping", label: "Limping" },
      { slug: "holdem-3bet", label: "3-bet" },
      { slug: "holdem-continuation-bet", label: "C-bet" },
      { slug: "holdem-when-to-fold", label: "Cuándo foldear" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "Torneos",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "MTT vs cash" },
      { slug: "holdem-icm", label: "ICM básico" },
      { slug: "holdem-bubble", label: "La burbuja" },
      { slug: "holdem-short-stack", label: "Stack corto" },
      { slug: "apt-incheon-2026-guide", label: "APT Incheon 2026", group: "Eventos en vivo" },
      { slug: "korea-poker-marathon-2026", label: "Korea Marathon 2026", group: "Eventos en vivo" },
      { slug: "wpt-australia-2026-guide", label: "WPT Australia 2026", group: "Eventos en vivo" },
      { slug: "ept-barcelona-2026-guide", label: "EPT Barcelona 2026", group: "Eventos en vivo" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "Glosario",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "Rake" },
      { slug: "holdem-fish", label: "Fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad beat" },
    ],
  },
];

// 포르투갈어 필라-클러스터 로드맵 (EN 6필라와 구조·슬러그 동일, 라벨만 pt-BR. pt 42편 전부 실존).
export const PT_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "Regras",
    nodes: [
      { slug: "holdem-game-order", label: "Ordem do jogo" },
      { slug: "holdem-betting-actions", label: "Ações de aposta" },
      { slug: "holdem-blind-meaning", label: "Blinds" },
      { slug: "holdem-all-in-rules", label: "Regras do all-in" },
      { slug: "holdem-showdown-rules", label: "Showdown" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "Ranking de mãos",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "Flush vs sequência" },
      { slug: "holdem-kicker", label: "O kicker" },
      { slug: "holdem-tiebreak-rules", label: "Desempates" },
      { slug: "holdem-split-pot-rules", label: "Pote dividido" },
      { slug: "holdem-reading-the-board", label: "Ler a mesa" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "Odds e matemática",
    nodes: [
      { slug: "holdem-pot-odds", label: "Pot odds" },
      { slug: "holdem-outs", label: "Contar outs" },
      { slug: "holdem-drawing-odds", label: "Odds de projeto" },
      { slug: "holdem-implied-odds", label: "Odds implícitas" },
      { slug: "holdem-equity", label: "Equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "Estratégia",
    nodes: [
      { slug: "holdem-positions", label: "Posições" },
      { slug: "holdem-position-play", label: "Jogo posicional" },
      { slug: "holdem-starting-hands-chart", label: "Mãos iniciais" },
      { slug: "holdem-limping", label: "Limping" },
      { slug: "holdem-3bet", label: "3-bet" },
      { slug: "holdem-continuation-bet", label: "C-bet" },
      { slug: "holdem-when-to-fold", label: "Quando foldar" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "Torneios",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "MTT vs cash" },
      { slug: "holdem-icm", label: "ICM básico" },
      { slug: "holdem-bubble", label: "A bubble" },
      { slug: "holdem-short-stack", label: "Stack curto" },
      { slug: "apt-incheon-2026-guide", label: "APT Incheon 2026", group: "Eventos ao vivo" },
      { slug: "korea-poker-marathon-2026", label: "Korea Marathon 2026", group: "Eventos ao vivo" },
      { slug: "wpt-australia-2026-guide", label: "WPT Australia 2026", group: "Eventos ao vivo" },
      { slug: "ept-barcelona-2026-guide", label: "EPT Barcelona 2026", group: "Eventos ao vivo" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "Glossário",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "Rake" },
      { slug: "holdem-fish", label: "Fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad beat" },
    ],
  },
];

/** 이 slug가 속한 필라를 반환 (허브이거나 노드이면 매치). 없으면 null. 기본 EN, clusters 인자로 KO 등 전달. */
export function clusterForSlug(slug: string, clusters: PillarCluster[] = EN_CLUSTERS): PillarCluster | null {
  for (const c of clusters) {
    if (c.pillarSlug === slug || c.nodes.some((n) => n.slug === slug)) return c;
  }
  return null;
}
