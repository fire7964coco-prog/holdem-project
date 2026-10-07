/**
 * fr — low-board-check-raise (GTO ⑦ · Board bas rainbow 6♠5♥2♦)
 * Source : EN master lib/posts-en/low-board-check-raise.ts (updated 2026-10-02 · hash a54b5f3d) — valeurs, cartes et tableaux en verbatim.
 * Mots-clés : check raise poker (260, propriétaire) · check raise definition · board humide poker — docs/fr-lanes/gto-brief.md section 7.
 * Limites connues : deux résolutions distinctes (exemple précalculé = root seulement · re-solve 2026-08-20 = nœuds après la mise) ;
 * images encore en -en.webp (variantes -fr pas encore générées) ; ajout local = H2 définition + FAQ pourcentage + lien /fr/glossary.
 */
import type { Post } from "../posts";

export const POST: Post = {
  slug: "low-board-check-raise",
  title: "Aucune des deux ranges n'a de quinte ici",
  seoTitle: "Aucune quinte ici — quand faire un check-raise au poker",
  desc: "Sur 6-5-2, une seule main fait quinte et aucun des deux joueurs ne l'a. Alors la grosse blinde checke 96,8 % et garde toute son agression pour le check-raise.",
  tldr: "Sur le flop bas rainbow 6♠5♥2♦, la grosse blinde checke 96,8 % et lead seulement 3,2 %, alors que ses 48,3 % d'équité sont la deuxième valeur la plus haute des sept spots où elle défend. Une seule main fait quinte ici, 4-3, et aucune des deux ranges ne l'a. Personne n'a le haut du board, donc personne ne lead hors de position. L'action vient plus tard : résous le même arbre au-delà du flop et la grosse blinde check-raise une mise de 1,8bb 14,9 % du temps, surtout avec des tirages.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-en.webp",
  imageAlt: "Résultats du solver HoldemMaster sur le flop bas rainbow 6♠5♥2♦ : la grille 13x13 de la grosse blinde presque entièrement verte, avec une fine bande orange de leads",
  tags: ["check raise poker", "quand faire un check-raise", "check raise definition", "board humide poker", "flop bas rainbow", "gutshot"],
  content: `
Le flop est **6♠ 5♥ 2♦**. Trois cartes basses, trois couleurs différentes : donc aucun tirage couleur, et une couleur aurait besoin des deux cartes restantes.

Ça ressemble au genre de board que la grosse blinde (BB) devrait attaquer. Son équité ici est de **48,3 %**, la deuxième valeur la plus haute des sept spots de cette série où elle défend, devant les 45,1 % du [flop hauteur As](/fr/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp") et les 46,3 % du flop hauteur Roi.

Elle fait un donk bet (ou lead) **3,2 %** du temps.

La raison tient en une main. **Une seule main fait quinte sur 6-5-2, et aucun des deux joueurs ne l'a.** Chaque chiffre ci-dessous vient du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | 6♠ 5♥ 2♦ (bas, rainbow)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb (SPR environ 17,7)
Résultat | La BB checke 96,8 % — équité élevée, aucun avantage en haut de range
:::

> **Réponse rapide**
> Checke, puis tente ta chance sur la relance. Ce n'est pas l'équité qui te donne le droit de miser en premier, c'est un avantage en haut de range, et ce board n'en donne à personne. Une fois que le bouton mise, la grosse blinde peut devenir l'agresseur : elle fait un check-raise avec chaque brelan servi (set) qu'elle tient et complète le reste de cette relance avec des tirages quinte, le groupe qu'elle a en plus grand nombre que le bouton, et celui qu'elle dépense vraiment ici.

## Check-raise au poker : c'est quoi ?

**Un check-raise, c'est checker d'abord, puis relancer quand l'adversaire mise derrière toi.** On l'appelle aussi « embuscade ». Tu laisses l'initiative à l'autre joueur et, dès qu'il a misé, c'est toi qui deviens l'agresseur. Sur 6-5-2, c'est exactement le plan de la grosse blinde : checker presque toute sa range, puis relancer quand le bouton mise. La définition complète est dans le [lexique du poker](/fr/glossary).

## Quelles conditions ont produit ces chiffres ?

Le bouton (BTN) ouvre à 2,5bb, la grosse blinde paye, tous les autres se couchent. Deux joueurs, un pot de 5,5bb, 97,5bb derrière. **Une différence avec les spots précédents de cette série : il n'y a qu'un seul sizing.**

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu en ligne standard à 100bb |
| Flop | 6♠ 5♥ 2♦ (rainbow — trois couleurs différentes) |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb (SPR environ 17,7) |
| Bet size | Environ 33 % du pot — **un seul sizing** |
| Rake | Sans rake |
| Vérifié le | 2026-08-20 |

Le pot de 5,5bb, c'est ==2,5 d'ouverture + 2,5 de call + les 0,5bb de la petite blinde couchée==, et le stack effectif fait ==100 − 2,5 = 97,5bb==.

**Le sizing unique compte quand tu lis l'écran.** Les spots précédents proposaient 33 % et 75 % ; celui-ci a été résolu avec 33 % seulement, donc **il n'y a aucune ligne « Bet 4,1bb » nulle part dans le résultat.** Rien ne manque : l'option n'a jamais été dans l'arbre.

## À quelle fréquence la grosse blinde checke-t-elle sur 6-5-2 ?

**96,8 %.** Sur 487 combos, 15,3 partent en mise et 471,7 checkent.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **96,8 %** | 471,7 |
| Bet 1,8bb (33 % du pot) | **3,2 %** | 15,3 |

Ces 3,2 % ne sont pas une main précise qui tente un coup. Ils sont étalés finement sur toute la range, et c'est à ça que ressemble une action presque indifférente : le solver te dit que la décision ne vaut presque rien, dans un sens comme dans l'autre.

## Pourquoi la grosse blinde lead 3,2 % ici mais 23,7 % sur 9-8-7 ?

**Parce que l'équité et le droit de miser en premier sont deux choses différentes.** Aligne les sept spots et le classement se mélange complètement.

| Flop | Article | Équité BB | Lead BB |
|---|---|---|---|
| Q♠J♦10♠ broadway (bicolore) | ③ | 46,7 % | 0,1 % |
| K♠8♦3♣ sec | ② | 46,3 % | 0,2 % |
| A♥7♦2♣ sec | ① | 45,1 % | 1,9 % |
| 6♣6♦3♥ pairé | ⑥ | 47,2 % | 3,0 % |
| **6♠5♥2♦ bas rainbow** | **⑦** | **48,3 %** | **3,2 %** |
| Q♠9♠2♠ monotone | ⑤ | 47,7 % | 11,2 % |
| 9♥8♥7♣ connecté | ④ | 48,5 % | 23,7 % |

Le board avec la plus faible équité (45,1 %) lead plus que le board broadway (46,7 %). Le [flop monotone](/fr/blog/monotone-board-strategy) a **moins** d'équité que celui-ci, 47,7 % contre 48,3 %, et lead plus de trois fois plus souvent.

Mets maintenant ⑦ à côté de ④. L'écart d'équité est de **0,2 point de pourcentage**. L'écart de lead, c'est **3,2 % contre 23,7 %.**

**La différence, ce sont les quintes.** Sur [9-8-7](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), la grosse blinde arrive avec 24 combos de quinte faite : J-T, T-6 assortis et 6-5 assortis. Sur 6-5-2, la seule main qui en complète une est **4-3**, qui remplit ==2-3-4-5-6==. Pour construire la quinte par l'autre bout, il te faudrait 7, 8 et 9 : **trois cartes, et tu n'en tiens que deux.**

Et 4-3 n'est dans aucune des deux ranges. **Le panneau de catégories du solver n'a aucune ligne « Quinte »**, et 43s et 43o sont grisés dans les deux matrices : la main n'arrive jamais dans ce spot, sous aucune forme.

:::pull[Une seule main fait quinte sur ce board, et aucun des deux joueurs ne l'a jamais reçue.]:::

## En quoi les deux ranges diffèrent-elles sur 6-5-2 ?

**La grosse blinde gagne sur les paires et perd sur tout ce qui est au-dessus.** Elle tient plus de top paires, plus de deuxièmes paires et plus de paires faibles que le bouton ; les brelans et les doubles paires sont à égalité parfaite ; et ses overpairs pèsent à peine la moitié de celles du bouton. Presque les trois quarts des deux ranges n'ont aucune paire : c'est ce qui fait de ce spot une bataille d'overcards plutôt qu'une bataille de value, et c'est pour ça que la main qui la gagne est généralement encore en train de tirer.

![Composition des ranges sur un board bas rainbow, la grosse blinde devant sur les paires et le bouton devant sur les overpairs](/images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · composition des ranges — la grosse blinde devant sur les paires, le bouton devant sur les overpairs")

| Catégorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Brelan | 1,8 % | 1,8 % |
| Double Paire | 0,4 % | 0,4 % |
| Overpair | 4,9 % | **9,5 %** |
| Top paire (un six) | **7,4 %** | 5,4 % |
| Deuxième paire (un cinq) | **6,2 %** | 4,2 % |
| Paire faible | **3,7 %** | 2,4 % |
| Underpair | **2,5 %** | 2,4 % |
| Hauteur As | 23,0 % | **28,6 %** |
| Hauteur Roi | **15,6 %** | 14,3 % |
| Pas de main faite | **34,5 %** | 31,0 % |

Additionne top paire, deuxième paire et paire faible, et la grosse blinde mène **17,3 % à 12,0 %**. C'est un vrai avantage, et c'est le mauvais type d'avantage pour *miser en premier*, parce qu'aucune de ces mains ne veut grossir le pot hors de position (OOP) sur la première action. Ce sont des mains de check-call et de check-raise.

Deux lignes expliquent tout le spot :

- **La ligne « Set/Brelan » est à 1,8 % pour les deux joueurs.** 🪶 C'est l'étiquette de l'app, citée telle que le panneau l'affiche : 6-5-2 ne porte aucune paire, donc cette ligne ne contient ici que des **brelans servis (sets)** (le brelan « trips », c'est une carte de ta main qui complète une paire du board). Seules 66, 55 et 22 en font un, et chacune fait exactement ==3 combos== parce qu'une carte de chaque rang est déjà sur le board. Neuf combos pour chacun des deux joueurs. **La meilleure main de ce flop est partagée en deux parts égales.**
- **Les overpairs pèsent 4,9 % contre 9,5 %**, presque le double. Une overpair ici, c'est n'importe quelle paire servie au-dessus du six, donc de 77 à AA. La grosse blinde 3-bet JJ et mieux avant le flop, ce qui lui laisse **de 77 à TT, et rien d'autre.** Le bouton garde tout le haut de cette liste.

## Pourquoi l'équité est-elle de 48,3 % mais l'EQR de seulement 84,3 % ?

**Parce que l'équité, c'est ce que tu possèdes, et l'EQR, c'est ce que tu encaisses.**

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 48,3 % | 51,7 % |
| EV (bb) | 2,24 | 3,26 |
| **Réalisation d'équité** | **84,3 %** | **114,7 %** |

Dans un pot de 5,5bb, 48,3 % d'équité valent ==5,5 × 48,3 % = 2,66bb==. La grosse blinde encaisse en réalité **2,24bb**, et ==2,24 ÷ 2,66== donne sa réalisation d'équité (EQR) : **84,3 %**. Les 51,7 % du bouton, en position (IP), valent 2,84bb et il encaisse 3,26bb : **114,7 %**. (Divise toi-même les chiffres arrondis et tu tombes un dixième de point à côté ; le solver travaille avec des valeurs non arrondies.)

Le chiffre auquel le comparer, c'est le [flop hauteur As](/fr/blog/a-high-board-cbet), où la grosse blinde avait **45,1 %** d'équité et en réalisait **84,0 %**. Trois points d'équité de plus ici, et elle en garde pratiquement la même fraction. À titre de comparaison, la grosse blinde réalisait **93,2 %** sur 9-8-7, parce que sur ce flop elle tenait des quintes et pouvait donc miser même hors de position.

**La position vaut plus que trois points d'équité quand ta range n'a aucun avantage en haut.** C'est tout l'écart.

## Quand faire un check-raise ? La réponse du solver sur 6-5-2

**Quand le bouton mise, et souvent.** Face à une mise de 1,8bb, la grosse blinde relance **14,9 %** du temps.

:::note[⚠ **Cette section vient d'une résolution distincte.** Le spot d'étude publié dans l'app ne couvre que le flop : il s'arrête à la première décision et ses boutons d'action ne sont pas cliquables, donc les réponses à une mise n'y figurent pas. Pour les obtenir, nous avons reconstruit le même arbre (mise de 33 %, relance de 60 %, pot de 5,5bb, stack de 97,5bb) et l'avons lancé : **190 itérations, exploitabilité de 0,16 en unités internes du moteur (dixièmes de grosse blinde) — 0,016bb, soit 0,29 % du pot de 5,5bb.** Chaque chiffre des deux tableaux ci-dessous vient de ce calcul, pas du spot d'étude.]:::

D'abord, ce que fait le bouton quand on checke vers lui :

| BTN après le check | Fréquence | Combos |
|---|---|---|
| Bet 1,8bb (33 % du pot) | **63,0 %** | 316,5 |
| Checker derrière | 37,0 % | 186,5 |

Puis la réponse de la grosse blinde :

| BB face à une mise de 1,8bb | Fréquence | Combos |
|---|---|---|
| **Relance à 7,3bb** | **14,9 %** | 69,7 |
| Call | **65,6 %** | 314,6 |
| Fold | 19,5 % | 93,2 |

(Une bizarrerie à signaler : à ce nœud, les pourcentages de l'app et ses propres nombres de combos ne concordent pas tout à fait. 69,7 combos font ==69,7 ÷ 477,5 = 14,6 %== des 477,5 qui ont atteint ce nœud, pas 14,9 %. Les pourcentages ci-dessus sont cités tels que le panneau les affiche. L'écart est d'un tiers de point et ne change rien, mais si tu lances le calcul toi-même et obtiens 14,6 %, voilà pourquoi.)

Deux choses à remarquer.

**La relance fait 60 % du pot, ce n'est pas une relance pot.** On se trompe facilement dans ce sens-là. Relancer à 7,3bb correspond bien à ce qu'il y a déjà au milieu, ==5,5 + 1,8 = 7,3==, mais une relance *pot* veut dire relancer le pot **après** ton call : ==5,5 + 1,8 + 1,8 = 9,1==, ce qui te mettrait à **10,9bb**. Ce que 7,3 représente vraiment : ==(7,3 − 1,8) ÷ 9,1 = 60 %== du pot, ce qui correspond au sizing de relance de 60 % de l'arbre, et un poil plus de quatre fois la mise (==7,3 ÷ 1,8 = 4,06==).

**La grosse blinde ne se couche que 19,5 %,** ce qui veut dire qu'elle continue **80,5 %** du temps. Face à une mise de 1,8bb dans 5,5bb, le seuil de rentabilité de la défense, la fréquence de défense minimale (MDF), est de ==5,5 ÷ (5,5 + 1,8) = 75,3 %==, la part que tu dois garder pour qu'un bluff pur ne soit pas rentable d'office. Le solver va au-delà, parce qu'un board aussi bas et aussi sec donne à presque chaque main quelque chose à quoi se raccrocher.

:::note[Une réserve honnête sur ce calcul : sa fréquence de lead à la **racine** est sortie à **2,0 %** au lieu des 3,2 % du spot d'étude, sur 9,5 combos au lieu de 15,3. Tout le reste (les catégories, les tirages, l'équité, l'EV et l'EQR) concordait à la décimale près. Miser en premier ici est une décision à EV quasi nulle, donc elle dérive d'une résolution à l'autre. Traite 3,2 % et 2,0 % comme la même réponse : *presque jamais*. Ton propre calcul tombera lui aussi quelque part dans cette fourchette.]:::

## Quelles mains composent le check-raise ?

**Chaque brelan servi, les deux doubles paires, et après ça presque rien d'autre que des tirages quinte.**

Nous avons lu les 487 lignes du tableau main par main, pas seulement le premier écran. Une fois la liste triée par fréquence de relance, son haut se découpe d'une façon inhabituellement nette.

| Main | Ce que c'est | Relance |
|---|---|---|
| 66 · 55 · 22 | Brelan servi — **les neuf combos** | **100 %** |
| 65s | Double paire — seuls 6♦5♦ et 6♣5♣ existent, puisque le 6♠ et le 5♥ sont sur le board | **100 %** |
| 64s | Top paire **et** tirage ventral | **100 %** — deux de ses trois combos |
| 98s | Tirage ventral vers le sept — équité **35,8 %** | 99 %+ |
| 87s | Tirage quinte bilatéral, le quatre ou le neuf — équité **46,2 %** | 80–83 % |
| J4s · Q4s | Tirage ventral vers le trois et rien d'autre | 67–90 % |
| 54s | Deuxième paire et tirage ventral | 74–75 % |

Lis la deuxième colonne de haut en bas et le schéma saute aux yeux. **Sous la double paire, chaque main en haut de cette liste tient un tirage quinte** : les deux qui ont aussi une paire (64s et 54s) relancent avec le tirage attaché, pas avec la paire :

- **98s** tient 5-6-8-9 et a besoin du ==7==.
- **87s** tient 5-6-7-8 et prend le ==4 ou le 9== : le seul tirage quinte bilatéral **dans cette range**. ⚠ Pas le seul que le board permet : **74 fait 4-5-6-7** et attend le 3 ou le 8, un tirage bilatéral classique, et 84 est un double ventral avec les mêmes huit outs. Le 0,8 % du tableau des tirages veut dire que les ranges de ce solver n'ont pas de 74 assorti, pas que le board n'a qu'un seul tirage bilatéral.
- **J4s, Q4s, 54s et 64s** tiennent tous 2-4-5-6 et ont besoin du ==3==.

**Aucune main en haut de cette liste n'a été choisie pour sa carte haute.**

Ces sept lignes sont le haut de la liste triée, et elles représentent environ 30 des 69,7 combos qui relancent. Le reste de la relance vient de la même range à des fréquences plus basses : bon à savoir avant de conclure que *rien* d'autre ne relance jamais ici.

Et regarde la faible part de value. Les brelans servis et les doubles paires réunis font **2,2 %** de la range, ==2,2 % × 487 ≈ 11 combos==, sur les 69,7 qui relancent. Même en comptant les deux mains qui touchent aussi une paire du board, **moins d'un combo de relance sur quatre est une main faite.** C'est pour ça que la relance marche encore quand elle est payée : la plus grande partie de la range qui a mis l'argent peut encore s'améliorer.

Et les tirages quinte, c'est là que le solver choisit de dépenser cet avantage.

| Tirage | BB | BTN |
|---|---|---|
| Tirage quinte bilatéral | 0,8 % | 0,8 % |
| **Tirage ventral** | **18,5 %** | 13,9 % |
| Tirage couleur backdoor | **20,5 %** | 18,5 % |
| Aucun tirage | 60,2 % | **66,8 %** |

**Tirages ventraux : 18,5 % contre 13,9 %.** Avec les brelans répartis à égalité à 1,8 % et les overpairs à 4,9 % contre 9,5 %, la ligne des tirages ventraux est celle d'où vient la plus grande partie de la range de relance : le solver s'appuie sur le groupe que la grosse blinde a en plus grand nombre, même si tout ce groupe ne relance pas. 18,5 % de 487, c'est environ 90 combos de tirage ventral, plus que les 69,7 combos de relance au total, et même J4s et Q4s, près du haut de la liste, ne relancent que 67–90 %.

## 6-5-2, board humide ou board sec ?

**Sec en haut, humide au milieu.** Un **board humide**, c'est un board qui distribue des tirages : des cartes qui se connectent pour des quintes ou des couleurs, si bien que des mains en retard ont encore un moyen de gagner. Un board sec n'en distribue presque aucun. Sur 6-5-2, la distinction joue dans les deux sens à la fois, et c'est pour ça que l'étiquette seule ne te dit rien ici.

Il n'y a aucun tirage couleur et, comme on l'a vu plus haut, aucune quinte faite dans l'une ou l'autre range. En ce sens, le board est on ne peut plus sec : le plafond est un brelan servi, et les deux joueurs y arrivent aussi souvent l'un que l'autre.

Mais **19,3 % de la range de la grosse blinde tient un tirage quinte** (0,8 % de bilatéraux plus 18,5 % de ventraux), et 20,5 % de plus récupère un tirage couleur backdoor. Seuls 60,2 % n'ont ni l'un ni l'autre. Beaucoup de mains ont donc une raison de continuer même sans rien de fait.

Cette combinaison, un plafond bas et un plancher large, c'est ce qui produit les chiffres ci-dessus. Personne ne peut miser un monstre parce que personne n'en a, et personne ne se couche beaucoup parce que presque tout le monde a un out. Un board comme [Q♠9♠2♠](/fr/blog/monotone-board-strategy) est l'inverse : un plafond haut que chaque joueur a peur que l'autre ait déjà atteint. Ce que tu peux miser suit le plafond, pas le plancher, le même principe que le guide du [c-bet (mise de continuation)](/fr/blog/holdem-continuation-bet) applique à d'autres textures.

## Qu'est-ce que ça change à la table ?

- **Arrête de miser en premier sur les boards bas rainbow juste parce que tu as « touché quelque chose ».** 48,3 % d'équité, ce n'est pas une raison. Sur 6-5-2, la range entière lead 3,2 %, et les mains qui le font y sont à peine engagées. Ce lead a ici un seul sizing, un tiers du pot, donc le bouton n'a besoin que de **19,8 %** pour payer, et ses mains hauteur As et hauteur Roi, **42,9 %** de sa range à elles deux, passent au-dessus de cette barre. Tu ne les fais pas coucher, et ce qui paye contient des mains qui te battent.
- **Fais un check-raise avec tes brelans servis, tous.** Les neuf combos de brelan servi relancent 100 % du temps. Slow-player un brelan servi ici, alors que le bouton en a tout autant, c'est jeter le seul gros pot que tu allais gagner.
- **Choisis tes bluffs par tirage, pas par carte haute.** La range de relance est construite avec des tirages ventraux. Une main hauteur As sans tirage, A-J, A-9, appartient à la range de call, les 65,6 %, pas à la relance. (A-K n'arrive jamais dans ce spot : la range de défense de la grosse blinde s'arrête à A-J.)
- **Ne te couche pas trop face à une petite mise.** Face à 1,8bb dans 5,5bb, le solver garde **80,5 %** de sa range, au-dessus du seuil de rentabilité de 75,3 %. Coucher tes mains hauteur Roi et tes paires faibles sur une seule petite mise, c'est l'habitude la plus exploitable sur un board comme celui-ci.

:::readnext[À lire ensuite]
/fr/blog/paired-board-strategy | Tu as plus de brelans (trips) et tu checkes quand même 97 % | /images/gto-srp-paired-oop-en.webp
/fr/blog/monotone-board-strategy | La couleur max qui checke sept fois sur dix | /images/gto-srp-monotone-oop-en.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), puis va dans **Spots d'étude → Board bas rainbow → [⚡ Voir les résultats]**.

Ce qu'il faut chercher, c'est ce qui *n'y est pas* : **fais défiler le panneau « Mains / Tirages » et trouve la ligne « Quinte » manquante.** Puis ouvre la matrice et regarde les cases 43s et 43o : grisées pour les deux joueurs. Cette absence, c'est tout l'article.

Pour atteindre les chiffres du check-raise, tu dois aller une étape plus loin, parce que le spot d'étude ne couvre que le flop. Clique sur « **Calcule ce spot toi-même** », garde l'arbre qu'il charge et lance le calcul. Quand il a fini, clique sur **Check** puis sur **Bet** dans la barre du haut.

Ouvre ensuite le **Trainer GTO** dans la barre latérale : il te distribue une main selon les vrais poids des ranges et te montre combien de grosses blindes ton action te coûte. Gratuit, rien à installer, aucun compte.

## FAQ

**Q. Quand faut-il check-raise au poker ?**

A. Quand ta range a des mains qui gagnent à grossir le pot et assez de tirages pour les équilibrer. Sur 6♠5♥2♦, c'est 14,9 % de la range de la grosse blinde face à une mise de 1,8bb : chaque brelan servi, les deux combos de double paire, et un bloc de tirages ventraux. La question n'est pas « est-ce que j'ai une bonne main ? » mais « est-ce que cette main veut que le pot grossisse, et est-ce que je trouve des bluffs qui s'améliorent quand ils sont payés ? »

**Q. Pourquoi la grosse blinde ne mise-t-elle pas en premier sur un board bas ?**

A. Parce que ce n'est pas l'équité qui donne le droit de miser en premier, c'est un avantage en haut de range, et ce board n'en donne à personne. Les brelans servis sont répartis 1,8 % contre 1,8 %, et la seule main qui les battrait, 4-3, est hors des deux ranges. Sans main qui batte la meilleure main adverse, il n'y a rien pour construire un pot, donc la grosse blinde ne lead que 3,2 %.

**Q. Pourquoi la stratégie est-elle si différente de 9-8-7 avec presque la même équité ?**

A. Parce que c'est le haut d'une range qui décide qui mise en premier, pas sa moyenne. Sur 9-8-7, la grosse blinde arrive avec 24 combos de quinte faite ; sur 6-5-2, aucune des deux ranges n'en a. Deux dixièmes de point d'équité d'écart, et les leads sortent à 23,7 % contre 3,2 %.

**Q. Quelles mains check-raise sur 6-5-2 ?**

A. Les neuf combos de brelan servi (66, 55, 22), les deux combos de 65 assorti, puis des tirages quinte : 98s pour le tirage ventral vers le sept, 87s pour le tirage bilatéral, et J4s, Q4s, 54s et 64s pour le tirage ventral vers le trois. Aucune n'a été choisie pour une carte haute : au-delà des brelans servis et de 65 assorti, la relance s'appuie surtout sur des tirages.

**Q. Le check-raise est-il autorisé, et est-ce impoli ?**

A. Autorisé dans presque tous les casinos et dans les parties en ligne standard (seule une partie privée entre amis peut encore avoir sa propre règle maison), et la règle elle-même est traitée dans le guide des [actions de mise](/fr/blog/holdem-betting-actions). L'inquiétude sur l'étiquette est un vestige : certaines vieilles parties privées interdisaient le check-raise par règle maison, et la réputation a survécu à la règle. Peu de parties se jouent encore comme ça, et les chiffres ci-dessus en sont la raison : retire le check-raise du jeu de la grosse blinde sur ce flop et tu supprimes 14,9 % de sa range sans rien pour la remplacer.

**Q. Ces chiffres tiennent-ils à ma limite ?**

A. Traite les fréquences de cette page comme une base pour les conditions correspondantes : heads-up, 100bb, une ouverture du bouton à 2,5bb avec des ranges de défense standard, sans rake. Un détail est propre à cet exemple : ce spot a été résolu avec un seul sizing de 33 %, donc le solver n'a jamais la possibilité d'en choisir un plus gros. Avec deux sizings, les fréquences pourraient bouger ; seule la version à un sizing est résolue ici.

**Q. Quel est un bon pourcentage de check-raise ?**

A. Dans ce spot, la grosse blinde fait un check-raise 14,9 % du temps face à une mise de 1,8bb, surtout avec des tirages. Un pourcentage « universel » n'existe pas : ça dépend du board.
`.trim(),
};

export default POST;
