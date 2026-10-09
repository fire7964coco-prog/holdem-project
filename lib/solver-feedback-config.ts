/**
 * 솔버 후기창 설정 (2026-10-04 · 코드 1) — 설계 docs/solver-review-design.md · DB supabase/solver-reviews.sql
 *
 * 🔴 이 파일은 import 가 없어야 한다 — scripts/check-solver-feedback.ts 가 SQL 과 대조한다.
 * 🔴 LINK_PATTERN · HIDDEN_REASONS · SOLVER_FEEDBACK_LOCALES 는 SQL check 제약과 같은 값이어야 한다.
 */

/** 솔버 랜딩이 있는 15개 언어 = 후기창이 열리는 언어(설계 §1-8 전 언어 동시 개통 · tr·vi 10-09 · ru 10-10 추가) */
export const SOLVER_FEEDBACK_LOCALES = ["ko", "en", "ja", "es", "pt", "de", "zh", "zh-hant", "fr", "id", "ms", "hi", "tr", "vi", "ru"] as const;
export type SolverFeedbackLocale = (typeof SOLVER_FEEDBACK_LOCALES)[number];

export function isSolverFeedbackLocale(v: unknown): v is SolverFeedbackLocale {
  return typeof v === "string" && (SOLVER_FEEDBACK_LOCALES as readonly string[]).includes(v);
}

/** 로케일 → 랜딩 경로 (KO = /solver) — revalidatePath 와 로그인 복귀 주소가 쓴다 */
export function solverLandingPath(locale: SolverFeedbackLocale): string {
  return locale === "ko" ? "/solver" : `/${locale}/solver`;
}

/** 블록 앵커 — 로그인 복귀·앱 링크가 여기로 온다 */
export const SOLVER_REVIEWS_ANCHOR = "solver-reviews";

/** 앱(솔버 도메인) — /api/solver-feedback CORS 허용 출처는 이것 하나 */
export const SOLVER_APP_ORIGIN = "https://solver.holdemmaster.com";

/** 본문 2~600자(댓글 규칙 COMMENT_BODY_MIN = 2 와 같게) · 아쉬운 점 ≤200자 */
export const FEEDBACK_BODY_MIN = 2;
export const FEEDBACK_BODY_MAX = 600;
export const FEEDBACK_DOWNSIDE_MAX = 200;
export const REPLY_BODY_MAX = 1000;

/** 숨김 사유 = 세 개뿐(설계 §3-2) — 관리자 화면에도 이 세 개 말고 선택지가 없다 */
export const HIDDEN_REASONS = ["link", "abuse", "ad"] as const;
export type HiddenReason = (typeof HIDDEN_REASONS)[number];

export const FEEDBACK_KINDS = ["review", "question"] as const;
export type FeedbackKind = (typeof FEEDBACK_KINDS)[number];

export const DEVICES = ["phone", "tablet", "desktop"] as const;
export type Device = (typeof DEVICES)[number];

/** 후기가 이 개수 이상이어야 요약 줄·대표 후기를 보인다(설계 §2-3 빈 상태 표) */
export const MIN_REVIEWS_FOR_SUMMARY = 3;
/** 별점이 이 개수 이상일 때만 평균(가정 · +30일 판독 때 조정) */
export const MIN_RATINGS_FOR_AVERAGE = 5;
/** 대표 후기 최대 개수 */
export const FEATURED_MAX = 3;

/** 속도 제한(가정) — 한 사람이 10분에 남길 수 있는 질문 수 · 후기 저장 횟수 */
export const QUESTIONS_PER_10MIN = 3;
export const SAVES_PER_10MIN = 6;

