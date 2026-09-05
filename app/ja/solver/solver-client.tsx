"use client";

import Link from "next/link";
import { SOLVER_FAQ_JA } from "./faq";

/**
 * ★CTA는 `?lang=ja`로 보낸다. 솔버가 이 파라미터를 읽어 `localStorage['solver.locale']='ja'`로
 *   기억한다. **2026-08-21 라이브 확인** — `?lang=ja`로 열면 `<html lang="ja">`가 되고
 *   화면 전체가 일본어로 뜬다(Playwright DOM 실측).
 *   한국어·영어 랜딩과 같이 **UTM은 붙이지 않는다**(기존 관례).
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=ja";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/ja/solver` 랜딩 — ★2026-08-21 신설
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다(2026-08-21 meta 직접 확인).
 *   검색 노출은 이 랜딩이 받아 본체로 흘려보낸다 — **일본어권에 그 진입로가 0개였다.**
 *
 * ▶ 키워드 근거 (2026-08-21 실측 · 라쿠 MCP `suggest-keywords` google/일본어):
 *     **ポーカー gto 880**(SEO난이도 34 · 이 판의 헤드텀) · ポーカー gtoアプリ 110 ·
 *     ポーカー gtoツール 90→70 · **ポーカー gtoツール 無料 50** ·
 *     🔴 2026-08-23 정정(M-035 축B) — 초판의 「난이도 24 = 이 판 유일한 低」는 **재현되지 않았다**
 *        (재실측 34 · 12개월 −31%). `ポーカー gto`는 반대로 34→**22**다. 난이도로 순서를 세우지 마라.
 *     **ポーカー 練習 アプリ 390** · ポーカー 練習 サイト 140 · ポーカー 練習 210 ·
 *     ポーカー gto 意味ない **70** · ポーカー gto 勉強法 70 · ポーカー gto アプリ 無料 40
 *   🪶 인접(브랜드, 직접 조준 금지): ポーカー gto wizard 30 · gtowizard 30 · gtoウィザード 20
 *   전체 수확·판정은 `docs/keyword-bank/ja-gto-solver.md`.
 *
 * ▶ SERP 실측으로 잡은 이 페이지의 «이길 자리» (2026-08-21 · 라쿠 순위체크 API로 6쿼리
 *   top-30 전수 + 상위 20페이지 firecrawl 원문 스크랩. 상세는 뱅크 §3)
 *   ① 🔴 **6쿼리 top-10 = 60슬롯 전부에서 «본문에서 바로 돌아가는 솔버»를 주는 곳이 0개다.**
 *      전부 «설명 글»이거나 앱스토어 리스팅이다(도구 쿼리 top-10의 6/20이 App Store·Google Play).
 *      일본어로 **무료·무가입·브라우저에서 포스트플랍까지 가는 솔버는 top-30에 존재하지 않는다.**
 *      가장 가까운 것들도 전부 어긋난다 — PocketSolver는 **다운로드 앱**이고,
 *      POKER Q'z·FreeBetRange는 **프리플랍 전용**이다.
 *   ② 🔴 **「無料」는 이미 포화다.** `ポーカー GTOツール 無料` top-10 중 **6개가 제목에 「無料」**를
 *      달고 있다. 차별화어는 **「登録不要・インストール不要」** — 이걸 표방하는 일본어 페이지가
 *      top-30에 사실상 없다.
 *   ③ 🔴 **일본 포커 SEO의 1위 도메인은 note.com이다** — 6쿼리 전부에서 10슬롯, 3쿼리에서 1위.
 *      상대는 SEO가 아니라 **저자 권위**로 이긴다(Amu·KuZ·ヨコサワ 등). 도구만 던지면 무명으로 취급된다.
 *   ④ 🪶 top-10에 **FAQ 스키마를 실은 글이 3개뿐**이고, 그 3개가 각각 2~4개 쿼리에 걸쳐 랭크한다.
 *   🪶 우선 노릴 쿼리 = **`ポーカー GTOツール 無料`(50 · SD 24)** — 도구 페이지가 정면으로 답이 되는
 *      유일한 쿼리이고 현재 top-10이 전부 «앱 소개 글»이라 도구 자체로는 비어 있다.
 *      `ポーカー gto`(880)는 note + GTO Wizard 공식 일본어 LP가 굳어 있어 **장기전**으로 둔다.
 *
 * 🔴🔴 **「GTO」를 단독으로 쓰지 마라 — 반드시 「ポーカー」나 「ソルバー」와 붙여라.**
 *   동음이의 함정이 «실증»됐다: 조사 중 비ASCII 토큰이 떨어지자 즉시
 *   **反町隆史 주연 드라마 『GTO』 SERP**가 나왔다(2026년 7월기 방영 중).
 *   `market-profile/ja.md` §B-6이 경고한 «`ジーティーオー`=드라마» 함정의 실물이다.
 *   🪶 SERP 전체에서 `ジーティーオー` 표기는 **0건** — 전부 라틴 `GTO`다. 라틴 표기는 유지한다.
 *
 * 🔴 **「ソルバー」는 일본어권에서 죽은 표기다 — 제목·H1·H2에 쓰지 마라.**
 *   `ソルバー ポーカー` **40** 대 `ポーカー gto` **880** = **22배**.
 *   質問 DB도 「ポーカー ソルバー」는 **1건**(相対需要 1)인데 「GTO ポーカー」는 **34건**이다.
 *   ✅ 다만 **본문 용어로는 `ソルバー`가 정본**이다 — 자사 ja 포스트 10편이 전부 그렇게 쓴다.
 *   **두 층을 섞지 마라**: 검색 축(제목·H2) = GTO / 본문 설명 = ソルバー.
 *
 * 🔴 **일본은 「ツール」보다 「アプリ」가 크다**(110 대 90). EN "tool"을 그대로 옮기면 작은 쪽을 잡는다.
 *
 * 🔴🔴 카니발 방지 — **ja는 EN·KO와 «가진 것»이 다르다. 여기서 그대로 옮기면 404가 난다.**
 *   · **`/ja/hand-chart`·`/ja/calculator`·`/ja/win-rate-quiz`는 존재하지 않는다.**
 *     `app/ja/`에 있는 것은 `blog`·`tournaments`·`page.tsx` 셋뿐이다(2026-08-21 확인).
 *     → EN이 거는 도구 링크 3종을 **전부 ja 블로그 글로 갈았다.** 링크 대상은 전건
 *        `lib/posts-ja/<slug>.ts` 파일 존재 + `index.ts` 등록 **양쪽으로 확인**했다.
 *   · **프리플랍 레인지 표는 `ja/holdem-starting-hands-chart`가 이미 소유한다** —
 *     `ポーカー レンジ表` **1,600**(이 판에서 가장 큰 키워드)이 그쪽 자리다. 그 글은
 *     seoTitle에 「スターティングハンド表とレンジ」, H2에 「ハンドレンジ表の覚え方」와
 *     **「GTOプリフロップチャート vs 初心者用チャート」**를 이미 갖고 있다.
 *     🔴 **`レンジ表`·`スターティングハンド`·`プリフロップチャート`를 제목·H2에 쓰지 마라.**
 *        본문에서 「ソルバーが出力するレンジ表」로만 언급하고 그 글로 넘긴다.
 *        (`/hands` 색인 사건과 같은 규율 — **실측된 성과를 가설에 걸지 않는다.**)
 *   · 「GTOとは」 순수 정의 = `ja/holdem-strategy`의 FAQ 「Q. GTOポーカーとは何ですか?」가 소유.
 *     → 이 랜딩의 H2는 **「GTOツールとは」(도구)**로 좁혔다. 質問 DB에 그 형태가 실재한다
 *        (`ポーカーのgtoツールとは?`).
 *   🟢 **랜딩이 가져가도 되는 축은 전수 grep으로 미소유를 확인했다**(ja 43편):
 *      `GTOツール` 0편 · `練習アプリ` 0편 · `意味ない` 0편 · `ポストフロップ`이 주제인 글 0편.
 *
 * 🔴 사실 출처 — 전부 2026-08-21에 `?lang=ja`로 열어 DOM에서 직접 읽었다(축어):
 *   · 사이드바 5단계 «① OOPレンジ ② IPレンジ ③ ボード ④ ベットサイズ ⑤ ソルバーを実行»
 *   · 네비 «学習スポット ⚡ 計算済み» «GTOトレーナー EV採点» «プリフロップ レンジ表»
 *     «エクイティ計算機 勝率» «カスタムスポット・自分で計算»
 *   · 히어로 «GTO戦略を、ブラウザですぐに。» / «インストールも支払いも不要です。»
 *   · 특징 4블록 «無料 / 回数制限なく全機能を利用できます» «オフライン学習 /
 *     ホーム画面に追加すればインターネットなしでも学習できます» «高速計算 /
 *     マルチスレッドでデスクトップソルバー級» «GTOトレーナー / 問題を解いてEVロスで採点»
 *   · 고지 «iOS・Safariではブラウザの制約によりシングルスレッドで動作するため、計算が遅くなります
 *     — macOSではChromeを推奨します。使用可能なメモリは4GBに制限されており（WebAssemblyの上限）»
 *   · 학습 스팟 **13개**(3그룹 7+3+3) · 그룹 조건 «ポット 5.5bb · スタック 97.5bb» /
 *     «ポット 22.5bb · スタック 89bb» / «ポット 6bb · スタック 97bb»
 *   · 꼬리말 «レンジは100bbオンライン標準の近似値です。»
 *   §13 산수 검산(EN 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5.5 = 2.5+2.5+0.5, 스택 100−2.5 = 97.5 ·
 *     3벳팟 22.5 = 11+11+0.5, 100−11 = 89, SPR 89÷22.5 ≈ 4.0 ·
 *     블라인드전 6 = 3+3, 100−3 = 97 ·
 *     5.5×0.35% = 0.019 ≈ 0.02bb, 5.5×1% = 0.055 ≈ 0.06bb ·
 *     22.5×0.35% = 0.079 ≈ 0.08bb, 22.5×1% = 0.225 ≈ 0.23bb
 *
 * 🔴 **트레이너 채점은 «팟 대비 비율»이다. 절대 bb로 되돌리지 마라.**
 *   앱이 2026-08-15에 바꿨고 KO·EN 랜딩도 같은 날 함께 고쳤다.
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
 *   오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접 계산은
 *   계산 엔진을 한 번 내려받은 뒤에만 돈다(KO·EN 주석과 같은 경고).
 *
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 이것이 정상이다.**
 *   GTO 시리즈 13편은 **KO·EN에만 있고 ja에는 없다**(ja 43편에 해당 slug 0건).
 *   **없는 링크를 미리 걸지 마라 — 404는 색인에 남는다.**
 *   ja판이 발행되면 그때 `slug`를 채운다(EN이 `SPOT_GROUPS`에 slug를 채우는 방식과 동일).
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["料金", "無料 — 全機能、回数制限なし"],
  ["インストール", "不要 — ブラウザで動作（WebAssembly）"],
  ["アカウント", "不要（ログインはトレーナー履歴の同期のみ）"],
  ["対応範囲", "ポストフロップ・ヘッズアップ（フロップ／ターン／リバー）"],
  ["計算する場所", "サーバーではなく、お使いの端末のCPU"],
  ["対応環境", "モダンブラウザ全般 — Windows・macOS・Linux・スマホ"],
  // 🔴 M-035 결함4 정정(2026-08-23) — 초판은 中国語를 빠뜨렸다. 앱 언어 셀렉터는 **8개**
  //    (`ko en ja es pt de zh zh-hant`)이고 简体·繁體 둘 다 있다(2026-08-23 라이브 실측).
  // ★2026-08-24 갱신 — 앱이 fr을 배포해 셀렉터가 9개가 됐다(フランス語 추가).
  // ★2026-09-05 갱신 — 앱이 id·ms를 배포해 셀렉터가 11개가 됐다(라이브 실측 · ③ 마감 회차).
  ["表示言語", "日本語（韓国語・英語・スペイン語・ポルトガル語・ドイツ語・フランス語・中国語・インドネシア語・マレー語に切替可）"],
  ["エンジン", "オープンソース WASM Postflop（AGPL-3.0）・改変ソース公開"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리를 표로 못박아 카니발을 막는다.
 * 🔴 EN판은 `/en/hand-chart`·`/en/calculator`·`/en/win-rate-quiz`로 보내지만
 *    **ja에는 그 세 페이지가 없다.** 여기서는 ja 블로그 글과 앱 내장 기능으로 보낸다.
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["ポストフロップのスポットを計算したい", "このページのGTOツール", null],
  ["ポジション別にどのハンドを開くか知りたい", "スターティングハンド表の記事", "/ja/blog/holdem-starting-hands-chart"],
  ["アウツやポットオッズを計算したい", "ポットオッズの記事", "/ja/blog/holdem-pot-odds"],
  ["その場で勝率だけ知りたい", "アプリ内蔵のエクイティ計算機", null],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-21 축어 실측). */
