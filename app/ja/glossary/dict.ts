// /ja/glossary — ポーカー用語辞典(GlossaryDict · 도구 확장 회차 2 · 2026-10-05)
//
// 정의 출처: lib/posts-ja/holdem-glossary.ts 표·결론 블록·FAQ 문안 축어 재사용.
// - 글 축어 38개 · 번역 8개 (EN 정본 실측 46개 — 브리프의 47은 오기)(Board · Flop · Offsuit · Outs · Preflop · River · SPR · Turn)
//   번역분 표기는 lib/posts-ja 코퍼스 실측(オフスート 52 · SPR 69 · プリフロップ 363 · アウツ)과 translation-terms-ja.md를 따랐다.
// - 축어 항목에서 글의 내부 링크 괄호(「…参照」·「詳しくはこちら」)만 뺐다. 뜻·한정어는 그대로.
//
// seo.title 근거 — DataForSEO google_ads search_volume live(JP·ja · 2026-10-05 · 1회):
//   ポーカー 用語 2,400 · ポーカー 用語 一覧 480 · ポーカー 用語集 210 · ポーカー 専門用語 140 · ポーカー 用語辞典 (데이터 없음)
//   → 앞머리 «ポーカー用語一覧»(헤드텀 2,400 포함 + 一覧 480). 글 seoTitle(«ナッツからカモまで — ポーカー用語集…»)과 다른 문장.
import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_JA: GlossaryDict = {
  sortLocale: "ja-JP",
  grouping: "category",
  seo: {
    title: "ポーカー用語一覧 — 意味をすぐ引けるホールデム用語辞典",
    description:
      "ポーカー用語をキーワードで検索・カテゴリーで絞り込める辞典。ナッツ、アウツ、ポットオッズ、3ベット、Cベット、ICM、SPR、キッカー、ティルトなどテキサスホールデムの基本用語の意味を一覧で。",
    keywords:
      "ポーカー 用語, ポーカー 用語 一覧, ポーカー 用語集, ポーカー 専門用語, テキサスホールデム 用語, ナッツ 意味, アウツ 意味, ポットオッズ, 3ベット, Cベット, ICM, SPR",
    path: "/ja/glossary",
  },
  hero: {
    badge: "♠ {n}語 · キーワード検索",
    h1: "ポーカー用語辞典",
    leadBefore: "テーブルで飛び交うテキサスホールデムの言葉——",
    leadStrong: "ナッツ、アウツ、ポットオッズ、3ベット、ICM",
    leadAfter: "など——の意味をすぐ引けます。キーワード検索かカテゴリーで絞り込んでください。",
  },
  searchPlaceholder: "用語を検索(例:ナッツ、ポットオッズ、アウツ)...",
  allLabel: "すべて",
  cats: {
    Action: "アクション",
    Hand: "役・ハンド",
    Position: "ポジション",
    Math: "計算",
    Board: "ボード・進行",
    Slang: "スラング",
  },
  empty: { title: "「{q}」に一致する用語はありません。", hint: "別のキーワードかカテゴリーで試してください。" },
  related: {
    ariaLabel: "関連ガイド",
    heading: "次に読むなら",
    items: [
      { href: "/ja/blog/texas-holdem-rules-for-beginners", label: "ルールと遊び方", desc: "ブラインド・ショーダウン・基本" },
      { href: "/ja/blog/holdem-hand-rankings", label: "役の強さ", desc: "10の役を強い順に" },
      { href: "/ja/blog/holdem-strategy", label: "戦略", desc: "ポジション・ポットオッズ・ブラフ" },
      { href: "/ja/hand-chart", label: "スターティングハンド", desc: "ポジション別のオープンレンジ" },
      { href: "/ja/calculator", label: "計算ツール", desc: "確率・ポットオッズ・ICM" },
    ],
  },
  terms: [
    { term: "3ベット", cat: "Action", aka: ["3-Bet", "3bet", "スリーベット"], desc: "オープンに対する再レイズ(ブラインドを1つ目と数えて3つ目のベット)。ブラインドが1つ目のベット、オープンレイズが2つ目。だから再レイズが3ベット(最初のレイズではない)。" },
    { term: "オールイン", cat: "Action", aka: ["All-in", "all in"], desc: "持ちチップをすべて賭ける。自分がカバーした分のポットしか取れない。" },
    { term: "アンティ", cat: "Action", aka: ["Ante"], desc: "伝統的にはブラインドとは別に全員が払うポットの種——今のトーナメントの多くは、1席がテーブル全員分を払うビッグブラインドアンティ方式。" },
    { term: "バックドア", cat: "Board", aka: ["Backdoor"], desc: "ターンとリバーの2枚が続けて必要なドロー。" },
    { term: "バッドビート", cat: "Slang", aka: ["Bad Beat"], desc: "圧倒的有利だった側が運のドローに負けること。" },
    { term: "バンクロール", cat: "Slang", aka: ["Bankroll"], desc: "ポーカー全体のために取り分けたお金——テーブルの上のチップではない。" },
    { term: "ブラインド", cat: "Action", aka: ["Blinds", "Blind", "SB", "BB"], desc: "アクションを起こすSB/BBの強制ベット——ステークスのレベルを指す言葉でもある。" },
    { term: "ブラフ", cat: "Action", aka: ["Bluff"], desc: "ブラフは弱い手でベットして上の手を降ろす。" },
    { term: "ボード", cat: "Board", aka: ["Board", "ウェット", "ドライ"], desc: "テーブル中央の共有カード。ドローが多く危険なボードを「ウェット」、ドローが少ないボードを「ドライ」と呼ぶ。" },
    { term: "ボタン(BTN)", cat: "Position", aka: ["Button", "BTN", "ディーラーボタン"], desc: "ディーラーの位置。フロップ以降は最後にアクション——テーブルで最高の席。" },
    { term: "コール", cat: "Action", aka: ["Call"], desc: "今のベットに額を合わせてハンドに残る。" },
    { term: "チェック", cat: "Action", aka: ["Check"], desc: "ベットせずにアクションを回す——自分が追加で合わせるベット額がないときだけ可能。" },
    { term: "チェックレイズ", cat: "Action", aka: ["Check-Raise", "check raise"], desc: "チェックしてから、相手がベットした後にレイズする——強く、相手を欺くライン(現代のルームでは合法)。" },
    { term: "Cベット(コンティニュエーションベット)", cat: "Action", aka: ["Continuation Bet", "C-Bet", "cbet", "コンティニュエーションベット"], desc: "プリフロップでレイズした人がフロップで打つ「コンティニュエーションベット」。" },
    { term: "クーラー", cat: "Slang", aka: ["Cooler"], desc: "降りるには強すぎる手が、さらに上の手にぶつかった(厳密な意味では、入れた時点で負けていた)。" },
    { term: "ドロー", cat: "Hand", aka: ["Draw", "フラッシュドロー", "ストレートドロー"], desc: "伸びれば完成する手——例えばフラッシュドロー(フラッシュまであと1枚)やストレートドロー。" },
    { term: "エクイティ", cat: "Math", aka: ["Equity"], desc: "今この時点でポットを取る自分の取り分(%)。" },
    { term: "フロップ", cat: "Board", aka: ["Flop"], desc: "同時に配られる最初の共有カード3枚。その後に2回目のベッティングラウンドが行われる。" },
    { term: "フォールド", cat: "Action", aka: ["Fold"], desc: "手を捨て、ポットへの権利も放棄する。" },
    { term: "GTO", cat: "Math", aka: ["Game Theory Optimal", "ゲーム理論最適"], desc: "ゲーム理論最適——ソルバーが導く、崩されないバランスの取れた戦略。" },
    { term: "ガットショット", cat: "Hand", aka: ["Gutshot", "ガット", "インサイドストレートドロー"], desc: "真ん中の数字1枚を待つインサイドストレートドロー(4アウツ)。たとえば 5-6-8-9 を持っていて 7 だけを待つ形で。" },
    { term: "レンジ(ハンドレンジ)", cat: "Math", aka: ["Hand Range", "Range"], desc: "ある場面でプレイヤーが持ちうる手のすべて。上級者は単一の手ではなくレンジで考える。" },
    { term: "ICM", cat: "Math", aka: ["Independent Chip Model", "独立チップモデル"], desc: "独立チップモデル——トーナメントのチップを実際のお金のエクイティに換算する。バブルやファイナルテーブルで特に重要。" },
    { term: "キッカー", cat: "Hand", aka: ["Kicker"], desc: "同じ役同士で勝敗を決めるサイドカード(それも同じなら引き分け)。" },
    { term: "リンプ", cat: "Action", aka: ["Limp"], desc: "プリフロップでレイズせずビッグブラインドにコールだけして入ること——たいていは弱く受け身なプレー。" },
    { term: "ナッツ", cat: "Hand", aka: ["Nuts"], desc: "今のボードで作れる最強の手(後のストリートで変わりうる)。" },
    { term: "オフスート", cat: "Hand", aka: ["Offsuit", "オフスーツ"], desc: "スートが異なる2枚(例:A♠K♦)。フラッシュになる可能性がずっと低いため、同じ組み合わせのスーテッドよりわずかに弱い。" },
    { term: "アウツ", cat: "Math", aka: ["Outs", "アウト"], desc: "デッキに残っていて、自分を勝ち手に引き上げるカード。フラッシュドローは9アウツ、オープンエンドのストレートドローは8アウツ。" },
    { term: "オーバーペア", cat: "Hand", aka: ["Overpair"], desc: "ボードのどのカードより高いポケットペア。" },
    { term: "ポジション", cat: "Position", aka: ["Position", "インポジション", "アウトオブポジション"], desc: "ポジションは「何番目に動くか」。後ろの人ほど相手の情報を見て決められます。" },
    { term: "ポット", cat: "Board", aka: ["Pot"], desc: "争っているチップの総額。" },
    { term: "ポットオッズ", cat: "Math", aka: ["Pot Odds"], desc: "コールにかかる額に対するポットの比率。" },
    { term: "プリフロップ", cat: "Board", aka: ["Preflop", "Pre-flop"], desc: "共有カードが1枚も出る前の最初のベッティングラウンド。各プレイヤーの手元にはホールカード2枚だけがある。" },
    { term: "レーキ", cat: "Slang", aka: ["Rake"], desc: "ハウスが取る手数料。キャッシュゲームではほとんどのポットから、トーナメントではバイインに含まれる。" },
    { term: "レイズ", cat: "Action", aka: ["Raise"], desc: "今のベットを引き上げ、相手にさらに額を合わせるか降りるかを迫る。" },
    { term: "リバー", cat: "Board", aka: ["River"], desc: "5枚目にして最後の共有カード。その後、ショーダウン前の最後のベッティングラウンドが行われる。" },
    { term: "セミブラフ", cat: "Action", aka: ["Semi-Bluff", "semi bluff"], desc: "ブラフは弱い手でベットして上の手を降ろす。セミブラフはまだ伸びるドローで同じことをやる。" },
    { term: "セット", cat: "Hand", aka: ["Set"], desc: "ポケットペア + ボード1枚のスリーカード(よく隠れる)。" },
    { term: "ショーダウン", cat: "Board", aka: ["Showdown"], desc: "最後のベットの後に手を見せて勝者を決めること。" },
    { term: "SPR", cat: "Math", aka: ["Stack-to-Pot Ratio", "スタック・トゥ・ポット・レシオ"], desc: "スタック・トゥ・ポット・レシオ——有効スタック ÷ ポット。SPRが低いと強いメイドハンドでコミットするのが有利になり、高いとドローやフロップ以降の技術が報われる。" },
    { term: "スタック", cat: "Slang", aka: ["Stack", "ディープスタック", "ショートスタック"], desc: "プレイヤーの前にあるチップ。" },
    { term: "ティルト", cat: "Slang", aka: ["Tilt"], desc: "たいてい負けの後に出る、感情に流された下手なプレー。" },
    { term: "トリップス", cat: "Hand", aka: ["Trips"], desc: "手札1枚 + ボードのペアのスリーカード(キッカー負けしやすい)。" },
    { term: "ターン", cat: "Board", aka: ["Turn"], desc: "フロップの後に配られる4枚目の共有カード。その後に独自のベッティングラウンドが続く。" },
    { term: "バリューベット", cat: "Action", aka: ["Value Bet"], desc: "強い手で、弱い手からコールをもらうことを狙ったベット。" },
    { term: "ホイール", cat: "Hand", aka: ["Wheel"], desc: "A-2-3-4-5 のストレート、最も低いストレート(エースを低く使う)。" },
  ],
};
