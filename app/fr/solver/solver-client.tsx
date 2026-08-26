"use client";

import Link from "next/link";
import { SOLVER_FAQ_FR } from "./faq";

/**
 * ★CTA는 `?lang=fr`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-08-24 라이브 확인** — 솔버가 fr을 이날 배포했고(사장님 통보 → Playwright 실측),
 *   `?lang=fr`로 열면 `<html lang="fr">`가 되고 화면 전체가 프랑스어로 뜬다
 *   (title «HoldemMaster GTO Trainer — Solver et trainer GTO gratuits pour le Texas Hold'em»).
 *   다른 랜딩과 같이 **UTM은 붙이지 않는다**.
 *   ⚠ `curl`로는 확인할 수 없다 — SSR 초기 HTML이 한국어이고 타이틀은 JS 실행 후 바뀐다.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=fr";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/fr/solver` 랜딩 — ★2026-08-24 신설 (9번째: ko·en·ja·es·pt·de·zh·zh-hant·fr)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **프랑스어권에 그 진입로가 0개였다.** 앱 fr 배포 «당일» 개설.
 *
 * ▶ 키워드 근거 (2026-08-24 실측 · 라쿠 France/French requestId 1255949 · 48개월 + 서제스트 3종 +
 *   웹서치 3건. 판정 전체 = `docs/keyword-bank/fr-gto-solver.md`. ⚠ DFS 인증 만료로 단일 벤더):
 *     🔴 **어순 정본 = `solver poker`**(320 대 `poker solver` 90 — es와 같고 de·zh와 반대.
 *     6개 언어 연속: 어순은 언어마다 실측). `gto poker` 480 · `gto solver` 50 · `solveur poker` 50.
 *     🟢 **무료 축이 문자열로 실재한다** — `solver poker gratuit` **110**(de kostenlos 전부 null과
 *     대조적). **훅과 조준축이 한 문자열로 겹치는 첫 로케일** → H1이 정면으로 받는다.
 *     `range poker`/`ranges` **1,600**(플랍 이후 절 H2 편입) · `calculateur poker` 390(내장 탭
 *     문단+FAQ) · `equity poker` 50 · `piosolver` 170 · `gto wizard` 8,100(브랜드 — 비교 절만).
 *
 * 🔴🔴 **오염어 둘 — 앵커 필수**(뱅크 §1):
 *   · `GTO` 단독 = 자동차(Ferrari 250 GTO 등)·『GTO』 아니메 → poker와 결합.
 *   · **`solveur`/`solver` 단독 = Excel·수학·스도쿠·스크래블**(서제스트 실증 — `solveur` 2,900은
 *     전부 남의 것: solver excel·solveur d'équation·solveur sudoku·solveur scrabble).
 *   ja→es→pt→de→zh→zh-hant→fr 일곱 번 연속: **물려받는 것은 규율이지 오염어가 아니다.**
 * ❌ `simulateur poker`(170 · 12m +50%) 조준 금지 — es simulador·de simulator 동형의 게임 의도
 *   의심(뱅크 §1-④). FAQ가 «게임이 아니라 계산 도구»로 가른다. ❌ RTA·봇 축 금지.
 *
 * 🔴🔴 카니발 + 내부링크 — **fr 코퍼스는 규칙 클러스터 6편뿐이다**(뱅크 §3):
 *   · GTO·solver·range·equity·계산기 축 = **전부 소유자 0** → 랜딩이 가져간다.
 *   · 입문·règles 축 = `fr/texas-holdem-rules-for-beginners` 소유 — FAQ 핸드오프.
 *   · 🔴 **표준 내부링크 9종(chart·pot-odds·equity·3bet·strategy·glossary…)이 fr에 없다** —
 *     EN parity(개수까지 동일) 불성립. 링크는 실존 6편(rules·game-order·betting-actions·
 *     blind-meaning·all-in-rules·showdown-rules)로만 걸었고 전건 실존 확인.
 *     **프리플랍 안내는 앱 내장 «Charts préflop» 탭**(실재 네비 축어)으로 보낸다 — 없는 글에
 *     미리 링크 걸지 않는다(404는 색인에 남는다). **fr 전략 코퍼스 확장 때 보강**(핸드오프 미결).
 *
 * 🔴 사실 출처 — 전부 2026-08-24에 `?lang=fr`로 열어 DOM에서 직접 읽었다
 *   (골격·13스팟 축어 = `docs/solver-app-verbatim-fr-2026-08-24.md`):
 *   · 언어 셀렉터 **9개**(fr 배포로 8→9 — 기존 8개 랜딩의 언어 열거 소급 사유) ·
 *     히어로 «La stratégie GTO, directement dans ton navigateur.» / «Rien à installer, rien à payer.»
 *   · 특징 4칸 «Gratuit / Toutes les fonctions, sans limite d'usage» · «Étude hors ligne» ·
 *     «Calcul rapide / Multithread» · **«Trainer GTO / notés sur la perte d'EV par rapport au
 *     pot»** 🟢 팟 대비 정정본
 *   · 네비 «Spots d'étude ⚡ Direct» «Trainer GTO Note EV» «Charts préflop Ranges» «Equity % victoire»
 *   · 사이드바 «① Range OOP ② Range IP ③ Board ④ Bet sizes Réglages ⑤ Calculer»
 *   · 결과 5구역(Mode d'emploi 축어): «Barre d'actions du haut» · «Matrice 13×13 (à gauche)» ·
 *     «Tuiles (en haut à droite)» · «Catégories de mains (au milieu à droite)» · «Tableau (en bas
 *     à droite)» · PWA «♠ Ajouter à l'écran d'accueil» · 패널 «Mains / Tirages»
 *   · 그룹 라벨 «Single Raised Pot — BTN vs BB (fondamentaux)» «Pot 3-bet — BB 3-bet, BTN paye
 *     (SPR bas)» «Blind vs Blind — SB vs BB (ranges larges)» · 조건 «Pot 5,5bb · Stack 97,5bb» 등
 *   · 🔴 **fr 앱은 소수 구분자가 «쉼표»이고 % 앞에 공백을 둔다**(77,9 % · 5,5bb — 프랑스 타이포).
 *     랜딩도 같은 표기를 쓴다.
 *   · 🪶 **register = tutoiement** — 앱 fr·GTO Wizard fr·프랑스 커뮤니티 전부 tu(뱅크 §2).
 *   §13 산수 검산(여덟 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5,5 = 2,5+2,5+0,5 · 스택 100−2,5 = 97,5 ·
 *     3벳팟 22,5 = 11+11+0,5 · 100−11 = 89 · 블라인드전 6 = 3+3 · 100−3 = 97 ·
 *     5,5×0,35 % = 0,019 ≈ 0,02bb · 5,5×1 % = 0,055 ≈ 0,06bb ·
 *     22,5×0,35 % = 0,079 ≈ 0,08bb · 22,5×1 % = 0,225 ≈ 0,23bb ·
 *     0,08÷5,5 = 1,45 % · 0,08÷22,5 = 0,36 %
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   fr 앱 실측(2026-08-24): 🟢 ③⑨⑬ 정정본 · 🟢 **⑩은 «presque» 완화형이라 통과**(en·de·ja 계열 —
 *   zh·zh-hant의 «整個» 절대형과 다르다. **fr의 정정 대상은 «넷»이다 — 머릿수를 물려받지 마라**).
 *   ⚠ 폐기 문구 원문을 주석에 적지 않는다(M-047). 축어는 fr 축어 문서에 있다:
 *     · ① = **RP-20** — «BB 체크 다음 BTN이 넓게 친다» 류(체크 «다음»은 화면이 안 준다 —
 *       fr 확인으로 **9/9 전 언어**가 됐다) → 화면값(체크 98,2 %)으로 교체.
 *     · ④ = **RP-01 계열 + RP-02** — «콜러 우위 + C벳 빈도 붕괴» 류. §4-B ④: OOP 벳 23,7 % ·
 *       에퀴티 48,5 대 51,5.
 *     · ⑦ = **RP-19 + 조작 지시** — §4-B ⑦ = 체크 96,8 · 벳 3,2뿐.
 *     · ⑧ = **RP-03** — 사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양(⑨ 98,4 % 반례).
 *   🟢 ⑪은 빈도 수치 없음(RP-18 미충족 ✅) — 수치를 붙이지 마라.
 *   🪶 ③의 «des 13 spots»는 편 수 하드코딩 → «de toute cette série»로 갈았다(RP-08).
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라** — 오프라인은 스팟 열람·트레이너뿐이고,
 *   커스텀 계산은 엔진을 한 번 내려받은 뒤에만 돈다(여덟 랜딩 공통 경고).
 *
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 정상이다.** GTO 시리즈 13편은 ko·en뿐(fr 0편).
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Prix", "Gratuit — toutes les fonctions, sans limite d'usage"],
  ["Installation", "Aucune — il tourne dans ton navigateur (WebAssembly)"],
  ["Compte", "Aucun (la connexion ne sert qu'à synchroniser le Trainer)"],
  ["Couverture", "Postflop, heads-up (flop · turn · river)"],
  // 🪶 네이티브 렌즈(2026-08-25): «rien ne» 절대문 대신 계산 한정으로(트레이너 동기화 예외와 정합).
  ["Où se fait le calcul", "Sur ton propre appareil — tes calculs ne passent pas par nos serveurs"],
  ["Compatibilité", "Navigateurs modernes — Windows, macOS, Linux, mobile"],
  // 🟢 이 열거는 앱 셀렉터(9개)와 1:1이다 — fr 배포로 9언어가 됐다(2026-08-24 실측).
  ["Langues", "Français (plus anglais, coréen, japonais, espagnol, portugais, allemand, chinois simplifié et traditionnel)"],
  ["Moteur", "WASM Postflop open source (AGPL-3.0) · code modifié publié"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리 표.
 * 🔴 **fr에는 도구 페이지도 전략 글도 없다**(코퍼스 = 규칙 6편) — 실존 글 3종으로만 보낸다
 *    (전건 `lib/posts-fr/<slug>.ts` 실존 확인). 전략 글 링크는 fr 코퍼스 확장 때 보강.
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Résoudre un spot postflop précis", "Le solver de cette page", null],
  ["Apprendre les règles et le déroulement d'une main", "Guide des règles du Texas Hold'em", "/fr/blog/texas-holdem-rules-for-beginners"],
  ["Comprendre les actions : miser, relancer, checker, se coucher", "Guide des actions de mise", "/fr/blog/holdem-betting-actions"],
  ["Savoir ce que paient la petite et la grosse blinde", "Guide des blindes", "/fr/blog/holdem-blind-meaning"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-24 축어 실측 · ⑤=«Calculer»). */
