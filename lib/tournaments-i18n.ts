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
  const lastItem = Math.max(cut.lastIndexOf(", "), cut.lastIndexOf("، "), cut.lastIndexOf("、"), cut.lastIndexOf("・"));
  const head = text.slice(0, max).search(/(Running now|開催中|进行中|進行中|En curso|Läuft gerade|Sedang berlangsung|Đang diễn ra|Acontecendo agora|Devam eden|अभी जारी|تُقام الآن|진행중)/);
  if (head >= 0 && lastItem > head) return cut.slice(0, lastItem).trimEnd().replace(/[,،、·・]+$/, "") + ".";
  // 🔴 2026-09-29: 진행중 대회가 «한 건도 온전히» 안 들어가면 절을 통째로 뺀다.
  //    쉼표가 없으니 위 분기를 못 타고 공백 자르기로 떨어져 de·es가 «Läuft gerade: 8th Holdem»으로 나가고 있었다.
  if (head >= 0) return cut.slice(0, head).trimEnd();
  const sp = cut.lastIndexOf(" ");
  // 잘린 자리에 남는 나열 부호(", "·"·"、")를 떼어낸다 — "…WSOP 2026,"으로 끝나면 지저분하다
  return (sp > max - 25 ? cut.slice(0, sp) : cut).trimEnd().replace(/[,、·、]+$/, "");
}

