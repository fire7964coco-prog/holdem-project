import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_PT } from "./dict";
import { HAND_CHART_FAQ_PT } from "./faq";

/** `/pt/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts.
 *  og locale(pt_BR)·inLanguage(pt-BR)·브레드크럼 «Início»는 app/pt/calculator/page.tsx와 같다. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_PT.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_PT.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/pt/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/pt/hand-chart`,
    siteName: "HoldemMaster",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — tabela de range de mãos no poker" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_PT.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/pt/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pt-BR",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Todas as 169 mãos do pré-flop",
        "Ranges de abertura do UTG, HJ, CO, button e small blind",
        "Toque numa posição para destacar só aquele range",
        "Cores por posição de abertura (UTG a SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_PT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/pt` },
        { "@type": "ListItem", position: 2, name: "Tabela de range", item: `${SITE}/pt/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Tabela de range" locale="pt">
        <HandChartTool dict={HAND_CHART_DICT_PT} faq={HAND_CHART_FAQ_PT} />
      </HubPage>
    </>
  );
}