const STEPS = [
  { n: "①", title: "Range OOP", desc: "Peins la range préflop du joueur hors de position dans la grille 13×13, ou écris-la en texte (22+, A2s+, KTo+). Diagonale = paires servies, en haut à droite = mains suited (AKs), en bas à gauche = offsuit (AKo)." },
  { n: "②", title: "Range IP", desc: "Même chose pour le joueur en position. Le chemin le plus rapide n'est pas de dessiner deux ranges en partant de zéro : charge un spot d'étude et modifie ses ranges." },
  { n: "③", title: "Board", desc: "Clique sur trois cartes pour le flop, ou laisse-le tirer un flop aléatoire. Pour étudier un run-out précis, tu peux aussi fixer le turn et la river." },
  { n: "④", title: "Bet sizes", desc: "Règle le pot de départ, le stack effectif et les tailles de mise et de relance par street. Pour une première fois, garde les valeurs par défaut — vérifie juste le pot et le stack." },
  { n: "⑤", title: "Calculer", desc: "L'arbre construit, lance le calcul. Il tourne sur ta propre machine, de quelques secondes à quelques minutes — puis ouvre l'écran de résultats." },
];

/**
 * 앱 「Mode d'emploi」가 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변).
 * 🔴 **자리 이름은 앱 fr 축어 «OOP (BB caller)»·«IP (BTN ouvreur)»에서 왔다** — 아래 라벨은
 *    괄호를 대시로 편 표기 변형이고 내용은 동일하다(네이티브 렌즈 2026-08-25 정합 메모).
 * 🔴 **이 레인지의 출처는 «학습 스팟»이지 프리플랍 표가 아니다**(M-035 결함 3 = 귀속 오류 —
 *    본문 문단이 두 출처를 가른다).
 */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB (caller)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN (ouvreur)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/**
 * 결과 화면 읽는 법.
 * 🔴 **행이 다섯이면 본문도 «다섯»이라고 쓴다**(M-046 E-3).
 * 🪶 구역 이름은 전부 앱 fr Mode d'emploi 축어다(Barre d'actions·Matrice 13×13·Tuiles·
 *    Catégories de mains·Tableau).
 */
