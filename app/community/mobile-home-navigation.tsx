"use client";

import Link from "next/link";
import { HUB_PAGES } from "@/components/side-rail";

/** 같은 허브 링크를 모바일에서도 찾을 수 있게 한다. 하단 커뮤니티 4탭은 그대로 둔다. */
export default function MobileHomeNavigation() {
  return (
    <nav aria-label="홀덤 가이드 바로가기" className="px-4 pt-3 pb-1">
      <form action="/blog" role="search" className="flex items-center gap-2 rounded-xl border border-border bg-card px-3">
        <label htmlFor="home-search" className="sr-only">홀덤 글 검색</label>
        <span aria-hidden="true">⌕</span>
        <input id="home-search" name="q" type="search" placeholder="궁금한 규칙·핸드·전략 검색" className="min-w-0 flex-1 bg-transparent py-3 text-sm" />
        <button type="submit" className="min-h-11 px-1 text-sm font-bold text-primary-ink">검색</button>
      </form>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[13px] font-semibold">
        <Link href="/rules" className="rounded-lg border border-border bg-card px-1 py-3">처음 배우기</Link>
        <Link href="/strategy" className="rounded-lg border border-border bg-card px-1 py-3">전략 읽기</Link>
        <Link href="/calculator" className="rounded-lg border border-border bg-card px-1 py-3">도구 사용</Link>
      </div>
      <details className="mt-1">
        <summary className="cursor-pointer py-3 text-sm font-medium text-muted-foreground">전체 가이드·도구 메뉴</summary>
        <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-card p-2">
          {HUB_PAGES.map((page) => <Link key={page.href} href={page.href} className="rounded-lg px-2 py-3 text-[13px] hover:bg-muted">{page.icon} {page.label}</Link>)}
        </div>
      </details>
    </nav>
  );
}
