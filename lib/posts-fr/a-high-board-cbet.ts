import type { Post } from "../posts";

/**
 * fr ① a-high-board-cbet — EN 마스터 lib/posts-en/a-high-board-cbet.ts 재저작 (2026-10-07 · fr-gto 레인 B)
 * 출처: EN 본문 축어(수치·카드) · 확정 카피 = docs/fr-lanes/gto-brief.md ① 절.
 * 키워드: avantage de range poker · board sec poker(산문·태그만) · c-bet는 «sur un board sec hauteur As» 한정.
 * 한계: 이미지는 EN 경로(-en.webp) 그대로 — fr 캡처 생성 후 일괄 교체 대기.
 * GTO 시리즈 예외: 지어낸 경험담 없음(솔버 증거 자료).
 */
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "Top paire, et pourtant check : le c-bet sur A-7-2",
  seoTitle: "Top paire floppée, le solver checke — c-bet sur board sec",
  desc: "Top paire floppée sur A-7-2, tu veux miser. Le solver checke 98,2 % de la range de la grosse blinde : les fréquences exactes, et ce n'est pas l'équité.",
  tldr: "Sur A♥7♦2♣, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 98,2 % de sa range, top paire, double paire et brelans servis compris. L'équité est presque à égalité, 45,1 % contre 54,9 % ; ce qui sépare les deux sièges, c'est la réalisation d'équité (EQR) : 84,0 % hors de position contre 113,1 % en position.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-fr.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop sec hauteur As A-7-2 : la grille 13x13 de la grosse blinde presque entièrement verte pour le check",
  tags: ["pourcentage de c-bet", "quand c-bet", "board sec poker", "avantage de range", "avantage de range poker", "board sec a-high", "réalisation d'équité"],
  content: `
Le flop tombe **A♥ 7♦ 2♣**, rainbow. Tu es en grosse blinde (BB) avec A9 — top paire. Miser en premier paraît évident. Ça ne l'est pas.

Chaque chiffre ci-dessous vient du [solver poker gratuit](/fr/solver) de HoldemMaster, relevé sur le résultat du spot d'étude le 2026-08-19, et tu peux afficher le même écran en un seul clic.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | A♥ 7♦ 2♣ (rainbow)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb
Résultat | La BB checke 98,2 % — en pratique, toute la range checke
:::

> **Réponse rapide**
> Checke, et prévois de continuer. Quand une range prend une seule action avec pratiquement tout — mains fortes comprises (les mises des deux sizings ne totalisent que 1,9 %) — c'est un **check de range**, et c'est ce que fait la grosse blinde ici. Checker, ce n'est pas abandonner le pot : ça garde les bluffs du bouton dans le coup, et top paire reste une main avec laquelle tu continues quand le c-bet (mise de continuation) arrive.

## Quelles conditions ont produit ces chiffres ?

Le bouton ouvre à 2,5bb, la grosse blinde paye, et tous les autres se couchent — deux joueurs voient donc un pot de 5,5bb avec 97,5bb derrière. Les deux ranges sont les approximations standard du jeu en ligne à 100bb, le flop est A♥ 7♦ 2♣ rainbow, et le solver dispose de deux sizings, environ un tiers et trois quarts du pot. Le rake n'est pas modélisé. Change l'un de ces paramètres et les fréquences changent avec lui.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu en ligne standard à 100bb |
| Flop | A♥ 7♦ 2♣, rainbow |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb |
| Bet sizes | Environ 33 % et 75 % du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-19, résultat du spot d'étude |

Le pot fait 5,5bb parce qu'à l'ouverture de 2,5bb du bouton et au call de 2,5bb de la grosse blinde s'ajoutent les 0,5bb de la petite blinde couchée. Tout ce qui s'affiche à l'écran est en grosses blindes — les mises se lisent « Bet 1,8bb (33 % du pot) », l'espérance de valeur « EV (bb) ».

## Quel est un bon pourcentage de c-bet sur un board sec hauteur As ?

Tout dépend du siège où tu es assis. Pour le relanceur préflop sur un board aussi sec, environ **70 %–100 % avec un petit sizing** en heads-up, en position — le guide de la [mise de continuation](/fr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") le détaille par type de board. Pour le joueur qui a payé, la réponse est **pratiquement zéro**.

À proprement parler, le caller n'a pas de c-bet du tout — le terme désigne la mise au flop du relanceur préflop, donc la version de la grosse blinde est un **lead** (donk bet). Mais c'est le chiffre que tu cherches quand tu te retrouves de ce côté de la main, et le voici :

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **98,2 %** | 455,5 |
| Bet 1,8bb (33 % du pot) | 1,0 % | 4,5 |
| Bet 4,1bb (75 % du pot) | 0,9 % | 3,9 |

Sur 464 combos, environ huit combos misent — 1,9 % sur les deux sizings, arrondi. En pratique, tu peux arrondir : **la grosse blinde ne fait pas de lead sur ce board.**

## Pourquoi la grosse blinde checke-t-elle aussi top paire ?

Parce que le pot se gagne plus facilement en checkant qu'en ouvrant les mises. Miser en premier avec une paire, hors de position, contre le joueur qui a pris l'initiative préflop, c'est la façon coûteuse de jouer une main avec laquelle tu es content d'aller à l'abattage.

Trois choses jouent contre un lead. D'abord, la **réalisation d'équité** : les chiffres plus bas montrent que la grosse blinde encaisse 84,0 % de son équité et le bouton 113,1 %. Construire un plus gros pot hors de position rend cet écart plus coûteux, pas moins. Ensuite, le bouton c-bet généralement beaucoup sur un flop comme celui-ci (une fréquence que ce calcul ne donne pas) — **checker garde ses bluffs dans le pot**, alors que miser en premier les laisse se coucher sans rien gagner. Enfin, la range de la grosse blinde est plafonnée : sans AA, AK ni AQ, un lead invite des relances des As forts, et la majeure partie de la range de la grosse blinde ne peut pas continuer face à elles — seuls 24 combos supportent une relance (les brelans servis 77 et 22, les doubles paires A7 et A2). (Aucun nœud de relance n'est résolu ici.)

Ce qu'un lead ne fait **pas**, c'est faire coucher de meilleures mains. La range d'ouverture du bouton garde tous les As jusqu'à A2, plus des underpairs et des 7, donc beaucoup de mains moins bonnes paieraient — ce n'est pas le problème. Le problème, c'est le pot que tu construis pour le gagner.

Autre point : « un As » n'est pas un seul type de main. A9 perd au kicker contre AK, AQ, AJ et AT, tandis qu'A7 et A2 ne sont pas du tout top paire — sur ce board, A7 se joue comme ==A-A-7-7-2==, une double paire. Un check de range les cache tous derrière une seule action, et ton adversaire ne peut pas les trier.

**Et les mains qui misent ne sont pas celles que tu devinerais.** Ouvre le tableau détaillé : les As les plus forts que la grosse blinde peut avoir tentent un coup de temps en temps — A♣J♣ mise le petit sizing 14,5 % du temps, A♦J♦ 12,2 %, A♠J♠ 7,1 %, A♠10♠ 4,5 %. De petites fréquences, mais elles viennent du haut de la range plutôt que du vide — c'est pourquoi le check n'est pas un abandon pur.

## C'est quoi un board sec, et pourquoi celui-ci favorise-t-il le relanceur ?

Un board sec est un board sans tirage couleur et presque sans tirage quinte — trois cartes non connectées de trois couleurs différentes, comme A♥ 7♦ 2♣. Presque rien n'est en tirage : **71,3 % de la range de la grosse blinde n'a aucun tirage**, et l'essentiel du reste est un tirage couleur backdoor. Il favorise le relanceur parce que la range d'ouverture du bouton garde AK et AQ alors que la range de call de la grosse blinde s'arrête à AJ — les As sont empilés d'un seul côté, et il n'y a pas de tirages pour rééquilibrer plus tard.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board sec hauteur As, barres vertes et dorées côte à côte](/images/gto-srp-dry-ace-ranges-fr.webp "A♥7♦2♣ · répartition par catégorie — le bouton a plus de top paires, la grosse blinde plus de mains vides")

Hors de position (OOP), c'est la grosse blinde, qui parle en premier ; en position (IP), c'est le bouton.

| Catégorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Brelan — ici toujours un brelan servi | 1,3 % | **1,9 %** |
| Double Paire | 3,9 % | 3,9 % |
| Top paire | 20,7 % | **25,9 %** |
| Deuxième paire | 5,2 % | 5,2 % |
| Paire faible | 1,3 % | 0,0 % |
| Underpair | 9,1 % | **13,0 %** |
| Hauteur Roi | **17,2 %** | 16,4 % |
| Pas de main faite | **41,4 %** | 33,7 % |

L'écart vient de ce que chaque range a le droit de contenir. Le bouton ouvre tous les As — de A2 à AK. La range de call de la grosse blinde **s'arrête à AJ** : pas d'AA, pas d'AK, pas d'AQ, parce que ces mains 3-bettent à la place. Même As au board, et top paire tombe quand même 5,2 points plus souvent du côté du bouton, avec les As les plus forts entièrement d'un seul côté de la table.

Les brelans servis racontent la même histoire en nombre de mains. Les paires servies qui touchent un brelan ici sont AA, 77 et 22, et **la grosse blinde n'a que 77 et 22** — trois combos chacune, six sur 464, soit le 1,3 % affiché à l'écran. Le bouton garde les trois paires : neuf combos, 1,9 %. L'arithmétique colle exactement au solver.

## L'avantage de range, ça veut dire quoi si l'équité est presque égale ?

L'avantage de range signifie que toute la range d'un joueur colle mieux au board que celle de l'autre. Sur A♥ 7♦ 2♣, il se voit à peine dans l'équité brute — 45,1 % contre 54,9 %, un écart de 9,8 points que personne n'appellerait un désastre. Il se voit dans ce que chaque camp parvient à encaisser de cette équité, et là, les deux sièges sont loin l'un de l'autre.

| Indicateur | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 45,1 % | 54,9 % |
| EV (bb) | 2,09 | 3,41 |
| **Réalisation d'équité (EQR)** | **84,0 %** | **113,1 %** |

La réalisation d'équité, c'est la part de ton équité que tu encaisses réellement. L'équité de la grosse blinde vaut ==5,5 × 45,1 % = 2,48bb==, mais son espérance de valeur (EV) est de 2,09bb — elle perd environ un sixième de ce qu'elle « possède ». Les 113,1 % du bouton signifient qu'il encaisse **plus que sa part**, parce qu'il parle en dernier et que sa range est assez forte pour mettre la pression. (Les valeurs à l'écran sont arrondies, donc recalculer l'EQR à la main tombe à 0,3 point près du chiffre affiché.)

La position et l'avantage de range se cumulent ici : le bouton reçoit la plus grosse part **et** le meilleur taux de conversion. Le principe général est dans le [guide de l'équité](/fr/blog/holdem-equity), et pourquoi le siège lui-même vaut autant est expliqué dans [jouer en position](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Quand le bouton doit-il c-bet un flop sec hauteur As ?

Presque toujours, petit — **contre des adversaires qui se couchent.** La grosse blinde a 41,4 % de pas de main faite et 71,3 % sans tirage, donc les folds viennent facilement et les mains qui restent s'améliorent rarement. C'est le cas d'école du petit sizing, et c'est pourquoi la mise de 33 % (1,8bb) est celle à choisir ici.

Contre une table qui paie n'importe quoi, « tout miser petit » cesse d'être gratuit : rien ne se couche, et tu construis des pots avec des mains qui n'en veulent pas. Là, l'ajustement, c'est moins de tentatives et plus de value.

La règle empirique se généralise avec une condition : **le camp qui a l'avantage de range — sans avantage de nuts net — mise petit et souvent.** Sur les boards où un joueur détient aussi les nuts, le sizing monte au contraire. Comment ça change selon le type de board est expliqué dans [la stratégie de c-bet](/fr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[Le spot d'étude ne précalcule que la première action du flop, donc la fréquence exacte de c-bet du bouton ne fait pas partie des chiffres de cette page. Pour l'obtenir, ouvre « Calcule ce spot toi-même » et déroule l'arbre.]:::

## Qu'est-ce que ça change à la table ?

- **Après avoir payé une relance en heads-up, oublie l'idée de faire un lead sur un flop sec hauteur As.** Top paire comprise. Le lead construit un pot que tu dois ensuite jouer hors de position avec une paire — exactement l'écart de 84 % contre 113 % vu plus haut. (Les pots limpés et le blind contre blind ont une autre structure et ne relèvent pas de ce spot.)
- **Checker, ce n'est pas check-folder.** C'est là que le chiffre est mal lu. Face au petit c-bet du bouton, la grosse blinde continue très large — tous les As, la plupart des 7, les underpairs, les hauteurs Roi avec un backdoor. **A9 est un check-call**, généralement aussi à la turn (le tournant). Les candidats naturels au check-raise sont 77, 22, A7 et A2, plus quelques bluffs backdoor — mais ce calcul ne couvre pas la réponse de la grosse blinde au c-bet.
- **Au bouton, mise petit et large contre des adversaires qui se couchent.** Contre un joueur qui ne se couche jamais, ajuste dans deux directions : moins de bluffs, parce qu'il ne se couchera pas quoi que tu mises — surtout à la turn et à la river (la rivière), où les deuxième et troisième barrels sont de la perte pure — et des mises de value plus grosses avec **top paire ou mieux**. A9 avec son kicker faible n'est pas une main pour grossir le sizing ; c'est une main avec laquelle tu ne mises simplement pas sur trois streets.
- **Contre un adversaire équilibré, un check ici n'est pas une faiblesse** — la range de check contient des brelans servis (77, 22) et des doubles paires (A7, A2), donc pousser trop fort se heurte à un check-raise. Aux petites limites, c'est souvent l'inverse : beaucoup de joueurs font simplement un lead avec leurs mains fortes, donc leur check est vraiment faible. Continue à miser pour la value ; traite le check-raise comme un coût occasionnel, pas comme une raison de ralentir.

:::readnext[À lire ensuite]
/fr/blog/holdem-continuation-bet | Pourquoi « c-bet à chaque flop » te fait perdre des jetons | /images/holdem-continuation-bet-hero.webp
/fr/blog/holdem-position-play | La position, l'avantage le moins cher du poker | /images/holdem-position-play-hero.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → Board sec A-high → [⚡ Voir les résultats]**, et cet écran précis s'affiche sans attente. Bascule le sélecteur « Joueur » entre OOP et IP pour comparer les deux ranges, et trie le tableau détaillé par n'importe quelle colonne pour trouver les mains qui misent. Les spots d'étude ne précalculent **que la première action du flop** — pour cliquer jusqu'à la turn et la river, ou pour modifier une range et voir bouger les fréquences, utilise « **Calcule ce spot toi-même** » et déroule l'arbre.

Pour t'entraîner sur ce même spot au lieu de le lire, ouvre le **Trainer GTO** dans la barre latérale : il te distribue une main tirée de la vraie range, tu choisis une action, et il te montre combien de grosses blindes ce choix te coûte. C'est gratuit, sans rien à installer et sans compte.

## FAQ

**Q. A7, c'est top paire sur A-7-2 ?**

A. Non. Le board paire ton 7, donc A7 fait ==A-A-7-7-2== — double paire. Une vraie top paire, c'est un As avec un kicker qui ne touche pas le board, comme A9 ou A8. La double paire (A7 et A2) représente 18 combos, 3,9 % de la range de la grosse blinde, et ces mains checkent aussi.

**Q. 98,2 % de check, ça veut dire que je ne dois jamais miser ?**

A. Par défaut, oui, sur cette texture. Contre un adversaire qui ne c-bet presque jamais, tu peux glisser un lead — mais **uniquement avec des mains de value**. Top paire et les 7 construisent un pot que ce joueur ne construira jamais pour toi, alors que tes mains vides doivent quand même checker, parce qu'un adversaire passif te donne des cartes gratuites et des abattages gratuits qui valent plus que le bluff.

**Q. Quelle différence entre un board sec et un board humide ?**

A. Un board sec n'a pas de tirage couleur et peu de tirages quinte, donc le flop a peu de chances de changer le classement des mains aux streets suivantes. Un board humide — des cartes connectées et bicolores comme 9-8-7 avec deux cœurs — donne des tirages aux deux joueurs. Les ranges restent larges et les équités continuent de bouger, donc les mises grossissent et les check-raises deviennent plus fréquents.

**Q. La réalisation d'équité peut-elle dépasser 100 % ?**

A. Oui. C'est le rapport entre ce que tu gagnes réellement et ta part du pot selon l'équité, donc la position et la force de la range la poussent au-delà de 100 %. Ici, le bouton réalise 113,1 %, et encaisse plus que ne le laisserait penser son équité brute de 54,9 %.

**Q. Ces chiffres tiennent-ils à toutes les limites ?**

A. Utilise-les comme base quand les conditions correspondent : heads-up, 100bb, ranges standard d'ouverture et de call, sans rake. Change la profondeur de stack, les ranges ou le sizing et les fréquences bougent. Contre des adversaires qui dévient fortement — qui ne se couchent jamais, qui ne c-bet jamais — dévie aussi, parce que ces chiffres supposent que l'autre joueur joue bien lui aussi.
`.trim(),
};

export default POST;
