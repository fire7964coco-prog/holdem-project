/**
 * `/fr/solver` FAQ — 화면(`solver-client.tsx`)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 정본 구조 = `app/zh-hant/solver/faq.ts`(직전 회차) · `app/de/solver/faq.ts`.
 *
 * ★2026-08-24 신설(9번째 랜딩 — 솔버 앱이 fr을 배포한 «당일» 개설). 대상 = 프랑스(+프랑스어권).
 *   본체(solver.holdemmaster.com)는 noindex — 프랑스어권 검색 진입로가 0개였다.
 *
 * 🔴 **번역이 아니다.** 실측 근거 = `docs/keyword-bank/fr-gto-solver.md`. 갈아 끼운 것 —
 *   ① **어순 정본 = `solver poker`**(320 대 `poker solver` 90 — es와 같고 de·zh와 반대).
 *   ② 🔴 **`solveur`/`solver` 단독 = Excel·수학·스도쿠·스크래블**(서제스트 실증 — `solveur` 2,900은
 *      전부 남의 것). 문항·답에서 반드시 poker/GTO와 붙이고, 정의 문항 끝에서 갈라 준다.
 *   ③ 🔴 `GTO` 단독 = 자동차(Ferrari 250 GTO)·『GTO』 아니메 — 문항이 «au poker»로 못박는다.
 *   ④ **`calculateur poker`(390) 흡수 문항 신설**(fr 고유) — 앱 내장 Equity 탭이 받는다.
 *   ⑤ **`apprendre le poker`(720) 흡수 문항** — 답이 fr 규칙 클러스터(6편)로 핸드오프
 *      (입문 축은 `texas-holdem-rules-for-beginners` 소유 — 카니발 가드).
 *   ⑥ 게임 의도 방어 — `simulateur poker`(170·상승)는 게임 의도 의심이라 조준 금지(뱅크 §1-④).
 *   ⑦ **register = tutoiement** — 앱 fr·GTO Wizard fr·프랑스 포커 커뮤니티 전부 tu(뱅크 §2).
 *
 * 🔴 **답의 사실은 전부 2026-08-24에 `solver.holdemmaster.com/?lang=fr`을 열어 화면에서 직접
 *    읽은 것만 쓴다**(Playwright DOM — 골격·13스팟 축어 = `docs/solver-app-verbatim-fr-2026-08-24.md`).
 *    확인한 것 — `<html lang="fr">` · title «HoldemMaster GTO Trainer — Solver et trainer GTO
 *    gratuits pour le Texas Hold'em» · 언어 셀렉터 **9개**(Français 추가) · 특징 4칸(트레이너
 *    «notés sur la perte d'EV par rapport au pot» 🟢 팟 대비 정정본) · PWA «Ajouter à l'écran
 *    d'accueil» · iOS monothread + 4 Go · 트레이너 문턱 0,35 %/1 %·0,02/0,06·0,08/0,23·
 *    planchers 0,02/0,05 · exploitabilité cible 0,5 % · 🔴 **소수 구분자 쉼표 + % 앞 공백**.
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   fr 앱 실측: 🟢 ③⑨⑬ 정정본 · 🟢 ⑩은 «presque» 완화형 통과(en·de·ja 계열) ·
 *   🔴 **①(RP-20 — 이로써 9/9 전 언어)·④(RP-01 계열+RP-02)·⑦(RP-19+조작 지시)·⑧(RP-03)이
 *   아직 틀렸다.** ⚠ 주석에 폐기 문구 원문을 적지 않는다(M-047). 축어는 fr 축어 문서에 있다.
 *   **랜딩은 네 자리 전부 §4-B 정정본을 쓴다**(fr은 ⑩ 통과라 «넷»이다 — 머릿수를 zh에서 물려받지 마라).
 *
 * 🔴 카니발 — 이 FAQ가 답하지 않는 것: 입문·règles(→ `fr/texas-holdem-rules-for-beginners` 소유 —
 *   apprendre 문항이 핸드오프한다). ⚠ **fr 코퍼스는 규칙 6편뿐** — chart·pot-odds·equity·3bet·
 *   strategy·glossary가 없어 표준 내부링크 세트가 불성립(뱅크 §3). 링크는 실존 글로만.
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_FR: FaqItem[] = [
  {
    // 🟢 정합 렌즈 반영(2026-08-25) — 본문 정의부와 겹치던 «résout la main que tu as sous les yeux»
    //    구절을 버리고 «figée/refait le calcul» 축으로 변주.
    q: "Un solver poker et un tableau de ranges, quelle différence ?",
    a: "Un tableau de ranges, c'est une réponse figée, imprimée une fois pour toutes ; le solver, lui, refait le calcul pour la situation exacte que tu lui donnes. Change une seule carte du board : le tableau reste le même, le solver sort une autre stratégie. Les deux ne se font pas concurrence — le tableau te dit avec quelles mains entrer dans le coup, le solver te dit comment jouer une fois le flop tombé.",
  },
  {
    q: "Ce solver GTO est-il vraiment gratuit ?",
    a: "Vraiment. Toutes les fonctions, sans limite d'usage : résoudre tes propres spots, ouvrir les spots d'étude déjà calculés, t'entraîner avec le Trainer GTO, sauvegarder et exporter — tout est gratuit. Pas de formule payante, pas de crédits, aucune limite quotidienne.",
  },
  {
    q: "Faut-il créer un compte ?",
    a: "Non. Tu ouvres la page et tu calcules. La connexion ne sert qu'à une chose : synchroniser ton historique du Trainer entre plusieurs appareils. Sans compte, aucune fonction ne manque.",
  },
  {
    q: "Faut-il télécharger ou installer quelque chose ?",
    a: "Non. Le solver tourne directement dans ton navigateur grâce à WebAssembly — Windows, macOS, Linux et mobile, sans fichier d'installation. Si tu veux, tu peux appuyer sur « Ajouter à l'écran d'accueil » pour le garder sous la main : rien ne s'installe vraiment — juste une icône qui rouvre le navigateur, sans qu'aucune permission système ne soit demandée.",
  },
  {
    // 🔴 `GTO` 단독 = 자동차·아니메 오염(뱅크 §1-①) → 문항이 «au poker»로 못박는다.
    //    ⚠ `gto c'est quoi` 계열은 볼륨 null — 조준이 아니라 PAA형 정의 문항이다.
    q: "Le GTO au poker, c'est quoi ?",
    a: "GTO veut dire Game Theory Optimal — la stratégie d'équilibre issue de la théorie des jeux : une façon de jouer dans laquelle l'adversaire ne trouve aucune faille systématique à exploiter. Concrètement, ce n'est pas une réponse unique du type « mise » ou « couche » : ce sont des fréquences — la même main mise parfois, check parfois, selon des proportions précises. Le solver est l'outil qui calcule ces fréquences pour une situation donnée.",
  },
  {
    // 🔴 fr권 `solver`/`solveur` 단독 = Excel·수학(뱅크 §1-②) — 답 끝에서 갈라 준다.
    //    🪶 `solveur poker`(50)의 연속 문자열은 본문 «이름들» 문단이 갖는다(SEO 렌즈 2026-08-25 —
    //       이 문항의 «solveur de poker»는 자연문 병기일 뿐 조준열이 아니다).
    q: "Un solver poker (ou solveur de poker), c'est quoi ?",
    a: "Au poker, un solver — certains écrivent solveur — est un programme qui pousse une situation de jeu jusqu'à son point d'équilibre : il en sort une stratégie qu'aucun adversaire ne peut exploiter de façon systématique. Il ne répond pas « mise » ou « couche », mais en fréquences — par exemple 70 % de mises et 30 % de checks avec la même main ; c'est ce mélange qui rend la stratégie inattaquable. À ne pas confondre : hors poker, un « solveur », c'est le module d'Excel, un solveur d'équations ou un outil de sudoku — rien à voir.",
  },
  {
    q: "Une range, c'est quoi ?",
    a: "La range, c'est l'ensemble de toutes les mains qu'un joueur peut avoir dans une situation donnée. Le débutant demande « qu'est-ce qu'il a ? » ; le joueur qui a étudié demande « arrivé ici, que reste-t-il dans sa range ? ». Le solver travaille entièrement à ce niveau-là : tu saisis les deux ranges, et il te dit comment jouer chacune des 169 mains de départ — au lieu de deviner une main précise.",
  },
  {
    // 🔴 RTA 방어(뱅크 §1-⑤ 금지 축). 플랫폼 «규정» 사실만 적는다 — 법 판정이 아니다.
    q: "Puis-je l'utiliser pendant que je joue en ligne ?",
    a: "Non — l'assistance en temps réel (RTA) est explicitement interdite par les conditions d'utilisation de pratiquement toutes les rooms de poker, et se faire prendre mène au bannissement du compte. Ce solver est un outil d'étude hors table : revoir les mains que tu as jouées, décortiquer un spot, t'entraîner avec le Trainer. Il est fait pour ça — et étudier, de toute façon, ne se fait pas dans l'urgence.",
  },
  {
    // 🟢 정합 렌즈 반영(2026-08-25) — 모바일 절과 축어가 겹치던 문장을 원인 중심으로 변주.
    q: "Ça marche sur iPhone ou Safari ?",
    a: "Oui, mais plus lentement. iOS n'autorise qu'un seul thread de calcul dans le navigateur, alors qu'ailleurs le solver répartit le travail sur plusieurs cœurs. Les gros arbres se résolvent donc mieux sur un ordinateur ; sur macOS, Chrome est recommandé.",
  },
  {
    // 🟢 정합 렌즈 반영(2026-08-25) — PWA 절 두 문장과 통째로 겹치던 축어 중복을 조건절 선행형으로 변주.
    q: "Je peux m'entraîner hors ligne ?",
    a: "Oui, à une condition près. Le seul préalable : avoir ouvert le moteur de calcul une fois en ligne, si tu comptes résoudre tes propres spots. Pour tout le reste, une fois l'app ajoutée à l'écran d'accueil, spots d'étude et Trainer vivent sur l'appareil — métro, avion, peu importe la connexion.",
  },
  {
    // 🪶 프리플랍 대체 링크가 fr에 없다(코퍼스 규칙 6편뿐) — 앱 내장 «Charts préflop» 탭(실재
    //    네비 축어)으로 보낸다. 후속 fr 코퍼스 확장 때 글 링크로 보강.
    q: "Il calcule aussi le préflop ?",
    // 🟢 정합 렌즈 반영(2026-08-25) — 플랍 이후 절과 겹치던 «assez stables pour tenir dans un
    //    tableau…» 절을 변주.
    a: "Non. Cet outil couvre les situations à deux joueurs après le flop : flop, turn, river. Ne pas faire le préflop est un choix : d'une session à l'autre, tes ranges d'open bougent à peine, alors que le postflop change à chaque flop. Pour le préflop, l'app intègre un onglet Charts préflop — ranges d'open et de défense consultables pendant que tu montes ton spot.",
  },
  {
    // 🟢 정합 렌즈 반영(2026-08-25) — 비교 절의 «l'endroit et au moment du calcul» 축어를 변주.
    q: "C'est le même genre d'outil que GTO Wizard ou PioSolver ?",
    a: "Tous appartiennent à la famille des solvers ; ce qui les sépare, c'est qui calcule, où, et à quel moment. Ici, la réponse est calculée à l'instant où tu cliques, avec tes ranges et ton arbre de décision, sur ton propre appareil. Les bibliothèques de solutions affichent des réponses précalculées, stockées dans un catalogue. PioSolver est un programme de bureau à installer, surtout sous Windows, qui calcule sur ta machine. Aucun n'est « meilleur » dans l'absolu — ils ne répondent pas au même besoin.",
  },
  {
    // 🔴 무료 설치형 오픈소스와의 대비 — 남의 제품 «성능·가격» 주장은 안 쓴다(§12-B). 구조 사실만.
    q: "TexasSolver est gratuit et open source aussi — lequel choisir ?",
    a: "Dans la même catégorie « gratuit et open source », la différence est le format : celui-là est un programme de bureau — tu télécharges l'installateur de ton système et il tourne sur ton PC ; celui-ci s'exécute directement dans le navigateur, y compris sur mobile, sans rien installer. Ce solver est d'ailleurs lui-même un fork d'un moteur open source (WASM Postflop, AGPL-3.0), avec son code modifié publié — plus une interface en français, des spots d'étude déjà résolus et le Trainer GTO. À chacun son outil : installer une version bureau pour creuser, ou voir la réponse tout de suite dans un onglet.",
  },
  {
    q: "Combien de temps prend un calcul ?",
    a: "Selon la taille de l'arbre de décision et ton processeur : de quelques secondes à quelques minutes. Si tu veux juste voir un résultat tout de suite, ouvre n'importe quel spot d'étude — ils sont déjà calculés, la stratégie s'affiche au clic.",
  },
  {
    q: "Mes ranges sont-elles envoyées sur un serveur ?",
    a: "Non. Le calcul tourne sur le processeur de ton propre appareil, sans passer par nos serveurs. Les ranges sauvegardées restent dans ton navigateur ; elles n'en sortent que si tu génères un lien de partage ou exportes un fichier. Seule exception : l'historique du Trainer — connecté, il est stocké sur ton compte pour que tu puisses continuer sur un autre appareil.",
  },
  {
    q: "Le rake est-il pris en compte ?",
    a: "Oui. Le pourcentage de rake et le cap se règlent avant le calcul, pour que la stratégie colle aux conditions réelles de ta table. La différence se voit surtout dans les petits pots — exactement là où le rake décide quelles mains restent rentables.",
  },
  {
    // 🔴 팟 대비 비율이다. **절대 bb가 아니다.** fr 앱 특징 4칸도 «notés sur la perte d'EV par
    //    rapport au pot» 정정본이라 화면과 이 문항이 일치한다(2026-08-24 실측).
    // 🪶 화면 CTA «il te montre combien de bb chaque décision te coûte»는 오류가 아니다 —
    //    표시 «값»은 bb이고 «합격선»만 팟 대비다(2026-08-23 솔버 왕복에서 확인된 구조).
    // 🟢 정합 렌즈 반영(2026-08-25) — 본문 트레이너 불릿 세 자리를 복제하던 답을 요약형으로 변주
    //    (수치 나열의 정본은 본문 불릿 · «bruit de calcul»은 FAQ 고유 축 유지).
    q: "Le Trainer GTO, c'est quoi ? Comment note-t-il mes décisions ?",
    a: "Un mode exercice : il te met devant un spot déjà résolu, tu choisis une action, et il te dit combien d'EV ce choix abandonne par rapport à l'action optimale. La GTO mélangeant ses actions par nature, une option rare n'est pas une faute en soi — tout se joue sur deux seuils rapportés au pot (0,35 % et 1 %) qui séparent meilleur choix, acceptable et spot à revoir, plus deux planchers (0,02bb et 0,05bb) sous lesquels l'écart se confond avec le bruit de calcul du solver.",
  },
  {
    q: "Je peux sauvegarder et partager mes spots ?",
    a: "Oui. Ranges et réglages se sauvegardent, s'importent et s'exportent ; le récapitulatif s'exporte en CSV ; et un lien de partage ouvre exactement le même spot sur l'appareil de quelqu'un d'autre. Pour débriefer une main avec un ami, c'est le chemin le plus court.",
  },
  {
    q: "C'est adapté au cash game ou au tournoi ?",
    a: "Il calcule en EV jetons (chip EV) : directement valable en cash game, et dans les phases de tournoi où l'ICM pèse encore peu. À l'approche de la bulle et des paliers de paiement, la bonne décision peut s'écarter de la réponse en EV jetons — c'est un autre calcul, que cet outil ne fait pas.",
  },
  {
    // 🟢 언어 열거가 앱 셀렉터(9개)와 1:1이다 — fr 배포로 9언어가 됐다(2026-08-24 실측).
    q: "L'interface est-elle en français ?",
    a: "Oui, entièrement — menus, spots d'étude, Trainer : tout est localisé, pas une traduction à moitié faite. Le sélecteur de langue propose aussi l'anglais, le coréen, le japonais, l'espagnol, le portugais, l'allemand, le chinois simplifié et le chinois traditionnel.",
  },
  {
    // 🔴 게임 의도 방어 — `simulateur poker`(170·상승)는 «플레이» 의도 의심이라 조준 금지(뱅크 §1-④).
    //    조준이 아니라 «구분»이다.
    q: "C'est un jeu de poker en ligne ?",
    a: "Non — ici, pas d'adversaires virtuels ni de parties à jouer : on calcule de la stratégie. Pour jouer au poker gratuitement, il faut une room de poker ; pour savoir à quelle fréquence une main doit miser, checker ou se coucher sur un board donné — et pourquoi — c'est ce solver qu'il te faut. Cela dit, le Trainer ressemble à un jeu : il te met devant de vraies décisions, puis il te note.",
  },
  {
    // 🔴 fr 고유 문항 — `calculateur poker`(390) 흡수. 답의 사실은 앱 Equity 탭 기능(9언어 공통 —
    //    zh-hant 회차 라이브 검증)과 fr 네비 축어(«Equity % victoire»)에서만.
    q: "Y a-t-il un calculateur poker gratuit intégré ?",
    a: "Oui — l'onglet Equity (% victoire), gratuit et sans compte : tu choisis tes deux cartes, l'adversaire peut être une main précise ou une range entière, et le board vide donne l'equity préflop — avec 3, 4 ou 5 cartes, celle du flop, du turn ou de la river. Il calcule l'equity à tapis entre deux joueurs ; dès qu'il y a des mises et des folds au milieu, c'est le travail du solver lui-même. L'app intègre aussi un onglet Charts préflop pour les ranges d'open.",
  },
  {
    // 🟢 `apprendre le poker`(720)·`s'entrainer au poker`(30) 흡수 — 답이 fr 규칙 클러스터(소유자)로
    //    핸드오프한다(카니발 가드 — zh-hant 회차 SEO 렌즈 처방과 동형).
    q: "Où apprendre le poker gratuitement en français ?",
    a: "Le solver donne des chiffres, pas des cours. Pour les bases, commence par le guide des règles du Texas Hold'em sur le blog — l'ordre du jeu, les actions de mise, les blindes, le all-in et l'abattage y sont couverts en français, gratuitement. La façon la plus rapide de progresser ensuite : lire, et garder en parallèle un spot d'étude ouvert pour voir les mêmes idées en chiffres.",
  },
];

export default SOLVER_FAQ_FR;
