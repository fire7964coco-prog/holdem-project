/**
 * ★2026-10-15 — 홀덤마스터 유튜브 채널 「무료 GTO 솔버 사용법」 1~4편 (사장님 10-15 업로드).
 *   제목·길이·업로드 시각·챕터는 yt-dlp로 받은 실물 그대로다. 각 편의 챕터가 랜딩의 H2와 1:1로 겹쳐
 *   그 섹션 끝에 하나씩 둔다: 1편 → «GTO 솔버가 뭔가요?» · 3편 → 사용법 · 2편 → 결과 화면 · 4편 → 트레이너.
 *   🔴 한국어 영상이라 KO 랜딩에만 둔다(다른 로케일 랜딩에 넣지 않는다).
 *   ★영어판(별도 채널 · 2026-10-18)은 `app/en/solver/videos.ts`가 따로 갖는다.
 *   🔴 화면 캡션(`caption`)과 VideoObject(`page.tsx`)가 이 한 곳을 읽는다 — 스키마에 새 문장을 짓지 않는다.
 *   서버(page.tsx)와 클라이언트(solver-client.tsx)가 함께 읽어야 해서 "use client" 파일 밖에 둔다.
 */
export type SolverVideo = {
  id: string;
  title: string;
  /** 화면 캡션 머리 — «사용법 N편 (M분 S초)» */
  label: string;
  /** 캡션 본문 = VideoObject description */
  summary: string;
  /** ISO 8601 (yt-dlp timestamp) */
  uploadDate: string;
  /** 초 (yt-dlp duration) */
  seconds: number;
};

export const SOLVER_VIDEOS = {
  start: { id: "FqHHkW556kE", title: "홀덤 솔버, 처음이라면 여기부터 | 무료 GTO 솔버 사용법 1편", label: "사용법 1편 (8분 24초)", summary: "솔버가 하는 일과 하지 않는 일, 계산 없이 교육 예제 A♥7♦2♣를 열어 화면 읽는 순서 잡기", uploadDate: "2026-10-15T07:10:38Z", seconds: 504 },
  read: { id: "TlUC5f1ejiE", title: "솔버 화면의 색깔과 숫자, 무슨 뜻일까? (빈도·EQ·EV) | 무료 GTO 솔버 사용법 2편", label: "사용법 2편 (10분 30초)", summary: "표 한 칸과 콤보 구분, 레인지 전체 비율과 내 패의 비율, 빈도·EQ·EV가 각각 묻는 것", uploadDate: "2026-10-15T07:10:54Z", seconds: 630 },
  solve: { id: "V3GRg25SRWU", title: "내가 겪은 핸드, 솔버로 직접 계산하기 | 무료 GTO 솔버 사용법 3편", label: "사용법 3편 (12분 3초)", summary: "상황 메모 → 양쪽 레인지 → 팟·스택 → 벳 사이즈 → 트리 생성 → 계산 완료 확인까지 한 번에", uploadDate: "2026-10-15T07:11:22Z", seconds: 723 },
  trainer: { id: "NmUy3uAW3QU", title: "솔버의 답을 내 공부로 바꾸는 법 (GTO 트레이너) | 무료 GTO 솔버 사용법 4편", label: "사용법 4편 (9분 54초)", summary: "트레이너가 EV 손실로 채점하는 방식, 답 보기 전 예상 → 비교 → 틀린 문제 복습", uploadDate: "2026-10-15T07:11:42Z", seconds: 594 },
} as const satisfies Record<string, SolverVideo>;

/** 화면 캡션 한 줄 */
export const videoCaption = (v: SolverVideo) => `▶ ${v.label} — ${v.summary}`;

/** VideoObject — 자체 채널 영상이라 넣는다(사장님 10-15 승인). 편 순서대로. */
export const videoObjects = (publisher: object) =>
  [SOLVER_VIDEOS.start, SOLVER_VIDEOS.read, SOLVER_VIDEOS.solve, SOLVER_VIDEOS.trainer].map((v: SolverVideo) => ({
    "@type": "VideoObject",
    name: v.title,
    description: v.summary,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
    uploadDate: v.uploadDate,
    duration: `PT${Math.floor(v.seconds / 60)}M${v.seconds % 60}S`,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    url: `https://www.youtube.com/watch?v=${v.id}`,
    inLanguage: "ko",
    publisher,
  }));
