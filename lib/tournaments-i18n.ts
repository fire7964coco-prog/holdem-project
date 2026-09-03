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

/**
 * 길이 제한을 걸되 단어 중간에서 자르지 않는다.
 * 영어 설명이 "an official-sou"에서 끊기고 있었다.
 * CJK는 띄어쓰기가 없어 공백을 못 찾으므로 그냥 자른다(그게 정상 조판이다).
 */
function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  // ★ 진행중 목록이 이름 중간에서 잘리면("7th Holdem") SERP에 깨져 보인다.
  //    쉼표·중점 기준으로 마지막 온전한 항목까지만 남긴다.
  const lastItem = Math.max(cut.lastIndexOf(", "), cut.lastIndexOf("、"), cut.lastIndexOf("・"));
  const head = text.slice(0, max).search(/(Running now|開催中|进行中|進行中|En curso|진행중)/);
  if (head >= 0 && lastItem > head) return cut.slice(0, lastItem).trimEnd().replace(/[,、·・]+$/, "") + ".";
  const sp = cut.lastIndexOf(" ");
  // 잘린 자리에 남는 나열 부호(", "·"·"、")를 떼어낸다 — "…WSOP 2026,"으로 끝나면 지저분하다
  return (sp > max - 25 ? cut.slice(0, sp) : cut).trimEnd().replace(/[,、·、]+$/, "");
}

