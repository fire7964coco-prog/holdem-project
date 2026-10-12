"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 일본어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx`. 구조·분기·숫자는 EN과 같고 문자열만 일본어다(§13).
 * 용어 출처 = docs/translation-terms-ja.md · app/ja/calculator/dict.ts(エクイティ·必要勝率·アウツ·引き分け) ·
 *   app/ja/solver(「フロップスタディ」 축어) · lib/posts-ja 코퍼스(6max 43 · 9max 29 · ドローイングデッド).
 * 헤드텀 실측(DataForSEO Google Ads · Japan/ja · 2026-10-12):
 *   「ポーカー 勝率」 590 · 「ポーカー 練習 アプリ」 260 · 「ポーカー 練習」 170 ·
 *   「ポーカー シミュレーター」 20 · 「ポーカー トレーニング」 20 · 「ポーカー 勝率 シミュレーター」·「ポットオッズ 練習」·「ホールデム 練習」 = 데이터 없음.
 *   → 「ポーカー 勝率 計算」은 /ja/calculator 소유라 제목 머리는 «練習・シミュレーター» 축으로 잡았다.
 */

// 족보명 = translation-terms-ja.md 하우스 스타일(スリーカード·フォーカード 등 カタカナ)
const JA_NAMES: HandNames = {
  categories: ["ハイカード", "ワンペア", "ツーペア", "スリーカード", "ストレート", "フラッシュ", "フルハウス", "フォーカード", "ストレートフラッシュ"],
  drawingDead: "ドローイングデッド",
  flushDraw: "フラッシュドロー",
  straightDraw: "ストレートドロー",
};

