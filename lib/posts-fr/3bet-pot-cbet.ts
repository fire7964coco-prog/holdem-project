import type { Post } from "../posts";

/*
 * fr ⑧ 3bet-pot-cbet — source : EN lib/posts-en/3bet-pot-cbet.ts (updated 2026-10-02, hash a54b5f3d)
 * Copie et H2/FAQ : docs/fr-lanes/gto-brief.md section ⑧ (Fable 2026-10-07, verbatim).
 * Mots-clés : spr poker (210, ce billet en est le propriétaire), spr poker c'est quoi (autocomplétion), pot 3-bet.
 * Limites connues : images encore en -en.webp (variantes -fr à générer) ; le check 0,0 % est la valeur affichée (résidu brut conservé dans le texte).
 */
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "Personne ne checke ce flop",
  seoTitle: "Personne ne checke ce flop — SPR poker, l'effet d'un SPR 4",
  desc: "Dans ce pot 3-bet, les 63 combos misent, tous. Pas parce que la range est forte : le caller n'a plus ni AA ni KK, et un SPR de 4 ne laisse rien à reporter.",
  tldr: "Sur A♦K♠2♥ dans un pot 3-bet, la grosse blinde mise toute sa range : le check arrondit à 0,0 %, et aucun des 63 combos ne checke ne serait-ce que 0,1 % du temps. Dans les sept spots précédents, son réflexe était de checker, entre 76,2 % et 99,9 % du temps. Ce qui a basculé, c'est surtout l'action préflop : la grosse blinde a 3-bet au lieu de suivre, donc elle possède le haut de ce flop, pendant que le bouton a 4-bet ses paires d'as et de rois hors de sa range. Et avec un SPR de 4,0, il n'y a plus de street ultérieure à qui reporter la décision.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-en.webp",
  imageAlt: "Résultats du solver HoldemMaster dans un pot 3-bet sur un flop hauteur As : toute la grille 13x13 de la grosse blinde colorée pour la mise, check affiché à 0,0 %",
  tags: ["spr poker", "spr poker c'est quoi", "stack effectif poker", "spr definition poker", "pot 3-bet", "c-bet pot 3-bet"],
  content: `
Dans les sept spots précédents, la réponse de la grosse blinde (BB) était presque toujours de checker. Même sur le [flop 9-8-7](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), là où miser en premier comptait le plus, elle ne misait que 23,7 % du temps. Partout ailleurs, elle checkait entre 88,8 % et 99,9 % du temps.

Ici, elle fait l'inverse : **la grosse blinde mise toute sa range**, les 63 combos, chacun au moins 99,9 % du temps.

Ce qui a changé, c'est surtout l'action préflop : la grosse blinde a **3-bet** au lieu de suivre, donc le pot fait 22,5bb au lieu de 5,5bb. (⚠ Le board a bougé aussi : le spot ① était A♥7♦2♣, celui-ci est A♦K♠2♥. Ce n'est donc pas une comparaison contrôlée où le préflop serait la seule variable.) Cette différence retourne tout le flop. Tous les chiffres ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | La BB 3-bet → le BTN paye (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pot · stack | Pot 22,5bb · stack effectif 89bb · **SPR 4,0**
Résultat | La BB mise 100 %, le check est à 0,0 %
:::

> **Réponse rapide**
> La grosse blinde mise toute sa range. Le petit sizing (7,4bb, 33 % du pot) est utilisé 57,8 % du temps et le gros (14,9bb, 66 %) 42,2 %. Ce n'est pas parce que chaque main est forte : 38,1 % de la range est une paire servie sous le roi. C'est parce que **le bouton (BTN) a 4-bet ses paires d'as et de rois avant le flop**, donc le haut de ce board appartient à un seul joueur, et avec un SPR de 4,0, il n'y a plus de street ultérieure pour laquelle garder un check.

## Quelles conditions ont produit ces chiffres ?

★**Les conditions sont différentes de celles des sept premiers spots.** Le pot, le stack et les rôles ont tous changé, donc le tableau d'abord.

| Réglage | Ce spot (pot 3-bet) | ①–⑦ (pot simplement relancé) |
|---|---|---|
| Préflop | Le BTN ouvre → **la BB 3-bet à 11bb** → le BTN paye | Le BTN ouvre à 2,5bb → la BB paye |
| OOP (parle en premier) | **BB, le 3-betteur** | BB, le caller |
| IP | BTN, le caller | BTN, l'ouvreur |
| Pot | **22,5bb** | 5,5bb |
| Stack effectif | **89bb** | 97,5bb |
| **SPR** | **4,0** | 17,7 |
| Bet sizes | Environ 1/3 et 2/3 du pot | Environ 33 % et 75 % (⑦ n'avait qu'un sizing) |
| Rake | Sans rake | Sans rake |
| Vérifié le | 2026-08-20 | 2026-08-20 |

Le pot de 22,5bb, c'est ==11 de 3-bet + 11 de call + les 0,5bb de la petite blinde couchée==, et le stack effectif est de ==100 − 11 = 89bb==.

## La fréquence de check est-elle vraiment de 0 % ?

**0,0 % à l'écran.** La sortie brute contient bien un résidu : 41 des 63 combos portent une infime part de check, la plus grande étant K♥K♦ à 0,09 %, le tout faisant moins d'un centième de combo. C'est du bruit de solver, pas une stratégie, donc lis-le comme zéro. La mise se partage plutôt entre deux sizings : 57,8 % prend le petit, à 7,4bb, et 42,2 % le gros, à 14,9bb. Sur les sept pots simplement relancés précédents, le réflexe par défaut de la grosse blinde était l'inverse dans chacun d'eux.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Bet 7,4bb (33 % du pot) | **57,8 %** | 36,6 |
| Bet 14,9bb (66 % du pot) | 42,2 % | 26,4 |
| Check | **0,0 %** | **0,0** |

(Les pourcentages du solver et ses nombres de combos sont agrégés différemment et ne se divisent pas exactement : ==36,6 ÷ 63 = 58,1 %== contre les 57,8 % affichés. **Les valeurs ci-dessus sont citées telles que le panneau les affiche.** Le résultat de 0 combo n'est pas affecté.)

Un 0,0 % ne veut pas dire que le check est interdit. Il veut dire que **l'EV du check de chaque combo est sortie inférieure à son EV de mise dans cet arbre, avec ces ranges.**

Dans les spots précédents, l'action perdante gardait encore une miette : 0,2 %, 0,1 %. Ici, le check n'a même pas ça.

## Pourquoi pas un seul combo ne checke-t-il ?

**Parce que la grosse blinde possède le haut de ce board sans partage.** Trois mains font un brelan servi (set) sur A-K-2, et elle en détient deux sur trois. Quand le joueur qui doit parler en premier détient aussi la meilleure main bien plus souvent, il n'y a rien qu'un check protège qu'une mise ne protège mieux. Le tableau par catégorie montre jusqu'où ça va.

| Catégorie | BB (OOP) | Combos | BTN (IP) | Combos |
|---|---|---|---|---|
| Brelan servi (set) | **9,5 %** | 6 | 2,3 % | **3** |
| Double paire | **14,3 %** | 9 | 6,9 % | 9 |
| Top paire (un as) | **33,3 %** | 21 | 20,8 % | 27 |
| Deuxième paire (un roi) | 4,8 % | 3 | **11,5 %** | 15 |
| Underpair | 38,1 % | 24 | **46,2 %** | 60 |
| Pas de main faite | **0,0 %** | **0** | 12,3 % | 16 |

(À l'écran, la grosse blinde n'a aucune ligne « Pas de main faite » : une catégorie à 0 % n'est pas affichée.)

Regarde la première ligne. **Trois mains font un brelan servi sur A-K-2, AA, KK et 22, et le bouton ne détient que la dernière.** (Le panneau du solver nomme cette ligne *Set/Brelan*. Sur un board sans paire, une paire servie qui correspond à une carte du board est un **brelan servi (set)** ; la distinction est expliquée dans le [spot du board pairé](/fr/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp").) Le bouton 4-bet ses paires d'as et de rois avant le flop, donc il a trois combos de brelan servi contre six pour la grosse blinde.

C'est tout le spot. Quand ton adversaire ne peut presque pas avoir la meilleure main, tu peux miser avec les parties de ta range qui ne sont pas fortes du tout, et 38,1 % de cette range est une paire servie *sous* le roi.

**« Pas de main faite : 0,0 % » n'est pas la raison, même s'il est facile de le croire.** La même range de 3-bet sur un board bas dit le contraire : sur le [flop 8-5-2](/fr/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp") plus loin dans cette série, 48,2 % de la range de la grosse blinde est hauteur As sans aucune paire, et elle ne checke pourtant que **2,0 %**. Passer de 0 % d'air à 48 % d'air ne déplace le check que de deux points. Ce qui fait apparaître un check, ce n'est pas la quantité d'air que tu tiens ; c'est le fait que le board se retourne contre le 3-betteur.

:::note[⚠ C'est l'image inversée du [flop hauteur As en pot simplement relancé](/fr/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). Là-bas, c'était la grosse blinde qui était **plafonnée** (pas d'AA, d'AK ni d'AQ, parce qu'elle les aurait 3-bet), et elle checkait 98,2 %. Même texture hauteur As, sièges opposés : le joueur qui a 3-bet est celui qui garde le haut.]:::

## Le SPR au poker, c'est quoi ?

**SPR est l'abréviation de stack-to-pot ratio : le stack effectif divisé par le pot au début du flop.** Ici, il vaut ==89 ÷ 22,5 = 4,0==, donc le stack restant ne fait que quatre fois ce qui est déjà au milieu. C'est ce chiffre qui transforme une décision au flop en décision sur tout le stack, parce qu'il n'y a plus assez de marge pour repousser la question.

| Situation | Pot | Stack effectif | SPR |
|---|---|---|---|
| Pot simplement relancé (①–⑦) | 5,5bb | 97,5bb | **17,7** |
| Pot 3-bet (celui-ci) | 22,5bb | 89bb | **4,0** |

Ce chiffre compte parce qu'il te dit **combien de mises il reste**, pas combien d'argent il reste. Prends le sizing de 66 % que le solver propose ici et déroule-le street par street :

- Flop **14,9bb** → payé, le pot fait 52,3bb et il reste 74,1bb
- Turn (le tournant) **34,5bb** → payé, il reste 39,6bb
- River (la rivière) **39,6bb** à tapis

**Trois mises et c'est fini : ==14,9 + 34,5 + 39,6 = 89,0==.** Deux mises t'amènent à 49,4bb, soit 55,5 % du stack, pas la totalité. Si tu veux que les trois mises tombent pile sur le tapis avec la même fraction à chaque street, cette fraction est ==environ 54 % du pot==.

Joue les trois mêmes mises dans un pot simplement relancé et tu as dépensé ==3,67 + 8,56 + 19,96 = 32,2bb==, un tiers du stack. **Voilà la vraie différence entre un SPR de 17,7 et un SPR de 4,0** : pas l'argent, le nombre de décisions qu'il te reste à prendre. Et quand il n'y a plus de street ultérieure à qui reporter la décision, un check n'a plus rien à acheter.

## Pourquoi le petit sizing est-il utilisé plus souvent ?

**À cause de la forme de la range, pas de la profondeur du stack.** Les 63 combos sont tous une paire ou mieux, donc **le bas de la range a entièrement disparu** et elle ne se sépare jamais en « nuts ou rien ». Sans air à associer au gros sizing, toute la range est poussée vers le petit, et c'est pour ça que 57,8 % partent à un tiers du pot. (« Condensée » est l'étiquette habituelle pour une range sans bas *ni* haut ; elle ne convient pas ici, parce que cette range possède le haut du board sans partage : les deux meilleurs brelans servis, AA et KK, les six combos.)

A-K-2 rainbow ne donne presque rien à tirer, donc il n'y a pas non plus besoin de faire payer un tirage. Entre les deux, c'est la forme de la range qui fait le travail.

⚠ **« Stacks courts, donc petites mises », ce n'est pas ça.** Deux spots plus loin dans cette série ont exactement le même SPR de 4,0 et envoient le *gros* sizing presque toujours : Q-10-7 à **98,4 %** et [8-5-2](/fr/blog/3bet-pot-low-board) à **97,8 %**, pour deux raisons différentes. Q-10-7 est un board humide, donc c'est une grosse mise qui met un prix sur les tirages. 8-5-2 est sec comme celui-ci, mais sa range se sépare en overpairs et hauteur As avec presque rien entre les deux, et une forme polarisée mise gros. Même profondeur de stack, sizing opposé, et aucune des deux raisons n'est la profondeur.

**Et le gros sizing n'est pas non plus « la part des mains fortes ».** Compte les combos qui peuvent mettre tout un stack (brelans servis, doubles paires et top paires) et tu obtiens ==6 + 9 + 21 = 36 combos, 57,1 %==, ce qui est plus que les 42,2 % qui misent gros.

L'indice, c'est que **les nombres de combos ne sont pas entiers** : 26,4 en gros et 36,6 en petit. Si des catégories entières étaient assignées à un seul sizing, les deux nombres seraient entiers. **La même main se mélange entre les deux sizings**, et 42,2 % veut dire « 42,2 % de la range », pas « un étage précis ». Rendre le sizing illisible, c'est justement le but.

## Qu'a vraiment le bouton en main ?

**Près de la moitié de sa range de call, 46,2 %, est une paire servie sans as ni roi**, donc il fonce droit sur un board qui a les deux.

![Composition des ranges dans un pot 3-bet sur un flop hauteur As : la grosse blinde détient tous les combos de brelan servi tandis que la range du bouton se concentre sur les paires moyennes](/images/gto-3bp-ace-king-ranges-en.webp "Pot 3-bet A-K-2 · la grosse blinde garde le haut du board tandis que la range du bouton se tasse au milieu")

Les underpairs font 46,2 %, soit 60 combos : de QQ à 33, dix paires à six combos chacune. Elles ne peuvent pas payer deux barrels sur cette texture.

Une réserve à nommer : ces 130 combos sont la **range de call qu'on a donnée à ce calcul**, un réglage préflop écrit dans l'arbre, pas une défense que le solver a trouvée. Les vrais adversaires couchent les paires servies moyennes et payent plutôt avec A-Q, A-J et K-Q. Face à ce joueur, les 46,2 % ne sont pas là, donc regarde avec quoi ton adversaire a vraiment payé avant d'emporter ces chiffres dans une vraie partie.

## Comment le bouton répond-il à un c-bet d'un tiers du pot ?

**C'est un spot difficile à payer jusqu'au bout.** Les underpairs du bouton ont à la fois l'as et le roi au-dessus d'elles, et avec un SPR de 4,0, il ne reste plus beaucoup de distance avant que le stack ne parte.

⚠ Savoir *laquelle* des mises part à tapis dépend du sizing. Aux deux tiers, c'est 14,9 → 34,5 → 39,6, exactement trois. Avec la mise de **7,4bb (un tiers)** dont parle cette section, trois mises font ==7,4 + 12,3 + 20,4 = 40,1bb==, seulement 45 % du stack. Et le nœud de la turn n'existe pas dans ce calcul : le spot d'étude s'arrête à la première action au flop, donc tout ce qui suit est lu à partir de la composition des ranges.

Face à 7,4bb dans un pot de 22,5bb, empêcher un pur bluff d'être rentable demande environ ==22,5 ÷ (22,5 + 7,4) = 75,3 %== de la range : c'est la **fréquence de défense minimale (MDF)**. Mais les mains du bouton qui ont vraiment touché A-K-2 ne font au total que ==20,8 + 11,5 + 6,9 + 2,3 = 41,5 %==. 🪶 Note que les 2,3 % de brelans servis, c'est **22** : il a touché le deux, pas l'as ni le roi. En ne comptant que les mains qui ont touché un as ou un roi, on obtient **39,2 %**.

⚠ **Dans ce spot, pourtant, la prémisse de la MDF repose sur une base fragile.** La MDF est la fréquence qui rend indifférent un **pur bluff à équité nulle**, et la range de mise de la grosse blinde contient **0,0 % de « pas de main faite », pas un seul combo.** Une range sans aucune main non pairée laisse peu de purs bluffs comme ceux que la MDF suppose, donc la tendance est plutôt de se coucher **plus**, pas moins. ⚠ Deux réserves gardent ce raisonnement honnête : ① « 0 % de pas de main faite » ne veut pas dire « 0 % de bluffs » ; une underpair faible dans la range de mise peut jouer le rôle d'un bluff ou d'une mise de protection ; ② le nœud de réponse du bouton n'est pas dans ce calcul, donc la vraie fréquence de défense optimale ne peut pas être confirmée ici. Ne lis donc pas les 41,5 % comme « donc continue avec les paires servies moyennes ». Que le petit sizing donne même un prix suffisant à ces 60 combos est douteux : contre toute la range de la grosse blinde, seules QQ et JJ dépassent les 19,8 % qu'il demande, alors que de 99 à 33 elles sont à 7,6 %–9,2 %. Dans tous les cas, la raison du sizing est la **forme de la range** vue dans la section précédente ; ceci n'est qu'un effet secondaire.

:::note[⚠ La MDF simplifie la mise en pur bluff. Elle n'a de sens que si l'adversaire a vraiment des bluffs : quand la range de mise est une paire ou mieux jusqu'en bas, comme ici, l'hypothèse du pur bluff repose sur une base fragile et le chiffre n'est qu'un repère grossier. En pratique, pèse aussi la tenue d'une main sur les streets suivantes.]:::

## Pourquoi l'EQR atteint-il 109,6 % alors que la grosse blinde est hors de position ?

**Parce qu'un avantage de range assez grand l'emporte sur la position.** C'est le premier spot de la série où le joueur hors de position (OOP) réalise plus que son équité : 68,9 % contre 31,1 %, c'est un écart d'un autre ordre que dans les pots simplement relancés, où le joueur hors de position tournait entre **45,1 % et 48,5 %** contre **51,5 % et 54,9 %**.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | **68,9 %** | 31,1 % |
| EV (bb) | 16,99 | 5,51 |
| **Réalisation d'équité** | **109,6 %** | 78,7 % |

Dans un pot de 22,5bb, 68,9 % d'équité valent ==22,5 × 68,9 % = 15,50bb==. La grosse blinde encaisse en réalité **16,99bb**, et ==16,99 ÷ 15,50== est sa réalisation d'équité : **109,6 %**.

:::pull[La position amplifie un avantage. Elle n'en fabrique pas.]:::

Les 78,7 % du bouton (en position, IP) n'en sont pas une preuve à part : c'est le même fait vu de l'autre côté, puisque les deux EV s'additionnent pour faire le pot, donc la réalisation d'un joueur qui passe au-dessus de 100 % force celle de l'autre en dessous. Ce qui vaut le coup d'œil, c'est la taille de l'écart. Sur ①–⑦, le joueur hors de position réalisait entre **77,9 % et 93,2 %** ; ici il dépasse 100 %, parce que tout ce que le bouton couche atterrit dans le stack de la grosse blinde. Pourquoi la position vaut d'habitude de l'argent est expliqué dans [le jeu de position](/fr/blog/holdem-position-play).

## Qu'est-ce que ça change à la table ?

- **Arrête de te demander s'il faut faire un c-bet (mise de continuation) dans un pot 3-bet, mais seulement en heads-up.** Sur un board sec hauteur As où le 3-betteur détient le haut, toute la range mise, et la seule question est le sizing. Si un cold-caller suit et que trois joueurs voient le flop, « tout miser » n'est plus vrai ; retire d'abord les underpairs pour chaque joueur en plus.
- **Compte ton SPR avant que le flop tombe.** Un pot plus gros veut dire moins de mises restantes, pas moins d'argent. **Un SPR de 4, c'est la zone où trois grosses mises finissent le stack** : il n'y a pas de quatrième. Compte les mises qu'il te reste, puis choisis le sizing.
- **★Miser toute la range n'est pas la même chose que mettre tout son stack avec toute la range.** 38,1 % de ce qui mise ici est une paire servie sous le roi. Même à l'intérieur de ce groupe, ça se sépare : QQ bat plus de la moitié de la range de call du bouton et c'est une main avec laquelle checker la turn, alors que TT et 99 sont les premières à partir quand une relance arrive.
- **★La top paire se sépare selon le kicker.** Ces 21 combos comprennent **A5s et A4s**, des mains 3-bet comme bloqueurs, avec le pire kicker possible. La range qui paye 89bb est étroite : **22 et A-K en son cœur**, avec une top paire forte comme A-Q en plus selon l'adversaire. **A-4 n'en bat aucune.** Les brelans servis (AA, KK) les battent toutes. **A-K est entre les deux** : il partage avec l'A-K du bouton et perd contre 22, donc « SPR 4, donc tout part au milieu » ne tient sans condition que pour **AA et KK** ; savoir si A-K en fait partie dépend de la largeur avec laquelle l'adversaire paye.
- **★Si le flop est relancé, la main se joue là, sur-le-champ.** Avec un SPR de 4, une relance engage le reste du stack. Ce n'est pas un spot pour payer et voir la turn : décide sur place entre tapis et se coucher. Les brelans servis partent à tapis, les underpairs basses et les top paires à kicker faible penchent vers le fold. ⚠ C'est une ligne tirée du SPR et des classes de mains, pas une sortie du solver : cet exemple n'a pas de nœud face à une relance, donc les frontières exactes entre tapis, call et fold ne peuvent pas être confirmées. La double paire (A-K) dépend de la largeur de la relance : contre une range de relance faite de brelans servis et d'A-K, elle n'est jamais devant.
- **N'emporte pas « check 0 % » dans tous les pots 3-bet.** Ce qui le change, c'est le board plus que la range : la même range de 3-bet sur [8-5-2](/fr/blog/3bet-pot-low-board) checke 2,0 %, et sur un board qui tourne contre le 3-betteur, un vrai check apparaît. **C'est « un as et un roi ensemble » qui a produit ce zéro dans cet exemple, pas une condition que chaque pot 3-bet doit remplir.** Comment construire la range de 3-bet au départ est expliqué dans [la stratégie de 3-bet](/fr/blog/holdem-3bet).

:::readnext[À lire ensuite]
/fr/blog/low-board-check-raise | Aucune des deux ranges n'a de quinte ici | /images/gto-srp-low-rainbow-oop-en.webp
/fr/blog/paired-board-strategy | Tu as plus de brelans (trips) et tu checkes quand même 97 % | /images/gto-srp-paired-oop-en.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), puis va dans **Spots d'étude → Board A-high, avantage du 3-betteur → [⚡ Voir les résultats]**.

Regarde d'abord l'en-tête : **Pot 22,5bb · Stack 89bb**. Voir ces valeurs au lieu des 5,5bb et 97,5bb des spots précédents, c'est tout cet article en un coup d'œil. Cherche ensuite la ligne qui n'est pas là : le panneau « Mains / Tirages » ne liste que **cinq** catégories de mains pour la grosse blinde, et celle qui manque est « Pas de main faite ». Au-dessus, dans la barre d'actions, la puce Check affiche **0,0% / 0,0 combos**.

Ouvre ensuite le **Trainer GTO** dans la barre latérale : il te distribue une main selon les vrais poids de la range et montre combien de grosses blindes ton action te coûte (**Perte d'EV**). Gratuit, rien à installer, sans compte.

## FAQ

**Q. Que veut dire SPR au poker ?**

A. C'est l'abréviation de stack-to-pot ratio. Ce qu'il mesure en pratique, c'est combien de mises il reste plutôt que combien de jetons : le même stack de 100bb te donne 4,0 ici et 17,7 dans un pot simplement relancé, et ces deux chiffres ne se jouent pas du tout pareil. Lis-le comme le nombre de décisions qui t'appartiennent encore.

**Q. Combien de mises peut-on faire avec un SPR de 4 ?**

A. Trois, et la troisième est à tapis. Deux tiers du pot au flop et à la turn donnent 14,9 → 34,5bb, et les 39,6bb restants font environ un tiers du pot de la river, donc la troisième mise est exactement le reste du stack de 89bb. Arrête-toi après deux et tu as mis 49,4bb, un peu plus de la moitié. Choisis un sizing plus gros et tu y arrives en deux, et c'est tout l'enjeu : le sizing que tu choisis décide combien de décisions t'appartiennent encore.

**Q. Le 3-betteur doit-il toujours c-bet ?**

A. Sur ce board, oui : le solver checke 0,0 %. Mais la condition tient au board plus qu'à la range : la même range de 3-bet sur 8-5-2 a 48,2 % de hauteur As et ne checke pourtant que 2,0 %, alors qu'un board qui favorise le caller produit de vrais checks. Ce qui crée ce zéro précis, c'est un as et un roi qui arrivent ensemble, ce qui retire le haut de la range au joueur qui a payé.

**Q. Pourquoi le bouton n'a-t-il ni paire d'as ni paire de rois ?**

A. La range de call de cet exemple ne les contient pas : la plupart des AA et KK partent en 4-bet. C'est un réglage préflop écrit dans l'arbre, pas une chose que le solver a trouvée, et de vrais calculs en gardent parfois quelques-unes dans la range de call pour en protéger le haut. Change ce réglage et la ligne des brelans servis bouge avec.

**Q. Pourquoi le petit sizing est-il plus utilisé que le gros ?**

A. À cause de la forme de la range : les 63 combos sont tous une paire ou mieux, donc le bas a disparu et elle ne se sépare jamais en « nuts ou rien », et une range comme ça mise petit. **Pas parce que le stack est court :** le [spot Q-10-7](/fr/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") a le même SPR de 4,0 et utilise le gros sizing 98,4 % du temps.

**Q. Ces chiffres tiennent-ils à ma limite ?**

A. Utilise-les comme base quand les conditions correspondent. Ce calcul n'autorisait que deux sizings, un tiers et deux tiers du pot, donc dans une partie où les overbets sont en jeu, les fréquences se répartissent autrement. Il en va de même pour une autre range de 3-bet ou une autre profondeur de stack, et aucun rake n'est inclus dans le calcul.
`.trim(),
};

export default POST;
