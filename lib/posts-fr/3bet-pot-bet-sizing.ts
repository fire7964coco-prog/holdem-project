import type { Post } from "../posts";

/*
 * fr — 3bet-pot-bet-sizing (série GTO ⑨ · pot 3-bet · Q♥10♥7♠)
 * Source : EN lib/posts-en/3bet-pot-bet-sizing.ts (updated 2026-09-26) · calcul du 2026-08-20.
 * Copie validée : docs/fr-lanes/gto-brief.md ⑨ (title·seoTitle·desc·tldr·tags·H2·FAQ verbatim).
 * Mots-clés : sizing poker · bet sizing poker · sizing géométrique · overbet poker · board humide.
 * Limites connues : images encore en -en.webp (variantes -fr à produire) · premier choix au flop seulement.
 */
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Deux sizings proposés, un seul utilisé",
  seoTitle: "98,4 % sur un seul sizing — sizing poker sur board humide",
  desc: "Deux sizings sur ce flop bicolore, et le solver met 98,4 % de sa range dans un seul. Deux tiers du pot : trop cher pour 38 des 40 tirages sur la carte suivante.",
  tldr: "Sur Q♥10♥7♠ dans un pot 3-bet, la grosse blinde mise deux tiers du pot (14,9bb) 98,4 % du temps. Le petit sizing reçoit 0,7 % et le check 0,8 %, à peine un combo sur 73 à eux deux. Un board plus tôt, sur A♦K♠2♥, la même range répartissait son sizing 57,8/42,2. Ce qui a écrasé la répartition, ce n'est pas la force mais le prix. Sur un board aussi humide, le sizing se décide d'après ce que ça coûte au caller de continuer à tirer, et la petite mise ne fait pas payer assez.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-fr.webp",
  imageAlt: "Solver GTO HoldemMaster sur un pot 3-bet Q-10-7 bicolore : la grille 13x13 de la grosse blinde presque entièrement d'une seule couleur, avec le sizing deux tiers du pot à 98,4 %",
  tags: ["sizing poker", "bet sizing poker", "board humide poker", "sizing géométrique", "overbet poker", "combien miser au poker", "pot 3-bet"],
  content: `
Un board plus tôt, la grosse blinde (BB) misait toute sa range sur [A♦K♠2♥](/fr/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-fr.webp") et répartissait son sizing presque à parts égales : 57,8 % petit, 42,2 % gros.

Ce flop-ci, c'est Q♥ 10♥ 7♠. Deux cœurs, et seul le valet manque entre la dame et le dix. **Beaucoup plus de tirages, et la répartition disparaît :** deux tiers du pot prennent ==98,4 %==, et le petit sizing 0,7 %.

« Mise gros sur les boards humides » : tout le monde a entendu ce conseil. Ce que personne ne dit, c'est à quel point ça devient extrême. Tous les chiffres ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | BB 3-bet → BTN paye (heads-up)
Flop | Q♥ 10♥ 7♠ (bicolore, connecté)
Pot · stack | Pot 22,5bb · stack effectif 89bb · SPR 4,0
Résultat | Deux tiers du pot 98,4 % — la répartition s'effondre
:::

> **Réponse rapide**
> La grosse blinde mise **14,9bb, deux tiers du pot, 98,4 % du temps**. Le petit sizing à 0,7 % et le check à 0,8 % valent pratiquement zéro : ce n'est pas une stratégie que tu peux appliquer. La raison, c'est le prix. Un tiers du pot demande au caller environ ==19,8 %== d'équité, ce que les quatre combos de tirage couleur du bouton dépassent sans peine. Deux tiers en demandent environ ==28,5 %==, et en comptant carte par carte, **seuls deux des 40 combos de tirage du bouton passent encore la barre** — les tirages combo à douze outs, qui passaient largement contre le petit sizing, n'y arrivent plus avec la seule carte suivante. Sur A-K-2, le sizing se répartissait au contraire parce que les 63 combos avaient tous une paire ou mieux : une range amputée de son bas, et aucun tirage à faire payer.

## Quelles conditions ont produit ces chiffres ?

**Même pot 3-bet que le board précédent — seul le flop change.** La grosse blinde a 3-bet à 11bb, le bouton (BTN) a payé, et les deux voient Q♥10♥7♠ avec 22,5bb au milieu et 89bb derrière. Ces deux chiffres font toute la différence entre les pots simplement relancés (single raised pots) de cette série et ses pots 3-bet.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre → **BB 3-bet à 11bb** → BTN paye |
| OOP · IP | OOP (hors de position) = BB (le 3-betteur) · IP (en position) = BTN (le caller) |
| Flop | Q♥ 10♥ 7♠ — deux cœurs, donc **bicolore** |
| Pot · stack | Pot 22,5bb · stack effectif 89bb (**SPR 4,0**) |
| Bet sizes proposés | Environ un tiers (7,4bb) et deux tiers (14,9bb) du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-20 |

Le pot de 22,5bb, c'est ==11 du 3-bet + 11 du call + les 0,5bb de la petite blinde couchée==, et le stack effectif vaut ==100 − 11 = 89bb==. Le solver compte en grosses blindes du début à la fin, et chaque mise s'affiche à la fois en montant et en fraction du pot.

## La range n'utilise-t-elle vraiment qu'un seul sizing ?

**Dans les faits, oui — elle n'en utilise qu'un.** 71,9 des 73 combos prennent le sizing deux tiers, tandis que la petite mise et le check se partagent 1,1 combo. Les deux sizings étaient ouverts dans l'arbre et le solver en a écarté un : c'est donc un choix, pas une restriction.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Bet 14,9bb (66 % du pot) | **98,4 %** | 71,9 |
| Check | 0,8 % | 0,6 |
| Bet 7,4bb (33 % du pot) | 0,7 % | 0,5 |

Ces nombres de combos ne sont pas entiers parce qu'ils sont **pondérés par la fréquence**, pas attribués : quelques mains mêlent une infime part de check et de petite mise à une grosse mise par ailleurs pure. Sous 1 %, impossible de séparer une vraie stratégie du bruit de convergence du solver : lis ces valeurs comme zéro, pas comme des instructions. (Seul le 0,1 point de pourcentage qui manque au total des actions est un vrai arrondi.)

Mets les deux pots 3-bet côte à côte et on dirait deux jeux différents.

Les deux lignes sont des pots 3-bet à SPR 4,0 avec la même range de 3-bet de 14 mains.

| Flop | Un tiers | Deux tiers | Check |
|---|---|---|---|
| A♦K♠2♥ sec rainbow | **57,8 %** | 42,2 % | 0,0 % |
| **Q♥10♥7♠ bicolore, connecté** | 0,7 % | **98,4 %** | 0,8 % |

## Pourquoi un board humide réclame-t-il un seul gros sizing ?

**Parce que le sizing au poker se règle sur ce que l'adversaire peut se permettre de payer, pas sur la force de ta propre main.** Compte les tirages que le bouton peut avoir, mets un prix sur chacun face aux deux sizings de l'arbre, et le choix se fait tout seul. Sur un board sec, ce compte est proche de zéro : c'est pour ça que le petit sizing y survit.

| Tirage | BB (3-betteur) | BTN (caller) |
|---|---|---|
| Tirage combo | 2,7 % | 3,0 % |
| Tirage couleur | 2,7 % | — |
| Tirage quinte bilatéral | — | **4,5 %** |
| Tirage ventral | **24,7 %** | 22,6 % |
| Tirage couleur backdoor | 26,0 % | 27,1 % |
| Aucun tirage | 43,8 % | 42,9 % |

**En ne comptant que les vrais tirages, les deux camps sont à 30,1 %** — la grosse blinde avec 2,7 % de tirages combo, 2,7 % de tirages couleur et 24,7 % de tirages ventraux ; le bouton avec 3,0 % de tirages combo, 4,5 % de tirages quinte bilatéraux et 22,6 % de tirages ventraux.

🪶 Les tirages couleur backdoor sont exclus exprès. Il faut deux cartes consécutives de la même enseigne (des cœurs pour une main qui tient un cœur, des piques pour une main qui tient deux piques à côté du 7♠), et ça n'arrive que ==(10 ÷ 47) × (9 ÷ 46) = environ 4,2 %== du temps — pas quelque chose qu'un sizing peut faire payer. Et le tableau des tirages est un **axe séparé du tableau des mains faites** : une overpair avec un cœur tombe aussi dans la ligne backdoor. Sur le [flop sec hauteur Roi](/fr/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-fr.webp"), la même ligne affichait 72,2 % « aucun tirage » pour la grosse blinde et 77,7 % pour le bouton. Une autre planète.

Mise un tiers du pot, 7,4bb, et le caller a besoin de ==7,4 ÷ (22,5 + 7,4 + 7,4) = environ 19,8 %== pour continuer. Voici ce que ce prix achète, mesuré carte par carte.

| Tirage possible pour le bouton | Combos | Outs | Carte suivante | contre 1/3 (19,8 %) | contre 2/3 (28,5 %) |
|---|---|---|---|---|---|
| Couleur plus bilatéral — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31,9 %== | ✅ | ✅ |
| Couleur plus ventral — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25,5 %== | ✅ | ❌ |
| Quinte bilatérale — K-J et 9-8 dans les autres enseignes | 6 | 8 | ==8 ÷ 47 = 17,0 %== | ❌ | ❌ |
| Tirage ventral | 30 | 4 | ==4 ÷ 47 = 8,5 %== | ❌ | ❌ |

**En cotes à une carte, deux tiers du pot mettent hors de prix 38 des 40 combos de tirage du bouton.** K♥J♥ et 9♥8♥ associent un tirage couleur à un tirage quinte bilatéral, et quinze outs passent **n'importe quel sizing de cet arbre en cotes immédiates** — mais ça fait ==2 sur 40==, et ⚠ **les outs ne sont pas propres.** La grosse blinde tient exactement quatre combos à deux cœurs — A♥K♥, A♥J♥, A♥5♥, A♥4♥ — et **chacun d'eux contient l'A♥** (la dame de cœur est sur le board, donc A♥Q♥ et K♥Q♥ ne peuvent pas exister). Les tirages couleur hauteur Roi et hauteur neuf du bouton courent après neuf cœurs face à une range dont les couleurs sont **toutes des nuts**, et à un SPR de 4, un cœur à la turn (le tournant) est une décision qui engage tout le stack — les cotes implicites inversées dans ce qu'elles ont de plus tranchant. Descends à un tiers du pot et le nombre de combos qui passent la barre double, à **quatre**, tandis que les 30 tirages ventraux derrière eux voient la turn bien moins cher. (Les mains faites sont une autre question : elles continuent pour la value, pas pour le prix.)

⚠ « Hors de prix » ne désigne ici que le calcul sur la carte suivante. Contre toute la range de la grosse blinde avec les deux cartes à venir, 30 de ces 38 combos gardent plus de 28,5 % d'équité — les tirages ventraux A-K sont à 37,6 %–42,9 % parce que leurs overcards comptent aussi. Ce que le gros sizing fait à la plupart des tirages, c'est les faire payer, pas les faire se coucher.

⚠ **La colonne ci-dessus met un prix sur une seule carte. Un tirage qui a besoin des deux, c'est une autre question — et il paie deux fois.** Voir les deux cartes au lieu d'une porte le tirage à quinze outs à ==environ 54,1 %== et le tirage à douze outs à ==environ 45,0 %== ; le tirage quinte à huit outs atteint ==31,5 %== et même un tirage ventral monte à ==16,5 %==. Le caller a aussi la position, un stack de 74,1bb derrière et l'option de relancer. **Le gros sizing met un prix sur tout ça.**

Un pas plus loin, pourtant : **le caller ne peut pas non plus simplement tout jeter.** Face à 14,9bb dans 22,5bb, empêcher un pur bluff d'être rentable demande ==22,5 ÷ (22,5 + 14,9) = 60,2 %== de la range — la fréquence de défense minimale (MDF). Les mains vraiment faites du bouton ne totalisent que **33,9 %** (6,8 de brelans servis, 20,3 de top paire, 6,8 de deuxième paire).

🪶 Pour remplir 60,2 %, pas besoin des tirages, pourtant : **33,9 % de mains faites plus 36,1 % d'underpairs, ça fait déjà 70,0 %.** Même si les 38 combos de tirage hors de prix se couchent tous, il reste 71,4 % de la range, largement au-dessus. Ce que fait vraiment le gros sizing, alors, c'est moins « chasser les tirages » que **faire payer cher au milieu de la range du bouton le droit de rester** — ces underpairs mettent l'argent au milieu cernées par deux overcards et par tous les tirages du board.

:::note[⚠ La MDF traite la mise comme un pur bluff sans aucune équité propre. L'essentiel de ce qui mise ici n'est pas ça — 24,7 % de la range de la grosse blinde est un tirage ventral, et un tirage ventral qui abandonne avait quand même une vraie équité au moment de miser. Prends 60,2 % comme une façon de réfléchir à la défense, pas comme un quota à remplir.]:::

🪶 Ne résume pas ça en « un tirage couleur paie de toute façon ». Un tirage couleur seul, c'est neuf outs, ==9 ÷ 47 = 19,1 %==, ce qui ne passe même pas les 19,8 % du petit sizing — et **cette range du bouton ne contient aucun tirage couleur seul** (le tiret dans le tableau comparatif). Elle a exactement quatre mains à deux cœurs, et chacune porte aussi un tirage quinte — deux un tirage ventral, deux un bilatéral — d'où leur place dans la ligne tirage combo. Qu'un tirage couleur seul atteigne ==environ 35,0 %== à la river (la rivière) est vrai, et hors sujet ici.

Pour voir plus largement comment compter les outs et mettre un prix sur un tirage, lis [les cotes des tirages](/fr/blog/holdem-drawing-odds) et [les cotes du pot](/fr/blog/holdem-pot-odds).

:::pull[Ta main ne choisit pas le sizing. Ce que ton adversaire peut se permettre de payer, si.]:::

:::note[⚠ Même texture, conclusion opposée — et les deux sont justes, parce que les places sont inversées. Dans un **pot simplement relancé (single raised pot)**, le haut d'un flop broadway bicolore appartient au relanceur préflop, et la grosse blinde, qui a seulement payé, le checke presque à chaque fois — sur [Q♠J♦10♠](/fr/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-fr.webp") elle checke 99,9 %. Les conseils classiques du type « mise gros sur les boards humides, et polarise » dans [le guide du c-bet](/fr/blog/holdem-continuation-bet) (mise de continuation) sont écrits pour la place du relanceur, pas pour celle du caller. **C'est le 3-bet qui les inverse.** Ici, c'est la grosse blinde qui tient la range qui connecte, donc c'est elle qui mise — avec tout. La texture seule ne tranche jamais ça ; lis d'abord l'action préflop.]:::

## Le sizing géométrique, c'est quoi ?

**Le sizing géométrique consiste à choisir une seule fraction du pot et à la répéter à chaque street pour que la dernière mise soit exactement un all-in.** Avec un pot de 22,5bb et 89bb derrière, le pot final après trois mises et trois calls doit valoir ==22,5 + 2 × 89 = 200,5bb==, donc le pot doit grossir de ==200,5 ÷ 22,5 = 8,91 fois== sur trois streets. Ça donne **environ 54 % du pot, trois fois.**

Le sizing que le solver propose réellement ici est plus gros que ça, et il passe quand même :

- Flop **14,9bb** → payé, le pot fait 52,3bb et il reste 74,1bb derrière
- Turn **34,5bb** → payé, il reste 39,6bb derrière
- River **39,6bb** all-in

**==14,9 + 34,5 + 39,6 = 89,0==.** Trois mises et le stack est parti. La dernière, c'est 39,6 dans un pot de 121,3 — ==environ 33 %== seulement — donc ce n'est pas « trois grosses mises » ; ce sont deux grosses mises et ce qu'il reste.

**Et bien moins de mains peuvent prévoir cette ligne que de mains qui envoient la première mise.** 98,4 % mise le flop ; sur la seule force, les candidates aux trois streets sont les brelans servis (sets) et les overpairs, ==6 + 12 = 18 combos==, tandis que les combos hauteur As en bas de range achètent une street et regardent à nouveau. ⚠ C'est une lecture des catégories, pas un résultat calculé : sans nœud de turn ni de river ici, cet écran ne permet pas de vérifier que les 18 vont jusqu'au bout, ni de placer les 15 combos de top paire d'un côté ou de l'autre. **La top paire, c'est exactement là qu'est la décision** : fixe ton propre plan avant de miser.

C'est ce que veut vraiment dire un **SPR de 4,0**. Le chiffre à surveiller n'est pas l'argent derrière, c'est le nombre de mises restantes. Miser 14,9bb fait tomber le SPR de la turn à ==74,1 ÷ 52,3 = 1,4==, et à ce moment-là la mise suivante engage tout le stack, que tu l'aies voulu ou non.

Et c'est pour ça que le gros sizing ne concerne pas seulement cette street. Les équités des tirages jusqu'à la river sont toutes des chiffres « si je vois les deux cartes », et à deux tiers, le caller doit payer encore deux fois pour les voir. Commencer petit, c'est ce qui lui aurait épargné ce coût.

## Pourquoi des mains sans paire misent-elles ici ?

**Parce que 38,4 % de la range de la grosse blinde est hauteur As, et que l'essentiel tire à une quinte.** Sur les 73 combos, 28 sont hauteur As, et les 18 tirages ventraux sont tous dans ces 28. Une main sans paire n'est pas une main sans équité : quatre outs pour la quinte Broadway, deux overcards, et tout ce que la mise fait coucher est gagné tout de suite.

| Les 28 combos hauteur As | Combos | Ce que c'est |
|---|---|---|
| AK | 16 | **Un seul valet** fait A-K-Q-J-10. 15 sont des tirages ventraux ; A♥K♥ ajoute la couleur et devient un tirage combo |
| AJs | 4 | Même A-K-Q-J-10, mais il faut **un roi**. 3 sont des tirages ventraux ; A♥J♥ est un tirage combo |
| A5s · A4s | 8 | A♥5♥ et A♥4♥ sont les deux tirages couleur seuls |

Avec une dame et un dix sur le board, **A-K et A-J courent après la même A-K-Q-J-10 sans rien tenir pour l'instant.** Fais coucher l'adversaire et tu gagnes tout de suite ; s'il paie, il te reste des outs. C'est une raison suffisante de miser.

JJ et 99, c'est le cas inverse. **Ni l'une ni l'autre ne tire à quoi que ce soit.** Les valets, avec la dame et le dix du board, ont encore besoin de deux cartes — un roi et un neuf, un as et un roi, ou un neuf et un huit — pour faire une quinte. Elles ont une paire, qui ressemble à de la force, mais la main qui peut tout retourner avec une seule carte, c'est A-K.

## Qu'a vraiment le bouton en main ?

**Plus d'un tiers de sa range — 36,1 % — est une underpair : il arrive sur un board à deux cartes broadway avec une paire sous la dame — sous les deux cartes broadway pour toutes les underpairs sauf JJ, qui se glisse entre les deux.** Le reste se partage entre les mains qui ont touché la dame, les mains qui tirent aux cœurs et une petite queue de rien. Une ligne du tableau ci-dessous ne veut pas dire ce qu'elle semble dire, et ça vaut la peine de la repérer avant de continuer.

![Composition des ranges sur un pot 3-bet Q-10-7 bicolore, avec des overpairs uniquement du côté de la grosse blinde et des deuxièmes paires uniquement du côté du bouton](/images/gto-3bp-dynamic-ranges-fr.webp "Pot 3-bet Q-10-7 · la ligne overpair appartient à la grosse blinde, la ligne deuxième paire au bouton")

| Catégorie | BB (3-betteur) | BTN (caller) |
|---|---|---|
| Set/Brelan (un brelan servi) | **8,2 %** | 6,8 % |
| Overpair | **16,4 %** | — |
| Top paire (une dame) | 20,5 % | 20,3 % |
| Deuxième paire (un dix) | — | **6,8 %** |
| Underpair | 16,4 % | **36,1 %** |
| Hauteur As | **38,4 %** | 24,1 % |
| Hauteur Roi ou sans paire | — | 6,0 % |

Deux lignes portent toute l'histoire, et l'une d'elles est un piège.

**La ligne overpair est un vrai monopole :** 16,4 % pour la grosse blinde, rien pour le bouton, parce que la range de call de cet exemple ne contient aucune paire d'as ni de rois **en main** (pocket). (Les as et les rois eux-mêmes y sont partout — 32 combos de A-K et de A-J se trouvent dans la ligne hauteur As.) C'est un **réglage préflop écrit dans l'arbre**, pas une conclusion du solver — les vraies résolutions en gardent parfois quelques-unes pour protéger le haut de la range de call.

**La ligne Set/Brelan n'est pas un monopole, malgré le pourcentage plus élevé.** 8,2 % de 73 combos, ça fait 6 ; 6,8 % de 133 combos, ça fait 9. **Le bouton a ici plus de brelans servis, pas moins.** Une part plus petite d'une range plus large peut quand même donner le plus grand nombre, et 133 contre 73, c'est assez large pour inverser le rapport. (Le panneau nomme cette ligne *Set/Brelan*. Sur un flop sans paire, une paire en main qui touche une carte du board est un **brelan servi (set)** — la distinction est détaillée dans le [spot du board pairé](/fr/blog/paired-board-strategy).)

La deuxième paire n'appartient qu'au bouton pour une raison structurelle : **la range de 3-bet de la grosse blinde ne contient aucune main avec un seul dix.** Les paires de dix y sont, mais elles floppent un brelan servi et montent d'une ligne.

Top paire : 20,5 % contre 20,3 %. **La différence entre ces ranges se joue au-dessus et en dessous, jamais à ce niveau.**

## Pourquoi l'EQR fait 117,8 % quand l'équité fait 58,3 % ?

**La grosse blinde réalise 1,18 fois sa part du pot tout en étant hors de position.** C'est plus que les 109,6 % sur A-K-2 — et **ça ne veut pas dire que ce spot est meilleur.** L'EV réelle de la grosse blinde a *baissé*, de 16,99bb là-bas à **15,46bb** ici.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 58,3 % | 41,7 % |
| EV (bb) | 15,46 | 7,04 |
| **Réalisation d'équité** | **117,8 %** | 75,1 % |

Dans un pot de 22,5bb, 58,3 % d'équité valent ==22,5 × 58,3 % = 13,12bb==, et encaisser 15,46bb, ça fait ==15,46 ÷ 13,12 = 117,8 %==.

L'écart d'équité est ici *plus étroit* que sur A-K-2, où il était de 68,9 % contre 31,1 %, et pourtant le chiffre de réalisation est plus haut. **Une partie vient du dénominateur qui rétrécit.** La réalisation d'équité (EQR) se mesure par rapport à ta propre part, donc plus l'équité s'approche de 50 %, plus le même avantage apparaît comme un multiple élevé. ⚠ La plus grande partie, pourtant, est réelle : mesuré comme l'EV au-dessus de la part brute, A-K-2 donnait ==16,99 − 22,5 × 68,9 % = environ 1,49bb== et ce board ==15,46 − 22,5 × 58,3 % = environ 2,34bb==, donc **l'excédent lui-même a grandi aussi.** Ce qui a rétréci, c'est la part du pot de la grosse blinde : ==16,99 ÷ 22,5 = 75,5 %== sur A-K-2 contre ==15,46 ÷ 22,5 = 68,7 %== ici — un EQR plus haut et « prendre une plus grosse part du pot » sont deux affirmations différentes.

Le 75,1 % du bouton n'est pas non plus une preuve indépendante de quoi que ce soit — les deux EV s'additionnent pour faire le pot, donc si un camp dépasse 100 %, l'autre passe forcément en dessous. Ce chiffre repose sur le monopole des overpairs, et ce qu'il achète, c'est la possibilité de faire payer un mauvais prix aux mains moyennes du bouton. Pourquoi la position vaut normalement de l'argent, c'est expliqué dans [jouer en position](/fr/blog/holdem-position-play).

:::note[Chaque EQR de cette série est cité tel que le solver l'affiche. Si tu divises toi-même l'équité et l'EV arrondies, tu peux tomber une décimale à côté : c'est de l'arrondi, pas un désaccord.]:::

## Qu'est-ce que ça change à la table ?

Tout ce qui suit suppose **heads-up, pot 3-bet, SPR 4**. Ajoute un cold-caller ou raccourcis les stacks, et « miser toute la range » cesse d'être vrai.

- **Choisis le sizing d'après le board avant de regarder ta main.** Choisir selon la force de ta main, c'est gros quand tu es fort et petit quand tu es faible : ça se lit. Le solver fait passer 98,4 % par un seul sizing ici.
- **Dans un pot 3-bet sur un board à deux types de tirages, prends d'abord le gros sizing.** Un tiers du pot annonce « 19,8 % suffisent pour continuer », et les quatre combos de tirage couleur du bouton passent cette barre avec de la marge (un tirage couleur seul à neuf outs ne la passerait pas — ==9 ÷ 47 = 19,1 %== — mais ici, seule la grosse blinde en a). ⚠ Ne range pas ça pour autant sous « des tirages, donc mise gros » — **cet article cite son propre contre-exemple.** Le [board 8-5-2](/fr/blog/3bet-pot-low-board), où 78,3 % de la range n'a aucun tirage, envoie lui aussi le gros sizing 97,8 % du temps, et là, la raison est une **range polarisée** plutôt que les tirages. Lis la densité de tirages et la forme de la range ensemble. (Dans un pot simplement relancé, la même texture pose une autre question — voir la note sur le single raised pot plus haut.)
- **A-K ne checke pas sur ce flop.** Avec une dame et un dix sur le board, c'est un tirage ventral à la quinte Broadway — ⚠ mais ce n'est pas pour ça qu'il mise : sur le board bas 8-5-2 cité plus haut, où rien ne s'y rattache, A-K part quand même dans le gros sizing 95,9 %–97,9 % du temps (97,8 %–99,9 % ici). Donc « a-t-il un tirage » ne suffit pas à trancher ce que fait A-K. La règle à retenir n'est ni « A-K mise » ni « A-K checke », mais « regarde d'abord la forme de toute ta range sur ce board ».
- **★C'est une réponse pour le flop, pas un plan.** Miser 14,9bb fait passer le SPR de la turn à 1,4, donc la mise suivante, c'est en pratique le stack. Décide avant de miser si cette main ira jusque-là. **Un cœur à la turn coupe dans les deux sens** — les quatre tirages combo du bouton rentrent, mais tes quatre aussi, et chacun des tiens contient l'A♥ — ce qui veut aussi dire que, quand c'est toi qui le tiens, deux des quatre du bouton ne peuvent pas exister. Ce que ça fait à une main hauteur As sans cœur est plus subtil : le valet que tu attendais n'a pas disparu, il est **contaminé**, parce qu'un J♥ complète la couleur de quelqu'un. Un seul sizing ne peut pas couvrir les trois cas.
- **★Décide à l'avance ta réponse à une relance.** Miser presque toute ta range, c'est presque toute ta range qui se fait relancer, et à SPR 4, une relance pose la question du stack. Les brelans servis et les overpairs y vont. **Les mains hauteur As sans deux cœurs — 24 de ces 28 combos — sont le fold le plus clair**, puisqu'un tirage ventral seul, c'est quatre outs. Les quatre mains à cœurs sont les candidates pour continuer, et A♥K♥ et A♥J♥ sont les plus fortes parce qu'elles ont aussi le tirage ventral. La top paire, c'est la vraie décision, et un calcul limité au flop ne la tranche pas.
- **★Depuis la place du bouton, prévois où s'arrêtent les paires moyennes.** 36,1 % de la range de call est ici une underpair. ⚠ Ne lis pas pour autant la **MDF de 60,2 % comme un quota de call** — elle est dérivée en traitant la mise comme un pur bluff sans équité, et **45,1 % de la range de mise de la grosse blinde est déjà faite** (8,2 de brelans servis, 16,4 d'overpairs, 20,5 de top paire), donc savoir si la vraie défense optimale se situe au-dessus ou en dessous, **ce calcul ne le dit pas.** **C'est à la turn que ces paires s'en vont** — une deuxième grosse mise en fait coucher la plupart, et payer le flop sans avoir décidé ça, c'est comme ça que les stacks fuient. (Le nœud de la turn n'est pas dans cette résolution : c'est donc du jugement, pas un chiffre.)

:::readnext[À lire ensuite]
/fr/blog/3bet-pot-cbet | Le flop que personne ne checke : SPR 4 en pot 3-bet | /images/gto-3bp-ace-king-oop-fr.webp
/fr/blog/3bet-pot-low-board | Trois combos touchent ce flop, et la range mise quand même 97,8 % | /images/gto-3bp-low-oop-fr.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver) et va dans **Spots d'étude → Board dynamique bicolore → [⚡ Voir les résultats]**.

Regarde d'abord la bande d'actions : **Bet 14,9bb (66 % du pot) · 98,4% · 71,9 combos**, avec les deux autres options toutes deux sous 1 %. Passe ensuite le sélecteur « Joueur » sur **IP (BTN)** et regarde ce qui manque dans le panneau — le bouton n'a **aucune ligne Overpair ni aucune ligne Tirage couleur.** Une catégorie à zéro n'est tout simplement pas affichée, et ces deux absences font l'essentiel de cet article.

Ouvre ensuite le **Trainer GTO** dans la barre latérale. Il distribue une main selon les vrais poids de la range et note ton action en **Perte d'EV**. Gratuit, sans installation, sans compte.

Un contraste utile : le board A-high du spot précédent. A♦K♠2♥ est rainbow, donc **aucun tirage couleur n'y existe pour personne**, et toute la range de la grosse blinde y a une paire ou mieux. Ici, la ligne « Aucun tirage » n'affiche que 43,8 %. ⚠ Les 56,2 % restants ne sont pas tous *vivants*, attention — 26,0 points sont un **backdoor**, qui demande deux cartes consécutives de la même enseigne (cœur, ou pique pour les mains à deux piques) et se complète environ 4,2 % du temps. Les vrais tirages font 30,1 %. **Cette seule ligne n'est pas toute l'explication, pourtant** — le [flop 8-5-2](/fr/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-fr.webp") plus loin dans cette série a 78,3 % « aucun tirage » et envoie quand même le gros sizing 97,8 % du temps. La densité de tirages et la forme de la range ont toutes les deux leur mot à dire.

## FAQ

**Q. C'est quoi le sizing, et combien miser au poker ?**

A. Le sizing, c'est la taille de ta mise. Pour choisir combien miser, pars de ce que le board donne à ton adversaire, pas de ce que tu tiens. Sur Q-10-7 avec deux cœurs, où une couleur et une quinte sont toutes deux possibles, le solver utilise deux tiers du pot 98,4 % du temps. Sur un A-K-2 sec, la même range préfère un tiers du pot, à 57,8 %. Le critère est toujours le prix proposé aux mains qui peuvent encore s'améliorer.

**Q. Pourquoi miser gros sur un board humide ?**

A. Pour faire payer les tirages. Deux tiers du pot demandent au caller environ 28,5 % d'équité, et en cotes sur la carte suivante, seuls deux de ses 40 combos de tirage y arrivent — K♥J♥ et 9♥8♥, qui ont quinze outs et 31,9 %. Tout le reste reste en dessous sur une carte, y compris les tirages combo à douze outs à 25,5 % — même si, avec les deux cartes à venir, la plupart de ces tirages gardent plus de 28,5 %, donc le prix les fait payer plutôt que coucher. Descends à un tiers du pot et la barre tombe à 19,8 %, ce qui double le nombre de combos qui la passent, à quatre. Les tirages ne sont pas la seule voie vers le gros sizing, cela dit — là où la range se sépare en fort et faible sans milieu, un [board sec comme 8-5-2](/fr/blog/3bet-pot-low-board) atteint lui aussi 97,8 %.

**Q. Qu'est-ce que le sizing géométrique ?**

A. Choisir une seule fraction du pot et la répéter à chaque street pour que la dernière mise soit exactement un all-in. Ça compte surtout à SPR bas, où tu choisis combien de décisions il reste plutôt que combien d'argent. Le calcul pour ce spot, et la raison pour laquelle le sizing réellement utilisé par le solver est plus gros que le sizing géométrique, sont détaillés plus haut.

**Q. Je devrais plutôt faire un overbet ?**

A. Cet arbre ne proposait qu'un tiers et deux tiers du pot : l'overbet n'a jamais été au menu. Ajoute-le et les 98,4 % se répartiraient probablement entre deux tiers et l'overbet, puisque la même logique — faire payer aux tirages le pire prix possible — pousse dans ce sens. Considère la fréquence exacte comme propre à cet arbre, pas comme un chiffre universel.

**Q. Peut-on miser A-K sans paire ici ?**

A. Oui. Un seul valet complète A-K-Q-J-10, donc c'est un tirage ventral, et 15 des 18 combos de tirage ventral de la grosse blinde sont des A-K. Les folds te donnent le pot tout de suite, les calls te laissent encore des outs. Ce qui en fait une mise, c'est la connexion avec le board, pas les deux grosses cartes.

**Q. Et si mon adversaire paie ses tirages quel que soit le prix ?**

A. Alors la fold equity disparaît, et ces chiffres cessent de décrire ton adversaire — ils supposent une défense optimale. Face à une calling station, penche vers la value et coupe les bluffs, mais garde le gros sizing. Ce joueur paie un mauvais prix pour tirer, et ce mauvais prix, c'est exactement de là que vient ton argent.

**Q. Ces chiffres se transposent-ils à mes parties ?**

A. Comme base de référence, quand les conditions correspondent. Change la range de 3-bet, la profondeur des stacks ou les sizings de l'arbre, et les fréquences bougent avec eux ; aucun rake n'est modélisé ici. La structure — un board humide dans un pot 3-bet à SPR 4 réclame un seul gros sizing — est la partie qui se transpose. Note que **la hauteur du board pèse autant que son humidité** : Q-10-7 est assez broadway pour qu'une range de 3-bet s'y connecte encore, ce qui n'est pas vrai de tous les flops humides.
`.trim(),
};

export default POST;