const JA_UI: QuizUI = {
  names: JA_NAMES,
  streets: ["プリフロップ", "フロップ", "ターン", "リバー"],
  hero: "あなた",
  folded: "フォールド",
  raise: "レイズ",
  call: "コール",
  check: "チェック",
  tableNote: "6max・9maxテーブル · フロップを見る人数(2〜6人)を選べます",
  playersBtn: (n) => `${n}人`,
  playersLabel: "人数",
  tableBtn: (n) => `${n}max`,
  styleLabel: "相手のタイプ",
  styleNames: { standard: "標準", tight: "タイト", loose: "ルース", aggressive: "攻撃型" },
  loading: "シャッフルして計算しています…",

  myEquity: "あなたの勝率",
  vsOpponents: (n) => (n === 0 ? "相手なし" : `相手${n}人に対して`),
  basisSeat: "ポジション別レンジに対して",
  basisRange: "アクションに合うハンドに対して",
  roleOpen: "オープン",
  roleDefend: "ディフェンド",
  winShort: "勝ち",
  tieShort: "引き分け",
  loseShort: "負け",
  revealedLabel: "👀 見えている相手のハンドに対して",
  revealedNote: (gap) =>
    `上の数字は相手のカードが見えない前提で出しているので、${gap}%pの差があります。実際の判断に使うのは上の数字です。`,

  potOddsTitle: "ポットオッズ — コールで損をしないために必要な勝率",
  potLabel: "ポット",
  potBeforeLabel: "ポット(ベット前)",
  toCallLabel: "コール額",
  requiredLabel: "必要勝率",
  noBet: "誰もベットしていません。次のカードは無料で見られます。",
  verdictCall: "コール",
  verdictFold: "フォールド",
  impliedNote: "ただし、役が完成したときにさらにチップを取れる見込み(インプライドオッズ)があれば、コールが正解になることもあります。",

  revealBtn: (next) => `${next}を配る →`,
  newHandBtn: "新しいハンドを配る 🔄",
  showCards: "👀 相手のカードを見る",
  hideCards: "🙈 相手のカードを隠す",

  wonByFold: (pot) => `全員フォールド — ${pot.toLocaleString()}のポットを獲得`,
  splitLabel: (names) => `スプリット — ${names.join("・")}が引き分け`,
  winLabel: (name, cat) => `${name}の勝ち · ${cat}`,

  reviewTitle: "📋 振り返り — どこで降りるべきだった？",
  reviewCols: ["ストリート", "あなたの勝率", "必要勝率", "判定"],
  reviewNoMistake: "✅ 最後までコールで正解でした。",
  reviewMistake: (street) => `⚠️ ${street}の時点で、すでにフォールドが正解でした。ここが降りどきでした。`,
  reviewInvested: (invested, pot) => `投入額 ${invested.toLocaleString()} · 最終ポット ${pot.toLocaleString()}`,

  formulaTitle: "📐 この数字の出どころ",
  outsLabel: (n) => `役が完成・改善するカード ${n}枚`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `フラッシュ ${o.flush}枚` : "",
      o.straight > 0 ? `ストレート ${o.straight}枚` : "",
      o.set > 0 ? `セット・トリップス ${o.set}枚` : "",
      o.twoPair > 0 ? `ツーペア ${o.twoPair}枚` : "",
      o.over > 0 ? `オーバーカードのペア ${o.over}枚` : "",
      both > 0 ? `うち${both}枚は2つに重複(1回だけ数える)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "このどれかのカードが落ちる確率(早見計算)",
  winLabel2: "ポットを取る確率(シミュレーション)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "この2つは測っているものが違います。上は役が「完成する」確率、下はポットに「勝つ」確率です。完成しても相手がさらに強くなれば負けますし、外れても勝つことがあります。判定には下の数字を使います。",
  noDrawNote: (basis, n) =>
    basis === "seat"
      ? `プリフロップなので、「アウツ×2/4」の早見計算はまだ使えません。上の勝率は、各相手がそのポジションから参加しそうなハンドを相手に${n}回シミュレーションした結果です。`
      : `フラッシュドローもストレートドローもなく、セット・ツーペア・オーバーカードのペアへと役が一段上がるカードもないため、ここでは「アウツ×2/4」の早見計算は使えません。上の勝率は、見えたアクションに合うすべてのハンドを相手に${n}回シミュレーションした結果です。`,
  chartTitle: "📈 ストリートごとの勝率 — 全員のカードを公開",
  resultTabs: ["📋 振り返り", "📈 勝率の推移", "🃏 確率"],
  solverTitle: "このスポットをGTOソルバーで見る",
  solverOpen: "ソルバーのフロップスタディで開く",
  solverNote: (info) => {
    const gto = "表示されるのは両者がGTOでプレイしたときのフロップ戦略です(事前計算した結果 · 6max 100bb · フロップのみ)。そのため、レンジ・ベットサイズ・相手のルールはこのシミュレーターとは異なります。";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener}オープン · ${info.caller}コール · フロップ ${info.flop.map((c) => c.rank + c.suit).join("")} — ソルバーのフロップスタディで同じポジション・同じフロップを開きます。${gto}`
          : `${info.opener}オープン · ${info.caller}コール — このハンドはフロップ前に終わったので、ポジションの組み合わせだけを開きます。フロップ3枚はソルバーで選んでください。${gto}`;
      case "notReady":
        return `${info.opener}オープン · ${info.caller}コールは、ソルバーのフロップスタディでまだ事前計算していません。近いポジションの組み合わせを選ぶか、ソルバーで自分で計算してください。`;
      case "multiway":
        return `このフロップは${info.players}人で見ました。ソルバーの事前計算結果はヘッズアップのポットだけなので、このハンドはそのままでは開けません — フロップスタディで相手1人との組み合わせを選んでください。`;
      case "table9":
        return "ソルバーの事前計算結果は6maxテーブル用なので、9maxのハンドはそのままでは開けません — フロップスタディで一番近いポジションの組み合わせを選んでください。";
    }
  },
  solverLang: "ja",
  chartRangeLegend: "画面で見た勝率",
  chartNote: "実線は全員のハンドを公開したときの各席の勝率、点線は相手のカードを知らずに画面で見ていた勝率です。フォールドしたプレイヤーの線は、フォールドする前のストリートまで描かれます。",
  quizToggle: "🎯 クイズ",
  quizGuessTitle: "あなたの勝率は？",
  quizGuessHint: "スライダーで予想を合わせてください",
  quizSubmit: "答え合わせ",
  quizCallSubmit: "コール → 判定",
  quizFoldSubmit: "フォールド → 判定",
  quizResult: (guess, err, points) => `予想 ${guess}% · 誤差 ${err}%p · ${points}点`,
  quizChoiceResult: (ok, verdict) => (ok ? `正解(${verdict})` : `不正解 — 正解は${verdict}`),
  quizStats: (s) => `${s.hands}ハンド · 平均誤差 ${s.avgErr}%p · 判断 ${s.hits}/${s.decisions}正解 · ${s.points.toLocaleString()}点`,
  quizReset: "リセット",
  quizResetConfirm: "このブラウザに保存されたクイズの記録を消去しますか？元に戻せません。",
  quizInvite: "ログインすると記録がアカウントに保存され、スマホでもPCでも見られます。",
  quizInviteLink: "ログイン",
  quizGuessCol: "予想",
  quizChoiceCol: "選択",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `このハンド:平均誤差 ${avgErr}%p${decisions > 0 ? ` · 判断 ${hits}/${decisions}正解` : ""} · ${points}点`,
  quizGuessLegend: "あなたの予想",
  customToggle: "✍️ ハンド設定",
  customTitle: "ハンドを設定 — 実際にプレイしたハンドを再現",
  customHint: "枠をタップしてから、下のカードを選んでください。空いた枠はランダムに配られ、相手のハンドはこれまでどおりポジション別レンジから配られます。",
  customPos: "あなたのポジション",
  customRandom: "ランダム",
  customHero: "あなたのハンド",
  customBoard: "ボード",
  customBoardSlots: ["フロップ", "フロップ", "フロップ", "ターン", "リバー"],
  customStart: "このハンドを配る →",
  customClear: "すべてクリア",
  customClose: "閉じる",
  customOff: "ランダムなハンドに戻る",
  customActive: "設定したハンド · 次のハンドも選んだカードのまま配ります",
  customEdit: "編集",

  ruleTitle: "このシミュレーターの前提",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">相手は下のルールどおりにしか動きません。</b>実際のプレイヤーはこう打ちません —
        ポジション、相手、スタックの深さ、テーブルイメージで判断はがらりと変わります。物理の問題でいう「摩擦はないものとする」と同じ、あくまで仮定です。
      </p>
      <p className="mb-1">
        いまの相手のタイプ:<b className="text-foreground">{JA_UI.styleNames[style]}</b>(テーブル全員が同じタイプ · 上の選択欄で変更できます)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>ツーペア以上 → <b className="text-foreground">{style === "aggressive" ? "ポットの150%のレイズ(オーバーベット)" : "ポットサイズのレイズ"}</b></li>
        {style === "standard" && <li>ワンペア、またはフラッシュ/ストレートドロー → <b className="text-foreground">ハーフポットのベット</b></li>}
        {style === "tight" && <>
          <li>ホールカードで作ったトップペア以上のワンペア(オーバーペアを含む)、またはフラッシュ/ストレートドロー → <b className="text-foreground">ハーフポットのベット</b></li>
          <li>それより弱いペア(ボードだけでできたペアを含む) → <b className="text-foreground">フォールド</b></li>
        </>}
        {style === "loose" && <li>ワンペア、フラッシュ/ストレートドロー、またはボードのどのカードよりも高いホールカード(オーバーカード) → <b className="text-foreground">ハーフポットのベット</b></li>}
        {style === "aggressive" && <>
          <li>フラッシュ/ストレートドロー → <b className="text-foreground">レイズ(セミブラフ)</b></li>
          <li>ワンペア → <b className="text-foreground">ハーフポットのベット</b></li>
          <li>ペアもドローもないがオーバーカードがある → <b className="text-foreground">レイズ(ブラフ)</b></li>
        </>}
        <li>それ以外 → <b className="text-foreground">フォールド</b>(ライブと同じくカードは伏せたまま捨てます)</li>
      </ul>
      <p className="mb-2">
        ルールは上の行から順に見て、最初に当てはまる行に従います。ドローは、フロップかターンでホールカードを1枚以上使った4枚のフラッシュ/ストレートの形だけを数えます(リバーにドローはありません)。
        {style === "aggressive" && "攻撃型のレイズは、セミブラフやブラフも含めてすべてポットの150%です。"}
        誰かがレイズすると、残っている全員がそのレイズ額をコールし、残りスタックを超えるベットはオールインで打ち止めです。チェックレイズはありません — 各相手はストリートごとにルールどおり1回だけアクションし、チェックしたあとにもう一度応じる手順がないためです。あなたはベットせず、リバーまでコールするだけです。プリフロップのレンジ(下記)はタイプに関係なく同じです。
      </p>
      <p className="mb-2">
        <b className="text-foreground">あなたの勝率は、相手のカードが見えない前提で計算しています。</b>フロップ以降の各相手のレンジは、ポジション別のプリフロップレンジ(下記)のうち、選んだタイプのルールで画面上のアクションを取るハンドだけです
        — 標準タイプの相手がレイズすればツーペア以上だけが残り、攻撃型の相手ならドローやオーバーカードのブラフも残ります。画面でフォールドしたプレイヤーも計算から外れます。
      </p>
      <p className="mb-2">
        <b className="text-foreground">相手のプリフロップのハンドは、ポジション別レンジから配られます。</b>ポットに参加したプレイヤーのうち、プリフロップで最初に行動する人をオープンした側、それ以外の全員をそのオープンにコールか3ベットでディフェンドした側として扱います(オープンレンジ · ディフェンドレンジ)。レンジは複数の公開資料を突き合わせた
        6max 100bbキャッシュの一般的なレンジで、境界のハンドは25/50/75%の割合で混ぜています。表がない組み合わせ(UTGオープンに対する
        HJ · UTG・HJ・COオープンに対するSB)と3人目以降は、いちばん近いディフェンド表で代用します。9人用の表はないため、
        9maxテーブルではUTG・UTG+1・UTG+2・LJが6maxのUTG表を、それ以外の席は6maxの同じ名前の表を使います(前のほうの席が別の前の席のオープンをディフェンドする場合や、HJがディフェンドする場合はCO vs UTGの表を使用)— そのため9maxの最初の3席は実際より広めになります。ランダムなのはあなたのハンドだけで(自分で設定した場合を除く)、どんな2枚でもリバーまでプレイできます。3ベットがあってもポットの大きさは変わりません(簡略化)。
      </p>
      <p className="mb-2">
        <b className="text-foreground">判定は純粋にポットオッズだけで決めています。</b>インプライドオッズは含まず、相手の傾向やブラフは、選んだタイプのルールの範囲でしかレンジに反映されません。特にドローは、ポットオッズだけではわずかに足りなくてもコールが正当化されることがよくあります。
      </p>
      <p>
        全員がアンティ{ANTE}を払い、スタック{STACK.toLocaleString()}から始めます。あなたはフォールドしません — リバーまで見て振り返るための仕様です。勝率はサンプル数を固定したシミュレーションによる推定値で、プリフロップは{" "}
        <b className="text-foreground">{SAMPLES.preflop.toLocaleString()}回</b>、フロップ以降は{" "}
        <b className="text-foreground">{SAMPLES.postflop.toLocaleString()}回</b>です(標準誤差はおよそ0.25〜0.35%p)。ハンドごとに乱数のシードを固定しているので、同じハンドならどの端末でも同じ数字が出ます。引き分けはポットを分け合う人数で割ります(2人の引き分けなら半分ずつ)。
      </p>
      <p className="mt-2">
        <b className="text-foreground">相手のカードを見ると</b>、全員のハンドが分かった状態での各席の勝率が表示されます。フロップ以降は残りのカードをすべて数えて正確に計算し(プリフロップだけは{SAMPLES.known.toLocaleString()}回のシミュレーション)、画面の勝率やコール/フォールドの判定には一切使いません — 実際のテーブルでは知り得ない情報だからです。
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 クイズをオンにすると</b>、各ストリートで自分の勝率を予想するまで勝率と判定が隠れます。誰かがベットしたストリートでは、コールかフォールドも選びます。正解は上の「あなたの勝率」(相手のカードが見えない前提の数字)で、予想ごとの得点は<b className="text-foreground">100 − 4 × 誤差(%p)</b>
        (25%p以上ずれると0点)です。コール/フォールドの選択は、ポットオッズの判定と一致すれば正解です。通算の記録はこのブラウザに残り、ログインしていればアカウントにも保存されるので、ほかの端末でも続きから見られます
        (カードとボードは保存しません)。
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ ハンド設定</b>では、自分のポジション・ハンド・ボードを選んで、実際にプレイしたハンドを再現できます。空いた枠はランダムに配られます。相手のカードは選べません — 実際のテーブルでも分からないので、これまでどおりポジション別レンジから配られ、画面の勝率も「相手のカードは分からない」という同じ前提のままです。ボードを先に決めていても、各ストリートの勝率はその時点までに配られたカードだけで計算します。同じハンドを繰り返すと答えを覚えられてしまうため、設定したハンドはクイズの記録に加えません。
      </p>
    </>
  ),
  footer: (
    <>
      計算の仕組みを知りたい方へ:{" "}
      <a href="/ja/blog/holdem-pot-odds" className="text-primary underline">ポットオッズの計算方法 →</a>
      {" · "}
      <a href="/ja/blog/holdem-position-play" className="text-primary underline">ポジションが大事な理由</a>
      {" · "}
      <a href="/ja/calculator" className="text-primary underline">ポーカー勝率計算機</a>
    </>
  ),
};

export default function WinRateQuizClientJa() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">勝率シミュレーター 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">相手のカードは見えないまま — どこで降りるべきだったかが分かる</p>
      </div>
      <WinRateSimulator ui={JA_UI} />
    </div>
  );
}
