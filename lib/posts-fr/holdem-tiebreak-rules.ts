import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "En cas d'égalité au poker, qui gagne ? Les règles pour départager",
  seoTitle: "Même main, qui gagne ? — Les règles d'égalité au poker",
  desc: "Même paire et pourtant perdu ? En cas d'égalité au poker, qui gagne : même paire ou double paire, quand la 5e carte compte et quand le pot est partagé.",
  tldr: "Au poker, une égalité se départage toujours dans le même ordre : d'abord le rang de la combinaison, puis les cartes qui la forment, puis les kickers du plus haut au plus bas. Même paire : le kicker le plus haut gagne ; cinq cartes identiques : le pot est partagé. L'enseigne des cartes ne départage jamais.",
  category: "hand-rankings",
  date: "2026-10-07",
  updated: "2026-10-07",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Abattage au poker : A♠ K♦ contre A♥ 9♣ avec le board A♦ Q♠ 7♥ 3♣ 2♦ — même paire d'as, c'est le kicker qui désigne le gagnant",
  tags: ["égalité au poker", "égalité poker qui gagne", "cas d'égalité au poker", "départager double paire poker", "double paire poker qui gagne", "couleur sur la table qui gagne", "qui gagne au poker", "départager égalité poker", "carte haute poker règle"],
  content: `
Tu retournes une paire d'as. Ton adversaire aussi. Le donneur compte les cartes d'accompagnement une seconde — puis pousse tout le pot vers *lui*. ==r:Même paire. Comment as-tu perdu ?==

J'ai vu ce moment précis bloquer plus de parties que n'importe quelle autre règle : quelqu'un se lève à moitié, le donneur tapote la table, et toute la table attend une explication. La voici. Au Texas Hold'em, chaque égalité se règle par une seule procédure fixe, qui se place un cran sous [l'ordre des combinaisons au poker](/fr/blog/holdem-hand-rankings) — l'ordre des mains te dit *quelle main* gagne ; les règles de départage te disent *quel joueur* gagne quand les deux mains sont du même rang.

L'essentiel du travail est fait par une seule carte : le ==**kicker**==. La définition complète — quelles mains en ont, et combien — se trouve dans [c'est quoi le kicker au poker](/fr/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Ce guide-ci, c'est la *procédure* : comment on départage exactement la même paire, la double paire, le brelan, les quintes et les couleurs — et la cinquième carte que tout le monde oublie.

---

### Les égalités en un coup d'œil

:::stripe
3 | Étapes qui règlent toutes les égalités au Hold'em
1 | Place de kicker dans une double paire
0 | Égalité départagée par l'enseigne
:::

---

## Que se passe-t-il en cas d'égalité au poker ? L'ordre en 3 étapes

**Une égalité se départage dans un ordre fixe : on compare d'abord le rang de la combinaison, puis les cartes qui la forment, puis les kickers du plus haut au plus bas — et si les cinq cartes sont toujours identiques, le pot est partagé.** Chaque abattage (showdown) passe les trois mêmes contrôles :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Étape | On compare | Détail |
|:---:|---|---|
| **1** | Le rang de la combinaison | La catégorie la plus haute gagne toujours (une couleur bat une quinte (suite), etc.) |
| **2** | Les cartes qui forment la combinaison | Même rang ? La paire la plus haute / le brelan le plus haut / la carte la plus haute gagne |
| **3** | Les kickers, le plus haut d'abord | La première différence remporte le pot |

</div>

Si l'étape 1 tranche, tu n'arrives jamais à l'étape 2. Si l'étape 3 n'a plus de cartes à comparer, les mains sont identiques et ==g:le pot est partagé== — la façon dont les jetons sont ensuite répartis (jeton restant, partage à trois, pots annexes) relève des [règles du pot partagé](/fr/blog/holdem-split-pot-rules). C'est aux étapes 2 et 3 que naissent les disputes, alors c'est là qu'on va.

---

## Même paire : qui gagne ?

**Le meilleur premier kicker gagne. Une paire utilise trois kickers, comparés un par un en partant du haut — la première différence décide du pot.**

Prends la main de la photo ci-dessus :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Joueur A :** A♠ K♦  ·  **Joueur B :** A♥ 9♣
**Board :** A♦ Q♠ 7♥ 3♣ 2♦

| Joueur | Cinq meilleures cartes | Kickers | Résultat |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Gagne** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Perd |

</div>

Même paire d'as, donc les kickers s'affrontent dans l'ordre : ==g:le K bat la Q — c'est terminé.== Le neuf de B fait toujours *partie* de la main comme deuxième kicker, mais la comparaison n'arrive jamais jusque-là.

Remarque que le premier kicker de B est la dame du **board** (les cartes communes), pas le 9 qu'il a en main. ==r:Un kicker ne compte que s'il entre vraiment dans tes cinq meilleures cartes== — une carte du board plus haute repousse ta carte fermée plus bas dans la liste. C'est aussi pour ça que la deuxième carte de ta main de départ compte autant que l'as lui-même : A-K et A-9 font tous les deux « une paire d'as » ici, et un seul des deux gagne ([mains de départ](/fr/blog/holdem-starting-hands-chart)).

---

## Comment départager chaque combinaison ?

**Chaque rang de combinaison a son propre ordre de comparaison — certains vont jusqu'aux kickers, d'autres se règlent entièrement avec les cartes qui forment la main.** Le badge indique si un kicker entre en jeu :

:::tiebreak
Quinte flush royale|Égalité seulement si le board lui-même forme la royale — tout le monde partage|-Pas de kicker
Quinte flush|Carte la plus haute seulement|-Pas de kicker
Carré|Rang du carré → 5e carte|+Kicker
Full|Rang du brelan → rang de la paire|-Pas de kicker
Couleur|On compare les 5 cartes, de la plus haute à la plus basse|-Pas de kicker
Quinte|Carte la plus haute seulement|-Pas de kicker
Brelan|Rang du brelan → 2 kickers|+Kicker
Double paire|Paire haute → paire basse → kicker|+Kicker
Paire|Rang de la paire → 3 kickers|+Kicker
Carte haute|On compare les 5 cartes, de la plus haute à la plus basse|+Kicker
:::

Les trois lignes qui provoquent le plus de disputes à table :

- **Le brelan utilise deux kickers, le plus haut d'abord.** Sur un board A♣ A♥ 7♦ 5♣ 2♠, un joueur avec A♠ J♠ fait A-A-A-==g:J==-7 et bat le A-A-A-==r:10==-7 de A♦ 10♦ — le valet domine le dix, et le 7 commun n'est même jamais regardé.
- **Le full n'a pas de kicker.** Le rang du brelan d'abord, puis la paire : K-K-K-A-A bat K-K-K-Q-Q grâce à la paire.
- **Les couleurs se comparent sur les cinq cartes — ==r:jamais sur l'enseigne==.** Une couleur hauteur as bat une couleur hauteur roi ; des rangs identiques partagent. Le duel complet (et les boards qui trompent les joueurs) est dans [suite ou couleur : qui gagne](/fr/blog/holdem-flush-vs-straight).

---

## Personne n'a rien : qui gagne au poker ?

**Quand personne n'a ne serait-ce qu'une paire, chacun joue sa carte haute (hauteur) : on compare les cinq cartes de la meilleure main de chaque joueur, de la plus haute à la plus basse, et la première différence gagne.** C'est la dernière ligne du tableau ci-dessus — la carte haute utilise quatre kickers, donc les cinq cartes comptent.

Concrètement, la règle est la même que pour la paire, en plus long : d'abord la carte la plus haute de chaque main, puis la deuxième, et ainsi de suite jusqu'à la cinquième. Comme pour tous les kickers, seules les cartes qui entrent dans tes cinq meilleures comptent — si le board contient des cartes plus hautes que les tiennes, ce sont elles qui remplissent la main. Et si les cinq cartes sont identiques rang pour rang (le cas typique : le board fait la meilleure main pour tout le monde), ==g:le pot est partagé==. La cinquième carte qui décide tout est expliquée juste plus bas, au chapitre sur la 5e carte.

---

## Double paire contre double paire : qui gagne ?

**On compare la paire haute, puis la paire basse, puis le kicker unique — dans cet ordre.** La double paire porte exactement un kicker, donc une fois les paires comparées, il ne reste qu'une seule carte à disputer.

Sur un board **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ fait K♠ K♦ 9♣ 9♠ ==g:Q♦== et K♥ J♥ fait K♥ K♦ 9♣ 9♠ ==r:J♥==. Mêmes rois et neuf, donc le kicker seul tranche : ==g:la dame bat le valet.==

Et puis il y a le piège qui coûte vraiment cher — la ==r:**contrefaçon (counterfeit)**== :

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Toi :** 5♠ 4♠  ·  **Adversaire :** A♣ K♦
**Flop :** 5♦ 4♥ K♣ — ta double paire (cinq et quatre) devance sa paire de rois
**Turn 9♠, river 9♥** — board final 5♦ 4♥ K♣ 9♠ 9♥

| Joueur | Cinq meilleures cartes | Main |
|--------|-----------|------|
| Toi | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Neuf et cinq — tes quatre ont disparu |
| Adversaire | K♦ K♣ 9♠ 9♥ A♣ | **Rois et neuf — gagne** |

</div>

Le board qui se paire en neuf a donné aux *deux* joueurs une meilleure deuxième paire — tes quatre ont été ==r:contrefaits==, et la seule comparaison restante était la paire haute : les rois battent les neuf. La main qui menait au flop perd le pot sans qu'aucun des deux joueurs n'ait amélioré ses propres cartes.

---

## Suite contre suite : qui gagne ? La roue (As-2-3-4-5) est la plus petite

**La plus haute gagne — les quintes se classent uniquement par leur carte la plus haute, et la roue (wheel), avec l'as en bas, est la plus petite quinte du jeu.**

Sur un board 4♦ 3♣ 2♠ K♦ Q♥, un joueur avec A♠ 5♠ fait la roue : 5-4-3-2-A. Un joueur avec 6♥ 5♥ fait 6-5-4-3-2. ==r:Dans la roue, l'as joue *bas*==, donc A-2-3-4-5 se trouve tout en bas de l'échelle des quintes — ==g:la quinte hauteur six gagne.== Deux quintes avec la même carte haute sont identiques, et des mains identiques partagent.

À l'autre bout de l'échelle, ==**la quinte la plus haute au poker est Broadway (la quinte à l'as) — A-K-Q-J-10**==. Aucune quinte ne la bat (même si une couleur ou toute combinaison au-dessus la bat toujours), et la roue est tout en bas : chaque quinte du jeu se classe quelque part entre les deux, par sa seule carte haute.

Deux choses que la roue ne fait *pas* : l'as ne peut pas faire le tour par le milieu (Q-K-A-2-3 ne vaut rien), et il ne peut pas être haut et bas à la fois. Les couleurs suivent une règle parallèle — les cinq cartes comparées depuis le haut, l'enseigne n'a aucune importance — avec le détail dans [suite ou couleur](/fr/blog/holdem-flush-vs-straight).

---

## La 5e carte compte-t-elle au poker ?

**Oui — chaque fois que les quatre premières cartes de deux mains sont identiques, la cinquième carte vaut tout le pot.**

Board **A♥ K♣ Q♦ 4♣ 2♥**, et c'est A♠ 8♠ contre A♦ 7♦. Les deux ont une paire d'as. Premier kicker : le K du board — égalité. Deuxième kicker : la Q du board — égalité. Troisième kicker : ==g:le 8 bat le 7.== La cinquième carte de la main, au sens littéral, a décidé à elle seule du pot.

La même logique s'applique aux pots avec un carré sur le board : tout le monde partage quatre cartes, donc c'est la cinquième carte qui tranche à l'abattage. Et elle s'applique aux égalités à la carte haute et à la couleur, où chaque carte jusqu'à la dernière est comparée. La cinquième carte ne cesse de compter que lorsque le board la domine — et c'est la dernière pièce du puzzle.

---

## La couleur des cartes (pique, cœur) départage-t-elle ?

**Non — pas pour désigner le gagnant. Pour gagner le pot, l'enseigne (pique, cœur, carreau, trèfle) n'a qu'un seul rôle au Texas Hold'em : cinq cartes de la même enseigne font une couleur. Au-delà, elle n'a aucun rang : deux mains identiques rang pour rang partagent toujours le pot, et aucune carte n'en bat une autre à cause de son enseigne.**

La question revient sans cesse parce qu'un ordre des enseignes existe bel et bien au poker — simplement jamais pour classer les mains dans ce jeu. Le stud et le razz s'en servent pour désigner qui ouvre l'action (bring-in) et qui reçoit un jeton indivisible. Le Hold'em ne s'en sert ni pour l'un ni pour l'autre.

La preuve la plus nette, c'est le seul jeton qui *ne peut pas* être divisé. Les règles de tournoi WSOP 2026 disent : ==g:*« In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button »*== (règle 73) — autrement dit, dans les jeux avec bouton, quand deux mains ou plus se partagent le pot, le jeton restant va au premier siège à gauche du bouton. Même quand un pot ne peut physiquement pas se diviser à parts égales, la règle s'en remet **au siège**, pas à l'enseigne — et la méthode par enseigne, dans la seconde moitié de cette même règle, est écrite pour le stud et le razz seulement.

Encore un point à savoir : au Hold'em, deux couleurs sont de toute façon toujours de la *même* enseigne, parce que les cinq cartes communes sont partagées et qu'un board ne peut pas contenir à la fois trois cœurs et trois piques. « Mes piques battent tes cœurs » n'est donc pas une règle contre laquelle tu as perdu — c'est une main qui ne peut pas être distribuée.

---

## Quand ton kicker ne joue pas : le pot est partagé

![Infographie : le board A-K-Q-J-10 est la meilleure main de cinq cartes pour tout le monde, donc une main 9-7 ne peut pas le battre et le pot est partagé](/images/holdem-tiebreak-best5.webp "Les cinq meilleures cartes parmi sept : quand le board est déjà la meilleure main, tes cartes fermées en sortent")

Une idée reçue revient souvent : si personne n'améliore les cinq cartes du board, le pot est partagé — sauf si l'un des deux a un as en main. C'est faux. **Si tes cartes fermées ne peuvent pas battre les cinq meilleures cartes du board, elles ne jouent pas — et quand c'est vrai pour tout le monde, le pot est partagé, as en main ou pas.**

Prends le board ci-dessus : A♠ K♥ Q♣ J♦ 10♠, Broadway déjà complète. Ton 9♥ 7♠ fait *bien* une quinte — K-Q-J-10-9 — mais elle est **plus basse** que la quinte à l'as posée sur le board, donc tes cinq meilleures cartes sont le board lui-même. Celles de tous les autres aussi.

La version plus subtile, c'est quand ta main joue mais pas ton kicker. Board A♥ K♣ Q♦ J♠ 9♥ : A♠ 3♠ contre A♦ 2♦. Les deux font une paire d'as, et les trois places de kicker se remplissent avec le board — A-A-K-Q-J pour chaque joueur. Le 3 et le 2 sont du poids mort ; cinq meilleures cartes identiques, ==g:on partage (chop).==

![Infographie : sur un board A-K-Q-J-9, A-3 et A-2 jouent tous les deux A-A-K-Q-J, donc les mains identiques se partagent le pot](/images/holdem-tiebreak-split.webp "Quand les cinq meilleures cartes sont identiques rang pour rang, le pot est divisé — l'enseigne ne départage jamais")

Repérer ces boards avant la mise à la river (la rivière) est une compétence à part entière — c'est [lire le board](/fr/blog/holdem-reading-the-board). Et ce qui arrive aux jetons une fois les mains à égalité — parts égales, jeton restant, partage à trois, pots annexes avec un joueur all-in — est entièrement couvert dans le [guide du pot partagé](/fr/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

## Couleur sur la table : qui gagne ?

**Quand les cinq cartes du board sont de la même enseigne, tout le monde a au moins cette couleur — et la règle des couleurs s'applique telle quelle : on compare les cinq cartes depuis la plus haute.** Si tu tiens une carte de cette enseigne plus haute que la plus basse du board, elle entre dans ta couleur à la place de celle-ci ; la couleur la plus haute, comparée carte par carte, remporte le pot (à moins que quelqu'un ait mieux qu'une couleur, comme une quinte flush).

Si personne n'a de carte de l'enseigne assez haute pour améliorer le board, c'est le board qui joue pour tout le monde : cinq meilleures cartes identiques, ==g:pot partagé==. Et dans tous les cas, l'enseigne elle-même ne départage rien — sur un même board, toutes les couleurs sont forcément de la même enseigne, comme expliqué plus haut.

---

:::readnext[À lire ensuite]
/fr/blog/holdem-kicker | C'est quoi le kicker au poker ? | /images/holdem-kicker-hero.webp
/fr/blog/holdem-split-pot-rules | Pot partagé (split pot) au poker | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Comment départager une égalité au poker ?**

A. Trois contrôles dans l'ordre — le rang de la combinaison, puis les cartes qui la forment, puis les kickers du haut vers le bas — et la première différence met fin au débat. Tout aussi important, ce qui n'entre jamais dans la comparaison : l'enseigne, qui a misé en dernier, qui est le plus près du bouton et combien de jetons chacun a mis. Si les cinq cartes sont identiques rang pour rang, le donneur partage le pot, quoi qu'il se soit passé pendant les enchères.

**Q. Deux joueurs ont la même paire : qui gagne ?**

A. Le kicker le plus haut — mais vérifie d'abord lesquelles de tes cartes entrent vraiment dans les cinq meilleures. Sur A-Q-7-3-2 avec une paire d'as, un joueur qui tient A-9 joue A-A-Q-9-7 : la dame du board passe devant son neuf, donc le neuf n'est que le *deuxième* kicker. Contre A-K, le pot est déjà décidé à la première place, et ce neuf n'est jamais comparé. Il existe trois places de kicker ; la plupart des pots se décident à la première.

**Q. Deux joueurs ont une double paire : qui gagne ?**

A. La paire haute d'abord, puis la paire basse, puis le kicker unique — donc as et trois bat rois et dames, même si la deuxième paire est bien plus petite. Le cas qui piège les joueurs, c'est un board doublement pairé comme K-K-9-9-5 sans trois cartes de la même enseigne, donc où personne ne peut faire de couleur : à moins que quelqu'un tienne un roi, un neuf, une paire de cinq servie ou une paire servie au-dessus des neuf, chaque joueur a la même double paire, donc la main se réduit à un seul kicker et la meilleure carte fermée de la table l'emporte — et si aucune carte fermée ne bat le 5 du board, tout le monde joue le board et le pot est partagé. La double paire porte exactement un kicker, jamais deux.

**Q. Deux joueurs ont le même brelan : qui gagne ?**

A. Le brelan porte deux kickers, comparés le plus haut d'abord — donc si les deux joueurs font le même brelan, la carte d'accompagnement la plus haute gagne. Avec un brelan de neuf, 9-9-9-A-K bat 9-9-9-A-Q parce que le deuxième kicker (le roi) domine la dame. Même brelan et mêmes deux kickers, c'est un partage. (Un brelan servi (set), fait avec une paire en main, n'est presque jamais à égalité, puisqu'un seul joueur peut tenir cette paire exacte.)

**Q. La 5e carte peut-elle faire la différence ?**

A. Oui — et c'est la façon la plus courante de perdre un pot qu'on croyait gagné. Les cas classiques où tout le pot se joue sur la dernière carte : le troisième kicker d'une paire, le kicker unique d'une double paire, la carte la plus basse d'une couleur, et la carte d'accompagnement à côté d'un carré posé sur le board. Elle cesse de compter seulement quand les cartes du board dominent la carte que tu tiens — parfois parce que tout le board joue et que tes cartes fermées sortent entièrement de la main, parfois parce qu'une carte fermée joue et que l'autre ne compte jamais : A♠ 3♠ contre A♦ 2♦ sur A♥ K♣ Q♦ J♠ 9♥ est un partage, les deux jouant A-A-K-Q-J.

**Q. L'as peut-il valoir 1 dans une suite (As-2-3-4-5) ?**

A. Au Hold'em, oui, mais seulement dans la quinte A-2-3-4-5 (la « roue », ou wheel), où il joue comme la carte la plus basse — ce qui fait de la roue la plus petite quinte du jeu. L'as ne peut pas faire le tour par le milieu : Q-K-A-2-3 n'est pas une quinte.

**Q. Une suite peut-elle être plus forte qu'une autre ?**

A. Oui, et en pratique ça arrive quand l'essentiel de la quinte est déjà sur le board. Prends un board 5♦ 6♣ 7♠ 8♥ 2♦ : un joueur avec 9♣ 4♠ fait 9-8-7-6-5, tandis qu'un joueur avec 4♥ 3♦ fait 8-7-6-5-4 avec les mêmes quatre cartes. Tous les deux « ont fait une quinte » ; seule la carte du haut compte, donc le neuf l'emporte. Des cartes hautes égales signifient la même quinte et un partage.

**Q. Deux joueurs ont la même suite : qui gagne ?**

A. La quinte avec la carte la plus haute gagne — Q-J-10-9-8 bat J-10-9-8-7, parce qu'une quinte se classe uniquement par sa carte la plus haute et n'a pas de kicker. Si les deux quintes ont la même carte haute, elles sont identiques, donc le pot est partagé. Ça arrive surtout quand la quinte est en grande partie sur le board et que les deux joueurs la complètent par le même bout.

**Q. Deux joueurs ont une couleur : comment départager ?**

A. On compare les couleurs carte par carte depuis le haut : une couleur hauteur as bat une couleur hauteur roi, et si les cartes hautes sont égales, on passe à la suivante, et ainsi de suite sur les cinq. L'enseigne ne départage jamais, donc si les cinq rangs sont identiques, le pot est partagé. (Au Hold'em, deux couleurs sont toujours de la même enseigne, puisque les joueurs partagent le board.)

**Q. Deux joueurs ont un full : qui gagne ?**

A. On compare d'abord le brelan — le brelan le plus haut gagne, donc K-K-K-2-2 bat Q-Q-Q-A-A même si les as ont l'air plus gros. C'est seulement si les brelans sont identiques qu'on compare la paire. Le full n'a pas de kicker, donc même brelan et même paire signifient un pot partagé.

**Q. Que se passe-t-il si deux joueurs ont une quinte flush ?**

A. La quinte flush la plus haute gagne, départagée par sa carte la plus haute — une quinte flush hauteur dame bat une quinte flush hauteur neuf. La quinte flush royale n'est que la quinte flush à l'as, donc elle bat toutes les autres quintes flush. Des cartes hautes identiques signifient une main identique et un pot partagé.

**Q. Le pique bat-il le cœur au poker ?**

A. Non — l'enseigne ne décide jamais d'un pot. Là où elle apparaît à une table de Hold'em, c'est dans les tirages de cartes qui attribuent une place. Le plus connu est le tirage du bouton : en cash game, et selon la plupart des règlements maison des salles, chaque joueur tire une carte pour décider où commence le bouton du donneur, et si deux tirages sont à égalité de rang, l'ordre des enseignes tranche. (Les tournois WSOP sautent ce tirage d'ouverture : la ==règle de tournoi 85== place le bouton au premier joueur à droite du donneur et n'organise un tirage pour le bouton qu'à trois, deux et une table restantes.) Les directeurs de tournoi placent aussi les joueurs d'une table cassée en distribuant une carte à chacun, l'exemple de la TDA donnant la première place à la ==carte la plus haute, enseigne comprise==. Dans les deux cas, on choisit un *siège*, jamais une main. Parmi les règles de mains du règlement des tournois WSOP, le seul ordre des enseignes concerne le stud et le razz. Si deux mains de cinq cartes sont identiques rang pour rang, le pot est partagé, quelles que soient les enseignes.

**Q. Que se passe-t-il si les deux joueurs ont exactement la même main ?**

A. Le pot est partagé à parts égales — un « chop ». La façon dont les jetons sont physiquement répartis, qui reçoit le jeton restant et comment se règlent les pots annexes est expliquée dans les [règles du pot partagé](/fr/blog/holdem-split-pot-rules).

**Q. Une égalité (pot partagé) est-elle possible au poker ?**

A. Oui, mais c'est rare. Une vraie égalité ne se produit que lorsque les cinq meilleures cartes de deux joueurs ou plus sont exactement identiques en rang — le plus souvent quand le board lui-même est la meilleure main (« jouer le board »), ou avec une quinte ou une couleur commune que les cartes fermées de personne ne peuvent améliorer. Le pot est alors partagé à parts égales. Les kickers existent justement pour départager la plupart des égalités avant qu'elles ne deviennent un partage.

**Q. Qui gagne au poker quand personne n'a rien ?**

A. Le joueur qui a la meilleure carte haute. On compare les cinq meilleures cartes de chaque joueur de la plus haute à la plus basse : la première carte plus haute gagne. Les cartes du board comptent pour tout le monde, donc seules tes cartes fermées qui entrent dans tes cinq meilleures peuvent faire la différence. Si les cinq cartes sont identiques rang pour rang, le pot est partagé.

**Q. Un as en main fait-il gagner en cas d'égalité ?**

A. Non, pas en soi. Un as en main ne compte que s'il entre dans tes cinq meilleures cartes. Sur un board A♠ K♥ Q♣ J♦ 10♠, la quinte à l'as est déjà posée sur le board : tenir un as n'y ajoute rien, tout le monde joue le board et le pot est partagé. Et sur A♥ K♣ Q♦ J♠ 9♥, A♠ 3♠ contre A♦ 2♦ partagent aussi, les deux jouant A-A-K-Q-J. Un as en main ne départage que s'il améliore réellement ta main de cinq cartes.

---

## À retenir

1. Chaque égalité suit la même procédure : ==**rang de la combinaison → cartes qui la forment → kickers → partage**== — sans exception, et jamais par l'enseigne.
2. Un kicker ne compte que s'il ==g:entre dans tes cinq meilleures cartes== — les cartes du board peuvent le remplacer, et un board doublement pairé peut contrefaire entièrement ta double paire.
3. Les quintes se classent par leur carte haute (la roue est la plus petite), les couleurs se comparent sur les cinq cartes — et quand rien ne sépare les mains, le pot est partagé.

Fixe l'ordre complet avec [l'ordre des combinaisons au poker](/fr/blog/holdem-hand-rankings), maîtrise la carte d'accompagnement elle-même avec [c'est quoi le kicker](/fr/blog/holdem-kicker), et vois exactement comment les pots à égalité sont divisés dans le [guide du pot partagé](/fr/blog/holdem-split-pot-rules).

---

## Articles liés

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/fr/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">C'est quoi le kicker au poker ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">La carte d'accompagnement elle-même — quelles mains en ont, et combien</div>
  </a>
  <a href="/fr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Combinaisons</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Combinaisons au poker : l'ordre des mains</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les 10 combinaisons avec probabilités, exemples et énigmes de board</div>
  </a>
  <a href="/fr/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Duel de mains</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Suite ou couleur : qui gagne ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Les maths, les boards pièges et les égalités de la confusion n°1</div>
  </a>
  <a href="/fr/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pot partagé</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot partagé : quand et comment ?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 cas de partage et 3 idées fausses sur ce qui fait gagner</div>
  </a>
</div>
`.trim(),
};
