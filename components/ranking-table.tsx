/**
 * 순위/목록형 콘텐츠(족보 순위 등) 상단 표시용 카드.
 * post.itemList 데이터로 렌더 — 티어 색상 랭크뱃지 + 구성 + 확률 배지.
 * description 포맷: "구성 · English · 확률" (' · ' 로 분리). 셋 다 선택.
 * 시맨틱 <ol> 사용(랭킹) — 접근성·GEO 친화.
 */
type Item = { name: string; description?: string };

export default function RankingTable({
  name,
  items,
  order = "Descending",
}: {
  name: string;
  items: Item[];
  order?: "Ascending" | "Descending";
}) {
  return (
    <section
      aria-label={name}
      className="mb-8 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.07] to-card overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-between gap-2 px-4 sm:px-5 py-3 border-b border-primary/20 bg-primary/[0.06]">
        <h2 className="m-0 text-sm sm:text-base font-extrabold text-[#141414] tracking-tight">{name}</h2>
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-primary/80">
          {order === "Ascending" ? "약 → 강" : "강 → 약"}
        </span>
      </div>
      <ol className="m-0 list-none p-0 divide-y divide-border/60">
        {items.map((it, i) => {
          const [compo, eng, prob] = (it.description ?? "").split(" · ");
          const tier = i < 3 ? "top" : i < 6 ? "mid" : "low";
          const badge =
            tier === "top"
              ? "bg-gradient-to-br from-primary to-yellow-500 text-black shadow-sm"
              : tier === "mid"
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground";
          return (
            <li
              key={i}
              className="flex items-center gap-3 px-4 sm:px-5 py-2.5 transition-colors hover:bg-primary/[0.04]"
            >
              <span
                className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full text-[13px] font-extrabold ${badge}`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <b className="text-[15px] font-bold text-[#141414] sm:text-base">{it.name}</b>
                  {eng && <span className="text-xs text-[#5b5b5b]">{eng}</span>}
                </span>
                {compo && (
                  <span className="mt-0.5 block text-xs text-[#333333] sm:text-[13px]">{compo}</span>
                )}
              </span>
              {prob && (
                <span className="flex-shrink-0 rounded-md bg-primary/10 px-2 py-1 text-[11px] font-semibold tabular-nums text-primary/90 sm:text-xs">
                  {prob}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
