// FR calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the visible render (CalculatorTool).
//
// ★2026-09-18 «계산 기능 강조» 재조준 회차 — 8 → 18문항(EN 17 + fr 고유 1).
//   EN 정본 = `app/en/calculator/faq.ts` · 근거 = `docs/keyword-bank/fr-calculator.md` §5(PAA)·§6(채택).
//
// 질문 표기의 근거(실측 09-18):
//   🔴 fr은 **명사형보다 동사형이 21배** 크다 — «calcul probabilité poker» 210 : «calculateur probabilité poker» 10.
//      그래서 문항을 «Comment calculer…»·«Comment…» 형으로 짰다(뱅크 §1·§7-B).
//   PAA 축어로 확보한 것 = «Comment calculer les outs au poker ?» · «C'est quoi l'ICM ?» · «Qu'est-ce que l'équité au poker ?».
//   🔴 «calcul probabilité poker»의 PAA 8개는 **전부 일반 수학**(«formule du PA»·«probabilité de a et b»)이라 근거로 쓰지 않았다(뱅크 §5).
//   🟢 fr은 정보형 축의 형제 소유자가 0이라(코퍼스 6편 · 뱅크 §0-A) 정의형 문항도 카니발이 아니다 —
//      그래도 EN처럼 «계산기형»으로 유지한다. 도구 페이지의 의도가 그쪽이고, 형제 글이 생기면 그때 넘긴다.
//
// fr 고유 1 = «Peut-on utiliser un calculateur de poker à la table ?» — 근거 3종(es·zh-hant·pt·de 선례와 동형):
//   ① 경쟁 SERP에 이 문항 0건(공백) ② 자동완성 «calculateur poker en ligne»·«poker calculator app» 생존
//   ③ 1차 출처 = `docs/sources/tda-2024-rules-v1.txt` Rule 5-A·5-C·5-D(2024판).
//   🔴 2022판은 «live hand 중»만 금지했지만 2024판 5-D는 «at the table» 전체다 — 되돌리지 마라(zh-hant 회차 교훈).
//   🔴 합법성 축은 열지 않는다(정보 제공만 · 메모리 `legality-ban-scope-topic-vs-tangent`).
//
// 🔴 §13: 수치는 전부 EN과 동일 — 82 % · 81,9 % · 0,5 % · 88/12 · 66/34 · 46~47 % · 45 % · 43 % · 2,5~3 ·
//   30 % · 7 % · 50/50 · 36 % · 18 % · 54,1 % · 60 % · 1,6 · 2,6 · 35,0 % · 19,1 % · 19,6 % ·
//   3 000 ÷ 13 000 ≈ 23,1 % · 33,3 % · 25 % · 4,2 contre 1 · 990 · 44 · 1,7 million · 60 000 · 0,3 ·
//   40 % · $276 · $458 · (TDA) 2024 · règle 5.
//   🪶 초안 주석은 이 파일에 **없는** 13,3 %·16,6 %를 적고 실제 있는 82 %·60 %·1,6·2,6·50/50을 빠뜨렸다
//   (그 둘은 `dict.ts` icmGuide.bubble에만 있다 — 교열 렌즈 09-18).
// 🪶 4·2 규칙 답변은 **es 교열 렌즈의 EN 정정**을 반영했다 — «×2가 1~2점 모자란다»는 5~11 outs에서만 참이다
//   (1~4 outs 0,2~0,7 · 9 outs 1,6 · 15 outs 2,6 · 20 outs 3,5) → «outs가 늘수록 더 모자란다»로 적는다.
// 🪶 ICM call/fold 답변도 es 네이티브 렌즈 정정 반영 — 승/버스트 «단순 평균»은 승률 50 % 가정이 된다 → «승률로 가중».
// 조판: % 앞 공백 · 천단위 공백 · 소수 쉼표 · $ 유지 · guillemets « » · register = tu(코퍼스 6편 전부).
export const CALCULATOR_FAQ_FR: { q: string; a: string }[] = [
  {
    q: "Comment fonctionne un calculateur de cotes au poker ?",
    a: "Il distribue toutes les cartes encore à venir et compte à quelle fréquence chaque main gagne. Quand toutes les mains sont connues, ce calculateur énumère exactement chaque déroulement possible au flop et au turn (990 au flop en heads-up, 44 au turn ; moins s'il y a plus de joueurs, et la river est déjà complète). En préflop il y a 1,7 million de boards par confrontation, et un adversaire en main aléatoire multiplie encore ce nombre : dans ces cas-là il échantillonne 60 000 déroulements au hasard et le signale sous le résultat — le chiffre bouge d'environ 0,3 point d'un calcul à l'autre.",
  },
  {
    q: "Quelles sont les cotes de AA contre KK ?",
    a: "Une paire d'as gagne environ 82 % du temps contre une paire de rois en préflop (81,9 % en moyenne sur toutes les combinaisons d'enseignes, avec 0,5 % de chances d'égalité). AA contre AK assortis, c'est environ 88 % contre 12 %, et KK contre AK assortis environ 66 % contre 34 %.",
  },
  {
    q: "AK contre une paire servie, est-ce vraiment un coin flip ?",
    a: "C'est proche contre toutes les paires sous les as et les rois, sans jamais être exactement 50/50. AK dépareillé a environ 46 à 47 % d'équité contre 22–44, environ 45 % contre 55–99 et environ 43 % contre 10-10–QQ ; AK assorti ajoute à peu près 2,5 à 3 points. Contre KK ça tombe à environ 30 % et contre AA à environ 7 % — l'étiquette ne vaut donc que pour les paires que l'as et le roi dominent tous les deux.",
  },
  {
    q: "Comment calculer les outs au poker avec la règle du 2 et du 4 ?",
    a: "Compte tes outs — un tirage couleur en a 9, une quinte bilatérale 8, une ventrale 4 — puis convertis-les avec ce raccourci de calcul mental : avec deux cartes à venir (du flop à la river) multiplie tes outs par 4 ; avec une seule carte à venir (du turn à la river) multiplie par 2. Pour 9 outs ça donne 36 % et 18 % ; les chiffres exacts sont dans la réponse suivante. La moitié « × 4 » reste à environ un point près jusqu'à 9 outs puis dérive d'à peu près un point par out (15 outs, c'est 54,1 % en réalité, pas 60 %). La moitié « × 2 » est toujours un peu basse, et de plus en plus à mesure que les outs augmentent : environ 1,6 point de moins à 9 outs, 2,6 à 15 outs. Et le « × 4 » ne s'applique que si tu vas voir les deux cartes sans repayer.",
  },
  {
    q: "Un tirage couleur rentre à quelle fréquence ?",
    a: "Avec 9 outs, un tirage couleur se complète 35,0 % du temps du flop à la river (deux cartes à venir), 19,1 % sur la carte suivant le flop, et 19,6 % du turn à la river.",
  },
  {
    q: "Comment calculer les cotes du pot ?",
    a: "Montant à suivre ÷ (pot après la mise + montant à suivre) = l'équité minimale dont tu as besoin. Par exemple, suivre 3 000 quand le pot contient déjà 10 000 mise adverse comprise, c'est 3 000 ÷ 13 000 ≈ 23,1 % : le call est rentable dès que ton équité dépasse 23,1 %. Une mise de la taille du pot demande toujours 33,3 % ; une demi-mise du pot, 25 %.",
  },
  {
    q: "Quelles cotes du pot faut-il pour suivre avec un tirage couleur ?",
    a: "Face à une seule mise au flop, ne compte que la carte suivante : 9 outs rentrent 19,1 % du temps, donc il te faut des cotes du pot meilleures qu'environ 4,2 contre 1 — ou des cotes implicites qui comblent l'écart, ce qui suppose que l'adversaire ait du tapis derrière et une main qui paiera. Dévalue-les fortement quand tu ne tires pas vers la couleur max : une deuxième meilleure couleur qui se fait payer perd bien plus qu'elle ne gagne. Si tu es certain de voir les deux cartes (un tapis), c'est le chiffre à deux cartes de 35,0 % qui s'applique.",
  },
  {
    q: "Comment utiliser le calculateur de cotes implicites ?",
    a: "Ouvre l'onglet « Cotes du pot » et active « Cotes implicites », puis saisis le montant supplémentaire que tu comptes gagner sur les streets suivantes quand tu touches. Le calculateur l'ajoute au pot et abaisse l'équité dont ton call a besoin maintenant. Reste honnête sur ce montant : il ne compte que si l'adversaire a vraiment cette somme derrière et qu'il paiera quand ton tirage rentrera.",
  },
  {
    q: "Comment savoir quelle main gagne au poker ?",
    a: "Dans le calculateur d'équité, saisis les deux cartes fermées de chacun et les cinq cartes du board : avec un board complet, il nomme le gagnant et la main gagnante, ou signale un partage. Pour évaluer une seule main, dépose 5 à 7 cartes dans l'évaluateur de main et il trouve automatiquement la meilleure combinaison de cinq cartes.",
  },
  {
    q: "Comment utiliser le calculateur ICM ?",
    a: "Saisis le nombre de joueurs, le tapis de chacun et la structure des gains (1re à 6e place). Le calculateur montre aussitôt ce que chaque tapis vaut réellement en argent, à côté de ce que paierait un chip chop. Pour une décision suivre / se coucher, lance-le deux fois — une fois avec les tapis que tu aurais après avoir gagné, une fois après avoir sauté — puis compare la moyenne de ces deux valeurs, pondérée par ta probabilité de gagner le coup, à ta valeur si tu te couches.",
  },
  {
    q: "Que veut dire la « Valeur ICM » affichée par ce calculateur ?",
    a: "Ta valeur réelle en gains : la part des gains restants que ton tapis peut espérer encaisser, compte tenu de la probabilité qu'a chaque joueur de finir à chaque place. Ce n'est pas ta part de jetons : dès que plus d'une place est payée, doubler tes jetons ne double jamais ta valeur ICM — c'est pour ça que la valeur ICM du chip leader passe sous sa part de jetons.",
  },
  {
    q: "Quand faut-il se servir du calculateur ICM ?",
    a: "Chaque fois que les gains sont fixés par la place d'arrivée et que l'argent est proche : à la bulle, en table finale, quand un deal est proposé, et dans les satellites où chaque siège paie la même chose. Ça ne s'applique pas au cash game, où un jeton vaut toujours sa valeur faciale.",
  },
  {
    q: "L'ICM, est-ce la même chose que l'EV en jetons ?",
    a: "Non. L'EV en jetons compte des jetons, l'ICM compte de l'argent. Un call peut être rentable en jetons et pourtant perdre de l'équité en gains, parce que sauter te coûte tous les paliers de paiement auxquels tu pouvais encore prétendre. C'est près de la bulle et en table finale que les deux divergent le plus — et c'est pourquoi les ranges ICM sont plus serrées que les ranges en EV jetons.",
  },
  {
    q: "Je suis chip leader — pourquoi ma valeur ICM est-elle inférieure à ma part de jetons ?",
    a: "Parce que gagner ne rapporte toujours que le prix de la 1re place, pas la totalité des gains, alors que sauter te coûte tous les paliers en dessous. Dans l'exemple de bulle ci-dessus, le leader détient 40 % des jetons mais seulement 33,3 % de l'argent, et le plus petit tapis vaut plus que sa part de jetons.",
  },
  {
    q: "Comment calculer un deal ICM en table finale ?",
    a: "Saisis les tapis actuels et les gains restants : la « Valeur ICM » de chaque joueur est le montant de départ du deal. En pratique, la table laisse en général une somme convenue au milieu — souvent l'écart entre la 1re et la 2e place — pour continuer à jouer, et le floor arrête l'horloge et vérifie que tous les joueurs restants sont d'accord avant qu'on paie quoi que ce soit.",
  },
  {
    q: "Quelle différence entre un chip chop et un deal ICM ?",
    a: "Un chip chop paie au prorata des jetons, un deal ICM selon la probabilité de chaque joueur de finir à chaque place — l'exemple détaillé ci-dessus montre l'écart ($276 contre $458 pour le plus petit tapis). Ce qu'une salle entend par chip chop varie : beaucoup paient d'abord à chacun le prochain gain à verser et ne partagent que le reste, ce qui tombe près de l'ICM. Demande donc toujours avant d'accepter l'un ou l'autre.",
  },
  {
    q: "Pourquoi faut-il se coucher davantage à la bulle ?",
    a: "À la bulle, l'argent que tu perds en sautant est plus grand que ce que tu gagnes en remportant le coup, comme le montre l'exemple de bulle ci-dessus : un call rentable en jetons peut être perdant en EV gains. Les tapis moyens — et les petits tapis qui ne sont pas sur le point d'être mangés par les blindes — doivent éviter les coin flips quand ils paient un tapis. Le revers, c'est que tout le monde se couche aussi : en tant qu'agresseur, ouvre et re-shove plus large même si tu paies plus serré.",
  },
  {
    q: "Peut-on utiliser un calculateur de poker à la table ?",
    a: "Pas en tournoi sous les règles TDA. La version 2024 des règles de la Poker Tournament Directors Association (règle 5) prévoit que les applications de mise, les tableaux et les autres outils de stratégie poker ne peuvent pas être utilisés à la table, et qu'un joueur ne peut ni recevoir ni utiliser de données de stratégie venant d'une autre personne ou d'une autre source ; tant que tu as une main en jeu, tu ne peux pas non plus manipuler un appareil électronique ou de communication ni interagir avec lui — et tout cela reste de toute façon soumis aux règles de la maison et aux exigences du régulateur. Ce calculateur sert donc à préparer avant, à refaire les comptes après, et à apprendre : à la table, ce qui compte c'est la règle du 2 et du 4 dans ta tête et les tableaux ci-dessus que tu as mémorisés.",
  },
];
