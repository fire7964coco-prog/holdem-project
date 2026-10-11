import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-reading-the-board",
  title: "Lire le board au poker : ta meilleure main de 5 cartes parmi 7",
  seoTitle: "Quelles 5 cartes jouent ? — Lire le board, avoir les nuts",
  desc: "La river tombe, et tu as quoi ? Lire le board au poker : ta meilleure main de 5 cartes parmi 7, suite ou couleur sur le board, jouer le board et les nuts.",
  tldr: "Au Texas Hold'em, tu joues toujours la meilleure main de 5 cartes parmi 7 (tes 2 cartes fermées + les 5 cartes communes), avec tes deux cartes fermées, une seule ou aucune (jouer le board). Passe les 7 cartes en revue toujours dans le même ordre : couleur, puis suite, puis cartes appariées, puis carte haute.",
  category: "hand-rankings",
  date: "2026-10-07",
  updated: "2026-10-11",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🃏",
  tags: [
    "nuts poker",
    "les nuts poker",
    "lire le board poker",
    "suite poker as 2 3 4 5",
    "suite poker roi as 2 3 4",
    "board poker",
    "jouer le board",
    "texture de board poker",
    "meilleure main 5 cartes poker",
  ],
  image: "/images/holdem-reading-the-board-hero.webp",
  imageAlt: "Lecture du board au Texas Hold'em — 5 cartes communes sur une table sombre, avec des flèches dorées qui montrent quelles cartes forment la meilleure main de 5 cartes",
  content: `
La première fois qu'une donneuse a mieux lu ma main que moi, j'abattais ce que je croyais être une simple hauteur as. « Quinte », a-t-elle annoncé en poussant vers moi un pot dont j'avais déjà fait mon deuil — mon 8-6 s'était discrètement relié à trois cartes du board (les cartes communes) pendant que je pleurais un tirage couleur raté.

==Les cartes parlent, mais seulement si tu sais les lire.== Regarder 7 cartes et savoir instantanément quelles sont tes 5 meilleures, c'est la compétence la plus utile qu'un débutant au Hold'em puisse travailler — et c'est une méthode, pas un don. Ce guide, c'est cette méthode.

---

### La réponse courte

:::stripe
5 | cartes que tu joues toujours — jamais plus, jamais moins
3 | façons d'utiliser tes cartes fermées : les deux, une seule ou aucune
4 | étapes de lecture : couleur → quinte → cartes appariées → carte haute
:::

> **Réponse rapide**
> Ta main finale, c'est la ==meilleure combinaison de 5 cartes== que tu peux former avec tes 2 cartes fermées et les 5 cartes communes. Tu peux utiliser tes deux cartes fermées, une seule ou aucune (« jouer le board »). Passe les 7 cartes en revue toujours dans le même ordre — couleur, quinte (suite), cartes appariées, carte haute — puis place ce que tu trouves sur l'échelle des [combinaisons au poker](/fr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp").

---

## Comment trouver ta meilleure main de 5 cartes parmi 7 ?

Au Texas Hold'em, tu reçois 2 cartes fermées, et le board finit par montrer 5 cartes. Sur ces 7 cartes, ==tu en joues exactement 5 — les 5 plus fortes disponibles==. Il n'y a que trois cas possibles :

| Combien de cartes fermées tu utilises | À quoi ça ressemble | Parmi les 21 façons de choisir 5 cartes |
|------|------|------|
| **Les deux** | Tes deux cartes se combinent avec trois cartes du board | 10 façons sur 21 |
| **Une seule** | Une carte forme une paire ou complète quelque chose ; l'autre reste sur la touche | 10 façons sur 21 |
| **Aucune (« jouer le board »)** | Les 5 cartes communes sont déjà tes 5 meilleures cartes | 1 façon sur 21 |

Ce sont les décomptes des 21 façons de choisir cinq cartes parmi 7 (combinaisons de 5 parmi 7), pas la fréquence à laquelle chaque cas arrive à la table.

Trois exemples rapides, entièrement détaillés :

| Tes cartes fermées | Board | 5 meilleures cartes | Main |
|----------------|-------|-------------|------|
| A♠ K♥ | Q♦ J♣ 10♠ 2♦ 7♣ | A-K-Q-J-10 | Quinte Broadway, la quinte à l'as (tes deux cartes fermées jouent) |
| 9♥ 9♦ | 9♠ 2♦ J♣ 5♥ K♣ | 9-9-9-K-J | Brelan de neuf, kickers K et J |
| 7♦ 2♣ | A♠ K♠ Q♠ J♠ 10♠ | Le board lui-même | Quinte flush royale (royal flush) — tu joues le board |

==g:Lis toujours les 7 cartes ensemble avant de décider ce que tu as.== L'erreur classique du débutant : fixer ses deux cartes fermées sans jamais voir ce que le board a construit autour. Quelle carte d'accompagnement compte quand les mains sont proches, c'est un sujet à part — c'est le [kicker](/fr/blog/holdem-kicker), et il décide de plus de pots que la plupart des joueurs ne le pensent.

---

## Comment lire le board en 4 étapes ?

Voici exactement la lecture que je fais à chaque river (la rivière), dans cet ordre — de la main la plus difficile à repérer à la plus facile :

:::steps
Cherche une couleur | Compte les enseignes sur les 7 cartes. Une enseigne présente 5 fois ou plus = couleur (flush). C'est la main que les débutants ratent le plus.
Cherche une quinte | Aligne mentalement les 7 rangs et cherche 5 cartes qui se suivent. L'as compte en haut ou en bas, jamais les deux.
Cherche les rangs appariés | Paires, brelans, fulls, carrés — compare les rangs de ta main et ceux du board.
Prends le plus fort | Ce que tu as trouvé de plus fort, c'est ta main. Complète avec les cartes restantes les plus hautes jusqu'à avoir exactement 5 cartes.
:::

Exemple pas à pas : tu as A♥ 5♥ et le board affiche A♦ 7♦ 4♠ 10♣ 2♠.

- **Couleur ?** Cœur 2, carreau 2, pique 2, trèfle 1 — non.
- **Quinte ?** Rangs A-10-7-5-4-2 — pas cinq cartes qui se suivent (la roue A-2-3-4-5 n'a pas de 3).
- **Rangs appariés ?** Oui — A♥ + A♦.
- **5 meilleures cartes :** A-A-10-7-5. ==Une paire d'as avec 10-7-5 derrière — pas « une paire d'as, point ».== Ces trois cartes d'accompagnement départagent les égalités.

:::tip[Tu joues toujours exactement 5 cartes — si tu as fait une quinte ET que tu as une paire, ta main est la quinte. Au poker, on n'additionne jamais les deux.]:::

---

## Jouer le board : c'est quoi ?

Jouer le board signifie que ==tes cartes fermées n'apportent rien — les 5 cartes communes forment déjà la meilleure main de 5 cartes que tu puisses faire==.

Board : A♠ A♦ A♣ 7♥ 7♦ — un full, full aux as par les sept. Tu as K♣ Q♣. Vérifie : garder le full (A-A-A-7-7) bat toute combinaison de 5 cartes qui utilise ton roi ou ta dame (A-A-A-K-7 n'est qu'un brelan). ==Ta meilleure main, c'est le board lui-même.==

Voici ce qui compte pour ton stack : ==r:le board appartient à tous les joueurs encore dans le coup==. Si personne ne peut l'améliorer, le pot est partagé — tout le mécanisme est dans les [règles du pot partagé](/fr/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp"). Mais avant de compter sur un partage, demande-toi qui PEUT battre le board :

- Celui qui a le dernier **A♥** a un carré d'as.
- Celui qui a les deux derniers sept (**7♠ 7♣**) a un carré de sept.
- Celui qui a une paire servie de **8-8 à K-K** a un full plus fort.

==g:« Le board peut-il être la meilleure main ? » Oui — et quand c'est le cas, l'abattage (showdown) se joue sur qui l'améliore, pas sur qui a les plus jolies cartes.== Sur un board comme A-K-Q-J-10 de la même enseigne (une quinte flush royale), personne ne peut l'améliorer, donc tous les joueurs restants partagent.

---

## Comment repérer une suite sur le board ?

Une quinte, ce sont 5 rangs consécutifs. La méthode fiable : ==liste les 7 rangs du plus haut au plus bas et cherche 5 cartes qui se suivent==.

Tu as 8♦ 6♣. Board : 7♥ 5♠ 4♣ K♦ 2♠. Rangs dans l'ordre : K, 8, 7, 6, 5, 4, 2. La voilà — ==8-7-6-5-4, une quinte hauteur huit== — alors que tes deux cartes fermées ont l'air de ne rien valoir côte à côte.

![Quinte hauteur huit au Texas Hold'em — 7 cartes étalées, avec 8-7-6-5-4 surlignés en doré pour montrer la quinte formée](/images/holdem-reading-straight-example.webp)

| Tu as | Board | Quinte ? |
|------|-------|-----------|
| 8♦ 6♣ | 7♥ 5♠ 4♣ K♦ 2♠ | Oui — 8-7-6-5-4 |
| J♠ 9♣ | 10♥ 8♦ 7♠ 2♣ K♥ | Oui — J-10-9-8-7 |
| A♥ 3♦ | 2♠ 4♣ 5♥ 9♦ K♠ | Oui — A-2-3-4-5 (la roue, ou wheel) |
| K♥ Q♦ | J♠ 10♣ 8♥ 3♦ 2♠ | Non — K-Q-J-10 a besoin d'un 9 ou d'un as |

Deux questions sur l'as qui piègent constamment les joueurs :

- **Peut-on utiliser un as dans une quinte ?** Oui, aux deux extrémités : en haut dans A-K-Q-J-10 (Broadway) ou en bas dans A-2-3-4-5 (la roue — la plus petite quinte qui existe).
- **Une quinte peut-elle faire le tour ?** ==r:Non. K-A-2-3-4 n'est pas une quinte — c'est juste une hauteur as.== Détail juste en dessous.

Quand deux quintes s'affrontent, la carte du haut la plus forte gagne — l'échelle complète de qui bat qui se trouve dans les [règles pour départager une égalité](/fr/blog/holdem-tiebreak-rules).

---

## Roi-As-2-3-4, c'est une suite ?

Non. Au Texas Hold'em, l'as ne se relie que vers le bas à partir du 5 (A-2-3-4-5) ou vers le haut à partir du 10 (10-J-Q-K-A) : une quinte ne « fait jamais le tour ». Si tu as A♦ 2♦ sur K♠ Q♥ 3♣ 4♦ 9♠, tu n'as ni paire, ni quinte, rien d'autre que A-K-Q-9-4.

---

## Comment repérer une couleur sur le board ?

Une couleur demande 5 cartes de la même enseigne parmi tes 7. Le board te dit instantanément si c'est seulement possible :

| Cartes de la même enseigne sur le board | Ce que ça veut dire |
|------|------|
| 0–2 | Aucune couleur possible pour personne |
| 3 | Tout joueur qui a 2 cartes de cette enseigne a une couleur |
| 4 | Tout joueur qui a 1 seule carte de cette enseigne a une couleur |
| 5 | Le board lui-même est une couleur — une carte de cette enseigne plus haute que la plus basse du board l'améliore, et sur un board connecté, toute carte de cette enseigne qui complète une quinte flush — même plus basse — bat toutes les couleurs |

![PAS UNE COULEUR — avec A♠ et seulement 3 piques sur le board, tu n'as pas de couleur au Texas Hold'em](/images/holdem-reading-flush-draw-mistake.webp)

==r:La lecture ratée classique : tenir A♠ 4♦ sur un board 2♠ 5♠ 9♥ J♥ 10♠ et annoncer une couleur.== Compte : le board a trois piques (2♠ 5♠ 10♠), ton as en fait quatre. ==Quatre, ce n'est pas cinq.== Ta vraie main est une hauteur as — A-J-10-9-5 — et c'est très désagréable de l'apprendre après avoir payé une mise à la river.

Le piège inverse compte tout autant : sur un board à quatre cartes de la même enseigne, tu n'en as AUCUNE, et — tant que le board n'est pas pairé — n'importe quel adversaire qui en a une seule te bat. Et si tu compares une couleur faite à une quinte faite, [la couleur bat la quinte, toujours](/fr/blog/holdem-flush-vs-straight).

---

## Que se passe-t-il quand le board se paire ? Brelan, full et carré

Dès que deux cartes communes ont le même rang, ==le plafond de la main monte d'un coup : brelans, fulls et carrés deviennent tous possibles==.

Board : K♣ K♦ 7♠ 3♥ 2♣

| Tu as | Tes 5 meilleures cartes | Main |
|------|------|------|
| K♥ 9♦ | K-K-K-9-7 | Brelan de rois (tes deux cartes fermées jouent) |
| 7♥ 7♦ | 7-7-7-K-K | Full aux sept par les rois |
| A♠ Q♦ | K-K-A-Q-7 | Une simple paire — les rois du board — avec A-Q derrière |

Regarde la dernière ligne : ==même sans rien, la paire du board fait partie de ta main==. « Une paire sur le board compte-t-elle ? » — oui, pour tout le monde à la fois. C'est pour ça que la paire max perd de sa valeur sur un board pairé : n'importe quel roi en main fait au moins un brelan (K-7, K-3 ou K-2 fait déjà un full), n'importe quel 7-7 fait un full, un seul 7, 3 ou 2 fait déjà une double paire, et ta paire passe derrière toutes ces mains.

==g:Board pairé = relis ta main depuis le début avant de mettre des jetons.==

---

## Peut-on avoir une couleur et une paire en même temps ?

Tu peux AVOIR les deux — tu ne peux jamais JOUER les deux. ==Une main de poker fait exactement 5 cartes, donc les combinaisons qui se chevauchent ne s'additionnent pas ; tu joues simplement la plus forte.==

- Tu as A♠ K♠ sur Q♠ 7♠ 2♠ K♦ 3♣. Tu as fait une paire de rois ET cinq piques. Ta main est ==la couleur max (nut flush), A♠ K♠ Q♠ 7♠ 2♠== — la paire de rois n'entre tout simplement jamais en jeu.
- Tu as 8♥ 8♦ sur 7♣ 6♦ 5♠ 4♥ K♦. Paire de huit ET 8-7-6-5-4. Ta main est la ==quinte hauteur huit== — pas « une paire avec une quinte ». À l'abattage, tu n'as pas besoin de l'annoncer : les cartes parlent, et c'est le donneur qui lit la main (TDA 2024, règle 12). Ce que tu dois faire, en revanche, c'est retourner tes deux cartes face visible — les cartes ne parlent que pour une main correctement abattue (TDA 2024, règle 13-A). Et si le donneur lit mal ta main, signale-le tout de suite : une lecture peut être contestée jusqu'au début de la main suivante — ou, si la main se termine pendant une pause, seulement jusqu'à 1 minute après l'attribution du pot (TDA 2024, règle 22) —, mais c'est bien plus facile à corriger avant que le pot ne soit poussé.

La même logique répond à « peut-on avoir trois paires ? » — tu peux avoir trois rangs appariés parmi 7 cartes, mais seules les deux meilleures paires tiennent dans 5 cartes (expliqué dans le [guide des combinaisons au poker](/fr/blog/holdem-hand-rankings)).

---

## Comment savoir si tu as les nuts ?

Les bons joueurs font une lecture de plus : pas « qu'est-ce que j'ai ? », mais ==**« quelle est la meilleure main que N'IMPORTE QUI pourrait avoir sur ce board ? »**== Cette main s'appelle les nuts (plus d'argot de table comme celui-ci dans le [jargon du poker](/fr/blog/holdem-glossary)).

Board : Q♣ 9♥ 6♣ 5♦ 2♠

1. **Couleur possible ?** Seulement deux trèfles — non. Personne ne peut avoir de couleur ici. (Quand trois cartes d'une même enseigne *sont* sorties, pose une question de plus : tiennent-elles dans cinq rangs consécutifs ? Si oui, une quinte flush est possible — et c'est elle, pas la meilleure couleur, qui fait les nuts. Sur J♠ 10♠ 9♠, c'est K♠ Q♠.)
2. **Board pairé ?** Non — donc aucun full ni carré n'existe non plus.
3. **Meilleure quinte ?** Le 9-6-5 du board plus 8-7 en main fait 9-8-7-6-5. Rien de plus haut ne se relie.

Les nuts sont donc ==8-7 — une quinte hauteur neuf==, et même un brelan servi de dames (le brelan max) perd contre elle. Te poser ces 3 questions à chaque river te dit si ta main « forte » est vraiment le plafond ou juste une main moyenne.

---

## Board sec ou humide : comment lire la texture ?

Une fois que tu sais lire ta propre main, la même lecture te dit à quel point le board est dangereux pour tout le monde — ce que les joueurs appellent la texture.

:::compare
Board sec — K♠ 7♦ 2♣ | Board humide — J♥ 10♥ 8♣
Trois enseignes, aucun rang qui se touche | Deux cœurs + des rangs connectés
Aucun tirage couleur ni quinte n'existe | Tirages couleur et tirages quinte partout
La paire max est une main vraiment forte | La paire max est fragile — beaucoup de rivers la battent
:::

![Board sec contre board humide au Texas Hold'em — K-7-2 de trois enseignes (sec) contre J-10-8 avec deux cœurs (humide), avec des flèches pour les tirages couleur et quinte](/images/holdem-reading-dry-vs-wet-board.webp)

Sur J♥ 10♥ 8♣, n'importe quel cœur, n'importe quel 9, n'importe quel 7 et n'importe quelle dame peuvent changer qui est devant. Sur K♠ 7♦ 2♣, presque rien. ==Même paire, pression complètement différente== — c'est pour ça que l'habitude de lire dans l'ordre (couleur → quinte → paires) te sert aussi de radar à danger.

---

## Les erreurs de lecture du board qui coûtent cher

### Erreur 1 — Rater une suite que tu as déjà

L'effet tunnel sur ta paire ou ton tirage raté. Mon histoire de 8-6 en haut de cette page, c'est exactement ça — ==cherche les quintes même quand tu crois savoir ce que tu as==. Le donneur la verra à l'abattage ; ton stack préfère que ce soit TOI qui la voies avant de te coucher.

### Erreur 2 — Compter quatre cartes de la même enseigne comme une couleur

Quatre piques parmi tes 7 cartes, ce n'est **pas** une couleur — il en faut cinq. Et l'image inverse : un board 9♠ 6♠ 3♠ Q♠ J♦ avec A♥ K♥ en main te donne A-K-Q-J-9 — une simple carte haute (hauteur) — alors que ==n'importe quel adversaire qui a un seul pique a une couleur==.

### Erreur 3 — Oublier que le board est à tout le monde

Les débutants se couchent en pensant « il a forcément un trèfle » sur un board à trois trèfles — mais ces trèfles n'aident un adversaire que si ses cartes FERMÉES sont des trèfles. Tout le monde partage le même board ; ==seules les cartes fermées rendent la main de quelqu'un différente de la tienne==.

### Erreur 4 — Ignorer le full sur un board pairé

Tu touches ta couleur à la river, le board montre deux dames, et tu ne te poses jamais la question. Toute main qui contient une dame a au moins un brelan ; une paire servie qui correspond à une autre carte du board fait un full, et une paire de dames servie fait un carré — et ==le full bat la couleur==. Board pairé + grosse mise = cherche les fulls avant de fêter.

Pour vérifier une lecture après coup, le [calculateur d'équité](/fr/calculator) te le confirme : avec un board complet, il nomme le gagnant et la main gagnante.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-tiebreak-rules | En cas d'égalité au poker, qui gagne ? | /images/holdem-tiebreak-hero.webp
/fr/blog/holdem-split-pot-rules | Pot partagé (split pot) au poker | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Comment choisir ses 5 cartes parmi les 7 ?**

A. Passe les 7 cartes (2 fermées + 5 du board) en revue dans un ordre fixe : d'abord la couleur (une enseigne présente 5 fois ou plus), puis la quinte (5 rangs qui se suivent), puis les rangs appariés (paires, brelans, fulls, carrés). Prends ce que tu trouves de plus fort et complète jusqu'à exactement 5 cartes avec tes cartes restantes les plus hautes. Tu peux utiliser tes deux cartes fermées, une seule ou aucune.

**Q. Peut-on gagner en n'utilisant qu'une seule de ses cartes au Texas Hold'em ?**

A. Oui. Tu formes la meilleure main de cinq cartes avec n'importe quelle combinaison de tes deux cartes fermées et des cinq cartes communes — les deux, une seule ou aucune. N'en utiliser aucune, c'est « jouer le board ». (L'Omaha fait l'inverse : tu dois y utiliser exactement deux de tes quatre cartes fermées.)

**Q. Que veut dire « jouer le board » au Texas Hold'em ?**

A. Cela veut dire que les 5 cartes communes sont déjà ta meilleure main possible de 5 cartes — aucune de tes cartes fermées ne les améliore. Comme le board est partagé, tous les joueurs peuvent revendiquer cette même main, donc jouer le board mène en général à un pot partagé, sauf si les cartes fermées d'un adversaire améliorent le board. Une formalité coûte encore des pots aux joueurs : même quand tu joues le board, tu **dois abattre tes deux cartes fermées** pour réclamer ta part (==règle 75 des règles de tournoi WSOP==, TDA 2024, règle 19) — si tu les jettes (muck) sans les montrer, tu ne reçois normalement rien (le superviseur ne peut récupérer une main que tant qu'elle reste clairement identifiable ; règle 109 des règles de tournoi WSOP).

**Q. Que se passe-t-il si la meilleure combinaison est affichée sur le board ?**

A. Si le board lui-même est la meilleure main de 5 cartes et qu'aucune carte fermée ne l'améliore — par exemple une quinte flush royale sur le board — tous les joueurs restants se partagent le pot à parts égales — le pot principal et chaque pot annexe entre les joueurs qui y ont droit. Mais vérifie d'abord : sur un full du board comme A-A-A-7-7, un joueur qui a le dernier as (carré d'as), les deux derniers sept (carré de sept) ou une grosse paire servie (full plus fort) bat le board.

**Q. Une couleur et une paire en même temps, c'est possible ?**

A. Tu peux former les deux avec tes 7 cartes, mais une main de poker fait exactement 5 cartes — tu ne joues donc que la plus forte. Comme la couleur est au-dessus de la paire, la couleur est ta main et la paire est ignorée. La même règle vaut pour une quinte plus une paire : ta main est la quinte. Tu n'as rien à annoncer — les cartes parlent à l'abattage, et c'est le donneur qui lit la main.

**Q. As-2-3-4-5, c'est une suite au poker ?**

A. Oui. L'as se place à l'une ou l'autre extrémité — en haut dans A-K-Q-J-10 (Broadway, la meilleure quinte) ou en bas dans A-2-3-4-5 (la roue, la plus petite quinte). Il ne peut pas se placer au milieu d'une séquence.

**Q. Une suite peut-elle faire le tour (Dame-Roi-As-2-3) ?**

A. Non. Des séquences comme K-A-2-3-4 ou Q-K-A-2-3 ne sont pas des quintes au Texas Hold'em — l'as ne se relie que vers le bas à partir du 5 ou vers le haut à partir du 10. Une main qui « fait le tour » n'est qu'une carte haute, sauf si elle forme autre chose.

**Q. Comment savoir si une couleur est possible sur le board ?**

A. Compte les enseignes sur le board. Avec 0 à 2 cartes d'une même enseigne, aucune couleur n'existe pour personne. Avec 3, un joueur a besoin de deux cartes de cette enseigne en main ; avec 4, d'une seule ; avec les 5, le board lui-même est une couleur.

**Q. Il y a une couleur sur le board : qui gagne ?**

A. Quand les cinq cartes communes forment une couleur, tous les joueurs restants la partagent. Une carte de cette enseigne plus haute que la plus basse du board l'améliore, donc le gagnant est normalement celui qui a la plus haute de ces cartes. Si personne n'en a, tout le monde joue le board et le pot est partagé. Une exception casse la règle : sur un board connecté, toute carte de cette enseigne qui complète une quinte flush bat toutes les couleurs — même une carte plus basse que la plus basse du board. Sur K♠ 6♠ 5♠ 4♠ 3♠, le 2♠ (quinte flush hauteur six) comme le 7♠ (quinte flush hauteur sept) battent l'A♠. (Avec seulement trois ou quatre cartes de la même enseigne sur le board, seuls les joueurs qui ont les cartes manquantes de cette enseigne ont vraiment une couleur.)

**Q. Il y a une suite sur le board : qui gagne ?**

A. Quand les cinq cartes communes forment déjà une quinte, tout le monde a au moins cette quinte — un joueur qui la prolonge en une quinte plus haute avec une carte fermée bat donc le board, et si deux joueurs la prolongent, c'est la quinte la plus haute qui gagne. Sur un board 5-6-7-8-9, un joueur qui a un 10 fait 6-7-8-9-10 et bat le board. Méfie-toi dès que trois cartes d'une même enseigne sont posées : un adversaire avec deux cartes assorties bat alors toutes ces quintes avec une couleur. Si personne ne peut monter plus haut, le pot est partagé.

**Q. Une paire sur le board compte-t-elle dans ta main ?**

A. Oui — les cartes communes font partie de la main de chaque joueur. Si tes cartes fermées ne touchent rien, la paire du board reste ta paire. (Elle n'est pas figée pour autant : si tes cartes fermées font une quinte ou une couleur, c'est cette main plus forte qui joue.) Cela veut aussi dire que tes adversaires peuvent avoir un brelan ou un full, alors réévalue tes mains à une paire sur tout board pairé.

**Q. Que signifie « nuts » au poker ?**

A. Les nuts, c'est la meilleure main possible sur ce board à ce moment-là — celle que personne ne peut battre. Pour la trouver à chaque river, pose les 3 questions de la section « Comment savoir si tu as les nuts ? » ci-dessus : couleur possible, board pairé, meilleure quinte.

---

## À retenir

1. **Exactement 5 cartes parmi 7** — tes deux cartes fermées, une seule ou aucune. Les mains qui se chevauchent ne s'additionnent jamais ; joue la plus forte.
2. **Lis dans l'ordre** — couleur → quinte → rangs appariés → carte haute. Les mains que tu rates sont justement celles pour lesquelles cette lecture existe.
3. **Lis-le pour tout le monde** — le board est partagé, donc la même lecture révèle les nuts, le danger, et si ta main est le plafond ou le plancher.

Si tu apprends encore le déroulement du jeu lui-même, commence par le [guide des règles du Texas Hold'em pour débutants](/fr/blog/texas-holdem-rules-for-beginners), puis fixe l'échelle avec [l'ordre complet des combinaisons](/fr/blog/holdem-hand-rankings).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilier</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Combinaisons au poker : l'ordre des mains</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">L'ordre complet, de la quinte flush royale à la carte haute</div>
  </a>
  <a href="/fr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Départage</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">En cas d'égalité au poker, qui gagne ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Même combinaison — qui l'emporte vraiment ?</div>
  </a>
  <a href="/fr/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pot partagé</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot partagé (split pot) au poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les chops, le jeton restant et le board qui joue</div>
  </a>
</div>
`.trim(),
};
