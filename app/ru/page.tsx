import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "Сообщество HoldemMaster — живая лента для игроков в покер",
  description: CHROME.ru.tagline,
  alternates: { canonical: `${SITE}/ru/` },
  openGraph: {
    title: "Сообщество HoldemMaster — живая лента для игроков в покер",
    description: CHROME.ru.tagline,
    url: `${SITE}/ru/`,
    siteName: "HoldemMaster",
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="ru" />;
}
