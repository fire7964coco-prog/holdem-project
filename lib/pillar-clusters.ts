// 필라-클러스터 로드맵 데이터 (EN 전체 6필라).
// "스타크래프트 전체 미니맵"처럼 사이트 전체 학습 지도에서 현재 글 위치를 보여주는 소스.
// docs/en-blog-pillar-cluster-map.md 기준. 슬러그는 전 언어 공유(hreflang) — 전부 실존 확인됨.
// 향후 KO·18언어 라벨 현지화로 확장.

import { GTO_SERIES } from "./gto-series";

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
  /**
   * 허브가 **블로그 글이 아닌** 필라만 쓴다(예: GTO 솔버 → `/solver` 랜딩).
   * 지정하면 미니맵의 허브 링크가 `${hrefBase}/${pillarSlug}` 대신 이 경로로 간다.
   *
   * 🔴 이때 `pillarSlug`는 «포스트 slug가 아니다». 관련글·코스 이웃·허브 트렌딩은
   *    전부 `posts` 배열에서 slug를 찾아 없으면 조용히 건너뛰므로 안전하다
   *    (lib/related-posts.ts push()·ok() · lib/hub-trending.ts L70). 새 소비자를 만들 땐
   *    「pillarSlug가 항상 포스트다」를 전제하지 마라.
   */
  pillarHref?: string;
};

/**
 * 모바일 스티키 CTA 가 가리킬 **허브 라우트** — 클러스터 `id` 로 찾는다.
 *
 * ★왜 (2026-08-19 · 사장님 지적)
 *   스티키가 「다음 글」을 가리키고 있었는데, 글 끝에 내부 링크 제안이 **이미 15개**였다
 *   (관련글 표 9 · 이전글 1 · 다음글 1 · 함께읽으면 3 · 스티키 1 — 스티키는 «다음글»과 **같은 목적지**).
 *   제안이 과잉이라 한 번 더 미는 게 값을 할 수 없었다. 그래서 목적지를 **그 글이 속한 필라의 허브**로
 *   바꾼다 — 「어떻게 나가나」를 읽는 독자의 다음 질문은 «다음 강의»가 아니라 «그럼 어떤 대회가 있나»다.
 *   `/tournaments` 는 425세션·참여율 **77.2%** 로 사이트 최강 랜딩이다(이 글은 58.5% — 19p 위로 보낸다).
 *
 * 🔴 **`pillarSlug` 를 쓰지 않는 이유**: KO 토너먼트 필라의 `pillarSlug` 는
 *    `holdem-tournament-how-to-enter` 로 **글 자신**이다. 그대로 쓰면 자기 자신을 가리킨다.
 * 🔴 **`rankings` 는 매핑하지 않는다.** `/ranking` 은 «홀덤사이트 랭킹»이고 이 클러스터는 «족보»다 —
 *    이름만 닮았고 뜻이 다르다. 넣으면 족보 글에서 사이트 순위표로 보낸다.
 * 🪶 여기 없는 클러스터(odds·starting·position·rankings)와 클러스터 없는 글은
 *    **기존 「다음 글」 스티키로 폴백**한다 — 회귀 없음.
 */
