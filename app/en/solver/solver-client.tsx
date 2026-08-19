"use client";

import Link from "next/link";
import { SOLVER_FAQ_EN } from "./faq";

/**
 * ★CTA는 `?lang=en`으로 보낸다. 솔버가 이 파라미터를 읽어 `localStorage['solver.locale']='en'`으로
 *   기억한다(2026-08-19 라이브 확인 — 이후 파라미터 없이 열어도 영어로 뜬다).
 *   한국어 랜딩과 같이 **UTM은 붙이지 않는다**(기존 관례).
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=en";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/en/solver` 랜딩 — ★2026-08-19 신설 (T24 · Play 스토어 앱 등록에 영어 콘텐츠 필요)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — 한국어 `/solver`와 같은 구조이고, 영어권에 그 진입로가 0개였다.
 *
 * ▶ 키워드 근거 (2026-08-19 실측 · 라쿠 English/United States 12개월 평균 + 구글 자동완성):
 *     poker solver **1,600** · gto solver **390**(12개월 +12.3%, 3개월 +14.3%) ·
 *     gto poker solver 260 · poker solver free 260 · free poker solver 210 ·
 *     poker gto solver 110 · gto trainer 140 · poker gto trainer 50(+37.7%) ·
 *     gto calculator 70 · free gto solver 70 · gto poker strategy 70 · gto solver free 50 ·
 *     free gto trainer 50 · texassolver 50(+35.5%) · gto solver mac 10(+50%)
 *   🪶 인접(브랜드, 직접 조준 금지): **gto wizard 12,100**(CPC $11.13) · piosolver 590 ·
 *     gto wizard price 260 · gto wizard free 70 · wasm postflop 70
 *   전체 수확·판정은 `docs/keyword-bank/en-gto-solver.md`.
 *
 * 🔴 **핸드오프의 후보 키워드 상당수가 실측 0이었다.** 그대로 썼으면 빈 자리를 조준했다 —
 *   `browser gto solver` · `gto solver online free` · `free postflop solver` ·
 *   `gto solver no download` · `gto solver mobile` **전부 데이터 없음**.
 *   `gto solver online`은 10, `postflop solver`도 10이다. 한국어 축에서 겪은 것과 같은 함정이다.
 * 🟢 **영어는 의도 함정이 없다** — 한국어 「gto」가 만화·자동차로 갈리는 것과 달리
 *   자동완성이 poker/postflop/free/github로 깨끗하다. 앞에 「holdem」을 붙일 필요가 없다.
 *
 * 🔴 카니발 방지 역할 분리 (한국어와 동일 원칙):
 *   · 프리플랍 오픈 레인지 = `/en/hand-chart`("Poker Starting Hand Chart — Open Ranges by Position")
 *   · 확률·에퀴티·ICM 계산 = `/en/calculator`(「poker equity calculator」 3,600을 그쪽이 갖는다)
 *   · 이 페이지는 **포스트플랍 GTO 계산**만 가져간다.
 *
 * ▶ SERP 실측으로 잡은 이 페이지의 «이길 자리» (2026-08-19)
 *   ① 「free gto solver」 1위가 **wasm-postflop.pages.dev인데 그 페이지가 스스로**
 *      "This website will no longer be updated." 라고 적어 뒀다(축어). 우리는 그 엔진을
 *      이어받아 유지·확장한 쪽이다 — 사실이라 쓸 수 있고, 검색자에게 가장 필요한 정보다.
 *   ② 가장 가까운 경쟁자 `pokergtosolver.com/en/solver`는 **본문 가시 텍스트 2,934자**이고
 *      **FAQ 4문항이 스키마에만 있고 본문에 0개**다(DOM 실측). 우리는 본문에 전부 둔다
 *      — posting.mdc GEO ④ 「스키마에만 있고 본문에 없으면 LLM이 못 읽는다」가 바로 이 차이다.
 *
 * 🔴 사실 출처 — 전부 2026-08-19에 `?lang=en`으로 열어 화면에서 직접 읽었다:
 *   · 5단계 탭 «① OOP Range ② IP Range ③ Board ④ Bet Sizes ⑤ Run Solver»
 *   · 「⚡ View results」 버튼 **13개**(DOM 카운트 — 문장에 숫자를 박지 않고 배열에서 센다)
 *   · 그룹 헤더 팟·스택 «Pot 5.5bb / Stack 97.5bb», «Pot 22.5bb / Stack 89bb», «Pot 6bb / Stack 97bb»
 *   · 트레이너 «13 study presets · 33 decision nodes · target exploitability 0.5%»
 *   · 채점 «up to 0.35% of the pot = Best play · up to 1% = Acceptable», 하한 0.02bb / 0.05bb
 *   · 예제 ① — Check 98.2%(455.5 combos) · Bet 1.8bb 1.0%(4.5) · Bet 4.1bb 0.9%(3.9) ·
 *     All 464.0 combos · EQ 45.1% · EV 2.09 · EQR 84.0%
 *   §13 산수 검산: 98.2+1.0+0.9=100.1(반올림) · 455.5+4.5+3.9=463.9≈464.0 ·
 *     5.5×0.35%=0.019≈0.02bb, 5.5×1%=0.055≈0.06bb · 22.5×0.35%=0.079≈0.08bb, 22.5×1%=0.225≈0.23bb ·
 *     SRP 팟 5.5=2.5+2.5+0.5, 스택 100−2.5=97.5 · 3벳팟 22.5=11+11+0.5, 100−11=89, SPR 89÷22.5≈4.0 ·
 *     블라인드전 6=3+3, 100−3=97
 *
 * 🔴 **한국어판과 갈라진 자리 하나 — 트레이너 채점 기준.**
 *   한국어 랜딩·FAQ에 남아 있던 「0.01bb 이하 최적 · 0.05bb 이하 허용」은 **낡은 값**이다.
 *   앱이 2026-08-15에 **팟 대비 비율**로 바꿨다(앱 축어: "we switched to pot-relative grading").
 *   같은 날 한국어판도 함께 고쳤다 — **되돌리지 마라.**
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Price", "Free — every feature, no usage limits"],
  ["Install", "None — runs in the browser (WebAssembly)"],
  ["Account", "Not required (sign-in only syncs trainer history)"],
  ["Scope", "Postflop, heads-up (flop, turn, river)"],
  ["Where it solves", "On your own CPU, not on a server"],
  ["Platforms", "Any modern browser — Windows, macOS, Linux, mobile"],
  ["Engine", "Open-source WASM Postflop (AGPL-3.0) · modified source published"],
];

/** 「무엇을 원하나 → 어느 도구」 — 내부 역할 분리를 표로 못박아 카니발을 막는다. */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Solve a postflop spot and see betting frequencies", "The GTO solver on this page", null],
  ["See which hands to open from each position", "Starting hand chart", "/en/hand-chart"],
  ["Work out outs, pot odds, SPR or ICM", "Poker odds calculator", "/en/calculator"],
  ["Train your equity estimates", "Win rate quiz", "/en/win-rate-quiz"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-19 축어 실측). */
