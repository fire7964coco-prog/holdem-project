import type { SecondaryLocale } from "./intl";

/**
 * 허브 셸(components/hub-shell.tsx)·우측 사이드바(hub-sidebar.tsx)가 쓰는 문자열.
 *
 * ★★여기 있는 값은 **하나도 새로 지어내지 않았다.** 전부 `app/community/community-client.tsx`의
 *   LABELS에서 **축어 그대로** 옮겨 온 것이다(2026-08-04 대조 완료). 그 파일은 홈 피드가 쓰는
 *   검증된 번역이고, 허브는 홈과 같은 셸이므로 같은 문구여야 화면이 어긋나지 않는다.
 *   (community-client에서 직접 import하지 않는 이유: 86KB 클라이언트 컴포넌트가 정적 페이지
 *    번들로 딸려온다. bottom-tab-bar가 TAB_LABELS를 따로 둔 것과 같은 이유다.)
 *
 * ⚠ **금액·시각은 특히 손대지 말 것.** 초안에서 EN eventDesc를 "$35 · $220 · $730"으로
 *   적었다가 원본 대조에서 잡았다 — 실제는 "$30 · $200 · $1,000"이다. 사람이 옮겨 적는
 *   순간 숫자가 바뀐다. LABELS를 고치면 여기도 **복사해서** 맞출 것(다시 쓰지 말 것).
 *
 * ★커버리지: 도구 페이지가 실제로 존재하는 로케일만 넣는다(현재 en·ja·es).
 *   나머지는 en으로 떨어진다 — 지금은 그 언어에 도구 페이지 자체가 없어 쓰이지 않는다.
 *   새 언어에 도구 페이지를 만들면 **여기 항목을 먼저 추가**할 것. 안 하면 영어가 섞인다.
 */

export interface HubLabels {
  /** 마스트헤드 로그인 버튼 (LABELS.login) */
  login: string;
  /** 좌측 레일 글쓰기 버튼 (LABELS.writePost) */
  write: string;
  /** 우측 사이드바 트렌딩 헤딩 (LABELS.trendingTitle) */
  trending: string;
  /** 이벤트 카드 (LABELS.eventBadge / eventTitle / eventDesc / eventDrawSchedule / eventButton) */
  eventBadge: string;
  eventTitle: string;
  eventDesc: string;
  eventSchedule: string;
  eventButton: string;
  /** 언어 섹션 헤딩 (LABELS.communityLang) */
  languages: string;
}

const KO: HubLabels = {
  login: "로그인",
  write: "✏️ 글 쓰기",
  trending: "🔥 이번 주 인기",
  eventBadge: "🎰 이벤트 · 준비 중",
  eventTitle: "번호 6개 선택\n기프트콘 증정!",
  eventDesc: "3개 → 5만원 · 4개 → 30만원\n5개 → 100만원",
  eventSchedule: "🔗 매주 일요일 오후 7시 (KST)\n비트코인 블록 해시로 자동 추첨",
  eventButton: "이벤트 보기 →",
  languages: "🌐 커뮤니티 언어",
};

const EN: HubLabels = {
  login: "Log in",
  write: "✏️ Write Post",
  trending: "🔥 Trending This Week",
  eventBadge: "🎰 Event · Coming Soon",
  eventTitle: "Pick 6 Numbers\nWin Gift Cards!",
  eventDesc: "3 match → $30 · 4 match → $200\n5 match → $1,000",
  eventSchedule: "🔗 Every Sunday 7 PM KST\nAuto-draw via Bitcoin block hash",
  eventButton: "View Event →",
  languages: "🌐 Community Languages",
};

const JA: HubLabels = {
  login: "ログイン",
  write: "✏️ 投稿する",
  trending: "🔥 今週のトレンド",
  eventBadge: "🎰 イベント · 準備中",
  eventTitle: "6つの数字を選んで\nギフト券をゲット！",
  eventDesc: "3一致 → $30 · 4 → $200\n5 → $1,000",
  eventSchedule: "🔗 毎週日曜 午後7時 (KST)\nBitcoin block hashで自動抽選",
  eventButton: "イベントを見る →",
  languages: "🌐 コミュニティ言語",
};

const ES: HubLabels = {
  login: "Iniciar sesión",
  write: "✏️ Escribir",
  trending: "🔥 Tendencias esta semana",
  eventBadge: "🎰 Evento · Próximamente",
  eventTitle: "Elige 6 números\n¡Gana tarjetas regalo!",
  eventDesc: "3 coincidencias → $30 · 4 → $200\n5 → $1,000",
  eventSchedule: "🔗 Cada domingo 7 PM KST\nSorteo automático via Bitcoin block hash",
  eventButton: "Ver evento →",
  languages: "🌐 Idiomas de la comunidad",
};

const MAP: Partial<Record<SecondaryLocale, HubLabels>> = { en: EN, ja: JA, es: ES };

/** locale이 null/undefined면 한국어 */
export function hubLabels(locale: SecondaryLocale | null | undefined): HubLabels {
  if (!locale) return KO;
  return MAP[locale] ?? EN;
}