export const STICKY_HUB: Record<string, { href: string; label: string }> = {
  tournament: { href: "/tournaments", label: "대회 일정 전체 보기" },
  strategy: { href: "/strategy", label: "전략 가이드 전체 보기" },
  rules: { href: "/rules", label: "룰 가이드 전체 보기" },
  pub: { href: "/pub", label: "홀덤펍 찾아보기" },
  solver: { href: "/solver", label: "무료 GTO 솔버 열기" },
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
    // 「확률·수학」 → 「확률」 (2026-08-04) — 구분점 + 5자라 상단 네비 버튼에서 빡빡했고,
    // 허브 글 제목이 「홀덤 확률」이라 한 단어 쪽이 맞다.
    pillarLabel: "확률",
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
  /**
   * GTO 솔버 스팟 해설 시리즈 — 2026-08-18 신설 (사장님 지시: 「솔버 예제 포스팅에
   * 오른쪽 사이드바가 안 달려 있다 · 러닝맵에 GTO 관련 포스팅도 넣어야겠다」).
   *
   * ★왜 필라로 넣었나: 이 13편은 KO_CLUSTERS 어디에도 없어서 `clusterForSlug`가 null을
   *   돌려줬고, 그 결과 **우측 사이드바(계산기 CTA + 러닝맵) 자체가 안 그려졌다**
   *   (blog-post-client.tsx의 `showMinimap` 게이트). 상단 카테고리 버튼도 같이 없었다.
   *
   * ★허브는 `/solver` 랜딩이다 — 얇은 카테고리 페이지를 새로 만들지 않는다는 결정은
   *   그대로다(lib/gto-series.ts 상단 주석 ①②③). 그래서 `pillarHref`를 쓴다.
   *
   * ★목록은 `lib/gto-series.ts`가 단일 출처다. 여기에 슬러그를 다시 적지 마라 —
   *   시리즈에 글을 더하면 그 파일 한 줄만 고치면 러닝맵까지 따라온다.
   *
   * 🔴 「13×13 링크 금지」(gto-series.ts)와 충돌하지 않는다: 러닝맵은 **접힌 아코디언**
   *    전역 네비고, 관련글 3개는 여전히 전략 필라로 내보낸다
   *    (lib/related-posts.ts의 시리즈 가드 — 그 가드를 지우면 규율이 깨진다).
   */
  {
    id: "solver",
    pillarSlug: "solver",
    pillarHref: "/solver",
    pillarLabel: "GTO 솔버",
    nodes: GTO_SERIES.map((s) => ({ slug: s.slug, label: `${s.mark} ${s.label}`, group: s.group })),
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
      { slug: "japan-poker-tournaments-guide", label: "国内大会ガイド", group: "ライブイベント" },
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

// 독일어 필라-클러스터 로드맵 (EN 6필라와 구조·슬러그 동일, 라벨만 독일어. de 42편 전부 실존).
export const DE_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "Regeln",
    nodes: [
      { slug: "holdem-game-order", label: "Spielablauf" },
      { slug: "holdem-betting-actions", label: "Setzaktionen" },
      { slug: "holdem-blind-meaning", label: "Blinds" },
      { slug: "holdem-all-in-rules", label: "All-in-Regeln" },
      { slug: "holdem-showdown-rules", label: "Showdown" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "Handreihenfolge",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "Flush vs Straße" },
      { slug: "holdem-kicker", label: "Der Kicker" },
      { slug: "holdem-tiebreak-rules", label: "Gleichstände" },
      { slug: "holdem-split-pot-rules", label: "Split Pot" },
      { slug: "holdem-reading-the-board", label: "Board lesen" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "Odds & Mathe",
    nodes: [
      { slug: "holdem-pot-odds", label: "Pot Odds" },
      { slug: "holdem-outs", label: "Outs zählen" },
      { slug: "holdem-drawing-odds", label: "Draw-Odds" },
      { slug: "holdem-implied-odds", label: "Implied Odds" },
      { slug: "holdem-equity", label: "Equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "Strategie",
    nodes: [
      { slug: "holdem-positions", label: "Positionen" },
      { slug: "holdem-position-play", label: "Positionsspiel" },
      { slug: "holdem-starting-hands-chart", label: "Starthände" },
      { slug: "holdem-limping", label: "Limpen" },
      { slug: "holdem-3bet", label: "3-Bet" },
      { slug: "holdem-continuation-bet", label: "C-Bet" },
      { slug: "holdem-when-to-fold", label: "Wann folden" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "Turniere",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "MTT vs Cash" },
      { slug: "holdem-icm", label: "ICM-Basics" },
      { slug: "holdem-bubble", label: "Die Bubble" },
      { slug: "holdem-short-stack", label: "Short Stack" },
      { slug: "apt-incheon-2026-guide", label: "APT Incheon 2026", group: "Live-Events" },
      { slug: "korea-poker-marathon-2026", label: "Korea Marathon 2026", group: "Live-Events" },
      { slug: "wpt-australia-2026-guide", label: "WPT Australia 2026", group: "Live-Events" },
      { slug: "ept-barcelona-2026-guide", label: "EPT Barcelona 2026", group: "Live-Events" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "Glossar",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "Rake" },
      { slug: "holdem-fish", label: "Fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad Beat" },
    ],
  },
];

export const ZH_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "规则",
    nodes: [
      { slug: "holdem-game-order", label: "牌局顺序" },
      { slug: "holdem-betting-actions", label: "下注动作" },
      { slug: "holdem-blind-meaning", label: "盲注" },
      { slug: "holdem-all-in-rules", label: "All-in 规则" },
      { slug: "holdem-showdown-rules", label: "摊牌" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "牌型大小",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "同花 vs 顺子" },
      { slug: "holdem-kicker", label: "踢脚牌" },
      { slug: "holdem-tiebreak-rules", label: "平局判定" },
      { slug: "holdem-split-pot-rules", label: "分池" },
      { slug: "holdem-reading-the-board", label: "读牌面" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "赔率与数学",
    nodes: [
      { slug: "holdem-pot-odds", label: "底池赔率" },
      { slug: "holdem-outs", label: "数 outs" },
      { slug: "holdem-drawing-odds", label: "听牌赔率" },
      { slug: "holdem-implied-odds", label: "隐含赔率" },
      { slug: "holdem-equity", label: "胜率 equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "策略",
    nodes: [
      { slug: "holdem-positions", label: "位置" },
      { slug: "holdem-position-play", label: "位置打法" },
      { slug: "holdem-starting-hands-chart", label: "起手牌表" },
      { slug: "holdem-limping", label: "平跟 limp" },
      { slug: "holdem-3bet", label: "3bet" },
      { slug: "holdem-continuation-bet", label: "c-bet" },
      { slug: "holdem-when-to-fold", label: "何时弃牌" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "锦标赛",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "锦标赛 vs 现金局" },
      { slug: "holdem-icm", label: "ICM 基础" },
      { slug: "holdem-bubble", label: "bubble 打法" },
      { slug: "holdem-short-stack", label: "短码" },
      { slug: "apt-incheon-2026-guide", label: "APT Incheon 2026", group: "Live Events" },
      { slug: "korea-poker-marathon-2026", label: "Korea Marathon 2026", group: "Live Events" },
      { slug: "wpt-australia-2026-guide", label: "WPT Australia 2026", group: "Live Events" },
      { slug: "ept-barcelona-2026-guide", label: "EPT Barcelona 2026", group: "Live Events" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "术语表",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "抽水 rake" },
      { slug: "holdem-fish", label: "鱼 fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad Beat" },
    ],
  },
];

// 번체(대만·홍콩) — 슬러그는 전 언어 공유, 라벨만 번체 현지화. Live Events 그룹 라벨은 EN 유지.
export const ZH_HANT_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "規則",
    nodes: [
      { slug: "holdem-game-order", label: "牌局順序" },
      { slug: "holdem-betting-actions", label: "下注動作" },
      { slug: "holdem-blind-meaning", label: "盲注" },
      { slug: "holdem-all-in-rules", label: "All-in 規則" },
      { slug: "holdem-showdown-rules", label: "攤牌" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "牌型大小",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "同花 vs 順子" },
      { slug: "holdem-kicker", label: "踢腳牌" },
      { slug: "holdem-tiebreak-rules", label: "平手判定" },
      { slug: "holdem-split-pot-rules", label: "平分底池" },
      { slug: "holdem-reading-the-board", label: "讀牌面" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "賠率與數學",
    nodes: [
      { slug: "holdem-pot-odds", label: "底池賠率" },
      { slug: "holdem-outs", label: "補牌" },
      { slug: "holdem-drawing-odds", label: "聽牌賠率" },
      { slug: "holdem-implied-odds", label: "隱含賠率" },
      { slug: "holdem-equity", label: "勝率 equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "策略",
    nodes: [
      { slug: "holdem-positions", label: "位置" },
      { slug: "holdem-position-play", label: "位置打法" },
      { slug: "holdem-starting-hands-chart", label: "起手牌表" },
      { slug: "holdem-limping", label: "跛入 limp" },
      { slug: "holdem-3bet", label: "3bet" },
      { slug: "holdem-continuation-bet", label: "c-bet" },
      { slug: "holdem-when-to-fold", label: "何時蓋牌" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "錦標賽",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "錦標賽 vs 現金桌" },
      { slug: "holdem-icm", label: "ICM 基礎" },
      { slug: "holdem-bubble", label: "泡泡期" },
      { slug: "holdem-short-stack", label: "短碼" },
      { slug: "apt-incheon-2026-guide", label: "APT Incheon 2026", group: "Live Events" },
      { slug: "korea-poker-marathon-2026", label: "Korea Marathon 2026", group: "Live Events" },
      { slug: "wpt-australia-2026-guide", label: "WPT Australia 2026", group: "Live Events" },
      { slug: "ept-barcelona-2026-guide", label: "EPT Barcelona 2026", group: "Live Events" },
    ],
  },
  {
    id: "glossary",
    pillarSlug: "holdem-glossary",
    pillarLabel: "術語表",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "抽水 rake" },
      { slug: "holdem-fish", label: "魚 fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad Beat" },
    ],
  },
];

export const ID_CLUSTERS: PillarCluster[] = [
  {
    id: "rules",
    pillarSlug: "texas-holdem-rules-for-beginners",
    pillarLabel: "Aturan",
    nodes: [
      { slug: "holdem-game-order", label: "Alur Main" },
      { slug: "holdem-betting-actions", label: "Aksi Taruhan" },
      { slug: "holdem-blind-meaning", label: "Blind" },
      { slug: "holdem-all-in-rules", label: "Aturan All-In" },
      { slug: "holdem-showdown-rules", label: "Showdown" },
    ],
  },
  {
    id: "rankings",
    pillarSlug: "holdem-hand-rankings",
    pillarLabel: "Peringkat Tangan",
    nodes: [
      { slug: "holdem-flush-vs-straight", label: "Flush vs Straight" },
      { slug: "holdem-kicker", label: "Kicker" },
      { slug: "holdem-tiebreak-rules", label: "Pemecah Seri" },
      { slug: "holdem-split-pot-rules", label: "Split Pot" },
      { slug: "holdem-reading-the-board", label: "Baca Board" },
    ],
  },
  {
    id: "odds",
    pillarSlug: "holdem-probability",
    pillarLabel: "Peluang & Matematika",
    nodes: [
      { slug: "holdem-pot-odds", label: "Pot Odds" },
      { slug: "holdem-outs", label: "Hitung Outs" },
      { slug: "holdem-drawing-odds", label: "Peluang Draw" },
      { slug: "holdem-implied-odds", label: "Implied Odds" },
      { slug: "holdem-equity", label: "Equity" },
    ],
  },
  {
    id: "strategy",
    pillarSlug: "holdem-strategy",
    pillarLabel: "Strategi",
    nodes: [
      { slug: "holdem-positions", label: "Posisi" },
      { slug: "holdem-position-play", label: "Main Posisi" },
      { slug: "holdem-starting-hands-chart", label: "Starting Hands" },
      { slug: "holdem-limping", label: "Limp" },
      { slug: "holdem-3bet", label: "3-Bet" },
      { slug: "holdem-continuation-bet", label: "C-Bet" },
      { slug: "holdem-when-to-fold", label: "Kapan Fold" },
    ],
  },
  {
    id: "tournament",
    pillarSlug: "holdem-tournament",
    pillarLabel: "Turnamen",
    nodes: [
      { slug: "holdem-tournament-vs-cash-game", label: "MTT vs Cash" },
      { slug: "holdem-icm", label: "Dasar ICM" },
      { slug: "holdem-bubble", label: "Main Bubble" },
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
    pillarLabel: "Glosarium",
    nodes: [
      { slug: "holdem-straddle", label: "Straddle" },
      { slug: "holdem-rake", label: "Rake" },
      { slug: "holdem-fish", label: "Fish" },
      { slug: "holdem-cooler", label: "Cooler" },
      { slug: "holdem-bad-beat", label: "Bad Beat" },
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

/**
 * 로케일 → 클러스터 표. **이 파일이 단일 출처다.**
 *
 * ★2026-08-16에 `lib/hub-trending.ts`가 갖고 있던 `CLUSTERS_BY_LOCALE`을 여기로 올렸다.
 *   같은 매핑을 두 벌 두면 언어를 추가할 때 한쪽만 갱신되고, 그게 이 레포가
 *   반복해서 맞은 드리프트 유형이다(`components/site-chrome.tsx:14-22`의
 *   LOCALE_FEED_ROOTS 사고가 정확히 그것 — 12개 대 25개로 갈려 상단바가 2겹이 됐다).
 *   **새 언어에 클러스터를 만들면 여기 한 곳만 고친다.**
 *
 * 여기 없는 로케일은 빈 배열을 받는다 — 클러스터 맵이 아직 없는 17개 언어다.
 * 호출부는 «없음»을 정상 상태로 다뤄야 한다(미니맵 미표시, 관련글은 카테고리 폴백).
 *
 * locale 타입을 `SecondaryLocale`로 좁히지 않은 이유: `lib/intl.ts`를 import하면
 * 데이터 모듈이 로케일 레지스트리에 의존하게 된다. 값 자체는 문자열 키라 좁힐 실익이 없다.
 */
const CLUSTERS_BY_LOCALE: Record<string, PillarCluster[]> = {
  en: EN_CLUSTERS,
  ja: JA_CLUSTERS,
  es: ES_CLUSTERS,
  pt: PT_CLUSTERS,
  de: DE_CLUSTERS,
  zh: ZH_CLUSTERS,
  "zh-hant": ZH_HANT_CLUSTERS,
  id: ID_CLUSTERS,
};

/** 로케일별 클러스터. `null`(= 한국어)이면 KO_CLUSTERS. 맵이 없는 언어는 빈 배열. */
export function clustersForLocale(locale: string | null): PillarCluster[] {
  return locale ? CLUSTERS_BY_LOCALE[locale] ?? [] : KO_CLUSTERS;
}
