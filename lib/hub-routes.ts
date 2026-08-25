/**
 * 「허브 셸」을 쓰는 경로 — components/hub-shell.tsx가 마스트헤드·좌측 레일·하단 탭바·
 * 우측 사이드바를 **전부 자기가** 그리는 페이지들이다.
 *
 * site-chrome.tsx는 이 목록을 보고 전역 크롬(BlogTopBar·FixedSideRail·<main> 패딩)을
 * **비켜준다**. 안 그러면 상단바가 2겹, 좌측 레일이 2개가 된다
 * (2026-08-04에 다국어 상단바가 정확히 이 방식으로 2겹이 됐던 전례가 있다).
 *
 * ★새 허브 페이지를 만들면 여기에 경로를 추가하고 page.tsx를 <HubPage>로 감쌀 것.
 *   둘 중 하나만 하면 크롬이 어긋난다.
 */
const HUB_ROUTES = [
  "/blog",
  "/tournaments",
  "/pub",
  "/strategy",
  "/rules",
  "/calculator",
  "/hand-chart",
  "/quiz",
  "/win-rate-quiz",
  "/glossary",
  "/holdem-practice",
  // GTO 솔버 SEO 랜딩 (2026-08-08). 도구 본체는 solver.holdemmaster.com에 따로 있고
  // 그쪽은 noindex다 — 검색은 이 랜딩으로 일원화한다(서브도메인은 본체 도메인 권위를 못 받는다).
  "/solver",
] as const;

/** 하위 경로까지 셸을 쓰는 섹션 (예: /pub/gangnam, /rules/omaha) */
const HUB_SECTIONS = ["/pub", "/rules"] as const;

/**
 * 로케일별로 셸을 적용한 라우트 (2026-08-04 — en부터 하나씩 넓힌다).
 *
 * ★한국어 목록(HUB_ROUTES)을 그대로 재사용하지 않는 이유: 그 언어에 **실제로 존재하는
 *   페이지만** 넣어야 한다. 예컨대 /en/pub·/en/strategy는 없다.
 *   여기 없는 경로는 예전 크롬(BlogTopBar + 고정 레일)을 그대로 쓴다.
 * ★page.tsx를 <HubPage locale="…">로 감싸는 것과 **둘 다** 해야 한다. 하나만 하면
 *   상단바가 2겹이 되거나(등록만 함) 셸이 안 붙는다(감싸기만 함).
 */
