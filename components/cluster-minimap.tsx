import Link from "next/link";
import { clusterForSlug } from "@/lib/pillar-clusters";

/**
 * 클러스터 미니맵 — "스타크래프트 미니맵"처럼 현재 글이 필라-클러스터
 * 로드맵의 어디쯤인지 보여주는 세로 레일. SSG로 미리 렌더 = 런타임 비용 0.
 * - 헤더 = 필라 허브(클릭 시 허브로)
 * - 노드 = 클러스터 글(번호). 현재 글 = 골드 글로우 + ★
 * bare=true 면 카드 테두리 없이 내부만(모바일 <details> 임베드용).
 */
export default function ClusterMinimap({ slug, bare = false }: { slug: string; bare?: boolean }) {
  const cluster = clusterForSlug(slug);
  if (!cluster) return null;

  const total = cluster.nodes.length;
  const currentIdx = cluster.nodes.findIndex((n) => n.slug === slug);
  const isHub = slug === cluster.pillarSlug;

  const inner = (
    <>
      {(!bare || currentIdx >= 0) && (
        <div className="flex items-center justify-between mb-3">
          {!bare && (
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">Cluster Map</span>
          )}
          {currentIdx >= 0 && (
            <span className="text-[10px] font-medium text-muted-foreground ml-auto">
              {currentIdx + 1} / {total}
            </span>
          )}
        </div>
      )}

      {/* 필라 허브 (헤더) */}
      <Link
        href={`/en/blog/${cluster.pillarSlug}`}
        className={`flex items-center gap-2 mb-3 group rounded-lg -mx-1 px-1 py-1 ${
          isHub ? "bg-primary/15 border border-primary/40 shadow-[0_0_16px_-4px_rgba(201,162,39,0.55)]" : ""
        }`}
      >
        <span aria-hidden className="text-primary text-sm leading-none">&#9824;</span>
        <span
          className={`text-sm font-extrabold uppercase tracking-wide leading-tight ${
            isHub ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"
          }`}
        >
          {cluster.pillarLabel}
        </span>
        {isHub && (
          <span className="ml-auto text-primary text-xs" aria-label="current">
            &#9733;
          </span>
        )}
      </Link>

      <div className="h-px bg-border mb-2.5" />

      {/* 클러스터 노드 */}
      <ol className="space-y-1">
        {cluster.nodes.map((n, i) => {
          const num = i + 1;
          const isCurrent = n.slug === slug;
          if (isCurrent) {
            return (
              <li
                key={n.slug}
                className="flex items-center gap-2.5 rounded-lg bg-primary/15 border border-primary/40 px-2 py-1.5 shadow-[0_0_16px_-4px_rgba(201,162,39,0.55)]"
                aria-current="page"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[11px] font-black flex items-center justify-center">
                  {num}
                </span>
                <span className="text-sm font-bold text-foreground leading-snug flex items-center gap-1">
                  {n.label}
                  <span className="text-primary text-xs" aria-label="current">
                    &#9733;
                  </span>
                </span>
              </li>
            );
          }
          return (
            <li key={n.slug}>
              <Link
                href={`/en/blog/${n.slug}`}
                className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-primary/5 group transition-colors"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-[11px] font-bold flex items-center justify-center">
                  {num}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors leading-snug">
                  {n.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );

  if (bare) return inner;
  return (
    <nav aria-label="Cluster roadmap" className="bg-card border border-border rounded-2xl p-5">
      {inner}
    </nav>
  );
}
