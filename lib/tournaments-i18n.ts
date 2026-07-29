import { Tournament, TOURNAMENTS, computeStatus } from "./tournaments";

/**
 * 다국어 토너먼트 보드용 문자열.
 *
 * ★ 원칙 — 이 파일은 "번역"이 아니라 "현지 재저작"이다.
 *   대회 데이터(날짜·바이인·출처)는 §13처럼 언어 불변이지만,
 *   FAQ·안내문은 로케일마다 답이 다르다.
 *   예: "새틀라이트 어디서 치나요?"의 답이
 *       en 안에서만 해도 미국(주 6곳)·영국(운영사 14곳)·호주(온라인 금지)로 갈린다.
 *       → docs/market-profile/<locale>.md 를 읽고 쓸 것.
 */

export type BoardLocale = "en" | "ja" | "zh" | "zh-hant" | "es";

export interface BoardStrings {
  /** <html lang> 및 og:locale용 */
  htmlLang: string;
  ogLocale: string;

  metaTitle: (next: string, mmdd: string) => string;
  metaDescription: (todayDot: string, ongoing: string) => string;

  h1: string;
  heroLead: string;
  /** 기준일 배지 — "as of 2026.07.29" */
  asOf: (dot: string) => string;

  filterAll: string;
  filterUpcoming: string;
  filterOngoing: string;
  filterEnded: string;

  colDates: string;
  colBuyin: string;
  colVenue: string;

  status: Record<"upcoming" | "ongoing" | "ended", string>;
  /** 상시 개최 등 날짜가 없는 대회의 배지 */
  yearRound: string;
  officialSite: string;
  buyinUnlisted: string;

  countsLine: (total: number, countries: number) => string;
  sourceNote: string;
  emptyState: string;
  /** 한국어 원본 일정표로 가는 링크 문구 */
  koLink: string;

  faqHeading: string;
  faqs: { q: string; a: string }[];

  /** 이 로케일 독자에게만 해당하는 실무 정보 (비자·세금·온라인 접근) */
  localHeading: string;
  localBlocks: { title: string; body: string }[];
}

/* ────────────────────────────────────────────────────────────
   en — 미국·영국·호주·캐나다 + ESL 독자가 섞인 로케일.
   docs/market-profile/en.md §0 참조: 단일한 답을 쓸 수 없다.
   ──────────────────────────────────────────────────────────── */
