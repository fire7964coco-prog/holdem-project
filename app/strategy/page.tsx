import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import StrategyClient from "./strategy-client";
import HubPage from "@/components/hub-page";

// ★2026-08-01: metadata export가 없어 루트 기본 제목("홀덤마스터 — 텍사스 홀덤 완벽 가이드")이
//   그대로 나갔고, /glossary와 <title>이 완전히 같았다(두 페이지가 서로를 깎아먹음).
//   역할 분리: 이 페이지는 **주제별 색인 허브**, 학습 순서·깊이는 /blog/holdem-strategy 필라가 갖는다.
//   그래서 제목도 "무엇부터 배우나"(필라가 노리는 쿼리)가 아니라 "모아보기"로 잡는다.
export const metadata: Metadata = {
  title: "홀덤 전략 주제별 모아보기 — TAG·포지션·레인지·팟오즈",
  description:
    "타이트 어그레시브부터 포지션·스타팅 핸드·레인지 리딩·세미 블러핑·팟오즈까지, 홀덤 전략 주제를 한 화면에 모았습니다. 각 주제의 상세 가이드로 바로 이동하세요.",
  robots: { index: true, follow: true },
  // ★2026-08-02: alternates를 선언하지 않으면 루트 layout의 canonical(홈 절대주소)을 물려받는다.
  //   제목은 8/1에 고쳤지만 canonical은 계속 홈을 가리키고 있었다.
  alternates: { canonical: `${SITE}/strategy` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 (2026-08-13 — 구 `<SEO schema={jsonLd}>`는 죽은 코드였다).
 *
 * ⚠ 타입을 **Article → CollectionPage**로 바꿨다. 이 페이지의 정체는 위 metadata 주석대로
 *   «주제별 색인 허브»이고, 깊이·학습 순서는 `/blog/holdem-strategy` 필라가 갖는다.
 *   Article로 선언하면 필라와 같은 성격을 주장하게 되어 스스로 카니발을 만든다.
 * ⚠ `headline`/이름도 서버 metadata title에 맞췄다 — 구 코드 문구는 클라이언트 SEO의 옛 제목이라
 *   구글이 보는 `<title>`과 어긋났다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "홀덤 전략 주제별 모아보기 — TAG·포지션·레인지·팟오즈",
      description:
        "타이트 어그레시브부터 포지션·스타팅 핸드·레인지 리딩·세미 블러핑·팟오즈까지, 홀덤 전략 주제를 한 화면에 모았습니다. 각 주제의 상세 가이드로 바로 이동하세요.",
      url: `${SITE}/strategy`,
      isPartOf: { "@type": "WebSite", name: "홀덤마스터", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "홀덤 전략 가이드", item: `${SITE}/strategy` },
      ],
    },
  ];

  return (
    <HubPage title="전략">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StrategyClient />
    </HubPage>
  );
}
