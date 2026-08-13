/**
 * `/en/ranking` 공유 데이터 — 서버 `page.tsx`(JSON-LD)와 `ranking-client.tsx`(화면)가 **같은 배열**을 쓴다.
 *
 * ★2026-08-13 분리. 그 전엔 클라이언트가 `<SEO schema={jsonLd}>`로 넘겼는데
 *   `components/seo.tsx`는 `schema`를 구조분해에서 받지도 않는다 — 출력된 적 없는 죽은 코드였다.
 * 🔴 그 FAQ 3문항은 **스키마에만** 있고 화면엔 없었다(KO `/ranking`과 같은 결함).
 *   구글 FAQPage는 «질문·답변이 페이지에 보일 것»을 요구하므로 화면 섹션을 함께 만들었다.
 */

export interface SiteEntry {
  name: string; logo: string; logoColor: string; tag: string;
  url: string; license: string; founded: string; features: string[]; note: string;
}

export const SITES: SiteEntry[] = [
  {
    name: "GGPoker",
    logo: "GG",
    logoColor: "from-blue-600 to-blue-800",
    tag: "World's largest traffic",
    url: "https://ggpoker.com",
    license: "Isle of Man, etc.",
    founded: "2014",
    features: ["WSOP online partner", "Rush & Cash fast-fold", "Slick mobile app"],
    note: "Operated by GG International Limited under an Isle of Man license (among others). Currently the highest-traffic online poker network in the world and the WSOP's online bracelet partner.",
  },
  {
    name: "PokerStars",
    logo: "PS",
    logoColor: "from-red-600 to-red-800",
    tag: "Longest-running · biggest history",
    url: "https://www.pokerstars.com",
    license: "Malta (MGA), others",
    founded: "2001",
    features: ["WCOOP & SCOOP major series", "Owned by Flutter", "Rock-solid software"],
    note: "Founded in 2001 and now part of Flutter Entertainment. It surrendered its Isle of Man license in 2025 and operates under Malta (MGA) and other jurisdictions. Runs multi-million-dollar series like WCOOP and SCOOP every year.",
  },
  {
    name: "888poker",
    logo: "888",
    logoColor: "from-orange-500 to-orange-700",
    tag: "Listed operator · beginner-friendly",
    url: "https://www.888poker.com",
    license: "Malta (MGA), UK (UKGC)",
    founded: "2002",
    features: ["Run by Evoke plc (ex-888 Holdings)", "Separate beginner tables", "888poker LIVE events"],
    note: "Founded in 2002 and run by the publicly listed Evoke plc (formerly 888 Holdings), headquartered in Gibraltar. Holds respected MGA and UK licenses and is known for running separate tables for beginners.",
  },
  {
    name: "IDNPoker",
    logo: "IDN",
    logoColor: "from-purple-600 to-purple-800",
    tag: "Asia's largest network",
    url: "https://www.idnpoker.com",
    license: "PAGCOR (Philippines)",
    founded: "2010",
    features: ["HQ in Makati, Philippines", "BMM fairness audit · RNG certified", "Skin/agent-based access"],
    note: "Asia's largest network, headquartered in Makati, Philippines, with a PAGCOR license and BMM fairness audits. It isn't a single site but a network accessed through 200+ skins (agents) — safety varies a lot depending on which skin/agent you use, so extra caution is needed.",
  },
  {
    name: "WPT Global",
    logo: "WPT",
    logoColor: "from-emerald-600 to-emerald-800",
    tag: "WPT official · fast-growing",
    url: "https://www.wptglobal.com",
    license: "Costa Rica / Curaçao",
    founded: "2022",
    features: ["Official World Poker Tour online", "Live satellite tournaments", "130+ countries"],
    note: "The official online platform of the World Poker Tour, launched in April 2022. It runs under Costa Rica/Curaçao licensing and serves 130+ countries, with online satellites that feed into live WPT events. A fast-growing, newer platform.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I choose a safe online poker site?",
    a: "Look for a license from a credible regulator (Malta MGA, UK UKGC, Isle of Man), RNG fairness audits, segregated player funds, real withdrawal reports, and a long, transparent track record. Avoid sites with unclear company information, unrealistic bonuses, or that operate only through messaging apps.",
  },
  {
    q: "Is online poker legal?",
    a: "It depends entirely on where you live. Online poker is licensed and regulated in some jurisdictions and restricted or prohibited in others, so you must check your local laws. You must also be of legal age (18+/21+ depending on jurisdiction).",
  },
  {
    q: "How can I avoid scam poker sites?",
    a: "The main warning signs are missing or unverifiable licensing, repeated reports of delayed or refused withdrawals, guarantees of profit, aggressive deposit pressure, and operations that have no official site and run only through messaging apps.",
  },
];
