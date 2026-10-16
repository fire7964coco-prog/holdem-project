import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import { GLOSSARY_ALTERNATES } from "@/lib/glossary-alternates";
import Glossary from "./glossary-client";
import { GLOSSARY_DICT_PL } from "./dict";
const DICT = GLOSSARY_DICT_PL;
const TITLE = `${DICT.seo.title} | HoldemMaster`;
const DESCRIPTION = DICT.seo.description;
const URL = `${SITE}/pl/glossary`;

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
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: DICT.hero.h1 }],
  },
};
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: DICT.hero.h1,
    description: DESCRIPTION,
    url: URL,
    inLanguage: "pl",
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
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE}/pl` },
      { "@type": "ListItem", position: 2, name: DICT.hero.h1, item: URL },
    ],
  },
];

export default function Page() {
  return (
    <HubPage title={DICT.hero.h1} locale="pl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Glossary />
    </HubPage>
  );
}