const STEPS = [
  { n: "①", title: "OOPレンジ", desc: "アウトオブポジション側のプリフロップレンジを13×13グリッドで塗るか、22+, A2s+, KTo+ のように直接入力します。グリッドは対角線がポケットペア、右上がスーテッド、左下がオフスートです。" },
  { n: "②", title: "IPレンジ", desc: "インポジション側にも同じことをします。最短の入り方は、ゼロから両方を組むのではなく、学習スポットを読み込んでそのレンジを編集することです。" },
  { n: "③", title: "ボード", desc: "フロップ3枚をクリックするか、「ランダムフロップ」を押します。特定のランナウトを研究したいときは、ターンとリバーも固定できます。" },
  { n: "④", title: "ベットサイズ", desc: "開始ポット・実効スタックと、ストリートごとのベット／レイズサイズを設定します。最初の1回は初期値のままにして、ポットとスタックだけ確認すれば十分です。" },
  { n: "⑤", title: "ソルバーを実行", desc: "ツリーを構築してから実行します。計算はあなたのマシンで数秒〜数分かかり、終わったら「結果」タブを開きます。" },
];

/** 앱 「使い方」이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변). */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BBコーラー", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTNオープナー", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말의 구역 구분을 그대로 옮겼다. */
const READ_SCREEN: string[][] = [
  ["上部のアクションバー", "アクションラインの場面切替（フロップ → ベット → コール → ターン）", "ノードをクリックすると、その時点の戦略に飛べます"],
  ["13×13マトリクス（左）", "1ハンド1マス。マス内の色の分割がアクション頻度", "赤がベット／レイズ（濃いほど大きいサイズ）、緑がチェック／コール、薄いマスはレンジ外"],
  ["頻度タイル（右上）", "レンジ全体のアクション頻度とコンボ数", "「このレンジはここで98%チェックする」を読む場所です"],
  // 🔴 2026-08-21 정정 — `ノーメイド`는 **ja 코퍼스에 0건인 조어**였다(내가 만든 말이다).
  //    정본은 `メイドハンド`다(`holdem-glossary.ts` L140 축어:
  //    「メイドハンド | ドローに対して、今すでに完成している手。」) → 부정형은 「メイドハンドなし」.
  ["ハンド分類（右中）", "レンジがボードとどう噛み合っているか — トップペア、ドロー、メイドハンドなし", "どちらのプレイヤーに有利なボードかが一目で分かります"],
  ["詳細テーブル（右下）", "ハンドごとのウェイト・エクイティ・EV・EQRとアクション％", "列見出しでソートでき、サマリーはCSVに出力できます"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["フロップ・ターン・リバーの計算", "yes", "ポストフロップのツリー全体"],
  ["プリフロップの計算", "no", "オープンレンジはスターティングハンド表の記事へ"],
  ["ベット／レイズサイズの自由設定", "yes", "ポット％・倍数・オールイン・ジオメトリック"],
  ["ドンクベット（リード）の独立サイズ", "yes", "OOPがリードする筋を単独で設計できます"],
  ["レーキとレーキキャップ", "yes", "実際に打っているゲームの条件に合わせられます"],
  ["ゲームツリーのノード単位編集", "yes", "特定ノードでアクションを足す／消す"],
  ["精度モードとメモリモード", "yes", "32bit浮動小数点／16bit整数 · ブラウザ上限は約4GB"],
  ["目標エクスプロイタビリティの指定", "yes", "低いほど正確で、そのぶん遅くなります"],
  ["レンジと設定の保存", "yes", "保存・読み込み・インポート・エクスポート"],
  ["サマリーのCSV出力", "yes", "そのまま表計算ソフトへ"],
  ["スポットの共有リンク", "yes", "同じスポットを勉強仲間にそのまま送れます"],
  ["計算済み学習スポットを開く", "yes", "待ち時間なしで結果が出ます"],
  ["EVロス採点のGTOトレーナー", "yes", "苦手分野の絞り込みと復習キュー付き"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSOLVERは有料」라고 쓰지 마라** — 공식 문서에 무료 버전 안내가 있다.
 *    1차 출처로 확인된 것은 **설치형·Windows**라는 사실뿐이다.
 * 🪶 일본어 質問 DB에 「gtoポーカーの料金は?」(相対需要 16)·「gtoウィザードの料金は?」가 실재한다 —
 *    수요가 있다고 해서 **남의 가격을 우리가 대신 적어 주는 것은 다른 일**이다.
 *    액수 없이도 «우리는 무료»는 성립한다.
 */
const COMPARE: string[][] = [
  ["計算のしかた", "ブラウザ内でその場で計算", "あらかじめ計算された解を閲覧", "インストールして手元で計算"],
  ["インストール", "不要", "不要", "インストーラー・Windows"],
  ["対応範囲", "ポストフロップ・ヘッズアップ", "プリフロップを含むことが多い", "エディションによる"],
  ["レンジとツリーの編集", "自由に書き換えられる", "公開されている解の範囲内", "自由に書き換えられる"],
  ["計算が走る場所", "お使いの端末", "提供元（事前に計算済み）", "お使いの端末"],
];

/**
 * 학습 예제 — 앱의 **일본어 라벨과 해설을 그대로 옮겼다**(2026-08-21 축어 실측).
 * 🔴 **개수를 문장에 박지 않는다** — 아래 배열에서 세어 쓴다(`SPOT_TOTAL`).
 * 🔴 **카드는 기억으로 적지 않는다.** 아래 13개의 «보드»는 라이브 화면에서 축어로 긁은 것이다.
 * 🔴 **다만 «해설(note)»은 앱 문구를 그대로 믿지 마라 — 2026-08-21 에 세 건이 앱 쪽 오류였다**
 *    (⑨ Q♥T♥7♠ 「3ベッターが慎重になる」 · ⑬ A♠A♥6♦ 「スリーカードが珍しい」 ·
 *     ③ Q♠J♦T♠ 「強いハンドが多く」). **판정 기준은 스펙 §4-B 확정표다.**
 * ✅ 2026-09-02 — ja 해설 13편을 발행하며 `slug`를 전 행에 채웠다(`lib/posts-ja/<slug>.ts` · EN 랜딩과 같은 대응).
 *    슬러그는 `lib/gto-series.ts`와 동일하다 — 바꾸지 마라.
 */
const SPOT_GROUPS = [
  {
    label: "シングルレイズポット — BTN vs BB",
    cond: "OOP: BB（コーラー） · IP: BTN（オープンレイザー） · ポット 5.5bb · スタック 97.5bb",
    items: [
      { board: "A♥7♦2♣", slug: "a-high-board-cbet", name: "ドライなAハイボード", note: "レンジ優位の教科書的スポット。Aはオープンレイザーに有利なカードです" },
      { board: "K♠8♦3♣", slug: "k-high-board-cbet", name: "ドライなKハイボード", note: "KハイでもBTN優位ですが、チェックがわずかに増えます — Aハイと比べてみてください" },
      { board: "Q♠J♦T♠", slug: "broadway-board-strategy", name: "ブロードウェイのコネクトボード（2トーン）", note: "両者のレンジがボードと強く噛み合います。ハンド分類パネルでどちらに厚みがあるか確かめてください" },
      // 🔴 M-035 §1 · M-038 RP-01 정정(2026-08-23) — 종전 문구는 이 보드를 «콜러が有利» 계열로 불렀는데,
      //    시리즈 ④가 이름까지 대며 폐기한 명제다. KO ④ `lib/posts/donk-bet-strategy.ts` 축어:
      //    「레인지 우위가 BB로 넘어간 것은 아니다 — 에퀴티는 48.5% 대 51.5%로 여전히 BTN이 앞선다」.
      //    ⚠ 앱 ja 화면이 아직 옛 문구를 쓴다 — **화면을 보고 되돌리지 마라.**
      //    「常にCベット」 절도 뺐다: 스팟은 플랍 첫 액션(BB 차례)에서 멈춰 BTN 빈도를 화면에서 못 본다(RP-02).
      { board: "9♥8♥7♣", slug: "donk-bet-strategy", name: "ミドルのコネクトボード（2トーン）", note: "シングルレイズポットで唯一、BBが本当にリードするボード。BBの先制ベットは23.7%です（レンジ優位は依然としてBTN側 — エクイティ48.5%対51.5%）" },
      // 🔄 M-067 축어 재동기(2026-08-26) — 앱이 `190d293`에서 ⑤ lesson을 **완화형**으로 정정했다
      //    (구형 = «사라진다»형 → 신형 = «減り» 형). 🔴 **구형 문자열은 주석에도 적지 마라** —
      //    검수장 회귀 앵커가 이 파일에서 그 출현 수를 세고 «0 = 정정 반영»으로 읽는다. 화면값에 큰 벳이 3.2% 남아
      //    «사라진다»가 과장이었다(솔버 S-003 ③ · 검수장 S-007 라이브 md5 검증). 이 note는 «앱 축어»
      //    선언 지위라 앱이 바뀌면 같이 바뀐다. ⚠ **같은 문구가 본문 FAQ ②에도 있다 — 함께 고칠 것.**
      { board: "Q♠9♠2♠", slug: "monotone-board-strategy", name: "モノトーンボード（同スート3枚）", note: "大きなベットが減り、小さなベットとチェックが中心になります。完成したフラッシュでさえ頻繁にチェックします" },
      { board: "6♣6♦3♥", slug: "paired-board-strategy", name: "ペアボード", note: "どちらのレンジもボードと噛み合わないため、ブラフの比率が上がります" },
      // 🔴 M-045 RP-19 정정(2026-08-24) — 「BB가 체크레이즈로 저항해 온다」(구 문구)는 화면에 없는 값이다.
      //    KO ⑦ 239줄: 「교육 예제는 플랍의 첫 액션(BB 차례)까지만 … BB의 체크레이즈 빈도가 그 화면에는 없습니다」.
      //    §4-B ⑦의 화면값은 체크 96.8 · 벳 3.2뿐. 앱 축어로 되돌리지 마라.
      { board: "6♠5♥2♦", slug: "low-board-check-raise", name: "ロー・レインボーボード", note: "オーバーカードの戦い。チェックレイズを設計するためのスポットです — 画面のBBの最初のアクションはチェック96.8%・ベット3.2%" },
    ],
  },
  {
    label: "3ベットポット — BB 3ベット vs BTN コール（低SPR）",
    cond: "OOP: BB（3ベッター） · IP: BTN（コーラー） · ポット 22.5bb · スタック 89bb · SPR ≈ 4.0",
    items: [
      // 🔴 M-038 RP-03 정정(2026-08-23) — EN 랜딩에서 옮겨 온 문장이었다. 작은 벳이 통하는 이유를
      //    «SPR이 낮아서»로 돌리면 시리즈 ⑧이 폐기한 인과가 된다: 「SPR이 똑같이 4.0인 ⑨는 98.4%,
      //    ⑩은 97.8%다. 사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양이다」. 되돌리지 마라.
      { board: "A♦K♠2♥", slug: "3bet-pot-cbet", name: "3ベッター優位のAハイボード", note: "3ベットレンジにとって最高のボード（AK・AA・KKが詰まっています）。小さなベットがレンジ全体に効くのは、スタックの浅さではなくレンジの形によるものです" },
      { board: "Q♥T♥7♠", slug: "3bet-pot-bet-sizing", name: "ダイナミックな2トーンボード", note: "生きたドローが2つ。それでもレンジの98.4%が同じ2/3サイズで仕掛けます" },
      // 🟢 2026-08-24 — 이 문장은 **정본(KO ⑩ 142줄)과 어긋나지 않은 유일한 랜딩 표현**이었다.
      //    ⚠ 그렇다고 ja 가 «정본»인 것은 아니다 — 정본은 `lib/posts/3bet-pot-low-board.ts` 다.
      //    🔴 `ほぼ丸ごと外れる` 는 **회귀가 >=1 로 거는 앵커다. 지우지 마라.**
      //    수치만 붙였다: KO 표 실측 **탑 페어 0%**(8이 들어간 핸드가 3벳 레인지에 없다).
      { board: "8♦5♣2♠", slug: "3bet-pot-low-board", name: "ロー・ドライボード", note: "3ベットレンジがほぼ丸ごと外れるボード（トップペアは0%）。それでもオーバーペアが圧力をかけ続けます" },
    ],
  },
  {
    label: "ブラインド戦（BvB） — SB vs BB（ワイドレンジ）",
    cond: "OOP: SB（オープンレイザー） · IP: BB（コーラー） · ポット 6bb · スタック 97bb",
    items: [
      { board: "K♥T♦6♠", slug: "blind-battle-cbet", name: "KTハイボード", note: "レンジが広く、お互いに弱いのが特徴。BTN vs BBと頻度がどう違うか比べてみてください" },
      { board: "7♦6♦5♣", slug: "blind-battle-connected-board", name: "ローのコネクトボード（2トーン）", note: "ワイドレンジ同士が非常にコネクトしたボードでぶつかり、ツーペアとドローが続出します" },
      // 🔴 2026-08-21 정정 — 앱 화면은 「Aを持つスリーカードが珍しい」라고 쓰지만
      //    🔴 2026-08-23 정정(M-035 §5 덤) — 초판 주석은 「코퍼스가 `トリップス`를 정본으로 삼는다」고
      //       적었는데 **실측은 `スリーカード` 82 대 `トリップス` 24**다. 결론은 옳고 근거가 과장이었다.
      //       **정확한 구조는 «족보 이름 = `スリーカード` / 하위 유형 = `トリップス`»다**
      //       (`lib/posts-ja/holdem-glossary.ts` L47·L136 축어:
      //    「セット vs トリップス | どちらもスリーカード。セットはポケットペア、トリップスは手札1枚 + ボードのペア」).
      //    A♠A♥6♦ 에서 A 를 든 쪽은 **手札1枚 + ボードのペア = トリップス**다.
      //    🔴 `スリーカード`로 쓰면 **`セット`까지 품어 지시 대상이 넓어진다** — 이 보드에는
      //       66 의 セット(6콤보)이 정상적으로 존재하므로 「珍しい」가 그 쪽에는 참이 아니다.
      //       §13 검산: A 4장 중 2장이 보드에 있어 **남은 A는 2장뿐** → A 트립스만 드물다.
      //    ⚠ 이건 **솔버 앱 ja 번역의 결함**이기도 했다 — 통지 완료(M-035).
      //    🔴 2026-08-25 갱신(검수장 M-060) — **앱이 고쳤다.** 앱 `a7b70b3`(08-22 21:49)이
      //       라벨을 `trips: "セット/トリップス"`(hand-categories.ts L90)로 개명해
      //       **앱 소스에 그 옛 라벨은 0건**이다(실측 · M-047 §2대로 폐기 문구는 원어로 적지 않는다).
      //       그래서 괄호의 «앱 화면 표시»를
      //       `セット/トリップス`로 고쳤다 — 그대로 뒀으면 **괄호가 거짓**이 된다.
      //       ⚠ 앱 정정이 랜딩에 자동으로 오지 않는다(«랜딩만 봐서는 앱을 못 막는다»의 역방향).
      //       앱 라벨을 다시 바꾸면 이 괄호도 같이 봐라.
      //    🪶 EN 랜딩은 "Trips are rare with two aces down"으로 **처음부터 정확했다.**
      { board: "A♠A♥6♦", slug: "ace-paired-board-strategy", name: "Aペアボード", note: "Aを持つトリップス（アプリの画面表示は「セット/トリップス」）はSBが88コンボ、BBが66コンボ。数でも質でも上回るSBが80.1%を仕掛けます" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientJa() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          無料のポーカーGTOツール — 登録不要、ブラウザで動くGTO計算
        </h1>
        {/*
          ★h1 직후 직답 단락. 「ポーカー gto」(880)·「gtoツール 無料」(50·SD24)로 들어온
            검색자의 질문에 첫 화면에서 답한다. AI 검색도 페이지가 아니라 이 단락을 뽑는다.
          🔴 두괄식 — 일본어 SEO 글의 관습이자 GEO 원칙이다(결론 먼저).
        */}
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">GTOツール（GTOソルバー）</strong>は、両プレイヤーのレンジ・ボード・スタックから「どの手をどのくらいの頻度でベット・チェック・フォールドすべきか」を計算するプログラムです。スターティングハンドの169パターンすべてについて、その頻度が13×13グリッドに返ってきます。
          HoldemMasterのGTOツールはその計算を
          <strong className="text-foreground">ブラウザの中で実行します — ダウンロードもアカウントも有料プランもありません</strong>。戦略グリッドと並べて、ハンドごとのエクイティ・EV・エクイティ実現率まで表示します。対応範囲はヘッズアップのポストフロップです。
        </p>
        <div className="mt-5 text-center">
          <Cta label="GTOツールを開く →" />
          <p className="mt-2 text-xs text-muted-foreground">
            デスクトップのChrome推奨 — iOS・Safariはシングルスレッド動作のため、カスタム計算が遅くなります
          </p>
        </div>
        <Table head={["", "内容"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── GTO 툴이란 (⚠ 「GTOとは」 정의는 holdem-strategy 소유 → 「ツール」로 좁힌다) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">ポーカーのGTOツールとは — チャートとの違い</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTOツールは、<strong className="text-foreground">ゲーム理論最適</strong>の戦略をゼロから計算するプログラムです。レンジ・ボード・スタック・ベットサイズツリーを与えると、ナッシュ均衡に向けて反復計算し、169ハンドすべてのベット・チェック・フォールド頻度を返します。チャートとの違いはここにあります — チャートは誰かが以前に出した答えを保存したものですが、ソルバーは<strong className="text-foreground">あなたが今いるスポットそのものを計算します</strong>。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          チャートとも、誰かの主観が入ったトレーニングアプリとも違います。ボードを1枚変えれば答えも変わります。思い出すのではなく、計算し直すからです。
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(2026-08-21 실측):
          ポーカー gto 880 · gtoアプリ 110 · gtoツール 90 · ソルバー ポーカー 40.
          억지 나열이 아니라 엔티티를 명확히 하는 자리다.
          🔴 「ソルバー」는 검색 축이 아니지만 **본문 용어로는 정본**이라 여기서 병기한다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          同じものが、いくつもの名前で呼ばれています。
          <strong className="text-foreground">GTOツール</strong>・GTOアプリ・
          <strong className="text-foreground">GTOソルバー</strong>・ポストフロップソルバーは、どれもこの種のプログラムを指します。出力の方をGTOチャートやレンジ表と呼ぶこともあります。違うのは検索する言葉だけで、このページのツールが計算するものは同じです。
        </p>
        <Table
          head={["やりたいこと", "どこを見るか"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          GTOという言葉そのものの意味からたどりたい場合は、
          <Link href="/ja/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
            テキサスホールデムの戦略ガイド
          </Link>
          に定義とよくある誤解をまとめてあります。
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTOツールの使い方 — 5ステップ</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          はじめてソルバーに触るなら、
          <strong className="text-foreground">設定より先に学習スポットを開いてください。</strong>
          学習スポットはすでに計算済みなので、入力の操作を覚える前に出力の読み方を覚えられます。自分でスポットを組む段になったら、左サイドバーのタブが上から順番になっています。
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          カスタムスポットの入力は任意の整数チップです。bb で考えたいときは
          <strong className="text-foreground">10チップ = 1bb</strong> と決めてください（ポット55なら5.5bb）。学習スポットとトレーナーは、このスケールで自動的に換算されます。
        </p>
        {/* 🔴 es 적대검수 처방 소급(2026-08-24) — 표 앞에 소유 글 링크 + 헤더를 도구 조작 라벨로.
            랜딩이 「또 하나의 프리플랍 레인지 표」로 읽히지 않게 하는 처방(es 08-22 · en과 같은 날 반영).
            ⚠ 「学習スポットが使っているレンジそのものです」는 회귀 앵커다 — 문구를 지우지 마라. */}
        <p className="mt-4 text-sm text-muted-foreground">
          ゼロから組むのがいちばん遠回りです。ポジション別のオープンレンジは
          <Link href="/ja/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            スターティングハンド表
          </Link>
          にあります。下の2つのレンジは別物で、Single Raised Pot の学習スポットが使っているレンジそのものです（BTN vs BB）。①と②にそのまま貼り付けてください。
        </p>
        <Table head={["貼り付け先", "レンジ"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">結果画面の見方</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {/* 🔴 M-046 E-3 소급(2026-08-24) — 열거는 상단1+매트릭스1+우측3=다섯, READ_SCREEN도 5행.
              「4つ」로 되돌리지 마라(앱 도움말의 4구역은 우측을 하나로 묶은 셈법이다). */}
          結果画面には5つの作業エリアがあります。上部の
          <strong className="text-foreground">場面を切り替えるアクションバー</strong>、左の
          <strong className="text-foreground">13×13戦略マトリクス</strong>、そして右側の
          <strong className="text-foreground">頻度タイル・ハンド分類・詳細テーブル</strong>です。左は個別のハンドが何をするか、右はレンジ全体が何をするかを読む場所だと覚えてください。
        </p>
        <Table head={["場所", "何があるか", "どう読むか"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          エクイティ実現率（EQR）が100%を下回っていたら、そこは立ち止まる価値があります。持っているエクイティを、そのまま取り切れていないという意味だからです。何がその差を作るかはスポットごとに違います — ポジション、イニシアチブ、そしてナッツ級のハンドをどちらが多く持っているか。
          <strong className="text-foreground">ソルバーが教えてくれるのは「どう打つか」ではなく「なぜその頻度になるのか」</strong>で、EQRはその理由が最も見えやすい数字です。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          これらの用語になじみがなければ、
          <Link href="/ja/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            エクイティの記事
          </Link>
          と
          <Link href="/ja/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            Cベットの記事
          </Link>
          で、ソルバーが何を測っているのかを先に押さえておくと結果が読めるようになります。
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">本当に無料? — 機能一覧</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          無料です。しかも条件つきの無料ではありません — 支払い方法の登録なし、ロックされた機能なし、
          1日の計算回数制限なし、アカウントも不要です。通常は有料のデスクトップソルバーに置かれている設定 — レーキとレーキキャップ、精度モード、ゲームツリーのノード単位編集 — もすべて使えます。制約と言えるのは一つだけで、このツールが
          <strong className="text-foreground">ポストフロップ・ヘッズアップ専用</strong>だということです。
        </p>
        <Table
          head={["機能", "対応", "備考"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">あり</span>
            ) : (
              <span className="font-bold text-muted-foreground">なし</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="無料で試す →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 (카니발 방지의 본체) ─────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">なぜポストフロップ専用なのか</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          これは<strong className="text-foreground">ポストフロップのソルバー</strong>です。フロップが開いた時点から始まり、そこから先を2人分計算します。プリフロップを意図的に外してあるのは、プリフロップが別種の問題だからです —
          プリフロップのレンジは表から読めるくらい安定していますが、ポストフロップはボードが変わるたびに書き換わります。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          その境界の内側では、何も出し惜しみしていません。両者の
          <strong className="text-foreground">ポストフロップレンジ</strong>、任意のフロップ・ターン・リバー、開始ポットと実効スタック、ストリートごとの完全なベットサイズツリーを設定できます。出てくる戦略は一般論ではなく、あなたのゲームのものです — 多くの学習教材が触れないレーキも、設定に含められます。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          プリフロップ側が必要なら、
          <Link href="/ja/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            スターティングハンド表の記事
          </Link>
          にポジション別のレンジ表がまとまっています。この2つで、1ハンドを最初から最後までカバーできます —
          表が「何で参加するか」を決め、ソルバーが「フロップ以降どうなるか」を決めます。
        </p>
      </section>

      {/* ── GTO 트레이너 (★`練習アプリ` 390 — 이 랜딩 최대의 부 축) ───── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          無料のGTOトレーナー — EVロスで採点する練習アプリ
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTOトレーナーはこのGTOツールに最初から組み込まれていて、別に登録する必要もありません。計算済みのスポットをそのまま練習問題に変えます — 実際の意思決定ポイントでハンドが配られ、アクションを選ぶと採点されます。無料のポーカー練習アプリや練習サイトを探していて、役の練習ではなく<strong className="text-foreground">判断の練習</strong>がしたいなら、ここが入口です。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          採点は正解・不正解ではなく<strong className="text-foreground">EVロス</strong>で行います。
          GTOはアクションを混ぜるため、頻度の低い方を選んだことが即ミスとは限りません。問われているのは、その選択がどれだけ期待値を手放したかです。アクションを選ぶと、各アクションの頻度とEV、そしてあなたの選択のコストが並んで表示されます。
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. 절대 bb가 아니다 — 앱이 2026-08-15에 바꿨고
               KO·EN 랜딩의 옛 절대값(0.01/0.05bb)도 같은 날 함께 고쳤다. **되돌리지 마라.**
          */}
          <li className="text-muted-foreground">
            しきい値は<strong className="text-foreground">ポットに対する比率</strong>で測ります —{" "}
            <span className="font-semibold text-emerald-500">0.35%まで</span>が最善手 ·{" "}
            <span className="font-semibold text-blue-500">1%まで</span>が許容 ·{" "}
            <span className="font-semibold text-orange-500">それ以上</span>は見直し対象
          </li>
          <li className="text-muted-foreground">
            同じ0.08bbでも、5.5bbのポットでは1.45%で見直し対象、22.5bbのポットでは0.36%で許容範囲です。境界は5.5bbのシングルレイズポットで0.02bbと0.06bb、22.5bbの3ベットポットで
            0.08bbと0.23bbになります。0.02bbと0.05bbの下限があり、ソルバー自体の誤差に埋もれないようにしてあります
          </li>
          <li className="text-muted-foreground">
            出題は学習スポットごとの複数の意思決定ポイントから来るので、組み合わせは
            <strong className="text-foreground">1万通りを超えます</strong>
            （目標エクスプロイタビリティ0.5%）。シングルレイズポット・3ベットポット・ブラインド戦を単独で絞って練習することもできます
          </li>
          <li className="text-muted-foreground">
            ハンドは<strong className="text-foreground">実際のGTOレンジのウェイトに比例して</strong>
            配られます — そのスポットで本当に持ちうる頻度で、その手が回ってきます
          </li>
          <li className="text-muted-foreground">
            連続正解の記録、苦手分野の内訳、EVロスが大きかった問題を集めた
            <strong className="text-foreground">復習キュー</strong>は、この履歴をもとに動いています。履歴はログインしない限り端末内に残ります
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="GTOトレーナーを開く →" variant="outline" />
        </div>
      </section>

      {/* ── 공부법 (★質問 DB 相対需要 100 · last_30_days — 이 판 최대의 의문) ── */}
      {/*
        ★2026-08-21 H2 신설 — EN·KO 랜딩에 없는 **ja 고유 절**이다.
        근거: 라쿠 `question-search` 시드 「GTO ポーカー」와 「ポーカー 勉強」 **양쪽에서**
        `ポーカーのgtoの勉強方法は?`가 相対需要 **100**으로 1위이고 出現時期가 last_30_days다.
        서제스트에도 `ポーカー gto 勉強法` 70 · `ポーカー gto 勉強` 40이 살아 있다.
        🔴 다만 `ポーカー gto 勉強方法`(서제스트)는 **볼륨 0**이다 — H2는 «勉強方法»으로 쓰되
           그것이 質問 형태와 맞기 때문이지 서제스트 볼륨 때문이 아니다. 두 근거를 섞지 말 것.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">ポーカーのGTOの勉強方法 — 何から手をつけるか</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          順番があります。GTOの勉強法がうまくいかない理由のほとんどは、
          <strong className="text-foreground">難しさではなく順番</strong>にあります —
          最初にレンジを組もうとして、入力の意味が分からないまま止まってしまうのです。
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">計算済みの学習スポットを開く。</strong>
            設定を覚える前に、出力の読み方に慣れます。待ち時間がないので、ボードを変えると戦略がどう変わるかを続けて見られます
          </li>
          <li>
            <strong className="text-foreground">GTOトレーナーで問題を解く。</strong>
            読めるようになったら、自分で選んでみます。EVロス採点なので、「間違えた」ではなく「いくら損した」で返ってきます
          </li>
          <li>
            <strong className="text-foreground">実戦で迷ったスポットを自分で組む。</strong>
            ここまで来てはじめて、①〜⑤のカスタムスポットが役に立ちます。覚えているうちに、そのボードとレンジをそのまま入力して計算します
          </li>
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground">暗記しようとしないことが、いちばんの近道です。</strong>
          169ハンド×ボードの組み合わせは覚えきれる量ではありません。覚えるのは頻度そのものではなく、「このボードはどちらのレンジに味方するか」という読み方の方です。それが身につくと、見たことのないボードでも自分で判断できるようになります。
        </p>
      </section>

      {/* ── 학습 스팟 (앱 라벨 축어) ─────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          すぐ使える計算済みの学習スポット{SPOT_TOTAL}種
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          下のスポットはすべて計算済みなので、開いた瞬間に戦略が表示されます — 待ち時間も設定も不要です。レンジは100bbオンライン標準の近似値なので、ひとつ読み込んでレンジを変え、計算し直して、どこが変わったかを見てください。ボードテクスチャが戦略を書き換える感覚をつかむのに、これがいちばん速い方法です。
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/ja/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색은 일본어권에도 실재한다 — ポーカー gto wizard 30 ·
           gtowizard 30 · gtoウィザード 20 · 質問 DB 「gtoウィザードの料金は?」.
           직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO WizardやPioSOLVERとの違い</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          どれもソルバーと呼ばれますが、違うのは
          <strong className="text-foreground">計算がどこで・いつ行われるか</strong>です。
          GTO Wizardのようなソリューションライブラリは、あらかじめ計算された解を閲覧する方式で、表示が速くプリフロップも含みます。PioSOLVERのようなデスクトップソルバーはWindowsにインストールして手元で計算します。このツールは
          <strong className="text-foreground">ブラウザの中でその場で計算する</strong>ので、レンジもツリーも自由に書き換えられ、インストールするものが何もありません。
        </p>
        <Table
          head={["", "HoldemMasterのGTOツール", "ソリューションライブラリ", "インストール型デスクトップソルバー"]}
          rows={COMPARE}
        />
        {/*
          🔴 **경쟁사의 «가격»은 안 쓰지만, 공식이 «스스로 공표한 기능 경계»는 1차 출처다.**
             축어 출처 = GTO Wizard 공식 일본어 LP(`lp.gtowizard.com/ja/`)의 FAQ:
             「プリフロップのソリューションは誰でも無料でご利用いただけます！」
             🔴 **여기서 «포스트플랍은 유료다»로 추론하지 마라 — 그쪽은 그렇게 말하지 않았다.**
                우리가 쓸 수 있는 것은 «그쪽이 무료라고 공표한 범위»와 «우리가 무료로 주는 범위»의
                대비뿐이다. 추론을 한 칸이라도 넣으면 §12-B 위반이다.
             ⚠ 일본어 SERP의 GTO Wizard 가격은 **서로 다 다르다** — top-25 안에서 Starter 하나가
                $35·$39·$49로 갈린다(2026-08-21 실측). **어느 하나를 골라 적으면 틀린다.**
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          料金について、ひとつだけはっきりしていることがあります。GTO Wizardは公式の日本語ページで
          <strong className="text-foreground">プリフロップのソリューションは誰でも無料で使える</strong>
          と案内しています。このツールが無料で提供しているのは、その反対側の
          <strong className="text-foreground">ポストフロップ</strong>です。どちらが上という話ではなく、無料で触れる範囲が違うということです。
        </p>
        {/*
          🪶 일본어 시장의 «쪼개짐»은 SERP top-30 전수(2026-08-21)에서 관찰된 것이다 —
             프리플랍 레인지표를 주는 일본어 도구와 포스트플랍을 계산하는 도구가 서로 다른 서비스다.
             🔴 **개별 서비스명·가격·무료 티어는 적지 않는다.** 관찰된 «구조»만 적는다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          日本語で使えるGTOツールを探すと、
          <strong className="text-foreground">プリフロップのレンジ表を見せるものと、ポストフロップを計算するものが別々のサービスに分かれている</strong>ことに気づくはずです。しかもポストフロップまで行くものは、ブラウザではなくダウンロードを求められるものがほとんどです。「BTNがオープン → BBがコール → フロップ」という一本の流れを、日本語のまま、インストールもせずに最後まで追える場所が意外とありません。
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지 축어**다
             ("This website will no longer be updated.") + GitHub 저장소 제목 "[Development suspended]".
             추측이 아니라 원본이 스스로 적어 둔 문장이다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          <strong className="text-foreground">WASM Postflop</strong>を探してここに来た方に、もうひとつ。元のオープンソースプロジェクトは、自身のサイトで今後は更新しないと告知しており、リポジトリも開発停止と記されています。このソルバーはそのエンジンを引き継いでメンテナンスしているフォークです — 同じAGPL-3.0ライセンス、ソースコードも同じく公開で、その上にインターフェース・学習スポット・トレーナーを載せています。
        </p>
      </section>

      {/* ── 「GTOは意味ない」 반박 (★`ポーカー gto 意味ない` 70 · SD 17 = 이 판 최저 난이도) ── */}
      {/*
        ★2026-08-21 H2 신설 — 사장님 지시(2026-08-21): «끝부분의 H2에 「GTO는 의미없다?」를
          의문문으로 넣고, 답변으로 «의미 있다»를 강조».
        근거: `ポーカー gto 意味ない` **70**(SEO난이도 **17 — 6쿼리 중 최저**) · `gto ポーカー 勝てない` 10.
          자사 ja 43편 전수 grep에서 `意味ない`·`意味がない` **0건** — 미소유 축이다.

        🔴🔴 **SERP 실측이 설계를 바꿨다 — «아니오»라고 쓰면 진다.**
          이 쿼리 top-10을 전수로 읽었더니 **어느 페이지도 「意味ない」에 정면으로 부정하지 않는다.**
          1위 Yahoo!知恵袋 베스트앤서부터가 「GTOは絶対に負けない戦略であっても、最も勝てる戦略ではない」
          「GTO通りにプレイすることはそこまで重要ではない」로 착지하고, 4위 ntpoker·7위 zero-poker·
          2위 note(현역 캐시 프로 KuZ)도 전부 **「의미는 있지만 그대로 치는 건 중요치 않다 / 기준으로 써라」**로 끝난다.
          → **회의론이 이미 이겨 있는 시장이다.** 우리가 「의미 있다」고 우기면 진다.
          🟢 **그런데 그 «기준»을 실제로 보여 주는 페이지가 top-10에 하나도 없다.**
             그래서 이 절의 결론은 «부정»이 아니라 **「基準を今すぐ画面で見せる」**로 잡았다.
             사장님 지시(«의미 있다는 내용을 강조»)는 **그대로 지켜진다** — 다만 논증의 착지점이
             「반박」이 아니라 「그 기준이 여기 무료로 있다」가 된다.

        🔴 **회의론 4갈래는 SERP 상위 페이지에서 실제로 수집한 것이다**(추측 아님):
          ① 상대가 GTO가 아니면 최적이 아니다(知恵袋 1위) ② 인간은 암기·재현 불가(ntpoker 4위)
          ③ 甘い環境では그 이전 문제(zero-poker 7위) ④ 입력 조건 아래의 최적해일 뿐(note KuZ 2위)
          ⚠ **인용은 하지 않는다** — 논거만 정확히 받아 답한다.
        🔴 반례로 드는 수치는 **스펙 §4-B 확정표에서만** 가져왔다(BB 리드 23.7% · 모노톤 큰벳 3.2%).
          ⚠ 초판은 「BTN 의 C벳 빈도가 크게 떨어진다」로 썼는데 **교육 예제가 그 값을 보여 주지 않는다** —
             스팟은 **플랍 첫 액션(BB 차례)에서 멈춘다.** 화면에서 확인하라고 써 놓고 확인이 안 되면
             그 설득 장치는 무너진다. BB 관점(리드 23.7%)으로 바꿔야 스팟에서 그대로 보인다.
          검증 안 된 시장 주장
          (「일본 저레이트는 수준이 낮다」류)은 쓰지 않는다 — 반박이 추측이면 반박이 아니다.
        🔴 H2에 **「GTO」를 단독으로 쓰지 않았다** — 「ポーカーの」를 붙였다(드라마 동음이의 회피).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          ポーカーのGTOは意味ない? — 「基準」を画面で確かめる
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          <strong className="text-foreground">意味はあります。ただし「GTO通りに打て」という意味ではありません。</strong>
          「意味ない」と言われるときの中身は、だいたい4つに分かれます。順に見ていくと、どれも指摘としては正しいのに、
          <strong className="text-foreground">GTOを「答え」ではなく「基準」だと思った瞬間に結論が変わる</strong>
          ことが分かります。
        </p>

        <div className="mt-5 space-y-5">
          <div>
            <p className="font-semibold">① 相手がGTOで打っていないなら、最適ではないのでは?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              その通りです。GTOは最も勝てる戦略ではなく、
              <strong className="text-foreground">相手が誰であっても大きく崩されない基準線</strong>です。ただ、相手を搾取するには「相手がどこからどれだけ外れているか」を測る必要があり、外れていない基準がなければその差は測れません。降りすぎなのか降りなさすぎなのかを判定する物差しがGTOで、搾取はその物差しの上ではじめて成立します。
              <strong className="text-foreground">GTOと搾取は対立しません — 順番の関係です。</strong>
            </p>
          </div>

          <div>
            <p className="font-semibold">② 頻度を覚えきれないから、実戦では使えないのでは?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {/* 🔄 M-067 축어 재동기(2026-08-26) — 이 산문의 «사라진다»형 문장은 학습 스팟 note와
                  **같은 앱 축어**였다. 앱 `190d293`이 완화형(「減り」)으로 정정했으므로 여기도 함께 바꾼다 — note만 고치면
                  같은 페이지 안에서 두 문장이 갈린다(검수장 M-067이 이 자리를 따로 짚은 이유).
                  🔴 텍스트 런은 **한 줄**로 둔다 — JSX가 텍스트↔텍스트 개행을 공백 1개로 치환해
                  일본어 문장 한가운데 ASCII 공백이 렌더된다(zh-hant 회차가 빌드 산출물로 실증한 그 결함). */}
              {"覚えなくていいので問題ありません。169ハンド×ボードの組み合わせは、そもそも人間が記憶できる量ではありません。身につけるのは頻度そのものではなく、"}
              <strong className="text-foreground">「このボードはどちらのレンジに味方するか」という読み方</strong>
              {"です。上の学習スポットでミドルのコネクトボード（9♥8♥7♣）を開くと、BBが自分から23.7%も先に仕掛けます。モノトーンボード（Q♠9♠2♠）では大きなベットが減り、完成したフラッシュでさえ頻繁にチェックします。この2つを自分の目で見るだけで、見たことのないボードでも打ち方が変わります。"}
            </p>
          </div>

          <div>
            <p className="font-semibold">③ 相手のレベルが高くないレートでは、GTO以前の問題では?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              相手が大きく外れているテーブルほど、むしろ基準が要ります。どれだけ外れているか分からなければ、どれだけ調整すべきかも決まらないからです。「常にCベットする」が有効に見えるテーブルでも、
              <strong className="text-foreground">それがどのボードで、どれだけ損をしている打ち方なのか</strong>
              は基準を見ないと分かりません。上の9♥8♥7♣でBBが23.7%も先に仕掛けてくるのが、その答えの一部です。
            </p>
          </div>

          <div>
            <p className="font-semibold">④ 結局、入力した条件の下での最適解にすぎないのでは?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              その通りで、だからこそ
              <strong className="text-foreground">条件を自分で入れられることが重要になります</strong>。レーキ、実効スタック、実際に使っているベットサイズ——あなたのゲームの条件を入れれば、その条件の下での答えが返ってきます。誰かが決めた条件で計算済みの解を眺めるのとは、ここが決定的に違います。この批判は、実はソルバーを否定する理由ではなく、
              <strong className="text-foreground">自分で条件を書き換えられるソルバーを使う理由</strong>です。
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          GTOトレーナーがEVロスで採点するのも、同じ考え方からです。正解・不正解ではなく「その選択がいくら手放したか」を返すので、意図的にGTOから外す判断をしたときも、そのコストが分かります。
          <strong className="text-foreground">外していいかどうかではなく、外すのにいくらかかるかを知っている状態</strong>——それが基準を持つということで、その基準は、このページから登録なしで開けます。
        </p>
        <div className="mt-5 text-center">
          <Cta label="基準を画面で確かめる →" variant="outline" />
        </div>
      </section>

      {/* ── 함께 읽으면 좋은 글 (⚠ ja엔 도구 페이지가 없다 — 전부 블로그) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">一緒に読みたい記事</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/ja/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              スターティングハンド表
            </Link>{" "}
            — このツールはポストフロップ専用です。各ポジションで<strong>何を開くか</strong>はこの記事にあります。①と②に貼り付けるレンジはそこから取ったものではなく、学習スポットが使っているレンジそのものです
          </li>
          <li>
            <Link href="/ja/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              ポットオッズ
            </Link>{" "}
            — ソルバーを回さずに数字だけ欲しいとき。アウツと必要勝率の出し方がまとまっています
          </li>
          <li>
            <Link href="/ja/blog/holdem-equity" className="font-semibold text-primary hover:underline">
              エクイティ
            </Link>{" "}
            — ソルバーの出力はほとんどがエクイティ由来です。先にここを押さえると結果画面が読めます
          </li>
          <li>
            <Link href="/ja/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
              ポジションの使い方
            </Link>{" "}
            — EQRはポジションで大きく動きます。ソルバーが数値化しているものの正体
          </li>
          <li>
            <Link href="/ja/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              テキサスホールデムの戦略ガイド
            </Link>{" "}
            — GTOの定義を含む、ソルバーが定量化している概念の全体像
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">よくある質問</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_JA.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="無料GTOツールを実行する →" />
        {/*
          🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
             오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접
             계산은 계산 엔진을 한 번 내려받은 뒤에만 돈다(KO·EN 주석과 같은 경고).
        */}
        <p className="mt-3 text-xs text-muted-foreground">
          ホーム画面に追加すると、学習スポットとトレーナーが端末に保存され、
          <strong className="text-foreground">インターネットなしでも練習できます</strong> —
          Chrome・Edgeはアドレスバーのインストールアイコンから、iPhoneは共有メニューの「ホーム画面に追加」から行えます。
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        本アプリは Wataru Inariba 氏による WASM Postflop（AGPL-3.0）をベースに、HoldemMaster がローカライズ・改良したバージョンです。修正した全ソースコードは同じライセンスで公開しています。
      </p>
    </div>
  );
}
