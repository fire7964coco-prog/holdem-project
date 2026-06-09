"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EnHeader } from "@/components/en-header";
import { EnFooter } from "@/components/en-footer";

function useIsEn(): boolean {
  const pathname = usePathname() || "/";
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function SiteHeader() {
  return useIsEn() ? <EnHeader /> : <Header />;
}

export function SiteFooter() {
  return useIsEn() ? <EnFooter /> : <Footer />;
}

/**
 * /en 경로에서는 <html lang="en">, 그 외에는 "ko"로 동기화.
 * 루트 레이아웃은 SSG 유지를 위해 lang="ko"로 정적 렌더되며,
 * 이 컴포넌트가 클라이언트에서 영어 경로의 lang을 보정한다.
 */
export function HtmlLangSync() {
  const isEn = useIsEn();
  useEffect(() => {
    document.documentElement.lang = isEn ? "en" : "ko";
  }, [isEn]);
  return null;
}
