import Link from "next/link";
import { MapPin } from "lucide-react";
import { clusterForSlug } from "@/lib/pillar-clusters";

/**
 * 클러스터 미니맵 — "스타크래프트 미니맵 / 등산로 지도"식 세로 트레일.
 * 현재 글이 필라-클러스터 경로 어디쯤인지 시각화. SSG 정적 렌더 = 런타임 0.
 * 출발점(허브) → 정거장(클러스터 글). 방문=채운 점 / 현위치=골드 핀+글로우 / 예정=빈 점.
 * bare=true 면 카드 테두리 없이 내부만(모바일 <details> 임베드용).
 */
export default function ClusterMinimap({ slug, bare = false }: { slug: string; bare?: boolean }) {
  const cluster = clusterForSlug(slug);
  if (!cluster) return null;

  const total = cluster.nodes.length;
  const currentIdx = cluster.nodes.findIndex((n) => n.slug === slug);
  const isHub = slug === cluster.pillarSlug;

  type Stop = {
    slug: string;
    label: string;
    hub?: boolean;
    state: "past" | "current" | "future";
  };
  const stops: Stop[] = [
    { slug: cluster.pillarSlug, label: cluster.pillarLabel, hub: true, state: isHub ? "current" : "past" },
    ...cluster.nodes.map((n, i): Stop => ({
      slug: n.slug,
      label: n.label,
      state: isHub ? "future" : i < currentIdx ? "past" : i === currentIdx ? "current" : "future",
    })),
  ];
  const currentStopIdx = stops.findIndex((s) => s.state === "current");

  const inner = (
    <>
      <div className="flex items-center justify-between mb-3">
        {!bare && (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
            <MapPin className="w-3 h-3" aria-hidden="true" /> Cluster Map
          </span>
        )}
        <span className="text-[10px] font-medium text-muted-foreground ml-auto">
          {isHub ? "Hub" : `${currentIdx + 1} / ${total}`}
        </span>
      </div>

      <ol className="relative">
        {stops.map((s, i) => {
          const isLast = i === stops.length - 1;
          const isCurrent = s.state === "current";
          // 이 정거장 아래 경로선: 현위치보다 위(=지나온 길)면 밝은 골드, 아니면 흐리게.
          const traveled = currentStopIdx >= 0 && i < currentStopIdx;
          return (
            <li key={s.slug} className="flex gap-3">
              {/* 왼쪽: 정거장 마커 + 경로선 */}
              <div className="flex flex-col items-center flex-shrink-0 w-5">
                {isCurrent ? (
                  <MapPin
                    className="w-[19px] h-[19px] fill-primary text-primary drop-shadow-[0_0_6px_rgba(201,162,39,0.75)]"
                    aria-hidden="true"
                  />
                ) : s.hub ? (
                  <span className="mt-1 block w-3.5 h-3.5 rounded-full bg-primary ring-[3px] ring-card shadow-[0_0_0_1px_rgba(201,162,39,0.5)]" />
                ) : s.state === "past" ? (
                  <span className="mt-1 block w-3 h-3 rounded-full bg-primary/70 ring-[3px] ring-card" />
                ) : (
                  <span className="mt-1 block w-3 h-3 rounded-full bg-card border-2 border-primary/40 ring-[3px] ring-card" />
                )}
                {!isLast && (
                  <span className={`w-[3px] flex-1 my-0.5 rounded-full ${traveled ? "bg-primary/55" : "bg-primary/20"}`} />
                )}
              </div>

              {/* 오른쪽: 라벨 */}
              <div className={`min-w-0 ${isLast ? "pb-0.5" : "pb-3"}`}>
                {isCurrent ? (
                  <div className="-mt-0.5 rounded-lg bg-primary/12 border border-primary/40 px-2 py-1 shadow-[0_0_18px_-5px_rgba(201,162,39,0.6)]">
                    <div
                      className={`text-sm font-bold text-foreground leading-snug ${s.hub ? "uppercase tracking-wide" : ""}`}
                    >
                      {s.hub && <span className="text-primary me-1">&#9824;</span>}
                      {s.label}
                    </div>
                    <div className="text-[10px] font-semibold text-primary uppercase tracking-wider mt-0.5">You are here</div>
                  </div>
                ) : (
                  <Link href={`/en/blog/${s.slug}`} className="group inline-block leading-snug">
                    <span
                      className={`text-sm transition-colors ${
                        s.hub
                          ? "font-extrabold uppercase tracking-wide text-foreground group-hover:text-primary"
                          : "text-muted-foreground group-hover:text-primary"
                      }`}
                    >
                      {s.hub && <span className="text-primary me-1">&#9824;</span>}
                      {s.label}
                    </span>
                  </Link>
                )}
              </div>
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
