import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "مجتمع HoldemMaster — Feed مباشر للاعبي البوكر",
  description: "ناقش استراتيجية تكساس هولدم والأيدي والبلايند مع لاعبين من جميع أنحاء العالم. Feed مباشر — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/ar/` },
  openGraph: {
    title: "مجتمع HoldemMaster — Feed مباشر للاعبي البوكر",
    description: "استراتيجية · أيدي · ترتيب — ناقش مع لاعبي بوكر من 14 دولة.",
    url: `${SITE}/ar/`,
    siteName: "HoldemMaster",
    locale: "ar_AR",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="ar" />;
}
