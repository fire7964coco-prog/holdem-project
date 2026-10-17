/**
 * ★2026-10-18 — 홀덤마스터 영어 유튜브 채널(UCEgFZSb5xhBiPScbSIYPOEg) 「Free GTO Solver Guide」 Part 1~4.
 *   한국어 「무료 GTO 솔버 사용법」 1~4편(`app/solver/videos.ts`)의 영어판이다 — 같은 순서·같은 배치:
 *   Part 1 → «What is a GTO solver?» · Part 3 → 사용법 5단계 · Part 2 → 결과 화면 · Part 4 → 트레이너.
 *   제목·길이·업로드 시각은 yt-dlp로 받은 실물 그대로다. `summary`는 각 편 설명란의
 *   «What you'll be able to do» 3줄을 줄인 것 — 영상에 없는 내용을 짓지 않는다.
 *   🔴 영어 영상이라 EN 랜딩에만 둔다.
 *   🔴 화면 캡션과 VideoObject(`page.tsx`)가 이 한 곳을 읽는다 — 스키마에 새 문장을 짓지 않는다.
 *   서버(page.tsx)와 클라이언트(solver-client.tsx)가 함께 읽어야 해서 "use client" 파일 밖에 둔다.
 */
export type SolverVideoEn = {
  id: string;
  title: string;
  /** 화면 캡션 머리 — «Part N (M:SS)» */
  label: string;
  /** 캡션 본문 = VideoObject description */
  summary: string;
  /** ISO 8601 (yt-dlp timestamp) */
  uploadDate: string;
  /** 초 (yt-dlp duration) */
  seconds: number;
};

export const SOLVER_VIDEOS_EN = {
  start: { id: "tB-hJMnVCPs", title: "How to Use a Poker Solver for the First Time | Free GTO Solver Guide Part 1", label: "Part 1 (9:13)", summary: "What a solver does and doesn't do, opening a pre-solved study spot (A♥7♦2♣) without running a calculation, and the order to read the screen", uploadDate: "2026-10-17T16:53:47Z", seconds: 553 },
  read: { id: "MMcKUt_QAFE", title: "Poker Solver Results Explained: Frequency, Equity and EV | Free GTO Solver Guide Part 2", label: "Part 2 (11:31)", summary: "A grid cell vs. its combos, the whole range vs. your hand's row, and what frequency, EQ and EV each answer", uploadDate: "2026-10-17T16:54:04Z", seconds: 691 },
  solve: { id: "zK-2GsPtmp4", title: "How to Run a Poker Solver on Your Own Hand | Free GTO Solver Guide Part 3", label: "Part 3 (13:15)", summary: "Write the spot down first, enter both ranges, pot and stack, bet sizes, build the tree, and check why the calculation stopped", uploadDate: "2026-10-17T16:54:16Z", seconds: 795 },
  trainer: { id: "XjeVyhv-47c", title: "How to Study with a GTO Trainer (EV Loss, Hand Review) | Free GTO Solver Guide Part 4", label: "Part 4 (11:22)", summary: "How the GTO Trainer grades by EV loss relative to the pot, predict → compare → review missed spots, and widening to similar boards", uploadDate: "2026-10-17T16:54:28Z", seconds: 682 },
} as const satisfies Record<string, SolverVideoEn>;

/** 화면 캡션 한 줄 */
export const videoCaptionEn = (v: SolverVideoEn) => `▶ Solver guide ${v.label} — ${v.summary}`;

/** VideoObject — 자체 채널 영상(KO와 같은 방침 · 사장님 10-15 승인). 편 순서대로. */
export const videoObjectsEn = (publisher: object) =>
  [SOLVER_VIDEOS_EN.start, SOLVER_VIDEOS_EN.read, SOLVER_VIDEOS_EN.solve, SOLVER_VIDEOS_EN.trainer].map((v: SolverVideoEn) => ({
    "@type": "VideoObject",
    name: v.title,
    description: v.summary,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
    uploadDate: v.uploadDate,
    duration: `PT${Math.floor(v.seconds / 60)}M${v.seconds % 60}S`,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    url: `https://www.youtube.com/watch?v=${v.id}`,
    inLanguage: "en",
    publisher,
  }));