export type BoardLocale = "en" | "ja" | "zh" | "zh-hant" | "es" | "de" | "id" | "ms" | "vi" | "pt" | "tr" | "hi" | "ar";

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
      a: "It depends on where you are, and the answer changes a lot between English-speaking countries. US players go through WSOP Online (formerly WSOP.com), which runs the deepest WSOP satellite schedule and operates in Nevada, Michigan, Pennsylvania and New Jersey — the international sites are not an option there. In the UK you have the widest choice anywhere, with 14 UKGC-licensed rooms as of June 2026. In Australia the practical route is live rather than online, which is what WPT Australia at The Star Sydney is for. Check what is available where you are before you plan around a satellite.",
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
      a: "At the WSOP, up to $10,000 per event, yes. The 2026 rulebook adds a 2% fee on credit cards and PayPal and none on debit cards, and caps card payments at $10,000 per transaction measured against the buy-in, so the $10,000 Main Event fits on one card while a $50,000 event does not. Virtual cards aren't accepted, and a debit card may hit your bank's daily limit first.",
    },
  ],

  localHeading: "Before you book",
  localBlocks: [
    {
      title: "Online access is not one answer in English",
      body: "Where you live changes which routes are open to you. The UK has the widest choice of licensed rooms anywhere. In the US the picture is state by state, and the online path runs through WSOP Online (formerly WSOP.com) in Nevada, Michigan, Pennsylvania and New Jersey rather than the international sites. Australian players tend to go live rather than online — which is exactly what WPT Australia at The Star Sydney is for. Canada treats Ontario separately from the rest of the country.",
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
     반대로 인천(본토 전역)은 개인 여행이면 비자가 필요하다 — 단체무비자(지정 여행사·3인 이상·15일)는
     원래 2026-06-30 종료 예정이었으나 12-31까지 연장됐다(2026-09-16 queue Q6-c 정정 · zh FAQ 「那仁川呢」 주석).
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
      // 2026-09-16 queue Q6-c: 「团体免签已于6/30到期」는 틀렸다 — 한국 법무부가 «중국의 대한 무비자 기간과 동일»(=2026-12-31)로 연장
      //   (여행신문 2026-06-29 법무부 답변 축어 · 서울신문 2026-09-15 「정부가 시행 기간을 오는 12월 31일까지 연장했다」). 되돌리지 마라.
      a: "不一样，这里最容易出错。济州的免签个人也能用，仁川的个人游不行：个人游去仁川要办C-3-9签证（单次停留30天，有效期3个月）。经指定旅行社组团、3人以上的团体游免签（停留最多15天）原定2026年6月30日结束，韩国法务部已表示延长到2026年12月31日，与中国对韩免签的期限一致——但个人报名比赛不适用，所以APT仁川、APPT韩国、WPT Seoul、GOP仁川这几场一般都要提前办签证。另外，不走免签、另办团体旅游签证的话，到2026年12月31日之前手续费是免收的。",
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
      title: "济州个人也免签，仁川只有团体免签",
      body: "中国大陆护照到济州岛长期免签、停留30天，个人和团体都行；到仁川、首尔等地，免签只适用于经指定旅行社组团的3人以上团体（停留最多15天）——这项措施原定2026年6月30日结束，已延长到2026年12月31日。个人去打APT、APPT、WPT Seoul（都在仁川）仍要提前办C-3-9签证，别把“团体免签”当成“仁川免签”。不走免签、另办团体旅游签证的话，手续费到2026年12月31日为止也是免收的。",
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
      a: "Las World Series of Poker, del 26 de mayo al 5 de agosto: 100 brazaletes y un Main Event que reunió 9.208 entradas para una bolsa de premios de US$85.634.400, con la mesa final del 3 al 5 de agosto. Un detalle práctico que ahorra dinero en la caja: según el reglamento, con tarjeta de crédito o PayPal la WSOP cobra un 2 % y con débito nada, y el tope de US$10.000 por transacción se mide sobre el buy-in, así que el Main Event sí cabe en un solo cargo.",
    },
    {
      q: "¿Necesito visado para los torneos en Europa?",
      a: "Va a cambiar durante 2026. Se espera que ETIAS entre en funcionamiento en el último trimestre del año, y afecta a todos los pasaportes que hoy entran sin visado: Argentina, Chile, Uruguay, Brasil, Colombia y México, entre otros. Cuesta €20 para las personas de 18 a 70 años, vale 3 años o hasta que caduque el pasaporte, y hay un requisito que conviene comprobar con tiempo: el pasaporte tiene que ser biométrico. Si no lo es, no basta ETIAS y hace falta visado. La primera parada de esta lista que cae dentro de esa ventana es el WSOP Circuit Madrid, del 23 de octubre; la más grande es el EPT Praga de diciembre.",
    },
    {
      q: "¿Se pagan impuestos por los premios?",
      a: "Depende del país y las diferencias son grandes. En México, el 1 % de ISR que suele citarse para premios (artículo 138 de la Ley del ISR) es para sorteos y juegos con apuestas organizados en el país; un premio cobrado en el extranjero conviene revisarlo con tu contador. En España los ingresos por torneos, tanto en vivo como online, son declarables, pero sobre si se pueden compensar las pérdidas hay versiones contradictorias circulando, así que ahí lo honesto es remitirte a la Agencia Tributaria antes que darte un cálculo que puede estar mal. Para Argentina, Colombia, Perú y Chile no tenemos dato verificado.",
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

/* ────────────────────────────────────────────────────────────
   id · ms · vi — 2026-09-29 신설 (사장님 승인 · 회차 1).
   취지 = 자국에 큰 대회가 없어도 «해외 원정 캘린더». 그래서 FAQ·로컬 블록은
   «가장 가까운 원정지»(필리핀·캄보디아·한국·대만)를 축으로 쓴다.

   🔴 사실은 전부 이 보드의 데이터(lib/tournaments.ts) 또는 이미 원문 확인된
      사실 시트에서만 가져왔다 — 한국 카지노 입장 자격은
      docs/tournament-factsheets/2026-10-kr-apl-wpt-gop.md(INSPIRE·Paradise City 원문 축어).
   🔴 합법성·세금·비자는 쓰지 않는다(메모리 legality-ban-scope · 원문 확인 안 됨).
   ★ 검색 형태 (DataForSEO 2026-09-29 · Google Ads 월 볼륨):
     id  «poker tournament» 90 · «turnamen poker» 50 → h1은 현지어, desc에 영어형 병기
     ms  «poker tournament» = «tournament poker» 90 · «kejohanan poker» 없음 → 영어 차용어 그대로
         (ms 블로그·필라 라벨도 «Tournament»)
     vi  «poker tournament» 210 · «giải poker» 70 · «giải đấu poker» 20 → h1은 «giải poker», 제목 폴백에 영어형
   ⚠ 이 규모는 작다. 목적은 헤드텀 순위가 아니라 id·ms·vi 글의 대회 링크가 한국어 보드로 떨어지지 않게 하는 것.
   ──────────────────────────────────────────────────────────── */
const id: BoardStrings = {
  htmlLang: "id",
  ogLocale: "id_ID",

  metaTitle: (next, mmdd) => {
    const hooked = `Turnamen Poker 2026 — ${next} mulai ${mmdd}`;
    return next && hooked.length <= 52 ? hooked : "Jadwal Turnamen Poker 2026";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `Semua turnamen poker live besar 2026 dalam satu tabel: tanggal, buy-in, dan sumber resmi setiap poker tournament. Per ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "Jadwal Turnamen Poker 2026",
  heroLead:
    "Informasi setiap turnamen di daftar ini kami periksa langsung di situs penyelenggara, dan setiap kartu menautkan sumbernya. Status diperbarui otomatis berdasarkan tanggal turnamen. Jadwal bisa berubah — kalau ragu, halaman resmi yang berlaku.",
  asOf: (dot) => `Data per ${dot}`,

  filterAll: "Semua",
  filterUpcoming: "Akan datang",
  filterOngoing: "Sedang berlangsung",
  filterEnded: "Selesai",

  filterAllCountries: "Semua negara",
  // ★ 인도네시아 대회는 이 보드에 없다 — 칩 = 가장 가까운 원정지(HOME_COUNTRY.id).
  homeCountryNames: {
    PH: "Filipina", KH: "Kamboja", VN: "Vietnam", KR: "Korea Selatan", TW: "Taiwan", JP: "Jepang",
  },

  colDates: "Tanggal",
  colBuyin: "Buy-in",
  colVenue: "Lokasi",

  status: { upcoming: "Akan datang", ongoing: "Sedang berlangsung", ended: "Selesai" },
  yearRound: "Sepanjang tahun",
  datesTba: "Tanggal belum diumumkan",
  officialSite: "Situs resmi",
  guideLink: "Panduan lengkap",
  buyinUnlisted: "Belum diumumkan",

  countsLine: (total, countries) => `${total} turnamen · ${countries} negara`,
  sourceNote:
    "Jika halaman penyelenggara sendiri masih menampilkan informasi tahun lalu, kami memilih tidak menautkannya daripada mengirim Anda ke sana.",
  emptyState: "Belum ada turnamen yang cocok dengan filter ini.",
  koLink: "Jadwal versi Korea →",

  faqHeading: "Pertanyaan yang sering diajukan",
  faqs: [
    {
      q: "Turnamen poker besar mana yang paling dekat dari Indonesia?",
      a: "Tidak ada seri internasional di tabel ini yang digelar di Indonesia. Yang paling dekat ada di Asia Tenggara: Manila, tempat Okada Manila menggelar APPT Manila Championship (8–19 Oktober 2026) dan seri Manila Megastack, serta Phnom Penh, tempat WPT Cambodia Championship 2027 berlangsung di NagaWorld (27 Januari–1 Februari 2027). Korea Selatan dan Taiwan punya kalender terpadat di Asia pada papan ini. Pakai filter negara di atas untuk menyaringnya.",
    },
    {
      q: "Apakah pemain asing bisa ikut turnamen di Korea?",
      a: "Untuk seri besar di kasino, pemain asing justru sasarannya. INSPIRE di Incheon menyebut dirinya kasino khusus warga asing, dan Paradise City menulis syarat masuknya: warga asing berusia 19 tahun ke atas yang membawa paspor. Jadi yang Anda bawa adalah paspor asli. Dua pengecualian di papan ini: APL Seoul hanya menerima pemegang tiket kursi (seat), dan Holdem Masters hanya lewat undangan.",
    },
    {
      q: "Apakah semua turnamen di sini bisa diikuti siapa saja?",
      a: "Sebagian besar ya, tetapi tidak semua. Triton Super High Roller Series berbasis rekomendasi — tidak ada satelit, dan uang saja tidak cukup untuk mendapat kursi. Holdem Masters di Korea hanya lewat tiket undangan, tanpa jalur buy-in tunai. APT Championships dibuka dengan satu hari khusus kalangan industri sebelum jadwal publik dimulai. Ada juga event yang hanya menerima tiket, misalnya APL Seoul (hanya tiket kursi/seat) — syarat seperti ini tertulis di kartunya.",
    },
    {
      q: "Berapa biaya buy-in?",
      a: "Rentangnya lebar, dan paling lebar di dalam satu seri yang sama. Main Event tur besar sering bernilai ribuan dolar, sementara seri yang sama punya side event dengan buy-in jauh lebih kecil — karena itu banyak kartu menampilkan rentang, bukan satu angka. Setiap kartu menampilkan buy-in yang diumumkan penyelenggara sendiri. Jika kosong, penyelenggara belum mengumumkannya: kami tidak menebak.",
    },
    {
      q: "Bagaimana cara masuk Main Event besar dengan modal kecil?",
      a: "Lewat satelit. Banyak seri besar menyediakan kualifikasi dengan buy-in jauh lebih kecil dari Main Event. Detailnya ada di jadwal seri itu sendiri, bukan di ikhtisar tahunan seperti papan ini — karena itu setiap kartu di sini langsung menautkan halaman resmi.",
    },
  ],

  localHeading: "Sebelum Anda berangkat",
  localBlocks: [
    {
      title: "Manila: beberapa seri di satu resor",
      body: "Okada Manila di Parañaque menggelar APPT Manila Championship (8–19 Oktober 2026), lalu Manila Megastack 25 (27 November–7 Desember) dan Manila December Special (8–21 Desember). Kalau hanya bisa terbang sekali, di sinilah jadwal paling rapat di Asia Tenggara pada papan ini.",
    },
    {
      title: "Korea dan Taiwan: kalender terpadat di Asia",
      body: "Musim gugur ini Korea punya APT Jeju, GOP Incheon II dan WPT Seoul, sedangkan Taipei punya Taiwan Millions Tournament Championship dan APT Championships. Untuk WPT Seoul (INSPIRE) dan GOP Incheon II (Paradise City), kasinonya ditujukan untuk warga asing pemegang paspor — lihat FAQ di bawah.",
    },
    {
      title: "Buy-in tampil dalam mata uang penyelenggara",
      body: "Angkanya persis seperti yang diumumkan: peso Filipina (₱), dolar Taiwan (NT$), won Korea (₩), dolar AS ($). Kami tidak mengonversinya ke rupiah karena kurs berubah setiap hari — hitung dengan kurs pada hari Anda membayar.",
    },
  ],
};

/**
 * ms — 말레이시아. «tournament»는 영어 차용어 그대로(위 볼륨 메모).
 * ⚠ 겐팅은 이 보드에 없다 — 말레이시아에 큰 시리즈가 있는 것처럼 쓰지 마라.
 */
const ms: BoardStrings = {
  htmlLang: "ms",
  ogLocale: "ms_MY",

  metaTitle: (next, mmdd) => {
    const hooked = `Poker Tournament 2026 — ${next} bermula ${mmdd}`;
    return next && hooked.length <= 52 ? hooked : "Jadual Poker Tournament 2026";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `Semua poker tournament live utama 2026 dalam satu jadual: tarikh, buy-in dan sumber rasmi bagi setiap tournament. Setakat ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "Jadual Poker Tournament 2026",
  heroLead:
    "Maklumat setiap tournament dalam senarai ini kami semak terus di laman penganjur, dan setiap kad memautkan sumber tersebut. Status dikemas kini secara automatik mengikut tarikh tournament. Jadual boleh berubah — jika ragu, halaman rasmi yang menjadi rujukan.",
  asOf: (dot) => `Setakat ${dot}`,

  filterAll: "Semua",
  filterUpcoming: "Akan datang",
  filterOngoing: "Sedang berlangsung",
  filterEnded: "Tamat",

  filterAllCountries: "Semua negara",
  homeCountryNames: {
    PH: "Filipina", KH: "Kemboja", VN: "Vietnam", KR: "Korea Selatan", TW: "Taiwan", JP: "Jepun",
  },

  colDates: "Tarikh",
  colBuyin: "Buy-in",
  colVenue: "Lokasi",

  status: { upcoming: "Akan datang", ongoing: "Sedang berlangsung", ended: "Tamat" },
  yearRound: "Sepanjang tahun",
  datesTba: "Tarikh belum diumumkan",
  officialSite: "Laman rasmi",
  guideLink: "Panduan penuh",
  buyinUnlisted: "Belum diumumkan",

  countsLine: (total, countries) => `${total} tournament · ${countries} negara`,
  sourceNote:
    "Jika halaman penganjur sendiri masih memaparkan maklumat tahun lepas, kami memilih untuk tidak memautkannya daripada menghantar anda ke sana.",
  emptyState: "Tiada tournament yang sepadan dengan penapis ini buat masa ini.",
  koLink: "Jadual versi Korea →",

  faqHeading: "Soalan lazim",
  faqs: [
    {
      q: "Poker tournament besar mana yang paling dekat dari Malaysia?",
      a: "Tiada siri antarabangsa dalam jadual ini yang diadakan di Malaysia. Yang paling dekat berada di Asia Tenggara: Manila, tempat Okada Manila menganjurkan APPT Manila Championship (8–19 Oktober 2026) dan siri Manila Megastack, serta Phnom Penh, tempat WPT Cambodia Championship 2027 berlangsung di NagaWorld (27 Januari–1 Februari 2027). Korea Selatan dan Taiwan mempunyai kalendar paling padat di Asia pada papan ini. Gunakan penapis negara di atas.",
    },
    {
      q: "Bolehkah pemain asing menyertai tournament di Korea?",
      a: "Untuk siri besar di kasino, pemain asing memang sasarannya. INSPIRE di Incheon menggelarkan dirinya kasino khas untuk warga asing, dan Paradise City menulis syarat masuknya: warga asing berumur 19 tahun ke atas yang membawa pasport. Jadi yang anda perlukan ialah pasport asli. Dua pengecualian pada papan ini: APL Seoul hanya menerima pemegang tiket tempat duduk (seat), dan Holdem Masters hanya melalui jemputan.",
    },
    {
      q: "Bolehkah sesiapa sahaja mendaftar untuk semua tournament di sini?",
      a: "Kebanyakannya ya, tetapi bukan semua. Triton Super High Roller Series berasaskan cadangan — tiada satelit, dan wang sahaja tidak cukup untuk mendapat tempat. Holdem Masters di Korea hanya melalui tiket jemputan, tanpa laluan buy-in tunai. APT Championships dibuka dengan satu hari khas untuk kalangan industri sebelum jadual awam bermula. Ada juga event yang hanya menerima tiket, contohnya APL Seoul (hanya tiket tempat duduk/seat) — syarat sebegini tertulis pada kadnya.",
    },
    {
      q: "Berapakah kos buy-in?",
      a: "Julatnya luas, dan paling luas dalam siri yang sama. Main Event jelajah besar selalunya bernilai ribuan dolar, manakala siri yang sama ada side event dengan buy-in jauh lebih kecil — sebab itu banyak kad menunjukkan julat, bukan satu angka. Setiap kad memaparkan buy-in yang diumumkan oleh penganjur sendiri. Jika kosong, penganjur belum mengumumkannya: kami tidak meneka.",
    },
    {
      q: "Bagaimana hendak masuk Main Event besar dengan modal kecil?",
      a: "Melalui satelit. Banyak siri besar menawarkan kelayakan dengan buy-in jauh lebih rendah daripada Main Event. Butirannya ada dalam jadual siri itu sendiri, bukan dalam ringkasan tahunan seperti papan ini — sebab itu setiap kad di sini terus memautkan halaman rasmi.",
    },
  ],

  localHeading: "Sebelum anda berlepas",
  localBlocks: [
    {
      title: "Manila: beberapa siri di satu resort",
      body: "Okada Manila di Parañaque menganjurkan APPT Manila Championship (8–19 Oktober 2026), diikuti Manila Megastack 25 (27 November–7 Disember) dan Manila December Special (8–21 Disember). Jika hanya boleh terbang sekali, di sinilah jadual paling padat di Asia Tenggara pada papan ini.",
    },
    {
      title: "Korea dan Taiwan: kalendar paling padat di Asia",
      body: "Musim luruh ini Korea ada APT Jeju, GOP Incheon II dan WPT Seoul, manakala Taipei ada Taiwan Millions Tournament Championship dan APT Championships. Bagi WPT Seoul (INSPIRE) dan GOP Incheon II (Paradise City), kasinonya dikhaskan untuk warga asing yang memegang pasport — lihat soalan lazim di bawah.",
    },
    {
      title: "Buy-in dipaparkan dalam mata wang penganjur",
      body: "Angkanya tepat seperti yang diumumkan: peso Filipina (₱), dolar Taiwan (NT$), won Korea (₩), dolar AS ($). Kami tidak menukarnya kepada ringgit kerana kadar tukaran berubah setiap hari — kira dengan kadar pada hari anda membayar.",
    },
  ],
};

/**
 * vi — 베트남. 이 보드의 VN 대회는 USOP Vietnam(하롱) 1건뿐이고 09-09에 끝났다.
 * ⚠ 베트남 국민의 카지노 출입 규정은 쓰지 않는다(원문 미확인 · 합법성 축).
 * ⚠ FAQ의 USOP 과거형은 그 행이 보드에 남아 있는 동안만 맞다 — 행을 지우면 여기도 고친다.
 */
const vi: BoardStrings = {
  htmlLang: "vi",
  ogLocale: "vi_VN",

  metaTitle: (next, mmdd) => {
    const hooked = `Giải poker 2026 — ${next} từ ${mmdd}`;
    return next && hooked.length <= 50 ? hooked : "Lịch giải poker 2026 — Poker Tournament";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `Tất cả giải poker live lớn năm 2026 trong một bảng: lịch thi đấu, buy-in và nguồn chính thức của từng poker tournament. Cập nhật ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "Lịch giải poker 2026",
  heroLead:
    "Chúng tôi kiểm tra thông tin từng giải trực tiếp trên trang của nhà tổ chức; mỗi thẻ đều có liên kết đến nguồn đó. Trạng thái tự động cập nhật theo ngày thi đấu. Lịch có thể thay đổi — khi nghi ngờ, trang chính thức luôn là căn cứ.",
  asOf: (dot) => `Cập nhật ${dot}`,

  filterAll: "Tất cả",
  filterUpcoming: "Sắp diễn ra",
  filterOngoing: "Đang diễn ra",
  filterEnded: "Đã kết thúc",

  filterAllCountries: "Tất cả quốc gia",
  homeCountryNames: {
    VN: "Việt Nam", KH: "Campuchia", PH: "Philippines", KR: "Hàn Quốc", TW: "Đài Loan", JP: "Nhật Bản",
  },

  colDates: "Thời gian",
  colBuyin: "Buy-in",
  colVenue: "Địa điểm",

  status: { upcoming: "Sắp diễn ra", ongoing: "Đang diễn ra", ended: "Đã kết thúc" },
  yearRound: "Quanh năm",
  datesTba: "Chưa công bố ngày",
  officialSite: "Trang chính thức",
  guideLink: "Hướng dẫn chi tiết",
  buyinUnlisted: "Chưa công bố",

  countsLine: (total, countries) => `${total} giải · ${countries} quốc gia`,
  sourceNote:
    "Nếu chính trang của nhà tổ chức vẫn còn hiển thị thông tin năm trước, chúng tôi chọn không gắn liên kết thay vì đưa bạn tới đó.",
  emptyState: "Hiện chưa có giải nào khớp với bộ lọc này.",
  koLink: "Lịch bản tiếng Hàn →",

  faqHeading: "Câu hỏi thường gặp",
  faqs: [
    {
      q: "Giải poker lớn nào gần Việt Nam nhất?",
      a: "Giải duy nhất tại Việt Nam trên bảng này là USOP Vietnam ở vịnh Hạ Long (27/8–9/9/2026), đã kết thúc. Gần nhất tiếp theo là Phnom Penh, nơi WPT Cambodia Championship 2027 diễn ra tại NagaWorld (27/1–1/2/2027), và Manila, nơi Okada Manila tổ chức APPT Manila Championship (8–19/10/2026) cùng chuỗi Manila Megastack. Hàn Quốc và Đài Loan có lịch dày nhất châu Á trên bảng này. Dùng bộ lọc quốc gia ở trên để lọc.",
    },
    {
      q: "Người nước ngoài có chơi được giải ở Hàn Quốc không?",
      a: "Với các chuỗi giải lớn trong casino, người nước ngoài chính là đối tượng. INSPIRE ở Incheon tự giới thiệu là casino dành riêng cho người nước ngoài, còn Paradise City ghi rõ điều kiện vào cửa: người nước ngoài từ 19 tuổi trở lên có hộ chiếu. Vì vậy thứ bạn cần mang là hộ chiếu bản gốc. Hai ngoại lệ trên bảng này: APL Seoul chỉ nhận người có vé tham dự (seat), còn Holdem Masters chỉ dành cho khách được mời.",
    },
    {
      q: "Có phải ai cũng đăng ký được mọi giải ở đây?",
      a: "Phần lớn là có, nhưng không phải tất cả. Triton Super High Roller Series hoạt động theo giới thiệu — không có vệ tinh, và chỉ có tiền thì không mua được suất. Holdem Masters của Hàn Quốc chỉ nhận vé mời, không có đường buy-in bằng tiền mặt. APT Championships mở màn bằng một ngày chỉ dành cho người trong ngành trước khi lịch công khai bắt đầu. Cũng có giải chỉ nhận người có vé, ví dụ APL Seoul (chỉ nhận vé tham dự/seat) — điều kiện này được ghi ngay trên thẻ giải.",
    },
    {
      q: "Buy-in tốn bao nhiêu?",
      a: "Biên độ rất rộng, và rộng nhất ngay trong cùng một chuỗi giải. Main Event của một tour lớn thường ở mức hàng nghìn đô la, trong khi cùng chuỗi đó có các side event với buy-in nhỏ hơn nhiều — vì vậy nhiều thẻ hiển thị một khoảng chứ không phải một con số. Mỗi thẻ ghi buy-in do chính nhà tổ chức công bố. Chỗ nào để trống là nhà tổ chức chưa công bố: chúng tôi không ước đoán.",
    },
    {
      q: "Làm sao vào Main Event lớn với số vốn nhỏ?",
      a: "Qua vệ tinh (satellite). Nhiều chuỗi giải lớn có vòng loại với buy-in thấp hơn nhiều so với Main Event. Chi tiết nằm trong lịch của chính chuỗi giải chứ không nằm trong bảng tổng hợp cả năm như trang này — vì vậy mỗi thẻ ở đây dẫn thẳng tới trang chính thức.",
    },
  ],

  localHeading: "Trước khi lên đường",
  localBlocks: [
    {
      title: "Manila: nhiều chuỗi giải trong một khu nghỉ dưỡng",
      body: "Okada Manila ở Parañaque tổ chức APPT Manila Championship (8–19/10/2026), tiếp theo là Manila Megastack 25 (27/11–7/12) và Manila December Special (8–21/12). Nếu chỉ bay được một lần, đây là nơi có lịch dày nhất Đông Nam Á trên bảng này.",
    },
    {
      title: "Hàn Quốc và Đài Loan: lịch dày nhất châu Á",
      body: "Mùa thu này Hàn Quốc có APT Jeju, GOP Incheon II và WPT Seoul, còn Đài Bắc có Taiwan Millions Tournament Championship và APT Championships. Với WPT Seoul (INSPIRE) và GOP Incheon II (Paradise City), casino dành cho người nước ngoài có hộ chiếu — xem phần câu hỏi bên dưới.",
    },
    {
      title: "Buy-in hiển thị theo đơn vị tiền của nhà tổ chức",
      body: "Con số giữ nguyên như được công bố: peso Philippines (₱), đô la Đài Loan (NT$), won Hàn Quốc (₩), đô la Mỹ ($). Chúng tôi không quy đổi sang tiền đồng vì tỷ giá thay đổi mỗi ngày — hãy tính theo tỷ giá vào ngày bạn thanh toán.",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   pt · tr — 2026-09-29 신설 (회차 2 전반 · hi·ar은 다음 실행).
   ★ 검색 형태 (DataForSEO 2026-09-29):
     pt(BR) «torneio de poker» = «torneios de poker» 320 · «calendário/agenda …» 없음
     tr     «poker turnuvası» = «poker turnuvaları» 110 · «poker tournament» 40
   ★ 축: pt = 브라질 BSOP + 아르헨티나 CAP(보드 행) · tr = 북키프로스(Girne·Çatalköy 보드 행).
   🔴 사실은 lib/tournaments.ts 행에서만. 튀르키예·브라질의 합법성·세금은 쓰지 않는다.
   ──────────────────────────────────────────────────────────── */
const pt: BoardStrings = {
  htmlLang: "pt",
  ogLocale: "pt_BR",

  metaTitle: (next, mmdd) => {
    const hooked = `Torneios de poker 2026 — ${next} a partir de ${mmdd}`;
    return next && hooked.length <= 55 ? hooked : "Torneios de poker 2026 — calendário";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `Todos os grandes torneios de poker ao vivo de 2026 em uma tabela: datas, buy-in e a fonte oficial de cada torneio. Atualizado em ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "Torneios de poker 2026 — calendário",
  heroLead:
    "Conferimos as informações de cada torneio desta lista direto no site do organizador, e cada card leva à fonte. O status muda sozinho conforme as datas. Programações mudam — na dúvida, vale sempre a página oficial.",
  asOf: (dot) => `Atualizado em ${dot}`,

  filterAll: "Todos",
  filterUpcoming: "Em breve",
  filterOngoing: "Acontecendo agora",
  filterEnded: "Encerrados",

  filterAllCountries: "Todos os países",
  homeCountryNames: { BR: "Brasil", AR: "Argentina", ES: "Espanha" },

  colDates: "Datas",
  colBuyin: "Buy-in",
  colVenue: "Local",

  status: { upcoming: "Em breve", ongoing: "Acontecendo agora", ended: "Encerrado" },
  yearRound: "O ano todo",
  datesTba: "Datas a confirmar",
  officialSite: "Site oficial",
  guideLink: "Guia completo",
  buyinUnlisted: "Não divulgado",

  countsLine: (total, countries) => `${total} torneios · ${countries} países`,
  sourceNote:
    "Quando a própria página do organizador ainda mostrava as informações do ano anterior, preferimos não colocar o link a mandar você para lá.",
  emptyState: "Nenhum torneio corresponde a esse filtro no momento.",
  koLink: "Calendário em coreano →",

  faqHeading: "Perguntas frequentes",
  faqs: [
    {
      q: "Quais torneios de poker acontecem no Brasil?",
      a: "Nesta tabela, os torneios no Brasil são as etapas do BSOP: o BSOP Winter (21–30 de julho de 2026, WTC Sheraton, São Paulo), o BSOP Floripa (4–8 de setembro, Costão do Santinho), o BSOP Millions (13–28 de novembro, WTC Sheraton, São Paulo) e o BSOP Summer 2027 (22–30 de janeiro de 2027, Sauípe Resorts, Mata de São João). Use o filtro «Brasil» para ver só esses.",
    },
    {
      q: "Qualquer pessoa pode se inscrever em todos os torneios daqui?",
      a: "Na maioria, sim, mas não em todos. A Triton Super High Roller Series funciona por indicação — não há satélites, e só dinheiro não garante vaga. O Holdem Masters, na Coreia, é só com convite, sem buy-in em dinheiro. O APT Championships começa com um dia reservado ao setor antes da programação aberta ao público. E alguns eventos aceitam só tickets, como o APL Seoul (apenas com ticket de vaga/seat) — essas condições aparecem no card.",
    },
    {
      q: "Quanto custa o buy-in?",
      a: "A faixa é ampla, e é mais ampla dentro da mesma série. O Main Event de um grande circuito costuma custar milhares, enquanto a mesma série tem side events com buy-ins bem menores — por isso muitos cards mostram uma faixa, e não um único valor. Cada card mostra o buy-in divulgado pelo próprio organizador, na moeda original. Onde não há valor, o organizador ainda não divulgou: não estimamos.",
    },
    {
      q: "Como entrar em um Main Event grande gastando pouco?",
      a: "Pelos satélites. Muitas séries grandes oferecem classificatórios com buy-in bem menor que o do Main Event. Os detalhes ficam na programação da própria série, não em uma visão anual como esta — por isso cada card leva direto à página oficial.",
    },
  ],

  localHeading: "Antes de viajar",
  localBlocks: [
    {
      title: "BSOP: a próxima parada é São Paulo",
      body: "O BSOP Millions vai de 13 a 28 de novembro de 2026 no WTC Sheraton, em São Paulo, e o BSOP Summer 2027 acontece de 22 a 30 de janeiro de 2027 no Sauípe Resorts, em Mata de São João. O buy-in ainda não tinha sido divulgado quando conferimos — o card mostra assim que sair.",
    },
    {
      title: "Argentina: CAP em Buenos Aires e Rosario",
      body: "O CAP tem a 7ª etapa em Buenos Aires (3–11 de outubro de 2026, Casino Buenos Aires) e a 8ª em Rosario (12–20 de dezembro, City Center Rosario).",
    },
    {
      title: "Buy-in na moeda do organizador",
      body: "Os valores aparecem exatamente como foram divulgados: reais (R$), dólares (USD/$), euros (€), won coreano (₩). Não convertemos para reais porque o câmbio muda todo dia — calcule com a cotação do dia em que for pagar.",
    },
  ],
};

const tr: BoardStrings = {
  htmlLang: "tr",
  ogLocale: "tr_TR",

  metaTitle: (next, mmdd) => {
    // 날짜 뒤 격어미(-da/-de/-ta/-te)는 숫자 발음에 따라 바뀐다 — 어미 없이 콜론으로 붙인다
    const hooked = `Poker turnuvaları 2026 — ${next}: ${mmdd}`;
    return next && hooked.length <= 52 ? hooked : "Poker turnuvaları 2026 — takvim";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `2026'nın büyük canlı poker turnuvaları tek tabloda: tarihler, buy-in ve her turnuvanın resmî kaynağı. Güncelleme ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "Poker turnuvaları 2026 — takvim",
  heroLead:
    "Bu listedeki her turnuvanın bilgisini doğrudan organizatörün sitesinden kontrol ettik; her kart kaynağına bağlanır. Durum, tarihlere göre kendiliğinden güncellenir. Programlar değişebilir — emin değilsen resmî sayfa esastır.",
  asOf: (dot) => `Güncelleme ${dot}`,

  filterAll: "Tümü",
  filterUpcoming: "Yaklaşan",
  filterOngoing: "Devam eden",
  filterEnded: "Sona eren",

  filterAllCountries: "Tüm ülkeler",
  // ★ CY = 이 보드의 CY 행은 전부 북키프로스(Girne·Çatalköy)다. 튀르키예 독자의 실제 목적지.
  homeCountryNames: { CY: "Kıbrıs", CZ: "Çekya", ME: "Karadağ" },

  colDates: "Tarih",
  colBuyin: "Buy-in",
  colVenue: "Yer",

  status: { upcoming: "Yaklaşan", ongoing: "Devam ediyor", ended: "Sona erdi" },
  yearRound: "Yıl boyunca",
  datesTba: "Tarih açıklanmadı",
  officialSite: "Resmî site",
  guideLink: "Ayrıntılı rehber",
  buyinUnlisted: "Açıklanmadı",

  countsLine: (total, countries) => `${total} turnuva · ${countries} ülke`,
  sourceNote:
    "Organizatörün kendi sayfası hâlâ geçen yılın bilgisini gösteriyorsa, seni oraya göndermek yerine bağlantı vermemeyi seçtik.",
  emptyState: "Şu anda bu filtreye uyan turnuva yok.",
  koLink: "Korece takvim →",

  faqHeading: "Sık sorulan sorular",
  faqs: [
    {
      q: "Türkiye'ye en yakın büyük poker turnuvaları nerede?",
      a: "Bu tablodaki en yakın seriler Kuzey Kıbrıs'ta: WPT Prime Cyprus Championship (15–19 Ekim 2026, Chamada Prestige Hotel & Spa, Çatalköy), Triton ONE North Cyprus (5–15 Kasım, Merit Royal Diamond, Girne) ve Triton Super High Roller Series North Cyprus (15–30 Kasım, aynı otel). Yalnızca bunları görmek için yukarıdaki «Kıbrıs» filtresini kullan.",
    },
    {
      q: "Buradaki her turnuvaya herkes katılabilir mi?",
      a: "Çoğuna evet, ama hepsine değil. Triton Super High Roller Series tavsiye usulüyle işler — satellite yoktur ve yalnızca parayla yer alınmaz. Kore'deki Holdem Masters yalnızca davetiyeyle, nakit buy-in yolu olmadan oynanır. APT Championships, halka açık program başlamadan önce sektöre ayrılmış bir günle açılır. Bazı etkinlikler de yalnızca bilet kabul eder, örneğin APL Seoul (yalnızca koltuk/seat biletiyle) — bu koşullar kartta yazar.",
    },
    {
      q: "Buy-in ne kadar?",
      a: "Aralık geniştir ve en geniş hâli aynı serinin içindedir. Büyük bir turun Main Event'i çoğu zaman binlerce dolar tutarken aynı serinin side event'leri çok daha küçük buy-in'lerle oynanır — bu yüzden birçok kartta tek bir sayı yerine aralık görürsün. Her kart, organizatörün kendi açıkladığı buy-in'i orijinal para biriminde gösterir. Boşsa organizatör henüz açıklamamıştır: tahmin yürütmeyiz.",
    },
    {
      q: "Büyük bir Main Event'e az parayla nasıl girilir?",
      a: "Satellite ile. Birçok büyük seri, Main Event'ten çok daha düşük buy-in'li eleme turnuvaları düzenler. Ayrıntılar bu tablo gibi yıllık bir özette değil, serinin kendi programındadır — bu yüzden her kart doğrudan resmî sayfaya gider.",
    },
  ],

  localHeading: "Yola çıkmadan önce",
  localBlocks: [
    {
      title: "Kuzey Kıbrıs: sonbaharda üç seri",
      body: "WPT Prime Cyprus Championship 15–19 Ekim 2026'da Çatalköy'deki Chamada Prestige'de; Triton ONE North Cyprus 5–15 Kasım'da ve Triton Super High Roller Series North Cyprus 15–30 Kasım'da Girne'deki Merit Royal Diamond'da. Bu tabloda Türkiye'ye en yakın takvim burası.",
    },
    {
      title: "Aynı ada, iki farklı bütçe",
      body: "WPT Prime Cyprus Championship'in buy-in'i $1.100, Triton SHR North Cyprus'ın buy-in aralığı ise $25.000–$150.000. Hangi seriye gideceğini kartlardaki buy-in'e göre seç.",
    },
    {
      title: "Buy-in organizatörün para biriminde",
      body: "Tutarlar açıklandığı gibi gösterilir: ABD doları ($), euro (€), Kore wonu (₩). Türk lirasına çevirmiyoruz çünkü kur her gün değişir — ödeme yapacağın günün kuruyla hesapla.",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   hi · ar — 2026-09-30 신설 (회차 2 후반).
   ★ 검색 형태 (DataForSEO 2026-09-30 · Google Ads 월 볼륨):
     hi(IN) «poker tournament» = «poker tournaments» 390 · «poker tournament(s) in india» 320 ·
            «poker tournament schedule» 90 · «पोकर टूर्नामेंट» 값 없음
            → 핵심명은 라틴 «poker tournaments»(hi 핵심명 영어 유지 규칙 09-16), 본문은 코퍼스형 «टूर्नामेंट».
            ⚠ «in india» 수요는 이 보드가 못 받는다 — 인도 개최 행이 없다. 있는 것처럼 쓰지 마라.
     ar     이집트·사우디·모로코 모두 «بطولة بوكر»·«بطولات البوكر» 10 · «poker tournament» 10
            → h1은 ar 코퍼스 최다형 «بطولات البوكر». 규모는 매우 작다 — 목적은 ar 글의 대회 링크 착지점.
   ★ 축: hi = id·ms와 같은 아시아 원정 캘린더(Manila·Phnom Penh·KR·TW) · ar = tr과 같은 북키프로스 축.
   ★ 용어: hi buy-in·satellite·Main Event는 라틴(코퍼스 buy-in 24회) · ar «باي-إن»(코퍼스 22회).
   ★ ar 숫자는 서양 숫자(코퍼스에 아랍-인도 숫자 0건) · 월은 يناير…ديسمبر 계열.
   🔴 사실은 lib/tournaments.ts 행 + 한국 카지노 입장 사실 시트(2026-10-kr-apl-wpt-gop.md)에서만.
      인도·아랍권의 합법성·세금·비자는 쓰지 않는다.
   ──────────────────────────────────────────────────────────── */
const hi: BoardStrings = {
  htmlLang: "hi",
  ogLocale: "hi_IN",

  metaTitle: (next, mmdd) => {
    const hooked = `Poker tournaments 2026 — ${next}, ${mmdd} से`;
    return next && hooked.length <= 55 ? hooked : "Poker tournaments 2026 — पूरा कैलेंडर";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `2026 के बड़े live poker tournaments एक तालिका में: तारीख़ें, buy-in और हर टूर्नामेंट का आधिकारिक स्रोत। ${todayDot} तक अपडेट। ${ongoing}`,
      158,
    ),

  h1: "Poker tournaments 2026 — पूरा कैलेंडर",
  heroLead:
    "इस सूची के हर टूर्नामेंट की जानकारी हमने सीधे आयोजक की साइट से जाँची है, और हर कार्ड अपने स्रोत से जुड़ा है। स्थिति तारीख़ों के हिसाब से अपने-आप बदलती है। कार्यक्रम बदल सकते हैं — शक हो तो आधिकारिक पेज ही मान्य है।",
  asOf: (dot) => `${dot} तक अपडेट`,

  filterAll: "सभी",
  filterUpcoming: "आने वाले",
  filterOngoing: "अभी जारी",
  filterEnded: "समाप्त",

  filterAllCountries: "सभी देश",
  // ★ 인도 대회는 이 보드에 없다 — 칩 = 아시아 원정지(HOME_COUNTRY.hi).
  homeCountryNames: {
    VN: "वियतनाम", KH: "कंबोडिया", PH: "फ़िलीपींस", KR: "दक्षिण कोरिया", TW: "ताइवान", JP: "जापान",
  },

  colDates: "तारीख़",
  colBuyin: "Buy-in",
  colVenue: "स्थान",

  status: { upcoming: "आने वाला", ongoing: "अभी जारी", ended: "समाप्त" },
  yearRound: "पूरे साल",
  datesTba: "तारीख़ घोषित नहीं",
  officialSite: "आधिकारिक साइट",
  guideLink: "पूरी गाइड",
  buyinUnlisted: "घोषित नहीं",

  countsLine: (total, countries) => `${total} टूर्नामेंट · ${countries} देश`,
  sourceNote:
    "जहाँ आयोजक का अपना पेज अब भी पिछले साल की जानकारी दिखा रहा था, वहाँ हमने आपको उस पेज पर भेजने के बजाय लिंक न देना चुना।",
  emptyState: "फ़िलहाल इस फ़िल्टर से मेल खाता कोई टूर्नामेंट नहीं है।",
  koLink: "कोरियाई कैलेंडर →",

  faqHeading: "अक्सर पूछे जाने वाले सवाल",
  faqs: [
    {
      q: "भारत से जाने वाले खिलाड़ियों के लिए एशिया में कौन-से बड़े poker tournaments हैं?",
      a: "इस तालिका में भारत में होने वाली कोई अंतरराष्ट्रीय सीरीज़ नहीं है। एशिया में आगे के बड़े पड़ाव ये हैं: Manila, जहाँ Okada Manila में APPT Manila Championship (8–19 अक्टूबर 2026) और Manila Megastack सीरीज़ होती हैं; और Phnom Penh, जहाँ NagaWorld में WPT Cambodia Championship 2027 (27 जनवरी–1 फ़रवरी 2027) होगी। इस बोर्ड पर एशिया में सबसे ज़्यादा टूर्नामेंट दक्षिण कोरिया और ताइवान में हैं। इन्हें छाँटने के लिए ऊपर का देश फ़िल्टर इस्तेमाल करें।",
    },
    {
      q: "क्या विदेशी खिलाड़ी कोरिया के टूर्नामेंट में खेल सकते हैं?",
      a: "कैसीनो में होने वाली बड़ी सीरीज़ विदेशी खिलाड़ियों को ध्यान में रखकर ही चलती हैं। Incheon का INSPIRE ख़ुद को सिर्फ़ विदेशियों के लिए बना कैसीनो बताता है, और Paradise City ने प्रवेश की शर्त लिखी है: 19 साल या उससे बड़े विदेशी नागरिक, पासपोर्ट के साथ। इसलिए अपना मूल पासपोर्ट साथ रखें। इस बोर्ड पर दो अपवाद हैं: APL Seoul में सिर्फ़ सीट (seat) टिकट वाले खेल सकते हैं, और Holdem Masters सिर्फ़ निमंत्रण से है।",
    },
    {
      q: "क्या यहाँ के हर टूर्नामेंट में कोई भी खेल सकता है?",
      a: "ज़्यादातर में हाँ, पर सब में नहीं। Triton Super High Roller Series सिफ़ारिश के आधार पर चलती है — satellite नहीं होते, और सिर्फ़ पैसे से सीट नहीं मिलती। कोरिया का Holdem Masters सिर्फ़ निमंत्रण टिकट से है, नकद buy-in का कोई रास्ता नहीं है। APT Championships का पहला दिन इंडस्ट्री के लोगों के लिए है; आम कार्यक्रम उसके बाद शुरू होता है। कुछ इवेंट सिर्फ़ टिकट लेते हैं, जैसे APL Seoul (सिर्फ़ सीट/seat टिकट) — ऐसी शर्तें कार्ड पर लिखी होती हैं।",
    },
    {
      q: "Buy-in कितना होता है?",
      a: "दायरा बड़ा है, और सबसे बड़ा एक ही सीरीज़ के अंदर होता है। किसी बड़े टूर का Main Event अक्सर हज़ारों डॉलर का होता है, जबकि उसी सीरीज़ में काफ़ी छोटे buy-in वाले side event भी होते हैं — इसीलिए कई कार्ड एक संख्या के बजाय दायरा दिखाते हैं। हर कार्ड वही buy-in दिखाता है जो आयोजक ने ख़ुद घोषित किया है, मूल मुद्रा में। जहाँ ख़ाली है, वहाँ आयोजक ने अभी घोषणा नहीं की है: हम अंदाज़ा नहीं लगाते।",
    },
    {
      q: "कम पैसों में बड़े Main Event में कैसे पहुँचें?",
      a: "Satellite के ज़रिए। कई बड़ी सीरीज़ Main Event से काफ़ी छोटे buy-in वाले क्वालिफ़ायर कराती हैं। ब्योरा उस सीरीज़ के अपने शेड्यूल में मिलता है, इस तरह की सालाना झलक में नहीं — इसीलिए यहाँ का हर कार्ड सीधे आधिकारिक पेज से जुड़ा है।",
    },
  ],

  localHeading: "निकलने से पहले",
  localBlocks: [
    {
      title: "Manila: एक ही रिज़ॉर्ट में कई सीरीज़",
      body: "Parañaque का Okada Manila पहले APPT Manila Championship (8–19 अक्टूबर 2026), फिर Manila Megastack 25 (27 नवंबर–7 दिसंबर) और Manila December Special (8–21 दिसंबर) की मेज़बानी करता है। एक ही यात्रा में ज़्यादा खेलना हो तो इस बोर्ड पर दक्षिण-पूर्व एशिया में सबसे ज़्यादा टूर्नामेंट यहीं मिलेंगे।",
    },
    {
      title: "कोरिया और ताइवान: एशिया में सबसे ज़्यादा टूर्नामेंट",
      body: "अक्टूबर–नवंबर में कोरिया में APT Jeju, GOP Incheon II और WPT Seoul हैं, जबकि Taipei में Taiwan Millions Tournament Championship और APT Championships। WPT Seoul (INSPIRE) और GOP Incheon II (Paradise City) के कैसीनो पासपोर्ट वाले विदेशी नागरिकों के लिए हैं — नीचे FAQ देखें।",
    },
    {
      title: "Buy-in आयोजक की मुद्रा में",
      body: "रक़म ठीक वैसी दिखती है जैसी घोषित हुई: फ़िलीपीन पेसो (₱), ताइवान डॉलर (NT$), कोरियाई वॉन (₩), अमेरिकी डॉलर ($)। हम इन्हें रुपये में नहीं बदलते क्योंकि विनिमय दर रोज़ बदलती है — जिस दिन भुगतान करें, उसी दिन की दर से हिसाब लगाएँ। वॉन की बड़ी रक़म लाख-करोड़ में लिखी है (₩15 लाख = ₩1,500,000)।",
    },
  ],
};

/**
 * ar — RTL. 카드의 이름·날짜·바이인·장소는 보드가 <bdi>로 격리한다(components/tournament-board.tsx) —
 * 라틴 대회명 끝의 괄호·따옴표가 반대쪽으로 튀는 것을 막는다. 본문 속 금액 범위는 «من … إلى …»로 쓴다
 * (대시 범위 «$25,000–$150,000»은 RTL 문단에서 두 숫자의 시각 순서가 뒤집혀 보인다).
 * ⚠ 아랍권 개최 행은 이 보드에 없다 — 있는 것처럼 쓰지 마라.
 */
const ar: BoardStrings = {
  htmlLang: "ar",
  ogLocale: "ar_AR",

  metaTitle: (next, mmdd) => {
    const hooked = `بطولات البوكر 2026 — ${next} تبدأ ${mmdd}`;
    return next && hooked.length <= 55 ? hooked : "بطولات البوكر 2026 — الجدول الكامل";
  },
  metaDescription: (todayDot, ongoing) =>
    clamp(
      `أهم بطولات البوكر الحيّة لعام 2026 في جدول واحد: التواريخ والباي-إن والمصدر الرسمي لكل بطولة. آخر تحديث ${todayDot}. ${ongoing}`,
      158,
    ),

  h1: "بطولات البوكر 2026 — الجدول الكامل",
  heroLead:
    "راجعنا معلومات كل بطولة في هذه القائمة مباشرةً من موقع الجهة المنظِّمة، وكل بطاقة ترتبط بمصدرها. تتغيّر الحالة تلقائيًا بحسب التواريخ. البرامج قد تتغيّر — وعند الشك فالمرجع هو الصفحة الرسمية.",
  asOf: (dot) => `آخر تحديث ${dot}`,

  filterAll: "الكل",
  filterUpcoming: "قادمة",
  filterOngoing: "جارية الآن",
  filterEnded: "منتهية",

  filterAllCountries: "كل الدول",
  // ★ CY = 이 보드의 CY 행은 전부 북키프로스(Kyrenia·Çatalköy)다.
  homeCountryNames: { CY: "قبرص", MT: "مالطا", ES: "إسبانيا", FR: "فرنسا" },

  colDates: "التاريخ",
  colBuyin: "الباي-إن",
  colVenue: "المكان",

  status: { upcoming: "قادمة", ongoing: "جارية الآن", ended: "انتهت" },
  yearRound: "طوال العام",
  datesTba: "لم يُعلن التاريخ بعد",
  officialSite: "الموقع الرسمي",
  guideLink: "الدليل الكامل",
  buyinUnlisted: "غير معلن",

  // 라벨형 — 아랍어 수-명사 일치(3~10 복수 · 11~99 단수…)를 숫자마다 굴절시키지 않기 위해서다(아스트라 09-30)
  countsLine: (total, countries) => `عدد البطولات: ${total} · عدد الدول: ${countries}`,
  sourceNote:
    "إذا كانت صفحة المنظِّم نفسها ما زالت تعرض معلومات العام الماضي، فضّلنا ألّا نضع الرابط على أن نرسلك إليها.",
  emptyState: "لا توجد حاليًا بطولات تطابق هذا الفلتر.",
  koLink: "الجدول باللغة الكورية ←",

  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "أين تُقام أقرب بطولات البوكر الكبرى إلى الشرق الأوسط؟",
      a: "أقرب السلاسل في هذا الجدول تُقام في شمال قبرص: WPT Prime Cyprus Championship (من 15 إلى 19 أكتوبر 2026، فندق Chamada Prestige Hotel & Spa في Çatalköy)، ثم Triton ONE North Cyprus (من 5 إلى 15 نوفمبر، فندق Merit Royal Diamond في Kyrenia)، ثم Triton Super High Roller Series North Cyprus (من 15 إلى 30 نوفمبر، في الفندق نفسه). استخدم فلتر «قبرص» في الأعلى لعرضها وحدها.",
    },
    {
      q: "هل يستطيع أي لاعب المشاركة في كل البطولات المدرجة هنا؟",
      a: "في معظمها نعم، لكن ليس في كلها. سلسلة Triton Super High Roller Series تعمل بنظام التزكية — لا توجد بطولات تأهيلية (ساتلايت)، والمال وحده لا يضمن مقعدًا. بطولة Holdem Masters في كوريا بالدعوة فقط، ولا يوجد فيها باي-إن نقدي. بطولة APT Championships تبدأ بيوم مخصّص لأهل القطاع قبل انطلاق البرنامج المفتوح للجمهور. وبعض الفعاليات لا تقبل إلا التذاكر، مثل APL Seoul (بتذكرة مقعد/seat فقط) — وهذه الشروط مكتوبة على البطاقة.",
    },
    {
      q: "كم يبلغ الباي-إن؟",
      a: "النطاق واسع، وأوسع ما يكون داخل السلسلة الواحدة. الحدث الرئيسي (Main Event) في جولة كبرى يكلّف غالبًا آلاف الدولارات، بينما تضم السلسلة نفسها أحداثًا جانبية بباي-إن أقل بكثير — ولهذا تعرض بطاقات كثيرة نطاقًا لا رقمًا واحدًا. كل بطاقة تعرض الباي-إن كما أعلنه المنظِّم نفسه وبعملته الأصلية. وإن كانت الخانة فارغة فالمنظِّم لم يعلنه بعد: نحن لا نخمّن.",
    },
    {
      q: "كيف تدخل حدثًا رئيسيًا كبيرًا بمبلغ صغير؟",
      a: "عبر البطولات التأهيلية (الساتلايت). كثير من السلاسل الكبرى تنظّم بطولات تأهيلية بباي-إن أقل بكثير من باي-إن الحدث الرئيسي. التفاصيل موجودة في برنامج السلسلة نفسها لا في ملخّص سنوي كهذا — ولهذا تقودك كل بطاقة مباشرةً إلى الصفحة الرسمية.",
    },
  ],

  localHeading: "قبل أن تسافر",
  localBlocks: [
    {
      title: "شمال قبرص: ثلاث سلاسل في الخريف",
      body: "تُقام WPT Prime Cyprus Championship من 15 إلى 19 أكتوبر 2026 في Chamada Prestige في Çatalköy، ثم Triton ONE North Cyprus من 5 إلى 15 نوفمبر، وبعدها Triton Super High Roller Series North Cyprus من 15 إلى 30 نوفمبر في Merit Royal Diamond في Kyrenia. هذا هو البرنامج الأقرب إلى الشرق الأوسط في هذا الجدول.",
    },
    {
      title: "جزيرة واحدة وميزانيتان مختلفتان",
      body: "الباي-إن في WPT Prime Cyprus Championship هو $1,100، أما في Triton SHR North Cyprus فيتراوح من $25,000 إلى $150,000. اختر السلسلة بحسب الباي-إن المكتوب على البطاقة.",
    },
    {
      title: "الباي-إن بعملة المنظِّم",
      body: "تظهر المبالغ كما أُعلنت تمامًا: الدولار الأمريكي ($)، اليورو (€)، الوون الكوري (₩). لا نحوّلها إلى عملتك المحلية لأن سعر الصرف يتغيّر كل يوم — احسبها بسعر اليوم الذي ستدفع فيه.",
    },
  ],
};

export const BOARD_STRINGS: Partial<Record<BoardLocale, BoardStrings>> = { en, ja, zh, "zh-hant": zhHant, es, de, id, ms, vi, pt, tr, hi, ar };

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
  if (locale === "id") return [{}, PAREN_ID];
  if (locale === "ms") return [{}, PAREN_MS];
  if (locale === "vi") return [CITY_VI, PAREN_VI];
  if (locale === "pt") return [CITY_PT, PAREN_PT];
  if (locale === "tr") return [CITY_TR, PAREN_TR];
  // hi·ar — 지명·국가명은 라틴 그대로(브랜드 검색형 유지 · 음역을 지어내지 않는다). 괄호 속 계절·월만 바꾼다.
  if (locale === "hi") return [{}, PAREN_HI];
  if (locale === "ar") return [{}, PAREN_AR];
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
  // id·ms — 철자가 실제로 갈리는 것만. Korea·Vietnam·Australia·Taiwan·Montenegro는 그대로가 맞다
  id: { "North Cyprus": "Siprus Utara", Canada: "Kanada" },
  ms: { "North Cyprus": "Cyprus Utara", Canada: "Kanada" },
  vi: {
    "North Cyprus": "Bắc Síp", Korea: "Hàn Quốc", Vietnam: "Việt Nam",
    Australia: "Úc", Taiwan: "Đài Loan",
  },
  pt: {
    "North Cyprus": "Chipre do Norte", Korea: "Coreia", Vietnam: "Vietnã",
    Australia: "Austrália", Canada: "Canadá",
  },
  tr: {
    "North Cyprus": "Kuzey Kıbrıs", Korea: "Kore", Australia: "Avustralya",
    Canada: "Kanada", Montenegro: "Karadağ", Taiwan: "Tayvan",
  },
};

/**
 * 대회명 자체가 브랜드라서 지명을 건드리면 안 되는 대회.
 * `Taiwan Millions Tournament`의 Taiwan은 개최지 표시가 아니라 대회 이름의 일부다.
 */
// 🔴 2026-09-29: tmt-19가 빠져 있어 ja·zh·zh-hant·es·vi에서 «台湾 Millions Tournament»처럼 브랜드가 쪼개지고 있었다.
const BRAND_LOCKED = new Set(["tmt-19", "tmt-20", "tmt-championship"]);

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
  // id·ms·vi — 서수만 현지형으로. 브랜드(WSOP·Holdem Masters)는 라틴 유지.
  id: {
    "holdem-masters-7": "Holdem Masters ke-7",
    "holdem-masters-8": "Holdem Masters ke-8",
    "wsop-2026": "WSOP ke-57 2026",
  },
  ms: {
    "holdem-masters-7": "Holdem Masters ke-7",
    "holdem-masters-8": "Holdem Masters ke-8",
    "wsop-2026": "WSOP ke-57 2026",
  },
  vi: {
    "holdem-masters-7": "Holdem Masters lần thứ 7",
    "holdem-masters-8": "Holdem Masters lần thứ 8",
    "wsop-2026": "WSOP 2026 (lần thứ 57)",
  },
  pt: {
    "holdem-masters-7": "7º Holdem Masters",
    "holdem-masters-8": "8º Holdem Masters",
    "wsop-2026": "57ª WSOP 2026",
  },
  tr: {
    "holdem-masters-7": "7. Holdem Masters",
    "holdem-masters-8": "8. Holdem Masters",
    "wsop-2026": "57. WSOP 2026",
  },
  hi: {
    "holdem-masters-7": "7वाँ Holdem Masters",
    "holdem-masters-8": "8वाँ Holdem Masters",
    "wsop-2026": "57वाँ WSOP 2026",
  },
  // ar — 브랜드를 앞에 둔다(카드 제목은 <bdi>로 격리돼 첫 강문자 방향을 따른다 → 라틴 시작 = LTR로 읽힌다).
  ar: {
    "holdem-masters-7": "Holdem Masters — النسخة 7",
    "holdem-masters-8": "Holdem Masters — النسخة 8",
    "wsop-2026": "WSOP 2026 — النسخة 57",
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
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "(온라인 새틀 7/10~9/10)": "(online satellites Jul 10 – Sep 10)",
  "새틀라이트 티켓 전용": "Satellite ticket only",
  "참가권(SEAT) 전용": "Seat (ticket) entry only",
  "장소 추후 공개": "Venue TBA",
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
  "₩5만~₩1,000만": "₩50K–₩10M",
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
  "스위스 그랜드 호텔 컨벤션센터": "スイスグランドホテル コンベンションセンター（ソウル）",
  "(온라인 새틀 7/10~9/10)": "（オンラインサテライト 7/10〜9/10）",
  "새틀라이트 티켓 전용": "サテライトチケット限定",
  "참가권(SEAT) 전용": "シート（参加権）限定",
  "장소 추후 공개": "会場は後日発表",
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
  "₩5만~₩1,000만": "5万〜1,000万ウォン",
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
  // 2026-09-16 queue Q6-c: 오스트리아 CAPT·Pokermania 6개 도시(독일어 발음 기준 관용 표기)
  Graz: "グラーツ", Innsbruck: "インスブルック", Baden: "バーデン", Seefeld: "ゼーフェルト", Bregenz: "ブレゲンツ", Velden: "フェルデン",
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
  "스위스 그랜드 호텔 컨벤션센터": "首尔瑞士大酒店会议中心",
  "(온라인 새틀 7/10~9/10)": "（线上卫星赛 7/10〜9/10）",
  "새틀라이트 티켓 전용": "仅限卫星赛门票",
  "참가권(SEAT) 전용": "仅限席位（参赛权）",
  "장소 추후 공개": "场馆待定",
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
  "₩5만~₩1,000만": "5万〜1,000万韩元",
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
  // 2026-09-16 queue Q6-c: 오스트리아 — 관용 표기가 확실한 도시만(Seefeld·Velden은 라틴 그대로 통과)
  Graz: "格拉茨", Innsbruck: "因斯布鲁克", Baden: "巴登", Bregenz: "布雷根茨",
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
    "APT的2026年济州秋季站。135场赛事，主赛事保证22亿韩元。",
  "wpt-seoul":
    "WPT首次在INSPIRE娱乐度假村举办的赛事。45场比赛，主赛事保证10亿韩元。",
  "appt-manila":
    "PokerStars APPT的2026年马尼拉站，在Okada Manila举行，系列赛总保底约1.32亿菲律宾比索。",
};


/* zh-hant 필드 사전 (번체) */
const FIELD_HANT: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "首爾瑞士大飯店會議中心",
  "(온라인 새틀 7/10~9/10)": "（線上衛星賽 7/10〜9/10）",
  "새틀라이트 티켓 전용": "僅限衛星賽門票",
  "참가권(SEAT) 전용": "僅限席次（參賽權）",
  "장소 추후 공개": "場館待定",
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
  "₩5만~₩1,000만": "5萬〜1,000萬韓元",
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
  // 2026-09-16 queue Q6-c: 오스트리아 — 관용 표기가 확실한 도시만(Seefeld·Velden은 라틴 그대로 통과)
  Graz: "格拉茲", Innsbruck: "因斯布魯克", Baden: "巴登", Bregenz: "布雷根茲",
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
    "APT的2026年濟州秋季站。135場賽事，主賽事保證22億韓元。",
  "wpt-seoul":
    "WPT首次在INSPIRE娛樂度假村舉辦的賽事。45場比賽，主賽事保證10億韓元。",
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
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seúl",
  "(온라인 새틀 7/10~9/10)": "(satélites online 10 jul – 10 sep)",
  "새틀라이트 티켓 전용": "Solo con ticket de satélite",
  "참가권(SEAT) 전용": "Solo con asiento (entrada) ganado",
  "장소 추후 공개": "Sede por anunciar",
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
  "₩5만~₩1,000만": "50 mil – 10 M KRW",
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
    "Parada de otoño de 2026 del Asian Poker Tour en Jeju: 135 eventos con 2.200 millones de KRW garantizados en el Main Event.",
  "wpt-seoul":
    "Primer evento del World Poker Tour en el INSPIRE Entertainment Resort: 45 eventos con 1.000 millones de KRW garantizados en el Main Event.",
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
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "(온라인 새틀 7/10~9/10)": "(Online-Satellites 10.7.–10.9.)",
  "새틀라이트 티켓 전용": "Nur mit Satellite-Ticket",
  "참가권(SEAT) 전용": "Nur mit gewonnenem Seat (Ticket)",
  "장소 추후 공개": "Venue wird noch bekannt gegeben",
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
  "₩5만~₩1,000만": "50 Tsd. – 10 Mio. KRW",
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
 * ⚠ WSOP 2026 상금풀 액수는 **의도적으로 뺐다** — ESPN 집계(85,634,400달러)와
 *   공식 결과 페이지(08-06 열람 당시 87,568,080달러)가 갈린 이력이 있다(WORKLOG 2026-08-06).
 *   🔴 2026-09-16 queue Q6-c: 포스트는 08-06에 공식값으로 정정됐는데 **이 파일·tournaments.ts의 보드 문장 10자리는
 *   ESPN값으로 남아 있었다** → 전부 당시 공식 페이지값(87,568,080)으로 맞췄다(출처 = WSOP 공식 결과 Event #82 · 포스트 출처란 08-06 확인).
 *   🔴 2026-09-16 queue Q4-b: **공식 결과 페이지(result/619)가 지금은 85,634,400달러다**(09-16 라이브 · 검수장 09-06 원장 동일 ·
 *   9,208 × 9,300 = 정확히 일치 · ESPN과도 같다). 08-06 값은 그 뒤 페이지에서 바뀌었다 → 보드 문장 전부 85,634,400으로 되돌렸다.
 *   87,568,080으로 다시 바꾸지 마라(근거가 사라졌다). 독일어판은 여전히 액수 없이 둔다(엔트리 수·브레이슬릿 수는 안전하다).
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
    "Herbst-Stop 2026 des Asian Poker Tour auf Jeju: 135 Events mit 2,2 Mrd. KRW Garantie im Main Event.",
  "wpt-seoul":
    "Erstes Event des World Poker Tour im INSPIRE Entertainment Resort: 45 Events mit 1 Mrd. KRW Garantie im Main Event.",
  "appt-manila":
    "Manila-Stop 2026 der PokerStars APPT im Okada Manila, mit ₱132 Mio. Gesamtgarantie.",
};

/* ────────────────────────────────────────────────────────────
   id · ms · vi 값 사전 (2026-09-29 신설).
   ★ 수치는 §13대로 언어 불변 — 단위 표기만 현지식:
     id ₩1,5 juta · ribu (마침표 천 단위 · 쉼표 소수점)
     ms ₩1.5 juta · ribu (영어식 표기가 현지 표준)
     vi ₩1,5 triệu · nghìn (마침표 천 단위 · 쉼표 소수점)
   ★ 키 = lib/tournaments.ts의 한국어 값 그대로. 새 한국어 값이 생기면 check:tournaments-i18n이 🔴로 잡는다.
   ──────────────────────────────────────────────────────────── */
const FIELD_ID: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (dikelola King's Casino Prague)",
  "공식 미기재": "Belum diumumkan",
  "미정 (공식 미기재)": "Belum ditentukan (belum diumumkan)",
  "미발표": "Belum diumumkan",
  "다양": "Tergantung event",
  "무료": "Gratis",
  "새틀라이트 티켓 전용": "Hanya dengan tiket satelit",
  "참가권(SEAT) 전용": "Hanya dengan tiket kursi (seat)",
  "초대권 전용": "Hanya dengan undangan",
  "초대권 전용 (현금 바이인 없음)": "Hanya dengan undangan (tanpa buy-in tunai)",
  "메인 ₩150만": "Main Event ₩1,5 juta",
  "메인 ₩220만": "Main Event ₩2,2 juta",
  "메인 ₩230만": "Main Event ₩2,3 juta",
  "메인 ₩250만": "Main Event ₩2,5 juta",
  "메인 ₩270만": "Main Event ₩2,7 juta",
  "₩30만~₩800만": "₩300 ribu–₩8 juta",
  "₩5만~₩1,000만": "₩50 ribu–₩10 juta",
  "₩90만~": "mulai ₩900 ribu",
  "~₩700만 (하이롤러)": "hingga ₩7 juta (high roller)",
  "€5,300 (메인)": "€5.300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll–NT$120.000",
  "(ME 파이널 8/3~5)": "(final table Main Event 3–5 Agu)",
  "(온라인 새틀 7/10~9/10)": "(satelit online 10 Jul–10 Sep)",
  "2026.12 예정 (날짜 미발표)": "Desember 2026 (tanggal belum diumumkan)",
  "€1,100~": "mulai €1.100",
};

const FIELD_MS: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (dikendalikan oleh King's Casino Prague)",
  "공식 미기재": "Belum diumumkan",
  "미정 (공식 미기재)": "Belum ditetapkan (belum diumumkan)",
  "미발표": "Belum diumumkan",
  "다양": "Bergantung pada event",
  "무료": "Percuma",
  "새틀라이트 티켓 전용": "Hanya dengan tiket satelit",
  "참가권(SEAT) 전용": "Hanya dengan tiket tempat duduk (seat)",
  "초대권 전용": "Hanya dengan jemputan",
  "초대권 전용 (현금 바이인 없음)": "Hanya dengan jemputan (tiada buy-in tunai)",
  "메인 ₩150만": "Main Event ₩1.5 juta",
  "메인 ₩220만": "Main Event ₩2.2 juta",
  "메인 ₩230만": "Main Event ₩2.3 juta",
  "메인 ₩250만": "Main Event ₩2.5 juta",
  "메인 ₩270만": "Main Event ₩2.7 juta",
  "₩30만~₩800만": "₩300 ribu–₩8 juta",
  "₩5만~₩1,000만": "₩50 ribu–₩10 juta",
  "₩90만~": "dari ₩900 ribu",
  "~₩700만 (하이롤러)": "sehingga ₩7 juta (high roller)",
  "€5,300 (메인)": "€5,300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll–NT$120,000",
  "(ME 파이널 8/3~5)": "(meja akhir Main Event 3–5 Ogo)",
  "(온라인 새틀 7/10~9/10)": "(satelit dalam talian 10 Jul–10 Sep)",
  "2026.12 예정 (날짜 미발표)": "Disember 2026 (tarikh belum diumumkan)",
  "€1,100~": "dari €1,100",
};

const FIELD_VI: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (do King's Casino Prague vận hành)",
  "공식 미기재": "Chưa công bố",
  "미정 (공식 미기재)": "Chưa xác định (chưa công bố)",
  "미발표": "Chưa công bố",
  "다양": "Tùy event",
  "무료": "Miễn phí",
  "새틀라이트 티켓 전용": "Chỉ với vé vệ tinh",
  "참가권(SEAT) 전용": "Chỉ dành cho người có vé tham dự (seat)",
  "초대권 전용": "Chỉ với vé mời",
  "초대권 전용 (현금 바이인 없음)": "Chỉ với vé mời (không có buy-in bằng tiền mặt)",
  "메인 ₩150만": "Main Event ₩1,5 triệu",
  "메인 ₩220만": "Main Event ₩2,2 triệu",
  "메인 ₩230만": "Main Event ₩2,3 triệu",
  "메인 ₩250만": "Main Event ₩2,5 triệu",
  "메인 ₩270만": "Main Event ₩2,7 triệu",
  "₩30만~₩800만": "₩300 nghìn–₩8 triệu",
  "₩5만~₩1,000만": "₩50 nghìn–₩10 triệu",
  "₩90만~": "từ ₩900 nghìn",
  "~₩700만 (하이롤러)": "đến ₩7 triệu (high roller)",
  "€5,300 (메인)": "€5.300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll–NT$120.000",
  "(ME 파이널 8/3~5)": "(bàn chung kết Main Event 3–5/8)",
  "(온라인 새틀 7/10~9/10)": "(vệ tinh online 10/7–10/9)",
  "2026.12 예정 (날짜 미발표)": "Tháng 12/2026 (chưa công bố ngày)",
  "€1,100~": "từ €1.100",
};

const PAREN_ID: Record<string, string> = {
  "(Fall)": "(Musim Gugur)", "(July)": "(Juli)", "(August)": "(Agustus)",
  "(November)": "(November)", "(December)": "(Desember)", "(Ha Long Bay)": "(Teluk Ha Long)",
};
const PAREN_MS: Record<string, string> = {
  "(Fall)": "(Musim Luruh)", "(July)": "(Julai)", "(August)": "(Ogos)",
  "(November)": "(November)", "(December)": "(Disember)", "(Ha Long Bay)": "(Teluk Ha Long)",
};
const PAREN_VI: Record<string, string> = {
  "(Fall)": "(Mùa thu)", "(July)": "(Tháng 7)", "(August)": "(Tháng 8)",
  "(November)": "(Tháng 11)", "(December)": "(Tháng 12)", "(Ha Long Bay)": "(Vịnh Hạ Long)",
};
/** vi 도시 — 베트남어 표기가 영어와 «다른 것만». 나머지 지명은 라틴 그대로가 현지 관행이다. */
const CITY_VI: Record<string, string> = {
  "Ha Long": "Hạ Long",
};

/** 대회 설명(구조화 데이터) — 수치는 원문 그대로(§13). WSOP 상금풀은 de와 같은 이유로 뺀다. */
const SCHEMA_DESC_ID: Record<string, string> = {
  "holdem-masters-7": "Disponsori WPL, diselenggarakan WeLive bersama YAJASU. Garansi ₩1,5 miliar; hanya dengan tiket undangan.",
  "wsop-2026": "Seri poker terbesar di dunia. 100 bracelet dari 26 Mei hingga 15 Juli; Main Event diikuti 9.208 entri, dengan final table 3–5 Agustus disiarkan ESPN.",
  "kpc-king-july": "Festival 17 hari di LES A Casino, Pulau Jeju. Garansi ₩2 miliar untuk seluruh seri, dengan ₩1,1 miliar GTD di Main Event King Poker Cup.",
  "apt-incheon": "Seri Incheon 2026 dari Asian Poker Tour, tur terbesar di Asia. Di Paradise City, dengan garansi total lebih dari ₩4 miliar dan ₩1,5 miliar GTD di Main Event.",
  "holdem-masters-8": "Holdem Masters ke-8 dan yang terbesar sejauh ini: garansi ₩2 miliar, dengan ₩1,8 miliar GTD di Main Event.",
  "appt-korea": "Seri Korea 2026 dari PokerStars APPT di Paradise City Incheon, dengan garansi ₩1 miliar di Main Event.",
  "triton-jeju-2": "Triton Super High Roller Series kedua tahun ini di Jeju: 14 turnamen high roller dengan buy-in $15.000 hingga $200.000.",
  "apt-jeju-fall": "Seri musim gugur 2026 Asian Poker Tour di Jeju: 135 event dengan garansi ₩2,2 miliar di Main Event.",
  "wpt-seoul": "Event pertama World Poker Tour di INSPIRE Entertainment Resort: 45 event dengan garansi ₩1 miliar di Main Event.",
  "appt-manila": "Seri Manila 2026 dari PokerStars APPT di Okada Manila, dengan garansi total ₱132 juta.",
};
const SCHEMA_DESC_MS: Record<string, string> = {
  "holdem-masters-7": "Ditaja WPL, dianjurkan WeLive bersama YAJASU. Jaminan ₩1.5 bilion; hanya dengan tiket jemputan.",
  "wsop-2026": "Siri poker terbesar di dunia. 100 bracelet dari 26 Mei hingga 15 Julai; Main Event menarik 9,208 penyertaan, dengan meja akhir 3–5 Ogos disiarkan ESPN.",
  "kpc-king-july": "Festival 17 hari di LES A Casino, Pulau Jeju. Jaminan ₩2 bilion untuk keseluruhan siri, dengan ₩1.1 bilion GTD dalam Main Event King Poker Cup.",
  "apt-incheon": "Persinggahan Incheon 2026 Asian Poker Tour, jelajah terbesar di Asia. Di Paradise City, dengan jaminan keseluruhan melebihi ₩4 bilion dan ₩1.5 bilion GTD dalam Main Event.",
  "holdem-masters-8": "Holdem Masters ke-8 dan yang terbesar setakat ini: jaminan ₩2 bilion, dengan ₩1.8 bilion GTD dalam Main Event.",
  "appt-korea": "Persinggahan Korea 2026 PokerStars APPT di Paradise City Incheon, dengan jaminan ₩1 bilion dalam Main Event.",
  "triton-jeju-2": "Triton Super High Roller Series kedua tahun ini di Jeju: 14 tournament high roller dengan buy-in $15,000 hingga $200,000.",
  "apt-jeju-fall": "Persinggahan musim luruh 2026 Asian Poker Tour di Jeju: 135 event dengan jaminan ₩2.2 bilion dalam Main Event.",
  "wpt-seoul": "Event pertama World Poker Tour di INSPIRE Entertainment Resort: 45 event dengan jaminan ₩1 bilion dalam Main Event.",
  "appt-manila": "Persinggahan Manila 2026 PokerStars APPT di Okada Manila, dengan jaminan keseluruhan ₱132 juta.",
};
const SCHEMA_DESC_VI: Record<string, string> = {
  "holdem-masters-7": "Do WPL tài trợ, WeLive tổ chức cùng YAJASU. Bảo đảm ₩1,5 tỷ; chỉ tham gia bằng vé mời.",
  "wsop-2026": "Chuỗi giải poker lớn nhất thế giới. 100 bracelet từ 26/5 đến 15/7; Main Event có 9.208 lượt tham gia, bàn chung kết 3–5/8 được ESPN phát sóng.",
  "kpc-king-july": "Lễ hội 17 ngày tại LES A Casino trên đảo Jeju. Bảo đảm ₩2 tỷ cho cả chuỗi, trong đó ₩1,1 tỷ GTD ở Main Event King Poker Cup.",
  "apt-incheon": "Chặng Incheon 2026 của Asian Poker Tour, tour lớn nhất châu Á. Tại Paradise City, tổng bảo đảm hơn ₩4 tỷ và ₩1,5 tỷ GTD ở Main Event.",
  "holdem-masters-8": "Holdem Masters lần thứ 8 và lớn nhất từ trước tới nay: bảo đảm ₩2 tỷ, trong đó ₩1,8 tỷ GTD ở Main Event.",
  "appt-korea": "Chặng Hàn Quốc 2026 của PokerStars APPT tại Paradise City Incheon, bảo đảm ₩1 tỷ ở Main Event.",
  "triton-jeju-2": "Triton Super High Roller Series lần thứ hai trong năm tại Jeju: 14 giải high roller với buy-in từ $15.000 đến $200.000.",
  "apt-jeju-fall": "Chặng mùa thu 2026 của Asian Poker Tour tại Jeju: 135 event, bảo đảm ₩2,2 tỷ ở Main Event.",
  "wpt-seoul": "Sự kiện đầu tiên của World Poker Tour tại INSPIRE Entertainment Resort: 45 event, bảo đảm ₩1 tỷ ở Main Event.",
  "appt-manila": "Chặng Manila 2026 của PokerStars APPT tại Okada Manila, tổng bảo đảm ₱132 triệu.",
};

/* pt · tr 값 사전 (2026-09-29 · 회차 2). 둘 다 천 단위 마침표·소수점 쉼표(DOT_THOUSANDS).
   KRW 단위: pt mil·milhão·bilhão / tr bin·milyon·milyar. 수치는 §13 불변. */
const FIELD_PT: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (operado pelo King's Casino Prague)",
  "공식 미기재": "Não divulgado",
  "미정 (공식 미기재)": "A definir (não divulgado)",
  "미발표": "Não divulgado",
  "다양": "Varia por evento",
  "무료": "Grátis",
  "새틀라이트 티켓 전용": "Só com ticket de satélite",
  "참가권(SEAT) 전용": "Só com ticket de vaga (seat)",
  "초대권 전용": "Só com convite",
  "초대권 전용 (현금 바이인 없음)": "Só com convite (sem buy-in em dinheiro)",
  "메인 ₩150만": "Main Event ₩1,5 milhão",
  "메인 ₩220만": "Main Event ₩2,2 milhões",
  "메인 ₩230만": "Main Event ₩2,3 milhões",
  "메인 ₩250만": "Main Event ₩2,5 milhões",
  "메인 ₩270만": "Main Event ₩2,7 milhões",
  "₩30만~₩800만": "₩300 mil–₩8 milhões",
  "₩5만~₩1,000만": "₩50 mil–₩10 milhões",
  "₩90만~": "a partir de ₩900 mil",
  "~₩700만 (하이롤러)": "até ₩7 milhões (high roller)",
  "€5,300 (메인)": "€5.300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll–NT$120.000",
  "(ME 파이널 8/3~5)": "(mesa final do Main Event 3–5 ago)",
  "(온라인 새틀 7/10~9/10)": "(satélites online 10 jul–10 set)",
  "2026.12 예정 (날짜 미발표)": "Dezembro de 2026 (datas não divulgadas)",
  "€1,100~": "a partir de €1.100",
};

const FIELD_TR: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (işletmeci: King's Casino Prague)",
  "공식 미기재": "Açıklanmadı",
  "미정 (공식 미기재)": "Belirlenmedi (açıklanmadı)",
  "미발표": "Açıklanmadı",
  "다양": "Etkinliğe göre değişir",
  "무료": "Ücretsiz",
  "새틀라이트 티켓 전용": "Yalnızca satellite biletiyle",
  "참가권(SEAT) 전용": "Yalnızca koltuk (seat) biletiyle",
  "초대권 전용": "Yalnızca davetiyeyle",
  "초대권 전용 (현금 바이인 없음)": "Yalnızca davetiyeyle (nakit buy-in yok)",
  "메인 ₩150만": "Main Event ₩1,5 milyon",
  "메인 ₩220만": "Main Event ₩2,2 milyon",
  "메인 ₩230만": "Main Event ₩2,3 milyon",
  "메인 ₩250만": "Main Event ₩2,5 milyon",
  "메인 ₩270만": "Main Event ₩2,7 milyon",
  "₩30만~₩800만": "₩300 bin–₩8 milyon",
  "₩5만~₩1,000만": "₩50 bin–₩10 milyon",
  "₩90만~": "₩900 binden başlayan",
  "~₩700만 (하이롤러)": "₩7 milyona kadar (high roller)",
  "€5,300 (메인)": "€5.300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll–NT$120.000",
  "(ME 파이널 8/3~5)": "(Main Event final masası 3–5 Ağu)",
  "(온라인 새틀 7/10~9/10)": "(çevrim içi eleme turnuvaları 10 Tem–10 Eyl)",
  "2026.12 예정 (날짜 미발표)": "Aralık 2026 (tarihler açıklanmadı)",
  "€1,100~": "€1.100'den başlayan",
};

const PAREN_PT: Record<string, string> = {
  "(Fall)": "(Outono)", "(July)": "(Julho)", "(August)": "(Agosto)",
  "(November)": "(Novembro)", "(December)": "(Dezembro)", "(Ha Long Bay)": "(Baía de Ha Long)",
};
const PAREN_TR: Record<string, string> = {
  "(Fall)": "(Sonbahar)", "(July)": "(Temmuz)", "(August)": "(Ağustos)",
  "(November)": "(Kasım)", "(December)": "(Aralık)", "(Ha Long Bay)": "(Ha Long Körfezi)",
};
/** 영어와 표기가 «다른 것만». 브랜드에 든 Seoul·London은 건드리지 않는다(«APL Seul» 같은 변형 방지). */
const CITY_PT: Record<string, string> = {
  Prague: "Praga", Tokyo: "Tóquio", Seville: "Sevilha", "Mexico City": "Cidade do México",
};
const CITY_TR: Record<string, string> = {
  Kyrenia: "Girne", Prague: "Prag", Seville: "Sevilla", Vienna: "Viyana",
};

const SCHEMA_DESC_PT: Record<string, string> = {
  "holdem-masters-7": "Patrocínio da WPL, organização da WeLive com a YAJASU. ₩1,5 bilhão garantido; participação só com convite.",
  "wsop-2026": "A maior série de poker do mundo. 100 braceletes de 26 de maio a 15 de julho; o Main Event teve 9.208 entradas, com a mesa final de 3 a 5 de agosto na ESPN.",
  "kpc-king-july": "Festival de 17 dias no LES A Casino, na ilha de Jeju. ₩2 bilhões garantidos na série, com ₩1,1 bilhão GTD no Main Event do King Poker Cup.",
  "apt-incheon": "Etapa de Incheon 2026 do Asian Poker Tour, o maior circuito da Ásia. No Paradise City, com mais de ₩4 bilhões garantidos no total e ₩1,5 bilhão GTD no Main Event.",
  "holdem-masters-8": "8ª edição do Holdem Masters e a maior até agora: ₩2 bilhões garantidos, com ₩1,8 bilhão GTD no Main Event.",
  "appt-korea": "Etapa coreana 2026 do PokerStars APPT no Paradise City Incheon, com ₩1 bilhão garantido no Main Event.",
  "triton-jeju-2": "Segunda Triton Super High Roller Series do ano em Jeju: 14 torneios high roller com buy-ins de $15.000 a $200.000.",
  "apt-jeju-fall": "Etapa de outono 2026 do Asian Poker Tour em Jeju: 135 eventos, com ₩2,2 bilhões garantidos no Main Event.",
  "wpt-seoul": "Primeiro evento do World Poker Tour no INSPIRE Entertainment Resort: 45 eventos, com ₩1 bilhão garantido no Main Event.",
  "appt-manila": "Etapa de Manila 2026 do PokerStars APPT no Okada Manila, com ₱132 milhões garantidos no total.",
};
const SCHEMA_DESC_TR: Record<string, string> = {
  "holdem-masters-7": "WPL sponsorluğunda, WeLive ve YAJASU organizasyonunda. ₩1,5 milyar garantili; katılım yalnızca davetiyeyle.",
  "wsop-2026": "Dünyanın en büyük poker serisi. 26 Mayıs–15 Temmuz arasında 100 bilezik; Main Event 9.208 girişe ulaştı, final masası 3–5 Ağustos'ta ESPN'de yayınlandı.",
  "kpc-king-july": "Jeju Adası'ndaki LES A Casino'da 17 günlük festival. Seri genelinde ₩2 milyar garanti, King Poker Cup Main Event'inde ₩1,1 milyar GTD.",
  "apt-incheon": "Asya'nın en büyük turu Asian Poker Tour'un 2026 Incheon ayağı. Paradise City'de, toplam ₩4 milyarı aşan garanti ve Main Event'te ₩1,5 milyar GTD.",
  "holdem-masters-8": "8. Holdem Masters, serinin bugüne kadarki en büyüğü: ₩2 milyar garanti, Main Event'te ₩1,8 milyar GTD.",
  "appt-korea": "PokerStars APPT'nin 2026 Kore ayağı, Paradise City Incheon'da; Main Event'te ₩1 milyar garanti.",
  "triton-jeju-2": "Yılın ikinci Jeju Triton Super High Roller Series'i: buy-in'i $15.000 ile $200.000 arasında 14 high roller turnuvası.",
  "apt-jeju-fall": "Asian Poker Tour'un 2026 sonbahar Jeju ayağı: 135 etkinlik, Main Event'te ₩2,2 milyar garanti.",
  "wpt-seoul": "World Poker Tour'un INSPIRE Entertainment Resort'taki ilk etkinliği: 45 etkinlik, Main Event'te ₩1 milyar garanti.",
  "appt-manila": "PokerStars APPT'nin 2026 Manila ayağı, Okada Manila'da; toplam ₱132 milyon garanti.",
};
/* hi · ar 값 사전 (2026-09-30 · 회차 2 후반). 둘 다 천 단위 쉼표 그대로(DOT_THOUSANDS 대상 아님).
   KRW 단위: hi 는 인도식 लाख(10만)·करोड़(1,000만) — 만 단위 값이 그대로 맞물린다
     (150만 = 15 लाख · 1,000만 = 1 करोड़ · 10억 = 100 करोड़) / ar ألف·مليون·مليار. 수치는 §13 불변. */
const FIELD_HI: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (संचालन: King's Casino Prague)",
  "공식 미기재": "घोषित नहीं",
  "미정 (공식 미기재)": "तय नहीं (घोषित नहीं)",
  "미발표": "घोषित नहीं",
  "다양": "इवेंट के अनुसार अलग",
  "무료": "मुफ़्त",
  "새틀라이트 티켓 전용": "सिर्फ़ satellite टिकट से",
  "참가권(SEAT) 전용": "सिर्फ़ सीट (seat) टिकट से",
  "초대권 전용": "सिर्फ़ निमंत्रण से",
  "초대권 전용 (현금 바이인 없음)": "सिर्फ़ निमंत्रण से (नकद buy-in नहीं)",
  "메인 ₩150만": "Main Event ₩15 लाख",
  "메인 ₩220만": "Main Event ₩22 लाख",
  "메인 ₩230만": "Main Event ₩23 लाख",
  "메인 ₩250만": "Main Event ₩25 लाख",
  "메인 ₩270만": "Main Event ₩27 लाख",
  "₩30만~₩800만": "₩3 लाख–₩80 लाख",
  "₩5만~₩1,000만": "₩50 हज़ार–₩1 करोड़",
  "₩90만~": "₩9 लाख से",
  "~₩700만 (하이롤러)": "₩70 लाख तक (high roller)",
  "€5,300 (메인)": "€5,300 (Main Event)",
  "프리롤~NT$120,000": "Freeroll–NT$120,000",
  "(ME 파이널 8/3~5)": "(Main Event फ़ाइनल टेबल 3–5 अगस्त)",
  "(온라인 새틀 7/10~9/10)": "(online satellite 10 जुलाई–10 सितंबर)",
  "2026.12 예정 (날짜 미발표)": "दिसंबर 2026 (तारीख़ें घोषित नहीं)",
  "€1,100~": "€1,100 से",
};

const FIELD_AR: Record<string, string> = {
  "스위스 그랜드 호텔 컨벤션센터": "Swiss Grand Hotel Convention Center, Seoul",
  "야자수 서울센터": "YAJASU Center Seoul",
  "Hilton Prague (King's Casino Prague 운영)": "Hilton Prague (بإدارة King's Casino Prague)",
  "공식 미기재": "غير معلن",
  "미정 (공식 미기재)": "لم يُحدَّد (غير معلن)",
  "미발표": "غير معلن",
  "다양": "يختلف حسب الحدث",
  "무료": "مجانًا",
  "새틀라이트 티켓 전용": "بتذكرة ساتلايت فقط",
  "참가권(SEAT) 전용": "بتذكرة مقعد (seat) فقط",
  "초대권 전용": "بالدعوة فقط",
  "초대권 전용 (현금 바이인 없음)": "بالدعوة فقط (لا باي-إن نقدي)",
  "메인 ₩150만": "الحدث الرئيسي ₩1.5 مليون",
  "메인 ₩220만": "الحدث الرئيسي ₩2.2 مليون",
  "메인 ₩230만": "الحدث الرئيسي ₩2.3 مليون",
  "메인 ₩250만": "الحدث الرئيسي ₩2.5 مليون",
  "메인 ₩270만": "الحدث الرئيسي ₩2.7 مليون",
  "₩30만~₩800만": "من ₩300 ألف إلى ₩8 ملايين",
  "₩5만~₩1,000만": "من ₩50 ألف إلى ₩10 ملايين",
  "₩90만~": "ابتداءً من ₩900 ألف",
  "~₩700만 (하이롤러)": "حتى ₩7 ملايين (هاي رولر)",
  "€5,300 (메인)": "€5,300 (الحدث الرئيسي)",
  "프리롤~NT$120,000": "من فريرول إلى NT$120,000",
  "(ME 파이널 8/3~5)": "(الطاولة النهائية للحدث الرئيسي من 3 إلى 5 أغسطس)",
  "(온라인 새틀 7/10~9/10)": "(ساتلايت أونلاين 10 يوليو – 10 سبتمبر)",
  "2026.12 예정 (날짜 미발표)": "ديسمبر 2026 (لم يُعلن التاريخ)",
  "€1,100~": "ابتداءً من €1,100",
};

const PAREN_HI: Record<string, string> = {
  "(Fall)": "(शरद)", "(July)": "(जुलाई)", "(August)": "(अगस्त)",
  "(November)": "(नवंबर)", "(December)": "(दिसंबर)", "(Ha Long Bay)": "(हा लॉन्ग बे)",
};
const PAREN_AR: Record<string, string> = {
  "(Fall)": "(الخريف)", "(July)": "(يوليو)", "(August)": "(أغسطس)",
  "(November)": "(نوفمبر)", "(December)": "(ديسمبر)", "(Ha Long Bay)": "(خليج ها لونغ)",
};

/* 스키마 설명 — «아직 끝나지 않은» 행만 Event 스키마로 나간다(buildLocaleSchemas).
   2026-09-30 기준 schemaDescription을 가진 미종료 행은 이 셋뿐이라 셋만 등재한다.
   🔴 새 행에 schemaDescription을 달면 여기도 등재하라 — 없으면 한국어 원문이 그대로 나간다. */
const SCHEMA_DESC_HI: Record<string, string> = {
  "holdem-masters-8": "8वाँ Holdem Masters, अब तक का सबसे बड़ा: कुल ₩200 करोड़ गारंटी, Main Event में ₩180 करोड़ GTD।",
  "apt-jeju-fall": "Asian Poker Tour का 2026 का Jeju पड़ाव (शरद): 135 इवेंट, Main Event में ₩220 करोड़ गारंटी।",
  "wpt-seoul": "INSPIRE Entertainment Resort में World Poker Tour का पहला आयोजन: 45 इवेंट, Main Event में ₩100 करोड़ गारंटी।",
};
const SCHEMA_DESC_AR: Record<string, string> = {
  "holdem-masters-8": "النسخة الثامنة من Holdem Masters وهي الأكبر حتى الآن: ضمان إجمالي ₩2 مليار، منها ₩1.8 مليار GTD للحدث الرئيسي.",
  "apt-jeju-fall": "محطة Jeju الخريفية لعام 2026 من Asian Poker Tour: 135 حدثًا، وضمان ₩2.2 مليار للحدث الرئيسي.",
  "wpt-seoul": "أول بطولة لـ World Poker Tour في INSPIRE Entertainment Resort: 45 حدثًا، وضمان ₩1 مليار للحدث الرئيسي.",
};
const MONTH_HI = ["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"];
const MONTH_AR = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];

const MONTH_PT = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTH_TR = ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];

/** 월 축약 id·ms — 현지 달력 축약(Mei·Agu·Okt·Des / Mac·Ogo·Dis) */
const MONTH_ID = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
const MONTH_MS = ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"];

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
  // 2026-09-11 회차 Q1: 오스트리아 6행이 NOTE_* 어디에도 없어 비KO 보드가 바이인만 맨몸으로 보여주고 있었다
  //   (`localizedNote` 가 undefined 면 배지를 아예 안 그린다 — 한국어 폴백 금지). 특히 범위형 바이인은
  //   하한이 «새틀라이트 가격»이라 해설 없이 보면 「그 돈이면 이 대회를 칠 수 있다」로 읽힌다.
  //   ✅ 2026-09-16 queue Q6-c: ja·zh·zh-hant·es·de 에도 채웠다.
  "capt-graz": "Main Event €500+50 (Day 1A–1C, best stack forward) · CAPT Opening €15,000 GTD · satellites from €50+10",
  "capt-seefeld-oct": "Main Event €500+50 · the pricier NLH Unicorn Seefeld (€1,000+100) runs Oct 7–8 and is a side event, not the Main",
  "capt-bregenz-oct": "Main Event €1,100 · Lake Constance (Bodensee) Hold'em Trophy €30,000 GTD",
  "capt-innsbruck-nov": "Main Event €1,000+100 — Innsbruck's first ever €1,100 Main Event",
  "capt-million-baden": "Season finale · Main Event €500+50 / €1,000,000 GTD",
  "pokermania-xl-velden": "Main Event €200+30, best stack forward · Day 1A–1E in Velden plus a Sep 27 starting day at Casino Graz · €50,000 GTD · min cash €500 · Mega Satellite from €30+6",
  // 2026-09-03 M-082 ② 추가 13건
  "hpt-5": "₩1.6B total prize · online satellites on Hangame Royal Hold'em → live Main Event (Day 1 Sep 11–12 · Day 2 Sep 13) · open to Korean nationals",
  // 2026-09-04 M-086 ⑤: ko note가 「2년 만의 서울 복귀」를 되찾고 SEAT·주최를 얻었다 → EN도 같은 내용으로 맞춘다.
  "apl-seoul-winter-circuit-1": "Circuit I ₩400,000,000 GTD · APL Winter Series ₩2,300,000,000 GTD total · Seoul returns after two years · every event is seat (ticket) entry, no cash buy-in — tickets from APL official partner holdem pubs · organised by the Korea Holdem Sports Association",
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
  "apt-jeju-fall": "135 events · Main Event ₩2.2bn GTD · 12 APTC seats",
  "gop-incheon-2": "WPT Seoul runs on Yeongjong Island at the same time, at a different venue",
  "wpt-seoul": "45 events · Main Nov 5–9 (₩1.75M, ₩1bn GTD) · a new 70-table poker room",
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
  "tmt-championship": "35 events · over NT$48,000,000 guaranteed · Main Event NT$35,000 / NT$30,000,000 GTD (Day 1 Oct 22–24)",
  "wwp-series-5": "Main Event NT$6,000 / NT$10,000,000 GTD (Oct 4–11) · NT$23,300,000 guaranteed across the series, warm-up events included",
  "ctp-11th-anniversary": "Main Event NT$8,000 / NT$2,000,000 GTD (single day, Oct 11) · TMTC PASS and TMTC Main satellites",
  "ola-poker-tour-taipei": "NT$16.6M guaranteed across the series · Main Event NT$22,000 / NT$10,000,000 GTD (Day 1 Dec 18–20)",
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
  // 2026-09-16 queue Q6-c(Q1-10 이행): 오스트리아 6행 — NOTE_EN(Q1) 재저작. 수치·통화·날짜는 EN 불변.
  "capt-graz": "メインイベント€500+50（Day 1A〜1C、複数通過時はベストスタック持ち越し）· CAPT Opening €15,000 GTD · サテライトは€50+10から",
  "capt-seefeld-oct": "メインイベント€500+50 · より高額なNLH Unicorn Seefeld（€1,000+100、10/7〜8）はサイドイベントで、メインではない",
  "capt-bregenz-oct": "メインイベント€1,100 · Lake Constance Hold'em Trophy（ボーデン湖）€30,000 GTD",
  "capt-innsbruck-nov": "メインイベント€1,000+100 — インスブルック史上初の€1,100メインイベント",
  "capt-million-baden": "シーズン最終戦 · メインイベント€500+50／€1,000,000 GTD",
  "pokermania-xl-velden": "メインイベント€200+30（複数通過時はベストスタック持ち越し）· Day 1A〜1Eはフェルデン、9/27にはCasino GrazでもDay 1を開催 · €50,000 GTD · 最低入賞額€500 · メガサテライトは€30+6から",
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
  "apt-jeju-fall": "135イベント · メインイベント22億ウォンGTD · APTCシート12席",
  "gop-incheon-2": "同時期に永宗島でWPT Seoulも開催（会場は別）",
  "wpt-seoul": "45イベント · メイン11/5〜9（175万ウォン、10億ウォンGTD）· 70卓の新設ポーカールーム",
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
  "tmt-championship": "35イベント・保証総額NT$48,000,000超・メイン NT$35,000 / NT$30,000,000 GTD（Day 1 10/22〜24）",
  "wwp-series-5": "メイン NT$6,000 / NT$10,000,000 GTD（10/4〜10/11）・シリーズ保証総額NT$23,300,000（前哨戦を含む）",
  "ctp-11th-anniversary": "メイン NT$8,000 / NT$2,000,000 GTD（10/11 1日完結）・TMTC PASS・TMTCメインのサテライトあり",
  "ola-poker-tour-taipei": "シリーズ保証総額NT$16.6M・メイン NT$22,000 / NT$10,000,000 GTD（Day 1 12/18〜20）",
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
  // ── 2026-09-06 M-091 ⑤: 4로케일 공통 미등재 14건(EN 축어 기준 · 수치 불변) ──
  "hpt-5": "賞金総額16億ウォン · Hangame Royal Hold'emのオンラインサテライト → ライブのメインイベント（Day 1: 9/11〜12、Day 2: 9/13）· 韓国籍のプレイヤーも参加可能",
  "apl-seoul-winter-circuit-1": "Circuit I 4億ウォンGTD · APL Winter Series総額23億ウォンGTD · 2年ぶりのソウル開催 · 全イベントが参加権（シート）制で現金バイインなし — チケットはAPL公式提携ホールデムパブで入手 · Korea Holdem Sports Association主催",
  "wpt-bestbet-scramble": "メインイベント$5,000／$1,000,000 GTD",
  "wpt-prime-lodge": "メインイベント$1,100／$1,000,000 GTD",
  "wpt-prime-cyprus": "メインイベント$1,100／$1,000,000 GTD",
  "wpt-bay-101": "メインイベント$5,300 · Shooting Star（バウンティ）形式",
  "wpt-venetian-fall": "メインイベント$5,000／$2,000,000 GTD",
  "wpt-prime-cambodia-2027": "メインイベント$1,100／$500,000 GTD · WPTシーズン25の開幕戦",
  "wpt-cambodia-2027": "メインイベント$3,500／$1,000,000 GTD",
  "manila-megastack-warmup": "Megastack直接予選 ₱5,300（11/26）· ₱450K GTD（10席）",
  "manila-december-special": "開催は当局の認可次第 · 詳細は未発表",
  "manila-super-series-25": "メインイベント₱18,500／₱10M GTD · シリーズ保証₱22M以上",
  "manila-megastack-26": "メインイベント₱45,000／₱20M GTD · シリーズ保証₱52M以上",
  "manila-megastack-25": "メインイベント₱45,000／₱20M GTD · シリーズ保証₱37.6M以上",
};

const NOTE_ZH: Record<string, string> = {
  // 2026-09-16 queue Q6-c(Q1-10 이행): 오스트리아 6행 — NOTE_EN(Q1) 재저작. 수치·통화·날짜는 EN 불변.
  "capt-graz": "主赛事€500+50（Day 1A〜1C，多次晋级取最大筹码）· CAPT Opening €15,000 GTD · 卫星赛€50+10起",
  "capt-seefeld-oct": "主赛事€500+50 · 更贵的NLH Unicorn Seefeld（€1,000+100，10月7〜8日）是副赛，不是主赛事",
  "capt-bregenz-oct": "主赛事€1,100 · 博登湖（Lake Constance）Hold'em Trophy €30,000 GTD",
  "capt-innsbruck-nov": "主赛事€1,000+100——因斯布鲁克首次举办€1,100级别的主赛事",
  "capt-million-baden": "赛季收官站 · 主赛事€500+50／€1,000,000 GTD",
  "pokermania-xl-velden": "主赛事€200+30（多次晋级取最大筹码）· Day 1A〜1E在Velden，9月27日还在Casino Graz另设一个首日 · €50,000 GTD · 最低奖金€500 · 大型卫星赛€30+6起",
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
  "apt-jeju-fall": "135场赛事 · 主赛事22亿韩元GTD · 12个APTC席位",
  "gop-incheon-2": "同期在永宗岛还有WPT Seoul（场馆不同）",
  "wpt-seoul": "45场赛事 · 主赛11月5〜9日（175万韩元，10亿韩元GTD）· 新建70桌扑克室",
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
  "tmt-championship": "35 项赛事 · 系列赛总保证 NT$48,000,000 以上 · 主赛 NT$35,000 / NT$30,000,000 GTD（Day 1 10/22–10/24）",
  "wwp-series-5": "主赛 NT$6,000 / NT$10,000,000 GTD（10/4–10/11）· 系列赛总保证 NT$23,300,000（含前哨赛）",
  "ctp-11th-anniversary": "主赛 NT$8,000 / NT$2,000,000 GTD（10/11 单日赛）· 设有 TMTC PASS 与 TMTC 主赛卫星赛",
  "ola-poker-tour-taipei": "系列赛总保证 NT$16.6M · 主赛 NT$22,000 / NT$10,000,000 GTD（Day 1 12/18–12/20）",
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
  // ── 2026-09-06 M-091 ⑤: 4로케일 공통 미등재 14건(EN 축어 기준 · 수치 불변) ──
  "hpt-5": "总奖金16亿韩元 · Hangame Royal Hold'em线上卫星赛 → 线下主赛事（Day 1 9月11〜12日 · Day 2 9月13日）· 韩国籍玩家亦可参加",
  "apl-seoul-winter-circuit-1": "Circuit I 4亿韩元GTD · APL Winter Series总额23亿韩元GTD · 时隔两年重返首尔 · 所有赛事均不设现金买入，仅凭席位（参赛券）入场——门票可在APL官方合作德州扑克酒吧获取 · 由Korea Holdem Sports Association主办",
  "wpt-bestbet-scramble": "主赛事$5,000／$1,000,000 GTD",
  "wpt-prime-lodge": "主赛事$1,100／$1,000,000 GTD",
  "wpt-prime-cyprus": "主赛事$1,100／$1,000,000 GTD",
  "wpt-bay-101": "主赛事$5,300 · Shooting Star赏金赛制",
  "wpt-venetian-fall": "主赛事$5,000／$2,000,000 GTD",
  "wpt-prime-cambodia-2027": "主赛事$1,100／$500,000 GTD · WPT第25赛季揭幕战",
  "wpt-cambodia-2027": "主赛事$3,500／$1,000,000 GTD",
  "manila-megastack-warmup": "11月26日举行₱5,300 Megastack直通赛 · ₱450K GTD（10个席位）",
  "manila-december-special": "有待监管部门批准 · 详情待定",
  "manila-super-series-25": "主赛事₱18,500／₱10M GTD · 系列赛保底超₱22M",
  "manila-megastack-26": "主赛事₱45,000／₱20M GTD · 系列赛保底超₱52M",
  "manila-megastack-25": "主赛事₱45,000／₱20M GTD · 系列赛保底超₱37.6M",
};

const NOTE_HANT: Record<string, string> = {
  // 2026-09-16 queue Q6-c(Q1-10 이행): 오스트리아 6행 — NOTE_EN(Q1) 재저작. 수치·통화·날짜는 EN 불변.
  "capt-graz": "主賽事€500+50（Day 1A〜1C，多次晉級取最大籌碼）· CAPT Opening €15,000 GTD · 衛星賽€50+10起",
  "capt-seefeld-oct": "主賽事€500+50 · 較貴的NLH Unicorn Seefeld（€1,000+100，10月7〜8日）是附屬賽，不是主賽事",
  "capt-bregenz-oct": "主賽事€1,100 · 博登湖（Lake Constance）Hold'em Trophy €30,000 GTD",
  "capt-innsbruck-nov": "主賽事€1,000+100——因斯布魯克首次舉辦€1,100級別的主賽事",
  "capt-million-baden": "賽季收官站 · 主賽事€500+50／€1,000,000 GTD",
  "pokermania-xl-velden": "主賽事€200+30（多次晉級取最大籌碼）· Day 1A〜1E在Velden，9月27日還在Casino Graz另設一個首日 · €50,000 GTD · 最小獎金€500 · 大型衛星賽€30+6起",
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
  "apt-jeju-fall": "135場賽事 · 主賽事22億韓元GTD · 12個APTC席位",
  "gop-incheon-2": "同期在永宗島還有WPT Seoul（場館不同）",
  "wpt-seoul": "45場賽事 · 主賽11月5〜9日（175萬韓元，10億韓元GTD）· 新建70桌撲克室",
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
  "tmt-championship": "35 項賽事 · 系列賽總保證 NT$48,000,000 以上 · 主賽 NT$35,000 / NT$30,000,000 GTD（Day 1 10/22–10/24）",
  "wwp-series-5": "主賽 NT$6,000 / NT$10,000,000 GTD（10/4–10/11）· 系列賽總保證 NT$23,300,000（含前哨戰）",
  "ctp-11th-anniversary": "主賽 NT$8,000 / NT$2,000,000 GTD（10/11 單日賽）· 設有 TMTC PASS 與 TMTC 主賽衛星賽",
  "ola-poker-tour-taipei": "系列賽總保證 NT$16.6M · 主賽 NT$22,000 / NT$10,000,000 GTD（Day 1 12/18–12/20）",
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
  // ── 2026-09-06 M-091 ⑤: 4로케일 공통 미등재 14건(EN 축어 기준 · 수치 불변) ──
  "hpt-5": "總獎金16億韓元 · Hangame Royal Hold'em線上衛星賽 → 實體主賽事（Day 1 9月11〜12日 · Day 2 9月13日）· 韓國籍玩家亦可參加",
  "apl-seoul-winter-circuit-1": "Circuit I 4億韓元GTD · APL Winter Series總額23億韓元GTD · 時隔兩年重返首爾 · 所有賽事均不設現金買入，僅憑席位（參賽券）入場——門票可在APL官方合作德州撲克酒吧取得 · 由Korea Holdem Sports Association主辦",
  "wpt-bestbet-scramble": "主賽事$5,000／$1,000,000 GTD",
  "wpt-prime-lodge": "主賽事$1,100／$1,000,000 GTD",
  "wpt-prime-cyprus": "主賽事$1,100／$1,000,000 GTD",
  "wpt-bay-101": "主賽事$5,300 · Shooting Star賞金賽制",
  "wpt-venetian-fall": "主賽事$5,000／$2,000,000 GTD",
  "wpt-prime-cambodia-2027": "主賽事$1,100／$500,000 GTD · WPT第25賽季揭幕戰",
  "wpt-cambodia-2027": "主賽事$3,500／$1,000,000 GTD",
  "manila-megastack-warmup": "11月26日舉行₱5,300 Megastack直通賽 · ₱450K GTD（10個席位）",
  "manila-december-special": "有待主管機關核准 · 詳情待定",
  "manila-super-series-25": "主賽事₱18,500／₱10M GTD · 系列賽保底超過₱22M",
  "manila-megastack-26": "主賽事₱45,000／₱20M GTD · 系列賽保底超過₱52M",
  "manila-megastack-25": "主賽事₱45,000／₱20M GTD · 系列賽保底超過₱37.6M",
};

/* ★ es는 숫자 표기가 영어와 정반대이고(천 단위 마침표), 멕시코에서 `$`는 페소다.
   USD는 US$로, 큰 금액은 millones로 적는다. 수치 자체는 §13대로 불변. */
const NOTE_ES: Record<string, string> = {
  // 2026-09-16 queue Q6-c(Q1-10 이행): 오스트리아 6행 — NOTE_EN(Q1) 재저작. 수치·통화·날짜는 EN 불변.
  "capt-graz": "Main Event €500+50 (Día 1A–1C, pasa el mejor stack) · CAPT Opening €15.000 GTD · satélites desde €50+10",
  "capt-seefeld-oct": "Main Event €500+50 · el NLH Unicorn Seefeld, más caro (€1.000+100), se juega del 7 al 8 de oct y es un evento paralelo, no el Main",
  "capt-bregenz-oct": "Main Event €1.100 · Lake Constance (Bodensee) Hold'em Trophy €30.000 GTD",
  "capt-innsbruck-nov": "Main Event €1.000+100: el primer Main Event de €1.100 en la historia de Innsbruck",
  "capt-million-baden": "Cierre de temporada · Main Event €500+50 / €1.000.000 GTD",
  "pokermania-xl-velden": "Main Event €200+30, pasa el mejor stack · Días 1A–1E en Velden más un día inicial el 27 de sep en el Casino Graz · €50.000 GTD · premio mínimo €500 · Mega Satélite desde €30+6",
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
  "apt-jeju-fall": "135 eventos · Main Event 2.200 millones de KRW GTD · 12 asientos para el APTC",
  "gop-incheon-2": "El WPT Seoul se juega a la vez en la isla de Yeongjong, en otra sede",
  "wpt-seoul": "45 eventos · Main del 5 al 9 de nov (1,75 M KRW, 1.000 millones GTD) · sala de poker nueva de 70 mesas",
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
  "tmt-championship": "35 eventos · más de NT$48.000.000 garantizados · Main Event NT$35.000 / NT$30.000.000 GTD (Day 1 del 22 al 24 de octubre)",
  "wwp-series-5": "Main Event NT$6.000 / NT$10.000.000 GTD (del 4 al 11 de octubre) · NT$23.300.000 garantizados en la serie, eventos previos incluidos",
  "ctp-11th-anniversary": "Main Event NT$8.000 / NT$2.000.000 GTD (un solo día, 11 de octubre) · satélites TMTC PASS y al Main del TMTC",
  "ola-poker-tour-taipei": "NT$16,6M garantizados en la serie · Main Event NT$22.000 / NT$10.000.000 GTD (Day 1 del 18 al 20 de diciembre)",
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
  // ── 2026-09-06 M-091 ⑤: 4로케일 공통 미등재 14건(EN 축어 기준 · 수치 불변) ──
  "hpt-5": "1.600 millones de KRW en premios · satélites online en Hangame Royal Hold'em → Main Event en vivo (Día 1: 11–12 sep · Día 2: 13 sep) · abierto también a ciudadanos coreanos",
  "apl-seoul-winter-circuit-1": "Circuit I 400 millones de KRW GTD · APL Winter Series 2.300 millones GTD en total · Seúl vuelve después de dos años · en todos los eventos se entra solo con ticket de asiento (sin buy-in en efectivo): los tickets se consiguen en los pubs de hold'em socios oficiales de APL · organiza la Korea Holdem Sports Association",
  "wpt-bestbet-scramble": "Main Event US$5.000 / US$1.000.000 GTD",
  "wpt-prime-lodge": "Main Event US$1.100 / US$1.000.000 GTD",
  "wpt-prime-cyprus": "Main Event US$1.100 / US$1.000.000 GTD",
  "wpt-bay-101": "Main Event US$5.300 · formato bounty Shooting Star",
  "wpt-venetian-fall": "Main Event US$5.000 / US$2.000.000 GTD",
  "wpt-prime-cambodia-2027": "Main Event US$1.100 / US$500.000 GTD · primera parada de la temporada 25 del WPT",
  "wpt-cambodia-2027": "Main Event US$3.500 / US$1.000.000 GTD",
  "manila-megastack-warmup": "Megastack Direct Qualifier de ₱5.300 el 26 de nov · ₱450.000 GTD (10 asientos)",
  "manila-december-special": "Pendiente de la aprobación de las autoridades · detalles por anunciar",
  "manila-super-series-25": "Main Event ₱18.500 / ₱10 millones GTD · serie: más de ₱22 millones garantizados",
  "manila-megastack-26": "Main Event ₱45.000 / ₱20 millones GTD · serie: más de ₱52 millones garantizados",
  "manila-megastack-25": "Main Event ₱45.000 / ₱20 millones GTD · serie: más de ₱37,6 millones garantizados",
};

/**
 * de 배지 — 기본은 비워 둔다(2026-09-16부터 오스트리아 6행만 있다). `localizedNote`가 undefined면 보드가 배지를 아예 안 그린다.
 * ⚠ 한국어·영어로 폴백시키지 말 것(독일어 페이지에 다른 언어가 섞인다).
 *   독일 독자에게 의미 있는 배지가 생기면 그때 채운다.
 */
const NOTE_DE: Record<string, string> = {
  // 2026-09-16 queue Q6-c(Q1-10 이행): 오스트리아 대회가 바로 «독일어 독자에게 의미 있는 배지»다(DACH). 6행만 채운다.
  "capt-graz": "Main Event €500+50 (Day 1A–1C, der größte Stack kommt weiter) · CAPT Opening €15.000 GTD · Satellites ab €50+10",
  "capt-seefeld-oct": "Main Event €500+50 · das teurere NLH Unicorn Seefeld (€1.000+100) läuft am 7.–8. Oktober und ist ein Side Event, nicht das Main",
  "capt-bregenz-oct": "Main Event €1.100 · Bodensee Hold'em Trophy €30.000 GTD",
  "capt-innsbruck-nov": "Main Event €1.000+100 – das erste €1.100-Main-Event in Innsbruck",
  "capt-million-baden": "Saisonfinale · Main Event €500+50 / €1.000.000 GTD",
  "pokermania-xl-velden": "Main Event €200+30, der größte Stack kommt weiter · Day 1A–1E in Velden plus ein Starttag am 27. September im Casino Graz · €50.000 GTD · Min-Cash €500 · Mega Satellite ab €30+6",
};

/**
 * id·ms·vi 배지 — **비워 둔다**(2026-09-29 신설 회차 설계). 미등재 = 배지 미표시.
 * ⚠ 한국어·영어로 폴백시키지 말 것. 이 독자에게 의미 있는 배지가 생기면 그때 채운다.
 */
const NOTES: Record<BoardLocale, Record<string, string>> = {
  en: NOTE_EN, ja: NOTE_JA, zh: NOTE_ZH, "zh-hant": NOTE_HANT, es: NOTE_ES, de: NOTE_DE,
  id: {}, ms: {}, vi: {}, pt: {}, tr: {}, hi: {}, ar: {},
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
  if (locale === "vi") return CITY_VI[city] ?? city;
  if (locale === "pt") return CITY_PT[city] ?? city;
  if (locale === "tr") return CITY_TR[city] ?? city;
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
  en: "–", es: "–", de: "–", ja: "〜", zh: "〜", "zh-hant": "〜", id: "–", ms: "–", vi: "–", pt: "–", tr: "–", hi: "–", ar: "–",
};

/**
 * id·vi는 천 단위 구분이 마침표다(1.000.000). 사전에 없는 라틴 값("NT$1,000~NT$25,000")이
 * 쉼표 그대로 나가면 "1,000"이 «1.0»으로 읽힌다 — de는 이걸 값마다 사전으로 막았지만
 * 값이 늘 때마다 새어서, 신설 로케일은 함수로 한 번에 바꾼다. 3자리 묶음 쉼표만 건드린다.
 * ms는 영어식(1,000)이 현지 표기라 대상이 아니다.
 */
const DOT_THOUSANDS = new Set<BoardLocale>(["id", "vi", "pt", "tr"]);
function localizeThousands(v: string, locale: BoardLocale): string {
  if (!DOT_THOUSANDS.has(locale)) return v;
  return v.replace(/\d{1,3}(?:,\d{3})+/g, (m) => m.replace(/,/g, "."));
}

function localizeRangeTilde(v: string, locale: BoardLocale): string {
  // 🔴 2026-09-29: 오른쪽에 A-Z 추가 — «NT$2,500~NT$330,000»·«R$500~R$25,000»·«TWD 2,100~TWD 77,000»이
  //    통화 기호 앞 글자(N·R·T) 때문에 전 로케일에서 물결표 그대로 나가고 있었다.
  return v.replace(/([\d\w])\s*~\s*([\dA-Z$€£¥₩₱₫])/g, `$1${RANGE_DASH[locale]}$2`);
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
    // CJK 회장명의 라틴 표기는 언어와 무관하다 — VENUE_DE를 그대로 쓴다(es·de와 같은 값)
    : locale === "id" ? VENUE_DE[value] ?? FIELD_ID[value]
    : locale === "ms" ? VENUE_DE[value] ?? FIELD_MS[value]
    : locale === "vi" ? VENUE_DE[value] ?? FIELD_VI[value]
    : locale === "pt" ? VENUE_DE[value] ?? FIELD_PT[value]
    : locale === "tr" ? VENUE_DE[value] ?? FIELD_TR[value]
    : locale === "hi" ? VENUE_DE[value] ?? FIELD_HI[value]
    : locale === "ar" ? VENUE_DE[value] ?? FIELD_AR[value]
    : undefined;
  return hit ?? localizeThousands(localizeRangeTilde(value, locale), locale);
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
    "The Asian Poker Tour's autumn 2026 Jeju stop: 135 events with ₩2.2bn guaranteed on the Main Event.",
  "wpt-seoul":
    "The World Poker Tour's first event at the INSPIRE Entertainment Resort — 45 events with ₩1bn guaranteed on the Main Event.",
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
    "APTの2026年秋の済州ストップ。135イベント、メインイベントは22億ウォン保証。",
  "wpt-seoul":
    "WPTがINSPIREエンターテインメントリゾートで初開催する大会。45イベント、メインイベントは10億ウォン保証。",
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
  if (locale === "id" || locale === "ms" || locale === "pt" || locale === "tr") {
    const M = locale === "id" ? MONTH_ID : locale === "ms" ? MONTH_MS : locale === "pt" ? MONTH_PT : MONTH_TR;
    return sm === em ? M[sm - 1] : `${M[sm - 1]}–${M[em - 1]}`;
  }
  if (locale === "vi") {
    return sm === em ? `Tháng ${sm}` : `Tháng ${sm}–${em}`;
  }
  // hi·ar — 월 이름에 통용 축약형이 없다. 온전한 이름을 쓴다.
  if (locale === "hi" || locale === "ar") {
    const M = locale === "hi" ? MONTH_HI : MONTH_AR;
    return sm === em ? M[sm - 1] : `${M[sm - 1]}–${M[em - 1]}`;
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
  /** id·ms — es와 같은 「일 월 연도」, 월 축약은 현지형(Okt·Des / Ogo·Dis). */
  // pt·tr도 같은 「일 월 연도」(13–28 nov 2026 · 15–19 Eki 2026)
  if (locale === "id" || locale === "ms" || locale === "pt" || locale === "tr") {
    const MN = locale === "id" ? MONTH_ID : locale === "ms" ? MONTH_MS : locale === "pt" ? MONTH_PT : MONTH_TR;
    const M = (x: Ymd) => `${x.d} ${MN[x.m - 1]}`;
    if (a.y !== b.y) return `${M(a)} ${a.y} – ${M(b)} ${b.y}`;
    if (a.m !== b.m) return `${M(a)} – ${M(b)} ${a.y}`;
    return `${a.d}–${b.d} ${MN[a.m - 1]} ${a.y}`;
  }
  /** hi·ar — 「일 월 연도」, 월은 온전한 이름(15–19 अक्टूबर 2026 · 15–19 أكتوبر 2026). 숫자는 서양 숫자(ar 코퍼스 실측: 아랍-인도 숫자 0건). */
  if (locale === "hi" || locale === "ar") {
    const MN = locale === "hi" ? MONTH_HI : MONTH_AR;
    const M = (x: Ymd) => `${x.d} ${MN[x.m - 1]}`;
    if (a.y !== b.y) return `${M(a)} ${a.y} – ${M(b)} ${b.y}`;
    if (a.m !== b.m) return `${M(a)} – ${M(b)} ${a.y}`;
    // ar 같은 달 — «16–22 مارس»는 RTL에서 «22–16»으로 보인다(화면 실측 09-30). «من 16 إلى 22 مارس 2026»로 푼다.
    if (locale === "ar") return `من ${a.d} إلى ${b.d} ${MN[a.m - 1]} ${a.y}`;
    return `${a.d}–${b.d} ${MN[a.m - 1]} ${a.y}`;
  }
  /** vi — 「일/월/연도」가 현지 표준(8–19/10/2026). 월 이름 축약을 쓰지 않는다. */
  if (locale === "vi") {
    if (a.y !== b.y) return `${a.d}/${a.m}/${a.y}–${b.d}/${b.m}/${b.y}`;
    if (a.m !== b.m) return `${a.d}/${a.m}–${b.d}/${b.m}/${a.y}`;
    return `${a.d}–${b.d}/${a.m}/${a.y}`;
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
                  : locale === "id"
                    ? SCHEMA_DESC_ID[t.id]
                    : locale === "ms"
                      ? SCHEMA_DESC_MS[t.id]
                      : locale === "vi"
                        ? SCHEMA_DESC_VI[t.id]
                        : locale === "pt"
                          ? SCHEMA_DESC_PT[t.id]
                          : locale === "tr"
                            ? SCHEMA_DESC_TR[t.id]
                            : locale === "hi"
                              ? SCHEMA_DESC_HI[t.id]
                              : locale === "ar"
                                ? SCHEMA_DESC_AR[t.id]
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
  /**
   * id·ms·vi — 자국 개최가 없거나(id·ms) 1건뿐(vi)이다. «이 독자가 실제로 갈 곳» 기준으로
   * 동남아 원정지(PH·KH·VN)를 앞에, 보드에서 아시아 일정이 가장 촘촘한 KR·TW·JP를 뒤에 둔다.
   */
  id: ["PH", "KH", "VN", "KR", "TW", "JP"],
  ms: ["PH", "KH", "VN", "KR", "TW", "JP"],
  vi: ["VN", "KH", "PH", "KR", "TW", "JP"],
  // pt — 브라질(BSOP) 먼저, 이웃 아르헨티나(CAP), 언어권 연결이 있는 스페인. 포르투갈 개최분은 보드에 없다.
  pt: ["BR", "AR", "ES"],
  // tr — 보드의 CY 행은 전부 북키프로스(Girne·Çatalköy). 튀르키예 개최분은 보드에 없다.
  tr: ["CY", "CZ", "ME"],
  // hi — 인도 개최분은 보드에 없다. id·ms와 같은 아시아 원정지 묶음(동남아 먼저, 일정이 촘촘한 KR·TW·JP 뒤).
  hi: ["VN", "KH", "PH", "KR", "TW", "JP"],
  // ar — 아랍권 개최분은 보드에 없다. 지중해 축: 북키프로스(CY 행 전부 Kyrenia·Çatalköy) 먼저, 몰타·스페인·프랑스.
  ar: ["CY", "MT", "ES", "FR"],
};