const STEPS = [
  { n: "①", title: "OOP Range", desc: "Paint the out-of-position player's preflop range on the 13×13 grid, or type it: 22+, A2s+, KTo+. On the grid, the diagonal is pocket pairs, upper right is suited, lower left is offsuit." },
  { n: "②", title: "IP Range", desc: "Do the same for the player in position. The fastest start is to load a study spot and edit its ranges rather than building both from scratch." },
  { n: "③", title: "Board", desc: "Click three flop cards or hit Random Flop. You can also fix the turn and river if you want to study one specific runout." },
  { n: "④", title: "Bet Sizes", desc: "Set the starting pot, effective stack and the bet and raise sizes per street. Leave the defaults on your first solve and just check the pot and stack." },
  { n: "⑤", title: "Run Solver", desc: "Build the tree, then run it. Solving takes seconds to minutes on your own machine; when it finishes, open the Results tab." },
];

/** 앱 「How to Use」가 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어). */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB caller", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN opener", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말의 구역 구분을 그대로 옮겼다. */
const READ_SCREEN: string[][] = [
  ["Top strip", "Scene picker for the action line (flop → bet → call → turn)", "Click a node to jump to the strategy at that point"],
  ["13×13 matrix (left)", "One cell per hand; the color split inside shows action frequencies", "Red is bet or raise (darker = bigger), green is check or call, a dimmed cell is not in the range"],
  ["Tiles (top right)", "Action frequencies and combo counts across the whole range", "This is where you read \"the range checks 98% here\""],
  ["Hand categories (middle right)", "How the range connects with the board — top pair, draws, no made hand", "A quick read on which player this board favors"],
  ["Table (bottom right)", "Per-hand weight, equity, EV and EQR plus action %", "Click a column header to sort; the summary exports to CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Solve flop, turn and river", "yes", "Full postflop tree"],
  ["Solve preflop", "no", "Opening ranges live in the hand chart"],
  ["Custom bet and raise sizes", "yes", "% of pot, multiples, all-in, geometric"],
  ["Separate donk (lead) sizing", "yes", "Design the OOP-leads line on its own"],
  ["Rake and rake cap", "yes", "Match the conditions of your actual game"],
  ["Edit the game tree by node", "yes", "Add or remove actions at a specific node"],
  ["Precision and memory modes", "yes", "32-bit float or 16-bit integer · ~4GB browser limit"],
  ["Set target exploitability", "yes", "Lower is more accurate and slower"],
  ["Save ranges and configurations", "yes", "Save, load, import and export"],
  ["Export the summary to CSV", "yes", "Straight into a spreadsheet"],
  ["Share a spot by link", "yes", "Send your exact spot to a study group"],
  ["Open pre-solved study spots", "yes", "No waiting — solutions appear instantly"],
  ["GTO Trainer with EV-loss grading", "yes", "Plus weak-spot filters and a review queue"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 수치는 넣지 않는다(§12-B).
 *   2026-08-19 재확인: `gtowizard.com/pricing/`이 로그인 페이지로 리다이렉트된다.
 * 🔴 **「PioSOLVER는 유료」라고 쓰지 마라** — 공식 문서에 무료 버전 안내가 있다.
 *   확인된 것은 **설치형·윈도우**뿐이다("Download the installer" · ".exe" · "Windows pop-up").
 */
const COMPARE: string[][] = [
  ["How it computes", "Solves in your browser, on demand", "Browse solutions computed in advance", "Solves locally after you install it"],
  ["Install", "None", "None", "Installer, Windows"],
  ["Coverage", "Postflop, heads-up", "Often includes preflop", "Postflop"],
  ["Editing ranges and trees", "Anything you like", "Within the published solution set", "Anything you like"],
  ["Where the solve runs", "Your own machine", "The provider's, done in advance", "Your own machine"],
];

/**
 * 교육 예제 — 앱의 영어 라벨을 그대로 옮겼다(2026-08-19 축어).
 * 🔴 **개수를 문장에 박지 않는다**(CLAUDE.md §1) — 아래 배열에서 세어 쓴다.
 * 🪶 각 스팟의 해설 글은 **발행된 것부터** 링크한다. `slug`가 채워진 행만 링크가 되고
 *    나머지는 이름·요약만 남는다 — **없는 링크를 미리 걸지 않는다**(404는 색인에 남는다).
 *    영어판을 발행할 때마다 그 행에 `slug`를 채우면 된다(핸드오프 T24 ②).
 */
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot — BTN vs BB",
    cond: "OOP: BB (caller) · IP: BTN (opener) · Pot 5.5bb · Stack 97.5bb",
    items: [
      { board: "A♥7♦2♣", name: "Dry Ace-High Board", slug: "a-high-board-cbet", note: "The textbook range-advantage flop — the ace smashes the opener's range" },
      { board: "K♠8♦3♣", name: "Dry King-High Board", slug: "k-high-board-cbet", note: "Still favors the opener, but checks creep up. Compare it with the ace" },
      { board: "Q♠J♦T♠", name: "Connected Broadway, Two-Tone", note: "Both ranges connect hard; big bets and check-raises come alive" },
      { board: "9♥8♥7♣", name: "Middle Connected, Two-Tone", note: "The caller-friendly texture where \"always c-bet\" falls apart" },
      { board: "Q♠9♠2♠", name: "Monotone Board", note: "Big bets disappear — even made flushes check often" },
      { board: "6♣6♦3♥", name: "Paired Board", note: "Nobody connects, so the bluffing share goes up" },
      // ⚠ 「peaks」(=13개 중 최대)로 쓸 뻔했다. 앱은 "BB check-raises a lot on this texture"라고만
      //    적고 최대라고 하지 않는다 — 13개를 비교해 확인하지 않은 주장은 쓰지 않는다.
      { board: "6♠5♥2♦", name: "Low Rainbow Board", note: "An overcard war — the texture where the big blind check-raises a lot" },
    ],
  },
  {
    label: "3-Bet Pot — BB 3-bets, BTN calls",
    cond: "OOP: BB (3-bettor) · IP: BTN (caller) · Pot 22.5bb · Stack 89bb · SPR ≈ 4.0",
    items: [
      { board: "A♦K♠2♥", name: "Ace-High Board, 3-Bettor's Edge", note: "The best flop for the 3-bettor; at low SPR small bets pressure everything" },
      { board: "Q♥T♥7♠", name: "Dynamic Two-Tone Board", note: "A board the caller likes too — watch where the 3-bettor slows down" },
      { board: "8♦5♣2♠", name: "Low Dry Board", note: "Misses the 3-bettor entirely, yet overpairs keep the pressure on" },
    ],
  },
  {
    label: "Blind vs Blind — SB vs BB",
    cond: "OOP: SB (opener) · IP: BB (caller) · Pot 6bb · Stack 97bb",
    items: [
      { board: "K♥T♦6♠", name: "King-Ten-High Board", note: "Wide ranges, so both players are weak — compare with the BTN version" },
      { board: "7♦6♦5♣", name: "Low Connected, Two-Tone", note: "Two wide ranges on an ultra-connected board: two pairs and draws everywhere" },
      { board: "A♠A♥6♦", name: "Ace-Paired Board", note: "Trips are rare with two aces down — bluff heaven, so watch the folds" },
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

export default function SolverClientEn() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          Free GTO Solver — Solve Poker Spots in Your Browser
        </h1>
        {/*
          ★h1 직후 직답 단락. 「poker solver」(1,600)·「gto solver」(390)로 들어온 검색자의
            질문에 첫 화면에서 답한다. AI 검색도 페이지가 아니라 이 단락을 뽑는다.
        */}
        <p className="mt-3 text-muted-foreground">
          A <strong className="text-foreground">GTO solver</strong> takes both players&apos; ranges, a
          board and the stack sizes, and calculates how often each of the 169 starting hands should
          bet, check or fold. The HoldemMaster solver runs that calculation{" "}
          <strong className="text-foreground">in your browser — nothing to download, no account, no
          paid tier</strong> — and shows equity, EV and equity realization for every hand alongside
          the strategy grid. It covers postflop play heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Open the solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Desktop Chrome recommended — iOS and Safari solve single-threaded, so custom solves are slower
          </p>
        </div>
        <Table head={["", "Details"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── GTO 솔버란 ───────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">What is a GTO solver?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A GTO solver computes{" "}
          <strong className="text-foreground">game theory optimal</strong> strategy from scratch. Feed
          it ranges, a board, stacks and a bet-sizing tree, and it iterates toward a Nash equilibrium,
          returning bet, check and fold frequencies for all 169 hands. That is the difference between
          a solver and a chart: a chart stores an answer somebody worked out earlier, while a solver
          computes the answer for the exact spot you are in.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          It is not a chart, and it is not a trainer with someone&apos;s opinions baked in. Give it a
          different flop and it gives you a different answer, because it recomputes rather than
          recalls.
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(실측):
          poker solver 1,600 · gto poker solver 260 · poker gto solver 110 · gto calculator 70 ·
          postflop solver 10. 억지 나열이 아니라 엔티티를 명확히 하는 자리다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          The same tool goes by several names. <strong className="text-foreground">Poker solver</strong>,
          GTO poker solver and <strong className="text-foreground">postflop solver</strong> all mean this
          kind of program, and people also call the output a GTO chart or a range chart. Only the search
          term differs — what this page&apos;s solver computes is the same thing.
        </p>
        <Table
          head={["What you want to do", "Tool to use"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
      </section>

      {/* ── GTO 뜻 ───────────────────────────────────────────────────── */}
      {/*
        ★2026-08-19 H2 신설 — lowfruits 실측: `gto poker meaning` **390**(WS3 2·LowDA 22) ·
        `gto poker what is it` · `gto poker explained` · `gto poker definition` · `gto poker term` ·
        `gto poker full form`이 전부 winnable이다. 종전엔 이 답이 「What is a GTO solver?」 문단
        안에 묻혀 있어 **질문 형태와 매치되지 않았다.** 근거 = `docs/keyword-bank/en-gto-series.md` §2.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">What does GTO mean in poker?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO stands for <strong className="text-foreground">Game Theory Optimal</strong>: a strategy
          that cannot be exploited in the long run, no matter how the other player adjusts. It is a
          baseline rather than a maximum — it does not try to punish a bad opponent, it makes sure a
          good one cannot punish you.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          The property that surprises most players is that{" "}
          <strong className="text-foreground">GTO mixes actions with the same hand</strong> — betting
          it 70% of the time and checking 30% — so your line cannot be read. Output is therefore a
          frequency table, not a single instruction. A solver tells you <em>how often</em> to do
          something, not <em>what</em> to do, and that is why a study session ends with percentages
          rather than rules.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">How do you use a poker solver? Five steps</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          If this is your first solver, <strong className="text-foreground">open a study spot before
          you configure anything.</strong> Those spots are already solved, so you learn to read the
          output before you learn to drive the inputs. When you do build your own spot, the tabs run
          in order down the left sidebar.
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
          Custom-spot inputs are in arbitrary integer chips. To think in big blinds, use{" "}
          <strong className="text-foreground">10 chips = 1bb</strong> (a pot of 55 is 5.5bb). Study
          spots and the trainer convert on that scale automatically.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Starting from nothing is the slowest way in, so paste these standard 100bb BTN-vs-BB ranges
          into ① and ② — they are the ranges the study spots use:
        </p>
        <Table head={["Seat", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">How do you read the results screen?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The results screen has four working areas: the{" "}
          <strong className="text-foreground">scene picker</strong> along the top, the{" "}
          <strong className="text-foreground">13×13 strategy matrix</strong> on the left, and on the
          right the <strong className="text-foreground">frequency tiles, hand categories and detail
          table</strong>. Read the left side for what an individual hand does, and the right side for
          what the range does as a whole.
        </p>
        <Table head={["Where", "What it holds", "How to read it"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          A worked example: open the first study spot (A♥7♦2♣ rainbow, BB acting first) and the tiles
          read <strong className="text-foreground">Check 98.2%</strong> across 455.5 combos, with Bet
          1.8bb at 1.0% and Bet 4.1bb at 0.9%. The summary row of the detail table shows the whole
          range at 464.0 combos, 45.1% equity, 2.09bb EV and{" "}
          <strong className="text-foreground">84.0% EQR</strong>. Equity realization below 100% is the
          number worth sitting with: this range holds 45.1% equity but, playing out of position
          without the initiative, only banks 84% of what that equity is worth.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          If those terms are new, the{" "}
          <Link href="/en/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            equity guide
          </Link>{" "}
          and the{" "}
          <Link href="/en/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            continuation bet guide
          </Link>{" "}
          cover what the solver is measuring before you try to read its numbers.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Is it really a free poker solver?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Yes, and without the usual asterisks: no payment method, no locked features, no daily solve
          limit and no account. The settings that normally sit behind a paid desktop solver — rake and
          rake cap, precision modes, editing the game tree node by node — are all here. The one real
          boundary is that this solver is{" "}
          <strong className="text-foreground">postflop and heads-up</strong>.
        </p>
        <Table
          head={["Feature", "Included", "Notes"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">Yes</span>
            ) : (
              <span className="font-bold text-muted-foreground">No</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Try it free →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 ──────────────────────────────────────────── */}
      {/*
        ★2026-08-19 H2 신설 — `poker postflop *` 444개 중 winnable 68개가 나왔고
        **LowDA가 한 자리**다: `poker postflop solver free`·`~ online free` **DA1** ·
        `poker postflop trainer` DA7 · `poker postflop ranges`(WS3 3·DA16) ·
        `poker postflop strategy` 30(DA21) · `how to study postflop`(WS10 7).
        🔴 그런데 `poker postflop charts`류는 **`/en/hand-chart` 축과 겹친다** — 본문 언급만 하고
           제목·H2로는 조준하지 않는다(카니발 방지 · 뱅크 §5).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Why postflop only — and what does that cover?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This is a <strong className="text-foreground">postflop solver</strong>: it starts once the
          flop is down and solves the rest of the hand for two players. Preflop is deliberately left
          out, because preflop ranges are a different kind of problem — they are stable enough to read
          off a chart, while postflop changes with every board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Inside that boundary nothing is held back. You set both{" "}
          <strong className="text-foreground">postflop ranges</strong>, any flop, turn and river, the
          starting pot and effective stack, and a full bet-sizing tree per street. So the postflop
          strategy you get is for your game, not a generic one — including rake, which most study
          material quietly ignores.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          If you want the preflop half, that lives in the{" "}
          <Link href="/en/hand-chart" className="font-semibold text-primary hover:underline">
            starting hand chart
          </Link>
          . The two together cover a hand end to end: the chart decides what you open with, the solver
          decides what happens after the flop.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      {/*
        ★2026-08-19 H2 재조준 — `gto poker trainer` 70이 **LowDA 3**, `gto poker practice free`와
        `gto poker software free`가 **LowDA 1**이다. 종전 H2는 「How does the GTO Trainer grade you?」로
        채점만 물었다 — 검색자가 치는 형태(«free gto poker trainer»)와 어긋나 있었다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Is there a free GTO poker trainer? How does it grade you?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Yes — the GTO Trainer is built into the same free software, with no separate signup. It
          turns the solved spots into practice: you are dealt a hand at a real decision point and pick
          an action, and it grades you.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Grading is not right or wrong, but by{" "}
          <strong className="text-foreground">EV loss</strong>. Because GTO
          mixes actions, picking the lower-frequency option is not automatically a mistake — what
          matters is how much expected value the choice gave up. Pick an action and the trainer shows
          every action&apos;s frequency and EV alongside the cost of yours.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. 절대 bb가 아니다 — 앱이 2026-08-15에 바꿨고
               한국어 랜딩에 남아 있던 옛 절대값(0.01/0.05bb)은 같은 날 함께 고쳤다.
          */}
          <li className="text-muted-foreground">
            Thresholds are measured <strong className="text-foreground">against the pot</strong> —{" "}
            <span className="font-semibold text-emerald-500">up to 0.35%</span> is a best play ·{" "}
            <span className="font-semibold text-blue-500">up to 1%</span> is acceptable ·{" "}
            <span className="font-semibold text-orange-500">beyond that</span> is a spot to review
          </li>
          <li className="text-muted-foreground">
            The same 0.05bb is a serious error in a small pot and trivial in a big one. In a 5.5bb
            single raised pot the cutoffs land at 0.02bb and 0.06bb; in a 22.5bb 3-bet pot, 0.08bb and
            0.23bb. Floors of 0.02bb and 0.05bb keep grading above solver noise
          </li>
          <li className="text-muted-foreground">
            Questions are drawn from{" "}
            <strong className="text-foreground">13 study presets and 33 decision nodes</strong>{" "}
            (target exploitability 0.5%), and you can drill single raised pots, 3-bet pots or blind vs
            blind on their own
          </li>
          <li className="text-muted-foreground">
            Hands are dealt <strong className="text-foreground">in proportion to the real GTO range
            weights</strong> — a hand comes up as often as you would actually hold it there
          </li>
          <li className="text-muted-foreground">
            Streaks, weak-spot breakdowns and a <strong className="text-foreground">Review</strong>{" "}
            queue of your biggest EV losses run on your history, which stays on the device unless you
            sign in
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Open the GTO Trainer →" variant="outline" />
        </div>
      </section>

      {/* ── 교육 예제 (앱 라벨 그대로) ───────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} solved study spots you can open instantly
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every spot below is already solved, so the strategy appears the moment you open it — no
          waiting, no configuration. Ranges approximate standard 100bb online play; load one, change a
          range, and re-solve to see what moved. This is the fastest way to build intuition for how
          board texture rewrites strategy.
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
                        href={`/en/blog/${item.slug}`}
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
        ⚠ 가격·무료 티어 수치를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색은 실재한다 — gto wizard 12,100 · gto wizard price 260 ·
           gto wizard free 70 · piosolver 590. 직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">How is this different from GTO Wizard or PioSOLVER?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          All three are called solvers, but they differ in where and when the calculation happens.
          Solution libraries such as GTO Wizard let you browse spots solved in advance, which is fast
          and can include preflop. Desktop solvers such as PioSOLVER are installed on a Windows machine
          and solve locally. This one{" "}
          <strong className="text-foreground">solves on demand inside your browser</strong>, so ranges
          and trees are yours to rewrite with nothing to install.
        </p>
        <Table
          head={["", "HoldemMaster solver", "Solution library", "Installed desktop solver"]}
          rows={COMPARE}
        />
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지 축어**다
             ("This website will no longer be updated.") + GitHub 저장소 제목 "[Development suspended]".
             추측이 아니라 원본이 스스로 적어 둔 문장이다.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          One more distinction worth knowing if you arrived searching for{" "}
          <strong className="text-foreground">WASM Postflop</strong>: the original open-source project
          announces on its own site that it will no longer be updated, and its repository is marked as
          development suspended. This solver is a maintained fork of that engine — same AGPL-3.0
          license, same published source, with the interface, study spots and trainer added on top.
        </p>
      </section>

      {/* ── 함께 쓰면 좋은 도구 ──────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Tools to use alongside the solver</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/en/hand-chart" className="font-semibold text-primary hover:underline">
              Starting hand chart
            </Link>{" "}
            — this solver is postflop only. Which hands to <strong>open</strong> from each position
            lives in the chart, and it is where the ranges you paste into ① and ② come from
          </li>
          <li>
            <Link href="/en/calculator" className="font-semibold text-primary hover:underline">
              Poker odds calculator
            </Link>{" "}
            — outs, pot odds, SPR, M value and ICM when you want a number without running a solve
          </li>
          <li>
            <Link href="/en/win-rate-quiz" className="font-semibold text-primary hover:underline">
              Win rate quiz
            </Link>{" "}
            — solver output is mostly equity, so sharpening your equity estimates first makes the
            results screen much easier to read
          </li>
          <li>
            <Link href="/en/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Texas Hold&apos;em strategy guide
            </Link>{" "}
            — the concepts the solver quantifies: position, ranges, aggression and pot control
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 가장 가까운 경쟁자는 FAQ 4문항이 **스키마에만** 있고
           본문에 0개다(2026-08-19 DOM 실측). 그쪽 방식으로 하지 않는다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_EN.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Run the free GTO solver →" />
        {/*
          🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
             오프라인에서 되는 것은 교육 예제 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접
             계산은 계산 엔진을 한 번 내려받은 뒤에만 돈다(한국어판 주석과 같은 경고).
        */}
        <p className="mt-3 text-xs text-muted-foreground">
          Install it to your home screen and the study spots and trainer are stored on the device, so
          you can drill <strong className="text-foreground">without an internet connection</strong> —
          Chrome and Edge show an install icon in the address bar; on iPhone use Share → Add to Home
          Screen.
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        This solver is based on WASM Postflop by Wataru Inariba (AGPL-3.0), localized and enhanced by
        HoldemMaster. The full modified source code is published under the same license.
      </p>
    </div>
  );
}
