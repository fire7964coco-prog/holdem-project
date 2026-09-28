/**
 * 참여 장치 설정 — 대회 «참가 예정 → 후기» + 대회 후기 이벤트 (2026-09-28)
 * 설계 = docs/participation-event-redesign-design.md · DB = supabase/participation.sql
 *
 * 🔴 이 파일은 import 가 없어야 한다 — scripts/check-participation.mjs 가 그대로 읽어 검산한다.
 * 🔴 대회 날짜는 여기 적지 않는다. 날짜의 정본은 lib/tournaments.ts 하나다(서버가 id로 조회).
 *    두 곳에 적으면 갈라진다. 검사기가 «이 id가 tournaments.ts에 있고 blogLink가 slug를 가리키는지»,
 *    «글의 post.event 날짜와 tournaments.ts 날짜가 같은지»를 확인한다.
 */

export type ReviewTournament = {
  /** lib/tournaments.ts 의 id — 참가 예정·후기·추첨의 키 */
  id: string;
  /** 화면 표시용 짧은 이름 */
  label: string;
  /** 바가 붙는 KO 가이드 slug */
  slug: string;
};

/** 파일럿 = KO 대회 가이드 3편 (사장님 09-28 승인) */
export const REVIEW_TOURNAMENTS: ReviewTournament[] = [
  { id: "apl-seoul-winter-circuit-1", label: "APL 서울 2026", slug: "apl-seoul-2026-guide" },
  { id: "wpt-seoul", label: "WPT 서울 2026", slug: "wpt-seoul-2026-guide" },
  { id: "gop-incheon-2", label: "GOP 인천 2026 II", slug: "gop-incheon-2026-ii-guide" },
];

export function reviewTournamentById(id: string): ReviewTournament | undefined {
  return REVIEW_TOURNAMENTS.find((t) => t.id === id);
}

export function reviewTournamentBySlug(slug: string): ReviewTournament | undefined {
  return REVIEW_TOURNAMENTS.find((t) => t.slug === slug);
}

/** 대회 후기 이벤트 (사장님 09-28 승인: 대회당 추첨 3명 × 1만 원 + 베스트 1명 × 5만 원) */
export const REVIEW_EVENT = {
  /** 응모 기간 = 대회 종료 다음날 ~ 종료일 + entryDays (KST, 마지막 날 23:59까지) */
  entryDays: 14,
  drawWinners: 3,
  prizeDraw: "기프트콘 1만 원",
  bestWinners: 1,
  prizeBest: "기프트콘 5만 원",
  /** 추첨 = 응모 마감 뒤 첫 일요일 19:00 KST (기존 주간 크론과 같은 시각) */
  drawLabel: "응모 마감 뒤 첫 일요일 오후 7시",
} as const;

/** 이 값 미만이면 개수를 숨긴다(빈 가게처럼 보이지 않게) */
export const MIN_VISIBLE_COUNT = 3;
/** 별점이 이 개수 이상일 때만 평균을 화면에 보인다(스키마로는 절대 내보내지 않는다) */
export const MIN_RATINGS_FOR_AVERAGE = 5;

export const REVIEW_BODY_MIN = 30;
export const REVIEW_BODY_MAX = 600;
export const COMMENT_BODY_MIN = 2;
export const COMMENT_BODY_MAX = 80;

/** 링크 거부 — supabase/participation.sql 의 check 제약과 같은 뜻 */
export const LINK_PATTERN = /(https?:\/\/|www\.|\.(com|net|org|kr|io|me|xyz|gg|ly|link|site|shop|top)([/?#]|$|[^a-z0-9]))/i;

export const EVENT_KIND_OPTIONS = [
  { value: "main", label: "메인 이벤트" },
  { value: "side", label: "사이드 이벤트" },
  { value: "satellite", label: "새틀라이트" },
  { value: "spectator", label: "구경만" },
] as const;

export const RESULT_OPTIONS = [
  { value: "bust", label: "탈락" },
  { value: "itm", label: "입상(ITM)" },
  { value: "final", label: "파이널 테이블" },
] as const;

export type Phase = "before" | "during" | "after";

/** 한국 시각 기준 오늘 날짜 'YYYY-MM-DD' */
export function kstToday(now: Date): string {
  return new Date(now.getTime() + 9 * 3600_000).toISOString().slice(0, 10);
}

/** 'YYYY-MM-DD' + n일 (UTC 달력 산술 — 타임존 영향 없음) */
export function addDays(isoDate: string, n: number): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export function phaseOf(startDate: string, endDate: string, now: Date): Phase {
  const today = kstToday(now);
  if (today < startDate) return "before";
  if (today <= endDate) return "during";
  return "after";
}

/** 응모 마감일(KST 날짜, 그날 23:59:59까지 응모 가능) */
export function entryDeadline(endDate: string): string {
  return addDays(endDate, REVIEW_EVENT.entryDays);
}

/** 응모 마감 순간(UTC ISO) — DB created_at 비교용 */
export function entryDeadlineInstant(endDate: string): string {
  return new Date(`${entryDeadline(endDate)}T23:59:59.999+09:00`).toISOString();
}

/** 지금 후기를 쓰면 이벤트 응모가 되는가 */
export function isEntryWindowOpen(endDate: string, now: Date): boolean {
  const today = kstToday(now);
  return today > endDate && today <= entryDeadline(endDate);
}

/** 추첨할 때가 됐는가 — 응모 마감일이 지났으면(KST) 참. 크론은 일요일에만 돈다. */
export function isDrawDue(endDate: string, now: Date): boolean {
  return kstToday(now) > entryDeadline(endDate);
}

/** 응모 마감 뒤 첫 일요일(KST 날짜) — 화면 안내용 */
export function drawSunday(endDate: string): string {
  let d = addDays(entryDeadline(endDate), 1);
  while (new Date(`${d}T00:00:00Z`).getUTCDay() !== 0) d = addDays(d, 1);
  return d;
}

/** 'YYYY-MM-DD' → '10월 23일' */
export function koMonthDay(isoDate: string): string {
  const [, m, d] = isoDate.split("-");
  return `${Number(m)}월 ${Number(d)}일`;
}

/**
 * 사이드바 이벤트 배너(커뮤니티 홈 · 허브) 한국어 문구 — 매주 번호 추첨을 멈춘 동안(EVENT_OPERATION.acceptingEntries=false) 쓴다.
 * 대회 후기 이벤트는 KO 대회 가이드 파일럿이라 다른 언어에서는 배너를 숨긴다.
 */
export const REVIEW_EVENT_BANNER_KO = {
  badge: "🎁 대회 후기 이벤트",
  title: "대회 후기 쓰고\n기프트콘 받기",
  desc: `대회마다 추첨 ${REVIEW_EVENT.drawWinners}명 · ${REVIEW_EVENT.prizeDraw}\n베스트 후기 ${REVIEW_EVENT.bestWinners}명 · ${REVIEW_EVENT.prizeBest}`,
  schedule: "다녀온 대회 가이드에 후기를 남기면 응모\n비트코인 블록 해시로 공개 추첨",
  button: "이벤트 보기 →",
} as const;
