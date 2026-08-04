import Link from "next/link";
import { Spade } from "lucide-react";
import { CHROME, type SecondaryLocale } from "@/lib/intl";

export function IntlFooter({ locale, className = "" }: { locale: SecondaryLocale; className?: string }) {
  const t = CHROME[locale];
  const blogHref = `/${locale}/blog`;

  // ★크림 테마 (2026-08-04). 한국어 푸터(components/footer.tsx)에 2026-08-05에 적용한 것과
  //   같은 수정이다 — 이 파일은 그때 **아무 데서도 import되지 않는 죽은 코드**라 빠졌었다.
  //   다국어 허브 페이지에 푸터가 붙으면서 살아났다.
  return (
    <footer className={`relative z-10 mt-16 border-t border-border bg-card ${className}`} role="contentinfo">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(212,175,55,0.45)]"
                style={{ background: "linear-gradient(135deg, #f5d36a 0%, #d4af37 50%, #b8862a 100%)" }}
              >
                <Spade className="h-4 w-4 text-[#1a0e02] fill-current" aria-hidden="true" />
              </div>
              <span className="font-black text-xl text-foreground">{t.brand}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.tagline}</p>
          </div>

          <nav aria-label={t.contentHeading}>
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-primary mb-4 font-bold">
              {t.contentHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={blogHref}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" aria-hidden="true" />
                  {t.blogLabel}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t.languageHeading}>
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-primary mb-4 font-bold">
              {t.languageHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" aria-hidden="true" />
                  {t.koLabel}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground leading-relaxed">
          <p>&copy; {new Date().getFullYear()} {t.brand}. All rights reserved.</p>
          <p className="text-center md:text-right opacity-80">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
