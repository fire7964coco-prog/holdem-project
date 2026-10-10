import type { Post } from "../posts";

/**
 * fr ② k-high-board-cbet — EN 마스터 lib/posts-en/k-high-board-cbet.ts 재저작 (2026-10-07 · fr-gto 레인 B)
 * 출처: EN 본문 축어(수치·카드) · 확정 카피 = docs/fr-lanes/gto-brief.md ② 절.
 * 키워드: check back poker(태그·FAQ 3) · c-bet retardé(태그만) · c-bet 일반론은 holdem-continuation-bet 몫.
 * 한계: 이미지 = fr 캡처(gto-<key>-oop-fr · -ranges-fr · 2026-10-07 헤드 생성).
 * GTO 시리즈 예외: 지어낸 경험담 없음(솔버 증거 자료).
 */
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "Le flop hauteur Roi où le caller checke 99,8 %",
  seoTitle: "Le flop où la grosse blinde checke 99,8 % — c-bet sur K-8-3",
  desc: "Sur K-8-3, la grosse blinde checke 99,8 % : un check de range plus pur encore que sur hauteur As. Une main absente l'explique, l'EQR fait le reste.",
  tldr: "Sur K♠8♦3♣, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 99,8 % de sa range, un check de range encore plus pur que les 98,2 % du flop hauteur As. Deux causes : la grosse blinde n'a aucune surpaire ici, parce que AA 3-bet préflop, et la réalisation d'équité se partage 80,7 % contre 116,7 %.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "9 min",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-fr.webp",
  imageAlt: "Résultats du solver HoldemMaster sur un flop sec hauteur Roi K-8-3 : la grille 13x13 de la grosse blinde presque entièrement verte pour le check",
  tags: ["faut-il toujours c-bet", "check back poker", "c-bet retardé", "flop hauteur roi", "board sec k-high", "check de range", "réalisation d'équité"],
  content: `
Le flop tombe **K♠ 8♦ 3♣**, rainbow. Tu as K9 en grosse blinde (BB) — top paire. Tu as déjà appris à checker la version hauteur As. Un Roi, c'est forcément différent ?

Oui. **Ça checke encore plus.** La grosse blinde checke ==99,8 %== ici, plus complètement que les 98,2 % du [flop hauteur As](/fr/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-fr.webp"). Les deux sizings réunis pèsent 0,2 % — un combo sur 474.

Chaque chiffre ci-dessous vient du [solver poker gratuit](/fr/solver) de HoldemMaster, relevé sur le résultat du spot d'étude le 2026-08-19.


:::stripe
Spot | Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)
Flop | K♠ 8♦ 3♣ (rainbow)
Pot · stack | Pot 5,5bb · stack effectif 97,5bb
Résultat | La BB checke 99,8 % — plus pur que sur le flop hauteur As
:::

> **Réponse rapide**
> Checke tout, et attends-toi à défendre large ensuite. Un combo sur 474 fait un lead, donc considère que le lead n'existe pas ici. Deux choses rendent ce check plus pur que dans la version hauteur As : la grosse blinde n'a **aucune overpair (surpaire)** sur ce board — AA 3-bet préflop — et la réalisation d'équité se partage **80,7 % contre 116,7 %** alors que l'équité est presque égale.

## Quelles conditions ont produit ces chiffres ?

Le bouton ouvre à 2,5bb, la grosse blinde paye, tous les autres se couchent — deux joueurs, un pot de 5,5bb, 97,5bb derrière. Les ranges sont les approximations standard du jeu en ligne à 100bb, le flop est K♠ 8♦ 3♣ avec trois couleurs différentes, et le solver dispose de deux sizings, environ un tiers et trois quarts du pot. Le rake n'est pas modélisé.

| Réglage | Valeur |
|---|---|
| Préflop | BTN ouvre à 2,5bb · BB paye · tous les autres se couchent |
| Ranges | Approximations du jeu en ligne standard à 100bb |
| Flop | K♠ 8♦ 3♣, rainbow (trois couleurs toutes différentes) |
| Pot · stack | Pot 5,5bb · stack effectif 97,5bb |
| Bet sizes | Environ 33 % et 75 % du pot |
| Rake | Sans rake |
| Vérifié le | 2026-08-19, résultat du spot d'étude |

Le pot fait ==2,5 d'ouverture + 2,5 de call + 0,5 de petite blinde couchée = 5,5bb==, et le stack effectif vaut 100bb moins l'ouverture de 2,5bb.

## À quelle fréquence la grosse blinde checke-t-elle sur K-8-3 ?

**99,8 %.** Les 0,2 % restants se répartissent entre les deux sizings.

| Première action de la BB | Fréquence | Combos |
|---|---|---|
| Check | **99,8 %** | 473,0 |
| Bet 1,8bb (33 % du pot) | 0,1 % | 0,6 |
| Bet 4,1bb (75 % du pot) | 0,1 % | 0,4 |

Un combo sur 474 — plus proche d'un artefact d'arrondi que d'une stratégie. **Sur un flop sec hauteur Roi, la grosse blinde n'a aucun lead**, et tu ne perds rien en pratique à le traiter ainsi.

## Pourquoi ce check est-il encore plus pur que sur un flop hauteur As ?

**Parce que la grosse blinde n'a aucune overpair ici, et que le flop hauteur As n'a aucune overpair possible.** Sur K-8-3, la seule paire servie au-dessus du board est AA — et la grosse blinde 3-bet AA préflop, donc cette main n'arrive jamais. Overpairs : **0,0 % pour la grosse blinde, 1,3 % pour le bouton.**

Sur A-7-2, cette colonne n'existe pour personne : rien n'est au-dessus d'un As. Les deux ranges manquent donc de la même chose, et leurs plafonds se ressemblent. Sur un board hauteur Roi, le plafond appartient à un seul joueur.

Les brelans servis disent la même chose. Les paires servies qui touchent un brelan ici sont KK, 88 et 33, et **la grosse blinde n'a que 88 et 33.**

| Paire servie qui touche un brelan | BB | BTN |
|---|---|---|
| KK | ❌ (3-bet préflop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Part de la range** | **1,3 %** | **1,9 %** |

Le décompte des mains colle exactement au solver. La grosse blinde a 88 et 33 à trois combos chacune — six sur 474, soit 1,27 %. Le bouton ajoute KK, pour neuf sur 480, 1,88 %.

## En quoi les deux ranges diffèrent-elles ?

**Les catégories fortes sont chez le bouton, les faibles chez la grosse blinde.** Côte à côte, l'écart saute aux yeux.

![Infographie de composition des ranges comparant les catégories de mains de la grosse blinde et du bouton sur un board sec hauteur Roi, barres vertes et dorées côte à côte](/images/gto-srp-dry-king-ranges-fr.webp "K♠8♦3♣ · répartition par catégorie — le haut de la range appartient au bouton")

Hors de position (OOP), c'est la grosse blinde, qui parle en premier ; en position (IP), c'est le bouton.

| Catégorie | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Brelan — ici toujours un brelan servi | 1,3 % | **1,9 %** |
| Double Paire | **0,8 %** | 0,4 % |
| Overpair | 0,0 % | **1,3 %** |
| Top paire (K) | 12,7 % | **14,4 %** |
| Deuxième paire (8) | **10,8 %** | 10,0 % |
| Paire faible | **3,2 %** | 2,5 % |
| Underpair | 8,9 % | **11,3 %** |
| Hauteur As | 27,0 % | **30,0 %** |
| Pas de main faite | **35,4 %** | 28,3 % |

Lis-le de haut en bas. **Toutes les catégories du haut de la range — brelans servis, overpairs, top paire — appartiennent au bouton, et la plus faible, pas de main faite, pèse 7,1 points de plus chez la grosse blinde.** Les catégories où la grosse blinde mène sont la double paire, la deuxième paire et la paire faible. **La double paire est la deuxième meilleure catégorie sur ce board**, devant une overpair, et la grosse blinde en a deux fois plus — mais 0,8 % de 474 combos, ça fait **quatre mains.** Elle ne porte pas la range parce qu'il n'y en a presque pas, pas parce qu'elle est mal classée. Les deux autres sont vraiment moyennes. Miser en premier avec une range de cette forme, c'est ta moitié faible qui paie leur moitié forte.

## Pourquoi près d'un tiers des deux ranges n'est-il que hauteur As ?

**Ça arrive sur tout board sans As.** La hauteur As représente 27,0 % de la range de la grosse blinde et 30,0 % de celle du bouton, près d'un tiers chacune. Sur A-7-2, ce groupe n'existe pas, parce que chaque As devient immédiatement top paire. Le contraste n'est donc pas « hauteur Roi contre tout le reste » mais **« boards avec un As contre boards sans As »** — sur le flop 8-5-2 plus loin dans cette série, résolu avec une range de 3-bet, la hauteur As monte à **48,2 %**.

C'est ce groupe qui rend ce flop intéressant. AQ et AJ n'ont pas de paire, mais elles battent toutes les mains de la colonne « pas de main faite » de l'adversaire, donc elles ont une valeur d'abattage. Au bouton, ce ne sont pas des c-bets automatiques : une partie du temps, elles checkent derrière et prennent l'abattage gratuit.

La meilleure hauteur As de la grosse blinde ici est AJ — son AQ 3-bet préflop — et cet AJ vaut moins qu'il ne vaudrait au bouton, parce qu'aller à l'abattage sans la position est plus difficile. **Des cartes similaires, une valeur différente selon le siège** — c'est exactement ce que mesure la section suivante.

## Pourquoi l'EQR fait 81 contre 117 quand l'équité fait 46 contre 54 ?

**L'équité, c'est ta part du pot si toutes les cartes étaient distribuées, les égalités comptant pour moitié ; la réalisation d'équité, c'est la part que tu en encaisses réellement.** Ce n'est pas le même chiffre.

| Indicateur | BB (OOP) | BTN (IP) |
|---|---|---|
| Équité | 46,3 % | 53,7 % |
| EV (bb) | 2,06 | 3,44 |
| **Réalisation d'équité (EQR)** | **80,7 %** | **116,7 %** |

Le calcul : le pot fait 5,5bb, donc la part d'équité de la grosse blinde vaut ==5,5 × 46,3 % = 2,55bb==, alors que son espérance de valeur (EV) réelle est de 2,06bb — ce rapport, ce sont les 80,7 %. La part du bouton est de 2,95bb pour une EV de 3,44bb, c'est pourquoi il passe au-dessus de 100 %.

:::note[Les valeurs d'EQR de cette série sont celles affichées à l'écran du solver. Les recalculer à partir de l'équité et de l'EV arrondies du même écran peut donner un dixième de point d'écart — c'est de l'arrondi, pas une contradiction.]:::

Le flop hauteur As donnait 84,0 % contre 113,1 %. **Même texture sèche, écart plus large sur le board au Roi.** Mais pas parce que ce board est *plus calme* — les deux plus grands écarts d'EQR de cette série appartiennent à des boards gorgés de tirages : le [flop Q-J-10 bicolore](/fr/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-fr.webp") à 41,5 points et le pot 3-bet sur Q-10-7 à 42,7. Ce qui ouvre l'écart ici, c'est **une seule colonne tout en haut** — sur A-7-2, aucun joueur n'a d'overpair, alors que sur K-8-3 le bouton en a 1,3 % et la grosse blinde aucune. Pourquoi le siège lui-même vaut autant est expliqué dans [jouer en position](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Il n'y a vraiment aucun tirage ici ?

**Aucun tirage.** K, 8 et 3 sont de trois couleurs différentes et trop éloignés pour se connecter, donc il n'y a ni tirage couleur ni tirage quinte bilatéral (OESD) pour aucun des deux joueurs — **et pas non plus de tirage ventral (gutshot).** Un tirage quinte au flop exige deux cartes du board dans une même séquence de cinq rangs, puisque tu n'en tiens que deux, et du K au 8 il y a cinq rangs d'écart, comme du 8 au 3. Aucune séquence n'en contient deux.

| Tirage | BB | BTN |
|---|---|---|
| Tirage couleur backdoor (il faut deux cartes de plus de la même couleur) | 27,8 % | 22,3 % |
| Aucun tirage | **72,2 %** | **77,7 %** |

Ce qui reste, ce sont des backdoors. Le **tirage couleur backdoor** que compte le tableau exige que la turn (le tournant) *et* la river (la rivière) apportent la même couleur, donc il ne se complète que ==10/47 × 9/46 = environ 4,2 %== du temps. Le tableau ne les compte pas, mais il y a aussi des **quintes backdoor** — QJ, JT et T9 passent par le Roi du board ; 67 et 65 par le 8 ; 54 par le 3. Ça compte quand même : quand tu dois choisir tes bluffs, **une main avec un backdoor bat une main sans rien**, parce que si la turn apporte cette couleur, tu tiens un vrai tirage et une raison de miser à nouveau — la base d'un c-bet retardé (delayed c-bet) à la turn.

## Faut-il toujours c-bet un flop hauteur Roi ?

**Presque, avec un petit sizing, mais « toujours » est le mauvais mot pour un groupe de mains.** La grosse blinde a 35,4 % de sa range sans main faite — le tiers de la range le plus susceptible de se coucher, même si tout ne peut pas se coucher : face à une mise d'un tiers du pot, une défense équilibrée garde environ 75 % de la range (fréquence de défense minimale, MDF), donc une partie de ces mains continue quand même. (La réponse de la grosse blinde n'est pas dans cette résolution.) Et **72,2 % de toute la range n'a aucun tirage** — attention au dénominateur : ce chiffre compte la range entière, top paire (12,7 %), deuxième paire (10,8 %) et brelans servis compris, donc ce n'est pas un sous-ensemble du bloc « pas de main faite ». Ça veut dire que la situation a peu de chances de changer aux streets suivantes. Miser environ un tiers du pot avec la majeure partie de ta range, c'est la norme.

Le conseil habituel dit que les mains hauteur As avec valeur d'abattage doivent checker derrière. Sur ce board, c'est **à moitié vrai**. Avec un petit sizing, AQ et AJ misent assez souvent, en fréquence mixte — elles font coucher des mains comme QJ, JT et T9 qui ont deux cartes vivantes mais pas de paire, et un As sur une street suivante leur donne la meilleure paire du board. Mais elles coûtent aussi peu en checkant, et c'est de là que vient une grande partie de la **range de check back**. Ni « toujours miser » ni « toujours checker derrière » n'est correct ; la réponse, c'est la fréquence.

:::note[⚠ Cette section interprète la composition des ranges ; ce n'est pas un chiffre calculé par le solver. Le spot d'étude ne précalcule que la première action du flop — celle de la grosse blinde — donc la fréquence exacte de c-bet du bouton n'est pas sur cet écran. Ouvre « Calcule ce spot toi-même » et déroule l'arbre pour l'obtenir.]:::

## Qu'est-ce que ça change à la table ?

- **Après avoir payé une relance en heads-up sur un flop sec hauteur Roi, le lead n'est pas une option.** Même avec un Roi. La logique du check de range du flop hauteur As s'applique ici plus fort, pas moins. La condition, c'est la **forme de ta range**, pas la forme du board — là où le haut de ta range est plus épais que le sien, la grosse blinde fait bien un lead. Le contre-exemple, c'est le [flop 9-8-7](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-fr.webp"), où la grosse blinde fait un lead **23,7 %** du temps.
- **Checker, ce n'est pas check-folder.** Face au petit c-bet, la grosse blinde continue large — tous les Rois, les 8, les underpairs, les hauteurs As avec un backdoor. Top paire, c'est un call ; les candidats naturels au check-raise sont 88, 33 et les doubles paires (ce calcul ne couvre pas la réponse au c-bet).
- **Au bouton, ne donne pas un traitement fixe à AQ et AJ.** Miser petit et checker derrière se défendent tous les deux ; ajuste le mélange selon que cet adversaire se couche vraiment avec des overcards ou non.
- **Ne lis pas le check comme une faiblesse — contre un adversaire équilibré.** Cette range de check contient toujours les brelans servis (88, 33) et 12,7 % de top paire. Aux petites limites, c'est souvent l'inverse, parce que beaucoup de joueurs font simplement un lead avec leurs mains fortes : continue donc à miser pour la value et traite le check-raise comme un coût occasionnel.

:::readnext[À lire ensuite]
/fr/blog/a-high-board-cbet | Top paire, et pourtant check : le c-bet sur A-7-2 | /images/gto-srp-dry-ace-oop-fr.webp
/fr/blog/holdem-continuation-bet | Pourquoi « c-bet à chaque flop » te fait perdre des jetons | /images/holdem-continuation-bet-hero.webp
:::

## Vérifie toi-même

Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → Board sec K-high → [⚡ Voir les résultats]**, et cet écran s'affiche sans attente. Ensuite, bascule le sélecteur « Joueur » sur **IP (BTN)** — le tableau de composition des ranges ci-dessus est lu directement sur ce panneau, et comparer les deux camps est le moyen le plus rapide de voir pourquoi l'un d'eux ne peut pas miser.

Pour t'entraîner sur ce spot au lieu de le lire, ouvre le **Trainer GTO** dans la barre latérale : il te distribue une main selon les vrais poids de la range, tu choisis une action, et il te montre combien de grosses blindes ce choix te coûte. Gratuit, rien à installer, aucun compte.

## FAQ

**Q. Pourquoi la grosse blinde ne mise-t-elle jamais sur K-8-3 ?**

A. Parce que les mains les plus fortes que permet ce board manquent dans la range de call : le meilleur brelan servi (KK) et la seule overpair (AA) en sont tous les deux absents, alors que « pas de main faite » monte à 35,4 %. La grosse blinde a bien des brelans servis de 88 et de 33 et un peu de double paire, mais pas assez pour porter un lead. Faire un lead avec une range de cette forme, c'est construire un pot que quelqu'un d'autre gagnera. Le solver checke 99,8 %.

**Q. Flop hauteur As ou hauteur Roi : lequel est pire pour la grosse blinde ?**

A. Hauteur Roi. L'équité est même plus élevée — 46,3 % contre 45,1 % sur A-7-2 — mais la réalisation d'équité est plus basse, 80,7 % contre 84,0 %. La grosse blinde dispose ici d'une part du pot un peu plus grande que sur A-7-2, et en encaisse moins.

**Q. C'est quoi une range de check back ?**

A. Les mains que le joueur en position choisit de ne pas miser, pour voir un abattage gratuit ou pour éviter que la range de check ne soit faite que de faiblesse. Sur ce flop, elle est construite en grande partie avec des mains hauteur As comme AQ et AJ, qui battent les mains vides de l'adversaire mais gagnent peu à miser.

**Q. Combien vaut un tirage couleur backdoor ?**

A. Environ 4,2 % de chances de se compléter depuis le flop, donc ce n'est pas à lui seul une raison de payer. Sa valeur est dans le choix des bluffs : une main qui récupère un vrai tirage à la turn te donne une raison de continuer à miser, et c'est de là que viennent les c-bets retardés.

**Q. Je peux utiliser ces chiffres à toutes les limites ?**

A. Comme base quand les conditions correspondent : heads-up, 100bb, ranges standard d'ouverture et de call, sans rake. Sur ce board, le point à surveiller, c'est la position de l'ouvreur — si la relance venait d'UTG plutôt que du bouton, cette range contiendrait encore plus de Rois et d'As, et la situation de la grosse blinde serait pire que ce qui est montré ici.
`.trim(),
};

export default POST;