const en: BoardStrings = {
  htmlLang: "en",
  ogLocale: "en_US",

  // 훅(다음 개막 대회)을 넣되 SERP 잘림선(≈60자)을 넘기면 훅을 버린다.
  // 대회명 길이가 "JOPT 2026 Fukuoka #01"~"WSOP Circuit Southern Indiana"까지 편차가 커서
  // 고정 포맷으로는 길이를 통제할 수 없다.
  metaTitle: (next, mmdd) => {
    const hooked = `Poker Tournaments 2026 — ${next} starts ${mmdd}`;
    return next && hooked.length <= 60 ? hooked : "Poker Tournament Schedule 2026";
  },
  metaDescription: (todayDot, ongoing) =>
    `Every major live poker tournament of 2026 in one table — as of ${todayDot}. ${ongoing}Dates, buy-ins and an official-source link on every event.`.slice(0, 158),

  h1: "Poker Tournament Schedule 2026",
  heroLead:
    "Every event below was read off the organiser's own site, and each card links to the page we read it from. Status is calculated from the dates, so nothing here goes stale while a series is running. Schedules do change — the official link is always the tiebreaker.",
  asOf: (dot) => `as of ${dot}`,

  filterAll: "All",
  filterUpcoming: "Upcoming",
  filterOngoing: "Running now",
  filterEnded: "Finished",

  colDates: "Dates",
  colBuyin: "Buy-in",
  colVenue: "Venue",

  status: { upcoming: "Upcoming", ongoing: "Running", ended: "Finished" },
  yearRound: "Year-round",
  officialSite: "Official site",
  buyinUnlisted: "Not published",

  countsLine: (total, countries) => `${total} tournaments · ${countries} countries`,
  sourceNote:
    "Where an organiser's own page still showed last year's information, we left the link off rather than send you to it.",
  emptyState: "Nothing matches that filter right now.",
  koLink: "Korean schedule →",

  faqHeading: "Questions people actually ask",
  faqs: [
    {
      q: "Can anyone buy into these, or do some need an invitation?",
      a: "Most are open — you pay the buy-in and you play. Three on this list are not. Triton Super High Roller Series is referral-only: there are no satellites and money alone will not get you a seat. Korea's Holdem Masters runs on invitation tickets with no cash buy-in route at all. And the APT Championships open with an industry-only Event 0 the day before the public schedule starts.",
    },
    {
      q: "Where do I play satellites for these?",
      a: "That depends entirely on where you live, and the answer flips between English-speaking countries. In the US, online poker is legal in six states, and WSOP.com — live in Nevada, Michigan, Pennsylvania and New Jersey — runs the deepest WSOP satellite schedule; GGPoker, Natural8 and WPT Global are all unavailable to US players. In the UK, the market is the most open in the world, with 14 UKGC-licensed operators as of June 2026. In Australia the Interactive Gambling Act closed online poker to operators, so the practical route there is live rather than online — which is what WPT Australia at The Star Sydney is for.",
    },
    {
      q: "What does a WPT Passport actually cover?",
      a: "It bundles the entry with travel money rather than selling a seat alone — WPT Global's Cambodia package pairs a $3,500 entry with $500 towards getting there, with feeders starting at $0.55. There is also a bonus of up to $100,000 if you qualify through the satellite path and then win the live event, though buying the package outright usually voids that eligibility and you have to wear the patch at the table.",
    },
    {
      q: "Is the advertised first prize what the winner takes home?",
      a: "Often not. Heads-up and three-handed deals are common at the top of these fields, and the payout page frequently keeps printing the scheduled figure. In several 2026 events the runner-up banked more than the champion after the deal was struck. If the number matters to you, look for the deal note rather than the ladder.",
    },
    {
      q: "Do I need a visa or travel authorisation?",
      a: "For US, Canadian, Australian and New Zealand passports the two changes that matter in 2026 are the UK's ETA, mandatory from 25 February 2026, and the EU's ETIAS, expected in the final quarter of the year. EPT Barcelona, EPT Prague and WSOP Europe are all inside Schengen, so if you are travelling to those late in the year, check ETIAS status before you book.",
    },
    {
      q: "Can I pay a five-figure buy-in by card?",
      a: "Not in one go at the WSOP. Card payments there carry a 3% fee and are capped at $10,000 per transaction, which means the $10,000 Main Event cannot be covered by a single swipe. Plan the cage, not the card.",
    },
  ],

  localHeading: "Before you book",
  localBlocks: [
    {
      title: "Online access is not one answer in English",
      body: "The UK, the US and Australia sit at opposite ends of the same question. The UK is the most heavily licensed online poker market in the world; the US allows it in six states and blocks international sites entirely; Australia's Interactive Gambling Act, as amended in 2017, put online poker tournaments out of reach of operators — though the Act targets operators, not individual players, and an IGA reform package is scheduled for 1 January 2027. Canada runs Ontario as its own regime.",
    },
    {
      title: "A blocked head office does not mean a blocked country",
      body: "GGPoker's .com operation and the UKGC-licensed GGPoker UK are separate entities, the same way PokerStars.es is separate from PokerStars.com. Assuming the parent site's restrictions apply locally gets this wrong in both directions.",
    },
    {
      title: "Tax is not uniform either",
      body: "US players deal with W-2G reporting; the UK does not tax gambling winnings; Australia and Canada each work differently again. Non-US players cashing in the States generally meet 30% withholding on Form 1042-S. Treat any single-country tax explanation you read about these events with suspicion.",
    },
  ],
};

export const BOARD_STRINGS: Partial<Record<BoardLocale, BoardStrings>> = { en };

