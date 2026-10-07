import type { Post } from "../posts";

/**
 * Série GTO ④ fr — 9♥8♥7♣ médian connecté bicolore (BTN vs BB, pot simplement relancé).
 * Source : EN lib/posts-en/donk-bet-strategy.ts (hash a54b5f3d) · brief docs/fr-lanes/gto-brief.md ④.
 * Mots-clés : donk bet poker (140) · donkbet poker · donk bet c'est quoi · lead poker.
 * Limites : première décision au flop seulement · sans rake · images -en en attendant les variantes -fr.
 * FAQ EN « What is a donk bet in poker? » promue en H2 (FAQ 7 → 6).
 */
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "Le flop où le donk bet est juste : 9-8-7",
  seoTitle: "Le board où le donk bet au poker est juste — lead sur 9-8-7",
  desc: "Au poker, le donk bet passe pour une erreur de débutant. Sur 9-8-7, le solver lead 23,7 % : voici la condition de board qui rend le lead correct, et le sizing.",
  tldr: "Sur 9♥8♥7♣, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 76,2 % et lead 23,7 % : le premier spot de cette série où le lead est une vraie stratégie et non un artefact d'arrondi. L'avantage de range n'a pas basculé, l'équité reste à 48,5 % contre 51,5 %. Ce qui a changé, c'est l'écart, et l'endroit où se trouvent les mains fortes de chaque côté.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-en.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop médian connecté bicolore : la grille de la grosse blinde mêle des checks verts et des mises orange et roses",
  tags: ["donk bet poker", "donkbet poker", "donk bet c'est quoi", "quand ne pas c-bet", "lead poker", "board connecté", "avantage de range"],
  content: `
L'une des premières règles qu'on apprend au poker : **checker vers le relanceur.** Le joueur qui a attaqué préflop a le droit de faire la première mise au flop.

Les trois spots précédents montraient cette règle dans sa version la plus docile. Sur les flops [hauteur As](/fr/blog/a-high-board-cbet), [hauteur Roi](/fr/blog/k-high-board-cbet) et [broadway](/fr/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp"), le lead de la grosse blinde restait sous les 2 % à chaque fois ; sur K-8-3 et Q-J-10, il était à 0,2 % ou moins, autrement dit nul.

Sur **9♥ 8♥ 7♣**, il est à **23,7 %**. C'est ici que la règle casse.

Une mise du joueur qui a seulement payé préflop, c'est un **donk bet** (ou lead). Les solvers l'intègrent à la stratégie sur certains boards précis, et celui-ci est le plus net de la sélection d'étude.

Tous les chiffres ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster, relevés sur le résultat du spot d'étude le 2026-08-19.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | 9♥ 8♥ 7♣ (bicolore : deux cœurs)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb
Résultat | La BB lead 23,7 % : le premier vrai lead de cette série
:::

> **Réponse rapide**
> Sur 9♥8♥7♣, la grosse blinde checke **76,2 %** et lead **23,7 %** sur deux sizings (valeurs arrondies). Mais **l'avantage de range n'a pas changé de camp** : l'équité reste à 48,5 % contre 51,5 % en faveur du bouton. Ce qui a changé, c'est la taille de l'écart, et l'endroit où se trouvent les mains fortes : la force de la grosse blinde est dans les quintes faites, celle du bouton dans des overpairs (surpaires) que ce board menace.

## Donk bet : c'est quoi au poker ?

Un donk bet, qu'on écrit parfois « donkbet », c'est une mise au flop du joueur qui n'a pas relancé préflop : il mise dans l'agresseur au lieu de checker vers lui. Le nom vient de « donkey », l'âne, c'est-à-dire de la façon dont le coup a longtemps été vu. Les solvers montrent qu'il est correct sur certaines textures de board, et sur ce flop il représente 23,7 % de la stratégie de la grosse blinde.

## Quelles conditions ont produit ces chiffres ?

Le bouton (BTN) ouvre à 2,5bb, la grosse blinde (BB) paye, tous les autres se couchent : deux joueurs, un pot de 5,5bb, 97,5bb derrière. Les ranges sont les approximations standard du jeu en ligne à 100bb, le flop est 9♥ 8♥ 7♣ avec deux cœurs, et le solver dispose de deux sizings, à environ un tiers et trois quarts du pot. Le rake n'est pas modélisé, et les chiffres ont été relevés le 2026-08-19.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu standard en ligne à 100bb |
| Flop | 9♥ 8♥ 7♣, bicolore (deux cœurs) |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb |
| Bet sizes | Environ 33 % et 75 % du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-19, résultat du spot d'étude |

## À quelle fréquence la grosse blinde fait-elle un donk bet sur 9-8-7 ?

**23,7 %**, et plus des deux tiers partent au petit sizing.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **76,2 %** | 352,0 |
| Bet 1,8bb (33 % du pot) | **16,8 %** | 77,8 |
| Bet 4,1bb (75 % du pot) | 6,9 % | 32,2 |

Mets les quatre flops côte à côte : le bond saute aux yeux.

| Flop | Lead de la BB |
|---|---|
| A-7-2 (sec) | 1,9 % |
| K-8-3 (sec) | 0,2 % |
| Q-J-10 (connecté, bicolore) | 0,1 % |
| **9-8-7 (médian connecté, bicolore)** | **23,7 %** |

**De moins de 2 % à 23,7 % : plus de dix fois plus.** Ce n'est pas « en glisser un de temps en temps » ; c'est une autre stratégie.

## Qu'est-ce qui a changé par rapport aux trois premiers flops ?

**Pour la première fois, la grosse blinde est devant dans une catégorie du haut.** Les quintes faites sont à 5,2 % contre 4,2 %.

Compte les combinaisons et la raison apparaît exactement. Trois mains font quinte ici : ==JT (J-10-9-8-7)==, ==T6 (10-9-8-7-6)== et ==65 (9-8-7-6-5)==.

| Main qui fait quinte | BB (range de call) | BTN (range d'ouverture) |
|---|---|---|
| JT | ✅ assortie et dépareillée (16 combos) | ✅ assortie et dépareillée (16 combos) |
| T6 | ✅ **T6s (4 combos)** | ❌ hors de la range d'ouverture |
| 65 | ✅ 65s (4 combos) | ✅ 65s (4 combos) |
| **Total** | **24 combos = 5,2 %** | **20 combos = 4,2 %** |

**Toute la différence, c'est T6s : quatre combos.** La range du bouton de ce solver commence à T7s, donc T6 assorti n'arrive jamais, alors que la grosse blinde le défend à bas prix parce que 1bb des 2,5bb est déjà posée. Cette seule case décide qui a le plus de **quintes faites**, et non qui a les nuts, ce qui est une autre question : la meilleure main ici est J-T, et les deux joueurs en ont les 16 combos.

Ça joue aussi dans l'autre sens. Les overpairs appartiennent au bouton.

| Overpair (paire servie au-dessus du 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 combos | ✅ 6 combos |
| JJ · QQ · KK · AA | ❌ toutes 3-betées préflop | ✅ 24 combos |
| **Total** | **6 combos = 1,3 %** | **30 combos = 6,4 %** |

## Alors, ce flop favorise-t-il la grosse blinde ?

**Non. L'équité reste à 48,5 % contre 51,5 %.** Ça mérite d'être dit clairement, parce que c'est la mauvaise conclusion la plus facile à tirer : l'apparition d'un lead ne veut pas dire que l'avantage de range a bougé.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board médian connecté bicolore](/images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · répartition par catégorie — les quintes penchent vers la grosse blinde, les overpairs et la hauteur As vers le bouton")

| Catégorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Quinte | **5,2 %** | 4,2 % |
| Set/Brelan (brelan servi) | 1,9 % | 1,9 % |
| Double paire | 2,8 % | 2,8 % |
| Overpair | 1,3 % | **6,4 %** |
| Top paire (9) | **13,6 %** | 12,7 % |
| Deuxième paire (8) | **8,4 %** | 7,6 % |
| Troisième paire ou moins | **6,5 %** | 6,4 % |
| Underpair | **6,5 %** | 6,4 % |
| Hauteur As | 24,2 % | **30,5 %** |
| Hauteur Roi | **13,9 %** | 11,9 % |
| Pas de main faite | **15,6 %** | 9,3 % |

(Les colonnes font 99,9 et 100,1 : c'est l'arrondi.)

**Seules deux lignes favorisent le bouton** : les overpairs, 6,4 % contre 1,3 %, et la hauteur As, 30,5 % contre 24,2 %. La double paire est à égalité parfaite à 2,8 %, les brelans servis à 1,9 %, et toutes les autres lignes appartiennent à la grosse blinde.

Les tirages doivent se lire en parallèle.

| Tirage | BB (OOP) | BTN (IP) |
|---|---|---|
| Tirage combo (quinte + couleur) | **4,5 %** | 3,6 % |
| Tirage couleur | **3,2 %** | 2,3 % |
| Tirage quinte bilatéral | **26,2 %** | 23,7 % |
| Tirage ventral (gutshot) | **21,6 %** | 20,6 % |
| Tirage couleur backdoor | 14,1 % | **17,6 %** |
| Aucun tirage | 30,3 % | **32,2 %** |

**En ne comptant que les vrais tirages, backdoors exclus, la grosse blinde en a 55,5 % contre 50,2 % pour le bouton.** Sur ce board, ce ne sont pas seulement les mains faites qui penchent de son côté ; les mains qui peuvent encore grandir aussi.

C'est toujours vrai une fois l'argent compté. La réalisation d'équité favorise encore le bouton, simplement moins que partout ailleurs jusqu'ici.

| Indicateur | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 48,5 % | 51,5 % |
| EV (bb) | 2,48 | 3,02 |
| **Réalisation d'équité (EQR)** | **93,2 %** | **106,4 %** |

Après 84,0 %, 80,7 % et 77,9 % sur les trois premiers flops, la réalisation d'équité de la grosse blinde **se retourne ici** : à 93,2 %, c'est là qu'elle s'approche le plus de conserver sa part entière. C'est le vrai signal : un lead apparaît quand le joueur hors de position (OOP) peut enfin garder ce que vaut son équité.

Deux choses ont changé pour que ça arrive.

**D'abord, l'écart s'est resserré.** Une différence d'équité de 3,0 points est la plus petite des quatre flops jusqu'ici : A-7-2 était à 9,8 points, Q-J-10 à 6,6.

**Ensuite, la force du bouton se trouve à des endroits vulnérables.** Les deux seules catégories où il mène sont les overpairs (6,4 %) et la hauteur As (30,5 %), et l'une des deux n'est pas de la force du tout. La plupart de cette hauteur As n'a pas de paire ici ; et quand elle a un tirage, la grosse blinde en a aussi, donc les tirages s'annulent au lieu de favoriser qui que ce soit. Les overpairs sont fragiles pour la raison de la section suivante. L'avantage de la grosse blinde, au contraire, est dans des mains **déjà faites**.

Un lead devient correct non pas grâce à la seule force moyenne, mais quand **tu as plus de mains parmi les plus fortes et que ton adversaire ne peut pas miser en confiance.** Les deux conditions semblent réunies ici : la grosse blinde a plus de quintes (24 combos contre 20, alors que la quinte max J-T fait 16 combos de chaque côté), et avec 30,5 % de sa range en hauteur As, le bouton aurait du mal à miser large. C'est une lecture tirée de la composition des ranges, puisque le nœud de mise du bouton n'est pas dans cette résolution. C'est cet espace laissé libre que prend le lead.

## Pourquoi les surpaires du bouton sont-elles vulnérables ?

**Parce que près de la moitié des cartes à venir rendent la turn (le tournant) pire pour elles.**

Disons que tu as QQ. Pour l'instant, tu es proche de la meilleure main. Sur les 47 cartes non vues :

- **10, J, 6, 5 : 16 cartes.** N'importe laquelle **complète une quinte** pour une seule carte dans la main de ton adversaire. Un valet fait le board J-9-8-7, et **quiconque tient un dix a déjà J-10-9-8-7.**
- **Les cœurs restants qui ne sont pas déjà comptés : 7 cartes.** La couleur rentre.

Au total, **23 cartes sur 47, environ 49 %** (⚠ pour une QQ sans cœur ; si tu tiens Q♥, l'un de ces sept cœurs est dans ta propre main, donc c'est 22 sur 47, environ 47 %). En gros, une turn sur deux rend la main plus difficile à jouer. Si compter ces outs depuis l'autre côté est le point que tu veux consolider, commence par les [probabilités des tirages](/fr/blog/holdem-drawing-odds).

Une overpair ici est donc une main pour **faire payer les tirages maintenant et lâcher prise face à une relance**, pas une main avec laquelle construire un énorme pot. Le pot à éviter, c'est celui qui se construit après une mauvaise turn, pas celui que tu construis au flop.

## Pourquoi le petit sizing représente-t-il deux tiers des leads ?

**Parce que le lead est une affirmation sur toute la range, pas sur une seule main.** Sur les 23,7 %, 16,8 points partent à un tiers du pot et 6,9 à trois quarts.

Une petite mise dit : « toute ma range aime ce flop. » Si seules les mains fortes misent, la range se scinde en « mise = fort, check = faible » et ton adversaire la lit gratuitement. Mélanger quintes, top paires et tirages dans un seul petit sizing les rend impossibles à distinguer.

Le gros sizing existe quand même pour une raison. Si chaque quinte partait dans la petite mise, le bouton pourrait tout payer sans jamais affronter un gros pot. **Utiliser deux sizings, c'est ce qui ne laisse ni le call ni la relance confortables.**

## Quand ne pas c-bet ? L'exception 9-8-7

**Sur ce flop, en tant que relanceur préflop**, que la grosse blinde lead ou checke. C'est le board le plus net de la sélection d'étude pour savoir quand ne pas faire de c-bet (mise de continuation), et la raison n'est pas la texture mais l'allure de ta propre range dessus. La façon dont ce jugement se généralise selon les types de board est dans [la stratégie du c-bet](/fr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

La raison, c'est la composition des ranges. La hauteur As fait 30,5 % de la range du bouton, la hauteur Roi 11,9 %, pas de main faite 9,3 % : 51,7 % sans paire. ⚠ **Mais « sans paire » n'est pas la raison à lui seul.** Additionne la colonne de la grosse blinde de la même façon et tu obtiens **53,7 %** : la grosse blinde a *plus* de sa range sans paire, de 2,0 points, et c'est elle qui lead 23,7 % du temps. Ce qui arrête vraiment le bouton, c'est **ce qui est resté dans la range de check** : 76,2 % des mains de la grosse blinde y sont encore, dont des quintes et 13,6 % de top paire, donc miser large se heurte à un **check-raise**. ⚠ Une partie de ces 24 combos de quinte lead au lieu de checker, donc ils ne sont pas tous dans la range de check ; et la *fréquence* de check-raise, ce calcul ne la contient pas.

Les hautes cartes **dépareillées** ratées comme AKo et AQo se checkent derrière en standard : elles ont une valeur d'abattage (showdown), et quand une relance arrive tu n'as rien pour continuer. Les versions assorties sont une autre main : A♥K♥ et A♥Q♥ sont ici des tirages couleur max, et elles misent.

:::note[Le spot d'étude ne précalcule que la première action du flop, celle de la grosse blinde. De combien la fréquence de c-bet du bouton baisse réellement après un check, cet écran ne le montre pas. Ouvre « Calcule ce spot toi-même » et lance l'arbre pour le voir.]:::

## Qu'est-ce que ça change à la table ?

- **Les leads se trouvent sur les boards médians connectés après une ouverture large en position tardive.** Le board monotone du spot suivant en a aussi environ 11 %, alors que les flops secs hauteur As et hauteur Roi sont pratiquement à zéro. ⚠ Cela dit, le seul board médian connecté que cette série résout vraiment est 9-8-7, et la condition n'est pas la texture seule mais **quelle range a le plus de mains parmi les plus fortes dessus.** La preuve est dans la série : le [flop 6-5-2](/fr/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") est le même pot simplement relancé bouton contre grosse blinde, et la grosse blinde n'y lead que **3,2 %**, parce que la seule main qui fait quinte est 4-3 et qu'aucune des deux ranges ne l'a. Bas et connecté, à lui seul, ne produit pas de lead.
- **Tu checkes quand même les trois quarts du temps.** Quand tu fais un lead : petit, et avec plus que tes meilleures mains. Une range qui ne lead que les quintes se lit immédiatement, donc les top paires et les tirages vont dans le même sizing. Garde quand même le total en vue : **le lead entier fait 23,7 %, dont 16,8 au petit sizing.** Transformé en « lead tous les tirages », il devient la moitié de la range et inverse la stratégie. Les 76,2 % restants checkent.
- **Au bouton, résiste au c-bet sur cette texture.** Plus de la moitié de ta range n'a pas de paire, et les overpairs veulent un pot contrôlé plutôt qu'un gros pot.
- **Face à un adversaire qui c-bet beaucoup trop souvent, checker peut valoir plus que faire un lead**, et faire un check-**raise**, plutôt que seulement check-call, avec les quintes et les top paires. Le laisser miser tes mains fortes à ta place vaut plus que prendre l'initiative, mais seulement si tu le fais payer ensuite.
- **Lis-le aussi dans l'autre sens.** Face à un joueur qui checke derrière sur les boards humides, le lead vaut plus que ce que suggère le chiffre du solver : checker là, c'est simplement perdre la street.

:::readnext[À lire ensuite]
/fr/blog/broadway-board-strategy | Deux tiers de la range ont un tirage, et elle checke quand même | /images/gto-srp-broadway-oop-en.webp
/fr/blog/k-high-board-cbet | Le flop hauteur Roi où le caller checke 99,8 % | /images/gto-srp-dry-king-oop-en.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → Board médian connecté, bicolore → [⚡ Voir les résultats]**.

La meilleure façon d'étudier celui-ci, c'est **côte à côte avec un board sec.** Ouvre d'abord « Board sec K-high » et regarde une grille couverte d'un seul vert, puis reviens ici et regarde l'orange et le rose y apparaître. Mêmes joueurs, mêmes ranges : trois cartes ont changé la stratégie.

Ouvre ensuite le **Trainer GTO** dans la barre latérale et laisse-le te distribuer le lead que tu viens de lire : il te donne une main au hasard selon les vrais poids de la range et te dit en grosses blindes ce qu'un mauvais choix t'a coûté. Gratuit, rien à installer, sans compte.

## FAQ

**Q. Pourquoi dit-on que le donk bet est mauvais ?**

A. Parce que sur la plupart des boards, il l'est. Dans cette série, les flops hauteur As, hauteur Roi et broadway avaient tous un lead de la grosse blinde sous les 2 %, car le relanceur préflop touche mieux ces cartes. L'exception, c'est un board où **le caller a plus de mains parmi les toutes meilleures**, et 9-8-7 en est l'exemple le plus net.

**Q. La grosse blinde a-t-elle l'avantage sur 9-8-7 ?**

A. Non. L'équité est de 48,5 % contre 51,5 % et la réalisation d'équité de 93,2 % contre 106,4 %, les deux en faveur du bouton. Le lead apparaît parce que la grosse blinde a plus de quintes faites alors que la force du bouton est concentrée dans des overpairs que ce board menace, et non parce que la grosse blinde serait devant globalement.

**Q. Quand checker plutôt que lead au poker ?**

A. Les trois quarts du temps, même sur ce flop : 76,2 % de la range de la grosse blinde checke. Checke quand ta range n'a pas plus de mains faites, ce qui est le cas de tous les boards secs hauteur As ou hauteur Roi, et checke quand ton adversaire mise de toute façon trop souvent : le laisser miser vaut plus que lui prendre l'initiative. Le lead est l'exception, pas une amélioration.

**Q. Et si je lead et que je me fais relancer ?**

A. Prévois-le avant de miser, parce qu'un lead au tiers du pot invite les relances. Les quintes et les tirages quinte bilatéraux continuent : tu as l'équité pour jouer un gros pot. La top paire avec un neuf, c'est un call, une fois, et elle lâche généralement prise sur une mauvaise turn. Les mains sans paire ni tirage doivent se coucher plutôt que « voir ce qu'il a » : c'est exactement la partie de ta range que vise la relance.

**Q. Quel sizing pour mon lead ?**

A. Surtout petit. Le solver met 16,8 des 23,7 points dans une mise au tiers du pot et 6,9 à trois quarts. Le petit sizing est le choix par défaut parce que le but est de mettre la pression avec toute la range ; le gros existe pour que ton adversaire ne puisse pas simplement tout payer.

**Q. Ces fréquences de lead tiennent-elles à ma limite ?**

A. La condition de board, oui ; les 23,7 % exacts ne se transposent pas tels quels. Ils supposent un heads-up, 100bb, une ouverture du bouton à 2,5bb et des ranges de défense standard, sans rake. Une ouverture plus grosse en live change le pot et le SPR (stack-to-pot ratio), et une grosse blinde qui défend bien plus large que le modèle a encore plus de quintes, ce qui rend le lead plus fort, pas plus faible.
`.trim(),
};

export default POST;
