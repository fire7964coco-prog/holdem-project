/**
 * 관련글·코스 이웃 선정 — **서버 전용** 모듈.
 *
 * 🔴 클라이언트 컴포넌트("use client")에서 import 금지.
 *    이 모듈의 인자는 POSTS 배열 전체다 — 클라이언트로 끌고 가면 본문 ~9.5MB가
 *    번들에 실리는 2026-07 이전의 3MB 사고가 재현된다
 *    (연혁: app/blog/[slug]/page.tsx 313-320행). 호출은 서버 컴포넌트에서 하고,
 *    결과는 카드에 필요한 필드만 골라 넘긴다.
 *
 * ★왜 만들었나 (2026-08-16 · GA4 실측)
 *   기존 관련글은 `POSTS.filter(같은 category).slice(0, 3)` — 배열 앞 3편 고정이라
 *   전략 30편이 전부 같은 3편을, 토너먼트 16편이 작년 대회 글을 1번 카드로 띄웠다.
 *   다국어(lib/intl-blog-page.tsx)는 카테고리 필터조차 없이 로케일 배열 앞 3편이었다.
 *   그 상수 목적지 9편이 28일 내부 유입 125세션(블로그 랜딩의 17.9%)을 독식하고
 *   있었다 — 슬롯은 눌리고 있으니, 목적지를 «관련 있는 곳»으로 바꾼다.
 *
 * 알고리즘 — 결정론적(SSG 안전 · 무작위 0 · 정렬 점수 없음):
 *   ① 같은 필라의 형제 노드(클러스터의 학습 순서 기준 다음 → 그다음 → 이전 → 허브).
 *      group(라이브 이벤트 등)이 있는 노드는 같은 group 먼저.
 *   ② GTO 시리즈 글이면 전략 필라 허브+노드로 내보낸다.
 *      🔴 시리즈 형제를 더 뿌리지 않는다 — lib/gto-series.ts의 「13×13 링크 금지」 규율.
 *      시리즈 내부 이동은 GtoSeriesNav가 이미 담당한다.
 *   ③ 같은 카테고리 안에서 **자기 위치부터 원형 회전**. `.slice(0,3)`과 달리
 *      카테고리 안의 모든 글이 정확히 3개의 인바운드를 받는다(롱테일 색인에 유리).
 *      배열 순서 기준이라 date/updated를 고쳐도 링크 그래프가 안 흔들린다.
 *   클러스터 맵이 없는 로케일(17개)·고아 글은 자동으로 ③으로 떨어진다 — 회귀 없음.
 */
import type { Post } from "./posts";
import { clusterForSlug, type PillarCluster } from "./pillar-clusters";
import { gtoSeriesItem, gtoSeriesNeighbors } from "./gto-series";

/**
 * 관련글 «목적지»로 쓰지 않는 slug. 반드시 사유를 적는다.
 * (링크를 받지 않을 뿐, 그 글 자체의 관련글은 정상 계산된다.)
 *
 * 🔴 `/hands`는 POSTS가 아니라 여기 올 일이 없지만 못을 하나 더 박아 둔다:
 *    noindex 도구 페이지로 링크를 보내지 않는다 (app/hands/page.tsx 상단 주석 참조).
 */
const RELATED_EXCLUDE: { slug: string; reason: string; until?: string }[] = [
  {
    slug: "wsop-2025-tournament-guide",
    reason: "작년 대회 아카이브 — 기존 로직에서 토너먼트 16편 전부의 1번 카드였다. 학습 동선의 목적지로 부적합.",
  },
  {
    slug: "holdem-spr",
    reason: "2026-09-13까지 측정 동결(대표 URL 판정 중) — 인바운드가 늘면 측정이 오염된다.",
    until: "2026-09-13",
  },
  // holdem-tournament-schedule-check(noindex)는 아래 noindex 가드가 자동으로 거른다.
];

/** 오늘 기준으로 유효한 제외 목록 (until이 지난 항목은 자동 복귀 — 빌드 시점 판정) */
function activeExcludes(): Set<string> {
  const today = new Date().toISOString().slice(0, 10);
  return new Set(
    RELATED_EXCLUDE.filter((e) => !e.until || e.until >= today).map((e) => e.slug),
  );
}

type MinimalPost = Pick<Post, "slug" | "category" | "noindex">;

/** 클러스터의 «학습 순서» 시퀀스: [허브, ...노드]. group이 있으면 현재 글의 group 멤버를 앞으로. */
function clusterSequence(cluster: PillarCluster, currentSlug: string): string[] {
  const nodes = [...cluster.nodes];
  const current = nodes.find((n) => n.slug === currentSlug);
  // group 힌트: 노드에 group이 «시작 표시»로만 붙는 데이터도 있어(EN Live Events),
  // 현재 글에 group이 명시된 경우에만 같은 group 우선 정렬을 적용한다(안정 정렬).
  if (current?.group) {
    const g = current.group;
    nodes.sort((a, b) => Number(b.group === g) - Number(a.group === g));
  }
  return [cluster.pillarSlug, ...nodes.map((n) => n.slug)];
}

/**
 * 관련글 최대 `limit`개의 slug를 결정론적으로 고른다.
 *
 * @param slug     현재 글
 * @param posts    그 로케일의 전체 글 배열 (KO는 POSTS, 로케일은 postsForLocale(locale))
 * @param clusters 그 로케일의 클러스터 맵 (KO_CLUSTERS / clustersForLocale(locale)). 빈 배열이면 ③만.
 */