/** 링크 거부 — supabase/solver-reviews.sql · supabase/participation.sql 의 check 제약과 같은 뜻 */
export const LINK_PATTERN = /(https?:\/\/|www\.|\.(com|net|org|kr|io|me|xyz|gg|ly|link|site|shop|top)([/?#]|$|[^a-z0-9]))/i;

/** 닉네임 — 커뮤니티 updateNickname 과 같은 검사(2~20자) + 사칭 금지어(설계 §3-1) */
export const NICKNAME_MIN = 2;
export const NICKNAME_MAX = 20;

/** 사칭 금지어 — 비교 전에 소문자화·공백/기호 제거. 14언어의 «운영자·관리자·공식» + 브랜드 */
export const IMPERSONATION_TERMS = [
  // 브랜드·도구
  "holdemmaster", "홀덤마스터", "gto솔버", "gtosolver", "admin", "administrator", "moderator", "official", "staff",
  // ko
  "운영자", "관리자", "운영진", "공식",
  // ja
  "運営", "管理者", "公式", "ホールデムマスター",
  // zh · zh-hant
  "管理员", "管理員", "官方", "版主",
  // es · pt · fr · de · id · ms
  "administrador", "moderador", "oficial", "administrateur", "modérateur", "officiel",
  // (id·ms «resmi/rasmi» 는 넣지 않는다 — «Rasmi» 는 흔한 인명이다)
  "betreiber", "offiziell", "pengelola", "pentadbir",
  // hi
  "व्यवस्थापक", "एडमिन", "आधिकारिक",
  // tr (10-09 · «resmi» 는 id·ms 와 같은 이유로 넣지 않는다)
  "yönetici", "moderatör",
  // vi (10-09 · 성조 없이 쓰는 꼴도 같이)
  "quản trị viên", "ban quản trị", "chính thức", "quantrivien", "chinhthuc",
] as const;

export function normalizeNickname(raw: string): string {
  return String(raw ?? "").replace(/\s+/g, " ").trim();
}

/** 닉네임 검사 — 실패면 이유 코드, 통과면 null */
export function nicknameProblem(raw: string): "short" | "long" | "link" | "impersonation" | null {
  const n = normalizeNickname(raw);
  const len = [...n].length;
  if (len < NICKNAME_MIN) return "short";
  if (len > NICKNAME_MAX) return "long";
  if (LINK_PATTERN.test(n) || /@/.test(n)) return "link";
  const squashed = n.toLowerCase().replace(/[\s._\-·•|/\\()[\]{}'"`~!?*+=#$%^&,:;<>]/g, "");
  if (IMPERSONATION_TERMS.some((t) => squashed.includes(t.toLowerCase().replace(/\s+/g, "")))) return "impersonation";
  return null;
}

/**
 * 프로필 이미지 캐릭터 세트(설계 §3-1) — 포커 소품 계열 · 글자 없음 · 브랜드 색.
 * 파일 = public/images/review-avatar-<id>.webp (scripts/gen-review-avatars.mjs 가 만든다)
 */
export const AVATAR_CHARACTERS = [
  "chip-gold", "chip-green", "chip-red", "chip-navy",
  "card-spade", "card-heart", "card-diamond", "card-club",
  "dealer-button", "chip-stack", "dice", "trophy",
] as const;
export type AvatarCharacter = (typeof AVATAR_CHARACTERS)[number];

export function avatarCharacterSrc(id: string): string {
  return `/images/review-avatar-${id}.webp`;
}

/** 올린 이미지 — Storage 공개 버킷 */
export const AVATAR_BUCKET = "review-avatars";
/** 원본 상한(가정) — 브라우저에서 줄인 뒤 보내므로 서버로 가는 것은 훨씬 작다 */
export const AVATAR_SOURCE_MAX_BYTES = 5 * 1024 * 1024;
/** 서버가 받는 상한 — 브라우저가 512px 로 줄인 이미지 */
export const AVATAR_UPLOAD_MAX_BYTES = 900 * 1024;
export const AVATAR_SIZE = 256;

/** 기기 판별 — 모델명은 저장하지 않는다(세 값만) */
export function deviceFromUserAgent(ua: string | null | undefined): Device | null {
  if (!ua) return null;
  if (/iPad|Tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(ua)) return "tablet";
  if (/Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(ua)) return "phone";
  return "desktop";
}
