import { TOURNAMENTS, computeStatus, type Tournament } from "./tournaments";

/**
 * 「오늘 기준 대회 현황」을 대회 데이터에서 만들어 내는 단일 소스.
 *
 * ★왜 만들었나 (2026-08-05)
 *   `app/tournaments/layout.tsx`가 이미 메타(title·description)를 자동 생성하고 있었다.
 *   그 파일 주석이 밝힌 대로 *"2026-07-28에 'WSOP 진행중'이 13일간 노출된 사고"* 를 고친 것이다.
 *   그런데 **고쳐진 건 절반뿐이었다.** 정작 사람이 보는 두 자리는 손으로 박힌 채 남아 있었다:
 *
 *     1) 히어로 아래 안내 문장 — "2026년 7월 28일 기준 … 파이널 테이블만 8월 3~5일 남았습니다"
 *     2) tournaments-client.tsx가 <SEO>에 넘기던 title·description
 *
 *   2번이 특히 나빴다. `components/seo.tsx`는 받은 props를 **useEffect에서 무조건**
 *   document.title·description에 덮어쓴다. 그래서 서버는 layout.tsx가 만든 옳은 제목을
 *   내보내는데 **JS가 돌면서 낡은 제목으로 되돌리고 있었다.** curl로는 안 잡히는 종류다.
 *
 *   1번 문장에는 시한폭탄이 셋 있었다 — ①"7월 28일 기준" ②"파이널 테이블만 8/3~5 남았다"
 *   (8/5에 만료) ③"99개 수여"(브레이슬릿 100개 중 마지막 1개가 8/5 결정 → 8/6이면 틀린 문장).
 *   손으로 적는 한 이런 폭탄은 계속 생긴다. 그래서 **문장에서 손으로 적은 사실을 전부 뺐다.**
 *
 * ★날짜는 반드시 인자로 받는다 — 여기서 new Date()를 부르면 안 된다.
 *   서버(빌드)와 클라이언트의 값이 갈려 하이드레이션 불일치가 난다.
 *   호출자가 KST 기준 todayISO를 넘긴다(`app/tournaments/page.tsx`·`layout.tsx`).
 *
 * ★갱신은 배포가 아니라 크론이 한다 — `vercel.json`의 `/api/cron/rebuild`가 매일 00:20 KST에
 *   리빌드하므로, 이 함수를 쓰는 자리는 사람이 손대지 않아도 날짜가 따라간다.
 */

/** "8/7" — 한국어 표기에서 앞의 0을 떼고 슬래시로 */
function md(iso: string): string {
  return `${Number(iso.slice(5, 7))}/${Number(iso.slice(8, 10))}`;
}

/**
 * 이름 뒤에 날짜를 붙일 때 쓰는 짧은 이름.
 *
 * 대회명에 회차 구분용 월 표기가 붙은 게 6건 있다("WSOP Circuit 체로키 (8월)",
 * "partypoker Tour 런던 (7월)"·"(12월)" 등). 그대로 두고 날짜를 붙이면
 * **"WSOP Circuit 체로키 (8월)(8/6)"** 처럼 괄호가 겹친다(2026-08-05 빌드에서 실제로 나왔다).
 * 뒤에 붙는 날짜가 훨씬 정확한 구분자라 월 표기는 떼도 정보가 줄지 않는다.
 */
function shortName(t: Tournament): string {
  return t.name.replace(/\s*\(\d+월\)$/, "");
}

/** "2026년 8월 5일" */
function koDate(iso: string): string {
  return `${Number(iso.slice(0, 4))}년 ${Number(iso.slice(5, 7))}월 ${Number(iso.slice(8, 10))}일`;
}

export interface TournamentDigest {
  /** "2026.08.05" — 메타용 */
  asOfDot: string;
  /** "2026년 8월 5일" — 본문용 */
  asOfKo: string;
  /**
   * 오늘 진행 중인 대회. **재정렬하지 않는다** — `TOURNAMENTS`가 이미 시작일 오름차순이라
   * 먼저 시작한(=대개 더 크고 오래 도는) 대회가 앞에 온다. 실측 2026-08-05에 이 순서가
   * 제57회 WSOP를 1번으로 올린다. `highlight` 우선 정렬도 만들어 봤으나,
   * 기존 메타 문구를 바꿔 버려서 규칙을 하나 줄이는 쪽을 택했다.
   */
  ongoing: Tournament[];
  /** 오늘 이후 개막, 빠른 순 (국내·해외 전부) */
  upcoming: Tournament[];
  /** 오늘 이후 개막하는 국내 대회 — 메타 제목의 훅으로 쓴다 */
  upcomingDomestic: Tournament[];
}

