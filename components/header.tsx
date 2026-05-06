"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Spade, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "홈" },
  {
    label: "가이드",
    children: [
      { href: "/rules", label: "기초 규칙" },
      { href: "/hands", label: "핸드 랭킹" },
      { href: "/hand-chart", label: "스타팅 핸드 차트" },
      { href: "/strategy", label: "전략 가이드" },
      { href: "/glossary", label: "용어 사전" },
    ],
  },
  { href: "/calculator", label: "계산기" },
  { href: "/pub", label: "홀덤펍" },
  { href: "/tournaments", label: "대회" },
  { href: "/quiz", label: "🃏 퀴즈" },
  { href: "/blog", label: "블로그" },
] as const;

function DropdownMenu({
  children,
  label,
}: {
  children: { href: string; label: string }[];
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const isActive = children.some((c) => pathname.startsWith(c.href) && c.href !== "/");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${label} 메뉴 열기`}
        className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold tracking-wider uppercase rounded-md transition-all duration-200 ${
          isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-r from-transparent via-primary to-transparent opacity-100"
              : "opacity-0"
          }`}
        />
      </button>

      {open && (
        <div role="menu" className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="bg-card/95 backdrop-blur-xl border border-primary/25 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(212,175,55,0.08)] overflow-hidden min-w-[180px]">
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                className="block px-5 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-150 border-b border-border/30 last:border-0"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        본문 바로가기
      </a>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 md:bg-background/85 md:backdrop-blur-xl border-b border-primary/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-background/95 to-transparent md:from-background/40 border-b border-transparent md:backdrop-blur-[2px]"
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px] md:h-20">
            <Link
              href="/"
              aria-label="홀덤마스터 홈으로 이동"
              className="flex items-center gap-2.5 group"
            >
              <div
                className="relative w-9 h-9 rounded-lg flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-[1.06]"
                style={{
                  background: "linear-gradient(135deg, #f5d36a 0%, #d4af37 50%, #b8862a 100%)",
                }}
              >
                <Spade className="h-[18px] w-[18px] text-[#1a0e02] fill-current" aria-hidden="true" />
                <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>
              <span className="font-serif font-black text-[22px] md:text-2xl tracking-tight text-gold-gradient">
                홀덤마스터
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="메인 네비게이션">
              {NAV_LINKS.map((link) => {
                if ("children" in link) {
                  return (
                    <DropdownMenu key={link.label} label={link.label} children={[...link.children]} />
                  );
                }
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href!);
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-wider uppercase rounded-md transition-all duration-200 ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px transition-all duration-300 ${
                        active
                          ? "bg-gradient-to-r from-transparent via-primary to-transparent opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="모바일 네비게이션"
          className="fixed inset-0 z-40 bg-background pt-24 pb-8 px-6 flex flex-col md:hidden animate-in fade-in"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(43 60% 22% / 0.15) 0%, transparent 70%)",
          }}
        >
          <nav className="flex flex-col mt-4" aria-label="모바일 메뉴">
            <Link
              href="/"
              className={`flex items-center gap-3 py-3.5 text-base font-semibold border-b border-primary/12 transition-colors ${
                pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              <span className="w-1 h-5 rounded-full bg-primary/0" aria-hidden="true" />홈
            </Link>

            <div className="border-b border-primary/12">
              <button
                type="button"
                onClick={() => setMobileGuideOpen(!mobileGuideOpen)}
                aria-expanded={mobileGuideOpen}
                aria-controls="mobile-guide-submenu"
                className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1 h-5 rounded-full bg-primary/0" aria-hidden="true" />
                  가이드
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileGuideOpen ? "rotate-180 text-primary" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileGuideOpen && (
                <div id="mobile-guide-submenu" className="pl-7 pb-2">
                  {[
                    { href: "/rules", label: "기초 규칙" },
                    { href: "/hands", label: "핸드 랭킹" },
                    { href: "/hand-chart", label: "스타팅 핸드 차트" },
                    { href: "/strategy", label: "전략 가이드" },
                    { href: "/glossary", label: "용어 사전" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "/calculator", label: "확률 계산기" },
              { href: "/pub", label: "지역별 홀덤펍" },
              { href: "/tournaments", label: "홀덤 대회" },
              { href: "/quiz", label: "족보 퀴즈" },
              { href: "/blog", label: "전략 블로그" },
            ].map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 py-3.5 text-base font-semibold border-b border-primary/12 transition-colors ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span
                    className={`w-1 h-5 rounded-full transition-colors ${
                      active ? "bg-primary" : "bg-primary/0"
                    }`}
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
