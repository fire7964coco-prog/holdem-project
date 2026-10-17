import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import SolverReviews from "@/components/solver-reviews/solver-reviews";
import SolverClientHi from "./solver-client";
import { SOLVER_FAQ_HI } from "./faq";

// Hindi copy and research: docs/hi-solver-landing-brief.md.
const TITLE = "मुफ़्त GTO पोकर सॉल्वर — सीधे ब्राउज़र में | HoldemMaster";
const DESCRIPTION =
  "मुफ़्त GTO poker solver। ब्राउज़र में postflop रणनीति, equity और EV देखें और अपने स्पॉट से अभ्यास करें। इंस्टॉल करने या खाता बनाने की ज़रूरत नहीं।";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/hi/solver`,
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
      "hi-IN": `${SITE}/hi/solver`,
      "tr-TR": `${SITE}/tr/solver`,
      "vi-VN": `${SITE}/vi/solver`,
      "ru-RU": `${SITE}/ru/solver`,
      "it-IT": `${SITE}/it/solver`,
    },
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  openGraph: {
    title: "मुफ़्त GTO पोकर सॉल्वर — HoldemMaster",
    description: DESCRIPTION,
    url: `${SITE}/hi/solver`,
    siteName: "HoldemMaster",
    locale: "hi_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "मुफ़्त GTO पोकर सॉल्वर — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/hi/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "hi",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "13×13 ग्रिड में शुरुआती हैंड के 169 प्रकारों की कार्रवाई की आवृत्ति",
        "हर हैंड के लिए equity, EV और equity realization (EQR)",
        "बदली जा सकने वाली range, बोर्ड, stack और bet व raise size",
        "Rake का प्रतिशत और अधिकतम सीमा, और हर नोड पर निर्णय के tree में बदलाव",
        "इस नोड की रणनीति लॉक करें — कार्रवाई की आवृत्ति तय करके दोबारा गणना",
        "इस स्पॉट का अभ्यास करें — अपने गणना किए गए स्पॉट के सवाल और अभ्यास का इतिहास सिर्फ़ इसी डिवाइस पर",
        "32-bit float या 16-bit integer सटीकता मोड और exploitability लक्ष्य",
        "तुरंत परिणाम देखने के लिए पहले से गणना किए गए अभ्यास स्पॉट",
        "Flop अध्ययन — चुने गए स्पॉट, पोज़िशन और बोर्ड के लिए पहले से गणना की गई flop रणनीति तुरंत देखें (सिर्फ़ flop तक, bet साइज़ तय)",
        "Flop रिपोर्ट — पहले से गणना किए गए 1,755 flop पर bet आवृत्ति और EV का औसत (आने की आवृत्ति से भारित), बोर्ड समूहों के हिसाब से तुलना",
        "Pot के अनुपात में EV नुकसान पर मूल्यांकन वाला GTO Trainer",
        "GTO Trainer में RNG अभ्यास — हर हैंड पर 1–100 का नंबर बताता है कि कौन-सा एक्शन चुनना है, मिक्स्ड रणनीति के अभ्यास के लिए (High/Low; आज की चुनौती और मेरे स्पॉट में नहीं)",
        "Preflop चार्ट और Equity कैलकुलेटर टैब",
        "CSV में परिणाम का सार, JSON इंपोर्ट व एक्सपोर्ट और स्पॉट शेयर करने का लिंक",
        "इंस्टॉल या खाते के बिना ब्राउज़र में WebAssembly गणना",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_HI.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "होम", item: `${SITE}/hi` },
        { "@type": "ListItem", position: 2, name: "GTO सॉल्वर", item: `${SITE}/hi/solver` },
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
      <HubPage title="GTO सॉल्वर" locale="hi">
        <SolverClientHi reviews={<SolverReviews locale="hi" />} />
      </HubPage>
    </>
  );
}