export function buildDigest(todayISO: string): TournamentDigest {
  const dated = TOURNAMENTS.filter((t) => t.startDate);
  const upcoming = dated
    .filter((t) => computeStatus(t, todayISO) === "upcoming")
    .sort((a, b) => a.startDate!.localeCompare(b.startDate!));

  return {
    asOfDot: todayISO.replace(/-/g, "."),
    asOfKo: koDate(todayISO),
    ongoing: dated.filter((t) => computeStatus(t, todayISO) === "ongoing"),
    upcoming,
    upcomingDomestic: upcoming.filter((t) => t.type === "domestic"),
  };
}

/**
 * 히어로 아래 한 줄. **손으로 적은 사실이 하나도 없다.**
 * 예) "2026년 8월 5일 기준 — 진행 중인 대회 8개(제57회 WSOP 2026·APPT Manila 2026 등),
 *      다음 개막은 WSOP Circuit 체로키(8/6)·APT 인천 2026(8/7)·Onyx High Roller Series(8/7)입니다"
 */
export function buildHeroLine(todayISO: string): string {
  const d = buildDigest(todayISO);
  const parts: string[] = [];

  if (d.ongoing.length) {
    const names = d.ongoing.slice(0, 2).map(shortName).join("·");
    // 3개 이상일 때만 "등" — 2개를 다 적어 놓고 "등"을 붙이면 거짓말이 된다
    const more = d.ongoing.length > 2 ? " 등" : "";
    parts.push(`진행 중인 대회 ${d.ongoing.length}개(${names}${more})`);
  } else {
    parts.push("진행 중인 대회는 없고");
  }

  if (d.upcoming.length) {
    const next = d.upcoming.slice(0, 3).map((t) => `${shortName(t)}(${md(t.startDate!)})`).join("·");
    parts.push(`다음 개막은 ${next}입니다`);
  } else {
    // 데이터가 비거나 연말에 남은 대회가 없을 때. 문장이 "…," 로 끊기지 않게 한다
    parts.push("예정된 대회는 아직 없습니다");
  }

  return `${d.asOfKo} 기준 — ${parts.join(", ")}`;
}

/** 메타 제목 — 가장 가까운 **국내** 대회를 훅으로 세운다 */
export function buildMetaTitle(todayISO: string): string {
  const { upcomingDomestic } = buildDigest(todayISO);
  const next = upcomingDomestic[0];
  return next
    ? `⚡ 홀덤 대회 일정 2026 — ${next.name} ${md(next.startDate!)} 개막`
    : "⚡ 홀덤 대회 일정 2026 — 국내외 공식 일정표";
}

/**
 * 메타 설명 — 158자에서 자른다(SERP 잘림선).
 *
 * ★조각을 조건부로 잇는다. 예전 layout.tsx는 `${ongoingText}${upcomingText} 예정.`으로
 *   고정 연결이라, 예정 대회가 비면 **"진행중 A ·  예정."** 처럼 문장이 덜렁거렸다
 *   (미래 날짜 시뮬레이션 2026-12-31·2027-03-01에서 실제로 나왔다).
 *   대회가 있는 평상시 출력은 예전과 **한 글자도 다르지 않다** — 2026-08-05 빌드로 대조했다.
 */
export function buildMetaDescription(todayISO: string): string {
  const d = buildDigest(todayISO);
  const parts: string[] = [];

  if (d.ongoing.length) {
    parts.push(`진행중 ${d.ongoing.slice(0, 2).map(shortName).join("·")}`);
  }
  if (d.upcomingDomestic.length) {
    const list = d.upcomingDomestic
      .slice(0, 3)
      .map((t) => `${shortName(t)} ${md(t.startDate!)}`)
      .join("·");
    parts.push(`${list} 예정`);
  }

  const state = parts.length ? ` · ${parts.join(" · ")}` : "";
  return (
    `【홀덤 대회 일정】${d.asOfDot} 기준${state}. ` +
    `⚡국내외 공식 일정·바이인을 대회별 공식 출처 링크와 함께.`
  ).slice(0, 158);
}
