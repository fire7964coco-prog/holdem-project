import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

/**
 * 🔴 **`title` 은 반드시 `{ absolute: … }` 여야 한다** (2026-08-23 라이브 실측으로 발견).
 *    루트 `app/layout.tsx` 의 `title.template` 이 `"%s | 홀덤마스터"` 라, 그냥 문자열로 두면
 *    **비한국어 페이지 제목이 한국어 브랜드로 끝난다** — 구글 검색결과에 그대로 나가는 문자열이다.
 *    25개 로케일 홈이 전부 그 상태였다. `/en/win-rate-quiz` 주석이 이미 경고해 둔 «별도 건»이 이것이다.
 *    🔴 `LocaleHomeJsonLd` 가 `metadata.title` 을 재사용하므로 **상수로 빼서 양쪽이 같은 문자열**을 쓰게 했다
 *       (`{absolute:…}` 를 `as string` 으로 캐스팅하면 JSON-LD 에 객체가 들어간다).
 *    게이트: `npm run check:meta-lang`
 */
const PAGE_TITLE = "HoldemMaster Topluluğu — Dünya Genelinde Poker Oyuncuları için Canlı Feed";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: "Dünya genelindeki oyuncularla Texas Hold'em stratejisi, eller, blindlar ve sıralamayı tartışın. Gerçek zamanlı feed — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/tr/` },
  openGraph: {
    title: "HoldemMaster Topluluğu — Dünya Genelinde Poker Oyuncuları için Canlı Feed",
    description: "Strateji · eller · sıralama — 14 ülkeden poker oyuncularıyla canlı tartışın.",
    url: `${SITE}/tr/`,
    siteName: "HoldemMaster",
    locale: "tr_TR",
    type: "website",
  },
  // 🔴 **twitter:*를 안 주면 루트 `app/layout.tsx`의 «한국어»가 그대로 나간다.**
  //    2026-08-23 라이브 실측으로 발견 — **25개 로케일 홈 전부**가 twitter:title 로
  //    «홀덤마스터 — 텍사스 홀덤 완벽 가이드»를 내보내고 있었다(og:title 은 정상이었다).
  //    🔴 **DOM 밖 문자열이라 게이트 넷이 전부 못 봤다** — hreflang·directives·audit:hard·
  //       patch-html-lang 어느 것도 twitter 메타를 보지 않는다. 솔버 세션이 자기 매니페스트에서
  //       같은 유형을 겪고 경고해 준 덕에 찾았다.
  //    ⚠ **문구는 위 openGraph 를 그대로 재사용한다 — 새로 짓지 않는다**(메타와 스키마가 갈리는 것을
  //       이 레포에서 여러 건 치웠다).
  twitter: {
    card: "summary_large_image",
    title: "HoldemMaster Topluluğu — Dünya Genelinde Poker Oyuncuları için Canlı Feed",
    description: "Strateji · eller · sıralama — 14 ülkeden poker oyuncularıyla canlı tartışın.",
  },
};

export default function Page() {
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="tr"
        name={PAGE_TITLE}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="tr" />
    </>
  );
}
