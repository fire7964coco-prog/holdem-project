import type { Post } from "../posts";

/**
 * Série GTO ⑤ fr — Q♠9♠2♠ monotone (BTN vs BB, pot simplement relancé).
 * Source : EN lib/posts-en/monotone-board-strategy.ts (hash a54b5f3d) · brief docs/fr-lanes/gto-brief.md ⑤.
 * Mots-clés : flop monotone · board monotone poker (10) · monotone flop odds · sizing poker.
 * Limites : première décision au flop seulement · sans rake · images -en en attendant les variantes -fr.
 * Le bloc bloqueurs suit la conclusion EN actuelle (mélange d'options presque équivalentes, pas une règle de bloqueurs).
 */
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "La couleur max qui checke sept fois sur dix",
  seoTitle: "La couleur max checke 70 % du temps — flop monotone poker",
  desc: "Sur un flop monotone, la grosse mise tombe à 3,2 %. Même la couleur max checke 69,9 % en moyenne. Pourquoi le sizing s'effondre sur trois cartes assorties.",
  tldr: "Sur Q♠9♠2♠, où les trois cartes du flop sont de la même enseigne, la grosse blinde checke 88,8 %, mise petit 8,0 % et mise gros seulement 3,2 %. Le gros sizing disparaît presque parce que les nuts sont figés : une couleur faite se fait payer par les petites mises de toute façon, et plus tu mises gros sans couleur, plus ceux qui te paient se réduisent à des couleurs. Même la couleur max checke 69,9 % en moyenne, et les couleurs non max checkent davantage, 81,4 %.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-fr.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop monotone à pique : la grille de la grosse blinde est surtout verte pour le check, avec quelques petites mises mêlées",
  tags: ["flop monotone", "board monotone poker", "comment jouer un flop monotone", "couleur max", "sizing poker", "board monochrome", "cotes implicites inversées"],
  content: `
Le flop est **Q♠ 9♠ 2♠** : trois cartes, une seule enseigne. Tu regardes ta main : A♠J♠. C'est la **couleur max** (nut flush), déjà faite, dès le flop.

Alors, combien tu mises ? L'instinct dit de construire le pot. Le solver checke cette main **83,4 % du temps.**

Le flop monotone est la texture qui déroute le plus, parce que les mains faites comme les mains vides s'y comportent autrement que d'habitude. Tous les chiffres ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | Q♠ 9♠ 2♠ (monotone : trois cartes de la même enseigne)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb
Résultat | Grosse mise 3,2 % : le sizing s'effondre
:::

> **Réponse rapide**
> Mise petit ou checke, presque jamais gros. Sur Q♠9♠2♠, la grosse blinde (BB) checke **88,8 %**, mise un tiers du pot **8,0 %** et trois quarts seulement **3,2 %**. Les nuts sont verrouillés sur un seul type de main : une couleur faite se fait déjà payer par une petite mise, et plus tu mises gros sans couleur, plus ceux qui te paient se réduisent à des couleurs. C'est ce qui chasse le gros sizing de la stratégie, pour les deux joueurs.

## Board monotone au poker : c'est quoi ?

**Un flop où les trois cartes sont de la même enseigne**, qu'on appelle aussi board « monocolore » : ici Q♠ 9♠ 2♠, donc deux piques dans la main d'un joueur font déjà une couleur. C'est la plus rare des textures courantes et celle qui change le plus la valeur des mains, parce qu'une seule carte assortie peut valoir plus qu'une paire.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu standard en ligne à 100bb |
| Flop | Q♠ 9♠ 2♠, monotone (trois piques) |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb |
| Bet sizes | Environ 33 % et 75 % du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-20, résultat du spot d'étude |

## Comment la grosse blinde joue-t-elle un flop monotone ?

**Check 88,8 %, lead (donk bet) 11,2 %.** C'est moins de lead que sur le [board connecté 9-8-7](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-fr.webp") à 23,7 %, mais bien plus que sur les flops secs, où il tombait à 1,9 % sur A-7-2 et 0,2 % sur K-8-3.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **88,8 %** | 415,7 |
| Bet 1,8bb (33 % du pot) | 8,0 % | 37,4 |
| Bet 4,1bb (75 % du pot) | **3,2 %** | 14,9 |

Le plus intéressant n'est pas la répartition à l'intérieur du lead : c'est que **toute l'attaque a rétréci.** La part de la grosse mise dans la range qui lead est de 29 %, presque exactement ce qu'elle était sur 9-8-7 (6,9 sur 23,7). Ce qui a changé, c'est le total : le lead est passé de 23,7 % à 11,2 %, et la grosse mise de 6,9 % à 3,2 %, les deux à peu près divisés par deux.

Aucun des deux camps n'est donc servi par le gros sizing, et un seul l'est par le petit ; c'est pour ça que toute la stratégie s'effondre vers « petit, ou check ». Ce n'est pas « la grosse mise a été retirée » : c'est **la grosse blinde qui mise moins au total**, et la raison se voit le plus clairement dans le comportement des couleurs faites.

## Pourquoi la grosse mise disparaît-elle sur un flop monotone ?

**Parce que les nuts sont figés.** Q, 9 et 2 ne sont pas connectés, donc aucune quinte flush n'est possible sur ce flop. La meilleure main est verrouillée : **celui qui tient l'A♠ avec un deuxième pique** (l'A♠ seul ne fait que quatre cartes à couleur). Une seule carte décide du sommet des deux ranges.

Dès que c'est vrai, les grosses mises ne rapportent plus à personne.

:::compare
Si tu as couleur | Si tu n'as pas couleur
Une grosse mise fait coucher la plupart des mains sans couleur | Une grosse mise se fait payer surtout par des couleurs et des tirages à pique
Une petite mise garde les paires simples dans le coup | Une petite mise coûte peu, mais une paire simple ne se couche pas dessus
:::

**Un camp est servi par le petit sizing ; l'autre n'est servi par aucun.** La stratégie s'effondre donc vers « petit ou check » pour tout le monde. C'est le board le plus net de la série pour le principe selon lequel le sizing se décide par **ce que ton adversaire peut payer**, et non par ta propre force.

## Pourquoi la couleur max checke-t-elle ?

**Parce que presque rien ne peut payer.** Fais défiler le tableau par main du solver jusqu'en bas et sors les huit combos de couleur max, toutes les mains avec l'A♠ que la grosse blinde peut réellement avoir :

| Main | Équité | Check | Bet 1,8bb | Bet 4,1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97,7 % | **83,4 %** | 14,3 % | 2,2 % | 229,9 % |
| A♠10♠ | 97,7 % | **84,2 %** | 14,5 % | 1,2 % | 232,3 % |
| A♠8♠ | 97,7 % | **79,1 %** | 17,4 % | 3,5 % | 232,6 % |
| A♠7♠ | 97,6 % | **56,0 %** | 20,6 % | 23,4 % | 231,3 % |
| A♠6♠ | 97,6 % | **60,2 %** | 22,0 % | 17,9 % | 232,6 % |
| A♠5♠ | 97,6 % | **64,1 %** | 20,2 % | 15,7 % | 233,6 % |
| A♠4♠ | 97,6 % | **52,7 %** | 24,1 % | 23,2 % | 237,3 % |
| A♠3♠ | 97,6 % | **79,7 %** | 0,0 % | 20,3 % | 240,6 % |

**La moyenne est de 69,9 % de check.** Une main à 97,6 % d'équité, qui ne peut pratiquement pas perdre, checke sept fois sur dix.

Pourquoi seulement huit combos ? Trois des as assortis sont impossibles, parce que **Q♠, 9♠ et 2♠ sont déjà sur le board.** Sur les neuf qui restent, A♠K♠ est 3-betée préflop et n'arrive jamais, ce qui en laisse huit.

La raison de checker n'est pas ce que tu gagnes maintenant mais ce que tu gagnes au total. Mise gros et la plupart des paires simples et des hautes cartes se couchent ; une main avec un pique peut suivre, mais face à une couleur max faite elle ne peut jamais faire une couleur supérieure et a besoin d'un runner-runner, comme un full, pour gagner. Dans les deux cas, l'argent que tu allais encaisser plus tard s'arrête. Checke, et ton adversaire mise sa propre paire ou bluffe face à ta main : de l'argent que tu peux continuer à encaisser à la turn (le tournant) et à la river (la rivière).

Les chiffres le disent clairement : **EQR 230 %**, plus de deux fois la part du pot. Le pot fait 5,5bb et A♠J♠ a une espérance de valeur de ==12,36bb==. Ce qui reste à venir vaut plus que ce qui est déjà là.

Les bloqueurs apparaissent dans le même tableau. **A♠J♠ et A♠10♠ checkent plus de 80 %, alors que A♠7♠ à A♠4♠ tombent à 52 %–64 % et misent bien plus.** Tenir le J♠ ou le 10♠ bloque les **couleurs non max qui contiennent ces cartes**. ⚠ Une « couleur hauteur valet » n'existe pas sur ce board : la Q♠ y est déjà, donc toute couleur faite est au moins hauteur dame, et la deuxième meilleure couleur est hauteur Roi. Ce que le J♠ ou le 10♠ retire, c'est la **place de kicker** de ces couleurs (K♠J♠, J♠10♠ et consorts). Mais les bloqueurs n'expliquent pas la répartition à eux seuls. Compte les 18 couleurs non max du bouton : le J♠ et le 10♠ en retirent 4 chacun, alors que le 7♠ en retire 6, le 8♠ et le 6♠ 5 chacun, le 5♠ 4 et le 4♠ seulement 2 ; et A♠7♠, le plus gros bloqueur du lot, mise encore 44,0 % du temps, juste derrière A♠4♠ (47,3 %), qui n'en bloque que 2. Seul le 3♠ n'en bloque aucune, et A♠3♠ checke 79,7 %. Pour chaque combo de couleur max, les trois actions sont à moins de 0,05bb l'une de l'autre : lis donc la colonne comme un mélange entre des options presque équivalentes, pas comme une règle de bloqueurs.

## Les couleurs non max se jouent-elles autrement ?

**Elles checkent encore plus.** Il y a 33 combos de couleur faite sur ce board ; les 25 sans l'A♠ checkent en moyenne **81,4 %**, contre 69,9 % pour la couleur max.

| Main | Équité | Check | EQR |
|---|---|---|---|
| A♠J♠ (nuts) | 97,7 % | 83,4 % | 229,9 % |
| K♠J♠ | 94,0 % | **91,8 %** | 197,0 % |
| K♠8♠ | 93,6 % | **76,3 %** | 193,0 % |
| K♠6♠ | 93,6 % | **61,0 %** | 193,7 % |

L'équité bouge à peine, 94 % contre 97,7 %, mais l'EQR tombe à 197 %. **Tu gagnes moins quand tu gagnes.** Il y a une seule raison : la seule main contre laquelle une couleur hauteur Roi perd est la couleur hauteur As, et c'est justement la main qui met beaucoup d'argent. Gagner petit et perdre gros, ce sont les **cotes implicites inversées**, l'image miroir des [cotes implicites](/fr/blog/holdem-implied-odds).

## Qui a le plus de couleurs ici ?

**La grosse blinde : 7,1 % contre 5,7 %.** Mais les *tirages* couleur vont dans l'autre sens.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board monotone à pique](/images/gto-srp-monotone-ranges-fr.webp "Q♠9♠2♠ · répartition par catégorie — les couleurs faites penchent vers la grosse blinde, les overpairs et la hauteur As vers le bouton")

| Catégorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Couleur faite | **7,1 %** | 5,7 % |
| Tirage couleur (un pique, tirages combo inclus) | 25,6 % | **29,2 %** |
| Top paire (Q) | 10,9 % | **12,0 %** |
| Overpair (KK, AA) | 0,0 % | **2,5 %** |
| Hauteur As | 25,6 % | **28,5 %** |

⚠ La ligne tirage couleur est **dérivée** : le solver affiche « Tirage couleur » et « Tirage combo » séparément, et une main avec un pique peut apparaître dans l'une ou l'autre. Cela donne donc ==20,5 + 5,1 = 25,6 %== pour la grosse blinde et ==24,1 + 5,1 = 29,2 %== pour le bouton. Bon à savoir si tu les vérifies à l'écran.

La répartition vient du préflop. **La grosse blinde défend des petites mains assorties bon marché** : des mains comme J4s, J5s et 85s sont payées depuis la grosse blinde, et celles à pique se transforment en couleurs. Le bouton ne les ouvre jamais.

Ce que le bouton a à la place, c'est bien plus d'**as-x et de roi-x dépareillés avec un pique.** Pas faits, mais en tirage, et c'est là que l'A♠ devient spécial. Il peut faire la couleur max, et il te dit aussi que ton adversaire **ne peut pas** l'avoir.

## Comment un seul pique change-t-il la valeur d'une main ?

**La même top paire est une autre main selon qu'elle contient un pique ou non.**

Prends Q♥J♦ : top paire, pas de pique. Déjà derrière contre **12,0 %** de la range complète du bouton, 474 combos (couleurs 5,7 + overpairs 2,5, plus les brelans servis et les doubles paires), et derrière au kicker contre **AQ et KQ** en plus : la Q♠ est sur le board et la Q♥ dans ta main, donc il reste deux dames, ce qui fait 8 combos d'AQ et 8 de KQ, soit 16 des 428 combos que le bouton peut encore avoir une fois tes Q♥ et J♦ retirées, **environ 3,7 %**. Compté de la même façon, tout ce qui est déjà devant toi fait 68 sur 428, à peu près **15,9 %**. En plus, **29,2 %** de sa range peuvent la dépasser avec une carte (⚠ quatre de ces 16 combos de kicker ont un pique et sont aussi comptés dans ces 29,2 %, donc n'additionne pas simplement les deux chiffres). Ce n'est pas une main pour trois streets de value ; c'est une main qui paie un bluff une fois.

Prends maintenant 9♥8♠ : deuxième paire avec un pique. Elle peut gagner maintenant ou s'améliorer plus tard, ce qui la rend assez flexible pour miser ou payer.

**Une seule enseigne réécrit tout le classement sur ce board.**

## Pourquoi l'EQR fait 90 contre 109 quand l'équité fait 48 contre 52 ?

**Parce qu'un board où les pots restent petits réduit aussi la valeur de la position.**

| Indicateur | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 47,7 % | 52,3 % |
| EV (bb) | 2,37 | 3,13 |
| **Réalisation d'équité (EQR)** | **90,4 %** | **108,8 %** |

La part d'équité de la grosse blinde est de ==5,5 × 47,7 % = 2,62bb== contre 2,37bb réels, ce qui donne les 90,4 %.

L'écart de 18,4 points est le deuxième plus petit **des sept pots simplement relancés**, derrière 9-8-7 à 13,2. ⚠ Sur l'ensemble de la série, il n'est que cinquième : en blind contre blind (BvB), K-10-6 (7,0) et A-A-6 (9,3), ainsi que le pot 3-bet 8-5-2 (16,6), sont tous plus serrés, et ce sont d'autres sièges. Quand les grosses mises disparaissent, les décisions difficiles aussi, et **la position vaut exactement autant que les décisions qui restent à prendre.**

## Qu'est-ce que ça change à la table ?

- **Sur un board monotone, la grosse mise est rare d'emblée.** En théorie, le gros sizing de la grosse blinde tombe ici à **3,2 %**. ⚠ N'en tire pas directement « donc je couche une paire face à une grosse mise ». Les 3,2 %, c'est la fréquence à laquelle la grosse blinde **fait un lead**, et quand c'est toi qui *fais face* à une mise, les fréquences de sizing du bouton ne sont pas du tout dans cette résolution. Regarde aussi la colonne du bouton : les couleurs faites font 5,7 % alors que les tirages à un pique font **29,2 %**, plus de cinq fois plus ; lire une grosse mise comme « couleur » te fait coucher face aux semi-bluffs. La première chose à vérifier quand une grosse mise tombe, c'est si **ta propre main contient l'A♠.**
- **Ne pousse pas une petite couleur sur trois grosses streets.** Le solver checke les couleurs non max 81,4 % du temps (couleur max : 69,9 %). Prends de la value avec de petites mises, et considère une grosse relance comme l'A♠ jusqu'à preuve du contraire.
- **Tenir l'A♠ promeut une main au rang de candidate au bluff.** Un bluff fait en sachant que ton adversaire ne peut pas avoir la couleur max n'est pas la même mise qu'un bluff fait à l'aveugle.
- **Face à un adversaire qui ne couche jamais une paire, arrête de tendre des pièges.** Les 69,9 % de check supposent que l'autre joueur mise quand on checke vers lui ; s'il ne fait que payer, mise tes couleurs et prends l'argent.

:::readnext[À lire ensuite]
/fr/blog/donk-bet-strategy | Le flop où le donk bet est juste : 9-8-7 | /images/gto-srp-middle-connected-oop-fr.webp
/fr/blog/broadway-board-strategy | Deux tiers de la range ont un tirage, et elle checke quand même | /images/gto-srp-broadway-oop-fr.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → Board monochrome → [⚡ Voir les résultats]**.

Pour ce spot, le tableau par main en bas, c'est toute la leçon : **fais-le défiler jusqu'au bout.** Tu peux y lire pourquoi A♠J♠ et A♠4♠ diffèrent de 30 points de fréquence de check, et comment la même dame se scinde en deux mains différentes selon qu'elle vient avec un pique ou non.

Ouvre ensuite le **Trainer GTO** dans la barre latérale et laisse-le te distribuer une couleur sur ce board : choisir une action et voir le coût en EV convainc plus vite qu'un tableau. Gratuit, rien à installer, sans compte.

## FAQ

**Q. C'est quoi un flop monotone ?**

A. Un flop où les trois cartes sont de la même enseigne, comme Q♠ 9♠ 2♠. Deux cartes de cette enseigne font déjà une couleur, et une seule carte de cette enseigne est un tirage. C'est la texture où la valeur des mains bouge le plus, parce que les enseignes comptent temporairement plus que les rangs.

**Q. Faut-il toujours miser une couleur faite sur un board monotone ?**

A. Non. Dans cette résolution, les huit combos de couleur max checkent entre 52,7 % et 84,2 %, en moyenne 69,9 %, et les couleurs non max checkent 81,4 %. Une grosse mise fait coucher la plupart des paires simples et des hautes cartes, et une main à un pique qui suit ne peut jamais faire une couleur supérieure : il lui faut un runner-runner, comme un full, pour gagner. Checker pour provoquer une mise et encaisser à la turn et à la river rapporte donc plus au total.

**Q. Pourquoi la grosse blinde a-t-elle plus de couleurs que le bouton ?**

A. Parce que la grosse blinde a déjà investi une partie de la mise et défend des mains assorties bon marché comme J4s, J5s et 85s. Elles se transforment en couleurs sur un board monotone. Le bouton ne les ouvre jamais, c'est pourquoi ses couleurs faites sont à 5,7 % contre 7,1 % pour la grosse blinde.

**Q. Quelle est la probabilité de flopper une couleur ?**

A. Assez faible pour que le board monotone soit inhabituel en soi : il faut deux cartes assorties et que les trois cartes du flop coopèrent. Les pourcentages exacts pour flopper et compléter une couleur sont détaillés dans les [probabilités des tirages](/fr/blog/holdem-drawing-odds) ; ce qui compte ici, c'est ce qu'il faut faire une fois que ce board est tombé.

**Q. Pourquoi l'A♠ compte-t-il autant si je n'ai même pas couleur ?**

A. C'est un bloqueur : tant que tu le tiens, ton adversaire ne peut pas avoir la couleur max. Il ne peut donc pas défendre le haut de sa range, et les mains avec l'A♠ sont les premiers bluffs que choisit un solver. L'inverse vaut aussi : quand tu tiens une petite couleur, une grosse relance mérite plus de respect que d'habitude.
`.trim(),
};

export default POST;
