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


/* ────────────────────────────────────────────────────────────
   ja — ラッコ 실측(2026-07-29)에 맞춘 재저작.

   ★ 검색 형태소 (トーナメント가 아니라 「大会」다)
     ポーカー 大会 2,900 / ポーカー 大会 日本 590 / ポーカー 大会 賞金 320 /
     ポーカー 大会 日本 2026 320 / ポーカー 大会 参加費 210 / ポーカー 大会 海外 140
   ★★ 우리 데이터가 그대로 먹히는 지점
     パラダイスシティ ポーカー 大会 90 · 台湾 ポーカー 大会 2026 70 ·
     マニラ ポーカー 大会 2026 50 · ポーカー 大会 韓国 50 · アジア ポーカー 大会 スケジュール 2026 50
     → 한국 17 · 대만 12 · 필리핀 5를 들고 있는 우리와 정확히 겹친다. ja가 en보다 승산이 크다.
   ★ FAQ는 ラッコ 질문검색 상위를 그대로 가져왔다(지어낸 질문 아님).
     「ポーカーの三大大会は?」가 1위, 「日本でポーカー大会は違法ですか?」가 그 다음.
   ★ 합법성은 ja.md §B-4 지침대로 짧게, 부정형 결론 금지 (등급 C — 본문 단정 금지).
   ──────────────────────────────────────────────────────────── */
