/**
 * 블로그 사이드바용 계산기 CTA 버튼 (러닝맵 위).
 * 강점 도구(홀덤 확률·ICM 계산기)로 유도 — 내부링크·체류·전환.
 * href/title/subtitle props 로 로케일별 재사용 가능.
 */
import Link from "next/link";
import { Calculator, ChevronRight } from "lucide-react";

export default function CalcCtaButton({
  href = "/calculator",
  title = "홀덤 확률 계산기",
  subtitle = "승률·아웃츠·팟오즈 즉시",
}: {
  href?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <Link
      href={href}
      className="calc-pulse group mb-4 flex items-center gap-2.5 rounded-xl border-2 border-[#2563eb]/50 bg-gradient-to-br from-primary/15 to-card px-3 py-3 no-underline shadow-[0_0_16px_-6px_rgba(37,99,235,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb] hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)]"
    >
      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
        <Calculator className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-extrabold leading-tight text-foreground">{title}</span>
        <span className="mt-0.5 block text-[11px] leading-tight text-muted-foreground">{subtitle}</span>
      </span>
      <ChevronRight
        className="h-4 w-4 flex-shrink-0 text-primary/70 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
