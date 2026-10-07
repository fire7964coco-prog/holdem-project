import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Les positions au poker : le nom de chaque siège, UTG, cut-off, bouton et blindes",
  seoTitle: "Ta place change de nom à chaque main — Positions au poker",
  desc: "UTG cette main, hijack la suivante ? Les noms suivent le bouton, pas les chaises. Les positions au poker de UTG aux blindes, le 6-max et qui parle en premier.",
  tldr: "Les positions au poker sont les noms des sièges mesurés à partir du bouton (UTG, lojack, hijack, cut-off, bouton et les blindes), et elles tournent normalement d'un siège dans le sens des aiguilles d'une montre à chaque main. Préflop, UTG parle en premier et la grosse blinde en dernier ; postflop, la petite blinde parle en premier et le bouton en dernier (en heads-up, le bouton est la petite blinde : premier à parler préflop, dernier postflop). Les numéros de siège physiques ne bougent jamais ; les positions, si.",
  category: "strategy",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Vue de dessus d'une table de poker professionnelle montrant 9 positions de joueurs avec leurs piles de jetons et un bouton de donneur doré",
  tags: ["position poker", "positions au poker", "utg poker", "cut off poker", "bouton poker", "position poker 6 max", "position poker table", "under the gun poker", "hijack poker"],
  content: `
Ma toute première partie de cash game en live, j'étais assis à ce que j'apprendrais plus tard s'appeler UTG. Je regarde mes cartes : J♥ J♠. Je relance. Le hijack suit. Le cut-off suit. Le bouton suit. La grosse blinde fait 3-bet. Je ne savais absolument pas quoi faire — j'ai payé, et j'ai laissé fondre mes jetons sur trois tours d'enchères.

Trois mains plus tard, j'étais au bouton avec les mêmes J♥ J♠. Je relance. Tout le monde se couche. J'empoche $14 sans même voir un flop.

Même main. Résultat complètement différent. La seule chose qui avait changé, c'était mon siège — et ce soir-là j'ai compris que je ne savais même pas comment s'*appelaient* les sièges, encore moins ce qu'ils voulaient dire. Si tu apprends encore comment se déroule une main complète de la distribution à l'abattage, commence par le [guide des règles du Texas Hold'em](/fr/blog/texas-holdem-rules-for-beginners) ; cet article est le plan de table que ce guide suppose que tu connais. Et pour savoir quoi *faire* une fois assis, la prochaine étape, c'est le [guide pour jouer en position et hors de position](/fr/blog/holdem-position-play).

---

> **Réponse rapide**
> Les positions au poker sont les ==sièges nommés à partir du bouton du donneur== — UTG, lojack, hijack, cut-off, bouton, petite blinde, grosse blinde — et elles ==tournent normalement d'un siège dans le sens des aiguilles d'une montre à chaque main==, en même temps que le bouton. Préflop, UTG parle en premier et la grosse blinde en dernier. Postflop, la petite blinde parle en premier et le bouton en dernier. (En heads-up, le bouton est la petite blinde : premier à parler préflop, dernier postflop.)

---

## Comment s'appellent les différentes positions au poker ? (plan de table)

Une position n'est pas une chaise — c'est un **nom qui dit où tu es assis par rapport au bouton du donneur**, et il détermine ==à quel moment tu parles à chaque tour d'enchères==. Dans une partie normale, le bouton avance d'un siège dans le sens des aiguilles d'une montre après chaque main : chaque joueur change donc de nom d'une main à l'autre.

Voici le plan complet des positions à 9 joueurs (9-max) — chaque nom de siège, son abréviation, sa zone, et à quel rang il parle avant et après le flop :

![Table de poker à neuf joueurs avec des piles de jetons à chaque place et le bouton du donneur marqué D devant un joueur](/images/holdem-button-position-hero.webp "Le bouton du donneur fixe la position de chaque siège et l'ordre de parole")

| Siège | Abrév. | Zone | Préflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Début | 1er (premier) | 3e |
| Under the Gun +1 | **UTG+1** | Début | 2e | 4e |
| Under the Gun +2 | **UTG+2** | Début | 3e | 5e |
| Lojack | **LJ** | Milieu | 4e | 6e |
| Hijack | **HJ** | Milieu | 5e | 7e |
| Cut-off | **CO** | Fin | 6e | 8e |
| Bouton | **BTN** | Fin | 7e | **Dernier** |
| Petite blinde | **SB** | Blinde | 8e | **1er** |
| Grosse blinde | **BB** | Blinde | 9e (dernier) | 2e |

Remarque l'inversion : ==les blindes parlent en dernier préflop mais en premier postflop==, alors que le bouton parle en dernier à chaque tour après le flop. C'est cet ordre — pas les cartes — qui rend certains sièges structurellement meilleurs que d'autres.

> **Note pour la table live :** le bouton est un palet physique qui avance normalement d'un siège dans le sens des aiguilles d'une montre à chaque main. « UTG », c'est celui qui est assis trois places à gauche du bouton à cet instant — pas une chaise fixe.

---

## Noms et abréviations des positions au poker : UTG, LJ, HJ, CO, BTN, SB, BB

Les positions portent des noms anglais, même dans les clubs et sur les sites français : UTG, lojack, hijack, cut-off, bouton, petite et grosse blinde. Chaque abréviation désigne une distance précise par rapport au bouton et se range dans une zone — début, milieu, fin ou blindes. Voici tous les noms que tu entendras à table ou liras dans un article de stratégie, décodés :

| Abrév. | Nom complet | Groupe | Ce que ça désigne |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Début (EP) | Premier à parler préflop, juste à gauche de la grosse blinde |
| **UTG+1 / UTG+2** | Under the Gun plus un / plus deux | Début (EP) | Les sièges suivants dans le sens des aiguilles d'une montre après UTG |
| **LJ** | Lojack | Milieu (MP) | Trois sièges à droite du bouton |
| **HJ** | Hijack | Milieu (MP) | Deux sièges à droite du bouton |
| **CO** | Cut-off | Fin (LP) | Un siège à droite du bouton |
| **BTN** | Bouton (dealer) | Fin (LP) | Le siège qui a le palet du donneur — dernier à parler postflop |
| **SB** | Petite blinde | Blindes | Premier siège à gauche du bouton ; pose la petite mise obligatoire |
| **BB** | Grosse blinde | Blindes | Deuxième siège à gauche du bouton ; pose la mise obligatoire complète |

Tu verras aussi les étiquettes de zone plus larges : ==**EP** (early position, position de début)== regroupe les sièges UTG, ==**MP** (middle position, position intermédiaire)== regroupe lojack et hijack, et ==**LP** (late position, position tardive)== regroupe cut-off et bouton. Les livres plus anciens rangent lojack et hijack sous « MP1/MP2 » — mêmes sièges, autres étiquettes.

Connaître les noms, c'est la première étape. Ce qu'il faut réellement *faire* depuis chacun d'eux — ranges, vols, jeu en position contre jeu hors de position — est une question de stratégie, et elle est traitée dans le [guide de stratégie de position](/fr/blog/holdem-position-play).

---

## Numéro de siège ou position ? Le siège 1 n'est pas une position

Un numéro de siège est fixé à la chaise ; une position tourne avec le bouton à chaque main. Quand le floor annonce **« Table 12, siège 5 »**, ce numéro ==n'a rien à voir avec les positions au poker== — et c'est le piège dans lequel tombe presque chaque joueur qui découvre le live.

Dans la plupart des salles, les sièges physiques sont numérotés à partir de la gauche immédiate du donneur — ==le siège 1 est par convention la première chaise à gauche du donneur==, puis on compte dans le sens des aiguilles d'une montre jusqu'au siège 9 ou 10, à la droite du donneur. Ces numéros sont vissés aux chaises. Le personnel s'en sert pour la logistique : placer les nouveaux joueurs, apporter des jetons, annoncer le temps.

Les positions, c'est l'inverse — elles ==tournent d'un siège dans le sens des aiguilles d'une montre avec le bouton, normalement à chaque main==. Le siège 5 peut être le bouton à cette main, le cut-off à la suivante, puis le hijack encore après.

:::compare
Numéros de siège (physiques) | Positions (poker)
Fixés à la chaise — le siège 1 est en général à la gauche immédiate du donneur | Bougent avec le bouton à chaque main
Utilisés par le personnel : « Siège 5, les jetons arrivent » | Utilisées en stratégie : « le cut-off ouvre »
Ne changent jamais pendant une session | Changent normalement à chaque main, d'un siège dans le sens des aiguilles d'une montre
Te disent OÙ tu es assis | Te disent QUAND tu parles
:::

Alors « c'est quoi le siège 1 au poker ? » a une réponse sans intérêt — c'est une chaise — et c'est exactement là le point. ==Un numéro de siège est une adresse ; une position est un rôle==, et ce rôle est redistribué à chaque main.

---

## Quelle est la position UTG au poker ? (under the gun)

**UTG veut dire « Under the Gun »** (littéralement « sous le canon ») — le siège immédiatement à gauche de la grosse blinde, et le ==premier joueur à parler préflop==. Le nom évoque la pression de la place : tu dois engager des jetons avant d'avoir vu ce que fait le moindre adversaire, comme si tu agissais avec une arme pointée sur toi.

Dans une partie complète à 9 joueurs, il y a en fait trois sièges « under the gun » — **UTG, UTG+1 et UTG+2** — comptés dans le sens des aiguilles d'une montre à partir de la grosse blinde. Seul le premier parle vraiment à l'aveugle ; les sièges +1 et +2 voient au moins une ou deux décisions avant la leur.

Voilà pour la définition. *Comment jouer* UTG — pourquoi cette place exige la range la plus serrée de la table, et pourquoi « relance ou couche-toi » y est la ligne standard — est expliqué dans le [guide de stratégie de position](/fr/blog/holdem-position-play).

---

## Hijack et lojack : d'où viennent ces noms ? (et la middle position, MP)

**Le hijack (HJ)** est le siège situé deux places à droite du bouton. **Le lojack (LJ)** est un cran avant, trois places à droite du bouton. Ensemble, ils forment la middle position (MP) d'une partie 9-max moderne. Leurs noms viennent de l'argot des tables anglophones.

Comme souvent avec l'argot du poker, aucune source ne fait foi — mais l'histoire qu'on raconte le plus souvent est la suivante :

- **Hijack :** le cut-off et le bouton sont les sièges classiques du vol de blindes. Quand le joueur placé un siège plus tôt relance le premier, il ==**« détourne » (hijack) le vol**== que les places tardives s'apprêtaient à faire — et le siège a hérité du nom.
- **Lojack :** est arrivé plus tard, comme ==un clin d'œil à « hijack »== — le siège un cran « plus bas » dans la hiérarchie. La plupart des versions y entendent aussi un écho de la marque antivol LoJack : un hijack, un cran en dessous.

Prends les deux comme des légendes de table plutôt que comme de l'étymologie. Ce qui n'est pas une légende : hijack et lojack sont des noms réels et standard, que tu verras sur la plupart des tableaux de ranges modernes et des sites d'entraînement — d'où l'intérêt de les connaître par cœur.

---

## Qu'est-ce que la position cut-off au poker ? Et le bouton (dealer) ?

**Le cut-off (CO)** est le siège ==juste à droite du bouton== — la dernière position avant le donneur. Deux explications du nom circulent : selon la première, ce siège « coupe » (cut off) au bouton sa chance de voler les blindes en relançant avant lui ; selon une plus ancienne, dans les parties maison où les joueurs distribuent eux-mêmes, le joueur à droite du donneur ==coupait le paquet== après le mélange. Quoi qu'il en soit, le nom est resté, et le cut-off est partout compté comme une position tardive.

**Le bouton (BTN)** — qu'on appelle aussi **position du donneur** (dealer) — est le siège marqué par le palet physique du donneur. Au casino, un croupier professionnel distribue les cartes : le bouton indique donc simplement ==qui *distribuerait*==, et c'est lui qui ancre l'ordre des enchères — le bouton parle ==en dernier à chaque tour après le flop==, et tous les autres sièges de la table sont nommés d'après leur distance à ce palet.

Cette garantie de parler en dernier explique pourquoi le bouton est considéré comme le siège le plus rentable du poker — l'argument complet, chiffres à l'appui, se trouve dans le [guide de stratégie de position](/fr/blog/holdem-position-play). Et si tu veux voir quelles mains ouvrir depuis le bouton, consulte le [tableau des mains de départ par position](/fr/hand-chart).

---

## Les blindes : les sièges SB et BB

Les deux sièges à gauche du bouton sont à la fois des positions *et* des mises obligatoires :

- **Petite blinde (SB) :** le premier siège à gauche du bouton. Elle pose une mise obligatoire — en général la moitié de la grosse blinde — avant la distribution.
- **Grosse blinde (BB) :** le siège suivant dans le sens des aiguilles d'une montre. Elle pose la mise obligatoire complète, qui fixe le prix d'entrée dans le coup.

En tant que positions, elles se définissent par l'inversion de l'ordre de parole : les blindes parlent ==en dernier préflop== (elles ont déjà payé, donc tous les autres doivent d'abord répondre à leurs mises) mais ==en premier postflop==, avant toute la table, au flop, à la turn (le tournant) comme à la river (la rivière).

Pourquoi les blindes existent, combien elles coûtent par tour de table et comment les défendre, c'est un sujet à part entière — le [guide de la petite blinde et de la grosse blinde](/fr/blog/holdem-blind-meaning) couvre en détail la mécanique et les calculs des mises obligatoires.

---

## Quel est l'ordre des joueurs au poker ? Qui parle en premier, préflop et postflop ?

Préflop, UTG parle en premier et la grosse blinde en dernier. Postflop, la petite blinde (ou le premier siège encore actif à gauche du bouton) parle en premier et le bouton en dernier. C'est la question la plus posée sur les positions — voici la réponse en un seul tableau :

| Tour | Premier à parler | Dernier à parler |
|:---|:---|:---|
| **Préflop** | **UTG** — premier siège à gauche de la grosse blinde | **Grosse blinde** — peut checker ou relancer si personne n'a relancé |
| **Flop / turn / river** | **Petite blinde** — ou le premier siège encore actif à gauche du bouton | **Bouton** — ou le siège actif le plus proche avant lui |

Alors — **les blindes parlent-elles en premier ?** ==Préflop, non. Postflop, oui.== Avant le flop, les blindes ont déjà mis de l'argent au pot : l'action commence donc par UTG et revient à elles en dernier — la grosse blinde parle après tout le monde. Après le flop, l'ordre repart du bouton dans le sens des aiguilles d'une montre : la petite blinde parle en premier, la grosse blinde en deuxième, et le bouton toujours en dernier.

Et entre les deux blindes : ==la petite blinde parle avant la grosse blinde à chaque tour==, préflop comme postflop — avec une exception, le heads-up, expliqué plus bas.

Une question voisine mérite une ligne : à **l'abattage (showdown)**, par défaut, le dernier joueur à avoir misé ou relancé montre en premier (si tout le monde checke à la river, c'est le premier siège actif à gauche du bouton qui montre) — l'étiquette complète est dans le [guide des règles de l'abattage](/fr/blog/holdem-showdown-rules). Pour la séquence complète d'une main, tour par tour, consulte [l'ordre de jeu au poker](/fr/blog/holdem-game-order).

---

## Combien de positions selon le nombre de joueurs ? 6-max, 8-max, 9-max (full ring)

Les noms des positions ne changent pas avec la taille de la table — ==ils disparaissent en partant de la position de début== à mesure qu'on retire des joueurs. Le bouton, les blindes, le cut-off et le hijack tiennent le plus longtemps ; les sièges UTG+1 et au-delà n'existent qu'aux tables full ring. Voici le plan de 2 à 10 joueurs, dans l'ordre de parole préflop :

| Joueurs | Ordre de parole préflop (premier → dernier) |
|:---:|:---|
| **2 (heads-up)** | BTN (pose la petite blinde) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (le siège « UTG » ici) → BTN → SB → BB |
| **5** | HJ (le siège « UTG » ici) → CO → BTN → SB → BB |
| **6 (6-max)** | UTG (aussi appelé LJ) → HJ → CO → BTN → SB → BB |
| **9 (full ring)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**Le heads-up est celui qui déroute tout le monde.** À deux joueurs, ==le bouton pose la petite blinde== — le même siège est à la fois BTN et SB. Le bouton parle donc ==**en premier** préflop== (la grosse blinde parle en dernier, comme toujours) mais reste ==**dernier** à chaque tour après le flop==, tandis que la grosse blinde parle en premier postflop. Toutes les autres tailles de table suivent le schéma normal ; seul le heads-up fusionne le meilleur siège avec une blinde.

**6-max contre full ring**, c'est une simple soustraction : les trois sièges de début (UTG, UTG+1 et UTG+2) disparaissent et le lojack hérite du nom UTG, si bien qu'en 6-max on a UTG → HJ → CO → BTN → SB → BB. La conséquence pratique n'est pas qu'un siège joue « plus tard » — un cut-off a les mêmes trois joueurs derrière lui dans les deux cas. C'est qu'==une fois les sièges de début partis, tu te retrouves bien plus souvent aux blindes et en position tardive, et moins de joueurs ouvrent devant toi== — UTG en 6-max fait face à cinq adversaires, pas huit — ce qui explique que le premier siège ouvre plus large et que tu joues davantage de mains en short-handed, même si la range du cut-off change à peine. Les chiffres siège par siège sont dans le [guide de stratégie de position](/fr/blog/holdem-position-play), et les mains exactes qui remplissent chaque range sont détaillées dans le [guide des mains de départ](/fr/blog/holdem-starting-hands-chart).

> **Attention aux étiquettes :** certains sites et certaines salles appellent le premier siège du 6-max « LJ » ou « MP » au lieu de UTG, et les sièges du milieu à 10 joueurs apparaissent parfois sous « MP1/MP2 ». Les étiquettes varient ; l'ordre de parole, jamais.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-position-play | Stratégie de position : en position ou hors de position | /images/holdem-position-play-hero.webp
/fr/blog/holdem-starting-hands-chart | Les mains de départ par position | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Que signifie UTG au poker ?**

A. UTG veut dire « Under the Gun » — le siège immédiatement à gauche de la grosse blinde, et le premier joueur à parler préflop. Le nom évoque la pression d'engager des jetons avant d'avoir vu la décision d'un seul adversaire. En full ring, les deux sièges suivants s'appellent UTG+1 et UTG+2.

**Q. C'est quoi le hijack au poker ?**

A. Le hijack (HJ) est le siège situé deux places à droite du bouton, juste avant le cut-off. C'est le plus tardif des deux sièges de middle position en 9-max, et le deuxième siège à parler préflop en 6-max. L'histoire qu'on raconte le plus souvent : une relance depuis ce siège « détourne » (hijack) le vol de blindes que le cut-off et le bouton étaient placés pour faire.

**Q. C'est quoi le lojack (low jack) au poker ?**

A. Le lojack (LJ) est le siège situé trois places à droite du bouton — le plus précoce des deux sièges de middle position en 9-max. En 6-max, c'est le premier siège à parler, et on l'appelle en général simplement UTG. On présente souvent le nom comme un clin d'œil à « hijack » (un siège plus bas), souvent associé à la marque antivol LoJack — une légende de table plutôt qu'une étymologie documentée.

**Q. Qui doit parler en premier au poker, la petite ou la grosse blinde ?**

A. La petite blinde parle avant la grosse blinde à chaque tour. Préflop, les deux blindes parlent en dernier (la grosse blinde tout à la fin — avec l'option de checker ou de relancer si personne n'a relancé) ; postflop, la petite blinde est le premier siège de la table à parler. La seule exception est le heads-up, où le bouton pose la petite blinde et où la grosse blinde parle en premier postflop.

**Q. Combien y a-t-il de positions au poker en 6-max ?**

A. Six : UTG (aussi appelé lojack), hijack, cut-off, bouton, petite blinde et grosse blinde. Par rapport à une table 9-max, les trois sièges de début (UTG, UTG+1 et UTG+2) disparaissent simplement et le lojack hérite du nom UTG — les noms sont retirés en partant de la position de début, donc les deux sièges du milieu survivent. Chaque siège qui garde son nom — hijack, cut-off, bouton et blindes — a toujours le même nombre de joueurs derrière lui que son homonyme en full ring, mais sans les sièges de début tu te retrouves bien plus souvent aux blindes et en position tardive, donc les ranges sont en moyenne plus larges.

**Q. Les positions changent-elles à chaque main ?**

A. Oui. Le bouton avance d'un siège dans le sens des aiguilles d'une montre après chaque main, et comme toutes les positions sont nommées d'après leur distance au bouton, la position de chaque joueur se décale normalement d'un siège à chaque main. Sur un tour de table complet à une table stable, tu occupes chaque position exactement une fois — les exceptions arrivent quand un joueur est éliminé ou part et que la table joue un bouton mort (le même joueur peut alors parler en dernier deux mains consécutives), ou quand des joueurs arrivent, que des tables cassent ou que la partie passe en heads-up.

**Q. C'est quoi le siège 1 au poker ?**

A. Le siège 1 est une chaise physique, pas une position — dans la plupart des salles, c'est le premier siège à la gauche immédiate du donneur, et les numéros courent dans le sens des aiguilles d'une montre jusqu'au siège 9 ou 10. Le personnel utilise les numéros de siège pour placer les joueurs et pour la logistique. Les positions au poker (UTG, bouton, blindes) tournent indépendamment à chaque main : le siège 1 peut donc être n'importe quelle position.

**Q. Qu'est-ce que la position cut-off au poker ?**

A. Le cut-off (CO) est le siège juste à droite du bouton — la dernière position avant le donneur, comptée partout comme une position tardive. Le nom viendrait soit de ce que ce siège « coupe » au bouton sa chance de voler les blindes en relançant avant lui, soit des parties maison où le joueur à droite du donneur coupait le paquet après le mélange.

**Q. Quelle est la meilleure position au poker ?**

A. Le bouton. Il parle en dernier à chaque tour après le flop, et cette garantie fait de lui le siège considéré comme le plus rentable du poker. L'argument complet, chiffres à l'appui, est dans le [guide pour jouer en position](/fr/blog/holdem-position-play).

---

## À retenir

1. **Les positions sont des noms, pas des chaises.** Chaque siège est nommé d'après sa distance au bouton du donneur, et chaque nom avance normalement d'un siège dans le sens des aiguilles d'une montre à chaque main.
2. **Le plan en une ligne :** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. Préflop, on commence par UTG et on finit par la grosse blinde ; postflop, on commence par la petite blinde et on finit par le bouton.
3. **Numéro de siège ≠ position.** Le siège 1 est par convention à la gauche immédiate du donneur et ne bouge jamais ; les positions tournent à chaque main. L'un est une adresse, l'autre un rôle.
4. **La taille de la table soustrait par l'avant.** Le 6-max retire les sièges de début ; le heads-up fusionne le bouton avec la petite blinde — premier à parler préflop, dernier postflop.

Une fois que les noms te viennent sans réfléchir, le vrai avantage vient de ce que tu en fais — [comment jouer chaque position](/fr/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"), des ranges d'ouverture au jeu en position contre hors de position, c'est la lecture suivante. Ensuite, le [guide des mains de départ](/fr/blog/holdem-starting-hands-chart) associe des mains précises à des sièges précis, et le [classement des mains au poker](/fr/blog/holdem-hand-rankings) tranche ce qui gagne vraiment à l'abattage.

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Guide débutant</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Règles du Texas Hold'em pour débutants</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Comment se déroule une main complète, de la donne à l'abattage</div>
  </a>
  <a href="/fr/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Stratégie de position</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Jouer en position ou hors de position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ranges d'ouverture et quoi faire depuis chaque siège</div>
  </a>
  <a href="/fr/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Déroulé du jeu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">L'ordre de jeu au Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La séquence d'action préflop → flop → turn → river</div>
  </a>
  <a href="/fr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blindes</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Petite blinde et grosse blinde expliquées</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pourquoi elles existent et comment bien les jouer</div>
  </a>
</div>
`.trim(),
};
