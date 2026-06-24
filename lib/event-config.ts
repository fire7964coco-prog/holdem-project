/**
 * 이벤트 설정 — 조건이나 당첨 번호를 변경할 때 이 파일만 수정하면 됩니다.
 */

/** 현재 이벤트 ID (월 단위) */
export const CURRENT_EVENT_ID = "2026-06";

/** 참여 조건 — 추후 변경 가능 */
export const EVENT_CONDITION = {
  minPosts: 3,   // 커뮤니티 글 최소 작성 수
  minLikes: 3,   // 내 글에 받은 좋아요 합계 최솟값
};

/**
 * 당첨 번호 — null이면 아직 미발표
 * 발표 시: [1, 7, 14, 23, 38, 42] 처럼 6개 숫자 배열로 교체
 */
export const WINNING_NUMBERS: number[] | null = null;

/** 상금 테이블 (한국어 결과 표시용) */
export const PRIZE_TABLE: Record<number, string> = {
  3: "기프트콘 5만원",
  4: "기프트콘 30만원",
  5: "기프트콘 100만원",
  6: "기프트콘 100만원",
};
