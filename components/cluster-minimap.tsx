import Link from "next/link";
import { BookOpen, Crown, Percent, Target, Trophy, Book, Map, MapPin, ChevronDown, Store, Layers, Navigation } from "lucide-react";
import { EN_CLUSTERS, clusterForSlug, type PillarCluster } from "@/lib/pillar-clusters";

/**
 * 클러스터 미니맵 — 사이트 전체 학습 지도(아코디언) + 현재 위치 트레일.
 * 전 필라를 접힌 아코디언으로 보여주고, 현재 글이 속한 필라만 자동 펼쳐
 * 트레일(경로선)로 "너 여기" 핀 표시. 아코디언은 native <details> = JS 0, SSG 정적.
 * bare=true 면 카드 테두리 없이 내부만(모바일 <details> 임베드용).
 * clusters/hrefBase/labels 로 로케일 대응 (기본 EN, KO 등은 인자로 전달).
 */

const ICONS: Record<string, typeof BookOpen> = {
  rules: BookOpen,
  rankings: Crown,
  odds: Percent,
  strategy: Target,
  tournament: Trophy,
  glossary: Book,
  pub: Store,
  starting: Layers,
  position: Navigation,
};

type MinimapLabels = { learningMap: string; overview: string; youAreHere: string; hub: string };
const EN_LABELS: MinimapLabels = { learningMap: "Learning Map", overview: "Overview", youAreHere: "You are here", hub: "Hub" };

type Stop = { slug: string; label: string; hub?: boolean; group?: string; state: "past" | "current" | "future" | "neutral" };

function stopsFor(pillar: PillarCluster, slug: string, isCurrentPillar: boolean, overviewLabel: string): Stop[] {
  const currentIdx = pillar.nodes.findIndex((n) => n.slug === slug);
  const hubCurrent = slug === pillar.pillarSlug;
  const hubState: Stop["state"] = !isCurrentPillar ? "neutral" : hubCurrent ? "current" : "past";
  const stops: Stop[] = [{ slug: pillar.pillarSlug, label: overviewLabel, hub: true, state: hubState }];
  pillar.nodes.forEach((n, i) => {
    let state: Stop["state"];
    if (!isCurrentPillar) state = "neutral";
    else if (hubCurrent) state = "future";
    else state = i < currentIdx ? "past" : i === currentIdx ? "current" : "future";
    stops.push({ slug: n.slug, label: n.label, group: n.group, state });
  });
  return stops;
}

