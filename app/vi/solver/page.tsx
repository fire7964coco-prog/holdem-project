import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { OG_IMAGE } from "@/lib/page-metadata";
import HubPage from "@/components/hub-page";
import SolverClientVi from "./solver-client";
import { SOLVER_FAQ_VI } from "./faq";

/**
 * `/vi/solver` — 베트남어 솔버 랜딩. ★2026-10-09 신설(솔버 vi 라이브 S-049 당일 · 14번째 랜딩).
 * 마스터 = `app/en/solver/*`(구조·SPEC·FEATURES·COMPARE·SPOT_GROUPS·FAQ 문항). 골격 = `app/tr/solver/*`(10-06).
 *
 * 🔴 키워드 실측(DataForSEO Vietnam 2704 · 라쿠 48개월 교차 · 2026-10-07 · 월 · 정본 `docs/keyword-bank/vi-gto-solver.md`):
 *   gto poker / poker gto 170(1순위 · 제목·H1) · range poker 70(포스트플랍 한정) · flop turn river 50 ·
 *   poker equity calculator 50 · gto poker là gì 30 · poker solver 20(어순 정본) · solver poker 10 · gto solver 10.
 *   🔴 오염: `gto` 단독 = 애니·자동차 → 제목·H2에서 반드시 «GTO poker»로 붙임 · `solver` 단독 = Excel ·
 *   `equity là gì` 2,400 = 재무(조준 금지) · `gto wizard` 880 = 경쟁 브랜드(이름만 · 가격·우열 금지 §12-B).
 *   베트남어 «솔버» 조어(phần mềm giải poker…)는 검색어가 아니다(null) → 검색어형은 라틴 축어, 설명은 베트남어.
 * 🔴 vi에는 GTO 예제 글·strategy·equity·c-bet 글이 없다(뱅크 §6 · hi 선례 ⓐ «링크 빈자리를 안고 랜딩 먼저»).
 *   내부링크 = 앱 진입 + `/vi/hand-chart` · `/vi/calculator`(10-07 신설) + vi 규칙 글. GTO 13편이 vi로 발행되면 SPOT_GROUPS의 `slug`를 채운다.
 * 솔버 앱 베트남어 UI = 2026-10-09 라이브(S-049) — 앱 라벨은 라이브 ?lang=vi 축어(`docs/solver-app-verbatim-vi-2026-10-09.md`).
 */

const TITLE = "GTO Poker Solver miễn phí — chạy ngay trên trình duyệt | HoldemMaster";
const DESCRIPTION =
  "GTO poker solver miễn phí chạy ngay trong trình duyệt — không tải về, không đăng ký. Giải spot postflop, xem chiến lược, EV, equity và EQR của từng tay bài.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 전 랜딩 파일이 완전히 같은 hreflang 세트여야 한다 — "vi-VN"은 기존 13파일에도 헤드가 단다(2026-10-09 추가).
  alternates: {
    canonical: `${SITE}/vi/solver`,
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
    title: "GTO Poker Solver miễn phí — HoldemMaster",
    description:
      "Giải spot postflop ngay trong trình duyệt. Chiến lược, EV, equity và EQR cho cả 169 tay bài — miễn phí, không cần cài đặt.",
    url: `${SITE}/vi/solver`,
    siteName: "HoldemMaster",
    locale: "vi_VN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HoldemMaster GTO solver" }],
  },
};

/**
 * 🔴 `featureList`는 EN과 같은 사실만 — 전부 `solver-client.tsx`의 FEATURES 표에도 문장으로 있다.
 *    한쪽만 고치지 말 것. `offers` price 0 = FAQ «có thật sự miễn phí không?»와 같은 주장.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "GTO Poker Solver miễn phí — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/vi/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "vi",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Tần suất bet, check và fold cho cả 169 tay bài trên lưới 13×13",
        "Equity, EV và equity realization (EQR) cho từng tay bài",
        "Tùy chỉnh range, board, stack và cây hành động với các size bet/raise",
        "Rake và mức rake tối đa, chỉnh cây trò chơi theo từng node",
        "Khóa node — cố định tần suất hành động ở một node rồi giải lại",
        "Lưu spot tự giải thành câu hỏi trainer (chỉ trên thiết bị này)",
        "Tùy chọn độ chính xác (số thực 32-bit / số nguyên 16-bit) và exploitability mục tiêu",
        "Spot mẫu đã giải sẵn, mở ngay lập tức",
        "Trainer GTO chấm quyết định theo EV mất so với pot",
        "Xuất phần tóm tắt ra CSV và liên kết chia sẻ spot",
        "Chạy trong trình duyệt bằng WebAssembly — không cài đặt, không tài khoản",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_VI.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE}/vi` },
        { "@type": "ListItem", position: 2, name: "GTO Solver", item: `${SITE}/vi/solver` },
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
      <HubPage title="GTO Solver" locale="vi">
        <SolverClientVi />
      </HubPage>
    </>
  );
}
