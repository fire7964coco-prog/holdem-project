import type { Post } from "./posts";
import type { SecondaryLocale } from "./intl";
import {
  KO_CLUSTERS, EN_CLUSTERS, JA_CLUSTERS, ES_CLUSTERS,
  PT_CLUSTERS, DE_CLUSTERS, ZH_CLUSTERS, ZH_HANT_CLUSTERS, ID_CLUSTERS,
  type PillarCluster,
} from "./pillar-clusters";

/**
 * 「이번 주 인기 / Trending」 목록 — **필라 2개 + 최신 2개**.
 *
 * ★2026-08-04 재작성. 그 전엔 한국어 슬러그 6개(`apt-incheon-2026-guide` 등)를 이 파일에
 *   **하드코딩**해 두고 모든 언어에 그대로 적용했다. 사장님 지적으로 걷어냈다:
 *
 *     "각 언어가 ko를 번역한 게 아니라 ko를 기반으로 독자적인 포스팅이 있는 구조다.
 *      Trending에는 그 언어에 있는 포스팅을 넣어야 한다."
 *
 *   실제로 /en/calculator의 Trending 1번이 한국어 "2026 홀덤 대회 일정"으로 떴었다.
 *   이제 **슬러그를 한 줄도 적지 않는다.** 순서는 두 가지 자동 규칙에서만 나온다:
 *
 *     1~2번 = 그 언어 클러스터의 **필라** 순서 (lib/pillar-clusters.ts)
 *             → 처음 온 독자가 룰·족보 같은 기초로 들어갈 길
 *     3~4번 = 그 언어의 **최신 업데이트** 글 (필라와 중복 제거)
 *             → 재방문자에게 새 것. 글을 갱신하면 여기가 저절로 바뀐다
 *
 *   필라만 4개면 영영 안 바뀌어 죽은 영역이 되고, 최신만 4개면 대회 글로 도배된다
 *   (JA 실측: 최신 4개가 전부 2026-07-30 대회 글이라 기초 글이 하나도 안 보였다).
 *
 * ⚠ 새 언어를 추가하면 `CLUSTERS_BY_LOCALE`에 항목을 넣을 것. 없으면 필라 자리가 비고
 *   최신 4개로 채워진다(동작은 하지만 기초 진입로가 사라진다).
 */

export type TrendingItem = {
  href: string;
  title: string;
};

/** 필라를 몇 개까지 앞에 둘지 */
const PILLAR_COUNT = 2;
/** 전체 몇 개를 보여줄지 */
const TOTAL = 4;

const CLUSTERS_BY_LOCALE: Partial<Record<SecondaryLocale, PillarCluster[]>> = {
  en: EN_CLUSTERS,
  ja: JA_CLUSTERS,
  es: ES_CLUSTERS,
  pt: PT_CLUSTERS,
  de: DE_CLUSTERS,
  zh: ZH_CLUSTERS,
  "zh-hant": ZH_HANT_CLUSTERS,
  id: ID_CLUSTERS,
};

function clustersFor(locale: SecondaryLocale | null): PillarCluster[] {
  return locale ? CLUSTERS_BY_LOCALE[locale] ?? [] : KO_CLUSTERS;
}

type PostMeta = Pick<Post, "slug" | "title" | "date" | "updated">;

/**
 * @param posts  그 로케일의 글 목록
 * @param locale null이면 한국어
 *
 * 존재하지 않는 필라 슬러그는 조용히 건너뛴다(그 언어에 아직 안 쓴 필라가 있을 수 있다).
 * 그만큼 최신 글이 더 들어와 항상 TOTAL개를 채운다.
 */
export function buildHubTrending(
  posts: PostMeta[],
  locale: SecondaryLocale | null = null
): TrendingItem[] {
  const base = locale ? `/${locale}` : "";
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const used = new Set<string>();
  const out: TrendingItem[] = [];

  const push = (p: PostMeta) => {
    used.add(p.slug);
    out.push({ href: `${base}/blog/${p.slug}`, title: p.title });
  };

  // 1) 필라 — 클러스터 정의 순서 그대로
  for (const c of clustersFor(locale)) {
    if (out.length >= PILLAR_COUNT) break;
    const p = bySlug.get(c.pillarSlug);
    if (p && !used.has(p.slug)) push(p);
  }

  // 2) 최신 업데이트 — 필라로 이미 쓴 글은 제외
  const fresh = [...posts]
    .filter((p) => !used.has(p.slug))
    .sort((a, b) => (b.updated || b.date).localeCompare(a.updated || a.date));
  for (const p of fresh) {
    if (out.length >= TOTAL) break;
    push(p);
  }

  return out.slice(0, TOTAL);
}
