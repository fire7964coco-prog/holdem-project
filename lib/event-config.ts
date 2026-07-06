/**
 * 이벤트 설정 — 이 파일만 수정하면 전체 이벤트 동작이 바뀝니다.
 *
 * 추첨 방식: 매주 일요일 19:00 KST에 Vercel Cron이 실행되어
 * 그 시점의 최신 비트코인 블록 해시를 시드로 당첨번호 6개를 결정합니다.
 * 누구나 블록 탐색기에서 해시를 확인해 결과를 검증할 수 있습니다.
 */

/**
 * ISO 주차 ID 계산 (YYYY-WNN, UTC 기준 — 타임존 무관).
 * 앱(참여·조회)과 크론(추첨)이 반드시 같은 함수를 써야 event_id가 일치한다.
 */
export function getIsoWeekId(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

/**
 * 현재 이벤트 ID — 실행 시점의 ISO 주차로 자동 계산.
 * (구버전 하드코딩 상수를 제거 — 크론과 자동 동기화되어 회차가 어긋나지 않음)
 */
export function getCurrentEventId(): string {
  return getIsoWeekId(new Date());
}

/** 참여 조건 */
export const EVENT_CONDITION = {
  minPosts: 1,   // 커뮤니티 글 최소 작성 수
  minLikes: 1,   // 내 글에 받은 좋아요 합계 최솟값
};

/**
 * 추첨 스케줄
 * - cronUtc: Vercel cron 표현식 (UTC 기준)
 * - 매주 일요일 10:00 UTC = 19:00 KST
 */
export const DRAW_SCHEDULE = {
  cronUtc: "0 10 * * 0",
  displayKST: "매주 일요일 오후 7시",
};

/**
 * 당첨 번호 — DB(event_draws 테이블)에서 fetch됩니다.
 * 아래는 레거시 폴백용 (null = 미발표)
 */
export const WINNING_NUMBERS: number[] | null = null;

/** 상금 테이블 (한국어 결과 표시용) */
export const PRIZE_TABLE: Record<number, string> = {
  3: "기프트콘 5만원",
  4: "기프트콘 30만원",
  5: "기프트콘 100만원",
  6: "기프트콘 100만원",
};
