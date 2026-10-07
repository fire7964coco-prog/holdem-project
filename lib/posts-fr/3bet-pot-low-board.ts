import type { Post } from "../posts";

/**
 * Série GTO ⑩ fr — 8♦5♣2♠ en pot 3-bet (BB 3-bet, BTN paye, SPR 4,0).
 * Source : EN lib/posts-en/3bet-pot-low-board.ts (hash a54b5f3d) · brief docs/fr-lanes/gto-brief.md ⑩.
 * Mots-clés : range polarisée (10) · polarized range poker (10) · pot 3-bet.
 * Limites : première décision au flop seulement · aucun nœud de réponse du bouton · sans rake · images -en en attendant les variantes -fr.
 * Pas de H2 FAQ (comme l'EN) : les Q. restent sous « Vérifie toi-même ».
 */
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "Trois combos touchent ce flop, et la range mise quand même 97,8 %",
  seoTitle: "Une range polarisée mise 97,8 % sur un board raté — 8-5-2",
  desc: "Pot 3-bet sur 8-5-2 : seuls trois combos de la range de la grosse blinde ont pairé le board, et elle mise deux tiers du pot 97,8 % du temps. Voici pourquoi.",
  tldr: "Après un 3-bet de la grosse blinde suivi par le bouton, le flop 8♦5♣2♠ reçoit une mise de deux tiers du pot 97,8 % du temps. Le plus étrange : sur les 83 combos de la grosse blinde, exactement trois ont pairé ce board, les A5s, et ni 88, ni 55, ni 22 ne sont dans la range. La mise part quand même parce que la range se divise en 36 combos de surpaires et 40 combos de hauteur As avec presque rien entre les deux, seulement les trois A5s. Une forme polarisée mise gros.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-fr.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop 8-5-2 rainbow en pot 3-bet : la grille de la grosse blinde est presque entièrement colorée pour la grosse mise",
  tags: ["range polarisée poker", "range polarisée", "board sec poker", "flop pot 3-bet", "jouer une surpaire", "board bas et sec"],
  content: `
Le flop tombe **8♦ 5♣ 2♠**. Tu as 3-bet avant le flop, le board est aussi sec que possible, et tu tiens A-K. Pas de paire, et rien de mieux que des tirages backdoor. **C'est là que checker paraît évident.**

Le solver fait l'inverse. **Il mise 14,9bb, deux tiers du pot, 97,8 % du temps.** Et ce n'est pas une affirmation sur A-K. Sur les 83 combos de la grosse blinde, le nombre qui a vraiment *pairé* ce board est de ==trois==.

Pourquoi une range qui a raté envoie quand même le gros sizing, c'est à ça que servent les chiffres ci-dessous. Ils viennent tous du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | BB 3-bet → BTN paye (heads-up)
Flop | 8♦ 5♣ 2♠ (rainbow, non connecté)
Pot · stack | Pot 22,5bb · stack effectif 89bb · **SPR 4,0**
Résultat | Deux tiers du pot 97,8 % : trois combos ont pairé ce board
:::

> **Réponse rapide**
> Sur 8-5-2 en pot 3-bet, la grosse blinde (BB) mise **deux tiers du pot 97,8 %** du temps. Pourtant, sur ses 83 combos, seuls **trois, les A5s, ont pairé le board**, et 88, 55 et 22 ne sont pas du tout dans la range. La mise part quand même parce que la range se divise en **36 combos de surpaires (43,4 %) et 40 combos de hauteur As (48,2 %)** avec presque rien entre les deux. Très fort ou rien du tout : quand le milieu est vide, le sizing monte.

## Quelles conditions ont produit ces chiffres ?

La même configuration de pot 3-bet que les spots [A-K-2](/fr/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-fr.webp") et [Q-10-7](/fr/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-fr.webp"). Seul le board a changé.

| Élément | Réglage |
|---|---|
| Préflop | BTN ouvre → **BB 3-bet à 11bb** → BTN paye |
| OOP · IP | OOP = grosse blinde (3-betteur), hors de position · IP = bouton (caller), en position |
| Flop | 8♦ 5♣ 2♠ (trois enseignes différentes) |
| Pot · stack | Pot 22,5bb · stack effectif 89bb (**SPR 4,0**) |
| Bet sizes | Environ un tiers du pot (7,4bb) et deux tiers (14,9bb) |
| Rake | Sans rake |
| Vérifié le | 2026-08-08 (résultat du spot d'étude) |

Le pot de 22,5bb, c'est ==11 du 3-bet + 11 du call + 0,5 de la petite blinde couchée==. L'affichage est en **grosses blindes** : l'EV se lit « EV (bb) » et chaque mise affiche le montant à côté de sa part du pot.

## À quelle fréquence le 3-betteur mise-t-il vraiment ?

**Le gros sizing, 97,8 % du temps.** Presque identique au board humide du spot précédent (98,4 %).

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Bet 14,9bb (66 % du pot) | **97,8 %** | 81,1 |
| Check | 2,0 % | 1,7 |
| Bet 7,4bb (33 % du pot) | 0,3 % | 0,2 |

Voici la partie étrange. **[Q-10-7](/fr/blog/3bet-pot-bet-sizing), noyé sous les tirages, et ce board, qui n'en a presque aucun, utilisent le même sizing à presque la même fréquence.** Dans le spot précédent, le gros sizing servait à faire payer les tirages adverses. Ici, il n'y a pas de tirages à faire payer. **La raison diffère ; la conclusion, non.**

## Seuls trois combos ont vraiment pairé ce board ?

**Oui : trois combos d'A5s.** En étalant les 83 combos :

| Catégorie | Part | Combos | Ce que c'est |
|---|---|---|---|
| Overpair | 43,4 % | 36 | AA · KK · QQ · JJ · TT · 99 |
| Hauteur As | 48,2 % | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Deuxième paire (5) | 3,6 % | 3 | **A5s** |
| Hauteur Roi | 4,8 % | 4 | KQs |
| **Set/Brelan** | **0 %** | **0** | 88, 55 et 22 ne sont pas dans une range de 3-bet |
| **Top paire (8)** | **0 %** | **0** | Rien dans la range ne contient un huit |

Les combinaisons tombent en nombres entiers. Les 36 combos de surpaires sont six paires servies, de 99 à AA, six combos chacune. **Toute paire servie au-dessus d'un huit devient une surpaire : c'est ce que fait un board bas.** A5s fait trois combos et non quatre parce que le 5♣ est sur le board, ce qui laisse A♠5♠, A♥5♥ et A♦5♦.

Il y a aussi exactement un tirage ventral (gutshot). **Les quatre combos d'A4s** sont à une carte, un trois, de la roue (wheel) A-2-3-4-5. Le panneau des tirages du solver se divise en trois lignes mutuellement exclusives : **tirage ventral 4,8 % · tirage couleur backdoor 16,9 % (14 combos) · aucun tirage 78,3 %.** Ce n'est *pas* « 78,3 %, c'est tout ce qui reste après le tirage ventral ». Il faut additionner les trois pour arriver à 100, et le backdoor à 16,9 % se trouve entre les deux (il lui faut deux cartes de son enseigne en runner-runner, donc il ne rentre qu'environ 4,2 % du temps).

## Pourquoi miser gros avec une range qui a raté ?

**Parce que la range se divise entre « très fort » et « rien », avec un milieu vide.** Quand le milieu disparaît, le sizing monte.

Les 36 combos de surpaires occupent tout le haut de la range de la grosse blinde. **Avec AA ou KK, les seules mains qui te battent sont les neuf combos de brelan servi du bouton.** À l'autre bout, les 40 combos de hauteur As ne battent presque rien à l'abattage (showdown) **contre la range qui paie une grosse mise** ; contre l'ensemble des 144 combos du bouton (BTN), en revanche, le tableau est différent, puisque 58,3 % d'entre eux ont aussi raté ce board.

⚠ Ne traite pas pour autant les surpaires comme un seul bloc. Le bouton a ses propres surpaires, 16,7 %, soit 24 combos de QQ, JJ, TT et 99 ; le 99 de la grosse blinde perd donc contre 18 d'entre eux, TT contre 12, JJ contre 6. **Le classement joue aussi à l'intérieur de la ligne « overpair ».**

| Forme de la range | Sizing |
|---|---|
| Fort, moyen et faible répartis également (range bet) | Petit : les mains moyennes ont besoin d'être payées |
| **Fort ou rien (polarisée)** | **Gros : sans milieu, il n'y a rien à protéger** |

Le SPR de 4 montre jusqu'où va ce sizing ; ce n'en est pas la *raison*, qui est la forme polarisée ci-dessus. Avec seulement 89bb derrière, **deux tiers du pot deux fois, puis ce qui reste à la river, vident le stack exactement** : 14,9bb au flop, 34,5bb à la turn (le tournant), 39,6bb à la river (la rivière). Les deux premières mises font ==14,9 + 34,5 = 49,4bb==, soit 55,5 % du stack de 89bb.

⚠ **Ce n'est pas la même chose que « commence petit et tu perds le chemin pour tout mettre au milieu ».** Tu ne le perds pas. En commençant à 7,4bb : payé, le pot fait 37,3 avec 81,6 derrière ; deux tiers de ça à la turn font 24,6, ce qui laisse un pot de 86,5 et un stack de 57,0 ; l'all-in de 57,0 à la river représente 65,9 % du pot. **Et le sizing n'est de toute façon pas choisi par la profondeur de stack** : le [board A-K-2](/fr/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-fr.webp") est au même SPR de 4,0 et utilise le **petit** sizing 57,8 % du temps. Ce qui produit le gros sizing ici, c'est la range polarisée, pas le SPR.

Et les 40 combos de hauteur As **gagnent dès que l'adversaire se couche.** 58,3 % de la range du bouton est hauteur As, hauteur Roi ou sans main faite sur ce board. ⚠ Cela dit, « raté » ne veut pas dire « se couche » : **le nœud de réponse du bouton à une mise n'est pas dans cette résolution**, donc aucune fréquence de fold n'en sort, et les hauteurs As du bouton vont d'A-K à A-T, ce qui leur garde une part de valeur à l'abattage. Quand un bluff est vraiment rentable, c'est traité dans [la stratégie de bluff](/fr/blog/holdem-strategy).

## Pourquoi tous les brelans servis sont-ils de l'autre côté ?

**Parce que 88, 55 et 22 ne sont pas dans une range de 3-bet, mais bien dans une range de call.** C'est le premier spot de la série où le haut du board appartient entièrement au joueur en position.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board 8-5-2 en pot 3-bet](/images/gto-3bp-low-ranges-fr.webp "8-5-2 en pot 3-bet · répartition par catégorie — les brelans uniquement chez le bouton, nettement plus de surpaires pour la grosse blinde (36 combos contre 24)")

| Catégorie | BB (3-betteur) | BTN (caller) |
|---|---|---|
| **Set/Brelan** | **0,0 %** | **6,3 %** (9 combos) |
| Overpair | **43,4 %** | 16,7 % |
| Top paire (8) | 0,0 % | 2,1 % |
| Deuxième paire (5) | 3,6 % | — |
| Underpair | — | **16,7 %** |
| Hauteur As | **48,2 %** | 36,1 % |
| Hauteur Roi · pas de main faite | 4,8 % | **22,2 %** |

Les neuf combos du bouton sont 88, 55 et 22, trois chacun : une carte de chaque rang est sur le board, donc chaque paire servie passe de six combos à trois. 🪶 Le tableau et l'écran du solver appellent tous deux cette ligne **« Set/Brelan »**. Sur 8-5-2, seul un **brelan servi (set)** est possible, puisque le board n'a pas de paire (le brelan au sens trips, c'est tenir une carte d'un board pairé). L'étiquette de l'appli est citée telle quelle : lis-la comme *brelan servi*.

**Cette forme compte à la table.** Tous les brelans servis sont de l'autre côté, et la grosse blinde n'a rien au-dessus ; ses surpaires ne sont donc pas les nuts ici.

⚠ N'en fais pas « si une relance revient, la surpaire ne bat rien ». Deux raisons. D'abord, **le nœud de réponse à une relance n'est pas dans cette résolution** : le spot d'étude s'arrête à la première action du flop. Ensuite, ce n'est de toute façon pas vrai : pour relancer contre un range bet à 97,8 %, il faut des bluffs mêlés à la value (neuf combos de brelan servi), et **AA et KK battent tout dans cette range de relance sauf ces neuf combos.**

## Pourquoi le caller réalise-t-il plus d'équité ici que dans les deux spots précédents ?

**La réalisation du bouton monte à 90,3 % dans la même structure de pot 3-bet.** Elle était de 78,7 % et 75,1 % dans les deux précédents. ⚠ Ce n'est pas que le bouton seul a progressé : les deux EV s'additionnent pour faire le pot, donc **à équités fixes, ce qu'un camp gagne en réalisation, l'autre le perd.** D'un board à l'autre, les équités bougent aussi, donc ce lien n'est pas automatique ; mais ici, c'est ce qui s'est passé : la grosse blinde est descendue de 117,8 % à 106,9 %. Ici au moins, ce sont les deux faces d'un même fait.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 58,6 % | 41,4 % |
| EV (bb) | 14,09 | 8,41 |
| **EQR** | **106,9 %** | **90,3 %** |

| Pot 3-bet, trois boards | EQR BB | EQR BTN |
|---|---|---|
| A♦K♠2♥ sec (⑧) | 109,6 % | 78,7 % |
| Q♥10♥7♠ bicolore (⑨) | 117,8 % | 75,1 % |
| **8♦5♣2♠ bas (⑩)** | **106,9 %** | **90,3 %** |

La raison, c'est l'endroit où se trouvent les brelans servis. **Le bouton est le seul joueur qui peut en avoir un**, et ces neuf combos ramassent des stacks entiers. Ses 16,7 % d'underpairs (77, 66, 44, 33) sont aussi devant la hauteur As, ce qui leur donne une raison de payer la mise.

**Un board bas, c'est là où le 3-betteur reste devant mais convertit le moins bien cet avantage en argent.** Ses 58,6 % d'équité sont même un poil au-dessus des 58,3 % de Q-10-7, alors que la **réalisation** tombe de 117,8 % à 106,9 %. ⚠ Ne lis pas le mouvement de 15,2 points du côté du **bouton** (⑨ 75,1 % → ⑩ 90,3 %) comme « ce que l'adversaire ramène chez lui » : l'EQR est le ratio d'équité *réalisée*, pas une part du pot. En part réelle, ce bouton encaisse ==8,41 ÷ 22,5 = 37,4 %== contre ==7,04 ÷ 22,5 = 31,3 %== pour ⑨, un écart de **6,1 points**.

## Qu'est-ce que ça change à la table ?

- **Ne te rabats pas par défaut sur « j'ai raté, donc je checke » sur un board bas et sec.** En pot 3-bet, ton adversaire a raté aussi : **58,3 %** de la range du bouton n'a pas fait de paire ici. ⚠ Ne convertis pas ces 58,3 % en part de folds ; le nœud de réponse n'est pas dans cette résolution. La raison de miser n'est pas « il se couche » mais **« ma range est polarisée, donc le gros sizing rapporte ».**
- **Mais ne traite pas une surpaire comme les nuts quand une relance revient.** Les neuf combos de brelan servi sont tous de l'autre côté, et le bouton a aussi 24 combos de QQ à 99. **Tes 99 et TT sont des surpaires qui perdent contre des surpaires.**
- **Face à quelqu'un qui se couche rarement, coupe la partie hauteur As.** Le chiffre de 97,8 % repose sur le fait qu'une grande partie de la range adverse a raté. ⚠ Encore une fois, « 58,3 % ont raté » n'est pas « 58,3 % se couchent » : aucune fréquence de fold ne sort de cette résolution, et les 36,1 % de hauteur As du bouton sont la famille A-K, A-Q, A-J, A-T, sans as faible. 🪶 Face à 14,9bb dans 22,5bb, la fréquence de défense minimale (MDF) est de **60,2 %**, mais c'est un **point de départ, pas un quota de call** : la MDF traite la mise comme un pur bluff à équité nulle, alors que la range qui mise ici contient 36 combos de surpaires, donc cette hypothèse ne tient pas. Savoir si la vraie défense optimale se situe en dessous, ce calcul ne le dit pas. Face à une calling station, envoyer deux et trois barrels avec la hauteur As transforme toute la partie bluff en pertes ; resserre-toi plutôt sur les surpaires pour la value.
- **Au bouton, les petites paires servies valent plus ici que partout ailleurs dans cette série.** 88, 55 et 22 font des brelans servis, et 77, 66, 44 et 33 sont tous devant la hauteur As. C'est exactement l'inverse du [spot A-K-2](/fr/blog/3bet-pot-cbet), où les underpairs étaient impuissantes. La construction de la range de 3-bet en décide, et c'est dans [la stratégie de 3-bet](/fr/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp").
- **Compte le SPR avant de miser.** À SPR 4, deux tiers du pot deux fois (14,9 → 34,5) plus un all-in de 39,6 à la river vident 89bb précisément. Une fois que tu mises le flop, le reste du stack est à une ou deux mises de distance ; décide donc avant cette première mise sur quelles turns et quelles rivers tu continueras à miser. La turn et la river ne sont pas dans cette résolution, et un runout ou un adversaire peut encore changer la réponse.

:::readnext[À lire ensuite]
/fr/blog/3bet-pot-bet-sizing | Un seul sizing, 98,4 % du temps : Q-10-7 en pot 3-bet | /images/gto-3bp-dynamic-oop-fr.webp
/fr/blog/blind-battle-cbet | Le joueur sans position mise en premier, 67,4 % du temps | /images/gto-sb-king-mid-oop-fr.webp
:::

## Vérifie toi-même

Tous les chiffres ici s'affichent si tu ouvres le [solver poker gratuit](/fr/solver) et cliques sur **Spots d'étude → « Board bas et sec » → [⚡ Voir les résultats]**. Pour jouer le même spot comme un exercice, ouvre le [Trainer GTO](/fr/solver) depuis la barre latérale : il te distribue une main au hasard, et une fois ton action choisie, il montre la fréquence mixte et la **Perte d'EV (bb)** de ton choix. Par défaut, ta progression est enregistrée uniquement sur cet appareil ; associe un compte HoldemMaster pour retrouver tes Spots d'étude et ton historique du Défi du jour sur n'importe quel appareil.

Cherche la **ligne « Set/Brelan » absente** dans le panneau « Mains / Tirages ». Passe ensuite « Joueur » sur IP (BTN) et elle apparaît à 6,3 %. Cette seule ligne raconte toute l'histoire de qui tient le haut de ce board. Gratuit, sans installation, sans compte.

**Q. Faut-il c-bet A-K sur un board bas dans un pot 3-bet ?**

A. Oui, la mise de continuation (c-bet) part même avec A-K. Sur 8-5-2, A-K n'a ni paire ni tirage immédiat (seulement des tirages backdoor : une roue en runner-runner, plus un tirage couleur backdoor pour les trois combos assortis), et pourtant le solver met 97,8 % de la range dans le gros sizing. La raison : la range de la grosse blinde est **polarisée, surpaires ou hauteur As, coupée à peu près en deux**, et quand le milieu est vide le sizing monte, presque toute la range l'utilisant. Que 58,3 % de la range adverse n'ait pas pairé aide, mais ne le lis pas comme « 58,3 % se couchent » ; le nœud de réponse n'est pas dans cette résolution.

**Q. Qu'est-ce que signifie être polarisé au poker ?**

A. Être polarisé, c'est avoir une range faite uniquement de mains très fortes et de mains sans rien, avec le milieu absent. Ici, la grosse blinde a 43,4 % de surpaires et 48,2 % de hauteur As, avec presque rien entre les deux. Sans mains moyennes à faire payer, il n'y a plus de raison de garder un petit sizing.

**Q. Pourquoi le 3-betteur n'a-t-il aucun brelan servi ?**

A. Parce que les petites paires servies comme 88, 55 et 22 sont payées ou couchées préflop plutôt que 3-betées. Les neuf combos de brelan servi de ce board sont donc tous chez le bouton. C'est pourquoi l'impression « je domine en pot 3-bet » vacille sur un flop bas.

**Q. Ces chiffres passent-ils tels quels en live ?**

A. Utilise-les comme base quand les conditions correspondent. Si ta range de 3-bet mélange des petites paires servies ou des connecteurs assortis, la composition sur ce board change, et la répartition des sizings avec elle. Le rake n'est pas modélisé dans le calcul.
`.trim(),
};

export default POST;