const READ_SCREEN: string[][] = [
  ["Barre d'actions (en haut)", "La ligne d'action du coup (flop → mise → call → turn…)", "Clique sur un nœud pour voir la stratégie à ce point de décision (les spots d'étude sont précalculés jusqu'au flop)"],
  ["Matrice 13×13 (à gauche)", "Une case par main ; le découpage de couleurs montre les fréquences d'action", "Rouge = mise ou relance (plus foncé = plus gros), vert = check ou call, case éteinte = hors de la range"],
  ["Tuiles (en haut à droite)", "Fréquences d'action (%) et nombres de combos sur toute la range", "C'est ici que tu lis « sur Q♠J♦T♠, cette range check à 99,9 % »"],
  ["Catégories de mains (au milieu à droite)", "Comment chaque range accroche le board — top paire, tirages, rien du tout", "Pour voir en un coup d'œil qui ce board favorise"],
  ["Tableau (en bas à droite)", "Poids, equity, EV et réalisation d'equity (EQR) par main, plus le % de chaque action", "Triable par colonne ; le récapitulatif s'exporte en CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Calcul flop · turn · river", "yes", "L'arbre de décision complet après le flop"],
  ["Calcul préflop", "no", "Les ranges d'open sont dans l'onglet Charts préflop de l'app"],
  ["Tailles de mise et de relance libres", "yes", "Pourcentage du pot, multiples, all-in, sizing géométrique"],
  ["Donk bet avec son propre sizing", "yes", "La ligne où l'OOP mise en premier se règle à part"],
  ["Rake et cap de rake", "yes", "Pour coller aux conditions réelles de ta table"],
  ["Édition de l'arbre nœud par nœud", "yes", "Ajouter ou retirer des actions à un nœud précis"],
  ["Modes de précision et de mémoire", "yes", "Flottant 32 bits / entier 16 bits · plafond navigateur ≈ 4 Go"],
  ["Exploitabilité cible", "yes", "Plus elle est basse, plus c'est précis — et plus c'est long"],
  ["Sauvegarde des ranges et réglages", "yes", "Sauvegarder, charger, importer, exporter"],
  ["Export CSV du récapitulatif", "yes", "Directement dans ton tableur"],
  ["Lien de partage de spot", "yes", "Le même spot s'ouvre chez ton partenaire d'étude"],
  ["Spots d'étude précalculés", "yes", "Résultats au clic, sans attendre"],
  ["Trainer GTO avec notation", "yes", "Analyse des points faibles et bouton Révision inclus"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSolver payant」이라고 단정하지 마라** — 1차 출처로 확인된 것은 설치형·주로 Windows뿐.
 */
const COMPARE: string[][] = [
  ["Comment il calcule", "En direct, dans le navigateur", "Consulte des réponses précalculées", "Sur ton PC, après installation"],
  ["Installation", "Aucune", "Aucune", "Oui, surtout Windows"],
  ["Couverture", "Postflop, heads-up", "Souvent préflop inclus", "Selon la version"],
  ["Ranges et arbre modifiables", "Librement", "Dans le catalogue publié seulement", "Librement"],
  ["Où se fait le calcul", "Sur ton appareil", "Chez le fournisseur (à l'avance)", "Sur ton appareil"],
];

/**
 * 학습 예제 — 앱의 **fr 라벨·해설을 축어로 옮기되**(2026-08-24 실측), 앱이 아직 틀린 네 자리
 * (①④⑦⑧)는 **§4-B 정정본**으로 갈았다(파일 헤더 참조 · ⑩은 fr 완화형이라 축어 유지).
 * 🔴 **개수를 문장에 박지 않는다** — 배열에서 세어 쓴다(`SPOT_TOTAL` · RP-08).
 * 🔴 **카드는 기억으로 적지 않는다** — 13개 보드는 라이브 화면에서 축어로 긁었다.
 * 🪶 `slug`가 하나도 없다 — GTO 시리즈 해설이 fr에 0편이라서다. 발행되면 그때 채운다.
 */
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot — BTN vs BB (fondamentaux)",
    cond: "OOP : BB (caller) · IP : BTN (ouvreur) · Pot 5,5bb · Stack 97,5bb",
    items: [
      // 🔴 RP-20 정정(9/9 확정 언어의 하나) — 앱 ①은 «체크 다음»을 말하는데 화면은 BB 첫
      //    액션에서 멈춘다. 화면값(체크 98,2 % — §4-B)으로.
      { board: "A♥7♦2♣", name: "Board sec A-high", note: "Le cas d'école de l'avantage de range — l'as tape en plein dans la range de l'ouvreur, et BB check ici à 98,2 %" },
      { board: "K♠8♦3♣", name: "Board sec K-high", note: "Compare avec le board A-high. Le board K-high favorise aussi BTN, mais les checks augmentent un peu. Tu sais pourquoi ?" },
      // 🟢 앱 fr 축어가 이미 정정본. «des 13 spots»의 편 수 하드코딩만 «de toute cette série»로(RP-08).
      { board: "Q♠J♦T♠", name: "Broadway connecté, bicolore", note: "Un board qui semble toucher les deux ranges. Pourtant c'est ici que BB réalise le moins bien son equity de toute cette série — 77,9 % réalisés contre 119,4 % pour BTN — et il check à 99,9 %" },
      // 🔴🔴 RP-01 계열 + RP-02 정정 — 앱 fr은 아직 «콜러 우위 + C벳 빈도 붕괴» 류다(9언어 전건 ·
      //    원문은 fr 축어 문서 — 주석 인용은 의역으로, M-047). §4-B ④: OOP 벳 23,7 % · 48,5 대 51,5.
      { board: "9♥8♥7♣", name: "Board médian connecté, bicolore", note: "Le seul board du single raised pot où BB prend vraiment l'initiative : BB mise en premier à 23,7 % — mais l'avantage de range reste à BTN : 48,5 % d'equity pour BB contre 51,5 % pour BTN" },
      // 🔄 M-067 축어 재동기(2026-08-26) — 앱이 `190d293`에서 ⑤ lesson을 **완화형**으로 정정했다
      //    (구형 = «사라진다»형 → 신형 = «se raréfient» 형). 🔴 **구형 문자열은 주석에도 적지 마라** —
      //    검수장 회귀 앵커가 그 출현 수를 세고 «0 = 정정 반영»으로 읽는다. 화면값에 큰 벳이 3.2% 남아
      //    «사라진다»가 과장이었다(솔버 S-003 ③ · 검수장 S-007 라이브 md5 검증).
      //    🔴 이 자리는 **구형 완전 축어**였다 — 앱과 갈라지면 즉시 «축어 아님»이 된다.
      { board: "Q♠9♠2♠", name: "Board monochrome", note: "Regarde pourquoi les grosses mises se raréfient au profit des petites mises et des checks. Remarque à quelle fréquence même une couleur faite se contente de checker" },
      { board: "6♣6♦3♥", name: "Board pairé", note: "Personne ne touche ce board, donc la part de bluffs augmente. Utilise le tableau détaillé pour trouver quelles mains misent en bluff" },
      // 🔴 M-045 RP-19 정정 — 앱 fr은 아직 «체크레이즈 빈도 단언 + 따라가 보라» 류다(원문 인용은
      //    의역으로 — M-047). §4-B ⑦ = 체크 96,8 · 벳 3,2뿐.
      { board: "6♠5♥2♦", name: "Board bas rainbow", note: "Une guerre d'overcards — le spot pour étudier la construction du check-raise. À l'écran, la première action de BB : check 96,8 %, mise 3,2 %" },
    ],
  },
  {
    label: "Pot 3-bet — BB 3-bet, BTN paye (SPR bas)",
    cond: "OOP : BB (3-betteur) · IP : BTN (caller) · Pot 22,5bb · Stack 89bb",
    items: [
      // 🔴 M-038 RP-03 정정 — 앱 fr은 아직 «SPR이 낮아서 작은 벳» 인과다(원문 인용은 의역으로 —
      //    M-047). 시리즈 ⑧: SPR이 똑같이 4,0인 ⑨는 큰 사이즈 98,4 % — 사이즈를 정하는 것은
      //    레인지의 모양이다.
      { board: "A♦K♠2♥", name: "Board A-high, avantage du 3-betteur", note: "Le meilleur flop possible pour le 3-betteur, dont la range est remplie d'AK, d'AA et de KK. Si les petites mises mettent la pression sur toute la range adverse, c'est la forme de cette range qui le permet — pas le SPR bas" },
      // 🟢 앱 fr 축어가 이미 정정본(98,4 · 0,8 · aux deux tiers).
      //    🔴 100−99,1로 «빼서» 구하면 0,9가 나온다 — 개별 반올림값의 합은 100이 아니다(§4-B).
      // 🪶 산수 렌즈(2026-08-25): 초판의 «, toujours au même sizing»은 레인지 전체 주장으로 읽혀
      //    §4-B의 작은벳 0,7 %와 모순 — 삭제(형제 랜딩과 동형이 됐다).
      { board: "Q♥T♥7♠", name: "Board dynamique bicolore", note: "Un pot 3-bet sur un board qui convient aussi au caller — et pourtant le 3-betteur ne ralentit pas : 98,4 % de la range mise aux deux tiers du pot, au même sizing. Seuls 0,8 % checkent" },
      // 🟢 앱 fr ⑩은 «presque» 완화형이라 축어 유지(RP-17 비발화 — en·de·ja 계열).
      { board: "8♦5♣2♠", name: "Board bas et sec", note: "Un board qui rate presque toute la range du 3-betteur — et pourtant les overpairs et les mains hauteur As maintiennent la pression. Equity contre fold equity" },
    ],
  },
  {
    label: "Blind vs Blind — SB vs BB (ranges larges)",
    cond: "OOP : SB (ouvreur) · IP : BB (caller) · Pot 6bb · Stack 97bb",
    items: [
      // 🟢 앱 축어. RP-18 감시 조건(빈도 수치가 붙으면 폐기 명제) 미충족 — 수치를 붙이지 마라.
      { board: "K♥T♦6♠", name: "Board K-high avec un T", note: "En blind vs blind, les ranges sont larges, donc les deux joueurs arrivent faibles au flop. Compare les fréquences avec le spot « Board sec K-high » de BTN vs BB" },
      { board: "7♦6♦5♣", name: "Board bas connecté, bicolore", note: "Deux ranges larges se percutent sur un board ultra-connecté : doubles paires, quintes et tirages partout. C'est ici que le panneau « Mains / Tirages » est le plus parlant" },
      // 🟢 앱 fr 축어가 이미 정정본(88 대 66 · 80,1).
      { board: "A♠A♥6♦", name: "Board avec deux As", note: "Deux as sur le board. Les brelans ne sont pas rares — SB en a simplement plus (88 combos contre 66 pour BB), donc SB mise à 80,1 %. Toute la question sur ce board : qui a le plus d'as dans sa range" },
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

export default function SolverClientFr() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★H1은 «solver poker gratuit»(110 — 훅=조준축)를 연속 문자열로 정면에 싣고,
            «solver GTO»(50)를 뒤에 병기한다. 어순은 실측 정본(solver poker — 뱅크 §1-③).
          🔴 `GTO`도 `solver`도 단독으로 두지 않는다 — 자동차·아니메 / Excel·수학 오염(뱅크 §1).
        */}
        <h1 className="text-center text-2xl font-bold">
          Solver poker gratuit — le solver GTO qui tourne dans ton navigateur
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
        */}
        <p className="mt-3 text-muted-foreground">
          Un <strong className="text-foreground">solver poker (solveur de poker)</strong> est un
          programme qui calcule la stratégie d'équilibre d'une situation précise : tu saisis les
          ranges des deux joueurs, le board et les tailles de mise, et il te dit à quelle fréquence
          chacune des <strong className="text-foreground">169 mains de départ</strong> doit miser,
          checker ou se coucher — le tout dans une matrice 13×13. Celui de HoldemMaster{" "}
          <strong className="text-foreground">tourne directement dans ton navigateur — sans
          téléchargement, sans inscription, sans limite</strong>. À côté de la matrice : equity, EV
          et réalisation d'equity (EQR) main par main. Couverture : postflop, heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Ouvrir le solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            L'idéal : Chrome sur ordinateur — sur iOS et Safari, le solver calcule en monothread,
            donc tes propres spots tournent plus lentement
          </p>
        </div>
        <Table head={["", "En bref"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 ───────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Un solver poker, c'est quoi ? — et ce qu'un tableau de ranges ne fait pas</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Le solver calcule, en partant de zéro, une stratégie{" "}
          <strong className="text-foreground">GTO (Game Theory Optimal, l'optimum de la théorie
          des jeux)</strong>. Tu lui donnes les ranges, le board, les stacks et l'arbre des tailles
          de mise ; il itère vers le point d'équilibre jusqu'à fixer les fréquences de mise, de
          check et de fold des 169 mains. C'est exactement la frontière avec le tableau : le
          tableau stocke une réponse que quelqu'un a calculée avant toi, le solver{" "}
          <strong className="text-foreground">résout la main que tu as sous les yeux</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Change une carte du board, et la réponse change avec — elle n'est pas apprise par cœur,
          elle est recalculée.
        </p>
        {/*
          «부르는 이름» 문단 — 검색어 변형을 여기서만 축어로 놓는다(플레이북 §4-5):
          solver poker 320 · gto solver 50 · solveur poker 50 · logiciel gto poker 10.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Le même outil porte plusieurs noms :{" "}
          <strong className="text-foreground">solver poker</strong>,{" "}
          <strong className="text-foreground">GTO solver</strong>, solveur poker (ou solveur de
          poker), ou tout simplement logiciel GTO poker. Ce qu'il produit s'appelle souvent une range GTO. Quel que
          soit le mot que tu as tapé pour arriver ici — c'est de ça qu'il s'agit.
        </p>
        <Table
          head={["Ce que tu cherches", "Où aller"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        {/* 🟢 내장 탭 문단 — 라벨은 앱 네비 축어(«Charts préflop Ranges» · «Equity % victoire»).
            `calculateur poker`(390)의 정면 문항은 FAQ가 갖고, 여기는 기능 사실만(9언어 공통 기능 —
            zh-hant 회차 라이브 검증). */}
        <p className="mt-4 text-sm text-muted-foreground">
          L'app intègre aussi deux onglets bien pratiques — les Charts préflop (ranges d'open et de
          défense) et le calculateur d'Equity (% de victoire), qui oppose ta main à une main précise
          ou à une range entière. De quoi vérifier un chiffre sans quitter ton spot.
        </p>
      </section>

      {/*
        ── ★랜딩의 핵심 절: 「범위의 플랍 이후」 본진 ──────────────────────
        `range poker`/`ranges poker`(1,600)의 연속 문자열을 H2가 갖는다.
        🔴 fr에는 프리플랍 표 글이 없다 — 프리플랍 안내는 앱 내장 Charts préflop 탭으로(헤더 참조).
        🔴 수치는 전부 §4-B 확정표에서만(③ 0,1 % · ④ 23,7 % — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Tes ranges poker explosent après le flop — voilà pourquoi</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Commence par accepter un fait : les ranges préflop sont stables, les ranges postflop non.{" "}
          <strong className="text-foreground">Une range préflop tient dans un tableau</strong> — ce
          que tu ouvres au bouton ne change presque jamais. Mais dès que trois cartes tombent, la
          même range éclate en mains faites, tirages et air, et la suite dépend entièrement de la
          texture du board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Deux spots de cette page le montrent mieux que n'importe quelle explication. Dans les
          deux, BB a payé l'ouverture du bouton et parle en premier au flop — même position, même
          range, même pot :
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            Sur <strong className="text-foreground">Q♠J♦T♠</strong>, BB ne mise en premier qu'à{" "}
            <span className="font-semibold text-orange-500">0,1 %</span> — il ne prend presque
            jamais l'initiative.
          </li>
          <li>
            Sur <strong className="text-foreground">9♥8♥7♣</strong>, BB mise en premier à{" "}
            <span className="font-semibold text-emerald-500">23,7 %</span>.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Deux boards connectés, bicolores, presque jumeaux — et deux stratégies qui n'ont rien à
          voir. <strong className="text-foreground">Aucun tableau préflop ne peut contenir cette
          différence</strong> : le tableau a été écrit avant que le flop existe. C'est exactement le
          travail du solver — il te donne ta range poker « d'après », pas celle « d'avant ».
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Encore au stade « d'avant » ? L'onglet Charts préflop de l'app liste les ranges d'open
          par position — et pour le déroulement d'une main, du préflop à l'abattage, le{" "}
          <Link href="/fr/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
            guide de l'ordre du jeu
          </Link>{" "}
          pose les bases.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Comment utiliser ce solver poker ? — 5 étapes</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Si c'est ton premier solver :{" "}
          <strong className="text-foreground">ne configure rien, ouvre d'abord un spot
          d'étude.</strong> Ils sont déjà calculés — apprends à lire la sortie avant de te battre
          avec les entrées. Pour ton propre spot, suis les onglets de la barre latérale de haut en
          bas.
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
          Dans un spot personnalisé, les valeurs s'expriment en jetons entiers. Pour raisonner en
          grosses blindes, prends <strong className="text-foreground">10 jetons = 1bb</strong> (pot
          55 = 5,5bb). Les spots d'étude et le Trainer utilisent déjà cette échelle.
        </p>
        {/* 🔴 두 출처를 가른다(M-046 E-2 처방) — 프리플랍 오픈 레인지는 앱 Charts préflop 탭의 것,
            아래 표는 학습 스팟이 쓰는 것. */}
        <p className="mt-4 text-sm text-muted-foreground">
          Dessiner deux ranges en partant de zéro est le chemin le plus lent. Les ranges d'open par position
          sont dans l'onglet Charts préflop de l'app. Les deux ranges ci-dessous sont autre chose :{" "}
          <strong className="text-foreground">celles que les spots d'étude du single raised pot
          utilisent réellement</strong> (BTN vs BB) — copie-les et colle-les directement dans ① et ②.
        </p>
        <Table head={["À coller dans", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Comment lire l'écran de résultats ?</h2>
        {/*
          🔴 **다섯이다.** 아래 표가 다섯 행이고 이 문단이 다섯을 센다(M-046 E-3).
        */}
        <p className="mt-2 text-sm text-muted-foreground">
          L'écran de résultats a cinq zones de travail : la{" "}
          <strong className="text-foreground">barre d'actions</strong> en haut, la{" "}
          <strong className="text-foreground">matrice 13×13</strong> à gauche, puis à droite les{" "}
          <strong className="text-foreground">tuiles, les catégories de mains et le tableau
          détaillé</strong>. Une règle simple : à gauche tu lis « comment jouer une main », à
          droite « comment joue toute la range » — seul le tableau en bas à droite redescend au
          niveau main par main.
        </p>
        <Table head={["Où", "Ce qui s'affiche", "Comment le lire"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Quand la réalisation d'equity (EQR) passe sous 100 %, arrête-toi une seconde : ta main
          n'encaisse pas toute l'equity qu'elle possède. La raison change à chaque spot — position,
          initiative, qui a le haut de range le plus épais.{" "}
          <strong className="text-foreground">Le solver ne te dit pas « joue comme ça » : il te
          montre pourquoi les fréquences ont cette forme</strong>, et ce « pourquoi » se lit mieux
          dans l'EQR que nulle part ailleurs.
        </p>
        {/* 🪶 fr 코퍼스에 equity·c-bet 글이 없다 — 개념 링크 대신 자기완결 정의로(코퍼스 확장 때 보강).
            «equity poker»(50)의 연속 문자열을 이 정의 자리가 갖는다(SEO 렌즈 2026-08-25). */}
        <p className="mt-3 text-sm text-muted-foreground">
          Si ces mots sont encore flous : l'equity poker, c'est ta part du pot si tout partait à
          tapis maintenant — le % de victoires plus la moitié des égalités. L'EV, c'est ce qu'une
          action rapporte en moyenne. Tout le reste de l'écran se déduit de ces deux-là.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Vraiment tout gratuit ? — jusqu'où ça va</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Vraiment — et sans les petites lignes habituelles : pas de moyen de paiement à laisser,
          pas de fonctions verrouillées, pas de quota de calculs par jour, pas d'inscription. Même
          les réglages qu'on ne trouve d'ordinaire que dans les solvers de bureau payants —{" "}
          <strong className="text-foreground">rake et cap de rake, modes de précision, édition de
          l'arbre nœud par nœud</strong> — sont là. La seule vraie frontière : cet outil ne couvre
          que <strong className="text-foreground">les situations heads-up après le flop</strong>.
        </p>
        <Table
          head={["Fonction", "Incluse", "Note"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">Oui</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">Non</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Essayer gratuitement →" variant="outline" />
        </div>
      </section>

      {/* ── 플랍 이후 범위 ───────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Pourquoi seulement flop, turn et river ?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          C'est un <strong className="text-foreground">solver postflop</strong> : à partir du
          moment où le flop tombe, il calcule la suite pour les deux joueurs. Ne pas faire le
          préflop est un choix — le préflop est un autre problème, assez stable pour tenir dans un
          tableau, alors que le jeu postflop se réécrit à chaque nouveau board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          À l'intérieur de cette frontière, rien ne manque :{" "}
          <strong className="text-foreground">les ranges des deux joueurs</strong>, n'importe quel
          flop, turn ou river, le pot de départ, le stack effectif et l'arbre complet des sizings
          par street. Le résultat n'est pas une réponse générique, c'est celle de ta table — rake
          compris, ce que la plupart des manuels ignorent.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Pour la brique préflop, direction le même onglet Charts préflop, déjà croisé plus haut.
          Les deux briques ensemble, une main a sa réponse de bout en bout : le tableau
          décide avec quoi tu entres, le solver décide de tout ce qui suit le flop.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        {/* 🪶 제품명은 앱 fr 축어 «Trainer GTO»(title이 8언어 중 유일하게 Trainer 선두 — 라벨 정본).
            `gto trainer`(20)·`s'entrainer au poker`(30) 흡수 자리. */}
        <h2 className="text-xl font-bold">Trainer GTO — l'entraînement poker qui note chacune de tes décisions</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Le Trainer GTO vit dans le même outil, sans inscription supplémentaire. Il transforme les
          spots résolus en exercices : à un vrai point de décision, il te distribue une main, tu
          choisis une action, il te note. Si tu cherches à t'entraîner au poker gratuitement — sans
          apprendre des lignes par cœur, juste en travaillant{" "}
          <strong className="text-foreground">la décision</strong> — commence ici.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          La note n'est pas un simple « juste ou faux » :{" "}
          <strong className="text-foreground">c'est l'EV que ton choix abandonne</strong>. La GTO
          mélange les actions par nature, donc choisir l'option la moins fréquente n'est pas
          automatiquement une faute — la seule question est ce qu'elle coûte. Après ton choix, les
          fréquences et l'EV de chaque action s'affichent à côté du coût du tien.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱이 2026-08-15에 바꿨다. 되돌리지 마라.
            🟢 fr 앱 특징 4칸도 «notés sur la perte d'EV par rapport au pot» 정정본이고, Mode
               d'emploi의 문턱(0,35 %/1 % · 0,02/0,06 · 0,08/0,23 · planchers 0,02/0,05 ·
               exploitabilité 0,5 %)과 아래가 일치한다(2026-08-24 실측).
            🪶 화면 CTA «combien de bb chaque décision te coûte»는 오류가 아니다 — 표시 «값»은
               bb이고 «합격선»만 팟 대비다(2026-08-23 솔버 왕복에서 확인된 구조).
            🔴 RP-06: 예시는 **0,08bb**로 든다(0,05bb는 두 구간을 못 건넌다 — 0,05÷5,5 = 0,91 %).
          */}
          <li className="text-muted-foreground">
            Le verdict se mesure <strong className="text-foreground">en proportion du pot</strong> —{" "}
            <span className="font-semibold text-emerald-500">jusqu'à 0,35 %</span> : meilleur
            choix · <span className="font-semibold text-blue-500">jusqu'à 1 %</span> : acceptable ·{" "}
            <span className="font-semibold text-orange-500">au-delà</span> : spot à revoir
          </li>
          <li className="text-muted-foreground">
            Les mêmes 0,08bb pèsent 1,45 % dans un pot de 5,5bb (à revoir) et seulement 0,36 % dans
            un pot de 22,5bb (acceptable). En bb : les deux seuils du single raised pot tombent à
            0,02bb et 0,06bb, ceux du pot 3-bet à 0,08bb et 0,23bb. Deux planchers (0,02bb et
            0,05bb) évitent de compter les écarts minuscules comme des erreurs
          </li>
          {/*
            🔴 2026-08-25 정정(검수장 M-061 F-1) — **초판은 «수만 가지»라는 복수형 표현이었다.**
            실측은 **13,743**(ko 랜딩 주석의 라이브 계수 산식)이라 «수만 = 2만 이상» 함의가
            위로 벗어난다. ko 주석이 세운 자기 규율은 «스팟이 늘어도 참인 **하한 표현**»이고,
            나머지 7로케일도 전부 하한형이다(en «run past ten thousand» · es «pasan de diez mil» ·
            pt «passam de dez mil»). 그래서 «plus de dix mille»로 맞췄다.
            ⚠ **폐기 문구를 원어 축어로 적지 마라**(M-047 §2 · LESSONS §5-7 — 원어를 박으면
               회귀 앵커가 «결함형 0»을 검사하지 못하고 «기준선 1»로 타협해야 한다. 한국어 의역으로).
            ⚠ **정확한 수를 박지 마라** — 그 데이터는 솔버가 소유해 우리 빌드가 못 읽는다(반드시 낡는다).
          */}
          <li className="text-muted-foreground">
            Les questions viennent de plusieurs points de décision par spot —{" "}
            <strong className="text-foreground">plus de dix mille</strong> combinaisons
            (exploitabilité cible 0,5 %). Tu peux aussi filtrer un seul type de situation : single
            raised pot, pot 3-bet ou blind vs blind
          </li>
          <li className="text-muted-foreground">
            Les mains sont distribuées selon <strong className="text-foreground">leur vrai poids
            dans la range GTO</strong> — la fréquence à laquelle une main apparaît est celle à
            laquelle tu la recevrais vraiment dans ce spot
          </li>
          <li className="text-muted-foreground">
            Séries de bonnes réponses, analyse des points faibles et{" "}
            <strong className="text-foreground">bouton Révision</strong> (les mains où tu perds le
            plus d'EV reviennent) s'appuient sur ton historique. Sans connexion, il reste sur ton
            appareil
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Ouvrir le Trainer GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 (앱 축어 9 + §4-B 정정 4) ─────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} spots de poker déjà résolus, à ouvrir en un clic
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Les spots ci-dessous sont entièrement précalculés — la stratégie s'affiche à l'instant où
          tu cliques, sans attente ni configuration. Les ranges approchent le jeu en ligne standard
          à 100bb ; la façon la plus rapide d'apprendre est de charger un spot, modifier une range,
          relancer le calcul et regarder ce qui bouge. Pour comprendre comment la texture du board
          réécrit la stratégie, il n'y a pas plus court.
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
                        href={`/fr/blog/${item.slug}`}
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
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만.
        🪶 브랜드 인접 검색: `gto wizard` FR 8,100(12m −13%) · `piosolver` 170 · `texassolver` 20.
           직접 조준은 안 하지만 비교 문맥의 언급은 정당하다. GTO Wizard는 fr 완역 페이지 보유(뱅크 §2).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO Wizard, PioSolver, TexasSolver : quelles différences ?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Tous peuvent s'appeler GTO solver ou solver poker ; la différence tient à{" "}
          <strong className="text-foreground">l'endroit et au moment du calcul</strong>. Les
          bibliothèques de solutions comme GTO Wizard fonctionnent par consultation : elles
          feuillettent un catalogue précalculé, c'est rapide et le préflop est souvent couvert. Les
          solvers de bureau comme PioSolver ou TexasSolver s'installent et calculent sur ton PC.
          L'outil de cette page{" "}
          <strong className="text-foreground">calcule en direct dans le navigateur — le calcul
          démarre à l'instant où tu poses la question</strong>, ranges et arbre modifiables à
          volonté, sans rien installer.
        </p>
        <Table
          head={["", "Solver HoldemMaster", "Bibliothèque de solutions", "Solver de bureau"]}
          rows={COMPARE}
        />
        {/*
          🔴 «남의 무료 티어 수치»를 적지 않는다. 대신 실측으로 확인된 **구조**를 적는다:
             프랑스어 «solver poker gratuit» 콘텐츠 = 리뷰 기사뿐이고 추천이 전부 유료·설치형
             (fr.pokerlistings 실측) · 무료 접근은 구독 프리티어/설치형(TexasSolver)/푸시폴드
             한정(poktools)으로 갈라진다 — 뱅크 §2.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          Cherche « solver poker gratuit » et tu retombes sur des comparatifs et des projets open
          source — et les options gratuites viennent presque toujours avec une
          condition : un abonnement qui n'ouvre qu'une partie du catalogue, un quota journalier,
          des crédits qui fondent, ou un logiciel à installer. Ici, pas de condition —{" "}
          <strong className="text-foreground">pas d'inscription, pas de plafond journalier, pas de
          crédits</strong>. Garde simplement cette page ouverte à côté de tes reviews de mains.
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 자기 고지와 GitHub 저장소 제목
             "[Development suspended]" — 앱 fr AGPL 고지 축어(«Cette app est basée sur WASM
             Postflop…»)와 일치한다. `wasm postflop` FR 30.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Un mot pour ceux qui arrivent depuis <strong className="text-foreground">WASM
          Postflop</strong> : la page du projet d'origine annonce elle-même l'arrêt du
          développement, et le dépôt est marqué comme suspendu. Ce solver est le fork qui prolonge
          ce moteur au-delà de l'arrêt du projet d'origine — même licence AGPL-3.0, même code
          publié, plus une nouvelle interface, des spots d'étude et le Trainer.
        </p>
      </section>

      {/* ── 모바일·오프라인 (PWA) ───────────────────────────────────── */}
      {/*
        근거: 앱이 이미 PWA이고 버튼 축어가 «♠ Ajouter à l'écran d'accueil»다.
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록 준비 중이라 출시 순간 거짓이 된다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람·트레이너뿐.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Sur mobile ? Hors ligne ?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Les deux. Rien à installer pour commencer — le navigateur mobile ouvre la version
          complète. Cela dit, <strong className="text-foreground">si tu veux, appuie sur « Ajouter
          à l'écran d'accueil »</strong> : il se comporte alors comme une app — sa propre icône,
          plein écran, pas de barre d'adresse. C'est un raccourci de navigateur, pas un programme —
          il ne demande jamais de permission système.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Une fois ajouté, les spots d'étude et le Trainer GTO restent sur ton appareil,{" "}
          <strong className="text-foreground">et tu continues à t'entraîner sans connexion</strong>{" "}
          — dans le métro, en avion, quand le forfait data tire la langue. La limite qui compte :
          résoudre un spot personnalisé en partant de zéro demande que le moteur de calcul ait été
          chargé au moins une fois.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Sur iPhone et Safari, les limites du navigateur imposent un calcul monothread — les gros
          spots sont plus confortables sur ordinateur. Pour l'ajout : l'icône d'installation à
          droite de la barre d'adresse dans Chrome et Edge, le menu Partager → « Sur l'écran
          d'accueil » sur iPhone.
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 — ⚠ fr 코퍼스는 규칙 6편뿐(전건 실존 확인) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Pour aller plus loin</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/fr/blog/texas-holdem-rules-for-beginners" className="font-semibold text-primary hover:underline">
              Les règles du Texas Hold'em
            </Link>{" "}
            — le point de départ si le vocabulaire du solver est encore nouveau pour toi
          </li>
          <li>
            <Link href="/fr/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
              L'ordre du jeu
            </Link>{" "}
            — préflop, flop, turn, river : le squelette sur lequel le solver travaille
          </li>
          <li>
            <Link href="/fr/blog/holdem-betting-actions" className="font-semibold text-primary hover:underline">
              Les actions de mise
            </Link>{" "}
            — miser, relancer, checker, se coucher : les briques de chaque fréquence du solver
          </li>
          <li>
            <Link href="/fr/blog/holdem-blind-meaning" className="font-semibold text-primary hover:underline">
              Les blindes
            </Link>{" "}
            — pourquoi BB défend large, et pourquoi SB parle en premier : l'arrière-plan des spots
            BTN vs BB et blind vs blind
          </li>
          <li>
            <Link href="/fr/blog/holdem-all-in-rules" className="font-semibold text-primary hover:underline">
              Les règles du all-in
            </Link>{" "}
            — tapis et pots secondaires, pour lire les lignes qui finissent all-in
          </li>
          <li>
            <Link href="/fr/blog/holdem-showdown-rules" className="font-semibold text-primary hover:underline">
              L'abattage
            </Link>{" "}
            — qui montre, qui gagne : là où toutes les equities se réalisent
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">FAQ — questions fréquentes</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_FR.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">R. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 오픈소스 고지 (AGPL) ─────────────────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Ouvrir le solver poker gratuit →" />
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면 축어와 같은 사실. **훅으로 키우지 않는다**(2026-08-22 판정).
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        Cette app est basée sur WASM Postflop de Wataru Inariba (AGPL-3.0), localisée et enrichie
        par HoldemMaster. Le code source modifié complet est publié sous la même licence.
      </p>
    </div>
  );
}
