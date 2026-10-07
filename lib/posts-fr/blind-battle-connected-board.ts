import type { Post } from "../posts";

/*
 * fr ⑫ blind-battle-connected-board — source : EN lib/posts-en/blind-battle-connected-board.ts (updated 2026-10-02, hash a54b5f3d)
 * Copie et H2/FAQ : docs/fr-lanes/gto-brief.md section ⑫ (Fable 2026-10-07, verbatim).
 * Mots-clés : texture de board poker (autocomplétion), board connecté, blind contre blind (10).
 * Limites connues : images = variantes -fr (générées le 2026-10-07) ; pas de H2 FAQ (structure EN).
 */
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "Même siège, même stack, et la mise tombe de 67 % à 9,6 %",
  seoTitle: "67 % de c-bet, puis 9,6 % — texture de board selon le solver",
  desc: "Rien n'a changé sauf trois cartes : sur 7-6-5, la petite blinde qui misait 67,4 % juste avant ne mise plus que 9,6 %. La texture de board en une lecture nette.",
  tldr: "Après une ouverture de la petite blinde suivie par la grosse blinde, le flop 7♦6♦5♣ ne reçoit une mise que 9,6 % du temps et un check 90,4 %. Pot, stack, SPR, sizing et les deux ranges sont identiques au spot précédent, seules les trois cartes du board ont changé, et la mise s'est effondrée de 67,4 % à 9,6 %. L'avantage de range gagné préflop était un avantage en cartes hautes, et un board bas connecté l'efface d'un coup. L'équité bascule à 49,6 % contre 50,4 % et la réalisation hors de position tombe à 85,3 %.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-fr.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop 7-6-5 bicolore : la grille de la petite blinde presque entièrement verte, couleur du check",
  tags: ["texture de board poker", "board connecté poker", "flop bas connecté", "surpaire poker", "blind contre blind", "board bicolore"],
  content: `
Dans le spot précédent, la petite blinde (SB) misait **67,4 % du temps sans position**. La raison : dans ce siège, l'agresseur préflop est aussi le premier à parler, donc l'avantage de range et l'ordre de parole tombent sur le même joueur.

Alors, en blind contre blind (BvB), la petite blinde doit-elle simplement toujours miser ? Ce spot est la réponse.

**Le pot est le même, 6bb, le stack effectif le même, 97bb, et le seul sizing de l'arbre reste un tiers du pot.** Les deux ranges sont aussi les mêmes que dans le spot précédent. La seule chose qui a changé, ce sont **trois cartes du board**. Et la mise de la petite blinde s'effondre à **9,6 %**. Tous les chiffres ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | La SB ouvre à 3bb → la BB paye (blind contre blind)
Flop | 7♦ 6♦ 5♣ (connecté · bicolore)
Pot · stack | Pot 6bb · stack effectif 97bb · SPR 16,2
Résultat | La SB mise **9,6 %**, le même siège qui misait 67,4 % un board plus tôt
:::

> **Réponse rapide**
> Sur le board connecté 7-6-5 en blind contre blind, la première action de la petite blinde est **mise 9,6 %, check 90,4 %**. Pot, stack, SPR, sizing et les deux ranges sont **identiques** au spot précédent (K♥10♦6♠) : seul le board a changé, et la mise est tombée de 67,4 % à 9,6 %. L'avantage de range de l'ouvreur est un avantage en **cartes hautes**, et sur un board de 5, 6 et 7 cet avantage disparaît complètement. L'équité **bascule même à 49,6 % contre 50,4 %**, et la réalisation d'équité de la petite blinde tombe de 103,1 % à **85,3 %**.

## Quelles conditions ont produit ces chiffres ?

**Elles sont identiques à celles du spot précédent.** Comme tout l'intérêt ici est « mêmes conditions, résultat différent », il vaut la peine de fixer clairement ce qui est identique et ce qui ne l'est pas.

| Élément | Ce spot ⑫ | Spot précédent ⑪ | Identique ? |
|---|---|---|---|
| Préflop | La SB ouvre à 3bb → la BB paye | La SB ouvre à 3bb → la BB paye | **identique** |
| OOP (parle en premier) | SB, l'ouvreur | SB, l'ouvreur | **identique** |
| Pot | 6bb | 6bb | **identique** |
| Stack effectif | 97bb | 97bb | **identique** |
| SPR | 16,2 | 16,2 | **identique** |
| Bet size | Un seul sizing, environ un tiers du pot | Un seul sizing, environ un tiers du pot | **identique** |
| Range SB | 572 combos | 538 combos | même range (seuls les bloqueurs du board diffèrent) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ 10♦ 6♠** | **différent** |
| Rake | Sans rake | Sans rake | — |
| Vérifié le | 2026-08-08 (résultat du spot d'étude) | 2026-08-08 | — |

Le pot de 6bb, c'est ==les 3 de la SB plus les 3 de la BB==. Le stack effectif est de ==100 − 3 = 97bb==, donc le SPR vaut ==97 ÷ 6 = 16,2==.

Les nombres de combos diffèrent, 572 contre 538, non pas parce que les ranges diffèrent, mais parce que **les cartes du board suppriment les combos qui les auraient utilisées.** Un board K, 10 et 6 retire davantage à une range chargée de cartes broadway.

L'affichage est en **grosses blindes** : les mises s'affichent « Bet 2bb (33 % du pot) » et l'EV « EV (bb) ».

## À quelle fréquence la petite blinde mise-t-elle ici ?

**9,6 % de mise, 90,4 % de check.** Sur 572 combos, seuls 55 partent dans la mise ; les 517 autres checkent.

| Première action de la SB | Fréquence | Combos |
|---|---|---|
| Bet 2bb (33 % du pot) | **9,6 %** | 55,0 |
| Check | **90,4 %** | 517,0 |

Replacé dans la série, tu vois où se situe ce spot.

| Spot | Qui est hors de position | Fréquence de mise OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB caller | 0,1 %–1,9 % |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3,0 %–3,2 % |
| **7♦6♦5♣ blind contre blind (⑫)** | **SB ouvreur** | **9,6 %** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11,2 % |
| 9♥8♥7♣ connecté (④) | BB caller | 23,7 % |
| K♥10♦6♠ blind contre blind (⑪) | SB ouvreur | 67,4 % |
| A♠A♥6♦ blind contre blind (⑬) | SB ouvreur | 80,1 % |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-betteur | 98 %–100 % |

**Le « rôle » seul n'explique pas ce tableau.** Le même ouvreur apparaît à 67,4 % et à 9,6 %. Si le spot précédent disait « change le rôle et le réflexe par défaut change », celui-ci en est le prolongement : **le board reprend ce réflexe par défaut.**

## Pourquoi 67,4 % deviennent-ils 9,6 % alors que rien d'autre n'a changé ?

**Parce que l'avantage de l'ouvreur est un avantage en cartes hautes.** La petite blinde pouvait ouvrir à 3bb parce que sa range est chargée d'as, de rois et de dames, lourde en combinaisons broadway, et pas une seule de ces cartes ne touche 5, 6 ou 7.

Le board précédent était l'inverse. **La carte haute était un roi**, et les combinaisons avec un roi sont bien plus nombreuses du côté de l'ouvreur. Pose la même range sur un board bas connecté et cette structure s'inverse.

| | K♥10♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Carte haute du board | **K**, la carte de l'ouvreur | **7**, la carte du caller |
| Équité SB | **55,3 %** | **49,6 %** |
| EQR SB | **103,1 %** | **85,3 %** |
| Fréquence de mise SB | **67,4 %** | **9,6 %** |

:::pull[L'avantage de range se gagne préflop, mais trois cartes au flop décident s'il se réalise.]:::

L'article précédent se terminait ainsi : *« sur les boards qui conviennent au caller, le check revient, même depuis ce siège. »* Voici ce cas, et le chiffre que le solver y met est **9,6 %**.

## Pourquoi ce board favorise-t-il la grosse blinde ?

**Parce que la range de call de la grosse blinde (BB) ajoute des mains que la petite blinde n'ouvre jamais et qui touchent 7-6-5, dont T7o, 97o, 87o, 76o, 74s et 43s, par-dessus les quintes, brelans servis et doubles paires que les deux ranges possèdent.** Les cinq premières lignes ci-dessous sont les catégories qui touchent vraiment ce board, et hormis les overpairs, la petite blinde n'en mène pas une seule.

![Infographie de composition des ranges comparant les catégories de mains de la petite blinde et de la grosse blinde sur un board 7-6-5](/images/gto-sb-connected-ranges-fr.webp "7-6-5 en blind contre blind · composition catégorie par catégorie : la top paire va de 6,8 % à 11,2 % en faveur de la grosse blinde")

| Classe | SB (OOP · ouvreur) | BB (IP · caller) |
|---|---|---|
| Quinte | 2,8 % (16 combos) | **3,7 % (20 combos)** |
| Set/Brelan | 1,6 % (9 combos) | 1,7 % (9 combos) |
| Double paire | 1,2 % (7 combos) | **2,4 % (13 combos)** |
| Overpair | **7,3 % (42 combos)** | 2,2 % (12 combos) |
| Top paire (7) | 6,8 % (39 combos) | **11,2 % (60 combos)** |
| Deuxième paire (6) | 5,8 % | **6,2 %** |
| Paire faible | 4,2 % | **6,2 %** |
| Underpair | 3,1 % | **3,4 %** |
| Hauteur As | **25,2 %** | 18,7 % |
| Hauteur Roi | **16,1 %** | 15,7 % |
| Pas de main faite | 25,9 % | **28,5 %** |

Trois cases tranchent.

- **La top paire, c'est 39 combos contre 60.** Une fois et demie autant de sept pour la grosse blinde. La range d'ouverture de la petite blinde se construit sans mains dépareillées comme T7, 97 et 87, alors que la grosse blinde, qui a déjà mis 1bb, n'ajoute que 2bb et les garde toutes.
- **Les quintes, c'est 16 combos contre 20.** Les deux ont 9-8 (qui fait 9-8-7-6-5), mais la grosse blinde a aussi 4-3 assorti pour 7-6-5-4-3. La range d'ouverture de la petite blinde n'a pas de 4-3 assorti.
- **La double paire, c'est 7 combos contre 13.** Les six combos de 7-6 dépareillé appartiennent à la seule grosse blinde.

Les brelans servis (sets) sont l'exception. Les deux ont 7-7, 6-6 et 5-5, **exactement neuf combos chacun.** La répartition affiche 1,6 % contre 1,7 % uniquement parce que la range de la grosse blinde est plus petite, 534 combos, donc les mêmes neuf y pèsent un peu plus.

La seule catégorie que la petite blinde mène, ce sont **les overpairs, 42 combos (7,3 %)** contre 12 pour la grosse blinde (2,2 %) : tout ce qui va de TT vers le haut est 3-bet contre une ouverture de la petite blinde, donc seuls 8-8 et 9-9 restent dans la range de call.

Le problème, c'est qu'**une overpair n'est pas une main forte sur ce board.** Les mains qui **la battent déjà** dans la range adverse font ==9 brelans servis + 13 doubles paires + 20 quintes = 42 combos==. Les 60 combos de top paire qu'elle bat pour l'instant peuvent devenir double paire ou brelan d'ici la river (la rivière), et les tirages sont eux aussi plus épais du côté de la grosse blinde.

| Tirage | SB | BB |
|---|---|---|
| Tirage combo | 3,0 % | **3,7 %** |
| Tirage couleur | **2,8 %** | 2,6 % |
| Tirage quinte bilatéral | 21,2 % | **24,9 %** |
| Tirage ventral | 19,4 % | **23,8 %** |
| Tirage couleur backdoor | **21,0 %** | 15,5 % |
| Aucun tirage | **32,7 %** | 29,4 % |

**Les tirages quinte bilatéraux vont de 21,2 % à 24,9 % et les tirages ventraux de 19,4 % à 23,8 %.** En ne comptant que les tirages vivants (combo, couleur, bilatéral, ventral), on obtient **46,4 % pour la petite blinde contre 55,0 % pour la grosse blinde**, ce qui veut dire que même la partie non faite de la range de la grosse blinde est celle qui a le plus de chances de *grandir*.

🪶 **La petite blinde ne mène que deux cases** : les tirages couleur, 2,8 % contre 2,6 %, et les tirages couleur backdoor, 21,0 % contre 15,5 %. Le premier est un écart de 0,2 point, pratiquement une égalité ; le second exige deux cartes runner-runner de la même couleur et ne se complète qu'environ 4,2 % du temps. Il faut additionner les six lignes pour arriver à 100 %, donc n'arrête pas ta lecture de ce tableau à « Aucun tirage ».

## L'ouvreur est derrière en équité : comment ?

**Parce que hauteur As et hauteur Roi ne valent presque rien sur ce board.** 41,3 % de la range de la petite blinde est hauteur As ou hauteur Roi (25,2 + 16,1), et au-dessus de 5-6-7 ces combinaisons ne sont que des cartes hautes.

| Élément | SB (OOP) | BB (IP) |
|---|---|---|
| Équité | 49,6 % | **50,4 %** |
| EV (bb) | 2,54 | **3,46** |
| **EQR (réalisation d'équité)** | **85,3 %** | **114,4 %** |

Le pot fait 6bb, donc la part de la petite blinde vaut ==6 × 49,6 % = 2,976bb== alors que l'EV réelle est de 2,54bb, soit ==2,54 ÷ 2,976 = 85,3 %==. Additionner les deux EV donne ==2,54 + 3,46 = 6,0bb==, exactement le pot.

**L'équité est presque à égalité, 49,6 contre 50,4, et pourtant la réalisation s'écarte nettement, 85,3 % contre 114,4 %.** Cet écart, c'est ce que vaut la position. Dans le spot précédent, l'avantage de range compensait largement et la petite blinde réalisait 103,1 % ; ici, il ne reste plus d'avantage pour compenser.

Classe l'EQR hors de position (OOP) de **six spots choisis** du plus bas au plus haut, et celui-ci se range parmi les callers. (Le vrai bas de toute la série, c'est ③ à 77,9 %, ② à 80,7 % et ⑥ à 83,7 %, tous des sièges de caller ; le tableau ci-dessous est un extrait sans cette queue.)

| Spot | Qui est hors de position | Équité OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ sec (①) | caller | 45,1 % | 84,0 % |
| 6♠5♥2♦ bas (⑦) | caller | 48,3 % | 84,3 % |
| **7♦6♦5♣ blind contre blind (⑫)** | **ouvreur** | **49,6 %** | **85,3 %** |
| 9♥8♥7♣ connecté (④) | caller | 48,5 % | 93,2 % |
| K♥10♦6♠ blind contre blind (⑪) | ouvreur | 55,3 % | 103,1 % |
| 8♦5♣2♠ pot 3-bet (⑩) | 3-betteur | 58,6 % | 106,9 % |

**Un ouvreur, assis parmi les callers.** Sur toute la série, il y a **cinq** sièges de caller sous celui-ci (③ 77,9 · ② 80,7 · ⑥ 83,7 · ① 84,0 · ⑦ 84,3), donc il n'est pas près du bas. Le constat tient quand même : **le même siège d'ouvreur affiche 103,1 % en ⑪ et 85,3 % ici.** C'est le board qui fixe la valeur, pas le siège.

## Alors, quelles mains composent les 9,6 % qui misent ?

**Pas un bloc : une fine couche étalée sur toute la range.** Nulle part dans la matrice une case n'est entièrement orange ; la plupart portent une mince bande orange. Même A-A et K-K sont surtout verts.

Trois types de cases portent une bande visiblement plus épaisse. (Les fréquences ci-dessous sont des moyennes par combo pour chaque classe de mains, relevées en parcourant tout le tableau main par main en direct le 2026-08-21.)

- **8-8 : mise à 39,5 %, la classe la plus fréquente de la range.** Sur 7-6-5, une paire de huit est **à la fois une overpair et un tirage quinte bilatéral** (8-7-6-5 se complète avec un quatre ou un neuf). Valeur et tirage dans une seule main, donc deux raisons de miser. L'équité mesurée va de 73,4 % à 75,2 % et l'EQR de 133 % à 138 %.
- **A-7 assorti et K-7 assorti** : top paire avec un sept. Ils sont choisis non pour leur force, mais parce que **la valeur fine vient avec un bloqueur As ou Roi** (un hauteur As ou hauteur Roi de moins dans la range adverse). La top paire sur ce board est en fait derrière, 39 combos contre 60.
- **K-4 assorti et Q-4 assorti** : un quatre assorti. Ajoute un quatre à 7-6-5 et tu tiens ==4-5-6-7==, un tirage quinte bilatéral qui se complète avec un trois ou un huit. En moyenne de classe, cela donne Q-4s à 30,9 % et K-4s à 27,1 %, mais **en combos individuels, Q♠4♠ et Q♥4♥ atteignent 54,7 %, le plus haut de tout le spot.**

Les 9,6 % se construisent en mélangeant un peu de valeur avec quelques tirages. La paire de huit est en tête du classement par classe parce qu'**une seule main joue les deux rôles à la fois.** ⚠ Ce n'est pas une règle générale pour autant : **aucun des meilleurs combos individuels ne fait les deux** (Q♥4♥ et Q♠4♠ à 54,7 % sont de purs tirages, A♣7♣ à 54,4 % est de la valeur fine avec un bloqueur, et vient ensuite 10♣9♣ à 52,2 %, un tirage ventral). Le meilleur combo individuel de la main à double emploi, 8♦8♣, est *plus bas*, à 47,1 %. **Les 9,6 % n'ont été sélectionnés par aucun critère unique.** **Et checker 90,4 % du temps, ce n'est pas abandonner ce board** : pour la valeur fine comme A♣7♣ et K♣7♣, miser et checker reviennent au même à 0,03bb près, donc checker ne coûte presque rien. ⚠ Ne cherche pas pour autant la raison dans le pot de 6bb, le stack de 97bb ou le SPR de 16,2 : ces trois valeurs sont **exactement les mêmes constantes** sur [⑪ K-10-6](/fr/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-fr.webp") et sur [le board A-A-6](/fr/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-fr.webp") plus loin dans la série, où la même petite blinde mise 67,4 % et 80,1 %. Ce qui a produit 9,6 %, ce n'est pas le stack ; ce sont **trois cartes du board**.

:::note[⚠ Ce spot d'étude a été résolu avec un seul sizing, un tiers du pot, comme unique option. Ouvre un sizing plus gros dans l'arbre et les 9,6 % peuvent bouger. Lis-le comme « dans ces conditions, il n'y a presque rien qui vaille une mise, même petite ».]:::

## Qu'est-ce que ça change à la table ?

- **Ne transforme pas « c'est du blind contre blind, donc je mise » en règle.** Les 67,4 % du spot précédent et les 9,6 % d'ici ont été séparés par le board, pas par le siège. Même si tu as ouvert de petite blinde, dès que le flop tombe bas et connecté (5, 6, 7, 8), l'initiative de cette main a déjà changé de camp.
- **Ne traite pas une overpair comme une raison de construire un gros pot.** Les 42 combos d'overpairs de la petite blinde sont trois fois et demie plus nombreux que ceux de la grosse blinde, mais sur un board où l'adversaire détient 42 combos qui les battent déjà, ce n'est pas une main pour deux ou trois barrels. Ce n'est pas un argument contre une seule petite mise : l'idée est de **ne pas la traiter comme une main pour mettre tout le tapis**. ⚠ Cela ne veut pas dire non plus « se coucher dès qu'une relance arrive ». La range adverse contient 24,9 % de tirages quinte bilatéraux, 23,8 % de tirages ventraux et 3,7 % de tirages combo, donc une relance au flop ne peut pas être toute de la valeur, et coucher automatiquement une overpair face à la relance d'un adversaire chargé en tirages est en soi une habitude exploitable. **Refuser de mettre tout son stack et se coucher sont deux choses différentes.** Et le nœud mise-puis-relance n'est pas dans ce calcul, donc aucune fréquence n'en sort. Cette série revient sans cesse à la même conclusion : [un board connecté rogne l'avantage de l'agresseur préflop](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-fr.webp").
- **Ne confonds pas hauteur As et force.** Un quart de la range de la petite blinde est hauteur As, et sur ce board l'essentiel ne peut que toucher une paire (A4 et A8 récupèrent un tirage quinte bilatéral, et les mains A♦x♦ un tirage couleur). Les tirages adverses, quand ils rentrent, sont surtout des quintes : ce qui diffère, ce n'est pas la chance de s'améliorer mais **ce que vaut l'amélioration**. Le chiffre d'équité de 49,6 % en est le résultat.
- **Décide à l'avance ce que tu fais après avoir checké.** Une fois 90,4 % passés en check, ce que tu payes et ce sur quoi tu fais un [check-raise](/fr/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-fr.webp") face à la mise adverse, c'est le vrai problème suivant. ⚠ **Cette réponse n'est pas dans ce calcul** : le spot d'étude ne résout que la **première action au flop**, donc les nœuds après un check (la fréquence de mise de la grosse blinde, le check-raise de la petite blinde) n'existent tout simplement pas. Si tu veux un spot où un check-raise a vraiment été résolu, le board bas rainbow est le seul de la série avec des fréquences recalculées, **mais le siège est différent** (là-bas, la grosse blinde est le caller face à un bouton).

:::readnext[À lire ensuite]
/fr/blog/blind-battle-cbet | Le joueur sans position mise en premier, 67,4 % du temps | /images/gto-sb-king-mid-oop-fr.webp
/fr/blog/ace-paired-board-strategy | Deux as au flop, et la mise grimpe à 80 % | /images/gto-sb-paired-ace-oop-fr.webp
:::

## Vérifie toi-même

Tous les chiffres d'ici s'affichent si tu ouvres le [solver poker gratuit](/fr/solver) et cliques sur **Spots d'étude → « Board bas connecté, bicolore » → [⚡ Voir les résultats]**. Pour jouer le même spot comme un exercice, ouvre plutôt le [Trainer GTO](/fr/solver) depuis la barre latérale : il te distribue une main au hasard et, une fois ton action choisie, il affiche la fréquence mixte et la **Perte d'EV (bb)** de ton choix. Par défaut, ton historique reste sur cet appareil ; associe un compte HoldemMaster pour retrouver tes Spots d'étude et ton historique du Défi du jour sur n'importe quel appareil.

**Fais des allers-retours avec « Board K-high avec un T »**, le spot précédent. Les étiquettes de joueur affichent « OOP (SB (ouvreur)) » sur les deux, le pot et le stack sont identiques, et la matrice change complètement de couleur. C'est, dans cette série, la démonstration la plus courte de ce que fait vraiment un board. Gratuit, sans installation, sans compte.

**Q. Pourquoi la même range change-t-elle de valeur d'un board à l'autre ?**

A. Parce qu'une range se concentre sur certaines cartes. La range d'ouverture de la petite blinde est chargée d'as, de rois et de dames, donc elle gagne sur les boards hauts ; la range de call de la grosse blinde est chargée de connecteurs et de petites mains assorties, donc elle gagne sur les boards bas connectés. Pose les deux mêmes ranges sur K♥10♦6♠ et la petite blinde a 55,3 % d'équité ; pose-les sur 7♦6♦5♣ et elle tombe à 49,6 %. Les ranges n'ont pas bougé, seul le board a changé.

**Q. Tu as ouvert de petite blinde et le flop tombe bas et connecté. Tu fais quoi ?**

A. Surtout, tu checkes. Le solver passe 90,4 % en check sur 7♦6♦5♣. Même les 9,6 % qui misent sont étalés finement entre **8-8, une overpair qui est aussi un tirage quinte bilatéral** (39,5 % en moyenne de classe, le plus haut ici), la top paire (A-7s, K-7s) et un quatre assorti qui fait un tirage quinte bilatéral (K-4s, Q-4s). Mais ce n'est pas la même chose qu'abandonner : pour les mains de valeur fine, checker vaut à peu près autant que miser (à 0,03bb près), et ce qui se passe après le check, calls et check-raises compris, n'est pas dans ce calcul.

**Q. La petite blinde a trois fois et demie plus de surpaires (42 combos contre 12). Pourquoi la mise n'est-elle que de 9,6 % ?**

A. Parce que l'adversaire a beaucoup de mains qui battent une overpair sur ce board : 42 combos de brelans servis, doubles paires et quintes, plus 24,9 % de tirages quinte bilatéraux et 23,8 % de tirages ventraux. Même les 60 combos de top paire actuellement derrière ont des cartes qui retournent la situation d'ici la river. Une overpair ici, c'est « devant maintenant, difficile d'y remettre plus d'une fois ». ⚠ Ne cherche pas la raison dans le SPR de 16,2 : un pot de 6bb, un stack de 97bb et un SPR de 16,2 sont **les mêmes constantes** sur les boards [K-10-6](/fr/blog/blind-battle-cbet) et [A-A-6](/fr/blog/ace-paired-board-strategy), où la même petite blinde mise 67,4 % et 80,1 %. Ce qui a produit 9,6 %, ce n'est pas le stack ; ce sont trois cartes du board.

**Q. Lequel des deux spots est la norme en blind contre blind ?**

A. Aucun. Ce duo de spots existe pour montrer que le même siège produit 9,6 % et 67,4 %, aux deux extrêmes, selon le board. Ce qu'il faut emporter à la table, ce n'est pas « petite blinde, donc je mise » mais **à quelle range appartient la carte haute du board**. Un roi, une dame ou un as, et elle appartient à l'ouvreur ; une série de 5, 6, 7 ou 8, et elle appartient au caller.
`.trim(),
};

export default POST;