const LOCALE_HUB_ROUTES: Record<string, readonly string[]> = {
  /**
   * ⚠ `/en/ranking`·`/en/quiz`는 좌측 레일 메뉴에서만 뺐다(사장님 요청).
   *   **여기서는 빼면 안 된다** — page.tsx가 <HubPage>로 감싸져 있어서 이 목록에서 지우면
   *   site-chrome이 BlogTopBar를 또 그려 상단바가 2겹이 된다.
   *   레일 노출과 셸 적용은 별개다.
   */
  // 🔴 2026-08-21 정정 — **`/en/solver`가 빠져 있었다.** 2026-08-19에 랜딩을 신설하면서
  //    side-rail·solver-promo·sitemap 셋에는 넣었는데 **여기만 누락**됐다.
  //    `page.tsx`는 <HubPage>로 감싸져 있으므로 isHubRoute가 거짓이면 크롬이 어긋난다
  //    (이 파일 상단 주석이 경고하는 바로 그 상태다). `/ja/solver` 신설 회차에 함께 고쳤다.
  en: ["/en/blog", "/en/calculator", "/en/glossary", "/en/hand-chart", "/en/quiz", "/en/ranking", "/en/solver", "/en/tournaments", "/en/win-rate-quiz"],
  /**
   * ja — ★2026-08-21 `/ja/solver` 신설. 일본어권에 솔버 진입로가 0개였다(본체는 noindex).
   *   ⚠ 그 외의 도구 페이지(calculator·hand-chart·glossary…)는 ja에 **여전히 없다.**
   *      없는 라우트를 넣으면 isHubRoute가 참이 되어 site-chrome이 전역 크롬을 비켜주는데
   *      정작 그 경로에 페이지가 없으니 아무 효과도 없다. **있는 것만 넣는다.**
   * es는 아직 2개뿐이다 (`app/es/`에 있는 건 blog·tournaments 둘뿐).
   */
  ja: ["/ja/blog", "/ja/solver", "/ja/tournaments"],
  // es — ★2026-08-22 `/es/solver` 신설. 스페인어권에 솔버 진입로가 0개였다(본체는 noindex).
  //      ⚠ `/es/hand-chart`·`/es/calculator`·`/es/win-rate-quiz`는 **여전히 없다** — 넣지 마라.
  es: ["/es/blog", "/es/solver", "/es/tournaments"],
  // pt — ★2026-08-23 `/pt/solver` 신설. 포르투갈어권에 솔버 진입로가 0개였다(본체는 noindex).
  //      ⚠ **pt는 es보다 가진 것이 적다** — `app/pt/`에 있는 것은 `blog`·`page.tsx`뿐이라
  //         **`/pt/tournaments`도 없다**(es에는 있다). 없는 라우트를 넣지 마라.
  pt: ["/pt/blog", "/pt/solver"],
  // de — 2026-08-10 신설. 독일어 지역·일정 검색 수요(LDA 4~9)를 받을 랜딩이 없었다.
  //      근거: docs/keyword-bank/de-core-volumes.md 시드⑫
  // ★2026-08-24 — `/de/solver` 신설과 함께 추가(6번째 솔버 랜딩).
  de: ["/de/blog", "/de/solver", "/de/tournaments"],
  // zh — ★2026-08-24 `/zh/solver` 신설과 함께 추가(7번째 솔버 랜딩). 중국어권에 솔버
  //      진입로가 0개였다(본체는 noindex). ⚠ `app/zh/`에 있는 것은 blog·tournaments·solver
  //      셋뿐이다 — 없는 라우트(hand-chart·calculator…)를 넣지 마라.
  zh: ["/zh/blog", "/zh/solver", "/zh/tournaments"],
  // zh-hant — ★2026-08-24 `/zh-hant/solver` 신설과 함께 추가(8번째 솔버 랜딩).
  //      번체권(대만·홍콩)에 솔버 진입로가 0개였다(본체는 noindex).
  //      ⚠ `app/zh-hant/`에 있는 것은 blog·tournaments·solver 셋뿐이다 — 없는 라우트를 넣지 마라.
  "zh-hant": ["/zh-hant/blog", "/zh-hant/solver", "/zh-hant/tournaments"],
  // fr — ★2026-08-24 `/fr/solver` 신설과 함께 추가(9번째 — 솔버 앱 fr 배포 당일).
  //      ⚠ **fr은 pt보다도 가진 것이 적다** — `app/fr/`에 있는 것은 blog·solver·page.tsx뿐이라
  //      **`/fr/tournaments`도 없다.** 없는 라우트를 넣지 마라.
  fr: ["/fr/blog", "/fr/solver"],
};

/**
 * 이 경로가 허브 셸을 쓰는가.
 * ⚠ `/blog/<slug>`(글 상세)는 **아니다** — 글은 목차·학습맵을 포함한 자기 3열 레이아웃을 갖는다.
 *   그래서 "/blog"는 정확히 일치할 때만 참이고, HUB_SECTIONS에 넣지 않았다.
 *   다국어도 같다: "/en/blog"는 목록만, "/en/blog/<slug>"는 글 자체 레이아웃이다.
 */
export function isHubRoute(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  if ((HUB_ROUTES as readonly string[]).includes(p)) return true;
  if ((HUB_SECTIONS as readonly string[]).some((s) => p.startsWith(s + "/"))) return true;
  const locale = p.split("/")[1];
  return (LOCALE_HUB_ROUTES[locale] ?? []).includes(p);
}
