import { isSecondaryLocale } from "@/lib/intl";

const RETURN_PAGES = new Set([
  "about", "blog", "calculator", "community", "contact", "glossary", "hand-chart",
  "hands", "holdem-practice", "post", "privacy", "pub", "quiz", "ranking", "rules",
  "solver", "strategy", "terms", "tournaments", "win-rate-quiz",
]);
const NESTED_PAGES = new Set(["blog", "community", "post", "pub", "rules"]);
const INTERNAL_ORIGIN = "https://return.holdemmaster.invalid";

/** Only public site routes may be used after authentication; preserve their UI state. */
export function safeAuthNext(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || /[\\\u0000-\u0020\u007f]/.test(value)) return "/";
  try {
    const url = new URL(value, INTERNAL_ORIGIN);
    if (url.origin !== INTERNAL_ORIGIN) return "/";
    const decodedPath = decodeURIComponent(url.pathname);
    // Encoded separators, further encoding and control characters cannot name site routes.
    if (/[\\:%\u0000-\u0020\u007f]/.test(decodedPath) || decodedPath.includes("//")) return "/";
    if (/%2f/i.test(url.pathname)) return "/";
    const parts = decodedPath.split("/").filter(Boolean);
    if (parts[0] && isSecondaryLocale(parts[0])) parts.shift();
    if (parts.length && (!RETURN_PAGES.has(parts[0]) || (parts.length > 1 && !NESTED_PAGES.has(parts[0])))) return "/";
    const pathname = url.pathname.replace(/\/$/, "") || "/";
    return `${pathname}${url.search}${url.hash}`;
  } catch {
    return "/";
  }
}

export function loginHref(next: string, options: { mode?: "recovery"; error?: "auth" | "oauth" | "recovery" } = {}): string {
  const query = new URLSearchParams({ next: safeAuthNext(next) });
  if (options.mode) query.set("mode", options.mode);
  if (options.error) query.set("error", options.error);
  return `/login?${query}`;
}

export function resetPasswordHref(next: string): string {
  return `/login/reset-password?${new URLSearchParams({ next: safeAuthNext(next) })}`;
}

export function authCallbackUrl(origin: string, next: string, recovery = false): string {
  const url = new URL("/auth/callback", origin);
  url.searchParams.set("next", safeAuthNext(next));
  if (recovery) url.searchParams.set("flow", "recovery");
  return url.toString();
}
