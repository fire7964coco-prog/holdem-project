import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_ES } from "./dict";
import { HAND_CHART_FAQ_ES } from "./faq";

/** `/es/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts.
 *  og locale·inLanguage·브레드크럼 «Inicio»는 app/es/calculator/page.tsx와 같다. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_ES.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_ES.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/es/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/es/hand-chart`,
    siteName: "HoldemMaster",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — tabla de rangos de poker por posición" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_ES.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/es/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "es",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Las 169 manos preflop",
        "Rangos de apertura de UTG, HJ, CO, botón y ciega pequeña",
        "Toca una posición para resaltar solo ese rango",
        "Colores según la posición desde la que se abre (UTG a SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_ES.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/es` },
        { "@type": "ListItem", position: 2, name: "Tabla de rangos", item: `${SITE}/es/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Tabla de rangos" locale="es">
        <HandChartTool dict={HAND_CHART_DICT_ES} faq={HAND_CHART_FAQ_ES} />
      </HubPage>
    </>
  );
}