/**
 * 대회명 현지 표기.
 * 라틴 표기(nameEn)가 12개 언어의 공통 베이스다 — 포커 대회 브랜드는
 * 어느 시장에서도 라틴 그대로 검색되는 경우가 많기 때문.
 * 카타카나·한자 표기가 실제 검색형인 로케일은 여기에 예외를 추가한다.
 */
export function localizedName(t: Tournament, _locale: BoardLocale): string {
  return t.nameEn;
}

/* ────────────────────────────────────────────────────────────
   데이터 필드의 한국어 값 → 로케일 값.

   ★ 왜 대회별이 아니라 값별인가:
     buyin에 한국어가 69건 있었지만 서로 다른 값은 15개뿐이었다
     ("공식 미기재", "메인 ₩150만" 같은 게 반복된다).
     대회마다 번역 필드를 다는 것보다 값 사전이 훨씬 적게 틀린다.
   ★ 사전에 없는 값은 원문 그대로 통과시킨다. 지어내지 않는다.
   ──────────────────────────────────────────────────────────── */
const FIELD_EN: Record<string, string> = {
  // buyin
  "공식 미기재": "Not published",
  "미발표": "TBA",
  "다양": "Varies",
  "초대권 전용": "Invitation only",
  "초대권 전용 (현금 바이인 없음)": "Invitation only — no cash buy-in",
  "메인 ₩150만": "Main ₩1.5M",
  "메인 ₩220만": "Main ₩2.2M",
  "메인 ₩230만": "Main ₩2.3M",
  "메인 ₩250만": "Main ₩2.5M",
  "메인 ₩270만": "Main ₩2.7M",
  "₩30만~₩800만": "₩300K–₩8M",
  "₩90만~": "₩900K and up",
  "~₩700만 (하이롤러)": "up to ₩7M (high roller)",
  "€5,300 (메인)": "€5,300 (Main)",
  "프리롤~NT$120,000": "Freeroll–NT$120,000",
  // venue
  "미정 (공식 미기재)": "TBA — not published",
  "야자수 서울센터": "Yajasu Seoul Center",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (operated by King's Casino Prague)",
  // 날짜 라벨
  "(ME 파이널 8/3~5)": "(ME final table Aug 3–5)",
  "2026.12 예정 (날짜 미발표)": "December 2026 — dates TBA",
};

/** 데이터 필드 값을 로케일 표기로. 사전에 없으면 원문 그대로 */
export function localizeField(value: string | undefined, locale: BoardLocale): string {
  if (!value) return "";
  if (locale === "en") return FIELD_EN[value] ?? value;
  return value;
}

/** 대회 설명(구조화 데이터용) 로케일 판. 원문 수치는 그대로 옮긴다 — §13 언어 불변 */
const SCHEMA_DESC_EN: Record<string, string> = {
  "holdem-masters-7":
    "Sponsored by WPL, run by WeLive with YAJASU. ₩1.5bn guaranteed; entry by invitation ticket only.",
  "wsop-2026":
    "The largest poker series in the world. 100 bracelets from May 26 to July 15; the Main Event drew 9,208 entries for an $85,634,400 prize pool, with the final table on August 3–5 on ESPN.",
  "kpc-king-july":
    "A 17-day festival at LES A Casino on Jeju Island. ₩2bn guaranteed across the series, with ₩1.1bn GTD on the King Poker Cup Main Event.",
  "apt-incheon":
    "The 2026 Incheon stop of the Asian Poker Tour, Asia's largest tour. Held at Paradise City with over ₩4bn guaranteed and ₩1.5bn GTD on the Main Event.",
  "holdem-masters-8":
    "The 8th Holdem Masters — the largest in the series to date at ₩2bn guaranteed, with ₩1.8bn GTD on the Main Event.",
  "appt-korea":
    "The 2026 Korea stop of the PokerStars APPT, at Paradise City Incheon, with ₩1bn guaranteed on the Main Event.",
  "triton-jeju-2":
    "The second Triton Super High Roller Series of the year on Jeju — 14 high roller tournaments with buy-ins from $15,000 to $200,000.",
  "apt-jeju-fall":
    "The Asian Poker Tour's autumn 2026 Jeju stop: 136 events with ₩2.2bn guaranteed on the Main Event.",
  "wpt-seoul":
    "The World Poker Tour's first event at the INSPIRE Entertainment Resort — 46 events with ₩1bn guaranteed on the Main Event.",
  "appt-manila":
    "The 2026 Manila stop of the PokerStars APPT, held at Okada Manila with ₱132M guaranteed across the series.",
};

/** 월 배지 — 한국어는 "5~8월", 영어는 "May–Aug" */
const MONTH_EN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function localizedMonthBadge(t: Tournament, locale: BoardLocale): string {
  const s = BOARD_STRINGS[locale];
  if (!t.startDate) return s?.yearRound ?? "";
  const sm = Number(t.startDate.slice(5, 7));
  const em = t.endDate ? Number(t.endDate.slice(5, 7)) : sm;
  if (locale === "en") {
    return sm === em ? MONTH_EN[sm - 1] : `${MONTH_EN[sm - 1]}–${MONTH_EN[em - 1]}`;
  }
  return sm === em ? `${sm}월` : `${sm}~${em}월`;
}

/** 일정 문자열 — dateNote 등 한국어가 섞인 조각을 로케일 값으로 치환한다 */
export function localizedDateRange(t: Tournament, locale: BoardLocale): string {
  if (t.dateLabelOverride) return localizeField(t.dateLabelOverride, locale);
  if (!t.startDate || !t.endDate) return "";
  const [sy, sm, sd] = t.startDate.split("-");
  const [ey, em, ed] = t.endDate.split("-");
  const base =
    sy === ey ? `${sy}.${sm}.${sd}~${em}.${ed}` : `${sy}.${sm}.${sd}~${ey}.${em}.${ed}`;
  return t.dateNote ? `${base} ${localizeField(t.dateNote, locale)}` : base;
}

/**
 * 로케일 페이지용 구조화 데이터.
 *
 * ★ components/seo.tsx는 schema prop을 받기만 하고 렌더하지 않는다.
 *   ko `/tournaments`가 개설 이래 구조화 데이터를 0개 내보내던 원인이 이것이었다.
 *   그래서 로케일 페이지는 서버 컴포넌트에서 직접 <script>로 주입한다.
 */
export function buildLocaleSchemas(
  locale: BoardLocale,
  todayISO: string,
  site: string,
) {
  const s = BOARD_STRINGS[locale];
  if (!s) return [];

  const url = `${site}/${locale}/tournaments`;

  const events = TOURNAMENTS.filter(
    (t) =>
      t.startDate &&
      t.endDate &&
      t.schemaDescription &&
      computeStatus(t, todayISO) !== "ended",
  ).map((t) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: localizedName(t, locale),
    description:
      locale === "en" ? (SCHEMA_DESC_EN[t.id] ?? t.schemaDescription) : t.schemaDescription,
    startDate: t.startDate,
    endDate: t.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: localizeField(t.venue, locale),
      address: {
        "@type": "PostalAddress",
        addressLocality: t.city,
        addressCountry: t.country,
      },
    },
    ...(t.organizer && {
      organizer: { "@type": "Organization", name: t.organizer.name, url: t.organizer.url },
    }),
    ...(t.sourceUrl && { url: t.sourceUrl }),
  }));

  return [
    ...events,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "HoldemMaster", item: `${site}/${locale}/` },
        { "@type": "ListItem", position: 2, name: s.h1, item: url },
      ],
    },
  ];
}

/** 메타 타이틀에 쓸 "다음에 열리는 대회" */
export function nextUpcoming(todayISO: string) {
  return TOURNAMENTS.find(
    (t) => t.startDate && computeStatus(t, todayISO) === "upcoming",
  );
}

/** 로케일별 대회 정렬 — 자국 개최 대회를 위로 올린다 */
export const HOME_COUNTRY: Record<BoardLocale, string[]> = {
  en: ["US", "GB", "AU", "CA", "IE"],
  ja: ["JP"],
  zh: ["CN", "PH", "KH"],
  "zh-hant": ["TW", "HK", "PH"],
  es: ["MX", "ES", "AR", "BR", "UY"],
};
