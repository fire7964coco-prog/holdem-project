/**
 * 블로그 사이드바용 도구 CTA 버튼 (러닝맵 위).
 * 강점 도구(홀덤 확률·ICM 계산기 / GTO 솔버)로 유도 — 내부링크·체류·전환.
 * href/title/subtitle/Icon props 로 로케일·도구별 재사용 가능.
 *
 * ★2026-08-18: `Icon`·`pulse` 를 열었다 (사장님 지시 — 계산기 버튼 아래에 «같은 크기»로
 *   GTO 솔버 버튼을 하나 더 단다). 규격(패딩·아이콘칸 36px·글자 13/11px)은 건드리지 않는다 —
 *   두 버튼이 같은 크기로 보이는 근거가 이 컴포넌트를 공유한다는 사실 자체다.
 * ★`pulse=false` 는 «두 번째 버튼» 전용이다. 펄스가 둘이면 서로를 지운다 —
 *   시선을 끄는 건 계산기 하나로 두고, 아래 버튼은 같은 규격의 정적 카드로 둔다.
 */
import Link from "next/link";
import { Calculator, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function CalcCtaButton({
  href = "/calculator",
  title = "홀덤 확률 계산기",
  subtitle = "승률·아웃츠·팟오즈 즉시",
  Icon = Calculator,
  pulse = true,
}: {
  href?: string;
  title?: string;
  subtitle?: string;
  Icon?: LucideIcon;
  pulse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${pulse ? "calc-pulse " : ""}group mb-4 flex items-center gap-2.5 rounded-xl border-2 border-[#2563eb]/50 bg-gradient-to-br from-primary/15 to-card px-3 py-3 no-underline shadow-[0_0_16px_-6px_rgba(37,99,235,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb] hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)]`}
    >
      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
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
