import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import { GLOSSARY_ALTERNATES } from "@/lib/glossary-alternates";
import Glossary from "./glossary-client";
import { GLOSSARY_DICT_VI } from "./dict";

/** `/vi/glossary` — ★2026-10-10 vi 배포 회차(docs/vi-cluster-plan.md §4-C ①) 신설 · 구조 = app/fr/glossary·app/tr/glossary 복제.
 *  공용 컴포넌트 components/glossary + 이 폴더 사전. hreflang = lib/glossary-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const DICT = GLOSSARY_DICT_VI;
const TITLE = `${DICT.seo.title} | HoldemMaster`;
const DESCRIPTION = DICT.seo.description;
const URL = `${SITE}/vi/glossary`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL, languages: GLOSSARY_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "HoldemMaster",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: DICT.hero.h1 }],
  },
};

// 용어집의 정확한 타입 = DefinedTermSet(EN /en/glossary 주석 — FAQPage 합성 질문 금지).
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: DICT.hero.h1,
    description: DESCRIPTION,
    url: URL,
    inLanguage: "vi",
    hasDefinedTerm: DICT.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.desc,
      inDefinedTermSet: URL,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE}/vi` },
      { "@type": "ListItem", position: 2, name: DICT.hero.h1, item: URL },
    ],
  },
];

export default function Page() {
  return (
    <HubPage title={DICT.hero.h1} locale="vi">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Glossary />
    </HubPage>
  );
}
