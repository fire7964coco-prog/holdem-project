import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import SolverClientMs from "./solver-client";
import { SOLVER_FAQ_MS } from "./faq";

// Malaysian Malay copy and research: docs/ms-solver-landing-brief.md.
const TITLE = "Solver Poker GTO Percuma — Terus dalam Pelayar | HoldemMaster";
const DESCRIPTION =
  "Solver poker GTO percuma dalam pelayar. Kira strategi postflop, lihat equity dan EV, dan berlatih dengan spot anda. Tanpa pemasangan atau akaun.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/ms/solver`,
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      "es-ES": `${SITE}/es/solver`,
      "pt-BR": `${SITE}/pt/solver`,
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
      "zh-Hant": `${SITE}/zh-hant/solver`,
      "fr-FR": `${SITE}/fr/solver`,
      "id-ID": `${SITE}/id/solver`,
      "ms-MY": `${SITE}/ms/solver`,
    },
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  openGraph: {
    title: "Solver Poker GTO Percuma — HoldemMaster",
    description: DESCRIPTION,
    url: `${SITE}/ms/solver`,
    siteName: "HoldemMaster",
    locale: "ms_MY",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Solver Poker GTO Percuma — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/ms/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ms",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Kekerapan tindakan bagi 169 jenis tangan permulaan dalam grid 13×13",
        "Equity, EV dan realisasi equity (EQR) bagi setiap tangan",
        "Range, board, stack serta saiz bet dan raise yang boleh diubah",
        "Peratusan dan had maksimum rake, serta suntingan pokok keputusan pada setiap nod",
        "Kunci strategi pada nod ini — tetapkan kekerapan tindakan dan kira semula",
        "Berlatih spot ini — soalan daripada spot sendiri yang sudah dikira dan rekod latihannya kekal pada peranti ini sahaja",
        "Mod ketepatan float 32-bit atau integer 16-bit dan sasaran exploitability",
        "Spot belajar yang sudah dikira untuk melihat hasil dengan segera",
        "Trainer GTO dengan penilaian kerugian EV berbanding saiz pot",
        "Tab Carta preflop dan kalkulator Equity",
        "Eksport ringkasan CSV, import dan eksport JSON, serta pautan Kongsi Spot",
        "Pengiraan WebAssembly dalam pelayar tanpa pemasangan atau akaun",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_MS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Laman utama", item: `${SITE}/ms` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/ms/solver` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubPage title="Solver GTO" locale="ms">
        <SolverClientMs />
      </HubPage>
    </>
  );
}