function Trail({ pillar, slug, isCurrentPillar, hrefBase, labels }: { pillar: PillarCluster; slug: string; isCurrentPillar: boolean; hrefBase: string; labels: MinimapLabels }) {
  const stops = stopsFor(pillar, slug, isCurrentPillar, labels.overview);
  const currentStopIdx = stops.findIndex((s) => s.state === "current");
  // "그다음 읽으면 좋을 글" = 현재 노드 바로 다음 stop. 다음이 없으면(현재가 마지막) 필라 허브(0번).
  let nextReadIdx = -1;
  if (isCurrentPillar && currentStopIdx >= 0) {
    nextReadIdx = currentStopIdx < stops.length - 1 ? currentStopIdx + 1 : 0;
    if (nextReadIdx === currentStopIdx) nextReadIdx = -1;
  }
  return (
    <ol className="relative ps-1">
      {stops.map((s, i) => {
        const isLast = i === stops.length - 1;
        const isCurrent = s.state === "current";
        const traveled = currentStopIdx >= 0 && i < currentStopIdx;
        const groupStart = s.group && s.group !== stops[i - 1]?.group;
        return (
          <li key={s.slug} className="flex gap-2.5">
            {/* 마커 + 경로선 */}
            <div className="flex flex-col items-center flex-shrink-0 w-4">
              {isCurrent ? (
                <MapPin className="w-4 h-4 fill-[#2563eb] text-[#2563eb] drop-shadow-[0_0_7px_rgba(37,99,235,0.8)]" aria-hidden="true" />
              ) : s.hub ? (
                <span className="mt-1 block w-3 h-3 rounded-full bg-primary ring-[3px] ring-card" />
              ) : s.state === "past" ? (
                <span className="mt-1 block w-2.5 h-2.5 rounded-full bg-primary/70 ring-[3px] ring-card" />
              ) : s.state === "neutral" ? (
                <span className="mt-1 block w-2 h-2 rounded-full bg-primary/50 ring-[3px] ring-card" />
              ) : (
                <span className="mt-1 block w-2.5 h-2.5 rounded-full bg-card border-2 border-primary/40 ring-[3px] ring-card" />
              )}
              {!isLast && (
                <span className={`w-[3px] flex-1 my-0.5 rounded-full ${traveled ? "bg-primary/55" : "bg-primary/20"}`} />
              )}
            </div>
            {/* 라벨 */}
            <div className={`min-w-0 ${isLast ? "pb-0.5" : "pb-2"}`}>
              {groupStart && (
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary/55 mb-1">{s.group}</div>
              )}
              {isCurrent ? (
                <div className="-mt-0.5 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/45 px-2 py-1 shadow-[0_0_18px_-4px_rgba(37,99,235,0.55)]">
                  <div className="text-[13px] font-bold text-foreground leading-snug">{s.label}</div>
                  <div className="text-[9px] font-semibold text-[#2563eb] uppercase tracking-wider mt-0.5">{labels.youAreHere}</div>
                </div>
              ) : (
                <Link href={`${hrefBase}/${s.slug}`} className="group inline-block leading-snug">
                  <span
                    className={`text-[13px] transition-colors ${
                      i === nextReadIdx
                        ? "font-bold text-primary"
                        : s.hub
                          ? "font-semibold text-foreground/90 group-hover:text-primary"
                          : "text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {s.label}
                  </span>
                  {i === nextReadIdx && (
                    <span className="minimap-next-emoji" aria-hidden="true"> 👉</span>
                  )}
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function ClusterMinimap({
  slug,
  bare = false,
  clusters = EN_CLUSTERS,
  hrefBase = "/en/blog",
  labels = EN_LABELS,
}: {
  slug: string;
  bare?: boolean;
  clusters?: PillarCluster[];
  hrefBase?: string;
  labels?: MinimapLabels;
}) {
  const cluster = clusterForSlug(slug, clusters);
  if (!cluster) return null;

  const currentIdx = cluster.nodes.findIndex((n) => n.slug === slug);
  const isHubCurrent = slug === cluster.pillarSlug;
  const pos = isHubCurrent ? labels.hub : `${currentIdx + 1} / ${cluster.nodes.length}`;

  const inner = (
    <>
      <div className="flex items-center justify-between mb-2.5">
        {!bare && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary/25 via-primary/12 to-primary/5 border border-primary/45 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
            <Map className="w-3.5 h-3.5" aria-hidden="true" /> {labels.learningMap}
          </span>
        )}
        <span className="ml-auto text-[10px] font-semibold text-[#2563eb] bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-full px-2 py-0.5">
          {pos}
        </span>
      </div>

      <div>
        {clusters.map((pillar) => {
          const Icon = ICONS[pillar.id] ?? Book;
          const isCurrentPillar = pillar.id === cluster.id;
          return (
            <details
              key={pillar.id}
              open={isCurrentPillar}
              className="group/pil border-b border-border/40 last:border-b-0"
            >
              <summary className="flex items-center gap-2 py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-lg hover:bg-primary/5 px-1 -mx-1 transition-colors">
                <Icon
                  className={`w-4 h-4 flex-shrink-0 ${isCurrentPillar ? "text-primary" : "text-muted-foreground/70"}`}
                  aria-hidden="true"
                />
                <span
                  className={`text-sm flex-1 leading-tight ${
                    isCurrentPillar ? "font-extrabold text-foreground" : "font-semibold text-muted-foreground"
                  }`}
                >
                  {pillar.pillarLabel}
                </span>
                <span className="text-[10px] text-muted-foreground/60 tabular-nums">{pillar.nodes.length}</span>
                <ChevronDown
                  className="w-4 h-4 text-muted-foreground/50 transition-transform duration-200 group-open/pil:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="pb-2 ps-1">
                <Trail pillar={pillar} slug={slug} isCurrentPillar={isCurrentPillar} hrefBase={hrefBase} labels={labels} />
              </div>
            </details>
          );
        })}
      </div>
    </>
  );

  if (bare) return inner;
  return (
    <nav
      aria-label="Learning roadmap"
      className="relative bg-gradient-to-b from-primary/[0.07] to-card border border-primary/30 rounded-2xl p-5 shadow-[0_3px_22px_-8px_rgba(212,175,55,0.35)]"
    >
      {inner}
    </nav>
  );
}
