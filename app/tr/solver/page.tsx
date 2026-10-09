import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { OG_IMAGE } from "@/lib/page-metadata";
import HubPage from "@/components/hub-page";
import SolverClientTr from "./solver-client";
import SolverReviews from "@/components/solver-reviews/solver-reviews";
import { SOLVER_FAQ_TR } from "./faq";

/**
 * `/tr/solver` — 터키어 솔버 랜딩. ★2026-10-06 신설(tr 회차 5).
 * 마스터 = `app/en/solver/*`(구조·SPEC·FEATURES·COMPARE·SPOT_GROUPS·FAQ 문항).
 *
 * 🔴 키워드 실측(DataForSEO 튀르키예 2792 · 2026-10-06 · 월): gto poker 30 · poker gto 30 ·
 *   gto nedir 40(오염 가능 — poker 앵커 필수) · poker solver 10 · gto solver 10 ·
 *   gto wizard 210(경쟁 브랜드 — 조준·광고 문구 금지, COMPARE 표의 EN 수준 언급만).
 * 솔버 앱 터키어 UI = 2026-10-09 라이브(S-049) — 앱 라벨은 라이브 ?lang=tr 터키어 축어, FAQ «Solver ekranı Türkçe mi?»는 «Evet»로 답한다.
 */

const TITLE = "Ücretsiz GTO Poker Solver — Tarayıcıda, Kurulumsuz | HoldemMaster";
const DESCRIPTION =
  "Ücretsiz GTO poker solver tarayıcında çalışır: indirme, üyelik ve limit yok. Postflop spotları çöz; her el için strateji, EV, equity ve EQR'yi gör.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 전 랜딩 파일이 완전히 같은 hreflang 세트여야 한다 — "tr-TR"은 기존 12파일에도 헤드가 단다.
  alternates: {
    canonical: `${SITE}/tr/solver`,
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
    },
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  openGraph: {
    title: "Ücretsiz GTO Poker Solver — HoldemMaster",
    description:
      "Postflop spotları tarayıcında çöz. 169 elin tamamı için strateji, EV, equity ve EQR — ücretsiz, kurulum yok.",
    url: `${SITE}/tr/solver`,
    siteName: "HoldemMaster",
    locale: "tr_TR",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HoldemMaster GTO solver" }],
  },
};

/**
 * 🔴 `featureList`는 EN과 같은 사실만 — 전부 `solver-client.tsx`의 FEATURES 표에도 문장으로 있다.
 *    한쪽만 고치지 말 것. `offers` price 0 = FAQ «gerçekten ücretsiz mi?»와 같은 주장.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Ücretsiz GTO Poker Solver — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/tr/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "tr",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "13×13 grid üzerinde 169 elin tamamı için bet, check ve fold sıklıkları",
        "El başına equity, EV ve equity realization (EQR)",
        "Özel range, board, stack ve bahis boyutu ağacı",
        "Rake ve rake tavanı, node node oyun ağacı düzenleme",
        "Node kilitleme — bir node'daki aksiyon sıklıklarını sabitle ve yeniden çöz",
        "Kendi çözdüğün spotları trainer sorusu olarak kaydetme (yalnızca bu cihazda)",
        "Hassasiyet modları (32-bit float / 16-bit integer) ve hedef exploitability",
        "Anında açılan, önceden çözülmüş çalışma spotları",
        "Kararları pota göre EV kaybıyla puanlayan GTO Trainer",
        "Özetin CSV olarak dışa aktarılması ve paylaşılabilir spot linkleri",
        "WebAssembly ile tarayıcıda çalışır — kurulum yok, hesap yok",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_TR.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: `${SITE}/tr` },
        { "@type": "ListItem", position: 2, name: "GTO Solver", item: `${SITE}/tr/solver` },
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
      <HubPage title="GTO Solver" locale="tr">
        <SolverClientTr reviews={<SolverReviews locale="tr" />} />
      </HubPage>
    </>
  );
}