export function relatedFor(
  slug: string,
  posts: readonly MinimalPost[],
  clusters: PillarCluster[],
  limit = 3,
): string[] {
  const excluded = activeExcludes();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const seen = new Set<string>([slug]);
  const out: string[] = [];
  const push = (s: string | undefined) => {
    if (!s || seen.has(s) || out.length >= limit) return;
    const p = bySlug.get(s);
    if (!p || p.noindex || excluded.has(s)) return;
    seen.add(s);
    out.push(s);
  };

  /**
   * 🔴 GTO 시리즈 글은 ①을 **건너뛴다** — 2026-08-18에 KO_CLUSTERS에 「GTO 솔버」 필라가
   *    생기면서(러닝맵·우측 사이드바 목적) 이 글들도 `clusterForSlug`에 잡히게 됐다.
   *    그대로 두면 ①이 먼저 걸려 **관련글 3개가 전부 시리즈 형제**가 된다 —
   *    lib/gto-series.ts의 「13×13 링크 금지」와 아래 ②의 설계가 조용히 뒤집힌다.
   *    시리즈 내부 이동은 GtoSeriesNav + 러닝맵이 이미 담당한다.
   */
  const inGtoSeries = gtoSeriesItem(slug) !== null;

  // ① 클러스터 — 학습 순서상 다음 → 그다음 → 이전 → 허브
  const cluster = inGtoSeries ? null : clusterForSlug(slug, clusters);
  if (cluster) {
    const seq = clusterSequence(cluster, slug);
    const i = seq.indexOf(slug);
    if (i >= 0) {
      push(seq[i + 1]);
      push(seq[i + 2]);
      push(seq[i - 1]);
      push(cluster.pillarSlug);
      // 아직 모자라면(끝 노드·허브·제외 걸림) 같은 필라 안에서 순서대로 채운다.
      for (const s of seq) push(s);
    }
  }

  // ② GTO 시리즈 글 → 전략 필라로 내보낸다 (시리즈 형제는 GtoSeriesNav 소관)
  if (out.length < limit && inGtoSeries) {
    const strategy = clusters.find((c) => c.id === "strategy");
    if (strategy) {
      push(strategy.pillarSlug);
      for (const n of strategy.nodes) push(n.slug);
    }
  }

  // ③ 카테고리 폴백 — 자기 위치부터 원형 회전
  if (out.length < limit) {
    const me = bySlug.get(slug);
    const pool = posts.filter((p) => !p.noindex && (!me || p.category === me.category));
    const start = pool.findIndex((p) => p.slug === slug);
    for (let k = 1; k <= pool.length && out.length < limit; k++) {
      push(pool[(Math.max(start, 0) + k) % pool.length]?.slug);
    }
  }

  // ④ 그래도 모자라면 전체 배열 원형 회전 (카테고리가 1~2편뿐인 경우)
  if (out.length < limit) {
    const all = posts.filter((p) => !p.noindex);
    const start = all.findIndex((p) => p.slug === slug);
    for (let k = 1; k <= all.length && out.length < limit; k++) {
      push(all[(Math.max(start, 0) + k) % all.length]?.slug);
    }
  }

  return out;
}

/**
 * 커리큘럼 기준 이전·다음 글. 클러스터에 없으면 null — 호출부가 기존
 * 날짜순 이웃으로 폴백한다(현행 동작 유지 = 고아 글 회귀 없음).
 *
 * 모바일 sticky 「다음 글」의 목적지가 이걸 따라간다 — 기존엔 전체 글
 * 날짜 내림차순의 이웃이라 주제 정합이 0이었다(모바일 1.57 vs 데스크톱 2.06 격차의 원인 후보).
 */
export function courseNeighbors(
  slug: string,
  posts: readonly MinimalPost[],
  clusters: PillarCluster[],
): { prevSlug: string | null; nextSlug: string | null } {
  const cluster = clusterForSlug(slug, clusters);
  if (!cluster) return { prevSlug: null, nextSlug: null };
  const excluded = activeExcludes();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const ok = (s: string | undefined): s is string => {
    if (!s || s === slug) return false;
    const p = bySlug.get(s);
    return !!p && !p.noindex && !excluded.has(s);
  };

  /**
   * GTO 시리즈는 **시리즈 순서**(lib/gto-series.ts)를 그대로 쓴다.
   * clusterSequence()에 맡기면 `group`(싱글 레이즈 팟·3벳 팟·블라인드전)이 붙어 있어
   * 「현재 글의 group을 앞으로」 정렬이 걸리고, 그 결과 ⑧의 이전이 ⑦이 아니게 된다.
   * 화면의 GtoSeriesNav(이전·다음)와 모바일 스티키 「다음 글」이 서로 다른 곳을 가리키면
   * 그게 곧 독자가 보는 모순이다 — 한 출처에서 뽑는다.
   */
  if (gtoSeriesItem(slug)) {
    const { prev, next } = gtoSeriesNeighbors(slug);
    return {
      prevSlug: ok(prev?.slug) ? prev!.slug : null,
      nextSlug: ok(next?.slug) ? next!.slug : null,
    };
  }
  const seq = clusterSequence(cluster, slug).filter((s) => s === slug || ok(s));
  const i = seq.indexOf(slug);
  if (i < 0) return { prevSlug: null, nextSlug: null };
  return { prevSlug: seq[i - 1] ?? null, nextSlug: seq[i + 1] ?? null };
}