const ja: BoardStrings = {
  htmlLang: "ja",
  ogLocale: "ja_JP",

  metaTitle: (next, mmdd) => {
    const hooked = `【2026年最新】ポーカー大会スケジュール｜次は${next} ${mmdd}`;
    return next && hooked.length <= 40 ? hooked : "【2026年最新】ポーカー大会スケジュール｜国内・海外の日程一覧";
  },
  metaDescription: (todayDot, ongoing) =>
    `${todayDot}時点。国内のJOPTから韓国・台湾・マニラ・ラスベガスまで、2026年のポーカー大会を日程・バイイン・会場つきで一覧に。各大会に公式サイトのリンクを添えています。`.slice(0, 120),

  h1: "ポーカー大会スケジュール 2026",
  heroLead:
    "掲載しているのはすべて主催者の公式ページで確認した内容で、カードごとに参照元をリンクしています。開催状況は日程から自動で計算しているので、シリーズの途中で表示が古くなることはありません。日程は変更されることがあります——最終的な判断は公式サイトでお願いします。",
  asOf: (dot) => `${dot}時点`,

  filterAll: "すべて",
  filterUpcoming: "予定",
  filterOngoing: "開催中",
  filterEnded: "終了",

  colDates: "日程",
  colBuyin: "バイイン",
  colVenue: "会場",

  status: { upcoming: "予定", ongoing: "開催中", ended: "終了" },
  yearRound: "通年",
  officialSite: "公式サイト",
  buyinUnlisted: "公式未掲載",

  countsLine: (total, countries) => `${total}大会 ・ ${countries}か国`,
  sourceNote:
    "主催者の公式ページ自体が前年の情報のままだったものは、リンクを張らずに残しています。",
  emptyState: "この条件に該当する大会はありません。",
  koLink: "韓国語版の日程表 →",

  faqHeading: "よくある質問",
  faqs: [
    {
      q: "ポーカーの三大大会は？",
      a: "WSOP（World Series of Poker）、WPT（World Poker Tour）、EPT（European Poker Tour）の3つを指すのが一般的です。この一覧にはいずれも入っていて、2026年はWSOPが5月26日〜8月5日のラスベガス、WPTがソウル（INSPIRE）やオーストラリアなど、EPTがバルセロナ・モンテカルロ・パリ・プラハで開催されます。",
    },
    {
      q: "日本でポーカー大会は違法ですか？",
      a: "国内で金銭を賭ける行為は刑法の賭博罪の対象ですが、アミューズメント形式の大会や、賞品・海外大会のシート（参加権）を出す形式は国内で広く運営されています。JOPTのような大型シリーズが継続しているのはこの形です。実務的な関心は「合法かどうか」よりも「どこでシートを取るか」にあるはずなので、この一覧では各大会の公式サイトを直接たどれるようにしています。",
    },
    {
      q: "日本で最大のポーカー大会は？",
      a: "JOPT（Japan Open Poker Tour）です。2026年4月24日〜5月6日のTokyo Grand Finalはベルサール高田馬場で256イベント、メインイベントのバイインは¥120,000でした。国内シリーズとしては規模・イベント数ともに最大級です。",
    },
    {
      q: "ポーカーの世界大会で日本勢はどのくらい勝っていますか？",
      a: "2026年のWSOPメインイベントは9,208エントリー・賞金総額$85,634,400という規模でしたが、日本勢の最高位は23位で、賞金は約5,200万円でした。2024年の21位に続いて2年ぶりに終盤まで残った形です。参加費は約160万円です。",
    },
    {
      q: "韓国・パラダイスシティの大会の参加費は？",
      a: "パラダイスシティ（仁川）では2026年にAPT仁川とAPPT韓国が開催されます。APT仁川はメインイベントが15億ウォン保証、APPT韓国は10億ウォン保証で、いずれもメインのバイインは日本円でおよそ20〜30万円台です。仁川空港からのアクセスがよく、日本から最も行きやすい大型大会のひとつです。正確な金額は各カードの公式サイトから確認してください。",
    },
    {
      q: "大会の賞金に税金はかかりますか？",
      a: "日本は韓国のような源泉徴収ではなく、自分で確定申告する仕組みです。一時的なプレイによる収入なら一時所得で、（賞金−必要経費−特別控除最大50万円）÷2 が課税対象になります。継続的に利益を出す目的でプレイしている場合は雑所得となり、50万円控除も「÷2」もありません。高額入賞は世界大会の記録に残るため、申告漏れは把握されやすい点にも注意してください。",
    },
    {
      q: "台湾の大会は日本から行きやすいですか？",
      a: "この一覧で台湾は12大会と、韓国に次いで数が多い地域です。11月のAPT Championships（台北）が最大で、CTP Clubを中心に年間を通じてシリーズが動いています。台湾は賞金への課税がNT$750万までかからないため、入賞時の手取りが他国と大きく変わる点も知っておくと判断しやすくなります。",
    },
  ],

  localHeading: "行く前に知っておくこと",
  localBlocks: [
    {
      title: "韓国のK-ETA免除は2026年12月31日まで",
      body: "日本国籍者の韓国入国はK-ETAが一時免除されていますが、その措置は2026年12月31日までです。仁川のAPT・APPT・WPT Seoul、済州のAPT・Tritonを狙うなら、この期限は実質的な締め切りとして効いてきます。年明け以降の日程を見ている場合は、渡航前に最新の要件を確認してください。",
    },
    {
      title: "イギリスのETAはすでに義務、ETIASはこれから",
      body: "イギリスは2025年1月8日からETAが必須で、£20・有効期間2年、審査は3営業日ほどです。EUのETIASは2026年第4四半期の開始予定で、EPTバルセロナ・EPTプラハ・WSOP Europeはいずれもシェンゲン圏にあります。年末の遠征を考えている場合は、予約の前に施行状況を確かめてください。なおイギリスはEU離脱によりETIASの対象外で、UK ETAとは別の制度です。",
    },
    {
      title: "金額は公式の通貨のまま載せています",
      body: "カードのバイインはウォン・ドル・ユーロなど、主催者が公表している通貨のまま表示しています。円換算を固定で書き込むと為替が動いた時点で数字が嘘になるためです。目安としては、2026年のWSOPメインイベント（$10,000）が日本の各媒体で約160万円と報じられていました。予算を組むときはこの水準を基準に、渡航時のレートで計算してください。",
    },
  ],
};

export const BOARD_STRINGS: Partial<Record<BoardLocale, BoardStrings>> = { en, ja };

/**
 * 대회명 현지 표기.
 * 라틴 표기(nameEn)가 12개 언어의 공통 베이스다 — 포커 대회 브랜드는
 * 어느 시장에서도 라틴 그대로 검색되는 경우가 많기 때문.
 * 카타카나·한자 표기가 실제 검색형인 로케일은 여기에 예외를 추가한다.
 */
const PAREN_JA: Record<string, string> = {
  "(Fall)": "（秋）", "(July)": "（7月）", "(August)": "（8月）",
  "(November)": "（11月）", "(December)": "（12月）", "(Ha Long Bay)": "（ハロン湾）",
};

