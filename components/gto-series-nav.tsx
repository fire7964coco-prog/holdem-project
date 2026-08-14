import Link from "next/link";
import { GTO_SERIES_TOTAL, gtoSeriesItem, gtoSeriesNeighbors } from "@/lib/gto-series";

/**
 * GTO 솔버 시리즈 내비 — 시리즈 글에서만 렌더된다(아니면 null).
 *
 * ★목적은 둘이다
 *   ① 독자가 «이게 13편짜리 시리즈의 몇 번째인지» 알게 한다 (묶어서 관리)
 *   ② **링크를 `/solver` 랜딩으로 모은다.** 13편이 서로 링크를 뿌리면 시리즈 안에서 힘이 돌기만 한다.
 *      랜딩이 헤드텀(「홀덤 gto」 390)을 갖고 13편은 롱테일을 갖는 구조라, 랜딩이 이겨야 한다.
 *
 * 🔴 전체 목차를 여기 넣지 않는다 — 이전·다음 2개 + 허브 1개뿐이다(`lib/gto-series.ts` 주석 참조).
 * 🪶 기존 「이전 글 / 다음 글」 블록은 **날짜순**이라 13편이 전부 같은 날(2026-08-08) 발행이면
 *    순서가 사실상 임의다. 이 내비는 **시리즈 순서**를 따로 준다 — 둘은 목적이 다르다.
 */
export default function GtoSeriesNav({ slug }: { slug: string }) {
  const item = gtoSeriesItem(slug);
  if (!item) return null;
  const { prev, next } = gtoSeriesNeighbors(slug);

  return (
    <aside className="mt-10 rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          GTO 솔버 시리즈
        </span>
        <span className="text-[11px] font-bold text-primary">
          {item.mark} {item.n} / {GTO_SERIES_TOTAL}
        </span>
        <span className="text-[11px] text-muted-foreground">· {item.group} · {item.label}</span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        홀덤마스터 GTO 솔버의 교육 예제 스팟을 한 편씩 풀어 쓴 시리즈입니다. 계산 조건과
        전체 목차는{" "}
        <Link href="/solver" className="font-semibold text-primary hover:underline">
          무료 GTO 솔버
        </Link>{" "}
        페이지에 있고, 같은 예제를 눌러 결과를 직접 볼 수 있습니다.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="rounded-xl border border-border px-4 py-3 transition-colors hover:border-primary/50"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              ← 시리즈 이전
            </div>
            <div className="mt-0.5 text-sm font-semibold">
              {prev.mark} {prev.label}
            </div>
          </Link>
        ) : (
          <span className="rounded-xl border border-dashed border-border px-4 py-3 text-[11px] text-muted-foreground">
            여기가 시리즈의 첫 편입니다
          </span>
        )}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="rounded-xl border border-border px-4 py-3 transition-colors hover:border-primary/50"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              시리즈 다음 →
            </div>
            <div className="mt-0.5 text-sm font-semibold">
              {next.mark} {next.label}
            </div>
          </Link>
        ) : (
          <Link
            href="/solver"
            className="rounded-xl border border-border px-4 py-3 transition-colors hover:border-primary/50"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              시리즈 끝 →
            </div>
            <div className="mt-0.5 text-sm font-semibold">스팟 전체 목차 보기</div>
          </Link>
        )}
      </div>
    </aside>
  );
}
