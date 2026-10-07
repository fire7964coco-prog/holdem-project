/**
 * fr · ace-paired-board-strategy (GTO ⑬ · board avec deux As A-A-6 · blind contre blind)
 * Source : EN lib/posts-en/ace-paired-board-strategy.ts (base a54b5f3d · updated 2026-10-02) · brief docs/fr-lanes/gto-brief.md ⑬.
 * Mots-clés : trips poker · trips ou set · board pairé · fréquence de bluff.
 * Limites connues : images en version -en (variantes -fr pas encore produites) · pas de H2 FAQ (comme l'EN) · « set » jamais seul.
 */
import type { Post } from "../posts";

export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "Deux as au flop, et la mise grimpe à 80 %",
  seoTitle: "Brelan d'as (trips) sur board pairé : le solver mise 80 %",
  desc: "Un flop pairé reçoit 3 % de mise, un autre 80,1 %. Sur A-A-6, l'as appartient au relanceur, et les brelans qui te battent manquent dans la range du caller.",
  tldr: "Après une ouverture de la petite blinde suivie par la grosse blinde, le flop A♠A♥6♦ reçoit une mise 80,1 % du temps (79,6 % à un tiers du pot, 0,5 % à trois quarts, check 19,8 %). C'est l'inverse des 3,0 % vus sur le board pairé 6♣6♦3♥, et ce qui les sépare tient moins au fait que le board est pairé qu'à la carte qui a pairé et à la range qu'elle sert (les sièges et les ranges ont changé en même temps que le board). Les mains qui font brelan avec un as comptent 88 combos contre 66, et 16 de ces combos, A-K et A-Q, sont totalement absents de la range du caller.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-en.webp",
  imageAlt: "Solver HoldemMaster sur le flop A♠A♥6♦ en blind contre blind : la grille de la petite blinde presque entièrement orange, couleur de la mise",
  tags: ["trips poker", "trips ou set", "board pairé as", "fréquence de bluff poker", "blind contre blind", "board avec deux as"],
  content: `
On te dira qu'on ne mise pas sur les boards pairés. Sur le [board pairé 6-6-3](/fr/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp") vu plus tôt dans cette série, le joueur qui parlait en premier misait à peine **3,0 %**.

Celui-ci est pairé lui aussi. A♠ A♥ 6♦. Et la petite blinde mise **80,1 %**.

Les conditions sont les mêmes que dans les deux spots précédents : un pot de 6bb, un stack effectif de 97bb, la petite blinde comme ouvreur. Un board plus tôt, depuis ce même siège, [elle ne misait que 9,6 %](/fr/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp"). Ce spot est l'autre extrémité. Tous les chiffres ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | SB ouvre à 3bb → BB paye (blind contre blind)
Flop | A♠ A♥ 6♦ (pairé · aucun tirage couleur possible)
Pot · stack | Pot 6bb · stack effectif 97bb · SPR 16,2
Résultat | La SB mise **80,1 %**, contre 3,0 % sur le board pairé 6-6-3
:::

> **Réponse rapide**
> Sur le board pairé A-A-6, la première action de la petite blinde (SB) est **mise 80,1 %, check 19,8 %** (dont 79,6 % à un tiers du pot). C'est l'inverse des 3,0 % sur 6-6-3, et ce qui les sépare tient **moins au fait que le board est pairé qu'à la carte qui a pairé et à la range qu'elle sert** ; les sièges et les ranges ont changé en même temps que le board. Les mains qui font brelan avec un as comptent **88 combos contre 66**, et parmi elles, **A-K et A-Q (16 combos) n'existent pas du tout dans la range de call de la grosse blinde (BB).** Elles ont fait un 3-bet avant le flop.

## Quelles conditions ont produit ces chiffres ?

★**Les mêmes que dans les deux spots précédents, sauf qu'il y a deux sizings.** Les spots ⑪ et ⑫ n'avaient qu'un tiers du pot ; celui-ci propose aussi trois quarts du pot.

| Élément | Ce spot ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥10♦6♠ |
|---|---|---|---|
| Préflop | SB ouvre à 3bb → BB paye | idem | idem |
| OOP (parle en premier) | SB, l'ouvreur | idem | idem |
| Pot · stack effectif | 6bb · 97bb | idem | idem |
| SPR | 16,2 | idem | idem |
| **Bet sizes** | **Deux : environ 33 % et 75 % du pot** | Un seul, 33 % | Un seul, 33 % |
| Range SB | 503 combos | 572 combos | 538 combos |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ 10♦ 6♠ |
| Rake | Sans rake | Sans rake | Sans rake |
| Vérifié le | 2026-08-08 (résultat du spot d'étude) | 2026-08-08 | 2026-08-08 |

Le pot de 6bb, c'est ==les 3 de la SB plus les 3 de la BB==, le stack effectif vaut ==100 − 3 = 97bb==, et le SPR ==97 ÷ 6 = 16,2==. Les trois spots utilisent la même range, et **seul le nombre de combos diminue de ce que le board retire** : deux as au flop suppriment un grand nombre de combinaisons avec un as, et c'est pour ça que 503 est le plus petit des trois.

L'affichage est en **grosses blindes** : les mises se lisent « Bet 4,5bb (75 % du pot) », et l'EV se lit « EV (bb) ».

## À quelle fréquence la petite blinde mise-t-elle ici ?

**79,6 % au petit sizing, 0,5 % au gros, et 19,8 % de check.** Les mises font 80,1 % au total, et 403 des 503 combos partent en mise.

| Première action de la SB | Fréquence | Combos |
|---|---|---|
| Bet 4,5bb (75 % du pot) | 0,5 % | 2,7 |
| Bet 2bb (33 % du pot) | **79,6 %** | 400,4 |
| Check | 19,8 % | 99,8 |

Mis en ligne avec le reste de la série, tu vois où celui-ci se place.

| Spot | Qui est hors de position | Fréquence de mise OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB caller | 0,1 %–1,9 % |
| **6♣6♦3♥ board pairé (⑥)** | BB caller | **3,0 %** |
| 6♠5♥2♦ bas (⑦) | BB caller | 3,2 % |
| 7♦6♦5♣ blind contre blind (⑫) | SB ouvreur | 9,6 % |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11,2 % |
| 9♥8♥7♣ connecté (④) | BB caller | 23,7 % |
| K♥10♦6♠ blind contre blind (⑪) | SB ouvreur | 67,4 % |
| **A♠A♥6♦ board pairé (⑬)** | **SB ouvreur** | **80,1 %** |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-betteur | 98 %–100 % |

**Les deux boards pairés se trouvent près des deux extrémités opposées du tableau.** Autrement dit, l'étiquette « board pairé » ne décide pas d'une stratégie.

## Deux boards pairés, 3,0 % et 80,1 % : qu'est-ce qui les sépare ?

**Pas le nombre de brelans, mais *le reste de la range*.** Le spot 6-6-3 est ici le contre-exemple décisif, parce que là-bas **le joueur qui parlait en premier avait plus de brelans** et misait quand même 3,0 %.

| | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Qui parle en premier | BB, le caller | **SB, l'ouvreur** |
| Part de brelans | BB 5,3 % contre BTN 4,0 % : **le joueur qui mise en premier en a plus** | SB 17,5 % contre BB 13,1 % : le joueur qui mise en premier en a plus |
| Équité OOP | 47,2 % | **56,2 %** |
| EQR OOP | 83,7 % | **104,1 %** |
| Fréquence de mise OOP | **3,0 %** | **80,1 %** |

Sur 6-6-3, la grosse blinde avait défendu à bon prix des mains que le bouton n'ouvre jamais (J-6s, T-6s, 9-6s), si bien que ses combos avec un 6 étaient 26 (5,3 %) contre 20 (4,0 %) pour l'adversaire. **Et elle misait quand même 3,0 %.** Compte toutes les mains qui ajoutent quelque chose au-dessus de la paire du board, et ça fait **18,4 % pour la grosse blinde contre 20,3 % pour le bouton** : le bouton est devant. Ce que la grosse blinde menait, c'était une seule ligne, les brelans. Et les 81,6 % restants, le duel « paire de 6 plus une carte haute », penchaient aussi de l'autre côté : hauteur As 26,3 % contre 31,9 %.

Ici, le reste penche aussi du côté de la petite blinde. La hauteur Roi fait 22,3 % contre 18,2 %, et les mains qui ont complètement raté font 39,8 % contre 51,5 % : **11,7 points de plus pour l'adversaire.**

:::pull[Ce qui fixe la fréquence de mise, ce n'est pas le nombre de combos de ta meilleure classe. C'est de savoir si ta range entière est meilleure que la sienne.]:::

L'as est la carte que l'agresseur préflop possède le plus : dans ce spot, 95 combos contre 72, **environ 1,3 fois plus.** Quand cette carte tombe deux fois au flop, le haut de la range et tout le reste penchent **du même côté**, et c'est là que la fréquence de mise monte à 80 %.

## Qui a le plus de brelans ?

**88 combos (17,5 %) pour la petite blinde, 66 (13,1 %) pour la grosse blinde.** Mais **ce qui manque** compte plus que le nombre. (Le solver range cette classe sous « Set/Brelan » ; sur ce board, ce sont des brelans (trips).)

![Infographie de composition des ranges comparant les classes de mains de la petite blinde et de la grosse blinde sur un board A-A-6](/images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind contre blind · composition classe par classe : les mains qui ont raté font 39,8 % contre 51,5 %")

| Classe | SB (OOP · ouvreur) | BB (IP · caller) |
|---|---|---|
| Carré | **0,2 % (1 combo)** | 0,0 % (0 combo) |
| Full | 1,8 % (9 combos) | 1,8 % (9 combos) |
| Set/Brelan | **17,5 % (88 combos)** | 13,1 % (66 combos) |
| Double paire | **18,5 % (93 combos)** | 15,4 % (78 combos) |
| Hauteur Roi | **22,3 % (112 combos)** | 18,2 % (92 combos) |
| Pas de main faite | 39,8 % (200 combos) | **51,5 % (260 combos)** |

Trois lignes résument tout le spot.

- **Les brelans de la grosse blinde ne contiennent ni A-K ni A-Q.** Ces mains font un 3-bet face à une ouverture à 3bb de la petite blinde au lieu de payer. Les brelans supérieurs que seule la petite blinde possède font ==8 combos de A-K + 8 de A-Q + 6 de A-J dépareillé = 22 combos==. Même brelan, et le duel des kickers est déjà tranché.
- **Le carré n'appartient qu'à la petite blinde.** Avec A♠ et A♥ au board, les seuls as restants sont A♦ et A♣, donc A-A fait **exactement un combo**. La grosse blinde fait un 3-bet avec A-A et n'en a aucun.
- **Plus de la moitié de la range de la grosse blinde n'a rien.** 260 combos (51,5 %) ont raté. C'est la réserve sur laquelle une mise fait pression, pas un taux de fold : face à un tiers du pot, la fréquence de défense minimale (MDF) dit de garder environ 75 % de la range, donc un adversaire équilibré se couche plutôt autour d'un quart. (La réponse de la grosse blinde n'est pas dans ce calcul.)

Seuls les fulls sont exactement à égalité : les deux joueurs ont ==3 combos de 6-6 + 6 combos de A-6 = 9==. **Retire cette seule case, et chaque classe au-dessus penche vers la petite blinde, tandis que seul le bas (les mains ratées) pèse 11,7 points de plus côté grosse blinde.**

L'équité montre le résultat.

| Élément | SB (OOP) | BB (IP) |
|---|---|---|
| Équité | **56,2 %** | 43,8 % |
| EV (bb) | 3,51 | 2,49 |
| **EQR (réalisation d'équité)** | **104,1 %** | 94,8 % |

Le pot fait 6bb, donc la part de la petite blinde vaut ==6 × 56,2 % = 3,372bb== contre une EV réelle de 3,51bb, soit ==3,51 ÷ 3,372 = 104,1 %==. Les deux EV s'additionnent à ==3,51 + 2,49 = 6,0bb==, exactement le pot.

**La réalisation d'équité dépasse 100 % sans la position.** C'est le **plus haut des trois spots blind contre blind** : ⑪ à 103,1 %, ⑫ à 85,3 %, celui-ci à **104,1 %**. C'est le deuxième des trois à dépasser 100 %, et l'avantage de range plus marqué ici le fait passer un peu au-dessus de ⑪. (Les pots 3-bet dépassent aussi 100 % hors de position (OOP), entre 106,9 % et 117,8 % ; cet avantage-là s'était construit par le 3-bet.)

## Pourquoi le gros sizing n'est-il presque jamais utilisé ?

**Parce que l'avantage est *large* plutôt que *profond*.** La mise aux trois quarts du pot reçoit 0,5 %, seulement 2,7 combos. En pratique, il n'y a qu'un seul sizing.

Les pots 3-bet étaient l'inverse. Sur le [board bas 8-5-2](/fr/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp"), la grosse blinde misait deux tiers du pot 97,8 % du temps, parce que cette range se coupait à peu près en deux entre **overpairs et hauteur As** : une forme polarisée. Une range tirée vers les extrêmes appelle un gros sizing.

Ce spot n'est pas comme ça. La range de la petite blinde est **continue** : brelans 17,5 %, double paire 18,5 %, hauteur Roi 22,3 %, mains ratées 39,8 %. Avec cette forme, pousser toute la range avec un petit sizing vaut davantage : les 51,5 % de mains ratées de l'adversaire sont ce sur quoi une petite mise fait pression (un bluff de 2bb dans 6bb n'a besoin que de 25 % de folds pour atteindre son seuil de rentabilité), et la mise elle-même ne risque que 2bb maintenant, même si les 97bb derrière peuvent encore entrer en jeu à la turn (le tournant) et à la river (la rivière).

:::note[⚠ Ce spot d'étude a été résolu avec deux sizings candidats, 33 % et 75 %. Ajoutes-en un plus petit (un cinquième ou un quart du pot), et les 79,6 % pourraient migrer là. Lis-le comme « le plus petit des sizings proposés », pas comme « 33 % est la réponse ».]:::

## Quelles mains composent les 19,8 % qui checkent ?

**Pas une classe entière mise de côté, mais une tranche de chacune.** Mesurées en direct le 2026-08-21, les paires servies checkent à **K-K 72,4 %, Q-Q 66,2 %, J-J 42,0 % et T-T 21,6 %** : K-K et Q-Q penchent vers le check, mais **T-T mise déjà 78 %.** Les 99,8 combos de check ne se résument pas non plus à « force moyenne » : **les mains ratées sont le plus gros groupe, environ 44 %**, puis la hauteur Roi environ 27 %, la double paire environ 17 % et les brelans environ 11 %. Les cases où le vert s'accumule le plus sont les **hauteurs dame et valet dépareillées** comme Q-9o, Q-Jo, Q-To et J-9o. Les cases avec un as, et 6-6, sont surtout orange.

La raison tient à **qui te paye.** K-K fait double paire avec les as du board, mais **il y a peu de valeur à encaisser en misant.** ⚠ Ne traduis pas ça par « les mains plus faibles se couchent et seuls les meilleurs brelans payent » : **le propre tableau de cet article le réfute.** Les 78 combos de double paire de la grosse blinde sont sept rangs de paires servies (42) plus des 6x (36), **tous sous K-K**, et ses 92 combos de hauteur Roi sont en dessous aussi ; face à une mise d'un tiers du pot, ces 170 combos (33,7 % de la range) ne se couchent pas tous. Pendant ce temps, les brelans et les fulls qui battent K-K ne font que **75 combos (14,9 %)**. Si la valeur est mince, ce n'est pas parce que les mains faibles se couchent toutes ; c'est parce que **cette large tranche paiera mais ne te suivra pas dans un gros pot** : la double paire et la hauteur Roi devinent sans grand mal qu'elles sont derrière K-K, donc plus tu mises gros, plus il ne reste que des brelans. ⚠ Pour mémoire, **un autre as à la turn ou à la river ne retourne pas K-K** : avec A-A-A-6 au board, K-K devient *full aux as par les rois*, et rien dans ces 170 combos ne bat cette main. Checker laisse au contraire de la place aux 260 combos ratés de la grosse blinde pour bluffer, et alors un call rapporte, **à condition que l'adversaire mélange des bluffs.** ⚠ La fréquence à laquelle la grosse blinde bluffe vraiment après un check n'est pas dans ce calcul (le spot d'étude s'arrête à la première action du flop) ; c'est une interprétation tirée de la composition des ranges.

**Ça va de pair avec les brelans qui partent presque tous en mise.** Les 88 combos avec un as ont besoin de la valeur de la hauteur Roi et des mains ratées de l'adversaire, donc il y a peu de raisons de checker. ⚠ « Tous » est faux, cela dit : mesurés en direct le 2026-08-21, les **94 combos avec un seul as** (88 brelans plus les 6 combos de A-6 qui font full) checkent entre **0,1 % et 26,0 %, 12,3 % en moyenne**, et **aucun combo ne checke exactement 0 %.** Le mélange est le plus régulier quand l'as est accompagné d'une petite carte (A♣8♣ à 19,4 %, A♣7♣ à 20,9 %, et A-5 à A-2 dépareillés à 20,1 % en moyenne).

## Qu'est-ce que ça change à la table ?

- **Ne transforme pas « board pairé = check » en règle.** C'est 3,0 % sur 6-6-3 et 80,1 % sur A-A-6. Le critère n'est pas de savoir si le board est pairé, et **pas non plus combien de combos de ce rang tu as** : sur 6-6-3, la grosse blinde avait plus de 6 (5,3 % contre 4,0 %) et ne misait quand même que 3,0 %. Le critère, c'est **de savoir si ta range *dans son ensemble* est meilleure que la sienne.** La mise a atteint 80 % ici parce que le haut et le reste penchaient **du même côté**.
- **Avec deux as au board, ne pars pas du principe que ton as ne vaut rien.** Si l'adversaire fait un 3-bet avec A-K et A-Q, le duel des kickers penche déjà de ton côté. **Ça repose quand même sur le fait qu'il fasse ce 3-bet** : face à une table qui ne fait que payer avec A-K et A-Q, la prémisse s'effondre ; avec un brelan au kicker faible, mise, mais reste en dehors d'une grosse guerre de relances.
- **Petit sizing, haute fréquence.** Quand la range est continue, pousser large à un tiers du pot est meilleur. Le gros sizing est l'outil d'[une range coupée entre fort et faible](/fr/blog/3bet-pot-low-board), même si, à l'intérieur des pots 3-bet, la raison diffère sur [un board chargé en tirages](/fr/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp"), où une grosse mise sert à laisser l'adversaire à un mauvais prix. **Note aussi que 80,1 % est un calcul en heads-up** : avec plus d'un adversaire encore dans le coup, coupe nettement les mises avec les mains ratées et resserre vers les brelans et les doubles paires.
- **Ne mise pas K-K et Q-Q « parce qu'elles sont fortes ».** Sur ce board, elles ont du mal à se faire payer par pire. Checker pour attraper les bluffs de l'adversaire est meilleur. ⚠ C'est **un jugement tiré de la composition des ranges**, pas une valeur mesurée par cette série : le spot d'étude ne montre que la fréquence de la première action au flop, et aucun nœud après un check n'est résolu pour ce spot (le seul nœud check puis mise de la série est la résolution distincte du [board bas rainbow](/fr/blog/low-board-check-raise)). **Ça suppose aussi que l'adversaire mélange des bluffs** : face à quelqu'un qui n'en fait presque jamais, une mise qui arrive après ton check est en général un as, et te coucher vaut mieux que t'accrocher.

:::readnext[À lire ensuite]
/fr/blog/blind-battle-connected-board | Même siège, même stack, et la mise tombe de 67 % à 9,6 % | /images/gto-sb-connected-oop-en.webp
/fr/blog/a-high-board-cbet | Le flop où la grosse blinde checke 98 % du temps | /images/gto-srp-dry-ace-oop-en.webp
:::

## Vérifie toi-même

Tous les chiffres de cette page apparaissent si tu ouvres le [solver poker gratuit](/fr/solver) et que tu cliques sur **Spots d'étude → « Board avec deux As » → [⚡ Voir les résultats]**. Pour jouer le même spot sous forme d'exercice, ouvre le [Trainer GTO](/fr/solver) depuis la barre latérale : il te distribue une main au hasard et, une fois ton action choisie, te montre la fréquence mixte et la **Perte d'EV (bb)** de ton choix. Par défaut, ta progression est enregistrée uniquement sur cet appareil ; associe un compte HoldemMaster pour retrouver tes Spots d'étude et ton historique du Défi du jour sur n'importe quel appareil.

**Passe d'un clic à l'autre avec le board pairé 6-6-3.** Les deux sont des boards pairés, et les matrices ont des couleurs opposées. Fais le tour des spots d'étude une fois, et il ne reste qu'une conclusion : regarde d'abord non pas **quel board c'est** mais **à quelle range ce board s'accroche**. Gratuit, rien à installer, sans compte.

**Q. Trips et set : quelle différence au poker ?**

A. Un brelan (trips) se forme quand le board montre deux cartes du même rang et que tu en as une troisième en main. Sur A-A-6, la plupart des mains avec un seul as en font partie (**A-6 n'est pas un brelan mais un full** : il se paire aussi avec le 6 du board), et dans ce spot ça fait 88 combos (17,5 %) pour la petite blinde et 66 (13,1 %) pour la grosse blinde. Un brelan servi (*set*) se forme dans l'autre sens, à partir d'une paire en main avec une carte de plus de ce rang au board. Note que 6-6 fait bien un brelan servi avec le 6 du board ici, mais la paire d'as du board s'ajoute par-dessus, donc la main finale est un **full**.

**Q. Si tu mises aussi avec des mains qui ont raté, ce n'est pas du bluff ?**

A. Main par main, si. Mais en GTO, **bluffer, ce n'est pas « je trompe avec cette main », c'est « quel pourcentage de bluffs se trouve dans ma range ».** Le solver ne colle pas l'étiquette bluff sur une main ; il fixe **une fréquence pour chaque main**, et la fréquence de mise de la range est simplement la moyenne de ces fréquences sur ses combos. Avec 51,5 % de la range adverse qui a raté, une petite mise a de quoi faire pression, et quand elle ne les fait pas coucher, les 88 combos de brelan de la petite blinde encaissent. La valeur et le bluff partent au même sizing, donc l'adversaire ne peut pas les distinguer.

**Q. Sur un board comme A-A-6, quelle est la probabilité que l'adversaire ait un as ?**

A. Dans ce spot, **72 des 505 combos de la grosse blinde (14,3 %)** : 66 combos de brelan plus les 6 combos de A-6 qui font full. Avec A♠ et A♥ au board, il ne reste que deux as, donc c'est moins que ce qu'on ressent. La petite blinde, elle, en a **95 combos (18,9 %)** : 88 brelans, 6 de A-6 et 1 de A-A. Le même board donne des réponses différentes selon qui a attaqué avant le flop.

**Q. Quelle conclusion traverse toute cette série ?**

A. Que **« parler en premier est un désavantage » n'est qu'à moitié vrai.** La grosse blinde qui paye, dans les spots ① à ⑦, ne misait que 0,1 %–23,7 %, mais depuis le même siège qui parle en premier, le 3-betteur d'un pot 3-bet mise 98 %–100 %, et la petite blinde ouvreuse en blind contre blind passe de 9,6 % à 80,1 % selon le board. Ce n'est pas le siège mais **la relation entre la range et le board** qui fixe la fréquence. Tu peux parcourir chacun de ces spots toi-même dans les spots d'étude du [solver poker gratuit](/fr/solver) de HoldemMaster.
`.trim(),
};

export default POST;
