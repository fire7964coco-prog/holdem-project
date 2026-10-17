"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 프랑스어(fr-FR)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 두 번째 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작(형제 = pt).
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 독자 = 프랑스(tu체 — 계산기 사전·코퍼스와 같은 register).
 * 용어 출처: docs/translation-terms-fr.md → app/fr/calculator/dict.ts(족보 «Carte haute»·«Double paire»·«Brelan»·«Quinte»·
 *   «Couleur»·«Full»·«Carré»·«Quinte flush» · «cotes du pot» · «équité» · «suivre / se coucher») → lib/posts-fr 코퍼스 빈도(10-13 grep):
 *   se coucher 191(folder 12) · suivre 195 · relance 692 · tapis 277(all-in 173) · pot partagé 36 · préflop 333(pré-flop 0) ·
 *   tirage couleur 145 · tirage quinte 56 · top paire 109 · overpair 93 · équité 432(equity 101) · cotes du pot 66(pot odds 16) ·
 *   cotes implicites 112 · abattage 144(showdown 70) · street 84 · point(s) de pourcentage 3.
 * 숫자 = 프랑스식(`fmtNum` fr-FR «1 000» · 산문 소수 쉼표 «0,25» · 산문 «%» 앞 고정공백 — 계산기 사전 percentGap과 같은 판단).
 *   ⚠ 공용 UI의 % 소수(toFixed)는 전 언어 점·붙임(de·pt와 같음 · 공용 회차 몫).
 * 솔버 메뉴명 «Étudier un flop» = 솔버 앱 flop-study-labels.ts fr.title 축어.
 * 헤드텀 실측(DFS France · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md §fr.
 */

const n = (x: number) => x.toLocaleString("fr-FR");
/** 공용 UI가 toFixed(1)로 넘기는 오차·격차(«3.5»)를 프랑스식 소수 쉼표로(렌즈 10-13). «—»는 그대로. */
const dec = (x: string) => x.replace(".", ",");
/** 스트리트 관사 — «la river»(코퍼스·계산기 사전) · 나머지는 «le». */
const theStreet = (st: string) => (st === "River" ? "la river" : `le ${st.toLowerCase()}`);

const FR_NAMES: HandNames = {
  categories: ["Carte haute", "Paire", "Double paire", "Brelan", "Quinte", "Couleur", "Full", "Carré", "Quinte flush"],
  drawingDead: "Drawing dead",
  flushDraw: "Tirage couleur",
  straightDraw: "Tirage quinte",
};

const FR_UI: QuizUI = {
  names: FR_NAMES,
  streets: ["Préflop", "Flop", "Turn", "River"],
  hero: "Toi",
  folded: "Couché",
  raise: "Relance",
  call: "Suit",
  bet: "Mise",
  check: "Check",
  allIn: "Tapis",
  tableNote: "Table 6-max ou à 9 · choisis combien voient le flop (2–6)",
  playersBtn: (k) => `${k} joueurs`,
  playersLabel: "Joueurs",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Style des adversaires",
  styleHint: "Style des adversaires — ne change que les règles d'action à partir du flop ; les ranges préflop restent les mêmes",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Agressif" },
  loading: "On mélange et on fait les calculs…",

  myEquity: "Ton équité",
  vsOpponents: (k) => (k === 0 ? "plus personne en face" : `contre ${k} adversaire${k > 1 ? "s" : ""}`),
  basisSeat: "contre des ranges par position",
  basisRange: "contre les mains qui collent à leurs actions",
  roleOpen: "A ouvert",
  roleDefend: "A défendu",
  winShort: "Gagne",
  tieShort: "Égalité",
  loseShort: "Perd",
  revealedLabel: "👀 Contre les mains dévoilées",
  revealedNote: (gap) =>
    `Le chiffre du haut part du principe que tu ne vois pas leurs cartes — d'où l'écart de ${dec(gap)} points de pourcentage. C'est sur le chiffre du haut que tu déciderais vraiment.`,

  potOddsTitle: "Cotes du pot — l'équité qu'il faut pour qu'un call ne perde pas sur le long terme (point mort)",
  potLabel: "Pot",
  potBeforeLabel: "Pot (avant la mise)",
  toCallLabel: "À suivre",
  requiredLabel: "Équité nécessaire",
  noBet: "Personne n'a misé. Tu vois la carte suivante gratuitement.",
  noBetAllIn: (river) =>
    river
      ? "Tous les joueurs encore dans le coup sont déjà à tapis, il n'y a plus de jetons à miser. La main passe directement à l'abattage."
      : "Tous les joueurs encore dans le coup sont déjà à tapis, il n'y a plus de jetons à miser. Les cartes restantes sont distribuées, puis la main passe à l'abattage.",
  verdictCall: "Suivre",
  verdictFold: "Se coucher",
  impliedNote: "Cela dit, si tu peux gagner davantage quand tu touches (cotes implicites), suivre peut quand même être le bon choix.",

  revealBtn: (next) => `Distribuer ${theStreet(next)} →`,
  newHandBtn: "Nouvelle main 🔄",
  showCards: "👀 Voir leurs cartes",
  hideCards: "🙈 Cacher leurs cartes",

  wonByFold: (pot) => `Tout le monde s'est couché — tu remportes le pot de ${n(pot)}`,
  splitLabel: (names) => `Pot partagé — égalité entre ${names.length > 1 ? names.slice(0, -1).join(", ") + " et " + names[names.length - 1] : names[0]}`,
  winLabel: (name, cat) => `${name} gagne · ${cat}`,
  winLabelHero: (cat) => `Tu gagnes · ${cat}`,

  reviewTitle: "📋 Revue — quand fallait-il te coucher ?",
  reviewCols: ["Street", "Ton équité", "Nécessaire", "Verdict"],
  reviewNoMistake: "✅ Suivre était le bon choix jusqu'au bout.",
  reviewMistake: (street) => `⚠️ Dès ${theStreet(street)}, il fallait déjà te coucher. C'était ton moment pour sortir du coup.`,
  reviewInvested: (invested, pot) => `Tu as investi ${n(invested)} · pot final ${n(pot)}`,

  formulaTitle: "📐 D'où vient ce chiffre",
  outsLabel: (k) => (k === 1 ? `${k} carte complète ou améliore ta main` : `${k} cartes complètent ou améliorent ta main`),
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} pour la couleur` : "",
      o.straight > 0 ? `${o.straight} pour la quinte` : "",
      o.set > 0 ? `${o.set} pour un set ou un brelan` : "",
      o.twoPair > 0 ? `${o.twoPair} pour la double paire` : "",
      o.over > 0 ? `${o.over} pour apparier une overcard` : "",
      both > 0 ? `${both} ${both > 1 ? "comptent" : "compte"} pour deux de ces catégories (comptée${both > 1 ? "s" : ""} une seule fois)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Chance qu'une de ces cartes tombe (règle du 2 et du 4)",
  winLabel2: "Ton équité dans le pot (simulée · une égalité compte comme ta part du pot partagé)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Les deux ne mesurent pas la même chose. Celui du haut, c'est ta chance de TOUCHER ; celui du bas, c'est ta part du pot en GAGNANT (une égalité compte comme ta part). Tu peux toucher et perdre quand même si un adversaire s'améliore davantage, et rater et gagner quand même. Le verdict se fonde sur le chiffre du bas.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `On est encore au préflop, donc le raccourci « outs × 2/4 » ne s'applique pas encore. L'équité ci-dessus vient de ${k} mains simulées contre les mains avec lesquelles chaque adversaire entrerait plausiblement dans le pot depuis sa position.`
      : `Tu n'as aucun des outs que cet outil compte — aucune carte ne complète une couleur ou une quinte, ni ne fait monter ta main d'une catégorie (set ou brelan, double paire ou paire en appariant une overcard) — donc le raccourci « outs × 2/4 » ne s'applique pas ici. L'équité ci-dessus vient de ${k} mains simulées contre toutes les mains qui collent aux actions que tu as vues.`,
  foldWinNote: "Tous les adversaires se sont couchés, le pot est donc à toi. Les 100 % ci-dessus ne sont pas un chiffre simulé — c'est le résultat de cette main.",
  riverNote: "C'est la river, il ne reste plus de carte à venir et le raccourci « outs × 2/4 » ne s'applique pas. L'équité ci-dessus compare ta main finale à toutes les mains qui collent aux actions que tu as vues.",
  chartTitle: "📈 Équité street par street — toutes les cartes à découvert",
  resultTabs: ["📋 Revue", "📈 Évolution", "🃏 Calcul"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Voir ce spot dans le solver GTO" : info.kind === "notReady" ? "Voir un spot proche dans le solver GTO" : "Voir un spot en heads-up dans le solver GTO",
  solverOpen: "Ouvrir « Étudier un flop » dans le solver",
  solverNote: (info) => {
    const gto = "Il montre la stratégie au flop quand les deux joueurs jouent GTO (résultats précalculés · 6-max 100bb · flop uniquement) : les ranges, les tailles de mise et les règles des adversaires ne sont donc pas celles de ce simulateur.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} ouvre · ${info.caller} suit (pot à une relance dans le solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — le lien ouvre les mêmes positions et le même flop dans « Étudier un flop » du solver. ${gto}`
          : `${info.opener} ouvre · ${info.caller} suit — cette main s'est terminée avant le flop, seul l'affrontement de positions s'ouvre. Choisis les trois cartes du flop dans le solver. ${gto}`;
      case "notReady":
        return `L'affrontement « ${info.opener} ouvre · ${info.caller} suit » n'est pas encore précalculé dans « Étudier un flop » du solver. Choisis un affrontement de positions proche, ou calcule-le toi-même dans le solver.`;
      case "multiway":
        return `${info.players} joueurs ont vu ce flop. Les résultats précalculés du solver ne couvrent que les pots en heads-up, cette main ne peut donc pas s'ouvrir telle quelle — choisis dans « Étudier un flop » un affrontement contre un seul adversaire.`;
      case "table9":
        return "Les résultats précalculés du solver portent sur des tables 6-max, une main jouée à 9 ne peut donc pas s'ouvrir telle quelle — choisis dans « Étudier un flop » l'affrontement de positions le plus proche.";
    }
  },
  solverLang: "fr",
  fmtNum: n,
  decimalComma: true,
  percentGap: " ",
  chartRangeLegend: "Ce que tu as vu",
  chartNote: "Les lignes pleines montrent l'équité de chaque siège avec toutes les mains découvertes ; la ligne pointillée est l'équité que tu as vue à l'écran sans connaître leurs cartes. La ligne d'un joueur couché s'arrête à la street qui précède celle où il se couche.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Quelle est ton équité ?",
  quizGuessHint: "Place ton estimation avec le curseur",
  quizSubmit: "Vérifier",
  quizCallSubmit: "Suivre → vérifier",
  quizFoldSubmit: "Se coucher → vérifier",
  quizResult: (guess, err, points) => `Ton estimation ${guess} % · écart de ${dec(err)} pts de % · ${points} pts`,
  quizChoiceResult: (ok, verdict) => (ok ? `Bonne décision (${verdict})` : `Raté — la bonne réponse était : ${verdict}`),
  quizNotCounted: "Non compté dans ton historique de quiz — tu avais déjà vu l'équité ou les cartes des adversaires",
  quizStats: (s) => `${s.hands} main${s.hands > 1 ? "s" : ""} · écart moyen ${dec(s.avgErr)} pts de % · ${s.hits}/${s.decisions} bonnes décisions · ${n(s.points)} pts`,
  quizReset: "Réinitialiser",
  quizResetConfirm: "Effacer l'historique du quiz enregistré dans ce navigateur ? C'est irréversible.",
  quizInvite: "Connecte-toi pour garder cet historique sur ton compte et le retrouver sur n'importe quel téléphone ou PC.",
  quizInviteLink: "Se connecter",
  quizGuessCol: "Estimation",
  quizChoiceCol: "Choix",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Sur cette main : écart moyen ${dec(avgErr)} pts de %${decisions > 0 ? ` · ${hits}/${decisions} bonnes décisions` : ""} · ${points} pts`,
  quizGuessLegend: "Ton estimation",
  customToggle: "✍️ Créer une main",
  customTitle: "Crée une main — rejoue un coup que tu as joué",
  customHint: "Touche une case, puis choisis une carte en dessous. Les cases vides sont tirées au hasard, et les adversaires reçoivent toujours des mains issues des ranges de leur position.",
  customPos: "Ta position",
  customRandom: "Au hasard",
  customHero: "Ta main",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Distribuer cette main →",
  customClear: "Tout effacer",
  customClose: "Fermer",
  customOff: "Revenir aux mains aléatoires",
  customActive: "Ta main créée · les mains suivantes gardent ces cartes",
  customEdit: "Modifier",
  shareBtn: "Copier le lien de cette main",
  shareCopied: "Copié. Quiconque ouvre le lien joue cette main depuis le préflop avec les mêmes cartes et la même équité.",
  shareManual: "La copie automatique est bloquée. Copie l'adresse ci-dessous.",
  sharedActive: "Main partagée · mêmes cartes et même équité que chez l'expéditeur (non comptée dans ton historique de quiz)",
  sharedInvalid: "Impossible de lire le lien partagé, voici donc une nouvelle main aléatoire (le lien est peut-être coupé ou modifié)",
  rangeToggle: "Voir la range de l'adversaire",
  rangeTitle: "Range de l'adversaire — les mains qui collent à l'action jusqu'ici",
  rangeCombos: (pre, cur, pct) => `Préflop ${pre} combos → maintenant ${cur} combos (il en reste ${pct} %)`,
  rangeLegend: ["Encore dans la range (plus foncé = plus grande part restante)", "Éliminée par l'action", "Jamais dans la range", "Main réelle", "Bloquée par ta main ou le board"],
  rangeNote: "On part de la range préflop de sa position, puis on retire, street après street, chaque main qui aurait agi autrement selon les règles de l'adversaire. L'équité ci-dessus utilise cette même range. Les combos qui utilisent une carte de ta main ou du board sont exclus.",
  quizKinds: ["Estimer l'équité + décider", "Décider seulement (suivre ou se coucher ?)"],
  decideTitle: "Suivre ou se coucher ?",
  decideHint: "Choisis de suivre ou de te coucher sans voir leurs cartes. Même si tu te couches, la main va jusqu'au bout. Ce mode n'est pas compté dans ton historique de quiz.",
  decideSummary: (hits, decisions) => `Sur cette main : ${hits}/${decisions} bonnes décisions selon les cotes du pot`,
  actualCol: "Cartes connues",
  actualSummary: (hits, decisions) => `Bonnes décisions si tu avais connu leurs cartes : ${hits}/${decisions} — à titre indicatif seulement. À la table, la référence, ce sont les cotes du pot sans voir leurs cartes.`,

  ruleTitle: "Ce que ce simulateur suppose",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Les adversaires suivent les règles ci-dessous, et rien d&rsquo;autre.</b> Aucun vrai joueur
        ne joue comme ça — la position, l&rsquo;adversaire, la profondeur des stacks et l&rsquo;image à la table changent tout. Vois-le
        comme le « on néglige les frottements » d&rsquo;un exercice de physique.
      </p>
      <p className="mb-1">
        Style des adversaires en ce moment : <b className="text-foreground">{FR_UI.styleNames[style]}</b> (toute la table joue le même style · change-le dans le sélecteur ci-dessus)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Double paire ou mieux → <b className="text-foreground">{style === "aggressive" ? "mise ou relance de 150 % du pot (overbet)" : "mise ou relance de la taille du pot"}</b></li>
        {style === "standard" && <li>Une paire, ou un tirage couleur/quinte → <b className="text-foreground">mise d&rsquo;un demi-pot</b></li>}
        {style === "tight" && <>
          <li>Une top paire ou mieux, faite avec au moins une carte de la main (overpairs comprises), ou un tirage couleur/quinte → <b className="text-foreground">mise d&rsquo;un demi-pot</b></li>
          <li>Toute paire plus faible (y compris une paire qui n&rsquo;est que sur le board) → <b className="text-foreground">se couche</b></li>
        </>}
        {style === "loose" && <li>Une paire, un tirage couleur/quinte, ou une carte de la main plus haute que toutes celles du board (une overcard) → <b className="text-foreground">mise d&rsquo;un demi-pot</b></li>}
        {style === "aggressive" && <>
          <li>Tirage couleur/quinte → <b className="text-foreground">mise ou relance (semi-bluff)</b></li>
          <li>Une paire → <b className="text-foreground">mise d&rsquo;un demi-pot</b></li>
          <li>Ni paire ni tirage, mais une overcard → <b className="text-foreground">mise ou relance (bluff)</b></li>
        </>}
        <li>Tout le reste → <b className="text-foreground">se couche</b> (cartes jetées sans être montrées, comme en live)</li>
      </ul>
      <p className="mb-2">
        Les règles se lisent de haut en bas : c&rsquo;est la première ligne qui correspond qui décide de l&rsquo;action. Un tirage, c&rsquo;est quatre cartes à la couleur ou à la quinte au flop ou au turn, dont au moins une carte de la main (il n&rsquo;y a pas de tirage à la river).{" "}
        {style === "aggressive" && "Toutes les relances du style Agressif, semi-bluffs et bluffs compris, font 150 % du pot. "}
        Quand quelqu&rsquo;un relance, tous les joueurs encore dans le coup suivent cette relance, et une mise plus grosse que le tapis
        restant est ramenée au tapis restant : le joueur est à tapis. Dès qu&rsquo;un joueur est à tapis, plus personne ne se couche — le reste du board est distribué et on passe à l&rsquo;abattage. Il n&rsquo;y a pas de check-raise — chaque adversaire agit une fois par street selon les règles, sans étape où un joueur checke puis répond à nouveau. Sur une street postflop avec une mise, les étiquettes des sièges résument cette street : le siège qui fixe le montant affiche « Mise », et tous les autres adversaires encore dans le coup affichent « Suit », quelle que soit leur place dans l&rsquo;ordre (au préflop, les étiquettes montrent comment chacun est entré, et un siège parti à tapis sur une street précédente affiche son tapis). Ici, tu ne mises jamais ; tu suis simplement jusqu&rsquo;à la river.
        Les ranges préflop (ci-dessous) sont les mêmes quel que soit le style.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Ton équité est calculée comme si tu ne voyais pas leurs cartes.</b> À partir du
        flop, la range de chaque adversaire, ce sont les mains de la range préflop de sa position (ci-dessous) qui auraient fait les actions que
        tu as vues selon les règles du style choisi — contre des adversaires de style Normal, une relance ne laisse que la double paire
        ou mieux ; contre des adversaires de style Agressif, les tirages et les bluffs avec overcard restent aussi. Si l&rsquo;action propre d&rsquo;un siège était une relance, le calcul la compte toujours comme une relance même si son étiquette affiche « Suit » — cette étiquette apparaît alors en rouge. Les joueurs qui se couchent à l&rsquo;écran
        sortent aussi du calcul.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Les mains préflop des adversaires viennent de ranges par position.</b> Parmi les
        joueurs dans le pot, celui qui parle en premier au préflop est considéré comme l&rsquo;ouvreur, et tous les autres comme ayant
        défendu cette ouverture par un call ou un 3-bet (range d&rsquo;ouverture · range de défense). Les ranges sont des ranges de
        consensus de cash game 6-max 100bb recoupées entre plusieurs sources publiques, avec les mains limites mélangées à
        25/50/75 %. Là où il n&rsquo;existe pas de tableau (HJ face à une ouverture UTG · SB face à une ouverture UTG, HJ ou CO), ainsi qu&rsquo;à partir du
        troisième joueur, c&rsquo;est le tableau de défense le plus proche qui sert. Il n&rsquo;y a pas de tableaux pour table à 9 : à une table à 9,
        UTG, UTG+1, UTG+2 et LJ utilisent le tableau UTG 6-max, et chacun des autres sièges utilise le tableau 6-max du
        même nom (une position précoce qui défend l&rsquo;ouverture d&rsquo;une autre position précoce, ou le HJ qui la défend, utilise le tableau CO contre UTG) — les trois premiers sièges d&rsquo;une table à 9 ont donc des ranges plus larges qu&rsquo;en réalité. Seule ta main est aléatoire (sauf si tu la crées toi-même) — l&rsquo;outil te laisse
        jouer n&rsquo;importe quelle main de départ jusqu&rsquo;à la river. Ici, un 3-bet ne change pas la taille du pot (simplifié).
      </p>
      <p className="mb-2">
        <b className="text-foreground">Le verdict, ce sont les cotes du pot et rien d&rsquo;autre.</b> Les cotes implicites n&rsquo;y entrent pas, et
        les tendances et les bluffs des adversaires n&rsquo;entrent dans les ranges que dans la limite des règles du style choisi. Les tirages, surtout, justifient souvent de suivre même quand les cotes du pot, prises seules,
        sont un peu justes.
      </p>
      <p>
        Tout le monde paie une ante de {ANTE} et commence avec un tapis de {n(STACK)}. Tu ne te couches jamais — c&rsquo;est le principe :
        tu vois la river et tu fais la revue. L&rsquo;équité est une estimation simulée avec une taille d&rsquo;échantillon fixe :{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} simulations</b> au préflop et{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simulations</b> à partir du flop (erreur-type d&rsquo;au plus 0,25–0,35 point de pourcentage environ — d&rsquo;autant plus petite que le chiffre s&rsquo;éloigne de 50&nbsp;%).
        Chaque main utilise une graine aléatoire fixe : la même main affiche donc les mêmes chiffres sur n&rsquo;importe quel appareil. En cas d&rsquo;égalité, le pot est
        divisé à parts égales entre les joueurs concernés (moitié chacun à deux).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Quand tu affiches leurs cartes</b>, chaque siège reçoit son équité avec toutes les mains connues. À partir
        du flop, cela compte exactement toutes les cartes restantes (seul le préflop passe par {n(SAMPLES.known)} simulations),
        et cela n&rsquo;entre jamais dans l&rsquo;équité ni dans le verdict suivre/se coucher affichés — à une vraie table, tu n&rsquo;aurais pas
        cette information.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Avec le Quiz activé</b>, l&rsquo;équité et le verdict restent cachés jusqu&rsquo;à ce que tu répondes. En
        « Estimer l&apos;équité + décider », tu estimes ton équité à chaque street et, sur les streets où quelqu&rsquo;un mise, tu choisis
        aussi de suivre ou de te coucher. En « Décider seulement (suivre ou se coucher ?) », pas d&rsquo;estimation : tu choisis seulement
        de suivre ou de te coucher sur les streets où quelqu&rsquo;un mise, et ce mode n&rsquo;est pas compté dans ton historique de quiz. La réponse, c&rsquo;est « Ton équité » ci-dessus (le
        chiffre sans voir leurs cartes), et chaque estimation rapporte <b className="text-foreground">100 − 4 × écart (en points de pourcentage)</b>
        {" "}points, arrondi à l&rsquo;entier et jamais en dessous de zéro (zéro dès que l&rsquo;écart atteint 25 points de pourcentage). Un choix suivre/se coucher compte comme bon quand il correspond au verdict des cotes du pot. Tes
        totaux restent dans ce navigateur et, si tu es connecté, ils sont aussi enregistrés sur ton compte pour
        te suivre sur tes autres appareils (les cartes et le board ne sont pas enregistrés).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ Créer une main</b> te permet de choisir ta position, tes cartes et le board pour rejouer une
        main que tu as vraiment jouée. Les cases vides sont tirées au hasard. Tu ne peux pas choisir les cartes des adversaires — à une
        vraie table, tu ne les connaîtrais pas non plus —, elles viennent donc toujours des ranges par position, et l&rsquo;équité affichée
        garde la même hypothèse « cartes inconnues ». Même avec un board fixé à l&rsquo;avance, l&rsquo;équité de chaque street n&rsquo;utilise que
        les cartes distribuées jusque-là. Comme rejouer la même main te permettrait de retenir les réponses, les mains créées ne
        sont pas comptées dans ton historique de quiz.
      </p>
    </>
  ),
  footer: (
    <>
      Tu veux voir le calcul ?{" "}
      <a href="/fr/blog/holdem-pot-odds" className="text-primary underline">Comment calculer les cotes du pot →</a>
      {" · "}
      <a href="/fr/blog/holdem-position-play" className="text-primary underline">Pourquoi la position compte</a>
      {" · "}
      <a href="/fr/calculator" className="text-primary underline">Calculateur poker</a>
    </>
  ),
};

export default function WinRateQuizClientFr() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Simulateur poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Joue sans voir leurs cartes — et découvre quand il fallait te coucher</p>
      </div>
      <WinRateSimulator ui={FR_UI} />
    </div>
  );
}
