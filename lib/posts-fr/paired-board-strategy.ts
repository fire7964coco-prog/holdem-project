/**
 * fr · paired-board-strategy (GTO ⑥ · board pairé 6-6-3)
 * Source : EN lib/posts-en/paired-board-strategy.ts (base a54b5f3d · updated 2026-10-02) · brief docs/fr-lanes/gto-brief.md ⑥.
 * Mots-clés : board pairé poker · trips ou set · paired board poker · fréquence de défense minimale.
 * Limites connues : images en version -en (variantes -fr pas encore produites) · « set » jamais seul (SERP shopping).
 */
import type { Post } from "../posts";

export const POST: Post = {
  slug: "paired-board-strategy",
  title: "Tu as plus de brelans (trips) et tu checkes quand même 97 %",
  seoTitle: "Plus de brelans, et 97 % de check — board pairé 6-6-3",
  desc: "Sur 6-6-3, le caller a plus de brelans (trips) que le relanceur, 26 combos contre 20, et checke 97 % quand même. Ce qu'un board pairé récompense vraiment.",
  tldr: "Sur le board pairé bas 6♣6♦3♥, la grosse blinde checke 97,0 %. Le plus étrange : elle a plus de brelans (trips) que le bouton, 26 combos de 6x contre 20. Elle checke quand même, parce que seulement 18,4 % de sa range ont mieux que la paire du board, et les 81,6 % restants sont un duel de cartes hautes que le bouton gagne. Ce qui gagne de la valeur, c'est toute paire servie au-dessus du 6 : TT a 76,0 % d'équité ici.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-fr.webp",
  imageAlt: "Résultats du solver HoldemMaster sur le flop pairé bas 6♣6♦3♥ : la grille de la grosse blinde presque entièrement verte, avec les lignes carré et full dans le panneau",
  tags: ["trips ou set", "board pairé poker", "flop pairé", "paires servies", "fréquence de défense minimale", "paired board poker"],
  content: `
Le flop est **6♣ 6♦ 3♥** : des petites cartes, avec une paire parmi elles. On dirait un board que personne n'a touché.

Avec TT ici, ton équité est de **76,0 %**. Le même TT tourne autour de 54 %–57 % contre AK préflop, donc ce flop lui est *plus favorable* que le flip habituel. Avec A9, tu n'as rien, mais les quatre cinquièmes de la range adverse n'ont rien de plus que la paire du board non plus, donc te coucher tout de suite revient à jeter le pot.

**Un board que personne n'a touché est en réalité un duel entre les cartes hautes de chacun.** Les flops [hauteur As](/fr/blog/a-high-board-cbet) et [hauteur Roi](/fr/blog/k-high-board-cbet) étaient des combats pour savoir qui avait touché le board ; celui-ci oppose deux ranges qui, pour l'essentiel, n'ont rien touché. Tous les chiffres du solver ci-dessous viennent du [solver poker gratuit](/fr/solver) de HoldemMaster ; les probabilités comme les 17,2 % de chances d'un flop pairé relèvent de la simple combinatoire.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | 6♣ 6♦ 3♥ (board pairé bas)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb
Résultat | La BB checke 97,0 %, alors qu'elle a plus de brelans
:::

> **Réponse rapide**
> Checke presque tout, et ne te couche pas simplement parce que tu as raté le board. Avoir un 6 n'est pas une raison de miser en premier (lead) : le lead ne fait coucher que ce que tu bats déjà, donc les 6 restent dans la range de check, et la grosse blinde checke **97,0 %** ici. Les mains qui gagnent vraiment à ce flop sont les paires servies au-dessus du 6, et la hauteur As ne doit pas être un fold automatique face à une seule petite mise ; jusqu'où va exactement la défense optimale, ce spot d'étude ne le montre pas.

## Quelles conditions ont produit ces chiffres ?

Le bouton (BTN) ouvre à 2,5bb, la grosse blinde (BB) paye, et tous les autres se couchent : deux joueurs, un pot de 5,5bb, 97,5bb derrière, des ranges standard en ligne à 100bb, deux sizings disponibles à environ un tiers et trois quarts du pot, et sans rake. Change les ranges ou le sizing, et les fréquences bougent avec eux.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu standard en ligne à 100bb |
| Flop | 6♣ 6♦ 3♥ (board pairé, trois couleurs différentes) |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb |
| Bet sizes | Environ 33 % et 75 % du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-20, résultat du spot d'étude |

## Brelan sur un board pairé : trips ou set ?

**Un brelan servi (set), c'est une paire en main qui touche une carte du board ; un brelan (trips), c'est une seule carte de ta main qui touche une paire déjà au board.** C'est la même combinaison, le brelan, rangée au même endroit dans le [classement des mains](/fr/blog/holdem-hand-rankings), mais les deux se jouent de façon complètement différente.

Sur tous les flops non pairés de cette série, le brelan veut dire brelan servi (l'autre board pairé, A♠A♥6♦, arrive plus tard dans le groupe blind contre blind) : sur A-7-2, la grosse blinde avait besoin de 77 ou 22 en main. Ici, le board apporte sa propre paire, donc **n'importe quel 6 seul fait un brelan (trips)**, et seul 66 en main fait un carré.

| Ta main sur 6♣6♦3♥ | Ce que tu as |
|---|---|
| A6, K6s, 96s … n'importe quel 6 | **Brelan (trips)** : trois 6 |
| 66 | **Carré** |
| 33 | **Full** : full aux 3 par les 6 |
| TT, 99, 88, 77 … | **Double paire** : ta paire plus les 6 du board |

Cette différence compte parce que le brelan (trips) est bien plus fréquent que le brelan servi et que **ton adversaire peut l'avoir tout aussi facilement.** Le brelan servi est rare et c'est en général la meilleure main ; le brelan sur un board pairé est un territoire partagé, et c'est exactement pour ça que le solver ne le traite pas comme un permis de miser.

## Comment la grosse blinde joue-t-elle un flop pairé bas ?

**Check 97,0 %.** Sur 6♣6♦3♥, la grosse blinde ne mise en premier que 3,0 % du temps au total (2,0 % pour 4,1bb et 1,0 % pour 1,8bb) et rend tout de suite l'initiative au joueur qui a ouvert. Ce qui mérite un second regard, c'est lequel des deux sizings elle choisit quand elle mise, parce que c'est le seul flop de la série où la réponse s'inverse.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **97,0 %** | 471,7 |
| Bet 4,1bb (75 % du pot) | **2,0 %** | 9,6 |
| Bet 1,8bb (33 % du pot) | 1,0 % | 4,7 |

**La grosse mise est plus fréquente que la petite**, pour la première fois dans cette série. Sur les deux boards où le lead comptait vraiment, le petit sizing l'emportait à plus de deux contre un : 16,8 % contre 6,9 % sur [le spot de donk bet (ou lead) sur 9-8-7](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-fr.webp"), 8,0 % contre 3,2 % sur le [flop monotone](/fr/blog/monotone-board-strategy). Ici, ça s'inverse, et le tableau main par main plus bas montre pourquoi.

## Pourquoi checker quand tu as plus de brelans ?

**Parce que le brelan ne représente que 5,3 % de la range.** Les 94,7 % restants sont surtout la paire de 6 du board plus une carte haute, et sur cet axe-là, le bouton est devant.

D'abord, le compte. Avec 6♣ et 6♦ au board, il ne reste que 6♠ et 6♥ : chaque main 6x *assortie* fait donc deux combos, et A6 dépareillé en fait six. Toute la catégorie passe par seulement deux cartes.

| Main 6x | BB (range de call) | BTN (range d'ouverture) |
|---|---|---|
| A6 (assorti + dépareillé) | ✅ 8 combos | ✅ 8 combos |
| K6s · Q6s | ✅ 4 combos | ✅ 4 combos |
| **J6s · T6s · 96s** | ✅ **6 combos** | ❌ hors de la range d'ouverture |
| 86s · 76s · 65s · 64s | ✅ 8 combos | ✅ 8 combos |
| **Total** | **26 combos = 5,3 %** | **20 combos = 4,0 %** |

**La différence, c'est J6s, T6s et 96s : six combos.** La grosse blinde les défend à bon prix ; le bouton ne les ouvre jamais.

Maintenant, élargis le regard, et le tableau s'inverse.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board pairé bas](/images/gto-srp-paired-ranges-fr.webp "6♣6♦3♥ · répartition par catégorie : les brelans favorisent le caller, mais la double paire et la hauteur As favorisent l'ouvreur")

| Catégorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Carré (66) | 0,2 % | 0,2 % |
| Full (33) | 0,6 % | 0,6 % |
| Brelan (un 6) | **5,3 %** | 4,0 % |
| Double paire | 12,3 % | **15,5 %** |
| Hauteur As | 26,3 % | **31,9 %** |
| Hauteur Roi | **16,5 %** | 15,1 % |
| Pas de main faite | **38,7 %** | 32,7 % |

**Tout ce qui dépasse la paire du board représente 18,4 % pour la grosse blinde et 20,3 % pour le bouton.** Les **81,6 %** restants de la range de la grosse blinde sont la paire de 6 du board plus une carte haute, et c'est le bouton qui gagne ce duel, avec sa hauteur As à 31,9 % contre 26,3 %.

Miser en premier là-dedans échoue des deux côtés : avec un 6, tu ne fais coucher que les mains que tu bats déjà, et avec tout le reste, tu affiches une range qui ne supporte pas une relance. Les 6 restent donc plutôt dans la range de check.

## L'équité fait 47 contre 53, alors pourquoi l'EQR fait 84 contre 115 ?

**Parce que le board touche les deux ranges de la même façon, mais que les deux joueurs n'encaissent pas de la même façon.** Sur 6-6-3, presque tout le monde a la paire de 6 du board et rien d'autre, ce qui garde l'équité brute serrée. Ce que chacun empoche réellement n'est pas serré du tout.

| | Grosse blinde (OOP) | Bouton (IP) |
|---|---|---|
| Équité | 47,2 % | 52,8 % |
| EV (bb) | 2,17 | 3,33 |
| **EQR (réalisation d'équité)** | **83,7 %** | **114,5 %** |

La part du pot de la grosse blinde, hors de position (OOP), vaut ==5,5 × 47,2 % = 2,60bb==, et elle encaisse 2,17bb : ==2,17 ÷ 2,60 ≈ 83,7 %==. La part du bouton, en position (IP), est de 2,90bb contre 3,33bb d'EV, donc il encaisse **114,5 %**, plus que ce que vaut son équité.

L'écart de **30,8 points** est presque exactement les 29,1 points du [board sec hauteur As](/fr/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-fr.webp"). **Un board pairé se joue comme un board sec** : les quatre cinquièmes de chaque range sont la même paire de 6 avec une carte haute différente, donc le coup se déroule sans bruit, et le joueur qui parle en dernier voit quelle carte haute est arrivée avant de choisir. Cet avantage, c'est tout l'écart.

:::note[Chaque EQR de cette série est la valeur affichée par le solver. En divisant toi-même l'équité et l'EV arrondies, tu tombes à quelques dixièmes de point près : c'est de l'arrondi, pas une incohérence.]:::

## Que valent les paires servies sur 6-6-3 ?

**Presque toutes les paires servies font double paire ici.** TT fait 10-10-6-6-3. Les deux qui cassent le schéma sont celles qui correspondent au board : 66 fait carré, 33 fait full.

| Main | Équité | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76,0 % | 6,66 | 159,4 % | 97,7 % |
| 99 | 72,6 % | 5,68 | 142,4 % | 96,1 % |
| 88 | 69,9 % | 4,96 | 128,9 % | 94,8 % |
| 77 | 68,5 % | 4,63 | 123,0 % | 94,7 % |
| 55 | 63,7 % | 3,82 | 108,9 % | 93,8 % |
| 44 | 61,8 % | 3,42 | 100,5 % | 93,9 % |
| 22 | 50,4 % | 1,83 | 66,0 % | 95,8 % |

(Moyennes sur les six combos de chaque main ; les combos individuels varient d'environ un dixième de point.)

**TT à 76,0 % est le haut de la range de la grosse blinde** une fois mis de côté les 6, 33 et 66, parce que JJ et mieux font un 3-bet préflop et ne voient jamais ce flop.

**Mais le bas s'effondre.** 44 réalise exactement sa part d'équité (EQR 100,5 %) et rapporte quand même 3,42bb contre 2,17bb en moyenne pour la range : ce n'est donc pas une main marginale. 22 est celle qui casse : 50,4 % d'équité, EQR 66,0 %, 1,83bb.

**La ligne de partage, c'est le 3, pas le 6.** 55 et 44 sont tous deux sous le 6 et réalisent quand même toute leur part. Un 2 est sous *les deux* rangs du board, donc il perd contre 33, contre toute main qui a un 3, et un deuxième 3 à la turn (le tournant) ou à la river (la rivière) le contrefait jusqu'à jouer le board : sur 6-6-3-3-K, 22 n'est que la double paire du board (seul un 2 sur l'autre street le sauve). La règle qui tient vraiment n'est pas « les petites paires vont bien sur les boards bas » mais **« toute paire au-dessus du 3 va bien ; les 2 sont les seuls qui cassent ».**

Un groupe de plus compte comme double paire, et il est facile à oublier : **toute main avec un 3.** A3 joue 6 et 3 avec un As, ce qui bat 22 et perd contre toute paire au-dessus du 3.

## Combien de carrés et de fulls y a-t-il vraiment dans les ranges ?

**Un combo de carré, trois combos de full.** Tu peux compter les deux à la main.

- **Carré (66)** : avec 6♣ et 6♦ au board, la seule combinaison restante est ==6♠6♥==. 0,2 % de 486 combos donne 1,0, et le tableau main par main a exactement une ligne.
- **Full (33)** : avec 3♥ au board, il reste ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0,6 % × 486 = 2,9.

63 fait aussi un full, mais ni 63 assorti ni 63 dépareillé n'est dans l'une ou l'autre range, **donc 33 constitue à lui seul toute la catégorie full** sur ce flop.

Ces quatre combos expliquent pourquoi les boards pairés paraissent dangereux. Ouvre le tableau main par main et lis la colonne EQR : 6♠6♥ réalise **359,7 %** de sa part d'équité (19,78bb d'EV), et les trois 33 font **309,8 %, 309,8 % et 309,5 %**, soit trois à quatre fois leur part du pot. C'est rare, mais quand l'un d'eux tombe, les stacks partent au milieu.

## Pourquoi la grosse mise est-elle plus fréquente que la petite ?

**Parce que les brelans et le carré choisissent le gros sizing quand ils misent.** Main par main :

| Main | Bet 4,1bb (75 % du pot) | Bet 1,8bb (33 % du pot) | Check |
|---|---|---|---|
| K♠6♠ | **7,8 %** | 0,3 % | 92,0 % |
| Q♥6♥ | **7,9 %** | 0,7 % | 91,5 % |
| J♥6♥ | **9,0 %** | 3,3 % | 87,7 % |
| 6♠6♥ (carré) | **9,6 %** | 0,0 % | 90,4 % |
| 10♠10♥ (double paire) | 0,8 % | 1,7 % | 97,5 % |

Les brelans et le carré prennent bien le petit sizing de temps en temps (K♠6♠ 0,3 %, Q♥6♥ 0,7 %, J♥6♥ 3,3 %), mais le gros sizing représente plusieurs fois ça. La seule ligne à 0,0 % tout rond est 6♠6♥, et **c'est un carré, pas un brelan.** Une double paire comme TT mise à peine, et quand elle le fait, elle choisit le petit.

Tout dépend de ce avec quoi l'adversaire peut payer. Un 6 est presque imbattable ici, donc l'objectif est de construire un pot, et comme la plupart des 6 checkent de toute façon, **les rares qui misent ont toutes les raisons de miser gros.** La double paire est derrière chaque 6 et les trois 33, donc elle n'a aucun intérêt à un gros pot. La classe qui veut un gros pot refuse le petit sizing ; la classe qui veut seulement être payée refuse le gros.

⚠ **Ne lis pas ça comme « plus le kicker est bon, plus la mise est grosse » : le tableau va dans l'autre sens.** La fréquence de grosse mise va K♠6♠ 7,8 % < Q♥6♥ 7,9 % < **J♥6♥ 9,0 %** : c'est le kicker le plus faible qui mise le plus. Les bloqueurs de brelan ne l'expliquent pas non plus. Le 6 que tu tiens, quel qu'il soit, retire les brelans du bouton de sa propre enseigne (K♠6♠, Q♥6♥ et J♥6♥ laissent chacun au bouton exactement 10 de ses 20), et le kicker ne retire rien de plus, parce que le bouton n'ouvre K6 et Q6 qu'assortis et que ton 6 a déjà pris cette enseigne. Le tableau montre le mélange calculé ; il n'isole pas la cause d'un écart aussi petit.

Et les 6 ne représentent pas la majorité des grosses mises. Ils font 26 des 486 combos et contribuent environ 1,2 des quelque 9,6 combos de grosse mise, à peu près un huitième (13,0 %). L'essentiel du reste vient de mains sans aucun 6.

La grosse blinde ne mise en premier que 3,0 % du temps, donc tu croiseras rarement ça à la table. C'est pourtant une démonstration nette d'un principe : **le sizing est choisi par la range, pas par la main.**

## Faut-il se coucher avec hauteur As face à un [c-bet](/fr/blog/holdem-continuation-bet) ?

**Bien moins souvent que ce que ton instinct te dit.** Seulement 18,4 % de ta range ont mieux que la paire du board, donc te coucher avec tout le reste revient à donner le pot.

Face à une mise de 1,8bb dans 5,5bb, empêcher un pur bluff d'être rentable demande de continuer environ ==5,5 ÷ (5,5 + 1,8) = 75,3 %== du temps. Cette estimation s'appelle la **fréquence de défense minimale (MDF)**.

Ajoute toutes les hauteurs As (26,3 %) et toutes les hauteurs Roi (16,5 %) à ces 18,4 %, et tu n'es encore qu'à **61,2 %**, en dessous de 75,3 %.

⚠ **N'en conclus pas « donc je dois défendre plus ».** La MDF traite la mise adverse comme un pur bluff à équité nulle, mais un bluff au flop a encore deux streets à venir, donc il a de l'équité. Et le joueur hors de position réalise mal son équité. ⚠ Ce que ce spot d'étude ne peut pas te dire, c'est où se trouve le vrai optimum : il n'est résolu **que jusqu'à la première action du flop**, donc la réponse de la grosse blinde à une mise n'y figure pas, et savoir si la défense optimale tombe au-dessus ou en dessous de la MDF **ne peut pas se lire dans ce matériel.**

Ce calcul ne sert donc pas à « atteindre 75 % » mais à **« ne pas te coucher sur la force d'une seule carte haute ».** Beaucoup de hauteurs As et de hauteurs Roi restent des calls ici, et les coucher toutes face à un seul petit c-bet (mise de continuation), c'est exactement l'habitude qui se fait exploiter.

(Sur un board pairé, personne n'est littéralement à hauteur As : tu as toujours la paire de 6 du board. « Hauteur As » veut dire ici cette paire avec un As comme meilleure carte.)

:::note[La MDF simplifie la mise adverse en pur bluff. En pratique, la bonne fréquence dépend aussi de la façon dont ta main réalise son équité sur les streets suivantes ; prends-la donc comme point de départ plutôt que comme règle stricte. Le versant cotes du pot du même calcul se trouve dans [cotes du pot](/fr/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), et la [défense contre le 3-bet](/fr/blog/holdem-3bet) applique la même formule préflop.]:::

## Qu'est-ce que ça change à la table ?

- **Ne sous-estime pas les paires servies moyennes sur les boards pairés bas.** De 77 à TT, elles ont 68 %–76 % d'équité ici, le haut de la range de call. Mais le plancher existe : 44 et 55 battent encore la moyenne de la range, tandis que 22 ne garde que les deux tiers de ce que vaut son équité, parce qu'il fait paire sous les deux rangs du board.
- **Flopper un brelan (trips) n'est pas une raison de miser en premier.** Les 6 font un lead à 6,8 % (plus que n'importe quelle double paire ou main à carte haute, moins seulement que les fulls 33 à 8,8 % et l'unique combo de carré à 9,6 %), et ils checkent quand même neuf fois sur dix. Le lead ne fait coucher que les mains que tu bats déjà ; le check laisse ces mains mettre l'argent elles-mêmes, et te laisse un check-raise ou un call jusqu'au bout. ⚠ Ce que ce calcul ne peut pas te dire, c'est *combien* la ligne de check-raise rapporte de plus : le spot d'étude ne résout **que la première action du flop**, donc la fréquence de c-bet du bouton et l'EV d'un éventuel check-raise n'y existent tout simplement pas.
- **Ne te couche pas avec hauteur As face à une seule petite mise.** 79,7 % de la range du bouton n'ont rien de plus que la paire du board non plus : hauteur As 31,9 %, hauteur Roi 15,1 % et pas de main faite 32,7 %.
- **C'est ton kicker qui décide du coup.** Seuls trois combos battent directement le brelan : les trois fulls 33. (Le carré est hors jeu : dès que tu tiens toi-même un 6, 6♠6♥ ne peut pas exister, donc les quatre combos comptés dans la section full deviennent trois depuis ton siège.) Et ça ne vaut que si ton kicker est un As. Le deuxième kicker est fixé par le 3 du board, donc la seule carte à côté de ton 6 est toute ta main : avec 76s, les A6, K6, Q6 et 86 du bouton te dominent tous. Un brelan avec un kicker faible est un bluff-catcher, pas une main pour construire un pot.

:::readnext[À lire ensuite]
/fr/blog/monotone-board-strategy | La couleur max qui checke sept fois sur dix | /images/gto-srp-monotone-oop-fr.webp
/fr/blog/donk-bet-strategy | Le flop où le donk bet est juste : 9-8-7 | /images/gto-srp-middle-connected-oop-fr.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → Board pairé → [⚡ Voir les résultats]**.

Ce qu'il faut regarder, c'est **la ligne unique 6♠6♥** dans le tableau main par main : le seul carré que ce board permet, et avec **359,7 %**, la plus haute réalisation d'équité de toute cette série (en deuxième, le 88 du bouton dans le [pot 3-bet sur un board bas](/fr/blog/3bet-pot-low-board) à **346,0 %** ; côté grosse blinde, le dauphin est 6♥6♣ sur le [flop bas rainbow](/fr/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-fr.webp") à **318,9 %**). Compare-la avec les trois lignes 33 juste en dessous, et tu verras combien le tout haut d'un board pairé contient peu de combos.

Ouvre ensuite le **Trainer GTO** dans la barre latérale : il te distribue une main selon les poids réels des ranges et te montre combien de grosses blindes ton action te coûte. Gratuit, rien à installer, sans compte.

## FAQ

**Q. Pourquoi les trips sont-ils plus faibles qu'un set sur un board pairé ?**

A. Parce que le board les donne à tout le monde. Un brelan servi (set) demande une paire en main qui touche une carte du board ; un brelan (trips) demande seulement une carte qui touche la paire déjà affichée, donc le bouton en a ici 20 combos contre 26 pour la grosse blinde. En plus, ton deuxième kicker est fixé par le board, ce qui veut dire qu'un 6 avec un kicker faible est dominé par un 6 avec un meilleur. Le [classement](/fr/blog/holdem-hand-rankings) est identique ; la situation, non.

**Q. Que deviennent les paires servies sur un board 6-6-3 ?**

A. Une double paire, dans presque tous les cas : TT joue 10-10-6-6-3. Les exceptions sont 66, qui fait carré, et 33, qui fait full. Toutes les doubles paires ne se valent pas pour autant : 22 est une paire de 2 sous les deux cartes du board, donc elle perd contre toute autre paire servie et tombe à 50,4 % d'équité.

**Q. Pourquoi le caller a-t-il plus de brelans que le relanceur ?**

A. Parce que la grosse blinde a déjà mis une partie de l'argent et défend des mains que le bouton n'ouvre jamais. J6s, T6s et 96s forment exactement ce groupe : six combos de plus, ce qui fait tout l'écart de 26 contre 20. Elle checke quand même, parce que le brelan ne représente que 5,3 % de sa range.

**Q. C'est quoi la fréquence de défense minimale (MDF) ?**

A. Une estimation de la fréquence à laquelle tu dois continuer pour qu'un pur bluff ne soit pas rentable : pot ÷ (pot + mise). Face à une mise de 1,8bb dans 5,5bb, ça fait 75,3 %. Elle suppose que la mise est un pur bluff, ce que les vrais adversaires sont rarement ; elle te donne donc un ordre de grandeur de ce que tu ne peux pas te permettre de coucher, pas exactement ce que tu dois payer.

**Q. Quelle est la probabilité d'avoir un board pairé au flop ?**

A. Environ **17,2 %** du temps, à peu près un flop sur six. Les trois cartes du flop ne se pairent pas entre elles seulement si la deuxième carte évite le rang de la première et la troisième évite les deux : ==(48 ÷ 51) × (44 ÷ 50) = 82,8 %==, et le reste est pairé ou mieux. Un board pairé n'est donc pas une curiosité pour laquelle tu peux te permettre de ne pas avoir de plan : tu en verras à chaque session. (Ce n'est pas pour autant l'événement *le plus* fréquent : une main non pairée rate complètement le flop ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67,6 %== du temps, donc elle touche une paire **32,4 %** du temps, soit près de deux fois plus souvent que le board ne se paire.)

**Q. Ces chiffres tiennent-ils à ma limite ?**

A. Utilise-les comme base quand les conditions correspondent : heads-up, 100bb, une ouverture du bouton à 2,5bb avec des ranges de défense standard, sans rake. Un écart mérite d'être connu : face à un adversaire qui fait rarement un c-bet sur les boards pairés, miser en premier plus souvent que les 3,0 % du solver en vaut la peine, parce que sinon le pot va être checké jusqu'au bout.
`.trim(),
};

export default POST;