export function localizedName(t: Tournament, locale: BoardLocale): string {
  if (locale !== "ja") return t.nameEn;

  // ja.md가 `APT 仁川`을 실검색형으로 기록하고 있다.
  // 브랜드(APT·WSOP)는 라틴 그대로, 지명만 현지 표기로 바꾼다.
  let out = t.nameEn;

  // ★ 괄호를 먼저. "(Ha Long Bay)"가 지명 "Ha Long"을 품고 있어서
  //   순서를 뒤집으면 "(ハロン Bay)" 같은 반쪽 치환이 나온다.
  for (const [en, ja] of Object.entries(PAREN_JA)) {
    if (out.includes(en)) out = out.replace(en, ja);
  }

  // t.city를 먼저 쓰되, 대회명의 지명이 city와 다른 경우가 있다
  // (APPT Manila는 city가 Parañaque다) → 사전 전체를 훑어 실제로 들어 있는 지명을 찾는다.
  const direct = CITY_JA[t.city];
  if (direct && out.includes(t.city)) {
    out = out.replace(t.city, direct);
  } else {
    // 긴 지명부터 (Las Vegas가 Vegas보다 먼저 걸려야 한다)
    const key = Object.keys(CITY_JA)
      .filter((c) => out.includes(c))
      .sort((a, b) => b.length - a.length)[0];
    if (key) out = out.replace(key, CITY_JA[key]);
  }

  // 전각 괄호 앞의 반각 공백은 일본어 조판에서 어색하다 ("チェロキー （8月）" → "チェロキー（8月）")
  return out.replace(/ （/g, "（");
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


/* ja 필드 사전. 통화는 원문 통화를 유지하되 표기만 일본식으로 옮긴다
   ("₩150만"은 일본 독자가 읽는 형태가 아니다 → "150万ウォン") */
const FIELD_JA: Record<string, string> = {
  "공식 미기재": "公式未掲載",
  "미발표": "未発表",
  "다양": "イベントにより異なる",
  "초대권 전용": "招待制",
  "초대권 전용 (현금 바이인 없음)": "招待制（現金バイインなし）",
  "메인 ₩150만": "メイン 150万ウォン",
  "메인 ₩220만": "メイン 220万ウォン",
  "메인 ₩230만": "メイン 230万ウォン",
  "메인 ₩250만": "メイン 250万ウォン",
  "메인 ₩270만": "メイン 270万ウォン",
  "₩30만~₩800만": "30万〜800万ウォン",
  "₩90만~": "90万ウォン〜",
  "~₩700만 (하이롤러)": "〜700万ウォン（ハイローラー）",
  "€5,300 (메인)": "€5,300（メイン）",
  "프리롤~NT$120,000": "フリーロール〜NT$120,000",
  "미정 (공식 미기재)": "未定（公式未掲載）",
  "야자수 서울센터": "ヤジャス ソウルセンター",
  "Hilton Prague (King's Casino Prague 운영)": "ヒルトン・プラハ（King's Casino Prague 運営）",
  "(ME 파이널 8/3~5)": "（MEファイナル 8/3〜5）",
  "2026.12 예정 (날짜 미발표)": "2026年12月予定（日程未発表）",
};

/* ★ 도시명은 ja에서 그대로 검색어다.
   ラッコ 실측에 「パラダイスシティ ポーカー 大会」90 · 「台湾 ポーカー 大会 2026」70 ·
   「マニラ ポーカー 大会 2026」50 이 잡혔다. 라틴 표기로 두면 이 검색을 통째로 놓친다. */
const CITY_JA: Record<string, string> = {
  "Aix-en-Provence": "エクス・アン・プロヴァンス", "Atlantic City": "アトランティックシティ",
  Austin: "オースティン", Barcelona: "バルセロナ", Bratislava: "ブラチスラバ", Budva: "ブドヴァ",
  "Buenos Aires": "ブエノスアイレス", Calgary: "カルガリー", "Castellón": "カステリョン",
  Catoosa: "カトゥーサ", Cherokee: "チェロキー", Cork: "コーク", "Council Bluffs": "カウンシルブラフス",
  Danville: "ダンビル", Durant: "デュラント", Elgin: "エルジン", Elizabeth: "エリザベス",
  "Florianópolis": "フロリアノポリス", Fukuoka: "福岡", Gamprin: "ガンプリン", Glasgow: "グラスゴー",
  "Ha Long": "ハロン", Hanover: "ハノーバー", Incheon: "仁川", Jeju: "済州", Kahnawake: "カナワケ",
  Kyrenia: "キレニア", "Las Vegas": "ラスベガス", Lincoln: "リンカーン", London: "ロンドン",
  Madrid: "マドリード", Manchester: "マンチェスター", Manila: "マニラ",
  "Mata de São João": "マタ・デ・サンジョアン", "Mexico City": "メキシコシティ",
  Middelkerke: "ミッデルケルケ", "Monte Carlo": "モンテカルロ", "Monte-Carlo": "モンテカルロ", Murcia: "ムルシア", Namur: "ナミュール",
  Nassau: "ナッソー", "New Orleans": "ニューオーリンズ", Osaka: "大阪", "Panama City": "パナマシティ",
  "Parañaque": "パラニャーケ", Paris: "パリ", "Pompano Beach": "ポンパノビーチ", Prague: "プラハ",
  "Puerto Iguazú": "プエルトイグアス", Robinsonville: "ロビンソンビル", Rosario: "ロサリオ",
  Sanremo: "サンレモ", "Santa Rosa": "サンタローサ", "São Paulo": "サンパウロ", Sapporo: "札幌",
  Scottsdale: "スコッツデール", Seogwipo: "西帰浦", Seoul: "ソウル", Seville: "セビリア",
  Sheffield: "シェフィールド", "St. Julian's": "セント・ジュリアン", Stateline: "ステートライン",
  Sydney: "シドニー", Taipei: "台北", Tallinn: "タリン", Tokyo: "東京", Toledo: "トレド",
  Verona: "ヴェローナ",
};

/* 회장명 중 일본 독자가 실제로 검색하는 것만. 나머지는 라틴 그대로가 정확하다 */
const VENUE_JA: Record<string, string> = {
  "Paradise City": "パラダイスシティ",
  "Paradise City Casino": "パラダイスシティ・カジノ",
};

export function localizeCity(city: string, locale: BoardLocale): string {
  return locale === "ja" ? (CITY_JA[city] ?? city) : city;
}

/** 데이터 필드 값을 로케일 표기로. 사전에 없으면 원문 그대로 */
export function localizeField(value: string | undefined, locale: BoardLocale): string {
  if (!value) return "";
  if (locale === "en") return FIELD_EN[value] ?? value;
  if (locale === "ja") return VENUE_JA[value] ?? FIELD_JA[value] ?? value;
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


/** ja판 대회 설명. 수치는 원문 그대로 — §13은 언어 불변 */
const SCHEMA_DESC_JA: Record<string, string> = {
  "holdem-masters-7":
    "WPL後援・WeLive主管・YAJASU協力。賞金総額15億ウォン保証、招待券のみで参加できるシリーズ。",
  "wsop-2026":
    "世界最大のポーカーシリーズ。5月26日〜7月15日にブレスレット100個。メインイベントは9,208エントリー・賞金総額$85,634,400で、ファイナルテーブルは8月3〜5日にESPNが中継。",
  "kpc-king-july":
    "済州島のLES A Casinoで開かれる17日間のフェスティバル。シリーズ全体で20億ウォン保証、King Poker Cupのメインイベントは11億ウォンGTD。",
  "apt-incheon":
    "アジア最大級のツアーAPTの2026年仁川ストップ。パラダイスシティ開催で総額40億ウォン超保証、メインイベントは15億ウォンGTD。",
  "holdem-masters-8":
    "第8回ホールデムマスターズ。賞金総額20億ウォン保証でシリーズ史上最大、メインイベントは18億ウォンGTD。",
  "appt-korea":
    "PokerStars APPTの2026年韓国ストップ。パラダイスシティ仁川で開催、メインイベントは10億ウォン保証。",
  "triton-jeju-2":
    "Triton Super High Roller Seriesの済州2回目。ハイローラー14トーナメント、バイインは$15,000〜$200,000。",
  "apt-jeju-fall":
    "APTの2026年秋の済州ストップ。136イベント、メインイベントは22億ウォン保証。",
  "wpt-seoul":
    "WPTがINSPIREエンターテインメントリゾートで初開催する大会。46イベント、メインイベントは10億ウォン保証。",
  "appt-manila":
    "PokerStars APPTの2026年マニラストップ。Okada Manila開催で、シリーズ全体₱132M保証。",
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
  if (locale === "ja") return sm === em ? `${sm}月` : `${sm}〜${em}月`;
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
      (locale === "en" ? SCHEMA_DESC_EN[t.id] : locale === "ja" ? SCHEMA_DESC_JA[t.id] : undefined) ??
      t.schemaDescription,
    startDate: t.startDate,
    endDate: t.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: localizeField(t.venue, locale),
      address: {
        "@type": "PostalAddress",
        addressLocality: localizeCity(t.city, locale),
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
