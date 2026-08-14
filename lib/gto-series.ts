/**
 * GTO 솔버 스팟 해설 시리즈 — **13편을 «묶어서 관리»하는 단일 출처** (사장님 지시 2026-08-15).
 *
 * ★왜 새 URL(`/gto` 같은 카테고리 페이지)을 만들지 않았나
 *   ① 얇은 카테고리 목록이 「홀덤 gto」(390)로 **`/solver` 랜딩과 경쟁**한다.
 *      `/hands`가 필라를 잡아먹어 noindex로 되돌린 것과 같은 계열의 실수가 된다
 *      ([[seo-tool-vs-blog-cannibalization]]).
 *   ② **그릇은 이미 있다** — `/solver` 랜딩이 13편을 계산 조건표와 함께 전부 링크한다.
 *   ③ `Category` 타입(전략·초보 가이드·토너먼트·확률·커뮤니티)은 25개 로케일·목록·스키마가
 *      함께 쓰는 전역 분류라, 여기에 값을 하나 더하면 파급이 크다.
 *   → 글이 20~30편으로 늘면 그때 색인 허브를 다시 판단한다.
 *
 * 🔴 **전체 목록을 각 글에 뿌리지 않는다.** 13×13 = 169개 링크가 되면 개별 링크의 값이 희석되고,
 *    시리즈 내부에서 힘이 돌기만 한다. 각 글에서는 **이전·다음 2개 + 허브(`/solver`) 1개**만 건다.
 *    시리즈 전체 목차는 허브 한 곳에만 둔다 — 링크가 랜딩으로 모이게 하는 구조다.
 *
 * 순서·보드는 `docs/gto-solver-series-spec.md` §4-B 확정표를 따른다. slug는 **절대 바꾸지 않는다**(§11-1).
 */

export interface GtoSeriesItem {
  /** 1-based 순번 */
  n: number;
  /** 화면 표기용 원문자 */
  mark: string;
  slug: string;
  /** 시리즈 내비에 쓰는 짧은 이름 (글 제목이 아니라 «어느 스팟인가») */
  label: string;
  group: "싱글 레이즈 팟" | "3벳 팟" | "블라인드전";
}

export const GTO_SERIES: GtoSeriesItem[] = [
  { n: 1, mark: "①", slug: "a-high-board-cbet", label: "A72 드라이 A하이", group: "싱글 레이즈 팟" },
  { n: 2, mark: "②", slug: "k-high-board-cbet", label: "K83 드라이 K하이", group: "싱글 레이즈 팟" },
  { n: 3, mark: "③", slug: "broadway-board-strategy", label: "QJT 브로드웨이 투톤", group: "싱글 레이즈 팟" },
  { n: 4, mark: "④", slug: "donk-bet-strategy", label: "987 미들 연결 — 동크벳", group: "싱글 레이즈 팟" },
  { n: 5, mark: "⑤", slug: "monotone-board-strategy", label: "Q92 모노톤", group: "싱글 레이즈 팟" },
  { n: 6, mark: "⑥", slug: "paired-board-strategy", label: "663 페어 보드", group: "싱글 레이즈 팟" },
  { n: 7, mark: "⑦", slug: "low-board-check-raise", label: "652 로우 레인보우", group: "싱글 레이즈 팟" },
  { n: 8, mark: "⑧", slug: "3bet-pot-cbet", label: "AK2 — SPR 4.0", group: "3벳 팟" },
  { n: 9, mark: "⑨", slug: "3bet-pot-bet-sizing", label: "QT7 다이나믹 투톤", group: "3벳 팟" },
  { n: 10, mark: "⑩", slug: "3bet-pot-low-board", label: "852 로우 드라이", group: "3벳 팟" },
  { n: 11, mark: "⑪", slug: "blind-battle-cbet", label: "KT6 미들킥", group: "블라인드전" },
  { n: 12, mark: "⑫", slug: "blind-battle-connected-board", label: "765 연결 투톤", group: "블라인드전" },
  { n: 13, mark: "⑬", slug: "ace-paired-board-strategy", label: "AA6 A 페어 보드", group: "블라인드전" },
];

/**
 * 🔴 **개수는 반드시 여기서 «계산»해 쓴다. 문장에 숫자를 박지 마라.**
 *   CLAUDE.md §1 — 「발행 개수를 문서에 적지 마라. 적는 순간 낡는다」.
 *   2026-08-15에 랜딩·FAQ·스키마에 「13개」가 하드코딩돼 있던 것을 사장님이 잡았다
 *   (「나는 주기적으로 포스팅을 계속 할 건데 13개보다 예시가 더 많을 거 아니야」).
 *   시리즈에 글을 추가하면 위 배열에 한 줄 넣는 것만으로 화면·스키마가 전부 따라온다.
 */
export const GTO_SERIES_TOTAL = GTO_SERIES.length;

/** 이 slug가 시리즈에 속하면 그 항목을, 아니면 null. */
export function gtoSeriesItem(slug: string): GtoSeriesItem | null {
  return GTO_SERIES.find((s) => s.slug === slug) ?? null;
}

/** 시리즈 순서 기준 이전·다음. 처음/끝은 null이다(순환시키지 않는다 — 끝을 아는 편이 낫다). */
export function gtoSeriesNeighbors(slug: string): { prev: GtoSeriesItem | null; next: GtoSeriesItem | null } {
  const i = GTO_SERIES.findIndex((s) => s.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return { prev: GTO_SERIES[i - 1] ?? null, next: GTO_SERIES[i + 1] ?? null };
}