export type BoardLocale = "en" | "ja" | "zh" | "zh-hant" | "es" | "de";

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

  /**
   * 국가 필터 행의 «전체» 칩.
   * ★ 상태 필터의 filterAll과 같은 글자를 쓰면 «전체» 칩이 두 줄에 나란히 서서
   *   어느 것이 무엇인지 구분이 안 된다. 그래서 별도 문자열이다.
   */
  filterAllCountries: string;
  /**
   * 국가 필터 칩 라벨.
   * ★ HOME_COUNTRY[locale]에 든 코드만 쓴다 — «이 독자가 실제로 갈 곳»(그 상수의 정의)이다.
   *   보드에 오르는 29개국 전체를 6개 언어로 번역하지 않는다(지어낼 위험 대비 값어치가 없다).
   *   대회가 0건인 코드는 화면에서 자동으로 빠지므로 여기 남아 있어도 무해하다.
   */
  homeCountryNames: Record<string, string>;

  colDates: string;
  colBuyin: string;
  colVenue: string;

  status: Record<"upcoming" | "ongoing" | "ended", string>;
  /** 상시 개최 등 날짜가 없는 대회의 배지 */
  yearRound: string;
  /** 개최는 발표됐으나 날짜가 아직 안 나온 대회의 배지 */
  datesTba: string;
  officialSite: string;
  /** 우리 상세 가이드로 가는 버튼 문구. 번역본이 있는 대회에만 붙는다 */
  guideLink: string;
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
    return next && hooked.length <= 45 ? hooked : "Poker Tournament Schedule 2026";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(`Every major live poker tournament of 2026 — dates, buy-ins and an official source for each. As of ${todayDot}. ${ongoing}`, 158),

  h1: "Poker Tournament Schedule 2026",
  heroLead:
    "Every event below was read off the organiser's own site, and each card links to the page we read it from. Status is calculated from the dates, so nothing here goes stale while a series is running. Schedules do change — the official link is always the tiebreaker.",
  asOf: (dot) => `as of ${dot}`,

  filterAll: "All",
  filterUpcoming: "Upcoming",
  filterOngoing: "Running now",
  filterEnded: "Finished",

  filterAllCountries: "All countries",
  homeCountryNames: {
    US: "United States", GB: "United Kingdom", AU: "Australia",
    CA: "Canada", IE: "Ireland",
  },

  colDates: "Dates",
  colBuyin: "Buy-in",
  colVenue: "Venue",

  status: { upcoming: "Upcoming", ongoing: "Running", ended: "Finished" },
  yearRound: "Year-round",
  datesTba: "Dates TBA",
  officialSite: "Official site",
  guideLink: "Full guide",
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
      a: "It depends on where you are, and the answer changes a lot between English-speaking countries. US players go through WSOP.com, which runs the deepest WSOP satellite schedule and operates in Nevada, Michigan, Pennsylvania and New Jersey — the international sites are not an option there. In the UK you have the widest choice anywhere, with 14 UKGC-licensed rooms as of June 2026. In Australia the practical route is live rather than online, which is what WPT Australia at The Star Sydney is for. Check what is available where you are before you plan around a satellite.",
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
      body: "Where you live changes which routes are open to you. The UK has the widest choice of licensed rooms anywhere. In the US the picture is state by state, and the online path runs through WSOP.com in Nevada, Michigan, Pennsylvania and New Jersey rather than the international sites. Australian players tend to go live rather than online — which is exactly what WPT Australia at The Star Sydney is for. Canada treats Ontario separately from the rest of the country.",
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
    clamp(`${todayDot}時点。${ongoing}韓国・台湾・マニラからラスベガスまで、2026年のポーカー大会を日程・バイイン・会場つきで一覧に。各大会に公式サイトのリンクつき。`, 120),

  h1: "ポーカー大会スケジュール 2026",
  heroLead:
    "掲載しているのはすべて主催者の公式ページで確認した内容で、カードごとに参照元をリンクしています。開催状況は日程から自動で計算しているので、シリーズの途中で表示が古くなることはありません。日程は変更されることがあります——最終的な判断は公式サイトでお願いします。",
  asOf: (dot) => `${dot}時点`,

  filterAll: "すべて",
  filterUpcoming: "予定",
  filterOngoing: "開催中",
  filterEnded: "終了",

  filterAllCountries: "すべての国",
  homeCountryNames: { JP: "日本" },

  colDates: "日程",
  colBuyin: "バイイン",
  colVenue: "会場",

  status: { upcoming: "予定", ongoing: "開催中", ended: "終了" },
  yearRound: "通年",
  datesTba: "日程未定",
  officialSite: "公式サイト",
  guideLink: "詳細ガイド",
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
      q: "日本国内で出られる大会は？",
      a: "JOPT（Japan Open Poker Tour）が国内最大級です。2026年4月24日〜5月6日のTokyo Grand Finalはベルサール高田馬場で256イベント、メインイベントのバイインは¥120,000でした。福岡・札幌・大阪でもシリーズが動いています。海外大会のシート（参加権）を出す大会もあるので、行き先を決めてから逆算するのが早いです。この一覧では各大会の公式サイトを直接たどれるようにしています。",
    },
    {
      q: "日本で最大のポーカー大会は？",
      a: "JOPT（Japan Open Poker Tour）です。2026年4月24日〜5月6日のTokyo Grand Finalはベルサール高田馬場で256イベント、メインイベントのバイインは¥120,000でした。国内シリーズとしては規模・イベント数ともに最大級です。",
    },
    {
      q: "ポーカーの世界大会で日本勢はどのくらい勝っていますか？",
      a: "2026年のWSOPで日本はブレスレットを4本獲得しました。Naoya KiharaがEvent #17($428,923)とEvent #23($301,970)、Koji FujimotoがEvent #67($392,478)、Daisuke OgitaがEvent #72で$1,000,000です。4本のうち3本がミックスゲームの選手権でした。メインイベント(9,208エントリー・賞金総額$85,634,400)は参加者222人で日本が全体5位。ファイナルテーブルの9人に日本人は残っていません。10位以下の順位はWSOP公式もPokerNewsも未公開のため、ここでは断定しません。",
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
      a: "この一覧で台湾は12大会と、アジアでは韓国(17大会)に次ぐ多さです。11月のAPT Championships（台北）が最大で、CTP Clubを中心に年間を通じてシリーズが動いています。成田・羽田から台北までは片道4時間ほどで、会場もCTP Asia Poker Arenaに集中しているので、週末だけの遠征でも組みやすいのが利点です。",
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


/* ────────────────────────────────────────────────────────────
   zh — 간체. 본토 · 싱가포르 · 말레이시아 세 시장이 섞여 있고
   입국 요건도 법도 전부 다르다 (zh.md §0).

   ★ 구글 자동완성 실측 (2026-07-29)
     济州岛 扑克 赛事 ★★★ · 台湾/台北 德州扑克 比赛 · 华人 德州扑克 赛事 ·
     亚洲 扑克 赛事 · 澳门 德州扑克 比赛 · 德州扑克 比赛奖金 · 德州扑克 赛事 直播
   ★★ 「济州岛 扑克 赛事」가 잡힌 것이 결정적이다.
     본토 여권은 제주가 **영구 무비자 30일**이고, 우리는 제주 대회를 6개 들고 있다.
     반대로 인천은 2026-07-01부터 단체무비자가 끝나 비자가 필요하다 —
     옛 정보를 그대로 옮기면 "인천 무비자"라는 치명적 오답이 나온다.
   ★ 台湾/台北 검색이 많지만 본토 여권으로는 사실상 막혀 있다.
     이 검색을 하는 사람은 싱가포르·말레이시아 화교이거나 해외 거주 본토인이다.
     → 같은 페이지에서 둘을 구분해 써야 한다 (zh.md §B-1).

   🔒 편집 가드레일 (zh.md §B-4)
     · 본토: 刑法 303조 3항이 겨냥하는 건 "조직하는 자"다.
       알선·모집·대리등록·"함께 가실 분" 뉘앙스 금지. 정보 제공 선을 지킨다.
     · 싱가포르: Remote Gambling Act 2014에 **개인 처벌 조항이 실재**한다.
       온라인 새틀라이트를 권하는 서술을 쓰지 않는다. 라이브 정보로 간다.
     · 부정형 결론으로 겁주지 않는다. 우리 컨셉은 판정자가 아니라 플레이어다.
   ──────────────────────────────────────────────────────────── */
const zh: BoardStrings = {
  htmlLang: "zh-Hans",
  ogLocale: "zh_CN",

  metaTitle: (next, mmdd) => {
    const hooked = `2026德州扑克赛事日程 | 下一场 ${next} ${mmdd}`;
    return next && hooked.length <= 34 ? hooked : "2026德州扑克赛事日程 | 亚洲与全球赛程一览";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(`截至${todayDot}。${ongoing}济州岛、仁川、台北、马尼拉到拉斯维加斯，2026年德州扑克赛事的日期、买入与场馆，每一场都附主办方官网链接。`, 118),

  h1: "2026 德州扑克赛事日程",
  heroLead:
    "以下每一场都是从主办方官网上直接确认的，每张卡片都链接到我们读到它的那一页。赛事状态由日期自动计算，所以系列赛进行途中也不会显示过期信息。日程有可能变动——最终以官网为准。",
  asOf: (dot) => `截至 ${dot}`,

  filterAll: "全部",
  filterUpcoming: "即将开始",
  filterOngoing: "进行中",
  filterEnded: "已结束",

  filterAllCountries: "所有国家和地区",
  homeCountryNames: { CN: "中国", PH: "菲律宾", KH: "柬埔寨" },

  colDates: "日期",
  colBuyin: "买入",
  colVenue: "场馆",

  status: { upcoming: "即将开始", ongoing: "进行中", ended: "已结束" },
  yearRound: "全年",
  datesTba: "日期待定",
  officialSite: "官方网站",
  guideLink: "详细指南",
  buyinUnlisted: "官方未公布",

  countsLine: (total, countries) => `${total} 场赛事 · ${countries} 个国家和地区`,
  sourceNote:
    "如果主办方自己的页面仍停留在去年的信息，我们宁可不放链接，也不把你带到那一页。",
  emptyState: "没有符合该筛选条件的赛事。",
  koLink: "韩文版赛程 →",

  faqHeading: "常见问题",
  faqs: [
    {
      q: "去济州岛打比赛需要签证吗？",
      a: "中国大陆护照前往济州岛是长期免签的，停留期30天，个人和团体都可以，直飞的话也没有三人以上的人数限制。这一点对牌手来说很实际：这份日程里在济州岛举办的赛事有七场，包括Triton济州、Triton济州II（西归浦）、APT济州秋季站和GOP济州。不过政策会变，出发前请再确认一次最新要求。",
    },
    {
      q: "那仁川呢？和济州一样免签吗？",
      a: "不一样，这里最容易出错。仁川过去是全国团体免签的入境口岸，但那项措施已于2026年6月30日到期——从2026年7月1日起，三人团体也需要C-3-2团体旅游签证，个人旅游则走C-3-9（单次停留30天，有效期3个月）。也就是说APT仁川、APPT韩国、WPT Seoul、GOP仁川这几场都需要提前办签证。另外到2026年12月31日之前，团体旅游签证的手续费是免收的。",
    },
    {
      q: "台湾的比赛能去吗？",
      a: "这要看你拿的是哪本护照。持中国大陆护照的话，本岛的团体游尚未开放，个人自由行自2019年8月中断后也没有恢复，目前只有金门、马祖、澎湖对特定省份居民开放团体行程。但如果你是长期居住在海外的大陆居民（含港澳），可以申请第三类入台证，获得15天自由行。持新加坡或马来西亚护照的读者则不受这些限制——这份日程里台湾有12场赛事，在亚洲仅次于韩国（17场）。",
    },
    {
      q: "德州扑克最大的赛事是哪一个？",
      a: "WSOP（世界扑克系列赛）。2026年是5月26日至8月5日在拉斯维加斯，共100条金手链，主赛事有9,208人次报名，奖池$85,634,400，决赛桌在8月3至5日由ESPN转播。亚洲这边规模最大的是APT（亚洲扑克巡回赛），2026年的仁川站保证奖金超过40亿韩元。",
    },
    {
      q: "比赛奖金要交税吗？",
      a: "中国大陆居民的境外所得，需要在次年3月1日至6月30日之间申报，可以通过个人所得税APP或自然人电子税务局网页版的「年度汇算（适用境外所得）」模块办理。偶然所得这类分类所得是分别计算税额的。这里有个实务要点：如果想抵免在境外已经缴过的税，需要当地征税主体出具的完税证明——比如在韩国的赛事，奖金会先扣掉4.4%的税费，那份凭证要留好；在美国则是1042-S表。",
    },
    {
      q: "哪里能看这些赛事的直播？",
      a: "WSOP主赛事决赛桌由ESPN转播，多数大型系列赛也会在主办方官网或其官方频道放出直播与集锦。每张卡片下方的官网链接里通常就有转播安排，这比第三方转载的信息可靠。",
    },
    {
      q: "有哪些赛事是花钱也进不去的？",
      a: "有三种。Triton超高额系列赛是推荐制的，没有卫星赛，光有钱买不到席位。韩国的Holdem Masters用的是邀请券，完全没有现金买入的通道。还有APT锦标赛的开幕日是业内专场，公开赛程要从第二天算起。其余绝大多数赛事都是公开报名的。",
    },
  ],

  localHeading: "出发前需要知道的",
  localBlocks: [
    {
      title: "济州免签、仁川需签——这是2026年7月才变的",
      body: "中国大陆护照到济州岛长期免签、停留30天；而全国团体免签在2026年6月30日到期，从7月1日起前往仁川、首尔等地都需要签证。旧攻略里「仁川免签」的说法现在是错的，而仁川恰好是APT、APPT、WPT Seoul的所在地。团体旅游签证的手续费到2026年12月31日为止是免收的。",
    },
    {
      title: "同样是中文读者，能去的地方不一样",
      body: "这份日程面向的是大陆、新加坡和马来西亚三个市场，但三地的入境条件差别很大。台湾的12场赛事对持新马护照的读者是开放的，对持大陆护照的读者目前基本关闭。反过来，新加坡护照持有人前往中国是30天免签（2024年2月起的互免协定）。看日程时先确认自己那本护照的条件。",
    },
    {
      title: "线上与线下是两回事",
      body: "线上的部分各地情况不一样，能不能用、以什么身分注册，实务上以各家注册流程里出现的国家／地区清单为准。这份页面只处理线下赛事——日程、买入、场馆，还有每一场的官方链接。要去哪一场，从这里往下看就够了。",
    },
  ],
};


/* ────────────────────────────────────────────────────────────
   zh-hant — 번체(대만·홍콩·마카오). **모든 로케일 중 조건이 가장 좋다** (zh-hant.md §0).
   톤은 "장벽 설명"이 아니라 "선택지가 많다"여야 한다. zh(본토)와 정반대.

   ★ 구글 자동완성 실측 (2026-07-29)
     台灣撲克賽事 · 台灣/台北 德州撲克 賽事 · 濟州島 撲克 賽事 ★★★ ·
     澳門 德州撲克 賽事 · 華人 德州撲克 賽事 · 亞洲 撲克 賽事 ·
     德州撲克 最大 賽事 · 德州撲克國際賽事 · 德州撲克 比賽獎金
   → 대만 12 + 한국 17을 들고 있는 우리와 정확히 겹친다.
     대만 여권은 한국 90일 무비자 + K-ETA 면제라 한국 대회 9개가 전부 열려 있다
     (본토는 제주만 열려 있는 것과 대조).

   🔒 편집 가드레일 (zh-hant.md §B-4)
     · ★ **"대만은 홀덤이 합법"이라고 쓰면 틀린다.** 법원이 보는 건 대회 "구조"다.
       칩이 경기 점수로만 쓰이고 상금이 총 순위에 연동될 때 競技로 인정될 여지가 있는 것이지,
       현금 직접 바이인·즉시 환전·단판이 금액을 정하는 구조는 도박으로 인정될 위험이 있다.
       → 조건을 빼고 "합법"만 쓰면 독자를 위험에 빠뜨린다. 반드시 함께 쓴다.
     · 홍콩은 정반대다. 《賭博條例》 제148장 — 해외 사이트라도 홍콩에서 참여하면 위반이 될 수 있다.
       홍콩 독자에게 온라인 새틀라이트를 권하지 않는다. 빠뜨리지도 않는다.
     · 판례의 심급·사건번호는 아직 미확인(zh-hant.md 미해결 #1) → "법원 견해"로 쓰고 단정하지 않는다.
   ──────────────────────────────────────────────────────────── */
const zhHant: BoardStrings = {
  htmlLang: "zh-Hant",
  ogLocale: "zh_TW",

  metaTitle: (next, mmdd) => {
    const hooked = `2026德州撲克賽事賽程 | 下一場 ${next} ${mmdd}`;
    return next && hooked.length <= 34 ? hooked : "2026德州撲克賽事賽程 | 台灣與亞洲賽程一覽";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(`截至${todayDot}。${ongoing}台北、濟州島、仁川、馬尼拉到拉斯維加斯，2026年德州撲克賽事的日期、買入與場館，每一場都附主辦方官網連結。`, 118),

  h1: "2026 德州撲克賽事賽程",
  heroLead:
    "以下每一場都是從主辦方官網上直接確認的，每張卡片都連到我們讀到它的那一頁。賽事狀態由日期自動計算，所以系列賽進行中也不會顯示過期資訊。賽程有可能變動——最後還是以官網為準。",
  asOf: (dot) => `截至 ${dot}`,

  filterAll: "全部",
  filterUpcoming: "即將開始",
  filterOngoing: "進行中",
  filterEnded: "已結束",

  filterAllCountries: "所有國家與地區",
  // ★ 「台」로 쓴다 — 2026-08-31 볼륨 실측에서 검색 표기가 전부 台灣이었다(臺灣 아님).
  homeCountryNames: { TW: "台灣", HK: "香港", PH: "菲律賓" },

  colDates: "日期",
  colBuyin: "買入",
  colVenue: "場館",

  status: { upcoming: "即將開始", ongoing: "進行中", ended: "已結束" },
  yearRound: "全年",
  datesTba: "日期待定",
  officialSite: "官方網站",
  guideLink: "詳細指南",
  buyinUnlisted: "官方未公布",

  countsLine: (total, countries) => `${total} 場賽事 · ${countries} 個國家與地區`,
  sourceNote:
    "如果主辦方自己的頁面還停留在去年的資訊，我們寧可不放連結，也不把你帶到那一頁。",
  emptyState: "沒有符合這個篩選條件的賽事。",
  koLink: "韓文版賽程 →",

  faqHeading: "常見問題",
  faqs: [
    {
      q: "為什麼台灣的德州撲克賽事這麼多？",
      a: "台灣的場子幾乎都以錦標賽的形式在運作——籌碼當競技積分用，獎金連動總排名。這個結構是台灣賽事密度高的背景，也是為什麼一個場地一年能撐起四到六個系列賽。這份賽程裡台灣有12場，在亞洲僅次於韓國（17場），CTP Asia Poker Arena 是最主要的據點。",
    },
    {
      q: "台灣有哪些賽事可以打？",
      a: "這份賽程裡台灣有12場，在亞洲僅次於韓國（17場）。CTP Asia Poker Arena一個場地就撐起一年四到六個系列賽，11月的APT Championships是其中規模最大的，另外還有 TMT 20、Asia Poker Championship、GOP Taipei 這幾個系列。每張卡片下方都有主辦方官網連結，報名與賽程細節以那裡為準。",
    },
    {
      q: "去韓國打比賽需要簽證嗎？",
      a: "台灣護照到韓國是90日免簽，而且K-ETA的臨時免除已延長到2026年12月31日，可以省下₩10,000的申請費。也就是說這份賽程裡韓國的17場——濟州7場（含標示為西歸浦的 Triton SHR 濟州 II，西歸浦就在濟州島上）、仁川8場、首爾2場——全部都能去。⚠️ 有一點容易漏掉：從2026年1月1日起韓國廢除紙本入境卡，改成入境前72小時內線上提交電子入境申報（e-Arrival）。另外K-ETA免除到2026年12月31日為止，之後的行程要再確認。",
    },
    {
      q: "德州撲克最大的賽事是哪一個？",
      a: "WSOP（世界撲克大賽）。2026年是5月26日到8月5日在拉斯維加斯，共100條金手鍊，主賽事9,208人次報名、獎池$85,634,400，決賽桌8月3到5日由ESPN轉播。亞洲這邊規模最大的是APT，2026年仁川站保證獎金超過40億韓元。",
    },
    {
      q: "比賽獎金要繳稅嗎？",
      a: "台灣採最低稅負制，跟韓國、日本的做法差很多。個人海外所得達NT$100萬就要計入基本所得額、產生申報義務，但基本所得額在NT$750萬以下是不用繳基本稅額的（免稅額已從670萬調高到750萬）。超過的部分才以「（基本所得額−750萬）×20%」計算。而且競技、競賽及機會中獎的獎金，是可以從收入額中減除成本與必要費用後的餘額來認定所得的——買入費用有機會被算進去。實際情形請以財政部的說明與個人狀況為準。",
    },
    {
      q: "有哪些賽事是有錢也進不去的？",
      a: "有三種。Triton超高額系列賽是推薦制的，沒有衛星賽，光有錢買不到席位。韓國的Holdem Masters用邀請券，完全沒有現金買入的管道。APT Championships的開幕日是業界專場，公開賽程要從第二天算起。其餘絕大多數都是公開報名的。",
    },
    {
      q: "Natural8跟GGPoker是同一個地方嗎？",
      a: "是同一套軟體、同一個玩家池，Natural8是面向亞洲的品牌。判斷牌局規模時這一點很實際——看到的人數是合併後的。線上的部分各地情況不同，這頁專心處理線下：賽程、買入、場館，以及每一場的官方連結。",
    },
  ],

  localHeading: "出發前該知道的",
  localBlocks: [
    {
      title: "韓國9場全部都能去，但入境流程2026年變了",
      body: "台灣護照到韓國90日免簽，K-ETA臨時免除延長到2026年12月31日。真正容易踩到的是另一件事：從2026年1月1日起韓國廢除紙本入境卡，改為入境前72小時內線上提交電子入境申報。濟州的Triton、APT秋季站、GOP Jeju，仁川的APT、APPT、WPT Seoul都適用。",
    },
    {
      title: "申報和繳稅是兩回事",
      body: "海外所得達NT$100萬就有申報義務，但基本所得額在NT$750萬以下時基本稅額是0。也就是說中等規模的獎金通常要申報、不用繳。而且獎金可以減除成本與必要費用，買入有機會被認列。這跟韓國在發獎時就先扣4.4%、日本要自行辦理確定申告的做法都不一樣。",
    },
    {
      title: "台港澳讀者，出發點不一樣",
      body: "同樣看繁體中文，三地的起點差很多。台灣有12場在地賽事，一年到頭都有得打；香港與澳門沒有本地站，等於每一場都是出國行程，機票和簽證要更早排。反過來說，香港飛台北不到兩小時，飛首爾也在三小時出頭——把台灣或韓國當主場來安排，比想像中省事。這頁的賽程就是照這個順序排的。",
    },
  ],
};


/* ────────────────────────────────────────────────────────────
   es — 6개 로케일 중 가장 파편화돼 있다 (es.md §0).
   메인 독자는 멕시코 + US 히스패닉 + 남미이고 스페인이 아니다(es-latam.md §0).

   ★ 구글 자동완성 실측 (2026-07-29)
     calendario torneos de poker 2026 ★★★ (헤드) · …2026 españa ·
     torneos de poker en mexico 2026 · …colombia 2026 · …en las vegas 2026 ·
     …madrid 2026 · …en miami · …cerca de mi · …en español
   ★ 헤드는 "torneos"가 아니라 "calendario torneos de poker 2026"이다.
     일정표를 찾는 검색어가 따로 있다 → h1·타이틀에 calendario를 넣는다.

   ★★ 프레이밍 (es.md §"이 로케일의 구조적 문제")
     LAPT는 사실상 휴면이라 "우리 지역 대회 목록"으로는 페이지가 성립하지 않는다.
     스페인어권 독자에게 가치 있는 건 "어떤 대회가 있나"가 아니라
     "내 나라에서 거기까지 갈 수 있나"다 → heroLead와 FAQ를 그 축으로 짰다.

   🔒 가드레일
     · 스페인 손실 상계는 출처가 정면 충돌한다(es.md §B-3). 어느 쪽도 쓰지 않고
       AEAT 확인을 안내한다. 지금 상태로 쓰면 절반은 틀린다.
     · 사업자 가부는 국가마다 다르고 미확인이 많다 → 특정 사이트를 권하지 않는다.
     · 콜롬비아 검색 수요는 있으나 우리 데이터에 콜롬비아 대회가 없다 → 있는 척하지 않는다.
   ──────────────────────────────────────────────────────────── */
const es: BoardStrings = {
  htmlLang: "es",
  ogLocale: "es_ES",

  metaTitle: (next, mmdd) => {
    const hooked = `Calendario de torneos de poker 2026 | ${next} ${mmdd}`;
    return next && hooked.length <= 52 ? hooked : "Calendario de torneos de poker 2026";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(`Todos los torneos de poker en vivo de 2026 en una tabla: fechas, buy-in y la fuente oficial de cada uno. Actualizado al ${todayDot}. ${ongoing}`, 158),

  h1: "Calendario de torneos de poker 2026",
  heroLead:
    "Cada torneo de esta lista lo verificamos en la web del propio organizador, y cada tarjeta enlaza a la página donde lo leímos. El estado se calcula a partir de las fechas, así que nada queda desactualizado mientras una serie está en marcha. Los calendarios cambian: la web oficial siempre manda.",
  asOf: (dot) => `al ${dot}`,

  filterAll: "Todos",
  filterUpcoming: "Próximos",
  filterOngoing: "En curso",
  filterEnded: "Finalizados",

  filterAllCountries: "Todos los países",
  homeCountryNames: {
    MX: "México", ES: "España", AR: "Argentina", BR: "Brasil", UY: "Uruguay",
  },

  colDates: "Fechas",
  colBuyin: "Buy-in",
  colVenue: "Sede",

  status: { upcoming: "Próximo", ongoing: "En curso", ended: "Finalizado" },
  yearRound: "Todo el año",
  datesTba: "Fechas por confirmar",
  officialSite: "Web oficial",
  guideLink: "Guía completa",
  buyinUnlisted: "No publicado",

  countsLine: (total, countries) => `${total} torneos · ${countries} países`,
  sourceNote:
    "Cuando la página del propio organizador seguía mostrando información del año pasado, preferimos no enlazarla antes que enviarte allí.",
  emptyState: "No hay torneos que coincidan con ese filtro.",
  koLink: "Calendario en coreano →",

  faqHeading: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Qué torneos de poker hay en México en 2026?",
      a: "El WSOP Circuit México, del 31 de agosto al 11 de septiembre en el Barceló México Santa Fe. Es el único gran torneo nacional mexicano de este calendario, así que si buscas algo grande sin salir del país, ese es. Para el resto del año la vía habitual desde México es viajar: Las Vegas en verano y Barcelona en agosto son los dos destinos con más torneos simultáneos.",
    },
    {
      q: "¿Y en Argentina, Colombia o el resto de Sudamérica?",
      a: "Argentina tiene el Circuito Argentino de Poker, con paradas en Santa Rosa, Puerto Iguazú, Buenos Aires y Rosario repartidas por el año. De Colombia no incluimos ninguna parada porque no encontramos ninguna con fechas publicadas en una web oficial, y preferimos dejar el hueco antes que rellenarlo. Conviene saber también que el LAPT de PokerStars lleva tiempo sin anunciar paradas con fecha en su web oficial de LatAm.",
    },
    {
      q: "¿Qué torneos hay en España?",
      a: "El EPT Barcelona en agosto es el más grande, con doble estructura: el PokerStars Open, de buy-in más bajo, corre en paralelo al EPT propiamente dicho. Además está el WSOP Circuit Madrid a finales de octubre y varias paradas del partypoker Tour en Madrid, Sevilla, Murcia y Castellón, estas últimas con buy-ins bastante más accesibles. En total seis paradas en territorio español.",
    },
    {
      q: "¿Cuáles son los torneos de Las Vegas 2026?",
      a: "Las World Series of Poker, del 26 de mayo al 5 de agosto: 100 brazaletes y un Main Event que reunió 9.208 entradas para una bolsa de premios de US$85.634.400, con la mesa final del 3 al 5 de agosto. Un detalle práctico que sorprende a mucha gente en la caja: los pagos con tarjeta llevan un 3% de comisión y están limitados a US$10.000 por transacción, así que el Main Event de US$10.000 no se puede pagar en un solo cargo.",
    },
    {
      q: "¿Necesito visado para los torneos en Europa?",
      a: "Va a cambiar durante 2026. Se espera que ETIAS entre en funcionamiento en el último trimestre del año, y afecta a todos los pasaportes que hoy entran sin visado: Argentina, Chile, Uruguay, Brasil, Colombia y México, entre otros. Cuesta €20 para las personas de 18 a 70 años, vale 3 años o hasta que caduque el pasaporte, y hay un requisito que conviene comprobar con tiempo: el pasaporte tiene que ser biométrico. Si no lo es, no basta ETIAS y hace falta visado. La primera parada de esta lista que cae dentro de esa ventana es el WSOP Circuit Madrid, del 23 de octubre; la más grande es el EPT Praga de diciembre.",
    },
    {
      q: "¿Se pagan impuestos por los premios?",
      a: "Depende del país y las diferencias son grandes. En México los premios de poker en vivo llevan el Impuesto por Obtención de Premios del 6% más un 1% de ISR. En España los ingresos por torneos, tanto en vivo como online, son declarables, pero sobre si se pueden compensar las pérdidas hay versiones contradictorias circulando, así que ahí lo honesto es remitirte a la Agencia Tributaria antes que darte un cálculo que puede estar mal. Para Argentina, Colombia, Perú y Chile no tenemos dato verificado.",
    },
    {
      q: "¿Hay torneos a los que no se puede entrar pagando?",
      a: "Tres. La Triton Super High Roller Series funciona por recomendación: no hay satélites y el dinero por sí solo no consigue asiento. El Holdem Masters coreano va por entradas de invitación, sin vía de buy-in en efectivo. Y el APT Championships abre con una jornada solo para la industria antes de que empiece el calendario público. El resto son de inscripción abierta.",
    },
  ],

  localHeading: "Antes de reservar",
  localBlocks: [
    {
      title: "ETIAS llega en el último trimestre de 2026",
      body: "Afecta a todos los pasaportes latinoamericanos que hoy entran en Schengen sin visado. €20, válido 3 años o hasta la caducidad del pasaporte, exento para menores de 18 y mayores de 70. El requisito que más gente pasa por alto es que el pasaporte debe ser biométrico: si el tuyo no lo es, ETIAS no sirve y toca visado. También piden al menos 3 meses de vigencia desde la fecha prevista de salida de Schengen.",
    },
    {
      title: "Hispanohablante no significa una sola normativa",
      body: "España regula desde la DGOJ y exige licencia singular específica para poker; en México lo lleva la Dirección General de Juegos y Sorteos; Argentina va por provincias, con IPLyC y LOTBA como reguladores distintos dentro del mismo país; Colombia fue de los primeros de la región en regular el juego online con Coljuegos; Perú lo hace desde la DGJCMT. Qué operadores puedes usar cambia según dónde estés, no según el idioma en que juegues.",
    },
    {
      title: "Una web bloqueada no siempre significa un país bloqueado",
      body: "Las operadoras suelen tener sociedades locales con licencia propia, separadas de su web .com. Pasa con PokerStars.es en España, igual que GGPoker UK está separada de GGPoker.com. Dar por hecho que las restricciones de la matriz se aplican en tu país lleva a equivocarse en ambos sentidos. Esta página solo recoge el calendario presencial y la fuente oficial de cada torneo.",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   de — 독일·오스트리아·스위스(DACH). 2026-08-10 신설.

   ★이 로케일의 특수성: **독자에게 가장 가까운 큰 대회가 자국에 없다.**
     이 표에 DE/AT/CH 개최 대회는 0건이고, 독일 독자의 현실적 목적지는
     체코(King's·프라하)와 서유럽이다. 그래서 문구를 "우리 나라 대회 목록"이
     아니라 **"국경 넘어 어디로 갈까"**로 짰다.
   ★문체: du체 통일 · 포커 동사는 영어차용형 · 소수점 콤마 · 천단위 마침표.
     상세는 docs/translation-terms-de.md(정본) §1~§7.
   ★사실 등급: docs/market-profile/de.md의 ✅(1차 출처 축어)만 본문에 썼다.
   ──────────────────────────────────────────────────────────── */
const de: BoardStrings = {
  htmlLang: "de",
  ogLocale: "de_DE",

  // 독일어는 합성어가 길어 훅이 쉽게 잘린다. es(52)보다 짧게 잡았다.
  metaTitle: (next, mmdd) => {
    const hooked = `Poker Turniere 2026 — ${next} ab ${mmdd}`;
    return next && hooked.length <= 50 ? hooked : "Poker Turnierkalender 2026";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `Alle großen Live-Turniere 2026 in einer Tabelle: Termine, Buy-in und die offizielle Quelle zu jedem Turnier. Stand ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "Poker Turniere 2026 — der Kalender",
  heroLead:
    "Jedes Turnier in dieser Liste haben wir auf der Seite des Veranstalters selbst nachgelesen, und jede Karte verlinkt genau die Seite, auf der es steht. Der Status rechnet sich aus den Terminen — es bleibt also nichts stehen, während eine Serie längst läuft. Termine ändern sich: im Zweifel gilt immer die offizielle Seite.",
  asOf: (dot) => `Stand ${dot}`,

  filterAll: "Alle",
  filterUpcoming: "Kommend",
  filterOngoing: "Läuft",
  filterEnded: "Beendet",

  filterAllCountries: "Alle Länder",
  // ★ CZ가 여기 있는 이유는 HOME_COUNTRY의 주석과 같다 — 독일 독자가 실제로 가는 곳이 체코다.
  homeCountryNames: {
    DE: "Deutschland", AT: "Österreich", CH: "Schweiz", CZ: "Tschechien",
  },

  colDates: "Termin",
  colBuyin: "Buy-in",
  colVenue: "Ort",

  status: { upcoming: "Kommend", ongoing: "Läuft gerade", ended: "Beendet" },
  yearRound: "Ganzjährig",
  datesTba: "Termine offen",
  officialSite: "Offizielle Seite",
  guideLink: "Zum Guide",
  buyinUnlisted: "Nicht veröffentlicht",

  countsLine: (total, countries) => `${total} Turniere · ${countries} Länder`,
  sourceNote:
    "Wenn die Seite des Veranstalters selbst noch das Vorjahr anzeigte, haben wir lieber nicht verlinkt, als dich dorthin zu schicken.",
  emptyState: "Zu diesem Filter passt gerade kein Turnier.",
  koLink: "Kalender auf Koreanisch",

  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Welche Poker-Turniere gibt es 2026 in Deutschland?",
      a: "Keine der großen internationalen Serien in dieser Tabelle wird 2026 in Deutschland ausgetragen — die nächstgelegenen liegen hinter der Grenze und in den Nachbarländern. Für die Reiseplanung sind das die europäischen Fixpunkte: EPT Paris (18.2.–1.3.), WSOP Europe in Prag (31.3.–12.4.), EPT Barcelona (16.–29.8.), WSOP Circuit Madrid (23.10.–2.11.) und EPT Prag (2.–13.12.). Was in Deutschland selbst läuft, sind die Turniere der Spielbanken vor Ort — dafür ist die Turnierseite deiner Spielbank die aktuellere Quelle als jede Jahresübersicht.",
    },
    {
      q: "Wo findet die WSOP Europe 2026 statt?",
      a: "In Prag, nicht mehr in Rozvadov. Die WSOP hat die Serie vom 31. März bis 12. April 2026 ins Hilton Prague gelegt, in Partnerschaft mit King's Casino Prague. Die Jahre davor lief die WSOPE im King's Resort in Rozvadov — wenn du nach älteren Berichten planst, ist genau das die Änderung, die dir sonst die Anfahrt zerlegt.",
    },
    {
      q: "Wo finde ich ein Pokerturnier in meiner Nähe?",
      a: "Diese Tabelle deckt die großen Serien ab, nicht das Dienstagsturnier um die Ecke. Für nächste Woche ist die Turnierseite deiner Spielbank die bessere Quelle, weil dort auch kurzfristige Änderungen stehen. Was dir diese Seite abnimmt, ist die Planung mit Vorlauf: Filter auf „Kommend“ zeigt dir, was als Nächstes startet, und jede Karte verlinkt direkt die offizielle Seite mit Struktur und Anmeldung.",
    },
    {
      q: "Was kostet ein Buy-in?",
      a: "Die Spanne ist groß, und sie ist innerhalb derselben Serie am größten. Ein Main Event einer großen Tour liegt oft im vierstelligen Bereich, während dieselbe Serie Side Events mit deutlich kleineren Buy-ins fährt — deshalb steht bei vielen Einträgen eine Spanne statt einer Zahl. Jede Karte zeigt den Buy-in, den der Veranstalter selbst veröffentlicht hat. Wo nichts steht, hat er ihn noch nicht veröffentlicht: wir schätzen an dieser Stelle nicht.",
    },
    {
      q: "Wie komme ich günstig in ein großes Main Event?",
      a: "Über Satellites. Fast jede große Serie fährt Qualifier, bei denen ein Bruchteil des Buy-ins reicht, und die laufen sowohl online als auch vor Ort in den Tagen davor. Der praktische Punkt: Satellites stehen meist nicht in der Jahresübersicht, sondern erst im Turnierplan der Serie selbst — deshalb führt jede Karte hier direkt auf die offizielle Seite.",
    },
    {
      q: "Kann ich mich für jedes Turnier hier einfach anmelden?",
      a: "Für die meisten ja, für drei nicht. Die Triton Super High Roller Series läuft über Empfehlung — es gibt keine Satellites, und Geld allein kauft keinen Platz. Die koreanischen Holdem Masters laufen über Einladungstickets, ohne Buy-in-Weg in bar. Und die APT Championships starten mit einem Tag nur für die Branche, bevor der öffentliche Kalender beginnt. Alles andere ist offen.",
    },
    {
      q: "Muss ich Turniergewinne versteuern?",
      a: "Das hängt davon ab, wie du spielst — und die Frage ist in Deutschland gerichtlich geklärt worden, nicht pauschal beantwortbar. Der Bundesfinanzhof hat 2023 entschieden, dass auch Gewinne aus dem Online-Pokerspiel (in der Variante Texas Hold'em) als Einkünfte aus Gewerbebetrieb der Einkommensteuer unterliegen können. Maßgeblich ist laut Urteil, ob jemand „private Spielbedürfnisse gleich einem Freizeit- oder Hobbyspieler befriedigt“ oder ob „strukturell-gewerbliche Aspekte entscheidend in den Vordergrund rücken“. Wo du in diesem Spektrum stehst, klärst du mit dem Finanzamt oder einem Steuerberater — eine Turnierliste kann das nicht für dich entscheiden.",
    },
  ],

  localHeading: "Bevor du buchst",
  localBlocks: [
    {
      title: "Die WSOP Europe ist 2026 in Prag, nicht in Rozvadov",
      body: "Vom 31. März bis 12. April 2026 im Hilton Prague, laut WSOP in Partnerschaft mit King's Casino Prague. Das ist die Änderung, die 2026 die meisten Reisepläne trifft: Wer sich an den Vorjahren orientiert, fährt sonst an die falsche Adresse. Rozvadov liegt an der Grenze bei Waidhaus, Prag rund anderthalb Autostunden weiter östlich — Anfahrt, Hotel und Rückfahrt sehen komplett anders aus.",
    },
    {
      title: "Das größte Pokerhaus deiner Umgebung steht in Tschechien",
      body: "King's Resort in Rozvadov beschreibt sich selbst als „Biggest Poker Room in Europe“ und nennt seine Lage in einem Satz: „On the Main Motorway from Munich to Prague“. Genau darin liegt der Punkt für DACH-Spieler — die Anlage ist an den deutschen Markt angebunden, nicht an den tschechischen Binnenmarkt. Wenn du von Bayern aus planst, ist das eher eine lange Autofahrt als eine Auslandsreise.",
    },
    {
      title: "In Österreich läuft Live-Poker über die Casinos Austria",
      body: "Seit Januar 2020 ist Poker in Österreich den Spielbanken vorbehalten, also den teilstaatlichen Casinos Austria; die vorher großen privaten Pokerräume haben in diesem Zug geschlossen. Für die Planung heißt das schlicht: In Österreich suchst du nach Casino-Terminen, nicht nach privaten Cardrooms. Wenn du von Süddeutschland aus schaust, sind Bregenz und Salzburg oft näher als die Hälfte der deutschen Spielbanken.",
    },
  ],
};

export const BOARD_STRINGS: Partial<Record<BoardLocale, BoardStrings>> = { en, ja, zh, "zh-hant": zhHant, es, de };

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
const PAREN_ZH: Record<string, string> = {
  "(Fall)": "（秋季）", "(July)": "（7月）", "(August)": "（8月）",
  "(November)": "（11月）", "(December)": "（12月）", "(Ha Long Bay)": "（下龙湾）",
};

/**
 * 로케일별 (도시사전, 괄호사전). 없으면 라틴 그대로가 정답이다.
 * ★ const 객체가 아니라 함수다 — CITY_* 사전이 이 아래에 선언돼 있어서
 *   모듈 최상위 const로 잡으면 TDZ("Cannot access before initialization")로 빌드가 깨진다.
 */
function nameMaps(
  locale: BoardLocale,
): [Record<string, string>, Record<string, string>] | null {
  if (locale === "ja") return [CITY_JA, PAREN_JA];
  if (locale === "zh") return [CITY_ZH, PAREN_ZH];
  if (locale === "zh-hant") return [CITY_HANT, PAREN_HANT];
  if (locale === "es") return [CITY_ES, PAREN_ES];
  if (locale === "de") return [CITY_DE, PAREN_DE];
  return null;
}

/**
 * 대회명에 든 **국가명**. 도시 사전(CITY_*)으로는 안 잡힌다.
 * `APPT Korea`가 스페인어 설명문에선 `Corea`인데 카드 제목만 영어로 남아
 * 같은 페이지 안에서 표기가 어긋났다. 도시를 바꾸는 것과 같은 원리다
 * (`APT Jeju` → `APT 済州`).
 */
const COUNTRY_NAME: Partial<Record<BoardLocale, Record<string, string>>> = {
  ja: {
    "North Cyprus": "北キプロス", Korea: "韓国", Vietnam: "ベトナム",
    Australia: "オーストラリア", Canada: "カナダ", Montenegro: "モンテネグロ",
    Taiwan: "台湾",
  },
  zh: {
    "North Cyprus": "北塞浦路斯", Korea: "韩国", Vietnam: "越南",
    Australia: "澳大利亚", Canada: "加拿大", Montenegro: "黑山",
    Taiwan: "台湾",
  },
  "zh-hant": {
    "North Cyprus": "北賽普勒斯", Korea: "韓國", Vietnam: "越南",
    Australia: "澳洲", Canada: "加拿大", Montenegro: "蒙特內哥羅",
    Taiwan: "台灣",
  },
  es: {
    // 스페인어에서 철자가 실제로 갈리는 것만. Vietnam·Australia·Montenegro는 그대로가 맞다
    "North Cyprus": "Chipre del Norte", Korea: "Corea", Canada: "Canadá",
    Taiwan: "Taiwán",
  },
};

/**
 * 대회명 자체가 브랜드라서 지명을 건드리면 안 되는 대회.
 * `Taiwan Millions Tournament`의 Taiwan은 개최지 표시가 아니라 대회 이름의 일부다.
 */
const BRAND_LOCKED = new Set(["tmt-20", "tmt-championship"]);

/**
 * 지명이 안 들어간 대회명은 위 치환이 걸리지 않는다("57th WSOP 2026", "7th Holdem Masters").
 * 서수 표기가 로케일마다 달라서 그대로 두면 중국어·일본어 페이지에 영어가 남는다.
 * ★ 브랜드(WSOP·Holdem Masters)는 라틴 유지 — 카타카나·한자 표기를 지어내지 않는다.
 */
const NAME_OVERRIDE: Partial<Record<BoardLocale, Record<string, string>>> = {
  ja: {
    "cap-5-santarosa": "CAP 第5戦 サンタローサ",
    "cap-6-iguazu": "CAP 第6戦 プエルトイグアス",
    "cap-7-buenosaires": "CAP 第7戦 ブエノスアイレス",
    "cap-8-rosario": "CAP 第8戦 ロサリオ",
    "holdem-masters-7": "第7回 Holdem Masters",
    "holdem-masters-8": "第8回 Holdem Masters",
    "wsop-2026": "第57回 WSOP 2026",
    "wpt-world-championship": "WPT ワールドチャンピオンシップ",
  },
  en: {
    "cap-5-santarosa": "CAP Leg 5 — Santa Rosa",
    "cap-6-iguazu": "CAP Leg 6 — Puerto Iguazú",
    "cap-7-buenosaires": "CAP Leg 7 — Buenos Aires",
    "cap-8-rosario": "CAP Leg 8 — Rosario",
  },
  es: {
    "holdem-masters-7": "7.º Holdem Masters",
    "holdem-masters-8": "8.º Holdem Masters",
    "wsop-2026": "57.ª WSOP 2026",
  },
  "zh-hant": {
    "cap-5-santarosa": "CAP 第5站 聖羅莎",
    "cap-6-iguazu": "CAP 第6站 伊瓜蘇港",
    "cap-7-buenosaires": "CAP 第7站 布宜諾斯艾利斯",
    "cap-8-rosario": "CAP 第8站 羅薩里奧",
    "holdem-masters-7": "第7屆 Holdem Masters",
    "holdem-masters-8": "第8屆 Holdem Masters",
    "wsop-2026": "第57屆 WSOP 2026",
    "wpt-world-championship": "WPT 世界錦標賽",
  },
  zh: {
    "cap-5-santarosa": "CAP 第5站 圣罗莎",
    "cap-6-iguazu": "CAP 第6站 伊瓜苏港",
    "cap-7-buenosaires": "CAP 第7站 布宜诺斯艾利斯",
    "cap-8-rosario": "CAP 第8站 罗萨里奥",
    "holdem-masters-7": "第7届 Holdem Masters",
    "holdem-masters-8": "第8届 Holdem Masters",
    "wsop-2026": "第57届 WSOP 2026",
    "wpt-world-championship": "WPT 世界锦标赛",
  },
};

export function localizedName(t: Tournament, locale: BoardLocale): string {
  const override = NAME_OVERRIDE[locale]?.[t.id];
  if (override) return override;

  const maps = nameMaps(locale);
  if (!maps) return t.nameEn;
  if (BRAND_LOCKED.has(t.id)) return t.nameEn;
  const [CITY, PAREN] = maps;

  // 브랜드(APT·WSOP·EPT)는 라틴 그대로, 지명만 현지 표기로 바꾼다.
  // ja.md가 `APT 仁川`을 실검색형으로 기록하고 있고,
  // 간체 자동완성에도 「台北 德州扑克 比赛」가 잡힌다.
  let out = t.nameEn;

  // ★ 괄호를 먼저. "(Ha Long Bay)"가 지명 "Ha Long"을 품고 있어서
  //   순서를 뒤집으면 "(下龙 Bay)" 같은 반쪽 치환이 나온다.
  for (const [en, loc] of Object.entries(PAREN)) {
    if (out.includes(en)) out = out.replace(en, loc);
  }

  // t.city를 먼저 쓰되, 대회명의 지명이 city와 다른 경우가 있다
  // (APPT Manila는 city가 Parañaque다) → 사전 전체를 훑어 실제로 들어 있는 지명을 찾는다.
  const direct = CITY[t.city];
  if (direct && out.includes(t.city)) {
    out = out.replace(t.city, direct);
  } else {
    // 긴 지명부터 (Las Vegas가 Vegas보다 먼저 걸려야 한다)
    const key = Object.keys(CITY)
      .filter((c) => out.includes(c))
      .sort((a, b) => b.length - a.length)[0];
    if (key) out = out.replace(key, CITY[key]);
  }

  // 국가명도 같은 자리에 온다 ("APPT Korea", "WPT Australia").
  // 긴 것부터 — "North Cyprus"가 "Cyprus"보다 먼저 걸려야 한다.
  const COUNTRY = COUNTRY_NAME[locale] ?? {};
  const ckey = Object.keys(COUNTRY)
    .filter((c) => out.includes(c))
    .sort((a, b) => b.length - a.length)[0];
  if (ckey) out = out.replace(ckey, COUNTRY[ckey]);

  // 전각 괄호 앞의 반각 공백은 CJK 조판에서 어색하다 ("切罗基 （8月）" → "切罗基（8月）")
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
  "새틀라이트 티켓 전용": "Satellite ticket only",
  /* 한자·가나 회장명은 영어 페이지에서 읽히지 않는다.
     지어내지 않고 각 회장의 공식 라틴 표기를 쓴다
     (dojimariver.com / bellesalle.co.jp `bs_takadanobaba` / sapporofactory.jp). */
  "Red Space 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "REDSPACE 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "サッポロファクトリーホール": "Sapporo Factory Hall",
  "出島メッセ長崎": "Dejima Messe Nagasaki",
  "ベルサール高田馬場, 新宿区": "Bellesalle Takadanobaba, Shinjuku",
  "堂島リバーフォーラム": "Dojima River Forum",
  "€400~": "€400 and up",
  "€1,100~": "€1,100 and up",
  "₩350K~₩5M": "₩350K – ₩5M",
  // buyin
  "공식 미기재": "Not published",
  "미발표": "TBA",
  "다양": "Varies",
  "무료": "Free",
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
  "새틀라이트 티켓 전용": "サテライトチケット限定",
  "€400~": "€400〜",
  "€1,100~": "€1,100〜",
  "₩350K~₩5M": "35万〜500万ウォン",
  "공식 미기재": "公式未掲載",
  "미발표": "未発表",
  "다양": "イベントにより異なる",
  "무료": "無料",
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
  Middelkerke: "ミッデルケルケ", "Monte Carlo": "モンテカルロ", "Monte-Carlo": "モンテカルロ", Murcia: "ムルシア",
  Nagasaki: "長崎", Namur: "ナミュール",
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
  // 台北の会場名にある「多元商務空間」は中国語の説明句。日本語面には残さない
  "Red Space 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "REDSPACE 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  // 半角カンマは日本語組版で浮く
  "ベルサール高田馬場, 新宿区": "ベルサール高田馬場（新宿区）",
};


/* zh 필드 사전 (간체). 통화는 원문 통화 유지, 표기만 현지식 */
const FIELD_ZH: Record<string, string> = {
  "새틀라이트 티켓 전용": "仅限卫星赛门票",
  "€400~": "€400起",
  "€1,100~": "€1,100起",
  "₩350K~₩5M": "35万〜500万韩元",
  "공식 미기재": "官方未公布",
  "미발표": "尚未公布",
  "다양": "视赛事而定",
  "무료": "免费",
  "초대권 전용": "仅限邀请",
  "초대권 전용 (현금 바이인 없음)": "仅限邀请（无现金买入）",
  "메인 ₩150만": "主赛 150万韩元",
  "메인 ₩220만": "主赛 220万韩元",
  "메인 ₩230만": "主赛 230万韩元",
  "메인 ₩250만": "主赛 250万韩元",
  "메인 ₩270만": "主赛 270万韩元",
  "₩30만~₩800만": "30万〜800万韩元",
  "₩90만~": "90万韩元起",
  "~₩700만 (하이롤러)": "至700万韩元（高额桌）",
  "€5,300 (메인)": "€5,300（主赛）",
  "프리롤~NT$120,000": "免费赛〜NT$120,000",
  "미정 (공식 미기재)": "待定（官方未公布）",
  "야자수 서울센터": "YAJASU 首尔中心",
  "Hilton Prague (King's Casino Prague 운영)": "布拉格希尔顿（King's Casino Prague 运营）",
  "(ME 파이널 8/3~5)": "（主赛决赛桌 8/3〜5）",
  "2026.12 예정 (날짜 미발표)": "2026年12月预定（日期未公布）",
};

/* ★ 간체 자동완성에 「济州岛 扑克 赛事」「台北 德州扑克 比赛」가 잡혔다.
   도시명을 라틴으로 두면 이 검색을 통째로 놓친다. */
const CITY_ZH: Record<string, string> = {
  "Aix-en-Provence": "艾克斯普罗旺斯", "Atlantic City": "大西洋城", Austin: "奥斯汀",
  Barcelona: "巴塞罗那", Bratislava: "布拉迪斯拉发", Budva: "布德瓦",
  "Buenos Aires": "布宜诺斯艾利斯", Calgary: "卡尔加里", "Castellón": "卡斯特利翁",
  Catoosa: "卡图萨", Cherokee: "切罗基", Cork: "科克", "Council Bluffs": "康瑟尔布拉夫斯",
  Danville: "丹维尔", Durant: "杜兰特", Elgin: "埃尔金", Elizabeth: "伊丽莎白",
  "Florianópolis": "弗洛里亚诺波利斯", Fukuoka: "福冈", Gamprin: "甘普林", Glasgow: "格拉斯哥",
  "Ha Long": "下龙", Hanover: "汉诺威", Incheon: "仁川", Jeju: "济州", Kahnawake: "卡纳瓦克",
  Kyrenia: "凯里尼亚", "Las Vegas": "拉斯维加斯", Lincoln: "林肯", London: "伦敦",
  Madrid: "马德里", Manchester: "曼彻斯特", Manila: "马尼拉",
  "Mata de São João": "圣若昂马塔", "Mexico City": "墨西哥城", Middelkerke: "米德尔凯尔克",
  "Monte Carlo": "蒙特卡洛", "Monte-Carlo": "蒙特卡洛", Murcia: "穆尔西亚",
  Nagasaki: "长崎", Namur: "那慕尔",
  Nassau: "拿骚", "New Orleans": "新奥尔良", Osaka: "大阪", "Panama City": "巴拿马城",
  "Parañaque": "帕拉纳克", Paris: "巴黎", "Pompano Beach": "庞帕诺比奇", Prague: "布拉格",
  "Puerto Iguazú": "伊瓜苏港", Robinsonville: "罗宾逊维尔", Rosario: "罗萨里奥",
  Sanremo: "圣雷莫", "Santa Rosa": "圣罗莎", "São Paulo": "圣保罗", Sapporo: "札幌",
  Scottsdale: "斯科茨代尔", Seogwipo: "西归浦", Seoul: "首尔", Seville: "塞维利亚",
  Sheffield: "谢菲尔德", "St. Julian's": "圣朱利安", Stateline: "斯泰特莱恩",
  Sydney: "悉尼", Taipei: "台北", Tallinn: "塔林", Tokyo: "东京", Toledo: "托莱多",
  Verona: "维罗纳",
};

const VENUE_ZH: Record<string, string> = {
  "Paradise City": "百乐达斯城",
  "Paradise City Casino": "百乐达斯城赌场",
  "Red Space 多元商務空間 / Asia Poker Arena": "REDSPACE 多元商务空间 / Asia Poker Arena",
  "REDSPACE 多元商務空間 / Asia Poker Arena": "REDSPACE 多元商务空间 / Asia Poker Arena",
  // 일본 회장명: 가나 부분은 공식 라틴 표기로, 한자 지명은 중국어에서도 같은 글자를 쓴다
  "サッポロファクトリーホール": "Sapporo Factory Hall",
  "出島メッセ長崎": "Dejima Messe Nagasaki",
  "ベルサール高田馬場, 新宿区": "Bellesalle 高田马场（新宿区）",
  "堂島リバーフォーラム": "堂岛 River Forum",
};

/** zh판 대회 설명. 수치는 원문 그대로 — §13은 언어 불변 */
const SCHEMA_DESC_ZH: Record<string, string> = {
  "holdem-masters-7":
    "WPL赞助、WeLive主办、YAJASU协办。总奖金保证15亿韩元，仅凭邀请券参赛。",
  "wsop-2026":
    "全球规模最大的扑克系列赛。5月26日至7月15日共100条金手链，主赛事9,208人次报名、奖池$85,634,400，决赛桌8月3至5日由ESPN转播。",
  "kpc-king-july":
    "在济州岛LES A Casino举行的17天扑克节。系列赛保证20亿韩元，King Poker Cup主赛事保证11亿韩元。",
  "apt-incheon":
    "亚洲最大巡回赛APT的2026年仁川站。百乐达斯城举办，总保证奖金超过40亿韩元，主赛事保证15亿韩元。",
  "holdem-masters-8":
    "第8届Holdem Masters。总奖金保证20亿韩元，为该系列历来最高，主赛事保证18亿韩元。",
  "appt-korea":
    "PokerStars APPT的2026年韩国站，在仁川百乐达斯城举行，主赛事保证10亿韩元。",
  "triton-jeju-2":
    "Triton超高额系列赛本年度第二次落地济州。14场高额赛事，买入$15,000至$200,000。",
  "apt-jeju-fall":
    "APT的2026年济州秋季站。136场赛事，主赛事保证22亿韩元。",
  "wpt-seoul":
    "WPT首次在INSPIRE娱乐度假村举办的赛事。46场比赛，主赛事保证10亿韩元。",
  "appt-manila":
    "PokerStars APPT的2026年马尼拉站，在Okada Manila举行，系列赛总保底约1.32亿菲律宾比索。",
};


/* zh-hant 필드 사전 (번체) */
const FIELD_HANT: Record<string, string> = {
  "새틀라이트 티켓 전용": "僅限衛星賽門票",
  "€400~": "€400起",
  "€1,100~": "€1,100起",
  "₩350K~₩5M": "35萬〜500萬韓元",
  "공식 미기재": "官方未公布",
  "미발표": "尚未公布",
  "다양": "視賽事而定",
  "무료": "免費",
  "초대권 전용": "僅限邀請",
  "초대권 전용 (현금 바이인 없음)": "僅限邀請（無現金買入）",
  "메인 ₩150만": "主賽 150萬韓元",
  "메인 ₩220만": "主賽 220萬韓元",
  "메인 ₩230만": "主賽 230萬韓元",
  "메인 ₩250만": "主賽 250萬韓元",
  "메인 ₩270만": "主賽 270萬韓元",
  "₩30만~₩800만": "30萬〜800萬韓元",
  "₩90만~": "90萬韓元起",
  "~₩700만 (하이롤러)": "至700萬韓元（高額桌）",
  "€5,300 (메인)": "€5,300（主賽）",
  "프리롤~NT$120,000": "免費賽〜NT$120,000",
  "미정 (공식 미기재)": "待定（官方未公布）",
  "야자수 서울센터": "YAJASU 首爾中心",
  "Hilton Prague (King's Casino Prague 운영)": "布拉格希爾頓（King's Casino Prague 營運）",
  "(ME 파이널 8/3~5)": "（主賽決賽桌 8/3〜5）",
  "2026.12 예정 (날짜 미발표)": "2026年12月預定（日期未公布）",
};

/* ★ 번체는 간체와 음역이 다른 도시가 실제로 있다.
   悉尼/雪梨(Sydney) · 蒙特卡洛/蒙地卡羅 · 巴塞罗那/巴塞隆納 ·
   新奥尔良/紐奧良 · 谢菲尔德/雪菲爾 — 간체판을 번체 변환만 하면 대만 독자에게 어색해진다. */
const CITY_HANT: Record<string, string> = {
  "Aix-en-Provence": "艾克斯普羅旺斯", "Atlantic City": "大西洋城", Austin: "奧斯汀",
  Barcelona: "巴塞隆納", Bratislava: "布拉提斯拉瓦", Budva: "布德瓦",
  "Buenos Aires": "布宜諾斯艾利斯", Calgary: "卡加利", "Castellón": "卡斯特利翁",
  Catoosa: "卡圖薩", Cherokee: "切羅基", Cork: "科克", "Council Bluffs": "康瑟爾布拉夫斯",
  Danville: "丹維爾", Durant: "杜蘭特", Elgin: "埃爾金", Elizabeth: "伊莉莎白",
  "Florianópolis": "弗洛里亞諾波利斯", Fukuoka: "福岡", Gamprin: "甘普林", Glasgow: "格拉斯哥",
  "Ha Long": "下龍", Hanover: "漢諾威", Incheon: "仁川", Jeju: "濟州", Kahnawake: "卡納瓦克",
  Kyrenia: "凱里尼亞", "Las Vegas": "拉斯維加斯", Lincoln: "林肯", London: "倫敦",
  Madrid: "馬德里", Manchester: "曼徹斯特", Manila: "馬尼拉",
  "Mata de São João": "聖若昂馬塔", "Mexico City": "墨西哥城", Middelkerke: "米德爾凱爾克",
  "Monte Carlo": "蒙地卡羅", "Monte-Carlo": "蒙地卡羅", Murcia: "穆爾西亞",
  Nagasaki: "長崎", Namur: "那慕爾",
  Nassau: "拿騷", "New Orleans": "紐奧良", Osaka: "大阪", "Panama City": "巴拿馬城",
  "Parañaque": "帕拉納克", Paris: "巴黎", "Pompano Beach": "龐帕諾比奇", Prague: "布拉格",
  "Puerto Iguazú": "伊瓜蘇港", Robinsonville: "羅賓遜維爾", Rosario: "羅薩里奧",
  Sanremo: "聖雷莫", "Santa Rosa": "聖羅莎", "São Paulo": "聖保羅", Sapporo: "札幌",
  Scottsdale: "斯科茨代爾", Seogwipo: "西歸浦", Seoul: "首爾", Seville: "塞維利亞",
  Sheffield: "雪菲爾", "St. Julian's": "聖朱利安", Stateline: "斯泰特萊恩",
  Sydney: "雪梨", Taipei: "台北", Tallinn: "塔林", Tokyo: "東京", Toledo: "托雷多",
  Verona: "維羅納",
};

const VENUE_HANT: Record<string, string> = {
  "Paradise City": "百樂達斯城",
  "Paradise City Casino": "百樂達斯城賭場",
  // 원본 데이터에 Red Space / REDSPACE 두 표기가 섞여 있다 — 하나로 통일
  "Red Space 多元商務空間 / Asia Poker Arena": "REDSPACE 多元商務空間 / Asia Poker Arena",
  "サッポロファクトリーホール": "Sapporo Factory Hall",
  "出島メッセ長崎": "Dejima Messe Nagasaki",
  "ベルサール高田馬場, 新宿区": "Bellesalle 高田馬場（新宿區）",
  "堂島リバーフォーラム": "堂島 River Forum",
};

/** zh-hant판 대회 설명. 수치는 원문 그대로 — §13은 언어 불변 */
const SCHEMA_DESC_HANT: Record<string, string> = {
  "holdem-masters-7":
    "WPL贊助、WeLive主辦、YAJASU協辦。總獎金保證15億韓元，僅憑邀請券參賽。",
  "wsop-2026":
    "全球規模最大的撲克系列賽。5月26日至7月15日共100條金手鍊，主賽事9,208人次報名、獎池$85,634,400，決賽桌8月3至5日由ESPN轉播。",
  "kpc-king-july":
    "在濟州島LES A Casino舉行的17天撲克節。系列賽保證20億韓元，King Poker Cup主賽事保證11億韓元。",
  "apt-incheon":
    "亞洲最大巡迴賽APT的2026年仁川站。百樂達斯城舉辦，總保證獎金超過40億韓元，主賽事保證15億韓元。",
  "holdem-masters-8":
    "第8屆Holdem Masters。總獎金保證20億韓元，為該系列歷來最高，主賽事保證18億韓元。",
  "appt-korea":
    "PokerStars APPT的2026年韓國站，在仁川百樂達斯城舉行，主賽事保證10億韓元。",
  "triton-jeju-2":
    "Triton超高額系列賽本年度第二次落地濟州。14場高額賽事，買入$15,000至$200,000。",
  "apt-jeju-fall":
    "APT的2026年濟州秋季站。136場賽事，主賽事保證22億韓元。",
  "wpt-seoul":
    "WPT首次在INSPIRE娛樂度假村舉辦的賽事。46場比賽，主賽事保證10億韓元。",
  "appt-manila":
    "PokerStars APPT的2026年馬尼拉站，在Okada Manila舉行，系列賽總保底約1.32億披索。",
};

const PAREN_HANT: Record<string, string> = {
  "(Fall)": "（秋季）", "(July)": "（7月）", "(August)": "（8月）",
  "(November)": "（11月）", "(December)": "（12月）", "(Ha Long Bay)": "（下龍灣）",
};


/* es 필드 사전.
   ★ 스페인어는 천단위 구분이 점(.)이고 소수점이 쉼표(,)다 — 영어와 반대.
     "€5,300"을 그대로 두면 스페인어 독자에겐 "5.3유로"로 읽힌다. */
const FIELD_ES: Record<string, string> = {
  "새틀라이트 티켓 전용": "Solo con ticket de satélite",
  /* ★ 스페인어 숫자 표기는 영어와 정반대다 — 천 단위가 마침표, 소수점이 쉼표.
     그래서 `€1,650`을 그대로 두면 스페인어 독자에겐 "1유로 65센트"로 읽힌다.
     ★ 그리고 멕시코에서 `$`는 페소다. USD는 반드시 `US$`로 적는다
       ($25,000을 페소로 읽으면 실제 바이인의 1/20이 된다). */
  "€825~€100,000": "€825–€100.000",
  "€1,650~€250,000": "€1.650–€250.000",
  "€1,650~€5,300": "€1.650–€5.300",
  "€825~€10,300": "€825–€10.300",
  "€200~€1,100": "€200–€1.100",
  "€150~€1,000": "€150–€1.000",
  "$2,000~$150,000": "US$2.000–US$150.000",
  "$25,000~$200,000": "US$25.000–US$200.000",
  "$25,000~$150,000": "US$25.000–US$150.000",
  "$15,000~$200,000": "US$15.000–US$200.000",
  "$10,400~$50,500": "US$10.400–US$50.500",
  "$300~$250,000": "US$300–US$250.000",
  "$300~$3,000": "US$300–US$3.000",
  "$330~$7,500": "US$330–US$7.500",
  "USD 100~1,000": "USD 100–1.000",
  "£150~£1,000": "£150–£1.000",
  "TWD 3,000~800,000": "TWD 3.000–800.000",
  "TWD 3,300~1,500,000": "TWD 3.300–1.500.000",
  "NT$200~NT$150,000": "NT$200–NT$150.000",
  "₱11,000~₱682,500": "₱11.000–₱682.500",
  "₱9,000~₱300,000": "₱9.000–₱300.000",
  "₱3,500~₱500,000": "₱3.500–₱500.000",
  "₫2,300,000~₫152,000,000": "₫2.300.000–₫152.000.000",
  "¥2,000~¥300,000": "¥2.000–¥300.000",
  "¥3,000~¥200,000": "¥3.000–¥200.000",
  "R$500~R$100,000": "R$500–R$100.000",
  "R$500~R$25,000": "R$500–R$25.000",
  "AUD $1,150~$5,000": "AUD 1.150–5.000",
  "€400~": "desde €400",
  "€1,100~": "desde €1.100",
  // DACH (2026-08-10) — es도 천 단위가 마침표다
  "€1,100": "€1.100",
  "€40~€3,000": "€40–€3.000",
  "₩350K~₩5M": "350 mil – 5 M KRW",
  "공식 미기재": "No publicado",
  "미발표": "Por confirmar",
  "다양": "Según el evento",
  "무료": "Gratis",
  "초대권 전용": "Solo por invitación",
  "초대권 전용 (현금 바이인 없음)": "Solo por invitación (sin buy-in en efectivo)",
  "메인 ₩150만": "Main event 1,5 M KRW",
  "메인 ₩220만": "Main event 2,2 M KRW",
  "메인 ₩230만": "Main event 2,3 M KRW",
  "메인 ₩250만": "Main event 2,5 M KRW",
  "메인 ₩270만": "Main event 2,7 M KRW",
  "₩30만~₩800만": "300 mil – 8 M KRW",
  "₩90만~": "desde 900 mil KRW",
  "~₩700만 (하이롤러)": "hasta 7 M KRW (high roller)",
  "€5,300 (메인)": "€5.300 (main event)",
  "프리롤~NT$120,000": "freeroll – NT$120.000",
  "미정 (공식 미기재)": "Por determinar (no publicado)",
  "야자수 서울센터": "Centro YAJASU Seúl",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Praga (operado por King's Casino Prague)",
  "(ME 파이널 8/3~5)": "(mesa final 3–5 ago)",
  "2026.12 예정 (날짜 미발표)": "Diciembre de 2026 (fechas por confirmar)",
};

/* ★ es는 CJK와 상황이 다르다.
   대부분의 서구 도시명은 스페인어에서도 라틴 철자 그대로가 정답이라,
   여기엔 **실제로 표기가 갈리는 것만** 넣는다. 사전에 없으면 원문이 맞다.
   특히 Seville은 우리 데이터가 영어 철자인데 스페인어 독자에겐 Sevilla다. */
const CITY_ES: Record<string, string> = {
  Seville: "Sevilla",
  London: "Londres",
  Paris: "París",
  Prague: "Praga",
  Tokyo: "Tokio",
  Sydney: "Sídney",
  Taipei: "Taipéi",
  Seoul: "Seúl",
  "New Orleans": "Nueva Orleans",
  "Mexico City": "Ciudad de México",
  "Panama City": "Ciudad de Panamá",
  "Monte Carlo": "Montecarlo",
  "Monte-Carlo": "Montecarlo",
  Nassau: "Nasáu",
  Tallinn: "Tallin",
  "St. Julian's": "San Julián",
  Sanremo: "San Remo",
  Manchester: "Mánchester",
};

/* 라틴 문자권 페이지에 한자·가나가 그대로 뜨면 읽히지 않는다.
   지어내지 않고 각 회장의 **공식 라틴 표기**를 쓴다.
   (dojimariver.com / bellesalle.co.jp의 `bs_takadanobaba` / sapporofactory.jp) */
const VENUE_ES: Record<string, string> = {
  "Red Space 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "REDSPACE 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "サッポロファクトリーホール": "Sapporo Factory Hall",
  "出島メッセ長崎": "Dejima Messe Nagasaki",
  "ベルサール高田馬場, 新宿区": "Bellesalle Takadanobaba, Shinjuku",
  "堂島リバーフォーラム": "Dojima River Forum",
};

const PAREN_ES: Record<string, string> = {
  "(Fall)": "(otoño)",
  "(July)": "(julio)",
  "(August)": "(agosto)",
  "(November)": "(noviembre)",
  "(December)": "(diciembre)",
  "(Ha Long Bay)": "(bahía de Ha Long)",
};

/** es판 대회 설명. 수치는 원문 그대로 — §13은 언어 불변. 숫자 포맷만 스페인어식 */
const SCHEMA_DESC_ES: Record<string, string> = {
  "holdem-masters-7":
    "Patrocinado por WPL, organizado por WeLive con YAJASU. 1.500 millones de KRW garantizados; entrada solo por invitación.",
  "wsop-2026":
    "La serie de poker más grande del mundo. 100 brazaletes del 26 de mayo al 15 de julio; el Main Event reunió 9.208 entradas para una bolsa de premios de US$85.634.400, con la mesa final del 3 al 5 de agosto por ESPN.",
  "kpc-king-july":
    "Festival de 17 días en el LES A Casino de la isla de Jeju. 2.000 millones de KRW garantizados en la serie y 1.100 millones en el Main Event de la King Poker Cup.",
  "apt-incheon":
    "Parada de Incheon 2026 del Asian Poker Tour, el circuito más grande de Asia. En Paradise City, con más de 4.000 millones de KRW garantizados y 1.500 millones en el Main Event.",
  "holdem-masters-8":
    "Octava edición del Holdem Masters, la mayor de la serie hasta la fecha con 2.000 millones de KRW garantizados y 1.800 millones en el Main Event.",
  "appt-korea":
    "Parada de Corea 2026 del APPT de PokerStars, en Paradise City Incheon, con 1.000 millones de KRW garantizados en el Main Event.",
  "triton-jeju-2":
    "Segunda Triton Super High Roller Series del año en Jeju: 14 torneos high roller con buy-ins de US$15.000 a US$200.000.",
  "apt-jeju-fall":
    "Parada de otoño de 2026 del Asian Poker Tour en Jeju: 136 eventos con 2.200 millones de KRW garantizados en el Main Event.",
  "wpt-seoul":
    "Primer evento del World Poker Tour en el INSPIRE Entertainment Resort: 46 eventos con 1.000 millones de KRW garantizados en el Main Event.",
  "appt-manila":
    "Parada de Manila 2026 del APPT de PokerStars, en Okada Manila, con ₱132 millones garantizados en la serie.",
};

/* ────────────────────────────────────────────────────────────
   de 사전 (2026-08-10 신설).

   ★숫자 표기는 es와 «같다» — 천 단위 마침표, 소수점 콤마.
     그래서 `€1,650`을 그대로 두면 독일 독자는 "1유로 65센트"로 읽는다.
   ★단 통화 기호는 es와 다르게 «US$»를 쓰지 않는다. 페소권이 아니라
     `$`만으로 USD가 명확하고, 독일 포커 매체도 헤드라인에 `$440.000`처럼 쓴다.
   ★KRW 단위는 독일식 축약 — Mrd.(10억) · Mio.(100만) · Tsd.(1천).
     수치 자체는 §13대로 불변, 표기만 옮긴다.
   근거: docs/translation-terms-de.md §3(표기) · §7-5(숫자 실측)
   ──────────────────────────────────────────────────────────── */
const FIELD_DE: Record<string, string> = {
  "새틀라이트 티켓 전용": "Nur mit Satellite-Ticket",
  "€825~€100,000": "€825–€100.000",
  "€1,650~€250,000": "€1.650–€250.000",
  "€1,650~€5,300": "€1.650–€5.300",
  "€825~€10,300": "€825–€10.300",
  "€200~€1,100": "€200–€1.100",
  "€150~€1,000": "€150–€1.000",
  "$2,000~$150,000": "$2.000–$150.000",
  "$25,000~$200,000": "$25.000–$200.000",
  "$25,000~$150,000": "$25.000–$150.000",
  "$15,000~$200,000": "$15.000–$200.000",
  "$10,400~$50,500": "$10.400–$50.500",
  "$300~$250,000": "$300–$250.000",
  "$300~$3,000": "$300–$3.000",
  "$330~$7,500": "$330–$7.500",
  "USD 100~1,000": "USD 100–1.000",
  "£150~£1,000": "£150–£1.000",
  "TWD 3,000~800,000": "TWD 3.000–800.000",
  "TWD 3,300~1,500,000": "TWD 3.300–1.500.000",
  "NT$200~NT$150,000": "NT$200–NT$150.000",
  "₱11,000~₱682,500": "₱11.000–₱682.500",
  "₱9,000~₱300,000": "₱9.000–₱300.000",
  "₱3,500~₱500,000": "₱3.500–₱500.000",
  "₫2,300,000~₫152,000,000": "₫2.300.000–₫152.000.000",
  "¥2,000~¥300,000": "¥2.000–¥300.000",
  "¥3,000~¥200,000": "¥3.000–¥200.000",
  "R$500~R$100,000": "R$500–R$100.000",
  "R$500~R$25,000": "R$500–R$25.000",
  "AUD $1,150~$5,000": "AUD 1.150–5.000",
  "€400~": "ab €400",
  "€1,100~": "ab €1.100",
  // DACH 대회 (2026-08-10 추가) — 쉼표를 그대로 두면 "1유로 10"으로 읽힌다
  "€1,100": "€1.100",
  "€40~€3,000": "€40–€3.000",
  "₩350K~₩5M": "350 Tsd. – 5 Mio. KRW",
  "공식 미기재": "Nicht veröffentlicht",
  "미발표": "Noch offen",
  "다양": "Je nach Event",
  "무료": "Kostenlos",
  "초대권 전용": "Nur mit Einladung",
  "초대권 전용 (현금 바이인 없음)": "Nur mit Einladung (kein Buy-in in bar)",
  "메인 ₩150만": "Main Event 1,5 Mio. KRW",
  "메인 ₩220만": "Main Event 2,2 Mio. KRW",
  "메인 ₩230만": "Main Event 2,3 Mio. KRW",
  "메인 ₩250만": "Main Event 2,5 Mio. KRW",
  "메인 ₩270만": "Main Event 2,7 Mio. KRW",
  "₩30만~₩800만": "300 Tsd. – 8 Mio. KRW",
  "₩90만~": "ab 900 Tsd. KRW",
  "~₩700만 (하이롤러)": "bis 7 Mio. KRW (High Roller)",
  "€5,300 (메인)": "€5.300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll – NT$120.000",
  "미정 (공식 미기재)": "Offen (nicht veröffentlicht)",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (betrieben von King's Casino Prague)",
  "(ME 파이널 8/3~5)": "(Finaltisch 3.–5.8.)",
  "2026.12 예정 (날짜 미발표)": "Dezember 2026 (Termine offen)",
};

/** CJK 회장명 — 독일어 페이지에서도 라틴 표기가 정답이다(es와 같은 값). */
const VENUE_DE: Record<string, string> = {
  "Red Space 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "REDSPACE 多元商務空間 / Asia Poker Arena": "REDSPACE / Asia Poker Arena",
  "サッポロファクトリーホール": "Sapporo Factory Hall",
  "出島メッセ長崎": "Dejima Messe Nagasaki",
  "ベルサール高田馬場, 新宿区": "Bellesalle Takadanobaba, Shinjuku",
  "堂島リバーフォーラム": "Dojima River Forum",
};

const PAREN_DE: Record<string, string> = {
  "(Fall)": "(Herbst)",
  "(July)": "(Juli)",
  "(August)": "(August)",
  "(November)": "(November)",
  "(December)": "(Dezember)",
  "(Ha Long Bay)": "(Ha-Long-Bucht)",
};

/**
 * de판 대회 설명. 수치는 원문 그대로 — §13은 언어 불변. 표기만 독일식.
 * ⚠ WSOP 2026 상금풀 액수는 **의도적으로 뺐다** — ESPN 집계($85,634,400)와
 *   공식 집계($87,568,080)가 갈린 이력이 있다(WORKLOG 2026-08-06).
 *   확정 전까지 독일어판에 옮겨 적지 않는다. 엔트리 수·브레이슬릿 수는 안전하다.
 */
const SCHEMA_DESC_DE: Record<string, string> = {
  "holdem-masters-7":
    "Präsentiert von WPL, ausgerichtet von WeLive mit YAJASU. 1,5 Mrd. KRW garantiert; Teilnahme nur mit Einladungsticket.",
  "wsop-2026":
    "Die größte Pokerserie der Welt. 100 Bracelets vom 26. Mai bis 15. Juli; das Main Event kam auf 9.208 Entries, der Finaltisch lief vom 3. bis 5. August auf ESPN.",
  "kpc-king-july":
    "17-tägiges Festival im LES A Casino auf der Insel Jeju. 2 Mrd. KRW über die Serie garantiert, 1,1 Mrd. KRW im Main Event des King Poker Cup.",
  "apt-incheon":
    "Incheon-Stop 2026 des Asian Poker Tour, der größten Tour Asiens. In der Paradise City, mit über 4 Mrd. KRW Gesamtgarantie und 1,5 Mrd. KRW im Main Event.",
  "holdem-masters-8":
    "Achte Auflage der Holdem Masters und bislang die größte der Serie: 2 Mrd. KRW garantiert, davon 1,8 Mrd. KRW im Main Event.",
  "appt-korea":
    "Korea-Stop 2026 der PokerStars APPT in der Paradise City Incheon, mit 1 Mrd. KRW Garantie im Main Event.",
  "triton-jeju-2":
    "Zweite Triton Super High Roller Series des Jahres auf Jeju: 14 High-Roller-Turniere mit Buy-ins von $15.000 bis $200.000.",
  "apt-jeju-fall":
    "Herbst-Stop 2026 des Asian Poker Tour auf Jeju: 136 Events mit 2,2 Mrd. KRW Garantie im Main Event.",
  "wpt-seoul":
    "Erstes Event des World Poker Tour im INSPIRE Entertainment Resort: 46 Events mit 1 Mrd. KRW Garantie im Main Event.",
  "appt-manila":
    "Manila-Stop 2026 der PokerStars APPT im Okada Manila, mit ₱132 Mio. Gesamtgarantie.",
};

/** 월 배지 de — "Mai–Aug." (독일어 월 축약은 마침표를 쓴다) */
const MONTH_DE = ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."];

/** 월 배지 es — "may–ago" */
const MONTH_ES = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];

/* ────────────────────────────────────────────────────────────
   대회 카드의 note(★ 배지).

   ko 보드는 이걸 처음부터 띄웠지만 로케일 보드는 못 띄웠다.
   56건이 전부 한국어여서, 띄우면 한글이 그대로 새기 때문이다.
   그런데 여기 든 정보(GTD 보증금·엔트리 수·메인이벤트 날짜·이전 사실)가
   카드에서 제일 쓸모 있는 부분이라, 5개 언어를 채워 넣었다.

   ★ 값이 아니라 **대회 id**를 키로 쓴다.
     한국어 원문을 키로 쓰면 tournaments.ts에서 note를 한 글자만 고쳐도
     조용히 매칭이 깨져 한글이 새어 나간다. id 기준이면 못 찾을 때
     undefined가 되고, 보드는 배지를 아예 안 그린다(한글 누수 0).
   ★ 수치는 §13대로 언어 불변. 단위 표기만 현지식으로 옮긴다
     (15억 → ₩1.5bn / 15億ウォン / 15亿韩元 / 1.500 millones de KRW).
   ──────────────────────────────────────────────────────────── */
const NOTE_EN: Record<string, string> = {
  // 2026-09-03 M-082 ② 추가 13건
  "hpt-5": "₩1.6B total prize · online satellites on Hangame Royal Hold'em → live Main Event (Day 1 Sep 11–12 · Day 2 Sep 13) · open to Korean nationals",
  "apl-seoul-winter-circuit-1": "Circuit I ₩400,000,000 GTD · APL Winter Series ₩2,300,000,000 GTD total · Seoul returns after two years",
  "wpt-bestbet-scramble": "Main Event $5,000 / $1,000,000 GTD",
  "wpt-prime-lodge": "Main Event $1,100 / $1,000,000 GTD",
  "wpt-prime-cyprus": "Main Event $1,100 / $1,000,000 GTD",
  "wpt-bay-101": "Main Event $5,300 · Shooting Star bounty format",
  "wpt-venetian-fall": "Main Event $5,000 / $2,000,000 GTD",
  "wpt-prime-cambodia-2027": "Main Event $1,100 / $500,000 GTD · opening stop of WPT Season 25",
  "wpt-cambodia-2027": "Main Event $3,500 / $1,000,000 GTD",
  "manila-megastack-warmup": "₱5,300 Megastack Direct Qualifier on Nov 26 · ₱450K GTD (10 seats)",
  "manila-december-special": "Subject to regulatory approval · details TBA",
  "manila-super-series-25": "Main Event ₱18,500 / ₱10M GTD · series ₱22M+ GTD",
  "manila-megastack-26": "Main Event ₱45,000 / ₱20M GTD · series ₱52M+ GTD",
  "manila-megastack-25": "Main Event ₱45,000 / ₱20M GTD · series ₱37.6M+ GTD",
  "kpc-jeju": "KPC x LPT Series and the King Poker Series running together",
  "aspt-korea": "90+ tournaments · Main Event Day 1A buy-in ₩1,500,000",
  "apt-jeju-classic": "Largest international series ever held in Korea — 1,718 entries, past the previous 1,693",
  "ept-paris": "Main Event €5,300 (Feb 23 – Mar 1)",
  "triton-jeju-1": "ONE Mar 5–15 + Super High Roller Series Mar 15 – Apr 1 · SHRS title sponsor Jupiter Exchange",
  "wsope": "Moved from King's Resort in Rozvadov to the Hilton in Prague · 15 bracelets",
  "apt-taipei": "Main #54 TWD 55,000 / TWD 70,000,000 GTD · the largest non-Championship festival in the tour's 20-year history (26,009 entries)",
  /* 2026-08-31 대만 트랙 보강분 — 값은 각 주최사 페이지 원문(docs/tournament-spine.md §3-3) */
  "gop-taipei-1": "95 events · NT$42,000,000 series guarantee — the opener of Taiwan's 2026 season",
  "ps-championship-3-taipei": "102 events · NT$93,700,000 total prize pool · Main Event won by Ki Young Kim for NT$3,010,000",
  "zsop-horse-awakens": "NT$60,000,000 series guarantee — the first ZSOP festival of 2026",
  "apl-taipei": "NT$50,000,000 series guarantee · an overseas Day 1 ran separately on Mar 28",
  "wpg-taiwan": "58 events · TWD 24,000,000 series guarantee — run by WPG Asia with CTP",
  "zsop-final-horse": "NT$23,456,789 series guarantee · Main Event final day Sep 14",
  "ept-montecarlo": "Main Event €5,300 (May 4–10) · a €250,000 Super High Roller on the schedule",
  "triton-montenegro": "$200K Invitational prize pool $27.4M · Main Event won by Danny Tang for $3,522,000",
  "gop-incheon-1": "₩700M guaranteed on the Main Event — not the series total",
  "holdem-masters-7": "₩1.5bn GTD · Challengers final Aug 1 · Champions final Aug 2",
  "wsop-2026": "The 100 bracelets finished Jul 15 — only the Main Event final table is left, Aug 3–5 (ESPN)",
  "kpc-king-july": "17-day festival · ₩2bn GTD in total · K Poker Cup Jul 25 – Aug 4 → King Poker Cup from Aug 3 (Main ₩1.1bn GTD)",
  "apt-incheon": "Over ₩4bn guaranteed · Main Event Aug 9–15 (₩1.5bn GTD) · 9 APTC seats",
  "ept-barcelona": "Dual festival — PokerStars Open ME €1,650 (Aug 16–22) → EPT ME €5,300 (Aug 22–29)",
  "gop-manila": "Series guarantee ₱60,000,000 · Main Event ₱30M GTD",
  "holdem-masters-8": "₩2bn GTD, the largest yet · Main Event ₩1.8bn plus five NLH deepstacks",
  "appt-korea": "Main Event Sep 10–14 — ₩1.8M buy-in · ₩1bn GTD",
  "triton-jeju-2": "14 high rollers · no satellites, referral only · $200K Invitational Sep 12–14",
  "apt-jeju-fall": "136 events · Main Event ₩2.2bn GTD · 12 APTC seats",
  "gop-incheon-2": "WPT Seoul runs on Yeongjong Island at the same time, at a different venue",
  "wpt-seoul": "46 events · Main Nov 5–9 (₩1.75M, ₩1bn GTD) · a new 70-table poker room",
  "apt-championship": "210 trophy events · Main #14 TWD 311.9K / USD 5,000,000 GTD (≈TWD 155M, page conversion) (from Nov 23) · Nov 12 is industry-only; general entry opens Nov 13",
  "wsop-paradise": "Moved from Atlantis to Baha Mar · detailed schedule not published yet",
  "ept-prague": "Dual festival — PokerStars Open ME €1,100 (Dec 2–7) → EPT ME €5,300 (Dec 7–13) · Cup €825 · HR €10,300",
  "jopt-fukuoka-1": "JOPT's first ever Fukuoka stop · Main Event ¥15,000,000 GTD",
  "jopt-tokyo-2027-1": "Runs over new year — the 2027 season opener",
  "ajpc-2026": "Free from the online qualifiers through to the final — winner gets a 2027 WSOP Main Event seat",
  "nippon-series-go-nagasaki-2026": "19 events · Main Event ¥20,000 (+¥1,000), ¥2,500,000 prize · the regional arm of NIPPON SERIES",
  "appt-manila": "Over ₱132M guaranteed · Main Event Aug 6–10 (₱80,000 / ₱60M GTD)",
  "appt-manila-championship": "APPT season finale · ₱116.75M guaranteed · Main Oct 15–19 (₱165,000 / ₱60M GTD)",
  "usop-vietnam-2": "90+ events · Main Event Sep 5–9 (₫30,000,000 / ₫30 Billion GTD)",
  "wpt-australia": "36 events · Prime Championship AUD $1,500 + Championship AUD $5,000",
  "triton-shrs-cyprus": "Runs straight after Triton ONE — the season's final stop",
  "tmt-20": "Main Event 9,094 entries, the biggest in TMT history · prize pool NTD 66,786,336",
  "ps-championship-4-taipei": "104 events · over NTD 39,000,000 guaranteed · Main NTD 15,000,000 GTD",
  "tmt-championship": "NTD 30,000,000 GTD — the organizer does not state which event it covers",
  "ola-poker-tour-taipei": "The official listing still carries 2025 in the name, but the dates are 2026",
  "merit-noir": "Merit's first NOIR series · over $6,000,000 guaranteed · Main $5,500 (Aug 2–6, $3M GTD)",
  "merit-onyx-aug": "Main Event $25,500 / $5M GTD · Premiere $10,400 / $5M GTD",
  "wsopc-tallinn": "12 ring events · Main €1,500 / €1M GTD",
  "wsopc-canada-super": "Super Circuit — a separate brand from the regular Circuit",
  "wsopc-mexico": "12 ring events · Main $1,700, hosted by Big Bola Casinos",
  "wsopc-liechtenstein": "The second of two stops here this year",
  "wsopc-playground-nov": "Third stop of the year, after March and August",
  "pp-london-jul": "21 events",
  "pp-glasgow": "Main Event £500 (£445+£55) / £100,000 GTD",
  "pp-cork": "Main €500 / €100,000 GTD · the tour's only Irish stop",
  "pp-london-dec": "Final stop of the season",
  "bsop-winter": "Main Event 1,315 entries · prize pool over R$5.1M",
  "bsop-floripa": "26 tournaments, satellites excluded",
  "bsop-millions": "Billed by the organizers as the largest poker event in Latin America",
  "cap-5-santarosa": "Main Event USD 500",
  "cap-8-rosario": "Season finale",
  "maryland-state": "16 trophy events · over $1,000,000 guaranteed · Main $500K GTD",
  "bpc-megastack": "Main Event €400 / €300,000 GTD · Mini ME €200 · High Roller €1,100",
  "ps-open-aix": "Main Event €1,100 / €1,000,000 GTD",
  "wpt-world-championship": "2026 dates not announced — the venue's own poker page (Wynn) does not mention WPT either",
};

const NOTE_JA: Record<string, string> = {
  "kpc-jeju": "KPC x LPTシリーズとKing Poker Seriesの合同開催",
  "aspt-korea": "90以上のトーナメント · メインイベントDay 1Aのバイインは150万ウォン",
  "apt-jeju-classic": "韓国開催の国際大会として過去最大 — 1,718エントリーで従来の1,693を更新",
  "ept-paris": "メインイベント€5,300（2/23〜3/1）",
  "triton-jeju-1": "ONE 3/5〜15＋Super High Roller Series 3/15〜4/1 · SHRSのタイトルスポンサーはJupiter Exchange",
  "wsope": "ロズバドフのKing's Resortからプラハのヒルトンへ移転 · ブレスレット15個",
  "apt-taipei": "メイン#54 TWD 55,000／TWD 70,000,000 GTD · ツアー20年の歴史で最大の非Championshipフェスティバル（26,009エントリー）",
  "ept-montecarlo": "メインイベント€5,300（5/4〜10）· €250,000のスーパーハイローラーを編成",
  "triton-montenegro": "$200K Invitationalの賞金総額$27.4M · メインイベントはDanny Tangが優勝し$3,522,000",
  "gop-incheon-1": "メインイベントの保証額7億ウォン（シリーズ総額ではない）",
  "holdem-masters-7": "総額15億ウォンGTD · チャレンジャーズ決勝8/1 · チャンピオンズ決勝8/2",
  "wsop-2026": "ブレスレット100個は7/15で終了 — 残るはメインイベントのファイナルテーブルのみ、8/3〜5（ESPN）",
  "kpc-king-july": "17日間のフェスティバル · 総額20億ウォンGTD · 7/25〜8/4がK Poker Cup → 8/3からKing Poker Cup（メイン11億ウォンGTD）",
  "apt-incheon": "総額40億ウォン超保証 · メインイベント8/9〜15（15億ウォンGTD）· APTCシート9席",
  "ept-barcelona": "デュアルフェスティバル — PokerStars Open ME €1,650（8/16〜22）→ EPT ME €5,300（8/22〜29）",
  "gop-manila": "シリーズ保証₱60,000,000 · メインイベント₱30M GTD",
  "holdem-masters-8": "総額20億ウォンGTDでシリーズ史上最大 · メインイベント18億ウォン＋NLHディープスタック5種",
  "appt-korea": "メインイベント9/10〜14 — バイイン180万ウォン · 10億ウォンGTD",
  "triton-jeju-2": "ハイローラー14種 · サテライトなし（推薦制）· $200K Invitationalは9/12〜14",
  "apt-jeju-fall": "136イベント · メインイベント22億ウォンGTD · APTCシート12席",
  "gop-incheon-2": "同時期に永宗島でWPT Seoulも開催（会場は別）",
  "wpt-seoul": "46イベント · メイン11/5〜9（175万ウォン、10億ウォンGTD）· 70卓の新設ポーカールーム",
  "apt-championship": "トロフィーイベント210種 · メイン#14 TWD 311.9K／USD 5,000,000 GTD（約TWD 155M・ページ換算）（11/23〜）· 11/12は業界関係者専用で、一般参加は11/13から",
  "wsop-paradise": "AtlantisからBaha Marへ移転 · 詳細日程は未発表",
  "ept-prague": "デュアルフェスティバル — PokerStars Open ME €1,100（12/2〜7）→ EPT ME €5,300（12/7〜13）· Cup €825 · HR €10,300",
  "jopt-fukuoka-1": "JOPT史上初の福岡開催 · メインイベント¥15,000,000 GTD",
  "jopt-tokyo-2027-1": "年末年始の開催 — 2027シーズンの開幕戦",
  "ajpc-2026": "オンライン予選から決勝まで参加費無料 · 優勝者に2027年WSOPメインの出場権",
  "nippon-series-go-nagasaki-2026": "19トーナメント · メインイベント¥20,000（+¥1,000）· プライズ2,500,000",
  "appt-manila": "総額₱132M超保証 · メインイベント8/6〜10（₱80,000／₱60M GTD）",
  "appt-manila-championship": "APPTシーズンのフィナーレ · 総額₱116.75M保証 · メイン10/15〜19（₱165,000／₱60M GTD）",
  "usop-vietnam-2": "90以上のイベント · メインイベント9/5〜9（₫30,000,000／₫30 Billion GTD）",
  "wpt-australia": "36イベント · Prime Championship AUD $1,500＋Championship AUD $5,000",
  "triton-shrs-cyprus": "Triton ONE終了直後に連続開催 — シーズン最終ストップ",
  "tmt-20": "メインイベント9,094エントリーでTMT史上最多 · 賞金総額NTD 66,786,336",
  "ps-championship-4-taipei": "104イベント · 総額NTD 39,000,000超保証 · メインNTD 15,000,000 GTD",
  "tmt-championship": "NTD 30,000,000 GTD（どのイベントに紐づくかは公式に記載なし）",
  "ola-poker-tour-taipei": "公式一覧の名称は2025年のままだが、日程は2026年",
  "merit-noir": "Merit初のNOIRシリーズ · 総額$6,000,000超保証 · メイン$5,500（8/2〜6、$3M GTD）",
  "merit-onyx-aug": "メインイベント$25,500／$5M GTD · Premiere $10,400／$5M GTD",
  "wsopc-tallinn": "リングイベント12種 · メイン€1,500／€1M GTD",
  "wsopc-canada-super": "スーパーサーキット — 通常のサーキットとは別ブランド",
  "wsopc-mexico": "リングイベント12種 · メイン$1,700（Big Bola Casinos主催）",
  "wsopc-liechtenstein": "年2回開催のうち2回目",
  "wsopc-playground-nov": "3月・8月に続く年3回目",
  "pp-london-jul": "21イベント",
  "pp-glasgow": "メインイベント£500（£445＋£55）／£100,000 GTD",
  "pp-cork": "メイン€500／€100,000 GTD · ツアー唯一のアイルランド開催",
  "pp-london-dec": "シーズン最終ストップ",
  "bsop-winter": "メインイベント1,315エントリー · 賞金総額はR$5.1M超",
  "bsop-floripa": "26トーナメント（サテライトを除く）",
  "bsop-millions": "主催者いわく中南米最大のポーカーイベント",
  "cap-5-santarosa": "メインイベントUSD 500",
  "cap-8-rosario": "シーズン最終戦",
  "maryland-state": "トロフィーイベント16種 · 総額$1,000,000超保証 · メイン$500K GTD",
  "bpc-megastack": "メインイベント€400／€300,000 GTD · Mini ME €200 · High Roller €1,100",
  "ps-open-aix": "メインイベント€1,100／€1,000,000 GTD",
  "wpt-world-championship": "2026年の日程は未発表 — 会場（Wynn）の公式ポーカーページにもWPTの記載がない",
};

const NOTE_ZH: Record<string, string> = {
  "kpc-jeju": "KPC x LPT系列赛与King Poker系列赛联合举办",
  "aspt-korea": "90多场锦标赛 · 主赛事Day 1A买入150万韩元",
  "apt-jeju-classic": "韩国举办的国际赛事中规模最大——1,718人次，刷新此前的1,693",
  "ept-paris": "主赛事€5,300（2月23日〜3月1日）",
  "triton-jeju-1": "ONE 3月5〜15日＋Super High Roller Series 3月15日〜4月1日 · SHRS冠名赞助商为Jupiter Exchange",
  "wsope": "从罗兹瓦多夫的King's Resort迁至布拉格希尔顿 · 15条金手链",
  "apt-taipei": "主赛#54 TWD 55,000／TWD 70,000,000 GTD · 该巡回赛20年来最大的非Championship系列赛（26,009人次）",
  "ept-montecarlo": "主赛事€5,300（5月4〜10日）· 编排了€250,000超级豪客赛",
  "triton-montenegro": "$200K Invitational奖池$27.4M · 主赛事由Danny Tang夺冠，奖金$3,522,000",
  "gop-incheon-1": "主赛事保底7亿韩元（并非系列赛总额）",
  "holdem-masters-7": "总奖金15亿韩元GTD · 挑战者组决赛8月1日 · 冠军组决赛8月2日",
  "wsop-2026": "100条金手链已于7月15日全部产生——只剩主赛事最终桌，8月3〜5日（ESPN）",
  "kpc-king-july": "为期17天的赛事节 · 共20亿韩元GTD · 7月25日〜8月4日为K Poker Cup → 8月3日起为King Poker Cup（主赛11亿韩元GTD）",
  "apt-incheon": "总保底超40亿韩元 · 主赛事8月9〜15日（15亿韩元GTD）· 9个APTC席位",
  "ept-barcelona": "双赛事节——PokerStars Open主赛€1,650（8月16〜22日）→ EPT主赛€5,300（8月22〜29日）",
  "gop-manila": "系列赛保底₱60,000,000 · 主赛事₱30M GTD",
  "holdem-masters-8": "总奖金20亿韩元GTD，创系列赛新高 · 主赛事18亿韩元＋5场NLH深筹",
  "appt-korea": "主赛事9月10〜14日——买入180万韩元 · 10亿韩元GTD",
  "triton-jeju-2": "14场豪客赛 · 无卫星赛（推荐制）· $200K Invitational为9月12〜14日",
  "apt-jeju-fall": "136场赛事 · 主赛事22亿韩元GTD · 12个APTC席位",
  "gop-incheon-2": "同期在永宗岛还有WPT Seoul（场馆不同）",
  "wpt-seoul": "46场赛事 · 主赛11月5〜9日（175万韩元，10亿韩元GTD）· 新建70桌扑克室",
  "apt-championship": "210场奖杯赛事 · 主赛#14 TWD 311.9K／USD 5,000,000 GTD（约TWD 155M·页面换算）（11月23日起）· 11月12日仅限业内人士，普通玩家自11月13日起",
  "wsop-paradise": "从Atlantis迁至Baha Mar · 详细日程尚未公布",
  "ept-prague": "双赛事节——PokerStars Open主赛€1,100（12月2〜7日）→ EPT主赛€5,300（12月7〜13日）· Cup €825 · HR €10,300",
  "jopt-fukuoka-1": "JOPT史上首次在福冈举办 · 主赛事¥15,000,000 GTD",
  "jopt-tokyo-2027-1": "跨年举办——2027赛季揭幕战",
  "appt-manila": "总保底超₱132M · 主赛事8月6〜10日（₱80,000／₱60M GTD）",
  "appt-manila-championship": "APPT赛季收官站 · 总保底₱116.75M · 主赛10月15〜19日（₱165,000／₱60M GTD）",
  "usop-vietnam-2": "90多场赛事 · 主赛事9月5〜9日（₫30,000,000／₫30 Billion GTD）",
  "wpt-australia": "36场赛事 · Prime Championship AUD $1,500＋Championship AUD $5,000",
  "triton-shrs-cyprus": "紧接Triton ONE结束后连续举办——赛季最后一站",
  "tmt-20": "主赛事9,094人次，创TMT历史新高 · 奖池NTD 66,786,336",
  "ps-championship-4-taipei": "104场赛事 · 总保底超NTD 39,000,000 · 主赛NTD 15,000,000 GTD",
  "tmt-championship": "NTD 30,000,000 GTD（对应哪场赛事官方未注明）",
  "ola-poker-tour-taipei": "官方列表的名称仍写作2025年，但日程是2026年",
  "merit-noir": "Merit首个NOIR系列赛 · 总保底超$6,000,000 · 主赛$5,500（8月2〜6日，$3M GTD）",
  "merit-onyx-aug": "主赛事$25,500／$5M GTD · Premiere $10,400／$5M GTD",
  "wsopc-tallinn": "12场戒指赛 · 主赛€1,500／€1M GTD",
  "wsopc-canada-super": "超级巡回赛——与常规巡回赛是不同品牌",
  "wsopc-mexico": "12场戒指赛 · 主赛$1,700（Big Bola Casinos主办）",
  "wsopc-liechtenstein": "一年两站中的第二站",
  "wsopc-playground-nov": "继3月、8月之后的年内第三站",
  "pp-london-jul": "21场赛事",
  "pp-glasgow": "主赛事£500（£445＋£55）／£100,000 GTD",
  "pp-cork": "主赛€500／€100,000 GTD · 该巡回赛唯一的爱尔兰站",
  "pp-london-dec": "赛季最后一站",
  "bsop-winter": "主赛事1,315人次 · 奖池超过R$5.1M",
  "bsop-floripa": "26场锦标赛（不含卫星赛）",
  "bsop-millions": "主办方称其为拉丁美洲最大的扑克赛事",
  "cap-5-santarosa": "主赛事USD 500",
  "cap-8-rosario": "赛季收官战",
  "maryland-state": "16场奖杯赛事 · 总保底超$1,000,000 · 主赛$500K GTD",
  "bpc-megastack": "主赛事€400／€300,000 GTD · Mini ME €200 · High Roller €1,100",
  "ps-open-aix": "主赛事€1,100／€1,000,000 GTD",
  "wpt-world-championship": "2026年日程未公布——场馆（Wynn）官方扑克页面也没有提到WPT",
};

const NOTE_HANT: Record<string, string> = {
  "kpc-jeju": "KPC x LPT系列賽與King Poker系列賽合辦",
  "aspt-korea": "90多場錦標賽 · 主賽事Day 1A買入150萬韓元",
  "apt-jeju-classic": "韓國舉辦的國際賽事中規模最大——1,718人次，刷新先前的1,693",
  "ept-paris": "主賽事€5,300（2月23日〜3月1日）",
  "triton-jeju-1": "ONE 3月5〜15日＋Super High Roller Series 3月15日〜4月1日 · SHRS冠名贊助商為Jupiter Exchange",
  "wsope": "從羅茲瓦多夫的King's Resort遷至布拉格希爾頓 · 15條金手鍊",
  "apt-taipei": "主賽#54 TWD 55,000／TWD 70,000,000 GTD · 該巡迴賽20年來最大的非Championship系列賽（26,009人次）",
  /* 2026-08-31 대만 트랙 보강분. zh-hant가 이 트랙의 목표 시장이라 6건 전부 채웠다.
     표기는 「台」로 통일 — 검색 실측 표기가 전부 台灣이다(臺灣 아님). */
  "gop-taipei-1": "95場賽事 · 系列賽保底 NT$42,000,000——2026台灣賽季揭幕戰",
  "ps-championship-3-taipei": "102場賽事 · 總獎池 NT$93,700,000 · 主賽事冠軍 Ki Young Kim（NT$3,010,000）",
  "zsop-horse-awakens": "系列賽保底 NT$60,000,000——2026年首場 ZSOP 賽事節",
  "apl-taipei": "系列賽保底 NT$50,000,000 · 3月28日另有一場海外 Day 1",
  "wpg-taiwan": "58場賽事 · 系列賽保底 TWD 24,000,000——由 WPG Asia 與 CTP 合辦",
  "zsop-final-horse": "系列賽保底 NT$23,456,789 · 主賽事最終日為9月14日",
  "ept-montecarlo": "主賽事€5,300（5月4〜10日）· 編排了€250,000超級豪客賽",
  "triton-montenegro": "$200K Invitational獎池$27.4M · 主賽事由Danny Tang奪冠，獎金$3,522,000",
  "gop-incheon-1": "主賽事保底7億韓元（並非系列賽總額）",
  "holdem-masters-7": "總獎金15億韓元GTD · 挑戰者組決賽8月1日 · 冠軍組決賽8月2日",
  "wsop-2026": "100條金手鍊已於7月15日全部產生——只剩主賽事最終桌，8月3〜5日（ESPN）",
  "kpc-king-july": "為期17天的賽事節 · 共20億韓元GTD · 7月25日〜8月4日為K Poker Cup → 8月3日起為King Poker Cup（主賽11億韓元GTD）",
  "apt-incheon": "總保底超過40億韓元 · 主賽事8月9〜15日（15億韓元GTD）· 9個APTC席位",
  "ept-barcelona": "雙賽事節——PokerStars Open主賽€1,650（8月16〜22日）→ EPT主賽€5,300（8月22〜29日）",
  "gop-manila": "系列賽保底₱60,000,000 · 主賽事₱30M GTD",
  "holdem-masters-8": "總獎金20億韓元GTD，創系列賽新高 · 主賽事18億韓元＋5場NLH深籌",
  "appt-korea": "主賽事9月10〜14日——買入180萬韓元 · 10億韓元GTD",
  "triton-jeju-2": "14場豪客賽 · 無衛星賽（推薦制）· $200K Invitational為9月12〜14日",
  "apt-jeju-fall": "136場賽事 · 主賽事22億韓元GTD · 12個APTC席位",
  "gop-incheon-2": "同期在永宗島還有WPT Seoul（場館不同）",
  "wpt-seoul": "46場賽事 · 主賽11月5〜9日（175萬韓元，10億韓元GTD）· 新建70桌撲克室",
  "apt-championship": "210場獎盃賽事 · 主賽#14 TWD 311.9K／USD 5,000,000 GTD（約TWD 155M·頁面換算）（11月23日起）· 11月12日僅限業內人士，一般玩家自11月13日起",
  "wsop-paradise": "從Atlantis遷至Baha Mar · 詳細賽程尚未公布",
  "ept-prague": "雙賽事節——PokerStars Open主賽€1,100（12月2〜7日）→ EPT主賽€5,300（12月7〜13日）· Cup €825 · HR €10,300",
  "jopt-fukuoka-1": "JOPT史上首次在福岡舉辦 · 主賽事¥15,000,000 GTD",
  "jopt-tokyo-2027-1": "跨年舉辦——2027賽季揭幕戰",
  "appt-manila": "總保底超過₱132M · 主賽事8月6〜10日（₱80,000／₱60M GTD）",
  "appt-manila-championship": "APPT賽季最後一站 · 總保底₱116.75M · 主賽10月15〜19日（₱165,000／₱60M GTD）",
  "usop-vietnam-2": "90多場賽事 · 主賽事9月5〜9日（₫30,000,000／₫30 Billion GTD）",
  "wpt-australia": "36場賽事 · Prime Championship AUD $1,500＋Championship AUD $5,000",
  "triton-shrs-cyprus": "緊接Triton ONE結束後連續舉辦——賽季最後一站",
  "tmt-20": "主賽事9,094人次，創TMT歷史新高 · 獎池NTD 66,786,336",
  "ps-championship-4-taipei": "104場賽事 · 總保底超過NTD 39,000,000 · 主賽NTD 15,000,000 GTD",
  "tmt-championship": "NTD 30,000,000 GTD（對應哪一場賽事官方未註明）",
  "ola-poker-tour-taipei": "官方列表的名稱仍寫作2025年，但賽程是2026年",
  "merit-noir": "Merit首個NOIR系列賽 · 總保底超過$6,000,000 · 主賽$5,500（8月2〜6日，$3M GTD）",
  "merit-onyx-aug": "主賽事$25,500／$5M GTD · Premiere $10,400／$5M GTD",
  "wsopc-tallinn": "12場戒指賽 · 主賽€1,500／€1M GTD",
  "wsopc-canada-super": "超級巡迴賽——與常規巡迴賽是不同品牌",
  "wsopc-mexico": "12場戒指賽 · 主賽$1,700（Big Bola Casinos主辦）",
  "wsopc-liechtenstein": "一年兩站中的第二站",
  "wsopc-playground-nov": "繼3月、8月之後的年內第三站",
  "pp-london-jul": "21場賽事",
  "pp-glasgow": "主賽事£500（£445＋£55）／£100,000 GTD",
  "pp-cork": "主賽€500／€100,000 GTD · 該巡迴賽唯一的愛爾蘭站",
  "pp-london-dec": "賽季最後一站",
  "bsop-winter": "主賽事1,315人次 · 獎池超過R$5.1M",
  "bsop-floripa": "26場錦標賽（不含衛星賽）",
  "bsop-millions": "主辦方稱其為拉丁美洲最大的撲克賽事",
  "cap-5-santarosa": "主賽事USD 500",
  "cap-8-rosario": "賽季最終戰",
  "maryland-state": "16場獎盃賽事 · 總保底超過$1,000,000 · 主賽$500K GTD",
  "bpc-megastack": "主賽事€400／€300,000 GTD · Mini ME €200 · High Roller €1,100",
  "ps-open-aix": "主賽事€1,100／€1,000,000 GTD",
  "wpt-world-championship": "2026年賽程未公布——場館（Wynn）官方撲克頁面也沒有提到WPT",
};

/* ★ es는 숫자 표기가 영어와 정반대이고(천 단위 마침표), 멕시코에서 `$`는 페소다.
   USD는 US$로, 큰 금액은 millones로 적는다. 수치 자체는 §13대로 불변. */
const NOTE_ES: Record<string, string> = {
  "kpc-jeju": "La serie KPC x LPT y la King Poker Series se celebran juntas",
  "aspt-korea": "Más de 90 torneos · buy-in del Día 1A del Main Event: 1.500.000 KRW",
  "apt-jeju-classic": "El torneo internacional más grande celebrado en Corea: 1.718 entradas, por encima de las 1.693 anteriores",
  "ept-paris": "Main Event €5.300 (23 feb – 1 mar)",
  "triton-jeju-1": "ONE del 5 al 15 de marzo + Super High Roller Series del 15 de marzo al 1 de abril · patrocinador principal de la SHRS: Jupiter Exchange",
  "wsope": "Se muda del King's Resort de Rozvadov al Hilton de Praga · 15 brazaletes",
  "apt-taipei": "Main #54 TWD 55.000 / TWD 70.000.000 GTD · el festival no-Championship más grande en los 20 años del circuito (26.009 entradas)",
  "ept-montecarlo": "Main Event €5.300 (4–10 may) · con un Super High Roller de €250.000 en el programa",
  "triton-montenegro": "Bolsa del $200K Invitational: US$27,4 millones · Main Event ganado por Danny Tang por US$3.522.000",
  "gop-incheon-1": "700 millones de KRW garantizados en el Main Event, no es el total de la serie",
  "holdem-masters-7": "1.500 millones de KRW GTD · final de Challengers el 1 de ago · final de Champions el 2 de ago",
  "wsop-2026": "Los 100 brazaletes terminaron el 15 de julio: solo queda la mesa final del Main Event, del 3 al 5 de agosto (ESPN)",
  "kpc-king-july": "Festival de 17 días · 2.000 millones de KRW GTD en total · K Poker Cup del 25 de jul al 4 de ago → King Poker Cup desde el 3 de ago (Main 1.100 millones GTD)",
  "apt-incheon": "Más de 4.000 millones de KRW garantizados · Main Event del 9 al 15 de ago (1.500 millones GTD) · 9 asientos para el APTC",
  "ept-barcelona": "Festival doble: ME del PokerStars Open €1.650 (16–22 ago) → ME del EPT €5.300 (22–29 ago)",
  "gop-manila": "Garantía de la serie ₱60.000.000 · Main Event ₱30 millones GTD",
  "holdem-masters-8": "2.000 millones de KRW GTD, el más grande hasta ahora · Main Event 1.800 millones más cinco deepstacks de NLH",
  "appt-korea": "Main Event del 10 al 14 de sep: buy-in de 1,8 M KRW · 1.000 millones GTD",
  "triton-jeju-2": "14 high rollers · sin satélites, solo por recomendación · $200K Invitational del 12 al 14 de sep",
  "apt-jeju-fall": "136 eventos · Main Event 2.200 millones de KRW GTD · 12 asientos para el APTC",
  "gop-incheon-2": "El WPT Seoul se juega a la vez en la isla de Yeongjong, en otra sede",
  "wpt-seoul": "46 eventos · Main del 5 al 9 de nov (1,75 M KRW, 1.000 millones GTD) · sala de poker nueva de 70 mesas",
  "apt-championship": "210 eventos con trofeo · Main #14 TWD 311,9 mil / USD 5.000.000 GTD (≈TWD 155M, conversión de la página) (desde el 23 de nov) · el 12 de nov es solo para la industria; el público entra desde el 13",
  "wsop-paradise": "Se muda del Atlantis al Baha Mar · programa detallado aún sin publicar",
  "ept-prague": "Festival doble: ME del PokerStars Open €1.100 (2–7 dic) → ME del EPT €5.300 (7–13 dic) · Cup €825 · HR €10.300",
  "jopt-fukuoka-1": "Primera parada del JOPT en Fukuoka · Main Event ¥15.000.000 GTD",
  "jopt-tokyo-2027-1": "Se juega entre año nuevo: arranca la temporada 2027",
  "appt-manila": "Más de ₱132 millones garantizados · Main Event del 6 al 10 de ago (₱80.000 / ₱60 millones GTD)",
  "appt-manila-championship": "Cierre de la temporada del APPT · ₱116,75 millones garantizados · Main del 15 al 19 de oct (₱165.000 / ₱60 millones GTD)",
  "usop-vietnam-2": "Más de 90 eventos · Main Event del 5 al 9 de sep (₫30.000.000 / ₫30 mil millones GTD)",
  "wpt-australia": "36 eventos · Prime Championship AUD 1.500 + Championship AUD 5.000",
  "triton-shrs-cyprus": "Arranca justo al terminar el Triton ONE: última parada de la temporada",
  "tmt-20": "Main Event con 9.094 entradas, récord del TMT · bolsa de NTD 66.786.336",
  "ps-championship-4-taipei": "104 eventos · más de NTD 39.000.000 garantizados · Main NTD 15.000.000 GTD",
  "tmt-championship": "NTD 30.000.000 GTD: el organizador no precisa a qué evento corresponde",
  "ola-poker-tour-taipei": "El listado oficial todavía dice 2025 en el nombre, pero las fechas son de 2026",
  "merit-noir": "Primera serie NOIR de Merit · más de US$6.000.000 garantizados · Main US$5.500 (2–6 ago, US$3 millones GTD)",
  "merit-onyx-aug": "Main Event US$25.500 / US$5 millones GTD · Premiere US$10.400 / US$5 millones GTD",
  "wsopc-tallinn": "12 eventos de anillo · Main €1.500 / €1 millón GTD",
  "wsopc-canada-super": "Super Circuit: es una marca distinta del Circuit normal",
  "wsopc-mexico": "12 eventos de anillo · Main US$1.700, organizado por Big Bola Casinos",
  "wsopc-liechtenstein": "Segunda de las dos paradas del año aquí",
  "wsopc-playground-nov": "Tercera parada del año, después de marzo y agosto",
  "pp-london-jul": "21 eventos",
  "pp-glasgow": "Main Event £500 (£445+£55) / £100.000 GTD",
  "pp-cork": "Main €500 / €100.000 GTD · única parada del circuito en Irlanda",
  "pp-london-dec": "Última parada de la temporada",
  "bsop-winter": "Main Event con 1.315 entradas · bolsa superior a R$5,1 millones",
  "bsop-floripa": "26 torneos, sin contar satélites",
  "bsop-millions": "La organización lo presenta como el evento de poker más grande de América Latina",
  "cap-5-santarosa": "Main Event USD 500",
  "cap-8-rosario": "Cierre de la temporada",
  "maryland-state": "16 eventos con trofeo · más de US$1.000.000 garantizados · Main US$500 mil GTD",
  "bpc-megastack": "Main Event €400 / €300.000 GTD · Mini ME €200 · High Roller €1.100",
  "ps-open-aix": "Main Event €1.100 / €1.000.000 GTD",
  "wpt-world-championship": "Fechas de 2026 sin anunciar: la propia página de poker del Wynn tampoco menciona el WPT",
};

/**
 * de 배지 — 비워 둔다. `localizedNote`가 undefined면 보드가 배지를 아예 안 그린다.
 * ⚠ 한국어·영어로 폴백시키지 말 것(독일어 페이지에 다른 언어가 섞인다).
 *   독일 독자에게 의미 있는 배지가 생기면 그때 채운다.
 */
const NOTE_DE: Record<string, string> = {};

const NOTES: Record<BoardLocale, Record<string, string>> = {
  en: NOTE_EN, ja: NOTE_JA, zh: NOTE_ZH, "zh-hant": NOTE_HANT, es: NOTE_ES, de: NOTE_DE,
};

/** 없으면 undefined — 보드가 배지를 아예 안 그린다(한국어 폴백 금지) */
export function localizedNote(t: Tournament, locale: BoardLocale): string | undefined {
  return NOTES[locale]?.[t.id];
}

export function localizeCity(city: string, locale: BoardLocale): string {
  if (locale === "ja") return CITY_JA[city] ?? city;
  if (locale === "zh") return CITY_ZH[city] ?? city;
  if (locale === "zh-hant") return CITY_HANT[city] ?? city;
  if (locale === "es") return CITY_ES[city] ?? city;
  if (locale === "de") return CITY_DE[city] ?? city;
  return city;
}

/**
 * 독일어 도시명 — 영어 표기와 «다른 것만» 넣는다.
 * ⚠ Hanover는 손대지 않는다: 이 데이터의 Hanover는 미국 메릴랜드이고,
 *   독일 Hannover(n 두 개)와 다른 도시다. 자동 치환하면 미국 대회가 독일에 있는 것처럼 보인다.
 */
const CITY_DE: Record<string, string> = {
  Prague: "Prag",
  Tokyo: "Tokio",
  "Mexico City": "Mexiko-Stadt",
  "Panama City": "Panama-Stadt",
  Seville: "Sevilla",
  Cologne: "Köln",
  Vienna: "Wien",
  Munich: "München",
};

/**
 * 사전에 없는 값이 그대로 통과할 때, 범위 물결표만이라도 로케일 기호로 바꾼다.
 * `$2,000~$150,000` 같은 값은 사전에 넣을 필요가 없는데 `~`만 한국식이었다.
 * 숫자 양옆에 붙은 물결표만 건드린다 — "초대권 전용" 같은 문장은 손대지 않는다.
 */
const RANGE_DASH: Record<BoardLocale, string> = {
  en: "–", es: "–", de: "–", ja: "〜", zh: "〜", "zh-hant": "〜",
};

function localizeRangeTilde(v: string, locale: BoardLocale): string {
  return v.replace(/([\d\w])\s*~\s*([\d$€£¥₩₱₫])/g, `$1${RANGE_DASH[locale]}$2`);
}

/** 데이터 필드 값을 로케일 표기로. 사전에 없으면 원문 그대로(물결표만 정규화) */
export function localizeField(value: string | undefined, locale: BoardLocale): string {
  if (!value) return "";
  const hit =
    locale === "en" ? FIELD_EN[value]
    : locale === "ja" ? VENUE_JA[value] ?? FIELD_JA[value]
    : locale === "zh" ? VENUE_ZH[value] ?? FIELD_ZH[value]
    : locale === "zh-hant" ? VENUE_HANT[value] ?? FIELD_HANT[value]
    : locale === "es" ? VENUE_ES[value] ?? FIELD_ES[value]
    : locale === "de" ? VENUE_DE[value] ?? FIELD_DE[value]
    : undefined;
  return hit ?? localizeRangeTilde(value, locale);
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
  if (!t.startDate) return s?.datesTba ?? s?.yearRound ?? "";
  const sm = Number(t.startDate.slice(5, 7));
  const em = t.endDate ? Number(t.endDate.slice(5, 7)) : sm;
  if (locale === "en") {
    return sm === em ? MONTH_EN[sm - 1] : `${MONTH_EN[sm - 1]}–${MONTH_EN[em - 1]}`;
  }
  if (locale === "es") {
    return sm === em ? MONTH_ES[sm - 1] : `${MONTH_ES[sm - 1]}–${MONTH_ES[em - 1]}`;
  }
  if (locale === "de") {
    return sm === em ? MONTH_DE[sm - 1] : `${MONTH_DE[sm - 1]}–${MONTH_DE[em - 1]}`;
  }
  return sm === em ? `${sm}月` : `${sm}〜${em}月`;   // ja·zh·zh-hant 공통
}

/**
 * 일정 문자열.
 *
 * ★ 예전엔 전 로케일이 한국식 `2026.08.09~08.15` 하나를 썼다. 두 가지가 틀렸다.
 *   1) `~`는 한·일에서만 범위 기호다. 영어·스페인어에선 en dash(–)를 쓴다.
 *   2) `2026.05.03`은 D.M.Y가 표준인 스페인어권에서 5월 3일인지 3월 5일인지
 *      알 수 없다. 그래서 en·es는 월 이름을 쓴다.
 *   ja·zh·zh-hant는 점 표기가 현지에서도 통용되므로 유지하고 물결표만 전각으로.
 */
export function localizedDateRange(t: Tournament, locale: BoardLocale): string {
  if (t.dateLabelOverride) return localizeField(t.dateLabelOverride, locale);
  if (!t.startDate || !t.endDate) return "";
  const [sy, sm, sd] = t.startDate.split("-");
  const [ey, em, ed] = t.endDate.split("-");
  const base = formatRange(
    { y: sy, m: Number(sm), d: Number(sd) },
    { y: ey, m: Number(em), d: Number(ed) },
    locale,
  );
  return t.dateNote ? `${base} ${localizeField(t.dateNote, locale)}` : base;
}

type Ymd = { y: string; m: number; d: number };

function formatRange(a: Ymd, b: Ymd, locale: BoardLocale): string {
  if (locale === "en") {
    const M = (x: Ymd) => `${MONTH_EN[x.m - 1]} ${x.d}`;
    if (a.y !== b.y) return `${M(a)}, ${a.y} – ${M(b)}, ${b.y}`;
    if (a.m !== b.m) return `${M(a)} – ${M(b)}, ${a.y}`;
    return `${M(a)}–${b.d}, ${a.y}`;
  }
  if (locale === "es") {
    const M = (x: Ymd) => `${x.d} ${MONTH_ES[x.m - 1]}`;
    if (a.y !== b.y) return `${M(a)} ${a.y} – ${M(b)} ${b.y}`;
    if (a.m !== b.m) return `${M(a)} – ${M(b)} ${a.y}`;
    return `${a.d}–${b.d} ${MONTH_ES[a.m - 1]} ${a.y}`;
  }
  /**
   * de — 독일식 「일. 월. 연도」. 날짜 뒤에는 마침표가 붙는다(3. Mai).
   * 같은 달이면 앞 날짜는 일만 남기고 마침표를 유지한다: `16.–29. Aug. 2026`.
   */
  if (locale === "de") {
    const M = (x: Ymd) => `${x.d}. ${MONTH_DE[x.m - 1]}`;
    if (a.y !== b.y) return `${M(a)} ${a.y} – ${M(b)} ${b.y}`;
    if (a.m !== b.m) return `${M(a)} – ${M(b)} ${a.y}`;
    return `${a.d}.–${b.d}. ${MONTH_DE[a.m - 1]} ${a.y}`;
  }
  // ja·zh·zh-hant — 점 표기 유지, 범위 기호만 전각 물결표
  const p = (n: number) => String(n).padStart(2, "0");
  return a.y === b.y
    ? `${a.y}.${p(a.m)}.${p(a.d)}〜${p(b.m)}.${p(b.d)}`
    : `${a.y}.${p(a.m)}.${p(a.d)}〜${b.y}.${p(b.m)}.${p(b.d)}`;
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
      (locale === "en"
        ? SCHEMA_DESC_EN[t.id]
        : locale === "ja"
          ? SCHEMA_DESC_JA[t.id]
          : locale === "zh"
            ? SCHEMA_DESC_ZH[t.id]
            : locale === "zh-hant"
              ? SCHEMA_DESC_HANT[t.id]
              : locale === "es"
                ? SCHEMA_DESC_ES[t.id]
                : locale === "de"
                  ? SCHEMA_DESC_DE[t.id]
                  : undefined) ??
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
  /**
   * ★CZ가 DE·AT·CH와 같은 줄에 있는 이유: 독일 독자에게 «가장 가까운 큰 대회»가
   * 체코에서 열린다. King's Resort는 자기 소개에 "On the Main Motorway from Munich to
   * Prague"라고 쓸 만큼 독일 시장을 향해 있고, WSOP Europe 2026도 프라하다.
   * 지리적 자국이 아니라 «이 독자가 실제로 갈 곳» 기준으로 정렬한다.
   */
  de: ["DE", "AT", "CH", "CZ"],
};
