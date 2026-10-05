// /fr/glossary — Lexique du poker (도구 확장 회차 2 · 2026-10-05)
//
// 정의 출처: 글 축어 0개 · 번역 46개(전 용어 — fr에는 holdem-glossary 글이 없다)
// - EN desc 번역. 표기 = docs/translation-terms-fr.md + lib/posts-fr/ 실사용 grep:
//   blindes · petite/grosse blinde · bouton (BTN) · tableau (board) · tournant · rivière · abattage ·
//   cotes du pot · brelan / brelan servi · quinte · tapis · se coucher · suivre · relancer · parole ·
//   cartes communes · cartes fermées · pot annexe · équité · range · nuts · « roue » (the wheel).
// - 숫자 = 프랑스식(퍼센트 앞 공백 «60 %»). 카드·핸드 예시는 EN과 동일(§13).
// - Rake: EN 문면(«each pot or tournament entry»)의 뜻을 유지 · 단정 강화 없음.
// - EN 용어 수 = 46(glossary-data.ts 실측). 같은 순서·같은 cat.
//
// seo.title 근거(DataForSEO google_ads search_volume · FR/fr · 2026-10-05 1회):
//   lexique poker 260 · termes poker 260 · vocabulaire poker 210 · dictionnaire poker 20 · glossaire poker 10
//   → 헤드텀 «Lexique du poker» + «termes» + «vocabulaire». fr holdem-glossary 글 없음 → seoTitle 충돌 없음.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_FR: GlossaryDict = {
  sortLocale: "fr-FR",
  grouping: "letter",
  seo: {
    title: "Lexique du poker — termes et vocabulaire du Texas Hold'em",
    description:
      "Les termes du poker expliqués clairement : nuts, outs, cotes du pot, 3-bet, c-bet, ICM, SPR, kicker, tilt… Cherche ou filtre 45+ mots du Texas Hold'em.",
    keywords:
      "lexique poker, termes poker, vocabulaire poker, dictionnaire poker, glossaire poker, termes texas holdem, nuts poker signification, outs poker, cotes du pot, 3-bet poker",
    path: "/fr/glossary",
  },
  hero: {
    badge: "♠ {n} termes · recherche de A à Z",
    h1: "Lexique du poker",
    leadBefore: "Tous les termes du Texas Hold'em que tu entendras à table — ",
    leadStrong: "nuts, outs, cotes du pot, 3-bet, ICM",
    leadAfter: " et bien d'autres — définis clairement et correctement. Cherche un mot ou filtre par catégorie.",
  },
  searchPlaceholder: "Chercher un terme (ex. nuts, cotes du pot, outs)...",
  allLabel: "Tous",
  cats: { Action: "Actions", Hand: "Mains", Position: "Position", Math: "Maths", Board: "Tableau", Slang: "Argot" },
  empty: { title: "Aucun terme trouvé pour « {q} ».", hint: "Essaie un autre mot-clé ou une autre catégorie." },
  related: {
    ariaLabel: "Guides associés",
    heading: "Pour aller plus loin",
    items: [
      { href: "/fr/blog/texas-holdem-rules-for-beginners", label: "Les règles", desc: "Blindes, abattage, les bases" },
      { href: "/fr/blog/holdem-betting-actions", label: "Les actions", desc: "Checker, miser, suivre, relancer, se coucher" },
      { href: "/fr/blog/holdem-blind-meaning", label: "Les blindes", desc: "Petite et grosse blinde, ante" },
      { href: "/fr/hand-chart", label: "Mains de départ", desc: "Ranges d'ouverture par position" },
      { href: "/fr/calculator", label: "Calculateur", desc: "Probabilités, cotes du pot, ICM" },
    ],
  },
  terms: [
    { term: "3-bet", cat: "Action", desc: "La première sur-relance d'une main. La grosse blinde compte comme la première mise et la relance d'ouverture comme la deuxième : la sur-relance est donc le 3-bet. Il signale une main très forte — ou un bluff.", aka: ["3-Bet", "sur-relance", "three-bet"] },
    { term: "Tapis (all-in)", cat: "Action", desc: "Miser tout ton stack d'un coup. Une fois à tapis, tu ne peux plus miser, et si au moins deux adversaires continuent de miser au-delà de ton tapis, un pot annexe se forme.", aka: ["All-in", "faire tapis", "tapis"] },
    { term: "Ante", cat: "Action", desc: "Une petite mise obligatoire posée par chaque joueur avant la distribution pour alimenter le pot. Fréquente aux niveaux avancés des tournois, contrairement aux blindes, que seuls deux joueurs posent." },
    { term: "Backdoor", cat: "Board", desc: "Un tirage qui a besoin du tournant et de la rivière pour se compléter — par exemple un tirage couleur backdoor quand le flop ne t'apporte qu'une seule carte de plus de ton enseigne.", aka: ["runner-runner"] },
    { term: "Bad beat", cat: "Slang", desc: "Perdre un coup où tu étais largement favori, en général à cause d'une carte improbable au tournant ou à la rivière.", aka: ["Bad Beat"] },
    { term: "Bankroll", cat: "Slang", desc: "L'argent que tu as mis de côté spécialement pour le poker, séparé de tes finances courantes, pour que les mauvaises séries ne touchent pas ta vie." },
    { term: "Blindes", cat: "Action", desc: "Mises obligatoires posées avant la distribution : la petite blinde (SB) est posée par le joueur à gauche du bouton, la grosse blinde (BB) par le suivant. Elles créent de l'action à chaque main.", aka: ["Blinds", "petite blinde", "grosse blinde"] },
    { term: "Bluff", cat: "Action", desc: "Miser ou relancer avec une main faible pour faire coucher une meilleure main. Le bluff téméraire fait fondre les jetons ; un bluff bien placé gagne des pots que tu aurais perdus autrement.", aka: ["bluffer"] },
    { term: "Tableau (board)", cat: "Board", desc: "Les cartes communes au milieu de la table. Un tableau « humide » est chargé en tirages et dangereux ; un tableau « sec » offre peu de tirages.", aka: ["Board", "cartes communes"] },
    { term: "Bouton (BTN)", cat: "Position", desc: "La position du donneur, marquée par un disque rond. Elle parle en dernier après le flop — le siège le plus rentable — et se déplace d'un siège dans le sens des aiguilles d'une montre à chaque main.", aka: ["Button", "dealer", "donneur"] },
    { term: "Suivre (call)", cat: "Action", desc: "Égaliser la mise en cours pour rester dans le coup. Un joueur qui suit beaucoup trop souvent est appelé une « calling station ».", aka: ["Call", "caller"] },
    { term: "Checker (parole)", cat: "Action", desc: "Passer la parole sans miser — possible seulement quand tu n'as aucune mise à égaliser.", aka: ["Check", "parole"] },
    { term: "Check-raise", cat: "Action", desc: "Checker d'abord, puis relancer après la mise d'un adversaire. Un coup puissant pour piéger les adversaires avec une main forte, ou pour punir ceux qui misent par habitude.", aka: ["Check-Raise"] },
    { term: "Mise de continuation (c-bet)", cat: "Action", desc: "Une mise au flop du joueur qui a relancé préflop, qui garde ainsi l'initiative qu'il avait déjà. Efficace parce que les adversaires ratent souvent le flop.", aka: ["Continuation Bet", "C-Bet", "cbet"] },
    { term: "Cooler", cat: "Slang", desc: "Une main où deux jeux très forts se percutent et où quelqu'un allait forcément perdre gros — comme un brelan servi qui tombe sur un brelan servi supérieur. Rarement évitable." },
    { term: "Tirage (draw)", cat: "Hand", desc: "Une main inachevée qui devient forte si la bonne carte arrive — le plus souvent un tirage couleur ou un tirage quinte.", aka: ["Draw", "tirage couleur", "tirage quinte"] },
    { term: "Équité", cat: "Math", desc: "Ta part du pot selon tes chances de gagner. Une main qui gagne 60 % du temps a 60 % d'équité dans le pot actuel.", aka: ["Equity", "equite"] },
    { term: "Flop", cat: "Board", desc: "Les trois premières cartes communes, distribuées en même temps, suivies du deuxième tour d'enchères." },
    { term: "Se coucher (fold)", cat: "Action", desc: "Abandonner la main et renoncer aux jetons déjà mis dans le pot. Ça stoppe les pertes. On dit aussi « jeter » sa main (muck).", aka: ["Fold", "folder", "coucher", "muck"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal (optimal selon la théorie des jeux) — une stratégie équilibrée et inexploitable, impossible à battre sur le long terme, même quand l'adversaire sait exactement ce que tu fais.", aka: ["Game Theory Optimal"] },
    { term: "Gutshot (tirage ventral)", cat: "Hand", desc: "Un tirage quinte par l'intérieur qui a besoin d'un seul rang précis — seulement 4 outs. Exemple : 5-6-8-9 qui attend un 7.", aka: ["Gutshot", "tirage ventral", "quinte ventrale"] },
    { term: "Range", cat: "Math", desc: "L'ensemble des mains qu'un adversaire peut tenir dans une situation donnée. « Mettre quelqu'un sur une range », c'est réduire ses mains probables.", aka: ["Hand Range", "éventail de mains"] },
    { term: "ICM", cat: "Math", desc: "Independent Chip Model — convertit les jetons de tournoi en valeur réelle en prix. Indispensable pour bien décider de suivre ou de se coucher à la bulle et en table finale.", aka: ["Independent Chip Model"] },
    { term: "Kicker", cat: "Hand", desc: "Une carte d'accompagnement qui départage deux joueurs ayant la même combinaison. Exemple : avec une paire d'as, A-K bat A-Q parce que le roi bat la dame au kicker." },
    { term: "Limp", cat: "Action", desc: "Se contenter de suivre la grosse blinde préflop au lieu de relancer. En général un coup passif et faible qui invite les autres à entrer pour pas cher.", aka: ["limper"] },
    { term: "Nuts", cat: "Hand", desc: "La meilleure main possible sur le tableau actuel. Si tu « as les nuts », tu ne peux pas perdre le coup en l'état.", aka: ["The Nuts"] },
    { term: "Dépareillé (offsuit)", cat: "Hand", desc: "Deux cartes d'enseignes différentes (ex. A♠K♦). Légèrement plus faible que la version assortie de la même main, parce qu'elle forme beaucoup plus rarement une couleur.", aka: ["Offsuit", "off"] },
    { term: "Outs", cat: "Math", desc: "Les cartes restant dans le paquet qui t'améliorent en main gagnante. Un tirage couleur a 9 outs ; un tirage quinte par les deux bouts en a 8." },
    { term: "Overpair (surpaire)", cat: "Hand", desc: "Une paire en main plus haute que toutes les cartes du tableau — par exemple QQ sur un flop J-7-3.", aka: ["Overpair", "surpaire"] },
    { term: "Position", cat: "Position", desc: "Ta place dans l'ordre des enchères. Parler plus tard (« en position ») est un gros avantage, car tu vois les adversaires agir avant de décider." },
    { term: "Pot", cat: "Board", desc: "Le total des jetons misés dans une main. Le gagnant rafle tout ; en cas d'égalité, il est partagé à parts égales (split pot)." },
    { term: "Cotes du pot (pot odds)", cat: "Math", desc: "Le rapport entre ton call et le pot : call ÷ (pot + call). Si tes chances de gagner dépassent ce pourcentage, suivre est rentable sur le long terme.", aka: ["Pot Odds", "cote du pot"] },
    { term: "Préflop", cat: "Board", desc: "Le premier tour d'enchères, avant toute carte commune, quand chaque joueur n'a que ses deux cartes fermées.", aka: ["Preflop", "pré-flop"] },
    { term: "Rake", cat: "Slang", desc: "La petite commission que la salle ou le site de poker prélève sur la plupart des pots de cash game ou sur l'inscription en tournoi — c'est ainsi que la salle gagne de l'argent." },
    { term: "Relancer (raise)", cat: "Action", desc: "Augmenter la mise en cours. Ça prend l'initiative et pousse les adversaires à se coucher ou à engager plus de jetons.", aka: ["Raise", "relance"] },
    { term: "Rivière (river)", cat: "Board", desc: "La cinquième et dernière carte commune, suivie du dernier tour d'enchères avant l'abattage.", aka: ["River"] },
    { term: "Semi-bluff", cat: "Action", desc: "Miser une main faible pour l'instant mais qui peut s'améliorer — comme un tirage couleur. Plus sûr qu'un bluff pur, car tu peux encore toucher et gagner si on te suit.", aka: ["Semi-Bluff"] },
    { term: "Set (brelan servi)", cat: "Hand", desc: "Un brelan formé avec une paire en main plus une carte du même rang au tableau. Très bien caché — les adversaires le voient rarement venir. (À comparer avec « Trips ».)", aka: ["Set", "brelan servi", "brelan"] },
    { term: "Abattage (showdown)", cat: "Board", desc: "Après la dernière mise, les joueurs restants dévoilent leurs cartes. La meilleure main de cinq cartes remporte le pot.", aka: ["Showdown"] },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — stack effectif ÷ pot. Un SPR bas favorise l'engagement avec des mains faites fortes ; un SPR élevé récompense les tirages et le jeu postflop.", aka: ["Stack-to-Pot Ratio"] },
    { term: "Stack (tapis)", cat: "Slang", desc: "Les jetons qu'un joueur a devant lui sur la table. Un « deep stack » est gros par rapport aux blindes ; un « short stack » est petit.", aka: ["Stack", "tapis"] },
    { term: "Tilt", cat: "Slang", desc: "Jouer de façon émotionnelle et mal après un bad beat ou une frustration. C'est la fuite qui coûte à la plupart des joueurs plus que n'importe quelle main isolée." },
    { term: "Trips (brelan par le tableau)", cat: "Hand", desc: "Un brelan formé avec une carte en main et une paire au tableau. Il paraît plus fort aux adversaires qu'un set, donc il rapporte moins. (À comparer avec « Set ».)", aka: ["Trips", "brelan"] },
    { term: "Tournant (turn)", cat: "Board", desc: "La quatrième carte commune, distribuée après le flop, suivie de son propre tour d'enchères.", aka: ["Turn"] },
    { term: "Value bet (mise de valeur)", cat: "Action", desc: "Miser une main forte pour être suivi par une moins bonne — l'inverse du bluff, et la source de l'essentiel des gains sur le long terme.", aka: ["Value Bet", "mise de valeur"] },
    { term: "Roue (wheel)", cat: "Hand", desc: "La quinte la plus basse possible, A-2-3-4-5, où l'as compte comme la plus petite carte.", aka: ["Wheel", "the wheel"] },
  ],
};
