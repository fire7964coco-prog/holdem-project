/**
 * `/ranking` 공유 데이터 — 서버 `page.tsx`(JSON-LD)와 `ranking-client.tsx`(화면)가 **같은 배열**을 쓴다.
 *
 * ★2026-08-13에 분리했다. 그 전에는 클라이언트가 `SITES`를 갖고 `jsonLd`를 만들어
 *   `<SEO schema={jsonLd}>`로 넘기고 있었는데, `components/seo.tsx`는 `schema`를
 *   **구조분해에서 받지도 않는다** — 한 번도 출력된 적 없는 죽은 코드였다.
 *   라이브 산출물의 ld+json은 루트 layout의 WebSite·Organization뿐이었다.
 *
 * 🔴 **FAQ는 화면에 렌더되는 것과 스키마가 같은 출처여야 한다.**
 *   위 죽은 코드의 FAQPage는 질문 3개를 **스키마에만** 갖고 있었고 화면엔 없었다.
 *   그대로 서버로 옮겼다면 「본문에 없는 FAQPage」가 되어 구글 스펙 위반이고,
 *   LLM은 스키마만 있는 정보를 읽지 못한다(posting.mdc §GEO). → 화면 섹션을 함께 만들었다.
 */

export interface SiteEntry {
  name: string;
  logo: string;
  logoColor: string;
  tag: string;
  url: string;
  license: string;
  founded: string;
  features: string[];
  note: string;
}

// 전 세계적으로 널리 알려진 온라인 홀덤 사이트의 공개 정보(공식 URL·라이센스 관할·설립·특징)를 정리.
// 우리가 순위·보증하는 것이 아니라 사실 정리이며, 실제 이용·합법성은 본인 확인이 원칙이다. (2026-07 기준)
export const SITES: SiteEntry[] = [
  {
    name: "GGPoker (지지포커)",
    logo: "GG",
    logoColor: "from-blue-600 to-blue-800",
    tag: "현재 세계 최대 트래픽",
    url: "https://ggpoker.com",
    license: "Isle of Man (맨섬) 등",
    founded: "2014",
    features: ["WSOP 온라인 파트너", "Rush & Cash 등 캐주얼 포맷", "모바일 앱 지원"],
    note: "GG International Limited가 운영하며 맨섬(Isle of Man) 등에서 라이센스를 보유합니다. 현재 전 세계 온라인 포커 트래픽 1위로 알려져 있고, WSOP 온라인 브레이슬릿 이벤트를 진행하는 파트너사입니다.",
  },
  {
    name: "PokerStars (포커스타즈)",
    logo: "PS",
    logoColor: "from-red-600 to-red-800",
    tag: "업계 최장수 · 최대 역사",
    url: "https://www.pokerstars.com",
    license: "Malta (MGA) 등 다수",
    founded: "2001",
    features: ["WCOOP·SCOOP 대형 시리즈", "Flutter 그룹 소유", "안정적 소프트웨어"],
    note: "2001년 설립돼 2002년 서비스를 시작한 업계 대표 사이트로, 현재 Flutter Entertainment 그룹 소속입니다. 2025년 맨섬 라이센스를 반납하고 몰타(MGA) 등 여러 관할의 라이센스로 운영합니다. 매년 WCOOP·SCOOP 대형 토너먼트 시리즈를 엽니다.",
  },
  {
    name: "888poker (888포커)",
    logo: "888",
    logoColor: "from-orange-500 to-orange-700",
    tag: "상장사 운영 · 초보 친화",
    url: "https://www.888poker.com",
    license: "Malta (MGA), 영국(UKGC)",
    founded: "2002",
    features: ["Evoke plc(구 888 홀딩스) 운영", "초보자 테이블 분리", "888poker LIVE 연계"],
    note: "2002년 설립됐고 지브롤터에 본사를 둔 상장사 Evoke plc(구 888 Holdings)가 운영합니다. 몰타(MGA)·영국(UKGC) 등 신뢰도 높은 라이센스를 보유하며, 초보자용 테이블을 분리 운영하는 것으로 알려져 있습니다.",
  },
  {
    name: "IDNPoker (IDN포커)",
    logo: "IDN",
    logoColor: "from-purple-600 to-purple-800",
    tag: "아시아권 최대 네트워크",
    url: "https://www.idnpoker.com",
    license: "PAGCOR (필리핀)",
    founded: "2010",
    features: ["필리핀 마카티 본사", "BMM 공정성 감사·RNG 인증", "스킨/에이전트 방식 접속"],
    note: "필리핀 마카티에 본사를 둔 아시아권 최대 네트워크로, PAGCOR 라이센스와 BMM 공정성 감사를 받습니다. 단일 사이트가 아니라 200개 이상의 스킨(에이전트)을 통해 접속하는 네트워크 구조라, 어느 스킨·에이전트를 쓰느냐에 따라 안전성이 크게 달라집니다 — 특히 주의가 필요합니다.",
  },
  {
    name: "WPT Global (WPT글로벌)",
    logo: "WPT",
    logoColor: "from-emerald-600 to-emerald-800",
    tag: "WPT 공식 · 급성장",
    url: "https://www.wptglobal.com",
    license: "Costa Rica / Curaçao",
    founded: "2022",
    features: ["세계 포커 투어(WPT) 공식 온라인", "라이브 위성 토너먼트", "130개국 이상 서비스"],
    note: "세계 포커 투어(WPT)의 공식 온라인 플랫폼으로 2022년 4월 출범했습니다. 코스타리카/쿠라사오 관할의 라이센스로 운영되며 130개국 이상에서 서비스합니다. 라이브 WPT 이벤트로 이어지는 위성 토너먼트가 특징인 신생 성장 플랫폼입니다.",
  },
];

/**
 * 화면 FAQ 섹션과 FAQPage 스키마가 함께 쓰는 배열.
 * 문안은 죽은 스키마에 있던 것을 그대로 살렸다(내용은 이미 검수를 거친 텍스트다).
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "안전한 온라인 홀덤 사이트는 어떻게 고르나요?",
    a: "공신력 있는 규제기관(몰타 MGA·영국 UKGC·맨섬 등)의 라이센스, RNG 공정성 감사, 이용자 자금 분리 보관, 실제 출금 후기와 오랜 운영 이력을 확인하세요. 회사 정보가 불명확하거나 비현실적 보너스를 내세우고 텔레그램으로만 운영되는 곳은 피하는 것이 좋습니다.",
  },
  {
    q: "온라인 홀덤은 한국에서 합법인가요?",
    a: "국내법상 온라인 실전 머니 게임은 제한되거나 불법에 해당할 수 있어 반드시 본인 책임하에 거주 지역의 합법성을 확인해야 합니다. 만 19세 미만은 이용이 금지됩니다. 오프라인 홀덤펍은 합법 범위 안에서 운영됩니다.",
  },
  {
    q: "먹튀·사기 홀덤 사이트를 피하려면 무엇을 봐야 하나요?",
    a: "라이센스·회사 정보가 확인되지 않거나, 출금 지연·거부 후기가 반복되거나, 무조건 수익을 보장하는 광고, 과도한 입금 유도, 공식 사이트 없이 메신저로만 운영되는 경우가 대표적인 위험 신호입니다.",
  },
];
