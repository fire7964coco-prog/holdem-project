/**
 * `/en/solver` FAQ — 화면(solver-client.tsx)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 정본 구조 = `app/solver/faq.ts`(한국어판).
 *
 * ★2026-08-19 신설 (T24 · Play 스토어 앱 등록에 영어 콘텐츠가 필요).
 *
 * 🔴 **번역이 아니다.** 한국어판 17문항을 그대로 옮기지 않았다 —
 *   ① 「한국어로 된 GTO 프로그램인가요?」는 영어권에서 무의미하다 → **Mac·Linux·모바일**
 *      문항으로 교체했다(`gto solver mac` 10이 12개월 +50%로 실측되는 자리다).
 *   ② 「GTO가 무슨 뜻인가요」는 EN에서 검색 형태가 다르다 → `gto poker strategy`(70) 문맥으로.
 *   ③ 경쟁 도구 문항은 **브랜드 두 개를 다 세운다** — `gto wizard` **12,100**,
 *      `piosolver` **590**(라쿠 US/English 실측 2026-08-19). 한국어판보다 이 축이 훨씬 크다.
 *   ④ 삼성 인터넷 문항은 **남겼다.** 한국 특화가 아니라 삼성 단말 전역의 브라우저 경고다.
 *
 * 🔴 **답의 사실은 전부 2026-08-19에 solver.holdemmaster.com을 영어(`?lang=en`)로 열어
 *    화면에서 직접 확인한 것만 쓴다.** 확인한 것 —
 *    · 사이드바 5단계 «① OOP Range ② IP Range ③ Board ④ Bet Sizes ⑤ Run Solver» (축어)
 *    · 트레이너 헤더 «13 study presets · 33 decision nodes · target exploitability 0.5%» (축어)
 *    · 채점 기준 «up to 0.35% of the pot = Best play · up to 1% = Acceptable» + 하한 0.02/0.05bb (축어)
 *    · Study Spots 「⚡ View results」 버튼 **13개**(DOM에서 세었다)
 *    · 예제 ① 결과 — Check 98.2%(455.5 combos) · Bet 1.8bb 1.0% · Bet 4.1bb 0.9% ·
 *      All 행 464.0 combos · EQ 45.1% · EV 2.09 · EQR 84.0%
 *    · AGPL 고지 축어 «based on WASM Postflop (by Wataru Inariba, AGPL-3.0), localized and
 *      enhanced by HoldemMaster»
 *
 * ⚠ **경쟁 도구의 가격·무료 티어 수치는 쓰지 않는다** (한국어판과 같은 규율, CLAUDE.md §12-B).
 *   2026-08-19 재확인: `gtowizard.com/pricing/`은 **`app.gtowizard.com/login`으로 리다이렉트**돼
 *   비로그인 상태로는 가격을 볼 수 없다. 액수 없이도 «우리는 무료»는 성립한다.
 *   🔴 그리고 **「PioSOLVER는 유료」라고 쓰지 마라** — 그쪽 공식 문서에
 *   "Select PioSolver Free version and download / install."이 있다(무료 버전 실재).
 *   ✅ PioSOLVER가 **설치형·윈도우**라는 것만 1차 출처로 확인됐다(piosolver.com/docs —
 *      "Download the installer" · "PioSOLVER-version.exe" · "Windows pop-up" · ".Net Framework").
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_EN: FaqItem[] = [
  {
    q: "What is a GTO solver?",
    a: "A GTO solver is a program that calculates game theory optimal poker strategy from scratch. You give it both players' ranges, a board, stack sizes and bet sizes, and it iterates toward a Nash equilibrium, then tells you how often each of the 169 starting hands should bet, check or fold. It is not a chart that stores someone's opinion — it computes the answer for your exact spot.",
  },
  {
    q: "What does GTO mean in poker?",
    a: "GTO stands for Game Theory Optimal: a strategy that cannot be exploited in the long run no matter how your opponent adjusts. Its defining property is mixing — the same hand may bet 70% of the time and check 30% of the time, so your pattern cannot be read. That is why solver output is a frequency table rather than a single instruction.",
  },
  {
    q: "Is this GTO solver really free?",
    a: "Yes. Every feature is free with no usage limits, no payment method, no locked tier and no account required. Signing in is optional and only syncs your trainer history across devices. The solver is built on the open-source engine WASM Postflop (AGPL-3.0), and HoldemMaster's modified source code is published under the same license.",
  },
  {
    q: "Do I need to download or install anything?",
    a: "No. It is a WebAssembly application, so it runs the moment you open the page in Chrome, Edge, Firefox or Safari. The solve runs on your own CPU rather than on a server, so a faster machine means faster solves. There is no installer, no license key and no desktop client to keep updated.",
  },
  {
    q: "How accurate is a browser-based solver?",
    a: "It runs the same iterative algorithm desktop solvers use, and you set the accuracy yourself: the target exploitability defaults to 0.5% and can be lowered at the cost of solve time. The real limits are memory and speed, not correctness — a browser tab can address about 4GB, so very large trees are better suited to a desktop solver.",
  },
  {
    q: "How do I use a poker solver for the first time?",
    a: "Start with Study Spots rather than a custom solve. Those spots are already solved, so you can learn to read the output before learning to configure it. When you are ready, the Custom Spot tabs run in order: ① OOP Range, ② IP Range, ③ Board, ④ Bet Sizes, ⑤ Run Solver. Leave the bet sizing tree at its defaults on your first solve.",
  },
  {
    q: "What poker situations can it analyze?",
    a: "Any heads-up postflop spot. You set both ranges, the flop (and turn and river if you want a specific runout), the starting pot and effective stack, and bet and raise sizes street by street, including rake and rake cap. Preflop is not solved here — for opening ranges by position, use the starting hand chart instead.",
  },
  {
    q: "How is this different from GTO Wizard or PioSOLVER?",
    a: "Mostly in where the calculation happens. Solution libraries such as GTO Wizard let you browse spots that were solved in advance, which is fast and covers preflop. Desktop solvers such as PioSOLVER are installed on a Windows PC and solve locally. This one solves in your browser, so you can rewrite ranges and trees freely with nothing to install.",
  },
  {
    /**
     * ★2026-08-19 추가 — lowfruits 실측에서 이 문장 그대로가 winnable로 잡혔다:
     *   `which gto solver is better, piosolver or gtowizard`(WS3 2 · **LowDA 5**).
     * 🔴 **어느 쪽이 낫다고 판정하지 않는다.** 우리가 파는 물건이 있어 공정한 심판이 될 수 없고,
     *   가격·기능은 1차 출처로 확인되지 않는다(§12-B). «무엇을 하려느냐»로 되돌려 준다.
     */
    q: "Which GTO solver is better, PioSOLVER or GTO Wizard?",
    a: "They answer different questions, so the honest answer is what you want to do. A solution library is faster to browse and covers preflop, which suits studying standard spots. An installed desktop solver handles bigger trees than a browser can. If you want to solve your own postflop spot right now without paying or installing anything, that is what this solver is for — and you can compare its answer with either of them.",
  },
  {
    q: "Does it work on Mac, Linux or mobile?",
    a: "Yes — any modern browser works, which is the practical advantage over Windows-only desktop solvers. One caveat: on iOS and Safari, browser limits force single-threaded solving, so custom solves are slow there. On phones, use the pre-solved Study Spots and the GTO Trainer, and run your own solves on a desktop browser.",
  },
  {
    q: "What is the GTO Trainer?",
    a: "It is a drill mode built on the solved study spots. The trainer covers 13 study presets and 33 decision nodes, and it deals you hands drawn from the actual GTO range weights — so a hand shows up as often as you would really hold it there. You pick an action and it grades the decision against the solution.",
  },
  {
    q: "Why does the trainer grade by EV loss instead of right or wrong?",
    a: "Because GTO mixes actions, a low-frequency choice is not automatically a mistake. The trainer measures how much expected value your action gave up, relative to the pot: up to 0.35% of the pot is a best play, up to 1% is acceptable, and anything beyond that is worth reviewing. Cutoffs have floors of 0.02bb and 0.05bb.",
  },
  {
    q: "Why is grading relative to the pot?",
    a: "Because the same 0.05bb is a serious error in a small pot and trivial in a large one. Absolute-bb grading made 3-bet pots look worse than they were, so grading switched to a percentage of the pot in August 2026. In a 5.5bb single raised pot the cutoffs work out to 0.02bb and 0.06bb; in a 22.5bb 3-bet pot they are 0.08bb and 0.23bb.",
  },
  {
    q: "Where is my study progress saved?",
    a: "On your device by default, with no account needed. If you sign in with a HoldemMaster account you can keep the history on the account and continue on another device. Streaks, weak-spot breakdowns by scenario, and the Review queue of your biggest EV losses all run on that history.",
  },
  {
    q: "Can I install it to my home screen?",
    a: "Yes. Installed, it opens full screen without a browser bar, and the study spots and trainer are stored on the device so you can drill without an internet connection. In Chrome or Edge use the install icon in the address bar; on iPhone use Share, then Add to Home Screen. Solving custom spots offline works only after the solver engine has been downloaded once.",
  },
  {
    q: "Is it safe to install to the home screen?",
    a: "Nothing is installed on your device in the usual sense — the browser creates a shortcut that runs inside the browser. You can verify it rather than take our word for it: no camera, contacts, SMS or location permission is requested, and the network tab in developer tools shows the requests it makes. The source code is public on GitHub under AGPL-3.0, and removing it leaves nothing behind.",
  },
  {
    q: "Samsung Internet says \"Unsafe app blocked\" — what does that mean?",
    a: "It does not mean malware was found. Samsung Internet builds its own install package, and that package is not yet on Google's trusted list, so the browser shows a warning. Installing through Chrome avoids it. To continue in Samsung Internet, tap More details on the warning and choose Install anyway.",
  },
  {
    /** ★2026-08-19 — `gto poker open source` WS10 7·**LowDA 3** · `wasm postflop` LowDA 3. */
    q: "Is this an open source GTO poker solver?",
    a: "Yes. It is based on WASM Postflop by Wataru Inariba, released under AGPL-3.0, and HoldemMaster's localized and enhanced version publishes its full modified source under the same license. The original project states on its own site that it will no longer be updated, which is part of why this version is maintained separately.",
  },
];
