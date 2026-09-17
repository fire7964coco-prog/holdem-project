// FR calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the visible render (CalculatorTool).
// ★2026-09-17 신설. EN `app/en/calculator/faq.ts` 8문항의 현지 재작성 — 🔴 §13: 수치 전부 EN과 동일
// (35 % · 19,6 % · 23,1 % · 3 000 ÷ 13 000 · $397 vs $300 · 33,3 % · 16,6 % · 13,3 % · 40 % · 6,7 points).
// 구분자만 프랑스식(천단위 공백·소수 쉼표·% 앞 공백 — `docs/translation-terms-fr.md` 표기 절 · 코퍼스는
// 일반 공백을 쓴다). $ 유지(코퍼스 «$14»·«$400» 관습). register = tu(코퍼스 6편 전부 tu).
// 용어: cotes du pot(`lib/posts-fr/holdem-game-order.ts:309`) · equity(`app/fr/solver/faq.ts`) ·
// tirage couleur(`docs/local-voice/fr-fr.md` §2) · table finale·paliers(솔버 FAQ) · bulle · deal / chip chop.
export const CALCULATOR_FAQ_FR: { q: string; a: string }[] = [
  {
    q: "Comment utiliser le calculateur ICM ?",
    a: "Renseigne le nombre de joueurs, le tapis de chacun et la structure des gains (1re à 6e place). Le calculateur affiche aussitôt ce que chaque tapis vaut réellement en argent — sers-t'en pour tes décisions suivre / se coucher et pour négocier un deal à la bulle et en table finale.",
  },
  {
    q: "L'ICM au poker, c'est quoi ?",
    a: "ICM veut dire Independent Chip Model — un modèle mathématique qui convertit les jetons de tournoi en espérance réelle de gains. L'idée clé : doubler ton tapis ne double pas ton equity en gains.",
  },
  {
    q: "Je suis chip leader — pourquoi ma valeur ICM est-elle inférieure à ma part de jetons ?",
    a: "Parce que gagner ne rapporte toujours que le prix de la 1re place, pas tout le prize pool. Dans l'exemple de bulle ci-dessous, un leader avec 40 % des jetons a une valeur ICM de seulement 33,3 % (6,7 points de moins), alors que le plus petit tapis (13,3 % des jetons) vaut 16,6 % — plus que sa part de jetons.",
  },
  {
    q: "Comment calculer un deal ICM (en table finale) ?",
    a: "Les gains restants se partagent au prorata de la valeur ICM de chaque joueur. La « valeur ICM » que sort ce calculateur — une fois les tapis actuels et les gains restants saisis — est exactement le montant équitable du deal.",
  },
  {
    q: "Quelle différence entre un chip chop et un deal ICM ?",
    a: "Un chip chop partage les gains au prorata brut des jetons, ce qui avantage le chip leader. Un deal ICM reflète la probabilité de chaque joueur de finir à chaque place, il est donc plus juste pour les petits tapis. Dans l'exemple ci-dessous, le petit tapis touche environ $397 avec un deal ICM contre $300 avec un chip chop — demande toujours un deal ICM quand tu es court.",
  },
  {
    q: "Pourquoi se coucher davantage à la bulle ?",
    a: "À la bulle, la valeur ICM que tu perds en sautant est plus grande que celle que tu gagnes en remportant le coup. Un call rentable en EV jetons peut être perdant en EV gains (ICM) : les tapis moyens, en particulier, doivent éviter les coin flips.",
  },
  {
    q: "Comment estimer mon equity à partir des outs ?",
    a: "Multiplie tes outs × 4 au flop et × 2 au turn pour obtenir un pourcentage approximatif. Par exemple, un tirage couleur à 9 outs fait environ 35 % au flop et 19,6 % au turn. Utilise le calculateur d'outs ci-dessus pour les chiffres exacts.",
  },
  {
    q: "Quelle est la formule des cotes du pot ?",
    a: "Montant à suivre ÷ (pot + montant à suivre) = l'equity minimale dont tu as besoin. Par exemple, suivre 3 000 dans un pot de 10 000, c'est 3 000 ÷ 13 000 ≈ 23,1 % : le call est rentable quand ton equity dépasse 23,1 %.",
  },
];
