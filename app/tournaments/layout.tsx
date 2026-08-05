import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { buildMetaTitle, buildMetaDescription } from "@/lib/tournaments-digest";
import { TOURNAMENT_HREFLANG } from "@/lib/tournaments-hreflang";

/**
 * ★ 메타데이터도 대회 데이터에서 자동 생성한다.
 *
 * 예전엔 title·description에 "2026.07.28 기준", "WSOP 파이널 8/3~5" 같은 날짜가
 * 손으로 박혀 있었다. 대회가 끝나도 메타에는 계속 남는 구조였고,
 * 2026-07-28에 "WSOP 진행중"이 13일간 노출된 사고의 절반이 이것이었다.
 *
 * 이제 lib/tournaments.ts 하나만 고치면 카드·JSON-LD·메타가 함께 갱신된다.
 *
 * ★2026-08-05: 문장을 만드는 로직을 `lib/tournaments-digest.ts`로 옮겼다.
 *   같은 문장이 **화면(히어로)과 <SEO> props에도** 필요한데, 그 두 자리는 여전히
 *   손으로 적혀 있어서 "사고의 나머지 절반"으로 남아 있었기 때문이다.
 *   한 곳에서 만들어야 메타와 화면이 갈리지 않는다. 출력 문구는 그대로다.
 */
function kstToday(): string {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function generateMetadata(): Metadata {
  const today = kstToday();
  const title = buildMetaTitle(today);
  const description = buildMetaDescription(today);

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}/tournaments`,
      languages: TOURNAMENT_HREFLANG,
    },
    openGraph: {
      title: `${title} | 홀덤마스터`,
      description:
        "국내·해외 홀덤 토너먼트 2026 일정표. 대회별 공식 출처 링크 첨부, 진행중/종료 자동 표시.",
      url: `${SITE}/tournaments`,
      siteName: "홀덤마스터",
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default function TournamentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
