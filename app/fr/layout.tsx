import type { Metadata } from "next";
import { localeLayoutMetadata } from "@/lib/intl-locale-layout";

/**
 * `/fr` 서브트리 메타 — 루트 `app/layout.tsx`의 **한국어 기본값을 덮는다.**
 *
 * 🔴 이 파일에 문자열을 직접 적지 마라. 값·경위·게이트는 `lib/intl-locale-layout.ts` 한 곳이 정본이다
 *    (25개 언어에 같은 파일이 깔려 있어서, 여기서 손대면 그 하나만 갈린다).
 * 🔴 로케일을 추가하면 `app/<locale>/layout.tsx`도 같이 만들어라 —
 *    없으면 그 언어만 조용히 한국어 메타를 상속한다. 게이트: `npm run check:meta-lang`
 */
export const metadata: Metadata = localeLayoutMetadata("fr");

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
