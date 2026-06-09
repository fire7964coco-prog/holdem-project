"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Spade, Menu, X, Globe } from "lucide-react";
import { CHROME, type SecondaryLocale } from "@/lib/intl";

export function IntlHeader({ locale }: { locale: SecondaryLocale }) {
  const t = CHROME[locale];
  const blogHref = `/${locale}/blog`;
  const pathname = usePathname() || blogHref;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const blogActive = pathname.startsWith(blogHref);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        {t.skip}
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
            <Link href={blogHref} aria-label={t.brand} className="flex items-center gap-2.5 group">
              <div
                className="relative w-9 h-9 rounded-lg flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-[1.06]"
                style={{ background: "linear-gradient(135deg, #f5d36a 0%, #d4af37 50%, #b8862a 100%)" }}
              >
                <Spade className="h-[18px] w-[18px] text-[#1a0e02] fill-current" aria-hidden="true" />
                <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>
              <span className="font-serif font-black text-[22px] md:text-2xl tracking-tight text-gold-gradient">
                {t.brand}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              <Link
                href={blogHref}
                aria-current={blogActive ? "page" : undefined}
                className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-wider uppercase rounded-md transition-all duration-200 ${
                  blogActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.blogLabel}
              </Link>
              <Link
                href="/"
                className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-md border border-primary/25 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" /> {t.koLabel}
              </Link>
            </nav>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
              aria-expanded={mobileMenuOpen}
              aria-controls="intl-mobile-nav"
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="intl-mobile-nav"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-background pt-24 pb-8 px-6 flex flex-col md:hidden animate-in fade-in"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(43 60% 22% / 0.15) 0%, transparent 70%)",
          }}
        >
          <nav className="flex flex-col mt-4">
            <Link
              href={blogHref}
              className={`flex items-center gap-3 py-3.5 text-base font-semibold border-b border-primary/12 transition-colors ${
                blogActive ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              <span
                className={`w-1 h-5 rounded-full transition-colors ${blogActive ? "bg-primary" : "bg-primary/0"}`}
                aria-hidden="true"
              />
              {t.blogLabel}
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 py-3.5 text-base font-semibold border-b border-primary/12 text-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" aria-hidden="true" /> {t.koLabel}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
