/**
 * fr — blind-battle-cbet (GTO ⑪ · Board K-high avec un T · K♥10♦6♠ · SB ouvre 3bb, BB paye)
 * Source : EN master lib/posts-en/blind-battle-cbet.ts (updated 2026-10-02 · hash a54b5f3d) — valeurs, cartes et tableaux en verbatim.
 * Mots-clés : blind vs blind poker (10) · blind contre blind — docs/fr-lanes/gto-brief.md section 11. Aucune FAQ sur les règles des blindes (autre article).
 * Limites connues : un seul sizing (33 %) dans l'arbre ; la SB est l'ouvreur, sa première mise est un c-bet ;
 * pas de H2 FAQ (comme l'EN) ; images encore en -en.webp (variantes -fr pas encore générées).
 */
import type { Post } from "../posts";

export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "Le joueur sans position mise en premier, 67,4 % du temps",
  seoTitle: "Blind vs blind : sans position, le solver c-bet 67,4 %",
  desc: "Blind vs blind sur K-10-6 : la petite blinde parle en premier, sans position, et mise 67,4 %. Comment un avantage de range pousse l'EQR au-delà de 100 %.",
  tldr: "Après une ouverture de la petite blinde suivie par la grosse blinde, le flop K♥10♦6♠ reçoit une mise 67,4 % du temps et un check 32,6 %. Dans les sept pots simplement relancés vus plus tôt dans cette série, le joueur hors de position ne misait que 0,1 % à 23,7 %, et deux choses ont changé, pas une. Ici, le joueur hors de position est le relanceur et non le caller, et le board favorise cette range. Ensemble, elles poussent la réalisation d'équité hors de position à 103,1 %.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-en.webp",
  imageAlt: "Solver HoldemMaster affichant la range de la petite blinde sur un flop rainbow K♥10♦6♠, la majeure partie de la grille colorée en orange pour la mise",
  tags: ["blind vs blind poker", "blind contre blind", "ouverture petite blinde", "flop hauteur roi", "réalisation d'équité", "c-bet hors de position"],
  content: `
Sur les sept pots simplement relancés (single raised pots) vus plus tôt dans cette série, une règle revenait sans cesse. **Celui qui parle en premier checke.** Le plus haut que le joueur hors de position (OOP) ait jamais misé, c'était sur le [board connecté 9-8-7](/fr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), à 23,7 %, et les six autres plafonnaient à 11,2 %. La seule exception était un pot 3-bet.

Ici, ce n'est pas un pot 3-bet. C'est une main ordinaire : la petite blinde (SB) ouvre à 3bb, la grosse blinde (BB) paye. Et **le joueur qui parle en premier mise 67,4 %.**

Qu'est-ce qui a changé ? Le pot est petit, 6bb, et les stacks font 97bb. Ce qui a changé, c'est **qui parle en premier, et quelle range le board favorise, les deux à la fois.** Chaque chiffre ci-dessous vient du [solver poker gratuit](/fr/solver) de HoldemMaster.


:::stripe
Spot | SB ouvre 3bb → BB paye (blind contre blind)
Flop | K♥ 10♦ 6♠ (rainbow)
Pot · stack | Pot 6bb · stack effectif 97bb · **SPR 16,2**
Résultat | La SB mise **67,4 %** — le premier pot simplement relancé où le joueur hors de position mise plus souvent qu'il ne checke
:::

> **Réponse rapide**
> Sur K-10-6 en blind contre blind (BvB), la première action de la petite blinde est **mise 67,4 %, check 32,6 %**. C'est l'inverse des 0,1 %–23,7 % vus dans les spots ① à ⑦, et **deux choses** sont différentes, pas une : le joueur hors de position est ici **le relanceur et non le caller**, et le board est un roi avec un kicker broadway. Le siège seul ne l'explique pas : la même petite blinde relanceuse ne mise que **9,6 %** sur [un board 7-6-5](/fr/blog/blind-battle-connected-board) plus loin dans cette série. Ici, les deux s'alignent, donc l'agresseur préflop parle aussi en premier et tient à la fois l'avantage de range et l'ordre d'action. Le résultat, c'est une **réalisation d'équité hors de position de 103,1 %** : la première fois, dans un pot simplement relancé, qu'elle dépasse 100 %.

## Quelles conditions ont produit ces chiffres ?

★**Le cadre a encore changé.** Le pot, le stack et les rôles sont tous différents des spots précédents, donc le tableau vient en premier.

| Élément | Ce spot (blind contre blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (pot 3-bet) |
|---|---|---|---|
| Préflop | **SB ouvre 3bb → BB paye** | BTN ouvre 2,5bb → BB paye | BB 3-bet à 11bb → BTN paye |
| OOP (parle en premier) | **SB — l'ouvreur** | BB — le caller | BB — le 3-betteur |
| IP | BB — le caller | BTN — l'ouvreur | BTN — le caller |
| Pot | **6bb** | 5,5bb | 22,5bb |
| Stack effectif | **97bb** | 97,5bb | 89bb |
| SPR | **16,2** | 17,7 | 4,0 |
| Bet sizes | Environ un tiers du pot, **un seul sizing** | Environ un tiers et trois quarts (⑦ n'en a qu'un) | Environ un tiers et deux tiers |
| Rake | Sans rake | Sans rake | Sans rake |
| Vérifié le | 2026-08-08 (résultat du spot d'étude) | ①–④ 2026-08-19 · ⑤–⑦ 2026-08-20 | ⑧⑨ 2026-08-20 · ⑩ 2026-08-08 |

Le pot de 6bb, c'est ==les 3 de la SB plus les 3 de la BB==. Les deux blindes sont déjà dans le coup, donc il n'y a aucune blinde morte à côté. Le stack effectif fait ==100 − 3 = 97bb==.

L'affichage est en **grosses blindes** : les mises se lisent « Bet 2bb (33 % du pot) », avec le montant et la fraction du pot ensemble, et l'EV se lit « EV (bb) ».

## À quelle fréquence la petite blinde mise-t-elle vraiment ?

**67,4 % de mise, 32,6 % de check.** Sur 538 combos, 362,1 partent dans la mise.

| Première action de la SB | Fréquence | Combos |
|---|---|---|
| Bet 2bb (33 % du pot) | **67,4 %** | 362,1 |
| Check | 32,6 % | 175,9 |

Aligné avec le reste de la série, l'écart saute aux yeux.

| Spot | Qui est hors de position | Fréquence de mise OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB caller | 0,1 %–1,9 % |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3,0 %–3,2 % |
| **7♦6♦5♣ blind contre blind (⑫)** | **SB ouvreur** | **9,6 %** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11,2 % |
| 9♥8♥7♣ connecté (④) | BB caller | 23,7 % |
| **K♥10♦6♠ blind contre blind (⑪)** | **SB ouvreur** | **67,4 %** |
| **A♠A♥6♦ blind contre blind (⑬)** | **SB ouvreur** | **80,1 %** |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-betteur | 98–100 % |

**Ne lis pas ça comme « seul le siège compte ».** Le même siège de petite blinde ouvreuse produit 9,6 % sur ⑫, 67,4 % ici et 80,1 % sur ⑬ : un **écart de 70,5 points**. Et les 9,6 % de ⑫ sont *plus bas* que les callers de ⑤ (11,2 %) et de ④ (23,7 %). L'image d'une falaise entre callers et agresseurs n'apparaît que si tu effaces ces deux lignes. Ce qui est sûr, c'est que **les pots 3-bet (98–100 %) sont à part** ; le reste de l'écart est fixé par **le siège et le board ensemble**.

## Pourquoi le joueur hors de position mise-t-il en premier ici ?

**Parce que c'est le siège où l'agresseur préflop parle aussi en premier au flop.** ⚠ Dans cette série, toutes les mises en premier majoritaires viennent de ce siège, mais le siège ne garantit rien, et un caller peut quand même miser en premier une partie du temps (23,7 % sur ④). La même structure produit **9,6 %** [sur ⑫](/fr/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp") et **80,1 %** [sur ⑬](/fr/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp"). Le siège ouvre la porte ; le board décide jusqu'où tu la franchis.

Dans une main ordinaire, ces deux choses se séparent. Quand le bouton ouvre et que la grosse blinde paye, **l'agresseur est le bouton mais celui qui parle en premier est la grosse blinde.** C'est ce qui construit la structure « check, puis c-bet (mise de continuation) », et c'est à ça que ressemblaient tous les spots de ① à ⑦.

En blind contre blind, les deux se confondent. La petite blinde a relancé, et la petite blinde parle en premier au flop. **L'avantage de range et l'ordre d'action tombent sur le même joueur.**

| | Agresseur préflop | Premier à parler au flop | Mise OOP |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | séparés → 0,1 %–23,7 % |
| SB vs BB (⑪ K-10-6) | **SB** | **SB** | réunis → **67,4 %** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | réunis, et pourtant → **9,6 %** |

⚠ **N'efface pas la troisième ligne.** « Réunis » **ouvre la porte sans décider jusqu'où tu vas** : [⑫](/fr/blog/blind-battle-connected-board) a une structure de sièges identique à celle-ci, à la lettre près, et mise 9,6 %. Sans ce recouvrement, tu ne mises presque jamais en premier (la première ligne) ; avec, il te faut encore **que le board aille avec ta range** avant de vraiment miser.

L'équité met un chiffre sur cet avantage. **SB 55,3 % contre BB 44,7 %.** De ① à ⑦, le joueur hors de position était à 45,1 %–48,5 %, toujours sous la moitié : la direction opposée.

:::pull[Être hors de position ne décide pas si tu mises en premier : c'est la rencontre entre ta range et ce board précis qui fait l'essentiel du travail.]:::

Le manque de position est le même pour la grosse blinde de ①–⑦ et pour la petite blinde ici. Ce qui les sépare, c'est **la relation entre la range et le board**, ⚠ et tu ne peux pas la réduire à la « range » seule. Sur [le board 7-6-5](/fr/blog/blind-battle-connected-board), la range est *littéralement identique* et le check monte à 90,4 %.

## Pourquoi 67 % ici quand un pot 3-bet fait 100 % ?

**Parce que la range de défense de la grosse blinde est large.** C'est là que ce spot se sépare de la mise à 100 % d'un pot 3-bet.

Les deux ranges ici ont presque la même taille : **538 combos pour la SB, 525 pour la BB.** Autant de mains ont suivi au lieu de se coucher. La petite blinde n'a relancé qu'à 3bb, donc la grosse blinde, déjà engagée pour 1bb, n'avait que 2bb à ajouter, et le prix était assez bon pour défendre large.

Contre une range large, tu **ne peux pas tout miser sur la chance qu'elle se couche.** Donc 32,6 % restent en check.

Les mains qui checkent ont leur propre rôle. **Les mains trop faibles pour miser** et **les mains qui checkent pour provoquer une mise** vivent toutes là. Si l'adversaire lit ce check comme de la faiblesse et mise, un [check-raise](/fr/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") l'attend.

:::note[⚠ Ce spot d'étude a été résolu avec un seul sizing, un tiers du pot, comme unique option. Ouvre un sizing plus gros dans l'arbre et les 67,4 % eux-mêmes peuvent bouger. Lis-le comme « petit et large est la réponse *dans ces conditions* ».]:::

## En quoi les deux ranges diffèrent-elles ?

**Les catégories fortes sont du côté de la petite blinde ; les mains non faites sont du côté de la grosse blinde.**

![Infographie de composition des ranges comparant les catégories de mains de la petite blinde et de la grosse blinde sur un board K-10-6](/images/gto-sb-king-mid-ranges-en.webp "K-10-6 en blind contre blind · composition catégorie par catégorie — la grosse blinde a environ 10 points de mains non faites en plus")

| Catégorie | SB (OOP · ouvreur) | BB (IP · caller) |
|---|---|---|
| Set/Brelan | **1,7 %** | 0,6 % |
| Double Paire | 2,4 % | **2,5 %** |
| Overpair (AA) | **1,1 %** | 0,0 % |
| Top paire (K) | **15,6 %** | 10,9 % |
| Deuxième paire (10) | 11,7 % | **13,7 %** |
| Paire faible | 6,1 % | **8,0 %** |
| Underpair | **10,0 %** | 8,0 % |
| Hauteur As | **26,8 %** | 22,1 % |
| Pas de main faite | 24,5 % | **34,3 %** |

Deux cases décident tout. **La top paire est à 15,6 % contre 10,9 % en faveur de la petite blinde, et les mains non faites à 24,5 % contre 34,3 %, presque 10 points de plus pour la grosse blinde.**

⚠ Ne lis pas pour autant « non faite » comme « n'a rien ». Le solver compte les tirages sur un axe séparé : **les quatre lignes ci-dessous s'excluent mutuellement et chaque colonne fait 100 %.**

| Tirage | SB (OOP) | BB (IP) |
|---|---|---|
| Tirage quinte bilatéral | 3,0 % | 2,3 % |
| Tirage ventral | **16,4 %** | **16,0 %** |
| Tirage couleur backdoor | 17,8 % | **21,1 %** |
| Aucun tirage | **62,8 %** | 60,6 % |

**Il n'y a aucune ligne de tirage couleur** : le board est rainbow, donc aucun des deux joueurs ne peut tenir quatre cartes à la couleur sur ce flop. Ce qu'ils ont à la place, c'est une grosse tranche de backdoor, et un backdoor a besoin d'un runner-runner, donc il se complète rarement.

Les 3,0 % de tirage bilatéral donnent ==0,030 × 538 = environ 16 combos==, et sur ce board, une seule main fait un tirage quinte bilatéral : **Q-J** (K-Q-J-10, qui a besoin d'un as ou d'un neuf : **huit outs**). Seize, c'est exactement le nombre de combos de Q-J. La ligne des tirages ventraux est plus épaisse parce que A-Q, A-J, Q-9, J-9, 9-8 et 8-7 y tombent tous.

Reste que, quand un tiers de la range adverse n'a même pas touché de paire et que ton propre haut de range est plus lourd, miser petit et large est la norme.

Les brelans servis vont dans le même sens. Trois paires servies font un brelan servi (set) sur ce board, K-K, T-T et 6-6, et **la petite blinde tient les trois, neuf combos (1,7 %), alors que la grosse blinde n'a plus que 6-6, trois combos (0,6 %).** La grosse blinde 3-bet K-K et T-T face à une ouverture de la petite blinde au lieu de payer. Les overpairs appartiennent à la petite blinde pour la même raison : A-A, six combos.

## Pourquoi la réalisation d'équité atteint-elle 103,1 % sans position ?

**Parce que l'avantage de range l'emporte *de justesse* sur l'avantage de position.** Pose les chiffres de ce spot sur toute la série et la réponse apparaît.

| Élément | SB (OOP) | BB (IP) |
|---|---|---|
| Équité | 55,3 % | 44,7 % |
| EV (bb) | 3,42 | 2,58 |
| **EQR (réalisation d'équité)** | **103,1 %** | 96,1 % |

Le pot fait 6bb, donc la part de la petite blinde est ==6 × 55,3 % = 3,318bb== alors que l'EV réelle est de 3,42bb. Ça fait ==3,42 ÷ 3,318 ≈ 103,1 %==.

Prends sept spots de la série et classe-les par EQR :

| Spot | Qui est hors de position | Équité OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ sec (①) | caller | 45,1 % | 84,0 % |
| 6♠5♥2♦ bas (⑦) | caller | 48,3 % | 84,3 % |
| 9♥8♥7♣ connecté (④) | caller | 48,5 % | 93,2 % |
| **K♥10♦6♠ blind contre blind (⑪)** | **ouvreur** | **55,3 %** | **103,1 %** |
| 8♦5♣2♠ pot 3-bet (⑩) | 3-betteur | 58,6 % | 106,9 % |
| A♦K♠2♥ pot 3-bet (⑧) | 3-betteur | 68,9 % | 109,6 % |
| Q♥10♥7♠ pot 3-bet (⑨) | 3-betteur | 58,3 % | 117,8 % |

**Chaque ligne au-dessus de 100 % appartient à quelqu'un qui n'est pas le caller.** ⚠ Ne le lis pas à l'envers : **« ne pas être le caller » n'implique pas « au-dessus de 100 % ».** [Le board 7-6-5](/fr/blog/blind-battle-connected-board), absent de ce tableau, c'est la même petite blinde ouvreuse à **85,3 %**, au milieu des callers. Et ce spot est le plus proche de la ligne de tous : 103,1 % la dépasse de justesse.

⚠ **Une EQR plus haute ne veut pas non plus dire un plus gros avantage.** Lis le classement tel qu'il est : le plus gros avantage de range du tableau, ⑧ à **68,9 %** d'équité, tombe à **109,6 %**, *sous* les **117,8 %** de ⑨ à **58,3 %** d'équité, dix points de moins. L'EQR, c'est ==EV ÷ (équité × pot)==, donc **l'équité est au dénominateur** : plus elle est basse, plus le ratio est grand pour la même EV. C'est vrai qu'un simple avantage d'open-raise s'arrête à 103,1 % ; la raison n'est pas « il aurait pu atteindre 117,8 % ».

Les 96,1 % de la grosse blinde sont l'autre face de la même histoire. **La position, et quand même en dessous de sa part.** Pourquoi la position paye d'habitude, et quand elle ne suffit pas, c'est dans [pourquoi la position compte](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Qu'est-ce que ça change à la table ?

- **En blind contre blind, ne te rabats pas par défaut sur « pas de position, donc check ».** Si tu as ouvert de la petite blinde, l'avantage de range **préflop** est à toi, et le solver mise 67,4 % sur ce board. **Mais tu lis quand même le board** : un roi avec un kicker broadway convient à l'ouvreur, et sur les boards qui conviennent au caller, le check revient même depuis ce siège. Le [board connecté 7♦6♦5♣](/fr/blog/blind-battle-connected-board) en est l'exemple exact : la même petite blinde ne mise que 9,6 %.
- **Le sizing est d'un tiers du pot.** Avec une grosse blinde qui défend 525 combos, petit et large, c'est juste. ⚠ N'en fais pas « miser gros est moins bon » : **ce spot d'étude n'avait que le sizing de 33 % dans l'arbre.** Sans sizing plus gros résolu, « et si j'avais misé gros ? » est une question à laquelle ce calcul ne peut pas répondre. [Le spot A-A-6](/fr/blog/ace-paired-board-strategy), plus loin dans la série, a bien 75 % disponible à côté.
- **★À SPR 16,2, décide à l'avance ce que veut dire une relance.** Miser 67,4 % de ta range veut dire faire souvent face à des relances, et avec **seize pots** encore derrière, ce n'est pas un spot où la top paire engage tout son stack. C'est l'inverse d'un pot 3-bet à SPR 4,0, où « relance » voulait dire « le stack y va ». Ici, payer et voir une turn (le tournant) couvre une bien plus grande partie de ta range, et en dehors des neuf combos de brelan servi et de la **double paire (K-T, K-6, T-6)**, il y a peu de raisons de s'engager. 🪶 Note que **A-A est *sous* la double paire** : pas parce que le roi du board la « coince », mais parce qu'une overpair reste une paire dans la hiérarchie des mains, et qu'une paire perd contre une double paire. Le tableau des catégories les liste dans cet ordre, brelan servi → double paire → overpair (les 1,7 % · 2,4 % · 1,1 % à côté sont des parts de range, pas un classement de force). ⚠ Le nœud après une relance n'est pas dans cette résolution : c'est donc un jugement tiré du SPR, pas un chiffre du solver.
- **Quand tu défends la grosse blinde, souviens-toi de ce que te coûte le 3-bet avec K-K et T-T.** Le résultat, c'est exactement la structure de ce board : le seul brelan servi de la grosse blinde, c'est 6-6. La range de call s'amincit d'autant.
- **Ne lis pas les 32,6 % de checks comme de la faiblesse.** Des mains de check-raise y sont mélangées. Les repères généraux de la [stratégie de c-bet](/fr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") valent la peine d'être revérifiés à ce siège.

:::readnext[À lire ensuite]
/fr/blog/3bet-pot-low-board | Trois combos touchent ce flop, et la range mise quand même 97,8 % | /images/gto-3bp-low-oop-en.webp
/fr/blog/blind-battle-connected-board | Même siège, même stack, et la mise tombe de 67 % à 9,6 % | /images/gto-sb-connected-oop-en.webp
:::

## Vérifie toi-même

Chaque chiffre ici apparaît si tu ouvres le [solver poker gratuit](/fr/solver) et cliques sur **Spots d'étude → « Board K-high avec un T » → [⚡ Voir les résultats]**. Pour jouer le même spot comme un exercice, ouvre le [Trainer GTO](/fr/solver) depuis la barre latérale : il te distribue une main au hasard et, une fois ton action choisie, il te montre la fréquence mixte et la **Perte d'EV (bb)** de ton choix. Ton historique est conservé sur cet appareil par défaut ; associe un compte HoldemMaster pour retrouver ton historique des Spots d'étude et du Défi du jour sur n'importe quel appareil.

Regarde d'abord les étiquettes de joueurs en haut : **« OOP (SB (ouvreur)) »**. Une fois que tu vois que c'est différent du « OOP (BB (caller)) » des spots précédents, ce que cet article veut dire par « le rôle a changé » devient immédiatement clair. Gratuit, rien à installer, aucun compte.

**Q. La petite blinde doit-elle toujours c-bet en blind contre blind ?**

A. Pas toujours. Sur ce board, le solver mise 67,4 % et laisse 32,6 % en check. Mais c'est un autre monde qu'un pot simplement relancé ordinaire, où le joueur hors de position mise 0,1 %–23,7 %. **Quand le rôle change, la stratégie par défaut change.** Garde en tête que K-10-6 est un board qui convient à l'ouvreur : de la même façon qu'un type de board séparait 0,1 % de 23,7 % dans les spots précédents, la fréquence de mise de la petite blinde baisse sur les boards qui conviennent au caller.

**Q. Être hors de position, est-ce toujours mauvais au poker ?**

A. Mauvais, mais pas décisif. Dans ce spot, la petite blinde prend 103,1 % de sa part d'équité sans position, alors que la grosse blinde, qui a la position, n'en encaisse que 96,1 %. Un avantage de range assez gros couvre un avantage de position. Et dans l'autre sens : une range faible réalise mal son équité, même en position.

**Q. Pourquoi miser aussi petit qu'un tiers du pot ?**

A. Parce que la range de défense adverse est large. Les deux ranges ont presque la même taille, 538 combos contre 525. Contre quelqu'un dont tu ne peux pas attendre qu'il se couche, mettre la pression large avec un petit sizing rapporte plus. Garde en tête que ce spot d'étude n'avait que le sizing de 33 % comme candidat.

**Q. Pourquoi 6-6 est-il le seul brelan servi de la grosse blinde sur ce board ?**

A. Parce que K-K et T-T sont 3-betées face à une ouverture de la petite blinde au lieu d'être payées. La range de call de la grosse blinde ne garde donc que 6-6, trois combos (0,6 %), alors que la petite blinde tient K-K, T-T et 6-6 pour neuf combos (1,7 %). A-A est absente de la grosse blinde pour la même raison.
`.trim(),
};

export default POST;
